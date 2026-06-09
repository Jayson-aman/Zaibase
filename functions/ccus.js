/**
 * Zaibase CCUS（建設キャリアアップシステム）自動記録
 *
 * GPS / 顔認証の入退場 → CCUS就業履歴APIへ送信（Maxプラン・第2期）
 *
 * ⚠️ PHASE 2 — index.js からはエクスポートしていません
 * 有効化: CCUS利用申請 + APIキー取得後
 *   firebase functions:secrets:set CCUS_API_KEY
 *
 * フィールド:
 *   craftsmanProfiles/{uid}: ccusWorkerId, ccusWorkerName
 *   contracts/{id}: ccusSiteId, ccusSiteName（発注者が registerCcusSiteId で設定）
 *   gpsLogs, faceAuthLogs, ccusLogs
 */
const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { onSchedule } = require("firebase-functions/v2/scheduler");
const { getFirestore, Timestamp } = require("firebase-admin/firestore");
const { defineSecret } = require("firebase-functions/params");

const db = getFirestore();
const CCUS_API_KEY = defineSecret("CCUS_API_KEY");
const CCUS_BASE_URL = process.env.CCUS_BASE_URL || "https://www.ccus.jp/api/v1";

function getOrdererId(c) {
  return c.ordererId || c.clientId;
}

function formatTime(date) {
  const h = String(date.getHours()).padStart(2, "0");
  const m = String(date.getMinutes()).padStart(2, "0");
  return `${h}:${m}`;
}

function buildCcusPayload({ ccusWorkerId, ccusSiteId, workDate, entryTime, exitTime, workMinutes, contractId, entryMethod }) {
  return {
    workerId: ccusWorkerId,
    siteId: ccusSiteId,
    workDate,
    entryTime,
    exitTime,
    workMinutes,
    entryMethod,
    source: "zaibase",
    sourceRef: contractId,
    recordedAt: new Date().toISOString(),
  };
}

