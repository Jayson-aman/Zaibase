import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { songs, type SongCategory } from '../data/songs';
import { ERAS, type Era } from '../data/timeline';

const CATEGORIES: { key: SongCategory; emoji: string; color: string }[] = [
  { key: '地理', emoji: '🗾', color: '#F59E0B' },
  { key: '歴史', emoji: '📜', color: '#B45309' },
  { key: '公民', emoji: '⚖️', color: '#0EA5E9' },
];

export default function SongsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ tab?: string; era?: string }>();
  const initialCat = (params.tab as SongCategory) ?? '地理';
  const [cat, setCat] = useState<SongCategory>(
    CATEGORIES.some((c) => c.key === initialCat) ? initialCat : '地理',
  );
  const initialEra = ERAS.some((e) => e.key === params.era) ? (params.era as Era) : null;
  const [eraFilter, setEraFilter] = useState<Era | null>(initialEra);
  const list = songs
    .filter((s) => s.category === cat)
    .filter((s) => (cat === '歴史' && eraFilter != null ? s.era === eraFilter : true));
  const catColor = CATEGORIES.find((c) => c.key === cat)?.color ?? '#F59E0B';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backRow}>
          <Text style={styles.backArrow}>← </Text>
          <Text style={styles.backLabel}>戻る</Text>
        </TouchableOpacity>
        <Text style={styles.title}>🎵 覚え歌（替え歌）</Text>
        <Text style={styles.subtitle}>メロディにのせて社会を楽しく暗記！</Text>
      </View>

      <View style={styles.tabRow}>
        {CATEGORIES.map((c) => {
          const active = c.key === cat;
          return (
            <TouchableOpacity
              key={c.key}
              style={[styles.tab, active && { backgroundColor: c.color }]}
              onPress={() => setCat(c.key)}
              activeOpacity={0.85}
            >
              <Text style={[styles.tabText, active && styles.tabTextActive]}>
                {c.emoji} {c.key}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {cat === '歴史' && (
        <View style={styles.eraRowWrap}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.eraRow}
            contentContainerStyle={styles.eraRowContent}
          >
            <TouchableOpacity
              style={[styles.eraChip, eraFilter == null && styles.eraChipActive]}
              onPress={() => setEraFilter(null)}
              activeOpacity={0.85}
            >
              <Text style={[styles.eraChipText, eraFilter == null && styles.eraChipTextActive]}>すべて</Text>
            </TouchableOpacity>
            {ERAS.map((e) => (
              <TouchableOpacity
                key={e.key}
                style={[styles.eraChip, eraFilter === e.key && { backgroundColor: e.color, borderColor: e.color }]}
                onPress={() => setEraFilter(e.key)}
                activeOpacity={0.85}
              >
                <Text style={[styles.eraChipText, eraFilter === e.key && styles.eraChipTextActive]} numberOfLines={1}>
                  {e.emoji} {e.key}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <LinearGradient
            colors={['rgba(255,251,235,0)', '#FFFBEB']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.eraRowFade}
            pointerEvents="none"
          />
        </View>
      )}

      <ScrollView contentContainerStyle={styles.scroll}>
        {list.length === 0 ? (
          <Text style={styles.empty}>準備中です。もうすぐ追加されます。</Text>
        ) : (
          list.map((s) => (
            <View key={s.id} style={styles.card}>
              <View style={styles.chipRow}>
                <View style={[styles.melodyChip, { backgroundColor: catColor + '22', borderColor: catColor + '66' }]}>
                  <Text style={[styles.melodyText, { color: catColor }]}>♪ メロディ：{s.melody}</Text>
                </View>
                {s.era != null && (
                  <View style={[styles.melodyChip, { backgroundColor: catColor + '22', borderColor: catColor + '66' }]}>
                    <Text style={[styles.melodyText, { color: catColor }]}>🕰 {s.era}</Text>
                  </View>
                )}
              </View>
              <Text style={styles.songTitle}>{s.title}</Text>
              <Text style={styles.lyrics}>{s.lyrics}</Text>
              <View style={styles.pointsBox}>
                <Text style={styles.pointsLabel}>💡 覚えられること</Text>
                <Text style={styles.pointsText}>{s.points}</Text>
              </View>
            </View>
          ))
        )}
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFBEB' },
  header: { paddingHorizontal: 20, paddingTop: 8, paddingBottom: 12 },
  backRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 6 },
  backArrow: { fontSize: 18, color: '#B45309', fontWeight: '700' },
  backLabel: { fontSize: 16, color: '#B45309', fontWeight: '700' },
  title: { fontSize: 26, fontWeight: '800', color: '#92400E', marginTop: 6 },
  subtitle: { fontSize: 14, color: '#B45309', marginTop: 4 },
  tabRow: { flexDirection: 'row', paddingHorizontal: 16, gap: 8, marginBottom: 8 },
  tab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: '#FEF3C7',
    alignItems: 'center',
  },
  tabText: { fontSize: 15, fontWeight: '700', color: '#92400E' },
  eraRowWrap: { marginBottom: 8 },
  eraRow: { flexGrow: 0 },
  eraRowContent: { paddingHorizontal: 16, paddingRight: 32, gap: 8 },
  eraRowFade: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 28,
  },
  eraChip: {
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 999,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#FDE68A',
  },
  eraChipActive: { backgroundColor: '#92400E', borderColor: '#92400E' },
  eraChipText: { fontSize: 12, fontWeight: '700', color: '#92400E' },
  eraChipTextActive: { color: '#fff' },
  chipRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 10 },
  tabTextActive: { color: '#fff' },
  scroll: { padding: 16 },
  empty: { textAlign: 'center', color: '#B45309', marginTop: 40, fontSize: 15 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  melodyChip: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginBottom: 10,
  },
  melodyText: { fontSize: 12, fontWeight: '700' },
  songTitle: { fontSize: 20, fontWeight: '800', color: '#1F2937', marginBottom: 10 },
  lyrics: { fontSize: 17, color: '#111827', lineHeight: 30 },
  pointsBox: {
    backgroundColor: '#FFFBEB',
    borderRadius: 12,
    padding: 12,
    marginTop: 14,
    borderLeftWidth: 4,
    borderLeftColor: '#F59E0B',
  },
  pointsLabel: { fontSize: 13, fontWeight: '700', color: '#92400E', marginBottom: 4 },
  pointsText: { fontSize: 14, color: '#374151', lineHeight: 21 },
});
