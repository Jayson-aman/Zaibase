/**
 * ahiru Web版：公式集(¥50)・新規追加単元(¥100)買い切りのStripe直接決済
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
 *     イベント: checkout.session.completed
 */
const { onCall, onRequest, HttpsError } = require("firebase-functions/v2/https");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const { defineSecret } = require("firebase-functions/params");

const db = getFirestore();
const STRIPE_KEY = defineSecret("AHIRU_STRIPE_SECRET_KEY");
const STRIPE_WH = defineSecret("AHIRU_STRIPE_WEBHOOK_SECRET");

const TYPE_CONFIG = {
  formula: { collection: "formulaUnlocks", amount: 50, label: "公式集" },
  unit: { collection: "unitUnlocks", amount: 100, label: "単元" },
};

async function getAlreadyUnlocked(config, uid) {
  const snap = await db.collection(config.collection).doc(uid).get();
  return /** @type {string[]} */ (snap.data()?.unlocked ?? []);
}

async function unlockIfNeeded(config, uid, itemId) {
  await db.collection(config.collection).doc(uid).set(
    { uid, unlocked: FieldValue.arrayUnion(itemId), updatedAt: FieldValue.serverTimestamp() },
    { merge: true }
  );
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

    const { type, itemId, returnUrl } = req.data ?? {};
    const config = TYPE_CONFIG[type];
    if (!config || typeof itemId !== "string" || itemId.length === 0) {
      throw new HttpsError("invalid-argument", "type/itemIdが不正です");
    }

    const alreadyUnlocked = await getAlreadyUnlocked(config, uid);
    if (alreadyUnlocked.includes(itemId)) {
      return { ok: true, alreadyUnlocked: true };
    }

    const stripe = require("stripe")(STRIPE_KEY.value());
    const base = returnUrl || "https://exam.zaibase.group/";

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
      payment_method_options: {
        card: { statement_descriptor_suffix_kanji: "ahiru" },
      },
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

    if (session.metadata?.firebase_uid !== uid) {
      throw new HttpsError("permission-denied", "このセッションにアクセスできません");
    }
    if (session.payment_status !== "paid") {
      throw new HttpsError("failed-precondition", "決済が完了していません");
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
        if (obj.mode === "payment" && obj.payment_status === "paid") {
          const uid = obj.metadata?.firebase_uid;
          const type = obj.metadata?.type;
          const itemId = obj.metadata?.item_id;
          const config = TYPE_CONFIG[type];
          if (uid && config && itemId) {
            await unlockIfNeeded(config, uid, itemId);
          }
        }
      }
    } catch (err) {
      console.error("ahiruUnlockWebhook handling error:", err);
    }

    res.json({ received: true });
  }
);
