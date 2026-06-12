/**
 * Zaibase §44 過労死・労災支援センター
 *
 * saveKaroshiCase   — 過労死等相談・証拠記録の保存
 * getKaroshiCases   — 相談履歴の取得
 *
 * Firestore: karoshiCases/{caseId}
 *
 * 根拠:
 *   過労死等防止対策推進法（平成26年法律第100号）
 *   脳・心臓疾患の業務上認定基準（令和3年9月14日改正）
 *   精神障害等の業務上認定基準（令和5年9月1日改正）
 *   労働安全衛生法第33条（機械等貸与者等の講ずべき措置）
 *   労働安全衛生法第100条（虚偽報告の禁止＝労災隠し）
 *   労働安全衛生法第122条（事業者両罰規定）
 *   労働基準法第75条〜第82条（労災補償）
 */
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");

const db = getFirestore();

exports.saveKaroshiCase = onCall({ region: "asia-northeast1" }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");
  const uid = req.auth.uid;
  const d = req.data || {};
  const caseId = d.caseId || `karoshi_${uid}_${Date.now()}`;

  const ref = db.collection("karoshiCases").doc(caseId);
  const existing = await ref.get();

  const record = {
    uid,
    // caseType: overwork / brain_heart / mental / powerharassment / fall / rousai_kakushi
    caseType: String(d.caseType || "overwork").slice(0, 30),
    workHoursPerMonth: Number(d.workHoursPerMonth) || 0,
    overtimeMonth1: Number(d.overtimeMonth1) || 0,    // 発症前1カ月の時間外
    overtimeAvg26: Number(d.overtimeAvg26) || 0,      // 2〜6カ月平均時間外
    consecutiveWorkDays: Number(d.consecutiveWorkDays) || 0,
    incidentDate: d.incidentDate || "",
    diagnosis: String(d.diagnosis || "").slice(0, 200),
    symptoms: String(d.symptoms || "").slice(0, 500),
    evidenceTypes: Array.isArray(d.evidenceTypes)
      ? d.evidenceTypes.map(e => String(e).slice(0, 30))
      : [],
    notes: String(d.notes || "").slice(0, 1000),
    status: existing.exists ? (existing.data().status || "open") : "open",
    updatedAt: FieldValue.serverTimestamp(),
  };
  if (!existing.exists) record.createdAt = FieldValue.serverTimestamp();
  else if (existing.data().uid !== uid) throw new HttpsError("permission-denied", "アクセス権がありません");

  await ref.set(record, { merge: true });
  return { ok: true, caseId };
});

exports.getKaroshiCases = onCall({ region: "asia-northeast1" }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");
  const uid = req.auth.uid;
  const snap = await db.collection("karoshiCases")
    .where("uid", "==", uid)
    .orderBy("updatedAt", "desc")
    .limit(20)
    .get();
  return {
    ok: true,
    cases: snap.docs.map(d => ({
      id: d.id,
      caseType: d.data().caseType,
      incidentDate: d.data().incidentDate,
      diagnosis: d.data().diagnosis,
      status: d.data().status,
      updatedAt: d.data().updatedAt?.toDate?.()?.toISOString() || null,
    })),
  };
});
