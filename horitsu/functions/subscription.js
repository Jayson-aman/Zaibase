/**
 * Zaibase法律相談 Stripe 定期課金
 *
 * createHoritsuCheckout    — Checkout Session 生成（プラン申込）
 * horitsuSubWebhook        — Stripe Webhook イベント処理
 * cancelHoritsuSub         — 期間終了時に解約
 * getHoritsuPlan           — 現在のプラン情報取得
 *
 * Firestore horitsuProfiles/{uid} フィールド:
 *   stripeCustomerId, stripeSubscriptionId
 *   plan: free / standard / pro
 *   interval: monthly / annual
 *   status: active / past_due / cancelled
 *   renewalAt, activatedAt, groupDiscountGranted
 *
 * 必須 Secrets:
 *   HORITSU_STRIPE_SECRET_KEY
 *   HORITSU_STRIPE_WEBHOOK_SECRET
 *
 * セットアップ:
 *   firebase functions:secrets:set HORITSU_STRIPE_SECRET_KEY
 *   firebase functions:secrets:set HORITSU_STRIPE_WEBHOOK_SECRET
 *   Stripeダッシュボード → Webhook → エンドポイント:
 *     https://asia-northeast1-zaibase-horitsu.cloudfunctions.net/horitsuSubWebhook
 *     イベント: checkout.session.completed, customer.subscription.updated,
 *               customer.subscription.deleted, invoice.payment_succeeded,
 *               invoice.payment_failed
 */
const { onCall, onRequest, HttpsError } = require("firebase-functions/v2/https");
const { getFirestore, Timestamp, FieldValue } = require("firebase-admin/firestore");
const { defineSecret } = require("firebase-functions/params");

const db = getFirestore();
const STRIPE_KEY = defineSecret("HORITSU_STRIPE_SECRET_KEY");
const STRIPE_WH  = defineSecret("HORITSU_STRIPE_WEBHOOK_SECRET");

// ── プラン定義 ──────────────────────────────────────────────────────
const PLAN_META = {
  standard: { name: "スタンダードプラン", monthly: 2980,  annual: 29800 },
  pro:      { name: "プロプラン",         monthly: 7800,  annual: 78000 },
};

// Zaibase建設プロプラン会員割引（¥1,000引き）
const GROUP_DISCOUNT = { standard: 1000, pro: 1000 };

const VALID_PLANS     = ["standard", "pro"];
const VALID_INTERVALS = ["monthly", "annual"];

// ── ヘルパー ────────────────────────────────────────────────────────
async function getOrCreateCustomer(stripe, uid, email, displayName) {
  const ref = db.collection("horitsuProfiles").doc(uid);
  const snap = await ref.get();
  const profile = snap.exists ? snap.data() : {};

  if (profile.stripeCustomerId) {
    try {
      const c = await stripe.customers.retrieve(profile.stripeCustomerId);
      if (!c.deleted) return c.id;
    } catch (_) {}
  }

  const customer = await stripe.customers.create({
    email: email || undefined,
    name:  displayName || undefined,
    description: "Zaibase Group 法律相談ユーザー",
    metadata: { firebase_uid: uid },
  });

  await ref.set({ stripeCustomerId: customer.id }, { merge: true });
  return customer.id;
}

async function getOrCreatePriceId(stripe, plan, interval, groupDiscount) {
  const meta  = PLAN_META[plan];
  const baseAmount = interval === "annual" ? meta.annual : meta.monthly;
  const amount = groupDiscount ? Math.max(0, baseAmount - GROUP_DISCOUNT[plan]) : baseAmount;
  const si = interval === "annual" ? "year" : "month";
  const suffix = groupDiscount ? "_group" : "";
  const lookupKey = `horitsu_${plan}_${interval}${suffix}`;

  const existing = await stripe.prices.list({ lookup_keys: [lookupKey], limit: 1 });
  if (existing.data.length > 0) return existing.data[0].id;

  const allProducts = await stripe.products.search({
    query: `metadata['horitsu_plan']:'${plan}'`,
    limit: 1,
  }).catch(() => ({ data: [] }));

  let productId;
  if (allProducts.data.length > 0) {
    productId = allProducts.data[0].id;
  } else {
    const p = await stripe.products.create({
      name: `Zaibase Group 法律相談 ${meta.name}`,
      metadata: { horitsu_plan: plan },
    });
    productId = p.id;
  }

  const price = await stripe.prices.create({
    product: productId,
    unit_amount: amount,
    currency: "jpy",
    recurring: { interval: si },
    lookup_key: lookupKey,
    transfer_lookup_key: true,
    metadata: { horitsu_plan: plan, horitsu_interval: interval, group_discount: String(groupDiscount) },
  });

  return price.id;
}

