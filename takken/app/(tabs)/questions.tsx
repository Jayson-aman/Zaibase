import React, { useState, useMemo } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet, Platform, Modal,
} from 'react-native';
import { router } from 'expo-router';
import { QUESTIONS, TakkenQuestion } from '../../data/questions';
import { SUBJECTS, Subject } from '../../data/chapters';
import QuizCard from '../../components/QuizCard';
import { useSubscription } from '../../hooks/useSubscription';
import { FREE_QUESTION_LIMIT, PRO_FEATURES, PLAN_PRICE_PRO } from '../../constants/proAccess';

type Filter = 'all' | Subject;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function QuestionsScreen() {
  const { isPro, loading } = useSubscription();
  const [filter, setFilter] = useState<Filter>('all');
  const [difficulty, setDifficulty] = useState<'all' | 'basic' | 'standard' | 'advanced'>('all');
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [questions, setQuestions] = useState<TakkenQuestion[]>([]);
  const [showPaywall, setShowPaywall] = useState(false);

  const allFiltered = useMemo(() => {
    let q = QUESTIONS;
    if (filter !== 'all') q = q.filter((x) => x.subject === filter);
    if (difficulty !== 'all') q = q.filter((x) => x.difficulty === difficulty);
    return q;
  }, [filter, difficulty]);

  // 無料ユーザーは最初の50問のみ
  const filtered = useMemo(() => {
    if (isPro) return allFiltered;
    return allFiltered.filter((x) => x.difficulty !== 'advanced').slice(0, FREE_QUESTION_LIMIT);
  }, [allFiltered, isPro]);

  const totalForFree = useMemo(() => {
    let q = QUESTIONS.filter((x) => x.difficulty !== 'advanced');
    if (filter !== 'all') q = q.filter((x) => x.subject === filter);
    return Math.min(q.length, FREE_QUESTION_LIMIT);
  }, [filter]);

  const handleStart = () => {
    if (!isPro && (difficulty === 'advanced' || allFiltered.length > FREE_QUESTION_LIMIT)) {
      setShowPaywall(true);
      return;
    }
    setQuestions(shuffle(filtered));
    setCurrent(0);
    setStarted(true);
  };

  const handleNext = () => {
    if (current < questions.length - 1) setCurrent((n) => n + 1);
    else {
      setStarted(false);
      setQuestions([]);
      setCurrent(0);
    }
  };

  if (started && questions.length > 0) {
    const q = questions[current];
    return (
      <View style={styles.root}>
        <View style={styles.quizHeader}>
          <TouchableOpacity onPress={() => setStarted(false)} style={styles.backBtn}>
            <Text style={styles.backBtnText}>← 終了</Text>
          </TouchableOpacity>
          <Text style={styles.quizHeaderTitle}>
            {current + 1} / {questions.length}問
          </Text>
          <View style={{ width: 60 }} />
        </View>
        <ScrollView contentContainerStyle={styles.quizScroll}>
          <QuizCard
            question={q}
            onNext={handleNext}
            showNumber={current + 1}
            totalNumber={questions.length}
          />
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>✏️ 問題集</Text>
        <Text style={styles.headerSub}>
          {isPro
            ? `${filtered.length}問が対象`
            : `無料：${filtered.length}問 / 全${allFiltered.length}問`}
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
          <Text style={styles.startCount}>対象：{filtered.length}問</Text>
          <TouchableOpacity
            style={[styles.startBtn, filtered.length === 0 && styles.startBtnDisabled]}
            onPress={handleStart}
            disabled={filtered.length === 0}
          >
            <Text style={styles.startBtnText}>
              {filtered.length > 0 ? 'ランダムで解く' : '問題がありません'}
            </Text>
          </TouchableOpacity>
          {!isPro && (
            <Text style={styles.freeNote}>
              ※ 無料は最大{FREE_QUESTION_LIMIT}問（基礎・標準のみ）
            </Text>
          )}
        </View>

        {/* ポイント */}
        <View style={styles.tip}>
          <Text style={styles.tipTitle}>📌 効果的な学習法</Text>
          <Text style={styles.tipText}>
            宅建試験（50問）の合格ラインは例年35〜38点。{'\n'}
            科目別重要度：宅建業法（20問）＞権利関係（14問）＞法令制限（8問）＝税その他（8問）。{'\n'}
            まず宅建業法を完璧にし、次に法令制限、そして権利関係の順が効率的です。
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
              onPress={() => {
                setShowPaywall(false);
                router.push('/(tabs)/profile');
              }}
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

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#F0F4FF' },
  header: {
    paddingTop: Platform.OS === 'ios' ? 56 : 40,
    paddingBottom: 16,
    paddingHorizontal: 20,
    backgroundColor: '#1E40AF',
  },
  headerTitle: { color: '#fff', fontSize: 20, fontWeight: '800' },
  headerSub: { color: '#93C5FD', fontSize: 12, marginTop: 2 },

  content: { padding: 16, gap: 0 },

  freeBanner: {
    backgroundColor: '#1E40AF',
    borderRadius: 12,
    padding: 14,
    marginBottom: 8,
    marginTop: 4,
    gap: 4,
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
  filterBtnLocked: { backgroundColor: '#F1F5F9', borderColor: '#E2E8F0', opacity: 0.6 },
  filterBtnText: { fontSize: 12, fontWeight: '600', color: '#475569' },
  filterBtnTextActive: { color: '#fff' },
  filterBtnTextLocked: { color: '#94A3B8' },

  startArea: { marginTop: 24, alignItems: 'center', gap: 8 },
  startCount: { fontSize: 14, color: '#64748B', fontWeight: '600' },
  startBtn: {
    backgroundColor: '#1E40AF', paddingVertical: 16, paddingHorizontal: 48,
    borderRadius: 14, alignItems: 'center',
  },
  startBtnDisabled: { backgroundColor: '#CBD5E1' },
  startBtnText: { color: '#fff', fontSize: 17, fontWeight: '800' },
  freeNote: { fontSize: 11, color: '#94A3B8', marginTop: 4 },

  quizHeader: {
    paddingTop: Platform.OS === 'ios' ? 56 : 40,
    paddingBottom: 12,
    paddingHorizontal: 16,
    backgroundColor: '#1E40AF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backBtn: { paddingHorizontal: 12, paddingVertical: 6 },
  backBtnText: { color: '#93C5FD', fontSize: 14, fontWeight: '600' },
  quizHeaderTitle: { color: '#fff', fontSize: 15, fontWeight: '700' },
  quizScroll: { padding: 16, paddingBottom: 40 },

  tip: {
    marginTop: 24, backgroundColor: '#EFF6FF', borderRadius: 12,
    padding: 16, borderLeftWidth: 3, borderLeftColor: '#1E40AF',
  },
  tipTitle: { fontSize: 13, fontWeight: '700', color: '#1E40AF', marginBottom: 8 },
  tipText: { fontSize: 12, lineHeight: 20, color: '#1E3A8A' },

  modalOverlay: {
    flex: 1, backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalCard: {
    backgroundColor: '#fff', borderTopLeftRadius: 24, borderTopRightRadius: 24,
    padding: 24, paddingBottom: Platform.OS === 'ios' ? 40 : 24, gap: 10,
  },
  modalTitle: { fontSize: 22, fontWeight: '900', color: '#111827', textAlign: 'center' },
  modalSub: { fontSize: 14, color: '#64748B', textAlign: 'center', marginBottom: 4 },
  featureRow: { flexDirection: 'row', alignItems: 'flex-start' },
  featureText: { fontSize: 14, color: '#374151', lineHeight: 22 },
  modalUpgradeBtn: {
    backgroundColor: '#0EA5E9', borderRadius: 12, paddingVertical: 14,
    alignItems: 'center', marginTop: 8,
  },
  modalUpgradeBtnText: { color: '#fff', fontWeight: '800', fontSize: 16 },
  modalCloseBtn: { alignItems: 'center', paddingVertical: 12 },
  modalCloseBtnText: { color: '#94A3B8', fontSize: 13 },
});
