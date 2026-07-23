import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Linking,
  TextInput,
} from 'react-native';
import { useRouter } from 'expo-router';
import {
  admissionSchools,
  admissionSearchUrl,
  LEVELS,
  type SchoolExamType,
  type SchoolLevel,
} from '../data/admissions';

const YEARS = ['2027年度', '2026年度', '2028年度'];

export default function AdmissionsScreen() {
  const router = useRouter();
  const [type, setType] = useState<SchoolExamType>('chugaku');
  const [level, setLevel] = useState<SchoolLevel | 'all'>('all');
  const [year, setYear] = useState('2027年度');
  const [query, setQuery] = useState('');

  const list = admissionSchools
    .filter((s) => s.type === type)
    .filter((s) => (level === 'all' ? true : (s.level ?? 'top') === level))
    .filter((s) =>
      query.trim() === ''
        ? true
        : (s.name + s.prefecture + s.region).includes(query.trim()),
    );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backRow}>
          <Text style={styles.backText}>← 戻る</Text>
        </TouchableOpacity>
        <Text style={styles.title}>📋 募集要項（学校別）</Text>
        <Text style={styles.subtitle}>年度を選んで、公式の最新募集要項へ</Text>
      </View>

      <View style={styles.notice}>
        <Text style={styles.noticeText}>
          ⚠️ 出願期間・試験日・科目・定員などは毎年変わります。必ず各学校の
          <Text style={{ fontWeight: '800' }}>公式の募集要項</Text>で最新情報をご確認ください。
        </Text>
      </View>

      <View style={styles.tabRow}>
        <TouchableOpacity
          style={[styles.tab, type === 'chugaku' && styles.tabActiveJhs]}
          onPress={() => setType('chugaku')}
          activeOpacity={0.85}
        >
          <Text style={[styles.tabText, type === 'chugaku' && styles.tabTextActive]}>📖 中学受験</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, type === 'koko' && styles.tabActiveHs]}
          onPress={() => setType('koko')}
          activeOpacity={0.85}
        >
          <Text style={[styles.tabText, type === 'koko' && styles.tabTextActive]}>🏫 高校受験</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.levelRow}>
        <TouchableOpacity
          style={[styles.levelChip, level === 'all' && styles.levelChipActive]}
          onPress={() => setLevel('all')}
          activeOpacity={0.85}
        >
          <Text style={[styles.levelText, level === 'all' && styles.levelTextActive]}>すべて</Text>
        </TouchableOpacity>
        {LEVELS.map((l) => (
          <TouchableOpacity
            key={l.key}
            style={[styles.levelChip, level === l.key && styles.levelChipActive]}
            onPress={() => setLevel(l.key)}
            activeOpacity={0.85}
          >
            <Text style={[styles.levelText, level === l.key && styles.levelTextActive]}>{l.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.yearRow}>
        {YEARS.map((y) => (
          <TouchableOpacity
            key={y}
            style={[styles.yearChip, year === y && styles.yearChipActive]}
            onPress={() => setYear(y)}
            activeOpacity={0.85}
          >
            <Text style={[styles.yearText, year === y && styles.yearTextActive]}>{y}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TextInput
        style={styles.search}
        placeholder="学校名・都道府県で検索"
        placeholderTextColor="#94A3B8"
        value={query}
        onChangeText={setQuery}
      />

      <ScrollView contentContainerStyle={styles.scroll}>
        {list.length === 0 ? (
          <Text style={styles.empty}>該当する学校が見つかりません。</Text>
        ) : (
          list.map((s) => (
            <TouchableOpacity
              key={s.id}
              style={styles.card}
              activeOpacity={0.85}
              onPress={() => Linking.openURL(admissionSearchUrl(s, year))}
            >
              <View style={styles.cardBody}>
                <View style={styles.schoolNameRow}>
                  <Text style={styles.schoolName}>{s.name}</Text>
                  <View style={[styles.levelBadge, (s.level ?? 'top') === 'standard' && styles.levelBadgeStandard]}>
                    <Text style={[styles.levelBadgeText, (s.level ?? 'top') === 'standard' && styles.levelBadgeTextStandard]}>
                      {(s.level ?? 'top') === 'standard' ? '標準' : '難関'}
                    </Text>
                  </View>
                </View>
                <Text style={styles.schoolMeta}>
                  {s.prefecture}・{s.region}
                  {s.note ? `・${s.note}` : ''}
                </Text>
              </View>
              <Text style={styles.cardLink}>{year}の要項 →</Text>
            </TouchableOpacity>
          ))
        )}
        <Text style={styles.footNote}>
          ここに無い学校は、各学校の公式サイトで「{'{'}学校名{'}'} {year} 募集要項」と検索してください。
        </Text>
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F9FF' },
  header: { paddingHorizontal: 20, paddingTop: 8, paddingBottom: 12, backgroundColor: '#0EA5E9' },
  backRow: { paddingVertical: 6 },
  backText: { color: 'rgba(255,255,255,0.95)', fontSize: 16, fontWeight: '700' },
  title: { color: '#fff', fontSize: 24, fontWeight: '800', marginTop: 4 },
  subtitle: { color: 'rgba(255,255,255,0.9)', fontSize: 13, marginTop: 4 },
  notice: { backgroundColor: '#FEF3C7', padding: 12, marginHorizontal: 16, marginTop: 12, borderRadius: 10 },
  noticeText: { color: '#92400E', fontSize: 12, lineHeight: 18 },
  tabRow: { flexDirection: 'row', gap: 8, paddingHorizontal: 16, marginTop: 12 },
  tab: { flex: 1, paddingVertical: 10, borderRadius: 12, backgroundColor: '#E2E8F0', alignItems: 'center' },
  tabActiveJhs: { backgroundColor: '#0EA5E9' },
  tabActiveHs: { backgroundColor: '#7C3AED' },
  tabText: { fontSize: 15, fontWeight: '700', color: '#475569' },
  tabTextActive: { color: '#fff' },
  levelRow: { flexDirection: 'row', gap: 8, paddingHorizontal: 16, marginTop: 12 },
  levelChip: { flex: 1, paddingVertical: 8, borderRadius: 999, backgroundColor: '#fff', borderWidth: 1, borderColor: '#CBD5E1', alignItems: 'center' },
  levelChipActive: { backgroundColor: '#0369A1', borderColor: '#0369A1' },
  levelText: { fontSize: 13, fontWeight: '700', color: '#475569' },
  levelTextActive: { color: '#fff' },
  yearRow: { flexDirection: 'row', gap: 8, paddingHorizontal: 16, marginTop: 10 },
  yearChip: { paddingVertical: 7, paddingHorizontal: 14, borderRadius: 999, backgroundColor: '#fff', borderWidth: 1, borderColor: '#CBD5E1' },
  yearChipActive: { backgroundColor: '#0369A1', borderColor: '#0369A1' },
  yearText: { fontSize: 13, fontWeight: '700', color: '#475569' },
  yearTextActive: { color: '#fff' },
  search: {
    marginHorizontal: 16,
    marginTop: 12,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#BAE6FD',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 11,
    fontSize: 15,
    color: '#0F172A',
  },
  scroll: { padding: 16 },
  empty: { textAlign: 'center', color: '#64748B', marginTop: 30 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardBody: { flex: 1 },
  schoolNameRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  schoolName: { fontSize: 16, fontWeight: '700', color: '#0F172A' },
  levelBadge: { paddingHorizontal: 8, paddingVertical: 2, borderRadius: 999, backgroundColor: '#FEF3C7' },
  levelBadgeStandard: { backgroundColor: '#DBEAFE' },
  levelBadgeText: { fontSize: 11, fontWeight: '800', color: '#92400E' },
  levelBadgeTextStandard: { color: '#1D4ED8' },
  schoolMeta: { fontSize: 12, color: '#64748B', marginTop: 3 },
  cardLink: { fontSize: 13, color: '#0369A1', fontWeight: '800' },
  footNote: { fontSize: 12, color: '#64748B', marginTop: 8, lineHeight: 18 },
});
