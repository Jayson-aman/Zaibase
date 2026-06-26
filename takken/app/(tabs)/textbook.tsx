import React, { useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet, Platform,
} from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { SUBJECTS, CHAPTERS, Subject } from '../../data/chapters';

export default function TextbookScreen() {
  const params = useLocalSearchParams<{ subject?: string }>();
  const [activeSubject, setActiveSubject] = useState<Subject>(
    (params.subject as Subject) ?? '権利関係',
  );

  const chapters = CHAPTERS.filter((c) => c.subject === activeSubject).sort((a, b) => a.order - b.order);
  const subjectInfo = SUBJECTS.find((s) => s.key === activeSubject)!;

  const FREQ_LABEL = { 'very-high': '★★★ 最重要', high: '★★ 重要', medium: '★ 標準' };
  const FREQ_COLOR = { 'very-high': '#DC2626', high: '#D97706', medium: '#059669' };

  return (
    <View style={styles.root}>
      {/* ヘッダー */}
      <View style={[styles.header, { backgroundColor: subjectInfo.color }]}>
        <Text style={styles.headerTitle}>{subjectInfo.emoji} テキスト</Text>
        <Text style={styles.headerSub}>試験出題数：{subjectInfo.examCount}問</Text>
      </View>

      {/* 科目タブ */}
      <View style={styles.tabs}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabsContent}>
          {SUBJECTS.map((sub) => (
            <TouchableOpacity
              key={sub.key}
              style={[styles.tab, activeSubject === sub.key && { backgroundColor: sub.color }]}
              onPress={() => setActiveSubject(sub.key)}
            >
              <Text style={[styles.tabText, activeSubject === sub.key && styles.tabTextActive]}>
                {sub.emoji} {sub.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* 章一覧 */}
      <ScrollView contentContainerStyle={styles.list}>
        {chapters.map((ch, i) => (
          <TouchableOpacity
            key={ch.id}
            style={styles.chapterCard}
            onPress={() => router.push({ pathname: '/chapter/[id]', params: { id: ch.id } })}
          >
            <View style={styles.chapterLeft}>
              <View style={[styles.chapterNum, { backgroundColor: subjectInfo.color }]}>
                <Text style={styles.chapterNumText}>{i + 1}</Text>
              </View>
              <View style={styles.chapterInfo}>
                <Text style={styles.chapterTitle}>{ch.title}</Text>
                <Text style={styles.chapterSub}>{ch.subtitle}</Text>
                <View style={styles.chapterMeta}>
                  <Text style={[styles.freqBadge, { color: FREQ_COLOR[ch.examFrequency] }]}>
                    {FREQ_LABEL[ch.examFrequency]}
                  </Text>
                  <Text style={styles.metaText}>　約{ch.estimatedMinutes}分</Text>
                </View>
              </View>
            </View>
            <View style={styles.chapterRight}>
              {ch.recentChange && (
                <View style={styles.newBadge}>
                  <Text style={styles.newBadgeText}>改正</Text>
                </View>
              )}
              <Text style={styles.arrow}>›</Text>
            </View>
          </TouchableOpacity>
        ))}
        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#F0F4FF' },
  header: {
    paddingTop: Platform.OS === 'ios' ? 56 : 40,
    paddingBottom: 16,
    paddingHorizontal: 20,
  },
  headerTitle: { color: '#fff', fontSize: 20, fontWeight: '800' },
  headerSub: { color: 'rgba(255,255,255,0.8)', fontSize: 12, marginTop: 2 },

  tabs: { backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#E2E8F0' },
  tabsContent: { paddingHorizontal: 12, paddingVertical: 10, gap: 8 },
  tab: {
    paddingHorizontal: 14, paddingVertical: 7, borderRadius: 20,
    backgroundColor: '#F1F5F9',
  },
  tabText: { fontSize: 12, fontWeight: '600', color: '#475569' },
  tabTextActive: { color: '#fff' },

  list: { padding: 14, gap: 10 },
  chapterCard: {
    backgroundColor: '#fff', borderRadius: 14, padding: 14,
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4, elevation: 2,
  },
  chapterLeft: { flexDirection: 'row', alignItems: 'flex-start', flex: 1, gap: 12 },
  chapterNum: {
    width: 32, height: 32, borderRadius: 8, alignItems: 'center', justifyContent: 'center', marginTop: 2,
  },
  chapterNumText: { color: '#fff', fontWeight: '800', fontSize: 13 },
  chapterInfo: { flex: 1 },
  chapterTitle: { fontSize: 14, fontWeight: '700', color: '#1E293B', marginBottom: 2 },
  chapterSub: { fontSize: 12, color: '#64748B', marginBottom: 4 },
  chapterMeta: { flexDirection: 'row', alignItems: 'center' },
  freqBadge: { fontSize: 11, fontWeight: '700' },
  metaText: { fontSize: 11, color: '#94A3B8' },
  chapterRight: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  newBadge: { backgroundColor: '#FEF3C7', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 },
  newBadgeText: { fontSize: 10, fontWeight: '700', color: '#92400E' },
  arrow: { fontSize: 22, color: '#CBD5E1', fontWeight: '300' },
});
