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
