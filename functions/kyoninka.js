// functions/kyoninka.js
// 許認可管理・法令チェック（§38）Cloud Functions

const functions = require("firebase-functions");
const admin = require("firebase-admin");

// savePermit: kyoninkaPermits に届出記録を保存
exports.savePermit = functions.https.onCall(async (data, context) => {
  if (!context.auth) throw new functions.https.HttpsError('unauthenticated', '認証が必要です');
  const uid = context.auth.uid;
  const { jobName, permitName, authority, status, appliedDate, expiryDate, memo } = data;
  if (!jobName || !permitName) throw new functions.https.HttpsError('invalid-argument', '案件名と届出名は必須です');
  const db = admin.firestore();
  const ref = await db.collection('kyoninkaPermits').add({
    uid, jobName, permitName, authority: authority || '', status: status || '申請準備中',
    appliedDate: appliedDate || '', expiryDate: expiryDate || '', memo: memo || '',
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  });
  return { id: ref.id };
});

// getPermitsByJob: 案件名で絞り込んで返す
exports.getPermitsByJob = functions.https.onCall(async (data, context) => {
  if (!context.auth) throw new functions.https.HttpsError('unauthenticated', '認証が必要です');
  const uid = context.auth.uid;
  const { jobName } = data;
  const db = admin.firestore();
  let q = db.collection('kyoninkaPermits').where('uid', '==', uid);
  if (jobName) q = q.where('jobName', '==', jobName);
  const snap = await q.orderBy('createdAt', 'desc').get();
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
});

// checkPermitDeadlines: 期限が近い（7日以内）届出を返す
exports.checkPermitDeadlines = functions.https.onCall(async (data, context) => {
  if (!context.auth) throw new functions.https.HttpsError('unauthenticated', '認証が必要です');
  const uid = context.auth.uid;
  const db = admin.firestore();
  const snap = await db.collection('kyoninkaPermits').where('uid', '==', uid).get();
  const now = new Date();
  const in7days = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
  const near = snap.docs
    .map(d => ({ id: d.id, ...d.data() }))
    .filter(p => {
      if (!p.expiryDate) return false;
      const exp = new Date(p.expiryDate);
      return exp >= now && exp <= in7days;
    });
  return near;
});
