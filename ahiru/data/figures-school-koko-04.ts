// 高校受験 入試傾向問題（算数・数学・理科）の動く図解スライド 第04批（koko_in_04）。
// キーは問題 id。「なぜそうなるの？」を根っこまでたどる形で、10枚以上で書く。
// 画面の上半分に図、下の帯（band）にそのスライドの式やひとこと、という配置。
import type { DiagramElement, Figure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, sc, show, band, fresh, cover } from './diagram-kit';

type E = DiagramElement;
const eb = (y: number, t: string, color: string, fill: string, size = 14, h = 30, x = 20, w = 280): E => bx(x, y, w, h, t, color, fill, size);
const tx = (y: number, t: string, size = 12, color: string = C.gray, bold = false): E => lb(160, y, t, size, color, 'middle', bold);
const T = (top: E[], bottom: E[]): E[] => [...top, ...band(140, ...bottom)];
const F = (top: E[], bottom: E[]): E[] => fresh(...top, ...bottom);
const R = (x: number, y: number, w: number, h: number, color: string, fill: string): E => bx(x, y, w, h, undefined, color, fill);
const tint = (r: number, g: number, b: number, a = 0.22) => `rgba(${r},${g},${b},${a})`;
const BLUE_T = tint(2, 132, 199);
const RED_T = tint(225, 29, 72);
const GREEN_T = tint(22, 163, 74);
const PURPLE_T = tint(147, 51, 234);

// ════════ 1. koko_sansu_ex_13_019 ：1辺3cmの正四面体 ════════
const tetraPic = (): E[] => [
  pg([[150, 18], [60, 112], [180, 130]], C.blue, tint(14, 165, 233, 0.12)),
  ln(150, 18, 250, 108, C.blue, false, 2),
  ln(180, 130, 250, 108, C.blue, false, 2),
  ln(60, 112, 250, 108, C.gray, true, 1.6),
  lb(112, 134, '3cm', 11, C.gray, 'middle'),
];
const tri3 = (): E[] => [pg([[100, 118], [220, 118], [160, 14]], C.blue, FILL.blue)];
const baseTri = (): E[] => [pg([[100, 122], [220, 122], [160, 18]], C.gray, FILL.gray), lb(92, 126, 'L', 12, C.ink, 'end'), lb(228, 126, 'R', 12, C.ink, 'start'), lb(160, 10, 'T', 12, C.ink, 'middle')];
const f13_019 = show([
  {
    note: '1辺が 3cm の正四面体です。体積と表面積を求めます。正四面体は、4つの面がすべて同じ大きさの正三角形でできた立体です。',
    add: [...tetraPic(), ...band(140, eb(152, '1辺 3cm の正四面体：体積と表面積は？', C.blue, FILL.blue, 14))],
  },
  {
    note: '❓ なぜ表面積は「正三角形1枚の面積の4倍」でいいの？ 正四面体の面は4枚で、どれも1辺 3cm の正三角形とぴったり同じ形だからです。',
    add: F([pg([[20, 70], [80, 70], [50, 18]], C.blue, FILL.blue), pg([[95, 70], [155, 70], [125, 18]], C.blue, FILL.blue), pg([[170, 70], [230, 70], [200, 18]], C.blue, FILL.blue), pg([[245, 70], [305, 70], [275, 18]], C.blue, FILL.blue)], [eb(120, '面は4枚、すべて同じ正三角形', C.blue, FILL.blue, 14), tx(175, '表面積 ＝ 正三角形1枚 × 4', 14, C.gray, true)]),
  },
  {
    note: '❓ では、正三角形1枚の面積は？ 底辺は 3cm。高さは、真ん中で半分に切ると分かります。半分にした直角三角形は、底辺 1.5cm、斜めの辺 3cm です。',
    add: F([...tri3(), ln(160, 14, 160, 118, C.green, true, 2), pg([[100, 118], [160, 118], [160, 14]], C.green, GREEN_T), lb(118, 62, '3', 12, C.ink, 'end'), lb(130, 131, '1.5', 11, C.ink), lb(190, 131, '1.5', 11, C.ink), lb(168, 66, '高さ h', 12, C.green, 'start', true)], [tx(165, '半分にした直角三角形：1.5 と 3 と h', 13, C.gray, true)]),
  },
  {
    note: '❓ なぜ高さ h は三平方の定理で出せるの？ 直角三角形では「直角をはさむ2辺の2乗の和＝斜辺の2乗」です。だから h² ＝ 3² − 1.5² ＝ 9 − 2.25 ＝ 6.75。6.75 ＝ 27÷4 なので h ＝ 3√3÷2。',
    add: T([], [eb(148, 'h² ＝ 3² − 1.5² ＝ 9 − 2.25 ＝ 6.75', C.green, FILL.green, 14), eb(186, 'h ＝ √(27÷4) ＝ 3√3 ÷ 2', C.green, FILL.green, 14)]),
  },
  {
    note: '正三角形1枚の面積は、底辺×高さ÷2 ＝ 3×(3√3÷2)÷2 ＝ 9√3÷4。4枚で 9√3÷4×4 ＝ 9√3。これが表面積で、9√3 cm² です。',
    add: T([], [eb(148, '1枚 ＝ 3×(3√3÷2)÷2 ＝ 9√3÷4', C.blue, FILL.blue, 14), eb(186, '表面積 ＝ 9√3÷4 × 4 ＝ 9√3 cm²', C.green, FILL.green, 15)]),
  },
  {
    note: '次は体積です。❓ なぜ「底面積×高さ÷3」なの？ 同じ底面・同じ高さの角柱を作ると、角すい3個分がちょうど角柱1個分になるからです。÷3 はそのためです。',
    add: F([bx(70, 30, 100, 90, undefined, C.gray, FILL.gray), pg([[70, 120], [170, 120], [120, 30]], C.blue, FILL.blue), ln(70, 30, 170, 30, C.gray, true, 1.4), lb(245, 60, '角すい 3個分', 13, C.blue, 'middle', true), lb(245, 84, '＝ 同じ底面・高さの', 12, C.gray, 'middle'), lb(245, 102, '角柱 1個分', 12, C.gray, 'middle')], [eb(150, '体積 ＝ 底面積 × 高さ ÷ 3', C.blue, FILL.blue, 15)]),
  },
  {
    note: '❓ 高さはどこを測るの？ 頂点 P から底面にまっすぐ下ろした線（垂線）の足を G とします。P から A・B・C までの距離は全部 3cm で同じなので、G も A・B・C から同じ距離の点、つまり底面の正三角形の中心になります。',
    add: F([pg([[100, 122], [220, 122], [160, 18]], C.gray, FILL.gray), ln(160, 88, 100, 122, C.gray, true), ln(160, 88, 220, 122, C.gray, true), ln(160, 88, 160, 18, C.gray, true), ci(160, 88, 4, undefined, C.red, C.red), lb(172, 92, 'G', 13, C.red, 'start', true), lb(92, 126, 'A', 12, C.ink, 'end'), lb(228, 126, 'B', 12, C.ink, 'start'), lb(160, 10, 'C', 12, C.ink, 'middle')], [eb(146, 'P の真下の点 G ＝ 底面の中心', C.red, FILL.red, 14), tx(196, 'GA ＝ GB ＝ GC（A・B・C から等しい距離）', 12, C.gray)]),
  },
  {
    note: '❓ では、中心 G から頂点 L までの距離は？ 底面を真上から見ます。L から G へ引いた線は、角 L（60°）を半分に分けるので 30°。直角三角形 L-M-G は 30°・60°・90° の形で、辺の比は 1：2：√3 です。',
    add: F([...baseTri(), ln(160, 122, 160, 88, C.green, false, 2), ln(100, 122, 160, 88, C.green, false, 2), pg([[100, 122], [160, 122], [160, 88]], C.green, GREEN_T), ci(160, 88, 3, undefined, C.red, C.red), lb(168, 86, 'G', 12, C.red, 'start', true), lb(166, 130, 'M', 11, C.ink, 'start'), lb(130, 135, '1.5', 11, C.ink), lb(124, 117, '30°', 9, C.green, 'middle')], [eb(150, '辺の比  MG : LG : LM ＝ 1 : 2 : √3', C.green, FILL.green, 14), tx(198, 'LM ＝ 1.5（底辺の半分）', 12, C.gray)]),
  },
  {
    note: '辺の比 1：2：√3 の「√3」にあたるのが LM ＝ 1.5。1ぶん ＝ 1.5÷√3 ＝ √3÷2。LG は2ぶんなので LG ＝ √3。つまり中心から頂点までは √3 cm です。',
    add: F([...baseTri(), pg([[100, 122], [160, 122], [160, 88]], C.green, GREEN_T), ln(100, 122, 160, 88, C.green, false, 3), lb(108, 100, 'LG ＝ √3', 12, C.green, 'end', true)], [eb(148, '1ぶん ＝ 1.5 ÷ √3 ＝ √3 ÷ 2', C.green, FILL.green, 14), eb(186, 'LG ＝ 2ぶん ＝ √3 cm', C.green, FILL.green, 15)]),
  },
  {
    note: '❓ なぜここで三平方の定理？ P・G・A を結ぶと、G で直角になる直角三角形ができるからです。斜めの辺 PA ＝ 3、底辺 GA ＝ √3。高さ PG を h とすると h² ＝ 3² − (√3)² ＝ 9 − 3 ＝ 6。だから h ＝ √6 cm。',
    add: F([pg([[100, 122], [169, 122], [100, 24]], C.blue, FILL.blue), bx(100, 114, 8, 8, undefined, C.gray, FILL.gray), lb(92, 72, 'h', 14, C.blue, 'end', true), lb(134, 134, '√3', 12, C.ink), lb(146, 66, '3', 13, C.ink, 'start'), lb(100, 14, 'P', 12, C.ink, 'middle'), lb(176, 126, 'A', 12, C.ink, 'start'), lb(94, 130, 'G', 12, C.ink, 'end')], [eb(150, 'h² ＝ 3² − (√3)² ＝ 9 − 3 ＝ 6', C.blue, FILL.blue, 14), tx(204, 'h ＝ √6 cm（約2.45cm）', 13, C.blue, true)]),
  },
  {
    note: '体積 ＝ 底面積 × 高さ ÷ 3。底面積は 9√3÷4、高さは √6 です。(9√3÷4)×√6 ＝ 9√18÷4。√18 ＝ 3√2 なので 27√2÷4、これを3でわって 9√2÷4 cm³ です。',
    add: F([eb(10, '体積 ＝ 底面積 × 高さ ÷ 3', C.blue, FILL.blue, 14, 30), eb(50, '＝ (9√3÷4) × √6 ÷ 3', C.blue, FILL.blue, 14, 30), eb(90, '＝ 9√18 ÷ 12 ＝ 27√2 ÷ 12', C.blue, FILL.blue, 14, 30)], [eb(146, '体積 ＝ 9√2÷4 cm³', C.green, FILL.green, 16), tx(196, '（√18 ＝ 3√2 を使った）', 12, C.gray)]),
  },
  {
    note: '確かめ（検算）です。1辺 a の正四面体の体積の公式 a³×√2÷12 に a＝3 を入れると 27√2÷12 ＝ 9√2÷4 で一致します。よくあるまちがいは、高さを辺の 3cm やとなりの高さ 3√3÷2 にしてしまうこと。本当の高さは頂点から中心へ下ろした √6 です。',
    add: F([eb(12, '公式 a³√2÷12 ＝ 27√2÷12 ＝ 9√2÷4 ✓', C.green, FILL.green, 13, 32), eb(56, '表面積 ＝ 正三角形4枚 ＝ 9√3 cm²', C.blue, FILL.blue, 13, 32), eb(100, '高さ √6 ≒ 2.45 ＜ 辺 3 ✓', C.purple, FILL.purple, 13, 32)], [eb(150, '体積 9√2÷4 cm³、表面積 9√3 cm²', C.green, FILL.green, 14)]),
  },
], '正四面体の体積と表面積');

