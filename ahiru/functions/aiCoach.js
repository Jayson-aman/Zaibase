/**
 * ahiru（中学受験対策）AI弱点コーチ
 *
 * getWeakPointCoaching — 間違えた問題のリストから、AIが弱点アドバイスを生成（Maxプラン限定）
 *
 * 必須 Secrets:
 *   ANTHROPIC_API_KEY
 *
 * セットアップ:
 *   firebase functions:secrets:set ANTHROPIC_API_KEY
 *
 * コスト保護:
 *   aiCoachUsage/{uid} で1日あたりの利用回数を記録し、DAILY_LIMIT を超えたら拒否する。
 *   モデルは claude-haiku-4-5（低コスト）を使用。
 */
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const { defineSecret } = require("firebase-functions/params");

const db = getFirestore();
const ANTHROPIC_API_KEY = defineSecret("ANTHROPIC_API_KEY");

const DAILY_LIMIT = 5;
const MAX_ITEMS = 10;

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

async function checkAndIncrementLimit(uid) {
  const ref = db.collection("aiCoachUsage").doc(uid);
  const today = todayKey();

  await db.runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    const data = snap.exists ? snap.data() : {};
    const count = data.date === today ? data.count || 0 : 0;

    if (count >= DAILY_LIMIT) {
      throw new HttpsError(
        "resource-exhausted",
        `AIコーチは1日${DAILY_LIMIT}回までです。明日また試してね。`
      );
    }

    tx.set(
      ref,
      { date: today, count: count + 1, updatedAt: FieldValue.serverTimestamp() },
      { merge: true }
    );
  });
}

exports.getWeakPointCoaching = onCall(
  { region: "asia-northeast1", enforceAppCheck: true, secrets: [ANTHROPIC_API_KEY] },
  async (req) => {
    const uid = req.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "ログインが必要です");

    const { subjectName, items } = req.data || {};
    if (!subjectName || typeof subjectName !== "string")
      throw new HttpsError("invalid-argument", "subjectName は必須です");
    if (!Array.isArray(items) || items.length === 0)
      throw new HttpsError("invalid-argument", "items は必須です");

    const safeItems = items
      .slice(0, MAX_ITEMS)
      .map((it) => ({
        question: String(it?.question ?? "").slice(0, 300),
        answer: String(it?.answer ?? "").slice(0, 200),
      }))
      .filter((it) => it.question.length > 0);

    if (safeItems.length === 0)
      throw new HttpsError("invalid-argument", "有効な問題データがありません");

    await checkAndIncrementLimit(uid);

    const Anthropic = require("@anthropic-ai/sdk");
    const client = new Anthropic({ apiKey: ANTHROPIC_API_KEY.value() });

    const itemsText = safeItems
      .map((it, i) => `${i + 1}. 問題: ${it.question} / 正解: ${it.answer}`)
      .join("\n");

    const response = await client.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 600,
      system:
        "あなたは中学受験を目指す小学生を指導する、優しく的確な家庭教師です。" +
        "生徒が間違えた問題のリストから、共通する弱点や誤解のパターンを分析し、" +
        "小学生にも分かる言葉で、具体的な復習アドバイスを日本語で3〜4文程度にまとめてください。" +
        "保護者が読んでも納得できる、優しいけれど具体的な内容にしてください。絵文字は1〜2個まで。",
      messages: [
        { role: "user", content: `科目: ${subjectName}\n間違えた問題:\n${itemsText}` },
      ],
    });

    const textBlock = response.content.find((b) => b.type === "text");
    const advice = textBlock?.text?.trim() ?? "";
    if (!advice) throw new HttpsError("internal", "アドバイスの生成に失敗しました");

    return { ok: true, advice };
  }
);
