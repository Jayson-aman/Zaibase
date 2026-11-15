// 無料の「AI」の枠を、使い捨てメールで何度も使われないようにする共通部品。
// 守りは次のとおり。
//  1. 使い捨てメールのドメインには、無料の枠を出さない（assertNotDisposable）
//  2. 同じメールアドレスの「別名」（gmail の + や . での別名）では、無料体験を二度使わせない（claimFreeIdentity）
//  3. 番号だけが違うメール（test1・test2・test3@gmail.com）は「同じ人」とみなし、無料体験は1つだけ（claimFreeIdentity）
//  4. 同じ端末（アプリが作る端末ID）で無料を使えるアカウントは3つまで（claimFreeIdentity）
//  5. 独自ドメイン（gmail・Yahoo などの大手以外）は、1ドメインで使える無料のアカウント数に上限（claimFreeIdentity）
//  6. 同じネットワーク（IP）から1日に新しく無料を使えるアカウント数に上限（claimFreeIdentity）
//  7. 無料の枠の「全体の1日の上限」。上限に達したら、その日の無料は終わり（takeGlobalFree）
//     → 悪意のある人が大量にアカウントを作っても、無料のAI費用は上限までで止まる
//  8. 無料の英会話（1人1日3回）は、番号違いのメール・同じ端末・同じ独自ドメインで1日の回数を共有する（takeFreeDailyGroups）
// 有料の人（Max・英単語Pro）には一切かからない。
const crypto = require("crypto");
const { HttpsError } = require("firebase-functions/v2/https");
const { FieldValue } = require("firebase-admin/firestore");
const { jstDay } = require("./_usage");
const DISPOSABLE = new Set(require("./_disposableDomains"));

/** メールの比べるための形にそろえる（大文字小文字・gmail の「.」と「+別名」を無視） */
function normalizeEmail(email) {
  const e = String(email || "").trim().toLowerCase();
  const at = e.lastIndexOf("@");
  if (at < 1) return e;
  let local = e.slice(0, at);
  let domain = e.slice(at + 1);
  local = local.split("+")[0];
  if (domain === "googlemail.com") domain = "gmail.com";
  if (domain === "gmail.com") local = local.replace(/\./g, "");
  return `${local}@${domain}`;
}

function emailDomain(email) {
  const e = String(email || "").trim().toLowerCase();
  const at = e.lastIndexOf("@");
  return at < 0 ? "" : e.slice(at + 1);
}

/** 使い捨てメールか。サブドメイン（xxx.mailinator.com）も同じ扱い */
function isDisposableEmail(email) {
  const d = emailDomain(email);
  if (!d) return false;
  const parts = d.split(".");
  for (let i = 0; i < parts.length - 1; i++) {
    if (DISPOSABLE.has(parts.slice(i).join("."))) return true;
  }
  return false;
}

/** 使い捨てメールのアカウントには、無料の枠を出さない */
function assertNotDisposable(req, what) {
  const email = req.auth?.token?.email;
  if (email && isDisposableEmail(email)) {
    throw new HttpsError(
      "permission-denied",
      `${what}は、使い捨てメールアドレスではご利用いただけません。ふだん使っているメールアドレスで登録しなおしてください。`
    );
  }
}

// ── 大手のメール。ここにあるドメインは、1ドメインあたりの上限を数えない ──
const MAJOR_DOMAINS = new Set([
  "gmail.com", "yahoo.co.jp", "yahoo.com", "icloud.com", "me.com", "mac.com",
  "outlook.com", "outlook.jp", "hotmail.com", "hotmail.co.jp", "live.jp", "live.com", "msn.com",
  "docomo.ne.jp", "ezweb.ne.jp", "au.com", "softbank.ne.jp", "i.softbank.jp", "ymobile.ne.jp",
  "nifty.com", "biglobe.ne.jp", "ocn.ne.jp", "excite.co.jp", "ybb.ne.jp", "plala.or.jp", "zaq.ne.jp",
]);

// 上限（環境変数で、デプロイなしに近い手間で変えられる）
function envNum(name, def) {
  const n = Number(process.env[name]);
  return Number.isFinite(n) && n > 0 ? n : def;
}
const DEVICE_CAP = () => envNum("FREE_DEVICE_CAP", 3);      // 1台で無料を使えるアカウント数
const DOMAIN_CAP = () => envNum("FREE_DOMAIN_CAP", 5);      // 独自ドメイン1つで無料を使えるアカウント数
const IP_DAILY_CAP = () => envNum("FREE_IP_DAILY_CAP", 20); // 同じネットワークから1日に新しく無料を使えるアカウント数

function sha(text) {
  return crypto.createHash("sha256").update(text).digest("hex");
}

