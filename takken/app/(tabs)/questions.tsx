import React, { useState, useMemo, useEffect, useCallback } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet, Platform, Modal,
} from 'react-native';
import { useFocusEffect, router } from 'expo-router';
import { QUESTIONS, TakkenQuestion } from '../../data/questions';
import { SUBJECTS, Subject } from '../../data/chapters';
import QuizCard from '../../components/QuizCard';
import { useSubscription } from '../../hooks/useSubscription';
import { FREE_QUESTION_LIMIT, PRO_FEATURES, PLAN_PRICE_PRO } from '../../constants/proAccess';
import { loadProgress, recordAnswer, ProgressData } from '../../store/progress';

type Filter = 'all' | Subject;
type Mode = 'normal' | 'weak';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** 苦手問題を先頭に持ってきて残りをランダムにした出題順を作る */
function buildWeightedPool(
  questions: TakkenQuestion[],
  wrongIds: Set<string>,
): TakkenQuestion[] {
  const weak = shuffle(questions.filter((q) => wrongIds.has(q.id)));
  const others = shuffle(questions.filter((q) => !wrongIds.has(q.id)));
  // 苦手を前半に集中させ、合間に通常問題を挟む
  const result: TakkenQuestion[] = [];
  let oi = 0;
  for (let i = 0; i < weak.length; i++) {
    result.push(weak[i]);
    // 2問ごとに通常問題を1問挟む
    if (i % 2 === 1 && oi < others.length) result.push(others[oi++]);
  }
  while (oi < others.length) result.push(others[oi++]);
  return result;
}

