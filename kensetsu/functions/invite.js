/**
 * 弁護士・専門家 招待コード認証（Zaibase建設）
 *
 * redeemKensetsuLawyerInvite — 招待コードを入力し admins コレクションへ登録
 */
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");

const db = getFirestore();

// 招待コード（弁護士・専門家専用）— info@zaibase.group 経由で共有
const LAWYER_INVITE_CODE = "ZB-LEGAL-BF97-0773-FFB1";

exports.redeemKensetsuLawyerInvite = onCall(
  { region: "asia-northeast1", enforceAppCheck: true },
  async (req) => {
    const uid = req.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "ログインが必要です");

    const { code } = req.data || {};
    if (!code || typeof code !== "string")
      throw new HttpsError("invalid-argument", "招待コードを入力してください");

    if (code.trim() !== LAWYER_INVITE_CODE)
      throw new HttpsError("permission-denied", "招待コードが正しくありません");

    const adminRef = db.collection("admins").doc(uid);
    const adminSnap = await adminRef.get();
    if (adminSnap.exists) {
      return { ok: true, alreadyGranted: true, message: "すでに専門家として登録済みです" };
    }

    const userEmail = req.auth?.token?.email || null;
    await adminRef.set({
      role:       "lawyer",
      email:      userEmail,
      grantedAt:  FieldValue.serverTimestamp(),
      grantedBy:  "invite_code",
    });

    return { ok: true, alreadyGranted: false, message: "専門家として登録しました。" };
  }
);
