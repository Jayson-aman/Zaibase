import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useAudioPlayer, useAudioPlayerStatus } from 'expo-audio';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { songs, type Song, type SongCategory } from '../data/songs';
import { ERAS, type Era } from '../data/timeline';
import { melodyAudio } from '../data/melodyAudio';
import { speakJapanese, stopSpeaking } from '../services/tts';

// このスクリーン内で同時に1つの音（メロディ or 読み上げ）だけを再生する。
// 新しい再生を始める前に、直前に鳴らしていたものを止める。
let stopCurrentPlayback: (() => void) | null = null;
function takeOverPlayback(stop: () => void) {
  try {
    stopCurrentPlayback?.();
  } catch {
    // 直前の再生インスタンスが既に破棄されていても無視する
  }
  stopCurrentPlayback = stop;
}
function releasePlayback(stop: () => void) {
  if (stopCurrentPlayback === stop) stopCurrentPlayback = null;
}

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
          list.map((s) => <SongCard key={s.id} song={s} catColor={catColor} />)
        )}
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

function SongCard({ song: s, catColor }: { song: Song; catColor: string }) {
  const melodySource = melodyAudio[s.melody] ?? null;
  const player = useAudioPlayer(melodySource);
  const status = useAudioPlayerStatus(player);
  const [speaking, setSpeaking] = useState(false);
  const speakingRef = useRef(false);

  // 画面遷移・カード破棄・別カードの再生開始時に、鳴らしっぱなしにしない
  useEffect(() => {
    return () => {
      // expo-audio 側のクリーンアップが先に走って player が解放済みのことがあるため、
      // pause() は必ず try で囲む（囲まないと画面を戻るたびにクラッシュする）。
      try {
        player.pause();
      } catch {
        // 既に破棄済みなら無視
      }
      if (speakingRef.current) stopSpeaking();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleMelody = () => {
    if (!melodySource) return;
    if (status.playing) {
      player.pause();
      return;
    }
    // 曲が最後まで再生し終わっている場合だけ頭出しし、一時停止からの再開は途中位置から続ける
    const finished = status.duration > 0 && status.currentTime >= status.duration - 0.05;
    if (finished) player.seekTo(0);
    takeOverPlayback(() => player.pause());
    player.play();
  };

  const toggleLyrics = async () => {
    if (speaking) {
      await stopSpeaking();
      setSpeaking(false);
      speakingRef.current = false;
      return;
    }
    takeOverPlayback(() => {
      stopSpeaking();
      setSpeaking(false);
      speakingRef.current = false;
    });
    setSpeaking(true);
    speakingRef.current = true;
    await speakJapanese(s.lyrics);
    setSpeaking(false);
    speakingRef.current = false;
  };

  return (
    <View style={styles.card}>
      <View style={styles.chipRow}>
        <TouchableOpacity
          style={[
            styles.melodyChip,
            { backgroundColor: catColor + '22', borderColor: catColor + '66' },
            !melodySource && styles.melodyChipDisabled,
          ]}
          onPress={toggleMelody}
          disabled={!melodySource}
          activeOpacity={0.8}
        >
          <Text style={[styles.melodyText, { color: catColor }]}>
            {melodySource ? (status.playing ? '⏸ ' : '▶︎ ') : '♪ '}
            メロディ：{s.melody}
          </Text>
        </TouchableOpacity>
        {s.era != null && (
          <View style={[styles.melodyChip, { backgroundColor: catColor + '22', borderColor: catColor + '66' }]}>
            <Text style={[styles.melodyText, { color: catColor }]}>🕰 {s.era}</Text>
          </View>
        )}
      </View>
      <Text style={styles.songTitle}>{s.title}</Text>
      <Text style={styles.lyrics}>{s.lyrics}</Text>
      <TouchableOpacity
        style={[styles.speakBtn, { borderColor: catColor + '66' }]}
        onPress={toggleLyrics}
        activeOpacity={0.8}
      >
        {speaking ? (
          <ActivityIndicator size="small" color={catColor} />
        ) : (
          <Text style={[styles.speakBtnText, { color: catColor }]}>🔊 歌詞を読み上げる</Text>
        )}
      </TouchableOpacity>
      <Text style={styles.playbackHint}>
        ※ メロディと歌詞読み上げは別々に再生されます（同時には鳴りません）
      </Text>
      <View style={styles.pointsBox}>
        <Text style={styles.pointsLabel}>💡 覚えられること</Text>
        <Text style={styles.pointsText}>{s.points}</Text>
      </View>
    </View>
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
  melodyChipDisabled: { opacity: 0.6 },
  songTitle: { fontSize: 20, fontWeight: '800', color: '#1F2937', marginBottom: 10 },
  lyrics: { fontSize: 17, color: '#111827', lineHeight: 30 },
  speakBtn: {
    alignSelf: 'flex-start',
    borderWidth: 1.5,
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 7,
    marginTop: 12,
    minWidth: 150,
    alignItems: 'center',
  },
  speakBtnText: { fontSize: 13, fontWeight: '700' },
  playbackHint: { fontSize: 11, color: '#9CA3AF', marginTop: 8 },
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
