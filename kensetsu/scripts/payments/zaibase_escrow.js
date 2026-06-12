/**
 * Zaibase エスクロー決済（参照用コピー）
 * 正本: functions/escrow.js（ordererId / contractorId 準拠）
 * このファイルは古い clientId / workerId 版です。デプロイは functions/escrow.js を使用してください。
 * ─────────────────────────────────────────────────────────────
 * 仕組み：
 *   1. マッチング成立 → 発注者が報酬をZaibaseに預託（Stripe PaymentIntent）
 *   2. 作業完了確認  → 職人が「完了報告」、発注者が「完了承認」
 *   3. 自動送金      → Stripe Transfer で職人のStripeアカウントに送金
 *   4. Zaibase手数料 → 送金額の8%を自動控除（application_fee_amount）
 *
 * 法的注意：
 *   - Stripe Connect を使うことで「資金移動業」登録不要
 *   - Stripeが資金移動業者として登録済みのため、Zaibaseは「代理収納」扱い
 *   - ただし顧問弁護士に確認推奨（資金決済法第37条）
 *
 * Stripe設定：
 *   - Stripe Connect: Custom または Express アカウント
 *   - STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET を環境変数に設定
 *   firebase functions:secrets:set STRIPE_SECRET_KEY
 *   firebase functions:secrets:set STRIPE_WEBHOOK_SECRET
 */

const { onCall, onRequest, HttpsError } = require("firebase-functions/v2/https");
const { getFirestore, Timestamp } = require("firebase-admin/firestore");
const { getMessaging } = require("firebase-admin/messaging");
const { defineSecret } = require("firebase-functions/params");
const { initializeApp } = require("firebase-admin/app");

initializeApp();
const db = getFirestore();

const STRIPE_SECRET_KEY    = defineSecret("STRIPE_SECRET_KEY");
const STRIPE_WEBHOOK_SECRET = defineSecret("STRIPE_WEBHOOK_SECRET");

// Zaibase手数料率（マッチング8% + エスクロー管理2% = 10%）
const PLATFORM_FEE_RATE = 0.10;
// 最低手数料
const MIN_FEE_JPY = 500;

// ── 1. エスクロー預託（マッチング成立時に呼び出し） ────────────
exports.createEscrow = onCall(
  { region: "asia-northeast1", secrets: [STRIPE_SECRET_KEY] },
  async (req) => {
    const stripe = require("stripe")(STRIPE_SECRET_KEY.value());
    const { contractId } = req.data;
    if (!contractId) throw new HttpsError("invalid-argument", "contractId required");

    const contractRef = db.collection("contracts").doc(contractId);
    const contractDoc = await contractRef.get();
    if (!contractDoc.exists) throw new HttpsError("not-found", "contract not found");

    const contract = contractDoc.data();

    // 発注者確認
    if (contract.clientId !== req.auth?.uid) {
      throw new HttpsError("permission-denied", "not authorized");
    }

    // すでに預託済みチェック
    if (contract.escrowStatus === "held") {
      throw new HttpsError("already-exists", "escrow already created");
    }

    const rewardAmount = contract.rewardAmount; // 円
    const platformFee  = Math.max(
      Math.round(rewardAmount * PLATFORM_FEE_RATE),
      MIN_FEE_JPY
    );
    const totalCharge  = rewardAmount + platformFee; // 発注者負担額

    // Stripe PaymentIntent作成（capture_method: manual で仮押さえ）
    const paymentIntent = await stripe.paymentIntents.create({
      amount:         totalCharge,
      currency:       "jpy",
      capture_method: "manual",       // 完了確認後に実際に引き落とし
      payment_method_types: ["card"],
      metadata: {
        contractId,
        clientId:    contract.clientId,
        workerId:    contract.workerId,
        rewardAmount: String(rewardAmount),
        platformFee:  String(platformFee),
        zaibase:      "escrow_v1",
      },
      description: `Zaibase工事請負報酬 契約ID:${contractId}`,
    });

    // Firestoreに預託情報を保存
    await contractRef.update({
      escrowStatus:      "pending_payment",
      escrowPaymentIntentId: paymentIntent.id,
      escrowClientSecret: paymentIntent.client_secret,
      escrowAmount:      rewardAmount,
      escrowPlatformFee: platformFee,
      escrowTotalCharge: totalCharge,
      escrowCreatedAt:   Timestamp.now(),
    });

    // フロントエンドに client_secret を返す（Stripe.js で決済UI表示に使用）
    return {
      clientSecret: paymentIntent.client_secret,
      rewardAmount,
      platformFee,
      totalCharge,
      paymentIntentId: paymentIntent.id,
    };
  }
);

