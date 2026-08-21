import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { getLessonsBySubject, FREE_LESSON_LIMIT } from '../../data/lessons';
import type { ExamType } from '../../data/courses';
import type { Lesson } from '../../data/lessons';
import { subjectInfo, type SubjectKey } from '../../data/questions-meta';
import { useSubscription } from '../../hooks/useSubscription';
import { useBetaAccess } from '../../hooks/useBetaAccess';
import Paywall from '../../components/Paywall';
import { useProGate } from '../../hooks/useProGate';

const SUBJECTS: { key: SubjectKey; emoji: string; color: string }[] = [
  { key: 'sansu', emoji: '🔢', color: '#EF4444' },
  { key: 'kokugo', emoji: '📖', color: '#8B5CF6' },
  { key: 'rika', emoji: '🔬', color: '#10B981' },
  { key: 'shakai', emoji: '🌏', color: '#F59E0B' },
  { key: 'eigo', emoji: '🌐', color: '#3B82F6' },
];

// 中学受験は「算数」、高校受験は「数学」。同じ subject キーを共有しているため
// 表示名だけ受験種別で差しかえる。
function subjectLabel(key: SubjectKey, examType: ExamType): string {
  if (key === 'sansu' && examType === 'koko') return '数学';
  return subjectInfo[key].name;
}

