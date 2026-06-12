/**
 * Zaibase §41 下請コンプライアンス
 *   一括下請けの禁止チェック・建設業法令遵守ガイドライン
 *
 * checkIkkatsu  — 一括下請けの禁止（建設業法第22条）適合チェック
 * saveKosei     — 法令遵守チェックリスト結果の保存
 *
 * Firestore: koseiChecks/{uid}
 *
 * 根拠:
 *   建設業法第22条（一括下請けの禁止）
 *   建設業法第19条の3（不当に低い請負代金の禁止）
 *   建設業法第19条の4（不当な使用資材等の購入強制の禁止）
 *   建設業法第19条の5（著しく短い工期の禁止 令和6年改正）
 *   建設業法第24条の3（下請代金の支払期日）
 *   建設業法令遵守ガイドライン（国土交通省）
 */
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");

const db = getFirestore();

exports.checkIkkatsu = onCall({ region: "asia-northeast1", enforceAppCheck: true }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");
  const d = req.data || {};
  const issues = [];
  const passed = [];

  // 実質的な関与チェック（施工計画・工程管理・品質管理・安全管理・下請調整・技術指導）
  const involvement = d.involvement || {};
  const required = ['plan','schedule','quality','safety','coordination','technical'];
  const missing = required.filter(k => !involvement[k]);
  if (missing.length === 0) {
    passed.push('実質的な関与: 6要件（施工計画・工程・品質・安全・調整・技術指導）すべてあり');
  } else {
    issues.push({ law: '建設業法第22条（一括下請けの禁止）',
      msg: `実質的な関与が不足しています: ${missing.join('・')}。元請が施工に実質的に関与しない場合は一括下請けに該当します。` });
  }

  // 公共工事での書面承諾の有無
  if (d.jobType === 'public' && d.hasClientConsent) {
    issues.push({ law: '建設業法第22条第3項',
      msg: '公共工事では発注者の書面承諾があっても一括下請けは禁止です。' });
  }

  // 民間工事での書面承諾
  if (d.jobType === 'private' && !d.hasClientConsent && d.isFullSubcontract) {
    issues.push({ law: '建設業法第22条第3項',
      msg: '民間工事で一括下請け的な形態をとる場合、発注者の書面による承諾が必要です。' });
  }

  return { ok: issues.length === 0, issues, passed };
});

exports.saveKosei = onCall({ region: "asia-northeast1", enforceAppCheck: true }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");
  const uid = req.auth.uid;
  const d = req.data || {};
  await db.collection("koseiChecks").doc(uid).set({
    uid,
    answers: d.answers || {},
    score: Number(d.score) || 0,
    checkedAt: FieldValue.serverTimestamp(),
  }, { merge: true });
  return { ok: true };
});
