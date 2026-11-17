/**
 * iOS の App Attest で「本物のアプリ」だけに Firebase App Check のトークンを出す。
 *
 * 目的：アプリを経由しない自動登録（Firebase の公開APIを直接たたく）や、
 *       改造・偽のアプリから、無料のAI枠を使わせないこと。顔などの個人データは一切使わない。
 *
 * 流れ（Apple の公式手順どおり）
 *  1. appAttestChallenge … 一度きりの challenge（乱数）を出す
 *  2. appAttestRegister  … 【アプリのインストールごとに1回】端末の鍵の証明書（attestation）を検証して保存
 *  3. appAttestToken     … 【トークン更新のたび】署名（assertion）を検証して、App Check トークンを発行
 *
 * トークンは Admin SDK の createToken で作る（Firebase の「カスタム プロバイダ」）。
 * 発行された後は、Firebase の標準の仕組みで req.app に入る（enforceAppCheck を使うとき・使わないときの両方で）。
 *
 * ⚠️ 実機でしか確かめられない部分（Apple の本物の証明書）がある。コードの論理は、
 *    自作の模擬の証明書で検証済みだが、本番の初回は「ログを見ながら」有効にすること。
 *
 * 必要な設定（Functions の環境変数。functions/.env など。秘密ではない）
 *   APPLE_TEAM_ID        … Apple Developer の Team ID（10文字）
 *   APP_CHECK_APP_ID     … App Check のトークンを発行する Firebase アプリID（1:123…:ios:… または :web:…）
 *   APP_ATTEST_ENV       … "production"（既定）または "development"（Xcode で直接入れた開発ビルド）
 *   APP_ATTEST_BUNDLE_ID … 省略すると com.zaibase.exam
 * 発行には、Functions の実行サービスアカウントに「サービス アカウント トークン作成者」の役割が要る
 * （自分自身に付ける。App Check の createToken が署名のために使う）。
 */
const crypto = require("crypto");
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { onSchedule } = require("firebase-functions/v2/scheduler");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin");
const { FieldValue, Timestamp } = require("firebase-admin/firestore");

// Apple App Attestation Root CA（自己署名・P-384・2045年まで）。
// 出典：Apple 公式の https://www.apple.com/certificateauthority/Apple_App_Attestation_Root_CA.pem と同じ内容のはず。
// 公開のライブラリからの転記。SHA-256 指紋は 1C:B9:82:3B:A2:8B:A6:AD:… で始まる（Apple 公式の値と照らして確かめること）。
const APPLE_ROOT_PEM = `-----BEGIN CERTIFICATE-----
MIICITCCAaegAwIBAgIQC/O+DvHN0uD7jG5yH2IXmDAKBggqhkjOPQQDAzBSMSYw
JAYDVQQDDB1BcHBsZSBBcHAgQXR0ZXN0YXRpb24gUm9vdCBDQTETMBEGA1UECgwK
QXBwbGUgSW5jLjETMBEGA1UECAwKQ2FsaWZvcm5pYTAeFw0yMDAzMTgxODMyNTNa
Fw00NTAzMTUwMDAwMDBaMFIxJjAkBgNVBAMMHUFwcGxlIEFwcCBBdHRlc3RhdGlv
biBSb290IENBMRMwEQYDVQQKDApBcHBsZSBJbmMuMRMwEQYDVQQIDApDYWxpZm9y
bmlhMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAERTHhmLW07ATaFQIEVwTtT4dyctdh
NbJhFs/Ii2FdCgAHGbpphY3+d8qjuDngIN3WVhQUBHAoMeQ/cLiP1sOUtgjqK9au
Yen1mMEvRq9Sk3Jm5X8U62H+xTD3FE9TgS41o0IwQDAPBgNVHRMBAf8EBTADAQH/
MB0GA1UdDgQWBBSskRBTM72+aEH/pwyp5frq5eWKoTAOBgNVHQ8BAf8EBAMCAQYw
CgYIKoZIzj0EAwMDaAAwZQIwQgFGnByvsiVbpTKwSga0kP0e8EeDS4+sQmTvb7vn
53O5+FRXgeLhpJ06ysC5PrOyAjEAp5U4xDgEgllF7En3VcE3iexZZtKeYnpqtijV
oyFraWVIyd/dganmrduC1bmTBGwD
-----END CERTIFICATE-----`;

