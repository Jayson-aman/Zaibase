// 本試験対策（学校別）追加分A：筑波大学附属高等学校（高校受験・数学 ID _01〜_40）の動く図解。数学40問のうち18問に付ける。
// 各図は show() で7枚以上。座標は 320×240、下の帯（y 146〜）に説明の文字が出る。
import type { DiagramElement, Figure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, show, band, fresh } from './diagram-kit';
import type { Slide } from './diagram-kit';

type E = DiagramElement;

// 文字の幅の見積もり（scripts/figlint.ts と同じ）。はみ出すときは文字サイズを自動で小さくする。
const charW = (c: string, s: number) => (/[\x20-\x7e]/.test(c) ? (c === ' ' ? 0.3 : /[0-9]/.test(c) ? 0.58 : /[A-Z]/.test(c) ? 0.66 : 0.52) * s : s);
const textW = (t: string, s: number) => Math.max(...t.split('\n').map((l) => [...l].reduce((a, c) => a + charW(c, s), 0)));
const fit = (t: string, w: number, s: number) => { let z = s; while (textW(t, z) > w && z > 8) z -= 0.5; return z; };

const tx = (x: number, y: number, t: string, size = 14, color: string = C.ink, bold = true, anchor: 'start' | 'middle' | 'end' = 'middle'): E => {
  const room = anchor === 'middle' ? 2 * Math.min(x, 320 - x) - 8 : anchor === 'start' ? 316 - x : x - 4;
  return lb(x, y, t, fit(t, room, size), color, anchor, bold);
};
// 箱の中の文字は、箱に収まる大きさに自動で小さくする
const bf = (x: number, y: number, w: number, h: number, t: string, color?: string, fill?: string, size = 12): E => {
  const nl = t.split('\n').length;
  let z = fit(t, w - 6, size);
  while (nl * z * 1.2 > h - 1 && z > 8) z -= 0.5;
  return bx(x, y, w, h, t, color, fill, z);
};

// 下の帯：lines の先頭文字で色が決まる（=緑 / ~赤 / *紫 / それ以外は青）
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
    return band(146, bf(20, big ? 158 : 166, 280, big ? 42 : 36, t, col, fill, big ? 18 : 15));
  }
  const h = lines.length === 2 ? 36 : 27;
  const gap = lines.length === 2 ? 40 : 30;
  const y0 = lines.length === 2 ? 154 : 150;
  return band(146, ...lines.map((s, i) => { const [t, col, fill] = tone(s); return bf(20, y0 + i * gap, 280, h, t, col, fill, lines.length === 2 ? 14 : 13); }));
};
const S = (note: string, lines: string[], add: E[] = []): Slide => ({ note, add: [...add, ...B(lines)] });
const SF = (note: string, lines: string[], draw: E[]): Slide => ({ note, add: [...fresh(...draw), ...B(lines)] });
// 上の欄に文字の行だけを並べる（色は行頭の記号：=緑 ~赤 *紫）
const textLines = (strs: string[]): E[] => {
  const n = strs.length;
  const size = n === 1 ? 24 : n === 2 ? 20 : n === 3 ? 18 : 16;
  const dy = n === 1 ? 0 : n <= 3 ? 34 : 28;
  return strs.map((s, i) => {
    const c = s[0];
    const [t, col] = c === '=' ? [s.slice(1), C.green] : c === '~' ? [s.slice(1), C.red] : c === '*' ? [s.slice(1), C.purple] : [s, C.ink];
    return lb(160, 70 + (i - (n - 1) / 2) * dy + size * 0.35, t, fit(t, 288, size), col, 'middle', true);
  });
};
const P = (note: string, strs: string[], bottom: string[], extra: E[] = []): Slide => SF(note, bottom, [...textLines(strs), ...extra]);
const ANS = (t: string, note?: string): Slide => S(note ?? `答えは${t}です。`, [`=答え　${t}`]);

const P2 = (pts: [number, number][], color: string = C.ink, fill?: string): E => pg(pts, color, fill);
const at = (cx: number, cy: number, r: number, deg: number): [number, number] => [cx + r * Math.cos((deg * Math.PI) / 180), cy - r * Math.sin((deg * Math.PI) / 180)];
const seg = (a: [number, number], b: [number, number], color: string = C.ink, dashed = false, w = 2.5): E => ln(a[0], a[1], b[0], b[1], color, dashed, w);
const dot = (p: [number, number], r = 3, color: string = C.ink): E => ci(p[0], p[1], r, undefined, color, color);
const lerp = (a: [number, number], b: [number, number], t: number): [number, number] => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
const circPts = (cx: number, cy: number, r: number, n = 60): [number, number][] =>
  Array.from({ length: n }, (_, k) => at(cx, cy, r, (360 * k) / n));
const arcPts = (cx: number, cy: number, r: number, a0: number, a1: number, n = 16): [number, number][] =>
  Array.from({ length: n + 1 }, (_, k) => at(cx, cy, r, a0 + ((a1 - a0) * k) / n));
const polyLine = (pts: [number, number][], color: string = C.ink, w = 2.5): E[] =>
  pts.slice(0, -1).map((p, i) => seg(p, pts[i + 1], color, false, w));

// ───────── 数学 ─────────

// 11 放物線上の2点と三角形の面積
const g11 = (x: number, y: number): [number, number] => [100 + 22 * x, 130 - 6.5 * y];
const axes11 = (): E[] => [ar(20, 130, 300, 130, C.gray), ar(100, 138, 100, 4, C.gray), tx(304, 134, 'x', 12, C.gray), tx(112, 17, 'y', 12, C.gray), tx(90, 142, 'O', 11, C.gray)];
const para11 = (): E[] => { const pts: [number, number][] = []; for (let k = 0; k <= 46; k++) { const x = -3.4 + k * 0.2; const y = 0.5 * x * x; if (y <= 18.6) pts.push(g11(x, y)); } return polyLine(pts, C.gray, 2); };
const a11 = g11(-2, 2), b11 = g11(6, 18), c11 = g11(0, 6), o11 = g11(0, 0);
const base11 = (): E[] => [...axes11(), ...para11(), dot(a11, 3.5, C.blue), dot(b11, 3.5, C.red), tx(a11[0] - 4, a11[1] - 8, 'A', 13, C.blue, true, 'end'), tx(b11[0] - 8, b11[1] + 4, 'B', 13, C.red, true, 'end')];
const s_s11: Figure = show([
  SF('放物線 y＝(1/2)x² の上に、x座標が−2の点Aと、x座標が6の点Bがあります。直線ABの式と、△OABの面積を求めます。', ['A のx座標 −2　B のx座標 6'], base11()),
  S('手がかり。点のy座標は、x座標を式に入れれば出ます。A は y＝(1/2)×4＝2、B は y＝(1/2)×36＝18。', ['A(−2, 2)　B(6, 18)'], [tx(a11[0] + 6, a11[1] + 14, '(−2, 2)', 11, C.blue, true, 'start'), tx(b11[0] - 12, b11[1] + 16, '(6, 18)', 11, C.red, true, 'end')]),
  P('直線の傾きは、yの増加量÷xの増加量です。', ['傾き＝(18−2)÷(6＋2)', '＝16÷8＝2'], ['A(−2, 2) から B(6, 18) へ']),
  SF('A(−2, 2) を通るので 2＝2×(−2)＋b、b＝6。直線は y＝2x＋6。y軸との交点が C(0, 6)。', ['(1) y＝2x＋6　C(0, 6)'], [...base11(), seg(g11(-3, 0), g11(6.5, 19), C.purple, false, 2.5), dot(c11, 3.5, C.green), tx(c11[0] + 8, c11[1] + 4, 'C', 13, C.green, true, 'start')]),
  S('理由。△OABは、OCを共通の底辺とする2つの三角形に分けられます。OC＝6。', ['OC を底辺に　△OAC と △OBC'], [P2([o11, a11, c11], C.blue, FILL.blue), P2([o11, b11, c11], C.green, FILL.green), seg(o11, c11, C.ink, false, 2.5), seg(o11, a11, C.ink, false, 2), seg(o11, b11, C.ink, false, 2), seg(a11, b11, C.purple, false, 2.5), dot(a11, 3.5, C.blue), dot(b11, 3.5, C.red)]),
  P('高さは、AとBのx座標の絶対値（y軸までの距離）です。', ['△OAC＝6×2÷2＝6', '△OBC＝6×6÷2＝18'], ['高さ：A は 2、B は 6']),
  ANS('(1) y＝2x＋6　(2) 24', '(2) は 6＋18＝24 です。'),
  P('確かめ。A、Bから x軸へ垂線をおろし、台形から2つの三角形をひきます。', ['台形 (2＋18)×8÷2＝80', '80−2−54＝24'], ['=別の方法でも24 ✓']),
], 'A(−2, 2)、B(6, 18)。y＝2x＋6、C(0, 6)。△OAB＝6＋18＝24。');