// ── 1. Checkout Session 生成 ────────────────────────────────────────
exports.createHoritsuCheckout = onCall(
  { region: "asia-northeast1", enforceAppCheck: true, secrets: [STRIPE_KEY] },
  async (req) => {
    const uid = req.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "ログインが必要です");

    const { plan, interval = "monthly", returnUrl } = req.data || {};
    if (!VALID_PLANS.includes(plan))
      throw new HttpsError("invalid-argument", "無効なプランです");
    if (!VALID_INTERVALS.includes(interval))
      throw new HttpsError("invalid-argument", "interval は monthly または annual のみ");

    const stripe = require("stripe")(STRIPE_KEY.value());

    const profileSnap = await db.collection("horitsuProfiles").doc(uid).get();
    const profile = profileSnap.exists ? profileSnap.data() : {};

    if (profile.status === "active" && profile.plan === plan && profile.interval === interval)
      throw new HttpsError("already-exists", "すでに同じプランに加入しています");

    const groupDiscount = !!profile.groupDiscountGranted;
    const customerId = await getOrCreateCustomer(
      stripe, uid,
      req.auth.token?.email,
      req.auth.token?.name
    );

    // 既存サブスクリプションがある場合はカスタマーポータルへ
    if (profile.stripeSubscriptionId && profile.status === "active") {
      const portalSession = await stripe.billingPortal.sessions.create({
        customer: customerId,
        return_url: returnUrl || "https://zaibase-horitsu.web.app/",
      });
      return { ok: true, mode: "portal", url: portalSession.url };
    }

    const priceId = await getOrCreatePriceId(stripe, plan, interval, groupDiscount);

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer: customerId,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: (returnUrl || "https://zaibase-horitsu.web.app/") + "?checkout=success&session_id={CHECKOUT_SESSION_ID}",
      cancel_url:  (returnUrl || "https://zaibase-horitsu.web.app/") + "?checkout=cancel",
      metadata: { firebase_uid: uid, plan, interval, group_discount: String(groupDiscount) },
      subscription_data: {
        metadata: { firebase_uid: uid, plan, interval },
        trial_period_days: 0,
      },
      payment_method_options: {
        card: { statement_descriptor_suffix_kanji: "Zaibase法律相談" },
      },
      locale: "ja",
    });

    return { ok: true, mode: "checkout", url: session.url, sessionId: session.id };
  }
);

// ── 2. Stripe Webhook ───────────────────────────────────────────────
exports.horitsuSubWebhook = onRequest(
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
      console.error("Webhook signature error:", err.message);
      return res.status(400).send("Webhook Error");
    }

    try { await handleSubEvent(stripe, event); }
    catch (err) { console.error("handleSubEvent error:", err); }

    res.json({ received: true });
  }
);

async function handleSubEvent(stripe, event) {
  const { type, data } = event;
  const obj = data.object;

  if (type === "checkout.session.completed") {
    if (obj.mode !== "subscription") return;
    const uid = obj.metadata?.firebase_uid;
    if (!uid) return;
    const plan     = obj.metadata?.plan;
    const interval = obj.metadata?.interval || "monthly";
    const sub      = await stripe.subscriptions.retrieve(obj.subscription);
    await db.collection("horitsuProfiles").doc(uid).set({
      stripeCustomerId:    obj.customer,
      stripeSubscriptionId: obj.subscription,
      plan, interval,
      status: "active",
      renewalAt:    Timestamp.fromMillis(sub.current_period_end * 1000),
      activatedAt:  Timestamp.now(),
    }, { merge: true });
    await _logRevenue(uid, plan, interval, sub.current_period_end, "activated");
    return;
  }

  if (type === "customer.subscription.updated") {
    const uid = obj.metadata?.firebase_uid;
    if (!uid) return;
    const status = { active: "active", past_due: "past_due", canceled: "cancelled" }[obj.status] || obj.status;
    await db.collection("horitsuProfiles").doc(uid).set({
      stripeSubscriptionId: obj.id,
      plan:     obj.metadata?.plan || "free",
      interval: obj.metadata?.interval || "monthly",
      status,
      renewalAt: Timestamp.fromMillis(obj.current_period_end * 1000),
    }, { merge: true });
    return;
  }

  if (type === "customer.subscription.deleted") {
    const uid = obj.metadata?.firebase_uid;
    if (!uid) return;
    await db.collection("horitsuProfiles").doc(uid).set({
      plan: "free", status: "cancelled",
      renewalAt: null, stripeSubscriptionId: null,
      cancelledAt: Timestamp.now(),
    }, { merge: true });
    await _logRevenue(uid, "free", null, null, "cancelled");
    return;
  }

  if (type === "invoice.payment_succeeded") {
    if (!obj.subscription) return;
    const sub = await stripe.subscriptions.retrieve(obj.subscription);
    const uid = sub.metadata?.firebase_uid;
    if (!uid) return;
    await db.collection("horitsuProfiles").doc(uid).set({
      status: "active",
      renewalAt:       Timestamp.fromMillis(sub.current_period_end * 1000),
      lastPaymentAt:   Timestamp.now(),
      lastPaymentAmount: obj.amount_paid,
    }, { merge: true });
    await _logRevenue(uid, sub.metadata?.plan, sub.metadata?.interval, sub.current_period_end, "renewal", obj.amount_paid);
    return;
  }

  if (type === "invoice.payment_failed") {
    if (!obj.subscription) return;
    const sub = await stripe.subscriptions.retrieve(obj.subscription);
    const uid = sub.metadata?.firebase_uid;
    if (!uid) return;
    await db.collection("horitsuProfiles").doc(uid).set({
      status: "past_due", paymentFailedAt: Timestamp.now(),
    }, { merge: true });
    return;
  }
}

