// 入試傾向問題（関関同立附属 算数・理科）の動く図解スライド。キーは問題 id。
// 画面の上半分に図、下の帯（band）にそのスライドの式やひとこと。各スライドは「❓なぜ？→答え」の連鎖で書く。
import type { Figure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, show, band, fresh } from './diagram-kit';
import type { DiagramElement } from './figures';

type El = DiagramElement;

// ═════════ てこ（重さ × きょり） ═════════
type W = [number, number]; // [おもり(g), 支点からのきょり(cm)]

function lever(left: W[], right: { w?: number; d?: number }, scale: number): Figure {
  const sorted = [...left].sort((a, b) => a[1] - b[1]);
  const L = sorted.reduce((s, [w, d]) => s + w * d, 0);
  const unkW = right.w === undefined;
  const known = unkW ? (right.d as number) : (right.w as number);
  const ans = L / known;
  const rd = unkW ? (right.d as number) : ans;
  const rx = 160 + rd * scale;
  const unit = unkW ? 'g' : 'cm';
  const hang = (x: number, text: string, color: string, fill: string): El[] => [ln(x, 80, x, 96, C.gray), bx(x - 18, 96, 36, 22, text, color, fill, 11)];
  const dim = (x: number, y: number, text: string, color: string): El[] => [ar(160, y, x, y, color), lb((160 + x) / 2, y - 5, text, 10, color, 'middle')];
  const base: El[] = [ln(20, 80, 300, 80, C.ink, false, 4), pg([[160, 82], [149, 108], [171, 108]], C.gray, FILL.gray), lb(160, 122, '支点', 10, C.gray, 'middle')];
  const leftEls = (color: string, fill: string): El[] => sorted.flatMap(([w, d]) => hang(160 - d * scale, `${w}g`, color, fill));
  const leftDims = (color: string): El[] => sorted.flatMap(([, d], i) => dim(160 - d * scale, 136 + i * 11, `${d}cm`, color));
  const rightBox = (color: string, fill: string): El[] => hang(rx, unkW ? '□g' : `${right.w}g`, color, fill);
  const rightDim = (color: string): El[] => dim(rx, 136, unkW ? `${right.d}cm` : '□cm', color);
  const desc = sorted.map(([w, d]) => `支点から${d}cmに${w}g`).join('と、');
  const rdesc = unkW ? `支点から${right.d}cmに□g` : `支点から□cmに${right.w}g`;
  const multi = sorted.length > 1;
  const prodText = sorted.map(([w, d]) => `${w}×${d}＝${w * d}`);
  const rightExpr = unkW ? `□ × ${right.d}` : `${right.w} × □`;
  const ansText = `${ans}${unit}`;
  const rightNow = unkW ? `${ans} × ${right.d}` : `${right.w} × ${ans}`;
  const rightProd = unkW ? ans * (right.d as number) : (right.w as number) * ans;

  return show(
    [
      {
        note: `棒の中央が支点（してん）のてこを、つり合わせます。左は${desc}、右は${rdesc}です。❓つり合うには、□をいくつにすればよいでしょう。`,
        add: [...base, ...leftEls(C.main, FILL.warm), ...rightBox(C.blue, FILL.blue), ...leftDims(C.blue), ...rightDim(C.blue), ...band(150, lb(160, 185, unkW ? '右につるすおもり □g は？' : '右につるす場所 □cm は？', 14, C.ink, 'middle', true))],
      },
      {
        note: '❓なぜ、おもりの重さだけでは決まらないの？→同じ重さでも、支点から遠い所につるすほど、棒を大きく回そうとするからです。（ドアのとってを、じくから遠くで押すほど軽く開くのと同じです。）',
        add: [...sorted.map(([, d]) => ln(160, 76, 160 - d * scale, 76, C.red, false, 3)), ln(160, 76, rx, 76, C.red, false, 3), ...band(150, lb(160, 172, '遠いほど、回す力は大きい', 12, C.red, 'middle', true), bx(30, 186, 260, 34, '回す力 ＝ おもりの重さ × 支点からのきょり', C.main, FILL.warm, 12))],
      },
      {
        note: multi
          ? `❓左の回す力は、いくつ？→左には2つのおもりがあります。1つずつ「重さ×きょり」を出すと、${prodText[0]}と${prodText[1]}です。❓なぜ足すの？→どちらも棒を左に回すので、回す力は足し算になるからです。合計は${L}です。`
          : `❓左が棒を回す力は、いくつ？→「重さ×きょり」で出します。${prodText[0]}で、回す力は${L}です。`,
        add: multi
          ? band(150, lb(160, 170, prodText[0], 13, C.blue, 'middle'), lb(160, 192, prodText[1], 13, C.blue, 'middle'), lb(160, 220, `${sorted[0][0] * sorted[0][1]}＋${sorted[1][0] * sorted[1][1]}＝${L}`, 15, C.green, 'middle', true))
          : band(150, lb(160, 172, '左が棒を回す力', 12, C.blue, 'middle'), bx(60, 184, 200, 34, `${prodText[0].replace('＝', ' ＝ ').replace('×', ' × ')}`, C.green, FILL.green, 15)),
      },
      {
        note: `❓つり合うって、どういうこと？→棒が左にも右にも回らず、止まっている状態です。つまり、左に回す力と右に回す力が同じ大きさです。❓だから右の回す力は？→左と同じ${L}でなければいけません。`,
        add: band(150, lb(160, 172, '左に回す力 ＝ 右に回す力', 13, C.ink, 'middle', true), bx(60, 184, 200, 34, `右の回す力も ${L}`, C.purple, FILL.purple, 14)),
      },
      {
        note: `❓右の回す力は、どう書ける？→右も「重さ×きょり」なので、${rightExpr} と書けます。❓これが${L}と等しい、ということです。`,
        add: band(150, bx(40, 166, 240, 34, `${rightExpr} ＝ ${L}`, C.blue, FILL.blue, 16), lb(160, 224, '右の回す力 ＝ 重さ × きょり', 11, C.gray, 'middle')),
      },
      {
        note: `❓□はどうやって出す？→「${rightExpr}＝${L}」は、かけ算の□を求める形です。❓かけ算をもどすには？→わり算を使います。${L}÷${known}で、□がわかります。`,
        add: band(150, lb(160, 170, 'かけ算をもどすには、わり算', 12, C.gray, 'middle'), bx(40, 182, 240, 36, `${L} ÷ ${known} ＝ ${ans}`, C.green, FILL.green, 17)),
      },
      {
        note: `答えは${ansText}です。${unkW ? `右の${right.d}cmの所に${ans}gのおもりをつるします。` : `右の${ans}cmの所に${right.w}gのおもりをつるします。`}`,
        add: [...cover0(), ...base, ...leftEls(C.main, FILL.warm), ...hang(rx, unkW ? `${ans}g` : `${right.w}g`, C.green, FILL.green), ...leftDims(C.blue), ...dim(rx, 136, unkW ? `${right.d}cm` : `${ans}cm`, C.green), ...band(150, bx(70, 172, 180, 40, `答え  ${ansText}`, C.green, FILL.green, 18))],
      },
      {
        note: `❓本当につり合う？→右の回す力を計算し直します。${rightNow}＝${rightProd}で、左の${L}と同じです。回す力が左右で等しいので、つり合います。`,
        add: band(150, lb(160, 172, `右：${rightNow} ＝ ${rightProd}`, 14, C.green, 'middle', true), lb(160, 196, `左：${multi ? sorted.map(([w, d]) => w * d).join('＋') : prodText[0].split('＝')[0]} ＝ ${L}`, 14, C.blue, 'middle', true), lb(160, 222, '左右の回す力が同じ → つり合う', 12, C.ink, 'middle')),
      },
    ],
    'てこは「重さ×きょり」が左右で等しいとつり合う',
  );
}
function cover0(): El[] {
  return fresh();
}

// ═════════ ばね ═════════
const zig = (x: number, y0: number, len: number, color: string = C.gray): El[] => {
  const n = 7;
  const pts: [number, number][] = [[x, y0], [x, y0 + 5]];
  for (let i = 0; i < n; i++) pts.push([x + (i % 2 === 0 ? -8 : 8), y0 + 5 + ((len - 10) * (i + 0.5)) / n]);
  pts.push([x, y0 + len - 5], [x, y0 + len]);
  return pts.slice(1).map((p, i) => ln(pts[i][0], pts[i][1], p[0], p[1], color, false, 2));
};
const ceil = (x: number): El => ln(x - 16, 10, x + 16, 10, C.ink, false, 4);
const hangW = (x: number, y: number, text: string, color: string = C.main, fill: string = FILL.warm): El[] => [ln(x, y, x, y + 6, C.gray), bx(x - 20, y + 6, 40, 22, text, color, fill, 11)];
const extMark = (x: number, yTop: number, ext: number, k: number, color: string = C.red): El[] => [
  ln(x + 12, yTop, x + 26, yTop, C.gray, true),
  ar(x + 26, yTop, x + 26, yTop + ext * k, color),
  lb(x + 31, yTop + (ext * k) / 2 + 4, `のび${ext}cm`, 10, color, 'start'),
];
const springW = (x: number, ext: number, text: string, marks = true): El[] => {
  const nat = 36, k = 4, len = nat + ext * k;
  return [ceil(x), ...zig(x, 10, len), ...hangW(x, 10 + len, text), ...(marks ? extMark(x, 10 + nat, ext, k) : [])];
};

