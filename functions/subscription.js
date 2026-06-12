/**
 * Zaibase Stripe 定期課金（Subscription Billing）
 *
 * createCheckoutSession    — Stripe Checkout Session 生成（プラン申込・変更）
 * stripeSubWebhook         — Webhook イベント処理（subscription / invoice）
 * switchPlan               — プランアップグレード・ダウングレード
 * cancelStripeSubscription — 期間終了時に解約（Stripe側）
 * getMySubscription        — 現在のサブスクリプション情報取得
 *
 * Firestore craftsmanProfiles/{uid} に追記するフィールド:
 *   stripeCustomerId        — Stripe Customer ID
 *   stripeSubscriptionId    — 現在の Subscription ID
 *   subscriptionPlan        — free / starter / pro / team
 *   subscriptionInterval    — monthly / annual
 *   subscriptionStatus      — active / past_due / cancelled / trialing
 *   subscriptionRenewalAt   — 次回更新日（Timestamp）
 *
 * 必須 Secrets:
 *   STRIPE_SECRET_KEY          — Stripe シークレットキー
 *   STRIPE_SUB_WEBHOOK_SECRET  — このWebhook専用の署名シークレット
 *
 * セットアップ:
 *   firebase functions:secrets:set STRIPE_SECRET_KEY
 *   firebase functions:secrets:set STRIPE_SUB_WEBHOOK_SECRET
 *   Stripe ダッシュボード → Webhook → エンドポイント追加:
 *     https://asia-northeast1-zaisai-share.cloudfunctions.net/stripeSubWebhook
 *     イベント: checkout.session.completed, customer.subscription.updated,
 *               customer.subscription.deleted, invoice.payment_succeeded,
 *               invoice.payment_failed
 */
const { onCall, onRequest, HttpsError } = require("firebase-functions/v2/https");
const { getFirestore, Timestamp, FieldValue } = require("firebase-admin/firestore");
const { getMessaging } = require("firebase-admin/messaging");
const { defineSecret } = require("firebase-functions/params");

const db = getFirestore();
const STRIPE_SECRET_KEY = defineSecret("STRIPE_SECRET_KEY");
const STRIPE_SUB_WEBHOOK_SECRET = defineSecret("STRIPE_SUB_WEBHOOK_SECRET");

// ── プラン定義 ─────────────────────────────────────────────────────
const PLAN_META = {
  starter: {
    name: "スタータープラン",
    monthly: 1980,
    annual: 19800,
    productMeta: "starter",
  },
  pro: {
    name: "プロプラン",
    monthly: 5480,
    annual: 54800,
    productMeta: "pro",
  },
  team: {
    name: "チームプラン",
    monthly: 14800,
    annual: 148000,
    productMeta: "team",
  },
};

const VALID_PLANS = ["starter", "pro", "team"];
const VALID_INTERVALS = ["monthly", "annual"];

// ── Stripe Price の取得または作成（初回セットアップ自動化）──────────
async function getOrCreatePriceId(stripe, plan, interval) {
  const lookupKey = `zaibase_${plan}_${interval}`;
  const meta = PLAN_META[plan];
  const amount = meta[interval];
  const stripeInterval = interval === "annual" ? "year" : "month";

  const existing = await stripe.prices.list({ lookup_keys: [lookupKey], limit: 1 });
  if (existing.data.length > 0) return existing.data[0].id;

  // 対応 Product を検索（なければ作成）
  const allProducts = await stripe.products.search({
    query: `metadata['zaibase_plan']:'${plan}'`,
    limit: 1,
  }).catch(() => ({ data: [] }));

  let productId;
  if (allProducts.data.length > 0) {
    productId = allProducts.data[0].id;
  } else {
    const product = await stripe.products.create({
      name: `Zaibase建設 ${meta.name}`,
      metadata: { zaibase_plan: plan },
    });
    productId = product.id;
  }

  const price = await stripe.prices.create({
    product: productId,
    unit_amount: amount,
    currency: "jpy",
    recurring: { interval: stripeInterval },
    lookup_key: lookupKey,
    transfer_lookup_key: true,
    metadata: { zaibase_plan: plan, zaibase_interval: interval },
  });

  return price.id;
}

