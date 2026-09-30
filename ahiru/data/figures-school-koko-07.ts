// 高校受験（入試傾向問題）の動く図解スライド。キーは問題 id。
// 「❓なぜ？→答え→❓では、なぜ？」の連鎖で、根っこまでたどる。図は上半分、下の帯に式。
import type { Figure } from './figures';
import type { DiagramElement } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, sc, show, band, fresh } from './diagram-kit';

type E = DiagramElement;
type P = [number, number];

const GT = 'rgba(22,163,74,0.18)';
const BT = 'rgba(2,132,199,0.15)';
const RT = 'rgba(225,29,72,0.15)';
const PT = 'rgba(147,51,234,0.15)';
const YT = 'rgba(250,204,21,0.28)';

const eb = (y: number, t: string, color: string, fill: string, size = 14, h = 30, x = 20, w = 280): E => bx(x, y, w, h, t, color, fill, size);
const tx = (y: number, t: string, size = 12, color: string = C.gray, bold = false): E => lb(160, y, t, size, color, 'middle', bold);
const T = (top: E[], bottom: E[]): E[] => [...top, ...band(140, ...bottom)];
const F = (top: E[], bottom: E[]): E[] => fresh(...top, ...bottom);
// 直角のしるし（頂点 p から、単位ベクトル d1・d2 の向きに s だけ進む小さな四角）
const rt = (p: P, d1: P, d2: P, s = 8): E =>
  pg(
    [p, [p[0] + d1[0] * s, p[1] + d1[1] * s], [p[0] + (d1[0] + d2[0]) * s, p[1] + (d1[1] + d2[1]) * s], [p[0] + d2[0] * s, p[1] + d2[1] * s]],
    C.gray,
    'rgba(110,100,92,0.10)',
  );

// ════════════════════════════════════════════
// 1. 滑車と仕事（meidai_rika_12）
// ════════════════════════════════════════════
const fixedScene = (): E[] => [
  ln(110, 8, 210, 8, C.gray, false, 3),
  ln(160, 8, 160, 16, C.gray),
  ci(160, 30, 14, undefined, C.gray, FILL.gray),
  ln(146, 30, 146, 95, C.blue, false, 2),
  ln(174, 30, 174, 118, C.blue, false, 2),
  bx(116, 95, 60, 36, '20kg', C.main, FILL.warm, 13),
  ar(174, 82, 174, 122, C.red),
  lb(184, 104, '引く力', 11, C.red, 'start', true),
  ar(102, 128, 102, 98, C.green),
  lb(96, 113, '3m', 12, C.green, 'end', true),
];
const movableScene = (): E[] => [
  ln(100, 8, 220, 8, C.gray, false, 3),
  ln(140, 8, 140, 80, C.blue, false, 2),
  ci(160, 80, 20, undefined, C.gray, FILL.gray),
  ln(180, 80, 180, 34, C.blue, false, 2),
  ar(180, 44, 180, 14, C.red),
  ln(160, 100, 160, 108, C.blue, false, 2),
  bx(122, 108, 76, 26, '荷物 200N', C.main, FILL.warm, 12),
  lb(130, 55, 'ひも①', 11, C.blue, 'end'),
  lb(190, 62, 'ひも②', 11, C.blue, 'start'),
];

const meidaiRika12 = show(
  [
    {
      note: '質量20kgの荷物を、定滑車（かたむかない固定した滑車）で3m持ち上げます。重力加速度は10m/s²。仕事、定滑車のはたらき、動滑車にかえたときの力を考えます。',
      add: T(fixedScene(), [eb(148, '20kg の荷物を 3m 持ち上げる', C.main, FILL.warm, 14), tx(198, '問1 仕事　問2 定滑車のはたらき　問3 動滑車', 12)]),
    },
    {
      note: '❓ まず、荷物の重さは何N？ g＝10 は「1kgの物体に10Nの重力がはたらく」という意味です。20kgなら20倍で、持ち上げるには200Nの力が必要です。',
      add: F([bx(120, 20, 80, 50, '20kg', C.main, FILL.warm, 14), ar(160, 72, 160, 118, C.red), lb(172, 100, '重力 200N', 12, C.red, 'start', true)], [eb(150, '20 × 10 ＝ 200N', C.red, FILL.red, 15), tx(200, '1kg あたり 10N の重力', 12)]),
    },
    {
      note: '❓ 仕事って何？ 仕事は「力 × 動かした距離」です。重い物ほど、また遠くまで動かすほど、たくさん仕事をしたことになるので、この2つをかけ算します。',
      add: F(
        [bx(20, 30, 80, 50, '力 200N', C.red, FILL.red, 14), lb(114, 55, '×', 22, C.ink, 'middle', true), bx(128, 30, 80, 50, '距離 3m', C.green, FILL.green, 14), lb(222, 55, '＝', 22, C.ink, 'middle', true), bx(236, 30, 68, 50, '仕事', C.blue, FILL.blue, 14)],
        [eb(150, '仕事 ＝ 力 × 距離', C.blue, FILL.blue, 15), tx(200, '重いほど・遠いほど、仕事は大きい', 12)],
      ),
    },
    {
      note: '荷物は200Nの力で3m上がるので、仕事は 200×3＝600J（ジュール）です。これが問1の答えです。',
      add: F(
        [bx(110, 96, 100, 36, '20kg（はじめ）', C.gray, FILL.gray, 11), bx(110, 14, 100, 36, '20kg（上がった）', C.main, FILL.warm, 11), ar(160, 94, 160, 52, C.green), lb(172, 75, '3m', 13, C.green, 'start', true)],
        [eb(150, '200N × 3m ＝ 600J', C.blue, FILL.blue, 15), tx(200, '問1の答え 600J', 13, C.blue, true)],
      ),
    },
    {
      note: '❓ 定滑車を使うと、力の大きさはどうなる？ 定滑車は、支点（軸）から左右に同じ長さの腕をもつ、てこと同じです。腕の長さが同じなので、引く力も荷物の重さと同じ200Nになります。',
      add: F(
        [ci(160, 62, 34, undefined, C.gray, FILL.gray), ln(126, 62, 194, 62, C.blue, false, 3), ci(160, 62, 3, undefined, C.ink, C.ink), ar(126, 66, 126, 112, C.red), ar(194, 66, 194, 112, C.red), lb(126, 126, '荷物 200N', 11, C.red, 'middle', true), lb(194, 126, '引く力', 11, C.red, 'middle', true), lb(160, 12, '腕の長さが左右で同じ', 11, C.blue, 'middle', true)],
        [eb(150, '腕が同じ → 力も同じ 200N', C.blue, FILL.blue, 14), tx(200, '定滑車は力の大きさを変えない', 12)],
      ),
    },
    {
      note: '❓ では、なぜ向きが変わるの？ ひもが輪を回りこむので、ひもの片方を下に引くと、反対側のひもは上に動きます。荷物をつるした側が上がるので、下向きに引いても荷物を持ち上げられます。',
      add: F(
        [ci(160, 45, 22, undefined, C.gray, FILL.gray), ln(138, 45, 138, 118, C.blue, false, 2), ln(182, 45, 182, 118, C.blue, false, 2), ar(138, 104, 138, 66, C.green), lb(128, 88, '上へ', 11, C.green, 'end', true), ar(182, 66, 182, 108, C.red), lb(192, 88, '下に引く', 11, C.red, 'start', true)],
        [eb(150, 'ひもが輪を回る → 向きが逆になる', C.green, FILL.green, 13), tx(200, '下に引くと、荷物は上がる（問2の答え）', 12)],
      ),
    },
    {
      note: '問3の動滑車です。動滑車は荷物といっしょに動く滑車で、荷物はひも2本でぶら下がっています（片方のひもは天井に固定）。',
      add: F(movableScene(), [eb(150, '荷物は、ひも2本でささえられる', C.blue, FILL.blue, 14), tx(200, '天井にとめたひもと、手で引くひも', 12)]),
    },
    {
      note: '❓ なぜ力が半分になるの？ 200Nの荷物を、2本のひもが分けてささえているからです。1本あたり100Nで足りるので、手で引く力は半分の100Nになります。',
      add: T([lb(118, 82, '100N', 12, C.red, 'end', true), lb(206, 96, '100N', 12, C.red, 'start', true)], [eb(148, '100N ＋ 100N ＝ 200N をささえる', C.red, FILL.red, 14), tx(198, '1本あたり半分（100N）でよい', 12)]),
    },
    {
      note: '❓ では、なぜ引く距離は2倍になるの？ 荷物が3m上がるには、荷物をつるす2本のひもが、それぞれ3mずつ短くならなければなりません。その合計 6m を、手でたぐることになります。',
      add: F(
        [bx(30, 26, 60, 18, '3m', C.blue, FILL.blue, 11), lb(100, 38, 'ひも①が縮む分', 11, C.blue, 'start'), bx(30, 50, 60, 18, '3m', C.blue, FILL.blue, 11), lb(100, 62, 'ひも②が縮む分', 11, C.blue, 'start'), bx(30, 92, 120, 22, '6m', C.red, FILL.red, 12), lb(160, 106, '手でたぐる長さ', 11, C.red, 'start', true)],
        [eb(150, '3m × 2本 ＝ 6m 引く', C.red, FILL.red, 15), tx(200, '力は 1/2 倍、距離は 2 倍', 13, C.red, true)],
      ),
    },
    {
      note: '動滑車でも、100N × 6m ＝ 600J で、手でする仕事の量は変わりません。力を小さくした分だけ距離が増え、ちょうど打ち消し合う。これが「仕事の原理」です。',
      add: F(
        [eb(8, '直接持ち上げる  200N × 3m ＝ 600J', C.gray, FILL.gray, 12, 34), eb(50, '定滑車  200N × 3m ＝ 600J', C.blue, FILL.blue, 12, 34), eb(92, '動滑車  100N × 6m ＝ 600J', C.red, FILL.red, 12, 34)],
        [eb(150, 'どれも 600J（仕事の原理）', C.green, FILL.green, 15), tx(200, '道具を使っても、仕事の量は変わらない', 12)],
      ),
    },
    {
      note: '答えと確かめです。問1は600J。問2は「力の大きさは変わらず、向きだけ変わる」。問3は「力は1/2倍、引く距離は2倍で、仕事の原理により仕事は同じ」。100×6＝600 と、問1の600Jが一致します。',
      add: F(
        [eb(8, '問1  600J', C.blue, FILL.blue, 14, 30), eb(44, '問2  力の大きさは同じ・向きが変わる', C.blue, FILL.blue, 12, 30), eb(80, '問3  力 1/2 倍・距離 2 倍（仕事は同じ）', C.red, FILL.red, 12, 30)],
        [eb(150, '確かめ：100 × 6 ＝ 600J ＝ 問1', C.green, FILL.green, 14), tx(200, '仕事の原理で一致', 12)],
      ),
    },
  ],
  '滑車を使っても仕事の量は変わらない',
);