const spring7: Figure = show(
  [
    {
      note: 'あるばねに10gのおもりをつるすと、2cmのびました。❓35gのおもりをつるすと、何cmのびるでしょう。',
      add: [...springW(160, 2, '10g'), ...band(150, lb(160, 180, '10gで2cm → 35gでは？', 14, C.ink, 'middle', true))],
    },
    {
      note: '❓おもりを重くすると、のびはどうなる？→重いほど、ばねを引く力が大きくなるので、のびも大きくなります。20gなら4cm、30gなら6cmで、のびは重さに比例（ひれい）します。',
      add: [...fresh(), ...springW(56, 2, '10g'), ...springW(146, 4, '20g'), ...springW(230, 6, '30g'), ...band(150, lb(160, 175, '重さが2倍、3倍 → のびも2倍、3倍', 12, C.blue, 'middle', true))],
    },
    {
      note: '❓なぜ「比例」と言えるの？→10gふえるごとに、のびが同じ2cmずつふえているからです。おもり1つぶん（10g）につき、いつも2cmのびるということです。',
      add: band(150, bx(30, 166, 260, 34, '10gふえるごとに、2cmずつのびる', C.blue, FILL.blue, 13), lb(160, 222, '10g→2cm　20g→4cm　30g→6cm', 11, C.gray, 'middle')),
    },
    {
      note: '❓では、1gあたりは何cmのびる？→10gで2cmなので、2÷10＝0.2cmです。❓なぜわり算？→10gぶんののびを10等分すると、1gぶんののびになるからです。',
      add: band(150, lb(160, 170, '2cm を 10等分すると', 12, C.gray, 'middle'), bx(40, 182, 240, 36, '1gあたり 2÷10 ＝ 0.2cm', C.green, FILL.green, 16)),
    },
    {
      note: '❓35gでは？→1gが35こぶんなので、0.2×35＝7cmです。❓別の見方は？→35gは10gの3.5倍なので、2×3.5＝7cmとも出せます。',
      add: band(150, bx(30, 164, 260, 30, '0.2 × 35 ＝ 7cm', C.green, FILL.green, 15), bx(30, 200, 260, 30, '2 × 3.5 ＝ 7cm（10gの3.5倍）', C.purple, FILL.purple, 13)),
    },
    {
      note: '答えは7cmです。35gのおもりをつるすと、ばねは7cmのびます。',
      add: [...fresh(), ...springW(160, 7, '35g'), ...band(150, bx(70, 172, 180, 40, '答え  7cm', C.green, FILL.green, 18))],
    },
    {
      note: '❓本当に合っている？→30gで6cm、のこりの5gは10gの半分なので1cm。6＋1＝7cmで、ちがう方法でも同じになります。',
      add: band(150, lb(160, 172, '30gで6cm ＋ 5gで1cm', 14, C.blue, 'middle', true), lb(160, 198, '6 ＋ 1 ＝ 7cm（一致）', 15, C.green, 'middle', true), lb(160, 224, '重さの差の25gだけで考えるのはまちがい', 10, C.red, 'middle')),
    },
  ],
  'ばねののびは、おもりの重さに比例する',
);

// 直列ばね
const sp2 = (x: number, y0: number): El[] => [...zig(x, y0, 42)];
const springSeries: Figure = show(
  [
    {
      note: '10gで2cmのびる同じばねがあります。1本のばねに20gをつるす場合と、2本をまっすぐつないで（直列（ちょくれつ））20gをつるす場合を比べます。ばねの重さは考えません。',
      add: [ceil(70), ...zig(70, 10, 42), ...hangW(70, 52, '20g'), ceil(230), ...sp2(230, 10), ...sp2(230, 52), ...hangW(230, 94, '20g'), lb(70, 100, '1本', 11, C.ink, 'middle', true), lb(230, 134, '2本を直列', 11, C.ink, 'middle', true), ...band(150, lb(160, 185, 'それぞれ、のびは何cm？', 14, C.ink, 'middle', true))],
    },
    {
      note: '❓まず1本のときは？→10gで2cmのびるので、20gは10gの2倍。のびも2倍の4cmです。（のびは重さに比例）',
      add: [...extMark(70, 40, 4, 3), ...band(150, bx(40, 170, 240, 34, '20g → 2×2 ＝ 4cm', C.blue, FILL.blue, 15))],
    },
    {
      note: '❓直列の上のばねには、何gかかっている？→上のばねは、下のばねとおもりをぶらさげています。ばねの重さは考えないので、おもり20gの全部がかかります。',
      add: [lb(214, 35, '20g', 11, C.red, 'end', true), ar(222, 38, 222, 26, C.red), ...band(150, lb(160, 175, '上のばねにかかる力は 20g', 13, C.red, 'middle', true))],
    },
    {
      note: '❓では、下のばねには？→下のばねは、おもり20gをじかにささえています。だから下のばねにも20gがかかります。',
      add: [lb(214, 77, '20g', 11, C.red, 'end', true), ar(222, 80, 222, 68, C.red), ...band(150, lb(160, 175, '下のばねにかかる力も 20g', 13, C.red, 'middle', true))],
    },
    {
      note: '❓どちらも20gなら、何cmのびる？→2本とも、20gのばね1本のときと同じ4cmのびます。',
      add: [...extMark(230, 40, 4, 3), ...extMark(230, 82, 4, 3), ...band(150, bx(40, 170, 240, 34, '1本ずつ、どちらも 4cm のび', C.blue, FILL.blue, 14))],
    },
    {
      note: '❓全体ののびは？→上ののび4cmと下ののび4cmが、つながっているので足して、4＋4＝8cmです。❓おもりの重さを2本で半分ずつ分けるの？→いいえ。直列では、どちらのばねにもおもり全部の重さがかかります。',
      add: band(150, bx(30, 164, 260, 32, '4 ＋ 4 ＝ 8cm', C.green, FILL.green, 16), lb(160, 220, '重さは分けない（どちらにも20gぜんぶ）', 11, C.red, 'middle', true)),
    },
    {
      note: '答えは「1本のとき4cm、直列のとき8cm」です。❓検算：直列の2本は、10gで4cmのびるばねと同じ（のびやすさが2倍）です。20gはその2倍なので、4×2＝8cmで一致します。',
      add: band(150, bx(40, 160, 240, 34, '答え  1本4cm、直列8cm', C.green, FILL.green, 15), lb(160, 222, '検算：10gで4cm → 20gで 4×2＝8cm（一致）', 11, C.blue, 'middle')),
    },
  ],
  '直列のばねは、どちらにも全部の重さがかかり、のびは足し算',
);

// ═════════ 回路（電流は「電池○個ぶん」「流れにくさ」で説明） ═════════
const wr = (x1: number, y1: number, x2: number, y2: number, color: string = C.ink): El => ln(x1, y1, x2, y2, color, false, 2);
const bulb = (cx: number, cy: number, color: string = C.main, fill: string = FILL.yellow): El => ci(cx, cy, 12, '豆', color, fill, 10);
const batt = (cx: number, cy: number): El => bx(cx - 12, cy - 15, 24, 30, '電池', C.blue, FILL.blue, 9);
const loopSeries = (x0: number, n: number): El[] => [
  wr(x0, 25, x0 + 120, 25), wr(x0 + 120, 25, x0 + 120, 110), wr(x0 + 120, 110, x0, 110), wr(x0, 25, x0, 110),
  ...(n === 1 ? [bulb(x0 + 60, 25)] : [bulb(x0 + 40, 25), bulb(x0 + 80, 25)]),
  batt(x0, 68),
];
const loopPar = (x0: number): El[] => [
  wr(x0, 25, x0 + 110, 25), wr(x0, 110, x0 + 110, 110), wr(x0, 25, x0, 110), wr(x0 + 55, 25, x0 + 55, 110), wr(x0 + 110, 25, x0 + 110, 110),
  bulb(x0 + 55, 68), bulb(x0 + 110, 68), batt(x0, 68),
];

function seriesFig(unit: 'A' | 'q'): Figure {
  const base = unit === 'A' ? '0.3A' : '①';
  const half = unit === 'A' ? '0.15A' : '½（①÷2）';
  return show(
    [
      {
        note: `かん電池1個に豆電球（まめでんきゅう）1個の回路（かいろ）では、電流が${unit === 'A' ? '0.3A' : '①'}です。同じ電池1個に、豆電球をもう1個直列（ちょくれつ）につなぎ足すと、電流はどうなるでしょう。`,
        add: [...loopSeries(20, 1), ...loopSeries(180, 2), lb(80, 134, `豆電球1個：${base}`, 10, C.ink, 'middle', true), lb(240, 134, '直列に2個：□', 10, C.ink, 'middle', true), ...band(150, lb(160, 185, '電流は、大きくなる？ 小さくなる？', 14, C.ink, 'middle', true))],
      },
      {
        note: '❓そもそも電流とは？→電気の流れのことです。水の流れにたとえると、電池は水をおし出すポンプ、豆電球は水の通りにくい細い所です。',
        add: band(150, bx(20, 164, 280, 28, '電池＝水をおし出す力　豆電球＝流れにくい所', C.blue, FILL.blue, 11), lb(160, 222, '電流の大きさ ＝ 電池の力 ÷ 流れにくさ', 12, C.ink, 'middle', true)),
      },
      {
        note: '❓豆電球を1個ふやすと？→直列は道が1本だけなので、電気は2つの豆電球を両方とも通らなければなりません。流れにくい所が2つ続くので、流れにくさは2倍になります。',
        add: [bulb(220, 25, C.red, FILL.red), bulb(260, 25, C.red, FILL.red), ...band(150, bx(30, 166, 260, 34, '流れにくい所が2つ → 流れにくさ2倍', C.red, FILL.red, 13))],
      },
      {
        note: '❓電池の力は変わる？→電池は同じ1個のままなので、電気をおし出す力は変わりません。',
        add: [batt(180, 68), ...band(150, bx(30, 166, 260, 34, '電池の力は同じ（電池1個ぶん）', C.blue, FILL.blue, 13))],
      },
      {
        note: `❓おし出す力が同じで、流れにくさが2倍になると？→流れる量は半分になります。電池1個ぶんを${base}とすると、1個のときは÷1で${base}、2個のときは÷2で${half}です。`,
        add: band(150, lb(160, 172, `1個：電池1個ぶん ÷ 流れにくさ1 ＝ ${base}`, 11, C.blue, 'middle'), lb(160, 196, `2個：電池1個ぶん ÷ 流れにくさ2 ＝ ${half}`, 11, C.red, 'middle', true), lb(160, 222, '流れにくいほど、電流は小さい', 12, C.ink, 'middle')),
      },
      {
        note: '❓豆電球の明るさは？→電流が小さくなったので、2個の豆電球はどちらも1個のときより暗くなります。（明るさの順は、電流の順です。）',
        add: band(150, bx(30, 166, 260, 34, '電流が小さい → 暗くなる', C.purple, FILL.purple, 14)),
      },
      {
        note: `答えは「小さくなる」（${half}）です。❓検算：もし電池も2個直列にすると、力が2倍・流れにくさも2倍で、電池2個ぶん÷2＝電池1個ぶんになり、電流は${base}のままです。流れにくさだけふやしたから小さくなった、と確かめられます。`,
        add: band(150, bx(50, 160, 220, 32, '答え  小さくなる', C.green, FILL.green, 16), lb(160, 214, '電池も2個にすれば、もとの大きさにもどる', 11, C.blue, 'middle')),
      },
    ],
    '直列は流れにくさが足し算になり、電流は小さくなる',
  );
}

