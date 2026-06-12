/**
 * Zaibase法律相談 Cloud Functions — エントリーポイント
 *
 * プロジェクト: zaibase-horitsu（デプロイ前に firebase use で確認）
 * 仕様書: docs/horitsu/SPEC.md
 */
const { onRequest, onCall } = require("firebase-functions/v2/https");
const { setGlobalOptions } = require("firebase-functions/v2");
const admin = require("firebase-admin");

admin.initializeApp();
setGlobalOptions({ region: "asia-northeast1", maxInstances: 10 });

// ── ヘルスチェック ────────────────────────────────────────────
exports.health = onRequest((req, res) => {
  res.json({ ok: true, service: "zaibase-horitsu", time: new Date().toISOString() });
});

// ── 法律相談（準備中）────────────────────────────────────────
// TODO: 相談投稿・回答・弁護士マッチング・課金
