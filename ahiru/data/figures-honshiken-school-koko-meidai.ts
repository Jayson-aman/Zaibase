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

// 05 円の2つの弦（座標は計算で配置）
type V = [number, number];
const O5: V = [160, 72];
const R5 = 62;
const k5 = 6; // 1cm＝6px
const d5 = Math.sqrt(R5 * R5 - 24 * k5 * k5);
const phi5 = (-30 * Math.PI) / 180;
const n5: V = [Math.cos(phi5), -Math.sin(phi5)];
const P5: V = [O5[0] + d5 * n5[0], O5[1] + d5 * n5[1]];
const dirDot = (c: number, sign: number): V => {
  const s = sign * Math.sqrt(1 - c * c);
  return [c * n5[0] + s * -n5[1], c * n5[1] + s * n5[0]];
};
const u1 = dirDot((-5 * k5) / (2 * d5), 1);
const u2 = dirDot(-k5 / d5, -1);
const at = (u: V, t: number): V => [P5[0] + t * k5 * u[0], P5[1] + t * k5 * u[1]];
const A5 = at(u1, -3), B5 = at(u1, 8), C5 = at(u2, -4), D5 = at(u2, 6);
const out5 = (p: V, r = 13): V => {
  const dx = p[0] - O5[0], dy = p[1] - O5[1];
  const L = Math.hypot(dx, dy);
  return [p[0] + (dx / L) * r, p[1] + (dy / L) * r + 4];
};
const lab5 = (p: V, t: string, col: string = C.ink): E => { const q = out5(p); return tx(q[0], q[1], t, 13, col); };
const mid5 = (a: V, b: V, off: number, t: string, col: string = C.ink): E => {
  const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2;
  const dx = b[0] - a[0], dy = b[1] - a[1];
  const L = Math.hypot(dx, dy);
  return tx(mx - (dy / L) * off, my + (dx / L) * off + 4, t, 11, col);
};
const circle5 = (): E[] => curve(arcPts(O5[0], O5[1], R5, 0, 360, 48), C.gray, 1.5);
const base5 = (): E[] => [...circle5(), ln(A5[0], A5[1], B5[0], B5[1], C.ink, false, 1.5), ln(C5[0], C5[1], D5[0], D5[1], C.ink, false, 1.5), dot(P5[0], P5[1], C.red), tx(P5[0] + 6, P5[1] - 6, 'P', 12, C.red, true, 'start'), lab5(A5, 'A'), lab5(B5, 'B'), lab5(C5, 'C'), lab5(D5, 'D')];
const s05: Figure = show([
  SF('円の内部の点 P で弦 AB と弦 CD が交わっている。AP＝3、PB＝8、CD＝10、CP＜PD。CP を求める。', ['AP＝3　PB＝8　CD＝10　CP＜PD'], base5()),
  S('△APC と △DPB を見る。∠APC＝∠DPB（対頂角）、∠CAB＝∠CDB（同じ弧 BC の円周角）。2組の角が等しい。', ['△APC ∽ △DPB（2組の角）'], [pg([A5, P5, C5], C.blue, FILL.blue), pg([D5, P5, B5], C.red, FILL.red)]),
  S('相似な三角形の対応する辺の比は等しい。AP：DP＝CP：BP。したがって AP×BP＝CP×DP。', ['AP×PB＝CP×PD＝3×8＝24']),
  S('CP＝x とおくと、CD＝10 より PD＝10−x。積が24なので x(10−x)＝24。', ['CP＝x、PD＝10−x', 'x(10−x)＝24']),
  S('x²−10x＋24＝0 を因数分解して (x−4)(x−6)＝0。x＝4、6。', ['(x−4)(x−6)＝0　x＝4、6']),
  S('CP＜PD なので CP＝4cm（PD＝6cm）。', ['=答え　CP＝4cm']),
  S('確かめ。4×6＝24、4＋6＝10。CD の長さと積の両方が合う。', ['4×6＝24　4＋6＝10', '=CP＜PD も満たす ✓']),
], 'AP×PB＝CP×PD。x(10−x)＝24 より CP＝4。');

