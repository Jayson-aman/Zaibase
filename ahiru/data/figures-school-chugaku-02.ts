// 中学受験 入試傾向問題（算数・理科）第02批の動く図解スライド。
// キーは問題 id。「❓なぜ？→答え」の連鎖で、式を出して終わりにしない。
// 画面の上半分に図、下の帯（band）に、そのスライドの式やひとこと、という配置。
import type { DiagramElement, Figure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, show, band, fresh, flow, cover } from './diagram-kit';

type E = DiagramElement;
const eb = (y: number, t: string, color: string, fill: string, size = 14, h = 30, x = 20, w = 280): E => bx(x, y, w, h, t, color, fill, size);
const tx = (y: number, t: string, size = 12, color: string = C.gray, bold = false): E => lb(160, y, t, size, color, 'middle', bold);
const NOFILL = 'rgba(255,255,255,0)';
const pt = (x: number, y: number): [number, number] => [x, y];

// ═══ 1. 所持金の3/5を使い、残りの1/4を貯金 ═══
const money: Figure = show([
  {
    note: '所持金2000円の3/5を使い、残りの1/4を貯金（ちょきん）します。最後に残る金額を求めます。❓まず「3/5を使う」とは、2000円をどう分けることでしょう。',
    add: [lb(160, 20, 'はじめの所持金', 12, C.gray, 'middle'), bx(20, 30, 280, 36, '2000円', C.main, FILL.warm, 15), ...band(150, tx(175, '3/5を使い、残りの1/4を貯金', 13, C.ink, true), tx(198, '残るお金は？', 13, C.blue, true))],
  },
  {
    note: '❓3/5ってどういうこと？→全体を5等分して、そのうち3つ分という意味です。2000÷5＝400円が1つ分です。',
    add: [...fresh(...[0, 1, 2, 3, 4].map((i) => bx(20 + i * 56, 30, 56, 36, '400円', C.main, FILL.warm, 11))), ...band(150, tx(175, '2000÷5＝400円（1つ分）', 14, C.ink, true))],
  },
  {
    note: '❓使うのは？→3つ分で 400×3＝1200円。❓残りは？→2つ分で 2000−1200＝800円です。',
    add: [...[0, 1, 2].map((i) => bx(20 + i * 56, 30, 56, 36, '400円', C.red, FILL.red, 11)), ...[3, 4].map((i) => bx(20 + i * 56, 30, 56, 36, '400円', C.blue, FILL.blue, 11)), ln(20, 78, 186, 78, C.red, false, 3), lb(103, 94, '使う 1200円', 12, C.red, 'middle', true), ln(190, 78, 300, 78, C.blue, false, 3), lb(245, 94, '残り 800円', 12, C.blue, 'middle', true), ...band(150, tx(175, '使った 400×3＝1200円', 13), tx(198, '残り 2000−1200＝800円', 13, C.blue, true))],
  },
  {
    note: '❓「残りの1/4」は、何の1/4？→使ったあとに残った800円の1/4です。800円を4等分して、1つ分の800÷4＝200円が貯金です。',
    add: [...fresh(lb(160, 20, '残り800円をもとにする', 12, C.blue, 'middle', true), bx(20, 30, 70, 36, '貯金 200円', C.green, FILL.green, 11), bx(90, 30, 70, 36, '200円', C.blue, FILL.blue, 11), bx(160, 30, 70, 36, '200円', C.blue, FILL.blue, 11), bx(230, 30, 70, 36, '200円', C.blue, FILL.blue, 11)), ...band(150, tx(175, '800÷4＝200円（貯金）', 14, C.ink, true))],
  },
  {
    note: '❓なぜ最初の2000円の1/4（500円）ではだめ？→問題は「残りの」1/4と言っています。500円は残り800円の1/4（200円）より多すぎて、もとにする量がまちがっています。',
    add: [...fresh(lb(132, 18, '800円', 11, C.blue, 'middle'), ln(132, 22, 132, 112, C.gray, true), bx(20, 30, 28, 28, '200', C.green, FILL.green, 10), bx(48, 30, 84, 28, '残り 600', C.blue, FILL.blue, 11), lb(145, 44, '← 正しい貯金 200円', 11, C.green, 'start'), bx(20, 76, 70, 28, '500円', C.red, FILL.red, 12), lb(100, 90, '← 多すぎる', 11, C.red, 'start')), ...band(150, tx(172, '「残りの1/4」のもとにする量は800円', 12, C.ink, true), tx(196, '2000円の1/4ではない', 12, C.red, true))],
  },
  {
    note: '❓残っている金額は？→800円から貯金の200円を引いて、800−200＝600円です。',
    add: [...fresh(bx(20, 30, 70, 36, '貯金 200円', C.green, FILL.green, 11), bx(90, 30, 210, 36, '残り 600円', C.blue, FILL.blue, 15)), ...band(150, eb(165, '800−200＝600円', C.green, FILL.green, 16, 34), tx(224, '答え 600円', 13, C.green, true))],
  },
  {
    note: '確かめ（検算）です。割合だけで考えると、使ったあとに残るのは 2/5、その中で貯金しないで残るのは 3/4。2000×2/5×3/4＝600円で、同じ答えになりました。',
    add: [...fresh(lb(101, 34, '×2/5', 12, C.blue, 'middle', true), lb(219, 34, '×3/4', 12, C.blue, 'middle', true), ...flow(['2000円', '800円', '600円'], 44, { gap: 50, h: 40, color: C.blue, fill: FILL.blue, size: 15 }).flat()), ...band(150, tx(180, '2000×2/5×3/4＝600円', 14, C.ink, true), tx(206, 'どちらの方法でも 600円', 12, C.green, true))],
  },
]);

// ═══ 2. 定価の2割引き（2問で共通） ═══
const cellX = (i: number) => 20 + 28 * i;
const wari = (paid: number, unit: number, teika: number, cut: number, wrong: number, wrongBack: string): Figure =>
  show([
    {
      note: `ある商品を定価の2割引きで買い、${paid}円はらいました。定価を求めます。❓まず、定価を「10こに分けた1列」として図にします。`,
      add: [lb(160, 14, '定価 ？円', 13, C.ink, 'middle', true), ln(20, 26, 300, 26, C.gray, false, 2), ...[...Array(10)].map((_, i) => bx(cellX(i), 34, 28, 36, undefined, C.gray, FILL.gray)), ...band(150, tx(175, `定価の2割引きで ${paid}円`, 14, C.ink, true), tx(198, '定価はいくら？', 13, C.blue, true))],
    },
    {
      note: '❓2割引きとは？→定価を10こに分けたうちの2こ分（2割）を引く、ということです。赤が引く分、青が残る分です。',
      add: [...[...Array(8)].map((_, i) => bx(cellX(i), 34, 28, 36, undefined, C.blue, FILL.blue)), ...[8, 9].map((i) => bx(cellX(i), 34, 28, 36, '引く', C.red, FILL.red, 10)), ...band(150, tx(172, '定価を10こに分ける（1こ＝1割）', 12), tx(196, '2割引き＝2こ分を引く', 13, C.red, true))],
    },
    {
      note: `❓はらった金額は定価のどれだけ？→10このうち8こ分です。8割、つまり 1−0.2＝0.8倍。この8こ分が ${paid}円です。`,
      add: [ln(20, 84, 244, 84, C.blue, false, 3), lb(132, 102, `8こ分 ＝ ${paid}円`, 14, C.blue, 'middle', true), ...band(150, tx(172, '8こ分＝8割＝1−0.2＝0.8倍', 13), tx(196, `はらった${paid}円は定価の0.8倍`, 13, C.blue, true))],
    },
    {
      note: `❓1こ分はいくら？→8こ分で ${paid}円なので、${paid}÷8＝${unit}円が1こ分（1割分）です。`,
      add: [...fresh(...[...Array(8)].map((_, i) => bx(cellX(i), 34, 28, 36, String(unit), C.blue, FILL.blue, 10)), ...[8, 9].map((i) => bx(cellX(i), 34, 28, 36, '引く', C.red, FILL.red, 10))), ...band(150, tx(172, `8こ分が ${paid}円`, 13), eb(186, `1こ分＝${paid}÷8＝${unit}円`, C.green, FILL.green, 15, 34))],
    },
    {
      note: `❓では定価は？→定価は10こ分です。1こ分の ${unit}円を10倍して、${unit}×10＝${teika}円です。`,
      add: [...fresh(lb(160, 18, '定価 ＝ 10こ分', 13, C.ink, 'middle', true), ...[...Array(10)].map((_, i) => bx(cellX(i), 34, 28, 36, String(unit), C.green, FILL.green, 10))), ...band(150, eb(172, `${unit}×10＝${teika}円`, C.green, FILL.green, 17, 38))],
    },
    {
      note: `❓式にまとめると？→定価に0.8をかけたのが ${paid}円です。❓では定価を出すには？→かけ算のもとにもどすので、0.8でわります。${paid}÷0.8＝${teika}円で、さっきと同じです。`,
      add: [...fresh(bx(20, 30, 110, 40, `定価 ${teika}円`, C.main, FILL.warm, 14), bx(190, 30, 110, 40, `${paid}円`, C.blue, FILL.blue, 14), ar(132, 42, 188, 42, C.blue), lb(160, 34, '×0.8', 12, C.blue, 'middle', true), ar(188, 62, 132, 62, C.red), lb(160, 78, '÷0.8', 12, C.red, 'middle', true)), ...band(150, tx(180, `${paid}÷0.8＝${teika}円`, 16, C.green, true))],
    },
    {
      note: `❓よくあるまちがいは？→${paid}円に2割を足して ${paid}×1.2＝${wrong}円とすること。2割は「定価」に対する割合なので、${paid}円に対する2割ではありません。`,
      add: [...fresh(bx(20, 14, 280, 34, `${paid}×1.2＝${wrong}円  ✗`, C.red, FILL.red, 15), lb(160, 72, `${wrong}円の2割引きを計算すると`, 12, C.gray, 'middle'), bx(40, 86, 240, 34, `${wrong}×0.8＝${wrongBack}円`, C.gray, FILL.gray, 14)), ...band(150, tx(180, `${paid}円にならないので、まちがい`, 13, C.red, true))],
    },
    {
      note: `検算です。定価${teika}円の2割は ${cut}円。${teika}−${cut}＝${paid}円で、問題の金額と一致しました。答えは ${teika}円です。`,
      add: [...fresh(eb(14, `${teika}円の2割＝${cut}円`, C.blue, FILL.blue, 15, 34), eb(62, `${teika}−${cut}＝${paid}円  ○`, C.green, FILL.green, 16, 34), tx(124, `定価 ${teika}円`, 18, C.green, true))],
    },
  ], '定価の2割引き');

