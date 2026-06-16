import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useFocusEffect } from 'expo-router';
import { loadProgress, resetProgress, ProgressData } from '../../store/progress';
import { subjectInfo, SubjectKey } from '../../data/questions';

const SUBJECTS: SubjectKey[] = ['sansu', 'kokugo', 'rika', 'shakai', 'eigo'];

export default function ProgressScreen() {
  const [progressData, setProgressData] = useState<ProgressData>({});

  async function fetchProgress() {
    const data = await loadProgress();
    setProgressData(data);
  }

  useFocusEffect(
    useCallback(() => {
      fetchProgress();
    }, [])
  );

  function handleReset() {
    Alert.alert(
      'リセット確認',
      '全ての学習記録を削除しますか？',
      [
        { text: 'キャンセル', style: 'cancel' },
        {
          text: 'リセット',
          style: 'destructive',
          onPress: async () => {
            await resetProgress();
            setProgressData({});
          },
        },
      ]
    );
  }

  const totalCorrect = SUBJECTS.reduce(
    (sum, s) => sum + (progressData[s]?.correct ?? 0),
    0
  );
  const totalQuestions = SUBJECTS.reduce(
    (sum, s) => sum + (progressData[s]?.total ?? 0),
    0
  );
  const overallPct =
    totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>学習進捗</Text>
          <Text style={styles.headerSubtitle}>がんばってる記録だよ！</Text>
        </View>

        {/* Overall summary */}
        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>総合正解率</Text>
          <Text style={styles.summaryPct}>{overallPct}%</Text>
          <Text style={styles.summaryDetail}>
            {totalCorrect} / {totalQuestions} 問正解
          </Text>
          <View style={styles.overallBarTrack}>
            <View
              style={[
                styles.overallBarFill,
                { width: `${overallPct}%` },
              ]}
            />
          </View>
        </View>

        {/* Per-subject progress */}
        <Text style={styles.sectionTitle}>科目別の成績</Text>
        {SUBJECTS.map((subject) => {
          const info = subjectInfo[subject];
          const prog = progressData[subject];
          const correct = prog?.correct ?? 0;
          const total = prog?.total ?? 0;
          const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
          const lastStudied = prog?.lastStudied
            ? new Date(prog.lastStudied).toLocaleDateString('ja-JP')
            : null;

          return (
            <View key={subject} style={styles.subjectCard}>
              <View style={styles.subjectRow}>
                <View style={[styles.subjectIcon, { backgroundColor: info.color + '22' }]}>
                  <Text style={styles.subjectEmoji}>{info.emoji}</Text>
                </View>
                <View style={styles.subjectMeta}>
                  <Text style={styles.subjectName}>{info.name}</Text>
                  {lastStudied != null ? (
                    <Text style={styles.lastStudied}>最終学習: {lastStudied}</Text>
                  ) : (
                    <Text style={styles.notStudied}>まだ学習していません</Text>
                  )}
                </View>
                <View style={styles.subjectScore}>
                  <Text style={[styles.scorePct, { color: info.color }]}>{pct}%</Text>
                  <Text style={styles.scoreDetail}>{correct}/{total}</Text>
                </View>
              </View>
              <View style={styles.barTrack}>
                <View
                  style={[
                    styles.barFill,
                    { width: `${pct}%`, backgroundColor: info.color },
                  ]}
                />
              </View>
            </View>
          );
        })}

        {/* Reset button */}
        <TouchableOpacity
          style={styles.resetButton}
          onPress={handleReset}
          activeOpacity={0.8}
        >
          <Text style={styles.resetText}>🗑️ 学習記録をリセット</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    backgroundColor: '#1E5FBE',
    paddingTop: 28,
    paddingBottom: 28,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 1,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '500',
  },
  summaryCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 18,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 13,
    color: '#888',
    fontWeight: '600',
    letterSpacing: 1,
    marginBottom: 8,
  },
  summaryPct: {
    fontSize: 52,
    fontWeight: '900',
    color: '#1E5FBE',
    lineHeight: 60,
  },
  summaryDetail: {
    fontSize: 15,
    color: '#555',
    fontWeight: '500',
    marginTop: 4,
    marginBottom: 14,
  },
  overallBarTrack: {
    width: '100%',
    height: 10,
    backgroundColor: '#E5EDF8',
    borderRadius: 5,
    overflow: 'hidden',
  },
  overallBarFill: {
    height: '100%',
    backgroundColor: '#1E5FBE',
    borderRadius: 5,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#1A1A2E',
    marginHorizontal: 20,
    marginTop: 24,
    marginBottom: 12,
  },
  subjectCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 12,
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
  },
  subjectRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  subjectIcon: {
    width: 46,
    height: 46,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  subjectEmoji: {
    fontSize: 24,
  },
  subjectMeta: {
    flex: 1,
  },
  subjectName: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1A1A2E',
    marginBottom: 2,
  },
  lastStudied: {
    fontSize: 12,
    color: '#888',
    fontWeight: '500',
  },
  notStudied: {
    fontSize: 12,
    color: '#BBB',
    fontWeight: '500',
  },
  subjectScore: {
    alignItems: 'flex-end',
  },
  scorePct: {
    fontSize: 20,
    fontWeight: '900',
  },
  scoreDetail: {
    fontSize: 12,
    color: '#888',
    fontWeight: '600',
  },
  barTrack: {
    height: 8,
    backgroundColor: '#F0F0F0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    borderRadius: 4,
    minWidth: 4,
  },
  resetButton: {
    marginHorizontal: 20,
    marginTop: 24,
    backgroundColor: '#FFF0F0',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFD0D0',
  },
  resetText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#E74C3C',
  },
});
