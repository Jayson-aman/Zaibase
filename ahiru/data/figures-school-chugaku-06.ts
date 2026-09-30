// 中学受験の入試傾向問題（追手門学院・プール学院・賢明学院・関関同立附属）の動く図解スライド。
// キーは問題の id。各スライドは「❓なぜ？→答え→❓では、なぜ？→答え…」の連鎖で、根っこまでたどる。
// 画面の上半分に図、下の帯（band）にそのスライドの式やひとこと、という配置にそろえてある。
import type { DiagramElement, Figure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, show, band, fresh, flow, cover } from './diagram-kit';

type E = DiagramElement;

const t = (s: string, y = 172, size = 12, color: string = C.ink): E => lb(160, y, s, size, color, 'middle', true);
const wire = (x1: number, y1: number, x2: number, y2: number, col: string = C.ink): E => ln(x1, y1, x2, y2, col, false, 2);

// ════════════════════════════════════════════
// 割引き（2割引き・20%引き）
// ════════════════════════════════════════════
function disc(P: number, kind: 'wari' | 'pct'): Figure {
  const u = P / 10;
  const d = P / 5;
  const ans = (P * 4) / 5;
  const word = kind === 'wari' ? '2割引き' : '20%引き';
  const unit = kind === 'wari' ? '1割' : '10%';
  const rest = kind === 'wari' ? '8割' : '80%';
  const cut = kind === 'wari' ? '2割' : '20%';
  const seg = (i: number, color: string, fill: string): E => bx(40 + 24 * i, 44, 24, 36, undefined, color, fill);
  const segs = (from: number, to: number, color: string, fill: string): E[] => {
    const out: E[] = [];
    for (let i = from; i < to; i++) out.push(seg(i, color, fill));
    return out;
  };
  const amounts: E[] = [];
  for (let i = 0; i < 10; i++) amounts.push(lb(52 + 24 * i, 134, String(u), 9, C.blue));
  return show(
    [
      {
        note: `定価${P}円の品物を${word}で売ります。売る値段はいくらでしょう。❓まず、${word}とはどういうことでしょう。`,
        add: [lb(160, 28, `定価 ${P}円`, 14, C.ink, 'middle', true), ...segs(0, 10, C.main, FILL.warm), lb(160, 100, kind === 'wari' ? '全体＝10割' : '全体＝100%（10%ずつ10こ）', 11, C.gray), ...band(150, t('売る値段は いくら？', 185, 14))],
      },
      {
        note:
          kind === 'wari'
            ? '❓2割引きとは？→定価を10に分けたうち、2つぶん（2割）を安くしてもらうことです。❓では、お客さんが払うのはどれだけ？→残りの8つぶん（8割）です。'
            : '❓20%引きとは？→定価を100%として、そのうち20%ぶんを安くしてもらうことです。❓では、払うのはどれだけ？→残りの80%ぶんです。',
        add: [...segs(0, 8, C.green, FILL.green), ...segs(8, 10, C.red, FILL.red), lb(136, 118, `残り${rest}（払う）`, 11, C.green, 'middle', true), lb(256, 118, `引く${cut}`, 11, C.red, 'middle', true), ...band(150, t(`払うのは 定価の${rest}ぶん`, 185, 14, C.green))],
      },
      {
        note: `❓${rest}ぶんはいくら？→まず${unit}ぶんを出します。全体（10こ）が${P}円なので、${unit}は${P}÷10＝${u}円です。`,
        add: [...amounts, ...band(150, t(`${P}÷10＝${u}円（${unit}ぶん）`, 185, 14))],
      },
      {
        note: `❓払うのは何こぶん？→8こぶんです。❓では式は？→${u}円が8こぶんなので、${u}×8＝${ans}円になります。`,
        add: [ln(40, 90, 232, 90, C.green, false, 3), ...band(150, t(`${u}×8＝${ans}円`, 185, 16, C.green))],
      },
      {
        note: `❓もっと速く出す方法は？→${rest}を小数で表して、定価にかけます。❓なぜ0.8？→全体が「1」なので、${unit}は0.1、${rest}は0.8になるからです。`,
        add: band(150, t(`${rest}＝0.8`, 168, 14, C.purple), t(`${P}×0.8＝${ans}円`, 200, 16, C.green)),
      },
      {
        note: `❓別のやり方は？→先に「安くなる金額」を出して、定価から引きます。安くなる${cut}ぶんは、${P}×0.2＝${d}円です。`,
        add: fresh(lb(160, 28, `定価 ${P}円`, 14, C.ink, 'middle', true), bx(40, 44, 192, 36, '売り値', C.green, FILL.green, 13), bx(232, 44, 48, 36, `${d}円`, C.red, FILL.red, 10), lb(256, 98, '安くなる', 10, C.red), ...band(150, t(`${P}×0.2＝${d}円（安くなる金額）`, 172, 13, C.red), t(`${P}−${d}＝${ans}円`, 204, 16, C.green))),
      },
      {
        note: `答えは${ans}円。❓2つのやり方は合う？→${P}×0.8＝${ans}、${P}−${d}＝${ans}で一致しました。❓よくあるまちがいは？→${d}円は「安くなる金額」で、売り値ではありません。`,
        add: [bx(40, 44, 192, 36, `売り値 ${ans}円`, C.green, FILL.green, 14), ...band(150, t(`答え ${ans}円`, 172, 18, C.green), t(`（${d}円は値引き額・売り値ではない）`, 204, 11, C.gray))],
      },
    ],
    `${word}の売り値は、定価の${rest}（0.8）をかけて出す`,
  );
}

// ════════════════════════════════════════════
// ばねののび（比例）
// ════════════════════════════════════════════
const zig = (x: number, y0: number, y1: number, col: string = C.gray): E[] => {
  const n = 8;
  const amp = 9;
  const pts: [number, number][] = [[x, y0]];
  for (let i = 0; i < n; i++) pts.push([x + (i % 2 === 0 ? -amp : amp), y0 + ((y1 - y0) * (i + 0.5)) / n]);
  pts.push([x, y1]);
  const out: E[] = [];
  for (let i = 1; i < pts.length; i++) out.push(ln(pts[i - 1][0], pts[i - 1][1], pts[i][0], pts[i][1], col, false, 2));
  return out;
};
const NAT = 30;
const PX = 8;
const TOP = 16;
const springYb = (cm: number) => TOP + NAT + cm * PX;
const spring = (x: number, g: number, cm: number): E[] => [ln(x - 28, TOP, x + 28, TOP, C.ink, false, 3), ...zig(x, TOP, springYb(cm)), bx(x - 22, springYb(cm), 44, 22, `${g}g`, C.main, FILL.warm, 11)];
const stretchMark = (x: number, cm: number, text: string): E[] => [ln(x - 28, TOP + NAT, x + 40, TOP + NAT, C.gray, true), ar(x + 32, TOP + NAT, x + 32, springYb(cm), C.red), lb(x + 36, (TOP + NAT + springYb(cm)) / 2 + 4, text, 10, C.red, 'start')];

function spr(W: number): Figure {
  const ans = (W * 2) / 10;
  const r = W / 10;
  return show(
    [
      {
        note: `あるばねに10gのおもりをつるすと2cmのびました。同じばねに${W}gをつるすと、のびは何cmでしょう。❓のびは、重さとどんな関係があるのでしょう。`,
        add: [...spring(80, 10, 2), ...stretchMark(80, 2, 'のび2cm'), ...spring(220, W, ans), ...stretchMark(220, ans, 'のび？cm'), ...band(150, t('10gで2cm。では' + W + 'gなら？', 185, 14))],
      },
      {
        note: '❓「比例する」とは？→重さが2倍、3倍になると、のびも2倍、3倍になることです。10gで2cm、20gで4cm、30gで6cmと、のびが重さといっしょにふえます。',
        add: fresh(ln(20, TOP + NAT, 300, TOP + NAT, C.gray, true), ...spring(60, 10, 2), ...spring(160, 20, 4), ...spring(260, 30, 6), lb(60, 130, 'のび2cm', 11, C.red), lb(160, 130, 'のび4cm', 11, C.red), lb(260, 130, 'のび6cm', 11, C.red), ...band(150, t('重さ2倍→のび2倍　重さ3倍→のび3倍', 185, 13))),
      },
      {
        note: '❓では、1gだけつるすと何cmのびる？→10gは1gが10こぶんで、2cmのびています。1gならその10分の1なので、2÷10＝0.2cmです。',
        add: fresh(
          lb(160, 26, '10g ＝ 1gが10こ', 12, C.ink, 'middle', true),
          ...Array.from({ length: 10 }, (_, i) => bx(40 + 24 * i, 38, 24, 30, '1g', C.main, FILL.warm, 10)),
          ln(40, 80, 280, 80, C.red, false, 2),
          lb(160, 94, 'ぜんぶで のび2cm', 12, C.red, 'middle', true),
          ...Array.from({ length: 10 }, (_, i) => lb(52 + 24 * i, 112, '0.2', 9, C.blue)),
          lb(160, 130, '1gぶんののび ＝ 2÷10 ＝ 0.2cm', 11, C.blue, 'middle', true),
          ...band(150, t('1gで 0.2cm のびる', 185, 15, C.blue)),
        ),
      },
      {
        note: `❓${W}gののびは？→${W}gは1gの${W}こぶんです。1gで0.2cmのびるので、0.2×${W}＝${ans}cmです。`,
        add: fresh(
          bx(50, 14, 90, 30, '10g', C.main, FILL.warm, 12),
          bx(180, 14, 90, 30, '2cm', C.red, FILL.red, 12),
          bx(50, 62, 90, 30, '1g', C.main, FILL.warm, 12),
          bx(180, 62, 90, 30, '0.2cm', C.red, FILL.red, 12),
          bx(50, 110, 90, 30, `${W}g`, C.main, FILL.warm, 12),
          bx(180, 110, 90, 30, '？cm', C.red, FILL.red, 12),
          ar(95, 44, 95, 62, C.blue),
          lb(88, 55, '÷10', 11, C.blue, 'end'),
          ar(225, 44, 225, 62, C.blue),
          lb(232, 55, '÷10', 11, C.blue, 'start'),
          ar(95, 92, 95, 110, C.purple),
          lb(88, 103, `×${W}`, 11, C.purple, 'end'),
          ar(225, 92, 225, 110, C.purple),
          lb(232, 103, `×${W}`, 11, C.purple, 'start'),
          ...band(150, t(`0.2×${W}＝${ans}cm`, 185, 16, C.green)),
        ),
      },
      {
        note: `❓ふえた重さを足し算してはだめ？→${W}−10＝${W - 10}gふえたからと、2＋${W - 10}＝${W - 8}cmとするのはまちがいです。gとcmはちがうものなので足せません。重さが何倍になったかで考えます。`,
        add: fresh(bx(30, 26, 120, 34, '10gで 2cm', C.main, FILL.warm, 12), bx(170, 26, 120, 34, `${W}g`, C.main, FILL.warm, 13), lb(160, 82, `重さが ${W - 10}g ふえた`, 12, C.gray), bx(40, 96, 240, 36, `2＋${W - 10}＝${W - 8}cm　✗`, C.red, FILL.red, 14), ...band(150, t('g と cm は ちがう単位 → 足せない', 185, 13, C.red))),
      },
      {
        note: `❓かけ算だけでもできる？→${W}gは10gの${r}倍です。比例するので、のびも${r}倍になり、2×${r}＝${ans}cmです。`,
        add: fresh(
          bx(40, 22, 60, 24, '10g', C.main, FILL.warm, 11),
          bx(40, 50, 60 * r, 24, `${W}g`, C.main, FILL.warm, 11),
          lb(40 + 60 * r + 10, 62, `${r}倍`, 12, C.purple, 'start', true),
          bx(40, 88, 60, 24, '2cm', C.red, FILL.red, 11),
          bx(40, 116, 60 * r, 24, '？cm', C.red, FILL.red, 11),
          lb(40 + 60 * r + 10, 128, `${r}倍`, 12, C.purple, 'start', true),
          ...band(150, t(`${W}÷10＝${r}倍 → 2×${r}＝${ans}cm`, 185, 15, C.green)),
        ),
      },
      {
        note: `答えは${ans}cm。❓2つのやり方は合う？→0.2×${W}も2×${r}も${ans}cmで一致しました。❓問題は「のび」を聞いているか、ばね全体の長さかも確かめます（ここはのび）。`,
        add: fresh(...spring(90, W, ans), ...stretchMark(90, ans, `のび${ans}cm`), bx(180, 36, 124, 30, `0.2×${W}＝${ans}`, C.green, FILL.green, 13), bx(180, 76, 124, 30, `2×${r}＝${ans}`, C.green, FILL.green, 13), lb(242, 122, 'どちらも同じ', 11, C.green), ...band(150, t(`答え ${ans}cm`, 185, 18, C.green))),
      },
    ],
    'ばねののびは重さに比例する。1gぶんののびか、何倍かで考える',
  );
}