// 06 直角の二等分線（座標）
const A6: V = [40, 128], B6: V = [124, 128], Cc6: V = [40, 16];
const D6: V = [40 + (24 / 7) * 14, 128 - (24 / 7) * 14];
const tri6: E[] = [ln(A6[0], A6[1], B6[0], B6[1], C.ink, false, 2), ln(A6[0], A6[1], Cc6[0], Cc6[1], C.ink, false, 2), ln(B6[0], B6[1], Cc6[0], Cc6[1], C.ink, false, 2), tx(30, 138, 'A', 13, C.ink, true, 'end'), tx(130, 138, 'B', 13, C.ink, true, 'start'), tx(30, 22, 'C', 13, C.ink, true, 'end')];
const s06: Figure = show([
  SF('∠A＝90°、AB＝6、AC＝8、BC＝10 の直角三角形。∠A の二等分線が BC と交わる点を D として、AD を求める。', ['∠A の二等分線と BC の交点 D'], [...tri6, tx(82, 140, '6', 11, C.gray), tx(28, 76, '8', 11, C.gray, true, 'end'), tx(116, 56, '10', 11, C.gray, true, 'start')]),
  S('A を原点、AB を x 軸、AC を y 軸にとる。A(0,0)、B(6,0)、C(0,8)。', ['A(0,0)　B(6,0)　C(0,8)'], [tx(240, 40, 'A(0, 0)', 12, C.blue), tx(240, 62, 'B(6, 0)', 12, C.blue), tx(240, 84, 'C(0, 8)', 12, C.blue)]),
  S('直角を二等分するので、AD は 45° の直線 y＝x。D の x 座標と y 座標は等しい。', ['直角の二等分線は y＝x'], [ln(A6[0], A6[1], D6[0] + 22, D6[1] - 22, C.red, true, 2)]),
  S('直線 BC は x 軸と y 軸との交点が 6 と 8 なので、x/6＋y/8＝1。', ['BC：x/6＋y/8＝1'], [tx(240, 110, 'BC: x/6＋y/8＝1', 11, C.purple)]),
  S('D(t, t) を BC の式に代入する。t/6＋t/8＝1。両辺に24をかけて 4t＋3t＝24、t＝24/7。', ['D(t, t)　t/6＋t/8＝1', 't＝24/7'], [dot(D6[0], D6[1], C.red, 4), tx(D6[0] + 8, D6[1] - 8, 'D', 13, C.red, true, 'start')]),
  S('A から D までは、横にも縦にも 24/7 進む直角二等辺三角形の斜辺。AD＝(24/7)×√2。', ['=答え　AD＝24√2/7 cm']),
  S('確かめ。D(24/7, 24/7) を BC の式に入れると 4/7＋3/7＝1 で、D は BC 上にある。AD≒4.85cm は AB＝6 より短い。', ['(24/7)/6＋(24/7)/8', '=4/7＋3/7＝1 ✓']),
], 'D(24/7, 24/7)。AD＝(24/7)√2。');

// 07 立方体と垂線
const cA: V = [60, 118], cB: V = [150, 118], cF: V = [150, 48], cE: V = [60, 48];
const sh7: V = [40, -26];
const pv = (p: V): V => [p[0] + sh7[0], p[1] + sh7[1]];
const cD = pv(cA), cC = pv(cB), cG = pv(cF), cH = pv(cE);
const cube7 = (): E[] => [
  ln(cA[0], cA[1], cB[0], cB[1]), ln(cB[0], cB[1], cF[0], cF[1]), ln(cF[0], cF[1], cE[0], cE[1]), ln(cE[0], cE[1], cA[0], cA[1]),
  ln(cE[0], cE[1], cH[0], cH[1]), ln(cF[0], cF[1], cG[0], cG[1]), ln(cH[0], cH[1], cG[0], cG[1]), ln(cB[0], cB[1], cC[0], cC[1]), ln(cC[0], cC[1], cG[0], cG[1]),
  ln(cA[0], cA[1], cD[0], cD[1], C.gray, true, 1), ln(cD[0], cD[1], cC[0], cC[1], C.gray, true, 1), ln(cD[0], cD[1], cH[0], cH[1], C.gray, true, 1),
  tx(52, 124, 'A', 12, C.ink, true, 'end'), tx(156, 130, 'B', 12, C.ink, true, 'start'), tx(196, 96, 'C', 12, C.ink, true, 'start'), tx(96, 96, 'D', 12, C.gray, true, 'end'),
  tx(52, 46, 'E', 12, C.ink, true, 'end'), tx(156, 46, 'F', 12, C.ink, true, 'start'), tx(196, 24, 'G', 12, C.ink, true, 'start'), tx(96, 20, 'H', 12, C.ink, true, 'end'),
];
const s07: Figure = show([
  SF('1辺6cmの立方体 ABCD−EFGH。3点 A、C、F を通る平面で切る。頂点 B から切り口 △ACF への垂線の長さを求める。', ['1辺6cmの立方体 ABCD−EFGH'], cube7()),
  S('A、C、F を結ぶと切り口の △ACF ができる。3辺は、どれも面の対角線。', ['切り口 △ACF'], [pg([cA, cC, cF], C.purple, FILL.purple)]),
  S('三角錐 B−ACF では、B から出る BA、BC、BF が互いに垂直で、長さはすべて6cm。', ['BA＝BC＝BF＝6、互いに垂直'], [ln(cB[0], cB[1], cA[0], cA[1], C.red, false, 3), ln(cB[0], cB[1], cC[0], cC[1], C.red, false, 3), ln(cB[0], cB[1], cF[0], cF[1], C.red, false, 3)]),
  S('底面を直角三角形 ABC、高さを BF とすると、体積は (1/3)×(1/2×6×6)×6＝36cm³。', ['体積＝(1/3)×18×6＝36cm³']),
  S('△ACF は1辺 6√2cm の正三角形。面積は (√3/4)×(6√2)²＝(√3/4)×72＝18√3cm²。', ['△ACF は正三角形（1辺6√2）', '面積＝(√3/4)×72＝18√3']),
  S('底面を △ACF、高さを垂線 h とすると 36＝(1/3)×18√3×h＝6√3×h。h＝36÷(6√3)＝2√3。', ['=答え　h＝2√3 cm']),
  S('確かめ。垂線の足は △ACF の中心。F から中心までは 6√2×(√3/3)＝2√6。三平方で h²＝6²−(2√6)²＝12、h＝2√3。', ['h²＝6²−(2√6)²＝36−24', '=h＝√12＝2√3 ✓']),
], '体積36＝(1/3)×18√3×h より h＝2√3。');

