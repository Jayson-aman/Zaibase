/**
 * Zaibase §44 過労死・労災支援センター
 *
 * saveKaroshiCase   — 過労死等相談・証拠記録の保存
 * getKaroshiCases   — 相談履歴の取得
 * registerWorkplace — 職場登録（GPS座標・有効半径）
 * getWorkplaces     — 職場一覧
 * clockInOut        — GPS出退勤打刻（自己申告対応）
 * getWorkLogs       — 勤務ログ取得
 * saveInterview     — 面談録音・文字起こし保存
 * getInterviews     — 面談記録一覧
 *
 * Firestore:
 *   karoshiCases/{caseId}
 *   karoshiWorkplaces/{wpId}
 *   karoshiTimeLogs/{logId}
 *   karoshiInterviews/{ivId}
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
    caseType: String(d.caseType || "overwork").slice(0, 30),
    workHoursPerMonth: Number(d.workHoursPerMonth) || 0,
    overtimeMonth1: Number(d.overtimeMonth1) || 0,
    overtimeAvg26: Number(d.overtimeAvg26) || 0,
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

// ── 職場登録・GPS出退勤 ────────────────────────────────────────────

exports.registerWorkplace = onCall({ region: "asia-northeast1" }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");
  const uid = req.auth.uid;
  const d = req.data || {};
  if (!d.name) throw new HttpsError("invalid-argument", "職場名が必要です");

  const wpId = d.wpId || `wp_${uid}_${Date.now()}`;
  const ref = db.collection("karoshiWorkplaces").doc(wpId);
  const ex = await ref.get();
  if (ex.exists && ex.data().uid !== uid) throw new HttpsError("permission-denied", "アクセス権がありません");

  await ref.set({
    uid,
    name: String(d.name).slice(0, 80),
    address: String(d.address || "").slice(0, 200),
    lat: Number(d.lat) || 0,
    lng: Number(d.lng) || 0,
    radius: Math.min(Number(d.radius) || 200, 1000), // 最大1,000m
    active: true,
    updatedAt: FieldValue.serverTimestamp(),
  }, { merge: true });

  if (!ex.exists) await ref.update({ createdAt: FieldValue.serverTimestamp() });
  return { ok: true, wpId };
});

exports.getWorkplaces = onCall({ region: "asia-northeast1" }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");
  const uid = req.auth.uid;
  const snap = await db.collection("karoshiWorkplaces")
    .where("uid", "==", uid)
    .where("active", "==", true)
    .get();
  return {
    ok: true,
    workplaces: snap.docs.map(d => ({
      id: d.id,
      name: d.data().name,
      address: d.data().address,
      lat: d.data().lat,
      lng: d.data().lng,
      radius: d.data().radius,
    })),
  };
});

exports.clockInOut = onCall({ region: "asia-northeast1" }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");
  const uid = req.auth.uid;
  const d = req.data || {};

  const validTypes = ['in', 'out', 'self_in', 'self_out'];
  if (!validTypes.includes(d.type)) throw new HttpsError("invalid-argument", "type は in/out/self_in/self_out のいずれかです");
  if (d.type.startsWith('self_') && !d.reason) throw new HttpsError("invalid-argument", "自己申告には理由の記載が必要です");

  const logId = `tlog_${uid}_${Date.now()}`;
  await db.collection("karoshiTimeLogs").doc(logId).set({
    uid,
    workplaceId: String(d.workplaceId || "").slice(0, 80),
    workplaceName: String(d.workplaceName || "").slice(0, 80),
    type: d.type,
    isSelfReport: d.type.startsWith('self_'),
    lat: Number(d.lat) || 0,
    lng: Number(d.lng) || 0,
    distanceFromWorkplace: Number(d.distanceFromWorkplace) || 0,
    reason: String(d.reason || "").slice(0, 300),
    timestamp: FieldValue.serverTimestamp(),
  });

  return { ok: true, logId };
});

exports.getWorkLogs = onCall({ region: "asia-northeast1" }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");
  const uid = req.auth.uid;
  const snap = await db.collection("karoshiTimeLogs")
    .where("uid", "==", uid)
    .orderBy("timestamp", "desc")
    .limit(100)
    .get();
  return {
    ok: true,
    logs: snap.docs.map(d => ({
      id: d.id,
      workplaceName: d.data().workplaceName,
      type: d.data().type,
      isSelfReport: d.data().isSelfReport,
      reason: d.data().reason,
      distanceFromWorkplace: d.data().distanceFromWorkplace,
      timestamp: d.data().timestamp?.toDate?.()?.toISOString() || null,
    })),
  };
});

// ── 面談録音・文字起こし ────────────────────────────────────────────

exports.saveInterview = onCall({ region: "asia-northeast1" }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");
  const uid = req.auth.uid;
  const d = req.data || {};

  const ivId = d.ivId || `iv_${uid}_${Date.now()}`;
  const ref = db.collection("karoshiInterviews").doc(ivId);
  const ex = await ref.get();
  if (ex.exists && ex.data().uid !== uid) throw new HttpsError("permission-denied", "アクセス権がありません");

  await ref.set({
    uid,
    title: String(d.title || "面談記録").slice(0, 100),
    interviewDate: d.interviewDate || "",
    participants: String(d.participants || "").slice(0, 200),
    transcript: String(d.transcript || "").slice(0, 20000),
    durationSec: Number(d.durationSec) || 0,
    updatedAt: FieldValue.serverTimestamp(),
  }, { merge: true });

  if (!ex.exists) await ref.update({ createdAt: FieldValue.serverTimestamp() });
  return { ok: true, ivId };
});

exports.getInterviews = onCall({ region: "asia-northeast1" }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");
  const uid = req.auth.uid;
  const snap = await db.collection("karoshiInterviews")
    .where("uid", "==", uid)
    .orderBy("updatedAt", "desc")
    .limit(30)
    .get();
  return {
    ok: true,
    interviews: snap.docs.map(d => ({
      id: d.id,
      title: d.data().title,
      interviewDate: d.data().interviewDate,
      participants: d.data().participants,
      durationSec: d.data().durationSec,
      transcriptLen: (d.data().transcript || "").length,
      updatedAt: d.data().updatedAt?.toDate?.()?.toISOString() || null,
    })),
  };
});
