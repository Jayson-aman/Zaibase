import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
} from 'react-native';
import type { FPQuestion, FPChoiceKey } from '../data/questions-meta';
import { subjectInfo } from '../data/questions-meta';

type Props = {
  question: FPQuestion;
  onAnswered?: (isCorrect: boolean) => void;
  isWeak?: boolean;
};

export default function QuizCard({ question, onAnswered, isWeak = false }: Props) {
  const [selected, setSelected] = useState<FPChoiceKey | null>(null);
  const info = subjectInfo[question.subject];
  const isAnswered = selected !== null;

  function handleSelect(key: FPChoiceKey) {
    if (isAnswered) return;
    setSelected(key);
    onAnswered?.(key === question.correctKey);
  }

  return (
    <View style={styles.card}>
      {/* ヘッダー */}
      <View style={styles.headerRow}>
        <View style={[styles.chip, { backgroundColor: info.color }]}>
          <Text style={styles.chipText}>{info.emoji} {info.name}</Text>
        </View>
        <Text style={styles.levelChip}>{question.level}</Text>
        {isWeak && <View style={styles.weakChip}><Text style={styles.weakText}>🔴 苦手</Text></View>}
        {question.examFrequency === 'very-high' && (
          <View style={styles.freqChip}><Text style={styles.freqText}>⭐ 頻出</Text></View>
        )}
      </View>

      {/* 問題文 */}
      <Text style={styles.questionText}>{question.question}</Text>

      {/* 選択肢 */}
      <View style={styles.choices}>
        {question.choices.map((choice) => {
          const isCorrect = choice.key === question.correctKey;
          const isSelected = choice.key === selected;
          let bg = '#F8F9FA';
          let borderColor = '#E2E8F0';
          if (isAnswered && isCorrect) { bg = '#D4EDDA'; borderColor = '#28A745'; }
          if (isAnswered && isSelected && !isCorrect) { bg = '#F8D7DA'; borderColor = '#DC3545'; }

          return (
            <TouchableOpacity
              key={choice.key}
              style={[styles.choice, { backgroundColor: bg, borderColor }]}
              onPress={() => handleSelect(choice.key)}
              disabled={isAnswered}
              activeOpacity={0.8}
            >
              <Text style={[styles.choiceKey, isAnswered && isCorrect && { color: '#28A745' }, isAnswered && isSelected && !isCorrect && { color: '#DC3545' }]}>
                {choice.key}
              </Text>
              <View style={styles.choiceRight}>
                <Text style={styles.choiceText}>{choice.text}</Text>
                {isAnswered && (
                  <Text style={[styles.choiceExpl, isCorrect ? styles.correctExpl : styles.wrongExpl]}>
                    {isCorrect ? '✓ ' : '✗ '}{choice.explanation}
                  </Text>
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* 総合解説 */}
      {isAnswered && (
        <View style={styles.explanationBox}>
          <Text style={styles.explanationTitle}>📖 解説</Text>
          <ScrollView nestedScrollEnabled>
            <Text style={styles.explanation}>{question.explanation}</Text>
          </ScrollView>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  headerRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 14,
    alignItems: 'center',
  },
  chip: {
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  chipText: { color: '#fff', fontSize: 13, fontWeight: '600' },
  levelChip: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: '#EEF2FF',
    color: '#4338CA',
    fontSize: 12,
    fontWeight: '700',
  },
  weakChip: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: '#FFE4E4',
  },
  weakText: { color: '#C0392B', fontSize: 12, fontWeight: '600' },
  freqChip: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: '#FFF3CD',
  },
  freqText: { color: '#856404', fontSize: 12, fontWeight: '600' },
  questionText: {
    fontSize: 16,
    lineHeight: 27,
    color: '#1A1A2E',
    fontFamily: Platform.select({
      ios: 'HiraMinProN-W6',
      web: '"Noto Serif JP", serif',
      default: undefined,
    }),
    marginBottom: 16,
  },
  choices: { gap: 10 },
  choice: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderRadius: 12,
    padding: 14,
    borderWidth: 1.5,
    gap: 12,
  },
  choiceKey: {
    fontSize: 16,
    fontWeight: '800',
    color: '#4A90D9',
    minWidth: 22,
    marginTop: 1,
  },
  choiceRight: { flex: 1 },
  choiceText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#2D3748',
  },
  choiceExpl: {
    fontSize: 13,
    lineHeight: 20,
    marginTop: 6,
  },
  correctExpl: { color: '#155724' },
  wrongExpl: { color: '#721C24' },
  explanationBox: {
    marginTop: 16,
    backgroundColor: '#F0F7FF',
    borderRadius: 12,
    padding: 16,
    maxHeight: 260,
  },
  explanationTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0369A1',
    marginBottom: 8,
  },
  explanation: {
    fontSize: 14,
    lineHeight: 24,
    color: '#2D3748',
  },
});
