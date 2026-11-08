// 本試験対策（学校別）明治大学付属明治高校 準拠の自作問題の動く図解。座標は 320×240。
// 上の 0〜140 が作図、下の帯（146〜）が式・答え。
import type { DiagramElement, Figure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, show, band, fresh, cover } from './diagram-kit';
import type { Slide } from './diagram-kit';

type E = DiagramElement;
const tx = (x: number, y: number, t: string, size = 12, color: string = C.ink, bold = true, anchor: 'start' | 'middle' | 'end' = 'middle'): E => lb(x, y, t, size, color, anchor, bold);

// 下の帯：lines の先頭文字で色が決まる（=緑 / ~赤 / *紫 / それ以外は青）。1行で先頭が「=答え」なら大きく出す。
const tone = (s: string): [string, string, string] => {
  const c = s[0];
  if (c === '=') return [s.slice(1), C.green, FILL.green];
  if (c === '~') return [s.slice(1), C.red, FILL.red];
  if (c === '*') return [s.slice(1), C.purple, FILL.purple];
  return [s, C.blue, FILL.blue];
};
const B = (lines: string[]): E[] => {
  if (lines.length === 1) {
    const [t, col, fill] = tone(lines[0]);
    const big = t.startsWith('答え');
    return band(146, bx(20, big ? 158 : 166, 280, big ? 42 : 36, t, col, fill, big ? 18 : 15));
  }
  const h = lines.length === 2 ? 36 : 27;
  const gap = lines.length === 2 ? 40 : 30;
  const y0 = lines.length === 2 ? 154 : 150;
  return band(146, ...lines.map((s, i) => {
    const [t, col, fill] = tone(s);
    return bx(20, y0 + i * gap, 280, h, t, col, fill, lines.length === 2 ? 14 : 13);
  }));
};
const S = (note: string, lines: string[], add: E[] = []): Slide => ({ note, add: [...add, ...B(lines)] });
const SF = (note: string, lines: string[], draw: E[]): Slide => ({ note, add: [...fresh(...draw), ...B(lines)] });

const dot = (x: number, y: number, col: string = C.red, r = 3): E => ci(x, y, r, undefined, col, col);
const pts = (a: number, b: number, n: number, f: (t: number) => [number, number]): [number, number][] => {
  const out: [number, number][] = [];
  for (let i = 0; i <= n; i++) out.push(f(a + ((b - a) * i) / n));
  return out;
};
const curve = (p: [number, number][], color: string = C.blue, width = 2): E[] => {
  const out: E[] = [];
  for (let i = 0; i < p.length - 1; i++) out.push(ln(p[i][0], p[i][1], p[i + 1][0], p[i + 1][1], color, false, width));
  return out;
};
const arcPts = (cx: number, cy: number, r: number, a0: number, a1: number, n = 24): [number, number][] =>
  pts(a0, a1, n, (a) => [cx + r * Math.cos((a * Math.PI) / 180), cy - r * Math.sin((a * Math.PI) / 180)]);

// ════════════ 数学 ════════════
// 01 根号の計算
const colX = (i: number) => 10 + i * 104;
const s01: Figure = show([
  S('(√3＋1)²−12÷√3＋√12 を計算する。3つの項を、それぞれ √3 の何倍かの形にそろえるのが目標。', ['(√3＋1)²−12÷√3＋√12'], [
    bx(colX(0), 20, 96, 34, '(√3＋1)²', C.blue, FILL.blue, 14), bx(colX(1), 20, 96, 34, '12÷√3', C.green, FILL.green, 14), bx(colX(2), 20, 96, 34, '√12', C.purple, FILL.purple, 14),
  ]),
  S('(√3＋1)² を展開する。3＋2√3＋1＝4＋2√3。真ん中の 2√3 を落とさない。', ['(√3＋1)²＝4＋2√3'], [ar(colX(0) + 48, 56, colX(0) + 48, 76, C.blue), bx(colX(0), 78, 96, 34, '4＋2√3', C.blue, FILL.blue, 14)]),
  S('12÷√3 は分母を有理化する。分母と分子に √3 をかけて 12√3÷3＝4√3。', ['12÷√3＝4√3'], [ar(colX(1) + 48, 56, colX(1) + 48, 76, C.green), bx(colX(1), 78, 96, 34, '4√3', C.green, FILL.green, 14)]),
  S('√12 は √(4×3)＝2√3。根号の中の平方数を外に出す。', ['√12＝2√3'], [ar(colX(2) + 48, 56, colX(2) + 48, 76, C.purple), bx(colX(2), 78, 96, 34, '2√3', C.purple, FILL.purple, 14)]),
  S('3つをまとめる。(4＋2√3)−4√3＋2√3 で、√3 の係数は 2−4＋2＝0。', ['4＋2√3−4√3＋2√3', '√3の係数は 2−4＋2＝0']),
  S('√3 の項が消えて、答えは 4。', ['=答え　4']),
  S('確かめ。√3≒1.732 として近似する。7.464−6.928＋3.464＝4.000。', ['7.464−6.928＋3.464', '=≒4.000 ✓']),
], '(√3＋1)²＝4＋2√3、12÷√3＝4√3、√12＝2√3。合計は 4。');

