import { getAuthUid, getFirestoreDb, isFirebaseConfigured } from './firebaseClient';

const COLLECTION = 'unitUnlocks';

/**
 * ログイン中ユーザーが単発課金（¥100買い切り）で解放済みの単元（Lesson.id）一覧を取得する。
 * Firestore未設定・未ログイン・オフライン時は空集合を返す（内容は既定でロック扱いになる）。
 */
export async function getUnlockedUnitIds(): Promise<Set<string>> {
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
 * 購入成功（RevenueCatが決済を確認した）後に呼び、その単元を恒久的に解放済みとして記録する。
 * 書き込みに失敗した場合は呼び出し元で再試行できるよう例外を投げる。
 */
export async function markUnitUnlocked(lessonId: string): Promise<void> {
  if (!isFirebaseConfigured()) return;
  const uid = await getAuthUid();
  if (!uid) throw new Error('ログインが確認できませんでした');
  const db = await getFirestoreDb();
  const { doc, setDoc, arrayUnion, serverTimestamp } = await import('firebase/firestore');
  await setDoc(
    doc(db, COLLECTION, uid),
    { uid, unlocked: arrayUnion(lessonId), updatedAt: serverTimestamp() },
    { merge: true }
  );
}
