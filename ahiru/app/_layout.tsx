import 'react-native-reanimated';
import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { initRevenueCat } from '../services/subscription';
import ErrorBoundary from '../components/ErrorBoundary';

export default function RootLayout() {
  useEffect(() => {
    initRevenueCat();
  }, []);
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
      </Stack>
    </ErrorBoundary>
  );
}
