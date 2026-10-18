// 入試傾向問題（理科・数学）の動く図解スライド（koko 01）。
// キーは問題 id。「なぜ？→答え→では、なぜ？」の連鎖で、根っこまでたどる形で書く。
// 画面の上半分に図、下の帯（band）に、そのスライドの式やひとこと、という配置。
import type { DiagramElement, Figure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, sc, show, band, fresh, flow, stack, dots, cover } from './diagram-kit';

type E = DiagramElement;
// 下の帯用の箱（横いっぱい）と、中央ぞろえの文字
const eb = (y: number, t: string, color: string, fill: string, size = 14, h = 30, x = 20, w = 280): E => bx(x, y, w, h, t, color, fill, size);
const tx = (y: number, t: string, size = 12, color: string = C.gray, bold = false): E => lb(160, y, t, size, color, 'middle', bold);
// 上に図、下の帯に式、の形（前のスライドの図に描き足す）
const T = (top: E[], bottom: E[]): E[] => [...top, ...band(140, ...bottom)];
// まっさらにして、上に図、下の帯に式、の形
const F = (top: E[], bottom: E[]): E[] => fresh(...top, ...bottom);
const L = (x: number, y: number, t: string, size = 12, color: string = C.ink, bold = false, anchor: 'start' | 'middle' | 'end' = 'middle'): E => lb(x, y, t, size, color, anchor, bold);
const WATER = 'rgba(14,165,233,0.18)';
const GREY_A = 'rgba(110,100,92,0.18)';

// ばね（縦のギザギザ）
const spring = (x: number, y0: number, y1: number, color: string = C.gray): E[] => {
  const out: E[] = [];
  const n = 8;
  const top = y0 + 6;
  const bot = y1 - 6;
  out.push(ln(x, y0, x, top, color, false, 2));
  let px = x;
  let py = top;
  for (let i = 0; i < n; i++) {
    const nx = x + (i % 2 === 0 ? 9 : -9);
    const ny = top + ((bot - top) * (i + 1)) / (n + 1);
    out.push(ln(px, py, nx, ny, color, false, 2));
    px = nx;
    py = ny;
  }
  out.push(ln(px, py, x, bot, color, false, 2));
  out.push(ln(x, bot, x, y1, color, false, 2));
  return out;
};

// ── 理科 ──────────────────────────────────────────

// 電熱線の発熱と水温（6V・2A・2分・水100g）
const r29: Figure = show([
  {
    note: '6Vの電圧で2Aの電流を2分間流し、抵抗から出る熱で水100gを温めます。水温は何℃上がるでしょう。図に問題の数値を書きこみました。',
    add: F([ci(40, 70, 26, '6V', C.blue, FILL.blue, 16), ar(66, 70, 104, 70, C.gray), bx(106, 46, 84, 48, '抵抗\n2A', C.red, FILL.red, 14), ar(192, 70, 216, 70, C.red), bx(218, 36, 80, 68, '水\n100g', C.blue, FILL.blue, 14), L(204, 56, '熱', 12, C.red, true)], [eb(152, '2分間 電流を流す', C.blue, FILL.blue, 15), tx(206, '水温は何℃上がるか？', 13, C.gray, true)]),
  },
  {
    note: '❓ なぜ電流を流すと熱が出るの？ 電気のもつエネルギーが、抵抗の中で熱に変わるからです。1秒あたりに変わる量を「電力」といい、電圧×電流で決まります。',
    add: F(flow(['電気エネルギー', '熱'], 40, { h: 50, color: C.red, fill: FILL.red, size: 14 }).flat(), [eb(152, '電力(W) ＝ 電圧(V) × 電流(A)', C.blue, FILL.blue, 14), tx(206, '1Wは、1秒あたり1Jの熱', 12, C.gray)]),
  },
  {
    note: '電力は 6×2 ＝ 12W。12Wは「1秒ごとに12Jの熱が出る」という意味です。電流を流しているあいだ、毎秒12Jずつ熱がたまっていきます。',
    add: F([L(160, 22, '1秒ごとに出る熱', 12, C.gray, true), ...[0, 1, 2, 3, 4].flatMap((i) => [bx(20 + i * 48, 36, 42, 40, '12J', C.red, FILL.red, 13), L(41 + i * 48, 92, `${i + 1}秒目`, 10, C.gray)]), L(284, 58, '…', 18, C.gray, true)], [eb(152, '6 × 2 ＝ 12W ＝ 毎秒12J', C.red, FILL.red, 15), tx(206, '流しているかぎり 毎秒12Jずつ増える', 12, C.gray)]),
  },
  {
    note: '❓ 電流を流した時間は2分です。なぜ秒になおすの？ 12Wは「1秒あたり」の量だからです。時間の単位を秒にそろえないと、かけ算が合いません。1分＝60秒なので2分＝120秒。',
    add: F([bx(20, 40, 136, 34, '60秒', C.blue, FILL.blue, 15), bx(164, 40, 136, 34, '60秒', C.blue, FILL.blue, 15), L(88, 92, '1分', 11, C.gray), L(232, 92, '1分', 11, C.gray), L(160, 116, '2分 ＝ 120秒', 15, C.blue, true)], [eb(152, '2 × 60 ＝ 120秒', C.blue, FILL.blue, 16), tx(206, '毎秒12J が 120秒ぶん', 12, C.gray)]),
  },
  {
    note: '毎秒12Jが120秒ぶんなので、出た熱の合計は 12×120 ＝ 1440J です。ここまでが「電気から熱を求める」部分です。',
    add: F([bx(20, 30, 280, 36, '12J × 120秒', C.red, FILL.red, 16), ar(160, 70, 160, 96, C.red), bx(90, 98, 140, 34, '1440J', C.red, FILL.red, 18)], [eb(152, '熱量 ＝ 12 × 120 ＝ 1440J', C.red, FILL.red, 16), tx(206, 'この熱がすべて水に伝わる', 12, C.gray)]),
  },
  {
    note: '❓ では、その熱で水は何℃上がるの？ 問題では「水1gを1℃上げるのに4.2J」です。水が100gなら、1℃上げるのに100倍の 4.2×100 ＝ 420J が必要になります。',
    add: F([bx(20, 34, 100, 50, '水 1g', C.blue, FILL.blue, 15), L(70, 100, '1℃ → 4.2J', 12, C.blue, true), bx(190, 22, 110, 76, '水 100g', C.blue, FILL.blue, 15), L(245, 116, '1℃ → 420J', 12, C.red, true), ar(122, 60, 188, 60, C.gray)], [eb(152, '4.2 × 100 ＝ 420J で 1℃', C.blue, FILL.blue, 15), tx(206, '水が100倍なら、必要な熱も100倍', 12, C.gray)]),
  },
  {
    note: '❓ なぜ 1440 を 420 で割るの？ 1℃上げるごとに420Jが必要だからです。1440Jの中に420Jが何個入るかが、上がる温度になります。3個と少し入ります。',
    add: F([...[0, 1, 2].flatMap((i) => [bx(20 + i * 81.7, 50, 80, 40, '420J', C.blue, FILL.blue, 13), L(60 + i * 81.7, 38, '＋1℃', 11, C.blue, true)]), bx(265, 50, 35, 40, '180J', C.gray, FILL.gray, 11), L(282, 38, 'あまり', 10, C.gray), L(160, 112, '全体 1440J', 12, C.gray, true)], [eb(152, '1440 ÷ 420 ＝ 3.42…', C.blue, FILL.blue, 16), tx(206, '420Jが3個と少し ＝ 3℃と少し', 12, C.gray)]),
  },
  {
    note: '水温の上昇は、四捨五入して約3.4℃です。答えは「約3.4℃上昇する」。',
    add: F(flow(['1440J', '÷ 420J', '約3.4℃'], 50, { h: 44, color: C.green, fill: FILL.green, size: 14 }).flat(), [eb(152, '答え 約3.4℃ 上昇', C.green, FILL.green, 18)]),
  },
  {
    note: '確かめ（検算）です。3.4×420 ＝ 1428 で、1440Jにほぼ一致します。別の方法では、水1gあたり 1440÷100 ＝ 14.4J が入り、1gを1℃上げるのに4.2Jなので 14.4÷4.2 ≒ 3.4℃ です。',
    add: F([eb(12, '3.4 × 420 ＝ 1428 ≒ 1440', C.blue, FILL.blue, 15, 32), eb(56, '1gあたり 1440÷100 ＝ 14.4J', C.blue, FILL.blue, 14, 32), eb(100, '14.4 ÷ 4.2 ≒ 3.4℃', C.green, FILL.green, 16, 32)], [tx(170, 'どちらの方法でも同じ', 14, C.green, true)]),
  },
  {
    note: 'よくあるまちがいは、2分を2秒のまま計算することです。12×2 ＝ 24J では 24÷420 ≒ 0.06℃ しか上がらず、ぬるくもなりません。電力は秒なので、必ず120秒にします。',
    add: F([eb(14, '2秒で計算 → 24J → 0.06℃', C.red, FILL.red, 15, 36), eb(64, '120秒で計算 → 1440J → 3.4℃', C.green, FILL.green, 15, 36)], [tx(150, '×', 22, C.red, true), tx(190, '時間は必ず秒になおす', 14, C.gray, true)]),
  },
], '電熱線の発熱と水温の上昇');

// 浮いている物体の沈んだ体積
const r31: Figure = show([
  {
    note: '体積500cm³・質量450gの物体が、水に浮かんでいます。水の密度は1g/cm³。水に沈んでいる部分の体積を求めます。',
    add: F([bx(40, 40, 240, 86, undefined, C.blue, WATER), ln(40, 40, 280, 40, C.blue, false, 2), bx(115, 32, 90, 80, '物体', C.main, FILL.yellow, 15), L(160, 20, '体積500cm³  質量450g', 12, C.ink, true), L(75, 116, '水 1g/cm³', 11, C.blue, true)], [eb(152, '沈んでいる体積は？', C.blue, FILL.blue, 15), tx(206, '水面より下にある部分の体積', 12, C.gray)]),
  },
  {
    note: '❓ 浮いて止まっているとき、どんな力がつり合っているの？ 下向きの重力と、上向きの浮力です。止まっているのは、この2つが同じ大きさだからです。',
    add: T([ar(140, 72, 140, 128, C.red), L(132, 126, '重力', 12, C.red, true, 'end'), ar(180, 112, 180, 58, C.green), L(188, 66, '浮力', 12, C.green, true, 'start')], [eb(152, '重力 ＝ 浮力（つり合い）', C.green, FILL.green, 16), tx(206, '質量450gの物体の重さは 4.5N', 12, C.gray)]),
  },
  {
    note: '❓ では浮力の大きさは何で決まるの？ アルキメデスの原理で、「物体が押しのけた水の重さ」と同じです。水中にある部分と同じ体積の水が、物体に押しのけられています。',
    add: F([bx(40, 40, 240, 86, undefined, C.blue, WATER), ln(40, 40, 280, 40, C.blue, false, 2), bx(115, 32, 90, 80, undefined, C.main, FILL.yellow), bx(115, 40, 90, 72, '押しのけた\n水の体積', C.blue, 'rgba(14,165,233,0.35)', 12)], [eb(152, '浮力 ＝ 押しのけた水の重さ', C.blue, FILL.blue, 15), tx(206, '水中にある部分と同じ体積の水', 12, C.gray)]),
  },
  {
    note: '❓ 押しのけた水は何gぶん？ 浮力は重力とつり合って4.5Nなので、押しのけた水の重さも4.5N、つまり質量450gです。',
    add: F(flow(['浮力\n4.5N', '水の重さ\n4.5N', '水\n450g'], 40, { h: 56, color: C.blue, fill: FILL.blue, size: 13 }).flat(), [eb(152, '4.5Nの重さの水 ＝ 450g', C.blue, FILL.blue, 15), tx(206, '100gの重さが1Nだから', 12, C.gray)]),
  },
  {
    note: '❓ 450gの水の体積は？ 水は1cm³で1gです。だから450gの水は 450÷1 ＝ 450cm³ です。',
    add: F([bx(20, 36, 120, 44, '1cm³ → 1g', C.blue, FILL.blue, 15), ar(146, 58, 174, 58, C.gray), bx(180, 36, 120, 44, '450cm³ → 450g', C.blue, FILL.blue, 13)], [eb(152, '450g ÷ 1g/cm³ ＝ 450cm³', C.blue, FILL.blue, 15), tx(206, '水の密度1なら 数字が同じになる', 12, C.gray)]),
  },
  {
    note: '❓ この450cm³は、物体のどこの体積？ 押しのけた水の体積は、水中に沈んでいる部分の体積です。物体の450cm³ぶんが水中にあり、残り50cm³が水面の上に出ています。',
    add: F([bx(40, 40, 240, 86, undefined, C.blue, WATER), ln(40, 40, 280, 40, C.blue, false, 2), bx(115, 32, 90, 8, undefined, C.gray, FILL.gray), bx(115, 40, 90, 72, '水中\n450cm³', C.main, 'rgba(14,165,233,0.35)', 13), L(214, 26, '水面上 50cm³', 11, C.gray, true, 'start')], [eb(152, '沈んでいる体積 ＝ 450cm³', C.green, FILL.green, 16), tx(206, '全体500 − 水面上50 ＝ 450', 12, C.gray)]),
  },
  {
    note: '答えは450cm³です。',
    add: F([bx(20, 40, 280, 40, '物体 500cm³', C.main, FILL.yellow, 15), bx(20, 90, 252, 30, '水中 450cm³', C.blue, FILL.blue, 14), bx(272, 90, 28, 30, '50', C.gray, FILL.gray, 11)], [eb(152, '答え 450cm³', C.green, FILL.green, 18)]),
  },
  {
    note: '確かめ（検算）です。物体の密度は 450÷500 ＝ 0.9g/cm³ で、水の1より小さいので浮きます。沈む割合は 450÷500 ＝ 0.9 で、密度と同じになっています。',
    add: F([bx(20, 40, 252, 36, '沈む 450', C.blue, FILL.blue, 14), bx(272, 40, 28, 36, '50', C.gray, FILL.gray, 11), L(160, 98, '450 ÷ 500 ＝ 0.9（90%）', 14, C.ink, true)], [eb(152, '物体の密度 ＝ 450÷500 ＝ 0.9', C.green, FILL.green, 15), tx(206, '1より小さいので、水に浮く', 12, C.gray)]),
  },
  {
    note: 'よくあるまちがいは、物体全体の500cm³を答えにすることです。500cm³すべてが沈むと浮力は5Nになり、重さ4.5Nより大きく、物体は押し上げられてしまいます。',
    add: F([ar(100, 110, 100, 30, C.green), L(100, 122, '500cm³沈むと 5N', 11, C.green, true), ar(220, 30, 220, 102, C.red), L(220, 122, '重さは 4.5N', 11, C.red, true), L(160, 70, '＞', 22, C.ink, true)], [eb(152, '浮力5N ＞ 重さ4.5N → つり合わない', C.red, FILL.red, 13), tx(206, 'だから 500cm³ ではない', 12, C.gray)]),
  },
  {
    note: '❓ なぜ水だと体積と質量の数字が同じになるの？ 1cm³が1gだからです。もし密度1.2g/cm³の塩水なら、450gぶんの体積は 450÷1.2 ＝ 375cm³ で、沈む体積は小さくなります。',
    add: F([bx(20, 30, 130, 50, '水 1g/cm³\n450÷1 ＝ 450cm³', C.blue, FILL.blue, 12), bx(170, 30, 130, 50, '塩水 1.2g/cm³\n450÷1.2 ＝ 375cm³', C.purple, FILL.purple, 12), L(160, 104, '濃い液体ほど、少ししか沈まない', 12, C.gray, true)], [eb(152, '沈む体積 ＝ 質量 ÷ 液体の密度', C.blue, FILL.blue, 15), tx(206, '水は密度1だから 数字が同じ', 12, C.gray)]),
  },
], '浮力と、水に沈んでいる体積');

// 並列のばねの伸び
const r35: Figure = show([
  {
    note: '天井から、ばねAとばねBを並べてつるし、質量3kgのおもりをつけます。Aは100N/m、Bは200N/m。2本の伸びは等しいものとして、全体の伸びを求めます。',
    add: F([ln(60, 14, 260, 14, C.ink, false, 3), ...spring(110, 14, 84, C.blue), ...spring(210, 14, 84, C.purple), ln(110, 84, 110, 92, C.gray), ln(210, 84, 210, 92, C.gray), bx(90, 92, 140, 32, 'おもり 3kg', C.main, FILL.yellow, 14), L(92, 54, 'A', 14, C.blue, true, 'end'), L(228, 54, 'B', 14, C.purple, true, 'start'), L(60, 50, '100N/m', 10, C.blue, false, 'middle'), L(268, 50, '200N/m', 10, C.purple, false, 'middle')], [eb(152, '伸びは何cm？', C.blue, FILL.blue, 15), tx(206, '2本は並べて（並列に）つるしてある', 12, C.gray)]),
  },
  {
    note: '❓ 「100N/m」とは何のこと？ 1m（100cm）伸ばすのに100Nの力が要る、という意味です。ならば1cmなら100÷100 ＝ 1N。つまりAは「1cm伸ばすのに1N」、Bは「1cm伸ばすのに2N」です。',
    add: F([bx(20, 28, 130, 50, 'A\n1m伸ばす→100N', C.blue, FILL.blue, 12), bx(170, 28, 130, 50, 'B\n1m伸ばす→200N', C.purple, FILL.purple, 12), ar(85, 82, 85, 104, C.blue), ar(235, 82, 235, 104, C.purple), L(85, 118, '1cm → 1N', 13, C.blue, true), L(235, 118, '1cm → 2N', 13, C.purple, true)], [eb(152, '÷100 で 1cmあたりの力に', C.gray, FILL.gray, 14), tx(206, '100cm ＝ 1m だから', 12, C.gray)]),
  },
  {
    note: '❓ おもりの重さは？ 質量3kgで、g＝10なので 3×10 ＝ 30N の重力がはたらきます（100gで1Nなので3000g＝30N でも同じ）。ばねは、この30Nを支える必要があります。',
    add: F([bx(110, 40, 100, 36, 'おもり 3kg', C.main, FILL.yellow, 14), ar(160, 78, 160, 128, C.red), L(180, 108, '重力 30N', 13, C.red, true, 'start')], [eb(152, '3 × 10 ＝ 30N', C.red, FILL.red, 18), tx(206, '2本のばねで、合わせて30Nを支える', 12, C.gray)]),
  },
  {
    note: '❓ 2本並べると、力はどう分かれるの？ 同じだけ伸びたとき、Aは上向きに引き上げ、Bも上向きに引き上げます。2本の引き上げる力を足した分が、おもりの30Nを支えます。',
    add: F([ln(60, 14, 260, 14, C.ink, false, 3), ...spring(110, 14, 80, C.blue), ...spring(210, 14, 80, C.purple), bx(90, 88, 140, 30, 'おもり', C.main, FILL.yellow, 13), ar(130, 86, 130, 40, C.green), ar(230, 86, 230, 40, C.green), ar(160, 120, 160, 138, C.red), L(174, 130, '重力 30N', 11, C.red, true, 'start'), L(130, 34, '力', 11, C.green, true), L(230, 34, '力', 11, C.green, true)], [eb(152, 'A の力 ＋ B の力 ＝ 30N', C.green, FILL.green, 16), tx(206, '同じ伸びなら、力は足し算できる', 12, C.gray)]),
  },
  {
    note: '❓ では、1cm伸びたとき、2本で合わせて何Nの力になる？ Aが1N、Bが2Nなので、合わせて 1＋2 ＝ 3N。これが「2本を合わせて1cm伸ばすのに必要な力」です。',
    add: F([bx(20, 34, 120, 40, 'A  1cmで 1N', C.blue, FILL.blue, 14), bx(180, 34, 120, 40, 'B  1cmで 2N', C.purple, FILL.purple, 14), L(160, 54, '＋', 20, C.ink, true), ar(160, 84, 160, 104, C.green), bx(70, 106, 180, 30, '合わせて 1cmで 3N', C.green, FILL.green, 14)], [eb(152, '1 ＋ 2 ＝ 3N（1cmあたり）', C.green, FILL.green, 15), tx(206, '並列は、ばねの強さの足し算', 12, C.gray)]),
  },
  {
    note: '❓ 何cm伸びれば30Nになるの？ ばねの力は伸びに比例します。1cmで3N、2cmで6N、3cmで9N…と増えるので、30Nになるのは 30÷3 ＝ 10cm のときです。',
    add: F([bx(20, 30, 50, 30, '1cm', C.gray, FILL.gray, 12), bx(74, 30, 50, 30, '2cm', C.gray, FILL.gray, 12), bx(128, 30, 50, 30, '3cm', C.gray, FILL.gray, 12), bx(250, 30, 50, 30, '10cm', C.green, FILL.green, 13), L(45, 82, '3N', 13, C.blue, true), L(99, 82, '6N', 13, C.blue, true), L(153, 82, '9N', 13, C.blue, true), L(210, 46, '…', 18, C.gray, true), L(275, 82, '30N', 13, C.green, true)], [eb(152, '30 ÷ 3 ＝ 10cm', C.green, FILL.green, 18), tx(206, '3Nが 10回ぶんで 30N', 12, C.gray)]),
  },
  {
    note: '答えは10cm（0.1m）です。',
    add: F([ln(60, 14, 260, 14, C.ink, false, 3), ...spring(110, 14, 100, C.blue), ...spring(210, 14, 100, C.purple), bx(90, 108, 140, 28, 'おもり', C.main, FILL.yellow, 13), ar(262, 40, 262, 100, C.red), L(272, 70, '伸び\n10cm', 13, C.red, true, 'start')], [eb(152, '答え 10cm（0.1m）', C.green, FILL.green, 18)]),
  },
  {
    note: '❓ なぜ並列にすると、伸びが小さくなるの？ 1本ずつなら、Aだけで30÷1 ＝ 30cm、Bだけで30÷2 ＝ 15cm。2本で力を分けて支えると、1cmあたり3Nの強いばねになり、伸びは10cmですみます。',
    add: F([bx(20, 26, 180, 26, 'Aだけ 30cm', C.blue, FILL.blue, 13), bx(20, 60, 90, 26, 'Bだけ 15cm', C.purple, FILL.purple, 13), bx(20, 94, 60, 26, '並列 10cm', C.green, FILL.green, 11), L(216, 40, '1cmあたり 1N', 11, C.blue, true, 'start'), L(126, 74, '1cmあたり 2N', 11, C.purple, true, 'start'), L(96, 108, '1cmあたり 3N', 11, C.green, true, 'start')], [eb(152, '本数がふえる → 強くなる → 伸びが小さい', C.green, FILL.green, 13), tx(206, '30÷1 ＝ 30、30÷2 ＝ 15、30÷3 ＝ 10', 12, C.gray)]),
  },
  {
    note: '確かめ（検算）です。10cm伸びたとき、Aは 10×1 ＝ 10N、Bは 10×2 ＝ 20N の力で引き上げます。10＋20 ＝ 30Nで、おもりの重さ30Nとちょうどつり合います。',
    add: F([bx(90, 80, 140, 30, 'おもり 30N', C.main, FILL.yellow, 13), ar(110, 78, 110, 30, C.blue), ar(210, 78, 210, 30, C.purple), L(110, 22, 'A: 10N', 14, C.blue, true), L(210, 22, 'B: 20N', 14, C.purple, true)], [eb(152, '10 ＋ 20 ＝ 30N ✓', C.green, FILL.green, 17), tx(206, '重さ30Nと一致', 13, C.green, true)]),
  },
  {
    note: 'よくあるまちがいは、並列と直列を混ぜることです。もし1本につないだ直列なら、同じ30NがAにもBにもかかり、Aは30cm、Bは15cm、合わせて45cm伸びます。並列は10cmです。',
    add: F([L(80, 18, '直列', 13, C.red, true), ln(80, 26, 80, 30, C.ink), ...spring(80, 30, 70, C.blue), ...spring(80, 70, 100, C.purple), L(118, 50, 'A 30cm', 11, C.blue, true, 'start'), L(118, 86, 'B 15cm', 11, C.purple, true, 'start'), L(240, 18, '並列', 13, C.green, true), ...spring(240, 30, 100, C.blue), L(262, 66, '10cm', 12, C.green, true, 'start')], [eb(152, '直列 30＋15 ＝ 45cm', C.red, FILL.red, 14, 28), eb(186, '並列 10cm（これが答え）', C.green, FILL.green, 14, 28)]),
  },
], '並列につないだばねの伸び');

// モーターの効率
const r36: Figure = show([
  {
    note: 'モーターに6Vの電圧をかけ、2Aの電流を流したところ、1秒間に9Jの仕事をしました。効率は何%でしょう。',
    add: F([bx(20, 34, 80, 60, '電気\n6V・2A', C.blue, FILL.blue, 13), ar(104, 64, 124, 64, C.gray), ci(160, 64, 30, 'モーター', C.main, FILL.yellow, 12), ar(194, 64, 214, 64, C.gray), bx(218, 34, 82, 60, '仕事\n1秒で9J', C.green, FILL.green, 13)], [eb(152, '効率は何%？', C.blue, FILL.blue, 16), tx(206, '物体を持ち上げる仕事', 12, C.gray)]),
  },
  {
    note: '❓ 効率とは何でしょう？ モーターに入れた電気エネルギーのうち、仕事に使えたものの割合です。全部が仕事になるわけではなく、一部は熱や音になって逃げていきます。',
    add: F([bx(20, 26, 100, 50, '入れた\n電気エネルギー', C.blue, FILL.blue, 12), ar(124, 50, 150, 34, C.green), ar(124, 50, 150, 68, C.red), bx(154, 18, 146, 34, '仕事（使えた）', C.green, FILL.green, 13), bx(154, 60, 146, 34, '熱・音（逃げた）', C.red, FILL.red, 13)], [eb(152, '効率 ＝ 使えた ÷ 入れた', C.blue, FILL.blue, 16), tx(206, '100%にはならない', 12, C.gray)]),
  },
  {
    note: '❓ 入れた電気エネルギーは？ 電力は 電圧×電流 ＝ 6×2 ＝ 12W。12Wは毎秒12Jなので、1秒間に入れたエネルギーは12Jです。',
    add: F([bx(40, 30, 240, 44, '6V × 2A ＝ 12W', C.blue, FILL.blue, 17), ar(160, 78, 160, 100, C.blue), bx(90, 102, 140, 32, '1秒で 12J', C.blue, FILL.blue, 15)], [eb(152, '入れた ＝ 12J（1秒あたり）', C.blue, FILL.blue, 15), tx(206, '電力W ＝ 1秒あたりのJ', 12, C.gray)]),
  },
  {
    note: '❓ 使えたエネルギーは？ 問題で「1秒間に9Jの仕事」と決まっています。同じ1秒で比べるので、入れた12Jと使えた9Jをそのまま比べられます。',
    add: F([bx(20, 34, 240, 34, '入れた 12J', C.blue, FILL.blue, 14), bx(20, 78, 180, 34, '仕事 9J', C.green, FILL.green, 14), L(280, 52, '1秒', 12, C.gray, true), L(240, 128, '同じ1秒で比べる', 11, C.gray)], [eb(152, '使えた ＝ 9J（1秒あたり）', C.green, FILL.green, 15), tx(206, '時間の長さをそろえて比べる', 12, C.gray)]),
  },
  {
    note: '❓ では残りの 12−9 ＝ 3J はどこへ行ったの？ エネルギーは消えないので、熱や音に変わったと考えられます。12J ＝ 9J（仕事）＋ 3J（熱や音）です。',
    add: F([bx(20, 40, 180, 40, '仕事 9J', C.green, FILL.green, 15), bx(200, 40, 60, 40, '3J', C.red, FILL.red, 15), L(110, 28, '入れた 12J の内わけ', 12, C.gray, true), L(230, 100, '熱・音', 12, C.red, true), ar(230, 88, 230, 82, C.red)], [eb(152, '12 ＝ 9 ＋ 3', C.blue, FILL.blue, 18), tx(206, 'エネルギーはなくならない', 12, C.gray)]),
  },
  {
    note: '❓ 割合にするには？ 全体（入れた12J）のうち、使えた（9J）がどれだけかを比べます。12Jを1とみて、9Jがその何倍かを出すので、9÷12 と割ります。',
    add: F([bx(20, 40, 240, 34, '12J（全体＝1）', C.blue, FILL.blue, 14), bx(20, 82, 180, 34, '9J（使えた）', C.green, FILL.green, 14), L(250, 99, '9÷12 ＝ ？', 12, C.ink, true)], [eb(152, '9 ÷ 12 ＝ 0.75', C.blue, FILL.blue, 18), tx(206, '全体に対する割合', 12, C.gray)]),
  },
  {
    note: '0.75は、100倍すると75%です。答えは75%。',
    add: F(flow(['9 ÷ 12', '0.75', '× 100'], 40, { h: 44, color: C.blue, fill: FILL.blue, size: 15 }).flat(), [eb(152, '答え 75%', C.green, FILL.green, 20)]),
  },
  {
    note: '確かめ（検算）です。12Jの75%は 12×0.75 ＝ 9J で、使えたエネルギーと合います。逃げた熱や音は残りの25%で 12×0.25 ＝ 3J、先ほどの3Jとも合っています。',
    add: F([eb(12, '12 × 0.75 ＝ 9J ✓', C.green, FILL.green, 16, 32), eb(56, '12 × 0.25 ＝ 3J ✓', C.red, FILL.red, 16, 32), eb(100, '75% ＋ 25% ＝ 100%', C.blue, FILL.blue, 16, 32)], [tx(170, '仕事と逃げた分の合計が100%', 13, C.gray, true)]),
  },
  {
    note: 'よくあるまちがいは、入れた量と使えた量を逆に割ることです。12÷9 ＝ 1.33…（133%）になり、入れた以上の仕事が出たことになって、ありえません。効率は100%を超えません。',
    add: F([eb(14, '12 ÷ 9 ＝ 1.33…（133%）', C.red, FILL.red, 16, 36), L(160, 66, '入れたより多く仕事？', 12, C.red, true), eb(84, '9 ÷ 12 ＝ 0.75（75%）', C.green, FILL.green, 16, 36)], [tx(150, '× ありえない　　○ これが正しい', 13, C.gray, true), tx(190, '効率 ＝ 使えた ÷ 入れた', 13, C.gray)]),
  },
  {
    note: '❓ なぜ効率は必ず100%より小さいの？ モーターの中のコイルに電流が流れると熱が出たり、回転部分の摩擦で熱や音が出たりするからです。完全に防ぐことはできないので、効率は100%未満になります。',
    add: F([ci(160, 64, 34, 'モーター', C.main, FILL.yellow, 12), ar(200, 52, 240, 36, C.red), L(262, 34, '熱', 13, C.red, true), ar(200, 78, 240, 94, C.red), L(264, 98, '音・摩擦', 12, C.red, true), ar(120, 64, 80, 64, C.green), L(58, 64, '仕事', 13, C.green, true)], [eb(152, '逃げる分がある → 効率 ＜ 100%', C.red, FILL.red, 14), tx(206, '今回は 25% が熱や音になった', 12, C.gray)]),
  },
], 'モーターの効率');