/**
 * 番号だけが違うメール（test1・test2・test3@gmail.com）を同じ人とみなすための「型」。
 * 別名（+・gmail の .）をそろえたあと、本体の最後の数字と区切りを取りのぞく。
 * 本体が3文字未満（a1・ab2 など）のときは、型にしない（無関係な人どうしが同じ型になってしまうため）。
 */
function patternKey(email) {
  const n = normalizeEmail(email);
  const at = n.lastIndexOf("@");
  if (at < 1) return null;
  const local = n.slice(0, at);
  const domain = n.slice(at + 1);
  const base = local.replace(/[._-]*\d+$/, "").replace(/[._-]+$/, "");
  if (base.length < 3) return null;
  return sha(`pattern:${base}@${domain}`);
}

/** アプリが作る端末ID。形がおかしければ無視する（無いときは、端末の上限だけ見ない） */
function cleanDeviceId(v) {
  const s = typeof v === "string" ? v.trim() : "";
  return /^[A-Za-z0-9_-]{16,80}$/.test(s) ? s : null;
}

/** 呼び出し元のIP。Cloud Functions の前段が付ける x-forwarded-for の先頭を使う */
function clientIp(req) {
  const h = req.rawRequest?.headers?.["x-forwarded-for"];
  const first = typeof h === "string" ? h.split(",")[0].trim() : "";
  return first || req.rawRequest?.ip || "";
}

/**
 * 無料体験を使うときの「同じ人・同じ端末」の確認。transaction の中で呼ぶ（読む→確かめる→書く の順）。
 * 同じ人（uid）がやり直したときは通す。
 *  - 同じメール（別名をそろえたもの）／番号だけが違うメール … 別の人（uid）が先に使っていたら断る
 *  - 同じ端末／独自ドメイン／同じネットワークの1日 … 使えるアカウントの数が上限なら断る
 */
async function claimFreeIdentity(db, tx, req, kind) {
  const uid = req.auth.uid;
  const email = req.auth?.token?.email;
  const day = jstDay();
  const checks = [];
  if (email) {
    checks.push({
      mode: "owner",
      ref: db.collection("freeTrialEmails").doc(sha(`${kind}:${normalizeEmail(email)}`)),
      msg: "このメールアドレスでは、無料体験をすでに使われています。",
    });
    const pk = patternKey(email);
    if (pk) {
      checks.push({
        mode: "owner",
        ref: db.collection("freeTrialPatterns").doc(sha(`${kind}:${pk}`)),
        msg: "番号だけが違う似たメールアドレスで、無料体験をすでに使われています。",
      });
    }
    const dom = emailDomain(email);
    if (dom && !MAJOR_DOMAINS.has(dom)) {
      checks.push({
        mode: "group",
        cap: DOMAIN_CAP(),
        ref: db.collection("freeTrialDomains").doc(sha(`${kind}:${dom}`)),
        msg: "このメールのドメインでは、無料体験を使えるアカウントの数の上限に達しています。",
      });
    }
  }
  const deviceId = cleanDeviceId(req.data?.deviceId);
  if (deviceId) {
    checks.push({
      mode: "group",
      cap: DEVICE_CAP(),
      ref: db.collection("freeTrialDevices").doc(sha(`${kind}:${deviceId}`)),
      msg: "この端末では、無料体験を使えるアカウントの数の上限に達しています。",
    });
  }
  const ip = clientIp(req);
  if (ip) {
    checks.push({
      mode: "group",
      cap: IP_DAILY_CAP(),
      ref: db.collection("freeTrialIps").doc(`${kind}_${day}_${sha(ip).slice(0, 32)}`),
      msg: "このネットワークからの、今日の無料体験の受け付けは終了しました。あしたまた試してね。",
    });
  }
  if (!checks.length) return;

  const snaps = await Promise.all(checks.map((c) => tx.get(c.ref)));
  const writes = [];
  checks.forEach((c, i) => {
    const snap = snaps[i];
    if (c.mode === "owner") {
      if (snap.exists && snap.data()?.uid !== uid) throw new HttpsError("permission-denied", c.msg);
      if (!snap.exists) writes.push([c.ref, { uid, kind, createdAt: FieldValue.serverTimestamp() }]);
    } else {
      const uids = (snap.exists && Array.isArray(snap.data()?.uids)) ? snap.data().uids : [];
      if (!uids.includes(uid)) {
        if (uids.length >= c.cap) throw new HttpsError("permission-denied", c.msg);
        writes.push([c.ref, { kind, uids: [...uids, uid], updatedAt: FieldValue.serverTimestamp() }]);
      }
    }
  });
  for (const [ref, data] of writes) tx.set(ref, data, { merge: true });
}

