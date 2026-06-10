/**
 * 緊急職人手配（Uber型・§24）
 * urgentJobs 作成時に近隣職人へ通知（β — FCMトークンがある場合）
 */
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const { getFirestore } = require("firebase-admin/firestore");
const { getMessaging } = require("firebase-admin/messaging");
const logger = require("firebase-functions/logger");

const db = getFirestore();

exports.notifyUrgentJob = onDocumentCreated("urgentJobs/{jobId}", async (event) => {
  const job = event.data?.data();
  if (!job || job.status !== "beta_open") return;

  const snap = await db.collection("craftsmanProfiles").limit(80).get();
  const tokens = [];
  snap.forEach((d) => {
    const t = d.data().fcmToken;
    if (t) tokens.push(t);
  });
  if (!tokens.length) {
    logger.info("notifyUrgentJob: FCMトークンなし", event.params.jobId);
    return;
  }

  try {
    await getMessaging().sendEachForMulticast({
      tokens: tokens.slice(0, 20),
      notification: {
        title: "🚨 緊急案件が近くにあります",
        body: (job.title || "至急の応援募集") + ` · ¥${(job.reward || 0).toLocaleString()}`,
      },
      data: { type: "urgent_job", jobId: event.params.jobId },
    });
  } catch (e) {
    logger.error("notifyUrgentJob FCM", e);
  }
});

exports.listNearbyUrgentJobs = onCall(async (request) => {
  if (!request.auth) throw new HttpsError("unauthenticated", "ログインが必要です");
  const snap = await db.collection("urgentJobs")
    .where("status", "==", "beta_open")
    .limit(20)
    .get();
  const jobs = [];
  snap.forEach((d) => jobs.push({ id: d.id, ...d.data() }));
  return { jobs, radiusKm: request.data?.radiusKm || 20 };
});
