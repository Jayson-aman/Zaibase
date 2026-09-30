// 中学受験 入試傾向問題（第4批）の動く図解スライド。キーは問題 id。
// 「❓なぜ？→答え→❓では、なぜ？」の連鎖で、根っこまでたどる。座標は 320×240。
import type { Figure, DiagramElement } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, sc, show, band, fresh, flow, stack, dots, cover } from './diagram-kit';

// ── 近大附属 台形を平行線で分ける ──
const TZ = {
  full: () => pg([[130, 30], [190, 30], [235, 120], [85, 120]], C.main, FILL.warm),
  up: (fill: string, col: string) => pg([[130, 30], [190, 30], [205, 60], [115, 60]], col, fill),
  low: (fill: string, col: string) => pg([[115, 60], [205, 60], [235, 120], [85, 120]], col, fill),
};
const kindaiS002 = show([
  {
    note: '上底4cm・下底10cm・高さ6cmの台形を、上から2cmのところで、上底と下底に平行な直線で2つに分けます。上側と下側の面積の比を求めます。',
    add: [TZ.full(), lb(160, 22, '上底 4cm', 11, C.ink, 'middle', true), lb(160, 136, '下底 10cm', 11, C.ink, 'middle', true), ln(250, 30, 250, 120, C.gray, true), lb(262, 78, '高さ\n6cm', 10, C.gray, 'start'), ln(115, 60, 205, 60, C.red, true, 2.2), ar(104, 30, 104, 60, C.red), lb(98, 46, '2cm', 10, C.red, 'end'), ...band(150, lb(160, 185, '上側 ： 下側 ＝ ？', 14, C.ink, 'middle', true))],
  },
  {
    note: '❓なぜ、分ける直線の長さが必要なの？→上側も下側も台形で、台形の面積には上底と下底の長さが要るからです。❓では、その長さはどうやって分かる？→ななめの辺は一定の割合で広がっていくので、広がり方から分かります。',
    add: band(150, lb(160, 170, '下底10cm − 上底4cm ＝ 6cm 広がる', 12, C.blue, 'middle', true), lb(160, 195, '高さ6cmで6cm広がる → 1cm下がるごとに1cm広がる', 11, C.blue), lb(160, 220, '（左右に0.5cmずつ）', 10, C.gray)),
  },
  {
    note: '❓では、2cm下がるとどうなる？→1cmにつき1cm広がるので、2cmで2cm広がります。直線の長さは 4＋2＝6cm です。',
    add: [lb(160, 52, '6cm', 12, C.red, 'middle', true), ...band(150, bx(70, 166, 180, 32, '4 ＋ 2 ＝ 6cm', C.red, FILL.red, 15), lb(160, 220, '上側の台形は、上底4cm・下底6cm・高さ2cm', 11, C.gray))],
  },
  {
    note: '❓なぜ台形の面積は（上底＋下底）×高さ÷2なの？→同じ台形を逆さにして横にくっつけると、底辺が（上底＋下底）の平行四辺形になります。台形はその半分だから÷2です。',
    add: [...fresh(), pg([[92, 50], [152, 50], [167, 80], [77, 80]], C.blue, FILL.blue), pg([[152, 50], [242, 50], [227, 80], [167, 80]], C.purple, FILL.purple), lb(122, 66, '上側', 10), lb(197, 66, '逆さの上側', 10), lb(160, 42, '4 ＋ 6 ＝ 10', 11, C.ink, 'middle', true), ln(262, 50, 262, 80, C.gray, true), lb(276, 66, '高さ2', 10, C.gray, 'start'), ...band(110, lb(160, 132, '平行四辺形 10×2 ＝ 20 の半分', 12, C.ink, 'middle', true), bx(60, 150, 200, 34, '(4＋6)×2÷2 ＝ 10cm²', C.blue, FILL.blue, 15))],
  },
  {
    note: '❓台形全体の面積も同じやり方で出せる？→同じ公式が使えます。上底4cm・下底10cm・高さ6cmなので (4＋10)×6÷2＝42cm²。',
    add: [...fresh(), TZ.full(), lb(160, 22, '上底 4cm', 11, C.ink, 'middle', true), lb(160, 136, '下底 10cm', 11, C.ink, 'middle', true), ln(250, 30, 250, 120, C.gray, true), lb(262, 78, '高さ\n6cm', 10, C.gray, 'start'), ...band(150, bx(60, 170, 200, 34, '(4＋10)×6÷2 ＝ 42cm²', C.main, FILL.warm, 15))],
  },
  {
    note: '❓下側の面積はどうやって出す？→全体は「上側と下側を合わせたもの」なので、全体から上側を引けば下側になります。42−10＝32cm²。',
    add: [TZ.up(FILL.blue, C.blue), TZ.low(FILL.green, C.green), lb(160, 49, '上 10', 10, C.blue, 'middle', true), lb(160, 92, '下 ？', 12, C.green, 'middle', true), ...band(150, bx(40, 170, 240, 34, '42 − 10 ＝ 32cm²（下側）', C.green, FILL.green, 14))],
  },
  {
    note: '❓では、比はどうなる？→上側10：下側32です。❓なぜ2でわってよい？→比は両方に同じ数をかけたりわったりしても変わらないので、10も32も2でわって 5：16 にします。',
    add: [TZ.low(FILL.green, C.green), lb(160, 92, '下 32', 11, C.green, 'middle', true), ...band(150, bx(20, 166, 110, 30, '10 ： 32', C.gray, FILL.gray, 14), ar(134, 181, 176, 181, C.blue), lb(155, 172, '÷2', 11, C.blue), bx(180, 166, 110, 30, '5 ： 16', C.green, FILL.green, 15), lb(160, 220, '10÷2＝5、32÷2＝16', 11, C.gray))],
  },
  {
    note: '答えは 5：16 です。❓本当に合っている？→10＋32＝42で全体に戻ります。また5＋16＝21で、全体を21こに分けて42÷21＝2、上は5こぶんで 2×5＝10 と一致します。',
    add: [TZ.low(FILL.green, C.green), lb(160, 92, '下 32', 11, C.green, 'middle', true), ...band(150, bx(70, 160, 180, 32, '答え 5 ： 16', C.green, FILL.green, 16), lb(160, 210, '10＋32＝42　　5こぶん：2×5＝10 ✓', 11, C.ink))],
  },
], '台形を平行線で分けた面積の比');
//REG kindai_v2_s002 kindaiS002

// ── 清風 直方体の体積と表面積 ──
const sqr = (x: number, y: number, w: number, h: number, col: string, fill: string): DiagramElement => pg([[x, y], [x + w, y], [x + w, y + h], [x, y + h]], col, fill);
const cuboid = () => [pg([[100, 45], [154, 45], [184, 25], [130, 25]], C.blue, FILL.blue), pg([[154, 45], [184, 25], [184, 106], [154, 126]], C.purple, FILL.purple), pg([[100, 45], [154, 45], [154, 126], [100, 126]], C.main, FILL.warm)];
const cuboidLabels = () => [lb(127, 138, '6cm', 11, C.ink, 'middle', true), lb(92, 86, '9cm', 11, C.ink, 'end', true), lb(174, 18, '6cm', 11, C.ink, 'middle', true)];
const netParts = (ov: number) => {
  const r: DiagramElement[] = [];
  const sq = [[88, 18], [88, 108]];
  sq.forEach((p) => r.push(pg([[p[0], p[1]], [p[0] + 36, p[1]], [p[0] + 36, p[1] + 36], [p[0], p[1] + 36]], ov === 1 ? C.blue : C.gray, ov === 1 ? FILL.blue : FILL.gray)));
  [0, 1, 2, 3].forEach((i) => r.push(pg([[88 + i * 36, 54], [124 + i * 36, 54], [124 + i * 36, 108], [88 + i * 36, 108]], ov === 2 ? C.green : C.gray, ov === 2 ? FILL.green : FILL.gray)));
  return r;
};
const seifuS003 = show([
  {
    note: '底面が1辺6cmの正方形で、高さが9cmの直方体です。体積と表面積を求めます。',
    add: [...cuboid(), ...cuboidLabels(), ...band(150, lb(160, 185, '体積 ＝ ？　表面積 ＝ ？', 14, C.ink, 'middle', true))],
  },
  {
    note: '❓なぜ体積は「たて×よこ×高さ」なの？→体積は「1cm³の小さな立方体が何こ入るか」です。まず底に敷きつめると、たてに6こ・よこに6こで、1だんに 6×6＝36こ入ります。',
    add: [...fresh(), ...Array.from({ length: 36 }, (_, i) => sqr(100 + (i % 6) * 18, 12 + Math.floor(i / 6) * 18, 18, 18, C.blue, FILL.blue)), lb(100, 128, '← よこ6こ →', 10, C.gray, 'start'), lb(92, 62, 'たて\n6こ', 10, C.gray, 'end'), ...band(145, lb(160, 172, '1だんに 6×6 ＝ 36こ', 14, C.blue, 'middle', true))],
  },
  {
    note: '❓では、高さ9cmだと？→1だんの高さが1cmなので、9cmなら9だん積めます。同じ36こが9だんぶんだから、全部で 36×9 です。',
    add: [...fresh(), ...Array.from({ length: 9 }, (_, i) => sqr(90, 24 + i * 12, 100, 12, C.blue, FILL.blue)), lb(200, 70, '9だん', 13, C.blue, 'start', true), lb(200, 92, '（高さ9cm）', 10, C.gray, 'start'), lb(140, 14, '1だん36こ', 10, C.blue, 'middle'), ...band(145, lb(160, 172, '36こ × 9だん', 14, C.blue, 'middle', true))],
  },
  {
    note: '36×9＝324。1cm³が324こ入るので、体積は324cm³です。',
    add: [...fresh(), ...cuboid(), ...cuboidLabels(), ...band(150, bx(60, 166, 200, 34, '6×6×9 ＝ 324cm³', C.green, FILL.green, 16))],
  },
  {
    note: '❓表面積ってなに？→直方体のまわりの面（6つ）の面積の合計です。ひらくと図のようになります。上下の2まいは正方形、まわりの4まいは長方形です。',
    add: [...fresh(), ...netParts(0), lb(106, 39, '6×6', 9, C.ink), lb(106, 129, '6×6', 9, C.ink), ...[0, 1, 2, 3].map((i) => lb(106 + i * 36, 82, '6×9', 9, C.ink)), ...band(150, lb(160, 185, '面は全部で 6まい', 13, C.ink, 'middle', true))],
  },
  {
    note: '❓どうやって数えればまちがえにくい？→向かい合う面は同じ形で同じ大きさです。そこで「同じ形は何まいか」でまとめます。まず上下の正方形は2まいで、6×6×2＝72cm²。',
    add: [...netParts(1), lb(106, 39, '6×6', 9, C.ink), lb(106, 129, '6×6', 9, C.ink), ...[0, 1, 2, 3].map((i) => lb(106 + i * 36, 82, '6×9', 9, C.ink)), ...band(150, bx(40, 170, 240, 32, '6×6×2まい ＝ 72cm²', C.blue, FILL.blue, 14))],
  },
  {
    note: '❓では、まわりの4まいは？→長方形の面積は 6×9＝54cm²。それが4まいなので 54×4＝216cm²。❓最後は？→72＋216＝288cm² です。',
    add: [...netParts(2), lb(106, 39, '6×6', 9, C.ink), lb(106, 129, '6×6', 9, C.ink), ...[0, 1, 2, 3].map((i) => lb(106 + i * 36, 82, '6×9', 9, C.ink)), ...band(150, bx(20, 162, 280, 28, '6×9×4まい ＝ 216cm²', C.green, FILL.green, 13), bx(20, 196, 280, 28, '72 ＋ 216 ＝ 288cm²', C.main, FILL.warm, 14))],
  },
  {
    note: '答えは 体積324cm³、表面積288cm² です。❓確かめるには？→324÷9＝36で底面の面積に戻ります。面も 36×2＋54×4 と、2まいずつの3組（36×2、54×2、54×2）で6まいそろっています。',
    add: [...fresh(), ...cuboid(), ...cuboidLabels(), ...band(150, bx(20, 160, 280, 30, '体積 324cm³　表面積 288cm²', C.green, FILL.green, 14), lb(160, 212, '324÷9＝36 ✓　面は2まい×3組＝6まい ✓', 11, C.ink))],
  },
], '直方体の体積と表面積');
//REG seifu_v2_s003 seifuS003

// ── 清風 円と同じ面積の正方形 ──
const seifuS005 = show([
  {
    note: '半径6cmの円と同じ面積の正方形を考えます。この正方形の1辺の長さを、小数第1位まで求めます。円周率は3.14です。',
    add: [ci(90, 80, 45, undefined, C.blue, FILL.blue), ln(90, 80, 135, 80, C.red, false, 2), lb(112, 74, '6cm', 10, C.red, 'middle', true), pg([[190, 45], [260, 45], [260, 115], [190, 115]], C.green, FILL.green), lb(225, 80, '同じ面積', 11, C.ink, 'middle', true), lb(225, 36, '1辺 ？cm', 11, C.green, 'middle', true), ...band(150, lb(160, 185, '円の面積 ＝ 正方形の面積', 14, C.ink, 'middle', true))],
  },
  {
    note: '❓なぜ円の面積は「半径×半径×3.14」なの？→半径を1辺とする正方形をとると、円の面積はその正方形のちょうど3.14こぶんになるからです。この3.14が円周率です。',
    add: [...fresh(), ci(110, 80, 50, undefined, C.blue, FILL.blue), pg([[110, 80], [160, 80], [160, 30], [110, 30]], C.red, FILL.red), lb(135, 55, '半径×半径', 9, C.red, 'middle', true), ...band(150, lb(160, 175, '円の面積は、この正方形の 3.14こぶん', 12, C.blue, 'middle', true), lb(160, 200, '円の面積 ＝ 半径×半径×3.14', 13, C.ink, 'middle', true))],
  },
  {
    note: 'この問題は半径6cmなので、半径×半径は 6×6＝36。3.14こぶんだから 36×3.14＝113.04cm² です。',
    add: [ln(110, 80, 160, 80, C.red, false, 2), lb(135, 92, '6cm', 10, C.red, 'middle', true), ...band(150, bx(40, 166, 240, 34, '6×6×3.14 ＝ 113.04cm²', C.blue, FILL.blue, 15))],
  },
  {
    note: '❓では、正方形のほうは何を探せばいい？→正方形の面積は「1辺×1辺」です。つまり、2回かけて113.04になる数を探せば、それが1辺の長さです。',
    add: [...fresh(), pg([[110, 20], [210, 20], [210, 120], [110, 120]], C.green, FILL.green), lb(160, 60, '面積 113.04', 13, C.ink, 'middle', true), lb(160, 82, '1辺×1辺', 12, C.ink), lb(160, 12, '1辺 ？', 11, C.green, 'middle', true), ...band(150, lb(160, 185, '？ × ？ ＝ 113.04 になる ？', 13, C.green, 'middle', true))],
  },
  {
    note: '❓いきなり見つけるのはむずかしい。どうする？→まず整数ではさみます。10×10＝100、11×11＝121。113.04は、100と121のあいだです。',
    add: [...fresh(), bx(10, 40, 90, 40, '10×10\n＝100', C.gray, FILL.gray, 12), bx(115, 40, 90, 40, '？×？\n＝113.04', C.green, FILL.green, 12), bx(220, 40, 90, 40, '11×11\n＝121', C.gray, FILL.gray, 12), ...band(110, lb(160, 140, '100 ＜ 113.04 ＜ 121', 14, C.ink, 'middle', true), lb(160, 175, '❓なぜ10と11のあいだ？', 12, C.green), lb(160, 200, '→ 面積が100と121のあいだだから', 12, C.green)),],
  },
  {
    note: '❓では、10と11のどこ？→小数第1位を1つずつ試します。10.6×10.6＝112.36、10.7×10.7＝114.49。目標の113.04は、この2つのあいだにあります。',
    add: band(110, bx(20, 120, 130, 36, '10.6×10.6\n＝112.36', C.gray, FILL.gray, 12), bx(170, 120, 130, 36, '10.7×10.7\n＝114.49', C.gray, FILL.gray, 12), lb(160, 185, '112.36 ＜ 113.04 ＜ 114.49', 13, C.ink, 'middle', true), lb(160, 210, '10.6と10.7のあいだ', 12, C.green)),
  },
  {
    note: '❓どちらを答えにする？→小数第1位までの答えなので、近いほうを選びます。113.04との差は、10.6のほうが0.68、10.7のほうが1.45。10.6のほうが近いので、答えは10.6cmです。',
    add: band(110, bx(20, 120, 130, 36, '113.04−112.36\n＝0.68', C.green, FILL.green, 12), bx(170, 120, 130, 36, '114.49−113.04\n＝1.45', C.gray, FILL.gray, 12), lb(160, 180, '0.68 ＜ 1.45 → 10.6のほうが近い', 13, C.green, 'middle', true), bx(90, 195, 140, 32, '答え 10.6cm', C.green, FILL.green, 15)),
  },
  {
    note: '❓確かめは？→10.6×10.6＝112.36で、円の面積113.04とほとんど同じです（小数第1位までに丸めたので、ほんの少しだけ小さくなります）。',
    add: band(110, lb(160, 135, '円の面積　 6×6×3.14 ＝ 113.04', 12, C.blue, 'middle', true), lb(160, 160, '正方形　10.6×10.6 ＝ 112.36', 12, C.green, 'middle', true), lb(160, 190, 'ほぼ同じ → 10.6cm ✓', 14, C.ink, 'middle', true)),
  },
], '円と同じ面積の正方形');
//REG seifu_v2_s005 seifuS005