/**
 * 無料の英会話（1人1日3回）の「1日の回数」を、同じ人とみなせる範囲で共有する。
 *  - 番号だけが違うメール … 全員で1日3回
 *  - 同じ端末 … 全員で1日9回（兄弟などで共有しても足りる）
 *  - 独自ドメイン … 1日15回
 * 先に数えて、あとで AI が答えられなかったら takeBack で戻す。返すのは、数えた文書の一覧。
 */
async function takeFreeDailyGroups(db, req, kind, perPersonLimit) {
  const email = req.auth?.token?.email;
  const day = jstDay();
  const groups = [];
  if (email) {
    const pk = patternKey(email);
    if (pk) groups.push({ ref: db.collection("freeDaily").doc(`${kind}_${day}_pat_${pk.slice(0, 32)}`), cap: perPersonLimit, msg: "番号だけが違う似たメールアドレスと合わせて、今日の無料の回数に達しました。あしたまた試してね。" });
    const dom = emailDomain(email);
    if (dom && !MAJOR_DOMAINS.has(dom)) groups.push({ ref: db.collection("freeDaily").doc(`${kind}_${day}_dom_${sha(dom).slice(0, 32)}`), cap: perPersonLimit * 5, msg: "このメールのドメインでの、今日の無料の回数に達しました。あしたまた試してね。" });
  }
  const deviceId = cleanDeviceId(req.data?.deviceId);
  if (deviceId) groups.push({ ref: db.collection("freeDaily").doc(`${kind}_${day}_dev_${sha(deviceId).slice(0, 32)}`), cap: perPersonLimit * 3, msg: "この端末での、今日の無料の回数に達しました。あしたまた試してね。" });
  if (!groups.length) return [];
  await db.runTransaction(async (tx) => {
    const snaps = await Promise.all(groups.map((g) => tx.get(g.ref)));
    snaps.forEach((snap, i) => {
      const n = snap.exists ? snap.data().count || 0 : 0;
      if (n >= groups[i].cap) throw new HttpsError("resource-exhausted", groups[i].msg);
    });
    snaps.forEach((snap, i) => {
      const n = snap.exists ? snap.data().count || 0 : 0;
      tx.set(groups[i].ref, { kind, day, count: n + 1, cap: groups[i].cap, updatedAt: FieldValue.serverTimestamp() }, { merge: true });
    });
  });
  return groups.map((g) => g.ref);
}

/** takeFreeDailyGroups で数えた分を戻す。失敗しても例外は投げない */
async function giveBackFreeDailyGroups(db, refs) {
  if (!refs || !refs.length) return;
  try {
    await db.runTransaction(async (tx) => {
      const snaps = await Promise.all(refs.map((r) => tx.get(r)));
      snaps.forEach((snap, i) => {
        const n = snap.exists ? snap.data().count || 0 : 0;
        if (n > 0) tx.update(refs[i], { count: n - 1, updatedAt: FieldValue.serverTimestamp() });
      });
    });
  } catch (e) {
    console.error("giveBackFreeDailyGroups failed", e);
  }
}

/**
 * 無料の枠の「全体の1日の上限」。transaction で数える。上限に達していたら「今日は終わり」。
 * 上限は環境変数 FREE_CAP_<KIND>（例 FREE_CAP_TUTOR=100）で、デプロイなしに近い手間で変えられる。
 */
async function takeGlobalFree(db, kind, defaultCap, endedMessage) {
  const envCap = Number(process.env[`FREE_CAP_${kind.toUpperCase()}`]);
  const cap = Number.isFinite(envCap) && envCap > 0 ? envCap : defaultCap;
  const ref = db.collection("freeBudget").doc(`${kind}_${jstDay()}`);
  await db.runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    const n = snap.exists ? snap.data().count || 0 : 0;
    if (n >= cap) throw new HttpsError("resource-exhausted", endedMessage);
    tx.set(ref, { kind, day: jstDay(), count: n + 1, cap, updatedAt: FieldValue.serverTimestamp() }, { merge: true });
  });
}

/** 先に数えた分を1つ戻す（AIが答えられなかったとき）。失敗しても例外は投げない */
async function giveBackGlobalFree(db, kind, day = jstDay()) {
  try {
    const ref = db.collection("freeBudget").doc(`${kind}_${day}`);
    await db.runTransaction(async (tx) => {
      const snap = await tx.get(ref);
      const n = snap.exists ? snap.data().count || 0 : 0;
      if (n > 0) tx.update(ref, { count: n - 1, updatedAt: FieldValue.serverTimestamp() });
    });
  } catch (e) {
    console.error("giveBackGlobalFree failed", kind, e);
  }
}

module.exports = {
  normalizeEmail, patternKey, cleanDeviceId, isDisposableEmail, assertNotDisposable,
  claimFreeIdentity, takeFreeDailyGroups, giveBackFreeDailyGroups,
  takeGlobalFree, giveBackGlobalFree,
};