// 電熱線の長さ・断面積と抵抗
const r37: Figure = show([
  {
    note: '電熱線の長さを2倍にすると抵抗は何倍か。また、長さは同じで断面積（切り口の面積）を半分にすると何倍か。もとの電熱線の抵抗をRとして考えます。',
    add: F([bx(100, 44, 120, 26, undefined, C.main, FILL.yellow), L(160, 32, '長さ L', 12, C.ink, true), L(160, 84, '断面積 S（切り口）', 11, C.gray), L(160, 112, 'もとの抵抗 R', 14, C.main, true)], [eb(152, '長さ2倍 → 抵抗は？', C.blue, FILL.blue, 15, 28), eb(186, '断面積が半分 → 抵抗は？', C.blue, FILL.blue, 15, 28)]),
  },
  {
    note: '❓ 長さ2倍の電熱線って、どんなもの？ もとと同じ電熱線を、2本つないで長くしたものと同じです。長さは 2L、途中は同じ太さです。',
    add: F([bx(40, 44, 120, 26, 'R', C.main, FILL.yellow, 14), bx(160, 44, 120, 26, 'R', C.main, FILL.yellow, 14), ln(40, 32, 280, 32, C.blue, false, 2), L(160, 24, '長さ 2L', 12, C.blue, true)], [eb(152, '同じ電熱線を2本つなぐ', C.blue, FILL.blue, 15), tx(206, '太さ（断面積）は同じ S のまま', 12, C.gray)]),
  },
  {
    note: '❓ 2本をつなぐと、なぜ抵抗は足し算になるの？ 電流は1本目を通り抜けてから2本目を通ります。通りにくさが順番にたまっていくので、R＋R ＝ 2R になります。',
    add: F([ar(10, 58, 38, 58, C.green), bx(40, 42, 110, 32, 'R', C.main, FILL.yellow, 15), bx(150, 42, 110, 32, 'R', C.main, FILL.yellow, 15), ar(262, 58, 306, 58, C.green), L(160, 96, '電流は順に2本を通る', 12, C.green, true)], [eb(152, 'R ＋ R ＝ 2R', C.blue, FILL.blue, 18), tx(206, '通りにくさが順にたまる（直列）', 12, C.gray)]),
  },
  {
    note: '3本つなげば 3R、4本なら 4R です。抵抗は長さに比例します。長さ2倍のときの抵抗は2倍です。',
    add: F([bx(20, 26, 70, 22, undefined, C.main, FILL.yellow), L(106, 38, '長さ L → R', 12, C.ink, true, 'start'), bx(20, 58, 140, 22, undefined, C.main, FILL.yellow), L(176, 70, '長さ 2L → 2R', 12, C.ink, true, 'start'), bx(20, 90, 210, 22, undefined, C.main, FILL.yellow), L(240, 102, '3L → 3R', 12, C.ink, true, 'start')], [eb(152, '長さ2倍 → 抵抗2倍（比例）', C.green, FILL.green, 15), tx(206, '長さが増えた分だけ、抵抗も増える', 12, C.gray)]),
  },
  {
    note: '❓ では、断面積が半分の電熱線は？ 考え方のコツです。もとの太さSの電熱線は、太さS÷2の細い線を2本ぴったり並べたものと同じです。',
    add: F([bx(50, 34, 220, 48, undefined, C.main, FILL.yellow), bx(50, 34, 220, 24, '細い線（断面積 S÷2）', C.purple, FILL.purple, 11), bx(50, 58, 220, 24, '細い線（断面積 S÷2）', C.purple, FILL.purple, 11), L(160, 102, 'あわせて 断面積 S ＝ もとの電熱線 R', 12, C.ink, true)], [eb(152, '太さS ＝ 細い線(S÷2) が2本', C.blue, FILL.blue, 15), tx(206, '並べると、切り口の面積は足し算', 12, C.gray)]),
  },
  {
    note: '❓ 2本を並べると、なぜ抵抗は半分になるの？ 電流の通り道が2本になるので、同じ電圧でも電流が2倍流れます。R＝V÷I なので、電流が2倍なら抵抗は半分です。',
    add: F([bx(30, 26, 140, 22, '細い線 1本', C.purple, FILL.purple, 12), ar(174, 37, 212, 37, C.green), L(262, 37, '電流 I', 13, C.green, true), bx(30, 66, 140, 22, '細い線', C.purple, FILL.purple, 12), bx(30, 92, 140, 22, '細い線', C.purple, FILL.purple, 12), ar(174, 77, 212, 77, C.green), ar(174, 103, 212, 103, C.green), L(262, 90, '電流 I ＋ I\n＝ 2I', 13, C.green, true)], [eb(152, '電流2倍 → 抵抗は 1/2', C.blue, FILL.blue, 16), tx(206, '同じ電圧のとき、R ＝ V÷I', 12, C.gray)]),
  },
  {
    note: '❓ では、細い線1本の抵抗は？ もとの電熱線Rは「細い線2本を並べたもの」なので、細い線1本の抵抗の半分です。R ＝ （細い線）÷2。逆にたどると、細い線 ＝ 2R になります。',
    add: F([eb(14, 'R ＝ （細い線の抵抗）÷ 2', C.blue, FILL.blue, 15, 34), ar(160, 52, 160, 74, C.gray), eb(76, '（細い線の抵抗）＝ R × 2 ＝ 2R', C.red, FILL.red, 15, 34)], [tx(150, '断面積が半分（S÷2）の電熱線の抵抗は 2R', 13, C.red, true)]),
  },
  {
    note: '断面積が半分なら抵抗は2倍、4分の1なら4倍です。抵抗は断面積に反比例します。',
    add: F([bx(20, 26, 70, 22, undefined, C.main, FILL.yellow), L(106, 38, '断面積 S → R', 12, C.ink, true, 'start'), bx(20, 58, 140, 22, undefined, C.purple, FILL.purple), L(176, 70, 'S÷2 → 2R', 12, C.ink, true, 'start'), bx(20, 90, 280, 22, undefined, C.red, FILL.red), L(160, 102, 'S÷4 → 4R', 12, C.ink, true)], [eb(152, '断面積が半分 → 抵抗は2倍', C.green, FILL.green, 15), tx(206, '細くなるほど、抵抗は大きくなる', 12, C.gray)]),
  },
  {
    note: '❓ 長さと太さの関係を、水道のホースにたとえてみましょう。短くて太いホースは水が流れやすく、長くて細いホースは流れにくい。電熱線も同じで、長くて細いほど抵抗が大きくなります。',
    add: F([bx(20, 30, 90, 36, '短い・太い', C.green, FILL.green, 12), L(65, 82, '流れやすい（抵抗 小）', 10, C.green, true), bx(140, 40, 170, 14, '長い・細い', C.red, FILL.red, 11), L(225, 72, '流れにくい（抵抗 大）', 10, C.red, true)], [eb(152, '長い・細い ほど 抵抗が大きい', C.blue, FILL.blue, 15), tx(206, '電流の通り道のせまさで決まる', 12, C.gray)]),
  },
  {
    note: '答えです。長さが2倍になると抵抗は2倍。断面積が半分になると抵抗は2倍。確かめ（検算）として、両方いっしょに変えると 2×2 ＝ 4倍になります。長くて細い、最も流れにくい形です。',
    add: F([eb(14, '長さ2倍 → 2倍', C.green, FILL.green, 16, 32), eb(58, '断面積 1/2 → 2倍', C.green, FILL.green, 16, 32), eb(102, '両方いっしょ → 2 × 2 ＝ 4倍', C.blue, FILL.blue, 15, 32)], [tx(170, '答え 2倍 と 2倍', 16, C.green, true)]),
  },
  {
    note: 'よくあるまちがいは、「断面積が半分なら、抵抗も半分」と比例にしてしまうことです。細くなると電流の通り道がせまくなり、流れにくくなるので、抵抗は大きくなります。反比例です。',
    add: F([eb(14, '断面積が半分 → 抵抗も半分', C.red, FILL.red, 15, 34), L(160, 62, '通り道がせまくなるのに？', 12, C.red, true), eb(80, '断面積が半分 → 抵抗は2倍', C.green, FILL.green, 15, 34)], [tx(150, '× 比例　　○ 反比例', 14, C.gray, true), tx(190, '長さは比例、断面積は反比例', 13, C.gray)]),
  },
], '電熱線の長さ・断面積と抵抗');

// パスカルの原理
const pascalBase = (): E[] => [
  bx(46, 60, 40, 64, undefined, C.blue, WATER),
  bx(190, 60, 90, 64, undefined, C.blue, WATER),
  bx(46, 100, 234, 24, undefined, C.blue, WATER),
  bx(46, 48, 40, 12, 'A', C.ink, FILL.gray, 10),
  bx(190, 48, 90, 12, 'B', C.ink, FILL.gray, 10),
  L(66, 84, '10cm²', 10, C.ink, true),
  L(235, 84, '100cm²', 11, C.ink, true),
];
const r38: Figure = show([
  {
    note: '小さなピストンAの面積は10cm²、大きなピストンBの面積は100cm²で、油でつながっています。Aを50Nの力で押すと、Bを押し上げる最大の力は何Nでしょう。',
    add: F([...pascalBase(), ar(65, 22, 65, 46, C.red), L(65, 14, '50N', 12, C.red, true), ar(235, 46, 235, 22, C.green), L(235, 14, '？N', 13, C.green, true)], [eb(152, 'Bを押し上げる力は？', C.blue, FILL.blue, 16), tx(206, '油（液体）は閉じこめられている', 12, C.gray)]),
  },
  {
    note: '❓ まず「圧力」とは何でしょう？ 面積1cm²あたりにかかる力のことです。同じ力でも、せまい面積に集めるほど圧力は大きくなります。圧力＝力÷面積。',
    add: F([bx(20, 30, 100, 44, '力\n50N', C.red, FILL.red, 14), L(136, 52, '÷', 20, C.ink, true), bx(150, 30, 100, 44, '面積\n10cm²', C.blue, FILL.blue, 14), L(160, 104, '圧力 ＝ 1cm²あたりの力', 13, C.ink, true)], [eb(152, '圧力 ＝ 力 ÷ 面積', C.blue, FILL.blue, 17), tx(206, '単位は N/cm²（1cm²あたりのN）', 12, C.gray)]),
  },
  {
    note: 'Aが油に加える圧力は 50÷10 ＝ 5N/cm² です。10cm²の面が、1cm²ごとに5Nずつ油を押している、ということです。',
    add: F([L(160, 16, 'A の 10cm² の面', 12, C.gray, true), ...[0, 1, 2, 3, 4].flatMap((i) => [bx(40 + i * 48, 26, 44, 34, '5N', C.red, FILL.red, 14), bx(40 + i * 48, 64, 44, 34, '5N', C.red, FILL.red, 14)]), L(160, 116, '1cm² が10個、1個ごとに5N', 12, C.ink, true)], [eb(152, '50 ÷ 10 ＝ 5N/cm²', C.red, FILL.red, 17), tx(206, '合計 5N × 10個 ＝ 50N', 12, C.gray)]),
  },
  {
    note: '❓ なぜ液体は、押された圧力をそのまま伝えるの？ 液体の粒は自由に動けて、ぎゅっとは縮みません。ある場所を押すと、粒が周りの粒を同じように押し返し、その押す力がまわりじゅうに伝わります。',
    add: F([...[0, 1, 2, 3, 4, 5].flatMap((i) => [0, 1, 2].map((j) => ci(70 + i * 36 + (j % 2) * 16, 30 + j * 30, 10, undefined, C.blue, FILL.blue))), ar(40, 10, 40, 26, C.red), L(40, 6, '押す', 10, C.red, true), ar(250, 75, 286, 75, C.blue), ar(250, 45, 286, 30, C.blue), ar(250, 105, 286, 118, C.blue)], [eb(152, '粒が押し返し合って、まわりに伝わる', C.blue, FILL.blue, 13), tx(206, '液体は縮まないので、そのまま伝わる', 12, C.gray)]),
  },
  {
    note: 'これが「パスカルの原理」です。閉じこめた液体に加えた圧力は、同じ大きさで、液体のどこにでも伝わります。Aが加えた5N/cm²は、Bの面にも同じ5N/cm²で届きます。',
    add: F([...pascalBase(), ar(65, 22, 65, 46, C.red), L(65, 14, '50N', 12, C.red, true), L(150, 112, '5N/cm²', 11, C.blue, true), ar(122, 112, 100, 112, C.blue), ar(178, 112, 200, 112, C.blue), L(235, 112, '5N/cm²', 11, C.blue, true)], [eb(152, '圧力はどこでも同じ（5N/cm²）', C.blue, FILL.blue, 15), tx(206, '同じなのは「圧力」。力ではない', 12, C.red, true)]),
  },
  {
    note: '❓ Bが受ける力は？ Bの面積は100cm²。1cm²ごとに5Nを受けるので、100個ぶんを合わせます。5×100 ＝ 500N です。',
    add: F([bx(40, 28, 240, 46, '1cm² が 100個\n1個ごとに 5N', C.green, FILL.green, 14), ar(160, 78, 160, 98, C.green), bx(90, 100, 140, 30, '5 × 100 ＝ 500N', C.green, FILL.green, 15)], [eb(152, '圧力 × 面積 ＝ 力', C.green, FILL.green, 16), tx(206, 'B の面全体が受ける力', 12, C.gray)]),
  },
  {
    note: 'Bを押し上げる最大の力は500Nです。',
    add: F(flow(['5N/cm²', '× 100cm²', '500N'], 40, { h: 44, color: C.green, fill: FILL.green, size: 14 }).flat(), [eb(152, '答え 500N', C.green, FILL.green, 20)]),
  },
  {
    note: '確かめ（検算）です。面積は 10cm² → 100cm² で10倍になっています。受ける力も 50N → 500N で10倍。圧力が同じなら、力は面積に比例します。',
    add: F([bx(20, 30, 110, 34, '面積 10cm²', C.blue, FILL.blue, 13), ar(134, 47, 186, 47, C.gray), bx(190, 30, 110, 34, '面積 100cm²', C.blue, FILL.blue, 13), L(160, 40, '10倍', 12, C.red, true), bx(20, 84, 110, 34, '力 50N', C.red, FILL.red, 14), ar(134, 101, 186, 101, C.gray), bx(190, 84, 110, 34, '力 500N', C.red, FILL.red, 14), L(160, 94, '10倍', 12, C.red, true)], [eb(152, '面積10倍 → 力も10倍', C.green, FILL.green, 16), tx(206, '圧力が同じなら 力 ∝ 面積', 12, C.gray)]),
  },
  {
    note: '❓ 力が10倍になるなら、得をしているの？ いいえ。Aを10cm押し下げると、油は 10cm²×10cm ＝ 100cm³ 動きます。Bでは 100cm³÷100cm² ＝ 1cm しか上がりません。',
    add: F([bx(50, 70, 30, 54, undefined, C.blue, WATER), bx(190, 70, 90, 54, undefined, C.blue, WATER), bx(50, 100, 230, 24, undefined, C.blue, WATER), bx(50, 52, 30, 14, 'A', C.ink, FILL.gray, 10), bx(190, 56, 90, 14, 'B', C.ink, FILL.gray, 10), ar(32, 22, 32, 62, C.red), L(32, 14, '10cm下がる', 10, C.red, true), ar(292, 62, 292, 50, C.green), L(262, 40, '1cm上がる', 10, C.green, true)], [eb(152, '50N × 10cm ＝ 500 ＝ 500N × 1cm', C.blue, FILL.blue, 14), tx(206, '力は10倍、動く距離は1/10（仕事は同じ）', 12, C.gray)]),
  },
  {
    note: 'よくあるまちがいは、Bにも同じ50Nがかかると考えることです。同じになるのは力ではなく圧力（5N/cm²）です。面積が大きい分、力は大きくなります。',
    add: F([eb(14, 'Bの力も同じ 50N', C.red, FILL.red, 16, 34), L(160, 62, '面積が10倍なのに？', 12, C.red, true), eb(80, 'Bの圧力も同じ 5N/cm²', C.green, FILL.green, 16, 34)], [tx(150, '× 力が同じ　　○ 圧力が同じ', 14, C.gray, true), tx(190, 'だから 面積の大きいBは 力が大きい', 12, C.gray)]),
  },
], 'パスカルの原理と力の大きさ');

// フィラメントの電圧と電流のグラフ
const gX = (v: number): number => 50 + 24 * v;
const gYline = (v: number): number => 122 - 10 * v;
const gYcurve = (v: number): number => 122 - (10 * v) / (1 + 0.08 * v);
const gAxes = (): E[] => [ar(50, 122, 298, 122, C.ink), ar(50, 122, 50, 10, C.ink), L(296, 134, '電圧V', 11, C.ink, true, 'end'), L(58, 12, '電流I', 11, C.ink, true, 'start'), L(44, 132, '0', 10, C.gray, false, 'end')];
const gLineD = (): E[] => [ln(gX(0), gYline(0), gX(10), gYline(10), C.gray, true, 1.8)];
const gCurve = (color: string = C.red): E[] => {
  const o: E[] = [];
  for (let v = 0; v < 10; v++) o.push(ln(gX(v), gYcurve(v), gX(v + 1), gYcurve(v + 1), color, false, 2.6));
  return o;
};
const r44: Figure = show([
  {
    note: '電熱線（フィラメント）に加える電圧を上げていくと、電流と電圧のグラフはオームの法則の直線（点線）から、どのようにずれていくでしょう。実線が実際の測定値です。',
    add: F([...gAxes(), ...gLineD(), ...gCurve(), L(216, 26, 'オームの法則', 10, C.gray, true, 'end'), L(294, 76, '実際', 11, C.red, true, 'end')], [eb(152, '直線からどうずれる？', C.blue, FILL.blue, 15), tx(206, '電圧が高いほうで、ずれが目立つ', 12, C.gray)]),
  },
  {
    note: '❓ オームの法則どおりなら、なぜ直線になるの？ 抵抗が変わらなければ、電流は電圧に比例するからです。電圧が2倍になれば、電流も2倍。比例のグラフは原点を通る直線です。',
    add: F([...gAxes(), ...gLineD(), ci(gX(2), gYline(2), 4, undefined, C.blue, C.blue), ci(gX(4), gYline(4), 4, undefined, C.blue, C.blue), ci(gX(8), gYline(8), 4, undefined, C.blue, C.blue), L(gX(2) + 8, gYline(2) + 14, '電圧2', 10, C.blue, true, 'start'), L(gX(4) + 8, gYline(4) + 14, '電圧4（2倍）', 10, C.blue, true, 'start')], [eb(152, '抵抗が一定 → 電流は電圧に比例', C.blue, FILL.blue, 14), tx(206, '電圧2倍 → 電流2倍（直線）', 12, C.gray)]),
  },
  {
    note: '実際のグラフは、電圧が高いところで直線より下にきます。つまり、同じ電圧でも、直線より電流が小さくなっています。電流の増え方がだんだん鈍く（グラフの傾きがゆるやかに）なっています。',
    add: F([...gAxes(), ...gLineD(), ...gCurve(), ar(gX(8), gYline(8) + 2, gX(8), gYcurve(8) - 2, C.red), L(gX(8) + 6, 98, '直線より\n電流が小さい', 10, C.red, true, 'start')], [eb(152, '電圧が高いほど 下へたわむ', C.red, FILL.red, 15), tx(206, '同じ電圧なのに、電流が少ない', 12, C.gray)]),
  },
  {
    note: '❓ 電流が小さいのは、なぜ？ R＝V÷I なので、同じ電圧Vで電流Iが小さいなら、抵抗Rが大きくなったということです。電圧を上げるほど、電熱線の抵抗が大きくなっているのです。',
    add: F([eb(14, '抵抗 R ＝ 電圧 V ÷ 電流 I', C.blue, FILL.blue, 15, 34), ar(160, 52, 160, 70, C.gray), eb(72, '同じ V で I が小さい', C.red, FILL.red, 15, 34), ar(160, 110, 160, 128, C.gray)], [eb(152, '→ R が大きくなっている', C.red, FILL.red, 16), tx(206, '電圧が高いところほど抵抗が大きい', 12, C.gray)]),
  },
  {
    note: '❓ なぜ電圧を上げると抵抗が大きくなるの？ 電圧を上げると電流が増え、発熱が増えて、電熱線の温度が上がります。この温度の上昇が、抵抗を大きくします。',
    add: F([...flow(['電圧を\n上げる', '電流が\n増える', '発熱が\n増える'], 14, { h: 44, color: C.blue, fill: FILL.blue, size: 12 }).flat(), ar(160, 62, 160, 78, C.gray), ...flow(['温度が\n上がる', '抵抗が\n大きくなる'], 82, { h: 44, color: C.red, fill: FILL.red, size: 12 }).flat()], [tx(164, '原因 → 結果 の順につながっている', 13, C.gray, true)]),
  },
  {
    note: '❓ 温度が上がると、なぜ金属の抵抗が大きくなるの？ 金属の中では、電流のもとになる電子が金属の原子のあいだを進みます。温度が高いと原子が激しく振動して、電子が原子にぶつかりやすくなり、進みにくくなるからです。',
    add: F([L(85, 16, '低温', 12, C.blue, true), ...[45, 85, 125].flatMap((x) => [ci(x, 48, 9, undefined, C.gray, FILL.gray), ci(x, 106, 9, undefined, C.gray, FILL.gray)]), ar(22, 80, 148, 80, C.blue), L(85, 134, 'すいすい進める', 11, C.blue, true), L(235, 16, '高温', 12, C.red, true), ...[195, 235, 275].flatMap((x) => [ci(x, 48, 14, undefined, C.red, FILL.red), ci(x, 106, 14, undefined, C.red, FILL.red)]), ln(172, 80, 196, 66, C.blue, false, 2), ln(196, 66, 214, 94, C.blue, false, 2), ln(214, 94, 240, 68, C.blue, false, 2), ln(240, 68, 260, 92, C.blue, false, 2), ar(260, 92, 298, 80, C.blue), L(235, 134, 'ぶつかって進みにくい', 11, C.red, true)], [tx(170, '原子の振動がはげしいほど、電子は進みにくい', 12, C.gray, true)]),
  },
  {
    note: 'ここまでをまとめます。電圧が高い → 温度が高い → 抵抗が大きい → 電流が少ない。その結果、グラフは直線より下に、だんだんたわむ曲線になります。',
    add: F([...gAxes(), ...gLineD(), ...gCurve(), ar(gX(5) + 6, gYcurve(5) - 12, gX(7), gYcurve(7) - 26, C.red, true), L(gX(7) + 6, gYcurve(7) - 34, 'たわむ', 12, C.red, true, 'start')], [eb(152, '高温 → 抵抗 大 → 電流 少', C.red, FILL.red, 15), tx(206, '温度が上がるほど、電流の増え方が鈍る', 12, C.gray)]),
  },
  {
    note: '❓ では、オームの法則がまちがいなのでしょうか？ いいえ。オームの法則が成り立つのは「抵抗が変わらないとき」です。電熱線の温度を一定に保てば、グラフはきれいな直線になります。',
    add: F([...gAxes(), ...gLineD(), L(gX(6), gYline(6) - 14, '温度が一定なら直線', 12, C.green, true, 'end')], [eb(152, '法則は「抵抗が一定」のとき成立', C.green, FILL.green, 14), tx(206, '温度が変わると抵抗が変わる', 12, C.gray)]),
  },
  {
    note: '確かめです。白熱電球のフィラメントも同じ性質をもっています。スイッチを入れた直後、まだ冷たいうちは抵抗が小さく電流が大きめで、熱くなるにつれて抵抗が上がって電流が落ち着きます。',
    add: F([bx(40, 28, 100, 44, 'スイッチを\n入れた直後', C.blue, FILL.blue, 12), ar(146, 50, 174, 50, C.gray), bx(180, 28, 100, 44, '点灯して\n熱くなった後', C.red, FILL.red, 12), L(90, 92, '冷たい→抵抗 小', 11, C.blue, true), L(230, 92, '熱い→抵抗 大', 11, C.red, true)], [eb(152, '電球のフィラメントも同じ', C.blue, FILL.blue, 15), tx(206, '電流が変わる理由は、温度の変化', 12, C.gray)]),
  },
  {
    note: '答えです。電圧が高くなるほど、電流は比例の直線より小さくなり、グラフは下にたわみます。理由は、電流が増えて発熱し、温度が上がって金属の抵抗が大きくなるからです。',
    add: F([eb(10, '電圧 高', C.blue, FILL.blue, 14, 28, 20, 120), eb(10, '電流 直線より小', C.red, FILL.red, 13, 28, 160, 140), eb(46, '発熱 → 温度 上', C.red, FILL.red, 14, 28), eb(82, '抵抗 が大きくなる', C.red, FILL.red, 14, 28)], [eb(152, '答え 下へたわむ曲線', C.green, FILL.green, 17), tx(206, '発熱 → 温度上昇 → 抵抗増加', 12, C.gray)]),
  },
  {
    note: 'よくあるまちがいは、グラフの傾きが常に一定だと考えることです。傾きは電圧が高くなるほどゆるやかになります。傾きがゆるやか ＝ 同じ電圧の増加に対して電流の増え方が小さい、ということです。',
    add: F([...gAxes(), ...gCurve(), ln(gX(1), gYcurve(1) + 4, gX(3), gYcurve(3) + 4, C.green, false, 1.5), L(gX(2), gYcurve(2) + 18, '傾き 大', 10, C.green, true), ln(gX(7), gYcurve(7) - 4, gX(9), gYcurve(9) - 4, C.red, false, 1.5), L(gX(8), gYcurve(8) - 16, '傾き 小', 10, C.red, true)], [eb(152, '傾きは だんだん小さくなる', C.red, FILL.red, 15), tx(206, '× 傾きが一定　　○ しだいにゆるやか', 12, C.gray)]),
  },
], '電熱線の電圧と電流のグラフ');

// 直角にはたらく2力の合力
const r46: Figure = show([
  {
    note: '1つの物体に、60Nと80Nの2つの力が直角にはたらいています。この2つの力の合力の大きさを求めます。図は、1Nを1.5の長さで描いています。',
    add: F([ar(70, 118, 190, 118, C.blue), ar(70, 118, 70, 28, C.red), ci(70, 118, 4, undefined, C.ink, C.ink), L(130, 134, '80N', 13, C.blue, true), L(58, 74, '60N', 13, C.red, true, 'end')], [eb(152, '合力の大きさは？', C.blue, FILL.blue, 16), tx(206, '2つの力は直角に交わっている', 12, C.gray)]),
  },
  {
    note: '❓ 合力とは何でしょう？ 2つの力を、同じはたらきをする1つの力にまとめたものです。この1本の力を求めたい、というのが問題です。',
    add: T([ar(70, 118, 190, 28, C.green, true), L(140, 50, '合力（？N）', 12, C.green, true, 'start')], [eb(152, '2つの力 ＝ 1つの合力', C.green, FILL.green, 16), tx(206, '同じはたらきを1本にまとめる', 12, C.gray)]),
  },
  {
    note: '❓ 合力はどうやって作図するの？ 2つの力を2辺とする平行四辺形（ここでは長方形）をかき、そのとなりあう辺の角からとなりの角への対角線が合力になります。',
    add: T([ln(190, 118, 190, 28, C.gray, true), ln(70, 28, 190, 28, C.gray, true), ar(70, 118, 190, 28, C.green)], [eb(152, '2力を2辺とする長方形の対角線', C.green, FILL.green, 14), tx(206, '出発点から、向かいの角まで', 12, C.gray)]),
  },
  {
    note: '❓ なぜ対角線が合力になるの？ 右に80N分、そのあと上に60N分のはたらきを合わせると、ちょうど向かいの角に着きます。その「合わせた結果」を1本で表したのが対角線です。',
    add: T([ar(70, 118, 190, 118, C.blue), ar(190, 118, 190, 28, C.red), L(130, 104, '右へ80N分', 11, C.blue, true), L(200, 76, '上へ60N分', 11, C.red, true, 'start')], [eb(152, '右80 ＋ 上60 ＝ 対角線の先', C.green, FILL.green, 15), tx(206, '結果を1本で表したのが合力', 12, C.gray)]),
  },
  {
    note: '❓ 対角線の長さは、どうやって求めるの？ 長方形を対角線で切ると、2辺が60Nと80Nの直角三角形ができます。求めたい合力は、その斜辺の長さです。',
    add: F([pg([[70, 118], [190, 118], [190, 28]], C.green, 'rgba(22,163,74,0.12)'), L(130, 134, '80', 13, C.blue, true), L(200, 76, '60', 13, C.red, true, 'start'), L(118, 66, '？', 15, C.green, true), ci(70, 118, 4, undefined, C.ink, C.ink)], [eb(152, '直角三角形の「斜辺」が合力', C.green, FILL.green, 15), tx(206, '直角をはさむ2辺が 60 と 80', 12, C.gray)]),
  },
  {
    note: '❓ 直角三角形の斜辺は、なぜ三平方の定理で求まるの？ 直角三角形では、直角をはさむ2辺を1辺とする正方形の面積の和が、斜辺を1辺とする正方形の面積に等しいからです。60²＋80² ＝ 100²。',
    add: F([bx(20, 70, 48, 48, '60²\n3600', C.red, FILL.red, 11), L(76, 96, '＋', 16, C.ink, true), bx(84, 54, 64, 64, '80²\n6400', C.blue, FILL.blue, 12), L(158, 96, '＝', 16, C.ink, true), bx(168, 38, 80, 80, '？²\n10000', C.green, FILL.green, 13)], [eb(152, '3600 ＋ 6400 ＝ 10000', C.green, FILL.green, 16), tx(206, '2つの正方形の面積の和 ＝ 斜辺の正方形', 12, C.gray)]),
  },
  {
    note: '斜辺の2乗が10000。2乗して10000になる数は100です。合力の大きさは100Nです。',
    add: F([eb(14, '60² ＋ 80² ＝ 3600 ＋ 6400', C.blue, FILL.blue, 15, 32), ar(160, 50, 160, 66, C.gray), eb(68, '＝ 10000 ＝ 100²', C.blue, FILL.blue, 15, 32), ar(160, 104, 160, 120, C.gray)], [eb(152, '答え 合力 100N', C.green, FILL.green, 19)]),
  },
  {
    note: '作図でも確かめられます。1Nを1.5の長さで描いたので、対角線の長さは 150 でした。150÷1.5 ＝ 100 なので、ものさしで測っても合力は100Nと読みとれます。',
    add: F([ar(70, 118, 190, 118, C.blue), ar(70, 118, 70, 28, C.red), ln(190, 118, 190, 28, C.gray, true), ln(70, 28, 190, 28, C.gray, true), ar(70, 118, 190, 28, C.green), L(146, 62, '対角線の長さ 150', 11, C.green, true, 'start'), ci(70, 118, 4, undefined, C.ink, C.ink)], [eb(152, '150 ÷ 1.5 ＝ 100N', C.green, FILL.green, 17), tx(206, '1Nを1.5の長さで描いたから', 12, C.gray)]),
  },
  {
    note: '確かめ（検算）です。60・80・100を20で割ると 3・4・5。3:4:5は直角三角形になる有名な比で、この三角形はその20倍です。',
    add: F([pg([[30, 118], [90, 118], [90, 73]], C.gray, FILL.gray), L(60, 132, '4', 11, C.gray, true), L(98, 98, '3', 11, C.gray, true, 'start'), L(52, 92, '5', 11, C.gray, true, 'end'), L(150, 98, '×20', 16, C.red, true), pg([[190, 118], [290, 118], [290, 43]], C.green, 'rgba(22,163,74,0.12)'), L(240, 132, '80', 11, C.green, true), L(298, 82, '60', 11, C.green, true, 'start'), L(232, 76, '100', 12, C.green, true, 'end')], [eb(152, '3：4：5 の20倍 ＝ 60：80：100', C.green, FILL.green, 14), tx(206, '辺の比がぴったり合う', 12, C.gray)]),
  },
  {
    note: 'よくあるまちがいは、60＋80 ＝ 140N と足し算してしまうことです。足し算になるのは2つの力が同じ向きのときだけです。直角だと100N、反対向きなら 80−60 ＝ 20N になります。',
    add: F([bx(80, 20, 140, 22, undefined, C.red, FILL.red), L(76, 31, '同じ向き', 11, C.gray, true, 'end'), L(226, 31, '140N', 12, C.red, true, 'start'), bx(80, 54, 100, 22, undefined, C.green, FILL.green), L(76, 65, '直角', 11, C.gray, true, 'end'), L(186, 65, '100N', 12, C.green, true, 'start'), bx(80, 88, 20, 22, undefined, C.blue, FILL.blue), L(76, 99, '反対向き', 11, C.gray, true, 'end'), L(106, 99, '20N', 12, C.blue, true, 'start')], [eb(152, '向きで合力は変わる', C.blue, FILL.blue, 16), tx(206, '同じ向きが最大、反対向きが最小', 12, C.gray)]),
  },
], '直角にはたらく2力の合力');

