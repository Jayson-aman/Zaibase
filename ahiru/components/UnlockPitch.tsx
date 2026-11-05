// 買い切り（単元¥150・公式¥200・まとめ買い）の「中身」と「しくみ」を、買う前にわかりやすく見せる。
// 「何が読めるのか」「月額ではなく1回だけ」が伝わらないと、金額だけが目に入って まよってしまう。
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Kind = 'unit' | 'formula';

const ITEMS: Record<Kind, { title: string; lines: string[] }> = {
  unit: {
    title: '🔓 この単元を ひらくと、ここまで 読めます',
    lines: [
      '💡 なぜそうなるのか（理由まで くわしく）',
      '🎬 動く図解を ぜんぶ（スライドで 1つずつ）',
      '🔁 確かめ（けんざん）の しかた',
      '⚠️ よくある まちがい・ひっかけ',
      '🎁 豆知識や おさらい（のっている 単元だけ）',
    ],
  },
  formula: {
    title: '🔓 この公式を ひらくと、ここまで 読めます',
    lines: [
      '💡 なぜその式になるのか（理由まで くわしく）',
      '🎬 動く図解（スライドで 1つずつ）',
      '✍️ その場で とける 一問一答と 解説',
      '⚠️ よくある まちがい',
    ],
  },
};

export default function UnlockPitch({ kind, priceLabel }: { kind: Kind; priceLabel: string }) {
  const it = ITEMS[kind];
  return (
    <View style={styles.wrap}>
      <Text style={styles.title} maxFontSizeMultiplier={1.25}>{it.title}</Text>
      {it.lines.map((l) => (
        <Text key={l} style={styles.line} maxFontSizeMultiplier={1.25}>{l}</Text>
      ))}
      <View style={styles.once}>
        <Text style={styles.onceText} maxFontSizeMultiplier={1.25}>
          月額では ありません。{priceLabel} を 1回 はらうだけ。くり返しの 課金や 自動更新は ありません。いちど ひらくと、アカウントに ずっと のこります。
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { alignSelf: 'stretch', marginTop: 4 },
  title: { fontSize: 15, fontWeight: '800', color: '#8B5A38', textAlign: 'center', marginBottom: 8 },
  line: { fontSize: 14, lineHeight: 22, color: '#5A4636', paddingLeft: 4 },
  once: { marginTop: 10, backgroundColor: '#FFF3DE', borderRadius: 10, paddingVertical: 8, paddingHorizontal: 12 },
  onceText: { fontSize: 13, lineHeight: 20, color: '#7A4A1E', fontWeight: '700', textAlign: 'center' },
});