// ════════════════════════════════════════════
// 2. 直角三角形の垂線と相似（nada_koko_sansu_03）
// ════════════════════════════════════════════
const bA: P = [70, 25];
const bB: P = [190, 115];
const bC: P = [70, 115];
const bP: P = [113.2, 57.4];
const bBase = (): E[] => [
  pg([bA, bB, bC], C.gray, 'rgba(14,165,233,0.06)'),
  ln(bC[0], bC[1], bP[0], bP[1], C.gray, true),
  rt(bC, [0, -1], [1, 0], 8),
  rt(bP, [-0.6, 0.8], [0.8, 0.6], 8),
  lb(62, 22, 'A', 13, C.ink, 'end', true),
  lb(198, 124, 'B', 13, C.ink, 'start', true),
  lb(60, 126, 'C', 13, C.ink, 'end', true),
  lb(122, 52, 'P', 13, C.ink, 'start', true),
  lb(60, 72, '3', 12, C.blue, 'end', true),
  lb(130, 133, '4', 12, C.blue, 'middle', true),
];

const nadaSansu03 = show(
  [
    {
      note: '直角三角形ABCで、頂点Cから斜辺ABに垂線CPを下ろします。AC＝3、BC＝4。AP、CP、△APCの面積を順に求めます。',
      add: T(bBase(), [eb(148, 'AC ＝ 3　BC ＝ 4　CP ⊥ AB', C.blue, FILL.blue, 14), tx(198, '求めるもの：AP・CP・△APC の面積', 12)]),
    },
    {
      note: '❓ まず斜辺ABは？ 直角三角形なので三平方の定理が使えます。3²＋4²＝9＋16＝25、5×5＝25だから AB＝5 です。',
      add: T([lb(142, 60, '5', 13, C.red, 'start', true)], [eb(148, '3² ＋ 4² ＝ 9 ＋ 16 ＝ 25 ＝ 5²', C.blue, FILL.blue, 14), tx(198, 'AB ＝ 5', 13, C.red, true)]),
    },
    {
      note: '❓ なぜ △APC と △ACB は相似なの？ どちらも直角をもち（∠APC＝∠ACB＝90°）、∠A を共有しています。2つの角が等しい三角形は、形が同じ（相似）になります。',
      add: T([pg([bA, bP, bC], C.green, GT), sc(bA[0], bA[1], 22, -90, -36.87, C.green, 'rgba(22,163,74,0.4)')], [eb(148, '直角が等しい ＋ ∠A が共通', C.green, FILL.green, 14), tx(198, '△APC と △ACB は相似', 13, C.green, true)]),
    },
    {
      note: '❓ 相似だと、何が言えるの？ 対応する辺の比が、すべて等しくなります。A→A、P→C、C→B と対応するので、AP：AC ＝ AC：AB です。',
      add: T([ln(bA[0], bA[1], bP[0], bP[1], C.red, false, 3.5), ln(bA[0], bA[1], bC[0], bC[1], C.blue, false, 3.5)], [eb(148, 'AP : AC ＝ AC : AB', C.blue, FILL.blue, 15), tx(198, '対応： A→A　P→C　C→B', 12)]),
    },
    {
      note: '問1。AP：3 ＝ 3：5 に AB＝5 を入れます。比の内側の積と外側の積は等しいので、AP×5 ＝ 3×3、AP ＝ 9/5 です。',
      add: T([lb(100, 38, '9/5', 12, C.red, 'start', true)], [eb(148, 'AP : 3 ＝ 3 : 5', C.blue, FILL.blue, 15, 28), tx(184, 'AP × 5 ＝ 3 × 3 ＝ 9', 12), tx(210, 'AP ＝ 9/5 ＝ 1.8', 14, C.red, true)]),
    },
    {
      note: '❓ では CP は？ △CPB も △ACB と相似です（∠B が共通、∠CPB＝∠ACB＝90°）。対応は C→A、P→C、B→B なので、CP：AC ＝ BC：AB です。',
      add: T([pg([bC, bP, bB], C.purple, PT), ln(bC[0], bC[1], bP[0], bP[1], C.red, false, 2)], [eb(148, 'CP : 3 ＝ 4 : 5', C.purple, FILL.purple, 15), tx(198, '対応： C→A　P→C　B→B', 12)]),
    },
    {
      note: 'CP：3 ＝ 4：5 から、CP×5 ＝ 3×4 ＝ 12、CP ＝ 12/5 です。',
      add: T([ln(bC[0], bC[1], bP[0], bP[1], C.red, false, 3.5), lb(102, 92, '12/5', 12, C.red, 'start', true)], [eb(148, 'CP × 5 ＝ 3 × 4 ＝ 12', C.purple, FILL.purple, 14, 28), tx(190, 'CP ＝ 12/5 ＝ 2.4', 14, C.red, true)]),
    },
    {
      note: '別の方法で確かめます。❓ なぜ面積を2通りで表せるの？ △ABC は1つの三角形で、底辺を BC にするか AB にするかで「高さ」の見方が変わるだけなので、面積は同じです。6＝5×CP÷2 から CP＝12/5 となり、相似で求めた値と一致します。',
      add: F(
        [
          pg([[30, 110], [30, 62], [94, 110]], C.gray, BT),
          lb(22, 88, '3', 12, C.blue, 'end', true),
          lb(62, 124, '4', 12, C.blue, 'middle', true),
          lb(62, 136, '底辺BC 高さAC', 10, C.gray, 'middle'),
          pg([[180, 110], [180, 62], [244, 110]], C.gray, BT),
          ln(180, 110, 203.04, 79.28, C.red, true, 2),
          lb(212, 136, '底辺AB 高さCP', 10, C.gray, 'middle'),
          lb(212, 124, '5', 12, C.blue, 'middle', true),
          lb(150, 86, '＝', 18, C.ink, 'middle', true),
        ],
        [eb(148, '4 × 3 ÷ 2 ＝ 6 ＝ 5 × CP ÷ 2', C.green, FILL.green, 14), tx(198, 'CP ＝ 12 ÷ 5 ＝ 12/5', 13, C.green, true)],
      ),
    },
    {
      note: '問3。△APC は P が直角なので、AP と CP が「底辺と高さ」です。面積は 底辺×高さ÷2 ＝ 9/5 × 12/5 ÷ 2 ＝ 54/25 です。',
      add: F([...bBase(), pg([bA, bP, bC], C.green, GT), ln(bA[0], bA[1], bP[0], bP[1], C.red, false, 3), ln(bC[0], bC[1], bP[0], bP[1], C.red, false, 3), lb(100, 38, '9/5', 12, C.red, 'start', true), lb(102, 92, '12/5', 12, C.red, 'start', true)], [eb(148, '9/5 × 12/5 ÷ 2', C.green, FILL.green, 14, 28), tx(186, '＝ 108/25 ÷ 2', 12), tx(210, '＝ 54/25', 14, C.red, true)]),
    },
    {
      note: '検算その1。❓ なぜ面積は AP：AB で決まるの？ △APC と △ABC は、高さ CP が共通だからです。高さが同じなら面積比は底辺の比になり、9/5：5 ＝ 9：25。6×9/25 ＝ 54/25 で一致します。',
      add: F([...bBase(), pg([bA, bP, bC], C.green, GT), ln(bA[0], bA[1], bP[0], bP[1], C.green, false, 3), lb(100, 38, '9/5', 12, C.green, 'start', true)], [eb(148, '△APC : △ABC ＝ AP : AB ＝ 9 : 25', C.green, FILL.green, 13), tx(198, '6 × 9/25 ＝ 54/25 で一致', 13, C.green, true)]),
    },
    {
      note: '検算その2。△APC に三平方の定理を使うと、AP²＋CP² ＝ 81/25＋144/25 ＝ 225/25 ＝ 9 ＝ 3² ＝ AC² で、ぴったり合います。',
      add: F([...bBase(), pg([bA, bP, bC], C.green, GT), lb(100, 38, '9/5', 12, C.red, 'start', true), lb(102, 92, '12/5', 12, C.red, 'start', true)], [eb(148, 'AP² ＋ CP² ＝ 81/25 ＋ 144/25', C.green, FILL.green, 13, 28), tx(190, '＝ 225/25 ＝ 9 ＝ AC²', 13, C.green, true)]),
    },
    {
      note: '答え。問1 AP＝9/5、問2 CP＝12/5、問3 △APCの面積＝54/25。',
      add: F([eb(8, '問1  AP ＝ 9/5', C.blue, FILL.blue, 15, 32), eb(50, '問2  CP ＝ 12/5', C.blue, FILL.blue, 15, 32), eb(92, '問3  △APC ＝ 54/25', C.red, FILL.red, 15, 32)], [eb(150, '相似と面積比、どちらでも一致', C.green, FILL.green, 14), tx(200, '三平方でも確かめ済み', 12)]),
    },
  ],
  '直角三角形の垂線と相似',
);

