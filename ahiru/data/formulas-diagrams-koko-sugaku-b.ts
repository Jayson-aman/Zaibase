// 高校受験 数学（formulas-koko-sugaku-tsuika.ts）11番目〜20番目の項目の動く図解スライド。
// キーは項目の label（買い切りの識別キーと同じ）。「なぜそうなるの？」を根っこまでたどる形で、10枚以上で書く。
// 画面の上半分に図、下の帯に、そのスライドの式やひとこと、という配置にそろえてある。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, sc, show, band, fresh } from './diagram-kit';

const box = (y: number, text: string, color: string, fill: string, size = 14, h = 30): DiagramElement => bx(20, y, 280, h, text, color, fill, size);

/** 座標平面（原点 ox,oy、1目もりの長さ sx,sy）。 */
const grid = (ox: number, oy: number, sx: number, sy: number) => {
  const X = (x: number) => ox + x * sx;
  const Y = (y: number) => oy - y * sy;
  return {
    X,
    Y,
    axes: (xr: [number, number], yr: [number, number]): DiagramElement[] => [
      ar(X(xr[0]), oy, X(xr[1]), oy, C.gray),
      ar(ox, Y(yr[0]), ox, Y(yr[1]), C.gray),
      lb(X(xr[1]) - 4, oy + 11, 'x', 10, C.gray),
      lb(ox + 8, Y(yr[1]) + 4, 'y', 10, C.gray),
      lb(ox - 7, oy + 10, 'O', 10, C.gray),
    ],
    dot: (x: number, y: number, color: string = C.red): DiagramElement => ci(X(x), Y(y), 3.5, undefined, color, color),
    seg: (x1: number, y1: number, x2: number, y2: number, color: string = C.blue, dashed = false, w = 2): DiagramElement => ln(X(x1), Y(y1), X(x2), Y(y2), color, dashed, w),
    tx: (x: number, y: number, text: string, color: string = C.ink, size = 11): DiagramElement => lb(X(x), Y(y), text, size, color, 'middle', true),
  };
};

// ── 二次方程式の解から係数・もう1つの解を求める ──
const kaiKeisu: DiagramFigure = show([
  {
    note: '二次方程式 x²＋ax−12＝0 の解の1つが 3 です。a の値と、もう1つの解を求めます。a が分からないのに、どうやって解の話ができるのでしょう。',
    add: [bx(30, 24, 260, 44, 'x² ＋ a x − 12 ＝ 0', C.blue, FILL.blue, 20), lb(160, 96, '解の1つが 3', 15, C.red, 'middle', true), lb(160, 124, 'a と、もう1つの解は？', 13, C.gray)],
  },
  {
    note: '❓ 「解が 3」とはどういう意味？ x に 3 を入れると、式がちゃんと成り立つ（左辺が 0 になる）という意味です。解とは「式を成り立たせる数」のことです。',
    add: fresh(box(20, '解 ＝ 式を成り立たせる数', C.red, FILL.red, 15, 34), lb(160, 82, 'たとえば x−3＝0 の解は 3', 13, C.gray), bx(70, 100, 180, 34, 'x に 3 を入れる → 3−3＝0', C.blue, FILL.blue, 13), lb(160, 160, '0 になった ＝ 式が成り立った', 13, C.green, 'middle', true), lb(160, 186, 'だから 3 は解', 12, C.gray)),
  },
  {
    note: '❓ では、なぜ代入してよいの？ 3 が解だと問題に書いてあるので、x に 3 を入れれば、式は必ず 0 になります。これが使える「手がかり」です。',
    add: fresh(bx(30, 20, 260, 44, 'x² ＋ a x − 12 ＝ 0', C.blue, FILL.blue, 18), ar(160, 66, 160, 92, C.red), bx(50, 94, 220, 44, '3 は解なので x に入れる', C.red, FILL.red, 15), lb(160, 172, 'x をぜんぶ 3 に入れかえる', 13, C.gray), lb(160, 198, '成り立つはずなので ＝ 0 のまま', 12, C.gray)),
  },
  {
    note: '代入します。x² は 3×3＝9、a x は a×3＝3a、−12 はそのまま。だから 9＋3a−12＝0 になります。',
    add: fresh(bx(30, 20, 260, 34, 'x² ＋ a x − 12 ＝ 0', C.gray, FILL.gray, 15), bx(30, 68, 260, 40, '3² ＋ a×3 − 12 ＝ 0', C.red, FILL.red, 16), bx(30, 122, 260, 40, '9 ＋ 3a − 12 ＝ 0', C.blue, FILL.blue, 18), lb(160, 190, '3² ＝ 9、a×3 ＝ 3a', 13, C.gray)),
  },
  {
    note: '❓ なぜ a だけの式になるの？ x が数の 3 に変わったので、残っている文字は a だけだからです。a の一次方程式として解けます。9−12＝−3 なので 3a−3＝0、3a＝3、a＝1。',
    add: fresh(box(18, '9 ＋ 3a − 12 ＝ 0', C.blue, FILL.blue, 16, 32), box(64, '3a − 3 ＝ 0（9−12＝−3）', C.blue, FILL.blue, 15, 32), box(110, '3a ＝ 3', C.blue, FILL.blue, 16, 32), box(156, 'a ＝ 1', C.green, FILL.green, 20, 38), lb(160, 214, '文字が a だけなので、ふつうに解ける', 12, C.gray)),
  },
  {
    note: 'a＝1 が分かったので、もとの式にもどします。x²＋x−12＝0 です。これで、もう1つの解を探せる形になりました。',
    add: fresh(bx(30, 24, 260, 44, 'x² ＋ a x − 12 ＝ 0', C.gray, FILL.gray, 16), ar(160, 70, 160, 96, C.green), bx(30, 98, 260, 44, 'x² ＋ x − 12 ＝ 0', C.green, FILL.green, 20), lb(160, 174, 'a に 1 を入れた', 13, C.gray), lb(160, 200, 'これで係数がすべて数になった', 12, C.gray)),
  },
  {
    note: '❓ もう1つの解はどう探すの？ 因数分解します。かけて−12、足して 1 になる2数は 4 と−3。だから (x＋4)(x−3)＝0 です。',
    add: fresh(box(18, 'x² ＋ x − 12 ＝ 0', C.blue, FILL.blue, 16, 32), lb(160, 72, 'かけて −12、足して 1 → 4 と −3', 13, C.purple, 'middle', true), box(90, '(x ＋ 4)(x − 3) ＝ 0', C.purple, FILL.purple, 18, 38), lb(160, 152, '展開して確かめる：x²＋4x−3x−12 ＝ x²＋x−12', 11, C.gray)),
  },
  {
    note: '❓ なぜ、それぞれ＝0 にしてよいの？ かけて 0 になるのは、どちらかが 0 のときだけだからです。x−3＝0 なら x＝3、x＋4＝0 なら x＝−4。3 は最初の解で、もう1つが −4 です。',
    add: fresh(box(16, '(x ＋ 4) × (x − 3) ＝ 0', C.purple, FILL.purple, 17, 34), lb(160, 70, 'かけて 0 ＝ どちらかが 0', 14, C.red, 'middle', true), bx(30, 90, 120, 36, 'x＋4＝0 → x＝−4', C.blue, FILL.blue, 13), bx(170, 90, 120, 36, 'x−3＝0 → x＝3', C.green, FILL.green, 13), lb(160, 156, '3 は最初に教えてもらった解', 13, C.gray), box(180, 'もう1つの解 ＝ −4', C.red, FILL.red, 16, 36)),
  },
  {
    note: '❓ 本当に合っている？ 確かめましょう。x＝3：9＋3−12＝0。x＝−4：16−4−12＝0。どちらも 0 になるので、a＝1、解は 3 と −4 で正しいです。',
    add: fresh(bx(20, 20, 280, 34, 'x ＝ 3 → 9 ＋ 3 − 12 ＝ 0', C.green, FILL.green, 15), bx(20, 68, 280, 34, 'x ＝ −4 → 16 − 4 − 12 ＝ 0', C.green, FILL.green, 15), lb(160, 128, 'どちらも 0 になった', 15, C.green, 'middle', true), lb(160, 158, '(−4)² ＝ 16（マイナスどうしのかけ算は＋）', 12, C.gray), box(184, 'a ＝ 1、もう1つの解 ＝ −4', C.blue, FILL.blue, 15, 34)),
  },
  {
    note: '逆向きの問題もあります。x²＋ax＋b＝0 の解が 1 と 3 のとき、a と b は？ ❓ なぜ (x−1)(x−3)＝0 と書けるの？ x＝1 のとき (x−1) が 0、x＝3 のとき (x−3) が 0 になり、かけ算が 0 になるからです。',
    add: fresh(box(16, '解が 1 と 3', C.red, FILL.red, 16, 32), box(62, '(x − 1)(x − 3) ＝ 0', C.purple, FILL.purple, 18, 36), lb(160, 118, 'x＝1 で (x−1)＝0、x＝3 で (x−3)＝0', 12, C.gray), lb(160, 138, 'どちらの解でも かけ算が 0', 12, C.gray), box(160, '展開 → x² − 4x ＋ 3 ＝ 0', C.blue, FILL.blue, 16, 36), lb(160, 214, 'a＝−4、b＝3', 14, C.green, 'middle', true)),
  },
  {
    note: 'まとめ。①解を式に代入して係数の方程式を作る ②係数を求めてもとの式にもどす ③因数分解して、もう1つの解を出す ④両方の解を代入して確かめる。逆に、解から式を作るときは (x−解)(x−解)＝0 です。',
    add: fresh(box(12, '① 解を代入する', C.red, FILL.red, 14, 30), box(50, '② 係数を求める（a＝1）', C.blue, FILL.blue, 14, 30), box(88, '③ 因数分解でもう1つの解', C.purple, FILL.purple, 14, 30), box(126, '④ 両方の解で確かめる', C.green, FILL.green, 14, 30), lb(160, 184, '逆向き：(x−解)(x−解)＝0 を展開する', 13, C.gray, 'middle', true), lb(160, 210, '代入する数は「解」（x に入れる数）', 12, C.gray)),
  },
]);

