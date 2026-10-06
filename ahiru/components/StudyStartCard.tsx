import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useStudyStats, DAILY_GOAL } from '../store/studyStreak';
import { getDailyIndex } from '../utils/dailyChallenge';
import { GRADE_SHORT_LABELS, type GradeKey } from '../data/grades';
import type { ExamType } from '../store/examType';

// ホームの一番上に出す「今日の一歩」。
//
// ① はじめて開いた人（まだ1問も答えていない）には、学年を選ぶだけで「はじめの5問」が始まる入口を出す。
//    16,000問から自分で選ばせると、何をしていいか分からず初日にやめてしまう。
// ② 1問でも答えた人には、連続日数と1日の目標（5問）を出す。目標に届いていなければ、
//    残りの問題数ぶんだけ、そのまま始められるボタンを付ける。

const GRADES: Record<ExamType, GradeKey[]> = {
  chugaku: ['e4', 'e5', 'e6'],
  koko: ['j1', 'j2', 'j3'],
};
const DEFAULT_GRADE: Record<ExamType, GradeKey> = { chugaku: 'e5', koko: 'j2' };
const DAILY_SUBJECTS = ['sansu', 'kokugo', 'rika', 'shakai', 'eigo'] as const;
const WEEK_LABELS = ['日', '月', '火', '水', '木', '金', '土'];

export default function StudyStartCard({ examType }: { examType: ExamType }) {
  const router = useRouter();
  const { stats, loaded } = useStudyStats();
  const [pickedGrade, setPickedGrade] = useState<Partial<Record<ExamType, GradeKey>>>({});
  const grade = pickedGrade[examType] ?? DEFAULT_GRADE[examType];

  if (!loaded) return null;
  const course = examType === 'koko' ? 'koko-general' : 'general';

  if (!stats.everStudied) {
    // 算数・数学は学年ごとに内容が大きくちがうので、学年にあった基礎の5問から始める
    const start = () =>
      router.push(
        `/quiz/sansu?examType=${examType}&course=${course}&difficulty=basic&grade=${grade}&limit=5` as any,
      );
    return (
      <View style={styles.firstCard}>
        <Text style={styles.firstTitle}>🌱 はじめの5問（約2分）</Text>
        <Text style={styles.firstSub}>学年を選ぶと、やさしい問題から始まります。答えを書くと、すぐ○×がわかります。</Text>
        <View style={styles.gradeRow}>
          {GRADES[examType].map((g) => {
            const on = g === grade;
            return (
              <TouchableOpacity
                key={g}
                style={[styles.gradeChip, on && styles.gradeChipOn]}
                onPress={() => setPickedGrade((p) => ({ ...p, [examType]: g }))}
                activeOpacity={0.8}
              >
                <Text style={[styles.gradeChipText, on && styles.gradeChipTextOn]}>{GRADE_SHORT_LABELS[g]}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <TouchableOpacity style={styles.startButton} onPress={start} activeOpacity={0.85}>
          <Text style={styles.startButtonText}>はじめる</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const remaining = Math.max(1, DAILY_GOAL - stats.todayCount);
  const subject = DAILY_SUBJECTS[getDailyIndex() % DAILY_SUBJECTS.length];
  const goOn = () =>
    router.push(`/quiz/${subject}?examType=${examType}&course=${course}&limit=${remaining}` as any);
  const pct = Math.min(100, Math.round((stats.todayCount / DAILY_GOAL) * 100));

  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Text style={styles.streak}>
          {stats.streak > 0 ? `🔥 ${stats.streak}日れんぞく` : '🔥 きょうから つづけよう'}
        </Text>
        <Text style={styles.goalText}>
          {stats.goalReached ? '✅ 今日の目標 達成' : `今日 ${stats.todayCount}問 ／ ${DAILY_GOAL}問`}
        </Text>
      </View>
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${pct}%` }, stats.goalReached && styles.fillDone]} />
      </View>
      <View style={styles.weekRow}>
        {stats.week.map((d, i) => {
          const dow = WEEK_LABELS[new Date(`${d.key}T00:00:00Z`).getUTCDay()];
          const isToday = i === stats.week.length - 1;
          return (
            <View key={d.key} style={styles.dayCol}>
              <View style={[styles.dot, d.count > 0 && styles.dotSome, d.done && styles.dotDone, isToday && styles.dotToday]}>
                <Text style={[styles.dotText, d.count > 0 && styles.dotTextOn]}>{d.done ? '✓' : d.count > 0 ? '・' : ''}</Text>
              </View>
              <Text style={[styles.dayLabel, isToday && styles.dayLabelToday]}>{dow}</Text>
            </View>
          );
        })}
      </View>
      {!stats.goalReached && (
        <TouchableOpacity style={styles.startButton} onPress={goOn} activeOpacity={0.85}>
          <Text style={styles.startButtonText}>あと{remaining}問やる</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  firstCard: {
    backgroundColor: '#EAF7EE',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#27AE60',
    padding: 16,
    marginBottom: 14,
  },
  firstTitle: { fontSize: 20, fontWeight: '800', color: '#1E8449' },
  firstSub: { fontSize: 13, color: '#3D5A47', marginTop: 6, lineHeight: 19 },
  gradeRow: { flexDirection: 'row', gap: 8, marginTop: 12 },
  gradeChip: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#9AD3AE',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  gradeChipOn: { backgroundColor: '#27AE60', borderColor: '#27AE60' },
  gradeChipText: { fontSize: 16, fontWeight: '700', color: '#1E8449' },
  gradeChipTextOn: { color: '#FFFFFF' },
  startButton: {
    marginTop: 12,
    backgroundColor: '#B5622E',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  startButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '800' },
  card: {
    backgroundColor: '#FFF4E5',
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#F0B866',
    padding: 14,
    marginBottom: 14,
  },
  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  streak: { fontSize: 18, fontWeight: '800', color: '#B5622E' },
  goalText: { fontSize: 13, fontWeight: '700', color: '#6B4226' },
  track: { height: 8, borderRadius: 4, backgroundColor: '#F5DDB5', marginTop: 10, overflow: 'hidden' },
  fill: { height: 8, borderRadius: 4, backgroundColor: '#F39C12' },
  fillDone: { backgroundColor: '#27AE60' },
  weekRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 },
  dayCol: { alignItems: 'center', flex: 1 },
  dot: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#E4CFA8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotSome: { backgroundColor: '#FBD38D', borderColor: '#F0B866' },
  dotDone: { backgroundColor: '#27AE60', borderColor: '#27AE60' },
  dotToday: { borderColor: '#B5622E', borderWidth: 2 },
  dotText: { fontSize: 14, color: '#FFFFFF', fontWeight: '800' },
  dotTextOn: { color: '#FFFFFF' },
  dayLabel: { fontSize: 11, color: '#8B7355', marginTop: 3 },
  dayLabelToday: { color: '#B5622E', fontWeight: '800' },
});
