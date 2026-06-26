import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { loadProgress, resetProgress } from '../../store/progress';
import { QUESTIONS } from '../../data/questions';
import { categoryInfo } from '../../data/questions-meta';

export default function ProgressScreen() {
  const [stats, setStats] = useState<{ total: number; answered: number; correct: number; weak: number }>({
    total: 0, answered: 0, correct: 0, weak: 0,
  });

  useEffect(() => {
    (async () => {
      const data = await loadProgress();
      const answered = Object.keys(data.answers).length;
      let correct = 0;
      let weak = 0;
      for (const records of Object.values(data.answers)) {
        const recent = records.slice(-5);
        const wrongCount = recent.filter((r) => !r.correct).length;
        if (wrongCount >= 2) weak++;
        if (records[records.length - 1]?.correct) correct++;
      }
      setStats({ total: QUESTIONS.length, answered, correct, weak });
    })();
  }, []);

  function handleReset() {
    Alert.alert('進捗をリセット', '全ての回答履歴が削除されます。よろしいですか？', [
      { text: 'キャンセル', style: 'cancel' },
      {
        text: 'リセット',
        style: 'destructive',
        onPress: async () => {
          await resetProgress();
          setStats({ ...stats, answered: 0, correct: 0, weak: 0 });
        },
      },
    ]);
  }

  const accuracy = stats.answered > 0 ? Math.round((stats.correct / stats.answered) * 100) : 0;

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>📊 学習進捗</Text>

        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{stats.total}</Text>
            <Text style={styles.statLabel}>総問題数</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{stats.answered}</Text>
            <Text style={styles.statLabel}>回答済み</Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: '#D4EDDA' }]}>
            <Text style={[styles.statValue, { color: '#155724' }]}>{accuracy}%</Text>
            <Text style={styles.statLabel}>正答率</Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: '#F8D7DA' }]}>
            <Text style={[styles.statValue, { color: '#721C24' }]}>{stats.weak}</Text>
            <Text style={styles.statLabel}>🔴 苦手問題</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.resetBtn} onPress={handleReset}>
          <Text style={styles.resetText}>進捗をリセット</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F0F9FF' },
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: '800', color: '#0369A1', marginBottom: 24, marginTop: 20 },
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  statCard: {
    width: '47%',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  statValue: { fontSize: 32, fontWeight: '800', color: '#0369A1' },
  statLabel: { fontSize: 13, color: '#64748B', marginTop: 4 },
  resetBtn: {
    marginTop: 40,
    backgroundColor: '#FEE2E2',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  resetText: { color: '#DC2626', fontWeight: '700', fontSize: 15 },
});
