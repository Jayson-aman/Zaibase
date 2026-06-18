import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { getLessonById } from '../../data/lessons';
import LessonRenderer from '../../components/LessonRenderer';
import { useSubscription } from '../../hooks/useSubscription';
import { useBetaAccess } from '../../hooks/useBetaAccess';
import { subjectInfo } from '../../data/questions';

export default function LessonDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { isPro: subIsPro, isMax: subIsMax } = useSubscription();
  const { hasAccess: betaAccess } = useBetaAccess();
  const isPro = subIsPro || betaAccess;
  const isMax = subIsMax || betaAccess;

  const lesson = id ? getLessonById(id) : undefined;

  if (!lesson) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.center}>
          <Text style={styles.notFound}>レッスンが見つかりません</Text>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Text style={styles.backBtnText}>← 戻る</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const info = subjectInfo[lesson.subject];
  const hasMaxContent = lesson.sections.some((s) => s.maxOnly);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: info.color }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backRow}>
          <Text style={styles.backArrow}>← </Text>
          <Text style={styles.backLabel}>{info.name}</Text>
        </TouchableOpacity>
        <Text style={styles.lessonTitle}>{lesson.title}</Text>
        <Text style={styles.lessonDesc}>{lesson.description}</Text>
        {hasMaxContent && (
          <View style={[styles.tier, isMax ? styles.tierMax : styles.tierPro]}>
            <Text style={styles.tierText}>
              {isMax ? '⭐ MAX — 深堀り解説含む' : '📘 PRO — 標準解説'}
            </Text>
          </View>
        )}
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        {!isPro && (
          <View style={styles.lockedBanner}>
            <Text style={styles.lockedText}>
              🔒 このコンテンツはProプランで閲覧できます
            </Text>
          </View>
        )}
        {isPro && (
          <>
            {hasMaxContent && !isMax && (
              <View style={styles.maxTeaser}>
                <Text style={styles.maxTeaserText}>
                  ⭐ この単元にはMAX限定の深堀り解説があります
                </Text>
              </View>
            )}
            <LessonRenderer sections={lesson.sections} isMax={isMax} />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  notFound: { fontSize: 18, color: '#64748B', marginBottom: 16 },
  backBtn: {
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
  },
  backBtnText: { fontSize: 16, color: '#1D4ED8', fontWeight: '700' },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
  },
  backRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  backArrow: { fontSize: 18, color: 'rgba(255,255,255,0.8)', fontWeight: '700' },
  backLabel: { fontSize: 14, color: 'rgba(255,255,255,0.8)', fontWeight: '600' },
  lessonTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#FFFFFF',
    marginBottom: 6,
  },
  lessonDesc: { fontSize: 14, color: 'rgba(255,255,255,0.85)', lineHeight: 22 },
  tier: {
    marginTop: 10,
    alignSelf: 'flex-start',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  tierPro: { backgroundColor: 'rgba(255,255,255,0.2)' },
  tierMax: { backgroundColor: 'rgba(251,191,36,0.3)' },
  tierText: { fontSize: 12, color: '#FFFFFF', fontWeight: '700' },
  scroll: { flex: 1 },
  content: { padding: 20, paddingBottom: 60 },
  lockedBanner: {
    backgroundColor: '#EFF6FF',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  lockedText: { fontSize: 15, color: '#1D4ED8', fontWeight: '600', textAlign: 'center' },
  maxTeaser: {
    backgroundColor: '#FFFBEB',
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#FDE68A',
  },
  maxTeaserText: { fontSize: 13, color: '#92400E', fontWeight: '600' },
});
