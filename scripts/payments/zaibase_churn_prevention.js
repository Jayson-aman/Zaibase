/**
 * 参照用コピー（Downloads 由来）
 * 正本: ../../functions/churn_prevention.js
 *
 * ダウンロード版との主な差分（統合済み）:
 *   users.plan          → craftsmanProfiles.subscriptionPlan
 *   contracts.workerId  → contracts.contractorId（workerId フォールバック）
 *   paymentAlerts.workerId → paymentAlerts.contractorId
 *   initializeApp()     → index.js で一元管理
 *
 * デプロイ:
 *   firebase deploy --only functions:getChurnStats,functions:churnScheduler,functions:cancelSubscription,functions:onPlanCancelled
 */

module.exports = require("../../functions/churn_prevention");
