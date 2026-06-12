/**
 * Zaibase §45 騒音規制法・振動規制法 特定建設作業申請支援
 *
 * saveNoiseVibApp   — 特定建設作業届出情報の保存（7日前期限管理）
 * getNoiseVibApps   — 届出履歴の取得
 *
 * Firestore: noiseVibApps/{appId}
 *
 * 根拠:
 *   騒音規制法（昭和43年法律第98号）第14条（届出）・第15条（改善勧告）
 *   振動規制法（昭和51年法律第64号）第14条（届出）・第15条（改善勧告）
 *   騒音規制法施行規則第11条（届出書様式第1号）
 *   規制基準: 騒音85dB(A)以下・振動75dB以下（敷地境界）
 */
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");

const db = getFirestore();

exports.saveNoiseVibApp = onCall({ region: "asia-northeast1", enforceAppCheck: true }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");
  const uid = req.auth.uid;
  const d = req.data || {};
  if (!d.siteAddress) throw new HttpsError("invalid-argument", "siteAddress が必要です");
  if (!d.startDate) throw new HttpsError("invalid-argument", "startDate が必要です");

  // 7日前届出期限の自動計算
  let notifyDeadline = "";
  if (d.startDate) {
    const sd = new Date(d.startDate);
    sd.setDate(sd.getDate() - 7);
    notifyDeadline = sd.toISOString().slice(0, 10);
  }

  const appId = d.appId || `nvapp_${uid}_${Date.now()}`;
  const ref = db.collection("noiseVibApps").doc(appId);
  const existing = await ref.get();
  if (existing.exists && existing.data().uid !== uid) {
    throw new HttpsError("permission-denied", "アクセス権がありません");
  }

  const record = {
    uid,
    appType: d.appType === "vibration" ? "vibration" : "noise",
    constructionName: String(d.constructionName || "").slice(0, 120),
    clientName: String(d.clientName || "").slice(0, 80),
    siteAddress: String(d.siteAddress || "").slice(0, 200),
    startDate: d.startDate || "",
    endDate: d.endDate || "",
    notifyDeadline,
    workHoursStart: String(d.workHoursStart || "").slice(0, 10),
    workHoursEnd: String(d.workHoursEnd || "").slice(0, 10),
    machineTypes: Array.isArray(d.machineTypes)
      ? d.machineTypes.map(m => String(m).slice(0, 60))
      : [],
    prevSurveyDone: Boolean(d.prevSurveyDone),
    memo: String(d.memo || "").slice(0, 500),
    updatedAt: FieldValue.serverTimestamp(),
  };
  if (!existing.exists) record.createdAt = FieldValue.serverTimestamp();

  await ref.set(record, { merge: true });
  return { ok: true, appId, notifyDeadline };
});

exports.getNoiseVibApps = onCall({ region: "asia-northeast1", enforceAppCheck: true }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");
  const uid = req.auth.uid;
  const snap = await db.collection("noiseVibApps")
    .where("uid", "==", uid)
    .orderBy("updatedAt", "desc")
    .limit(30)
    .get();
  return {
    ok: true,
    apps: snap.docs.map(d => ({
      id: d.id,
      appType: d.data().appType,
      constructionName: d.data().constructionName,
      siteAddress: d.data().siteAddress,
      startDate: d.data().startDate,
      notifyDeadline: d.data().notifyDeadline,
      updatedAt: d.data().updatedAt?.toDate?.()?.toISOString() || null,
    })),
  };
});