// ════════════════════════════════════════════
// つるかめ算
// ════════════════════════════════════════════
function tsuru(o: { low: [string, number]; high: [string, number]; n: number; total: number; assume: 'low' | 'high'; u: string }): Figure {
  const [lowName, lowP] = o.low;
  const [highName, highP] = o.high;
  const { n, total, u } = o;
  const diff = highP - lowP;
  const aName = o.assume === 'low' ? lowName : highName;
  const oName = o.assume === 'low' ? highName : lowName;
  const aP = o.assume === 'low' ? lowP : highP;
  const oP = o.assume === 'low' ? highP : lowP;
  const A = aP * n;
  const D = Math.abs(total - A);
  const k = D / diff;
  const A2 = oP * n;
  const D2 = Math.abs(total - A2);
  const k2 = D2 / diff;
  const lowC = o.assume === 'low' ? n - k : k;
  const highC = n - lowC;
  const more = o.assume === 'low';
  const per = n <= 10 ? n : Math.ceil(n / 2);
  const x0 = 160 - ((per - 1) * 24) / 2;
  const rowDots = (colorAt: (i: number) => 'low' | 'high' | 'gray'): E[] => {
    const out: E[] = [];
    for (let i = 0; i < n; i++) {
      const c = colorAt(i);
      const col = c === 'low' ? C.blue : c === 'high' ? C.red : C.gray;
      const fl = c === 'low' ? FILL.blue : c === 'high' ? FILL.red : FILL.gray;
      out.push(ci(x0 + (i % per) * 24, 70 + Math.floor(i / per) * 24, 9, undefined, col, fl));
    }
    return out;
  };
  const prices: E[] = [bx(16, 10, 136, 24, `${lowName} 1${u}${lowP}円`, C.blue, FILL.blue, 11), bx(168, 10, 136, 24, `${highName} 1${u}${highP}円`, C.red, FILL.red, 11)];
  const max = Math.max(A, total);
  const wA = (A / max) * 250;
  const wT = (total / max) * 250;
  const barsAT: E[] = [];
  const shortW = Math.min(wA, wT);
  const diffW = Math.abs(wA - wT);
  barsAT.push(bx(30, 158, wA, 22, `仮定 ${A}円`, C.gray, FILL.gray, 11));
  barsAT.push(bx(30, 188, wT, 22, `実際 ${total}円`, C.main, FILL.warm, 11));
  if (wA > wT) barsAT.push(bx(30 + shortW, 158, diffW, 22, `${D}円`, C.red, FILL.red, 10));
  else barsAT.push(bx(30 + shortW, 188, diffW, 22, `${D}円`, C.red, FILL.red, 10));
  return show(
    [
      {
        note: `${lowName}は1${u}${lowP}円、${highName}は1${u}${highP}円。合わせて${n}${u}買って、代金は${total}円でした。${oName}は何${u}買ったでしょう。❓どちらが何${u}か分からないときは、「全部同じだったら」と仮定してみます。`,
        add: [...prices, ...rowDots(() => 'gray'), lb(160, 128, `合わせて ${n}${u}（色は まだ分からない）`, 11, C.gray), ...band(150, t(`代金の合計 ${total}円`, 185, 16))],
      },
      {
        note: `❓全部${aName}だったとしたら、代金はいくら？→${aP}円が${n}${u}ぶんなので、${aP}×${n}＝${A}円です。`,
        add: [...rowDots(() => (o.assume === 'low' ? 'low' : 'high')), cover(0, 118, 320, 26), lb(160, 128, `全部 ${aName} だったら`, 12, o.assume === 'low' ? C.blue : C.red, 'middle', true), ...band(150, t(`${aP}×${n}＝${A}円`, 185, 16))],
      },
      {
        note: `❓実際の代金とのちがいは？→実際は${total}円なので、${A}円との差は${Math.max(A, total)}−${Math.min(A, total)}＝${D}円です。❓この差はどうして出たの？→全部${aName}だと決めつけたからです。`,
        add: band(150, ...barsAT),
      },
      {
        note: `❓差${D}円は、どうすれば合う？→${aName}を1${u}ずつ${oName}に入れかえると、代金は${diff}円ずつ${more ? '高く' : '安く'}なります。${more ? '実際の代金は仮定より高いので、入れかえて増やして合わせます。' : '実際の代金は仮定より安いので、入れかえて減らして合わせます。'}`,
        add: fresh(bx(24, 40, 110, 44, `${aName}${aP}円`, o.assume === 'low' ? C.blue : C.red, o.assume === 'low' ? FILL.blue : FILL.red, 12), ar(140, 62, 180, 62, C.purple), lb(160, 30, `1${u}入れかえる`, 10, C.purple), bx(186, 40, 110, 44, `${oName}${oP}円`, o.assume === 'low' ? C.red : C.blue, o.assume === 'low' ? FILL.red : FILL.blue, 12), ...band(150, t(`${highP}−${lowP}＝${diff}円`, 172, 14, C.purple), t(`1${u}で ${diff}円 ${more ? '高く' : '安く'}なる`, 204, 14, C.purple))),
      },
      {
        note: `❓何${u}入れかえれば、差がなくなる？→${diff}円ずつ変わって、ぜんぶで${D}円変えたいので、${D}÷${diff}＝${k}${u}です。`,
        add: fresh(...rowDots((i) => (i < k ? (o.assume === 'low' ? 'high' : 'low') : o.assume === 'low' ? 'low' : 'high')), ln(x0 - 9, 58, x0 + (k - 1) * 24 + 9, 58, C.purple, false, 2), lb(x0 + ((k - 1) * 24) / 2, 46, `入れかえた ${k}${u}`, 11, C.purple, 'middle', true), ...band(150, t(`${D}÷${diff}＝${k}${u}`, 185, 18, C.purple))),
      },
      {
        note: `❓入れかえた${k}${u}は、何の個数？→${aName}から${oName}に入れかえたので、その${k}${u}が${oName}の個数です。知りたいのは${oName}なので、答えは${k}${u}です。`,
        add: band(150, t(`${oName} ＝ ${k}${u}`, 168, 16, C.green), t(`${aName} ＝ ${n}−${k}＝${n - k}${u}`, 200, 14)),
      },
      {
        note: `❓別の考え方でも同じになる？→こんどは全部${oName}だと仮定します。${oP}×${n}＝${A2}円で、実際の${total}円との差は${D2}円。${D2}÷${diff}＝${k2}${u}が${aName}で、${oName}は${n}−${k2}＝${n - k2}${u}です。`,
        add: fresh(...rowDots(() => (o.assume === 'low' ? 'high' : 'low')), lb(160, 128, `全部 ${oName} だったら`, 12, C.purple, 'middle', true), ...band(150, t(`${oP}×${n}＝${A2}円　差 ${D2}円`, 168, 13), t(`${D2}÷${diff}＝${k2}${u}（${aName}）`, 194, 13), t(`${n}−${k2}＝${n - k2}${u}（${oName}）`, 220, 13, C.green))),
      },
      {
        note: `答えは${oName}${k}${u}。❓代金は合う？→${lowName}${lowC}${u}と${highName}${highC}${u}で、${lowP}×${lowC}＋${highP}×${highC}＝${lowP * lowC}＋${highP * highC}＝${total}円。合計の${n}${u}・${total}円どちらも一致しました。`,
        add: fresh(...prices, ...rowDots((i) => (i < lowC ? 'low' : 'high')), lb(160, 128, `${lowName} ${lowC}${u}・${highName} ${highC}${u}`, 12, C.ink, 'middle', true), ...band(150, t(`${lowP}×${lowC}＋${highP}×${highC}＝${lowP * lowC}＋${highP * highC}＝${total}円`, 172, 13), t(`答え ${oName} ${k}${u}`, 204, 18, C.green))),
      },
    ],
    'つるかめ算：全部同じだと仮定 → 差を1つあたりの差でわる',
  );
}

// ════════════════════════════════════════════
// 直方体の体積
// ════════════════════════════════════════════
const S3 = 14;
function box3(a: number, b: number, c: number, o?: { layers?: boolean; yb?: number }): { els: E[]; x0: number; y0: number; w: number; h: number; dx: number; dy: number; yb: number } {
  const w = b * S3;
  const h = c * S3;
  const dx = a * 7;
  const dy = a * 4.5;
  const yb = o?.yb ?? 128;
  const x0 = 160 - (w + dx) / 2;
  const y0 = yb - h;
  const els: E[] = [
    pg(
      [
        [x0, y0],
        [x0 + w, y0],
        [x0 + w, yb],
        [x0, yb],
      ],
      C.main,
      FILL.warm,
    ),
    pg(
      [
        [x0, y0],
        [x0 + dx, y0 - dy],
        [x0 + w + dx, y0 - dy],
        [x0 + w, y0],
      ],
      C.main,
      FILL.yellow,
    ),
    pg(
      [
        [x0 + w, y0],
        [x0 + w + dx, y0 - dy],
        [x0 + w + dx, yb - dy],
        [x0 + w, yb],
      ],
      C.main,
      FILL.blue,
    ),
  ];
  if (o?.layers) {
    for (let k = 1; k < c; k++) {
      const y = yb - k * S3;
      els.push(ln(x0, y, x0 + w, y, C.gray, false, 1));
      els.push(ln(x0 + w, y, x0 + w + dx, y - dy, C.gray, false, 1));
    }
  }
  return { els, x0, y0, w, h, dx, dy, yb };
}

function vol(a: number, b: number, c: number): Figure {
  const base = a * b;
  const V = a * b * c;
  const g = box3(a, b, c);
  const gl = box3(a, b, c, { layers: true });
  const edgeLabels = (bb: ReturnType<typeof box3>): E[] => [lb(bb.x0 + bb.w / 2, bb.yb + 12, `よこ${b}cm`, 10), lb(bb.x0 - 6, bb.y0 + bb.h / 2 + 4, `高さ${c}cm`, 10, C.ink, 'end'), lb(bb.x0 + bb.w + bb.dx + 6, (bb.y0 + bb.yb) / 2 - bb.dy, `たて${a}cm`, 10, C.ink, 'start')];
  const cols = 16;
  const gx = 160 - (b * cols) / 2;
  const grid: E[] = [bx(gx, 34, b * cols, a * cols, undefined, C.main, FILL.warm)];
  for (let i = 1; i < b; i++) grid.push(ln(gx + i * cols, 34, gx + i * cols, 34 + a * cols, C.gray, false, 1));
  for (let j = 1; j < a; j++) grid.push(ln(gx, 34 + j * cols, gx + b * cols, 34 + j * cols, C.gray, false, 1));
  return show(
    [
      {
        note: `たて${a}cm、よこ${b}cm、高さ${c}cmの直方体（ちょくほうたい）の体積（たいせき）を求めます。❓そもそも「体積」とは何でしょう。`,
        add: [...g.els, ...edgeLabels(g), ...band(150, t('体積は いくつ？', 185, 15))],
      },
      {
        note: '❓体積とは？→1辺1cmの立方体（りっぽうたい）を「1cm³」と決めて、それが何こ入るかで、ものの大きさ（かさ）をあらわしたものです。',
        add: fresh(
          pg(
            [
              [120, 40],
              [200, 40],
              [200, 120],
              [120, 120],
            ],
            C.main,
            FILL.warm,
          ),
          pg(
            [
              [120, 40],
              [146, 24],
              [226, 24],
              [200, 40],
            ],
            C.main,
            FILL.yellow,
          ),
          pg(
            [
              [200, 40],
              [226, 24],
              [226, 104],
              [200, 120],
            ],
            C.main,
            FILL.blue,
          ),
          lb(160, 84, '1cm³', 16, C.ink, 'middle', true),
          lb(160, 134, '1辺1cmの立方体 ＝ 1cm³', 12, C.gray, 'middle', true),
          ...band(150, t('何こ入るか ＝ 体積', 185, 15, C.blue)),
        ),
      },
      {
        note: `❓まず、いちばん下の段には、何こ並ぶ？→底（そこ）にたてに${a}こ、よこに${b}こ並ぶので、${a}×${b}＝${base}こです。❓なぜかけ算？→${b}こ並んだ列が、${a}列あるからです。底の面積（${base}cm²）の数と同じになります。`,
        add: fresh(...grid, lb(160, 24, `よこ ${b}こ`, 11, C.blue), lb(gx - 6, 34 + (a * cols) / 2, `たて${a}こ`, 10, C.blue, 'end'), lb(160, 34 + a * cols + 14, '上から見た図', 10, C.gray), ...band(150, t(`${a}×${b}＝${base}こ（1段）`, 185, 16, C.blue))),
      },
      {
        note: `❓高さ${c}cmだと、何段かさなる？→1段の高さは1cmなので、${c}段かさなります。`,
        add: fresh(...gl.els, ...edgeLabels(gl), lb(gl.x0 + gl.w / 2, gl.y0 + gl.h / 2 + 4, `${c}段`, 14, C.red, 'middle', true), ...band(150, t(`1段 ${base}こ ×${c}段`, 185, 16, C.red))),
      },
      {
        note: `❓ぜんぶで何こ？→1段が${base}こで${c}段あるので、${base}×${c}＝${V}こ。1こが1cm³だから、体積は${V}cm³です。`,
        add: band(150, t(`${base}×${c}＝${V}こ`, 168, 15), t(`体積 ＝ ${V}cm³`, 200, 18, C.green)),
      },
      {
        note: `❓式を1つにまとめると？→（たて×よこ）×高さ、つまり ${a}×${b}×${c}＝${V}。3つの長さをかける式です。かける順番は自由です。`,
        add: band(150, lb(49, 160, 'たて', 10), lb(117, 160, 'よこ', 10), lb(185, 160, '高さ', 10), bx(24, 170, 50, 32, String(a), C.main, FILL.warm, 15), lb(83, 192, '×', 16), bx(92, 170, 50, 32, String(b), C.main, FILL.warm, 15), lb(151, 192, '×', 16), bx(160, 170, 50, 32, String(c), C.main, FILL.warm, 15), lb(219, 192, '＝', 16), bx(228, 170, 72, 32, String(V), C.green, FILL.green, 15), lb(160, 224, '3つの辺を ぜんぶかける', 11, C.gray)),
      },
      {
        note: `❓よくあるまちがいは？→たて×よこだけで止めると${base}になります。これは底の面積で、高さをかけ忘れています。❓なぜ単位はcm³？→長さ（cm）を3回かけるので、cm×cm×cm＝cm³（立方センチメートル）になります。`,
        add: fresh(bx(20, 30, 130, 44, `${a}×${b}＝${base}cm²`, C.red, FILL.red, 13), lb(85, 90, '底の面積（体積ではない）', 10, C.red), bx(170, 30, 130, 44, `${a}×${b}×${c}＝${V}cm³`, C.green, FILL.green, 12), lb(235, 90, '3つかけて 体積', 10, C.green), ...band(150, t('面積はcm²、体積はcm³', 185, 14, C.purple))),
      },
      {
        note: `答えは${V}cm³。❓別の順でも同じ？→${a}×${c}×${b}＝${V}、${b}×${c}×${a}＝${V}と、どの順でも同じ答えになりました。`,
        add: fresh(...g.els, ...edgeLabels(g), lb(g.x0 + g.w / 2, g.y0 + g.h / 2 + 4, `${V}cm³`, 16, C.green, 'middle', true), ...band(150, t(`${a}×${c}×${b}＝${V}　${b}×${c}×${a}＝${V}`, 172, 13), t(`答え ${V}cm³`, 204, 18, C.green))),
      },
    ],
    '体積＝たて×よこ×高さ（1cm³が何こ入るか）',
  );
}