const CHALLENGE_TTL_MS = 5 * 60 * 1000;
const APPATTEST_OID = "1.2.840.113635.100.8.2";

// ── 最小の CBOR 読み取り（App Attest が使う型だけ：整数・バイト列・文字列・配列・連想配列） ──
function cborDecode(buf) {
  let pos = 0;
  function read() {
    const b = buf[pos++];
    const major = b >> 5;
    let info = b & 0x1f;
    let val;
    if (info < 24) val = info;
    else if (info === 24) val = buf[pos++];
    else if (info === 25) { val = buf.readUInt16BE(pos); pos += 2; }
    else if (info === 26) { val = buf.readUInt32BE(pos); pos += 4; }
    else throw new Error("cbor: unsupported length");
    switch (major) {
      case 0: return val;
      case 1: return -1 - val;
      case 2: { const out = buf.subarray(pos, pos + val); pos += val; return Buffer.from(out); }
      case 3: { const out = buf.toString("utf8", pos, pos + val); pos += val; return out; }
      case 4: { const arr = []; for (let i = 0; i < val; i++) arr.push(read()); return arr; }
      case 5: { const m = {}; for (let i = 0; i < val; i++) { const k = read(); m[k] = read(); } return m; }
      default: throw new Error("cbor: unsupported type");
    }
  }
  const v = read();
  return v;
}

const sha256 = (data) => crypto.createHash("sha256").update(data).digest();

function config() {
  const teamId = process.env.APPLE_TEAM_ID;
  const bundleId = process.env.APP_ATTEST_BUNDLE_ID || "com.zaibase.exam";
  const appCheckAppId = process.env.APP_CHECK_APP_ID;
  const env = process.env.APP_ATTEST_ENV === "development" ? "development" : "production";
  return { teamId, bundleId, appCheckAppId, env, appId: teamId ? `${teamId}.${bundleId}` : null };
}

/** DER の中から、Apple の nonce 拡張（OID 1.2.840.113635.100.8.2）の値（32バイト）を取り出す */
function extractNonceFromCert(cert) {
  // X509Certificate は拡張を構造では返さないので、DER をたどる。
  // 拡張の値は OCTET STRING の中に「SEQUENCE { [1] { OCTET STRING(32) } }」が入っている。
  const der = cert.raw;
  const oid = Buffer.from([0x06, 0x09, 0x2a, 0x86, 0x48, 0x86, 0xf7, 0x63, 0x64, 0x08, 0x02]);
  const i = der.indexOf(oid);
  if (i < 0) throw new Error("nonce 拡張がない");
  let p = i + oid.length;
  // 省略可能な critical BOOLEAN
  if (der[p] === 0x01) p += 3;
  if (der[p] !== 0x04) throw new Error("拡張の形が違う");
  // OCTET STRING の長さをとばす
  p++;
  p += der[p] & 0x80 ? 1 + (der[p] & 0x7f) : 1;
  // SEQUENCE
  if (der[p] !== 0x30) throw new Error("拡張の SEQUENCE がない");
  p++;
  p += der[p] & 0x80 ? 1 + (der[p] & 0x7f) : 1;
  // [1] 明示タグ
  if (der[p] !== 0xa1) throw new Error("拡張の [1] がない");
  p++;
  p += der[p] & 0x80 ? 1 + (der[p] & 0x7f) : 1;
  // OCTET STRING(32)
  if (der[p] !== 0x04 || der[p + 1] !== 0x20) throw new Error("nonce の形が違う");
  return der.subarray(p + 2, p + 2 + 32);
}

/** 公開鍵を「04 || x || y」（非圧縮点）にする。keyId はそのSHA256 */
function uncompressedPoint(publicKey) {
  const jwk = publicKey.export({ format: "jwk" });
  const x = Buffer.from(jwk.x, "base64url");
  const y = Buffer.from(jwk.y, "base64url");
  return Buffer.concat([Buffer.from([0x04]), x, y]);
}

/**
 * Apple の手順どおり attestation を検証する。成功すると、保存用の公開鍵（PEM）を返す。
 * @param opts { keyIdB64, attestationB64, challenge, appId, env, rootPem, now }
 */