// ── 連続する整数・ある数と二次方程式 ──
const nl = (n: string, m: string, k: string) => [
  ar(20, 70, 300, 70, C.gray),
  ci(70, 70, 12, n, C.blue, FILL.blue, 10),
  ci(160, 70, 12, m, C.green, FILL.green, 10),
  ci(250, 70, 12, k, C.purple, FILL.purple, 10),
];
const renzoku: DiagramFigure = show([
  {
    note: '連続する2つの正の整数があり、2乗の和が 113 です。この2つの数を求めます。まず「連続する」を文字で表しましょう。',
    add: [box(18, '連続する2つの正の整数', C.blue, FILL.blue, 16, 34), box(64, '2乗の和が 113', C.red, FILL.red, 16, 34), lb(160, 130, '2つの数は？', 15, C.gray, 'middle', true)],
  },
  {
    note: '❓ 「連続」を、なぜ n と n＋1 で表せるの？ 連続する整数は 1 ずつ増えるからです。小さいほうを n とすれば、次の数は n に 1 を足した n＋1 です。',
    add: fresh(...nl('n', 'n+1', ''), ar(84, 52, 146, 52, C.red), lb(115, 42, '＋1', 12, C.red, 'middle', true), lb(160, 110, '1 ずつ増えるのが「連続」', 14, C.gray, 'middle', true), lb(160, 140, '例：7 と 8、−3 と −2', 13, C.gray), box(170, '小さいほうを n とおく', C.blue, FILL.blue, 15, 34)),
  },
  {
    note: '条件を式にします。2乗の和が 113 なので n²＋(n＋1)²＝113。❓ なぜ2乗どうしを足すの？ 問題文の「それぞれを2乗した数の和」を、そのまま数式に直しただけです。',
    add: fresh(bx(20, 20, 130, 34, 'n の2乗 ＝ n²', C.blue, FILL.blue, 14), lb(160, 37, '＋', 18), bx(170, 20, 130, 34, '(n＋1)²', C.green, FILL.green, 14), lb(160, 78, '和が 113', 14, C.gray), box(96, 'n² ＋ (n＋1)² ＝ 113', C.red, FILL.red, 18, 40), lb(160, 172, '文章をそのまま式にする', 13, C.gray), lb(160, 198, '( )² は、かっこの中をぜんぶ2乗', 12, C.gray)),
  },
  {
    note: '❓ (n＋1)² はどう広げるの？ (n＋1)(n＋1)＝n²＋n＋n＋1＝n²＋2n＋1 です。だから式は n²＋n²＋2n＋1＝113、まとめて 2n²＋2n＋1＝113。',
    add: fresh(box(14, '(n＋1)² ＝ (n＋1)(n＋1)', C.purple, FILL.purple, 15, 32), box(58, '＝ n² ＋ n ＋ n ＋ 1', C.purple, FILL.purple, 15, 32), box(102, '＝ n² ＋ 2n ＋ 1', C.purple, FILL.purple, 15, 32), lb(160, 158, 'n²＋(n²＋2n＋1) ＝ 113', 14, C.gray), box(176, '2n² ＋ 2n ＋ 1 ＝ 113', C.blue, FILL.blue, 16, 34)),
  },
  {
    note: '❓ なぜ右辺を 0 にするの？ 因数分解して「かけて 0」の性質を使うためです。113 を移項して 2n²＋2n−112＝0。全部が 2 の倍数なので、2 でわると n²＋n−56＝0 になります。',
    add: fresh(box(14, '2n² ＋ 2n ＋ 1 ＝ 113', C.gray, FILL.gray, 15, 32), box(58, '2n² ＋ 2n − 112 ＝ 0（113 を移項）', C.blue, FILL.blue, 14, 32), box(102, '全部 2 の倍数 → ÷2', C.red, FILL.red, 14, 32), box(146, 'n² ＋ n − 56 ＝ 0', C.green, FILL.green, 18, 38), lb(160, 208, '右辺を 0 にすると 因数分解が使える', 12, C.gray)),
  },
  {
    note: '因数分解します。かけて −56、足して 1 になる2数を探すと、8 と −7。だから (n＋8)(n−7)＝0 です。展開すると n²−7n＋8n−56＝n²＋n−56 で合っています。',
    add: fresh(box(14, 'n² ＋ n − 56 ＝ 0', C.blue, FILL.blue, 16, 32), lb(160, 66, 'かけて −56、足して 1', 14, C.purple, 'middle', true), lb(160, 90, '8 × (−7) ＝ −56、8 ＋ (−7) ＝ 1', 13, C.gray), box(108, '(n ＋ 8)(n − 7) ＝ 0', C.purple, FILL.purple, 18, 38), lb(160, 172, '確かめ：n²−7n＋8n−56 ＝ n²＋n−56', 12, C.gray)),
  },
  {
    note: '❓ どうして解が2つ出るの？ かけて 0 なので、n＋8＝0 か n−7＝0 のどちらか。だから n＝−8 と n＝7 の2つ出ます。ここではまだ、どちらも「候補」です。',
    add: fresh(box(14, '(n ＋ 8)(n − 7) ＝ 0', C.purple, FILL.purple, 16, 32), bx(30, 66, 120, 36, 'n＋8＝0 → n＝−8', C.red, FILL.red, 13), bx(170, 66, 120, 36, 'n−7＝0 → n＝7', C.green, FILL.green, 13), lb(160, 138, '解は 2 つ。どちらも「候補」', 14, C.gray, 'middle', true), lb(160, 166, '式は成り立つが、問題に合うかは別', 13, C.gray), lb(160, 196, '解いただけでは まだ終わりではない', 13, C.red)),
  },
  {
    note: '❓ では、どちらが答え？ 問題文には「正の整数」とあります。n＝−8 は負の数なので、問題に合いません。捨てて、n＝7 が答えです。大きいほうは 7＋1＝8。',
    add: fresh(...nl('−8', '7', '8'), lb(70, 96, '負の数', 12, C.red, 'middle', true), lb(70, 112, 'だめ', 12, C.red), lb(205, 96, '正の整数', 12, C.green, 'middle', true), lb(205, 112, 'OK', 12, C.green), ln(58, 58, 82, 82, C.red, false, 3), ln(82, 58, 58, 82, C.red, false, 3), ...band(140, box(154, '答え：7 と 8', C.green, FILL.green, 18, 38), lb(160, 214, '条件に合わない解は捨てる', 13, C.gray))),
  },
  {
    note: '❓ 本当に合っている？ 確かめます。7²＝49、8²＝64。49＋64＝113 で、問題文の条件どおりです。答えを出したら、必ずもとの問題にもどして確かめます。',
    add: fresh(bx(20, 20, 130, 34, '7² ＝ 49', C.blue, FILL.blue, 15), bx(170, 20, 130, 34, '8² ＝ 64', C.green, FILL.green, 15), lb(160, 37, '＋', 18), box(74, '49 ＋ 64 ＝ 113', C.green, FILL.green, 18, 38), lb(160, 138, 'ぴったり 113 になった', 14, C.green, 'middle', true), lb(160, 170, '検算は、ミスに気づく最後の砦', 13, C.gray)),
  },
  {
    note: '連続する偶数は少しちがいます。❓ なぜ n＋1 ではないの？ n が偶数のとき n＋1 は奇数だからです。次の偶数は 2 つ先の n＋2 です。積が 48 なら n(n＋2)＝48、(n＋8)(n−6)＝0 で、正の数なので n＝6、2数は 6 と 8。',
    add: fresh(ar(20, 60, 300, 60, C.gray), ci(70, 60, 9, 'n', C.blue, FILL.blue, 11), ci(160, 60, 9, 'n+1', C.gray, FILL.gray, 10), ci(250, 60, 9, 'n+2', C.green, FILL.green, 10), lb(160, 88, 'n+1 は奇数。とばして n+2', 13, C.red, 'middle', true), box(108, 'n(n＋2) ＝ 48 → n²＋2n−48 ＝ 0', C.purple, FILL.purple, 13, 32), box(150, '(n＋8)(n−6) ＝ 0 → n ＝ 6', C.blue, FILL.blue, 14, 32), box(192, '答え：6 と 8（6×8＝48）', C.green, FILL.green, 15, 32)),
  },
  {
    note: 'もう1つ。「ある数を2乗すると、もとの数の2倍より 15 大きい」。x²＝2x＋15 から x²−2x−15＝0、(x−5)(x＋3)＝0。❓ 今回は−3 も答え？ 「正の数」などの条件が無いので、5 も −3 も答えです。条件があるかどうかを必ず読みます。',
    add: fresh(box(14, 'x² ＝ 2x ＋ 15', C.gray, FILL.gray, 16, 32), box(58, 'x² − 2x − 15 ＝ 0', C.blue, FILL.blue, 16, 32), box(102, '(x − 5)(x ＋ 3) ＝ 0', C.purple, FILL.purple, 16, 32), bx(30, 148, 120, 34, 'x ＝ 5', C.green, FILL.green, 16), bx(170, 148, 120, 34, 'x ＝ −3', C.green, FILL.green, 16), lb(160, 208, '条件が無いので どちらも答え', 13, C.gray, 'middle', true)),
  },
]);

// ── x＝a と y＝b のグラフ ──
const gA = grid(100, 75, 20, 20);
const gAxes = () => gA.axes([-4, 10], [-3, 3.6]);
const gaBase = () => [...gAxes(), gA.tx(1, -0.6, '1', C.gray, 9), gA.tx(2, -0.6, '2', C.gray, 9), gA.tx(3, -0.6, '3', C.gray, 9)];
const xyGraph: DiagramFigure = show([
  {
    note: 'グラフには x＝2 や y＝1 のような、文字が1つだけの式もあります。x＝2 のグラフはどんな形でしょう。まず座標平面を用意します。',
    add: [...gaBase(), ...band(140, box(160, 'x ＝ 2 のグラフは？', C.blue, FILL.blue, 16, 36), lb(160, 214, '横は x、たては y', 12, C.gray))],
  },
  {
    note: '❓ x＝2 とは、どういう意味？ 「y がいくつでも、x は必ず 2」という意味です。だから (2, 0)、(2, 1)、(2, 3)、(2, −2) のように、y は自由でも x はいつも 2 です。',
    add: [gA.dot(2, 0), gA.dot(2, 1), gA.dot(2, 3), gA.dot(2, -2), gA.tx(3.6, 3, '(2, 3)', C.red, 10), gA.tx(3.6, 1, '(2, 1)', C.red, 10), gA.tx(3.6, -2, '(2, −2)', C.red, 10), ...band(140, box(154, 'x ＝ 2：y は自由、x は必ず 2', C.red, FILL.red, 14, 32), lb(160, 210, 'x座標がいつも 2 の点が条件に合う', 12, C.gray))],
  },
  {
    note: '❓ その点を全部つなぐと？ x座標がいつも 2 の点が、たてに並びます。だから y軸に平行な（同じ向きの）直線になります。y軸そのものが x＝0 の直線だからです。',
    add: [gA.seg(2, -3, 2, 3.4, C.blue, false, 2.5), ...band(140, box(154, 'x ＝ 2 は y軸に平行な直線', C.blue, FILL.blue, 15, 32), lb(160, 210, 'y軸は x＝0 の直線。それと同じたて向き', 12, C.gray))],
  },
  {
    note: '同じように y＝1 は、「x がいくつでも、y は必ず 1」。❓ どんな線？ y座標がいつも 1 の点が横に並ぶので、x軸に平行な直線です。x軸そのものが y＝0 の直線です。',
    add: [gA.seg(-3.8, 1, 9.8, 1, C.green, false, 2.5), gA.tx(8.4, 1.6, 'y ＝ 1', C.green, 12), gA.tx(-1.6, 3.1, 'x ＝ 2', C.blue, 12), ...band(140, box(154, 'y ＝ 1 は x軸に平行な直線', C.green, FILL.green, 15, 32), lb(160, 210, 'x軸は y＝0 の直線。それと同じ横向き', 12, C.gray))],
  },
  {
    note: '❓ x＝2 は「関数」といえる？ 関数は、x が決まると y が1つに決まるものです。x＝2 では y が無数にあるので、関数ではありません。だから傾きも決まりません。',
    add: fresh(...gaBase(), gA.seg(2, -3, 2, 3.4, C.blue, false, 2.5), gA.dot(2, 2), gA.dot(2, -1), lb(230, 30, 'x＝2 のとき\ny は 2 でも −1 でも…', 11, C.red, 'middle', true), ...band(140, box(154, 'x を決めても y が決まらない', C.red, FILL.red, 14, 32), lb(160, 210, 'だから 関数ではない（傾きなし）', 12, C.gray))),
  },
  {
    note: '次は 2x−3y＝6 のような式です。❓ どうやってグラフにするの？ y＝ の形に直せば、傾きと切片が読めて、一次関数として描けるからです。',
    add: fresh(box(20, '2x − 3y ＝ 6', C.blue, FILL.blue, 20, 44), lb(160, 96, 'x と y の両方が入っている', 13, C.gray), lb(160, 122, 'y ＝ (　)x ＋ (　) の形にすれば', 13, C.gray), lb(160, 146, '傾きと切片が読める', 14, C.red, 'middle', true), lb(160, 190, '一次関数のグラフとして描ける', 12, C.gray)),
  },
  {
    note: '❓ どう変形するの？ y だけを左に残したいので、2x を移項して −3y＝−2x＋6。両辺を −3 でわると y＝(2/3)x−2。符号がすべて変わることに注意します。',
    add: fresh(box(14, '2x − 3y ＝ 6', C.gray, FILL.gray, 16, 32), box(58, '−3y ＝ −2x ＋ 6（2x を移項）', C.blue, FILL.blue, 14, 32), box(102, '両辺を −3 でわる', C.red, FILL.red, 14, 32), box(146, 'y ＝ (2/3)x − 2', C.green, FILL.green, 18, 38), lb(160, 208, '−2x÷(−3) ＝ 2/3 x、6÷(−3) ＝ −2', 12, C.gray)),
  },
  {
    note: '傾きは 2/3、y切片は −2 です。❓ なぜ y切片は −2 と分かるの？ y軸上では x＝0。x＝0 を入れると y＝−2 なので、グラフは点 (0, −2) を通ります。',
    add: fresh(...gaBase(), gA.dot(0, -2), gA.tx(1.3, -2.5, '(0, −2)', C.red, 10), ...band(140, box(154, 'y軸上は x＝0 → y ＝ −2', C.red, FILL.red, 15, 32), lb(160, 210, 'y ＝ (2/3)x − 2 の切片が −2', 12, C.gray))),
  },
  {
    note: '❓ x切片は？ x軸上では y＝0 なので、y＝0 を入れます。0＝(2/3)x−2 → (2/3)x＝2 → x＝3。点 (3, 0) を通ります。もとの式でも 2×3−0＝6 で成り立ちます。',
    add: fresh(...gaBase(), gA.dot(0, -2), gA.dot(3, 0), gA.tx(1.3, -2.5, '(0, −2)', C.red, 10), gA.tx(4.3, 0.6, '(3, 0)', C.red, 10), ...band(140, box(154, 'x軸上は y＝0 → 2x＝6、x＝3', C.red, FILL.red, 14, 32), lb(160, 210, '確かめ：2×3 − 3×0 ＝ 6', 12, C.gray))),
  },
  {
    note: '❓ グラフは？ 2点 (0, −2) と (3, 0) を通る直線をひきます。傾き 2/3 は「右に 3 進むと、上に 2」。実際 (0,−2) から右に3、上に2で (3, 0) に着きます。',
    add: fresh(...gaBase(), gA.dot(0, -2), gA.dot(3, 0), gA.seg(-1.5, -3, 7.5, 3, C.blue, false, 2.5), gA.seg(0, -2, 3, -2, C.gray, true, 1.5), gA.seg(3, -2, 3, 0, C.gray, true, 1.5), gA.tx(1.5, -2.6, '右へ3', C.gray, 10), gA.tx(4.1, -1, '上へ2', C.gray, 10), ...band(140, box(154, '直線 2x − 3y ＝ 6', C.blue, FILL.blue, 16, 32), lb(160, 210, '傾き 2/3 ＝ 右へ3、上へ2', 12, C.gray))),
  },
  {
    note: '交点も求められます。y＝x＋1 と x＝2 の交点は？ ❓ なぜ代入で求まるの？ 交点は両方の直線の上にある点なので、両方の式を成り立たせます。x＝2 を y＝x＋1 に入れると y＝3。交点は (2, 3) です。',
    add: fresh(...gaBase(), gA.seg(-1, 0, 2.6, 3.6, C.green, false, 2.5), gA.seg(2, -3, 2, 3.4, C.blue, false, 2.5), gA.dot(2, 3), gA.tx(3.6, 3.2, '(2, 3)', C.red, 11), ...band(140, box(148, 'y ＝ x＋1 に x＝2 を入れる', C.red, FILL.red, 14, 30), box(184, 'y ＝ 2＋1 ＝ 3 → 交点 (2, 3)', C.green, FILL.green, 14, 30))),
  },
]);

