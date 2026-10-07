import { getAuthUid, getFirestoreDb, isFirebaseConfigured, callFirebaseFunction } from './firebaseClient';

const COLLECTION = 'formulaUnlocks';

/**
 * ログイン中ユーザーが単発課金（¥50買い切り）で解放済みの公式集formulaId一覧を取得する。
 * Firestore未設定・未ログイン・オフライン時は空集合を返す（内容は既定でロック扱いになる）。
 */
export async function getUnlockedFormulaIds(opts?: { strict?: boolean }): Promise<Set<string>> {
  if (!isFirebaseConfigured()) return new Set();
  try {
    const uid = await getAuthUid();
    if (!uid) return new Set();
    const db = await getFirestoreDb();
    const { doc, getDoc } = await import('firebase/firestore');
    const snap = await getDoc(doc(db, COLLECTION, uid));
    const data = snap.data() as { unlocked?: string[] } | undefined;
    return new Set(data?.unlocked ?? []);
  } catch (e) {
    // 購入の直前の確認では、読めなかったことを「解放済みが0件」と取りちがえない（解放済みをもう一度買ってしまう）
    if (opts?.strict) throw e;
    return new Set();
  }
}

/**
 * 購入成功（RevenueCatが決済を確認した）後に呼ぶ。クライアントから直接Firestoreへ
 * 書き込むのではなく、Cloud Function（unlockContent）にRevenueCatの購入実績との
 * 突き合わせを行わせてから解放してもらう。購入が確認できない場合は例外を投げる。
 */
/**
 * 購入の「前」に呼ぶ。すでに払ってあるのに、まだどの項目にも使われていない購入分（承認待ちが後から通った・
 * 確認の前にアプリが落ちた等）があれば、課金せずにそれで解放する。解放できたら true。
 * 無ければ false（そのとき初めて課金に進む）。確認そのものができなかったときは例外を投げる
 * （確かめないまま買うと、払った分を使わずに二重に払うことがあるため、呼び出し側は購入を止める）。
 */
export async function claimExistingFormulaCredit(figureId: string, kind: 'formula' | 'bundle' = 'formula'): Promise<boolean> {
  if (!isFirebaseConfigured()) return false;
  const res = await callFirebaseFunction<{ type: 'formula' | 'bundle'; itemId: string; noWait: true }, { ok: boolean; unlocked?: boolean; reason?: string }>(
    'unlockContent',
    { type: kind, itemId: figureId, noWait: true },
  );
  return res.ok === true;
}

export async function markFormulaUnlocked(figureId: string, kind: 'formula' | 'bundle' = 'formula'): Promise<void> {
  if (!isFirebaseConfigured()) return;
  await callFirebaseFunction<{ type: 'formula' | 'bundle'; itemId: string }, { ok: true }>('unlockContent', {
    type: kind,
    itemId: figureId,
  });
}