// ════════════════════════════════════════════
// 3. 正四面体（nada_koko_sansu_07）
// ════════════════════════════════════════════
const tV: P = [150, 18];
const tA: P = [55, 108];
const tB: P = [175, 128];
const tC: P = [265, 92];
const tetraFig = (): E[] => [
  pg([tV, tA, tB], C.gray, 'rgba(14,165,233,0.10)'),
  pg([tV, tB, tC], C.gray, 'rgba(14,165,233,0.05)'),
  ln(tA[0], tA[1], tC[0], tC[1], C.gray, true),
  ln(tV[0], tV[1], tA[0], tA[1], C.ink),
  ln(tV[0], tV[1], tB[0], tB[1], C.ink),
  ln(tV[0], tV[1], tC[0], tC[1], C.ink),
  ln(tA[0], tA[1], tB[0], tB[1], C.ink),
  ln(tB[0], tB[1], tC[0], tC[1], C.ink),
  lb(150, 12, 'V', 13, C.ink, 'middle', true),
  lb(46, 112, 'A', 13, C.ink, 'end', true),
  lb(188, 134, 'B', 13, C.ink, 'start', true),
  lb(274, 94, 'C', 13, C.ink, 'start', true),
  lb(92, 58, '6', 12, C.blue, 'end', true),
  lb(108, 126, '6', 12, C.blue, 'end', true),
  lb(226, 118, '6', 12, C.blue, 'start', true),
];
// 真上から見た底面（正三角形・1辺6を 22px ずつ）
const topTri = (): E[] => [
  pg([[160, 18], [94, 132], [226, 132]], C.gray, 'rgba(14,165,233,0.08)'),
  lb(160, 12, 'A', 13, C.ink, 'middle', true),
  lb(86, 136, 'B', 13, C.ink, 'end', true),
  lb(234, 136, 'C', 13, C.ink, 'start', true),
];

const nadaSansu07 = show(
  [
    {
      note: '1辺が6の正四面体です。頂点Vから底面ABCに垂直な線を下ろしたときの高さ、体積、表面積を求めます。',
      add: T(tetraFig(), [eb(148, '1辺 6 の正四面体', C.blue, FILL.blue, 15), tx(198, '問1 高さ　問2 体積　問3 表面積', 12)]),
    },
    {
      note: '❓ まず底面は？ 正四面体は4つの面がすべて同じ大きさの正三角形です。底面は1辺6の正三角形。真上から見た図を描きます。',
      add: F([...topTri(), lb(116, 70, '6', 12, C.blue, 'end', true), lb(204, 70, '6', 12, C.blue, 'start', true), lb(160, 126, '6', 12, C.blue, 'middle', true)], [eb(150, 'どの面も 1辺 6 の正三角形', C.blue, FILL.blue, 14), tx(200, '真上から見ると、底面の形がそのまま見える', 12)]),
    },
    {
      note: '❓ 高さの足（Vの真下の点G）は底面のどこ？ VA＝VB＝VC＝6 で、VG は共通です。直角三角形 VGA・VGB・VGC に三平方の定理を使うと、GA＝GB＝GC がいえます。3つの頂点から同じ距離の点は、正三角形の中心（重心）です。',
      add: F([...topTri(), ci(160, 94, 3, undefined, C.red, C.red), lb(170, 94, 'G', 13, C.red, 'start', true), ln(160, 94, 160, 18, C.red, false, 2), ln(160, 94, 94, 132, C.red, false, 2), ln(160, 94, 226, 132, C.red, false, 2)], [eb(148, 'GA ＝ GB ＝ GC', C.red, FILL.red, 15), tx(198, 'VA＝VB＝VC、VG共通 → GAも同じ', 12)]),
    },
    {
      note: '❓ GAを出す前に、正三角形の高さAMは？ BCの中点をMとすると、半分の直角三角形は辺が 3、6、3√3。確かめると 3²＋(3√3)²＝9＋27＝36＝6² です。AM＝3√3。',
      add: F([...topTri(), ln(160, 18, 160, 132, C.blue, true, 2), lb(160, 144, 'M', 12, C.ink, 'middle', true), lb(127, 126, '3', 11, C.blue, 'middle', true), lb(193, 126, '3', 11, C.blue, 'middle', true), lb(168, 70, 'AM', 12, C.blue, 'start', true), rt([160, 132], [0, -1], [1, 0], 8)], [eb(148, '3² ＋ AM² ＝ 6²', C.blue, FILL.blue, 15, 28), tx(190, 'AM² ＝ 36 − 9 ＝ 27、AM ＝ 3√3', 13, C.blue, true)]),
    },
    {
      note: '❓ GAはどれだけ？ 重心Gは中線AMを 2：1 に分けます（中学で習う重心の性質）。だから AG＝AM×2/3＝3√3×2/3＝2√3、GM＝√3 です。',
      add: F([...topTri(), ln(160, 18, 160, 132, C.blue, true, 2), ci(160, 94, 3, undefined, C.red, C.red), lb(170, 94, 'G', 13, C.red, 'start', true), bx(166, 40, 34, 16, '2√3', C.red, '#FFFFFF', 11), lb(170, 118, '√3', 12, C.blue, 'start', true), lb(160, 144, 'M', 12, C.ink, 'middle', true)], [eb(148, 'AG ＝ 3√3 × 2/3 ＝ 2√3', C.red, FILL.red, 14), tx(198, 'AG : GM ＝ 2 : 1', 12)]),
    },
    {
      note: '❓ 高さ VG は？ 真横から見ると、V・G・A は G が直角の直角三角形です。VA＝6（辺の長さ）、GA＝2√3 なので、VG²＋(2√3)²＝6²。(2√3)²＝4×3＝12 なので VG²＝36−12＝24。',
      add: F([pg([[90, 122], [166, 122], [90, 14]], C.gray, BT), rt([90, 122], [0, -1], [1, 0], 8), lb(82, 70, 'h', 13, C.red, 'end', true), lb(128, 134, '2√3', 12, C.blue, 'middle', true), lb(136, 62, '6', 12, C.blue, 'start', true), lb(84, 128, 'G', 12, C.ink, 'end', true), lb(172, 126, 'A', 12, C.ink, 'start', true), lb(90, 10, 'V', 12, C.ink, 'middle', true)], [eb(148, 'h² ＋ (2√3)² ＝ 6²', C.blue, FILL.blue, 15, 28), tx(190, 'h² ＝ 36 − 12 ＝ 24', 13, C.blue, true)]),
    },
    {
      note: '❓ √24 はどう簡単にする？ 24＝4×6 で、4＝2×2 は2乗の数なので外に 2 として出せます。√24＝2√6。約 4.9 で、辺の6より短いので図とも合います。問1の答えは 2√6 です。',
      add: T([], [eb(148, '√24 ＝ √(4×6) ＝ 2√6', C.blue, FILL.blue, 15), tx(198, '高さ ＝ 2√6 ≈ 4.9（問1）', 13, C.red, true)]),
    },
    {
      note: '❓ なぜ体積は ×1/3 なの？ 立方体は、同じ形の四角錐ちょうど3つに分けられます（1つの頂点と、その頂点に集まらない3つの面を結ぶ）。だから角錐は、同じ底面・同じ高さの角柱の1/3です。',
      add: F([bx(30, 26, 110, 60, '角柱の体積\n底面積×高さ', C.blue, FILL.blue, 13), ar(146, 56, 174, 56, C.red), bx(180, 26, 110, 60, '角錐の体積\nその 1/3', C.red, FILL.red, 13)], [eb(148, '角錐 ＝ 底面積 × 高さ × 1/3', C.purple, FILL.purple, 14), tx(198, '立方体は四角錐3つ分', 12)]),
    },
    {
      note: '底面積は、1辺6の正三角形。底辺6、高さ3√3（さきほどのAM）なので、6×3√3÷2＝9√3 です。',
      add: F([...topTri(), ln(160, 18, 160, 132, C.blue, true, 2), lb(168, 76, '3√3', 12, C.blue, 'start', true), lb(180, 126, '6', 12, C.blue, 'middle', true)], [eb(148, '6 × 3√3 ÷ 2 ＝ 9√3', C.blue, FILL.blue, 15), tx(198, '底面積 ＝ 9√3', 13, C.red, true)]),
    },
    {
      note: '問2。体積 ＝ 1/3 × 底面積 × 高さ ＝ 1/3 × 9√3 × 2√6。❓ √18 はなぜ 3√2？ 18＝9×2 で 9＝3×3 だからです。6√18＝6×3√2＝18√2。',
      add: F([eb(6, 'V ＝ 1/3 × 9√3 × 2√6', C.blue, FILL.blue, 13, 26), eb(38, '＝ 3√3 × 2√6', C.blue, FILL.blue, 13, 26), eb(70, '＝ 6√18', C.blue, FILL.blue, 13, 26), eb(102, '＝ 6 × 3√2 ＝ 18√2', C.red, FILL.red, 13, 26)], [eb(150, '体積 ＝ 18√2', C.red, FILL.red, 15), tx(200, '18√2 ≈ 25.5（問2）', 12)]),
    },
    {
      note: '問3。表面は、底面と同じ形の正三角形が4枚です。1枚の面積は 9√3 なので、表面積は 4×9√3＝36√3 です。',
      add: F(
        [0, 1, 2, 3].flatMap((i) => [pg([[20 + 70 * i, 100], [80 + 70 * i, 100], [50 + 70 * i, 48]], C.blue, BT), lb(50 + 70 * i, 88, '9√3', 11, C.blue, 'middle', true)]),
        [eb(148, '4 × 9√3 ＝ 36√3', C.red, FILL.red, 15), tx(198, '4枚とも同じ面積', 12)],
      ),
    },
    {
      note: '検算。1辺aの正四面体の公式に a＝6 を入れます。高さ a√6/3＝2√6、体積 a³√2/12＝216√2/12＝18√2、表面積 √3a²＝36√3。すべて一致します。',
      add: F([eb(8, '問1  高さ 2√6', C.blue, FILL.blue, 14, 30), eb(44, '問2  体積 18√2', C.blue, FILL.blue, 14, 30), eb(80, '問3  表面積 36√3', C.red, FILL.red, 14, 30)], [eb(148, '公式：高さ a√6/3・体積 a³√2/12', C.green, FILL.green, 12), tx(198, 'a＝6 を入れて、すべて一致', 12)]),
    },
  ],
  '正四面体の高さ・体積・表面積',
);