// ════════ 2. koko_sansu_ex_15_050 ：正方形の中の△APQ ════════
const sq2 = (): E[] => [
  pg([[40, 15], [40, 125], [150, 125], [150, 15]], C.gray, FILL.warm),
  lb(32, 14, 'A', 12, C.ink, 'end'), lb(32, 128, 'B', 12, C.ink, 'end'), lb(158, 128, 'C', 12, C.ink, 'start'), lb(158, 14, 'D', 12, C.ink, 'start'),
  lb(95, 135, 'P', 11, C.red, 'middle', true), lb(160, 70, 'Q', 12, C.red, 'start', true),
];
const apq = (a = 0.25): E => pg([[40, 15], [95, 125], [150, 70]], C.red, tint(225, 29, 72, a));
const r2 = cover(173, 0, 147, 140);
const f15_050 = show([
  {
    note: '1辺 2cm の正方形 ABCD です。辺 BC 上に BP＝1、辺 CD 上に CQ＝1 となる点 P、Q をとります。赤い三角形 APQ の面積を求めます。',
    add: [...sq2(), apq(), lb(238, 30, '正方形の1辺 2cm', 12, C.ink), lb(238, 56, 'BP ＝ 1cm', 12, C.ink), lb(238, 82, 'CQ ＝ 1cm', 12, C.ink), ...band(140, eb(152, '△APQ の面積は？', C.red, FILL.red, 15))],
  },
  {
    note: '❓ なぜこの三角形は直接求めにくいの？ 面積は「底辺×高さ÷2」ですが、AP・AQ・PQ はどれも斜めで、底辺も高さも図から読みとれないからです。',
    add: T([r2, lb(238, 40, '3辺とも斜め', 13, C.red, 'middle', true), lb(238, 64, '→ 底辺も高さも', 12, C.gray), lb(238, 82, '読みとれない', 12, C.gray)], [eb(152, '斜めの辺ばかり → そのままでは計算できない', C.red, FILL.red, 13)]),
  },
  {
    note: '❓ では、どうすればいい？ 見つけやすい三角形を先に引いてしまいます。正方形から △APQ をのぞいた部分は、直角をもつ三角形 ①②③ の3つです。直角の2辺なら長さが分かります。',
    add: T([r2, pg([[40, 15], [40, 125], [95, 125]], C.blue, BLUE_T), pg([[95, 125], [150, 125], [150, 70]], C.green, GREEN_T), pg([[150, 70], [150, 15], [40, 15]], C.purple, PURPLE_T), lb(58, 88, '①', 13, C.blue, 'middle', true), lb(132, 108, '②', 13, C.green, 'middle', true), lb(113, 33, '③', 13, C.purple, 'middle', true), lb(238, 50, 'ふつうの直角三角形', 12, C.gray), lb(238, 70, '3つに分ける', 12, C.gray)], [eb(152, '正方形 ＝ ① ＋ ② ＋ ③ ＋ △APQ', C.gray, FILL.gray, 14)]),
  },
  {
    note: '❓ 本当に、この4つでぴったり正方形になるの？ A・P・Q を結ぶと正方形は4つの三角形に分かれます。重なりもすきまもないので、4つの面積をたすと正方形の面積 2×2＝4 になります。だから △APQ ＝ 4 − (①＋②＋③) と引き算で出せます。',
    add: T([], [eb(150, '△APQ ＝ 4 − (① ＋ ② ＋ ③)', C.red, FILL.red, 15), tx(204, '正方形の面積 ＝ 2 × 2 ＝ 4', 13, C.gray, true)]),
  },
  {
    note: '① △ABP を調べます。直角をはさむ辺は BP＝1 と AB＝2。❓ なぜ÷2？ たて2・横1の長方形（面積2）を対角線で半分に切ったのが三角形だからです。よって 1×2÷2 ＝ 1。',
    add: T([r2, ln(40, 15, 95, 15, C.gray, true, 1.6), ln(95, 15, 95, 125, C.gray, true, 1.6), lb(238, 30, '長方形 1×2 ＝ 2', 13, C.blue, 'middle', true), lb(238, 54, 'その半分が ①', 12, C.gray), lb(238, 78, '① ＝ 1', 15, C.blue, 'middle', true)], [eb(152, '① ＝ BP × AB ÷ 2 ＝ 1 × 2 ÷ 2 ＝ 1', C.blue, FILL.blue, 13)]),
  },
  {
    note: '② △PCQ を調べます。❓ なぜ PC ＝ 1？ BC ＝ 2 で BP ＝ 1 なので、残りの PC ＝ 2 − 1 ＝ 1。CQ も 1 です。直角をはさむ2辺がどちらも 1 なので 1×1÷2 ＝ 1/2。',
    add: T([r2, lb(122, 116, '1', 12, C.green, 'middle', true), lb(158, 100, '1', 12, C.green, 'start', true), lb(238, 50, 'PC ＝ 2 − 1 ＝ 1', 13, C.ink), lb(238, 76, '② ＝ 1/2', 15, C.green, 'middle', true)], [eb(152, '② ＝ PC × CQ ÷ 2 ＝ 1 × 1 ÷ 2 ＝ 1/2', C.green, FILL.green, 13)]),
  },
  {
    note: '③ △QDA を調べます。❓ 底辺と高さはどれ？ 直角は D にあります。QD ＝ 2 − 1 ＝ 1（CD ＝ 2 から CQ ＝ 1 を引く）、DA ＝ 2。直角をはさむ2辺は 1 と 2 なので 1×2÷2 ＝ 1。DA は 2 で、1 ではないことに注意します。',
    add: T([r2, lb(158, 44, '1', 12, C.purple, 'start', true), lb(95, 8, '2', 12, C.purple, 'middle', true), lb(238, 50, 'QD ＝ 2 − 1 ＝ 1', 13, C.ink), lb(238, 76, '③ ＝ 1', 15, C.purple, 'middle', true)], [eb(152, '③ ＝ QD × DA ÷ 2 ＝ 1 × 2 ÷ 2 ＝ 1', C.purple, FILL.purple, 13)]),
  },
  {
    note: '3つの三角形の面積をたします。① ＋ ② ＋ ③ ＝ 1 ＋ 1/2 ＋ 1 ＝ 5/2。これが、正方形のうち △APQ 以外の部分の面積です。',
    add: F([...sq2(), pg([[40, 15], [40, 125], [95, 125]], C.blue, BLUE_T), pg([[95, 125], [150, 125], [150, 70]], C.green, GREEN_T), pg([[150, 70], [150, 15], [40, 15]], C.purple, PURPLE_T), lb(58, 88, '1', 14, C.blue, 'middle', true), lb(132, 108, '1/2', 12, C.green, 'middle', true), lb(113, 33, '1', 14, C.purple, 'middle', true)], [eb(152, '1 ＋ 1/2 ＋ 1 ＝ 5/2', C.gray, FILL.gray, 16)]),
  },
  {
    note: '❓ だから △APQ は？ 正方形 4 から、まわりの 5/2 を引けば残りが △APQ です。4 − 5/2 ＝ 8/2 − 5/2 ＝ 3/2。答えは 3/2 cm² です。',
    add: F([...sq2(), apq(0.4), lb(238, 40, '4 − 5/2', 15, C.ink, 'middle', true), lb(238, 70, '＝ 3/2', 18, C.red, 'middle', true)], [eb(152, '△APQ ＝ 4 − 5/2 ＝ 3/2 cm²', C.red, FILL.red, 15)]),
  },
  {
    note: '確かめ（検算）です。4つの三角形の面積をすべてたすと、1 ＋ 1/2 ＋ 1 ＋ 3/2 ＝ 4 になり、正方形 2×2 ＝ 4 とぴったり一致します。この一致で、引き算の計算と答えの両方が確かめられます。',
    add: F([eb(12, '① ＋ ② ＋ ③ ＋ △APQ', C.gray, FILL.gray, 15, 32), eb(56, '＝ 1 ＋ 1/2 ＋ 1 ＋ 3/2 ＝ 4', C.blue, FILL.blue, 15, 32), eb(100, '正方形 ＝ 2 × 2 ＝ 4  ✓', C.green, FILL.green, 15, 32)], [tx(175, '答え：3/2 cm²（1.5cm²）', 16, C.red, true)]),
  },
], '正方形から3つの直角三角形を引く');

