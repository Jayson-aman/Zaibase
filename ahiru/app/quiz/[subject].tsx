import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { subjectInfo, type SubjectKey, type Question } from '../../data/questions-meta';
import { useSubjectQuestions } from '../../hooks/useSubjectQuestions';
import { ALL_COURSES } from '../../data/courses';
import type { CourseKey, ExamType } from '../../data/courses';
import { getTopic, questionMatchesTopic } from '../../data/topics';
import { getTestMode, buildTestSet, type TestModeKey, type LevelKey } from '../../data/test-modes';
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
import { saveProgress } from '../../store/progress';
import { incrementTrialQuestions, isTrialExpired, TRIAL_QUESTION_LIMIT } from '../../store/trial';
import { submitRankingScore } from '../../services/ranking';
import { maybeRequestReview } from '../../services/reviewPrompt';
import { getDailyQuestions, getTodayDayLabel } from '../../utils/dailyChallenge';
import { useSubscription } from '../../hooks/useSubscription';
import { useBetaAccess } from '../../hooks/useBetaAccess';
import TutorChat from '../../components/TutorChat';
import HomeButton from '../../components/HomeButton';
import Fireworks from '../../components/Fireworks';
import { getFigure } from '../../data/figures';
import FigureView from '../../components/FigureView';
import { pickEncouragement, pickStreakEncouragement } from '../../data/encouragements';
import SubjectIcon from '../../components/SubjectIcon';

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

/** Fisher-Yates シャッフル。Array.sort(() => Math.random() - 0.5) は偏りがあるため使わない。 */
function shuffle<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function filterQuestions(
  all: Question[],
  examType: ExamType,
  course: CourseKey,
  difficultyFilter: Difficulty | null,
  isPaid: boolean = false,
): Question[] {
  let qs = all.filter((q) => (q.examType ?? 'chugaku') === examType);
  const generalKey = examType === 'koko' ? 'koko-general' : 'general';
  if (course === 'general' || course === 'koko-general') {
    qs = qs.filter((q) => !q.course || q.course === generalKey);
  } else {
    const schoolQs = qs.filter((q) => q.course === course);
    const generalQs = qs.filter((q) => !q.course || q.course === generalKey);
    qs = [...schoolQs, ...generalQs];
  }
  if (!isPaid) {
    qs = qs.filter((q) => !q.maxOnly);
  }
  if (difficultyFilter) {
    qs = qs.filter((q) => q.difficulty === difficultyFilter);
  }
  return qs;
}

