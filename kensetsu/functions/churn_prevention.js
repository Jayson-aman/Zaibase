/**
 * Zaibase 解約防止 Cloud Functions（4段階）
 *
 * 1. getChurnStats          — 解約モーダル用実績 API
 * 2. churnScheduler         — 更新30日前・7日前（毎日10時 JST）
 * 3. cancelSubscription     — 解約申請（理由記録・ステータス更新）
 * 4. onPlanCancelled        — 解約確定 Trigger → 感謝メール
 *
 * データ: craftsmanProfiles/{uid}
 *   subscriptionPlan, subscriptionStatus, subscriptionRenewalAt,
 *   email, fcmToken, displayName, gpsRecordDays, createdAt
 *
 * 契約: contracts.contractorId（旧 workerId フォールバック）
 */
const { onSchedule } = require("firebase-functions/v2/scheduler");
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { onDocumentUpdated } = require("firebase-functions/v2/firestore");
const { getFirestore, Timestamp } = require("firebase-admin/firestore");
const { getMessaging } = require("firebase-admin/messaging");

const db = getFirestore();

const STARTER_PRICE = 1980;
const PRO_PRICE = 5480;
const TEAM_PRICE = 14800;
const PLANS = { starter: STARTER_PRICE, pro: PRO_PRICE, team: TEAM_PRICE };
const ANNUAL_PRICES = { starter: 19800, pro: 54800, team: 148000 };
const FREE_SURCHARGE = 0.02;        // フリー: +2%手数料
const STARTER_SURCHARGE = 0.01;     // スターター: +1%手数料
const TEAM_CONTRACT_DISCOUNT = 0.015; // チーム: 請負手数料▲1.5%

const CONTRACT_STATUSES = ["payment_confirmed", "active", "work_completed", "pending_approval"];

function startOfDay(d) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}

function startOfMonth(d) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

function fmtNum(v) {
  if (!v) return "0";
  if (v >= 1e8) return `${(v / 1e8).toFixed(1)}億`;
  if (v >= 1e4) return `${Math.round(v / 1e4)}万`;
  return v.toLocaleString();
}

function getContractorId(c) {
  return c.contractorId || c.workerId;
}

async function getGpsLogDays(uid, profile) {
  try {
    const gpsSnap = await db.collection("gpsLogs").where("userId", "==", uid).count().get();
    const n = gpsSnap.data().count;
    if (n > 0) return n;
  } catch (_) {}
  return profile.gpsRecordDays || 0;
}

async function calcStats(uid) {
  const now = new Date();
  const monthStart = startOfMonth(now);

  const allSnap = await db.collection("contracts").get();
  const allDocs = allSnap.docs.filter((d) => {
    const c = d.data();
    return getContractorId(c) === uid && CONTRACT_STATUSES.includes(c.status);
  });

  const monthDocs = allDocs.filter((d) => {
    const t = d.data().createdAt?.toDate?.();
    return t && t >= monthStart;
  });

  const annualRevenue = allDocs.reduce((s, d) => s + (d.data().rewardAmount ?? 0), 0);
  const monthlyRevenue = monthDocs.reduce((s, d) => s + (d.data().rewardAmount ?? 0), 0);
  const requestDeals = monthDocs.filter((d) => {
    const c = d.data();
    return c.workType === "contract" || (c.rewardAmount ?? 0) >= 500000;
  }).length;

  const profileSnap = await db.collection("craftsmanProfiles").doc(uid).get();
  const profile = profileSnap.data() || {};

  let earlyCollected = 0;
  try {
    const alertSnap = await db.collection("paymentAlerts")
      .where("contractorId", "==", uid)
      .where("alertType", "==", "WARN_7")
      .get();
    earlyCollected = alertSnap.size;
  } catch (_) {}

  const joinedAt = profile.createdAt?.toDate?.() ?? profile.joinedAt?.toDate?.() ?? new Date();
  const monthsUsed = Math.max(1, Math.round((now - joinedAt) / (1000 * 60 * 60 * 24 * 30)));
  const plan = profile.subscriptionPlan || profile.plan || "base";
  const gpsLogDays = await getGpsLogDays(uid, profile);

  const contractRevenueMonth = monthDocs
    .filter((d) => (d.data().rewardAmount ?? 0) >= 500000)
    .reduce((s, d) => s + (d.data().rewardAmount ?? 0), 0);
  const billingPlan = ["pro", "max"].includes(plan) ? plan : "pro";
  const feeSaved = Math.round(monthlyRevenue * FREE_SURCHARGE)
    + (billingPlan === "max" ? Math.round(contractRevenueMonth * MAX_CONTRACT_DISCOUNT) : 0);

  return {
    totalDeals: allDocs.length,
    annualRevenue,
    avgUnit: allDocs.length > 0 ? Math.round(annualRevenue / allDocs.length) : 0,
    monthlyDeals: monthDocs.length,
    monthlyRevenue,
    requestDeals,
    feeSaved,
    gpsLogDays,
    earlyCollected,
    monthsUsed,
    plan: billingPlan,
    profilePlan: plan,
    monthlyPrice: PLANS[billingPlan] || 0,
    netBenefitMonth: feeSaved - (PLANS[billingPlan] || 0),
  };
}

