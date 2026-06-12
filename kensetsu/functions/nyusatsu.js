/**
 * Zaibase 入札・認定・CPD管理（§37）
 * saveCertification — nyusatsuCerts/{uid} に認定データ保存
 * addCpdRecord      — cpdRecords に CPD記録を追加し年間累計を返す
 * getCpdSummary     — 指定年のCPD累計・月別内訳を返す
 */
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const db = getFirestore();

const VALID_CERT_KEYS = ['eruboshi','kurumin','youthyell','iso9001','iso14001','iso45001'];
const CPD_TYPES = ['講習・研修','セミナー・講演','eラーニング','現場研修','技術発表','その他'];

exports.saveCertification = onCall({ region: "asia-northeast1", enforceAppCheck: true }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");
  const { certData } = req.data || {};
  if (!certData || typeof certData !== 'object') throw new HttpsError("invalid-argument", "certData は必須です");

  // 既知キーのみ保存
  const sanitized = {};
  for (const key of VALID_CERT_KEYS) {
    if (certData[key]) {
      sanitized[key] = {
        status: String(certData[key].status || '未取得').slice(0, 30),
        acquiredDate: String(certData[key].acquiredDate || '').slice(0, 10),
        expiryDate: String(certData[key].expiryDate || '').slice(0, 10),
        certNo: String(certData[key].certNo || '').slice(0, 80),
        note: String(certData[key].note || '').slice(0, 200),
      };
    }
  }

  await db.collection("nyusatsuCerts").doc(req.auth.uid).set(sanitized, { merge: true });
  return { ok: true };
});

exports.addCpdRecord = onCall({ region: "asia-northeast1", enforceAppCheck: true }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");
  const { date, organizer, title, hours, units, type, certNo } = req.data || {};
  if (!date || !title || !units) throw new HttpsError("invalid-argument", "date・title・units は必須です");
  if (Number(units) <= 0 || Number(units) > 50) throw new HttpsError("invalid-argument", "単位数は0.5〜50の範囲で指定してください");
  if (type && !CPD_TYPES.includes(type)) throw new HttpsError("invalid-argument", "無効な種別です");

  const ref = await db.collection("cpdRecords").add({
    uid: req.auth.uid,
    date: String(date).slice(0, 10),
    organizer: String(organizer || '').slice(0, 100),
    title: String(title).slice(0, 120),
    hours: Math.round(Number(hours || 0) * 2) / 2,
    units: Math.round(Number(units) * 2) / 2,
    type: type || 'その他',
    certNo: String(certNo || '').slice(0, 60),
    createdAt: FieldValue.serverTimestamp(),
  });

  // 今年の累計を計算
  const year = String(date).slice(0, 4);
  const snap = await db.collection("cpdRecords")
    .where("uid", "==", req.auth.uid)
    .where("date", ">=", `${year}-01-01`)
    .where("date", "<=", `${year}-12-31`)
    .get();
  const annualUnits = snap.docs.reduce((s, d) => s + (d.data().units || 0), 0);

  return { ok: true, recordId: ref.id, annualUnits };
});

exports.getCpdSummary = onCall({ region: "asia-northeast1", enforceAppCheck: true }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");
  const { year } = req.data || {};
  const targetYear = Number(year) || new Date().getFullYear();
  const startDate = `${targetYear}-01-01`;
  const endDate = `${targetYear}-12-31`;

  const snap = await db.collection("cpdRecords")
    .where("uid", "==", req.auth.uid)
    .where("date", ">=", startDate)
    .where("date", "<=", endDate)
    .orderBy("date", "asc")
    .get();

  const records = snap.docs.map(d => ({ id: d.id, ...d.data() }));
  const monthlyUnits = {};
  let totalUnits = 0;

  records.forEach(r => {
    const month = r.date.slice(0, 7);
    monthlyUnits[month] = (monthlyUnits[month] || 0) + (r.units || 0);
    totalUnits += (r.units || 0);
  });

  return {
    ok: true,
    year: targetYear,
    totalUnits,
    monthlyUnits,
    targetUnits: 50,
    achievementRate: Math.min(100, Math.round((totalUnits / 50) * 100)),
  };
});
