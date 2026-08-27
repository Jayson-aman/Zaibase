import React, { useState, useCallback, useMemo, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import * as Speech from 'expo-speech';

export type MCQChoice = { key: 'A' | 'B' | 'C' | 'D'; text: string; explanation?: string };
export type MCQQuestion = {
  id: string;
  question: string;
  choices: MCQChoice[];
  correctKey: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  difficulty?: 'basic' | 'standard' | 'advanced';
  category?: string;
  audioScript?: string;
};

type Props = {
  questions: MCQQuestion[];
  accentColor?: string;
  onComplete?: (correct: number, total: number) => void;
};

const CHOICE_KEYS: Array<'A' | 'B' | 'C' | 'D'> = ['A', 'B', 'C', 'D'];
const CHOICE_COLORS = { A: '#6B4226', B: '#2E7D32', C: '#C62828', D: '#7B1FA2' };

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function MCQQuiz({ questions, accentColor = '#6E645C', onComplete }: Props) {
  // questions は呼び出し側で毎回 slice() され新しい配列になるため、
  // [questions] を依存にすると毎レンダーでシャッフルし直され、
  // 回答中に問題がすり替わってしまう。中身が変わった時だけ引き直す。
  const questionsKey = questions.map((q) => q.id).join('|');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const shuffled = useMemo(() => shuffle(questions), [questionsKey]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  const q = shuffled[index];
  // ※ 範囲外チェックはこの関数の末尾（全フックの呼び出し後）にある `if (!q)` で行う。
  //    ここで早期returnするとフック数がレンダーごとに変わり、Reactが落ちる。

  useEffect(() => {
    Speech.stop();
    setSpeaking(false);
  }, [index]);

  useEffect(() => () => { Speech.stop(); }, []);

  const handlePlayAudio = useCallback(() => {
    if (!q?.audioScript) return;
    if (speaking) {
      Speech.stop();
      setSpeaking(false);
      return;
    }
    setSpeaking(true);
    Speech.speak(q.audioScript, {
      language: 'en-US',
      rate: 0.95,
      onDone: () => setSpeaking(false),
      onStopped: () => setSpeaking(false),
      onError: () => setSpeaking(false),
    });
  }, [q, speaking]);

  const handleSelect = useCallback((key: 'A' | 'B' | 'C' | 'D') => {
    if (selected !== null) return;
    setSelected(key);
    if (key === q.correctKey) {
      setCorrectCount(c => c + 1);
    }
  }, [selected, q]);

  const handleNext = useCallback(() => {
    if (index + 1 >= shuffled.length) {
      setFinished(true);
      onComplete?.(correctCount, shuffled.length);
    } else {
      setIndex(i => i + 1);
      setSelected(null);
    }
  }, [index, shuffled.length, correctCount, onComplete]);

  const restart = useCallback(() => {
    setIndex(0);
    setSelected(null);
    setCorrectCount(0);
    setFinished(false);
  }, []);

  if (!q) {
    return (
      <View style={styles.resultBox}>
        <Text style={styles.resultMsg}>問題を準備中です。</Text>
      </View>
    );
  }

  if (finished) {
    const pct = Math.round((correctCount / shuffled.length) * 100);
    return (
      <ScrollView contentContainerStyle={styles.resultBox}>
        <Text style={styles.resultEmoji}>{pct >= 80 ? '🎉' : pct >= 60 ? '📚' : '💪'}</Text>
        <Text style={styles.resultTitle}>結果発表</Text>
        <Text style={[styles.resultScore, { color: accentColor }]}>{correctCount} / {shuffled.length}問正解</Text>
        <Text style={styles.resultPct}>{pct}%</Text>
        <Text style={styles.resultMsg}>
          {pct >= 80 ? '素晴らしい！合格ラインを突破しています。' : pct >= 60 ? 'もう一息！苦手分野を復習しましょう。' : '基礎からしっかり復習しましょう。'}
        </Text>
        <TouchableOpacity style={[styles.restartBtn, { backgroundColor: accentColor }]} onPress={restart}>
          <Text style={styles.restartBtnText}>もう一度挑戦する</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  const answered = selected !== null;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Progress */}
      <View style={styles.progressRow}>
        <Text style={styles.progressText}>{index + 1} / {shuffled.length}</Text>
        {q.difficulty && (
          <View style={[styles.diffBadge, { backgroundColor: q.difficulty === 'basic' ? '#2E7D32' : q.difficulty === 'standard' ? '#E65100' : '#C62828' }]}>
            <Text style={styles.diffText}>{q.difficulty === 'basic' ? '基礎' : q.difficulty === 'standard' ? '標準' : '応用'}</Text>
          </View>
        )}
        {q.category && <Text style={styles.categoryText}>{q.category}</Text>}
      </View>

      {/* Progress bar */}
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${((index + 1) / shuffled.length) * 100}%`, backgroundColor: accentColor }]} />
      </View>

      {/* Question */}
      <View style={styles.questionBox}>
        {q.audioScript && (
          <TouchableOpacity
            style={[styles.playAudioBtn, { backgroundColor: speaking ? '#C62828' : accentColor }]}
            onPress={handlePlayAudio}
            activeOpacity={0.8}
          >
            <Text style={styles.playAudioBtnText}>{speaking ? '⏹ 停止' : '🔊 音声を再生'}</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.questionText}>{q.question}</Text>
      </View>

      {/* Choices */}
      <View style={styles.choicesBox}>
        {CHOICE_KEYS.map(key => {
          const choice = q.choices.find(c => c.key === key);
          if (!choice) return null;
          const isSelected = selected === key;
          const isCorrect = key === q.correctKey;
          const showResult = answered;

          let bg = '#FFFFFF';
          let border = '#E0E0E0';
          const textColor = '#221C18';
          if (showResult) {
            if (isCorrect) { bg = '#E8F5E9'; border = '#2E7D32'; }
            else if (isSelected && !isCorrect) { bg = '#FFEBEE'; border = '#C62828'; }
          } else if (isSelected) {
            bg = '#F5EFE4'; border = accentColor;
          }

          return (
            <TouchableOpacity
              key={key}
              style={[styles.choice, { backgroundColor: bg, borderColor: border }]}
              onPress={() => handleSelect(key)}
              activeOpacity={answered ? 1 : 0.75}
            >
              <View style={[styles.choiceKey, { backgroundColor: CHOICE_COLORS[key] }]}>
                <Text style={styles.choiceKeyText}>{key}</Text>
              </View>
              <Text style={[styles.choiceText, { color: textColor }]}>{choice.text}</Text>
              {showResult && (isSelected || isCorrect) && (
                <Text style={styles.choiceMark}>{isCorrect ? '✓' : '✗'}</Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Explanation (shown after answer) */}
      {answered && (
        <View style={styles.explanationBox}>
          <Text style={[styles.explanationLabel, { color: selected === q.correctKey ? '#2E7D32' : '#C62828' }]}>
            {selected === q.correctKey ? '✓ 正解！' : `✗ 不正解（正解：${q.correctKey}）`}
          </Text>
          {q.audioScript && (
            <View style={styles.scriptBox}>
              <Text style={styles.scriptLabel}>🎧 スクリプト</Text>
              <Text style={styles.scriptText}>{q.audioScript}</Text>
            </View>
          )}
          <Text style={styles.explanationMain}>{q.explanation}</Text>
          {q.choices.some(c => c.explanation) && (
            <>
              <Text style={styles.explanationSub}>各選択肢の解説：</Text>
              {q.choices.filter(c => c.explanation).map(c => (
                <View key={c.key} style={styles.choiceExplRow}>
                  <View style={[styles.choiceKeySmall, { backgroundColor: CHOICE_COLORS[c.key] }]}>
                    <Text style={styles.choiceKeySmallText}>{c.key}</Text>
                  </View>
                  <Text style={[styles.choiceExplText, c.key === q.correctKey && styles.choiceExplCorrect]}>{c.explanation}</Text>
                </View>
              ))}
            </>
          )}
        </View>
      )}

      {/* Next button */}
      {answered && (
        <TouchableOpacity style={[styles.nextBtn, { backgroundColor: accentColor }]} onPress={handleNext}>
          <Text style={styles.nextBtnText}>{index + 1 >= shuffled.length ? '結果を見る' : '次の問題 →'}</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAF7F2' },
  content: { padding: 16, paddingBottom: 40 },
  progressRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8, gap: 8 },
  progressText: { fontSize: 13, fontWeight: '700', color: '#666' },
  diffBadge: { borderRadius: 8, paddingHorizontal: 8, paddingVertical: 2 },
  diffText: { fontSize: 11, fontWeight: '700', color: '#FFF' },
  categoryText: { fontSize: 11, color: '#888', fontWeight: '600', flex: 1, textAlign: 'right' },
  progressBar: { height: 4, backgroundColor: '#E0E0E0', borderRadius: 2, marginBottom: 16 },
  progressFill: { height: 4, borderRadius: 2 },
  questionBox: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 18, marginBottom: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.08, shadowRadius: 8, elevation: 3 },
  questionText: { fontSize: 16, fontWeight: '700', color: '#221C18', lineHeight: 26 },
  playAudioBtn: { alignSelf: 'flex-start', borderRadius: 12, paddingVertical: 10, paddingHorizontal: 18, marginBottom: 14 },
  playAudioBtnText: { fontSize: 14, fontWeight: '800', color: '#FFFFFF' },
  scriptBox: { backgroundColor: '#FAF7F2', borderRadius: 12, padding: 14, marginBottom: 12 },
  scriptLabel: { fontSize: 12, fontWeight: '800', color: '#888', marginBottom: 6 },
  scriptText: { fontSize: 14, color: '#333', lineHeight: 22, fontStyle: 'italic' },
  choicesBox: { gap: 10, marginBottom: 16 },
  choice: { flexDirection: 'row', alignItems: 'center', borderRadius: 14, padding: 14, borderWidth: 2, gap: 12 },
  choiceKey: { width: 32, height: 32, borderRadius: 8, alignItems: 'center', justifyContent: 'center' },
  choiceKeyText: { fontSize: 14, fontWeight: '900', color: '#FFF' },
  choiceText: { flex: 1, fontSize: 14, fontWeight: '600', lineHeight: 22 },
  choiceMark: { fontSize: 20, fontWeight: '900' },
  explanationBox: { backgroundColor: '#FFF', borderRadius: 16, padding: 16, marginBottom: 16, gap: 8 },
  explanationLabel: { fontSize: 16, fontWeight: '900', marginBottom: 4 },
  explanationMain: { fontSize: 14, color: '#333', lineHeight: 22, fontWeight: '500' },
  explanationSub: { fontSize: 13, fontWeight: '700', color: '#555', marginTop: 8 },
  choiceExplRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 8 },
  choiceKeySmall: { width: 22, height: 22, borderRadius: 5, alignItems: 'center', justifyContent: 'center', marginTop: 2 },
  choiceKeySmallText: { fontSize: 11, fontWeight: '900', color: '#FFF' },
  choiceExplText: { flex: 1, fontSize: 13, color: '#555', lineHeight: 20 },
  choiceExplCorrect: { color: '#2E7D32', fontWeight: '700' },
  nextBtn: { borderRadius: 14, paddingVertical: 16, alignItems: 'center', marginTop: 4 },
  nextBtnText: { fontSize: 16, fontWeight: '900', color: '#FFF' },
  resultBox: { flexGrow: 1, alignItems: 'center', justifyContent: 'center', padding: 32, gap: 12 },
  resultEmoji: { fontSize: 72, marginBottom: 8 },
  resultTitle: { fontSize: 24, fontWeight: '900', color: '#221C18' },
  resultScore: { fontSize: 36, fontWeight: '900' },
  resultPct: { fontSize: 20, fontWeight: '700', color: '#666' },
  resultMsg: { fontSize: 15, color: '#555', textAlign: 'center', lineHeight: 24 },
  restartBtn: { borderRadius: 14, paddingVertical: 14, paddingHorizontal: 32, marginTop: 16 },
  restartBtnText: { fontSize: 16, fontWeight: '900', color: '#FFF' },
});