const circuitParallelRemove: Figure = show(
  [
    {
      note: '同じ豆電球2個を、かん電池1個に並列（へいれつ）につないであります。❓このうち1個をはずすと、のこった豆電球の明るさはどうなるでしょう。',
      add: [...loopPar(100), ...band(150, lb(160, 185, '1個はずすと、のこりは？', 14, C.ink, 'middle', true))],
    },
    {
      note: '❓並列とは？→電池から出た電気の道が2本に分かれて、それぞれ別の豆電球を通ってもどるつなぎ方です。',
      add: [wr(155, 25, 155, 110, C.blue), wr(210, 25, 210, 110, C.blue), bulb(155, 68), bulb(210, 68), ...band(150, lb(160, 185, '道が2本（別々の道）', 13, C.blue, 'middle', true))],
    },
    {
      note: '❓左の豆電球を通る電気は、どの道を通る？→左の道だけです。右の道は通りません。豆電球の電気は、それぞれ自分の道の中だけで流れています。',
      add: [ar(155, 29, 155, 52, C.red), ...band(150, lb(160, 185, '左の豆電球は、左の道だけを使う', 13, C.red, 'middle', true))],
    },
    {
      note: '❓それぞれの豆電球にかかる電池の力は？→どちらの道も、電池の両はしに直接つながっています。だからどちらにも電池1個ぶんの力がそのままかかります。',
      add: band(150, lb(150, 172, '電池1個ぶん', 10, C.blue, 'end', true), lb(215, 172, '電池1個ぶん', 10, C.blue, 'start', true), bx(30, 184, 260, 32, 'どちらにも同じ力がかかる', C.blue, FILL.blue, 13)),
    },
    {
      note: '❓1個はずすと？→右の道が切れるので、右の豆電球には電気が流れず消えます。❓のこった左の豆電球は？→左の道は何も変わらず、かかる力も電池1個ぶんのままなので、電流も明るさも同じです。',
      add: [cover(), bulb(155, 68, C.green, FILL.green), lb(210, 128, 'はずした', 10, C.gray, 'middle'), ...band(150, bx(30, 166, 260, 34, 'のこった豆電球は、同じ明るさ', C.green, FILL.green, 14))],
    },
    {
      note: '答えは「変わらない」です。家の電灯も並列なので、1つ消しても、ほかの電灯は消えません。',
      add: band(150, bx(70, 160, 180, 34, '答え  変わらない', C.green, FILL.green, 16), lb(160, 222, 'たとえ：家の電灯（1つ消してもほかは消えない）', 11, C.gray, 'middle')),
    },
    {
      note: '❓もし直列だったら？→直列は道が1本なので、1個はずすと道が切れて、のこりも全部消えます。並列と直列で、はずしたときのようすがまったくちがうことが、確かめになります。',
      add: band(150, lb(160, 172, '直列：1個はずすと → 全部消える', 12, C.red, 'middle', true), lb(160, 198, '並列：1個はずしても → 変わらない', 12, C.green, 'middle', true)),
    },
  ],
  '並列は、豆電球ごとに別の道。はずしても、ほかは変わらない',
);
function cover(): El {
  return bx(196, 30, 28, 76, undefined, '#FFFFFF', '#FFFFFF');
}

const circuitBranch: Figure = (() => {
  const bA = bulb(100, 25);
  const rails: El[] = [wr(30, 25, 82, 25), wr(118, 25, 260, 25), wr(30, 110, 260, 110), wr(30, 25, 30, 110), wr(190, 25, 190, 110), wr(260, 25, 260, 110)];
  const body: El[] = [...rails, bA, bulb(190, 68), bulb(260, 68), batt(30, 68), lb(100, 8, 'A', 10, C.ink, 'middle', true), lb(205, 70, 'B', 11, C.ink, 'start', true), lb(275, 70, 'C', 11, C.ink, 'start', true)];
  return show(
    [
      {
        note: '同じ豆電球A・B・Cがあります。Aを電池につなぎ、B・Cは並列にしてAと直列につなぎます。❓AとB・Cの明るさを比べると、どうなるでしょう。',
        add: [...body, ...band(150, lb(160, 185, 'A と B・C、明るいのはどれ？', 14, C.ink, 'middle', true))],
      },
      {
        note: '❓明るさは何で決まる？→豆電球を流れる電流の大きさです。電流が大きいほど明るくなります。',
        add: band(150, bx(30, 166, 260, 34, '明るさの順 ＝ 電流の大きさの順', C.purple, FILL.purple, 13)),
      },
      {
        note: '❓Aを流れる電流は？→Aは電池から出た電気の通り道の途中にあり、道が1本です。だから電池から出た電気は、全部Aを通ります。この大きさを②とします。',
        add: [ar(60, 18, 78, 18, C.red), lb(100, 48, '②', 14, C.red, 'middle', true), ...band(150, bx(30, 166, 260, 34, 'Aには電流が全部 ＝ ②', C.red, FILL.red, 14))],
      },
      {
        note: '❓B・Cに流れる電流は？→Aを通った電気が、ここで2本の道に分かれます。B・Cは同じ豆電球で道のようすが同じなので、半分ずつ、①ずつ流れます。',
        add: [lb(215, 50, '①', 14, C.blue, 'start', true), lb(285, 50, '①', 14, C.blue, 'start', true), ar(190, 28, 190, 52, C.blue), ar(260, 28, 260, 52, C.blue), ...band(150, bx(30, 166, 260, 34, 'B・Cは ②を半分ずつ ＝ ①と①', C.blue, FILL.blue, 13))],
      },
      {
        note: '❓3つを見くらべると？→Aは②、BとCは①ずつです。Aがいちばん電流が大きく、BとCは同じです。',
        add: band(150, lb(160, 172, 'A ② ＞ B ① ＝ C ①', 16, C.ink, 'middle', true), lb(160, 204, '電流が大きい順に、明るい', 12, C.gray, 'middle')),
      },
      {
        note: '答えは「Aが最も明るく、B・Cはそれより暗く同じ明るさ」です。',
        add: band(150, bx(20, 162, 280, 40, 'A が最も明るい。B・C は同じで暗い', C.green, FILL.green, 13)),
      },
      {
        note: '❓検算：分かれた電流を合わせると、①＋①＝②で、Aを流れた②と同じです。入った電気の量と出る電気の量が等しいので、数が合っています。',
        add: band(150, bx(40, 162, 240, 34, 'B ① ＋ C ① ＝ ② ＝ A', C.green, FILL.green, 15), lb(160, 222, '入った量 ＝ 出る量（一致）', 11, C.gray, 'middle')),
      },
    ],
    '直列の所には全部の電流、並列の所にはその半分ずつ',
  );
})();

