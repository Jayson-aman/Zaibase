// 中学受験 入試傾向問題（第0批）の動く図解スライド。
// キーは問題 id。画面の上半分に図、下の帯（band）に式やひとこと、という配置。
import type { Figure, DiagramElement } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, sc, show, band, fresh, cover } from './diagram-kit';

type E = DiagramElement;
type Pt = [number, number];

/** 下の帯に、そのスライドの式やひとことを出す。 */
const say = (text: string, color: string = C.ink, fill: string = FILL.warm, size = 12): E[] => band(150, bx(14, 160, 292, 66, text, color, fill, size));

/** 下に文字を添えたかっこ（長さの目もり）。 */
const brk = (x1: number, x2: number, y: number, text: string, color: string = C.blue, size = 10): E[] => [
  ln(x1, y, x2, y, color, false, 2),
  ln(x1, y - 4, x1, y + 4, color, false, 2),
  ln(x2, y - 4, x2, y + 4, color, false, 2),
  lb((x1 + x2) / 2, y + 12, text, size, color, 'middle', true),
];

/** 上に文字を添えたかっこ。 */
const dim = (x1: number, x2: number, y: number, text: string, color: string = C.gray, size = 10): E[] => [
  ln(x1, y, x2, y, color, false, 1.5),
  ln(x1, y - 3, x1, y + 3, color, false, 1.5),
  ln(x2, y - 3, x2, y + 3, color, false, 1.5),
  lb((x1 + x2) / 2, y - 6, text, size, color, 'middle', true),
];

const arcPts = (cx: number, cy: number, r: number, from: number, to: number, n = 24): Pt[] => {
  const out: Pt[] = [];
  for (let i = 0; i <= n; i++) {
    const a = ((from + ((to - from) * i) / n) * Math.PI) / 180;
    out.push([cx + r * Math.cos(a), cy - r * Math.sin(a)]);
  }
  return out;
};
const arcLines = (cx: number, cy: number, r: number, from: number, to: number, color: string, n = 24): E[] => {
  const p = arcPts(cx, cy, r, from, to, n);
  const out: E[] = [];
  for (let i = 0; i < p.length - 1; i++) out.push(ln(p[i][0], p[i][1], p[i + 1][0], p[i + 1][1], color, false, 1.2));
  return out;
};

// ───────── 葉の形（2つの四分円の重なり） ─────────
const TL: Pt = [106, 18], TR: Pt = [214, 18], BL: Pt = [106, 126], BR: Pt = [214, 126];
const leafSquare = (): E => pg([TL, TR, BR, BL], C.ink, 'none');
const leafQ1 = (): E => sc(106, 126, 108, 0, 90, C.blue, 'rgba(2,132,199,0.22)');
const leafQ2 = (): E => sc(214, 18, 108, 180, 270, C.red, 'rgba(225,29,72,0.22)');
const leafLens = (): E => pg([...arcPts(106, 126, 108, 90, 0), ...arcPts(214, 18, 108, 270, 180)], C.green, 'rgba(22,163,74,0.5)');
const leafBars = (): E[] => [
  bx(30, 30, 260, 34, '四分円2つの合計 226.08', C.blue, FILL.blue, 12),
  bx(30, 86, 165.6, 34, '正方形 144', C.green, FILL.green, 12),
];
const kankan_sansu_03 = show([
  { note: '1辺12cmの正方形の、向かい合う2つの頂点を中心に、半径12cmの四分円（しぶんえん）を2つかきます。2つが重なった葉のような部分の面積を求めます。円周率は3.14です。', add: [leafQ1(), leafQ2(), leafSquare(), lb(160, 10, '12cm', 11, C.ink, 'middle', true), lb(98, 76, '12cm', 11, C.ink, 'end', true), ...say('半径12cmの四分円が2つ\n重なった葉の形（緑）の面積は？')] },
  { note: '❓なぜ2つの四分円の面積をたしても、正方形とぴったり同じにならないのでしょう。→2つの四分円で正方形をすきまなくおおえますが、緑の部分は両方に入っているので、2回数えてしまうからです。', add: [leafLens(), ...say('緑の部分は どちらの四分円にも入る\n→ たすと2回数えてしまう', C.green, FILL.green)] },
  { note: '❓まず、四分円の面積はどう求める？→円全体の面積の4分の1です。直角（90度）は1回転（360度）の4分の1だからです。12×12×3.14＝452.16、÷4で113.04cm²です。', add: fresh(ci(130, 66, 48, undefined, C.gray, FILL.warm), sc(130, 66, 48, 0, 90, C.blue, FILL.blue), ln(130, 66, 178, 66, C.ink, false, 1.6), ln(130, 66, 130, 18, C.ink, false, 1.6), lb(156, 60, '12cm', 10, C.ink, 'middle', true), lb(250, 50, '円の\n4分の1', 13, C.blue, 'middle', true), ...say('12×12×3.14 ＝ 452.16\n452.16 ÷ 4 ＝ 113.04cm²', C.blue, FILL.blue)) },
  { note: '❓四分円は2つあるので合計は？→113.04×2＝226.08cm²です。いっぽう正方形の面積は12×12＝144cm²です。', add: fresh(bx(20, 26, 130, 44, '四分円①\n113.04cm²', C.blue, FILL.blue, 12), lb(160, 52, '＋', 18, C.ink, 'middle', true), bx(170, 26, 130, 44, '四分円②\n113.04cm²', C.red, FILL.red, 12), bx(90, 92, 140, 38, '正方形 12×12＝144cm²', C.green, FILL.green, 12), ...say('四分円2つの合計\n113.04×2 ＝ 226.08cm²', C.ink, FILL.warm)) },
  { note: '❓なぜ合計は正方形より大きいの？→四分円2つで正方形をちょうどおおうので、合計は「正方形1つぶん＋重なりぶん」になります。重なりは2回数えたぶんだけ、合計が大きくなるのです。', add: fresh(...leafBars(), bx(195.6, 86, 94.4, 34, '重なり', C.red, FILL.red, 12), ...say('合計 ＝ 正方形 ＋ 重なり\n（重なりは2回数えたぶん）', C.red, FILL.red)) },
  { note: '❓では重なりはいくつ？→合計から正方形をひけば、2回数えたぶん、つまり重なりだけが残ります。226.08−144＝82.08cm²です。', add: [cover(195.6, 86, 94.4, 34), bx(195.6, 86, 94.4, 34, '82.08', C.red, FILL.red, 13), ...say('重なり ＝ 226.08 − 144\n＝ 82.08cm²', C.green, FILL.green)] },
  { note: '別の方法で確かめます。正方形の対角線で切ると、四分円から直角二等辺三角形（面積72）をひいた「弓形（ゆみがた）」が2つで葉になります。113.04−72＝41.04、その2つぶんで82.08cm²。答えは82.08cm²です。', add: fresh(leafQ1(), leafSquare(), pg([TL, BR, BL], C.purple, FILL.yellow), ln(TL[0], TL[1], BR[0], BR[1], C.purple, false, 1.6), lb(132, 106, '三角形72', 11, C.purple, 'middle', true), ...say('弓形 ＝ 113.04 − 72 ＝ 41.04\n葉 ＝ 41.04×2 ＝ 82.08cm²（一致）', C.green, FILL.green)) },
], '2つの四分円の重なり');

// ───────── 立方体を3cmの立方体に分ける ─────────
const cubeFaces = (): E[] => [
  pg([[100, 50], [154, 50], [181, 32], [127, 32]], C.ink, FILL.gray),
  pg([[154, 50], [181, 32], [181, 86], [154, 104]], C.ink, FILL.blue),
  pg([[100, 50], [154, 50], [154, 104], [100, 104]], C.ink, FILL.warm),
];
const cubeGrid = (): E[] => [
  ln(127, 50, 127, 104, C.gray), ln(100, 77, 154, 77, C.gray),
  ln(127, 50, 154, 32, C.gray), ln(113.5, 41, 167.5, 41, C.gray),
  ln(154, 77, 181, 59, C.gray), ln(167.5, 41, 167.5, 95, C.gray),
];
const grid3 = (cx: number, cy: number, n: number, s: number, hi?: number): E[] => {
  const out: E[] = [];
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
    const k = i * n + j;
    out.push(bx(cx + j * s, cy + i * s, s, s, undefined, hi === k ? C.red : C.main, hi === k ? FILL.red : FILL.warm));
  }
  return out;
};
const kankan_sansu_06 = show([
  { note: '1辺6cmの立方体を、1辺3cmの小さい立方体に分けます。全部で何個できるか、外側の面にまったくふれないものは何個かを求めます。', add: [...cubeFaces(), lb(127, 118, '6cm', 11, C.ink, 'middle', true), ...say('6cmの立方体 → 3cmの立方体に分ける\n①何個できる？ ②外にふれないのは何個？')] },
  { note: '❓まず1つの辺には何個ならぶ？→6cmを3cmずつに分けるので、6÷3＝2個ならびます。たて・横・高さのどの方向も同じです。', add: fresh(...cubeFaces(), ...cubeGrid(), ...brk(100, 154, 114, '6cm ＝ 3cm × 2個', C.blue), ...say('どの方向にも 6÷3 ＝ 2個ずつ', C.blue, FILL.blue)) },
  { note: '❓なぜかけ算で全部の個数が出るの？→上から見ると1段に2×2＝4個ならび、その段が2段かさなっています。4個ずつ2段だから、4×2＝8個、つまり2×2×2です。', add: fresh(...grid3(70, 24, 2, 44), lb(230, 58, '上から見て\n2×2＝4個', 13, C.blue, 'middle', true), ...say('1段に 4個 × 2段 ＝ 8個\n（2×2×2 ＝ 8個）', C.blue, FILL.blue)) },
  { note: '❓外の面にふれない立方体とは？→表面の1層（3cm）をはがした内側にあるものです。6cmの辺の両はしから3cmずつはがすと、6−3−3＝0cmで、内側に何も残りません。', add: fresh(bx(40, 40, 120, 34, '3cm（外側）', C.red, FILL.red, 12), bx(160, 40, 120, 34, '3cm（外側）', C.red, FILL.red, 12), lb(160, 98, '内側に残る長さ ＝ 6 − 3 − 3 ＝ 0cm', 12, C.ink, 'middle', true), ...say('どの辺も 両はしの3cmが外側\n内側は 0cm → ふれないものは0個', C.red, FILL.red)) },
  { note: '❓個数で考えると？→1つの方向に2個ならんでいて、その両はしの2個はどちらも外にふれます。内側の個数は2−2＝0個。0×0×0＝0個です。', add: fresh(bx(90, 40, 60, 40, '外', C.red, FILL.red, 14), bx(150, 40, 60, 40, '外', C.red, FILL.red, 14), lb(160, 100, '両はしの2個が 外にふれる', 12, C.red, 'middle', true), ...say('内側の個数 ＝ 2 − 2 ＝ 0個\n0×0×0 ＝ 0個', C.red, FILL.red)) },
  { note: '❓もし1辺が9cmなら？→どの方向も9÷3＝3個ならび、内側は3−2＝1個。1×1×1＝1個、まん中の1個だけが外にふれません。3個以上ならんで、はじめて内側ができるのです。', add: fresh(...grid3(50, 16, 3, 40, 4), lb(250, 60, '上から見て\nまん中だけ\n内側（1個）', 12, C.red, 'middle', true), ...say('1辺9cm：3×3×3＝27個\n内側は (3−2)×(3−2)×(3−2)＝1個', C.purple, FILL.purple)) },
  { note: '答えは、全部で8個、外にふれないものは0個です。確かめると、8個はどれも大きい立方体のかどにあり、3つの面が外に出ています。ふれていないものは1つもありません。', add: fresh(...cubeFaces(), ...cubeGrid(), pg([[100, 77], [127, 77], [127, 104], [100, 104]], C.red, FILL.red), lb(240, 70, 'どの1個も\nかどの立方体', 12, C.red, 'middle', true), ...say('答え：全部で8個、外にふれないもの0個\n8個ぜんぶ かど（3つの面が外）', C.green, FILL.green)) },
], '立方体を3cmの立方体に分ける');

