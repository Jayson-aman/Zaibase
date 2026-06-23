import React from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet, Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { SUBJECTS, CHAPTERS } from '../../data/chapters';
import { QUESTIONS } from '../../data/questions';

const EXAM_DATE = new Date('2025-10-19');

function daysUntilExam(): number {
  const now = new Date();
  const diff = EXAM_DATE.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export default function HomeScreen() {
  const days = daysUntilExam();

  return (
    <View style={styles.root}>
      {/* ヘッダー */}
      <LinearGradient colors={['#1E3A8A', '#1E40AF', '#2563EB']} style={styles.header}>
        <Text style={styles.headerSub}>Zaibase 宅建士対策</Text>
        <Text style={styles.headerTitle}>宅地建物取引士</Text>
        <View style={styles.countdown}>
          <Text style={styles.countdownLabel}>試験まであと</Text>
          <Text style={styles.countdownDays}>{days}</Text>
          <Text style={styles.countdownLabel}>日</Text>
        </View>
        <Text style={styles.headerDate}>（{EXAM_DATE.getFullYear()}年10月試験）</Text>
      </LinearGradient>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        {/* 統計 */}
        <View style={styles.statsRow}>
          {[
            { label: 'テキスト', value: CHAPTERS.length, unit: '章' },
            { label: '問題数', value: QUESTIONS.length, unit: '問' },
            { label: '合格点', value: '38', unit: '点/50' },
            { label: '合格率', value: '17', unit: '%' },
          ].map((stat) => (
            <View key={stat.label} style={styles.statCard}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statUnit}>{stat.unit}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* 科目カード */}
        <Text style={styles.sectionTitle}>科目別学習</Text>
        <View style={styles.subjectsGrid}>
          {SUBJECTS.map((sub) => {
            const chapters = CHAPTERS.filter((c) => c.subject === sub.key);
            const qs = QUESTIONS.filter((q) => q.subject === sub.key);
            return (
              <TouchableOpacity
                key={sub.key}
                style={styles.subjectCard}
                onPress={() => router.push({ pathname: '/(tabs)/textbook', params: { subject: sub.key } })}
              >
                <View style={[styles.subjectIcon, { backgroundColor: sub.color + '22' }]}>
                  <Text style={{ fontSize: 28 }}>{sub.emoji}</Text>
                </View>
                <Text style={styles.subjectName}>{sub.label}</Text>
                <Text style={styles.subjectCount}>{chapters.length}章 / {qs.length}問</Text>
                <View style={[styles.examCountBadge, { backgroundColor: sub.color }]}>
                  <Text style={styles.examCountText}>試験{sub.examCount}問</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* 法改正 */}
        <Text style={styles.sectionTitle}>🆕 最新法改正</Text>
        {CHAPTERS.filter((c) => c.recentChange).map((c) => (
          <TouchableOpacity
            key={c.id}
            style={styles.changeCard}
            onPress={() => router.push({ pathname: '/chapter/[id]', params: { id: c.id } })}
          >
            <Text style={styles.changeTitle}>{c.title}</Text>
            <Text style={styles.changeContent}>{c.recentChange}</Text>
          </TouchableOpacity>
        ))}

        {/* クイックスタート */}
        <TouchableOpacity
          style={styles.startBtn}
          onPress={() => router.push('/(tabs)/questions')}
        >
          <LinearGradient colors={['#1E40AF', '#3B82F6']} style={styles.startBtnGrad}>
            <Text style={styles.startBtnText}>✏️ 問題を解く</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#F0F4FF' },
  header: {
    paddingTop: Platform.OS === 'ios' ? 56 : 40,
    paddingBottom: 28,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerSub: { color: '#93C5FD', fontSize: 12, fontWeight: '600', letterSpacing: 1, marginBottom: 4 },
  headerTitle: { color: '#fff', fontSize: 22, fontWeight: '800', marginBottom: 16 },
  countdown: { flexDirection: 'row', alignItems: 'baseline', gap: 4 },
  countdownDays: { color: '#FCD34D', fontSize: 56, fontWeight: '900', lineHeight: 60 },
  countdownLabel: { color: '#BFDBFE', fontSize: 16, fontWeight: '600' },
  headerDate: { color: '#93C5FD', fontSize: 12, marginTop: 4 },

  scroll: { flex: 1 },
  scrollContent: { padding: 16 },

  statsRow: { flexDirection: 'row', gap: 8, marginBottom: 20 },
  statCard: {
    flex: 1, backgroundColor: '#fff', borderRadius: 12, padding: 12,
    alignItems: 'center',
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4, elevation: 2,
  },
  statValue: { fontSize: 22, fontWeight: '800', color: '#1E40AF' },
  statUnit: { fontSize: 10, color: '#64748B', fontWeight: '600' },
  statLabel: { fontSize: 10, color: '#94A3B8', marginTop: 2 },

  sectionTitle: { fontSize: 16, fontWeight: '700', color: '#1E293B', marginBottom: 10, marginTop: 4 },

  subjectsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 20 },
  subjectCard: {
    width: '47%', backgroundColor: '#fff', borderRadius: 14, padding: 14,
    alignItems: 'center',
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4, elevation: 2,
  },
  subjectIcon: { width: 54, height: 54, borderRadius: 14, alignItems: 'center', justifyContent: 'center', marginBottom: 8 },
  subjectName: { fontSize: 13, fontWeight: '700', color: '#1E293B', textAlign: 'center', marginBottom: 2 },
  subjectCount: { fontSize: 11, color: '#94A3B8', marginBottom: 6 },
  examCountBadge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 20 },
  examCountText: { color: '#fff', fontSize: 10, fontWeight: '700' },

  changeCard: {
    backgroundColor: '#FFFBEB', borderRadius: 12, padding: 14, marginBottom: 8,
    borderLeftWidth: 3, borderLeftColor: '#F59E0B',
  },
  changeTitle: { fontSize: 13, fontWeight: '700', color: '#92400E', marginBottom: 4 },
  changeContent: { fontSize: 12, color: '#78350F', lineHeight: 18 },

  startBtn: { marginTop: 16, borderRadius: 14, overflow: 'hidden' },
  startBtnGrad: { paddingVertical: 16, alignItems: 'center' },
  startBtnText: { color: '#fff', fontSize: 17, fontWeight: '800' },
});
