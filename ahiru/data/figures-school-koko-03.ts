// 高校受験 入試傾向問題（数学）の動く図解スライド（koko_in_03 の分）。
// 「❓なぜ？→答え」の連鎖で根っこまでたどる。中学範囲の道具（相似・三平方・30°60°90°・合同）だけで説明する。
// 画面の上半分に図、下の帯（band）にそのスライドの式やひとこと、という配置。
import type { DiagramElement, Figure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, show, band, fresh } from './diagram-kit';

type E = DiagramElement;
const eb = (y: number, t: string, color: string, fill: string, size = 14, h = 30, x = 20, w = 280): E => bx(x, y, w, h, t, color, fill, size);
const tx = (y: number, t: string, size = 12, color: string = C.gray, bold = false): E => lb(160, y, t, size, color, 'middle', bold);
const T = (top: E[], bottom: E[]): E[] => [...top, ...band(140, ...bottom)];
const F = (top: E[], bottom: E[]): E[] => fresh(...top, ...bottom);
const RED_T = 'rgba(225,29,72,0.25)';
const BLUE_T = 'rgba(2,132,199,0.18)';
const GREEN_T = 'rgba(22,163,74,0.22)';
const PUR_T = 'rgba(147,51,234,0.2)';
const dot = (x: number, y: number, color: string = C.ink): E => ci(x, y, 3, undefined, color, color);
// 直角のしるし（頂点 cx,cy から、二辺の向き u・v へ）
const rm = (cx: number, cy: number, ux: number, uy: number, vx: number, vy: number, s = 8): E[] => [
  ln(cx + ux * s, cy + uy * s, cx + (ux + vx) * s, cy + (uy + vy) * s, C.gray),
  ln(cx + (ux + vx) * s, cy + (uy + vy) * s, cx + vx * s, cy + vy * s, C.gray),
];
// 立方体（ななめ上から）。前の面の左上が (x0, y0+d)
const cubeFig = (x0: number, y0: number, s: number, d: number, color: string = C.blue): E[] => [
  pg([[x0, y0 + d], [x0 + d, y0], [x0 + s + d, y0], [x0 + s, y0 + d]], color, FILL.gray),
  pg([[x0 + s, y0 + d], [x0 + s + d, y0], [x0 + s + d, y0 + s], [x0 + s, y0 + d + s]], color, FILL.gray),
  bx(x0, y0 + d, s, s, undefined, color, FILL.blue),
];
// 三角形を水平にうすく切った線（すい体の断面）
const slicesFig = (x0: number, base: number, yb: number, H: number, n: number, align: 'left' | 'center', color: string = C.blue): E[] => {
  const out: E[] = [];
  const apexX = align === 'left' ? x0 : x0 + base / 2;
  out.push(pg([[x0, yb], [x0 + base, yb], [apexX, yb - H]], color, FILL.blue));
  for (let i = 1; i < n; i++) {
    const f = i / n;
    const w = base * (1 - f);
    const xs = align === 'left' ? x0 : x0 + (base - w) / 2;
    out.push(ln(xs, yb - f * H, xs + w, yb - f * H, color, false, 1));
  }
  return out;
};
// 正三角形（1辺2）を半分に切った図（30°・60°・90°の比の理由）
const half30 = (): E[] => [
  pg([[100, 125], [220, 125], [160, 21]], C.blue, FILL.blue),
  ln(160, 21, 160, 125, C.red, false, 2),
  ...rm(160, 125, 0, -1, 1, 0),
  lb(122, 66, '2', 13, C.blue, 'end', true),
  lb(198, 66, '2', 13, C.blue, 'start', true),
  lb(130, 138, '1', 13, C.green, 'middle', true),
  lb(190, 138, '1', 13, C.green, 'middle', true),
  lb(166, 84, '√3', 13, C.red, 'start', true),
];

// ══════════════════════════════════════════════════════════
// 1. 球が6つの面に接する正四角柱（koko_sansu_ex_05_038）
// ══════════════════════════════════════════════════════════
const cubeA = cubeFig(105, 12, 80, 30);
const sphere: Figure = show([
  {
    note: '半径 r の球が、底面が正方形の四角柱の6つの面すべてに接しています。真横から見ると、円が正方形にぴったり入った形です。求めるのは、底面の1辺・高さ・体積・表面積、そして全部の頂点を通る球（外接球）の半径です。',
    add: F([bx(110, 15, 100, 100, undefined, C.blue, FILL.blue), ci(160, 65, 50, '球', C.main, FILL.yellow, 14), lb(160, 133, '真横から見た図', 11, C.gray, 'middle')], [eb(152, '球は6つの面すべてに接している', C.blue, FILL.blue, 14), tx(206, '1辺・高さ・体積・表面積・外接球の半径', 12)]),
  },
  {
    note: '❓ なぜ底面の1辺が 2r なの？ 真上から見ると、円が正方形の4辺に接しています。中心から左の辺までが r、右の辺までも r なので、1辺は r＋r ＝ 2r です。',
    add: F([bx(110, 12, 100, 100, undefined, C.blue, FILL.blue), ci(160, 62, 50, undefined, C.main, FILL.yellow), ln(110, 62, 210, 62, C.red, false, 2), dot(110, 62, C.red), dot(210, 62, C.red), lb(135, 56, 'r', 13, C.red, 'middle', true), lb(185, 56, 'r', 13, C.red, 'middle', true), lb(160, 126, '真上から見た図', 11, C.gray, 'middle')], [eb(152, '1辺 ＝ r ＋ r ＝ 2r', C.green, FILL.green, 16), tx(206, '中心から左右の辺まで、どちらも r', 12)]),
  },
  {
    note: '❓ では、なぜ「接する点と中心を結ぶ線」が辺に垂直なの？ 辺は円の外にあるので、接点以外の辺上の点は、中心から半径より遠くなります。つまり接点が辺の上でいちばん中心に近く、いちばん近い線（最短）は垂線だからです。',
    add: F([ci(160, 50, 38, undefined, C.main, FILL.yellow), ln(90, 88, 230, 88, C.blue, false, 2), ln(160, 50, 160, 88, C.red, false, 2), dot(160, 88, C.red), ln(160, 50, 212, 88, C.gray, true), dot(212, 88, C.gray), ...rm(160, 88, 0, -1, 1, 0), lb(166, 72, 'r', 13, C.red, 'start', true), lb(222, 66, 'r より長い', 11, C.gray, 'start')], [eb(152, '最短の線 ＝ 垂線 ＝ 半径', C.blue, FILL.blue, 15), tx(206, 'だから中心から辺までの距離は、ちょうど r', 12)]),
  },
  {
    note: '❓ 高さはなぜ 2r なの？ 上の面にも下の面にも接しているので、真横から見ると中心から上の面まで r、下の面まで r です。高さは r＋r ＝ 2r、球の直径と同じです。',
    add: F([bx(110, 15, 100, 100, undefined, C.blue, FILL.blue), ci(160, 65, 50, undefined, C.main, FILL.yellow), ln(160, 15, 160, 115, C.red, false, 2), dot(160, 15, C.red), dot(160, 115, C.red), lb(168, 42, 'r', 13, C.red, 'start', true), lb(168, 92, 'r', 13, C.red, 'start', true)], [eb(152, '高さ ＝ r ＋ r ＝ 2r', C.green, FILL.green, 16), tx(206, '球の直径と同じ長さ', 12)]),
  },
  {
    note: '底面の1辺が 2r、高さも 2r。つまりこの四角柱は、1辺 2r の立方体です。',
    add: F([...cubeA, lb(145, 136, '2r', 13, C.blue, 'middle', true), lb(99, 84, '2r', 13, C.blue, 'end', true), lb(206, 116, '2r', 13, C.blue, 'start', true)], [eb(152, '1辺 2r の立方体', C.blue, FILL.blue, 17), tx(206, '1辺・高さ がすべて 2r', 12)]),
  },
  {
    note: '❓ 体積はどう求めるの？ 柱の体積は「底面積×高さ」です。底面は2r×2r ＝ 4r² の正方形で、それが高さ 2r ぶん積み重なっています。',
    add: F([...cubeFig(125, 10, 60, 22)], [eb(152, '底面積 ＝ 2r × 2r ＝ 4r²', C.blue, FILL.blue, 14, 28), eb(186, '体積 ＝ 4r² × 2r ＝ 8r³', C.green, FILL.green, 15, 28)]),
  },
  {
    note: '❓ 表面積はなぜ「1枚の面積×6」なの？ 立方体の面は、すべて同じ 2r×2r の正方形6枚だからです。展開図に広げると、6枚の正方形が並びます。',
    add: F([bx(145, 6, 30, 30, '4r²', C.blue, FILL.blue, 10), bx(145, 36, 30, 30, '4r²', C.blue, FILL.blue, 10), bx(145, 66, 30, 30, '4r²', C.blue, FILL.blue, 10), bx(145, 96, 30, 30, '4r²', C.blue, FILL.blue, 10), bx(115, 36, 30, 30, '4r²', C.blue, FILL.blue, 10), bx(175, 36, 30, 30, '4r²', C.blue, FILL.blue, 10)], [eb(148, '1枚 ＝ 2r × 2r ＝ 4r²', C.blue, FILL.blue, 14, 28), eb(184, '6枚で 4r² × 6 ＝ 24r²', C.green, FILL.green, 15, 28)]),
  },
  {
    note: '❓ 全部の頂点を通る球（外接球）の半径は？ 中心は立方体の中心です。8つの頂点までの距離が等しくなる点は、立方体の中心だけだからです。半径は、中心から頂点までの距離、つまり空間対角線（向かい合う頂点を結ぶ線）の半分です。',
    add: F([...cubeA, ln(105, 122, 215, 12, C.red, true, 2), dot(105, 122, C.red), dot(215, 12, C.red), ci(160, 67, 3, undefined, C.purple, C.purple), lb(150, 86, '中心', 11, C.purple, 'end', true)], [eb(152, '外接球の半径 ＝ 空間対角線の半分', C.red, FILL.red, 14), tx(206, '空間対角線＝向かい合う頂点を結ぶ線', 12)]),
  },
  {
    note: '❓ 空間対角線の長さは？ 2段階で求めます。まず底面の正方形の対角線。直角二等辺三角形の辺の比は 1：1：√2（1²＋1²＝2）なので、1辺 2r の対角線は 2r×√2 です。',
    add: F([bx(115, 12, 90, 90, undefined, C.blue, FILL.blue), ln(115, 102, 205, 12, C.red, false, 2), lb(108, 60, '2r', 13, C.blue, 'end', true), lb(160, 118, '2r', 13, C.blue, 'middle', true), lb(214, 50, '対角線', 12, C.red, 'start', true), lb(214, 68, '＝ 2r×√2', 12, C.red, 'start', true)], [eb(152, '正方形の対角線 ＝ 1辺 × √2', C.blue, FILL.blue, 14), tx(206, '直角二等辺三角形の辺の比 1：1：√2', 12)]),
  },
  {
    note: '次に、底面の対角線 2r√2 と、高さ 2r を2辺とする直角三角形を考えます。斜辺が空間対角線です。三平方の定理で、斜辺² ＝ (2r)²＋(2r√2)² ＝ 4r²＋8r² ＝ 12r²、斜辺 ＝ √12r² ＝ 2r√3 です。',
    add: F([pg([[90, 120], [217, 120], [217, 30]], C.blue, FILL.blue), ln(90, 120, 217, 30, C.red, false, 2), ...rm(217, 120, -1, 0, 0, -1), lb(153, 134, '底面の対角線 2r√2', 11, C.blue, 'middle', true), lb(224, 78, '高さ 2r', 12, C.blue, 'start', true), lb(132, 66, '空間対角線', 12, C.red, 'end', true)], [eb(152, '斜辺² ＝ 4r² ＋ 8r² ＝ 12r²', C.blue, FILL.blue, 14), tx(204, '斜辺 ＝ √(12r²) ＝ 2r√3', 14, C.red, true)]),
  },
  {
    note: '外接球の半径は、空間対角線 2r√3 の半分で √3 r です。確かめ：中心から頂点へは、右に r・上に r・奥に r 進みます。三平方で r²＋r²＋r²＝3r²、√3 r となり一致します。',
    add: F([eb(10, '1辺 2r ・ 高さ 2r', C.blue, FILL.blue, 14, 28), eb(42, '体積 8r³ ・ 表面積 24r²', C.green, FILL.green, 14, 28), eb(74, '外接球の半径 2r√3 ÷ 2 ＝ √3 r', C.purple, FILL.purple, 14, 28)], [tx(150, '確かめ：中心から頂点へ 右r・上r・奥r', 12, C.gray, true), tx(176, 'r²＋r²＋r² ＝ 3r²  →  √3 r  ✓', 14, C.green, true)]),
  },
]);