// 斜面で引き上げる仕事
const slopeTri = (): E[] => [pg([[40, 128], [213, 128], [213, 28]], C.gray, FILL.gray)];
const blockOnSlope = (): E => {
  // 斜面の中ほどに置いた物体（30°の斜面に合わせて傾けた四角）
  const u: [number, number] = [0.866, -0.5];
  const n: [number, number] = [-0.5, -0.866];
  const p: [number, number] = [126.5, 78];
  const w = 13;
  const h = 18;
  const a: [number, number] = [p[0] - u[0] * w, p[1] - u[1] * w];
  const b: [number, number] = [p[0] + u[0] * w, p[1] + u[1] * w];
  const c: [number, number] = [b[0] + n[0] * h, b[1] + n[1] * h];
  const d: [number, number] = [a[0] + n[0] * h, a[1] + n[1] * h];
  return pg([a, b, c, d], C.main, FILL.yellow);
};
const r50: Figure = show([
  {
    note: '質量5kgの物体を、なめらかな30°の斜面に沿って一定の速さで、高さ4mまで引き上げます。g＝10として、①斜面に沿って動いた距離 ②引く力がした仕事 ③直接持ち上げた場合との比較、を求めます。',
    add: F([...slopeTri(), blockOnSlope(), L(222, 78, '高さ 4m', 12, C.blue, true, 'start'), L(92, 122, '30°', 12, C.ink, true), L(86, 60, '5kg', 12, C.main, true)], [eb(152, '①距離 ②仕事 ③直接との比較', C.blue, FILL.blue, 15), tx(206, '重さは 5×10 ＝ 50N', 12, C.gray)]),
  },
  {
    note: '❓ まず、斜面に沿って動く距離は？ 30°・60°・90°の直角三角形は、辺の比が「高さ：斜辺：底辺 ＝ 1：2：√3」と決まっています。高さ4mなら、斜辺はその2倍の 4×2 ＝ 8m です。',
    add: F([...slopeTri(), L(222, 78, '高さ 4m（1）', 12, C.blue, true, 'start'), L(112, 66, '斜辺 ？（2）', 12, C.red, true, 'end'), L(126, 122, '底辺（√3）', 11, C.gray, true), L(84, 118, '30°', 11, C.ink, true)], [eb(152, '高さ：斜辺 ＝ 1：2', C.blue, FILL.blue, 17), tx(206, '4m × 2 ＝ 8m', 14, C.red, true)]),
  },
  {
    note: '❓ なぜ 1：2：√3 なの？ 正三角形を半分に切ると、30°・60°・90°の三角形ができます。斜辺は正三角形の1辺、高さ（短い辺）はその半分なので、斜辺は高さの2倍になります。',
    add: F([pg([[110, 122], [210, 122], [160, 35]], C.gray, 'rgba(110,100,92,0.06)'), ln(160, 35, 160, 122, C.blue, true, 2), pg([[160, 122], [210, 122], [160, 35]], C.green, 'rgba(22,163,74,0.15)'), L(124, 78, '2', 14, C.red, true, 'end'), L(222, 84, '斜辺＝1辺（2）', 11, C.red, true, 'start'), L(160, 134, '半分（1）', 11, C.blue, true), L(178, 56, '30°', 10, C.ink, true, 'start'), L(192, 116, '60°', 10, C.ink, true, 'end')], [eb(152, '正三角形を半分 ＝ 30°・60°・90°', C.green, FILL.green, 14), tx(206, '1辺の半分が高さ → 斜辺は高さの2倍', 12, C.gray)]),
  },
  {
    note: '斜面に沿って動く距離は8m、これで①の答えが出ました。❓ つぎは引く力です。重さ50Nの物体を斜面の上にのせると、重さの一部が斜面を下へすべらせようとします。その分だけ支えればよいのです。',
    add: F([...slopeTri(), blockOnSlope(), ar(126.5, 78, 126.5, 120, C.red), L(134, 112, '重さ 50N', 11, C.red, true, 'start'), ar(126.5, 78, 94, 96, C.purple), L(84, 104, '斜面を下へ', 10, C.purple, true, 'end'), ar(126.5, 78, 158, 60, C.green), L(170, 54, '引く力 ？', 11, C.green, true, 'start')], [eb(152, '引く力 ＝ 斜面を下へ引く力', C.green, FILL.green, 14), tx(206, '一定の速さ → つり合い', 12, C.gray)]),
  },
  {
    note: '❓ 斜面を下へ引く力の大きさは？ 重さ50Nを「斜面に沿う分」と「斜面に垂直な分」に分けた三角形は、斜面の三角形と相似です。重さ50Nが斜面の長さ8mに、斜面に沿う力が高さ4mに対応します。',
    add: F([pg([[20, 120], [100, 120], [100, 74]], C.gray, FILL.gray), L(62, 84, '斜面の長さ\n8m', 10, C.ink, true, 'end'), L(106, 96, '高さ\n4m', 10, C.blue, true, 'start'), pg([[170, 120], [250, 120], [250, 74]], C.green, 'rgba(22,163,74,0.12)'), L(212, 84, '重さ\n50N', 10, C.ink, true, 'end'), L(256, 96, '斜面に沿う\n力 ？', 10, C.green, true, 'start'), L(160, 44, '同じ形（相似）', 13, C.red, true)], [eb(152, '50N × 4 ÷ 8 ＝ 25N', C.green, FILL.green, 17), tx(206, '斜面の三角形の辺の比で求める', 12, C.gray)]),
  },
  {
    note: '4÷8 ＝ 1/2 なので、斜面に沿う力は重さの半分の25Nです。一定の速さで引き上げるとき、引く力とこの力がつり合うので、引く力は25Nです。',
    add: F([bx(20, 30, 110, 40, '重さ 50N', C.red, FILL.red, 15), ar(134, 50, 176, 50, C.gray), L(155, 40, '× 1/2', 11, C.gray, true), bx(180, 30, 120, 40, '引く力 25N', C.green, FILL.green, 15), L(160, 100, '高さ4m ÷ 斜面8m ＝ 1/2', 13, C.ink, true)], [eb(152, '引く力 ＝ 25N', C.green, FILL.green, 18), tx(206, '直接持ち上げる50Nの、半分', 12, C.gray)]),
  },
  {
    note: '❓ つぎに仕事です。仕事は「力×力の向きに動かした距離」で求めます。斜面では 25N の力で 8m 引くので、仕事は 25×8 ＝ 200J です。',
    add: F([bx(30, 30, 100, 40, '力 25N', C.green, FILL.green, 15), L(150, 52, '×', 18, C.ink, true), bx(170, 30, 120, 40, '距離 8m', C.blue, FILL.blue, 15), ar(160, 76, 160, 98, C.gray), bx(90, 100, 140, 30, '200J', C.red, FILL.red, 18)], [eb(152, '② 25 × 8 ＝ 200J', C.red, FILL.red, 18), tx(206, '力の向きは斜面に沿う向き', 12, C.gray)]),
  },
  {
    note: '❓ では、直接まっすぐ持ち上げると？ 重さ50Nの力で4m持ち上げるので、仕事は 50×4 ＝ 200J。斜面を使っても、直接持ち上げても、仕事は同じ200Jです。',
    add: F([bx(120, 100, 80, 26, '物体', C.main, FILL.yellow, 13), ar(160, 96, 160, 36, C.green), L(176, 66, '50Nで 4m', 12, C.green, true, 'start'), ln(100, 28, 220, 28, C.gray, true), ln(100, 128, 220, 128, C.gray, false)], [eb(152, '50 × 4 ＝ 200J（直接）', C.green, FILL.green, 17), tx(206, '斜面の仕事 200J と同じ', 13, C.red, true)]),
  },
  {
    note: '❓ なぜ同じになるの？ 斜面では、力が半分になる代わりに、動く距離が2倍になります。力×距離の大きさ（長方形の面積）が変わらないのです。これを「仕事の原理」といいます。',
    add: F([bx(40, 50, 40, 60, undefined, C.blue, FILL.blue), L(60, 82, '50N\n×4m', 11, C.blue, true), L(60, 124, '直接', 11, C.gray, true), bx(150, 80, 80, 30, undefined, C.green, FILL.green), L(190, 95, '25N × 8m', 11, C.green, true), L(190, 124, '斜面', 11, C.gray, true), L(110, 96, '＝', 18, C.ink, true), L(270, 96, '同じ\n面積', 11, C.red, true)], [eb(152, '力が 1/2 → 距離が 2倍', C.green, FILL.green, 17), tx(206, '道具を使っても、仕事は変わらない', 12, C.gray)]),
  },
  {
    note: '答えは ①8m ②200J ③直接持ち上げた場合と同じ（変わらない）です。確かめ（検算）として、25N×8m ＝ 200J、50N×4m ＝ 200J で、どちらも200Jと一致します。',
    add: F([eb(12, '① 斜面の距離 8m', C.blue, FILL.blue, 15, 32), eb(56, '② 仕事 200J', C.red, FILL.red, 15, 32), eb(100, '③ 直接と同じ（変わらない）', C.green, FILL.green, 14, 32)], [tx(170, '25×8 ＝ 50×4 ＝ 200J ✓', 14, C.green, true)]),
  },
  {
    note: 'よくあるまちがいは、斜面を使うと仕事そのものが小さくなる、と思うことです。斜面で得をするのは「引く力が小さくてすむ」ことだけで、そのぶん長い距離を動かすので、仕事は変わりません。',
    add: F([eb(14, '斜面を使うと 仕事が減る', C.red, FILL.red, 15, 34), L(160, 62, '力は半分でも、距離は2倍', 12, C.red, true), eb(80, '斜面 ＝ 力が小さい（仕事は同じ）', C.green, FILL.green, 14, 34)], [tx(150, '× 仕事が減る　　○ 力が小さくなる', 14, C.gray, true), tx(190, 'らくだが、遠回り', 13, C.gray)]),
  },
], '斜面で引き上げる仕事');

// 水素と酸素の反応と、体積の比
const h2m = (x: number, y: number): E[] => [ci(x, y, 6, 'H', C.blue, FILL.blue, 8), ci(x + 11, y, 6, 'H', C.blue, FILL.blue, 8)];
const o2m = (x: number, y: number): E[] => [ci(x, y, 8, 'O', C.red, FILL.red, 9), ci(x + 15, y, 8, 'O', C.red, FILL.red, 9)];
const h2om = (x: number, y: number): E[] => [ci(x - 7, y + 8, 5, 'H', C.blue, FILL.blue, 7), ci(x + 7, y + 8, 5, 'H', C.blue, FILL.blue, 7), ci(x, y, 8, 'O', C.red, FILL.red, 9)];
const r2c14: Figure = show([
  {
    note: '水素と酸素の混合気体に点火すると水ができます（2H₂＋O₂→2H₂O）。水素4.0Lと酸素4.0Lを混ぜて反応させたとき、あとに残る気体は何で、何L残るでしょう。',
    add: F([bx(20, 26, 110, 50, '水素 4.0L', C.blue, FILL.blue, 15), L(160, 52, '＋', 20, C.ink, true), bx(190, 26, 110, 50, '酸素 4.0L', C.red, FILL.red, 15), ar(160, 84, 160, 112, C.red), L(180, 98, '点火', 12, C.red, true, 'start')], [eb(152, '反応のあとに残る気体は？', C.blue, FILL.blue, 15), tx(206, '同じ温度・同じ圧力で反応させる', 12, C.gray)]),
  },
  {
    note: '❓ 反応式は何を表しているの？ 2H₂＋O₂→2H₂O は、水素の分子2個と酸素の分子1個が結びついて、水の分子2個ができる、という意味です。',
    add: F([...h2m(24, 52), ...h2m(64, 52), L(104, 52, '＋', 16, C.ink, true), ...o2m(122, 52), ar(158, 52, 184, 52, C.gray), ...h2om(214, 46), ...h2om(262, 46), L(58, 82, '水素 2個', 11, C.blue, true), L(138, 82, '酸素 1個', 11, C.red, true), L(238, 82, '水 2個', 11, C.ink, true)], [eb(152, '2H₂ ＋ O₂ → 2H₂O', C.blue, FILL.blue, 18), tx(206, '係数 ＝ 分子の数の比', 12, C.gray)]),
  },
  {
    note: '❓ なぜ気体の体積の比が、係数の比になるの？ 同じ温度・同じ圧力なら、同じ体積の中にふくまれる分子の数は、気体の種類にかかわらず同じだからです。体積の比が、そのまま分子の数の比になります。',
    add: F([bx(30, 24, 100, 70, undefined, C.blue, FILL.blue), ...[0, 1, 2].flatMap((i) => [ci(52 + i * 28, 46, 7, undefined, C.blue, FILL.blue), ci(52 + i * 28, 70, 7, undefined, C.blue, FILL.blue)]), bx(190, 24, 100, 70, undefined, C.red, FILL.red), ...[0, 1, 2].flatMap((i) => [ci(212 + i * 28, 46, 7, undefined, C.red, FILL.red), ci(212 + i * 28, 70, 7, undefined, C.red, FILL.red)]), L(80, 108, '水素 1L', 12, C.blue, true), L(240, 108, '酸素 1L', 12, C.red, true), L(160, 60, '＝', 22, C.ink, true)], [eb(152, '同じ体積 → 分子の数は同じ', C.blue, FILL.blue, 15), tx(206, '気体の種類が違っても同じ', 12, C.gray)]),
  },
  {
    note: '反応式の係数は H₂：O₂：H₂O ＝ 2：1：2 です。体積の比も同じ 2：1：2 になります。水素2に対して、酸素は1の割合で反応します。',
    add: F([bx(20, 26, 80, 24, '水素 2', C.blue, FILL.blue, 13), bx(20, 58, 40, 24, '酸素 1', C.red, FILL.red, 12), bx(20, 90, 80, 24, '水蒸気 2', C.gray, FILL.gray, 12), L(120, 38, '← 体積の比', 11, C.gray, false, 'start')], [eb(152, '水素 ： 酸素 ＝ 2 ： 1', C.blue, FILL.blue, 17), tx(206, '酸素は、水素の半分の体積が反応', 12, C.gray)]),
  },
  {
    note: '❓ 水素4.0Lとちょうど反応する酸素は何L？ 酸素は水素の半分なので、4.0×1/2 ＝ 2.0L です。1Lを40の長さで描くと、酸素は水素の半分の長さになります。',
    add: F([bx(20, 30, 160, 26, '水素 4.0L', C.blue, FILL.blue, 14), bx(20, 70, 80, 26, '酸素 2.0L', C.red, FILL.red, 14), L(112, 83, '← ちょうど反応する量', 11, C.red, true, 'start')], [eb(152, '4.0 × 1/2 ＝ 2.0L', C.red, FILL.red, 18), tx(206, '水素4.0Lが使い切られるのに必要な酸素', 12, C.gray)]),
  },
  {
    note: '❓ 酸素は足りる？ 用意した酸素は4.0Lで、必要な2.0Lより多いので足ります。使われるのは2.0Lで、残りの 4.0−2.0 ＝ 2.0L は反応せずに余ります。',
    add: F([bx(20, 30, 160, 26, '水素 4.0L', C.blue, FILL.blue, 14), L(192, 43, '← 全部反応する', 11, C.blue, true, 'start'), bx(20, 70, 80, 26, '反応 2.0L', C.red, FILL.red, 12), bx(100, 70, 80, 26, 'あまり 2.0L', C.gray, FILL.gray, 12), L(192, 83, '← 酸素は合計 4.0L', 11, C.gray, true, 'start')], [eb(152, '4.0 − 2.0 ＝ 2.0L あまる', C.gray, FILL.gray, 16), tx(206, '酸素は足りて、2.0Lが余る', 12, C.gray)]),
  },
  {
    note: '❓ なぜ水素のほうが先に使い切られるの？ 反応では水素のほうが酸素の2倍必要です。ところが用意した量は同じ4.0Lずつなので、水素のほうが先に足りなくなります。',
    add: F([bx(20, 26, 280, 30, '反応の割合　水素 ： 酸素 ＝ 2 ： 1', C.blue, FILL.blue, 14), bx(20, 66, 280, 30, '用意した量　水素 ： 酸素 ＝ 4.0 ： 4.0（1：1）', C.red, FILL.red, 13), L(160, 116, '水素が相対的に足りない', 13, C.red, true)], [eb(152, '足りないほうが先になくなる', C.red, FILL.red, 15), tx(206, '反応の割合より少ないほうが、先に使い切られる', 11, C.gray)]),
  },
  {
    note: '反応が終わると、水素は0L（使い切り）、酸素は2.0Lが残ります。できた水は、水蒸気や液体の水になり、残る気体としては数えません。答えは「酸素が2.0L残る」。',
    add: F([bx(30, 30, 120, 50, '水素\n0L（なくなる）', C.blue, FILL.blue, 13), bx(170, 30, 120, 50, '酸素\n2.0L（のこる）', C.red, FILL.red, 14), L(160, 108, '反応後の気体', 12, C.gray, true)], [eb(152, '答え 酸素が 2.0L 残る', C.green, FILL.green, 17)]),
  },
  {
    note: '確かめ（検算）です。酸素2.0Lとちょうど反応する水素は 2.0×2 ＝ 4.0L で、はじめの水素と一致します。また、反応に使ったのは 4.0＋2.0 ＝ 6.0Lで、はじめの合計 8.0L から引くと 2.0L が残ります。',
    add: F([eb(12, '酸素 2.0L ↔ 水素 2.0×2 ＝ 4.0L ✓', C.green, FILL.green, 14, 32), eb(56, '使った 4.0 ＋ 2.0 ＝ 6.0L', C.blue, FILL.blue, 15, 32), eb(100, '8.0 − 6.0 ＝ 2.0L（酸素）', C.green, FILL.green, 15, 32)], [tx(170, '2通りの計算が一致', 14, C.green, true)]),
  },
  {
    note: 'よくあるまちがいは、水素と酸素が1：1で反応すると思い、4.0−4.0 ＝ 0L で「何も残らない」と答えることです。反応の比は水素2：酸素1なので、必ず係数の比で考えます。',
    add: F([eb(14, '1：1で反応 → 4.0−4.0 ＝ 0L', C.red, FILL.red, 15, 34), L(160, 62, '係数を見ていない', 12, C.red, true), eb(80, '2：1で反応 → 酸素が2.0L残る', C.green, FILL.green, 15, 34)], [tx(150, '× 1：1　　○ 係数の比 2：1', 14, C.gray, true), tx(190, '反応式の係数を必ず確認', 13, C.gray)]),
  },
], '気体の反応と体積の比');

// 硫酸と水酸化バリウムの中和と電気の通りやすさ
const beaker = (): E[] => [bx(90, 34, 140, 80, undefined, C.gray, 'rgba(14,165,233,0.10)')];
const ionBa = (x: number, y: number): E => ci(x, y, 10, 'Ba', C.red, FILL.red, 8);
const ionOH = (x: number, y: number): E => ci(x, y, 8, 'OH', C.blue, FILL.blue, 7);
const r2c47: Figure = show([
  {
    note: '水酸化バリウム水溶液に、硫酸を少しずつ加えて中和させます（Ba(OH)₂＋H₂SO₄→BaSO₄＋2H₂O）。中和が進むと、水溶液の電流の流れやすさはどう変わるでしょう。',
    add: F([...beaker(), L(160, 76, 'Ba(OH)₂ 水溶液', 13, C.blue, true), ar(160, 6, 160, 30, C.red), L(172, 18, '硫酸 H₂SO₄を加える', 11, C.red, true, 'start')], [eb(152, '電流の流れやすさは どうなる？', C.blue, FILL.blue, 14), tx(206, '加えるほど 中和が進む', 12, C.gray)]),
  },
  {
    note: '❓ 水溶液に電流が流れるのは、なぜ？ 水にとけた物質がイオンに分かれていて、そのイオンが動いて電気を運ぶからです。イオンが多いほど電流は流れやすく、少ないほど流れにくくなります。',
    add: F([...beaker(), ionBa(115, 58), ionOH(140, 92), ionBa(200, 58), ionOH(180, 92), ar(120, 82, 150, 82, C.green), ar(200, 82, 170, 82, C.green), L(160, 128, 'イオンの移動 ＝ 電流', 12, C.green, true)], [eb(152, 'イオンが多い → 電流が流れやすい', C.green, FILL.green, 14), tx(206, 'イオンが少ない → 流れにくい', 12, C.gray)]),
  },
  {
    note: 'はじめの水酸化バリウム水溶液には、Ba²⁺ と OH⁻ のイオンがたくさんあります。そのため、電流がよく流れます。',
    add: F([...beaker(), ionBa(115, 56), ionBa(160, 76), ionBa(205, 56), ionOH(137, 56), ionOH(183, 56), ionOH(137, 96), ionOH(183, 96), ionOH(112, 88), ionOH(208, 88), L(160, 128, 'Ba（バリウム）イオン と OH（水酸化物）イオン', 10, C.gray, true)], [eb(152, 'はじめ：イオンが多い → 電流 大', C.green, FILL.green, 15), tx(206, 'Ba²⁺ と OH⁻ がたくさん', 12, C.gray)]),
  },
  {
    note: '❓ 硫酸を加えるとどうなるの？ 硫酸は H⁺ と SO₄²⁻ に分かれます。Ba²⁺ と SO₄²⁻ は結びついて、水にとけにくい白い沈殿 BaSO₄ に。H⁺ と OH⁻ は結びついて水 H₂O になります。',
    add: F([ionBa(40, 34), L(66, 34, '＋', 14, C.ink, true), ci(96, 34, 14, 'SO₄', C.purple, FILL.purple, 8), ar(118, 34, 170, 34, C.gray), bx(174, 20, 130, 28, 'BaSO₄（白い沈殿）', C.gray, FILL.gray, 11), ci(40, 86, 10, 'H', C.blue, FILL.blue, 9), L(66, 86, '＋', 14, C.ink, true), ionOH(92, 86), ar(118, 86, 170, 86, C.gray), bx(174, 72, 130, 28, 'H₂O（水）', C.blue, FILL.blue, 12)], [eb(152, 'イオンが「沈殿」と「水」に変わる', C.red, FILL.red, 14), tx(206, 'どちらもイオンではなくなる', 12, C.gray)]),
  },
  {
    note: '❓ 沈殿や水ができると、なぜ電流が流れにくくなるの？ 沈殿は固体で水溶液の中を動けません。水もほとんどイオンに分かれません。電気を運べるイオンが減るので、電流が小さくなります。',
    add: F([...beaker(), bx(106, 100, 108, 12, 'BaSO₄ 沈殿', C.gray, FILL.gray, 8), ionBa(120, 60), ionOH(190, 66), ionOH(160, 84), L(160, 128, '動けるイオンが減った', 12, C.red, true)], [eb(152, '沈殿 ＋ 水 → イオンが減る', C.red, FILL.red, 16), tx(206, '→ 電流が流れにくい', 13, C.red, true)]),
  },
  {
    note: 'ちょうど中和したところ（中和点）では、Ba²⁺も SO₄²⁻も H⁺も OH⁻もほぼ全部が、沈殿 BaSO₄ と水 H₂O になります。水溶液の中にイオンがほとんどなくなり、電流はほとんど流れません。',
    add: F([...beaker(), bx(106, 96, 108, 14, 'BaSO₄ 沈殿（白）', C.gray, FILL.gray, 8), L(160, 62, 'イオンほぼ なし', 13, C.gray, true), L(160, 128, '中和点', 13, C.red, true)], [eb(152, '中和点：電流 最小（ほぼ0）', C.red, FILL.red, 16), tx(206, '電気を運ぶイオンがほとんど無い', 12, C.gray)]),
  },
  {
    note: '電流の流れやすさを、加えた硫酸の量に対してグラフにすると、中和点までは右下がりで、中和点でほぼ0になります。中和点をすぎて硫酸が余ると、H⁺と SO₄²⁻が増えてふたたび電流が増えます。',
    add: F([ar(40, 122, 298, 122, C.ink), ar(40, 122, 40, 10, C.ink), L(296, 134, '加えた硫酸の量', 10, C.ink, true, 'end'), L(48, 12, '電流', 10, C.ink, true, 'start'), ln(40, 34, 160, 112, C.red, false, 2.6), ln(160, 112, 280, 34, C.gray, false, 2), ln(160, 112, 160, 122, C.red, true, 1.6), L(160, 136, '中和点', 11, C.red, true), L(48, 100, '中和点まで\nへっていく', 10, C.red, true, 'start')], [eb(152, '中和点で 電流は ほぼ0', C.red, FILL.red, 16), tx(206, '（中和点をすぎると 余った硫酸のイオンで増える）', 11, C.gray)]),
  },
  {
    note: '❓ 塩酸と水酸化ナトリウムの中和とは、どうちがうの？ そちらは食塩NaClができて、水にとけてNa⁺とCl⁻のイオンとして残るので、電流は0になりません。バリウムの場合は、塩が沈殿してイオンが消えるのが特別です。',
    add: F([bx(14, 24, 140, 64, '塩酸 ＋ NaOH\n→ NaCl は イオンで残る', C.blue, FILL.blue, 12), L(84, 110, '電流は0にならない', 11, C.blue, true), bx(166, 24, 140, 64, '硫酸 ＋ Ba(OH)₂\n→ BaSO₄ は 沈殿', C.red, FILL.red, 12), L(236, 110, '電流はほぼ0になる', 11, C.red, true)], [eb(152, '塩が沈殿するときだけ イオンが消える', C.red, FILL.red, 14), tx(206, '塩がイオンで残るか、沈殿するかのちがい', 12, C.gray)]),
  },
  {
    note: '答えです。中和が進むにつれて電気伝導性（電流の流れやすさ）は大きく下がり、ちょうど中和点で最小になります。理由は、イオンが沈殿 BaSO₄ と水 H₂O に変わり、動けるイオンが大きく減るからです。',
    add: F([eb(10, 'Ba²⁺ ＋ SO₄²⁻ → BaSO₄（沈殿）', C.gray, FILL.gray, 14, 30), eb(46, 'H⁺ ＋ OH⁻ → H₂O（水）', C.blue, FILL.blue, 14, 30), eb(82, 'イオン 減る → 電流 下がる', C.red, FILL.red, 14, 30)], [eb(152, '答え 中和点で 電流が最小', C.green, FILL.green, 16), tx(206, '動けるイオンの数で決まる', 12, C.gray)]),
  },
  {
    note: 'よくあるまちがいは、食塩ができる通常の中和と同じ感覚で「イオンが半分くらい残る」と考えることです。バリウムの中和は、塩が沈殿してイオンがほぼ消えるという特別な場合です。',
    add: F([eb(14, '「イオンが半分くらい残る」', C.red, FILL.red, 15, 34), L(160, 62, '通常の中和の感覚', 12, C.red, true), eb(80, '「沈殿でイオンがほぼ消える」', C.green, FILL.green, 15, 34)], [tx(150, '× 半分残る　　○ ほぼ消える', 14, C.gray, true), tx(190, 'なぜなら 塩が水にとけにくいから', 12, C.gray)]),
  },
], '中和とイオンの数と電流');

// 星座の年周運動
const ORB = { x: 110, y: 58, r: 42 };
const orbPt = (deg: number, r = ORB.r): [number, number] => [ORB.x + r * Math.cos((deg * Math.PI) / 180), ORB.y - r * Math.sin((deg * Math.PI) / 180)];
const orbit = (): E[] => {
  const out: E[] = [];
  for (let d = 0; d < 360; d += 15) {
    const a = orbPt(d);
    const b = orbPt(d + 15);
    out.push(ln(a[0], a[1], b[0], b[1], C.gray, true, 1.4));
  }
  out.push(ci(ORB.x, ORB.y, 9, '太陽', C.main, FILL.yellow, 7));
  return out;
};
const earthAt = (deg: number, label?: string, color: string = C.blue): E => {
  const p = orbPt(deg);
  return ci(p[0], p[1], 6, label, color, FILL.blue, 7);
};
const r3c13: Figure = show([
  {
    note: '同じ時刻に同じ場所で星座を観察すると、1か月後には、星座はどの方向へ約何度動いて見えるでしょう。図は、太陽のまわりを回る地球を北極側から見たようすです。',
    add: F([...orbit(), earthAt(270, '地'), L(216, 40, '地球の公転\n（反時計回り）', 11, C.gray, true, 'start')], [eb(152, '1か月後、星座はどちらへ何度？', C.blue, FILL.blue, 15), tx(206, '同じ場所・同じ時刻で観察する', 12, C.gray)]),
  },
  {
    note: '❓ なぜ星座の見える位置が変わるの？ 地球が太陽のまわりを公転して、夜空をながめる向きが少しずつ変わるからです。星座の星そのものは、ほとんど動いていません。',
    add: F([...orbit(), earthAt(270, '地'), earthAt(300, '地'), ...[0, 1, 2].map((i) => { const a = orbPt(272 + i * 10); const b = orbPt(282 + i * 10); return ln(a[0], a[1], b[0], b[1], C.red, false, 2.6); }), L(216, 50, '公転で 位置が\n変わっていく', 11, C.red, true, 'start')], [eb(152, '地球が動く → 見る向きが変わる', C.red, FILL.red, 14), tx(206, '星そのものは、ほぼ動かない', 12, C.gray)]),
  },
  {
    note: '❓ 1か月で地球はどれだけ公転するの？ 1年（12か月）で1周の360°なので、1か月では 360÷12 ＝ 30° 進みます。図の色をつけた扇形が30°です。',
    add: F([sc(ORB.x, ORB.y, ORB.r, 270, 300, C.red, 'rgba(225,29,72,0.25)'), ...orbit(), earthAt(270, '地'), earthAt(300, '地'), L(216, 40, '1か月で\n30°', 14, C.red, true, 'start')], [eb(152, '360° ÷ 12か月 ＝ 30°/月', C.red, FILL.red, 16), tx(206, '1年で1周（360°）の公転', 12, C.gray)]),
  },
  {
    note: '❓ なぜ「同じ時刻」で比べるの？ 地球は自転していて、時刻が1時間ずれるだけで星空は15°動きます。時刻をそろえれば、自転の影響を消して、公転による動きだけを見られます。',
    add: F([ci(80, 62, 30, '地球', C.blue, FILL.blue, 13), ar(54, 28, 106, 28, C.gray), L(80, 18, '自転', 11, C.gray, true), bx(150, 30, 150, 26, '自転：1時間 15°', C.gray, FILL.gray, 12), bx(150, 66, 150, 26, '公転：1か月 30°', C.red, FILL.red, 12)], [eb(152, '同じ時刻 ＝ 自転の影響が同じ', C.blue, FILL.blue, 15), tx(206, '変化は公転だけになる', 12, C.gray)]),
  },
  {
    note: '❓ 同じ時刻に見る向きは、どう変わるの？ たとえば真夜中に見える方向は、太陽と反対側です。地球が30°公転すると、太陽と反対向きの方向も30°回ります。',
    add: F([...orbit(), earthAt(270), earthAt(300), ar(orbPt(270)[0], orbPt(270)[1] + 6, orbPt(270)[0], orbPt(270)[1] + 34, C.blue), ar(orbPt(300)[0] + 3, orbPt(300)[1] + 5, orbPt(300)[0] + 17, orbPt(300)[1] + 29, C.red), L(orbPt(270)[0] - 6, orbPt(270)[1] + 42, '今夜の真夜中', 10, C.blue, true, 'end'), L(orbPt(300)[0] + 16, orbPt(300)[1] + 40, '1か月後の真夜中', 10, C.red, true, 'start'), L(232, 50, '向きが\n30°回る', 13, C.red, true, 'start')], [eb(152, '見る向きも 30° 回る', C.red, FILL.red, 16), tx(206, '太陽の反対側が、真夜中の方向', 12, C.gray)]),
  },
  {
    note: '❓ では星座はどちらへ動いて見えるの？ 見る向きは公転と同じ向き、つまり東寄りへ30°回ります。そのぶん同じ星座は、見る向きに対して西へ30°ずれて見えます。南の空を見ると、東が左、西が右です。',
    add: F([ln(20, 92, 300, 92, C.ink, false, 2), L(20, 106, '東', 13, C.ink, true, 'start'), L(160, 106, '南', 13, C.ink, true), L(300, 106, '西', 13, C.ink, true, 'end'), ci(90, 50, 4, undefined, C.gray, FILL.gray), ci(106, 62, 4, undefined, C.gray, FILL.gray), ci(124, 48, 4, undefined, C.gray, FILL.gray), L(106, 30, '1か月前', 11, C.gray, true), ci(190, 50, 4, undefined, C.red, FILL.red), ci(206, 62, 4, undefined, C.red, FILL.red), ci(224, 48, 4, undefined, C.red, FILL.red), L(206, 30, 'いま', 11, C.red, true), ar(132, 40, 182, 40, C.red)], [eb(152, '東 → 西 へ約 30°', C.red, FILL.red, 18), tx(206, '同じ星座が西へずれて見える', 12, C.gray)]),
  },
  {
    note: '❓ 1日あたりでは？ 360°÷365日 ≒ 1° なので、同じ時刻に見る星座は、毎日約1°ずつ西へ動きます。1時間で15°ということは、1°は60÷15 ＝ 4分なので、星は毎日約4分ずつ早く出てきます。',
    add: F([bx(20, 30, 130, 34, '1日 ≒ 1°', C.blue, FILL.blue, 15), bx(170, 30, 130, 34, '1° ＝ 4分', C.red, FILL.red, 15), L(160, 92, '1時間（60分）で15° → 1°は60÷15＝4分', 11, C.gray, true), L(160, 112, '30日で ≒ 30°', 13, C.ink, true)], [eb(152, '360° ÷ 365日 ≒ 1°', C.blue, FILL.blue, 16), tx(206, '毎日約1°、1か月で約30°', 12, C.gray)]),
  },
  {
    note: '答えは「東から西へ約30°動いて見える（360°÷12か月＝30°）」です。',
    add: F([bx(40, 22, 240, 34, '公転 360° ÷ 12か月 ＝ 30°', C.blue, FILL.blue, 15), ar(160, 60, 160, 84, C.gray), bx(40, 86, 240, 34, '星座は 東 → 西 へ 約30°', C.red, FILL.red, 15)], [eb(152, '答え 東から西へ約30°', C.green, FILL.green, 18)]),
  },
  {
    note: '確かめ（検算）です。30°×6 ＝ 180° なので、半年後には空の反対側の星座が見えます（夏と冬で星座がちがう理由）。30°×12 ＝ 360° なので、1年たつともとの位置にもどります。',
    add: F([eb(12, '30° × 6か月 ＝ 180°（反対側）', C.blue, FILL.blue, 15, 32), eb(56, '30° × 12か月 ＝ 360°（元にもどる）', C.blue, FILL.blue, 14, 32), eb(100, '夏と冬で、見える星座がちがう', C.green, FILL.green, 14, 32)], [tx(170, '1年で一周するので 季節の星座が決まる', 12, C.gray, true)]),
  },
  {
    note: 'よくあるまちがいは、日周運動（1時間に15°）と年周運動（1か月に30°）を混同することです。日周運動は地球の自転による1日の動き、年周運動は地球の公転による1年を通した動きです。',
    add: F([bx(14, 24, 140, 60, '日周運動\n自転・1時間 15°', C.gray, FILL.gray, 13), bx(166, 24, 140, 60, '年周運動\n公転・1か月 30°', C.red, FILL.red, 13), L(84, 106, '1日で 360°', 11, C.gray, true), L(236, 106, '1年で 360°', 11, C.red, true)], [eb(152, '時間の単位を見分ける', C.blue, FILL.blue, 16), tx(206, '1時間 → 日周、1か月 → 年周', 12, C.gray)]),
  },
], '星座の年周運動');

