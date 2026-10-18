// 高校受験 数学（formulas-koko-sugaku.ts）で figure を持たない項目の 37番目〜48番目の動く図解スライド。
// キーは項目の label（買い切りの識別キーと同じ）。「なぜそうなるの？」を根っこまでたどる形で、10枚以上で書く。
// 画面の上半分に図、下の帯（band）に、そのスライドの式やひとこと、という配置。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, cover, bx, lb, ar, ln, ci, pg, sc, show, band, fresh } from './diagram-kit';

type E = DiagramElement;
const eb = (y: number, t: string, color: string, fill: string, size = 14, h = 30, x = 20, w = 280): E => bx(x, y, w, h, t, color, fill, size);
const tx = (y: number, t: string, size = 12, color: string = C.gray, bold = false): E => lb(160, y, t, size, color, 'middle', bold);
const T = (top: E[], bottom: E[]): E[] => [...top, ...band(140, ...bottom)];
const F = (top: E[], bottom: E[]): E[] => fresh(...top, ...bottom);
const B_T = 'rgba(2,132,199,0.30)';
const R_T = 'rgba(225,29,72,0.32)';
const G_T = 'rgba(22,163,74,0.32)';
const P_T = 'rgba(147,51,234,0.32)';
const Y_T = 'rgba(234,179,8,0.38)';

// ── グラフ用の道具 ──
type Gx = { ox: number; oy: number; sx: number; sy: number };
const gx = (g: Gx, x: number) => g.ox + x * g.sx;
const gy = (g: Gx, y: number) => g.oy - y * g.sy;
const axes = (g: Gx, x0: number, x1: number, y0: number, y1: number): E[] => [
  ar(gx(g, x0), gy(g, 0), gx(g, x1), gy(g, 0), C.gray),
  ar(gx(g, 0), gy(g, y0), gx(g, 0), gy(g, y1), C.gray),
  lb(gx(g, x1) + 7, gy(g, 0) + 3, 'x', 11, C.gray),
  lb(gx(g, 0) + 9, gy(g, y1) + 2, 'y', 11, C.gray),
  lb(gx(g, 0) - 7, gy(g, 0) + 8, 'O', 10, C.gray),
];
const curve = (g: Gx, f: (x: number) => number, a: number, b: number, color: string, w = 2.4, n = 18): E[] => {
  const o: E[] = [];
  for (let i = 0; i < n; i++) {
    const x1 = a + ((b - a) * i) / n;
    const x2 = a + ((b - a) * (i + 1)) / n;
    o.push(ln(gx(g, x1), gy(g, f(x1)), gx(g, x2), gy(g, f(x2)), color, false, w));
  }
  return o;
};
const gpt = (g: Gx, x: number, y: number, color: string = C.red, r = 3.6): E => ci(gx(g, x), gy(g, y), r, undefined, color, color);
const gl = (g: Gx, x: number, y: number, t: string, dx = 0, dy = 0, size = 10, color: string = C.ink, anchor: 'start' | 'middle' | 'end' = 'middle'): E =>
  lb(gx(g, x) + dx, gy(g, y) + dy, t, size, color, anchor, true);
const xt = (g: Gx, x: number, t?: string): E => lb(gx(g, x), gy(g, 0) + 10, t ?? String(x), 9, C.gray);
const dash = (g: Gx, x1: number, y1: number, x2: number, y2: number, color: string = C.gray): E => ln(gx(g, x1), gy(g, y1), gx(g, x2), gy(g, y2), color, true, 1.3);

// ── 角・円の道具（数学の向き：y が上、角度は反時計まわり） ──
const rad = (d: number) => (d * Math.PI) / 180;
const arc = (cx: number, cy: number, r: number, a0: number, a1: number, color: string = C.blue, w = 1.8, n = 12): E[] => {
  const o: E[] = [];
  for (let i = 0; i < n; i++) {
    const s = a0 + ((a1 - a0) * i) / n;
    const e = a0 + ((a1 - a0) * (i + 1)) / n;
    o.push(ln(cx + r * Math.cos(rad(s)), cy - r * Math.sin(rad(s)), cx + r * Math.cos(rad(e)), cy - r * Math.sin(rad(e)), color, false, w));
  }
  return o;
};
const circ = (cx: number, cy: number, r: number, color: string = C.blue): E[] => arc(cx, cy, r, 0, 360, color, 1.8, 40);
const dirTo = (cx: number, cy: number, x: number, y: number) => (Math.atan2(cy - y, x - cx) * 180) / Math.PI;
const arcTo = (cx: number, cy: number, r: number, x: number, y: number, span: number, color: string = C.blue): E[] => {
  const a = dirTo(cx, cy, x, y);
  return arc(cx, cy, r, a - span, a + span, color);
};
const pt = (x: number, y: number, name?: string, color: string = C.ink, dx = 0, dy = -9): E[] => {
  const o: E[] = [ci(x, y, 3, undefined, color, color)];
  if (name) o.push(lb(x + dx, y + dy, name, 12, color, 'middle', true));
  return o;
};
// 手順などの箱を 2×2 で並べる（文字が小さくならないように）
const grid = (labels: string[], y: number, opts?: { color?: string; fill?: string; size?: number; h?: number }): E[] =>
  labels.map((t, i) => bx(20 + (i % 2) * 150, y + Math.floor(i / 2) * ((opts?.h ?? 46) + 10), 130, opts?.h ?? 46, t, opts?.color, opts?.fill, opts?.size ?? 12));
const P2 = (x: number, y: number): [number, number] => [x, y];

// ── 37. 一次関数の利用 ──
const sqA = P2(30, 110), sqB = P2(120, 110), sqC = P2(120, 20), sqD = P2(30, 20);
const square = (): E[] => [
  pg([sqA, sqB, sqC, sqD], C.gray, FILL.gray),
  lb(20, 118, 'A', 12, C.ink, 'middle', true), lb(130, 118, 'B', 12, C.ink, 'middle', true),
  lb(130, 14, 'C', 12, C.ink, 'middle', true), lb(20, 14, 'D', 12, C.ink, 'middle', true),
];
const gF: Gx = { ox: 46, oy: 122, sx: 26, sy: 5 };
const dougaGraph = (): E[] => [
  ...axes(gF, -0.3, 6.6, -0.5, 21),
  xt(gF, 3), xt(gF, 6),
  lb(gx(gF, 0) - 10, gy(gF, 18) + 1, '18', 9, C.gray),
  dash(gF, 0, 18, 3, 18),
];
const ichijiRiyo: DiagramFigure = show([
  {
    note: '動く点の問題です。1辺6cmの正方形ABCDで、点Pは毎秒2cmでA→B→Cと動きます。x秒後の三角形APDの面積 y を、グラフに表してみましょう。',
    add: [...square(), ci(30, 110, 5, 'P', C.red, FILL.red, 8), bx(150, 24, 158, 46, '1辺6cmの正方形\n点Pは毎秒2cmで動く', C.blue, FILL.blue, 12), ...band(140, tx(170, 'x秒後の 三角形APD の面積 ＝ y', 14, C.blue, true))],
  },
  {
    note: '❓ なぜグラフは1本の直線にならないの？ 点Pは辺ABを進んだあと、角Bで曲がって辺BCへ進みます。動く辺が変わると、面積の増え方も変わるからです。まず道すじを辺ごとに分けます。',
    add: [cover(145, 18, 175, 110), ar(34, 110, 116, 110, C.blue), ar(120, 106, 120, 24, C.red), bx(150, 24, 158, 30, 'AB：6÷2＝3秒', C.blue, FILL.blue, 12), bx(150, 62, 158, 30, 'BC：さらに3秒（計6秒）', C.red, FILL.red, 12), ...band(140, tx(168, '0〜3秒は辺AB上、3〜6秒は辺BC上', 13, C.ink, true), tx(196, '❓ なぜ3秒？ 6cm ÷ 毎秒2cm ＝ 3秒', 12, C.gray))],
  },
  {
    note: '辺AB上（0≦x≦3）を調べます。x秒後、AP＝2×x。❓ なぜAD＝6が三角形の高さになるの？ 正方形の角Aは直角なので、ADはAPに垂直だからです。底辺AP、高さAD。',
    add: fresh(...square(), pg([sqA, P2(75, 110), sqD], C.blue, B_T), ci(75, 110, 5, 'P', C.red, FILL.red, 8), lb(52, 126, 'AP＝2x', 11, C.blue, 'middle', true), lb(36, 62, '高さ6', 11, C.red, 'start', true), ...band(140, eb(154, 'y ＝ 2x × 6 ÷ 2 ＝ 6x', C.blue, FILL.blue, 16), tx(202, '（0 ≦ x ≦ 3）', 13, C.gray))),
  },
  {
    note: 'x＝3 のとき、PはちょうどBに着きます。式に入れると y＝6×3＝18。三角形ABDの面積を直接計算しても 6×6÷2＝18 で、ぴったり合います。',
    add: fresh(...square(), pg([sqA, sqB, sqD], C.blue, B_T), ci(120, 110, 5, 'P', C.red, FILL.red, 8), ...band(140, eb(152, 'x＝3 のとき y ＝ 6×3 ＝ 18', C.blue, FILL.blue, 15), tx(200, '確かめ：三角形ABD ＝ 6×6÷2 ＝ 18', 13, C.green, true))),
  },
  {
    note: '辺BC上（3≦x≦6）に入ります。❓ 式は同じまま使える？ いいえ。底辺をADにとると、高さはPからADまでの距離です。BCとADは平行なので、Pがどこにいても、この高さはいつも6のままです。',
    add: fresh(...square(), pg([sqA, P2(120, 65), sqD], C.green, G_T), ci(120, 65, 5, 'P', C.red, FILL.red, 8), ln(30, 65, 120, 65, C.red, true, 1.6), lb(75, 58, '高さ6', 11, C.red, 'middle', true), ...band(140, eb(152, '底辺AD＝6、高さ＝6（いつも同じ）', C.green, FILL.green, 14), tx(200, 'y ＝ 6 × 6 ÷ 2 ＝ 18（3 ≦ x ≦ 6）', 13, C.ink, true))),
  },
  {
    note: '2つの区間の式をグラフにします。0≦x≦3 は y＝6x で右上がりの線、3≦x≦6 は y＝18 で横にまっすぐな線です。',
    add: F([...dougaGraph(), ...curve(gF, (x) => 6 * x, 0, 3, C.blue, 2.6, 4), ...curve(gF, () => 18, 3, 6, C.green, 2.6, 4), gpt(gF, 3, 18, C.red)], [eb(150, '0≦x≦3：y ＝ 6x', C.blue, FILL.blue, 14, 28, 20, 130), eb(150, '3≦x≦6：y ＝ 18', C.green, FILL.green, 14, 28, 170, 130), tx(206, '折れ線グラフになる', 13, C.ink, true)]),
  },
  {
    note: '❓ なぜ折れ目は x＝3 なの？ ちょうど3秒でPがBを通りすぎ、動く辺がABからBCに変わるからです。傾きが 6 から 0 に変わるのは、面積が増えなくなった、という意味です。',
    add: [ci(gx(gF, 3), gy(gF, 18), 9, undefined, C.red, 'rgba(0,0,0,0)'), ...band(140, tx(158, '折れ目 ＝ 状況が変わった時点', 14, C.red, true), tx(184, '傾き 6（増える）→ 傾き 0（変わらない）', 13, C.ink), tx(210, 'だから場合分けは折れ目で区切る', 12, C.gray))],
  },
  {
    note: '❓ 場合分けした式が正しいか、どう確かめるの？ 境目の x＝3 は、どちらの区間にも入っています。同じ図形の同じ面積なので、2つの式の値が一致するはずです。',
    add: fresh(eb(24, '境目 x＝3 で確かめる', C.gray, FILL.gray, 15, 32), eb(70, 'y ＝ 6x → 6×3 ＝ 18', C.blue, FILL.blue, 15, 32), eb(114, 'y ＝ 18 → 18', C.green, FILL.green, 15, 32), eb(166, '一致した → 式はどちらも正しそう', C.red, FILL.red, 14, 34)),
  },
  {
    note: '料金の問題も同じ考え方です。基本料金1000円、1分ごとに20円かかるなら、x分使ったときの料金は y＝20x＋1000。❓ なぜ切片が1000円なの？ x＝0 分（使っていない）でも、1000円はかかるからです。',
    add: F([...axes({ ox: 60, oy: 120, sx: 20, sy: 0.08 }, -0.3, 10.6, -100, 1300), ...curve({ ox: 60, oy: 120, sx: 20, sy: 0.08 }, (x) => 20 * x + 1000, 0, 10, C.blue, 2.6, 4), gpt({ ox: 60, oy: 120, sx: 20, sy: 0.08 }, 0, 1000, C.red), lb(72, 56, '1000円', 11, C.red, 'start', true), bx(190, 60, 120, 30, '傾き＝20\n（1分で＋20円）', C.blue, FILL.blue, 11)], [eb(152, 'y ＝ 20x ＋ 1000', C.blue, FILL.blue, 16), tx(200, '切片1000 ＝ はじめから決まっている分', 12, C.red, true), tx(222, '傾き20 ＝ 1あたり増える分', 12, C.blue, true)]),
  },
  {
    note: '水そうの問題では、水面の高さのグラフが、段差のところで折れ曲がります。❓ なぜ？ 水そうが広くなると、同じ量の水を入れても水面があまり上がらなくなる（グラフがゆるやかになる）からです。',
    add: F([...axes({ ox: 40, oy: 120, sx: 1, sy: 1 }, -5, 250, -5, 100), ln(40, 120, 120, 60, C.blue, false, 2.6), ln(120, 60, 250, 36, C.green, false, 2.6), gpt({ ox: 40, oy: 120, sx: 1, sy: 1 }, 80, 60, C.red), lb(120, 78, '段差', 11, C.red, 'middle', true), lb(80, 44, '急に上がる', 11, C.blue, 'middle', true), lb(190, 26, 'ゆるやかに上がる', 11, C.green, 'middle', true), lb(150, 134, '時間', 10, C.gray)], [tx(158, '水面の高さのグラフの折れ目 ＝ 段差の高さ', 13, C.ink, true), tx(190, '❓ 折れ目のあとゆるやかなのは、底面積が広がったから', 12, C.gray)]),
  },
  {
    note: '解き方をまとめます。①点の道すじを辺ごとに分ける ②区間ごとにxの範囲を決める ③各区間で y を x の式で表す ④境目で値が一致するか確かめる。グラフは折れ線になります。',
    add: F([...grid(['①道すじを\n辺で分ける', '②区間ごとの\nxの範囲', '③yをxの\n式で表す', '④境目で\n検算'], 40, { h: 40, color: C.blue, fill: FILL.blue, size: 11 }).flat()], [tx(150, '折れ目 ＝ 状況が変わった時点', 15, C.red, true), tx(184, '折れ目で場合分けして、境目の値で検算', 13, C.ink), tx(210, '（グラフは折れ線）', 12, C.gray)]),
  },
]);