// 02 食塩水
const s02: Figure = show([
  S('3％の食塩水と8％の食塩水を混ぜて、6％の食塩水を300g作る。8％の食塩水を x g とおく。', ['8％を x g とすると 3％は (300−x) g'], [
    bx(10, 24, 84, 44, '3％\n(300−x)g', C.blue, FILL.blue, 12), tx(104, 52, '＋', 18), bx(116, 24, 84, 44, '8％\nx g', C.red, FILL.red, 12), tx(210, 52, '＝', 18), bx(222, 24, 88, 44, '6％\n300g', C.green, FILL.green, 12),
  ]),
  S('混ぜても、とけている食塩の重さは変わらない。それぞれの食塩の重さを書く。', ['食塩の重さは混ぜても変わらない'], [
    bx(10, 84, 84, 30, '0.03(300−x)', C.blue, FILL.blue, 11), tx(104, 105, '＋', 16), bx(116, 84, 84, 30, '0.08x', C.red, FILL.red, 12), tx(210, 105, '＝', 16), bx(222, 84, 88, 30, '300×0.06', C.green, FILL.green, 12),
  ]),
  S('300×0.06＝18g。方程式は 0.03(300−x)＋0.08x＝18。', ['0.03(300−x)＋0.08x＝18']),
  S('展開して 9−0.03x＋0.08x＝18。0.05x＝9。', ['9＋0.05x＝18', '0.05x＝9']),
  S('x＝9÷0.05＝180。8％の食塩水は180g。3％は 300−180＝120g。', ['x＝180　8％は180g', '3％は 300−180＝120g']),
  S('答えは 3％が120g、8％が180g。6％は8％のほうに近いので、8％が多いのは自然。', ['=答え　3％120g、8％180g']),
  S('確かめ。食塩は 120×0.03＝3.6g と 180×0.08＝14.4g。合計18g。', ['120×0.03＝3.6g', '180×0.08＝14.4g', '=合計18g＝300×0.06 ✓']),
], '3％120g＋8％180g＝300g、食塩18g（6％）。');

// 03 y=ax² の変化の割合と変域
const g3 = (x: number): number => 100 + x * 22; // x 座標
const g3y = (y: number): number => 128 - y * 14; // y 座標
const para3 = (a: number): E[] => curve(pts(-3.1, 4.2, 30, (x) => [g3(x), g3y(a * x * x)]), C.blue, 2);
const axes3: E[] = [ln(20, 128, 300, 128, C.gray, false, 1), ln(100, 138, 100, 6, C.gray, false, 1), tx(296, 122, 'x', 11, C.gray, true, 'end'), tx(106, 14, 'y', 11, C.gray, true, 'start')];
const s03: Figure = show([
  SF('関数 y＝ax² で、x が1から3まで増えるときの変化の割合が2。a と、−2≦x≦4 のときの y の変域を求める。', ['y＝ax²　変化の割合が2'], [...axes3]),
  S('変化の割合は a×(1＋3)＝4a。y＝ax² では「p から q まで」の変化の割合が a(p＋q) になる。', ['変化の割合＝a×(1＋3)＝4a']),
  S('4a＝2 より a＝1/2。グラフは y＝(1/2)x² の放物線。', ['4a＝2　より　a＝1/2'], para3(0.5)),
  S('x＝−2 のとき y＝2、x＝4 のとき y＝8。点を打つ。', ['x＝−2 → y＝2', 'x＝4 → y＝8'], [dot(g3(-2), g3y(2)), dot(g3(4), g3y(8)), tx(g3(-2) - 6, g3y(2) - 6, '2', 11, C.red, true, 'end'), tx(g3(4) + 8, g3y(8) + 4, '8', 11, C.red, true, 'start')]),
  S('変域 −2≦x≦4 は x＝0 をふくむ。原点が底なので、最小値は 0。', ['x＝0 をふくむ → 最小値 0'], [dot(g3(0), g3y(0), C.green, 4)]),
  S('最大値は x の絶対値が大きい x＝4 のときの 8。したがって 0≦y≦8。', ['=答え　a＝1/2、0≦y≦8']),
  S('確かめ。x＝1 で 1/2、x＝3 で 9/2。増加量 4÷2＝2 で、変化の割合 2。', ['x＝1 → 1/2、x＝3 → 9/2', '(9/2−1/2)÷2＝2 ✓']),
], 'y＝(1/2)x²。−2≦x≦4 で 0≦y≦8。');

