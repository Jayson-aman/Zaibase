"use strict";

/**
 * AI関数の共通入力サニタイズ。
 * 認証・App Checkを通過した後でも、巨大な入力や不正なroleを送りつける
 * 「トークン濫用（コスト爆撃）」を防ぐための最終防衛線。
 */

const { HttpsError } = require("firebase-functions/v2/https");

function capString(v, max) {
  if (typeof v !== "string") return "";
  return v.length > max ? v.slice(0, max) : v;
}

/**
 * 会話履歴を安全化する。
 * - 件数を maxTurns*2 に制限
 * - role を 'user' / 'assistant' のみに限定
 * - 文字列コンテンツは maxContentLen で切り詰め
 * - 構造化コンテンツ（配列）はブロック数を制限、テキストは切り詰め、
 *   巨大画像ブロックは除外
 * - maxImages で履歴に残す画像の総数を制限する。制限しないと毎ターン
 *   過去の画像すべてを再送してしまい、1セッションのAPIコストが桁違いに膨らむ。
 *   新しい方から数えて maxImages 枚だけ残す。
 */
function sanitizeHistory(history, { maxTurns = 20, maxContentLen = 4000, maxImages = Infinity } = {}) {
  if (!Array.isArray(history)) return [];
  const trimmed = history.slice(-maxTurns * 2);
  const out = [];
  for (const h of trimmed) {
    if (!h || typeof h !== "object") continue;
    const role = h.role === "assistant" ? "assistant" : "user";
    let content = h.content;
    if (typeof content === "string") {
      content = capString(content, maxContentLen);
      if (!content.trim()) continue;
    } else if (Array.isArray(content)) {
      const blocks = [];
      for (const b of content.slice(0, 8)) {
        if (!b || typeof b !== "object") continue;
        if (b.type === "text") {
          const t = capString(b.text, maxContentLen);
          if (t) blocks.push({ type: "text", text: t });
        } else if (
          b.type === "image" &&
          b.source &&
          typeof b.source.data === "string" &&
          b.source.data.length <= 200000
        ) {
          blocks.push(b);
        }
      }
      if (!blocks.length) continue;
      content = blocks;
    } else {
      continue;
    }
    out.push({ role, content });
  }

  // 新しい方から数えて maxImages 枚だけ画像を残し、それより古い画像は落とす。
  if (Number.isFinite(maxImages)) {
    let seen = 0;
    for (let i = out.length - 1; i >= 0; i -= 1) {
      const c = out[i].content;
      if (!Array.isArray(c)) continue;
      const kept = [];
      for (let j = c.length - 1; j >= 0; j -= 1) {
        const b = c[j];
        if (b.type === "image") {
          if (seen >= maxImages) continue;
          seen += 1;
        }
        kept.unshift(b);
      }
      if (kept.length) out[i] = { role: out[i].role, content: kept };
      else out[i] = null;
    }
    return out.filter(Boolean);
  }

  return out;
}

/**
 * 画像base64のサイズ上限チェック（巨大画像によるトークン濫用・メモリ枯渇の防止）。
 * デフォルト上限は約5MB相当。
 */
function assertImageSize(imageBase64, maxChars = 7000000) {
  if (imageBase64 == null) return;
  if (typeof imageBase64 !== "string") {
    throw new HttpsError("invalid-argument", "画像データが不正です");
  }
  if (imageBase64.length > maxChars) {
    throw new HttpsError(
      "invalid-argument",
      "画像サイズが大きすぎます（約5MB以内にしてください）"
    );
  }
}

module.exports = { capString, sanitizeHistory, assertImageSize };