// ════════════════════════════════════════════
// 豆電球の直列・並列
// ════════════════════════════════════════════
const battery = (x: number, y: number): E => bx(x - 13, y - 14, 26, 28, '電池', C.ink, FILL.gray, 8);
const bulb = (x: number, y: number, on = true): E => ci(x, y, 11, undefined, on ? C.main : C.gray, on ? FILL.yellow : FILL.gray);
const seriesC = (on2 = true): E[] => [wire(30, 30, 130, 30), wire(130, 30, 130, 118), wire(130, 118, 30, 118), wire(30, 118, 30, 30), battery(30, 74), bulb(70, 30), bulb(110, 30, on2)];
const parallelC = (onB = true): E[] => [wire(200, 30, 275, 30), wire(200, 118, 275, 118), wire(200, 30, 200, 118), wire(235, 30, 235, 118), wire(275, 30, 275, 118), battery(200, 74), bulb(235, 74), bulb(275, 74, onB)];

function bulbs(resultNote: string, resultBand: string): Figure {
  return show(
    [
      {
        note: '同じ豆電球2個と、同じ電池をつないだ2つの回路（直列と並列）を比べます。❓豆電球の明るさは、何で決まるのでしょう。',
        add: [...seriesC(), ...parallelC(), lb(80, 140, '直列（ちょくれつ）', 11, C.blue, 'middle', true), lb(240, 140, '並列（へいれつ）', 11, C.green, 'middle', true), ...band(150, t('明るさに ちがいは ある？', 185, 14))],
      },
      {
        note: '❓明るさは何で決まる？→豆電球を流れる電流（電気の流れ）の大きさです。電流が大きいほど明るく、小さいほど暗くなります。',
        add: band(150, t('明るさ ＝ 豆電球を流れる電流の大きさ', 172, 13, C.purple), t('電流が大きい → 明るい', 204, 13, C.purple)),
      },
      {
        note: '❓まず、電池1個に豆電球1個だけだと？→このときの電流を「①」と決めて、これを基準にくらべます。',
        add: fresh(wire(100, 30, 220, 30), wire(220, 30, 220, 118), wire(220, 118, 100, 118), wire(100, 118, 100, 30), battery(100, 74), bulb(160, 30), ar(220, 50, 220, 72, C.blue), lb(236, 62, '電流①', 13, C.blue, 'start', true), lb(160, 140, '電池1個＋豆電球1個', 11, C.gray), ...band(150, t('これを基準にする：電流 ①', 185, 15, C.blue))),
      },
      {
        note: '❓直列だと、電流はどうなる？→電流の通り道は1本で、豆電球（関所）を2つ通ります。通りにくさが2倍になるので、電流は①の半分（½）になります。',
        add: fresh(...seriesC(), ar(130, 50, 130, 72, C.blue), lb(146, 62, '電流 ½', 13, C.blue, 'start', true), lb(80, 140, '一本道に 豆電球が2つ', 11, C.gray), ...band(150, t('通りにくさ2倍 → 電流は ½', 185, 15, C.blue))),
      },
      {
        note: '❓並列だと？→電流の通り道が2本に分かれ、どの豆電球にも電池が直接つながっています。だから、どちらの豆電球にも①の電流が流れ、電池からは合計②が出ていきます。',
        add: fresh(...parallelC(), ar(235, 42, 235, 58, C.blue), lb(247, 50, '①', 13, C.blue, 'start', true), ar(275, 42, 275, 58, C.blue), lb(287, 50, '①', 13, C.blue, 'start', true), lb(192, 50, '合計②', 11, C.purple, 'end', true), ...band(150, t('枝ごとに ① が流れる', 185, 15, C.green))),
      },
      {
        note: '❓なぜ、どの枝も①になるの？→赤い線のように、1つの豆電球の両はしが、ほかの豆電球を通らずに、電池の両はしに直接つながっているからです。電池1個＋豆電球1個のときと、同じ形になっています。',
        add: [wire(200, 30, 235, 30, C.red), wire(235, 30, 235, 118, C.red), wire(235, 118, 200, 118, C.red), wire(200, 118, 200, 30, C.red), battery(200, 74), bulb(235, 74), ...band(150, t('赤い道だけを見ると', 168, 12, C.red), t('電池1個＋豆電球1個と同じ → ①', 196, 14, C.red))],
      },
      {
        note: resultNote,
        add: fresh(ln(40, 50, 290, 50, C.gray, true), lb(160, 30, '豆電球1個を流れる電流', 12, C.ink, 'middle', true), bx(70, 86, 70, 36, '½', C.blue, FILL.blue, 18), bx(180, 50, 70, 72, '①', C.green, FILL.green, 18), lb(105, 136, '直列', 12, C.blue, 'middle', true), lb(215, 136, '並列', 12, C.green, 'middle', true), ...band(150, t(resultBand, 185, 15, C.green))),
      },
      {
        note: '❓確かめは？→豆電球を1つはずしてみます。直列は道が切れて全部消えますが、並列は別の道があるので、のこりは光りつづけます。並列は電池1個のときと同じ明るさです。',
        add: fresh(...seriesC(false), ...parallelC(false), lb(80, 140, 'どちらも消える', 11, C.red, 'middle', true), lb(240, 140, 'のこりは ついたまま', 11, C.green, 'middle', true), ...band(150, t('1つはずす → 直列は全部消える', 172, 12, C.red), t('並列は のこりがつく', 200, 12, C.green))),
      },
    ],
    '直列は道が1本で電流が半分、並列は枝ごとに①の電流',
  );
}

// ════════════════════════════════════════════
// てこ（おもりのつり合い）
// ════════════════════════════════════════════
const leverOtemon = (rightLabel: string, rightColor: string = C.red): E[] => [
  ln(40, 80, 280, 80, C.ink, false, 4),
  pg(
    [
      [160, 80],
      [148, 108],
      [172, 108],
    ],
    C.gray,
    FILL.gray,
  ),
  lb(160, 124, '支点', 11, C.gray),
  ln(80, 80, 80, 100, C.ink, false, 1),
  bx(62, 100, 36, 24, '30g', C.main, FILL.warm, 11),
  ln(220, 80, 220, 100, C.ink, false, 1),
  bx(202, 100, 36, 24, rightLabel, rightColor, FILL.red, 11),
  ar(160, 62, 84, 62, C.blue),
  lb(122, 54, '20cm', 11, C.blue),
  ar(160, 62, 216, 62, C.blue),
  lb(189, 54, '15cm', 11, C.blue),
  lb(160, 30, '棒の長さ60cm（まん中を支点にする）', 10, C.gray),
];

function leverO(): Figure {
  return show(
    [
      {
        note: '長さ60cmの棒のまん中を支点にして、左20cmに30gのおもりをつるしました。右15cmに何gをつるすと、つり合うでしょう。❓つり合うとは、どういうことでしょう。',
        add: [...leverOtemon('？g'), ...band(150, t('右15cmに 何g？', 185, 15))],
      },
      {
        note: '❓つり合うとは？→棒を左に回そうとするはたらきと、右に回そうとするはたらきが、同じ大きさのときです。どちらかが大きいと、大きい側がさがります。',
        add: [ar(80, 128, 80, 144, C.red), ar(220, 128, 220, 144, C.blue), ...band(150, t('左に回すはたらき ＝ 右に回すはたらき', 172, 13, C.purple), t('のとき つり合う', 204, 13, C.purple))],
      },
      {
        note: '❓回すはたらきの大きさは、何で決まる？→おもりの重さだけでなく、支点からの距離（きょり）でも決まります。同じ重さでも、支点から遠いほど、棒をよく回します（シーソーで遠くにすわるとさがるのと同じです）。',
        add: fresh(
          ln(40, 62, 280, 86, C.ink, false, 4),
          pg(
            [
              [160, 74],
              [148, 102],
              [172, 102],
            ],
            C.gray,
            FILL.gray,
          ),
          ln(120, 70, 120, 92, C.ink, false, 1),
          bx(106, 92, 28, 22, '1こ', C.main, FILL.warm, 10),
          ln(240, 82, 240, 104, C.ink, false, 1),
          bx(226, 104, 28, 22, '1こ', C.main, FILL.warm, 10),
          lb(120, 128, '近い', 11, C.blue, 'middle', true),
          lb(240, 140, '遠い → 右がさがる', 11, C.red, 'middle', true),
          lb(160, 30, '同じ重さ（1こ）のおもりでも', 11, C.gray),
          ...band(150, t('遠いほど よく回す', 185, 15, C.red)),
        ),
      },
      {
        note: '❓重さときょりを、どう1つにまとめる？→回すはたらきを「重さ×きょり」で表します。❓なぜかけ算？→重さが2倍でも、きょりが2倍でも、はたらきは2倍になるからです。左は30×20＝600です。',
        add: fresh(...leverOtemon('？g'), ...band(150, t('左：30g × 20cm ＝ 600', 185, 16, C.blue))),
      },
      {
        note: '❓右のはたらきは？→右も「□g×15cm」です。つり合うには、左と同じ600にならなければなりません。だから □×15＝600です。',
        add: band(150, t('右：□g × 15cm ＝ 600', 168, 16, C.red), t('（左の600と 同じになればつり合う）', 200, 12, C.gray)),
      },
      {
        note: '❓□はいくつ？→□×15＝600です。かけ算の逆はわり算なので、600÷15＝40。□は40gです。',
        add: [bx(202, 100, 36, 24, '40g', C.red, FILL.red, 11), ...band(150, t('600 ÷ 15 ＝ 40', 168, 16, C.red), t('右のおもり ＝ 40g', 200, 16, C.green))],
      },
      {
        note: '❓棒そのものの重さは考えなくていい？→棒のまん中を支えているので、左の半分（30cm）と右の半分（30cm）の棒の重さは同じで、打ち消し合います。だから考えなくてよいのです。',
        add: fresh(
          ln(40, 80, 280, 80, C.ink, false, 4),
          pg(
            [
              [160, 80],
              [148, 108],
              [172, 108],
            ],
            C.gray,
            FILL.gray,
          ),
          ar(156, 100, 44, 100, C.green),
          ar(164, 100, 276, 100, C.green),
          lb(100, 118, '左の棒 30cm分', 11, C.green),
          lb(220, 118, '右の棒 30cm分', 11, C.green),
          lb(160, 50, '左右で同じ長さ → 同じ重さ', 12, C.green, 'middle', true),
          ...band(150, t('棒の重さは 左右で打ち消し合う', 185, 14, C.green)),
        ),
      },
      {
        note: '答えは40g。❓確かめは？→左は30×20＝600、右は40×15＝600。左右のはたらきが同じになったので、つり合います。',
        add: fresh(...leverOtemon('40g', C.green), ...band(150, t('左 30×20＝600　右 40×15＝600', 172, 13), t('答え 40g', 204, 18, C.green))),
      },
    ],
    'てこ：重さ×支点からのきょり が左右で等しいとつり合う',
  );
}