// 朔望月（新月から次の新月まで）
const MO = { x: 110, y: 70, r: 42 };
const moPt = (deg: number, r = MO.r): [number, number] => [MO.x + r * Math.cos((deg * Math.PI) / 180), MO.y - r * Math.sin((deg * Math.PI) / 180)];
const moonOrbit = (): E[] => {
  const out: E[] = [];
  for (let d = 0; d < 360; d += 15) {
    const a = moPt(d);
    const b = moPt(d + 15);
    out.push(ln(a[0], a[1], b[0], b[1], C.gray, true, 1.4));
  }
  out.push(ci(MO.x, MO.y, 12, '地', C.blue, FILL.blue, 10));
  return out;
};
const sunDir = (deg: number, color: string = C.main, len = 74): E => {
  const c = Math.cos((deg * Math.PI) / 180);
  const s = Math.sin((deg * Math.PI) / 180);
  return ar(MO.x + 14 * c, MO.y - 14 * s, MO.x + len * c, MO.y - len * s, color);
};
const moonAt = (deg: number, label?: string, color: string = C.ink, fill: string = FILL.yellow): E => {
  const p = moPt(deg);
  return ci(p[0], p[1], 7, label, color, fill, 8);
};
const r3c21: Figure = show([
  {
    note: '月が新月から次の新月になるまでの日数（朔望月）は約何日か。また、それが月の公転周期（約27.3日）より長い理由も考えます。図は、地球と月を北極側から見たようすです。',
    add: F([...moonOrbit(), sunDir(180), moonAt(180, '月'), L(68, 88, '新月', 12, C.ink, true), L(18, 52, '太陽の方向', 10, C.main, true, 'start'), L(216, 40, '新月のとき\n太陽 → 月 → 地球\nの順に並ぶ', 11, C.gray, true, 'start')], [eb(152, '新月 → 次の新月 は何日？', C.blue, FILL.blue, 15), tx(206, '公転周期27.3日より長い？ 短い？', 12, C.gray)]),
  },
  {
    note: '❓ なぜ「新月から新月まで」が、満ち欠けの1周期なの？ 月の満ち欠けは、太陽に対して月がどの位置にあるかで決まるからです。太陽と同じ方向にあるときが新月、反対側が満月です。',
    add: F([...moonOrbit(), sunDir(180), moonAt(180), moonAt(270), moonAt(0), moonAt(90), L(68, 88, '新月', 11, C.ink, true), L(110, 128, '上弦', 11, C.ink, true), L(160, 70, '満月', 11, C.ink, true, 'start'), L(110, 14, '下弦', 11, C.ink, true), L(18, 52, '太陽', 10, C.main, true, 'start'), L(206, 44, '太陽に対する位置で\n決まる', 11, C.gray, true, 'start')], [eb(152, '満ち欠け ＝ 太陽に対する月の位置', C.blue, FILL.blue, 14), tx(206, '新月から新月 ＝ 太陽に対して1周', 12, C.gray)]),
  },
  {
    note: '❓ 月が地球のまわりを1周するには、何日かかるの？ 星座（遠くの星）に対して、月がもとの位置にもどるまでの日数が公転周期の約27.3日です。ここでは月は360°回ります。',
    add: F([...moonOrbit(), ...[0, 1, 2, 3, 4, 5, 6].map((i) => { const a = moPt(180 + i * 50); const b = moPt(180 + i * 50 + 38); return ln(a[0], a[1], b[0], b[1], C.red, false, 2.6); }), moonAt(180, '月'), L(216, 50, '約27.3日で\n360°（1周）', 13, C.red, true, 'start')], [eb(152, '公転周期 ＝ 約27.3日', C.red, FILL.red, 16), tx(206, '遠くの星に対して、1周もどるまで', 12, C.gray)]),
  },
  {
    note: '❓ でも、その27.3日のあいだに地球は何をしているの？ 地球も太陽のまわりを公転しています。360÷365×27.3 ≒ 27° 進むので、太陽の方向も、はじめとは約27°ずれてしまいます。',
    add: F([...moonOrbit(), sunDir(180, C.gray), sunDir(207, C.red), ...[0, 1, 2, 3, 4, 5].map((i) => { const a = moPt(180 + i * 4.5, 52); const b = moPt(180 + (i + 1) * 4.5, 52); return ln(a[0], a[1], b[0], b[1], C.red, false, 2); }), L(6, 48, 'はじめの太陽の方向', 10, C.gray, true, 'start'), L(6, 132, '27.3日後の太陽の方向', 10, C.red, true, 'start'), L(214, 60, '地球が公転して\n太陽の方向が\n約27°ずれる', 11, C.red, true, 'start')], [eb(152, '360 ÷ 365 × 27.3 ≒ 27°', C.red, FILL.red, 16), tx(206, '地球が進んだぶん、太陽の方向がずれる', 12, C.gray)]),
  },
  {
    note: '❓ すると、新月にもどるには？ 月は27.3日でもとの向きには戻りましたが、太陽の方向は27°ずれています。月がさらに約27°進んで、新しい太陽の方向に追いつかないと、新月になりません。',
    add: F([...moonOrbit(), sunDir(180, C.gray), sunDir(207, C.red), moonAt(180, '月'), ci(moPt(207)[0], moPt(207)[1], 7, undefined, C.gray, 'rgba(255,255,255,0.4)'), ...[0, 1, 2, 3, 4, 5].map((i) => { const a = moPt(180 + i * 4.5, 28); const b = moPt(180 + (i + 1) * 4.5, 28); return ln(a[0], a[1], b[0], b[1], C.green, false, 2); }), L(214, 60, 'まだ約27°\n足りない', 13, C.green, true, 'start')], [eb(152, '月は さらに 約27° 進む必要', C.green, FILL.green, 15), tx(206, '新しい太陽の方向に追いつくまで', 12, C.gray)]),
  },
  {
    note: '❓ 追加で何日かかるの？ 月は1日に 360÷27.3 ≒ 13.2° 進みます。27°進むには 27÷13.2 ≒ 2日。この間も地球は少し動き続けるので、ちょうど追いつくのは約2.2日後です。',
    add: F([bx(20, 26, 130, 34, '月は1日に\n360÷27.3 ≒ 13.2°', C.blue, FILL.blue, 12), bx(170, 26, 130, 34, '27° ÷ 13.2°\n≒ 2日', C.red, FILL.red, 13), L(160, 86, 'その間も地球は進み続けるので…', 11, C.gray, true), bx(90, 98, 140, 28, '追加 約2.2日', C.green, FILL.green, 15)], [eb(152, '27 ÷ 13.2 ≒ 2（実際は約2.2日）', C.green, FILL.green, 14), tx(206, '追いつく目標が逃げるぶん、少し長引く', 12, C.gray)]),
  },
  {
    note: '合わせると、27.3日＋約2.2日 ＝ 約29.5日です。答えは約29.5日。地球も公転しているので、月が地球から見て太陽と同じ方向に戻るには、公転周期より約2日長くかかります。',
    add: F([bx(20, 40, 224, 34, '公転周期 27.3日', C.blue, FILL.blue, 14), bx(244, 40, 56, 34, '2.2日', C.red, FILL.red, 12), ln(20, 92, 300, 92, C.green, false, 2), L(160, 108, '新月から次の新月まで 約29.5日', 14, C.green, true)], [eb(152, '答え 約29.5日', C.green, FILL.green, 19), tx(206, '満ち欠けの周期 ＞ 公転周期', 12, C.gray)]),
  },
  {
    note: '❓ 時計の針にたとえると分かりやすいです。長針が月、短針が太陽の方向です。12時に重なったあと、長針が1周（60分）しても、短針も進んでいるので、まだ重なりません。重なるのは約65分後です。',
    add: F([ci(90, 68, 48, undefined, C.gray, FILL.warm), ln(90, 68, 90, 28, C.red, false, 3), ln(90, 68, 101, 49, C.blue, false, 4), ci(90, 68, 3, undefined, C.ink, C.ink), L(170, 30, '長針 ＝ 月', 12, C.red, true, 'start'), L(170, 50, '短針 ＝ 太陽の方向', 12, C.blue, true, 'start'), L(170, 82, '1時：長針は1周したが\n短針は30°進んだ', 11, C.gray, true, 'start'), L(170, 114, '重なるのは 約65分後', 12, C.green, true, 'start')], [eb(152, '60 ÷ (1 − 1/12) ≒ 65.5分', C.green, FILL.green, 15), tx(206, '相手が動くぶん、追いつくのに時間がかかる', 12, C.gray)]),
  },
  {
    note: '確かめ（検算）です。1日に進む回転の割合は、月が 1÷27.3 ≒ 0.0366 回転、太陽の方向が 1÷365 ≒ 0.0027 回転。その差は 0.0339 回転で、1回転ぶんの差がつくには 1÷0.0339 ≒ 29.5日です。',
    add: F([eb(12, '月 1 ÷ 27.3 ≒ 0.0366 回転/日', C.blue, FILL.blue, 14, 32), eb(56, '太陽の方向 1 ÷ 365 ≒ 0.0027 回転/日', C.blue, FILL.blue, 13, 32), eb(100, '差 0.0339 → 1 ÷ 0.0339 ≒ 29.5日', C.green, FILL.green, 14, 32)], [tx(170, 'べつの方法でも 29.5日', 14, C.green, true)]),
  },
  {
    note: 'よくあるまちがいは、月の公転周期（27.3日）と満ち欠けの周期（29.5日）を同じ値だと思うことです。星座に対して1周するのは27.3日、太陽に対して1周するのは29.5日で、地球が公転しているぶんだけちがいます。',
    add: F([bx(14, 24, 140, 60, '公転周期\n星座に対して1周\n27.3日', C.blue, FILL.blue, 12), bx(166, 24, 140, 60, '満ち欠けの周期\n太陽に対して1周\n29.5日', C.red, FILL.red, 12), L(160, 106, '地球も公転 → 約2日のちがい', 12, C.gray, true)], [eb(152, '別のものを測っている', C.blue, FILL.blue, 16), tx(206, '何に対して1周か、で決まる', 12, C.gray)]),
  },
], '朔望月と公転周期');

// 日食と月食の並び方
const sunB = (): E => ci(36, 70, 28, '太陽', C.main, FILL.yellow, 12);
const halfMoon = (cx: number, cy: number, r: number): E[] => [sc(cx, cy, r, 90, 270, C.main, 'rgba(250,204,21,0.55)'), sc(cx, cy, r, 270, 450, C.gray, 'rgba(110,100,92,0.45)')];
const r3c22: Figure = show([
  {
    note: '太陽・月・地球の3つが一直線に並ぶとき、日食や月食が起こります。日食のとき、月食のときで、並び方はそれぞれどうちがうでしょう。',
    add: F([sunB(), ci(160, 70, 9, '？', C.gray, FILL.gray, 11), ci(250, 70, 15, '？', C.gray, FILL.gray, 11), L(160, 100, '月と地球の順番は？', 12, C.gray, true)], [eb(152, '日食・月食のときの並び方は？', C.blue, FILL.blue, 15), tx(206, '太陽は、いつも左にある', 12, C.gray)]),
  },
  {
    note: '日食は、太陽―月―地球の順に並びます。❓ なぜ日食になるの？ 月が太陽の光をさえぎって、月の影が地球に落ちるからです。影の中の場所では、太陽が月にかくされて見えます。',
    add: F([sunB(), pg([[176, 63], [176, 77], [256, 72], [256, 68]], C.gray, 'rgba(110,100,92,0.30)'), ci(170, 70, 7, '月', C.ink, FILL.gray, 8), ci(268, 70, 15, '地球', C.blue, FILL.blue, 10), L(176, 52, '月が光をさえぎる', 11, C.gray, true), L(216, 96, '影が地球に落ちる', 11, C.red, true)], [eb(152, '日食：太陽 → 月 → 地球', C.red, FILL.red, 17), tx(206, '月が太陽をかくす', 13, C.gray, true)]),
  },
  {
    note: '❓ このとき、地球から見える月の面はどちら？ 月は太陽に照らされた面が光ります。日食のときは、月の太陽側が光り、地球側は影になります。地球から見えるのは暗い面なので、新月です。',
    add: F([...halfMoon(120, 66, 38), L(120, 14, '月', 11, C.gray, true), ar(60, 40, 76, 50, C.main), L(56, 32, '太陽の光', 11, C.main, true, 'end'), L(120, 120, '光が当たる面（太陽側）', 10, C.main, true, 'end'), ar(190, 66, 240, 66, C.gray), ci(268, 66, 15, '地球', C.blue, FILL.blue, 10), L(176, 40, '暗い面が地球側', 11, C.gray, true, 'start')], [eb(152, '日食のとき月は「新月」', C.gray, FILL.gray, 16), tx(206, '地球に向いているのは、光が当たらない面', 12, C.gray)]),
  },
  {
    note: '月食は、太陽―地球―月の順に並びます。❓ なぜ月食になるの？ 地球の影が、月にかかるからです。地球も太陽に照らされていて、後ろには長い影ができています。',
    add: F([sunB(), pg([[156, 55], [156, 85], [300, 76], [300, 64]], C.gray, 'rgba(110,100,92,0.30)'), ci(148, 70, 16, '地球', C.blue, FILL.blue, 10), ci(270, 70, 7, '月', C.ink, FILL.gray, 8), L(216, 100, '地球の影', 12, C.gray, true), L(270, 48, '影に入る', 11, C.red, true)], [eb(152, '月食：太陽 → 地球 → 月', C.red, FILL.red, 17), tx(206, '地球の影が月にかかる', 13, C.gray, true)]),
  },
  {
    note: '❓ このときの月の満ち欠けは？ 月は太陽の光を受ける側が地球に向いているので、ふだんは丸く明るく見える満月です。月食は、その満月が地球の影に入って欠けて見える現象です。',
    add: F([ar(20, 30, 60, 40, C.main), L(20, 20, '太陽の光', 11, C.main, true, 'start'), ci(40, 76, 14, '地球', C.blue, FILL.blue, 10), ci(180, 70, 38, undefined, C.main, FILL.yellow), L(180, 118, '光が当たる面が地球側', 10, C.main, true), L(180, 70, '満月', 14, C.ink, true), ar(74, 76, 136, 72, C.gray)], [eb(152, '月食のとき月は「満月」', C.red, FILL.red, 16), tx(206, '地球に向いた面に光が当たっている', 12, C.gray)]),
  },
  {
    note: '❓ 日食と月食は、どこで見えるの？ 日食は月の小さな影が落ちた、地球のせまい範囲（昼の側）だけです。月食は月が影に入ると、地球の夜の側ならどこからでも同じように見えます。',
    add: F([sc(120, 66, 40, 90, 270, C.main, 'rgba(250,204,21,0.5)'), sc(120, 66, 40, 270, 450, C.gray, 'rgba(110,100,92,0.5)'), ci(104, 66, 4, undefined, C.red, C.red), L(120, 18, '地球', 11, C.gray, true), L(20, 24, '昼側', 11, C.main, true, 'start'), L(206, 24, '夜側', 11, C.gray, true, 'end'), L(180, 66, '日食：月の影が\n落ちた所だけ', 11, C.red, true, 'start'), L(180, 100, '月食：夜側なら\nどこでも', 11, C.blue, true, 'start')], [eb(152, '日食はせまい範囲、月食は夜側の広い範囲', C.blue, FILL.blue, 13), tx(206, '影の大きさのちがいが理由', 12, C.gray)]),
  },
  {
    note: '❓ それなら、新月や満月のたびに日食・月食が起こりそうです。なぜ毎回は起こらないの？ 月の通り道が地球の公転面に対して少しかたむいているため、月が影の線から上や下にはずれることが多いからです。',
    add: F([sunB(), ci(268, 70, 14, '地球', C.blue, FILL.blue, 10), pg([[176, 38], [176, 52], [262, 28], [262, 14]], C.gray, 'rgba(110,100,92,0.28)'), ci(170, 44, 7, '月', C.ink, FILL.gray, 8), ln(64, 70, 254, 70, C.gray, true, 1.4), L(216, 102, '月の影は地球の\n上を通りすぎる', 11, C.red, true, 'end')], [eb(152, '月が上にずれると、一直線にならない', C.red, FILL.red, 14), tx(206, '（くわしくは、月の通り道のかたむきで）', 12, C.gray)]),
  },
  {
    note: '答えです。日食は太陽―月―地球の順に一直線に並び、月が太陽を隠します（新月のとき起こりうる）。月食は太陽―地球―月の順に並び、地球の影が月にかかります（満月のとき起こりうる）。',
    add: F([eb(12, '日食：太陽 → 月 → 地球（新月）', C.red, FILL.red, 14, 32), eb(56, '月食：太陽 → 地球 → 月（満月）', C.blue, FILL.blue, 14, 32), tx(112, '毎回起こるわけではない（起こりうる）', 12, C.gray, true)], [eb(152, '真ん中に入る天体が影をつくる', C.green, FILL.green, 15), tx(206, '日食は月が、月食は地球が真ん中', 12, C.gray)]),
  },
  {
    note: '❓ 覚えるコツは？ 「食」は、かけることです。日食は太陽がかけるので、手前に月が入ります（太陽→月→地球）。月食は月がかけるので、手前に地球が入ります（太陽→地球→月）。',
    add: F([bx(14, 24, 140, 50, '日食\n太陽が かける', C.red, FILL.red, 13), bx(166, 24, 140, 50, '月食\n月が かける', C.blue, FILL.blue, 13), L(84, 96, '手前に「月」', 12, C.red, true), L(236, 96, '手前に「地球」', 12, C.blue, true)], [eb(152, 'かけるほうの手前に、じゃま者', C.blue, FILL.blue, 15), tx(206, '太陽がかける → 月がじゃま', 12, C.gray)]),
  },
  {
    note: 'よくあるまちがいは、日食と月食が起こる月の満ち欠けを逆にすることです。日食は月が太陽の前に入るので新月、月食は地球の影に月が入るので満月です。',
    add: F([eb(14, '日食 ＝ 満月、月食 ＝ 新月', C.red, FILL.red, 16, 34), L(160, 62, '並びと合っていない', 12, C.red, true), eb(80, '日食 ＝ 新月、月食 ＝ 満月', C.green, FILL.green, 16, 34)], [tx(150, '× 逆　　○ 日食は新月', 14, C.gray, true), tx(190, '月が太陽側にいる → 新月', 13, C.gray)]),
  },
], '日食と月食のときの並び方');

// 月の通り道のかたむきと日食
const EC = { x: 160, y: 70, rx: 100 };
const ellPts = (ry: number): [number, number][] => Array.from({ length: 40 }, (_, i) => { const t = (2 * Math.PI * i) / 40; return [EC.x + EC.rx * Math.cos(t), EC.y - ry * Math.sin(t)] as [number, number]; });
const eclip = (): E[] => [pg(ellPts(20), C.blue, 'rgba(14,165,233,0.06)'), pg(ellPts(38), C.purple, 'rgba(147,51,234,0.05)'), ci(EC.x, EC.y, 8, '地', C.blue, FILL.blue, 8)];
const eclLabels = (): E[] => [L(304, 22, '白道面（月の通り道）', 10, C.purple, true, 'end'), L(304, 124, '黄道面（地球の公転面）', 10, C.blue, true, 'end')];
const r3c34: Figure = show([
  {
    note: '月は新月のたびに、太陽と地球のあいだを通ります。それなのに、日食は毎月起こりません。その理由を、月と地球の公転軌道の関係から考えます。',
    add: F([...eclip(), ...eclLabels()], [eb(152, '新月のたびに 日食にならないのはなぜ？', C.blue, FILL.blue, 14), tx(206, '図は、かたむきを大げさに描いている', 12, C.gray)]),
  },
  {
    note: '❓ もし月の通り道と地球の公転面が同じ平面だったら？ 新月のたびに、太陽・月・地球がぴったり一直線に並びます。その場合は、毎月日食が起こるはずです。',
    add: F([sunB(), ci(170, 70, 7, '月', C.ink, FILL.gray, 8), ci(268, 70, 14, '地球', C.blue, FILL.blue, 10), ln(64, 70, 254, 70, C.gray, true, 1.4), pg([[176, 63], [176, 77], [256, 72], [256, 68]], C.gray, 'rgba(110,100,92,0.30)')], [eb(152, '同じ平面なら 新月のたび 一直線', C.blue, FILL.blue, 14), tx(206, '→ 毎月、日食になってしまう', 13, C.red, true)]),
  },
  {
    note: '❓ 実際はどうなの？ 月の通り道（白道）は、地球の公転面（黄道）に対して約5°かたむいています。そのため新月でも、月は黄道面の上か下にはずれていて、太陽と地球を結ぶ線にのりません。',
    add: F([...eclip(), ...eclLabels(), ar(150, 72, 66, 88, C.main), L(18, 98, '太陽の方向', 10, C.main, true, 'start'), ln(89, 84, 89, 92, C.red, true, 1.6), ci(89, 97, 6, '月', C.ink, FILL.yellow, 8), L(104, 118, '線からずれる', 11, C.red, true, 'start'), ci(89, 84, 2, undefined, C.blue, C.blue)], [eb(152, '白道が約5°かたむく → 月がずれる', C.red, FILL.red, 14), tx(206, '新月でも、一直線にならない', 13, C.gray, true)]),
  },
  {
    note: '❓ 約5°のずれは、どれくらい大きいの？ 太陽の見かけの大きさは約0.5°です。5°は、その約10倍。新月のときの月は、太陽10個ぶんも離れた場所にいることがあり、重なるはずがありません。',
    add: F([...Array.from({ length: 11 }, (_, i) => ci(30 + i * 25, 60, 12, undefined, i === 0 ? C.main : C.gray, i === 0 ? FILL.yellow : i === 10 ? FILL.gray : 'rgba(255,255,255,0)')), L(30, 88, '太陽\n0.5°', 10, C.main, true), L(280, 88, '月', 11, C.gray, true), L(155, 108, '太陽10個ぶん ＝ 約5°', 13, C.red, true)], [eb(152, '5° ÷ 0.5° ＝ 10倍', C.red, FILL.red, 17), tx(206, '太陽の10個ぶん離れることがある', 12, C.gray)]),
  },
  {
    note: '❓ では、日食が起こるのはどんなとき？ 白道と黄道が交わる点（交点）の近くで、ちょうど新月になったときです。そこなら月は黄道面の上にあり、太陽・月・地球が一直線に並びます。',
    add: F([...eclip(), ...eclLabels(), ar(150, 70, 36, 70, C.main), L(24, 54, '太陽の方向', 10, C.main, true, 'start'), ci(60, 70, 6, '月', C.ink, FILL.yellow, 8), L(60, 92, '交点', 12, C.green, true)], [eb(152, '交点付近で 新月 → 日食', C.green, FILL.green, 16), tx(206, '黄道面の上に月がのっている', 12, C.gray)]),
  },
  {
    note: '月食も同じです。月が交点の近くにあるときに満月になると、太陽・地球・月が一直線に並び、月が地球の影に入ります。',
    add: F([...eclip(), ...eclLabels(), ar(150, 70, 36, 70, C.main), L(24, 54, '太陽の方向', 10, C.main, true, 'start'), ci(260, 70, 6, '月', C.ink, FILL.yellow, 8), L(260, 92, '交点', 12, C.green, true)], [eb(152, '交点付近で 満月 → 月食', C.blue, FILL.blue, 16), tx(206, '太陽 → 地球 → 月 の順', 12, C.gray)]),
  },
  {
    note: '❓ どれくらい起こるの？ 新月や満月になる時期と、月が交点の近くにいる時期が重なるのは、年に数回だけです。たとえば1年12回の新月のうち、日食になるのはだいたい2回ほどです。',
    add: F([...Array.from({ length: 12 }, (_, i) => ci(30 + i * 24, 56, 9, i === 2 || i === 8 ? '食' : undefined, i === 2 || i === 8 ? C.red : C.gray, i === 2 || i === 8 ? FILL.red : FILL.gray, 8)), L(160, 86, '1年12回の新月', 12, C.gray, true), L(160, 108, '日食になるのは 年に数回', 13, C.red, true)], [eb(152, '重なるのは、ときどきだけ', C.red, FILL.red, 16), tx(206, '日食・月食は年に数回程度', 12, C.gray)]),
  },
  {
    note: '答えです。月の公転軌道（白道）は地球の公転軌道（黄道）に対して約5°かたむいているため、新月のときに月が黄道から外れた位置にあることが多く、太陽・月・地球が一直線に並びません。交点付近で新月・満月になったときだけ、日食・月食が起こります。',
    add: F([eb(10, '白道は黄道に対して 約5°かたむく', C.purple, FILL.purple, 14, 30), eb(46, '新月でも 月が上下にずれる', C.red, FILL.red, 14, 30), eb(82, '交点付近の新月・満月 → 食', C.green, FILL.green, 14, 30)], [eb(152, '答え かたむきがあるから', C.green, FILL.green, 17), tx(206, '毎月は一直線にならない', 12, C.gray)]),
  },
  {
    note: '確かめです。もし白道と黄道が同じ平面なら、日食も月食も毎月起こるはずです。実際は、日食・月食をあわせても年に数回（多くても7回ほど）しか起こりません。かたむきがあるという説明と、観測の事実が合っています。',
    add: F([bx(14, 24, 140, 50, '同じ平面なら\n日食・月食は毎月', C.gray, FILL.gray, 12), bx(166, 24, 140, 50, '実際は\n年に数回だけ', C.red, FILL.red, 13), L(160, 100, '← かたむきがある証拠 →', 12, C.green, true), L(160, 120, '月が上下にずれるから、めったに重ならない', 11, C.gray, true)], [eb(152, 'かたむきがあると 事実と合う', C.green, FILL.green, 15), tx(206, '日食・月食は 年に数回程度', 12, C.gray)]),
  },
  {
    note: 'よくあるまちがいは、「新月なら必ず日食」と考えることです。新月になるのは毎月ですが、月が黄道面から外れていれば影は地球に届かず、日食にはなりません。',
    add: F([eb(14, '新月 ＝ 必ず日食', C.red, FILL.red, 16, 34), L(160, 62, 'かたむきを見落としている', 12, C.red, true), eb(80, '新月 ＋ 交点付近 ＝ 日食', C.green, FILL.green, 16, 34)], [tx(150, '× 新月なら日食　　○ 交点付近なら日食', 13, C.gray, true), tx(190, '日食は 年に数回だけ', 13, C.gray)]),
  },
], '月の通り道のかたむきと日食');

// 年縞から堆積の速さ
const varve = (x: number, y: number, n: number, h = 11, w = 100): E[] => Array.from({ length: n }, (_, i) => bx(x, y + i * h, w, h, undefined, i % 2 === 0 ? C.main : C.gray, i % 2 === 0 ? FILL.yellow : FILL.gray));
const r3c37: Figure = show([
  {
    note: '湖底で見つかった年縞（季節ごとに粒のちがいでできる縞模様で、1年に1組できる）を数えたところ、厚さ50cmの地層に500組の縞がありました。この地層1cmがたまるのに何年かかったでしょう。',
    add: F([...varve(110, 20, 10), ln(98, 20, 98, 130, C.ink, false, 2), L(92, 75, '厚さ\n50cm', 12, C.ink, true, 'end'), L(222, 75, '年縞 500組', 13, C.red, true, 'start')], [eb(152, '1cm がたまる年数は？', C.blue, FILL.blue, 16), tx(206, '縞のようすを10段だけ描いている', 12, C.gray)]),
  },
  {
    note: '❓ 年縞とは、何でしょう？ 季節によって湖底にたまる粒の種類や色がちがうので、明るい層と暗い層が1組できます。季節は1年でひとめぐりするので、1組できるのに1年かかります。',
    add: F([bx(100, 26, 120, 34, '明るい層（ある季節）', C.main, FILL.yellow, 12), bx(100, 60, 120, 34, '暗い層（ほかの季節）', C.gray, FILL.gray, 12), ln(90, 26, 90, 94, C.red, false, 2), L(84, 60, '1組', 13, C.red, true, 'end'), L(232, 60, '＝ 1年', 14, C.red, true, 'start')], [eb(152, '明るい層 ＋ 暗い層 ＝ 1組 ＝ 1年', C.red, FILL.red, 14), tx(206, '季節は1年でひとめぐりする', 12, C.gray)]),
  },
  {
    note: '❓ だから、縞の組数が年数そのものになるの？ そのとおりです。1組が1年なので、500組ならそのまま500年分です。この地層50cmは、500年かけてたまったことになります。',
    add: F([...[0, 1, 2, 3, 4].flatMap((i) => [bx(30 + i * 44, 34, 18, 34, undefined, C.main, FILL.yellow), bx(48 + i * 44, 34, 18, 34, undefined, C.gray, FILL.gray)]), L(268, 52, '…', 20, C.gray, true), L(160, 92, '1組ずつ数える', 12, C.gray, true), L(160, 114, '500組 ＝ 500年', 15, C.red, true)], [eb(152, '年縞 500組 ＝ 500年分', C.red, FILL.red, 17), tx(206, '50cm の地層に 500年', 12, C.gray)]),
  },
  {
    note: '❓ 500年で50cmなら、10cmは何年分？ 50cmを5つに分けると1つ10cmで、500年を5つに分けると1つ100年です。10cmで100年。これが同じ速さで積もったと考えたときの関係です。',
    add: F([L(160, 20, '50cm ＝ 500年', 13, C.ink, true), ...[0, 1, 2, 3, 4].map((i) => bx(20 + i * 56, 34, 56, 44, '10cm\n100年', C.blue, FILL.blue, 11)), L(160, 100, '10cm で 100年 → 1cm で 10年', 13, C.red, true)], [eb(152, '5つに分けると 1つは 100年', C.blue, FILL.blue, 15), tx(206, '同じ速さで積もったと考える', 12, C.gray)]),
  },
  {
    note: '❓ なぜ割り算で求めるの？ 「1cmあたりの年数」は、全体の年数を全体の厚さで等しく分けたものだからです。500年を50cmで分けると、1cmぶんの年数になります。',
    add: F([bx(20, 34, 100, 44, '全体の年数\n500年', C.blue, FILL.blue, 13), L(140, 56, '÷', 22, C.ink, true), bx(160, 34, 100, 44, '全体の厚さ\n50cm', C.blue, FILL.blue, 13), L(278, 56, '＝ ？', 15, C.red, true), L(160, 104, '等しく分けると 1cmあたりの年数', 12, C.gray, true)], [eb(152, '年数 ÷ 厚さ ＝ 1cmあたりの年数', C.blue, FILL.blue, 14), tx(206, '「1あたり」を求めるときは割る', 12, C.gray)]),
  },
  {
    note: '500÷50 ＝ 10 なので、この地層1cmがたまるのにかかった年数は10年です。答えは10年。',
    add: F(flow(['500年', '÷ 50cm', '10年/cm'], 40, { h: 44, color: C.green, fill: FILL.green, size: 15 }).flat(), [eb(152, '答え 10年', C.green, FILL.green, 20)]),
  },
  {
    note: '確かめ（検算）です。10年/cm × 50cm ＝ 500年で、年縞の数と一致します。逆から見ると、年縞1組（1年）の厚さは 50÷500 ＝ 0.1cm ＝ 1mm で、かなりうすい縞です。',
    add: F([eb(12, '10年/cm × 50cm ＝ 500年 ✓', C.green, FILL.green, 15, 32), eb(56, '1年の厚さ 50 ÷ 500 ＝ 0.1cm', C.blue, FILL.blue, 15, 32), eb(100, '0.1cm ＝ 1mm（うすい縞）', C.blue, FILL.blue, 15, 32)], [tx(170, '10年で1cm ＝ 1年で1mm', 14, C.green, true)]),
  },
  {
    note: '❓ 割る順序を逆にして 50÷500 ＝ 0.1 とすると、どうなる？ それは「1年でたまる厚さ（0.1cm）」という別の量です。問題が聞いているのは「1cmにかかる年数」なので、500÷50 が正しい式です。',
    add: F([bx(14, 24, 140, 54, '500 ÷ 50 ＝ 10\n（年／cm）', C.green, FILL.green, 13), L(84, 98, '1cmにかかる年数 ○', 11, C.green, true), bx(166, 24, 140, 54, '50 ÷ 500 ＝ 0.1\n（cm／年）', C.red, FILL.red, 13), L(236, 98, '1年の厚さ（別の量）', 11, C.red, true)], [eb(152, '何を求めるかで 割る向きが決まる', C.blue, FILL.blue, 14), tx(206, '「年」を「cm」で割る', 12, C.gray)]),
  },
  {
    note: '❓ 年縞は、なぜ年代を調べる道具になるの？ 木の年輪と同じく、1年ごとに1組できるので、数えるだけで年数がわかります。湖底は静かで、毎年ほぼ同じようにたまるので、きれいな縞が残ります。',
    add: F([ci(76, 68, 50, undefined, C.main, FILL.yellow), ci(76, 68, 38, undefined, C.main, FILL.warm), ci(76, 68, 26, undefined, C.main, FILL.yellow), ci(76, 68, 14, undefined, C.main, FILL.warm), L(76, 130, '木の年輪', 11, C.main, true), ...varve(190, 30, 9, 10, 90), L(235, 130, '湖底の年縞', 11, C.main, true), L(150, 68, '＝', 18, C.ink, true)], [eb(152, '1組 ＝ 1年 なので 数えればよい', C.blue, FILL.blue, 15), tx(206, '静かな湖底は、縞が乱れにくい', 12, C.gray)]),
  },
  {
    note: '注意点です。「1cmが10年」は、50cm全体を同じ速さでたまったとみなした平均です。実際には大雨や洪水で厚さが変わることもありますが、この問題では平均の値として答えます。',
    add: F([...varve(40, 26, 8, 11, 70), L(190, 50, '縞の厚さは\n年によって少しちがう', 11, C.gray, true, 'start'), L(190, 92, 'でも 500組 ÷ 50cm で\n平均が出せる', 11, C.blue, true, 'start')], [eb(152, '平均の速さ ＝ 10年 で 1cm', C.blue, FILL.blue, 16), tx(206, '全体を数えて割ると 平均になる', 12, C.gray)]),
  },
], '年縞から求める堆積の速さ');

