import { getAuthUid, getFirestoreDb, isFirebaseConfigured } from './firebaseClient';

const COLLECTION = 'accessEvents';

export type AccessTier = 'free' | 'pro' | 'max';

export type AccessEventMeta = {
  /** 'mock' | 'kakomon' | 'daily' | 'trial_limit' | 'session_limit' など */
  mode: string;
  subject?: string;
  examType?: string;
  tier: AccessTier;
  /** MAX限定モードで実際に閲覧できたか（false＝ロック画面を見せた） */
  blocked?: boolean;
};

/**
 * 無料/Pro/MAXユーザーが、課金対象のモードやペイウォールにどれだけ
 * 到達しているかを後から数えられるように、Firestoreへ1件だけ書き込む。
 * 失敗しても機能に影響しないよう、常に握りつぶす（ranking.tsと同じ方針）。
 */
export async function logAccessEvent(event: string, meta: AccessEventMeta): Promise<void> {
  if (!isFirebaseConfigured()) return;
  try {
    const uid = await getAuthUid();
    if (!uid) return;
    const db = await getFirestoreDb();
    const { collection, addDoc, serverTimestamp } = await import('firebase/firestore');
    await addDoc(collection(db, COLLECTION), {
      uid,
      event,
      mode: meta.mode,
      subject: meta.subject ?? null,
      examType: meta.examType ?? null,
      tier: meta.tier,
      blocked: meta.blocked ?? null,
      createdAt: serverTimestamp(),
    });
  } catch {
    // Firestore未設定・オフライン等 — 集計目的のログなので握りつぶす
  }
}

/**
 * 購入の流れ（ペイウォールを開いた→プランをタップ→購入／やめた／失敗）を記録する。
 *
 * 「190人が入れて、ペイウォールまで進んだのに、有料を使わない」理由が、どこで離れたのか
 * 分からなかった（記録が「無料枠を使い切った」だけだった）。2026/10/8に追加。
 * ⚠️ 新しいフィールドを足すと firestore.rules の accessEvents の許可リスト（hasOnly）に
 *    引っかかって書き込みがすべて失敗する。ルールの再デプロイを避けるため、既存の欄を流用する：
 *      mode     … 'subscription'（月額）／'formula'・'bundle'（公式集）／'unit'（単元）
 *      subject  … プラン（'pro'／'max'）
 *      examType … 詳細（'intro'＝お試し価格つき／'full'＝通常価格／エラー番号など。31字まで）
 *    集計はFirebase Consoleで accessEvents を event ごとに数える。
 */
export type PurchaseKind = 'subscription' | 'formula' | 'bundle' | 'unit';

export function logPurchaseEvent(
  event: string,
  kind: PurchaseKind,
  opts: { tier?: AccessTier; plan?: string; detail?: string } = {},
): void {
  void logAccessEvent(event, {
    mode: kind,
    subject: opts.plan,
    examType: opts.detail != null ? opts.detail.slice(0, 31) : undefined,
    tier: opts.tier ?? 'free',
  });
}
