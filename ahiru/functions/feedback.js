/**
 * ahiru（中学受験・高校受験対策）保護者向けフィードバック
 *
 * sendFeedback — 生徒からの感想・要望（選択式＋自由記述）を受け取り、
 *   ①Firestore（feedbackSubmissions）に保存 ②LINEへ通知する。
 *
 * 全科目・両受験種別（中学受験・高校受験）・単元をまたいで汎用的に使える
 * ようにするため、subject・examType・context（単元・マンガ）は
 * すべて任意項目にしてある。
 *
 * 必須 Secrets（LINE Messaging API。LINE Notify は2025/3に終了したため使わない）:
 *   LINE_CHANNEL_ACCESS_TOKEN（Messaging APIチャネルの長期チャネルアクセストークン）
 *   LINE_NOTIFY_TO（通知を受け取る人のLINEユーザーID。U から始まる33文字）
 *
 * セットアップ:
 *   firebase functions:secrets:set LINE_CHANNEL_ACCESS_TOKEN
 *   firebase functions:secrets:set LINE_NOTIFY_TO
 *   （未設定、または placeholder のままの場合はFirestoreへの保存のみ行い、LINE通知はスキップする）
 *
 * コスト保護:
 *   feedbackUsage/{uid} で1日あたりの送信回数を記録し、DAILY_LIMIT を超えたら拒否する。
 */
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const { defineSecret } = require("firebase-functions/params");

const db = getFirestore();
const LINE_CHANNEL_ACCESS_TOKEN = defineSecret("LINE_CHANNEL_ACCESS_TOKEN");
const LINE_NOTIFY_TO = defineSecret("LINE_NOTIFY_TO");

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

async function postToLine(token, to, payload) {
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
    `📮 ahiru フィードバック`,
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

  const res = await fetch("https://api.line.me/v2/bot/message/push", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      to,
      messages: [{ type: "text", text: lines.join("\n").slice(0, 4900) }],
    }),
  });
  if (!res.ok) {
    throw new Error(`LINE push returned ${res.status}`);
  }
}

const LINE_DAILY_CAP = 20;

/** LINEへ通知してよいか（全体で1日 LINE_DAILY_CAP 通まで）。数え間違えても保存には影響しない。 */
async function takeLineQuota() {
  const ref = db.collection("feedbackUsage").doc("_lineGlobal");
  const today = todayKey();
  try {
    return await db.runTransaction(async (tx) => {
      const snap = await tx.get(ref);
      const d = snap.exists ? snap.data() : {};
      const count = d.date === today ? d.count || 0 : 0;
      if (count >= LINE_DAILY_CAP) return false;
      tx.set(ref, { date: today, count: count + 1 });
      return true;
    });
  } catch {
    return true;
  }
}

exports.sendFeedback = onCall(
  { region: "asia-northeast1", secrets: [LINE_CHANNEL_ACCESS_TOKEN, LINE_NOTIFY_TO] },
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
            // Firestore は undefined を拒否するので、無い欄は null にする
            lessonId: sanitizeText(data.context.lessonId, 200) ?? null,
            lessonTitle: sanitizeText(data.context.lessonTitle, 200) ?? null,
            mangaId: sanitizeText(data.context.mangaId, 200) ?? null,
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

    const token = LINE_CHANNEL_ACCESS_TOKEN.value();
    const to = LINE_NOTIFY_TO.value();
    // LINE の無料枠（月200通）を、匿名アカウントの連投で使い切られないよう、全体で1日あたりの通知数に上限を置く。
    // 超えた分もFirestoreには保存されているので、あとで拾える。
    const lineAllowed = await takeLineQuota();
    if (lineAllowed && token && to && token !== "placeholder" && to !== "placeholder") {
      try {
        await postToLine(token, to, { category, comment, subject, examType, context });
      } catch {
        // LINE通知が失敗しても、Firestoreへの保存自体は成功しているので
        // 生徒側にはエラーを見せない（あとでFirestoreから拾える）。
      }
    }

    return { ok: true };
  }
);