// ───────── 列車の追いこし ─────────
const trainBase = (): E[] => [
  bx(160, 46, 90, 24, 'B 180m', C.green, FILL.green, 11),
  bx(100, 84, 60, 24, 'A 120m', C.blue, FILL.blue, 11),
];
const kankan_sansu_08 = show([
  { note: '列車Aは長さ120m・秒速20m、列車Bは長さ180m・秒速15mで、同じ向きに走ります。AがBを完全に追いこすのにかかる時間を求めます。（図は長さを0.5倍で表しています）', add: [...trainBase(), ar(254, 58, 290, 58, C.green), lb(288, 42, '秒速15m', 10, C.green, 'middle', true), ar(164, 96, 204, 96, C.blue), lb(184, 80, '秒速20m', 10, C.blue, 'middle', true), ...say('A：長さ120m・秒速20m（うしろ）\nB：長さ180m・秒速15m（まえ）')] },
  { note: '❓「完全に追いこす」とは、どこからどこまで？→はじまりは、Aの先頭がBの最後尾に並んだとき。おわりは、Aの最後尾がBの先頭をぬけたときです。', add: [ln(160, 34, 160, 112, C.red, true, 1.6), lb(160, 26, 'はじまり', 10, C.red, 'middle', true), ln(250, 34, 250, 112, C.red, true, 1.6), lb(250, 26, 'おわり', 10, C.red, 'middle', true), bx(250, 84, 60, 24, 'A（おわり）', C.blue, FILL.yellow, 10), ...say('はじまり：Aの先頭がBの最後尾に並ぶ\nおわり：Aの最後尾がBの先頭をぬける', C.red, FILL.red, 11)] },
  { note: '❓その間に、AはBよりどれだけ多く進むの？→Aの先頭は、Bの長さ180mぶんを追いぬき、さらにAの長さ120mぶんを進んで、はじめて最後尾がぬけます。180＋120＝300m、Bより多く進みます。', add: [...brk(160, 250, 124, 'Bの長さ 180m', C.green), ...brk(250, 310, 124, 'Aの長さ 120m', C.blue), ...say('Aが多く進む道のり\n＝ 180 ＋ 120 ＝ 300m', C.ink, FILL.warm)] },
  { note: '❓1秒ごとにAはBにどれだけ近づく？→Aは1秒に20m、Bは1秒に15m進むので、1秒で5mずつ差がちぢまります。', add: fresh(lb(30, 40, 'A', 13, C.blue, 'end', true), ar(36, 40, 116, 40, C.blue), lb(76, 28, '20m', 11, C.blue, 'middle', true), lb(30, 78, 'B', 13, C.green, 'end', true), ar(36, 78, 96, 78, C.green), lb(66, 66, '15m', 11, C.green, 'middle', true), ln(96, 50, 96, 88, C.gray, true, 1.4), ...brk(96, 116, 98, '差 5m', C.red), lb(190, 58, '1秒あたり', 12, C.ink, 'middle', true), ...say('1秒に 20 − 15 ＝ 5m\nずつ 差がちぢまる', C.red, FILL.red)) },
  { note: '❓300mの差を、1秒に5mずつちぢめると何秒？→300÷5＝60秒です。「差の道のり÷1秒にちぢまる差」で時間が出ます。', add: fresh(bx(30, 34, 120, 40, '差の道のり\n300m', C.blue, FILL.blue, 12), lb(170, 58, '÷', 20, C.ink, 'middle', true), bx(190, 34, 100, 40, '1秒に5m', C.red, FILL.red, 12), ...say('300 ÷ 5 ＝ 60秒', C.green, FILL.green, 16)) },
  { note: '❓なぜ速さをたさずに、ひくの？→同じ向きに走るので、Bもまえへ進んで、そのぶん差が広がるのをAが取り返します。もし反対向きなら、おたがいに近づくのでたします。', add: fresh(lb(12, 34, '同じ向き', 11, C.ink, 'start', true), bx(100, 22, 40, 22, 'A', C.blue, FILL.blue), ar(144, 33, 184, 33, C.blue), bx(194, 22, 40, 22, 'B', C.green, FILL.green), ar(238, 33, 264, 33, C.green), lb(12, 92, '反対向き', 11, C.ink, 'start', true), bx(100, 80, 40, 22, 'A', C.blue, FILL.blue), ar(144, 91, 176, 91, C.blue), ar(262, 91, 230, 91, C.green), bx(266, 80, 40, 22, 'B', C.green, FILL.green), ...say('同じ向き → 差（ひく）20−15＝5\n反対向き → 和（たす）20＋15＝35', C.purple, FILL.purple)) },
  { note: '答えは60秒です。確かめると、60秒でAは20×60＝1200m、Bは15×60＝900m進みます。差は300mで、2つの列車の長さの和（120＋180）と同じです。', add: fresh(bx(40, 26, 240, 26, 'Aは60秒で 1200m', C.blue, FILL.blue, 12), bx(40, 62, 180, 26, 'Bは60秒で 900m', C.green, FILL.green, 12), bx(220, 62, 60, 26, '差300m', C.red, FILL.red, 12), ...say('差300m ＝ 120＋180（長さの和）✓\n答え：60秒', C.green, FILL.green)) },
], '列車の追いこし');

// ───────── てこ（共通の図） ─────────
/** てこ。sc はcmあたりのpx。左の距離 dl・重さ lw、右の距離 dr・重さ rw。 */
const leverFig = (k: number, dl: number, dr: number, lw: string, rw: string): E[] => {
  const xl = 160 - dl * k;
  const xr = 160 + dr * k;
  return [
    ln(xl - 12, 70, xr + 12, 70, C.ink, false, 4),
    pg([[160, 72], [148, 98], [172, 98]], C.ink, FILL.gray),
    ln(xl, 70, xl, 84, C.ink, false, 1.5), bx(xl - 24, 84, 48, 28, lw, C.blue, FILL.blue, 11),
    ln(xr, 70, xr, 84, C.ink, false, 1.5), bx(xr - 24, 84, 48, 28, rw, C.red, FILL.red, 11),
    ...dim(xl, 160, 54, `${dl}cm`, C.blue), ...dim(160, xr, 54, `${dr}cm`, C.red),
  ];
};
const leverWhy = (): E[] => fresh(
  bx(16, 22, 138, 50, '100gを 支点から20cm\n100×20 ＝ 2000', C.blue, FILL.blue, 11),
  bx(166, 22, 138, 50, '100gを 支点から40cm\n100×40 ＝ 4000', C.red, FILL.red, 11),
  ar(85, 76, 85, 100, C.blue), ar(235, 76, 235, 112, C.red),
  lb(85, 116, 'かたむける力 小', 11, C.blue, 'middle', true), lb(235, 128, 'かたむける力 大', 11, C.red, 'middle', true),
  ...say('同じ重さでも、支点から遠いほど\nかたむける力が大きい（ドアの取っ手と同じ）', C.purple, FILL.purple),
);

const kankan_rika_01 = show([
  { note: 'てこが水平につり合っています。左のうで20cmに100gのおもりをつるしました。右のうで25cmにつるして、つり合わせるおもり（□g）を求めます。', add: [...leverFig(5, 20, 25, '100g', '□g'), ...say('左：支点から20cm に 100g\n右：支点から25cm に □g')] },
  { note: '❓「つり合う」とは？→てこを左にかたむける力と、右にかたむける力が、同じ大きさのことです。', add: [lb(70, 140, '左にかたむける力', 10, C.blue, 'middle', true), lb(250, 140, '右にかたむける力', 10, C.red, 'middle', true), ...say('つり合う ＝ 左右のかたむける力が 等しい', C.ink, FILL.warm)] },
  { note: '❓かたむける力は何できまる？→同じ100gでも、支点から遠くにつるすほど、大きく回す力がはたらきます。だから「重さ×支点からの距離」で表します。', add: leverWhy() },
  { note: '❓左のかたむける力は？→100g×20cm＝2000です。', add: fresh(...leverFig(5, 20, 25, '100g', '□g'), ...say('左：100 × 20 ＝ 2000', C.blue, FILL.blue, 15)) },
  { note: '❓右も2000になればつり合う。□×25＝2000なので、□＝2000÷25＝80gです。かけ算の答えからかけた数を「わり算で」もどします。', add: say('右：□ × 25 ＝ 2000\n□ ＝ 2000 ÷ 25 ＝ 80g', C.red, FILL.red, 14) },
  { note: '❓なぜ右のほうが軽くてよいの？→右のほうが支点から遠い（25cm）ので、軽くてもつり合います。距離の比は20：25＝4：5で、重さは逆の5：4。100：80になります。', add: say('距離 20：25 ＝ 4：5\n重さは逆の比 5：4 → 100：80', C.purple, FILL.purple) },
  { note: '答えは80gです。確かめると、右は80×25＝2000で、左の100×20＝2000と同じになり、つり合います。', add: fresh(...leverFig(5, 20, 25, '100g', '80g'), ...say('右：80 × 25 ＝ 2000 ＝ 左 ✓\n答え：80g', C.green, FILL.green, 14)) },
], 'てこのつり合い');

const seiko_rika_01 = show([
  { note: 'てこが水平につり合っています。支点から30cmの位置に80gのおもり。反対側20cmの位置につるして、つり合わせるおもり（□g）を求めます。', add: [...leverFig(4, 30, 20, '80g', '□g'), ...say('左：支点から30cm に 80g\n右：支点から20cm に □g')] },
  { note: '❓「つり合う」とは？→左にかたむける力と、右にかたむける力が同じ大きさのことです。', add: [lb(60, 140, '左にかたむける力', 10, C.blue, 'middle', true), lb(250, 140, '右にかたむける力', 10, C.red, 'middle', true), ...say('つり合う ＝ 左右のかたむける力が 等しい', C.ink, FILL.warm)] },
  { note: '❓かたむける力は何できまる？→同じ重さでも、支点から遠いほど大きく回す力がはたらきます。だから「重さ×支点からの距離」で表します。', add: leverWhy() },
  { note: '❓左のかたむける力は？→80g×30cm＝2400です。', add: fresh(...leverFig(4, 30, 20, '80g', '□g'), ...say('左：80 × 30 ＝ 2400', C.blue, FILL.blue, 15)) },
  { note: '❓右も2400にすればつり合う。□×20＝2400なので、□＝2400÷20＝120gです。', add: say('右：□ × 20 ＝ 2400\n□ ＝ 2400 ÷ 20 ＝ 120g', C.red, FILL.red, 14) },
  { note: '❓なぜ右のほうが重くなるの？→右は支点に近い（20cm）ので、そのぶん重くしないと、かたむける力が足りません。近いほど重く、遠いほど軽いのです。', add: say('距離 30：20 ＝ 3：2\n重さは逆の比 2：3 → 80：120', C.purple, FILL.purple) },
  { note: '答えは120gです。確かめると、右は120×20＝2400で、左の80×30＝2400と同じになり、つり合います。', add: fresh(...leverFig(4, 30, 20, '80g', '120g'), ...say('右：120 × 20 ＝ 2400 ＝ 左 ✓\n答え：120g', C.green, FILL.green, 14)) },
], 'てこのつり合い');

// ───────── 並列回路（抵抗2と3） ─────────
const parBase = (batt: string, aCur: string, bCur: string, total: string): E[] => [
  ln(40, 55, 270, 55, C.ink, false, 2), ln(40, 110, 270, 110, C.ink, false, 2), ln(40, 55, 40, 110, C.ink, false, 2), ln(270, 55, 270, 110, C.ink, false, 2),
  bx(18, 68, 44, 30, batt, C.main, FILL.warm, 10),
  bx(125, 45, 70, 20, 'A 抵抗2', C.blue, FILL.blue, 11), bx(125, 100, 70, 20, 'B 抵抗3', C.green, FILL.green, 11),
  lb(232, 44, aCur, 14, C.blue, 'middle', true), lb(232, 99, bCur, 14, C.green, 'middle', true),
  lb(40, 40, total, 12, C.purple, 'middle', true),
];
const kankan_rika_04 = show([
  { note: '抵抗2の電熱線Aと抵抗3の電熱線Bを並列につなぎ、電池を直列につなぐとAに③の電流が流れました。Bの電流と、全体の電流を求めます。（電池1個・豆電球1個の電流が①、豆電球1個の抵抗が1）', add: [...parBase('電池\n？個', '③', '？', '全体 ？'), ...say('A：抵抗2、電流 ③\nB：抵抗3、電流 ？　全体の電流は？')] },
  { note: '❓並列だと、AとBにかかる電池の力はどうなる？→どちらの枝も電池に直接つながっているので、同じ電池の数ぶんの力がかかります。', add: [lb(232, 82, '同じ電池の力', 10, C.red, 'middle', true), ...say('並列は どちらの枝にも\n同じ電池の数ぶんの力がかかる', C.red, FILL.red)] },
  { note: '❓電流はどうきまる？→電流＝電池の数÷抵抗です。電池が多いほど強くおし、抵抗が大きいほど流れにくいからです。Aは電池の数÷2、Bは電池の数÷3になります。', add: say('A の電流 ＝ 電池の数 ÷ 2\nB の電流 ＝ 電池の数 ÷ 3', C.ink, FILL.warm, 13) },
  { note: '❓電池は何個？→Aの電流が③なので、電池の数÷2＝3。かけ算にもどして、電池の数＝3×2＝6個です。', add: [cover(18, 68, 44, 30), bx(18, 68, 44, 30, '電池\n6個', C.main, FILL.yellow, 10), cover(10, 28, 60, 24), lb(40, 40, '全体 ？', 12, C.purple, 'middle', true), ...say('電池の数 ÷ 2 ＝ 3\n電池の数 ＝ 3 × 2 ＝ 6個', C.red, FILL.red, 13)] },
  { note: '❓Bの電流は？→電池6個ぶんの力を、抵抗3でわって、6÷3＝②です。', add: [cover(205, 88, 54, 20), lb(232, 99, '②', 14, C.green, 'middle', true), ...say('B の電流 ＝ 6 ÷ 3 ＝ ②', C.green, FILL.green, 15)] },
  { note: '❓全体の電流は？→電池から出た電流は、AとBに分かれます。だから分かれたあとの電流を合計して、③＋②＝⑤です。', add: [cover(10, 28, 60, 24), lb(40, 40, '全体 ⑤', 13, C.purple, 'middle', true), ...say('全体 ＝ A ＋ B ＝ ③ ＋ ② ＝ ⑤', C.purple, FILL.purple, 14)] },
  { note: '答えは、Bが②、全体が⑤です。確かめると、並列の電流は抵抗の逆の比になります。抵抗2：3の逆は3：2で、電流③：②と一致します。', add: say('抵抗 2：3 → 電流は逆の 3：2 ✓\n答え：B ②、全体 ⑤', C.green, FILL.green) },
], '並列回路の電流');

