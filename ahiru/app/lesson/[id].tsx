import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { getLessonById } from '../../data/lessons';
import LessonRenderer from '../../components/LessonRenderer';
import VideoPlayer from '../../components/VideoPlayer';
import { getLessonVideo } from '../../data/videos';
import HomeButton from '../../components/HomeButton';
import { useSubscription } from '../../hooks/useSubscription';
import { useBetaAccess } from '../../hooks/useBetaAccess';
import { subjectInfo } from '../../data/questions-meta';

export default function LessonDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  // loading を見ずに isPro/isMax だけで分岐すると、課金状態の取得が終わるまでの
  // 一瞬、加入者にも「Proプランで閲覧できます」のロック画面が出てしまう。
  const { isPro: subIsPro, isMax: subIsMax, loading: subLoading } = useSubscription();
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
          <HomeButton variant="dark" style={{ marginTop: 12 }} />
        </View>
      </SafeAreaView>
    );
  }

  const info = subjectInfo[lesson.subject];
  const hasMaxContent = lesson.sections.some((s) => s.maxOnly);
  const lessonVideo = getLessonVideo(lesson.id);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: info.color }]}>
        <View style={styles.headerTopRow}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backRow}>
            <Text style={styles.backArrow}>← </Text>
            <Text style={styles.backLabel}>{info.name}</Text>
          </TouchableOpacity>
          <HomeButton variant="light" />
        </View>
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
        {subLoading && (
          <View style={styles.center}>
            <ActivityIndicator color={info.color} />
          </View>
        )}
        {!subLoading && !isPro && (
          <View style={styles.lockedBanner}>
            <Text style={styles.lockedText}>
              🔒 このコンテンツはProプランで閲覧できます
            </Text>
          </View>
        )}
        {!subLoading && isPro && (
          <>
            {hasMaxContent && !isMax && (
              <View style={styles.maxTeaser}>
                <Text style={styles.maxTeaserText}>
                  ⭐ この単元にはMAX限定の深堀り解説があります
                </Text>
              </View>
            )}
            {lessonVideo != null && (
              <VideoPlayer url={lessonVideo.url} title={lessonVideo.title ?? '動画解説'} />
            )}
            {lesson.intro != null && lesson.intro !== '' && (
              <View style={styles.introBox}>
                <Text style={styles.introLabel}>🌱 まずはここから</Text>
                <Text style={styles.introText}>{lesson.intro}</Text>
              </View>
            )}
            <LessonRenderer sections={lesson.sections} isMax={isMax} />
            {lesson.keyPoints != null && lesson.keyPoints.length > 0 && (
              <View style={styles.keyPointsBox}>
                <Text style={styles.keyPointsTitle}>📌 覚える要点</Text>
                {lesson.keyPoints.map((p, i) => (
                  <View key={i} style={styles.keyPointRow}>
                    <Text style={styles.keyPointCheck}>✅</Text>
                    <Text style={styles.keyPointText}>{p}</Text>
                  </View>
                ))}
              </View>
            )}
            {lesson.trapExamples != null && lesson.trapExamples.length > 0 && (
              <View style={styles.trapBox}>
                <Text style={styles.trapTitle}>⚠️ ひっかけ問題に注意</Text>
                {lesson.trapExamples.map((t, i) => (
                  <View key={i} style={[styles.trapItem, i > 0 && styles.trapItemSpacer]}>
                    <Text style={styles.trapQuestionLabel}>問題</Text>
                    <Text style={styles.trapQuestion}>{t.question}</Text>
                    <View style={styles.trapWrongBox}>
                      <Text style={styles.trapWrongLabel}>❌ こう間違えがち：{t.wrongAnswer}</Text>
                      <Text style={styles.trapWrongText}>{t.trapExplanation}</Text>
                    </View>
                    <View style={styles.trapCorrectBox}>
                      <Text style={styles.trapCorrectLabel}>✅ 正解：{t.correctAnswer}</Text>
                      <Text style={styles.trapCorrectText}>{t.correctExplanation}</Text>
                    </View>
                  </View>
                ))}
              </View>
            )}
            <TouchableOpacity
              style={[styles.practiceBtn, { backgroundColor: info.color }]}
              activeOpacity={0.85}
              onPress={() =>
                router.push(
                  `/quiz/${lesson.subject}?examType=${lesson.examType ?? 'chugaku'}` as any,
                )
              }
            >
              <Text style={styles.practiceBtnText}>✏️ この単元の練習問題にちょうせん →</Text>
            </TouchableOpacity>
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
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 18,
  },
  headerTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  backRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backArrow: { fontSize: 18, color: 'rgba(255,255,255,0.8)', fontWeight: '700' },
  backLabel: { fontSize: 14, color: 'rgba(255,255,255,0.8)', fontWeight: '600' },
  lessonTitle: {
    fontSize: 21,
    fontWeight: '900',
    color: '#FFFFFF',
    marginBottom: 5,
    letterSpacing: -0.4,
    lineHeight: 28,
  },
  lessonDesc: { fontSize: 13, color: 'rgba(255,255,255,0.88)', lineHeight: 19 },
  tier: {
    marginTop: 9,
    alignSelf: 'flex-start',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  tierPro: { backgroundColor: 'rgba(255,255,255,0.2)' },
  tierMax: { backgroundColor: 'rgba(251,191,36,0.3)' },
  tierText: { fontSize: 11, color: '#FFFFFF', fontWeight: '800', letterSpacing: 0.2 },
  scroll: { flex: 1 },
  content: { padding: 16, paddingBottom: 56 },
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
  // 導入（つかみ）。本文より先に読ませたいので、本文とは違う色面で目立たせる。
  introBox: {
    backgroundColor: '#F0F9FF',
    borderRadius: 8,
    padding: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#BAE6FD',
    borderLeftWidth: 4,
    borderLeftColor: '#0EA5E9',
  },
  introLabel: {
    fontSize: 12,
    fontWeight: '900',
    color: '#0369A1',
    letterSpacing: 0.4,
    marginBottom: 6,
  },
  introText: { fontSize: 14.5, color: '#0F172A', lineHeight: 23 },
  keyPointsBox: {
    backgroundColor: '#ECFDF5',
    borderRadius: 8,
    padding: 14,
    marginTop: 8,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#A7F3D0',
    borderLeftWidth: 4,
    borderLeftColor: '#10B981',
  },
  keyPointsTitle: { fontSize: 15, fontWeight: '900', color: '#065F46', marginBottom: 9, letterSpacing: 0.2 },
  keyPointRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 8 },
  keyPointCheck: { fontSize: 14, marginRight: 8, marginTop: 2 },
  keyPointText: { flex: 1, fontSize: 14, color: '#064E3B', lineHeight: 21 },
  trapBox: {
    backgroundColor: '#FFF7ED',
    borderRadius: 8,
    padding: 14,
    marginTop: 8,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#FED7AA',
    borderLeftWidth: 4,
    borderLeftColor: '#F97316',
  },
  trapTitle: { fontSize: 15, fontWeight: '900', color: '#9A3412', marginBottom: 9, letterSpacing: 0.2 },
  trapItem: {},
  trapItemSpacer: { marginTop: 18, paddingTop: 18, borderTopWidth: 1, borderTopColor: '#FED7AA' },
  trapQuestionLabel: { fontSize: 12, fontWeight: '800', color: '#C2410C', marginBottom: 4 },
  trapQuestion: { fontSize: 14, color: '#1F2937', lineHeight: 21, marginBottom: 9 },
  trapWrongBox: {
    backgroundColor: '#FEF2F2',
    borderRadius: 6,
    padding: 11,
    marginBottom: 7,
    borderWidth: 1,
    borderColor: '#FECACA',
  },
  trapWrongLabel: { fontSize: 13.5, fontWeight: '700', color: '#B91C1C', marginBottom: 4 },
  trapWrongText: { fontSize: 13.5, color: '#7F1D1D', lineHeight: 20 },
  trapCorrectBox: {
    backgroundColor: '#ECFDF5',
    borderRadius: 6,
    padding: 11,
    borderWidth: 1,
    borderColor: '#A7F3D0',
  },
  trapCorrectLabel: { fontSize: 13.5, fontWeight: '700', color: '#047857', marginBottom: 4 },
  trapCorrectText: { fontSize: 13.5, color: '#064E3B', lineHeight: 20 },
  practiceBtn: {
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 28,
  },
  practiceBtnText: { color: '#fff', fontSize: 16, fontWeight: '800' },
});
