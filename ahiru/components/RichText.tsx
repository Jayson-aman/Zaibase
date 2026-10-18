import React from 'react';
import { Platform, StyleSheet, Text, View, type TextStyle } from 'react-native';

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

/**
 * 分数を縦に表示する（分子の下に横棒、その下に分母）。
 * ユーザーから「1/2 ではなく、上と下に分けて、横棒を引いて表示できないか」と要望があった（2026/10/1）。
 *
 * 文字列の中の「数字/数字」だけを対象にする。日付（2026/10/1）や単位（km/h）は数字どうしでないので触らない。
 * 「1と7/12」「2 3/4」は、整数の部分はそのまま、分数の部分だけを縦にする。
 * ⚠️ <Text> の中に <View> を入れる作りなので、親の文字サイズ・色は引きつがれない。
 *    size / color を rich() の第2引数で渡せる（渡さなければ 16 / 濃い茶色）。
 * ⚠️ FigureView の図解の中の文字は SVG なので、ここを通らない（図の中は「1/2」のまま）。
 */
// 「9/20（金）」のように、あとに曜日のかっこが続くものは日付なので分数にしない。
const FRACTION = /(^|[^\d./√π])(\d{1,5})\/(\d{1,5})(?![\d./])(?!（[月火水木金土日]）)/g;

// ⚠️ iOS は、行の中に置いた分数の View を、文字の枠（Text の高さ）の下端で切る。
//    実機（TestFlight 1.1.13）で、答えの「a＝3/2」の分母が下で切れた（2026/10/7）。
//    原因は、分数を下へずらす量（translateY）が、行の下の余白より大きかったこと。
//    ずらす量を 0.42→0.24 に、分子・分母の行の高さを 1.2→1.1 に縮めて、切れない側に寄せた。
//    ずらしすぎない代わりに、横棒が文字の中心よりやや上に来る。実機で見ながら微調整すること。
export type RichOpts = { size?: number; color?: string; bold?: boolean };

function Fraction({ n, d, size, color, bold }: { n: string; d: string; size: number; color: string; bold: boolean }) {
  const fs = Math.round(size * 0.82);
  const text: TextStyle = { fontSize: fs, lineHeight: Math.round(fs * 1.1), color, fontWeight: bold ? '900' : '600', textAlign: 'center' };
  const wide = Math.max(n.length, d.length);
  return (
    <View
      style={[
        styles.fraction,
        Platform.OS === 'web'
          ? ({ display: 'inline-flex', verticalAlign: 'middle' } as object)
          : { transform: [{ translateY: Math.round(size * 0.24) }] },
        { minWidth: wide * fs * 0.62 + 4 },
      ]}
      accessible
      accessibilityLabel={`${d}分の${n}`}
    >
      <Text style={text}>{n}</Text>
      <View style={[styles.bar, { backgroundColor: color }]} />
      <Text style={text}>{d}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  fraction: { alignItems: 'center', justifyContent: 'center', marginHorizontal: 2 },
  bar: { height: 1.4, alignSelf: 'stretch', marginVertical: 1 },
});

/** 平文の中の「数字/数字」を縦の分数に置きかえる。分数が無ければ文字列のまま返す。 */
function withFractions(str: string, opts: RichOpts, keyBase: string): React.ReactNode {
  if (!str.includes('/')) return str;
  const out: React.ReactNode[] = [];
  let last = 0;
  let k = 0;
  FRACTION.lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = FRACTION.exec(str)) !== null) {
    const start = m.index + m[1].length;
    if (start > last) out.push(str.slice(last, start));
    out.push(
      <Fraction key={`${keyBase}f${k++}`} n={m[2]} d={m[3]} size={opts.size ?? 16} color={opts.color ?? '#2B2420'} bold={opts.bold ?? false} />,
    );
    last = m.index + m[0].length;
  }
  if (out.length === 0) return str;
  if (last < str.length) out.push(str.slice(last));
  return out;
}

/** 文字列を、強調部分を <Text> で包み、分数を縦にしたノードの配列にする。既存の <Text> の中でそのまま使える。 */
export function rich(text: string | null | undefined, opts: RichOpts = {}): React.ReactNode {
  const s = text ?? '';
  if (!s.includes('**')) return withFractions(s, opts, 'r');
  const parts = s.split(SPLIT);
  return parts.map((p, i) => {
    if (p.startsWith('**') && p.endsWith('**') && p.length >= 4) {
      return (
        <Text key={i} style={EMPHASIS}>
          {withFractions(p.slice(2, -2), { ...opts, color: '#C0392B', bold: true }, `b${i}`)}
        </Text>
      );
    }
    return <React.Fragment key={i}>{withFractions(p, opts, `p${i}`)}</React.Fragment>;
  });
}

type Props = React.ComponentProps<typeof Text> & { children?: string | null };

/** <Text> の代わりに使う。children は文字列だけ。 */
export default function RichText({ children, ...rest }: Props) {
  return <Text {...rest}>{rich(children)}</Text>;
}