// 泥岩→砂岩→れき岩
const r3c38: Figure = show([
  {
    note: 'ある場所で、下（古い）から上（新しい）に向かって「泥岩→砂岩→れき岩」の順に地層が重なっていました。この重なり方から、堆積していたときの海の深さはどう変わったと読みとれるでしょう。',
    add: F([bx(110, 22, 100, 30, 'れき岩', C.gray, FILL.gray, 13), bx(110, 52, 100, 34, '砂岩', C.main, FILL.yellow, 13), bx(110, 86, 100, 40, '泥岩', C.blue, FILL.blue, 13), ar(92, 122, 92, 28, C.red), L(86, 26, '新しい', 11, C.red, true, 'end'), L(86, 126, '古い', 11, C.red, true, 'end')], [eb(152, '海の深さは どう変わった？', C.blue, FILL.blue, 15), tx(206, '下から 泥 → 砂 → れき の順', 12, C.gray)]),
  },
  {
    note: '❓ 重なった順は、たまった順と同じなの？ 地層は下から順にたまるので、下の層ほど古く、上の層ほど新しいです。だから、先に泥がたまり、そのあと砂、最後にれきがたまったと読めます。',
    add: F([bx(110, 22, 100, 30, '③ れき（最後）', C.gray, FILL.gray, 11), bx(110, 52, 100, 34, '② 砂（つぎ）', C.main, FILL.yellow, 12), bx(110, 86, 100, 40, '① 泥（はじめ）', C.blue, FILL.blue, 12), ar(92, 122, 92, 28, C.red), L(86, 76, '時間の\n向き', 11, C.red, true, 'end')], [eb(152, '下の層ほど古い', C.red, FILL.red, 17), tx(206, '先にたまったものが下になる', 12, C.gray)]),
  },
  {
    note: '❓ では、粒の大きさと堆積する場所には、どんな関係があるの？ 川が運んだ土砂のうち、大きく重い粒は岸の近くで早く沈みます。細かい泥は軽いので、遠くの沖まで運ばれてから沈みます。',
    add: F([pg([[70, 40], [300, 40], [300, 110]], C.blue, 'rgba(14,165,233,0.15)'), ln(70, 40, 300, 110, C.gray, false, 2), ci(92, 48, 5, undefined, C.gray, FILL.gray), ci(104, 52, 5, undefined, C.gray, FILL.gray), ci(150, 66, 3, undefined, C.main, FILL.yellow), ci(162, 70, 3, undefined, C.main, FILL.yellow), ci(176, 74, 3, undefined, C.main, FILL.yellow), ci(250, 95, 1.6, undefined, C.blue, C.blue), ci(262, 98, 1.6, undefined, C.blue, C.blue), ci(276, 102, 1.6, undefined, C.blue, C.blue), L(98, 126, 'れき', 11, C.gray, true), L(166, 126, '砂', 11, C.main, true), L(264, 126, '泥', 11, C.blue, true), L(40, 28, '岸', 12, C.ink, true), L(290, 28, '沖（深い）', 11, C.ink, true, 'end')], [eb(152, '重い粒ほど 岸の近くで沈む', C.blue, FILL.blue, 15), tx(206, '軽い泥は 沖まで運ばれる', 12, C.gray)]),
  },
  {
    note: '粒の大きさは、れきが2mm以上、砂が1/16〜2mm、泥が1/16mm以下です。堆積する場所は、れきが岸に近い浅い所、砂がその先、泥が沖の深い所、という順に対応します。',
    add: F([bx(14, 22, 120, 30, 'れき（2mm以上）', C.gray, FILL.gray, 11), ar(138, 37, 168, 37, C.gray), bx(172, 22, 134, 30, '岸に近い・浅い', C.blue, FILL.blue, 12), bx(14, 60, 120, 30, '砂（1/16〜2mm）', C.main, FILL.yellow, 11), ar(138, 75, 168, 75, C.gray), bx(172, 60, 134, 30, '少し沖', C.blue, FILL.blue, 12), bx(14, 98, 120, 30, '泥（1/16mm以下）', C.blue, FILL.blue, 11), ar(138, 113, 168, 113, C.gray), bx(172, 98, 134, 30, '沖・深い', C.blue, FILL.blue, 12)], [eb(152, '粒が大きい ＝ 浅い', C.blue, FILL.blue, 16), tx(206, '粒が細かい ＝ 深い', 14, C.gray, true)]),
  },
  {
    note: '❓ 泥→砂→れき の順だと、場所はどう変わったの？ 沖の深い所でたまる泥から、しだいに岸に近い所でたまる砂、さらに浅いれきへ。堆積した場所が、しだいに岸に近づいていったことになります。',
    add: F([...flow(['深い海\n（泥）', '少し浅い\n（砂）', '浅い海\n（れき）'], 30, { h: 56, color: C.blue, fill: FILL.blue, size: 13 }).flat(), L(160, 106, '時間がたつにつれて →', 12, C.red, true)], [eb(152, '海が しだいに 浅くなった', C.red, FILL.red, 16), tx(206, '場所が岸に近づいた', 13, C.gray, true)]),
  },
  {
    note: '❓ 海が浅くなる原因は？ 海水面が下がったか、陸地が隆起（盛り上がる）したかのどちらかが考えられます。どちらの場合も、同じ場所から見ると海が浅くなります。',
    add: F([bx(14, 24, 130, 40, '海水面が\n下がった', C.blue, FILL.blue, 12), bx(176, 24, 130, 40, '陸地が\n隆起した', C.main, FILL.yellow, 12), ar(79, 70, 150, 98, C.gray), ar(241, 70, 170, 98, C.gray), bx(70, 100, 180, 30, '海が浅くなる（海退）', C.red, FILL.red, 14)], [eb(152, '原因は 2とおり考えられる', C.blue, FILL.blue, 15), tx(206, '海水面の低下 または 陸地の隆起', 12, C.gray)]),
  },
  {
    note: '答えです。泥岩（粒が細かく深い海）から、砂岩、れき岩（粒が粗く浅い海・陸に近い環境）へと変化しているので、堆積した場所の海が次第に浅くなっていった（海退：海水面の低下または陸地の隆起）と考えられます。',
    add: F([eb(12, '泥岩（深い海）→ 砂岩 → れき岩（浅い海）', C.blue, FILL.blue, 13, 32), eb(56, '粒が しだいに 粗くなった', C.main, FILL.yellow, 14, 32), eb(100, '海は しだいに 浅くなった（海退）', C.red, FILL.red, 14, 32)], [tx(170, '答え 海が浅くなった', 16, C.green, true)]),
  },
  {
    note: '確かめ（検算）です。逆に「れき岩→砂岩→泥岩」の順に重なっていたら、粒がだんだん細かくなるので、海がだんだん深くなったことになります（海進）。順番で結論が反対になります。',
    add: F([...flow(['浅い海\n（れき）', '少し浅い\n（砂）', '深い海\n（泥）'], 30, { h: 56, color: C.gray, fill: FILL.gray, size: 13 }).flat(), L(160, 106, '下から上へ（古い → 新しい）', 12, C.gray, true)], [eb(152, '逆の順なら 海が深くなる（海進）', C.blue, FILL.blue, 14), tx(206, '重なる順で、読みとりが反対になる', 12, C.gray)]),
  },
  {
    note: '海進と海退の言葉も整理しましょう。海進は海岸線が陸のほうへ進み、海が広がって深くなること。海退は海岸線が沖のほうへしりぞき、海が浅くなることです。',
    add: F([bx(14, 24, 140, 60, '海進\n海が広がる・深くなる', C.blue, FILL.blue, 12), bx(166, 24, 140, 60, '海退\n海がしりぞく・浅くなる', C.red, FILL.red, 12), L(84, 106, '粒が しだいに 細かく', 11, C.blue, true), L(236, 106, '粒が しだいに 粗く', 11, C.red, true)], [eb(152, '今回は 海退', C.red, FILL.red, 17), tx(206, '上ほど粒が粗い ＝ 海退', 13, C.gray, true)]),
  },
  {
    note: 'よくあるまちがいは、「粒が粗い＝浅い海」「粒が細かい＝深い海」の対応を逆にすることです。重い粒は岸の近くで先に沈み、軽い泥は沖の深い所まで運ばれる、と理由から思い出せば逆になりません。',
    add: F([eb(14, '粒が粗い ＝ 深い海', C.red, FILL.red, 16, 34), L(160, 62, '重い粒が沖まで？', 12, C.red, true), eb(80, '粒が粗い ＝ 浅い海（岸に近い）', C.green, FILL.green, 15, 34)], [tx(150, '× 粗い＝深い　　○ 粗い＝浅い', 14, C.gray, true), tx(190, '理由：重い粒は、岸の近くで沈む', 13, C.gray)]),
  },
], '地層の重なりと海の深さの変化');

// ── 数学 ──────────────────────────────────────────

// 座標平面の小道具
type Pl = { X: (x: number) => number; Y: (y: number) => number };
const mkPl = (ox: number, oy: number, ux: number, uy: number): Pl => ({ X: (x) => ox + ux * x, Y: (y) => oy - uy * y });
const axes2 = (p: Pl, x0: number, x1: number, y0: number, y1: number, xl = 'x', yl = 'y'): E[] => [
  ar(p.X(x0), p.Y(0), p.X(x1), p.Y(0), C.ink),
  ar(p.X(0), p.Y(y0), p.X(0), p.Y(y1), C.ink),
  L(p.X(x1) - 2, p.Y(0) + 12, xl, 11, C.ink, true, 'end'),
  L(p.X(0) + 6, p.Y(y1) + 4, yl, 11, C.ink, true, 'start'),
  L(p.X(0) - 4, p.Y(0) + 11, 'O', 10, C.gray, false, 'end'),
];
const pt = (p: Pl, x: number, y: number, color: string = C.red, label?: string, dx = 6, dy = -8, anchor: 'start' | 'middle' | 'end' = 'start'): E[] => [
  ci(p.X(x), p.Y(y), 3.5, undefined, color, color),
  ...(label ? [L(p.X(x) + dx, p.Y(y) + dy, label, 11, color, true, anchor)] : []),
];
const seg = (p: Pl, x1: number, y1: number, x2: number, y2: number, color: string = C.blue, dashed = false, w = 2): E => ln(p.X(x1), p.Y(y1), p.X(x2), p.Y(y2), color, dashed, w);
const curveOf = (p: Pl, f: (x: number) => number, x0: number, x1: number, color: string = C.purple, n = 30): E[] => {
  const out: E[] = [];
  for (let i = 0; i < n; i++) {
    const a = x0 + ((x1 - x0) * i) / n;
    const b = x0 + ((x1 - x0) * (i + 1)) / n;
    out.push(seg(p, a, f(a), b, f(b), color, false, 2));
  }
  return out;
};

// 2点を通る直線の式
const P02 = mkPl(50, 112, 40, 11);
const base02 = (): E[] => [...axes2(P02, -0.4, 4.4, -2.2, 9.6), ...pt(P02, 1, 5, C.red, 'A(1, 5)'), ...pt(P02, 3, -1, C.red, 'B(3, −1)', 6, 12)];
const s2c1_02: Figure = show([
  {
    note: '2点 A(1, 5)、B(3, −1) を通る直線の式を、y＝ax＋b の形で求めます。まず、2つの点を座標平面にとってみましょう。',
    add: F(base02(), [eb(152, '直線の式 y ＝ ax ＋ b を求める', C.blue, FILL.blue, 15), tx(206, 'a：傾き　b：切片', 12, C.gray)]),
  },
  {
    note: '❓ なぜ「傾き」と「切片」の2つが分かれば、直線が決まるの？ 傾きは右へ1進んだときの上下の量、切片はy軸と交わる高さです。この2つが決まれば、直線はたった1本に決まります。',
    add: T([seg(P02, 0.2, 7.4, 3.3, -1.9, C.green, false, 2)], [eb(152, '傾き a ＋ 切片 b で 直線が1本に決まる', C.green, FILL.green, 14), tx(206, '2点を通る直線は、1本しかない', 12, C.gray)]),
  },
  {
    note: '❓ 傾きはどう求めるの？ AからBへ進むとき、x座標は 3−1 ＝ 2 だけ右へ、y座標は −1−5 ＝ −6 だけ変わります（6だけ下がる）。この「右へ2、下へ6」が手がかりです。',
    add: T([seg(P02, 1, 5, 3, 5, C.blue, true, 1.8), seg(P02, 3, 5, 3, -1, C.red, true, 1.8), L(P02.X(2.5), P02.Y(5) - 9, '右へ 2', 11, C.blue, true), L(P02.X(3) + 6, P02.Y(2), '下へ 6\n（−6）', 11, C.red, true, 'start')], [eb(152, 'x が +2 のとき y は −6', C.blue, FILL.blue, 16), tx(206, 'A → B で進んだ量', 12, C.gray)]),
  },
  {
    note: '❓ では、1あたりはいくつ？ 右へ2で6下がるので、右へ1では 6÷2 ＝ 3 下がります。傾きは「yの増加量÷xの増加量」＝(−1−5)÷(3−1)＝−3 です。下がるので負の数です。',
    add: T([seg(P02, 1, 5, 2, 5, C.green, false, 2.4), seg(P02, 2, 5, 2, 2, C.green, false, 2.4), L(60, 92, '右へ1で\n下へ3', 10, C.green, true, 'start')], [eb(152, '傾き ＝ (−1−5) ÷ (3−1) ＝ −3', C.green, FILL.green, 15), tx(206, 'yの増加量 ÷ xの増加量', 12, C.gray)]),
  },
  {
    note: '❓ 引く順番はどうすればいいの？ 分子と分母で、同じ点を先に書きます。Bの値からAの値を引く順で、分子も分母もそろえます。どちらも逆順（A−B）でも同じ−3。片方だけ逆にすると符号がまちがいます。',
    add: F([eb(10, '(−1−5)÷(3−1) ＝ −6÷2 ＝ −3 ○', C.green, FILL.green, 14, 34), eb(52, '(5−(−1))÷(1−3) ＝ 6÷(−2) ＝ −3 ○', C.green, FILL.green, 13, 34), eb(94, '(−1−5)÷(1−3) ＝ −6÷(−2) ＝ 3 ✗', C.red, FILL.red, 14, 34)], [tx(160, '分子と分母は、同じ順で引く', 14, C.gray, true)]),
  },
  {
    note: '❓ 切片 b はどう求めるの？ 求める式は y＝−3x＋b。直線上の点は、必ず式にあてはまります。そこでAの座標(1, 5)を代入します。5 ＝ −3×1＋b より b ＝ 8 です。',
    add: F([eb(12, 'y ＝ −3x ＋ b', C.blue, FILL.blue, 17, 32), ar(160, 46, 160, 60, C.gray), eb(62, 'A(1, 5) を代入', C.blue, FILL.blue, 15, 30), ar(160, 94, 160, 106, C.gray), eb(108, '5 ＝ −3×1 ＋ b → b ＝ 8', C.green, FILL.green, 15, 30)], [tx(160, '通る点は、必ず式にあてはまる', 13, C.gray, true)]),
  },
  {
    note: 'b ＝ 8 は、直線がy軸と交わる点が (0, 8) であることを表します。図のとおり、直線はy軸の高さ8の点を通り、A、Bも通っています。',
    add: F([...base02(), seg(P02, 0, 8, 3.3, -1.9, C.green, false, 2.4), ...pt(P02, 0, 8, C.green, 'b ＝ 8', 6, -2)], [eb(152, '切片 b ＝ 8（y軸との交点）', C.green, FILL.green, 16), tx(206, '直線は A、B、(0, 8) を通る', 12, C.gray)]),
  },
  {
    note: '傾き−3、切片8なので、直線の式は y ＝ −3x ＋ 8 です。',
    add: F(flow(['傾き −3', '切片 8', 'y ＝ −3x＋8'], 40, { h: 44, color: C.green, fill: FILL.green, size: 14 }).flat(), [eb(152, '答え y ＝ −3x ＋ 8', C.green, FILL.green, 19)]),
  },
  {
    note: '確かめ（検算）です。もう一つの点Bで確かめます。x＝3 を入れると −3×3＋8 ＝ −1 で、Bのyに一致します。Aも −3×1＋8 ＝ 5 で合います。両方の点を通るので正しい式です。',
    add: F([eb(12, 'A：x＝1 → −3×1＋8 ＝ 5 ✓', C.green, FILL.green, 15, 32), eb(56, 'B：x＝3 → −3×3＋8 ＝ −1 ✓', C.green, FILL.green, 15, 32)], [tx(120, '2点とも通れば、正しい', 15, C.green, true)]),
  },
  {
    note: '別の見方でも確かめられます。式に x＝0, 1, 2, 3 を入れると、y は 8, 5, 2, −1。xが1ふえるごとにyは3ずつ減り、傾き−3と合っています。',
    add: F([...axes2(P02, -0.4, 4.4, -2.2, 9.6), seg(P02, 0, 8, 3.3, -1.9, C.green, false, 2), ...pt(P02, 0, 8, C.green, '8', 6, -4), ...pt(P02, 1, 5, C.green, '5', 6, -4), ...pt(P02, 2, 2, C.green, '2', 6, -4), ...pt(P02, 3, -1, C.green, '−1', 6, 10), L(P02.X(0.5) + 8, P02.Y(6.5) - 6, '−3', 11, C.red, true), L(P02.X(1.5) + 8, P02.Y(3.5) - 6, '−3', 11, C.red, true), L(P02.X(2.5) + 8, P02.Y(0.5) - 6, '−3', 11, C.red, true)], [eb(152, 'x が1ふえる → y は 3へる', C.green, FILL.green, 15), tx(206, '8 → 5 → 2 → −1', 12, C.gray)]),
  },
  {
    note: 'よくあるまちがいは、符号です。直線は右下がり（右へ進むと下がる）なので、傾きは負です。「y＝3x＋8」と答えたら右上がりになり、図と合いません。グラフの向きで必ず確かめます。',
    add: F([...base02(), seg(P02, 0.2, 7.4, 3.3, -1.9, C.green, false, 2), L(P02.X(3.6), P02.Y(6), '右下がり\n→ 傾きは負', 11, C.red, true, 'start')], [eb(152, '右下がり → 傾き ＜ 0', C.red, FILL.red, 16), tx(206, '× y＝3x＋8（右上がり）', 13, C.gray, true)]),
  },
], '2点を通る直線の式');

// 放物線上の2点を通る直線
const P12 = mkPl(140, 120, 22, 8.3);
const base12 = (): E[] => [...axes2(P12, -4.4, 7, -0.8, 13.2), ...curveOf(P12, (x) => (x * x) / 3, -4, 6.4, C.purple, 26), ...pt(P12, -3, 3, C.red, 'A(−3, 3)', -6, -8, 'end'), ...pt(P12, 6, 12, C.red, 'B(6, 12)', -6, -6, 'end')];
const s2c1_12: Figure = show([
  {
    note: '放物線 y＝(1/3)x² 上の2点 A(−3, 3)、B(6, 12) を通る直線の式を求めます。まず図に2点をとります。',
    add: F(base12(), [eb(152, '直線ABの式を求める', C.blue, FILL.blue, 16), tx(206, 'A、B は放物線 y＝(1/3)x² の上の点', 12, C.gray)]),
  },
  {
    note: '❓ なぜ、2点が分かれば直線が決まるの？ 2つの点を定規で結べば、直線はたった1本しかひけないからです。放物線上の点かどうかは関係ありません。求めるのは、この直線の傾きと切片です。',
    add: T([seg(P12, -4, 2, 6.5, 12.5, C.green, false, 2)], [eb(152, '2点を結ぶ直線は 1本だけ', C.green, FILL.green, 16), tx(206, '傾き a と 切片 b を求める', 12, C.gray)]),
  },
  {
    note: '❓ 傾きは？ AからBへ、x座標は 6−(−3) ＝ 9 だけ右へ、y座標は 12−3 ＝ 9 だけ上へ進みます。「右へ9、上へ9」です。',
    add: T([seg(P12, -3, 3, 6, 3, C.blue, true, 1.8), seg(P12, 6, 3, 6, 12, C.red, true, 1.8), L(P12.X(1.5), P12.Y(3) + 12, '右へ 9', 11, C.blue, true), L(P12.X(6) + 6, P12.Y(7.5), '上へ 9', 11, C.red, true, 'start')], [eb(152, 'x が +9 のとき y は +9', C.blue, FILL.blue, 16), tx(206, 'A → B で進んだ量', 12, C.gray)]),
  },
  {
    note: '❓ では1あたりは？ 右へ9で9上がるので、右へ1では 9÷9 ＝ 1 上がります。傾き ＝ yの増加量÷xの増加量 ＝ (12−3)÷(6−(−3)) ＝ 1 です。',
    add: T([seg(P12, -3, 3, -2, 3, C.green, false, 2.4), seg(P12, -2, 3, -2, 4, C.green, false, 2.4), L(P12.X(-3.2), P12.Y(6.6), '右へ1 → 上へ1', 10, C.green, true, 'start')], [eb(152, '傾き ＝ (12−3) ÷ (6+3) ＝ 1', C.green, FILL.green, 15), tx(206, 'x の差は 6−(−3) ＝ 9', 12, C.gray)]),
  },
  {
    note: '❓ 切片は？ 求める式は y＝x＋b。直線上の点は式にあてはまるので、A(−3, 3) を代入します。3 ＝ −3＋b より b ＝ 6。引き算で −(−3) になる所の符号に注意します。',
    add: F([eb(12, 'y ＝ x ＋ b', C.blue, FILL.blue, 17, 32), ar(160, 46, 160, 60, C.gray), eb(62, 'A(−3, 3) を代入', C.blue, FILL.blue, 15, 30), ar(160, 94, 160, 106, C.gray), eb(108, '3 ＝ −3 ＋ b → b ＝ 6', C.green, FILL.green, 15, 30)], [tx(160, '負の数を代入するときは、かっこをつける', 12, C.gray, true)]),
  },
  {
    note: '切片 b＝6 は、直線がy軸と交わる点 (0, 6) です。図でも、直線はA、Bを通り、y軸の6の高さを通っています。',
    add: F([...base12(), seg(P12, -4, 2, 6.5, 12.5, C.green, false, 2.4), ...pt(P12, 0, 6, C.green, 'b ＝ 6', 6, -2)], [eb(152, '切片 b ＝ 6', C.green, FILL.green, 17), tx(206, '傾き1、切片6の直線', 12, C.gray)]),
  },
  {
    note: '傾き1、切片6なので、直線の式は y ＝ x ＋ 6 です。',
    add: F(flow(['傾き 1', '切片 6', 'y ＝ x＋6'], 40, { h: 44, color: C.green, fill: FILL.green, size: 14 }).flat(), [eb(152, '答え y ＝ x ＋ 6', C.green, FILL.green, 19)]),
  },
  {
    note: '確かめ（検算）です。B(6, 12) を式に入れると 6＋6 ＝ 12 で一致します。A(−3, 3) も −3＋6 ＝ 3 で一致します。2点とも式にあてはまるので正しいです。',
    add: F([eb(12, 'A：−3 ＋ 6 ＝ 3 ✓', C.green, FILL.green, 16, 32), eb(56, 'B：6 ＋ 6 ＝ 12 ✓', C.green, FILL.green, 16, 32)], [tx(120, '2点とも通るので 正しい', 15, C.green, true)]),
  },
  {
    note: '放物線 y＝ax² 上の2点の x座標を p、q とすると、傾きは a(p＋q) になります。❓ なぜ？ yの差 aq²−ap² ＝ a(q−p)(q＋p) を、xの差 q−p で割ると a(q＋p) が残るからです。ここでは (1/3)×(−3＋6) ＝ 1 で一致します。',
    add: F([eb(10, 'aq² − ap² ＝ a(q−p)(q＋p)', C.blue, FILL.blue, 14, 32), eb(54, '÷(q−p) → 傾き ＝ a(p＋q)', C.blue, FILL.blue, 14, 32), eb(98, '(1/3)×(−3＋6) ＝ 1 ✓', C.green, FILL.green, 15, 32)], [tx(160, '切片は −apq ＝ −(1/3)×(−3)×6 ＝ 6 ✓', 13, C.green, true)]),
  },
  {
    note: 'よくあるまちがいは、傾きを「xの差÷yの差」にしてしまうことです。今回はたまたま 9÷9 で同じ値になりますが、いつもは「y÷x」の順です。傾きは「右へ1進むと上下にどれだけ動くか」と覚えます。',
    add: F([eb(14, '傾き ＝ xの差 ÷ yの差', C.red, FILL.red, 16, 34), L(160, 62, 'たまたま同じ値になっても ×', 12, C.red, true), eb(80, '傾き ＝ yの増加 ÷ xの増加', C.green, FILL.green, 16, 34)], [tx(150, '右へ1 → 上下にどれだけ？', 14, C.gray, true), tx(190, 'これが傾き', 13, C.gray)]),
  },
], '放物線上の2点を通る直線');

// 兄を追いかける弟
const P13 = mkPl(40, 122, 10, 0.028);
const s2c1_13: Figure = show([
  {
    note: '兄は毎分160mの速さで家を出発しました。8分後に、弟が自転車で毎分240mの速さで追いかけます。(1)弟が出発してから何分後に追いつくか。(2)追いついた地点の家からの距離を求めます。',
    add: F([ln(20, 70, 300, 70, C.gray, false, 2), bx(14, 54, 36, 32, '家', C.ink, FILL.gray, 13), ci(127, 70, 10, '兄', C.red, FILL.red, 11), L(127, 46, '8分後の兄', 11, C.red, true), ci(56, 108, 10, '弟', C.blue, FILL.blue, 11), ar(142, 62, 196, 62, C.red), L(224, 62, '毎分160m', 12, C.red, true), ar(70, 108, 196, 108, C.blue), L(232, 108, '毎分240m', 12, C.blue, true)], [eb(152, '弟はいつ、兄に追いつく？', C.blue, FILL.blue, 16), tx(206, '弟は兄より8分おくれて出発', 12, C.gray)]),
  },
  {
    note: '❓ 弟が出発するとき、兄はどこにいるの？ 兄は8分先に出発しているので、もう 160×8 ＝ 1280m 進んでいます。距離＝速さ×時間です。これが弟が追いかけるときの「差」になります。',
    add: F([ln(40, 70, 290, 70, C.gray, false, 2), bx(40, 54, 77, 32, '1280m', C.red, FILL.red, 13), ci(117, 70, 9, '兄', C.red, FILL.red, 10), ci(40, 70, 9, '弟', C.blue, FILL.blue, 10), L(78, 100, '弟が出発するときの差', 11, C.red, true)], [eb(152, '160 × 8 ＝ 1280m', C.red, FILL.red, 18), tx(206, '距離 ＝ 速さ × 時間', 12, C.gray)]),
  },
  {
    note: '❓ 追いつくとは、どういうこと？ 弟は毎分240m、兄は毎分160m進むので、1分ごとに 240−160 ＝ 80m ずつ差がちぢみます。この差が0になったときが、追いついたときです。',
    add: F([bx(20, 26, 240, 28, '弟 毎分 240m 進む', C.blue, FILL.blue, 14), bx(20, 62, 160, 28, '兄 毎分 160m 進む', C.red, FILL.red, 14), bx(180, 62, 80, 28, '差 80m', C.green, FILL.green, 13), L(160, 112, '1分ごとに 80m ずつ差がちぢむ', 13, C.green, true)], [eb(152, '240 − 160 ＝ 80m/分', C.green, FILL.green, 17), tx(206, '速さの差が、ちぢむ速さ', 12, C.gray)]),
  },
  {
    note: '❓ 1280mの差は、何分でなくなるの？ 1分に80mちぢむので、1280÷80 ＝ 16。16分で差が0になります。80mが16回ぶんで、ちょうど1280mです。',
    add: F([L(160, 20, '1280m の差', 12, C.red, true), ...Array.from({ length: 16 }, (_, i) => bx(20 + i * 17.5, 34, 16, 34, undefined, C.green, FILL.green)), L(160, 92, '1つが 80m（1分ぶん）', 12, C.green, true), L(160, 114, '16個 ＝ 16分', 14, C.green, true)], [eb(152, '1280 ÷ 80 ＝ 16', C.green, FILL.green, 18), tx(206, '差 ÷ ちぢむ速さ ＝ かかる時間', 12, C.gray)]),
  },
  {
    note: '(1)の答えです。弟が出発してから16分後に、兄に追いつきます。',
    add: F(flow(['差 1280m', '÷ 80m/分', '16分後'], 40, { h: 44, color: C.green, fill: FILL.green, size: 14 }).flat(), [eb(152, '(1) 16分後', C.green, FILL.green, 20)]),
  },
  {
    note: '❓ (2)追いついた地点は、家から何mか？ 追いついた地点は、弟が進んだ場所です。弟は16分間、毎分240mで進んだので、240×16 ＝ 3840m。家から3840mの地点です。',
    add: F([ln(40, 70, 290, 70, C.gray, false, 2), bx(40, 54, 240, 32, '240 × 16 ＝ 3840m', C.blue, FILL.blue, 14), ci(40, 70, 9, '弟', C.blue, FILL.blue, 10), ci(280, 70, 9, '兄', C.red, FILL.red, 10), L(160, 104, '弟が16分間に進んだ距離', 12, C.blue, true)], [eb(152, '(2) 3840m', C.green, FILL.green, 20), tx(206, '追いついた地点 ＝ 弟が進んだ地点', 12, C.gray)]),
  },
  {
    note: '別の解き方です。弟が出発してからx分後として、兄は (x＋8) 分進んでいるので、兄が進んだ距離は160(x＋8)、弟は240x。追いつくときは等しいので 240x＝160(x＋8)。これを解くと 80x＝1280、x＝16 になり、同じ結果になります。',
    add: F([eb(6, '弟 240x ＝ 兄 160(x＋8)', C.blue, FILL.blue, 14, 28), eb(40, '240x ＝ 160x ＋ 1280', C.blue, FILL.blue, 14, 28), eb(74, '80x ＝ 1280', C.blue, FILL.blue, 14, 28), eb(108, 'x ＝ 16', C.green, FILL.green, 15, 28)], [tx(160, 'ひとつの式で解いても、同じ16分', 13, C.gray, true), tx(200, '兄は「x＋8」分進んでいる', 12, C.gray)]),
  },
  {
    note: 'グラフでも確かめられます。横軸は兄が出発してからの時間、縦軸は家からの距離です。兄は原点から、弟は8分の点から出発し、傾きが大きい弟のグラフが、24分・3840mの点で兄と交わります。',
    add: F([...axes2(P13, -1, 26, -10, 4200, '', '距離(m)'), L(300, 108, '時間(分)', 10, C.ink, true, 'end'), seg(P13, 0, 0, 25, 4000, C.red, false, 2.4), seg(P13, 8, 0, 25, 4080, C.blue, false, 2.4), seg(P13, 0, 3840, 24, 3840, C.gray, true, 1.4), seg(P13, 24, 3840, 24, 0, C.gray, true, 1.4), ...pt(P13, 24, 3840, C.green, '', 0, 0), L(P13.X(24), P13.Y(0) + 13, '24分', 10, C.green, true), L(P13.X(8), P13.Y(0) + 13, '8', 10, C.blue, true), L(48, 32, '3840m', 10, C.green, true, 'start'), L(120, 98, '兄', 11, C.red, true), L(244, 70, '弟', 11, C.blue, true)], [eb(152, '交点 ＝ 追いついた点', C.green, FILL.green, 16), tx(206, '24分後（弟の出発から 24−8＝16分）', 12, C.gray)]),
  },
  {
    note: '確かめ（検算）です。兄は家を出てから 8＋16 ＝ 24分進んでいるので、兄の距離は 160×24 ＝ 3840m。弟の距離 240×16 ＝ 3840m と一致します。',
    add: F([eb(12, '弟：240 × 16 ＝ 3840m', C.blue, FILL.blue, 16, 32), eb(56, '兄：160 × (16＋8) ＝ 3840m', C.red, FILL.red, 16, 32), eb(100, '一致 ✓', C.green, FILL.green, 17, 32)], [tx(170, '2人が同じ地点にいる', 14, C.green, true)]),
  },
  {
    note: 'よくあるまちがいは、兄の進んだ時間も単にxとして 160x にすることです。兄は8分早く出発しているので、兄の時間は (x＋8) です。出発時刻がずれている問題では、ずれた分を必ず足します。',
    add: F([eb(14, '兄 160x（兄の時間も x）', C.red, FILL.red, 16, 34), L(160, 62, '8分の先行を入れていない', 12, C.red, true), eb(80, '兄 160(x＋8)', C.green, FILL.green, 16, 34)], [tx(150, '× 160x　　○ 160(x＋8)', 14, C.gray, true), tx(190, '先に出た人は、時間が 8分多い', 13, C.gray)]),
  },
], '兄を追いかける弟（追いつく問題）');

// 正方形の辺上を動く点と三角形の面積
const sqA: [number, number] = [70, 120];
const sqB: [number, number] = [160, 120];
const sqC: [number, number] = [160, 30];
const sqD: [number, number] = [70, 30];
const square = (): E[] => [pg([sqA, sqB, sqC, sqD], C.ink, 'rgba(255,255,255,0)'), L(60, 126, 'A', 12, C.ink, true, 'end'), L(168, 126, 'B', 12, C.ink, true, 'start'), L(168, 26, 'C', 12, C.ink, true, 'start'), L(60, 26, 'D', 12, C.ink, true, 'end'), L(115, 136, '6cm', 11, C.gray, true), L(58, 75, '6cm', 11, C.gray, true, 'end')];
const s2c1_17: Figure = show([
  {
    note: '1辺6cmの正方形ABCDで、点PはAを出発し、毎秒2cmの速さで辺AB上をBに向かって動きます。出発してからx秒後の△APDの面積を y cm² とします。',
    add: F([...square(), ci(70, 120, 4, undefined, C.red, C.red), ar(76, 128, 120, 128, C.red), L(186, 54, 'P は A から\n毎秒 2cm で\nB へ進む', 11, C.red, true, 'start'), L(186, 100, 'x秒後の △APD の\n面積が y cm²', 11, C.blue, true, 'start')], [eb(152, '(1) y を x の式で  (2) x＝2  (3) y＝15', C.blue, FILL.blue, 13), tx(206, '0 ≦ x ≦ 3', 12, C.gray)]),
  },
  {
    note: '❓ まず、x秒後の AP の長さは？ 距離＝速さ×時間なので、AP＝2×x＝2x cm です。たとえば x＝2 のとき AP＝4cm。図では P は A から4cm（正方形の辺の3分の2）の位置です。',
    add: F([...square(), ci(130, 120, 4, undefined, C.red, C.red), L(130, 108, 'P', 12, C.red, true), ln(70, 112, 130, 112, C.red, false, 3), L(100, 100, '2x', 12, C.red, true)], [eb(152, 'AP ＝ 2 × x ＝ 2x (cm)', C.red, FILL.red, 17), tx(206, 'たとえば x＝2 のとき AP＝4cm', 12, C.gray)]),
  },
  {
    note: '❓ △APD の底辺と高さは、どこ？ 正方形の角Aは90°なので、APとADは垂直です。だから、APを底辺、ADを高さとして、三角形の面積の公式がそのまま使えます。',
    add: F([...square(), pg([[70, 120], [130, 120], [70, 30]], C.red, 'rgba(225,29,72,0.15)'), pg([[70, 120], [82, 120], [82, 108], [70, 108]], C.ink, 'rgba(255,255,255,0)'), ci(130, 120, 4, undefined, C.red, C.red), L(130, 138, 'P', 11, C.red, true), L(96, 108, '底辺 AP', 11, C.red, true), L(172, 70, '高さ AD＝6', 11, C.blue, true, 'start')], [eb(152, '∠A ＝ 90° → AP ⟂ AD', C.blue, FILL.blue, 16), tx(206, 'APが底辺、ADが高さ', 12, C.gray)]),
  },
  {
    note: '❓ なぜ面積を ÷2 するの？ APとADを2辺とする長方形をかくと、その面積は AP×AD。△APD は、その長方形を対角線で2つに分けた半分です。だから AP×AD÷2 になります。',
    add: F([...square(), pg([[70, 120], [130, 120], [130, 30], [70, 30]], C.gray, 'rgba(110,100,92,0.08)'), pg([[70, 120], [130, 120], [70, 30]], C.red, 'rgba(225,29,72,0.25)'), ln(70, 120, 130, 30, C.red, true, 1.4), L(90, 88, '△APD', 11, C.red, true), L(232, 76, '長方形の\n半分', 12, C.gray, true)], [eb(152, '△ ＝ 底辺 × 高さ ÷ 2', C.red, FILL.red, 17), tx(206, '長方形 AP×AD の、半分', 12, C.gray)]),
  },
  {
    note: '(1)の式です。y ＝ AP×AD÷2 ＝ 2x×6÷2 ＝ 12x÷2 ＝ 6x。したがって y＝6x です。',
    add: F([eb(12, 'y ＝ AP × AD ÷ 2', C.blue, FILL.blue, 16, 32), ar(160, 48, 160, 60, C.gray), eb(62, '＝ 2x × 6 ÷ 2', C.blue, FILL.blue, 16, 32), ar(160, 98, 160, 110, C.gray), eb(112, '＝ 6x', C.green, FILL.green, 17, 28)], [tx(170, '(1) y ＝ 6x', 18, C.green, true)]),
  },
  {
    note: '❓ なぜ 0≦x≦3 なの？ Pが辺ABの終わり（B）に着くのは、6÷2 ＝ 3秒後です。それ以降はBCの上を動き、△APDの形が変わって、式 y＝6x は使えなくなります。',
    add: F([...square(), ci(160, 120, 4, undefined, C.red, C.red), L(172, 112, 'B に着く', 11, C.red, true, 'start'), pg([[70, 120], [160, 120], [70, 30]], C.red, 'rgba(225,29,72,0.12)'), L(232, 76, '3秒で着く\n（6÷2＝3）', 12, C.red, true)], [eb(152, '0 ≦ x ≦ 3', C.red, FILL.red, 18), tx(206, '辺ABの上にいる間だけ y＝6x', 12, C.gray)]),
  },
  {
    note: '(2) x＝2 のとき、式 y＝6x に入れて y＝6×2＝12。図でも確かめると、AP＝4cm、AD＝6cm なので 4×6÷2＝12cm² で一致します。',
    add: F([...square(), pg([[70, 120], [130, 120], [70, 30]], C.red, 'rgba(225,29,72,0.2)'), ci(130, 120, 4, undefined, C.red, C.red), L(100, 100, 'AP＝4', 11, C.red, true), L(232, 76, 'x＝2 のとき\n4×6÷2＝12', 12, C.red, true)], [eb(152, '(2) y ＝ 6 × 2 ＝ 12', C.green, FILL.green, 18), tx(206, '面積 12cm²', 13, C.gray, true)]),
  },
  {
    note: '(3) y＝15 になるときの x を求めます。15 ＝ 6x。❓ なぜ÷6？ 6をかけて15になる数を探すので、もとにもどすには6でわります。x ＝ 15÷6 ＝ 2.5。0≦x≦3の範囲内なので適します。',
    add: F([bx(20, 30, 100, 40, '15 ＝ 6x', C.blue, FILL.blue, 16), ar(124, 50, 176, 50, C.gray), L(150, 40, '÷ 6', 11, C.gray, true), bx(180, 30, 120, 40, 'x ＝ 15÷6 ＝ 2.5', C.green, FILL.green, 14), L(160, 98, '2.5 は 0 ≦ x ≦ 3 の中 ○', 13, C.green, true)], [eb(152, '(3) x ＝ 2.5', C.green, FILL.green, 20), tx(206, '範囲の確認も忘れずに', 12, C.gray)]),
  },
  {
    note: 'グラフにすると y＝6x は原点を通る直線で、x＝2 のとき y＝12、x＝2.5 のとき y＝15、x＝3 のとき y＝18（正方形の半分の面積）です。',
    add: F([...axes2(mkPl(50, 122, 70, 5.5), -0.4, 3.6, -1, 19.5), seg(mkPl(50, 122, 70, 5.5), 0, 0, 3, 18, C.red, false, 2.4), ...pt(mkPl(50, 122, 70, 5.5), 2, 12, C.red, '(2, 12)', -4, -6, 'end'), ...pt(mkPl(50, 122, 70, 5.5), 2.5, 15, C.red, '(2.5, 15)', -4, -6, 'end'), ...pt(mkPl(50, 122, 70, 5.5), 3, 18, C.red, '(3, 18)', 6, 4)], [eb(152, 'y ＝ 6x は 原点を通る直線', C.red, FILL.red, 16), tx(206, 'x：秒　y：cm²', 12, C.gray)]),
  },
  {
    note: '確かめ（検算）です。x＝2.5 のとき、AP＝2×2.5＝5cm。△APD ＝ 5×6÷2 ＝ 15cm² で、問題の y＝15 と一致します。答えは (1) y＝6x (2) y＝12 (3) x＝2.5 です。',
    add: F([eb(12, 'x＝2.5 → AP ＝ 2×2.5 ＝ 5cm', C.blue, FILL.blue, 15, 32), eb(56, '5 × 6 ÷ 2 ＝ 15 ✓', C.green, FILL.green, 16, 32), eb(100, '(1) y＝6x (2) 12 (3) 2.5', C.green, FILL.green, 15, 32)], [tx(170, '答えをまとめる', 13, C.gray, true)]),
  },
  {
    note: 'よくあるまちがいは、△APD の底辺・高さを、PB や AB とまちがえることです。△PBD ではなく、直角をはさむ AP と AD を使います。直角がどこにあるかを、まず見つけましょう。',
    add: F([...square(), pg([[130, 120], [160, 120], [70, 30]], C.red, 'rgba(225,29,72,0.2)'), pg([[70, 120], [130, 120], [70, 30]], C.green, 'rgba(22,163,74,0.2)'), ci(130, 120, 4, undefined, C.red, C.red), L(180, 50, '× PB を底辺にする', 11, C.red, true, 'start'), L(180, 80, '○ 直角をはさむ\nAP と AD', 11, C.green, true, 'start')], [eb(152, '直角をはさむ2辺が、底辺と高さ', C.green, FILL.green, 14), tx(206, '動点の問題は、まず直角を探す', 12, C.gray)]),
  },
], '動く点と三角形の面積');