// ── 高槻 正方形の中の三角形APQ ──
const TK = { A: [106, 25], B: [214, 25], C: [214, 133], D: [106, 133], P: [214, 61], Q: [187, 133] } as const;
const tkPoly = (pts: readonly (readonly [number, number])[], col: string, fill: string) => pg(pts.map((p) => [p[0], p[1]] as [number, number]), col, fill);
const tkBase = () => [tkPoly([TK.A, TK.B, TK.C, TK.D], C.main, FILL.warm), lb(98, 22, 'A', 11, C.ink, 'end', true), lb(222, 22, 'B', 11, C.ink, 'start', true), lb(222, 140, 'C', 11, C.ink, 'start', true), lb(98, 140, 'D', 11, C.ink, 'end', true), lb(222, 62, 'P', 11, C.ink, 'start', true), lb(187, 145, 'Q', 11, C.ink, 'middle', true)];
const tkTri = (on: number[]) => [
  on.includes(1) ? tkPoly([TK.A, TK.B, TK.P], C.blue, FILL.blue) : null,
  on.includes(2) ? tkPoly([TK.C, TK.P, TK.Q], C.green, FILL.green) : null,
  on.includes(3) ? tkPoly([TK.A, TK.D, TK.Q], C.purple, FILL.purple) : null,
].filter((x): x is DiagramElement => x !== null);
const tkNums = () => [lb(186, 40, '①', 11, C.blue, 'middle', true), lb(206, 120, '②', 11, C.green, 'middle', true), lb(128, 102, '③', 12, C.purple, 'middle', true), lb(165, 78, '△APQ', 10, C.ink, 'middle', true)];
const takatsukiS001 = show([
  {
    note: '1辺12cmの正方形ABCDで、辺BC上にBP＝4cm、辺CD上にCQ＝3cmとなる点P・Qをとります。三角形APQの面積を求めます。',
    add: [...tkBase(), ln(240, 25, 240, 61, C.red), lb(250, 43, '4cm', 10, C.red, 'start', true), ln(187, 152, 214, 152, C.red), lb(200, 163, '3cm', 10, C.red, 'middle', true), lb(160, 12, '12cm', 10, C.gray, 'middle', true), ...band(170, lb(160, 205, '△APQ の面積は？', 14, C.ink, 'middle', true))],
  },
  {
    note: '❓なぜ△APQの面積を、そのまま出せないの？→3つの辺がどれもななめで、「底辺」と「高さ」が図から読み取れないからです。❓では、どうする？→まわりの、直角のある三角形の面積なら出せます。',
    add: [tkPoly([TK.A, TK.P, TK.Q], C.red, FILL.yellow), lb(165, 78, '△APQ', 10, C.ink, 'middle', true), ...band(170, lb(160, 195, '3辺ともななめ → 高さが分からない', 12, C.red, 'middle', true))],
  },
  {
    note: '❓どう考える？→正方形全体は「△APQ」と「まわりの3つの三角形①②③」をすき間なく合わせたものです。だから△APQ＝正方形−①−②−③。',
    add: [...tkTri([1, 2, 3]), ...tkNums(), ...band(170, lb(160, 200, '△APQ ＝ 正方形 − ① − ② − ③', 13, C.ink, 'middle', true))],
  },
  {
    note: '❓まず正方形は？→12×12＝144cm²。❓次に①△ABPは？→直角をはさむ辺がAB＝12cmとBP＝4cm。❓なぜ÷2？→直角三角形は、たて・よこが同じ長方形のちょうど半分だからです。12×4÷2＝24cm²。',
    add: [ln(106, 61, 214, 61, C.blue, true), ...band(170, bx(20, 172, 280, 28, '正方形 12×12 ＝ 144cm²', C.gray, FILL.gray, 12), bx(20, 206, 280, 28, '① 12×4÷2 ＝ 24cm²', C.blue, FILL.blue, 13))],
  },
  {
    note: '❓②△CPQは？→CP は辺BC全体12cmからBP4cmを引いて 12−4＝8cm。CQは3cm。直角をはさむ辺が8cmと3cmなので、8×3÷2＝12cm²。',
    add: [...band(170, bx(20, 172, 280, 28, 'CP ＝ 12 − 4 ＝ 8cm、CQ ＝ 3cm', C.gray, FILL.gray, 12), bx(20, 206, 280, 28, '② 8×3÷2 ＝ 12cm²', C.green, FILL.green, 13))],
  },
  {
    note: '❓③△AQDは？→DQ は辺CD全体12cmからCQ3cmを引いて 12−3＝9cm。ADは12cm。直角をはさむ辺が9cmと12cmなので、12×9÷2＝54cm²。',
    add: [...band(170, bx(20, 172, 280, 28, 'DQ ＝ 12 − 3 ＝ 9cm、AD ＝ 12cm', C.gray, FILL.gray, 12), bx(20, 206, 280, 28, '③ 12×9÷2 ＝ 54cm²', C.purple, FILL.purple, 13))],
  },
  {
    note: '❓では、△APQは？→正方形から3つを引きます。144−24−12−54＝54cm²。❓引き忘れに注意→まわりの三角形は①②③の3つです。',
    add: [tkPoly([TK.A, TK.P, TK.Q], C.red, FILL.yellow), lb(165, 78, '△APQ', 10, C.ink, 'middle', true), ...band(170, bx(20, 176, 280, 30, '144 − 24 − 12 − 54 ＝ 54cm²', C.red, FILL.red, 14), lb(160, 226, '答え 54cm²', 14, C.ink, 'middle', true))],
  },
  {
    note: '❓確かめは？→①②③を全部たすと 24＋12＋54＝90cm²。これに△APQの54cm²をたすと 90＋54＝144cm²で、正方形の面積にもどります。',
    add: [...band(170, lb(160, 190, '24 ＋ 12 ＋ 54 ＝ 90', 13, C.ink, 'middle', true), lb(160, 212, '90 ＋ 54 ＝ 144（正方形）✓', 13, C.green, 'middle', true))],
  },
], '正方形から3つの三角形を引く');
//REG takatsuki_v2_s001 takatsukiS001

// ── 高槻 半円と正方形 ──
const tkSq = () => pg([[100, 20], [220, 20], [220, 140], [100, 140]], C.red, FILL.red);
const takatsukiS003 = show([
  {
    note: '半径6cmの半円と、その直径を1辺とする正方形をくみ合わせた図形です。正方形の中で、半円の外側（赤いところ）の面積を求めます。',
    add: [tkSq(), sc(160, 140, 60, 0, 180, C.blue, FILL.blue), ln(160, 140, 160, 80, C.gray, true), lb(166, 112, '6cm', 10, C.ink, 'start', true), ...band(150, lb(160, 185, '赤いところの面積は？', 14, C.ink, 'middle', true))],
  },
  {
    note: '❓なぜ正方形の1辺は12cmなの？→正方形の1辺は半円の直径と同じで、直径は半径の2倍だからです。6×2＝12cm。',
    add: [ln(100, 150, 160, 150, C.blue, false, 2), ln(160, 150, 220, 150, C.green, false, 2), lb(130, 162, '半径6', 10, C.blue, 'middle', true), lb(190, 162, '半径6', 10, C.green, 'middle', true), ...band(170, lb(160, 192, '直径 ＝ 6×2 ＝ 12cm ＝ 正方形の1辺', 13, C.ink, 'middle', true))],
  },
  {
    note: '❓赤い部分は形が複雑。どうやって求める？→正方形全体から、いらない半円を引けば、赤い部分だけが残ります。',
    add: [lb(160, 60, '全体（正方形）', 12, C.red, 'middle', true), lb(160, 105, '引く（半円）', 11, C.blue, 'middle', true), ...band(150, lb(160, 185, '正方形 − 半円 ＝ 赤い部分', 14, C.ink, 'middle', true))],
  },
  {
    note: '❓まず正方形の面積は？→1辺12cmなので 12×12＝144cm²。',
    add: [...fresh(), tkSq(), lb(160, 82, '12cm', 12, C.ink, 'middle', true), ...band(150, bx(60, 170, 200, 34, '12×12 ＝ 144cm²', C.red, FILL.red, 15))],
  },
  {
    note: '❓半円の面積は？→まず円全体から考えます。❓なぜ「半径×半径×3.14」？→半径を1辺とする正方形の3.14こぶんが円だからです。6×6×3.14＝113.04cm²。',
    add: [...fresh(), ci(110, 75, 50, undefined, C.blue, FILL.blue), pg([[110, 75], [160, 75], [160, 25], [110, 25]], C.red, FILL.red), lb(135, 50, '半径×半径', 9, C.red, 'middle', true), lb(250, 62, '円全体', 12, C.blue, 'middle', true), ...band(150, bx(40, 170, 240, 34, '6×6×3.14 ＝ 113.04cm²（円）', C.blue, FILL.blue, 13))],
  },
  {
    note: '❓半円の面積は？→半円は円のちょうど半分なので、÷2します。113.04÷2＝56.52cm²。',
    add: [...fresh(), sc(110, 75, 50, 0, 180, C.blue, FILL.blue), ln(60, 75, 160, 75, C.ink), ci(110, 75, 50, undefined, C.gray, 'rgba(0,0,0,0)'), lb(110, 50, '半円', 12, C.blue, 'middle', true), lb(110, 100, '（残り半分）', 10, C.gray), ...band(150, bx(40, 170, 240, 34, '113.04 ÷ 2 ＝ 56.52cm²（半円）', C.blue, FILL.blue, 13))],
  },
  {
    note: '❓最後に？→赤い部分＝正方形−半円。144−56.52＝87.48cm²。',
    add: [...fresh(), tkSq(), sc(160, 140, 60, 0, 180, C.blue, FILL.blue), ...band(150, bx(30, 166, 260, 34, '144 − 56.52 ＝ 87.48cm²', C.red, FILL.red, 15), lb(160, 224, '答え 87.48cm²', 13, C.ink, 'middle', true))],
  },
  {
    note: '❓確かめは？→半円は正方形の約4割（56.52÷144≒0.39）なので、赤い部分は約6割のはず。87.48÷144≒0.61で合います。また 87.48＋56.52＝144 です。',
    add: [...band(150, lb(160, 175, '半円 ÷ 正方形 ≒ 0.39（約4割）', 12, C.blue, 'middle', true), lb(160, 197, '赤 ÷ 正方形 ≒ 0.61（約6割）✓', 12, C.red, 'middle', true), lb(160, 220, '87.48 ＋ 56.52 ＝ 144 ✓', 12, C.ink)),],
  },
], '正方形から半円を引く');
//REG takatsuki_v2_s003 takatsukiS003

// ── 高槻 正三角形を並べる ──
const triGrid = (n: number, left: number, bottom: number, s: number, col: string, fill: string): DiagramElement[] => {
  const h = s * 0.866;
  const out: DiagramElement[] = [pg([[left, bottom], [left + n * s, bottom], [left + (n * s) / 2, bottom - n * h]], col, fill)];
  for (let k = 1; k < n; k++) {
    out.push(ln(left + (k * s) / 2, bottom - k * h, left + n * s - (k * s) / 2, bottom - k * h, col));
    out.push(ln(left + k * s, bottom, left + k * s + ((n - k) * s) / 2, bottom - (n - k) * h, col));
    out.push(ln(left + k * s, bottom, left + (k * s) / 2, bottom - k * h, col));
  }
  return out;
};
const triThree = () => [...triGrid(1, 20, 115, 28, C.main, FILL.warm), ...triGrid(2, 70, 115, 28, C.main, FILL.warm), ...triGrid(3, 150, 115, 28, C.main, FILL.warm)];
const triLabels = () => [lb(34, 126, '1段目\n1個', 9, C.ink), lb(98, 126, '2段目\n4個', 9, C.ink), lb(192, 126, '3段目\n9個', 9, C.ink)];
const takatsukiS006 = show([
  {
    note: '1辺2cmの小さい正三角形をすき間なく並べて、大きな正三角形を作ります。1段目は1個、2段目は4個、3段目は9個。6段目の大きな正三角形の1辺は何cmでしょう。',
    add: [...triThree(), ...triLabels(), lb(260, 60, '小さい三角形\n1辺 2cm', 10, C.gray), ...band(150, lb(160, 190, '6段目の大きな三角形の1辺は？', 14, C.ink, 'middle', true))],
  },
  {
    note: '❓大きな三角形の1辺の長さは、何で決まる？→いちばん下のならびに、小さい三角形が何個、横にならんでいるかで決まります。3段目の下のならび（赤）を見てみましょう。',
    add: [ln(150, 115, 234, 115, C.red, false, 3.5), lb(192, 152, '下のならびは 3個', 11, C.red, 'middle', true), ...band(160, lb(160, 195, '1辺の長さ ＝ 下にならぶ個数で決まる', 12, C.red, 'middle', true))],
  },
  {
    note: '❓下にならぶ個数は、段数とどんな関係？→1段目は1個、2段目は2個、3段目は3個。下のならびの個数は、段数とまったく同じです。',
    add: [ln(70, 115, 126, 115, C.red, false, 3.5), ln(20, 115, 48, 115, C.red, false, 3.5), ...band(140, lb(160, 165, '下のならび：1段目1個・2段目2個・3段目3個', 12, C.red, 'middle', true), lb(160, 195, '→ □段目なら □個', 13, C.red, 'middle', true))],
  },
  {
    note: '❓では、1辺の長さは？→小さい三角形の1辺2cmが、下のならびの個数ぶんつながります。1段目は2cm、2段目は2×2＝4cm、3段目は2×3＝6cm。',
    add: [lb(34, 152, '2cm', 10, C.blue, 'middle', true), lb(98, 152, '4cm', 10, C.blue, 'middle', true), lb(192, 152, '6cm', 11, C.blue, 'middle', true), ...band(160, lb(160, 195, '1辺 ＝ 2cm × □（段数）', 13, C.blue, 'middle', true))],
  },
  {
    note: '❓なぜ「1、4、9」で計算しないの？→1、4、9は中に入っている小さい三角形の「個数」で、段数を2回かけた数です。1辺の長さは「横にならぶ個数」なので、段数を1回使えば出ます。',
    add: [...fresh(), bx(20, 20, 130, 60, '小さい三角形の\n全部の個数\n1・4・9（段数×段数）', C.gray, FILL.gray, 11), bx(170, 20, 130, 60, '1辺の長さ\n2・4・6\n（2×段数）', C.blue, FILL.blue, 11), ...band(110, lb(160, 140, '全部の個数と、1辺の長さは別のもの', 13, C.ink, 'middle', true), lb(160, 170, '辺を知りたいときは、下にならぶ個数', 12, C.blue))],
  },
  {
    note: '❓段数が増えると、1辺はどう変わる？→1段ふえるごとに2cmずつ長くなります。1段目から順に 2・4・6・8・10・12cm。',
    add: [...fresh(), ...[1, 2, 3, 4, 5, 6].map((k) => bx(10 + (k - 1) * 50, 40, 46, 30, `${k}段目`, C.gray, FILL.gray, 10)), ...[2, 4, 6, 8, 10, 12].map((v, i) => bx(10 + i * 50, 80, 46, 30, `${v}cm`, i === 5 ? C.red : C.blue, i === 5 ? FILL.red : FILL.blue, 12)), ...band(130, lb(160, 165, '1段ふえるごとに 2cm ふえる', 13, C.ink, 'middle', true))],
  },
  {
    note: '❓6段目は？→下に小さい三角形が6個ならぶので、2×6＝12cm です。',
    add: [...fresh(), ...triGrid(6, 100, 120, 20, C.main, FILL.warm), ln(100, 120, 220, 120, C.red, false, 3.5), lb(160, 138, '下に6個', 11, C.red, 'middle', true), ...band(150, bx(60, 168, 200, 34, '2 × 6 ＝ 12cm', C.red, FILL.red, 16))],
  },
  {
    note: '❓確かめは？→6段目には小さい三角形が 6×6＝36個あり、そのうち下のならびは6個。6個×2cm＝12cmで一致します。答えは12cmです。',
    add: band(150, lb(160, 175, '全部で 6×6 ＝ 36個（下のならびは6個）', 12, C.ink, 'middle', true), lb(160, 200, '6個 × 2cm ＝ 12cm ✓', 14, C.green, 'middle', true)),
  },
], '大きな正三角形の1辺の長さ');
//REG takatsuki_v2_s006 takatsukiS006

// ── 開明 中点を結んだ正方形 ──
const KM = { o: [[105, 20], [215, 20], [215, 130], [105, 130]] as [number, number][], e: [[160, 20], [215, 75], [160, 130], [105, 75]] as [number, number][], i: [[132.5, 47.5], [187.5, 47.5], [187.5, 102.5], [132.5, 102.5]] as [number, number][] };
const kmBase = () => [pg(KM.o, C.main, FILL.warm), lb(97, 18, 'A', 10, C.ink, 'end', true), lb(223, 18, 'B', 10, C.ink, 'start', true), lb(223, 138, 'C', 10, C.ink, 'start', true), lb(97, 138, 'D', 10, C.ink, 'end', true)];
const kmE = () => [pg(KM.e, C.blue, FILL.blue), lb(160, 13, 'E', 10, C.ink, 'middle', true), lb(222, 78, 'F', 10, C.ink, 'start', true), lb(160, 141, 'G', 10, C.ink, 'middle', true), lb(98, 78, 'H', 10, C.ink, 'end', true)];
const kmI = () => [pg(KM.i, C.green, FILL.green), lb(129, 44, 'L', 9, C.ink, 'end', true), lb(191, 44, 'I', 9, C.ink, 'start', true), lb(191, 108, 'J', 9, C.ink, 'start', true), lb(129, 108, 'K', 9, C.ink, 'end', true)];
const kaimeiS006 = show([
  {
    note: '1辺10cmの正方形ABCDの各辺の中点を結んで正方形EFGHを作り、さらにEFGHの各辺の中点を結んで正方形IJKLを作ります。IJKLの面積を求めます。',
    add: [...kmBase(), ...kmE(), ...kmI(), ...band(150, lb(160, 185, '正方形IJKLの面積は？', 14, C.ink, 'middle', true))],
  },
  {
    note: '❓まず、なぜ中点を結ぶと面積が変わる？→もとの正方形から、四すみの三角形（灰色）を切り落としたものがEFGHだからです。この4つの三角形は、直角をはさむ辺がどれも5cmと5cmで、同じ大きさです。',
    add: [...fresh(), ...kmBase(), pg([[105, 20], [160, 20], [105, 75]], C.gray, FILL.gray), pg([[160, 20], [215, 20], [215, 75]], C.gray, FILL.gray), pg([[215, 75], [215, 130], [160, 130]], C.gray, FILL.gray), pg([[105, 75], [160, 130], [105, 130]], C.gray, FILL.gray), pg(KM.e, C.blue, FILL.blue), lb(160, 98, 'EFGH', 11, C.blue, 'middle', true), lb(116, 34, '5cm', 9, C.gray, 'middle'), lb(200, 34, '5cm', 9, C.gray, 'middle'), ...band(150, lb(160, 185, '四すみの三角形は4つとも同じ大きさ', 12, C.gray, 'middle', true))],
  },
  {
    note: '❓では、なぜちょうど半分になる？→正方形ABCDを縦横の中心線で4つの小さな正方形（1辺5cm）に分けます。どの小さな正方形も、EFGHの辺（対角線）で、外側の三角形と内側の三角形に、ぴったり半分ずつ分かれます。',
    add: [ln(160, 20, 160, 130, C.purple, true), ln(105, 75, 215, 75, C.purple, true), lb(122, 42, '外', 10, C.gray, 'middle'), lb(146, 60, '内', 10, C.blue, 'middle'), ...band(150, lb(160, 175, '小さな正方形1つ ＝ 外の三角形 ＋ 内の三角形', 11, C.purple, 'middle', true), lb(160, 200, '外と内は同じ大きさ → 内側はちょうど半分', 12, C.purple, 'middle', true))],
  },
  {
    note: '❓正方形EFGHの面積は？→もとのABCDは10×10＝100cm²。その半分なので 100÷2＝50cm² です。',
    add: [...fresh(), ...kmBase(), ...kmE(), ...band(150, bx(40, 168, 240, 34, '100 ÷ 2 ＝ 50cm²（EFGH）', C.blue, FILL.blue, 15))],
  },
  {
    note: '❓次のIJKLはどう考える？→EFGHの各辺の中点を結んでいるので、さっきとまったく同じ操作です。だからIJKLの面積も、EFGHの半分になります。',
    add: [...kmI(), ...band(150, lb(160, 175, 'EFGH → IJKL も「中点を結ぶ」同じ操作', 12, C.green, 'middle', true), lb(160, 200, '面積は またちょうど半分', 13, C.green, 'middle', true))],
  },
  {
    note: '❓IJKLの面積は？→EFGHの50cm²の半分で 50÷2＝25cm² です。',
    add: band(150, bx(40, 168, 240, 34, '50 ÷ 2 ＝ 25cm²（IJKL）', C.green, FILL.green, 15), lb(160, 224, '答え 25cm²', 13, C.ink, 'middle', true)),
  },
  {
    note: '❓別の方法で確かめると？→IJKLの辺はABCDの辺と平行で、1辺はちょうど5cmです（ABCDの半分の長さ）。5×5＝25cm²で同じになります。',
    add: [ln(132.5, 47.5, 187.5, 47.5, C.red, false, 2.5), lb(160, 60, '5cm', 10, C.red, 'middle', true), ...band(150, lb(160, 185, '1辺5cm → 5×5 ＝ 25cm² ✓', 14, C.red, 'middle', true)), lb(160, 215, '100 → 50 → 25（そのつど半分）', 12, C.gray)],
  },
], '中点を結ぶと面積は半分');
//REG kaimei_v2_s006 kaimeiS006

