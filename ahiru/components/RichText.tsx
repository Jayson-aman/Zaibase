import React from 'react';
import { Text, type TextStyle } from 'react-native';

/**
 * 画面に出す本文の「大切なところ」を太字の赤で強調する。
 *
 * 書き方：本文の中で **こう囲んだ部分** が強調される（マークダウンの太字と同じ）。
 * ユーザーから「大切なところ、テストによく出るところは太字か赤字にしてほしい」と
 * 指示されたので（2026/9/16）、すべての解説・単元本文・要点・ひっかけ欄がここを通る。
 *
 * ⚠️ それまでは ** をそのまま画面に出してしまう失敗を4回くり返し、監査で ** を禁止していた。
 *    いまは逆に「使ってよい」ので、監査は「** の数が奇数（閉じ忘れ）」だけを見張る。
 * ⚠️ 図解の steps はこの部品を通らない（FigureView が描く）ので、そちらでは ** を使わない。
 */
const EMPHASIS: TextStyle = { fontWeight: '900', color: '#C0392B' };

const SPLIT = /(\*\*[^*]+?\*\*)/g;

/** 文字列を、強調部分を <Text> で包んだノードの配列にする。既存の <Text> の中でそのまま使える。 */
export function rich(text: string | null | undefined): React.ReactNode {
  const s = text ?? '';
  if (!s.includes('**')) return s;
  const parts = s.split(SPLIT);
  return parts.map((p, i) => {
    if (p.startsWith('**') && p.endsWith('**') && p.length >= 4) {
      return (
        <Text key={i} style={EMPHASIS}>
          {p.slice(2, -2)}
        </Text>
      );
    }
    return p;
  });
}

type Props = React.ComponentProps<typeof Text> & { children?: string | null };

/** <Text> の代わりに使う。children は文字列だけ。 */
export default function RichText({ children, ...rest }: Props) {
  return <Text {...rest}>{rich(children)}</Text>;
}
