import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { reviewBlocksFor } from '../data/review-blocks';
import { rich } from './RichText';

type Q = {
  subject?: string;
  examType?: string;
  question?: string;
  answer?: string;
  explanation?: string;
  hint?: string;
};

/**
 * 問題の解説の下に出す「つまずいたらおさらい」。
 * 約分・通分・公約数・公倍数・割合・方程式など、その問題の前提になる計算の出し方を、折りたたんで出す。
 * 閉じたままなら1行だけなので、すでに分かっている子のじゃまにならない。
 */
export default function ReviewBlocks({ q }: { q: Q }) {
  const blocks = reviewBlocksFor(q, 2);
  const [open, setOpen] = useState<string | null>(null);
  if (blocks.length === 0) return null;
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>🔁 つまずいたら、おさらい</Text>
      {blocks.map((b) => {
        const isOpen = open === b.id;
        return (
          <View key={b.id} style={styles.item}>
            <TouchableOpacity
              onPress={() => setOpen(isOpen ? null : b.id)}
              accessibilityRole="button"
              accessibilityLabel={`${b.label}のおさらいを${isOpen ? '閉じる' : '開く'}`}
              activeOpacity={0.7}
              style={styles.head}
            >
              <Text style={styles.headText}>
                {isOpen ? '▼' : '▶'} {b.label}
              </Text>
            </TouchableOpacity>
            {isOpen && <Text style={styles.body}>{rich(b.section.body)}</Text>}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginTop: 10, borderRadius: 10, backgroundColor: '#F0F9FF', borderWidth: 1, borderColor: '#BAE6FD', padding: 10 },
  title: { fontSize: 13, fontWeight: '800', color: '#0369A1', marginBottom: 6 },
  item: { marginTop: 4 },
  head: { paddingVertical: 8, paddingHorizontal: 10, borderRadius: 8, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#E0F2FE' },
  headText: { fontSize: 14, fontWeight: '700', color: '#0C4A6E' },
  body: { fontSize: 14, lineHeight: 23, color: '#334155', marginTop: 8, paddingHorizontal: 4 },
});