// ───────── 速さ・時間（列車） ─────────
const kankan_sansu_r01 = show([
  { note: '長さ200mの列車が時速90kmで走っています。問1 秒速は？ 問2 長さ300mのトンネルを完全に通過する時間は？ 問3 反対向きの時速54km・長さ150mの列車とすれちがう時間は？', add: [bx(100, 54, 120, 36, 'トンネル 300m', C.gray, FILL.gray, 11), bx(20, 62, 80, 20, '列車 200m', C.blue, FILL.blue, 10), ar(30, 52, 80, 52, C.blue), ...say('列車：長さ200m、時速90km\n問1 秒速は？ 問2 トンネル通過は？ 問3 すれちがいは？', C.ink, FILL.warm, 11)] },
  { note: '❓時速を秒速になおすには？→90kmは90000m、1時間は60×60＝3600秒です。1時間に90000m進むので、1秒では90000÷3600＝25m。つまり時速÷3.6で秒速になります。', add: fresh(bx(20, 22, 130, 34, '90km → 90000m', C.blue, FILL.blue, 12), bx(170, 22, 130, 34, '1時間 → 3600秒', C.green, FILL.green, 12), bx(60, 72, 200, 40, '90000 ÷ 3600 ＝ 25\n秒速25m', C.red, FILL.red, 13), ...say('時速 ÷ 3.6 ＝ 秒速\n90 ÷ 3.6 ＝ 25（3.6＝3600÷1000）', C.ink, FILL.warm)) },
  { note: '❓「トンネルを完全に通過する」とは？→はじまりは、先頭が入口に着いたとき。おわりは、最後尾が出口をぬけたときです。', add: fresh(bx(100, 54, 120, 36, 'トンネル 300m', C.gray, FILL.gray, 11), bx(20, 62, 80, 20, '列車（はじまり）', C.blue, FILL.blue, 9), bx(220, 62, 80, 20, '列車（おわり）', C.blue, FILL.yellow, 9), ar(100, 44, 300, 44, C.red), lb(200, 34, '先頭が進む道のり', 10, C.red, 'middle', true), ...say('先頭が入口に着いてから\n最後尾が出口をぬけるまで', C.ink, FILL.warm)) },
  { note: '❓なぜトンネルの長さだけではだめ？→最後尾がぬけるまでに、先頭は出口からさらに列車の長さぶん進んでいるからです。300＋200＝500mを、秒速25mで進むので500÷25＝20秒です。', add: [...brk(100, 220, 108, 'トンネル 300m', C.gray), ...brk(220, 300, 108, '列車 200m', C.blue), ...say('進む道のり ＝ 300 ＋ 200 ＝ 500m\n500 ÷ 25 ＝ 20秒', C.red, FILL.red, 13)] },
  { note: '❓すれちがうとは？→はじまりは先頭どうしが出会ったとき、おわりは最後尾どうしがはなれたときです。（図は長さを0.4倍で表しています）', add: fresh(bx(80, 44, 80, 22, 'A 200m', C.blue, FILL.blue, 11), bx(160, 74, 60, 22, 'B 150m', C.green, FILL.green, 11), ar(164, 55, 204, 55, C.blue), ar(156, 85, 116, 85, C.green), lb(186, 38, '秒速25m', 10, C.blue, 'middle', true), lb(134, 104, '秒速15m', 10, C.green, 'middle', true), ln(160, 34, 160, 110, C.red, true, 1.4), ...say('はじまり：先頭どうしが出会う\nおわり：最後尾どうしがはなれる', C.ink, FILL.warm)) },
  { note: '❓このあいだに2つの列車は合わせてどれだけ進む？→Aの長さ200mぶんとBの長さ150mぶんで、200＋150＝350mです。', add: [...brk(80, 160, 116, 'A 200m', C.blue), ...brk(160, 220, 116, 'B 150m', C.green), ...say('合わせて進む道のり\n＝ 200 ＋ 150 ＝ 350m', C.ink, FILL.warm)] },
  { note: '❓なぜ2つの速さをたすの？→向かい合って進むので、1秒に近づく道のりは、2つの速さの和になります。時速54kmは54÷3.6＝秒速15m。25＋15＝40mです。同じ向きなら差になります。', add: fresh(bx(20, 24, 130, 30, 'A：秒速25m →', C.blue, FILL.blue, 12), bx(170, 24, 130, 30, '← B：秒速15m', C.green, FILL.green, 12), bx(60, 72, 200, 38, '1秒に 25 ＋ 15 ＝ 40m\nおたがいに近づく', C.red, FILL.red, 12), ...say('54 ÷ 3.6 ＝ 15（秒速15m）\n350 ÷ 40 ＝ 8.75秒', C.ink, FILL.warm)) },
  { note: '答えは、問1 秒速25m、問2 20秒、問3 8.75秒です。問3を確かめると、8.75秒でAは25×8.75＝218.75m、Bは15×8.75＝131.25m。合計350mで、長さの和と一致します。', add: fresh(bx(20, 22, 280, 26, '問1：90 ÷ 3.6 ＝ 秒速25m', C.blue, FILL.blue, 12), bx(20, 56, 280, 26, '問2：(300＋200) ÷ 25 ＝ 20秒', C.green, FILL.green, 12), bx(20, 90, 280, 26, '問3：(200＋150) ÷ (25＋15) ＝ 8.75秒', C.red, FILL.red, 12), ...say('確かめ：25×8.75＋15×8.75\n＝ 218.75＋131.25 ＝ 350m ✓', C.green, FILL.green)) },
], '速さ・時間（列車）');

// ───────── 直角三角形と垂線 ─────────
const FA: Pt = [60, 51.5], FB: Pt = [60, 128], FC: Pt = [162, 128], FD: Pt = [96.7, 79];
const rtBase = (): E[] => [
  pg([FA, FB, FC], C.ink, FILL.warm), pg([[60, 118], [70, 118], [70, 128], [60, 128]], C.gray, 'none'),
  lb(52, 46, 'A', 12, C.ink, 'end', true), lb(52, 138, 'B', 12, C.ink, 'end', true), lb(170, 138, 'C', 12, C.ink, 'start', true),
  lb(50, 90, '9cm', 11, C.ink, 'end', true), lb(111, 141, '12cm', 11, C.ink, 'middle', true), lb(138, 82, '15cm', 11, C.ink, 'start', true),
];
const kankan_sansu_r03 = show([
  { note: '直角三角形ABCは、AB＝9cm、BC＝12cm、AC＝15cm、Bが直角です。問1 面積 問2 Bから斜辺ACへの垂線BDの長さ 問3 三角形ABDの面積、を求めます。', add: [...rtBase(), ln(FB[0], FB[1], FD[0], FD[1], C.red, true, 1.6), lb(FD[0] + 6, FD[1] - 4, 'D', 12, C.ink, 'start', true), ...say('AB＝9　BC＝12　AC＝15　Bは直角\nBからACにおろした垂線がBD')] },
  { note: '❓問1 面積は？→直角をはさむ2辺が、たてと横にあたるので、9×12÷2＝54cm²です。❓なぜ÷2？→同じ三角形を2つあわせると9×12＝108の長方形になり、三角形はその半分だからです。', add: [ln(60, 51.5, 162, 51.5, C.gray, true, 1.4), ln(162, 51.5, 162, 128, C.gray, true, 1.4), lb(250, 60, '長方形 108\nの半分', 11, C.gray, 'middle', true), ...say('9 × 12 ÷ 2 ＝ 54cm²', C.blue, FILL.blue, 15)] },
  { note: '❓問2 BDはどう求める？→同じ三角形でも、底辺をACと見れば、高さがBDです。だから面積は15×BD÷2とも表せます。この面積は、さっきの54cm²と同じです。', add: [cover(200, 40, 110, 50), ln(FB[0], FB[1], FD[0], FD[1], C.red, false, 3), lb(FD[0] + 6, FD[1] - 4, 'D', 12, C.ink, 'start', true), lb(88, 112, 'BD', 11, C.red, 'start', true), ...say('底辺をAC（15）と見ると 高さはBD\n面積 ＝ 15 × BD ÷ 2 ＝ 54', C.red, FILL.red)] },
  { note: '❓BDは？→15×BD÷2＝54の両方に2をかけると15×BD＝108。BD＝108÷15＝7.2cmです。÷2をもとにもどすために、まず×2をします。', add: say('15 × BD ＝ 54 × 2 ＝ 108\nBD ＝ 108 ÷ 15 ＝ 7.2cm', C.red, FILL.red, 13) },
  { note: '❓問3 三角形ABDの面積にはADの長さもいる。ADは？→三角形ABDと三角形ABCは、角Aが共通で直角もあるので、同じ形（相似）です。対応する辺は AB↔AC、AD↔AB。相似比は AB：AC＝9：15＝3：5。', add: [pg([FA, FB, FD], C.green, 'rgba(22,163,74,0.35)'), lb(FD[0] + 6, FD[1] - 4, 'D', 12, C.ink, 'start', true), ...say('三角形ABD は三角形ABCを 3/5 に\nちぢめた形　AD ＝ 9 × 3 ÷ 5 ＝ 5.4cm', C.green, FILL.green, 12)] },
  { note: '❓三角形ABDの面積は？→底辺AD＝5.4cm、高さBD＝7.2cmなので、5.4×7.2÷2＝19.44cm²です。', add: [lb(84, 50, 'AD 5.4', 10, C.green, 'start', true), lb(88, 112, 'BD 7.2', 10, C.red, 'start', true), ...say('5.4 × 7.2 ÷ 2 ＝ 19.44cm²', C.green, FILL.green, 15)] },
  { note: '答えは、問1 54cm²、問2 7.2cm、問3 19.44cm²です。確かめると、BDは相似からも BC×3/5＝12×3÷5＝7.2でぴったり。面積も、相似比3：5の面積比9：25で 54×9÷25＝19.44。', add: fresh(...rtBase(), pg([FA, FB, FD], C.green, 'rgba(22,163,74,0.35)'), ...say('BD ＝ 12×3÷5 ＝ 7.2 ✓\n54 × 9 ÷ 25 ＝ 19.44 ✓', C.green, FILL.green)) },
], '直角三角形と垂線');

// ───────── テープのはり合わせ ─────────
const kankan_sansu_r05 = show([
  { note: '長さ5cmの白テープを、のりしろ1cmずつで貼り合わせます。赤テープは1枚4cmで、やはりのりしろ1cmです。(1)白7枚の長さ (2)6m25cmの赤テープの枚数 (3)重ねたとき、のりしろがそろう場所の数、を求めます。', add: [bx(20, 30, 100, 18, '白 5cm', C.blue, FILL.blue, 10), bx(100, 52, 100, 18, '白 5cm', C.blue, FILL.blue, 10), ...dim(100, 120, 24, 'のりしろ1cm', C.red), bx(20, 84, 80, 18, '赤 4cm', C.red, FILL.red, 10), bx(80, 106, 80, 18, '赤 4cm', C.red, FILL.red, 10), ...say('のりしろは どちらも 1cm\n白：1枚5cm　赤：1枚4cm', C.ink, FILL.warm)] },
  { note: '❓(1) 白を貼り合わせると、1枚ふえるたびにどれだけ長くなる？→1枚目は5cmまるごと。2枚目からは、のりしろ1cmが重なるので、5−1＝4cmずつしかのびません。', add: fresh(bx(20, 16, 100, 20, '5cm', C.blue, FILL.blue, 11), bx(100, 40, 100, 20, '5cm', C.blue, FILL.blue, 11), bx(180, 64, 100, 20, '5cm', C.blue, FILL.blue, 11), lb(110, 100, '＋4', 13, C.red, 'middle', true), lb(190, 100, '＋4', 13, C.red, 'middle', true), ln(100, 36, 100, 40, C.red, false, 2), ln(120, 36, 120, 40, C.red, false, 2), ...say('1枚目は 5cm\n2枚目からは 5 − 1 ＝ 4cm ずつのびる', C.red, FILL.red)) },
  { note: '❓なぜ7枚なら「−1」ではなく6回ぶんの4cm？→のりしろは、つなぎ目の数だけできます。つなぎ目は枚数より1つ少ない（7枚なら6か所）ので、4cmが6回ふえます。5＋4×6＝29cmです。', add: fresh(...[0, 1, 2, 3, 4, 5, 6].map((i) => bx(30 + i * 32, 10 + i * 13, 40, 11, undefined, C.blue, i === 0 ? FILL.warm : FILL.blue)), ...brk(30, 262, 112, '29cm', C.green, 11), lb(250, 40, '7枚\nつなぎ目は\n6か所', 11, C.red, 'middle', true), ...say('5 ＋ 4 × 6 ＝ 29cm\n（つなぎ目の数は 7−1＝6）', C.green, FILL.green)) },
  { note: '❓(2) 赤テープ6m25cm＝625cmは何枚？→1枚目の4cmをのぞいた625−4＝621cmを、2枚目以降の3cmずつ（4−1）でうめます。621÷3＝207枚ぶん。1枚目をたして208枚です。', add: fresh(bx(30, 34, 20, 30, '4', C.red, FILL.red, 11), bx(50, 34, 240, 30, '3cm × 207枚 ＝ 621cm', C.red, FILL.red, 12), ...dim(30, 290, 26, '全体 625cm（6m25cm）', C.ink, 11), ...say('625 − 4 ＝ 621　621 ÷ 3 ＝ 207\n207 ＋ 1（1枚目）＝ 208枚', C.red, FILL.red, 13)) },
  { note: '❓(3) のりしろの場所は？→白は4cmずつのびるので、はしから4cm、8cm、12cm…（4cmごと）にのりしろができます。赤は3cm、6cm、9cm…（3cmごと）です。', add: fresh(ln(20, 75, 300, 75, C.ink, false, 2), ...[4, 8, 12, 16, 20, 24].flatMap((c) => [ln(20 + 11 * c, 58, 20 + 11 * c, 75, C.blue, false, 2), lb(20 + 11 * c, 50, `${c}`, 10, C.blue, 'middle', true)]), ...[3, 6, 9, 12, 15, 18, 21, 24].flatMap((c) => [ln(20 + 11 * c, 75, 20 + 11 * c, 92, C.red, false, 2), lb(20 + 11 * c, 103, `${c}`, 10, C.red, 'middle', true)]), lb(14, 28, '白（4cmごと）', 11, C.blue, 'start', true), lb(14, 122, '赤（3cmごと）', 11, C.red, 'start', true), ...say('白：4、8、12、16、…\n赤：3、6、9、12、…（はしから何cm）', C.ink, FILL.warm, 12)) },
  { note: '❓どこで重なる？→白も赤ものりしろがある場所は、4の倍数でも3の倍数でもある数です。いちばん小さいのは12で、そのあとも12ごと（24、36…）に重なります。', add: [...[12, 24].flatMap((c) => [ln(20 + 11 * c, 58, 20 + 11 * c, 92, C.green, true, 1.6), ci(20 + 11 * c, 75, 6, undefined, C.green, FILL.green)]), ...say('4の倍数かつ3の倍数 → 12の倍数\n（4と3の最小公倍数は12）', C.green, FILL.green)] },
  { note: '❓625cmの中にいくつ？→白は156枚でのりしろ155か所、いちばんはしののりしろは4×155＝620cm。赤は207か所で3×207＝621cm。620cmまでにある12の倍数は、12×51＝612まで。12×52＝624は620をこえます。', add: fresh(bx(20, 16, 280, 30, '白：156枚 → のりしろ155か所\nいちばんはしは 4×155 ＝ 620cm', C.blue, FILL.blue, 11), bx(20, 54, 280, 30, '赤：208枚 → のりしろ207か所\nいちばんはしは 3×207 ＝ 621cm', C.red, FILL.red, 11), bx(20, 92, 280, 30, '12の倍数　12×51＝612 ○\n12×52＝624 ×（620をこえる）', C.green, FILL.green, 11), ...say('620 ÷ 12 ＝ 51あまり8\nそろうのは 51か所', C.green, FILL.green, 13)) },
  { note: '答えは、(1) 29cm、(2) 208枚、(3) 51か所です。確かめると、(1) 5＋4×6＝29、(2) 4＋3×207＝625でぴったり、(3) 12×51＝612はどちらのテープにも、のりしろがある場所です。', add: fresh(bx(20, 22, 280, 26, '(1) 5 ＋ 4 × 6 ＝ 29cm', C.blue, FILL.blue, 12), bx(20, 58, 280, 26, '(2) 4 ＋ 3 × 207 ＝ 625cm → 208枚', C.red, FILL.red, 12), bx(20, 94, 280, 26, '(3) 12 × 51 ＝ 612（620以内）→ 51か所', C.green, FILL.green, 12), ...say('(1) 29cm　(2) 208枚　(3) 51か所', C.green, FILL.green, 14)) },
], 'テープのはり合わせ');