// ════════ 3. koko_sansu_ex_16_008 ：平行線にはさまれた折れ線の角 ════════
const base3 = (): E[] => [
  ln(30, 15, 290, 15, C.gray, false, 2), ln(30, 125, 290, 125, C.gray, false, 2), lb(22, 15, 'l', 13, C.ink, 'middle', true), lb(22, 125, 'm', 13, C.ink, 'middle', true),
  ln(170, 15, 195, 68, C.blue, false, 2.6), ln(195, 68, 155, 125, C.blue, false, 2.6),
  lb(170, 7, 'A', 12, C.ink, 'middle'), lb(204, 82, 'B', 12, C.ink, 'start'), lb(148, 134, 'C', 12, C.ink, 'end'),
];
const nLine = (): E[] => [ln(30, 68, 290, 68, C.green, true, 2), lb(22, 68, 'n', 13, C.green, 'middle', true)];
const secA = (): E => sc(170, 15, 20, -65, 0, C.blue, BLUE_T);
const secC = (): E => sc(155, 125, 20, 0, 55, C.red, RED_T);
const secBup = (): E => sc(195, 68, 24, 115, 180, C.blue, BLUE_T);
const secBdn = (): E => sc(195, 68, 24, 180, 235, C.red, RED_T);
const f16_008 = show([
  {
    note: '平行な2本の直線 l と m の間に折れ線 A-B-C があります。l との角が ∠a＝65°、m との角が ∠b＝55°のとき、折れ点の角 ∠x（∠ABC）を求めます。',
    add: [...base3(), lb(202, 28, '∠a＝65°', 11, C.blue, 'start', true), lb(180, 116, '∠b＝55°', 11, C.red, 'start', true), lb(176, 71, '∠x＝？', 12, C.purple, 'end', true), ...band(140, eb(152, 'l ∥ m、∠a＝65°、∠b＝55° のとき ∠x は？', C.blue, FILL.blue, 13))],
  },
  {
    note: '❓ なぜ、このままでは ∠x が求められないの？ 65° と 55° は「直線 l・m との角」で、∠x は「折れ線どうしの角」です。2つの角の間をつなぐ手がかりがなく、平行線の性質も使えません。',
    add: F(base3(), [eb(150, '65° と 55° は直線との角、∠x は折れ線の角', C.gray, FILL.gray, 13), tx(204, '→ つなぐ手がかりがない', 13, C.red, true)]),
  },
  {
    note: '❓ では、手がかりはどう作る？ 折れ点 B を通って l に平行な補助線 n を引きます。l ∥ n で、l ∥ m なので n ∥ m にもなり、平行線が3本そろいます。これで平行線の性質が使えるようになります。',
    add: F([...base3(), ...nLine(), lb(268, 58, 'l ∥ n ∥ m', 11, C.green, 'middle', true)], [eb(150, 'B を通る補助線 n を l と平行に引く', C.green, FILL.green, 14), tx(204, 'n ∥ l ，l ∥ m だから n ∥ m', 13, C.gray, true)]),
  },
  {
    note: '❓ 上の角は何度？ 平行な l と n に直線 AB が交わっているので、Z の形の「錯角」は等しくなります。A での 65° と、B で補助線 n と AB がつくる角は同じ 65° です。',
    add: F([...base3(), ...nLine(), secA(), secBup(), lb(166, 52, '65°', 11, C.blue, 'end', true)], [eb(150, 'l ∥ n → 錯角は等しい → 上の角 ＝ 65°', C.blue, FILL.blue, 14), tx(204, '（∠a ＝ 65° と同じ大きさ）', 12, C.gray)]),
  },
  {
    note: '❓ 下の角は何度？ 同じように n ∥ m に直線 BC が交わっているので、錯角は等しくなります。C での 55° と、B で補助線 n と BC がつくる角は同じ 55° です。',
    add: F([...base3(), ...nLine(), secA(), secBup(), secC(), secBdn(), lb(166, 52, '65°', 11, C.blue, 'end', true), lb(166, 84, '55°', 11, C.red, 'end', true)], [eb(150, 'n ∥ m → 錯角は等しい → 下の角 ＝ 55°', C.red, FILL.red, 14), tx(204, '（∠b ＝ 55° と同じ大きさ）', 12, C.gray)]),
  },
  {
    note: '❓ なぜ65°と55°を「たす」の？ 補助線 n は ∠x の内側を通っていて、∠x を上の角と下の角にちょうど2つに分けています。2つに分けたものを合わせると、もとの角 ∠x にもどるからです。',
    add: F([...base3(), ...nLine(), secBup(), secBdn(), lb(166, 52, '65°', 11, C.blue, 'end', true), lb(166, 84, '55°', 11, C.red, 'end', true)], [eb(150, '∠x ＝ 上の角 ＋ 下の角', C.purple, FILL.purple, 15), tx(204, 'n が ∠x を 2つに分けている', 13, C.gray, true)]),
  },
  {
    note: '計算します。∠x ＝ 65° ＋ 55° ＝ 120°。見た目でも、折れ点の角は 90° より大きい鈍角に見えるので、120° は自然な大きさです。',
    add: F([...base3(), ...nLine(), secBup(), secBdn(), lb(166, 52, '65°', 11, C.blue, 'end', true), lb(166, 84, '55°', 11, C.red, 'end', true)], [eb(148, '∠x ＝ 65° ＋ 55° ＝ 120°', C.green, FILL.green, 17), tx(200, '鈍角（90°より大きい）になっている', 12, C.gray)]),
  },
  {
    note: '確かめ（検算）は、別の方法でします。BC をのばして l とぶつかる点を E とし、三角形 ABE を作ります。A の角は 65°、E の角は錯角で 55° です。',
    add: F([...base3(), ln(195, 68, 232, 15, C.purple, true, 2), lb(236, 8, 'E', 12, C.ink, 'start'), pg([[170, 15], [195, 68], [232, 15]], C.purple, PURPLE_T), sc(170, 15, 20, -65, 0, C.blue, BLUE_T), sc(232, 15, 20, 180, 235, C.red, RED_T), lb(164, 34, 'Aの角 65°', 10, C.blue, 'end', true), lb(242, 34, 'Eの角 55°', 10, C.red, 'start', true)], [eb(150, '三角形 ABE：A ＝ 65°、E ＝ 55°', C.purple, FILL.purple, 14), tx(204, '（E の 55° は ∠b と錯角）', 12, C.gray)]),
  },
  {
    note: '❓ 三角形 ABE の B の角は？ 三角形の内角の和は 180° なので ∠ABE ＝ 180° − 65° − 55° ＝ 60°。C・B・E は一直線なので、∠x ＝ 180° − 60° ＝ 120° となり、さっきの答えと一致します。',
    add: F([...base3(), ln(195, 68, 232, 15, C.purple, true, 2), lb(236, 8, 'E', 12, C.ink, 'start'), pg([[170, 15], [195, 68], [232, 15]], C.purple, PURPLE_T), lb(200, 50, '60°', 10, C.purple, 'middle', true)], [eb(146, '∠ABE ＝ 180° − 65° − 55° ＝ 60°', C.purple, FILL.purple, 14), eb(184, '∠x ＝ 180° − 60° ＝ 120°  ✓', C.green, FILL.green, 15)]),
  },
  {
    note: '答えは ∠x ＝ 120° です。折れ線の角度を求めるときは、折れ点を通る平行線を1本引いて、錯角を使って角を「上と下」に分けると解けます。',
    add: F([eb(12, '折れ点を通る平行線を1本引く', C.green, FILL.green, 14, 32), eb(56, '錯角で 上の角 ＝ 65°、下の角 ＝ 55°', C.blue, FILL.blue, 14, 32), eb(100, '合わせて ∠x ＝ 120°', C.purple, FILL.purple, 15, 32)], [tx(180, '答え ∠x ＝ 120°', 18, C.green, true)]),
  },
], '折れ線の角は平行な補助線で分ける');

// ════════ 4. kurume_koko_sansu_05 ：DE ∥ BC の相似 ════════
const A4: [number, number] = [160, 12];
const B4: [number, number] = [60, 128];
const C4: [number, number] = [260, 128];
const lerp = (p: [number, number], q: [number, number], t: number): [number, number] => [p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t];
const base4 = (bc = '？'): E[] => [
  pg([A4, B4, C4], C.gray, FILL.warm), ln(100, 82, 220, 82, C.blue, false, 2.4),
  lb(160, 5, 'A', 12, C.ink, 'middle'), lb(50, 134, 'B', 12, C.ink, 'end'), lb(270, 134, 'C', 12, C.ink, 'start'), lb(92, 80, 'D', 12, C.ink, 'end'), lb(228, 80, 'E', 12, C.ink, 'start'),
  lb(118, 40, '3', 12, C.blue, 'end', true), lb(68, 106, '2', 12, C.blue, 'end', true), lb(160, 74, '4.5', 12, C.blue, 'middle', true), lb(160, 118, bc, 12, bc === '？' ? C.red : C.green, 'middle', true),
];
const grid4 = (): E[] => {
  const out: E[] = [pg([A4, B4, C4], C.gray, FILL.warm), pg([A4, lerp(A4, B4, 0.6), lerp(A4, C4, 0.6)], C.blue, tint(2, 132, 199, 0.3))];
  for (let k = 1; k <= 4; k++) {
    const p = lerp(A4, B4, k / 5);
    const q = lerp(A4, C4, k / 5);
    const rk = lerp(B4, C4, k / 5);
    const rn = lerp(B4, C4, (5 - k) / 5);
    out.push(ln(p[0], p[1], q[0], q[1], C.gray, false, 1.1), ln(p[0], p[1], rn[0], rn[1], C.gray, false, 1.1), ln(q[0], q[1], rk[0], rk[1], C.gray, false, 1.1));
  }
  out.push(ln(100, 82, 220, 82, C.blue, false, 2.4), lb(160, 5, 'A', 12, C.ink, 'middle'), lb(92, 80, 'D', 12, C.ink, 'end'), lb(228, 80, 'E', 12, C.ink, 'start'));
  return out;
};
const f_kurume05 = show([
  {
    note: '△ABC で AB 上に D、AC 上に E をとり DE∥BC です。AD＝3、DB＝2、DE＝4.5。まず △ADE∽△ABC の証明、次に BC の長さ、最後に △ADE＝27cm² のときの △ABC の面積を求めます。',
    add: [...base4(), ...band(140, eb(152, 'BC ＝ ？　△ADE ＝ 27cm² のとき △ABC ＝ ？', C.blue, FILL.blue, 13))],
  },
  {
    note: '問1：❓ なぜ相似と言えるの？ 相似とは、形が同じで大きさだけがちがうことです。三角形では、2組の角がそれぞれ等しければ形が同じと言えます。まず角 A は △ADE と △ABC の共通の角です。',
    add: F([...base4(), sc(160, 12, 22, 229, 311, C.green, GREEN_T), lb(160, 48, '共通', 10, C.green, 'middle', true)], [eb(150, '① ∠DAE ＝ ∠BAC（共通の角）', C.green, FILL.green, 14), tx(204, '同じ角だから、もちろん等しい', 12, C.gray)]),
  },
  {
    note: '❓ では、もう1組の角は？ DE∥BC なので、直線 AB が平行線に交わってできる「同位角」が等しくなります。∠ADE ＝ ∠ABC です。平行線では、交わる直線との角の向きが同じだからです。',
    add: F([...base4(), sc(160, 12, 22, 229, 311, C.green, GREEN_T), sc(100, 82, 16, 0, 49, C.blue, BLUE_T), sc(60, 128, 16, 0, 49, C.blue, BLUE_T), lb(118, 100, '同位角', 10, C.blue, 'middle', true)], [eb(150, '② ∠ADE ＝ ∠ABC（DE∥BC の同位角）', C.blue, FILL.blue, 14), tx(204, '平行線 → 同位角は等しい', 12, C.gray)]),
  },
  {
    note: '❓ 2組でなぜ足りるの？ 三角形の内角の和は 180° なので、2組の角が等しければ残りの1組の角も自動的に等しくなります。3つの角がすべて等しいから形が同じ。よって △ADE∽△ABC（証明終わり）。',
    add: F([...base4(), sc(160, 12, 22, 229, 311, C.green, GREEN_T), sc(100, 82, 16, 0, 49, C.blue, BLUE_T), sc(60, 128, 16, 0, 49, C.blue, BLUE_T)], [eb(146, '2組の角がそれぞれ等しい', C.green, FILL.green, 14), eb(184, '→ △ADE ∽ △ABC', C.green, FILL.green, 16)]),
  },
  {
    note: '問2：❓ 相似比はどの辺とどの辺で取るの？ 「対応する辺」どうしです。AD の対応は AB 全体で、AD：AB ＝ 3：(3＋2) ＝ 3：5。AD：DB ＝ 3：2 と取りちがえないようにします。',
    add: F([...base4(), ln(160, 12, 100, 82, C.blue, false, 4.5), ln(100, 82, 60, 128, C.red, false, 4.5)], [eb(148, 'AD：AB ＝ 3：(3＋2) ＝ 3：5', C.blue, FILL.blue, 15), tx(200, '（AD：DB ＝ 3：2 ではない）', 12, C.red, true)]),
  },
  {
    note: '❓ なぜ DE：BC も 3：5 になるの？ 相似な図形では、対応する辺の比がすべて同じだからです。DE は BC に対応しているので、DE：BC ＝ 3：5。4.5：BC ＝ 3：5 という比例式が作れます。',
    add: F([...base4(), ln(100, 82, 220, 82, C.blue, false, 5), ln(60, 128, 260, 128, C.purple, false, 5)], [eb(148, 'DE：BC ＝ 3：5', C.blue, FILL.blue, 15), eb(186, '4.5：BC ＝ 3：5', C.purple, FILL.purple, 15)]),
  },
  {
    note: '比例式を解きます。DE の 4.5 が「3ぶん」なので、1ぶん ＝ 4.5÷3 ＝ 1.5。BC は「5ぶん」なので 1.5×5 ＝ 7.5。BC ＝ 7.5cm です。',
    add: F([...base4('7.5cm'), ln(60, 128, 260, 128, C.green, false, 4)], [eb(146, '1ぶん ＝ 4.5 ÷ 3 ＝ 1.5', C.green, FILL.green, 15), eb(184, 'BC ＝ 1.5 × 5 ＝ 7.5cm', C.green, FILL.green, 15)]),
  },
  {
    note: '問3：❓ 面積の比は、なぜ相似比の2乗なの？ 相似比 3：5 のとき、大きな三角形を辺に平行な線で 5×5＝25 個の同じ小さな三角形に分けると、△ADE はそのうち 3×3＝9 個です。面積はたて・横の2方向に広がるので、比は 3²：5²＝9：25 になります。',
    add: F(grid4(), [eb(148, '△ADE ＝ 小三角形 9個（3×3）', C.blue, FILL.blue, 14), eb(186, '△ABC ＝ 小三角形 25個（5×5）', C.gray, FILL.gray, 14)]),
  },
  {
    note: '面積比は 9：25 なので、27：△ABC ＝ 9：25。9個ぶんが 27cm² だから 1個ぶん ＝ 27÷9 ＝ 3cm²。25個ぶんは 3×25 ＝ 75。△ABC ＝ 75cm² です。',
    add: T([bx(115, 50, 90, 16, '9個 ＝ 27cm²', C.blue, '#FFFFFF', 10), bx(100, 104, 120, 16, '小三角形 1個 ＝ 3cm²', C.gray, '#FFFFFF', 10)], [eb(146, '1個ぶん ＝ 27 ÷ 9 ＝ 3cm²', C.green, FILL.green, 15), eb(184, '△ABC ＝ 3 × 25 ＝ 75cm²', C.green, FILL.green, 15)]),
  },
  {
    note: '確かめ（検算）です。のこりの台形 DBCE は小三角形 25−9＝16 個で 3×16＝48cm²。△ADE の 27 とたすと 27＋48＝75 になり、△ABC の面積と一致します。答えは BC＝7.5cm、△ABC＝75cm² です。',
    add: F([...grid4(), bx(115, 50, 90, 16, '9個 ＝ 27cm²', C.blue, '#FFFFFF', 10), bx(80, 104, 160, 16, 'のこり 16個 ＝ 48cm²（台形 DBCE）', C.gray, '#FFFFFF', 10)], [eb(146, '27 ＋ 48 ＝ 75  ✓', C.green, FILL.green, 16), tx(198, '答え：BC ＝ 7.5cm、△ABC ＝ 75cm²', 13, C.green, true)]),
  },
], '平行線と相似（相似比と面積比）');

