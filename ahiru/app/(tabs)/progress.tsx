import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useFocusEffect } from 'expo-router';
import { loadProgress, resetProgress, ProgressData } from '../../store/progress';
import { questionsBySubject, subjectInfo, SubjectKey } from '../../data/questions';
import { useMaxGate } from '../../hooks/useMaxGate';
import { getWeakPointCoaching } from '../../services/aiCoach';
import { fetchMyRanking, RankingResult } from '../../services/ranking';
import Paywall from '../../components/Paywall';

const SUBJECTS: SubjectKey[] = ['sansu', 'kokugo', 'rika', 'shakai', 'eigo'];

export default function ProgressScreen() {
  const [progressData, setProgressData] = useState<ProgressData>({});
  const { paywallVisible, setPaywallVisible, requireMax } = useMaxGate();
  const [coachLoading, setCoachLoading] = useState(false);
  const [coachAdvice, setCoachAdvice] = useState<string | null>(null);
  const [ranking, setRanking] = useState<RankingResult | null>(null);
  const [rankingLoading, setRankingLoading] = useState(false);

  async function fetchProgress() {
    const data = await loadProgress();
    setProgressData(data);
  }

  async function loadRanking() {
    setRankingLoading(true);
    try {
      const r = await fetchMyRanking();
      setRanking(r);
    } catch {
      setRanking(null);
    } finally {
      setRankingLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchProgress();
      loadRanking();
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

  function handleAskCoach(subjectKey: SubjectKey) {
    requireMax(async () => {
      const wrongIds = progressData[subjectKey]?.wrongQuestionIds ?? [];
      const items = wrongIds
        .map((id) => questionsBySubject[subjectKey].find((q) => q.id === id))
        .filter((q): q is NonNullable<typeof q> => q != null)
        .map((q) => ({ question: q.question, answer: q.answer }));

      if (items.length === 0) {
        Alert.alert(
          'まだデータがありません',
          'もう少し問題に挑戦すると、AIコーチが弱点を分析できるようになります。'
        );
        return;
      }

      setCoachLoading(true);
      setCoachAdvice(null);
      try {
        const advice = await getWeakPointCoaching(subjectInfo[subjectKey].name, items);
        setCoachAdvice(advice);
      } catch {
        Alert.alert('エラー', 'AIコーチの呼び出しに失敗しました。もう一度お試しください。');
      } finally {
        setCoachLoading(false);
      }
    });
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

  const studiedSubjects = SUBJECTS.filter((s) => (progressData[s]?.total ?? 0) > 0);
  const subjectPct = (s: SubjectKey) => {
    const prog = progressData[s];
    const total = prog?.total ?? 0;
    return total > 0 ? Math.round(((prog?.correct ?? 0) / total) * 100) : 0;
  };
  const bestSubject = studiedSubjects.reduce<SubjectKey | null>(
    (best, s) => (best == null || subjectPct(s) > subjectPct(best) ? s : best),
    null
  );
  const worstSubject = studiedSubjects.reduce<SubjectKey | null>(
    (worst, s) => (worst == null || subjectPct(s) < subjectPct(worst) ? s : worst),
    null
  );
  const lastStudiedDates = studiedSubjects
    .map((s) => progressData[s]?.lastStudied)
    .filter((d): d is string => d != null)
    .map((d) => new Date(d).getTime());
  const mostRecentStudy = lastStudiedDates.length > 0 ? Math.max(...lastStudiedDates) : null;
  const daysSinceStudy =
    mostRecentStudy != null
      ? Math.floor((Date.now() - mostRecentStudy) / (1000 * 60 * 60 * 24))
      : null;
  const engagementMessage =
    daysSinceStudy == null
      ? 'まだ学習を始めていません'
      : daysSinceStudy === 0
      ? '今日も学習しています！'
      : daysSinceStudy <= 2
      ? '順調に学習を続けています'
      : `⚠️ ${daysSinceStudy}日間学習していません`;

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

        {/* Ranking card */}
        <View style={styles.rankingCard}>
          <Text style={styles.rankingTitle}>🏆 全国ランキング</Text>
          {rankingLoading ? (
            <ActivityIndicator color="#1E5FBE" style={{ marginVertical: 12 }} />
          ) : ranking != null ? (
            <>
              <View style={styles.rankingMain}>
                <Text style={styles.rankingNum}>{ranking.rank}</Text>
                <Text style={styles.rankingUnit}>位</Text>
                <Text style={styles.rankingTotal}>/ {ranking.totalUsers}人中</Text>
              </View>
              <Text style={styles.rankingPct}>
                上位 {Math.round((ranking.rank / ranking.totalUsers) * 100)}% に入っています
              </Text>
              {ranking.rank <= 10 && (
                <View style={styles.rankingBadge}>
                  <Text style={styles.rankingBadgeText}>🥇 TOP 10入り！</Text>
                </View>
              )}
              {ranking.rank <= 100 && ranking.rank > 10 && (
                <View style={[styles.rankingBadge, { backgroundColor: '#FFF8E1' }]}>
                  <Text style={[styles.rankingBadgeText, { color: '#F39C12' }]}>⭐ TOP 100入り</Text>
                </View>
              )}
            </>
          ) : (
            <Text style={styles.rankingEmpty}>
              クイズを解くと全国順位が表示されます！
            </Text>
          )}
        </View>

        {/* Parent report */}
        {studiedSubjects.length > 0 && (
          <View style={styles.reportCard}>
            <Text style={styles.reportTitle}>保護者向けレポート</Text>
            <Text style={styles.reportEngagement}>{engagementMessage}</Text>
            <View style={styles.reportRow}>
              {bestSubject != null && (
                <View style={styles.reportItem}>
                  <Text style={styles.reportItemLabel}>得意科目</Text>
                  <Text style={styles.reportItemValue}>
                    {subjectInfo[bestSubject].emoji} {subjectInfo[bestSubject].name}
                  </Text>
                  <Text style={styles.reportItemPct}>{subjectPct(bestSubject)}%</Text>
                </View>
              )}
              {worstSubject != null && worstSubject !== bestSubject && (
                <View style={styles.reportItem}>
                  <Text style={styles.reportItemLabel}>要復習</Text>
                  <Text style={styles.reportItemValue}>
                    {subjectInfo[worstSubject].emoji} {subjectInfo[worstSubject].name}
                  </Text>
                  <Text style={styles.reportItemPct}>{subjectPct(worstSubject)}%</Text>
                </View>
              )}
            </View>

            {worstSubject != null && (
              <View style={styles.coachSection}>
                <TouchableOpacity
                  style={styles.coachButton}
                  onPress={() => handleAskCoach(worstSubject)}
                  activeOpacity={0.85}
                  disabled={coachLoading}
                >
                  {coachLoading ? (
                    <ActivityIndicator color="#FFFFFF" />
                  ) : (
                    <Text style={styles.coachButtonText}>
                      🤖 AIコーチに{subjectInfo[worstSubject].name}の弱点を相談する
                    </Text>
                  )}
                </TouchableOpacity>
                {coachAdvice != null && (
                  <View style={styles.coachAdviceBox}>
                    <Text style={styles.coachAdviceText}>{coachAdvice}</Text>
                  </View>
                )}
              </View>
            )}
          </View>
        )}

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

      <Paywall
        visible={paywallVisible}
        onClose={() => setPaywallVisible(false)}
        onPurchased={() => setPaywallVisible(false)}
      />
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
  rankingCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: 16,
    borderRadius: 18,
    padding: 22,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  rankingTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#1A1A2E',
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  rankingMain: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 4,
    marginBottom: 8,
  },
  rankingNum: {
    fontSize: 72,
    fontWeight: '900',
    color: '#1E5FBE',
    lineHeight: 80,
  },
  rankingUnit: {
    fontSize: 32,
    fontWeight: '800',
    color: '#1E5FBE',
  },
  rankingTotal: {
    fontSize: 20,
    fontWeight: '700',
    color: '#888',
    marginLeft: 8,
  },
  rankingPct: {
    fontSize: 17,
    color: '#555',
    fontWeight: '600',
    marginBottom: 10,
  },
  rankingBadge: {
    backgroundColor: '#FFF3CD',
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 8,
    marginTop: 4,
  },
  rankingBadgeText: {
    fontSize: 18,
    fontWeight: '900',
    color: '#856404',
  },
  rankingEmpty: {
    fontSize: 16,
    color: '#888',
    fontWeight: '600',
    textAlign: 'center',
    paddingVertical: 12,
    lineHeight: 26,
  },
  reportCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: 16,
    borderRadius: 16,
    padding: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
  },
  reportTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#1A1A2E',
    marginBottom: 6,
  },
  reportEngagement: {
    fontSize: 13,
    color: '#555',
    fontWeight: '600',
    marginBottom: 14,
  },
  reportRow: {
    flexDirection: 'row',
    gap: 12,
  },
  reportItem: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
  },
  reportItemLabel: {
    fontSize: 11,
    color: '#888',
    fontWeight: '700',
    marginBottom: 4,
  },
  reportItemValue: {
    fontSize: 14,
    fontWeight: '800',
    color: '#1A1A2E',
    marginBottom: 2,
  },
  reportItemPct: {
    fontSize: 16,
    fontWeight: '900',
    color: '#1E5FBE',
  },
  coachSection: {
    marginTop: 14,
  },
  coachButton: {
    backgroundColor: '#9B59B6',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
  },
  coachButtonText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  coachAdviceBox: {
    backgroundColor: '#F5F0FA',
    borderRadius: 12,
    padding: 14,
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#E5D5F0',
  },
  coachAdviceText: {
    fontSize: 14,
    color: '#3A2D4A',
    fontWeight: '500',
    lineHeight: 21,
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
