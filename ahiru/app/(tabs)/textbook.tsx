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
import { getLessonsBySubject } from '../../data/lessons';
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

export default function TextbookScreen() {
  const router = useRouter();
  const { hasAccess: betaAccess } = useBetaAccess();
  const { isPro: subIsPro, loading } = useSubscription();
  const isPro = subIsPro || betaAccess;

  const { paywallVisible, setPaywallVisible, requirePro } = useProGate(betaAccess);

  const [selectedSubject, setSelectedSubject] = useState<SubjectKey | null>(null);
  // 受験種別で絞らないと、中学受験の小学生に中1〜中3の内容が混ざって出てしまう。
  const [examType, setExamType] = useState<ExamType>('chugaku');

  function handleSubjectPress(key: SubjectKey) {
    requirePro(() => setSelectedSubject(key));
  }

  function handleLessonPress(lesson: Lesson) {
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

  const showEmpty = selectedSubject != null && isPro && lessons.length === 0;
  const showList = selectedSubject != null && isPro && lessons.length > 0;

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
            <Text style={styles.proBannerText}>🔒 Proプランで全解説を閲覧できます</Text>
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
          const info = subjectInfo[key];
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
                !isPro && styles.subjectTileLocked,
              ]}
              onPress={() => handleSubjectPress(key)}
              activeOpacity={0.8}
            >
              <Text style={styles.subjectEmoji}>{emoji}</Text>
              <Text style={[styles.subjectName, isSelected && { color }]}>
                {info.name}
              </Text>
              {count > 0 ? (
                <Text style={styles.lessonCount}>{count}単元</Text>
              ) : (
                <Text style={styles.lessonCountPending}>準備中</Text>
              )}
              {!isPro && <Text style={styles.lockIcon}>🔒</Text>}
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Lesson List */}
      {selectedSubject && isPro && (
        <Text style={styles.lessonListTitle}>
          {subjectInfo[selectedSubject].name} の単元一覧
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
        renderItem={({ item: lesson, index: idx }) => (
          <TouchableOpacity
            style={styles.lessonCard}
            onPress={() => handleLessonPress(lesson)}
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
            <Text style={styles.lessonArrow}>›</Text>
          </TouchableOpacity>
        )}
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
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
  },
  headerTitle: { fontSize: 26, fontWeight: '900', color: '#FFFFFF', marginBottom: 4 },
  headerSub: { fontSize: 14, color: '#BAE6FD', fontWeight: '500' },
  proBanner: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  proBannerText: { fontSize: 13, color: '#FEF3C7', fontWeight: '600' },
  sectionLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0369A1',
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 12,
  },
  examTypeRow: { flexDirection: 'row', gap: 10, marginBottom: 14 },
  examTypeBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#DDE2EC',
  },
  examTypeBtnActive: { backgroundColor: '#0EA5E9', borderColor: '#0EA5E9' },
  examTypeText: { fontSize: 14, fontWeight: '700', color: '#64748B' },
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
    borderRadius: 16,
    padding: 14,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
    borderWidth: 1.5,
    borderColor: '#E0E8F0',
    position: 'relative',
  },
  subjectTileLocked: { opacity: 0.7 },
  subjectEmoji: { fontSize: 28, marginBottom: 6 },
  subjectName: { fontSize: 14, fontWeight: '800', color: '#1E3A5F', marginBottom: 4 },
  lessonCount: { fontSize: 12, color: '#64748B', fontWeight: '600' },
  lessonCountPending: { fontSize: 11, color: '#94A3B8' },
  lockIcon: { position: 'absolute', top: 6, right: 8, fontSize: 12 },
  lessonListTitle: {
    fontSize: 18,
    fontWeight: '800',
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
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  lessonCardLeft: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#EFF6FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  lessonNumber: { fontSize: 13, fontWeight: '800', color: '#1D4ED8' },
  lessonCardBody: { flex: 1 },
  lessonTitleRow: { flexDirection: 'row', alignItems: 'flex-start', flexWrap: 'wrap', gap: 6, marginBottom: 2 },
  lessonTitle: { fontSize: 16, fontWeight: '700', color: '#1E3A5F', flexShrink: 1 },
  periodChip: { backgroundColor: '#EEF4FF', borderRadius: 8, paddingHorizontal: 7, paddingVertical: 2 },
  periodChipText: { fontSize: 10, fontWeight: '700', color: '#3B55A0' },
  lessonDesc: { fontSize: 13, color: '#64748B', lineHeight: 20 },
  maxTag: { fontSize: 11, color: '#92400E', fontWeight: '700', marginTop: 4 },
  lessonArrow: { fontSize: 24, color: '#94A3B8', paddingLeft: 8 },
});
