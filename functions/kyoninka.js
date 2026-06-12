// functions/kyoninka.js
// 許認可管理・法令チェック（§38）Cloud Functions

const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");

const db = getFirestore();
const OPTS = { region: "asia-northeast1", enforceAppCheck: true };

exports.savePermit = onCall(OPTS, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "認証が必要です");
  const uid = req.auth.uid;
  const { jobName, permitName, authority, status, appliedDate, expiryDate, memo } = req.data || {};
  if (!jobName || !permitName) throw new HttpsError("invalid-argument", "案件名と届出名は必須です");
  const ref = await db.collection("kyoninkaPermits").add({
    uid,
    jobName: String(jobName).slice(0, 100),
    permitName: String(permitName).slice(0, 100),
    authority: String(authority || "").slice(0, 100),
    status: String(status || "申請準備中").slice(0, 30),
    appliedDate: String(appliedDate || ""),
    expiryDate: String(expiryDate || ""),
    memo: String(memo || "").slice(0, 500),
    createdAt: FieldValue.serverTimestamp(),
  });
  return { id: ref.id };
});

exports.getPermitsByJob = onCall(OPTS, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "認証が必要です");
  const uid = req.auth.uid;
  const { jobName } = req.data || {};
  let q = db.collection("kyoninkaPermits").where("uid", "==", uid);
  if (jobName) q = q.where("jobName", "==", jobName);
  const snap = await q.orderBy("createdAt", "desc").limit(50).get();
  return snap.docs.map(d => ({ id: d.id, ...d.data(), createdAt: d.data().createdAt?.toDate?.()?.toISOString() || null }));
});

exports.checkPermitDeadlines = onCall(OPTS, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "認証が必要です");
  const uid = req.auth.uid;
  const snap = await db.collection("kyoninkaPermits").where("uid", "==", uid).get();
  const now = new Date();
  const in7days = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
  return snap.docs
    .map(d => ({ id: d.id, ...d.data(), createdAt: d.data().createdAt?.toDate?.()?.toISOString() || null }))
    .filter(p => {
      if (!p.expiryDate) return false;
      const exp = new Date(p.expiryDate);
      return exp >= now && exp <= in7days;
    });
});