// ════════════════════════════════════════════
// 4. 円の弦と垂線の証明（koyo_koko_sansu_08）
// ════════════════════════════════════════════
const cO: P = [160, 72];
const cA: P = [112, 108];
const cB: P = [208, 108];
const cM: P = [160, 108];
const circBase = (withD = true): E[] => [
  ci(cO[0], cO[1], 60, undefined, C.gray, 'rgba(14,165,233,0.05)'),
  ln(cA[0], cA[1], cB[0], cB[1], C.ink, false, 2),
  ln(cO[0], cO[1], cM[0], cM[1], C.ink, false, 2),
  ci(cO[0], cO[1], 3, undefined, C.ink, C.ink),
  lb(150, 68, 'O', 13, C.ink, 'end', true),
  lb(104, 118, 'A', 13, C.ink, 'end', true),
  lb(216, 118, 'B', 13, C.ink, 'start', true),
  lb(160, 122, 'M', 13, C.ink, 'middle', true),
  ...(withD ? [lb(168, 92, 'd', 12, C.red, 'start', true)] : []),
  rt(cM, [0, -1], [1, 0], 8),
];
const koyoSansu08 = show(
  [
    {
      note: '円Oの弦ABに、中心Oから垂線OMを下ろします。問1ではMが弦ABの中点であることを証明し、問2では ABの長さを半径rと距離d（＝OM）で表します。',
      add: T(circBase(), [eb(148, 'OM ⊥ AB　半径 r　OM ＝ d', C.blue, FILL.blue, 14), tx(198, '問1 MA＝MB を証明　問2 AB を r と d で', 12)]),
    },
    {
      note: '証明の準備です。❓ OA と OB は等しい？ どちらも同じ円の半径だからです。OA＝OB＝r。',
      add: T([ln(cO[0], cO[1], cA[0], cA[1], C.blue, false, 3), ln(cO[0], cO[1], cB[0], cB[1], C.blue, false, 3), lb(126, 84, 'r', 12, C.blue, 'end', true), lb(194, 84, 'r', 12, C.blue, 'start', true)], [eb(148, 'OA ＝ OB ＝ r（半径）', C.blue, FILL.blue, 15), tx(198, '円の中心から円周までは、どこも同じ長さ', 12)]),
    },
    {
      note: '❓ OM は？ △OAM と △OBM のどちらにも入っている辺なので、共通です。OM＝OM。',
      add: T([pg([cO, cA, cM], C.blue, BT), pg([cO, cB, cM], C.blue, BT), ln(cO[0], cO[1], cM[0], cM[1], C.green, false, 3.5)], [eb(148, 'OM ＝ OM（共通）', C.green, FILL.green, 15), tx(198, '2つの三角形が共有している辺', 12)]),
    },
    {
      note: '❓ Mのところの角は？ OM は AB への垂線なので、∠OMA＝∠OMB＝90° です。2つの角が、ともに直角です。',
      add: T([rt(cM, [0, -1], [-1, 0], 8)], [eb(148, '∠OMA ＝ ∠OMB ＝ 90°', C.red, FILL.red, 15), tx(198, '垂線だから直角', 12)]),
    },
    {
      note: '❓ 合同条件は？ 直角三角形で、斜辺（OA＝OB）と他の1辺（OM共通）がそれぞれ等しいので、△OAM ≡ △OBM です。合同な図形の対応する辺は等しいから、MA＝MB。Mは中点です。',
      add: T([], [eb(148, '直角三角形の斜辺と他の一辺が等しい', C.purple, FILL.purple, 13), tx(198, '△OAM ≡ △OBM  →  MA ＝ MB', 13, C.purple, true)]),
    },
    {
      note: '❓ では、なぜ「斜辺と他の一辺」で合同といえるの？ 三平方の定理で、残りの辺も決まってしまうからです。MA²＝r²−OM²、MB²＝r²−OM²。右辺が同じなので MA²＝MB²、長さは正なので MA＝MB。',
      add: F(
        [pg([[60, 110], [130, 110], [130, 40]], C.gray, BT), pg([[190, 110], [260, 110], [190, 40]], C.gray, BT), rt([130, 110], [0, -1], [-1, 0], 8), rt([190, 110], [0, -1], [1, 0], 8), lb(100, 120, 'MA', 11, C.blue, 'middle', true), lb(225, 120, 'MB', 11, C.blue, 'middle', true), lb(138, 78, 'd', 12, C.red, 'start', true), lb(182, 78, 'd', 12, C.red, 'end', true), lb(88, 66, 'r', 12, C.blue, 'end', true), lb(232, 66, 'r', 12, C.blue, 'start', true)],
        [eb(148, 'MA² ＝ r² − d² ＝ MB²', C.purple, FILL.purple, 15), tx(198, 'MA ＝ MB（長さは正の数）', 12)],
      ),
    },
    {
      note: '問2。❓ ABの長さは？ M が中点なので MA は AB の半分です。直角三角形OAMで、OA＝r、OM＝d、MA＝AB/2 と3辺がそろいました。',
      add: F([...circBase(), pg([cO, cA, cM], C.blue, BT), ln(cO[0], cO[1], cA[0], cA[1], C.blue, false, 3), ln(cA[0], cA[1], cM[0], cM[1], C.red, false, 3.5), lb(126, 84, 'r', 12, C.blue, 'end', true), lb(136, 132, 'AB/2', 11, C.red, 'middle', true)], [eb(148, 'OA＝r　OM＝d　MA＝AB/2', C.blue, FILL.blue, 14), tx(198, '直角三角形OAMの3辺', 12)]),
    },
    {
      note: '三平方の定理：r²＝d²＋(AB/2)²。移項して (AB/2)²＝r²−d²。❓ なぜ AB/2 と書くの？ 直角三角形の辺になっているのは MA で、それが AB の半分だからです。',
      add: T([], [eb(148, 'r² ＝ d² ＋ (AB/2)²', C.blue, FILL.blue, 15), tx(198, '(AB/2)² ＝ r² − d²', 14, C.blue, true)]),
    },
    {
      note: 'AB/2＝√(r²−d²) なので、両辺を2倍して AB＝2√(r²−d²)。これが問2の答えです。',
      add: T([], [eb(148, 'AB/2 ＝ √(r² − d²)', C.blue, FILL.blue, 15), tx(198, 'AB ＝ 2√(r² − d²)', 15, C.red, true)]),
    },
    {
      note: '❓ d を変えると弦はどう変わる？ d＝0（中心を通る）だと AB＝2r で直径になり、最大です。d が大きいほど弦は短くなり、d＝r では 0。中心に近い弦ほど長いのです。',
      add: F([ci(160, 72, 60, undefined, C.gray, 'rgba(14,165,233,0.05)'), ci(160, 72, 3, undefined, C.ink, C.ink), ln(100, 72, 220, 72, C.red, false, 2.5), ln(112, 108, 208, 108, C.blue, false, 2.5), ln(134, 126, 186, 126, C.green, false, 2.5), lb(228, 72, 'd＝0 直径', 10, C.red, 'start', true), lb(216, 108, 'd 中', 10, C.blue, 'start', true), lb(194, 128, 'd 大', 10, C.green, 'start', true)], [eb(148, '中心に近いほど、弦は長い', C.green, FILL.green, 14), tx(198, 'd＝0 のとき AB＝2r（最長）', 12)]),
    },
    {
      note: '確かめ。r＝5、d＝3 なら AB＝2√(25−9)＝2×4＝8。OM＝3、MA＝4、OA＝5 の直角三角形（3・4・5）なので、たしかに AB＝8 です。',
      add: F([...circBase(false), pg([cO, cA, cM], C.blue, BT), lb(126, 84, '5', 12, C.blue, 'end', true), lb(136, 132, '4', 12, C.red, 'middle', true), lb(168, 92, '3', 12, C.red, 'start', true)], [eb(148, 'AB ＝ 2√(5² − 3²) ＝ 8', C.green, FILL.green, 14), tx(198, '3² ＋ 4² ＝ 5² で確かめOK', 12)]),
    },
  ],
  '弦の中点と、弦の長さの公式',
);