// ── 38〜40. y ＝ ax² ──
const g2: Gx = { ox: 160, oy: 122, sx: 24, sy: 10 };
const gNeg: Gx = { ox: 160, oy: 56, sx: 24, sy: 6.5 };
const par = (g: Gx, a: number, x0: number, x1: number, color: string = C.blue, w = 2.4): E[] => curve(g, (x) => a * x * x, x0, x1, color, w, 20);
const cell = (x: number, y: number, t: string, color: string = C.blue, fill: string = FILL.blue): E => bx(x, y, 36, 22, t, color, fill, 12);
const axNature: DiagramFigure = show([
  {
    note: 'y＝x² のグラフがどんな形になるか、表を作って点を打ってみます。x に −3 から 3 まで入れると、y は 9, 4, 1, 0, 1, 4, 9。❓ なぜ y がぜんぶ0以上なの？ 同じ数を2回かけるので、答えは必ず0か正の数になるからです。',
    add: [...axes(g2, -3.6, 3.6, -1, 10), ...[-3, -2, -1, 0, 1, 2, 3].map((x) => gpt(g2, x, x * x, C.red)), ...band(140, ...[-3, -2, -1, 0, 1, 2, 3].map((x, i) => cell(24 + i * 39, 150, String(x), C.gray, FILL.gray)), ...[9, 4, 1, 0, 1, 4, 9].map((y, i) => cell(24 + i * 39, 178, String(y))), lb(14, 161, 'x', 10, C.gray), lb(14, 189, 'y', 10, C.gray))],
  },
  {
    note: '点をなめらかにつなぐと、おわん型の曲線になります。これが放物線です。いちばん低いところ（頂点）は原点(0, 0) にあります。',
    add: [...par(g2, 1, -3.2, 3.2), ci(gx(g2, 0), gy(g2, 0), 6, undefined, C.red, 'rgba(0,0,0,0)'), ...band(140, tx(162, 'グラフは放物線（おわん型）', 14, C.blue, true), tx(190, '頂点は原点(0, 0)', 13, C.red, true))],
  },
  {
    note: '❓ なぜ y軸について左右対称なの？ x＝2 も x＝−2 も、2乗すると4になるからです。(−2)²＝(−2)×(−2)＝4、2²＝4。xと−xで y の値が同じなので、グラフは y軸で折ると重なります。',
    add: [dash(g2, -2, 4, 2, 4, C.purple), gpt(g2, -2, 4, C.purple), gpt(g2, 2, 4, C.purple), gl(g2, -2, 4, '(−2, 4)', -30, -3, 10, C.purple), gl(g2, 2, 4, '(2, 4)', 26, -3, 10, C.purple), ...band(140, eb(152, '(−2)² ＝ 4　2² ＝ 4', C.purple, FILL.purple, 15), tx(202, 'x と −x で y は同じ → y軸対称', 13, C.ink, true))],
  },
  {
    note: '❓ なぜ a＞0 のときは上に開くの？ x² は0以上。それに正の数 a をかけても、y は0以上のまま。だから頂点が一番下で、グラフは上に広がります。',
    add: F([...axes(g2, -3.6, 3.6, -1, 10), ...par(g2, 1, -3.2, 3.2), ar(gx(g2, 0), gy(g2, 6), gx(g2, 0), gy(g2, 9.3), C.red), lb(gx(g2, 0) + 8, gy(g2, 7.5), '上に開く', 12, C.red, 'start', true)], [eb(152, 'a ＞ 0 ：上に開く（y ≧ 0）', C.blue, FILL.blue, 15), tx(200, '❓ 2乗は0以上、正の数をかけても0以上', 12, C.gray)]),
  },
  {
    note: '❓ では a＜0 のときは？ 0以上の x² に、負の数をかけるので、y は0以下になります。たとえば y＝−x² で x＝2 なら y＝−4。グラフは下に開き、頂点が一番上になります。',
    add: F([...axes(gNeg, -3.6, 3.6, -10, 4), ...par(gNeg, -1, -3.2, 3.2, C.red), gpt(gNeg, 2, -4, C.red), gl(gNeg, 2, -4, '(2, −4)', 30, 2, 10, C.red), lb(gx(gNeg, 0), gy(gNeg, -6), '下に開く', 12, C.red, 'middle', true)], [eb(152, 'a ＜ 0 ：下に開く（y ≦ 0）', C.red, FILL.red, 15), tx(200, '❓ 0以上に負の数をかけると0以下', 12, C.gray)]),
  },
  {
    note: '次は、a の大きさで開き方がどう変わるかです。y＝x² と y＝4x² を重ねてかきます。x＝1 で比べると、y は 1 と 4。同じ x なのに、4x² のほうが高い所にいます。',
    add: F([...axes(g2, -3.6, 3.6, -1, 10), ...par(g2, 1, -3.2, 3.2, C.blue), ...par(g2, 4, -1.5, 1.5, C.red), dash(g2, 1, 0, 1, 4, C.gray), gpt(g2, 1, 1, C.blue), gpt(g2, 1, 4, C.red), lb(gx(g2, 1.5) + 8, gy(g2, 9) - 4, 'y＝4x²', 11, C.red, 'start', true), lb(gx(g2, 3) + 10, gy(g2, 9) + 2, 'y＝x²', 11, C.blue, 'start', true)], [eb(152, 'x ＝ 1 で　x²：1　4x²：4', C.gray, FILL.gray, 14), tx(202, '同じ x なら、a が大きいほうが高い', 13, C.ink, true)]),
  },
  {
    note: '❓ なぜ「開き方がせまい」といえるの？ y＝4 の高さまで行くのに、4x² は x＝1、x² は x＝2 まで横に行く必要があります。a が大きいほど、少し横に進むだけで急に高くなるので、グラフが細くなるのです。',
    add: [dash(g2, -3.2, 4, 3.2, 4, C.purple), gpt(g2, 2, 4, C.blue), gpt(g2, -2, 4, C.blue), ...band(140, eb(150, '4x² は x＝±1 で　y＝4 に届く', C.red, FILL.red, 13, 26), eb(182, 'x² は x＝±2 まで行って　y＝4', C.blue, FILL.blue, 13, 26), tx(224, '|a|が大きいほど細い（せまい）', 12, C.ink, true))],
  },
  {
    note: '使ってみましょう。y＝2x² で x＝−3 のとき。❓ なぜ (−3)² は 9 で −9 ではないの？ (−3)×(−3) は、マイナスどうしのかけ算でプラスになるからです。y＝2×9＝18。x＝3 でも同じ 18 です。',
    add: F([bx(40, 20, 240, 30, 'y ＝ 2x² に x＝−3 を代入', C.gray, FILL.gray, 14), bx(40, 62, 240, 30, 'y ＝ 2 × (−3)²', C.blue, FILL.blue, 15), bx(40, 104, 240, 30, 'y ＝ 2 × 9 ＝ 18', C.blue, FILL.blue, 15)], [eb(154, '(−3)² ＝ (−3)×(−3) ＝ 9（−9 ではない）', C.red, FILL.red, 13), tx(204, 'x＝3 でも y＝18（y軸対称）', 13, C.green, true)]),
  },
  {
    note: '逆に、グラフが点(2, 12)を通るとき a はいくつ？ ❓ 「通る」とは、x＝2、y＝12 を式に入れると成り立つということです。12＝a×2²＝4a より a＝3。',
    add: F([...grid(['点(2, 12)を\n通る', 'x＝2, y＝12\nを代入', '12 ＝ a×2²\n＝ 4a', 'a ＝ 3'], 30, { h: 40, color: C.blue, fill: FILL.blue, size: 11 }).flat()], [eb(146, '12 ÷ 4 ＝ 3', C.green, FILL.green, 16), tx(202, '確かめ：3 × 2² ＝ 3 × 4 ＝ 12', 13, C.blue, true)]),
  },
  {
    note: '❓ なぜ通る点が1つで a が決まるの？ 式 y＝ax² で分からない文字は a だけで、しかも原点はいつも通るからです。原点以外の点を1つ教えてもらえれば、代入して a を求められます。',
    add: F([...axes(g2, -3.6, 3.6, -1, 10), ...par(g2, 3, -1.8, 1.8, C.red), gpt(g2, 2 / 2, 3, C.red), gpt(g2, 0, 0, C.blue), lb(gx(g2, 1) + 34, gy(g2, 3) + 2, 'y＝3x²', 11, C.red, 'start', true)], [eb(148, 'わからない文字は a だけ', C.gray, FILL.gray, 14, 28), tx(196, '原点はかならず通る → 1点あれば a が決まる', 12, C.ink, true), tx(220, '（点(2, 12)なら a＝3）', 12, C.gray)]),
  },
  {
    note: 'まとめます。a の符号（＋か−か）で開く向き、a の大きさ（|a|）で開き方が決まります。y軸について対称で、xと−xで y は同じです。',
    add: F([bx(20, 18, 130, 56, 'a ＞ 0\n上に開く　y≧0', C.blue, FILL.blue, 13), bx(170, 18, 130, 56, 'a ＜ 0\n下に開く　y≦0', C.red, FILL.red, 13), bx(20, 88, 280, 34, '|a| が大きい ＝ せまい（細い）', C.green, FILL.green, 14)], [eb(146, 'y軸について対称（x と −x で y は同じ）', C.purple, FILL.purple, 14), tx(204, '符号 → 向き、大きさ → 開き方', 13, C.ink, true)]),
  },
]);

// ── 変化の割合 ──
const gH: Gx = { ox: 40, oy: 122, sx: 28, sy: 4.6 };
const ax2 = (x: number) => 2 * x * x;
const baseH = (): E[] => [...axes(gH, -0.3, 3.7, -1, 22), xt(gH, 1), xt(gH, 2), xt(gH, 3), ...curve(gH, ax2, 0, 3.2, C.blue, 2.4, 16)];
const henkaWariai: DiagramFigure = show([
  {
    note: '変化の割合とは「x が1ふえるとき、y がどれだけふえるか」の平均です。y＝2x² で、x が1から3まで変わるときを見てみましょう。x＝1 で y＝2、x＝3 で y＝18 です。',
    add: [...baseH(), gpt(gH, 1, 2), gpt(gH, 3, 18), gl(gH, 1, 2, '(1, 2)', -8, -12, 10, C.red), gl(gH, 3, 18, '(3, 18)', -34, 0, 10, C.red), bx(160, 24, 150, 44, 'y ＝ 2x²\nxが1から3まで', C.blue, FILL.blue, 12), ...band(140, tx(170, '変化の割合 ＝ (yの増加量) ÷ (xの増加量)', 14, C.blue, true))],
  },
  {
    note: 'x は 1→3 で 2ふえ、y は 2→18 で 16ふえています。変化の割合は 16÷2＝8。「x が1ふえるごとに、平均して y が8ふえる」という意味です。',
    add: [dash(gH, 1, 2, 3, 2, C.red), dash(gH, 3, 2, 3, 18, C.red), lb(gx(gH, 2), gy(gH, 2) - 8, 'x：＋2', 10, C.red, 'middle', true), lb(gx(gH, 3) + 6, gy(gH, 10), 'y：＋16', 10, C.red, 'start', true), ...band(140, eb(152, '16 ÷ 2 ＝ 8', C.red, FILL.red, 18), tx(204, '1ふえるごとに、平均で8ふえる', 13, C.gray))],
  },
  {
    note: '❓ 一次関数と何がちがうの？ 場所を変えて調べます。x が0→1 なら y は 0→2 で 2÷1＝2。1→3 なら 8。2→3 なら y は 8→18 で 10÷1＝10。同じ y＝2x² なのに、場所ごとに値が変わります。',
    add: [ln(gx(gH, 0), gy(gH, 0), gx(gH, 1), gy(gH, 2), C.green, false, 3), ln(gx(gH, 1), gy(gH, 2), gx(gH, 3), gy(gH, 18), C.red, false, 3), ln(gx(gH, 2), gy(gH, 8), gx(gH, 3), gy(gH, 18), C.purple, false, 3), ...band(140, eb(150, '0→1：2', C.green, FILL.green, 13, 26, 14, 90), eb(150, '1→3：8', C.red, FILL.red, 13, 26, 115, 90), eb(150, '2→3：10', C.purple, FILL.purple, 13, 26, 216, 90), tx(208, '右へ行くほど大きい：一定ではない', 13, C.ink, true))],
  },
  {
    note: '毎回図をかいて調べるのは大変です。そこで公式 a(p＋q) を使います。まず、なぜその公式になるのかを、定義に戻って確かめましょう。x が p から q まで変わるとき、変化の割合は (aq²−ap²)÷(q−p) です。',
    add: F([bx(20, 18, 280, 30, '変化の割合 ＝ (yの増加量) ÷ (xの増加量)', C.gray, FILL.gray, 14), bx(20, 60, 280, 34, '(a×q² − a×p²) ÷ (q − p)', C.blue, FILL.blue, 16), bx(20, 106, 280, 30, '例：(2×3² − 2×1²) ÷ (3 − 1)', C.purple, FILL.purple, 14)], [eb(150, '＝ (18 − 2) ÷ 2 ＝ 8', C.red, FILL.red, 16), tx(202, 'ここから、公式へのつながりを見ていく', 12, C.gray)]),
  },
  {
    note: '❓ なぜ q²−p² が (q＋p)(q−p) になるの？ 面積で見ます。大きい正方形（1辺3、面積9）から小さい正方形（1辺1、面積1）をのぞくと L字。L字を切って並べかえると、たて2、よこ4の長方形になり、面積は 9−1＝8＝4×2 です。',
    add: F([bx(30, 20, 90, 90, '3²＝9', C.green, FILL.green, 13), bx(30, 20, 30, 30, undefined, C.gray, FILL.gray), lb(45, 35, '1', 11, C.gray), ar(126, 66, 176, 66, C.gray), bx(186, 40, 120, 60, '4 × 2\n＝ 8', C.green, FILL.green, 14), lb(246, 112, '横 (3＋1)', 10, C.gray), lb(246, 125, '縦 (3−1)', 10, C.gray)], [eb(146, 'q² − p² ＝ (q＋p)(q−p)', C.green, FILL.green, 16), tx(202, '9 − 1 ＝ 8 ＝ (3＋1) × (3−1)', 13, C.ink, true)]),
  },
  {
    note: 'この形を使うと、分子が a(q＋p)(q−p)。分母の (q−p) と同じものがあるので約分できて、残るのは a(p＋q)。だから x が p から q まで変わるときの変化の割合は a(p＋q) です。',
    add: F([bx(20, 14, 280, 30, '(a q² − a p²) ÷ (q − p)', C.gray, FILL.gray, 14), ar(160, 46, 160, 62, C.gray), bx(20, 64, 280, 30, 'a (q＋p)(q−p) ÷ (q−p)', C.blue, FILL.blue, 15), ar(160, 96, 160, 112, C.gray), bx(20, 114, 280, 30, '＝ a (p ＋ q)', C.red, FILL.red, 18)], [tx(174, '(q−p) を約分して消える', 13, C.ink, true), tx(202, '確かめ：a(p＋q) ＝ 2×(1＋3) ＝ 8（さっきと同じ）', 12, C.blue)]),
  },
  {
    note: '公式を使ってみましょう。y＝3x² で x が2から5まで増えるとき、3×(2＋5)＝21。検算は定義どおり。y は 12 から 75 に増え、(75−12)÷(5−2)＝63÷3＝21。ぴったり一致します。',
    add: F([bx(20, 14, 280, 30, 'y ＝ 3x²　x：2 → 5', C.gray, FILL.gray, 14), bx(20, 58, 280, 32, '公式：3 × (2＋5) ＝ 21', C.blue, FILL.blue, 16), bx(20, 102, 280, 32, '定義：(75−12) ÷ (5−2) ＝ 21', C.green, FILL.green, 15)], [tx(170, '❓ なぜ検算になるの？ 同じ値を2つの方法で出したから', 12, C.gray), eb(190, '一致 → 計算ミスなし', C.red, FILL.red, 15, 32)]),
  },
  {
    note: 'a が負でも、xの範囲が負でも同じ公式です。y＝−2x² で x が−3から1まで変わるとき、p＋q＝−3＋1＝−2、−2×(−2)＝4。検算：y は −18 から −2、増加量16、x の増加量4、16÷4＝4。',
    add: F([bx(20, 14, 280, 30, 'y ＝ −2x²　x：−3 → 1', C.gray, FILL.gray, 14), bx(20, 58, 280, 32, '公式：−2 × (−3＋1) ＝ −2×(−2) ＝ 4', C.blue, FILL.blue, 14), bx(20, 102, 280, 32, '定義：(−2−(−18)) ÷ (1−(−3)) ＝ 16÷4', C.green, FILL.green, 13)], [tx(170, '❓ なぜ p＋q に符号をつけたまま入れるの？', 12, C.gray), tx(194, 'p＝−3 は負の数のまま 足すから', 13, C.red, true)]),
  },
  {
    note: '❓ 変化の割合は、グラフでは何を表しているの？ 2点を結んだ直線の傾きです。x が1から3の変化の割合8は、(1, 2) と (3, 18) を結んだ直線の傾き。次の項目では、この公式をそのまま傾きに使います。',
    add: F([...baseH(), ln(gx(gH, 0.5), gy(gH, -14), gx(gH, 3.3), gy(gH, 24), C.red, false, 2), gpt(gH, 1, 2), gpt(gH, 3, 18), bx(170, 40, 138, 40, '2点を結んだ直線の\n傾き ＝ 変化の割合', C.red, FILL.red, 11)], [tx(160, '変化の割合 ＝ 2点を結ぶ直線の傾き', 14, C.red, true), tx(194, 'グラフの場所で傾きがちがうから、値が変わる', 12, C.gray)]),
  },
  {
    note: 'もう1問。y＝x² で x が1から4まで変わるとき、1×(1＋4)＝5。検算：y は1から16、増加量15、x の増加量3、15÷3＝5。',
    add: F([bx(20, 18, 280, 30, 'y ＝ x²　x：1 → 4', C.gray, FILL.gray, 14), bx(20, 62, 280, 32, '公式：1 × (1＋4) ＝ 5', C.blue, FILL.blue, 16), bx(20, 106, 280, 32, '検算：(16−1) ÷ (4−1) ＝ 5', C.green, FILL.green, 15)], [tx(176, 'a が 1 のときは、p＋q がそのまま答え', 13, C.ink, true), tx(204, '❓ なぜ？ a(p＋q) の a が 1 だから', 12, C.gray)]),
  },
  {
    note: 'まとめ。y＝ax² の変化の割合は、x が p から q まで変わるとき a(p＋q)。一次関数と違って場所で変わります。公式は暗記でなく、「2乗の差を因数分解して約分する」から来ていると分かっておくと忘れません。',
    add: F([bx(20, 16, 280, 36, '変化の割合 ＝ a(p ＋ q)', C.red, FILL.red, 20), bx(20, 66, 132, 50, '一次関数：\nいつも同じ', C.blue, FILL.blue, 12), bx(168, 66, 132, 50, '二次関数：\n場所で変わる', C.green, FILL.green, 12)], [tx(160, 'なぜ？ q²−p² ＝ (q＋p)(q−p) で約分', 13, C.ink, true), tx(190, '検算は定義どおりの (増加量)÷(増加量)', 12, C.gray)]),
  },
]);