// ═══ 3. 比5:3で差が600円 ═══
const hiCell = (row: number, i: number, color: string, fill: string, text?: string) => bx(50 + i * 44, row === 0 ? 30 : 76, 44, 36, text, color, fill, 11);
const hi: Figure = show([
  {
    note: '兄と弟の所持金の比は5:3で、兄は弟より600円多いです。兄の所持金を求めます。❓まず、比5:3を図にします。',
    add: [lb(30, 48, '兄', 14, C.blue, 'middle', true), lb(30, 94, '弟', 14, C.green, 'middle', true), ...[0, 1, 2, 3, 4].map((i) => hiCell(0, i, C.blue, FILL.blue)), ...[0, 1, 2].map((i) => hiCell(1, i, C.green, FILL.green)), ...band(150, tx(180, '兄：弟＝5：3　兄のほうが600円多い', 13, C.ink, true))],
  },
  {
    note: '❓比5:3は何を表している？→同じ大きさの箱を、兄が5つ分、弟が3つ分もっているということです。箱1つ分が何円かが分かれば、兄も弟も求まります。',
    add: [...[0, 1, 2, 3, 4].map((i) => hiCell(0, i, C.blue, FILL.blue, '1つ分')), ...[0, 1, 2].map((i) => hiCell(1, i, C.green, FILL.green, '1つ分')), ...band(150, tx(180, '同じ大きさの箱 5つ分と3つ分', 13, C.ink, true))],
  },
  {
    note: '❓では、600円の差は図のどこ？→兄の5つ分から、弟と同じ3つ分を重ねて引いた、あまりの2つ分です。赤い部分が差です。',
    add: [...[3, 4].map((i) => hiCell(0, i, C.red, FILL.red, '差')), ...band(150, tx(170, '兄の5つ分 − 弟の3つ分 ＝ 2つ分', 13), tx(196, 'この2つ分が 600円', 14, C.red, true))],
  },
  {
    note: '❓なぜ、差には2つ分しか関係ないの？→兄と弟が同じ金額をもっている3つ分は、引き算で消えてしまうからです。差になるのは、兄だけがもっている2つ分だけです。',
    add: [ln(50, 118, 182, 118, C.gray, false, 2), lb(116, 132, '同じ3つ分', 11, C.gray, 'middle', true), ...band(158, tx(172, '兄と弟で同じ3つ分は、引くと消える', 13), tx(198, '差の600円は、のこった2つ分', 13, C.red, true))],
  },
  {
    note: '❓1つ分はいくら？→2つ分が600円なので、600÷2＝300円です。',
    add: [...fresh(...[0, 1, 2].map((i) => hiCell(0, i, C.blue, FILL.blue, '300円')), ...[3, 4].map((i) => hiCell(0, i, C.red, FILL.red, '300円')), ...[0, 1, 2].map((i) => hiCell(1, i, C.green, FILL.green, '300円'))), ...band(150, eb(172, '600÷2＝300円（1つ分）', C.green, FILL.green, 16, 36))],
  },
  {
    note: '❓兄はいくら？→兄は5つ分なので、300×5＝1500円です。弟は3つ分なので300×3＝900円です。',
    add: [lb(30, 48, '兄', 14, C.blue, 'middle', true), lb(30, 94, '弟', 14, C.green, 'middle', true), lb(276, 52, '1500円', 11, C.blue, 'start', true), lb(276, 98, '900円', 11, C.green, 'start', true), ...band(150, tx(172, '兄 300×5＝1500円', 14, C.blue, true), tx(198, '弟 300×3＝900円', 14, C.green, true))],
  },
  {
    note: '検算です。1500−900＝600円で、差が合いました。1500：900は、どちらも300でわると5：3で、比も合いました。',
    add: [...fresh(eb(14, '1500−900＝600円  ○', C.green, FILL.green, 16, 34), eb(60, '1500：900 ＝ 5：3（300でわる）  ○', C.green, FILL.green, 14, 34), tx(124, '兄の所持金 1500円', 18, C.green, true))],
  },
  {
    note: '❓よくあるまちがいは？→600円を、比の合計8でわること。合計でわるのは「2人の合計」が分かっているときです。この問題で分かっているのは「差」なので、差の2つ分でわります。',
    add: [...fresh(eb(14, '600÷8  ✗（合計でわってしまう）', C.red, FILL.red, 14, 34), eb(60, '600÷2  ○（差の2つ分でわる）', C.green, FILL.green, 14, 34), tx(124, '差が分かっていたら、差の比でわる', 13, C.blue, true))],
  },
]);

// ═══ 4. 円柱の体積と表面積 ═══
const ell = (cx: number, cy: number, rx: number, ry: number, color: string, fill: string, n = 28): E =>
  pg(Array.from({ length: n }, (_, i) => pt(cx + rx * Math.cos((2 * Math.PI * i) / n), cy + ry * Math.sin((2 * Math.PI * i) / n))), color, fill);
const cylBody = (cx: number, top: number, rx: number, ry: number, h: number, color: string, fill: string): E =>
  pg([pt(cx - rx, top), ...Array.from({ length: 13 }, (_, i) => { const a = Math.PI - (Math.PI * i) / 12; return pt(cx + rx * Math.cos(a), top + h + ry * Math.sin(a)); }), pt(cx + rx, top)], color, fill);
const cyl = (cx: number, top: number, rx: number, ry: number, h: number, color: string = C.main, fill: string = FILL.warm): E[] => [cylBody(cx, top, rx, ry, h, color, fill), ell(cx, top, rx, ry, color, fill)];
const cylinder: Figure = show([
  {
    note: '底面の半径が3cm、高さが8cmの円柱（えんちゅう）の体積と表面積を、円周率3.14で求めます。❓まず体積から考えます。',
    add: [...cyl(140, 40, 50, 14, 76), ln(140, 40, 190, 40, C.red), lb(165, 20, '半径3cm', 11, C.red, 'middle', true), ln(204, 40, 204, 116, C.blue), lb(236, 80, '高さ8cm', 12, C.blue, 'middle', true), ...band(150, tx(180, '体積と表面積（円周率3.14）', 14, C.ink, true), tx(204, '図は実際の比とはちがいます', 10, C.gray))],
  },
  {
    note: '❓体積はなぜ「底面積×高さ」？→底面の円と同じ形の、うすい円ばんを、高さ8cmの分だけ積み重ねたものが円柱だからです。1まいぶんの面積（底面積）に、重ねた高さをかければ体積になります。',
    add: [...fresh(...[0, 1, 2, 3, 4, 5].map((i) => ell(140, 100 - i * 12, 50, 14, C.main, i % 2 ? FILL.warm : FILL.yellow)), ln(204, 100, 204, 28, C.blue), lb(236, 64, '高さ8cm', 12, C.blue, 'middle', true)), ...band(150, tx(180, '円ばんを8cmぶん、積み重ねる', 14, C.ink, true), tx(204, '体積 ＝ 底面積 × 高さ', 14, C.blue, true))],
  },
  {
    note: '❓底面積は？→底面は半径3cmの円です。円の面積は「半径×半径×3.14」なので、3×3×3.14＝28.26cm²です。',
    add: [...fresh(ci(110, 70, 48, undefined, C.main, FILL.warm), ln(110, 70, 158, 70, C.red), lb(134, 62, '3cm', 12, C.red, 'middle', true), lb(230, 62, '底面積', 12, C.gray, 'middle'), lb(230, 82, '28.26cm²', 13, C.blue, 'middle', true)), ...band(150, eb(170, '3×3×3.14＝28.26cm²', C.blue, FILL.blue, 16, 36))],
  },
  {
    note: '❓体積は？→底面積28.26cm²を高さ8cmの分だけ重ねるので、28.26×8＝226.08cm³です。',
    add: [...fresh(...cyl(110, 40, 50, 14, 76, C.blue, FILL.blue), lb(250, 60, '28.26cm²', 12, C.blue, 'middle', true), lb(250, 84, '×8cm', 13, C.red, 'middle', true)), ...band(150, eb(170, '28.26×8＝226.08cm³', C.green, FILL.green, 16, 36))],
  },
  {
    note: '❓次に表面積。「表面積」とは？→外側の面ぜんぶの面積の合計です。円柱は、上と下の円が2まいと、まわりの側面が1まいでできています。展開図にすると分かりやすくなります。',
    add: [...fresh(ci(120, 34, 18, '上', C.blue, FILL.blue, 11), bx(40, 54, 240, 44, '側面（長方形）', C.green, FILL.green, 13), ci(120, 118, 18, '下', C.blue, FILL.blue, 11)), ...band(150, tx(176, '円2まい ＋ 側面1まい', 14, C.ink, true))],
  },
  {
    note: '❓側面の横の長さは？→側面は底面の円にぴったり巻きついています。だから側面の横は、円のまわり（円周）と同じ長さです。直径ではありません。円周は 3×2×3.14＝18.84cmです。',
    add: [...fresh(bx(40, 30, 240, 60, '側面', C.green, FILL.green, 14), lb(160, 20, '横 ＝ 円周 ＝ 3×2×3.14＝18.84cm', 12, C.red, 'middle', true), lb(292, 62, '8cm', 12, C.blue, 'start', true)), ...band(150, tx(172, '側面は円にぴったり巻きつく', 13), tx(196, 'だから横は円周（直径6cmではない）', 12, C.red, true))],
  },
  {
    note: '❓側面の面積は？→長方形なので「横×たて」。18.84×8＝150.72cm²。円2まいは 28.26×2＝56.52cm²。あわせて 150.72＋56.52＝207.24cm²です。',
    add: [...fresh(eb(14, '側面 18.84×8＝150.72cm²', C.green, FILL.green, 14, 34), eb(58, '円2まい 28.26×2＝56.52cm²', C.blue, FILL.blue, 14, 34), eb(102, '150.72＋56.52＝207.24cm²', C.main, FILL.warm, 15, 34)), ...band(150, tx(190, '体積 226.08cm³　表面積 207.24cm²', 14, C.green, true))],
  },
  {
    note: '検算です。3.14を最後にまとめます。体積は 9×8×3.14＝72×3.14＝226.08。表面積は（9×2＋6×8）×3.14＝66×3.14＝207.24。どちらも同じになりました。',
    add: [...fresh(eb(14, '体積 9×8＝72　72×3.14＝226.08', C.blue, FILL.blue, 13, 34), eb(58, '表面積 9×2＋6×8＝66', C.blue, FILL.blue, 13, 34), eb(102, '66×3.14＝207.24', C.blue, FILL.blue, 13, 34)), ...band(150, tx(190, 'さっきの答えと同じ  ○', 14, C.green, true))],
  },
]);

