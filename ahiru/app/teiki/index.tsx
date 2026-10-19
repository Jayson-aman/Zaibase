import React, { useMemo, useState } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { teikiModule } from '../../data/teiki-lazy';
import type { TeikiGrade } from '../../data/teiki/types';
import { subjectInfo, type SubjectKey } from '../../data/questions-meta';
import HomeButton from '../../components/HomeButton';
import { rich } from '../../components/RichText';

const GRADES: { key: TeikiGrade; label: string }[] = [
  { key: 'j1', label: '中1' },
  { key: 'j2', label: '中2' },
  { key: 'j3', label: '中3' },
];
const SUBJECTS: SubjectKey[] = ['sansu', 'kokugo', 'rika', 'shakai', 'eigo'];
// 中学生向けなので、教科名は「数学」で出す
const subjName = (s: SubjectKey) => (s === 'sansu' ? '数学' : subjectInfo[s].name);

export default function TeikiIndex() {
  const router = useRouter();
  const mod = teikiModule.use();
  const params = useLocalSearchParams<{ grade?: string; subject?: string }>();
  const [grade, setGrade] = useState<TeikiGrade>(params.grade === 'j2' || params.grade === 'j3' ? params.grade : 'j1');
  const [subject, setSubject] = useState<SubjectKey>(SUBJECTS.includes(params.subject as SubjectKey) ? (params.subject as SubjectKey) : 'sansu');

  const units = useMemo(
    () => (mod ? mod.TEIKI_UNITS.filter((u) => u.grade === grade && u.subject === subject) : []),
    [mod, grade, subject],
  );
  const counts = useMemo(() => {
    const m: Record<string, number> = {};
    if (mod) for (const u of mod.TEIKI_UNITS) m[`${u.grade}|${u.subject}`] = (m[`${u.grade}|${u.subject}`] ?? 0) + 1;
    return m;
  }, [mod]);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity onPress={() => router.back()} activeOpacity={0.7}>
            <Text style={styles.back}>‹ 戻る</Text>
          </TouchableOpacity>
          <HomeButton variant="light" />
        </View>
        <Text style={styles.title}>📘 定期テストの教科書</Text>
        <Text style={styles.sub}>学校の教科書を、動く図解でかみくだきます（入試対策とは別枠）</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.row}>
          {GRADES.map((g) => (
            <TouchableOpacity key={g.key} style={[styles.chip, grade === g.key && styles.chipOn]} onPress={() => setGrade(g.key)} activeOpacity={0.85}>
              <Text style={[styles.chipText, grade === g.key && styles.chipTextOn]}>{g.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {SUBJECTS.map((s) => (
            <TouchableOpacity key={s} style={[styles.chip, subject === s && styles.chipOn]} onPress={() => setSubject(s)} activeOpacity={0.85}>
              <Text style={[styles.chipText, subject === s && styles.chipTextOn]}>
                {subjName(s)}
                {counts[`${grade}|${s}`] ? ` ${counts[`${grade}|${s}`]}` : ''}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.practice} activeOpacity={0.85} onPress={() => router.push(`/teiki-practice?grade=${grade}&subject=${subject}` as any)}>
          <Text style={styles.practiceTitle}>📝 基本中の基本 50問（学期末テスト対応）</Text>
          <Text style={styles.practiceSub}>{GRADES.find((g) => g.key === grade)?.label}{subjName(subject)}・1学期末／2学期末／学年末で絞れます →</Text>
        </TouchableOpacity>
        {!mod && <ActivityIndicator style={{ marginTop: 40 }} color="#B5622E" />}
        {mod && units.length === 0 && <Text style={styles.empty}>この学年・教科は準備中です。順次ふやします。</Text>}
        {units.map((u) => (
          <TouchableOpacity key={u.id} style={styles.card} activeOpacity={0.85} onPress={() => router.push(`/teiki/${u.id}` as any)}>
            <Text style={styles.chapter}>{u.chapter}</Text>
            <Text style={styles.unitTitle}>{u.title}</Text>
            <Text style={styles.gist} numberOfLines={2}>{rich(u.gist)}</Text>
            <Text style={styles.meta}>🎞 動く図解 {u.figure.steps?.length ?? 0}枚 ・ ✍ 確認 {u.checks.length}問</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#FAF7F2' },
  header: { backgroundColor: '#6B4226', paddingHorizontal: 20, paddingTop: 12, paddingBottom: 18 },
  headerTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  back: { color: 'rgba(255,255,255,0.9)', fontSize: 14, fontWeight: '700' },
  title: { fontSize: 22, fontWeight: '900', color: '#fff', marginTop: 8 },
  sub: { fontSize: 12, color: 'rgba(255,255,255,0.85)', marginTop: 4, lineHeight: 18 },
  content: { padding: 16, paddingBottom: 40 },
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 10 },
  chip: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20, backgroundColor: '#fff', borderWidth: 1.5, borderColor: '#E0D4C2' },
  chipOn: { backgroundColor: '#B5622E', borderColor: '#B5622E' },
  chipText: { fontSize: 13, fontWeight: '700', color: '#4A3320' },
  chipTextOn: { color: '#fff' },
  practice: { backgroundColor: '#FFF1E6', borderRadius: 14, borderWidth: 1.5, borderColor: '#E8B98E', padding: 14, marginTop: 4 },
  practiceTitle: { fontSize: 15, fontWeight: '800', color: '#8A3F12' },
  practiceSub: { fontSize: 12, color: '#6B5A48', marginTop: 4 },
  empty: { marginTop: 30, textAlign: 'center', color: '#8A7A68', fontSize: 14 },
  card: { backgroundColor: '#fff', borderRadius: 14, padding: 14, marginTop: 10, borderWidth: 1.5, borderColor: '#E8DCCB' },
  chapter: { fontSize: 11, fontWeight: '800', color: '#B5622E' },
  unitTitle: { fontSize: 16, fontWeight: '800', color: '#4A3320', marginTop: 2 },
  gist: { fontSize: 13, lineHeight: 19, color: '#6B5A48', marginTop: 4 },
  meta: { fontSize: 11, color: '#8A7A68', marginTop: 8 },
});