// ── 3点が一直線上にある条件 ──
const gB = grid(30, 130, 40, 12);
const gbBase = () => [...gB.axes([0, 6.5], [0, 10.5]), gB.tx(1, -1.2, '1', C.gray, 9), gB.tx(3, -1.2, '3', C.gray, 9), gB.tx(5, -1.2, '5', C.gray, 9)];
const itchoku: DiagramFigure = show([
  {
    note: '3点 A(1, 2)、B(3, 6)、C(5, a) が一直線上にあるとき、a を求めます。C の高さ a が分かりません。',
    add: [...gbBase(), gB.dot(1, 2, C.blue), gB.dot(3, 6, C.blue), gB.tx(0.5, 3, 'A', C.blue, 12), gB.tx(2.5, 7, 'B', C.blue, 12), ci(gB.X(5), gB.Y(5), 7, '?', C.red, FILL.red, 12), lb(gB.X(5) + 22, gB.Y(5), 'C(5, a)', 11, C.red, 'start', true), ...band(150, box(172, '3点が一直線 → a は？', C.blue, FILL.blue, 15, 32))],
  },
  {
    note: '❓ 一直線とは、どういうこと？ どこを選んでも、同じ角度で同じように進んでいるということです。ちがう2点を選んでも、「右へ1で、上へいくつ」が同じ、つまり傾きが同じです。',
    add: fresh(...gbBase(), gB.dot(1, 2, C.blue), gB.dot(3, 6, C.blue), gB.seg(0.5, 1, 4.2, 8.4, C.gray, false, 1.5), ...band(150, box(160, '一直線 ＝ 傾きがどこでも同じ', C.red, FILL.red, 14, 32), lb(160, 214, '傾き ＝ 右へ 1 のとき 上へいくつ', 12, C.gray))),
  },
  {
    note: 'A と B から傾きを出します。A から B へは、右へ 2（1→3）、上へ 4（2→6）。傾き＝(y の増加量)÷(x の増加量)＝4÷2＝2。「右へ1で上へ2」です。',
    add: fresh(...gbBase(), gB.dot(1, 2, C.blue), gB.dot(3, 6, C.blue), gB.seg(1, 2, 3, 2, C.green, true, 2), gB.seg(3, 2, 3, 6, C.red, true, 2), gB.tx(2, 0.6, '右へ2', C.green, 10), gB.tx(3.9, 4, '上へ4', C.red, 10), ...band(150, box(160, '傾き ＝ (6−2)÷(3−1) ＝ 2', C.blue, FILL.blue, 15, 32), lb(160, 214, 'x が 1 増えると y が 2 増える', 12, C.gray))),
  },
  {
    note: '❓ 次は A と C の傾きです。C(5, a) なので、A から C は右へ 4（1→5）、上へ (a−2)。傾きは (a−2)÷4。❓ なぜ AC の傾きも 2 なの？ 3点が同じ直線上だからです。',
    add: fresh(...gbBase(), gB.dot(1, 2, C.blue), gB.dot(3, 6, C.blue), ci(gB.X(5), gB.Y(5), 6, '?', C.red, FILL.red, 11), gB.seg(1, 2, 5, 2, C.green, true, 2), gB.tx(3, 0.6, '右へ4', C.green, 10), ...band(150, box(160, 'AC の傾き ＝ (a−2)÷4', C.red, FILL.red, 15, 32), lb(160, 214, '同じ直線だから、AB の傾き 2 と同じ', 12, C.gray))),
  },
  {
    note: '式にします。(a−2)÷4＝2。❓ なぜ両辺に 4 をかけるの？ 左辺の ÷4 を消して、a だけにしたいからです。a−2＝8、両辺に 2 を足して a＝10 です。',
    add: fresh(box(14, '(a − 2) ÷ 4 ＝ 2', C.blue, FILL.blue, 17, 34), box(60, '両辺に 4 をかける', C.gray, FILL.gray, 13, 28), box(96, 'a − 2 ＝ 8', C.blue, FILL.blue, 17, 34), box(142, '両辺に 2 を足す', C.gray, FILL.gray, 13, 28), box(178, 'a ＝ 10', C.green, FILL.green, 20, 40)),
  },
  {
    note: 'C は (5, 10) と決まりました。3点 A、B、C が同じ直線上に並ぶ様子を描きます。',
    add: fresh(...gbBase(), gB.dot(1, 2, C.blue), gB.dot(3, 6, C.blue), gB.dot(5, 10, C.red), gB.seg(0.5, 1, 5.3, 10.6, C.blue, false, 2), gB.tx(0.5, 3, 'A', C.blue, 12), gB.tx(2.5, 7, 'B', C.blue, 12), gB.tx(4.3, 10, 'C', C.red, 12), ...band(150, box(172, 'C(5, 10)、a ＝ 10', C.green, FILL.green, 16, 34))),
  },
  {
    note: '❓ 本当に一直線？ 確かめます。B から C は、右へ 2（3→5）、上へ 4（6→10）。傾き 4÷2＝2 で、AB の傾き 2 と一致。だから3点は一直線です。',
    add: fresh(...gbBase(), gB.dot(3, 6, C.blue), gB.dot(5, 10, C.red), gB.seg(3, 6, 5, 6, C.green, true, 2), gB.seg(5, 6, 5, 10, C.red, true, 2), gB.tx(4, 4.8, '右へ2', C.green, 10), gB.tx(5.9, 8, '上へ4', C.red, 10), ...band(150, box(160, 'BC の傾き ＝ 4÷2 ＝ 2 ＝ AB', C.green, FILL.green, 14, 32), lb(160, 214, '傾きが同じ ＝ 一直線', 13, C.gray, 'middle', true))),
  },
  {
    note: '別の解き方もあります。❓ 傾きの式を使わない方法は？ 傾きが 2 なので、右へ 1 進むと上へ 2。A から C へは右へ 4 進むから、上へ 2×4＝8。2＋8＝10 で同じ答えです。',
    add: fresh(box(14, '傾き 2 ＝ 右へ1で 上へ2', C.blue, FILL.blue, 15, 32), box(58, 'A(1, 2) から C(5, a) は 右へ 4', C.gray, FILL.gray, 13, 32), box(102, '上へ 2 × 4 ＝ 8', C.purple, FILL.purple, 15, 32), box(146, 'a ＝ 2 ＋ 8 ＝ 10', C.green, FILL.green, 17, 36), lb(160, 208, '同じ答え。やり方は好きなほうでよい', 12, C.gray)),
  },
  {
    note: '❓ 傾きを出すとき、気をつけることは？ y の引き算と x の引き算は、同じ順番にそろえます。(6−2)÷(3−1)＝2 でも、(2−6)÷(3−1)＝−2 と混ぜると符号がくるいます。',
    add: fresh(box(14, '(6 − 2) ÷ (3 − 1) ＝ 2', C.green, FILL.green, 15, 32), lb(160, 66, 'B − A で そろえた', 12, C.green), box(90, '(2 − 6) ÷ (3 − 1) ＝ −2', C.red, FILL.red, 15, 32), lb(160, 142, 'y は A − B、x は B − A と混ぜた', 12, C.red), lb(160, 176, '×　順番が ばらばらだと 符号がまちがう', 14, C.red, 'middle', true), lb(160, 206, '(2−6)÷(1−3) ＝ 2 ならOK（両方 A − B）', 11, C.gray)),
  },
  {
    note: 'まとめ。①傾きの公式を確かめる ②分かっている2点で傾きを出す ③残りの点との傾きを文字で表す ④傾きが等しいという方程式を解く ⑤求めた点で、もう一度傾きを確かめる。',
    add: fresh(box(10, '① 傾き ＝ y の増加量 ÷ x の増加量', C.blue, FILL.blue, 13, 28), box(44, '② 分かる2点で傾きを出す', C.blue, FILL.blue, 13, 28), box(78, '③ 残りの点との傾きを文字で', C.purple, FILL.purple, 13, 28), box(112, '④ 傾きが等しい → 方程式', C.red, FILL.red, 13, 28), box(146, '⑤ 求めた点で確かめる', C.green, FILL.green, 13, 28), lb(160, 200, '一直線 ⇔ 傾きがどこでも同じ', 14, C.gray, 'middle', true)),
  },
]);

