import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
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
import SubjectIcon from './SubjectIcon';
import { getHistoryThemeLabel } from '../data/images';
import { getSubjectThemeLabel, getSubjectIllustration } from '../data/subjectImages';
import { getFigure } from '../data/figures';
import FigureView from './FigureView';
import { getQuestionVideo } from '../data/videos';
import VideoPlayer from './VideoPlayer';

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

/**
 * 文字数に応じて字の大きさを決める。
 *
 * 短い答え（「胃」など）は大きく見せたいが、化学反応式や長い記述解答まで
 * 同じ大きさで出すと1画面に収まらず、変なところで折り返して読みにくくなる。
 * 長いものほど小さくして、行間も字の大きさに合わせる。
 */
function fitText(text: string, max: number, min: number, longAt = 90) {
  const len = text.length;
  const ratio = Math.min(1, Math.max(0, (len - 12) / (longAt - 12)));
  const fontSize = Math.round((max - (max - min) * ratio) * 10) / 10;
  return { fontSize, lineHeight: Math.round(fontSize * 1.6) };
}

export default function QuizCard({ question, onReveal, choices, onChoiceSelect, isPro = false }: Props) {
  const [revealed, setRevealed] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const info = subjectInfo[question.subject];
  // 単元テーマ判定（理科・社会）：問題文＋解説からキーワードで自動分類
  const themeText = `${question.question} ${question.explanation ?? ''}`;
  // キャラクター（マンガ風）イラストは各教科の問題カードから削除済み。
  // 単元ラベル（🏛/🔬 のテキストチップ）のみ残す。
  const historyLabel = getHistoryThemeLabel(question.id)
    ?? getSubjectThemeLabel(question.subject, themeText);
  // ベクター図形（座標グラフ・図形・立体・化学式など）。あれば図で表示。
  const figure = getFigure(question.id);
  // 図形化しにくい理科・社会の単元（植物のつくり・人体・時代の様子など）はAI生成の単元イラストで補う。
  // ベクター図形がある問題は図の方が正確なので、そちらを優先する。
  const illustration = figure == null ? getSubjectIllustration(question.subject, themeText) : null;
  // 解説動画（レジストリ or 問題データの videoUrl）。あれば解答側で再生。
  const video = getQuestionVideo(question.id, question.videoUrl);

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

  // 長い問題文・解答ほど小さくして、折り返しで読みにくくならないようにする
  const qFit = fitText(question.question, 21, 17);
  const aFit = fitText(question.answer, 25, 17, 70);
  const answerAlign = question.answer.length > 18 ? 'left' : 'center';

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={choices != null ? 1 : 0.9}
      style={[styles.card, choices == null && revealed && styles.cardRevealed]}
    >
      <View style={styles.subjectChipRow}>
        <View style={[styles.subjectChip, { backgroundColor: info.color }]}>
          <SubjectIcon subject={question.subject} size={16} color="#FFFFFF" strokeWidth={2.2} />
          <Text style={styles.subjectChipText}>{info.name}</Text>
        </View>
        {historyLabel != null && (
          <View style={styles.historyChip}>
            <Text style={styles.historyChipText}>
              {question.subject === 'rika' ? '🔬' : '🏛'} {historyLabel}
            </Text>
          </View>
        )}
        {question.isWritten && (
          <View style={styles.writtenChip}>
            <Text style={styles.writtenChipText}>✍️ 記述式</Text>
          </View>
        )}
        {question.subQuestions != null && question.subQuestions.length > 0 && (
          <View style={styles.subQChip}>
            <Text style={styles.subQChipText}>📋 小問{question.subQuestions.length}問</Text>
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
          <Text style={[styles.questionTextChoice, qFit]}>{question.question}</Text>
          {figure != null ? (
            <FigureView figure={figure} />
          ) : illustration != null ? (
            <Image source={illustration} style={styles.subjectImage} resizeMode="cover" />
          ) : question.figureDescription != null ? (
            <View style={styles.figureBox}>
              <Text style={styles.figureLabel}>📐 図・表</Text>
              <ScrollView horizontal={false}>
                <Text style={styles.figureText}>{question.figureDescription}</Text>
              </ScrollView>
            </View>
          ) : null}
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
          <Text style={[styles.questionText, qFit]}>{question.question}</Text>
          {figure != null ? (
            <FigureView figure={figure} />
          ) : illustration != null ? (
            <Image source={illustration} style={styles.subjectImage} resizeMode="cover" />
          ) : question.figureDescription != null ? (
            <View style={styles.figureBox}>
              <Text style={styles.figureLabel}>📐 図・表</Text>
              <Text style={styles.figureText}>{question.figureDescription}</Text>
            </View>
          ) : null}
          {question.subQuestions != null && question.subQuestions.length > 0 && (
            <View style={styles.subQList}>
              {question.subQuestions.map((sq) => (
                <View key={sq.label} style={styles.subQRow}>
                  <Text style={styles.subQLabel}>{sq.label}</Text>
                  <Text style={styles.subQPrompt}>{sq.prompt}</Text>
                </View>
              ))}
            </View>
          )}
          <View style={styles.tapHint}>
            <Text style={styles.tapHintText}>
              {question.isWritten ? '自分の言葉で説明してから、タップして模範解答を見る 👆' : 'タップして答えを見る 👆'}
            </Text>
          </View>
        </View>
      ) : (
        <View style={styles.answerSide}>
          {question.subQuestions != null && question.subQuestions.length > 0 ? (
            <View style={styles.subQAnswerList}>
              {question.subQuestions.map((sq) => (
                <View key={sq.label} style={styles.subQAnswerRow}>
                  <Text style={styles.subQAnswerLabel}>{sq.label}　{sq.prompt}</Text>
                  <Text style={styles.subQAnswerText}>{sq.answer}</Text>
                  {sq.explanation != null && (
                    <Text style={styles.subQAnswerExpl}>{sq.explanation}</Text>
                  )}
                </View>
              ))}
            </View>
          ) : (
            <>
              <Text style={styles.answerLabel}>{question.isWritten ? '模範解答' : '答 え'}</Text>
              <Text style={[styles.answerText, aFit, { textAlign: answerAlign }]}>
                {question.answer}
              </Text>
            </>
          )}
          {question.isWritten && question.rubricPoints != null && question.rubricPoints.length > 0 && (
            <View style={styles.rubricBox}>
              <Text style={styles.rubricLabel}>✅ 自己採点チェックリスト</Text>
              {question.rubricPoints.map((p, i) => (
                <View key={i} style={styles.rubricRow}>
                  <Text style={styles.rubricCheck}>☑</Text>
                  <Text style={styles.rubricText}>{p}</Text>
                </View>
              ))}
            </View>
          )}
          {figure != null ? (
            <FigureView figure={figure} animated />
          ) : illustration != null ? (
            <Image source={illustration} style={styles.subjectImage} resizeMode="cover" />
          ) : null}
          {video != null && <VideoPlayer url={video.url} title={video.title} />}
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
    borderRadius: 14,
    marginHorizontal: 16,
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: '#DCD3C5',
    shadowColor: '#1F1912',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
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
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
  },
  subjectChipText: {
    color: '#FFFFFF',
    fontSize: 13,
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
    fontSize: 12,
    fontWeight: '800',
  },
  writtenChip: {
    backgroundColor: '#EDE7F6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
  },
  writtenChipText: {
    color: '#4527A0',
    fontSize: 11.5,
    fontWeight: '800',
  },
  subQChip: {
    backgroundColor: '#E0F2F1',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
  },
  subQChipText: {
    color: '#00695C',
    fontSize: 11.5,
    fontWeight: '800',
  },
  subQList: {
    marginTop: 14,
    gap: 10,
  },
  subQRow: {
    backgroundColor: '#FAF7F2',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DCD3C5',
    padding: 12,
  },
  subQLabel: {
    fontSize: 13,
    fontWeight: '900',
    color: '#6E645C',
    marginBottom: 4,
  },
  subQPrompt: {
    fontSize: 15,
    color: '#1F1912',
    lineHeight: 22,
  },
  subQAnswerList: {
    gap: 12,
    marginBottom: 8,
  },
  subQAnswerRow: {
    backgroundColor: 'rgba(0,166,81,0.06)',
    borderRadius: 12,
    borderLeftWidth: 3,
    borderLeftColor: '#00A651',
    padding: 12,
  },
  subQAnswerLabel: {
    fontSize: 13,
    fontWeight: '800',
    color: '#6E645C',
    marginBottom: 4,
  },
  subQAnswerText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#00694A',
  },
  subQAnswerExpl: {
    fontSize: 13,
    color: '#6E645C',
    lineHeight: 19,
    marginTop: 4,
  },
  rubricBox: {
    backgroundColor: '#FFFBEB',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FDE68A',
    padding: 14,
    marginTop: 12,
    marginBottom: 4,
  },
  rubricLabel: {
    fontSize: 14,
    fontWeight: '800',
    color: '#92400E',
    marginBottom: 8,
  },
  rubricRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 6,
    gap: 6,
  },
  rubricCheck: {
    fontSize: 14,
    color: '#92400E',
    marginTop: 1,
  },
  rubricText: {
    flex: 1,
    fontSize: 14,
    color: '#78350F',
    lineHeight: 21,
  },
  // Choice mode
  choiceSection: {
    padding: 20,
    paddingTop: 14,
  },
  sharedUnitWrap: {
    backgroundColor: '#F5EFE4',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 6,
    alignSelf: 'flex-start',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#E8DCC8',
  },
  sharedUnitText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#6B4226',
  },
  choicesWrap: {
    gap: 10,
    marginTop: 14,
  },
  choiceBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAF7F2',
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
    backgroundColor: '#F5EFE4',
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
    fontSize: 15,
    fontWeight: '800',
    color: '#6B4226',
  },
  choiceLetterTextResult: {
    color: '#FFFFFF',
  },
  choiceText: {
    flex: 1,
    fontSize: 17,
    fontWeight: '600',
    color: '#221C18',
    lineHeight: 26,
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
    fontSize: 19,
    fontWeight: '900',
    color: '#00A651',
    flexShrink: 0,
  },
  choiceWrongMark: {
    fontSize: 19,
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
    fontSize: 11.5,
    fontWeight: '800',
    color: '#888',
    letterSpacing: 3,
    marginBottom: 10,
    textAlign: 'left',
    fontFamily: SERIF,
  },
  questionText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#221C18',
    textAlign: 'left',
    lineHeight: 32,
    marginBottom: 20,
    fontFamily: SERIF,
  },
  questionTextChoice: {
    fontSize: 18,
    fontWeight: '700',
    color: '#221C18',
    textAlign: 'left',
    lineHeight: 29,
    marginBottom: 4,
    fontFamily: SERIF,
  },
  tapHint: {
    backgroundColor: '#F5EFE4',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 24,
  },
  tapHintText: {
    fontSize: 15,
    color: '#6B4226',
    fontWeight: '600',
  },
  answerSide: {
    alignItems: 'center',
    padding: 28,
    paddingTop: 16,
  },
  answerLabel: {
    fontSize: 13,
    fontWeight: '800',
    color: '#00A651',
    letterSpacing: 3,
    marginBottom: 14,
    fontFamily: SERIF,
  },
  answerText: {
    fontSize: 25,
    fontWeight: '800',
    color: '#221C18',
    textAlign: 'center',
    lineHeight: 40,
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
    fontSize: 14.5,
    color: '#2A1A0A',
    lineHeight: 25,
    fontFamily: SERIF,
  },
  subjectImage: {
    // 正方形だと1画面をイラストだけで埋めてしまい、問題文も「タップして答えを見る」も
    // 画面外に押し出されてしまうので、横長に抑えて高さに上限をつける。
    width: '100%',
    aspectRatio: 16 / 10,
    maxHeight: 190,
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 4,
    backgroundColor: '#F5EFE4',
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
    color: '#6B4226',
    marginBottom: 6,
    letterSpacing: 1,
  },
  figureText: {
    fontSize: 13.5,
    color: '#221C18',
    lineHeight: 22,
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
    fontSize: 13.5,
    fontWeight: '700',
    color: '#B45309',
    marginBottom: 6,
  },
  hintText: {
    fontSize: 17,
    color: '#78350F',
    lineHeight: 24,
  },
  upgradeNudge: {
    fontSize: 12.5,
    color: '#8B5A38',
    marginTop: 8,
    fontWeight: '600',
  },
});
