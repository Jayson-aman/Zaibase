import { Platform } from 'react-native';
import { getAuthUid, getFirestoreDb, isFirebaseConfigured } from './firebaseClient';

const COLLECTION = 'accessEvents';

export type AccessTier = 'free' | 'pro' | 'max';

/**
 * Web版だけ、同じ操作を Vercel Web Analytics のカスタムイベントにも送る
 * （ペイウォールを開いた・プランをタップ・購入できた、などを、アクセス数と同じ画面で見られる）。
 * ・個人を特定する値（uid・メールアドレス・エラー文）は送らない。送るのは、操作の名前と、プラン・種類・お試し価格の有無だけ。
 * ・Analytics が無効、またはスクリプトが読みこまれていないときは、何も起きない（window.va が無いだけ）。
 */
function trackWebEvent(event: string, meta: AccessEventMeta): void {
  if (Platform.OS !== 'web' || typeof window === 'undefined') return;
  try {
    const va = (window as unknown as { va?: (cmd: string, arg: unknown) => void }).va;
    if (typeof va !== 'function') return;
    const data: Record<string, string> = { kind: meta.mode, tier: meta.tier };
    if (meta.subject) data.plan = String(meta.subject).slice(0, 32);
    // 詳細（examType の欄）は、'intro'・'full' のような短い語だけを送る。エラー文（E…:…）は送らない
    if (meta.examType && /^(intro|full)$/.test(meta.examType)) data.detail = meta.examType;
    va('event', { name: event.slice(0, 64), data });
  } catch {
    // 集計のために、画面を止めない
  }
}

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
  trackWebEvent(event, meta);
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