// ── 面積を2等分する直線 ──
const gC = grid(25, 125, 30, 18);
const triABC = () => [pg([[gC.X(0), gC.Y(0)], [gC.X(8), gC.Y(0)], [gC.X(2), gC.Y(6)]], C.blue, FILL.blue), lb(gC.X(0) - 8, gC.Y(0) + 10, 'A', 12, C.blue, 'middle', true), lb(gC.X(8) + 8, gC.Y(0) + 10, 'B', 12, C.blue, 'middle', true), lb(gC.X(2), gC.Y(6) - 8, 'C', 12, C.blue, 'middle', true)];
const menseki: DiagramFigure = show([
  {
    note: 'A(0, 0)、B(8, 0)、C(2, 6) の三角形 ABC があります。頂点 A を通って、面積をちょうど半分に分ける直線を引きます。',
    add: [...triABC(), ...band(140, box(160, 'A を通り、面積を 2 等分する直線は？', C.blue, FILL.blue, 13, 32))],
  },
  {
    note: '頂点 A から向かい合う辺 BC に線を引くと、三角形は2つに分かれます。線が BC とぶつかる点を M とします。M をどこにおけば、2つの面積が等しくなるのでしょう。',
    add: [ln(gC.X(0), gC.Y(0), gC.X(5), gC.Y(3), C.red, false, 2.5), ci(gC.X(5), gC.Y(3), 4, undefined, C.red, C.red), lb(gC.X(5) + 12, gC.Y(3) - 6, 'M', 12, C.red, 'start', true), ...band(150, box(172, 'M は BC 上のどこ？', C.red, FILL.red, 15, 32))],
  },
  {
    note: '❓ 三角形の面積は何で決まる？ 底辺×高さ÷2 です。A を共通の頂点にすると、2つの三角形の高さ（A から BC までの垂直な長さ）は同じです。',
    add: fresh(pg([[40, 120], [280, 120], [110, 20]], C.blue, FILL.blue), ln(110, 20, 110, 120, C.green, true, 2), ln(110, 20, 180, 120, C.red, false, 2), lb(126, 76, '高さ', 12, C.green, 'start', true), lb(110, 12, 'A', 12, C.blue, 'middle', true), ...band(150, box(160, '高さが同じ → 面積は 底辺 で決まる', C.green, FILL.green, 13, 32), lb(160, 214, '（図は頂点 A が上にある向きに描き直した）', 11, C.gray))),
  },
  {
    note: '❓ では、いつ面積が等しい？ 高さが同じなら、底辺が等しいとき、面積も等しくなります。だから BM＝MC、つまり M が辺 BC の中点なら、2つの面積は同じです。',
    add: fresh(pg([[40, 120], [280, 120], [110, 20]], C.blue, FILL.blue), ln(110, 20, 160, 120, C.red, false, 2.5), lb(100, 138, 'B側の底辺', 11, C.blue), lb(220, 138, 'C側の底辺', 11, C.blue), ci(160, 120, 4, undefined, C.red, C.red), ...band(150, box(160, '底辺が等しい → 面積が等しい', C.red, FILL.red, 14, 32), lb(160, 214, 'M は BC の中点', 13, C.gray, 'middle', true))),
  },
  {
    note: '❓ 中点の座標はどう出すの？ 中点は2点のちょうど真ん中。だから x も y も、それぞれ平均します。B(8, 0)、C(2, 6) なら M＝((8＋2)÷2, (0＋6)÷2)＝(5, 3)。',
    add: fresh(...triABC(), ci(gC.X(5), gC.Y(3), 4, undefined, C.red, C.red), lb(gC.X(5) + 12, gC.Y(3) - 6, 'M(5, 3)', 11, C.red, 'start', true), ...band(140, box(152, 'x：(8 ＋ 2) ÷ 2 ＝ 5', C.blue, FILL.blue, 14, 28), box(186, 'y：(0 ＋ 6) ÷ 2 ＝ 3', C.blue, FILL.blue, 14, 28), lb(160, 226, '真ん中 ＝ 平均', 11, C.gray))),
  },
  {
    note: '直線 AM の式です。A は原点。❓ なぜ y＝ax の形に置けるの？ 原点を通る直線は、切片が 0 だからです。M(5, 3) を通るので 3＝5a、a＝3/5。y＝(3/5)x です。',
    add: fresh(...triABC(), ln(gC.X(0), gC.Y(0), gC.X(5), gC.Y(3), C.red, false, 2.5), ci(gC.X(5), gC.Y(3), 4, undefined, C.red, C.red), ...band(140, box(146, '原点を通る → y ＝ ax', C.gray, FILL.gray, 13, 26), box(176, 'M(5, 3) を入れる：3 ＝ 5a', C.blue, FILL.blue, 13, 26), box(206, 'a ＝ 3/5 → y ＝ (3/5)x', C.green, FILL.green, 14, 26))),
  },
  {
    note: '❓ 本当に半分？ 確かめます。△ABM は底辺 AB＝8、高さ（M の y座標）3 で 8×3÷2＝12。△ABC は底辺 8、高さ 6 で 8×6÷2＝24。12 は 24 のちょうど半分です。',
    add: fresh(...triABC(), ln(gC.X(0), gC.Y(0), gC.X(5), gC.Y(3), C.red, false, 2.5), ...band(140, box(150, '△ABM ＝ 8×3÷2 ＝ 12', C.blue, FILL.blue, 14, 28), box(182, '△ABC ＝ 8×6÷2 ＝ 24', C.gray, FILL.gray, 14, 28), lb(160, 224, '12 は 24 の半分 → 2等分できた', 12, C.green, 'middle', true))),
  },
  {
    note: '平行四辺形の場合も見ましょう。❓ 平行四辺形の面積を2等分するのは？ 対角線の交点（中心）を通る直線なら、どんな向きでも面積が半分になります。',
    add: fresh(pg([[60, 120], [200, 120], [260, 30], [120, 30]], C.blue, FILL.blue), ln(60, 120, 260, 30, C.gray, true, 1.5), ln(200, 120, 120, 30, C.gray, true, 1.5), ci(160, 75, 4, undefined, C.red, C.red), lb(178, 74, '交点', 11, C.red, 'start', true), ln(90, 30, 230, 120, C.red, false, 2.5), ...band(150, box(160, '中心（対角線の交点）を通れば 2等分', C.red, FILL.red, 13, 32))),
  },
  {
    note: '❓ なぜ交点を通れば半分になるの？ 平行四辺形は、この点を中心に 180° 回すと、自分自身にぴったり重なる（点対称）からです。中心を通る直線で切ると、切り口の2つは回して重なる合同な形です。',
    add: fresh(pg([[60, 120], [200, 120], [260, 30], [120, 30]], C.blue, FILL.blue), ci(160, 75, 4, undefined, C.red, C.red), ln(90, 30, 230, 120, C.red, false, 2.5), sc(160, 75, 30, 20, 60, C.purple, 'rgba(147,51,234,0.25)'), ...band(150, box(160, '中心で 180° 回すと 重なる（合同）', C.purple, FILL.purple, 13, 32), lb(160, 214, '重なる ＝ 面積が同じ', 12, C.gray))),
  },
  {
    note: '例題です。O(0, 0)、B(4, 0)、C(0, 6) の三角形で、O を通る2等分線は？ BC の中点は (2, 3)。原点と (2, 3) を通るので傾き 3/2、y＝(3/2)x。O の反対側の辺の中点を通せばよいのです。',
    add: fresh(...(() => { const g = grid(60, 125, 30, 18); return [...g.axes([-0.5, 7], [-0.5, 6.4]), pg([[g.X(0), g.Y(0)], [g.X(4), g.Y(0)], [g.X(0), g.Y(6)]], C.blue, FILL.blue), ln(g.X(0), g.Y(0), g.X(2), g.Y(3), C.red, false, 2.5), ci(g.X(2), g.Y(3), 4, undefined, C.red, C.red), lb(g.X(2) + 8, g.Y(3) - 6, '(2, 3)', 11, C.red, 'start', true)]; })(), ...band(150, box(160, '中点 (2, 3) → y ＝ (3/2)x', C.green, FILL.green, 15, 32))),
  },
  {
    note: '頂点が原点でない場合も同じです。A(0, 0)、B(6, 0)、C(0, 4) で、B を通る2等分線は？ B の向かいの辺は AC。中点は (0, 2)。B(6, 0) と (0, 2) を通るので、傾き −1/3、切片 2、y＝−(1/3)x＋2。',
    add: fresh(...(() => { const g = grid(60, 125, 30, 18); return [...g.axes([-0.5, 7.5], [-0.5, 6.4]), pg([[g.X(0), g.Y(0)], [g.X(6), g.Y(0)], [g.X(0), g.Y(4)]], C.blue, FILL.blue), ln(g.X(6), g.Y(0), g.X(0), g.Y(2), C.red, false, 2.5), ci(g.X(0), g.Y(2), 4, undefined, C.red, C.red), lb(g.X(0) + 8, g.Y(2) - 6, '(0, 2)', 11, C.red, 'start', true)]; })(), ...band(150, box(160, '傾き (2−0)÷(0−6) ＝ −1/3', C.blue, FILL.blue, 14, 28), box(194, 'y ＝ −(1/3)x ＋ 2', C.green, FILL.green, 16, 30))),
  },
  {
    note: 'まとめ。①通る頂点と、向かい合う辺を決める ②その辺の中点を求める（x、y をそれぞれ平均）③頂点と中点を通る直線の式を出す ④面積を計算して確かめる。理由は「高さが同じなら、底辺が等しいと面積も等しい」です。',
    add: fresh(box(10, '① 頂点と、向かい合う辺を決める', C.blue, FILL.blue, 13, 28), box(44, '② その辺の中点（x、y を平均）', C.purple, FILL.purple, 13, 28), box(78, '③ 頂点と中点を通る直線の式', C.red, FILL.red, 13, 28), box(112, '④ 面積を計算して確かめる', C.green, FILL.green, 13, 28), lb(160, 166, '理由：高さが同じ → 底辺が等しければ', 13, C.gray, 'middle', true), lb(160, 188, '面積も等しい（平行四辺形は中心を通る）', 13, C.gray, 'middle', true)),
  },
]);

