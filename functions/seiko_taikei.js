/**
 * Zaibase §39 施工体制台帳・施工体系図
 *
 * saveSeikoTaikei    — 台帳（台帳ヘッダ＋下請業者リスト）を保存
 * getSeikoTaikei     — 案件IDで台帳を取得
 * listSeikoTaikei    — ログインユーザーの台帳一覧
 *
 * Firestore: seikoTaikeiRecords/{jobId}
 *   uid, jobName, jobType（public/private）, clientName, location,
 *   startDate, endDate, totalSubcontract,
 *   subcontractors: [{ name, bizNo, address, role, amount, tier, technicianName, technicianQual, ccusId? }]
 *   createdAt, updatedAt
 *
 * 作成義務:
 *   公共工事: 下請け契約を締結するすべての工事
 *   民間工事: 下請代金総額 ≥ 5,000万円（建築一式 ≥ 8,000万円）
 *
 * 建設業法 第24条の8・第24条の8第2項（施工体系図の掲示）
 */
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");

const db = getFirestore();

function validateSubcontractor(s, idx) {
  if (!s.name || typeof s.name !== "string")
    throw new Error(`下請業者[${idx}].name が必要です`);
  if (!["1", "2", "3", "4+"].includes(String(s.tier)))
    s.tier = "1";
  return {
    name: String(s.name).slice(0, 80),
    bizNo: String(s.bizNo || "").slice(0, 30),
    address: String(s.address || "").slice(0, 200),
    role: String(s.role || "").slice(0, 100),
    amount: Number(s.amount) || 0,
    tier: String(s.tier),
    technicianName: String(s.technicianName || "").slice(0, 60),
    technicianQual: String(s.technicianQual || "").slice(0, 100),
    ccusId: String(s.ccusId || "").slice(0, 20),
    socialInsured: Boolean(s.socialInsured),
  };
}

exports.saveSeikoTaikei = onCall({ region: "asia-northeast1" }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");
  const uid = req.auth.uid;
  const d = req.data || {};

  if (!d.jobId) throw new HttpsError("invalid-argument", "jobId が必要です");
  if (!d.jobName) throw new HttpsError("invalid-argument", "jobName が必要です");
  if (!["public", "private"].includes(d.jobType))
    throw new HttpsError("invalid-argument", "jobType は public / private のいずれかです");

  const subs = (d.subcontractors || []).map((s, i) => validateSubcontractor(s, i));
  const totalSubcontract = subs.reduce((sum, s) => sum + s.amount, 0);

  const record = {
    uid,
    jobId: String(d.jobId).slice(0, 80),
    jobName: String(d.jobName).slice(0, 120),
    jobType: d.jobType,
    isArchitecture: Boolean(d.isArchitecture),
    clientName: String(d.clientName || "").slice(0, 80),
    location: String(d.location || "").slice(0, 200),
    startDate: d.startDate || "",
    endDate: d.endDate || "",
    totalSubcontract,
    subcontractors: subs,
    memo: String(d.memo || "").slice(0, 500),
    updatedAt: FieldValue.serverTimestamp(),
  };

  const ref = db.collection("seikoTaikeiRecords").doc(d.jobId);
  const existing = await ref.get();
  if (!existing.exists) {
    record.createdAt = FieldValue.serverTimestamp();
  } else if (existing.data().uid !== uid) {
    throw new HttpsError("permission-denied", "他のユーザーの台帳は編集できません");
  }

  await ref.set(record, { merge: true });
  return { ok: true, jobId: d.jobId, totalSubcontract };
});

exports.getSeikoTaikei = onCall({ region: "asia-northeast1" }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");
  const { jobId } = req.data || {};
  if (!jobId) throw new HttpsError("invalid-argument", "jobId が必要です");

  const snap = await db.collection("seikoTaikeiRecords").doc(jobId).get();
  if (!snap.exists) return { ok: true, record: null };
  const data = snap.data();
  if (data.uid !== req.auth.uid) throw new HttpsError("permission-denied", "アクセス権がありません");
  return { ok: true, record: { id: snap.id, ...data } };
});

exports.listSeikoTaikei = onCall({ region: "asia-northeast1" }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");
  const uid = req.auth.uid;

  const snap = await db.collection("seikoTaikeiRecords")
    .where("uid", "==", uid)
    .orderBy("updatedAt", "desc")
    .limit(50)
    .get();

  const records = snap.docs.map(d => ({
    id: d.id,
    jobId: d.data().jobId,
    jobName: d.data().jobName,
    jobType: d.data().jobType,
    totalSubcontract: d.data().totalSubcontract,
    subCount: (d.data().subcontractors || []).length,
    updatedAt: d.data().updatedAt?.toDate?.()?.toISOString() || null,
  }));

  return { ok: true, records };
});