async function markChurnAlertSent(uid, stage, renewalKey) {
  await db.collection("churnAlerts").doc(`${uid}_${stage}_${renewalKey}`).set({
    uid, stage, renewalKey, sentAt: Timestamp.now(),
  });
}

async function wasChurnAlertSent(uid, stage, renewalKey) {
  return (await db.collection("churnAlerts").doc(`${uid}_${stage}_${renewalKey}`).get()).exists;
}

function renewalKeyFromDate(d) {
  return d.toISOString().slice(0, 10);
}

function profilePlan(profile) {
  return profile.subscriptionPlan || profile.plan || "base";
}

function profileRenewal(profile) {
  return profile.subscriptionRenewalAt?.toDate?.() ?? profile.planRenewalDate?.toDate?.() ?? null;
}

// ── ① 解約モーダル用実績 API ─────────────────────────────────
async function getChurnStatsHandler(req) {
  const uid = req.auth?.uid;
  if (!uid) throw new HttpsError("unauthenticated", "login required");

  const profileSnap = await db.collection("craftsmanProfiles").doc(uid).get();
  const profile = profileSnap.data() || {};
  const stats = await calcStats(uid);
  const plan = profilePlan(profile);
  const preview = !["pro", "max"].includes(plan);
  const renewal = profileRenewal(profile);

  return {
    monthlyDeals: stats.monthlyDeals,
    monthlyRevenue: stats.monthlyRevenue,
    feeSaved: stats.feeSaved,
    earlyCollected: stats.earlyCollected,
    totalDeals: stats.totalDeals,
    annualRevenue: stats.annualRevenue,
    avgUnit: stats.avgUnit,
    gpsLogDays: stats.gpsLogDays,
    monthsUsed: stats.monthsUsed,
    plan,
    preview,
    renewalDate: renewal ? renewal.toLocaleDateString("ja-JP") : "未設定",
    freeDowngradeFeeLoss: Math.round(stats.monthlyRevenue * FREE_SURCHARGE),
    netBenefitMonth: stats.netBenefitMonth,
    displayName: profile.displayName || "ご利用者",
    formatted: {
      monthlyRevenue: `¥${fmtNum(stats.monthlyRevenue)}`,
      feeSaved: `¥${fmtNum(stats.feeSaved)}`,
    },
  };
}

