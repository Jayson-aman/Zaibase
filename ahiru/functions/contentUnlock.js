/**
 * 公式集（¥50）・新規追加単元（¥100）の買い切りロック解放を、サーバー側で
 * RevenueCatの購入実績と突き合わせてから行う。
 *
 * なぜ必要か:
 *   以前はクライアントが購入成功後に直接Firestore（formulaUnlocks/unitUnlocks）へ
 *   書き込んでいたが、Firestoreルールは「本人のuidであること」しか検証しておらず、
 *   購入していなくても直接書き込めば無料で解放できてしまっていた。
 *   ここでは、クライアントからは「このitemIdを解放したい」という要求だけを受け取り、
 *   実際にRevenueCatへ問い合わせて「まだ解放していない分の購入実績が残っているか」を
 *   確認してから、サーバー（Admin SDK）だけがFirestoreに書き込む。
 *
 * 購入回数との突き合わせ方:
 *   公式集・新規追加単元はどちらも商品ID1つ（どの公式/単元を買っても同じID）を
 *   繰り返し購入する回数券モデル。RevenueCatのnon_subscriptionsは商品IDごとの
 *   購入履歴配列なので、「購入回数 > 現在解放済みの件数」であれば、まだ
 *   消費していない購入が1件あるとみなして解放する。
 */
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const { REVENUECAT_SECRET_KEY, fetchNonSubscriptionPurchaseCount } = require("./revenuecat");

const db = getFirestore();

const PRODUCT_ID_FORMULA_UNLOCK = "com.zaibase.exam.formulaunlock";
const PRODUCT_ID_UNIT_UNLOCK = "com.zaibase.exam.unitunlock";

const TYPE_CONFIG = {
  formula: { collection: "formulaUnlocks", productId: PRODUCT_ID_FORMULA_UNLOCK },
  unit: { collection: "unitUnlocks", productId: PRODUCT_ID_UNIT_UNLOCK },
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

exports.unlockContent = onCall(
  { region: "asia-northeast1", secrets: [REVENUECAT_SECRET_KEY] },
  async (req) => {
    const uid = req.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "ログインが必要です");

    const { type, itemId } = req.data ?? {};
    const config = TYPE_CONFIG[type];
    if (!config || typeof itemId !== "string" || itemId.length === 0) {
      throw new HttpsError("invalid-argument", "type/itemIdが不正です");
    }

    const docRef = db.collection(config.collection).doc(uid);
    const snap = await docRef.get();
    const alreadyUnlocked = /** @type {string[]} */ (snap.data()?.unlocked ?? []);

    // すでに解放済みなら購入確認なしでそのまま成功を返す（二重課金防止・冪等性）
    if (alreadyUnlocked.includes(itemId)) {
      return { ok: true };
    }

    // RevenueCatの購入反映には数秒のラグが起こり得るため、少し待って数回問い合わせる
    let purchaseCount = null;
    for (let attempt = 0; attempt < 4; attempt++) {
      purchaseCount = await fetchNonSubscriptionPurchaseCount(uid, config.productId);
      if (purchaseCount !== null && purchaseCount > alreadyUnlocked.length) break;
      if (attempt < 3) await sleep(1500);
    }

    if (purchaseCount === null) {
      throw new HttpsError("unavailable", "購入状況の確認に失敗しました。しばらくしてからもう一度お試しください。");
    }
    if (purchaseCount <= alreadyUnlocked.length) {
      throw new HttpsError(
        "failed-precondition",
        "購入が確認できませんでした。決済が完了してから少し時間をおいてもう一度お試しください。"
      );
    }

    await docRef.set(
      { uid, unlocked: FieldValue.arrayUnion(itemId), updatedAt: FieldValue.serverTimestamp() },
      { merge: true }
    );
    return { ok: true };
  }
);
