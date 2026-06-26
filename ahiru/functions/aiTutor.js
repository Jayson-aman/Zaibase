/**
 * ahiru AI個別指導（AI Tutor）
 *
 * askTutor — 問題の写真＋テキスト質問を受け取り、Claude APIで解説を返す（Maxプラン限定）
 *
 * 料金設計:
 *   - Max ¥2,000/月: 月15セッションまで込み
 *   - 1セッション = 1問題 (最大5往復)
 *   - 1往復目: claude-opus-4-8（画像理解・初回分析）
 *   - 2〜5往復目: claude-haiku-4-5（フォローアップ・低コスト）
 *   - 追加購入: +5問 ¥200 (消耗型IAP、extraCreditsとしてFirestoreに加算)
 *
 * Firestore:
 *   aiTutorUsage/{uid} — 月別セッション数・追加クレジット
 *   aiTutorSessions/{uid_sessionId} — セッションごとの往復数
 *
 * 必須 Secrets:
 *   ANTHROPIC_API_KEY
 */
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const { defineSecret } = require("firebase-functions/params");

const db = getFirestore();
const ANTHROPIC_API_KEY = defineSecret("ANTHROPIC_API_KEY");

const MONTHLY_SESSION_LIMIT = 15;
const TURN_LIMIT = 5;

function monthKey() {
  return new Date().toISOString().slice(0, 7);
}

async function getOrCreateSession(uid, sessionId, isNewSession) {
  const usageRef = db.collection("aiTutorUsage").doc(uid);
  const sessionRef = db.collection("aiTutorSessions").doc(`${uid}_${sessionId}`);

  if (isNewSession) {
    await db.runTransaction(async (tx) => {
      const snap = await tx.get(usageRef);
      const data = snap.exists ? snap.data() : {};
      const month = monthKey();
      const isSameMonth = data.month === month;

      const sessionsUsed = isSameMonth ? (data.sessionsUsed ?? 0) : 0;
      const extraCredits = data.extraCredits ?? 0;
      const limit = MONTHLY_SESSION_LIMIT + extraCredits;

      if (sessionsUsed >= limit) {
        const extra = extraCredits > 0 ? `（追加購入${extraCredits}問含む）` : "";
        throw new HttpsError(
          "resource-exhausted",
          `今月のAI個別指導は${limit}問${extra}使い切りました。「+5問追加」を購入するか、来月また使えます！`
        );
      }

      tx.set(usageRef, {
        month,
        sessionsUsed: isSameMonth ? sessionsUsed + 1 : 1,
        extraCredits,
        updatedAt: FieldValue.serverTimestamp(),
      }, { merge: true });

      tx.set(sessionRef, {
        uid,
        sessionId,
        month,
        turnCount: 0,
        createdAt: FieldValue.serverTimestamp(),
      });
    });
  }

  // Increment turn count and check limit
  let turnCount = 0;
  await db.runTransaction(async (tx) => {
    const snap = await tx.get(sessionRef);
    if (!snap.exists) {
      throw new HttpsError("not-found", "セッションが見つかりません。もう一度最初から質問してね。");
    }
    turnCount = (snap.data().turnCount ?? 0) + 1;

    if (turnCount > TURN_LIMIT) {
      throw new HttpsError(
        "resource-exhausted",
        `1問につき${TURN_LIMIT}回まで質問できます。それでもわからない場合は先生や塾の先生に聞いてみよう！きっと丁寧に教えてくれるよ。`
      );
    }

    tx.update(sessionRef, { turnCount, updatedAt: FieldValue.serverTimestamp() });
  });

  return turnCount;
}