// ── Stripe Customer の取得または作成 ──────────────────────────────
async function getOrCreateCustomer(stripe, uid, email, displayName) {
  const profileRef = db.collection("craftsmanProfiles").doc(uid);
  const snap = await profileRef.get();
  const profile = snap.exists ? snap.data() : {};

  if (profile.stripeCustomerId) {
    try {
      const customer = await stripe.customers.retrieve(profile.stripeCustomerId);
      if (!customer.deleted) return customer.id;
    } catch (_) {}
  }

  const customer = await stripe.customers.create({
    email: email || undefined,
    name: displayName || undefined,
    description: "Zaibase建設 ユーザー",
    metadata: { firebase_uid: uid },
  });

  await profileRef.set({ stripeCustomerId: customer.id }, { merge: true });
  return customer.id;
}

// ── 1. Checkout Session 生成 ───────────────────────────────────────
exports.createCheckoutSession = onCall(
  { region: "asia-northeast1", secrets: [STRIPE_SECRET_KEY] },
  async (req) => {
    const uid = req.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "ログインが必要です");

    const stripe = require("stripe")(STRIPE_SECRET_KEY.value());
    const d = req.data || {};
    const plan = d.plan;
    const interval = d.interval || "monthly";

    if (!VALID_PLANS.includes(plan))
      throw new HttpsError("invalid-argument", "無効なプランです");
    if (!VALID_INTERVALS.includes(interval))
      throw new HttpsError("invalid-argument", "interval は monthly または annual のみ");

    // 現在のプランを確認（同じプランへの申込を防止）
    const profileSnap = await db.collection("craftsmanProfiles").doc(uid).get();
    const profile = profileSnap.exists ? profileSnap.data() : {};
    if (
      profile.subscriptionStatus === "active" &&
      profile.subscriptionPlan === plan &&
      profile.subscriptionInterval === interval
    ) {
      throw new HttpsError("already-exists", "すでに同じプランに加入しています");
    }

    const customerId = await getOrCreateCustomer(
      stripe, uid,
      req.auth.token?.email,
      req.auth.token?.name
    );
    const priceId = await getOrCreatePriceId(stripe, plan, interval);

    // プラン変更の場合は既存 Subscription の更新セッションを生成
    if (profile.stripeSubscriptionId && profile.subscriptionStatus === "active") {
      const session = await stripe.billingPortal.sessions.create({
        customer: customerId,
        return_url: d.returnUrl || "https://zaisai-share.web.app/",
      });
      return { ok: true, mode: "portal", url: session.url };
    }

    // 新規 Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer: customerId,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: (d.returnUrl || "https://zaisai-share.web.app/") + "?checkout=success&session_id={CHECKOUT_SESSION_ID}",
      cancel_url: (d.returnUrl || "https://zaisai-share.web.app/") + "?checkout=cancel",
      metadata: { firebase_uid: uid, plan, interval },
      subscription_data: {
        metadata: { firebase_uid: uid, plan, interval },
        trial_period_days: d.trialDays || 0,
      },
      locale: "ja",
    });

    return { ok: true, mode: "checkout", url: session.url, sessionId: session.id };
  }
);