// ── 開明 円に内接する長方形 ──
const KR = { c: [160, 78] as [number, number], r: 66, hx: 59, hy: 29.5 };
const krRect = () => pg([[KR.c[0] - KR.hx, KR.c[1] - KR.hy], [KR.c[0] + KR.hx, KR.c[1] - KR.hy], [KR.c[0] + KR.hx, KR.c[1] + KR.hy], [KR.c[0] - KR.hx, KR.c[1] + KR.hy]], C.green, FILL.green);
const kaimeiS008 = show([
  {
    note: '半径6cmの円の中に、長方形が入っています（4つの頂点が円周の上）。たて：よこ＝1：2のとき、長方形の面積を求めます。',
    add: [ci(KR.c[0], KR.c[1], KR.r, undefined, C.blue, FILL.blue), krRect(), lb(160, 36, 'よこ ＝ □×2', 10, C.ink, 'middle', true), lb(92, 82, 'たて\n□', 10, C.ink, 'end', true), ...band(150, lb(160, 185, '長方形の面積は？', 14, C.ink, 'middle', true))],
  },
  {
    note: '❓なぜ、長方形の対角線は円の直径になる？→長方形の2本の対角線は、まん中で交わり、その点から4つの頂点までの長さが同じです。4つの頂点が円周上なので、その点が円の中心になります。',
    add: [ln(KR.c[0] - KR.hx, KR.c[1] - KR.hy, KR.c[0] + KR.hx, KR.c[1] + KR.hy, C.red, false, 2), ln(KR.c[0] + KR.hx, KR.c[1] - KR.hy, KR.c[0] - KR.hx, KR.c[1] + KR.hy, C.red, false, 2), ci(160, 78, 3, undefined, C.red, C.red), lb(208, 64, '半径6', 10, C.red, 'middle', true), ...band(150, lb(160, 185, '対角線は円の中心を通る', 13, C.red, 'middle', true), lb(160, 210, '対角線 ＝ 半径6cm×2 ＝ 12cm', 12, C.red))],
  },
  {
    note: '❓対角線が12cmだと何が分かる？→長方形を対角線で切ると直角三角形ができます。直角をはさむ2辺は「たて□」と「よこ□×2」、いちばん長い辺（対角線）は12cmです。',
    add: [...fresh(), pg([[60, 120], [220, 120], [220, 40]], C.green, FILL.green), ln(210, 120, 210, 110, C.ink), ln(210, 110, 220, 110, C.ink), lb(140, 134, 'よこ □×2', 11, C.ink, 'middle', true), lb(232, 82, 'たて\n□', 11, C.ink, 'start', true), lb(125, 70, '12cm', 12, C.red, 'end', true), ...band(150, lb(160, 185, '直角をはさむ2辺：□ と □×2', 12, C.green, 'middle', true), lb(160, 210, '斜め（対角線）12cm', 12, C.red))],
  },
  {
    note: '❓このとき何が成り立つ？→直角三角形では、直角をはさむ2辺それぞれを1辺とする正方形の面積をたすと、いちばん長い辺を1辺とする正方形の面積になります（三平方の定理）。□×□＋（□×2）×（□×2）＝12×12。',
    add: [...fresh(), ...[['□×□', 20, 90, 30, C.green, FILL.green], ['(□×2)\n×(□×2)', 75, 90, 60, C.green, FILL.green], ['12×12', 185, 90, 67, C.red, FILL.red]].map((a) => bx(a[1] as number, 120 - (a[3] as number), a[3] as number, a[3] as number, a[0] as string, a[4] as string, a[5] as string, 9)), lb(62, 70, '＋', 16, C.ink, 'middle', true), lb(160, 70, '＝', 16, C.ink, 'middle', true), ...band(150, lb(160, 185, '2つの正方形の面積の和 ＝ 大きい正方形', 12, C.ink, 'middle', true), lb(160, 210, '（直角三角形の決まり）', 10, C.gray))],
  },
  {
    note: '❓□×□だけ求めるには？→（□×2）×（□×2）は、□が2倍になった正方形なので 2×2＝4こぶんの□×□です。だから □×□＋□×□×4＝□×□×5＝144。❓□×□は？→144÷5＝28.8。',
    add: [...band(150, bx(20, 160, 280, 28, '□×□ ＋ □×□×4 ＝ □×□×5 ＝ 144', C.green, FILL.green, 12), bx(20, 196, 280, 28, '□×□ ＝ 144 ÷ 5 ＝ 28.8', C.green, FILL.green, 13))],
  },
  {
    note: '❓面積はどう出す？→長方形の面積はたて×よこ＝□×（□×2）。これは「□×□の正方形が2こ」と同じです。図のように、長方形は正方形2こに分けられます。',
    add: [...fresh(), pg([[100, 30], [160, 30], [160, 90], [100, 90]], C.green, FILL.green), pg([[160, 30], [220, 30], [220, 90], [160, 90]], C.green, FILL.green), lb(130, 60, '□×□', 12, C.ink, 'middle', true), lb(190, 60, '□×□', 12, C.ink, 'middle', true), lb(160, 105, '長方形 ＝ □×□ が 2こ', 12, C.ink, 'middle', true), ...band(125, bx(40, 150, 240, 34, '28.8 × 2 ＝ 57.6cm²', C.green, FILL.green, 15), lb(160, 210, '□そのものの長さは求めなくてよい', 11, C.gray))],
  },
  {
    note: '答えは 57.6cm² です。❓確かめは？→□×□＝28.8を5こ集めると 28.8×5＝144で、対角線12cmの正方形12×12にもどります。',
    add: [...fresh(), ci(KR.c[0], KR.c[1], KR.r, undefined, C.blue, FILL.blue), krRect(), lb(160, 78, '57.6cm²', 13, C.ink, 'middle', true), ...band(150, lb(160, 180, '28.8×5 ＝ 144 ＝ 12×12 ✓', 13, C.green, 'middle', true), lb(160, 210, '答え 57.6cm²', 14, C.ink, 'middle', true))],
  },
], '円に入る長方形の面積');
//REG kaimei_v2_s008 kaimeiS008

// ── 大阪桐蔭 平行線と面積比 ──
const TB = { A: [160, 15] as [number, number], B: [60, 130] as [number, number], C: [260, 130] as [number, number], D: [120, 61] as [number, number], E: [200, 61] as [number, number] };
const tbBase = () => [pg([TB.A, TB.B, TB.C], C.main, FILL.warm), lb(160, 10, 'A', 10, C.ink, 'middle', true), lb(52, 135, 'B', 10, C.ink, 'end', true), lb(268, 135, 'C', 10, C.ink, 'start', true), lb(112, 60, 'D', 10, C.ink, 'end', true), lb(208, 60, 'E', 10, C.ink, 'start', true), ln(TB.D[0], TB.D[1], TB.E[0], TB.E[1], C.blue, false, 2)];
const tbSmall = () => pg([TB.A, TB.D, TB.E], C.blue, FILL.blue);
const grid5 = () => {
  const r: DiagramElement[] = [];
  for (let i = 0; i < 5; i++) for (let j = 0; j < 5; j++) r.push(pg([[120 + i * 16, 20 + j * 16], [136 + i * 16, 20 + j * 16], [136 + i * 16, 36 + j * 16], [120 + i * 16, 36 + j * 16]], i < 2 && j < 2 ? C.blue : C.gray, i < 2 && j < 2 ? FILL.blue : FILL.gray));
  return r;
};
const toinTop1 = show([
  {
    note: '三角形ABCの辺AB上に点D、辺AC上に点Eがあり、DEはBCに平行です。AD：DB＝2：3のとき、△ADEの面積は△ABCの何倍でしょう。',
    add: [...tbBase(), lb(126, 36, '2', 11, C.red, 'end', true), lb(98, 100, '3', 11, C.red, 'end', true), ...band(150, lb(160, 185, '△ADE は △ABC の何倍？', 14, C.ink, 'middle', true))],
  },
  {
    note: '❓なぜ△ADEと△ABCは「形が同じ」といえる？→DEとBCが平行なので、角Dと角B、角Eと角Cがそれぞれ等しくなり（同位角）、角Aは共通だからです。大きさだけがちがう、同じ形（相似）になります。',
    add: [tbSmall(), lb(160, 52, '△ADE', 10, C.blue, 'middle', true), lb(160, 105, '△ABC', 11, C.main, 'middle', true), ...band(150, lb(160, 180, '3つの角が等しい → 同じ形（相似）', 12, C.blue, 'middle', true), lb(160, 205, '長さの比 ＝ 相似比', 12, C.gray))],
  },
  {
    note: '❓相似比はどう出す？→△ADEの辺ADと、△ABCの辺ABをくらべます。ABはAD（2）とDB（3）をあわせた長さなので 2＋3＝5。よって AD：AB＝2：5。',
    add: [...band(150, bx(20, 165, 280, 28, 'AB ＝ AD ＋ DB ＝ 2 ＋ 3 ＝ 5', C.gray, FILL.gray, 12), bx(20, 199, 280, 28, '相似比 AD：AB ＝ 2：5', C.blue, FILL.blue, 14))],
  },
  {
    note: '❓長さが2/5倍だと、面積は何倍？→正方形で考えます。1辺が2と5の正方形を、1ますの大きさがそろった方眼で見ると、小さい方は 2×2＝4ます、大きい方は 5×5＝25ます。たて・横どちらも2/5倍になるので、面積は2/5を2回かけた数になります。',
    add: [...fresh(), ...grid5(), lb(100, 50, '2×2\n＝4', 10, C.blue, 'end', true), lb(225, 70, '5×5＝25', 11, C.gray, 'start', true), ...band(115, lb(160, 140, '1辺 2 ： 5 のとき', 12, C.ink), lb(160, 165, '面積 2×2 ： 5×5 ＝ 4 ： 25', 14, C.blue, 'middle', true), lb(160, 195, '面積比 ＝ 相似比 × 相似比', 12, C.ink))],
  },
  {
    note: '❓三角形でも同じ？→同じです。相似な三角形は、たてにも横にも2/5倍になるので、面積は（2/5）×（2/5）＝4/25倍です。△ADE：△ABC＝4：25。',
    add: [...fresh(), ...tbBase(), tbSmall(), lb(160, 52, '4', 12, C.blue, 'middle', true), lb(160, 105, '25', 12, C.main, 'middle', true), ...band(150, bx(40, 168, 240, 34, '(2/5)×(2/5) ＝ 4/25倍', C.blue, FILL.blue, 15), lb(160, 224, '答え 4/25倍', 13, C.ink, 'middle', true))],
  },
  {
    note: '❓よくあるまちがいは？→長さの比2/5をそのまま面積の比にしてしまうこと。2/5は長さの比で、面積は「2回かける」ので4/25です。',
    add: [...band(150, bx(20, 165, 130, 34, '長さの比\n2/5', C.gray, FILL.gray, 12), bx(170, 165, 130, 34, '面積の比\n4/25', C.blue, FILL.blue, 12), lb(160, 220, '面積は「2回かける」', 12, C.red, 'middle', true))],
  },
  {
    note: '❓確かめは？→△ABCを25とすると△ADEは4。残りの台形DBCEは 25−4＝21。4＋21＝25で全体にもどります。',
    add: [lb(160, 120, '台形DBCE 21', 11, C.main, 'middle', true), ...band(150, lb(160, 182, '△ADE 4 ＋ 台形DBCE 21 ＝ △ABC 25 ✓', 12, C.ink, 'middle', true), lb(160, 210, '4 ÷ 25 ＝ 4/25倍', 13, C.blue, 'middle', true))],
  },
], '相似な三角形の面積比');
//REG toin_top1_sansu_001 toinTop1

const bar = (x: number, y: number, w: number, h: number, col: string, fill: string): DiagramElement => pg([[x, y], [x + w, y], [x + w, y + h], [x, y + h]], col, fill);

// ── 清風 流水算 ──
const river = () => [bar(20, 60, 280, 40, C.blue, FILL.blue), lb(160, 84, '← 流れ 毎時3km', 11, C.blue, 'middle', true), lb(14, 56, 'A', 11, C.ink, 'middle', true), lb(306, 56, 'B', 11, C.ink, 'middle', true)];
const seifuS008 = show([
  {
    note: '流れの速さが毎時3kmの川で、船がA地からB地（上流）へ行くのに2時間、B地からA地（下流）へもどるのに1時間かかりました。船の静水時の速さ（流れのない水での速さ）を求めます。',
    add: [...river(), ar(40, 42, 280, 42, C.red), lb(160, 33, '上り（A→B）2時間', 11, C.red, 'middle', true), ar(280, 120, 40, 120, C.green), lb(160, 136, '下り（B→A）1時間', 11, C.green, 'middle', true), ...band(150, lb(160, 185, '船の静水時の速さは？', 14, C.ink, 'middle', true))],
  },
  {
    note: '❓なぜ、上りと下りの速さの比は「時間の逆の比」になるの？→道のり＝速さ×時間で、上りも下りも道のりは同じです。長方形の面積（道のり）が同じなら、よこ（時間）が2倍の上りは、たて（速さ）が半分になります。',
    add: [...fresh(), bar(40, 90, 80, 40, C.red, FILL.red), bar(190, 50, 40, 80, C.green, FILL.green), lb(80, 112, '道のり', 11, C.ink, 'middle', true), lb(210, 92, '道のり', 11, C.ink, 'middle', true), lb(80, 145, '上り 時間2', 11, C.red, 'middle', true), lb(210, 145, '下り 時間1', 11, C.green, 'middle', true), lb(34, 112, '速さ', 10, C.gray, 'end'), lb(184, 92, '速さ', 10, C.gray, 'end'), ...band(160, lb(160, 195, '面積（道のり）が同じ', 12, C.ink, 'middle', true))],
  },
  {
    note: '❓では、速さの比は？→上りは速さ①、下りはたてが2倍の②です。上り：下り＝1：2。',
    add: [lb(80, 70, '速さ ①', 13, C.red, 'middle', true), lb(210, 40, '速さ ②', 13, C.green, 'middle', true), ...band(160, bx(50, 168, 220, 30, '上り ： 下り ＝ 1 ： 2', C.blue, FILL.blue, 14))],
  },
  {
    note: '❓では、上りと下りの速さの差は何を表す？→静水時の速さを基準にすると、下りは流れに乗って3はやく、上りは流れに逆らって3おそくなります。2つの差は 3＋3＝6（流れの速さの2倍）です。',
    add: [...fresh(), lb(64, 40, '静水', 11, C.ink, 'end', true), bar(70, 28, 90, 22, C.gray, FILL.gray), lb(115, 40, '□', 11, C.ink, 'middle', true), lb(64, 75, '上り', 11, C.red, 'end', true), bar(70, 63, 60, 22, C.red, FILL.red), bar(130, 63, 30, 22, C.gray, 'rgba(0,0,0,0)'), lb(145, 75, '−3', 10, C.gray, 'middle'), lb(100, 75, '□−3', 11, C.ink, 'middle', true), lb(64, 110, '下り', 11, C.green, 'end', true), bar(70, 98, 90, 22, C.gray, FILL.gray), bar(160, 98, 30, 22, C.green, FILL.green), lb(115, 110, '□', 11, C.ink, 'middle', true), lb(175, 110, '+3', 10, C.green, 'middle', true), ln(130, 130, 190, 130, C.purple, false, 2.5), lb(160, 143, '差 3＋3 ＝ 6', 11, C.purple, 'middle', true), ...band(155, lb(160, 190, '下り ─ 上り ＝ 流れの速さ × 2', 13, C.purple, 'middle', true))],
  },
  {
    note: '❓では、上りと下りの速さはいくつ？→比の差は 2−1＝1 で、これが6km/時にあたります。つまり①＝6km/時。上りは①で毎時6km、下りは②で毎時12kmです。',
    add: [...fresh(), bx(20, 20, 130, 36, '上り ①', C.red, FILL.red, 14), bx(170, 20, 130, 36, '下り ②', C.green, FILL.green, 14), bx(70, 70, 180, 36, '② − ① ＝ ① ＝ 6km/時', C.purple, FILL.purple, 13), ...band(120, bx(20, 140, 130, 34, '上り 毎時6km', C.red, FILL.red, 13), bx(170, 140, 130, 34, '下り 毎時12km', C.green, FILL.green, 13))],
  },
  {
    note: '❓静水時の速さは？→上りは静水時より3おそく、下りは3はやいので、静水時の速さは上りと下りのちょうど真ん中です。（6＋12）÷2＝9。',
    add: [...fresh(), ln(40, 70, 280, 70, C.gray), ci(80, 70, 5, undefined, C.red, C.red), ci(240, 70, 5, undefined, C.green, C.green), ci(160, 70, 6, undefined, C.blue, C.blue), lb(80, 52, '上り 6', 11, C.red, 'middle', true), lb(240, 52, '下り 12', 11, C.green, 'middle', true), lb(160, 52, '静水 ？', 11, C.blue, 'middle', true), lb(120, 92, '←3', 10, C.gray, 'middle'), lb(200, 92, '3→', 10, C.gray, 'middle'), ...band(115, bx(40, 135, 240, 34, '(6 ＋ 12) ÷ 2 ＝ 毎時9km', C.blue, FILL.blue, 14), lb(160, 200, '答え 毎時9km', 14, C.ink, 'middle', true))],
  },
  {
    note: '❓確かめは？→上りの速さは 9−3＝6、下りは 9＋3＝12。道のりは 上り 6×2＝12km、下り 12×1＝12km。同じになるので正しいです。',
    add: [...fresh(), bx(20, 20, 280, 30, '上り 9−3＝6 → 6×2 ＝ 12km', C.red, FILL.red, 13), bx(20, 62, 280, 30, '下り 9＋3＝12 → 12×1 ＝ 12km', C.green, FILL.green, 13), ...band(110, lb(160, 140, '道のりが同じ（12km）✓', 14, C.ink, 'middle', true), lb(160, 175, '静水時の速さは毎時9km', 13, C.blue))],
  },
], '上りと下りの速さ');
//REG seifu_v2_s008 seifuS008