// ═══ 5. 原価2500円に4割の利益、2割引き ═══
const profit: Figure = show([
  {
    note: '原価2500円の商品に、4割の利益を見こんで定価をつけ、そのあと2割引きで売ります。利益か損かを求めます。❓まず、原価を10こに分けた列にします。',
    add: [lb(160, 14, '原価 2500円 ＝ 10こ分', 13, C.ink, 'middle', true), ...[...Array(10)].map((_, i) => bx(cellX(i), 26, 28, 34, '250', C.gray, FILL.gray, 10)), ...band(150, tx(176, '1こ分（1割）＝2500÷10＝250円', 13, C.ink, true))],
  },
  {
    note: '❓「4割の利益を見こむ」とは？→原価の4割、つまり4こ分を上乗せして定価にすることです。全部で14こ分になります。',
    add: [...fresh(lb(160, 14, '定価 ＝ 原価 ＋ 4こ分', 13, C.ink, 'middle', true), ...[...Array(10)].map((_, i) => bx(20 + 20 * i, 26, 20, 34, '250', C.gray, FILL.gray, 8)), ...[...Array(4)].map((_, i) => bx(220 + 20 * i, 26, 20, 34, '250', C.red, FILL.red, 8)), lb(120, 76, '原価 10こ分', 11, C.gray, 'middle'), lb(260, 76, '利益 4こ分', 11, C.red, 'middle', true)), ...band(150, tx(176, '14こ分 ＝ 250×14＝3500円', 14, C.ink, true), tx(200, '（2500×1.4＝3500円でも同じ）', 11, C.gray))],
  },
  {
    note: '❓その定価の2割引きの「2割」は、何に対しての2割？→原価ではなく、定価3500円に対する2割です。そこで定価3500円を新しく10こに分けます。1こ分は350円です。',
    add: [...fresh(lb(160, 14, '定価 3500円 ＝ 10こ分', 13, C.ink, 'middle', true), ...[...Array(8)].map((_, i) => bx(cellX(i), 26, 28, 34, '350', C.blue, FILL.blue, 10)), ...[8, 9].map((i) => bx(cellX(i), 26, 28, 34, '引く', C.red, FILL.red, 9))), ...band(150, tx(172, '3500÷10＝350円（1こ分）', 13), tx(198, '2割引き＝2こ分（700円）を引く', 13, C.red, true))],
  },
  {
    note: '❓売る値段は？→定価の8こ分なので、350×8＝2800円です。（3500×0.8＝2800円でも同じです。）',
    add: [ln(20, 72, 244, 72, C.blue, false, 3), lb(132, 90, '売る値段 350×8＝2800円', 13, C.blue, 'middle', true), ...band(150, eb(170, '3500×0.8＝2800円', C.blue, FILL.blue, 16, 36))],
  },
  {
    note: '❓利益はいくら？→売る値段2800円と、原価2500円をくらべます。売る値段のほうが高いので利益が出ていて、2800−2500＝300円です。',
    add: [...fresh(lb(14, 26, '原価', 12, C.gray, 'start'), bx(60, 14, 200, 26, '2500円', C.gray, FILL.gray, 12), lb(14, 66, '売値', 12, C.gray, 'start'), bx(60, 54, 224, 26, '2800円', C.blue, FILL.blue, 12), bx(260, 54, 24, 26, undefined, C.green, FILL.green), lb(272, 98, '差＝利益300円', 11, C.green, 'middle', true)), ...band(150, eb(170, '2800−2500＝300円の利益', C.green, FILL.green, 15, 36))],
  },
  {
    note: '❓「4割の利益−2割引き＝2割の利益」ではないの？→ちがいます。4割は原価に対して（2500×0.4＝1000円ふえる）、2割は定価に対して（3500×0.2＝700円へる）で、もとにする量がちがうからです。1000−700＝300円です。',
    add: [...fresh(eb(14, '4割の利益 1000円ふえる（原価の4割）', C.red, FILL.red, 13, 34), eb(58, '2割引き 700円へる（定価の2割）', C.blue, FILL.blue, 13, 34), eb(102, '1000−700＝300円', C.green, FILL.green, 15, 34)), ...band(150, tx(186, '原価の2割の利益なら 500円だった', 12, C.red, true), tx(208, 'もとにする量がちがうので、引き算しない', 12, C.gray))],
  },
  {
    note: '検算です。まとめてかけると 2500×1.4×0.8＝2500×1.12＝2800円。2800−2500＝300円で、同じになりました。答えは利益300円です。',
    add: [...fresh(eb(14, '1.4×0.8＝1.12', C.blue, FILL.blue, 15, 34), eb(58, '2500×1.12＝2800円', C.blue, FILL.blue, 15, 34), eb(102, '2800−2500＝300円  ○', C.green, FILL.green, 15, 34)), ...band(150, tx(190, '答え 利益300円', 16, C.green, true))],
  },
], '原価・定価・売値');

// ═══ 6. 動滑車（かっしゃ） ═══
const pulley = (): E[] => [ln(120, 12, 200, 12, C.ink, false, 4), ln(144, 12, 144, 76, C.gray, false, 2), ln(176, 76, 176, 26, C.gray, false, 2), ci(160, 76, 18, '滑車', C.main, FILL.warm, 9), ln(160, 94, 160, 108, C.gray, false, 2), bx(130, 108, 60, 30, '900g', C.blue, FILL.blue, 13)];
const doukassha: Figure = show([
  {
    note: '重さ100gの動滑車（どうかっしゃ）1個で、重さ900gのおもりを2mの高さまで引き上げます。ひもを引く力と、ひもを引く長さを求めます。',
    add: [...pulley(), ar(176, 40, 176, 18, C.red), lb(252, 24, 'ひもを引く', 11, C.red, 'middle', true), ...band(150, tx(176, '滑車100g　おもり900g　2m上げる', 13, C.ink, true), tx(200, '引く力は？　引く長さは？', 13, C.blue, true))],
  },
  {
    note: '❓動滑車だと、なぜ力が半分ですむの？→おもりをつるした滑車を、2本のひもで支えているからです。1本のひもは、全体の重さを半分ずつ受けもちます。',
    add: [lb(134, 44, '1本', 11, C.blue, 'end', true), lb(186, 44, '1本', 11, C.blue, 'start', true), ...band(150, tx(176, '2本のひもで、重さを分け合う', 14, C.ink, true), tx(200, '1本が受けもつ力＝全体の半分', 13, C.blue, true))],
  },
  {
    note: '❓支える重さは、おもりの900gだけ？→ちがいます。滑車もいっしょに持ち上がるので、滑車の重さ100gもふくめます。900＋100＝1000gを支えます。',
    add: [bx(110, 54, 100, 92, undefined, C.red, NOFILL), ...band(150, eb(166, '900g＋100g＝1000g', C.red, FILL.red, 16, 36), tx(222, '赤いわくの中が、ひもで支える重さ', 11, C.gray))],
  },
  {
    note: '❓ひも1本にかかる力は？→1000gを2本で分けるので、1000÷2＝500g分です。これが、ひもを引く力になります。',
    add: [...band(150, eb(166, '1000÷2＝500g分', C.green, FILL.green, 16, 36), tx(222, 'ひもを引く力 500g分', 13, C.green, true)), lb(255, 64, '500g分', 12, C.green, 'middle', true)],
  },
  {
    note: '❓では、ひもを引く長さはなぜ2倍になるの？→おもりが2m上がると、滑車を支えている2本のひもが、どちらも2mずつ短くならないといけません。その2本ぶんを、引く手から出すことになるので、2＋2＝4mです。',
    add: [...fresh(bx(30, 20, 120, 28, '左のひも 2m', C.red, FILL.red, 13), lb(160, 34, '＋', 16, C.ink, 'middle', true), bx(170, 20, 120, 28, '右のひも 2m', C.red, FILL.red, 13), ar(160, 56, 160, 76, C.red), bx(70, 82, 180, 34, '引く長さ 2＋2＝4m', C.green, FILL.green, 15)), ...band(150, tx(180, '力は半分になるかわりに、', 13), tx(204, '引く長さは2倍になる', 14, C.blue, true))],
  },
  {
    note: '❓力が半分で長さが2倍…得をしているの？→力×動かす長さを計算すると、動滑車を使って 500×4＝2000、直接持ち上げて 1000×2＝2000で同じです。道具を使っても、力×動かす長さは変わりません（仕事の原理）。',
    add: [...fresh(eb(14, '動滑車 500×4＝2000', C.blue, FILL.blue, 15, 34), eb(58, '手で持つ 1000×2＝2000', C.gray, FILL.gray, 15, 34), tx(122, '力×動かす長さは同じ', 16, C.green, true)), ...band(150, tx(186, '楽になるかわりに、長く引く', 13, C.ink, true))],
  },
  {
    note: '❓よくあるまちがいは？→滑車の重さを忘れて 900÷2＝450gとすること。動滑車は自分も持ち上げられるので、重さを足してから半分にします。',
    add: [...fresh(eb(14, '900÷2＝450g  ✗（滑車を忘れた）', C.red, FILL.red, 14, 34), eb(58, '(900＋100)÷2＝500g  ○', C.green, FILL.green, 15, 34), tx(122, '答え 500g分、4m', 18, C.green, true))],
  },
], '動滑車のしくみ');

// ═══ 7. 電熱線の抵抗と発熱（電流1/2） ═══
const loop = (): E[] => [ln(55, 62, 55, 30, C.gray, false, 2), ln(55, 30, 120, 30, C.gray, false, 2), ln(200, 30, 265, 30, C.gray, false, 2), ln(265, 30, 265, 62, C.gray, false, 2), ln(265, 106, 265, 124, C.gray, false, 2), ln(265, 124, 55, 124, C.gray, false, 2), ln(55, 124, 55, 106, C.gray, false, 2), bx(120, 14, 80, 32, '電熱線', C.red, FILL.red, 13), bx(28, 62, 54, 44, '電池3個', C.blue, FILL.blue, 12), bx(238, 62, 54, 44, '電流計 1/2', C.green, FILL.green, 11)];
const denretsu: Figure = show([
  {
    note: '電池3個を直列につないだ回路に電熱線をつなぐと、電流計は1/2を示しました。電池1個・豆電球1個の電流を①、豆電球1個分の抵抗を1とします。電熱線の抵抗と発熱を求めます。',
    add: [...loop(), ...band(150, tx(180, '電流 1/2　→　抵抗は？　発熱は？', 13, C.ink, true))],
  },
  {
    note: '❓まず、電流と電池・抵抗の決まりは？→電流＝電池の数÷抵抗です。電池1個・抵抗1なら 1÷1＝①で、基準と合います。',
    add: [...fresh(eb(14, '電流 ＝ 電池の数 ÷ 抵抗', C.blue, FILL.blue, 16, 38), eb(66, '電池1個・抵抗1 → 1÷1＝①', C.gray, FILL.gray, 14, 34)), ...band(150, tx(186, 'これが基準（電流①）', 13, C.ink, true))],
  },
  {
    note: '❓なぜ「抵抗でわる」の？→抵抗は電流の流れにくさです。抵抗が大きいほど電流は小さくなるので、電池の数を抵抗でわります。',
    add: [...fresh(eb(14, '抵抗が大きい → 電流は小さい', C.red, FILL.red, 14, 34), eb(58, '抵抗が小さい → 電流は大きい', C.green, FILL.green, 14, 34)), ...band(150, tx(186, '電池の数 ÷ 抵抗', 16, C.blue, true))],
  },
  {
    note: '❓今回の抵抗は？→電池は3個、電流は1/2なので、3÷□＝1/2の□を求めます。わる数は「わられる数÷答え」で求まるので、□＝3÷1/2＝3×2＝6です。',
    add: [...fresh(eb(14, '3 ÷ □ ＝ 1/2', C.blue, FILL.blue, 18, 38), eb(66, '□ ＝ 3 ÷ 1/2 ＝ 3×2 ＝ 6', C.green, FILL.green, 15, 34)), ...band(150, tx(186, '抵抗は 6（豆電球6個分）', 15, C.green, true))],
  },
  {
    note: '❓「1/2÷3＝1/6」としてはだめ？→だめです。電流が①より小さい1/2なので、抵抗は電池の数3より大きいはずです。1/6だと1より小さく、おかしいと気づけます。',
    add: [...fresh(eb(14, '1/2÷3＝1/6  ✗', C.red, FILL.red, 16, 34), eb(58, '電流が小さい → 抵抗は大きい', C.blue, FILL.blue, 14, 34)), ...band(150, tx(180, '抵抗6は、電池の数3より大きい  ○', 13, C.green, true))],
  },
  {
    note: '❓次に発熱は？→発熱＝電流×電流×抵抗です。電流が2倍になると、流れる量も押し出す強さも2倍になり、それがかけ合わされて発熱は4倍になるため、電流を2回かけます。基準は ①×①×1＝1です。',
    add: [...fresh(eb(14, '発熱 ＝ 電流×電流×抵抗', C.red, FILL.red, 16, 38), eb(66, '基準 ①×①×1 ＝ 1', C.gray, FILL.gray, 15, 34)), ...band(150, tx(186, '電流を2回かけるのがポイント', 13, C.ink, true))],
  },
  {
    note: '❓では計算すると？→1/2×1/2×6＝6/4＝3/2＝1.5です。基準の1と比べて、1.5倍の発熱です。',
    add: [...fresh(eb(14, '1/2 × 1/2 × 6', C.blue, FILL.blue, 18, 38), eb(66, '＝ 6/4 ＝ 3/2 ＝ 1.5', C.green, FILL.green, 18, 38)), ...band(150, tx(186, '答え 抵抗6　発熱1.5', 16, C.green, true))],
  },
  {
    note: '検算です。抵抗6を電池3個につなぐと、3÷6＝1/2で、はじめの電流計の値と同じになりました。',
    add: [...fresh(eb(14, '3 ÷ 6 ＝ 1/2', C.blue, FILL.blue, 18, 38), eb(66, '電流計の 1/2 と一致  ○', C.green, FILL.green, 16, 34)), ...band(150, tx(186, '抵抗6は正しい', 15, C.green, true))],
  },
], '電熱線の回路');