// ════════ 5. kurume_koko_sansu_06 ：台形の対角線と相似 ════════
const base5 = (): E[] => [
  pg([[52, 15], [268, 15], [232, 125], [88, 125]], C.gray, FILL.warm), ln(52, 15, 232, 125, C.gray, false, 1.6), ln(268, 15, 88, 125, C.gray, false, 1.6),
  lb(44, 10, 'A', 12, C.ink, 'end'), lb(276, 10, 'B', 12, C.ink, 'start'), lb(82, 133, 'D', 12, C.ink, 'end'), lb(238, 133, 'C', 12, C.ink, 'start'), lb(170, 76, 'O', 12, C.ink, 'start'),
];
const f_kurume06 = show([
  {
    note: '台形 ABCD で AB∥CD、AB＝12cm、CD＝8cm、高さ 10cm。対角線の交点を O とします。△AOB の面積を求めます（図は高さを縮めて描いています）。',
    add: [...base5(), lb(160, 8, '12cm', 11, C.blue, 'middle', true), lb(160, 134, '8cm', 11, C.blue, 'middle', true), ln(44, 15, 44, 125, C.gray, true, 1.4), lb(40, 70, '10cm', 11, C.gray, 'end'), ...band(140, eb(152, '△AOB の面積は？', C.blue, FILL.blue, 15))],
  },
  {
    note: '問1：❓ なぜ △AOB∽△COD と言えるの？ まず AB∥CD に対角線 AC が交わっているので、Z の形の「錯角」が等しくなります。∠OAB ＝ ∠OCD です。平行線は同じ向きだから、交わる線との角も同じになります。',
    add: F([...base5(), sc(52, 15, 22, -31.4, 0, C.blue, BLUE_T), sc(232, 125, 22, 148.6, 180, C.blue, BLUE_T)], [eb(150, '∠OAB ＝ ∠OCD（AB∥CD の錯角）', C.blue, FILL.blue, 14), tx(204, '対角線 AC が平行線を横切っている', 12, C.gray)]),
  },
  {
    note: '2組目の角を探します。今度は対角線 BD が平行線を横切っているので、やはり錯角が等しく ∠OBA ＝ ∠ODC です。',
    add: F([...base5(), sc(52, 15, 22, -31.4, 0, C.blue, BLUE_T), sc(232, 125, 22, 148.6, 180, C.blue, BLUE_T), sc(268, 15, 22, 180, 211.4, C.red, RED_T), sc(88, 125, 22, 0, 31.4, C.red, RED_T)], [eb(150, '∠OBA ＝ ∠ODC（AB∥CD の錯角）', C.red, FILL.red, 14), tx(204, '対角線 BD が平行線を横切っている', 12, C.gray)]),
  },
  {
    note: '❓ 2組の角だけで、なぜ相似と言えるの？ 三角形の内角の和は 180° なので、2組が等しければ残りの角も等しくなります。実際、O にある2つの角は向かい合う「対頂角」でも等しいです。だから △AOB∽△COD（証明終わり）。',
    add: F([...base5(), sc(52, 15, 22, -31.4, 0, C.blue, BLUE_T), sc(232, 125, 22, 148.6, 180, C.blue, BLUE_T), sc(268, 15, 22, 180, 211.4, C.red, RED_T), sc(88, 125, 22, 0, 31.4, C.red, RED_T), sc(160, 81, 20, 31.4, 148.6, C.green, GREEN_T), sc(160, 81, 20, 211.4, 328.6, C.green, GREEN_T)], [eb(148, '2組の角が等しい（O は対頂角）', C.green, FILL.green, 14), eb(186, '→ △AOB ∽ △COD', C.green, FILL.green, 16)]),
  },
  {
    note: '問2：❓ 相似比はどの辺どうしで取るの？ 「対応する辺」です。A は C に、B は D に対応するので、AB に対応する辺は CD。相似比は AB：CD ＝ 12：8 ＝ 3：2（4でわって簡単にする）です。',
    add: F([...base5(), ln(52, 15, 268, 15, C.blue, false, 5), ln(88, 125, 232, 125, C.blue, false, 5)], [eb(150, 'AB：CD ＝ 12：8 ＝ 3：2', C.blue, FILL.blue, 16), tx(204, '（12 と 8 を 4 でわった）', 12, C.gray)]),
  },
  {
    note: '問3：❓ △AOB の面積を出すには、何が必要？ 底辺 AB＝12 は分かっているので、O から AB までの高さが必要です。相似な三角形では、対応する高さの比も相似比と同じ 3：2。O を通る縦の線で、高さ10cm を上と下に分けます。',
    add: F([...base5(), ln(160, 15, 160, 125, C.purple, true, 2), lb(168, 46, '上の高さ', 11, C.blue, 'start', true), lb(168, 104, '下の高さ', 11, C.red, 'start', true)], [eb(148, '上の高さ：下の高さ ＝ 3：2', C.purple, FILL.purple, 15), tx(200, '上＋下 ＝ 10cm', 13, C.gray, true)]),
  },
  {
    note: '10cm を 3：2 に分けます。全体は 3＋2 ＝ 5ぶん。1ぶん ＝ 10÷5 ＝ 2cm なので、上の高さは 2×3 ＝ 6cm、下の高さは 2×2 ＝ 4cm です。',
    add: F([...base5(), ln(160, 15, 160, 125, C.purple, true, 2), lb(168, 46, '6cm', 13, C.blue, 'start', true), lb(168, 104, '4cm', 13, C.red, 'start', true)], [eb(148, '1ぶん ＝ 10 ÷ 5 ＝ 2cm', C.purple, FILL.purple, 15), eb(186, '上 ＝ 2×3 ＝ 6cm、下 ＝ 2×2 ＝ 4cm', C.purple, FILL.purple, 14)]),
  },
  {
    note: '△AOB の面積 ＝ 底辺 12 × 高さ 6 ÷ 2 ＝ 36cm²。❓ なぜ÷2？ 底辺12・高さ6の長方形（面積72）の半分が三角形だからです。',
    add: F([...base5(), pg([[52, 15], [268, 15], [160, 81]], C.blue, tint(2, 132, 199, 0.3)), ln(52, 15, 52, 81, C.gray, true, 1.4), ln(52, 81, 268, 81, C.gray, true, 1.4), ln(268, 15, 268, 81, C.gray, true, 1.4), ln(160, 15, 160, 81, C.purple, true, 1.6), lb(174, 50, '6', 12, C.purple, 'start', true)], [eb(148, '△AOB ＝ 12 × 6 ÷ 2 ＝ 36cm²', C.green, FILL.green, 15), tx(200, '長方形 12×6 ＝ 72 の半分', 12, C.gray)]),
  },
  {
    note: '確かめ（検算）は、台形の面積を使います。❓ 面積比はなぜ 9：4？ 相似比 3：2 の2乗です。△AOB＝9k、△COD＝4k とおきます。さらに △AOB と △BOC は、B からの高さが共通で底辺が AO：OC＝3：2。だから △BOC＝6k、△AOD も 6k です。',
    add: F([...base5(), pg([[52, 15], [268, 15], [160, 81]], C.blue, BLUE_T), pg([[88, 125], [232, 125], [160, 81]], C.purple, PURPLE_T), pg([[268, 15], [232, 125], [160, 81]], C.green, GREEN_T), pg([[52, 15], [88, 125], [160, 81]], C.red, RED_T), lb(160, 36, '9k', 13, C.blue, 'middle', true), lb(160, 112, '4k', 13, C.purple, 'middle', true), lb(224, 72, '6k', 13, C.green, 'middle', true), lb(98, 72, '6k', 13, C.red, 'middle', true)], [eb(148, 'AOB：BOC ＝ AO：OC ＝ 3：2 ＝ 9k：6k', C.green, FILL.green, 13), tx(200, '（B からの高さが同じ三角形）', 12, C.gray)]),
  },
  {
    note: '4つの三角形をすべてたすと台形になります。9k＋4k＋6k＋6k ＝ 25k ＝ 台形の面積 (12＋8)×10÷2 ＝ 100。だから k ＝ 4 で、△AOB ＝ 9×4 ＝ 36cm²。さっきの 36 と一致しました。',
    add: F([eb(12, '台形 ＝ (12＋8) × 10 ÷ 2 ＝ 100', C.gray, FILL.gray, 14, 32), eb(56, '25k ＝ 100 → k ＝ 4', C.blue, FILL.blue, 15, 32), eb(100, '△AOB ＝ 9k ＝ 36cm²  ✓', C.green, FILL.green, 15, 32)], [tx(180, '（△COD ＝ 16、△BOC ＝ △AOD ＝ 24）', 12, C.gray)]),
  },
  {
    note: '答えは 問2：相似比 3：2、問3：△AOB ＝ 36cm² です。別の方法でも同じ値になり、36＋16＋24＋24＝100 と台形の面積にもなるので、答えは確かです。',
    add: F([eb(12, '36 ＋ 16 ＋ 24 ＋ 24 ＝ 100  ✓', C.green, FILL.green, 15, 32), eb(56, '相似比 AB：CD ＝ 3：2', C.blue, FILL.blue, 15, 32), eb(100, '△AOB ＝ 36cm²', C.green, FILL.green, 17, 32)], [tx(180, '2通りの方法で一致', 14, C.gray, true)]),
  },
], '台形の対角線でできる相似な三角形');

