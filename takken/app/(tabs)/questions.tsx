import React, { useState, useMemo } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet, Platform,
} from 'react-native';
import { QUESTIONS, TakkenQuestion } from '../../data/questions';
import { SUBJECTS, Subject } from '../../data/chapters';
import QuizCard from '../../components/QuizCard';

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
  const [filter, setFilter] = useState<Filter>('all');
  const [difficulty, setDifficulty] = useState<'all' | 'basic' | 'standard' | 'advanced'>('all');
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [questions, setQuestions] = useState<TakkenQuestion[]>([]);

  const filtered = useMemo(() => {
    let q = QUESTIONS;
    if (filter !== 'all') q = q.filter((x) => x.subject === filter);
    if (difficulty !== 'all') q = q.filter((x) => x.difficulty === difficulty);
    return q;
  }, [filter, difficulty]);

  const handleStart = () => {
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
          {current === questions.length - 1 && (
            <View style={{ height: 40 }} />
          )}
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>✏️ 問題集</Text>
        <Text style={styles.headerSub}>{filtered.length}問が対象</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
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
              style={[styles.filterBtn, filter === sub.key && { backgroundColor: sub.color, borderColor: sub.color }]}
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
            const labels = { all: '全て', basic: '基礎', standard: '標準', advanced: '応用' };
            return (
              <TouchableOpacity
                key={d}
                style={[styles.filterBtn, difficulty === d && styles.filterBtnActive]}
                onPress={() => setDifficulty(d)}
              >
                <Text style={[styles.filterBtnText, difficulty === d && styles.filterBtnTextActive]}>
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
        </View>

        {/* ポイント */}
        <View style={styles.tip}>
          <Text style={styles.tipTitle}>📌 効果的な学習法</Text>
          <Text style={styles.tipText}>
            宅建試験（50問）の合格ラインは例年35〜38点です。
            科目別の重要度：宅建業法（20問）＞権利関係（14問）＞法令制限（8問）＝税その他（8問）。
            まず宅建業法を完璧にし、次に法令制限、そして権利関係の順で学ぶのが効率的です。
          </Text>
        </View>
      </ScrollView>
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
  filterLabel: { fontSize: 13, fontWeight: '700', color: '#475569', marginBottom: 8, marginTop: 16 },
  filterRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 4 },
  filterBtn: {
    paddingHorizontal: 12, paddingVertical: 7, borderRadius: 20,
    backgroundColor: '#F1F5F9', borderWidth: 1.5, borderColor: '#E2E8F0',
  },
  filterBtnActive: { backgroundColor: '#1E40AF', borderColor: '#1E40AF' },
  filterBtnText: { fontSize: 12, fontWeight: '600', color: '#475569' },
  filterBtnTextActive: { color: '#fff' },

  startArea: { marginTop: 24, alignItems: 'center' },
  startCount: { fontSize: 14, color: '#64748B', marginBottom: 12, fontWeight: '600' },
  startBtn: {
    backgroundColor: '#1E40AF', paddingVertical: 16, paddingHorizontal: 48,
    borderRadius: 14, alignItems: 'center',
  },
  startBtnDisabled: { backgroundColor: '#CBD5E1' },
  startBtnText: { color: '#fff', fontSize: 17, fontWeight: '800' },

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
  quizScroll: { padding: 16 },

  tip: {
    marginTop: 24, backgroundColor: '#EFF6FF', borderRadius: 12,
    padding: 16, borderLeftWidth: 3, borderLeftColor: '#1E40AF',
  },
  tipTitle: { fontSize: 13, fontWeight: '700', color: '#1E40AF', marginBottom: 8 },
  tipText: { fontSize: 12, lineHeight: 20, color: '#1E3A8A' },
});
