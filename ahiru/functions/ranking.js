/**
 * ahiru 全国ランキング（サーバー側で順位を計算する）
 *
 * なぜサーバー側でやるか:
 *   順位計算をクライアントで行うには examLeaderboard 全体への読み取り権限が必要で、
 *   その場合「誰でも全ユーザーのIDとスコアと最終学習日時を一覧できる」状態になる。
 *   子ども向けアプリでこれは避けたいので、読み取りはサーバー（Admin SDK）に限定し、
 *   クライアントには自分の順位だけを返す。
 *
 * getMyRanking — 自分の順位・全体人数・自分の正答率を返す
 */
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { getFirestore } = require("firebase-admin/firestore");

const db = getFirestore();
const COLLECTION = "examLeaderboard";

exports.getMyRanking = onCall(
  { region: "asia-northeast1" },
  async (req) => {
    const uid = req.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "ログインが必要です");

    const mySnap = await db.collection(COLLECTION).doc(uid).get();
    // まだ1問も解いていない場合は順位なし
    if (!mySnap.exists) return { ok: true, ranking: null };

    const myPct = mySnap.data()?.pct;
    if (typeof myPct !== "number") return { ok: true, ranking: null };

    const [aboveSnap, totalSnap] = await Promise.all([
      db.collection(COLLECTION).where("pct", ">", myPct).count().get(),
      db.collection(COLLECTION).count().get(),
    ]);

    return {
      ok: true,
      ranking: {
        rank: aboveSnap.data().count + 1,
        totalUsers: totalSnap.data().count,
        myPct,
      },
    };
  }
);
