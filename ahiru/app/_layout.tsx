import 'react-native-reanimated';
import { useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initRevenueCat } from '../services/subscription';
import ErrorBoundary from '../components/ErrorBoundary';
import ConsentModal from '../components/ConsentModal';

const CONSENT_KEY = 'ahiru_terms_agreed_v1';

export default function RootLayout() {
  const [consentChecked, setConsentChecked] = useState(false);
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    initRevenueCat();
    AsyncStorage.getItem(CONSENT_KEY).then((v) => {
      if (v !== '1') setShowConsent(true);
      setConsentChecked(true);
    });
  }, []);

  async function handleConsent() {
    await AsyncStorage.setItem(CONSENT_KEY, '1');
    setShowConsent(false);
  }

  return (
    <ErrorBoundary>
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
