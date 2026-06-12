/**
 * Zaibase §40 工期管理（中央建設業審議会 工期に関する基準 令和6年勧告）
 *
 * saveKokiRecord   — 工期記録（当初・変更）の保存
 * getKokiRecords   — ユーザーの工期記録一覧
 *
 * Firestore: kokiRecords/{recordId}
 *   uid, jobName, jobType, estimatedWorkers, startDate, endDate,
 *   overtimeEstimate, changeHistory, createdAt, updatedAt
 *
 * 根拠:
 *   建設業法第19条（書面主義・工期記載義務）
 *   建設業法第19条の5（著しく短い工期の禁止）← 令和6年6月改正
 *   中央建設業審議会「工期に関する基準」令和6年勧告
 *   労働基準法第36条 時間外労働上限規制（建設業 令和6年4月適用）
 */
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");

const db = getFirestore();

exports.saveKokiRecord = onCall({ region: "asia-northeast1", enforceAppCheck: true }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");
  const uid = req.auth.uid;
  const d = req.data || {};

  if (!d.jobName) throw new HttpsError("invalid-argument", "jobName が必要です");

  const recordId = d.recordId || `koki_${uid}_${Date.now()}`;
  const record = {
    uid,
    jobName: String(d.jobName).slice(0, 120),
    jobType: String(d.jobType || "private").slice(0, 20),
    location: String(d.location || "").slice(0, 200),
    contractAmount: Number(d.contractAmount) || 0,
    estimatedWorkers: Number(d.estimatedWorkers) || 0,
    startDate: d.startDate || "",
    endDate: d.endDate || "",
    workDays: Number(d.workDays) || 0,
    holidaysIncluded: Boolean(d.holidaysIncluded),
    overtimeEstimate: Number(d.overtimeEstimate) || 0,
    changeHistory: Array.isArray(d.changeHistory)
      ? d.changeHistory.map(h => ({
          changeDate: String(h.changeDate || ""),
          reason: String(h.reason || "").slice(0, 200),
          newEndDate: String(h.newEndDate || ""),
          agreedByBoth: Boolean(h.agreedByBoth),
        }))
      : [],
    memo: String(d.memo || "").slice(0, 500),
    updatedAt: FieldValue.serverTimestamp(),
  };

  const ref = db.collection("kokiRecords").doc(recordId);
  const existing = await ref.get();
  if (!existing.exists) {
    record.createdAt = FieldValue.serverTimestamp();
  } else if (existing.data().uid !== uid) {
    throw new HttpsError("permission-denied", "他のユーザーの記録は編集できません");
  }

  await ref.set(record, { merge: true });
  return { ok: true, recordId };
});

exports.getKokiRecords = onCall({ region: "asia-northeast1", enforceAppCheck: true }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");
  const uid = req.auth.uid;

  const snap = await db.collection("kokiRecords")
    .where("uid", "==", uid)
    .orderBy("updatedAt", "desc")
    .limit(50)
    .get();

  const records = snap.docs.map(d => ({
    id: d.id,
    jobName: d.data().jobName,
    startDate: d.data().startDate,
    endDate: d.data().endDate,
    workDays: d.data().workDays,
    overtimeEstimate: d.data().overtimeEstimate,
    changeCount: (d.data().changeHistory || []).length,
    updatedAt: d.data().updatedAt?.toDate?.()?.toISOString() || null,
  }));

  return { ok: true, records };
});
