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

const LEVELS: { key: YojijukugoLevel; emoji: string; label: string; color: string }[] = [
  { key: 'elementary', emoji: '🎒', label: '小学生レベル', color: '#0EA5E9' },
  { key: 'juniorhigh', emoji: '📘', label: '中学生レベル', color: '#B45309' },
];

export default function YojijukugoScreen() {
  const router = useRouter();
  const [level, setLevel] = useState<YojijukugoLevel>('elementary');
  const levelInfo = LEVELS.find((l) => l.key === level)!;
  const list = useMemo(() => getYojijukugoByLevel(level), [level]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backRow}>
          <Text style={styles.backArrow}>← </Text>
          <Text style={styles.backLabel}>戻る</Text>
        </TouchableOpacity>
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

      <ScrollView contentContainerStyle={styles.scroll}>
        {list.map((item, i) => (
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
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F8FB' },
  header: { paddingHorizontal: 20, paddingTop: 8, paddingBottom: 12 },
  backRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 6 },
  backArrow: { fontSize: 18, color: '#B45309', fontWeight: '700' },
  backLabel: { fontSize: 16, color: '#B45309', fontWeight: '700' },
  title: { fontSize: 26, fontWeight: '800', color: '#1F2937', marginTop: 6 },
  subtitle: { fontSize: 13, color: '#6B7280', marginTop: 4 },
  levelRow: { flexDirection: 'row', paddingHorizontal: 16, gap: 8, marginBottom: 8 },
  levelBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#DDE2EC',
    alignItems: 'center',
  },
  levelBtnText: { fontSize: 14, fontWeight: '700', color: '#374151' },
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
  word: { fontSize: 22, fontWeight: '800', color: '#1F2937' },
  reading: { fontSize: 13, color: '#6B7280', marginTop: 2 },
  meaning: { fontSize: 14.5, color: '#374151', lineHeight: 22 },
  exampleBox: {
    backgroundColor: '#F9FAFB',
    borderLeftWidth: 3,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 10,
  },
  exampleTag: { fontSize: 11, fontWeight: '800', color: '#9CA3AF', marginBottom: 2 },
  exampleText: { fontSize: 13.5, color: '#374151', lineHeight: 20 },
});
