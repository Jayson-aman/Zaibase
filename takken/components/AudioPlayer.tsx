import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  View, Text, TouchableOpacity, ActivityIndicator, StyleSheet, Platform,
} from 'react-native';
import { Audio } from 'expo-av';
import { createSound, TTSSpeed } from '../services/tts';

const SPEEDS: TTSSpeed[] = [0.75, 1.0, 1.25, 1.5];
const SPEED_LABELS: Record<TTSSpeed, string> = { 0.75: '×0.75', 1.0: '×1.0', 1.25: '×1.25', 1.5: '×1.5' };

type Props = {
  text: string;
  chapterId: string;
};

export default function AudioPlayer({ text, chapterId }: Props) {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [loading, setLoading] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState<TTSSpeed>(1.0);
  const [error, setError] = useState<string | null>(null);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const currentKey = useRef('');

  const unload = useCallback(async () => {
    if (sound) {
      await sound.unloadAsync().catch(() => {});
      setSound(null);
      setPlaying(false);
      setPosition(0);
      setDuration(0);
    }
  }, [sound]);

  useEffect(() => {
    return () => { unload(); };
  }, []);

  const handlePlay = async () => {
    if (loading) return;
    setError(null);
    const key = `${chapterId}_${speed}`;

    if (sound && currentKey.current === key) {
      if (playing) {
        await sound.pauseAsync();
        setPlaying(false);
      } else {
        await sound.playAsync();
        setPlaying(true);
      }
      return;
    }

    await unload();
    setLoading(true);
    try {
      const s = await createSound(text, chapterId, 'ja-JP-Standard-C', speed);
      currentKey.current = key;
      s.setOnPlaybackStatusUpdate((status) => {
        if (!status.isLoaded) return;
        setPosition(status.positionMillis ?? 0);
        setDuration(status.durationMillis ?? 0);
        if (status.didJustFinish) {
          setPlaying(false);
          setPosition(0);
        }
      });
      await s.playAsync();
      setSound(s);
      setPlaying(true);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : '音声の取得に失敗しました';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleStop = async () => {
    if (!sound) return;
    await sound.stopAsync();
    await sound.setPositionAsync(0);
    setPlaying(false);
    setPosition(0);
  };

  const handleSpeedChange = async (s: TTSSpeed) => {
    setSpeed(s);
    await unload();
    currentKey.current = '';
  };

  const progress = duration > 0 ? position / duration : 0;
  const fmt = (ms: number) => {
    const s = Math.floor(ms / 1000);
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.label}>🎧 聞き流し（Google音声）</Text>
        <View style={styles.speeds}>
          {SPEEDS.map((s) => (
            <TouchableOpacity
              key={s}
              style={[styles.speedBtn, speed === s && styles.speedBtnActive]}
              onPress={() => handleSpeedChange(s)}
            >
              <Text style={[styles.speedText, speed === s && styles.speedTextActive]}>
                {SPEED_LABELS[s]}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {duration > 0 && (
        <View style={styles.progressRow}>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${progress * 100}%` as `${number}%` }]} />
          </View>
          <Text style={styles.time}>{fmt(position)} / {fmt(duration)}</Text>
        </View>
      )}

      <View style={styles.buttons}>
        <TouchableOpacity
          style={[styles.playBtn, loading && styles.playBtnLoading]}
          onPress={handlePlay}
          disabled={loading}
        >
          {loading
            ? <ActivityIndicator color="#fff" size="small" />
            : <Text style={styles.playBtnText}>{playing ? '⏸ 一時停止' : '▶ 再生'}</Text>
          }
        </TouchableOpacity>
        {(playing || position > 0) && (
          <TouchableOpacity style={styles.stopBtn} onPress={handleStop}>
            <Text style={styles.stopBtnText}>⏹ 停止</Text>
          </TouchableOpacity>
        )}
      </View>

      {error && <Text style={styles.error}>⚠ {error}</Text>}
      {!process.env.EXPO_PUBLIC_GOOGLE_TTS_API_KEY && (
        <Text style={styles.hint}>※ .env に EXPO_PUBLIC_GOOGLE_TTS_API_KEY を設定すると音声が使えます</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFF6FF',
    borderRadius: 12,
    padding: 14,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: '#BFDBFE',
  },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  label: { fontSize: 13, fontWeight: '600', color: '#1E40AF' },
  speeds: { flexDirection: 'row', gap: 6 },
  speedBtn: {
    paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6,
    backgroundColor: '#DBEAFE', borderWidth: 1, borderColor: '#93C5FD',
  },
  speedBtnActive: { backgroundColor: '#1E40AF', borderColor: '#1E40AF' },
  speedText: { fontSize: 11, color: '#1E40AF', fontWeight: '600' },
  speedTextActive: { color: '#fff' },
  progressRow: { marginBottom: 10 },
  progressBar: {
    height: 4, backgroundColor: '#BFDBFE', borderRadius: 2, overflow: 'hidden', marginBottom: 4,
  },
  progressFill: { height: '100%', backgroundColor: '#1E40AF', borderRadius: 2 },
  time: { fontSize: 11, color: '#64748B', textAlign: 'right' },
  buttons: { flexDirection: 'row', gap: 8 },
  playBtn: {
    flex: 1, backgroundColor: '#1E40AF', paddingVertical: 10, borderRadius: 8,
    alignItems: 'center',
  },
  playBtnLoading: { backgroundColor: '#93C5FD' },
  playBtnText: { color: '#fff', fontWeight: '700', fontSize: 14 },
  stopBtn: {
    paddingHorizontal: 16, paddingVertical: 10, borderRadius: 8,
    backgroundColor: '#E2E8F0', alignItems: 'center',
  },
  stopBtnText: { color: '#475569', fontWeight: '600', fontSize: 14 },
  error: { marginTop: 8, fontSize: 12, color: '#DC2626' },
  hint: { marginTop: 6, fontSize: 11, color: '#94A3B8', fontStyle: 'italic' },
});