// ═══ 8. 電車の通過とすれちがい ═══
const tunnelBase = (): E[] => [bx(100, 40, 120, 40, 'トンネル 480m', C.gray, FILL.gray, 11)];
const tr = (x: number, y: number, color: string = C.red, fill: string = FILL.red): E => bx(x, y, 30, 22, '120m', color, fill, 9);
const tsuuka: Figure = show([
  {
    note: '長さ120mの電車が時速72kmで走ります。❓まず、速さの単位を「時速」から「秒速（1秒に進む長さ）」に直します。',
    add: [...tunnelBase(), tr(60, 98), ar(92, 109, 120, 109, C.red), ...band(150, tx(176, '電車 120m　時速72km', 13, C.ink, true), tx(200, 'トンネル 480m', 13, C.gray))],
  },
  {
    note: '❓時速を秒速に直すには？→時速72kmは、1時間（3600秒）に72km＝72000m進む速さです。1秒あたりに直すので、72000÷3600＝20m。秒速20mです。',
    add: [...fresh(eb(14, '72km ＝ 72000m', C.blue, FILL.blue, 15, 34), eb(58, '1時間 ＝ 3600秒', C.blue, FILL.blue, 15, 34), eb(102, '72000÷3600 ＝ 秒速20m', C.green, FILL.green, 15, 34)), ...band(150, tx(186, '1時間の道のり ÷ 1時間の秒数', 12, C.gray))],
  },
  {
    note: '❓トンネルを「通過する」とは？→電車の先頭がトンネルに入った時から、最後尾がトンネルを出る時までです。最初の位置の電車を描きました。',
    add: [...fresh(...tunnelBase(), tr(70, 46, C.red, FILL.red), lb(160, 20, '先頭が入り口にきた時', 12, C.red, 'middle', true)), ...band(150, tx(180, 'ここからスタート', 13, C.ink, true))],
  },
  {
    note: '❓どこまで進めば通過が終わる？→最後尾が出口を出るまでです。そのとき電車は出口から電車1台ぶん先にいます。先頭が進んだ道のりは、トンネル480m＋電車120mです。',
    add: [cover(0, 8, 320, 24), tr(220, 46, C.gray, FILL.gray), lb(160, 20, '最後尾が出口を出た時', 12, C.blue, 'middle', true), ar(100, 100, 250, 100, C.red), lb(160, 116, '先頭が進む道のり', 11, C.red, 'middle', true), lb(160, 132, '480m ＋ 120m', 12, C.red, 'middle', true), ...band(150, tx(180, '480＋120＝600m', 15, C.ink, true))],
  },
  {
    note: '❓なぜ電車の長さ120mを足すの？→先頭が出口に着いても、電車の後ろはまだトンネルの中です。電車の長さぶんもう少し進まないと、最後尾が出られないからです。600÷20＝30秒です。',
    add: [...fresh(eb(14, '通過の道のり ＝ 600m', C.blue, FILL.blue, 15, 34), eb(58, '秒速 ＝ 20m', C.blue, FILL.blue, 15, 34), eb(102, '600÷20 ＝ 30秒', C.green, FILL.green, 16, 34)), ...band(150, tx(186, '時間 ＝ 道のり ÷ 速さ', 13, C.gray))],
  },
  {
    note: '次は反対向きの時速54kmの電車とのすれちがいです。❓まず秒速は？→54000÷3600＝15なので、秒速15mです。',
    add: [...fresh(tr(50, 40), ar(86, 51, 130, 51, C.red), lb(100, 34, '秒速20m', 11, C.red, 'middle', true), tr(240, 90, C.blue, FILL.blue), ar(236, 101, 192, 101, C.blue), lb(222, 122, '秒速15m', 11, C.blue, 'middle', true)), ...band(150, tx(180, '54km＝54000m　54000÷3600＝15', 13, C.ink, true))],
  },
  {
    note: '❓反対向きなら、なぜ速さを足す？→向かい合って進むと、2台は1秒間に「20m＋15m」ぶん近づくからです。2台のいっしょの速さは 20＋15＝35mです。',
    add: [...fresh(tr(60, 50), ar(96, 61, 130, 61, C.red), lb(113, 44, '20m', 11, C.red, 'middle', true), tr(230, 50, C.blue, FILL.blue), ar(226, 61, 192, 61, C.blue), lb(209, 44, '15m', 11, C.blue, 'middle', true)), ...band(150, tx(176, '1秒で近づく長さ ＝ 20＋15', 13, C.ink, true), tx(200, '＝ 35m（速さの和）', 14, C.blue, true))],
  },
  {
    note: '❓すれちがう道のりは？→先頭どうしが出会ってから、最後尾どうしがはなれるまで。2台の長さの合計、120＋120＝240mです。',
    add: [...fresh(bx(60, 34, 90, 26, '電車 120m', C.red, FILL.red, 12), bx(150, 34, 90, 26, '電車 120m', C.blue, FILL.blue, 12), lb(150, 76, '出会う', 11, C.gray, 'middle'), ln(60, 88, 240, 88, C.green, false, 3), lb(150, 106, '120＋120＝240m', 13, C.green, 'middle', true)), ...band(150, tx(180, 'すれちがいの道のり ＝ 240m', 14, C.ink, true))],
  },
  {
    note: '❓では時間は？→240÷35＝48/7≒6.9秒です。検算は 48/7×35＝240で、道のりと合いました。',
    add: [...fresh(eb(14, '240 ÷ 35 ＝ 48/7 ≒ 6.9秒', C.green, FILL.green, 15, 36), eb(62, '検算 48/7×35 ＝ 240m  ○', C.blue, FILL.blue, 14, 34)), ...band(150, tx(180, '答え 秒速20m・30秒・約6.9秒', 14, C.green, true), tx(206, '追いこすときは速さの差をつかう', 11, C.gray))],
  },
], '電車の通過算');

// ═══ 9. 長方形と対角線上の点P（面積と比） ═══
const RA = pt(60, 14), RB = pt(240, 14), RC = pt(240, 134), RD = pt(60, 134), RP = pt(180, 94), RF = pt(184.6, 97.1);
const rectBase = (): E[] => [pg([RA, RB, RC, RD], C.ink, FILL.gray), ln(RA[0], RA[1], RC[0], RC[1], C.ink, false, 2), ci(RP[0], RP[1], 3.5, undefined, C.red, C.red), lb(54, 10, 'A', 12, C.ink, 'end', true), lb(246, 10, 'B', 12, C.ink, 'start', true), lb(246, 144, 'C', 12, C.ink, 'start', true), lb(54, 144, 'D', 12, C.ink, 'end', true), lb(180, 108, 'P', 12, C.red, 'middle', true)];
const menseki: Figure = show([
  {
    note: '長方形ABCDは AB＝12cm、BC＝8cmです。対角線（たいかくせん）AC上に、AP:PC＝2:1となる点Pがあります。三角形APB、BPCの面積と、4つの三角形の面積の比を求めます。',
    add: [...rectBase(), lb(150, 28, '12cm', 11, C.gray, 'middle'), lb(262, 74, '8cm', 11, C.gray, 'start'), ...band(150, tx(186, 'AP：PC ＝ 2：1', 14, C.ink, true), tx(210, '長方形の面積 12×8＝96cm²', 12, C.gray))],
  },
  {
    note: '❓まず、対角線ACで長方形を分けると？→合同な2つの三角形（三角形ABCと三角形ACD）に分かれます。だから三角形ABCの面積は、長方形の半分で、96÷2＝48cm²です。',
    add: [pg([RA, RB, RC], C.blue, 'rgba(14,165,233,0.25)'), ...band(150, tx(176, '三角形ABC ＝ 12×8÷2 ＝ 48cm²', 13, C.blue, true), tx(200, '対角線は、長方形を半分に分ける', 12, C.gray))],
  },
  {
    note: '❓では、三角形ABCを点Pで分けた、APBとBPCの面積は？→どちらもBが頂点です。Bから対角線ACまでの高さ（点線）が、同じになります。底辺APとPCは、同じ直線AC上にあるからです。',
    add: [ln(RB[0], RB[1], RF[0], RF[1], C.red, true, 2), lb(278, 40, '高さは同じ', 11, C.red, 'middle', true), ...band(150, tx(176, '三角形APBと三角形BPC', 13), tx(200, 'Bから見た高さが同じ', 14, C.red, true))],
  },
  {
    note: '❓高さが同じだと、面積の比はどうなる？→面積は「底辺×高さ÷2」です。高さが同じなら、面積は底辺の長さに比例します。だから APB：BPC ＝ AP：PC ＝ 2：1です。',
    add: [...band(150, eb(164, '面積の比 ＝ 底辺の比', C.blue, FILL.blue, 15, 32), tx(214, 'APB：BPC ＝ AP：PC ＝ 2：1', 13, C.blue, true))],
  },
  {
    note: '❓では実際の面積は？→48cm²を2:1に分けます。合わせて3つ分なので、1つ分は 48÷3＝16cm²。三角形APBは 16×2＝32cm²、三角形BPCは 16×1＝16cm²です。',
    add: [ln(RB[0], RB[1], RP[0], RP[1], C.ink, false, 1.5), pg([RA, RP, RB], C.blue, 'rgba(14,165,233,0.3)'), pg([RB, RP, RC], C.green, 'rgba(22,163,74,0.3)'), lb(150, 52, '32', 14, C.blue, 'middle', true), lb(218, 92, '16', 14, C.green, 'middle', true), ...band(150, tx(176, '48÷3＝16　16×2＝32　16×1＝16', 13), tx(202, 'APB＝32cm²　BPC＝16cm²', 14, C.blue, true))],
  },
  {
    note: '❓のこりの三角形CPDとDPAは？→三角形ACDも面積48cm²で、Dから対角線ACまでの高さが同じです。だから同じ理由で CPD：DPA ＝ PC：AP ＝ 1：2。CPDは16cm²、DPAは32cm²です。',
    add: [ln(RD[0], RD[1], RP[0], RP[1], C.ink, false, 1.5), pg([RC, RP, RD], C.purple, 'rgba(147,51,234,0.3)'), pg([RD, RP, RA], C.red, 'rgba(225,29,72,0.25)'), lb(150, 118, '16', 14, C.purple, 'middle', true), lb(104, 82, '32', 14, C.red, 'middle', true), ...band(150, tx(176, '三角形ACDも同じ考え方', 13), tx(202, 'CPD＝16cm²　DPA＝32cm²', 14, C.purple, true))],
  },
  {
    note: '4つの面積は APB＝32、BPC＝16、CPD＝16、DPA＝32です。❓比は？→どれも16でわると 2：1：1：2です。検算は、32＋16＋16＋32＝96cm²で、長方形の面積12×8＝96cm²と一致します。',
    add: [...fresh(eb(10, 'APB：BPC：CPD：DPA', C.gray, FILL.gray, 13, 30), eb(48, '32：16：16：32 ＝ 2：1：1：2', C.blue, FILL.blue, 15, 34), eb(92, '合計 32＋16＋16＋32 ＝ 96cm²', C.green, FILL.green, 14, 34)), ...band(150, tx(186, '長方形 12×8＝96cm² と一致  ○', 13, C.green, true))],
  },
], '長方形と対角線');