// ───────── バスと徒歩（和差算） ─────────
const busBase = (): E[] => [
  ln(24, 70, 290, 70, C.ink, false, 3),
  ci(24, 70, 9, 'A', C.main, FILL.warm, 10), ci(120, 70, 9, 'B', C.main, FILL.warm, 10), ci(290, 70, 9, 'C', C.main, FILL.warm, 10),
  ci(217, 70, 5, undefined, C.red, FILL.red), lb(217, 52, '祖母の家', 10, C.red, 'middle', true),
];
const kankan_sansu_r06 = show([
  { note: 'バスはA、B、Cの順に停まります。八重さんは1時にAを出て、1時12分に祖母の家に着きました。Bで降りて歩いても、Cで降りて引き返して歩いても、同じ12分です。BCは1120m、歩きは分速80m、バスは分速560mです。', add: [...busBase(), ...brk(120, 290, 100, 'BC ＝ 1120m', C.blue), ...say('Bで降りて歩く　Cで降りてもどる\nどちらも 家までちょうど12分', C.ink, FILL.warm)] },
  { note: '❓(1) BからCまで歩くと？→1120mを分速80mで歩くので、1120÷80＝14分です。分速は1分に進む道のりなので、道のりを分速でわると時間が出ます。', add: fresh(...busBase(), ...brk(120, 290, 100, 'BC ＝ 1120m', C.blue), ...say('歩く時間 ＝ 1120 ÷ 80 ＝ 14分', C.blue, FILL.blue, 15)) },
  { note: '❓(2) 家は、BとCのあいだにあります。B→家と、家→Cの歩く時間をたすと、B→Cを歩く時間になります。つまり、2つの歩く時間の和は14分です。', add: fresh(...busBase(), ...brk(120, 217, 100, 'B→家（歩く）', C.green), ...brk(217, 290, 100, '家→C（歩く）', C.red), ...say('（B→家）＋（家→C）＝ 14分\n歩く時間の「和」が14分', C.ink, FILL.warm, 13)) },
  { note: '❓では、2つの歩く時間の「差」は？→Cまでバスに乗るほうが、BC1120mをバスで進んで1120÷560＝2分長くかかります。合計はどちらも12分なので、Cで降りるほうは歩きが2分みじかくなります。', add: fresh(...busBase(), ...brk(120, 290, 100, 'バスでBCは 1120÷560＝2分', C.blue, 10), ...say('Cまで行くとバスが2分長い\n→ 歩きは2分みじかい（合計12分）\n（B→家）−（家→C）＝ 2分', C.red, FILL.red, 12)) },
  { note: '❓和が14分、差が2分のとき、それぞれは？→（B→家）は（家→C）より2分長いので、線分図に表します。14−2＝12分が、家→Cの2つぶん。12÷2＝6分が家→C、6＋2＝8分がB→家です。', add: fresh(bx(30, 22, 144, 28, 'B→家（歩く）', C.green, FILL.green, 11), bx(174, 22, 108, 28, '家→C（歩く）', C.red, FILL.red, 11), bx(30, 66, 108, 28, '家→C', C.red, FILL.red, 11), bx(138, 66, 36, 28, '2分', C.gray, FILL.gray, 11), lb(240, 80, '＝ B→家', 12, C.green, 'middle', true), ...say('14 − 2 ＝ 12 が 家→C の2つぶん\n12 ÷ 2 ＝ 6分（家→C）\n6 ＋ 2 ＝ 8分（B→家）', C.purple, FILL.purple, 12)) },
  { note: '❓(3) AからBまでバスは何分？→12分の中身は「バス＋歩き」です。Bから家まで歩くのが8分なので、バスは12−8＝4分。道のりは560×4＝2240mです。', add: fresh(...busBase(), ...brk(24, 120, 100, 'バス 12−8＝4分', C.blue), ...say('A→B：12 − 8 ＝ 4分（バス）\n560 × 4 ＝ 2240m', C.blue, FILL.blue, 13)) },
  { note: '❓Bから家までは？→8分歩くので、80×8＝640mです。Aから家までの道のりは、2240＋640＝2880mです。', add: fresh(...busBase(), ...brk(24, 120, 100, '2240m', C.blue), ...brk(120, 217, 100, '640m', C.green), ...say('B→家：80 × 8 ＝ 640m\nA→家：2240 ＋ 640 ＝ 2880m', C.green, FILL.green, 13)) },
  { note: '答えは、(1) 14分、(2) 8分、(3) 2880mです。確かめると、Cで降りるルートは、バスでA→Cが（2240＋1120）÷560＝6分、Cから家まで（1120−640）÷80＝6分で、合計12分です。', add: fresh(bx(20, 20, 280, 26, '(1) 1120 ÷ 80 ＝ 14分', C.blue, FILL.blue, 12), bx(20, 54, 280, 26, '(2) (14 ＋ 2) ÷ 2 ＝ 8分', C.green, FILL.green, 12), bx(20, 88, 280, 26, '(3) 2240 ＋ 80 × 8 ＝ 2880m', C.red, FILL.red, 12), ...say('確かめ（Cルート）\nバス 6分 ＋ 歩き 6分 ＝ 12分 ✓', C.green, FILL.green)) },
], 'バスと徒歩');

// ───────── 回転移動 ─────────
const RC: Pt = [100, 80], RA: Pt = [100, 20], RB: Pt = [74, 65], RD: Pt = [130, 80], RE: Pt = [130, 132];
const rotBase = (): E[] => [
  pg([RA, RB, RC], C.blue, FILL.blue), pg([RE, RD, RC], C.red, FILL.red),
  lb(100, 12, 'A', 11, C.ink, 'middle', true), lb(66, 70, 'B', 11, C.ink, 'end', true), lb(92, 92, 'C', 11, C.ink, 'end', true),
  lb(138, 78, 'D', 11, C.ink, 'start', true), lb(138, 138, 'E', 11, C.ink, 'start', true),
];
const kankan_sansu_r08 = show([
  { note: '直角三角形ABC（Bが直角、Aが30度、AC＝12cm）を、点Cを中心に時計まわりに回して三角形EDCにします。ACとDEが平行のとき、(1)角あ (2)Aが動いた曲線の長さ (3)かげの面積を求めます。円周率は3.14です。', add: [...rotBase(), ...arcLines(100, 80, 60, 90, -60, C.gray), lb(92, 50, '12cm', 10, C.ink, 'end', true), lb(112, 34, '30°', 9, C.blue, 'start', true), ...say('三角形ABCを Cを中心に時計まわりに回す\nACとDEは平行　角あ ＝ ∠ACE')] },
  { note: '❓(1) 角あはいくつ？→回しても形も大きさも変わらないので、EはAに対応し、∠CED＝∠CAB＝30度です。CEの上で、あと30度はACとDEという平行な2本にはさまれています。', add: [sc(130, 132, 16, 90, 120, C.red, FILL.red), lb(122, 112, '30°', 9, C.red, 'end', true), sc(100, 80, 22, -60, 90, C.purple, FILL.purple), lb(118, 96, 'あ', 11, C.purple, 'start', true), ...say('回しても形は同じ\n∠CED ＝ ∠CAB ＝ 30°', C.red, FILL.red)] },
  { note: '❓平行線の「コの字」の角は？→ACとDEは平行で、CEが2本を横切ります。あと30度は「コの字」の位置（同じ側の内角）なので、たすと180度です。「Zの字」の錯角なら等しいのですが、この図はコの字です。', add: say('あ ＋ 30° ＝ 180°（コの字の角）\nあ ＝ 180 − 30 ＝ 150°', C.purple, FILL.purple, 13) },
  { note: '❓(2) Aが動いた曲線の長さは？→Aは中心C、半径12cmの円の上を150度動きました。円周は2×12×3.14＝75.36cm。❓なぜ150÷360？→360度で1周、150度ならその150/360だけ進むからです。', add: fresh(ci(110, 72, 54, undefined, C.gray, FILL.warm), sc(110, 72, 54, -60, 90, C.blue, FILL.blue), lb(110, 138, '半径12cm　中心角150°', 11, C.blue, 'middle', true), lb(250, 60, 'A が通った\n弧の長さ', 12, C.blue, 'middle', true), ...say('円周 ＝ 2×12×3.14 ＝ 75.36\n75.36 × 150/360 ＝ 31.4cm', C.blue, FILL.blue, 13)) },
  { note: '❓(3) かげの面積は？→かげは、大きい扇形（半径12cm）から小さい扇形（半径6cm、Bが動いた弧）をひいた形です。三角形ABCと三角形EDCは同じ大きさなので、たしたりひいたりすると消えます。', add: fresh(...rotBase(), sc(100, 80, 60, -60, 90, C.blue, 'rgba(2,132,199,0.15)'), sc(100, 80, 30, -60, 90, C.red, 'rgba(225,29,72,0.25)'), ...say('かげ ＝ 大きい扇形（半径12cm）\n　　　− 小さい扇形（半径6cm）', C.purple, FILL.purple, 12)) },
  { note: '❓大きい扇形の面積は？→半径12cmの円の面積12×12×3.14＝452.16cm²の、150/360（＝5/12）です。452.16÷12×5＝188.4cm²です。', add: say('12 × 12 × 3.14 ＝ 452.16\n452.16 × 150/360 ＝ 188.4cm²', C.blue, FILL.blue, 13) },
  { note: '❓小さい扇形の面積は？→半径6cmの円の面積6×6×3.14＝113.04cm²の、同じ150/360です。113.04÷12×5＝47.1cm²です。中心角は同じ150度です。', add: say('6 × 6 × 3.14 ＝ 113.04\n113.04 × 150/360 ＝ 47.1cm²', C.red, FILL.red, 13) },
  { note: '答えは、(1) 150度、(2) 31.4cm、(3) 141.3cm²です。かげは188.4−47.1＝141.3cm²。確かめると、半径の比が2：1なので面積の比は4：1。188.4÷47.1＝4でぴったりです。', add: fresh(bx(20, 20, 280, 26, '(1) 180 − 30 ＝ 150度', C.purple, FILL.purple, 12), bx(20, 54, 280, 26, '(2) 75.36 × 150/360 ＝ 31.4cm', C.blue, FILL.blue, 12), bx(20, 88, 280, 26, '(3) 188.4 − 47.1 ＝ 141.3cm²', C.red, FILL.red, 12), ...say('確かめ：半径の比 2：1 → 面積の比 4：1\n188.4 ÷ 47.1 ＝ 4 ✓', C.green, FILL.green, 12)) },
], '回転移動');

// ───────── 9マスの三角形で整数を表す ─────────
const tp = (level: number, k: number): Pt => [160 - 30 * level + 60 * k, 20 + (100 / 3) * level];
type Cell = { pts: Pt[]; w: number };
const triCells = (): Cell[] => {
  const ws = [[1], [2, 4, 8], [16, 32, 64, 128, 256]];
  const out: Cell[] = [];
  for (let r = 0; r < 3; r++) {
    let idx = 0;
    for (let j = 0; j <= r; j++) {
      out.push({ pts: [tp(r, j), tp(r + 1, j), tp(r + 1, j + 1)], w: ws[r][idx++] });
      if (j < r) out.push({ pts: [tp(r, j), tp(r, j + 1), tp(r + 1, j + 1)], w: ws[r][idx++] });
    }
  }
  return out;
};
const triDraw = (filled: number[], color: string = C.green, fill: string = FILL.green): E[] => {
  const cells = triCells();
  const out: E[] = [];
  for (const c of cells) out.push(pg(c.pts, filled.includes(c.w) ? color : C.main, filled.includes(c.w) ? fill : FILL.warm));
  for (const c of cells) {
    const cx = (c.pts[0][0] + c.pts[1][0] + c.pts[2][0]) / 3;
    const cy = (c.pts[0][1] + c.pts[1][1] + c.pts[2][1]) / 3;
    out.push(lb(cx, cy + 3, `${c.w}`, 10, C.ink, 'middle', true));
  }
  return out;
};
const kankan_sansu_r11 = show([
  { note: '大きな三角形を9マスに分け、マスごとに重さ1、2、4、8、16、32、64、128、256が決まっています。ぬったマスの重さをぜんぶたした数が、その図の表す整数です。', add: [...triDraw([]), ...say('ぬったマスの重さを ぜんぶたす\n（マスの数字が そのマスの重さ）')] },
  { note: '例：1のマスと32のマスをぬると、1＋32＝33を表します。', add: [...triDraw([1, 32]), ...say('例：1 ＋ 32 ＝ 33', C.green, FILL.green, 15)] },
  { note: '❓なぜ重さは1、2、4、8…と2倍ずつなの？→次の重さは、それまでの重さをぜんぶたした数より1大きくなっています。2＝1＋1、4＝1＋2＋1、8＝1＋2＋4＋1。だから1つ前までで作れない数を、新しいマスがちょうど受け持ちます。', add: [...triDraw([]), ...say('次の重さ ＝ それまでの合計 ＋ 1\n2＝1＋1　4＝1＋2＋1　8＝1＋2＋4＋1', C.purple, FILL.purple, 12)] },
  { note: '❓(2) 164をぬるには？→まず164以下でいちばん大きい重さ128のマスをぬります。164−128＝36がのこります。', add: [...triDraw([128], C.red, FILL.red), ...say('164 以下で いちばん大きい重さは 128\n164 − 128 ＝ 36', C.red, FILL.red, 13)] },
  { note: '❓なぜ大きい重さからきめるの？→小さい重さをぜんぶたしても（1＋2＋4＋8＋16＋32＋64＝127）、128にとどかないので、128は必ずぬる必要があるからです。つぎは36以下で最大の32をぬります。36−32＝4。', add: [...triDraw([128, 32], C.red, FILL.red), ...say('36 以下で いちばん大きいのは 32\n36 − 32 ＝ 4', C.red, FILL.red, 13)] },
  { note: '❓のこりの4は？→重さ4のマスをぬればちょうどです。128＋32＋4＝164になります。', add: [...triDraw([128, 32, 4], C.red, FILL.red), ...say('128 ＋ 32 ＋ 4 ＝ 164 ✓', C.green, FILL.green, 15)] },
  { note: '❓(3) いちばん大きい整数は？→ぬるほど大きくなるので、9マスをぜんぶぬったときです。', add: [...triDraw([1, 2, 4, 8, 16, 32, 64, 128, 256]), ...say('ぜんぶぬる ＝ 最大\n1＋2＋4＋8＋16＋32＋64＋128＋256', C.green, FILL.green, 12)] },
  { note: '❓その合計は？→1から128までをたすと255（次の256より1小さい）です。255＋256＝511です。9マスは「ぬる・ぬらない」の2通りが9回で2×2×…×2＝512通りで、0から511までの整数に1通りずつ対応します。', add: fresh(bx(20, 22, 280, 28, '1＋2＋4＋8＋16＋32＋64＋128 ＝ 255', C.blue, FILL.blue, 12), bx(20, 62, 280, 28, '255 ＋ 256 ＝ 511', C.green, FILL.green, 13), bx(20, 102, 280, 30, '9マスのぬり方は 2を9回かけて 512通り\n0〜511 に 1通りずつ', C.purple, FILL.purple, 11), ...say('答え：(2) 128・32・4 のマスをぬる\n(3) 511', C.green, FILL.green, 13)) },
], '9マスの三角形で整数');

