/**
 * ahiru アカウント削除（Apple ガイドライン 5.1.1(v) 対応）
 *
 * deleteMyData — ログイン中のユーザー本人のサーバー側データをすべて削除し、
 *   最後に認証アカウント（Firebase Auth）も削除する。
 *
 * クライアントからは消せないデータ（利用回数・解放記録・感想・アクセス記録など）が
 * Firestore に残り続けないよう、サーバー（管理者権限）でまとめて消す。
 *
 * セキュリティ:
 *   ・直近5分以内にパスワードで再認証したセッションだけ受け付ける（auth_time を確認）。
 *     端末を拾った人が、ログイン済みのまま削除できないようにするため。
 *   ・匿名ユーザーは対象外（消す個人データがない。クライアント側で deleteUser する）。
 *
 * 残すもの（法令上の保存義務・会計のため）:
 *   Stripe の決済記録。アプリ側には残さない。
 */
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { getFirestore } = require("firebase-admin/firestore");
const admin = require("firebase-admin");
const { REVENUECAT_SECRET_KEY } = require("./revenuecat");

const db = getFirestore();

/** uid をドキュメントIDにしているコレクション */
const DOC_BY_UID = [
  "aiCoachUsage",
  "aiTutorUsage",
  "aiConversationUsage",
  "ttsUsage",
  "feedbackUsage",
  "users",
  "formulaUnlocks",
  "unitUnlocks",
  "examLeaderboard",
];

/** uid を項目に持つコレクション */
const QUERY_BY_UID = ["feedbackSubmissions", "accessEvents"];

const RECENT_LOGIN_SECONDS = 5 * 60;

async function deleteQuery(query) {
  // 500件ずつ消す
  for (;;) {
    const snap = await query.limit(400).get();
    if (snap.empty) return;
    const batch = db.batch();
    snap.docs.forEach((d) => batch.delete(d.ref));
    await batch.commit();
    if (snap.size < 400) return;
  }
}

async function deleteRevenueCatSubscriber(uid) {
  let key = "";
  try {
    key = REVENUECAT_SECRET_KEY.value();
  } catch {
    return;
  }
  if (!key || key === "placeholder") return;
  try {
    await fetch(`https://api.revenuecat.com/v1/subscribers/${encodeURIComponent(uid)}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${key}` },
      // RevenueCat が応答しないと、データを消したあとで関数全体が時間切れになる
      signal: AbortSignal.timeout(10000),
    });
  } catch {
    // 失敗しても、アカウント削除そのものは進める（ストア側の購読はここでは解約されない）
  }
}

exports.deleteMyData = onCall(
  { region: "asia-northeast1", secrets: [REVENUECAT_SECRET_KEY], timeoutSeconds: 120 },
  async (req) => {
    const uid = req.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "ログインが必要です");
    if (req.auth.token?.firebase?.sign_in_provider === "anonymous") {
      throw new HttpsError("failed-precondition", "匿名のアカウントでは使えません");
    }
    const authTime = Number(req.auth.token?.auth_time ?? 0);
    if (!authTime || Date.now() / 1000 - authTime > RECENT_LOGIN_SECONDS) {
      throw new HttpsError("failed-precondition", "requires-recent-login");
    }

    for (const col of DOC_BY_UID) {
      await db.collection(col).doc(uid).delete();
    }
    for (const col of QUERY_BY_UID) {
      await deleteQuery(db.collection(col).where("uid", "==", uid));
    }
    // aiTutorSessions/{uid_sessionId}
    await deleteQuery(
      db
        .collection("aiTutorSessions")
        .where(admin.firestore.FieldPath.documentId(), ">=", `${uid}_`)
        .where(admin.firestore.FieldPath.documentId(), "<", `${uid}_\uf8ff`),
    );
    await deleteRevenueCatSubscriber(uid);
    await admin.auth().deleteUser(uid);
    return { ok: true };
  },
);
