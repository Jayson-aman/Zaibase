import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { questionsBySubject, subjectInfo, SubjectKey, Question } from '../../data/questions';
import { ALL_COURSES } from '../../data/courses';
import type { CourseKey, ExamType } from '../../data/courses';
import { explanationsSansu } from '../../data/explanations_sansu';
import { explanationsKokugo } from '../../data/explanations_kokugo';
import { explanationsRika } from '../../data/explanations_rika';
import { explanationsShakai } from '../../data/explanations_shakai';
import { explanationsEigo } from '../../data/explanations_eigo';

const allExplanations: Record<string, string> = {
  ...explanationsSansu,
  ...explanationsKokugo,
  ...explanationsRika,
  ...explanationsShakai,
  ...explanationsEigo,
};
import QuizCard from '../../components/QuizCard';
import Paywall from '../../components/Paywall';
import AnimatedMascot from '../../components/AnimatedMascot';
import { getResultMascot } from '../../data/images';
import { saveProgress } from '../../store/progress';
import { incrementTrialQuestions, isTrialExpired, TRIAL_QUESTION_LIMIT } from '../../store/trial';
import { submitRankingScore } from '../../services/ranking';
import { getDailyQuestions, getTodayDayLabel } from '../../utils/dailyChallenge';
import { useSubscription } from '../../hooks/useSubscription';
import { useBetaAccess } from '../../hooks/useBetaAccess';
import TutorChat from '../../components/TutorChat';

function isSubjectKey(value: string): value is SubjectKey {
  return ['sansu', 'kokugo', 'rika', 'shakai', 'eigo'].includes(value);
}

type Difficulty = 'basic' | 'standard' | 'advanced';

function isDifficulty(value: string): value is Difficulty {
  return ['basic', 'standard', 'advanced'].includes(value);
}

function isCourseKey(value: string): value is CourseKey {
  return ALL_COURSES.some((c) => c.key === value);
}

function isExamType(value: string): value is ExamType {
  return value === 'chugaku' || value === 'koko';
}

const DIFF_LABELS: Record<Difficulty, { label: string; icon: string; color: string }> = {
  basic: { label: '基礎', icon: '🌱', color: '#27AE60' },
  standard: { label: '標準', icon: '⭐', color: '#F39C12' },
  advanced: { label: '発展', icon: '🔥', color: '#E74C3C' },
};

function filterQuestions(
  all: Question[],
  examType: ExamType,
  course: CourseKey,
  difficultyFilter: Difficulty | null,
  isPaid: boolean = false,
): Question[] {
  let qs = all.filter((q) => (q.examType ?? 'chugaku') === examType);
  if (course === 'general') {
    qs = qs.filter((q) => !q.course || q.course === 'general');
  } else {
    qs = qs.filter((q) => q.course === course);
  }
  if (!isPaid) {
    qs = qs.filter((q) => !q.maxOnly);
  }
  if (difficultyFilter) {
    qs = qs.filter((q) => q.difficulty === difficultyFilter);
  }
  // Fallback: if no course-specific questions, return general pool
  if (qs.length === 0) {
    qs = all.filter((q) => (q.examType ?? 'chugaku') === examType);
    if (!isPaid) qs = qs.filter((q) => !q.maxOnly);
    if (difficultyFilter) {
      qs = qs.filter((q) => q.difficulty === difficultyFilter);
    }
  }
  return qs;
}

