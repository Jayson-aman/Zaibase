import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Modal, PanResponder, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

// ───────────────────────────────────────────────────────────────
// 手書きメモ欄（途中式や図を書くための、白い紙）。
//
// ・iPad では Apple Pencil、iPhone・パソコン・Android では指（マウス）で書く。
//   画面にふれた線をそのまま書くだけなので、どの端末でも同じ画面が開く。
// ・書いた字を読み取って採点することはしない。採点は「打って答える欄」で行う。
// ・画面が小さい iPhone でも書きやすいよう、ボタンで画面いっぱいに開く。
// ・おなじ問題を開きなおしたときは、書いた線が残っている（この画面を開いているあいだだけ）。
// ───────────────────────────────────────────────────────────────

type Pt = { x: number; y: number };
type Stroke = { color: string; points: Pt[] };

const COLORS: { color: string; label: string }[] = [
  { color: '#2B2420', label: 'くろ' },
  { color: '#E11D48', label: 'あか' },
  { color: '#0284C7', label: 'あお' },
];

// 問題ごとの書きこみ。多くなりすぎないよう、古いものから捨てる。
const MEMORY = new Map<string, Stroke[]>();
const MEMORY_LIMIT = 30;
function remember(key: string, strokes: Stroke[]) {
  MEMORY.delete(key);
  if (strokes.length > 0) MEMORY.set(key, strokes);
  while (MEMORY.size > MEMORY_LIMIT) {
    const first = MEMORY.keys().next().value;
    if (first === undefined) break;
    MEMORY.delete(first);
  }
}

function toPath(points: Pt[]): string {
  if (points.length === 0) return '';
  if (points.length === 1) return `M ${points[0].x} ${points[0].y} l 0.1 0.1`;
  let d = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;
  for (let i = 1; i < points.length; i++) d += ` L ${points[i].x.toFixed(1)} ${points[i].y.toFixed(1)}`;
  return d;
}

type Props = {
  visible: boolean;
  onClose: () => void;
  /** 問題の id など。おなじ値のあいだ、書いた線を覚えておく */
  memoKey: string;
  /** 問題文（上に小さく出して、見ながら書けるようにする） */
  questionText?: string;
};

