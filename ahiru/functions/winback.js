/**
 * 解約された方への「もう一度、試してみませんか」メール（月に1回）
 *
 * 流れ:
 *   毎月1日 10:00（日本時間）に winbackMonthly が起動する。
 *   1. Firebase Authentication の全ユーザー（メールアドレスがある実アカウントだけ）を順に見る
 *   2. RevenueCat に問い合わせ、「過去に有料の購読があったが、いまは有効な権利が無い」人を拾う
 *   3. 解約した人（lapsed）には再開のご案内を、まだ契約していない人（never）には、登録時に
 *      「お知らせメールを受け取る」にチェックした人（emailConsent/{uid}.marketing）だけに送る。
 *      配信停止していない・前回の送信から28日以上たっている人だけ。Resend で送る
 *   4. 送った日を winbackLog/{uid} に記録する
 *
 * 守っていること（特定電子メール法）:
 *   ・送信者の名称・連絡先、配信停止のリンクを必ず付ける
 *   ・配信停止は 1 クリック（unsubscribeEmail）。停止した人には二度と送らない
 *   ・買い切りだけの人や、一度も購読していない人には送らない（解約した人だけ）
 *
 * 安全のため、WINBACK_ENABLED=1 を設定するまでは「送らずに、送る予定の数と宛先の一部だけログに出す」
 * （ドライラン）。最初は必ずドライランで人数を確かめてから有効にすること。
 *
 * セットアップ（Mac で。キーはチャットに貼らない）:
 *   firebase functions:secrets:set RESEND_API_KEY        ← Resend の API キー（re_...）
 *   firebase functions:secrets:set WINBACK_SIGNING_KEY   ← 配信停止リンクの署名用。長いランダム文字列
 *   （REVENUECAT_SECRET_KEY は revenuecat.js と共通）
 *   functions/.env に WINBACK_ENABLED=1（本番で送るとき）／WINBACK_FROM を書く（下記）
 *   Resend 側で、送信元ドメイン（zaibase.group）の DNS 認証（SPF・DKIM）を済ませておく
 */

const { onSchedule } = require("firebase-functions/v2/scheduler");
const { onRequest, onCall, HttpsError } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const admin = require("firebase-admin");
const crypto = require("crypto");

const RESEND_API_KEY = defineSecret("RESEND_API_KEY");
const WINBACK_SIGNING_KEY = defineSecret("WINBACK_SIGNING_KEY");
const REVENUECAT_SECRET_KEY = defineSecret("REVENUECAT_SECRET_KEY");

const FROM = process.env.WINBACK_FROM || "Zaibase受験 <info@zaibase.group>";
const APP_URL = "https://exam.zaibase.group/lp";
const UNSUB_BASE = process.env.WINBACK_UNSUB_BASE ||
  "https://asia-northeast1-zaibase-exam.cloudfunctions.net/unsubscribeEmail";
// 送信者の住所（特定電子メール法で表示が求められる）。バーチャルオフィスなど、公開してよい住所が決まったら
// functions/.env の WINBACK_ADDRESS に書く。未設定のあいだは「請求により開示」と表示する
// （特商法ページと同じ扱い。法的に足りるかは弁護士確認の対象）。
const ADDRESS = process.env.WINBACK_ADDRESS || "住所は、ご請求があり次第、遅滞なく開示します";
const MIN_DAYS_BETWEEN = 28;
const MAX_USERS_PER_RUN = 5000;

function sign(uid) {
  return crypto.createHmac("sha256", WINBACK_SIGNING_KEY.value()).update(uid).digest("hex").slice(0, 32);
}

function unsubscribeUrl(uid) {
  return `${UNSUB_BASE}?u=${encodeURIComponent(uid)}&s=${sign(uid)}`;
}

/** RevenueCat の状態。'lapsed'＝過去に購読があり今は無い／'active'＝購読中／'never'＝購読したことがない／null＝判定不能 */
async function subscriberState(uid, key) {
  try {
    const res = await fetch(`https://api.revenuecat.com/v1/subscribers/${encodeURIComponent(uid)}`, {
      headers: { Authorization: `Bearer ${key}`, Accept: "application/json" },
      signal: AbortSignal.timeout(8000),
    });
    if (res.status === 404) return "never";
    if (!res.ok) return null;
    const json = await res.json();
    const subs = json?.subscriber?.subscriptions ?? {};
    const now = Date.now();
    let everSubscribed = false;
    let activeNow = false;
    for (const s of Object.values(subs)) {
      // 試用の無料期間・サンドボックスの購入は、ふつうの購読として数えない
      if (s?.is_sandbox) continue;
      everSubscribed = true;
      const exp = s?.expires_date ? Date.parse(s.expires_date) : Infinity;
      const grace = s?.grace_period_expires_date ? Date.parse(s.grace_period_expires_date) : -Infinity;
      if (Math.max(exp, grace) > now) activeNow = true;
    }
    if (activeNow) return "active";
    return everSubscribed ? "lapsed" : "never";
  } catch (e) {
    console.error("winback: RevenueCat 照会に失敗", e?.message);
    return null;
  }
}

