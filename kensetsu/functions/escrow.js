/**
 * Zaibase エスクロー決済（Stripe Connect）
 *
 * 仕組み：
 *   1. マッチング成立 → 発注者が報酬をZaibaseに預託（Stripe PaymentIntent）
 *   2. 作業完了確認  → 職人が「完了報告」、発注者が「完了承認」
 *   3. 自動送金      → Stripe Transfer で職人のStripeアカウントに送金
 *   4. Zaibase手数料 → 発注者負担額に上乗せ（β: 一律10% = マッチング8% + エスクロー管理2%）
 *      ※ application_fee_amount は未使用。totalCharge = 報酬 + 手数料で預託し、
 *        承認時に報酬分のみ Transfer（手数料はプラットフォーム残高に残る）
 *
 * 法的注意：
 *   - Stripe Connect 利用時、Stripeが資金移動業者として登録済みのため Zaibase は仲介役
 *   - 顧問弁護士に確認推奨（資金決済法第37条・職安法との整理）
 *
 * ⚠️ PHASE 4 — index.js からはエクスポートしていません
 * 有効化: npm install stripe → secrets 設定 → index.js の escrow 行をアンコメント → deploy
 *
 * フィールド名: contracts の ordererId / contractorId / ordererFcmToken / contractorFcmToken
 * 直接支払フロー（エスクローなし）: payment_alert.js の markWorkComplete / confirmPayment
 */
const { onCall, onRequest, HttpsError } = require("firebase-functions/v2/https");
const { getFirestore, Timestamp } = require("firebase-admin/firestore");
const { getMessaging } = require("firebase-admin/messaging");
const { defineSecret } = require("firebase-functions/params");

const db = getFirestore();
const STRIPE_SECRET_KEY = defineSecret("STRIPE_SECRET_KEY");
const STRIPE_WEBHOOK_SECRET = defineSecret("STRIPE_WEBHOOK_SECRET");

// β用。本番は SPEC §6.3–6.4 の逓減率 + §6.7 の管理料（+1〜2%）に置き換え
const PLATFORM_FEE_RATE = 0.10;
const MIN_FEE_JPY = 500;

function calcPlatformFee(rewardAmount) {
  return Math.max(Math.round(rewardAmount * PLATFORM_FEE_RATE), MIN_FEE_JPY);
}

/** 旧フィールド名（clientId/workerId）との後方互換 */
function getOrdererId(c) {
  return c.ordererId || c.clientId;
}
function getContractorId(c) {
  return c.contractorId || c.workerId;
}
function getOrdererFcm(c) {
  return c.ordererFcmToken || c.clientFcmToken;
}
function getContractorFcm(c) {
  return c.contractorFcmToken || c.workerFcmToken;
}
function getContractorName(c) {
  return c.contractorName || c.workerName || "受託者";
}

async function sendPush(token, notification, data) {
  if (!token) return;
  try {
    await getMessaging().send({ token, notification, data });
  } catch (e) {
    console.warn("FCM send failed:", e.message);
  }
}

// ── 1. エスクロー預託 ─────────────────────────────────────────
exports.createEscrow = onCall(
  { region: "asia-northeast1", enforceAppCheck: true, secrets: [STRIPE_SECRET_KEY] },
  async (req) => {
    const stripe = require("stripe")(STRIPE_SECRET_KEY.value());
    const { contractId } = req.data || {};
    if (!contractId) throw new HttpsError("invalid-argument", "contractId required");
    if (!req.auth?.uid) throw new HttpsError("unauthenticated", "login required");

    const contractRef = db.collection("contracts").doc(contractId);
    const contractDoc = await contractRef.get();
    if (!contractDoc.exists) throw new HttpsError("not-found", "contract not found");

    const contract = contractDoc.data();
    const ordererId = getOrdererId(contract);
    if (ordererId !== req.auth.uid) {
      throw new HttpsError("permission-denied", "orderer only");
    }
    if (contract.escrowStatus === "held") {
      throw new HttpsError("already-exists", "escrow already created");
    }

    const rewardAmount = contract.rewardAmount;
    if (!rewardAmount || rewardAmount < 1) {
      throw new HttpsError("failed-precondition", "rewardAmount required");
    }

    const platformFee = calcPlatformFee(rewardAmount);
    const totalCharge = rewardAmount + platformFee;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalCharge,
      currency: "jpy",
      capture_method: "manual",
      payment_method_types: ["card"],
      metadata: {
        contractId,
        ordererId,
        contractorId: getContractorId(contract),
        rewardAmount: String(rewardAmount),
        platformFee: String(platformFee),
        zaibase: "escrow_v1",
      },
      description: `Zaibase工事請負報酬 契約ID:${contractId}`,
    });

    await contractRef.update({
      escrowStatus: "pending_payment",
      escrowPaymentIntentId: paymentIntent.id,
      escrowClientSecret: paymentIntent.client_secret,
      escrowAmount: rewardAmount,
      escrowPlatformFee: platformFee,
      escrowTotalCharge: totalCharge,
      escrowCreatedAt: Timestamp.now(),
    });

    return {
      clientSecret: paymentIntent.client_secret,
      rewardAmount,
      platformFee,
      totalCharge,
      paymentIntentId: paymentIntent.id,
    };
  }
);