export default function QuestionsScreen() {
  const { isPro, loading } = useSubscription();
  const [filter, setFilter] = useState<Filter>('all');
  const [difficulty, setDifficulty] = useState<'all' | 'basic' | 'standard' | 'advanced'>('all');
  const [mode, setMode] = useState<Mode>('normal');
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [questions, setQuestions] = useState<TakkenQuestion[]>([]);
  const [showPaywall, setShowPaywall] = useState(false);
  const [progress, setProgress] = useState<ProgressData>({});
  // セッション集計
  const [sessionCorrect, setSessionCorrect] = useState(0);
  const [sessionTotal, setSessionTotal] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useFocusEffect(
    useCallback(() => {
      loadProgress().then(setProgress);
    }, []),
  );

  const wrongIds = useMemo(
    () => new Set(Object.entries(progress).filter(([, r]) => r.wrongCount > 0).map(([id]) => id)),
    [progress],
  );

  const allFiltered = useMemo(() => {
    let q = QUESTIONS;
    if (filter !== 'all') q = q.filter((x) => x.subject === filter);
    if (difficulty !== 'all') q = q.filter((x) => x.difficulty === difficulty);
    if (mode === 'weak') q = q.filter((x) => wrongIds.has(x.id));
    return q;
  }, [filter, difficulty, mode, wrongIds]);

  const filtered = useMemo(() => {
    if (isPro) return allFiltered;
    return allFiltered.filter((x) => x.difficulty !== 'advanced').slice(0, FREE_QUESTION_LIMIT);
  }, [allFiltered, isPro]);

  const weakCount = useMemo(
    () => QUESTIONS.filter((q) => wrongIds.has(q.id)).length,
    [wrongIds],
  );

  const handleStart = () => {
    const pool = mode === 'weak'
      ? shuffle(filtered)
      : buildWeightedPool(filtered, wrongIds);
    setQuestions(pool);
    setCurrent(0);
    setSessionCorrect(0);
    setSessionTotal(0);
    setShowResult(false);
    setStarted(true);
  };

  const handleAnswered = async (isCorrect: boolean, questionId: string) => {
    await recordAnswer(questionId, isCorrect);
    setSessionCorrect((n) => n + (isCorrect ? 1 : 0));
    setSessionTotal((n) => n + 1);
    // ローカルのprogress stateも即時更新
    setProgress((prev) => {
      const rec = prev[questionId] ?? { wrongCount: 0, correctCount: 0, lastAnswered: '' };
      return {
        ...prev,
        [questionId]: {
          wrongCount: isCorrect ? rec.wrongCount : rec.wrongCount + 1,
          correctCount: isCorrect ? rec.correctCount + 1 : rec.correctCount,
          lastAnswered: new Date().toISOString(),
        },
      };
    });
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent((n) => n + 1);
    } else {
      setStarted(false);
      setShowResult(true);
    }
  };

  // ─── クイズ中 ───────────────────────────────────────────────────────────────
  if (started && questions.length > 0) {
    const q = questions[current];
    const pct = Math.round(((current) / questions.length) * 100);
    return (
      <View style={styles.root}>
        <View style={styles.quizHeader}>
          <TouchableOpacity onPress={() => { setStarted(false); setShowResult(true); }} style={styles.backBtn}>
            <Text style={styles.backBtnText}>← 終了</Text>
          </TouchableOpacity>
          <View style={styles.quizHeaderCenter}>
            <Text style={styles.quizHeaderTitle}>{current + 1} / {questions.length}問</Text>
            <View style={styles.progressBarTrack}>
              <View style={[styles.progressBarFill, { width: `${pct}%` }]} />
            </View>
          </View>
          <Text style={styles.quizScore}>
            {sessionCorrect}/{sessionTotal}正解
          </Text>
        </View>
        <ScrollView contentContainerStyle={styles.quizScroll}>
          <QuizCard
            key={q.id}
            question={q}
            onNext={handleNext}
            onAnswered={(isCorrect) => handleAnswered(isCorrect, q.id)}
            isWeak={wrongIds.has(q.id)}
            showNumber={current + 1}
            totalNumber={questions.length}
          />
        </ScrollView>
      </View>
    );
  }

  // ─── セッション結果 ──────────────────────────────────────────────────────────
  if (showResult && sessionTotal > 0) {
    const rate = Math.round((sessionCorrect / sessionTotal) * 100);
    const grade = rate >= 80 ? { label: '合格圏 🎉', color: '#059669' }
      : rate >= 60 ? { label: 'もう少し 💪', color: '#D97706' }
      : { label: '要復習 📚', color: '#DC2626' };
    return (
      <View style={[styles.root, { justifyContent: 'center', alignItems: 'center' }]}>
        <View style={styles.resultCard}>
          <Text style={styles.resultTitle}>セッション結果</Text>
          <Text style={[styles.resultGrade, { color: grade.color }]}>{grade.label}</Text>
          <Text style={styles.resultScore}>{sessionCorrect} / {sessionTotal} 問正解</Text>
          <Text style={[styles.resultRate, { color: grade.color }]}>{rate}%</Text>
          {sessionTotal - sessionCorrect > 0 && (
            <View style={styles.resultWeak}>
              <Text style={styles.resultWeakText}>
                🔴 {sessionTotal - sessionCorrect}問 苦手リストに追加されました
              </Text>
              <Text style={styles.resultWeakSub}>次回は苦手問題が優先して出題されます</Text>
            </View>
          )}
          <TouchableOpacity style={styles.resultBtn} onPress={() => { setShowResult(false); handleStart(); }}>
            <Text style={styles.resultBtnText}>もう一度解く</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.resultBtnSecondary} onPress={() => setShowResult(false)}>
            <Text style={styles.resultBtnSecondaryText}>問題選択に戻る</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // ─── 選択画面 ────────────────────────────────────────────────────────────────
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>✏️ 問題集</Text>
        <Text style={styles.headerSub}>
          {isPro ? `全${QUESTIONS.length}問` : `無料：${FREE_QUESTION_LIMIT}問 / 全${QUESTIONS.length}問`}
          {weakCount > 0 ? `　🔴苦手${weakCount}問` : ''}
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>

        {/* 無料バナー */}
        {!isPro && !loading && (
          <TouchableOpacity style={styles.freeBanner} onPress={() => setShowPaywall(true)}>
            <Text style={styles.freeBannerTitle}>🔒 全問題はProプランで</Text>
            <Text style={styles.freeBannerSub}>
              {QUESTIONS.length}問・全難易度・音声聞き流し → {PLAN_PRICE_PRO}
            </Text>
          </TouchableOpacity>
        )}

        {/* モード選択 */}
        <Text style={styles.filterLabel}>出題モード</Text>
        <View style={styles.modeRow}>
          <TouchableOpacity
            style={[styles.modeBtn, mode === 'normal' && styles.modeBtnActive]}
            onPress={() => setMode('normal')}
          >
            <Text style={[styles.modeBtnText, mode === 'normal' && styles.modeBtnTextActive]}>
              📚 通常モード
            </Text>
            <Text style={[styles.modeBtnSub, mode === 'normal' && styles.modeBtnSubActive]}>
              苦手問題を優先出題
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.modeBtn,
              mode === 'weak' && styles.modeBtnWeak,
              weakCount === 0 && styles.modeBtnDisabled,
            ]}
            onPress={() => weakCount > 0 && setMode('weak')}
          >
            <Text style={[styles.modeBtnText, mode === 'weak' && styles.modeBtnTextWeak]}>
              🔴 苦手集中モード
            </Text>
            <Text style={[styles.modeBtnSub, mode === 'weak' && styles.modeBtnSubWeak]}>
              {weakCount > 0 ? `${weakCount}問の苦手のみ` : '苦手問題なし'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* 科目フィルター */}
        <Text style={styles.filterLabel}>科目を選ぶ</Text>
        <View style={styles.filterRow}>
          <TouchableOpacity
            style={[styles.filterBtn, filter === 'all' && styles.filterBtnActive]}
            onPress={() => setFilter('all')}
          >
            <Text style={[styles.filterBtnText, filter === 'all' && styles.filterBtnTextActive]}>
              全科目
            </Text>
          </TouchableOpacity>
          {SUBJECTS.map((sub) => (
            <TouchableOpacity
              key={sub.key}
              style={[
                styles.filterBtn,
                filter === sub.key && { backgroundColor: sub.color, borderColor: sub.color },
              ]}
              onPress={() => setFilter(sub.key)}
            >
              <Text style={[styles.filterBtnText, filter === sub.key && styles.filterBtnTextActive]}>
                {sub.emoji} {sub.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* 難易度フィルター */}
        <Text style={styles.filterLabel}>難易度</Text>
        <View style={styles.filterRow}>
          {(['all', 'basic', 'standard', 'advanced'] as const).map((d) => {
            const labels = { all: '全て', basic: '基礎', standard: '標準', advanced: '応用🔒' };
            const isLocked = !isPro && d === 'advanced';
            return (
              <TouchableOpacity
                key={d}
                style={[
                  styles.filterBtn,
                  difficulty === d && styles.filterBtnActive,
                  isLocked && styles.filterBtnLocked,
                ]}
                onPress={() => {
                  if (isLocked) { setShowPaywall(true); return; }
                  setDifficulty(d);
                }}
              >
                <Text style={[
                  styles.filterBtnText,
                  difficulty === d && styles.filterBtnTextActive,
                  isLocked && styles.filterBtnTextLocked,
                ]}>
                  {labels[d]}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* 開始ボタン */}
        <View style={styles.startArea}>
          <Text style={styles.startCount}>
            対象：{filtered.length}問
            {mode === 'normal' && wrongIds.size > 0 && (
              <Text style={styles.startCountWeak}> （うち🔴苦手{Math.min(wrongIds.size, filtered.length)}問を優先）</Text>
            )}
          </Text>
          <TouchableOpacity
            style={[styles.startBtn, filtered.length === 0 && styles.startBtnDisabled, mode === 'weak' && styles.startBtnWeak]}
            onPress={handleStart}
            disabled={filtered.length === 0}
          >
            <Text style={styles.startBtnText}>
              {filtered.length > 0
                ? mode === 'weak' ? '🔴 苦手問題を解く' : 'ランダムで解く'
                : '問題がありません'}
            </Text>
          </TouchableOpacity>
          {!isPro && (
            <Text style={styles.freeNote}>※ 無料は最大{FREE_QUESTION_LIMIT}問（基礎・標準のみ）</Text>
          )}
        </View>

        {/* 苦手問題リスト（上位5件） */}
        {weakCount > 0 && (
          <View style={styles.weakList}>
            <Text style={styles.weakListTitle}>🔴 直近の苦手問題</Text>
            {Object.entries(progress)
              .filter(([, r]) => r.wrongCount > 0)
              .sort((a, b) => b[1].wrongCount - a[1].wrongCount)
              .slice(0, 5)
              .map(([id, r]) => {
                const q = QUESTIONS.find((x) => x.id === id);
                if (!q) return null;
                return (
                  <View key={id} style={styles.weakItem}>
                    <View style={[styles.weakSubjectDot, { backgroundColor: SUBJECT_COLORS[q.subject] }]} />
                    <View style={styles.weakItemContent}>
                      <Text style={styles.weakItemSubject}>{q.subject}</Text>
                      <Text style={styles.weakItemQ} numberOfLines={2}>{q.question}</Text>
                    </View>
                    <View style={styles.weakItemBadge}>
                      <Text style={styles.weakItemBadgeText}>✗{r.wrongCount}</Text>
                    </View>
                  </View>
                );
              })}
          </View>
        )}

        {/* 学習ポイント */}
        <View style={styles.tip}>
          <Text style={styles.tipTitle}>📌 効果的な学習法</Text>
          <Text style={styles.tipText}>
            宅建試験（50問）の合格ラインは例年35〜38点。{'\n'}
            科目別重要度：宅建業法（20問）＞権利関係（14問）＞法令制限（8問）＝税その他（8問）。{'\n'}
            間違えた問題は🔴苦手リストに自動登録。次回から優先出題されます。
          </Text>
        </View>

      </ScrollView>

      {/* ペイウォールモーダル */}
      <Modal visible={showPaywall} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>🔓 Proプランで全解放</Text>
            <Text style={styles.modalSub}>{PLAN_PRICE_PRO}（月額・自動更新）</Text>
            {PRO_FEATURES.map((f, i) => (
              <View key={i} style={styles.featureRow}>
                <Text style={styles.featureText}>{f}</Text>
              </View>
            ))}
            <TouchableOpacity
              style={styles.modalUpgradeBtn}
              onPress={() => { setShowPaywall(false); router.push('/(tabs)/profile'); }}
            >
              <Text style={styles.modalUpgradeBtnText}>プランを選ぶ →</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalCloseBtn} onPress={() => setShowPaywall(false)}>
              <Text style={styles.modalCloseBtnText}>今は無料で続ける</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const SUBJECT_COLORS: Record<string, string> = {
  '権利関係': '#7C3AED',
  '法令上の制限': '#0369A1',
  '宅建業法': '#059669',
  '税・その他': '#B45309',
};

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#F0F4FF' },
  header: {
    paddingTop: Platform.OS === 'ios' ? 56 : 40,
    paddingBottom: 16, paddingHorizontal: 20,
    backgroundColor: '#1E40AF',
  },
  headerTitle: { color: '#fff', fontSize: 20, fontWeight: '800' },
  headerSub: { color: '#93C5FD', fontSize: 12, marginTop: 2 },
  content: { padding: 16, paddingBottom: 40 },

  // mode
  modeRow: { flexDirection: 'row', gap: 10, marginBottom: 4 },
  modeBtn: {
    flex: 1, borderRadius: 12, padding: 12,
    backgroundColor: '#F1F5F9', borderWidth: 1.5, borderColor: '#E2E8F0',
  },
  modeBtnActive: { backgroundColor: '#EFF6FF', borderColor: '#1E40AF' },
  modeBtnWeak: { backgroundColor: '#FEF2F2', borderColor: '#DC2626' },
  modeBtnDisabled: { opacity: 0.4 },
  modeBtnText: { fontSize: 13, fontWeight: '700', color: '#475569' },
  modeBtnTextActive: { color: '#1E40AF' },
  modeBtnTextWeak: { color: '#DC2626' },
  modeBtnSub: { fontSize: 11, color: '#94A3B8', marginTop: 2 },
  modeBtnSubActive: { color: '#3B82F6' },
  modeBtnSubWeak: { color: '#DC2626' },

  freeBanner: {
    backgroundColor: '#1E40AF', borderRadius: 12, padding: 14,
    marginBottom: 8, marginTop: 4, gap: 4,
  },
  freeBannerTitle: { color: '#fff', fontWeight: '800', fontSize: 14 },
  freeBannerSub: { color: '#BFDBFE', fontSize: 12 },

  filterLabel: { fontSize: 13, fontWeight: '700', color: '#475569', marginBottom: 8, marginTop: 16 },
  filterRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 4 },
  filterBtn: {
    paddingHorizontal: 12, paddingVertical: 7, borderRadius: 20,
    backgroundColor: '#F1F5F9', borderWidth: 1.5, borderColor: '#E2E8F0',
  },
  filterBtnActive: { backgroundColor: '#1E40AF', borderColor: '#1E40AF' },
  filterBtnLocked: { opacity: 0.6 },
  filterBtnText: { fontSize: 12, fontWeight: '600', color: '#475569' },
  filterBtnTextActive: { color: '#fff' },
  filterBtnTextLocked: { color: '#94A3B8' },

  startArea: { marginTop: 24, alignItems: 'center', gap: 8 },
  startCount: { fontSize: 14, color: '#64748B', fontWeight: '600' },
  startCountWeak: { fontSize: 12, color: '#DC2626' },
  startBtn: {
    backgroundColor: '#1E40AF', paddingVertical: 16, paddingHorizontal: 48,
    borderRadius: 14, alignItems: 'center',
  },
  startBtnWeak: { backgroundColor: '#DC2626' },
  startBtnDisabled: { backgroundColor: '#CBD5E1' },
  startBtnText: { color: '#fff', fontSize: 17, fontWeight: '800' },
  freeNote: { fontSize: 11, color: '#94A3B8', marginTop: 4 },

  // 苦手リスト
  weakList: {
    marginTop: 24, backgroundColor: '#FFF7F7', borderRadius: 12,
    padding: 14, borderWidth: 1, borderColor: '#FECACA',
  },
  weakListTitle: { fontSize: 14, fontWeight: '800', color: '#DC2626', marginBottom: 12 },
  weakItem: {
    flexDirection: 'row', alignItems: 'flex-start',
    paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#FEE2E2',
  },
  weakSubjectDot: { width: 8, height: 8, borderRadius: 4, marginTop: 5, marginRight: 8 },
  weakItemContent: { flex: 1 },
  weakItemSubject: { fontSize: 10, color: '#94A3B8', fontWeight: '600', marginBottom: 2 },
  weakItemQ: { fontSize: 13, color: '#374151', lineHeight: 18 },
  weakItemBadge: { backgroundColor: '#FEE2E2', borderRadius: 8, paddingHorizontal: 6, paddingVertical: 2, marginLeft: 8 },
  weakItemBadgeText: { fontSize: 12, fontWeight: '800', color: '#DC2626' },

  // クイズヘッダー
  quizHeader: {
    paddingTop: Platform.OS === 'ios' ? 56 : 40, paddingBottom: 12,
    paddingHorizontal: 16, backgroundColor: '#1E40AF',
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
  },
  backBtn: { paddingHorizontal: 12, paddingVertical: 6, minWidth: 60 },
  backBtnText: { color: '#93C5FD', fontSize: 14, fontWeight: '600' },
  quizHeaderCenter: { flex: 1, alignItems: 'center' },
  quizHeaderTitle: { color: '#fff', fontSize: 15, fontWeight: '700', marginBottom: 4 },
  progressBarTrack: { width: '80%', height: 4, backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: 2 },
  progressBarFill: { height: 4, backgroundColor: '#60A5FA', borderRadius: 2 },
  quizScore: { color: '#93C5FD', fontSize: 12, fontWeight: '600', minWidth: 60, textAlign: 'right' },
  quizScroll: { padding: 16, paddingBottom: 40 },

  // 結果画面
  resultCard: {
    backgroundColor: '#fff', borderRadius: 20, padding: 28,
    marginHorizontal: 24, alignItems: 'center',
    shadowColor: '#000', shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1, shadowRadius: 12, elevation: 6,
  },
  resultTitle: { fontSize: 16, fontWeight: '700', color: '#475569', marginBottom: 8 },
  resultGrade: { fontSize: 22, fontWeight: '800', marginBottom: 4 },
  resultScore: { fontSize: 16, color: '#374151', fontWeight: '600' },
  resultRate: { fontSize: 48, fontWeight: '900', marginVertical: 8 },
  resultWeak: {
    backgroundColor: '#FEF2F2', borderRadius: 10, padding: 12,
    marginTop: 8, alignItems: 'center', width: '100%',
  },
  resultWeakText: { fontSize: 13, fontWeight: '700', color: '#DC2626' },
  resultWeakSub: { fontSize: 11, color: '#EF4444', marginTop: 4 },
  resultBtn: {
    backgroundColor: '#1E40AF', borderRadius: 12, paddingVertical: 14,
    paddingHorizontal: 32, marginTop: 20, width: '100%', alignItems: 'center',
  },
  resultBtnText: { color: '#fff', fontSize: 16, fontWeight: '800' },
  resultBtnSecondary: { marginTop: 10, padding: 10 },
  resultBtnSecondaryText: { color: '#64748B', fontSize: 14 },

  // ペイウォール
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
  modalCard: { backgroundColor: '#fff', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 24 },
  modalTitle: { fontSize: 20, fontWeight: '800', color: '#1E40AF', marginBottom: 4 },
  modalSub: { fontSize: 14, color: '#64748B', marginBottom: 16 },
  featureRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 6 },
  featureText: { fontSize: 14, color: '#374151' },
  modalUpgradeBtn: {
    backgroundColor: '#1E40AF', borderRadius: 12, paddingVertical: 14,
    alignItems: 'center', marginTop: 16,
  },
  modalUpgradeBtnText: { color: '#fff', fontSize: 16, fontWeight: '800' },
  modalCloseBtn: { paddingVertical: 12, alignItems: 'center', marginTop: 4 },
  modalCloseBtnText: { color: '#94A3B8', fontSize: 14 },

  tip: {
    marginTop: 24, backgroundColor: '#EFF6FF', borderRadius: 12,
    padding: 16, borderLeftWidth: 3, borderLeftColor: '#1E40AF',
  },
  tipTitle: { fontSize: 13, fontWeight: '700', color: '#1E40AF', marginBottom: 6 },
  tipText: { fontSize: 12, color: '#1E3A8A', lineHeight: 18 },
});
