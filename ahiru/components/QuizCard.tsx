import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Question, subjectInfo } from '../data/questions';
import {
  getQuestionIllustration,
  getHistoryThemeLabel,
  mascots,
} from '../data/images';
import AnimatedMascot from './AnimatedMascot';

type Props = {
  question: Question;
  questionIndex?: number;
  onReveal?: () => void;
};

const { width } = Dimensions.get('window');

export default function QuizCard({ question, onReveal }: Props) {
  const [revealed, setRevealed] = useState(false);
  const info = subjectInfo[question.subject];
  const illustration = getQuestionIllustration(question.subject, question.id);
  const historyLabel = getHistoryThemeLabel(question.id);

  function handlePress() {
    if (!revealed) {
      setRevealed(true);
      onReveal?.();
    }
  }

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.85}
      style={[styles.card, revealed && styles.cardRevealed]}
    >
      <View style={styles.illustrationWrap}>
        <AnimatedMascot
          source={illustration}
          style={styles.illustration}
          fallbackEmoji={info.emoji}
          animation={revealed ? 'bounce' : 'float'}
          accessibilityLabel="問題イラスト"
        />
        <View style={[styles.subjectChip, { backgroundColor: info.color }]}>
          <Text style={styles.subjectChipText}>
            {info.emoji} {info.name}
          </Text>
        </View>
        {historyLabel != null && (
          <View style={styles.historyChip}>
            <Text style={styles.historyChipText}>🏛 {historyLabel}</Text>
          </View>
        )}
      </View>

      {!revealed ? (
        <View style={styles.questionSide}>
          <Text style={styles.questionLabel}>問題</Text>
          <Text style={styles.questionText}>{question.question}</Text>
          <View style={styles.tapHint}>
            <Text style={styles.tapHintText}>タップして答えを見る 👆</Text>
          </View>
        </View>
      ) : (
        <View style={styles.answerSide}>
          <AnimatedMascot
            source={mascots[question.subject]}
            style={styles.answerMascot}
            fallbackEmoji="✨"
            resizeMode="contain"
            animation="pulse"
            accessibilityLabel="正解キャラクター"
          />
          <Text style={styles.answerLabel}>答え</Text>
          <Text style={styles.answerText}>{question.answer}</Text>
          {question.hint != null && (
            <View style={styles.hintBox}>
              <Text style={styles.hintLabel}>💡 ヒント</Text>
              <Text style={styles.hintText}>{question.hint}</Text>
            </View>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 0,
    marginHorizontal: 16,
    minHeight: 340,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 6,
  },
  cardRevealed: {
    backgroundColor: '#F0FFF4',
    borderWidth: 2,
    borderColor: '#00A651',
  },
  illustrationWrap: {
    width: '100%',
    height: width * 0.42,
    maxHeight: 180,
    backgroundColor: '#EEF4FF',
  },
  illustration: {
    width: '100%',
    height: '100%',
  },
  subjectChip: {
    position: 'absolute',
    top: 10,
    left: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  subjectChipText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
  },
  historyChip: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(255,255,255,0.92)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  historyChipText: {
    color: '#78350F',
    fontSize: 11,
    fontWeight: '800',
  },
  questionSide: {
    alignItems: 'center',
    padding: 24,
    paddingTop: 16,
  },
  questionLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#888',
    letterSpacing: 2,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  questionText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1A1A2E',
    textAlign: 'center',
    lineHeight: 30,
    marginBottom: 16,
  },
  tapHint: {
    backgroundColor: '#EEF4FF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  tapHintText: {
    fontSize: 13,
    color: '#1E5FBE',
    fontWeight: '600',
  },
  answerSide: {
    alignItems: 'center',
    padding: 24,
    paddingTop: 12,
  },
  answerMascot: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
    backgroundColor: '#FFFFFF',
  },
  answerLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#00A651',
    letterSpacing: 2,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  answerText: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1A1A2E',
    textAlign: 'center',
    lineHeight: 32,
    marginBottom: 16,
  },
  hintBox: {
    backgroundColor: '#FFFBEB',
    borderRadius: 12,
    padding: 14,
    width: '100%',
    borderLeftWidth: 3,
    borderLeftColor: '#F59E0B',
  },
  hintLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#B45309',
    marginBottom: 4,
  },
  hintText: {
    fontSize: 13,
    color: '#78350F',
    lineHeight: 20,
  },
});