function verifyAttestation(opts) {
  const { keyIdB64, attestationB64, challenge, appId, env, rootPem = APPLE_ROOT_PEM, now = new Date() } = opts;
  const obj = cborDecode(Buffer.from(attestationB64, "base64"));
  if (obj.fmt !== "apple-appattest") throw new Error("fmt が違う");
  const x5c = obj.attStmt && obj.attStmt.x5c;
  if (!Array.isArray(x5c) || x5c.length < 2) throw new Error("x5c が足りない");
  const authData = obj.authData;

  // 1. 証明書の鎖：葉 → 中間 → Apple のルート
  const leaf = new crypto.X509Certificate(x5c[0]);
  const inter = new crypto.X509Certificate(x5c[1]);
  const root = new crypto.X509Certificate(rootPem);
  if (!leaf.verify(inter.publicKey)) throw new Error("葉の署名が中間証明書と合わない");
  if (!inter.verify(root.publicKey)) throw new Error("中間の署名がルートと合わない");
  if (!leaf.checkIssued(inter) || !inter.checkIssued(root)) throw new Error("発行者が合わない");
  for (const c of [leaf, inter, root]) {
    if (now < new Date(c.validFrom) || now > new Date(c.validTo)) throw new Error("証明書の有効期間外");
  }

  // 2. nonce = SHA256(authData || SHA256(challenge)) が、葉証明書の拡張と一致
  const clientDataHash = sha256(Buffer.from(challenge, "utf8"));
  const nonce = sha256(Buffer.concat([authData, clientDataHash]));
  const certNonce = extractNonceFromCert(leaf);
  if (!crypto.timingSafeEqual(nonce, certNonce)) throw new Error("nonce が合わない");

  // 3. keyId = SHA256(公開鍵の非圧縮点)
  const point = uncompressedPoint(leaf.publicKey);
  const keyId = Buffer.from(keyIdB64, "base64");
  if (!crypto.timingSafeEqual(sha256(point), keyId)) throw new Error("keyId が公開鍵と合わない");

  // 4. authData：rpIdHash（TeamID.BundleID）・counter=0・aaguid・credentialId
  const rpIdHash = authData.subarray(0, 32);
  if (!crypto.timingSafeEqual(rpIdHash, sha256(Buffer.from(appId, "utf8")))) throw new Error("App ID が合わない");
  const counter = authData.readUInt32BE(33);
  if (counter !== 0) throw new Error("counter が 0 ではない");
  const aaguid = authData.subarray(37, 53);
  const expectAaguid = Buffer.alloc(16);
  expectAaguid.write(env === "development" ? "appattestdevelop" : "appattest", "utf8");
  if (!crypto.timingSafeEqual(aaguid, expectAaguid)) throw new Error("aaguid が環境と合わない");
  const credLen = authData.readUInt16BE(53);
  const credId = authData.subarray(55, 55 + credLen);
  if (!crypto.timingSafeEqual(credId, keyId)) throw new Error("credentialId が keyId と合わない");

  return { publicKeyPem: leaf.publicKey.export({ format: "pem", type: "spki" }) };
}

/** assertion を検証する。成功すると、新しい counter を返す */
function verifyAssertion(opts) {
  const { assertionB64, challenge, appId, publicKeyPem, lastCounter } = opts;
  const obj = cborDecode(Buffer.from(assertionB64, "base64"));
  const sig = obj.signature;
  const authData = obj.authenticatorData;
  if (!Buffer.isBuffer(sig) || !Buffer.isBuffer(authData) || authData.length < 37) throw new Error("assertion の形が違う");
  const clientDataHash = sha256(Buffer.from(challenge, "utf8"));
  const nonce = sha256(Buffer.concat([authData, clientDataHash]));
  const ok = crypto.createVerify("SHA256").update(nonce).verify(publicKeyPem, sig);
  if (!ok) throw new Error("署名が合わない");
  if (!crypto.timingSafeEqual(authData.subarray(0, 32), sha256(Buffer.from(appId, "utf8")))) throw new Error("App ID が合わない");
  const counter = authData.readUInt32BE(33);
  if (counter <= lastCounter) throw new Error("counter が進んでいない（使い回し）");
  return { counter };
}

// ── 一度きりの challenge ──
const db = () => admin.firestore();

async function issueChallenge() {
  const id = crypto.randomBytes(24).toString("base64url");
  await db().collection("appAttestChallenges").doc(id).set({
    createdAt: FieldValue.serverTimestamp(),
    expiresAt: Timestamp.fromMillis(Date.now() + CHALLENGE_TTL_MS),
  });
  return id;
}

