// メール／パスワードによるアカウント認証。
// 目的：全デバイス・全プラットフォームで「同じアカウント＝同じFirebase UID」に
// なることで、RevenueCat の加入状態を共有し、iOS↔Web の二重課金を防ぐ。
// ログイン成功時に identifyUser(uid) で RevenueCat に同一ユーザーを紐付ける。

import { getFirebaseAuth, isFirebaseConfigured } from './firebaseClient';
import { identifyUser, logoutUser, syncPurchasesToCurrentUser } from './subscription';

export type AuthUser = {
  uid: string;
  email: string | null;
  isAnonymous: boolean;
};

function toAuthUser(u: { uid: string; email: string | null; isAnonymous: boolean }): AuthUser {
  return { uid: u.uid, email: u.email, isAnonymous: u.isAnonymous };
}

function friendlyError(code: string | undefined): string {
  switch (code) {
    case 'auth/invalid-email':
      return 'メールアドレスの形式が正しくありません。';
    case 'auth/email-already-in-use':
      return 'このメールアドレスは既に登録されています。ログインしてください。';
    case 'auth/weak-password':
      return 'パスワードは6文字以上にしてください。';
    case 'auth/invalid-credential':
    case 'auth/wrong-password':
    case 'auth/user-not-found':
      return 'メールアドレスまたはパスワードが正しくありません。';
    case 'auth/too-many-requests':
      return '試行回数が多すぎます。しばらくしてからお試しください。';
    case 'auth/network-request-failed':
      return 'ネットワークエラーです。接続を確認してください。';
    case 'auth/user-disabled':
      return 'このアカウントは利用できません。info@zaibase.group までご連絡ください。';
    case 'auth/missing-password':
      return 'パスワードを入力してください。';
    case 'auth/missing-email':
      return 'メールアドレスを入力してください。';
    case 'auth/operation-not-allowed':
    case 'auth/unauthorized-domain':
      return 'この方法でのログインは、現在ご利用いただけません。';
    case 'auth/requires-recent-login':
    case 'auth/user-token-expired':
      return 'セキュリティのため、パスワードの入力が必要です。';
    case 'auth/credential-already-in-use':
      return 'このメールアドレスは既に登録されています。ログインしてください。';
    default:
      return `エラーが発生しました。もう一度お試しください。${code ? `（${code}）` : ''}`;
  }
}

export class AuthError extends Error {}

// メールの結びつけ（linkWithCredential）では Firebase が onAuthStateChanged を呼ばないことがある。
// そのままだと、登録した直後も画面が「ログインしていません」のままになるので、自分で知らせる。
const authListeners = new Set<(user: AuthUser | null) => void>();

// ── 端末に残る学習記録を、アカウントごとに分けて持つ ─────────────────
// 学習記録・フィードバック控えなどはこの端末の AsyncStorage にあり、キーにユーザーを含まない。
// そのままだと、ログアウトして別の人がログインしても前の人の記録が見え、記録も混ざる。
// ユーザーが変わるたびに、いまの記録を「そのユーザー用の退避先」へ移し、
// 新しいユーザーの退避分があればそれを戻す（無ければ空にする）。
const USER_DATA_KEYS = ['@entrance_exam_progress', '@ahiru_feedback_log', '@entrance_exam_review_prompt', '@ahiru_study_days'];
const STASH_PREFIX = '@ahiru_stash/';

async function getStorage() {
  return (await import('@react-native-async-storage/async-storage')).default;
}

/** fromKey（uid か 'anon'）の記録を退避し、toKey の退避分を戻す。同じ人なら何もしない。 */
async function swapLocalUserData(fromKey: string, toKey: string): Promise<void> {
  if (fromKey === toKey) return;
  try {
    const storage = await getStorage();
    const current = await storage.multiGet(USER_DATA_KEYS);
    const saved: Record<string, string> = {};
    for (const [k, v] of current) if (v != null) saved[k] = v;
    await storage.setItem(STASH_PREFIX + fromKey, JSON.stringify(saved));
    await storage.multiRemove(USER_DATA_KEYS);
    // 購入の「確認待ち」の記録はユーザーごとに分けて持つ（utils/purchasePending.ts）ので、ここでは消さない。
    // （以前は全員ぶん消していたため、確認に失敗した人がログインし直すと記録が消え、同じ項目をもう一度買えた）
    const next = await storage.getItem(STASH_PREFIX + toKey);
    if (next != null) {
      const restored = JSON.parse(next) as Record<string, string>;
      await storage.multiSet(Object.entries(restored));
      await storage.removeItem(STASH_PREFIX + toKey);
    }
  } catch {
    // 退避できなくてもログイン自体は続ける
  }
}

