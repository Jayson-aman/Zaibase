/**
 * Zaibase建設 — コンテンツモデレーション
 *
 * checkContentModeration  — 投稿前の禁止ワードチェック（内部利用可）
 * reportContent           — ユーザーによる通報
 * adminListReports        — 通報一覧（管理者専用）
 * adminDeleteContent      — 投稿削除（管理者専用）
 * adminDismissReport      — 通報却下（管理者専用）
 *
 * Firestore:
 *   reports/{id}
 *     uid, targetType, targetId, reason, status, createdAt
 */
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");

const db = getFirestore();

// ── 禁止ワードリスト ────────────────────────────────────────────────
const PROHIBITED_WORDS = [
  // 反社会的勢力
  "暴力団", "ヤクザ", "やくざ", "組員", "極道", "右翼", "総会屋", "フロント企業",
  // 差別・ハラスメント
  "差別", "殺す", "死ね", "消えろ", "バカ野郎",
  // 詐欺・違法
  "振り込め詐欺", "マルチ商法", "ネズミ講", "無免許", "偽造", "脱税",
  // 薬物
  "覚醒剤", "大麻", "麻薬", "シャブ", "コカイン",
  // 不正労働
  "不法就労", "不法滞在", "偽装請負",
];

// ── 禁止ワードチェック（内部関数） ───────────────────────────────────
function containsProhibitedWord(text) {
  if (!text) return null;
  const lower = text.toLowerCase();
  for (const word of PROHIBITED_WORDS) {
    if (lower.includes(word.toLowerCase())) return word;
  }
  return null;
}

// ── 1. コンテンツチェック（フロントエンドから呼び出し可） ──────────
exports.checkContentModeration = onCall(
  { region: "asia-northeast1", enforceAppCheck: true },
  async (req) => {
    const uid = req.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "ログインが必要です");

    const { text } = req.data || {};
    if (!text) return { ok: true, flagged: false };

    const hit = containsProhibitedWord(text);
    if (hit) {
      return { ok: false, flagged: true, reason: `不適切なワードが含まれています（${hit}）` };
    }
    return { ok: true, flagged: false };
  }
);

// ── 2. 通報 ────────────────────────────────────────────────────────
const TARGET_TYPES = ["job", "message", "profile", "community", "comment"];
const REPORT_REASONS = [
  "反社会的勢力・違法行為",
  "詐欺・スパム",
  "差別・ハラスメント",
  "虚偽の情報",
  "著作権侵害",
  "その他",
];

exports.reportContent = onCall(
  { region: "asia-northeast1", enforceAppCheck: true },
  async (req) => {
    const uid = req.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "ログインが必要です");

    const { targetType, targetId, reason } = req.data || {};

    if (!TARGET_TYPES.includes(targetType))
      throw new HttpsError("invalid-argument", "対象タイプが不正です");
    if (!targetId)
      throw new HttpsError("invalid-argument", "対象IDは必須です");
    if (!REPORT_REASONS.includes(reason))
      throw new HttpsError("invalid-argument", "理由を選択してください");

    // 重複通報チェック（同一ユーザーが同一コンテンツに複数回通報を防ぐ）
    const existing = await db.collection("reports")
      .where("uid", "==", uid)
      .where("targetId", "==", targetId)
      .limit(1)
      .get();
    if (!existing.empty)
      throw new HttpsError("already-exists", "すでに通報済みです");

    await db.collection("reports").add({
      uid,
      targetType,
      targetId,
      reason,
      status:    "pending",
      createdAt: FieldValue.serverTimestamp(),
    });

    return { ok: true, message: "通報を受け付けました。確認後対応いたします。" };
  }
);

// ── 3. 通報一覧（管理者専用） ────────────────────────────────────────
exports.adminListReports = onCall(
  { region: "asia-northeast1", enforceAppCheck: true },
  async (req) => {
    const uid = req.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "ログインが必要です");

    const adminSnap = await db.collection("admins").doc(uid).get();
    if (!adminSnap.exists) throw new HttpsError("permission-denied", "管理者権限が必要です");

    const snap = await db.collection("reports")
      .where("status", "==", "pending")
      .orderBy("createdAt", "asc")
      .limit(100)
      .get();

    const reports = snap.docs.map(d => ({ id: d.id, ...d.data(), createdAt: d.data().createdAt?.toMillis() || null }));
    return { ok: true, reports, count: reports.length };
  }
);

// ── 4. 投稿削除（管理者専用） ────────────────────────────────────────
const TYPE_TO_COLLECTION = {
  job:       "jobs",
  message:   "messages",
  profile:   "craftsmanProfiles",
  community: "communityPosts",
  comment:   "comments",
};

exports.adminDeleteContent = onCall(
  { region: "asia-northeast1", enforceAppCheck: true },
  async (req) => {
    const uid = req.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "ログインが必要です");

    const adminSnap = await db.collection("admins").doc(uid).get();
    if (!adminSnap.exists) throw new HttpsError("permission-denied", "管理者権限が必要です");

    const { reportId, targetType, targetId } = req.data || {};
    if (!targetType || !targetId)
      throw new HttpsError("invalid-argument", "targetType と targetId は必須です");

    const col = TYPE_TO_COLLECTION[targetType];
    if (!col) throw new HttpsError("invalid-argument", "対応していない対象タイプです");

    // コンテンツを削除
    await db.collection(col).doc(targetId).update({
      deletedAt:     FieldValue.serverTimestamp(),
      deletedBy:     uid,
      deletedReason: "moderation",
      isDeleted:     true,
    });

    // 通報ステータスを更新
    if (reportId) {
      await db.collection("reports").doc(reportId).update({
        status:     "actioned",
        actionedBy: uid,
        actionedAt: FieldValue.serverTimestamp(),
      });
    }

    // 同じターゲットの他の通報もクローズ
    const relatedReports = await db.collection("reports")
      .where("targetId", "==", targetId)
      .where("status", "==", "pending")
      .get();
    const batch = db.batch();
    relatedReports.docs.forEach(d => {
      batch.update(d.ref, { status: "actioned", actionedBy: uid, actionedAt: FieldValue.serverTimestamp() });
    });
    await batch.commit();

    return { ok: true, message: "コンテンツを削除しました" };
  }
);

// ── 5. 通報却下（管理者専用） ────────────────────────────────────────
exports.adminDismissReport = onCall(
  { region: "asia-northeast1", enforceAppCheck: true },
  async (req) => {
    const uid = req.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "ログインが必要です");

    const adminSnap = await db.collection("admins").doc(uid).get();
    if (!adminSnap.exists) throw new HttpsError("permission-denied", "管理者権限が必要です");

    const { reportId } = req.data || {};
    if (!reportId) throw new HttpsError("invalid-argument", "reportId は必須です");

    await db.collection("reports").doc(reportId).update({
      status:      "dismissed",
      dismissedBy: uid,
      dismissedAt: FieldValue.serverTimestamp(),
    });

    return { ok: true };
  }
);

// ── エクスポート: 内部チェック関数（他モジュールから使用可） ────────
exports._containsProhibitedWord = containsProhibitedWord;