const circuitParallelDouble: Figure = show(
  [
    {
      note: '抵抗（ていこう）の等しい豆電球を1個つないだ回路と、2個を並列（へいれつ）につないだ回路を比べます。❓電池を流れる電流は、2個のときは1個のときの何倍でしょう。',
      add: [...loopSeries(20, 1), ...loopPar(175), lb(80, 134, '豆電球1個', 10, C.ink, 'middle', true), lb(230, 134, '2個を並列', 10, C.ink, 'middle', true), ...band(150, lb(160, 185, '電池を流れる電流は、何倍？', 14, C.ink, 'middle', true))],
    },
    {
      note: '❓1個のときの電流を①とします。並列の豆電球1個には、どれだけ流れる？→どの道も、電池につながる両はしが同じなので、電池1個ぶんの力がそのままかかり、1個のときと同じ①が流れます。',
      add: [lb(80, 50, '①', 14, C.red, 'middle', true), lb(236, 46, '①', 14, C.red, 'start', true), lb(291, 46, '①', 14, C.red, 'start', true), ...band(150, bx(30, 166, 260, 34, '並列は1個ずつが、どれも ①', C.blue, FILL.blue, 14))],
    },
    {
      note: '❓電池からは、どれだけ出ていく？→電池から出た電気が2本の道に分かれるので、出ていく量は、分かれた量の合計です。①＋①＝②になります。',
      add: band(150, bx(30, 164, 260, 32, '電池から出る量 ＝ ① ＋ ① ＝ ②', C.green, FILL.green, 14), lb(160, 222, '水路の本流が、2本の小川に分かれるのと同じ', 10, C.gray, 'middle')),
    },
    {
      note: '❓別の見方では？→道が2本になると、電気の通り道が広がって、流れにくさは半分になります。電池1個ぶん÷（半分）＝2倍の電流、と考えても同じです。',
      add: band(150, lb(160, 172, '道が2本 → 流れにくさ ½', 13, C.blue, 'middle', true), lb(160, 200, '1 ÷ ½ ＝ 2（倍）', 15, C.green, 'middle', true)),
    },
    {
      note: '答えは2倍です。',
      add: band(150, bx(70, 162, 180, 38, '答え  2倍', C.green, FILL.green, 18)),
    },
    {
      note: '❓では、豆電球1個ずつの明るさは？→1個ずつの電流は①のまま同じなので、明るさは1個のときと変わりません。変わるのは、電池から出る電流が②になる（電池の減りが早くなる）ことです。',
      add: band(150, lb(160, 172, '豆電球1個ずつ：明るさは同じ', 12, C.blue, 'middle', true), lb(160, 200, '電池：電流が2倍 → 減りが早い', 12, C.red, 'middle', true)),
    },
    {
      note: '❓検算：「電池を流れる電流が変わらない」と考えたらどうなる？→道が1本ふえたのに全体の流れが同じだとすると、豆電球が1個ずつ暗くなってしまい、「どの道も①」という事実と合いません。だから2倍で正しいです。',
      add: band(150, bx(30, 164, 260, 32, '① ＋ ① ＝ ②（1個のときの2倍）', C.green, FILL.green, 14)),
    },
  ],
  '並列は道がふえるので、電池から出る電流は2倍',
);

const circuitCompare: Figure = show(
  [
    {
      note: 'まったく同じ豆電球2個を、直列（ちょくれつ）につないだ回路と、並列（へいれつ）につないだ回路があります。電池は同じ1個です。❓豆電球1個あたりの明るさは、どちらが明るいでしょう。',
      add: [...loopSeries(20, 2), ...loopPar(180), lb(80, 134, '直列', 11, C.ink, 'middle', true), lb(235, 134, '並列', 11, C.ink, 'middle', true), ...band(150, lb(160, 185, '1個あたり、明るいのはどっち？', 14, C.ink, 'middle', true))],
    },
    {
      note: '❓明るさは何で決まる？→豆電球を流れる電流の大きさです。電流が大きいほど明るいので、電流を比べます。',
      add: band(150, bx(30, 166, 260, 34, '明るさの順 ＝ 電流の順', C.purple, FILL.purple, 14)),
    },
    {
      note: '❓並列の豆電球には、どれだけ電流が流れる？→どの道も電池の両はしにつながっているので、電池1個ぶんの力がそのままかかり、電流は①です。',
      add: [lb(241, 46, '①', 14, C.red, 'start', true), lb(296, 46, '①', 14, C.red, 'start', true), ...band(150, bx(30, 166, 260, 34, '並列：電池1個ぶんがそのまま ＝ ①', C.blue, FILL.blue, 13))],
    },
    {
      note: '❓直列では？→電池1個ぶんの力を、2個の豆電球で分け合うことになり、流れにくさは2倍です。電流は、電池1個ぶん÷2＝①÷2＝½になります。',
      add: [lb(80, 52, '½', 14, C.red, 'middle', true), ...band(150, bx(30, 164, 260, 32, '直列：流れにくさ2倍 ＝ ①÷2 ＝ ½', C.red, FILL.red, 13), lb(160, 222, '直列は1本道なので、どこでも同じ ½', 11, C.gray, 'middle'))],
    },
    {
      note: '❓「直列のほうが電流が集中して明るい」のでは？→直列は1本道なので、電流の量はどこでも同じ½です。集中するわけではなく、むしろ流れにくくなって小さくなります。',
      add: band(150, lb(160, 172, '直列：電流が集中する → まちがい', 12, C.red, 'middle', true), lb(160, 198, '流れにくさが2倍で、小さくなる', 12, C.gray, 'middle')),
    },
    {
      note: '❓2つを比べると？→並列は①、直列は½で、並列のほうが電流が大きいので、並列のほうが明るくなります。',
      add: band(150, lb(160, 175, '並列 ① ＞ 直列 ½', 16, C.ink, 'middle', true), bx(70, 190, 180, 32, '答え  並列のほう', C.green, FILL.green, 15)),
    },
    {
      note: '❓検算：前の問題のとおり、豆電球を直列にふやすと電流は小さくなります（暗くなる）。並列は豆電球1個のときと同じ電流なので、直列より明るい、という結論と合っています。',
      add: band(150, lb(160, 172, '並列＝豆電球1個のときと同じ明るさ', 12, C.blue, 'middle', true), lb(160, 198, '直列＝それより暗い', 12, C.red, 'middle', true), lb(160, 224, 'だから「並列のほうが明るい」', 12, C.green, 'middle', true)),
    },
  ],
  '並列は電池の力がそのまま、直列は分け合う',
);

// ═════════ 浮力 ═════════
const tank = (): El[] => [bx(50, 34, 220, 100, undefined, C.blue, FILL.blue), lb(60, 28, '水', 10, C.blue, 'start')];
const cubeAt = (y: number, text: string, color: string = C.main, fill: string = FILL.warm): El => bx(140, y, 40, 36, text, color, fill, 11);

function buoyFig(vol: number, wt: number, mode: 'sink' | 'string'): Figure {
  const sink = mode === 'sink';
  const cy = sink ? 94 : 62;
  const up = vol; // 浮力(g)
  const scene: El[] = [...tank(), ...(sink ? [] : [ln(160, cy, 160, 10, C.gray, false, 2), lb(166, 18, '糸', 10, C.gray, 'start')]), cubeAt(cy, `${wt}g`), lb(190, cy + 22, `体積${vol}cm³`, 10, C.ink, 'start', true)];
  const barW = (g: number) => g * 1.5;
  return show(
    [
      {
        note: `体積${vol}cm³、重さ${wt}gの物体を、${sink ? '水の中に入れると、全部沈んで水そうの底に止まりました' : '糸でおさえて水の中に完全に沈めました'}。水1cm³の重さは1gです。❓物体にはたらく浮力（ふりょく）は何gでしょう。`,
        add: [...scene, ...band(150, lb(160, 185, '浮力は何g？', 15, C.ink, 'middle', true))],
      },
      {
        note: '❓そもそも浮力とは？→水の中の物を、水が上におし返す力です。プールで手を水に沈めると、上におし上げられる感じがするのと同じです。',
        add: [ar(150, cy, 150, cy - 28, C.blue), lb(144, cy - 8, '浮力', 11, C.blue, 'end', true), ...band(150, bx(30, 166, 260, 34, '浮力 ＝ 水が物を上におし返す力', C.blue, FILL.blue, 13))],
      },
      {
        note: '❓浮力の大きさは、何で決まる？→物を水に入れると、その物の場所にあった水がおしのけられます。浮力は、このおしのけた水の重さと同じ大きさです（アルキメデスの原理（げんり））。',
        add: band(150, bx(20, 164, 280, 34, '浮力 ＝ おしのけた水の重さ', C.purple, FILL.purple, 15), lb(160, 222, '物の重さではなく、水の重さ', 11, C.gray, 'middle')),
      },
      {
        note: `❓おしのけた水の体積は？→物体は全部沈んでいるので、物体と同じ体積の水がおしのけられます。つまり${vol}cm³です。`,
        add: band(150, bx(30, 166, 260, 34, `おしのけた水の体積 ＝ ${vol}cm³`, C.blue, FILL.blue, 14), lb(160, 222, '全部沈んでいる ＝ 物体の体積と同じ', 11, C.gray, 'middle')),
      },
      {
        note: `❓その水の重さは？→水1cm³は1gなので、${vol}cm³の水は${vol}×1＝${vol}gです。これが浮力の大きさです。`,
        add: band(150, bx(30, 166, 260, 34, `${vol} × 1 ＝ ${vol}g`, C.green, FILL.green, 17), lb(160, 222, 'おしのけた水の重さ ＝ 浮力', 10, C.gray, 'middle')),
      },
      {
        note: sink
          ? `❓物体の重さ${wt}gは、浮力に関係する？→浮力の大きさには関係しません。${wt}gは下向きの力で、浮力${up}gは上向きの力です。下向きのほうが${wt - up}g大きいので、のこりの${wt - up}gを水そうの底がささえています。`
          : `❓物体の重さ${wt}gは、浮力に関係する？→浮力の大きさには関係しません。${wt}gは下向きの力、浮力${up}gは上向きの力で、上向きのほうが${up - wt}g大きいので、物体は浮き上がろうとします。それを糸が${up - wt}gの力で引きとめています。`,
        add: [
          ...fresh(),
          lb(160, 20, '上向きと下向きの力くらべ', 12, C.ink, 'middle', true),
          bx(20, 34, barW(up), 26, `上：浮力 ${up}g`, C.blue, FILL.blue, 11),
          bx(20, 74, barW(wt), 26, `下：重さ ${wt}g`, C.red, FILL.red, 11),
          ...(sink
            ? [bx(20 + barW(up), 34, barW(wt - up), 26, undefined, C.gray, FILL.gray), lb(20, 120, `のこり${wt - up}gは底がささえる`, 11, C.gray, 'start', true)]
            : [bx(20 + barW(wt), 74, barW(up - wt), 26, undefined, C.gray, FILL.gray), lb(20, 120, `あと${up - wt}gは糸が下に引く`, 11, C.gray, 'start', true)]),
        ],
      },
      {
        note: sink
          ? `答えは${up}gです。❓検算：上向き${up}g＋底のささえ${wt - up}g＝${wt}gで、下向きの重さ${wt}gとつり合っています。`
          : `答えは${up}gです。❓検算：下向きの重さ${wt}g＋糸の引く力${up - wt}g＝${up}gで、上向きの浮力${up}gとつり合っています。`,
        add: band(150, bx(70, 162, 180, 34, `答え  ${up}g`, C.green, FILL.green, 18), lb(160, 222, sink ? `${up} ＋ ${wt - up} ＝ ${wt}（つり合う）` : `${wt} ＋ ${up - wt} ＝ ${up}（つり合う）`, 12, C.blue, 'middle', true)),
      },
    ],
    '浮力は、おしのけた水の重さ',
  );
}