// ── 変域 ──
const hilite = (a: number, b: number, color: string = C.blue): E[] => curve(g2, (x) => x * x, a, b, color, 4, 16);
const xBar = (a: number, b: number, color: string = C.blue): E => ln(gx(g2, a), gy(g2, 0), gx(g2, b), gy(g2, 0), color, false, 5);
const henI: DiagramFigure = show([
  {
    note: '変域とは「xがとる範囲に対して、yがとる範囲」のことです。y＝x² で、−2≦x≦3 のときの y の変域を求めます。グラフのこの部分（太い線）が対象です。',
    add: [...axes(g2, -3.6, 3.6, -1, 10), ...par(g2, 1, -3.2, 3.2, C.gray, 1.5), ...hilite(-2, 3), xBar(-2, 3), xt(g2, -2), xt(g2, 3), ...band(140, tx(162, 'y ＝ x²　−2 ≦ x ≦ 3', 15, C.blue, true), tx(192, 'このときの y の範囲は？', 13, C.gray))],
  },
  {
    note: 'まず両端を調べます。x＝−2 のとき y＝4、x＝3 のとき y＝9。ここで「4≦y≦9」と答えたくなりますが、これはまちがいです。❓ なぜ？ 次のスライドで理由を見ます。',
    add: [gpt(g2, -2, 4, C.red), gpt(g2, 3, 9, C.red), dash(g2, -2, 4, 0, 4, C.red), dash(g2, 3, 9, 0, 9, C.red), lb(gx(g2, 0) - 8, gy(g2, 4), '4', 10, C.red, 'end', true), lb(gx(g2, 0) - 8, gy(g2, 9), '9', 10, C.red, 'end', true), ...band(140, eb(152, 'x＝−2 → 4　　x＝3 → 9', C.red, FILL.red, 15), tx(202, '4 ≦ y ≦ 9 ？ ← あやしい', 13, C.ink, true))],
  },
  {
    note: '❓ 何を見落としているの？ x の範囲 −2 から 3 の「間」に、x＝0 が入っています。数直線で見ると、0 は範囲の中にあります。y＝x² は x＝0 で頂点になる特別な点なので、そこを調べないといけません。',
    add: F([ln(20, 60, 300, 60, C.gray, false, 1.6), ...[-3, -2, -1, 0, 1, 2, 3].flatMap((x) => [ln(160 + x * 40, 54, 160 + x * 40, 66, C.gray), lb(160 + x * 40, 78, String(x), 11, C.gray)]), ln(80, 60, 280, 60, C.blue, false, 6), ci(160, 60, 8, undefined, C.red, 'rgba(0,0,0,0)'), lb(160, 36, '0 が範囲の中！', 12, C.red, 'middle', true)], [eb(120, '−2 ≦ x ≦ 3 の間に x＝0 がある', C.red, FILL.red, 14), tx(176, 'グラフの頂点(0, 0) が範囲にふくまれる', 13, C.ink, true), tx(204, '両端だけでは、いちばん低い所を見のがす', 12, C.gray)]),
  },
  {
    note: '頂点(0, 0) を入れて調べ直します。❓ なぜ y の最小は 0 なの？ x² は0以上で、0になるのは x＝0 のときだけ。x＝0 が範囲に入っていれば、y＝0 になる所があるので、それが最小です。',
    add: F([...axes(g2, -3.6, 3.6, -1, 10), ...par(g2, 1, -3.2, 3.2, C.gray, 1.5), ...hilite(-2, 3), xBar(-2, 3), gpt(g2, 0, 0, C.red, 5), gpt(g2, 3, 9, C.red), dash(g2, 3, 9, 0, 9, C.red), lb(gx(g2, 0) - 8, gy(g2, 9), '9', 10, C.red, 'end', true), lb(gx(g2, 0) - 30, gy(g2, 0) - 8, '最小0', 10, C.red, 'end', true)], [eb(152, '最小は 頂点の y ＝ 0', C.red, FILL.red, 15), tx(202, '（x＝0 が範囲に入っているから）', 12, C.gray)]),
  },
  {
    note: '❓ では最大は？ −2 と 3 のうち、x＝3 のほうが 9、x＝−2 は 4。なぜ3のほうが大きいの？ 原点からのきょりが、−2は2、3は3で、3のほうが遠いからです。y＝x² は原点から遠いほど大きくなります。',
    add: [ar(gx(g2, 0), gy(g2, 0) + 14, gx(g2, -2), gy(g2, 0) + 14, C.blue), ar(gx(g2, 0), gy(g2, 0) + 14, gx(g2, 3), gy(g2, 0) + 14, C.red), lb(gx(g2, -1), gy(g2, 0) + 24, '2', 10, C.blue, 'middle', true), lb(gx(g2, 1.5), gy(g2, 0) + 24, '3', 10, C.red, 'middle', true), ...band(140, eb(154, '原点から遠い x＝3 で最大 y＝9', C.red, FILL.red, 14), tx(204, '2 ＜ 3 だから、−2 側は 4 止まり', 12, C.gray))],
  },
  {
    note: '答えは 0≦y≦9。「0をふくむかどうか」を確かめてから、最小・最大を決めるのが手順です。',
    add: F([...axes(g2, -3.6, 3.6, -1, 10), ...par(g2, 1, -3.2, 3.2, C.gray, 1.5), ...hilite(-2, 3), gpt(g2, 0, 0, C.red), gpt(g2, 3, 9, C.red), dash(g2, -3.2, 0, 3.2, 0, C.red), dash(g2, -3.2, 9, 3.2, 9, C.red)], [eb(150, '0 ≦ y ≦ 9', C.red, FILL.red, 22, 36), tx(204, '最小0（頂点）・最大9（x＝3）', 13, C.ink, true)]),
  },
  {
    note: '0 がふくまれない場合を見ましょう。1≦x≦3 のとき。範囲の中に頂点がないので、グラフは右上がりの一方通行です。両端をそのまま入れて OK。x＝1 で y＝1、x＝3 で y＝9 なので 1≦y≦9。',
    add: F([...axes(g2, -3.6, 3.6, -1, 10), ...par(g2, 1, -3.2, 3.2, C.gray, 1.5), ...hilite(1, 3), xBar(1, 3), gpt(g2, 1, 1, C.red), gpt(g2, 3, 9, C.red), xt(g2, 1), xt(g2, 3)], [eb(148, '0 をふくまない → 両端でOK', C.blue, FILL.blue, 14), eb(184, '1 ≦ y ≦ 9', C.red, FILL.red, 20, 34)]),
  },
  {
    note: '次は −3≦x≦1。両端の値は x＝−3 で 9、x＝1 で 1。でも範囲に 0 が入っているので、最小は 0。最大は原点から遠い −3 のほうの 9。0≦y≦9。両端だけの 1≦y≦9 は、ここでもまちがいです。',
    add: F([...axes(g2, -3.6, 3.6, -1, 10), ...par(g2, 1, -3.2, 3.2, C.gray, 1.5), ...hilite(-3, 1), xBar(-3, 1), gpt(g2, -3, 9, C.red), gpt(g2, 1, 1, C.red), gpt(g2, 0, 0, C.red, 5)], [eb(148, '0 をふくむ → 最小は 0', C.red, FILL.red, 14), eb(184, '0 ≦ y ≦ 9', C.red, FILL.red, 20, 34)]),
  },
  {
    note: 'a が負のときは上下が逆です。y＝−2x² で −1≦x≦2。範囲に 0 が入るので、頂点が一番上、つまり最大は 0。両端は x＝−1 で −2、x＝2 で −8。原点から遠い x＝2 のほうが低いので、最小は −8。−8≦y≦0。',
    add: F([...axes(gNeg, -3.6, 3.6, -10, 4), ...curve(gNeg, (x) => -2 * x * x, -2.2, 2.2, C.gray, 1.5, 20), ...curve(gNeg, (x) => -2 * x * x, -1, 2, C.blue, 4, 12), gpt(gNeg, -1, -2, C.red), gpt(gNeg, 2, -8, C.red), gpt(gNeg, 0, 0, C.red, 5), lb(gx(gNeg, 2) + 6, gy(gNeg, -8) + 8, '−8', 10, C.red, 'start', true)], [eb(148, '0 をふくむ → 最大は 0', C.red, FILL.red, 14), eb(184, '−8 ≦ y ≦ 0', C.red, FILL.red, 20, 34)]),
  },
  {
    note: '❓ a の符号で何が変わるの？ a＞0 は頂点が一番下なので「0が最小」、a＜0 は頂点が一番上なので「0が最大」。どちらも、もう一方の端は「原点から遠い x」で計算します。',
    add: F([bx(20, 18, 132, 66, 'a ＞ 0\n0 が最小\n遠い x で最大', C.blue, FILL.blue, 13), bx(168, 18, 132, 66, 'a ＜ 0\n0 が最大\n遠い x で最小', C.red, FILL.red, 13)], [tx(120, 'どちらも「0をふくむとき」の話', 13, C.ink, true), tx(150, '0をふくまないときは、両端を代入するだけ', 13, C.gray), tx(184, '❓ なぜ遠い x？ |x| が大きいほど y の大きさも大きい', 12, C.gray)]),
  },
  {
    note: '手順をまとめます。①x の変域に 0 がふくまれるか確かめる ②ふくまない → 両端を代入 ③ふくむ → 0 が最小（a＞0）か最大（a＜0）。もう一方は、原点から遠い x で計算。',
    add: F([...grid(['①0を\nふくむ？', '②ふくまない\n両端を代入', '③ふくむ\n0が最小か最大', '④遠い x で\n反対の端'], 30, { h: 40, color: C.blue, fill: FILL.blue, size: 10 }).flat()], [tx(140, '両端を代入するだけだと、答えが合わないことがある', 13, C.red, true), tx(172, '必ず「0をふくむか」を先に確かめる', 14, C.ink, true), tx(204, '検算：グラフに太線をかいて、最高点・最低点を目で見る', 11, C.gray)]),
  },
]);

// ── 41. 放物線と直線の交点 ──
const gK: Gx = { ox: 150, oy: 122, sx: 30, sy: 20 };
const baseK = (): E[] => [...axes(gK, -2.4, 2.9, -1.2, 5.2), ...par(gK, 1, -2.1, 2.1, C.blue), ...curve(gK, (x) => x + 2, -2, 2.5, C.red, 2.2, 4), lb(gx(gK, 2.1) + 6, gy(gK, 4.4) - 6, 'y＝x²', 11, C.blue, 'start', true), lb(gx(gK, 2.5) + 4, gy(gK, 4.5) + 8, 'y＝x＋2', 11, C.red, 'start', true)];
const kouten: DiagramFigure = show([
  {
    note: '放物線 y＝x² と直線 y＝x＋2 の交点を求めます。グラフをかくと、2か所で交わっているようです。その座標を、式だけで正確に出します。',
    add: [...baseK(), lb(gx(gK, -1) - 22, gy(gK, 1) + 4, '？', 14, C.purple, 'middle', true), lb(gx(gK, 2) - 12, gy(gK, 4) - 12, '？', 14, C.purple, 'middle', true), ...band(140, tx(166, '放物線 y＝x² と 直線 y＝x＋2', 14, C.ink, true), tx(196, '交点の座標は？', 13, C.gray))],
  },
  {
    note: '❓ なぜ2つの式を「＝」で結ぶの？ 交点は放物線の上にもあり、直線の上にもある点です。だから交点では、同じ x で、y の値も同じ。x²（放物線の y）＝ x＋2（直線の y）が成り立ちます。',
    add: [gpt(gK, -1, 1, C.purple), gpt(gK, 2, 4, C.purple), ...band(140, eb(150, '放物線の y ＝ 直線の y', C.purple, FILL.purple, 14, 28), eb(186, 'x² ＝ x ＋ 2', C.red, FILL.red, 18, 32))],
  },
  {
    note: '❓ なぜ右辺を移項して「＝0」の形にするの？ 二次方程式は「＝0」の形にすると、因数分解や解の公式で解けるからです。x²＝x＋2 の右辺を移項して x²−x−2＝0。',
    add: F([eb(20, 'x² ＝ x ＋ 2', C.gray, FILL.gray, 17, 34), ar(160, 56, 160, 72, C.gray), eb(76, '右辺を左辺へ移項', C.blue, FILL.blue, 13, 26), ar(160, 106, 160, 122, C.gray)], [eb(126, 'x² − x − 2 ＝ 0', C.red, FILL.red, 18, 34), tx(186, '❓ 「＝0」にすると、因数分解できる', 13, C.ink, true)]),
  },
  {
    note: '因数分解すると (x−2)(x＋1)＝0。❓ なぜ x＝2 と x＝−1 が答えなの？ 2つの数をかけて0になるのは、どちらかが0のときだけだからです。x−2＝0 なら x＝2、x＋1＝0 なら x＝−1。',
    add: F([eb(16, 'x² − x − 2 ＝ 0', C.gray, FILL.gray, 15, 30), eb(58, '(x − 2)(x ＋ 1) ＝ 0', C.blue, FILL.blue, 17, 34), bx(30, 108, 120, 30, 'x − 2 ＝ 0 → x ＝ 2', C.red, FILL.red, 12), bx(170, 108, 120, 30, 'x ＋ 1 ＝ 0 → x ＝ −1', C.red, FILL.red, 12)], [tx(166, '確かめ：2² − 2 − 2 ＝ 0　(−1)² −(−1) − 2 ＝ 0', 12, C.green, true), tx(196, '❓ かけて0 → どちらかが0', 13, C.ink, true)]),
  },
  {
    note: 'x が2つ出たので、交点は2つです。❓ なぜ2つ？ 放物線は曲がっていて、直線が2回横切れるからです。x座標は −1 と 2。この x に対応する y座標を、次に求めます。',
    add: fresh(...baseK(), dash(gK, -1, 0, -1, 1, C.purple), dash(gK, 2, 0, 2, 4, C.purple), gpt(gK, -1, 1, C.purple), gpt(gK, 2, 4, C.purple), xt(gK, -1), xt(gK, 2), ...band(140, tx(166, 'x座標が 2つ ： x＝2 と x＝−1', 14, C.purple, true), tx(196, '❓ 放物線は曲がっているので、2回横切れる', 12, C.gray))),
  },
  {
    note: '❓ y座標は、どちらの式に入れるのが楽？ 直線の式です。直線は x の1次式なので、入れるだけで計算できます。x＝2 なら y＝2＋2＝4、x＝−1 なら y＝−1＋2＝1。交点は (2, 4) と (−1, 1)。',
    add: F([...baseK(), gpt(gK, -1, 1, C.purple), gpt(gK, 2, 4, C.purple), gl(gK, -1, 1, '(−1, 1)', -34, 6, 10, C.purple, 'middle'), gl(gK, 2, 4, '(2, 4)', -30, -6, 10, C.purple)], [eb(148, 'x＝2 → y＝2＋2＝4　x＝−1 → y＝−1＋2＝1', C.red, FILL.red, 12, 28), tx(196, '交点は (2, 4) と (−1, 1)', 15, C.ink, true), tx(220, '❓ 直線の式は 1次だから、入れるのが楽', 11, C.gray)]),
  },
  {
    note: '検算をします。放物線の式に x を入れても、同じ y になるはずです。2²＝4、(−1)²＝1。直線に入れた結果と同じなので、この2点は確かに両方のグラフ上にあります。',
    add: F([bx(20, 16, 130, 30, '直線 y＝x＋2', C.red, FILL.red, 13), bx(170, 16, 130, 30, '放物線 y＝x²', C.blue, FILL.blue, 13), bx(20, 58, 130, 30, 'x＝2 → 4', C.red, FILL.red, 14), bx(170, 58, 130, 30, 'x＝2 → 4', C.blue, FILL.blue, 14), bx(20, 100, 130, 30, 'x＝−1 → 1', C.red, FILL.red, 14), bx(170, 100, 130, 30, 'x＝−1 → 1', C.blue, FILL.blue, 14)], [tx(160, '2つの式で y が一致 → 交点で正しい', 14, C.green, true), tx(190, '❓ 一致しなければ、どこかで計算をまちがえている', 12, C.gray)]),
  },
  {
    note: '横にまっすぐな直線 y＝4 との交点も同じ考え方です。x²＝4 から x＝±2。❓ なぜ ±2 と2つ出るの？ 2乗して4になる数は、2と−2の両方だからです。',
    add: F([...axes(gK, -2.4, 2.9, -1.2, 5.2), ...par(gK, 1, -2.1, 2.1, C.blue), ln(gx(gK, -2.4), gy(gK, 4), gx(gK, 2.8), gy(gK, 4), C.red, false, 2.2), gpt(gK, -2, 4, C.purple), gpt(gK, 2, 4, C.purple), lb(gx(gK, 2.4), gy(gK, 4) - 8, 'y＝4', 11, C.red, 'middle', true)], [eb(148, 'x² ＝ 4 → x ＝ ±2', C.red, FILL.red, 16, 30), tx(196, '❓ 2乗して4になる数は 2 と −2', 13, C.ink, true)]),
  },
  {
    note: '直線が放物線にちょうどふれるときもあります。y＝2x−1 なら、x²＝2x−1 → x²−2x＋1＝0 → (x−1)²＝0 で x＝1 だけ。❓ なぜ1つ？ (x−1)(x−1) と同じものが2つ並び、答えがぴったり重なる（重解）からです。',
    add: F([...axes(gK, -2.4, 2.9, -1.2, 5.2), ...par(gK, 1, -1.2, 2.1, C.blue), ...curve(gK, (x) => 2 * x - 1, -0.1, 2.3, C.red, 2.2, 4), gpt(gK, 1, 1, C.purple, 4.5), lb(gx(gK, 2.3) + 4, gy(gK, 3.6) - 2, 'y＝2x−1', 11, C.red, 'start', true)], [eb(146, 'x² − 2x ＋ 1 ＝ (x − 1)² ＝ 0', C.purple, FILL.purple, 14, 28), tx(190, '答えが x＝1 の1つだけ → 接する(1点)', 13, C.ink, true), tx(216, '❓ 同じ解が2つ重なる ＝ 重解', 12, C.gray)]),
  },
  {
    note: '交点の数は、二次方程式の解の数と同じです。解が2つなら交点2つ、重解なら1点（接する）、解がなければ交わりません。',
    add: F([bx(20, 18, 88, 62, '解が2つ\n交点2つ', C.blue, FILL.blue, 12), bx(116, 18, 88, 62, '重解\n交点1つ(接する)', C.purple, FILL.purple, 11), bx(212, 18, 88, 62, '解なし\n交わらない', C.gray, FILL.gray, 12)], [tx(120, '交点の数 ＝ 二次方程式の解の数', 14, C.red, true), tx(150, '❓ 交点は2式が同時に成り立つ点だから', 12, C.gray)]),
  },
  {
    note: '手順をまとめます。①2つの式を等しいとおく ②移項して ax²−mx−n＝0 の形にする ③因数分解か解の公式で x を出す ④直線の式に入れて y を出す ⑤交点を2組かく。',
    add: F([...grid(['①式を\n＝で結ぶ', '②移項して\n＝0の形', '③x を\n求める', '④直線に\n代入して y'], 26, { h: 40, color: C.blue, fill: FILL.blue, size: 11 }).flat()], [tx(130, '⑤ 交点を 2組かく（重解なら1組）', 14, C.red, true), tx(164, '交点の x は二次方程式の解', 13, C.ink, true), tx(194, 'y は直線の式に入れると楽', 13, C.ink), tx(218, '検算：放物線の式に入れても同じ y', 12, C.green)]),
  },
]);