// ── 大阪桐蔭 グラフでの追いかけ ──
const G = { x0: 40, y0: 135, px: 30, py: 110 / 1875 };
const gx = (t: number) => G.x0 + t * G.px;
const gy = (d: number) => G.y0 - d * G.py;
const gBase = () => [ln(G.x0, G.y0, 290, G.y0, C.gray), ln(G.x0, G.y0, G.x0, 20, C.gray), lb(292, 138, '時間', 9, C.gray, 'start'), lb(G.x0, 14, '道のり', 9, C.gray, 'middle'), lb(gx(5), 146, '5', 9, C.gray, 'middle'), lb(gx(7.5), 146, '7.5', 9, C.gray, 'middle')];
const gA = () => [ln(gx(0), gy(0), gx(7.5), gy(1875), C.blue, false, 2.5), lb(gx(7.5) - 6, gy(1875) - 6, 'A', 12, C.blue, 'end', true)];
const gB1 = (c: string) => ln(gx(0), gy(0), gx(5), gy(750), c, false, 2.5);
const gB2 = (c: string) => ln(gx(5), gy(750), gx(7.5), gy(1750), c, false, 2.5);
const toinS001 = show([
  {
    note: '走者AとBが同じ1875mのコースを走りました。Aは毎分250mで一定、Bは最初の5分は毎分150m、そのあとは毎分400mです。Aがゴールした瞬間、BはAより何m後ろにいるでしょう。',
    add: [...gBase(), ...gA(), gB1(C.red), gB2(C.red), lb(gx(2.5) + 4, gy(375) + 14, 'B 毎分150m', 9, C.red, 'start', true), lb(gx(6.3) + 12, gy(1250) + 16, 'B 毎分400m', 9, C.red, 'start', true), ...band(155, lb(160, 195, 'Aのゴールの瞬間、Bは何m後ろ？', 13, C.ink, 'middle', true))],
  },
  {
    note: '❓なぜ、まず「Aがゴールする時刻」を求めるの？→「Aがゴールした瞬間」に2人をくらべるので、その時刻が決まらないとBの位置が分からないからです。❓時刻は？→速さは1分に進む道のりなので、1875÷250＝7.5分。',
    add: [ln(gx(7.5), gy(0), gx(7.5), gy(1875), C.gray, true), ...band(155, bx(40, 168, 240, 32, '1875 ÷ 250 ＝ 7.5分', C.blue, FILL.blue, 14))],
  },
  {
    note: '❓Bの道のりは、なぜ1つの式で出せないの？→途中で速さが変わるからです。そこで「速さが同じ区間」に分けます。最初の5分間は毎分150mで、150×5＝750m進みます（1分に150mを5回）。',
    add: [gB1(C.purple), ci(gx(5), gy(750), 3, undefined, C.purple, C.purple), ...band(155, bx(40, 168, 240, 32, '0〜5分：150×5 ＝ 750m', C.purple, FILL.purple, 14))],
  },
  {
    note: '❓次の区間は？→Bが毎分400mに変わるのは5分から。Aのゴールは7.5分なので、その間は 7.5−5＝2.5分。400×2.5＝1000m進みます。',
    add: [gB2(C.green), ...band(155, bx(20, 165, 280, 28, '5〜7.5分：7.5−5＝2.5分', C.gray, FILL.gray, 12), bx(20, 199, 280, 28, '400×2.5 ＝ 1000m', C.green, FILL.green, 14))],
  },
  {
    note: '❓Bは7.5分までに、合計でどれだけ進んだ？→区間ごとの道のりをたします。750＋1000＝1750m。',
    add: [ci(gx(7.5), gy(1750), 3, undefined, C.red, C.red), ...band(155, bx(40, 168, 240, 32, '750 ＋ 1000 ＝ 1750m', C.red, FILL.red, 14))],
  },
  {
    note: '❓では、何m後ろ？→Aはゴール（1875m）、Bは1750m。差は 1875−1750＝125m。グラフでは、7.5分のところのA（上）とB（下）の高さのちがいです。',
    add: [ln(gx(7.5) + 8, gy(1875), gx(7.5) + 8, gy(1750), C.red, false, 2.5), lb(gx(7.5) + 14, gy(1812) + 2, '125m', 10, C.red, 'start', true), ...band(155, bx(40, 168, 240, 32, '1875 − 1750 ＝ 125m', C.red, FILL.red, 14), lb(160, 220, '答え 125m後ろ', 13, C.ink, 'middle', true))],
  },
  {
    note: '❓よくあるまちがいは？→Bを最初から毎分400mと考えて 400×7.5＝3000m にすること。3000mはコースの長さ1875mをこえてしまうので、ありえません。最初の5分は毎分150mです。',
    add: [...fresh(), bx(20, 30, 280, 34, 'まちがい：400×7.5 ＝ 3000m', C.gray, FILL.gray, 13), bx(20, 76, 280, 34, '3000m ＞ 1875m（コースより長い）', C.red, FILL.red, 13), ...band(125, lb(160, 160, '最初の5分は毎分150m', 13, C.green, 'middle', true), lb(160, 190, '区間ごとに分けて計算する', 13, C.ink))],
  },
  {
    note: '❓別の方法で確かめると？→Bがゴールするのは 5分＋（1875−750）÷400＝5＋2.8125＝7.8125分。Aより0.3125分おそいので、その間にBが進む 400×0.3125＝125m が差に一致します。',
    add: [...fresh(), bx(20, 25, 280, 30, 'Bのゴール 5＋1125÷400 ＝ 7.8125分', C.gray, FILL.gray, 12), bx(20, 65, 280, 30, 'Aとの差 7.8125−7.5 ＝ 0.3125分', C.gray, FILL.gray, 12), bx(20, 105, 280, 30, '400×0.3125 ＝ 125m ✓', C.green, FILL.green, 14), ...band(150, lb(160, 190, '答え 125m後ろ', 14, C.ink, 'middle', true))],
  },
], '2人の走りをグラフで比べる');
//REG toin_v2_s001 toinS001

// ── 大阪桐蔭 列車のすれ違い ──
const trainA = (x: number) => [bx(x, 40, 72, 26, 'A 120m', C.blue, FILL.blue, 11)];
const trainB = (x: number) => [bx(x, 76, 108, 26, 'B 180m', C.green, FILL.green, 11)];
const toinS002 = show([
  {
    note: '長さ120m・秒速25mの列車Aと、長さ180m・秒速15mの列車Bが、となり合う線路を向かい合って走り、すれちがいます。すれちがい始めてから終わるまでの時間を求めます。',
    add: [...trainA(20), ar(96, 53, 130, 53, C.blue), ...trainB(200), ar(196, 89, 160, 89, C.green), lb(60, 34, '秒速25m', 10, C.blue, 'middle', true), lb(254, 114, '秒速15m', 10, C.green, 'middle', true), ln(0, 70, 320, 70, C.gray, true), ...band(150, lb(160, 185, 'すれちがう時間は？', 14, C.ink, 'middle', true))],
  },
  {
    note: '❓「すれちがい始め」とは、いつ？→2つの列車の先頭（前）どうしが出会った瞬間です。',
    add: [...fresh(), ...trainA(78), ...trainB(150), ln(150, 30, 150, 112, C.red, true, 2), lb(150, 24, '先頭どうしが出会う', 11, C.red, 'middle', true), ...band(130, lb(160, 165, 'すれちがい始め', 14, C.red, 'middle', true))],
  },
  {
    note: '❓では、「すれちがい終わり」とは、いつ？→2つの列車の最後尾（うしろ）どうしがはなれる瞬間です。始めから終わりまでに、Aは前へ、Bも反対へ進みました。',
    add: [...fresh(), ...trainA(190), ...trainB(82), ln(190, 30, 190, 112, C.red, true, 2), lb(190, 24, '最後尾どうしが はなれる', 11, C.red, 'middle', true), ...band(130, lb(160, 165, 'すれちがい終わり', 14, C.red, 'middle', true))],
  },
  {
    note: '❓始めから終わりまでに、2つの列車は合わせてどれだけ進んだ？→始めは先頭どうしが出会い、終わりは最後尾どうしが出会います。2つの列車が進んだ道のりの合計は、ちょうど2つの長さの合計で、120＋180＝300mです。',
    add: [...fresh(), bar(20, 50, 72, 26, C.blue, FILL.blue), bar(92, 50, 108, 26, C.green, FILL.green), lb(56, 63, 'A 120', 11, C.ink, 'middle', true), lb(146, 63, 'B 180', 11, C.ink, 'middle', true), ln(20, 92, 200, 92, C.red, false, 2.5), lb(110, 106, '合計 300m', 12, C.red, 'middle', true), ...band(130, bx(50, 150, 220, 32, '120 ＋ 180 ＝ 300m', C.red, FILL.red, 15))],
  },
  {
    note: '❓では、2つの列車の間は、1秒にどれだけちぢまる？→向かい合って走るので、Aが25m、Bが15m、それぞれ近づきます。合わせて 25＋15＝40m。秒速40mで近づいていくのと同じです。',
    add: [...fresh(), ...trainA(30), ar(106, 53, 140, 53, C.blue), ...trainB(180), ar(176, 89, 142, 89, C.green), lb(123, 44, '25', 11, C.blue, 'middle', true), lb(158, 82, '15', 11, C.green, 'middle', true), ...band(125, bx(50, 145, 220, 32, '25 ＋ 15 ＝ 秒速40m', C.purple, FILL.purple, 15))],
  },
  {
    note: '❓時間はどう出す？→1秒で40mずつ近づき、300mぶん進めばよいので、300÷40＝7.5秒。答えは7.5秒です。',
    add: [...fresh(), bx(20, 30, 130, 40, '300m', C.red, FILL.red, 16), lb(162, 52, '÷', 18), bx(175, 30, 130, 40, '秒速40m', C.purple, FILL.purple, 14), ...band(95, bx(60, 120, 200, 34, '300 ÷ 40 ＝ 7.5秒', C.green, FILL.green, 16), lb(160, 185, '答え 7.5秒', 14, C.ink, 'middle', true))],
  },
  {
    note: '❓確かめは？→7.5秒のあいだに、Aは25×7.5＝187.5m、Bは15×7.5＝112.5m進みます。合わせて 187.5＋112.5＝300m。2つの長さの合計と一致します。',
    add: [...fresh(), bx(20, 25, 280, 30, 'A：25×7.5 ＝ 187.5m', C.blue, FILL.blue, 13), bx(20, 65, 280, 30, 'B：15×7.5 ＝ 112.5m', C.green, FILL.green, 13), bx(20, 105, 280, 30, '187.5 ＋ 112.5 ＝ 300m ✓', C.red, FILL.red, 14), ...band(150, lb(160, 190, '向かい合い：速さをたす　同じ向き：速さをひく', 11, C.gray, 'middle', true))],
  },
], '列車がすれちがう時間');
//REG toin_v2_s002 toinS002

// ── 大阪桐蔭 往復の平均の速さ ──
const toinS005 = show([
  {
    note: 'A町からB町まで、行きは時速4km、帰りは時速6kmで歩きました。往復の平均の速さは時速何kmでしょう。',
    add: [bx(20, 50, 50, 28, 'A町', C.ink, FILL.warm, 12), bx(250, 50, 50, 28, 'B町', C.ink, FILL.warm, 12), ar(76, 58, 244, 58, C.red), lb(160, 48, '行き 時速4km', 11, C.red, 'middle', true), ar(244, 72, 76, 72, C.green), lb(160, 88, '帰り 時速6km', 11, C.green, 'middle', true), ...band(150, lb(160, 185, '往復の平均の速さは？', 14, C.ink, 'middle', true))],
  },
  {
    note: '❓「平均の速さ」とは何？→往復ぜんたいで進んだ道のりを、かかった時間ぜんぶでわった速さです。速さの数字どうしを平均するものではありません。',
    add: [...fresh(), bx(20, 30, 130, 40, '全体の道のり', C.blue, FILL.blue, 13), lb(160, 52, '÷', 18), bx(175, 30, 130, 40, '全体の時間', C.green, FILL.green, 13), ...band(95, lb(160, 125, '平均の速さ ＝ 全体の道のり ÷ 全体の時間', 12, C.ink, 'middle', true))],
  },
  {
    note: '❓でも、道のりが書いてありません。どうする？→どんな道のりでも答えは同じになるので、自分で決めてしまいます。❓いくつに決める？→4でも6でもわりきれる数、たとえば12kmにするとかんたんです。',
    add: [...fresh(), bx(20, 50, 50, 28, 'A町', C.ink, FILL.warm, 12), bx(250, 50, 50, 28, 'B町', C.ink, FILL.warm, 12), ar(76, 64, 244, 64, C.gray), lb(160, 54, '片道 12km と決める', 12, C.blue, 'middle', true), ...band(110, lb(160, 140, '12 は 4 でも 6 でもわりきれる', 12, C.ink, 'middle', true), lb(160, 170, '（12÷4＝3、12÷6＝2）', 12, C.gray))],
  },
  {
    note: '❓行きと帰りの時間は？→時間＝道のり÷速さです。行きは 12÷4＝3時間、帰りは 12÷6＝2時間。行きのほうがおそいので、長い時間かかります。',
    add: [...fresh(), bar(40, 40, 90, 26, C.red, FILL.red), bar(40, 80, 60, 26, C.green, FILL.green), lb(85, 53, '3時間', 12, C.ink, 'middle', true), lb(70, 93, '2時間', 12, C.ink, 'middle', true), lb(34, 53, '行き', 11, C.red, 'end', true), lb(34, 93, '帰り', 11, C.green, 'end', true), ...band(125, bx(30, 138, 260, 28, '行き 12÷4 ＝ 3時間', C.red, FILL.red, 13), bx(30, 172, 260, 28, '帰り 12÷6 ＝ 2時間', C.green, FILL.green, 13))],
  },
  {
    note: '❓なぜ（4＋6）÷2＝5 ではだめなの？→行きは3時間、帰りは2時間と、おそい4km/時で歩く時間のほうが長いからです。時間の重みがちがうので、平均はまん中の5より、おそいほう（4）に近くなるはずです。',
    add: [...band(120, lb(160, 140, '4km/時で歩く時間が長い（3時間 ＞ 2時間）', 12, C.red, 'middle', true), lb(160, 165, '→ 平均は5より小さく、4に近いはず', 12, C.ink, 'middle', true), lb(160, 195, '（4＋6）÷2＝5 は使えない', 12, C.gray))],
  },
  {
    note: '❓では、平均の速さは？→往復の道のりは 12＋12＝24km、かかった時間は 3＋2＝5時間。24÷5＝4.8。予想どおり、5より小さく4に近い値です。',
    add: [...fresh(), bx(20, 25, 280, 30, '道のり 12＋12 ＝ 24km', C.blue, FILL.blue, 13), bx(20, 65, 280, 30, '時間 3＋2 ＝ 5時間', C.green, FILL.green, 13), bx(20, 105, 280, 30, '24 ÷ 5 ＝ 時速4.8km', C.purple, FILL.purple, 14), ...band(150, lb(160, 190, '答え 時速4.8km', 14, C.ink, 'middle', true))],
  },
  {
    note: '❓道のりを変えても同じ？確かめます。片道24kmなら、行き 24÷4＝6時間、帰り 24÷6＝4時間で、往復48km÷10時間＝4.8。やはり時速4.8kmです。',
    add: [...fresh(), bx(20, 25, 280, 30, '片道24km：行き 6時間・帰り 4時間', C.gray, FILL.gray, 12), bx(20, 65, 280, 30, '48 ÷ (6＋4) ＝ 4.8', C.green, FILL.green, 14), ...band(120, lb(160, 155, '道のりを変えても同じ時速4.8km ✓', 13, C.green, 'middle', true))],
  },
], '往復の平均の速さ');
//REG toin_v2_s005 toinS005

