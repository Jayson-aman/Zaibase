/**
 * Zaibase 支払期日アラート
 * ─────────────────────────────────────────────────────────────
 * フリーランス保護法 第5条：作業完了確認日から60日以内支払義務
 *
 * 通知タイミング：
 *   D-7  : 発注者に「7日後が支払期日です」
 *   D-0  : 発注者に「本日が支払期日です」
 *   D+1  : 職人に「支払が遅延しています」 + 発注者に最終警告
 *   D+7  : 管理者アラート + フリーランス保護法申告サポート案内
 *   D+30 : アカウント停止警告
 *
 * デプロイ：
 *   firebase deploy --only functions:paymentAlertScheduler
 *
 * Cloud Scheduler 設定（firebase.json または GCP コンソール）：
 *   schedule: "every 24 hours"  または  "0 9 * * *"（毎朝9時）
 */

const { onSchedule } = require("firebase-functions/v2/scheduler");
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { getFirestore, Timestamp } = require("firebase-admin/firestore");
const { getMessaging } = require("firebase-admin/messaging");
const { initializeApp } = require("firebase-admin/app");

initializeApp();
const db = getFirestore();

// ── 定数 ──────────────────────────────────────────────────────
const ALERT_DAYS = {
  WARN_7:   -7,   // 期日7日前
  DUE:       0,   // 期日当日
  LATE_1:    1,   // 1日超過
  LATE_7:    7,   // 7日超過（管理者エスカレーション）
  LATE_30:  30,   // 30日超過（アカウント停止警告）
};