// ══════════════════════════════════════════════════════════
// 2. 正四角すいの体積（koko_sansu_ex_09_018）
// ══════════════════════════════════════════════════════════
const gridCells: E[] = [];
for (let i = 0; i <= 6; i++) {
  gridCells.push(ln(106 + i * 18, 12, 106 + i * 18, 120, C.gray));
  gridCells.push(ln(106, 12 + i * 18, 214, 12 + i * 18, C.gray));
}
const pyramid: Figure = show([
  {
    note: '底面が1辺6cmの正方形、高さ4cmの正四角すいの体積を求めます。すい体の体積は「底面積×高さ÷3」と習いますが、なぜ÷3なのか、根っこから確かめます。',
    add: F([pg([[90, 118], [190, 118], [228, 94], [128, 94]], C.blue, FILL.blue), ln(160, 22, 90, 118, C.blue, false, 2), ln(160, 22, 190, 118, C.blue, false, 2), ln(160, 22, 228, 94, C.blue, false, 2), ln(160, 22, 128, 94, C.blue, true, 1), ln(160, 22, 160, 106, C.red, true, 2), lb(206, 58, '高さ4cm', 12, C.red, 'start', true), lb(140, 132, '6cm', 12, C.blue, 'middle', true)], [eb(152, '底面 1辺6cm ・ 高さ4cm', C.blue, FILL.blue, 15), tx(206, '体積は？', 13, C.gray, true)]),
  },
  {
    note: '❓ まず底面積はなぜ 6×6 なの？ 面積は「1cm²の正方形が何個しきつめられるか」です。たて6列、よこ6列で 6×6 ＝ 36個。底面積は 36cm² です。',
    add: F([bx(106, 12, 108, 108, undefined, C.blue, FILL.blue), ...gridCells, lb(160, 133, '6cm', 12, C.blue, 'middle', true), lb(100, 70, '6cm', 12, C.blue, 'end', true)], [eb(152, '1cm² の正方形が 6×6 ＝ 36個', C.blue, FILL.blue, 14), tx(206, '底面積 ＝ 36cm²', 14, C.green, true)]),
  },
  {
    note: '❓ 高さは、なぜ「ななめの辺」ではなく、垂直に測るの？ 高さは「底面の上に、どれだけ積み上がっているか」を表す長さだからです。積み上がる向きは底面に垂直なので、頂点から底面へ垂直におろした長さを使います。',
    add: F([pg([[80, 118], [240, 118], [160, 25]], C.blue, FILL.blue), ln(160, 25, 160, 118, C.red, false, 2), ...rm(160, 118, 1, 0, 0, -1), lb(166, 102, '高さ4cm', 12, C.red, 'start', true), lb(112, 66, 'ななめの辺', 11, C.gray, 'end')], [eb(152, '高さ ＝ 底面へ垂直におろした長さ', C.red, FILL.red, 14), tx(206, 'ななめの辺の長さは使わない', 12)]),
  },
  {
    note: '❓ では、なぜ÷3なの？ まず1辺6cmの立方体で考えます。1つの頂点から、その頂点につながらない3つの面へ切り分けると、底面が6×6・高さ6のすい体が3つできます。',
    add: F([...cubeFig(30, 18, 70, 25), ar(140, 66, 172, 66, C.red), bx(180, 14, 124, 30, '① 底面6×6 ・ 高さ6', C.blue, FILL.blue, 11), bx(180, 50, 124, 30, '② 底面6×6 ・ 高さ6', C.green, FILL.green, 11), bx(180, 86, 124, 30, '③ 底面6×6 ・ 高さ6', C.purple, FILL.purple, 11)], [eb(152, '立方体 ＝ すい体 3つ分', C.blue, FILL.blue, 15), tx(206, '1つの頂点から、向かい合う3つの面へ切る', 12)]),
  },
  {
    note: '❓ 3つは本当に同じ大きさなの？ 立方体は6つの面がすべて 6×6 の正方形で、どの面から見ても高さは6です。底面も高さも同じなので、3つの体積は等しくなります。',
    add: F([eb(10, '① 底面 6×6 ＝ 36 ・ 高さ 6', C.blue, FILL.blue, 13, 28), eb(44, '② 底面 6×6 ＝ 36 ・ 高さ 6', C.green, FILL.green, 13, 28), eb(78, '③ 底面 6×6 ＝ 36 ・ 高さ 6', C.purple, FILL.purple, 13, 28)], [eb(152, '3つとも 底面も高さも同じ', C.gray, FILL.gray, 14), tx(206, '→ 体積も同じ', 13, C.green, true)]),
  },
  {
    note: '❓ 頂点が角の真上にある形と、真ん中の真上にある形で、体積は同じなの？ 同じ高さで水平に切ると、どちらも同じ大きさの正方形です。薄く切った板を積み重ねた体積は、頂点をずらしても変わりません。',
    add: F([...slicesFig(30, 100, 118, 95, 6, 'left'), ...slicesFig(190, 100, 118, 95, 6, 'center'), lb(80, 133, '頂点が角の真上', 11, C.gray, 'middle'), lb(240, 133, '頂点が真ん中の真上', 11, C.gray, 'middle')], [eb(152, '同じ高さの断面は 同じ大きさ', C.green, FILL.green, 14), tx(206, 'だから体積も同じ', 13, C.gray, true)]),
  },
  {
    note: '立方体の体積は 6×6×6 ＝ 216cm³。3等分すると 216÷3 ＝ 72cm³。つまり底面36・高さ6のすい体の体積は 36×6÷3 ＝ 72 です。これで「÷3」の理由がわかりました。',
    add: F([eb(10, '立方体 6×6×6 ＝ 216', C.blue, FILL.blue, 15, 30), eb(50, '216 ÷ 3 ＝ 72', C.green, FILL.green, 17, 30)], [eb(116, '36 × 6 ÷ 3 ＝ 72', C.purple, FILL.purple, 16, 30), tx(180, '底面積 × 高さ ÷ 3', 14, C.gray, true)]),
  },
  {
    note: '❓ 高さが6ではなく4のとき、なぜ同じ式が使えるの？ 高さ6のすい体を、たて方向にだけ 4/6 に押しつぶして考えます。各段の広がりは同じで、段の厚さだけが 4/6 になります。',
    add: F([...slicesFig(30, 100, 120, 100, 6, 'center'), ...slicesFig(190, 100, 120, 66.7, 6, 'center'), ar(145, 70, 182, 88, C.red), lb(80, 134, '高さ6', 12, C.blue, 'middle', true), lb(240, 134, '高さ4（4/6に）', 12, C.red, 'middle', true)], [eb(152, '段の厚さが 4/6 → 体積も 4/6倍', C.red, FILL.red, 14), tx(206, '段の広がりは変わらない', 12)]),
  },
  {
    note: '高さ6のときの体積 72cm³ を 4/6 倍すると、72×4÷6 ＝ 48cm³。これは 36×4÷3 ＝ 48 と同じで、「底面積×高さ÷3」がそのまま使えることがわかります。',
    add: F([eb(10, '高さ6のとき 72cm³', C.blue, FILL.blue, 15, 30), eb(50, '高さ4のとき 72 × 4/6 ＝ 48', C.red, FILL.red, 15, 30), eb(90, '36 × 4 ÷ 3 ＝ 48（同じ！）', C.green, FILL.green, 15, 30)], [tx(170, '高さが変わっても「底面積×高さ÷3」', 13, C.gray, true)]),
  },
  {
    note: '別の見方です。同じ底面・同じ高さの角柱の体積は 36×4 ＝ 144cm³。すい体はその 1/3 なので、144÷3 ＝ 48cm³ です。角柱を同じ大きさで3つに分けた1つ分、と見ることもできます。',
    add: F([bx(40, 20, 240, 30, '角柱 36×4 ＝ 144', C.gray, FILL.gray, 14), bx(40, 64, 80, 30, '48', C.green, FILL.green, 15), bx(120, 64, 80, 30, '48', C.gray, FILL.gray, 15), bx(200, 64, 80, 30, '48', C.gray, FILL.gray, 15), lb(80, 108, 'すい体', 11, C.green, 'middle', true)], [eb(152, 'すい体 ＝ 同じ底・高さの角柱の 1/3', C.green, FILL.green, 14), tx(206, '144 ÷ 3 ＝ 48', 14, C.gray, true)]),
  },
  {
    note: '答えは 48cm³ です。確かめ：角柱144の1/3は48、高さ6の72を 4/6 倍しても48。2つの方法で一致しました。よくあるまちがいは÷3を忘れて144とすることです。すい体は角柱の1/3です。',
    add: F([eb(12, '体積 ＝ 36 × 4 ÷ 3 ＝ 48cm³', C.green, FILL.green, 16, 34)], [tx(120, '確かめ①：角柱 144 ÷ 3 ＝ 48  ✓', 14, C.blue, true), tx(148, '確かめ②：72 × 4 ÷ 6 ＝ 48  ✓', 14, C.blue, true), tx(186, '÷3 を忘れて 144 にしない', 13, C.red, true)]),
  },
]);