// ── 城星学園 つるかめ算（共通の作り） ──
type TkItem = { name: string; price: number; col: string; fill: string };
const tsurukame = (cheap: TkItem, dear: TkItem, n: number, total: number, assume: 'cheap' | 'dear', unit: string, caption: string): Figure => {
  const A = assume === 'dear' ? dear : cheap;
  const B = assume === 'dear' ? cheap : dear;
  const aTotal = A.price * n;
  const diff = Math.abs(total - aTotal);
  const step = dear.price - cheap.price;
  const k = diff / step;
  const hi = assume === 'dear';
  const dotAt = (i: number, it: TkItem, txt: string) => ci(92 + (i % 5) * 34, 28 + Math.floor(i / 5) * 32, 13, txt, it.col, it.fill, 9);
  const all = (it: TkItem) => Array.from({ length: n }, (_, i) => dotAt(i, it, String(it.price)));
  const legendY = 28 + Math.floor((n - 1) / 5) * 32 + 26;
  return show([
    {
      note: `${cheap.name}（1${unit}${cheap.price}円）と${dear.name}（1${unit}${dear.price}円）を合わせて${n}${unit}買って、代金は${total}円でした。${asked(cheap, dear, A)}の${unit}数を求めます。`,
      add: [...Array.from({ length: n }, (_, i) => dotAt(i, { name: '', price: 0, col: C.gray, fill: FILL.gray }, '？')), bx(20, legendY, 135, 22, `${cheap.name} ${cheap.price}円`, cheap.col, cheap.fill, 11), bx(165, legendY, 135, 22, `${dear.name} ${dear.price}円`, dear.col, dear.fill, 11), ...band(150, lb(160, 185, `合わせて${n}${unit}・代金${total}円`, 14, C.ink, 'middle', true))],
    },
    {
      note: `❓なぜ、まず「全部${A.name}」と考えるの？→全部同じ値段なら、代金はかけ算だけで出せるからです。${A.price}円×${n}${unit}＝${aTotal}円。`,
      add: [...all(A), ...band(150, bx(40, 168, 240, 34, `${A.price}×${n} ＝ ${aTotal}円（全部${A.name}なら）`, A.col, A.fill, 14))],
    },
    {
      note: `❓本当の代金${total}円とくらべると？→${aTotal}円は、本当より${diff}円${hi ? '高い' : '安い'}です。❓なぜずれるの？→本当は${B.name}（${B.price}円）が混じっているので、全部${A.name}と考えた代金が、その分だけ${hi ? '高く' : '安く'}出たからです。`,
      add: band(150, bx(20, 162, 280, 26, hi ? `${aTotal} − ${total} ＝ ${diff}円（高い）` : `${total} − ${aTotal} ＝ ${diff}円（安い）`, C.red, FILL.red, 13), lb(160, 208, `${B.name}が混じっているぶんのずれ`, 12, C.gray, 'middle', true)),
    },
    {
      note: `❓${A.name}を1${unit}${B.name}にかえると、代金はどう変わる？→${A.price}円が${B.price}円になるので、1${unit}かえるごとに ${step}円ずつ${hi ? '安く' : '高く'}なります。`,
      add: [...all(A), dotAt(0, B, String(B.price)), ...band(150, bx(40, 168, 240, 34, `1${unit}かえる → ${step}円${hi ? 'へる' : 'ふえる'}`, B.col, B.fill, 14), lb(160, 222, `（${A.price}円 → ${B.price}円）`, 11, C.gray))],
    },
    {
      note: `❓なぜわり算？→1${unit}かえるごとに${step}円ずつ動くので、ずれの${diff}円を動かすには、${diff}÷${step}＝${k}${unit}かえればよいからです。この${k}${unit}が${B.name}の数です。`,
      add: band(150, bx(40, 168, 240, 34, `${diff} ÷ ${step} ＝ ${k}${unit}`, C.purple, FILL.purple, 15), lb(160, 222, `かえた数 ＝ ${B.name}の数`, 12, C.purple, 'middle', true)),
    },
    {
      note: `図のように、かえた${k}${unit}が${B.name}、のこりの${n - k}${unit}が${A.name}です。答えは、${asked(cheap, dear, A)}が${k}${unit}です。`,
      add: [...Array.from({ length: n }, (_, i) => (i < k ? dotAt(i, B, String(B.price)) : dotAt(i, A, String(A.price)))), ...band(150, bx(40, 168, 240, 34, `${B.name} ${k}${unit}、${A.name} ${n - k}${unit}`, C.green, FILL.green, 14), lb(160, 222, `答え ${k}${unit}`, 14, C.ink, 'middle', true))],
    },
    {
      note: `❓確かめは？→${B.name} ${k}${unit}で ${B.price}×${k}＝${B.price * k}円、${A.name} ${n - k}${unit}で ${A.price}×${n - k}＝${A.price * (n - k)}円。合わせて ${B.price * k + A.price * (n - k)}円で、${total}円と一致します。`,
      add: band(150, bx(20, 162, 280, 28, `${B.price}×${k} ＋ ${A.price}×${n - k} ＝ ${B.price * k} ＋ ${A.price * (n - k)}`, C.gray, FILL.gray, 13), bx(20, 196, 280, 28, `＝ ${B.price * k + A.price * (n - k)}円 ✓`, C.green, FILL.green, 14)),
    },
  ], caption);
};
const asked = (cheap: TkItem, dear: TkItem, A: TkItem) => (A === dear ? cheap.name : dear.name);

const pencil: TkItem = { name: 'えんぴつ', price: 80, col: C.blue, fill: FILL.blue };
const pen: TkItem = { name: 'ペン', price: 120, col: C.red, fill: FILL.red };
const mikan: TkItem = { name: 'みかん', price: 90, col: C.main, fill: FILL.yellow };
const ringo: TkItem = { name: 'りんご', price: 150, col: C.red, fill: FILL.red };
const josejoS005 = tsurukame(pencil, pen, 10, 960, 'dear', '本', 'つるかめ算（えんぴつとペン）');
//REG josejogakuen_sansu_005 josejoS005
const josejoS012 = tsurukame(mikan, ringo, 15, 1710, 'cheap', '個', 'つるかめ算（りんごとみかん）');
//REG josejogakuen_sansu_012 josejoS012

// ── 城星学園 和差算 ──
const josejoS001 = show([
  {
    note: '兄と弟の所持金の合計は3600円で、兄は弟より800円多く持っています。弟の所持金を求めます。線分図（長さで金額を表す図）に表します。',
    add: [lb(40, 52, '弟', 12, C.blue, 'end', true), bar(50, 38, 100, 26, C.blue, FILL.blue), lb(40, 92, '兄', 12, C.red, 'end', true), bar(50, 78, 100, 26, C.red, FILL.red), bar(150, 78, 57, 26, C.main, FILL.yellow), lb(178, 91, '800円', 10, C.ink, 'middle', true), ln(222, 38, 222, 104, C.gray), lb(232, 71, '合計\n3600円', 10, C.gray, 'start'), ...band(150, lb(160, 185, '弟の所持金は？', 14, C.ink, 'middle', true))],
  },
  {
    note: '❓なぜ、合計から差の800円を引くの？→兄の線の「800円のでっぱり」を取りのぞくと、兄も弟と同じ長さになるからです。まず、そのでっぱりを取り出してみます。',
    add: [ar(178, 110, 178, 130, C.red), lb(178, 142, '800円を取る', 11, C.red, 'middle', true), ...band(155, lb(160, 190, '兄から800円を取ると、弟と同じ金額', 12, C.red, 'middle', true))],
  },
  {
    note: '❓取ると、合計はどうなる？→合計も800円へって、3600−800＝2800円。このとき、兄も弟も同じ長さなので、2800円は「弟の2人ぶん」です。',
    add: [...fresh(), lb(40, 52, '弟', 12, C.blue, 'end', true), bar(50, 38, 100, 26, C.blue, FILL.blue), lb(40, 92, '兄', 12, C.red, 'end', true), bar(50, 78, 100, 26, C.red, FILL.red), ln(165, 38, 165, 104, C.gray), lb(175, 71, '2人ぶん\n2800円', 10, C.gray, 'start'), ...band(125, bx(40, 145, 240, 34, '3600 − 800 ＝ 2800円', C.purple, FILL.purple, 14), lb(160, 205, '（弟2人ぶん）', 12, C.gray))],
  },
  {
    note: '❓弟1人ぶんは？→弟2人ぶんが2800円で、2人は同じ金額なので、2でわります。2800÷2＝1400円。',
    add: band(125, bx(40, 145, 240, 34, '2800 ÷ 2 ＝ 1400円', C.blue, FILL.blue, 15), lb(160, 205, '弟 1400円', 14, C.blue, 'middle', true)),
  },
  {
    note: '答えは、弟の所持金は1400円です。兄は、1400円に800円を足して 2200円になります。',
    add: [...fresh(), lb(40, 52, '弟', 12, C.blue, 'end', true), bar(50, 38, 100, 26, C.blue, FILL.blue), lb(100, 51, '1400円', 11, C.ink, 'middle', true), lb(40, 92, '兄', 12, C.red, 'end', true), bar(50, 78, 100, 26, C.red, FILL.red), bar(150, 78, 57, 26, C.gray, FILL.yellow), lb(100, 91, '1400円', 11, C.ink, 'middle', true), lb(178, 91, '800円', 10, C.ink, 'middle', true), ...band(125, bx(40, 150, 240, 34, '答え 弟 1400円', C.green, FILL.green, 16), lb(160, 210, '兄 1400＋800 ＝ 2200円', 12, C.ink))],
  },
  {
    note: '❓よくあるまちがいは？→差を引かずに 3600÷2＝1800円 とすることです。1800円は「2人が同じ金額のとき」の弟の金額で、実際は兄が800円多いので、弟は差の半分（400円）だけ少ない 1800−400＝1400円です。',
    add: [...fresh(), ln(40, 70, 280, 70, C.gray), ci(80, 70, 5, undefined, C.blue, C.blue), ci(160, 70, 6, undefined, C.gray, C.gray), ci(240, 70, 5, undefined, C.red, C.red), lb(80, 52, '弟 1400', 11, C.blue, 'middle', true), lb(160, 52, '同じなら 1800', 11, C.gray, 'middle', true), lb(240, 52, '兄 2200', 11, C.red, 'middle', true), lb(120, 92, '−400', 10, C.blue, 'middle'), lb(200, 92, '＋400', 10, C.red, 'middle'), ...band(115, lb(160, 140, '差800円の半分（400円）ずつ', 13, C.ink, 'middle', true), lb(160, 172, '1800 − 400 ＝ 1400円（弟）✓', 13, C.blue, 'middle', true))],
  },
  {
    note: '❓確かめは？→兄は 1400＋800＝2200円。2人の合計は 1400＋2200＝3600円で、問題の条件と合います。兄と弟の差も 2200−1400＝800円です。',
    add: [...fresh(), bx(20, 25, 280, 30, '兄 1400＋800 ＝ 2200円', C.red, FILL.red, 13), bx(20, 65, 280, 30, '合計 1400＋2200 ＝ 3600円 ✓', C.green, FILL.green, 13), bx(20, 105, 280, 30, '差 2200−1400 ＝ 800円 ✓', C.green, FILL.green, 13), ...band(150, lb(160, 190, '答え 1400円', 14, C.ink, 'middle', true))],
  },
], '和差算');
//REG josejogakuen_sansu_001 josejoS001

// ── 城星学園 比と差 ──
const ub = (x: number, y: number, col: string, fill: string) => bar(x, y, 28, 30, col, fill);
const josejoS007 = show([
  {
    note: '兄と弟の所持金の比は5：3で、兄は弟より1200円多く持っています。兄の所持金を求めます。',
    add: [lb(50, 57, '兄', 12, C.red, 'end', true), ...[0, 1, 2, 3, 4].map((i) => ub(60 + i * 28, 42, C.red, FILL.red)), lb(50, 97, '弟', 12, C.blue, 'end', true), ...[0, 1, 2].map((i) => ub(60 + i * 28, 82, C.blue, FILL.blue)), ...band(150, lb(160, 185, '兄の所持金は？', 14, C.ink, 'middle', true))],
  },
  {
    note: '❓比が5：3とは、どういうこと？→同じ大きさのかたまりを、兄が5こ、弟が3こ持っているということです。図では1つの四角が、かたまり1こです。',
    add: [...band(150, lb(160, 175, '1つの四角 ＝ 同じ金額のかたまり', 12, C.ink, 'middle', true), lb(160, 200, '兄 5こ ： 弟 3こ', 14, C.ink, 'middle', true))],
  },
  {
    note: '❓1200円の差は、どこにあたる？→兄の5こから弟の3こを引いた、あまりの 5−3＝2こぶんです（黄色）。つまり、2こぶんが1200円です。',
    add: [bar(144, 42, 56, 30, C.main, FILL.yellow), ln(172, 42, 172, 72, C.main), lb(172, 34, '差 2こ ＝ 1200円', 11, C.main, 'middle', true), ...band(150, bx(40, 168, 240, 34, '5 − 3 ＝ 2こ ＝ 1200円', C.main, FILL.yellow, 14))],
  },
  {
    note: '❓1こぶんはいくら？→2こぶんが1200円なので、1こぶんは 1200÷2＝600円です。',
    add: [...band(150, bx(40, 168, 240, 34, '1こ ＝ 1200 ÷ 2 ＝ 600円', C.purple, FILL.purple, 14))],
  },
  {
    note: '❓兄はいくら？→兄は5こぶんなので 600×5＝3000円。1こが600円だから、5こぶんは600を5回たした金額です。',
    add: [...[0, 1, 2, 3, 4].map((i) => lb(74 + i * 28, 61, '600', 9, C.ink, 'middle', true)), ...band(150, bx(40, 168, 240, 34, '600 × 5 ＝ 3000円', C.red, FILL.red, 15), lb(160, 222, '答え 3000円', 14, C.ink, 'middle', true))],
  },
  {
    note: '❓よくあるまちがいは？→1200円を比の和（5＋3＝8）でわってしまうこと。1200円は兄と弟の「差」であって、「合計」ではないので、差にあたる2こでわります。',
    add: [...fresh(), bx(20, 30, 280, 34, 'まちがい：1200÷8 ＝ 150', C.gray, FILL.gray, 13), bx(20, 76, 280, 34, '1200円は「差」→ 差の2こでわる', C.red, FILL.red, 13), ...band(125, lb(160, 160, '和（8こ）ではなく、差（2こ）', 13, C.green, 'middle', true))],
  },
  {
    note: '❓確かめは？→弟は 600×3＝1800円。兄との差は 3000−1800＝1200円で条件に合います。比も 3000：1800＝5：3です。',
    add: [...fresh(), bx(20, 25, 280, 30, '弟 600×3 ＝ 1800円', C.blue, FILL.blue, 13), bx(20, 65, 280, 30, '差 3000−1800 ＝ 1200円 ✓', C.green, FILL.green, 13), bx(20, 105, 280, 30, '3000：1800 ＝ 5：3 ✓', C.green, FILL.green, 13), ...band(150, lb(160, 190, '答え 3000円', 14, C.ink, 'middle', true))],
  },
], '比の差と実際の差');
//REG josejogakuen_sansu_007 josejoS007

// ── 理科の共通部品 ──
const spring = (cx: number, top: number, len: number, col: string): DiagramElement[] => {
  const pts: [number, number][] = [[cx, top], [cx, top + 4]];
  const n = 8;
  for (let i = 0; i < n; i++) pts.push([cx + (i % 2 === 0 ? -9 : 9), top + 4 + ((len - 8) * (i + 0.5)) / n]);
  pts.push([cx, top + len - 4], [cx, top + len]);
  return [ln(cx - 22, top, cx + 22, top, C.gray, false, 3), ...pts.slice(1).map((p, i) => ln(pts[i][0], pts[i][1], p[0], p[1], col, false, 1.6))];
};
const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

// ── 近大附属 ばねののび ──
const SP0 = 14;
const springW = (cx: number, ext: number, txt: string, col: string, fill: string) => [...spring(cx, SP0, 40 + ext, C.gray), bx(cx - 20, SP0 + 40 + ext, 40, 20, txt, col, fill, 11)];
const kindaiR001 = show([
  {
    note: 'ばねに60gのおもりをつるすと3cmのびました。同じばねに100gのおもりをつるすと、何cmのびるでしょう。図は、なにもつるさないばね・60g・100gの場合です。',
    add: [...spring(60, SP0, 40, C.gray), lb(60, 92, 'なにも\nつるさない', 10, C.gray), ...springW(160, 30, '60g', C.blue, FILL.blue), ln(186, SP0 + 40, 186, SP0 + 70, C.red, false, 2), lb(192, SP0 + 55, '3cm', 10, C.red, 'start', true), ...springW(260, 50, '100g', C.purple, FILL.purple), lb(260, SP0 + 40 + 50 + 34, 'のび ？cm', 10, C.purple, 'middle', true), ...band(150, lb(160, 190, '100gのときのびは何cm？', 14, C.ink, 'middle', true))],
  },
  {
    note: '❓なぜ、ばねののびは重さに「比例」するといえるの？→おもりの重さが2倍になると、ばねを引く力も2倍になり、のびも2倍になるからです。図のように、30gで1.5cm、60gで3cm、120gで6cmのびます。',
    add: [...fresh(), ...springW(60, 15, '30g', C.blue, FILL.blue), ...springW(160, 30, '60g', C.blue, FILL.blue), ...springW(260, 60, '120g', C.blue, FILL.blue), lb(60, 100, 'のび 1.5cm', 10, C.ink, 'middle', true), lb(160, 115, 'のび 3cm', 10, C.ink, 'middle', true), lb(260, 145, 'のび 6cm', 10, C.ink, 'middle', true), ...band(158, lb(160, 195, '重さ2倍 → のびも2倍（比例）', 13, C.blue, 'middle', true))],
  },
  {
    note: '❓では、1gあたりのびるのは何cm？→60gで3cmのびたので、60gを60こに分けたと考えて 3÷60＝0.05cm。1gで0.05cmずつのびる、ということです。',
    add: [...fresh(), ...springW(160, 30, '60g', C.blue, FILL.blue), ln(186, SP0 + 40, 186, SP0 + 70, C.red, false, 2), lb(192, SP0 + 55, '3cm', 10, C.red, 'start', true), ...band(115, bx(30, 135, 260, 34, '3 ÷ 60 ＝ 0.05cm（1gぶん）', C.purple, FILL.purple, 14), lb(160, 195, '3cmを60こに分けた1こぶん', 12, C.gray))],
  },
  {
    note: '❓100gなら？→1gで0.05cmのびるので、100gなら 0.05cmを100回ぶん。100×0.05＝5cmです。',
    add: [...fresh(), ...springW(160, 50, '100g', C.purple, FILL.purple), ln(186, SP0 + 40, 186, SP0 + 90, C.red, false, 2), lb(192, SP0 + 65, '5cm', 11, C.red, 'start', true), ...band(135, bx(30, 150, 260, 34, '100 × 0.05 ＝ 5cm', C.purple, FILL.purple, 15), lb(160, 210, '答え 5cm', 14, C.ink, 'middle', true))],
  },
  {
    note: '❓もっと簡単な考え方は？→60gと100gは、どちらも20gのかたまりで数えられます。60gは3こ、100gは5こ。60gで3cmなので、20g（1こ）で1cmのびます。',
    add: [...fresh(), ...[0, 1, 2].map((i) => bx(30 + i * 46, 20, 40, 26, '20g', C.blue, FILL.blue, 11)), ...[0, 1, 2].map((i) => lb(50 + i * 46, 58, '1cm', 10, C.red, 'middle', true)), lb(225, 34, '60g → 3cm', 11, C.blue, 'start', true), ...[0, 1, 2, 3, 4].map((i) => bx(30 + i * 46, 76, 40, 26, '20g', C.purple, FILL.purple, 11)), ...[0, 1, 2, 3, 4].map((i) => lb(50 + i * 46, 114, '1cm', 10, C.red, 'middle', true)), ...band(130, lb(160, 160, '20gで1cm', 13, C.red, 'middle', true), lb(160, 190, '100gは5こぶん → 5cm', 13, C.purple, 'middle', true))],
  },
  {
    note: '❓よくあるまちがいは？→「のび」と「ばね全体の長さ」をまぜてしまうことです。比例するのは「のび」だけで、もとの長さをふくめた全体の長さは、重さに比例しません。',
    add: [...fresh(), ...spring(160, SP0, 90, C.gray), bx(140, SP0 + 90, 40, 20, 'おもり', C.blue, FILL.blue, 10), ln(190, SP0, 190, SP0 + 40, C.gray, false, 2.5), lb(196, SP0 + 20, 'もとの長さ', 10, C.gray, 'start', true), ln(190, SP0 + 40, 190, SP0 + 90, C.red, false, 2.5), lb(196, SP0 + 65, 'のび', 11, C.red, 'start', true), ...band(135, lb(160, 165, '比例するのは「のび」だけ', 13, C.red, 'middle', true), lb(160, 195, '全体の長さではない', 12, C.gray))],
  },
  {
    note: '❓確かめは？→重さの比とのびの比は同じはずです。60：3 と 100：5 を たすきがけすると 60×5＝300、3×100＝300 で一致します。答えは5cmです。',
    add: band(135, bx(30, 150, 120, 30, '60g ： 3cm', C.blue, FILL.blue, 13), bx(170, 150, 120, 30, '100g ： 5cm', C.purple, FILL.purple, 13), lb(160, 200, '60×5 ＝ 300　3×100 ＝ 300 ✓', 13, C.green, 'middle', true)),
  },
], 'ばねののびは重さに比例');
//REG kindai_v2_r001 kindaiR001

