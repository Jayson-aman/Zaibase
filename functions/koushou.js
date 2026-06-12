/**
 * Zaibase 工数管理（§36）
 * addKoushouEntry  — 工数エントリを保存
 * getKoushouReport — 月次・年次レポートを返す
 */
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const db = getFirestore();

const VALID_WORK_TYPES = ['施工・現場作業','施工管理・監理','図面作成・設計','見積・積算','発注・資材調達','打ち合わせ・会議','移動','事務・書類作成','その他'];

exports.addKoushouEntry = onCall({ region: "asia-northeast1" }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");
  const { date, jobName, hours, workType, memo } = req.data || {};
  if (!date || !jobName || !hours) throw new HttpsError("invalid-argument", "date・jobName・hours は必須です");
  if (Number(hours) <= 0 || Number(hours) > 24) throw new HttpsError("invalid-argument", "時間は0.5〜24の範囲で指定してください");
  if (workType && !VALID_WORK_TYPES.includes(workType)) throw new HttpsError("invalid-argument", "無効な作業種別です");

  const ref = await db.collection("koushouEntries").add({
    uid: req.auth.uid,
    date: String(date).slice(0, 10),
    jobName: String(jobName).slice(0, 80),
    hours: Math.round(Number(hours) * 2) / 2,
    workType: workType || 'その他',
    memo: String(memo || "").slice(0, 200),
    createdAt: FieldValue.serverTimestamp(),
  });
  return { ok: true, entryId: ref.id };
});

exports.getKoushouReport = onCall({ region: "asia-northeast1" }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");
  const { year } = req.data || {};
  const targetYear = Number(year) || new Date().getFullYear();
  const startDate = `${targetYear}-01-01`;
  const endDate = `${targetYear}-12-31`;

  const snap = await db.collection("koushouEntries")
    .where("uid", "==", req.auth.uid)
    .where("date", ">=", startDate)
    .where("date", "<=", endDate)
    .orderBy("date", "asc")
    .get();

  const entries = snap.docs.map(d => ({ id: d.id, ...d.data() }));
  const monthlyTotals = {};
  let total = 0;
  entries.forEach(e => {
    const month = e.date.slice(0, 7);
    monthlyTotals[month] = (monthlyTotals[month] || 0) + (e.hours || 0);
    total += (e.hours || 0);
  });

  let overtimeTotal = 0;
  Object.values(monthlyTotals).forEach(h => {
    overtimeTotal += Math.max(0, h - 160);
  });

  return { ok: true, year: targetYear, total, monthlyTotals, overtimeTotal };
});