function buildEmail(uid) {
  const unsub = unsubscribeUrl(uid);
  const subject = "【Zaibase受験】やる気が出ない日は、1問だけでも大丈夫です";
  const text = [
    "Zaibase受験をお使いいただき、ありがとうございました。",
    "",
    "最近、勉強のペースはいかがでしょうか。",
    "Zaibase受験には、やる気のない日のための「1問だけでOK」の入口があります。",
    "1問できたら、そこで終わっても大丈夫です。「今日も1問やった」を、続けるお手伝いをします。",
    "",
    "・答えのあとに「なんでそうなるの？」までスライドで説明します",
    "・つまずいたら、その場で「おさらい」が開きます",
    "・5教科16,000問以上、志望校50校の入試傾向問題",
    "・中学生向けに「定期テストの教科書」（動く図解つき）と、やさしい問題から始められる基本問題を追加しました",
    "",
    "無料の範囲でもお試しいただけます。再開はいつでもできます。",
    APP_URL,
    "",
    "──────────",
    "このメールは、Zaibase受験にご登録のメールアドレスへ、月に1回お送りしています。",
    "今後このメールが不要な場合は、こちらから配信を停止できます（1クリックで完了します）。",
    unsub,
    "",
    "運営：南條 雅哉 / Zaibase Group",
    ADDRESS,
    "お問い合わせ：info@zaibase.group",
  ].join("\n");
  const html = `<div style="font-family:-apple-system,'Hiragino Sans',sans-serif;line-height:1.8;color:#1B2540;max-width:520px">
<p>Zaibase受験をお使いいただき、ありがとうございました。</p>
<p>最近、勉強のペースはいかがでしょうか。<br>Zaibase受験には、やる気のない日のための<b>「1問だけでOK」</b>の入口があります。1問できたら、そこで終わっても大丈夫です。</p>
<ul><li>答えのあとに「なんでそうなるの？」までスライドで説明します</li><li>つまずいたら、その場で「おさらい」が開きます</li><li>5教科16,000問以上、志望校50校の入試傾向問題</li><li>中学生向けに「定期テストの教科書」（動く図解つき）と、やさしい問題から始められる基本問題を追加しました</li></ul>
<p>無料の範囲でもお試しいただけます。再開はいつでもできます。</p>
<p><a href="${APP_URL}" style="display:inline-block;background:#F97316;color:#fff;text-decoration:none;font-weight:bold;padding:12px 22px;border-radius:999px">もう一度、1問だけ解いてみる</a></p>
<hr style="border:none;border-top:1px solid #E2E8F0;margin:24px 0">
<p style="font-size:12px;color:#64748B">このメールは、Zaibase受験にご登録のメールアドレスへ、月に1回お送りしています。<br>
今後不要な場合は、<a href="${unsub}">こちらから配信を停止</a>できます（1クリックで完了します）。<br><br>
運営：南條 雅哉 / Zaibase Group　${ADDRESS}<br>お問い合わせ：info@zaibase.group</p></div>`;
  return { subject, text, html, unsub };
}

