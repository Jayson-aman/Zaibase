/**
 * Yahoo! の クライアントID / シークレット が正しいペアかを直接Yahooに問い合わせて確認する。
 * 秘密キーは yahoo_check.txt に書く（gitには含めない）。
 * 使い方:  node verify_yahoo.js
 */
const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "yahoo_check.txt");
if (!fs.existsSync(file)) {
  console.log("yahoo_check.txt が見つかりません。");
  process.exit(1);
}
const txt = fs.readFileSync(file, "utf8");
const get = (key) => {
  const m = txt.match(new RegExp("^" + key + "\\s*=\\s*(.+)$", "m"));
  return m ? m[1].trim() : "";
};
const clientId = get("CLIENT_ID");
const clientSecret = get("CLIENT_SECRET");

if (!clientId || !clientSecret || clientId.startsWith("ここに") || clientSecret.startsWith("ここに")) {
  console.log("yahoo_check.txt にまだ値が入っていません。CLIENT_ID と CLIENT_SECRET を貼ってください。");
  process.exit(1);
}

console.log("------ 入力チェック ------");
console.log("Client ID 先頭:", clientId.slice(0, 6), "/ 文字数:", clientId.length);
console.log("dj00 で始まる:", clientId.startsWith("dj00") ? "はい (OK)" : "いいえ (要確認)");
console.log("Secret 文字数:", clientSecret.length);
console.log("");

const redirectUri = "https://zaisai-share.firebaseapp.com/__/auth/handler";
const tokenUrl = "https://auth.login.yahoo.co.jp/yconnect/v2/token";
const basic = Buffer.from(clientId + ":" + clientSecret).toString("base64");
const body = new URLSearchParams({
  grant_type: "authorization_code",
  code: "dummy-code-for-verification",
  redirect_uri: redirectUri,
});

(async () => {
  try {
    const res = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        Authorization: "Basic " + basic,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    });
    const status = res.status;
    let data = {};
    const raw = await res.text();
    try { data = JSON.parse(raw); } catch (e) { data = { raw }; }
    const err = data.error || "";

    console.log("------ Yahooの応答 ------");
    console.log("HTTPステータス:", status);
    console.log("error:", err || "(なし)");
    if (data.error_description) console.log("詳細:", data.error_description);
    console.log("");

    if (err === "invalid_grant") {
      console.log("==> 判定: ★ID と Secret の組み合わせは【正しい】★");
      console.log("    クライアント認証は成功し、ダミーcodeだけが弾かれました。");
      console.log("    → 原因は Firebase 側（保存ミス / 発行元URL / 有効化）の可能性。");
    } else if (err === "invalid_client" || status === 401) {
      console.log("==> 判定: ✗ID と Secret の組み合わせが【間違い】✗");
      console.log("    Secret が別アプリのもの・古い・余分な空白、などの可能性大。");
    } else {
      console.log("==> 判定: 想定外の応答です。上の内容を共有してください。");
      console.log(JSON.stringify(data));
    }
  } catch (e) {
    console.log("通信エラー:", e.message);
  }
})();
