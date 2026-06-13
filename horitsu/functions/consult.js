/**
 * Zaibase法律相談 — 相談ワークフロー自動化
 *
 * submitHoritsuConsult       — 相談投稿（プラン別上限チェック）
 * getMyHoritsuConsults       — 自分の相談履歴取得
 * adminReplyHoritsuConsult   — 管理者/専門家が回答
 * adminListPendingConsults   — 未回答一覧（管理者専用）
 * markHoritsuConsultRead     — 既読マーク
 *
 * プラン別上限:
 *   free     — 通算1回（LifetimeLimit）
 *   standard — 月2回
 *   pro      — 月無制限
 *
 * Firestore:
 *   consultations/{id}
 *     uid, plan, category, title, question
 *     status: pending / replied / closed
 *     createdAt, repliedAt, reply, nextSteps
 *     isReadByUser
 */
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { getFirestore, Timestamp, FieldValue } = require("firebase-admin/firestore");

const db = getFirestore();

const CATEGORIES = [
  "未払い・遅延支払い（フリーランス保護法）",
  "下請代金・一括下請負",
  "長時間労働・過重労働",
  "労災・業務上疾病",
  "ハラスメント",
  "建設業法・許認可",
  "主任技術者・管理技術者（要件・専任・兼任）",
  "契約書・書面交付",
  "その他",
];

// ── 月次カウンタのキー（YYYY-MM） ──────────────────────────────────
function ymKey() {
  return new Date().toISOString().slice(0, 7);
}

// ── 相談上限チェック ────────────────────────────────────────────────
async function checkConsultLimit(uid, plan) {
  const profileRef = db.collection("horitsuProfiles").doc(uid);
  const snap = await profileRef.get();
  const profile = snap.exists ? snap.data() : {};
  const ym = ymKey();

  if (plan === "pro") return; // 無制限

  if (plan === "standard") {
    const monthlyCount = (profile.consultMonthly || {})[ym] || 0;
    if (monthlyCount >= 2)
      throw new HttpsError("resource-exhausted", "スタンダードプランは月2回までです。プロプランへのアップグレードをご検討ください。");
    return;
  }

  // free: 通算1回
  const total = profile.consultTotal || 0;
  if (total >= 1)
    throw new HttpsError("resource-exhausted", "無料プランの相談は1回限りです。スタンダードまたはプロプランへご登録ください。");
}

// ── カウンタ更新 ────────────────────────────────────────────────────
async function incrementConsultCount(uid, plan) {
  const profileRef = db.collection("horitsuProfiles").doc(uid);
  const ym = ymKey();
  const updates = {
    consultTotal: FieldValue.increment(1),
    updatedAt: FieldValue.serverTimestamp(),
  };
  if (plan !== "free") {
    updates[`consultMonthly.${ym}`] = FieldValue.increment(1);
  }
  await profileRef.set(updates, { merge: true });
}

// ── 1. 相談投稿 ────────────────────────────────────────────────────
exports.submitHoritsuConsult = onCall(
  { region: "asia-northeast1", enforceAppCheck: true },
  async (req) => {
    const uid = req.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "ログインが必要です");

    const { category, title, question } = req.data || {};

    if (!category || !CATEGORIES.includes(category))
      throw new HttpsError("invalid-argument", "有効なカテゴリを選択してください");
    if (!title || String(title).trim().length < 4)
      throw new HttpsError("invalid-argument", "タイトルを4文字以上で入力してください");
    if (!question || String(question).trim().length < 20)
      throw new HttpsError("invalid-argument", "相談内容を20文字以上で入力してください");
    if (String(question).length > 3000)
      throw new HttpsError("invalid-argument", "相談内容は3,000文字以内です");

    // プラン確認
    const profileSnap = await db.collection("horitsuProfiles").doc(uid).get();
    const profile     = profileSnap.exists ? profileSnap.data() : {};
    const plan        = (profile.status === "active" && profile.plan) ? profile.plan : "free";

    await checkConsultLimit(uid, plan);

    const ref = await db.collection("consultations").add({
      uid,
      plan,
      category,
      title:    String(title).trim().slice(0, 100),
      question: String(question).trim().slice(0, 3000),
      status:   "pending",
      isReadByUser: true,
      createdAt: FieldValue.serverTimestamp(),
      repliedAt: null,
      reply:     null,
      nextSteps: null,
    });

    await incrementConsultCount(uid, plan);

    // 自動受付メッセージ（Firestore に保存 = フロントが表示）
    const sla = plan === "pro" ? "翌営業日" : plan === "standard" ? "3営業日以内" : "3〜5営業日";
    await ref.update({ autoAck: `ご相談ありがとうございます。${sla}を目安に専門家より回答いたします。` });

    return { ok: true, consultId: ref.id, sla };
  }
);

