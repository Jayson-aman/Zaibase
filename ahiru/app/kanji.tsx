import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import StrokeOrder from '../components/StrokeOrder';
import { GRADE1_KANJI } from '../data/kanji-lazy';

// 小1の漢字80字の「書き順」。1画ずつ見て、形と順番をたしかめる（試作）。
export default function KanjiScreen() {
  const router = useRouter();
  const [picked, setPicked] = useState('右');

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.body}>
        <TouchableOpacity onPress={() => router.back()} activeOpacity={0.7}>
          <Text style={styles.back}>← もどる</Text>
        </TouchableOpacity>
        <Text style={styles.title}>✏️ かん字の かきじゅん（小1）</Text>
        <Text style={styles.sub}>かん字を えらぶと、1かくずつ かきじゅんが 見られます。</Text>
        <StrokeOrder char={picked} />
        <Text style={styles.label}>かん字を えらぼう（80じ）</Text>
        <View style={styles.grid}>
          {GRADE1_KANJI.map((c) => (
            <TouchableOpacity key={c} style={[styles.cell, c === picked && styles.cellOn]} onPress={() => setPicked(c)} activeOpacity={0.8} accessibilityRole="button" accessibilityLabel={`${c}の かきじゅん`}>
              <Text style={[styles.cellText, c === picked && styles.cellTextOn]}>{c}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.note}>
          かきじゅんは、日本の 学校の ひつじゅんに そった データと くらべて たしかめて あります。まよったら、先生や ドリルの かきじゅんを 見てね。
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FAF7F2' },
  body: { padding: 16, gap: 12, alignItems: 'center' },
  back: { alignSelf: 'flex-start', fontSize: 15, fontWeight: '700', color: '#6B4226' },
  title: { fontSize: 22, fontWeight: '800', color: '#2B2420' },
  sub: { fontSize: 14, color: '#5B5046', textAlign: 'center' },
  label: { alignSelf: 'flex-start', marginTop: 12, fontSize: 14, fontWeight: '800', color: '#5B5046' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, justifyContent: 'center' },
  cell: { width: 44, height: 44, borderRadius: 10, backgroundColor: '#fff', borderWidth: 1.5, borderColor: '#E8DCCB', alignItems: 'center', justifyContent: 'center' },
  cellOn: { backgroundColor: '#B5622E', borderColor: '#B5622E' },
  cellText: { fontSize: 22, fontWeight: '700', color: '#2B2420' },
  cellTextOn: { color: '#fff' },
  note: { marginTop: 8, fontSize: 12, color: '#8A7F72', textAlign: 'center', lineHeight: 18 },
});
