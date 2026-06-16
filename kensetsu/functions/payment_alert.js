/**
 * Zaibase 支払期日アラート（フリーランス保護法第5条）
 * デプロイ: firebase deploy --only functions:paymentAlertScheduler,functions:markWorkComplete,functions:confirmPayment
 */
const { onSchedule } = require("firebase-functions/v2/scheduler");
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { getFirestore, Timestamp } = require("firebase-admin/firestore");
const { getMessaging } = require("firebase-admin/messaging");

const db = getFirestore();

const ALERT_DAYS = {
  WARN_7: -7,
  DUE: 0,
  LATE_1: 1,
  LATE_7: 7,
  LATE_30: 30,
};

function classifyAlert(diffDays) {
  if (diffDays === ALERT_DAYS.WARN_7) return { type: "WARN_7", level: "warning" };
  if (diffDays === ALERT_DAYS.DUE) return { type: "DUE", level: "urgent" };
  if (diffDays === ALERT_DAYS.LATE_1) return { type: "LATE_1", level: "danger" };
  if (diffDays === ALERT_DAYS.LATE_7) return { type: "LATE_7", level: "critical" };
  if (diffDays === ALERT_DAYS.LATE_30) return { type: "LATE_30", level: "suspend" };
  return null;
}

function emailHtml(heading, content) {
  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;">
      <div style="background:#1a3c5e;padding:16px 24px;border-radius:8px 8px 0 0;">
        <span style="color:#fff;font-size:20px;font-weight:bold;">Zaibase</span>
      </div>
      <div style="border:1px solid #e0e0e0;border-top:none;padding:24px;border-radius:0 0 8px 8px;">
        <h2 style="color:#1a3c5e;margin-top:0;">${heading}</h2>
        ${content}
        <hr style="border:none;border-top:1px solid #eee;margin:24px 0;">
        <p style="color:#888;font-size:12px;">
          Zaibase | 本メールはシステムより自動送信されています<br>
          準拠法令：フリーランス保護法第5条・第12条
        </p>
      </div>
    </div>`;
}

function buildMessages(contractId, c, alert, diffDays) {
  const amount = `¥${(c.rewardAmount ?? 0).toLocaleString()}`;
  const msgs = [];

  switch (alert.type) {
    case "WARN_7":
      msgs.push({
        token: c.ordererFcmToken,
        email: c.ordererEmail,
        title: "【Zaibase】支払期日まで7日です",
        body: `${c.contractorName}さんへの報酬${amount}の支払期日が7日後です。`,
        subject: "【Zaibase】支払期日まであと7日のお知らせ",
        html: emailHtml("支払期日が近づいています",
          `<p>${c.contractorName}さんへの報酬 <strong>${amount}</strong> の支払期日まで<strong>7日</strong>です。</p>
           <p>作業完了確認日から60日以内の支払が義務付けられています。</p>`),
        data: { contractId, type: "WARN_7" },
      });
      break;
    case "DUE":
      msgs.push({
        token: c.ordererFcmToken,
        email: c.ordererEmail,
        title: "【Zaibase】本日が支払期日です",
        body: `${c.contractorName}さんへの報酬${amount}の支払期日は本日です。`,
        subject: "【Zaibase】本日が支払期日です",
        html: emailHtml("本日が支払期日です",
          `<p style="color:#d32f2f;font-weight:bold;">本日が支払期日です。</p>
           <p>報酬 <strong>${amount}</strong> を本日中にお支払いください。</p>`),
        data: { contractId, type: "DUE" },
      });
      break;
    case "LATE_1":
      msgs.push({
        token: c.ordererFcmToken,
        email: c.ordererEmail,
        title: "【Zaibase】支払が遅延しています",
        body: `${c.contractorName}さんへの報酬${amount}が未払いです。`,
        subject: "【Zaibase】支払遅延のお知らせ",
        html: emailHtml("支払遅延が発生しています",
          `<p>支払期日を1日超過しました。フリーランス保護法第5条にご注意ください。</p>`),
        data: { contractId, type: "LATE_1" },
      });
      msgs.push({
        token: c.contractorFcmToken,
        email: c.contractorEmail,
        title: "【Zaibase】報酬が未払いです",
        body: `${c.ordererName}からの報酬${amount}が支払期日を超過しています。`,
        subject: "【Zaibase】報酬未払いのお知らせ",
        html: emailHtml("報酬が未払いです",
          `<p>報酬 <strong>${amount}</strong> の支払期日を超過しています。相談窓口をご利用ください。</p>`),
        data: { contractId, type: "LATE_1_WORKER" },
      });
      break;
    case "LATE_7":
      msgs.push({
        email: "info@zaibase.group",
        subject: `【管理者】支払7日超過 ${contractId}`,
        html: emailHtml("管理者エスカレーション",
          `<p>契約ID: ${contractId}</p>
           <p>発注者: ${c.ordererName} / 受注者: ${c.contractorName}</p>
           <p>金額: ${amount} / 超過: ${diffDays}日</p>`),
        data: { contractId, type: "LATE_7_ADMIN" },
      });
      break;
    case "LATE_30":
      msgs.push({
        token: c.ordererFcmToken,
        email: c.ordererEmail,
        title: "【Zaibase】アカウント停止警告",
        body: "支払遅延が30日を超えました。",
        subject: "【Zaibase】アカウント停止警告",
        html: emailHtml("アカウント停止警告",
          `<p>支払遅延が30日を超えました。7日以内に支払がない場合、アカウント停止の対象となります。</p>`),
        data: { contractId, type: "LATE_30" },
      });
      break;
    default:
      break;
  }
  return msgs;
}

async function sendNotifications({ contractId, contract, alert, diffDays }) {
  const msgs = buildMessages(contractId, contract, alert, diffDays);
  const fcmTasks = msgs.map(async ({ token, title, body, data }) => {
    if (!token) return;
    try {
      await getMessaging().send({ token, notification: { title, body }, data });
    } catch (e) {
      console.error(`FCM失敗 ${contractId}:`, e.message);
    }
  });
  const emailTasks = msgs.map(async ({ email, subject, html }) => {
    if (!email) return;
    await db.collection("mail").add({
      to: email,
      message: { subject, html },
      createdAt: Timestamp.now(),
    });
  });
  await Promise.allSettled([...fcmTasks, ...emailTasks]);
}

exports.paymentAlertScheduler = onSchedule(
  { schedule: "0 9 * * *", timeZone: "Asia/Tokyo", region: "asia-northeast1" },
  async () => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    const snap = await db.collection("contracts")
      .where("status", "in", ["active", "work_completed", "payment_overdue"])
      .get();

    const batch = db.batch();
    const notifications = [];

    for (const doc of snap.docs) {
      const contract = doc.data();
      const deadline = contract.paymentDeadline?.toDate?.() ?? null;
      if (!deadline) continue;

      deadline.setHours(0, 0, 0, 0);
      const diffDays = Math.round((now - deadline) / (1000 * 60 * 60 * 24));
      const alert = classifyAlert(diffDays);
      if (!alert) continue;

      const alertRef = db.collection("paymentAlerts").doc();
      batch.set(alertRef, {
        contractId: doc.id,
        ordererId: contract.ordererId,
        contractorId: contract.contractorId,
        alertType: alert.type,
        diffDays,
        deadline: contract.paymentDeadline,
        rewardAmount: contract.rewardAmount,
        createdAt: Timestamp.now(),
      });

      if (diffDays >= ALERT_DAYS.LATE_1 && contract.status !== "payment_overdue") {
        batch.update(doc.ref, {
          status: "payment_overdue",
          overdueSince: Timestamp.now(),
          overdueDays: diffDays,
        });
      }
      if (diffDays >= ALERT_DAYS.LATE_30) {
        batch.update(doc.ref, {
          suspensionWarning: true,
          suspensionWarningAt: Timestamp.now(),
        });
      }

      notifications.push({ contractId: doc.id, contract, alert, diffDays });
    }

    await batch.commit();
    await Promise.allSettled(notifications.map((n) => sendNotifications(n)));
    console.log(`paymentAlertScheduler: ${notifications.length} alerts`);
  }
);

exports.markWorkComplete = onCall(
  { region: "asia-northeast1", enforceAppCheck: true },
  async (req) => {
    const { contractId, completionNote } = req.data || {};
    if (!contractId) throw new HttpsError("invalid-argument", "contractId required");
    if (!req.auth?.uid) throw new HttpsError("unauthenticated", "login required");

    const ref = db.collection("contracts").doc(contractId);
    const doc = await ref.get();
    if (!doc.exists) throw new HttpsError("not-found", "contract not found");

    const contract = doc.data();
    if (contract.contractorId !== req.auth.uid) {
      throw new HttpsError("permission-denied", "contractor only");
    }
    if (contract.status === "payment_confirmed") {
      throw new HttpsError("failed-precondition", "already paid");
    }

    const paymentDays = contract.paymentDays || 60;
    const workCompletedAt = Timestamp.now();
    const deadlineDate = workCompletedAt.toDate();
    deadlineDate.setDate(deadlineDate.getDate() + paymentDays);

    await ref.update({
      status: "work_completed",
      workCompletedAt,
      paymentDeadline: Timestamp.fromDate(deadlineDate),
      completionNote: completionNote || "",
      completedBy: req.auth.uid,
    });

    return {
      success: true,
      paymentDeadline: deadlineDate.toISOString(),
      paymentDays,
    };
  }
);

exports.confirmPayment = onCall(
  { region: "asia-northeast1", enforceAppCheck: true },
  async (req) => {
    const { contractId } = req.data || {};
    if (!contractId) throw new HttpsError("invalid-argument", "contractId required");
    if (!req.auth?.uid) throw new HttpsError("unauthenticated", "login required");

    const ref = db.collection("contracts").doc(contractId);
    const doc = await ref.get();
    if (!doc.exists) throw new HttpsError("not-found", "contract not found");

    const contract = doc.data();
    if (contract.ordererId !== req.auth.uid) {
      throw new HttpsError("permission-denied", "orderer only");
    }

    await ref.update({
      status: "payment_confirmed",
      paidAt: Timestamp.now(),
      paidBy: req.auth.uid,
      lawCompliance: {
        ...(contract.lawCompliance || {}),
        freelanceLaw_article5_paid: true,
      },
    });

    if (contract.contractorFcmToken) {
      try {
        await getMessaging().send({
          token: contract.contractorFcmToken,
          notification: {
            title: "【Zaibase】報酬が支払われました",
            body: `¥${(contract.rewardAmount || 0).toLocaleString()} の支払が確認されました。`,
          },
          data: { contractId, type: "PAYMENT_CONFIRMED" },
        });
      } catch (_) {}
    }

    return { success: true, paidAt: new Date().toISOString() };
  }
);