// ── 42. 放物線上の2点を通る直線の傾き ──
const gS: Gx = { ox: 150, oy: 128, sx: 24, sy: 10 };
const half = (x: number) => 0.5 * x * x;
const gN: Gx = { ox: 190, oy: 124, sx: 26, sy: 4.8 };
const baseS = (): E[] => [...axes(gS, -3.8, 4.7, -1, 10.2), ...curve(gS, half, -3.5, 4.3, C.blue, 2.4, 20), xt(gS, -2), xt(gS, 4)];
const tenKatamuki: DiagramFigure = show([
  {
    note: '放物線 y＝(1/2)x² 上で、x座標が −2 と 4 の2点A、Bを通る直線の式を求めます。まず2点の座標を出すと、A(−2, 2)、B(4, 8) です。',
    add: [...baseS(), gpt(gS, -2, 2), gpt(gS, 4, 8), gl(gS, -2, 2, 'A(−2, 2)', -40, 0, 10, C.red, 'middle'), gl(gS, 4, 8, 'B(4, 8)', -30, -4, 10, C.red), ...band(140, tx(166, 'y ＝ (1/2)x²　A(−2, 2)　B(4, 8)', 13, C.ink, true), tx(196, '2点を通る直線の式は？', 13, C.gray))],
  },
  {
    note: '❓ 傾きって、どう求めるの？ 傾き＝(yの増加量)÷(xの増加量)。Aから Bへ、x は −2→4 で 6 ふえ、y は 2→8 で 6 ふえます。傾き＝6÷6＝1。',
    add: [ln(gx(gS, -2), gy(gS, 2), gx(gS, 4), gy(gS, 8), C.red, false, 2.4), dash(gS, -2, 2, 4, 2, C.purple), dash(gS, 4, 2, 4, 8, C.purple), lb(gx(gS, 1), gy(gS, 2) + 10, 'x：＋6', 10, C.purple, 'middle', true), lb(gx(gS, 4) + 6, gy(gS, 5), 'y：＋6', 10, C.purple, 'start', true), ...band(140, eb(152, '傾き ＝ 6 ÷ 6 ＝ 1', C.red, FILL.red, 17), tx(202, '座標を出せば、これで求まる', 12, C.gray))],
  },
  {
    note: '❓ 座標を出さずに傾きが分かる？ 前の項目の「変化の割合」と同じものだからです。2点を結ぶ直線の傾きは、その間の変化の割合。y＝ax² なら a(p＋q) なので、(1/2)×(−2＋4)＝1 と一瞬で出ます。',
    add: F([bx(20, 18, 280, 30, '2点を通る直線の傾き ＝ その間の変化の割合', C.gray, FILL.gray, 13), bx(20, 62, 280, 32, 'y＝ax² なら a(p ＋ q)', C.blue, FILL.blue, 17), bx(20, 106, 280, 32, '(1/2) × (−2 ＋ 4) ＝ 1', C.red, FILL.red, 16)], [tx(170, '座標を出した傾き 1 と一致！', 14, C.green, true), tx(200, '❓ 同じもの：どちらも (yの増加)÷(xの増加)', 12, C.gray)]),
  },
  {
    note: '❓ なぜ a(p＋q) になるの？ 2点の座標は (p, ap²)、(q, aq²)。傾きは (aq²−ap²)÷(q−p)。q²−p²＝(q＋p)(q−p) と因数分解して (q−p) を約分すると、a(p＋q) が残ります。',
    add: F([bx(20, 14, 280, 30, '(aq² − ap²) ÷ (q − p)', C.gray, FILL.gray, 15), ar(160, 46, 160, 60, C.gray), bx(20, 62, 280, 30, 'a(q＋p)(q−p) ÷ (q−p)', C.blue, FILL.blue, 15), ar(160, 94, 160, 108, C.gray), bx(20, 110, 280, 30, '＝ a(p ＋ q)', C.red, FILL.red, 18)], [tx(172, 'q²−p² ＝ (q＋p)(q−p) を使って約分', 13, C.ink, true), tx(200, '→ 2点の座標を出さなくても傾きが出る', 12, C.gray)]),
  },
  {
    note: '傾き1が分かったので、直線は y＝x＋b の形。切片 b を出します。❓ どうやって？ 直線は B(4, 8) を通るので、x＝4、y＝8 を入れると 8＝4＋b、b＝4。どちらか1点を入れれば求まります。',
    add: F([...baseS(), ...curve(gS, (x) => x + 4, -4, 4.3, C.red, 2.2, 4), gpt(gS, 4, 8), gpt(gS, 0, 4, C.purple, 4.5), lb(gx(gS, 0) - 8, gy(gS, 4) - 6, '切片4', 10, C.purple, 'end', true)], [eb(148, 'y ＝ x ＋ b に B(4, 8) を代入', C.gray, FILL.gray, 13, 26), eb(180, '8 ＝ 4 ＋ b より b ＝ 4', C.red, FILL.red, 15, 30)]),
  },
  {
    note: '答えは y＝x＋4。検算は、もう1つの点A(−2, 2) を入れること。−2＋4＝2 で、Aの y座標と一致します。2点とも通るので、直線は正しいと言えます。',
    add: F([...baseS(), ...curve(gS, (x) => x + 4, -4, 4.3, C.red, 2.4, 4), gpt(gS, -2, 2), gpt(gS, 4, 8)], [eb(148, '直線 y ＝ x ＋ 4', C.red, FILL.red, 17, 30), tx(196, '検算：A(−2, 2) → −2＋4 ＝ 2 ✓', 13, C.green, true), tx(220, '❓ 使っていない点も通れば、正しい', 12, C.gray)]),
  },
  {
    note: '別の問題。y＝x² 上の x座標が 1 と 5 の2点を通る直線の傾き。公式で 1×(1＋5)＝6。検算は座標から：(1, 1) と (5, 25)、(25−1)÷(5−1)＝24÷4＝6。',
    add: F([bx(20, 14, 280, 30, 'y ＝ x²　x座標 1 と 5', C.gray, FILL.gray, 14), bx(20, 58, 280, 32, '公式：1 × (1＋5) ＝ 6', C.blue, FILL.blue, 16), bx(20, 102, 280, 32, '検算：(25−1) ÷ (5−1) ＝ 6', C.green, FILL.green, 15)], [tx(170, '❓ なぜ検算になる？ 別の方法で同じ値が出たから', 12, C.gray), tx(198, '公式のほうが、座標を出す手間がない', 13, C.ink, true)]),
  },
  {
    note: '傾きがマイナスになる例。y＝2x² 上の x座標 −3 と 1。2×(−3＋1)＝−4。検算：(−3, 18) と (1, 2)、(2−18)÷(1−(−3))＝−16÷4＝−4。❓ なぜ負？ 右へ行くほど y が下がる（右下がり）からです。',
    add: F([...axes(gN, -3.8, 1.9, -1, 22), ...curve(gN, (x) => 2 * x * x, -3.2, 1.5, C.blue, 2.4, 18), ln(gx(gN, -3.4), gy(gN, 19.6), gx(gN, 1.4), gy(gN, 0.4), C.red, false, 2.2), gpt(gN, -3, 18), gpt(gN, 1, 2), gl(gN, -3, 18, '(−3, 18)', -32, 0, 10, C.red), gl(gN, 1, 2, '(1, 2)', 26, -6, 10, C.red)], [eb(148, '2 × (−3 ＋ 1) ＝ −4', C.red, FILL.red, 16, 30), tx(194, '検算：(2−18) ÷ (1−(−3)) ＝ −16 ÷ 4 ＝ −4', 12, C.green, true), tx(218, '❓ 負になるのは、右へ行くほど y が下がる(右下がり)から', 11, C.gray)]),
  },
  {
    note: '❓ p＋q が0になったらどうなるの？ たとえば x座標が −2 と 2 の2点。傾き＝a×(−2＋2)＝0。y軸について対称な2点は同じ高さにあるので、結ぶ直線は水平（傾き0）です。',
    add: F([...axes(gS, -3.8, 4.7, -1, 10.2), ...curve(gS, half, -3.5, 4.3, C.blue, 2.4, 20), ln(gx(gS, -2), gy(gS, 2), gx(gS, 2), gy(gS, 2), C.red, false, 2.4), gpt(gS, -2, 2), gpt(gS, 2, 2), lb(gx(gS, 0), gy(gS, 2) - 8, '水平', 10, C.red, 'middle', true)], [eb(148, 'a × (−2 ＋ 2) ＝ 0', C.red, FILL.red, 16, 30), tx(196, '❓ y軸対称な2点は同じ高さ → 傾き0', 13, C.ink, true)]),
  },
  {
    note: 'もう1問、同じ手順で解いてみます。y＝2x² 上の x座標が −1 と 3 の2点を通る直線。傾きは 2×(−1＋3)＝4。切片は (−1, 2) を y＝4x＋b に入れて 2＝−4＋b、b＝6。直線は y＝4x＋6。検算：(3, 18) を入れると 4×3＋6＝18 で通ります。',
    add: F([bx(20, 14, 280, 28, 'y ＝ 2x²　x座標 −1 と 3', C.gray, FILL.gray, 14), bx(20, 50, 280, 28, '傾き ＝ 2 × (−1 ＋ 3) ＝ 4', C.blue, FILL.blue, 15), bx(20, 86, 280, 28, '(−1, 2) を代入：2 ＝ −4 ＋ b → b ＝ 6', C.purple, FILL.purple, 13)], [eb(140, '直線 y ＝ 4x ＋ 6', C.red, FILL.red, 17, 30), tx(192, '検算：(3, 18) → 4×3＋6 ＝ 18 ✓', 13, C.green, true), tx(216, '❓ 使っていない点も通るので、正しい', 12, C.gray)]),
  },
  {
    note: 'まとめます。①2点の x座標 p、q を読む ②傾き＝a(p＋q) ③どちらか1点を入れて切片を出す ④もう1点で検算。傾きは変化の割合と同じものです。',
    add: F([...grid(['①x座標\np、q', '②傾き\na(p＋q)', '③1点を代入\nして切片', '④もう1点\nで検算'], 30, { h: 40, color: C.blue, fill: FILL.blue, size: 11 }).flat()], [tx(140, '傾き ＝ 変化の割合の公式と同じもの', 14, C.red, true), tx(172, '座標を出さなくても傾きが求まる', 13, C.ink, true), tx(202, '❓ なぜ？ 2乗の差を因数分解して約分するから', 12, C.gray)]),
  },
]);