// 支点から力点までのきょりを変えるてこ
const U = 30;
const FX = 100;
function leverHand(handDist: number, loadDist: number, handLabel: string, loadLabel = '60g'): E[] {
  const lx = FX - loadDist * U;
  const hx = FX + handDist * U;
  const bw = loadDist < 1 ? 30 : 36;
  const els: E[] = [
    ln(30, 90, 300, 90, C.ink, false, 4),
    pg(
      [
        [FX, 90],
        [FX - 12, 118],
        [FX + 12, 118],
      ],
      C.gray,
      FILL.gray,
    ),
    bx(lx - bw / 2 + (loadDist < 1 ? -0 : 0), 62, bw, 26, loadLabel, C.ink, FILL.warm, 11),
    ar(hx, 54, hx, 88, C.red),
    lb(hx, 44, handLabel, 11, C.red, 'middle', true),
    loadDist < 1 ? lb(lx - 8, 106, '作用点', 10, C.gray, 'end') : lb(lx, 106, '作用点', 10, C.gray),
    lb(hx, 106, '力点', 10, C.gray),
    lb(FX, 130, '支点', 10, C.gray),
  ];
  for (let k = 0; k <= 6; k++) els.push(lb(FX + k * U, 146, String(k), 9, C.gray));
  els.push(lb(FX - U, 146, '1', 9, C.gray));
  els.push(lb(12, 146, 'きょり', 9, C.gray, 'start'));
  return els;
}

function leverP(): Figure {
  const bar = (x: number, hgt: number, label: string, col: string): E[] => [bx(x, 126 - hgt, 50, hgt, undefined, col, FILL.warm), lb(x + 25, 126 - hgt - 8, label, 12, col, 'middle', true)];
  return show(
    [
      {
        note: '重い荷物（60g）を、てこで持ち上げます。荷物のところが作用点、手で押すところが力点、ささえるところが支点です。❓力点を支点からどうすると、楽になるのでしょう。',
        add: [...leverHand(3, 1, '手の力？'), ...band(150, t('力点は どこが楽？', 185, 15))],
      },
      {
        note: '❓つり合い（持ち上がる直前）の考え方は？→てこを回すはたらきは「力の大きさ×支点からのきょり」。荷物の側と手の側が同じになったときがつり合いです。荷物は60×1です。',
        add: band(150, t('荷物 60×1 ＝ 手の力□×3', 168, 15, C.purple), t('（左右のはたらきが同じ）', 200, 12, C.gray)),
      },
      {
        note: '❓□はいくつ？→□×3＝60です。かけ算の逆はわり算なので、60÷3＝20。60の荷物が、20の力で持ち上がります。',
        add: [cover(FX + 3 * U - 40, 36, 80, 16), lb(FX + 3 * U, 44, '手の力 20g分', 11, C.green, 'middle', true), ...band(150, t('60 ÷ 3 ＝ 20', 185, 18, C.green))],
      },
      {
        note: '❓力点をもっと遠く（きょり6）にすると？→□×6＝60なので、60÷6＝10。さらに小さい力ですみます。',
        add: fresh(...leverHand(6, 1, '手の力 10g分'), ...band(150, t('□×6＝60 → 60÷6＝10', 185, 16, C.green))),
      },
      {
        note: '❓逆に、力点を支点に近づける（きょり1）と？→□×1＝60で、60÷1＝60。荷物と同じ大きさの力がいり、ちっとも楽になりません。',
        add: fresh(...leverHand(1, 1, '手の力 60g分'), ...band(150, t('□×1＝60 → 60÷1＝60', 185, 16, C.red))),
      },
      {
        note: '❓まとめると？→力点のきょりが1→3→6と遠くなると、必要な力は60→20→10と小さくなります。❓なぜ？→「力×きょり」がいつも60で同じなので、きょりが大きいぶん、力は小さくてすむからです。',
        add: fresh(ln(40, 126, 290, 126, C.ink, false, 2), ...bar(60, 90, '60', C.red), ...bar(135, 30, '20', C.blue), ...bar(210, 15, '10', C.green), lb(85, 140, 'きょり1', 10), lb(160, 140, 'きょり3', 10), lb(235, 140, 'きょり6', 10), lb(160, 18, '手の力（力点のきょり別）', 11, C.gray), ...band(150, t('力×きょり ＝ 60 （いつも同じ）', 185, 14, C.purple))),
      },
      {
        note: '❓作用点（荷物の位置）はどうすると楽？→荷物を支点に近づける（きょり1→0.5）と、荷物のはたらきは60×0.5＝30に小さくなります。力点が3のままなら、手の力は30÷3＝10ですみます。',
        add: fresh(...leverHand(3, 0.5, '手の力 10g分'), ...band(150, t('荷物 60×0.5＝30　30÷3＝10', 185, 15, C.green))),
      },
      {
        note: '答え：力点を支点から遠ざける。❓確かめは？→きょりが2倍（3→6）になると、力は半分（20→10）になります。「力×きょり」が60のままなので、つじつまが合います。',
        add: fresh(...leverHand(6, 1, '手の力 10g分'), ...band(150, t('力点は 支点から遠く', 172, 15, C.green), t('作用点は 支点に近く', 204, 15, C.green))),
      },
    ],
    'てこ：力点を支点から遠ざけると、小さい力ですむ',
  );
}

// ════════════════════════════════════════════
// 正方形から円をくり抜く
// ════════════════════════════════════════════
const sqCircle = (corner: string, circleFill: string, circleText?: string): E[] => [bx(110, 20, 100, 100, undefined, C.main, corner), ci(160, 70, 50, circleText, C.blue, circleFill, 13)];
function poole010(): Figure {
  return show(
    [
      {
        note: 'たて10cm、よこ10cmの正方形から、半径5cmの円を切り取ります。残った部分の面積は何cm²でしょう。円周率は3.14とします。❓残った部分は、どう考えれば出せるでしょう。',
        add: [...sqCircle(FILL.warm, FILL.blue, '円'), lb(160, 14, '10cm', 11), lb(224, 72, '10cm', 11, C.ink, 'start'), ...band(150, t('残った部分（四すみ）の面積は？', 185, 14))],
      },
      {
        note: '❓残りは、何を使えば出せる？→正方形から円をくりぬいたものなので、「残り＝正方形−円」です。赤いところが残った部分です。',
        add: [...sqCircle(FILL.red, '#FFFFFF', '円'), ...band(150, t('残り ＝ 正方形 − 円', 185, 16, C.red))],
      },
      {
        note: '❓正方形の面積は？→1辺が10cmなので、10×10＝100cm²です。',
        add: band(150, t('10×10＝100cm²', 185, 16)),
      },
      {
        note: '❓円の面積は？→「半径×半径×円周率」です。円はぴったり正方形に入っているので、直径は10cm。❓半径は？→直径の半分で、5cmです。5×5×3.14＝78.5cm²。',
        add: fresh(ci(160, 66, 50, undefined, C.blue, FILL.blue), ln(160, 66, 210, 66, C.red, false, 2), ln(110, 66, 210, 66, C.gray, true), lb(186, 54, '半径5cm', 10, C.red), lb(160, 130, '直径10cm', 10, C.gray), ...band(150, t('5×5×3.14＝78.5cm²', 185, 16, C.blue))),
      },
      {
        note: '❓なぜ「半径×半径×円周率」？→半径を1辺にした正方形（5×5＝25）を4こならべると、円がぴったり入る大きな正方形になります。円の面積は、その正方形の約3.14こぶんです。',
        add: fresh(ci(160, 70, 50, undefined, C.blue, FILL.blue), ln(110, 70, 210, 70, C.gray, false, 1), ln(160, 20, 160, 120, C.gray, false, 1), pg([[160, 20], [210, 20], [210, 70], [160, 70]], C.red), lb(185, 45, '5×5', 11, C.red, 'middle', true), lb(160, 130, '半径の正方形（25）4この中に円が入る', 10, C.gray), ...band(150, t('円 ＝ 25 × 3.14 ＝ 78.5cm²', 185, 15, C.blue))),
      },
      {
        note: '❓残った部分は？→正方形から円を引きます。100−78.5＝21.5cm²です。',
        add: fresh(...sqCircle(FILL.red, '#FFFFFF', '78.5'), lb(160, 10, '正方形 100', 11), ...band(150, t('100−78.5＝21.5cm²', 185, 18, C.red))),
      },
      {
        note: '❓よくあるまちがいは？→直径の10cmを半径だと思い、10×10×3.14＝314としてしまうこと。❓なぜまちがいと分かる？→円は正方形（100cm²）の中にあるのだから、円の面積は100より小さいはずだからです。',
        add: fresh(bx(30, 30, 120, 44, '10×10×3.14＝314', C.red, FILL.red, 12), lb(90, 90, '100より大きい → おかしい（✗）', 10, C.red), bx(170, 30, 120, 44, '5×5×3.14＝78.5', C.green, FILL.green, 12), lb(230, 90, '100より小さい（○）', 10, C.green), ...band(150, t('円は正方形の中 → 100より小さい', 185, 14, C.purple))),
      },
      {
        note: '答えは21.5cm²。❓確かめは？→四すみの1つは、25−78.5÷4＝25−19.625＝5.375cm²。4つで5.375×4＝21.5cm²となり、同じ答えになりました。',
        add: fresh(...sqCircle(FILL.red, '#FFFFFF', '円'), lb(104, 30, '5.375', 10, C.red, 'end'), lb(216, 30, '5.375', 10, C.red, 'start'), lb(104, 112, '5.375', 10, C.red, 'end'), lb(216, 112, '5.375', 10, C.red, 'start'), ...band(150, t('5.375×4＝21.5cm² ✓', 172, 14), t('答え 21.5cm²', 204, 18, C.green))),
      },
    ],
    '残り＝正方形−円。円の面積＝半径×半径×3.14',
  );
}

