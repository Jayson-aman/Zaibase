import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import type { Question, QuestionSubItem } from '../data/questions-meta';
import type { Figure } from '../data/figures';
import { getFigure } from '../data/figures';
import FigureView from './FigureView';

/**
 * 公式集（koushiki・Question由来）と公式まとめ（formulas・手書きの一問一答）の
 * どちらからも同じ見た目で出せるように正規化した1問分。
 */
export type InlineQuizItem = {
  question: string;
  answer: string;
  explanation?: string;
  figure?: Figure | null;
  /** 記述式（模範解答＋自己採点） */
  isWritten?: boolean;
  rubricPoints?: string[];
  subQuestions?: QuestionSubItem[];
};

export function questionsToQuizItems(questions: Question[]): InlineQuizItem[] {
  return questions.map((q) => ({
    question: q.question,
    answer: q.answer,
    explanation: q.explanation,
    figure: getFigure(q.id),
    isWritten: q.isWritten,
    rubricPoints: q.rubricPoints,
    subQuestions: q.subQuestions,
  }));
}

type Props = {
  items: InlineQuizItem[];
  /** 見出しのラベル（既定：「この公式の一問一答」） */
  label?: string;
};

export default function InlineQuiz({ items, label = 'この公式の一問一答' }: Props) {
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  if (items.length === 0) return null;

  const total = items.length;
  const q = items[Math.min(index, total - 1)];
  const figure = q.figure;

  function go(next: number) {
    setIndex(next);
    setRevealed(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerLabel}>✏️ {label}</Text>
        {total > 1 && (
          <Text style={styles.counter}>
            {index + 1} / {total}
          </Text>
        )}
      </View>

      <Text style={styles.question}>{q.question}</Text>

      {figure != null && <FigureView figure={figure} />}

      {q.subQuestions != null && q.subQuestions.length > 0 && (
        <View style={styles.subList}>
          {q.subQuestions.map((sub, i) => (
            <Text key={i} style={styles.subPrompt}>
              {sub.label} {sub.prompt}
            </Text>
          ))}
        </View>
      )}

      {!revealed && (
        <TouchableOpacity style={styles.revealBtn} activeOpacity={0.85} onPress={() => setRevealed(true)}>
          <Text style={styles.revealBtnText}>答えを見る</Text>
        </TouchableOpacity>
      )}

      {revealed && (
        <View style={styles.answerBox}>
          <Text style={styles.answerLabel}>{q.isWritten ? '模範解答' : '答え'}</Text>
          <Text style={styles.answerText}>{q.answer}</Text>

          {q.subQuestions != null &&
            q.subQuestions.map((sub, i) => (
              <View key={i} style={styles.subAnswer}>
                <Text style={styles.subAnswerLabel}>{sub.label}</Text>
                <Text style={styles.answerText}>{sub.answer}</Text>
                {sub.explanation != null && <Text style={styles.explanationText}>{sub.explanation}</Text>}
              </View>
            ))}

          {q.rubricPoints != null && q.rubricPoints.length > 0 && (
            <View style={styles.rubricBox}>
              <Text style={styles.rubricTitle}>✅ 自己採点チェック（書けていれば○）</Text>
              {q.rubricPoints.map((p, i) => (
                <Text key={i} style={styles.rubricItem}>
                  □ {p}
                </Text>
              ))}
            </View>
          )}

          {q.explanation != null && q.explanation !== '' && (
            <View style={styles.explanationBox}>
              <Text style={styles.explanationTitle}>💡 解説</Text>
              <Text style={styles.explanationText}>{q.explanation}</Text>
            </View>
          )}
        </View>
      )}

      {total > 1 && (
        <View style={styles.navRow}>
          <TouchableOpacity
            style={[styles.navBtn, styles.navBtnBack, index === 0 && styles.navBtnDisabled]}
            onPress={() => go(Math.max(0, index - 1))}
            disabled={index === 0}
            activeOpacity={0.8}
          >
            <Text style={[styles.navBtnText, styles.navBtnBackText]}>◀ 前の問題</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navBtn, index >= total - 1 && styles.navBtnDisabled]}
            onPress={() => go(Math.min(total - 1, index + 1))}
            disabled={index >= total - 1}
            activeOpacity={0.8}
          >
            <Text style={styles.navBtnText}>次の問題 ▶</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E8DCC8',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerLabel: { fontSize: 13, fontWeight: '800', color: '#8B5A38' },
  counter: { fontSize: 12, fontWeight: '700', color: '#9C9186' },
  question: {
    fontSize: 15.5,
    lineHeight: 25,
    color: '#221C18',
    fontWeight: '600',
  },
  subList: { marginTop: 8 },
  subPrompt: {
    fontSize: 15,
    lineHeight: 24,
    color: '#2B2420',
    marginBottom: 2,
  },
  revealBtn: {
    backgroundColor: '#B5622E',
    borderRadius: 8,
    paddingVertical: 11,
    alignItems: 'center',
    marginTop: 12,
  },
  revealBtnText: { color: '#FFFFFF', fontSize: 14.5, fontWeight: '800' },
  answerBox: {
    marginTop: 12,
    backgroundColor: '#FAF6EF',
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E8DCC8',
  },
  answerLabel: { fontSize: 12, fontWeight: '900', color: '#8B5A38', marginBottom: 5 },
  answerText: { fontSize: 15, lineHeight: 24, color: '#2B2420' },
  subAnswer: { marginTop: 10 },
  subAnswerLabel: { fontSize: 13, fontWeight: '800', color: '#8B5A38', marginBottom: 3 },
  rubricBox: {
    marginTop: 12,
    backgroundColor: '#ECFDF5',
    borderRadius: 8,
    padding: 11,
    borderWidth: 1,
    borderColor: '#A7F3D0',
  },
  rubricTitle: { fontSize: 13, fontWeight: '800', color: '#047857', marginBottom: 6 },
  rubricItem: { fontSize: 13.5, lineHeight: 21, color: '#064E3B', marginBottom: 4 },
  explanationBox: {
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#E8DCC8',
    paddingTop: 10,
  },
  explanationTitle: { fontSize: 13, fontWeight: '800', color: '#8B5A38', marginBottom: 5 },
  explanationText: { fontSize: 14, lineHeight: 23, color: '#4A4038' },
  navRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    marginTop: 12,
  },
  navBtn: {
    backgroundColor: '#B5622E',
    borderRadius: 8,
    paddingVertical: 9,
    paddingHorizontal: 16,
  },
  navBtnBack: { backgroundColor: '#EFE7D8' },
  navBtnDisabled: { opacity: 0.4 },
  navBtnText: { color: '#FFFFFF', fontWeight: '800', fontSize: 13.5 },
  navBtnBackText: { color: '#8B5A38' },
});