// ═══ 10. てこのつりあい ═══
const PX = 4.8;
const lever = (fx: number, extra: E[] = []): E[] => [ln(40, 80, 280, 80, C.ink, false, 4), pg([pt(fx, 82), pt(fx - 12, 104), pt(fx + 12, 104)], C.ink, FILL.gray), ln(40, 80, 40, 90, C.gray), bx(20, 90, 40, 28, '60g', C.blue, FILL.blue, 12), ln(280, 80, 280, 90, C.gray), bx(262, 90, 36, 28, '90g', C.green, FILL.green, 11), ...extra];
const teko: Figure = show([
  {
    note: 'てこの支点から左30cmに60gのおもりA、右20cmにWgのおもりBをつるすと、つりあいました。❓まず、「つりあう」とは何が等しいことでしょう。',
    add: [ln(40, 80, 280, 80, C.ink, false, 4), pg([pt(184, 82), pt(172, 104), pt(196, 104)], C.ink, FILL.gray), ln(40, 80, 40, 90, C.gray), bx(20, 90, 40, 28, '60g', C.blue, FILL.blue, 12), ln(280, 80, 280, 90, C.gray), bx(262, 90, 36, 28, 'W g', C.green, FILL.green, 11), ar(184, 62, 40, 62, C.blue), lb(112, 54, '30cm', 12, C.blue, 'middle', true), ar(184, 62, 280, 62, C.green), lb(232, 54, '20cm', 12, C.green, 'middle', true), ...band(150, tx(180, '左30cmに60g　右20cmにWg', 13, C.ink, true), tx(204, 'Wは何g？', 13, C.blue, true))],
  },
  {
    note: '❓何が等しいとつりあうの？→おもりが棒を回そうとする力です。この力は「おもりの重さ×支点からの距離」で表せます。重いほど、そして支点から遠いほど、大きく回そうとします。左と右の回す力が同じになるとつりあいます。',
    add: [...fresh(eb(14, '回す力 ＝ 重さ × 支点からの距離', C.blue, FILL.blue, 14, 38), eb(66, '左の回す力 ＝ 右の回す力 → つりあう', C.green, FILL.green, 13, 34)), ...band(150, tx(180, 'ドアのノブを遠くで押すと、軽く開く', 12, C.gray), tx(204, '距離が大きいと、回す力も大きい', 12, C.gray))],
  },
  {
    note: '❓左の回す力は？→60g×30cm＝1800です。右は W×20です。つりあっているので、この2つが等しくなります。',
    add: [...fresh(eb(14, '左 60×30 ＝ 1800', C.blue, FILL.blue, 16, 34), eb(58, '右 W×20', C.green, FILL.green, 16, 34), tx(122, '1800 ＝ W×20', 18, C.ink, true))],
  },
  {
    note: '❓Wは？→W×20＝1800なので、かけ算の逆算でわり算をして W＝1800÷20＝90gです。検算は、右の回す力 90×20＝1800で、左と同じです。',
    add: [...fresh(...lever(184), ar(184, 62, 40, 62, C.blue), lb(112, 54, '30cm', 12, C.blue, 'middle', true), ar(184, 62, 280, 62, C.green), lb(232, 54, '20cm', 12, C.green, 'middle', true)), ...band(150, tx(176, 'W ＝ 1800÷20 ＝ 90g', 15, C.green, true), tx(202, '右 90×20＝1800　左 60×30＝1800', 12, C.gray))],
  },
  {
    note: '❓支点を右に5cmずらすと？（おもりの位置はそのまま）→支点から左のおもりまでの距離は 30＋5＝35cm、右のおもりまでは 20−5＝15cmに変わります。距離を計算し直すのが大切です。',
    add: [...fresh(...lever(208), ar(208, 62, 40, 62, C.blue), lb(124, 54, '35cm', 12, C.blue, 'middle', true), ar(208, 62, 280, 62, C.green), lb(244, 54, '15cm', 12, C.green, 'middle', true)), ...band(150, tx(176, '左 30＋5＝35cm　右 20−5＝15cm', 13, C.ink, true), tx(202, 'おもりは動かさなくても、距離は変わる', 12, C.red, true))],
  },
  {
    note: '❓どちらに傾く？→回す力を計算し直します。左は60×35＝2100、右は90×15＝1350です。左のほうが大きいので、左に傾きます。',
    add: [...band(150, eb(160, '左 60×35 ＝ 2100', C.blue, FILL.blue, 14, 30), eb(194, '右 90×15 ＝ 1350　→　左に傾く', C.red, FILL.red, 14, 30))],
  },
  {
    note: '❓おもりCを追加すると？（支点から左5cmに90g）→Cも左側にあるので、左の回す力がふえます。左は 60×30＋90×5＝1800＋450＝2250、右は 90×20＝1800です。左が大きいので、左に傾きます。',
    add: [...fresh(...lever(184), bx(148, 90, 24, 28, '90g', C.purple, FILL.purple, 9), ln(160, 80, 160, 90, C.gray), ar(184, 62, 160, 62, C.purple), lb(172, 54, '5cm', 11, C.purple, 'middle', true)), ...band(150, tx(176, '左 1800＋450＝2250', 14, C.blue, true), tx(200, '右 1800　→　左に傾く', 14, C.red, true))],
  },
], 'てこのつりあい');

// ═══ 11. りんごとみかん（消去算） ═══
const fruit = (i: number, apple: boolean, text?: string): E => ci(34 + i * 36, 70, 14, text ?? (apple ? 'り' : 'み'), apple ? C.red : C.main, apple ? FILL.red : FILL.yellow, 12);
const ringo: Figure = show([
  {
    note: 'りんご3個とみかん5個で710円です。りんご1個は、みかん1個より90円高いです。りんご1個の値段を求めます。❓値段が2つとも分からないときは、どう考えればいいでしょう。',
    add: [...[0, 1, 2].map((i) => fruit(i, true)), ...[3, 4, 5, 6, 7].map((i) => fruit(i, false)), lb(88, 100, 'りんご3個', 12, C.red, 'middle', true), lb(214, 100, 'みかん5個', 12, C.main, 'middle', true), ...band(150, tx(176, '合計710円　りんご＝みかん＋90円', 13, C.ink, true), tx(200, 'りんご1個は？', 13, C.blue, true))],
  },
  {
    note: '❓2種類の値段を、どうやって1種類にする？→片方にそろえます。りんご1個は「みかん1個＋90円」と同じなので、りんごをみかんと90円に分けて考えられます。',
    add: [...fresh(fruit(0, true), lb(70, 74, '＝', 16, C.ink, 'middle', true), ci(104, 70, 14, 'み', C.main, FILL.yellow, 12), lb(130, 74, '＋', 16, C.ink, 'middle', true), bx(146, 54, 60, 32, '90円', C.red, FILL.red, 13)), ...band(150, tx(176, 'りんご1個 ＝ みかん1個 ＋ 90円', 14, C.ink, true), tx(200, 'りんごを、みかんに置きかえる', 13, C.blue, true))],
  },
  {
    note: '❓りんご3個を置きかえると？→りんご3個は、みかん3個と90円×3の270円に分かれます。すると、みかんは3＋5＝8個、それに270円が加わった合計が710円です。',
    add: [...fresh(...[0, 1, 2, 3, 4, 5, 6, 7].map((i) => fruit(i, false)), lb(174, 98, 'みかん8個', 12, C.main, 'middle', true), bx(110, 112, 130, 28, '＋ 90×3＝270円', C.red, FILL.red, 12)), ...band(150, tx(176, 'みかん8個 ＋ 270円 ＝ 710円', 14, C.ink, true))],
  },
  {
    note: '❓みかん8個分は何円？→710円から270円を引けば、みかん8個だけの値段です。710−270＝440円です。',
    add: [...band(150, eb(164, '710−270＝440円（みかん8個分）', C.blue, FILL.blue, 14, 34), tx(222, '270円は、りんごの高い分', 12, C.gray))],
  },
  {
    note: '❓みかん1個は？→8個で440円なので、440÷8＝55円です。❓りんごは？→みかんより90円高いので、55＋90＝145円です。',
    add: [...fresh(eb(14, 'みかん 440÷8＝55円', C.main, FILL.yellow, 15, 34), eb(58, 'りんご 55＋90＝145円', C.red, FILL.red, 15, 34), tx(122, 'りんご1個 145円', 18, C.green, true))],
  },
  {
    note: '❓710÷8＝約89円では、なぜだめ？→りんごとみかんは値段がちがうのに、同じ値段の8個として平均にしてしまうからです。ちがう値段のものは、差の90円を使って、先にそろえます。',
    add: [...fresh(eb(14, '710÷8 ＝ 約89円  ✗', C.red, FILL.red, 16, 34), eb(58, '値段がちがうものは、まず そろえる', C.blue, FILL.blue, 14, 34)), ...band(150, tx(180, '差の90円を使って、みかんにそろえる', 13, C.ink, true))],
  },
  {
    note: '検算です。りんご 145×3＝435円、みかん 55×5＝275円。435＋275＝710円で、問題の合計と一致しました。りんごは、みかんより 145−55＝90円高いことも合っています。',
    add: [...fresh(eb(14, '145×3 ＝ 435円', C.red, FILL.red, 15, 34), eb(58, '55×5 ＝ 275円', C.main, FILL.yellow, 15, 34), eb(102, '435＋275 ＝ 710円  ○', C.green, FILL.green, 15, 34)), ...band(150, tx(186, '145−55＝90円  ○', 14, C.green, true))],
  },
], 'りんごとみかん');

// ═══ 12. 角度と正多角形 ═══
const regPoly = (n: number, cx: number, cy: number, r: number, rot = 90): [number, number][] =>
  Array.from({ length: n }, (_, i) => { const a = ((rot + (360 / n) * i) * Math.PI) / 180; return pt(cx + r * Math.cos(a), cy - r * Math.sin(a)); });
