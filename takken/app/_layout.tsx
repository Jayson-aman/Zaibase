import 'react-native-reanimated';
import { useEffect } from 'react';
import { Platform } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { initRevenueCat } from '../services/subscription';

export default function RootLayout() {
  useEffect(() => {
    if (Platform.OS !== 'web') {
      initRevenueCat();
    }
  }, []);

  return (
    <>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="chapter/[id]" options={{ headerShown: false, presentation: 'card' }} />
      </Stack>
    </>
  );
}