const buoySinkOrFloat: Figure = show(
  [
    {
      note: '体積50cm³、重さ60gの物体を、静かに水に入れます。水1cm³の重さは1gです。❓この物体は、浮く？ 沈む？',
      add: [...tank(), cubeAt(40, '60g'), lb(160, 90, '体積50cm³', 10, C.ink, 'middle', true), ...band(150, lb(160, 185, '浮く？ 沈む？', 15, C.ink, 'middle', true))],
    },
    {
      note: '❓浮くか沈むかは、何で決まる？→下向きの「物体の重さ」と、上向きの「浮力」の勝負で決まります。下向きが大きければ沈み、上向きが大きければ浮きます。',
      add: [ar(120, 84, 120, 46, C.blue), lb(114, 66, '浮力（上）', 10, C.blue, 'end', true), ar(252, 46, 252, 84, C.red), lb(246, 66, '重さ（下）', 10, C.red, 'end', true), ...band(150, bx(30, 166, 260, 34, '下向き（重さ）と上向き（浮力）の勝負', C.purple, FILL.purple, 12))],
    },
    {
      note: '❓浮力は、いくつ？→物体が全部沈んだときにおしのける水の体積は、物体と同じ50cm³です。水1cm³は1gなので、浮力は50×1＝50gです。',
      add: band(150, bx(30, 166, 260, 34, '浮力 ＝ 50cm³ × 1g ＝ 50g', C.blue, FILL.blue, 15), lb(160, 222, '浮力 ＝ おしのけた水の重さ', 11, C.gray, 'middle')),
    },
    {
      note: '❓重さは？→物体の重さは60gで、これが下向きの力です。',
      add: band(150, bx(30, 166, 260, 34, '重さ ＝ 60g（下向き）', C.red, FILL.red, 15)),
    },
    {
      note: '❓くらべると？→下向き60gが、上向き50gより大きいので、浮力だけではささえきれません。',
      add: [...fresh(), bx(20, 30, 50 * 2.4, 28, '上向き 浮力 50g', C.blue, FILL.blue, 12), bx(20, 74, 60 * 2.4, 28, '下向き 重さ 60g', C.red, FILL.red, 12), lb(160, 130, '60 ＞ 50', 16, C.ink, 'middle', true)],
    },
    {
      note: '答えは「沈む」です。',
      add: band(150, bx(70, 162, 180, 38, '答え  沈む', C.green, FILL.green, 18)),
    },
    {
      note: '❓別の見方で確かめよう。→水50cm³の重さは50gなのに、この物体は同じ50cm³で60gあり、水より重い物です。水より重い物は沈みます。もし重さが40gなら、水より軽いので浮きます。',
      add: band(150, lb(160, 172, '同じ50cm³で　水50g ＜ 物体60g', 12, C.red, 'middle', true), lb(160, 198, '水より重い → 沈む', 13, C.green, 'middle', true), lb(160, 224, '（40gなら水より軽いので浮く）', 11, C.gray, 'middle')),
    },
  ],
  '物体の重さと、同じ体積の水の重さをくらべる',
);

// ═════════ 滑車（かっしゃ） ═════════
const pulleyRope = (color: string = C.ink): El[] => [
  ln(108, 10, 108, 100, color, false, 2),
  ln(108, 100, 114, 112, color, false, 2), ln(114, 112, 126, 112, color, false, 2), ln(126, 112, 132, 100, color, false, 2),
  ln(132, 100, 132, 34, color, false, 2),
  ln(132, 34, 138, 22, color, false, 2), ln(138, 22, 150, 22, color, false, 2), ln(150, 22, 156, 34, color, false, 2),
  ln(156, 34, 156, 130, color, false, 2),
];
const pulleyBase = (): El[] => [ln(96, 10, 170, 10, C.ink, false, 4), ci(144, 34, 12, undefined, C.gray, FILL.gray), ci(120, 100, 12, undefined, C.gray, FILL.gray), ln(120, 112, 120, 120, C.gray, false, 2), bx(96, 120, 48, 24, '60N', C.main, FILL.warm, 12), lb(164, 28, '定滑車', 10, C.gray, 'start'), lb(100, 104, '動滑車', 10, C.gray, 'end')];
const pulley: Figure = show(
  [
    {
      note: '定滑車（ていかっしゃ）1個と動滑車（どうかっしゃ）1個を組み合わせて、60Nの物体をゆっくり引き上げます。滑車やひもの重さ、まさつは考えません。❓ひもを引く力は何Nでしょう。',
      add: [...pulleyBase(), ...pulleyRope(), ar(156, 130, 156, 146, C.red), lb(166, 140, '□N', 12, C.red, 'start', true), ...band(150, lb(160, 185, 'ひもを引く力 □N は？', 14, C.ink, 'middle', true))],
    },
    {
      note: '❓上の定滑車は、何をしている？→ひもの向きを変えているだけです。引く力の大きさは変わりません。（下に引いたものを、上向きの力に変えるだけです。）',
      add: [ci(144, 34, 12, undefined, C.purple, FILL.purple), ...band(150, bx(20, 164, 280, 34, '定滑車：向きを変えるだけ（力は同じ）', C.purple, FILL.purple, 13))],
    },
    {
      note: '❓動滑車では、物体を何本のひもで支えている？→動滑車の左と右に、ひもが1本ずつかかっています。赤い2本のひもで、物体を支えています。',
      add: [ln(108, 12, 108, 100, C.red, false, 3), ln(132, 100, 132, 36, C.red, false, 3), ...band(150, bx(30, 166, 260, 34, '物体を支えるひもは 2本', C.red, FILL.red, 15))],
    },
    {
      note: '❓2本で支えると、1本あたりの力は？→60Nの重さを2本で分けて支えるので、1本あたり60÷2＝30Nです。',
      add: band(150, bx(30, 164, 260, 34, '60 ÷ 2 ＝ 30N（1本あたり）', C.green, FILL.green, 16), lb(160, 222, '2本で同じ力ずつ分けて支える', 11, C.gray, 'middle')),
    },
    {
      note: '❓手で引く力は、どうなる？→1本のひもは、どこでも同じ力です（まさつなし）。手で引いているひもも、同じひもなので、手で引く力は、ひも1本の力＝30Nです。',
      add: [ar(156, 130, 156, 146, C.green), ...band(150, bx(30, 166, 260, 34, '手で引く力 ＝ ひも1本の力 ＝ 30N', C.green, FILL.green, 13))],
    },
    {
      note: '答えは30Nです。',
      add: band(150, bx(70, 162, 180, 38, '答え  30N', C.green, FILL.green, 18)),
    },
    {
      note: '❓その代わりに、何がふえる？→物体を1m上げるには、支えている2本のひもが、どちらも1mずつ短くなる必要があるので、手でひもを2m引きます。力が半分の代わりに、引く長さは2倍です。',
      add: band(150, lb(160, 172, '力は半分、引く長さは2倍', 13, C.blue, 'middle', true), lb(160, 200, '30 × 2 ＝ 60 × 1（力×長さは同じ）', 12, C.green, 'middle', true), lb(160, 224, '定滑車も半分にする、はまちがい', 10, C.red, 'middle')),
    },
  ],
  '動滑車1個で、力は半分、引く長さは2倍',
);

// ═════════ 月・太陽・地球 ═════════
const halfMoon = (cx: number, cy: number, r: number): El[] => {
  const pts: [number, number][] = [];
  for (let a = 90; a <= 270; a += 15) {
    const t = (a * Math.PI) / 180;
    pts.push([cx + r * Math.cos(t), cy - r * Math.sin(t)]);
  }
  return [ci(cx, cy, r, undefined, C.gray, FILL.gray), pg(pts, C.main, FILL.yellow)];
};
const sunEl = (): El => ci(40, 75, 26, '太陽', C.main, FILL.yellow, 11);
const earthEl = (x: number): El => ci(x, 75, 16, '地球', C.blue, FILL.blue, 9);

const moonBetween = (mx: number): El[] => [sunEl(), ar(70, 69, mx - 14, 69, C.main), ar(70, 81, mx - 14, 81, C.main), ...halfMoon(mx, 75, 10), lb(mx, 56, '月', 10, C.ink, 'middle', true), earthEl(260)];