// 13 正三角形になる a
const g13 = (x: number, y: number): [number, number] => [160 + 55 * x, 128 - 25 * y];
const para13 = (): E[] => { const pts: [number, number][] = []; for (let k = 0; k <= 42; k++) { const x = -2.1 + k * 0.1; pts.push(g13(x, x * x)); } return polyLine(pts, C.gray, 2); };
const a13 = g13(Math.sqrt(3), 3), b13 = g13(-Math.sqrt(3), 3), o13 = g13(0, 0), m13 = g13(0, 3);
const base13 = (): E[] => [ar(20, 128, 300, 128, C.gray), ar(160, 136, 160, 6, C.gray), tx(304, 132, 'x', 12, C.gray), tx(172, 17, 'y', 12, C.gray), tx(150, 142, 'O', 12), ...para13(), dot(a13, 3.5, C.blue), dot(b13, 3.5, C.blue), tx(a13[0] + 8, a13[1] - 6, 'A', 13, C.blue, true, 'start'), tx(b13[0] - 8, b13[1] - 6, 'B', 13, C.blue, true, 'end')];
const s_s13: Figure = show([
  SF('放物線 y＝x² 上に、左右対称な2点 A(a, a²)、B(−a, a²) があります。原点Oとで正三角形OABができるときの a を求めます。', ['A(a, a²)　B(−a, a²)　△OABは正三角形'], base13()),
  S('△OABをかきます。ABはx軸と平行で、y軸に関して対称です。', ['△OAB'], [P2([o13, a13, b13], C.red, FILL.red), seg(a13, b13, C.red, false, 2.5)]),
  S('手がかり。ABの長さは a−(−a)＝2a。OからABまでの高さは、Aのy座標 a² です。', ['AB＝2a　高さ＝a²'], [seg(o13, m13, C.purple, true, 2), tx(a13[0] - 60, a13[1] - 6, '2a', 13, C.red), tx(172, 92, 'a²', 13, C.purple, true, 'start')]),
  P('理由。正三角形の高さは、1辺の √3/2 倍と決まっています（30°・60°・90°の直角三角形の辺の比 1：2：√3）。', ['高さ＝1辺×√3/2', 'a²＝2a×√3/2＝√3a'], ['1辺2a、高さa²']),
  P('a＞0 なので、両辺を a でわります。', ['a²＝√3a', 'a＝√3'], ['a＞0 だから a でわってよい']),
  P('面積は、底辺×高さ÷2 です。AB＝2√3、高さ＝3。', ['2√3×3÷2＝3√3', '（a³＝(√3)³＝3√3）'], ['△OAB の面積']),
  ANS('a＝√3、面積 3√3'),
  P('確かめ。A(√3, 3) なので OA＝√(3＋9)＝√12＝2√3。AB＝2√3。', ['OA＝OB＝AB＝2√3'], ['=3辺が等しく正三角形 ✓']),
], 'a²＝√3a より a＝√3。面積 3√3。');

// 14 面積を2等分する直線
const g14 = (x: number, y: number): [number, number] => [110 + 36 * x, 130 - 13 * y];
const para14 = (): E[] => { const pts: [number, number][] = []; for (let k = 0; k <= 47; k++) { const x = -1.6 + k * 0.1; pts.push(g14(x, x * x)); } return polyLine(pts, C.gray, 2); };
const a14 = g14(-1, 1), b14 = g14(3, 9), o14 = g14(0, 0), m14 = g14(1, 5);
const base14 = (): E[] => [ar(20, 130, 300, 130, C.gray), ar(110, 138, 110, 4, C.gray), tx(304, 134, 'x', 12, C.gray), tx(122, 17, 'y', 12, C.gray), tx(100, 142, 'O', 12), ...para14(), dot(a14, 3.5, C.blue), dot(b14, 3.5, C.blue), tx(a14[0] - 8, a14[1] - 4, 'A', 13, C.blue, true, 'end'), tx(b14[0] + 8, b14[1] + 4, 'B', 13, C.blue, true, 'start')];
const s_s14: Figure = show([
  SF('放物線 y＝x² 上に A(−1, 1)、B(3, 9)。原点Oを通って、△OABの面積を2等分する直線の式を求めます。', ['A(−1, 1)　B(3, 9)　O を通る直線で面積を半分に'], base14()),
  S('△OABをかきます。', ['△OAB'], [P2([o14, a14, b14], C.ink, FILL.warm), seg(o14, a14, C.ink, false, 2.5), seg(o14, b14, C.ink, false, 2.5), seg(a14, b14, C.ink, false, 2.5)]),
  S('手がかり。三角形の頂点と、向かいの辺の中点を結ぶ線（中線）は、面積を2等分します。ABの中点を M とします。', ['ABの中点 M を探す'], [dot(m14, 4, C.green), tx(m14[0] + 8, m14[1] + 12, 'M', 13, C.green, true, 'start')]),
  P('中点の座標は、x座標どうし、y座標どうしの平均です。', ['x＝(−1＋3)÷2＝1', 'y＝(1＋9)÷2＝5'], ['M(1, 5)']),
  SF('理由。△OAM と △OMB は、底辺AM＝MB で、Oからの高さも同じなので、面積が等しい。', ['△OAM＝△OMB'], [...base14(), dot(m14, 4, C.green), tx(m14[0] + 8, m14[1] + 12, 'M', 13, C.green, true, 'start'), P2([o14, a14, m14], C.blue, FILL.blue), P2([o14, m14, b14], C.green, FILL.green), seg(o14, m14, C.red, false, 3), seg(a14, b14, C.ink, false, 2.5), seg(o14, a14, C.ink, false, 2), seg(o14, b14, C.ink, false, 2)]),
  P('直線OMは原点を通るので、y＝mx とおけます。(1, 5) を通るので m＝5。', ['y＝mx に (1, 5) を入れる', '5＝m×1　m＝5'], ['原点を通る直線']),
  ANS('y＝5x'),
  P('確かめ。直線 y＝5x は O(0, 0) と M(1, 5) を通ります。', ['5×1＝5 ✓', '5×0＝0 ✓'], ['=M も O も直線の上にある ✓']),
], 'ABの中点 M(1, 5) を通る。y＝5x。');