export default function QuizScreen() {
  const { subject, difficulty: diffParam, mode, course: courseParam, examType: examTypeParam } =
    useLocalSearchParams<{
      subject: string;
      difficulty?: string;
      mode?: string;
      course?: string;
      examType?: string;
    }>();
  const router = useRouter();

  const subjectKey: SubjectKey = isSubjectKey(subject ?? '') ? (subject as SubjectKey) : 'sansu';
  const difficultyFilter: Difficulty | null =
    diffParam && isDifficulty(diffParam) ? diffParam : null;
  const isDaily = mode === 'daily';
  const isMock = mode === 'mock';
  const isKakomon = mode === 'kakomon';
  const course: CourseKey = courseParam && isCourseKey(courseParam) ? courseParam : 'general';
  const examType: ExamType = examTypeParam && isExamType(examTypeParam) ? examTypeParam : 'chugaku';
  const info = subjectInfo[subjectKey];

  // isMax/isPro を useMemo より前に宣言しないと Temporal Dead Zone クラッシュが起きる
  const { isPro: subIsPro, isMax: subIsMax } = useSubscription();
  const { hasAccess: betaAccess } = useBetaAccess();
  const isPro = subIsPro || betaAccess;
  const isMax = subIsMax || betaAccess;

  const questions = useMemo(() => {
    if (isDaily) return getDailyQuestions(subjectKey, 30, course, examType);
    const all = questionsBySubject[subjectKey];
    if (isMock) {
      const pool = filterQuestions(all, examType, course, null, true);
      const shuffled = [...pool].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, 30);
    }
    if (isKakomon) {
      const schoolQ = all.filter((q) => q.course === course && (q.examType ?? 'chugaku') === examType);
      if (schoolQ.length > 0) return schoolQ;
      return filterQuestions(all, examType, course, 'advanced', true);
    }
    return filterQuestions(all, examType, course, difficultyFilter, isPro || isMax);
  }, [subjectKey, difficultyFilter, isDaily, isMock, isKakomon, course, examType, isPro, isMax]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [finished, setFinished] = useState(false);
  const [savedProgress, setSavedProgress] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [wrongIds, setWrongIds] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [waitingNext, setWaitingNext] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [showTutorChat, setShowTutorChat] = useState(false);

  const currentQuestion = questions[currentIndex];
  const total = questions.length;
  const diffInfo = difficultyFilter ? DIFF_LABELS[difficultyFilter] : null;

  const currentChoices = undefined;

  function handleReveal() {
    setRevealed(true);
  }

  async function advanceOrFinish(currentScore: number, currentWrongIds: string[]) {
    setWaitingNext(false);
    if (currentIndex + 1 >= total) {
      if (!savedProgress) {
        setSavedProgress(true);
        await saveProgress(subjectKey, currentScore, total, currentWrongIds);
        submitRankingScore(currentScore, total).catch(() => {});
      }
      setFinished(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setRevealed(false);
      setShowExplanation(false);
    }
  }

  async function handleAnswer(correct: boolean) {
    // 無料ユーザーのお試し問題数チェック
    if (!isPro && !isMax) {
      const expired = await isTrialExpired();
      if (expired) {
        setShowPaywall(true);
        return;
      }
      await incrementTrialQuestions();
    }

    const newScore = correct ? score + 1 : score;
    const newWrongIds = correct ? wrongIds : [...wrongIds, currentQuestion.id];
    setScore(newScore);
    setWrongIds(newWrongIds);

    if (!correct) {
      setFeedback('wrong');
      setTimeout(() => {
        setFeedback(null);
        setWaitingNext(true);
      }, 400);
      return;
    }

    setFeedback('correct');
    setTimeout(async () => {
      setFeedback(null);
      await advanceOrFinish(newScore, newWrongIds);
    }, 500);
  }

  async function handleRestart() {
    setCurrentIndex(0);
    setScore(0);
    setRevealed(false);
    setFinished(false);
    setSavedProgress(false);
    setWrongIds([]);
    setShowExplanation(false);
    setWaitingNext(false);
  }

  if (questions.length === 0) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={[styles.header, { backgroundColor: info.color }]}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Text style={styles.backBtnText}>← 戻る</Text>
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <Text style={styles.headerEmoji}>{info.emoji}</Text>
            <Text style={styles.headerTitle}>{info.name}</Text>
          </View>
        </View>
        <View style={styles.emptyWrap}>
          <Text style={styles.emptyText}>この難易度の問題はありません</Text>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.backButtonText}>← 戻る</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  if (finished) {
    const pct = Math.round((score / total) * 100);
    let message = '';
    let emoji = '';
    if (pct === 100) {
      message = '完璧！全問正解！';
      emoji = '🏆';
    } else if (pct >= 80) {
      message = 'すばらしい！';
      emoji = '🌟';
    } else if (pct >= 60) {
      message = 'よくできました！';
      emoji = '👍';
    } else if (pct >= 40) {
      message = 'もう少し！復習しよう';
      emoji = '📚';
    } else {
      message = 'もっと練習しよう！';
      emoji = '💪';
    }

    return (
      <SafeAreaView style={[styles.safeArea, { backgroundColor: '#F5F7FA' }]}>
        <View style={styles.resultsContainer}>
          <View style={[styles.resultsHeader, { backgroundColor: isDaily ? '#C0392B' : info.color }]}>
            <Text style={styles.resultsHeaderEmoji}>{info.emoji}</Text>
            <Text style={styles.resultsHeaderTitle}>
              {isDaily ? `🔥 MAX日替わり ${info.name} 完了！` : `${info.name} 完了！`}
            </Text>
          </View>

          <ScrollView contentContainerStyle={styles.resultsContent}>
            <View style={styles.resultCard}>
              <AnimatedMascot
                source={getResultMascot(pct)}
                style={styles.resultAnime}
                fallbackEmoji={emoji}
                animation="bounce"
                accessibilityLabel="結果イラスト"
              />
              <Text style={styles.resultEmoji}>{emoji}</Text>
              <Text style={styles.resultMessage}>{message}</Text>
              <View style={styles.resultScoreRow}>
                <Text style={styles.resultScore}>{score}</Text>
                <Text style={styles.resultScoreSep}> / </Text>
                <Text style={styles.resultScoreTotal}>{total}</Text>
                <Text style={styles.resultScoreLabel}> 問正解</Text>
              </View>
              <Text style={[styles.resultPct, { color: info.color }]}>{pct}%</Text>

              {/* Score bar */}
              <View style={styles.resultBarTrack}>
                <View
                  style={[
                    styles.resultBarFill,
                    { width: `${pct}%`, backgroundColor: info.color },
                  ]}
                />
              </View>
            </View>

            <TouchableOpacity
              style={[styles.restartButton, { backgroundColor: info.color }]}
              onPress={handleRestart}
              activeOpacity={0.85}
            >
              <Text style={styles.restartButtonText}>🔄 もう一度チャレンジ</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.backButton}
              onPress={() => router.back()}
              activeOpacity={0.8}
            >
              <Text style={styles.backButtonText}>← 科目一覧に戻る</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: isDaily ? '#C0392B' : info.color }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← 戻る</Text>
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerEmoji}>{info.emoji}</Text>
          <Text style={styles.headerTitle}>{info.name}</Text>
          {isDaily ? (
            <Text style={styles.headerDiff}>🔥 {getTodayDayLabel()}</Text>
          ) : diffInfo ? (
            <Text style={styles.headerDiff}>
              {diffInfo.icon} {diffInfo.label}
            </Text>
          ) : null}
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.questionIndicator}>
            {currentIndex + 1}/{total}問
          </Text>
        </View>
      </View>

      {/* Progress bar */}
      <View style={styles.progressTrack}>
        <View
          style={[
            styles.progressFill,
            {
              width: `${((currentIndex + (revealed ? 1 : 0)) / total) * 100}%`,
              backgroundColor: isDaily ? '#C0392B' : info.color,
            },
          ]}
        />
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Score display */}
        <View style={styles.scoreRow}>
          <View style={styles.scoreBadge}>
            <Text style={styles.scoreBadgeText}>✓ {score}問正解</Text>
          </View>
          <View style={styles.remainBadge}>
            <Text style={styles.remainBadgeText}>残り {total - currentIndex}問</Text>
          </View>
        </View>

        {/* Quiz Card */}
        <QuizCard
          key={currentIndex}
          question={currentQuestion}
          questionIndex={currentIndex}
          onReveal={handleReveal}
          choices={currentChoices}
          onChoiceSelect={handleAnswer}
          isPro={isPro}
        />

        {/* Wrong answer feedback - Gemini-style */}
        {waitingNext && (
          <View style={styles.wrongFeedbackWrap}>
            <View style={styles.wrongHeader}>
              <Text style={styles.wrongHeaderText}>✗ 不正解！</Text>
              <Text style={styles.wrongCorrectAnswer}>正解：{currentQuestion.answer}</Text>
            </View>

            {(currentQuestion.hint || currentQuestion.explanation || allExplanations[currentQuestion.id]) && (
              <View style={styles.wrongExplanationCard}>
                <Text style={styles.wrongExplanationTitle}>📖 解説</Text>
                <Text style={styles.wrongExplanationText}>
                  {isPro || isMax
                    ? (currentQuestion.explanation ?? allExplanations[currentQuestion.id] ?? currentQuestion.hint)
                    : (currentQuestion.hint ?? currentQuestion.explanation?.split('\n')[0] ?? allExplanations[currentQuestion.id]?.split('\n')[0])}
                </Text>
                {!isPro && !isMax && (currentQuestion.explanation || allExplanations[currentQuestion.id]) && (
                  <TouchableOpacity
                    style={styles.explanationUpgradeBtn}
                    onPress={() => setShowPaywall(true)}
                    activeOpacity={0.85}
                  >
                    <Text style={styles.explanationUpgradeBtnText}>🔒 詳細解説を見る（Pro/Max）</Text>
                  </TouchableOpacity>
                )}
              </View>
            )}

            {!isPro && !isMax && (
              <TouchableOpacity
                style={styles.upgradeBanner}
                onPress={() => setShowPaywall(true)}
                activeOpacity={0.85}
              >
                <Text style={styles.upgradeBannerEmoji}>💎</Text>
                <View style={styles.upgradeBannerContent}>
                  <Text style={styles.upgradeBannerTitle}>Pro / Max にアップグレード</Text>
                  <Text style={styles.upgradeBannerSub}>全問詳細解説・AI弱点コーチ・聞き流しモード</Text>
                </View>
                <Text style={styles.upgradeBannerArrow}>→</Text>
              </TouchableOpacity>
            )}

            {isMax && (
              <TouchableOpacity
                style={styles.tutorChatBtn}
                onPress={() => setShowTutorChat(true)}
                activeOpacity={0.85}
              >
                <Text style={styles.tutorChatBtnText}>🤖 AIに聞く（Max限定）</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              style={[styles.nextQuestionBtn, { backgroundColor: info.color }]}
              onPress={() => advanceOrFinish(score, wrongIds)}
              activeOpacity={0.85}
            >
              <Text style={styles.nextQuestionBtnText}>次の問題へ →</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Explanation card - shown after reveal */}
        {revealed && (currentQuestion.explanation || allExplanations[currentQuestion.id]) && isPro && (
          <View style={styles.explanationWrap}>
            <TouchableOpacity
              style={styles.explanationToggle}
              onPress={() => setShowExplanation((v) => !v)}
              activeOpacity={0.8}
            >
              <Text style={styles.explanationToggleText}>
                {showExplanation ? '▲ 解説を閉じる' : '💡 詳細解説を見る'}
              </Text>
            </TouchableOpacity>
            {showExplanation && (
              <View style={styles.explanationCard}>
                <Text style={styles.explanationTitle}>📝 解説</Text>
                <Text style={styles.explanationText}>
                  {currentQuestion.explanation || allExplanations[currentQuestion.id]}
                </Text>
              </View>
            )}
          </View>
        )}
        {revealed && (currentQuestion.explanation || allExplanations[currentQuestion.id]) && !isPro && (
          <View style={styles.upgradeTeaser}>
            <Text style={styles.upgradeTeaserText}>
              💡 詳細解説はProプランで見られます
            </Text>
          </View>
        )}

        {/* Answer buttons - only shown in flip-card mode after reveal (hide when waiting for next) */}
        {revealed && !currentChoices && !waitingNext && (
          <View style={styles.answerButtons}>
            <TouchableOpacity
              style={styles.correctButton}
              onPress={() => handleAnswer(true)}
              activeOpacity={0.85}
            >
              <Text style={styles.correctButtonText}>✓ 正解</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.wrongButton}
              onPress={() => handleAnswer(false)}
              activeOpacity={0.85}
            >
              <Text style={styles.wrongButtonText}>✗ 不正解</Text>
            </TouchableOpacity>
          </View>
        )}

        {!revealed && !currentChoices && (
          <View style={styles.revealHint}>
            <Text style={styles.revealHintText}>
              カードをタップして答えを確認してね 👆
            </Text>
          </View>
        )}
      </ScrollView>

      {feedback !== null && (
        <View
          style={[
            styles.feedbackOverlay,
            { backgroundColor: feedback === 'correct' ? 'rgba(0,166,81,0.88)' : 'rgba(231,76,60,0.88)' },
          ]}
          pointerEvents="none"
        >
          <Text style={styles.feedbackText}>
            {feedback === 'correct' ? '○' : '×'}
          </Text>
        </View>
      )}

      <Paywall
        visible={showPaywall}
        onClose={() => setShowPaywall(false)}
        onPurchased={() => setShowPaywall(false)}
      />

      <TutorChat
        visible={showTutorChat}
        onClose={() => setShowTutorChat(false)}
        initialQuestion={currentQuestion ? `【${info.name}】${currentQuestion.question}` : undefined}
        subjectColor={info.color}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  backBtn: {
    paddingVertical: 6,
    paddingHorizontal: 4,
    minWidth: 60,
  },
  backBtnText: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  headerCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  headerEmoji: {
    fontSize: 30,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  headerDiff: {
    fontSize: 20,
    fontWeight: '700',
    color: 'rgba(255,255,255,0.9)',
    marginTop: 2,
  },
  emptyWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#555',
    marginBottom: 20,
  },
  headerRight: {
    minWidth: 60,
    alignItems: 'flex-end',
  },
  questionIndicator: {
    fontSize: 22,
    color: 'rgba(255,255,255,0.9)',
    fontWeight: '700',
  },
  progressTrack: {
    height: 4,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  progressFill: {
    height: '100%',
    borderRadius: 2,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 20,
    paddingBottom: 40,
  },
  scoreRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  scoreBadge: {
    backgroundColor: '#E8F8EE',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#B8E6C8',
  },
  scoreBadgeText: {
    fontSize: 22,
    color: '#00A651',
    fontWeight: '700',
  },
  remainBadge: {
    backgroundColor: '#EEF4FF',
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#C5D8F8',
  },
  remainBadgeText: {
    fontSize: 22,
    color: '#1E5FBE',
    fontWeight: '700',
  },
  answerButtons: {
    flexDirection: 'row',
    gap: 14,
    paddingHorizontal: 16,
    marginTop: 20,
  },
  correctButton: {
    flex: 1,
    backgroundColor: '#00A651',
    borderRadius: 20,
    paddingVertical: 26,
    alignItems: 'center',
    shadowColor: '#00A651',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  correctButtonText: {
    fontSize: 36,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  wrongButton: {
    flex: 1,
    backgroundColor: '#E74C3C',
    borderRadius: 20,
    paddingVertical: 26,
    alignItems: 'center',
    shadowColor: '#E74C3C',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  wrongButtonText: {
    fontSize: 36,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  revealHint: {
    marginTop: 24,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  revealHintText: {
    fontSize: 24,
    color: '#AAA',
    fontWeight: '600',
  },
  explanationWrap: {
    marginTop: 16,
    marginHorizontal: 16,
  },
  explanationToggle: {
    alignSelf: 'center',
    backgroundColor: '#FFF8E1',
    borderWidth: 1.5,
    borderColor: '#F39C12',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginBottom: 8,
  },
  explanationToggleText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#E67E22',
  },
  explanationCard: {
    backgroundColor: '#FFFDF0',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: '#F5D76E',
  },
  explanationTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#E67E22',
    marginBottom: 8,
  },
  explanationText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 26,
    fontWeight: '500',
  },
  upgradeTeaser: {
    marginTop: 12,
    marginHorizontal: 16,
    backgroundColor: '#EFF6FF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#BFDBFE',
    alignItems: 'center',
  },
  upgradeTeaserText: {
    fontSize: 15,
    color: '#1D4ED8',
    fontWeight: '600',
  },
  feedbackOverlay: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  },
  feedbackText: {
    fontSize: 220,
    fontWeight: '900',
    color: '#FFFFFF',
    lineHeight: 260,
  },
  // Results screen styles
  resultsContainer: {
    flex: 1,
  },
  resultsHeader: {
    paddingTop: 28,
    paddingBottom: 28,
    alignItems: 'center',
  },
  resultsHeaderEmoji: {
    fontSize: 48,
    marginBottom: 8,
  },
  resultsHeaderTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  resultsContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 40,
  },
  resultCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 28,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
    marginBottom: 20,
  },
  resultAnime: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 8,
    backgroundColor: '#EEF4FF',
  },
  resultEmoji: {
    fontSize: 60,
    marginBottom: 12,
  },
  resultMessage: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1A1A2E',
    marginBottom: 16,
  },
  resultScoreRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 8,
  },
  resultScore: {
    fontSize: 44,
    fontWeight: '900',
    color: '#1A1A2E',
  },
  resultScoreSep: {
    fontSize: 28,
    color: '#888',
    fontWeight: '400',
  },
  resultScoreTotal: {
    fontSize: 28,
    color: '#888',
    fontWeight: '700',
  },
  resultScoreLabel: {
    fontSize: 18,
    color: '#555',
    fontWeight: '600',
  },
  resultPct: {
    fontSize: 32,
    fontWeight: '900',
    marginBottom: 16,
  },
  resultBarTrack: {
    width: '100%',
    height: 12,
    backgroundColor: '#F0F0F0',
    borderRadius: 6,
    overflow: 'hidden',
  },
  resultBarFill: {
    height: '100%',
    borderRadius: 6,
    minWidth: 8,
  },
  restartButton: {
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  restartButtonText: {
    fontSize: 17,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  backButton: {
    backgroundColor: '#F0F0F0',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#555',
  },
  // Wrong answer feedback block
  wrongFeedbackWrap: {
    marginTop: 14,
    marginHorizontal: 16,
    gap: 12,
  },
  wrongHeader: {
    backgroundColor: '#FEE8E6',
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: '#E74C3C',
    alignItems: 'center',
  },
  wrongHeaderText: {
    fontSize: 26,
    fontWeight: '900',
    color: '#C0392B',
    letterSpacing: 1,
  },
  wrongCorrectAnswer: {
    fontSize: 18,
    fontWeight: '700',
    color: '#555',
    marginTop: 4,
  },
  wrongExplanationCard: {
    backgroundColor: '#FFFBEB',
    borderRadius: 16,
    padding: 18,
    borderLeftWidth: 4,
    borderLeftColor: '#F59E0B',
  },
  wrongExplanationTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#B45309',
    marginBottom: 8,
  },
  wrongExplanationText: {
    fontSize: 17,
    color: '#78350F',
    lineHeight: 28,
    fontWeight: '500',
  },
  explanationUpgradeBtn: {
    marginTop: 12,
    backgroundColor: '#EFF6FF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#BFDBFE',
  },
  explanationUpgradeBtnText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1D4ED8',
  },
  upgradeBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A2E',
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 18,
    gap: 12,
    borderWidth: 1.5,
    borderColor: '#C8A84B',
  },
  upgradeBannerEmoji: {
    fontSize: 28,
    flexShrink: 0,
  },
  upgradeBannerContent: {
    flex: 1,
  },
  upgradeBannerTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#C8A84B',
  },
  upgradeBannerSub: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.7)',
    marginTop: 2,
  },
  upgradeBannerArrow: {
    fontSize: 22,
    color: '#C8A84B',
    fontWeight: '800',
    flexShrink: 0,
  },
  nextQuestionBtn: {
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  nextQuestionBtnText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  tutorChatBtn: {
    backgroundColor: '#0EA5E9',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#0EA5E9',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  tutorChatBtnText: {
    fontSize: 17,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.3,
  },
});
