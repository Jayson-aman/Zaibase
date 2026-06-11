/**
 * Zaibase 子育て互助システム（§33）
 *
 * notifyChildcareEmergency — 緊急送迎アラートをエリア内ユーザーに通知
 * completeChildcareMatch   — 互助完了記録・ポイント付与
 * getChildcareStats        — 互助統計（月次）
 *
 * 設計方針:
 *   - Zaibase認証ユーザー間の互助活動（有償旅客運送ではない）
 *   - 有償の場合でも互助報酬として当事者間の取り決め（道路運送法上の「自家用有償旅客運送」の
 *     コミュニティ互助の範囲を想定。弁護士確認推奨）
 *   - 子供の個人情報は最小限。氏名・顔写真はアプリ内で保持しない
 */
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const { getMessaging } = require("firebase-admin/messaging");

const db = getFirestore();
const POINTS_PER_HELP = 150;

/**
 * 緊急送迎アラートをエリア内の援助可能ユーザーに FCM 通知する。
 * フロントエンドの「🚨 緊急」ボタンから呼び出す。
 */
exports.notifyChildcareEmergency = onCall({ region: "asia-northeast1" }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");

  const { requestId, area, facilityName } = req.data || {};
  if (!requestId || !area) {
    throw new HttpsError("invalid-argument", "requestId と area が必要です");
  }

  const reqSnap = await db.collection("childcareRequests").doc(requestId).get();
  if (!reqSnap.exists) throw new HttpsError("not-found", "リクエストが見つかりません");
  const reqData = reqSnap.data();
  if (reqData.uid !== req.auth.uid) {
    throw new HttpsError("permission-denied", "自分のリクエストのみ通知できます");
  }
  if (reqData.status !== "open") {
    throw new HttpsError("failed-precondition", "すでにマッチング済みのリクエストです");
  }

  // 援助可能プロフィールを持つユーザーを検索
  const helpersSnap = await db.collection("childcareProfiles")
    .where("canHelp", "==", true)
    .limit(50)
    .get();

  const notified = [];
  const messaging = getMessaging();

  for (const helperDoc of helpersSnap.docs) {
    if (helperDoc.id === req.auth.uid) continue;

    const profileSnap = await db.collection("craftsmanProfiles").doc(helperDoc.id).get();
    if (!profileSnap.exists) continue;
    const profile = profileSnap.data();
    if (!profile.fcmToken) continue;

    try {
      await messaging.send({
        token: profile.fcmToken,
        notification: {
          title: "🚨 緊急！子育て互助リクエスト",
          body: `${area}で送迎の緊急援助が必要です（${facilityName || "保育施設"}）。Zaibaseを開いて確認してください。`,
        },
        data: { screen: "childcareScreen", requestId, type: "childcare_emergency" },
        android: { priority: "high" },
        apns: { payload: { aps: { sound: "default" } } },
      });
      notified.push(helperDoc.id);
    } catch (_) {
      // トークン失効等は無視
    }
  }

  // 緊急ログ
  await db.collection("childcareEmergencyLogs").add({
    requestId,
    requesterId: req.auth.uid,
    area,
    facilityName: facilityName || null,
    notifiedCount: notified.length,
    createdAt: FieldValue.serverTimestamp(),
  });

  return { ok: true, notifiedCount: notified.length };
});

/**
 * 送迎互助の完了を記録し、援助者にポイントを付与する。
 * 依頼者（requester）が呼び出す。
 */
exports.completeChildcareMatch = onCall({ region: "asia-northeast1" }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");

  const { matchId } = req.data || {};
  if (!matchId) throw new HttpsError("invalid-argument", "matchId が必要です");

  const matchRef = db.collection("childcareMatches").doc(matchId);
  const matchSnap = await matchRef.get();
  if (!matchSnap.exists) throw new HttpsError("not-found", "マッチング記録が見つかりません");
  const match = matchSnap.data();

  if (match.requesterId !== req.auth.uid) {
    throw new HttpsError("permission-denied", "依頼者のみ完了を記録できます");
  }
  if (match.status === "completed") {
    throw new HttpsError("failed-precondition", "すでに完了済みです");
  }

  const helperProfileRef = db.collection("craftsmanProfiles").doc(match.helperId);

  await db.runTransaction(async (tx) => {
    const helperSnap = await tx.get(helperProfileRef);
    const currentPts = (helperSnap.exists ? helperSnap.data().zbPoints || 0 : 0);

    tx.update(matchRef, {
      status: "completed",
      completedAt: FieldValue.serverTimestamp(),
    });

    if (match.requestId) {
      tx.update(db.collection("childcareRequests").doc(match.requestId), {
        status: "completed",
        updatedAt: FieldValue.serverTimestamp(),
      });
    }

    tx.set(helperProfileRef, {
      zbPoints: currentPts + POINTS_PER_HELP,
      childcareHelpCount: FieldValue.increment(1),
      updatedAt: FieldValue.serverTimestamp(),
    }, { merge: true });

    tx.set(db.collection("zbPointsLedger").doc(), {
      uid: match.helperId,
      type: "childcare_help",
      points: POINTS_PER_HELP,
      description: `子育て互助：${match.facilityName || match.area || "送迎援助"}`,
      relatedId: matchId,
      createdAt: FieldValue.serverTimestamp(),
    });
  });

  return { ok: true, pointsAwarded: POINTS_PER_HELP };
});

/**
 * ユーザーの月次互助統計を返す（ダッシュボード用）。
 */
exports.getChildcareStats = onCall({ region: "asia-northeast1" }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");

  const uid = req.auth.uid;
  const now = new Date();
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);

  const [helpedSnap, receivedSnap, profileSnap] = await Promise.all([
    db.collection("childcareMatches")
      .where("helperId", "==", uid)
      .where("matchedAt", ">=", monthStart)
      .get(),
    db.collection("childcareMatches")
      .where("requesterId", "==", uid)
      .where("matchedAt", ">=", monthStart)
      .get(),
    db.collection("childcareProfiles").doc(uid).get(),
  ]);

  const profile = profileSnap.exists ? profileSnap.data() : {};
  return {
    monthlyHelped: helpedSnap.size,
    monthlyReceived: receivedSnap.size,
    monthlyPoints: helpedSnap.size * POINTS_PER_HELP,
    isSingleParent: profile.isSingleParent || false,
    canHelp: profile.canHelp || false,
    totalHelped: profile.childcareHelpCount || 0,
  };
});