const nisshoku: Figure = show(
  [
    {
      note: '日食（にっしょく）のとき、太陽・月・地球はどんな位置にあり、月はどんな形でしょう。❓まず、太陽・月・地球が、この順に一直線に並んだようすを見てみます。',
      add: [...moonBetween(170), ...band(150, lb(160, 185, '太陽 → 月 → 地球 の順', 14, C.ink, 'middle', true))],
    },
    {
      note: '❓日食とは？→月が太陽をかくして、太陽が欠けて見える現象です。❓かくすには、月はどこにいなければならない？→太陽と地球のあいだです。',
      add: [pg([[180, 72], [246, 66], [246, 84], [180, 78]], C.gray, FILL.gray), ...band(150, bx(20, 164, 280, 34, '月が太陽と地球のあいだ → 太陽をかくす', C.blue, FILL.blue, 13))],
    },
    {
      note: '❓そのとき、月の光っている面はどっち？→月は自分では光らず、太陽の光があたった面だけが光ります。太陽に向いた面（左側）が光り、地球に向いた面（右側）は光があたらず暗いままです。',
      add: [lb(125, 100, '光る面（太陽側）', 9, C.main, 'middle'), lb(215, 100, '暗い面（地球側）', 9, C.gray, 'middle'), ...band(150, bx(20, 164, 280, 34, '地球に向いているのは、光らない面', C.red, FILL.red, 13))],
    },
    {
      note: '❓地球から見ると、月はどう見える？→光っている面が見えず、暗い面だけが見えるので、月はほとんど見えません。この月を新月（しんげつ）といいます。',
      add: band(150, bx(40, 166, 240, 34, '光る面が見えない ＝ 新月', C.purple, FILL.purple, 15)),
    },
    {
      note: '❓「太陽・地球・月」の順に並ぶ選択肢はどうなる？→地球が太陽と月のあいだに入るので、月が地球のかげに入る月食（げっしょく）になります。このとき地球に向く面は光っているので、満月です。日食ではありません。',
      add: band(150, lb(160, 172, '太陽−地球−月 → 月食・満月', 13, C.red, 'middle', true), lb(160, 200, 'だから日食には当てはまらない', 12, C.gray, 'middle')),
    },
    {
      note: '答えは「太陽−月−地球の順に一直線に並び、月が新月のとき」です。',
      add: band(150, bx(20, 160, 280, 44, '太陽−月−地球の順で、月は新月', C.green, FILL.green, 14)),
    },
    {
      note: '❓検算（2つをセットで覚える）：日食は「月が間に入る＝新月」、月食は「地球が間に入る＝満月」です。位置と月の形は、いつも組になっています。',
      add: band(150, lb(160, 175, '日食 ＝ 月が間 ＝ 新月', 14, C.green, 'middle', true), lb(160, 205, '月食 ＝ 地球が間 ＝ 満月', 14, C.blue, 'middle', true)),
    },
  ],
  '日食は、太陽−月−地球の順で、月は新月',
);

const gesshoku: Figure = show(
  [
    {
      note: '太陽・地球・月が、この順に一直線に並び、月が地球のかげに入るとき、どんな現象が起こり、月はどんな形でしょう。',
      add: [sunEl(), ar(70, 69, 130, 69, C.main), ar(70, 81, 130, 81, C.main), earthEl(150), ...halfMoon(262, 75, 10), lb(262, 56, '月', 10, C.ink, 'middle', true), ...band(150, lb(160, 185, '太陽 → 地球 → 月 の順', 14, C.ink, 'middle', true))],
    },
    {
      note: '❓月食（げっしょく）とは？→月が地球のかげに入って、暗くなったり欠けたりして見える現象です。',
      add: band(150, bx(20, 164, 280, 34, '月食 ＝ 月が地球のかげに入る', C.blue, FILL.blue, 14)),
    },
    {
      note: '❓地球のかげは、どこにできる？→太陽の光は地球でさえぎられるので、太陽と反対側にかげができます。',
      add: [pg([[166, 62], [300, 70], [300, 80], [166, 88]], C.gray, FILL.gray), ...halfMoon(262, 75, 10), lb(232, 118, '地球のかげ', 10, C.gray, 'middle', true), ...band(150, bx(20, 164, 280, 34, 'かげは、太陽の反対側にできる', C.gray, FILL.gray, 14))],
    },
    {
      note: '❓月がかげに入る並び方は？→太陽の光がとどかない場所にいるのは、地球をはさんで太陽の反対側です。つまり、太陽・地球・月の順に、一直線に並びます。',
      add: [ar(166, 75, 244, 75, C.red), ...band(150, bx(20, 164, 280, 34, '太陽 − 地球 − 月（地球が間）', C.red, FILL.red, 14))],
    },
    {
      note: '❓そのとき、月の形は？→月の光る面は太陽に向いた側です。この並びでは、太陽に向いた側が地球の方を向いています。地球から見ると光る面が全部見えるので、満月（まんげつ）です。',
      add: [lb(262, 98, '光る面が地球側', 9, C.main, 'middle'), ...band(150, bx(20, 164, 280, 34, '光る面が全部見える ＝ 満月', C.purple, FILL.purple, 14))],
    },
    {
      note: '答えは「月食が起こり、そのときの月は満月である」です。',
      add: band(150, bx(20, 160, 280, 44, '月食が起こり、月は満月', C.green, FILL.green, 15)),
    },
    {
      note: '❓検算（日食と比べる）：太陽・月・地球の順なら、月が太陽をかくす日食で、月は新月です。並び順と月の形を逆にしないように、セットで覚えます。',
      add: band(150, lb(160, 175, '月食 ＝ 地球が間 ＝ 満月', 14, C.green, 'middle', true), lb(160, 205, '日食 ＝ 月が間 ＝ 新月', 14, C.blue, 'middle', true)),
    },
  ],
  '月食は、太陽−地球−月の順で、月は満月',
);

const shingetsu: Figure = show(
  [
    {
      note: '地球から見て、月と太陽が同じ方向にあるとき、月はどんな形に見えるでしょう。',
      add: [...moonBetween(170), ...band(150, lb(160, 185, '月と太陽が、同じ方向', 14, C.ink, 'middle', true))],
    },
    {
      note: '❓月はなぜ光って見える？→月は自分では光りません。太陽の光があたっている面が光って見えるのです。いつも、太陽に向いた半分だけが光ります。',
      add: [lb(125, 100, '光る面（太陽側）', 9, C.main, 'middle'), ...band(150, bx(20, 164, 280, 34, '光るのは、太陽に向いた半分だけ', C.blue, FILL.blue, 13))],
    },
    {
      note: '❓月が太陽と同じ方向にあるとき、光る面はどっちを向く？→太陽の方向、つまり地球から見て向こう側を向きます。地球の方は、光の当たらない面です。',
      add: [lb(215, 100, '暗い面（地球側）', 9, C.gray, 'middle'), ...band(150, bx(20, 164, 280, 34, '光る面は地球の反対側を向く', C.red, FILL.red, 13))],
    },
    {
      note: '❓地球から見えるのは？→暗い面だけなので、月はほとんど見えません。この形を新月（しんげつ）といいます。',
      add: band(150, bx(40, 166, 240, 34, '暗い面だけが見える ＝ 新月', C.purple, FILL.purple, 15)),
    },
    {
      note: '❓反対に、月が太陽の反対側にあるときは？→光る面が地球の方を向くので、全部見えて満月になります。',
      add: [...fresh(), sunEl(), earthEl(150), ar(70, 69, 130, 69, C.main), ar(70, 81, 130, 81, C.main), ...halfMoon(262, 75, 10), lb(262, 56, '月', 10, C.ink, 'middle', true), ...band(150, lb(160, 185, '反対側 ＝ 光る面が見える ＝ 満月', 13, C.blue, 'middle', true))],
    },
    {
      note: '答えは「新月」です。',
      add: [...fresh(), ...moonBetween(170), ...band(150, bx(70, 162, 180, 38, '答え  新月', C.green, FILL.green, 18))],
    },
    {
      note: '❓検算：「太陽と同じ方向＝明るく見える」と考えるのは逆です。同じ方向＝新月、反対方向＝満月。「太陽と近いほど、月の光る面はこちらを向かない」と覚えておくと確かめられます。',
      add: [...fresh(), ...moonBetween(170), ...band(150, lb(160, 175, '同じ方向 ＝ 新月', 14, C.green, 'middle', true), lb(160, 205, '反対方向 ＝ 満月', 14, C.blue, 'middle', true))],
    },
  ],
  '月と太陽が同じ方向 → 新月',
);

