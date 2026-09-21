/**
 * ahiru（中学受験・高校受験対策）保護者向けフィードバック
 *
 * sendFeedback — 生徒からの感想・要望（選択式＋自由記述）を受け取り、
 *   ①Firestore（feedbackSubmissions）に保存 ②Slackへ通知する。
 *
 * 全科目・両受験種別（中学受験・高校受験）・単元をまたいで汎用的に使える
 * ようにするため、subject・examType・context（単元・マンガ）は
 * すべて任意項目にしてある。
 *
 * 必須 Secrets:
 *   SLACK_FEEDBACK_WEBHOOK_URL（Slack Incoming Webhook URL）
 *
 * セットアップ:
 *   firebase functions:secrets:set SLACK_FEEDBACK_WEBHOOK_URL
 *   （未設定の場合はFirestoreへの保存のみ行い、Slack通知はスキップする）
 *
 * コスト保護:
 *   feedbackUsage/{uid} で1日あたりの送信回数を記録し、DAILY_LIMIT を超えたら拒否する。
 */
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const { defineSecret } = require("firebase-functions/params");

const db = getFirestore();
const SLACK_FEEDBACK_WEBHOOK_URL = defineSecret("SLACK_FEEDBACK_WEBHOOK_URL");

const DAILY_LIMIT = 15;
const MAX_COMMENT_LEN = 1000;

const CATEGORIES = [
  "わかった！",
  "ちょっと難しい",
  "わからなかった",
  "もっと説明がほしい",
  "その他の意見・要望",
];

const SUBJECTS = ["sansu", "kokugo", "rika", "shakai", "eigo", "all"];
const EXAM_TYPES = ["chugaku", "koko"];

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

async function checkAndIncrementLimit(uid) {
  const ref = db.collection("feedbackUsage").doc(uid);
  const today = todayKey();

  await db.runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    const data = snap.exists ? snap.data() : {};
    const count = data.date === today ? data.count || 0 : 0;

    if (count >= DAILY_LIMIT) {
      throw new HttpsError(
        "resource-exhausted",
        "本日の送信回数の上限に達しました。また明日お試しください。"
      );
    }

    tx.set(ref, { date: today, count: count + 1 }, { merge: true });
  });
}

function sanitizeText(v, maxLen) {
  if (typeof v !== "string") return undefined;
  const t = v.trim().slice(0, maxLen);
  return t === "" ? undefined : t;
}

async function postToSlack(webhookUrl, payload) {
  const subjectLabel =
    payload.subject == null
      ? "（科目未指定）"
      : payload.subject === "all"
      ? "全科目"
      : payload.subject;
  const examLabel =
    payload.examType === "chugaku"
      ? "中学受験"
      : payload.examType === "koko"
      ? "高校受験"
      : "（受験種別未指定）";

  const lines = [
    `📮 *ahiru フィードバック*`,
    `カテゴリ: ${payload.category}`,
    `科目: ${subjectLabel} / ${examLabel}`,
  ];
  if (payload.context?.lessonTitle != null) {
    lines.push(`単元: ${payload.context.lessonTitle}`);
  }
  if (payload.comment != null) {
    lines.push(`─────`);
    lines.push(payload.comment);
  }

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: lines.join("\n") }),
  });
  if (!res.ok) {
    throw new Error(`Slack webhook returned ${res.status}`);
  }
}

exports.sendFeedback = onCall(
  { region: "asia-northeast1", secrets: [SLACK_FEEDBACK_WEBHOOK_URL] },
  async (req) => {
    const uid = req.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "ログインが必要です");

    const data = req.data ?? {};
    const category = typeof data.category === "string" ? data.category : "";
    if (!CATEGORIES.includes(category)) {
      throw new HttpsError("invalid-argument", "カテゴリが不正です");
    }
    const comment = sanitizeText(data.comment, MAX_COMMENT_LEN);
    const subject = SUBJECTS.includes(data.subject) ? data.subject : undefined;
    const examType = EXAM_TYPES.includes(data.examType) ? data.examType : undefined;
    const context =
      data.context != null && typeof data.context === "object"
        ? {
            lessonId: sanitizeText(data.context.lessonId, 200),
            lessonTitle: sanitizeText(data.context.lessonTitle, 200),
            mangaId: sanitizeText(data.context.mangaId, 200),
          }
        : undefined;

    await checkAndIncrementLimit(uid);

    const record = {
      uid,
      category,
      comment: comment ?? null,
      subject: subject ?? null,
      examType: examType ?? null,
      context: context ?? null,
      createdAt: FieldValue.serverTimestamp(),
    };
    await db.collection("feedbackSubmissions").add(record);

    const webhookUrl = SLACK_FEEDBACK_WEBHOOK_URL.value();
    if (webhookUrl) {
      try {
        await postToSlack(webhookUrl, { category, comment, subject, examType, context });
      } catch {
        // Slack通知が失敗しても、Firestoreへの保存自体は成功しているので
        // 生徒側にはエラーを見せない（あとでFirestoreから拾える）。
      }
    }

    return { ok: true };
  }
);