exports.askTutor = onCall(
  { region: "asia-northeast1", enforceAppCheck: true, secrets: [ANTHROPIC_API_KEY] },
  async (req) => {
    const uid = req.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "ログインが必要です");

    const {
      imageBase64,
      questionText,
      history = [],
      sessionId,
      isNewSession = false,
    } = req.data ?? {};

    if (!sessionId) throw new HttpsError("invalid-argument", "sessionId が必要です");
    if (!questionText && !imageBase64)
      throw new HttpsError("invalid-argument", "質問文または画像が必要です");

    // Maxプラン確認 or 無料体験（1回限り）
    const userRef = db.collection("users").doc(uid);
    const userSnap = await userRef.get();
    const userData = userSnap.exists ? userSnap.data() : {};
    const tier = userData?.tier ?? "free";
    const trialAiUsed = userData?.trialAiUsed ?? false;

    if (tier !== "max") {
      if (trialAiUsed) {
        throw new HttpsError(
          "permission-denied",
          "AI個別指導の無料体験（1回）は使い切りました。Maxプランにアップグレードすると月15回使えるよ！"
        );
      }
      // 初回のみ許可 → 体験済みマークを付ける
      if (isNewSession) {
        await userRef.set({ trialAiUsed: true, updatedAt: FieldValue.serverTimestamp() }, { merge: true });
      }
    }

    const turnCount = await getOrCreateSession(uid, sessionId, isNewSession);

    // 1往復目はOpus（画像解析・深い分析）、2往復目以降はHaiku（低コスト）
    const model = turnCount === 1 ? "claude-opus-4-8" : "claude-haiku-4-5";

    const Anthropic = require("@anthropic-ai/sdk");
    const client = new Anthropic({ apiKey: ANTHROPIC_API_KEY.value() });

    const userContent = [];
    if (imageBase64) {
      userContent.push({
        type: "image",
        source: { type: "base64", media_type: "image/jpeg", data: imageBase64 },
      });
    }
    if (questionText) {
      userContent.push({ type: "text", text: questionText });
    }

    const messages = [
      ...history.map((h) => ({ role: h.role, content: h.content })),
      { role: "user", content: userContent },
    ];

    const response = await client.messages.create({
      model,
      max_tokens: 600,
      thinking: { type: "adaptive" },
      system: `あなたは中学生の受験勉強を手伝う、優しく丁寧な家庭教師です。
生徒が「わからない！」と困っています。以下のルールで教えてください：

【基本方針】
- 答えをすぐに教えるのではなく、ヒントを出しながら一緒に考える
- 「なぜそうなるのか」の理由を必ず説明する
- 難しい言葉は使わず、中学生にわかる言葉で話す

【励ましの言葉を必ず入れる】
- 「大丈夫！一緒に考えよう😊」
- 「惜しい！あと少しだよ✨」
- 「よく気づいたね！」
- 「このパターンを覚えると他の問題にも使えるよ！」

【回答の長さ】
200〜350文字程度。長すぎると読みにくいので簡潔に。
絵文字を1〜2個使ってOK。`,
      messages,
    });

    const textBlock = response.content.find((b) => b.type === "text");
    const answer = textBlock?.text?.trim() ?? "";
    if (!answer) throw new HttpsError("internal", "回答の生成に失敗しました。もう一度試してね。");

    return { ok: true, answer, turnCount, model };
  }
);

/**
 * addTutorCredits — RevenueCat消耗型IAP購入後に追加クレジットを付与
 * クライアントから呼ぶ（購入確認後）
 */
exports.addTutorCredits = onCall(
  { region: "asia-northeast1", enforceAppCheck: true },
  async (req) => {
    const uid = req.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "ログインが必要です");

    const { creditsToAdd = 5 } = req.data ?? {};
    if (typeof creditsToAdd !== "number" || creditsToAdd <= 0 || creditsToAdd > 20) {
      throw new HttpsError("invalid-argument", "creditsToAdd は1〜20の数値です");
    }

    const usageRef = db.collection("aiTutorUsage").doc(uid);
    await usageRef.set(
      { extraCredits: FieldValue.increment(creditsToAdd), updatedAt: FieldValue.serverTimestamp() },
      { merge: true }
    );

    return { ok: true, creditsToAdd };
  }
);