// ════════════════════════════════════════════
// 5. 共通外接線の長さ（nishiyamato_koko_sansu_10）
// ════════════════════════════════════════════
const eO1: P = [80, 78];
const eO2: P = [176, 78];
const eT1: P = [95, 19.9];
const eT2: P = [185, 43.1];
const eH: P = [86, 54.8];
const extFig = (): E[] => [
  ci(eO1[0], eO1[1], 60, undefined, C.gray, 'rgba(14,165,233,0.06)'),
  ci(eO2[0], eO2[1], 36, undefined, C.gray, 'rgba(14,165,233,0.06)'),
  ln(50, 8.3, 260, 62.5, C.ink, false, 2),
  ln(eO1[0], eO1[1], eO2[0], eO2[1], C.gray, true),
  ci(eO1[0], eO1[1], 2.5, undefined, C.ink, C.ink),
  ci(eO2[0], eO2[1], 2.5, undefined, C.ink, C.ink),
  lb(72, 88, 'O₁', 12, C.ink, 'end', true),
  lb(176, 94, 'O₂', 12, C.ink, 'middle', true),
  lb(92, 14, 'T₁', 12, C.ink, 'end', true),
  lb(190, 40, 'T₂', 12, C.ink, 'start', true),
  lb(128, 92, '8', 12, C.blue, 'middle', true),
];
const nishiyamatoSansu10 = show(
  [
    {
      note: '半径5の円C₁と半径3の円C₂があり、中心間の距離は8です。2つの円の外側に接する直線（共通外接線）が、C₁・C₂と接する点を T₁、T₂ とするとき、T₁T₂ の長さ L を求めます。',
      add: T([...extFig(), lb(74, 40, '5', 12, C.blue, 'end', true), lb(192, 62, '3', 12, C.blue, 'start', true), lb(146, 26, 'L', 13, C.red, 'start', true)], [eb(148, '半径 5 と 3　中心間 8', C.blue, FILL.blue, 14), tx(198, '共通外接線の長さ L ＝ T₁T₂', 12)]),
    },
    {
      note: '❓ 接点と中心を結ぶと？ 円の接線は、接点を通る半径と垂直です。O₁T₁ ⊥ l、O₂T₂ ⊥ l。同じ直線 l に垂直な2本なので、O₁T₁ と O₂T₂ は平行です。',
      add: T([ln(eO1[0], eO1[1], eT1[0], eT1[1], C.blue, false, 3), ln(eO2[0], eO2[1], eT2[0], eT2[1], C.blue, false, 3), rt(eT1, [0.968, 0.25], [-0.25, 0.968], 7), rt(eT2, [0.968, 0.25], [-0.25, 0.968], 7)], [eb(148, '半径 ⊥ 接線（接点で90°）', C.blue, FILL.blue, 14), tx(198, 'O₁T₁ ∥ O₂T₂', 14, C.blue, true)]),
    },
    {
      note: '❓ 求めたい T₁T₂ はどう見える？ 四角形 O₁T₁T₂O₂ は、平行な辺 O₁T₁ と O₂T₂ をもつ台形で、T₁T₂ はその平行な辺に垂直な辺です。この辺を直角三角形の1辺にしたいので、補助線を引きます。',
      add: T([pg([eO1, eT1, eT2, eO2], C.main, YT)], [eb(148, '台形 O₁T₁T₂O₂（T₁・T₂ が直角）', C.main, FILL.warm, 13), tx(198, '補助線で、直角三角形を作りたい', 12)]),
    },
    {
      note: '❓ どんな補助線？ O₂ から T₁T₂ に平行な線を引き、O₁T₁ との交点を H とします。四角形 HT₁T₂O₂ は4つの角が直角の長方形なので、HO₂＝T₁T₂＝L、HT₁＝O₂T₂＝3（向かい合う辺は等しい）。',
      add: T([ln(eO2[0], eO2[1], eH[0], eH[1], C.red, true, 2), pg([eH, eT1, eT2, eO2], C.red, RT), rt(eH, [0.25, -0.968], [0.968, 0.25], 7), lb(80, 56, 'H', 12, C.red, 'end', true)], [eb(148, '長方形 HT₁T₂O₂', C.red, FILL.red, 14), tx(198, 'HO₂ ＝ L　HT₁ ＝ 3', 13, C.red, true)]),
    },
    {
      note: '❓ O₁H の長さは？ O₁T₁＝5 のうち、HT₁＝3 の部分を引いて、O₁H＝5−3＝2。これは2つの半径の差です。',
      add: T([ln(eO1[0], eO1[1], eH[0], eH[1], C.green, false, 3.5), lb(75, 68, '2', 13, C.green, 'end', true)], [eb(148, 'O₁H ＝ 5 − 3 ＝ 2', C.green, FILL.green, 15), tx(198, '半径の差が、直角三角形の1辺になる', 12)]),
    },
    {
      note: '直角三角形 O₁HO₂ に注目します。直角はH。斜辺は O₁O₂＝8（中心間の距離）、O₁H＝2、残りの HO₂＝L です。だから三平方の定理が使えます。',
      add: T([pg([eO1, eH, eO2], C.green, GT), ln(eO1[0], eO1[1], eO2[0], eO2[1], C.green, false, 3)], [eb(148, '2² ＋ L² ＝ 8²', C.green, FILL.green, 15, 28), tx(190, 'L² ＝ 64 − 4 ＝ 60', 14, C.green, true)]),
    },
    {
      note: 'L²＝60 なので L＝√60。60＝4×15 で 4 は2乗の数だから、√60＝2√15。√15 は約3.87なので、L は約 7.75 です。',
      add: T([], [eb(148, 'L ＝ √60 ＝ √(4×15) ＝ 2√15', C.green, FILL.green, 14), tx(198, '√15 ≈ 3.87 → L ≈ 7.75', 13, C.red, true)]),
    },
    {
      note: '❓ この考え方は正しい？ 2つの半径が同じなら差は0です。そのとき共通外接線は中心を結ぶ線と平行で、長さは中心間の距離 d と同じ。L＝√(d²−0²)＝d となり、ちゃんと合います。',
      add: F([ci(100, 80, 30, undefined, C.gray, 'rgba(14,165,233,0.06)'), ci(220, 80, 30, undefined, C.gray, 'rgba(14,165,233,0.06)'), ln(100, 80, 220, 80, C.gray, true), ln(70, 50, 250, 50, C.ink, false, 2), ln(100, 80, 100, 50, C.blue, false, 2.5), ln(220, 80, 220, 50, C.blue, false, 2.5), lb(160, 44, 'L ＝ d', 12, C.red, 'middle', true), lb(160, 94, 'd', 12, C.blue, 'middle', true), lb(100, 94, 'O₁', 11, C.ink, 'middle', true), lb(220, 94, 'O₂', 11, C.ink, 'middle', true)], [eb(148, 'L ＝ √(d² − (r₁−r₂)²)', C.purple, FILL.purple, 14), tx(198, '半径が同じなら 差は0 → L ＝ d', 12)]),
    },
    {
      note: '検算。(2√15)²＋2²＝60＋4＝64＝8² と、三平方の式にもどります。L≈7.75 は中心間の距離8より少し短く、図の見た目とも合っています。',
      add: F([...extFig(), ln(eT1[0], eT1[1], eT2[0], eT2[1], C.red, false, 4), lb(146, 26, 'L', 13, C.red, 'start', true)], [eb(148, '(2√15)² ＋ 2² ＝ 60 ＋ 4 ＝ 64', C.green, FILL.green, 13), tx(198, '＝ 8²　L ＜ 8 で図とも合う', 12)]),
    },
    {
      note: '答え。共通外接線の長さは 2√15（約7.75）です。公式 L＝√(d²−(r₁−r₂)²) に d＝8、r₁−r₂＝2 を入れた形と同じです。',
      add: F([eb(20, 'L ＝ √(8² − 2²)', C.blue, FILL.blue, 15, 32), eb(62, '＝ √60', C.blue, FILL.blue, 15, 32), eb(104, '＝ 2√15', C.red, FILL.red, 15, 32)], [eb(150, '答え  2√15（約 7.75）', C.green, FILL.green, 15), tx(200, '半径の差 2 が、直角三角形の1辺', 12)]),
    },
  ],
  '共通外接線は、半径の差で直角三角形を作る',
);

// ════════════════════════════════════════════
// 6. 台形の対角線（todaiji_koko_sansu_09）
// ════════════════════════════════════════════
const dA: P = [100, 125];
const dB: P = [198, 125];
const dC: P = [142, 27];
const dD: P = [100, 27];
const trapFig = (): E[] => [
  pg([dA, dB, dC, dD], C.gray, 'rgba(14,165,233,0.06)'),
  lb(92, 132, 'A', 13, C.ink, 'end', true),
  lb(206, 132, 'B', 13, C.ink, 'start', true),
  lb(92, 24, 'D', 13, C.ink, 'end', true),
  lb(150, 22, 'C', 13, C.ink, 'start', true),
  lb(149, 136, '7', 11, C.blue, 'middle', true),
  lb(90, 78, '7', 12, C.blue, 'end', true),
  lb(121, 18, '3', 12, C.blue, 'middle', true),
];
const todaijiSansu09 = show(
  [
    {
      note: '台形ABCDです。AB∥CD、∠DAB＝90°、AB＝7、AD＝7、CD＝3。求めるのは対角線ACの長さです。',
      add: T([...trapFig(), rt(dA, [0, -1], [1, 0], 9)], [eb(148, 'AB ∥ CD　∠DAB ＝ 90°', C.blue, FILL.blue, 14), tx(198, 'AB＝7　AD＝7　CD＝3　AC ＝ ？', 12)]),
    },
    {
      note: '❓ ACを含む直角三角形はある？ そのために ∠D を調べます。AB∥CD なので、同じ側の内角 ∠A と ∠D は合わせて180°です。∠A＝90° なので ∠D＝90° になります。',
      add: T([rt(dD, [0, 1], [1, 0], 9), ln(dA[0], dA[1], dC[0], dC[1], C.red, true, 2)], [eb(148, '∠A ＋ ∠D ＝ 180°（平行線）', C.red, FILL.red, 14), tx(198, '90° ＋ ∠D ＝ 180° → ∠D ＝ 90°', 12)]),
    },
    {
      note: '❓ だから何がいえる？ △ACD は D が直角の直角三角形です。ACが斜辺で、直角をはさむ2辺は AD＝7 と DC＝3 です。',
      add: T([pg([dA, dC, dD], C.green, GT), ln(dA[0], dA[1], dC[0], dC[1], C.red, false, 3.5)], [eb(148, '△ACD は D が直角', C.green, FILL.green, 15), tx(198, '斜辺 AC　直角の2辺 AD＝7、DC＝3', 12)]),
    },
    {
      note: '三平方の定理：斜辺の2乗＝他の2辺の2乗の和。AC²＝AD²＋DC²＝7²＋3²＝49＋9＝58。',
      add: T([], [eb(148, 'AC² ＝ 7² ＋ 3²', C.green, FILL.green, 15, 28), tx(190, '＝ 49 ＋ 9 ＝ 58', 14, C.green, true)]),
    },
    {
      note: '❓ なぜ2乗の和になるの？ 直角をはさむ辺を1辺とする正方形の面積が、7×7＝49 と 3×3＝9。この2つを合わせた面積が、斜辺を1辺とする正方形の面積（AC²）に等しい、というのが三平方の定理です。',
      add: F([bx(20, 20, 84, 84, '49', C.blue, FILL.blue, 18), lb(118, 92, '＋', 18, C.ink, 'middle', true), bx(132, 68, 36, 36, '9', C.blue, FILL.blue, 14), lb(186, 66, '＝', 18, C.ink, 'middle', true), bx(204, 12, 92, 92, 'AC² ＝ 58', C.red, FILL.red, 14)], [eb(150, '7² ＋ 3² ＝ AC²', C.green, FILL.green, 15), tx(200, '小さい2つの正方形の面積の和', 12)]),
    },
    {
      note: 'AC＝√58。❓ おおよそいくつ？ 7²＝49、8²＝64 で、58 はその間なので、AC は 7 と 8 のあいだ（約7.6）です。縦の7より少し長いので、図とも合います。',
      add: F([ln(40, 70, 280, 70, C.gray, false, 2), ln(60, 62, 60, 78, C.ink), ln(260, 62, 260, 78, C.ink), ci(183, 70, 5, undefined, C.red, C.red), lb(60, 94, '7（49）', 11, C.blue, 'middle', true), lb(260, 94, '8（64）', 11, C.blue, 'middle', true), lb(183, 50, '√58（58）', 12, C.red, 'middle', true)], [eb(148, '7² ＝ 49 ＜ 58 ＜ 64 ＝ 8²', C.blue, FILL.blue, 14), tx(198, '7 ＜ AC ＜ 8（約 7.6）', 13, C.red, true)]),
    },
    {
      note: '❓ AD＋DC＝10 ではだめ？ ADからDCへ回り道すると 7＋3＝10 ですが、A から C へまっすぐ進む AC のほうが短くなります。斜めの辺は、2辺の和より必ず短いので、足し算で答えを出してはいけません。',
      add: F([...trapFig(), ln(dA[0], dA[1], dD[0], dD[1], C.blue, false, 3.5), ln(dD[0], dD[1], dC[0], dC[1], C.blue, false, 3.5), ln(dA[0], dA[1], dC[0], dC[1], C.red, false, 3.5)], [eb(148, '7 ＋ 3 ＝ 10（回り道）', C.blue, FILL.blue, 15), tx(198, 'まっすぐの AC ≈ 7.6 のほうが短い', 12)]),
    },
    {
      note: '別の方法（座標）。❓ なぜ座標でも同じ答えになる？ Aを原点にすると C は「右に3、上に7」の点です。横の差3とたての差7を直角にはさむ2辺と見れば、同じ三平方の式 3²＋7² になるからです。',
      add: F([ar(50, 120, 300, 120, C.gray), ar(50, 120, 50, 12, C.gray), pg([[50, 120], [148, 120], [92, 22], [50, 22]], C.gray, 'rgba(14,165,233,0.06)'), ln(50, 120, 92, 22, C.red, false, 2.5), ln(50, 120, 92, 120, C.blue, true, 2), ln(92, 120, 92, 22, C.blue, true, 2), lb(71, 132, '横 3', 11, C.blue, 'middle', true), lb(100, 76, 'たて 7', 11, C.blue, 'start', true), lb(44, 132, 'A(0,0)', 10, C.ink, 'end', true), lb(44, 22, 'D(0,7)', 10, C.ink, 'end', true), lb(98, 18, 'C(3,7)', 10, C.ink, 'start', true), lb(148, 132, 'B(7,0)', 10, C.ink, 'middle', true)], [eb(148, 'AC² ＝ 3² ＋ 7² ＝ 58', C.purple, FILL.purple, 15), tx(198, '横3・たて7 の直角三角形', 12)]),
    },
    {
      note: '❓ AB＝7 は使っていない？ ACを含む直角三角形は △ACD で、ABは出番がありません。Cから ABに垂線CHを下ろした △AHC でも、四角形ADCHは長方形なので AH＝3、HC＝7。同じ 58 になります。',
      add: F([...trapFig(), ln(dC[0], dC[1], 142, 125, C.gray, true, 2), pg([dA, [142, 125], dC], C.purple, PT), ln(dA[0], dA[1], dC[0], dC[1], C.red, false, 3), lb(142, 136, 'H', 11, C.ink, 'middle', true)], [eb(148, '△AHC：AH ＝ 3、HC ＝ 7', C.purple, FILL.purple, 14), tx(198, '3² ＋ 7² ＝ 58　同じ答え', 13, C.purple, true)]),
    },
    {
      note: '答え。AC＝√58（約7.6）。△ACD でも △AHC でも AC²＝58 で一致し、7 と 8 のあいだに入っています。',
      add: F([eb(20, 'AC² ＝ 7² ＋ 3² ＝ 58', C.blue, FILL.blue, 15, 32), eb(62, 'AC ＝ √58', C.red, FILL.red, 16, 32), eb(104, '7 ＜ 7.6 ＜ 8', C.green, FILL.green, 14, 28)], [eb(150, '答え  AC ＝ √58', C.green, FILL.green, 15), tx(200, '2通りの直角三角形で一致', 12)]),
    },
  ],
  '台形の対角線は直角三角形をさがす',
);