async function sendToCcus(path, payload, method = "POST") {
  try {
    const opts = {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CCUS_API_KEY.value()}`,
        "X-Api-Version": "1.0",
      },
    };
    if (method !== "GET" && payload) opts.body = JSON.stringify(payload);

    const res = await fetch(`${CCUS_BASE_URL}${path}`, opts);
    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      return { success: false, error: data.message ?? `HTTP ${res.status}`, status: res.status };
    }
    return {
      success: true,
      workHistoryId: data.workHistoryId ?? data.id ?? null,
      workerName: data.workerName ?? null,
      siteName: data.siteName ?? null,
      raw: data,
    };
  } catch (e) {
    return { success: false, error: e.message };
  }
}

async function getCcusWorkerId(uid) {
  const profileSnap = await db.collection("craftsmanProfiles").doc(uid).get();
  const profile = profileSnap.data() || {};
  if (profile.ccusWorkerId) return profile.ccusWorkerId;

  // 旧 zaibase_ccus.js（users コレクション）との後方互換
  const userSnap = await db.collection("users").doc(uid).get();
  return userSnap.data()?.ccusWorkerId || null;
}

async function processExitLog(log, logId, collection, _entryCollection, entryQuery) {
  if (log.type !== "exit") return;

  const entrySnap = entryQuery.docs ? entryQuery : await entryQuery;
  if (entrySnap.empty) {
    console.warn(`入場記録なし: ${log.userId} / ${log.date}`);
    return;
  }

  const entryLog = entrySnap.docs[0].data();
  const ccusWorkerId = await getCcusWorkerId(log.userId);
  if (!ccusWorkerId) {
    await db.collection(collection).doc(logId).update({ ccusStatus: "skipped_no_id" });
    return;
  }

  const contractDoc = await db.collection("contracts").doc(log.contractId).get();
  const ccusSiteId = contractDoc.data()?.ccusSiteId;
  if (!ccusSiteId) {
    await db.collection(collection).doc(logId).update({ ccusStatus: "skipped_no_site" });
    return;
  }

  const entryTime = entryLog.timestamp.toDate();
  const exitTime = log.timestamp.toDate();
  const workMinutes = Math.round((exitTime - entryTime) / 60000);

  const payload = buildCcusPayload({
    ccusWorkerId,
    ccusSiteId,
    workDate: log.date,
    entryTime: formatTime(entryTime),
    exitTime: formatTime(exitTime),
    workMinutes,
    contractId: log.contractId,
    entryMethod: log.method ?? (collection === "faceAuthLogs" ? "face" : "gps"),
  });

  const result = await sendToCcus("/work-histories", payload);

  await db.collection(collection).doc(logId).update({
    ccusStatus: result.success ? "sent" : "error",
    ccusSentAt: Timestamp.now(),
    ccusWorkHistId: result.workHistoryId ?? null,
    ccusError: result.error ?? null,
  });

  await db.collection("ccusLogs").add({
    userId: log.userId,
    contractId: log.contractId,
    sourceLogId: logId,
    sourceCollection: collection,
    ccusWorkerId,
    ccusSiteId,
    workDate: log.date,
    workMinutes,
    status: result.success ? "sent" : "error",
    createdAt: Timestamp.now(),
    payload,
    response: result,
  });

  if (result.success) {
    const profileRef = db.collection("craftsmanProfiles").doc(log.userId);
    const prevDays = (await profileRef.get()).data()?.gpsRecordDays || 0;
    await profileRef.set({
      gpsRecordDays: prevDays + 1,
      ccusLastSentAt: Timestamp.now(),
    }, { merge: true });
  }
}

exports.onGpsLogCreated = onDocumentCreated(
  { document: "gpsLogs/{logId}", region: "asia-northeast1", secrets: [CCUS_API_KEY] },
  async (event) => {
    const log = event.data.data();
    const logId = event.params.logId;
    await processExitLog(
      log,
      logId,
      "gpsLogs",
      "gpsLogs",
      db.collection("gpsLogs")
        .where("userId", "==", log.userId)
        .where("contractId", "==", log.contractId)
        .where("type", "==", "entry")
        .where("date", "==", log.date)
        .limit(1)
        .get()
    );
  }
);

exports.onFaceAuthCreated = onDocumentCreated(
  { document: "faceAuthLogs/{logId}", region: "asia-northeast1", secrets: [CCUS_API_KEY] },
  async (event) => {
    const log = event.data.data();
    if (log.type !== "exit" || !log.entryLogId) return;

    const entryDoc = await db.collection("faceAuthLogs").doc(log.entryLogId).get();
    if (!entryDoc.exists) return;

    const logId = event.params.logId;
    const fakeEntrySnap = {
      empty: false,
      docs: [{ data: () => entryDoc.data() }],
    };
    await processExitLog(log, logId, "faceAuthLogs", "faceAuthLogs", fakeEntrySnap);
  }
);

exports.ccusRetryScheduler = onSchedule(
  { schedule: "0 1 * * *", timeZone: "Asia/Tokyo", region: "asia-northeast1", secrets: [CCUS_API_KEY] },
  async () => {
    const snap = await db.collection("ccusLogs")
      .where("status", "in", ["error", "skipped_no_id"])
      .limit(100)
      .get();

    let retried = 0;
    let succeeded = 0;

    for (const doc of snap.docs) {
      const log = doc.data();
      const ccusWorkerId = await getCcusWorkerId(log.userId);
      if (!ccusWorkerId) continue;

      const payload = { ...log.payload, workerId: ccusWorkerId };
      const result = await sendToCcus("/work-histories", payload);

      await doc.ref.update({
        status: result.success ? "sent" : "error",
        retriedAt: Timestamp.now(),
        response: result,
      });

      retried++;
      if (result.success) succeeded++;
    }

    console.log(`ccusRetryScheduler: ${retried} processed / ${succeeded} succeeded`);
  }
);

exports.registerCcusWorkerId = onCall(
  { region: "asia-northeast1", secrets: [CCUS_API_KEY] },
  async (req) => {
    const uid = req.auth?.uid;
    const ccusWorkerId = req.data?.ccusWorkerId;
    if (!uid) throw new HttpsError("unauthenticated", "login required");
    if (!ccusWorkerId) throw new HttpsError("invalid-argument", "ccusWorkerId required");

    const verify = await sendToCcus(`/workers/${ccusWorkerId}/verify`, null, "GET");
    if (!verify.success) {
      throw new HttpsError("invalid-argument", "CCUS技能者IDが確認できませんでした。");
    }

    await db.collection("craftsmanProfiles").doc(uid).set({
      ccusWorkerId,
      ccusWorkerName: verify.workerName ?? null,
      ccusRegisteredAt: Timestamp.now(),
    }, { merge: true });

    return { success: true, workerName: verify.workerName ?? null };
  }
);

exports.registerCcusSiteId = onCall(
  { region: "asia-northeast1", secrets: [CCUS_API_KEY] },
  async (req) => {
    const uid = req.auth?.uid;
    const { contractId, ccusSiteId } = req.data ?? {};
    if (!uid) throw new HttpsError("unauthenticated", "login required");
    if (!contractId || !ccusSiteId) {
      throw new HttpsError("invalid-argument", "contractId and ccusSiteId required");
    }

    const contractRef = db.collection("contracts").doc(contractId);
    const contractDoc = await contractRef.get();
    if (!contractDoc.exists) throw new HttpsError("not-found", "contract not found");

    const contract = contractDoc.data();
    if (getOrdererId(contract) !== uid) {
      throw new HttpsError("permission-denied", "orderer only");
    }

    const verify = await sendToCcus(`/sites/${ccusSiteId}/verify`, null, "GET");
    if (!verify.success) {
      throw new HttpsError("invalid-argument", "CCUS現場IDが確認できませんでした。");
    }

    await contractRef.update({
      ccusSiteId,
      ccusSiteName: verify.siteName ?? null,
      ccusSiteSetAt: Timestamp.now(),
    });

    return { success: true, siteName: verify.siteName ?? null };
  }
);

exports.getCcusMonthlySummary = onCall(
  { region: "asia-northeast1" },
  async (req) => {
    const uid = req.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "login required");

    const now = new Date();
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);

    const snap = await db.collection("ccusLogs")
      .where("userId", "==", uid)
      .where("status", "==", "sent")
      .where("createdAt", ">=", Timestamp.fromDate(monthStart))
      .get();

    const totalMinutes = snap.docs.reduce((s, d) => s + (d.data().workMinutes ?? 0), 0);

    let totalDaysAll = 0;
    try {
      const allSnap = await db.collection("ccusLogs")
        .where("userId", "==", uid)
        .where("status", "==", "sent")
        .count()
        .get();
      totalDaysAll = allSnap.data().count;
    } catch (_) {
      totalDaysAll = snap.size;
    }

    return {
      monthlyDays: snap.size,
      monthlyHours: Math.round((totalMinutes / 60) * 10) / 10,
      totalDaysAll,
    };
  }
);