// 15 動点と三角形の面積
const A15: [number, number] = [50, 24], B15: [number, number] = [50, 130], C15: [number, number] = [250, 130], D15: [number, number] = [250, 24];
const rect15 = (): E[] => [P2([A15, B15, C15, D15], C.ink, FILL.warm), tx(40, 26, 'A', 13, C.ink, true, 'end'), tx(40, 138, 'B', 13, C.ink, true, 'end'), tx(260, 138, 'C', 13, C.ink, true, 'start'), tx(260, 26, 'D', 13, C.ink, true, 'start'), tx(150, 142, '10cm', 11, C.gray), tx(40, 80, '6cm', 11, C.gray, true, 'end')];
const s_s15: Figure = show([
  SF('縦6cm、横10cmの長方形ABCD。点Pは、Bから B→C→D→A の順に毎秒2cmで動きます。△ABPの面積が24cm²になる時刻をすべて求めます。', ['点Pは B→C→D→A（毎秒2cm）'], rect15()),
  S('場面1。PがBC上にいるとき。出発してt秒後、BP＝2t cm。底辺AB＝6、高さBP。', ['BC上：△ABP＝6×2t÷2＝6t'], [P2([A15, B15, [50 + 160, 130]], C.blue, FILL.blue), dot([210, 130], 4, C.red), tx(210, 124, 'P', 13, C.red, true, 'middle')]),
  P('6t＝24 を解きます。BC上にいるのは 0〜5秒（BCは10cm）なので、範囲に合います。', ['6t＝24', 't＝4'], ['4秒後：BP＝8cm']),
  SF('場面2。PがCD上にいるとき。底辺AB＝6、高さは BC＝10 のまま変わらないので、面積はずっと30。24にはなりません。', ['CD上：面積はいつも30'], [...rect15(), P2([A15, B15, [250, 77]], C.purple, FILL.purple), dot([250, 77], 4, C.red)]),
  S('場面3。PがDA上にいるとき。AP＝(Aまでの残り)。底辺AB＝6、高さAP。Aに近づくほど面積が小さくなります。', ['DA上：△ABP＝6×AP÷2'], [P2([A15, B15, [210, 24]], C.green, FILL.green), dot([210, 24], 4, C.red), tx(210, 40, 'P', 13, C.red, true, 'middle')]),
  P('B→C→Dで 10＋6＝16cm 進むのは8秒後。8秒後からは DA上で、t秒後の AP＝10−2(t−8)＝26−2t。面積＝6×(26−2t)÷2＝78−6t。', ['78−6t＝24', 't＝9'], ['DA上は 8〜13秒']),
  ANS('4秒後と9秒後'),
  P('確かめ。9秒後：16cm＋2cm＝18cm 進むので、D から 2cm 進み AP＝8cm。', ['△ABP＝6×8÷2＝24 ✓', '4秒後：6×8÷2＝24 ✓'], ['=どちらも24cm² ✓']),
], 'BC上で t＝4、DA上で t＝9。CD上は面積30で一定。');

// 17 弧の比と交わる弦の角
const O17 = { x: 160, y: 72, r: 56 };
const pA17 = at(O17.x, O17.y, O17.r, 120), pB17 = at(O17.x, O17.y, O17.r, 180), pC17 = at(O17.x, O17.y, O17.r, 270), pD17 = at(O17.x, O17.y, O17.r, 60);
const inter17 = (p1: [number, number], p2: [number, number], p3: [number, number], p4: [number, number]): [number, number] => {
  const d = (p2[0] - p1[0]) * (p4[1] - p3[1]) - (p2[1] - p1[1]) * (p4[0] - p3[0]);
  const t = ((p3[0] - p1[0]) * (p4[1] - p3[1]) - (p3[1] - p1[1]) * (p4[0] - p3[0])) / d;
  return [p1[0] + (p2[0] - p1[0]) * t, p1[1] + (p2[1] - p1[1]) * t];
};
const E17 = inter17(pA17, pC17, pB17, pD17);
const base17 = (): E[] => [P2(circPts(O17.x, O17.y, O17.r), C.ink), dot(pA17), dot(pB17), dot(pC17), dot(pD17), tx(pA17[0] - 8, pA17[1] - 6, 'A', 14, C.ink, true, 'end'), tx(pB17[0] - 8, pB17[1] + 4, 'B', 14, C.ink, true, 'end'), tx(pC17[0], pC17[1] + 14, 'C', 14), tx(pD17[0] + 8, pD17[1] - 4, 'D', 14, C.ink, true, 'start')];
const s_s17: Figure = show([
  SF('円周上に4点 A、B、C、D がこの順にあり、弧AB：弧BC：弧CD：弧DA＝2：3：5：2。ACとBDの交点をEとして、∠AEBを求めます。', ['弧の比　AB：BC：CD：DA＝2：3：5：2'], base17()),
  S('弦ACと弦BDをひき、交点をEとします。', ['AC と BD の交点が E'], [seg(pA17, pC17, C.blue, false, 2.5), seg(pB17, pD17, C.green, false, 2.5), dot(E17, 3.5, C.red), tx(E17[0] + 10, E17[1] - 4, 'E', 13, C.red, true, 'start')]),
  P('手がかり。円周全体は360°。比の合計は 2＋3＋5＋2＝12。', ['AB 60°　BC 90°', 'CD 150°　DA 60°'], ['360°×2/12＝60°、×3/12＝90°、×5/12＝150°']),
  SF('理由。∠BAC は、弧BC（90°）に対する円周角。円周角は、見ている弧の中心角の半分なので 45°。', ['∠BAC＝90°÷2＝45°'], [...base17(), seg(pB17, pD17, C.green, false, 2), dot(E17, 3.5, C.red), ...polyLine(arcPts(O17.x, O17.y, O17.r, 180, 270), C.green, 4), seg(pA17, pB17, C.red, false, 2.5), seg(pA17, pC17, C.red, false, 2.5)]),
  SF('∠ABD は、弧DA（60°）に対する円周角。30°。', ['∠ABD＝60°÷2＝30°'], [...base17(), seg(pA17, pC17, C.blue, false, 2), seg(pB17, pD17, C.green, false, 2), ...polyLine(arcPts(O17.x, O17.y, O17.r, 60, 120), C.purple, 4), seg(pB17, pA17, C.red, false, 2.5), seg(pB17, pD17, C.red, false, 2.5)]),
  SF('△ABEの内角の和は180°です。∠BAE＝45°、∠ABE＝30°。', ['∠AEB＝180°−45°−30°'], [...base17(), P2([pA17, pB17, E17], C.purple, FILL.purple), seg(pA17, pC17, C.blue, false, 2), seg(pB17, pD17, C.green, false, 2), dot(E17, 3.5, C.red)]),
  ANS('105°'),
  P('確かめ。弧ABと弧CDの和は 60°＋150°＝210°。交わる2本の弦がつくる角は、はさむ2つの弧の和の半分です。', ['210°÷2＝105°'], ['=別の考え方でも105° ✓']),
], '弧の比→円周角45°、30°。∠AEB＝180°−75°＝105°。');

// 18 台形と対角線
const A18: [number, number] = [100, 26], D18: [number, number] = [180, 26], B18: [number, number] = [40, 126], C18: [number, number] = [240, 126];
const O18 = lerp(A18, C18, 2 / 7);
const base18t = (): E[] => [P2([A18, B18, C18, D18], C.ink, FILL.warm), tx(92, 24, 'A', 13, C.ink, true, 'end'), tx(188, 24, 'D', 13, C.ink, true, 'start'), tx(32, 134, 'B', 13, C.ink, true, 'end'), tx(248, 134, 'C', 13, C.ink, true, 'start'), tx(140, 20, '4cm', 11, C.gray), tx(140, 142, '10cm', 11, C.gray)];
const dseg18 = (): E[] => [seg(A18, C18, C.ink, false, 2.5), seg(B18, D18, C.ink, false, 2.5)];
const diag18 = (): E[] => [...dseg18(), dot(O18, 3.5, C.red), tx(O18[0] + 10, O18[1] - 4, 'O', 13, C.red, true, 'start')];
const s_s18t: Figure = show([
  SF('AD∥BCの台形ABCD。AD＝4cm、BC＝10cm、面積98cm²。対角線の交点をOとして、△DOCの面積を求めます。', ['AD＝4　BC＝10　台形の面積98'], base18t()),
  S('対角線ACとBDをひき、交点をOとします。台形が4つの三角形に分かれます。', ['△AOD　△AOB　△BOC　△DOC'], diag18()),
  S('手がかり。AD∥BC なので、△AOD と △COB は相似（錯角が等しい）。相似比は AD：BC＝4：10＝2：5。', ['△AOD ∽ △COB　相似比 2：5'], [P2([A18, D18, O18], C.blue, FILL.blue), P2([B18, C18, O18], C.green, FILL.green), ...dseg18()]),
  P('理由。面積比は、相似比を2回かけた比です。', ['△AOD：△COB＝2²：5²', '＝4：25'], ['△AOD＝4k とすると △COB＝25k']),
  SF('△AOD と △AOB は、Aから対角線BDにおろした高さが同じなので、面積比は底辺の比 DO：BO＝2：5。△AOB＝4k×5/2＝10k。', ['△AOB＝10k'], [...base18t(), P2([A18, B18, O18], C.purple, FILL.purple), ...diag18()]),
  S('△DOC も同じ10k です。（△ABD＝△ACD で、共通の△AODをひくと △AOB＝△DOC）', ['△DOC＝△AOB＝10k'], [P2([D18, C18, O18], C.red, FILL.red), ...dseg18()]),
  P('4つの三角形の面積の和が台形全体の98cm²です。', ['4k＋25k＋10k＋10k＝49k＝98', 'k＝2'], ['△DOC＝10×2＝20']),
  ANS('20cm²'),
  P('確かめ。△AOD＝8、△COB＝50、△AOB＝△DOC＝20。', ['8＋50＋20＋20＝98 ✓'], ['=台形の面積と一致 ✓']),
], '4：25：10：10 に分かれる。k＝2、△DOC＝20cm²。');