function localKeyOf(u: { uid: string; isAnonymous: boolean } | null | undefined): string {
  return u && !u.isAnonymous ? u.uid : 'anon';
}

export async function signUpEmail(email: string, password: string): Promise<AuthUser> {
  if (!isFirebaseConfigured()) throw new AuthError('この機能は準備中です');
  const auth = await getFirebaseAuth();
  const { createUserWithEmailAndPassword, linkWithCredential, EmailAuthProvider } = await import('firebase/auth');
  try {
    // 匿名のまま使っていたなら、そのアカウントにメールを結びつける。
    // UID が変わらないので、匿名のあいだに買った購入・解放・学習記録が新しいアカウントに引き継がれる。
    const current = auth.currentUser;
    if (current != null && current.isAnonymous) {
      const cred = await linkWithCredential(current, EmailAuthProvider.credential(email.trim(), password));
      await identifyUser(cred.user.uid);
      const linked = toAuthUser(cred.user);
      authListeners.forEach((l) => l(linked));
      return linked;
    }
    const before = localKeyOf(current);
    const cred = await createUserWithEmailAndPassword(auth, email.trim(), password);
    await swapLocalUserData(before, localKeyOf(cred.user));
    await identifyUser(cred.user.uid);
    return toAuthUser(cred.user);
  } catch (e: any) {
    throw new AuthError(friendlyError(e?.code));
  }
}

export async function signInEmail(email: string, password: string): Promise<AuthUser> {
  if (!isFirebaseConfigured()) throw new AuthError('この機能は準備中です');
  const auth = await getFirebaseAuth();
  const { signInWithEmailAndPassword } = await import('firebase/auth');
  try {
    const before = localKeyOf(auth.currentUser);
    const cred = await signInWithEmailAndPassword(auth, email.trim(), password);
    await swapLocalUserData(before, localKeyOf(cred.user));
    await identifyUser(cred.user.uid);
    // ログインせずに買った購入を、このアカウントに引きつぐ
    await syncPurchasesToCurrentUser();
    return toAuthUser(cred.user);
  } catch (e: any) {
    throw new AuthError(friendlyError(e?.code));
  }
}

export async function signOutUser(): Promise<void> {
  const auth = await getFirebaseAuth();
  const { signOut } = await import('firebase/auth');
  const before = localKeyOf(auth.currentUser);
  await signOut(auth);
  // 前のユーザーの記録を見せないよう、この端末の記録を退避して空にする（次に同じ人が入れば戻る）
  await swapLocalUserData(before, 'anon');
  await logoutUser();
}

/** パスワードの再入力（再認証）が必要なときに投げる。呼び出し側はパスワード入力欄を出して再試行する。 */
export class ReauthRequired extends AuthError {}

/** 削除後も残してよい端末内のキー（同意と、無料枠の端末カウンタ） */
const KEEP_AFTER_DELETE = /^(trial_questions_answered|session_free_used_|@?ahiru_terms)/;

/**
 * アカウントを完全に削除する。
 *
 * Appleのガイドライン5.1.1(v)により、アプリ内でアカウントを作成できる場合は
 * アプリ内で削除もできる必要がある（無いと審査で却下される）。
 *
 * 流れ：①パスワードで再認証 ②サーバー（deleteMyData）が、利用回数・解放記録・感想・
 * アクセス記録・ランキング・RevenueCatの顧客情報と、認証アカウントを削除
 * ③端末内の記録を消す。
 * サーバー関数がまだ公開されていない間は、従来どおりクライアントから消せる範囲を消す。
 */