// ══════════════════════════════════════════════════════════
// 3. 放物線と直線でできる三角形OAB（koko_sansu_ex_09_028）
// ══════════════════════════════════════════════════════════
const gx = (x: number) => 150 + 24 * x;
const gy = (y: number) => 125 - 24 * y;
const parab: E[] = [];
for (let i = 0; i < 18; i++) {
  const a = -2.2 + i * 0.2;
  const b = a + 0.2;
  parab.push(ln(gx(a), gy(a * a), gx(b), gy(b * b), C.blue, false, 2));
}
const graphBase: E[] = [
  ln(60, 125, 250, 125, C.gray), ln(150, 10, 150, 132, C.gray),
  lb(254, 129, 'x', 11, C.gray, 'start'), lb(156, 14, 'y', 11, C.gray, 'start'),
  ...parab, ln(gx(-2.6), gy(4.6), gx(2), gy(0), C.red, false, 2),
  lb(190, 74, 'y＝x²', 12, C.blue, 'start', true), lb(206, 108, 'y＝−x＋2', 12, C.red, 'start', true),
  lb(142, 137, 'O', 12, C.ink, 'end', true),
];
const ptsAB: E[] = [dot(gx(-2), gy(4)), dot(gx(1), gy(1)), lb(94, 26, 'A', 13, C.ink, 'end', true), lb(182, 100, 'B', 13, C.ink, 'start', true)];
const oab: Figure = show([
  {
    note: '放物線 y＝x² と直線 y＝−x＋2 が、2点A・Bで交わっています。(1) 交点A・Bの座標と、(2) 原点Oとつくる三角形OABの面積を求めます。',
    add: F([...graphBase, dot(gx(-2), gy(4)), dot(gx(1), gy(1)), lb(94, 26, 'A', 13, C.ink, 'end', true), lb(182, 100, 'B', 13, C.ink, 'start', true)], [eb(152, '(1) 交点 A・B   (2) △OAB の面積', C.blue, FILL.blue, 14), tx(206, 'A は x 座標が小さいほう', 12)]),
  },
  {
    note: '❓ なぜ「2つの式を等しいとおく」と交点が出るの？ 交点は2つのグラフの両方の上にある点なので、同じ x で y も等しくなります。だから x² ＝ −x＋2 の解が、交点の x 座標です。',
    add: T([...ptsAB], [eb(152, '交点では y が等しい', C.red, FILL.red, 15), tx(206, 'x² ＝ −x ＋ 2', 15, C.gray, true)]),
  },
  {
    note: '移項して x²＋x−2＝0、因数分解して (x＋2)(x−1)＝0。❓ なぜ因数分解で解が出るの？ 2つの数をかけて 0 になるなら、どちらかが 0 だからです。x＋2＝0 または x−1＝0 なので、x＝−2、1 です。',
    add: F([eb(10, 'x² ＋ x − 2 ＝ 0', C.gray, FILL.gray, 15, 30), eb(50, '(x＋2)(x−1) ＝ 0', C.blue, FILL.blue, 16, 30), eb(90, 'x＋2＝0 または x−1＝0', C.purple, FILL.purple, 15, 30)], [eb(150, 'x ＝ −2 , 1', C.green, FILL.green, 17, 32), tx(204, 'かけて0 → どちらかが0', 12)]),
  },
  {
    note: '❓ y座標はどう出すの？ x座標を直線の式に入れます。x＝−2 なら y＝2＋2＝4、x＝1 なら y＝−1＋2＝1。放物線の式 y＝x² に入れても (−2)²＝4、1²＝1 で同じになります。A(−2, 4)、B(1, 1)。',
    add: F([...graphBase, ...ptsAB, ln(gx(-2), gy(4), gx(-2), 125, C.gray, true), ln(gx(-2), gy(4), 150, gy(4), C.gray, true), ln(gx(1), gy(1), gx(1), 125, C.gray, true), ln(gx(1), gy(1), 150, gy(1), C.gray, true), lb(102, 137, '−2', 11, C.gray, 'middle'), lb(174, 137, '1', 11, C.gray, 'middle'), lb(144, 33, '4', 11, C.gray, 'end'), lb(144, 104, '1', 11, C.gray, 'end')], [eb(152, 'A(−2, 4)   B(1, 1)', C.green, FILL.green, 16), tx(206, '放物線にも入れて確かめる：4 と 1', 12)]),
  },
  {
    note: '(2) の面積です。❓ なぜ直線と y軸の交点 C を使うの？ OA・OB・AB はななめで、底辺と高さが直角に取りにくいからです。直線 y＝−x＋2 は x＝0 で y＝2 なので C(0, 2)、OC は y軸上のたて線で OC＝2 です。',
    add: F([...graphBase, ...ptsAB, dot(150, gy(2), C.red), lb(144, gy(2) - 2, 'C', 13, C.red, 'end', true), ln(150, 125, 150, gy(2), C.red, false, 3), ln(gx(-2), gy(4), 150, 125, C.ink), ln(gx(1), gy(1), 150, 125, C.ink)], [eb(152, 'C(0, 2) ・ OC ＝ 2', C.red, FILL.red, 15), tx(206, '切片 2 が、そのまま y軸との交点', 12)]),
  },
  {
    note: '❓ なぜ OC を底辺にすると楽なの？ OC は y軸の上にあるので、A・B から y軸までの横の線が、そのまま OC に垂直な「高さ」になります。高さは A が 2、B が 1（x座標の大きさ）です。',
    add: F([...graphBase, ...ptsAB, dot(150, gy(2), C.red), ln(150, 125, 150, gy(2), C.red, false, 3), ln(gx(-2), gy(4), 150, gy(4), C.green, false, 2), ln(gx(1), gy(1), 150, gy(1), C.green, false, 2), lb(126, 24, '2', 13, C.green, 'middle', true), lb(162, 96, '1', 13, C.green, 'middle', true)], [eb(152, '高さ：A から 2 ・ B から 1', C.green, FILL.green, 15), tx(206, '底辺 OC ＝ 2 に垂直な横の長さ', 12)]),
  },
  {
    note: '△OCA は 底辺2×高さ2÷2 ＝ 2。△OCB は 底辺2×高さ1÷2 ＝ 1。三角形の面積は、底辺×高さ÷2 です。',
    add: F([...graphBase, ...ptsAB, pg([[150, 125], [150, gy(2)], [gx(-2), gy(4)]], C.green, GREEN_T), pg([[150, 125], [150, gy(2)], [gx(1), gy(1)]], C.purple, PUR_T), dot(150, gy(2), C.red)], [eb(150, '△OCA ＝ 2 × 2 ÷ 2 ＝ 2', C.green, FILL.green, 14, 28), eb(184, '△OCB ＝ 2 × 1 ÷ 2 ＝ 1', C.purple, FILL.purple, 14, 28)]),
  },
  {
    note: '❓ なぜ2つをたし算するの？ C は線分AB上の点なので、OC で △OAB が左右の2つの三角形に分かれ、重ならずに合わさるからです。△OAB ＝ 2＋1 ＝ 3。もしAとBが y軸の同じ側なら、ひき算になります。',
    add: F([...graphBase, ...ptsAB, pg([[150, 125], [gx(-2), gy(4)], [gx(1), gy(1)]], C.red, RED_T), ln(150, 125, 150, gy(2), C.ink, false, 2), dot(150, gy(2), C.red)], [eb(152, '反対側 → たす：2 ＋ 1 ＝ 3', C.red, FILL.red, 15), tx(206, '同じ側ならひく', 12)]),
  },
  {
    note: '確かめ：別の方法で求めます。O・A・B を囲む長方形（よこ3×たて4 ＝ 12）から、まわりの3つの直角三角形を引きます。左が 2×4÷2 ＝ 4、上が 3×3÷2 ＝ 4.5、右が 1×1÷2 ＝ 0.5 で、12−9 ＝ 3。',
    add: F([...graphBase, ln(gx(-2), gy(4), gx(1), gy(4), C.gray, true), ln(gx(1), gy(4), gx(1), 125, C.gray, true), ln(gx(-2), gy(4), gx(-2), 125, C.gray, true), pg([[150, 125], [gx(-2), gy(4)], [gx(1), gy(1)]], C.red, RED_T), pg([[gx(-2), gy(4)], [gx(-2), 125], [150, 125]], C.gray, 'rgba(110,100,92,0.25)'), pg([[gx(-2), gy(4)], [gx(1), gy(4)], [gx(1), gy(1)]], C.gray, 'rgba(110,100,92,0.25)'), pg([[150, 125], [gx(1), 125], [gx(1), gy(1)]], C.gray, 'rgba(110,100,92,0.25)'), ...ptsAB], [eb(150, '12 − (4 ＋ 4.5 ＋ 0.5) ＝ 3', C.green, FILL.green, 15, 30), tx(200, '長方形から まわりの三角形を引く', 12)]),
  },
  {
    note: '答え：(1) A(−2, 4)、B(1, 1)　(2) 面積 3。2つの方法で 3 になり、一致しました。よくあるまちがいは、AとBが y軸の反対側なのにひき算してしまうことです。',
    add: F([eb(12, '(1) A(−2, 4)   B(1, 1)', C.green, FILL.green, 16, 34), eb(58, '(2) △OAB ＝ 3', C.green, FILL.green, 17, 34)], [tx(130, '確かめ：2 ＋ 1 ＝ 3', 14, C.blue, true), tx(158, '12 − 9 ＝ 3  ✓', 14, C.blue, true), tx(196, '反対側ならたす・同じ側ならひく', 12, C.red, true)]),
  },
]);