exports.getChurnStats = onCall({ region: "asia-northeast1", enforceAppCheck: true }, getChurnStatsHandler);
exports.getChurnInterstitialStats = onCall({ region: "asia-northeast1", enforceAppCheck: true }, async (req) => {
  const d = await getChurnStatsHandler(req);
  return {
    ...d,
    jobsMonth: d.monthlyDeals,
    revenueMonth: d.monthlyRevenue,
    feeSavingsMonth: d.feeSaved,
    gpsDays: d.gpsLogDays,
  };
});

// ── 30日前通知 ───────────────────────────────────────────────
async function send30DayNotice(uid, profile, stats) {
  const plan = profilePlan(profile);
  const planLabel = plan === "max" ? "Max" : "Pro";
  const planPrice = PLANS[plan] ?? PRO_PRICE;
  const yearPrice = ANNUAL_PRICES[plan] ?? planPrice * 10;
  const saving = planPrice * 12 - yearPrice;
  const name = profile.displayName || "ご利用者";
  const token = profile.fcmToken || "";

  if (token) {
    await getMessaging().send({
      token,
      notification: {
        title: "プラン更新まで30日。今年の実績をまとめました",
        body: `受注${stats.totalDeals}件 / 総額¥${fmtNum(stats.annualRevenue)}。年払いで2ヶ月分無料になります。`,
      },
      data: { type: "CHURN_30", uid },
    }).catch((e) => console.error("FCM失敗:", e.message));
  }

  await db.collection("mail").add({
    to: profile.email || "",
    message: {
      subject: `【Zaibase ${planLabel}】更新まで30日 — ${new Date().getFullYear()}年の実績レポート`,
      html: `
<div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;">
  <div style="background:#1a3c5e;padding:16px 24px;border-radius:8px 8px 0 0;">
    <span style="color:#fff;font-size:20px;font-weight:bold;">Zaibase</span>
  </div>
  <div style="border:1px solid #e0e0e0;border-top:none;padding:24px;border-radius:0 0 8px 8px;">
    <p style="color:#1a3c5e;font-size:18px;font-weight:bold;margin-top:0;">${name} 様、<br>今年も Zaibase をご利用いただきありがとうございます。</p>
    <div style="background:#f5f7fa;border-radius:8px;padding:16px;margin:16px 0;">
      <p style="font-weight:bold;margin:0 0 12px;color:#1a3c5e;">実績サマリー</p>
      <table style="width:100%;font-size:14px;border-collapse:collapse;">
        <tr><td style="padding:6px 0;color:#666;">獲得案件数</td><td style="text-align:right;font-weight:bold;">${stats.totalDeals}件</td></tr>
        <tr><td style="padding:6px 0;color:#666;">受注総額</td><td style="text-align:right;font-weight:bold;">¥${fmtNum(stats.annualRevenue)}</td></tr>
        <tr><td style="padding:6px 0;color:#666;">平均契約単価</td><td style="text-align:right;font-weight:bold;">¥${fmtNum(stats.avgUnit)}</td></tr>
        <tr><td style="padding:6px 0;color:#666;">GPS出退勤記録</td><td style="text-align:right;font-weight:bold;">${stats.gpsLogDays}日分</td></tr>
        <tr><td style="padding:6px 0;color:#666;">支払アラート（早期回収）</td><td style="text-align:right;font-weight:bold;">${stats.earlyCollected}回</td></tr>
      </table>
    </div>
    <div style="background:#e8f4ff;border-radius:8px;padding:16px;margin:16px 0;border-left:4px solid #1a73e8;">
      <p style="font-weight:bold;margin:0 0 8px;color:#1a3c5e;">年払いで2ヶ月分無料</p>
      <table style="width:100%;font-size:14px;">
        <tr><td style="color:#666;">月払い継続</td><td style="text-align:right;">¥${planPrice.toLocaleString()} × 12 = ¥${(planPrice * 12).toLocaleString()}</td></tr>
        <tr><td style="color:#1a73e8;font-weight:bold;">年払いに切り替え</td><td style="text-align:right;color:#1a73e8;font-weight:bold;">¥${yearPrice.toLocaleString()}（¥${saving.toLocaleString()} お得）</td></tr>
      </table>
      <a href="https://zaibase.jp/settings/billing?utm_source=churn30" style="display:inline-block;margin-top:12px;background:#1a3c5e;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-size:14px;">年払いに切り替える</a>
    </div>
    <p style="color:#888;font-size:12px;">Zaibase株式会社</p>
  </div>
</div>`,
    },
    createdAt: Timestamp.now(),
    type: "CHURN_30",
    uid,
  });
}

