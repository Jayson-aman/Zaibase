/**
 * ahiru（中学受験対策）Cloud Functions — エントリーポイント
 *
 * プロジェクト: ahiru専用Firebaseプロジェクト（要作成）
 */
const { setGlobalOptions } = require("firebase-functions/v2");
const admin = require("firebase-admin");

admin.initializeApp();
setGlobalOptions({ region: "asia-northeast1", maxInstances: 10 });

// ── AI弱点コーチ（Maxプラン限定） ──────────────────────────────────
const aiCoach = require("./aiCoach");
exports.getWeakPointCoaching = aiCoach.getWeakPointCoaching;