export async function deleteAccount(password?: string): Promise<void> {
  if (!isFirebaseConfigured()) throw new AuthError('この機能は準備中です');
  const auth = await getFirebaseAuth();
  const user = auth.currentUser;
  if (!user) throw new AuthError('ログインしていません。');
  const authMod = await import('firebase/auth');

  if (!user.isAnonymous) {
    // 端末を拾った人がログイン済みのまま削除できないよう、削除の前に必ずパスワードを確かめる
    if (!password) throw new ReauthRequired('パスワードを入力してください。');
    if (!user.email) throw new AuthError('メールアドレスが確認できないため、削除できません。');
    try {
      await authMod.reauthenticateWithCredential(
        user,
        authMod.EmailAuthProvider.credential(user.email, password),
      );
    } catch (e: any) {
      throw new AuthError(
        e?.code === 'auth/invalid-credential' || e?.code === 'auth/wrong-password'
          ? 'パスワードが正しくありません。'
          : friendlyError(e?.code),
      );
    }
  }

  let serverDeleted = false;
  if (!user.isAnonymous) {
    try {
      const { callFirebaseFunction } = await import('./firebaseClient');
      await callFirebaseFunction<Record<string, never>, { ok: boolean }>('deleteMyData', {});
      serverDeleted = true;
    } catch (e: any) {
      const code = String(e?.code ?? '');
      const notDeployed = code === 'functions/not-found' || code === 'functions/unimplemented';
      if (!notDeployed) {
        throw new AuthError('削除に失敗しました。通信状況を確認して、もう一度お試しください。');
      }
      // サーバー関数が未公開の間は、クライアントから消せる範囲で削除する
    }
  }

  if (!serverDeleted) {
    try {
      const { getFirestoreDb } = await import('./firebaseClient');
      const db = await getFirestoreDb();
      const { doc, deleteDoc } = await import('firebase/firestore');
      await deleteDoc(doc(db, 'examLeaderboard', user.uid)).catch(() => {});
    } catch {
      // Firestore未設定などでも認証アカウントの削除は続行する
    }
    try {
      await authMod.deleteUser(user);
    } catch (e: any) {
      if (e?.code === 'auth/requires-recent-login') {
        throw new ReauthRequired('セキュリティのため、パスワードの入力が必要です。');
      }
      throw new AuthError(friendlyError(e?.code));
    }
  } else {
    // サーバーが認証アカウントを消したので、端末側のログイン状態も捨てる
    await authMod.signOut(auth).catch(() => {});
  }

  // 端末に残る学習記録なども消す。
  // ⚠️ アカウント削除が成功した後に行うこと。先に消すと、削除に失敗したとき
  // アカウントは残ったまま学習記録だけ失われる。
  // 同意と無料枠の端末カウンタは残す（消すと、削除→再登録で無料枠が戻る抜け道になる）。
  try {
    const storage = await getStorage();
    const keys = await storage.getAllKeys();
    await storage.multiRemove(keys.filter((k) => !KEEP_AFTER_DELETE.test(k)));
  } catch {
    // 消せなくても続行
  }
  // 購読状況はApple/Googleのアカウントに紐づくため、アカウント削除では解約されない。
  // 呼び出し側でその旨を必ず案内すること。
  await logoutUser();
}

export async function sendResetEmail(email: string): Promise<void> {
  if (!isFirebaseConfigured()) throw new AuthError('この機能は準備中です');
  const auth = await getFirebaseAuth();
  const { sendPasswordResetEmail } = await import('firebase/auth');
  try {
    await sendPasswordResetEmail(auth, email.trim());
  } catch (e: any) {
    throw new AuthError(friendlyError(e?.code));
  }
}

// 認証状態を購読。実ユーザー（非匿名）ならRevenueCatにも紐付け直す。
export async function subscribeAuth(
  cb: (user: AuthUser | null) => void,
): Promise<() => void> {
  if (!isFirebaseConfigured()) {
    cb(null);
    return () => {};
  }
  const auth = await getFirebaseAuth();
  const { onAuthStateChanged } = await import('firebase/auth');
  authListeners.add(cb);
  const unsubscribeFirebase = onAuthStateChanged(auth, (u) => {
    if (u && !u.isAnonymous) {
      identifyUser(u.uid);
      cb(toAuthUser(u));
    } else if (u) {
      cb(toAuthUser(u)); // 匿名
    } else {
      cb(null);
    }
  });
  return () => {
    authListeners.delete(cb);
    unsubscribeFirebase();
  };
}
