import 'react-native-reanimated';
import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { Stack } from 'expo-router';
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
          <title>中学受験対策 ahiru｜5科目7,000問以上・学校別コース対応</title>
          <meta
            name="description"
            content="中学受験・高校受験対策アプリ。5科目7,000問以上・学校別コース対応。志望校の過去問対策・聞き流し学習・AIコーチで効率よく合格を目指す。"
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
      {consentChecked && showConsent && (
        <ConsentModal onAgree={handleConsent} />
      )}
    </ErrorBoundary>
  );
}