// ════════ 6. koko_sansu_ex_16_047 ：正四角錐の表面上の経路 ════════
const face6 = (): E[] => [pg([[90, 125], [230, 125], [160, 20]], C.gray, FILL.warm), lb(160, 12, 'P', 12, C.ink, 'middle'), lb(82, 130, 'A', 12, C.ink, 'end'), lb(238, 130, 'B', 12, C.ink, 'start')];
const route6 = (): E[] => [ln(160, 20, 90, 125, C.red, false, 4), ln(160, 20, 230, 125, C.red, false, 4)];
const f16_047 = show([
  {
    note: '底面の1辺が 4cm、側面の二等辺三角形の「底辺への高さ」が 3cm の正四角錐 P-ABCD です。底面の頂点 A から頂点 P を通って、となりの頂点 B まで表面を進む経路 A→P→B の長さを求めます。',
    add: [pg([[50, 118], [190, 118], [250, 90], [110, 90]], C.gray, FILL.warm), ln(120, 18, 50, 118, C.gray, false, 2), ln(120, 18, 190, 118, C.gray, false, 2), ln(120, 18, 250, 90, C.gray, false, 2), ln(120, 18, 110, 90, C.gray, true, 1.4), ln(120, 18, 120, 118, C.gray, true, 1.4), ln(50, 118, 190, 118, C.blue, false, 2), lb(42, 122, 'A', 12, C.ink, 'end'), lb(198, 122, 'B', 12, C.ink, 'start'), lb(120, 10, 'P', 12, C.ink, 'middle'), lb(120, 131, '底辺 4cm', 11, C.blue, 'middle'), lb(116, 62, '3cm', 11, C.red, 'end', true), ln(120, 18, 50, 118, C.red, false, 4), ln(120, 18, 190, 118, C.red, false, 4), ...band(140, eb(152, '経路 A → P → B の長さは？', C.red, FILL.red, 14))],
  },
  {
    note: '❓ なぜ、この経路の長さが計算できるの？ A・P・B は、3つとも同じ側面「三角形 PAB」の上にあります。この面は1枚の平らな三角形なので、経路は三角形の2辺 PA と PB を進むだけです。',
    add: F([...face6(), ...route6()], [eb(150, 'A・P・B は 同じ面（三角形 PAB）の上', C.red, FILL.red, 14), tx(204, '経路 ＝ PA ＋ PB', 14, C.gray, true)]),
  },
  {
    note: '❓ では PA は 3cm？ いいえ。3cm は「P から底辺 AB へ下ろした垂線 PM の長さ」です。PA は斜めに進む辺なので、PM より長くなります。ここを同じにしてはいけません。',
    add: F([...face6(), ln(160, 20, 160, 125, C.green, true, 2), bx(154, 119, 6, 6, undefined, C.gray, FILL.gray), lb(166, 72, '3cm', 12, C.green, 'start', true), lb(116, 62, 'PA', 12, C.red, 'end', true), lb(160, 134, 'M', 11, C.ink, 'middle')], [eb(150, '高さ PM ＝ 3cm　≠　PA', C.red, FILL.red, 15), tx(204, 'PA は斜めの辺', 13, C.gray, true)]),
  },
  {
    note: '❓ なぜ M は AB のちょうど真ん中なの？ 正四角錐の側面は、PA＝PB の二等辺三角形です。二等辺三角形では、頂点から底辺に下ろした垂線が底辺を2等分します。だから AM ＝ MB ＝ 4÷2 ＝ 2cm。',
    add: F([...face6(), ln(160, 20, 160, 125, C.green, true, 2), bx(154, 119, 6, 6, undefined, C.gray, FILL.gray), lb(125, 133, '2cm', 11, C.blue, 'middle', true), lb(195, 133, '2cm', 11, C.blue, 'middle', true), lb(166, 72, '3cm', 12, C.green, 'start', true)], [eb(148, 'PA ＝ PB（二等辺三角形）', C.blue, FILL.blue, 14), tx(198, '→ M は AB の中点、AM ＝ 2cm', 13, C.gray, true)]),
  },
  {
    note: '直角三角形 PMA を取り出します。直角をはさむ2辺は PM＝3cm と AM＝2cm。求めたい PA は、いちばん長い斜辺です。',
    add: F([pg([[160, 20], [160, 125], [90, 125]], C.green, GREEN_T), bx(154, 119, 6, 6, undefined, C.gray, FILL.gray), ln(160, 20, 90, 125, C.red, false, 3), lb(166, 72, '3cm', 12, C.green, 'start', true), lb(125, 133, '2cm', 12, C.green, 'middle', true), lb(112, 62, 'PA ＝ ？', 12, C.red, 'end', true)], [eb(150, '直角をはさむ辺 3 と 2、斜辺 PA', C.green, FILL.green, 14), tx(204, '斜辺はいちばん長い辺', 13, C.gray, true)]),
  },
  {
    note: '❓ なぜ三平方の定理で求められるの？ 直角三角形では「直角をはさむ2辺のそれぞれの2乗の和が、斜辺の2乗に等しい」からです。PA² ＝ 2² ＋ 3² ＝ 4 ＋ 9 ＝ 13。',
    add: F([pg([[160, 20], [160, 125], [90, 125]], C.green, GREEN_T), bx(154, 119, 6, 6, undefined, C.gray, FILL.gray), lb(166, 72, '3', 13, C.green, 'start', true), lb(125, 133, '2', 13, C.green, 'middle', true), lb(112, 62, 'PA', 13, C.red, 'end', true)], [eb(148, '斜辺² ＝ 他の2辺の 2乗の和', C.green, FILL.green, 14), eb(186, 'PA² ＝ 2² ＋ 3² ＝ 4 ＋ 9 ＝ 13', C.red, FILL.red, 15)]),
  },
  {
    note: 'PA² ＝ 13 なので、PA ＝ √13 cm です。√13 は約 3.6 で、高さ PM＝3cm より長くなっています。斜めの辺のほうが、垂線より長いという感覚と合います。',
    add: T([lb(250, 50, 'PA ＝ √13', 14, C.red, 'middle', true), lb(250, 76, '≒ 3.6cm', 13, C.gray, 'middle')], [eb(150, 'PA ＝ √13 cm ≒ 3.6cm ＞ 3cm', C.red, FILL.red, 15)]),
  },
  {
    note: 'もう一方の PB も同じです。PM＝3cm、MB＝2cm の直角三角形なので PB² ＝ 13、PB ＝ √13 cm。PA と PB は同じ長さです（二等辺三角形だからです）。',
    add: F([pg([[160, 20], [160, 125], [90, 125]], C.green, GREEN_T), pg([[160, 20], [160, 125], [230, 125]], C.purple, PURPLE_T), ln(160, 20, 90, 125, C.red, false, 3), ln(160, 20, 230, 125, C.red, false, 3), lb(112, 62, '√13', 13, C.red, 'end', true), lb(208, 62, '√13', 13, C.red, 'start', true), lb(166, 72, '3', 12, C.ink, 'start')], [eb(150, 'PB² ＝ 2² ＋ 3² ＝ 13 → PB ＝ √13 cm', C.purple, FILL.purple, 14), tx(204, 'PA ＝ PB', 13, C.gray, true)]),
  },
  {
    note: '経路の長さは PA ＋ PB ＝ √13 ＋ √13 ＝ 2√13 cm です。同じ数を2回たすので、2×√13 と書けます。',
    add: F([...face6(), ...route6(), lb(112, 62, '√13', 13, C.red, 'end', true), lb(208, 62, '√13', 13, C.red, 'start', true)], [eb(148, 'A → P → B ＝ PA ＋ PB', C.red, FILL.red, 15), eb(186, '＝ √13 ＋ √13 ＝ 2√13 cm', C.green, FILL.green, 16)]),
  },
  {
    note: '確かめ（検算）です。2√13 ≒ 2×3.6 ＝ 7.2cm。A から B まで真っすぐ進む 4cm より長く、高さを使った 3＋3＝6cm のまちがった答えよりも長くなっています。よくあるまちがいは、高さ 3cm をそのまま PA として 3＋3＝6cm とすることです。',
    add: F([eb(12, '2√13 ≒ 2 × 3.6 ＝ 7.2cm', C.green, FILL.green, 15, 32), eb(56, 'AB 直進 4cm ＜ 7.2cm  ✓', C.blue, FILL.blue, 15, 32), eb(100, '3＋3＝6 は誤り（PA は 3 より長い）', C.red, FILL.red, 14, 32)], [tx(180, '答え：2√13 cm', 17, C.green, true)]),
  },
], '側面の三角形を取り出して三平方');

