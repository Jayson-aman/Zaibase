import React, { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { buildSlides, type Slide, type SlideKind } from '../utils/explanationSlides';
import SlideBody from './SlideBody';
import SlideReview from './SlideReview';

/**
 * 問題の解説を、7〜8枚のスライドショーで見せる。
 * 何を聞かれているか → なぜそうなるか → ステップ → 答え → 確かめ → よくあるまちがい → おさらい の順。
 * 組み立ては utils/explanationSlides.ts。最後の「おさらい」は、その問題の前提になる計算の出し方
 * （data/review-blocks.ts）を出す。
 */

const KIND: Record<SlideKind, { icon: string; color: string; bg: string; label: string }> = {
  question: { icon: '💬', color: '#1D4ED8', bg: '#EFF6FF', label: '何を聞かれている？' },
  why: { icon: '💡', color: '#B45309', bg: '#FFFBEB', label: 'なんでそうなるの？' },
  step: { icon: '🪜', color: '#0F766E', bg: '#F0FDFA', label: '解き方' },
  answer: { icon: '✅', color: '#15803D', bg: '#F0FDF4', label: '答え' },
  check: { icon: '🔁', color: '#6D28D9', bg: '#F5F3FF', label: '確かめ' },
  mistake: { icon: '⚠️', color: '#B91C1C', bg: '#FEF2F2', label: 'よくあるまちがい' },
  key: { icon: '⭐', color: '#C2410C', bg: '#FFF7ED', label: 'ここが大事' },
  review: { icon: '📖', color: '#0369A1', bg: '#F0F9FF', label: 'おさらい' },
  other: { icon: '📌', color: '#475569', bg: '#F8FAFC', label: 'ポイント' },
};

type Q = {
  subject?: string;
  examType?: string;
  question?: string;
  answer?: string;
  explanation?: string;
  hint?: string;
  memoryTip?: string;
  pitfall?: string;
};

export default function ExplanationSlides({ q }: { q: Q }) {
  const slides = useMemo<Slide[]>(() => buildSlides(q), [q.explanation, q.hint]);
  const [idx, setIdx] = useState(0);
  if (slides.length === 0) return null;
  const i = Math.min(idx, slides.length - 1);
  const s = slides[i];
  const k = KIND[s.kind];
  const why = slides.find((x) => x.kind === 'why');
  const fallback = why ? (why.body.split(/\n\n/)[0] ?? '').slice(0, 160) : '';
  const last = i === slides.length - 1;
  const title = s.kind === 'review' ? 'つまずいたら、ここ' : !s.title ? k.label : s.title;
  // 見出しとラベルが同じ意味のときは、ラベルを出さない（二重に見えるため）
  const showLabel = s.kind === 'review' || !s.title || s.title.slice(0, 4) !== k.label.slice(0, 4);

  return (
    <View style={styles.wrap}>
      <View style={styles.bars}>
        {slides.map((x, n) => (
          <TouchableOpacity
            key={n}
            onPress={() => setIdx(n)}
            accessibilityRole="button"
            accessibilityLabel={`${n + 1}枚目`}
            style={styles.barTouch}
          >
            <View style={[styles.bar, n <= i && { backgroundColor: KIND[x.kind].color }]} />
          </TouchableOpacity>
        ))}
      </View>
      <View style={[styles.card, { backgroundColor: k.bg, borderColor: k.color + '66' }]}>
        <View style={styles.head}>
          <Text style={styles.icon}>{k.icon}</Text>
          <View style={{ flex: 1 }}>
            {showLabel && <Text style={[styles.kindLabel, { color: k.color }]}>{k.label}</Text>}
            <Text style={styles.title}>{title}</Text>
          </View>
          <Text style={styles.count}>
            {i + 1}/{slides.length}
          </Text>
        </View>
        {s.kind === 'review' ? <SlideReview q={q} fallback={fallback} /> : <SlideBody text={s.body} color={k.color} />}
      </View>
      <View style={styles.nav}>
        <TouchableOpacity
          onPress={() => setIdx(Math.max(0, i - 1))}
          disabled={i === 0}
          style={[styles.btn, styles.btnBack, i === 0 && { opacity: 0.35 }]}
          accessibilityRole="button"
        >
          <Text style={styles.btnBackText}>◀ もどる</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIdx(last ? 0 : i + 1)}
          style={[styles.btn, { backgroundColor: k.color }]}
          accessibilityRole="button"
        >
          <Text style={styles.btnNextText}>{last ? '↺ はじめから' : 'つぎへ ▶'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginTop: 4 },
  bars: { flexDirection: 'row', gap: 4, marginBottom: 8 },
  barTouch: { flex: 1, paddingVertical: 6 },
  bar: { height: 5, borderRadius: 3, backgroundColor: '#E5E0D8' },
  card: { borderRadius: 14, borderWidth: 1.5, padding: 14 },
  head: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 10 },
  icon: { fontSize: 28 },
  kindLabel: { fontSize: 12, fontWeight: '800' },
  title: { fontSize: 17, fontWeight: '900', color: '#2B2420', marginTop: 1 },
  count: { fontSize: 13, fontWeight: '800', color: '#8A7F72' },
  nav: { flexDirection: 'row', gap: 10, marginTop: 10 },
  btn: { flex: 1, paddingVertical: 13, borderRadius: 12, alignItems: 'center' },
  btnBack: { backgroundColor: '#EFE9E0' },
  btnBackText: { fontSize: 15, fontWeight: '800', color: '#5B5046' },
  btnNextText: { fontSize: 15, fontWeight: '900', color: '#FFFFFF' },
});
