import React, { useEffect, useState } from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { usePathname, useRouter } from 'expo-router';
import { useSubscription } from '../hooks/useSubscription';

// 初回ログイン後の3日間の体験が終わった人（まだ有料プランでない人）は、無料の範囲も含めて
// アプリ全体をロックし、プラン選択へ案内する（2026/11/13 ユーザー決定）。
// ・ログアウトして無料に戻る抜け道をふさぐため、「体験が終わった」印を端末にも残す。
//   有料プランになったら印を消す。
// ・Web版は決済が準備中のため対象にしない（払う手段が無いまま全ロックになるのを避ける）。
// ・ログイン・プラン・法的ページは開けるままにする（復元・解約・規約の確認のため）。
const LOCK_KEY = 'trial_ended_lock_v1';
const OPEN_ROUTES = ['/login', '/paywall', '/terms', '/privacy', '/tokusho', '/credits', '/cancel-survey'];

export default function TrialEndedGate() {
  const { tier, loading, welcomeTrialEnded } = useSubscription();
  const pathname = usePathname();
  const router = useRouter();
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(LOCK_KEY).then((v) => setFlag(v === '1')).catch(() => {});
  }, []);
  useEffect(() => {
    if (loading) return;
    if (tier !== 'free') {
      AsyncStorage.removeItem(LOCK_KEY).catch(() => {});
      setFlag(false);
    } else if (welcomeTrialEnded) {
      AsyncStorage.setItem(LOCK_KEY, '1').catch(() => {});
      setFlag(true);
    }
  }, [tier, loading, welcomeTrialEnded]);

  if (Platform.OS === 'web' || loading || tier !== 'free') return null;
  if (!(welcomeTrialEnded || flag)) return null;
  if (OPEN_ROUTES.includes(pathname)) return null;

  return (
    <View style={styles.cover} pointerEvents="auto">
      <Text style={styles.icon}>⏰</Text>
      <Text style={styles.title}>3日間の体験が終わりました</Text>
      <Text style={styles.body}>
        続けて使うには、プランをえらんでください。はじめての方は、お試し価格でPRO・MAXを始められます（お1人1回まで。その後は月額料金で自動更新。いつでも解約できます）。
      </Text>
      <Pressable style={styles.primary} onPress={() => router.push('/paywall' as any)}>
        <Text style={styles.primaryText}>プランを見る</Text>
      </Pressable>
      <Pressable style={styles.secondary} onPress={() => router.push('/login' as any)}>
        <Text style={styles.secondaryText}>ログイン・購入の復元</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  cover: {
    position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: '#0B1220',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 28,
    zIndex: 1000,
  },
  icon: { fontSize: 44, marginBottom: 12 },
  title: { color: '#fff', fontSize: 20, fontWeight: '800', marginBottom: 12, textAlign: 'center' },
  body: { color: '#CBD5E1', fontSize: 14, lineHeight: 22, textAlign: 'center', marginBottom: 24, maxWidth: 420 },
  primary: { backgroundColor: '#F59E0B', borderRadius: 12, paddingVertical: 14, paddingHorizontal: 40, marginBottom: 12 },
  primaryText: { color: '#111827', fontSize: 16, fontWeight: '800' },
  secondary: { paddingVertical: 10, paddingHorizontal: 20 },
  secondaryText: { color: '#93C5FD', fontSize: 14, fontWeight: '600' },
});