// ── 2. Stripe Webhook ──────────────────────────────────────────────
exports.stripeSubWebhook = onRequest(
  { region: "asia-northeast1", secrets: [STRIPE_SECRET_KEY, STRIPE_SUB_WEBHOOK_SECRET] },
  async (req, res) => {
    const stripe = require("stripe")(STRIPE_SECRET_KEY.value());
    let event;
    try {
      event = stripe.webhooks.constructEvent(
        req.rawBody,
        req.headers["stripe-signature"],
        STRIPE_SUB_WEBHOOK_SECRET.value()
      );
    } catch (err) {
      console.error("Stripe webhook signature verification failed:", err.message);
      return res.status(400).send("Webhook Error");
    }

    try {
      await handleSubEvent(stripe, event);
    } catch (err) {
      console.error("handleSubEvent error:", err);
    }

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

    const plan = obj.metadata?.plan;
    const interval = obj.metadata?.interval || "monthly";
    const subId = obj.subscription;

    const sub = await stripe.subscriptions.retrieve(subId);
    const periodEnd = Timestamp.fromMillis(sub.current_period_end * 1000);

    await db.collection("craftsmanProfiles").doc(uid).set({
      stripeCustomerId: obj.customer,
      stripeSubscriptionId: subId,
      subscriptionPlan: plan,
      subscriptionInterval: interval,
      subscriptionStatus: "active",
      subscriptionRenewalAt: periodEnd,
      subscriptionActivatedAt: Timestamp.now(),
    }, { merge: true });

    console.log(`checkout.session.completed: uid=${uid} plan=${plan} interval=${interval}`);
    return;
  }

  if (type === "customer.subscription.updated") {
    const uid = obj.metadata?.firebase_uid;
    if (!uid) return;

    const priceId = obj.items?.data?.[0]?.price?.id;
    let plan = obj.metadata?.plan;
    let interval = obj.metadata?.interval || "monthly";

    if (priceId && !plan) {
      const price = await stripe.prices.retrieve(priceId);
      plan = price.metadata?.zaibase_plan || plan;
      interval = price.metadata?.zaibase_interval || interval;
    }

    const status = obj.status === "active" ? "active"
      : obj.status === "past_due" ? "past_due"
      : obj.status === "canceled" ? "cancelled"
      : obj.status;

    const periodEnd = Timestamp.fromMillis(obj.current_period_end * 1000);

    await db.collection("craftsmanProfiles").doc(uid).set({
      stripeSubscriptionId: obj.id,
      subscriptionPlan: plan || "free",
      subscriptionInterval: interval,
      subscriptionStatus: status,
      subscriptionRenewalAt: periodEnd,
    }, { merge: true });

    console.log(`subscription.updated: uid=${uid} plan=${plan} status=${status}`);
    return;
  }

  if (type === "customer.subscription.deleted") {
    const uid = obj.metadata?.firebase_uid;
    if (!uid) return;

    await db.collection("craftsmanProfiles").doc(uid).set({
      subscriptionPlan: "free",
      subscriptionStatus: "cancelled",
      subscriptionRenewalAt: null,
      stripeSubscriptionId: null,
      subscriptionCancelledAt: Timestamp.now(),
    }, { merge: true });

    console.log(`subscription.deleted: uid=${uid}`);
    return;
  }

  if (type === "invoice.payment_succeeded") {
    const subId = obj.subscription;
    if (!subId) return;

    const sub = await stripe.subscriptions.retrieve(subId);
    const uid = sub.metadata?.firebase_uid;
    if (!uid) return;

    const periodEnd = Timestamp.fromMillis(sub.current_period_end * 1000);
    await db.collection("craftsmanProfiles").doc(uid).set({
      subscriptionStatus: "active",
      subscriptionRenewalAt: periodEnd,
      lastPaymentAt: Timestamp.now(),
      lastPaymentAmount: obj.amount_paid,
    }, { merge: true });

    console.log(`invoice.payment_succeeded: uid=${uid} amount=${obj.amount_paid}`);
    return;
  }

  if (type === "invoice.payment_failed") {
    const subId = obj.subscription;
    if (!subId) return;

    const sub = await stripe.subscriptions.retrieve(subId);
    const uid = sub.metadata?.firebase_uid;
    if (!uid) return;

    await db.collection("craftsmanProfiles").doc(uid).set({
      subscriptionStatus: "past_due",
      paymentFailedAt: Timestamp.now(),
    }, { merge: true });

    // Push通知
    const profileSnap = await db.collection("craftsmanProfiles").doc(uid).get();
    const fcmToken = profileSnap.data()?.fcmToken;
    if (fcmToken) {
      try {
        await getMessaging().send({
          token: fcmToken,
          notification: {
            title: "⚠️ 決済に失敗しました",
            body: "カード情報を確認してください。更新されない場合、プランがフリーに変更されます。",
          },
        });
      } catch (_) {}
    }

    console.log(`invoice.payment_failed: uid=${uid}`);
    return;
  }
}