// ── 43. 放物線と図形の融合問題 ──
const gM: Gx = { ox: 100, oy: 126, sx: 30, sy: 11 };
const baseM = (): E[] => [...axes(gM, -1.9, 3.6, -1.5, 10.2), ...par(gM, 1, -1.6, 3.1, C.blue), lb(gx(gM, 3.1) + 4, gy(gM, 9.4) + 4, 'y＝x²', 11, C.blue, 'start', true)];
const mp = (x: number, y: number): [number, number] => [gx(gM, x), gy(gM, y)];
const triOAB = (fill: string = B_T): E => pg([mp(0, 0), mp(2, 4), mp(-1, 1)], C.blue, fill);
const ptsOAB = (): E[] => [gpt(gM, 2, 4), gpt(gM, -1, 1), gl(gM, 2, 4, 'A(2, 4)', 32, 2, 10, C.red), gl(gM, -1, 1, 'B(−1, 1)', -30, -4, 10, C.red)];
const yugo: DiagramFigure = show([
  {
    note: '放物線 y＝x² 上に A(2, 4) と B(−1, 1) があります。原点Oとあわせた三角形OABがあります。この面積と同じ面積の三角形を、放物線の上に作る問題を考えます。',
    add: [...baseM(), triOAB(), ...ptsOAB(), bx(206, 40, 108, 44, '三角形OAB\nの面積に注目', C.blue, FILL.blue, 12), ...band(140, tx(166, 'y ＝ x²　A(2, 4)　B(−1, 1)', 14, C.ink, true), tx(196, 'O、A、B を頂点とする三角形', 13, C.gray))],
  },
  {
    note: '問題：放物線上に点Cをとって、三角形OACの面積が三角形OABと等しくなるようにしたい。Cの座標は？ Bとは別の点です。どう考えればいいでしょう。',
    add: band(140, eb(150, '△OAC ＝ △OAB となる C（放物線上）', C.purple, FILL.purple, 14, 30), tx(200, 'C は B とは別の点', 13, C.gray)),
  },
  {
    note: '❓ 面積が等しいとは、何が等しいということ？ 三角形の面積は 底辺×高さ÷2。2つの三角形で底辺OAが共通なら、面積が等しいのは「高さが等しい」ときです。',
    add: F([pg([P2(60, 120), P2(200, 120), P2(100, 50)], C.blue, B_T), pg([P2(60, 120), P2(200, 120), P2(175, 50)], C.red, R_T), ln(60, 120, 200, 120, C.ink, false, 2.4), ln(90, 50, 240, 50, C.purple, true, 1.5), ln(100, 50, 100, 120, C.blue, true, 1.5), ln(175, 50, 175, 120, C.red, true, 1.5), lb(130, 134, '共通の底辺', 11, C.ink, 'middle', true), lb(92, 88, '高さ', 10, C.blue, 'end', true), lb(183, 88, '高さ', 10, C.red, 'start', true)], [eb(148, '面積 ＝ 底辺 × 高さ ÷ 2', C.gray, FILL.gray, 15, 28), tx(196, '底辺が同じ → 高さが同じなら面積も同じ', 13, C.ink, true)]),
  },
  {
    note: '❓ 高さが同じ点は、どこにあるの？ OAからのきょり（高さ）が同じ点は、OAに平行な直線の上にならびます。そこで、Bを通ってOAに平行な直線を引くと、その上の点なら面積が同じです。',
    add: F([...baseM(), triOAB(), ...ptsOAB(), ln(gx(gM, -0.4), gy(gM, -0.8), gx(gM, 2.4), gy(gM, 4.8), C.blue, false, 2.2), ln(gx(gM, -1.4), gy(gM, 0.2), gx(gM, 3.2), gy(gM, 9.4), C.purple, true, 1.8), lb(gx(gM, -0.3), gy(gM, 8), 'OAに平行', 11, C.purple, 'start', true)], [eb(148, 'B を通り OA に平行な直線', C.purple, FILL.purple, 14, 28), tx(196, '❓ 平行線上の点は OA からのきょりが同じ', 12, C.ink, true)]),
  },
  {
    note: 'その平行線の式を作ります。OAの傾きは 4÷2＝2。傾き2でB(−1, 1)を通るので、y＝2x＋b に代入して 1＝−2＋b、b＝3。平行線は y＝2x＋3。',
    add: F([eb(14, 'OA の傾き ＝ 4 ÷ 2 ＝ 2', C.blue, FILL.blue, 15, 30), eb(54, '平行 → 傾きも 2　y ＝ 2x ＋ b', C.purple, FILL.purple, 15, 30), eb(94, 'B(−1, 1) を通る：1 ＝ −2 ＋ b', C.gray, FILL.gray, 14, 30), eb(134, 'b ＝ 3　→　y ＝ 2x ＋ 3', C.red, FILL.red, 16, 30)], [tx(190, '❓ なぜ傾きが同じ？ 平行な直線は同じ向きだから', 12, C.ink, true), tx(214, '確かめ：x＝−1 で 2×(−1)＋3 ＝ 1（Bの y と一致）', 11, C.green)]),
  },
  {
    note: 'この平行線と放物線の交点が、Cの候補です。x²＝2x＋3 → x²−2x−3＝0 → (x−3)(x＋1)＝0 より x＝3、−1。❓ x＝−1 は？ それはBのことです。もう1つの x＝3 がC。y＝2×3＋3＝9 で C(3, 9)。',
    add: F([...baseM(), triOAB(), ...curve(gM, (x) => 2 * x + 3, -1.4, 3.05, C.purple, 2, 4), gpt(gM, -1, 1), gpt(gM, 3, 9, C.green, 4.5), gl(gM, 3, 9, 'C(3, 9)', -34, 0, 10, C.green), gl(gM, -1, 1, 'B', -10, -8, 10, C.red)], [eb(148, 'x² ＝ 2x ＋ 3 → (x−3)(x＋1) ＝ 0', C.purple, FILL.purple, 13, 28), tx(190, 'x＝−1 は B。もう1つの x＝3 が C', 13, C.ink, true), tx(214, 'y ＝ 2×3 ＋ 3 ＝ 9 → C(3, 9)', 13, C.green, true)]),
  },
  {
    note: '面積を計算で確かめます。❓ 軸の上の線分を底辺にすると、なぜ楽なの？ 長さが座標の差でそのまま出るからです。直線ABは y＝x＋2 で、y軸との交点は D(0, 2)。三角形OABは、y軸で左右に分かれます。',
    add: F([...baseM(), pg([mp(0, 0), mp(-1, 1), mp(0, 2)], C.blue, B_T), pg([mp(0, 0), mp(2, 4), mp(0, 2)], C.green, G_T), ln(gx(gM, -1), gy(gM, 1), gx(gM, 2), gy(gM, 4), C.red, false, 1.8), gpt(gM, 0, 2, C.purple), gl(gM, 0, 2, 'D(0, 2)', -28, -10, 10, C.purple), gpt(gM, 2, 4), gpt(gM, -1, 1)], [eb(146, '底辺 OD ＝ 2（y軸の上）', C.purple, FILL.purple, 14, 26), tx(190, '△OBD ＝ 2×1÷2 ＝ 1　（高さ＝Bのxの大きさ 1）', 12, C.blue, true), tx(210, '△OAD ＝ 2×2÷2 ＝ 2　（高さ＝Aのx＝2）', 12, C.green, true), tx(228, '合計 1＋2 ＝ 3 が △OAB の面積', 12, C.ink, true)]),
  },
  {
    note: '同じ面積の△OACもかいてみます。BCはOAに平行なので、△OABと△OACは底辺OA共通で高さが同じです。面積は、どちらも3で等しくなります。',
    add: F([...baseM(), triOAB(B_T), pg([mp(0, 0), mp(2, 4), mp(3, 9)], C.green, G_T), ...ptsOAB(), gpt(gM, 3, 9, C.green), gl(gM, 3, 9, 'C', -10, -6, 11, C.green), ln(gx(gM, -1), gy(gM, 1), gx(gM, 3), gy(gM, 9), C.purple, true, 1.6)], [eb(148, '△OAB ＝ △OAC ＝ 3', C.red, FILL.red, 16, 30), tx(196, 'BC ∥ OA（底辺OA共通・高さが同じ）', 13, C.ink, true), tx(220, '❓ 平行だから、高さが同じ', 12, C.gray)]),
  },
  {
    note: '次に「面積を2等分する直線」です。❓ 三角形の頂点Aを通って面積を2等分するには、どこを通ればいい？ 対辺BCの中点Mです。BM＝MC で底辺が等しく、高さ（AからBCまで）は共通なので、2つの三角形の面積は等しくなります。',
    add: F([pg([P2(60, 110), P2(160, 110), P2(130, 30)], C.blue, B_T), pg([P2(160, 110), P2(260, 110), P2(130, 30)], C.green, G_T), ln(60, 110, 260, 110, C.ink, false, 2.2), ln(130, 30, 160, 110, C.red, false, 2.4), ln(130, 30, 130, 110, C.gray, true, 1.3), lb(110, 126, 'B', 12, C.ink, 'middle', true), lb(260, 126, 'C', 12, C.ink, 'middle', true), lb(130, 20, 'A', 12, C.ink, 'middle', true), lb(160, 126, 'M', 12, C.red, 'middle', true), lb(176, 72, '高さ共通', 9, C.gray, 'start')], [eb(146, 'BM ＝ MC（中点）', C.red, FILL.red, 15, 28), tx(196, '底辺が等しく、高さが共通 → 面積が等しい', 13, C.ink, true)]),
  },
  {
    note: '△OABをOを通る直線で2等分してみます。ABの中点M＝((2＋(−1))÷2, (4＋1)÷2)＝(0.5, 2.5)。Oと M を通る直線は、傾き 2.5÷0.5＝5 で y＝5x です。',
    add: F([...baseM(), triOAB(), ...ptsOAB(), ln(gx(gM, 0), gy(gM, 0), gx(gM, 1.8), gy(gM, 9), C.purple, false, 2.2), gpt(gM, 0.5, 2.5, C.purple), gl(gM, 0.5, 2.5, 'M', 14, 4, 12, C.purple)], [eb(146, 'AB の中点 M ＝ (0.5, 2.5)', C.purple, FILL.purple, 14, 26), eb(180, 'O と M を通る直線 y ＝ 5x', C.red, FILL.red, 15, 28), tx(224, '確かめ：傾き 2.5÷0.5 ＝ 5', 12, C.green)]),
  },
  {
    note: '手順をまとめます。①放物線と直線の交点など、必要な座標をまず求める ②面積が等しい条件 → 底辺共通なら平行線 ③面積を2等分 → 底辺の中点を通る ④面積は、軸に平行な線分を底辺にして計算する。',
    add: F([...grid(['①交点の座標を\nまず求める', '②面積が等しい\n→ 底辺共通なら平行', '③面積を2等分\n→ 対辺の中点', '④軸に平行な線分\nを底辺に計算'], 14, { color: C.blue, fill: FILL.blue, size: 11 })], [tx(150, '等積変形は「底辺共通なら平行」', 15, C.red, true), tx(184, '2等分する直線は、対辺の中点を通る', 13, C.ink, true), tx(212, '検算：面積を座標から計算して比べる', 12, C.gray)]),
  },
]);

// ── 44. おうぎ形 ──
const OC = { x: 100, y: 72, r: 50 };
const ougiBase = (): E[] => [ci(OC.x, OC.y, OC.r, undefined, C.gray, FILL.gray)];
const ougi: DiagramFigure = show([
  {
    note: 'おうぎ形は、円の一部を切り取った形です。まず円のおさらい。半径6cmの円は、円周が 2π×6＝12π cm、面積が π×6²＝36π cm²。中心のまわりの角（中心角）は全体で360°です。',
    add: [...ougiBase(), ln(OC.x, OC.y, OC.x + OC.r, OC.y, C.red, false, 2), lb(OC.x + 26, OC.y - 8, '6cm', 10, C.red, 'middle', true), ci(OC.x, OC.y, 2, undefined, C.ink, C.ink), bx(170, 30, 140, 30, '円周 ＝ 2π×6 ＝ 12π', C.blue, FILL.blue, 12), bx(170, 74, 140, 30, '面積 ＝ π×6² ＝ 36π', C.green, FILL.green, 12), ...band(140, tx(170, '中心角は全体で 360°', 14, C.ink, true))],
  },
  {
    note: '中心角120°のおうぎ形は、この円のどれくらい？ ❓ なぜ割合で考えるの？ 円は中心角360°で1周。120°は 360°の 1/3 なので、同じおうぎ形が3つで円ちょうど1周になります。この 1/3 が全体の割合です。',
    add: F([sc(OC.x, OC.y, OC.r, 0, 120, C.blue, B_T), sc(OC.x, OC.y, OC.r, 120, 240, C.green, G_T), sc(OC.x, OC.y, OC.r, 240, 360, C.purple, P_T), bx(170, 40, 140, 44, '120° のおうぎ形が\n3つで 1周', C.gray, FILL.gray, 12)], [eb(146, '120° ÷ 360° ＝ 1/3', C.red, FILL.red, 17, 30), tx(198, '割合 ＝ 中心角 ÷ 360°', 14, C.ink, true)]),
  },
  {
    note: '弧の長さは、円周の 1/3 です。円周が 12π なので、12π×1/3＝4π cm。❓ なぜ円周の 1/3 なの？ 弧は円周の一部で、中心角が円の何分のいくつかに、弧の長さも同じ割合で切り取られるからです。',
    add: F([...ougiBase(), sc(OC.x, OC.y, OC.r, 0, 120, C.blue, B_T), ...arc(OC.x, OC.y, OC.r, 0, 120, C.red, 3.6, 16), bx(170, 40, 140, 30, '円周 12π', C.gray, FILL.gray, 13), bx(170, 84, 140, 30, '弧 ＝ 12π × 1/3', C.red, FILL.red, 13)], [eb(146, '弧の長さ ＝ 4π cm', C.red, FILL.red, 18, 30), tx(198, '弧 ＝ 2πr × (中心角/360)', 13, C.ink, true)]),
  },
  {
    note: '面積は、円の面積の 1/3。36π×1/3＝12π cm²。❓ なぜ弧と同じ 1/3？ 中心角が同じ割合だけ、円のはしから中心まで、どこも同じように切り取っているからです。弧の長さも面積も、中心角で決まります。',
    add: F([...ougiBase(), sc(OC.x, OC.y, OC.r, 0, 120, C.green, G_T), bx(170, 40, 140, 30, '円の面積 36π', C.gray, FILL.gray, 13), bx(170, 84, 140, 30, '36π × 1/3', C.green, FILL.green, 13)], [eb(146, '面積 ＝ 12π cm²', C.green, FILL.green, 18, 30), tx(198, '面積 ＝ πr² × (中心角/360)', 13, C.ink, true)]),
  },
  {
    note: '別の求め方もあります。❓ なぜ「弧×半径÷2」が面積になるの？ おうぎ形を細かく切ってならべると、底辺が弧で、高さが半径の三角形に近づくからです。面積＝弧×半径÷2＝4π×6÷2＝12π。さっきと同じです。',
    add: F([sc(60, 60, 42, 0, 120, C.green, G_T), ar(112, 50, 146, 50, C.gray), pg([P2(160, 110), P2(290, 110), P2(160, 40)], C.green, G_T), ln(160, 110, 290, 110, C.red, false, 2.6), ln(160, 110, 160, 40, C.blue, false, 2.6), lb(225, 126, '底辺 ＝ 弧（4π）', 10, C.red, 'middle', true), lb(154, 86, '高さ\n＝半径6', 10, C.blue, 'end', true)], [eb(148, '面積 ＝ 弧 × 半径 ÷ 2', C.green, FILL.green, 16, 28), tx(196, '4π × 6 ÷ 2 ＝ 12π（同じ答え）', 13, C.ink, true), tx(218, '中心角がわからなくても面積が出る', 11, C.gray)]),
  },
  {
    note: '使ってみましょう。半径5cm、弧の長さ6π cm のおうぎ形の面積。中心角を求めずに、弧×半径÷2＝6π×5÷2＝15π cm²。❓ なぜこの式が楽？ 中心角を出す手間が要らず、かけて割るだけだからです。',
    add: F([bx(30, 16, 260, 30, '半径5cm　弧の長さ 6π cm', C.gray, FILL.gray, 14), bx(30, 60, 260, 32, '面積 ＝ 弧 × 半径 ÷ 2', C.blue, FILL.blue, 15), bx(30, 106, 260, 32, '＝ 6π × 5 ÷ 2 ＝ 15π cm²', C.red, FILL.red, 16)], [tx(174, '確かめ：円周 10π のうち 6π → 割合 3/5', 12, C.green, true), tx(196, '円の面積 25π × 3/5 ＝ 15π（同じ！）', 12, C.green, true), tx(220, '❓ 弧の割合は、面積の割合と同じだから', 11, C.gray)]),
  },
  {
    note: '中心角を求める問題。半径3cm、弧の長さ2π cm のおうぎ形。円周は 2π×3＝6π。弧2πは円周の 2π÷6π＝1/3。❓ なぜ中心角に直せるの？ 弧の割合は中心角の割合と同じ。360°×1/3＝120°。',
    add: F([bx(30, 14, 260, 30, '半径3cm　弧の長さ 2π cm', C.gray, FILL.gray, 14), bx(30, 56, 260, 30, '円周 ＝ 2π × 3 ＝ 6π', C.blue, FILL.blue, 14), bx(30, 98, 260, 30, '弧の割合 ＝ 2π ÷ 6π ＝ 1/3', C.purple, FILL.purple, 14)], [eb(146, '中心角 ＝ 360° × 1/3 ＝ 120°', C.red, FILL.red, 16, 30), tx(198, '確かめ：120° の割合が 1/3', 12, C.green, true)]),
  },
  {
    note: '半径4cm、中心角90°のおうぎ形の面積。90÷360＝1/4 なので、円の面積 16π の 1/4。16π×1/4＝4π cm²。90°は円の4分の1（四分円）です。',
    add: F([...ougiBase(), sc(OC.x, OC.y, OC.r, 0, 90, C.green, G_T), bx(170, 30, 140, 28, '半径4cm　中心角90°', C.gray, FILL.gray, 12), bx(170, 66, 140, 28, '割合 90÷360 ＝ 1/4', C.blue, FILL.blue, 12)], [eb(146, '16π × 1/4 ＝ 4π cm²', C.red, FILL.red, 17, 30), tx(198, '❓ 円の面積 π×4² ＝ 16π を1/4に', 12, C.gray)]),
  },
  {
    note: '中心角が大きい例も、同じ考え方です。半径6cm、中心角240°なら、割合は 240÷360＝2/3。弧は 12π×2/3＝8π、面積は 36π×2/3＝24π。検算：弧×半径÷2＝8π×6÷2＝24π で一致します。',
    add: F([...ougiBase(), sc(OC.x, OC.y, OC.r, 0, 240, C.purple, P_T), bx(170, 24, 140, 28, '半径6cm　中心角240°', C.gray, FILL.gray, 12), bx(170, 60, 140, 28, '割合 240÷360 ＝ 2/3', C.blue, FILL.blue, 12)], [eb(140, '弧 ＝ 12π × 2/3 ＝ 8π', C.red, FILL.red, 14, 26), eb(172, '面積 ＝ 36π × 2/3 ＝ 24π', C.green, FILL.green, 14, 26), tx(220, '検算：8π×6÷2 ＝ 24π ✓', 13, C.ink, true)]),
  },
  {
    note: '❓ 答えは、なぜπをつけたままにするの？ 円周率は 3.14… と終わらない数なので、指示がなければ正確な値の π のまま書くのが約束だからです。12π を 3.14 で計算すると 37.68 になりますが、これは近い値であって、ぴったりの値ではありません。',
    add: F([bx(30, 20, 260, 34, '面積 ＝ 12π cm²（正確な値）', C.green, FILL.green, 16), bx(30, 74, 260, 34, '12 × 3.14 ＝ 37.68（近い値）', C.gray, FILL.gray, 15)], [tx(154, '指示がなければ π をつけたまま', 14, C.red, true), tx(184, '「近似値で」と言われたときだけ 3.14 で計算', 13, C.ink), tx(212, '検算：36×3.14÷3 ＝ 37.68 とも一致', 12, C.green)]),
  },
  {
    note: 'まとめます。弧の長さ＝2πr×(a/360)、面積＝πr²×(a/360)、面積＝1/2×弧×半径。中心角がわかっているときは割合を使い、弧がわかっているときは「弧×半径÷2」で中心角を求めずに済みます。',
    add: F([bx(20, 14, 280, 32, '弧の長さ ＝ 2πr × (a/360)', C.red, FILL.red, 15), bx(20, 56, 280, 32, '面積 ＝ πr² × (a/360)', C.green, FILL.green, 15), bx(20, 98, 280, 32, '面積 ＝ 1/2 × 弧 × r', C.blue, FILL.blue, 15)], [tx(160, 'まず 割合 ＝ 中心角 ÷ 360° を考える', 14, C.ink, true), tx(190, '弧がわかっていれば 弧×半径÷2', 13, C.gray), tx(216, '答えは π をつけたまま', 12, C.gray)]),
  },
]);