// ════════ 7. koko_sansu_ex_15_007 ：リンゴとミカンの個数（面積図） ════════
const axis7 = (): E[] => [lb(36, 93, '80円', 10, C.gray, 'end'), lb(36, 45, '120円', 10, C.gray, 'end'), lb(160, 134, '15個', 10, C.gray, 'middle')];
const f15_007 = show([
  {
    note: '80円のリンゴと120円のミカンを、あわせて15個買って合計1400円でした。それぞれ何個買ったかを求めます。',
    add: [bx(30, 20, 120, 50, 'リンゴ\n1個 80円', C.red, FILL.red, 14), bx(170, 20, 120, 50, 'ミカン\n1個 120円', C.main, FILL.warm, 14), lb(160, 98, 'あわせて 15個 ／ 合計 1400円', 14, C.ink, 'middle', true), ...band(140, eb(152, 'リンゴ・ミカンは何個ずつ？', C.blue, FILL.blue, 15))],
  },
  {
    note: '❓ なぜ「全部リンゴ」と仮定するの？ 買った個数が 15個と分かっているので、全部同じ種類と考えれば代金が簡単に計算できるからです。全部リンゴなら 80円×15個 ＝ 1200円。横が個数、たてがねだんの長方形の面積が代金になります。',
    add: F([...axis7(), bx(40, 61, 240, 64, '全部リンゴ：80円 × 15個 ＝ 1200円', C.red, FILL.red, 11)], [eb(150, '全部リンゴと考えると 1200円', C.red, FILL.red, 15)]),
  },
  {
    note: '実際の代金は 1400円で、1200円より 200円多いです。❓ なぜ多いの？ 高いミカンがまざっているからです。全部ミカンなら 120円×15個 ＝ 1800円（点線）で、本当はその間にあります。',
    add: T([ln(40, 29, 280, 29, C.main, true, 1.6), lb(46, 45, '全部ミカンなら 1800円', 10, C.main, 'start', true)], [eb(148, '1400 − 1200 ＝ 200円 ぶん たりない', C.main, FILL.warm, 15), tx(200, '（ミカンのぶんだけ高くなっている）', 12, C.gray)]),
  },
  {
    note: '❓ リンゴをミカンに1個取りかえると、代金はいくら変わる？ 120円 − 80円 ＝ 40円ふえます。図では、右はしの1列が 40円ぶん高くなります。',
    add: T([bx(264, 29, 16, 32, undefined, C.main, FILL.warm), lb(272, 22, '＋40', 10, C.main, 'middle', true)], [eb(150, '1個 取りかえると 120 − 80 ＝ 40円ふえる', C.main, FILL.warm, 14)]),
  },
  {
    note: '❓ 何個取りかえれば 200円ふえる？ 1個で 40円ふえるので、200円 ÷ 40円 ＝ 5個です。5個取りかえると、40円×5個 ＝ 200円で、ちょうど 1400円になります。',
    add: T([bx(200, 29, 80, 32, '40円×5個\n＝200円', C.main, FILL.warm, 10)], [eb(148, '200 ÷ 40 ＝ 5  → ミカン 5個', C.main, FILL.warm, 16), tx(200, '（40円ずつ ふえて 200円になる回数）', 12, C.gray)]),
  },
  {
    note: 'ミカンは 5個、リンゴは 15 − 5 ＝ 10個です。図にすると、左の10列がリンゴ（高さ80円）、右の5列がミカン（高さ120円）で、面積の合計が代金になります。',
    add: F([...axis7(), bx(40, 61, 160, 64, 'リンゴ 10個\n80×10＝800円', C.red, FILL.red, 11), bx(200, 29, 80, 96, 'ミカン 5個\n120×5\n＝600円', C.main, FILL.warm, 11)], [eb(150, 'リンゴ 10個、ミカン 5個', C.blue, FILL.blue, 16)]),
  },
  {
    note: '確かめ（検算）です。代金は 80×10 ＋ 120×5 ＝ 800 ＋ 600 ＝ 1400円、個数は 10 ＋ 5 ＝ 15個。どちらも問題の条件とぴったり合います。',
    add: F([eb(12, '代金：800 ＋ 600 ＝ 1400円  ✓', C.green, FILL.green, 15, 32), eb(56, '個数：10 ＋ 5 ＝ 15個  ✓', C.green, FILL.green, 15, 32), eb(100, 'リンゴ 10個、ミカン 5個', C.blue, FILL.blue, 16, 32)], [tx(180, '2つの条件がどちらも合えば正しい', 13, C.gray, true)]),
  },
  {
    note: '別の考え方でも確かめます。全部ミカンなら 1800円で、本当は 1400円。1800 − 1400 ＝ 400円へっています。リンゴに1個取りかえるたびに 40円へるので、400 ÷ 40 ＝ 10個がリンゴ。さっきと同じ答えです。',
    add: F([...axis7(), bx(40, 29, 240, 96, '全部ミカン：120円 × 15個 ＝ 1800円', C.main, FILL.warm, 11), bx(40, 29, 160, 32, 'リンゴに10個取りかえ\n40×10＝400円へる', C.purple, FILL.purple, 9)], [eb(148, '1800 − 1400 ＝ 400円', C.purple, FILL.purple, 15), eb(186, '400 ÷ 40 ＝ 10 → リンゴ 10個', C.purple, FILL.purple, 15)]),
  },
  {
    note: '❓ 図の考え方は、式で書くとどうなる？ リンゴを x個とすると、ミカンは (15 − x) 個。代金は 80x ＋ 120(15 − x) ＝ 1400。かっこをひらくと 1800 − 40x ＝ 1400 で x ＝ 10。「1個ふえるごとに 40円へる」が −40x にあたります。',
    add: F([eb(10, 'リンゴ x個 → ミカン (15 − x)個', C.blue, FILL.blue, 14, 30), eb(50, '80x ＋ 120(15 − x) ＝ 1400', C.blue, FILL.blue, 14, 30), eb(90, '1800 − 40x ＝ 1400 → x ＝ 10', C.green, FILL.green, 14, 30)], [tx(160, 'x が1個ふえると 40円へる ← 面積図と同じ', 13, C.gray, true), tx(196, 'ミカン ＝ 15 − 10 ＝ 5個', 13, C.green, true)]),
  },
  {
    note: '答えは リンゴ 10個、ミカン 5個 です。面積図でも式でも同じ結果になり、代金も個数も条件と合っているので確かです。',
    add: F([bx(40, 61, 160, 64, 'リンゴ 10個', C.red, FILL.red, 14), bx(200, 29, 80, 96, 'ミカン 5個', C.main, FILL.warm, 14)], [eb(150, 'リンゴ 10個、ミカン 5個', C.green, FILL.green, 17)]),
  },
], '個数と代金を面積図で考える');

// ════════ 8. koko_kanto2026_sansu_030 ：3辺13・15・14の三角形 ════════
const base8 = (): E[] => [
  pg([[90, 122], [216, 122], [135, 14]], C.gray, FILL.warm), lb(135, 7, 'A', 12, C.ink, 'middle'), lb(82, 126, 'B', 12, C.ink, 'end'), lb(224, 126, 'C', 12, C.ink, 'start'),
  lb(100, 62, '13', 12, C.blue, 'end', true), lb(180, 62, '15', 12, C.blue, 'start', true), lb(190, 134, '14cm', 11, C.blue, 'middle', true),
];
const hline = (): E[] => [ln(135, 14, 135, 122, C.green, true, 2), bx(135, 116, 6, 6, undefined, C.gray, FILL.gray), lb(135, 132, 'H', 12, C.ink, 'middle')];
const f_kanto030 = show([
  {
    note: '△ABC で AB＝13cm、AC＝15cm、BC＝14cm です。頂点 A から辺 BC に下ろした垂線の足を H として、BH・CH、AH、△ABC の面積を求めます。',
    add: [...base8(), ...band(140, eb(152, 'BH・CH は？　AH は？　面積は？', C.blue, FILL.blue, 15))],
  },
  {
    note: '❓ なぜ垂線 AH を引くの？ 面積は「底辺×高さ÷2」ですが、この三角形は高さが分かっていません。A から BC に垂線を引くと、直角三角形 ABH と ACH ができて、直角三角形なら三平方の定理が使えるからです。',
    add: F([...base8(), ...hline(), pg([[90, 122], [135, 122], [135, 14]], C.blue, BLUE_T), pg([[135, 122], [216, 122], [135, 14]], C.green, GREEN_T)], [eb(150, '垂線 AH で 2つの直角三角形に分ける', C.green, FILL.green, 14), tx(204, '→ 三平方の定理が使える', 13, C.gray, true)]),
  },
  {
    note: '❓ BH の長さが分かっていないのに、どう進める？ BH を x とおきます。BC 全体が 14cm なので、のこりの CH ＝ 14 − x と表せます。文字は1つだけにするのがコツです。',
    add: F([...base8(), ...hline(), lb(112, 113, 'x', 13, C.blue, 'middle', true), lb(176, 113, '14 − x', 12, C.green, 'middle', true)], [eb(150, 'BH ＝ x とおくと CH ＝ 14 − x', C.blue, FILL.blue, 15), tx(204, 'BC 全体が 14cm だから', 13, C.gray, true)]),
  },
  {
    note: '❓ なぜ AH² を2通りに書くの？ AH は2つの直角三角形に共通の辺で、どちらからも長さが出せるからです。△ABH からは AH² ＝ 13² − x²、△ACH からは AH² ＝ 15² − (14 − x)²。同じ AH なので、この2つは等しくなります。',
    add: F([bx(10, 14, 145, 92, '△ABH\nAH² ＝ 13² − x²\n＝ 169 − x²', C.blue, FILL.blue, 13), bx(165, 14, 145, 92, '△ACH\nAH² ＝ 15² − (14−x)²\n＝ 29 + 28x − x²', C.green, FILL.green, 12)], [eb(150, '同じ AH だから、2つの式は等しい', C.purple, FILL.purple, 14), tx(204, '（225 − 196 ＝ 29 を使った）', 12, C.gray)]),
  },
  {
    note: '等しいとおいて解きます。169 − x² ＝ 29 ＋ 28x − x²。❓ なぜ x² が消えるの？ 両方の式に同じ「−x²」があるので、両辺に ＋x² してしまえば消えるからです。すると 140 ＝ 28x で x ＝ 5。',
    add: F([eb(10, '169 − x² ＝ 29 ＋ 28x − x²', C.gray, FILL.gray, 14, 30), eb(50, '169 ＝ 29 ＋ 28x', C.blue, FILL.blue, 14, 30), eb(90, '140 ＝ 28x → x ＝ 5', C.green, FILL.green, 15, 30)], [tx(170, '両辺の −x² は 同じだから消える', 13, C.gray, true)]),
  },
  {
    note: '(1) の答えは BH ＝ 5cm、CH ＝ 14 − 5 ＝ 9cm です。5 と 9 をたすと 14 になり、BC の長さと合っています。',
    add: F([...base8(), ...hline(), lb(112, 113, '5', 13, C.blue, 'middle', true), lb(176, 113, '9', 13, C.green, 'middle', true)], [eb(148, 'BH ＝ 5cm、CH ＝ 14 − 5 ＝ 9cm', C.green, FILL.green, 15), tx(200, '確かめ：5 ＋ 9 ＝ 14 ✓', 13, C.gray, true)]),
  },
  {
    note: '(2) AH を求めます。直角三角形 ABH で AH² ＝ 13² − 5² ＝ 169 − 25 ＝ 144。12×12＝144 なので AH ＝ 12cm。辺の比が 5：12：13 の、有名な直角三角形になっています。',
    add: F([pg([[60, 122], [110, 122], [110, 14]], C.blue, BLUE_T), bx(104, 116, 6, 6, undefined, C.gray, FILL.gray), lb(116, 68, 'AH ＝ ？', 12, C.green, 'start', true), lb(85, 133, '5', 12, C.ink, 'middle', true), lb(70, 62, '13', 12, C.blue, 'end', true)], [eb(148, 'AH² ＝ 13² − 5² ＝ 169 − 25 ＝ 144', C.blue, FILL.blue, 14), eb(186, 'AH ＝ 12cm（12 × 12 ＝ 144）', C.green, FILL.green, 15)]),
  },
  {
    note: '確かめ（検算）は △ACH でします。CH＝9、AC＝15 から AH² ＝ 15² − 9² ＝ 225 − 81 ＝ 144 となり、AH ＝ 12 でこちらも一致します。辺の比は 9：12：15 ＝ 3：4：5 です。',
    add: F([pg([[60, 122], [150, 122], [150, 14]], C.green, GREEN_T), bx(144, 116, 6, 6, undefined, C.gray, FILL.gray), lb(156, 68, '12', 12, C.green, 'start', true), lb(105, 133, '9', 12, C.ink, 'middle', true), lb(92, 58, '15', 12, C.blue, 'end', true)], [eb(148, 'AH² ＝ 15² − 9² ＝ 225 − 81 ＝ 144', C.green, FILL.green, 14), tx(200, 'どちらからでも AH ＝ 12cm ✓', 13, C.gray, true)]),
  },
  {
    note: '(3) 面積は 底辺 14 × 高さ 12 ÷ 2 ＝ 84cm²。❓ なぜ÷2？ 底辺14・高さ12の長方形（面積168）の中に、三角形がちょうど半分入っているからです（外にはみ出す2つの三角形が、中にはいる部分とぴったり重なります）。',
    add: F([...base8(), ...hline(), ln(90, 14, 216, 14, C.gray, true, 1.4), ln(90, 14, 90, 122, C.gray, true, 1.4), ln(216, 14, 216, 122, C.gray, true, 1.4), lb(142, 70, '12', 12, C.green, 'start', true)], [eb(148, '面積 ＝ 14 × 12 ÷ 2 ＝ 84cm²', C.green, FILL.green, 15), tx(200, '長方形 14×12 ＝ 168 の半分', 12, C.gray)]),
  },
  {
    note: '確かめ（検算）です。△ABH ＝ 5×12÷2 ＝ 30、△ACH ＝ 9×12÷2 ＝ 54 で、30 ＋ 54 ＝ 84 となり、同じ面積になります。答えは BH＝5cm、CH＝9cm、AH＝12cm、面積84cm² です。',
    add: F([eb(12, '△ABH ＝ 5 × 12 ÷ 2 ＝ 30', C.blue, FILL.blue, 15, 32), eb(56, '△ACH ＝ 9 × 12 ÷ 2 ＝ 54', C.green, FILL.green, 15, 32), eb(100, '30 ＋ 54 ＝ 84cm²  ✓', C.purple, FILL.purple, 16, 32)], [tx(180, 'BH＝5cm、CH＝9cm、AH＝12cm、84cm²', 14, C.green, true)]),
  },
], '3辺から高さを求める（三平方）');

