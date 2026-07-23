import 'react-native-reanimated';
import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { Stack, usePathname } from 'expo-router';
import Head from 'expo-router/head';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initRevenueCat } from '../services/subscription';
import { subscribeAuth } from '../services/auth';
import ErrorBoundary from '../components/ErrorBoundary';
import ConsentModal from '../components/ConsentModal';

const CONSENT_KEY = 'ahiru_terms_agreed_v1';

export default function RootLayout() {
  const [consentChecked, setConsentChecked] = useState(false);
  const [showConsent, setShowConsent] = useState(false);
  const pathname = usePathname();
  // 法的ページ（利用規約・プライバシー・特商法・画像クレジット）は
  // 同意ゲートを被せずに直接開けるようにする。App Store のプライバシー
  // ポリシーURL（.../privacy）が同意モーダルで塞がれないようにするため。
  const isLegalRoute = ['/terms', '/privacy', '/tokusho', '/credits'].includes(pathname);

  useEffect(() => {
    initRevenueCat();
    // 起動時に既存ログインを復元し、RevenueCatを同一ユーザーに紐付け直す
    // （全端末で加入状態を共有＝二重課金防止）。
    let unsubAuth: (() => void) | undefined;
    subscribeAuth(() => {})
      .then((fn) => { unsubAuth = fn; })
      .catch(() => {});
    AsyncStorage.getItem(CONSENT_KEY).then((v) => {
      if (v !== '1') setShowConsent(true);
      setConsentChecked(true);
    });
    return () => { if (unsubAuth) unsubAuth(); };
  }, []);

  async function handleConsent() {
    await AsyncStorage.setItem(CONSENT_KEY, '1');
    setShowConsent(false);
  }

  return (
    <ErrorBoundary>
      {Platform.OS === 'web' && (
        <Head>
          <title>中学受験・高校受験の対策アプリ｜Zaibase受験 5科目13,000問＋動く図解</title>
          <meta
            name="description"
            content="中学受験・高校受験の対策アプリ。算数・国語・理科・社会・英語の5科目13,000問以上、灘・開成・慶應など50校対応、図形やグラフが動く図解つき教科書とAI弱点コーチ。無料で今すぐ始められます。"
          />
        </Head>
      )}
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="quiz/[subject]"
          options={{
            headerShown: false,
            presentation: 'card',
          }}
        />
        <Stack.Screen
          name="lesson/[id]"
          options={{ headerShown: false, presentation: 'card' }}
        />
        <Stack.Screen
          name="school/[course]"
          options={{ headerShown: false, presentation: 'card' }}
        />
        <Stack.Screen
          name="quiz/daily"
          options={{ headerShown: false, presentation: 'card' }}
        />
        <Stack.Screen
          name="vocab/index"
          options={{ headerShown: false, presentation: 'card' }}
        />
        <Stack.Screen
          name="conversation/index"
          options={{ headerShown: false, presentation: 'card' }}
        />
        <Stack.Screen
          name="eiken/index"
          options={{ headerShown: false, presentation: 'card' }}
        />
        <Stack.Screen
          name="eiken/[level]"
          options={{ headerShown: false, presentation: 'card' }}
        />
        <Stack.Screen
          name="eiken/taisaku"
          options={{ headerShown: false, presentation: 'card' }}
        />
        <Stack.Screen
          name="terms"
          options={{ headerShown: false, presentation: 'modal' }}
        />
        <Stack.Screen
          name="privacy"
          options={{ headerShown: false, presentation: 'modal' }}
        />
        <Stack.Screen
          name="tokusho"
          options={{ headerShown: false, presentation: 'modal' }}
        />
      </Stack>
      {consentChecked && showConsent && !isLegalRoute && (
        <ConsentModal onAgree={handleConsent} />
      )}
    </ErrorBoundary>
  );
}