// ── 近大附属 地球の公転 ──
const EO = { cx: 160, cy: 76, R: 58 };
const eAt = (deg: number): [number, number] => [EO.cx + EO.R * Math.cos((deg * Math.PI) / 180), EO.cy - EO.R * Math.sin((deg * Math.PI) / 180)];
const eOrbit = () => [ci(EO.cx, EO.cy, EO.R, undefined, C.gray, 'rgba(0,0,0,0)'), ci(EO.cx, EO.cy, 14, '太陽', C.main, FILL.yellow, 8)];
const kindaiR004 = show([
  {
    note: '地球は太陽のまわりを、約365日で1周（公転）します。30日では、何度ぶん回るでしょう。選択肢は「約30度・約29度・約28度・約31度」です。',
    add: [...eOrbit(), ci(eAt(0)[0], eAt(0)[1], 7, undefined, C.blue, FILL.blue), lb(eAt(0)[0] + 12, eAt(0)[1] + 4, 'はじめ', 10, C.blue, 'start', true), ...band(150, lb(160, 185, '30日で地球は何度回る？', 14, C.ink, 'middle', true))],
  },
  {
    note: '❓なぜ「360度」を使うの？→円を1周すると、ちょうど360度だからです。地球は365日かけて1周するので、365日＝360度です。',
    add: [ar(eAt(60)[0], eAt(60)[1], eAt(100)[0], eAt(100)[1], C.red), ...band(150, lb(160, 175, '1周 ＝ 360度 ＝ 365日', 14, C.red, 'middle', true), lb(160, 205, '（1年かけてぐるっと1周）', 11, C.gray))],
  },
  {
    note: '❓では、1日には何度ぶん回る？→365日で360度なので、365日ぶんに分けた1日ぶんは 360÷365＝約0.99度。ほぼ1度です。',
    add: band(150, bx(30, 165, 260, 34, '360 ÷ 365 ＝ 約0.99度（1日）', C.purple, FILL.purple, 14), lb(160, 220, 'ほぼ1日に1度', 12, C.gray)),
  },
  {
    note: '❓30日では？→1日ぶんの30回ぶんなので、360×30÷365＝10800÷365＝約29.6度。図の赤い扇形が、30日で回る角です。',
    add: [sc(EO.cx, EO.cy, EO.R, 0, 29.6, C.red, FILL.red), ci(eAt(29.6)[0], eAt(29.6)[1], 7, undefined, C.blue, FILL.blue), lb(eAt(29.6)[0] + 10, eAt(29.6)[1] - 6, '30日後', 10, C.blue, 'start', true), ...band(150, bx(20, 165, 280, 34, '360×30÷365 ＝ 約29.6度', C.red, FILL.red, 14))],
  },
  {
    note: '❓選択肢のどれ？→29.6度に、いちばん近いのは30度（差0.4）です。29度だと差は0.6になります。答えは約30度。',
    add: [...fresh(), bx(10, 40, 70, 30, '約30度', C.green, FILL.green, 13), bx(88, 40, 70, 30, '約29度', C.gray, FILL.gray, 13), bx(166, 40, 70, 30, '約28度', C.gray, FILL.gray, 13), bx(244, 40, 66, 30, '約31度', C.gray, FILL.gray, 13), lb(45, 88, '差0.4', 11, C.green, 'middle', true), lb(123, 88, '差0.6', 11, C.gray, 'middle'), ...band(115, lb(160, 145, '29.6に いちばん近い → 約30度', 14, C.green, 'middle', true))],
  },
  {
    note: '❓別の方法で確かめると？→1か月は、1年のおよそ12分の1です。だから回る角も360度の12分の1で、360÷12＝30度。先の29.6度とほぼ同じです。',
    add: band(115, bx(30, 135, 260, 34, '360 ÷ 12 ＝ 30度', C.blue, FILL.blue, 15), lb(160, 195, '29.6度とほぼ同じ ✓', 13, C.green, 'middle', true)),
  },
  {
    note: '❓注意することは？→「1日に1度だから30度」と決めつけないこと。正確には1日約0.99度で、30日だと29.6度です。選択肢はせまい差なので、きちんと計算するか、12分の1で確かめます。',
    add: [...fresh(), bx(20, 30, 280, 34, '1日1度 → 30度（だいたい）', C.gray, FILL.gray, 13), bx(20, 76, 280, 34, '正しくは 29.6度 → 約30度', C.green, FILL.green, 13), ...band(125, lb(160, 165, '計算して、いちばん近い選択肢をえらぶ', 12, C.ink, 'middle', true))],
  },
], '地球が30日で回る角度');
//REG kindai_v2_r004 kindaiR004

// ── 清風 浮力 ──
const scaleTop = (cx: number) => [bx(cx - 28, 6, 56, 22, 'ばねばかり', C.gray, FILL.gray, 9), ln(cx, 28, cx, 52)];
const water = (cx: number) => pg([[cx - 52, 70], [cx + 52, 70], [cx + 52, 134], [cx - 52, 134]], C.blue, FILL.blue);
const seifuR001 = show([
  {
    note: '空中で200gの物体を、ばねばかりにつるして水の中に完全にしずめると、ばねばかりは120gをさしました。水が物体におよぼす力（浮力）は何gでしょう。',
    add: [...scaleTop(80), bx(58, 52, 44, 36, '物体\n200g', C.main, FILL.warm, 10), lb(80, 104, '空気中 200g', 11, C.ink, 'middle', true), water(240), ...scaleTop(240), ln(240, 52, 240, 76), bx(218, 76, 44, 36, '物体', C.main, FILL.warm, 10), lb(240, 143, '水中 120g', 11, C.ink, 'middle', true), ...band(150, lb(160, 195, '浮力は何g？', 14, C.ink, 'middle', true))],
  },
  {
    note: '❓なぜ、水の中では軽くなるの？→水が物体を上に押し上げる力がはたらくからです。これを浮力といいます。物体の重さは下向き200g、浮力は上向きです。',
    add: [ar(208, 82, 208, 112, C.red), lb(204, 100, '重さ', 10, C.red, 'end', true), ar(272, 112, 272, 82, C.green), lb(276, 100, '浮力', 10, C.green, 'start', true)],
  },
  {
    note: '❓ばねばかりは何をはかっているの？→ばねを下に引く力です。下向きの重さ200gから、上向きの浮力が引かれた「見かけの重さ」です。つまり 見かけの重さ＝重さ−浮力。',
    add: band(150, bx(30, 165, 260, 34, '見かけの重さ ＝ 重さ − 浮力', C.purple, FILL.purple, 14), lb(160, 220, 'ばねばかりの値は「見かけの重さ」', 11, C.gray)),
  },
  {
    note: '❓では、浮力はいくつ？→見かけの重さが120g、重さが200gなので、浮力＝重さ−見かけの重さ＝200−120＝80g。',
    add: band(150, bx(30, 165, 260, 34, '200 − 120 ＝ 80g', C.green, FILL.green, 16), lb(160, 220, '答え 80g', 14, C.ink, 'middle', true)),
  },
  {
    note: '❓浮力は何の重さと同じ？→物体が押しのけた水の重さと同じです。水1cm³は1gなので、押しのけた水は80g＝80cm³。つまり、この物体の体積は80cm³だと分かります。',
    add: [...fresh(), water(90), ln(90, 20, 90, 76, C.gray), bx(68, 76, 44, 36, '物体', C.main, FILL.warm, 10), ar(148, 94, 196, 84, C.blue), bx(200, 60, 100, 50, '押しのけた水\n80g ＝ 80cm³', C.blue, FILL.blue, 11), ...band(150, lb(160, 185, '浮力 ＝ 押しのけた水の重さ', 13, C.blue, 'middle', true))],
  },
  {
    note: '❓よくあるまちがいは？→ばねばかりの値120gを、そのまま浮力だと思うことです。120gは「見かけの重さ」で、浮力は「重さとの差」の80gです。',
    add: [...fresh(), bx(20, 30, 280, 34, 'まちがい：浮力 ＝ 120g', C.gray, FILL.gray, 13), bx(20, 76, 280, 34, '120gは見かけの重さ。浮力は「差」', C.red, FILL.red, 13), ...band(125, lb(160, 165, '浮力 ＝ 200 − 120 ＝ 80g', 14, C.green, 'middle', true))],
  },
  {
    note: '❓確かめは？→見かけの重さ120gに浮力80gをたすと 120＋80＝200g。もとの重さにもどるので、答え80gは正しいです。',
    add: [...fresh(), bx(20, 30, 280, 34, '見かけの重さ 120g ＋ 浮力 80g', C.blue, FILL.blue, 13), bx(20, 76, 280, 34, '＝ 200g（もとの重さ）✓', C.green, FILL.green, 14), ...band(125, lb(160, 165, '答え 80g', 15, C.ink, 'middle', true))],
  },
], '水中のばねばかりと浮力');
//REG seifu_v2_r001 seifuR001

// ── てこ（共通） ──
type LeverArg = { Ld: number; Rd: number; Lw: number; unit: string; lname: string; rname: string; mistake: string[]; caption: string };
const lever = (a: LeverArg): Figure => {
  const prod = a.Lw * a.Ld;
  const ans = prod / a.Rd;
  const px = 250 / (a.Ld + a.Rd);
  const xf = 35 + a.Ld * px;
  const g = gcd(a.Ld, a.Rd);
  const ra = a.Ld / g;
  const rb = a.Rd / g;
  const beam = () => [bar(35, 64, 250, 8, C.main, FILL.warm), pg([[xf, 72], [xf - 12, 98], [xf + 12, 98]], C.gray, FILL.gray), lb(xf, 110, '支点', 10, C.gray, 'middle', true)];
  const hang = (x: number, txt: string, col: string, fill: string) => [ln(x, 72, x, 92, C.gray), bx(x - 26, 92, 52, 28, txt, col, fill, 10)];
  const dist = () => [ln(35, 136, xf, 136, C.blue, false, 2), lb((35 + xf) / 2, 146, `${a.Ld}cm`, 10, C.blue, 'middle', true), ln(xf, 136, 285, 136, C.green, false, 2), lb((xf + 285) / 2, 146, `${a.Rd}cm`, 10, C.green, 'middle', true)];
  return show([
    {
      note: `てこの支点から左${a.Ld}cmのところに${a.lname}${a.Lw}${a.unit}、右${a.Rd}cmのところに${a.rname}をかけて、つり合わせます。${a.rname}は何${a.unit}にすればよいでしょう。`,
      add: [...beam(), ...hang(35, `${a.lname}\n${a.Lw}${a.unit}`, C.blue, FILL.blue), ...hang(285, `${a.rname}\n□${a.unit}`, C.green, FILL.green), ...dist(), ...band(156, lb(160, 195, `□は何${a.unit}？`, 14, C.ink, 'middle', true))],
    },
    {
      note: '❓てこがつり合う条件は？→「おもさ×支点からの距離」が、左右で同じになることです。❓なぜ？→支点を中心にまわそうとする強さは、おもいほど、また支点から遠いほど強くなるからです。シーソーで、おもい人が支点の近くにすわるとつり合うのと同じです。',
      add: band(156, lb(160, 175, '左のまわす強さ ＝ 右のまわす強さ', 12, C.ink, 'middle', true), lb(160, 200, 'おもさ × 距離（左右で同じ）', 14, C.purple, 'middle', true)),
    },
    {
      note: `❓まず左のまわす強さは？→${a.Lw}${a.unit}が支点から${a.Ld}cmのところにあるので、${a.Lw}×${a.Ld}＝${prod}。`,
      add: band(156, bx(30, 170, 260, 34, `左：${a.Lw} × ${a.Ld} ＝ ${prod}`, C.blue, FILL.blue, 15)),
    },
    {
      note: `❓右は？→右も同じ${prod}にならなければいけません。右は □×${a.Rd}なので、□×${a.Rd}＝${prod}。❓□はどう求める？→かけ算の逆で、${prod}÷${a.Rd}＝${ans}${a.unit}です。`,
      add: band(156, bx(20, 166, 280, 28, `右：□ × ${a.Rd} ＝ ${prod}`, C.green, FILL.green, 14), bx(20, 200, 280, 28, `□ ＝ ${prod} ÷ ${a.Rd} ＝ ${ans}${a.unit}`, C.green, FILL.green, 14)),
    },
    {
      note: `❓別の考え方は？→距離の比は ${a.Ld}：${a.Rd}＝${ra}：${rb}。おもさは距離とは逆の比になるので、左：右＝${rb}：${ra}。左が${rb}にあたり${a.Lw}${a.unit}なので、①＝${a.Lw / rb}${a.unit}、右は${ra}にあたるので ${a.Lw / rb}×${ra}＝${ans}${a.unit}。`,
      add: [...fresh(), bx(20, 25, 130, 30, `距離 ${ra} ： ${rb}`, C.blue, FILL.blue, 13), bx(170, 25, 130, 30, `おもさ ${rb} ： ${ra}`, C.green, FILL.green, 13), lb(160, 40, '逆', 12, C.red, 'middle', true), ...band(75, bx(30, 90, 260, 30, `${rb} が ${a.Lw}${a.unit} → ① ＝ ${a.Lw / rb}${a.unit}`, C.gray, FILL.gray, 12), bx(30, 128, 260, 30, `${ra} ＝ ${a.Lw / rb} × ${ra} ＝ ${ans}${a.unit}`, C.green, FILL.green, 14))],
    },
    {
      note: a.mistake[0],
      add: [...fresh(), bx(20, 30, 280, 34, a.mistake[1], C.gray, FILL.gray, 12), bx(20, 76, 280, 34, a.mistake[2], C.red, FILL.red, 12), ...band(125, lb(160, 165, `答え ${ans}${a.unit}`, 15, C.ink, 'middle', true))],
    },
    {
      note: `❓確かめは？→右のまわす強さは ${ans}×${a.Rd}＝${ans * a.Rd}。左の ${a.Lw}×${a.Ld}＝${prod} と同じなので、つり合います。答えは${ans}${a.unit}です。`,
      add: [...fresh(), ...beam(), ...hang(35, `${a.lname}\n${a.Lw}${a.unit}`, C.blue, FILL.blue), ...hang(285, `${a.rname}\n${ans}${a.unit}`, C.green, FILL.green), ...dist(), ...band(156, lb(160, 180, `左 ${a.Lw}×${a.Ld} ＝ ${prod}　右 ${ans}×${a.Rd} ＝ ${ans * a.Rd} ✓`, 12, C.green, 'middle', true), lb(160, 210, `答え ${ans}${a.unit}`, 14, C.ink, 'middle', true))],
    },
  ], a.caption);
};
const seifuR004 = lever({ Ld: 50, Rd: 200, Lw: 120, unit: 'kg', lname: '石', rname: '力', caption: 'てこのつり合い（石を持ち上げる）', mistake: ['❓よくあるまちがいは？→力を加える点は石より遠い（200cm）ので、石（120kg）より軽い力ですみます。答えが120kgより重くなったら、計算をやり直しましょう。また、cmとmが混ざっていたら、同じ単位にそろえてから計算します。', 'まちがい：力を石（120kg）より重くする', '遠い（200cm）ので、力は石より軽くてすむ'] });
//REG seifu_v2_r004 seifuR004
const kaimeiR002 = lever({ Ld: 30, Rd: 20, Lw: 200, unit: 'g', lname: 'おもり', rname: 'おもり', caption: 'てこのつり合い（おもり）', mistake: ['❓よくあるまちがいは？→距離が短いほうを軽くしてしまうことです。つり合うには、距離が短い（近い）ほうを重くします。近いほど、まわす強さが小さくなるので、そのぶんおもさで補います。', 'まちがい：距離が短い右を軽くする', '近いほど重く、遠いほど軽く'] });
//REG kaimei_v2_r002 kaimeiR002

