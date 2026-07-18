/**
 * ahiru 英会話練習（AI Conversation Partner）
 *
 * chatEnglishConversation — ユーザーの英語メッセージに対し、Claude APIが
 * 自然な英会話のパートナーとして応答する（英検・TOEICレベル別）。
 *
 * 料金設計:
 *   - 1日20メッセージまで（全ユーザー共通・コスト管理のための上限）
 *   - Vocabサブスクリプション連携によるプラン別上限は未実装（RevenueCat→
 *     Firestore webhook同期が別途必要なため、現状は日次レート制限のみ）
 *
 * Firestore:
 *   aiConversationUsage/{uid} — 日別メッセージ数
 *
 * 必須 Secrets:
 *   ANTHROPIC_API_KEY
 */
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const { defineSecret } = require("firebase-functions/params");
const { sanitizeHistory } = require("./_sanitize");

const db = getFirestore();
const ANTHROPIC_API_KEY = defineSecret("ANTHROPIC_API_KEY");

const DAILY_MESSAGE_LIMIT = 20;
const MAX_HISTORY_TURNS = 20;

const LEVEL_GUIDE = {
  junior_basic: "中学基礎レベル（簡単な単語・短い文）",
  junior_std: "中学標準レベル",
  senior_basic: "高校基礎レベル",
  senior_std: "高校標準レベル",
  entrance: "高校受験重要語レベル",
  eiken_pre2: "英検準2級レベル（CEFR A2〜B1）",
  eiken_2: "英検2級レベル（CEFR B1、高校卒業程度）",
  eiken_1: "英検1級レベル（CEFR C1、大学上級〜ネイティブに近い高度な語彙・表現）",
  toeic_800: "TOEIC800点レベル（ビジネス実務英語）",
};

function dayKey() {
  return new Date().toISOString().slice(0, 10);
}

async function checkAndIncrementUsage(uid) {
  const usageRef = db.collection("aiConversationUsage").doc(uid);
  await db.runTransaction(async (tx) => {
    const snap = await tx.get(usageRef);
    const data = snap.exists ? snap.data() : {};
    const today = dayKey();
    const isSameDay = data.day === today;
    const usedToday = isSameDay ? (data.messagesUsed ?? 0) : 0;

    if (usedToday >= DAILY_MESSAGE_LIMIT) {
      throw new HttpsError(
        "resource-exhausted",
        `本日の英会話練習は${DAILY_MESSAGE_LIMIT}回に達しました。また明日、続きから練習しよう！`
      );
    }

    tx.set(
      usageRef,
      {
        day: today,
        messagesUsed: usedToday + 1,
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  });
}

exports.chatEnglishConversation = onCall(
  { region: "asia-northeast1", enforceAppCheck: true, secrets: [ANTHROPIC_API_KEY] },
  async (req) => {
    const uid = req.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "ログインが必要です");

    const { message, history = [], level = "eiken_2", scenario } = req.data ?? {};

    if (!message || typeof message !== "string" || !message.trim()) {
      throw new HttpsError("invalid-argument", "message が必要です");
    }
    if (message.length > 1000) {
      throw new HttpsError("invalid-argument", "メッセージは1000文字以内にしてください");
    }
    if (!Array.isArray(history)) {
      throw new HttpsError("invalid-argument", "history は配列である必要があります");
    }

    await checkAndIncrementUsage(uid);

    const levelGuide = LEVEL_GUIDE[level] ?? LEVEL_GUIDE.eiken_2;
    // 履歴は件数・各要素の内容長を制限し、roleを許可値に限定（コスト濫用防止）
    const trimmedHistory = sanitizeHistory(history, {
      maxTurns: MAX_HISTORY_TURNS,
      maxContentLen: 2000,
    });

    const Anthropic = require("@anthropic-ai/sdk");
    const client = new Anthropic({ apiKey: ANTHROPIC_API_KEY.value() });

    const scenarioLine = scenario
      ? `今回の会話シチュエーション：${scenario}`
      : "今回の会話シチュエーション：自由な日常会話";

    const response = await client.messages.create({
      model: "claude-opus-4-8",
      max_tokens: 500,
      thinking: { type: "adaptive" },
      system: `あなたは日本人の英語学習者と英会話練習をするフレンドリーなネイティブスピーカーです。以下のルールを厳守してください。

【対象レベル】${levelGuide}
${scenarioLine}

【応答のルール】
1. まず英語で自然に会話を続ける（相手のレベルに合わせた語彙・文法を使う。簡単すぎず難しすぎない、指定レベルにふさわしい表現を意識する）
2. 会話の流れを止めないよう、必ず1つ質問や話の広がる一言を含める
3. ユーザーの英文に明らかな文法・語彙のミスがあれば、応答の最後に「📝 ワンポイント」として、日本語で簡潔に（1〜2文）優しく訂正する。ミスがなければこの項目は省略する
4. 応答は英語部分は3〜5文程度に収め、長くなりすぎないようにする
5. 説教くさくならず、実際の会話のように自然体で、時々ユーモアや相槌も交える

【出力フォーマット】
（英語での応答本文）

📝 ワンポイント：（ミスがあれば日本語で簡潔に訂正。なければこの行ごと省略）`,
      messages: [
        ...trimmedHistory.map((h) => ({ role: h.role, content: h.content })),
        { role: "user", content: message },
      ],
    });

    const textBlock = response.content.find((b) => b.type === "text");
    const reply = textBlock?.text?.trim() ?? "";
    if (!reply) throw new HttpsError("internal", "応答の生成に失敗しました。もう一度試してください。");

    return { ok: true, reply };
  }
);
