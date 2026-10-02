/**
 * ahiru Web版：公式集(¥200)・公式集まとめ買い(¥2,980)・新規追加単元(¥150)買い切りのStripe直接決済
 *
 * なぜ必要か:
 *   RevenueCatのWeb Billingはサブスク用のオファリングPackageしか扱えず、
 *   消費型（買い切り・回数券）のワンタイム商品には対応していない。
 *   iOS/AndroidはRevenueCat経由（contentUnlock.js）のままとし、Web版だけ
 *   RevenueCatを介さずStripeへ直接ワンタイム決済させる。
 *
 * createAhiruUnlockCheckout  — Checkout Session 生成（買い切り1件分）
 * confirmAhiruUnlockCheckout — Checkout成功直後にクライアントから呼び、即座に解放する
 * ahiruUnlockWebhook         — Stripe Webhook（タブを閉じた場合などの保険として非同期でも解放する）
 *
 * confirm と webhook の両方から同じunlockIfNeededを呼ぶが、Firestoreの
 * arrayUnionは同じitemIdを何度書いても結果が変わらないため、二重実行しても安全。
 *
 * Firestore:
 *   formulaUnlocks/{uid}.unlocked: string[]（figureId）
 *   unitUnlocks/{uid}.unlocked:    string[]（lessonId）
 *   ※ contentUnlock.js（RevenueCat経由）と同じコレクション・同じ形へ書き込む。
 *
 * 金額は constants/pricing.ts の PRICES.formulaUnlock / PRICES.unitUnlock と
 * 必ず一致させること（Single Source of Truthはクライアント側にあるが、
 * Cloud Functions側はNode環境が別なのでここに複製している）。
 *
 * 必須 Secrets:
 *   AHIRU_STRIPE_SECRET_KEY
 *   AHIRU_STRIPE_WEBHOOK_SECRET
 *
 * セットアップ:
 *   firebase functions:secrets:set AHIRU_STRIPE_SECRET_KEY
 *   firebase functions:secrets:set AHIRU_STRIPE_WEBHOOK_SECRET
 *   Stripeダッシュボード → Webhook → エンドポイント:
 *     https://asia-northeast1-<ahiruのFirebaseプロジェクトID>.cloudfunctions.net/ahiruUnlockWebhook
 *     イベント: checkout.session.completed / charge.refunded / charge.dispute.created
 */
const { onCall, onRequest, HttpsError } = require("firebase-functions/v2/https");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const { defineSecret } = require("firebase-functions/params");

const db = getFirestore();
const STRIPE_KEY = defineSecret("AHIRU_STRIPE_SECRET_KEY");
const STRIPE_WH = defineSecret("AHIRU_STRIPE_WEBHOOK_SECRET");

// Object.create(null) で prototype を持たない素の辞書にする。
// 素のオブジェクトリテラルだと TYPE_CONFIG["__proto__"] が Object.prototype
// を返してしまい（truthy）、外部から渡される type の検証（下の !config）を
// すり抜けてしまう。
const TYPE_CONFIG = Object.assign(Object.create(null), {
  formula: { collection: "formulaUnlocks", amount: 200, label: "公式集" },
  bundle: { collection: "formulaUnlocks", amount: 2980, label: "公式集まとめ買い" },
  unit: { collection: "unitUnlocks", amount: 150, label: "単元" },
});

async function getAlreadyUnlocked(config, uid) {
  const snap = await db.collection(config.collection).doc(uid).get();
  return /** @type {string[]} */ (snap.data()?.unlocked ?? []);
}

// テストキー（sk_test_）のままデプロイされていると、テストカード4242でも
// payment_status が paid になり、誰でも無料で解放できてしまう。本番では
// livemode のセッションだけを受け付ける。テスト中だけ、Functionsの環境変数
// AHIRU_ALLOW_STRIPE_TEST=1 を設定して許可する。
function assertLiveSession(session) {
  if (session.livemode === true) return;
  if (process.env.AHIRU_ALLOW_STRIPE_TEST === "1") return;
  throw new HttpsError("failed-precondition", "テスト決済は受け付けていません");
}

// stripeUnlocked：Stripe（Web）で買った分。RevenueCat経由（ネイティブ）の購入回数と
// 突き合わせるとき、こちらを数えから除くために別に持つ（contentUnlock.js）。
async function unlockIfNeeded(config, uid, itemId) {
  await db.collection(config.collection).doc(uid).set(
    {
      uid,
      unlocked: FieldValue.arrayUnion(itemId),
      stripeUnlocked: FieldValue.arrayUnion(itemId),
      updatedAt: FieldValue.serverTimestamp(),
    },
    { merge: true }
  );
}