// ───────── モビール ─────────
const W1 = (x: number, y: number, t: string, color: string = C.blue, fill: string = FILL.blue): E => bx(x - 12, y, 24, 20, t, color, fill, 10);
const M1 = { P: 200, Lx: 56, Rx: 257.6 };
const mob1 = (): E[] => {
  const Lp = M1.Lx, Rp = M1.Rx;
  return [
    ln(M1.Lx, 18, M1.Rx, 18, C.ink, false, 3), ln(M1.P, 6, M1.P, 18, C.ink, false, 1.5),
    lb(128, 11, '12cm', 9, C.gray, 'middle', true), lb(229, 11, 'X', 10, C.gray, 'middle', true),
    // 左の棒 L（3 | 3）
    ln(Lp, 18, Lp, 46, C.ink, false, 1.5), ln(Lp - 36, 46, Lp + 36, 46, C.ink, false, 2.5),
    lb(Lp - 18, 39, '3', 9, C.gray), lb(Lp + 18, 39, '3', 9, C.gray),
    ln(Lp - 36, 46, Lp - 36, 58, C.ink), ln(Lp + 36, 46, Lp + 36, 58, C.ink),
    W1(Lp - 36, 58, 'a', C.red, FILL.red), W1(Lp + 36, 58, '10g'),
    // 右の棒 R（1 | 4）
    ln(Rp, 18, Rp, 46, C.ink, false, 1.5), ln(Rp - 12, 46, Rp + 48, 46, C.ink, false, 2.5),
    lb(Rp - 6, 39, '1', 9, C.gray), lb(Rp + 24, 39, '4', 9, C.gray),
    ln(Rp + 48, 46, Rp + 48, 58, C.ink), W1(Rp + 48, 58, '10g'),
    // S（2 | 2）
    ln(Rp - 12, 46, Rp - 12, 70, C.ink, false, 1.5), ln(Rp - 36, 70, Rp + 12, 70, C.ink, false, 2.5),
    lb(Rp - 24, 63, '2', 9, C.gray), lb(Rp, 63, '2', 9, C.gray),
    ln(Rp - 36, 70, Rp - 36, 82, C.ink), W1(Rp - 36, 82, '20g'),
    // T（2 | 2）
    ln(Rp + 12, 70, Rp + 12, 94, C.ink, false, 1.5), ln(Rp - 12, 94, Rp + 36, 94, C.ink, false, 2.5),
    lb(Rp, 87, '2', 9, C.gray), lb(Rp + 24, 87, '2', 9, C.gray),
    ln(Rp - 12, 94, Rp - 12, 106, C.ink), W1(Rp - 12, 106, 'b', C.red, FILL.red),
    ln(Rp + 36, 94, Rp + 36, 106, C.ink), W1(Rp + 36, 106, 'c', C.red, FILL.red),
  ];
};
const M2 = { P: 150 };
const mob2 = (): E[] => [
  ln(50, 18, 200, 18, C.ink, false, 3), ln(150, 6, 150, 18, C.ink, false, 1.5),
  lb(100, 11, '10cm', 9, C.gray, 'middle', true), lb(175, 11, 'Y', 10, C.gray, 'middle', true),
  ln(50, 18, 50, 46, C.ink, false, 1.5), ln(30, 46, 90, 46, C.ink, false, 2.5),
  lb(40, 39, '2', 9, C.gray), lb(70, 39, '4', 9, C.gray),
  ln(30, 46, 30, 58, C.ink), W1(30, 58, 'A', C.red, FILL.red), ln(90, 46, 90, 58, C.ink), W1(90, 58, 'B', C.red, FILL.red),
  ln(200, 18, 200, 46, C.ink, false, 1.5), ln(160, 46, 240, 46, C.ink, false, 2.5),
  lb(180, 39, '4', 9, C.gray), lb(220, 39, '4', 9, C.gray),
  ln(240, 46, 240, 58, C.ink), W1(240, 58, 'E', C.red, FILL.red),
  ln(160, 46, 160, 70, C.ink, false, 1.5), ln(120, 70, 180, 70, C.ink, false, 2.5),
  lb(140, 63, '4', 9, C.gray), lb(170, 63, '2', 9, C.gray),
  ln(120, 70, 120, 82, C.ink), W1(120, 82, 'C', C.red, FILL.red), ln(180, 70, 180, 82, C.ink), W1(180, 82, 'D', C.red, FILL.red),
];
const relabel = (x: number, y: number, t: string, color: string = C.green, fill: string = FILL.green): E[] => [cover(x - 13, y - 1, 26, 22), W1(x, y, t, color, fill)];
const kankan_rika_r11 = show([
  { note: '図Ⅰのモビールは、すべての棒が水平です。棒とひもの重さは考えません。おもりa、b、cの重さと、Xの長さを求めます。棒のそばの数字は、支点からの長さ（cm）です。', add: [...mob1(), ...say('a、b、c は何g？　X は何cm？\n（数字は棒の長さ cm、棒は水平）', C.ink, FILL.warm, 12)] },
  { note: '❓どこから解く？→左右の腕の長さが同じ棒（3と3、2と2、2と2）を探します。てこは「重さ×支点からの距離」が左右で等しいとつり合うので、距離が同じなら、重さも同じです。', add: [ln(M1.Lx - 36, 46, M1.Lx + 36, 46, C.red, false, 4), ln(M1.Rx - 36, 70, M1.Rx + 12, 70, C.red, false, 4), ln(M1.Rx - 12, 94, M1.Rx + 36, 94, C.red, false, 4), ...say('腕の長さが左右で同じ棒は\n左右のおもりも 同じ重さ', C.red, FILL.red)] },
  { note: '❓aは？→左の棒は3cmと3cmで、右が10gなので、a＝10gです。この棒にぶらさがる重さは、10＋10＝20gになります。', add: [...relabel(M1.Lx - 36, 58, '10g'), ...say('3cm：3cm で同じ長さ\na ＝ 10g　左の棒ぜんたい ＝ 20g', C.green, FILL.green, 13)] },
  { note: '❓Sの棒は？→S棒も2cmと2cmで同じ長さ。左に20gなので、右にぶらさがるT棒ぜんたいも20gです。', add: [lb(270, 138, 'T棒ぜんたい 20g', 10, C.purple, 'middle', true), ...say('S棒は 2cm：2cm\n左が20g → 右のT棒ぜんたいも20g', C.purple, FILL.purple, 13)] },
  { note: '❓bとcは？→T棒も2cmと2cmで、合計20gです。同じ重さずつなので、b＝c＝20÷2＝10gです。', add: [...relabel(M1.Rx - 12, 106, '10g'), ...relabel(M1.Rx + 36, 106, '10g'), ...say('b ＋ c ＝ 20　b ＝ c\nb ＝ c ＝ 20 ÷ 2 ＝ 10g', C.green, FILL.green, 13)] },
  { note: '❓Rの棒のつり合いを確かめると？→左の1cmにはS棒ぜんたい（20＋20＝40g）、右の4cmには10g。40×1＝10×4＝40でつり合います。R棒ぜんたいは40＋10＝50gです。', add: say('R棒：左 40g×1cm ＝ 40\n右 10g×4cm ＝ 40 ✓　ぜんたい 50g', C.ink, FILL.warm, 13) },
  { note: '❓Xは？→一番上の棒では、左にL棒ぜんたい20gが12cm、右にR棒ぜんたい50gがXcmです。ぶらさがった棒は、ぜんたいの重さが1点で引っぱるとみなせます。20×12＝240＝50×X。X＝240÷50＝4.8cmです。', add: [cover(214, 2, 30, 14), lb(229, 11, '4.8', 10, C.green, 'middle', true), ...say('20 × 12 ＝ 240　50 × X ＝ 240\nX ＝ 240 ÷ 50 ＝ 4.8cm', C.green, FILL.green, 13)] },
  { note: '(ア)(イ)の答えは、a＝10g、b＝10g、c＝10g、X＝4.8cmです。確かめると、50×4.8＝240で、左の20×12＝240とぴったり同じです。', add: fresh(...mob1(), cover(214, 2, 30, 14), lb(229, 11, '4.8', 10, C.green, 'middle', true), ...say('50 × 4.8 ＝ 240 ＝ 20 × 12 ✓\n答え：a＝b＝c＝10g、X＝4.8cm', C.green, FILL.green, 13)) },
  { note: '図Ⅱです。おもりA〜Eは3種類の重さに分けられます。最も重いおもりと、Yの長さを求めます。（棒のそばの数字は長さcm）', add: fresh(...mob2(), ...say('A〜E は 3種類の重さ\n最も重いものは？　Y は何cm？')) },
  { note: '❓まずCとDは？→C、D棒は4cmと2cm。Cの腕はDの2倍長いので、Cのほうが軽く、Cの重さを1とするとDは2です。（重さ×距離：C×4＝D×2）', add: [ln(120, 70, 180, 70, C.red, false, 4), ...relabel(120, 82, '1', C.red, FILL.red), ...relabel(180, 82, '2', C.red, FILL.red), ...say('C × 4 ＝ D × 2\n腕が2倍長いCは半分の重さ → C＝1、D＝2', C.red, FILL.red, 12)] },
  { note: '❓Eは？→E棒は4cmと4cmで同じ長さ。左にぶらさがるC棒ぜんたい（1＋2＝3）と同じ重さがEです。E＝3です。', add: [ln(160, 46, 240, 46, C.red, false, 4), ...relabel(240, 58, '3', C.red, FILL.red), ...say('4cm：4cm で同じ長さ\nE ＝ C ＋ D ＝ 1 ＋ 2 ＝ 3', C.red, FILL.red, 13)] },
  { note: '❓AとBは？→A、B棒は2cmと4cm。Bの腕が2倍長いので、A＝B×2です。5個が3種類の重さになるのは、BがCと同じ1のとき（A2、B1、C1、D2、E3）だけです。ほかの重さだと4種類以上になります。', add: [ln(30, 46, 90, 46, C.red, false, 4), ...relabel(30, 58, '2', C.red, FILL.red), ...relabel(90, 58, '1', C.red, FILL.red), ...say('A × 2 ＝ B × 4 → A は B の2倍\n3種類になるのは B＝1 のとき\nA2　B1　C1　D2　E3 → いちばん重いのは E', C.red, FILL.red, 11)] },
  { note: '❓Yは？→一番上の棒の左は、A棒ぜんたい2＋1＝3、右は、C＋D＋E＝1＋2＋3＝6です。右は2倍重いので、腕の長さは半分。3×10＝6×Y、Y＝30÷6＝5cmです。', add: [cover(160, 2, 30, 14), lb(175, 11, '5', 10, C.green, 'middle', true), ...say('左 3 × 10 ＝ 30\n右 6 × Y ＝ 30 → Y ＝ 5cm\n答え：最も重いのは E だけ、Y ＝ 5cm', C.green, FILL.green, 11)] },
], 'モビールのつり合い');