// ── 2. 発注者カード決済確認後：エスクロー確定（Webhook） ────────
exports.stripeWebhook = onRequest(
  { region: "asia-northeast1", secrets: [STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET] },
  async (req, res) => {
    const stripe = require("stripe")(STRIPE_SECRET_KEY.value());
    const sig = req.headers["stripe-signature"];

    let event;
    try {
      event = stripe.webhooks.constructEvent(
        req.rawBody, sig, STRIPE_WEBHOOK_SECRET.value()
      );
    } catch (e) {
      console.error("Webhook署名検証失敗:", e.message);
      return res.status(400).send(`Webhook Error: ${e.message}`);
    }

    if (event.type === "payment_intent.succeeded") {
      const pi = event.data.object;
      const { contractId } = pi.metadata;

      await db.collection("contracts").doc(contractId).update({
        escrowStatus:    "held",          // 資金を保全中
        escrowHeldAt:    Timestamp.now(),
        status:          "active",
      });

      console.log(`エスクロー確定: ${contractId} ¥${pi.amount}`);
    }

    res.json({ received: true });
  }
);

// ── 3. 作業完了報告（職人が押す） ─────────────────────────────
exports.reportWorkComplete = onCall(
  { region: "asia-northeast1" },
  async (req) => {
    const { contractId, completionNote, photos } = req.data;
    if (!contractId) throw new HttpsError("invalid-argument", "contractId required");

    const contractRef = db.collection("contracts").doc(contractId);
    const contractDoc = await contractRef.get();
    if (!contractDoc.exists) throw new HttpsError("not-found", "contract not found");

    const contract = contractDoc.data();

    if (contract.workerId !== req.auth?.uid) {
      throw new HttpsError("permission-denied", "not authorized");
    }
    if (contract.escrowStatus !== "held") {
      throw new HttpsError("failed-precondition", "escrow not held");
    }

    await contractRef.update({
      status:              "pending_approval",
      workCompletedAt:     Timestamp.now(),
      completionNote:      completionNote ?? "",
      completionPhotos:    photos ?? [],
    });

    // 発注者に承認依頼Push通知
    if (contract.clientFcmToken) {
      await getMessaging().send({
        token: contract.clientFcmToken,
        notification: {
          title: "【Zaibase】作業完了の確認をお願いします",
          body:  `${contract.workerName}さんが作業完了を報告しました。確認・承認してください。`,
        },
        data: { contractId, type: "WORK_COMPLETE_REQUEST" },
      });
    }

    return { success: true };
  }
);

// ── 4. 完了承認 → 自動送金（発注者が押す） ────────────────────
exports.approveAndRelease = onCall(
  { region: "asia-northeast1", secrets: [STRIPE_SECRET_KEY] },
  async (req) => {
    const stripe = require("stripe")(STRIPE_SECRET_KEY.value());
    const { contractId } = req.data;
    if (!contractId) throw new HttpsError("invalid-argument", "contractId required");

    const contractRef = db.collection("contracts").doc(contractId);
    const contractDoc = await contractRef.get();
    if (!contractDoc.exists) throw new HttpsError("not-found", "contract not found");

    const contract = contractDoc.data();

    if (contract.clientId !== req.auth?.uid) {
      throw new HttpsError("permission-denied", "not authorized");
    }
    if (contract.status !== "pending_approval") {
      throw new HttpsError("failed-precondition", "not in pending_approval state");
    }

    // 職人のStripe Connected AccountIDをFirestoreから取得
    const workerDoc = await db.collection("users").doc(contract.workerId).get();
    const workerStripeAccountId = workerDoc.data()?.stripeAccountId;
    if (!workerStripeAccountId) {
      throw new HttpsError("failed-precondition", "worker stripe account not connected");
    }

    // Step 1: PaymentIntentをキャプチャ（実際に引き落とし）
    await stripe.paymentIntents.capture(contract.escrowPaymentIntentId);

    // Step 2: 職人への送金（platformFee を除いた金額）
    const transfer = await stripe.transfers.create({
      amount:      contract.escrowAmount,   // 報酬額（手数料除く）
      currency:    "jpy",
      destination: workerStripeAccountId,
      transfer_group: contractId,
      metadata: { contractId, type: "escrow_release" },
    });

    // Firestoreを更新
    await contractRef.update({
      status:             "payment_confirmed",
      escrowStatus:       "released",
      escrowReleasedAt:   Timestamp.now(),
      stripeTransferId:   transfer.id,
      approvedBy:         req.auth.uid,
      approvedAt:         Timestamp.now(),

      // フリーランス保護法の支払記録
      lawCompliance: {
        ...contract.lawCompliance,
        freelanceLaw_article5_paid: true,
        paidAt: new Date().toISOString(),
      },
    });

    // 職人に入金通知
    if (contract.workerFcmToken) {
      await getMessaging().send({
        token: contract.workerFcmToken,
        notification: {
          title: "【Zaibase】報酬が送金されました",
          body:  `¥${contract.escrowAmount?.toLocaleString()} が送金されました。`,
        },
        data: { contractId, type: "PAYMENT_RELEASED" },
      });
    }

    return {
      success:    true,
      transferId: transfer.id,
      amount:     contract.escrowAmount,
      releasedAt: new Date().toISOString(),
    };
  }
);

