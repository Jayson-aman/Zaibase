/**
 * 職人コミュニティ — ありがとうポイント送付（§29）
 * communityPosts の thanksBy と arigatoPoints をトランザクションで更新
 */
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { FieldValue } = require("firebase-admin/firestore");
const admin = require("firebase-admin");

const THANKS_AMOUNT = 10;
const INITIAL_BALANCE = 100;

exports.sendCommunityThanks = onCall({ region: "asia-northeast1" }, async (request) => {
  const uid = request.auth?.uid;
  if (!uid) throw new HttpsError("unauthenticated", "ログインが必要です");

  const postId = request.data?.postId;
  if (!postId || typeof postId !== "string") {
    throw new HttpsError("invalid-argument", "postId が必要です");
  }

  const db = admin.firestore();
  const postRef = db.collection("communityPosts").doc(postId);

  await db.runTransaction(async (tx) => {
    const postSnap = await tx.get(postRef);
    if (!postSnap.exists) throw new HttpsError("not-found", "投稿が見つかりません");

    const post = postSnap.data();
    if (post.status !== "active") {
      throw new HttpsError("failed-precondition", "この投稿にはありがとうできません");
    }
    if (post.userId === uid) {
      throw new HttpsError("failed-precondition", "自分の投稿には送れません");
    }

    const thanksBy = post.thanksBy || [];
    if (thanksBy.includes(uid)) {
      throw new HttpsError("already-exists", "すでに送信済みです");
    }

    const recipientRef = db.collection("arigatoPoints").doc(post.userId);
    const senderRef = db.collection("arigatoPoints").doc(uid);
    const [recipientSnap, senderSnap] = await Promise.all([
      tx.get(recipientRef),
      tx.get(senderRef),
    ]);

    const senderBal = senderSnap.exists
      ? (senderSnap.data().balance ?? 0)
      : INITIAL_BALANCE;
    if (senderBal < THANKS_AMOUNT) {
      throw new HttpsError("failed-precondition", "ポイントが足りません（10pt必要）");
    }

    tx.update(postRef, {
      thanksBy: FieldValue.arrayUnion(uid),
      updatedAt: FieldValue.serverTimestamp(),
    });

    if (recipientSnap.exists) {
      tx.update(recipientRef, {
        balance: FieldValue.increment(THANKS_AMOUNT),
        updatedAt: FieldValue.serverTimestamp(),
      });
    } else {
      tx.set(recipientRef, {
        balance: INITIAL_BALANCE + THANKS_AMOUNT,
        helpCount: 0,
        helpPeople: 0,
        updatedAt: FieldValue.serverTimestamp(),
      });
    }

    if (senderSnap.exists) {
      tx.update(senderRef, {
        balance: FieldValue.increment(-THANKS_AMOUNT),
        helpCount: FieldValue.increment(1),
        updatedAt: FieldValue.serverTimestamp(),
      });
    } else {
      tx.set(senderRef, {
        balance: INITIAL_BALANCE - THANKS_AMOUNT,
        helpCount: 1,
        helpPeople: 0,
        updatedAt: FieldValue.serverTimestamp(),
      });
    }

    const txRef = db.collection("arigatoTransactions").doc();
    tx.set(txRef, {
      fromUserId: uid,
      toUserId: post.userId,
      postId,
      amount: THANKS_AMOUNT,
      createdAt: FieldValue.serverTimestamp(),
    });
  });

  return { ok: true, amount: THANKS_AMOUNT };
});
