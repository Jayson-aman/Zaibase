/**
 * 参照用（Downloads 由来）
 * 正本: ../../functions/ccus.js
 *
 * 統合時の変更:
 *   users.ccusWorkerId     → craftsmanProfiles.ccusWorkerId（読取は users もフォールバック）
 *   contract.clientId      → contract.ordererId（getOrdererId で両対応）
 *   initializeApp()        → index.js で一元管理
 *   ccusLogs.gpsLogId      → sourceLogId + sourceCollection
 *   CCUS_BASE_URL          → 環境変数でテストAPI切替可
 */
module.exports = require("../../functions/ccus");