// 平行な直線の式
const P18 = mkPl(60, 82, 40, 8.5);
const ax18 = (): E[] => axes2(P18, -1, 5, -5, 8.6);
const L18a = (): E[] => [seg(P18, -1, 1, 2.8, 8.6, C.blue, false, 2.2), L(P18.X(-0.9), P18.Y(1) - 8, 'y ＝ 2x ＋ 3', 11, C.blue, true, 'start')];
const s2c1_18: Figure = show([
  {
    note: '直線 y＝2x＋3 に平行で、点 (1, −2) を通る直線の式を求めます。まず、もとの直線と点をグラフにかきます。',
    add: F([...ax18(), ...L18a(), ...pt(P18, 1, -2, C.red, 'P(1, −2)', 6, 10)], [eb(152, '平行で、Pを通る直線の式は？', C.blue, FILL.blue, 15), tx(206, 'y ＝ 2x ＋ 3 は傾き 2、切片 3', 12, C.gray)]),
  },
  {
    note: '❓ 「平行」とは何でしょう？ 交わらない2本の直線で、同じ向きにのびています。グラフでは、右へ1進むと上へ2のぼる、という傾き（ななめ具合）が同じことを表します。',
    add: T([seg(P18, 0, 3, 1, 3, C.green, false, 2.2), seg(P18, 1, 3, 1, 5, C.green, false, 2.2), L(P18.X(1) + 6, P18.Y(4), '右へ1\n上へ2', 10, C.green, true, 'start')], [eb(152, '傾き ＝ 右へ1のときの上がり方', C.green, FILL.green, 15), tx(206, 'y ＝ 2x ＋ 3 の傾きは 2', 12, C.gray)]),
  },
  {
    note: '❓ なぜ、傾きが同じだと交わらないの？ 傾きが同じなら、どこでも「右へ1で上へ2」。2本の上下のはなれ方がいつも同じままで、近づいたり遠ざかったりしません。だから、ぶつかりません。',
    add: T([seg(P18, -0.45, -4.9, 4.4, 4.8, C.green, false, 2), seg(P18, 0, 3, 0, -4, C.red, true, 1.6), seg(P18, 2, 7, 2, 0, C.red, true, 1.6), L(P18.X(0) + 5, P18.Y(-0.5), '差 7', 10, C.red, true, 'start'), L(P18.X(2) + 4, P18.Y(3.5), '差 7', 10, C.red, true, 'start')], [eb(152, '上下のはなれ方が いつも同じ', C.red, FILL.red, 15), tx(206, '→ 近づかない ＝ 交わらない', 12, C.gray)]),
  },
  {
    note: '❓ では、傾きがちがう直線だったら？ たとえば傾き3の直線は、右へ進むほど上がり方が大きく、もとの直線との上下のはなれ方がだんだん小さくなります（差は 8→6→…）。いつかは追いついて交わるので、平行ではありません。',
    add: F([...ax18(), ...L18a(), seg(P18, 0, -5, 2.3, 1.9, C.red, false, 2), seg(P18, 0, 3, 0, -5, C.red, true, 1.6), seg(P18, 2, 7, 2, 1, C.red, true, 1.6), L(P18.X(0) + 5, P18.Y(-1), '差 8', 10, C.red, true, 'start'), L(P18.X(2) + 4, P18.Y(4), '差 6', 10, C.red, true, 'start'), L(P18.X(2.3) + 4, P18.Y(1.9) + 10, '傾き3', 10, C.red, true, 'start')], [eb(152, '傾きがちがう → 差がへる → 交わる', C.red, FILL.red, 14), tx(206, '平行 ＝ 傾きが同じ', 13, C.gray, true)]),
  },
  {
    note: 'だから、求める直線も傾きは2です。式は y ＝ 2x ＋ b の形になり、あとは b（切片）を決めるだけです。',
    add: F([eb(14, 'もとの直線 y ＝ 2x ＋ 3　傾き 2', C.blue, FILL.blue, 15, 32), ar(160, 50, 160, 66, C.gray), eb(68, '求める直線 y ＝ 2x ＋ b　傾き 2', C.green, FILL.green, 15, 32)], [tx(150, '傾きは同じ。切片 b はちがうかも', 13, C.gray, true)]),
  },
  {
    note: '❓ b はどう決めるの？ 直線上の点は式にあてはまるので、通る点 P(1, −2) を代入します。−2 ＝ 2×1＋b より、b ＝ −2−2 ＝ −4 です。',
    add: F([eb(12, 'y ＝ 2x ＋ b', C.blue, FILL.blue, 17, 32), ar(160, 46, 160, 60, C.gray), eb(62, 'P(1, −2) を代入', C.blue, FILL.blue, 15, 30), ar(160, 94, 160, 106, C.gray), eb(108, '−2 ＝ 2×1 ＋ b → b ＝ −4', C.green, FILL.green, 15, 30)], [tx(160, '通る点は、必ず式にあてはまる', 13, C.gray, true)]),
  },
  {
    note: '求める直線は y＝2x−4 です。もとの直線 y＝2x＋3 と平行で、y軸とは (0, −4) で交わります。Pを通っていることも図で確かめられます。',
    add: F([...ax18(), seg(P18, -1, 1, 2.8, 8.6, C.gray, false, 1.6), seg(P18, -0.45, -4.9, 4.4, 4.8, C.green, false, 2.4), ...pt(P18, 1, -2, C.red, 'P(1, −2)', 6, 10), ...pt(P18, 0, -4, C.green, 'b ＝ −4', 6, 12), L(P18.X(4.4) - 2, P18.Y(4.8) - 8, 'y ＝ 2x − 4', 11, C.green, true, 'end')], [eb(152, '答え y ＝ 2x − 4', C.green, FILL.green, 18), tx(206, '2本は平行（傾きが同じ）', 12, C.gray)]),
  },
  {
    note: '確かめ（検算）です。x＝1 を入れると 2×1−4 ＝ −2 で、Pのyと一致します。傾きも2でもとの直線と同じ。通る点も平行の条件も、両方満たしています。',
    add: F([eb(12, 'x＝1 → 2×1 − 4 ＝ −2 ✓', C.green, FILL.green, 16, 32), eb(56, '傾き 2 ＝ もとの直線の傾き ✓', C.green, FILL.green, 15, 32)], [tx(120, '通る点 と 平行 の両方を確認', 14, C.green, true)]),
  },
  {
    note: '別の見方です。Pから傾き2のとおりに、右へ1・上へ2ずつ進むと、(1, −2)→(2, 0)→(3, 2) と、求める直線上の点がつぎつぎに見つかります。どれも y＝2x−4 にあてはまります。',
    add: F([...ax18(), seg(P18, -0.45, -4.9, 4.4, 4.8, C.green, false, 2), ...pt(P18, 1, -2, C.red, '(1, −2)', 6, 10), ...pt(P18, 2, 0, C.red, '(2, 0)', 6, 10), ...pt(P18, 3, 2, C.red, '(3, 2)', 6, 10), seg(P18, 1, -2, 2, -2, C.blue, true, 1.4), seg(P18, 2, -2, 2, 0, C.blue, true, 1.4), seg(P18, 2, 0, 3, 0, C.blue, true, 1.4), seg(P18, 3, 0, 3, 2, C.blue, true, 1.4)], [eb(152, '右へ1・上へ2 を くり返す', C.green, FILL.green, 16), tx(206, '傾き2 ＝ 右1で上2', 12, C.gray)]),
  },
  {
    note: 'よくあるまちがいは、切片3をそのまま使って y＝2x＋3 と答えることです。これは、もとの直線そのもので、x＝1 のとき y＝5。点 (1, −2) を通りません。切片は、通る点から求め直します。',
    add: F([eb(14, '切片3のまま y ＝ 2x ＋ 3', C.red, FILL.red, 15, 34), L(160, 62, 'x＝1 で y＝5 ≠ −2', 12, C.red, true), eb(80, '点から求め直す y ＝ 2x − 4', C.green, FILL.green, 15, 34)], [tx(150, '× 切片3のまま　　○ b ＝ −4', 14, C.gray, true), tx(190, '平行でも 切片は変わる', 13, C.gray)]),
  },
], '平行な直線の式');

// 放物線と直線が接する条件
const P20 = mkPl(120, 110, 36, 11);
const base20 = (): E[] => [...axes2(P20, -2.6, 3.6, -2, 9.4), ...curveOf(P20, (x) => x * x, -2.95, 3, C.purple, 30)];
const s2c1_20: Figure = show([
  {
    note: '放物線 y＝x² と直線 y＝2x＋k がちょうど1点で交わる（接する）とき、k の値と接点の座標を求めます。直線 y＝2x＋k は、k を変えると上下に動きます。',
    add: F([...base20(), seg(P20, -1.2, -1.4, 3.5, 8, C.blue, false, 2), L(P20.X(3.5) - 4, P20.Y(8) + 12, 'y ＝ 2x ＋ k', 11, C.blue, true, 'end')], [eb(152, 'ちょうど1点で交わる k は？', C.blue, FILL.blue, 15), tx(206, '直線は傾き2のまま 上下に動く', 12, C.gray)]),
  },
  {
    note: '❓ 「1点で交わる」とは、数式ではどういうこと？ 交点では2つの式の y が等しいので、x²＝2x＋k を満たす x が交点の x座標です。つまり、交点の数は、この式の解の数と同じです。',
    add: F([eb(10, 'y ＝ x² と y ＝ 2x ＋ k', C.blue, FILL.blue, 15, 30), ar(160, 44, 160, 56, C.gray), eb(58, '交点では y が等しい → x² ＝ 2x ＋ k', C.blue, FILL.blue, 14, 30), ar(160, 92, 160, 104, C.gray), eb(106, '交点の数 ＝ 解の数', C.green, FILL.green, 16, 30)], [tx(160, '1点で交わる ＝ 解がちょうど1つ', 13, C.green, true)]),
  },
  {
    note: '❓ k を変えると、交点の数はどう変わるの？ 直線を上から下へ動かすと、k が大きいうちは2点で交わり、ちょうどふれる位置で1点（接する）、さらに下げると交わらなくなります。',
    add: F([...base20(), seg(P20, -2.4, -1.8, 2.9, 8.8, C.green, false, 1.8), seg(P20, -0.5, -2, 3.5, 6, C.red, false, 2.4), seg(P20, 0.5, -2, 3.5, 4, C.gray, false, 1.8), L(P20.X(2.9) + 6, P20.Y(8.8) + 2, '2点', 10, C.green, true, 'start'), L(P20.X(3.5) + 6, P20.Y(6), '接する\n（1点）', 10, C.red, true, 'start'), L(P20.X(3.5) + 6, P20.Y(4) + 4, '交わらない', 10, C.gray, true, 'start')], [eb(152, 'k 大 → 2点　ちょうど → 1点　k 小 → 0点', C.blue, FILL.blue, 13), tx(206, '直線を下げていく', 12, C.gray)]),
  },
  {
    note: '式を整理します。x²＝2x＋k を「＝0」の形に直すと x²−2x−k＝0。❓ なぜ k を右に残すの？ xの式を左にまとめて、平方完成（(x−□)² の形）に持ちこむためです。x²−2x ＝ k とします。',
    add: F([eb(10, 'x² ＝ 2x ＋ k', C.blue, FILL.blue, 16, 30), ar(160, 44, 160, 56, C.gray), eb(58, 'x² − 2x − k ＝ 0', C.blue, FILL.blue, 16, 30), ar(160, 92, 160, 104, C.gray), eb(106, 'x² − 2x ＝ k', C.green, FILL.green, 17, 30)], [tx(160, 'xの式を左にまとめる', 13, C.gray, true)]),
  },
  {
    note: '❓ 平方完成とは？ (x−1)² を展開すると x²−2x＋1。左辺の x²−2x には「あと1」足りないので、両辺に1を足します。すると (x−1)² ＝ k＋1 になります。等式なので、両辺に同じ数を足すのが決まりです。',
    add: F([eb(8, '(x−1)² ＝ x² − 2x ＋ 1', C.blue, FILL.blue, 15, 28), eb(40, 'x² − 2x ＋ 1 ＝ k ＋ 1', C.blue, FILL.blue, 15, 28), eb(72, '両辺に 1 を足す', C.gray, FILL.gray, 13, 24), eb(102, '(x − 1)² ＝ k ＋ 1', C.green, FILL.green, 17, 30)], [tx(150, '足す数は「xの係数の半分の2乗」', 13, C.gray, true), tx(192, '−2の半分は−1、その2乗は1', 12, C.gray)]),
  },
  {
    note: '❓ (x−1)²＝k＋1 の解は何個？ 2乗した数は0以上です。k＋1が正なら x−1が＋と−の2通りで解2つ（2点）。k＋1が0なら x−1＝0の1つだけ（1点）。k＋1が負なら、2乗して負になる数はないので解なし（0点）です。',
    add: F([bx(14, 24, 92, 60, 'k＋1 ＞ 0\n解は2つ\n（2点）', C.green, FILL.green, 12), bx(114, 24, 92, 60, 'k＋1 ＝ 0\n解は1つ\n（接する）', C.red, FILL.red, 12), bx(214, 24, 92, 60, 'k＋1 ＜ 0\n解なし\n（0点）', C.gray, FILL.gray, 12), L(160, 106, '2乗は 0 以上', 14, C.ink, true)], [eb(152, 'ちょうど1点 ← k＋1 ＝ 0', C.red, FILL.red, 16), tx(206, '(x−1)² が 0 になるときだけ', 12, C.gray)]),
  },
  {
    note: 'ちょうど1点で交わるのは k＋1 ＝ 0 のときなので、k ＝ −1 です。',
    add: F(flow(['k＋1 ＝ 0', 'k ＝ −1'], 40, { h: 44, color: C.green, fill: FILL.green, size: 16 }).flat(), [eb(152, 'k ＝ −1', C.green, FILL.green, 20), tx(206, '直線は y ＝ 2x − 1', 13, C.gray, true)]),
  },
  {
    note: '接点を求めます。k＝−1 のとき (x−1)²＝0 なので x＝1。y は y＝x² より 1²＝1。接点は (1, 1) です。図でも、直線 y＝2x−1 が放物線にちょうどふれています。',
    add: F([...base20(), seg(P20, -0.5, -2, 3.5, 6, C.red, false, 2.4), ...pt(P20, 1, 1, C.red, '接点 (1, 1)', 10, 22, 'start'), L(P20.X(3.5) - 2, P20.Y(6) - 6, 'y ＝ 2x − 1', 11, C.red, true, 'end')], [eb(152, '(x−1)² ＝ 0 → x ＝ 1、y ＝ 1²', C.green, FILL.green, 15), tx(206, '接点の座標は (1, 1)', 13, C.gray, true)]),
  },
  {
    note: '確かめ（検算）です。直線 y＝2x−1 に x＝1 を入れると y＝1で、放物線の y＝1²＝1 と一致します。また x²＝2x−1 を整理すると (x−1)²＝0 で、解は x＝1 の1つだけです。',
    add: F([eb(12, '直線：2×1 − 1 ＝ 1', C.blue, FILL.blue, 16, 32), eb(56, '放物線：1² ＝ 1 → 同じ点 ✓', C.green, FILL.green, 15, 32), eb(100, 'x² ＝ 2x−1 → (x−1)² ＝ 0 → x＝1 だけ', C.green, FILL.green, 13, 32)], [tx(170, '解が1つなので、1点で接する', 14, C.green, true)]),
  },
  {
    note: 'よくあるまちがいは、平方完成で1を足すとき、左辺にだけ足して、右辺に足し忘れることです。等式は両辺に同じ数を足さないと成り立ちません。(x−1)²＝k のままだと k＝0 と誤った答えになります。',
    add: F([eb(14, '左辺にだけ 1 を足す → (x−1)² ＝ k', C.red, FILL.red, 14, 34), L(160, 62, 'k ＝ 0 になってしまう', 12, C.red, true), eb(80, '両辺に 1 → (x−1)² ＝ k ＋ 1', C.green, FILL.green, 14, 34)], [tx(150, '× 左だけ　　○ 両辺に同じ数', 14, C.gray, true), tx(190, '答え k ＝ −1、接点 (1, 1)', 14, C.green, true)]),
  },
], '放物線と直線が接する条件');

// 座標平面上の三角形の面積
const P23 = mkPl(130, 122, 38, 20);
const base23 = (): E[] => [...axes2(P23, -1.7, 2.7, -0.2, 4.9), ...curveOf(P23, (x) => x * x, -1.6, 2.1, C.purple, 24), ...pt(P23, -1, 1, C.red, 'A(−1, 1)', -6, -8, 'end'), ...pt(P23, 2, 4, C.red, 'B(2, 4)', 6, 0)];
const s2c1_23: Figure = show([
  {
    note: '放物線 y＝x² 上に2点 A(−1, 1)、B(2, 4) があります。(1)直線ABの式 (2)原点をOとした△OABの面積 を求めます。',
    add: F([...base23(), pg([[P23.X(0), P23.Y(0)], [P23.X(-1), P23.Y(1)], [P23.X(2), P23.Y(4)]], C.red, 'rgba(225,29,72,0.12)')], [eb(152, '(1) 直線AB  (2) △OAB の面積', C.blue, FILL.blue, 15), tx(206, 'A、B は y＝x² 上の点', 12, C.gray)]),
  },
  {
    note: '❓ (1)まず傾きは？ AからBへ、x座標は 2−(−1) ＝ 3 だけ右へ、y座標は 4−1 ＝ 3 だけ上へ。傾き ＝ yの増加÷xの増加 ＝ 3÷3 ＝ 1 です。',
    add: T([seg(P23, -1, 1, 2, 1, C.blue, true, 1.8), seg(P23, 2, 1, 2, 4, C.red, true, 1.8), L(P23.X(0.5), P23.Y(1) + 12, '右へ 3', 11, C.blue, true), L(P23.X(2) + 6, P23.Y(2.5), '上へ 3', 11, C.red, true, 'start')], [eb(152, '傾き ＝ (4−1) ÷ (2+1) ＝ 1', C.green, FILL.green, 16), tx(206, 'yの増加 ÷ xの増加', 12, C.gray)]),
  },
  {
    note: '切片は、y＝x＋b に A(−1, 1) を代入します。1 ＝ −1＋b より b ＝ 2。だから直線ABは y ＝ x ＋ 2 です。この直線は、y軸と (0, 2) で交わります。',
    add: T([seg(P23, -1.6, 0.4, 2.3, 4.3, C.green, false, 2.4), ...pt(P23, 0, 2, C.green, 'C(0, 2)', 6, -2)], [eb(152, '1 ＝ −1 ＋ b → b ＝ 2　y ＝ x ＋ 2', C.green, FILL.green, 15), tx(206, '(1) y ＝ x ＋ 2', 15, C.green, true)]),
  },
  {
    note: '❓ (2)なぜ、そのままでは面積が出しにくいの？ △OABの辺OA、OB、ABは、どれも座標軸に平行ではありません。そのため、底辺と高さ（垂直な長さ）が、すぐには読みとれないのです。',
    add: F([...base23(), seg(P23, -1.6, 0.4, 2.3, 4.3, C.gray, false, 1.6), pg([[P23.X(0), P23.Y(0)], [P23.X(-1), P23.Y(1)], [P23.X(2), P23.Y(4)]], C.red, 'rgba(225,29,72,0.15)'), L(236, 100, '辺が軸に\n平行でない', 11, C.red, true, 'start')], [eb(152, '底辺と高さが、すぐには分からない', C.red, FILL.red, 14), tx(206, 'そのまま公式は使いにくい', 12, C.gray)]),
  },
  {
    note: '❓ どうすればいい？ 直線ABとy軸の交点 C(0, 2) で、△OAB を2つの三角形 △OAC と △OBC に分けます。OCはy軸の上にあるので、底辺にしやすく、高さも読みとれます。',
    add: F([...base23(), seg(P23, -1.6, 0.4, 2.3, 4.3, C.gray, false, 1.6), ...pt(P23, 0, 2, C.green, 'C(0, 2)', 6, -2), pg([[P23.X(0), P23.Y(0)], [P23.X(-1), P23.Y(1)], [P23.X(0), P23.Y(2)]], C.blue, 'rgba(2,132,199,0.22)'), pg([[P23.X(0), P23.Y(0)], [P23.X(2), P23.Y(4)], [P23.X(0), P23.Y(2)]], C.red, 'rgba(225,29,72,0.18)')], [eb(152, 'y軸上の C で 2つの三角形に分ける', C.green, FILL.green, 14), tx(206, '△OAC と △OBC', 13, C.gray, true)]),
  },
  {
    note: '△OAC は、底辺 OC＝2（y軸上）。高さは、Aからy軸までの垂直な長さで、Aのx座標の絶対値の1です。❓ なぜ高さがxの絶対値なの？ OCがy軸上にあるので、y軸までの垂直な距離は、x座標の大きさになるからです。面積は 2×1÷2 ＝ 1。',
    add: F([...base23(), seg(P23, -1.6, 0.4, 2.3, 4.3, C.gray, false, 1.6), pg([[P23.X(0), P23.Y(0)], [P23.X(-1), P23.Y(1)], [P23.X(0), P23.Y(2)]], C.blue, 'rgba(2,132,199,0.3)'), seg(P23, -1, 1, 0, 1, C.blue, true, 1.6), L(P23.X(-0.5), P23.Y(1) + 11, '高さ 1', 10, C.blue, true), L(P23.X(0) + 6, P23.Y(0.6), 'OC＝2', 10, C.blue, true, 'start')], [eb(152, '△OAC ＝ 2 × 1 ÷ 2 ＝ 1', C.blue, FILL.blue, 16), tx(206, '底辺 OC＝2、高さ ＝ |−1|＝1', 12, C.gray)]),
  },
  {
    note: '△OBC は、底辺 OC＝2、高さはBのx座標の2です。面積は 2×2÷2 ＝ 2。',
    add: F([...base23(), seg(P23, -1.6, 0.4, 2.3, 4.3, C.gray, false, 1.6), pg([[P23.X(0), P23.Y(0)], [P23.X(2), P23.Y(4)], [P23.X(0), P23.Y(2)]], C.red, 'rgba(225,29,72,0.25)'), seg(P23, 0, 4, 2, 4, C.red, true, 1.6), L(P23.X(1), P23.Y(4) - 8, '高さ 2', 10, C.red, true), L(P23.X(0) - 6, P23.Y(1), 'OC＝2', 10, C.red, true, 'end')], [eb(152, '△OBC ＝ 2 × 2 ÷ 2 ＝ 2', C.red, FILL.red, 16), tx(206, '底辺 OC＝2、高さ ＝ 2', 12, C.gray)]),
  },
  {
    note: '2つの面積を足します。△OAB ＝ △OAC＋△OBC ＝ 1＋2 ＝ 3。(2)の答えは3です。',
    add: F([bx(20, 34, 120, 40, '△OAC ＝ 1', C.blue, FILL.blue, 15), L(160, 54, '＋', 20, C.ink, true), bx(180, 34, 120, 40, '△OBC ＝ 2', C.red, FILL.red, 15), ar(160, 80, 160, 100, C.gray), bx(90, 102, 140, 30, '△OAB ＝ 3', C.green, FILL.green, 17)], [eb(152, '(2) 1 ＋ 2 ＝ 3', C.green, FILL.green, 20)]),
  },
  {
    note: '確かめ（検算）です。2つの三角形は底辺OC＝2が共通なので、高さの和（1＋2＝3）を使って 2×3÷2 ＝ 3 と一度に求められます。さらに、直線の式にB(2, 4) を入れると 2＋2＝4 で合っています。',
    add: F([eb(12, '底辺 OC ＝ 2 が共通', C.blue, FILL.blue, 15, 32), eb(56, '2 × (1＋2) ÷ 2 ＝ 3 ✓', C.green, FILL.green, 16, 32), eb(100, 'B：2 ＋ 2 ＝ 4 ✓（直線の式）', C.green, FILL.green, 15, 32)], [tx(170, '2通りの計算で 3', 14, C.green, true)]),
  },
  {
    note: 'よくあるまちがいは、AとBがy軸の両側にあることに気づかず、高さの差だけで面積を求めようとすることです。A（x＝−1）とB（x＝2）はy軸をはさんでいるので、y軸上の点で2つに分けます。',
    add: F([eb(14, '高さの差だけで求める', C.red, FILL.red, 16, 34), L(160, 62, 'y軸をはさんでいる点に気づいていない', 12, C.red, true), eb(80, 'y軸との交点 C で 2つに分ける', C.green, FILL.green, 16, 34)], [tx(150, '× 差だけ　　○ 軸で分けて足す', 14, C.gray, true), tx(190, '答え (1) y＝x＋2　(2) 3', 14, C.green, true)]),
  },
], '座標平面上の三角形の面積');

// 三角形の面積を二等分する直線
const P30 = mkPl(150, 122, 32, 11);
const base30 = (): E[] => [...axes2(P30, -3.6, 3.4, -1, 10), ...curveOf(P30, (x) => x * x, -3.1, 3, C.purple, 24), ...pt(P30, -3, 9, C.red, 'A(−3, 9)', 6, 4), ...pt(P30, 2, 4, C.red, 'B(2, 4)', 6, 2)];
const tri30 = (c: string, f: string): E => pg([[P30.X(0), P30.Y(0)], [P30.X(-3), P30.Y(9)], [P30.X(2), P30.Y(4)]], c, f);
const s2c1_30: Figure = show([
  {
    note: '放物線 y＝x² 上に2点 A(−3, 9)、B(2, 4) があります。原点Oを通り、△OABの面積を二等分（2つの同じ面積に分けること）する直線の式を求めます。',
    add: F([...base30(), tri30(C.red, 'rgba(225,29,72,0.12)')], [eb(152, 'Oを通り、△OABを二等分する直線は？', C.blue, FILL.blue, 14), tx(206, '2つの部分の面積を等しくする', 12, C.gray)]),
  },
  {
    note: '❓ 三角形の面積を半分にするには？ 面積は 底辺×高さ÷2 です。高さが同じなら、底辺を半分にすれば面積も半分になります。そこで、頂点Oから対辺ABに線を引いて、ABを半分に分けます。',
    add: F([...base30(), tri30(C.gray, 'rgba(110,100,92,0.10)'), ln(P30.X(0), P30.Y(0), P30.X(-0.5), P30.Y(6.5), C.green, false, 2.2), ...pt(P30, -0.5, 6.5, C.green, 'M', -8, -2, 'end')], [eb(152, '高さが同じ → 底辺の半分 ＝ 面積の半分', C.green, FILL.green, 13), tx(206, 'ABを半分に分ける点を M とする', 12, C.gray)]),
  },
  {
    note: '❓ なぜ M を AB の「中点」にするの？ 中点なら AM＝MB。△OAM と △OMB は、底辺 AM と MB が等しく、高さ（Oから直線ABまでの距離）も同じです。だから、面積が等しくなります。',
    add: F([...base30(), pg([[P30.X(0), P30.Y(0)], [P30.X(-3), P30.Y(9)], [P30.X(-0.5), P30.Y(6.5)]], C.blue, 'rgba(2,132,199,0.22)'), pg([[P30.X(0), P30.Y(0)], [P30.X(-0.5), P30.Y(6.5)], [P30.X(2), P30.Y(4)]], C.red, 'rgba(225,29,72,0.2)'), ...pt(P30, -0.5, 6.5, C.green, 'M', 6, -6), L(P30.X(-1.9), P30.Y(5.5), '△OAM', 10, C.blue, true), L(P30.X(1.2), P30.Y(5.6), '△OMB', 10, C.red, true)], [eb(152, 'AM ＝ MB かつ 高さ共通 → 面積が等しい', C.green, FILL.green, 13), tx(206, '中点を通るから、二等分になる', 12, C.gray)]),
  },
  {
    note: '❓ 中点の座標は？ x座標どうし、y座標どうしの平均です。中点は両はしから同じ距離の「真ん中」だからです。x は (−3＋2)÷2 ＝ −1/2、y は (9＋4)÷2 ＝ 13/2。M(−1/2, 13/2) です。',
    add: F([eb(10, 'x の真ん中：(−3 ＋ 2) ÷ 2 ＝ −1/2', C.blue, FILL.blue, 14, 34), eb(54, 'y の真ん中：(9 ＋ 4) ÷ 2 ＝ 13/2', C.blue, FILL.blue, 14, 34), eb(98, 'M(−1/2, 13/2)', C.green, FILL.green, 17, 34)], [tx(170, '中点 ＝ 座標の平均', 15, C.green, true)]),
  },
  {
    note: '❓ 直線OMの式は？ 原点Oを通る直線は、x＝0のときy＝0なので、切片が0の y＝ax の形です。M(−1/2, 13/2) を代入すると 13/2 ＝ a×(−1/2)。両辺に−2をかけて a ＝ −13 です。',
    add: F([eb(10, 'O を通る → y ＝ a x', C.blue, FILL.blue, 16, 32), ar(160, 46, 160, 58, C.gray), eb(60, '13/2 ＝ a × (−1/2)', C.blue, FILL.blue, 16, 32), ar(160, 96, 160, 108, C.gray), eb(110, 'a ＝ 13/2 × (−2) ＝ −13', C.green, FILL.green, 16, 28)], [tx(160, '切片が0だから y＝ax', 13, C.gray, true)]),
  },
  {
    note: '直線は y ＝ −13x です。図のように、原点Oと点Mを通り、△OABを2つの三角形に分けます。',
    add: F([...base30(), tri30(C.gray, 'rgba(110,100,92,0.08)'), seg(P30, -0.65, 8.45, 0.1, -1.3, C.green, false, 2.4), ...pt(P30, -0.5, 6.5, C.green, 'M', 6, -6), L(P30.X(0.1) + 6, P30.Y(-1.3) - 4, 'y ＝ −13x', 11, C.green, true, 'start')], [eb(152, '答え y ＝ −13x', C.green, FILL.green, 19), tx(206, 'O と M を通る直線', 12, C.gray)]),
  },
  {
    note: '確かめ（検算）その1です。直線ABは y＝−x＋6（傾き (4−9)÷(2+3)＝−1）で、y軸と C(0, 6) で交わります。△OAB は、底辺 OC＝6 で 2つに分けて 6×3÷2＋6×2÷2 ＝ 9＋6 ＝ 15。半分は7.5です。',
    add: F([...base30(), seg(P30, -3.3, 9.3, 2.4, 3.6, C.gray, false, 1.6), ...pt(P30, 0, 6, C.green, 'C(0, 6)', 6, -2), pg([[P30.X(0), P30.Y(0)], [P30.X(-3), P30.Y(9)], [P30.X(0), P30.Y(6)]], C.blue, 'rgba(2,132,199,0.22)'), pg([[P30.X(0), P30.Y(0)], [P30.X(2), P30.Y(4)], [P30.X(0), P30.Y(6)]], C.red, 'rgba(225,29,72,0.2)')], [eb(152, '6×3÷2 ＋ 6×2÷2 ＝ 15 → 半分は 7.5', C.green, FILL.green, 14), tx(206, 'OC＝6 を共通の底辺にした', 12, C.gray)]),
  },
  {
    note: '確かめ（検算）その2です。M が辺ABの上にあるかを確かめます。直線AB y＝−x＋6 に x＝−1/2 を入れると y ＝ 1/2＋6 ＝ 13/2 で、Mのyと一致します。さらに、直線 y＝−13x に x＝−1/2 を入れても 13/2 です。',
    add: F([eb(12, 'AB：y ＝ −(−1/2) ＋ 6 ＝ 13/2 ✓', C.green, FILL.green, 14, 32), eb(56, 'OM：y ＝ −13 × (−1/2) ＝ 13/2 ✓', C.green, FILL.green, 14, 32)], [tx(120, 'M は AB 上にあり、OM 上にもある', 14, C.green, true)]),
  },
  {
    note: '❓ もし中点でなかったら？ 高さが同じなら、面積の比は底辺の比と同じです。AN：NB が 1：1（中点）なら面積比も 1：1 で二等分。たとえば AN：NB＝3：1 の点 N を通る線だと、面積比は 3：1 で二等分になりません。',
    add: F([bx(20, 26, 140, 26, 'AM', C.green, FILL.green, 13), bx(160, 26, 140, 26, 'MB', C.green, FILL.green, 13), L(160, 16, '中点 M：AM ＝ MB（1：1）', 11, C.green, true), bx(20, 76, 280, 26, undefined, C.gray, FILL.gray), bx(20, 76, 210, 26, 'AN（3）', C.red, FILL.red, 12), bx(230, 76, 70, 26, 'NB（1）', C.red, FILL.red, 11), L(160, 68, '中点でない点 N の場合', 11, C.red, true), L(160, 122, '底辺の比 ＝ 面積の比（高さが共通）', 12, C.gray, true)], [eb(152, '1：1 なら 二等分、3：1 なら ならない', C.green, FILL.green, 14), tx(206, '中点だから 面積が半分ずつ', 12, C.gray)]),
  },
  {
    note: 'よくあるまちがいは、中点を計算せずに「ABのまん中あたり」で線を引くことです。目分量では面積が等しくなりません。必ず、座標の平均で中点を求めてから、直線の式を作ります。',
    add: F([eb(14, '「ABのまん中あたり」で引く', C.red, FILL.red, 15, 34), L(160, 62, '面積は等しくならない', 12, C.red, true), eb(80, '中点を計算して求める', C.green, FILL.green, 16, 34)], [tx(150, '× 目分量　　○ 座標の平均', 14, C.gray, true), tx(190, '答え y ＝ −13x', 15, C.green, true)]),
  },
], '三角形の面積を二等分する直線');