// 19 角の二等分線
const C19: [number, number] = [60, 126], B19: [number, number] = [188, 126], A19: [number, number] = [60, 30], D19: [number, number] = [108, 126];
const H19: [number, number] = (() => {
  const vx = B19[0] - A19[0], vy = B19[1] - A19[1];
  const t = ((D19[0] - A19[0]) * vx + (D19[1] - A19[1]) * vy) / (vx * vx + vy * vy);
  return [A19[0] + vx * t, A19[1] + vy * t];
})();
const tri19 = (): E[] => [P2([A19, B19, C19], C.ink, FILL.warm), P2([[60, 118], [68, 118], [68, 126], [60, 126]], C.gray), tx(50, 24, 'A', 13, C.ink, true, 'end'), tx(196, 134, 'B', 13, C.ink, true, 'start'), tx(50, 134, 'C', 13, C.ink, true, 'end'), tx(50, 80, '6', 12, C.gray, true, 'end'), tx(124, 142, '8', 12, C.gray)];
const s_s19: Figure = show([
  SF('∠C＝90°、AC＝6cm、BC＝8cmの直角三角形ABC。∠Aの二等分線と辺BCの交点をDとして、CDの長さを求めます。', ['AC＝6　BC＝8　∠Aの二等分線がBCと交わる点D'], tri19()),
  S('三平方の定理で AB を求めます。AB＝√(6²＋8²)＝√100＝10。', ['AB＝√(36＋64)＝10'], [tx(130, 70, '10', 12, C.gray, true, 'start')]),
  S('∠Aの二等分線ADをひきます。D は BC 上にあります。', ['AD は ∠A を2等分'], [seg(A19, D19, C.red, false, 2.5), dot(D19, 3.5, C.red), tx(108, 140, 'D', 13, C.red, true, 'middle')]),
  S('手がかり。角の二等分線上の点は、角をつくる2辺から同じ距離にあります。D から AB へ垂線DHをひくと、DH＝DC。', ['DH＝DC（Dから2辺までの距離が等しい）'], [seg(D19, H19, C.purple, false, 2.5), dot(H19, 3, C.purple)]),
  P('CD＝x とおくと、DH＝x。△ABC を、△ACD と △ABD の2つに分けて面積を考えます。', ['△ACD＝6×x÷2＝3x', '△ABD＝10×x÷2＝5x'], ['△ABC＝△ACD＋△ABD']),
  P('△ABCの面積は 6×8÷2＝24。', ['24＝3x＋5x＝8x', 'x＝3'], ['CD＝3cm']),
  ANS('3cm'),
  P('確かめ。BD＝8−3＝5。BD：DC＝5：3 で、AB：AC＝10：6＝5：3 と同じ比です。', ['BD：DC＝5：3＝AB：AC'], ['=角の二等分線の性質と一致 ✓']),
], 'DH＝DC＝x。24＝3x＋5x より CD＝3cm。');

// 20 折り返し
const A20: [number, number] = [60, 134], B20: [number, number] = [240, 134], C20: [number, number] = [240, 26], D20: [number, number] = [60, 26], E20: [number, number] = [204, 26], F20: [number, number] = [240, 74];
const rect20 = (): E[] => [P2([A20, B20, C20, D20], C.ink, FILL.warm), tx(52, 142, 'A', 13, C.ink, true, 'end'), tx(248, 142, 'B', 13, C.ink, true, 'start'), tx(248, 24, 'C', 13, C.ink, true, 'start'), tx(52, 24, 'D', 13, C.ink, true, 'end'), tx(150, 148 - 4, '10cm', 11, C.gray), tx(256, 90, '6cm', 11, C.gray, true, 'start')];
const s_s20: Figure = show([
  SF('縦6cm、横10cmの長方形ABCD。Aを通る直線AFで折ると、頂点BがCD上の点Eに重なりました。BFの長さを求めます。', ['AB＝10　BC＝6　折ると B が CD上の E に重なる'], rect20()),
  S('折り目AFで折り返します。BはEに、△ABFは△AEFに重なります。', ['△ABF を折ると △AEF'], [seg(A20, F20, C.red, false, 2.5), P2([A20, E20, F20], C.purple, FILL.purple), dot(E20, 3.5, C.purple), tx(204, 18, 'E', 13, C.purple), tx(246, 76, 'F', 13, C.red, true, 'start')]),
  S('手がかり。折り返した図形はもとと合同なので、AE＝AB＝10cm、EF＝BF。', ['AE＝AB＝10　EF＝BF'], [seg(A20, E20, C.purple, false, 3)]),
  P('△ADEは直角三角形で、AD＝6cm。三平方の定理より DE＝√(10²−6²)＝8cm。CD＝10cmなので CE＝2cm。', ['DE＝√(100−36)＝8', 'CE＝10−8＝2'], ['△ADE：AE＝10、AD＝6']),
  P('BF＝EF＝x とおくと、CF＝6−x。△FCE は直角三角形です。', ['CE²＋CF²＝EF²', '2²＋(6−x)²＝x²'], ['CE＝2、CF＝6−x、EF＝x']),
  P('展開して整理します。x² が両辺で消えます。', ['4＋36−12x＋x²＝x²', '40−12x＝0　x＝10/3'], ['BF＝10/3cm']),
  ANS('10/3cm'),
  P('確かめ。x＝10/3 のとき CF＝6−10/3＝8/3。', ['CE²＋CF²＝4＋64/9＝100/9', 'EF²＝(10/3)²＝100/9 ✓'], ['=三平方の定理が成り立つ ✓']),
], 'AE＝10、DE＝8、CE＝2。2²＋(6−x)²＝x² より x＝10/3。');

// 21 円の接線と弦
const O21: [number, number] = [100, 72], P21: [number, number] = [220, 72];
const th21 = Math.acos(40 / 120);
const A21: [number, number] = [O21[0] + 40 * Math.cos(th21), O21[1] - 40 * Math.sin(th21)], B21: [number, number] = [O21[0] + 40 * Math.cos(th21), O21[1] + 40 * Math.sin(th21)], H21: [number, number] = [O21[0] + 40 * Math.cos(th21), O21[1]];
const base21 = (): E[] => [P2(circPts(O21[0], O21[1], 40), C.ink), dot(O21, 3, C.ink), dot(P21, 3.5, C.red), tx(O21[0] - 10, O21[1] + 4, 'O', 13, C.ink, true, 'end'), tx(P21[0] + 8, P21[1] + 4, 'P', 13, C.red, true, 'start')];
const s_s21: Figure = show([
  SF('半径5cmの円Oと、円の外の点P（OP＝13cm）。Pから2本の接線をひき、接点をA、Bとします。弦ABの長さを求めます。', ['円Oの半径5　OP＝13　接点A、B'], base21()),
  S('Pから接線PA、PBをひきます。', ['接線 PA と PB'], [seg(P21, A21, C.blue, false, 2.5), seg(P21, B21, C.blue, false, 2.5), dot(A21, 3.5, C.blue), dot(B21, 3.5, C.blue), tx(A21[0] - 4, A21[1] - 8, 'A', 13, C.blue), tx(B21[0] - 4, B21[1] + 18, 'B', 13, C.blue)]),
  S('手がかり。接線は、接点を通る半径と垂直です。OA⊥PA なので、△OAP は ∠OAP＝90°の直角三角形。', ['OA⊥PA　△OAP は直角三角形'], [seg(O21, A21, C.green, false, 2.5), seg(O21, P21, C.ink, true, 1.5), tx(94, 40, '5', 12, C.green, true, 'middle'), tx(160, 126, '13', 12, C.gray)]),
  P('三平方の定理で PA を求めます。', ['PA＝√(13²−5²)', '＝√144＝12'], ['△OAP：OA＝5、OP＝13']),
  SF('OPとABの交点をHとします。PA＝PB、OA＝OB なので、AB⊥OP で、AH＝BH。', ['AB⊥OP　AH＝BH'], [...base21(), seg(P21, A21, C.blue, false, 2.5), seg(P21, B21, C.blue, false, 2.5), dot(A21, 3.5, C.blue), dot(B21, 3.5, C.blue), tx(A21[0] - 4, A21[1] - 8, 'A', 13, C.blue), tx(B21[0] - 4, B21[1] + 18, 'B', 13, C.blue), seg(O21, A21, C.green, false, 2.5), seg(O21, P21, C.ink, true, 1.5), seg(A21, B21, C.purple, false, 2.5), dot(H21, 3, C.purple), tx(H21[0] + 8, H21[1] + 14, 'H', 12, C.purple, true, 'start')]),
  P('理由。△OAPの面積は、「直角をはさむ2辺 OA、PA」でも、「底辺OPと高さAH」でも表せます。', ['5×12÷2＝13×AH÷2', '60＝13×AH'], ['面積を2通りで表す']),
  P('AH＝60/13。ABはAHの2倍です。', ['AH＝60/13', 'AB＝2×60/13＝120/13'], ['AB＝2AH']),
  ANS('120/13cm'),
  P('確かめ。OH＝OA²÷OP＝25/13、PH＝PA²÷OP＝144/13。', ['OH＋PH＝169/13＝13 ✓'], ['=OPの長さ13と一致 ✓']),
], 'PA＝12。5×12＝13×AH より AH＝60/13、AB＝120/13。');

