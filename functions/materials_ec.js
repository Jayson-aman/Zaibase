/**
 * 資材EC — 価格比較 API（§22）
 * RAKUTEN_APP_ID が未設定の場合はサンプル価格を返す（β）
 */
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const SAMPLE = [
  { name: "変成シリコンシーラント 333ml", maker: "セメダイン", prices: [
    { src: "山本政清商店", price: 850, isBest: true },
    { src: "モノタロウ", price: 920 },
    { src: "楽天", price: 1050 },
  ]},
];

async function searchRakuten(keyword, appId) {
  const url = `https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?format=json&keyword=${encodeURIComponent(keyword)}&applicationId=${appId}&hits=5`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Rakuten API ${res.status}`);
  const data = await res.json();
  return (data.Items || []).map((row) => {
    const i = row.Item;
    return { src: "楽天", name: i.itemName, price: +i.itemPrice, url: i.itemUrl };
  });
}

exports.searchMaterialsPrices = onCall(async (request) => {
  if (!request.auth) throw new HttpsError("unauthenticated", "ログインが必要です");
  const keyword = (request.data?.keyword || "").trim();
  if (!keyword) throw new HttpsError("invalid-argument", "keyword が必要です");

  const appId = process.env.RAKUTEN_APP_ID;
  if (!appId) {
    logger.info("searchMaterialsPrices: RAKUTEN_APP_ID 未設定 — サンプル返却");
    return { mode: "sample", items: SAMPLE, keyword };
  }

  try {
    const rakuten = await searchRakuten(keyword, appId);
    return { mode: "rakuten", items: rakuten, keyword };
  } catch (e) {
    logger.error("searchMaterialsPrices", e);
    return { mode: "fallback", items: SAMPLE, keyword, error: e.message };
  }
});
