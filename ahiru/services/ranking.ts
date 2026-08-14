import {
  getAuthUid,
  getFirestoreDb,
  isFirebaseConfigured,
  callFirebaseFunction,
} from './firebaseClient';

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

/**
 * 自分の順位を取得する。
 *
 * 順位の計算はサーバー（Cloud Function）で行う。クライアントで計算するには
 * ランキング全体への読み取り権限が必要になり、「誰でも全ユーザーのIDとスコアと
 * 最終学習日時を一覧できる」状態になってしまうため（子ども向けアプリでは避ける）。
 */
export async function fetchMyRanking(): Promise<RankingResult | null> {
  if (!isFirebaseConfigured()) return null;

  try {
    const res = await callFirebaseFunction<
      Record<string, never>,
      { ok: true; ranking: RankingResult | null }
    >('getMyRanking', {});
    return res.ranking;
  } catch {
    return null;
  }
}
