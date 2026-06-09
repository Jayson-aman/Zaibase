/**
 * 参照用（Downloads 由来）
 * 正本: ../../functions/face_auth.js
 *
 * 統合時の変更:
 *   users.rekognitionFaceId  → craftsmanProfiles（読取は users もフォールバック）
 *   onUserDeleted            → onCraftsmanProfileDeleted
 *   initializeApp()          → index.js で一元管理
 *   Firebase Storage 未使用  → 画像は Rekognition のみ（保存しない）
 */
module.exports = require("../../functions/face_auth");