// ════════════════════════════════════════════
// 7. 円と弦（todaiji_koko_sansu_10）
// ════════════════════════════════════════════
const chordCircle = (yChord: number, half: number, nameA = true): E[] => [
  ci(160, 72, 60, undefined, C.gray, 'rgba(14,165,233,0.05)'),
  ci(160, 72, 3, undefined, C.ink, C.ink),
  ln(160 - half, yChord, 160 + half, yChord, C.ink, false, 2),
  lb(150, 68, 'O', 13, C.ink, 'end', true),
  ...(nameA ? [lb(160 - half - 8, yChord + 10, 'A', 13, C.ink, 'end', true), lb(160 + half + 8, yChord + 10, 'B', 13, C.ink, 'start', true)] : []),
];
const todaijiSansu10 = show(
  [
    {
      note: '半径5の円で、中心から距離3の位置にある弦の長さ（問1）と、長さ6の弦の中心からの距離（問2）を求めます。まず問1の図です。',
      add: T([...chordCircle(108, 48), ln(160, 72, 160, 108, C.red, true, 2), lb(168, 92, '3', 12, C.red, 'start', true), lb(120, 80, '5', 12, C.blue, 'end', true)], [eb(148, '半径 5　中心から弦まで 3', C.blue, FILL.blue, 14), tx(198, '問1：弦の長さ ＝ ？', 13)]),
    },
    {
      note: '❓ 中心から弦に垂線を下ろすと、弦はどうなる？ 弦の両はし A、B は中心から同じ距離（半径5）にあるので、左右対称です。垂線の足Mが弦の中点になり、MA＝MB＝L/2。',
      add: T([ln(160, 72, 112, 108, C.blue, false, 3), ln(160, 72, 208, 108, C.blue, false, 3), lb(160, 122, 'M', 12, C.ink, 'middle', true), rt([160, 108], [0, -1], [1, 0], 8)], [eb(148, 'OA ＝ OB ＝ 5 から M は中点', C.blue, FILL.blue, 14), tx(198, 'MA ＝ MB ＝ L／2', 13, C.blue, true)]),
    },
    {
      note: '❓ どの三角形を使う？ O・M・A の直角三角形です。斜辺 OA＝5（半径）、OM＝3（距離）、MA＝L/2。知りたい辺が1つだけなので、三平方の定理で求められます。',
      add: T([pg([[160, 72], [112, 108], [160, 108]], C.green, GT), ln(112, 108, 160, 108, C.red, false, 3.5)], [eb(148, '3² ＋ (L/2)² ＝ 5²', C.green, FILL.green, 15), tx(198, 'OM² ＋ MA² ＝ OA²', 12)]),
    },
    {
      note: '(L/2)²＝25−9＝16。2乗して16になる正の数は4なので L/2＝4。❓ なぜ最後に2倍するの？ 直角三角形の辺になっているのは「半分」の MA なので、弦ABはその2倍の L＝8 です。',
      add: T([], [eb(148, '(L/2)² ＝ 25 − 9 ＝ 16', C.green, FILL.green, 14, 28), tx(186, 'L／2 ＝ 4', 13), tx(210, 'L ＝ 4 × 2 ＝ 8（問1）', 14, C.red, true)]),
    },
    {
      note: '問2へ。今度は弦の長さが6で、中心からの距離を求めます。半弦は 6÷2＝3。❓ 図はどう変わる？ 長さ6は長さ8の弦より短いので、中心からもっと遠くにあるはずです。',
      add: F([...chordCircle(120, 36), ln(160, 72, 160, 120, C.red, true, 2), lb(168, 100, 'd', 12, C.red, 'start', true), lb(160, 134, 'M', 12, C.ink, 'middle', true), lb(140, 114, '3', 12, C.blue, 'middle', true)], [eb(148, '弦 6 → 半弦 6 ÷ 2 ＝ 3', C.blue, FILL.blue, 14), tx(198, '中心に近いほど弦は長い：8 ＞ 6', 12)]),
    },
    {
      note: '直角三角形 OAM：OA＝5、MA＝3、OM＝d。三平方の定理で d²＋3²＝5²、d²＝25−9＝16、d＝4。距離は正の数なので d＝4（問2）です。',
      add: T([pg([[160, 72], [124, 120], [160, 120]], C.green, GT), rt([160, 120], [0, -1], [-1, 0], 8)], [eb(148, 'd² ＋ 3² ＝ 5²', C.green, FILL.green, 15, 28), tx(190, 'd² ＝ 16 → d ＝ 4（問2）', 14, C.red, true)]),
    },
    {
      note: '❓ 3・4・5 が2回出てきたのは偶然？ 半径5の円では、問1（距離3・半弦4）と問2（距離4・半弦3）は、同じ 3・4・5 の直角三角形の縦と横を入れかえただけで、斜辺は半径5のまま変わりません。',
      add: F([pg([[40, 30], [40, 72], [96, 72]], C.blue, BT), rt([40, 72], [0, -1], [1, 0], 7), lb(32, 52, '3', 12, C.red, 'end', true), lb(68, 84, '4', 12, C.blue, 'middle', true), lb(76, 46, '5', 12, C.ink, 'start', true), pg([[180, 30], [180, 86], [222, 86]], C.blue, BT), rt([180, 86], [0, -1], [1, 0], 7), lb(172, 60, '4', 12, C.red, 'end', true), lb(201, 98, '3', 12, C.blue, 'middle', true), lb(206, 52, '5', 12, C.ink, 'start', true), lb(68, 112, '問1', 12, C.gray, 'middle', true), lb(201, 116, '問2', 12, C.gray, 'middle', true)], [eb(148, '(3，4，5) の直角三角形', C.purple, FILL.purple, 14), tx(198, '縦と横を入れかえても、斜辺は 5', 12)]),
    },
    {
      note: '確かめ。問1は 3²＋4²＝9＋16＝25。問2は 4²＋3²＝16＋9＝25。どちらも斜辺の2乗がちょうど半径の2乗 5²＝25 になります。',
      add: F([eb(14, '問1：3² ＋ 4² ＝ 9 ＋ 16 ＝ 25', C.blue, FILL.blue, 13, 32), eb(58, '問2：4² ＋ 3² ＝ 16 ＋ 9 ＝ 25', C.blue, FILL.blue, 13, 32), eb(102, '5² ＝ 25（半径の2乗）', C.green, FILL.green, 13, 30)], [tx(180, '2つとも斜辺が半径5になった', 13, C.green, true)]),
    },
    {
      note: '❓ まちがえやすいのは？ 弦の長さ L をそのまま三平方に入れてしまうことです。L＝8 を入れると 3²＋8²＝73 となり 5²＝25 にならないので、おかしいと気づけます。入れるのは半分の4です。',
      add: F([eb(18, '✕  3² ＋ 8² ＝ 73 ≠ 25', C.red, FILL.red, 15, 40), eb(74, '○  3² ＋ 4² ＝ 25 ＝ 5²', C.green, FILL.green, 15, 40)], [eb(150, '三平方に入れるのは「半分」', C.purple, FILL.purple, 14), tx(200, '斜辺は半径、他の2辺は 距離 と 半弦', 12)]),
    },
    {
      note: '答え。中心から距離3の弦の長さは8、長さ6の弦の中心からの距離は4です。',
      add: F([eb(20, '問1  d＝3 → 弦の長さ 8', C.blue, FILL.blue, 15, 32), eb(62, '問2  弦 6 → 中心からの距離 4', C.blue, FILL.blue, 15, 32)], [eb(150, '垂線で弦を半分にして三平方', C.green, FILL.green, 14), tx(200, '3・4・5 の直角三角形', 12)]),
    },
  ],
  '円の弦は、半分にして三平方',
);