// ── 清風 電熱線の抵抗と発熱 ──
const loopL = (x0: number, y0: number, x1: number, y1: number): DiagramElement[] => [ln(x0, y0, x1, y0, C.gray), ln(x0, y1, x1, y1, C.gray), ln(x0, y0, x0, y1, C.gray), ln(x1, y0, x1, y1, C.gray)];
const heatCircuit = () => [...loopL(50, 45, 270, 125), bx(105, 111, 100, 28, '電池2個（直列）', C.blue, FILL.blue, 10), bx(240, 65, 60, 40, '電熱線', C.red, FILL.red, 11), ci(160, 45, 17, '電流計', C.purple, FILL.purple, 8), lb(160, 20, '電流計 1/2', 11, C.purple, 'middle', true)];
const seifuR002 = show([
  {
    note: '電池2個を直列につなぎ、電熱線をつなぐと、電流計は1/2を示しました（電池1個・豆電球1個のときの電流を①とします）。電熱線の抵抗は豆電球何個分か、また5分間使ったときの発熱はいくつでしょう（電池1個・豆電球1個で1分間使ったときの発熱を1とします）。',
    add: [...heatCircuit(), ...band(150, lb(160, 185, '抵抗は？　5分間の発熱は？', 13, C.ink, 'middle', true))],
  },
  {
    note: '❓なぜ「抵抗＝電池の数÷電流」と求められるの？→電流は、電池の数が多いほど増え、電流の流れにくさ（抵抗）が大きいほど減るので、電流＝電池の数÷抵抗で決まります。基準の「電池1個・豆電球1個（抵抗1）」では 1÷1＝①で、ちゃんと合います。この式を逆にすると、抵抗＝電池の数÷電流です。',
    add: [...fresh(), ...loopL(110, 25, 210, 85), bx(135, 71, 50, 26, '電池1個', C.blue, FILL.blue, 10), ci(160, 25, 10, undefined, C.main, FILL.yellow), lb(160, 10, '豆電球1個（抵抗1）', 9, C.main, 'middle', true), lb(228, 55, '電流 ①', 12, C.red, 'start', true), ...band(110, lb(160, 135, '電流 ＝ 電池の数 ÷ 抵抗', 14, C.ink, 'middle', true), lb(160, 165, '（基準：1 ÷ 1 ＝ ①）', 12, C.gray), lb(160, 195, '抵抗 ＝ 電池の数 ÷ 電流', 14, C.purple, 'middle', true))],
  },
  {
    note: '❓この問題の抵抗は？→電池は2個、電流は1/2なので、抵抗＝2÷1/2。❓÷1/2とは？→1/2でわるのは2をかけるのと同じなので 2×2＝4。電熱線の抵抗は豆電球4個ぶんです。',
    add: [...fresh(), ...heatCircuit(), ...band(150, bx(20, 165, 280, 28, '抵抗 ＝ 2 ÷ 1/2 ＝ 2 × 2', C.purple, FILL.purple, 13), bx(20, 199, 280, 28, '＝ 4（豆電球4個ぶん）', C.green, FILL.green, 14))],
  },
  {
    note: '❓発熱はどう求める？→電熱線の発熱は「電流×電流×抵抗」に比例します。❓なぜ電流を2回かけるの？→電流が2倍になると、電熱線を流れる量が2倍になり、しかも流しこむ勢いも2倍になるので、発熱は2×2＝4倍になるからです。基準の回路は ①×①×1＝1です。',
    add: [...fresh(), bx(20, 25, 280, 30, '発熱は「電流×電流×抵抗」に比例', C.purple, FILL.purple, 13), bx(20, 65, 280, 30, '基準：① × ① × 1 ＝ 1', C.gray, FILL.gray, 13), lb(160, 115, '電流が2倍 → 発熱は 2×2 ＝ 4倍', 12, C.red, 'middle', true), ...band(135, lb(160, 175, '電流を2回かけるのがポイント', 12, C.ink, 'middle', true))],
  },
  {
    note: '❓この回路の1分間の発熱は？→電流は1/2、抵抗は4。1/2×1/2＝1/4、さらに 1/4×4＝1。1分間の発熱は1です。',
    add: [...fresh(), bx(20, 30, 280, 30, '1/2 × 1/2 ＝ 1/4', C.gray, FILL.gray, 14), bx(20, 70, 280, 30, '1/4 × 4 ＝ 1', C.green, FILL.green, 15), ...band(115, lb(160, 150, '1分間の発熱は 1', 14, C.green, 'middle', true))],
  },
  {
    note: '❓5分間では？→同じ発熱が5分つづくので、1分ごとに1が5回ぶんたまります。1×5＝5。❓なぜかけ算？→時間が5倍になれば、発熱も5倍になるからです（時間に比例）。',
    add: [...fresh(), ...[0, 1, 2, 3, 4].map((i) => bx(20 + i * 56, 40, 50, 36, `${i + 1}分め\n1`, C.red, FILL.red, 11)), ...band(100, bx(40, 120, 240, 34, '1 × 5 ＝ 5', C.red, FILL.red, 16), lb(160, 185, '答え 抵抗4、発熱5', 14, C.ink, 'middle', true))],
  },
  {
    note: '❓確かめは？→抵抗4に電池2個なら、電流＝2÷4＝1/2。電流計の1/2と一致します。答えは 抵抗4（豆電球4個ぶん）、発熱5です。',
    add: [...fresh(), ...heatCircuit(), ...band(150, bx(20, 165, 280, 28, '電流 ＝ 2 ÷ 4 ＝ 1/2 ✓', C.green, FILL.green, 14), lb(160, 215, '答え 抵抗4、発熱5', 13, C.ink, 'middle', true))],
  },
], '電熱線の抵抗と発熱');
//REG seifu_v2_r002 seifuR002

// ── 清風 雷までの距離 ──
const bolt = () => pg([[48, 15], [62, 15], [54, 40], [68, 40], [40, 80], [46, 50], [34, 50]], C.main, FILL.yellow);
const thunderBase = () => [bolt(), ln(10, 112, 310, 112, C.gray), ci(280, 100, 9, undefined, C.blue, FILL.blue), lb(280, 126, '観測者', 10, C.blue, 'middle', true)];
const seifuR005 = show([
  {
    note: '音の速さを毎秒340mとします。雷が光ってから8秒後に雷鳴が聞こえました。雷は何km先で発生したでしょう。',
    add: [...thunderBase(), lb(48, 96, '光った！', 10, C.main, 'middle', true), lb(160, 130, '8秒後に ゴロゴロ と聞こえた', 11, C.blue, 'middle', true), ...band(150, lb(160, 185, '雷までの距離は何km？', 14, C.ink, 'middle', true))],
  },
  {
    note: '❓なぜ、光が届く時間は考えなくてよいの？→光は1秒間に約30万kmも進み（地球を7周半）、数kmの距離なら、ほぼ一瞬で届くからです。',
    add: [ar(74, 50, 264, 50, C.main), lb(170, 40, '光：ほぼ一瞬で届く', 11, C.main, 'middle', true), ...band(150, lb(160, 185, '光は1秒に約30万km（地球7周半）', 13, C.main, 'middle', true))],
  },
  {
    note: '❓では、光ってから聞こえるまでの8秒は何の時間？→光はほぼ一瞬なので、その8秒は、ほとんどが「音が雷から観測者まで進む時間」です。',
    add: [ar(74, 92, 264, 92, C.blue, true), lb(170, 82, '音：8秒かかって届く', 11, C.blue, 'middle', true), ...band(150, lb(160, 185, '8秒 ＝ 音が進んだ時間', 14, C.blue, 'middle', true))],
  },
  {
    note: '❓音は8秒でどれだけ進む？→音は1秒に340m進むので、8秒なら「340mが8回ぶん」。❓なぜかけ算？→同じ長さ（1秒ぶん）が8つならんでいるので、かけ算でまとめられるからです。',
    add: [...fresh(), ...Array.from({ length: 8 }, (_, i) => bx(16 + i * 37, 40, 34, 34, '340m', C.blue, FILL.blue, 9)), ...Array.from({ length: 8 }, (_, i) => lb(33 + i * 37, 90, `${i + 1}秒`, 9, C.gray, 'middle')), ...band(105, lb(160, 135, '1秒ごとに340mずつ進む', 13, C.blue, 'middle', true), lb(160, 170, '340m が 8こ', 14, C.ink, 'middle', true))],
  },
  {
    note: '❓合わせるといくつ？→340×8＝2720m。音が進んだ道のりが、そのまま雷までの距離です。',
    add: band(105, bx(40, 130, 240, 34, '340 × 8 ＝ 2720m', C.blue, FILL.blue, 16), lb(160, 195, '（まだ m のまま）', 12, C.gray)),
  },
  {
    note: '❓問題はkmで聞いています。どう直す？→1km＝1000mなので、2720mを1000でわって 2720÷1000＝2.72km。答えは2.72kmです。',
    add: band(105, bx(40, 125, 240, 34, '2720 ÷ 1000 ＝ 2.72km', C.green, FILL.green, 15), lb(160, 190, '答え 2.72km', 14, C.ink, 'middle', true)),
  },
  {
    note: '❓確かめは？→2720÷340＝8で、8秒と一致します。目安として「3秒で約1km」（340×3＝1020m）と覚えておくと、8秒は約2.7kmと見当がつきます。',
    add: band(105, bx(20, 125, 280, 28, '2720 ÷ 340 ＝ 8秒 ✓', C.green, FILL.green, 14), bx(20, 160, 280, 28, '3秒で約1km → 8秒で約2.7km ✓', C.gray, FILL.gray, 13)),
  },
], '雷の光と音のずれ');
//REG seifu_v2_r005 seifuR005

// ── 高槻 コイルと磁石 ──
const coilParts = () => [...[0, 1, 2, 3, 4].map((i) => ci(176 + i * 12, 70, 16, undefined, C.gray, 'rgba(0,0,0,0)')), ln(176, 86, 176, 125, C.gray), ln(176, 125, 185, 125, C.gray), ln(224, 86, 224, 125, C.gray), ln(215, 125, 224, 125, C.gray), ci(200, 125, 15, '電流計', C.purple, FILL.purple, 8), lb(240, 50, 'コイル', 10, C.gray, 'start', true)];
const magnetAt = (x: number) => [bx(x, 55, 30, 30, 'S', C.blue, FILL.blue, 13), bx(x + 30, 55, 30, 30, 'N', C.red, FILL.red, 13)];
const takatsukiR002 = show([
  {
    note: '図のように、コイルに電流計をつなぎ、棒磁石を動かします。電流計のはりがふれているとき、電流が流れています。電流が流れない操作はどれでしょう。',
    add: [...coilParts(), ...magnetAt(40), ...band(150, lb(160, 185, '電流が流れないのは、どんな操作？', 13, C.ink, 'middle', true))],
  },
  {
    note: '❓どんなときに電流が流れるの？→コイルの中を通りぬける磁石の力の量が「変化しているとき」だけです。たとえば、磁石をコイルに近づけると、コイルの中の磁石の力がだんだん強くなるので、電流が流れます。',
    add: [ar(60, 105, 130, 105, C.green), lb(95, 120, '近づける', 11, C.green, 'middle', true), ...band(150, lb(160, 175, '磁石の力の量が 変わる', 13, C.green, 'middle', true), lb(160, 205, '→ 電流が流れる（○）', 14, C.green, 'middle', true))],
  },
  {
    note: '❓遠ざけるときは？→こんどはコイルの中の磁石の力がだんだん弱くなります。これも「変化」なので電流が流れます。ただし、近づけたときとは電流の向きが逆になります。',
    add: [...band(150, lb(160, 175, '遠ざける：力が弱くなる（変化）', 13, C.green, 'middle', true), lb(160, 205, '→ 電流が流れる（向きは逆）○', 13, C.green, 'middle', true))],
  },
  {
    note: '❓磁石を回しながら近づけたら？→近づくにつれて磁石の力が強くなり、向きも変わります。変化があるので、電流が流れます。',
    add: [ar(85, 52, 85, 38, C.purple), ar(85, 90, 85, 104, C.purple), lb(85, 28, '回す', 10, C.purple, 'middle', true), ...band(150, lb(160, 175, '回しながら近づける：変化あり', 13, C.green, 'middle', true), lb(160, 205, '→ 電流が流れる○', 14, C.green, 'middle', true))],
  },
  {
    note: '❓磁石をコイルの中に止めたままだと？→磁石はコイルの中にありますが、動かさなければ、コイルの中の磁石の力の量は変わりません。変化がないので、電流は流れず、電流計のはりも0のままです。',
    add: [...fresh(), ...coilParts(), ...magnetAt(170), lb(222, 128, '← 電流 0', 11, C.red, 'start', true), ...band(150, lb(160, 175, '止めたまま：変化なし', 13, C.red, 'middle', true), lb(160, 205, '→ 電流は流れない（×）', 14, C.red, 'middle', true))],
  },
  {
    note: '❓まとめると？→近づける・遠ざける・回しながら近づけるは、どれも磁石の力が変化するので電流が流れます。止めておくときだけ変化がないので、流れません。答えは「磁石をコイルの中に静止させる」です。',
    add: [...fresh(), bx(20, 20, 130, 30, '近づける ○', C.green, FILL.green, 12), bx(170, 20, 130, 30, '遠ざける ○', C.green, FILL.green, 12), bx(20, 60, 130, 30, '回しながら近づける ○', C.green, FILL.green, 10), bx(170, 60, 130, 30, '静止させる ×', C.red, FILL.red, 12), ...band(110, lb(160, 145, '電流が流れないのは「静止させる」', 13, C.red, 'middle', true))],
  },
  {
    note: '❓よくあるまちがいは？→「コイルの中に磁石があれば電流が流れる」と思うことです。大切なのは磁石があるかどうかではなく、「動いて変化しているか」です。',
    add: [...fresh(), bx(20, 30, 280, 34, 'まちがい：中に磁石があれば流れる', C.gray, FILL.gray, 13), bx(20, 76, 280, 34, '動いているあいだだけ流れる', C.green, FILL.green, 14), ...band(125, lb(160, 165, '近づける・遠ざける：向きは逆', 12, C.ink, 'middle', true), lb(160, 195, '答え：磁石を静止させる', 14, C.red, 'middle', true))],
  },
], 'コイルと磁石');
//REG takatsuki_v2_r002 takatsukiR002

// ── 灘 月の自転 ──
const MO = { cx: 160, cy: 76, R: 52 };
const mAt = (deg: number): [number, number] => [MO.cx + MO.R * Math.cos((deg * Math.PI) / 180), MO.cy - MO.R * Math.sin((deg * Math.PI) / 180)];
const moonEarth = () => [ci(MO.cx, MO.cy, MO.R, undefined, C.gray, 'rgba(0,0,0,0)'), ci(MO.cx, MO.cy, 16, '地球', C.blue, FILL.blue, 9)];
const MDEG = [0, 90, 180, 270];
// 月の中心から見た「地球の向き」へ長さ len の矢印・印
const towardEarth = (deg: number, len: number): [number, number] => {
  const [x, y] = mAt(deg);
  const dx = MO.cx - x;
  const dy = MO.cy - y;
  const d = Math.hypot(dx, dy);
  return [x + (dx / d) * len, y + (dy / d) * len];
};
const moonsFace = () => MDEG.flatMap((d) => {
  const [x, y] = mAt(d);
  const [fx, fy] = towardEarth(d, 7);
  return [ci(x, y, 11, undefined, C.gray, FILL.gray), ci(fx, fy, 3, undefined, C.red, C.red)];
});
const nandaiR03 = show([
  {
    note: '月は地球のまわりを回りながら、いつも同じ面（図の赤い●）を地球に向けています。月が1回自転するのにかかる日数（自転周期）は何日でしょう。また、なぜ同じ面を向けているのでしょう。',
    add: [...moonEarth(), ...moonsFace(), ...band(150, lb(160, 185, '月の自転周期は？なぜ同じ面？', 13, C.ink, 'middle', true))],
  },
  {
    note: '❓「いつも同じ面を向ける」とは、月がどう動いているということ？→地球のまわりを1周するあいだに、ちょうど1回自転しているということです。赤い矢印（月の中心から●の向き）の向きが、1周するあいだに、右・下・左・上と、ちょうど1回転しています。',
    add: MDEG.flatMap((d) => { const [x, y] = mAt(d); const [fx, fy] = towardEarth(d, 20); return [ar(x, y, fx, fy, C.red)]; }).concat(band(150, lb(160, 175, '公転で1周するあいだに、自転もちょうど1回', 12, C.red, 'middle', true), lb(160, 205, '→ 矢印の向きが1回転', 12, C.red))),
  },
  {
    note: '❓もし自転していなかったら？→月は向きを変えないので、●はいつも同じ方向（図では右）を向いたままです。すると地球の反対側にきたとき、●は地球と反対向きになり、うら側が見えてしまいます。',
    add: [...fresh(), ...moonEarth(), ...MDEG.flatMap((d) => { const [x, y] = mAt(d); return [ci(x, y, 11, undefined, C.gray, FILL.gray), ci(x + 7, y, 3, undefined, C.red, C.red)]; }), lb(mAt(0)[0] + 16, mAt(0)[1] - 20, 'うら側が\n見える', 10, C.red, 'start', true), ...band(150, lb(160, 175, '自転しない → ●はいつも右向き', 12, C.gray, 'middle', true), lb(160, 205, '同じ面は見えない', 12, C.red))],
  },
  {
    note: '❓では、自転周期は何日？→同じ面を向けるには、自転の周期と公転の周期が同じでなければなりません。月の公転周期は約27.3日なので、自転周期も約27.3日です。',
    add: [...fresh(), bx(20, 30, 130, 44, '公転周期\n約27.3日', C.blue, FILL.blue, 13), bx(170, 30, 130, 44, '自転周期\n約27.3日', C.green, FILL.green, 13), lb(160, 54, '＝', 18, C.ink, 'middle', true), ...band(100, lb(160, 140, '同じ面を向ける → 2つの周期が同じ', 13, C.green, 'middle', true))],
  },
  {
    note: '❓29.5日ではだめなの？→29.5日は新月から次の新月までの「満ち欠けの周期」で、月の1周（27.3日）とは別のものです。月が1周するあいだに地球も太陽のまわりを進むので、同じ形の月にもどるには、約2日よけいに回る必要があります。',
    add: [...fresh(), bx(20, 30, 130, 54, '満ち欠けの周期\n約29.5日\n（新月→新月）', C.gray, FILL.gray, 11), bx(170, 30, 130, 54, '月の公転周期\n約27.3日\n（1周）', C.blue, FILL.blue, 11), lb(160, 110, '差は約2日', 13, C.red, 'middle', true), ...band(130, lb(160, 165, '自転は「1周」と合わせる → 27.3日', 13, C.blue, 'middle', true))],
  },
  {
    note: '❓なぜ、自転と公転が同じ速さになったの？→地球の引力は、月の近い側を強く、遠い側を弱く引くので、月をわずかに引きのばします。月が速く自転していたころは、この引きのばされた部分を地球が引きもどしつづけ、ブレーキになりました。自転は少しずつおそくなり、公転と同じ速さになったところで落ち着きました。',
    add: [...fresh(), ci(60, 75, 24, '地球', C.blue, FILL.blue, 11), ci(230, 75, 22, '月', C.gray, FILL.gray, 12), ar(207, 62, 130, 62, C.red), lb(168, 52, '近い側：強く引く', 10, C.red, 'middle', true), ar(252, 92, 222, 92, C.purple), lb(250, 108, '遠い側：弱く引く', 10, C.purple, 'middle', true), ...band(135, lb(160, 165, '引きのばされた月に、ブレーキがかかりつづけた', 12, C.ink, 'middle', true), lb(160, 195, '→ 公転と同じ速さで落ち着いた', 12, C.ink))],
  },
  {
    note: '答えは、自転周期は約27.3日。地球の引力がブレーキをかけつづけ、公転と同じ速さになって落ち着いたからです。❓確かめは？→自転していなければ半周で裏側が見えます。自転が2回なら、裏側も見えます。ちょうど1回だから、同じ面だけが見えます。',
    add: [...fresh(), bx(20, 25, 280, 30, '自転しない → 半周でうら側が見える', C.gray, FILL.gray, 12), bx(20, 63, 280, 30, '自転が2回 → 表も裏も見える', C.gray, FILL.gray, 12), bx(20, 101, 280, 30, '自転がちょうど1回 → 同じ面だけ ✓', C.green, FILL.green, 12), ...band(145, lb(160, 185, '答え 約27.3日', 14, C.ink, 'middle', true))],
  },
], '月がいつも同じ面を向ける理由');
//REG nandai_rika_03 nandaiR03