// ───────── 長方形から半円と三角形を除く ─────────
const compBase = (): E[] => [
  pg([[90, 20], [230, 20], [230, 120], [90, 120]], C.ink, FILL.yellow),
  sc(90, 70, 50, -90, 90, C.blue, FILL.blue),
  pg([[170, 20], [210, 20], [190, 120]], C.red, FILL.red),
  lb(160, 12, '14cm', 11, C.ink, 'middle', true), lb(82, 70, '10cm', 11, C.ink, 'end', true),
  lb(115, 70, '半円', 11, C.blue, 'middle', true), lb(190, 52, '三角形', 10, C.red, 'middle', true),
];
const shitennoji_sansu_01 = show([
  { note: 'たて10cm、横14cmの長方形の中に、半円（直径10cm）と三角形（底辺4cm、高さ10cm）があります。色のついた部分（黄色）の面積を求めます。円周率は3.14です。', add: [...compBase(), ...say('黄色の部分の面積は？\n（長方形から 半円と三角形を除く）')] },
  { note: '❓どうやって求める？→黄色の部分は、長方形全体から、半円と三角形を取りのぞいた残りです。だから「長方形−半円−三角形」と引き算で求めます。', add: say('黄色 ＝ 長方形 − 半円 − 三角形', C.purple, FILL.purple, 14) },
  { note: '❓長方形の面積は？→たて×横で、10×14＝140cm²です。たて×横は、1cm²の正方形が何個ならぶかを数える計算です。', add: fresh(pg([[90, 20], [230, 20], [230, 120], [90, 120]], C.ink, FILL.yellow), lb(160, 12, '14cm', 11, C.ink, 'middle', true), lb(82, 70, '10cm', 11, C.ink, 'end', true), ...say('長方形 ＝ 10 × 14 ＝ 140cm²', C.blue, FILL.blue, 14)) },
  { note: '❓半円の面積は？→半径は直径10の半分で5cm。円の面積は半径×半径×3.14で5×5×3.14＝78.5。❓なぜ÷2？→半円は円の半分だからです。78.5÷2＝39.25cm²です。', add: fresh(ci(130, 66, 48, undefined, C.gray, FILL.gray), sc(130, 66, 48, -90, 90, C.blue, FILL.blue), ln(130, 66, 178, 66, C.ink, false, 1.6), lb(156, 60, '5cm', 10, C.ink, 'middle', true), lb(250, 66, '半円＝円の\n半分', 13, C.blue, 'middle', true), ...say('円 ＝ 5 × 5 × 3.14 ＝ 78.5\n半円 ＝ 78.5 ÷ 2 ＝ 39.25cm²', C.blue, FILL.blue, 13)) },
  { note: '❓三角形の面積は？→底辺4cm、高さ10cmなので4×10÷2＝20cm²です。❓なぜ÷2？→4×10の長方形の中に三角形を入れると、ちょうど半分になるからです。', add: fresh(bx(100, 20, 40, 100, undefined, C.gray, FILL.gray), pg([[100, 20], [140, 20], [120, 120]], C.red, FILL.red), lb(120, 12, '4cm', 10, C.ink, 'middle', true), lb(92, 70, '10cm', 10, C.ink, 'end', true), lb(230, 66, '長方形 4×10＝40\nの 半分', 13, C.red, 'middle', true), ...say('三角形 ＝ 4 × 10 ÷ 2 ＝ 20cm²', C.red, FILL.red, 14)) },
  { note: '❓では黄色の面積は？→長方形の140から、半円の39.25と三角形の20を引きます。140−39.25−20＝80.75cm²です。', add: fresh(bx(30, 26, 260, 30, '長方形 140', C.ink, FILL.yellow, 12), bx(30, 66, 97, 30, '半円 39.25', C.blue, FILL.blue, 12), bx(127, 66, 50, 30, '三角形 20', C.red, FILL.red, 10), bx(177, 66, 113, 30, '黄色 80.75', C.green, FILL.green, 12), ...say('140 − 39.25 − 20\n＝ 140 − 59.25 ＝ 80.75cm²', C.green, FILL.green, 13)) },
  { note: '答えは80.75cm²です。確かめると、半円39.25＋三角形20＋黄色80.75＝140で、長方形の面積とぴったり同じになります。', add: fresh(...compBase(), ...say('39.25 ＋ 20 ＋ 80.75 ＝ 140 ✓\n答え：80.75cm²', C.green, FILL.green, 14)) },
], '長方形から半円と三角形を除く');

// ───────── 定価と利益 ─────────
const mk = (w: number) => (w * 240) / 1500;
const shitennoji_sansu_02 = show([
  { note: '原価1000円の品物を、定価の2割引きで売って、200円の利益を出します。定価は原価の何割増しにすればよいか、また定価は何円かを求めます。', add: [bx(30, 30, mk(1000), 34, '原価 1000円', C.gray, FILL.gray, 12), lb(150, 90, '定価 ？円', 14, C.blue, 'middle', true), ...say('売る値段 ＝ 定価の2割引き\n利益 ＝ 売る値段 − 原価 ＝ 200円')] },
  { note: '❓「2割引き」とは？→定価の2割（0.2倍）だけ安くすることです。たとえば定価が1000円なら、200円引いて800円。つまり売る値段は、定価の8割（0.8倍）です。', add: fresh(bx(30, 30, 240, 34, '定価（□円）', C.blue, FILL.blue, 12), bx(30, 80, mk(1200), 34, '売る値段（定価の8割）', C.green, FILL.green, 11), bx(30 + mk(1200), 80, 240 - mk(1200), 34, '2割', C.red, FILL.red, 11), ...say('売る値段 ＝ 定価 × 0.8\n（割引の2割は「定価」に対して）', C.blue, FILL.blue)) },
  { note: '❓売る値段はいくら？→利益は「売る値段−原価」で200円。だから売る値段は、原価1000円に利益200円をたして1200円です。', add: fresh(bx(30, 40, mk(1000), 34, '原価 1000円', C.gray, FILL.gray, 12), bx(30 + mk(1000), 40, mk(200), 34, '200', C.green, FILL.green, 11), ...dim(30, 30 + mk(1200), 34, '売る値段', C.green, 11), ...say('売る値段 ＝ 1000 ＋ 200 ＝ 1200円', C.green, FILL.green, 14)) },
  { note: '❓では定価は？→売る値段1200円は、定価の0.8倍です。□×0.8＝1200。❓なぜわり算？→かけ算の答えから、かけた数をもとにもどすからです。□＝1200÷0.8＝1500円です。', add: fresh(bx(30, 30, 240, 34, '定価 1500円', C.blue, FILL.blue, 12), bx(30, 80, mk(1200), 34, '1200円（定価×0.8）', C.green, FILL.green, 11), bx(30 + mk(1200), 80, 240 - mk(1200), 34, '300', C.red, FILL.red, 11), ...say('定価 × 0.8 ＝ 1200\n定価 ＝ 1200 ÷ 0.8 ＝ 1500円', C.blue, FILL.blue, 13)) },
  { note: '❓原価の何割増し？→定価1500円は、原価1000円の1500÷1000＝1.5倍。1.5倍は、1倍（原価）に0.5倍（5割）をふやした値段なので、5割増しです。', add: fresh(bx(30, 34, mk(1000), 34, '原価 1000円', C.gray, FILL.gray, 12), bx(30 + mk(1000), 34, mk(500), 34, '500円', C.red, FILL.red, 12), ...dim(30, 270, 28, '定価 1500円', C.blue, 11), lb(30 + mk(1000) + mk(500) / 2, 88, '5割', 12, C.red, 'middle', true), ...say('1500 ÷ 1000 ＝ 1.5倍 ＝ 5割増し', C.red, FILL.red, 14)) },
  { note: '❓よくあるまちがいは？→「2割引き」を原価にかけてしまうことです。割引は、いつも定価に対して考えます。原価1000円に0.8をかけると800円で、利益がでません。', add: fresh(bx(20, 30, 130, 44, 'まちがい\n1000 × 0.8 ＝ 800', C.red, FILL.red, 12), bx(170, 30, 130, 44, '正しい\n1500 × 0.8 ＝ 1200', C.green, FILL.green, 12), ...say('割引は「定価」にかける\n（原価にはかけない）', C.purple, FILL.purple, 13)) },
  { note: '答えは、定価は原価の1.5倍（5割増し）で1500円です。確かめると、1500円の2割引きは1500×0.8＝1200円。1200−1000＝200円の利益で、問題の条件と一致します。', add: fresh(bx(20, 22, 280, 26, '定価 1500円 ＝ 原価の1.5倍（5割増し）', C.blue, FILL.blue, 12), bx(20, 58, 280, 26, '売る値段 1500 × 0.8 ＝ 1200円', C.green, FILL.green, 12), bx(20, 94, 280, 26, '利益 1200 − 1000 ＝ 200円', C.red, FILL.red, 12), ...say('条件の利益200円と一致 ✓', C.green, FILL.green, 14)) },
], '定価と利益');

// ───────── 四角柱の体積と表面積 ─────────
const prism = (): E[] => [
  pg([[90, 54], [138, 54], [164, 36], [116, 36]], C.ink, FILL.gray),
  pg([[138, 54], [164, 36], [164, 108], [138, 126]], C.ink, FILL.blue),
  pg([[90, 54], [138, 54], [138, 126], [90, 126]], C.ink, FILL.warm),
  lb(114, 139, '6cm', 11, C.ink, 'middle', true), lb(84, 90, '9cm', 11, C.ink, 'end', true), lb(172, 122, '6cm', 11, C.ink, 'start', true),
];
const netBase = (): E[] => [
  ...[0, 1, 2, 3].map((i) => bx(88 + 36 * i, 46, 36, 54, '6×9', C.blue, FILL.blue, 9)),
  bx(124, 10, 36, 36, '6×6', C.green, FILL.green, 9), bx(124, 100, 36, 36, '6×6', C.green, FILL.green, 9),
];
const shitennoji_sansu_06 = show([
  { note: '底面が1辺6cmの正方形で、高さ9cmの四角柱です。体積と表面積を求めます。', add: [...prism(), ...say('体積は？　表面積は？\n（底面は1辺6cmの正方形、高さ9cm）')] },
  { note: '❓体積はなぜ「底面積×高さ」？→高さ1cmぶんの薄い層の体積は、底面積6×6＝36に1cmをかけた36cm³です。この層が高さの数だけ重なっているので、体積は底面積に高さをかけた数になります。', add: [...[1, 2, 3, 4, 5, 6, 7, 8].flatMap((i) => [ln(90, 54 + 8 * i, 138, 54 + 8 * i, C.gray), ln(138, 54 + 8 * i, 164, 36 + 8 * i, C.gray)]), lb(232, 80, '1cmの層が\n9枚', 13, C.blue, 'middle', true), ...say('1層 ＝ 6 × 6 × 1 ＝ 36cm³', C.blue, FILL.blue, 14)] },
  { note: '❓では9層ぶんでは？→36cm³の層が9枚なので、36×9＝324cm³です。', add: say('体積 ＝ 36 × 9 ＝ 324cm³', C.green, FILL.green, 15) },
  { note: '❓表面積とは？→立体の外側の面をぜんぶたした面積です。展開図に開くと、数え忘れがわかります。面は、上と下の正方形が2枚、まわりの長方形が4枚で、ぜんぶで6面です。', add: fresh(...netBase(), lb(250, 28, '展開図', 12, C.ink, 'middle', true), ...say('面は ぜんぶで 6面\n（正方形2枚 ＋ 長方形4枚）', C.ink, FILL.warm, 13)) },
  { note: '❓上下の正方形は？→1枚が6×6＝36cm²で、2枚あるので36×2＝72cm²です。', add: [bx(124, 10, 36, 36, '6×6', C.red, FILL.red, 9), bx(124, 100, 36, 36, '6×6', C.red, FILL.red, 9), ...say('底面2枚 ＝ 36 × 2 ＝ 72cm²', C.red, FILL.red, 14)] },
  { note: '❓まわりの長方形は？→1枚が6×9＝54cm²で、4枚あるので54×4＝216cm²です。', add: [...[0, 1, 2, 3].map((i) => bx(88 + 36 * i, 46, 36, 54, '6×9', C.purple, FILL.purple, 9)), ...say('側面4枚 ＝ 54 × 4 ＝ 216cm²', C.purple, FILL.purple, 14)] },
  { note: '❓表面積は？→底面2枚72cm²と側面4枚216cm²をたして、72＋216＝288cm²です。', add: say('表面積 ＝ 72 ＋ 216 ＝ 288cm²', C.green, FILL.green, 15) },
  { note: '答えは、体積324cm³、表面積288cm²です。確かめると、側面4枚を横につなげると、横6×4＝24cm、たて9cmの1つの長方形。24×9＝216で一致します。単位は、体積はcm³、表面積はcm²です。', add: fresh(bx(20, 34, 280, 30, '側面をつなげる：(6×4) × 9 ＝ 24 × 9 ＝ 216 ✓', C.purple, FILL.purple, 11), bx(20, 76, 280, 30, '体積 324cm³（立体の大きさ）\n表面積 288cm²（外側の面の広さ）', C.green, FILL.green, 11), ...say('答え：体積 324cm³、表面積 288cm²', C.green, FILL.green, 13)) },
], '四角柱の体積と表面積');