// ── 2. Stripe Webhook（預託確定） ─────────────────────────────
exports.stripeWebhook = onRequest(
  { region: "asia-northeast1", enforceAppCheck: true, secrets: [STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET] },
  async (req, res) => {
    const stripe = require("stripe")(STRIPE_SECRET_KEY.value());
    const sig = req.headers["stripe-signature"];
    let event;
    try {
      event = stripe.webhooks.constructEvent(req.rawBody, sig, STRIPE_WEBHOOK_SECRET.value());
    } catch (e) {
      console.error("Webhook署名検証失敗:", e.message);
      return res.status(400).send(`Webhook Error: ${e.message}`);
    }

    if (event.type === "payment_intent.succeeded") {
      const pi = event.data.object;
      const { contractId } = pi.metadata || {};
      if (contractId) {
        await db.collection("contracts").doc(contractId).update({
          escrowStatus: "held",
          escrowHeldAt: Timestamp.now(),
          status: "active",
        });
        console.log(`エスクロー確定: ${contractId} ¥${pi.amount}`);
      }
    }
    res.json({ received: true });
  }
);

// ── 3. 作業完了報告（エスクロー専用・職人） ─────────────────
exports.reportWorkComplete = onCall(
  { region: "asia-northeast1" },
  async (req) => {
    const { contractId, completionNote, photos } = req.data || {};
    if (!contractId) throw new HttpsError("invalid-argument", "contractId required");
    if (!req.auth?.uid) throw new HttpsError("unauthenticated", "login required");

    const contractRef = db.collection("contracts").doc(contractId);
    const contractDoc = await contractRef.get();
    if (!contractDoc.exists) throw new HttpsError("not-found", "contract not found");

    const contract = contractDoc.data();
    if (getContractorId(contract) !== req.auth.uid) {
      throw new HttpsError("permission-denied", "contractor only");
    }
    if (contract.escrowStatus !== "held") {
      throw new HttpsError("failed-precondition", "escrow not held");
    }

    await contractRef.update({
      status: "pending_approval",
      workCompletedAt: Timestamp.now(),
      completionNote: completionNote ?? "",
      completionPhotos: photos ?? [],
      completedBy: req.auth.uid,
    });

    await sendPush(
      getOrdererFcm(contract),
      {
        title: "【Zaibase】作業完了の確認をお願いします",
        body: `${getContractorName(contract)}さんが作業完了を報告しました。確認・承認してください。`,
      },
      { contractId, type: "WORK_COMPLETE_REQUEST" }
    );

    return { success: true };
  }
);

// ── 4. 完了承認 → 自動送金（発注者） ─────────────────────────
exports.approveAndRelease = onCall(
  { region: "asia-northeast1", enforceAppCheck: true, secrets: [STRIPE_SECRET_KEY] },
  async (req) => {
    const stripe = require("stripe")(STRIPE_SECRET_KEY.value());
    const { contractId } = req.data || {};
    if (!contractId) throw new HttpsError("invalid-argument", "contractId required");
    if (!req.auth?.uid) throw new HttpsError("unauthenticated", "login required");

    const contractRef = db.collection("contracts").doc(contractId);
    const contractDoc = await contractRef.get();
    if (!contractDoc.exists) throw new HttpsError("not-found", "contract not found");

    const contract = contractDoc.data();
    const ordererId = getOrdererId(contract);
    const contractorId = getContractorId(contract);
    if (ordererId !== req.auth.uid) {
      throw new HttpsError("permission-denied", "orderer only");
    }
    if (contract.status !== "pending_approval") {
      throw new HttpsError("failed-precondition", "not in pending_approval state");
    }

    const workerDoc = await db.collection("users").doc(contractorId).get();
    const stripeAccountId = workerDoc.data()?.stripeAccountId;
    if (!stripeAccountId) {
      throw new HttpsError("failed-precondition", "contractor stripe account not connected");
    }

    await stripe.paymentIntents.capture(contract.escrowPaymentIntentId);
    const transfer = await stripe.transfers.create({
      amount: contract.escrowAmount,
      currency: "jpy",
      destination: stripeAccountId,
      transfer_group: contractId,
      metadata: { contractId, type: "escrow_release" },
    });

    const paidAt = Timestamp.now();
    await contractRef.update({
      status: "payment_confirmed",
      escrowStatus: "released",
      escrowReleasedAt: paidAt,
      stripeTransferId: transfer.id,
      approvedBy: req.auth.uid,
      approvedAt: paidAt,
      paidAt,
      paidBy: req.auth.uid,
      lawCompliance: {
        ...(contract.lawCompliance || {}),
        freelanceLaw_article5_paid: true,
      },
    });

    await sendPush(
      getContractorFcm(contract),
      {
        title: "【Zaibase】報酬が送金されました",
        body: `¥${(contract.escrowAmount || 0).toLocaleString()} が送金されました。`,
      },
      { contractId, type: "PAYMENT_RELEASED" }
    );

    return {
      success: true,
      transferId: transfer.id,
      amount: contract.escrowAmount,
      releasedAt: paidAt.toDate().toISOString(),
    };
  }
);

