import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
  ScrollView,
} from 'react-native';

const SERIF = Platform.select({
  ios: 'HiraMinProN-W6',
  web: '"Hiragino Mincho ProN", "Yu Mincho", "Noto Serif JP", Georgia, serif',
  default: undefined,
}) as string | undefined;
import { Question, subjectInfo } from '../data/questions-meta';
import {
  getHistoryThemeLabel,
} from '../data/images';

type Props = {
  question: Question;
  questionIndex?: number;
  onReveal?: () => void;
  choices?: string[];
  onChoiceSelect?: (correct: boolean) => void;
  isPro?: boolean;
};

const { width } = Dimensions.get('window');

function extractTrailingUnit(text: string): string {
  const m = text.trim().match(/(cm²|㎠|cm³|km²|m²|㎡|mm|km|cm|m|kg|g|[%％]|円|羽|本|個|匹|頭|枚|冊|杯|台|艘|門|度|℃|時間|分|秒)$/u);
  return m ? m[1] : '';
}

export default function QuizCard({ question, onReveal, choices, onChoiceSelect, isPro = false }: Props) {
  const [revealed, setRevealed] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const info = subjectInfo[question.subject];
  const historyLabel = getHistoryThemeLabel(question.id);

  function handlePress() {
    if (choices != null || revealed) return;
    setRevealed(true);
    onReveal?.();
  }

  function handleChoicePress(choice: string) {
    if (selectedChoice != null) return;
    const correct = choice === question.answer;
    setSelectedChoice(choice);
    onChoiceSelect?.(correct);
  }

  const choiceLabels = ['A', 'B', 'C', 'D'];

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={choices != null ? 1 : 0.9}
      style={[styles.card, choices == null && revealed && styles.cardRevealed]}
    >
      <View style={styles.subjectChipRow}>
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

      {choices != null ? (
        <View style={styles.choiceSection}>
          {question.passage != null && (
            <View style={styles.passageBox}>
              <Text style={styles.passageLabel}>📄 本 文</Text>
              <ScrollView style={styles.passageScroll} nestedScrollEnabled>
                <Text style={styles.passageText}>{question.passage}</Text>
              </ScrollView>
            </View>
          )}
          <Text style={styles.questionLabel}>問 題</Text>
          <Text style={styles.questionTextChoice}>{question.question}</Text>
          {question.figureDescription != null && (
            <View style={styles.figureBox}>
              <Text style={styles.figureLabel}>📐 図・表</Text>
              <ScrollView horizontal={false}>
                <Text style={styles.figureText}>{question.figureDescription}</Text>
              </ScrollView>
            </View>
          )}
          {(() => {
            const stripLabel = (s: string) => s.replace(/^[A-D]\s+/, '');
            const units = choices.map((c) => extractTrailingUnit(stripLabel(c)));
            const first = units[0] ?? '';
            const sharedUnit = first !== '' && units.every((u) => u === first) ? first : '';
            return (
              <>
                {sharedUnit !== '' && (
                  <View style={styles.sharedUnitWrap}>
                    <Text style={styles.sharedUnitText}>単位：{sharedUnit}</Text>
                  </View>
                )}
                <View style={styles.choicesWrap}>
                  {choices.map((choice, i) => {
                    const isSelected = selectedChoice === choice;
                    const isCorrect = choice === question.answer;
                    const showResult = selectedChoice != null;
                    const stripped = stripLabel(choice.trim());
                    const displayText = sharedUnit !== ''
                      ? stripped.slice(0, stripped.length - sharedUnit.length).trim()
                      : stripped;

                    return (
                      <TouchableOpacity
                        key={`${i}-${choice}`}
                        style={[
                          styles.choiceBtn,
                          showResult && isCorrect && styles.choiceBtnCorrect,
                          showResult && isSelected && !isCorrect && styles.choiceBtnWrong,
                        ]}
                        onPress={() => handleChoicePress(choice)}
                        disabled={selectedChoice != null}
                        activeOpacity={0.75}
                      >
                        <View style={[
                          styles.choiceLetter,
                          showResult && isCorrect && styles.choiceLetterCorrect,
                          showResult && isSelected && !isCorrect && styles.choiceLetterWrong,
                        ]}>
                          <Text style={[
                            styles.choiceLetterText,
                            showResult && (isCorrect || isSelected) && styles.choiceLetterTextResult,
                          ]}>{choiceLabels[i]}</Text>
                        </View>
                        <Text
                          style={[
                            styles.choiceText,
                            showResult && isCorrect && styles.choiceTextCorrect,
                            showResult && isSelected && !isCorrect && styles.choiceTextWrong,
                          ]}
                          numberOfLines={3}
                        >{displayText}</Text>
                        {showResult && isCorrect && (
                          <Text style={styles.choiceCorrectMark}>✓</Text>
                        )}
                        {showResult && isSelected && !isCorrect && (
                          <Text style={styles.choiceWrongMark}>✗</Text>
                        )}
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </>
            );
          })()}

          {selectedChoice != null && (question.explanation != null || question.hint != null) && (
            <View style={styles.hintBox}>
              <Text style={styles.hintLabel}>📖 解説</Text>
              <Text style={styles.hintText}>
                {isPro ? (question.explanation ?? question.hint) : (question.hint ?? question.explanation?.split('\n')[0])}
              </Text>
              {!isPro && question.explanation && !question.hint && (
                <Text style={styles.upgradeNudge}>🔒 詳細解説はProプランで</Text>
              )}
            </View>
          )}
        </View>
      ) : !revealed ? (
        <View style={styles.questionSide}>
          {question.passage != null && (
            <View style={styles.passageBox}>
              <Text style={styles.passageLabel}>📄 本 文</Text>
              <ScrollView style={styles.passageScroll} nestedScrollEnabled>
                <Text style={styles.passageText}>{question.passage}</Text>
              </ScrollView>
            </View>
          )}
          <Text style={styles.questionLabel}>問 題</Text>
          <Text style={styles.questionText}>{question.question}</Text>
          {question.figureDescription != null && (
            <View style={styles.figureBox}>
              <Text style={styles.figureLabel}>📐 図・表</Text>
              <Text style={styles.figureText}>{question.figureDescription}</Text>
            </View>
          )}
          <View style={styles.tapHint}>
            <Text style={styles.tapHintText}>タップして答えを見る 👆</Text>
          </View>
        </View>
      ) : (
        <View style={styles.answerSide}>
          <Text style={styles.answerLabel}>答 え</Text>
          <Text style={styles.answerText}>{question.answer}</Text>
          {(question.explanation != null || question.hint != null) && (
            <View style={styles.hintBox}>
              <Text style={styles.hintLabel}>📖 解説</Text>
              <Text style={styles.hintText}>
                {isPro ? (question.explanation ?? question.hint) : (question.hint ?? question.explanation?.split('\n')[0])}
              </Text>
              {!isPro && question.explanation && !question.hint && (
                <Text style={styles.upgradeNudge}>🔒 詳細解説はProプランで</Text>
              )}
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
  subjectChipRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 4,
    flexWrap: 'wrap',
  },
  subjectChip: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
  },
  subjectChipText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
  },
  historyChip: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
  },
  historyChipText: {
    color: '#78350F',
    fontSize: 16,
    fontWeight: '800',
  },
  // Choice mode
  choiceSection: {
    padding: 20,
    paddingTop: 14,
  },
  sharedUnitWrap: {
    backgroundColor: '#EEF4FF',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 6,
    alignSelf: 'flex-start',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#C5D8F8',
  },
  sharedUnitText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1E5FBE',
  },
  choicesWrap: {
    gap: 10,
    marginTop: 14,
  },
  choiceBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFBFF',
    borderWidth: 2,
    borderColor: '#D6E0FF',
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 14,
    gap: 12,
  },
  choiceBtnCorrect: {
    backgroundColor: '#E8F8EE',
    borderColor: '#00A651',
  },
  choiceBtnWrong: {
    backgroundColor: '#FEE8E6',
    borderColor: '#E74C3C',
  },
  choiceLetter: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#EEF4FF',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  choiceLetterCorrect: {
    backgroundColor: '#00A651',
  },
  choiceLetterWrong: {
    backgroundColor: '#E74C3C',
  },
  choiceLetterText: {
    fontSize: 19,
    fontWeight: '800',
    color: '#1E5FBE',
  },
  choiceLetterTextResult: {
    color: '#FFFFFF',
  },
  choiceText: {
    flex: 1,
    fontSize: 21,
    fontWeight: '600',
    color: '#1A1A2E',
    lineHeight: 30,
    fontFamily: SERIF,
  },
  choiceTextCorrect: {
    color: '#006B35',
    fontWeight: '700',
  },
  choiceTextWrong: {
    color: '#C0392B',
  },
  choiceCorrectMark: {
    fontSize: 24,
    fontWeight: '900',
    color: '#00A651',
    flexShrink: 0,
  },
  choiceWrongMark: {
    fontSize: 24,
    fontWeight: '900',
    color: '#E74C3C',
    flexShrink: 0,
  },
  // Flip-card mode (original)
  questionSide: {
    alignItems: 'center',
    padding: 28,
    paddingTop: 20,
  },
  questionLabel: {
    fontSize: 16,
    fontWeight: '800',
    color: '#888',
    letterSpacing: 4,
    marginBottom: 10,
    textAlign: 'left',
    fontFamily: SERIF,
  },
  questionText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1A1A2E',
    textAlign: 'left',
    lineHeight: 44,
    marginBottom: 20,
    fontFamily: SERIF,
  },
  questionTextChoice: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1A1A2E',
    textAlign: 'left',
    lineHeight: 34,
    marginBottom: 4,
    fontFamily: SERIF,
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
  answerLabel: {
    fontSize: 22,
    fontWeight: '800',
    color: '#00A651',
    letterSpacing: 4,
    marginBottom: 14,
    fontFamily: SERIF,
  },
  answerText: {
    fontSize: 36,
    fontWeight: '800',
    color: '#1A1A2E',
    textAlign: 'center',
    lineHeight: 52,
    marginBottom: 20,
    fontFamily: SERIF,
  },
  passageBox: {
    backgroundColor: '#FFFDF5',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1.5,
    borderColor: '#D4B896',
    width: '100%',
  },
  passageLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#7C5C2E',
    marginBottom: 8,
    letterSpacing: 1,
  },
  passageScroll: {
    maxHeight: 200,
  },
  passageText: {
    fontSize: 16,
    color: '#2A1A0A',
    lineHeight: 28,
    fontFamily: SERIF,
  },
  figureBox: {
    backgroundColor: '#F0F7FF',
    borderRadius: 12,
    padding: 14,
    marginTop: 10,
    marginBottom: 4,
    borderWidth: 1.5,
    borderColor: '#B8D4F8',
    width: '100%',
  },
  figureLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1E5FBE',
    marginBottom: 6,
    letterSpacing: 1,
  },
  figureText: {
    fontSize: 16,
    color: '#1A1A2E',
    lineHeight: 26,
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
  },
  hintBox: {
    backgroundColor: '#FFFBEB',
    borderRadius: 16,
    padding: 18,
    width: '100%',
    borderLeftWidth: 4,
    borderLeftColor: '#F59E0B',
    marginTop: 14,
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
  upgradeNudge: {
    fontSize: 16,
    color: '#0284C7',
    marginTop: 8,
    fontWeight: '600',
  },
});