// ══════════════════════════════════════════════════════════
// 4. 箱ひげ図の5つの値（koko_sansu_ex_06_007）
// ══════════════════════════════════════════════════════════
const DATA = [2, 5, 7, 9, 12, 14, 18];
const card = (i: number, y: number, color: string = C.blue, fill: string = FILL.blue): E => bx(23 + i * 40, y, 34, 30, String(DATA[i]), color, fill, 14);
const cards = (y: number, styles: Record<number, [string, string]> = {}): E[] => DATA.map((_, i) => card(i, y, styles[i]?.[0] ?? C.blue, styles[i]?.[1] ?? FILL.blue));
const nums = (y: number): E[] => DATA.map((_, i) => lb(40 + i * 40, y, String(i + 1), 11, C.gray, 'middle'));
const nx = (v: number) => 20 + 14 * v;
const boxplot: Figure = show([
  {
    note: '7個のデータ 2, 5, 7, 9, 12, 14, 18 の、最小値・第1四分位数（Q1）・中央値・第3四分位数（Q3）・最大値を求めて、箱ひげ図に使います。',
    add: F([...cards(40)], [eb(152, '最小値・Q1・中央値・Q3・最大値', C.blue, FILL.blue, 14), tx(206, 'データはすでに小さい順に並んでいる', 12)]),
  },
  {
    note: '❓ なぜこの5つの値なの？ 箱ひげ図は、データの個数を4等分する区切りで、散らばりを表す図だからです。5つの値で、4つのかたまり（それぞれ全体の1/4）に分けます。',
    add: F([bx(20, 40, 70, 34, '1/4', C.blue, FILL.blue, 13), bx(90, 40, 70, 34, '1/4', C.green, FILL.green, 13), bx(160, 40, 70, 34, '1/4', C.purple, FILL.purple, 13), bx(230, 40, 70, 34, '1/4', C.red, FILL.red, 13), lb(20, 92, '最小', 11, C.ink, 'middle', true), lb(90, 92, 'Q1', 11, C.ink, 'middle', true), lb(160, 92, '中央値', 11, C.ink, 'middle', true), lb(230, 92, 'Q3', 11, C.ink, 'middle', true), lb(300, 92, '最大', 11, C.ink, 'middle', true)], [eb(152, '5つの値で データを4等分', C.green, FILL.green, 15), tx(206, '区切りの値を求める', 12)]),
  },
  {
    note: '❓ なぜ中央値は4番目なの？ 7個の真ん中は、前に3個、後ろに3個ある位置です。(7＋1)÷2 ＝ 4番目。大きさの順に並んでいないと、真ん中が決まらないので、先に並べかえておきます。',
    add: F([...cards(30, { 3: [C.red, FILL.red] }), ...nums(76), ar(160, 100, 160, 84, C.red)], [eb(152, '(7 ＋ 1) ÷ 2 ＝ 4番目', C.red, FILL.red, 15), tx(206, '前に3個・うしろに3個', 12)]),
  },
  {
    note: '4番目の値は 9 なので、中央値は 9 です。9 の左に 3個、右に 3個あります。',
    add: F([...cards(30, { 3: [C.red, FILL.red] }), lb(83, 82, '3個', 12, C.gray, 'middle', true), lb(240, 82, '3個', 12, C.gray, 'middle', true), ln(23, 72, 143, 72, C.gray), ln(183, 72, 303, 72, C.gray)], [eb(152, '中央値 ＝ 9', C.red, FILL.red, 17), tx(206, '左3個 ・ 9 ・ 右3個', 12)]),
  },
  {
    note: '❓ Q1 は何の中央値なの？ 中央値より小さいほうの半分（下半分）の真ん中です。❓ なぜ中央値 9 を入れないの？ 9 は下にも上にも属さない真ん中の値で、入れると下が4個・上が3個になり、等分にならないからです。',
    add: F([...cards(30, { 0: [C.green, FILL.green], 1: [C.green, FILL.green], 2: [C.green, FILL.green], 3: [C.gray, FILL.gray], 4: [C.purple, FILL.purple], 5: [C.purple, FILL.purple], 6: [C.purple, FILL.purple] }), lb(83, 82, '下半分（3個）', 11, C.green, 'middle', true), lb(243, 82, '上半分（3個）', 11, C.purple, 'middle', true), lb(163, 82, '除く', 11, C.gray, 'middle', true)], [eb(152, '9 は入れない（下3個・上3個）', C.gray, FILL.gray, 14), tx(206, '下半分の中央値＝Q1、上半分の中央値＝Q3', 12)]),
  },
  {
    note: '下半分 2, 5, 7 の真ん中は 5 なので Q1 ＝ 5。上半分 12, 14, 18 の真ん中は 14 なので Q3 ＝ 14 です。',
    add: F([...cards(30, { 0: [C.green, FILL.green], 1: [C.red, FILL.red], 2: [C.green, FILL.green], 3: [C.gray, FILL.gray], 4: [C.purple, FILL.purple], 5: [C.red, FILL.red], 6: [C.purple, FILL.purple] }), lb(63, 82, 'Q1 ＝ 5', 13, C.red, 'middle', true), lb(263, 82, 'Q3 ＝ 14', 13, C.red, 'middle', true)], [eb(152, 'Q1 ＝ 5   Q3 ＝ 14', C.red, FILL.red, 16), tx(206, '2, 5, 7 の真ん中 ／ 12, 14, 18 の真ん中', 12)]),
  },
  {
    note: '最小値はいちばん小さい 2、最大値はいちばん大きい 18 です。これで5つの値がそろいました。',
    add: F([...cards(30, { 0: [C.red, FILL.red], 1: [C.red, FILL.red], 3: [C.red, FILL.red], 5: [C.red, FILL.red], 6: [C.red, FILL.red] }), lb(40, 76, '最小', 11, C.red, 'middle', true), lb(80, 76, 'Q1', 11, C.red, 'middle', true), lb(160, 76, '中央値', 11, C.red, 'middle', true), lb(240, 76, 'Q3', 11, C.red, 'middle', true), lb(280, 76, '最大', 11, C.red, 'middle', true)], [eb(152, '2 ・ 5 ・ 9 ・ 14 ・ 18', C.red, FILL.red, 16), tx(206, '最小・Q1・中央値・Q3・最大', 12)]),
  },
  {
    note: '箱ひげ図にすると、箱が Q1 から Q3（5〜14）、箱の中の線が中央値 9、ひげが最小 2 と最大 18 までのびます。数直線の目もりに合わせて、値の位置を決めます。',
    add: F([ln(20, 110, 300, 110, C.gray), bx(nx(5), 60, nx(14) - nx(5), 35, undefined, C.blue, FILL.blue), ln(nx(9), 60, nx(9), 95, C.red, false, 3), ln(nx(2), 77, nx(5), 77, C.blue, false, 2), ln(nx(14), 77, nx(18), 77, C.blue, false, 2), ln(nx(2), 67, nx(2), 87, C.blue, false, 2), ln(nx(18), 67, nx(18), 87, C.blue, false, 2), lb(nx(2), 52, '最小', 11, C.ink, 'middle', true), lb(nx(5), 52, 'Q1', 11, C.ink, 'middle', true), lb(nx(9), 52, '中央値', 11, C.red, 'middle', true), lb(nx(14), 52, 'Q3', 11, C.ink, 'middle', true), lb(nx(18), 52, '最大', 11, C.ink, 'middle', true), lb(nx(2), 126, '2', 11, C.gray, 'middle'), lb(nx(5), 126, '5', 11, C.gray, 'middle'), lb(nx(9), 126, '9', 11, C.gray, 'middle'), lb(nx(14), 126, '14', 11, C.gray, 'middle'), lb(nx(18), 126, '18', 11, C.gray, 'middle')], [eb(152, '箱 ＝ Q1 〜 Q3 ・ 線 ＝ 中央値', C.blue, FILL.blue, 14), tx(206, 'ひげ ＝ 最小・最大まで', 12)]),
  },
  {
    note: '❓ 本当に4等分になっているか確かめます。5より小さいのが1個（2）、5と9の間が1個（7）、9と14の間が1個（12）、14より大きいのが1個（18）。どこも1個ずつなので4等分です。',
    add: F([...cards(30, { 0: [C.green, FILL.green], 1: [C.red, FILL.red], 2: [C.green, FILL.green], 3: [C.red, FILL.red], 4: [C.green, FILL.green], 5: [C.red, FILL.red], 6: [C.green, FILL.green] }), lb(40, 76, '1個', 12, C.green, 'middle', true), lb(120, 76, '1個', 12, C.green, 'middle', true), lb(200, 76, '1個', 12, C.green, 'middle', true), lb(280, 76, '1個', 12, C.green, 'middle', true)], [eb(152, '1個 ・ 1個 ・ 1個 ・ 1個', C.green, FILL.green, 16), tx(206, '区切りの値（赤）をのぞいて数える → 4等分', 12)]),
  },
  {
    note: 'よくあるまちがいです。中央値 9 を下半分に入れると、下は2, 5, 7, 9 の4個になり、Q1 ＝ (5＋7)÷2 ＝ 6 と出てしまいます。でも下4個・上3個で個数がちがい、4等分になりません。奇数個のときは中央値を除きます。',
    add: F([...cards(30, { 0: [C.red, FILL.red], 1: [C.red, FILL.red], 2: [C.red, FILL.red], 3: [C.red, FILL.red] }), ln(23, 72, 183, 72, C.red), lb(103, 86, '下は4個', 12, C.red, 'middle', true), lb(243, 86, '上は3個', 12, C.gray, 'middle', true)], [eb(152, '9 を入れて Q1＝(5＋7)÷2＝6 ✕', C.red, FILL.red, 14), tx(206, '下4個・上3個 → 等分にならない', 12)]),
  },
  {
    note: '答え：最小値 2、Q1＝5、中央値 9、Q3＝14、最大値 18。確かめ：区切りの値をのぞく4つの区間に、データが1個ずつ入っています。',
    add: F([eb(10, '最小値 ＝ 2', C.blue, FILL.blue, 14, 26), eb(40, 'Q1 ＝ 5', C.blue, FILL.blue, 14, 26), eb(70, '中央値 ＝ 9', C.red, FILL.red, 14, 26), eb(100, 'Q3 ＝ 14', C.blue, FILL.blue, 14, 26)], [eb(134, '最大値 ＝ 18', C.blue, FILL.blue, 14, 26), tx(190, '確かめ：各区間に1個ずつ  ✓', 13, C.green, true)]),
  },
]);

