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
async function getFirebaseAuth(): Promise<Auth> {
  if (!authPromise) {
    authPromise = (async () => {
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
  }
  return authPromise;
}

async function ensureSignedIn(): Promise<string> {
  const auth = await getFirebaseAuth();
  if (auth.currentUser) return auth.currentUser.uid;
  const { signInAnonymously } = await import('firebase/auth');
  const cred = await signInAnonymously(auth);
  return cred.user.uid;
}

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