// ── 45. 垂直二等分線と角の二等分線 ──
const cA = P2(70, 100), cB = P2(250, 100);
const hp = Math.sqrt(100 * 100 - 90 * 90);
const cP = P2(160, 100 - hp), cQ = P2(160, 100 + hp);
const abLine = (): E[] => [ln(cA[0], cA[1], cB[0], cB[1], C.ink, false, 2.4), ...pt(cA[0], cA[1], 'A', C.ink, 0, 16), ...pt(cB[0], cB[1], 'B', C.ink, 0, 16)];
const oo = P2(50, 170);
const ray2 = (len: number): [number, number] => [oo[0] + len * Math.cos(rad(50)), oo[1] - len * Math.sin(rad(50))];
const onRay = (ang: number, len: number): [number, number] => [oo[0] + len * Math.cos(rad(ang)), oo[1] - len * Math.sin(rad(ang))];
const dPt = onRay(0, 60), ePt = onRay(50, 60);
const fLen = 60 * Math.cos(rad(25)) + Math.sqrt(45 * 45 - Math.pow(60 * Math.sin(rad(25)), 2));
const fPt = onRay(25, fLen);
const zPt = onRay(25, 85);
const zf1 = P2(zPt[0], oo[1]);
const zproj = (zPt[0] - oo[0]) * Math.cos(rad(50)) - (zPt[1] - oo[1]) * Math.sin(rad(50));
const zf2 = onRay(50, zproj);
const angBase = (): E[] => [ln(oo[0], oo[1], 285, oo[1], C.ink, false, 2.2), ln(oo[0], oo[1], ray2(190)[0], ray2(190)[1], C.ink, false, 2.2), ...pt(oo[0], oo[1], 'O', C.ink, -10, 6)];
// 三角形と円の中心
const dist = (a: [number, number], b: [number, number]) => Math.hypot(a[0] - b[0], a[1] - b[1]);
const circum = (a: [number, number], b: [number, number], c: [number, number]): [number, number] => {
  const d = 2 * (a[0] * (b[1] - c[1]) + b[0] * (c[1] - a[1]) + c[0] * (a[1] - b[1]));
  const s = (p: [number, number]) => p[0] * p[0] + p[1] * p[1];
  return [(s(a) * (b[1] - c[1]) + s(b) * (c[1] - a[1]) + s(c) * (a[1] - b[1])) / d, (s(a) * (c[0] - b[0]) + s(b) * (a[0] - c[0]) + s(c) * (b[0] - a[0])) / d];
};
const incen = (a: [number, number], b: [number, number], c: [number, number]) => {
  const la = dist(b, c), lbb = dist(c, a), lc = dist(a, b), p = la + lbb + lc;
  const area = Math.abs((b[0] - a[0]) * (c[1] - a[1]) - (c[0] - a[0]) * (b[1] - a[1])) / 2;
  return { c: [(la * a[0] + lbb * b[0] + lc * c[0]) / p, (la * a[1] + lbb * b[1] + lc * c[1]) / p] as [number, number], r: (2 * area) / p };
};
const mid = (a: [number, number], b: [number, number]): [number, number] => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
const tA = P2(90, 105), tB = P2(230, 105), tC = P2(160, 25);
const cc = circum(tA, tB, tC);
const iA = P2(60, 150), iB = P2(260, 150), iC = P2(110, 40);
const ic = incen(iA, iB, iC);
const nijitou: DiagramFigure = show([
  {
    note: '線分ABの垂直二等分線とは、ABの真ん中（中点）を通り、ABに垂直な直線のことです。定規とコンパスだけで、これを作図します。',
    add: [...abLine(), ...pt(160, 100, 'M', C.red, 0, 14), ...band(176, tx(198, '垂直二等分線 ＝ ABの中点を通り、ABに垂直', 13, C.ink, true), tx(220, 'まず、コンパスで弧をかく', 12, C.gray))],
  },
  {
    note: 'Aを中心に、ABの半分より大きい半径で弧をかきます。同じ半径で、Bを中心にも弧をかきます。2つの弧は、ABの上と下の2か所で交わります。',
    add: [...arcTo(cA[0], cA[1], 100, cP[0], cP[1], 16, C.blue), ...arcTo(cA[0], cA[1], 100, cQ[0], cQ[1], 16, C.blue), ...arcTo(cB[0], cB[1], 100, cP[0], cP[1], 16, C.red), ...arcTo(cB[0], cB[1], 100, cQ[0], cQ[1], 16, C.red), ...band(176, tx(198, 'AとB、同じ半径で弧をかく', 13, C.ink, true), tx(220, '弧が交わる2点を P、Q とする', 12, C.gray))],
  },
  {
    note: '❓ なぜ交点Pは、AとBから同じきょりにあるの？ Aからの弧もBからの弧も、同じ半径でかいたからです。PA＝PB＝半径。Qも同じで、A・P・B・Qを結ぶと4辺が等しい四角形（ひし形）になります。',
    add: [...pt(cP[0], cP[1], 'P', C.red, 12, -2), ...pt(cQ[0], cQ[1], 'Q', C.red, 12, 8), ln(cA[0], cA[1], cP[0], cP[1], C.purple, true, 1.4), ln(cP[0], cP[1], cB[0], cB[1], C.purple, true, 1.4), ln(cB[0], cB[1], cQ[0], cQ[1], C.purple, true, 1.4), ln(cQ[0], cQ[1], cA[0], cA[1], C.purple, true, 1.4), ...band(176, tx(198, 'PA ＝ PB ＝ QA ＝ QB（同じ半径）', 13, C.purple, true), tx(220, '4辺が等しい → ひし形', 12, C.gray))],
  },
  {
    note: 'PとQを直線で結びます。これがABの垂直二等分線です。❓ なぜ垂直で、しかも真ん中を通るの？ ひし形の2本の対角線は、必ず垂直に交わり、たがいの真ん中で交わるからです。',
    add: [ln(cP[0], cP[1] - 8, cQ[0], cQ[1] + 8, C.red, false, 2.6), pg([P2(160, 100), P2(170, 100), P2(170, 90), P2(160, 90)], C.red, R_T), ...band(176, tx(198, 'PQ は AB の中点Mを通り、ABに垂直', 13, C.red, true), tx(220, '❓ ひし形の対角線は 垂直で、真ん中で交わる', 11, C.gray))],
  },
  {
    note: '❓ 垂直二等分線の上のどの点も、AとBから同じきょり？ そうです。線上に点Xをとると、三角形XAMと三角形XBMは、AM＝BM、XMは共通、角Mが直角、と2辺とその間の角が等しいので合同。だから XA＝XB になります。',
    add: [...pt(160, 78, 'X', C.purple, 12, 0), ln(160, 78, cA[0], cA[1], C.purple, true, 1.6), ln(160, 78, cB[0], cB[1], C.purple, true, 1.6), ...band(176, tx(198, '線上のどこでも XA ＝ XB', 14, C.purple, true), tx(220, '「2点から等距離」＝ 垂直二等分線', 12, C.gray))],
  },
  {
    note: '次は角の二等分線。角を半分に分ける線です。頂点Oから出る2本の辺があり、この角を2等分する半直線を作図します。',
    add: F([...angBase(), ...arc(oo[0], oo[1], 30, 0, 50, C.gray, 1.6)], [tx(200, '角の二等分線 ＝ 角を半分に分ける半直線', 13, C.ink, true), tx(222, 'これもコンパスだけで作図できる', 12, C.gray)]),
  },
  {
    note: 'まず、頂点Oを中心に円の弧をかいて、2つの辺と交わる点D、Eを作ります。❓ なぜ OD＝OE になるの？ 同じ円の弧の上の点で、どちらも半径だからです。',
    add: [...arc(oo[0], oo[1], 60, -6, 56, C.blue, 2), ...pt(dPt[0], dPt[1], 'D', C.blue, 0, 14), ...pt(ePt[0], ePt[1], 'E', C.blue, -10, -4), lb(255, 52, 'OD ＝ OE', 13, C.blue, 'middle', true), lb(255, 70, '（同じ半径）', 11, C.gray)],
  },
  {
    note: '次に、DとE を中心に、同じ半径の弧をかいて、2つの弧が交わる点Fを作ります。FD＝FE です。',
    add: [...arcTo(dPt[0], dPt[1], 45, fPt[0], fPt[1], 25, C.green), ...arcTo(ePt[0], ePt[1], 45, fPt[0], fPt[1], 25, C.red), ...pt(fPt[0], fPt[1], 'F', C.red, 10, -6), cover(200, 40, 120, 40), lb(255, 52, 'FD ＝ FE', 13, C.green, 'middle', true), lb(255, 70, '（同じ半径）', 11, C.gray)],
  },
  {
    note: 'OとFを結んで、半直線OFをひきます。これが角の二等分線です。❓ なぜ角が半分になるの？ 三角形ODFと三角形OEFで、OD＝OE、DF＝EF、OFは共通。3つの辺が等しいので合同で、角DOFと角EOFが等しくなるからです。',
    add: [ln(oo[0], oo[1], onRay(25, 175)[0], onRay(25, 175)[1], C.red, false, 2.6), ln(dPt[0], dPt[1], fPt[0], fPt[1], C.purple, true, 1.5), ln(ePt[0], ePt[1], fPt[0], fPt[1], C.purple, true, 1.5), sc(oo[0], oo[1], 40, 0, 25, C.blue, B_T), sc(oo[0], oo[1], 40, 25, 50, C.green, G_T), cover(200, 40, 120, 40), lb(255, 52, '△ODF ≡ △OEF', 12, C.purple, 'middle', true), lb(255, 70, '（3辺が等しい）', 11, C.gray)],
  },
  {
    note: '❓ 二等分線の上の点は、何から等しいきょりなの？ 2つの辺までのきょりです。線上の点Zから、2辺に垂線をおろすと、できる2つの直角三角形は、斜辺OZが共通で、角も等しい（半分ずつ）ので合同。だから垂線の長さが等しくなります。',
    add: [...pt(zPt[0], zPt[1], 'Z', C.purple, 12, -4), ln(zPt[0], zPt[1], zf1[0], zf1[1], C.purple, true, 1.8), ln(zPt[0], zPt[1], zf2[0], zf2[1], C.purple, true, 1.8), cover(200, 40, 120, 40), lb(255, 52, '2辺までの', 12, C.purple, 'middle', true), lb(255, 70, 'きょりが等しい', 12, C.purple, 'middle', true)],
  },
  {
    note: '2つの二等分線の使い分けです。「2点から等距離」なら垂直二等分線、「2辺から等距離」なら角の二等分線。文章題では、「等しい距離」の相手が点か辺かを最初に見分けます。',
    add: F([bx(20, 18, 130, 50, '2点から等距離', C.blue, FILL.blue, 13), ar(85, 70, 85, 84, C.blue), bx(20, 86, 130, 34, '垂直二等分線', C.blue, FILL.blue, 14), bx(170, 18, 130, 50, '2辺から等距離', C.green, FILL.green, 13), ar(235, 70, 235, 84, C.green), bx(170, 86, 130, 34, '角の二等分線', C.green, FILL.green, 14)], [tx(160, 'まず、相手が「点」か「辺」かを見る', 14, C.ink, true), tx(192, '線の上の点は、その2つから等しいきょり', 13, C.gray), tx(218, '作図の線は消さずに残す（採点の対象）', 12, C.red, true)]),
  },
  {
    note: '三角形の外心です。3つの辺の垂直二等分線は1点で交わり、その点（外心）は3つの頂点から等しいきょりです。❓ なぜ？ AB・BCの垂直二等分線の交点は、「2点から等距離」の点が2回ぶんそろうので、3頂点から同じきょりになるからです。',
    add: F([pg([tA, tB, tC], C.gray, FILL.gray), ...circ(cc[0], cc[1], dist(cc, tA), C.blue), ...[[tA, tB], [tB, tC], [tC, tA]].map(([a, b]) => ln(mid(a, b)[0], mid(a, b)[1], cc[0], cc[1], C.purple, true, 1.5)), ...pt(cc[0], cc[1], undefined, C.red), lb(cc[0] + 10, cc[1] - 8, '外心', 11, C.red, 'start', true)], [tx(196, '3辺の垂直二等分線の交点 ＝ 外心', 13, C.red, true), tx(218, '3頂点から等距離 → 外接円の中心', 12, C.ink)]),
  },
  {
    note: '三角形の内心です。3つの角の二等分線は1点で交わり、その点（内心）は3つの辺から等しいきょりです。❓ なぜ？ 「2辺から等距離」の点が、どの2辺の組でもそろうので、3辺から同じきょりになるからです。',
    add: F([pg([iA, iB, iC], C.gray, FILL.gray), ...circ(ic.c[0], ic.c[1], ic.r, C.blue), ...[iA, iB, iC].map((v) => ln(v[0], v[1], ic.c[0], ic.c[1], C.purple, true, 1.5)), ...pt(ic.c[0], ic.c[1], undefined, C.red), lb(ic.c[0] + 10, ic.c[1] - 8, '内心', 11, C.red, 'start', true)], [tx(184, '3つの角の二等分線の交点 ＝ 内心', 13, C.red, true), tx(206, '3辺から等距離 → 内接円の中心', 12, C.ink), tx(226, '外心 ＝ 垂直二等分線、内心 ＝ 角の二等分線', 11, C.gray)]),
  },
  {
    note: '例題：2点A、Bから等しい距離にあり、直線 l の上にある点Pを作図するには？ ❓ なぜ垂直二等分線を使うの？ 「2点から等距離」の点は、ABの垂直二等分線の上にあるからです。その線と l の交点がPです。',
    add: F([ln(30, 90, 300, 190, C.gray, false, 2), lb(300, 178, 'l', 13, C.gray, 'middle', true), ...pt(80, 160, 'A', C.ink, 0, 14), ...pt(200, 160, 'B', C.ink, 0, 14), ln(140, 30, 140, 200, C.red, false, 2.2), ...pt(140, 90 + (110 / 270) * 100, 'P', C.red, 12, -6), ln(140, 90 + (110 / 270) * 100, 80, 160, C.purple, true, 1.5), ln(140, 90 + (110 / 270) * 100, 200, 160, C.purple, true, 1.5)], [tx(214, 'ABの垂直二等分線と l の交点が P', 13, C.red, true)]),
  },
]);

