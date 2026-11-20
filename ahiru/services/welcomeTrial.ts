import { getFirestoreDb, isFirebaseConfigured } from './firebaseClient';

// 初回ログイン後の「全開放の体験」。日数は3日（AI など費用のかかる機能は、体験中も
// これまでどおり Cloud Functions 側の利用回数制限で守る。ここで開放するのは教材の中身だけ）。
// 開始日時はサーバーの時刻（serverTimestamp）で Firestore の welcomeTrial/{uid} に1度だけ書く。
// 端末のストレージだけで数えると、Web 版はブラウザのデータを消すだけで何度でも延ばせるため。
export const WELCOME_TRIAL_DAYS = 3;
/** 3日間の全開放を始められる最終日時（日本時間 2026/11/30 23:59:59）。これを過ぎて初めてログインした人には、体験は始まらない。すでに始めた人は、3日間そのまま続く。 */
export const WELCOME_TRIAL_ENTRY_DEADLINE_MS = new Date('2026-11-30T23:59:59+09:00').getTime();
/** 体験の受け付け中か（締切の前か） */
export function isWelcomeTrialOfferOpen(now: number = Date.now()): boolean {
  return now <= WELCOME_TRIAL_ENTRY_DEADLINE_MS;
}
const DAY_MS = 24 * 60 * 60 * 1000;

const startedCache = new Map<string, Promise<number | null>>();

/** 体験の開始時刻（ミリ秒）。まだ無ければ今を開始として記録する。取れなければ null。 */
export function ensureWelcomeTrialStart(uid: string): Promise<number | null> {
  const hit = startedCache.get(uid);
  if (hit) return hit;
  const p = (async () => {
    if (!isFirebaseConfigured()) return null;
    try {
      const db = await getFirestoreDb();
      const { doc, getDoc, setDoc, serverTimestamp } = await import('firebase/firestore');
      const ref = doc(db, 'welcomeTrial', uid);
      const read = async (): Promise<number | null> => {
        const snap = await getDoc(ref);
        if (!snap.exists()) return null;
        const t = snap.data()?.startedAt as { toMillis?: () => number } | undefined;
        return t && typeof t.toMillis === 'function' ? t.toMillis() : null;
      };
      const existing = await read();
      if (existing != null) return existing;
      // 締切のあとに初めてログインした人には、体験を始めない
      if (!isWelcomeTrialOfferOpen()) return null;
      await setDoc(ref, { startedAt: serverTimestamp() });
      return await read();
    } catch {
      startedCache.delete(uid);
      return null;
    }
  })();
  startedCache.set(uid, p);
  return p;
}

/** 体験が続いているか。開始時刻から3日たつと false。 */
export function isWelcomeTrialActive(startedAtMs: number | null, now: number = Date.now()): boolean {
  if (startedAtMs == null) return false;
  return now >= startedAtMs - 5 * 60 * 1000 && now < startedAtMs + WELCOME_TRIAL_DAYS * DAY_MS;
}

/** 残り時間（日の切り上げ）。体験が終わっていれば 0。 */
export function welcomeTrialDaysLeft(startedAtMs: number | null, now: number = Date.now()): number {
  if (!isWelcomeTrialActive(startedAtMs, now) || startedAtMs == null) return 0;
  return Math.max(1, Math.ceil((startedAtMs + WELCOME_TRIAL_DAYS * DAY_MS - now) / DAY_MS));
}