// ── メイン Scheduler ───────────────────────────────────────────
exports.paymentAlertScheduler = onSchedule(
  { schedule: "0 9 * * *", timeZone: "Asia/Tokyo", region: "asia-northeast1" },
  async () => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    // 未払いの契約を全件取得（status が active または overdue）
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

      // Firestoreにアラート記録
      const alertRef = db.collection("paymentAlerts").doc();
      batch.set(alertRef, {
        contractId:   doc.id,
        clientId:     contract.clientId,
        workerId:     contract.workerId,
        alertType:    alert.type,
        diffDays,
        deadline:     contract.paymentDeadline,
        rewardAmount: contract.rewardAmount,
        createdAt:    Timestamp.now(),
        notified:     false,
      });

      // statusを更新
      if (diffDays >= ALERT_DAYS.LATE_1 && contract.status !== "payment_overdue") {
        batch.update(doc.ref, {
          status:         "payment_overdue",
          overdueSince:   Timestamp.now(),
          overdueDays:    diffDays,
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

    // Push通知・メール送信
    await Promise.allSettled(notifications.map(n => sendNotifications(n)));

    console.log(`処理完了: ${notifications.length}件のアラートを処理`);
  }
);

// ── アラート分類 ───────────────────────────────────────────────
function classifyAlert(diffDays) {
  if (diffDays === ALERT_DAYS.WARN_7)  return { type: "WARN_7",  level: "warning" };
  if (diffDays === ALERT_DAYS.DUE)     return { type: "DUE",     level: "urgent"  };
  if (diffDays === ALERT_DAYS.LATE_1)  return { type: "LATE_1",  level: "danger"  };
  if (diffDays === ALERT_DAYS.LATE_7)  return { type: "LATE_7",  level: "critical"};
  if (diffDays === ALERT_DAYS.LATE_30) return { type: "LATE_30", level: "suspend" };
  return null;
}

// ── 通知送信 ───────────────────────────────────────────────────
async function sendNotifications({ contractId, contract, alert, diffDays }) {
  const msgs = buildMessages(contractId, contract, alert, diffDays);

  // FCM Push通知
  const fcmTasks = msgs.map(async ({ token, title, body, data }) => {
    if (!token) return;
    try {
      await getMessaging().send({ token, notification: { title, body }, data });
    } catch (e) {
      console.error(`FCM送信失敗 ${contractId}:`, e.message);
    }
  });

  // Firestore にメール送信キューを追加（Firebase Extensions: Trigger Email）
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

// ── メッセージ内容定義 ─────────────────────────────────────────
function buildMessages(contractId, c, alert, diffDays) {
  const url = `https://zaibase.jp/contracts/${contractId}`;
  const amount = `¥${(c.rewardAmount ?? 0).toLocaleString()}`;
  const msgs = [];

  switch (alert.type) {

    case "WARN_7":
      msgs.push({
        token:   c.clientFcmToken,
        email:   c.clientEmail,
        title:   "【Zaibase】支払期日まで7日です",
        body:    `${c.workerName}さんへの報酬${amount}の支払期日が7日後です。`,
        subject: "【Zaibase】支払期日まであと7日のお知らせ",
        html:    emailHtml("支払期日が近づいています",
          `<p>${c.workerName}さんへの報酬 <strong>${amount}</strong> の支払期日まで<strong>7日</strong>となりました。</p>
           <p>フリーランス保護法により、作業完了確認日から60日以内の支払が義務付けられています。</p>
           <p><a href="${url}">契約詳細を確認する</a></p>`),
        data: { contractId, type: "WARN_7" },
      });
      break;

    case "DUE":
      msgs.push({
        token:   c.clientFcmToken,
        email:   c.clientEmail,
        title:   "【Zaibase】本日が支払期日です",
        body:    `${c.workerName}さんへの報酬${amount}の支払期日は本日です。`,
        subject: "【Zaibase】本日が支払期日です",
        html:    emailHtml("本日が支払期日です",
          `<p style="color:#d32f2f;font-weight:bold;">本日が支払期日です。</p>
           <p>${c.workerName}さんへの報酬 <strong>${amount}</strong> を本日中にお支払いください。</p>
           <p>本日中に支払が確認されない場合、翌日より遅延として記録されます。</p>
           <p><a href="${url}">支払いを完了する</a></p>`),
        data: { contractId, type: "DUE" },
      });
      break;

    case "LATE_1":
      // 発注者への最終警告
      msgs.push({
        token:   c.clientFcmToken,
        email:   c.clientEmail,
        title:   "【Zaibase】支払が遅延しています",
        body:    `${c.workerName}さんへの報酬${amount}が未払いです。早急にお支払いください。`,
        subject: "【Zaibase】支払遅延のお知らせ（フリーランス保護法違反のリスク）",
        html:    emailHtml("支払遅延が発生しています",
          `<p style="color:#d32f2f;font-weight:bold;">支払期日を1日超過しました。</p>
           <p>フリーランス保護法第5条により、期日を超過した支払は法令違反となります。</p>
           <p>このまま支払が行われない場合、受注者（職人）は行政機関への申告が可能です。</p>
           <p><a href="${url}" style="background:#d32f2f;color:#fff;padding:8px 16px;border-radius:4px;text-decoration:none;">今すぐ支払う</a></p>`),
        data: { contractId, type: "LATE_1" },
      });
      // 職人への通知
      msgs.push({
        token:   c.workerFcmToken,
        email:   c.workerEmail,
        title:   "【Zaibase】報酬が未払いです",
        body:    `${c.clientName}からの報酬${amount}が支払期日を超過しています。`,
        subject: "【Zaibase】報酬未払いのお知らせ・対応サポートのご案内",
        html:    emailHtml("報酬が未払いです",
          `<p>報酬 <strong>${amount}</strong> の支払期日を超過しています。</p>
           <p>Zaibaseでは以下のサポートを提供しています：</p>
           <ul>
             <li>支払督促の書面テンプレート提供</li>
             <li>行政（厚生労働省）への申告サポート</li>
             <li>建設業ADRへの紹介</li>
           </ul>
           <p><a href="${url}">サポートを受ける</a></p>`),
        data: { contractId, type: "LATE_1_WORKER" },
      });
      break;

    case "LATE_7":
      // 管理者エスカレーション
      msgs.push({
        email:   "admin@zaibase.jp",
        subject: `【管理者】支払7日超過 ${contractId} ¥${c.rewardAmount?.toLocaleString()}`,
        html:    emailHtml("管理者エスカレーション",
          `<p>契約ID: ${contractId}</p>
           <p>発注者: ${c.clientName} / 受注者: ${c.workerName}</p>
           <p>金額: ${amount} / 超過日数: ${diffDays}日</p>
           <p>対応が必要です。アカウント審査を実施してください。</p>`),
        data: { contractId, type: "LATE_7_ADMIN" },
      });
      break;

    case "LATE_30":
      msgs.push({
        token:   c.clientFcmToken,
        email:   c.clientEmail,
        title:   "【Zaibase】アカウント停止警告",
        body:    `支払遅延が30日を超えました。対応がない場合アカウントを停止します。`,
        subject: "【Zaibase】アカウント停止警告（支払遅延30日超過）",
        html:    emailHtml("アカウント停止警告",
          `<p style="color:#d32f2f;font-weight:bold;">支払遅延が30日を超えました。</p>
           <p>7日以内に支払が確認されない場合、Zaibaseのアカウントを停止します。</p>
           <p><a href="${url}">今すぐ支払う</a></p>`),
        data: { contractId, type: "LATE_30" },
      });
      break;
  }

  return msgs;
}

// ── メールHTMLテンプレート ─────────────────────────────────────
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
          Zaibase株式会社 | 本メールはシステムより自動送信されています<br>
          準拠法令：特定受託事業者に係る取引の適正化等に関する法律 第5条
        </p>
      </div>
    </div>`;
}

// ── 手動支払確認 API（アプリから呼び出し） ─────────────────────
exports.confirmPayment = onCall(
  { region: "asia-northeast1" },
  async (req) => {
    const { contractId } = req.data;
    if (!contractId) throw new HttpsError("invalid-argument", "contractId required");

    const ref = db.collection("contracts").doc(contractId);
    const doc = await ref.get();
    if (!doc.exists) throw new HttpsError("not-found", "contract not found");

    const contract = doc.data();

    // 発注者本人確認
    if (contract.clientId !== req.auth?.uid) {
      throw new HttpsError("permission-denied", "not authorized");
    }

    await ref.update({
      status:       "payment_confirmed",
      paidAt:       Timestamp.now(),
      paidBy:       req.auth.uid,
    });

    // 職人に支払完了通知
    if (contract.workerFcmToken) {
      await getMessaging().send({
        token: contract.workerFcmToken,
        notification: {
          title: "【Zaibase】報酬が支払われました",
          body:  `¥${contract.rewardAmount?.toLocaleString()} の支払が確認されました。`,
        },
        data: { contractId, type: "PAYMENT_CONFIRMED" },
      });
    }

    return { success: true, paidAt: new Date().toISOString() };
  }
);