// 立方体（斜投影）
const pc = (x: number, y: number, z: number): [number, number] => [100 + 14 * x + 7 * y, 134 - 13 * z - 5 * y];
const cA = pc(0, 0, 0), cB = pc(6, 0, 0), cC = pc(6, 6, 0), cD = pc(0, 6, 0), cE = pc(0, 0, 6), cF = pc(6, 0, 6), cG = pc(6, 6, 6), cH = pc(0, 6, 6);
const cubeEdges = (): E[] => [
  seg(cA, cB), seg(cB, cC), seg(cC, cD, C.ink, true, 1.5), seg(cD, cA, C.ink, true, 1.5),
  seg(cE, cF), seg(cF, cG), seg(cG, cH), seg(cH, cE),
  seg(cA, cE), seg(cB, cF), seg(cC, cG), seg(cD, cH, C.ink, true, 1.5),
];
const cubeBase = (): E[] => [
  ...cubeEdges(),
  tx(cA[0] - 8, cA[1] + 8, 'A', 13, C.ink, true, 'end'), tx(cB[0] + 8, cB[1] + 8, 'B', 13, C.ink, true, 'start'), tx(cC[0] + 8, cC[1] + 6, 'C', 13, C.ink, true, 'start'), tx(cD[0] - 6, cD[1] + 14, 'D', 13, C.ink, true, 'end'),
  tx(cE[0] - 8, cE[1] + 2, 'E', 13, C.ink, true, 'end'), tx(cF[0] - 4, cF[1] + 16, 'F', 13, C.ink, true, 'end'), tx(cG[0] + 8, cG[1] + 4, 'G', 13, C.ink, true, 'start'), tx(cH[0] - 6, cH[1] - 4, 'H', 13, C.ink, true, 'end'),
];

// 23 立方体の切り口
const pP = pc(6, 0, 3), pQ = pc(0, 6, 3);
const s_s23t: Figure = show([
  SF('1辺6cmの立方体ABCD−EFGH。辺BFの中点をP、辺DHの中点をQとして、4点A、P、G、Qを通る平面で切った切り口の面積を求めます。', ['辺BFの中点P　辺DHの中点Q　切り口は A、P、G、Q'], cubeBase()),
  S('PとQをとります。BP＝PF＝3cm、DQ＝QH＝3cm。', ['P は BF の中点　Q は DH の中点'], [dot(pP, 3.5, C.red), dot(pQ, 3.5, C.red), tx(pP[0] + 8, pP[1] + 4, 'P', 13, C.red, true, 'start'), tx(pQ[0] - 8, pQ[1] + 4, 'Q', 13, C.red, true, 'end')]),
  S('A→P→G→Q と結ぶと、切り口の四角形ができます。', ['切り口 APGQ'], [P2([cA, pP, cG, pQ], C.purple, FILL.purple), seg(cA, pP, C.purple, false, 2.5), seg(pP, cG, C.purple, false, 2.5), seg(cG, pQ, C.purple, false, 2.5), seg(pQ, cA, C.purple, false, 2.5), ...cubeEdges(), dot(pP, 3.5, C.red), dot(pQ, 3.5, C.red)]),
  P('手がかり。AP は、直角をはさむ2辺が 6cm と 3cm の直角三角形の斜辺です。PG、GQ、QA も同じ形です。', ['AP＝√(36＋9)＝√45', 'PG＝GQ＝QA＝√45'], ['4つの辺がすべて等しい']),
  SF('理由。4辺が等しい四角形はひし形です。ひし形の面積は、2本の対角線の長さの積の半分。対角線は AG と PQ。', ['ひし形　面積＝AG×PQ÷2'], [...cubeBase(), dot(pP, 3.5, C.red), dot(pQ, 3.5, C.red), tx(pP[0] + 8, pP[1] + 4, 'P', 13, C.red, true, 'start'), tx(pQ[0] - 8, pQ[1] + 4, 'Q', 13, C.red, true, 'end'), P2([cA, pP, cG, pQ], C.purple, FILL.purple), ...cubeEdges(), seg(cA, cG, C.blue, false, 2.5), seg(pP, pQ, C.green, false, 2.5), dot(pP, 3.5, C.red), dot(pQ, 3.5, C.red)]),
  P('AG は立方体の対角線です。底面の対角線AC＝6√2 と、高さ CG＝6 で三平方の定理を使います。', ['AG＝√((6√2)²＋6²)', '＝√108＝6√3'], ['立方体の対角線は 1辺×√3']),
  P('PQ は BD と平行で、長さが等しい（PとQの高さはどちらも3cm）。BD は底面の対角線です。', ['PQ＝BD＝6√2'], ['底面の対角線']),
  ANS('18√6 cm²', '面積は 6√3×6√2÷2＝18√6 です。'),
  P('確かめ。△APG は AP＝PG＝√45、AG＝6√3。底辺AGの中点からPまでの高さは √(45−27)＝3√2。', ['△APG＝6√3×3√2÷2＝9√6', 'ひし形＝9√6×2＝18√6 ✓'], ['=三角形2つ分でも一致 ✓']),
], '4辺が √45 のひし形。AG＝6√3、PQ＝6√2。面積＝18√6。');