// そのセッションの支払いが、すでに返金・チャージバックされているか。
// Checkoutセッションの payment_status は返金後も "paid" のままなので、過去のsession_idで
// confirmAhiruUnlockCheckout を呼ぶと、取り消したはずの解放が復活してしまう。
// 支払い（PaymentIntent）の最新の請求（charge）を見て判定する。
async function isSessionRefunded(stripe, session) {
  const pi = session.payment_intent;
  if (!pi) return false;
  const piId = typeof pi === "string" ? pi : pi.id;
  const intent = await stripe.paymentIntents.retrieve(piId, { expand: ["latest_charge"] });
  const ch = intent.latest_charge;
  if (!ch || typeof ch === "string") return false;
  return ch.refunded === true || (ch.amount_refunded ?? 0) > 0 || ch.disputed === true;
}

// 返金・チャージバックされたら解放を取り消す。
async function revokeIfRefunded(stripe, charge) {
  const pi = charge.payment_intent;
  if (!pi) return;
  const sessions = await stripe.checkout.sessions.list({ payment_intent: pi, limit: 1 });
  const obj = sessions.data[0];
  if (!obj) return;
  const uid = obj.metadata?.firebase_uid;
  const config = TYPE_CONFIG[obj.metadata?.type];
  const itemId = obj.metadata?.item_id;
  if (!uid || !config || !itemId) return;
  await db.collection(config.collection).doc(uid).set(
    {
      unlocked: FieldValue.arrayRemove(itemId),
      stripeUnlocked: FieldValue.arrayRemove(itemId),
      updatedAt: FieldValue.serverTimestamp(),
    },
    { merge: true }
  );
}

// returnUrl は自サイトのURLだけ許可する（クライアントが外部URLを渡せてしまうため）。
function safeBaseUrl(returnUrl) {
  const fallback = "https://exam.zaibase.group/";
  if (typeof returnUrl !== "string") return fallback;
  try {
    const u = new URL(returnUrl);
    const allowed = ["https://exam.zaibase.group", "https://exam-zaibase-group.vercel.app"];
    if (!allowed.includes(u.origin) && !(process.env.AHIRU_ALLOW_STRIPE_TEST === "1" && u.hostname === "localhost")) {
      return fallback;
    }
    return `${u.origin}${u.pathname}`;
  } catch {
    return fallback;
  }
}

function appendQuery(url, query) {
  return url + (url.includes("?") ? "&" : "?") + query;
}

// ── 1. Checkout Session 生成 ────────────────────────────────────────
exports.createAhiruUnlockCheckout = onCall(
  { region: "asia-northeast1", secrets: [STRIPE_KEY] },
  async (req) => {
    const uid = req.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "ログインが必要です");

    // 匿名のアカウントで決済すると、匿名UIDを失った時点で支払い済みの解放が二度と見えなくなる。
    // クライアントでもログインを求めているが、直接呼ばれても通さない。
    if (req.auth?.token?.firebase?.sign_in_provider === "anonymous") {
      throw new HttpsError("failed-precondition", "ご購入にはログイン（無料のアカウント登録）が必要です");
    }

    const { type, itemId, returnUrl } = req.data ?? {};
    const config = TYPE_CONFIG[type];
    if (!config || typeof itemId !== "string" || itemId.length === 0 || itemId.length > 200) {
      throw new HttpsError("invalid-argument", "type/itemIdが不正です");
    }
    // まとめ買いのIDは決まった形だけ。公式1項目のIDに bundle: を名乗らせない。
    const bundleIdOk = /^bundle:(chugaku|koko):(算数|国語|理科|社会|英語)$/.test(itemId);
    if (type === "bundle" ? !bundleIdOk : itemId.startsWith("bundle:")) {
      throw new HttpsError("invalid-argument", "itemIdが不正です");
    }

    const alreadyUnlocked = await getAlreadyUnlocked(config, uid);
    if (alreadyUnlocked.includes(itemId)) {
      return { ok: true, alreadyUnlocked: true };
    }

    const stripe = require("stripe")(STRIPE_KEY.value());
    const base = safeBaseUrl(returnUrl);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "jpy",
            unit_amount: config.amount,
            product_data: { name: `ahiru ${config.label}解放（1件）` },
          },
          quantity: 1,
        },
      ],
      success_url: appendQuery(base, "unlock_success=1&session_id={CHECKOUT_SESSION_ID}"),
      cancel_url: appendQuery(base, "unlock_cancel=1"),
      metadata: { firebase_uid: uid, type, item_id: itemId },
      // カードに固定する。コンビニ払いなどの遅延決済が出ると、入金前は unpaid のまま完了イベントが来て、
      // 入金後を処理していない当コードでは永久に未解放になる。
      payment_method_types: ["card"],
      locale: "ja",
    });

    return { ok: true, url: session.url, sessionId: session.id };
  }
);