// ── 3. プラン変更（アップグレード・ダウングレード） ─────────────────
exports.switchPlan = onCall(
  { region: "asia-northeast1", secrets: [STRIPE_SECRET_KEY] },
  async (req) => {
    const uid = req.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "ログインが必要です");

    const stripe = require("stripe")(STRIPE_SECRET_KEY.value());
    const d = req.data || {};
    const newPlan = d.plan;
    const interval = d.interval || "monthly";

    if (!VALID_PLANS.includes(newPlan))
      throw new HttpsError("invalid-argument", "無効なプランです");

    const profileSnap = await db.collection("craftsmanProfiles").doc(uid).get();
    const profile = profileSnap.exists ? profileSnap.data() : {};

    if (!profile.stripeSubscriptionId)
      throw new HttpsError("failed-precondition", "有効なサブスクリプションがありません");

    const sub = await stripe.subscriptions.retrieve(profile.stripeSubscriptionId);
    const subItemId = sub.items.data[0].id;
    const newPriceId = await getOrCreatePriceId(stripe, newPlan, interval);

    // 即時切替（日割り精算あり）
    await stripe.subscriptions.update(profile.stripeSubscriptionId, {
      items: [{ id: subItemId, price: newPriceId }],
      proration_behavior: "always_invoice",
      metadata: { firebase_uid: uid, plan: newPlan, interval },
    });

    return { ok: true, message: `${PLAN_META[newPlan].name}に変更しました` };
  }
);

// ── 4. Stripe側で解約（期間終了時に自動解約） ──────────────────────
exports.cancelStripeSubscription = onCall(
  { region: "asia-northeast1", secrets: [STRIPE_SECRET_KEY] },
  async (req) => {
    const uid = req.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "ログインが必要です");

    const stripe = require("stripe")(STRIPE_SECRET_KEY.value());
    const d = req.data || {};

    const profileSnap = await db.collection("craftsmanProfiles").doc(uid).get();
    const profile = profileSnap.exists ? profileSnap.data() : {};

    if (!profile.stripeSubscriptionId)
      throw new HttpsError("failed-precondition", "有効なサブスクリプションがありません");

    // cancel_at_period_end = true で現期間終了後に解約
    await stripe.subscriptions.update(profile.stripeSubscriptionId, {
      cancel_at_period_end: true,
    });

    await db.collection("craftsmanProfiles").doc(uid).set({
      subscriptionStatus: "cancelled",
      subscriptionCancelledAt: Timestamp.now(),
      subscriptionCancelReason: d.reason || "未回答",
    }, { merge: true });

    await db.collection("churnReasons").add({
      uid,
      plan: profile.subscriptionPlan,
      reason: d.reason || "未回答",
      reasonDetail: d.detail || "",
      createdAt: Timestamp.now(),
    });

    const renewalAt = profile.subscriptionRenewalAt?.toDate
      ? profile.subscriptionRenewalAt.toDate().toISOString()
      : null;

    return {
      ok: true,
      cancelAt: renewalAt,
      message: "解約を受け付けました。現在の期間終了まで引き続きご利用いただけます。",
    };
  }
);

// ── 5. 現在のサブスクリプション状態取得 ─────────────────────────────
exports.getMySubscription = onCall(
  { region: "asia-northeast1", secrets: [STRIPE_SECRET_KEY] },
  async (req) => {
    const uid = req.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "ログインが必要です");

    const profileSnap = await db.collection("craftsmanProfiles").doc(uid).get();
    const profile = profileSnap.exists ? profileSnap.data() : {};

    const stripe = require("stripe")(STRIPE_SECRET_KEY.value());

    let stripeDetails = null;
    if (profile.stripeSubscriptionId) {
      try {
        const sub = await stripe.subscriptions.retrieve(profile.stripeSubscriptionId);
        stripeDetails = {
          status: sub.status,
          currentPeriodEnd: new Date(sub.current_period_end * 1000).toISOString(),
          cancelAtPeriodEnd: sub.cancel_at_period_end,
          latestInvoiceStatus: sub.latest_invoice
            ? (await stripe.invoices.retrieve(String(sub.latest_invoice))).status
            : null,
        };
      } catch (_) {}
    }

    return {
      ok: true,
      plan: profile.subscriptionPlan || "free",
      interval: profile.subscriptionInterval || "monthly",
      status: profile.subscriptionStatus || "free",
      renewalAt: profile.subscriptionRenewalAt?.toDate?.()?.toISOString() || null,
      stripeCustomerId: profile.stripeCustomerId || null,
      stripeDetails,
    };
  }
);