// ════════════════════════════════════════════
// 三角形の面積比
// ════════════════════════════════════════════
const tB: [number, number] = [40, 112];
const tC: [number, number] = [280, 112];
const tA: [number, number] = [180, 20];
const tD: [number, number] = [136, 112];
const triLabels: E[] = [lb(192, 18, 'A', 12, C.ink, 'start', true), lb(30, 124, 'B', 12, C.ink, 'middle', true), lb(290, 124, 'C', 12, C.ink, 'middle', true), lb(136, 124, 'D', 12, C.ink, 'middle', true)];
function poole017(): Figure {
  const barBoxes = (n: number): E[] => Array.from({ length: n }, (_, i) => bx(40 + 48 * i, 64, 48, 36, '8cm²', i < 2 ? C.blue : C.green, i < 2 ? FILL.blue : FILL.green, 11));
  return show(
    [
      {
        note: '三角形ABCの辺BC上に点Dがあり、BD：DC＝2：3です。三角形ABCの面積が40cm²のとき、三角形ABDの面積は何cm²でしょう。❓ABDとADCには、何か同じところがないでしょうか。',
        add: [pg([tA, tB, tC], C.main, FILL.warm), ln(tA[0], tA[1], tD[0], tD[1], C.gray, false, 1.5), ...triLabels, ln(40, 131, 136, 131, C.blue, false, 2), ln(136, 131, 280, 131, C.green, false, 2), lb(88, 142, '2', 12, C.blue, 'middle', true), lb(208, 142, '3', 12, C.green, 'middle', true), ...band(150, t('ABDの面積は？（ABC＝40cm²）', 185, 14))],
      },
      {
        note: '❓何が同じ？→ABDもADCも、頂点Aから底辺BCまでの垂直な長さ（高さ）がまったく同じです。赤い点線が共通の高さです。',
        add: [ln(180, 20, 180, 112, C.red, true), lb(186, 96, '共通の高さ', 11, C.red, 'start', true), ...band(150, t('ABDとADCは 高さが同じ', 185, 14, C.red))],
      },
      {
        note: '❓高さが同じとき、面積は何で決まる？→面積は「底辺×高さ÷2」。高さが同じなら、底辺が2倍になれば面積も2倍になります。つまり面積は底辺の長さに比例します。',
        add: fresh(ln(20, 44, 300, 44, C.red, true), lb(160, 30, '高さは同じ', 11, C.red, 'middle', true), pg([[30, 100], [90, 100], [70, 44]], C.blue, FILL.blue), ln(70, 44, 70, 100, C.gray, true), pg([[150, 100], [270, 100], [200, 44]], C.green, FILL.green), ln(200, 44, 200, 100, C.gray, true), lb(60, 114, '底辺1', 11, C.blue), lb(210, 114, '底辺2', 11, C.green), lb(60, 130, '面積 ①', 12, C.blue, 'middle', true), lb(210, 130, '面積 ②', 12, C.green, 'middle', true), ...band(150, t('底辺が2倍 → 面積も2倍', 185, 15, C.purple))),
      },
      {
        note: '❓では、ABDとADCの面積の比は？→高さが同じなので、底辺の比BD：DC＝2：3と同じになります。ABDを②、ADCを③とします。',
        add: fresh(pg([tA, tB, tD], C.blue, FILL.blue), pg([tA, tD, tC], C.green, FILL.green), ...triLabels, lb(112, 76, '②', 18, C.blue, 'middle', true), lb(200, 82, '③', 18, C.green, 'middle', true), ...band(150, t('ABD：ADC ＝ BD：DC ＝ 2：3', 185, 15, C.purple))),
      },
      {
        note: '❓全体のABCは？→ABDとADCをあわせたものなので、②＋③＝⑤です。この⑤が40cm²にあたります。',
        add: [lb(90, 8, 'ABC全体＝⑤', 12, C.purple, 'middle', true), ...band(150, t('②＋③＝⑤ ＝ 40cm²', 185, 16, C.purple))],
      },
      {
        note: '❓①はいくつ？→⑤が40cm²なので、①は40÷5＝8cm²です。線分図にすると、8cm²のブロックが5つ並び、ABDは2つぶん、ADCは3つぶんです。',
        add: fresh(ln(40, 54, 280, 54, C.purple, false, 2), lb(160, 42, '三角形ABC ＝ 40cm²（⑤）', 12, C.purple, 'middle', true), ...barBoxes(5), ln(40, 110, 136, 110, C.blue, false, 2), lb(88, 124, 'ABD ②', 11, C.blue, 'middle', true), ln(136, 110, 280, 110, C.green, false, 2), lb(208, 124, 'ADC ③', 11, C.green, 'middle', true), ...band(150, t('⑤＝40cm² → ①＝40÷5＝8cm²', 185, 15, C.purple))),
      },
      {
        note: '❓ABDは？→ABDは②ぶんなので、8×2＝16cm²です。',
        add: [bx(40, 64, 96, 36, '16cm²', C.blue, FILL.blue, 15), ...band(150, t('ABD ＝ ② ＝ 8×2＝16cm²', 185, 16, C.blue))],
      },
      {
        note: '答えは16cm²。❓確かめは？→ADCは8×3＝24cm²で、16＋24＝40cm²とABC全体に一致します。❓よくあるまちがいは？→ABD：ADC（2：3）を、ABD：ABC（2：5）と取りちがえること。全体は⑤なので、ABDは全体の5分の2です。',
        add: [bx(136, 64, 144, 36, '24cm²', C.green, FILL.green, 15), ...band(150, t('ADC＝8×3＝24cm²', 172, 14, C.green), t('16＋24＝40cm² ✓　答え 16cm²', 204, 15, C.blue))],
      },
    ],
    '高さが同じ三角形は、面積の比＝底辺の比',
  );
}

// ════════════════════════════════════════════
// 往復の平均の速さ
// ════════════════════════════════════════════
function kenmei009(): Figure {
  const hours = (from: number, n: number, text: string, col: string, fill: string): E[] => Array.from({ length: n }, (_, i) => bx(40 + 48 * (from + i), 60, 48, 36, text, col, fill, 10));
  const hourLabels = (from: number, n: number): E[] => Array.from({ length: n }, (_, i) => lb(64 + 48 * (from + i), 110, '1時間', 10, C.gray));
  return show(
    [
      {
        note: 'A地点とB地点は12km。行きは時速4km、帰りは時速6kmで往復しました。往復全体の平均の速さは時速何kmでしょう。❓(4＋6)÷2＝5と答えてよいでしょうか。',
        add: [ln(40, 70, 280, 70, C.ink, false, 3), ci(40, 70, 12, 'A', C.ink, FILL.warm, 11), ci(280, 70, 12, 'B', C.ink, FILL.warm, 11), bx(135, 60, 50, 20, '12km', C.gray, FILL.gray, 11), ar(60, 50, 260, 50, C.blue), lb(160, 38, '行き 時速4km', 12, C.blue, 'middle', true), ar(260, 92, 60, 92, C.green), lb(160, 108, '帰り 時速6km', 12, C.green, 'middle', true), ...band(150, t('平均の速さは？', 185, 15))],
      },
      {
        note: '❓平均の速さとは？→「もし同じ速さでずっと進んだとしたら、時速いくつか」という速さです。❓だから何を計算する？→全体の道のりを、全体の時間でわります。',
        add: band(150, bx(20, 165, 280, 40, '平均の速さ ＝ 全体の道のり ÷ 全体の時間', C.purple, FILL.purple, 13)),
      },
      {
        note: '❓行きにかかる時間は？→12kmを時速4kmで進みます。時速4kmは「1時間に4km進む」ことなので、12kmの中に4kmが3こ入り、12÷4＝3時間です。',
        add: fresh(lb(112, 48, '行き 12÷4＝3時間', 12, C.blue, 'middle', true), ...hours(0, 3, '4km', C.blue, FILL.blue), ...hourLabels(0, 3), ...band(150, t('12kmを 4kmずつに分ける', 185, 15, C.blue))),
      },
      {
        note: '❓帰りは？→12kmを時速6kmで進みます。6kmずつ2こに分けられるので、12÷6＝2時間です。',
        add: [lb(232, 48, '帰り 12÷6＝2時間', 12, C.green, 'middle', true), ...hours(3, 2, '6km', C.green, FILL.green), ...hourLabels(3, 2), ...band(150, t('12kmを 6kmずつに分ける', 185, 15, C.green))],
      },
      {
        note: '❓全体の時間と道のりは？→時間は3＋2＝5時間。道のりは往復なので12×2＝24kmです。❓なぜ2倍？→行きの12kmと帰りの12kmを両方あわせるからです。',
        add: [ln(40, 124, 280, 124, C.purple, false, 2), lb(160, 138, '全体の時間 3＋2＝5時間', 12, C.purple, 'middle', true), ...band(150, t('道のり 12×2＝24km', 172, 15), t('時間 3＋2＝5時間', 204, 15))],
      },
      {
        note: '❓平均の速さは？→24kmを5時間で進んだことにすると、1時間あたり24÷5＝4.8km。つまり時速4.8kmです。',
        add: fresh(lb(160, 42, '5時間で24km → 1時間あたり 24÷5', 11, C.purple, 'middle', true), ...hours(0, 5, '4.8km', C.purple, FILL.purple), ...hourLabels(0, 5), ...band(150, t('24÷5＝時速4.8km', 185, 18, C.green))),
      },
      {
        note: '❓なぜ4と6の平均の5ではだめ？→5を使うと、行きと帰りが同じ時間だったことになります。でも実際は、おそい時速4kmで3時間と長く進んだので、平均は5より4に近くなります。',
        add: fresh(bx(30, 26, 180, 34, '時速4kmで 3時間', C.blue, FILL.blue, 12), bx(30, 68, 120, 34, '時速6kmで 2時間', C.green, FILL.green, 12), lb(160, 122, 'おそい4kmの時間のほうが長い', 11, C.blue, 'middle', true), ...band(150, t('→ 平均は5より小さくなる', 172, 14, C.red), t('（4.8は その条件に合う）', 204, 12, C.gray))),
      },
      {
        note: '答えは時速4.8km。❓確かめは？→4.8×5時間＝24kmで、往復の道のりと一致します。また4.8は4と6のあいだで、5より4に近い値です。',
        add: fresh(bx(30, 30, 260, 36, '答え 時速4.8km', C.green, FILL.green, 16), bx(30, 80, 260, 30, '検算：4.8×5時間＝24km ✓', C.blue, FILL.blue, 13), ...band(150, t('4と6のあいだ・5より4に近い ✓', 185, 14))),
      },
    ],
    '平均の速さ＝全体の道のり÷全体の時間（速さの平均ではない）',
  );
}

// ════════════════════════════════════════════
// 台形の面積
// ════════════════════════════════════════════
const tz1 = pg([[94, 26], [160, 26], [182, 114], [72, 114]], C.main, FILL.blue);
const tz2 = pg([[160, 26], [270, 26], [248, 114], [182, 114]], C.green, FILL.green);
function kenmei010(): Figure {
  return show(
    [
      {
        note: '上底6cm、下底10cm、高さ8cmの台形（だいけい）の面積を求めます。❓台形の面積の公式は、どうして成り立つのでしょう。',
        add: [tz1, lb(127, 16, '上底 6cm', 11, C.ink, 'middle', true), lb(127, 128, '下底 10cm', 11, C.ink, 'middle', true), ln(160, 26, 160, 114, C.red, true), lb(121, 74, '高さ8cm', 10, C.red, 'middle', true), ...band(150, t('面積は？', 185, 15))],
      },
      {
        note: '❓面積の公式は？→（上底＋下底）×高さ÷2です。❓なぜこの形？→同じ台形をもう1つ用意して、上下さかさまにしてとなりにくっつけてみます。',
        add: [tz2, lb(215, 70, 'もう1つ（さかさま）', 10, C.green, 'middle', true), ...band(150, t('同じ台形を さかさまにして くっつける', 185, 13, C.green))],
      },
      {
        note: '❓何ができた？→平行四辺形です。底辺は、下底10cmと上底6cmをつなげた長さなので、6＋10＝16cm。高さは8cmのままです。',
        add: fresh(tz1, tz2, ln(160, 26, 160, 114, C.red, true), ln(72, 126, 248, 126, C.purple, false, 2), lb(160, 140, '底辺 6＋10＝16cm', 12, C.purple, 'middle', true), lb(127, 70, '台形', 11, C.blue), lb(215, 70, '台形', 11, C.green), ...band(150, t('平行四辺形：底辺16cm・高さ8cm', 185, 14, C.purple))),
      },
      {
        note: '❓平行四辺形の面積は？→底辺×高さで、16×8＝128cm²です。❓なぜ？→左はしの三角形（赤）を右はしに移すと、よこ16cm・たて8cmの長方形になるからです。',
        add: fresh(
          pg([[94, 26], [270, 26], [248, 114], [72, 114]], C.gray, FILL.gray),
          pg([[94, 26], [72, 114], [94, 114]], C.red, FILL.red),
          ln(248, 114, 270, 26, C.gray, true),
          ln(270, 26, 270, 114, C.gray, true),
          ln(248, 114, 270, 114, C.gray, true),
          ar(100, 70, 244, 70, C.red, true),
          lb(182, 16, 'よこ 16cm', 11, C.purple, 'middle', true),
          lb(294, 62, '高さ', 10, C.purple),
          lb(294, 76, '8cm', 10, C.purple),
          ...band(150, t('16×8＝128cm²', 185, 18, C.purple)),
        ),
      },
      {
        note: '❓台形1つぶんは？→平行四辺形は、同じ台形2つぶんでできています。だから半分にして、128÷2＝64cm²です。',
        add: fresh(tz1, pg([[160, 26], [270, 26], [248, 114], [182, 114]], C.gray, FILL.gray), lb(127, 70, '台形', 12, C.blue, 'middle', true), lb(215, 70, 'もう1つ', 11, C.gray), ...band(150, t('128 ÷ 2 ＝ 64cm²', 185, 18, C.green))),
      },
      {
        note: '❓式にまとめると？→（上底＋下底）×高さ÷2。6＋10＝16、16×8＝128、128÷2＝64です。❓÷2はなぜ最後？→台形2つぶんの面積を先に出して、1つぶんにもどすからです。',
        add: fresh(...flow(['上底＋下底', '×高さ', '÷2'], 30, { h: 40, size: 12 }).flat(), ...flow(['6＋10＝16', '16×8＝128', '128÷2＝64'], 100, { h: 40, size: 12, color: C.green, fill: FILL.green }).flat(), ...band(150, t('（上底＋下底）×高さ÷2', 185, 16, C.purple))),
      },
      {
        note: '❓よくあるまちがいは？→÷2を忘れて、128cm²と答えること。128cm²は台形2つぶんの面積です。',
        add: fresh(bx(20, 40, 130, 44, '128cm²', C.red, FILL.red, 16), lb(85, 100, '台形2つぶん（✗）', 11, C.red), bx(170, 40, 130, 44, '64cm²', C.green, FILL.green, 16), lb(235, 100, '台形1つぶん（○）', 11, C.green), ...band(150, t('最後に ÷2 を わすれない', 185, 15, C.purple))),
      },
      {
        note: '答えは64cm²。❓別のやり方で確かめると？→台形を、長方形（6×8＝48）と、左右の三角形（2×8÷2＝8が2つ）に分けます。48＋8＋8＝64で、同じ答えになります。',
        add: fresh(pg([[94, 26], [160, 26], [160, 114], [94, 114]], C.main, FILL.yellow), pg([[94, 26], [72, 114], [94, 114]], C.blue, FILL.blue), pg([[160, 26], [182, 114], [160, 114]], C.blue, FILL.blue), lb(127, 70, '6×8＝48', 12, C.ink, 'middle', true), lb(83, 128, '8cm²', 10, C.blue, 'middle', true), lb(171, 128, '8cm²', 10, C.blue, 'middle', true), ...band(150, t('48＋8＋8＝64cm² ✓', 172, 15, C.blue), t('答え 64cm²', 204, 18, C.green))),
      },
    ],
    '台形の面積＝（上底＋下底）×高さ÷2（平行四辺形の半分）',
  );
}