const HX = regPoly(6, 160, 76, 62, 90);
const PS = regPoly(5, 160, 78, 66, 90);
const PI_ = regPoly(5, 160, 78, 66 * 0.382, 90 - 36);
const DC = regPoly(10, 160, 76, 66, 90);
const kakudo: Figure = show([
  {
    note: '正六角形の1つの内角、星形五角形の先たんの角の和、正十角形の内角の和を求めます。❓まず、多角形の内角の和は、どう考えたらよいでしょう。',
    add: [pg(HX, C.main, FILL.warm), ...band(150, tx(176, '正六角形の1つの内角は？', 13, C.ink, true), tx(200, '正十角形の内角の和は？', 13, C.ink, true))],
  },
  {
    note: '❓多角形の内角の和は、どう求める？→1つの頂点から対角線を引いて、三角形に分けます。三角形の内角の和は180°なので、三角形がいくつできるかを数えればよいのです。',
    add: [...[2, 3, 4].map((k) => ln(HX[0][0], HX[0][1], HX[k][0], HX[k][1], C.red, false, 2)), ...band(150, tx(176, '三角形に分けて、180°ずつ数える', 13, C.ink, true), tx(200, '六角形は三角形4つに分かれた', 13, C.red, true))],
  },
  {
    note: '❓なぜ三角形は4つ（＝6−2）？→ふつうの頂点から対角線を引けないのは、その頂点自身と、両どなりの2つ、合わせて3つです。対角線は6−3＝3本。3本の線で、ちょうど4つに分かれます。□角形なら（□−2）個です。',
    add: [...band(150, eb(162, '対角線 6−3＝3本 → 三角形4つ', C.blue, FILL.blue, 14, 32), tx(214, '□角形 → 三角形は（□−2）個', 13, C.blue, true))],
  },
  {
    note: '❓内角の和と、1つの内角は？→六角形の内角の和は 180×4＝720°。正六角形は内角がすべて等しいので、720÷6＝120°が1つぶんです。',
    add: [...fresh(pg(HX, C.main, FILL.warm), lb(160, 82, '120°', 16, C.green, 'middle', true)), ...band(150, tx(172, '内角の和 180×(6−2)＝720°', 13), eb(186, '720÷6 ＝ 120°', C.green, FILL.green, 16, 34))],
  },
  {
    note: '❓別の方法で確かめると？→外角（となりの辺をのばしてできる角）の和は、多角形ならいつも360°です。正六角形の外角は 360÷6＝60°。内角と外角をたすと180°なので、内角は 180−60＝120°で、同じになりました。',
    add: [...fresh(eb(14, '外角の和 ＝ 360°', C.blue, FILL.blue, 15, 34), eb(58, '外角 360÷6 ＝ 60°', C.blue, FILL.blue, 15, 34), eb(102, '内角 180−60 ＝ 120°  ○', C.green, FILL.green, 15, 34)), ...band(150, tx(186, '問1の答え 120°', 15, C.green, true))],
  },
  {
    note: '❓正十角形の内角の和は？→同じ考え方で、三角形は 10−2＝8個。180×8＝1440°です。',
    add: [...fresh(pg(DC, C.main, FILL.warm), ...[2, 3, 4, 5, 6, 7, 8].map((k) => ln(DC[0][0], DC[0][1], DC[k][0], DC[k][1], C.red, false, 1.5))), ...band(150, tx(172, '対角線 10−3＝7本 → 三角形8個', 13), eb(186, '180×8 ＝ 1440°', C.green, FILL.green, 16, 34))],
  },
  {
    note: '❓星形五角形の先たんの角（5つ）の和は？→まず正五角形から作った形で考えます。内角は108°、先たんの三角形の底の角は 180−108＝72°が2つ。先たんの角は 180−72×2＝36°。5つで 36×5＝180°です。',
    add: [...fresh(...[0, 1, 2, 3, 4].map((i) => ln(PS[i][0], PS[i][1], PS[(i + 2) % 5][0], PS[(i + 2) % 5][1], C.main, false, 2)), lb(182, 26, '36°', 12, C.red, 'start', true)), ...band(150, tx(174, '底の角 180−108＝72°（2つ）', 13), tx(198, '先たん 180−72×2＝36°', 13), tx(220, '36×5 ＝ 180°', 14, C.green, true))],
  },
  {
    note: '❓正五角形でなくても180°になるのはなぜ？→先たんの三角形5つの角の和は 180×5＝900°。そのうち底の角10個は、内側の五角形の外角をちょうど2周ぶん（360×2＝720°）です。だから先たんの和は 900−720＝180°です。',
    add: [...fresh(...[0, 1, 2, 3, 4].map((i) => ln(PS[i][0], PS[i][1], PS[(i + 2) % 5][0], PS[(i + 2) % 5][1], C.main, false, 2)), pg(PI_, C.red, 'rgba(225,29,72,0.2)')), ...band(150, tx(172, '三角形5つ 180×5＝900°', 13), tx(194, '底の角 360×2＝720°', 13, C.red, true), tx(216, '先たん 900−720＝180°', 14, C.green, true))],
  },
], '多角形の角');

// ═══ 13. 流水算 ═══
const river = (): E[] => [pg([pt(10, 40), pt(310, 40), pt(310, 90), pt(10, 90)], C.blue, FILL.blue), ln(10, 40, 310, 40, C.blue, false, 2), ln(10, 90, 310, 90, C.blue, false, 2)];
const boat = (x: number): E => bx(x, 52, 50, 26, '船', C.main, FILL.warm, 12);
const ryusui: Figure = show([
  {
    note: '川の流れの速さは時速2km、船の静水時（流れのない水）の速さは時速8kmです。❓まず、川の流れがあると、船の速さはどうなるのでしょう。',
    add: [...river(), boat(130), ar(30, 65, 70, 65, C.blue), lb(50, 54, '流れ 2km/時', 10, C.blue, 'middle', true), ...band(150, tx(176, '川の流れ 2km/時', 13, C.blue, true), tx(200, '船（静水時）8km/時', 13, C.main, true))],
  },
  {
    note: '❓下り（流れと同じ向き）は、なぜ速くなる？→川の流れが、船を後ろから押してくれるからです。船の8kmに川の2kmが加わるので、8＋2＝10km/時です。',
    add: [...fresh(...river(), boat(130), ar(150, 28, 250, 28, C.main), lb(200, 18, '船 8', 11, C.main, 'middle', true), ar(150, 106, 182, 106, C.blue), lb(166, 120, '川 2', 11, C.blue, 'middle', true)), ...band(150, tx(176, '下り ＝ 8＋2 ＝ 10km/時', 15, C.green, true), tx(200, '流れに背中をおされて速い', 12, C.gray))],
  },
  {
    note: '❓上り（流れと逆向き）は、なぜ遅くなる？→川の流れが、船を前から押し返すからです。船の8kmから川の2kmが引かれるので、8−2＝6km/時です。',
    add: [...fresh(...river(), boat(130), ar(180, 28, 80, 28, C.main), lb(130, 18, '船 8', 11, C.main, 'middle', true), ar(150, 106, 182, 106, C.blue), lb(166, 120, '川 2', 11, C.blue, 'middle', true)), ...band(150, tx(176, '上り ＝ 8−2 ＝ 6km/時', 15, C.red, true), tx(200, '流れに逆らうので遅い', 12, C.gray))],
  },
  {
    note: '❓往復の時間は、どう求める？→行きと帰りで速さがちがうので、ひとまとめにはできません。川沿い20kmを、下りと上りに分けて、それぞれの時間を求めます。下りは 20÷10＝2時間です。',
    add: [...fresh(bx(30, 34, 50, 28, 'A', C.ink, FILL.gray, 14), bx(240, 34, 50, 28, 'B', C.ink, FILL.gray, 14), ar(84, 48, 236, 48, C.green), lb(160, 30, '下り 10km/時', 12, C.green, 'middle', true), lb(160, 72, '20km', 12, C.gray, 'middle', true)), ...band(150, tx(176, '下り 20÷10 ＝ 2時間', 15, C.green, true))],
  },
  {
    note: '❓上りの時間は？→20÷6＝10/3時間（3時間20分）です。下りより時間がかかります。',
    add: [...fresh(bx(30, 34, 50, 28, 'A', C.ink, FILL.gray, 14), bx(240, 34, 50, 28, 'B', C.ink, FILL.gray, 14), ar(236, 48, 84, 48, C.red), lb(160, 30, '上り 6km/時', 12, C.red, 'middle', true), lb(160, 72, '20km', 12, C.gray, 'middle', true)), ...band(150, tx(176, '上り 20÷6 ＝ 10/3時間', 15, C.red, true), tx(200, '（3時間20分）', 12, C.gray))],
  },
  {
    note: '❓往復の合計は？→2＋10/3＝16/3時間（5と1/3時間、約5.33時間）です。',
    add: [...fresh(eb(14, '行き 2時間', C.green, FILL.green, 15, 34), eb(58, '帰り 10/3時間', C.red, FILL.red, 15, 34), eb(102, '2＋10/3 ＝ 16/3 ≒ 5.33時間', C.blue, FILL.blue, 14, 34)), ...band(150, tx(186, '答え 6km/時・10km/時・16/3時間', 13, C.green, true))],
  },
  {
    note: '❓「平均の速さ8km/時で、40km÷8＝5時間」ではだめ？→だめです。遅い上りのほうに時間が長くかかるので、平均は8より遅くなります。往復40kmを16/3時間で進んだので、実際の平均は 40÷16/3＝7.5km/時です。検算は、上り 6×10/3＝20km、下り 10×2＝20kmです。',
    add: [...fresh(eb(14, '40÷8＝5時間  ✗', C.red, FILL.red, 15, 34), eb(58, '実際の平均 40÷16/3＝7.5km/時', C.blue, FILL.blue, 13, 34), eb(102, '検算 6×10/3＝20　10×2＝20  ○', C.green, FILL.green, 13, 34)), ...band(150, tx(186, '上りと下りの時間は、別々に求める', 13, C.ink, true))],
  },
], '川を上る・下る');

// ═══ 14. 家から学校まで（歩きと自転車） ═══
const michi = (): E[] => [bx(20, 40, 50, 28, '家', C.ink, FILL.gray, 13), bx(250, 40, 50, 28, '学校', C.ink, FILL.gray, 13), ln(70, 54, 250, 54, C.gray, true)];
const jitensha: Figure = show([
  {
    note: '家から学校まで、歩くと20分、自転車だと8分かかります。歩く速さは分速60mです。自転車の速さを求めます。❓同じ道を通るとき、いちばん先に出しておくとよいものは何でしょう。',
    add: [...michi(), ar(74, 34, 246, 34, C.blue), lb(160, 26, '歩き 20分（分速60m）', 12, C.blue, 'middle', true), ar(246, 80, 74, 80, C.red), lb(160, 98, '自転車 8分（分速？m）', 12, C.red, 'middle', true), ...band(150, tx(180, '同じ道を通るので、道のりは同じ', 13, C.ink, true))],
  },
  {
    note: '❓道のりはどうやって出す？→歩きの速さと時間が分かっているので、「速さ×時間」で求めます。1分に60m進むのを20分続けるので、60×20＝1200mです。',
    add: [...fresh(bx(20, 30, 50, 28, '家', C.ink, FILL.gray, 13), bx(250, 30, 50, 28, '学校', C.ink, FILL.gray, 13), ln(70, 44, 250, 44, C.blue, false, 3), lb(160, 66, '60m が 20回', 12, C.blue, 'middle', true), lb(160, 88, '1200m', 14, C.green, 'middle', true)), ...band(150, tx(176, '1分で60m × 20分', 14, C.ink, true), tx(200, '道のり ＝ 60×20 ＝ 1200m', 14, C.green, true))],
  },
  {
    note: '❓なぜ「速さ×時間」が道のり？→速さは「1分あたりに進む長さ」です。1分で60m進むなら、2分で120m、3分で180m…と、分の数だけ同じ長さがふえていくからです。',
    add: [...fresh(...[...Array(20)].map((_, i) => bx(20 + i * 14, 40, 14, 26, undefined, C.blue, i % 2 ? FILL.blue : FILL.yellow)), lb(160, 30, '1分ごとに 60m ずつ', 12, C.blue, 'middle', true), lb(160, 84, '20分で 60m が 20こ分', 12, C.ink, 'middle', true)), ...band(150, tx(180, '60×20 ＝ 1200m', 15, C.green, true))],
  },
  {
    note: '❓自転車の速さは？→同じ道のり1200mを8分で進むので、1分あたりに進む長さは 1200÷8＝150mです。分速150mです。',
    add: [...fresh(...michi(), ar(246, 54, 74, 54, C.red), lb(160, 40, '1200m を 8分で', 12, C.red, 'middle', true)), ...band(150, tx(176, '速さ ＝ 道のり ÷ 時間', 13, C.gray), eb(190, '1200÷8 ＝ 分速150m', C.green, FILL.green, 16, 34))],
  },
  {
    note: '❓なぜ「道のり÷時間」で速さが出るの？→速さは「1分あたりに進む長さ」です。1200mを8分で進むなら、1200mを8つに等しく分けたうちの1つ分が、1分ぶんの道のりになります。1200÷8＝150mです。',
    add: [...fresh(...[...Array(8)].map((_, i) => bx(20 + i * 35, 34, 35, 34, '150m', C.red, i % 2 ? FILL.red : FILL.yellow, 9)), lb(160, 24, '1200m を 8つに等しく分ける', 12, C.ink, 'middle', true), lb(160, 92, '1つ分 ＝ 1分で進む長さ', 12, C.red, 'middle', true)), ...band(150, tx(180, '1200÷8 ＝ 150m', 15, C.green, true), tx(204, '分速150m', 13, C.blue, true))],
  },
  {
    note: '❓別の方法で確かめると？→時間の比は 20：8＝5：2。同じ道のりなら、速いほど時間が短くなるので、速さの比は逆の 2：5です。歩きの60mが2にあたるので、1つ分は30m、自転車は 30×5＝150mで一致します。',
    add: [...fresh(bx(20, 14, 280, 30, '時間の比  歩き20分：自転車8分 ＝ 5：2', C.blue, FILL.blue, 13), bx(20, 54, 280, 30, '速さの比  歩き：自転車 ＝ 2：5（逆）', C.red, FILL.red, 13), bx(20, 94, 280, 30, '60÷2×5 ＝ 150m  ○', C.green, FILL.green, 14)), ...band(150, tx(186, '同じ道のりなら、時間が短いほど速い', 13, C.ink, true))],
  },
  {
    note: '❓よくあるまちがいは？→「時間が長い歩きのほうが速い」と逆に考えてしまうことです。道のりにもどして考えれば、まちがえません。検算は 150×8＝1200mで、歩きの道のりと一致します。',
    add: [...fresh(eb(14, '時間が長い＝速い  ✗', C.red, FILL.red, 15, 34), eb(58, '時間が短い＝速い  ○', C.green, FILL.green, 15, 34), eb(102, '検算 150×8 ＝ 1200m  ○', C.blue, FILL.blue, 15, 34)), ...band(150, tx(186, '答え 分速150m', 16, C.green, true))],
  },
], '歩きと自転車');