// ── 46. 垂線の作図 ──
const lY = 60;
const pP = P2(140, 12);
const half1 = Math.sqrt(70 * 70 - (lY - pP[1]) * (lY - pP[1]));
const vA = P2(140 - half1, lY), vB = P2(140 + half1, lY);
const qQ = P2(140, lY + Math.sqrt(66 * 66 - half1 * half1));
const lineL = (y: number = lY): E[] => [ln(20, y, 300, y, C.ink, false, 2.2), lb(302, y - 10, 'l', 13, C.ink, 'end', true)];
const lY2 = 100;
const p2 = P2(150, lY2);
const w2A = P2(90, lY2), w2B = P2(210, lY2);
const w2Q = P2(150, lY2 - Math.sqrt(80 * 80 - 60 * 60));
const eq0 = P2(60, 170), eq1 = P2(160, 170), eq2 = P2(110, 170 - 86.6);
const suisen: DiagramFigure = show([
  {
    note: '直線 l と、その外にある点Pがあります。Pから l に垂線（l に垂直な直線）をひきます。ふつうは三角定規を使いますが、コンパスだけでも正確に作図できます。',
    add: [...lineL(), ...pt(pP[0], pP[1], 'P', C.red, 12, -2), ...band(148, tx(176, 'Pから直線 l への垂線を作図', 14, C.ink, true), tx(204, 'コンパスと定規だけで', 12, C.gray))],
  },
  {
    note: 'まず、Pを中心にして、l と2点で交わる弧をかきます。その2点をA、Bとします。❓ なぜこうするの？ Pから A・B までのきょりが同じ（半径）になり、PA＝PB と、Pが「2点から等距離」の点になるからです。',
    add: [...arc(pP[0], pP[1], 70, 215, 325, C.blue, 2), ...pt(vA[0], vA[1], 'A', C.blue, 0, 14), ...pt(vB[0], vB[1], 'B', C.blue, 0, 14), ...band(148, tx(176, 'PA ＝ PB（同じ半径）', 14, C.blue, true), tx(204, 'Pは A・B から等距離の点', 12, C.gray))],
  },
  {
    note: '次に、AとBを中心にして、同じ半径の弧をかきます。半径はABの半分より大きくします。l の反対側で、2つの弧が交わる点Qができます。QA＝QB です。',
    add: [...arcTo(vA[0], vA[1], 66, qQ[0], qQ[1], 22, C.blue), ...arcTo(vB[0], vB[1], 66, qQ[0], qQ[1], 22, C.red), ...pt(qQ[0], qQ[1], 'Q', C.red, 12, 0), ...band(148, tx(176, 'QA ＝ QB（同じ半径）', 14, C.red, true), tx(204, 'Q も A・B から等距離の点', 12, C.gray))],
  },
  {
    note: 'PとQを結ぶと、これが垂線です。❓ なぜ垂直になるの？ PもQも A・B から等距離。「2点から等距離」の点をつなぐと、ABの垂直二等分線になるので、PQはABと垂直に交わります。垂線の作図は、垂直二等分線の作図そのものです。',
    add: [ln(pP[0], pP[1] - 6, qQ[0], qQ[1] + 6, C.red, false, 2.6), pg([P2(140, lY), P2(149, lY), P2(149, lY + 9), P2(140, lY + 9)], C.red, R_T), ...band(148, tx(176, 'PQ ⟂ l（垂線）', 15, C.red, true), tx(204, '＝ AB の垂直二等分線', 12, C.gray))],
  },
  {
    note: '❓ なぜ2回目の弧の半径は「ABの半分より大きく」なの？ 小さいと、AとBからの弧が届かなくて、交わらないからです。ABの半分の長さのちょうど真ん中で出会うには、それより長い半径が要ります。',
    add: F([...lineL(), ...pt(vA[0], vA[1], 'A', C.ink, 0, -8), ...pt(vB[0], vB[1], 'B', C.ink, 0, -8), ...arc(vA[0], vA[1], 40, -80, 80, C.blue, 2), ...arc(vB[0], vB[1], 40, 100, 260, C.red, 2), lb(140, lY + 30, '↑ 弧がとどかない', 11, C.purple, 'middle', true)], [tx(176, '半径 ＜ ABの半分 → 弧が交わらない', 13, C.purple, true), tx(204, '半径は「ABの半分より大きく」', 13, C.ink, true)]),
  },
  {
    note: '点Pが直線 l の上にあるときも、手順は同じです。まず、Pを中心にした弧で、l を A、Bの2点で切ります。❓ なぜ同じ手順で作れるの？ PA＝PB なので、Pは AB の中点になります。あとは AB の垂直二等分線をひけばよいからです。',
    add: F([...lineL(lY2), ...pt(p2[0], p2[1], 'P', C.red, 0, 14), ...arc(p2[0], p2[1], 60, 30, 150, C.blue, 2), ...pt(w2A[0], w2A[1], 'A', C.blue, 0, 14), ...pt(w2B[0], w2B[1], 'B', C.blue, 0, 14)], [tx(166, 'PA ＝ PB → P は AB の真ん中', 14, C.blue, true), tx(196, '（直線の上の点でも、外の点でも同じ）', 12, C.gray)]),
  },
  {
    note: '次に、AとBから同じ半径の弧をかいて、交点Qを作り、PとQを結びます。これが P を通る l の垂線です。直線上の点でも、直線外の点でも、「等距離の2点をとって垂直二等分線」に帰着します。',
    add: [...arcTo(w2A[0], w2A[1], 80, w2Q[0], w2Q[1], 22, C.blue), ...arcTo(w2B[0], w2B[1], 80, w2Q[0], w2Q[1], 22, C.red), ...pt(w2Q[0], w2Q[1], 'Q', C.red, 12, 0), ln(w2Q[0], w2Q[1] - 6, p2[0], p2[1], C.red, false, 2.6), pg([P2(150, lY2), P2(159, lY2), P2(159, lY2 - 9), P2(150, lY2 - 9)], C.red, R_T), ...band(148, tx(176, 'PQ ⟂ l', 15, C.red, true), tx(204, '❓ Q も A・B から等距離', 12, C.gray))],
  },
  {
    note: '垂線を使って、いろいろな角を作れます。30°の角は、まず正三角形をかきます。❓ なぜ正三角形の角は60°なの？ 3つの辺が等しいと、3つの角も等しく、三角形の内角の和180°を3等分して 180÷3＝60° だからです。',
    add: F([pg([eq0, eq1, eq2], C.gray, FILL.gray), ln(eq0[0], eq0[1], eq1[0], eq1[1], C.ink, false, 2.2), sc(eq0[0], eq0[1], 26, 0, 60, C.blue, B_T), lb(98, 148, '60°', 11, C.blue, 'start', true), lb(110, 178, '3辺が等しい', 11, C.gray)], [tx(198, '正三角形の角 ＝ 180° ÷ 3 ＝ 60°', 14, C.blue, true), tx(220, '3つの角がぜんぶ等しいから', 12, C.gray)]),
  },
  {
    note: 'その60°の角を二等分すれば、30°です。60°÷2＝30°。❓ 二等分線の作図は前の項目で学びました。半分ずつの角は等しいので、どちらも 30° になります。',
    add: F([pg([eq0, eq1, eq2], C.gray, FILL.gray), ln(eq0[0], eq0[1], mid(eq1, eq2)[0], mid(eq1, eq2)[1], C.red, false, 2.4), sc(eq0[0], eq0[1], 34, 0, 30, C.blue, B_T), sc(eq0[0], eq0[1], 34, 30, 60, C.green, G_T), lb(118, 154, '30°', 11, C.blue, 'start', true), lb(102, 127, '30°', 11, C.green, 'start', true)], [tx(198, '60° ÷ 2 ＝ 30°', 16, C.red, true), tx(220, '半分ずつの角は等しい', 12, C.gray)]),
  },
  {
    note: '45°の角は、垂線をひいて90°を作り、その角を二等分します。90°÷2＝45°。垂線の作図で直角が作れるので、直角の半分として45°が作れます。',
    add: F([ln(eq0[0], eq0[1], 260, eq0[1], C.ink, false, 2.2), ln(eq0[0], eq0[1], eq0[0], 30, C.ink, false, 2.2), pg([P2(eq0[0], eq0[1]), P2(eq0[0] + 12, eq0[1]), P2(eq0[0] + 12, eq0[1] - 12), P2(eq0[0], eq0[1] - 12)], C.gray, FILL.gray), ln(eq0[0], eq0[1], eq0[0] + 100, eq0[1] - 100, C.red, false, 2.4), sc(eq0[0], eq0[1], 34, 0, 45, C.blue, B_T), sc(eq0[0], eq0[1], 34, 45, 90, C.green, G_T), lb(115, 147, '45°', 11, C.blue, 'start', true), lb(83, 114, '45°', 11, C.green, 'start', true)], [tx(198, '90° ÷ 2 ＝ 45°', 16, C.red, true), tx(220, '垂線（90°）を二等分', 12, C.gray)]),
  },
  {
    note: 'さらに、15°も作れます。30°の角を二等分すれば 30°÷2＝15°。基本作図を組み合わせると、30°、45°、60°、90°、15°などが作れます。',
    add: F([ln(eq0[0], eq0[1], 260, eq0[1], C.ink, false, 2.2), ln(eq0[0], eq0[1], onRay30()[0], onRay30()[1], C.ink, false, 2.2), ln(eq0[0], eq0[1], onRay15()[0], onRay15()[1], C.red, false, 2.4), sc(eq0[0], eq0[1], 40, 0, 15, C.blue, B_T), sc(eq0[0], eq0[1], 40, 15, 30, C.green, G_T)], [tx(198, '30° ÷ 2 ＝ 15°', 16, C.red, true), tx(220, '二等分をくり返すと半分の角ができる', 12, C.gray)]),
  },
  {
    note: 'まとめます。垂線・垂直二等分線・角の二等分線は、ぜんぶ「等距離」の考え方でつながっています。30°は60°の二等分、45°は90°の二等分。作図の線は消さずに残します。',
    add: F([bx(20, 14, 280, 28, '垂線 ＝ 垂直二等分線に帰着', C.blue, FILL.blue, 14), bx(20, 50, 280, 28, '30° ＝ 60°（正三角形）の二等分', C.green, FILL.green, 14), bx(20, 86, 280, 28, '45° ＝ 90°（垂線）の二等分', C.purple, FILL.purple, 14)], [tx(148, 'すべて「等距離」の考え方', 14, C.red, true), tx(182, '❓ 2点から等距離 ＝ 垂直二等分線', 12, C.gray), tx(206, '作図の線は消さずに残す（採点の対象）', 12, C.ink)]),
  },
]);
function onRay30(): [number, number] { return [eq0[0] + 200 * Math.cos(rad(30)), eq0[1] - 200 * Math.sin(rad(30))]; }
function onRay15(): [number, number] { return [eq0[0] + 200 * Math.cos(rad(15)), eq0[1] - 200 * Math.sin(rad(15))]; }

// ── 47. 平行線と角 ──
const w1 = P2(180, 50), w2 = P2(110, 150);
const wedge = (p: [number, number], a: number, b: number, fill: string, r = 20): E => sc(p[0], p[1], r, a, b, fill.replace('0.3', '0.9'), fill);
const letter = (p: [number, number], a: number, b: number, t: string, color: string = C.ink): E => {
  const m = rad((a + b) / 2);
  return lb(p[0] + 33 * Math.cos(m), p[1] - 33 * Math.sin(m), t, 12, color, 'middle', true);
};
const lines47 = (): E[] => [
  ln(20, 50, 300, 50, C.ink, false, 2.2), ln(20, 150, 300, 150, C.ink, false, 2.2),
  ln(201, 20, 89, 180, C.blue, false, 2.2), lb(304, 42, 'l', 13, C.ink, 'end', true), lb(304, 142, 'm', 13, C.ink, 'end', true), lb(94, 190, 't', 13, C.blue, 'middle', true),
];
const W = { a: [0, 55], b: [55, 180], c: [180, 235], d: [235, 360] } as const;
const allLetters = (): E[] => [
  ...(['a', 'b', 'c', 'd'] as const).map((k) => letter(w1, W[k][0], W[k][1], k)),
  ...(['e', 'f', 'g', 'h'] as const).map((k, i) => letter(w2, [0, 55, 180, 235][i], [55, 180, 235, 360][i], k)),
];
const P47 = (q: string): E[] => band(196, tx(220, q, 12, C.ink, true));
const K47u = P2(110, 40);
const K47 = P2(110 + 65 / Math.tan(rad(50)), 105);
const K47w = P2(K47[0] - 65 / Math.tan(rad(30)), 170);
const heikou: DiagramFigure = show([
  {
    note: '平行な2直線 l、m に、1本の直線 t が交わっています。できる8つの角に、a から h の名前をつけました。同じ形の位置にある角どうしの関係を調べます。',
    add: [...lines47(), ...allLetters(), ...P47('l ∥ m ： 平行な2直線に直線 t が交わる')],
  },
  {
    note: '❓ 対頂角は、なぜ等しいの？ a＋b＝180°（一直線）、b＋c＝180°（一直線）なので、a＝c。同じように b＝d。これは l と m が平行かどうかに関係なく、いつでも成り立ちます。',
    add: [wedge(w1, 0, 55, R_T), wedge(w1, 180, 235, R_T), wedge(w1, 55, 180, B_T), wedge(w1, 235, 360, B_T), ...band(196, tx(214, 'a ＝ c　　b ＝ d（対頂角はいつでも等しい）', 12, C.ink, true))],
  },
  {
    note: '同位角です。a と e のように、同じ側の同じ位置にある角。❓ なぜ平行なら等しいの？ l と m が平行だと、l をそのまま t にそって m の位置まで平行に動かせるので、a が e にぴったり重なるからです。',
    add: F([...lines47(), ...allLetters(), wedge(w1, 0, 55, G_T), wedge(w2, 0, 55, G_T)], P47('平行なら 同位角は等しい　a ＝ e')),
  },
  {
    note: '錯角です。c と e のように、t をはさんで反対側で、l と m の内側にある角。❓ なぜ等しいの？ c は a と対頂角なので c＝a。a は e と同位角なので a＝e。だから c＝e です。',
    add: F([...lines47(), ...allLetters(), wedge(w1, 180, 235, P_T), wedge(w2, 0, 55, P_T)], P47('平行なら 錯角は等しい　c ＝ a ＝ e')),
  },
  {
    note: '同側内角です。d と e のように、t の同じ側で、l と m の内側にある角。❓ なぜ和が180°なの？ d＋c＝180°（一直線）で、c＝e（錯角）なので、d＋e＝180°になるからです。',
    add: F([...lines47(), ...allLetters(), wedge(w1, 235, 360, R_T), wedge(w2, 0, 55, B_T)], P47('平行なら 同側内角の和は 180°　d ＋ e ＝ 180°')),
  },
  {
    note: '❓ 逆も言えるの？ はい。同位角や錯角が等しければ、l と m は平行です。「平行なら等しい」は「平行線の性質」、「等しければ平行」は「平行線になるための条件」。証明では、この2つを使い分けます。',
    add: F([bx(20, 20, 130, 50, '平行 ⇒\n同位角・錯角が等しい', C.blue, FILL.blue, 12), bx(170, 20, 130, 50, '同位角・錯角が等しい\n⇒ 平行', C.green, FILL.green, 12), ar(85, 74, 85, 96, C.blue), ar(235, 74, 235, 96, C.green), bx(20, 100, 130, 30, '角の大きさを求める', C.blue, FILL.blue, 12), bx(170, 100, 130, 30, '平行を証明する', C.green, FILL.green, 12)], [tx(166, '対頂角は、いつでも等しい', 14, C.red, true), tx(196, '同位角・錯角は、平行のときだけ', 13, C.ink, true)]),
  },
  {
    note: '折れ線の問題です。平行な2直線にはさまれた折れ線で、上の角が50°、下の角が30°。折れ点の角はいくつ？ 直線 l、m はどちらも平行で、折れ点が2本の間にあります。',
    add: F([ln(30, 40, 300, 40, C.ink, false, 2.2), ln(30, 170, 300, 170, C.ink, false, 2.2), lb(304, 32, 'l', 13, C.ink, 'end', true), lb(304, 162, 'm', 13, C.ink, 'end', true), ln(K47u[0], K47u[1], K47[0], K47[1], C.blue, false, 2.4), ln(K47[0], K47[1], K47w[0], K47w[1], C.blue, false, 2.4), sc(K47u[0], K47u[1], 24, -50, 0, B_T.replace('0.30', '0.9'), B_T), lb(K47u[0] + 44, K47u[1] + 10, '50°', 12, C.blue, 'middle', true), sc(K47w[0], K47w[1], 24, 0, 30, G_T.replace('0.32', '0.9'), G_T), lb(K47w[0] + 44, K47w[1] - 6, '30°', 12, C.green, 'middle', true), lb(K47[0] + 16, K47[1], '？', 15, C.red, 'start', true)], [tx(206, '上の角 50°、下の角 30° → 折れ点の角は？', 13, C.ink, true)]),
  },
  {
    note: '❓ どうやって解くの？ 折れ点Kを通って、l と m に平行な補助線をひきます。すると、Kの角は上と下の2つに分かれ、上の角は50°の錯角、下の角は30°の錯角になります。だから 50°＋30°＝80°です。',
    add: [ln(30, K47[1], 300, K47[1], C.purple, true, 1.8), sc(K47[0], K47[1], 26, 130, 180, B_T.replace('0.30', '0.9'), B_T), sc(K47[0], K47[1], 26, 180, 210, G_T.replace('0.32', '0.9'), G_T), lb(K47[0] - 44, K47[1] - 10, '50°', 12, C.blue, 'middle', true), lb(K47[0] - 44, K47[1] + 16, '30°', 12, C.green, 'middle', true), ...band(196, tx(214, '50° ＋ 30° ＝ 80°', 15, C.red, true))],
  },
  {
    note: '❓ なぜ補助線をひくの？ 折れ点の角は、直接はどの平行線とも結びつかないからです。補助線で2つに分けると、それぞれが平行線と錯角の関係になって、大きさが分かる角になります。',
    add: F([bx(20, 18, 280, 32, '折れ点の角は、そのままでは求められない', C.gray, FILL.gray, 13), bx(20, 62, 280, 32, '折れ点を通る平行線を補助線にひく', C.purple, FILL.purple, 14), bx(20, 106, 280, 32, '2つの角がそれぞれ錯角になる', C.blue, FILL.blue, 14)], [tx(170, '❓ 角を「分けて」、錯角でつなぐ', 14, C.red, true), tx(198, '折れ線には、折れ点を通る平行線', 13, C.ink, true)]),
  },
  {
    note: '別の値でも同じです。上の角が40°、下の角が70°なら、折れ点の角は 40°＋70°＝110°。折れ点の角は、上の角と下の角の和になります。',
    add: F([ln(30, 40, 300, 40, C.ink, false, 2.2), ln(30, 170, 300, 170, C.ink, false, 2.2), ln(110, 40, 187.5, 105, C.blue, false, 2.4), ln(187.5, 105, 163.8, 170, C.blue, false, 2.4), ln(30, 105, 300, 105, C.purple, true, 1.8), sc(110, 40, 24, -40, 0, B_T.replace('0.30', '0.9'), B_T), sc(163.8, 170, 24, 0, 70, G_T.replace('0.32', '0.9'), G_T), lb(203, 105, '？', 15, C.red, 'start', true), lb(146, 56, '40°', 12, C.blue, 'middle', true), lb(196, 158, '70°', 12, C.green, 'middle', true)], [tx(206, '40° ＋ 70° ＝ 110°', 15, C.red, true), tx(226, '確かめ：折れ点の角は 90° を少しこえる（鈍角）', 11, C.gray)]),
  },
  {
    note: 'まとめます。対頂角はいつでも等しい。同位角・錯角は、平行のときだけ等しい。同側内角は、平行のとき和が180°。折れ線には、折れ点を通る平行線を補助線としてひきます。',
    add: F([bx(20, 14, 280, 28, '対頂角 ＝ いつでも等しい', C.red, FILL.red, 14), bx(20, 50, 280, 28, '同位角・錯角 ＝ 平行のときだけ等しい', C.blue, FILL.blue, 13), bx(20, 86, 280, 28, '同側内角 ＝ 平行のとき和が180°', C.green, FILL.green, 13)], [tx(146, '折れ線 → 折れ点を通る平行線', 14, C.purple, true), tx(178, '❓ 錯角に分けて、和を求める', 12, C.gray), tx(204, '検算：折れ点の角 ＝ 上の角 ＋ 下の角', 12, C.ink)]),
  },
]);