// ══════════════════════════════════════════════════════════
// 5. 正四角すいを底面に平行に切る（koko_sansu_ex_06_034）
// ══════════════════════════════════════════════════════════
const bigTri = (): E[] => [
  pg([[100, 125], [220, 125], [160, 35]], C.blue, FILL.blue),
  pg([[120, 95], [200, 95], [160, 35]], C.red, RED_T),
  ln(160, 35, 160, 125, C.gray, true),
];
const section: Figure = show([
  {
    note: '底面の1辺が4cm、高さ3cmの正四角すいを、底面に平行な面で、底面から1cmの位置で切ります。頂点を通る真横の断面で見た図です。断面積と、切り取られる頂点側の小さい四角すいの体積を求めます。',
    add: F([...bigTri(), ln(200, 95, 232, 95, C.gray, true), ln(232, 95, 232, 125, C.gray, false, 2), lb(238, 114, '1cm', 12, C.gray, 'start', true), lb(160, 133, '底面 4cm', 12, C.blue, 'middle', true), lb(232, 62, '高さ3cm', 12, C.blue, 'start', true)], [eb(152, '断面積 ＝ ？   小さい四角すいの体積 ＝ ？', C.blue, FILL.blue, 12), tx(206, '赤い部分が、頂点側の小さい四角すい', 12)]),
  },
  {
    note: '❓ なぜ頂点側の小さい四角すいは、元の四角すいと「相似」なの？ 底面に平行に切ったので、切り口は底面と同じ向きの正方形で、側面はそのまま続いています。三角形で平行線を引くと、小さい三角形は大きい三角形と相似になるのと同じです。',
    add: T([], [eb(152, '小さい四角すい ∽ 元の四角すい', C.red, FILL.red, 15), tx(206, '底面に平行に切ると、形は同じで小さくなる', 12)]),
  },
  {
    note: '❓ 相似比はいくつ？ 相似比は頂点から測った高さの比です。小さい四角すいの高さは 3−1 ＝ 2、元は 3 なので 2：3。底面から測った「1cm」は使いません。',
    add: F([...bigTri(), ln(84, 35, 84, 95, C.green, false, 2), ln(58, 35, 58, 125, C.purple, false, 2), lb(78, 68, '2', 14, C.green, 'end', true), lb(52, 84, '3', 14, C.purple, 'end', true), lb(238, 110, '1 は使わない', 11, C.red, 'start', true), ln(200, 95, 232, 95, C.gray, true), ln(232, 95, 232, 125, C.red, false, 2)], [eb(152, '相似比 ＝ 頂点からの高さの比 ＝ 2：3', C.green, FILL.green, 14), tx(206, '底面から1cm → 1：3 としない', 12)]),
  },
  {
    note: '❓ なぜ断面の辺も 2/3 倍なの？ 相似な図形では、対応する長さはすべて同じ比になるからです。底面の1辺 4cm に 2/3 をかけると、断面の1辺は 4×2/3 ＝ 8/3cm です。',
    add: F([...bigTri(), lb(160, 84, '8/3cm', 11, C.red, 'middle', true), lb(160, 137, '底面 4cm', 12, C.blue, 'middle', true)], [eb(152, '4 × 2/3 ＝ 8/3 cm', C.red, FILL.red, 16), tx(206, '断面は 1辺 8/3cm の正方形', 12)]),
  },
  {
    note: '断面は正方形なので、面積は 1辺×1辺 ＝ 8/3×8/3 ＝ 64/9cm²（約7.1cm²）です。底面の 4×4 ＝ 16cm² より小さくなります。',
    add: F([bx(30, 12, 112, 112, '4×4＝16', C.blue, FILL.blue, 14), bx(190, 31, 75, 75, '64/9', C.red, FILL.red, 14), ar(148, 68, 184, 68, C.gray), lb(86, 137, '底面 4cm', 12, C.blue, 'middle', true), lb(227, 120, '断面 8/3cm', 12, C.red, 'middle', true)], [eb(152, '(8/3) × (8/3) ＝ 64/9 cm²', C.red, FILL.red, 15), tx(206, '約 7.1cm²', 12)]),
  },
  {
    note: '❓ 面積の比はなぜ 4：9 なの？ 相似比が 2：3 のとき、面積はたてもよこも 2：3 になるので、面積比は 2×2：3×3 ＝ 4：9 です。3×3 のます目の中に 2×2 がある図で考えると、ます目の数が 4 と 9 です。',
    add: F([...[0, 1, 2].flatMap((i) => [0, 1, 2].map((j) => bx(60 + 28 * i, 15 + 28 * j, 28, 28, undefined, C.gray, i < 2 && j >= 1 ? RED_T : FILL.blue))), lb(165, 40, '大：3×3 ＝ 9', 13, C.blue, 'start', true), lb(165, 66, '小：2×2 ＝ 4', 13, C.red, 'start', true), lb(165, 92, '面積比 4：9', 13, C.ink, 'start', true)], [eb(152, '16 × 4/9 ＝ 64/9  ✓', C.green, FILL.green, 16), tx(206, '面積比 ＝ 相似比の2乗', 12)]),
  },
  {
    note: '次に、小さい四角すいの体積です。すい体の体積は「底面積×高さ÷3」。底面は断面（面積 64/9）、高さは 2cm なので、64/9 × 2 ÷ 3 ＝ 128/27cm³ です。',
    add: F([pg([[100, 115], [220, 115], [160, 25]], C.red, RED_T), ln(160, 25, 160, 115, C.gray, true), lb(214, 70, '高さ2cm', 12, C.red, 'start', true), lb(160, 130, '底面 8/3cm（面積 64/9）', 11, C.red, 'middle', true)], [eb(152, '体積 ＝ 底面積 × 高さ ÷ 3', C.red, FILL.red, 14), eb(186, '＝ 64/9 × 2 ÷ 3 ＝ 128/27', C.green, FILL.green, 15)]),
  },
  {
    note: '別の方法で確かめます。元の四角すいの体積は 4×4×3÷3 ＝ 16cm³ です。小さい四角すいは、これを縮めたものなので、体積比を使えば求められます。',
    add: F([pg([[100, 125], [220, 125], [160, 35]], C.blue, FILL.blue), lb(160, 137, '底面 4cm', 12, C.blue, 'middle', true), lb(226, 80, '高さ3cm', 12, C.blue, 'start', true), ln(160, 35, 160, 125, C.gray, true)], [eb(152, '元の体積 ＝ 4×4×3÷3 ＝ 16', C.blue, FILL.blue, 15), tx(206, '（底面 4×4 ・ 高さ 3）', 12)]),
  },
  {
    note: '❓ 体積比はなぜ相似比の3乗なの？ 立体を縮めるとき、たて・よこ・高さの3方向がすべて 2/3 倍になるからです。体積は3方向の長さの積なので、2/3 を3回かけて 8/27 になります。',
    add: F([eb(10, 'たて方向 × 2/3', C.blue, FILL.blue, 14, 28), eb(42, 'よこ方向 × 2/3', C.green, FILL.green, 14, 28), eb(74, '高さ方向 × 2/3', C.purple, FILL.purple, 14, 28), eb(106, '2/3 × 2/3 × 2/3 ＝ 8/27', C.red, FILL.red, 15, 28)], [tx(160, '体積比 ＝ 2³：3³ ＝ 8：27', 14, C.gray, true), tx(188, '相似比の3乗', 12)]),
  },
  {
    note: '元の体積 16cm³ に 8/27 をかけると、16×8/27 ＝ 128/27cm³。さきほど底面積×高さ÷3 で求めた値と一致しました。',
    add: F([eb(12, '直接：64/9 × 2 ÷ 3 ＝ 128/27', C.red, FILL.red, 15, 34), eb(58, '体積比：16 × 8/27 ＝ 128/27', C.blue, FILL.blue, 15, 34)], [eb(130, '2つの方法で一致  ✓', C.green, FILL.green, 17, 34)]),
  },
  {
    note: '答え：断面積 64/9cm²、小さい四角すいの体積 128/27cm³。よくあるまちがいは、底面からの高さ1cmを使って相似比を 1/3 とすること。相似比は頂点から測った 2/3 です。',
    add: F([eb(12, '断面積 ＝ 64/9 cm²', C.green, FILL.green, 16, 34), eb(58, '体積 ＝ 128/27 cm³', C.green, FILL.green, 16, 34)], [tx(130, '確かめ：16 × 8/27 ＝ 128/27  ✓', 14, C.blue, true), tx(176, '相似比は「頂点から」測る', 13, C.red, true), tx(198, '底面から1cm → 1/3 としない', 12, C.red)]),
  },
]);

