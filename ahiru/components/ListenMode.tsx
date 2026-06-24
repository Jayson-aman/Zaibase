import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Question } from '../data/questions';
import {
  speak,
  stopSpeech,
  pauseSpeech,
  resumeSpeech,
  toSpeechText,
} from '../utils/speech';
import AnimatedMascot from './AnimatedMascot';
import {
  listenMascot,
  getQuestionIllustration,
  getHistoryThemeLabel,
} from '../data/images';

type Phase =
  | 'idle'
  | 'reading_q'
  | 'pause_q'
  | 'reading_a_prefix'
  | 'reading_a'
  | 'pause_a'
  | 'done';

type Props = {
  visible: boolean;
  questions: Question[];
  subjectName: string;
  subjectEmoji: string;
  subjectColor: string;
  autoStart?: boolean;
  onClose: () => void;
};

const PAUSE_MS = 5000;

type Speed = 'slow' | 'normal' | 'fast';
const SPEED_SCALE: Record<Speed, number> = {
  slow: 0.8,
  normal: 1.0,
  fast: 1.25,
};
const SPEED_OPTIONS: { key: Speed; label: string }[] = [
  { key: 'slow', label: '🐢 ゆっくり' },
  { key: 'normal', label: '🚶 ふつう' },
  { key: 'fast', label: '🐇 速い' },
];

