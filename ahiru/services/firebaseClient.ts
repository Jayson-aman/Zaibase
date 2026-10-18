import { Platform } from 'react-native';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getFunctions, httpsCallable, Functions } from 'firebase/functions';
import type { Auth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY ?? '',
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN ?? '',
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID ?? '',
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET ?? '',
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? '',
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID ?? '',
};

export function isFirebaseConfigured(): boolean {
  return firebaseConfig.apiKey.length > 10 && firebaseConfig.projectId.length > 0;
}

let appInstance: FirebaseApp | null = null;
function getFirebaseApp(): FirebaseApp {
  if (!appInstance) {
    appInstance = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
  }
  return appInstance;
}

let authPromise: Promise<Auth> | null = null;
export async function getFirebaseAuth(): Promise<Auth> {
  if (!authPromise) {
    // 失敗した Promise をそのままキャッシュすると、一度でも初期化に失敗した時点で
    // 以降すべてのAI機能・ランキングが永久に使えなくなる。失敗したら破棄して再試行可能にする。
    const p = (async () => {
      const app = getFirebaseApp();
      if (Platform.OS === 'web') {
        const { getAuth } = await import('firebase/auth');
        return getAuth(app);
      }
      // React Native: AsyncStorage で永続化しないと毎起動で匿名ユーザーが変わってしまう。
      // getReactNativePersistence はRN向けビルドにのみ存在し firebase/auth の型定義には出てこないため any 経由で呼ぶ。
      const authModule: any = await import('firebase/auth');
      const AsyncStorage = (await import('@react-native-async-storage/async-storage')).default;
      return authModule.initializeAuth(app, {
        persistence: authModule.getReactNativePersistence(AsyncStorage),
      });
    })();
    p.catch(() => {
      if (authPromise === p) authPromise = null;
    });
    authPromise = p;
  }
  return authPromise;
}

async function ensureSignedIn(): Promise<string> {
  const auth = await getFirebaseAuth();
  // 保存済みのログイン状態を読み込み終わるまで待つ。待たずに currentUser を見ると、
  // ログイン済みでも一瞬 null で、匿名ログインが新しいユーザーに差し替えてしまう。
  try {
    await auth.authStateReady();
  } catch {
    // 待てない環境では、そのまま続ける
  }
  if (auth.currentUser) return auth.currentUser.uid;
  // 起動直後は購入状況・解放状況・ランキングなどが同時に uid を求める。それぞれが匿名ログインを
  // 始めると別々の匿名ユーザーが作られ、後の呼び出しが前のユーザーを置き換えてしまう
  // （購入の紐付け先と、サーバーに問い合わせる uid がずれる）。進行中の1回を共有する。
  if (!anonSignInInFlight) {
    const p = (async () => {
      const { signInAnonymously } = await import('firebase/auth');
      const cred = await signInAnonymously(auth);
      return cred.user.uid;
    })();
    const clear = () => {
      if (anonSignInInFlight === p) anonSignInInFlight = null;
    };
    p.then(clear, clear);
    anonSignInInFlight = p;
  }
  return anonSignInInFlight;
}

let anonSignInInFlight: Promise<string> | null = null;

// Web のみ reCAPTCHA v3 で App Check を有効化。
// ネイティブ（iOS/Android）の App Check（App Attest / Play Integrity）は
// EAS Build でのネイティブ設定が別途必要なため未対応 — 現状はFirestoreの
// 利用回数制限（1日5回/匿名uid）が主な不正利用対策になる。
let appCheckInitialized = false;
async function ensureAppCheck(): Promise<void> {
  if (appCheckInitialized || Platform.OS !== 'web') return;
  const siteKey = process.env.EXPO_PUBLIC_FIREBASE_RECAPTCHA_SITE_KEY;
  if (!siteKey) return;
  try {
    const { initializeAppCheck, ReCaptchaV3Provider } = await import('firebase/app-check');
    initializeAppCheck(getFirebaseApp(), {
      provider: new ReCaptchaV3Provider(siteKey),
      isTokenAutoRefreshEnabled: true,
    });
    appCheckInitialized = true;
  } catch {
    // App Check 初期化失敗時はサーバー側の enforceAppCheck で弾かれるだけなので致命的ではない
  }
}

let functionsInstance: Functions | null = null;
function getFirebaseFunctions(): Functions {
  if (!functionsInstance) {
    functionsInstance = getFunctions(getFirebaseApp(), 'asia-northeast1');
  }
  return functionsInstance;
}

export async function getAuthUid(): Promise<string | null> {
  if (!isFirebaseConfigured()) return null;
  try {
    return await ensureSignedIn();
  } catch {
    return null;
  }
}

export async function getFirestoreDb() {
  const { getFirestore } = await import('firebase/firestore');
  return getFirestore(getFirebaseApp());
}

export async function callFirebaseFunction<TData, TResult>(
  name: string,
  data: TData
): Promise<TResult> {
  if (!isFirebaseConfigured()) {
    throw new Error('この機能は準備中です');
  }
  await ensureAppCheck();
  await ensureSignedIn();
  const fn = httpsCallable<TData, TResult>(getFirebaseFunctions(), name);
  const res = await fn(data);
  return res.data;
}
