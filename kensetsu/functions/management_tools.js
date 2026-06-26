/**
 * management_tools.js — 経営支援ツール（価格転嫁交渉サポート）
 *
 * 機能: generateNegotiationLetter
 *   資材高騰の状況を入力 → Claude APIで元請けへの交渉文を生成
 *
 * フラグ: Firestore platformConfig/features.priceNegotiationEnabled が true の時のみ
 *         フロントエンドから呼び出される。Cloud Function 自体は常時デプロイ済み。
 *
 * Secrets: ANTHROPIC_API_KEY（firebase functions:secrets:set ANTHROPIC_API_KEY で設定）
 */

const { onCall } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const logger = require("firebase-functions/logger");

const ANTHROPIC_API_KEY = defineSecret("ANTHROPIC_API_KEY");

exports.generateNegotiationLetter = onCall(
  {
    enforceAppCheck: true,
    region: "asia-northeast1",
    secrets: [ANTHROPIC_API_KEY],
  },
  async (request) => {
    const { material, rate, contract, matRatio, note, increaseAmount } = request.data || {};

    if (!material || !rate || !contract) {
      return { error: "material・rate・contract は必須です" };
    }

    try {
      const Anthropic = require("@anthropic-ai/sdk");
      const client = new Anthropic.default({ apiKey: ANTHROPIC_API_KEY.value() });

      const prompt = `あなたは建設業の経営コンサルタントです。以下の状況で、元請け会社への価格転嫁交渉文を作成してください。

【状況】
- 高騰した資材・費用: ${material}
- 価格上昇率: ${rate}%
- 現在の工事請負金額: ${contract}万円
- 資材費の工事費比率: ${matRatio}%
- 増額試算額: ＋${increaseAmount}万円
${note ? "- 補足: " + note : ""}

【要件】
- 丁寧かつ誠実なビジネス文書の文体
- 価格上昇の客観的根拠（中東情勢・円安・資材不足・人件費上昇など）を具体的に示す
- 元請けとの長期的関係を大切にしながら増額をお願いする内容
- 交渉のポイント3点を冒頭に箇条書きで示す
- その後に実際の交渉文（400〜500字程度）を続ける
- 最後に「※証憑（仕入れ価格の見積書・請求書）を事前に準備してください」と付記する
- 金額は万円単位で記載する`;

      const message = await client.messages.create({
        model: "claude-opus-4-8",
        max_tokens: 1024,
        thinking: { type: "adaptive" },
        messages: [{ role: "user", content: prompt }],
      });

      const text = message.content.find(b => b.type === "text")?.text ?? "";
      return { letter: text };
    } catch (e) {
      logger.error("generateNegotiationLetter error", e);
      return { error: "交渉文の生成に失敗しました: " + e.message };
    }
  }
);
