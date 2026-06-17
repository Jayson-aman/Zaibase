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

const { width, height } = Dimensions.get('window');

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
      activeOpacity={0.9}
      style={[styles.card, revealed && styles.cardRevealed]}
    >
      <View style={styles.illustrationWrap}>
        <AnimatedMascot
          source={illustration}
          style={styles.illustration}
          containerStyle={styles.illustration}
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
          <Text style={styles.questionLabel}>問 題</Text>
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
            containerStyle={styles.answerMascot}
            fallbackEmoji="✨"
            resizeMode="contain"
            animation="pulse"
            accessibilityLabel="正解キャラクター"
          />
          <Text style={styles.answerLabel}>答 え</Text>
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
    borderRadius: 24,
    marginHorizontal: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.14,
    shadowRadius: 14,
    elevation: 8,
  },
  cardRevealed: {
    backgroundColor: '#F0FFF4',
    borderWidth: 3,
    borderColor: '#00A651',
  },
  illustrationWrap: {
    width: '100%',
    height: height * 0.42,
    backgroundColor: '#EEF4FF',
  },
  illustration: {
    width: '100%',
    height: '100%',
  },
  subjectChip: {
    position: 'absolute',
    top: 14,
    left: 14,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
  },
  subjectChipText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
  },
  historyChip: {
    position: 'absolute',
    top: 14,
    right: 14,
    backgroundColor: 'rgba(255,255,255,0.92)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
  },
  historyChipText: {
    color: '#78350F',
    fontSize: 18,
    fontWeight: '800',
  },
  questionSide: {
    alignItems: 'center',
    padding: 28,
    paddingTop: 20,
  },
  questionLabel: {
    fontSize: 22,
    fontWeight: '800',
    color: '#888',
    letterSpacing: 4,
    marginBottom: 14,
  },
  questionText: {
    fontSize: 34,
    fontWeight: '700',
    color: '#1A1A2E',
    textAlign: 'center',
    lineHeight: 50,
    marginBottom: 20,
  },
  tapHint: {
    backgroundColor: '#EEF4FF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 24,
  },
  tapHintText: {
    fontSize: 22,
    color: '#1E5FBE',
    fontWeight: '600',
  },
  answerSide: {
    alignItems: 'center',
    padding: 28,
    paddingTop: 16,
  },
  answerMascot: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
  },
  answerLabel: {
    fontSize: 22,
    fontWeight: '800',
    color: '#00A651',
    letterSpacing: 4,
    marginBottom: 14,
  },
  answerText: {
    fontSize: 36,
    fontWeight: '800',
    color: '#1A1A2E',
    textAlign: 'center',
    lineHeight: 52,
    marginBottom: 20,
  },
  hintBox: {
    backgroundColor: '#FFFBEB',
    borderRadius: 16,
    padding: 18,
    width: '100%',
    borderLeftWidth: 4,
    borderLeftColor: '#F59E0B',
  },
  hintLabel: {
    fontSize: 20,
    fontWeight: '700',
    color: '#B45309',
    marginBottom: 6,
  },
  hintText: {
    fontSize: 20,
    color: '#78350F',
    lineHeight: 30,
  },
});