// ── 2. Checkout完了直後の即時確認 ─────────────────────────────────
// Webhookの反映を待たずにUIへ即座に反映させるため、成功リダイレクト直後に
// クライアントから呼ぶ。session.metadataのfirebase_uidが呼び出し元と
// 一致することを確認してから解放するので、他人のsessionIdを渡されても
// 解放されない。
exports.confirmAhiruUnlockCheckout = onCall(
  { region: "asia-northeast1", secrets: [STRIPE_KEY] },
  async (req) => {
    const uid = req.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "ログインが必要です");

    const { sessionId } = req.data ?? {};
    if (typeof sessionId !== "string" || sessionId.length === 0) {
      throw new HttpsError("invalid-argument", "sessionIdが不正です");
    }

    const stripe = require("stripe")(STRIPE_KEY.value());
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    assertLiveSession(session);
    if (session.metadata?.firebase_uid !== uid) {
      throw new HttpsError("permission-denied", "このセッションにアクセスできません");
    }
    if (session.payment_status !== "paid") {
      throw new HttpsError("failed-precondition", "決済が完了していません");
    }
    if (await isSessionRefunded(stripe, session)) {
      throw new HttpsError("failed-precondition", "この決済は返金済みのため、解放できません");
    }

    const type = session.metadata?.type;
    const itemId = session.metadata?.item_id;
    const config = TYPE_CONFIG[type];
    if (!config || !itemId) {
      throw new HttpsError("internal", "セッション情報が不正です");
    }

    await unlockIfNeeded(config, uid, itemId);
    return { ok: true, type, itemId };
  }
);

// ── 3. Stripe Webhook（保険） ───────────────────────────────────────
// 決済完了後にタブを閉じた・通信が切れた等でconfirmAhiruUnlockCheckoutが
// 呼ばれなかった場合でも、ここで確実に解放する。
exports.ahiruUnlockWebhook = onRequest(
  { region: "asia-northeast1", secrets: [STRIPE_KEY, STRIPE_WH] },
  async (req, res) => {
    // シークレットが未設定（placeholder）のままだと、署名の鍵が公開の文字列になり、
    // 誰でも偽の決済完了イベントで無料解放できてしまう。本物の鍵が入るまで受け付けない。
    if (!String(STRIPE_WH.value()).startsWith("whsec_")) {
      console.error("ahiruUnlockWebhook: AHIRU_STRIPE_WEBHOOK_SECRET が未設定です");
      return res.status(503).send("Webhook not configured");
    }
    const stripe = require("stripe")(STRIPE_KEY.value());
    let event;
    try {
      event = stripe.webhooks.constructEvent(
        req.rawBody,
        req.headers["stripe-signature"],
        STRIPE_WH.value()
      );
    } catch (err) {
      console.error("ahiruUnlockWebhook signature error:", err.message);
      return res.status(400).send("Webhook Error");
    }

    try {
      if (event.type === "checkout.session.completed") {
        const obj = event.data.object;
        if (obj.mode === "payment" && obj.payment_status === "paid" && (obj.livemode === true || process.env.AHIRU_ALLOW_STRIPE_TEST === "1")) {
          const uid = obj.metadata?.firebase_uid;
          const type = obj.metadata?.type;
          const itemId = obj.metadata?.item_id;
          const config = TYPE_CONFIG[type];
          if (uid && config && itemId) {
            // 返金後に、同じ完了イベントが再送されても解放し直さない。
            // 確認に失敗したときは例外のまま外へ出し、500 を返して Stripe に再送させる。
            const refunded = await isSessionRefunded(stripe, obj);
            if (!refunded) await unlockIfNeeded(config, uid, itemId);
          }
        }
      } else if (event.type === "charge.refunded" || event.type === "charge.dispute.created") {
        const charge = event.type === "charge.refunded" ? event.data.object : { payment_intent: event.data.object.payment_intent };
        await revokeIfRefunded(stripe, charge);
      }
    } catch (err) {
      console.error("ahiruUnlockWebhook handling error:", err);
      // 200 を返すと Stripe が再送せず、「入金済みなのに未解放」「返金済みなのに解放が残る」が直らない。
      return res.status(500).send("Webhook handling error");
    }

    res.json({ received: true });
  }
);
