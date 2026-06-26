import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
} from 'react-native';
import type { FPQuestion } from '../data/questions-meta';
import { categoryInfo } from '../data/questions-meta';

type Props = {
  question: FPQuestion;
  onAnswered?: (isCorrect: boolean) => void;
  isWeak?: boolean;
};

export default function QuizCard({ question, onAnswered, isWeak = false }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const info = categoryInfo[question.category];
  const isAnswered = selected !== null;

  function handleSelect(choice: string) {
    if (isAnswered) return;
    setSelected(choice);
    onAnswered?.(choice === question.answer);
  }

  const choiceLabels = ['ア', 'イ', 'ウ', 'エ'];

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <View style={[styles.chip, { backgroundColor: info.color }]}>
          <Text style={styles.chipText}>{info.emoji} {info.name}</Text>
        </View>
        {isWeak && (
          <View style={styles.weakChip}>
            <Text style={styles.weakText}>🔴 苦手</Text>
          </View>
        )}
        {question.examFrequency === 'very-high' && (
          <View style={styles.freqChip}>
            <Text style={styles.freqText}>⭐ 頻出</Text>
          </View>
        )}
      </View>

      <Text style={styles.questionText}>{question.question}</Text>

      <View style={styles.choices}>
        {question.choices.map((choice, i) => {
          const isCorrect = choice === question.answer;
          const isSelected = choice === selected;
          let bg = '#F8F9FA';
          if (isAnswered && isCorrect) bg = '#D4EDDA';
          if (isAnswered && isSelected && !isCorrect) bg = '#F8D7DA';
          return (
            <TouchableOpacity
              key={i}
              style={[styles.choice, { backgroundColor: bg }]}
              onPress={() => handleSelect(choice)}
              disabled={isAnswered}
              activeOpacity={0.8}
            >
              <Text style={styles.choiceLabel}>{choiceLabels[i]}</Text>
              <Text style={styles.choiceText}>{choice}</Text>
              {isAnswered && isCorrect && <Text style={styles.correctMark}>✓</Text>}
              {isAnswered && isSelected && !isCorrect && <Text style={styles.wrongMark}>✗</Text>}
            </TouchableOpacity>
          );
        })}
      </View>

      {isAnswered && (
        <View style={styles.explanationBox}>
          <ScrollView nestedScrollEnabled>
            {question.hint && (
              <Text style={styles.hint}>💡 {question.hint}</Text>
            )}
            <Text style={styles.explanation}>{question.explanation}</Text>
            {question.pitfall && (
              <View style={styles.pitfallBox}>
                <Text style={styles.pitfallTitle}>⚠️ よくある間違い</Text>
                <Text style={styles.pitfallText}>{question.pitfall}</Text>
              </View>
            )}
            {question.memoryTip && (
              <View style={styles.memoryBox}>
                <Text style={styles.memoryTitle}>🧠 覚え方</Text>
                <Text style={styles.memoryText}>{question.memoryTip}</Text>
              </View>
            )}
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
  },
  chip: {
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  chipText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
  weakChip: {
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: '#FFE4E4',
  },
  weakText: {
    color: '#C0392B',
    fontSize: 13,
    fontWeight: '600',
  },
  freqChip: {
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: '#FFF3CD',
  },
  freqText: {
    color: '#856404',
    fontSize: 13,
    fontWeight: '600',
  },
  questionText: {
    fontSize: 16,
    lineHeight: 26,
    color: '#1A1A2E',
    fontFamily: Platform.select({ ios: 'HiraMinProN-W6', web: '"Noto Serif JP", serif', default: undefined }),
    marginBottom: 16,
  },
  choices: {
    gap: 10,
  },
  choice: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    gap: 10,
  },
  choiceLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: '#4A90D9',
    minWidth: 20,
  },
  choiceText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
    color: '#2D3748',
  },
  correctMark: {
    fontSize: 18,
    color: '#27AE60',
    fontWeight: '700',
  },
  wrongMark: {
    fontSize: 18,
    color: '#E74C3C',
    fontWeight: '700',
  },
  explanationBox: {
    marginTop: 16,
    backgroundColor: '#F0F7FF',
    borderRadius: 12,
    padding: 16,
    maxHeight: 320,
  },
  hint: {
    fontSize: 13,
    color: '#4A6080',
    fontStyle: 'italic',
    marginBottom: 10,
    lineHeight: 20,
  },
  explanation: {
    fontSize: 14,
    lineHeight: 24,
    color: '#2D3748',
  },
  pitfallBox: {
    marginTop: 12,
    backgroundColor: '#FFF5F5',
    borderRadius: 8,
    padding: 12,
    borderLeftWidth: 3,
    borderLeftColor: '#E74C3C',
  },
  pitfallTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#C0392B',
    marginBottom: 4,
  },
  pitfallText: {
    fontSize: 13,
    lineHeight: 20,
    color: '#5D3A3A',
  },
  memoryBox: {
    marginTop: 12,
    backgroundColor: '#F0FFF4',
    borderRadius: 8,
    padding: 12,
    borderLeftWidth: 3,
    borderLeftColor: '#27AE60',
  },
  memoryTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1E8449',
    marginBottom: 4,
  },
  memoryText: {
    fontSize: 13,
    lineHeight: 20,
    color: '#1A4731',
  },
});