/** challenge を1回だけ使えるようにして消費する。期限切れ・未発行・使用済みは失敗 */
async function consumeChallenge(id) {
  if (typeof id !== "string" || id.length < 20 || id.length > 80) throw new HttpsError("invalid-argument", "challenge が不正です");
  const ref = db().collection("appAttestChallenges").doc(id);
  await db().runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    if (!snap.exists) throw new HttpsError("failed-precondition", "challenge が見つかりません");
    if (snap.data().expiresAt.toMillis() < Date.now()) throw new HttpsError("failed-precondition", "challenge の期限が切れています");
    tx.delete(ref);
  });
}

exports.appAttestChallenge = onCall({ region: "asia-northeast1" }, async () => {
  return { challenge: await issueChallenge() };
});

exports.appAttestRegister = onCall({ region: "asia-northeast1" }, async (req) => {
  const cfg = config();
  if (!cfg.teamId) throw new HttpsError("failed-precondition", "App Attest は未設定です");
  const { keyId, attestation, challenge } = req.data || {};
  if (typeof keyId !== "string" || typeof attestation !== "string") throw new HttpsError("invalid-argument", "不正な入力です");
  await consumeChallenge(challenge);
  let result;
  try {
    result = verifyAttestation({ keyIdB64: keyId, attestationB64: attestation, challenge, appId: cfg.appId, env: cfg.env });
  } catch (e) {
    logger.warn("appAttest: attestation rejected", { reason: String(e.message || e) });
    throw new HttpsError("permission-denied", "アプリの確認に失敗しました");
  }
  await db().collection("appAttestKeys").doc(sha256(Buffer.from(keyId, "base64")).toString("hex")).set({
    publicKeyPem: result.publicKeyPem,
    counter: 0,
    env: cfg.env,
    createdAt: FieldValue.serverTimestamp(),
  });
  return { ok: true };
});

exports.appAttestToken = onCall({ region: "asia-northeast1" }, async (req) => {
  const cfg = config();
  if (!cfg.teamId || !cfg.appCheckAppId) throw new HttpsError("failed-precondition", "App Attest は未設定です");
  const { keyId, assertion, challenge } = req.data || {};
  if (typeof keyId !== "string" || typeof assertion !== "string") throw new HttpsError("invalid-argument", "不正な入力です");
  await consumeChallenge(challenge);
  const ref = db().collection("appAttestKeys").doc(sha256(Buffer.from(keyId, "base64")).toString("hex"));
  let newCounter;
  await db().runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    if (!snap.exists) throw new HttpsError("not-found", "この端末の鍵は未登録です");
    const d = snap.data();
    try {
      newCounter = verifyAssertion({ assertionB64: assertion, challenge, appId: cfg.appId, publicKeyPem: d.publicKeyPem, lastCounter: d.counter }).counter;
    } catch (e) {
      logger.warn("appAttest: assertion rejected", { reason: String(e.message || e) });
      throw new HttpsError("permission-denied", "アプリの確認に失敗しました");
    }
    tx.update(ref, { counter: newCounter, lastUsedAt: FieldValue.serverTimestamp() });
  });
  const ttlMillis = 60 * 60 * 1000; // 1時間（クライアントは期限の少し前に更新する）
  const { token } = await admin.appCheck().createToken(cfg.appCheckAppId, { ttlMillis });
  return { token, ttlMillis };
});

/**
 * 期限の過ぎた challenge を、6 時間ごとに消す。
 * appAttestChallenge はログインなしで呼べるので、大量に呼ばれても、データが溜まり続けないようにする。
 * （Firestore の TTL ポリシーを設定しなくても、これで消える。TTL を設定した場合は、二重になるだけで害はない。）
 */
exports.cleanupAppAttestChallenges = onSchedule(
  { schedule: "every 6 hours", region: "asia-northeast1", timeZone: "Asia/Tokyo" },
  async () => {
    const col = db().collection("appAttestChallenges");
    let removed = 0;
    for (let round = 0; round < 20; round++) {
      const snap = await col.where("expiresAt", "<", Timestamp.now()).limit(400).get();
      if (snap.empty) break;
      const batch = db().batch();
      snap.docs.forEach((d) => batch.delete(d.ref));
      await batch.commit();
      removed += snap.size;
      if (snap.size < 400) break;
    }
    logger.info("appAttest: expired challenges removed", { removed });
  }
);

exports._test = { cborDecode, verifyAttestation, verifyAssertion, extractNonceFromCert, APPLE_ROOT_PEM };