export default function ListenMode({
  visible,
  questions,
  subjectName,
  subjectEmoji,
  subjectColor,
  autoStart = true,
  onClose,
}: Props) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>('idle');
  const [paused, setPaused] = useState(false);
  const [active, setActive] = useState(false);
  const [speed, setSpeed] = useState<Speed>('normal');

  const activeRef = useRef(false);
  const pausedRef = useRef(false);
  const indexRef = useRef(0);
  const phaseRef = useRef<Phase>('idle');
  const speedRef = useRef<Speed>('normal');
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const runIdRef = useRef(0);
  const autoStartedRef = useRef(false);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);
  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);
  useEffect(() => {
    indexRef.current = index;
  }, [index]);
  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);
  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);

  const clearTimer = useCallback(() => {
    if (timerRef.current != null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const stopAll = useCallback(() => {
    clearTimer();
    stopSpeech();
    runIdRef.current += 1;
  }, [clearTimer]);

  const wait = useCallback((ms: number, runId: number) => {
    const startedAt = Date.now();
    let pausedAt: number | null = null;
    let pausedTotal = 0;

    return new Promise<void>((resolve) => {
      const tick = () => {
        if (runId !== runIdRef.current || !activeRef.current) {
          timerRef.current = null;
          resolve();
          return;
        }

        if (pausedRef.current) {
          if (pausedAt == null) pausedAt = Date.now();
          timerRef.current = setTimeout(tick, 200);
          return;
        }

        if (pausedAt != null) {
          pausedTotal += Date.now() - pausedAt;
          pausedAt = null;
        }

        const elapsed = Date.now() - startedAt - pausedTotal;
        if (elapsed >= ms) {
          timerRef.current = null;
          resolve();
          return;
        }

        timerRef.current = setTimeout(tick, ms - elapsed);
      };

      timerRef.current = setTimeout(tick, ms);
    });
  }, []);

  const runFrom = useCallback(
    async (startIdx: number) => {
      const runId = runIdRef.current;

      for (let i = startIdx; i < questions.length; i += 1) {
        if (runId !== runIdRef.current || !activeRef.current) return;

        setIndex(i);
        indexRef.current = i;

        setPhase('reading_q');
        await speak(`問題${i + 1}番`, { rateScale: SPEED_SCALE[speedRef.current] });
        if (runId !== runIdRef.current || !activeRef.current) return;
        await speak(toSpeechText(questions[i].question), { rateScale: SPEED_SCALE[speedRef.current] });
        if (runId !== runIdRef.current || !activeRef.current) return;

        setPhase('pause_q');
        await wait(PAUSE_MS, runId);
        if (runId !== runIdRef.current || !activeRef.current) return;

        setPhase('reading_a_prefix');
        await speak('答えは', { rateScale: SPEED_SCALE[speedRef.current] });
        if (runId !== runIdRef.current || !activeRef.current) return;

        setPhase('reading_a');
        await speak(toSpeechText(questions[i].answer), { rateScale: SPEED_SCALE[speedRef.current] });
        if (runId !== runIdRef.current || !activeRef.current) return;

        setPhase('pause_a');
        await wait(PAUSE_MS, runId);
        if (runId !== runIdRef.current || !activeRef.current) return;
      }

      if (runId !== runIdRef.current || !activeRef.current) return;
      setPhase('done');
      setActive(false);
      activeRef.current = false;
    },
    [questions, wait],
  );

  const startSession = useCallback(() => {
    stopAll();
    const startIdx = phaseRef.current === 'done' ? 0 : indexRef.current;
    if (phaseRef.current === 'done') {
      setIndex(0);
      indexRef.current = 0;
    }
    setPaused(false);
    pausedRef.current = false;
    setActive(true);
    activeRef.current = true;
    runFrom(startIdx);
  }, [runFrom, stopAll]);

  useEffect(() => {
    if (!visible) {
      autoStartedRef.current = false;
      stopAll();
      setActive(false);
      activeRef.current = false;
      setPaused(false);
      pausedRef.current = false;
      setPhase('idle');
      setIndex(0);
      indexRef.current = 0;
      return;
    }

    if (autoStart && !autoStartedRef.current) {
      autoStartedRef.current = true;
      startSession();
    }
  }, [visible, autoStart, startSession, stopAll]);

  function handlePauseToggle() {
    if (!active && phase !== 'done') return;

    if (paused) {
      setPaused(false);
      pausedRef.current = false;
      resumeSpeech();
      return;
    }

    setPaused(true);
    pausedRef.current = true;
    pauseSpeech();
  }

  function handleStop() {
    stopAll();
    setActive(false);
    activeRef.current = false;
    setPaused(false);
    pausedRef.current = false;
    setPhase('idle');
    onClose();
  }

  const q = questions[index] ?? questions[0];
  const total = questions.length;

  const phaseLabel =
    phase === 'reading_q' ? '問題を読んでいます…' :
    phase === 'pause_q' ? '考える時間…' :
    phase === 'reading_a_prefix' || phase === 'reading_a' ? '答えを読んでいます…' :
    phase === 'pause_a' ? '次の問題へ…' :
    phase === 'done' ? '全問終了！' :
    active ? '準備中…' :
    '停止中';

  const historyLabel = getHistoryThemeLabel(q.id);

  return (
    <Modal visible={visible} animationType="slide" statusBarTranslucent>
      <SafeAreaView style={styles.root}>
        <View style={[styles.header, { backgroundColor: subjectColor }]}>
          <Text style={styles.headerTitle}>
            {subjectEmoji} {subjectName} 聞き流し
          </Text>
        </View>

        <View style={styles.progressRow}>
          <Text style={styles.progressText}>
            問題 {index + 1} / {total}
          </Text>
        </View>
        <View style={styles.progressTrack}>
          <View
            style={[
              styles.progressFill,
              { width: `${((index + 1) / total) * 100}%`, backgroundColor: subjectColor },
            ]}
          />
        </View>

        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.animeRow}>
            <AnimatedMascot
              source={getQuestionIllustration(q.subject, q.id)}
              style={styles.sceneImage}
              fallbackEmoji={subjectEmoji}
              animation="float"
              accessibilityLabel="問題シーン"
            />
            <AnimatedMascot
              source={listenMascot}
              style={styles.mascotImage}
              fallbackEmoji="🎧"
              resizeMode="contain"
              animation={active && !paused ? 'pulse' : 'float'}
              accessibilityLabel="聞き流しキャラクター"
            />
          </View>
          {historyLabel != null && (
            <Text style={styles.historyBanner}>🏛 {historyLabel}の問題</Text>
          )}

          <View style={[styles.card, { borderColor: subjectColor }]}>
            <Text style={styles.questionText}>{q.question}</Text>
          </View>

          <View style={styles.statusRow}>
            <View
              style={[
                styles.statusDot,
                { backgroundColor: active && !paused ? '#00A651' : '#CCC' },
              ]}
            />
            <Text
              style={[
                styles.statusText,
                { color: active && !paused ? '#00A651' : '#999' },
              ]}
            >
              {paused ? '一時停止中' : phaseLabel}
            </Text>
          </View>

          <View style={styles.speedRow}>
            <Text style={styles.speedLabel}>読み上げ速度</Text>
            <View style={styles.speedBtns}>
              {SPEED_OPTIONS.map((opt) => {
                const selected = speed === opt.key;
                return (
                  <TouchableOpacity
                    key={opt.key}
                    style={[
                      styles.speedBtn,
                      selected && { backgroundColor: subjectColor, borderColor: subjectColor },
                    ]}
                    onPress={() => setSpeed(opt.key)}
                    activeOpacity={0.85}
                  >
                    <Text style={[styles.speedBtnText, selected && styles.speedBtnTextActive]}>
                      {opt.label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          <View style={styles.controls}>
            <TouchableOpacity
              style={[styles.controlBtn, styles.pauseBtn]}
              onPress={handlePauseToggle}
              disabled={!active || phase === 'done'}
              activeOpacity={0.85}
            >
              <Text style={styles.controlBtnText}>{paused ? '▶ 再開' : '⏸ 一時停止'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.controlBtn, styles.stopBtn]}
              onPress={handleStop}
              activeOpacity={0.85}
            >
              <Text style={styles.stopBtnText}>⏹ 停止</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.tipBox}>
            <Text style={styles.tipText}>
              問題番号 → 問題文 → 5秒 → 「答えは」→ 答え → 5秒 → 次の問題{'\n'}
              イヤホンをつけて聞き流そう 🎧
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#F5F7FA' },
  header: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  progressRow: { alignItems: 'center', paddingVertical: 8 },
  progressText: { fontSize: 16, fontWeight: '800', color: '#1A1A2E' },
  progressTrack: { height: 4, backgroundColor: 'rgba(0,0,0,0.1)' },
  progressFill: { height: '100%', borderRadius: 2 },
  content: { padding: 20, paddingBottom: 40 },
  animeRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
    height: 110,
  },
  sceneImage: {
    flex: 1,
    height: '100%',
    borderRadius: 14,
    backgroundColor: '#EEF4FF',
  },
  mascotImage: {
    width: 88,
    height: '100%',
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#E0E8F5',
  },
  historyBanner: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '800',
    color: '#78350F',
    backgroundColor: '#FFFBEB',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    marginBottom: 20,
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  questionText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1A1A2E',
    lineHeight: 32,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  statusText: { fontSize: 14, fontWeight: '600' },
  speedRow: {
    alignItems: 'center',
    marginBottom: 18,
  },
  speedLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#666',
    marginBottom: 8,
  },
  speedBtns: {
    flexDirection: 'row',
    gap: 8,
  },
  speedBtn: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#D5DCE6',
    backgroundColor: '#FFFFFF',
  },
  speedBtnText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#666',
  },
  speedBtnTextActive: {
    color: '#FFFFFF',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 24,
  },
  controlBtn: {
    flex: 1,
    maxWidth: 160,
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  pauseBtn: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#1E5FBE',
  },
  stopBtn: {
    backgroundColor: '#E74C3C',
  },
  controlBtnText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1E5FBE',
  },
  stopBtnText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  tipBox: {
    backgroundColor: '#EEF4FF',
    borderRadius: 12,
    padding: 16,
  },
  tipText: {
    fontSize: 13,
    color: '#1E5FBE',
    fontWeight: '600',
    lineHeight: 22,
    textAlign: 'center',
  },
});