// ── 48. 多角形の内角と外角 ──
const polyPts = (cx: number, cy: number, r: number, n: number): [number, number][] =>
  Array.from({ length: n }, (_, i) => P2(cx + r * Math.cos(rad(-90 + (360 * i) / n)), cy + r * Math.sin(rad(-90 + (360 * i) / n))));
const pent = polyPts(160, 82, 64, 5);
const dode = polyPts(160, 76, 62, 12);
const angOf = (c: [number, number], p: [number, number]) => dirTo(c[0], c[1], p[0], p[1]);
const wedgeBetween = (c: [number, number], a: number, b: number, r: number, color: string, fill: string): E => {
  const d = (((b - a) % 360) + 360) % 360;
  return d <= 180 ? sc(c[0], c[1], r, a, a + d, color, fill) : sc(c[0], c[1], r, b, b + (360 - d), color, fill);
};
const extPt = (poly: [number, number][], i: number): [number, number] => {
  const p0 = poly[i - 1], p1 = poly[i];
  return [p1[0] + (p1[0] - p0[0]) * 0.6, p1[1] + (p1[1] - p0[1]) * 0.6];
};
const angleMarks = (poly: [number, number][], i: number, r = 20): E[] => {
  const p0 = poly[i - 1], p1 = poly[i], p2n = poly[(i + 1) % poly.length];
  const e = extPt(poly, i);
  return [
    ln(p1[0], p1[1], e[0], e[1], C.red, true, 1.6),
    wedgeBetween(p1, angOf(p1, p0), angOf(p1, p2n), r, C.blue, B_T),
    wedgeBetween(p1, angOf(p1, e), angOf(p1, p2n), r + 6, C.red, R_T),
  ];
};
const tamen: DiagramFigure = show([
  {
    note: '多角形の内角の和を考えます。三角形の内角の和は180°でした。ほかの多角形は、この三角形をいくつ組み合わせたかで求めます。',
    add: [pg([P2(110, 110), P2(210, 110), P2(160, 30)], C.blue, B_T), lb(160, 98, '内角の和 180°', 12, C.blue, 'middle', true), ...band(140, tx(170, '三角形の内角の和 ＝ 180°', 15, C.blue, true), tx(200, 'これを基準にする', 12, C.gray))],
  },
  {
    note: '五角形を、1つの頂点から対角線で三角形に分けます。すると、3つの三角形に分かれます。内角の和は 180°×3＝540°。三角形1つぶんが180°だから、3個ぶんです。',
    add: F([pg(pent, C.gray, FILL.gray), pg([pent[0], pent[1], pent[2]], C.blue, B_T), pg([pent[0], pent[2], pent[3]], C.green, G_T), pg([pent[0], pent[3], pent[4]], C.purple, P_T), ln(pent[0][0], pent[0][1], pent[2][0], pent[2][1], C.red, false, 1.8), ln(pent[0][0], pent[0][1], pent[3][0], pent[3][1], C.red, false, 1.8), lb(pent[0][0], pent[0][1] - 10, '頂点', 10, C.red, 'middle', true)], [eb(150, '5角形 ＝ 三角形3個 ＝ 180°×3 ＝ 540°', C.red, FILL.red, 14, 30), tx(200, '1つの頂点から対角線を引いて分ける', 13, C.ink, true)]),
  },
  {
    note: '六角形なら三角形が4個で 720°。ふえるごとに、内角の和は180°ずつふえます。三角形180°、四角形360°、五角形540°、六角形720°。',
    add: F([bx(20, 10, 130, 26, '三角形', C.gray, FILL.gray, 13), bx(160, 10, 130, 26, '180°', C.blue, FILL.blue, 13), bx(20, 46, 130, 26, '四角形', C.gray, FILL.gray, 13), bx(160, 46, 130, 26, '360°', C.blue, FILL.blue, 13), bx(20, 82, 130, 26, '五角形', C.gray, FILL.gray, 13), bx(160, 82, 130, 26, '540°', C.blue, FILL.blue, 13), bx(20, 118, 130, 26, '六角形', C.gray, FILL.gray, 13), bx(160, 118, 130, 26, '720°', C.blue, FILL.blue, 13), lb(304, 41, '+180', 9, C.red, 'middle', true), lb(304, 77, '+180', 9, C.red, 'middle', true), lb(304, 113, '+180', 9, C.red, 'middle', true)], [tx(180, '辺が1つふえるごとに 180° ふえる', 14, C.red, true), tx(208, '❓ 三角形が1つふえるから', 13, C.gray)]),
  },
  {
    note: '❓ なぜ n角形は三角形が (n−2) 個なの？ 1つの頂点からは、自分自身と両どなりの点には対角線が引けません（となりは辺になる）。だから対角線は n−3 本で、分かれる三角形は n−2 個。五角形なら 5−2＝3個です。',
    add: F([pg(pent, C.gray, FILL.gray), ...pent.map((p, i) => ci(p[0], p[1], 5, undefined, i === 0 ? C.red : i === 1 || i === 4 ? C.gray : C.blue, i === 0 ? C.red : i === 1 || i === 4 ? '#FFFFFF' : C.blue)), ln(pent[0][0], pent[0][1], pent[2][0], pent[2][1], C.blue, false, 1.8), ln(pent[0][0], pent[0][1], pent[3][0], pent[3][1], C.blue, false, 1.8), lb(pent[1][0] + 28, pent[1][1] - 2, '辺（引けない）', 9, C.gray, 'start'), lb(pent[4][0] - 28, pent[4][1] - 2, '辺（引けない）', 9, C.gray, 'end')], [eb(150, '対角線 n−3 本 → 三角形 n−2 個', C.red, FILL.red, 14, 30), tx(200, '内角の和 ＝ 180° × (n − 2)', 14, C.ink, true)]),
  },
  {
    note: '次は外角です。多角形の1つの辺を延長したとき、延長線と、となりの辺がつくる角が外角です。内角と外角は一直線をつくるので、内角＋外角＝180°。この五角形の頂点なら 108°＋72°＝180°。',
    add: F([pg(pent, C.gray, FILL.gray), ...angleMarks(pent, 1), lb(pent[1][0] - 10, pent[1][1] + 22, '内角', 10, C.blue, 'end', true), lb(pent[1][0] + 34, pent[1][1] + 0, '外角', 10, C.red, 'start', true)], [eb(150, '内角 ＋ 外角 ＝ 180°', C.red, FILL.red, 16, 30), tx(200, '（一直線だから）', 13, C.gray)]),
  },
  {
    note: '❓ なぜ外角の和は、n によらず360°なの？ 多角形のまわりを歩いて1周するところを想像します。各頂点で外角ぶんだけ向きを変えながら進むと、ぐるっと1周して元の向きにもどります。1周は360°の回転です。',
    add: F([pg(pent, C.gray, FILL.gray), ...pent.map((p, i) => ar(p[0] + (pent[(i + 1) % 5][0] - p[0]) * 0.18, p[1] + (pent[(i + 1) % 5][1] - p[1]) * 0.18, p[0] + (pent[(i + 1) % 5][0] - p[0]) * 0.82, p[1] + (pent[(i + 1) % 5][1] - p[1]) * 0.82, C.blue)), ...pent.map((p) => ci(p[0], p[1], 4, undefined, C.red, C.red)), lb(160, 84, '1周 ＝ 360°', 13, C.red, 'middle', true)], [tx(170, '各頂点で「外角」ぶん向きを変える', 13, C.ink, true), tx(196, '1周して元の向き ＝ 360° 回転', 14, C.red, true)]),
  },
  {
    note: '式でも確かめます。n個の頂点それぞれで 内角＋外角＝180° なので、全部で 180°×n。内角の和は 180°×(n−2)＝180n−360。差をとると、外角の和は 180n−(180n−360)＝360°。n が消えます。',
    add: F([bx(20, 14, 280, 28, '(内角＋外角) の合計 ＝ 180° × n', C.gray, FILL.gray, 14), bx(20, 52, 280, 28, '内角の和 ＝ 180° × (n−2) ＝ 180n − 360', C.blue, FILL.blue, 13), bx(20, 90, 280, 28, '外角の和 ＝ 180n − (180n − 360) ＝ 360°', C.red, FILL.red, 13)], [tx(150, 'n が消える → 何角形でも 360°', 15, C.red, true), tx(184, '確かめ：五角形 内角540°＋外角360°＝900°＝180°×5', 12, C.green, true)]),
  },
  {
    note: '正十二角形の1つの内角。正多角形は角がぜんぶ等しいので、外角の和360°を12でわると、1つの外角は 360÷12＝30°。内角＝180−30＝150°。❓ なぜ外角から？ 外角の和はいつも360°と決まっているので、内角の和を出すより楽だからです。',
    add: F([pg(dode, C.gray, FILL.gray), ...angleMarks(dode, 1, 14), lb(dode[1][0] - 20, dode[1][1] + 26, '150°', 10, C.blue, 'end', true), lb(dode[1][0] + 28, dode[1][1] - 4, '30°', 10, C.red, 'start', true)], [eb(146, '外角 ＝ 360 ÷ 12 ＝ 30°', C.red, FILL.red, 15, 28), tx(190, '内角 ＝ 180 − 30 ＝ 150°', 14, C.blue, true), tx(214, '確かめ：150×12＝1800＝180×(12−2) ✓', 12, C.green)]),
  },
  {
    note: '内角の和が1080°の多角形は何角形？ 180×(n−2)＝1080 なので、n−2＝1080÷180＝6、n＝8。八角形です。❓ なぜ最後に2を足すの？ 三角形の数が n−2 だったので、もとの n にもどすには2を足します。',
    add: F([eb(14, '180 × (n − 2) ＝ 1080', C.gray, FILL.gray, 16, 30), ar(160, 46, 160, 60, C.gray), eb(62, 'n − 2 ＝ 1080 ÷ 180 ＝ 6', C.blue, FILL.blue, 15, 30), ar(160, 94, 160, 108, C.gray), eb(110, 'n ＝ 6 ＋ 2 ＝ 8　→ 八角形', C.red, FILL.red, 16, 30)], [tx(176, '確かめ：八角形 180×(8−2)＝1080 ✓', 13, C.green, true), tx(204, '❓ n−2 は三角形の数。2を足して n にもどす', 12, C.gray)]),
  },
  {
    note: '1つの外角が45°の正多角形は何角形？ 外角の和は360°なので、360÷45＝8。正八角形です。外角の個数が、そのまま頂点の数（辺の数）に等しくなっています。',
    add: F([...[polyPts(110, 76, 56, 8)].map((pp) => pg(pp, C.gray, FILL.gray)), ...angleMarks(polyPts(110, 76, 56, 8), 1, 12), bx(190, 34, 116, 30, '外角 45°', C.red, FILL.red, 14), bx(190, 78, 116, 30, '360 ÷ 45 ＝ 8', C.blue, FILL.blue, 14)], [eb(146, '正八角形', C.red, FILL.red, 18, 30), tx(196, '確かめ：外角の和 45×8 ＝ 360° ✓', 13, C.green, true), tx(218, '❓ 外角はぜんぶ等しく、和が360°だから', 11, C.gray)]),
  },
  {
    note: '正二十角形の1つの内角。外角なら 360÷20＝18°、内角＝180−18＝162°。内角の和から求めると 180×18＝3240、3240÷20＝162°。答えは同じでも、外角から出す方が、計算がずっと軽くなります。',
    add: F([bx(20, 14, 132, 28, '外角から', C.blue, FILL.blue, 14), bx(168, 14, 132, 28, '内角の和から', C.gray, FILL.gray, 14), bx(20, 52, 132, 30, '360 ÷ 20 ＝ 18°', C.blue, FILL.blue, 13), bx(168, 52, 132, 30, '180×(20−2)＝3240', C.gray, FILL.gray, 12), bx(20, 90, 132, 30, '180 − 18 ＝ 162°', C.blue, FILL.blue, 13), bx(168, 90, 132, 30, '3240 ÷ 20 ＝ 162°', C.gray, FILL.gray, 13)], [tx(150, 'どちらも 162°（一致）', 15, C.red, true), tx(180, '外角から：2行で終わる', 13, C.blue, true), tx(206, '❓ 外角の和は360°と決まっているから', 12, C.gray)]),
  },
  {
    note: 'まとめます。n角形の内角の和は 180°×(n−2)、外角の和は n によらず 360°。正n角形の1つの外角は 360°÷n、1つの内角は 180°−360°÷n。正多角形は、外角から攻めると計算が軽くなります。',
    add: F([bx(20, 14, 280, 30, '内角の和 ＝ 180° × (n − 2)', C.blue, FILL.blue, 15), bx(20, 54, 280, 30, '外角の和 ＝ 360°（n によらない）', C.red, FILL.red, 15), bx(20, 94, 280, 30, '正n角形の外角 ＝ 360° ÷ n', C.green, FILL.green, 15)], [tx(154, '内角 ＝ 180° − 外角', 14, C.ink, true), tx(184, '正多角形は外角から攻める', 14, C.red, true), tx(212, '検算：外角×n ＝ 360°', 12, C.gray)]),
  },
]);

export const DIAGRAMS_KOKO_SUGAKU_OLD_D: Record<string, DiagramFigure> = {
  '一次関数の利用（動く点・水そう・料金）': ichijiRiyo,
  'y ＝ ax² のグラフの性質': axNature,
  'y ＝ ax² の変化の割合': henkaWariai,
  'y ＝ ax² の変域': henI,
  '放物線と直線の交点': kouten,
  '放物線上の2点を通る直線の傾き': tenKatamuki,
  '放物線と図形の融合問題': yugo,
  'おうぎ形の弧の長さと面積': ougi,
  '垂直二等分線と角の二等分線': nijitou,
  '垂線の作図': suisen,
  '平行線と角（同位角・錯角・対頂角）': heikou,
  '多角形の内角と外角（n角形の公式）': tamen,
};