// 08 さいころと2直線の交点
const gx8 = (b: number): number => 70 + (b - 1) * 32;
const gy8 = (a: number): number => 28 + (a - 1) * 18;
const cells8 = (rows: number[], color: string, fill: string): E[] => {
  const out: E[] = [];
  for (const a of rows) for (let b = 1; b <= 6; b++) if (b % (a + 1) === 0) out.push(bx(gx8(b), gy8(a), 30, 16, undefined, color, fill));
  return out;
};
const grid8 = (): E[] => {
  const out: E[] = [];
  for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) out.push(bx(gx8(b), gy8(a), 30, 16, undefined, C.gray, '#FFFFFF'));
  for (let a = 1; a <= 6; a++) out.push(tx(60, gy8(a) + 12, 'a＝' + a, 11, C.gray, true, 'end'));
  for (let b = 1; b <= 6; b++) out.push(tx(gx8(b) + 15, 22, 'b＝' + b, 10, C.gray));
  return out;
};
const s08: Figure = show([
  SF('大小2つのさいころの目を a、b とする。y＝ax と y＝−x＋b の交点の x 座標が整数になる確率を求める。', ['全部で 6×6＝36通り'], grid8()),
  S('ax＝−x＋b を移項すると (a＋1)x＝b。したがって x＝b/(a＋1)。b が a＋1 の倍数のとき x は整数。', ['x＝b/(a＋1)', 'b が (a＋1) の倍数なら整数']),
  S('a＝1 のとき a＋1＝2。b＝2、4、6 の3通り。', ['a＝1：b＝2、4、6 → 3通り'], cells8([1], C.blue, FILL.blue)),
  S('a＝2（÷3）は b＝3、6 の2通り。a＝3（÷4）は b＝4 の1通り。', ['a＝2：b＝3、6 → 2通り', 'a＝3：b＝4 → 1通り'], cells8([2, 3], C.blue, FILL.blue)),
  S('a＝4（÷5）は b＝5、a＝5（÷6）は b＝6 の各1通り。a＝6（÷7）は1つもない。', ['a＝4：1通り　a＝5：1通り', 'a＝6：0通り'], cells8([4, 5], C.blue, FILL.blue)),
  S('合計 3＋2＋1＋1＋1＋0＝8通り。確率は 8/36＝2/9。', ['=答え　2/9']),
  S('確かめ。a＝1、b＝4 なら y＝x と y＝−x＋4 は (2, 2) で交わる。x＝2 は整数。', ['a＝1、b＝4 → 交点(2, 2)', '=x＝b/(a＋1)＝4/2＝2 ✓']),
], '交点の x＝b/(a＋1)。整数になるのは36通り中8通り。');