// 04 放物線と面積（x軸上の点）
const g4 = (x: number): number => 195 + x * 19;
const g4y = (y: number): number => 124 - y * 12;
const axes4: E[] = [ln(14, 124, 304, 124, C.gray, false, 1), ln(195, 134, 195, 8, C.gray, false, 1)];
const para4: E[] = curve(pts(-4.1, 4.1, 32, (x) => [g4(x), g4y(0.5 * x * x)]), C.blue, 1.5);
const s04: Figure = show([
  SF('放物線 y＝(1/2)x² 上の A(−2, 2)、B(4, 8) がある。x 軸上に O 以外の点 P をとり、△PAB＝△OAB にしたい。', ['A(−2,2)　B(4,8)　△PAB＝△OAB'], [
    ...axes4, ...para4, dot(g4(-2), g4y(2)), dot(g4(4), g4y(8)), dot(g4(0), g4y(0), C.green), tx(g4(-2) - 8, g4y(2) - 4, 'A', 13, C.red, true, 'end'), tx(g4(4) + 6, g4y(8) - 2, 'B', 13, C.red, true, 'start'), tx(g4(0) + 8, g4y(0) + 14, 'O', 12, C.green, true, 'start'),
  ]),
  S('直線 AB の傾きは (8−2)÷(4+2)＝1。y＝x＋4。y＝0 とすると x＝−4。x 軸との交点を Q(−4, 0) とする。', ['直線AB：y＝x＋4　Q(−4, 0)'], [ln(g4(-5), g4y(-1), g4(4.2), g4y(8.2), C.red, false, 2), dot(g4(-4), g4y(0), C.purple, 4), tx(g4(-4) - 2, g4y(0) + 15, 'Q', 12, C.purple)]),
  S('P、O、Q は x 軸上。△OAB＝△OQB−△OQA＝(1/2)×OQ×(8−2)＝3×OQ。OQ＝4 なので12。', ['△OAB＝3×OQ＝3×4＝12'], [ln(g4(0), g4y(0), g4(4), g4y(8), C.green, true, 1.5), ln(g4(0), g4y(0), g4(-2), g4y(2), C.green, true, 1.5)]),
  S('△PAB も同じ形で △PAB＝3×PQ。12 になるには PQ＝4。', ['△PAB＝3×PQ　→　PQ＝4']),
  S('Q から4はなれた x 軸上の点は、右の O と、左の (−8, 0)。', ['Q から4 → O と (−8, 0)'], [dot(g4(-8), g4y(0), C.red, 4), tx(g4(-8), g4y(0) + 15, 'P', 12, C.red), ar(g4(-4) - 3, g4y(0) - 10, g4(-8) + 3, g4y(0) - 10, C.red), tx(g4(-6), g4y(0) - 14, '4', 11, C.red)]),
  S('O は除くので、P(−8, 0)。', ['=答え　P(−8, 0)']),
  S('確かめ。△PAB は P から A へ (6,2)、B へ (12,8)。面積 (1/2)|6×8−2×12|＝12。△OAB と等しい。', ['(1/2)|6×8−2×12|＝12', '=△OAB＝12 と等しい ✓']),
], 'P(−8, 0)。PQ＝OQ＝4 になる点。');