// ── 対称な点を使って最短距離を求める ──
const gD = grid(40, 90, 40, 25);
const gdBase = () => [...gD.axes([-0.3, 6.6], [-1.5, 3.5]), gD.tx(1, -0.5, '1', C.gray, 9), gD.tx(4, -0.5, '4', C.gray, 9), gD.tx(5, -0.5, '5', C.gray, 9)];
const gdAB = () => [gD.dot(1, 3, C.blue), gD.dot(5, 1, C.blue), gD.tx(1.75, 3.05, 'A(1,3)', C.blue, 10), gD.tx(5.7, 1.3, 'B(5,1)', C.blue, 10)];
const saitan: DiagramFigure = show([
  {
    note: 'A(1, 3)、B(5, 1) があります。x軸上に点 P をとって、AP＋PB（A から P、P から B への道のり）を、いちばん短くしたい。P はどこでしょう。',
    add: [...gdBase(), ...gdAB(), ...band(140, box(156, 'x軸上の P で AP＋PB が最小になるのは？', C.blue, FILL.blue, 13, 32))],
  },
  {
    note: '❓ P の場所で、なぜ長さが変わるの？ P を動かすと、折れ線 A→P→B の形が変わるからです。P(2, 0) のときは AP＝PB＝√10 で、合わせて約 6.3 になります。',
    add: [ln(gD.X(1), gD.Y(3), gD.X(2), gD.Y(0), C.gray, true, 1.5), ln(gD.X(2), gD.Y(0), gD.X(5), gD.Y(1), C.gray, true, 1.5), gD.dot(2, 0, C.gray), gD.tx(2, -0.5, 'P', C.gray, 11), ...band(140, box(154, 'P(2, 0)：√10 ＋ √10 ≒ 6.3', C.gray, FILL.gray, 14, 32), lb(160, 210, 'P をずらすと 長さが変わる', 12, C.gray))],
  },
  {
    note: '❓ いちばん短い道は？ 2点間は、まっすぐが最短。でも B が軸の同じ側にあると、A と B を直線で結んでも軸にふれません。そこで B を軸の反対側に移して考えます。',
    add: fresh(...gdBase(), ...gdAB(), gD.seg(1, 3, 5, 1, C.gray, true, 1.5), ...band(140, box(154, 'A と B の直線は x軸を通らない', C.red, FILL.red, 14, 32), lb(160, 210, 'B を軸の反対側へ移すとどうなる？', 12, C.gray))),
  },
  {
    note: '❓ B をどこに移すの？ x軸に関して対称な点 C です。x軸は横なので、x座標はそのままで、y座標の符号だけを変えます。B(5, 1) なら C(5, −1)。',
    add: [gD.dot(5, -1, C.green), gD.tx(5.7, -1.15, 'C(5,−1)', C.green, 10), ln(gD.X(5), gD.Y(1), gD.X(5), gD.Y(-1), C.green, true, 1.5), ...band(140, box(154, 'x軸対称：y の符号を変える', C.green, FILL.green, 15, 32), lb(160, 210, 'B(5, 1) → C(5, −1)', 13, C.gray))],
  },
  {
    note: '❓ なぜ PB＝PC といえるの？ x軸に対して B と C は対称なので、軸上のどの点 P から見ても、B までの距離と C までの距離は同じになるからです（軸で折ると重なります）。',
    add: fresh(...gdBase(), ...gdAB(), gD.dot(5, -1, C.green), gD.dot(4, 0, C.red), gD.seg(4, 0, 5, 1, C.blue, false, 2.5), gD.seg(4, 0, 5, -1, C.green, false, 2.5), gD.tx(4.1, 0.55, 'P', C.red, 11), gD.tx(5.7, -1.15, 'C', C.green, 11), ...band(140, box(154, 'PB ＝ PC（軸をはさんで対称）', C.green, FILL.green, 15, 32), lb(160, 210, '軸で折ると B と C が重なる', 12, C.gray))),
  },
  {
    note: 'だから AP＋PB は AP＋PC に置きかえられます。❓ なぜ置きかえるの？ A から P を通って C へ行く道のりになり、A と C を直線で結べる形になったからです。',
    add: fresh(...gdBase(), ...gdAB(), gD.dot(5, -1, C.green), gD.seg(1, 3, 5, -1, C.purple, true, 2), gD.tx(5.7, -1.15, 'C', C.green, 11), ...band(140, box(154, 'AP ＋ PB ＝ AP ＋ PC', C.purple, FILL.purple, 16, 32), lb(160, 210, 'A から C へ行く道のりになった', 12, C.gray))),
  },
  {
    note: '❓ 最短になるのはいつ？ A と C をまっすぐ結んだときです。直線より短い道はないので、A、P、C が一直線に並ぶとき AP＋PC は最小です。P は、直線 AC と x軸の交点。',
    add: fresh(...gdBase(), ...gdAB(), gD.dot(5, -1, C.green), gD.seg(1, 3, 5, -1, C.purple, false, 2.5), gD.dot(4, 0, C.red), gD.tx(4.1, 0.55, 'P', C.red, 11), ...band(140, box(154, '直線 AC と x軸の交点が P', C.purple, FILL.purple, 15, 32), lb(160, 210, '直線が最短。それ以外はまがる分だけ長い', 12, C.gray))),
  },
  {
    note: '直線 AC の式を求めます。傾きは (−1−3)÷(5−1)＝−1。A(1, 3) を通るので y−3＝−(x−1)、y＝−x＋4 です。',
    add: fresh(box(14, 'A(1, 3)、C(5, −1)', C.blue, FILL.blue, 15, 30), box(54, '傾き ＝ (−1−3)÷(5−1) ＝ −1', C.blue, FILL.blue, 14, 30), box(94, 'y − 3 ＝ −(x − 1)', C.purple, FILL.purple, 15, 30), box(134, 'y ＝ −x ＋ 4', C.green, FILL.green, 18, 36), lb(160, 194, '点 A を代入すると：−1＋4 ＝ 3 で成り立つ', 12, C.gray)),
  },
  {
    note: '❓ P の座標は？ P は x軸上、つまり y＝0 の点です。y＝−x＋4 に y＝0 を入れると x＝4。P(4, 0)。長さは AC＝√(4²＋4²)＝√32＝4√2（横 4、たて 4 の直角三角形の斜辺なので三平方）。',
    add: fresh(...gdBase(), ...gdAB(), gD.dot(5, -1, C.green), gD.seg(1, 3, 5, -1, C.purple, false, 2.5), gD.dot(4, 0, C.red), gD.tx(4.1, 0.55, 'P(4, 0)', C.red, 11), gD.seg(1, 3, 5, 3, C.gray, true, 1.2), gD.seg(5, 3, 5, -1, C.gray, true, 1.2), ...band(140, box(148, 'y＝0 → x＝4、P(4, 0)', C.red, FILL.red, 14, 28), box(182, 'AC ＝ √(4²＋4²) ＝ 4√2', C.green, FILL.green, 14, 28), lb(160, 224, '横4・たて4の直角三角形の斜辺', 11, C.gray))),
  },
  {
    note: '❓ 本当に合っている？ もとの点で確かめます。AP＝√(3²＋3²)＝3√2、PB＝√(1²＋1²)＝√2。合わせて 4√2 で、AC と一致します。P(2, 0) のときの約 6.3 より短くなっています。',
    add: fresh(...gdBase(), ...gdAB(), gD.dot(4, 0, C.red), gD.seg(1, 3, 4, 0, C.blue, false, 2.5), gD.seg(4, 0, 5, 1, C.blue, false, 2.5), ...band(140, box(148, 'AP ＝ √(3²＋3²) ＝ 3√2', C.blue, FILL.blue, 14, 28), box(180, 'PB ＝ √(1²＋1²) ＝ √2', C.blue, FILL.blue, 14, 28), lb(160, 224, '合計 4√2 ≒ 5.7 ＜ 6.3', 12, C.green, 'middle', true))),
  },
  {
    note: 'y軸上に P をとる問題なら、軸が縦なので、y座標はそのままで x座標の符号を変えます。例：点 (−3, 2) を y軸に関して移すと (3, 2)。軸が x か y かで、変える座標がちがいます。',
    add: fresh(...(() => { const g = grid(160, 130, 25, 25); return [...g.axes([-5, 5], [-0.5, 4.2]), g.dot(-3, 2, C.blue), g.dot(3, 2, C.green), ln(g.X(-3), g.Y(2), g.X(3), g.Y(2), C.gray, true, 1.5), g.tx(-3, 2.6, '(−3, 2)', C.blue, 10), g.tx(3, 2.6, '(3, 2)', C.green, 10)]; })(), ...band(150, box(160, 'y軸対称：x の符号を変える', C.green, FILL.green, 15, 30), lb(160, 210, 'x軸対称：y の符号を変える', 13, C.gray))),
  },
  {
    note: 'まとめ。①片方の点を、軸に関して対称移動する ②もう一方の点と、直線で結ぶ ③その直線と軸の交点が P ④最短の長さは2点間の距離（三平方）。理由は「軸で折ると重なるので長さが同じ」と「直線が最短」の2つです。',
    add: fresh(box(10, '① 片方の点を対称移動する', C.green, FILL.green, 13, 28), box(44, '② もう一方と直線で結ぶ', C.purple, FILL.purple, 13, 28), box(78, '③ 直線と軸の交点が P', C.red, FILL.red, 13, 28), box(112, '④ 最短 ＝ 2点間の距離', C.blue, FILL.blue, 13, 28), lb(160, 166, '理由：軸で折ると重なる（PB＝PC）', 13, C.gray, 'middle', true), lb(160, 190, '＋　2点を結ぶ直線が最短', 13, C.gray, 'middle', true)),
  },
]);

