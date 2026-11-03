import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Svg, { G, Line, Path, Text as SvgText } from 'react-native-svg';
import { kanjiStrokesModule } from '../data/kanji-lazy';

// ───────────────────────────────────────────────────────────────
// 漢字の書き順を、1画ずつ見せる部品。
//
// ・各画の形は、書き順データ（data/kanji-strokes.ts）の線をそのまま塗って見せる。
//   ライブラリは使わないので、Web でも iOS・Android でも同じように動く。
// ・いま書いた画は赤、書きおえた画はこい色、これから書く画はうすい色。
// ・画の書きはじめの位置に、1・2・3…の番号を出す。
// ・「じどう」を押すと、1画ずつ すすむ。
// ───────────────────────────────────────────────────────────────

const INK = '#2B2420';
const RED = '#E11D48';
const GHOST = '#E9E2D6';

export default function StrokeOrder({ char, size = 280 }: { char: string; size?: number }) {
  const mod = kanjiStrokesModule.use();
  const data = mod?.KANJI_STROKES[char];
  const n = data?.s.length ?? 0;
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setStep(0);
    setPlaying(false);
  }, [char]);

  useEffect(() => {
    if (!playing) return;
    if (step >= n) {
      setPlaying(false);
      return;
    }
    const t = setTimeout(() => setStep((s) => s + 1), step === 0 ? 300 : 900);
    return () => clearTimeout(t);
  }, [playing, step, n]);

  if (!data) {
    return (
      <View style={[styles.box, { width: size, height: size }]}>
        <Text style={styles.loading}>{mod ? 'この漢字の書き順は、まだ ありません' : '読みこみ中…'}</Text>
      </View>
    );
  }

  const next = () => setStep((s) => Math.min(n, s + 1));
  const prev = () => {
    setPlaying(false);
    setStep((s) => Math.max(0, s - 1));
  };
  const restart = () => {
    setStep(0);
    setPlaying(true);
  };

  return (
    <View style={{ alignItems: 'center' }}>
      <View style={[styles.box, { width: size, height: size }]}>
        <Svg width={size} height={size} viewBox="0 0 1024 1024">
          <Line x1={512} y1={40} x2={512} y2={984} stroke="#D9CDBA" strokeWidth={4} strokeDasharray="20 16" />
          <Line x1={40} y1={512} x2={984} y2={512} stroke="#D9CDBA" strokeWidth={4} strokeDasharray="20 16" />
          <G transform="scale(1,-1) translate(0,-900)">
            {data.s.map((d, i) => (
              <Path key={i} d={d} fill={i < step - 1 ? INK : i === step - 1 ? RED : GHOST} />
            ))}
          </G>
          {data.m.slice(0, step).map(([x, y], i) => (
            <SvgText key={i} x={x} y={900 - y} fontSize={84} fontWeight="bold" fill={i === step - 1 ? RED : '#7C6F62'} textAnchor="middle">
              {String(i + 1)}
            </SvgText>
          ))}
        </Svg>
      </View>
      <Text style={styles.count}>
        {step === 0 ? `ぜんぶで ${n}かく` : `${step}かくめ / ぜんぶで ${n}かく`}
      </Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.btn} onPress={prev} activeOpacity={0.8} accessibilityRole="button" accessibilityLabel="1かく もどる">
          <Text style={styles.btnText}>◀ もどる</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, styles.btnMain]} onPress={next} activeOpacity={0.8} accessibilityRole="button" accessibilityLabel="つぎの かく">
          <Text style={[styles.btnText, styles.btnMainText]}>つぎの かく ▶</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={restart} activeOpacity={0.8} accessibilityRole="button" accessibilityLabel="じどうで みる">
          <Text style={styles.btnText}>▶ じどう</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { backgroundColor: '#fff', borderRadius: 14, borderWidth: 2, borderColor: '#E8DCCB', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' },
  loading: { color: '#8A7F72', fontSize: 14, textAlign: 'center', paddingHorizontal: 16 },
  count: { marginTop: 10, fontSize: 16, fontWeight: '800', color: '#2B2420' },
  row: { flexDirection: 'row', gap: 8, marginTop: 10, flexWrap: 'wrap', justifyContent: 'center' },
  btn: { backgroundColor: '#fff', borderWidth: 1.5, borderColor: '#E8DCCB', paddingHorizontal: 14, paddingVertical: 10, borderRadius: 12 },
  btnText: { fontSize: 14, fontWeight: '800', color: '#6B4226' },
  btnMain: { backgroundColor: '#B5622E', borderColor: '#B5622E' },
  btnMainText: { color: '#fff' },
});