// ── 7日前通知 ────────────────────────────────────────────────
async function send7DayNotice(uid, profile, stats) {
  const plan = profilePlan(profile);
  const planLabel = plan === "max" ? "Max" : "Pro";
  const planPrice = PLANS[plan] ?? PRO_PRICE;
  const feeLoss = Math.round(stats.monthlyRevenue * FREE_SURCHARGE);
  const netSaving = feeLoss - planPrice;
  const name = profile.displayName || "ご利用者";
  const token = profile.fcmToken || "";

  if (token) {
    await getMessaging().send({
      token,
      notification: {
        title: "更新まで7日。解約すると来月から手数料が上がります",
        body: `先月の節約額¥${fmtNum(feeLoss)} vs 月額¥${planPrice.toLocaleString()}。継続の方が¥${fmtNum(Math.abs(netSaving))}お得です。`,
      },
      data: { type: "CHURN_7", uid },
    }).catch((e) => console.error("FCM失敗:", e.message));
  }

  const features = [
    `請負工事マッチング（先月${stats.requestDeals}件受注）`,
    "優先表示（検索上位に表示中）",
    "支払アラート（60日以内回収を自動管理）",
    `GPS出退勤記録（${stats.gpsLogDays}日分蓄積）`,
    plan === "max" ? "手数料▲1%割引（継続中）" : null,
  ].filter(Boolean);

  await db.collection("mail").add({
    to: profile.email || "",
    message: {
      subject: `【重要】Zaibase ${planLabel} の更新は7日後です`,
      html: `
<div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;">
  <div style="background:#1a3c5e;padding:16px 24px;border-radius:8px 8px 0 0;">
    <span style="color:#fff;font-size:20px;font-weight:bold;">Zaibase</span>
  </div>
  <div style="border:1px solid #e0e0e0;border-top:none;padding:24px;border-radius:0 0 8px 8px;">
    <p style="color:#1a3c5e;font-size:17px;font-weight:bold;margin-top:0;">${name} 様<br>${planLabel}プランの更新まであと<span style="color:#d32f2f;">7日</span>です</p>
    <div style="background:#f5f7fa;border-radius:8px;padding:16px;margin:16px 0;">
      <p style="font-weight:bold;margin:0 0 10px;color:#1a3c5e;">現在ご利用中の機能</p>
      ${features.map((f) => `<div style="padding:4px 0;font-size:13px;"><span style="color:#1d9e75;font-weight:bold;">✓</span> ${f}</div>`).join("")}
    </div>
    <div style="background:#fff3e0;border-radius:8px;padding:16px;margin:16px 0;border-left:4px solid #e65100;">
      <p style="font-weight:bold;margin:0 0 10px;color:#e65100;">解約した場合の変化</p>
      ${["請負工事マッチング → 利用不可", "案件応募 → 月5件に制限", "手数料 → +2%（フリープラン）", "GPS記録・CCUS連携 → 停止"]
        .map((f) => `<div style="padding:4px 0;font-size:13px;"><span style="color:#d32f2f;">✗</span> ${f}</div>`).join("")}
      <div style="margin-top:12px;padding:10px;background:#fff;border-radius:6px;font-size:13px;">
        <div style="display:flex;justify-content:space-between;padding:4px 0;"><span>先月の受注総額</span><strong>¥${fmtNum(stats.monthlyRevenue)}</strong></div>
        <div style="display:flex;justify-content:space-between;padding:4px 0;"><span style="color:#d32f2f;">フリープランで増える手数料</span><strong style="color:#d32f2f;">+¥${fmtNum(feeLoss)}</strong></div>
        <div style="display:flex;justify-content:space-between;padding:4px 0;border-top:1px solid #eee;margin-top:4px;"><span style="font-weight:bold;">プラン継続の実質メリット</span><strong style="color:#1d9e75;">+¥${fmtNum(Math.abs(netSaving))}/月</strong></div>
      </div>
    </div>
    <a href="https://zaibase.jp/settings/billing?utm_source=churn7" style="display:block;text-align:center;background:#1a3c5e;color:#fff;padding:14px;border-radius:6px;text-decoration:none;font-weight:bold;">プランを継続する</a>
    <p style="color:#888;font-size:12px;margin-top:16px;">Zaibase株式会社</p>
  </div>
</div>`,
    },
    createdAt: Timestamp.now(),
    type: "CHURN_7",
    uid,
  });
}