// ── 2. 相談履歴取得 ────────────────────────────────────────────────
exports.getMyHoritsuConsults = onCall(
  { region: "asia-northeast1", enforceAppCheck: true },
  async (req) => {
    const uid = req.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "ログインが必要です");

    const snap = await db.collection("consultations")
      .where("uid", "==", uid)
      .orderBy("createdAt", "desc")
      .limit(50)
      .get();

    const consults = snap.docs.map((d) => {
      const data = d.data();
      return {
        id:         d.id,
        category:   data.category,
        title:      data.title,
        question:   data.question,
        status:     data.status,
        autoAck:    data.autoAck || null,
        reply:      data.reply   || null,
        nextSteps:  data.nextSteps || null,
        isReadByUser: data.isReadByUser,
        plan:       data.plan,
        createdAt:  data.createdAt?.toMillis() || null,
        repliedAt:  data.repliedAt?.toMillis() || null,
      };
    });

    return { ok: true, consults };
  }
);

// ── 3. 管理者が回答 ────────────────────────────────────────────────
exports.adminReplyHoritsuConsult = onCall(
  { region: "asia-northeast1", enforceAppCheck: true },
  async (req) => {
    const uid = req.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "ログインが必要です");

    // 管理者チェック
    const adminSnap = await db.collection("admins").doc(uid).get();
    if (!adminSnap.exists) throw new HttpsError("permission-denied", "管理者権限が必要です");

    const { consultId, reply, nextSteps, status = "replied" } = req.data || {};
    if (!consultId) throw new HttpsError("invalid-argument", "consultId は必須です");
    if (!reply || String(reply).trim().length < 10)
      throw new HttpsError("invalid-argument", "回答を10文字以上で入力してください");
    if (!["replied", "closed"].includes(status))
      throw new HttpsError("invalid-argument", "status は replied または closed のみ");

    const consultRef = db.collection("consultations").doc(consultId);
    const consultSnap = await consultRef.get();
    if (!consultSnap.exists) throw new HttpsError("not-found", "相談が見つかりません");

    await consultRef.update({
      reply:      String(reply).trim().slice(0, 5000),
      nextSteps:  nextSteps ? String(nextSteps).trim().slice(0, 500) : null,
      status,
      repliedAt:  FieldValue.serverTimestamp(),
      repliedBy:  uid,
      isReadByUser: false,
    });

    // 収益ログ（回答数で品質KPI追跡）
    await db.collection("horitsuRevenueLogs").add({
      event:    "consult_replied",
      consultId,
      repliedBy: uid,
      createdAt: FieldValue.serverTimestamp(),
      ym: ymKey(),
    });

    return { ok: true };
  }
);

// ── 4. 未回答一覧（管理者専用） ────────────────────────────────────
exports.adminListPendingConsults = onCall(
  { region: "asia-northeast1", enforceAppCheck: true },
  async (req) => {
    const uid = req.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "ログインが必要です");

    const adminSnap = await db.collection("admins").doc(uid).get();
    if (!adminSnap.exists) throw new HttpsError("permission-denied", "管理者権限が必要です");

    const snap = await db.collection("consultations")
      .where("status", "==", "pending")
      .orderBy("createdAt", "asc")
      .limit(100)
      .get();

    const consults = snap.docs.map((d) => {
      const data = d.data();
      return {
        id:        d.id,
        uid:       data.uid,
        category:  data.category,
        title:     data.title,
        question:  data.question,
        plan:      data.plan,
        createdAt: data.createdAt?.toMillis() || null,
      };
    });

    return { ok: true, consults, count: consults.length };
  }
);

// ── 5. 既読マーク ──────────────────────────────────────────────────
exports.markHoritsuConsultRead = onCall(
  { region: "asia-northeast1", enforceAppCheck: true },
  async (req) => {
    const uid = req.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "ログインが必要です");

    const { consultId } = req.data || {};
    if (!consultId) throw new HttpsError("invalid-argument", "consultId は必須です");

    const ref = db.collection("consultations").doc(consultId);
    const snap = await ref.get();
    if (!snap.exists || snap.data().uid !== uid)
      throw new HttpsError("not-found", "相談が見つかりません");

    await ref.update({ isReadByUser: true });
    return { ok: true };
  }
);
