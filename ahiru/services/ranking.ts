import { getAuthUid, getFirestoreDb, isFirebaseConfigured } from './firebaseClient';

const COLLECTION = 'examLeaderboard';

export async function submitRankingScore(correct: number, total: number): Promise<void> {
  if (!isFirebaseConfigured() || total === 0) return;
  const uid = await getAuthUid();
  if (!uid) return;

  try {
    const db = await getFirestoreDb();
    const { doc, setDoc, serverTimestamp } = await import('firebase/firestore');
    const pct = Math.round((correct / total) * 100);
    await setDoc(
      doc(db, COLLECTION, uid),
      { uid, pct, correct, total, updatedAt: serverTimestamp() },
      { merge: true }
    );
  } catch {
    // Firestore未設定またはセキュリティルール未対応 — 無視
  }
}

export type RankingResult = {
  rank: number;
  totalUsers: number;
  myPct: number;
};

export async function fetchMyRanking(): Promise<RankingResult | null> {
  if (!isFirebaseConfigured()) return null;
  const uid = await getAuthUid();
  if (!uid) return null;

  try {
    const db = await getFirestoreDb();
    const {
      doc,
      getDoc,
      collection,
      getCountFromServer,
      query,
      where,
    } = await import('firebase/firestore');

    const mySnap = await getDoc(doc(db, COLLECTION, uid));
    if (!mySnap.exists()) return null;

    const myPct = mySnap.data().pct as number;

    const [aboveSnap, totalSnap] = await Promise.all([
      getCountFromServer(query(collection(db, COLLECTION), where('pct', '>', myPct))),
      getCountFromServer(collection(db, COLLECTION)),
    ]);

    return {
      rank: aboveSnap.data().count + 1,
      totalUsers: totalSnap.data().count,
      myPct,
    };
  } catch {
    return null;
  }
}