// ── 解約確定メール ───────────────────────────────────────────
async function sendCancellationEmail(uid, profile) {
  const stats = await calcStats(uid);
  const plan = profile.previousPlan || profilePlan(profile);
  const planLabel = plan === "max" ? "Max" : "Pro";
  const name = profile.displayName || "ご利用者";

  await db.collection("mail").add({
    to: profile.email || "",
    message: {
      subject: `【Zaibase】${planLabel}プラン解約のご確認`,
      html: `
<div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;">
  <div style="background:#1a3c5e;padding:16px 24px;border-radius:8px 8px 0 0;">
    <span style="color:#fff;font-size:20px;font-weight:bold;">Zaibase</span>
  </div>
  <div style="border:1px solid #e0e0e0;border-top:none;padding:24px;border-radius:0 0 8px 8px;">
    <p style="color:#1a3c5e;font-size:17px;font-weight:bold;margin-top:0;">${name} 様<br>${planLabel}プランの解約が完了しました</p>
    <p style="color:#555;font-size:14px;">${stats.monthsUsed}ヶ月間ご利用いただきありがとうございました。<br>この間に ${stats.totalDeals}件の案件を獲得され、総額¥${fmtNum(stats.annualRevenue)}の受注をされました。</p>
    <div style="background:#f5f7fa;border-radius:8px;padding:16px;margin:16px 0;">
      <p style="font-weight:bold;margin:0 0 10px;color:#1a3c5e;">フリープランでも使えること</p>
      ${["案件の閲覧（月5件まで応募）", "これまでの契約書・GPS記録の閲覧", "過去の案件履歴の参照", "Zaibaseへのログイン"]
        .map((f) => `<div style="padding:3px 0;font-size:13px;"><span style="color:#1d9e75;">✓</span> ${f}</div>`).join("")}
    </div>
    <div style="background:#e8f4ff;border-radius:8px;padding:14px;margin:16px 0;">
      <p style="font-weight:bold;margin:0 0 6px;color:#1a3c5e;">GPS記録（${stats.gpsLogDays}日分）とCCUS実績はそのまま保存されています</p>
      <p style="color:#555;font-size:13px;margin:0;">再加入後すぐに続きをご利用いただけます。</p>
    </div>
    <a href="https://zaibase.jp/upgrade?utm_source=cancellation" style="display:block;text-align:center;background:#f5f7fa;color:#1a3c5e;padding:12px;border-radius:6px;text-decoration:none;border:1px solid #ddd;">再加入はこちら（30秒で完了）</a>
    <p style="color:#888;font-size:12px;margin-top:16px;">Zaibase株式会社 · support@zaibase.jp</p>
  </div>
</div>`,
    },
    createdAt: Timestamp.now(),
    type: "CANCELLATION",
    uid,
  });
}