// ════════════════════════════════════════════
// 3人の和差算（線分図）
// ════════════════════════════════════════════
function kenmei015(): Figure {
  const names: E[] = [lb(28, 34, 'A', 14, C.ink, 'middle', true), lb(28, 70, 'B', 14, C.ink, 'middle', true), lb(28, 106, 'C', 14, C.ink, 'middle', true)];
  return show(
    [
      {
        note: 'A・B・Cの3人の所持金の合計は9500円。AはBより1000円多く、BはCより500円多いです。Cの所持金は？❓だれを基準にして考えればよいでしょう。',
        add: [...names, bx(44, 20, 160, 28, '？円', C.main, FILL.warm, 11), bx(44, 56, 120, 28, '？円', C.main, FILL.warm, 11), bx(44, 92, 100, 28, '？円', C.main, FILL.warm, 11), ...band(150, t('A＝B＋1000　B＝C＋500', 172, 14), t('3人で 9500円', 204, 14, C.purple))],
      },
      {
        note: '❓だれを基準にする？→いちばん少ないCです。Cの所持金を「①」とおきます。❓なぜCが基準？→AもBもCより多いので、Cにいくらかを足した形で表せるからです。',
        add: [bx(44, 92, 100, 28, '①', C.blue, FILL.blue, 15), ...band(150, t('Cの所持金 ＝ ①', 185, 16, C.blue))],
      },
      {
        note: '❓Bはいくら？→BはCより500円多いので、①に500円をたした「①＋500円」です。',
        add: [bx(44, 56, 100, 28, '①', C.blue, FILL.blue, 15), bx(144, 56, 20, 28, '500', C.main, FILL.yellow, 8), ...band(150, t('B ＝ ①＋500円', 185, 16))],
      },
      {
        note: '❓Aはいくら？→AはBより1000円多いので、Bの「①＋500」にさらに1000円をたして「①＋1500円」です。500＋1000＝1500なので、CよりAは1500円多いことになります。',
        add: [bx(44, 20, 100, 28, '①', C.blue, FILL.blue, 15), bx(144, 20, 20, 28, '500', C.main, FILL.yellow, 8), bx(164, 20, 40, 28, '1000', C.red, FILL.red, 9), ...band(150, t('A ＝ ①＋500＋1000', 172, 15), t('＝ ①＋1500円', 204, 15))],
      },
      {
        note: '❓3人あわせると？→Cは①、Bは①＋500、Aは①＋1500。全部たすと、①が3つで③、ほかに500＋1500＝2000円。つまり③＋2000円が9500円です。',
        add: fresh(ln(24, 52, 290, 52, C.purple, false, 2), lb(157, 40, '3人の合計 9500円', 12, C.purple, 'middle', true), bx(24, 64, 70, 34, '①', C.blue, FILL.blue, 16), bx(94, 64, 70, 34, '①', C.blue, FILL.blue, 16), bx(164, 64, 70, 34, '①', C.blue, FILL.blue, 16), bx(234, 64, 56, 34, '2000円', C.main, FILL.yellow, 11), lb(129, 112, '③（①が3つ）', 11, C.blue, 'middle', true), lb(262, 112, '500＋1500', 10, C.main), ...band(150, t('③＋2000円＝9500円', 185, 16, C.purple))),
      },
      {
        note: '❓③はいくら？→9500円から、ほかの2000円を引きます。9500−2000＝7500円なので、③＝7500円です。',
        add: fresh(bx(24, 36, 266, 30, '合計 9500円', C.gray, FILL.gray, 12), bx(234, 36, 56, 30, '−2000円', C.red, FILL.red, 10), ar(129, 66, 129, 88, C.blue), bx(24, 92, 210, 30, '③ ＝ 7500円', C.blue, FILL.blue, 14), ...band(150, t('9500−2000＝7500円', 185, 16, C.blue))),
      },
      {
        note: '❓①はいくら？→③が7500円なので、①は7500÷3＝2500円です。これがCの所持金です。',
        add: fresh(ln(24, 52, 234, 52, C.blue, false, 2), lb(129, 40, '③ ＝ 7500円', 12, C.blue, 'middle', true), bx(24, 64, 70, 34, '2500円', C.blue, FILL.blue, 11), bx(94, 64, 70, 34, '2500円', C.blue, FILL.blue, 11), bx(164, 64, 70, 34, '2500円', C.blue, FILL.blue, 11), ...band(150, t('7500÷3＝2500円', 185, 16, C.blue))),
      },
      {
        note: '答えは2500円。❓確かめは？→C＝2500円、B＝2500＋500＝3000円、A＝3000＋1000＝4000円。2500＋3000＋4000＝9500円で、合計と一致しました。',
        add: fresh(...names, bx(44, 20, 160, 28, 'A 4000円', C.main, FILL.warm, 12), bx(44, 56, 120, 28, 'B 3000円', C.main, FILL.warm, 12), bx(44, 92, 100, 28, 'C 2500円', C.green, FILL.green, 12), ...band(150, t('2500＋3000＋4000＝9500円 ✓', 172, 14), t('答え Cは 2500円', 204, 18, C.green))),
      },
    ],
    '和差算：いちばん少ない人を①として、ほかを①＋□円で表す',
  );
}

// ════════════════════════════════════════════
// 円に内接する正方形
// ════════════════════════════════════════════
const P1: [number, number] = [202.4, 27.6];
const P2: [number, number] = [202.4, 112.4];
const P3: [number, number] = [117.6, 112.4];
const P4: [number, number] = [117.6, 27.6];
const O: [number, number] = [160, 70];
const sqIn = (fill: string): E[] => [ci(160, 70, 60, undefined, C.blue, FILL.blue), pg([P1, P2, P3, P4], C.main, fill)];
const quarters: E[] = [pg([O, P4, P1], C.blue, FILL.blue), pg([O, P1, P2], C.green, FILL.green), pg([O, P2, P3], C.purple, FILL.purple), pg([O, P3, P4], C.red, FILL.red)];
function kenmei018(): Figure {
  return show(
    [
      {
        note: '半径6cmの円に、正方形がぴったり入っています（4つの頂点が円周上にあります）。この正方形の面積は？❓1辺の長さは分かりませんが、何か使える長さはないでしょうか。',
        add: [...sqIn(FILL.warm), ln(160, 70, 220, 70, C.red, false, 2), lb(224, 62, '半径6cm', 10, C.red, 'start', true), ...band(150, t('正方形の面積は？', 185, 15))],
      },
      {
        note: '❓どうして対角線が円の直径になるの？→円の中心から4つの頂点までは、どれも半径6cmで同じ長さです。だから対角線は中心を通り、6＋6＝12cmの直径になります。',
        add: [ln(P4[0], P4[1], P2[0], P2[1], C.red, false, 2), ln(P1[0], P1[1], P3[0], P3[1], C.red, false, 2), ...band(150, t('対角線 ＝ 円の直径 ＝ 12cm', 185, 15, C.red))],
      },
      {
        note: '❓面積はどう出す？→対角線2本で、正方形を4つの三角形に分けます。❓4つは同じ大きさ？→対角線は直角に交わり、中心から頂点までは6cmなので、どれも「直角をはさむ2辺が6cmと6cm」の三角形で、同じ大きさです。',
        add: fresh(ci(160, 70, 60, undefined, C.blue, '#FFFFFF'), ...quarters, ...band(150, t('4つの同じ三角形に 分ける', 185, 15, C.purple))),
      },
      {
        note: '❓三角形1つの面積は？→直角をはさむ2辺が6cmと6cmなので、6×6÷2＝18cm²です。❓なぜ÷2？→6×6の正方形（点線）を、ななめに半分に切った形だからです。',
        add: fresh(pg([[110, 118], [110, 18], [210, 118]], C.main, FILL.blue), ln(110, 18, 210, 18, C.gray, true), ln(210, 18, 210, 118, C.gray, true), ln(110, 102, 126, 102, C.ink, false, 1), ln(126, 102, 126, 118, C.ink, false, 1), lb(96, 68, '6cm', 11, C.red, 'end', true), lb(160, 132, '6cm', 11, C.red, 'middle', true), ...band(150, t('6×6÷2＝18cm²', 185, 18, C.blue))),
      },
      {
        note: '❓4つぶんでは？→三角形1つが18cm²で、それが4つあるので、18×4＝72cm²です。',
        add: fresh(ci(160, 70, 60, undefined, C.blue, '#FFFFFF'), ...quarters, lb(160, 44, '18cm²', 10, C.ink, 'middle', true), lb(188, 72, '18cm²', 10, C.ink, 'middle', true), lb(160, 98, '18cm²', 10, C.ink, 'middle', true), lb(132, 72, '18cm²', 10, C.ink, 'middle', true), ...band(150, t('18×4＝72cm²', 185, 18, C.green))),
      },
      {
        note: '❓もっと速い方法は？→対角線12cmを1辺にした大きな正方形（12×12＝144cm²）をかくと、もとの正方形はそのちょうど半分です。だから、対角線×対角線÷2＝12×12÷2＝72cm²です。',
        add: fresh(bx(100, 20, 120, 120, undefined, C.gray, FILL.gray), pg([[160, 20], [220, 80], [160, 140], [100, 80]], C.main, FILL.warm), lb(160, 82, 'もとの正方形', 11, C.ink, 'middle', true), lb(160, 12, '1辺12cm', 11, C.blue, 'middle', true), ...band(150, t('12×12＝144 → 144÷2＝72cm²', 185, 15, C.purple))),
      },
      {
        note: '答えは72cm²。❓円の中に入っているなら、円より小さいはず。合っている？→円の面積は6×6×3.14＝113.04cm²、外の正方形は144cm²。72＜113.04＜144で、大小の順に合っています。',
        add: fresh(bx(40, 26, 94, 30, '72cm²', C.green, FILL.green, 12), lb(140, 41, '内側の正方形', 11, C.green, 'start'), bx(40, 66, 147, 30, '113.04cm²', C.blue, FILL.blue, 12), lb(193, 81, '円', 11, C.blue, 'start'), bx(40, 106, 187, 30, '144cm²', C.gray, FILL.gray, 12), lb(233, 121, '外の正方形', 11, C.gray, 'start'), ...band(150, t('72 ＜ 113.04 ＜ 144 ✓', 172, 15), t('答え 72cm²', 204, 18, C.green))),
      },
    ],
    '対角線＝円の直径。正方形＝対角線×対角線÷2',
  );
}

// ════════════════════════════════════════════
// 月の満ち欠け・月食
// ════════════════════════════════════════════
const orbit = (cx: number, cy: number, r: number, col: string = C.gray, full = false): E[] => {
  const n = 28;
  const out: E[] = [];
  for (let i = 0; i < n; i++) {
    if (!full && i % 2 === 1) continue;
    const a0 = (i / n) * 2 * Math.PI;
    const a1 = ((i + 1) / n) * 2 * Math.PI;
    out.push(ln(cx + r * Math.cos(a0), cy - r * Math.sin(a0), cx + r * Math.cos(a1), cy - r * Math.sin(a1), col, false, full ? 2 : 1));
  }
  return out;
};
const sunC = (x = 40, y = 80): E => ci(x, y, 24, '太陽', C.main, FILL.yellow, 11);
const earthC = (x: number, y: number): E => ci(x, y, 14, '地球', C.blue, FILL.blue, 8);
const leftHalf = (x: number, y: number, r: number): E => {
  const pts: [number, number][] = [];
  for (let a = 90; a <= 270; a += 15) pts.push([x + r * Math.cos((a * Math.PI) / 180), y - r * Math.sin((a * Math.PI) / 180)]);
  return pg(pts, C.gray, FILL.yellow);
};
const moonLit = (x: number, y: number, r = 10): E[] => [ci(x, y, r, undefined, C.gray, FILL.gray), leftHalf(x, y, r)];
const moonDark = (x: number, y: number, r = 10): E => ci(x, y, r, undefined, C.gray, FILL.gray);
const rays = (x = 70): E[] => [ar(x, 62, x + 34, 62, C.main), ar(x, 80, x + 34, 80, C.main), ar(x, 98, x + 34, 98, C.main)];