// ═════════ 星座の1か月後の位置 ═════════
const arcPt = (a: number, r: number): [number, number] => {
  const t = (a * Math.PI) / 180;
  return [160 + r * Math.cos(t), 130 - r * Math.sin(t)];
};
const skyArc = (): El[] => {
  const out: El[] = [ln(30, 130, 290, 130, C.ink, false, 2)];
  for (let a = 0; a < 180; a += 10) {
    const p = arcPt(a, 110), q = arcPt(a + 10, 110);
    out.push(ln(p[0], p[1], q[0], q[1], C.gray, false, 1));
  }
  return [...out, lb(25, 145, '東', 11, C.ink, 'middle', true), lb(160, 145, '南', 11, C.ink, 'middle', true), lb(295, 145, '西', 11, C.ink, 'middle', true)];
};
const ringOrbit = (cx: number, cy: number, r: number): El[] => {
  const out: El[] = [];
  for (let a = 0; a < 360; a += 15) {
    const t1 = (a * Math.PI) / 180, t2 = ((a + 15) * Math.PI) / 180;
    out.push(ln(cx + r * Math.cos(t1), cy - r * Math.sin(t1), cx + r * Math.cos(t2), cy - r * Math.sin(t2), C.gray, false, 1));
  }
  return out;
};
const orbitMarks = (): El[] => {
  const out: El[] = [ci(100, 80, 13, '太陽', C.main, FILL.yellow, 8), ...ringOrbit(100, 80, 55)];
  for (let k = 0; k < 12; k++) {
    const t = (k * 30 * Math.PI) / 180;
    out.push(ci(100 + 55 * Math.cos(t), 80 - 55 * Math.sin(t), 3, undefined, C.gray, FILL.gray));
  }
  return out;
};
const seiza: Figure = show(
  [
    {
      note: 'ある日の午後8時に、南の空にある星座を見ました。1か月後の同じ午後8時に、同じ星座を見ると、位置はどう変わっているでしょう。',
      add: [...skyArc(), ci(160, 20, 5, undefined, C.main, FILL.yellow), lb(172, 16, '今日の星座', 10, C.main, 'start', true), ...band(150, lb(160, 185, '1か月後、どちらへ何度動く？', 14, C.ink, 'middle', true))],
    },
    {
      note: '❓星は1日のうちでも動くよね？→はい。地球が自転（じてん）しているので、星は東から西へ、1日でひとまわり（360°）動いて見えます。❓でも今回は同じ「午後8時」に見くらべます。→この1日のうちの動きは、どちらの日も同じなので、考えなくてよいのです。',
      add: band(150, bx(20, 164, 280, 34, '同じ時刻で見くらべる → 1日の動きは同じ', C.blue, FILL.blue, 13)),
    },
    {
      note: '❓では、1か月でちがいが出る理由は？→地球が太陽のまわりを1年（約365日）で1周（360°）する（公転（こうてん））からです。1日あたり 360÷365で、約1°ずつ進みます。',
      add: [...fresh(), ...orbitMarks(), lb(250, 50, '1年で1周', 12, C.blue, 'middle', true), lb(250, 72, '360°', 14, C.blue, 'middle', true), lb(250, 100, '1日 約1°', 12, C.red, 'middle', true), ...band(150, bx(30, 164, 260, 34, '360° ÷ 365日 ＝ 約1°（1日）', C.green, FILL.green, 14))],
    },
    {
      note: '❓地球が1日ぶん進むと、星の見え方は？→同じ星が、前の日より約4分早く同じ位置にきます。（1°は、星が動く速さで約4分。1時間で15°動くので、1°÷15°×60分＝4分です。）',
      add: band(150, lb(160, 170, '1日進む → 星は約4分早く同じ位置へ', 12, C.blue, 'middle', true), lb(160, 196, '1時間に15°動く → 1°は 60÷15＝4分', 12, C.gray, 'middle'), lb(160, 222, '（星が、1日で 約1°だけ先にずれる）', 11, C.gray, 'middle')),
    },
    {
      note: '❓同じ午後8時に見ると、どちらにずれる？→星は4分早く着いているので、午後8時にはもう先へ進んでいます。星は東から西へ動くので、前の日より西にずれて見えます。',
      add: [...fresh(), ...skyArc(), ci(160, 20, 5, undefined, C.gray, FILL.gray), ci(...arcPt(78, 110), 5, undefined, C.main, FILL.yellow), lb(200, 14, '1日ぶん（ずれは大きくかいてある）', 9, C.red, 'middle'), ar(168, 21, 190, 26, C.red), ...band(150, lb(160, 175, '星は、前の日より西へ（右へ）ずれる', 13, C.red, 'middle', true))],
    },
    {
      note: '❓1か月（約30日）では何度ずれる？→1日に約1°ずつ西へずれるので、30日で 1°×30＝30°です。',
      add: [...fresh(), ...skyArc(), ci(160, 20, 5, undefined, C.gray, FILL.gray), lb(172, 16, '今日', 10, C.gray, 'start', true), ci(...arcPt(60, 110), 5, undefined, C.main, FILL.yellow), lb(...arcPt(60, 122), '1か月後', 10, C.main, 'middle', true), ar(166, 20, 210, 34, C.red), ...band(150, bx(30, 164, 260, 34, '1° × 30日 ＝ 30°（西へ）', C.green, FILL.green, 15))],
    },
    {
      note: '答えは「西へ約30度移動している」です。❓検算：1年は12か月で、30°×12＝360°。ちょうど1周になるので、1か月あたり30°で合っています。',
      add: band(150, bx(30, 160, 260, 34, '答え  西へ約30度', C.green, FILL.green, 16), lb(160, 222, '検算：30° × 12か月 ＝ 360°（1周）', 12, C.blue, 'middle', true)),
    },
  ],
  '1日に約1°、1か月で約30°、星座は西へずれる',
);

// ═════════ 塩酸と金属（発生する気体の量） ═════════
const axes = (): El[] => [ar(40, 130, 40, 18, C.ink), ar(40, 130, 296, 130, C.ink), lb(40, 12, '出た気体の量', 10, C.ink, 'middle'), lb(296, 144, '金属の重さ', 10, C.ink, 'end')];
const rise = (color: string = C.blue): El[] => [ln(40, 130, 160, 50, color, false, 3)];
const flat = (color: string = C.red): El[] => [ln(160, 50, 280, 50, color, false, 3)];
const acidMetal: Figure = show(
  [
    {
      note: '同じ濃さの塩酸（えんさん）100cm³に、金属（鉄やアルミニウム）を少しずつ加えて、出た水素の量を調べました。金属が少ないうちは、金属の重さに比例して気体が出ましたが、ある重さをこえると気体の量が増えなくなりました。❓その理由は何でしょう。',
      add: [...axes(), ...rise(), ...flat(), ...band(150, lb(160, 185, 'なぜ途中から増えなくなる？', 14, C.ink, 'middle', true))],
    },
    {
      note: '❓はじめは、なぜ金属の重さに比例して気体が出るの？→塩酸がまだたくさんあるので、加えた金属は全部とけて気体になります。金属が2倍になれば、気体も2倍です。',
      add: [...fresh(), ...axes(), ...rise(C.blue), ...band(150, bx(20, 164, 280, 34, '塩酸が十分 → 金属は全部とける → 比例', C.blue, FILL.blue, 12))],
    },
    {
      note: '❓では、なぜ増えなくなる？→金属がとけるには、塩酸が必要です。ところが塩酸は100cm³しかありません。金属を加えていくと、塩酸はだんだん使われて、ついに使いきってしまいます。',
      add: [ci(160, 50, 5, undefined, C.red, FILL.red), lb(160, 38, '塩酸が、ちょうどなくなる点', 10, C.red, 'middle', true), ...band(150, bx(20, 164, 280, 34, '塩酸は100cm³だけ → 使いきる', C.red, FILL.red, 13))],
    },
    {
      note: '❓塩酸を使いきったあとで、金属を加えるとどうなる？→反応する相手の塩酸がもうないので、金属はとけずに、そのまま残ります。気体も、これ以上出ません。',
      add: [...flat(C.red), ...band(150, bx(20, 164, 280, 34, '塩酸なし → 金属はとけずに残る', C.red, FILL.red, 13), lb(160, 222, 'グラフは水平（ふえない）', 11, C.gray, 'middle'))],
    },
    {
      note: '❓「金属がすべてとけたから」ではないの？→もし金属が全部とけていたなら、加えるたびに気体は出続けるはずです。止まったのは、とけのこる金属があるからで、理由は逆です。',
      add: band(150, lb(160, 172, '全部とけたから止まる → まちがい', 12, C.red, 'middle', true), lb(160, 198, '全部とけるなら、まだ出続ける', 12, C.gray, 'middle')),
    },
    {
      note: '❓ほかの選択肢は？→水素は水にほとんどとけません。また、この反応では熱が出るので、温度が下がって止まることもありません。止まるのは、塩酸がなくなったときです。',
      add: band(150, lb(160, 172, '気体が水にとけた → 水素はとけにくい', 11, C.gray, 'middle'), lb(160, 198, '温度が下がった → 反応で熱が出る', 11, C.gray, 'middle'), lb(160, 224, '答え：塩酸がすべて反応してなくなったから', 12, C.green, 'middle', true)),
    },
    {
      note: '答えは「塩酸がすべて反応してなくなったから」です。❓検算：もし塩酸を200cm³に増やしたら、折れ曲がる点は、金属が2倍の所に動くはずです。塩酸の量で決まっているので、理由がたしかめられます。',
      add: [...fresh(), ...axes(), ...rise(C.blue), ...flat(C.red), ...band(150, bx(20, 160, 280, 34, '答え  塩酸がすべて反応してなくなったから', C.green, FILL.green, 12), lb(160, 222, '塩酸が2倍 → 折れる所は金属2倍の所へ', 11, C.blue, 'middle'))],
    },
  ],
  '塩酸がなくなると、金属が余って、気体は増えない',
);

