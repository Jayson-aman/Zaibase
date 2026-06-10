/**
 * Zaibase Cloud Functions — エントリーポイント
 *
 * プロジェクト: zaisai-share（デプロイ前に firebase use で確認）
 * 手順書: docs/DEPLOY.md
 *
 * モジュール（フラット配置）:
 *   payment_alert.js   — 支払期日アラート・作業完了・支払確認
 *   escrow.js          — エスクロー決済（Stripe Connect）
 *   churn_prevention.js — 解約防止（4段階）
 *   ccus.js            — CCUS就業履歴自動記録
 *   face_auth.js       — 顔認証入退場（AWS Rekognition）
 *   invoice_pdf.js     — 適格請求書 PDF 生成
 */
const { onRequest, onCall } = require("firebase-functions/v2/https");
const { setGlobalOptions } = require("firebase-functions/v2");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin");

admin.initializeApp();
setGlobalOptions({ region: "asia-northeast1", maxInstances: 10 });

// ── 支払期日アラート ───────────────────────────────────────────
const paymentAlert = require("./payment_alert");
exports.paymentAlertScheduler = paymentAlert.paymentAlertScheduler;
exports.markWorkComplete = paymentAlert.markWorkComplete;
exports.confirmPayment = paymentAlert.confirmPayment;

// ── エスクロー決済（Stripe）— STRIPE_* Secrets 必須 ───────────
const escrow = require("./escrow");
exports.createEscrow = escrow.createEscrow;
exports.stripeWebhook = escrow.stripeWebhook;
exports.reportWorkComplete = escrow.reportWorkComplete;
exports.approveAndRelease = escrow.approveAndRelease;
exports.disputeEscrow = escrow.disputeEscrow;
exports.createStripeOnboarding = escrow.createStripeOnboarding;

// ── 解約防止 ───────────────────────────────────────────────────
const churnPrevention = require("./churn_prevention");
exports.getChurnStats = churnPrevention.getChurnStats;
exports.getChurnInterstitialStats = churnPrevention.getChurnInterstitialStats;
exports.churnScheduler = churnPrevention.churnScheduler;
exports.churnPreventionScheduler = churnPrevention.churnPreventionScheduler;
exports.cancelSubscription = churnPrevention.cancelSubscription;
exports.confirmSubscriptionCancel = churnPrevention.confirmSubscriptionCancel;
exports.onPlanCancelled = churnPrevention.onPlanCancelled;

// ── CCUS自動記録 — CCUS_API_KEY Secret 必須 ────────────────────
const ccus = require("./ccus");
exports.onGpsLogCreated = ccus.onGpsLogCreated;
exports.onFaceAuthCreated = ccus.onFaceAuthCreated;
exports.ccusRetryScheduler = ccus.ccusRetryScheduler;
exports.registerCcusWorkerId = ccus.registerCcusWorkerId;
exports.registerCcusSiteId = ccus.registerCcusSiteId;
exports.getCcusMonthlySummary = ccus.getCcusMonthlySummary;

// ── 顔認証入退場 — AWS_* / REKOGNITION_COLLECTION_ID 必須 ─────
const faceAuth = require("./face_auth");
exports.registerFace = faceAuth.registerFace;
exports.authenticateFace = faceAuth.authenticateFace;
exports.revokeFaceConsent = faceAuth.revokeFaceConsent;
exports.onCraftsmanProfileDeleted = faceAuth.onCraftsmanProfileDeleted;
exports.onUserDeleted = faceAuth.onCraftsmanProfileDeleted;

// ── 請求書 PDF ─────────────────────────────────────────────────
const invoicePdf = require("./invoice_pdf");
exports.generateInvoicePdf = invoicePdf.generateInvoicePdf;

// ── チーム・労働者協同組合（§19）────────────────────────────────
const teams = require("./teams");
exports.createTeam = teams.createTeam;
exports.joinTeamByInvite = teams.joinTeamByInvite;

// ── 多層契約チェーン（§20）──────────────────────────────────────
const chains = require("./chains");
exports.createContractChain = chains.createContractChain;
exports.validateChainSubcontract = chains.validateChainSubcontract;
exports.createChainContract = chains.createChainContract;
exports.updateSubstantiveInvolvement = chains.updateSubstantiveInvolvement;
exports.linkHelpPostToChain = chains.linkHelpPostToChain;

// ── ユーティリティ ─────────────────────────────────────────────
exports.health = onRequest((req, res) => {
  res.json({ ok: true, service: "zaibase-backend", time: new Date().toISOString() });
});

exports.translateText = onCall(async (request) => {
  const { text, target } = request.data || {};
  if (!text || !target) {
    return { error: "text（原文）と target（翻訳先の言語）は必須です" };
  }
  try {
    const { VertexAI } = require("@google-cloud/vertexai");
    const vertex = new VertexAI({ project: process.env.GCLOUD_PROJECT, location: "asia-northeast1" });
    const model = vertex.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = "次の文章を「" + target + "」に翻訳してください。訳文だけを返し、説明は不要です。\n\n" + text;
    const result = await model.generateContent(prompt);
    const translated = result.response.candidates[0].content.parts[0].text.trim();
    return { translated };
  } catch (e) {
    logger.error("translateText error", e);
    return { error: "翻訳に失敗しました。Vertex AI API が有効か確認してください。" };
  }
});