// ── 放物線上の2点と原点でできる三角形の面積 ──
const gE = grid(140, 120, 40, 25);
const geBase = () => [...gE.axes([-3.2, 3.5], [-0.3, 4.6])];
const parab = (): DiagramElement[] => {
  const out: DiagramElement[] = [];
  const n = 16;
  for (let i = 0; i < n; i++) {
    const x1 = -2 + (4 * i) / n;
    const x2 = -2 + (4 * (i + 1)) / n;
    out.push(gE.seg(x1, x1 * x1, x2, x2 * x2, C.gray, false, 2));
  }
  return out;
};
const AB_E = () => [gE.dot(-1, 1, C.blue), gE.dot(2, 4, C.blue), gE.tx(-1.7, 1, 'A', C.blue, 12), gE.tx(2.4, 4, 'B', C.blue, 12), gE.dot(0, 0, C.ink)];
const houbutsu: DiagramFigure = show([
  {
    note: '放物線 y＝x² の上に、x座標が −1 の点 A と、x座標が 2 の点 B があります。原点を O として、三角形 OAB の面積を求めます。',
    add: [...geBase(), ...parab(), gE.tx(1.5, 3.3, 'y＝x²', C.gray, 11), ...band(140, box(156, '△OAB の面積は？', C.blue, FILL.blue, 16, 32))],
  },
  {
    note: '❓ A、B の座標は？ 2点は放物線 y＝x² の上にあるので、x を式に入れれば y が出ます。A：x＝−1 → y＝(−1)²＝1。B：x＝2 → y＝2²＝4。A(−1, 1)、B(2, 4)。',
    add: [...AB_E(), gE.tx(-1.9, 1.5, '(−1, 1)', C.blue, 10), gE.tx(2.5, 3.4, '(2, 4)', C.blue, 10), ...band(140, box(148, 'A：y ＝ (−1)² ＝ 1', C.blue, FILL.blue, 14, 28), box(182, 'B：y ＝ 2² ＝ 4', C.blue, FILL.blue, 14, 28), lb(160, 224, '曲線の上の点 ＝ 式が成り立つ', 11, C.gray))],
  },
  {
    note: '❓ なぜ、このままでは面積を出しにくいの？ OA、OB、AB のどれも斜めの線で、底辺と高さが直角にとれないからです。「底辺×高さ÷2」に当てはめられません。',
    add: fresh(...geBase(), ...parab(), ...AB_E(), gE.seg(0, 0, -1, 1, C.red, false, 2.5), gE.seg(0, 0, 2, 4, C.red, false, 2.5), gE.seg(-1, 1, 2, 4, C.red, false, 2.5), ...band(140, box(154, '3辺とも斜め → 高さがとれない', C.red, FILL.red, 14, 32), lb(160, 210, 'たての辺が無いので 面積が出しにくい', 12, C.gray))),
  },
  {
    note: '❓ どうすればいい？ 直線 AB と y軸の交点 C をとります。y軸は縦の線なので、OC を底辺にすると、A、B から y軸までは横に測れて、直角の高さになります。三角形は、2つに分かれます。',
    add: fresh(...geBase(), ...parab(), ...AB_E(), gE.seg(0, 0, -1, 1, C.gray, false, 1.5), gE.seg(0, 0, 2, 4, C.gray, false, 1.5), gE.seg(-2, 0, 2, 4, C.purple, false, 2.5), gE.dot(0, 2, C.red), gE.tx(0.45, 2.15, 'C', C.red, 12), gE.seg(0, 0, 0, 2, C.red, false, 3), ...band(140, box(154, 'y軸で 2 つの三角形に分ける', C.purple, FILL.purple, 15, 32), lb(160, 210, '底辺 OC は たて向き（y軸の上）', 12, C.gray))),
  },
  {
    note: '直線 AB の式を求めます。傾きは (4−1)÷(2−(−1))＝3÷3＝1。A(−1, 1) を通るので y−1＝x＋1、y＝x＋2。',
    add: fresh(box(14, 'A(−1, 1)、B(2, 4)', C.blue, FILL.blue, 15, 30), box(54, '傾き ＝ (4−1)÷(2＋1) ＝ 1', C.blue, FILL.blue, 14, 30), box(94, 'y − 1 ＝ 1×(x ＋ 1)', C.purple, FILL.purple, 15, 30), box(134, 'y ＝ x ＋ 2', C.green, FILL.green, 18, 36), lb(160, 194, '確かめ：B に x＝2 → y＝4', 12, C.gray)),
  },
  {
    note: '❓ なぜ y切片が C の座標になるの？ C は直線 AB と y軸の交点で、y軸上では x＝0。x＝0 を y＝x＋2 に入れると y＝2。切片がそのまま C の高さです。C(0, 2)、OC＝2。',
    add: fresh(...geBase(), gE.seg(-2, 0, 2, 4, C.purple, false, 2.5), gE.dot(0, 2, C.red), gE.tx(1.0, 2.1, 'C(0, 2)', C.red, 11), gE.seg(0, 0, 0, 2, C.red, false, 3), ...band(140, box(154, 'x＝0 を入れると y ＝ 0＋2 ＝ 2', C.red, FILL.red, 14, 32), lb(160, 210, 'OC ＝ 2（切片の長さ）', 13, C.gray, 'middle', true))),
  },
  {
    note: '△OAC を求めます。底辺 OC＝2。❓ 高さは？ A から y軸までの横の距離で、A の x座標が −1 なので、その絶対値の 1 です。距離は負にならないので、マイナスは取ります。面積は 2×1÷2＝1。',
    add: fresh(...geBase(), gE.dot(-1, 1, C.blue), gE.dot(0, 2, C.red), gE.dot(0, 0, C.ink), pg([[gE.X(0), gE.Y(0)], [gE.X(-1), gE.Y(1)], [gE.X(0), gE.Y(2)]], C.blue, FILL.blue), gE.seg(-1, 1, 0, 1, C.green, true, 2), gE.tx(-1.6, 0.55, '高さ 1', C.green, 10), ...band(140, box(148, '底辺 OC ＝ 2、高さ ＝ |−1| ＝ 1', C.blue, FILL.blue, 13, 28), box(182, '△OAC ＝ 2 × 1 ÷ 2 ＝ 1', C.green, FILL.green, 14, 28), lb(160, 224, '高さ ＝ x座標の絶対値', 11, C.gray))),
  },
  {
    note: '△OBC を求めます。底辺は同じ OC＝2。高さは B の x座標 2。面積は 2×2÷2＝2。B は右側なので、そのまま 2 です。',
    add: fresh(...geBase(), gE.dot(2, 4, C.blue), gE.dot(0, 2, C.red), gE.dot(0, 0, C.ink), pg([[gE.X(0), gE.Y(0)], [gE.X(2), gE.Y(4)], [gE.X(0), gE.Y(2)]], C.green, FILL.green), gE.seg(0, 4, 2, 4, C.green, true, 2), gE.tx(1, 4.4, '高さ 2', C.green, 10), ...band(140, box(148, '底辺 OC ＝ 2、高さ ＝ 2', C.green, FILL.green, 14, 28), box(182, '△OBC ＝ 2 × 2 ÷ 2 ＝ 2', C.green, FILL.green, 14, 28), lb(160, 224, '高さは B から y軸までの横の距離', 11, C.gray))),
  },
  {
    note: '合わせます。△OAB＝△OAC＋△OBC＝1＋2＝3。❓ 足してよいの？ 三角形 OAB は、y軸で切った2つの三角形 OAC と OBC で、すき間も重なりもなく できているからです。',
    add: fresh(...geBase(), pg([[gE.X(0), gE.Y(0)], [gE.X(-1), gE.Y(1)], [gE.X(0), gE.Y(2)]], C.blue, FILL.blue), pg([[gE.X(0), gE.Y(0)], [gE.X(2), gE.Y(4)], [gE.X(0), gE.Y(2)]], C.green, FILL.green), ...band(140, box(148, '△OAB ＝ 1 ＋ 2 ＝ 3', C.green, FILL.green, 17, 32), lb(160, 200, 'まとめて：(1/2)×OC×(1＋2)', 13, C.gray, 'middle', true), lb(160, 222, '底辺 OC が共通だから', 12, C.gray))),
  },
  {
    note: '❓ 別の方法で確かめると？ 高校で習う公式ですが、座標から直接、|(−1)×4−2×1|÷2＝|−4−2|÷2＝3 と出せます（高校入試では使わない方法です）。答えが 3 で一致します。ちがう道で同じ答えなら、まず安心です。',
    add: fresh(box(14, 'O(0,0)、A(−1,1)、B(2,4)', C.gray, FILL.gray, 15, 30), box(54, '|(−1)×4 − 2×1| ÷ 2', C.blue, FILL.blue, 15, 30), box(94, '＝ |−4 − 2| ÷ 2 ＝ 6 ÷ 2', C.blue, FILL.blue, 15, 30), box(134, '＝ 3', C.green, FILL.green, 20, 36), lb(160, 194, '前と同じ答え。ただし入試では', 12, C.gray), lb(160, 214, 'y軸で分ける方法を使えるようにしよう', 12, C.gray)),
  },
  {
    note: '別の例。A の x座標が −1、B が 3 のとき。A(−1, 1)、B(3, 9)。直線 AB は傾き (9−1)÷4＝2、y＝2x＋3 で C(0, 3)。OC＝3、高さ 1 と 3 なので (1/2)×3×1＋(1/2)×3×3＝6。同じ手順で解けます。',
    add: fresh(box(12, 'A(−1, 1)、B(3, 9)', C.blue, FILL.blue, 15, 28), box(46, '傾き (9−1)÷(3＋1)＝2、y＝2x＋3', C.blue, FILL.blue, 13, 28), box(80, 'C(0, 3) → OC ＝ 3', C.purple, FILL.purple, 14, 28), box(114, '(1/2)×3×1 ＋ (1/2)×3×3', C.green, FILL.green, 14, 28), box(148, '＝ 1.5 ＋ 4.5 ＝ 6', C.green, FILL.green, 17, 32), lb(160, 210, '手順は同じ。高さは |x座標|', 13, C.gray, 'middle', true)),
  },
]);

// ── 点が辺上を動くときの面積のグラフ ──
const rectFig = (): DiagramElement[] => [
  bx(20, 30, 112, 84, undefined, C.gray, FILL.gray),
  lb(10, 30, 'A', 11, C.gray, 'middle', true),
  lb(10, 120, 'B', 11, C.gray, 'middle', true),
  lb(138, 122, 'C', 11, C.gray, 'start', true),
  lb(138, 28, 'D', 11, C.gray, 'start', true),
  lb(76, 130, '8cm', 10, C.gray, 'middle', false),
  lb(6, 72, '6cm', 10, C.gray, 'middle', false),
];
const gF = grid(190, 125, 16, 3.6);
const gfAxes = () => [...gF.axes([-0.3, 7.6], [-1, 25.5]), gF.tx(4, -3.5, '4', C.gray, 9), gF.tx(7, -3.5, '7', C.gray, 9), gF.tx(-0.8, 24, '24', C.gray, 9)];
const pPos = (x: number): [number, number] => (x <= 4 ? [20 + 28 * x, 114] : [132, 114 - 28 * (x - 4)]);
const tri2 = (x: number): DiagramElement => { const [px, py] = pPos(x); return pg([[20, 30], [20, 114], [px, py]], C.blue, FILL.blue); };
const doutenMenseki: DiagramFigure = show([
  {
    note: '長方形 ABCD で AB＝6cm、BC＝8cm。点 P は B を出発し、辺 BC、辺 CD の上を毎秒 2cm で D まで動きます。x 秒後の △ABP の面積を y cm² として、y を x の式で表します。',
    add: [...rectFig(), ci(20, 114, 4, undefined, C.red, C.red), lb(160, 96, 'P は B から\nC、D の順に進む', 11, C.red, 'start', true), ...band(150, box(172, 'y ＝ △ABP の面積（x 秒後）', C.blue, FILL.blue, 14, 32))],
  },
  {
    note: '❓ 動いた長さは？ 速さ×時間。毎秒 2cm で x 秒なので、B から 2x cm 進んでいます。これが BP の長さです（辺 BC の上にいるあいだ）。',
    add: [tri2(2), ci(76, 114, 4, undefined, C.red, C.red), ...band(150, box(156, '進んだ長さ ＝ 2 × x ＝ 2x cm', C.red, FILL.red, 15, 30), lb(160, 210, '2 秒後：BP ＝ 4cm', 12, C.gray))],
  },
  {
    note: '❓ P はどこまで BC の上にいるの？ BC は 8cm、毎秒 2cm なので、8÷2＝4 秒で C に着きます。だから 0≦x≦4 のあいだは BC 上、4 秒より後は CD 上です。ここが式の切りかわる所です。',
    add: fresh(...rectFig(), ci(132, 114, 5, undefined, C.red, C.red), lb(132, 140, 'C に着く：4 秒後', 11, C.red, 'middle', true), ...band(150, box(160, '8 ÷ 2 ＝ 4 秒で C に着く', C.red, FILL.red, 15, 30), lb(160, 210, '0≦x≦4 は BC 上、その後は CD 上', 12, C.gray))),
  },
  {
    note: '前半 0≦x≦4 の式。△ABP の底辺を AB＝6 とすると、P から AB までの高さは BP＝2x。❓ なぜ？ AB は左のたて辺で、BC 上の P からの横の距離が BP だからです。y＝(1/2)×6×2x＝6x。',
    add: fresh(...rectFig(), tri2(2), ci(76, 114, 4, undefined, C.red, C.red), ln(20, 100, 76, 100, C.green, true, 2), lb(46, 88, '高さ 2x', 10, C.green, 'middle', true), ...band(150, box(154, 'y ＝ (1/2) × 6 × 2x ＝ 6x', C.blue, FILL.blue, 16, 32), lb(160, 210, '底辺 AB ＝ 6、高さ ＝ BP ＝ 2x', 12, C.gray))),
  },
  {
    note: '❓ このグラフの形は？ y＝6x は比例の式なので、原点を通る直線です。x＝4 で y＝24 なので、(0, 0) から (4, 24) までまっすぐ上がります。',
    add: fresh(...rectFig(), tri2(4), ...gfAxes(), gF.seg(0, 0, 4, 24, C.blue, false, 2.5), gF.dot(4, 24, C.red), ...band(150, box(172, '0≦x≦4：y ＝ 6x（比例）', C.blue, FILL.blue, 14, 30))),
  },
  {
    note: '4 秒をこえると、P は CD 上です。❓ 面積はどうなる？ 底辺 AB＝6 は同じ。P から AB までの高さは、P が右のたて辺 CD 上にいる間はずっと BC＝8 で一定です。だから y＝(1/2)×6×8＝24 で、変わりません。',
    add: fresh(...rectFig(), pg([[20, 30], [20, 114], [132, 72]], C.blue, FILL.blue), ci(132, 72, 4, undefined, C.red, C.red), ln(20, 138, 132, 138, C.green, true, 2), lb(76, 146, '高さ ＝ BC ＝ 8（変わらない）', 10, C.green, 'middle', true), ...band(154, box(180, 'y ＝ (1/2) × 6 × 8 ＝ 24', C.green, FILL.green, 15, 30), lb(160, 226, '底辺も高さも一定 → 面積は一定', 11, C.gray))),
  },
  {
    note: '❓ 後半はいつまで？ CD は 6cm、毎秒 2cm なので、CD を進むのに 6÷2＝3 秒。4＋3＝7 秒で D に着きます。だから後半は 4≦x≦7 で、y＝24（水平な線）です。',
    add: fresh(...rectFig(), ...gfAxes(), gF.seg(0, 0, 4, 24, C.blue, false, 2.5), gF.seg(4, 24, 7, 24, C.green, false, 2.5), gF.dot(4, 24, C.red), gF.dot(7, 24, C.red), ...band(150, box(160, '4≦x≦7：y ＝ 24（水平）', C.green, FILL.green, 14, 30), lb(160, 210, '6 ÷ 2 ＝ 3 秒、4 ＋ 3 ＝ 7 秒で D', 12, C.gray))),
  },
  {
    note: '❓ 角（4 秒）で、2つの式はつながっている？ 前半の式に x＝4 を入れると 6×4＝24。後半は 24。値が同じなので、グラフは切れ目なくつながります。ここで折れ曲がります。',
    add: fresh(...gfAxes(), gF.seg(0, 0, 4, 24, C.blue, false, 2.5), gF.seg(4, 24, 7, 24, C.green, false, 2.5), gF.dot(4, 24, C.red), lb(90, 60, '折れ曲がる', 12, C.red, 'middle', true), ...band(150, box(154, '前半：6×4 ＝ 24　後半：24', C.red, FILL.red, 14, 30), lb(160, 210, '一致する → つながっている', 12, C.gray))),
  },
  {
    note: '使ってみます。面積が 12cm² になるのは？ ❓ どちらの式を使うの？ 12 は 24 より小さいので、前半の式です。6x＝12 で x＝2。これは 0≦x≦4 に入っているので、答えになります。',
    add: fresh(...gfAxes(), gF.seg(0, 0, 4, 24, C.blue, false, 2.5), gF.seg(4, 24, 7, 24, C.green, false, 2.5), gF.seg(0, 12, 2, 12, C.red, true, 1.5), gF.seg(2, 12, 2, 0, C.red, true, 1.5), gF.dot(2, 12, C.red), gF.tx(-0.9, 12, '12', C.gray, 9), gF.tx(2, -3.5, '2', C.red, 9), ...band(150, box(160, '6x ＝ 12 → x ＝ 2（範囲に入る）', C.red, FILL.red, 14, 30), lb(160, 210, '2 秒後', 13, C.gray, 'middle', true))),
  },
  {
    note: '❓ 解いたあと、なぜ範囲を確かめるの？ 式は範囲ごとに別だからです。前半の式で x＝5 と出ても、5 は後半の範囲。そのときは答えになりません。面積 18 なら 6x＝18、x＝3（0≦x≦4 に入る）で 3 秒後。',
    add: fresh(box(14, '前半 0≦x≦4：y ＝ 6x', C.blue, FILL.blue, 15, 30), box(54, '後半 4≦x≦7：y ＝ 24', C.green, FILL.green, 15, 30), lb(160, 110, '面積 18：6x ＝ 18 → x ＝ 3', 14, C.gray, 'middle', true), lb(160, 136, '3 は 0≦x≦4 の中 → OK（3 秒後）', 13, C.green), lb(160, 170, '解が範囲の外なら、その式では答えにならない', 12, C.red), lb(160, 196, '後半は y が 24 で一定 → 24 のとき 幅で答える', 12, C.gray)),
  },
  {
    note: 'まとめ。①動いた長さを（速さ×x）で表す ②点が曲がる時刻で、x の範囲を分ける ③範囲ごとに底辺と高さから面積 y を式にする ④曲がる時刻で式がつながるか確かめる ⑤指定の面積は、範囲ごとに解いて、範囲に入るか確かめる。',
    add: fresh(box(8, '① 動いた長さ ＝ 速さ × x', C.blue, FILL.blue, 13, 28), box(40, '② 曲がる時刻で 範囲を分ける', C.red, FILL.red, 13, 28), box(72, '③ 範囲ごとに 底辺×高さ÷2', C.purple, FILL.purple, 13, 28), box(104, '④ 曲がる時刻で 値が一致するか', C.green, FILL.green, 13, 28), box(136, '⑤ 解が範囲に入るか確かめる', C.green, FILL.green, 13, 28), lb(160, 190, '角をこえると 底辺か高さが変わる', 13, C.gray, 'middle', true), lb(160, 214, 'だから 式も変わる', 13, C.gray)),
  },
]);

