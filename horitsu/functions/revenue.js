/**
 * Zaibase法律相談 — 収益管理ダッシュボードAPI
 *
 * getHoritsuRevenue   — 月次MRR・プラン別集計（管理者専用）
 * grantGroupDiscount  — Zaibase建設プロプラン割引承認（管理者専用）
 */
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { getFirestore, Timestamp } = require("firebase-admin/firestore");

const db = getFirestore();

// プラン単価（月次換算）
const PLAN_MRR = { standard: 2980, pro: 7800 };
const GROUP_MRR = { standard: 1980, pro: 6800 };

// ── 収益サマリー ───────────────────────────────────────────────────
exports.getHoritsuRevenue = onCall(
  { region: "asia-northeast1", enforceAppCheck: true },
  async (req) => {
    const uid = req.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "ログインが必要です");

    const adminSnap = await db.collection("admins").doc(uid).get();
    if (!adminSnap.exists) throw new HttpsError("permission-denied", "管理者権限が必要です");

    // アクティブ会員一覧
    const profilesSnap = await db.collection("horitsuProfiles")
      .where("status", "==", "active")
      .get();

    const planCounts = { standard: 0, pro: 0, standard_group: 0, pro_group: 0 };
    let mrr = 0;

    profilesSnap.docs.forEach((d) => {
      const { plan, groupDiscountGranted } = d.data();
      if (plan === "standard" || plan === "pro") {
        const key = groupDiscountGranted ? `${plan}_group` : plan;
        planCounts[key] = (planCounts[key] || 0) + 1;
        mrr += groupDiscountGranted ? (GROUP_MRR[plan] || 0) : (PLAN_MRR[plan] || 0);
      }
    });

    // 過去12か月の収益ログ
    const twelveMonthsAgo = new Date();
    twelveMonthsAgo.setMonth(twelveMonthsAgo.getMonth() - 12);

    const logsSnap = await db.collection("horitsuRevenueLogs")
      .where("createdAt", ">=", Timestamp.fromDate(twelveMonthsAgo))
      .where("event", "in", ["activated", "renewal"])
      .orderBy("createdAt", "asc")
      .get();

    // 月別集計
    const monthly = {};
    logsSnap.docs.forEach((d) => {
      const { ym, amount, event } = d.data();
      if (!ym) return;
      if (!monthly[ym]) monthly[ym] = { revenue: 0, activations: 0, renewals: 0 };
      monthly[ym].revenue += amount || 0;
      if (event === "activated") monthly[ym].activations++;
      if (event === "renewal")   monthly[ym].renewals++;
    });

    // 未回答相談数
    const pendingSnap = await db.collection("consultations")
      .where("status", "==", "pending")
      .get();

    // 当月回答数
    const currentYm = new Date().toISOString().slice(0, 7);
    const repliedSnap = await db.collection("horitsuRevenueLogs")
      .where("event", "==", "consult_replied")
      .where("ym", "==", currentYm)
      .get();

    return {
      ok: true,
      mrr,
      arr: mrr * 12,
      planCounts,
      totalActive: profilesSnap.size,
      pendingConsults: pendingSnap.size,
      repliedThisMonth: repliedSnap.size,
      monthly: Object.entries(monthly)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([ym, v]) => ({ ym, ...v })),
    };
  }
);

// ── グループ割引承認 ───────────────────────────────────────────────
exports.grantGroupDiscount = onCall(
  { region: "asia-northeast1", enforceAppCheck: true },
  async (req) => {
    const uid = req.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "ログインが必要です");

    const adminSnap = await db.collection("admins").doc(uid).get();
    if (!adminSnap.exists) throw new HttpsError("permission-denied", "管理者権限が必要です");

    const { targetUid, grant = true } = req.data || {};
    if (!targetUid) throw new HttpsError("invalid-argument", "targetUid は必須です");

    await db.collection("horitsuProfiles").doc(targetUid).set({
      groupDiscountGranted: !!grant,
      groupDiscountReviewedBy: uid,
      groupDiscountReviewedAt: Timestamp.now(),
    }, { merge: true });

    return { ok: true, granted: !!grant };
  }
);

// ── グループ割引申請一覧（管理者専用） ────────────────────────────
exports.listGroupDiscountApplications = onCall(
  { region: "asia-northeast1", enforceAppCheck: true },
  async (req) => {
    const uid = req.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "ログインが必要です");

    const adminSnap = await db.collection("admins").doc(uid).get();
    if (!adminSnap.exists) throw new HttpsError("permission-denied", "管理者権限が必要です");

    const snap = await db.collection("horitsuProfiles")
      .where("groupDiscountApplied", "==", true)
      .where("groupDiscountGranted", "==", false)
      .limit(50)
      .get();

    const items = snap.docs.map((d) => ({
      uid: d.id,
      kensetsuUid: d.data().groupDiscountKensetsuUid || null,
      appliedAt:   d.data().groupDiscountAppliedAt?.toMillis() || null,
    }));

    return { ok: true, items };
  }
);
