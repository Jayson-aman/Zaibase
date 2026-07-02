/**
 * ahiru（英単語Pro）聞き流し音声合成プロキシ
 *
 * speakText — OpenAI TTSでテキストを音声化し、base64 mp3を返す
 *
 * コスト保護:
 *   APIキーはサーバー側のみで保持する（クライアントには一切渡さない）。
 *   1回あたり最大400文字、1日あたり最大150回までに制限し、
 *   ttsUsage/{uid} で1日の呼び出し回数を記録する。
 *
 * 必須 Secrets:
 *   OPENAI_API_KEY
 *
 * セットアップ:
 *   firebase functions:secrets:set OPENAI_API_KEY
 */
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const { defineSecret } = require("firebase-functions/params");

const db = getFirestore();
const OPENAI_API_KEY = defineSecret("OPENAI_API_KEY");

const DAILY_LIMIT = 150;
const MAX_CHARS = 400;

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

async function checkAndIncrementLimit(uid) {
  const ref = db.collection("ttsUsage").doc(uid);
  const today = todayKey();

  await db.runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    const data = snap.exists ? snap.data() : {};
    const count = data.date === today ? data.count || 0 : 0;

    if (count >= DAILY_LIMIT) {
      throw new HttpsError(
        "resource-exhausted",
        `聞き流しは1日${DAILY_LIMIT}回までです。明日また試してね。`
      );
    }

    tx.set(
      ref,
      { date: today, count: count + 1, updatedAt: FieldValue.serverTimestamp() },
      { merge: true }
    );
  });
}

exports.speakText = onCall(
  { region: "asia-northeast1", enforceAppCheck: true, secrets: [OPENAI_API_KEY] },
  async (req) => {
    const uid = req.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "ログインが必要です");

    const { text } = req.data || {};
    if (!text || typeof text !== "string" || text.trim().length === 0) {
      throw new HttpsError("invalid-argument", "text は必須です");
    }
    const safeText = text.slice(0, MAX_CHARS);

    await checkAndIncrementLimit(uid);

    const response = await fetch("https://api.openai.com/v1/audio/speech", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY.value()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "tts-1-hd",
        input: safeText,
        voice: "alloy",
        response_format: "mp3",
        speed: 0.9,
      }),
    });

    if (!response.ok) {
      throw new HttpsError("internal", "音声生成に失敗しました");
    }

    const arrayBuffer = await response.arrayBuffer();
    const audioBase64 = Buffer.from(arrayBuffer).toString("base64");

    return { ok: true, audioBase64 };
  }
);
