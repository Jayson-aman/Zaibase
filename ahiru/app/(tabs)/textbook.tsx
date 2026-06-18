import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { getLessonsBySubject } from '../../data/lessons';
import type { Lesson } from '../../data/lessons';
import { subjectInfo, type SubjectKey } from '../../data/questions';
import { useSubscription } from '../../hooks/useSubscription';
import { useBetaAccess } from '../../hooks/useBetaAccess';
import BetaGateModal from '../../components/BetaGateModal';
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
  const { hasAccess: betaAccess, unlock } = useBetaAccess();
  const { isPro: subIsPro, loading } = useSubscription();
  const isPro = subIsPro || betaAccess;

  const { paywallVisible, setPaywallVisible, requirePro } = useProGate(betaAccess);

  const [selectedSubject, setSelectedSubject] = useState<SubjectKey | null>(null);

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

  const lessons = selectedSubject ? getLessonsBySubject(selectedSubject) : [];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
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

        {/* Subject Tiles */}
        <Text style={styles.sectionLabel}>科目を選んでください</Text>
        <View style={styles.subjectGrid}>
          {SUBJECTS.map(({ key, emoji, color }) => {
            const info = subjectInfo[key];
            const count = getLessonsBySubject(key).length;
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
          <View style={styles.lessonList}>
            <Text style={styles.lessonListTitle}>
              {subjectInfo[selectedSubject].emoji} {subjectInfo[selectedSubject].name} の単元一覧
            </Text>
            {lessons.length === 0 ? (
              <View style={styles.emptyBox}>
                <Text style={styles.emptyText}>
                  このコンテンツは準備中です。{'\n'}もうしばらくお待ちください。
                </Text>
              </View>
            ) : (
              lessons.map((lesson, idx) => (
                <TouchableOpacity
                  key={lesson.id}
                  style={styles.lessonCard}
                  onPress={() => handleLessonPress(lesson)}
                  activeOpacity={0.8}
                >
                  <View style={styles.lessonCardLeft}>
                    <Text style={styles.lessonNumber}>{String(idx + 1).padStart(2, '0')}</Text>
                  </View>
                  <View style={styles.lessonCardBody}>
                    <Text style={styles.lessonTitle}>{lesson.title}</Text>
                    <Text style={styles.lessonDesc} numberOfLines={2}>
                      {lesson.description}
                    </Text>
                    {lesson.sections.some((s) => s.maxOnly) && (
                      <Text style={styles.maxTag}>⭐ MAX深堀りあり</Text>
                    )}
                  </View>
                  <Text style={styles.lessonArrow}>›</Text>
                </TouchableOpacity>
              ))
            )}
          </View>
        )}
      </ScrollView>

      <BetaGateModal
        visible={paywallVisible}
        onClose={() => setPaywallVisible(false)}
        onUnlocked={() => setPaywallVisible(false)}
        unlock={unlock}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F9FF' },
  scroll: { paddingBottom: 40 },
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
  lessonList: { marginHorizontal: 16, marginTop: 24 },
  lessonListTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1E3A5F',
    marginBottom: 14,
  },
  emptyBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 24,
    alignItems: 'center',
  },
  emptyText: { fontSize: 15, color: '#94A3B8', textAlign: 'center', lineHeight: 24 },
  lessonCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
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
  lessonTitle: { fontSize: 16, fontWeight: '700', color: '#1E3A5F', marginBottom: 2 },
  lessonDesc: { fontSize: 13, color: '#64748B', lineHeight: 20 },
  maxTag: { fontSize: 11, color: '#92400E', fontWeight: '700', marginTop: 4 },
  lessonArrow: { fontSize: 24, color: '#94A3B8', paddingLeft: 8 },
});
