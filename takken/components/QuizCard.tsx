import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import type { TakkenQuestion } from '../data/questions';

type Props = {
  question: TakkenQuestion;
  onNext?: () => void;
  showNumber?: number;
  totalNumber?: number;
};

const CHOICE_LABELS = ['A', 'B', 'C', 'D'];

export default function QuizCard({ question, onNext, showNumber, totalNumber }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const answered = selected !== null;

  const handleSelect = (idx: number) => {
    if (answered) return;
    setSelected(idx);
  };

  const getChoiceStyle = (idx: number) => {
    if (!answered) return styles.choiceDefault;
    if (idx === question.correctAnswer) return styles.choiceCorrect;
    if (idx === selected) return styles.choiceWrong;
    return styles.choiceOther;
  };

  const getChoiceLabelStyle = (idx: number) => {
    if (!answered) return styles.choiceLabelDefault;
    if (idx === question.correctAnswer) return styles.choiceLabelCorrect;
    if (idx === selected) return styles.choiceLabelWrong;
    return styles.choiceLabelOther;
  };

  const getChoiceIcon = (idx: number) => {
    if (!answered) return null;
    if (idx === question.correctAnswer) return '✅ ';
    if (idx === selected) return '❌ ';
    return '✗ ';
  };

  const isCorrect = selected === question.correctAnswer;

  return (
    <View style={styles.card}>
      {/* ヘッダー */}
      <View style={styles.header}>
        <View style={[styles.subjectBadge, { backgroundColor: SUBJECT_COLORS[question.subject] }]}>
          <Text style={styles.subjectText}>{question.subject}</Text>
        </View>
        {showNumber && totalNumber && (
          <Text style={styles.counter}>{showNumber} / {totalNumber}</Text>
        )}
        <View style={[styles.diffBadge, DIFF_STYLES[question.difficulty]]}>
          <Text style={styles.diffText}>{DIFF_LABELS[question.difficulty]}</Text>
        </View>
      </View>

      {/* 問題文 */}
      <Text style={styles.questionText}>{question.question}</Text>

      {/* 選択肢 */}
      <View style={styles.choices}>
        {question.choices.map((choice, idx) => (
          <TouchableOpacity
            key={idx}
            style={[styles.choiceBtn, getChoiceStyle(idx)]}
            onPress={() => handleSelect(idx)}
            disabled={answered}
            activeOpacity={0.7}
          >
            <View style={[styles.choiceLabelBox, getChoiceLabelStyle(idx)]}>
              <Text style={[styles.choiceLabelText, answered && idx === question.correctAnswer && styles.choiceLabelTextCorrect]}>
                {CHOICE_LABELS[idx]}
              </Text>
            </View>
            <View style={styles.choiceContent}>
              <Text style={[
                styles.choiceText,
                answered && idx === question.correctAnswer && styles.choiceTextCorrect,
                answered && idx === selected && idx !== question.correctAnswer && styles.choiceTextWrong,
              ]}>
                {getChoiceIcon(idx)}{choice}
              </Text>
              {/* 解説（回答後に表示） */}
              {answered && (
                <Text style={[
                  styles.choiceExplanation,
                  idx === question.correctAnswer ? styles.choiceExplanationCorrect
                    : idx === selected ? styles.choiceExplanationWrong
                    : styles.choiceExplanationOther,
                ]}>
                  {question.choiceExplanations[idx]}
                </Text>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* 結果 + 総合解説 */}
      {answered && (
        <View style={[styles.result, isCorrect ? styles.resultCorrect : styles.resultWrong]}>
          <Text style={[styles.resultTitle, isCorrect ? styles.resultTitleCorrect : styles.resultTitleWrong]}>
            {isCorrect ? '🎉 正解！' : '💡 不正解'}
          </Text>
          <Text style={styles.resultExplanation}>{question.correctExplanation}</Text>
          {question.keyPoint && (
            <View style={styles.keyPoint}>
              <Text style={styles.keyPointLabel}>📌 覚えるポイント</Text>
              <Text style={styles.keyPointText}>{question.keyPoint}</Text>
            </View>
          )}
          {question.isRecentChange && (
            <View style={styles.changeBadge}>
              <Text style={styles.changeBadgeText}>🆕 2022〜2024年法改正問題</Text>
            </View>
          )}
          {onNext && (
            <TouchableOpacity style={styles.nextBtn} onPress={onNext}>
              <Text style={styles.nextBtnText}>次の問題へ →</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
}

const SUBJECT_COLORS: Record<string, string> = {
  '権利関係': '#7C3AED',
  '法令上の制限': '#0369A1',
  '宅建業法': '#059669',
  '税・その他': '#B45309',
};

const DIFF_LABELS: Record<string, string> = { basic: '基礎', standard: '標準', advanced: '応用' };
const DIFF_STYLES: Record<string, object> = {
  basic: { backgroundColor: '#DCFCE7' },
  standard: { backgroundColor: '#FEF9C3' },
  advanced: { backgroundColor: '#FEE2E2' },
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 12, gap: 8 },
  subjectBadge: { paddingHorizontal: 10, paddingVertical: 3, borderRadius: 20 },
  subjectText: { color: '#fff', fontSize: 11, fontWeight: '700' },
  counter: { flex: 1, textAlign: 'center', color: '#94A3B8', fontSize: 12 },
  diffBadge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 20 },
  diffText: { fontSize: 11, fontWeight: '600', color: '#374151' },

  questionText: { fontSize: 15, lineHeight: 24, color: '#111827', fontWeight: '500', marginBottom: 16 },

  choices: { gap: 10 },
  choiceBtn: {
    flexDirection: 'row', alignItems: 'flex-start', borderRadius: 10,
    borderWidth: 1.5, overflow: 'hidden',
  },
  choiceDefault: { borderColor: '#E2E8F0', backgroundColor: '#F8FAFC' },
  choiceCorrect: { borderColor: '#16A34A', backgroundColor: '#F0FDF4' },
  choiceWrong: { borderColor: '#DC2626', backgroundColor: '#FEF2F2' },
  choiceOther: { borderColor: '#E2E8F0', backgroundColor: '#FFF7F7' },

  choiceLabelBox: { width: 36, alignItems: 'center', justifyContent: 'center', paddingVertical: 12 },
  choiceLabelDefault: { backgroundColor: '#E2E8F0' },
  choiceLabelCorrect: { backgroundColor: '#16A34A' },
  choiceLabelWrong: { backgroundColor: '#DC2626' },
  choiceLabelOther: { backgroundColor: '#FECACA' },
  choiceLabelText: { fontSize: 13, fontWeight: '800', color: '#374151' },
  choiceLabelTextCorrect: { color: '#fff' },

  choiceContent: { flex: 1, padding: 12 },
  choiceText: { fontSize: 14, lineHeight: 20, color: '#374151' },
  choiceTextCorrect: { color: '#15803D', fontWeight: '600' },
  choiceTextWrong: { color: '#B91C1C', fontWeight: '600' },

  choiceExplanation: { marginTop: 8, fontSize: 12, lineHeight: 18 },
  choiceExplanationCorrect: { color: '#15803D', backgroundColor: '#DCFCE7', padding: 8, borderRadius: 6 },
  choiceExplanationWrong: { color: '#B91C1C', backgroundColor: '#FEE2E2', padding: 8, borderRadius: 6 },
  choiceExplanationOther: { color: '#6B7280', backgroundColor: '#F3F4F6', padding: 8, borderRadius: 6 },

  result: { marginTop: 16, borderRadius: 12, padding: 14 },
  resultCorrect: { backgroundColor: '#F0FDF4', borderWidth: 1, borderColor: '#BBF7D0' },
  resultWrong: { backgroundColor: '#FFF7ED', borderWidth: 1, borderColor: '#FED7AA' },
  resultTitle: { fontSize: 16, fontWeight: '800', marginBottom: 8 },
  resultTitleCorrect: { color: '#15803D' },
  resultTitleWrong: { color: '#C2410C' },
  resultExplanation: { fontSize: 13, lineHeight: 20, color: '#374151' },

  keyPoint: { marginTop: 12, backgroundColor: '#EFF6FF', borderRadius: 8, padding: 10, borderLeftWidth: 3, borderLeftColor: '#1E40AF' },
  keyPointLabel: { fontSize: 11, fontWeight: '700', color: '#1E40AF', marginBottom: 4 },
  keyPointText: { fontSize: 13, color: '#1E3A8A', lineHeight: 18 },

  changeBadge: { marginTop: 8, backgroundColor: '#FEF3C7', borderRadius: 6, padding: 8, alignSelf: 'flex-start' },
  changeBadgeText: { fontSize: 11, fontWeight: '700', color: '#92400E' },

  nextBtn: {
    marginTop: 14, backgroundColor: '#1E40AF', borderRadius: 10,
    paddingVertical: 12, alignItems: 'center',
  },
  nextBtnText: { color: '#fff', fontWeight: '700', fontSize: 15 },
});