// 09 規則性
const row9 = [1, 1, 2, 1, 2, 3, 1, 2, 3, 4];
const x9 = (i: number): number => 24 + i * 28;
const s09: Figure = show([
  SF('1、1、2、1、2、3、1、2、3、4、… と並ぶ。「1」から始まる区切りで見ると、n番目の区切りには n 個の数がある。', ['n番目の区切りには n 個の数'], [
    ...row9.map((v, i) => ci(x9(i), 50, 11, String(v), C.blue, FILL.blue, 12)),
    ln(x9(0) + 14, 30, x9(0) + 14, 70, C.red), ln(x9(2) + 14, 30, x9(2) + 14, 70, C.red), ln(x9(5) + 14, 30, x9(5) + 14, 70, C.red),
    tx(x9(0), 100, '1個', 11, C.gray), tx(x9(1) + 14, 100, '2個', 11, C.gray), tx(x9(3) + 14, 100, '3個', 11, C.gray), tx(x9(7) + 10, 100, '4個', 11, C.gray),
  ]),
  S('(1) 13番目の区切りまでの個数は 1＋2＋…＋13＝13×14÷2＝91個。', ['13番目までの個数', '1＋2＋…＋13＝91個']),
  S('100番目は、91個のあと 100−91＝9番目。', ['100−91＝9　（次の区切りの9番目）']),
  S('次は14番目の区切り (1, 2, …, 14)。その9番目の数は 9。', ['14番目の区切りの9番目＝9', '=(1) 9']),
  SF('(2) 「10」が初めて出るのは、10番目の区切り (1, 2, …, 10) の最後。', ['「10」は10番目の区切りの最後'], [bx(10, 30, 104, 40, '1〜9番目の区切り', C.blue, FILL.blue, 11), bx(124, 30, 104, 40, '10番目の区切り', C.green, FILL.green, 11), tx(62, 90, '45個', 13, C.blue), tx(176, 90, '10個', 13, C.green)]),
  S('9番目の区切りまでの個数は 9×10÷2＝45個。その次の10個の最後だから 45＋10＝55番目。', ['=答え　(1) 9　(2) 55番目']),
  S('確かめ。1＋2＋…＋10＝55 で、10番目の区切りの最後の位置と一致。91番目の「13」の次の92番目から 1、2、…と数えると 100番目は 9。', ['1＋2＋…＋10＝55 ✓', '92番目＝1 → 100番目＝9 ✓']),
], '区切りの個数は 1、2、3、…。100番目は14番目の区切りの9番目、10 は55番目。');

// 10 峠道（行きと帰り）
const s10: Figure = show([
  SF('A町からB町まで峠を越える道。上りは時速3km、下りは時速6km。行きは2時間30分、帰りは3時間。A町からB町までの道のりを求める。', ['行き 2時間30分　帰り 3時間'], [
    ln(20, 120, 122, 52, C.red, false, 3), ln(122, 52, 300, 120, C.blue, false, 3), tx(14, 134, 'A町', 12, C.ink, true, 'start'), tx(306, 134, 'B町', 12, C.ink, true, 'end'), tx(56, 76, '上り x km', 12, C.red, true, 'end'), tx(232, 78, '下り y km', 12, C.blue, true, 'start'),
  ]),
  S('行きは、x km を上り（時速3km）、y km を下り（時速6km）。時間＝道のり÷速さ。', ['行き：x/3＋y/6＝5/2'], [ar(30, 100, 110, 46, C.green), ar(134, 46, 290, 100, C.green)]),
  S('帰りは上りと下りが入れかわる。x km は下り、y km は上り。', ['帰り：x/6＋y/3＝3', '行きの上りは帰りでは下り']),
  S('どちらの式にも6をかけて分母を消す。', ['2x＋y＝15', 'x＋2y＝18']),
  S('2つの式を足すと 3x＋3y＝33。x＋y＝11。これがそのまま A町から B町までの道のり。', ['3x＋3y＝33　より　x＋y＝11']),
  S('x＝15−11＝4、y＝7。上りが4km、下りが7km。合計は11km。', ['=答え　11km']),
  S('確かめ。行きは 4/3＋7/6＝15/6＝2.5時間。帰りは 7/3＋4/6＝18/6＝3時間。', ['行き 4/3＋7/6＝5/2 ✓', '帰り 7/3＋4/6＝3 ✓']),
], '上り4km＋下り7km＝11km。');

