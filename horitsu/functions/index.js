/**
 * Zaibase法律相談 Cloud Functions — エントリーポイント
 *
 * プロジェクト: zaibase-horitsu
 * 仕様書: docs/horitsu/SPEC.md
 */
const { onRequest } = require("firebase-functions/v2/https");
const { setGlobalOptions } = require("firebase-functions/v2");
const admin = require("firebase-admin");

admin.initializeApp();
setGlobalOptions({ region: "asia-northeast1", maxInstances: 10 });

// ── ヘルスチェック ─────────────────────────────────────────────────
exports.health = onRequest((req, res) => {
  res.json({ ok: true, service: "zaibase-horitsu", time: new Date().toISOString() });
});

// ── 定期課金（Stripe） ────────────────────────────────────────────
const sub = require("./subscription");
exports.createHoritsuCheckout      = sub.createHoritsuCheckout;
exports.horitsuSubWebhook          = sub.horitsuSubWebhook;
exports.cancelHoritsuSub           = sub.cancelHoritsuSub;
exports.getHoritsuPlan             = sub.getHoritsuPlan;
exports.applyGroupDiscount         = sub.applyGroupDiscount;

// ── 相談ワークフロー ──────────────────────────────────────────────
const consult = require("./consult");
exports.submitHoritsuConsult       = consult.submitHoritsuConsult;
exports.getMyHoritsuConsults       = consult.getMyHoritsuConsults;
exports.adminReplyHoritsuConsult   = consult.adminReplyHoritsuConsult;
exports.adminListPendingConsults   = consult.adminListPendingConsults;
exports.markHoritsuConsultRead     = consult.markHoritsuConsultRead;

// ── 収益管理 ──────────────────────────────────────────────────────
const revenue = require("./revenue");
exports.getHoritsuRevenue              = revenue.getHoritsuRevenue;
exports.grantGroupDiscount             = revenue.grantGroupDiscount;
exports.listGroupDiscountApplications  = revenue.listGroupDiscountApplications;

