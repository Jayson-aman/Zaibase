/**
 * Zaibase §46 環境対策業者マッチング（紹介手数料型）
 *
 * recordEnvReferral    — 業者紹介記録（手数料管理）
 * saveSoilJob          — 土壌汚染対策タスク・期限管理
 * getSoilJobs          — タスク一覧
 *
 * Firestore:
 *   envReferrals/{referralId}   — 業者紹介記録
 *   soilJobs/{jobId}            — 土壌汚染対策案件
 *
 * 根拠:
 *   水質汚濁防止法（昭和45年法律第138号）第12条の4（事故時の措置）
 *   土壌汚染対策法（平成14年法律第53号）
 *     第4条（土地形質変更の届出 — 3,000m²以上・30日前）
 *     第11条（土地所有者への通知 — 120日以内）
 *     第3条（指定調査機関による調査義務）
 *   廃棄物処理法（昭和45年法律第137号）第14条（汚染土壌の適正処理）
 *   廃棄物処理法第16条（不法投棄の禁止）・第25条（5年以下の懲役または1,000万円以下の罰金）
 */
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");

const db = getFirestore();

exports.recordEnvReferral = onCall({ region: "asia-northeast1" }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");
  const uid = req.auth.uid;
  const d = req.data || {};

  const referralId = `envref_${uid}_${Date.now()}`;
  await db.collection("envReferrals").doc(referralId).set({
    uid,
    // oil_mat / turbid_water / soil_survey / heavy_metal / mask / soil_disposal / kantasu / house_survey / crack_repair
    bizCategory: String(d.bizCategory || "").slice(0, 50),
    siteAddress: String(d.siteAddress || "").slice(0, 200),
    requestDetail: String(d.requestDetail || "").slice(0, 500),
    desiredDate: d.desiredDate || "",
    commissionRate: 0.05,  // 5% 紹介手数料（固定）
    status: "pending",
    createdAt: FieldValue.serverTimestamp(),
  });

  return { ok: true, referralId };
});

exports.saveSoilJob = onCall({ region: "asia-northeast1" }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");
  const uid = req.auth.uid;
  const d = req.data || {};
  if (!d.siteAddress) throw new HttpsError("invalid-argument", "siteAddress が必要です");

  const jobId = d.jobId || `spjob_${uid}_${Date.now()}`;
  const changeDate = d.changeDate || "";

  // 30日前届出期限・120日以内報告書期限の自動計算
  let notifyDeadline = "";
  let reportDeadline = "";
  if (changeDate) {
    const cd = new Date(changeDate);
    const notify = new Date(cd);
    notify.setDate(notify.getDate() - 30);
    notifyDeadline = notify.toISOString().slice(0, 10);
    const report = new Date(cd);
    report.setDate(report.getDate() + 120);
    reportDeadline = report.toISOString().slice(0, 10);
  }

  // 工程表から2カ月前のマスク等案内タイミング計算
  let maskAlertDate = "";
  if (changeDate) {
    const cd = new Date(changeDate);
    cd.setMonth(cd.getMonth() - 2);
    maskAlertDate = cd.toISOString().slice(0, 10);
  }

  const ref = db.collection("soilJobs").doc(jobId);
  const existing = await ref.get();
  if (existing.exists && existing.data().uid !== uid) {
    throw new HttpsError("permission-denied", "アクセス権がありません");
  }

  const record = {
    uid,
    siteAddress: String(d.siteAddress || "").slice(0, 200),
    siteArea: Number(d.siteArea) || 0,
    changeDate,
    notifyDeadline,
    reportDeadline,
    maskAlertDate,
    hazardTypes: Array.isArray(d.hazardTypes)
      ? d.hazardTypes.map(h => String(h).slice(0, 30))
      : [],
    surveyInstitution: String(d.surveyInstitution || "").slice(0, 80),
    surveyComplete: Boolean(d.surveyComplete),
    reportSubmitted: Boolean(d.reportSubmitted),
    illegalDumpingCheck: Boolean(d.illegalDumpingCheck),
    memo: String(d.memo || "").slice(0, 500),
    updatedAt: FieldValue.serverTimestamp(),
  };
  if (!existing.exists) record.createdAt = FieldValue.serverTimestamp();

  await ref.set(record, { merge: true });
  return { ok: true, jobId, notifyDeadline, reportDeadline, maskAlertDate };
});

exports.getSoilJobs = onCall({ region: "asia-northeast1" }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");
  const uid = req.auth.uid;
  const snap = await db.collection("soilJobs")
    .where("uid", "==", uid)
    .orderBy("updatedAt", "desc")
    .limit(30)
    .get();
  return {
    ok: true,
    jobs: snap.docs.map(d => ({
      id: d.id,
      siteAddress: d.data().siteAddress,
      siteArea: d.data().siteArea,
      changeDate: d.data().changeDate,
      notifyDeadline: d.data().notifyDeadline,
      reportDeadline: d.data().reportDeadline,
      maskAlertDate: d.data().maskAlertDate,
      surveyComplete: d.data().surveyComplete,
      reportSubmitted: d.data().reportSubmitted,
      updatedAt: d.data().updatedAt?.toDate?.()?.toISOString() || null,
    })),
  };
});