export default function QuizScreen() {
  const {
    subject,
    difficulty: diffParam,
    mode,
    course: courseParam,
    examType: examTypeParam,
    topic: topicParam,
    testmode: testModeParam,
  } = useLocalSearchParams<{
      subject: string;
      difficulty?: string;
      mode?: string;
      course?: string;
      examType?: string;
      topic?: string;
      testmode?: string;
    }>();
  const router = useRouter();


  const subjectKey: SubjectKey = isSubjectKey(subject ?? '') ? (subject as SubjectKey) : 'sansu';
  const difficultyFilter: Difficulty | null =
    diffParam && isDifficulty(diffParam) ? diffParam : null;
  const isDaily = mode === 'daily';
  const isMock = mode === 'mock';
  const isKakomon = mode === 'kakomon';
  // テスト対策モード（学期末・学力調査・レベル別・入試）。
  // 種類ごとに難易度の配分と、記述式・複数小問（活用型）の比率を変える。
  const testModeKey: TestModeKey | null =
    testModeParam === 'term' || testModeParam === 'achievement' ||
    testModeParam === 'level' || testModeParam === 'nyushi'
      ? testModeParam
      : null;
  const course: CourseKey = courseParam && isCourseKey(courseParam) ? courseParam : 'general';
  const examType: ExamType = examTypeParam && isExamType(examTypeParam) ? examTypeParam : 'chugaku';
  const info = subjectInfo[subjectKey];

  // isMax/isPro を useMemo より前に宣言しないと Temporal Dead Zone クラッシュが起きる
  const { isPro: subIsPro, isMax: subIsMax, loading: subLoading } = useSubscription();
  const { hasAccess: betaAccess } = useBetaAccess();
  const isPro = subIsPro || betaAccess;
  const isMax = subIsMax || betaAccess;

  const { questions: subjectPool, loading: questionsLoading } = useSubjectQuestions(subjectKey);

  // 「もう一度チャレンジ」で毎回シャッフルし直すためのキー
  const [restartKey, setRestartKey] = useState(0);

  const baseQuestions = useMemo(() => {
    if (questionsLoading) return [];
    if (isDaily) return getDailyQuestions(subjectPool, subjectKey, 30, course, examType);
    const all = subjectPool;
    // 単元別モード：コースを問わず、その単元に該当する問題だけを出題
    if (topicParam) {
      const topic = getTopic(subjectKey, topicParam);
      if (topic) {
        let pool = all.filter((q) => (q.examType ?? 'chugaku') === examType);
        pool = pool.filter((q) => questionMatchesTopic(q, topic));
        if (!(isPro || isMax)) pool = pool.filter((q) => !q.maxOnly);
        if (difficultyFilter) pool = pool.filter((q) => q.difficulty === difficultyFilter);
        return shuffle(pool);
      }
    }
    if (testModeKey) {
      const tm = getTestMode(testModeKey);
      let pool = all.filter((q) => (q.examType ?? 'chugaku') === examType);
      if (!(isPro || isMax)) pool = pool.filter((q) => !q.maxOnly);
      return buildTestSet(pool, tm, restartKey + 1, difficultyFilter as LevelKey | undefined);
    }
    if (isMock) {
      // 模擬試験: 入試形式（学校別大問）を除いた一般問題のみ使用
      const generalKey = examType === 'koko' ? 'koko-general' : 'general';
      const pool = all.filter((q) => {
        if ((q.examType ?? 'chugaku') !== examType) return false;
        return !q.course || q.course === generalKey;
      });
      return shuffle(pool).slice(0, 30);
    }
    if (isKakomon) {
      // 入試試験: 学校別問題のみ（大問形式）。学校ごとに同じ順番にならないようシャッフル。
      const schoolQ = all.filter((q) => q.course === course && (q.examType ?? 'chugaku') === examType);
      if (schoolQ.length > 0) return shuffle(schoolQ);
      return shuffle(filterQuestions(all, examType, course, 'advanced', true));
    }
    const filtered = filterQuestions(all, examType, course, difficultyFilter, isPro || isMax);
    return shuffle(filtered);
  }, [subjectPool, questionsLoading, subjectKey, difficultyFilter, isDaily, isMock, isKakomon, testModeKey, course, examType, isPro, isMax, topicParam, restartKey]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [finished, setFinished] = useState(false);
  const [savedProgress, setSavedProgress] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [wrongIds, setWrongIds] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [waitingNext, setWaitingNext] = useState(false);
  // 正解/不正解ボタンの二重タップ防止。二重に走ると currentIndex が2つ進み、
  // 最後の2問で範囲外になって落ちる。
  const answeringRef = useRef(false);
  const [showPaywall, setShowPaywall] = useState(false);
  // 無料お試しの上限で止められたかどうか（ペイウォールを閉じた後の行き先を変える）
  const [trialBlocked, setTrialBlocked] = useState(false);
  // 画面を離れた後にタイマーが発火して未マウントの状態を触らないよう、破棄用に保持する
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [showTutorChat, setShowTutorChat] = useState(false);
  // 出題キュー（基礎問題の差し込みで伸びることがある）
  const [queue, setQueue] = useState<Question[]>([]);
  // 連続不正解の回数（3回でやさしく基礎に戻す）
  const [wrongStreak, setWrongStreak] = useState(0);
  // 直前の不正解で基礎問題を差し込んだか（バナー表示用）
  const [remedialJustInjected, setRemedialJustInjected] = useState(false);
  // 正解時のお祝い花火
  const [showFireworks, setShowFireworks] = useState(false);

  // baseQuestions が変わったら（初回ロード・シャッフルし直し・条件変更）キューを作り直す
  useEffect(() => {
    setQueue(baseQuestions);
    setCurrentIndex(0);
    setScore(0);
    setRevealed(false);
    setFinished(false);
    setSavedProgress(false);
    setWrongIds([]);
    setShowExplanation(false);
    setWaitingNext(false);
    setFeedback(null);
    setWrongStreak(0);
    setRemedialJustInjected(false);
    setShowFireworks(false);
  }, [baseQuestions]);

  // ロード後の一瞬だけ queue が空になるのを避けるため baseQuestions をフォールバックに使う
  const activeQuestions = queue.length > 0 ? queue : baseQuestions;
  const currentQuestion = activeQuestions[currentIndex];
  const total = activeQuestions.length;
  const diffInfo = difficultyFilter ? DIFF_LABELS[difficultyFilter] : null;
  const currentFigure = currentQuestion ? getFigure(currentQuestion.id) : undefined;

  const currentChoices = currentQuestion?.choices;

  function handleReveal() {
    setRevealed(true);
  }

  /**
   * 連続で間違えたとき、同じ教科の基礎問題を最大3問、今の位置の直後に差し込む。
   * 基礎を解き終わると、そのまま元のコースの問題に戻る（＝同じコースに行く）。
   * 差し込めたら true。
   */
  function injectRemedialBasics(): boolean {
    const seenIds = new Set(activeQuestions.map((q) => q.id));
    const basics = subjectPool.filter(
      (q) =>
        (q.examType ?? 'chugaku') === examType &&
        q.difficulty === 'basic' &&
        !q.maxOnly &&
        !seenIds.has(q.id),
    );
    if (basics.length === 0) return false;
    const pick = shuffle(basics).slice(0, 3);
    setQueue((prev) => {
      const base = prev.length > 0 ? prev : activeQuestions;
      const next = [...base];
      next.splice(currentIndex + 1, 0, ...pick);
      return next;
    });
    return true;
  }

  // 画面を離れたら未発火のタイマーを止める（未マウントの状態更新を防ぐ）
  useEffect(() => {
    return () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
  }, []);

  async function advanceOrFinish(currentScore: number, currentWrongIds: string[]) {
    setWaitingNext(false);
    answeringRef.current = false;
    if (currentIndex + 1 >= total) {
      if (!savedProgress) {
        setSavedProgress(true);
        await saveProgress(subjectKey, currentScore, total, currentWrongIds);
        submitRankingScore(currentScore, total).catch(() => {});
        maybeRequestReview(currentScore, total).catch(() => {});
      }
      setFinished(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setRevealed(false);
      setShowExplanation(false);
    }
  }

  async function handleAnswer(correct: boolean) {
    if (answeringRef.current) return;
    answeringRef.current = true;

    // 無料ユーザーのお試し問題数チェック。
    // 課金状態の取得中（subLoading）は加入者も未加入に見えるため、その間は
    // 上限判定をしない（加入者がいきなりペイウォールで止められるのを防ぐ）。
    if (!isPro && !isMax && !subLoading) {
      const expired = await isTrialExpired();
      if (expired) {
        setTrialBlocked(true);
        setShowPaywall(true);
        answeringRef.current = false;
        return;
      }
      await incrementTrialQuestions();
    }

    const newScore = correct ? score + 1 : score;
    const newWrongIds = correct ? wrongIds : [...wrongIds, currentQuestion.id];
    setScore(newScore);
    setWrongIds(newWrongIds);

    if (!correct) {
      const newStreak = wrongStreak + 1;
      setWrongStreak(newStreak);
      // 3回連続で間違えたら、やさしく基礎問題に戻す
      let injected = false;
      if (newStreak >= 3) {
        injected = injectRemedialBasics();
        if (injected) setWrongStreak(0);
      }
      setRemedialJustInjected(injected);
      setFeedback('wrong');
      timersRef.current.push(setTimeout(() => {
        setFeedback(null);
        setWaitingNext(true);
      }, 400));
      return;
    }

    // 正解：連続不正解をリセットして花火を打ち上げる
    setWrongStreak(0);
    setShowFireworks(true);
    timersRef.current.push(setTimeout(async () => {
      setShowFireworks(false);
      await advanceOrFinish(newScore, newWrongIds);
    }, 1100));
  }

  async function handleRestart() {
    // restartKey を進めると baseQuestions が再シャッフルされ、
    // useEffect が全ステートを初期化する（＝毎回ちがう順番で出題）。
    setShowPaywall(false);
    setShowTutorChat(false);
    setTrialBlocked(false);
    setRestartKey((k) => k + 1);
  }

  if (questionsLoading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={[styles.header, { backgroundColor: info.color }]}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Text style={styles.backBtnText}>← 戻る</Text>
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <SubjectIcon subject={subjectKey} size={28} color="#FFFFFF" strokeWidth={2} />
            <Text style={styles.headerTitle}>{info.name}</Text>
          </View>
          <View style={styles.headerRight}><HomeButton variant="light" /></View>
        </View>
        <View style={styles.emptyWrap}>
          <Text style={styles.emptyText}>問題を読み込み中...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (baseQuestions.length === 0) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={[styles.header, { backgroundColor: info.color }]}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Text style={styles.backBtnText}>← 戻る</Text>
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <SubjectIcon subject={subjectKey} size={28} color="#FFFFFF" strokeWidth={2} />
            <Text style={styles.headerTitle}>{info.name}</Text>
          </View>
          <View style={styles.headerRight}>
            <HomeButton variant="light" />
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
            <SubjectIcon subject={subjectKey} size={44} color="#FFFFFF" strokeWidth={2} />
            <Text style={styles.resultsHeaderTitle}>
              {isDaily ? `🔥 MAX日替わり ${info.name} 完了！` : `${info.name} 完了！`}
            </Text>
          </View>

          <ScrollView contentContainerStyle={styles.resultsContent}>
            <View style={styles.resultCard}>
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

            <HomeButton variant="dark" style={{ alignSelf: 'center', marginTop: 12 }} />
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
          <SubjectIcon subject={subjectKey} size={28} color="#FFFFFF" strokeWidth={2} />
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
          <HomeButton variant="light" style={{ marginBottom: 4 }} />
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

            {/* 励みになる言葉 */}
            <View style={styles.cheerCard}>
              <Text style={styles.cheerText}>{pickEncouragement(wrongIds.length)}</Text>
            </View>

            {/* 連続で間違えたときは、やさしく基礎に戻したことを伝える */}
            {remedialJustInjected && (
              <View style={styles.remedialCard}>
                <Text style={styles.remedialTitle}>🌱 いったん基礎にもどろう</Text>
                <Text style={styles.remedialText}>
                  {pickStreakEncouragement(wrongIds.length)}
                  {'\n'}このあと基礎問題を数問はさんでから、また同じコースに戻るよ。
                </Text>
              </View>
            )}

            {/* 図解（この問題に図があれば、解説と一緒に表示） */}
            {currentFigure != null && (
              <View style={styles.wrongFigureCard}>
                <Text style={styles.wrongFigureLabel}>📐 図解でチェック</Text>
                <FigureView figure={currentFigure} animated />
              </View>
            )}

            {(currentQuestion.hint || currentQuestion.explanation || allExplanations[currentQuestion.id]) && (
              <View style={styles.wrongExplanationCard}>
                <Text style={styles.wrongExplanationTitle}>📖 くわしい解説</Text>
                <Text style={styles.wrongExplanationText}>
                  {isPro || isMax
                    ? (currentQuestion.explanation ?? allExplanations[currentQuestion.id] ?? currentQuestion.hint)
                    : (currentQuestion.hint ?? currentQuestion.explanation?.split('\n')[0] ?? allExplanations[currentQuestion.id]?.split('\n')[0])}
                </Text>
                {(isPro || isMax) && currentQuestion.memoryTip && (
                  <View style={styles.tipRow}>
                    <Text style={styles.tipLabel}>💡 覚え方</Text>
                    <Text style={styles.tipText}>{currentQuestion.memoryTip}</Text>
                  </View>
                )}
                {(isPro || isMax) && currentQuestion.pitfall && (
                  <View style={styles.tipRow}>
                    <Text style={styles.pitfallLabel}>⚠️ ひっかけ注意</Text>
                    <Text style={styles.tipText}>{currentQuestion.pitfall}</Text>
                  </View>
                )}
                {!isPro && !isMax && (currentQuestion.explanation || allExplanations[currentQuestion.id]) && (
                  <TouchableOpacity
                    style={styles.explanationUpgradeBtn}
                    onPress={() => setShowPaywall(true)}
                    activeOpacity={0.85}
                  >
                    <Text style={styles.explanationUpgradeBtnText}>🔒 図解つき詳細解説を見る（Pro/Max）</Text>
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

      {showFireworks && <Fireworks />}

      <Paywall
        visible={showPaywall}
        onClose={() => {
          setShowPaywall(false);
          // お試し上限に達した状態でペイウォールを閉じると、選択肢は選択済みで
          // 無効・「次へ」も出ない行き止まりになる。閉じたら一覧へ戻す。
          if (trialBlocked) {
            if (router.canGoBack()) router.back();
            else router.replace('/');
          }
        }}
        onPurchased={() => {
          setShowPaywall(false);
          // 上限で止められた問題は選択肢が選択済み・「次へ」も無い状態のため、
          // 購入後はそのカードに戻さず出題をやり直す。
          if (trialBlocked) {
            setTrialBlocked(false);
            setRestartKey((k) => k + 1);
          }
        }}
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
    fontSize: 15,
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
    fontSize: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  headerDiff: {
    fontSize: 12,
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
    fontSize: 13,
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
    fontSize: 13,
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
    fontSize: 13,
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
    paddingVertical: 18,
    alignItems: 'center',
    shadowColor: '#00A651',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  correctButtonText: {
    fontSize: 22,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  wrongButton: {
    flex: 1,
    backgroundColor: '#E74C3C',
    borderRadius: 20,
    paddingVertical: 18,
    alignItems: 'center',
    shadowColor: '#E74C3C',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  wrongButtonText: {
    fontSize: 22,
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
    fontSize: 14,
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
    fontSize: 15,
    color: '#333',
    lineHeight: 24,
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
    fontSize: 150,
    fontWeight: '900',
    color: '#FFFFFF',
    lineHeight: 180,
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
    fontSize: 18,
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
  cheerCard: {
    backgroundColor: '#EAF7EF',
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#B8E6C8',
    alignItems: 'center',
  },
  cheerText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1E7A4B',
    textAlign: 'center',
    lineHeight: 24,
  },
  remedialCard: {
    backgroundColor: '#F0FAF3',
    borderRadius: 14,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#27AE60',
  },
  remedialTitle: {
    fontSize: 17,
    fontWeight: '900',
    color: '#1E7A4B',
    marginBottom: 6,
  },
  remedialText: {
    fontSize: 15,
    color: '#2F5D45',
    lineHeight: 24,
    fontWeight: '500',
  },
  wrongFigureCard: {
    backgroundColor: '#F7FBFF',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: '#D6E6FA',
  },
  wrongFigureLabel: {
    fontSize: 15,
    fontWeight: '800',
    color: '#2C6BB3',
    marginBottom: 10,
  },
  tipRow: {
    marginTop: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  tipLabel: {
    fontSize: 14,
    fontWeight: '800',
    color: '#B45309',
    marginBottom: 4,
  },
  pitfallLabel: {
    fontSize: 14,
    fontWeight: '800',
    color: '#C0392B',
    marginBottom: 4,
  },
  tipText: {
    fontSize: 15,
    color: '#4A3A2A',
    lineHeight: 23,
    fontWeight: '500',
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