function otemon018(): Figure {
  return show(
    [
      {
        note: '太陽・地球・月がこの順に一直線に並び、月が太陽の反対側にあるとき、月はどう見えるでしょう。❓そもそも、月はどうして光って見えるのでしょう。',
        add: [sunC(), earthC(150, 80), ci(214, 80, 10, undefined, C.gray, FILL.gray), lb(214, 104, '月', 10, C.gray), ...band(150, t('太陽 → 地球 → 月 の順', 185, 15))],
      },
      {
        note: '❓月は自分で光っている？→いいえ。月は太陽の光を反射（はんしゃ）して光って見えます。だから、月は太陽に向いた半分だけが、いつも明るくなります。',
        add: [...rays(), leftHalf(214, 80, 10), ...band(150, t('月は 太陽の光を反射して光る', 172, 13, C.main), t('明るいのは 太陽に向いた半分', 204, 13, C.main))],
      },
      {
        note: '❓その明るい半分は、地球から見てどちら向き？→この並びでは、月の太陽側が、ちょうど地球のほうを向いています。',
        add: [ar(202, 70, 168, 70, C.red, true), lb(186, 54, '明るい面が地球を向く', 10, C.red, 'middle', true), ...band(150, t('明るい面 → 地球のほうを向く', 185, 14, C.red))],
      },
      {
        note: '❓地球からは、どう見える？→明るい面がぜんぶ見えるので、まんまるに見えます。これが満月です。',
        add: [ci(270, 112, 20, undefined, C.main, FILL.yellow), lb(270, 142, '地球から見た月', 9, C.gray), ...band(150, t('まんまる → 満月', 185, 18, C.green))],
      },
      {
        note: '❓では、月が太陽と同じ側にあると？→明るい面は太陽のほうを向き、地球に向くのは暗い面になります。だから見えません（新月）。',
        add: fresh(sunC(), ...rays(58), earthC(170, 80), ...moonLit(104, 80), lb(104, 112, '月', 10, C.gray), ci(270, 112, 20, undefined, C.gray, FILL.gray), lb(270, 142, '地球から見た月', 9, C.gray), ...band(150, t('暗い面が地球を向く → 新月', 185, 15, C.gray))),
      },
      {
        note: '❓位置がかわると？→月が地球のまわりを回ると、太陽・地球・月の並びがかわり、地球から見える明るい部分がかわります。太陽の反対側に来たときが満月、同じ側が新月です。',
        add: fresh(sunC(), ...rays(), ...orbit(170, 80, 52), earthC(170, 80), ...moonLit(118, 80, 9), ...moonLit(170, 28, 9), ...moonLit(222, 80, 9), ...moonLit(170, 132, 9), lb(118, 98, '新月', 10, C.gray, 'middle', true), lb(196, 28, '半月', 10, C.gray, 'start', true), lb(196, 132, '半月', 10, C.gray, 'start', true), lb(222, 98, '満月', 10, C.main, 'middle', true), ...band(150, t('太陽の反対側 ＝ 満月', 172, 14, C.green), t('太陽と同じ側 ＝ 新月', 204, 14, C.gray))),
      },
      {
        note: '答えは満月。❓よくあるまちがいは？→並び順を取りちがえること。地球が真ん中なら満月、月が真ん中なら新月です。月は太陽の光を反射していると考えれば、まちがえません。',
        add: fresh(...flow(['太陽', '地球', '月'], 16, { h: 34, size: 12 }).flat(), lb(160, 62, '満月（月が太陽の反対側）', 11, C.green, 'middle', true), ...flow(['太陽', '月', '地球'], 80, { h: 34, size: 12, color: C.gray, fill: FILL.gray }).flat(), lb(160, 126, '新月（月が太陽と同じ側）', 11, C.gray, 'middle', true), ...band(150, t('答え 満月', 185, 20, C.green))),
      },
    ],
    '満月：太陽→地球→月の順。月の明るい面が地球を向く',
  );
}

function kenmei007(): Figure {
  const shadow = pg([[164, 67], [300, 69], [300, 91], [164, 93]], C.gray, FILL.gray);
  return show(
    [
      {
        note: '太陽・地球・月がこの順に一直線に並び、月が地球のかげに入って見えなくなる現象を、何というでしょう。❓まず、「かげ」はどこにできるでしょう。',
        add: [sunC(), earthC(150, 80), moonDark(250, 80, 9), lb(250, 102, '月', 10, C.gray), ...band(150, t('太陽 → 地球 → 月', 185, 15))],
      },
      {
        note: '❓かげはどこにできる？→地球にも太陽の光があたります。だから、太陽と反対側に、光のとどかない「地球のかげ」ができます。',
        add: [...rays(), shadow, lb(214, 56, '地球のかげ', 10, C.ink, 'middle', true), ...band(150, t('太陽と反対側に かげができる', 185, 14))],
      },
      {
        note: '❓月がそのかげに入ると？→月には、太陽の光がとどかなくなります。',
        add: [moonDark(250, 80, 9), lb(250, 120, '光がとどかない', 10, C.red, 'middle', true), ...band(150, t('かげの中 → 太陽の光が来ない', 185, 14, C.red))],
      },
      {
        note: '❓月はなぜ光って見えるの？→月は自分では光らず、太陽の光を反射して光って見えます。かげに入ると反射する光がなくなるので、暗くなって見えなくなります。',
        add: fresh(ar(6, 70, 36, 70, C.main), ci(80, 70, 26, '月', C.main, FILL.yellow, 12), lb(80, 112, '光があたる → 光って見える', 10, C.main, 'middle', true), pg([[200, 40], [300, 44], [300, 96], [200, 100]], C.gray, FILL.gray), ci(250, 70, 26, '月', C.gray, FILL.gray, 12), lb(250, 120, 'かげの中 → 光がない → 暗い', 10, C.gray, 'middle', true), ...band(150, t('月は 光を反射して光っている', 185, 14))),
      },
      {
        note: '❓どんなときに起こる？→太陽・地球・月の順に並ぶとき、つまり月が太陽の反対側にある「満月」のときです。',
        add: fresh(sunC(), ...rays(), ...orbit(170, 80, 52), earthC(170, 80), ...moonLit(118, 80, 9), ci(222, 80, 14, undefined, C.red, '#FFFFFF'), ...moonLit(222, 80, 9), lb(118, 98, '新月', 10, C.gray, 'middle', true), lb(222, 106, '満月の位置', 10, C.red, 'middle', true), ...band(150, t('月が 太陽の反対側 ＝ 満月のとき', 185, 14, C.red))),
      },
      {
        note: '❓でも、満月のたびに月食にならないのはなぜ？→月が地球のまわりを回る道すじが、少しかたむいているからです。ふつうは、満月でもかげの上や下を通りすぎ、かげと交わる所に来たときだけ月食になります。',
        add: fresh(ar(6, 80, 44, 80, C.main), lb(24, 66, '太陽', 11, C.main, 'middle', true), earthC(60, 80), pg([[74, 68], [300, 72], [300, 88], [74, 92]], C.gray, FILL.gray), ln(70, 130, 300, 30, C.blue, true, 1.5), ci(110, 113, 8, undefined, C.gray, FILL.yellow), lb(110, 132, '通りすぎる', 10, C.gray), moonDark(186, 80, 8), lb(186, 106, '月食', 12, C.red, 'middle', true), ci(262, 46, 8, undefined, C.gray, FILL.yellow), lb(262, 28, '通りすぎる', 10, C.gray), ...band(150, t('道すじが少しかたむいている', 172, 13, C.blue), t('かげと交わる所だけ 月食', 204, 13, C.red))),
      },
      {
        note: '答えは月食。❓日食とのちがいは？→地球のかげに月が入るのが月食（満月のとき）、月が太陽をかくすのが日食（新月のとき）です。太陽・地球・月の並び順で見分けられます。',
        add: fresh(...flow(['太陽', '地球', '月'], 16, { h: 34, size: 12 }).flat(), lb(160, 62, '月食：月が地球のかげに入る（満月）', 11, C.red, 'middle', true), ...flow(['太陽', '月', '地球'], 80, { h: 34, size: 12, color: C.gray, fill: FILL.gray }).flat(), lb(160, 126, '日食：月が太陽をかくす（新月）', 11, C.gray, 'middle', true), ...band(150, t('答え 月食', 185, 20, C.red))),
      },
    ],
    '月食：太陽→地球→月の順に並び、月が地球のかげに入る（満月のとき）',
  );
}

// ════════════════════════════════════════════
// 水中のストローが折れて見える（光の屈折）
// ════════════════════════════════════════════
const waterTank: E[] = [bx(10, 90, 300, 56, undefined, C.blue, FILL.blue), lb(294, 134, '水', 12, C.blue, 'end', true)];
const eye: E = ci(40, 28, 9, '目', C.ink, FILL.warm, 9);
const strawAir: E = ln(225, 20, 180, 90, C.main, false, 5);
function otemon020(): Figure {
  return show(
    [
      {
        note: '水を入れた水そうに、まっすぐなストローをななめに入れると、水面のところで折れ曲がって見えます。❓ストローは、本当に折れているのでしょうか。',
        add: [...waterTank, eye, strawAir, ln(180, 90, 148, 121, C.main, false, 5), ...band(150, t('水面で折れて見える 原因は？', 185, 14))],
      },
      {
        note: '❓本当に折れた？→いいえ。水から出すとまっすぐです。ほんとうのストローは、点線のように、まっすぐ水の中にのびています。',
        add: [ln(180, 90, 148, 140, C.gray, true, 3), lb(156, 138, 'ほんとうの先', 10, C.gray, 'start'), ...band(150, t('ほんとうは まっすぐ', 185, 15, C.gray))],
      },
      {
        note: '❓目にはどう見える？→わたしたちはストローの先から出た光を見ています。光は水の中から水面に進み、そこで向きを変えて目にとどきます。',
        add: [ln(148, 140, 112, 90, C.blue, false, 2), ar(112, 90, 50, 35, C.blue), lb(84, 100, '光の道すじ', 10, C.blue, 'end', true), ...band(150, t('先から出た光が 目にとどく', 185, 14, C.blue))],
      },
      {
        note: '❓なぜ光は水面で曲がる？→光は、空気と水のように性質のちがうものの境目を通るとき、進む向きが曲がります。これを屈折（くっせつ）といいます。',
        add: [ln(112, 60, 112, 120, C.gray, true), ci(112, 90, 5, undefined, C.red, FILL.red), lb(120, 76, 'ここで屈折', 10, C.red, 'start', true), ...band(150, t('境目で 光の向きが曲がる ＝ 屈折', 185, 14, C.red))],
      },
      {
        note: '❓曲がった光を、目はどう受けとる？→目は「光はまっすぐ来た」と思い、目に入ってきた向きを、うしろへのばした所に先があると感じます。だから先が、ほんとうより浅い所（赤い点）に見えます。',
        add: [ln(112, 90, 148, 121, C.red, true, 2), ci(148, 121, 4, undefined, C.red, FILL.red), lb(164, 118, '見える先', 10, C.red, 'start', true), ...band(150, t('目は 光がまっすぐ来たと思う', 172, 13, C.red), t('→ 先は 浅い所に見える', 204, 13, C.red))],
      },
      {
        note: '❓なぜ折れ曲がって見える？→空気中の部分は、そのまま見えます。でも水の中の部分は、浅い所に持ち上がって見えます。この2つがずれるので、水面で折れ曲がって見えるのです。',
        add: [ar(236, 66, 190, 88, C.red), lb(262, 58, 'ここで折れて見える', 10, C.red, 'middle', true), ...band(150, t('空気中：そのまま', 168, 13), t('水中：持ち上がって見える → ずれる', 196, 13, C.red))],
      },
      {
        note: '答えは「光が水中と空気中の境目で屈折するから」。❓ほかの選択肢は？→ストローは実際には折れていませんが、見え方が変わる原因は目の錯覚（さっかく）ではなく、光の屈折です。割りばしやコインでも同じことが起こります。',
        add: fresh(bx(14, 14, 292, 28, '○ 光が水と空気の境目で屈折するから', C.green, FILL.green, 12), bx(14, 50, 292, 26, '× 光が水中で反射するから', C.red, FILL.red, 12), bx(14, 82, 292, 26, '× 水がストローの色を変えるから', C.red, FILL.red, 12), bx(14, 114, 292, 28, '× 目の錯覚（本当に折れてはいないが、原因は光の屈折）', C.red, FILL.red, 11), ...band(150, t('答え 光の屈折', 185, 18, C.green))),
      },
    ],
    '光が水と空気の境目で曲がる（屈折）ため、水中の部分が浅く見える',
  );
}

