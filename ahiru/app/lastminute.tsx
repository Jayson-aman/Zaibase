// 模試の直前まとめ（簡易版）。「ここだけは必要」という要点を、受験種別×教科で1画面にまとめて見せる。
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { subjectInfo, type SubjectKey } from '../data/questions-meta';
import { LAST_MINUTE } from '../data/lastminute';
import { useExamType, examTypeLabel, subjectDisplayName, type ExamType } from '../store/examType';
import { goBack } from '../utils/nav';
import HomeButton from '../components/HomeButton';

const SUBJECTS: SubjectKey[] = ['sansu', 'kokugo', 'rika', 'shakai', 'eigo'];

export default function LastMinuteScreen() {
  const router = useRouter();
  const { examType } = useExamType();
  const [picked, setPicked] = useState<ExamType | null>(null);
  const et: ExamType = picked ?? examType ?? 'chugaku';
  const [subject, setSubject] = useState<SubjectKey>('sansu');
  const [done, setDone] = useState<Record<string, boolean>>({});
  const points = LAST_MINUTE[et][subject];
  const info = subjectInfo[subject];
  const doneCount = points.filter((p) => done[`${et}-${subject}-${p.title}`]).length;

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => goBack(router)} accessibilityRole="button">
            <Text style={styles.back}>← 戻る</Text>
          </TouchableOpacity>
          <HomeButton variant="light" />
        </View>
        <Text style={styles.title}>📌 模試の直前まとめ</Text>
        <Text style={styles.sub}>ここだけは必要！ 5分で見直せる要点（簡易版）</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.row}>
          {(['chugaku', 'koko'] as ExamType[]).map((t) => (
            <TouchableOpacity key={t} style={[styles.pill, et === t && styles.pillOn]} onPress={() => setPicked(t)} activeOpacity={0.85}>
              <Text style={[styles.pillText, et === t && styles.pillTextOn]}>{examTypeLabel[t]}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {SUBJECTS.map((s) => (
            <TouchableOpacity key={s} style={[styles.chip, subject === s && { backgroundColor: subjectInfo[s].color }]} onPress={() => setSubject(s)} activeOpacity={0.85}>
              <Text style={[styles.chipText, subject === s && { color: '#FFFFFF' }]}>
                {subjectInfo[s].emoji} {subjectDisplayName(subjectInfo[s].name, et)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={[styles.progress, { color: info.color }]}>
          {doneCount} / {points.length} 確認ずみ（タップで チェック）
        </Text>

        {points.map((p) => {
          const key = `${et}-${subject}-${p.title}`;
          const on = !!done[key];
          return (
            <TouchableOpacity key={key} style={[styles.card, on && styles.cardOn]} onPress={() => setDone((d) => ({ ...d, [key]: !d[key] }))} activeOpacity={0.85}>
              <Text style={[styles.cardTitle, { color: info.color }]}>{on ? '✅ ' : '⬜ '}{p.title}</Text>
              <Text style={styles.cardBody}>{p.body}</Text>
            </TouchableOpacity>
          );
        })}

        <TouchableOpacity
          style={[styles.go, { backgroundColor: info.color }]}
          onPress={() => router.push(`/quiz/${subject}?testmode=moshi&examType=${et}` as any)}
          activeOpacity={0.85}
        >
          <Text style={styles.goText}>📅 11月の模試を {subjectDisplayName(info.name, et)} から とく</Text>
        </TouchableOpacity>
        <Text style={styles.note}>くわしい理由は、各単元と、模試の解説（動く図解）で確かめられます。</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FAF5EE' },
  header: { backgroundColor: '#B5622E', paddingHorizontal: 16, paddingBottom: 14, paddingTop: 8 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  back: { color: '#FFFFFF', fontSize: 15, fontWeight: '700' },
  title: { color: '#FFFFFF', fontSize: 22, fontWeight: '800', marginTop: 6 },
  sub: { color: '#FDEBD3', fontSize: 13, marginTop: 2 },
  content: { padding: 16, paddingBottom: 40 },
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 10 },
  pill: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, backgroundColor: '#EFE4D6' },
  pillOn: { backgroundColor: '#B5622E' },
  pillText: { fontSize: 14, fontWeight: '700', color: '#6B5A4A' },
  pillTextOn: { color: '#FFFFFF' },
  chip: { paddingHorizontal: 12, paddingVertical: 7, borderRadius: 16, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#E7DCCD' },
  chipText: { fontSize: 13, fontWeight: '700', color: '#4A3F36' },
  progress: { fontSize: 13, fontWeight: '800', marginVertical: 6 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 14, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: '#EADFCF' },
  cardOn: { backgroundColor: '#F0FDF4', borderColor: '#86EFAC' },
  cardTitle: { fontSize: 16, fontWeight: '800', marginBottom: 4 },
  cardBody: { fontSize: 14, lineHeight: 22, color: '#3B332C' },
  go: { borderRadius: 14, paddingVertical: 14, alignItems: 'center', marginTop: 8 },
  goText: { color: '#FFFFFF', fontSize: 15, fontWeight: '800' },
  note: { fontSize: 12, color: '#7A6D60', textAlign: 'center', marginTop: 10 },
});
