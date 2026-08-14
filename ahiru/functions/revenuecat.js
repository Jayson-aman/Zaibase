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
 * RevenueCat から現在有効な entitlement をすべて取得する。
 *
 * なぜ「ティア1つ」ではなく集合を返すか:
 *   pro（受験コンテンツ）と vocab（英語コンテンツ）は別々に買える独立した商品で、
 *   両方持つ人がいる。これを1つのティアに畳むと、pro+vocab の人が "pro" と判定され、
 *   vocab 限定機能（ネイティブ発音など）を「買っているのに」拒否されてしまう。
 *
 * @returns {Promise<{max: boolean, pro: boolean, vocab: boolean} | null>}
 *   null = 判定不能（キー未設定・API障害など）。呼び出し元はフォールバックを使う。
 */
async function fetchEntitlements(uid) {
  if (!uid) return null;

  let key = "";
  try {
    key = REVENUECAT_SECRET_KEY.value();
  } catch {
    console.error("revenuecat: REVENUECAT_SECRET_KEY が読み出せません（未設定の可能性）");
    return null;
  }
  if (!key) {
    console.error("revenuecat: REVENUECAT_SECRET_KEY が空です。課金判定ができません");
    return null;
  }

  let json;
  try {
    const res = await fetch(
      `https://api.revenuecat.com/v1/subscribers/${encodeURIComponent(uid)}`,
      { headers: { Authorization: `Bearer ${key}`, Accept: "application/json" } }
    );
    // 404 = 未購入ユーザー。RevenueCat は購入前でも 200 を返すが、念のため両対応。
    if (res.status === 404) return { max: false, pro: false, vocab: false };
    if (!res.ok) {
      console.error(`revenuecat: API が ${res.status} を返しました。課金判定ができません`);
      return null;
    }
    json = await res.json();
  } catch (err) {
    console.error("revenuecat: API 呼び出しに失敗しました", err);
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

  return {
    max: isActive(ENTITLEMENT_MAX),
    pro: isActive(ENTITLEMENT_PRO),
    vocab: isActive(ENTITLEMENT_VOCAB),
  };
}

/**
 * 英語系コンテンツ（英単語Pro相当）が使えるか。
 * Max は全部入りなので当然含む。pro だけの人は対象外。
 */
async function hasVocabAccess(uid) {
  const ent = await fetchEntitlements(uid);
  if (ent === null) return null;
  return ent.max || ent.vocab;
}

/** Max（全部入り）限定機能が使えるか。 */
async function hasMaxAccess(uid) {
  const ent = await fetchEntitlements(uid);
  if (ent === null) return null;
  return ent.max;
}

/**
 * 後方互換用。単一ティアに畳むため pro+vocab の判別ができない。
 * 新しいコードでは fetchEntitlements / hasVocabAccess / hasMaxAccess を使うこと。
 * @returns {Promise<"max"|"pro"|"vocab"|"free"|null>}
 */
async function fetchTierFromRevenueCat(uid) {
  const ent = await fetchEntitlements(uid);
  if (ent === null) return null;
  if (ent.max) return "max";
  if (ent.pro) return "pro";
  if (ent.vocab) return "vocab";
  return "free";
}

module.exports = {
  REVENUECAT_SECRET_KEY,
  fetchEntitlements,
  hasVocabAccess,
  hasMaxAccess,
  fetchTierFromRevenueCat,
};