// ════════════════════════════════════════════
// 柱状図（地層の傾き・ずれ）
// ════════════════════════════════════════════
const colX = [30, 130, 230];
const colNames = ['地点A', '地点B', '地点C'];
const column = (i: number, sandTop: number): E[] => [
  bx(colX[i], 30, 60, sandTop - 30, 'どろ', C.gray, FILL.gray, 10),
  bx(colX[i], sandTop, 60, 22, '砂', C.main, FILL.yellow, 11),
  bx(colX[i], sandTop + 22, 60, 126 - sandTop - 22, 'れき', C.main, FILL.warm, 10),
  lb(colX[i] + 30, 140, colNames[i], 11, C.ink, 'middle', true),
];
function poole016(): Figure {
  const real = (): E[] => [...column(0, 48), ...column(1, 60), ...column(2, 74)];
  return show(
    [
      {
        note: 'ある地域の3地点でボーリング調査をして、地層の重なりを柱状（ちゅうじょう）図に表しました。同じ「砂の層」が出てくる深さが、地点によってちがいます。❓地層は、もともとどう積もるのでしょう。',
        add: [...real(), ...band(150, t('同じ砂の層が 出る深さがちがう', 185, 14))],
      },
      {
        note: '❓地層はどう積もる？→川が運んだれき・砂・どろが、海や湖の底に、重さの順にほぼ水平に積もります。❓なぜ水平？→水の底は平らに近く、つぶが水の中をしずんで広がるからです。',
        add: fresh(bx(40, 24, 240, 40, '水（海・湖）', C.blue, FILL.blue, 11), ar(90, 28, 90, 60, C.blue), ar(230, 28, 230, 60, C.blue), bx(40, 64, 240, 22, 'どろ（最後）', C.gray, FILL.gray, 11), bx(40, 86, 240, 22, '砂', C.main, FILL.yellow, 11), bx(40, 108, 240, 26, 'れき（最初）', C.main, FILL.warm, 11), ...band(150, t('ほぼ水平に積もる', 185, 15))),
      },
      {
        note: '❓水平に積もったままなら、同じ層は同じ深さに出る？→地面の高さが同じなら、そのとおりです。もし水平なら、砂の層は3地点とも同じ深さにあるはずです。',
        add: fresh(...column(0, 60), ...column(1, 60), ...column(2, 60), ln(20, 60, 300, 60, C.red, true), lb(160, 18, '水平なら 同じ深さに出る', 11, C.red, 'middle', true), ...band(150, t('予想：3地点とも 同じ深さ', 185, 14, C.red))),
      },
      {
        note: '❓でも実際は？→地点Aでは浅く、右の地点Cほど深い所に砂の層があります。水平なら同じ深さのはずなのに、ずれています。',
        add: fresh(...real(), ln(30, 48, 290, 48, C.gray, true), ln(90, 48, 130, 60, C.red, false, 2), ln(190, 60, 230, 74, C.red, false, 2), lb(160, 18, '点線：水平なら　赤：実際（右ほど深い）', 11, C.red, 'middle', true), ...band(150, t('実際：A 浅い → C 深い', 185, 14, C.red))),
      },
      {
        note: '❓なぜ深さがちがうの？→理由の1つは、地層ができたあとに、大地の力で全体が傾いたからです。傾いた地層を3か所でほると、同じ砂の層でも右ほど深い所に出ます。',
        add: fresh(pg([[30, 30], [290, 30], [290, 75], [30, 40]], C.gray, FILL.gray), pg([[30, 40], [290, 75], [290, 95], [30, 60]], C.main, FILL.yellow), pg([[30, 60], [290, 95], [290, 140], [30, 140]], C.main, FILL.warm), ln(60, 30, 60, 140, C.ink, true), ln(160, 30, 160, 140, C.ink, true), ln(260, 30, 260, 140, C.ink, true), ci(60, 44, 4, undefined, C.red, FILL.red), ci(160, 61.5, 4, undefined, C.red, FILL.red), ci(260, 71, 4, undefined, C.red, FILL.red), lb(160, 20, '傾いた地層を 3か所でほる', 11, C.red, 'middle', true), ...band(150, t('傾き → 同じ層の深さがちがう', 185, 14, C.red))),
      },
      {
        note: '❓ほかの理由は？→地層が割れて、一方が上や下にずれる「断層（だんそう）」でも、同じ層の深さがちがってきます。',
        add: fresh(bx(30, 30, 130, 30, 'どろ', C.gray, FILL.gray, 10), bx(30, 60, 130, 24, '砂', C.main, FILL.yellow, 11), bx(30, 84, 130, 50, 'れき', C.main, FILL.warm, 10), bx(160, 56, 130, 30, 'どろ', C.gray, FILL.gray, 10), bx(160, 86, 130, 24, '砂', C.main, FILL.yellow, 11), bx(160, 110, 130, 30, 'れき', C.main, FILL.warm, 10), ln(160, 26, 160, 142, C.red, false, 3), ar(225, 32, 225, 54, C.red), lb(268, 44, '下がった', 10, C.red, 'middle', true), ...band(150, t('断層：割れて ずれる', 185, 15, C.red))),
      },
      {
        note: '答えは「各地点の地層の傾きやずれ」。❓ほかの選択肢は？→柱状図から分かるのは、層の重なり・厚さ・深さです。岩石の色だけ、地下水の温度、地震の日時は読みとれません。火山灰の層（かぎ層）を目印にすると、深さを比べやすくなります。',
        add: fresh(bx(14, 14, 292, 30, '○ 各地点の地層の傾きやずれ', C.green, FILL.green, 13), bx(14, 52, 292, 26, '× 岩石の色の変化のみ', C.red, FILL.red, 12), bx(14, 86, 292, 26, '× 地下水の温度', C.red, FILL.red, 12), bx(14, 120, 292, 26, '× 地震が起きた正確な日時', C.red, FILL.red, 12), ...band(150, t('柱状図 → 層の重なり・深さが分かる', 185, 14, C.purple))),
      },
    ],
    '同じ層の深さが地点でちがう → 地層が傾いた・ずれた',
  );
}

// ════════════════════════════════════════════
// 星座は1か月でおよそ30度西へ
// ════════════════════════════════════════════
const SC = { x: 160, y: 80, R: 48 };
const ann = (a0: number, a1: number, r0: number, r1: number, col: string, fill: string): E => {
  const pts: [number, number][] = [];
  for (let a = a0; a <= a1; a += 5) pts.push([SC.x + r1 * Math.cos((a * Math.PI) / 180), SC.y - r1 * Math.sin((a * Math.PI) / 180)]);
  for (let a = a1; a >= a0; a -= 5) pts.push([SC.x + r0 * Math.cos((a * Math.PI) / 180), SC.y - r0 * Math.sin((a * Math.PI) / 180)]);
  return pg(pts, col, fill);
};
function kenmei010Stars(): Figure {
  const monthLabels: E[] = Array.from({ length: 12 }, (_, m) => {
    const a = ((90 + 30 * m) * Math.PI) / 180;
    return lb(SC.x + 63 * Math.cos(a), SC.y - 63 * Math.sin(a), `${m + 1}月`, 9, C.gray);
  });
  const sunS: E = ci(SC.x, SC.y, 16, '太陽', C.main, FILL.yellow, 9);
  const earthAt = (m: number): E => ci(SC.x + SC.R * Math.cos(((90 + 30 * m) * Math.PI) / 180), SC.y - SC.R * Math.sin(((90 + 30 * m) * Math.PI) / 180), 6, undefined, C.blue, FILL.blue);
  const ticks: E[] = [];
  for (let i = 0; i <= 30; i++) ticks.push(ln(40 + 8 * i, i % 10 === 0 ? 58 : 64, 40 + 8 * i, 78, C.gray, false, i % 10 === 0 ? 2 : 1));
  return show(
    [
      {
        note: '同じ時刻に星座を観察すると、星座は1か月でおよそ何度、西へ動いて見えるでしょう。❓星座の見える位置が、月ごとにかわるのはなぜでしょう。',
        add: [...orbit(SC.x, SC.y, SC.R), ...monthLabels, sunS, earthAt(0), ...band(150, t('1か月で 約何度？', 185, 15))],
      },
      {
        note: '❓星座が動いて見える原因は？→地球が太陽のまわりを、1年で1周（公転）しているからです。地球の位置がかわるので、夜に見える方向が少しずつかわります。',
        add: [ar(156, 32, 140, 36, C.blue), lb(SC.x, 108, '1年で1周', 10, C.blue, 'middle', true), ...band(150, t('地球は 1年で 太陽を1周', 185, 14, C.blue))],
      },
      {
        note: '❓1年で何度回る？→1周は360度です。地球が1周して元の位置にもどると、星座も1年で360度ぶん動いて、元の見え方にもどります。',
        add: [...orbit(SC.x, SC.y, SC.R, C.purple, true), cover(108, 100, 104, 20), lb(SC.x, 110, '1周＝360度', 11, C.purple, 'middle', true), ...band(150, t('1年 ＝ 360度', 185, 18, C.purple))],
      },
      {
        note: '❓1か月では？→1年は12か月です。360度を12か月に分けると、1か月で360÷12＝30度。地球が30度ぶん回るので、星座も30度ずれて見えます。',
        add: [ann(90, 120, 18, SC.R, C.red, FILL.red), lb(153, 53, '30度', 10, C.red, 'middle', true), ...band(150, t('360÷12＝30度', 185, 18, C.red))],
      },
      {
        note: '❓12か月ぶんを集めると？→30度のおうぎ形が12こ集まり、ちょうど1周になります。30×12＝360度で、つじつまが合います。',
        add: fresh(...Array.from({ length: 12 }, (_, i) => ann(90 + 30 * i, 120 + 30 * i, 18, SC.R, C.gray, i % 2 === 0 ? FILL.blue : FILL.yellow)), sunS, ...monthLabels, ...band(150, t('30度 × 12か月 ＝ 360度', 185, 16, C.purple))),
      },
      {
        note: '❓1日あたりでは？→1年365日で360度回るので、360÷365で、1日では約1度ずつずれます。❓では30日では？→約1度×30日＝約30度です。',
        add: fresh(ln(40, 78, 280, 78, C.ink, false, 2), ...ticks, bx(40, 64, 8, 14, undefined, C.red, FILL.red), lb(44, 48, '1日＝約1度', 10, C.red, 'start', true), ln(40, 92, 280, 92, C.purple, false, 2), lb(160, 108, '30日で 約1度×30＝約30度', 12, C.purple, 'middle', true), ...band(150, t('1日 約1度 → 30日 約30度', 185, 15, C.purple))),
      },
      {
        note: '答えは約30度。❓確かめは？→1日約1度を30日ぶんで約30度、1か月30度を12か月ぶんで360度。ちょうど1年で1周になります。❓よくあるまちがいは？→約1度は「1日」のずれで、「1か月」ではありません。',
        add: fresh(...flow(['1日 約1度', '1か月 約30度', '1年 360度'], 44, { h: 44, size: 12 }).flat(), lb(107, 36, '×30', 11, C.red, 'middle', true), lb(213, 36, '×12', 11, C.red, 'middle', true), ...band(150, t('答え 約30度', 185, 20, C.green))),
      },
    ],
    '星座は1年で360度 → 1か月で 360÷12＝約30度',
  );
}

// ════════════════════════════════════════════
export const figuresSchoolChugaku06: Record<string, Figure> = {
  otemon_rika_009: leverO(),
  otemon_rika_010: spr(35),
  otemon_rika_011: bulbs('❓2つをくらべると？→直列は電流が①の半分、並列は①のままです。電流が小さい直列のほうが、豆電球は暗くなります。', '直列のほうが 暗い（電流½ ＜ ①）'),
  otemon_rika_018: otemon018(),
  otemon_rika_020: otemon020(),
  poole_sansu_001: disc(2000, 'pct'),
  poole_sansu_008: tsuru({ low: ['パン', 80], high: ['ケーキ', 120], n: 10, total: 1000, assume: 'high', u: '個' }),
  poole_sansu_010: poole010(),
  poole_sansu_014: vol(4, 5, 6),
  poole_sansu_015: tsuru({ low: ['えんぴつ', 60], high: ['ペン', 100], n: 15, total: 1180, assume: 'low', u: '本' }),
  poole_sansu_017: poole017(),
  poole_rika_004: leverP(),
  poole_rika_010: spr(30),
  poole_rika_014: bulbs('❓2つをくらべると？→並列は電流が①のまま、直列は半分の½です。電流が大きい並列のほうが、豆電球は明るくなります。', '並列のほうが 明るい（電流① ＞ ½）'),
  poole_rika_016: poole016(),
  kenmei_sansu_001: disc(3000, 'wari'),
  kenmei_sansu_009: kenmei009(),
  kenmei_sansu_010: kenmei010(),
  kenmei_sansu_011: vol(5, 6, 4),
  kenmei_sansu_012: tsuru({ low: ['鉛筆', 80], high: ['ボールペン', 120], n: 20, total: 1920, assume: 'low', u: '本' }),
  kenmei_sansu_015: kenmei015(),
  kenmei_sansu_018: kenmei018(),
  kenmei_rika_007: kenmei007(),
  kenmei_rika_010: kenmei010Stars(),
  kenmei_rika_017: spr(30),
  kankan_top_sansu_001: disc(1200, 'wari'),
};