// ── 折れ線の角は平行線の補助線で求める ──
const PA = { x: 100, y: 35 };
const PB = { x: 150, y: 115 };
const PP = { x: 174, y: 87 };
const parBase = () => [
  ln(20, 35, 300, 35, C.gray, false, 2),
  ln(20, 115, 300, 115, C.gray, false, 2),
  lb(292, 26, 'l', 12, C.gray, 'middle', true),
  lb(292, 106, 'm', 12, C.gray, 'middle', true),
  ln(PA.x, PA.y, PP.x, PP.y, C.blue, false, 2.5),
  ln(PP.x, PP.y, PB.x, PB.y, C.blue, false, 2.5),
  lb(PA.x - 4, PA.y - 9, 'A', 11, C.blue, 'end', true),
  lb(PB.x - 6, PB.y + 10, 'B', 11, C.blue, 'end', true),
  lb(PP.x + 8, PP.y - 9, 'P', 11, C.blue, 'start', true),
];
const auxLine = () => ln(30, PP.y, 290, PP.y, C.red, true, 1.8);
const angA = () => [sc(PA.x, PA.y, 26, -35, 0, C.green, 'rgba(22,163,74,0.30)'), lb(PA.x + 40, PA.y + 11, '35°', 10, C.green, 'middle', true)];
const angB = () => [sc(PB.x, PB.y, 26, 0, 50, C.purple, 'rgba(147,51,234,0.30)'), lb(PB.x + 42, PB.y - 6, '50°', 10, C.purple, 'middle', true)];
const angPtop = () => [sc(PP.x, PP.y, 26, 145, 180, C.green, 'rgba(22,163,74,0.30)'), lb(PP.x - 46, PP.y - 9, '35°', 10, C.green, 'middle', true)];
const angPbot = () => [sc(PP.x, PP.y, 26, 180, 230, C.purple, 'rgba(147,51,234,0.30)'), lb(PP.x - 42, PP.y + 14, '50°', 10, C.purple, 'middle', true)];
const orekakudo: DiagramFigure = show([
  {
    note: '平行な2直線 l、m の間に折れ線 A−P−B があります。l と AP のつくる角が 35°、m と BP のつくる角が 50° のとき、∠APB は何度でしょう。',
    add: [...parBase(), ...angA(), ...angB(), ...band(140, box(156, '∠APB ＝ ？', C.blue, FILL.blue, 17, 34))],
  },
  {
    note: '❓ なぜすぐには求まらないの？ 35° と 50° は、A と B という遠い場所にあります。求めたい ∠APB は P にあるので、2つの角を P に集めないと、つながりません。',
    add: [ln(PP.x - 14, PP.y - 14, PP.x + 6, PP.y + 12, C.red, false, 0.1), ...band(140, box(154, '35° と 50° は 遠くにある', C.red, FILL.red, 15, 32), lb(160, 210, 'P に角を移したい', 13, C.gray, 'middle', true))],
  },
  {
    note: '❓ どうやって移すの？ P を通り、l に平行な補助線を1本引きます。平行線にはさまれると、角が「移せる」性質（錯角が等しい）が使えるからです。補助線は m にも平行です。',
    add: fresh(...parBase(), auxLine(), lb(40, PP.y - 8, '補助線', 11, C.red, 'start', true), ...band(140, box(154, 'P を通り l に平行な線を引く', C.red, FILL.red, 15, 32), lb(160, 210, 'l ∥ 補助線 ∥ m', 13, C.gray))),
  },
  {
    note: '❓ 錯角って何？ 平行な2直線に1本の直線が交わるとき、ななめ反対側にできる角のことです。平行線では錯角が等しくなります。l と補助線は平行で、AP が横切っています。',
    add: fresh(...parBase(), auxLine(), ...angA(), ...angPtop(), ...band(140, box(148, '平行線 → 錯角は等しい', C.green, FILL.green, 15, 30), lb(160, 200, 'A の角 35° ＝ P の上の角 35°', 13, C.gray, 'middle', true), lb(160, 222, '（ななめ反対側の角）', 11, C.gray))),
  },
  {
    note: '下も同じです。補助線と m は平行で、BP が横切っています。B の 50° と、P の下の角が錯角の関係なので、P の下の角も 50° です。',
    add: fresh(...parBase(), auxLine(), ...angA(), ...angPtop(), ...angB(), ...angPbot(), ...band(140, box(148, 'B の角 50° ＝ P の下の角 50°', C.purple, FILL.purple, 14, 30), lb(160, 200, '補助線 ∥ m で 錯角が等しい', 13, C.gray, 'middle', true))),
  },
  {
    note: '❓ ∠APB は、いくつの角の合わせ？ 補助線が ∠APB を上と下の2つに分けています。上が 35°、下が 50°。だから ∠APB は、この2つを合わせた角です。',
    add: fresh(...parBase(), auxLine(), ...angPtop(), ...angPbot(), ...band(140, box(154, '上 35° ＋ 下 50° ＝ ∠APB', C.blue, FILL.blue, 15, 32), lb(160, 210, '補助線が 角を上と下に二つに分けている', 12, C.gray))),
  },
  {
    note: '❓ なぜ足し算でよいの？ 大きな角を、線で2つに分けたとき、分けた角を合わせれば、もとの大きな角になるからです。∠APB＝35°＋50°＝85°。',
    add: fresh(...parBase(), auxLine(), ...angPtop(), ...angPbot(), lb(PP.x + 30, PP.y + 2, '85°', 13, C.red, 'start', true), ...band(140, box(150, '∠APB ＝ 35° ＋ 50° ＝ 85°', C.red, FILL.red, 17, 34), lb(160, 200, '分けた角を合わせるともとの角', 13, C.gray, 'middle', true))),
  },
  {
    note: '別の数でも同じ手順です。l との角が 40°、m との角が 65° なら、∠APB＝40°＋65°＝105°。折れ線の角は、両側の錯角の和になります。',
    add: fresh(box(14, 'l との角 40°、m との角 65°', C.gray, FILL.gray, 14, 30), lb(160, 70, '補助線で 上 40° と 下 65° に分かれる', 13, C.gray), box(90, '∠APB ＝ 40° ＋ 65° ＝ 105°', C.green, FILL.green, 16, 34), lb(160, 152, '折れ線の角 ＝ 両側の錯角の和', 14, C.red, 'middle', true), lb(160, 184, '（P が m に近くても遠くても同じ）', 12, C.gray)),
  },
  {
    note: '❓ 平行線のほかの角の関係は？ 同側内角は、2つの角を足すと 180° になります。横切る直線の同じ側の内側の2角は、錯角と「一直線（180°）」を組み合わせると出るからです。',
    add: fresh(ln(20, 40, 300, 40, C.gray, false, 2), ln(20, 110, 300, 110, C.gray, false, 2), ln(120, 10, 200, 140, C.blue, false, 2.5), sc(138.5, 40, 22, 245, 340, C.green, 'rgba(22,163,74,0.30)'), sc(181.5, 110, 22, 60, 180, C.purple, 'rgba(147,51,234,0.30)'), ...band(146, box(160, '同側内角の和 ＝ 180°', C.blue, FILL.blue, 15, 30), lb(160, 208, '平行なら、内側の同じ側の2角を足すと 180°', 12, C.gray))),
  },
  {
    note: '折れ線が2回、3回と折れているときは？ 折れる点ごとに、平行線に平行な補助線を引きます。1回ごとに「錯角」で角を移し、最後に足し合わせます。',
    add: fresh(ln(20, 30, 300, 30, C.gray, false, 2), ln(20, 130, 300, 130, C.gray, false, 2), ln(70, 30, 130, 80, C.blue, false, 2.5), ln(130, 80, 190, 55, C.blue, false, 2.5), ln(190, 55, 240, 130, C.blue, false, 2.5), ln(40, 80, 290, 80, C.red, true, 1.5), ln(40, 55, 290, 55, C.red, true, 1.5), ...band(146, box(160, '折れる点ごとに 補助線を1本', C.red, FILL.red, 15, 30), lb(160, 208, '各点の角は 錯角で移して足す', 12, C.gray))),
  },
  {
    note: 'まとめ。①折れる点を通る平行線を引く ②補助線で角を上と下に分ける ③平行線の錯角は等しい（同位角も同じ）④分けた角を足す。「平行線が角を移せる」のが根っこの理由です。',
    add: fresh(box(10, '① 折れる点を通る 平行線を引く', C.red, FILL.red, 13, 28), box(44, '② 角を 上と下に分ける', C.blue, FILL.blue, 13, 28), box(78, '③ 錯角は等しい（平行なら）', C.green, FILL.green, 13, 28), box(112, '④ 2つの角を足す', C.purple, FILL.purple, 13, 28), lb(160, 166, '根っこ：平行線は 角をそのまま移せる', 13, C.gray, 'middle', true), lb(160, 190, '先に どの角どうしが錯角か確かめる', 13, C.gray, 'middle', true)),
  },
]);

