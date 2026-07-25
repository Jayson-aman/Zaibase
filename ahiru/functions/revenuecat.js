/**
 * RevenueCat のサブスク状態をサーバー側で検証する共通ヘルパー。
 *
 * なぜ必要か:
 *   Firestore の users/{uid}.tier を書き込む処理が存在しないため、これに依存すると
 *   課金済みユーザーでも常に free 扱いになり、有料機能が開かない。
 *   またクライアントから渡される isPaid は詐称できるため、課金判定の根拠にできない。
 *   そこで RevenueCat REST API に uid（= RevenueCat の app_user_id）で問い合わせ、
 *   実際に有効な entitlement を取得して判定する。
 *
 * 前提:
 *   クライアントは services/auth.ts のログイン時に identifyUser(uid) →
 *   Purchases.logIn(uid) を呼び、RevenueCat の app_user_id を Firebase uid に
 *   一致させている。
 *
 * セットアップ:
 *   firebase functions:secrets:set REVENUECAT_SECRET_KEY
 *   （RevenueCat ダッシュボード → Project settings → API keys の
 *     「Secret key」。公開用の appl_ キーではないので注意）
 */

const { defineSecret } = require("firebase-functions/params");

const REVENUECAT_SECRET_KEY = defineSecret("REVENUECAT_SECRET_KEY");

/** entitlement 識別子（クライアントの services/subscription.ts と一致させること） */
const ENTITLEMENT_MAX = "max";
const ENTITLEMENT_PRO = "pro";
const ENTITLEMENT_VOCAB = "vocab";

/**
 * RevenueCat から現在有効なティアを取得する。
 * @returns {Promise<"max"|"pro"|"vocab"|"free"|null>}
 *   null = 判定不能（キー未設定・API障害など）。呼び出し元は従来のフォールバックを使う。
 */
async function fetchTierFromRevenueCat(uid) {
  if (!uid) return null;

  let key = "";
  try {
    key = REVENUECAT_SECRET_KEY.value();
  } catch {
    return null;
  }
  if (!key) return null;

  let json;
  try {
    const res = await fetch(
      `https://api.revenuecat.com/v1/subscribers/${encodeURIComponent(uid)}`,
      { headers: { Authorization: `Bearer ${key}`, Accept: "application/json" } }
    );
    // 404 = 未購入ユーザー。RevenueCat は購入前でも 200 を返すが、念のため両対応。
    if (res.status === 404) return "free";
    if (!res.ok) return null;
    json = await res.json();
  } catch {
    return null;
  }

  const entitlements = json?.subscriber?.entitlements ?? {};
  const now = Date.now();
  const isActive = (id) => {
    const ent = entitlements[id];
    if (!ent) return false;
    // expires_date が無い = 期限なし（生涯）。ある場合は未来かどうかで判定。
    if (!ent.expires_date) return true;
    const expiresAt = Date.parse(ent.expires_date);
    return Number.isFinite(expiresAt) && expiresAt > now;
  };

  if (isActive(ENTITLEMENT_MAX)) return "max";
  if (isActive(ENTITLEMENT_PRO)) return "pro";
  if (isActive(ENTITLEMENT_VOCAB)) return "vocab";
  return "free";
}

module.exports = {
  REVENUECAT_SECRET_KEY,
  fetchTierFromRevenueCat,
};