/** 無料のまま使っている、お知らせメールに同意した人への月1回のメール */
function buildFreeEmail(uid) {
  const unsub = unsubscribeUrl(uid);
  const subject = "【Zaibase受験】無料のまま、ここまで使えます（＋月1回のヒント）";
  const text = [
    "Zaibase受験をお使いいただき、ありがとうございます。",
    "お知らせメールの受け取りにご同意いただいたので、月に1回だけお送りします。",
    "",
    "今月のヒント：やる気の出ない日は、「1問だけでOK」から。",
    "ホームの「気が重い日は、1問だけでOK」を開くと、やさしい問題を1問だけ解いて終われます。",
    "",
    "無料でできること：",
    "・問題集は1教科10問まで／教科書は10単元まで（解説はすべて読めます）",
    "・そのあとの単元も、導入と最初の節は「ためし読み」できます",
    "",
    "PRO・MAXにすると、全教科の教科書・全問題・志望校コース・聞き流しが使えます。",
    "（iPhone・iPadは、はじめての方は最初の1か月500円。いつでも解約できます）",
    APP_URL,
    "",
    "──────────",
    "このメールは、お知らせメールの受け取りにご同意いただいた方へ、月に1回お送りしています。",
    "配信を停止する（1クリックで完了します）：",
    unsub,
    "",
    "運営：南條 雅哉 / Zaibase Group",
    ADDRESS,
    "お問い合わせ：info@zaibase.group",
  ].join("\n");
  const html = `<div style="font-family:-apple-system,'Hiragino Sans',sans-serif;line-height:1.8;color:#1B2540;max-width:520px">
<p>Zaibase受験をお使いいただき、ありがとうございます。<br>お知らせメールの受け取りにご同意いただいたので、月に1回だけお送りします。</p>
<p><b>今月のヒント：</b>やる気の出ない日は、「1問だけでOK」から。ホームの「気が重い日は、1問だけでOK」を開くと、やさしい問題を1問だけ解いて終われます。</p>
<p><b>無料でできること</b><br>・問題集は1教科10問まで／教科書は10単元まで（解説はすべて読めます）<br>・そのあとの単元も、導入と最初の節は「ためし読み」できます</p>
<p>PRO・MAXにすると、全教科の教科書・全問題・志望校コース・聞き流しが使えます。（iPhone・iPadは、はじめての方は最初の1か月500円。いつでも解約できます）</p>
<p><a href="${APP_URL}" style="display:inline-block;background:#F97316;color:#fff;text-decoration:none;font-weight:bold;padding:12px 22px;border-radius:999px">くわしく見る</a></p>
<hr style="border:none;border-top:1px solid #E2E8F0;margin:24px 0">
<p style="font-size:12px;color:#64748B">このメールは、お知らせメールの受け取りにご同意いただいた方へ、月に1回お送りしています。<br>
<a href="${unsub}">こちらから配信を停止</a>できます（1クリックで完了します）。<br><br>
運営：南條 雅哉 / Zaibase Group　${ADDRESS}<br>お問い合わせ：info@zaibase.group</p></div>`;
  return { subject, text, html, unsub };
}