// ════════ 9. koko_kanto2026_rika_006 ：斜面で物体を引き上げる ════════
const slope9 = (): E[] => [
  pg([[40, 120], [255, 120], [255, 52]], C.gray, FILL.warm), lb(118, 70, '斜面 5m', 11, C.gray, 'end', true), lb(262, 86, '1.5m', 11, C.gray, 'start', true),
  ci(141, 77, 10, '4kg', C.main, FILL.warm, 9),
];
const f_rika006 = show([
  {
    note: '摩擦のない斜面（高さ 1.5m、長さ 5m）に沿って、質量 4kg の物体を一定の速さで引き上げます。斜面方向に引く力と、した仕事を求めます。',
    add: [...slope9(), ar(153, 74, 200, 59, C.green), lb(206, 45, '引く力？', 11, C.green, 'start', true), ...band(140, eb(152, '引く力は？　した仕事は？', C.blue, FILL.blue, 15))],
  },
  {
    note: '❓ まず物体の重さは何N？ 問題では 100g の物体にはたらく重力を 1N とします。4kg ＝ 4000g ＝ 100g の40個ぶんなので、重さは 40N です。この力は真下に向かってはたらきます。',
    add: F([...slope9(), ar(141, 88, 141, 116, C.red), lb(150, 108, '40N', 11, C.red, 'start', true)], [eb(148, '4kg ＝ 4000g ＝ 100g の 40個ぶん', C.red, FILL.red, 14), eb(186, '重さ ＝ 40N（真下向き）', C.red, FILL.red, 15)]),
  },
  {
    note: '❓ なぜ、引く力は 40N より小さくなるの？ 一定の速さで動かすときは、力がつり合っています。重さ 40N のうち、斜面にそって下へ引く力は「一部だけ」で、のこりは斜面が受けとめてくれます。斜面がゆるいほど、この一部は小さくなります。',
    add: F([...slope9(), ar(153, 74, 200, 59, C.green), ar(130, 84, 92, 96, C.red), lb(206, 45, '引く力', 11, C.green, 'start', true), lb(84, 88, '下へ引く力', 10, C.red, 'end', true)], [eb(148, '一定の速さ → 力がつり合う', C.green, FILL.green, 15), tx(200, '引く力 ＝ 斜面にそって下へ引く力', 13, C.gray, true)]),
  },
  {
    note: '大きさを調べる近道として「仕事」を使います。仕事とは、力を加えて、その向きに物体を動かしたときの量で、仕事(J) ＝ 力(N) × 動かした距離(m) です。1N の力で 1m 動かすと 1J。',
    add: F([bx(20, 20, 280, 40, '仕事(J) ＝ 力(N) × 動かした距離(m)', C.blue, FILL.blue, 15), bx(60, 76, 200, 40, '1N の力で 1m 動かす ＝ 1J', C.gray, FILL.gray, 14)], [tx(180, 'どれだけ力をかけて、どれだけ動かしたか', 13, C.gray, true)]),
  },
  {
    note: '❓ まず「斜面を使わず、まっすぐ持ち上げる」と仕事はいくら？ 40N の力で 1.5m 持ち上げるので、40N × 1.5m ＝ 60J。物体を 1.5m 高くするには、最低でもこの 60J が必要です。',
    add: F([bx(140, 96, 40, 26, '4kg', C.main, FILL.warm, 11), ar(160, 94, 160, 26, C.green), lb(172, 60, '40N', 12, C.green, 'start', true), ln(196, 122, 196, 26, C.gray, true, 1.4), lb(204, 76, '1.5m', 12, C.gray, 'start', true)], [eb(150, '40N × 1.5m ＝ 60J', C.green, FILL.green, 17), tx(204, '斜面なしの仕事', 13, C.gray, true)]),
  },
  {
    note: '❓ 斜面を使うと、なぜ仕事は変わらないの？ 斜面に摩擦がなければ、どちらの方法でも「物体を 1.5m 高くする」という同じ結果になるので、必要な仕事は同じ 60J です。これが「仕事の原理」で、道具を使っても仕事は変わりません。',
    add: F([...slope9(), ar(153, 74, 200, 59, C.green), lb(206, 45, '引く力 F', 11, C.green, 'start', true)], [eb(148, '斜面でも 仕事 ＝ 60J', C.green, FILL.green, 16), tx(200, '同じ 1.5m 高くするだけだから', 13, C.gray, true)]),
  },
  {
    note: '斜面では、力 F で 5m 引きます。仕事は F × 5m ＝ 60J。だから F ＝ 60 ÷ 5 ＝ 12N です。力は小さくなりましたが、そのぶん長い距離を引いています。',
    add: F([eb(12, 'F × 5m ＝ 60J', C.blue, FILL.blue, 16, 32), eb(56, 'F ＝ 60 ÷ 5', C.blue, FILL.blue, 16, 32), eb(100, 'F ＝ 12N', C.green, FILL.green, 18, 32)], [tx(180, '力が小さい分、長い距離を引く', 13, C.gray, true)]),
  },
  {
    note: '❓ 力と距離は、どんな関係？ 高さ 1.5m と斜面の長さ 5m の比は 3：10。引く力は重さの 10分の3 になります。40 × 3/10 ＝ 12N。下の棒の長さで比べると、12N は 40N のちょうど 10分の3 です。',
    add: F([bx(40, 30, 200, 24, '重さ 40N', C.red, FILL.red, 13), bx(40, 74, 60, 24, '引く力 12N', C.green, FILL.green, 11), lb(108, 86, '← 40N の 10分の3', 11, C.gray, 'start')], [eb(148, '高さ：長さ ＝ 1.5：5 ＝ 3：10', C.purple, FILL.purple, 15), tx(200, '引く力 ＝ 40 × 3/10 ＝ 12N', 14, C.green, true)]),
  },
  {
    note: '確かめ（検算）です。12N × 5m ＝ 60J と、40N × 1.5m ＝ 60J が一致します。引く力 12N が重さ 40N より小さいのも、斜面を使って楽になる、という感覚と合います。',
    add: F([eb(12, '斜面：12N × 5m ＝ 60J', C.green, FILL.green, 16, 32), eb(56, '持ち上げ：40N × 1.5m ＝ 60J', C.blue, FILL.blue, 16, 32), eb(100, '12N ＜ 40N  ✓', C.purple, FILL.purple, 16, 32)], [tx(180, '2通りで仕事が一致', 14, C.gray, true)]),
  },
  {
    note: '答えは 引く力＝12N、仕事＝60J です。よくあるまちがいは、高さ 1.5m だけを使って 40 × 1.5 ＝ 60 を「力」にしてしまうこと。40 × 1.5 は力ではなく、仕事（J）です。',
    add: F([eb(12, '引く力 ＝ 40 × 1.5 ÷ 5 ＝ 12N', C.green, FILL.green, 15, 32), eb(56, '仕事 ＝ 12 × 5 ＝ 60J', C.green, FILL.green, 16, 32), eb(100, '40 × 1.5 ＝ 60 は「仕事」（力ではない）', C.red, FILL.red, 13, 32)], [tx(180, '答え：引く力 12N、仕事 60J', 15, C.green, true)]),
  },
], '斜面と仕事の原理');

// ════════ 10. koko_kanto2026_rika_014 ：水中の物体にはたらく浮力 ════════
const tank = (waterTop = 45): E[] => [
  bx(70, waterTop, 180, 132 - waterTop, undefined, C.blue, FILL.blue), ln(70, 25, 70, 132, C.gray, false, 2), ln(250, 25, 250, 132, C.gray, false, 2), ln(70, 132, 250, 132, C.gray, false, 2),
];
const obj10 = (y = 70): E => bx(130, y, 60, 32, '300cm³\n240g', C.main, FILL.warm, 10);
const f_rika014 = show([
  {
    note: '体積 300cm³、質量 240g の物体を水中に完全に沈めます。浮力は何Nか、そして手をはなすと浮くか沈むかを、密度をくらべて考えます。水の密度は 1g/cm³、100g の物体にはたらく重力を 1N とします。',
    add: [...tank(), obj10(), ...band(140, eb(152, '浮力は何N？　手をはなすと浮く？沈む？', C.blue, FILL.blue, 14))],
  },
  {
    note: '❓ 浮力とは何？ 水の中の物体を、水が「上向きに押し上げる力」のことです。物体を水に沈めると、軽く感じるのはこの力がはたらくからです。',
    add: F([...tank(), obj10(), ar(160, 68, 160, 48, C.red), lb(168, 58, '浮力（上向き）', 12, C.red, 'start', true)], [eb(150, '浮力 ＝ 水が物体を押し上げる力', C.red, FILL.red, 15)]),
  },
  {
    note: '❓ では、浮力の大きさはなぜ「押しのけた水の重さ」になるの？ もし物体の場所が水だったら、その水のかたまりは止まっているはずです。つまりまわりの水が、その水の重さと同じ力で支えています。物体に置きかえても、まわりの水が押す力は変わりません。下から押す力のほうが、上から押す力より大きいのもそのためです。',
    add: F([...tank(), bx(130, 70, 60, 32, '水 300g', C.blue, FILL.blue, 11), ar(160, 50, 160, 68, C.red), ar(160, 132, 160, 104, C.red), ar(104, 86, 128, 86, C.gray), ar(216, 86, 192, 86, C.gray), lb(172, 116, '下から押す力が\n大きい', 10, C.red, 'start', true)], [eb(148, '物体の場所が水なら、水は止まっている', C.blue, FILL.blue, 13), tx(200, '→ 浮力 ＝ その水の重さ', 14, C.red, true)]),
  },
  {
    note: '完全に沈めたので、押しのけた水の体積は物体と同じ 300cm³ です。水は 1cm³ で 1g なので、300cm³ の水は 300g になります。',
    add: F([bx(40, 34, 90, 60, '物体\n300cm³', C.main, FILL.warm, 13), ar(136, 64, 172, 64, C.gray), bx(178, 34, 110, 60, '押しのけた水\n300cm³ ＝ 300g', C.blue, FILL.blue, 12)], [eb(150, '水 1cm³ ＝ 1g → 300cm³ ＝ 300g', C.blue, FILL.blue, 15)]),
  },
  {
    note: '問題の約束では 100g の重さが 1N です。300g は 100g の3個ぶんなので 3N。浮力は 3N です。',
    add: F([bx(30, 34, 80, 56, '100g\n＝ 1N', C.blue, FILL.blue, 14), bx(120, 34, 80, 56, '100g\n＝ 1N', C.blue, FILL.blue, 14), bx(210, 34, 80, 56, '100g\n＝ 1N', C.blue, FILL.blue, 14)], [eb(148, '300g ＝ 100g × 3 ＝ 3N', C.blue, FILL.blue, 16), eb(186, '浮力 ＝ 3N', C.green, FILL.green, 17)]),
  },
  {
    note: '❓ 浮くか沈むかは、どう決まる？ 上向きの浮力 3N と、下向きの物体の重さをくらべます。物体は 240g ＝ 100g の 2.4個ぶんなので 2.4N。3N ＞ 2.4N で上向きの力のほうが大きいから、手をはなすと浮き上がります。',
    add: F([bx(40, 30, 150, 28, '浮力 3N（上向き）', C.green, FILL.green, 13), bx(40, 76, 120, 28, '重さ 2.4N（下向き）', C.red, FILL.red, 12)], [eb(148, '3N ＞ 2.4N → 上向きの力が大きい', C.green, FILL.green, 15), tx(200, '→ 浮く', 16, C.green, true)]),
  },
  {
    note: '❓ 問題の言うとおり、密度でくらべても同じ結論になるの？ 密度は 1cm³ あたりの重さです。物体は 240g ÷ 300cm³ ＝ 0.8g/cm³、水は 1g/cm³。同じ 300cm³ の水は 300g、物体は 240g なので、水のほうが重い。これは浮力と重さをくらべているのと同じことです。',
    add: F([bx(50, 26, 90, 70, '水\n300cm³\n300g', C.blue, FILL.blue, 12), bx(180, 26, 90, 70, '物体\n300cm³\n240g', C.main, FILL.warm, 12), lb(160, 112, '同じ大きさ', 11, C.gray, 'middle')], [eb(148, '物体の密度 ＝ 240 ÷ 300 ＝ 0.8g/cm³', C.main, FILL.warm, 14), tx(200, '0.8 ＜ 1（水）→ 浮く', 15, C.green, true)]),
  },
  {
    note: '❓ 浮いて止まったときの浮力も 3N？ いいえ。浮力は「実際に押しのけた水」の重さです。浮いて止まると、浮力 ＝ 物体の重さ ＝ 2.4N。押しのけた水は 240g ＝ 240cm³ で、物体の体積 300cm³ のうち 240÷300 ＝ 80% が水の中に入ります。3N は「完全に沈めたとき」の浮力です。',
    add: F([...tank(), bx(130, 39, 60, 32, '物体', C.main, FILL.warm, 11), lb(194, 58, '水の中 80%', 10, C.blue, 'start', true), ar(160, 84, 160, 72, C.red), lb(172, 92, '浮力＝重さ＝2.4N', 10, C.red, 'start', true)], [eb(148, '浮いて止まる → 浮力 ＝ 重さ ＝ 2.4N', C.green, FILL.green, 14), tx(200, '（3N は 完全に沈めたときの値）', 12, C.gray)]),
  },
  {
    note: '確かめ（検算）です。完全に沈めたままにするには、浮力 3N と重さ 2.4N の差 3 − 2.4 ＝ 0.6N を、手で下向きに押さえる必要があります。手をはなすと、この 0.6N ぶんだけ上向きの力が残って浮き上がる、という流れと合っています。',
    add: F([...tank(), obj10(), lb(256, 66, '浮力 3N ↑', 11, C.green, 'start', true), lb(256, 88, '重さ 2.4N ↓', 11, C.red, 'start', true), lb(256, 110, '手 0.6N ↓', 11, C.purple, 'start', true)], [eb(150, '3 − 2.4 ＝ 0.6N（手で押さえる力）  ✓', C.purple, FILL.purple, 14)]),
  },
  {
    note: '答えは 浮力＝3N、物体の密度は 0.8g/cm³ で水の 1g/cm³ より小さいので、水に浮く、です。浮くかどうかは物体の密度と水の密度をくらべて決めます。',
    add: F([eb(12, '浮力 ＝ 押しのけた水 300g ＝ 3N', C.blue, FILL.blue, 15, 32), eb(56, '物体の密度 ＝ 0.8g/cm³ ＜ 水 1g/cm³', C.main, FILL.warm, 14, 32), eb(100, '→ 水に浮く', C.green, FILL.green, 17, 32)], [tx(180, '浮力 3N ＞ 重さ 2.4N とも一致', 13, C.gray, true)]),
  },
], '浮力は押しのけた水の重さ');