// ── 5. 紛争エスカレーション ───────────────────────────────────
exports.disputeEscrow = onCall(
  { region: "asia-northeast1" },
  async (req) => {
    const { contractId, reason } = req.data || {};
    if (!contractId) throw new HttpsError("invalid-argument", "contractId required");
    if (!req.auth?.uid) throw new HttpsError("unauthenticated", "login required");

    const contractRef = db.collection("contracts").doc(contractId);
    const contractDoc = await contractRef.get();
    if (!contractDoc.exists) throw new HttpsError("not-found", "contract not found");

    const contract = contractDoc.data();
    const ordererId = getOrdererId(contract);
    const contractorId = getContractorId(contract);
    const isParty = [ordererId, contractorId].includes(req.auth.uid);
    if (!isParty) throw new HttpsError("permission-denied", "not authorized");

    const disputeRef = db.collection("disputes").doc();
    await disputeRef.set({
      contractId,
      reporterId: req.auth.uid,
      reporterRole: req.auth.uid === ordererId ? "orderer" : "contractor",
      reason: reason ?? "",
      status: "open",
      escrowHeld: contract.escrowStatus === "held",
      createdAt: Timestamp.now(),
      contractSnapshot: {
        ordererId,
        contractorId,
        rewardAmount: contract.rewardAmount,
        escrowAmount: contract.escrowAmount,
      },
    });

    await contractRef.update({
      status: "disputed",
      disputeRef: disputeRef.id,
      disputedAt: Timestamp.now(),
    });

    await db.collection("mail").add({
      to: "info@zaibase.group",
      message: {
        subject: `【要対応】エスクロー紛争 ${contractId}`,
        html: `
          <p>紛争申請が入りました。</p>
          <p>契約ID: ${contractId}</p>
          <p>申請者: ${req.auth.uid}</p>
          <p>理由: ${reason || "（未記入）"}</p>
          <p>エスクロー金額: ¥${(contract.escrowAmount || 0).toLocaleString()}</p>
          <p>ADR紹介または調停を実施してください。</p>
        `,
      },
    });

    return { success: true, disputeId: disputeRef.id };
  }
);

// ── 6. Stripe Connect オンボーディング（職人） ────────────────
exports.createStripeOnboarding = onCall(
  { region: "asia-northeast1", enforceAppCheck: true, secrets: [STRIPE_SECRET_KEY] },
  async (req) => {
    const stripe = require("stripe")(STRIPE_SECRET_KEY.value());
    const uid = req.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "login required");

    const userRef = db.collection("users").doc(uid);
    const userData = (await userRef.get()).data() ?? {};
    let stripeAccountId = userData.stripeAccountId;

    if (!stripeAccountId) {
      const account = await stripe.accounts.create({
        type: "express",
        country: "JP",
        email: userData.email,
        capabilities: { transfers: { requested: true } },
        business_type: "individual",
        metadata: { zaibaseUid: uid },
      });
      stripeAccountId = account.id;
      await userRef.update({ stripeAccountId });
    }

    const accountLink = await stripe.accountLinks.create({
      account: stripeAccountId,
      refresh_url: "https://zaisai-share.web.app/app",
      return_url: "https://zaisai-share.web.app/app",
      type: "account_onboarding",
    });

    return { url: accountLink.url };
  }
);