export default function SketchPad({ visible, onClose, memoKey, questionText }: Props) {
  const [strokes, setStrokes] = useState<Stroke[]>(() => MEMORY.get(memoKey) ?? []);
  const [colorIdx, setColorIdx] = useState(0);
  const [loadedKey, setLoadedKey] = useState(memoKey);
  const [size, setSize] = useState({ w: 320, h: 400 });
  const strokesRef = useRef<Stroke[]>(strokes);
  const colorRef = useRef(COLORS[0].color);

  // 問題がかわったら、その問題の書きこみに切りかえる
  if (loadedKey !== memoKey) {
    const next = MEMORY.get(memoKey) ?? [];
    strokesRef.current = next;
    setLoadedKey(memoKey);
    setStrokes(next);
  }

  const commit = useCallback((next: Stroke[]) => {
    strokesRef.current = next;
    setStrokes(next);
    remember(memoKey, next);
  }, [memoKey]);

  const pan = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderTerminationRequest: () => false,
        onPanResponderGrant: (e) => {
          const { locationX, locationY } = e.nativeEvent;
          const s: Stroke = { color: colorRef.current, points: [{ x: locationX, y: locationY }] };
          strokesRef.current = [...strokesRef.current, s];
          setStrokes(strokesRef.current);
        },
        onPanResponderMove: (e) => {
          const { locationX, locationY } = e.nativeEvent;
          const cur = strokesRef.current;
          if (cur.length === 0) return;
          const last = cur[cur.length - 1];
          const prev = last.points[last.points.length - 1];
          // 点が近すぎる とき は 増やさない（線を軽くする）
          if (prev && Math.abs(prev.x - locationX) + Math.abs(prev.y - locationY) < 1.5) return;
          const updated: Stroke = { color: last.color, points: [...last.points, { x: locationX, y: locationY }] };
          strokesRef.current = [...cur.slice(0, -1), updated];
          setStrokes(strokesRef.current);
        },
        onPanResponderRelease: () => remember(memoKey, strokesRef.current),
        onPanResponderTerminate: () => remember(memoKey, strokesRef.current),
      }),
    [memoKey],
  );

  const undo = () => commit(strokesRef.current.slice(0, -1));
  const clearAll = () => commit([]);
  const pickColor = (i: number) => {
    setColorIdx(i);
    colorRef.current = COLORS[i].color;
  };

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose} presentationStyle="fullScreen">
      <SafeAreaView style={styles.safe}>
        <View style={styles.header}>
          <Text style={styles.title}>✏️ メモ</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeBtn} activeOpacity={0.8} accessibilityRole="button" accessibilityLabel="メモをとじる">
            <Text style={styles.closeText}>とじる</Text>
          </TouchableOpacity>
        </View>
        {questionText ? (
          <Text style={styles.question} numberOfLines={3}>
            {questionText}
          </Text>
        ) : null}
        <View style={styles.tools}>
          {COLORS.map((c, i) => (
            <TouchableOpacity
              key={c.color}
              onPress={() => pickColor(i)}
              activeOpacity={0.8}
              style={[styles.colorBtn, { backgroundColor: c.color }, i === colorIdx && styles.colorBtnOn]}
              accessibilityRole="button"
              accessibilityLabel={`${c.label}で書く`}
            />
          ))}
          <View style={{ flex: 1 }} />
          <TouchableOpacity onPress={undo} style={styles.toolBtn} activeOpacity={0.8} accessibilityRole="button">
            <Text style={styles.toolText}>↩ 1つ もどす</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={clearAll} style={styles.toolBtn} activeOpacity={0.8} accessibilityRole="button">
            <Text style={styles.toolText}>ぜんぶ けす</Text>
          </TouchableOpacity>
        </View>
        <View
          style={styles.canvas}
          onLayout={(e) => setSize({ w: Math.round(e.nativeEvent.layout.width), h: Math.round(e.nativeEvent.layout.height) })}
          {...pan.panHandlers}
        >
          <Svg width={size.w} height={size.h} pointerEvents="none" style={styles.svg}>
            {strokes.map((s, i) => (
              <Path key={i} d={toPath(s.points)} stroke={s.color} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" fill="none" />
            ))}
          </Svg>
          {strokes.length === 0 && (
            <Text style={styles.hint} pointerEvents="none">
              {Platform.OS === 'ios' ? 'ここに ゆび（iPadは ペンでも）で かいてね' : 'ここに ゆびで かいてね'}
            </Text>
          )}
        </View>
        <Text style={styles.note}>書いた ものは 採点されません。答えは、前の画面の「答えを書く欄」に 書いてね。</Text>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FAF7F2' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingTop: 12, paddingBottom: 8 },
  title: { fontSize: 20, fontWeight: '800', color: '#2B2420' },
  closeBtn: { backgroundColor: '#B5622E', paddingHorizontal: 18, paddingVertical: 10, borderRadius: 12 },
  closeText: { color: '#fff', fontWeight: '800', fontSize: 15 },
  question: { marginHorizontal: 16, marginBottom: 8, fontSize: 14, color: '#5B5046', lineHeight: 20 },
  tools: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 16, paddingBottom: 10 },
  colorBtn: { width: 32, height: 32, borderRadius: 16, borderWidth: 3, borderColor: 'transparent' },
  colorBtnOn: { borderColor: '#F0B866' },
  toolBtn: { backgroundColor: '#fff', borderWidth: 1.5, borderColor: '#E8DCCB', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 10 },
  toolText: { fontSize: 13, fontWeight: '700', color: '#6B4226' },
  canvas: { flex: 1, marginHorizontal: 12, backgroundColor: '#fff', borderRadius: 14, borderWidth: 1.5, borderColor: '#E8DCCB', overflow: 'hidden' },
  svg: { position: 'absolute', left: 0, top: 0 },
  hint: { position: 'absolute', left: 0, right: 0, top: '45%', textAlign: 'center', color: '#C9BFB0', fontSize: 16, fontWeight: '700' },
  note: { textAlign: 'center', fontSize: 12, color: '#8A7F72', paddingVertical: 10, paddingHorizontal: 16 },
});