// ════════════════════════════════════════════
// 8. 直角三角形 5・12・13（keio_koko_sansu_06）
// ════════════════════════════════════════════
const kA: P = [70, 68];
const kB: P = [190, 118];
const kC: P = [70, 118];
const kH: P = [87.75, 75.4];
const kI: P = [90, 98];
const kBase = (nums = true): E[] => [
  pg([kA, kB, kC], C.gray, 'rgba(14,165,233,0.06)'),
  rt(kC, [0, -1], [1, 0], 8),
  lb(62, 66, 'A', 13, C.ink, 'end', true),
  lb(198, 126, 'B', 13, C.ink, 'start', true),
  lb(60, 128, 'C', 13, C.ink, 'end', true),
  ...(nums ? [lb(60, 96, '5', 12, C.blue, 'end', true), lb(130, 132, '12', 12, C.blue, 'middle', true)] : []),
];
const kIncircle = (): E[] => [
  ci(kI[0], kI[1], 20, undefined, C.red, 'rgba(225,29,72,0.10)'),
  ci(kI[0], kI[1], 2.5, undefined, C.red, C.red),
  lb(96, 104, 'I', 11, C.red, 'start', true),
];
const keioSansu06 = show(
  [
    {
      note: '直角三角形ABC（∠C＝90°）で AC＝5、BC＝12。問1 ABの長さ、問2 Cから ABへの垂線CHの長さ、問3 内接円の半径 r を求めます。',
      add: T(kBase(), [eb(148, '∠C ＝ 90°　AC ＝ 5　BC ＝ 12', C.blue, FILL.blue, 14), tx(198, '問1 AB　問2 CH　問3 内接円の半径 r', 12)]),
    },
    {
      note: '問1。❓ ABは？ 直角三角形なので三平方の定理です。5²＋12²＝25＋144＝169。13×13＝169 だから AB＝13（5・12・13は有名な組）。',
      add: T([lb(146, 88, '13', 13, C.red, 'start', true)], [eb(148, '5² ＋ 12² ＝ 25 ＋ 144 ＝ 169', C.blue, FILL.blue, 14), tx(198, 'AB ＝ 13', 14, C.red, true)]),
    },
    {
      note: '問2。❓ CHは三平方だけでは出ません。どうする？ 同じ三角形の面積を2通りで表します。底辺BC・高さAC なら 12×5÷2＝30。底辺AB・高さCH でも、面積は同じ30のはずです。なぜなら、どの辺を底辺に見るかで高さが変わるだけで、三角形そのものは同じだからです。',
      add: F(
        [pg([[20, 110], [20, 65], [128, 110]], C.gray, BT), lb(12, 90, '5', 12, C.blue, 'end', true), lb(74, 121, '12', 12, C.blue, 'middle', true), lb(74, 132, '底辺BC 高さAC', 10, C.gray, 'middle'), pg([[170, 110], [170, 65], [278, 110]], C.gray, BT), ln(170, 110, 186, 71.7, C.red, true, 2), lb(224, 132, '底辺AB 高さCH', 10, C.gray, 'middle'), lb(224, 121, '13', 12, C.blue, 'middle', true), lb(149, 92, '＝', 18, C.ink, 'middle', true)],
        [eb(148, '12 × 5 ÷ 2 ＝ 30', C.green, FILL.green, 15), tx(198, '13 × CH ÷ 2 も、同じ 30', 13, C.green, true)],
      ),
    },
    {
      note: 'つり合わせます。13×CH÷2＝30 の両辺に2をかけて 13×CH＝60、13でわって CH＝60/13 です。',
      add: T([], [eb(148, '13 × CH ÷ 2 ＝ 30', C.green, FILL.green, 15, 28), tx(186, '13 × CH ＝ 60', 12), tx(210, 'CH ＝ 60/13', 14, C.red, true)]),
    },
    {
      note: '❓ 見た目と合う？ 60/13 は約4.6です。Cから ABへの垂線は、CからABまでの最短距離なので、CA＝5 より短くなるはず。4.6＜5 で、合っています。',
      add: F([...kBase(), ln(kA[0], kA[1], kB[0], kB[1], C.ink, false, 2), ln(kC[0], kC[1], kH[0], kH[1], C.red, false, 3.5), lb(103, 100, '60/13', 11, C.red, 'start', true), lb(146, 88, '13', 13, C.blue, 'start', true), lb(92, 70, 'H', 12, C.ink, 'start', true), rt(kH, [-0.385, 0.923], [0.923, 0.385], 7)], [eb(148, 'CH ＝ 60/13 ≈ 4.6', C.red, FILL.red, 15), tx(198, '垂線は最短：4.6 ＜ 5 ＜ 13', 12)]),
    },
    {
      note: '問3。内接円は3辺すべてに接する円です。❓ 中心Iから3辺までの距離は？ 接点へ引いた半径は辺に垂直で、どれも同じ r。中心Iは3辺から等しい距離にあります。',
      add: F([...kBase(), ln(kA[0], kA[1], kB[0], kB[1], C.ink, false, 2), ...kIncircle(), ln(kI[0], kI[1], 90, 118, C.red, true, 1.6), ln(kI[0], kI[1], 70, 98, C.red, true, 1.6), ln(kI[0], kI[1], 97.7, 79.5, C.red, true, 1.6), lb(146, 88, '13', 13, C.blue, 'start', true)], [eb(148, '中心Iから3辺まで、すべて r', C.red, FILL.red, 14), tx(198, '接点の半径は辺に垂直', 12)]),
    },
    {
      note: '❓ r を面積で表すには？ Iと3つの頂点を結んで、△ABCを3つの三角形に分けます。底辺は AB、BC、CA で、高さはどれも r。面積の合計は (13＋12＋5)×r÷2＝15r です。',
      add: F([...kBase(), ln(kA[0], kA[1], kB[0], kB[1], C.ink, false, 2), ...kIncircle(), ln(kI[0], kI[1], kA[0], kA[1], C.purple, false, 2), ln(kI[0], kI[1], kB[0], kB[1], C.purple, false, 2), ln(kI[0], kI[1], kC[0], kC[1], C.purple, false, 2), lb(146, 88, '13', 13, C.blue, 'start', true)], [eb(148, '(13 ＋ 12 ＋ 5) × r ÷ 2 ＝ 15r', C.purple, FILL.purple, 14), tx(198, '3つの三角形の面積の和', 12)]),
    },
    {
      note: '全体の面積は30なので 15r＝30。両辺を15でわって r＝2 です。',
      add: T([], [eb(148, '15r ＝ 30', C.purple, FILL.purple, 15, 28), tx(190, 'r ＝ 2（問3）', 14, C.red, true)]),
    },
    {
      note: '別の方法：r＝(AC＋BC−AB)÷2。❓ なぜ？ 円の外の1点から引いた2本の接線の長さは等しいからです。Cのまわりは四角形が正方形なので接線の長さは r ずつ。Aからの接線を a、Bからを b とすると、5＝r＋a、12＝r＋b、13＝a＋b。',
      add: F([...kBase(false), ln(kA[0], kA[1], kB[0], kB[1], C.ink, false, 2), ...kIncircle(), lb(62, 84, 'a', 11, C.green, 'end', true), lb(88, 70, 'a', 11, C.green, 'middle', true), lb(158, 94, 'b', 11, C.blue, 'middle', true), lb(150, 112, 'b', 11, C.blue, 'middle', true), lb(62, 110, 'r', 11, C.red, 'end', true), lb(80, 130, 'r', 11, C.red, 'middle', true)], [eb(148, '5＝r＋a　12＝r＋b　13＝a＋b', C.green, FILL.green, 13), tx(198, '5＋12 ＝ 2r ＋ 13 より r ＝ 2', 12, C.green, true)]),
    },
    {
      note: '答え。問1 AB＝13、問2 CH＝60/13、問3 r＝2。面積を使った求め方と、接線の長さを使った求め方のどちらでも r＝2 になりました。',
      add: F([eb(8, '問1  AB ＝ 13', C.blue, FILL.blue, 14, 30), eb(44, '問2  CH ＝ 60/13', C.blue, FILL.blue, 14, 30), eb(80, '問3  r ＝ 2', C.red, FILL.red, 14, 30)], [eb(148, '確かめ：(5＋12−13)÷2 ＝ 2', C.green, FILL.green, 14), tx(198, '面積でも接線でも同じ答え', 12)]),
    },
  ],
  '面積を2通りで表して、CHと内接円の半径を求める',
);

