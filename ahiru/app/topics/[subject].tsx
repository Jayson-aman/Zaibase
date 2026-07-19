import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { subjectInfo, type SubjectKey } from '../../data/questions-meta';
import type { ExamType } from '../../data/courses';
import { topicsBySubject, questionMatchesTopic } from '../../data/topics';
import { useSubjectQuestions } from '../../hooks/useSubjectQuestions';

function isSubjectKey(v: string): v is SubjectKey {
  return ['sansu', 'kokugo', 'rika', 'shakai', 'eigo'].includes(v);
}

export default function TopicPickerScreen() {
  const router = useRouter();
  const { subject, examType: examTypeParam } = useLocalSearchParams<{
    subject: string;
    examType?: string;
  }>();
  const subjectKey: SubjectKey = isSubjectKey(subject ?? '') ? (subject as SubjectKey) : 'sansu';
  const examType: ExamType = examTypeParam === 'koko' ? 'koko' : 'chugaku';
  const info = subjectInfo[subjectKey];
  const { questions, loading } = useSubjectQuestions(subjectKey);

  const pool = React.useMemo(
    () => (questions ?? []).filter((q) => (q.examType ?? 'chugaku') === examType),
    [questions, examType],
  );

  const topics = topicsBySubject[subjectKey]
    .map((t) => ({ topic: t, count: pool.filter((q) => questionMatchesTopic(q, t)).length }))
    .filter((t) => t.count > 0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, { backgroundColor: info.color }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backRow}>
          <Text style={styles.backText}>← 戻る</Text>
        </TouchableOpacity>
        <Text style={styles.title}>
          {info.emoji} {info.name}の単元をえらぶ
        </Text>
        <Text style={styles.subtitle}>
          {examType === 'chugaku' ? '📖 中学受験' : '🏫 高校受験'}・単元ごとに集中練習
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        {loading ? (
          <Text style={styles.empty}>読み込み中...</Text>
        ) : topics.length === 0 ? (
          <Text style={styles.empty}>この受験区分の単元問題は準備中です。</Text>
        ) : (
          topics.map(({ topic, count }) => (
            <TouchableOpacity
              key={topic.id}
              style={styles.card}
              activeOpacity={0.85}
              onPress={() =>
                router.push(
                  `/quiz/${subjectKey}?topic=${topic.id}&examType=${examType}` as any,
                )
              }
            >
              <Text style={styles.cardEmoji}>{topic.emoji}</Text>
              <View style={styles.cardBody}>
                <Text style={styles.cardLabel}>{topic.label}</Text>
                <Text style={styles.cardCount}>{count}問</Text>
              </View>
              <Text style={styles.cardArrow}>›</Text>
            </TouchableOpacity>
          ))
        )}
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F9FF' },
  header: { paddingHorizontal: 20, paddingTop: 8, paddingBottom: 16 },
  backRow: { paddingVertical: 6 },
  backText: { color: 'rgba(255,255,255,0.95)', fontSize: 16, fontWeight: '700' },
  title: { color: '#fff', fontSize: 24, fontWeight: '800', marginTop: 4 },
  subtitle: { color: 'rgba(255,255,255,0.9)', fontSize: 13, marginTop: 4 },
  scroll: { padding: 16 },
  empty: { textAlign: 'center', color: '#64748B', marginTop: 40, fontSize: 15 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardEmoji: { fontSize: 26, marginRight: 12 },
  cardBody: { flex: 1 },
  cardLabel: { fontSize: 16, fontWeight: '700', color: '#0F172A' },
  cardCount: { fontSize: 12, color: '#64748B', marginTop: 2 },
  cardArrow: { fontSize: 24, color: '#94A3B8', fontWeight: '600' },
});