// 24 円錐と展開図
const apex24: [number, number] = [70, 18], cen24: [number, number] = [70, 104];
const ell24 = (): [number, number][] => Array.from({ length: 41 }, (_, k) => [cen24[0] + 40 * Math.cos((2 * Math.PI * k) / 40), cen24[1] + 11 * Math.sin((2 * Math.PI * k) / 40)] as [number, number]);
const cone24 = (): E[] => [seg(apex24, [30, 104]), seg(apex24, [110, 104]), ...polyLine(ell24(), C.ink, 2), seg(apex24, cen24, C.gray, true, 1.5), tx(52, 66, '8cm', 11, C.gray, true, 'end'), tx(90, 120, '3cm', 11, C.gray, true, 'middle')];
const sec24 = (): [number, number][] => [[232, 20], ...arcPts(232, 20, 90, 202.5, 337.5, 24)];
const s_s24: Figure = show([
  SF('底面の半径が3cm、母線が8cmの円錐。側面を開いたおうぎ形の中心角と、円錐の表面積を求めます。', ['底面の半径3cm　母線8cm'], cone24()),
  S('側面を平らに開くと、半径が母線の長さ8cmのおうぎ形になります。', ['側面を開く→半径8cmのおうぎ形'], [P2(sec24(), C.blue, FILL.blue), tx(188, 70, '8cm', 11, C.blue, true, 'end')]),
  P('手がかり。おうぎ形の弧は、底面の円周とぴったりつながります。底面の円周は 2π×3＝6π。', ['弧の長さ＝底面の円周＝6π', '半径8の円周＝2π×8＝16π'], ['おうぎ形は円の何分のいくつ？']),
  P('理由。弧の長さは中心角に比例します。おうぎ形は、半径8cmの円の 6π÷16π＝3/8 にあたります。', ['中心角＝360°×3/8', '＝135°'], ['3/8＝0.375']),
  P('側面積は、おうぎ形の面積です。半径8cmの円の面積の 3/8。', ['π×8²×3/8＝24π', '（π×母線×半径＝π×8×3）'], ['側面積24π']),
  P('底面の円の面積を、たします。', ['底面積＝π×3²＝9π', '表面積＝24π＋9π＝33π'], ['側面積＋底面積']),
  ANS('中心角135°、表面積33πcm²'),
  P('確かめ。おうぎ形の弧＝2π×8×135/360＝6π で、底面の円周6πと一致します。', ['2π×8×135/360＝6π ✓'], ['=弧と円周が一致 ✓']),
], '中心角＝360°×3/8＝135°。表面積＝24π＋9π＝33π。');

// 26 正四角すい
const Vb: [number, number][] = [[80, 124], [200, 124], [232, 98], [112, 98]];
const cen26: [number, number] = [156, 111], V26: [number, number] = [156, 30], M26: [number, number] = [140, 124];
const pyr26 = (): E[] => [seg(Vb[0], Vb[1]), seg(Vb[1], Vb[2]), seg(Vb[2], Vb[3], C.ink, true, 1.5), seg(Vb[3], Vb[0], C.ink, true, 1.5), seg(V26, Vb[0]), seg(V26, Vb[1]), seg(V26, Vb[2]), seg(V26, Vb[3], C.ink, true, 1.5), tx(V26[0] + 8, V26[1] + 4, 'V', 13, C.ink, true, 'start')];
const s_s26: Figure = show([
  SF('底面が1辺6cmの正方形で、高さが4cmの正四角すい。体積と表面積を求めます。', ['底面は1辺6cmの正方形　高さ4cm'], [...pyr26(), tx(156, 138, '6cm', 11, C.gray), seg(V26, cen26, C.red, true, 1.5), dot(cen26, 3, C.red), tx(166, 74, '4cm', 11, C.red, true, 'start')]),
  P('体積は、底面積×高さ÷3 です。', ['6×6×4÷3', '＝48'], ['体積 48cm³']),
  SF('手がかり。側面は合同な二等辺三角形が4つ。その高さ（斜高）は、見えていません。底面の中心Oと辺の中点Mと頂点Vで、直角三角形をつくります。', ['△VOM は ∠VOM＝90°の直角三角形'], [...pyr26(), seg(V26, cen26, C.red, true, 1.5), dot(cen26, 3, C.red), seg(V26, M26, C.green, false, 3), seg(cen26, M26, C.purple, false, 3), dot(M26, 3.5, C.green), tx(M26[0] - 6, M26[1] + 14, 'M', 13, C.green, true, 'end'), tx(cen26[0] + 6, cen26[1] + 2, 'O', 12, C.red, true, 'start')]),
  P('OM は、底面の辺の長さの半分で 3cm。VO＝4cm。三平方の定理で VM を求めます。', ['VM＝√(4²＋3²)', '＝5（斜高）'], ['3：4：5 の直角三角形']),
  P('側面1つは、底辺6cm、高さ5cmの三角形です。', ['6×5÷2＝15', '4つで 15×4＝60'], ['側面積60cm²']),
  P('底面積を、たします。', ['底面積＝6×6＝36', '表面積＝36＋60＝96'], ['底面積＋側面積']),
  ANS('体積48cm³、表面積96cm²'),
  P('確かめ。側面積は、(底面の周の長さ)×(斜高)÷2 でも出ます。', ['24×5÷2＝60 ✓', '36＋60＝96 ✓'], ['=別の方法でも60 ✓']),
], '体積＝48。斜高5で、側面積60。表面積＝96。');

// 27 直方体の最短
const q27 = (x: number, y: number, z: number): [number, number] => [80 + 22 * x + 9 * y, 134 - 13 * z - 5 * y];
const e27 = [q27(0, 0, 0), q27(2, 0, 0), q27(2, 4, 0), q27(0, 4, 0), q27(0, 0, 6), q27(2, 0, 6), q27(2, 4, 6), q27(0, 4, 6)];
const box27 = (): E[] => [seg(e27[0], e27[1]), seg(e27[1], e27[2]), seg(e27[2], e27[3], C.ink, true, 1.5), seg(e27[3], e27[0], C.ink, true, 1.5), seg(e27[4], e27[5]), seg(e27[5], e27[6]), seg(e27[6], e27[7]), seg(e27[7], e27[4]), seg(e27[0], e27[4]), seg(e27[1], e27[5]), seg(e27[2], e27[6]), seg(e27[3], e27[7], C.ink, true, 1.5), dot(e27[0], 4, C.red), dot(e27[6], 4, C.red), tx(e27[0][0] - 8, e27[0][1] + 8, 'A', 13, C.red, true, 'end'), tx(e27[6][0] + 8, e27[6][1] + 2, 'G', 13, C.red, true, 'start'), tx(e27[0][0] + 22, e27[0][1] + 10, '2cm', 11, C.gray), tx(e27[1][0] + 28, e27[1][1] - 6, '4cm', 11, C.gray, true, 'start'), tx(e27[0][0] - 8, e27[0][1] - 40, '6cm', 11, C.gray, true, 'end')];
const s_s27: Figure = show([
  SF('縦2cm、横4cm、高さ6cmの直方体。頂点Aから表面を通って頂点Gまで糸をはります。いちばん短くなる長さを求めます。', ['2cm、4cm、6cm の直方体　A から G へ'], box27()),
  P('手がかり。表面を通る最短の道は、表面を平らに広げたときの直線です。AからGへは、2つの面を通る広げ方が3通りあります。', ['(2＋4)と6', '(2＋6)と4　(4＋6)と2'], ['直角三角形の2辺を、広げた長さで作る']),
  SF('広げ方1。「2と4」をつないだ面（横6cm）と、高さ6cm。AGは、横6cm・高さ6cmの正方形の対角線です。', ['AG²＝6²＋6²＝72'], [P2([[70, 126], [70, 26], [170, 26], [170, 126]], C.ink, FILL.warm), seg([103, 26], [103, 126], C.gray, true, 1.5), seg([70, 126], [170, 26], C.red, false, 3), dot([70, 126], 4, C.red), dot([170, 26], 4, C.red), tx(62, 136, 'A', 13, C.red, true, 'end'), tx(178, 24, 'G', 13, C.red, true, 'start'), tx(87, 142, '2', 11, C.gray), tx(137, 142, '4', 11, C.gray), tx(62, 80, '6', 11, C.gray, true, 'end')]),
  P('広げ方2。「2と6」をつないで8、残りは4。', ['AG²＝(2＋6)²＋4²', '＝64＋16＝80'], ['横8cm、高さ4cm']),
  P('広げ方3。「4と6」をつないで10、残りは2。', ['AG²＝(4＋6)²＋2²', '＝100＋4＝104'], ['横10cm、高さ2cm']),
  P('理由。3通りの長さの2乗は 72、80、104。いちばん小さいのは72です。いちばん長い辺（6）を、たさずに残す広げ方が最短になります。', ['72＜80＜104', 'AG＝√72＝6√2'], ['最短は √72＝6√2']),
  ANS('6√2cm'),
  P('確かめ。√72≒8.5、√80≒8.9、√104≒10.2。', ['√72 が最小 ✓'], ['=立体の対角線√56≒7.5より長い ✓']),
], '3通りのうち最短は √(6²＋6²)＝√72＝6√2。');