// ───────── 豆電球2個：直列と並列 ─────────
const serCirc = (): E[] => [
  ln(40, 34, 280, 34, C.ink, false, 2), ln(40, 104, 280, 104, C.ink, false, 2), ln(40, 34, 40, 104, C.ink, false, 2), ln(280, 34, 280, 104, C.ink, false, 2),
  bx(18, 54, 44, 30, '電池\n2個', C.main, FILL.warm, 10),
  ci(120, 34, 15, '電球', C.red, FILL.yellow, 9), ci(210, 34, 15, '電球', C.red, FILL.yellow, 9),
];
const parCirc = (): E[] => [
  ln(40, 34, 230, 34, C.ink, false, 2), ln(40, 104, 230, 104, C.ink, false, 2), ln(40, 34, 40, 104, C.ink, false, 2),
  ln(130, 34, 130, 104, C.ink, false, 2), ln(230, 34, 230, 104, C.ink, false, 2),
  bx(18, 54, 44, 30, '電池\n2個', C.main, FILL.warm, 10),
  ci(130, 69, 15, '電球', C.red, FILL.yellow, 9), ci(230, 69, 15, '電球', C.red, FILL.yellow, 9),
];
const shitennoji_rika_03 = show([
  { note: '同じ豆電球2個を、直列につないだ回路と並列につないだ回路に、電池2個（直列）をつなぎます。全体の抵抗・全体の電流・各豆電球の電流と明るさを求めます。電池1個・豆電球1個の電流を①、豆電球1個分の抵抗を1、そのときの明るさを1とします。', add: [lb(74, 26, '直列', 13, C.blue, 'middle', true), bx(10, 44, 38, 34, '電池\n2個', C.main, FILL.warm, 9), ar(48, 61, 58, 61, C.blue), bx(58, 44, 36, 34, '電球', C.red, FILL.yellow, 10), ar(94, 61, 104, 61, C.blue), bx(104, 44, 36, 34, '電球', C.red, FILL.yellow, 10), lb(246, 26, '並列', 13, C.red, 'middle', true), bx(176, 66, 38, 34, '電池\n2個', C.main, FILL.warm, 9), ar(214, 76, 232, 56, C.red), ar(214, 90, 232, 110, C.red), bx(232, 40, 40, 30, '電球', C.red, FILL.yellow, 10), bx(232, 100, 40, 30, '電球', C.red, FILL.yellow, 10), ...say('① 全体の抵抗　② 全体の電流\n③ 各豆電球の電流と明るさ')] },
  { note: '❓直列の全体の抵抗は？→電流の通り道に豆電球が2つ続くので、流れにくさがたし算になり、1＋1＝2です。道が長くなるほど、流れにくくなるからです。', add: fresh(...serCirc(), lb(120, 62, '抵抗1', 11, C.red, 'middle', true), lb(210, 62, '抵抗1', 11, C.red, 'middle', true), ...say('直列の抵抗 ＝ 1 ＋ 1 ＝ 2', C.blue, FILL.blue, 15)) },
  { note: '❓直列の電流は？→電流＝電池の数÷抵抗です。電池が多いほど強くおし、抵抗が大きいほど流れにくいからです。2÷2＝①。直列は道が1本なので、どの豆電球にも同じ①が流れます。明るさは電流×電流で、①×①＝1です。', add: [lb(165, 82, '①', 15, C.blue, 'middle', true), ...say('電流 ＝ 電池の数 ÷ 抵抗 ＝ 2 ÷ 2 ＝ ①\n各豆電球 ①、明るさ ① × ① ＝ 1', C.blue, FILL.blue, 12)] },
  { note: '❓並列の全体の抵抗は？→同じ豆電球が2本の道に分かれて、電流の通り道が2倍に広がるので、流れやすさも2倍。抵抗は半分の1/2です。', add: fresh(...parCirc(), lb(158, 69, '抵抗1', 10, C.red, 'start', true), lb(258, 69, '抵抗1', 10, C.red, 'start', true), ...say('並列の抵抗：道が2本で 2倍流れやすい\n1 ÷ 2 ＝ 1/2', C.red, FILL.red, 13)) },
  { note: '❓並列の各豆電球は？→並列は、どちらの枝も電池に直接つながるので、それぞれ電池2個ぶんの力がかかります。電池の数÷抵抗で、2÷1＝②が流れます。', add: [lb(108, 69, '②', 15, C.blue, 'middle', true), lb(208, 69, '②', 15, C.blue, 'middle', true), ...say('各枝：電池2個 ÷ 抵抗1 ＝ ②', C.red, FILL.red, 14)] },
  { note: '❓全体の電流は？→電池から出る電流は2本の枝に分かれるので、枝の電流の合計です。②＋②＝④。全体の抵抗1/2から求めても、2÷1/2＝④で一致します。', add: [lb(70, 22, '全体 ④', 13, C.purple, 'middle', true), ...say('全体 ＝ ② ＋ ② ＝ ④\n2 ÷ 1/2 ＝ ④ ✓', C.purple, FILL.purple, 13)] },
  { note: '❓明るさは？→明るさは電流×電流できまります。直列の各豆電球は①×①＝1、並列の各豆電球は②×②＝4です。並列のほうが、ずっと明るく光ります。', add: fresh(bx(20, 24, 130, 54, '直列の各豆電球\n① × ① ＝ 1', C.blue, FILL.blue, 12), bx(170, 24, 130, 54, '並列の各豆電球\n② × ② ＝ 4', C.red, FILL.red, 12), lb(160, 104, '明るさ ＝ 電流 × 電流', 13, C.ink, 'middle', true), ...say('並列は 直列の 4倍の明るさ', C.purple, FILL.purple, 15)) },
  { note: '答えをまとめます。確かめると、並列の全体の電流④は、枝の②＋②と同じです。また、電流の大きい並列のほうが、電池の減りが早くなります。', add: fresh(bx(14, 8, 80, 28, '', C.gray, FILL.gray, 10), bx(98, 8, 100, 28, '直列', C.blue, FILL.blue, 12), bx(202, 8, 100, 28, '並列', C.red, FILL.red, 12), bx(14, 40, 80, 28, '① 全体の抵抗', C.gray, FILL.gray, 10), bx(98, 40, 100, 28, '2', C.ink, FILL.warm, 12), bx(202, 40, 100, 28, '1/2', C.ink, FILL.warm, 12), bx(14, 72, 80, 28, '② 全体の電流', C.gray, FILL.gray, 10), bx(98, 72, 100, 28, '①', C.ink, FILL.warm, 12), bx(202, 72, 100, 28, '④', C.ink, FILL.warm, 12), bx(14, 104, 80, 36, '③ 各豆電球', C.gray, FILL.gray, 10), bx(98, 104, 100, 36, '電流①\n明るさ1', C.ink, FILL.warm, 11), bx(202, 104, 100, 36, '電流②\n明るさ4', C.ink, FILL.warm, 11), ...say('並列の全体の電流 ④ ＝ ② ＋ ② ✓\n電流が大きい並列は 電池が早く減る', C.green, FILL.green, 12)) },
], '豆電球の直列と並列');

// ───────── 電熱線の直列つなぎ ─────────
const seiko_rika_02 = show([
  { note: '電池1個に、抵抗2の電熱線と抵抗3の電熱線を直列につなぎます。流れる電流と、抵抗2の電熱線の発熱が全体の何分のいくつかを求めます。電池1個・豆電球1個の電流が①、豆電球1個の抵抗が1です。', add: [ln(40, 34, 280, 34, C.ink, false, 2), ln(40, 104, 280, 104, C.ink, false, 2), ln(40, 34, 40, 104, C.ink, false, 2), ln(280, 34, 280, 104, C.ink, false, 2), bx(18, 54, 44, 30, '電池\n1個', C.main, FILL.warm, 10), bx(100, 24, 70, 20, '抵抗2', C.blue, FILL.blue, 11), bx(190, 24, 70, 20, '抵抗3', C.green, FILL.green, 11), ...say('抵抗2と抵抗3を 直列につなぐ\n電流は？　抵抗2の発熱は全体の何分のいくつ？')] },
  { note: '❓直列の全体の抵抗は？→電流の通り道に抵抗が2つ続くので、流れにくさはたし算。2＋3＝5です。', add: [...[0].map(() => lb(160, 70, '全体の抵抗', 12, C.ink, 'middle', true)), ...say('直列の全体の抵抗 ＝ 2 ＋ 3 ＝ 5', C.blue, FILL.blue, 15)] },
  { note: '❓電流は？→電流＝電池の数÷抵抗です。電池が多いほど強くおし、抵抗が大きいほど流れにくいからです。1÷5＝1/5。直列は道が1本なので、2つの電熱線に同じ電流が流れます。', add: [lb(160, 90, '電流（どこも同じ）', 12, C.blue, 'middle', true), ...say('電流 ＝ 電池の数 ÷ 抵抗\n＝ 1 ÷ 5 ＝ 1/5', C.blue, FILL.blue, 14)] },
  { note: '❓発熱は何できまる？→発熱は「電流×電流×抵抗」で決まります。電流が同じなら、抵抗が大きいほど、熱がたくさん出ます。', add: fresh(bx(20, 26, 130, 40, '抵抗2の電熱線\n電流 × 電流 × 2', C.blue, FILL.blue, 11), bx(170, 26, 130, 40, '抵抗3の電熱線\n電流 × 電流 × 3', C.green, FILL.green, 11), lb(160, 92, '電流は同じ（1/5）', 12, C.ink, 'middle', true), ...say('発熱 ＝ 電流 × 電流 × 抵抗\n電流が同じ → 発熱は抵抗の比', C.purple, FILL.purple, 13)) },
  { note: '❓それぞれの発熱は？→抵抗2は1/5×1/5×2＝2/25、抵抗3は1/5×1/5×3＝3/25です。', add: fresh(bx(20, 26, 130, 40, '抵抗2\n1/5×1/5×2 ＝ 2/25', C.blue, FILL.blue, 11), bx(170, 26, 130, 40, '抵抗3\n1/5×1/5×3 ＝ 3/25', C.green, FILL.green, 11), ...say('2/25 と 3/25\n（どちらも1/25が 2つぶんと 3つぶん）', C.ink, FILL.warm, 13)) },
  { note: '❓全体の何分のいくつ？→全体は2/25＋3/25＝5/25。2/25は5/25のうち2つぶんで、2/5です。発熱の比は抵抗の比2：3で、2÷(2＋3)＝2/5と同じです。', add: fresh(bx(30, 40, 104, 34, '抵抗2  2', C.blue, FILL.blue, 12), bx(134, 40, 156, 34, '抵抗3  3', C.green, FILL.green, 12), ...dim(30, 290, 34, '全体 5', C.ink, 11), ...say('抵抗2の発熱 ＝ 2 ÷ (2＋3) ＝ 2/5', C.blue, FILL.blue, 14)) },
  { note: '答えは、電流1/5、発熱は全体の2/5です。確かめると、全体の発熱は1/5×1/5×5＝1/5（＝5/25）で、2/25＋3/25と一致します。', add: fresh(bx(20, 22, 280, 28, '電流 ＝ 1 ÷ 5 ＝ 1/5', C.blue, FILL.blue, 12), bx(20, 60, 280, 28, '発熱の割合 ＝ 2/5', C.green, FILL.green, 12), ...say('全体の発熱 1/5×1/5×5 ＝ 5/25\n2/25 ＋ 3/25 ＝ 5/25 ✓', C.green, FILL.green, 13)) },
], '電熱線の直列つなぎ');

// ───────── 月の満ち欠け ─────────
const MOON_POS = { 新月: [108, 78], 上弦: [160, 130], 満月: [212, 78], 下弦: [160, 26] } as const;
const moon = (x: number, y: number, hi = false): E[] => [
  ci(x, y, 9, undefined, hi ? C.red : C.gray, FILL.gray), sc(x, y, 9, 90, 270, C.main, FILL.yellow),
];
const moonScene = (opts: { moons?: boolean; hi?: (keyof typeof MOON_POS)[] } = {}): E[] => {
  const out: E[] = [
    ci(30, 78, 22, '太陽', C.main, FILL.yellow, 9), ci(160, 78, 13, '地球', C.blue, FILL.blue, 8), ci(160, 78, 52, undefined, C.gray, 'none'),
    ar(56, 44, 92, 44, C.main), ar(56, 78, 92, 78, C.main), ar(56, 112, 92, 112, C.main),
  ];
  if (opts.moons) {
    const hi = opts.hi ?? [];
    (Object.keys(MOON_POS) as (keyof typeof MOON_POS)[]).forEach((k) => out.push(...moon(MOON_POS[k][0], MOON_POS[k][1], hi.includes(k))));
    out.push(lb(108, 62, '新月', 10, C.ink, 'middle', true), lb(176, 134, '上弦', 10, C.ink, 'start', true), lb(212, 62, '満月', 10, C.ink, 'middle', true), lb(176, 22, '下弦', 10, C.ink, 'start', true));
  }
  return out;
};
const earthSpin = (): E[] => {
  const out: E[] = [ci(160, 70, 40, '北極', C.blue, FILL.blue, 10)];
  [0, 90, 180, 270].forEach((t) => {
    const a = (t * Math.PI) / 180;
    const px = 160 + 54 * Math.cos(a), py = 70 - 54 * Math.sin(a);
    out.push(ar(px, py, px + 16 * -Math.sin(a), py + 16 * -Math.cos(a), C.red));
  });
  return out;
};
const litMoon = (): E[] => [ci(100, 72, 34, undefined, C.gray, FILL.gray), sc(100, 72, 34, 90, 270, C.main, FILL.yellow), ar(14, 40, 50, 40, C.main), ar(14, 72, 50, 72, C.main), ar(14, 104, 50, 104, C.main), lb(100, 120, '月', 11, C.ink, 'middle', true)];
const shitennoji_rika_09 = show([
  { note: '星座の動きと月の満ち欠けについて、①星座が東から西へ動いて見える理由、②月が満ち欠けする理由、③各月の形のときの月の位置、を答えます。', add: [...moonScene(), ...say('① 星座が東から西へ動いて見える理由\n② 月が満ち欠けする理由\n③ 新月・上弦・満月・下弦の月の位置', C.ink, FILL.warm, 11)] },
  { note: '❓① 星座はなぜ東から西へ動く？→星座が動いているのではなく、地球が西から東へ自転しているからです。電車の窓から見ると、景色が電車と反対向きに動いて見えるのと同じです。', add: fresh(...earthSpin(), lb(270, 50, '地球は\n西→東に\n自転', 12, C.red, 'middle', true), lb(50, 50, '星は\n東→西に\n動いて見える', 11, C.blue, 'middle', true), ...say('地球が回る向き ＝ 西から東\n→ 星は 反対の東から西へ動いて見える', C.red, FILL.red, 12)) },
  { note: '❓どれくらいの速さで動く？→地球は約24時間で1回転（360度）するので、星は1時間に360÷24＝15度動いて見えます。', add: fresh(ci(160, 66, 50, undefined, C.gray, FILL.warm), sc(160, 66, 50, 75, 90, C.red, FILL.red), ln(160, 66, 160, 16, C.ink), ln(160, 66, 172.9, 17.7, C.ink), lb(200, 30, '1時間で 15°', 12, C.red, 'start', true), ...say('360° ÷ 24時間 ＝ 15°／時間', C.red, FILL.red, 15)) },
  { note: '❓② 月はなぜ光って見える？→月は自分では光らず、太陽の光を反射して光って見えます。光が当たるのは、いつも太陽に向いた半分だけです。', add: fresh(...litMoon(), bx(160, 34, 150, 66, '月は自分で光らない\n太陽の光を反射して\n光って見える', C.main, FILL.warm, 12), ...say('明るいのは いつも\n太陽のほうを向いた半分だけ', C.main, FILL.yellow, 13)) },
  { note: '❓では、なぜ満ち欠けするの？→月は地球のまわりを約1か月で回ります。すると、地球から見える「明るい面」の割合が、月の位置によって変わります。これが満ち欠けです。', add: fresh(...moonScene({ moons: true }), ...say('月が地球のまわりを回る\n→ 地球から見える 明るい面の割合が変わる', C.blue, FILL.blue, 12)) },
  { note: '❓③ 新月と満月の位置は？→新月は月が太陽と同じ方向にあるとき。明るい面が太陽側で、地球からは見えません。満月は太陽と反対側のとき。明るい面が地球のほうを向きます。', add: fresh(...moonScene({ moons: true, hi: ['新月', '満月'] }), ...say('新月：太陽と同じ方向（見えない）\n満月：地球の太陽と反対側（まるく見える）', C.red, FILL.red, 12)) },
  { note: '❓上弦と下弦は？→太陽と月が、地球から見て90度はなれたときです。明るい半分の、ちょうど半分が見えます。上弦は太陽の東90度で夕方に南の空、下弦は太陽の西90度で明け方に南の空にあります。', add: fresh(...moonScene({ moons: true, hi: ['上弦', '下弦'] }), ...say('上弦：太陽の東90°（夕方、南に見える）\n下弦：太陽の西90°（明け方、南に見える）', C.purple, FILL.purple, 11)) },
  { note: '答えをまとめます。①地球が西から東へ自転するから。②月が地球のまわりを公転し、太陽の光が当たる部分の見え方が変わるから。③満月は地球の太陽と反対側、新月は太陽と同じ方向、上弦は太陽の東90度、下弦は太陽の西90度。', add: fresh(bx(14, 10, 292, 34, '① 地球が 西→東に自転するから', C.red, FILL.red, 12), bx(14, 50, 292, 34, '② 月が地球のまわりを公転し、光の当たる\n　 部分の見え方が変わるから', C.blue, FILL.blue, 11), bx(14, 90, 292, 50, '③ 新月＝太陽と同じ方向　満月＝太陽と反対側\n　 上弦＝太陽の東90°　下弦＝太陽の西90°', C.purple, FILL.purple, 11), ...say('星の動きも月の形も\n地球の自転と月の公転で説明できる', C.green, FILL.green, 13)) },
], '星座の動きと月の満ち欠け');