// ═════════ 折り返し算 ═════════
const px = (m: number) => 30 + (m * 260) / 1500;
const lineAB = (): El[] => [ln(px(0), 70, px(1500), 70, C.ink, false, 3), lb(px(0), 92, 'A', 12, C.ink, 'middle', true), lb(px(1500), 92, 'B', 12, C.ink, 'middle', true), lb(160, 108, '1500m', 11, C.gray, 'middle')];
const oriKaeshi: Figure = show(
  [
    {
      note: 'A地点とB地点は1500m離（はな）れています。PさんとQさんが同時にAを出発してBへ向かいます。Pさんの速さはQさんの1.5倍です。PさんはBに着いてすぐ折りかえし、Qさんと出会いました。❓出会ったのは、Bから何m手前でしょう。',
      add: [...lineAB(), ci(px(0), 70, 8, 'P', C.red, FILL.red, 9), ci(px(0), 52, 8, 'Q', C.blue, FILL.blue, 9), ...band(150, lb(160, 185, '出会ったのは、Bの何m手前？', 14, C.ink, 'middle', true))],
    },
    {
      note: '❓速さが1.5倍だと、進む道のりはどうなる？→同じ時間に進む道のりは、速さに比例します。速さの比は1.5：1＝3：2なので、進む道のりも3：2です。',
      add: band(150, bx(20, 160, 280, 26, '速さの比 P：Q ＝ 1.5：1 ＝ 3：2', C.purple, FILL.purple, 12), bx(20, 194, 3 * 60, 16, 'P ③', C.red, FILL.red, 10), bx(20, 214, 2 * 60, 16, 'Q ②', C.blue, FILL.blue, 10)),
    },
    {
      note: '❓PがB（1500m）に着いたとき、Qはどこ？→同じ時間で道のりは3：2。Pが③＝1500mなら、Qは②です。1500÷3×2＝1000mです。',
      add: [...fresh(), ...lineAB(), ci(px(1500), 70, 8, 'P', C.red, FILL.red, 9), ci(px(1000), 52, 8, 'Q', C.blue, FILL.blue, 9), lb(px(1000), 38, '1000m', 10, C.blue, 'middle', true), ...band(150, bx(20, 164, 280, 34, '1500 ÷ 3 × 2 ＝ 1000m（Qの位置）', C.blue, FILL.blue, 13))],
    },
    {
      note: '❓そのとき、PとQのあいだは何m？→Pは B、QはBの手前1000mにいるので、1500−1000＝500m離れています。',
      add: [ar(px(1000), 100, px(1500), 100, C.green), lb((px(1000) + px(1500)) / 2, 118, '500m', 11, C.green, 'middle', true), ...band(150, bx(30, 166, 260, 34, '2人のあいだ 1500 − 1000 ＝ 500m', C.green, FILL.green, 14))],
    },
    {
      note: '❓ここから2人は、どう動く？→Pは折りかえしてAへ、QはBへ、向かい合って進みます（出会い算）。❓500mを、どう分ける？→進む道のりの比は、速さの比と同じ3：2なので、500mを3：2に分けます。Qは500÷5×2＝200mです。',
      add: [ar(px(1500), 60, px(1300), 60, C.red), ar(px(1000), 60, px(1100), 60, C.blue), ...band(150, bx(20, 164, 280, 30, '500mを 3：2 に分ける（合わせて5）', C.purple, FILL.purple, 13), lb(160, 214, 'Q：500 ÷ 5 × 2 ＝ 200m', 14, C.blue, 'middle', true))],
    },
    {
      note: '❓Bから何m手前？→QはBの手前500mの所から、さらに200m進んで出会います。Bまでのこり、500−200＝300mです。',
      add: [...fresh(), ...lineAB(), ci(px(1200), 70, 7, undefined, C.green, FILL.green), ar(px(1200), 100, px(1500), 100, C.green), lb(px(1350), 118, '300m', 11, C.green, 'middle', true), lb(px(1200), 52, '出会う', 10, C.green, 'middle', true), ...band(150, bx(30, 166, 260, 34, '500 − 200 ＝ 300m（Bの手前）', C.green, FILL.green, 14))],
    },
    {
      note: '答えは300mです。❓検算：出会うまでにPは折りかえして 500÷5×3＝300m、Qは200m進みます。300＋200＝500mで、2人のあいだの500mと一致します。',
      add: band(150, bx(70, 160, 180, 32, '答え  300m', C.green, FILL.green, 17), lb(160, 214, 'P 300m ＋ Q 200m ＝ 500m（一致）', 12, C.blue, 'middle', true)),
    },
  ],
  '折り返し算は「折り返すまで」と「折り返したあと」に分ける',
);

// ═════════ マッチ棒の規則 ═════════
const S = 46;
const mvB = (j: number, x0: number, yb: number): [number, number] => [x0 + j * S, yb];
const mvT = (j: number, x0: number, yb: number): [number, number] => [x0 + S / 2 + j * S, yb - 40];
function edgesOf(k: number, x0: number, yb: number): [[number, number], [number, number]][] {
  const B = (j: number) => mvB(j, x0, yb);
  const T = (j: number) => mvT(j, x0, yb);
  if (k === 1) return [[B(0), B(1)], [B(1), T(0)], [B(0), T(0)]];
  const j = Math.floor((k - 2) / 2);
  if (k % 2 === 0) return [[T(j), T(j + 1)], [T(j + 1), B(j + 1)]];
  const jj = (k - 1) / 2 - 1;
  return [[B(jj + 1), B(jj + 2)], [B(jj + 2), T(jj + 1)]];
}
const sticks = (n: number, x0: number, yb: number): El[] => {
  const cols = [C.main, C.blue, C.red, C.purple];
  const out: El[] = [];
  for (let k = 1; k <= n; k++) for (const [p, q] of edgesOf(k, x0, yb)) out.push(ln(p[0], p[1], q[0], q[1], cols[Math.min(k - 1, 3)], false, 3));
  return out;
};
const matches: Figure = show(
  [
    {
      note: 'マッチ棒で正三角形を横一列に並べます。三角形が1個で3本、2個で5本、3個で7本です。❓この規則で三角形を30個つくるには、マッチ棒は何本必要でしょう。',
      add: [...sticks(1, 20, 70), lb(43, 88, '1個：3本', 10, C.ink, 'middle', true), ...sticks(2, 100, 70), lb(146, 88, '2個：5本', 10, C.ink, 'middle', true), ...sticks(3, 190, 70), lb(259, 88, '3個：7本', 10, C.ink, 'middle', true), ...band(150, lb(160, 185, '30個では何本？', 15, C.ink, 'middle', true))],
    },
    {
      note: '❓三角形が1個ふえるごとに、何本ふえる？→3本から5本で2本、5本から7本で2本。いつも2本ずつふえています。',
      add: band(150, lb(160, 172, '3 → 5 → 7', 15, C.ink, 'middle', true), lb(160, 200, '＋2　　＋2', 14, C.red, 'middle', true), lb(160, 224, 'いつも2本ずつふえる', 11, C.gray, 'middle')),
    },
    {
      note: '❓なぜ毎回2本なの？→新しい三角形は、となりの三角形と1つの辺を共有（きょうゆう）してくっつきます。三角形には辺が3本ありますが、1本はすでにあるので、新しく必要なのは 3−1＝2本です。',
      add: [...fresh(), ...sticks(3, 110, 90), lb(133, 106, '1個目', 10, C.main, 'middle', true), lb(156, 42, '2個目', 10, C.blue, 'middle', true), lb(179, 106, '3個目', 10, C.red, 'middle', true), ...band(150, bx(20, 164, 280, 34, '辺3本 − 共有する1本 ＝ 新しい2本', C.purple, FILL.purple, 13), lb(160, 222, '青・赤の線が、新しく足した2本', 10, C.gray, 'middle'))],
    },
    {
      note: '❓30個つくるとき、ふえるのは何回？→最初の1個（3本）のあとに、29個をつぎ足します。だから、2本ふえることが29回あります。',
      add: band(150, lb(160, 172, '最初の1個：3本', 13, C.main, 'middle', true), lb(160, 198, 'つぎ足し：30 − 1 ＝ 29回', 13, C.blue, 'middle', true), lb(160, 224, '2本 × 29回 ＝ 58本', 13, C.green, 'middle', true)),
    },
    {
      note: '❓合計は？→最初の3本に、つぎ足した58本を足します。3＋58＝61本です。',
      add: band(150, bx(40, 164, 240, 36, '3 ＋ 58 ＝ 61本', C.green, FILL.green, 18)),
    },
    {
      note: '❓別の式でも出せる？→「三角形1個につき2本」と考えて 2×30＝60本。ただし最初の1個だけは3本で、2本より1本多いので、1本を足します。2×30＋1＝61本です。',
      add: band(150, bx(30, 162, 260, 30, '2 × 30 ＋ 1 ＝ 61本', C.green, FILL.green, 15), lb(160, 214, 'ふえる分×個数＋最初に多い1本', 12, C.gray, 'middle'), lb(160, 232, '最初の1本を足し忘れると 60本（まちがい）', 10, C.red, 'middle')),
    },
    {
      note: '答えは61本です。❓検算：この式を3個で試します。2×3＋1＝7本で、問題の「3個で7本」と一致します。1個でも 2×1＋1＝3本で合っています。',
      add: band(150, bx(70, 160, 180, 32, '答え  61本', C.green, FILL.green, 17), lb(160, 214, '3個：2×3＋1＝7本（問題と一致）', 12, C.blue, 'middle', true)),
    },
  ],
  'つぎ足すごとに2本。2×個数＋1',
);

export const figuresSchoolChugaku08: Record<string, Figure> = {
  kankan_top_sansu_078: oriKaeshi,
  kankan_top_sansu_080: matches,
  kankan_top_rika_020: nisshoku,
  kankan_top_rika_032: acidMetal,
  kankan_top_rika_036: lever([[60, 30]], { d: 20 }, 3),
  kankan_top_rika_037: spring7,
  kankan_top_rika_038: seriesFig('A'),
  kankan_top_rika_039: circuitParallelRemove,
  kankan_top_rika_043: springSeries,
  kankan_top_rika_044: circuitBranch,
  kankan_top_rika_047: shingetsu,
  kankan_top_rika_059: lever([[30, 20]], { d: 15 }, 4),
  kankan_top_rika_061: seiza,
  kankan_top_rika_062: gesshoku,
  kankan_top_rika_064: buoyFig(100, 120, 'sink'),
  kankan_top_rika_065: pulley,
  kankan_top_rika_070: lever([[30, 20]], { w: 40 }, 4),
  kankan_top_rika_072: seriesFig('q'),
  kankan_top_rika_073: circuitParallelDouble,
  kankan_top_rika_074: buoyFig(100, 80, 'string'),
  kankan_top_rika_077: circuitCompare,
  kankan_top_rika_078: buoySinkOrFloat,
  kankan_top_rika_079: lever([[20, 10], [10, 30]], { d: 20 }, 4),
};