// ════════ 11. koko_kanto2026_rika_015 ：動滑車1個 ════════
const pulley = (label = '？N', pull = true): E[] => [
  ln(110, 12, 150, 12, C.gray, false, 3), ln(142, 12, 142, 78, C.blue, false, 2.2), ci(160, 78, 18, undefined, C.gray, FILL.gray), ln(178, 78, 178, 8, C.blue, false, 2.2),
  ln(160, 78, 160, 104, C.gray, false, 2), bx(130, 104, 60, 26, '60kg', C.main, FILL.warm, 12),
  ...(pull ? [ar(178, 34, 178, 10, C.green), lb(190, 26, label, 12, C.green, 'start', true)] : []),
];
const f_rika015 = show([
  {
    note: '動滑車を1個使って、質量 60kg の物体を 4m 持ち上げます。摩擦がなければ、ひもを引く力と距離はいくらか。さらに効率が 80% のとき、実際に引く力を求めます（100g の重さを 1N とします）。',
    add: [...pulley(), lb(250, 80, '動滑車', 11, C.gray, 'middle', true), ...band(140, eb(152, '力は？　距離は？　効率 80% のときの力は？', C.blue, FILL.blue, 13))],
  },
  {
    note: '❓ まず物体の重さは？ 60kg ＝ 60000g ＝ 100g の600個ぶん。100g が 1N なので、重さは 600N です。動滑車を使っても、まずこの 600N を支える必要があります。',
    add: F([...pulley('？N', false), ar(218, 100, 218, 128, C.red), lb(228, 114, '600N', 12, C.red, 'start', true)], [eb(148, '60kg ＝ 60000g ＝ 100g の 600個ぶん', C.red, FILL.red, 14), eb(186, '重さ ＝ 600N', C.red, FILL.red, 16)]),
  },
  {
    note: '❓ なぜ動滑車だと、引く力が半分になるの？ 動滑車と物体をぶら下げて支えているひもが、左と右の2本あるからです。600N の重さを2本で分け合うので、1本あたり 600 ÷ 2 ＝ 300N です。',
    add: F([...pulley('', false), ar(142, 56, 142, 30, C.green), ar(178, 56, 178, 30, C.green), lb(132, 40, '300N', 11, C.green, 'end', true), lb(188, 40, '300N', 11, C.green, 'start', true)], [eb(148, '支えるひもが 2本', C.green, FILL.green, 15), eb(186, '1本あたり 600 ÷ 2 ＝ 300N', C.green, FILL.green, 15)]),
  },
  {
    note: '❓ なぜ2本とも同じ 300N といえるの？ 1本のひもは、滑車をまわってもどこでも同じ力がかかるからです（摩擦なし）。つり合いを確かめると、上向き 300N ＋ 300N ＝ 600N が、下向きの重さ 600N とぴったり同じです。',
    add: F([...pulley('', false), ar(142, 56, 142, 30, C.green), ar(178, 56, 178, 30, C.green), lb(132, 40, '300N', 11, C.green, 'end', true), lb(188, 40, '300N', 11, C.green, 'start', true), ar(230, 96, 230, 128, C.red), lb(240, 112, '600N', 12, C.red, 'start', true)], [eb(148, '上向き 300 ＋ 300 ＝ 600N', C.green, FILL.green, 15), tx(200, '＝ 下向きの重さ 600N（つり合い）', 13, C.gray, true)]),
  },
  {
    note: '❓ では、ひもを引く距離は？ 物体を 4m 上げるには、動滑車の左のひもも右のひもも 4m ずつ短くならなければなりません。引く手が動くのは、その合計 4 ＋ 4 ＝ 8m です。',
    add: F([bx(30, 20, 120, 44, '物体が上がる 4m', C.main, FILL.warm, 13), ar(155, 42, 175, 42, C.gray), bx(180, 20, 120, 44, '左のひも 4m\n＋ 右のひも 4m', C.blue, FILL.blue, 12), bx(80, 80, 160, 40, '引く長さ ＝ 4 ＋ 4 ＝ 8m', C.green, FILL.green, 14)], [eb(152, '力は 半分（300N）、距離は 2倍（8m）', C.green, FILL.green, 14)]),
  },
  {
    note: '❓ 力が半分で距離が2倍なら、仕事はどうなる？ 引く仕事は 300N × 8m ＝ 2400J。直接持ち上げる仕事は 600N × 4m ＝ 2400J。同じです。動滑車は「力が半分になる分、距離が2倍」の道具で、仕事そのものは変わりません（仕事の原理）。',
    add: F([bx(20, 20, 280, 40, '動滑車：300N × 8m ＝ 2400J', C.green, FILL.green, 15), bx(20, 74, 280, 40, '直接：600N × 4m ＝ 2400J', C.blue, FILL.blue, 15)], [tx(176, '同じ 2400J（これが理論上の仕事）', 14, C.gray, true)]),
  },
  {
    note: '次に、摩擦があって効率が 80% のとき。❓ 効率 80% とは？ 実際にした仕事のうち、80% だけが物体を持ち上げる役に立つ、ということです。役に立った仕事が理論上の 2400J なので、実際の仕事の 0.8倍が 2400J です。',
    add: F([bx(40, 26, 240, 30, '実際にした仕事 ＝ ？J', C.gray, FILL.gray, 13), bx(40, 70, 192, 30, '役に立った仕事 2400J（80%）', C.green, FILL.green, 12)], [eb(148, '2400 ＝ 実際の仕事 × 0.8', C.purple, FILL.purple, 16), tx(200, '（役に立つのは 実際の仕事の 80%）', 12, C.gray)]),
  },
  {
    note: '❓ なぜ 2400 に 0.8 をかけずに、0.8 でわるの？ 2400J は「全体の 80%」にあたる量で、全体（実際の仕事）を求めたいからです。全体 ＝ 2400 ÷ 0.8 ＝ 3000J。0.8 でわると数は大きくなり、むだになる 600J ぶんだけ多くなります。',
    add: F([bx(40, 26, 240, 30, '実際にした仕事 3000J', C.gray, FILL.gray, 13), bx(40, 70, 192, 30, '役に立った 2400J', C.green, FILL.green, 12), bx(232, 70, 48, 30, 'むだ\n600J', C.red, FILL.red, 10)], [eb(148, '全体 ＝ 2400 ÷ 0.8 ＝ 3000J', C.purple, FILL.purple, 15), tx(200, '（0.8 でわると 大きくなる）', 13, C.gray, true)]),
  },
  {
    note: '実際の仕事 3000J を、引く距離 8m で割ると、実際に引く力が出ます。3000 ÷ 8 ＝ 375N。距離はむだがあっても 8m のままなので、力が大きくなります。',
    add: F([...pulley('375N'), lb(250, 80, '摩擦あり', 11, C.red, 'middle', true)], [eb(148, '3000J ＝ 力 × 8m', C.green, FILL.green, 16), eb(186, '力 ＝ 3000 ÷ 8 ＝ 375N', C.green, FILL.green, 16)]),
  },
  {
    note: '確かめ（検算）です。375N × 8m ＝ 3000J で実際の仕事と合います。さらに、理論上の力 300N を 0.8 でわると 300 ÷ 0.8 ＝ 375N で、力も同じ割合で大きくなったと分かります。答えは 理論上の力300N、距離8m、効率80%のとき375Nです。',
    add: F([eb(12, '375 × 8 ＝ 3000J  ✓', C.green, FILL.green, 16, 32), eb(56, '300 ÷ 0.8 ＝ 375N  ✓', C.green, FILL.green, 16, 32), eb(100, '375N ＞ 300N（摩擦でふえた）✓', C.purple, FILL.purple, 14, 32)], [tx(180, '答え：300N、8m、375N', 16, C.green, true)]),
  },
], '動滑車と仕事の原理・効率');

export const figuresSchoolKoko04: Record<string, Figure> = {
  'koko_sansu_ex_13_019': f13_019,
  'koko_sansu_ex_15_050': f15_050,
  'koko_sansu_ex_16_008': f16_008,
  'kurume_koko_sansu_05': f_kurume05,
  'kurume_koko_sansu_06': f_kurume06,
  'koko_sansu_ex_16_047': f16_047,
  'koko_sansu_ex_15_007': f15_007,
  'koko_kanto2026_sansu_030': f_kanto030,
  'koko_kanto2026_rika_006': f_rika006,
  'koko_kanto2026_rika_014': f_rika014,
  'koko_kanto2026_rika_015': f_rika015,
};
