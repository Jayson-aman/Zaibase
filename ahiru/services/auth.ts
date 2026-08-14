// メール／パスワードによるアカウント認証。
// 目的：全デバイス・全プラットフォームで「同じアカウント＝同じFirebase UID」に
// なることで、RevenueCat の加入状態を共有し、iOS↔Web の二重課金を防ぐ。
// ログイン成功時に identifyUser(uid) で RevenueCat に同一ユーザーを紐付ける。

import { getFirebaseAuth, isFirebaseConfigured } from './firebaseClient';
import { identifyUser, logoutUser } from './subscription';

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
    default:
      return 'エラーが発生しました。もう一度お試しください。';
  }
}

export class AuthError extends Error {}

export async function signUpEmail(email: string, password: string): Promise<AuthUser> {
  if (!isFirebaseConfigured()) throw new AuthError('この機能は準備中です');
  const auth = await getFirebaseAuth();
  const { createUserWithEmailAndPassword } = await import('firebase/auth');
  try {
    const cred = await createUserWithEmailAndPassword(auth, email.trim(), password);
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
    const cred = await signInWithEmailAndPassword(auth, email.trim(), password);
    await identifyUser(cred.user.uid);
    return toAuthUser(cred.user);
  } catch (e: any) {
    throw new AuthError(friendlyError(e?.code));
  }
}

export async function signOutUser(): Promise<void> {
  const auth = await getFirebaseAuth();
  const { signOut } = await import('firebase/auth');
  await signOut(auth);
  await logoutUser();
}

/**
 * アカウントを完全に削除する。
 *
 * Appleのガイドライン5.1.1(v)により、アプリ内でアカウントを作成できる場合は
 * アプリ内で削除もできる必要がある（無いと審査で却下される）。
 *
 * 直前にログインしていないとFirebaseが `auth/requires-recent-login` を返すため、
 * その場合は再ログインを促すメッセージを出す。
 */
export async function deleteAccount(): Promise<void> {
  if (!isFirebaseConfigured()) throw new AuthError('この機能は準備中です');
  const auth = await getFirebaseAuth();
  const user = auth.currentUser;
  if (!user) throw new AuthError('ログインしていません。');

  // 先にユーザーに紐づくデータを消してから認証アカウントを消す。
  // 順序を逆にすると、認証が消えた時点で権限を失い消せなくなる。
  const uid = user.uid;
  try {
    const { getFirestoreDb } = await import('./firebaseClient');
    const db = await getFirestoreDb();
    const { doc, deleteDoc } = await import('firebase/firestore');
    // ランキング登録を削除（他コレクションはサーバー側の管理データで、
    // クライアントからは削除権限が無いため対象外）
    await deleteDoc(doc(db, 'examLeaderboard', uid)).catch(() => {});
  } catch {
    // Firestore未設定などでも認証アカウントの削除は続行する
  }

  const { deleteUser } = await import('firebase/auth');
  try {
    await deleteUser(user);
  } catch (e: any) {
    if (e?.code === 'auth/requires-recent-login') {
      throw new AuthError(
        'セキュリティのため、一度ログアウトしてもう一度ログインしてから削除してください。',
      );
    }
    throw new AuthError(friendlyError(e?.code));
  }

  // 端末に残る学習記録・お試し回数なども消す。
  // ⚠️ アカウント削除が成功した後に行うこと。先に消すと、再ログインが必要で
  // 削除に失敗した場合に、アカウントは残ったまま学習記録だけ失われる。
  try {
    const AsyncStorage = (await import('@react-native-async-storage/async-storage')).default;
    await AsyncStorage.clear();
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
  return onAuthStateChanged(auth, (u) => {
    if (u && !u.isAnonymous) {
      identifyUser(u.uid);
      cb(toAuthUser(u));
    } else if (u) {
      cb(toAuthUser(u)); // 匿名
    } else {
      cb(null);
    }
  });
}
