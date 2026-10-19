import React, { useState } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { teikiModule } from '../../data/teiki-lazy';
import FigureView from '../../components/FigureView';
import { rich } from '../../components/RichText';
import HomeButton from '../../components/HomeButton';

export default function TeikiUnitScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const mod = teikiModule.use();
  const [shown, setShown] = useState<Record<number, boolean>>({});

  const unit = mod ? mod.TEIKI_UNITS.find((u) => u.id === id) : null;

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} activeOpacity={0.7}>
          <Text style={styles.back}>‹ 戻る</Text>
        </TouchableOpacity>
        <HomeButton variant="light" />
      </View>
      {!mod && <ActivityIndicator style={{ marginTop: 40 }} color="#B5622E" />}
      {mod && !unit && <Text style={styles.empty}>この単元は見つかりませんでした。</Text>}
      {unit && (
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.chapter}>{unit.chapter}</Text>
          <Text style={styles.title}>{unit.title}</Text>
          <View style={styles.gistBox}>
            <Text style={styles.gistLabel}>ひとことで言うと</Text>
            <Text style={styles.gist}>{rich(unit.gist)}</Text>
          </View>

          <Text style={styles.h2}>🎞 動く図解（{unit.figure.steps?.length ?? 0}枚）</Text>
          <FigureView figure={unit.figure} animated manual />

          {unit.sections.map((s, i) => (
            <View key={i} style={styles.section}>
              <Text style={styles.h2}>{s.heading}</Text>
              <Text style={styles.body}>{rich(s.body)}</Text>
            </View>
          ))}

          <View style={styles.pointBox}>
            <Text style={styles.pointTitle}>★ テストに出るポイント</Text>
            {unit.testPoints.map((p, i) => (
              <Text key={i} style={styles.point}>・{rich(p)}</Text>
            ))}
          </View>

          <Text style={styles.h2}>✍ 確認の一問一答</Text>
          {unit.checks.map((c, i) => (
            <View key={i} style={styles.check}>
              <Text style={styles.q}>Q{i + 1}. {c.q}</Text>
              {shown[i] ? (
                <View style={styles.ansBox}>
                  <Text style={styles.ans}>答え：{c.a}</Text>
                  <Text style={styles.why}>{rich(c.why)}</Text>
                </View>
              ) : (
                <TouchableOpacity style={styles.showBtn} onPress={() => setShown((p) => ({ ...p, [i]: true }))} activeOpacity={0.85}>
                  <Text style={styles.showText}>答えを見る</Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#FAF7F2' },
  header: { backgroundColor: '#6B4226', paddingHorizontal: 20, paddingVertical: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  back: { color: 'rgba(255,255,255,0.9)', fontSize: 14, fontWeight: '700' },
  empty: { marginTop: 40, textAlign: 'center', color: '#8A7A68' },
  content: { padding: 16, paddingBottom: 48 },
  chapter: { fontSize: 12, fontWeight: '800', color: '#B5622E' },
  title: { fontSize: 22, fontWeight: '900', color: '#4A3320', marginTop: 2 },
  gistBox: { backgroundColor: '#FFF1E6', borderRadius: 12, padding: 14, marginTop: 12 },
  gistLabel: { fontSize: 11, fontWeight: '800', color: '#B5622E' },
  gist: { fontSize: 15, lineHeight: 24, color: '#4A3320', marginTop: 4 },
  h2: { fontSize: 16, fontWeight: '800', color: '#4A3320', marginTop: 22, marginBottom: 8 },
  section: {},
  body: { fontSize: 14, lineHeight: 24, color: '#3E3126' },
  pointBox: { backgroundColor: '#FFFBE6', borderRadius: 12, borderWidth: 1.5, borderColor: '#F2D48A', padding: 14, marginTop: 22 },
  pointTitle: { fontSize: 15, fontWeight: '800', color: '#7A5A12', marginBottom: 6 },
  point: { fontSize: 14, lineHeight: 23, color: '#3E3126', marginTop: 3 },
  check: { backgroundColor: '#fff', borderRadius: 12, borderWidth: 1.5, borderColor: '#E8DCCB', padding: 14, marginBottom: 10 },
  q: { fontSize: 14, lineHeight: 22, fontWeight: '700', color: '#4A3320' },
  showBtn: { marginTop: 10, alignSelf: 'flex-start', backgroundColor: '#B5622E', borderRadius: 20, paddingHorizontal: 16, paddingVertical: 8 },
  showText: { color: '#fff', fontWeight: '800', fontSize: 13 },
  ansBox: { marginTop: 10, backgroundColor: '#F1F8F1', borderRadius: 10, padding: 12 },
  ans: { fontSize: 14, fontWeight: '800', color: '#1E7A3C' },
  why: { fontSize: 13, lineHeight: 21, color: '#3E3126', marginTop: 6 },
});