export default function TextbookScreen() {
  const router = useRouter();
  const { hasAccess: betaAccess } = useBetaAccess();
  const { isPro: subIsPro, loading } = useSubscription();
  const isPro = subIsPro || betaAccess;

  const { paywallVisible, setPaywallVisible } = useProGate(betaAccess);

  const [selectedSubject, setSelectedSubject] = useState<SubjectKey | null>(null);
  // 受験種別で絞らないと、中学受験の小学生に中1〜中3の内容が混ざって出てしまう。
  const [examType, setExamType] = useState<ExamType>('chugaku');

  function handleSubjectPress(key: SubjectKey) {
    // 各科目の最初のFREE_LESSON_LIMIT単元は無料で見られるため、一覧自体は
    // Pro未加入でも開ける（実際のロックは単元ごと・詳細ページ側で行う）。
    setSelectedSubject(key);
  }

  function handleLessonPress(lesson: Lesson, idx: number) {
    if (!isPro && idx >= FREE_LESSON_LIMIT) {
      setPaywallVisible(true);
      return;
    }
    router.push(`/lesson/${lesson.id}` as any);
  }

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.center}>
          <Text style={styles.loadingText}>読み込み中...</Text>
        </View>
      </SafeAreaView>
    );
  }

  const lessons = selectedSubject
    ? getLessonsBySubject(selectedSubject).filter((l) => (l.examType ?? 'chugaku') === examType)
    : [];

  const showEmpty = selectedSubject != null && lessons.length === 0;
  const showList = selectedSubject != null && lessons.length > 0;

  const listHeader = (
    <View>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>📚 入試テキスト</Text>
        <Text style={styles.headerSub}>
          合格点まで育てる科目別解説
        </Text>
        {!isPro && (
          <View style={styles.proBanner}>
            <Text style={styles.proBannerText}>
              🔒 各科目・受験種別ごとに最初の{FREE_LESSON_LIMIT}単元は無料。続きはProプランで
            </Text>
          </View>
        )}
      </View>

      {/* 受験種別の切り替え */}
      <View style={styles.examTypeRow}>
        {([
          { key: 'chugaku' as ExamType, label: '中学受験' },
          { key: 'koko' as ExamType, label: '高校受験' },
        ]).map((t) => (
          <TouchableOpacity
            key={t.key}
            style={[styles.examTypeBtn, examType === t.key && styles.examTypeBtnActive]}
            onPress={() => setExamType(t.key)}
            activeOpacity={0.85}
          >
            <Text style={[styles.examTypeText, examType === t.key && styles.examTypeTextActive]}>
              {t.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Subject Tiles */}
      <Text style={styles.sectionLabel}>科目を選んでください</Text>
      <View style={styles.subjectGrid}>
        {SUBJECTS.map(({ key, emoji, color }) => {

          const count = getLessonsBySubject(key).filter(
            (l) => (l.examType ?? 'chugaku') === examType,
          ).length;
          const isSelected = selectedSubject === key;
          return (
            <TouchableOpacity
              key={key}
              style={[
                styles.subjectTile,
                isSelected && { borderColor: color, borderWidth: 3 },
              ]}
              onPress={() => handleSubjectPress(key)}
              activeOpacity={0.8}
            >
              <Text style={styles.subjectEmoji}>{emoji}</Text>
              <Text style={[styles.subjectName, isSelected && { color }]}>
                {subjectLabel(key, examType)}
              </Text>
              {count > 0 ? (
                <Text style={styles.lessonCount}>{count}単元</Text>
              ) : (
                <Text style={styles.lessonCountPending}>準備中</Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Lesson List */}
      {selectedSubject != null && (
        <Text style={styles.lessonListTitle}>
          {subjectLabel(selectedSubject, examType)} の単元一覧
        </Text>
      )}
      {showEmpty && (
        <View style={styles.emptyBox}>
          <Text style={styles.emptyText}>
            このコンテンツは準備中です。{'\n'}もうしばらくお待ちください。
          </Text>
        </View>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        data={showList ? lessons : []}
        keyExtractor={(l) => l.id}
        ListHeaderComponent={listHeader}
        // 単元数が数百に達する科目もあるため、全件を一度に描画せず
        // 画面に入った分だけ描画・保持する（低メモリ端末での動作対策）。
        initialNumToRender={12}
        maxToRenderPerBatch={12}
        windowSize={7}
        removeClippedSubviews
        ListFooterComponent={<View style={{ height: 40 }} />}
        renderItem={({ item: lesson, index: idx }) => {
          const locked = !isPro && idx >= FREE_LESSON_LIMIT;
          return (
            <TouchableOpacity
              style={styles.lessonCard}
              onPress={() => handleLessonPress(lesson, idx)}
              activeOpacity={0.8}
            >
              <View style={styles.lessonCardLeft}>
                <Text style={styles.lessonNumber}>{String(idx + 1).padStart(2, '0')}</Text>
              </View>
              <View style={styles.lessonCardBody}>
                <View style={styles.lessonTitleRow}>
                  <Text style={styles.lessonTitle}>{lesson.title}</Text>
                  {lesson.studyPeriod && (
                    <View style={styles.periodChip}>
                      <Text style={styles.periodChipText}>📅 {lesson.studyPeriod}</Text>
                    </View>
                  )}
                </View>
                <Text style={styles.lessonDesc} numberOfLines={2}>
                  {lesson.description}
                </Text>
                {lesson.sections.some((s) => s.maxOnly) && (
                  <Text style={styles.maxTag}>⭐ MAX深堀りあり</Text>
                )}
              </View>
              <Text style={styles.lessonArrow}>{locked ? '🔒' : '›'}</Text>
            </TouchableOpacity>
          );
        }}
      />

      <Paywall
        visible={paywallVisible}
        onClose={() => setPaywallVisible(false)}
        onPurchased={() => setPaywallVisible(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F9FF' },
  scroll: { flex: 1 },
  scrollContent: { paddingBottom: 40 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  loadingText: { fontSize: 18, color: '#64748B' },
  header: {
    backgroundColor: '#0369A1',
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 18,
    borderBottomWidth: 3,
    borderBottomColor: '#0C4A6E',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#FFFFFF',
    marginBottom: 2,
    letterSpacing: -0.3,
  },
  headerSub: { fontSize: 12.5, color: '#BAE6FD', fontWeight: '600' },
  proBanner: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  proBannerText: { fontSize: 12, color: '#FEF3C7', fontWeight: '700' },
  sectionLabel: {
    fontSize: 12,
    fontWeight: '800',
    color: '#0369A1',
    letterSpacing: 0.6,
    marginHorizontal: 16,
    marginTop: 18,
    marginBottom: 10,
  },
  examTypeRow: { flexDirection: 'row', gap: 10, marginBottom: 14 },
  examTypeBtn: {
    flex: 1,
    paddingVertical: 9,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
  },
  examTypeBtnActive: { backgroundColor: '#0EA5E9', borderColor: '#0EA5E9' },
  examTypeText: { fontSize: 13.5, fontWeight: '800', color: '#475569' },
  examTypeTextActive: { color: '#FFFFFF' },
  subjectGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
    gap: 10,
  },
  subjectTile: {
    width: '30%',
    minWidth: 100,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 8,
    alignItems: 'center',
    // ぼかした影よりヘアラインの方が輪郭がはっきり出る
    borderWidth: 1,
    borderColor: '#CBD5E1',
    position: 'relative',
  },
  subjectEmoji: { fontSize: 26, marginBottom: 6 },
  subjectName: { fontSize: 14, fontWeight: '800', color: '#0F172A', marginBottom: 3 },
  lessonCount: { fontSize: 11.5, color: '#64748B', fontWeight: '700' },
  lessonCountPending: { fontSize: 11, color: '#94A3B8' },
  lessonListTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#1E3A5F',
    marginBottom: 14,
    marginHorizontal: 16,
    marginTop: 24,
  },
  emptyBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 24,
    alignItems: 'center',
    marginHorizontal: 16,
  },
  emptyText: { fontSize: 15, color: '#94A3B8', textAlign: 'center', lineHeight: 24 },
  lessonCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginBottom: 8,
    marginHorizontal: 16,
    // 影ではなく境界線で分ける。数百件が並ぶ画面では影は重く、輪郭もぼやける
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  lessonCardLeft: {
    width: 30,
    height: 30,
    borderRadius: 6,
    backgroundColor: '#0EA5E9',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 11,
  },
  lessonNumber: { fontSize: 12.5, fontWeight: '900', color: '#FFFFFF' },
  lessonCardBody: { flex: 1 },
  lessonTitleRow: { flexDirection: 'row', alignItems: 'flex-start', flexWrap: 'wrap', gap: 6, marginBottom: 2 },
  lessonTitle: { fontSize: 15, fontWeight: '800', color: '#0F172A', flexShrink: 1, letterSpacing: -0.2 },
  periodChip: { backgroundColor: '#EEF4FF', borderRadius: 4, paddingHorizontal: 6, paddingVertical: 1.5, borderWidth: 1, borderColor: '#C7D7F5' },
  periodChipText: { fontSize: 9.5, fontWeight: '800', color: '#3B55A0' },
  lessonDesc: { fontSize: 12.5, color: '#64748B', lineHeight: 18 },
  maxTag: { fontSize: 11, color: '#92400E', fontWeight: '700', marginTop: 4 },
  lessonArrow: { fontSize: 24, color: '#94A3B8', paddingLeft: 8 },
});
