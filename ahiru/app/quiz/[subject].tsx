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
import type { CourseKey, ExamType } from '../../data/courses';
import QuizCard from '../../components/QuizCard';
import AnimatedMascot from '../../components/AnimatedMascot';
import { getResultMascot } from '../../data/images';
import { saveProgress } from '../../store/progress';
import { submitRankingScore } from '../../services/ranking';
import { getDailyQuestions, getTodayDayLabel } from '../../utils/dailyChallenge';
import { useSubscription } from '../../hooks/useSubscription';
import { useBetaAccess } from '../../hooks/useBetaAccess';

function isSubjectKey(value: string): value is SubjectKey {
  return ['sansu', 'kokugo', 'rika', 'shakai', 'eigo'].includes(value);
}

type Difficulty = 'basic' | 'standard' | 'advanced';

function isDifficulty(value: string): value is Difficulty {
  return ['basic', 'standard', 'advanced'].includes(value);
}

function isCourseKey(value: string): value is CourseKey {
  return ['general','kankan','shitennoji','nandai','koko-general','koko-kankan','koko-top'].includes(value);
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
  isMax: boolean = false,
): Question[] {
  let qs = all.filter((q) => (q.examType ?? 'chugaku') === examType);
  if (course === 'general') {
    qs = qs.filter((q) => !q.course || q.course === 'general');
  } else {
    qs = qs.filter((q) => q.course === course);
  }
  if (!isMax) {
    qs = qs.filter((q) => !q.maxOnly);
  }
  if (difficultyFilter) {
    qs = qs.filter((q) => q.difficulty === difficultyFilter);
  }
  // Fallback: if no course-specific questions, return general pool
  if (qs.length === 0) {
    qs = all.filter((q) => (q.examType ?? 'chugaku') === 'chugaku');
    if (!isMax) qs = qs.filter((q) => !q.maxOnly);
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
  const course: CourseKey = courseParam && isCourseKey(courseParam) ? courseParam : 'general';
  const examType: ExamType = examTypeParam && isExamType(examTypeParam) ? examTypeParam : 'chugaku';
  const info = subjectInfo[subjectKey];

  const questions = useMemo(() => {
    if (isDaily) return getDailyQuestions(subjectKey);
    const all = questionsBySubject[subjectKey];
    return filterQuestions(all, examType, course, difficultyFilter, isMax);
  }, [subjectKey, difficultyFilter, isDaily, course, examType]);

  const { isPro: subIsPro, isMax: subIsMax } = useSubscription();
  const { hasAccess: betaAccess } = useBetaAccess();
  const isPro = subIsPro || betaAccess;
  const isMax = subIsMax || betaAccess;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [finished, setFinished] = useState(false);
  const [savedProgress, setSavedProgress] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [wrongIds, setWrongIds] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);

  const currentQuestion = questions[currentIndex];
  const total = questions.length;
  const diffInfo = difficultyFilter ? DIFF_LABELS[difficultyFilter] : null;

  const currentChoices = useMemo(() => {
    const q = questions[currentIndex];
    if (!q || questions.length < 4) return undefined;
    const correct = q.answer;

    function answerType(a: string): string {
      const t = a.trim();
      if (/^\d{2,4}年$/.test(t))                                         return 'year-bare';
      if (/^\d{2,4}年/.test(t))                                          return 'year-compound';
      if (/[①②③④⑤⑥⑦⑧⑨]/.test(t))                                  return 'numbered';
      if (/^[A-Za-z]/.test(t) && /[A-Za-z]{3,}/.test(t))               return 'english';
      if (/^[ぁ-ん]+$/.test(t))                                          return 'hiragana';
      if (/^[\d,，]+$/.test(t))                                          return 'number';
      if (/\d+[／/]\d+/.test(t) || /分の\d+/.test(t))                   return 'fraction';
      if (/\d+(cm²|㎠|cm³|m²|km²|立方|平方)/.test(t))                  return 'area-volume';
      if (/\d+(cm|mm|m|km)\b/.test(t) && !/[²³]/.test(t))              return 'length';
      if (/\d+[℃°VΩW]|秒速|時速|mol|Pa/.test(t))                       return 'physics';
      if (/\d+[gkg]/.test(t))                                            return 'mass';
      if (/^\d+(\.\d+)?%/.test(t) || /約\d+%/.test(t))                 return 'percent';
      if (/^\d+:\d+/.test(t))                                            return 'ratio';
      if (/\d+[日羽本個匹頭枚冊杯台艘門]/.test(t))                       return 'count';
      if (/\d+分$/.test(t) || /\d+時間/.test(t))                        return 'time';
      if (/[・、]/.test(t) && t.length > 5 && !/^\d{2,4}年/.test(t))   return 'list';
      if (t.length <= 12 && !/[。\n]/.test(t))                          return 'short';
      if (t.length > 60)                                                  return 'long';
      return 'medium';
    }

    const correctType = answerType(correct);
    const all = questions.filter((o) => o.id !== q.id && o.answer !== correct);

    // 答えテキストの重複を除去してユニークなものだけ使う
    const seenAnswers = new Set<string>();
    const uniqueAll = all.filter((o) => {
      if (seenAnswers.has(o.answer)) return false;
      seenAnswers.add(o.answer);
      return true;
    });

    // 1st: 同型
    let typed = uniqueAll.filter((o) => answerType(o.answer) === correctType);

    // 2nd: 長さが近いもの（±40文字）、numbered除外
    if (typed.length < 3) {
      typed = uniqueAll.filter((o) =>
        Math.abs(o.answer.length - correct.length) < 40 &&
        answerType(o.answer) !== 'numbered'
      );
    }

    // 3rd: 全部
    if (typed.length < 3) typed = uniqueAll;

    const shuffled = [...typed].sort(() => Math.random() - 0.5);
    return [...shuffled.slice(0, 3), correct].sort(() => Math.random() - 0.5);
  }, [currentIndex, questions]);

  function handleReveal() {
    setRevealed(true);
  }

  async function handleAnswer(correct: boolean) {
    const newScore = correct ? score + 1 : score;
    const newWrongIds = correct ? wrongIds : [...wrongIds, currentQuestion.id];

    setFeedback(correct ? 'correct' : 'wrong');
    setTimeout(async () => {
      setFeedback(null);
      if (currentIndex + 1 >= total) {
        if (!savedProgress) {
          setSavedProgress(true);
          await saveProgress(subjectKey, newScore, total, newWrongIds);
          submitRankingScore(newScore, total).catch(() => {});
        }
        setScore(newScore);
        setWrongIds(newWrongIds);
        setFinished(true);
      } else {
        setScore(newScore);
        setWrongIds(newWrongIds);
        setCurrentIndex((i) => i + 1);
        setRevealed(false);
        setShowExplanation(false);
      }
    }, 900);
  }

  async function handleRestart() {
    setCurrentIndex(0);
    setScore(0);
    setRevealed(false);
    setFinished(false);
    setSavedProgress(false);
    setWrongIds([]);
    setShowExplanation(false);
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

        {/* Explanation card - shown after reveal */}
        {revealed && currentQuestion.explanation && isPro && (
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
                <Text style={styles.explanationText}>{currentQuestion.explanation}</Text>
              </View>
            )}
          </View>
        )}
        {revealed && currentQuestion.explanation && !isPro && (
          <View style={styles.upgradeTeaser}>
            <Text style={styles.upgradeTeaserText}>
              💡 詳細解説はProプランで見られます
            </Text>
          </View>
        )}

        {/* Answer buttons - only shown in flip-card mode after reveal */}
        {revealed && !currentChoices && (
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
    ...StyleSheet.absoluteFillObject,
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
});