// 等積変形（頂点を底辺と平行に動かしても面積は変わらない）
const P35 = mkPl(160, 112, 22, 17);
const base35 = (): E[] => [...axes2(P35, -5.6, 5.6, -0.6, 5.0), seg(P35, -5.6, 4, 5.6, 4, C.gray, true, 1.4), L(P35.X(5.6) - 2, P35.Y(4) - 7, 'y ＝ 4', 10, C.gray, true, 'end'), ...pt(P35, -3, 0, C.red, 'B(−3, 0)', -8, 12, 'end'), ...pt(P35, 5, 0, C.red, 'C(5, 0)', 8, 12, 'start')];
const triABC = (fill: string = 'rgba(225,29,72,0.15)'): E => pg([[P35.X(1), P35.Y(4)], [P35.X(-3), P35.Y(0)], [P35.X(5), P35.Y(0)]], C.red, fill);
const s2c1_35: Figure = show([
  {
    note: '△ABC は A(1, 4)、B(−3, 0)、C(5, 0) です。頂点Aを、BCに平行な直線 y＝4 の上で A′(−5, 4) に動かします。(1)△ABCの面積 (2)△A′BCの面積を求めて、くらべます。',
    add: F([...base35(), triABC(), ...pt(P35, 1, 4, C.red, 'A(1, 4)', 6, -8)], [eb(152, '(1) △ABC  (2) △A′BC の面積は？', C.blue, FILL.blue, 15), tx(206, 'A は y＝4 の直線の上にある', 12, C.gray)]),
  },
  {
    note: '❓ (1)底辺と高さは？ BCはx軸の上にあるので、底辺にできます。BC ＝ 5−(−3) ＝ 8。高さは、Aからx軸（BC）までの垂直な長さ。x軸までの距離は、ちょうどAのy座標の4です。',
    add: T([seg(P35, 1, 4, 1, 0, C.blue, true, 1.8), L(P35.X(1) + 5, P35.Y(2), '高さ 4', 11, C.blue, true, 'start'), L(P35.X(1), P35.Y(0) + 11, 'BC ＝ 8', 11, C.red, true)], [eb(152, '底辺 BC ＝ 5 − (−3) ＝ 8', C.red, FILL.red, 15), tx(206, '高さ ＝ A の y 座標 ＝ 4（軸までの距離）', 12, C.gray)]),
  },
  {
    note: '❓ なぜ面積は「底辺×高さ÷2」なの？ BCを底辺、高さ4の長方形（面積 8×4＝32）をかきます。Aが上の辺のどこにあっても、両はしの三角形の底辺を合わせると8。それぞれ 4×4÷2＝8 で、32−(8＋8)＝16 です。',
    add: F([...axes2(P35, -5.6, 5.6, -0.6, 5.0), pg([[P35.X(-3), P35.Y(0)], [P35.X(5), P35.Y(0)], [P35.X(5), P35.Y(4)], [P35.X(-3), P35.Y(4)]], C.gray, 'rgba(110,100,92,0.06)'), pg([[P35.X(-3), P35.Y(0)], [P35.X(-3), P35.Y(4)], [P35.X(1), P35.Y(4)]], C.gray, 'rgba(110,100,92,0.28)'), pg([[P35.X(5), P35.Y(0)], [P35.X(5), P35.Y(4)], [P35.X(1), P35.Y(4)]], C.gray, 'rgba(110,100,92,0.28)'), triABC('rgba(225,29,72,0.22)'), L(P35.X(-2), P35.Y(3), '8', 12, C.gray, true), L(P35.X(4), P35.Y(3), '8', 12, C.gray, true), L(P35.X(1), P35.Y(1.6), '16', 14, C.red, true)], [eb(152, '32 − (8 ＋ 8) ＝ 16', C.red, FILL.red, 17), tx(206, '長方形の半分 ＝ 8×4÷2 ＝ 16', 12, C.gray)]),
  },
  {
    note: '(1)の答えです。△ABC ＝ 底辺 8 × 高さ 4 ÷ 2 ＝ 16。',
    add: F(flow(['底辺 8', '× 高さ 4', '÷ 2'], 40, { h: 44, color: C.blue, fill: FILL.blue, size: 15 }).flat(), [eb(152, '(1) △ABC ＝ 16', C.green, FILL.green, 20)]),
  },
  {
    note: '(2) A′(−5, 4) でも、y座標は同じ4です。底辺は同じBCの8、高さはx軸までの距離なのでAと同じ4。A′は、Aを直線 y＝4 の上で左に動かした点です。',
    add: F([...base35(), pg([[P35.X(-5), P35.Y(4)], [P35.X(-3), P35.Y(0)], [P35.X(5), P35.Y(0)]], C.blue, 'rgba(2,132,199,0.15)'), ...pt(P35, -5, 4, C.blue, 'A′(−5, 4)', 6, -8), seg(P35, -5, 4, -5, 0, C.blue, true, 1.6), L(P35.X(-5) - 4, P35.Y(2), '高さ 4', 10, C.blue, true, 'end')], [eb(152, '底辺 8、高さ 4 → △A′BC', C.blue, FILL.blue, 15), tx(206, 'A′ の y座標も 4', 12, C.gray)]),
  },
  {
    note: '❓ なぜ、頂点を動かしても面積が変わらないの？ 底辺BCは同じです。高さは、BC（x軸）と直線 y＝4 の間の距離で、平行な2本の直線の間隔は、どこでも同じ4だからです。',
    add: F([...base35(), triABC('rgba(225,29,72,0.12)'), pg([[P35.X(-5), P35.Y(4)], [P35.X(-3), P35.Y(0)], [P35.X(5), P35.Y(0)]], C.blue, 'rgba(2,132,199,0.10)'), ...pt(P35, 1, 4, C.red, 'A', 6, -8), ...pt(P35, -5, 4, C.blue, 'A′', -8, -8, 'end'), seg(P35, 1, 4, 1, 0, C.red, true, 1.6), seg(P35, -5, 4, -5, 0, C.blue, true, 1.6), L(P35.X(1) + 5, P35.Y(2), '4', 12, C.red, true, 'start'), L(P35.X(-5) + 5, P35.Y(2), '4', 12, C.blue, true, 'start')], [eb(152, '平行な2直線の間隔は いつも 4', C.green, FILL.green, 15), tx(206, '底辺共通 ＋ 高さ共通 → 面積が等しい', 12, C.gray)]),
  },
  {
    note: '(2)の答えです。△A′BC ＝ 8×4÷2 ＝ 16 で、△ABC ＝ 16 と等しくなります。これを等積変形といいます。',
    add: F([bx(20, 30, 120, 44, '△ABC\n＝ 16', C.red, FILL.red, 15), L(160, 52, '＝', 22, C.ink, true), bx(180, 30, 120, 44, '△A′BC\n＝ 16', C.blue, FILL.blue, 15), L(160, 100, '頂点を y＝4 上で動かしても同じ', 12, C.gray, true)], [eb(152, '(2) 16（△ABC と等しい）', C.green, FILL.green, 17), tx(206, '＝ 等積変形', 13, C.gray, true)]),
  },
  {
    note: '確かめ（検算）です。A′BC を別の方法で求めます。x が −5〜5、y が 0〜4 の長方形（面積 10×4＝40）から、まわりの三角形 4×2÷2＝4 と 10×4÷2＝20 を引くと、40−4−20 ＝ 16 で、同じ答えになります。',
    add: F([...axes2(P35, -5.6, 5.6, -0.6, 5.0), pg([[P35.X(-5), P35.Y(0)], [P35.X(5), P35.Y(0)], [P35.X(5), P35.Y(4)], [P35.X(-5), P35.Y(4)]], C.gray, 'rgba(110,100,92,0.05)'), pg([[P35.X(-5), P35.Y(0)], [P35.X(-3), P35.Y(0)], [P35.X(-5), P35.Y(4)]], C.gray, 'rgba(110,100,92,0.3)'), pg([[P35.X(5), P35.Y(0)], [P35.X(5), P35.Y(4)], [P35.X(-5), P35.Y(4)]], C.gray, 'rgba(110,100,92,0.3)'), pg([[P35.X(-5), P35.Y(4)], [P35.X(-3), P35.Y(0)], [P35.X(5), P35.Y(0)]], C.blue, 'rgba(2,132,199,0.22)'), L(P35.X(-4.5), P35.Y(1.2), '4', 11, C.gray, true), L(P35.X(3), P35.Y(3.2), '20', 13, C.gray, true), L(P35.X(0.5), P35.Y(1), '16', 14, C.blue, true)], [eb(152, '40 − 4 − 20 ＝ 16 ✓', C.green, FILL.green, 17), tx(206, '長方形から引く方法でも 16', 12, C.gray)]),
  },
  {
    note: '❓ 等積変形は、どんなときに使うの？ 底辺が共通の三角形は、頂点を底辺に平行な直線の上で動かしても面積が変わりません。形を簡単にしたり、面積が等しい点を見つけたりするのに使えます。',
    add: F([...axes2(P35, -5.6, 5.6, -0.6, 5.0), seg(P35, -5.6, 4, 5.6, 4, C.gray, true, 1.4), ...[-5, -2, 1, 3.5].flatMap((x) => [seg(P35, x, 4, -3, 0, C.green, false, 1.2), seg(P35, x, 4, 5, 0, C.green, false, 1.2), ci(P35.X(x), P35.Y(4), 3.5, undefined, C.green, C.green)]), L(160, 134, 'どの頂点でも 面積は 16', 12, C.green, true)], [eb(152, '底辺BC共通 → 頂点は y＝4 の上で自由', C.green, FILL.green, 14), tx(206, '平行線の上を動かす', 12, C.gray)]),
  },
  {
    note: 'よくあるまちがいは、「頂点を動かすと面積も変わるはず」と思いこみ、A′の座標から面積を複雑に計算し直すことです。底辺が同じで、頂点が底辺と平行な直線上にあるなら、面積は変わりません。',
    add: F([eb(14, '頂点を動かした → 面積も変わる', C.red, FILL.red, 15, 34), L(160, 62, '高さが変わっていないのに', 12, C.red, true), eb(80, '底辺・高さが同じ → 面積も同じ', C.green, FILL.green, 15, 34)], [tx(150, '× 面積が変わる　　○ 同じ（等積）', 14, C.gray, true), tx(190, '答え (1) 16　(2) 16', 15, C.green, true)]),
  },
], '等積変形（面積が変わらない理由）');

// 通話料金プランの比較
const P48 = mkPl(40, 122, 2.3, 0.03);
const s2c1_48: Figure = show([
  {
    note: '携帯電話の料金プランです。プランAは基本料金1000円＋通話1分あたり20円、プランBは基本料金2200円＋通話1分あたり8円。通話時間をx分としたときの料金を式で表し、2つの料金が等しくなる時間を求めます。',
    add: F([bx(14, 24, 140, 70, 'プランA\n基本 1000円\n＋ 1分 20円', C.blue, FILL.blue, 13), bx(166, 24, 140, 70, 'プランB\n基本 2200円\n＋ 1分 8円', C.red, FILL.red, 13), L(160, 114, '通話時間 x 分の料金を y 円とする', 12, C.gray, true)], [eb(152, '式にして、等しくなる時間は？', C.blue, FILL.blue, 15), tx(206, 'どちらが安いか、時間で変わる', 12, C.gray)]),
  },
  {
    note: '❓ 料金の式はどう作るの？ 料金 ＝ 基本料金 ＋ 1分あたりの料金 × 時間 です。Aは y＝20x＋1000、Bは y＝8x＋2200。❓ なぜ基本料金が「切片」？ 通話0分（x＝0）でも払う金額で、グラフでは y軸との交点だからです。',
    add: F([eb(10, '料金 ＝ 基本 ＋ 1分の料金 × 時間', C.gray, FILL.gray, 14, 30), eb(50, 'A：y ＝ 20x ＋ 1000', C.blue, FILL.blue, 16, 30), eb(90, 'B：y ＝ 8x ＋ 2200', C.red, FILL.red, 16, 30)], [tx(155, 'x＝0 のとき A：1000円　B：2200円', 13, C.gray, true), tx(192, 'だから 基本料金が切片', 12, C.gray)]),
  },
  {
    note: '❓ 「1分あたりの料金」が、なぜ傾きなの？ x が10ふえるとき、Aは 200円、Bは 80円ふえます。1ふえるごとにAは20円、Bは8円ふえる。この「1あたりのふえ方」が傾きです。',
    add: F([bx(14, 14, 88, 26, '通話（分）', C.gray, FILL.gray, 11), bx(106, 14, 66, 26, '0', C.gray, FILL.gray, 12), bx(176, 14, 66, 26, '10', C.gray, FILL.gray, 12), bx(246, 14, 66, 26, '20', C.gray, FILL.gray, 12), bx(14, 44, 88, 26, 'プランA', C.blue, FILL.blue, 12), bx(106, 44, 66, 26, '1000', C.blue, FILL.blue, 12), bx(176, 44, 66, 26, '1200', C.blue, FILL.blue, 12), bx(246, 44, 66, 26, '1400', C.blue, FILL.blue, 12), bx(14, 74, 88, 26, 'プランB', C.red, FILL.red, 12), bx(106, 74, 66, 26, '2200', C.red, FILL.red, 12), bx(176, 74, 66, 26, '2280', C.red, FILL.red, 12), bx(246, 74, 66, 26, '2360', C.red, FILL.red, 12), L(160, 116, '10分で A は ＋200円、B は ＋80円', 11, C.gray, true)], [eb(152, 'Aは1分で 20円、Bは 8円 ふえる', C.green, FILL.green, 15), tx(206, '1あたりのふえ方 ＝ 傾き', 12, C.gray)]),
  },
  {
    note: 'グラフにすると、Bは高いところから出発してゆるやかに上がり、Aは低いところから出発して急に上がります。傾きの大きいAがBに追いつく、つまり2本の直線が交わります。',
    add: F([...axes2(P48, -2, 112, -100, 3500, '', '料金(円)'), L(300, 108, '通話(分)', 10, C.ink, true, 'end'), seg(P48, 0, 1000, 110, 3200, C.blue, false, 2.4), seg(P48, 0, 2200, 110, 3080, C.red, false, 2.4), L(P48.X(108), P48.Y(3200) + 10, 'A', 12, C.blue, true), L(P48.X(108), P48.Y(3080) - 8, 'B', 12, C.red, true), L(P48.X(0) + 6, P48.Y(1000) + 10, '1000', 10, C.blue, true, 'start'), L(P48.X(0) + 6, P48.Y(2200) - 7, '2200', 10, C.red, true, 'start')], [eb(152, 'Aは低い所から急に、Bは高い所からゆるやかに', C.blue, FILL.blue, 13), tx(206, '傾きの大きいA が B に追いつく', 12, C.gray)]),
  },
  {
    note: '❓ 料金が「等しくなる」とは、グラフでは？ 交点です。交点では、AとBの料金 y が等しいので、20x＋1000 ＝ 8x＋2200 という式ができます。',
    add: F([...axes2(P48, -2, 112, -100, 3500, '', '料金(円)'), L(300, 108, '通話(分)', 10, C.ink, true, 'end'), seg(P48, 0, 1000, 110, 3200, C.blue, false, 2), seg(P48, 0, 2200, 110, 3080, C.red, false, 2), ...pt(P48, 100, 3000, C.green, '交点', -6, -8, 'end'), seg(P48, 100, 3000, 100, 0, C.green, true, 1.4), L(P48.X(100), P48.Y(0) + 13, '？分', 10, C.green, true)], [eb(152, '交点 → 料金が等しい', C.green, FILL.green, 16), tx(206, '20x ＋ 1000 ＝ 8x ＋ 2200', 14, C.gray, true)]),
  },
  {
    note: '式を解きます。❓ なぜ両辺から 8x と 1000 を引くの？ xを含む項を左に、数だけの項を右にまとめるためです。等式は両辺に同じ操作をしても成り立ちます。20x−8x ＝ 2200−1000 より 12x ＝ 1200。両辺を12でわって x ＝ 100。',
    add: F([eb(6, '20x ＋ 1000 ＝ 8x ＋ 2200', C.blue, FILL.blue, 14, 28), eb(38, '20x − 8x ＝ 2200 − 1000', C.blue, FILL.blue, 14, 28), eb(70, '12x ＝ 1200', C.blue, FILL.blue, 15, 28), eb(102, 'x ＝ 100（分）', C.green, FILL.green, 16, 28)], [tx(160, '両辺に同じ操作をする', 14, C.gray, true), tx(196, 'x を含む項は左、数は右', 12, C.gray)]),
  },
  {
    note: '答えです。プランA：y＝20x＋1000、プランB：y＝8x＋2200。2つの料金が等しくなる通話時間は100分です。',
    add: F([eb(10, 'A：y ＝ 20x ＋ 1000', C.blue, FILL.blue, 16, 32), eb(54, 'B：y ＝ 8x ＋ 2200', C.red, FILL.red, 16, 32), eb(98, '等しくなる時間：100分', C.green, FILL.green, 16, 32)], [tx(165, '答え', 18, C.green, true)]),
  },
  {
    note: '確かめ（検算）です。x＝100 のとき、Aは 20×100＋1000 ＝ 3000円、Bは 8×100＋2200 ＝ 3000円。ぴったり同じ料金になります。',
    add: F([eb(12, 'A：20 × 100 ＋ 1000 ＝ 3000円', C.blue, FILL.blue, 15, 32), eb(56, 'B：8 × 100 ＋ 2200 ＝ 3000円', C.red, FILL.red, 15, 32), eb(100, '同じ 3000円 ✓', C.green, FILL.green, 17, 32)], [tx(170, '100分のとき、等しい', 14, C.green, true)]),
  },
  {
    note: '❓ 100分より短い・長いときは、どちらが安いの？ 50分なら A＝2000円、B＝2600円で、Aが安い。150分なら A＝4000円、B＝3400円で、Bが安い。交点の前後で有利なほうが入れかわります。',
    add: F([bx(14, 20, 140, 54, '50分（100分より短い）\nA 2000円 ＜ B 2600円', C.blue, FILL.blue, 11), bx(166, 20, 140, 54, '150分（100分より長い）\nA 4000円 ＞ B 3400円', C.red, FILL.red, 11), L(84, 94, 'A が安い', 13, C.blue, true), L(236, 94, 'B が安い', 13, C.red, true)], [eb(152, '100分が 分かれ目', C.green, FILL.green, 17), tx(206, '短い → A、長い → B', 13, C.gray, true)]),
  },
  {
    note: 'よくあるまちがいは、基本料金と1分あたりの料金を逆にして、y＝1000x＋20 のように書くことです。固定の金額が切片、1分ごとの金額が傾きです。0分のときに払う額を思い出せば、まちがえません。',
    add: F([eb(14, 'A：y ＝ 1000x ＋ 20', C.red, FILL.red, 16, 34), L(160, 62, '0分で 20円？ 1分で 1000円？', 12, C.red, true), eb(80, 'A：y ＝ 20x ＋ 1000', C.green, FILL.green, 16, 34)], [tx(150, '固定の額 ＝ 切片　1分ごと ＝ 傾き', 13, C.gray, true), tx(190, '答え 100分', 15, C.green, true)]),
  },
], '料金プランと一次関数');

// 相似な三角形の面積比
const s2c2_05: Figure = show([
  {
    note: '△ABC∽△DEF で、相似比は 3:5 です。△ABC の面積が 18cm² のとき、△DEF の面積を求めます。',
    add: F([pg([[20, 120], [90, 120], [55, 62]], C.blue, FILL.blue), pg([[130, 120], [246.7, 120], [188.3, 23.3]], C.red, FILL.red), L(55, 136, '△ABC  18cm²', 11, C.blue, true), L(188, 136, '△DEF  ？', 11, C.red, true), L(80, 30, '相似比 3 : 5', 13, C.ink, true)], [eb(152, '面積は 3:5 ではなく…？', C.blue, FILL.blue, 16), tx(206, '相似比 3:5、△ABC ＝ 18cm²', 12, C.gray)]),
  },
  {
    note: '❓ 相似比と面積の比は、同じなの？ 三角形の面積は「底辺×高さ÷2」。たとえば底辺3・高さ3の三角形は 3×3÷2＝4.5。相似比3:5の三角形は底辺5・高さ5で 5×5÷2＝12.5。面積の比は 4.5:12.5 ＝ 9:25 になります。',
    add: F([eb(10, '底辺3・高さ3：3×3÷2 ＝ 4.5', C.blue, FILL.blue, 14, 32), eb(54, '底辺5・高さ5：5×5÷2 ＝ 12.5', C.red, FILL.red, 14, 32), eb(98, '4.5 : 12.5 ＝ 9 : 25', C.green, FILL.green, 16, 32)], [tx(170, '面積の比は 3:5 ではない', 14, C.green, true)]),
  },
  {
    note: '❓ なぜ9:25なの？ 長さが3倍なら面積は縦にも横にも広がるので、1辺3の正方形には9個、1辺5の正方形には25個の単位正方形が入ります。比は 3×3 : 5×5 ＝ 9 : 25。',
    add: F([...Array.from({ length: 9 }, (_, i) => bx(40 + (i % 3) * 14, 44 + Math.floor(i / 3) * 14, 13, 13, undefined, C.blue, FILL.blue)), ...Array.from({ length: 25 }, (_, i) => bx(170 + (i % 5) * 14, 30 + Math.floor(i / 5) * 14, 13, 13, undefined, C.red, FILL.red)), L(61, 100, '3×3 ＝ 9個', 12, C.blue, true), L(205, 108, '5×5 ＝ 25個', 12, C.red, true)], [eb(152, '面積の比 ＝ 相似比 × 相似比', C.green, FILL.green, 15), tx(206, '縦にも横にも広がるから 2乗', 12, C.gray)]),
  },
  {
    note: '❓ 言いかえると、相似比が3:5なら、△DEF は △ABC の縦・横を 5/3 倍にしたもの。面積は 5/3 × 5/3 ＝ 25/9 倍になります。長さは1回、面積は縦横で2回ふえる、という意味です。',
    add: F([bx(20, 30, 120, 40, '縦 × 5/3 倍', C.gray, FILL.gray, 14), L(160, 50, '＋', 18, C.ink, true), bx(180, 30, 120, 40, '横 × 5/3 倍', C.gray, FILL.gray, 14), ar(160, 76, 160, 96, C.gray), bx(60, 100, 200, 30, '面積 × 5/3 × 5/3 ＝ 25/9 倍', C.green, FILL.green, 14)], [eb(152, '面積比 9 : 25', C.green, FILL.green, 18), tx(206, '2回ふえるから 2乗', 12, C.gray)]),
  },
  {
    note: '面積比は △ABC : △DEF ＝ 9 : 25。❓ 18cm²は「9」の何倍？ 18÷9 ＝ 2 なので、比の1あたりが 2cm² です。△DEF は 25 にあたるので 2×25 ＝ 50cm²。',
    add: F([...Array.from({ length: 9 }, (_, i) => bx(20 + i * 30.5, 26, 28, 28, '2', C.blue, FILL.blue, 12)), L(160, 66, '△ABC ＝ 9個 ＝ 18cm²（1個＝2cm²）', 12, C.blue, true), ...Array.from({ length: 25 }, (_, i) => bx(20 + i * 11.2, 84, 10, 26, undefined, C.red, FILL.red)), L(160, 124, '△DEF ＝ 25個 ＝ 2×25 ＝ 50cm²', 12, C.red, true)], [eb(152, '18 ÷ 9 ＝ 2　2 × 25 ＝ 50', C.green, FILL.green, 16), tx(206, '1あたりを求めてから かける', 12, C.gray)]),
  },
  {
    note: '答えは △DEF の面積 ＝ 50cm² です。',
    add: F(flow(['面積比 9:25', '18 ÷ 9 ＝ 2', '2 × 25'], 40, { h: 44, color: C.green, fill: FILL.green, size: 13 }).flat(), [eb(152, '答え 50cm²', C.green, FILL.green, 20)]),
  },
  {
    note: '確かめ（検算）です。18×25÷9 ＝ 450÷9 ＝ 50cm²。また、(5/3)² ＝ 25/9 ≒ 2.78倍で、18×2.78 ≒ 50 とも合います。2つの方法で同じ答えです。',
    add: F([eb(12, '18 × 25 ÷ 9 ＝ 450 ÷ 9 ＝ 50', C.green, FILL.green, 15, 32), eb(56, '(5/3)² ＝ 25/9 ≒ 2.78倍', C.blue, FILL.blue, 15, 32), eb(100, '18 × 2.78 ≒ 50 ✓', C.green, FILL.green, 16, 32)], [tx(170, '2通りで同じ 50cm²', 14, C.green, true)]),
  },
  {
    note: 'よくあるまちがいは、面積比を相似比のまま 3:5 にして、18×5÷3 ＝ 30cm² と答えることです。相似比は「長さの比」。面積を比べるときは、2乗の 9:25 を使います。',
    add: F([eb(14, '3 : 5 のまま → 30cm²', C.red, FILL.red, 16, 34), L(160, 62, '長さの比を面積に使っている', 12, C.red, true), eb(80, '9 : 25 → 50cm²', C.green, FILL.green, 16, 34)], [tx(150, '× 相似比のまま　　○ 2乗', 14, C.gray, true), tx(190, '相似比 ＝ 長さの比', 13, C.gray)]),
  },
  {
    note: '❓ では、立体ならどうなるの？ 縦・横・高さの3方向に広がるので、体積比は相似比の3乗です。相似比が3:5なら、体積比は 3×3×3 : 5×5×5 ＝ 27 : 125。長さ・面積・体積で、乗の回数が1・2・3と増えます。',
    add: F([bx(30, 30, 100, 60, '3×3×3\n＝ 27', C.blue, FILL.blue, 15), bx(190, 14, 100, 90, '5×5×5\n＝ 125', C.red, FILL.red, 16), L(160, 60, ':', 22, C.ink, true), L(160, 122, '体積比 ＝ 相似比の 3乗', 13, C.green, true)], [eb(152, '3方向に広がる → 3乗', C.green, FILL.green, 16), tx(206, '立体の体積比は 27 : 125', 12, C.gray)]),
  },
  {
    note: 'まとめです。相似比が 3:5 のとき、長さの比は 3:5、面積の比は 3²:5² ＝ 9:25、体積の比は 3³:5³ ＝ 27:125。今回の面積は 18×25/9 ＝ 50cm² でした。',
    add: F([eb(10, '長さの比　3 : 5', C.gray, FILL.gray, 15, 30), eb(46, '面積の比　9 : 25（2乗）', C.blue, FILL.blue, 15, 30), eb(82, '体積の比　27 : 125（3乗）', C.red, FILL.red, 15, 30)], [eb(152, '面積 18 → 50cm²', C.green, FILL.green, 18), tx(206, '相似比 ＝ 長さの比、面積は2乗', 12, C.gray)]),
  },
], '相似な図形の面積比');