// ══════════════════════════════════════════════════════════
// 6. 正六角形の対角線（koko_sansu_ex_06_046）
// ══════════════════════════════════════════════════════════
const HV: [number, number][] = [[215, 72], [187.5, 119.6], [132.5, 119.6], [105, 72], [132.5, 24.4], [187.5, 24.4]];
const hexEdges = (color: string = C.blue): E[] => HV.map((p, i) => ln(p[0], p[1], HV[(i + 1) % 6][0], HV[(i + 1) % 6][1], color, false, 2));
const dg = (i: number, j: number, color: string = C.red, dashed = false, w = 2): E => ln(HV[i][0], HV[i][1], HV[j][0], HV[j][1], color, dashed, w);
const hexLabels: E[] = [lb(224, 76, 'A', 13, C.ink, 'start', true), lb(194, 134, 'B', 13, C.ink, 'start', true), lb(126, 134, 'C', 13, C.ink, 'end', true), lb(96, 76, 'D', 13, C.ink, 'end', true), lb(126, 20, 'E', 13, C.ink, 'end', true), lb(194, 20, 'F', 13, C.ink, 'start', true)];
const allDiag: E[] = [dg(0, 2), dg(0, 3), dg(0, 4), dg(1, 3), dg(1, 4), dg(1, 5), dg(2, 4), dg(2, 5), dg(3, 5)];
const hex: Figure = show([
  {
    note: '1辺が1の正六角形ABCDEFです。対角線の本数と、いちばん長い対角線と辺の長さの比を求めます。',
    add: F([...hexEdges(), ...hexLabels, lb(160, 76, '1辺 ＝ 1', 12, C.gray, 'middle')], [eb(152, '対角線は何本？ いちばん長いのは？', C.blue, FILL.blue, 14), tx(206, '辺とのくらべ方も答える', 12)]),
  },
  {
    note: '❓ 対角線とは？ となり合う頂点を結ぶ線は「辺」で、そのほかの2つの頂点を結ぶ線が「対角線」です。たとえば AとC を結ぶ AC は対角線です。',
    add: F([...hexEdges(), ...hexLabels, dg(0, 2)], [eb(152, '辺 ＝ となり同士 ・ 対角線 ＝ それ以外', C.red, FILL.red, 13), tx(206, '例：AC は対角線', 12)]),
  },
  {
    note: '❓ 1つの頂点から何本ひけるの？ Aからは、A自身とは線にならず、両どなりのBとFは辺です。ひけるのは C・D・E の 6−3 ＝ 3本です。',
    add: F([...hexEdges(), ...hexLabels, dg(0, 2), dg(0, 3), dg(0, 4), lb(214, 104, '辺', 11, C.blue, 'start', true), lb(214, 40, '辺', 11, C.blue, 'start', true)], [eb(152, '6 − 3（自分と両どなり）＝ 3本', C.red, FILL.red, 14), tx(206, 'Aから C・D・E への3本', 12)]),
  },
  {
    note: '❓ 6つの頂点があるので 6×3 ＝ 18本でいいの？ いいえ。たとえば AC は、A から数えたときと、C から数えたときの2回数えています。どの対角線も両はしで2回ずつ数えているのです。',
    add: F([...hexEdges(), ...hexLabels, dg(0, 2), ar(208, 67, 178, 84, C.green), ar(134, 109, 164, 92, C.purple), lb(196, 54, 'Aから', 11, C.green, 'middle', true), lb(124, 100, 'Cから', 11, C.purple, 'end', true)], [eb(152, '6 × 3 ＝ 18 は 2回ずつ数えている', C.red, FILL.red, 14), tx(206, 'AC は A からも C からも数えた', 12)]),
  },
  {
    note: '2回ずつ数えているので、2でわります。18÷2 ＝ 9本。図にすべての対角線をかくと、ちょうど9本です。',
    add: F([...hexEdges(), ...hexLabels, ...allDiag], [eb(152, '6 × 3 ÷ 2 ＝ 9本', C.green, FILL.green, 17), tx(206, '赤い線が9本', 12)]),
  },
  {
    note: '確かめ：❓ 別の方法で数えます。6つの頂点から2つを選んで結ぶ線分は、1点から他の5点へ引いて 6×5 ＝ 30、2回ずつ数えているので 30÷2 ＝ 15本。そこから辺の6本を引くと 15−6 ＝ 9本で一致します。',
    add: F([...hexEdges(), ...hexLabels, ...allDiag], [eb(150, '6 × 5 ÷ 2 ＝ 15（全部の線分）', C.blue, FILL.blue, 14, 28), eb(184, '15 − 6（辺）＝ 9本  ✓', C.green, FILL.green, 15, 28)]),
  },
  {
    note: '次に、いちばん長い対角線です。❓ どれが長いの？ 向かい合う頂点を結ぶ AD・BE・CF は、正六角形の中心を通る3本で、ほかの対角線（たとえば AC）より長くなります。',
    add: F([...hexEdges(), ...hexLabels, dg(0, 2, C.gray, false, 1), dg(0, 3, C.purple, false, 3), dg(1, 4, C.purple, false, 3), dg(2, 5, C.purple, false, 3), lb(160, 44, '中心', 10, C.purple, 'middle', true)], [eb(152, '向かい合う頂点を結ぶ線が最長', C.purple, FILL.purple, 14), tx(206, 'AD・BE・CF（中心を通る3本）', 12)]),
  },
  {
    note: '❓ なぜ AD は辺の2倍なの？ 中心Oと各頂点を結ぶと、正六角形は6つの三角形に分かれます。中心のまわりは 360°÷6 ＝ 60°。OAとOBは半径で等しいので二等辺三角形、ほかの2つの角は (180−60)÷2 ＝ 60° ずつで、正三角形です。',
    add: F([...hexEdges(), ...hexLabels, ...HV.map((p) => ln(160, 72, p[0], p[1], C.gray, false, 1)), pg([[160, 72], [215, 72], [187.5, 119.6]], C.green, GREEN_T), lb(176, 92, '60°', 10, C.green, 'middle', true), dot(160, 72, C.purple), lb(152, 68, 'O', 12, C.purple, 'end', true)], [eb(152, '頂角60°の二等辺三角形 ＝ 正三角形', C.green, FILL.green, 14), tx(206, '6つの正三角形でできている', 12)]),
  },
  {
    note: '正三角形なので OA ＝ OB ＝ AB ＝ 1。AD は中心Oを通るので AD ＝ OA＋OD ＝ 1＋1 ＝ 2。辺の長さ 1 の2倍です。',
    add: F([...hexEdges(), ...hexLabels, dg(0, 3, C.purple, false, 3), dot(160, 72, C.purple), lb(188, 64, '1', 13, C.green, 'middle', true), lb(132, 64, '1', 13, C.green, 'middle', true)], [eb(152, 'AD ＝ 1 ＋ 1 ＝ 2', C.purple, FILL.purple, 17), tx(206, '辺の長さ 1 の 2倍', 13)]),
  },
  {
    note: '答え：対角線は9本、最長の対角線は2、辺との比は 2：1。確かめ：六角形の対角線の公式 n(n−3)÷2 に n＝6 を入れると 6×3÷2 ＝ 9。よくあるまちがいは、辺を引き忘れて15本と答えることです。',
    add: F([eb(10, '対角線 ＝ 9本', C.green, FILL.green, 16, 30), eb(48, '最長の対角線 ＝ 2', C.green, FILL.green, 16, 30), eb(86, '辺との比 ＝ 2：1', C.green, FILL.green, 16, 30)], [tx(148, '確かめ：n(n−3)÷2 ＝ 6×3÷2 ＝ 9  ✓', 13, C.blue, true), tx(186, '15本は辺を引き忘れ', 13, C.red, true)]),
  },
]);