// ════════════════════════════════════════════
// 9. 正四角錐（keio_koko_sansu_08）
// ════════════════════════════════════════════
const pV: P = [145, 22];
const pA: P = [60, 115];
const pB: P = [170, 115];
const pC: P = [230, 92];
const pD: P = [120, 92];
const pyrFig = (): E[] => [
  pg([pV, pA, pB], C.gray, 'rgba(14,165,233,0.10)'),
  pg([pV, pB, pC], C.gray, 'rgba(14,165,233,0.05)'),
  ln(pD[0], pD[1], pA[0], pA[1], C.gray, true),
  ln(pD[0], pD[1], pC[0], pC[1], C.gray, true),
  ln(pV[0], pV[1], pD[0], pD[1], C.gray, true),
  ln(pV[0], pV[1], pA[0], pA[1], C.ink),
  ln(pV[0], pV[1], pB[0], pB[1], C.ink),
  ln(pV[0], pV[1], pC[0], pC[1], C.ink),
  ln(pA[0], pA[1], pB[0], pB[1], C.ink),
  ln(pB[0], pB[1], pC[0], pC[1], C.ink),
  ln(pV[0], pV[1], 145, 103.5, C.blue, true, 2),
  lb(145, 14, 'V', 13, C.ink, 'middle', true),
  lb(52, 122, 'A', 13, C.ink, 'end', true),
  lb(178, 124, 'B', 13, C.ink, 'start', true),
  lb(238, 94, 'C', 13, C.ink, 'start', true),
  lb(112, 88, 'D', 13, C.ink, 'end', true),
  lb(142, 84, '4cm', 10, C.blue, 'end', true),
  lb(152, 130, '6cm', 11, C.blue, 'middle', true),
];
const keioSansu08 = show(
  [
    {
      note: '底面が1辺6cmの正方形で、高さが4cmの正四角錐です。体積、斜高（側面の三角形の高さ）、側面積を順に求めます。',
      add: T(pyrFig(), [eb(148, '底面 6cm × 6cm　高さ 4cm', C.blue, FILL.blue, 14), tx(198, '問1 体積　問2 斜高　問3 側面積', 12)]),
    },
    {
      note: '❓ 角錐の体積はなぜ ×1/3？ 立方体は、同じ形の四角錐ちょうど3つに分けられます（1つの頂点と、その頂点に集まらない3つの面を結ぶ）。だから角錐は、同じ底面・同じ高さの角柱の1/3です。',
      add: F([bx(30, 26, 110, 60, '角柱の体積\n底面積×高さ', C.blue, FILL.blue, 13), ar(146, 56, 174, 56, C.red), bx(180, 26, 110, 60, '角錐の体積\nその 1/3', C.red, FILL.red, 13)], [eb(148, '角錐 ＝ 底面積 × 高さ × 1/3', C.purple, FILL.purple, 14), tx(198, '立方体は同じ四角錐3つ分', 12)]),
    },
    {
      note: '問1。底面積は 6×6＝36。同じ底面・高さの角柱なら 36×4＝144。角錐はその1/3なので 144÷3＝48（cm³）です。',
      add: F([eb(8, '底面積  6 × 6 ＝ 36 cm²', C.blue, FILL.blue, 13, 28), eb(42, '角柱なら  36 × 4 ＝ 144 cm³', C.blue, FILL.blue, 13, 28), eb(76, '角錐は 1/3  144 ÷ 3 ＝ 48 cm³', C.red, FILL.red, 13, 28)], [eb(148, '体積 ＝ 48 cm³', C.red, FILL.red, 15), tx(198, '（問1の答え）', 12)]),
    },
    {
      note: '問2。❓ 斜高とは？ 側面の三角形VABは二等辺三角形（VA＝VB）です。頂点Vから底辺ABの中点Mへ引いた線VMは、ABに垂直で、この三角形の「高さ」になります。これが斜高です。',
      add: F([...pyrFig(), ln(pV[0], pV[1], 115, 115, C.red, false, 3.5), ci(115, 115, 3, undefined, C.red, C.red), lb(108, 130, 'M', 12, C.red, 'end', true)], [eb(148, '斜高 ＝ VM（VからABの中点M）', C.red, FILL.red, 14), tx(198, '二等辺三角形では、中線 ＝ 高さ', 12)]),
    },
    {
      note: '❓ VM はどう求める？ VO（高さ4）は底面に垂直なので、V・O・M は O が直角の直角三角形です。OM は、底面の中心Oから辺ABの中点Mまでの長さで、真上から見ると辺の長さの半分、6÷2＝3 です。',
      add: F([pg([[20, 30], [92, 30], [92, 102], [20, 102]], C.gray, 'rgba(14,165,233,0.06)'), ci(56, 66, 3, undefined, C.ink, C.ink), ln(56, 66, 56, 102, C.red, false, 3), lb(48, 84, '3', 12, C.red, 'end', true), lb(56, 24, '真上から見た底面', 10, C.gray, 'middle'), lb(14, 66, '6', 12, C.blue, 'end', true), pg([[170, 120], [170, 48], [224, 120]], C.green, GT), rt([170, 120], [0, -1], [1, 0], 8), lb(162, 86, '4', 12, C.blue, 'end', true), lb(197, 132, '3', 12, C.red, 'middle', true), lb(176, 46, 'V', 12, C.ink, 'start', true), lb(164, 126, 'O', 12, C.ink, 'end', true), lb(230, 124, 'M', 12, C.ink, 'start', true)], [eb(148, 'OM ＝ 6 ÷ 2 ＝ 3', C.red, FILL.red, 15), tx(198, '底面の中心から辺の中点まで ＝ 辺の半分', 12)]),
    },
    {
      note: '三平方の定理：VM²＝VO²＋OM²＝4²＋3²＝16＋9＝25。VM＝5（cm）。3・4・5 の直角三角形です。これが問2の答えです。',
      add: F([pg([[110, 122], [110, 50], [164, 122]], C.green, GT), rt([110, 122], [0, -1], [1, 0], 8), lb(102, 86, '4', 12, C.blue, 'end', true), lb(137, 134, '3', 12, C.blue, 'middle', true), lb(150, 82, 'VM', 12, C.red, 'start', true), lb(116, 46, 'V', 12, C.ink, 'start', true)], [eb(148, 'VM² ＝ 4² ＋ 3² ＝ 16 ＋ 9 ＝ 25', C.green, FILL.green, 13), tx(198, '斜高 VM ＝ 5cm（問2）', 14, C.red, true)]),
    },
    {
      note: '問3。❓ 側面の三角形の面積は？ 底辺は AB＝6。高さは、底辺に垂直な斜高 VM＝5 です（側辺VAは底辺に垂直ではないので高さではありません）。面積は 6×5÷2＝15。',
      add: F([pg([[91, 133], [229, 133], [160, 18]], C.gray, BT), ln(160, 18, 160, 133, C.red, false, 3), rt([160, 133], [0, -1], [1, 0], 8), lb(168, 76, 'VM ＝ 5', 12, C.red, 'start', true), lb(200, 126, '6', 12, C.blue, 'middle', true), lb(160, 12, 'V', 12, C.ink, 'middle', true)], [eb(148, '6 × 5 ÷ 2 ＝ 15 cm²', C.blue, FILL.blue, 15), tx(198, '側面の三角形 1枚の面積', 12)]),
    },
    {
      note: '側面は同じ三角形が4枚です。❓ 展開図にすると？ 正方形のまわりに、面積15の三角形が4枚つきます。側面積は 15×4＝60（cm²）です。',
      add: F([pg([[136, 46], [184, 46], [184, 94], [136, 94]], C.gray, FILL.gray), lb(160, 74, '底面', 10, C.gray, 'middle'), pg([[136, 46], [184, 46], [160, 6]], C.blue, BT), pg([[184, 46], [184, 94], [224, 70]], C.blue, BT), pg([[136, 94], [184, 94], [160, 134]], C.blue, BT), pg([[136, 46], [136, 94], [96, 70]], C.blue, BT), lb(160, 36, '15', 11, C.blue, 'middle', true), lb(198, 74, '15', 11, C.blue, 'middle', true), lb(160, 112, '15', 11, C.blue, 'middle', true), lb(122, 74, '15', 11, C.blue, 'middle', true)], [eb(148, '15 × 4 ＝ 60 cm²', C.red, FILL.red, 15), tx(198, '側面積 ＝ 60 cm²（問3）', 13, C.red, true)]),
    },
    {
      note: '❓ 表面積ではないの？ 問いは「側面積」なので、底面は入れません。底面36を加えた 60＋36＝96 は表面積です。どちらを聞かれているかを、問題文で確かめましょう。',
      add: F([eb(18, '側面積  60 cm²（底面なし）', C.red, FILL.red, 14, 40), eb(74, '表面積  60 ＋ 36 ＝ 96 cm²', C.gray, FILL.gray, 14, 40)], [eb(150, '今回の問いは「側面積」', C.purple, FILL.purple, 14), tx(200, '底面は入れない', 12)]),
    },
    {
      note: '検算。側面の4枚は底辺がどれも6で、高さがどれも5。まとめると (6×4)×5÷2＝24×5÷2＝60 と、周の長さ×斜高÷2 でも同じ答えになります。',
      add: F([eb(14, '底辺の合計  6 × 4 ＝ 24', C.blue, FILL.blue, 14, 32), eb(58, '24 × 5 ÷ 2 ＝ 60', C.red, FILL.red, 15, 32), eb(102, '3² ＋ 4² ＝ 5² も成立', C.green, FILL.green, 13, 28)], [tx(180, '周の長さ × 斜高 ÷ 2 でも 60', 13, C.green, true)]),
    },
    {
      note: '答え。問1 体積は 48cm³、問2 斜高は 5cm、問3 側面積は 60cm²。',
      add: F([eb(8, '問1  体積  48 cm³', C.blue, FILL.blue, 14, 30), eb(44, '問2  斜高  5 cm', C.blue, FILL.blue, 14, 30), eb(80, '問3  側面積  60 cm²', C.red, FILL.red, 14, 30)], [eb(148, '斜高は 3・4・5 の直角三角形から', C.green, FILL.green, 13), tx(198, '底面を入れるのは「表面積」のとき', 12)]),
    },
  ],
  '正四角錐の体積・斜高・側面積',
);

export const figuresSchoolKoko07: Record<string, Figure> = {
  meidai_rika_12: meidaiRika12,
  nada_koko_sansu_03: nadaSansu03,
  nada_koko_sansu_07: nadaSansu07,
  koyo_koko_sansu_08: koyoSansu08,
  nishiyamato_koko_sansu_10: nishiyamatoSansu10,
  todaiji_koko_sansu_09: todaijiSansu09,
  todaiji_koko_sansu_10: todaijiSansu10,
  keio_koko_sansu_06: keioSansu06,
  keio_koko_sansu_08: keioSansu08,
};
