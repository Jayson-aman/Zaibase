import React, { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { reviewBlocksFor } from '../data/review-blocks';
import SlideBody from './SlideBody';

type Q = { subject?: string; examType?: string; question?: string; answer?: string; explanation?: string; hint?: string };

export default function SlideReview({ q, fallback }: { q: Q; fallback: string }) {
  const blocks = useMemo(() => reviewBlocksFor(q, 2), [q]);
  const [open, setOpen] = useState<string | null>(blocks[0]?.id ?? null);
  if (blocks.length > 0) {
    return (
      <View>
        <Text style={styles.bodyText}>この問題の前提になる計算の出し方です。わからなくなったら、ここへもどろう。</Text>
        {blocks.map((b) => {
          const isOpen = open === b.id;
          return (
            <View key={b.id} style={styles.reviewItem}>
              <TouchableOpacity
                onPress={() => setOpen(isOpen ? null : b.id)}
                activeOpacity={0.7}
                accessibilityRole="button"
                style={styles.reviewHead}
              >
                <Text style={styles.reviewHeadText}>
                  {isOpen ? '▼' : '▶'} {b.label}
                </Text>
              </TouchableOpacity>
              {isOpen && (
                <View style={{ marginTop: 8 }}>
                  <SlideBody text={b.section.body} color="#0369A1" />
                </View>
              )}
            </View>
          );
        })}
      </View>
    );
  }
  // 覚え方（memoryTip）とひっかけ注意（pitfall）は Pro/Max の機能なので、ここには出さない。
  const text = fallback
    ? `【考え方のおさらい】\n${fallback}\n\nわからなくなったら、「何を聞かれているか」の1枚目へもどろう。`
    : 'もう一度、問題文を読んで「何を聞かれているか」から確かめよう。';
  return <SlideBody text={text} color="#0369A1" />;
}


const styles = StyleSheet.create({
  bodyText: { fontSize: 15.5, lineHeight: 26, color: '#2B2420', marginBottom: 2 },
  reviewItem: { marginTop: 8 },
  reviewHead: { paddingVertical: 10, paddingHorizontal: 12, borderRadius: 10, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#BAE6FD' },
  reviewHeadText: { fontSize: 15, fontWeight: '800', color: '#0C4A6E' },
});