// ══════════════════════════════════════════════════════════
// 7. 円の外の点からの接線（koko_sansu_ex_06_044）
// ══════════════════════════════════════════════════════════
const O_ = { x: 120, y: 75 };
const P_ = { x: 190, y: 75 };
const A_ = { x: 137.5, y: 44.7 };
const B_ = { x: 137.5, y: 105.3 };
const tanBase = (): E[] => [
  ci(O_.x, O_.y, 35, undefined, C.main, FILL.yellow),
  ln(P_.x, P_.y, A_.x, A_.y, C.blue, false, 2), ln(P_.x, P_.y, B_.x, B_.y, C.blue, false, 2),
  ln(O_.x, O_.y, A_.x, A_.y, C.gray, false, 1), ln(O_.x, O_.y, B_.x, B_.y, C.gray, false, 1),
  dot(O_.x, O_.y), dot(P_.x, P_.y), dot(A_.x, A_.y), dot(B_.x, B_.y),
  lb(110, 80, 'O', 13, C.ink, 'end', true), lb(198, 79, 'P', 13, C.ink, 'start', true), lb(134, 38, 'A', 13, C.ink, 'end', true), lb(134, 122, 'B', 13, C.ink, 'end', true),
];
const tangent: Figure = show([
  {
    note: '円Oの外の点Pから2本の接線を引き、接点をA・Bとします。PA＝8cm のとき PB の長さは？ また ∠APB＝60° のとき、円の半径とOPの長さを求めます。',
    add: F([...tanBase(), lb(176, 52, '8cm', 12, C.red, 'start', true), lb(222, 80, '∠APB＝60°', 11, C.red, 'start', true)], [eb(152, 'PA ＝ 8cm ・ ∠APB ＝ 60°', C.blue, FILL.blue, 15), tx(206, '求めるもの：PB・半径・OP', 12)]),
  },
  {
    note: '❓ なぜ接線と半径は垂直なの？ 接線は円の外にあるので、接点以外の線上の点は、中心から半径より遠くなります。接点がいちばん中心に近く、最短の線は垂線だからです。',
    add: F([ci(160, 50, 38, undefined, C.main, FILL.yellow), ln(90, 88, 230, 88, C.blue, false, 2), ln(160, 50, 160, 88, C.red, false, 2), dot(160, 88, C.red), ln(160, 50, 212, 88, C.gray, true), dot(212, 88, C.gray), ...rm(160, 88, 0, -1, 1, 0), lb(152, 72, '半径', 12, C.red, 'end', true), lb(222, 66, 'もっと長い', 11, C.gray, 'start')], [eb(152, '接点がいちばん近い → 半径 ⊥ 接線', C.blue, FILL.blue, 14), tx(206, '∠OAP ＝ ∠OBP ＝ 90°', 13, C.gray, true)]),
  },
  {
    note: '❓ なぜ PA ＝ PB なの？ △OAP と △OBP を比べます。OA＝OB（半径）、OP は共通、∠OAP＝∠OBP＝90°。直角三角形で、斜辺と他の1辺がそれぞれ等しいので合同です。',
    add: F([pg([[O_.x, O_.y], [A_.x, A_.y], [P_.x, P_.y]], C.blue, BLUE_T), pg([[O_.x, O_.y], [B_.x, B_.y], [P_.x, P_.y]], C.green, GREEN_T), ...tanBase(), ...rm(A_.x, A_.y, -0.5, 0.866, 0.866, 0.5), ...rm(B_.x, B_.y, -0.5, -0.866, 0.866, -0.5), lb(108, 52, '半径', 10, C.gray, 'end'), lb(108, 100, '半径', 10, C.gray, 'end')], [eb(152, '直角三角形で 斜辺OP共通・OA＝OB', C.green, FILL.green, 13), tx(206, '→ △OAP ≡ △OBP', 14, C.gray, true)]),
  },
  {
    note: '合同な三角形は対応する辺の長さが等しいので、PA ＝ PB。PA が 8cm なので、PB ＝ 8cm です。',
    add: F([...tanBase(), lb(176, 52, '8cm', 12, C.red, 'start', true), lb(176, 104, '8cm', 12, C.red, 'start', true)], [eb(152, 'PB ＝ PA ＝ 8cm', C.green, FILL.green, 17), tx(206, '外の点からの2本の接線は等しい', 12)]),
  },
  {
    note: '❓ ∠APB＝60° から何がわかるの？ 合同な三角形の対応する角は等しいので、∠APO ＝ ∠BPO。OP は ∠APB を二等分します。よって ∠APO ＝ 60°÷2 ＝ 30° です。',
    add: F([...tanBase(), ln(O_.x, O_.y, P_.x, P_.y, C.red, true, 2), lb(162, 66, '30°', 11, C.red, 'middle', true), lb(162, 84, '30°', 11, C.red, 'middle', true)], [eb(152, '∠APO ＝ 60° ÷ 2 ＝ 30°', C.red, FILL.red, 16), tx(206, 'OP が 60° を半分に分ける', 12)]),
  },
  {
    note: '△OAP に注目します。∠OAP＝90°、∠APO＝30° なので、残りの ∠AOP ＝ 180−90−30 ＝ 60°。つまり 30°・60°・90° の直角三角形です。OA：AP：OP ＝ 1：√3：2 の比になります。',
    add: F([pg([[80, 118], [175.3, 118], [80, 63]], C.blue, FILL.blue), ...rm(80, 118, 0, -1, 1, 0), lb(72, 92, 'OA ＝ 1', 12, C.blue, 'end', true), lb(128, 133, 'AP ＝ √3', 12, C.blue, 'middle', true), lb(140, 82, 'OP ＝ 2', 12, C.blue, 'start', true), lb(84, 84, '60°', 11, C.red, 'start', true), lb(182, 114, '30°', 11, C.red, 'start', true), lb(66, 58, 'O', 12, C.ink, 'end', true), lb(180, 128, 'P', 12, C.ink, 'start', true), lb(68, 122, 'A', 12, C.ink, 'end', true)], [eb(152, 'OA：AP：OP ＝ 1：√3：2', C.blue, FILL.blue, 16), tx(206, '30°・60°・90° の直角三角形', 12)]),
  },
  {
    note: '❓ なぜ比が 1：√3：2 なの？ 1辺2の正三角形を、頂点から真下に半分に切ると、底辺1・斜辺2の直角三角形ができます。高さは三平方の定理で √(2²−1²) ＝ √3。これが 30°・60°・90° の三角形です。',
    add: F(half30(), [eb(152, '高さ ＝ √(2² − 1²) ＝ √3', C.red, FILL.red, 15), tx(206, '正三角形の半分 → 1：√3：2', 12)]),
  },
  {
    note: 'AP ＝ 8 が比の √3 にあたります。比の 1 にあたる長さは 8÷√3 なので、半径 OA ＝ 8/√3。分母の√を消す（有理化）と、分母と分子に √3 をかけて 8√3/3 cm（約4.6cm）です。',
    add: F([eb(10, 'AP ＝ 8 が √3 にあたる', C.blue, FILL.blue, 15, 30), eb(50, '1にあたる長さ ＝ 8 ÷ √3', C.purple, FILL.purple, 15, 30), eb(90, 'OA ＝ 8/√3 ＝ 8√3/3', C.green, FILL.green, 16, 30)], [tx(152, '有理化：分母と分子に √3 をかける', 12, C.gray, true), tx(178, '8/√3 ＝ 8×√3 ÷ (√3×√3) ＝ 8√3/3', 11, C.gray), tx(202, '約 4.6cm', 12, C.green, true)]),
  },
  {
    note: 'OP は比の 2 にあたり、OA は比の 1 にあたるので、OP ＝ OA×2 ＝ 2×8/√3 ＝ 16/√3 ＝ 16√3/3 cm（約9.2cm）です。',
    add: F([eb(12, 'OP ＝ OA × 2', C.blue, FILL.blue, 16, 32), eb(54, '＝ 2 × 8√3/3', C.purple, FILL.purple, 16, 32), eb(96, '＝ 16√3/3 cm', C.green, FILL.green, 17, 32)], [tx(160, '約 9.2cm', 13, C.green, true), tx(190, '（OA の 2倍）', 12)]),
  },
  {
    note: '確かめ：△OAP で三平方の定理を使います。OA²＋AP² ＝ 64/3 ＋ 64 ＝ 256/3。OP² ＝ (16√3/3)² ＝ 256×3÷9 ＝ 256/3。2つが一致するので、値は正しいです。',
    add: F([eb(12, 'OA² ＋ AP² ＝ 64/3 ＋ 64', C.blue, FILL.blue, 15, 32), eb(52, '＝ 256/3', C.blue, FILL.blue, 16, 30), eb(92, 'OP² ＝ 256×3 ÷ 9 ＝ 256/3', C.purple, FILL.purple, 15, 32)], [eb(144, '一致  ✓', C.green, FILL.green, 17, 32)]),
  },
  {
    note: '答え：PB＝8cm、半径 8√3/3 cm、OP＝16√3/3 cm。よくあるまちがいは、∠APO を 60° にすること。60° は2本の接線の間の角で、OP で半分の 30° になります。',
    add: F([eb(10, 'PB ＝ 8cm', C.green, FILL.green, 16, 30), eb(48, '半径 ＝ 8√3/3 cm', C.green, FILL.green, 16, 30), eb(86, 'OP ＝ 16√3/3 cm', C.green, FILL.green, 16, 30)], [tx(148, '確かめ：三平方で 256/3 ＝ 256/3  ✓', 13, C.blue, true), tx(186, '∠APO は 30°（60° ではない）', 13, C.red, true)]),
  },
]);

