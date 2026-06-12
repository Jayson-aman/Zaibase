/**
 * Zaibase CSR・ステークホルダー管理（§35）
 *
 * saveCsrCheck      — CSRチェック結果をFirestoreの csrChecks/{uid} に保存
 * getCsrReport      — 最新CSRレポートを返す（csrChecks + humanRightsDd）
 * saveHumanRightsDd — 人権DDデータを humanRightsDd/{uid} に保存
 *
 * 準拠規格: ISO 26000 / 政府人権DDガイドライン（2022）
 * 対象法令: フリーランス保護法（2024.11）・女性活躍推進法・男女雇用機会均等法
 */
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");

const db = getFirestore();

/**
 * CSRチェック結果をFirestoreに保存する。
 * @param {object} req.data.checkState  - { [itemId]: boolean } CSRチェック項目の状態
 * @param {object} req.data.genderState - { [itemId]: boolean } ジェンダーチェックの状態
 * @param {object} req.data.flState     - { [itemId]: boolean } フリーランス法チェックの状態
 * @param {object} req.data.score       - { earned, possible, pct } スコアサマリー
 */
exports.saveCsrCheck = onCall({ region: "asia-northeast1", enforceAppCheck: true }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");

  const uid = req.auth.uid;
  const { checkState, genderState, flState, score } = req.data || {};

  if (!checkState || typeof checkState !== "object") {
    throw new HttpsError("invalid-argument", "checkState は必須です");
  }
  if (score === undefined || typeof score.pct !== "number") {
    throw new HttpsError("invalid-argument", "score.pct が不正です");
  }

  const payload = {
    uid,
    checkState,
    genderState: genderState || {},
    flState: flState || {},
    score: {
      earned: Number(score.earned) || 0,
      possible: Number(score.possible) || 0,
      pct: Math.min(100, Math.max(0, Number(score.pct) || 0)),
    },
    updatedAt: FieldValue.serverTimestamp(),
  };

  await db.collection("csrChecks").doc(uid).set(payload, { merge: true });

  return { ok: true, score: payload.score };
});

/**
 * 最新CSRレポートを返す。
 * csrChecks/{uid} と humanRightsDd/{uid} を結合して返す。
 */
exports.getCsrReport = onCall({ region: "asia-northeast1", enforceAppCheck: true }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");

  const uid = req.auth.uid;

  const [csrSnap, ddSnap] = await Promise.all([
    db.collection("csrChecks").doc(uid).get(),
    db.collection("humanRightsDd").doc(uid).get(),
  ]);

  const csrData = csrSnap.exists ? csrSnap.data() : null;
  const ddData = ddSnap.exists ? ddSnap.data() : null;

  return {
    ok: true,
    csrCheck: csrData
      ? {
          checkState: csrData.checkState || {},
          genderState: csrData.genderState || {},
          flState: csrData.flState || {},
          score: csrData.score || { earned: 0, possible: 0, pct: 0 },
          updatedAt: csrData.updatedAt?.toDate?.()?.toISOString() || null,
        }
      : null,
    humanRightsDd: ddData
      ? {
          ddState: ddData.ddState || {},
          updatedAt: ddData.updatedAt?.toDate?.()?.toISOString() || null,
        }
      : null,
  };
});

/**
 * 人権DDデータを humanRightsDd/{uid} に保存する。
 * @param {object} req.data.ddState - { step1: { done, fields }, ... } 各ステップの状態
 */
exports.saveHumanRightsDd = onCall({ region: "asia-northeast1", enforceAppCheck: true }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");

  const uid = req.auth.uid;
  const { ddState } = req.data || {};

  if (!ddState || typeof ddState !== "object") {
    throw new HttpsError("invalid-argument", "ddState は必須です");
  }

  // ステップキーを検証（step1〜step5のみ受け付ける）
  const validKeys = ["step1", "step2", "step3", "step4", "step5"];
  const sanitized = {};
  for (const key of validKeys) {
    if (ddState[key] && typeof ddState[key] === "object") {
      sanitized[key] = {
        done: !!ddState[key].done,
        fields: Array.isArray(ddState[key].fields)
          ? ddState[key].fields.slice(0, 5).map(f => String(f || "").slice(0, 500))
          : [],
      };
    }
  }

  await db.collection("humanRightsDd").doc(uid).set(
    { uid, ddState: sanitized, updatedAt: FieldValue.serverTimestamp() },
    { merge: true }
  );

  return { ok: true };
});