// 2円の共通外接線
const cO = { x: 90, y: 78 };
const cP = { x: 160, y: 78 };
const T1 = { x: 111.4, y: 32.8 };
const T2 = { x: 168.6, y: 59.9 };
const H1 = { x: 102.9, y: 50.9 };
const tanLine = (): E => ln(72, 14, 232, 90, C.blue, false, 2.2);
const twoCircles = (): E[] => [ci(cO.x, cO.y, 50, undefined, C.gray, 'rgba(110,100,92,0.05)'), ci(cP.x, cP.y, 20, undefined, C.gray, 'rgba(110,100,92,0.10)'), L(cO.x - 20, cO.y + 6, 'O', 13, C.ink, true), L(cP.x + 2, cP.y + 4, 'O′', 11, C.ink, true), ci(cO.x, cO.y, 2, undefined, C.ink, C.ink), ci(cP.x, cP.y, 2, undefined, C.ink, C.ink)];
const s2c2_16: Figure = show([
  {
    note: '半径5cmの円Oと半径2cmの円O′が外接しています（1点で接し、中心間の距離は半径の和）。この2円の共通外接線PQの長さ（接点P、Q間の距離）を求めます。',
    add: F([...twoCircles(), tanLine(), ...pt({ X: (x) => x, Y: (y) => y }, T1.x, T1.y, C.red, 'P', -6, -6, 'end'), ...pt({ X: (x) => x, Y: (y) => y }, T2.x, T2.y, C.red, 'Q', 6, -4, 'start')], [eb(152, '共通外接線 PQ の長さは？', C.blue, FILL.blue, 16), tx(206, '半径5cmと2cmの2円は外側から接している', 12, C.gray)]),
  },
  {
    note: '❓ 「外接している」とは、中心間の距離はいくつ？ 外側から接する2円は、半径の和だけ中心がはなれています。OO′ ＝ 5＋2 ＝ 7cm です。',
    add: T([ln(cO.x, cO.y, 140, 78, C.blue, false, 3), ln(140, 78, cP.x, cP.y, C.red, false, 3), L(115, 94, '5', 12, C.blue, true), L(150, 94, '2', 12, C.red, true), L(125, 112, 'OO′ ＝ 7cm', 12, C.ink, true)], [eb(152, 'OO′ ＝ 5 ＋ 2 ＝ 7cm', C.blue, FILL.blue, 17), tx(206, '外接：中心間の距離 ＝ 半径の和', 12, C.gray)]),
  },
  {
    note: '❓ 接線と半径には、どんな関係があるの？ 円の接線は、接点を通る半径と垂直です。だから OP ⟂ PQ、O′Q ⟂ PQ。2本の半径 OP と O′Q は、どちらも PQ に垂直なので平行になります。',
    add: T([ln(cO.x, cO.y, T1.x, T1.y, C.green, false, 2.2), ln(cP.x, cP.y, T2.x, T2.y, C.green, false, 2.2), pg([[T1.x + 6.3, T1.y + 3], [T1.x + 6.3 - 3, T1.y + 3 + 6.3], [T1.x - 3, T1.y + 6.3]], C.ink, 'rgba(255,255,255,0)'), pg([[T2.x - 6.3, T2.y - 3], [T2.x - 6.3 - 3, T2.y - 3 + 6.3], [T2.x - 3, T2.y + 6.3]], C.ink, 'rgba(255,255,255,0)'), L(240, 40, 'OP ⟂ PQ\nO′Q ⟂ PQ', 11, C.green, true, 'start')], [eb(152, '接点で 半径 ⟂ 接線', C.green, FILL.green, 17), tx(206, 'だから OP ∥ O′Q（平行）', 12, C.gray)]),
  },
  {
    note: '❓ どんな補助線を引くの？ O′から半径OPに垂線 O′H をおろします。すると四角形 HPQO′ は、3つの角が直角なので長方形になり、O′H ＝ PQ、HP ＝ O′Q ＝ 2 になります。',
    add: T([pg([[H1.x, H1.y], [T1.x, T1.y], [T2.x, T2.y], [cP.x, cP.y]], C.green, 'rgba(22,163,74,0.14)'), ln(cP.x, cP.y, H1.x, H1.y, C.green, true, 2), ...pt({ X: (x) => x, Y: (y) => y }, H1.x, H1.y, C.green, 'H', -8, 6, 'end'), L(236, 112, '長方形 HPQO′\nO′H ＝ PQ\nHP ＝ 2', 10, C.green, true, 'start')], [eb(152, 'O′H ＝ PQ、HP ＝ 2', C.green, FILL.green, 17), tx(206, 'PQ を O′H に移して考える', 12, C.gray)]),
  },
  {
    note: '❓ OH の長さは？ OP は半径で5、HP は2なので、OH ＝ OP−HP ＝ 5−2 ＝ 3cm。直角三角形 OHO′ は、OH＝3、OO′＝7、O′H＝PQ（求めたい長さ）です。',
    add: F([pg([[70, 56], [70, 110], [183.9, 110]], C.green, 'rgba(22,163,74,0.12)'), pg([[70, 104], [76, 104], [76, 110], [70, 110]], C.ink, 'rgba(255,255,255,0)'), L(64, 82, 'OH\n＝5−2＝3', 11, C.blue, true, 'end'), L(127, 124, 'O′H ＝ PQ ＝ ？', 12, C.red, true), L(140, 70, 'OO′ ＝ 7', 12, C.ink, true, 'start'), L(70, 48, 'O', 12, C.ink, true), L(70, 124, 'H', 12, C.ink, true), L(190, 106, 'O′', 12, C.ink, true, 'start')], [eb(152, '直角三角形 OHO′（∠H ＝ 90°）', C.green, FILL.green, 15), tx(206, '斜辺 7、OH ＝ 3', 12, C.gray)]),
  },
  {
    note: '❓ O′H はどう求めるの？ 直角三角形では、三平方の定理 斜辺² ＝ 他の2辺²の和 が成り立ちます。O′H² ＝ OO′²−OH² ＝ 7²−3² ＝ 49−9 ＝ 40。',
    add: F([eb(10, '斜辺² ＝ 他の2辺² の和', C.gray, FILL.gray, 15, 30), eb(50, '7² ＝ 3² ＋ O′H²', C.blue, FILL.blue, 16, 30), eb(90, 'O′H² ＝ 49 − 9 ＝ 40', C.green, FILL.green, 16, 30)], [tx(150, '三平方の定理（直角三角形）', 14, C.gray, true)]),
  },
  {
    note: '外接線の長さは PQ ＝ O′H ＝ √40 ＝ 2√10cm です。(√40 ＝ √(4×10) ＝ 2√10)',
    add: F(flow(['O′H² ＝ 40', '√40', '2√10 cm'], 40, { h: 44, color: C.green, fill: FILL.green, size: 14 }).flat(), [eb(152, '答え 2√10 cm', C.green, FILL.green, 19), tx(206, '√40 ＝ √(4×10) ＝ 2√10', 12, C.gray)]),
  },
  {
    note: '確かめ（検算）です。√10 ≒ 3.16 なので 2√10 ≒ 6.32cm。中心間の距離7cmより短く、OO′ を斜辺とする直角三角形の1辺として合っています。3²＋40 ＝ 49 ＝ 7² も成り立ちます。',
    add: F([eb(12, '2√10 ≒ 6.32 ＜ 7 ✓', C.green, FILL.green, 16, 32), eb(56, '3² ＋ 40 ＝ 9 ＋ 40 ＝ 49 ＝ 7² ✓', C.green, FILL.green, 14, 32)], [tx(120, '斜辺より短い辺 ＋ 三平方が成り立つ', 14, C.green, true)]),
  },
  {
    note: 'よくあるまちがいは、半径の「差」のかわりに「和」を使うことです。5＋2＝7 を使うと 7²−7²＝0 となり、長さ0になってしまいます。外接線の補助線は「半径の差」の辺ができる、と覚えます。',
    add: F([eb(14, '和を使う：7² − 7² ＝ 0', C.red, FILL.red, 16, 34), L(160, 62, '長さ 0 ?', 13, C.red, true), eb(80, '差を使う：7² − 3² ＝ 40', C.green, FILL.green, 16, 34)], [tx(150, '× 半径の和　　○ 半径の差', 14, C.gray, true), tx(190, '外接線の補助線 → 差の辺', 13, C.gray)]),
  },
  {
    note: '一般にまとめます。2円の中心間の距離を d、半径を r₁、r₂ とすると、共通外接線の長さは √(d²−(r₁−r₂)²)。今回は d＝7、r₁−r₂＝3 なので √(49−9)＝√40 ＝ 2√10 です。「外は差」と覚えましょう。',
    add: F([eb(12, '外接線 ＝ √( d² − (r₁−r₂)² )', C.blue, FILL.blue, 15, 32), eb(56, 'd ＝ 7、r₁−r₂ ＝ 5−2 ＝ 3', C.blue, FILL.blue, 15, 32), eb(100, '√(49 − 9) ＝ 2√10', C.green, FILL.green, 16, 32)], [tx(170, '「外は差」と覚える', 15, C.green, true)]),
  },
], '2円の共通外接線の長さ');

// 影の長さと相似（木の高さ）
const manTree = (): E[] => [
  ln(10, 130, 310, 130, C.gray, false, 1.4),
  ln(30, 130, 30, 98, C.blue, false, 4),
  ci(30, 94, 4, undefined, C.blue, FILL.blue),
  ln(30, 130, 78, 130, C.gray, false, 4),
  ln(110, 130, 110, 22, C.green, false, 6),
  ci(110, 16, 14, undefined, C.green, FILL.green),
  ln(110, 130, 290, 130, C.gray, false, 4),
];
const rays20 = (): E[] => [ln(30, 98, 78, 130, C.main, false, 1.6), ln(110, 10, 290, 130, C.main, false, 1.6)];
const s2c2_20: Figure = show([
  {
    note: '身長1.6mの太郎さんの影の長さが2.4mでした。同じ時刻に、影の長さが9mの木の高さを求めます。太陽光は平行光線とします。',
    add: F([...manTree(), ...rays20(), L(30, 78, '1.6m', 11, C.blue, true), L(54, 123, '2.4m', 10, C.gray, true), L(100, 70, '？m', 13, C.green, true, 'end'), L(200, 123, '9m', 11, C.gray, true)], [eb(152, '木の高さは何m？', C.blue, FILL.blue, 16), tx(206, '太陽光は平行、同じ時刻に測る', 12, C.gray)]),
  },
  {
    note: '❓ なぜ、太郎さんと木の図形が相似といえるの？ 太陽光は平行なので、光線が地面となす角は同じです。さらに、人も木も地面に垂直（直角）です。2つの角が等しいので、2つの直角三角形は相似になります。',
    add: T([sc(78, 130, 14, 146, 180, C.red, 'rgba(225,29,72,0.35)'), sc(290, 130, 22, 146, 180, C.red, 'rgba(225,29,72,0.35)'), pg([[30, 130], [37, 130], [37, 123], [30, 123]], C.ink, 'rgba(255,255,255,0)'), pg([[110, 130], [117, 130], [117, 123], [110, 123]], C.ink, 'rgba(255,255,255,0)')], [eb(152, '光線の角が等しい ＋ 直角 → 相似', C.red, FILL.red, 15), tx(206, '2つの角が等しい三角形は相似', 12, C.gray)]),
  },
  {
    note: '相似な三角形では、対応する辺の比が等しくなります。太郎さんの「身長：影」と、木の「高さ：影」が対応するので、1.6 : 2.4 ＝ 木の高さ : 9 という比の式ができます。',
    add: F([bx(14, 24, 132, 40, '人　身長 1.6 : 影 2.4', C.blue, FILL.blue, 12), bx(174, 24, 132, 40, '木　高さ h : 影 9', C.green, FILL.green, 12), L(160, 48, '＝', 20, C.ink, true), L(160, 88, '対応する辺の比は 等しい', 13, C.gray, true), L(160, 112, '順序（身長:影 ＝ 高さ:影）をそろえる', 12, C.red, true)], [eb(152, '1.6 : 2.4 ＝ h : 9', C.blue, FILL.blue, 18), tx(206, '身長↔高さ、影↔影 が対応', 12, C.gray)]),
  },
  {
    note: '❓ この比はどう解くの？ 比の式では「内側の積＝外側の積」が成り立ちます。2.4×h ＝ 1.6×9 ＝ 14.4 より、h ＝ 14.4÷2.4 ＝ 6。つまり h ＝ 9×1.6÷2.4 ＝ 6m です。',
    add: F([eb(10, '1.6 : 2.4 ＝ h : 9', C.blue, FILL.blue, 16, 30), eb(48, '外側どうし 1.6×9 ＝ 内側どうし 2.4×h', C.blue, FILL.blue, 13, 30), eb(86, '2.4h ＝ 14.4', C.blue, FILL.blue, 16, 30), eb(124, 'h ＝ 14.4 ÷ 2.4 ＝ 6', C.green, FILL.green, 16, 24)], [tx(164, '内側の積 ＝ 外側の積', 13, C.gray, true)]),
  },
  {
    note: '別の考え方です。1.6 : 2.4 を簡単にすると 2 : 3。影が9mは「3」の3倍なので、高さも「2」の3倍の 2×3 ＝ 6m です。比を同じ数でのばしても変わらない、という性質を使っています。',
    add: F([bx(20, 22, 60, 30, '身長 2', C.blue, FILL.blue, 13), bx(84, 22, 90, 30, '影 3', C.gray, FILL.gray, 13), L(182, 37, '← 1.6 : 2.4 ＝ 2 : 3', 11, C.gray, true, 'start'), bx(20, 66, 180, 30, '高さ 2×3 ＝ 6', C.green, FILL.green, 13), bx(204, 66, 100, 30, '影 3×3 ＝ 9', C.gray, FILL.gray, 13), L(160, 116, '影が 3倍 → 高さも 3倍', 13, C.green, true)], [eb(152, '2 : 3 の 3倍 ＝ 6 : 9', C.green, FILL.green, 17), tx(206, '同じ倍率でのばす', 12, C.gray)]),
  },
  {
    note: '答えは、木の高さ ＝ 6m です。',
    add: F(flow(['9 × 1.6', '÷ 2.4', '6m'], 40, { h: 44, color: C.green, fill: FILL.green, size: 15 }).flat(), [eb(152, '答え 木の高さ ＝ 6m', C.green, FILL.green, 19)]),
  },
  {
    note: '確かめ（検算）です。木の 6:9 を簡単にすると 2:3、太郎さんの 1.6:2.4 も 2:3 で、比が一致します。影の長さ1mあたりの高さは 1.6÷2.4 ＝ 2/3m。9m なら 9×2/3 ＝ 6m でも同じです。',
    add: F([eb(12, '6 : 9 ＝ 2 : 3', C.green, FILL.green, 16, 32), eb(56, '1.6 : 2.4 ＝ 2 : 3 ✓', C.green, FILL.green, 16, 32), eb(100, '影1mあたり 2/3m → 9×2/3 ＝ 6', C.blue, FILL.blue, 14, 32)], [tx(170, '比が一致 ＝ 相似の条件どおり', 14, C.green, true)]),
  },
  {
    note: 'よくあるまちがいは、比の順序をそろえずに 9 : 2.4 ＝ 1.6 : h のように立てることです。これだと h ＝ 1.6×2.4÷9 ≒ 0.43m となり、影が9mもある木が人より低くなって、おかしいと気づけます。',
    add: F([eb(14, '9 : 2.4 ＝ 1.6 : h → h ≒ 0.43m', C.red, FILL.red, 14, 34), L(160, 62, '影9mの木が 人より低い？', 12, C.red, true), eb(80, '1.6 : 2.4 ＝ h : 9 → h ＝ 6m', C.green, FILL.green, 15, 34)], [tx(150, '× 順序がバラバラ　　○ そろえる', 14, C.gray, true), tx(190, '答えの大きさが自然か、必ず確認', 13, C.gray)]),
  },
  {
    note: '❓ なぜ「同じ時刻」に測る必要があるの？ 太陽の高さ（光の角度）は時刻で変わり、影の長さの比も変わるからです。昼は影が短く、夕方は長くなります。同じ時刻なら、人にも木にも同じ角度の光が当たります。',
    add: F([ln(10, 120, 310, 120, C.gray, false, 1.4), ln(40, 120, 40, 88, C.blue, false, 4), ln(40, 120, 70, 120, C.gray, false, 4), L(58, 134, '昼：影が短い', 11, C.blue, true), ln(200, 120, 200, 88, C.blue, false, 4), ln(200, 120, 290, 120, C.gray, false, 4), L(245, 134, '夕方：影が長い', 11, C.red, true), L(160, 52, '同じ人でも、時刻で 影の長さが変わる', 12, C.gray, true)], [eb(152, '同じ時刻 → 同じ角度の光', C.blue, FILL.blue, 16), tx(206, '身長:影 の比がそろう', 12, C.gray)]),
  },
  {
    note: 'まとめです。影の長さ1mあたりの高さは、太郎さんでも木でも同じ 2/3m になります。木の高さは 9×2/3 ＝ 6m。影の長さと高さの比が同じだから、測りにくい高い物の高さも、影から求められます。',
    add: F([bx(14, 24, 140, 44, '人\n1.6 ÷ 2.4 ＝ 2/3', C.blue, FILL.blue, 13), bx(166, 24, 140, 44, '木\n6 ÷ 9 ＝ 2/3', C.green, FILL.green, 13), L(160, 46, '＝', 20, C.ink, true), L(160, 94, '影1mあたりの高さ ＝ 2/3m', 13, C.gray, true)], [eb(152, '木の高さ ＝ 9 × 2/3 ＝ 6m', C.green, FILL.green, 17), tx(206, '影から高さがわかる', 12, C.gray)]),
  },
], '影の長さと相似');

// 正四角錐の高さと体積
const pA: [number, number] = [70, 112];
const pB: [number, number] = [190, 112];
const pC: [number, number] = [250, 84];
const pD: [number, number] = [130, 84];
const pO: [number, number] = [160, 98];
const pP: [number, number] = [160, 53];
const pyramid = (): E[] => [pg([pA, pB, pC, pD], C.ink, 'rgba(110,100,92,0.10)'), ln(pP[0], pP[1], pA[0], pA[1], C.ink, false, 1.8), ln(pP[0], pP[1], pB[0], pB[1], C.ink, false, 1.8), ln(pP[0], pP[1], pC[0], pC[1], C.ink, false, 1.8), ln(pP[0], pP[1], pD[0], pD[1], C.ink, false, 1.8), L(62, 118, 'A', 12, C.ink, true, 'end'), L(196, 120, 'B', 12, C.ink, true, 'start'), L(258, 84, 'C', 12, C.ink, true, 'start'), L(124, 82, 'D', 12, C.ink, true, 'end'), L(160, 44, 'P', 12, C.ink, true)];
const s2c2_31: Figure = show([
  {
    note: '底面が1辺8cmの正方形ABCDで、側稜（頂点Pから底面の各頂点までの長さ）が √41cm の正四角錐があります。この正四角錐の高さと体積を求めます。',
    add: F([...pyramid(), L(130, 130, '8cm', 11, C.blue, true), L(94, 88, '√41cm', 11, C.red, true, 'end')], [eb(152, '高さ と 体積 を求める', C.blue, FILL.blue, 16), tx(206, '側稜 PA ＝ PB ＝ PC ＝ PD ＝ √41cm', 12, C.gray)]),
  },
  {
    note: '❓ 高さはどの線？ 頂点Pから底面にまっすぐ（垂直に）おろした線 PO の長さです。Oは、正方形の対角線 AC と BD が交わる点（中心）にあります。',
    add: T([ln(pA[0], pA[1], pC[0], pC[1], C.gray, true, 1.4), ln(pB[0], pB[1], pD[0], pD[1], C.gray, true, 1.4), ln(pP[0], pP[1], pO[0], pO[1], C.red, true, 2.2), ci(pO[0], pO[1], 2.5, undefined, C.red, C.red), L(166, 100, 'O', 12, C.red, true, 'start'), L(154, 76, '高さ', 11, C.red, true, 'end')], [eb(152, '高さ ＝ PO（底面に垂直）', C.red, FILL.red, 16), tx(206, 'O は 対角線の交点（中心）', 12, C.gray)]),
  },
  {
    note: '❓ なぜ、Pの真下のOが正方形の中心なの？ 側稜PA、PB、PC、PDがすべて同じ長さだからです。Pの真下の点から、4つの頂点までの距離（OA、OB、OC、OD）も等しくなり、そのような点は正方形の中心だけです。',
    add: F([pg([pA, pB, pC, pD], C.ink, 'rgba(110,100,92,0.10)'), ln(pO[0], pO[1], pA[0], pA[1], C.green, false, 2), ln(pO[0], pO[1], pB[0], pB[1], C.green, false, 2), ln(pO[0], pO[1], pC[0], pC[1], C.green, false, 2), ln(pO[0], pO[1], pD[0], pD[1], C.green, false, 2), ci(pO[0], pO[1], 3, 'O', C.red, FILL.red, 7), L(160, 132, 'OA ＝ OB ＝ OC ＝ OD', 12, C.green, true)], [eb(152, '側稜が等しい → O は 中心', C.green, FILL.green, 16), tx(206, '4つの頂点から等しい距離の点', 12, C.gray)]),
  },
  {
    note: '❓ OA の長さは？ OAは、正方形の対角線ACの半分です。1辺8cmの正方形の対角線は、直角をはさむ2辺8と8の直角三角形の斜辺なので、三平方の定理で 8²＋8²＝128、√128 ＝ 8√2。その半分が OA ＝ 4√2 です。',
    add: F([pg([[60, 110], [140, 110], [140, 30], [60, 30]], C.gray, 'rgba(110,100,92,0.08)'), ln(60, 110, 140, 30, C.green, false, 2.4), L(100, 124, '8', 13, C.blue, true), L(150, 70, '8', 13, C.blue, true, 'start'), L(20, 18, '対角線 8√2', 11, C.green, true, 'start'), L(222, 50, '8² ＋ 8² ＝ 128', 12, C.ink, true, 'start'), L(222, 76, '√128 ＝ 8√2', 12, C.ink, true, 'start'), L(222, 104, 'OA ＝ 4√2', 12, C.red, true, 'start')], [eb(152, 'OA ＝ 8√2 ÷ 2 ＝ 4√2', C.green, FILL.green, 16), tx(206, '対角線の半分', 12, C.gray)]),
  },
  {
    note: '❓ OA が分かったら、どうするの？ PO は底面に垂直なので、PO ⟂ OA。直角三角形 POA ができます。斜辺は側稜 PA＝√41、1辺は OA＝4√2、もう1辺が高さ PO です。',
    add: F([pg([[70, 59], [70, 110], [166, 110]], C.green, 'rgba(22,163,74,0.12)'), pg([[70, 104], [76, 104], [76, 110], [70, 110]], C.ink, 'rgba(255,255,255,0)'), L(62, 84, '高さ PO\n＝ ？', 12, C.red, true, 'end'), L(118, 124, 'OA ＝ 4√2', 12, C.blue, true), L(132, 76, 'PA ＝ √41', 12, C.ink, true, 'start'), L(70, 50, 'P', 12, C.ink, true), L(70, 124, 'O', 12, C.ink, true, 'end'), L(172, 110, 'A', 12, C.ink, true, 'start')], [eb(152, '直角三角形 POA（∠O ＝ 90°）', C.green, FILL.green, 15), tx(206, '斜辺は 側稜 PA ＝ √41', 12, C.gray)]),
  },
  {
    note: '三平方の定理で、PO² ＝ PA²−OA² ＝ (√41)²−(4√2)² ＝ 41−32 ＝ 9。❓ (4√2)² はなぜ32？ 4²×(√2)² ＝ 16×2 ＝ 32 です。PO ＝ √9 ＝ 3cm が高さです。',
    add: F([eb(8, 'PO² ＝ PA² − OA²', C.blue, FILL.blue, 15, 28), eb(40, '＝ (√41)² − (4√2)²', C.blue, FILL.blue, 15, 28), eb(72, '＝ 41 − 32 ＝ 9', C.blue, FILL.blue, 15, 28), eb(104, 'PO ＝ √9 ＝ 3cm', C.green, FILL.green, 16, 28)], [tx(160, '(4√2)² ＝ 4² × 2 ＝ 32', 13, C.gray, true), tx(196, '高さ ＝ 3cm', 15, C.green, true)]),
  },
  {
    note: '❓ 体積の公式「底面積×高さ÷3」は、なぜ÷3なの？ 同じ底面・同じ高さの角柱の体積は 底面積×高さ ＝ 64×3 ＝ 192cm³。角錐の体積は、この角柱のちょうど1/3になるからです。192÷3 ＝ 64cm³。',
    add: F([bx(20, 24, 130, 50, '角柱\n64 × 3 ＝ 192cm³', C.gray, FILL.gray, 12), L(160, 50, '→', 18, C.ink, true), bx(170, 24, 130, 50, '角錐\n192 × 1/3 ＝ 64cm³', C.green, FILL.green, 12), L(160, 98, '同じ底面・同じ高さなら 角錐は 角柱の 1/3', 12, C.gray, true), L(160, 118, '底面積 ＝ 8 × 8 ＝ 64cm²', 12, C.blue, true)], [eb(152, '体積 ＝ 1/3 × 底面積 × 高さ', C.green, FILL.green, 15), tx(206, '1/3 × 64 × 3 ＝ 64', 12, C.gray)]),
  },
  {
    note: '答えです。高さは 3cm、体積は 1/3×64×3 ＝ 64cm³ です。',
    add: F([eb(12, '高さ ＝ 3cm', C.blue, FILL.blue, 18, 34), eb(58, '体積 ＝ 1/3 × 8² × 3 ＝ 64cm³', C.green, FILL.green, 15, 34)], [eb(152, '答え 高さ 3cm、体積 64cm³', C.green, FILL.green, 17)]),
  },
  {
    note: '確かめ（検算）です。高さ3cm、OA＝4√2cm の直角三角形の斜辺は √(3²＋(4√2)²) ＝ √(9＋32) ＝ √41 で、問題で与えられた側稜と一致します。',
    add: F([eb(12, '3² ＋ (4√2)² ＝ 9 ＋ 32 ＝ 41', C.blue, FILL.blue, 15, 32), eb(56, '√41 ＝ 側稜 PA ✓', C.green, FILL.green, 17, 32)], [tx(120, '与えられた側稜と一致する', 15, C.green, true)]),
  },
  {
    note: 'よくあるまちがいは、対角線の半分ではなく、1辺の半分（4cm）を使うことです。PO²＝41−4²＝25 で 高さ5cm と出てしまいます。Oは辺の中点ではなく、正方形の中心なので、頂点までの距離は 4√2 です。',
    add: F([eb(14, '1辺の半分 4 を使う → PO ＝ 5', C.red, FILL.red, 14, 34), L(160, 62, 'O から頂点までは 4 ではない', 12, C.red, true), eb(80, '対角線の半分 4√2 → PO ＝ 3', C.green, FILL.green, 15, 34)], [tx(150, '× 辺の半分　　○ 対角線の半分', 14, C.gray, true), tx(190, '角錐の高さは 中心から頂点まで', 13, C.gray)]),
  },
], '正四角錐の高さと体積');

// 棒と建物の影
const s2c2_42: Figure = show([
  {
    note: '地面に垂直に立てた長さ2mの棒の影が1.5mでした。同じ時刻に、ある建物の影は12mでした。建物の高さと、建物の最上部から影の先端までを結ぶ直線（斜辺）の長さを求めます。',
    add: F([ln(10, 128, 310, 128, C.gray, false, 1.4), ln(30, 128, 30, 114, C.blue, false, 3), ln(30, 128, 40.5, 128, C.gray, false, 3), ln(110, 128, 110, 16, C.green, false, 5), ln(110, 128, 194, 128, C.gray, false, 3), ln(30, 114, 40.5, 128, C.main, false, 1.4), ln(110, 16, 194, 128, C.main, false, 1.4), L(30, 106, '棒 2m', 10, C.blue, true), L(152, 120, '影 12m', 11, C.gray, true), L(102, 70, '高さ ？', 12, C.green, true, 'end'), L(206, 60, '最上部から影の先端\nまでの長さ ？', 11, C.red, true, 'start')], [eb(152, '建物の高さ と 斜辺の長さ は？', C.blue, FILL.blue, 14), tx(206, '棒の影 1.5m（図では小さく描いた）', 12, C.gray)]),
  },
  {
    note: '❓ なぜ棒と建物の直角三角形は相似なの？ 太陽光は平行なので、光線が地面とつくる角が同じ。棒も建物も地面に垂直で直角です。2つの角が等しいので相似です。',
    add: F([ln(10, 128, 310, 128, C.gray, false, 1.4), ln(30, 128, 30, 114, C.blue, false, 3), ln(30, 128, 40.5, 128, C.gray, false, 3), ln(110, 128, 110, 16, C.green, false, 5), ln(110, 128, 194, 128, C.gray, false, 3), ln(30, 114, 40.5, 128, C.main, false, 1.4), ln(110, 16, 194, 128, C.main, false, 1.4), sc(40.5, 128, 10, 127, 180, C.red, 'rgba(225,29,72,0.4)'), sc(194, 128, 20, 127, 180, C.red, 'rgba(225,29,72,0.4)'), pg([[110, 128], [118, 128], [118, 120], [110, 120]], C.ink, 'rgba(255,255,255,0)'), L(206, 60, '光線の角が等しい\n＋ 地面と垂直', 11, C.red, true, 'start')], [eb(152, '2つの角が等しい → 相似', C.red, FILL.red, 16), tx(206, '直角三角形どうしが相似', 12, C.gray)]),
  },
  {
    note: '棒の「高さ：影」は 2 : 1.5。❓ これを簡単にすると？ 両方を2倍して 4 : 3 になります。比は、同じ数を両方にかけても変わりません。建物の高さを h として、相似より h : 12 ＝ 4 : 3 です。',
    add: F([eb(10, '棒　高さ 2 : 影 1.5', C.blue, FILL.blue, 15, 30), eb(48, '両方を2倍 → 4 : 3', C.blue, FILL.blue, 15, 30), eb(86, '建物　h : 12 ＝ 4 : 3', C.green, FILL.green, 16, 30)], [tx(150, '比は同じ数をかけても変わらない', 13, C.gray, true), tx(190, '高さ : 影 の順をそろえる', 13, C.red, true)]),
  },
  {
    note: '❓ h はどう求めるの？ 影12mは、比の「3」にあたります。比の1あたりは 12÷3 ＝ 4m。高さは比の「4」なので 4×4 ＝ 16m。式で書くと h ＝ 12×4÷3 ＝ 16m です。',
    add: F([...[0, 1, 2].map((i) => bx(20 + i * 60, 26, 56, 28, '4m', C.gray, FILL.gray, 13)), L(200, 40, '← 影 12m ＝ 3個', 12, C.gray, true, 'start'), ...[0, 1, 2, 3].map((i) => bx(20 + i * 60, 66, 56, 28, '4m', C.green, FILL.green, 13)), L(270, 80, '← 高さ\n4個', 12, C.green, true, 'start'), L(160, 118, '12 ÷ 3 ＝ 4（1個）　4 × 4 ＝ 16', 12, C.ink, true)], [eb(152, '建物の高さ h ＝ 16m', C.green, FILL.green, 18), tx(206, '1個あたりを出して、個数をかける', 12, C.gray)]),
  },
  {
    note: '❓ つぎに、最上部から影の先端までの長さ（斜辺）です。建物は地面に垂直なので、建物（縦16m）と影（横12m）は直角です。だから、この長さは、直角をはさむ2辺が16と12の直角三角形の斜辺です。',
    add: F([pg([[70, 30], [70, 110], [130, 110]], C.red, 'rgba(225,29,72,0.10)'), pg([[70, 104], [76, 104], [76, 110], [70, 110]], C.ink, 'rgba(255,255,255,0)'), L(62, 70, '建物 16m', 12, C.green, true, 'end'), L(100, 124, '影 12m', 12, C.gray, true), L(112, 62, '斜辺 ？', 13, C.red, true, 'start')], [eb(152, '直角をはさむ 16 と 12', C.red, FILL.red, 16), tx(206, '建物は地面に垂直 → 直角', 12, C.gray)]),
  },
  {
    note: '三平方の定理 斜辺² ＝ 他の2辺²の和 を使います。16²＋12² ＝ 256＋144 ＝ 400。2乗して400になる数は20なので、斜辺は 20m です。',
    add: F([eb(10, '斜辺² ＝ 16² ＋ 12²', C.blue, FILL.blue, 16, 30), eb(48, '＝ 256 ＋ 144 ＝ 400', C.blue, FILL.blue, 16, 30), eb(86, '斜辺 ＝ √400 ＝ 20m', C.green, FILL.green, 16, 30)], [tx(150, '20² ＝ 400 だから 20', 14, C.gray, true)]),
  },
  {
    note: '確かめ（検算）です。12・16・20 を4で割ると 3・4・5。3:4:5 は直角三角形になる有名な比で、この三角形はその4倍です。きれいな整数でぴったり合います。',
    add: F([pg([[30, 110], [75, 110], [75, 77]], C.gray, FILL.gray), L(52, 124, '4', 11, C.gray, true), L(82, 96, '3', 11, C.gray, true, 'start'), L(48, 90, '5', 11, C.gray, true, 'end'), L(112, 96, '×4', 16, C.red, true), pg([[150, 110], [270, 110], [270, 26]], C.green, 'rgba(22,163,74,0.10)'), L(210, 124, '12', 11, C.green, true), L(276, 70, '16', 11, C.green, true, 'start'), L(200, 62, '20', 12, C.green, true, 'end')], [eb(152, '3：4：5 の4倍 ＝ 12：16：20', C.green, FILL.green, 15), tx(206, '辺の比がぴったり合う', 12, C.gray)]),
  },
  {
    note: '答えです。建物の高さは16m、最上部から影の先端までの斜辺は20mです。',
    add: F([eb(12, '建物の高さ ＝ 16m', C.green, FILL.green, 17, 34), eb(58, '斜辺の長さ ＝ 20m', C.green, FILL.green, 17, 34)], [eb(152, '答え 16m、20m', C.green, FILL.green, 19)]),
  },
  {
    note: '別の方法でも確かめられます。棒の直角三角形の斜辺は √(2²＋1.5²) ＝ √6.25 ＝ 2.5m。建物の影12mは棒の影1.5mの 12÷1.5 ＝ 8倍なので、相似比は1:8。高さは 2×8 ＝ 16m、斜辺は 2.5×8 ＝ 20m と、どちらも一致します。',
    add: F([pg([[30, 100], [60, 100], [60, 80]], C.blue, FILL.blue), L(45, 114, '1.5', 10, C.blue, true), L(66, 92, '2', 10, C.blue, true, 'start'), L(40, 84, '2.5', 10, C.blue, true, 'end'), L(120, 92, '×8', 18, C.red, true), pg([[170, 100], [290, 100], [290, 28]], C.green, 'rgba(22,163,74,0.12)'), L(230, 114, '12', 10, C.green, true), L(296, 64, '16', 10, C.green, true, 'start'), L(226, 60, '20', 11, C.green, true, 'end')], [eb(152, '相似比 1：8 → 2×8 ＝ 16、2.5×8 ＝ 20', C.green, FILL.green, 14), tx(206, '影の比 12 ÷ 1.5 ＝ 8', 12, C.gray)]),
  },
  {
    note: 'よくあるまちがいは、比の式を 12 : 2 ＝ 1.5 : h のように、対応をそろえずに立ててしまうことです。これだと h ＝ 0.25m という小さな値になり、影が12mもある建物として不自然です。「高さ：影」の順をそろえます。',
    add: F([eb(14, '12 : 2 ＝ 1.5 : h → h ＝ 0.25m', C.red, FILL.red, 14, 34), L(160, 62, '影12mの建物が 25cm？', 12, C.red, true), eb(80, '2 : 1.5 ＝ h : 12 → h ＝ 16m', C.green, FILL.green, 15, 34)], [tx(150, '× 順序ちがい　　○ 高さ:影 にそろえる', 13, C.gray, true), tx(190, '答え 高さ 16m、斜辺 20m', 14, C.green, true)]),
  },
], '影の長さと相似（高さと斜辺）');
export const figuresSchoolKoko01: Record<string, Figure> = {
  'koko_kankan_rika_c1_29': r29,
  'koko_kankan_rika_c1_31': r31,
  'koko_kankan_rika_c1_35': r35,
  'koko_kankan_rika_c1_36': r36,
  'koko_kankan_rika_c1_37': r37,
  'koko_kankan_rika_c1_38': r38,
  'koko_kankan_rika_c1_44': r44,
  'koko_kankan_rika_c1_46': r46,
  'koko_kankan_rika_c1_50': r50,
  'koko_kankan_rika_c2_14': r2c14,
  'koko_kankan_rika_c2_47': r2c47,
  'koko_kankan_rika_c3_13': r3c13,
  'koko_kankan_rika_c3_21': r3c21,
  'koko_kankan_rika_c3_22': r3c22,
  'koko_kankan_rika_c3_34': r3c34,
  'koko_kankan_rika_c3_37': r3c37,
  'koko_kankan_rika_c3_38': r3c38,
  'koko_kankan_sansu_c1_02': s2c1_02,
  'koko_kankan_sansu_c1_12': s2c1_12,
  'koko_kankan_sansu_c1_13': s2c1_13,
  'koko_kankan_sansu_c1_17': s2c1_17,
  'koko_kankan_sansu_c1_18': s2c1_18,
  'koko_kankan_sansu_c1_20': s2c1_20,
  'koko_kankan_sansu_c1_23': s2c1_23,
  'koko_kankan_sansu_c1_30': s2c1_30,
  'koko_kankan_sansu_c1_35': s2c1_35,
  'koko_kankan_sansu_c1_48': s2c1_48,
  'koko_kankan_sansu_c2_05': s2c2_05,
  'koko_kankan_sansu_c2_16': s2c2_16,
  'koko_kankan_sansu_c2_20': s2c2_20,
  'koko_kankan_sansu_c2_31': s2c2_31,
  'koko_kankan_sansu_c2_42': s2c2_42,
};
