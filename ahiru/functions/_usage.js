// 利用回数まわりの共通部品。
// ・日付は日本時間（JST）で数える。UTC のままだと、日本の午前9時に「1日」が切り替わってしまう。
// ・AI／音声の生成に失敗したときは、先に増やした利用回数を1つ戻す（失敗しただけで回数が減るのを防ぐ）。
const { FieldValue } = require("firebase-admin/firestore");

function jstNow() {
  return new Date(Date.now() + 9 * 3600 * 1000);
}
/** 日本時間の日付（YYYY-MM-DD） */
function jstDay() {
  return jstNow().toISOString().slice(0, 10);
}
/** 日本時間の年月（YYYY-MM） */
function jstMonth() {
  return jstNow().toISOString().slice(0, 7);
}

/**
 * 1日あたりの利用回数を1つ戻す。同じ日の記録があって、回数が1以上のときだけ。
 * 失敗しても例外は投げない（戻せなかっただけで、本来のエラーを隠さない）。
 */
async function refundDaily(db, collection, uid, dateField, countField) {
  try {
    const ref = db.collection(collection).doc(uid);
    await db.runTransaction(async (tx) => {
      const snap = await tx.get(ref);
      if (!snap.exists) return;
      const d = snap.data();
      const n = d[countField] ?? 0;
      if (d[dateField] !== jstDay() || n <= 0) return;
      tx.update(ref, { [countField]: n - 1, updatedAt: FieldValue.serverTimestamp() });
    });
  } catch (e) {
    console.error("refundDaily failed", collection, e);
  }
}

module.exports = { jstDay, jstMonth, refundDaily };
