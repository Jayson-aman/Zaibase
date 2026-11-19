import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useExamDate } from '../store/examDate';
import { countdownView, monthDayLabel, nextOccurrence } from '../utils/examCountdown';
import type { ExamType } from '../store/examType';

// ホームに出す「入試まであと◯日」。
//
// 入試の日は志望校ごとにちがうので、月と日を自分で入れてもらう（年は、今日以降でいちばん近い年）。
// 中学受験には、東京・神奈川の解禁日（2月1日）をワンタップで選べるようにしてある。
// 日付が決まっていない人には、小さな入口だけを出す（学習の邪魔にならないように）。

const PRESETS: Record<ExamType, { label: string; month: number; day: number }[]> = {
  chugaku: [{ label: '2月1日（東京・神奈川の解禁日）', month: 2, day: 1 }],
  koko: [],
};
const TITLE: Record<ExamType, string> = { chugaku: '中学受験', koko: '高校受験' };

export default function ExamCountdownCard({ examType }: { examType: ExamType }) {
  const { date, loaded, set } = useExamDate(examType);
  const [editing, setEditing] = useState(false);
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [error, setError] = useState('');

  if (!loaded) return null;

  const save = async (m: number, d: number) => {
    const key = nextOccurrence(m, d);
    if (key == null) {
      setError('その日付は選べません。月と日を、もう一度たしかめてください。');
      return;
    }
    await set(key);
    setEditing(false);
    setError('');
    setMonth('');
    setDay('');
  };

  if (editing || date == null) {
    if (!editing) {
      return (
        <TouchableOpacity style={styles.entry} onPress={() => setEditing(true)} activeOpacity={0.8}>
          <Text style={styles.entryText}>🎯 {TITLE[examType]}の日をえらぶ（あと何日かが出ます）</Text>
        </TouchableOpacity>
      );
    }
    return (
      <View style={styles.card}>
        <Text style={styles.title}>🎯 {TITLE[examType]}の日</Text>
        <Text style={styles.sub}>志望校の日程を入れてください。入試の日が決まっていなければ、あとで変えられます。</Text>
        {PRESETS[examType].map((p) => (
          <TouchableOpacity key={p.label} style={styles.preset} onPress={() => save(p.month, p.day)} activeOpacity={0.8}>
            <Text style={styles.presetText}>{p.label}</Text>
          </TouchableOpacity>
        ))}
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            value={month}
            onChangeText={(t) => setMonth(t.replace(/[^0-9]/g, '').slice(0, 2))}
            keyboardType="number-pad"
            placeholder="月"
            maxLength={2}
            accessibilityLabel="入試の月"
          />
          <Text style={styles.unit}>月</Text>
          <TextInput
            style={styles.input}
            value={day}
            onChangeText={(t) => setDay(t.replace(/[^0-9]/g, '').slice(0, 2))}
            keyboardType="number-pad"
            placeholder="日"
            maxLength={2}
            accessibilityLabel="入試の日"
          />
          <Text style={styles.unit}>日</Text>
          <TouchableOpacity
            style={[styles.saveBtn, !(month && day) && styles.saveBtnOff]}
            disabled={!(month && day)}
            onPress={() => save(Number(month), Number(day))}
            activeOpacity={0.85}
          >
            <Text style={styles.saveText}>決める</Text>
          </TouchableOpacity>
        </View>
        {error !== '' && <Text style={styles.error}>{error}</Text>}
        <TouchableOpacity
          onPress={() => {
            setEditing(false);
            setError('');
          }}
          activeOpacity={0.7}
        >
          <Text style={styles.cancel}>やめる</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const view = countdownView(date);
  if (view.kind === 'past') {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>🌸 {TITLE[examType]}の日（{monthDayLabel(date)}）はすぎました</Text>
        <TouchableOpacity style={styles.preset} onPress={() => setEditing(true)} activeOpacity={0.8}>
          <Text style={styles.presetText}>つぎの日をえらぶ</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const urgent = view.kind === 'today' || view.days <= 7;
  return (
    <View style={[styles.card, urgent && styles.cardUrgent]}>
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>🎯 {TITLE[examType]}（{monthDayLabel(date)}）</Text>
          {view.kind === 'today' ? (
            <Text style={styles.big}>今日が入試の日です。がんばって！</Text>
          ) : (
            <Text style={styles.big}>
              あと <Text style={[styles.num, urgent && styles.numUrgent]}>{view.days}</Text> 日
              {view.days >= 14 ? <Text style={styles.weeks}>（約{view.weeks}週間）</Text> : null}
            </Text>
          )}
        </View>
        <TouchableOpacity onPress={() => setEditing(true)} activeOpacity={0.7} accessibilityLabel="入試の日を変える">
          <Text style={styles.change}>変える</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#EEF4FF',
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#9DB8F0',
    padding: 14,
    marginBottom: 14,
  },
  cardUrgent: { backgroundColor: '#FFF1EE', borderColor: '#E8907F' },
  entry: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#C8D6F2',
    backgroundColor: '#F7FAFF',
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 14,
  },
  entryText: { fontSize: 13, fontWeight: '700', color: '#3B5BA5' },
  row: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  title: { fontSize: 14, fontWeight: '800', color: '#2F4A86' },
  sub: { fontSize: 12, color: '#51638F', marginTop: 4, lineHeight: 18 },
  big: { fontSize: 18, fontWeight: '800', color: '#2F4A86', marginTop: 4 },
  num: { fontSize: 30, fontWeight: '900', color: '#2F4A86' },
  numUrgent: { color: '#C0392B' },
  weeks: { fontSize: 12, fontWeight: '600', color: '#51638F' },
  change: { fontSize: 13, fontWeight: '700', color: '#3B5BA5', textDecorationLine: 'underline' },
  preset: {
    marginTop: 10,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#9DB8F0',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    alignItems: 'center',
  },
  presetText: { fontSize: 14, fontWeight: '700', color: '#2F4A86' },
  inputRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 12 },
  input: {
    width: 54,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#9DB8F0',
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    color: '#2F4A86',
  },
  unit: { fontSize: 14, fontWeight: '700', color: '#2F4A86' },
  saveBtn: { marginLeft: 'auto', backgroundColor: '#B5622E', borderRadius: 12, paddingVertical: 10, paddingHorizontal: 18 },
  saveBtnOff: { backgroundColor: '#D9C3B3' },
  saveText: { color: '#FFFFFF', fontSize: 15, fontWeight: '800' },
  error: { marginTop: 8, fontSize: 12, color: '#C0392B', fontWeight: '700' },
  cancel: { marginTop: 10, textAlign: 'center', fontSize: 13, fontWeight: '700', color: '#51638F', textDecorationLine: 'underline' },
});
