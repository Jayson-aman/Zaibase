import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { GRADE_SHORT_LABELS, type GradeKey } from '../data/grades';
import { useExamType } from '../store/examType';

// 「やる気が出ない日」用の入口。1問だけ、やさしい問題を解く。
// 終わったらやめてもいい、と最初に伝える（強く言われて嫌になっている子に、ハードルを下げる）。

const GRADES = {
  chugaku: ['e4', 'e5', 'e6'] as GradeKey[],
  koko: ['j1', 'j2', 'j3'] as GradeKey[],
};

export default function EasyScreen() {
  const router = useRouter();
  const { examType } = useExamType();
  const type = examType ?? 'chugaku';
  const [picked, setPicked] = useState<GradeKey | null>(null);
  const [showParent, setShowParent] = useState(false);
  const grade = picked ?? (type === 'koko' ? 'j2' : 'e5');
  const course = type === 'koko' ? 'koko-general' : 'general';
  const sub = type === 'koko' ? '数学' : '算数';

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.body}>
        <TouchableOpacity onPress={() => router.back()} activeOpacity={0.7}>
          <Text style={styles.back}>← もどる</Text>
        </TouchableOpacity>
        <Text style={styles.title}>🌱 きょうは 1問だけで OK</Text>
        <Text style={styles.sub}>
          気分がのらない日もあります。やさしい{sub}を1問だけ。できたら、そこでおしまいにしても大丈夫です。
        </Text>

        <View style={styles.row}>
          {GRADES[type].map((g) => (
            <TouchableOpacity
              key={g}
              style={[styles.chip, g === grade && styles.chipOn]}
              onPress={() => setPicked(g)}
              activeOpacity={0.8}
            >
              <Text style={[styles.chipText, g === grade && styles.chipTextOn]}>{GRADE_SHORT_LABELS[g]}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={styles.main}
          onPress={() =>
            router.push(
              `/quiz/sansu?examType=${type}&course=${course}&difficulty=basic&grade=${grade}&limit=1` as any,
            )
          }
          activeOpacity={0.85}
        >
          <Text style={styles.mainText}>1問だけ やってみる</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sec}
          onPress={() => router.push(`/lesson/new20_${grade}_sansu_01` as any)}
          activeOpacity={0.85}
        >
          <Text style={styles.secText}>まず 教科書を少し読む</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setShowParent((v) => !v)} activeOpacity={0.7}>
          <Text style={styles.parentLink}>{showParent ? '▼' : '▶'} 保護者の方へ：声かけのコツ</Text>
        </TouchableOpacity>
        {showParent && (
          <View style={styles.parentBox}>
            <Text style={styles.parentText}>
              ・「勉強しなさい」ではなく「1問だけ一緒に見てみない？」と誘ってみてください。{'\n'}
              ・1問できたら、点数ではなく「やったね」とだけ伝えてください。{'\n'}
              ・そこで終わってもOKにすると、あす自分から開きやすくなります。{'\n'}
              ・まちがえても責めず、解説を一緒に読むだけで十分です。
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FAF7F2' },
  body: { padding: 20, gap: 14, maxWidth: 560, width: '100%', alignSelf: 'center' },
  back: { fontSize: 15, color: '#6B4226', fontWeight: '700' },
  title: { fontSize: 24, fontWeight: '800', color: '#1E8449' },
  sub: { fontSize: 15, color: '#3D5A47', lineHeight: 23 },
  row: { flexDirection: 'row', gap: 8 },
  chip: {
    flex: 1, paddingVertical: 10, borderRadius: 12, borderWidth: 1.5,
    borderColor: '#9AD3AE', backgroundColor: '#FFFFFF', alignItems: 'center',
  },
  chipOn: { backgroundColor: '#27AE60', borderColor: '#27AE60' },
  chipText: { fontSize: 16, fontWeight: '700', color: '#1E8449' },
  chipTextOn: { color: '#FFFFFF' },
  main: { backgroundColor: '#B5622E', borderRadius: 14, paddingVertical: 16, alignItems: 'center' },
  mainText: { color: '#FFFFFF', fontSize: 18, fontWeight: '800' },
  sec: {
    borderRadius: 14, paddingVertical: 14, alignItems: 'center',
    borderWidth: 1.5, borderColor: '#B5622E', backgroundColor: '#FFFFFF',
  },
  secText: { color: '#B5622E', fontSize: 16, fontWeight: '700' },
  parentLink: { fontSize: 14, color: '#6B4226', fontWeight: '700', marginTop: 6 },
  parentBox: { backgroundColor: '#FFF4E5', borderRadius: 12, padding: 14 },
  parentText: { fontSize: 14, color: '#5A4632', lineHeight: 24 },
});
