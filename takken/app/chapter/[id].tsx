import React from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet, Platform,
} from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { getChapterById, SUBJECTS, CHAPTERS } from '../../data/chapters';
import AudioPlayer from '../../components/AudioPlayer';

export default function ChapterScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const chapter = getChapterById(id ?? '');

  if (!chapter) {
    return (
      <View style={styles.error}>
        <Text style={styles.errorText}>章が見つかりません</Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.errorLink}>← 戻る</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const subjectInfo = SUBJECTS.find((s) => s.key === chapter.subject)!;
  const allChapters = CHAPTERS.filter((c) => c.subject === chapter.subject).sort((a, b) => a.order - b.order);
  const idx = allChapters.findIndex((c) => c.id === id);
  const prev = idx > 0 ? allChapters[idx - 1] : null;
  const next = idx < allChapters.length - 1 ? allChapters[idx + 1] : null;

  const FREQ_LABEL = { 'very-high': '★★★ 最重要', high: '★★ 重要', medium: '★ 標準' };
  const FREQ_COLOR = { 'very-high': '#DC2626', high: '#D97706', medium: '#059669' };

  return (
    <View style={styles.root}>
      {/* ヘッダー */}
      <View style={[styles.header, { backgroundColor: subjectInfo.color }]}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Text style={styles.backBtnText}>← テキスト一覧</Text>
        </TouchableOpacity>
        <View style={styles.headerBadge}>
          <Text style={styles.headerBadgeText}>{subjectInfo.label}</Text>
        </View>
        <Text style={styles.headerTitle}>{chapter.title}</Text>
        <Text style={styles.headerSub}>{chapter.subtitle}</Text>
        <View style={styles.headerMeta}>
          <Text style={[styles.freqText, { color: '#FCD34D' }]}>
            {FREQ_LABEL[chapter.examFrequency]}
          </Text>
          <Text style={styles.minuteText}>約{chapter.estimatedMinutes}分</Text>
        </View>
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        {/* 法改正バナー */}
        {chapter.recentChange && (
          <View style={styles.changeBanner}>
            <Text style={styles.changeBannerTitle}>🆕 法改正ポイント</Text>
            <Text style={styles.changeBannerText}>{chapter.recentChange}</Text>
          </View>
        )}

        {/* 音声プレーヤー */}
        <AudioPlayer text={chapter.content} chapterId={chapter.id} />

        {/* 重要ポイント */}
        <View style={styles.keyPoints}>
          <Text style={styles.keyPointsTitle}>📌 重要ポイント</Text>
          {chapter.keyPoints.map((kp, i) => (
            <View key={i} style={styles.keyPoint}>
              <View style={[styles.keyPointDot, { backgroundColor: subjectInfo.color }]} />
              <Text style={styles.keyPointText}>{kp}</Text>
            </View>
          ))}
        </View>

        {/* 本文 */}
        <View style={styles.contentBox}>
          <Text style={styles.contentTitle}>📝 解説</Text>
          <Text style={styles.contentText}>{chapter.content}</Text>
        </View>

        {/* 前後ナビ */}
        <View style={styles.nav}>
          {prev ? (
            <TouchableOpacity
              style={styles.navBtn}
              onPress={() => router.replace({ pathname: '/chapter/[id]', params: { id: prev.id } })}
            >
              <Text style={styles.navBtnArrow}>←</Text>
              <Text style={styles.navBtnText} numberOfLines={2}>前へ：{prev.title}</Text>
            </TouchableOpacity>
          ) : <View style={{ flex: 1 }} />}
          {next ? (
            <TouchableOpacity
              style={[styles.navBtn, styles.navBtnRight]}
              onPress={() => router.replace({ pathname: '/chapter/[id]', params: { id: next.id } })}
            >
              <Text style={styles.navBtnText} numberOfLines={2}>次へ：{next.title}</Text>
              <Text style={styles.navBtnArrow}>→</Text>
            </TouchableOpacity>
          ) : <View style={{ flex: 1 }} />}
        </View>

        <View style={{ height: 30 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#F0F4FF' },
  error: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 12 },
  errorText: { fontSize: 16, color: '#64748B' },
  errorLink: { fontSize: 14, color: '#1E40AF', fontWeight: '600' },

  header: {
    paddingTop: Platform.OS === 'ios' ? 56 : 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  backBtn: { marginBottom: 12 },
  backBtnText: { color: 'rgba(255,255,255,0.8)', fontSize: 13, fontWeight: '600' },
  headerBadge: {
    alignSelf: 'flex-start', backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 10, paddingVertical: 3, borderRadius: 20, marginBottom: 8,
  },
  headerBadgeText: { color: '#fff', fontSize: 11, fontWeight: '700' },
  headerTitle: { color: '#fff', fontSize: 22, fontWeight: '800', marginBottom: 4 },
  headerSub: { color: 'rgba(255,255,255,0.85)', fontSize: 13, marginBottom: 10 },
  headerMeta: { flexDirection: 'row', gap: 12 },
  freqText: { fontSize: 12, fontWeight: '700' },
  minuteText: { color: 'rgba(255,255,255,0.75)', fontSize: 12 },

  scroll: { flex: 1 },
  scrollContent: { padding: 16 },

  changeBanner: {
    backgroundColor: '#FFFBEB', borderRadius: 12, padding: 14,
    borderLeftWidth: 3, borderLeftColor: '#F59E0B', marginBottom: 12,
  },
  changeBannerTitle: { fontSize: 13, fontWeight: '700', color: '#92400E', marginBottom: 4 },
  changeBannerText: { fontSize: 12, color: '#78350F', lineHeight: 18 },

  keyPoints: {
    backgroundColor: '#EFF6FF', borderRadius: 12, padding: 14, marginBottom: 14,
    borderWidth: 1, borderColor: '#BFDBFE',
  },
  keyPointsTitle: { fontSize: 14, fontWeight: '700', color: '#1E40AF', marginBottom: 10 },
  keyPoint: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 8, gap: 8 },
  keyPointDot: { width: 8, height: 8, borderRadius: 4, marginTop: 6 },
  keyPointText: { flex: 1, fontSize: 13, lineHeight: 20, color: '#1E293B' },

  contentBox: { backgroundColor: '#fff', borderRadius: 14, padding: 18, marginBottom: 16 },
  contentTitle: { fontSize: 15, fontWeight: '700', color: '#1E293B', marginBottom: 12, borderBottomWidth: 1, borderBottomColor: '#E2E8F0', paddingBottom: 8 },
  contentText: { fontSize: 14, lineHeight: 26, color: '#374151' },

  nav: { flexDirection: 'row', gap: 10 },
  navBtn: {
    flex: 1, backgroundColor: '#fff', borderRadius: 12, padding: 12,
    flexDirection: 'row', alignItems: 'center', gap: 6,
    borderWidth: 1, borderColor: '#E2E8F0',
  },
  navBtnRight: { justifyContent: 'flex-end' },
  navBtnArrow: { fontSize: 18, color: '#1E40AF', fontWeight: '700' },
  navBtnText: { flex: 1, fontSize: 12, color: '#374151', fontWeight: '600' },
});
