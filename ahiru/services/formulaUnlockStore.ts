import { getAuthUid, getFirestoreDb, isFirebaseConfigured, callFirebaseFunction } from './firebaseClient';

const COLLECTION = 'formulaUnlocks';

/**
 * ログイン中ユーザーが単発課金（¥50買い切り）で解放済みの公式集formulaId一覧を取得する。
 * Firestore未設定・未ログイン・オフライン時は空集合を返す（内容は既定でロック扱いになる）。
 */
export async function getUnlockedFormulaIds(): Promise<Set<string>> {
  if (!isFirebaseConfigured()) return new Set();
  try {
    const uid = await getAuthUid();
    if (!uid) return new Set();
    const db = await getFirestoreDb();
    const { doc, getDoc } = await import('firebase/firestore');
    const snap = await getDoc(doc(db, COLLECTION, uid));
    const data = snap.data() as { unlocked?: string[] } | undefined;
    return new Set(data?.unlocked ?? []);
  } catch {
    return new Set();
  }
}

/**
 * 購入成功（RevenueCatが決済を確認した）後に呼ぶ。クライアントから直接Firestoreへ
 * 書き込むのではなく、Cloud Function（unlockContent）にRevenueCatの購入実績との
 * 突き合わせを行わせてから解放してもらう。購入が確認できない場合は例外を投げる。
 */
export async function markFormulaUnlocked(figureId: string): Promise<void> {
  if (!isFirebaseConfigured()) return;
  await callFirebaseFunction<{ type: 'formula'; itemId: string }, { ok: true }>('unlockContent', {
    type: 'formula',
    itemId: figureId,
  });
}