async function _logRevenue(uid, plan, interval, periodEndSec, event, amount) {
  const ym = new Date().toISOString().slice(0, 7);
  await db.collection("horitsuRevenueLogs").add({
    uid, plan, interval, event,
    amount: amount || null,
    periodEnd: periodEndSec ? Timestamp.fromMillis(periodEndSec * 1000) : null,
    ym,
    createdAt: FieldValue.serverTimestamp(),
  });
}

// ── 3. 解約 ────────────────────────────────────────────────────────
exports.cancelHoritsuSub = onCall(
  { region: "asia-northeast1", enforceAppCheck: true, secrets: [STRIPE_KEY] },
  async (req) => {
    const uid = req.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "ログインが必要です");

    const snap = await db.collection("horitsuProfiles").doc(uid).get();
    const profile = snap.exists ? snap.data() : {};
    if (!profile.stripeSubscriptionId)
      throw new HttpsError("not-found", "有効なサブスクリプションがありません");

    const stripe = require("stripe")(STRIPE_KEY.value());
    await stripe.subscriptions.update(profile.stripeSubscriptionId, {
      cancel_at_period_end: true,
    });

    await db.collection("horitsuProfiles").doc(uid).set({
      cancelRequestedAt: Timestamp.now(),
    }, { merge: true });

    return { ok: true, message: "期間終了時に自動解約されます" };
  }
);

// ── 4. プラン情報取得 ──────────────────────────────────────────────
exports.getHoritsuPlan = onCall(
  { region: "asia-northeast1", enforceAppCheck: true },
  async (req) => {
    const uid = req.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "ログインが必要です");

    const snap = await db.collection("horitsuProfiles").doc(uid).get();
    if (!snap.exists) return { plan: "free", status: "active", consultsThisMonth: 0 };

    const { plan, interval, status, renewalAt, activatedAt, groupDiscountGranted, consultsThisMonth } = snap.data();
    return {
      plan: plan || "free",
      interval: interval || null,
      status: status || "active",
      renewalAt: renewalAt?.toMillis() || null,
      activatedAt: activatedAt?.toMillis() || null,
      groupDiscountGranted: !!groupDiscountGranted,
      consultsThisMonth: consultsThisMonth || 0,
    };
  }
);

// ── 5. グループ割引申請（管理者が承認） ────────────────────────────
exports.applyGroupDiscount = onCall(
  { region: "asia-northeast1", enforceAppCheck: true },
  async (req) => {
    const uid = req.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "ログインが必要です");

    // Zaibase建設のプロプランUID（申告制）を記録して管理者が確認
    const { kensetsuUid } = req.data || {};
    await db.collection("horitsuProfiles").doc(uid).set({
      groupDiscountApplied: true,
      groupDiscountKensetsuUid: kensetsuUid || null,
      groupDiscountGranted: false, // 管理者が true に変更
      groupDiscountAppliedAt: FieldValue.serverTimestamp(),
    }, { merge: true });

    return { ok: true, message: "申請を受け付けました。1〜2営業日以内に確認します。" };
  }
);