// ── 灘 山の上からの雷（音の速さ） ──
const mtn = () => [pg([[90, 130], [160, 30], [230, 130]], C.main, FILL.warm), lb(160, 20, '山頂 −10℃', 11, C.ink, 'middle', true), ci(275, 122, 8, undefined, C.blue, FILL.blue), lb(275, 140, '山麓 20℃', 11, C.ink, 'middle', true), ln(10, 130, 310, 130, C.gray)];
const nandaiR07 = show([
  {
    note: '音の速さは、0℃で秒速331m、気温が1℃上がるごとに秒速0.6mずつ速くなります。山頂（−10℃）で雷が鳴り、山麓（20℃）の観測者に3秒後に聞こえました。経路全体の平均の音速を使って、山頂から観測者までの距離を求めます。',
    add: [...mtn(), ar(164, 34, 266, 116, C.red, true), lb(236, 66, '音が進む道すじ', 10, C.red, 'start', true), ...band(150, lb(160, 185, '山頂から観測者までの距離は？', 13, C.ink, 'middle', true))],
  },
  {
    note: '❓なぜ「平均の音速」を使うの？→音は山頂（−10℃）から山麓（20℃）へ進むあいだに、気温が少しずつ変わり、音の速さも少しずつ変わります。そこで、気温の変わり方が一定なら、ちょうど真ん中の気温のときの速さを、全体の平均として使えます。',
    add: [...band(150, lb(160, 175, '気温がだんだん変わる → 音の速さもだんだん変わる', 11, C.red, 'middle', true), lb(160, 205, '真ん中の気温の速さ ＝ 平均の速さ', 13, C.ink, 'middle', true))],
  },
  {
    note: '❓真ん中の気温は何℃？→−10℃から20℃までの幅は30℃です。その半分は15℃なので、真ん中は−10℃から15℃上がった5℃です。数直線では、−10と20のちょうど真ん中が5です。',
    add: [...fresh(), ln(40, 70, 280, 70, C.gray, false, 2), ci(40, 70, 4, undefined, C.blue, C.blue), ci(120, 70, 3, undefined, C.gray, C.gray), ci(160, 70, 5, undefined, C.red, C.red), ci(280, 70, 4, undefined, C.main, C.main), lb(40, 55, '−10℃', 11, C.blue, 'middle', true), lb(120, 55, '0℃', 10, C.gray, 'middle'), lb(160, 55, '5℃', 12, C.red, 'middle', true), lb(280, 55, '20℃', 11, C.main, 'middle', true), ln(40, 90, 280, 90, C.purple), lb(160, 103, '幅 30℃', 10, C.purple, 'middle', true), ...band(115, lb(160, 140, '30 ÷ 2 ＝ 15（−10℃から15℃上がる）', 12, C.ink, 'middle', true), lb(160, 170, '真ん中の気温は 5℃', 14, C.red, 'middle', true))],
  },
  {
    note: '❓5℃のときの音速は？→0℃では秒速331mで、そこから気温が5℃上がっています。1℃上がるごとに0.6mずつ速くなるので、5℃ぶんでは 0.6×5＝3m速くなります。',
    add: [...fresh(), bx(20, 25, 280, 30, '0℃のとき 秒速331m', C.gray, FILL.gray, 13), bx(20, 63, 280, 30, '1℃で 0.6m → 5℃で 0.6×5 ＝ 3m', C.blue, FILL.blue, 13), ...band(105, lb(160, 140, '331 ＋ 3 ＝ 秒速334m', 15, C.green, 'middle', true))],
  },
  {
    note: '❓では、距離は？→平均の速さは秒速334m、音が進んだ時間は3秒です。距離＝速さ×時間なので、334×3＝1002m。❓なぜかけ算？→1秒に334m進むのが3秒ぶんだからです。',
    add: [...fresh(), ...[0, 1, 2].map((i) => bx(20 + i * 98, 35, 92, 34, '334m', C.blue, FILL.blue, 13)), ...[0, 1, 2].map((i) => lb(66 + i * 98, 86, `${i + 1}秒め`, 10, C.gray, 'middle')), ...band(100, bx(40, 125, 240, 34, '334 × 3 ＝ 1002m', C.green, FILL.green, 16), lb(160, 190, '答え 約1002m', 14, C.ink, 'middle', true))],
  },
  {
    note: '❓確かめは？→−10℃の音速は 331−0.6×10＝325m/秒、20℃の音速は 331＋0.6×20＝343m/秒です。334は、この2つのちょうど真ん中（325と343の真ん中）にあり、平均の速さとして正しいです。',
    add: [...fresh(), ln(40, 70, 280, 70, C.gray, false, 2), ci(40, 70, 4, undefined, C.blue, C.blue), ci(160, 70, 5, undefined, C.red, C.red), ci(280, 70, 4, undefined, C.main, C.main), lb(40, 55, '325', 11, C.blue, 'middle', true), lb(160, 55, '334', 12, C.red, 'middle', true), lb(280, 55, '343', 11, C.main, 'middle', true), lb(40, 90, '−10℃の音速', 9, C.blue, 'middle'), lb(160, 90, '平均', 10, C.red, 'middle', true), lb(280, 90, '20℃の音速', 9, C.main, 'middle'), ...band(115, lb(160, 140, '325 と 343 の真ん中は 334 ✓', 13, C.green, 'middle', true), lb(160, 170, '1002÷3 ＝ 334 ✓', 13, C.green, 'middle', true))],
  },
  {
    note: '答えは約1002mです。順番は、①真ん中の気温5℃を出す、②その気温の音速334m/秒を出す、③334×3で距離を出す、の3つです。',
    add: [...fresh(), ...stack(['真ん中の気温 5℃', '音速 331＋0.6×5 ＝ 334m/秒', '距離 334×3 ＝ 1002m'], 50, 220, 20, { h: 30, gap: 18, color: C.blue, fill: FILL.blue, size: 12 }).flat(), ...band(165, lb(160, 195, '答え 約1002m', 15, C.ink, 'middle', true))],
  },
], '気温がちがう山での音の速さ');
//REG nandai_rika_07 nandaiR07

// ── 大阪桐蔭 地層の重なりと水深 ──
const SB = { x0: 70, x1: 300, y0: 62, y1: 134 };
const seaY = (x: number) => SB.y0 + ((x - SB.x0) * (SB.y1 - SB.y0)) / (SB.x1 - SB.x0);
const seaBase = () => [pg([[10, 40], [70, 40], [70, 62], [10, 62]], C.main, FILL.warm), lb(40, 52, '陸', 10, C.ink, 'middle', true), pg([[70, 40], [300, 40], [300, 134], [70, 62]], C.blue, FILL.blue), lb(275, 52, '海', 10, C.blue, 'middle', true)];
const gravel = () => [84, 96, 108, 120].map((x, i) => ci(x, seaY(x) - 4 - (i % 2), 4, undefined, C.main, FILL.warm));
const sand = () => [150, 160, 170, 180, 190].map((x, i) => ci(x, seaY(x) - 3 - (i % 2), 2.5, undefined, C.main, FILL.yellow));
const mud = () => [230, 242, 254, 266, 278].map((x) => ln(x - 6, seaY(x) - 2, x + 6, seaY(x) - 2, C.gray, false, 2));
const strataCol = () => [bx(250, 28, 50, 26, '泥岩', C.gray, FILL.gray, 11), bx(250, 54, 50, 26, '砂岩', C.main, FILL.yellow, 11), bx(250, 80, 50, 26, 'れき岩', C.main, FILL.warm, 11)];
const toinR004 = show([
  {
    note: 'ある地層を観察すると、下から順に「れき岩→砂岩→泥岩」と重なっていました。この地層ができたとき、海の環境はどう変わったのでしょう。',
    add: [...strataCol(), lb(275, 16, '地層', 10, C.gray, 'middle', true), ...band(150, lb(160, 185, '下から れき岩 → 砂岩 → 泥岩', 13, C.ink, 'middle', true))],
  },
  {
    note: '❓なぜ、つぶの大きさから水深が分かるの？→川が運んできた土砂は、重い大きなつぶ（れき）ほど、岸の近くで先にしずみます。細かい泥は軽いので、沖の遠くまで運ばれます。',
    add: [...fresh(), ...seaBase(), ...gravel(), ...sand(), ...mud(), lb(100, 146, 'れき', 11, C.main, 'middle', true), lb(170, 146, '砂', 11, C.main, 'middle', true), lb(255, 146, '泥', 11, C.gray, 'middle', true), lb(100, 22, '岸に近い（浅い）', 10, C.main, 'middle', true), lb(250, 22, '岸から遠い（深い）', 10, C.blue, 'middle', true)],
  },
  {
    note: '❓地層はどちらが古いの？→地層は下から順に積み重なるので、下ほど古く、上ほど新しくなります。この地層は、れき岩がいちばん古く、泥岩がいちばん新しいのです。',
    add: [...fresh(), ...strataCol(), ar(232, 100, 232, 34, C.red), lb(226, 66, '古→新', 11, C.red, 'end', true), lb(275, 16, '地層', 10, C.gray, 'middle', true), ...band(125, lb(160, 155, '下ほど古く、上ほど新しい', 13, C.red, 'middle', true))],
  },
  {
    note: '❓すると、時間がたつにつれて、つぶの大きさはどう変わった？→古い順に、れき→砂→泥と、つぶがだんだん小さくなっています。',
    add: [...band(125, bx(20, 140, 80, 30, 'れき（大）', C.main, FILL.warm, 11), ar(104, 155, 122, 155, C.red), bx(126, 140, 70, 30, '砂（中）', C.main, FILL.yellow, 11), ar(200, 155, 218, 155, C.red), bx(222, 140, 78, 30, '泥（小）', C.gray, FILL.gray, 11), lb(160, 195, '時間がたつと、つぶが小さくなる', 13, C.red, 'middle', true))],
  },
  {
    note: '❓つぶが小さくなるのは、場所がどうなったということ？→つぶが小さいほど、岸から遠い沖（深い海）にたまります。つまり、この場所は岸に近い浅い海から、岸から遠い深い海へと、だんだん水深が深くなっていきました。',
    add: [...fresh(), ...seaBase(), ...gravel(), ...sand(), ...mud(), ar(100, 55, 255, 92, C.red), lb(175, 62, '水深がだんだん深く', 11, C.red, 'middle', true), ...band(150, lb(160, 185, '答え：しだいに水深が深くなった', 13, C.green, 'middle', true))],
  },
  {
    note: '❓よくあるまちがいは？→時間の順序を逆に読んでしまうことです。もし下から泥→砂→れきの順なら、つぶが大きくなるので、水深が浅くなったことになります。この問題は、れきが下（古い）なので深くなったのです。',
    add: [...fresh(), bx(20, 25, 280, 34, 'この問題：下から れき → 砂 → 泥', C.green, FILL.green, 13), bx(20, 69, 280, 34, '逆（下から 泥 → 砂 → れき）なら浅くなる', C.gray, FILL.gray, 12), ...band(115, lb(160, 150, '古い（下）→ 新しい（上）の順に読む', 13, C.red, 'middle', true))],
  },
  {
    note: 'まとめです。つぶが小さくなる＝沖・深い海、つぶが大きくなる＝岸に近い浅い海。下から上へ読んで、つぶが小さくなったので、「海岸から遠い深い海へと、しだいに水深が深くなっていった」が正解です。',
    add: [...fresh(), bx(20, 20, 130, 60, 'つぶが小さくなる\n↓\n水深が深くなる', C.blue, FILL.blue, 11), bx(170, 20, 130, 60, 'つぶが大きくなる\n↓\n水深が浅くなる', C.gray, FILL.gray, 11), ...band(100, lb(160, 120, 'れき→砂→泥 は つぶが小さくなる', 13, C.ink, 'middle', true), lb(160, 155, '答え：しだいに水深が深くなった', 14, C.blue, 'middle', true))],
  },
], '地層のつぶの大きさと水深');
//REG toin_top2_rika_004 toinR004

// ── 大阪桐蔭 豆電球3個の直列と並列 ──
const bulb = (x: number, y: number) => ci(x, y, 9, undefined, C.main, FILL.yellow);
const cellBox = (x: number, y: number, w: number, h: number) => bx(x, y, w, h, '電池', C.blue, FILL.blue, 9);
const seriesCircuit = () => [...loopL(20, 40, 140, 125), bulb(45, 40), bulb(80, 40), bulb(115, 40), cellBox(65, 111, 40, 28), lb(80, 16, '回路A（直列）', 11, C.red, 'middle', true)];
const parallelCircuit = () => [ln(190, 45, 190, 115, C.gray), ln(300, 45, 300, 115, C.gray), ...[45, 80, 115].flatMap((y) => [ln(190, y, 240, y, C.gray), ln(258, y, 300, y, C.gray), bulb(249, y)]), cellBox(175, 68, 30, 24), lb(245, 16, '回路B（並列）', 11, C.green, 'middle', true)];
const toinR005 = show([
  {
    note: '同じ豆電球3個と電池1個で、豆電球を直列につないだ回路Aと、並列につないだ回路Bを作ります。豆電球の明るさと、電池の持ちをくらべます。',
    add: [...seriesCircuit(), ...parallelCircuit(), ...band(150, lb(160, 185, 'A（直列）とB（並列）をくらべる', 13, C.ink, 'middle', true))],
  },
  {
    note: '❓直列だと、電流はどうなる？→電流の通り道が1本で、豆電球を3個つづけて通りぬけなければなりません。電流の流れにくさは、豆電球1個のときの3倍になります。電池1個ぶんで、流れにくさ3なので、電流は 1÷3＝1/3。直列では、どの豆電球にも同じ1/3の電流が流れます。',
    add: [...band(150, bx(20, 162, 280, 28, '回路A：電流 ＝ 電池1個 ÷ 流れにくさ3 ＝ 1/3', C.red, FILL.red, 12), lb(160, 210, '豆電球1個ごとに 1/3 ずつ', 12, C.red, 'middle', true))],
  },
  {
    note: '❓並列だと、電流はどうなる？→豆電球ごとに、電池と直接つながる道が3本あります。どの豆電球にも、豆電球1個だけのときと同じ電流①が流れます。電池からは、その3本ぶんの 3 が流れ出します。',
    add: [...band(150, bx(20, 162, 280, 28, '回路B：豆電球1個ごとに ①、電池からは合計 3', C.green, FILL.green, 12), lb(160, 210, '豆電球1個だけのときと同じ', 12, C.green, 'middle', true))],
  },
  {
    note: '❓明るさはどちらが明るい？→豆電球は、流れる電流が大きいほど明るく光ります。回路Aは1個に1/3、回路Bは1個に①。回路Aの豆電球のほうが暗いことが分かります。',
    add: [...fresh(), bx(20, 25, 130, 40, '回路A\n豆電球1個に 1/3', C.red, FILL.red, 11), bx(170, 25, 130, 40, '回路B\n豆電球1個に ①', C.green, FILL.green, 11), lb(160, 45, '＜', 20, C.ink, 'middle', true), ...band(90, lb(160, 125, '電流が大きいほど明るい', 13, C.ink, 'middle', true), lb(160, 160, '→ A の豆電球は B より暗い', 14, C.red, 'middle', true))],
  },
  {
    note: '❓電池の持ちは？→電池は、そこから流れ出る電流が大きいほど、はやく使いきります。電池から出る電流は、回路Aが1/3、回路Bが3。Bは、Aの 3÷1/3＝9倍の電流が流れ出すので、Bのほうが、はやく電池がなくなります。',
    add: [...fresh(), bx(20, 25, 130, 40, '回路A\n電池から 1/3', C.red, FILL.red, 11), bx(170, 25, 130, 40, '回路B\n電池から 3', C.green, FILL.green, 11), ...band(90, lb(160, 120, 'B は A の 3 ÷ 1/3 ＝ 9倍', 13, C.ink, 'middle', true), lb(160, 155, '電流が大きいほど電池はすぐなくなる', 12, C.ink), lb(160, 185, '→ 電池は A のほうが長持ち', 14, C.red, 'middle', true))],
  },
  {
    note: 'まとめです。回路Aは、豆電球が暗く、電池は長持ち。回路Bは、豆電球が明るく、電池はすぐなくなる。答えは「回路Aの豆電球は回路Bの豆電球より暗く、電池は回路Aの方が長持ちする」です。',
    add: [...fresh(), bx(20, 25, 280, 34, 'A（直列）：暗い ・ 電池 長持ち', C.red, FILL.red, 13), bx(20, 69, 280, 34, 'B（並列）：明るい ・ 電池 すぐなくなる', C.green, FILL.green, 13), ...band(120, lb(160, 155, '明るさと電池の持ちは、逆になる', 13, C.ink, 'middle', true))],
  },
  {
    note: '❓よくあるまちがいは？→豆電球の数が多いほど明るい、と考えることです。直列では数が多いほど暗くなり、並列では1個あたりの明るさは変わりません。確かめると、A：1÷3＝1/3、B：1個ごとに1÷1＝①で、くいちがいはありません。',
    add: [...fresh(), bx(20, 25, 280, 34, 'まちがい：豆電球が多いほど明るい', C.gray, FILL.gray, 13), bx(20, 69, 280, 34, '直列は多いほど暗い　並列は変わらない', C.green, FILL.green, 12), ...band(120, lb(160, 150, '確かめ A：1÷3＝1/3　B：1÷1＝①', 12, C.green, 'middle', true), lb(160, 180, '答え：Aは暗く、電池はAが長持ち', 13, C.ink, 'middle', true))],
  },
], '豆電球の直列と並列');
//REG toin_top2_rika_005 toinR005

export const figuresSchoolChugaku04: Record<string, Figure> = {
  'kindai_v2_s002': kindaiS002,
  'seifu_v2_s003': seifuS003,
  'seifu_v2_s005': seifuS005,
  'takatsuki_v2_s001': takatsukiS001,
  'takatsuki_v2_s003': takatsukiS003,
  'takatsuki_v2_s006': takatsukiS006,
  'kaimei_v2_s006': kaimeiS006,
  'kaimei_v2_s008': kaimeiS008,
  'toin_top1_sansu_001': toinTop1,
  'seifu_v2_s008': seifuS008,
  'toin_v2_s001': toinS001,
  'toin_v2_s002': toinS002,
  'toin_v2_s005': toinS005,
  'josejogakuen_sansu_005': josejoS005,
  'josejogakuen_sansu_012': josejoS012,
  'josejogakuen_sansu_001': josejoS001,
  'josejogakuen_sansu_007': josejoS007,
  'kindai_v2_r001': kindaiR001,
  'kindai_v2_r004': kindaiR004,
  'seifu_v2_r001': seifuR001,
  'seifu_v2_r004': seifuR004,
  'kaimei_v2_r002': kaimeiR002,
  'seifu_v2_r002': seifuR002,
  'seifu_v2_r005': seifuR005,
  'takatsuki_v2_r002': takatsukiR002,
  'nandai_rika_03': nandaiR03,
  'nandai_rika_07': nandaiR07,
  'toin_top2_rika_004': toinR004,
  'toin_top2_rika_005': toinR005,
};
