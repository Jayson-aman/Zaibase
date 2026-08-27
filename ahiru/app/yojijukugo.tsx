import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { getYojijukugoByLevel, type YojijukugoLevel } from '../data/yojijukugo';
import HomeButton from '../components/HomeButton';
import { useProGate } from '../hooks/useProGate';
import { useBetaAccess } from '../hooks/useBetaAccess';
import Paywall from '../components/Paywall';

// 無料で試せる語数。英単語Proなど他画面と同じ「一部無料・続きは加入」方式に揃える。
const FREE_YOJIJUKUGO_LIMIT = 5;

const LEVELS: { key: YojijukugoLevel; emoji: string; label: string; color: string }[] = [
  { key: 'elementary', emoji: '🎒', label: '小学生レベル', color: '#B5622E' },
  { key: 'juniorhigh', emoji: '📘', label: '中学生レベル', color: '#B45309' },
];

export default function YojijukugoScreen() {
  const router = useRouter();
  const { hasAccess: betaAccess } = useBetaAccess();
  const { isPro, paywallVisible, setPaywallVisible } = useProGate(betaAccess);
  const [level, setLevel] = useState<YojijukugoLevel>('elementary');
  const levelInfo = LEVELS.find((l) => l.key === level)!;
  const list = useMemo(() => getYojijukugoByLevel(level), [level]);
  const visibleList = isPro ? list : list.slice(0, FREE_YOJIJUKUGO_LIMIT);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTopRow}>
          <TouchableOpacity
            onPress={() => (router.canGoBack() ? router.back() : router.replace('/'))}
            style={styles.backRow}
          >
            <Text style={styles.backArrow}>← </Text>
            <Text style={styles.backLabel}>戻る</Text>
          </TouchableOpacity>
          <HomeButton variant="dark" />
        </View>
        <Text style={styles.title}>📚 四字熟語</Text>
        <Text style={styles.subtitle}>読み方・意味・使い方をセットで覚える（全{list.length}語）</Text>
      </View>

      <View style={styles.levelRow}>
        {LEVELS.map((l) => {
          const active = l.key === level;
          return (
            <TouchableOpacity
              key={l.key}
              style={[styles.levelBtn, active && { backgroundColor: l.color }]}
              onPress={() => setLevel(l.key)}
              activeOpacity={0.85}
            >
              <Text style={[styles.levelBtnText, active && styles.levelBtnTextActive]}>
                {l.emoji} {l.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {!isPro && list.length > FREE_YOJIJUKUGO_LIMIT && (
        <TouchableOpacity
          style={styles.freeLimitBanner}
          onPress={() => setPaywallVisible(true)}
          activeOpacity={0.85}
        >
          <Text style={styles.freeLimitText}>
            無料で{FREE_YOJIJUKUGO_LIMIT}語まで試せます。全{list.length}語はProプランで解放 ▸
          </Text>
        </TouchableOpacity>
      )}

      <ScrollView contentContainerStyle={styles.scroll}>
        {visibleList.map((item, i) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={[styles.indexBadge, { color: levelInfo.color }]}>{i + 1}</Text>
              <View style={{ flex: 1 }}>
                <Text style={styles.word}>{item.word}</Text>
                <Text style={styles.reading}>{item.reading}</Text>
              </View>
            </View>
            <Text style={styles.meaning}>{item.meaning}</Text>
            <View style={[styles.exampleBox, { borderLeftColor: levelInfo.color }]}>
              <Text style={styles.exampleTag}>例文</Text>
              <Text style={styles.exampleText}>{item.example}</Text>
            </View>
          </View>
        ))}
        {!isPro && list.length > FREE_YOJIJUKUGO_LIMIT && (
          <TouchableOpacity
            style={styles.moreLockedCard}
            onPress={() => setPaywallVisible(true)}
            activeOpacity={0.85}
          >
            <Text style={styles.moreLockedText}>
              🔒 残り{list.length - FREE_YOJIJUKUGO_LIMIT}語はProプランで見られます
            </Text>
          </TouchableOpacity>
        )}
        <View style={{ height: 40 }} />
      </ScrollView>

      <Paywall
        visible={paywallVisible}
        onClose={() => setPaywallVisible(false)}
        onPurchased={() => setPaywallVisible(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAF7F2' },
  freeLimitBanner: {
    marginHorizontal: 16,
    marginBottom: 8,
    backgroundColor: 'rgba(180,83,9,0.10)',
    borderWidth: 1,
    borderColor: 'rgba(180,83,9,0.35)',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  freeLimitText: { fontSize: 13, fontWeight: '700', color: '#B45309', textAlign: 'center' },
  moreLockedCard: {
    backgroundColor: '#FFFBEB',
    borderRadius: 16,
    padding: 20,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#FDE68A',
    alignItems: 'center',
  },
  moreLockedText: { fontSize: 14, fontWeight: '700', color: '#B45309' },
  header: { paddingHorizontal: 20, paddingTop: 8, paddingBottom: 12 },
  headerTopRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  backRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 6 },
  backArrow: { fontSize: 18, color: '#B45309', fontWeight: '700' },
  backLabel: { fontSize: 16, color: '#B45309', fontWeight: '700' },
  title: { fontSize: 26, fontWeight: '800', color: '#2B2420', marginTop: 6 },
  subtitle: { fontSize: 13, color: '#6B7280', marginTop: 4 },
  levelRow: { flexDirection: 'row', paddingHorizontal: 16, gap: 8, marginBottom: 8 },
  levelBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#DCD3C5',
    alignItems: 'center',
  },
  levelBtnText: { fontSize: 14, fontWeight: '700', color: '#6E645C' },
  levelBtnTextActive: { color: '#FFFFFF' },
  scroll: { padding: 16 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  cardHeader: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 8, gap: 10 },
  indexBadge: { fontSize: 13, fontWeight: '800', width: 24 },
  word: { fontSize: 22, fontWeight: '800', color: '#2B2420' },
  reading: { fontSize: 13, color: '#6B7280', marginTop: 2 },
  meaning: { fontSize: 14.5, color: '#6E645C', lineHeight: 22 },
  exampleBox: {
    backgroundColor: '#FAF7F2',
    borderLeftWidth: 3,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 10,
  },
  exampleTag: { fontSize: 11, fontWeight: '800', color: '#9CA3AF', marginBottom: 2 },
  exampleText: { fontSize: 13.5, color: '#6E645C', lineHeight: 20 },
});