// 28 直角三角形の回転体
const C28: [number, number] = [30, 118], B28: [number, number] = [90, 118], A28: [number, number] = [30, 38];
const H28: [number, number] = (() => {
  const vx = B28[0] - A28[0], vy = B28[1] - A28[1];
  const t = ((C28[0] - A28[0]) * vx + (C28[1] - A28[1]) * vy) / (vx * vx + vy * vy);
  return [A28[0] + vx * t, A28[1] + vy * t];
})();
const tri28 = (): E[] => [P2([A28, B28, C28], C.ink, FILL.warm), tx(22, 36, 'A', 13, C.ink, true, 'end'), tx(98, 126, 'B', 13, C.ink, true, 'start'), tx(22, 126, 'C', 13, C.ink, true, 'end'), tx(22, 80, '4', 11, C.gray, true, 'end'), tx(60, 134, '3', 11, C.gray), tx(68, 70, '5', 11, C.gray, true, 'start')];
const A2: [number, number] = [150, 78], B2: [number, number] = [290, 78], H2: [number, number] = [150 + 140 * 0.64, 78], T2: [number, number] = [150 + 140 * 0.64, 78 - 57.6], U2: [number, number] = [150 + 140 * 0.64, 78 + 57.6];
const s_s28: Figure = show([
  SF('∠C＝90°、AC＝4cm、BC＝3cm、AB＝5cmの直角三角形ABC。斜辺ABを軸に1回転させたときの立体の体積を求めます。', ['AC＝4　BC＝3　AB＝5　ABを軸に回転'], tri28()),
  S('手がかり。CからABへ垂線CHをひきます。回転させると、△ACH と △BCH が、それぞれ円錐になります。', ['2つの円錐が、底面を重ねた形'], [seg(C28, H28, C.red, false, 3), dot(H28, 3, C.red), tx(H28[0] + 8, H28[1] + 14, 'H', 12, C.red, true, 'start')]),
  P('CHの長さは、△ABCの面積を2通りで表して求めます。', ['4×3÷2＝5×CH÷2', 'CH＝12/5'], ['CH＝12/5cm（＝2.4cm）']),
  SF('回転させた立体を横から見た図です。底面は、半径CH＝12/5の円。AからBまで、高さの合計は5cmです。', ['底面の半径 12/5　高さの合計 AB＝5'], [seg(A2, B2, C.gray, true, 1.5), seg(A2, T2, C.blue, false, 2.5), seg(A2, U2, C.blue, false, 2.5), seg(B2, T2, C.green, false, 2.5), seg(B2, U2, C.green, false, 2.5), seg(T2, U2, C.red, false, 2.5), tx(144, 82, 'A', 13, C.ink, true, 'end'), tx(298, 82, 'B', 13, C.ink, true, 'start'), tx(H2[0] + 8, H2[1] + 4, 'H', 12, C.red, true, 'start'), tx(H2[0] - 6, T2[1] + 28, 'r＝12/5', 11, C.red, true, 'end')]),
  P('理由。2つの円錐は、底面が同じ円（半径12/5）なので、体積の合計は 底面積×(高さの合計)÷3 です。', ['底面積＝π×(12/5)²＝144π/25', '高さの合計＝AH＋HB＝5'], ['(底面積)×5÷3']),
  P('計算します。', ['144π/25×5÷3', '＝48π/5'], ['体積＝48π/5 cm³（＝9.6π）']),
  ANS('48π/5 cm³'),
  P('確かめ。AH＝AC²÷AB＝16/5、HB＝BC²÷AB＝9/5。2つの円錐の体積を別々に出します。', ['144π/25×16/5÷3＝768π/125', '144π/25×9/5÷3＝432π/125　合計48π/5 ✓'], ['=合計が一致 ✓']),
], 'CH＝12/5。底面積144π/25×高さ5÷3＝48π/5。');

// 29 立方体の頂点から面への垂線
const H29 = pc(2, 2, 2);
const s_s29: Figure = show([
  SF('1辺6cmの立方体ABCD−EFGH。頂点Aから△BDEにおろした垂線の長さを求めます。', ['1辺6cm　A から △BDE へ垂線'], cubeBase()),
  S('B、D、E を結んで △BDE をつくります。三角すい A−BDE ができます。', ['三角すい A−BDE'], [P2([cB, cD, cE], C.purple, FILL.purple), ...cubeEdges(), seg(cB, cD, C.purple, false, 2.5), seg(cD, cE, C.purple, false, 2.5), seg(cE, cB, C.purple, false, 2.5)]),
  S('手がかり。この三角すいの体積を、2通りに表します。1つ目は、△ABD を底面、AE を高さと見る方法。AE は底面ABDに垂直です。', ['底面△ABD　高さ AE＝6'], [P2([cA, cB, cD], C.blue, FILL.blue), ...cubeEdges(), seg(cA, cE, C.red, false, 3)]),
  P('△ABD は直角二等辺三角形。', ['△ABD＝6×6÷2＝18', '体積＝18×6÷3＝36'], ['体積 36cm³']),
  P('2つ目は、△BDE を底面と見る方法。BD＝DE＝EB＝6√2（どれも面の対角線）の正三角形です。', ['高さ＝6√2×√3/2＝3√6', '△BDE＝6√2×3√6÷2＝18√3'], ['正三角形の高さは 1辺×√3/2']),
  P('求める垂線の長さを h とすると、体積＝△BDE×h÷3。', ['18√3×h÷3＝36', '6√3h＝36　h＝6/√3＝2√3'], ['h＝2√3 cm']),
  ANS('2√3 cm'),
  SF('確かめ。垂線の足Hは、立方体の対角線AG（長さ6√3）を、Aから1：2に分ける点です。', ['AH＝6√3÷3＝2√3 ✓'], [...cubeBase(), seg(cA, cG, C.gray, true, 1.5), dot(H29, 3.5, C.red), tx(H29[0] - 6, H29[1] - 4, 'H', 12, C.red, true, 'end'), seg(cA, H29, C.red, false, 3)]),
], '体積36＝△BDE18√3×h÷3 より h＝2√3。');

// 30 円錐形の容器
const ap30: [number, number] = [160, 128], tl30: [number, number] = [112, 20], tr30: [number, number] = [208, 20];
const wl30: [number, number] = [160 - 48 * (8 / 12), 128 - 108 * (8 / 12)], wr30: [number, number] = [160 + 48 * (8 / 12), 128 - 108 * (8 / 12)];
const cup30 = (): E[] => [seg(tl30, ap30), seg(tr30, ap30), seg(tl30, tr30), tx(222, 74, '12cm', 12, C.gray, true, 'start'), seg([218, 20], [218, 128], C.gray, false, 1.5)];
const s_s30: Figure = show([
  SF('高さ12cmの円錐形の容器を、頂点を下にして置き、水を高さ8cmまで入れました。水の体積は、いっぱいのときの何分の何か。いっぱいで270cm³のとき、あと何cm³入るかも求めます。', ['容器の高さ12cm　水の高さ8cm'], cup30()),
  S('水の入った部分も、円錐です。容器と同じ形で、小さいもの（相似）になっています。', ['水の部分は小さい円錐（相似）'], [P2([ap30, wl30, wr30], C.blue, FILL.blue), seg(wl30, wr30, C.blue, false, 2.5), tx(100, 80, '8cm', 12, C.blue, true, 'end')]),
  P('手がかり。相似比は、高さの比です。', ['水：容器＝8：12', '＝2：3'], ['相似比 2：3']),
  P('理由。体積比は、相似比を3回かけた比になります。', ['2×2×2：3×3×3', '＝8：27'], ['水はいっぱいの 8/27']),
  P('いっぱいが270cm³なので、いま入っている水を求めます。', ['270×8/27＝80', '80cm³'], ['270を27等分すると10。その8つ分']),
  P('あと入る水は、いっぱいの量から、いまの量をひきます。', ['270−80＝190'], ['あと入るのは190cm³']),
  ANS('8/27、190cm³'),
  P('確かめ。いま入っている水80と、あと入る水190の比は 80：190＝8：19。', ['8＋19＝27 ✓'], ['=全体27の中で一致 ✓']),
], '体積比＝2³：3³＝8：27。80cm³入っていて、あと190cm³。');

