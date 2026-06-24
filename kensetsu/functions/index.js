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

// ── 定期課金 Billing — STRIPE_SECRET_KEY / STRIPE_SUB_WEBHOOK_SECRET 必須 ──
const subscription = require("./subscription");
exports.createCheckoutSession = subscription.createCheckoutSession;
exports.stripeSubWebhook = subscription.stripeSubWebhook;
exports.switchPlan = subscription.switchPlan;
exports.cancelStripeSubscription = subscription.cancelStripeSubscription;
exports.getMySubscription = subscription.getMySubscription;

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

// ── 資材EC（§22）────────────────────────────────────────────────
const materialsEc = require("./materials_ec");
exports.searchMaterialsPrices = materialsEc.searchMaterialsPrices;

// ── 緊急職人手配（§24）────────────────────────────────────────────
const emergencyMatch = require("./emergency_match");
exports.notifyUrgentJob = emergencyMatch.notifyUrgentJob;
exports.listNearbyUrgentJobs = emergencyMatch.listNearbyUrgentJobs;

// ── 子育て互助システム（§33）──────────────────────────────────────
const childcareSupport = require("./childcare_support");
exports.notifyChildcareEmergency = childcareSupport.notifyChildcareEmergency;
exports.completeChildcareMatch = childcareSupport.completeChildcareMatch;
exports.getChildcareStats = childcareSupport.getChildcareStats;

// ── 環境法令コンプライアンス（水質汚濁防止法・土壌汚染対策法）───────
const envCompliance = require("./env_compliance");
exports.checkEnvCompliance = envCompliance.checkEnvCompliance;
exports.submitEnvComplianceDoc = envCompliance.submitEnvComplianceDoc;
exports.logEnvComplianceEvent = envCompliance.logEnvComplianceEvent;

// ── シニア施工管理技士 支援センター（§34）─────────────────────────
const lifePlan = require("./life_plan");
exports.getMentors = lifePlan.getMentors;
exports.saveLifePlan = lifePlan.saveLifePlan;
exports.getLifePlanStats = lifePlan.getLifePlanStats;

// ── 許認可管理・法令チェック（§38）────────────────────────────────
const kyoninka = require("./kyoninka");
exports.savePermit = kyoninka.savePermit;
exports.getPermitsByJob = kyoninka.getPermitsByJob;
exports.checkPermitDeadlines = kyoninka.checkPermitDeadlines;

// ── 施工体制台帳・施工体系図（§39）────────────────────────────────
const seikoTaikei = require("./seiko_taikei");
exports.saveSeikoTaikei = seikoTaikei.saveSeikoTaikei;
exports.getSeikoTaikei = seikoTaikei.getSeikoTaikei;
exports.listSeikoTaikei = seikoTaikei.listSeikoTaikei;

// ── 工期管理（§40）────────────────────────────────────────────────
const kokiKanri = require("./koki_kanri");
exports.saveKokiRecord = kokiKanri.saveKokiRecord;
exports.getKokiRecords = kokiKanri.getKokiRecords;

// ── 下請コンプライアンス（§41）──────────────────────────────────
const koseiCompliance = require("./kosei_compliance");
exports.checkIkkatsu = koseiCompliance.checkIkkatsu;
exports.saveKosei = koseiCompliance.saveKosei;

// ── 工数管理（§36）────────────────────────────────────────────────
const koushou = require("./koushou");
exports.addKoushouEntry = koushou.addKoushouEntry;
exports.getKoushouReport = koushou.getKoushouReport;

// ── 入札・認定・CPD管理（§37）─────────────────────────────────────
const nyusatsu = require("./nyusatsu");
exports.saveCertification = nyusatsu.saveCertification;
exports.addCpdRecord = nyusatsu.addCpdRecord;
exports.getCpdSummary = nyusatsu.getCpdSummary;

// ── CSR・ステークホルダー管理（§35）───────────────────────────────
const csr = require("./csr");
exports.saveCsrCheck = csr.saveCsrCheck;
exports.getCsrReport = csr.getCsrReport;
exports.saveHumanRightsDd = csr.saveHumanRightsDd;

// ── 職人コミュニティ（§29）────────────────────────────────────────
const community = require("./community");
exports.sendCommunityThanks = community.sendCommunityThanks;

// ── 過労死・労災支援センター（§44）────────────────────────────────
const karoshiSupport = require("./karoshi_support");
exports.saveKaroshiCase = karoshiSupport.saveKaroshiCase;
exports.getKaroshiCases = karoshiSupport.getKaroshiCases;
exports.registerWorkplace = karoshiSupport.registerWorkplace;
exports.getWorkplaces = karoshiSupport.getWorkplaces;
exports.clockInOut = karoshiSupport.clockInOut;
exports.getWorkLogs = karoshiSupport.getWorkLogs;
exports.saveInterview = karoshiSupport.saveInterview;
exports.getInterviews = karoshiSupport.getInterviews;
exports.postAnonymousConsult = karoshiSupport.postAnonymousConsult;
exports.getAnonymousConsults = karoshiSupport.getAnonymousConsults;
exports.replyAnonymousConsult = karoshiSupport.replyAnonymousConsult;
exports.getConsultReplies = karoshiSupport.getConsultReplies;

// ── 騒音・振動規制 申請支援（§45）─────────────────────────────────
const noiseVib = require("./noise_vib");
exports.saveNoiseVibApp = noiseVib.saveNoiseVibApp;
exports.getNoiseVibApps = noiseVib.getNoiseVibApps;

// ── 環境業者マッチング（§46）──────────────────────────────────────
const envBizMatch = require("./env_biz_match");
exports.recordEnvReferral = envBizMatch.recordEnvReferral;
exports.saveSoilJob = envBizMatch.saveSoilJob;
exports.getSoilJobs = envBizMatch.getSoilJobs;

// ── 弁護士招待コード ──────────────────────────────────────────────
const invite = require("./invite");
exports.redeemKensetsuLawyerInvite = invite.redeemKensetsuLawyerInvite;

// ── コンテンツモデレーション ──────────────────────────────────────
const moderation = require("./moderation");
exports.checkContentModeration = moderation.checkContentModeration;
exports.reportContent           = moderation.reportContent;
exports.adminListReports        = moderation.adminListReports;
exports.adminDeleteContent      = moderation.adminDeleteContent;
exports.adminDismissReport      = moderation.adminDismissReport;

// ── 経営支援ツール（価格転嫁交渉サポート）────────────────────────────
// priceNegotiationEnabled: false で非表示。Firestore platformConfig/features で開放可能。
// Secrets: ANTHROPIC_API_KEY（firebase functions:secrets:set ANTHROPIC_API_KEY で設定）
const managementTools = require("./management_tools");
exports.generateNegotiationLetter = managementTools.generateNegotiationLetter;

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