const shadowScene = (): E[] => [
  ci(30, 78, 22, '太陽', C.main, FILL.yellow, 9), ar(56, 62, 130, 62, C.main), ar(56, 78, 130, 78, C.main), ar(56, 94, 130, 94, C.main),
  pg([[160, 65], [300, 78], [160, 91]], C.gray, 'rgba(110,100,92,0.35)'), ci(160, 78, 13, '地球', C.blue, FILL.blue, 8),
  lb(262, 98, '地球の影', 10, C.gray, 'middle', true),
];
const kankan_rika_09 = show([
  { note: '月が満ち欠けする理由と、月食はどのような現象かを答えます。', add: [...moonScene({ moons: true }), ...say('① 月が満ち欠けする理由は？\n② 月食とは どんな現象？')] },
  { note: '❓月はなぜ光って見える？→月は自分では光らず、太陽の光を反射して光って見えます。光が当たるのは、いつも太陽に向いた半分だけです。', add: fresh(...litMoon(), bx(160, 34, 150, 66, '月は自分で光らない\n太陽の光を反射して\n光って見える', C.main, FILL.warm, 12), ...say('明るいのは いつも\n太陽のほうを向いた半分だけ', C.main, FILL.yellow, 13)) },
  { note: '❓では、なぜ満ち欠けするの？→月は地球のまわりを回ります。月の位置が変わると、地球から見える明るい面の割合が変わります。新月（見えない）から上弦、満月、下弦と、形が変わって見えます。', add: fresh(...moonScene({ moons: true }), ...say('月・地球・太陽の位置関係で\n地球から見える明るい面が変わる', C.blue, FILL.blue, 12)) },
  { note: '❓月食とは？→太陽の光を地球がさえぎると、地球の後ろに影ができます。この影の中に月が入り、月が暗くなる現象が月食です。', add: fresh(...shadowScene(), lb(160, 120, '太陽の光は 地球でさえぎられる', 11, C.ink, 'middle', true), ...say('地球の後ろ（太陽の反対側）に\n影ができる', C.gray, FILL.gray, 13)) },
  { note: '❓月食は、月がどの位置のときに起こる？→影があるのは太陽の反対側だけです。だから、月が地球をはさんで太陽と反対側にある満月のときだけ、月が影に入れます。新月や半月では入りません。', add: fresh(...shadowScene(), ...moon(212, 78, true), lb(212, 62, '満月', 10, C.red, 'middle', true), ...moon(108, 78), lb(108, 62, '新月', 10, C.ink, 'middle', true), lb(108, 110, '影に入らない', 10, C.gray, 'middle', true), ...say('月が地球の影に入る ＝ 月食\n（満月のときだけ起こる）', C.red, FILL.red, 13)) },
  { note: '❓では、なぜ満月のたびに月食にならないの？→月が回る面は、地球が太陽のまわりを回る面に対して、少し（約5度）かたむいています。そのため、多くの満月では、影の上や下を通りすぎます。', add: fresh(...shadowScene(), ...moon(212, 78, true), ...moon(212, 44), lb(212, 28, '影の上を通る', 10, C.gray, 'middle', true), ar(240, 76, 240, 52, C.red), lb(276, 58, 'かたむきで\n上下にずれる', 9, C.red, 'middle', true), ...say('月の通り道は 少しかたむいている\n→ 満月でも 影に入らないことが多い', C.purple, FILL.purple, 12)) },
  { note: '答えは、月自体は光らず太陽の光を反射しているため、月・地球・太陽の位置関係で見え方が変わること。月食は、地球の影に月が入る現象です。', add: fresh(bx(14, 14, 292, 54, '満ち欠け：月は光らず、太陽の光を反射\n位置関係がかわり、見える明るい面がかわる', C.blue, FILL.blue, 12), bx(14, 80, 292, 54, '月食：満月のとき\n月が地球の影に入る現象', C.red, FILL.red, 12), ...say('月の形も月食も\n月・地球・太陽の位置で決まる', C.green, FILL.green, 13)) },
], '月の満ち欠けと月食');

// ───────── 正方形に内接する円 ─────────
const inCirc = (): E[] => [pg([[112, 20], [208, 20], [208, 116], [112, 116]], C.ink, FILL.warm), ci(160, 68, 48, undefined, C.blue, FILL.blue), lb(160, 12, '12cm', 11, C.ink, 'middle', true)];
const seiko_sansu_01 = show([
  { note: '1辺12cmの正方形の中に、4つの辺すべてにふれる円（内接円）があります。この円の面積を求めます。円周率は3.14です。', add: [...inCirc(), ...say('正方形の中に ぴったり入る円\n円の面積は？')] },
  { note: '❓円の大きさ（半径）は？→円が左の辺にも右の辺にもふれるので、左右の辺のあいだの長さ12cmが、円の直径にちょうど等しくなります。', add: [ln(112, 68, 208, 68, C.red, false, 2.5), lb(160, 62, '直径 12cm', 11, C.red, 'middle', true), ...say('円の直径 ＝ 正方形の1辺 ＝ 12cm', C.red, FILL.red, 14)] },
  { note: '❓半径は？→半径は直径の半分なので、12÷2＝6cmです。', add: fresh(...inCirc(), ln(160, 68, 208, 68, C.red, false, 2.5), lb(184, 62, '半径6cm', 10, C.red, 'middle', true), ...say('半径 ＝ 12 ÷ 2 ＝ 6cm', C.red, FILL.red, 15)) },
  { note: '❓円の面積はなぜ「半径×半径×3.14」？→半径を1辺とする正方形（6×6）をつくると、円の面積はその正方形の約3.14倍（円周率ぶん）になるからです。', add: fresh(ci(160, 66, 48, undefined, C.blue, FILL.blue), bx(160, 18, 48, 48, '6×6', C.red, FILL.red, 11), ln(160, 66, 208, 66, C.ink, false, 1.6), lb(184, 80, '6cm', 10, C.ink, 'middle', true), lb(66, 66, '円 ＝ この正方形の\n3.14こぶん', 11, C.blue, 'middle', true), ...say('円の面積 ＝ 半径 × 半径 × 3.14\n（半径の正方形 × 円周率）', C.blue, FILL.blue, 13)) },
  { note: '❓計算すると？→6×6＝36、36×3.14＝113.04cm²です。', add: say('6 × 6 ＝ 36\n36 × 3.14 ＝ 113.04cm²', C.green, FILL.green, 14) },
  { note: '❓よくあるまちがいは？→正方形の1辺12cmをそのまま半径にして、12×12×3.14としてしまうことです。12cmは直径なので、半径は6cm。まちがえると、答えが4倍（452.16cm²）になります。', add: fresh(bx(20, 26, 130, 50, 'まちがい\n12×12×3.14\n＝ 452.16', C.red, FILL.red, 11), bx(170, 26, 130, 50, '正しい\n6×6×3.14\n＝ 113.04', C.green, FILL.green, 11), lb(160, 100, '12cmは「直径」', 13, C.purple, 'middle', true), ...say('直径と半径を まちがえない\n（452.16 は 113.04 の4倍）', C.purple, FILL.purple, 13)) },
  { note: '答えは113.04cm²です。確かめると、正方形の面積は12×12＝144cm²で、円はその3.14÷4＝0.785（約78.5%）です。144×0.785＝113.04でぴったり一致します。', add: fresh(...inCirc(), ...say('144 × 0.785 ＝ 113.04 ✓\n答え：113.04cm²', C.green, FILL.green, 14)) },
], '正方形に内接する円の面積');

// ───────── 相似な三角形の面積比 ─────────
const triGrid = (n: number, ax: number, ay: number, s: number, hu: number, color: string, fill: string, inner = true): E[] => {
  const P = (i: number, k: number): Pt => [ax - (i * s) / 2 + k * s, ay + i * hu];
  const out: E[] = [pg([P(0, 0), P(n, 0), P(n, n)], color, fill)];
  if (inner) {
    for (let i = 1; i < n; i++) {
      out.push(ln(P(i, 0)[0], P(i, 0)[1], P(i, i)[0], P(i, i)[1], color, false, 1));
      out.push(ln(P(i, i)[0], P(i, i)[1], P(n, i)[0], P(n, i)[1], color, false, 1));
      out.push(ln(P(i, 0)[0], P(i, 0)[1], P(n, n - i)[0], P(n, n - i)[1], color, false, 1));
    }
  }
  return out;
};
const seiko_sansu_02 = show([
  { note: '2つの三角形ABCとDEFは相似で、相似比は3：5です。三角形ABCの面積が27cm²のとき、三角形DEFの面積を求めます。', add: [...triGrid(3, 70, 40, 24, 21, C.blue, FILL.blue, false), lb(70, 34, 'A', 11, C.ink, 'middle', true), ...triGrid(5, 220, 20, 24, 21, C.red, FILL.red, false), lb(220, 14, 'D', 11, C.ink, 'middle', true), lb(70, 146, '面積 27cm²', 11, C.blue, 'middle', true), lb(220, 146, '面積 ？', 12, C.red, 'middle', true), ...say('相似比 3：5\n三角形ABC 27cm² → 三角形DEF は？')] },
  { note: '❓「相似比3：5」とは？→同じ形で、対応する辺の長さの比が3：5ということです。長さの比であって、面積の比ではありません。', add: [...dim(34, 106, 112, '3', C.blue, 11), ...dim(160, 280, 136, '5', C.red, 11), ...say('相似比 ＝ 辺の長さの比 ＝ 3：5\n（面積の比ではない）', C.ink, FILL.warm, 13)] },
  { note: '❓面積はどうふえる？→たとえとして、1辺を3等分して小さい三角形に分けると、同じ形の小さい三角形が1＋3＋5＝9個できます。辺の長さが3倍になると、たてにも横にも3倍に広がるので、3×3＝9個ぶんの広さです。（どんな三角形でも同じ考え方です）', add: fresh(...triGrid(3, 160, 20, 36, 32, C.blue, FILL.blue), lb(260, 70, '1＋3＋5\n＝ 9個', 13, C.blue, 'middle', true), ...say('1辺を3等分 → 小さい三角形が 9個\n3 × 3 ＝ 9', C.blue, FILL.blue, 13)) },
  { note: '❓1辺が5なら？→1辺を5等分すると、小さい三角形は1＋3＋5＋7＋9＝25個。5×5＝25個ぶんの広さです。', add: fresh(...triGrid(5, 160, 12, 28, 24, C.red, FILL.red), lb(270, 70, '1＋3＋5\n＋7＋9\n＝ 25個', 13, C.red, 'middle', true), ...say('1辺を5等分 → 小さい三角形が 25個\n5 × 5 ＝ 25', C.red, FILL.red, 13)) },
  { note: '❓だから面積の比は？→長さの比が3：5なら、面積の比は、それぞれ2回かけた3×3：5×5＝9：25です。長さはたて・横の2方向にのびるので「2乗」になります。', add: fresh(bx(20, 26, 130, 40, '三角形ABC\n3 × 3 ＝ 9', C.blue, FILL.blue, 13), bx(170, 26, 130, 40, '三角形DEF\n5 × 5 ＝ 25', C.red, FILL.red, 13), lb(160, 52, '：', 18, C.ink, 'middle', true), lb(160, 98, '面積の比 ＝ 9：25', 15, C.purple, 'middle', true), ...say('相似比 3：5 → 面積比 9：25\n（長さは たて・横の2方向）', C.purple, FILL.purple, 13)) },
  { note: '❓27cm²は比のどこ？→三角形ABCの面積27cm²が、比の9にあたります。比の1つぶんは27÷9＝3cm²。比の25ぶんは3×25＝75cm²です。', add: fresh(bx(30, 28, 99, 30, '9 ＝ 27cm²', C.blue, FILL.blue, 12), bx(30, 70, 240, 30, '25 ＝ ？cm²', C.red, FILL.red, 12), lb(232, 43, '比の1つぶん ＝ 27÷9 ＝ 3cm²', 11, C.ink, 'middle', true), ...say('27 ÷ 9 ＝ 3　3 × 25 ＝ 75cm²', C.red, FILL.red, 14)) },
  { note: '答えは75cm²です。確かめると、27：75を3で約分すると9：25で、面積比とぴったり一致します。もし相似比3：5をそのまま面積比にすると27×5÷3＝45cm²で、2乗を忘れた答えになります。', add: fresh(bx(20, 24, 280, 30, '27 ： 75 ＝ 9 ： 25（÷3）✓', C.green, FILL.green, 13), bx(20, 66, 280, 40, 'まちがい：3：5 をそのまま使うと\n27 × 5 ÷ 3 ＝ 45cm²', C.red, FILL.red, 12), ...say('答え：75cm²', C.green, FILL.green, 16)) },
], '相似な三角形の面積比');

export const figuresSchoolChugaku00: Record<string, Figure> = {
  kankan_sansu_03,
  kankan_sansu_06,
  kankan_sansu_08,
  kankan_rika_01,
  kankan_rika_04,
  kankan_rika_09,
  kankan_sansu_r01,
  kankan_sansu_r03,
  kankan_sansu_r05,
  kankan_sansu_r06,
  kankan_sansu_r08,
  kankan_sansu_r11,
  kankan_rika_r11,
  shitennoji_sansu_01,
  shitennoji_sansu_02,
  shitennoji_sansu_06,
  shitennoji_rika_03,
  shitennoji_rika_09,
  seiko_sansu_01,
  seiko_sansu_02,
  seiko_rika_01,
  seiko_rika_02,
};