async function sendViaResend(to, mail, apiKey) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM,
      to: [to],
      subject: mail.subject,
      text: mail.text,
      html: mail.html,
      headers: {
        "List-Unsubscribe": `<${mail.unsub}>`,
        "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
      },
    }),
    signal: AbortSignal.timeout(10000),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${(await res.text()).slice(0, 200)}`);
}

async function runWinback() {
  const enabled = process.env.WINBACK_ENABLED === "1";
  const db = admin.firestore();
  const rcKey = REVENUECAT_SECRET_KEY.value();
  const resendKey = enabled ? RESEND_API_KEY.value() : "";
  const now = Date.now();
  const minGap = MIN_DAYS_BETWEEN * 24 * 3600 * 1000;

  let seen = 0, candidates = 0, sent = 0, skipped = 0, failed = 0;
  let pageToken;
  do {
    const page = await admin.auth().listUsers(1000, pageToken);
    pageToken = page.pageToken;
    for (const u of page.users) {
      if (seen >= MAX_USERS_PER_RUN) { pageToken = undefined; break; }
      seen++;
      // 実アカウント（メールあり・匿名でない・無効化されていない）だけ
      if (!u.email || u.disabled || u.providerData.length === 0) continue;

      const state = await subscriberState(u.uid, rcKey);
      if (state !== "lapsed" && state !== "never") continue;
      // 解約した人には「再開のご案内」を、まだ契約していない人には、お知らせメールに同意した人だけに送る
      if (state === "never") {
        const consent = await db.collection("emailConsent").doc(u.uid).get();
        if (!(consent.exists && consent.data().marketing === true)) continue;
      }
      candidates++;

      const optOut = await db.collection("emailOptOut").doc(u.uid).get();
      if (optOut.exists) { skipped++; continue; }
      const logRef = db.collection("winbackLog").doc(u.uid);
      const log = await logRef.get();
      const last = log.exists ? log.data().lastSentAt?.toMillis?.() ?? 0 : 0;
      if (now - last < minGap) { skipped++; continue; }

      if (!enabled) {
        console.log(`winback[ドライラン]: 送る予定(${state}) ${u.email.replace(/^(.).*(@.*)$/, "$1***$2")}`);
        continue;
      }
      try {
        await sendViaResend(u.email, state === "lapsed" ? buildEmail(u.uid) : buildFreeEmail(u.uid), resendKey);
        await logRef.set({ lastSentAt: admin.firestore.FieldValue.serverTimestamp(), count: admin.firestore.FieldValue.increment(1) }, { merge: true });
        sent++;
      } catch (e) {
        failed++;
        console.error("winback: 送信失敗", e?.message);
      }
    }
  } while (pageToken);

  console.log(`winback: 確認 ${seen}人 / 対象 ${candidates}人 / 送信 ${sent}通 / 見送り ${skipped}人 / 失敗 ${failed}通 / モード ${enabled ? "本番" : "ドライラン"}`);
  return { seen, candidates, sent, skipped, failed, enabled };
}

// 毎月1日 10:00（日本時間）
exports.winbackMonthly = onSchedule(
  { schedule: "0 10 1 * *", timeZone: "Asia/Tokyo", region: "asia-northeast1", timeoutSeconds: 540, memory: "512MiB",
    secrets: [RESEND_API_KEY, WINBACK_SIGNING_KEY, REVENUECAT_SECRET_KEY] },
  async () => { await runWinback(); }
);

// お知らせメールの同意の記録。登録画面のチェックから呼ばれる。実アカウント（匿名でない）だけ。
exports.setMarketingConsent = onCall({ region: "asia-northeast1" }, async (req) => {
  const uid = req.auth?.uid;
  if (!uid) throw new HttpsError("unauthenticated", "ログインが必要です");
  if (req.auth?.token?.firebase?.sign_in_provider === "anonymous") {
    throw new HttpsError("failed-precondition", "アカウント登録のあとに設定できます");
  }
  const consent = req.data?.consent === true;
  await admin.firestore().collection("emailConsent").doc(uid).set(
    { marketing: consent, at: admin.firestore.FieldValue.serverTimestamp() },
    { merge: true }
  );
  // 同意しなおしたときは、前の配信停止を解除する（本人が選び直したため）
  if (consent) await admin.firestore().collection("emailOptOut").doc(uid).delete().catch(() => {});
  return { ok: true };
});

// 配信停止（メールのリンクから開く。ログイン不要・1クリック）
exports.unsubscribeEmail = onRequest(
  { region: "asia-northeast1", secrets: [WINBACK_SIGNING_KEY], cors: false },
  async (req, res) => {
    const uid = String(req.query.u ?? "");
    const s = String(req.query.s ?? "");
    const page = (title, body) =>
      `<!doctype html><html lang="ja"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><body style="font-family:-apple-system,'Hiragino Sans',sans-serif;max-width:480px;margin:48px auto;padding:0 20px;line-height:1.8;color:#1B2540"><h1 style="font-size:20px">${title}</h1><p>${body}</p></body></html>`;
    let ok = false;
    try {
      const expect = sign(uid);
      ok = uid.length > 0 && s.length === expect.length && crypto.timingSafeEqual(Buffer.from(s), Buffer.from(expect));
    } catch { ok = false; }
    if (!ok) { res.status(400).send(page("リンクが正しくありません", "お手数ですが、info@zaibase.group までご連絡ください。")); return; }
    // メールのプレビューなどでリンクが先に開かれても停止してしまわないよう、実際の停止は POST（List-Unsubscribe-Post）か、
    // 画面のボタンで行う。GET は確認画面だけを出す。
    if (req.method === "POST" && req.body?.confirm !== "no") {
      await admin.firestore().collection("emailOptOut").doc(uid).set({ at: admin.firestore.FieldValue.serverTimestamp() }, { merge: true });
      res.status(200).send(page("配信を停止しました", "今後、このメールはお送りしません。ご利用ありがとうございました。"));
      return;
    }
    res.status(200).send(
      `<!doctype html><html lang="ja"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>配信停止</title><body style="font-family:-apple-system,'Hiragino Sans',sans-serif;max-width:480px;margin:48px auto;padding:0 20px;line-height:1.8;color:#1B2540"><h1 style="font-size:20px">配信を停止しますか？</h1><p>Zaibase受験からの、月に1回のお知らせメールを停止します。</p><form method="POST"><button style="background:#0369A1;color:#fff;border:none;border-radius:10px;padding:12px 22px;font-size:16px;font-weight:bold">配信を停止する</button></form></body></html>`
    );
  }
);

module.exports.__test = { buildEmail, buildFreeEmail, subscriberState };