// ══════════════════════════════════════════════════════════
// 8. OA=3・OB=4・∠AOB=60° の三角形（koko_sansu_ex_08_033）
//    中学の道具（30°・60°・90°・三平方）だけで解く
// ══════════════════════════════════════════════════════════
const Oo = { x: 70, y: 120 };
const Aa = { x: 122.5, y: 29.1 };
const Bb = { x: 210, y: 120 };
const Hh = { x: 122.5, y: 120 };
const triBase = (): E[] => [
  pg([[Oo.x, Oo.y], [Bb.x, Bb.y], [Aa.x, Aa.y]], C.blue, FILL.blue),
  lb(62, 124, 'O', 13, C.ink, 'end', true), lb(Bb.x + 8, 124, 'B', 13, C.ink, 'start', true), lb(Aa.x, 22, 'A', 13, C.ink, 'middle', true),
];
const tri60: Figure = show([
  {
    note: '△OAB で OA＝3、OB＝4、∠AOB＝60° です。三角形の面積と、辺ABの長さを求めます。中学で習う道具だけで解きます。',
    add: F([...triBase(), lb(88, 66, '3', 13, C.blue, 'end', true), lb(140, 136, '4', 13, C.blue, 'middle', true), lb(88, 112, '60°', 11, C.red, 'start', true)], [eb(152, 'OA ＝ 3 ・ OB ＝ 4 ・ ∠O ＝ 60°', C.blue, FILL.blue, 14), tx(206, '面積と AB を求める', 12)]),
  },
  {
    note: '❓ なぜ A から OB へ垂線 AH をおろすの？ 面積は「底辺×高さ÷2」なので、OB を底辺にすれば高さが AH になります。さらに、直角三角形 OAH と AHB ができて、辺の比や三平方の定理が使えるからです。',
    add: F([...triBase(), ln(Aa.x, Aa.y, Hh.x, Hh.y, C.red, true, 2), dot(Hh.x, Hh.y, C.red), lb(Hh.x, 134, 'H', 13, C.red, 'middle', true), ...rm(Hh.x, Hh.y, 1, 0, 0, -1), ...rm(Hh.x, Hh.y, -1, 0, 0, -1)], [eb(152, '垂線 AH ＝ 高さ', C.red, FILL.red, 16), tx(206, '直角三角形が2つできる', 12)]),
  },
  {
    note: '△OAH を見ます。∠O＝60°、∠H＝90° なので、残りの ∠OAH ＝ 180−90−60 ＝ 30°。30°・60°・90° の直角三角形です。辺の比は OH：OA：AH ＝ 1：2：√3 になります。',
    add: F([pg([[Oo.x, Oo.y], [Hh.x, Hh.y], [Aa.x, Aa.y]], C.green, GREEN_T), ...triBase(), ln(Aa.x, Aa.y, Hh.x, Hh.y, C.red, true, 2), ...rm(Hh.x, Hh.y, -1, 0, 0, -1), lb(88, 112, '60°', 11, C.red, 'start', true), lb(Aa.x + 6, 46, '30°', 11, C.red, 'start', true), lb(Hh.x, 134, 'H', 13, C.red, 'middle', true)], [eb(152, 'OH：OA：AH ＝ 1：2：√3', C.green, FILL.green, 16), tx(206, '30°・60°・90° の直角三角形', 12)]),
  },
  {
    note: '❓ なぜ比が 1：2：√3 なの？ 1辺2の正三角形を半分に切ると、底辺1・斜辺2の直角三角形になり、高さは三平方の定理で √(2²−1²) ＝ √3。これが 30°・60°・90° の三角形の比です。',
    add: F(half30(), [eb(152, '高さ ＝ √(2² − 1²) ＝ √3', C.red, FILL.red, 15), tx(206, '正三角形の半分 → 1：√3：2', 12)]),
  },
  {
    note: 'OA ＝ 3 が比の 2 にあたります。比の 1 にあたる長さは 3÷2 ＝ 3/2 なので、OH ＝ 3/2。AH は √3 にあたるので AH ＝ 3√3/2（約2.6）です。',
    add: F([...triBase(), ln(Aa.x, Aa.y, Hh.x, Hh.y, C.red, true, 2), dot(Hh.x, Hh.y, C.red), lb(Hh.x, 134, 'H', 13, C.red, 'middle', true), lb(94, 135, '3/2', 11, C.green, 'middle', true), lb(Hh.x - 5, 84, 'AH', 12, C.red, 'end', true)], [eb(152, '2 にあたるのが 3 → 1 は 3/2', C.green, FILL.green, 14), tx(206, 'OH ＝ 3/2 ・ AH ＝ 3/2 × √3 ＝ 3√3/2', 12)]),
  },
  {
    note: '面積を求めます。底辺 OB ＝ 4、高さ AH ＝ 3√3/2 なので、4×(3√3/2)÷2 ＝ 3√3。❓ なぜ÷2？ 三角形は、同じ底辺と高さの長方形のちょうど半分だからです。',
    add: F([ln(Oo.x, Aa.y, Bb.x, Aa.y, C.gray, true), ln(Oo.x, Aa.y, Oo.x, Oo.y, C.gray, true), ln(Bb.x, Aa.y, Bb.x, Bb.y, C.gray, true), ...triBase(), ln(Aa.x, Aa.y, Hh.x, Hh.y, C.red, true, 2)], [eb(152, '4 × (3√3/2) ÷ 2 ＝ 3√3', C.green, FILL.green, 15), tx(206, '長方形の半分（約5.2）', 12)]),
  },
  {
    note: 'つぎは AB。HB を求めます。❓ なぜ引き算？ OB 全体は 4 で、そのうち OH が 3/2 なので、残りが HB ＝ 4−3/2 ＝ 5/2 です。',
    add: F([...triBase(), ln(Aa.x, Aa.y, Hh.x, Hh.y, C.red, true, 2), ln(Hh.x, Hh.y, Bb.x, Bb.y, C.purple, false, 4), lb(Hh.x, 134, 'H', 13, C.red, 'middle', true), lb(166, 136, 'HB ＝ 5/2', 12, C.purple, 'middle', true), lb(96, 136, '3/2', 11, C.green, 'middle', true)], [eb(152, 'HB ＝ 4 − 3/2 ＝ 5/2', C.purple, FILL.purple, 16), tx(206, 'OB 全体から OH をひく', 12)]),
  },
  {
    note: '❓ なぜ三平方の定理を使うの？ △AHB は H が直角の直角三角形で、AB が斜辺だからです。AB² ＝ AH²＋HB² ＝ (3√3/2)²＋(5/2)² ＝ 27/4＋25/4 ＝ 52/4 ＝ 13。よって AB ＝ √13 です。',
    add: F([pg([[Hh.x, Hh.y], [Bb.x, Bb.y], [Aa.x, Aa.y]], C.purple, PUR_T), ...triBase(), ...rm(Hh.x, Hh.y, 1, 0, 0, -1), lb(Hh.x, 134, 'H', 13, C.red, 'middle', true), lb(174, 66, 'AB', 13, C.red, 'start', true)], [eb(150, 'AB² ＝ 27/4 ＋ 25/4 ＝ 13', C.purple, FILL.purple, 15, 28), tx(196, 'AB ＝ √13（約3.6）', 14, C.red, true), tx(220, '(3√3/2)² ＝ 9×3÷4 ＝ 27/4', 11)]),
  },
  {
    note: '確かめ：面積を別の底辺で求めます。B から OA へ垂線 BK をおろすと、△OBK は 30°・60°・90° で、OB＝4 が比の 2 にあたるので OK ＝ 2、BK ＝ 2√3。面積は 3×2√3÷2 ＝ 3√3 で一致します。',
    add: F([...triBase(), ln(Bb.x, Bb.y, 105, 59.4, C.red, true, 2), dot(105, 59.4, C.red), lb(98, 56, 'K', 13, C.red, 'end', true), lb(178, 78, 'BK ＝ 2√3', 11, C.red, 'start', true), lb(76, 92, 'OK ＝ 2', 11, C.green, 'end', true)], [eb(152, '3 × 2√3 ÷ 2 ＝ 3√3  ✓', C.green, FILL.green, 15), tx(206, 'OA を底辺にしても同じ面積', 12)]),
  },
  {
    note: '答え：面積 3√3、AB＝√13。よくあるまちがいは 30°・60°・90° の比の対応を取りちがえること。いちばん短い辺（30°の向かい）が 1、斜辺が 2、60°の向かいの辺が √3 です。',
    add: F([eb(12, '面積 ＝ 3√3', C.green, FILL.green, 17, 34), eb(58, 'AB ＝ √13', C.green, FILL.green, 17, 34)], [tx(130, '確かめ：別の底辺で 3×2√3÷2 ＝ 3√3  ✓', 13, C.blue, true), tx(166, '30°の向かい ＝ 1、斜辺 ＝ 2、', 12, C.red, true), tx(186, '60°の向かい ＝ √3', 12, C.red, true)]),
  },
]);

export const figuresSchoolKoko03: Record<string, Figure> = {
  'koko_sansu_ex_05_038': sphere,
  'koko_sansu_ex_09_018': pyramid,
  'koko_sansu_ex_09_028': oab,
  'koko_sansu_ex_06_007': boxplot,
  'koko_sansu_ex_06_034': section,
  'koko_sansu_ex_06_046': hex,
  'koko_sansu_ex_06_044': tangent,
  'koko_sansu_ex_08_033': tri60,
};