// ── 長方形を折り返すときの辺の長さ ──
// A(20,30) B(20,126) C(180,126) D(180,30)、1cm＝16px。P は BC 上で BP＝8cm、E は CD 上で CE＝8/3cm。
const RA: [number, number] = [20, 30];
const RB: [number, number] = [20, 126];
const RC: [number, number] = [180, 126];
const RD: [number, number] = [180, 30];
const RP: [number, number] = [148, 126];
const RE: [number, number] = [180, 83];
const foldBase = () => [
  bx(20, 30, 160, 96, undefined, C.gray, FILL.gray),
  lb(10, 30, 'A', 11, C.gray, 'middle', true),
  lb(10, 132, 'B', 11, C.gray, 'middle', true),
  lb(188, 134, 'C', 11, C.gray, 'start', true),
  lb(188, 26, 'D', 11, C.gray, 'start', true),
];
const foldLabels = () => [lb(RP[0], RP[1] + 12, 'P', 11, C.red, 'middle', true), lb(RE[0] + 10, RE[1], 'E', 11, C.red, 'start', true)];
const oriKaeshi: DiagramFigure = show([
  {
    note: '長方形 ABCD（AB＝6cm、BC＝10cm）を、頂点 D が辺 BC 上の点 P に重なるように折ります。折り目は A から辺 CD 上の点 E へ引いた線です。CE の長さを求めます。',
    add: [...foldBase(), ...band(146, box(166, '折り返して D を P に重ねる。CE は？', C.blue, FILL.blue, 13, 30))],
  },
  {
    note: '❓ 折るとどうなる？ 折り目 AE を軸に、△ADE をひっくり返します。すると D が P に重なり、△ADE は △APE の位置にぴったり重なります。',
    add: [pg([RA, RE, RP], C.red, 'rgba(225,29,72,0.20)'), ln(RA[0], RA[1], RE[0], RE[1], C.purple, false, 2.5), ln(RA[0], RA[1], RP[0], RP[1], C.red, false, 2.5), ln(RE[0], RE[1], RP[0], RP[1], C.red, false, 2.5), ...foldLabels(), ...band(146, box(166, '△ADE が 折り返されて △APE になる', C.red, FILL.red, 13, 30))],
  },
  {
    note: '❓ なぜ辺の長さが等しいと言えるの？ ぴったり重なる図形は合同だからです。合同なら、対応する辺の長さも角の大きさも等しい。だから AP＝AD＝10cm、PE＝DE です。',
    add: fresh(...foldBase(), pg([RA, RE, RP], C.red, 'rgba(225,29,72,0.20)'), ln(RA[0], RA[1], RE[0], RE[1], C.purple, false, 2), ...foldLabels(), lb(100, 74, 'AP ＝ 10', 11, C.red, 'middle', true), ...band(146, box(160, '重なる ＝ 合同 → AP ＝ AD ＝ 10', C.red, FILL.red, 14, 30), lb(160, 200, 'PE ＝ DE も同じ理由', 13, C.gray, 'middle', true))),
  },
  {
    note: 'まず △ABP を見ます。B は長方形の角で 90°。❓ なぜ三平方の定理を使うの？ 直角三角形では、斜辺²＝他の2辺²の和 が成り立つからです。AP＝10 が斜辺、AB＝6 なので BP＝√(10²−6²)＝√64＝8cm。',
    add: fresh(...foldBase(), pg([RA, RB, RP], C.blue, FILL.blue), ln(RA[0], RA[1], RP[0], RP[1], C.red, false, 2.5), lb(RP[0], RP[1] + 12, 'P', 11, C.red, 'middle', true), lb(100, 78, '10', 11, C.red, 'middle', true), ...band(146, box(160, 'BP ＝ √(10² − 6²) ＝ √64 ＝ 8cm', C.blue, FILL.blue, 14, 30), lb(160, 200, '6、8、10 の比の直角三角形', 12, C.gray))),
  },
  {
    note: '❓ PC はいくつ？ BC は 10cm で、BP が 8cm。BC は BP と PC をつなげた長さなので、PC＝10−8＝2cm です。',
    add: fresh(...foldBase(), ln(RB[0], RB[1], RP[0], RP[1], C.blue, false, 3), ln(RP[0], RP[1], RC[0], RC[1], C.red, false, 3), lb(84, 138, 'BP ＝ 8', 11, C.blue, 'middle', true), lb(164, 138, '2', 11, C.red, 'middle', true), ...foldLabels(), ...band(150, box(164, 'PC ＝ BC − BP ＝ 10 − 8 ＝ 2', C.red, FILL.red, 14, 30))),
  },
  {
    note: '❓ 求める長さはどうおく？ わからない CE を x cm とおきます。❓ なぜ DE が 6−x になるの？ CD は 6cm で、CD＝CE＋DE。だから DE＝6−x。折り返しで PE＝DE なので、PE も 6−x です。',
    add: fresh(...foldBase(), pg([RA, RE, RP], C.red, 'rgba(225,29,72,0.15)'), ln(RE[0], RE[1], RC[0], RC[1], C.blue, false, 3), lb(196, 104, 'CE ＝ x', 11, C.blue, 'start', true), lb(196, 56, 'DE ＝ 6−x', 10, C.red, 'start', true), ...foldLabels(), ...band(146, box(160, 'CD ＝ 6 ＝ x ＋ DE → DE ＝ 6 − x', C.blue, FILL.blue, 14, 30), lb(160, 200, 'PE ＝ DE ＝ 6 − x（折り返し）', 13, C.red, 'middle', true))),
  },
  {
    note: '❓ どの三角形で方程式を立てるの？ △PCE です。C は角で 90° の直角三角形で、3辺が PC＝2、CE＝x、PE＝6−x と、すべて x で表せるからです。斜辺 PE で 三平方の定理。',
    add: fresh(...foldBase(), pg([RP, RC, RE], C.green, FILL.green), lb(164, 138, '2', 11, C.green, 'middle', true), lb(196, 104, 'x', 11, C.green, 'start', true), lb(150, 100, '6−x', 11, C.red, 'middle', true), ...foldLabels(), ...band(146, box(154, 'x² ＋ 2² ＝ (6 − x)²', C.green, FILL.green, 17, 32), lb(160, 200, '直角の辺 x と 2、斜辺 6 − x', 13, C.gray, 'middle', true))),
  },
  {
    note: '方程式を解きます。右辺を展開すると (6−x)²＝36−12x＋x²。❓ x² はどうなるの？ 両辺に同じ x² があるので、引き算して消えます。残るのは 4＝36−12x。',
    add: fresh(box(12, 'x² ＋ 4 ＝ 36 − 12x ＋ x²', C.blue, FILL.blue, 15, 30), lb(160, 60, '(6 − x)² ＝ 36 − 12x ＋ x²', 12, C.gray), box(78, '両辺の x² が 消える', C.red, FILL.red, 14, 30), box(118, '4 ＝ 36 − 12x', C.blue, FILL.blue, 17, 30), lb(160, 172, '12x ＝ 36 − 4 ＝ 32', 14, C.gray, 'middle', true), box(190, 'x ＝ 32 ÷ 12 ＝ 8/3', C.green, FILL.green, 17, 34)),
  },
  {
    note: '❓ この答えは問題に合っている？ CE＝8/3≒2.67cm。正の数で、CD＝6cm より短いので、辺の上に点 E が実際にあります。x が負や 6 より大きければ、答えにできません。',
    add: fresh(...foldBase(), ln(RE[0], RE[1], RC[0], RC[1], C.green, false, 4), lb(196, 104, 'CE ＝ 8/3', 11, C.green, 'start', true), ...foldLabels(), ...band(146, box(154, '8/3 ≒ 2.67 ＜ 6（CD）で正', C.green, FILL.green, 14, 30), lb(160, 200, '長さが辺の中におさまっていれば OK', 13, C.gray, 'middle', true))),
  },
  {
    note: '❓ 確かめると？ △PCE で x²＋2²＝(8/3)²＋4＝64/9＋36/9＝100/9。斜辺 PE＝6−8/3＝10/3 の2乗は 100/9。ぴったり一致します。CE＝8/3cm が答えです。',
    add: fresh(box(14, '(8/3)² ＋ 2² ＝ 64/9 ＋ 36/9', C.blue, FILL.blue, 15, 30), box(54, '＝ 100/9', C.blue, FILL.blue, 17, 30), box(96, 'PE ＝ 6 − 8/3 ＝ 10/3', C.purple, FILL.purple, 15, 30), box(136, '(10/3)² ＝ 100/9', C.purple, FILL.purple, 17, 30), lb(160, 192, '一致する ＝ 三平方の定理が成り立った', 13, C.green, 'middle', true), lb(160, 214, '答え：CE ＝ 8/3 cm', 15, C.green, 'middle', true)),
  },
  {
    note: '❓ 折り目 AE は、重なる2点 D と P を結ぶ線分にとって何？ 折り目の両側は対称なので、DP は折り目に垂直で、折り目との交点で2等分されます。つまり折り目は DP の垂直二等分線。作図にも使えます。',
    add: fresh(...foldBase(), ln(RD[0], RD[1], RP[0], RP[1], C.gray, true, 2), ln(RA[0], RA[1], RE[0], RE[1], C.purple, false, 3), ci(164, 78, 3, undefined, C.red, C.red), ...foldLabels(), ...band(146, box(160, '折り目 ＝ DP の垂直二等分線', C.purple, FILL.purple, 14, 30), lb(160, 200, '折ると D と P が重なる（対称）', 13, C.gray, 'middle', true))),
  },
]);

export const DIAGRAMS_KOKO_SUGAKU_B: Record<string, DiagramFigure> = {
  '二次方程式の解から係数・もう1つの解を求める': kaiKeisu,
  '連続する整数・ある数と二次方程式': renzoku,
  'x＝a と y＝b のグラフ（二元一次方程式のグラフ）': xyGraph,
  '3点が一直線上にある条件（傾きが等しい）': itchoku,
  '面積を2等分する直線（中点を通す）': menseki,
  '対称な点を使って最短距離を求める（座標平面）': saitan,
  '放物線上の2点と原点でできる三角形の面積（y 軸で分ける）': houbutsu,
  '点が辺上を動くときの面積のグラフ（場合分け）': doutenMenseki,
  '折れ線の角は平行線の補助線で求める': orekakudo,
  '長方形を折り返すときの辺の長さ（三平方で方程式）': oriKaeshi,
};