// ═══ 15. 月の満ち欠け ═══
const half = (cx: number, cy: number, r: number, side: 'left' | 'right', color: string, fill: string): E => {
  const base = side === 'left' ? Math.PI / 2 : -Math.PI / 2;
  return pg(Array.from({ length: 13 }, (_, i) => pt(cx + r * Math.cos(base + (Math.PI * i) / 12), cy - r * Math.sin(base + (Math.PI * i) / 12))), color, fill);
};
const EC = { x: 175, y: 76 }, OR = 48;
const moonAt = (x: number, y: number): E[] => [ci(x, y, 9, undefined, C.gray, '#45403C'), half(x, y, 9, 'left', C.gray, '#FDE047')];
const spaceBase = (): E[] => [ci(EC.x, EC.y, OR, undefined, C.gray, NOFILL), ci(28, 76, 18, '太陽', C.red, FILL.yellow, 10), ar(50, 58, 96, 58, C.red), ar(50, 76, 96, 76, C.red), ar(50, 94, 96, 94, C.red), ci(EC.x, EC.y, 13, '地球', C.blue, FILL.blue, 9)];
const moonPos: [number, number, string][] = [[EC.x - OR, EC.y, '新月'], [EC.x, EC.y + OR, '上弦'], [EC.x + OR, EC.y, '満月'], [EC.x, EC.y - OR, '下弦']];
const seen = (x: number, kind: number): E[] => {
  const y = 186;
  const dark = ci(x, y, 14, undefined, C.gray, '#45403C');
  if (kind === 0) return [dark];
  if (kind === 1) return [dark, half(x, y, 14, 'right', C.gray, '#FDE047')];
  if (kind === 2) return [ci(x, y, 14, undefined, C.gray, '#FDE047')];
  return [dark, half(x, y, 14, 'left', C.gray, '#FDE047')];
};
const tsuki: Figure = show([
  {
    note: '月の満ち欠けが起こる理由を、太陽・地球・月の位置関係で考えます。図は地球の北から見下ろした様子で、太陽は左にあります。円は月が地球のまわりを回る道すじです。',
    add: [...spaceBase(), ...band(150, tx(180, '太陽・地球・月の位置関係', 14, C.ink, true), tx(204, '月は地球のまわりを回っている', 13, C.blue, true))],
  },
  {
    note: '❓月は自分で光っているの？→いいえ。月は自分では光らず、太陽の光を反射して光って見えます。だから、月のうち太陽に向いた側の半分だけが、いつも明るくなっています。',
    add: [...moonAt(moonPos[0][0], moonPos[0][1]), ...band(150, tx(180, '月は太陽の光を反射している', 14, C.ink, true), tx(204, '太陽に向いた側の半分が光る', 13, C.red, true))],
  },
  {
    note: '❓月が地球のまわりを回ると、どうなる？→月は新月・上弦・満月・下弦と位置をかえますが、光る側は、どの位置でも太陽のほうを向いたままです。',
    add: [...moonAt(moonPos[1][0], moonPos[1][1]), ...moonAt(moonPos[2][0], moonPos[2][1]), ...moonAt(moonPos[3][0], moonPos[3][1]), ...moonPos.map(([x, y, t]) => lb(x + (t === '満月' ? 22 : 0), y + (t === '上弦' || t === '新月' ? 21 : t === '下弦' ? -14 : 4), t, 10, C.ink, 'middle', true)), ...band(150, tx(180, '光る側は、いつも太陽のほう', 14, C.ink, true), tx(204, '位置が変わると、地球から見える側が変わる', 12, C.gray))],
  },
  {
    note: '❓地球からはどう見える？→新月は、光る側が太陽のほう（地球と反対側）を向いていて、地球からは暗い面しか見えません。満月は光る側が地球のほうを向くので、まるく見えます。',
    add: [...band(150, ...seen(45, 0), ...seen(125, 1), ...seen(205, 2), ...seen(285, 3), lb(45, 214, '新月', 11, C.ink, 'middle', true), lb(125, 214, '上弦', 11, C.ink, 'middle', true), lb(205, 214, '満月', 11, C.ink, 'middle', true), lb(285, 214, '下弦', 11, C.ink, 'middle', true))],
  },
  {
    note: '❓では、半分が光っているのに、なぜ欠けて見える？→地球から見える「光る部分の割合」が、月の位置によって変わるからです。上弦や下弦は、光る側を横から見るので半分に見えます。',
    add: [...band(150, eb(158, '光る半分を見る向きが変わる', C.blue, FILL.blue, 14, 30), tx(206, '新月 0　→　半月 1/2　→　満月 全部', 13, C.ink, true), tx(226, '地球から見える割合が変わる', 12, C.gray))],
  },
  {
    note: '❓月の満ち欠けが元にもどるのは何日？→月が地球を1周するのは約27.3日です。でも、その間に地球も太陽のまわりを進むので、太陽・地球・月が同じ並びにもどるには少し長くかかり、新月から次の新月まで約29.5日です。',
    add: [...fresh(eb(14, '月が地球を1周 ＝ 約27.3日', C.blue, FILL.blue, 15, 34), eb(58, '満ち欠けの周期 ＝ 約29.5日', C.red, FILL.red, 15, 34), tx(122, '地球も動くので、少し長い', 14, C.ink, true)), ...band(150, tx(186, 'ふたつの日数を同じにしない', 13, C.gray))],
  },
  {
    note: 'まとめます。月は太陽の光を反射して光ります。月が地球のまわりを回り、太陽・地球・月の位置関係が変わると、地球から見える光る部分の割合が変わります。これが満ち欠けです。',
    add: [...fresh(eb(14, '① 月は光を反射して光る', C.blue, FILL.blue, 14, 34), eb(58, '② 月が地球のまわりを回る', C.blue, FILL.blue, 14, 34), eb(102, '③ 見える光る割合が変わる', C.green, FILL.green, 14, 34)), ...band(150, tx(186, '満ち欠けのわけ', 15, C.green, true))],
  },
], '月の満ち欠け');

// ═══ 16. 直方体の体積と表面積 ═══
const boxFig = (layers = false): E[] => [
  pg([pt(60, 70), pt(180, 70), pt(180, 120), pt(60, 120)], C.ink, FILL.blue),
  pg([pt(60, 70), pt(100, 42), pt(220, 42), pt(180, 70)], C.ink, FILL.yellow),
  pg([pt(180, 70), pt(220, 42), pt(220, 92), pt(180, 120)], C.ink, FILL.green),
  ...(layers ? [1, 2, 3].map((k) => ln(60, 70 + k * 12.5, 180, 70 + k * 12.5, C.red, true)) : []),
  lb(120, 134, '横9cm', 11, C.gray, 'middle', true), lb(52, 96, '高さ4cm', 10, C.gray, 'end', true), lb(156, 34, '縦6cm', 11, C.gray, 'middle', true),
];
const NT = { x: 109 };
const netRect = (x: number, y: number, w: number, h: number, t: string, color: string, fill: string): E => bx(NT.x + x, y, w, h, t, color, fill, 10);
const netBase = (): E[] => [netRect(24, 15, 54, 24, '9×4', C.gray, FILL.gray), netRect(0, 39, 24, 36, '6×4', C.gray, FILL.gray), netRect(24, 39, 54, 36, '9×6', C.gray, FILL.gray), netRect(78, 39, 24, 36, '6×4', C.gray, FILL.gray), netRect(24, 75, 54, 24, '9×4', C.gray, FILL.gray), netRect(24, 99, 54, 36, '9×6', C.gray, FILL.gray)];
const chokuhou: Figure = show([
  {
    note: '縦6cm、横9cm、高さ4cmの直方体の体積と表面積を求めます。❓まず体積から。体積は、1辺1cmの立方体が何個入るかを表します。',
    add: [...boxFig(), ...band(150, tx(180, '縦6cm　横9cm　高さ4cm', 14, C.ink, true), tx(204, '体積と表面積は？', 13, C.blue, true))],
  },
  {
    note: '❓体積はなぜ「縦×横×高さ」？→底の面には、1辺1cmの立方体が 6×9＝54個ならびます。これが1段ぶんです。高さが4cmなので4段積み重なり、54×4個になります。',
    add: [...fresh(...boxFig(true)), ...band(150, tx(176, '1段 6×9 ＝ 54個', 14, C.ink, true), tx(200, '4段 → 54×4 個', 14, C.blue, true))],
  },
  {
    note: '❓体積は？→54×4＝216cm³です。立方体が216個入るということです。',
    add: [...band(150, eb(166, '6×9×4 ＝ 54×4 ＝ 216cm³', C.green, FILL.green, 16, 36))],
  },
  {
    note: '❓次に表面積は？→外側の面ぜんぶの面積の合計です。直方体の面は全部で6枚。展開図で見ると、ちがう大きさの面が3種類、それぞれ2枚ずつあります。',
    add: [...fresh(...netBase()), ...band(150, tx(180, '面は全部で6枚', 14, C.ink, true), tx(204, '向かい合う面は、同じ大きさ', 13, C.blue, true))],
  },
  {
    note: '❓3種類の面の面積は？→上と下は 6×9＝54cm²が2枚で108cm²。前と後ろは 9×4＝36cm²が2枚で72cm²。左と右は 6×4＝24cm²が2枚で48cm²です。',
    add: [netRect(24, 39, 54, 36, '54×2', C.blue, FILL.blue), netRect(24, 99, 54, 36, '54×2', C.blue, FILL.blue), netRect(24, 15, 54, 24, '36×2', C.green, FILL.green), netRect(24, 75, 54, 24, '36×2', C.green, FILL.green), netRect(0, 39, 24, 36, '24×2', C.purple, FILL.purple), netRect(78, 39, 24, 36, '24×2', C.purple, FILL.purple), ...band(150, tx(172, '上下 54×2＝108cm²', 12, C.blue, true), tx(192, '前後 36×2＝72cm²', 12, C.green, true), tx(212, '左右 24×2＝48cm²', 12, C.purple, true))],
  },
  {
    note: '❓表面積は？→3種類をたして、108＋72＋48＝228cm²です。検算は、3種類を1枚ずつ足すと 54＋36＋24＝114cm²で、その2倍が 114×2＝228cm²です。',
    add: [...fresh(eb(14, '108＋72＋48 ＝ 228cm²', C.green, FILL.green, 16, 34), eb(58, '1枚ずつ 54＋36＋24 ＝ 114', C.blue, FILL.blue, 14, 34), eb(102, '114×2 ＝ 228cm²  ○', C.green, FILL.green, 15, 34)), ...band(150, tx(186, '体積216cm³　表面積228cm²', 14, C.green, true))],
  },
  {
    note: '❓よくあるまちがいは？→3種類の面を1枚ずつしか数えず、114cm²としてしまうことです。面は全部で6枚あります。また、単位は体積がcm³、表面積がcm²で、ちがいます。',
    add: [...fresh(eb(14, '54＋36＋24 ＝ 114cm²  ✗', C.red, FILL.red, 15, 34), eb(58, '面は6枚 → 114×2 ＝ 228cm²  ○', C.green, FILL.green, 14, 34), tx(122, '体積は cm³　表面積は cm²', 14, C.blue, true))],
  },
], '直方体');

