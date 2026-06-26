import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { useState, useEffect, useMemo } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { QUESTIONS } from '../../data/questions';
import { recordAnswer, getWeakQuestionIds } from '../../store/progress';
import QuizCard from '../../components/QuizCard';
import type { FPCategory } from '../../data/questions-meta';

type Mode = 'normal' | 'weak';

export default function QuizScreen() {
  const { mode, category } = useLocalSearchParams<{ mode?: string; category?: FPCategory }>();
  const [pool, setPool] = useState(QUESTIONS);
  const [weakIds, setWeakIds] = useState<Set<string>>(new Set());
  const [answeredCount, setAnsweredCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [sessionDone, setSessionDone] = useState(false);
  const SESSION_SIZE = 20;

  useEffect(() => {
    (async () => {
      const ids = await getWeakQuestionIds();
      const idSet = new Set(ids);
      setWeakIds(idSet);

      let filtered = QUESTIONS;
      if (category) filtered = QUESTIONS.filter((q) => q.category === category);

      if (mode === 'weak') {
        const weak = filtered.filter((q) => idSet.has(q.id));
        filtered = weak.length > 0 ? weak : filtered;
      }

      // shuffle
      const shuffled = [...filtered].sort(() => Math.random() - 0.5).slice(0, SESSION_SIZE);
      setPool(shuffled);
    })();
  }, [mode, category]);

  async function handleAnswered(questionId: string, isCorrect: boolean) {
    await recordAnswer(questionId, isCorrect);
    setAnsweredCount((n) => n + 1);
    if (isCorrect) setCorrectCount((n) => n + 1);
    if (answeredCount + 1 >= pool.length) {
      setTimeout(() => setSessionDone(true), 800);
    }
  }

  if (sessionDone) {
    const score = Math.round((correctCount / pool.length) * 100);
    const grade = score >= 80 ? '合格圏 🎉' : score >= 60 ? 'あと少し 💪' : '要復習 📖';
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>{grade}</Text>
          <Text style={styles.resultScore}>{score}点</Text>
          <Text style={styles.resultDetail}>{pool.length}問中 {correctCount}問正解</Text>
          <TouchableOpacity
            style={styles.retryBtn}
            onPress={() => {
              setAnsweredCount(0);
              setCorrectCount(0);
              setSessionDone(false);
              setPool((p) => [...p].sort(() => Math.random() - 0.5));
            }}
          >
            <Text style={styles.retryText}>もう一度</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          {mode === 'weak' ? '🔴 苦手集中' : category ? `${category}` : '📝 クイズ'}
        </Text>
        <Text style={styles.progress}>{answeredCount}/{pool.length}</Text>
      </View>
      <FlatList
        data={pool}
        keyExtractor={(q) => q.id}
        renderItem={({ item }) => (
          <QuizCard
            question={item}
            isWeak={weakIds.has(item.id)}
            onAnswered={(ok) => handleAnswered(item.id, ok)}
          />
        )}
        contentContainerStyle={{ paddingBottom: 40, paddingTop: 8 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F0F9FF' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  headerTitle: { fontSize: 16, fontWeight: '700', color: '#0369A1' },
  progress: { fontSize: 14, color: '#64748B', fontWeight: '600' },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  resultTitle: { fontSize: 28, fontWeight: '800', color: '#0369A1', marginBottom: 12 },
  resultScore: { fontSize: 64, fontWeight: '900', color: '#0EA5E9' },
  resultDetail: { fontSize: 16, color: '#64748B', marginTop: 8, marginBottom: 40 },
  retryBtn: {
    backgroundColor: '#0EA5E9',
    borderRadius: 14,
    paddingHorizontal: 48,
    paddingVertical: 16,
  },
  retryText: { color: '#fff', fontSize: 18, fontWeight: '700' },
});