// 39 放物線上の動点と面積
const g39 = (x: number, y: number): [number, number] => [160 + 30 * x, 125 - 11 * y];
const para39 = (): E[] => { const pts: [number, number][] = []; for (let k = 0; k <= 34; k++) { const x = -3.3 + k * 0.18; const y = x * x; if (y <= 10.2) pts.push(g39(x, y)); } return polyLine(pts, C.gray, 2); };
const a39 = g39(-3, 9), b39 = g39(2, 4), p39 = g39(-0.5, 0.25), l39 = g39(-0.5, 6.5);
const base39 = (): E[] => [ar(20, 125, 300, 125, C.gray), ar(160, 133, 160, 6, C.gray), tx(304, 129, 'x', 12, C.gray), tx(172, 17, 'y', 12, C.gray), tx(150, 140, 'O', 11, C.gray), ...para39(), seg(g39(-3.4, 9.4), g39(2.6, 3.4), C.ink, false, 2.5), dot(a39, 3.5, C.blue), dot(b39, 3.5, C.blue), tx(a39[0] - 8, a39[1] - 4, 'A', 13, C.blue, true, 'end'), tx(b39[0] + 8, b39[1] - 6, 'B', 13, C.blue, true, 'start')];
const s_s39: Figure = show([
  SF('放物線 y＝x² と直線 y＝−x＋6 が2点A、Bで交わります。AとBの間の放物線上に点Pをとり、△PABの面積が最大になるときを求めます。', ['y＝x² と y＝−x＋6　交点 A、B'], base39()),
  P('手がかり。まず、交点を求めます。x²＝−x＋6 より x²＋x−6＝0。', ['(x＋3)(x−2)＝0', 'A(−3, 9)　B(2, 4)'], ['AとBのx座標の差は 2−(−3)＝5']),
  SF('P(t, t²) をとり、Pと同じx座標の直線上の点を考えます。2点のたての距離が、△PABの高さのかわりになります。', ['P(t, t²)　たての距離を考える'], [...base39(), dot(p39, 3.5, C.red), tx(p39[0] + 8, p39[1] + 14, 'P', 13, C.red, true, 'start'), seg(p39, l39, C.purple, false, 3), P2([a39, b39, p39], C.red, FILL.red)]),
  P('理由。ABの底辺の目安（x座標の差5）は一定なので、面積はたての距離に比例します。たての距離が最大のとき、面積も最大です。', ['たての距離＝(−t＋6)−t²', '＝−t²−t＋6'], ['面積＝5×(たての距離)÷2']),
  P('平方完成します。(t＋1/2)² は 0 以上なので、t＝−1/2 のとき、たての距離が最大です。', ['−t²−t＋6＝−(t＋1/2)²＋25/4', 't＝−1/2 で最大 25/4'], ['−3＜t＜2 に入っている ✓']),
  P('t＝−1/2 のとき、Pのy座標は t²＝1/4。面積は、x座標の差5×たての距離25/4÷2。', ['P(−1/2, 1/4)', '5×25/4÷2＝125/8'], ['面積 125/8（＝15.625）']),
  ANS('P(−1/2, 1/4)、面積 125/8'),
  P('確かめ。t＝0 のとき、たての距離は6、面積は5×6÷2＝15。t＝1 のとき、たての距離は4、面積は10。', ['125/8＝15.625＞15 ✓'], ['=t＝−1/2 のほうが大きい ✓']),
], 'たての距離＝−(t＋1/2)²＋25/4。最大 25/4、面積 125/8。');

// 40 弓形の面積
const O40: [number, number] = [120, 72];
const a40 = at(O40[0], O40[1], 56, 210), b40 = at(O40[0], O40[1], 56, 330), h40: [number, number] = [O40[0], a40[1]];
const arc40 = (): [number, number][] => arcPts(O40[0], O40[1], 56, 210, 330, 30);
const base40 = (): E[] => [P2(circPts(O40[0], O40[1], 56), C.ink), dot(O40, 3, C.ink), dot(a40, 3.5, C.blue), dot(b40, 3.5, C.blue), tx(O40[0] + 8, O40[1] - 4, 'O', 13, C.ink, true, 'start'), tx(a40[0] - 8, a40[1] + 6, 'A', 13, C.blue, true, 'end'), tx(b40[0] + 8, b40[1] + 6, 'B', 13, C.blue, true, 'start'), seg(O40, a40, C.ink, false, 2), seg(O40, b40, C.ink, false, 2), tx(O40[0], O40[1] + 22, '120°', 11, C.red), tx(O40[0] - 38, O40[1] + 6, '6cm', 11, C.gray, true, 'end')];
const s_s40: Figure = show([
  SF('半径6cmの円O。∠AOB＝120°となる2点A、B。弦ABと劣弧ABでかこまれた部分（弓形）の面積を求めます。', ['半径6cm　∠AOB＝120°　弓形の面積は？'], base40()),
  S('手がかり。おうぎ形OABから、△OABをのぞくと、弓形が残ります。', ['弓形＝おうぎ形OAB−△OAB'], [P2([O40, ...arc40()], C.blue, FILL.blue), seg(O40, a40, C.ink, false, 2), seg(O40, b40, C.ink, false, 2)]),
  P('おうぎ形OABは、円の 120/360＝1/3 です。', ['π×6²×1/3', '＝12π'], ['おうぎ形 12π cm²']),
  SF('OからABに垂線OHをひきます。△OAB は二等辺三角形なので、OH は ∠AOB を2等分し、ABを2等分します。', ['∠AOH＝60°　OH⊥AB'], [...base40(), seg(O40, h40, C.green, false, 3), seg(a40, b40, C.purple, false, 2.5), dot(h40, 3, C.green), tx(h40[0] + 8, h40[1] + 14, 'H', 12, C.green, true, 'start')]),
  P('理由。△OAH は 30°、60°、90°の直角三角形で、辺の比は 1：2：√3。斜辺OA＝6なので、OH＝3、AH＝3√3。', ['OH＝6÷2＝3', 'AH＝3×√3＝3√3'], ['AB＝2×3√3＝6√3']),
  P('△OAB は、底辺AB、高さOHの三角形です。', ['6√3×3÷2＝9√3'], ['△OAB＝9√3 cm²']),
  SF('弓形は、おうぎ形から三角形をひいた、この部分です。', ['弓形＝12π−9√3'], [P2(arc40(), C.purple, FILL.purple), P2(circPts(O40[0], O40[1], 56), C.gray), seg(a40, b40, C.purple, false, 2.5), dot(a40, 3.5, C.blue), dot(b40, 3.5, C.blue), dot(O40, 3, C.ink)]),
  ANS('(12π−9√3) cm²'),
  P('確かめ。12π≒37.7、9√3≒15.6。引くと約22.1cm²。', ['円全体36π≒113.1の約1/5'], ['=おうぎ形（円の1/3）より小さい ✓']),
], 'おうぎ形12π−△OAB 9√3＝(12π−9√3)cm²。');

export const figuresHonshikenSchool_koko_tsukuba_A: Record<string, Figure> = {
  honshiken_school_koko_tsukuba_sansu_11: s_s11,
  honshiken_school_koko_tsukuba_sansu_13: s_s13,
  honshiken_school_koko_tsukuba_sansu_14: s_s14,
  honshiken_school_koko_tsukuba_sansu_15: s_s15,
  honshiken_school_koko_tsukuba_sansu_17: s_s17,
  honshiken_school_koko_tsukuba_sansu_18: s_s18t,
  honshiken_school_koko_tsukuba_sansu_19: s_s19,
  honshiken_school_koko_tsukuba_sansu_20: s_s20,
  honshiken_school_koko_tsukuba_sansu_21: s_s21,
  honshiken_school_koko_tsukuba_sansu_23: s_s23t,
  honshiken_school_koko_tsukuba_sansu_24: s_s24,
  honshiken_school_koko_tsukuba_sansu_26: s_s26,
  honshiken_school_koko_tsukuba_sansu_27: s_s27,
  honshiken_school_koko_tsukuba_sansu_28: s_s28,
  honshiken_school_koko_tsukuba_sansu_29: s_s29,
  honshiken_school_koko_tsukuba_sansu_30: s_s30,
  honshiken_school_koko_tsukuba_sansu_39: s_s39,
  honshiken_school_koko_tsukuba_sansu_40: s_s40,
};