// 11 台形と対角線
const ta: V = [95, 40], td: V = [185, 40], tb: V = [60, 120], tc: V = [210, 120];
const tp: V = [ta[0] + (tc[0] - ta[0]) * (3 / 8), ta[1] + (tc[1] - ta[1]) * (3 / 8)];
const cen = (a: V, b: V, c: V): V => [(a[0] + b[0] + c[0]) / 3, (a[1] + b[1] + c[1]) / 3];
const trap11 = (): E[] => [
  ln(ta[0], ta[1], td[0], td[1], C.ink, false, 2), ln(td[0], td[1], tc[0], tc[1], C.ink, false, 2), ln(tc[0], tc[1], tb[0], tb[1], C.ink, false, 2), ln(tb[0], tb[1], ta[0], ta[1], C.ink, false, 2),
  ln(ta[0], ta[1], tc[0], tc[1], C.gray, false, 1.5), ln(tb[0], tb[1], td[0], td[1], C.gray, false, 1.5),
  tx(88, 38, 'A', 13, C.ink, true, 'end'), tx(192, 38, 'D', 13, C.ink, true, 'start'), tx(54, 130, 'B', 13, C.ink, true, 'end'), tx(216, 130, 'C', 13, C.ink, true, 'start'), tx(tp[0] + 6, tp[1] - 4, 'P', 12, C.red, true, 'start'),
];
const area11 = (a: V, b: V, c: V, col: string, fill: string, t: string): E[] => { const m = cen(a, b, c); return [pg([a, b, c], col, fill), tx(m[0], m[1] + 5, t, 13, col)]; };
const s11: Figure = show([
  SF('台形 ABCD で AD∥BC、AD＝6、BC＝10。対角線の交点を P とする。△PAD＝18cm² のとき、台形の面積を求める。', ['AD＝6　BC＝10　△PAD＝18'], [...trap11(), tx(140, 34, '6', 11, C.gray), tx(135, 136, '10', 11, C.gray)]),
  S('AD∥BC より △PAD∽△PCB。相似比は AD：CB＝6：10＝3：5。', ['△PAD ∽ △PCB　相似比 3：5'], [...area11(ta, td, tp, C.blue, FILL.blue, '18'), ...area11(tb, tc, tp, C.red, FILL.red, '？')]),
  S('相似な図形の面積比は相似比を2回かけた 9：25。△PBC＝18×25/9＝50cm²。', ['面積比 9：25', '△PBC＝18×25/9＝50']),
  S('PA：PC＝3：5。高さが同じ三角形の面積は底辺の比。△PAD：△PDC＝3：5 より △PDC＝30cm²。', ['△PAD：△PDC＝3：5', '△PDC＝18×5/3＝30'], area11(td, tc, tp, C.green, FILL.green, '30')),
  S('△ABD と △ACD は底辺 AD が共通で高さも等しいので面積が等しい。共通の △PAD を引いて △PAB＝△PDC＝30。', ['△ABD＝△ACD', '△PAB＝△PDC＝30'], area11(ta, tb, tp, C.purple, FILL.purple, '30')),
  S('台形は 4つの三角形の合計。18＋50＋30＋30＝128cm²。', ['=答え　128cm²']),
  S('確かめ。△ABC＝30＋50＝80、△ACD＝18＋30＝48。80：48＝10：6 で底辺 BC：AD と合う。合計 128。', ['△ABC＝80　△ACD＝48', '=80＋48＝128 ✓']),
], '18＋50＋30＋30＝128cm²。');

// 12 式の計算（いつでも成り立つ倍数）
const s12: Figure = show([
  S('n が自然数のとき、(n＋3)²−(n−1)² は、いつでもある整数の倍数になる。その最大の整数を求める。', ['(n＋3)²−(n−1)²'], [bx(30, 30, 260, 36, '(n＋3)²−(n−1)²', C.blue, FILL.blue, 16)]),
  S('a²−b²＝(a＋b)(a−b) を使う。a＝n＋3、b＝n−1。', ['a²−b²＝(a＋b)(a−b)'], [bx(30, 80, 260, 36, '(a＋b)(a−b) に a＝n＋3、b＝n−1', C.purple, FILL.purple, 13)]),
  S('a＋b＝2n＋2、a−b＝4。', ['(2n＋2)×4']),
  S('(2n＋2)×4＝8(n＋1)。n が自然数なので、いつでも8の倍数。', ['＝8(n＋1)', 'いつでも 8 の倍数']),
  S('「最大」を確かめるため、具体的な値を調べる。n＝1 で16、n＝2 で24。', ['n＝1 → 16　n＝2 → 24']),
  S('16 と 24 の最大公約数は8。共通の約数は8以下なので、最大は8。', ['=答え　8']),
  S('確かめ。n＝3 のとき 6²−2²＝32。16、24、32 の最大公約数は8で、8(n＋1) と合う。', ['n＝3：6²−2²＝32', '16、24、32 の最大公約数は 8 ✓']),
], '(n＋3)²−(n−1)²＝8(n＋1)。16 と 24 の最大公約数 8。');