// ── ②③ Scheduler（10時 JST） ───────────────────────────────
async function churnSchedulerHandler() {
  const now = startOfDay(new Date());
  const snap = await db.collection("craftsmanProfiles")
    .where("subscriptionStatus", "==", "active")
    .where("subscriptionPlan", "in", ["starter", "pro", "team"])
    .get();

  let sent30 = 0;
  let sent7 = 0;

  for (const doc of snap.docs) {
    const profile = doc.data();
    const renewal = profileRenewal(profile);
    if (!renewal) continue;

    const daysLeft = Math.round((startOfDay(renewal) - now) / (1000 * 60 * 60 * 24));
    const rKey = renewalKeyFromDate(renewal);
    const uid = doc.id;
    const stats = await calcStats(uid);

    if (daysLeft === 30 && !(await wasChurnAlertSent(uid, "30d", rKey))) {
      await send30DayNotice(uid, profile, stats);
      await markChurnAlertSent(uid, "30d", rKey);
      sent30++;
    }
    if (daysLeft === 7 && !(await wasChurnAlertSent(uid, "7d", rKey))) {
      await send7DayNotice(uid, profile, stats);
      await markChurnAlertSent(uid, "7d", rKey);
      sent7++;
    }
  }

  console.log(`churnScheduler: 30日前=${sent30} / 7日前=${sent7}`);
}

exports.churnScheduler = onSchedule(
  { schedule: "0 10 * * *", timeZone: "Asia/Tokyo", region: "asia-northeast1" },
  churnSchedulerHandler
);
exports.churnPreventionScheduler = exports.churnScheduler;

// ── ④ 解約確定 Trigger ─────────────────────────────────────
exports.onPlanCancelled = onDocumentUpdated(
  { document: "craftsmanProfiles/{uid}", region: "asia-northeast1" },
  async (event) => {
    const before = event.data.before.data() || {};
    const after = event.data.after.data() || {};
    const uid = event.params.uid;

    const beforeStatus = before.subscriptionStatus || before.planStatus;
    const afterStatus = after.subscriptionStatus || after.planStatus;

    if (beforeStatus === "cancelled" || afterStatus !== "cancelled") return;

    await sendCancellationEmail(uid, after);
    console.log(`onPlanCancelled: メール送信 ${uid}`);
  }
);

// ── 手動解約 API ─────────────────────────────────────────────
exports.cancelSubscription = onCall(
  { region: "asia-northeast1", enforceAppCheck: true },
  async (req) => {
    const uid = req.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "login required");

    const profileRef = db.collection("craftsmanProfiles").doc(uid);
    const profileSnap = await profileRef.get();
    if (!profileSnap.exists) throw new HttpsError("not-found", "profile not found");

    const profile = profileSnap.data();
    const plan = profilePlan(profile);
    if (!["pro", "max"].includes(plan)) {
      throw new HttpsError("failed-precondition", "no active paid plan");
    }

    const stats = await calcStats(uid);
    const cancelAt = profile.subscriptionRenewalAt
      || profile.planRenewalDate
      || Timestamp.fromDate(new Date(Date.now() + 30 * 24 * 60 * 60 * 1000));

    await profileRef.update({
      subscriptionStatus: "cancelled",
      subscriptionCancelledAt: Timestamp.now(),
      subscriptionDowngradeAt: cancelAt,
      previousPlan: plan,
      subscriptionCancelReason: req.data?.reason ?? "未回答",
    });

    await db.collection("churnReasons").add({
      uid,
      plan,
      reason: req.data?.reason ?? "未回答",
      reasonDetail: req.data?.detail ?? "",
      monthsUsed: stats.monthsUsed,
      createdAt: Timestamp.now(),
    });

    return {
      success: true,
      cancelAt: cancelAt.toDate ? cancelAt.toDate().toISOString() : new Date(cancelAt).toISOString(),
      message: "解約を受け付けました。データはアカウントに保存されています。",
    };
  }
);

exports.confirmSubscriptionCancel = exports.cancelSubscription;