// ═══ 17. 円の面積と円周 ═══
const en: Figure = show([
  {
    note: '半径7cmの円について、面積、円周、直径を2倍にしたときの面積の変わり方を調べます。円周率は3.14です。❓まず円周から。',
    add: [ci(160, 66, 50, undefined, C.main, FILL.warm), ln(160, 66, 210, 66, C.red), lb(185, 58, '7cm', 12, C.red, 'middle', true), ...band(150, tx(180, '半径7cm（円周率3.14）', 14, C.ink, true), tx(204, '面積は？　円周は？', 13, C.blue, true))],
  },
  {
    note: '❓円周はなぜ「直径×3.14」？→円周は、直径のおよそ3倍と少しの長さだからです。その正確な倍率が、円周率3.14です。直径を3回と、あと少し（0.14回ぶん）で、円周になります。',
    add: [...fresh(bx(20, 20, 70, 26, '直径', C.red, FILL.red, 12), bx(20, 66, 70, 26, '直径', C.red, FILL.red, 12), bx(90, 66, 70, 26, '直径', C.red, FILL.red, 12), bx(160, 66, 70, 26, '直径', C.red, FILL.red, 12), bx(230, 66, 10, 26, undefined, C.red, FILL.red), lb(162, 112, '直径の3倍と、あと少し ＝ 3.14倍', 12, C.blue, 'middle', true), lb(250, 32, '← 1つぶん', 11, C.gray, 'start')), ...band(150, tx(180, '円周 ＝ 直径 × 3.14', 15, C.ink, true))],
  },
  {
    note: '❓円周は？→直径は 7×2＝14cm。円周は 14×3.14＝43.96cmです。',
    add: [...fresh(eb(14, '直径 7×2 ＝ 14cm', C.blue, FILL.blue, 15, 34), eb(58, '円周 14×3.14 ＝ 43.96cm', C.green, FILL.green, 15, 34)), ...band(150, tx(186, '問2の答え 43.96cm', 14, C.green, true))],
  },
  {
    note: '❓面積はなぜ「半径×半径×3.14」？→円をピザのように細かく切って、ならべかえます。すると、ほぼ長方形になります。たては半径、横は円周の半分です。',
    add: [...fresh(...[0, 1, 2, 3, 4, 5, 6, 7].map((i) => pg([pt(20 + i * 34, 106), pt(37 + i * 34, 40), pt(54 + i * 34, 106)], C.main, i % 2 ? FILL.warm : FILL.yellow)), lb(160, 26, '細かく切ってならべる', 12, C.ink, 'middle', true)), ...band(150, tx(176, 'ほぼ長方形になる', 13, C.ink, true), tx(200, 'たて＝半径　横＝円周の半分', 13, C.blue, true))],
  },
  {
    note: '❓長方形の面積は？→たて×横。円周の半分は 直径×3.14÷2＝半径×3.14です。だから面積は 半径×3.14×半径＝半径×半径×3.14。7×7×3.14＝49×3.14＝153.86cm²です。',
    add: [...fresh(bx(40, 30, 240, 60, undefined, C.blue, FILL.blue), lb(160, 60, '半径 × 半径 × 3.14', 14, C.blue, 'middle', true), lb(160, 20, '横 ＝ 半径×3.14', 12, C.red, 'middle', true), lb(288, 60, '半径', 11, C.red, 'start', true)), ...band(150, eb(166, '7×7×3.14 ＝ 153.86cm²', C.green, FILL.green, 16, 34), tx(222, '問1の答え', 12, C.gray))],
  },
  {
    note: '❓直径を2倍にすると、面積は何倍？→半径も7cmから14cmの2倍です。面積は 14×14×3.14＝196×3.14＝615.44cm²。615.44÷153.86＝4で、4倍です。',
    add: [...fresh(eb(14, '半径 7cm → 14cm', C.blue, FILL.blue, 15, 34), eb(58, '14×14×3.14 ＝ 615.44cm²', C.blue, FILL.blue, 15, 34), eb(102, '615.44÷153.86 ＝ 4倍', C.green, FILL.green, 15, 34)), ...band(150, tx(186, '面積は4倍', 16, C.green, true))],
  },
  {
    note: '❓なぜ2倍ではなく4倍？→面積は「半径×半径」なので、半径が2倍になると、半径を2回かけるぶん、2×2＝4倍になります。3.14は変わりません。正方形で見ると、1辺が2倍になると、同じ小さな正方形が4つ入ります。',
    add: [...fresh(bx(60, 40, 30, 30, '1', C.blue, FILL.blue, 14), ...[0, 1, 2, 3].map((k) => bx(150 + (k % 2) * 30, 10 + Math.floor(k / 2) * 30, 30, 30, '1', C.green, FILL.green, 14)), lb(75, 90, '半径', 11, C.gray, 'middle'), lb(180, 90, '半径が2倍', 11, C.gray, 'middle')), ...band(150, tx(176, '2×2 ＝ 4倍', 16, C.ink, true), tx(200, '半径を2回かけるから', 13, C.blue, true))],
  },
  {
    note: '❓よくあるまちがいは？→半径が2倍なら面積も2倍、と考えることです。長さは2倍でも、面積は「縦横の2つ分」なので4倍になります。ちなみに円周は長さなので2倍です。',
    add: [...fresh(eb(14, '面積も2倍  ✗', C.red, FILL.red, 16, 34), eb(58, '面積は 2×2＝4倍  ○', C.green, FILL.green, 16, 34), eb(102, '円周は長さなので 2倍', C.blue, FILL.blue, 15, 34)), ...band(150, tx(186, '答え 153.86cm²・43.96cm・4倍', 13, C.green, true))],
  },
], '円の面積と円周');

// ═══ 18. 電池3個・抵抗3と6の直列 ═══
const series = (): E[] => [ln(55, 62, 55, 30, C.gray, false, 2), ln(55, 30, 70, 30, C.gray, false, 2), ln(130, 30, 165, 30, C.gray, false, 2), ln(225, 30, 265, 30, C.gray, false, 2), ln(265, 30, 265, 124, C.gray, false, 2), ln(265, 124, 55, 124, C.gray, false, 2), ln(55, 124, 55, 106, C.gray, false, 2), bx(70, 14, 60, 32, '抵抗3', C.red, FILL.red, 12), bx(165, 14, 60, 32, '抵抗6', C.purple, FILL.purple, 12), bx(28, 62, 54, 44, '電池3個', C.blue, FILL.blue, 12)];
const chokuretsu: Figure = show([
  {
    note: '電池1個・豆電球1個の回路の電流を①、豆電球1個分の抵抗を1とします。電池3個を直列にして、抵抗3の電熱線と抵抗6の電熱線を直列につなぎます。全体の抵抗、電流、発熱の比を求めます。',
    add: [...series(), ...band(150, tx(180, '電池3個　抵抗3と抵抗6を直列', 13, C.ink, true))],
  },
  {
    note: '❓直列の全体の抵抗は、なぜ足し算？→直列は道が1本なので、電流は2つの電熱線を順番に通りぬけます。通るたびに流れにくさがたされていくので、3＋6＝9になります。',
    add: [...fresh(eb(14, '直列 ＝ 道が1本', C.blue, FILL.blue, 15, 34), eb(58, '電流は順番に両方を通る', C.blue, FILL.blue, 14, 34), eb(102, '抵抗 3＋6 ＝ 9', C.green, FILL.green, 16, 34)), ...band(150, tx(186, '流れにくさが足される', 13, C.ink, true))],
  },
  {
    note: '❓電流は？→電流＝電池の数÷抵抗です。電池は3個、全体の抵抗は9なので、3÷9＝1/3です。',
    add: [...fresh(eb(14, '電流 ＝ 電池の数 ÷ 抵抗', C.blue, FILL.blue, 15, 34), eb(58, '3 ÷ 9 ＝ 1/3', C.green, FILL.green, 17, 34)), ...band(150, tx(186, '問1 抵抗9　問2 電流1/3', 14, C.green, true))],
  },
  {
    note: '❓2つの電熱線を流れる電流は、同じ？ちがう？→同じです。直列は道が1本で、途中で分かれる所がないので、どこでも電流は1/3です。',
    add: [...fresh(...series()), ar(100, 66, 100, 50, C.green), lb(100, 76, '1/3', 12, C.green, 'middle', true), ar(195, 66, 195, 50, C.green), lb(195, 76, '1/3', 12, C.green, 'middle', true), ...band(150, tx(180, '直列では、電流はどこも同じ', 14, C.ink, true), tx(204, '分かれ道がないから', 12, C.gray))],
  },
  {
    note: '❓発熱の比は？→発熱＝電流×電流×抵抗です。電流が同じなので、発熱の比は抵抗の比そのままで、3：6＝1：2です。',
    add: [...fresh(eb(14, '抵抗3 1/3×1/3×3 ＝ 1/3', C.red, FILL.red, 14, 34), eb(58, '抵抗6 1/3×1/3×6 ＝ 2/3', C.purple, FILL.purple, 14, 34), eb(102, '発熱の比 1/3：2/3 ＝ 1：2', C.green, FILL.green, 14, 34)), ...band(150, tx(186, '電流が同じなら、抵抗の比＝発熱の比', 13, C.ink, true))],
  },
  {
    note: '検算です。2つの発熱を足すと 1/3＋2/3＝1。全体を1つの抵抗9として計算しても 1/3×1/3×9＝1で、同じになりました。',
    add: [...fresh(eb(14, '1/3＋2/3 ＝ 1', C.blue, FILL.blue, 16, 34), eb(58, '全体 1/3×1/3×9 ＝ 1  ○', C.green, FILL.green, 16, 34)), ...band(150, tx(186, '答え 9・1/3・1：2', 15, C.green, true))],
  },
  {
    note: '❓よくあるまちがいは？→直列の抵抗をかけ算して 3×6＝18とすることです。直列は、流れにくさが順に足されるので、足し算で9です。',
    add: [...fresh(eb(14, '3×6 ＝ 18  ✗', C.red, FILL.red, 16, 34), eb(58, '3＋6 ＝ 9  ○', C.green, FILL.green, 16, 34)), ...band(150, tx(186, '直列は足し算', 15, C.blue, true))],
  },
], '直列の回路');

export const figuresSchoolChugaku02: Record<string, Figure> = {
  kansai_hokuyo_sansu_02: money,
  kansai_hokuyo_sansu_03: wari(560, 70, 700, 140, 672, '537.6'),
  kinrankai_sansu_03: wari(2400, 300, 3000, 600, 2880, '2304'),
  kansai_hokuyo_sansu_04: hi,
  myojo_sansu_02: cylinder,
  myojo_sansu_06: profit,
  myojo_rika_02: doukassha,
  myojo_rika_03: denretsu,
  myojo_sansu_r01: tsuuka,
  myojo_sansu_r02: menseki,
  kansai_hokuyo_rika_max01: teko,
  tezukayama_sansu_04: ringo,
  tezukayama_sansu_r02: kakudo,
  tezukayama_sansu_r03: ryusui,
  kinrankai_sansu_02: jitensha,
  kinrankai_rika_05: tsuki,
  kinrankai_sansu_06: chokuhou,
  kinrankai_sansu_r03: en,
  kansai_hokuyo_rika_r01: chokuretsu,
};