// ── 5. 紛争時エスカレーション（発注者が承認しない場合） ──────────
exports.disputeEscrow = onCall(
  { region: "asia-northeast1" },
  async (req) => {
    const { contractId, reason } = req.data;
    if (!contractId) throw new HttpsError("invalid-argument", "contractId required");

    const contractRef = db.collection("contracts").doc(contractId);
    const contractDoc = await contractRef.get();
    if (!contractDoc.exists) throw new HttpsError("not-found", "contract not found");

    const contract = contractDoc.data();

    // 職人または発注者が申請可能
    const isParty = [contract.clientId, contract.workerId].includes(req.auth?.uid);
    if (!isParty) throw new HttpsError("permission-denied", "not authorized");

    // 紛争ケースをFirestoreに記録
    const disputeRef = db.collection("disputes").doc();
    await disputeRef.set({
      contractId,
      reporterId:    req.auth.uid,
      reporterRole:  req.auth.uid === contract.clientId ? "client" : "worker",
      reason:        reason ?? "",
      status:        "open",
      escrowHeld:    true,   // 紛争中は資金をホールド継続
      createdAt:     Timestamp.now(),
      contract:      contract,
    });

    await contractRef.update({
      status:        "disputed",
      disputeRef:    disputeRef.id,
      disputedAt:    Timestamp.now(),
    });

    // 管理者通知
    await db.collection("mail").add({
      to: "admin@zaibase.jp",
      message: {
        subject: `【要対応】エスクロー紛争 ${contractId}`,
        html: `
          <p>紛争申請が入りました。</p>
          <p>契約ID: ${contractId}</p>
          <p>申請者: ${req.auth.uid}</p>
          <p>理由: ${reason}</p>
          <p>エスクロー金額: ¥${contract.escrowAmount?.toLocaleString()}</p>
          <p>ADR紹介または調停を実施してください。</p>
        `,
      },
    });

    return { success: true, disputeId: disputeRef.id };
  }
);

// ── 6. 職人向けStripe Connect オンボーディング ────────────────
exports.createStripeOnboarding = onCall(
  { region: "asia-northeast1", secrets: [STRIPE_SECRET_KEY] },
  async (req) => {
    const stripe = require("stripe")(STRIPE_SECRET_KEY.value());
    const uid = req.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "login required");

    const userRef  = db.collection("users").doc(uid);
    const userDoc  = await userRef.get();
    const userData = userDoc.data() ?? {};

    let stripeAccountId = userData.stripeAccountId;

    // まだStripeアカウントがなければ作成
    if (!stripeAccountId) {
      const account = await stripe.accounts.create({
        type:    "express",
        country: "JP",
        email:   userData.email,
        capabilities: {
          transfers: { requested: true },
        },
        business_type: "individual",
        metadata: { zaibaseUid: uid },
      });
      stripeAccountId = account.id;
      await userRef.update({ stripeAccountId });
    }

    // オンボーディングリンクを生成（本人確認・口座登録画面）
    const accountLink = await stripe.accountLinks.create({
      account:     stripeAccountId,
      refresh_url: "https://zaibase.jp/stripe/refresh",
      return_url:  "https://zaibase.jp/stripe/complete",
      type:        "account_onboarding",
    });

    return { url: accountLink.url };
  }
);
