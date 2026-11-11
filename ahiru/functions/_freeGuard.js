// 無料の「AI」の枠を、使い捨てメールで何度も使われないようにする共通部品。
// 守りは3つ。
//  1. 使い捨てメールのドメインには、無料の枠を出さない（assertNotDisposable）
//  2. 同じメールアドレスの「別名」（gmail の + や . での別名）では、無料体験を二度使わせない（claimTrialForEmail）
//  3. 無料の枠の「全体の1日の上限」。上限に達したら、その日の無料は終わり（takeGlobalFree）
//     → 悪意のある人が大量にアカウントを作っても、無料のAI費用は上限までで止まる
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

/**
 * 同じメール（別名をそろえたもの）で、無料体験を二度使わせない。
 * transaction の中で呼ぶ。同じ人（uid）がやり直したときは通す。
 * メールが無いアカウント（匿名など）は、ここでは見ない。
 */
async function claimTrialForEmail(db, tx, req, kind) {
  const email = req.auth?.token?.email;
  if (!email) return;
  const key = crypto.createHash("sha256").update(`${kind}:${normalizeEmail(email)}`).digest("hex");
  const ref = db.collection("freeTrialEmails").doc(key);
  const snap = await tx.get(ref);
  if (snap.exists && snap.data()?.uid !== req.auth.uid) {
    throw new HttpsError("permission-denied", "このメールアドレスでは、無料体験をすでに使われています。");
  }
  if (!snap.exists) tx.set(ref, { uid: req.auth.uid, kind, createdAt: FieldValue.serverTimestamp() });
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

module.exports = { normalizeEmail, isDisposableEmail, assertNotDisposable, claimTrialForEmail, takeGlobalFree, giveBackGlobalFree };
