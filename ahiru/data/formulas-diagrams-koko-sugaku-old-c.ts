// 高校受験 数学（formulas-koko-sugaku.ts）の、図解を持たない項目の 25番目〜36番目
// （解の公式 〜 一次関数のグラフと図形の面積）の動く図解スライド。
// キーは項目の label（買い切りの識別キーと同じ）。「なぜそうなるの？」を根っこまでたどる形で、10枚以上で書く。
// 画面の上半分に図、下の帯（band）に、そのスライドの式やひとこと、という配置。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, show, band, fresh } from './diagram-kit';

type E = DiagramElement;
const eb = (y: number, t: string, color: string, fill: string, size = 14, h = 30, x = 20, w = 280): E => bx(x, y, w, h, t, color, fill, size);
const tx = (y: number, t: string, size = 12, color: string = C.gray, bold = false): E => lb(160, y, t, size, color, 'middle', bold);
const T = (top: E[], bottom: E[]): E[] => [...top, ...band(140, ...bottom)];
const F = (top: E[], bottom: E[]): E[] => fresh(...top, ...bottom);

// 座標平面（原点の画面位置 ox, oy、1目もりの長さ u）
const G = (ox: number, oy: number, u: number, xl = 130, xr = 130, yd = 0, yu = 0) => {
  const X = (x: number) => ox + x * u;
  const Y = (y: number) => oy - y * u;
  return {
    X,
    Y,
    axes: (): E[] => [
      ar(ox - xl, oy, ox + xr, oy, C.gray),
      ar(ox, oy + yd, ox, oy - yu, C.gray),
      lb(ox + xr - 3, oy + 11, 'x', 11, C.gray, 'end'),
      lb(ox + 7, oy - yu + 7, 'y', 11, C.gray, 'start'),
      lb(ox - 6, oy + 10, 'O', 10, C.gray, 'end'),
    ],
    pt: (x: number, y: number, color: string = C.red): E => ci(X(x), Y(y), 3.5, undefined, color, color),
    open: (x: number, y: number, color: string = C.red): E => ci(X(x), Y(y), 3.5, undefined, color, '#FFFFFF'),
    line: (x1: number, y1: number, x2: number, y2: number, color: string = C.blue, dashed = false, w = 2): E => ln(X(x1), Y(y1), X(x2), Y(y2), color, dashed, w),
    t: (x: number, y: number, text: string, dx = 6, dy = -8, size = 11, color: string = C.ink, anchor: 'start' | 'middle' | 'end' = 'start'): E => lb(X(x) + dx, Y(y) + dy, text, size, color, anchor, true),
  };
};

// ── 25. 解の公式 ──
const sqC = () => bx(50, 8, 80, 80, 'x × x', C.blue, FILL.blue, 15);
const rcR = () => bx(130, 8, 30, 80, '3x', C.green, FILL.green, 13);
const rcB = () => bx(50, 88, 80, 30, '3x', C.green, FILL.green, 13);
const kai: DiagramFigure = show([
  {
    note: '解の公式 x ＝ (−b ± √(b² − 4ac)) / 2a は、どこから出てきたのでしょう。実は、平方完成という変形を、文字のまま最後までやりきった結果です。',
    add: F([eb(16, 'ax² ＋ bx ＋ c ＝ 0', C.blue, FILL.blue, 17, 38, 40, 240), ar(160, 58, 160, 84, C.gray), eb(90, 'x ＝ (−b ± √(b² − 4ac)) / 2a', C.green, FILL.green, 15, 38, 20, 280)], [tx(170, 'この間の変形をたどります', 13, C.gray, true)]),
  },
  {
    note: '❓ なぜ平方完成をするの？ (x ＋ 3)² ＝ 8 のように「かたまりの2乗 ＝ 数」の形にできれば、平方根をとるだけで解けるからです。x ＋ 3 ＝ ±√8。',
    add: F([eb(14, '(x ＋ 3)² ＝ 8', C.blue, FILL.blue, 18, 40, 60, 200), ar(160, 58, 160, 84, C.gray), eb(90, 'x ＋ 3 ＝ ± √8', C.green, FILL.green, 16, 36, 60, 200)], [tx(170, '2乗の形なら、平方根をとって解ける', 13, C.blue, true)]),
  },
  {
    note: '❓ では、x² ＋ 6x を、どうやって2乗の形にするの？ 面積で考えます。x×x の正方形に、たて x・横3の長方形を2つ（3x が2つ）つけると x² ＋ 6x です。',
    add: F([sqC(), rcR(), rcB()], [tx(150, 'x² ＋ 6x ＝ 正方形 ＋ 長方形2つ', 14, C.blue, true), tx(180, '右下のすみだけ欠けていて、まだ大きな正方形ではない', 12, C.gray)]),
  },
  {
    note: '❓ 欠けたすみは、どんな大きさ？ たて3・横3の小さな正方形で、面積は 3×3 ＝ 9。これを足せば、1辺が x ＋ 3 の大きな正方形になります。',
    add: [bx(130, 88, 30, 30, '9', C.red, FILL.red, 13), ...band(140, eb(152, 'x² ＋ 6x ＋ 9 ＝ (x ＋ 3)²', C.red, FILL.red, 15), tx(206, '欠けたすみ 3×3 ＝ 9 を足すと正方形が完成', 12, C.gray))],
  },
  {
    note: 'x² ＋ 6x ＋ 1 ＝ 0 で試します。1 を右へ移して x² ＋ 6x ＝ −1。両辺に 9 を足すと (x ＋ 3)² ＝ 8、だから x ＝ −3 ± 2√2。',
    add: F([eb(10, 'x² ＋ 6x ＋ 1 ＝ 0', C.gray, FILL.gray, 14, 28), eb(46, 'x² ＋ 6x ＝ −1', C.blue, FILL.blue, 14, 28), eb(82, '(x ＋ 3)² ＝ −1 ＋ 9 ＝ 8', C.red, FILL.red, 14, 28), eb(118, 'x ＝ −3 ± √8 ＝ −3 ± 2√2', C.green, FILL.green, 14, 28)], [tx(178, '確かめ：x ＝ −3＋2√2 → x² ＝ 17−12√2、6x ＝ −18＋12√2', 11, C.gray), tx(200, '17−12√2 ＋ (−18＋12√2) ＋ 1 ＝ 0 ✓', 12, C.green, true)]),
  },
  {
    note: '❓ なぜ足す数が 9 なの？ 「x の係数 6 の半分（3）の2乗」だからです。6 は長方形2つ分なので、半分ずつ（3と3）に分けて正方形の2辺にあてているのです。',
    add: F([bx(30, 14, 120, 40, '6x', C.blue, FILL.blue, 16), ar(90, 58, 60, 84, C.gray), ar(90, 58, 120, 84, C.gray), bx(30, 88, 60, 34, '3x', C.green, FILL.green, 14), bx(94, 88, 56, 34, '3x', C.green, FILL.green, 14), eb(20, '半分の2乗', C.red, FILL.red, 14, 32, 180, 120)], [tx(160, '6 の半分は 3、その2乗が 9', 14, C.red, true), tx(190, 'x の係数がちがっても、いつも「半分の2乗」を足す', 12, C.gray)]),
  },
  {
    note: '一般の式 ax² ＋ bx ＋ c ＝ 0 でやります。❓ まず a で割るのはなぜ？ x² の係数を1にしないと、x×x の正方形にならないからです。x² ＋ (b/a)x ＋ c/a ＝ 0。',
    add: F([eb(10, 'ax² ＋ bx ＋ c ＝ 0', C.blue, FILL.blue, 16, 34), ar(160, 48, 160, 70, C.gray), tx(62, '両辺を a で割る', 11, C.gray), eb(76, 'x² ＋ (b/a)x ＋ c/a ＝ 0', C.green, FILL.green, 16, 34), ar(160, 114, 160, 130, C.gray)], [tx(158, 'x² の係数が1になった', 14, C.green, true), tx(188, 'あとは「x の係数の半分の2乗」を足す', 12, C.gray)]),
  },
  {
    note: '❓ 足す数は？ x の係数 b/a の半分は b/2a。その2乗 b²/4a² を両辺に足します。すると左辺は (x ＋ b/2a)² にまとまります。',
    add: F([eb(10, 'x² ＋ (b/a)x ＝ −c/a', C.blue, FILL.blue, 15, 32), ar(160, 46, 160, 66, C.gray), tx(58, '両辺に (b/2a)² ＝ b²/4a² を足す', 11, C.red), eb(72, '(x ＋ b/2a)² ＝ b²/4a² − c/a', C.red, FILL.red, 15, 34)], [tx(150, '左辺：x² ＋ (b/a)x ＋ b²/4a² ＝ (x ＋ b/2a)²', 12, C.blue, true), tx(180, '3 の半分の2乗を足して (x＋3)² になったのと同じ形', 12, C.gray)]),
  },
  {
    note: '❓ 右辺 b²/4a² − c/a を、なぜ通分するの？ 分母がちがうままだと1つの分数にできないからです。c/a ＝ 4ac/4a² なので、右辺は (b² − 4ac)/4a² になります。',
    add: F([eb(10, '(x ＋ b/2a)² ＝ b²/4a² − c/a', C.gray, FILL.gray, 14, 30), eb(50, 'c/a ＝ 4ac/4a²  （分母を4a²にそろえる）', C.purple, FILL.purple, 13, 30), eb(90, '(x ＋ b/2a)² ＝ (b² − 4ac)/4a²', C.green, FILL.green, 15, 34)], [tx(170, '右辺の分子が b² − 4ac（ルートの中身）', 14, C.green, true)]),
  },
  {
    note: '❓ 平方根をとると何が起こるの？ 2乗して(b²−4ac)/4a² になる数は ＋と−の2つあるので ± がつきます。分母は √(4a²) ＝ 2a（±があるので a が負でも同じ答え）。x ＋ b/2a ＝ ±√(b²−4ac)/2a。',
    add: F([eb(12, '(x ＋ b/2a)² ＝ (b² − 4ac)/4a²', C.gray, FILL.gray, 14, 30), ar(160, 46, 160, 68, C.gray), tx(60, '平方根をとる（＋と−の2つ）', 11, C.red), eb(74, 'x ＋ b/2a ＝ ± √(b² − 4ac) / 2a', C.red, FILL.red, 14, 34)], [tx(160, '「2乗して同じになる数」は、＋と−の2つ', 13, C.blue, true)]),
  },
  {
    note: '最後に b/2a を右辺へ移します。x ＝ −b/2a ± √(b²−4ac)/2a。分母がどちらも 2a なので、1つにまとめて x ＝ (−b ± √(b²−4ac)) / 2a。これが解の公式です。',
    add: F([eb(12, 'x ＝ −b/2a ± √(b² − 4ac)/2a', C.blue, FILL.blue, 14, 32), ar(160, 48, 160, 70, C.gray), eb(76, 'x ＝ (−b ± √(b² − 4ac)) / 2a', C.green, FILL.green, 16, 40)], [tx(160, '平方完成を文字のままやりきると出てくる', 13, C.green, true), tx(190, '公式は、暗記した魔法ではなく、変形の記録', 12, C.gray)]),
  },
  {
    note: '❓ ルートの中身 b² − 4ac が負のときは？ 2乗して負になる数はないので、解はありません。正なら解は2つ、0なら ± が消えて解は1つです。',
    add: F([eb(12, 'b² − 4ac ＞ 0 → 解は2つ', C.green, FILL.green, 14, 34), eb(56, 'b² − 4ac ＝ 0 → 解は1つ（±が消える）', C.blue, FILL.blue, 13, 34), eb(100, 'b² − 4ac ＜ 0 → 解なし', C.red, FILL.red, 14, 34)], [tx(170, '負の数の平方根は、実数にはない', 13, C.red, true)]),
  },
  {
    note: '例題 2x² ＋ 5x ＋ 1 ＝ 0。a＝2、b＝5、c＝1。b²−4ac ＝ 25−8 ＝ 17。x ＝ (−5 ± √17)/4。確かめ：2つの解の和は (−5＋√17)/4 ＋ (−5−√17)/4 ＝ −10/4 ＝ −5/2、これは −b/a と一致します。',
    add: F([eb(10, 'a ＝ 2, b ＝ 5, c ＝ 1', C.gray, FILL.gray, 14, 28), eb(44, 'b² − 4ac ＝ 25 − 8 ＝ 17', C.blue, FILL.blue, 14, 28), eb(78, 'x ＝ (−5 ± √17) / 4', C.green, FILL.green, 16, 32)], [tx(150, '確かめ：2つの解を足すと −10/4 ＝ −5/2', 12, C.purple, true), tx(174, '−b/a ＝ −5/2 と同じ ✓', 12, C.purple), tx(206, '（√の部分が＋と−で消える）', 11, C.gray)]),
  },
  {
    note: '符号のまちがいに注意します。x² − 2x − 4 ＝ 0 は、b ＝ −2、c ＝ −4（すべて足し算の形に読む）。x ＝ (2 ± √(4＋16))/2 ＝ (2 ± √20)/2 ＝ (2 ± 2√5)/2。❓ 約分は両方を2で割るので 1 ± √5。',
    add: F([eb(10, 'x² − 2x − 4 ＝ 0 → a＝1, b＝−2, c＝−4', C.red, FILL.red, 13, 28), eb(44, 'b² − 4ac ＝ 4 ＋ 16 ＝ 20', C.blue, FILL.blue, 14, 28), eb(78, 'x ＝ (2 ± 2√5) / 2', C.gray, FILL.gray, 15, 28), eb(112, 'x ＝ 1 ± √5', C.green, FILL.green, 16, 28)], [tx(170, '分子の 2 と 2√5 の両方を、2 で割る', 13, C.purple, true), tx(198, '片方だけ割ると値が変わってしまう', 12, C.gray)]),
  },
]);

// ── 26. 解き方の選び方 ──
const erabi: DiagramFigure = show([
  {
    note: '二次方程式の解き方は3つあります。平方根の考え・因数分解・解の公式です。どれも同じ答えが出るのに、なぜ使い分けるのでしょう。',
    add: F([eb(12, '① 平方根の考え（2乗 ＝ 数）', C.green, FILL.green, 14, 34), eb(56, '② 因数分解', C.blue, FILL.blue, 15, 34), eb(100, '③ 解の公式', C.purple, FILL.purple, 15, 34)], [tx(172, '答えは同じ。ちがうのは「手間」', 14, C.gray, true)]),
  },
  {
    note: '❓ なぜ ①→②→③ の順に試すの？ 手数の少ない順だからです。①は数行、②は少し考える、③はどんな式にも使えるけれど計算が重い。速いものから試します。',
    add: F([eb(14, '① 平方根：手数 少', C.green, FILL.green, 14, 32, 20, 160), eb(58, '② 因数分解：手数 中', C.blue, FILL.blue, 14, 32, 20, 220), eb(102, '③ 解の公式：手数 大', C.purple, FILL.purple, 14, 32, 20, 280), lb(210, 30, '最速', 12, C.green, 'start', true), lb(258, 74, '速い', 12, C.blue, 'start', true)], [tx(172, 'どんな式にも使えるのは ③ だけ', 13, C.purple, true), tx(200, 'でも計算が重いので、最後の手段', 12, C.gray)]),
  },
  {
    note: '①「(かたまり)² ＝ 数」の形かを見ます。(x ＋ 2)² ＝ 9 なら x ＋ 2 ＝ ±3、x ＝ 1, −5。❓ なぜこれが最速？ すでに2乗の形なので、展開もせず、平方根をとるだけで終わるからです。',
    add: F([eb(12, '(x ＋ 2)² ＝ 9', C.green, FILL.green, 17, 36, 60, 200), ar(160, 52, 160, 76, C.gray), eb(80, 'x ＋ 2 ＝ ±3', C.green, FILL.green, 16, 32, 60, 200), ar(160, 116, 160, 128, C.gray)], [tx(158, 'x ＝ 3−2 ＝ 1 と、x ＝ −3−2 ＝ −5', 14, C.green, true), tx(190, '展開して解くと手数が倍になる', 12, C.gray)]),
  },
  {
    note: '②2乗の形でなければ、右辺を0にして因数分解できるか見ます。x² − 8x ＋ 15 ＝ 0 は (x − 3)(x − 5) ＝ 0。❓ なぜ右辺を0にするの？ 「かけて0なら、どちらかが0」は、0のときだけ言えるからです。',
    add: F([eb(12, 'x² − 8x ＋ 15 ＝ 0', C.blue, FILL.blue, 16, 34, 40, 240), ar(160, 50, 160, 72, C.gray), eb(76, '(x − 3)(x − 5) ＝ 0', C.blue, FILL.blue, 16, 34, 40, 240)], [tx(150, 'x − 3 ＝ 0 または x − 5 ＝ 0', 14, C.blue, true), tx(178, '→ x ＝ 3, 5', 14, C.green, true), tx(208, 'かけて6なら、どちらが何かは決まらない', 11, C.gray)]),
  },
  {
    note: '❓ 因数分解できるかは、どう見分けるの？ 定数項15の約数の組（1と15、3と5）から、足して −8 になる組を探します。−3 と −5 なら、かけて15、足して −8 です。',
    add: F([eb(10, '15 ＝ 1×15 → 足すと 16 ✗', C.gray, FILL.gray, 13, 28), eb(44, '15 ＝ 3×5 → 足すと 8 ✗', C.gray, FILL.gray, 13, 28), eb(78, '15 ＝ (−3)×(−5) → 足すと −8 ○', C.green, FILL.green, 13, 28)], [tx(150, 'かけて定数項、足して x の係数', 14, C.blue, true), tx(180, '3組ほど試して見つからなければ、③へ', 12, C.gray)]),
  },
  {
    note: '❓ 試す前に、分解できるか分かる方法は？ ルートの中身 b² − 4ac が平方数（1, 4, 9, 16, 25 …）かを見ます。x² − 8x ＋ 15 は 64 − 60 ＝ 4 ＝ 2² で平方数。',
    add: F([eb(12, '平方数：1  4  9  16  25  36 …', C.blue, FILL.blue, 14, 32), eb(56, 'x² − 8x ＋ 15：64 − 60 ＝ 4 ＝ 2²', C.green, FILL.green, 13, 32), eb(100, '3x² ＋ 7x ＋ 1：49 − 12 ＝ 37', C.red, FILL.red, 13, 32)], [tx(170, '4 は平方数 ○、37 は平方数ではない ✗', 13, C.purple, true)]),
  },
  {
    note: '❓ なぜ平方数だと因数分解できるの？ 解の公式の √ が外れて、解がきれいな分数になるからです。解が x ＝ p, q と分数で書けるなら、(x − p)(x − q) の形にできます。',
    add: F([eb(12, 'b² − 4ac が平方数', C.blue, FILL.blue, 14, 32), ar(160, 48, 160, 66, C.gray), eb(70, '√（b² − 4ac）が整数 → 解が分数で出る', C.blue, FILL.blue, 14, 32), ar(160, 106, 160, 124, C.gray)], [tx(150, '解が p と q なら (x − p)(x − q) ＝ 0', 14, C.green, true), tx(182, 'だから因数分解できる', 13, C.green)]),
  },
  {
    note: '③どちらも無理なら解の公式です。3x² ＋ 7x ＋ 1 ＝ 0 は b² − 4ac ＝ 37 で平方数ではないので、因数分解は無理。x ＝ (−7 ± √37)/6 です。',
    add: F([eb(12, 'a ＝ 3, b ＝ 7, c ＝ 1', C.gray, FILL.gray, 14, 30), eb(50, 'b² − 4ac ＝ 49 − 12 ＝ 37（平方数ではない）', C.red, FILL.red, 13, 30), eb(88, 'x ＝ (−7 ± √37) / (2×3) ＝ (−7 ± √37)/6', C.green, FILL.green, 13, 34)], [tx(170, '√37 が残る式は、因数分解では出せない', 13, C.purple, true)]),
  },
  {
    note: '見分ける順番をまとめます。① 2乗の形か → 平方根。② 右辺を0にして分解できるか → 因数分解。③ どちらも無理 → 解の公式。',
    add: F([eb(8, '① (かたまり)² ＝ 数 ？', C.green, FILL.green, 13, 30, 20, 190), ar(115, 40, 115, 54, C.gray), eb(58, '② 右辺0で、因数分解できる？', C.blue, FILL.blue, 12, 30, 20, 190), ar(115, 90, 115, 104, C.gray), eb(108, '③ 解の公式', C.purple, FILL.purple, 14, 28, 20, 190), lb(216, 24, 'はい → 平方根', 11, C.green, 'start', true), lb(216, 74, 'はい → 因数分解', 11, C.blue, 'start', true)], [tx(170, 'いいえ、いいえ と進んだら ③', 13, C.gray, true)]),
  },
  {
    note: '練習。x² ＋ 4x − 5 ＝ 0 は b² − 4ac ＝ 16 ＋ 20 ＝ 36 ＝ 6² なので因数分解できます。(x ＋ 5)(x − 1) ＝ 0 より x ＝ −5, 1。確かめ：(−5)²＋4×(−5)−5 ＝ 25−20−5 ＝ 0 ✓。',
    add: F([eb(12, 'x² ＋ 4x − 5 ＝ 0', C.gray, FILL.gray, 15, 30), eb(50, 'b² − 4ac ＝ 16 ＋ 20 ＝ 36 ＝ 6²（平方数）', C.blue, FILL.blue, 13, 30), eb(88, '(x ＋ 5)(x − 1) ＝ 0 → x ＝ −5, 1', C.green, FILL.green, 14, 32)], [tx(170, '−5 と 1：かけて −5、足して 4 ✓', 13, C.purple, true), tx(198, '25 − 20 − 5 ＝ 0（x ＝ −5 の検算）', 12, C.gray)]),
  },
  {
    note: '❓ x² − 6x ＝ 0 のような式は？ 右辺が0で、共通因数 x があるので、x(x − 6) ＝ 0 と分解します。x ＝ 0, 6。x で両辺を割ってしまうと、x ＝ 0 の解を落とします。',
    add: F([eb(12, 'x² − 6x ＝ 0', C.gray, FILL.gray, 16, 30, 60, 200), ar(160, 46, 160, 66, C.gray), eb(70, 'x(x − 6) ＝ 0', C.blue, FILL.blue, 16, 32, 60, 200)], [tx(150, 'x ＝ 0 または x ＝ 6', 15, C.green, true), tx(180, 'x で割ると 0 のとき割れない → x ＝ 0 が消える', 12, C.red), tx(206, '割らずに、くくる', 12, C.gray)]),
  },
  {
    note: 'まとめです。平方根 → 因数分解 → 解の公式の順に試します。迷ったら b² − 4ac を先に計算。平方数なら因数分解、そうでなければ解の公式。',
    add: F([eb(12, '速い順：平方根 → 因数分解 → 解の公式', C.blue, FILL.blue, 13, 34), eb(56, '迷ったら b² − 4ac を計算', C.purple, FILL.purple, 14, 34), eb(100, '平方数 → 分解できる', C.green, FILL.green, 14, 34, 20, 136), eb(100, '平方数でない → 公式', C.red, FILL.red, 13, 34, 164, 136)], [tx(170, '式の形を見てから、方法を選ぶ', 13, C.gray, true)]),
  },
]);

// ── 27. 二次方程式の文章題 ──
const bunshou: DiagramFigure = show([
  {
    note: '例題：縦が横より3cm長い長方形の面積が40cm²です。横の長さを求めます。まず、図にかいて状況をつかみましょう。',
    add: F([bx(60, 14, 100, 100, undefined, C.blue, FILL.blue), lb(110, 122, '横', 12, C.blue), lb(50, 64, '縦', 12, C.blue, 'end')], [tx(160, '縦は横より 3cm 長い、面積は 40cm²', 13, C.gray, true)]),
  },
  {
    note: '❓ なぜ求めたいものを x とおくの？ 分からない数を文字にすれば、式で書けるからです。横を x とすると、縦は「3cm長い」ので x ＋ 3 です。',
    add: F([bx(60, 14, 100, 100, undefined, C.blue, FILL.blue), lb(110, 62, '面積 40', 13, C.gray), lb(110, 124, '横 x', 13, C.blue, 'middle', true), lb(52, 64, '縦\nx＋3', 12, C.red, 'end', true)], [eb(160, '横 ＝ x　縦 ＝ x ＋ 3', C.blue, FILL.blue, 15)]),
  },
  {
    note: '❓ なぜ x(x ＋ 3) ＝ 40 という式になるの？ 長方形の面積は「縦 × 横」だからです。この「面積の関係」が、方程式の材料になります。',
    add: band(140, eb(152, '縦 × 横 ＝ 面積', C.gray, FILL.gray, 14, 28), eb(188, 'x(x ＋ 3) ＝ 40', C.green, FILL.green, 17, 34)),
  },
  {
    note: '展開して x² ＋ 3x ＝ 40。❓ なぜ右辺を0にするの？ 因数分解して「かけて0」の形にすると解けるからです。x² ＋ 3x − 40 ＝ 0。',
    add: F([eb(12, 'x(x ＋ 3) ＝ 40', C.gray, FILL.gray, 16, 32, 60, 200), ar(160, 48, 160, 68, C.gray), eb(72, 'x² ＋ 3x ＝ 40', C.blue, FILL.blue, 16, 32, 60, 200), ar(160, 108, 160, 126, C.gray)], [eb(152, 'x² ＋ 3x − 40 ＝ 0', C.green, FILL.green, 17, 34), tx(204, '40 を左へ移す（右辺を0にする）', 12, C.gray)]),
  },
  {
    note: '因数分解します。かけて −40、足して 3 になる2数は 8 と −5。(x − 5)(x ＋ 8) ＝ 0。だから x ＝ 5 または x ＝ −8 の2つの解が出ます。',
    add: F([eb(12, '−40 ＝ 8 × (−5)、8 ＋ (−5) ＝ 3', C.purple, FILL.purple, 13, 30), eb(50, '(x − 5)(x ＋ 8) ＝ 0', C.blue, FILL.blue, 16, 34), eb(92, 'x ＝ 5　または　x ＝ −8', C.green, FILL.green, 16, 34)], [tx(170, '解が2つ出る。まだ答えではない', 14, C.red, true)]),
  },
  {
    note: '❓ なぜ −8 を捨てるの？ 式は「面積の関係」だけを写していて、「長さは正の数」という条件までは写していないからです。長さが −8cm の長方形はありえません。',
    add: F([ln(30, 60, 290, 60, C.gray, false, 2), bx(44, 40, 60, 36, '−8', C.red, FILL.red, 16), bx(196, 40, 60, 36, '5', C.green, FILL.green, 16), lb(74, 92, '長さが負 ✗', 12, C.red, 'middle', true), lb(226, 92, '長さは正 ○', 12, C.green, 'middle', true), lb(150, 30, '0', 11, C.gray)], [tx(160, '答案に「−8 は長さとして不適」と一言書く', 13, C.red, true)]),
  },
  {
    note: '答えは横 5cm、縦 8cm。確かめ：縦は横より 8−5 ＝ 3cm 長い ✓。面積は 5×8 ＝ 40cm² ✓。条件を2つとも確かめます。',
    add: F([bx(80, 14, 100, 100, undefined, C.green, FILL.green), lb(130, 62, '面積 40', 13, C.gray), lb(130, 124, '横 5', 13, C.green, 'middle', true), lb(72, 64, '縦 8', 13, C.green, 'end', true)], [eb(160, '8 − 5 ＝ 3 ✓　5 × 8 ＝ 40 ✓', C.green, FILL.green, 14)]),
  },
  {
    note: '道の問題。縦10m・横20mの土地に、道幅 x m の道を縦・横1本ずつ通し、残りの畑を144m²にします。❓ 道が十字に通っていても、なぜ簡単に式が立つの？',
    add: F([bx(40, 20, 160, 80, undefined, C.gray, FILL.green), bx(100, 20, 16, 80, undefined, C.gray, FILL.yellow), bx(40, 52, 160, 14, undefined, C.gray, FILL.yellow), lb(258, 60, '縦10m\n横20m\n道幅 x', 11, C.gray)], [tx(150, '道を十字に通す → 畑は4つに分かれる', 13, C.gray, true), tx(178, '面積 144m² を式にしたい', 12, C.gray)]),
  },
  {
    note: '道を土地の端へ寄せても、畑の面積は変わらないからです。すると畑は1つの長方形になり、縦は 10 − x、横は 20 − x。(10 − x)(20 − x) ＝ 144 となります。',
    add: F([bx(60, 14, 140, 70, undefined, C.gray, FILL.yellow), bx(60, 14, 116, 56, '畑', C.green, FILL.green, 14), lb(118, 96, '20 − x', 12, C.green, 'middle', true), lb(54, 42, '10−x', 11, C.green, 'end', true), lb(262, 44, '道を右と下へ\n寄せる', 12, C.gray)], [eb(150, '(10 − x)(20 − x) ＝ 144', C.green, FILL.green, 16, 34), tx(204, '寄せても、畑の面積は同じ', 12, C.gray)]),
  },
  {
    note: '展開すると 200 − 30x ＋ x² ＝ 144。整理して x² − 30x ＋ 56 ＝ 0。(x − 2)(x − 28) ＝ 0 で x ＝ 2, 28。❓ どちらが正しい？ 道幅は縦10mをこえられません。',
    add: F([eb(10, '200 − 30x ＋ x² ＝ 144', C.gray, FILL.gray, 14, 28), eb(44, 'x² − 30x ＋ 56 ＝ 0', C.blue, FILL.blue, 15, 28), eb(78, '(x − 2)(x − 28) ＝ 0', C.blue, FILL.blue, 15, 28), eb(112, 'x ＝ 2, 28', C.green, FILL.green, 15, 24)], [tx(170, '28m の道幅は、縦10mの土地に入らない ✗', 13, C.red, true), tx(198, '道幅は 2m', 14, C.green, true)]),
  },
  {
    note: '確かめ。道幅 2m なら畑は 縦 10−2 ＝ 8m、横 20−2 ＝ 18m。8×18 ＝ 144m² で、条件と一致します。',
    add: F([bx(30, 16, 160, 80, undefined, C.gray, FILL.yellow), bx(30, 16, 144, 64, '畑', C.green, FILL.green, 14), lb(102, 108, '18m', 12, C.green, 'middle', true), lb(24, 48, '8m', 12, C.green, 'end', true)], [eb(150, '8 × 18 ＝ 144 ✓', C.green, FILL.green, 16, 34), tx(204, '道幅 2m', 13, C.green, true)]),
  },
  {
    note: '数の問題も同じです。連続する2つの正の整数の積が72。小さいほうを x として x(x ＋ 1) ＝ 72、x² ＋ x − 72 ＝ 0、(x − 8)(x ＋ 9) ＝ 0、x ＝ 8, −9。正の整数なので 8（大きいほうは 9、8×9 ＝ 72 ✓）。',
    add: F([eb(10, '小さいほう x、大きいほう x ＋ 1', C.gray, FILL.gray, 13, 28), eb(44, 'x(x ＋ 1) ＝ 72 → x² ＋ x − 72 ＝ 0', C.blue, FILL.blue, 13, 28), eb(78, '(x − 8)(x ＋ 9) ＝ 0 → x ＝ 8, −9', C.blue, FILL.blue, 13, 28)], [tx(150, '正の整数だから −9 は不適 → x ＝ 8', 14, C.red, true), tx(180, '8 × 9 ＝ 72 ✓', 13, C.green, true)]),
  },
  {
    note: '手順のまとめ。① 求めたいものを x ② 面積や個数を x の式で ③ 条件から方程式 ④ 解を2つ求める ⑤ 条件に合うか確かめ、合わないほうに「不適」と書く。',
    add: F([eb(6, '① 求めたいものを x とおく', C.blue, FILL.blue, 12, 24, 30, 260), eb(34, '② x の式で表す（面積・個数）', C.blue, FILL.blue, 12, 24, 30, 260), eb(62, '③ 条件から方程式を作る', C.blue, FILL.blue, 12, 24, 30, 260), eb(90, '④ 解を2つ求める', C.blue, FILL.blue, 12, 24, 30, 260), eb(118, '⑤ 合わない解は「不適」', C.red, FILL.red, 12, 22, 30, 260)], [tx(178, '方程式は面積の関係しか写していない', 13, C.gray, true), tx(204, 'だから最後に自分で確かめる', 12, C.gray)]),
  },
]);

// ── 28. 比例の式とグラフ ──
const gH = G(160, 72, 10, 140, 140, 60, 62);
const hirei: DiagramFigure = show([
  {
    note: '比例とは、x が2倍・3倍になると、y も2倍・3倍になる関係です。表で見てみましょう。x ＝ 1, 2, 3 のとき y ＝ 2, 4, 6 です。',
    add: F([bx(30, 20, 60, 30, 'x', C.blue, FILL.blue, 14), bx(94, 20, 60, 30, '1', C.blue, FILL.blue, 14), bx(158, 20, 60, 30, '2', C.blue, FILL.blue, 14), bx(222, 20, 60, 30, '3', C.blue, FILL.blue, 14), bx(30, 56, 60, 30, 'y', C.green, FILL.green, 14), bx(94, 56, 60, 30, '2', C.green, FILL.green, 14), bx(158, 56, 60, 30, '4', C.green, FILL.green, 14), bx(222, 56, 60, 30, '6', C.green, FILL.green, 14)], [tx(150, 'x が2倍 → y も2倍、3倍 → 3倍', 14, C.blue, true), tx(182, 'どの列も y ÷ x ＝ 2', 13, C.gray)]),
  },
  {
    note: '❓ なぜ式は y ＝ ax の形になるの？ y ÷ x がいつも同じ値（ここでは2）だからです。その値を a とおくと、y ÷ x ＝ a、つまり y ＝ a × x です。',
    add: F([eb(12, '2÷1 ＝ 2　4÷2 ＝ 2　6÷3 ＝ 2', C.blue, FILL.blue, 14, 32), ar(160, 48, 160, 68, C.gray), eb(72, 'y ÷ x ＝ a（いつも同じ）', C.purple, FILL.purple, 15, 32), ar(160, 108, 160, 126, C.gray)], [eb(152, 'y ＝ a x', C.green, FILL.green, 20, 40, 80, 160), tx(208, 'a を比例定数という', 12, C.gray)]),
  },
  {
    note: 'この点をグラフに打ちます。(1, 2)、(2, 4)、(3, 6) と、x ＝ 0 のときの (0, 0)。並べると1本の直線の上にのります。',
    add: F([...gH.axes(), gH.pt(1, 2), gH.pt(2, 4), gH.pt(3, 6), gH.pt(0, 0), gH.t(1, 2, '(1, 2)', 5, 6), gH.t(3, 6, '(3, 6)', 5, -2), gH.line(0, 0, 3.4, 6.8, C.blue)], [tx(160, '点が一直線にならぶ', 14, C.blue, true)]),
  },
  {
    note: '❓ なぜ直線になるの？ x が1増えるごとに y はいつも a（ここでは2）ずつ増えるからです。「右へ1、上へ2」が何回くり返されても同じなので、まっすぐです。',
    add: F([...gH.axes(), gH.line(0, 0, 3.4, 6.8, C.blue), gH.pt(0, 0), gH.pt(1, 2), gH.pt(2, 4), gH.pt(3, 6), ln(gH.X(0), gH.Y(0), gH.X(1), gH.Y(0), C.red, false, 2.5), ln(gH.X(1), gH.Y(0), gH.X(1), gH.Y(2), C.red, false, 2.5), ln(gH.X(1), gH.Y(2), gH.X(2), gH.Y(2), C.red, false, 2.5), ln(gH.X(2), gH.Y(2), gH.X(2), gH.Y(4), C.red, false, 2.5), gH.t(0.5, 0, '右1', 0, 12, 10, C.red, 'middle'), gH.t(1, 1, '上2', 5, 0, 10, C.red)], [tx(160, '右へ1、上へ2 のくり返し', 14, C.red, true), tx(190, '増え方が一定 → まっすぐな線', 12, C.gray)]),
  },
  {
    note: '❓ なぜグラフは必ず原点を通るの？ x ＝ 0 を y ＝ ax に入れると y ＝ a × 0 ＝ 0 だからです。a がどんな数でも、x ＝ 0 なら y ＝ 0 になります。',
    add: F([...gH.axes(), gH.pt(0, 0), gH.line(-3, -6, 3.4, 6.8, C.blue), lb(166, 56, '原点(0, 0)', 11, C.red, 'start', true)], [eb(152, 'x ＝ 0 のとき y ＝ a × 0 ＝ 0', C.red, FILL.red, 14), tx(204, '比例のグラフは、原点を通る直線', 12, C.gray)]),
  },
  {
    note: '傾き（a の向き）を見ます。a ＝ 2 は右上がり、a ＝ −2 は右下がり。❓ なぜ向きが変わるの？ a が正なら x が増えると y も増え、a が負なら x が増えると y は減るからです。',
    add: F([...gH.axes(), gH.line(-3, -6, 3.4, 6.8, C.blue), gH.line(-3.2, 6.4, 3, -6, C.red), gH.t(3, 6, 'a＝2', 4, -2, 11, C.blue), gH.t(3, -6, 'a＝−2', 4, 2, 11, C.red)], [tx(160, 'a ＞ 0 右上がり　a ＜ 0 右下がり', 14, C.purple, true)]),
  },
  {
    note: '❓ a の符号で、通る象限はどう決まるの？ a が正なら x と y は同じ符号なので第1・第3象限。a が負なら x と y は反対の符号なので第2・第4象限です。',
    add: F([...gH.axes(), gH.line(-3, -6, 3.4, 6.8, C.blue), gH.line(-3.2, 6.4, 3, -6, C.red), lb(222, 30, '第1', 11, C.blue, 'middle', true), lb(96, 116, '第3', 11, C.blue, 'middle', true), lb(96, 30, '第2', 11, C.red, 'middle', true), lb(222, 116, '第4', 11, C.red, 'middle', true)], [tx(160, 'a ＞ 0 → 第1・第3象限（同じ符号）', 13, C.blue, true), tx(190, 'a ＜ 0 → 第2・第4象限（反対の符号）', 13, C.red, true)]),
  },
  {
    note: '式の求め方。x ＝ 4 のとき y ＝ −6 なら、a ＝ y ÷ x ＝ −6 ÷ 4 ＝ −3/2。よって y ＝ −(3/2)x。❓ 確かめは？ 別の点 (2, −3) で −3 ÷ 2 ＝ −3/2 と、同じになります。',
    add: F([eb(12, 'x ＝ 4, y ＝ −6', C.gray, FILL.gray, 14, 28), eb(46, 'a ＝ y ÷ x ＝ −6 ÷ 4 ＝ −3/2', C.blue, FILL.blue, 14, 30), eb(82, 'y ＝ −(3/2) x', C.green, FILL.green, 16, 32)], [tx(160, '確かめ：x ＝ 2 なら y ＝ −(3/2)×2 ＝ −3', 13, C.purple, true), tx(190, 'a は、どの点で計算しても同じ値', 12, C.gray)]),
  },
  {
    note: '使ってみます。y は x に比例し、x ＝ 2 のとき y ＝ 10。a ＝ 10 ÷ 2 ＝ 5 なので y ＝ 5x。x ＝ 5 のとき y ＝ 25。x が 2.5倍になったので y も 10×2.5 ＝ 25 と、同じ答えです。',
    add: F([eb(12, 'a ＝ 10 ÷ 2 ＝ 5 → y ＝ 5x', C.blue, FILL.blue, 15, 32), eb(56, 'x ＝ 5 → y ＝ 5 × 5 ＝ 25', C.green, FILL.green, 15, 32), eb(100, '確かめ：2 → 5 は 2.5倍、10×2.5 ＝ 25', C.purple, FILL.purple, 13, 32)], [tx(170, '別の方法でも同じ答えになるか見る', 13, C.gray, true)]),
  },
  {
    note: '❓ グラフをかくとき、なぜ2点あればよいの？ 直線は、2点を決めれば1本に決まるからです。比例のグラフは原点を通ると分かっているので、原点ともう1点だけ取れば、直線が引けます。',
    add: F([...gH.axes(), gH.pt(0, 0), gH.pt(2, 4), gH.line(-3, -6, 3.4, 6.8, C.blue, true), gH.t(2, 4, '(2, 4)', 5, 6)], [eb(152, '原点 ＋ もう1点 → 直線', C.blue, FILL.blue, 15), tx(204, 'もう1点は、a の値がわかる整数の点がよい', 11, C.gray)]),
  },
  {
    note: 'まとめ。比例は y ＝ ax。a は y ÷ x でどの点でも同じ。グラフは原点を通る直線で、a が正なら右上がり、負なら右下がりです。',
    add: F([eb(8, 'y ＝ a x（a ＝ y ÷ x）', C.blue, FILL.blue, 15, 32), eb(50, 'グラフは、原点を通る直線', C.green, FILL.green, 15, 32), eb(92, 'a ＞ 0 右上がり ／ a ＜ 0 右下がり', C.purple, FILL.purple, 14, 32)], [tx(170, '「x が n 倍なら y も n 倍」', 14, C.gray, true)]),
  },
]);

// ── 29. 反比例の式とグラフ ──
const gI = G(160, 72, 10, 140, 140, 60, 62);
const gJ = G(40, 126, 18, 20, 250, 8, 116);
const gK = Object.assign(G(40, 130, 12, 20, 260, 4, 124), {
  curve: (): E[] => {
    const pts: [number, number][] = [[0.6, 10], [0.75, 8], [1, 6], [1.5, 4], [2, 3], [3, 2], [4, 1.5], [6, 1], [10, 0.6], [20, 0.3]];
    const g = G(40, 130, 12);
    const out: E[] = [];
    for (let i = 0; i + 1 < pts.length; i++) out.push(g.line(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], C.blue));
    return out;
  },
});
const hanpirei: DiagramFigure = show([
  {
    note: '反比例とは、x が2倍・3倍になると、y が 1/2・1/3 になる関係です。表：x ＝ 1, 2, 3, 6 のとき y ＝ 12, 6, 4, 2。',
    add: F([bx(20, 20, 56, 30, 'x', C.blue, FILL.blue, 14), bx(80, 20, 52, 30, '1', C.blue, FILL.blue, 14), bx(136, 20, 52, 30, '2', C.blue, FILL.blue, 14), bx(192, 20, 52, 30, '3', C.blue, FILL.blue, 14), bx(248, 20, 52, 30, '6', C.blue, FILL.blue, 14), bx(20, 56, 56, 30, 'y', C.green, FILL.green, 14), bx(80, 56, 52, 30, '12', C.green, FILL.green, 14), bx(136, 56, 52, 30, '6', C.green, FILL.green, 14), bx(192, 56, 52, 30, '4', C.green, FILL.green, 14), bx(248, 56, 52, 30, '2', C.green, FILL.green, 14)], [tx(150, 'x が2倍 → y は半分', 14, C.blue, true), tx(182, 'x が6倍 → y は 1/6', 13, C.gray)]),
  },
  {
    note: '❓ x と y の間には、どんな決まりがあるの？ かけ算をしてみると、1×12、2×6、3×4、6×2 と、どれも12です。x × y がいつも同じ値になります。',
    add: F([eb(12, '1 × 12 ＝ 12', C.blue, FILL.blue, 14, 26, 60, 200), eb(42, '2 ×  6 ＝ 12', C.blue, FILL.blue, 14, 26, 60, 200), eb(72, '3 ×  4 ＝ 12', C.blue, FILL.blue, 14, 26, 60, 200), eb(102, '6 ×  2 ＝ 12', C.blue, FILL.blue, 14, 26, 60, 200)], [tx(160, '積 x × y が、いつも同じ', 15, C.purple, true)]),
  },
  {
    note: '❓ なぜ式は y ＝ a/x なの？ x × y ＝ a（いつも同じ値）の両辺を x で割ると y ＝ a/x になるからです。比例のように y ÷ x ではなく、x × y が一定です。',
    add: F([eb(12, 'x × y ＝ a', C.purple, FILL.purple, 18, 36, 60, 200), ar(160, 52, 160, 76, C.gray), tx(68, '両辺を x で割る', 11, C.gray), eb(80, 'y ＝ a / x', C.green, FILL.green, 18, 36, 60, 200)], [tx(160, '比例：y ÷ x が一定（y ＝ ax）', 13, C.blue, true), tx(188, '反比例：x × y が一定（y ＝ a/x）', 13, C.green, true)]),
  },
  {
    note: '面積で見ましょう。たて8・横3の長方形と、たて4・横6の長方形は、どちらも面積が24。反比例では「横が2倍になれば、たては半分」で、面積（x×y）が変わりません。',
    add: F([bx(60, 30, 36, 96, '3×8', C.blue, FILL.blue, 12), bx(160, 78, 72, 48, '6×4', C.green, FILL.green, 13), lb(78, 20, 'x＝3, y＝8', 11, C.blue, 'middle', true), lb(196, 68, 'x＝6, y＝4', 11, C.green, 'middle', true)], [tx(158, '面積 3×8 ＝ 24　6×4 ＝ 24', 14, C.purple, true), tx(188, 'a ＝ 24、式は y ＝ 24/x', 13, C.green, true)]),
  },
  {
    note: 'x ＝ 3 のとき y ＝ 8 なら a ＝ 3×8 ＝ 24。x ＝ 6 のときの y は 24 ÷ 6 ＝ 4。❓ x が2倍（3→6）で y はどうなった？ 8 の半分の 4 です。式の結果と、「2倍で半分」が一致しています。',
    add: F([eb(12, 'a ＝ x × y ＝ 3 × 8 ＝ 24', C.blue, FILL.blue, 14, 32), eb(56, 'y ＝ 24 / 6 ＝ 4', C.green, FILL.green, 15, 32), eb(100, '確かめ：x が2倍 → y は 8 の半分 ＝ 4 ✓', C.purple, FILL.purple, 13, 32)], [tx(170, '2通りの計算が同じ答えになる', 13, C.gray, true)]),
  },
  {
    note: 'グラフにします。y ＝ 6/x の点 (1, 6)、(2, 3)、(3, 2)、(6, 1)。x が正のとき、右下がりのなめらかな曲線になります。',
    add: F([...gJ.axes(), gJ.pt(1, 6), gJ.pt(2, 3), gJ.pt(3, 2), gJ.pt(6, 1), gJ.t(1, 6, '(1, 6)', 6, 2), gJ.t(2, 3, '(2, 3)', 6, -4), gJ.t(3, 2, '(3, 2)', 6, -6), gJ.t(6, 1, '(6, 1)', 0, -9, 11, C.ink, 'middle')], [tx(160, 'y ＝ 6/x の点をならべる', 14, C.blue, true)]),
  },
  {
    note: '❓ なぜ直線ではなく曲線なの？ x が1増えるときの y の減り方が一定でないからです。y ＝ 12/x で見ると、1→2 で 12→6（−6）、2→3 で 6→4（−2）、3→4 で 4→3（−1）と、だんだん減り方が小さくなります。',
    add: F([eb(12, 'x：1 → 2 → 3 → 4', C.blue, FILL.blue, 14, 28), eb(46, 'y：12 → 6 → 4 → 3', C.blue, FILL.blue, 14, 28), eb(80, '減り方：−6, −2, −1', C.red, FILL.red, 15, 28)], [tx(150, '減り方が一定でない → 直線にならない', 14, C.red, true), tx(182, 'x が大きいほど、ゆるやかになる', 12, C.gray)]),
  },
  {
    note: '❓ なぜグラフは y 軸とも x 軸とも交わらないの？ x ＝ 0 だと a/0 になり、0 では割れません。y ＝ 0 にしたくても、a/x ＝ 0 になる x がありません。だから軸に近づくだけで、ふれません。',
    add: F([...gK.axes(), ...gK.curve(), lb(gK.X(1.2), gK.Y(9), 'x＝0 は使えない', 11, C.red, 'start', true), lb(gK.X(14), gK.Y(0.3) - 12, 'y＝0 にはならない', 11, C.red, 'start', true)], [tx(160, '軸に近づくが、ふれない', 14, C.red, true), tx(190, 'x ＝ 0 では割れない・y ＝ 0 にはならない', 12, C.gray)]),
  },
  {
    note: '❓ 原点は通るの？ 通りません。原点は x ＝ 0 の点で、そこは使えないからです。比例（原点を通る直線）との大きなちがいです。',
    add: T([gK.pt(0, 0, C.gray), lb(gK.X(0) + 10, gK.Y(0) - 12, '原点は通らない', 11, C.gray, 'start', true)], [eb(152, '比例：原点を通る直線', C.blue, FILL.blue, 14, 28), eb(188, '反比例：原点を通らない曲線', C.green, FILL.green, 14, 28)]),
  },
  {
    note: '❓ 通る象限は？ a が正なら x と y の符号が同じなので第1・第3象限。a が負なら x と y の符号が反対で、第2・第4象限。曲線は左右に分かれた2本になります（双曲線）。',
    add: F([...gI.axes(), gI.line(0.9, 6.7, 1, 6, C.blue), gI.line(1, 6, 2, 3, C.blue), gI.line(2, 3, 3, 2, C.blue), gI.line(3, 2, 6, 1, C.blue), gI.line(6, 1, 13, 0.46, C.blue), gI.line(-0.9, -6.7, -1, -6, C.blue), gI.line(-1, -6, -2, -3, C.blue), gI.line(-2, -3, -3, -2, C.blue), gI.line(-3, -2, -6, -1, C.blue), gI.line(-6, -1, -13, -0.46, C.blue)], [tx(160, 'a ＞ 0：第1・第3象限（2本の曲線）', 13, C.blue, true), tx(190, 'a ＜ 0：第2・第4象限', 13, C.red, true)]),
  },
  {
    note: '比例定数は「積」です。x ＝ 2 のとき y ＝ 9 なら a ＝ 2×9 ＝ 18。9÷2 とわり算してしまうのはまちがいです。確かめ：x ＝ 3 なら y ＝ 18/3 ＝ 6、x が 1.5倍で y は 9 の 2/3 ＝ 6 ✓。',
    add: F([eb(12, 'a ＝ x × y ＝ 2 × 9 ＝ 18', C.green, FILL.green, 15, 32), eb(56, '9 ÷ 2 ＝ 4.5 は ✗（わり算にしない）', C.red, FILL.red, 13, 32), eb(100, '確かめ：x ＝ 3 → y ＝ 18/3 ＝ 6 ✓', C.purple, FILL.purple, 13, 32)], [tx(170, 'a は「積」。比例と取りちがえない', 13, C.gray, true)]),
  },
  {
    note: 'まとめ。反比例は y ＝ a/x で、a ＝ x × y（積）。グラフは原点を通らない2本の曲線で、軸にふれません。a が正なら第1・第3、負なら第2・第4象限です。',
    add: F([eb(8, 'y ＝ a/x　　a ＝ x × y', C.blue, FILL.blue, 15, 32), eb(50, 'グラフ：原点を通らない2本の曲線', C.green, FILL.green, 14, 32), eb(92, 'a ＞ 0：第1・3　a ＜ 0：第2・4', C.purple, FILL.purple, 14, 32)], [tx(170, '「x が n 倍なら y は 1/n」', 14, C.gray, true)]),
  },
]);

// ── 30. 座標と象限 ──
const gQ = G(160, 72, 16, 140, 140, 64, 64);
const gQ5 = G(160, 76, 12, 140, 140, 60, 66);
const zahyou: DiagramFigure = show([
  {
    note: '平面の上の点の場所を、2つの数で表す約束が座標です。横の線を x 軸、たての線を y 軸といい、交わる点が原点 O です。',
    add: F([...gQ.axes(), lb(gQ.X(0) + 128, gQ.Y(0) - 10, 'x軸', 11, C.gray, 'end', true), lb(gQ.X(0) - 6, gQ.Y(0) - 60, 'y軸', 11, C.gray, 'end', true)], [tx(160, '軸が2本 → 場所を決める数も2つ', 14, C.gray, true)]),
  },
  {
    note: '❓ なぜ2つの数が要るの？ 「右へ何、上へ何」と、横と縦の2方向を言わないと場所が決まらないからです。点(3, 2) は、右へ3、上へ2の点です。',
    add: F([...gQ.axes(), ln(gQ.X(0), gQ.Y(0), gQ.X(3), gQ.Y(0), C.blue, true, 2), ln(gQ.X(3), gQ.Y(0), gQ.X(3), gQ.Y(2), C.blue, true, 2), gQ.pt(3, 2), gQ.t(3, 2, '(3, 2)', 6, -6), gQ.t(1.5, 0, '右へ3', 0, 12, 10, C.blue, 'middle'), gQ.t(3, 1, '上へ2', 6, 0, 10, C.blue)], [tx(160, '(x座標, y座標) ＝ (右へ, 上へ)', 14, C.blue, true)]),
  },
  {
    note: '軸は平面を4つの部分に分けます。これが象限です。❓ 数え方の決まりは？ 右上を第1象限として、反時計回り（時計の針と逆）に、第2・第3・第4と数えます。',
    add: F([...gQ.axes(), lb(230, 30, '第1象限\n(＋, ＋)', 11, C.blue, 'middle', true), lb(90, 30, '第2象限\n(−, ＋)', 11, C.green, 'middle', true), lb(90, 114, '第3象限\n(−, −)', 11, C.purple, 'middle', true), lb(230, 114, '第4象限\n(＋, −)', 11, C.red, 'middle', true)], [tx(160, '右上から反時計回りに 1・2・3・4', 14, C.gray, true)]),
  },
  {
    note: '❓ なぜ（＋, −）などの符号で象限が決まるの？ x が正なら y 軸の右、負なら左。y が正なら x 軸の上、負なら下だからです。符号の組み合わせが、どの領域にいるかを表しています。',
    add: F([...gQ.axes(), lb(230, 30, '右・上', 12, C.blue, 'middle', true), lb(90, 30, '左・上', 12, C.green, 'middle', true), lb(90, 114, '左・下', 12, C.purple, 'middle', true), lb(230, 114, '右・下', 12, C.red, 'middle', true)], [tx(158, 'x：正 ＝ 右　負 ＝ 左', 13, C.blue, true), tx(186, 'y：正 ＝ 上　負 ＝ 下', 13, C.blue, true)]),
  },
  {
    note: '例。点(−4, 5)は、x が負（左）、y が正（上）なので第2象限です。符号を見れば、図をかかなくても象限が分かります。',
    add: F([...gQ5.axes(), gQ5.pt(-4, 5), ln(gQ5.X(-4), gQ5.Y(5), gQ5.X(-4), gQ5.Y(0), C.gray, true, 1.5), ln(gQ5.X(-4), gQ5.Y(5), gQ5.X(0), gQ5.Y(5), C.gray, true, 1.5), gQ5.t(-4, 5, '(−4, 5)', -6, 4, 11, C.red, 'end'), lb(70, 60, '第2象限', 11, C.green, 'middle', true)], [eb(152, 'x ＜ 0、y ＞ 0 → 第2象限', C.green, FILL.green, 15), tx(204, '左へ4、上へ5 の点', 12, C.gray)]),
  },
  {
    note: '❓ 点(0, 3)はどの象限？ どれでもありません。象限は「軸で区切った4つの内側」なので、軸そのものは境目で、どこにも入りません。x か y のどちらかが0なら軸の上です。',
    add: F([...gQ.axes(), gQ.pt(0, 3), gQ.t(0, 3, '(0, 3)', 6, -4), gQ.pt(0, 0, C.gray), lb(230, 30, '第1', 11, C.gray), lb(90, 30, '第2', 11, C.gray), lb(90, 114, '第3', 11, C.gray), lb(230, 114, '第4', 11, C.gray)], [tx(160, '軸の上の点は、どの象限でもない', 14, C.red, true), tx(190, '原点(0, 0)も同じ', 12, C.gray)]),
  },
  {
    note: '対称移動。A(3, −2) を x 軸について折り返すと (3, 2)。❓ なぜ y の符号だけ変わるの？ x 軸で折り返すと、横の位置は動かず、x 軸からの距離2はそのままで、向きだけ上下が反対になるからです。',
    add: F([...gQ.axes(), gQ.pt(3, -2, C.blue), gQ.pt(3, 2, C.red), ln(gQ.X(3), gQ.Y(-2), gQ.X(3), gQ.Y(2), C.gray, true, 1.5), gQ.t(3, -2, 'A(3, −2)', 6, 8), gQ.t(3, 2, '(3, 2)', 6, -6, 11, C.red)], [tx(160, 'x 軸対称：x そのまま、y の符号が変わる', 13, C.red, true), tx(190, '(3, −2) → (3, 2)', 13, C.gray)]),
  },
  {
    note: 'y 軸について折り返すと、A(3, −2) は (−3, −2)。❓ 今度はなぜ x の符号だけ変わるの？ y 軸で折り返すと、高さは動かず、y 軸からの距離3の向きだけ左右が反対になるからです。',
    add: F([...gQ.axes(), gQ.pt(3, -2, C.blue), gQ.pt(-3, -2, C.green), ln(gQ.X(3), gQ.Y(-2), gQ.X(-3), gQ.Y(-2), C.gray, true, 1.5), gQ.t(3, -2, 'A(3, −2)', 6, 8), gQ.t(-3, -2, '(−3, −2)', -6, 8, 11, C.green, 'end')], [tx(160, 'y 軸対称：y そのまま、x の符号が変わる', 13, C.green, true), tx(190, '(3, −2) → (−3, −2)', 13, C.gray)]),
  },
  {
    note: '原点について対称とは、原点をはさんで反対側の、同じ距離の点です。(2, 7) なら、右へ2・上へ7 の反対の、左へ2・下へ7 で (−2, −7)。x も y も符号が変わります。',
    add: F([...gQ.axes(), gQ.pt(1.5, 3.8, C.blue), gQ.pt(-1.5, -3.8, C.purple), ln(gQ.X(1.5), gQ.Y(3.8), gQ.X(-1.5), gQ.Y(-3.8), C.gray, true, 1.5), lb(gQ.X(1.5) + 6, gQ.Y(3.8) - 4, '(2, 7)', 11, C.blue, 'start', true), lb(gQ.X(-1.5) - 6, gQ.Y(-3.8) + 8, '(−2, −7)', 11, C.purple, 'end', true)], [tx(160, '原点対称：x も y も符号が変わる', 14, C.purple, true), tx(190, '（図は目もりを縮めて描いています）', 11, C.gray)]),
  },
  {
    note: '❓ 原点対称は、なぜ両方の符号が変わるの？ x 軸で折り返し、さらに y 軸で折り返す、の2回を続けたのと同じだからです。1回目で y の符号、2回目で x の符号が変わります。',
    add: F([...gQ.axes(), gQ.pt(3, -2, C.blue), gQ.pt(3, 2, C.red), gQ.pt(-3, 2, C.purple), ar(gQ.X(3), gQ.Y(-2) - 6, gQ.X(3), gQ.Y(2) + 6, C.red), ar(gQ.X(3) - 6, gQ.Y(2), gQ.X(-3) + 6, gQ.Y(2), C.green), gQ.t(3, -2, '(3, −2)', 6, 8), gQ.t(-3, 2, '(−3, 2)', -6, -6, 11, C.purple, 'end')], [tx(160, 'x 軸で折り返す → y 軸で折り返す', 13, C.purple, true), tx(190, '(3, −2) → (3, 2) → (−3, 2)', 13, C.gray)]),
  },
  {
    note: 'A(3, −2)（第4象限）を3通りに移すと、x 軸対称は第1象限、y 軸対称は第3象限、原点対称は第2象限に入ります。符号を書きかえれば、象限もすぐに分かります。',
    add: F([...gQ.axes(), gQ.pt(3, -2, C.blue), gQ.pt(3, 2, C.red), gQ.pt(-3, -2, C.green), gQ.pt(-3, 2, C.purple), gQ.t(3, -2, 'A', 6, 8), gQ.t(3, 2, 'x軸', 6, -6, 10, C.red), gQ.t(-3, -2, 'y軸', -6, 8, 10, C.green, 'end'), gQ.t(-3, 2, '原点', -6, -6, 10, C.purple, 'end')], [tx(156, 'x 軸対称 (3, 2)　　y 軸対称 (−3, −2)', 12, C.gray, true), tx(182, '原点対称 (−3, 2)', 12, C.gray, true)]),
  },
  {
    note: 'まとめ。象限は右上から反時計回りに第1〜第4。軸の上の点はどこにも入りません。x 軸対称は y の符号、y 軸対称は x の符号、原点対称は両方の符号が変わります。',
    add: F([eb(8, '象限：右上から反時計回りに1〜4', C.blue, FILL.blue, 14, 28), eb(42, '軸の上の点はどの象限にも入らない', C.red, FILL.red, 13, 28), eb(76, 'x 軸対称 → y の符号だけ変わる', C.green, FILL.green, 13, 28), eb(110, 'y 軸対称 → x の符号だけ変わる', C.green, FILL.green, 13, 28)], [tx(168, '原点対称 → x も y も符号が変わる', 13, C.purple, true), tx(196, '折り返す軸をまたぐ向きの数の符号が変わる', 11, C.gray)]),
  },
]);

// ── 31. 比例・反比例の利用（歯車・仕事量） ──
const riyou: DiagramFigure = show([
  {
    note: '比例と反比例は、どちらの関係かを見分けるのが最初の一歩です。見分け方は「1つが増えたとき、もう1つは増えるか減るか」です。',
    add: F([eb(12, '増えたら増える → 比例', C.blue, FILL.blue, 15, 34), eb(56, '増えたら減る → 反比例', C.green, FILL.green, 15, 34)], [tx(130, '針金の長さと重さ → 長いほど重い（比例）', 12, C.blue, true), tx(160, '人数と日数 → 人が多いほど早く終わる', 12, C.green, true), tx(190, '（日数は減る＝反比例）', 12, C.green, true)]),
  },
  {
    note: '❓ なぜ針金の長さと重さは比例なの？ 針金は1mあたりの重さが決まっているので、2倍の長さなら2倍の重さになるからです。1mが50gなら、2mは100g。',
    add: F([bx(20, 30, 50, 12, undefined, C.gray, FILL.gray), bx(20, 70, 100, 12, undefined, C.gray, FILL.gray), bx(20, 110, 150, 12, undefined, C.gray, FILL.gray), lb(190, 36, '1m → 50g', 12, C.blue, 'start', true), lb(190, 76, '2m → 100g', 12, C.blue, 'start', true), lb(190, 116, '3m → 150g', 12, C.blue, 'start', true)], [tx(160, '長さが n 倍 → 重さも n 倍', 14, C.blue, true), tx(190, '1m あたりの重さがいつも同じ', 12, C.gray)]),
  },
  {
    note: '❓ なぜ人数と日数は反比例なの？ 仕事の全体の量が決まっているからです。「人数 × 日数」が仕事の全体の量で、いつも同じ。6人で12日なら 6×12 ＝ 72 です。',
    add: F([bx(20, 30, 96, 84, '6人 × 12日', C.blue, FILL.blue, 13), lb(68, 124, '＝ 72（全体の量）', 11, C.gray, 'middle', true), lb(200, 40, '人数 × 日数 ＝ 72', 13, C.purple, 'start', true), lb(200, 70, 'が、いつも同じ', 13, C.purple, 'start', true)], [tx(160, '全体の量が決まっている → 反比例', 14, C.green, true)]),
  },
  {
    note: '9人でやると何日？ 9×x ＝ 72 より x ＝ 8日。長方形で見ると、たて（人数）が 6→9 に増えた分、横（日数）が 12→8 に減り、面積72は同じです。',
    add: F([bx(20, 34, 72, 96, '6×12', C.blue, FILL.blue, 13), bx(130, 34, 96, 64, '9×8', C.green, FILL.green, 13), lb(56, 24, '6人 12日', 11, C.blue, 'middle', true), lb(178, 24, '9人 8日', 11, C.green, 'middle', true)], [tx(160, '6 × 12 ＝ 72　　9 × x ＝ 72 → x ＝ 8', 13, C.green, true), tx(190, '確かめ：9 × 8 ＝ 72 ✓', 13, C.purple, true)]),
  },
  {
    note: '❓ 人が3人増えたから、日数を3日減らして 12−3 ＝ 9日、ではだめなの？ だめです。反比例は引き算ではなく、かけ算・わり算の関係だからです。実際は 8日で、9日ではありません。',
    add: F([eb(12, '12 − 3 ＝ 9日 ✗', C.red, FILL.red, 16, 34, 40, 240), eb(56, '72 ÷ 9 ＝ 8日 ○', C.green, FILL.green, 16, 34, 40, 240)], [tx(130, '人数が 6→9 で 1.5倍', 13, C.blue, true), tx(158, '日数は 1/1.5 ＝ 2/3 倍 → 12 × 2/3 ＝ 8', 13, C.blue, true), tx(190, '「何倍」で考える', 12, C.gray)]),
  },
  {
    note: '歯車の例。歯数24の歯車が5回転する間に、歯数15の歯車は何回転する？ ❓ なぜ反比例なの？ かみ合っている間は、動く歯の数が両方で同じだからです。',
    add: F([ci(90, 70, 46, '24', C.blue, FILL.blue, 18), ci(203, 70, 32, '15', C.green, FILL.green, 16), lb(90, 128, '5回転', 12, C.blue, 'middle', true), lb(203, 116, 'x 回転', 12, C.green, 'middle', true)], [tx(160, 'かみ合う歯の数は、どちらも同じ', 14, C.purple, true)]),
  },
  {
    note: '動いた歯の数は、歯数 × 回転数。左は 24×5 ＝ 120、右は 15×x。同じなので 15x ＝ 120、x ＝ 8回転。歯数の少ない小さい歯車のほうが、たくさん回ります。',
    add: F([ci(90, 70, 46, '24', C.blue, FILL.blue, 18), ci(203, 70, 32, '15', C.green, FILL.green, 16)], [eb(150, '24 × 5 ＝ 120 ＝ 15 × x', C.purple, FILL.purple, 15), tx(200, 'x ＝ 8 回転', 15, C.green, true)]),
  },
  {
    note: '確かめ。歯数が 24→15 と 0.625倍（5/8）になったので、回転数は 5 の 8/5 倍 ＝ 8。また 15 は 24 より小さいので、5回転より多く回るはず。8 は 5 より大きく、たしかに合います。',
    add: F([eb(12, '歯数 24 → 15（5/8倍）', C.blue, FILL.blue, 14, 30), eb(50, '回転数は 8/5倍 → 5 × 8/5 ＝ 8', C.green, FILL.green, 14, 30), eb(88, '小さい歯車ほど、たくさん回る ✓', C.purple, FILL.purple, 14, 30)], [tx(160, '大きさの見当と、計算が一致するか見る', 13, C.gray, true)]),
  },
  {
    note: '例。ポンプ2台で水そうを満たすのに18分。3台なら何分？ 台数 × 時間が一定（全体の量）なので 2×18 ＝ 36。3×x ＝ 36 より x ＝ 12分。確かめ：3×12 ＝ 36 ✓。',
    add: F([eb(12, '台数 × 時間 ＝ 全体の量', C.purple, FILL.purple, 14, 30), eb(50, '2 × 18 ＝ 36', C.blue, FILL.blue, 15, 30), eb(88, '3 × x ＝ 36 → x ＝ 12分', C.green, FILL.green, 15, 30)], [tx(160, '台数が 1.5倍 → 時間は 18 × 2/3 ＝ 12', 13, C.purple, true), tx(190, '確かめ：3 × 12 ＝ 36 ✓', 13, C.gray)]),
  },
  {
    note: '比例の例。針金5mで重さ200g。8mなら何g？ 1mあたり 200÷5 ＝ 40g なので 8×40 ＝ 320g。確かめ：長さが 8/5 ＝ 1.6倍なので 200×1.6 ＝ 320 ✓。',
    add: F([eb(12, '1m あたり 200 ÷ 5 ＝ 40g', C.blue, FILL.blue, 15, 30), eb(50, '8m → 8 × 40 ＝ 320g', C.green, FILL.green, 15, 30), eb(88, '確かめ：200 × 1.6 ＝ 320 ✓', C.purple, FILL.purple, 15, 30)], [tx(160, '比例：1あたりの量を先に求める', 13, C.gray, true)]),
  },
  {
    note: '手順をまとめます。① 増えたとき、増えるか減るかを見る ② 比例なら y ＝ ax、反比例なら y ＝ a/x ③ 1組の値から a を出す ④ 求める値を出して確かめる。',
    add: F([eb(6, '① 増える？ 減る？', C.blue, FILL.blue, 13, 26, 30, 260), eb(36, '② 比例 y＝ax　反比例 y＝a/x', C.blue, FILL.blue, 13, 26, 30, 260), eb(66, '③ 1組の値から a を出す', C.blue, FILL.blue, 13, 26, 30, 260), eb(96, '④ 答えを出して、確かめる', C.green, FILL.green, 13, 26, 30, 260)], [tx(160, '反比例は「積が一定」', 14, C.purple, true), tx(190, '引き算ではなく、何倍かで考える', 12, C.gray)]),
  },
]);

// ── 32. 一次関数の式と傾き・切片 ──
const gL = G(160, 118, 14, 140, 140, 18, 100);
const gL5 = G(160, 96, 14, 140, 140, 40, 88);
const gL6 = G(60, 124, 9, 50, 240, 8, 116);
const gL2 = G(160, 90, 10, 140, 140, 44, 82);
const itiji: DiagramFigure = show([
  {
    note: '一次関数は y ＝ ax ＋ b の形です。比例 y ＝ ax に、決まった数 b を足したものです。y ＝ 2x ＋ 1 の表：x ＝ 0, 1, 2, 3 のとき y ＝ 1, 3, 5, 7。',
    add: F([bx(20, 20, 56, 30, 'x', C.blue, FILL.blue, 14), bx(80, 20, 52, 30, '0', C.blue, FILL.blue, 14), bx(136, 20, 52, 30, '1', C.blue, FILL.blue, 14), bx(192, 20, 52, 30, '2', C.blue, FILL.blue, 14), bx(248, 20, 52, 30, '3', C.blue, FILL.blue, 14), bx(20, 56, 56, 30, 'y', C.green, FILL.green, 14), bx(80, 56, 52, 30, '1', C.green, FILL.green, 14), bx(136, 56, 52, 30, '3', C.green, FILL.green, 14), bx(192, 56, 52, 30, '5', C.green, FILL.green, 14), bx(248, 56, 52, 30, '7', C.green, FILL.green, 14)], [tx(150, 'x が 1 増えるごとに y は 2 増える', 14, C.blue, true), tx(182, 'y ＝ 2x ＋ 1', 14, C.green, true)]),
  },
  {
    note: '❓ なぜ a は「x が1増えたときの y の増え方」なの？ x が1増えると ax は a だけ増え、b は変わらないからです。y ＝ 2x ＋ 1 なら、2x が 2 増え、＋1 は動きません。',
    add: F([eb(12, 'x → x ＋ 1', C.blue, FILL.blue, 14, 30, 60, 200), eb(50, 'ax ＋ b → a(x ＋ 1) ＋ b ＝ ax ＋ b ＋ a', C.green, FILL.green, 12, 30), eb(88, '増えた分は、ちょうど a', C.red, FILL.red, 15, 30, 60, 200)], [tx(160, 'b は足されているだけで、動かない', 13, C.gray, true), tx(190, 'だから a を「傾き」（増え方）と呼ぶ', 12, C.gray)]),
  },
  {
    note: 'グラフにします。(0, 1)、(1, 3)、(2, 5)、(3, 7) を結ぶと直線。「右へ1、上へ2」の階段で、y ＝ 2x のグラフを上へ1だけずらした形です。',
    add: F([...gL.axes(), gL.pt(0, 1), gL.pt(1, 3), gL.pt(2, 5), gL.pt(3, 7), gL.line(-0.6, -0.2, 3.2, 7.4, C.blue), gL.t(0, 1, '(0, 1)', -5, 8, 11, C.ink, 'end'), gL.t(3, 7, '(3, 7)', 5, 4)], [tx(160, 'y ＝ 2x ＋ 1', 15, C.blue, true), tx(190, '比例 y ＝ 2x を、上へ 1 ずらした直線', 12, C.gray)]),
  },
  {
    note: '❓ なぜ切片は b なの？ 切片は y 軸と交わる点で、そこは x ＝ 0。y ＝ a×0 ＋ b ＝ b だからです。y ＝ 2x ＋ 1 なら (0, 1) で y 軸と交わります。',
    add: F([...gL.axes(), gL.line(-0.6, -0.2, 3.2, 7.4, C.blue), gL.pt(0, 1, C.red), lb(gL.X(0) - 6, gL.Y(1) - 4, '切片 (0, b)', 11, C.red, 'end', true)], [eb(152, 'x ＝ 0 → y ＝ a × 0 ＋ b ＝ b', C.red, FILL.red, 14), tx(204, '切片 ＝ y 軸と交わる点の高さ', 12, C.gray)]),
  },
  {
    note: '傾きが負の場合。y ＝ −3x ＋ 5 は (0, 5)、(1, 2)、(2, −1)。「右へ1、下へ3」なので右下がり。❓ 下へ動くのは、傾きが負だと x が増えると y が減るからです。',
    add: F([...gL5.axes(), gL5.pt(0, 5), gL5.pt(1, 2), gL5.pt(2, -1), gL5.line(-0.2, 5.6, 2.2, -1.6, C.red), gL5.t(0, 5, '(0, 5)', -5, 0, 11, C.ink, 'end'), gL5.t(1, 2, '(1, 2)', 5, -2), gL5.t(2, -1, '(2, −1)', 5, 4)], [tx(160, '傾き −3：右へ1、下へ3', 14, C.red, true), tx(190, 'y ＝ −3x ＋ 5', 13, C.gray)]),
  },
  {
    note: '2点から傾きを求めます。(1, 3) と (4, 12)。❓ なぜ「y の増加量 ÷ x の増加量」なの？ 直線は増え方が一定なので、区間の x の増え（3）と y の増え（9）を比べれば、1あたりの増え方が出るからです。9÷3 ＝ 3。',
    add: F([...gL6.axes(), gL6.line(-0.3, -0.9, 4.3, 12.9, C.blue), gL6.pt(1, 3), gL6.pt(4, 12), ln(gL6.X(1), gL6.Y(3), gL6.X(4), gL6.Y(3), C.green, false, 2.5), ln(gL6.X(4), gL6.Y(3), gL6.X(4), gL6.Y(12), C.red, false, 2.5), gL6.t(2.5, 3, '3', 0, 12, 12, C.green, 'middle'), gL6.t(4, 7.5, '9', 6, 0, 12, C.red)], [eb(152, '傾き ＝ 9 ÷ 3 ＝ 3', C.blue, FILL.blue, 16), tx(204, '確かめ：(1, 3) から右へ1、上へ3 → (2, 6)', 11, C.gray)]),
  },
  {
    note: '❓ 引く順番はどうなるの？ 分子も分母も「あとの点 − はじめの点」でそろえます。(12−3)÷(4−1) ＝ 3。片方だけ逆にして (3−12)÷(4−1) ＝ −3 とすると、符号がまちがいます。',
    add: F([eb(12, '(12 − 3) ÷ (4 − 1) ＝ 3 ○', C.green, FILL.green, 14, 32), eb(56, '(3 − 12) ÷ (4 − 1) ＝ −3 ✗', C.red, FILL.red, 14, 32), eb(100, '(3 − 12) ÷ (1 − 4) ＝ 3 ○', C.green, FILL.green, 14, 32)], [tx(170, '分子と分母の引く順をそろえる', 14, C.purple, true)]),
  },
  {
    note: '平行の見分け。y ＝ 4x ＋ 1 と y ＝ 4x − 2 は、傾きが同じで切片がちがう。2本のグラフは平行で、交わりません。',
    add: F([...gL2.axes(), gL2.line(-0.75, -2, 1.5, 7, C.blue), gL2.line(-0.5, -4, 2, 6, C.red), lb(gL2.X(1.5) + 6, gL2.Y(7) - 2, 'y＝4x＋1', 11, C.blue, 'start', true), lb(gL2.X(2) + 6, gL2.Y(6) + 2, 'y＝4x−2', 11, C.red, 'start', true)], [tx(160, '傾き 4 と 4（同じ）、切片 1 と −2', 13, C.purple, true)]),
  },
  {
    note: '❓ なぜ傾きが同じなら平行なの？ どちらも右へ1で4上がるので、2本の間の上下のはばがいつも同じ（ここでは3）のまま、近づいたり離れたりしないからです。',
    add: F([...gL2.axes(), gL2.line(-0.75, -2, 1.5, 7, C.blue), gL2.line(-0.5, -4, 2, 6, C.red), ln(gL2.X(0), gL2.Y(1), gL2.X(0), gL2.Y(-2), C.purple, false, 3), ln(gL2.X(1), gL2.Y(5), gL2.X(1), gL2.Y(2), C.purple, false, 3), gL2.t(0, -0.5, '3', 6, 0, 12, C.purple), gL2.t(1, 3.5, '3', 6, 0, 12, C.purple)], [tx(160, '上下のはばは、いつも 3', 14, C.purple, true), tx(190, '1 − (−2) ＝ 3 ＝ 切片の差', 12, C.gray)]),
  },
  {
    note: '傾きの大きさと急さ。y ＝ x、y ＝ 2x、y ＝ 4x を比べると、a の絶対値が大きいほど急です。❓ 同じ横の動き（右へ1）で、上下に動く量が大きいからです。',
    add: F([...gL2.axes(), gL2.line(-4, -4, 7, 7, C.blue), gL2.line(-2, -4, 3.5, 7, C.green), gL2.line(-1, -4, 1.75, 7, C.red), lb(gL2.X(7) - 4, gL2.Y(7) + 8, 'a＝1', 11, C.blue, 'end', true), lb(gL2.X(3.5) + 6, gL2.Y(7) + 2, 'a＝2', 11, C.green, 'start', true), lb(gL2.X(1.75) - 4, gL2.Y(7) + 2, 'a＝4', 11, C.red, 'end', true)], [tx(160, '右へ1で、1・2・4 上がる', 14, C.purple, true)]),
  },
  {
    note: 'まとめ。y ＝ ax ＋ b の a は傾き（x が1増えたときの y の増え）、b は切片（y 軸と交わる高さ）。傾き ＝ y の増加量 ÷ x の増加量。傾きが同じなら平行です。',
    add: F([eb(8, 'y ＝ ax ＋ b', C.blue, FILL.blue, 17, 32), eb(46, 'a：傾き ＝ y の増加量 ÷ x の増加量', C.green, FILL.green, 13, 30), eb(82, 'b：切片 ＝ x ＝ 0 のときの y', C.red, FILL.red, 13, 30), eb(118, '傾きが同じ → 平行', C.purple, FILL.purple, 14, 26)], [tx(180, '傾きは「順序をそろえて」引く', 13, C.gray, true)]),
  },
]);

// ── 33. 2点から一次関数の式を求める ──
const gP = G(40, 104, 11, 30, 240, 8, 96);
const niten: DiagramFigure = show([
  {
    note: '2点(2, 1)と(5, 7)を通る直線の式を求めます。y ＝ ax ＋ b の a と b を決めればよいので、まず「何が分かれば式が決まるか」から考えます。',
    add: F([...gP.axes(), gP.pt(2, 1), gP.pt(5, 7), gP.t(2, 1, '(2, 1)', -6, 10, 11, C.ink, 'end'), gP.t(5, 7, '(5, 7)', 6, 0)], [tx(160, '通る点が 2 つ分かっている', 14, C.blue, true), tx(190, '式 y ＝ ax ＋ b の a と b を出したい', 12, C.gray)]),
  },
  {
    note: '❓ なぜ2点で決まるの？ 分からない数が a と b の2つなので、式が2本あれば決まります。点が1つ通るごとに式が1本できるので、2点で2本そろいます。図でも、2点を結ぶ直線は1本だけです。',
    add: T([gP.line(0.4, -2.2, 6.2, 9.4, C.blue)], [eb(152, '1点 → 式1本　2点 → 式2本', C.blue, FILL.blue, 14), tx(204, '未知数 a、b が2つ ＝ 式2本で決まる', 12, C.gray)]),
  },
  {
    note: 'ステップ1：傾き。横は 5−2 ＝ 3、縦は 7−1 ＝ 6。a ＝ 6 ÷ 3 ＝ 2。右へ3進むと上へ6、つまり右へ1で上へ2です。',
    add: T([ln(gP.X(2), gP.Y(1), gP.X(5), gP.Y(1), C.green, false, 2.5), ln(gP.X(5), gP.Y(1), gP.X(5), gP.Y(7), C.red, false, 2.5), gP.t(3.5, 1, '3', 0, 12, 12, C.green, 'middle'), gP.t(5, 4, '6', 6, 0, 12, C.red)], [eb(152, '傾き a ＝ (7 − 1) ÷ (5 − 2) ＝ 2', C.blue, FILL.blue, 14), tx(204, '切片 b は、まだ分からない', 12, C.gray)]),
  },
  {
    note: '❓ なぜ傾きを先に求めるの？ 2点の y の差をとると b が消えるからです。(7) − (1) ＝ (5a ＋ b) − (2a ＋ b) ＝ 3a なので、6 ＝ 3a。b を知らなくても a だけが出ます。',
    add: F([eb(12, '7 ＝ 5a ＋ b', C.blue, FILL.blue, 15, 30, 60, 200), eb(46, '1 ＝ 2a ＋ b', C.blue, FILL.blue, 15, 30, 60, 200), ln(60, 84, 260, 84, C.gray, false, 1.5), eb(90, '7 − 1 ＝ 3a　（b が消える）', C.red, FILL.red, 14, 30, 30, 260)], [tx(150, '6 ＝ 3a → a ＝ 2', 15, C.green, true), tx(182, '引き算で b を消すのが、ちょうど「傾き」', 12, C.gray)]),
  },
  {
    note: 'ステップ2：切片。y ＝ 2x ＋ b に (2, 1) を入れて 1 ＝ 4 ＋ b、b ＝ −3。❓ なぜ点を代入していいの？ 点は直線の上にあるので、その座標は式を成り立たせるからです。',
    add: F([eb(12, 'y ＝ 2x ＋ b', C.blue, FILL.blue, 16, 30, 60, 200), ar(160, 46, 160, 66, C.gray), lb(210, 58, '(2, 1) を代入', 11, C.red, 'start'), eb(70, '1 ＝ 2 × 2 ＋ b', C.red, FILL.red, 15, 30, 60, 200), ar(160, 104, 160, 124, C.gray)], [eb(152, 'b ＝ 1 − 4 ＝ −3', C.green, FILL.green, 17, 34), tx(206, '点が直線上 ＝ 式を満たす', 12, C.gray)]),
  },
  {
    note: '式は y ＝ 2x − 3。グラフでは、切片 (0, −3) を通って、右へ1で上へ2の直線です。',
    add: F([...gP.axes(), gP.line(0.2, -2.6, 6.2, 9.4, C.blue), gP.pt(2, 1), gP.pt(5, 7), gP.pt(0, -3, C.green), gP.t(2, 1, '(2, 1)', -6, 10, 11, C.ink, 'end'), gP.t(5, 7, '(5, 7)', 6, 0), gP.t(0, -3, '(0, −3)', 6, -2, 11, C.green)], [eb(152, 'y ＝ 2x − 3', C.green, FILL.green, 18, 36, 80, 160), tx(206, '切片 −3、傾き 2', 12, C.gray)]),
  },
  {
    note: '❓ なぜ、使わなかったもう一方の点で確かめるの？ 代入に使った点では、必ず成り立つので確かめになりません。もう1つの点 (5, 7) を入れれば、傾きと切片の両方の計算ミスが見つかります。',
    add: F([eb(12, '(2, 1) は代入に使った → 必ず成り立つ', C.gray, FILL.gray, 13, 30), eb(50, '(5, 7)：2 × 5 − 3 ＝ 7 ✓', C.green, FILL.green, 16, 32), eb(90, '合わなければ a か b がまちがい', C.red, FILL.red, 14, 30)], [tx(160, '使っていない点で検算するのがコツ', 14, C.purple, true)]),
  },
  {
    note: 'べつの型。(0, 4) と (2, 10) を通る直線。傾きは (10−4)/(2−0) ＝ 3。❓ 切片は？ (0, 4) は x ＝ 0 の点なので、y 軸との交点、つまり切片がそのまま 4 です。y ＝ 3x ＋ 4。',
    add: F([eb(12, '傾き ＝ (10 − 4) ÷ (2 − 0) ＝ 3', C.blue, FILL.blue, 14, 30), eb(50, 'x ＝ 0 の点 (0, 4) → 切片 b ＝ 4', C.red, FILL.red, 14, 30), eb(88, 'y ＝ 3x ＋ 4', C.green, FILL.green, 16, 32)], [tx(160, '確かめ：x ＝ 2 → 3×2＋4 ＝ 10 ✓', 14, C.purple, true), tx(190, 'x ＝ 0 の点があれば、代入の手間がない', 12, C.gray)]),
  },
  {
    note: '傾きと1点が分かっている型。傾き 2、点 (3, 1) を通る直線。y ＝ 2x ＋ b に代入して 1 ＝ 6 ＋ b、b ＝ −5。y ＝ 2x − 5。確かめ：x ＝ 3 で 2×3−5 ＝ 1 ✓。',
    add: F([eb(12, 'y ＝ 2x ＋ b', C.blue, FILL.blue, 15, 30), eb(50, '1 ＝ 2 × 3 ＋ b → b ＝ −5', C.red, FILL.red, 14, 30), eb(88, 'y ＝ 2x − 5', C.green, FILL.green, 16, 32)], [tx(160, '傾きが分かっていれば、ステップ1は不要', 13, C.purple, true), tx(190, '確かめ：2×3 − 5 ＝ 1 ✓', 13, C.gray)]),
  },
  {
    note: '❓ 2点の x 座標が同じ、たとえば (2, 1) と (2, 5) のときは？ 横の増加量が 0 なので、傾きは 5−1 ÷ 0 と割れません。x ＝ 2 のたて線になり、y ＝ ax ＋ b の形では表せません。',
    add: F([...gP.axes(), gP.pt(2, 1), gP.pt(2, 5), gP.line(2, -0.4, 2, 8, C.blue), gP.t(2, 5, '(2, 5)', 6, 0), gP.t(2, 1, '(2, 1)', -6, 10, 11, C.ink, 'end')], [tx(158, 'x ＝ 2 のとき y が2つ以上ある', 13, C.red, true), tx(184, '→ x に対して y が1つに決まらない', 12, C.red), tx(208, '一次関数ではない', 12, C.gray)]),
  },
  {
    note: '手順のまとめ。① 傾き ＝ (y の差) ÷ (x の差) ② y ＝ ax ＋ b に a と1点を入れて b ③ 式に書く ④ もう一方の点で検算。x ＝ 0 の点があれば、それが切片です。',
    add: F([eb(6, '① 傾き ＝ y の差 ÷ x の差', C.blue, FILL.blue, 13, 26, 30, 260), eb(36, '② 1点を代入して b を出す', C.blue, FILL.blue, 13, 26, 30, 260), eb(66, '③ y ＝ ax ＋ b に書く', C.blue, FILL.blue, 13, 26, 30, 260), eb(96, '④ もう一方の点で検算', C.green, FILL.green, 13, 26, 30, 260)], [tx(160, '傾きを先に、切片をあとに', 14, C.purple, true), tx(190, 'x の差が 0 なら x ＝ 定数の線', 12, C.gray)]),
  },
]);

// ── 34. 直線の交点の求め方 ──
const gX = G(100, 126, 10, 60, 150, 8, 118);
const kouten: DiagramFigure = show([
  {
    note: 'y ＝ 2x ＋ 1 と y ＝ −x ＋ 7 の2直線があります。交点とは、2本の直線が同じ場所でぶつかる点です。座標を求めます。',
    add: F([...gX.axes(), gX.line(-0.6, -0.2, 4.6, 10.2, C.blue), gX.line(-0.4, 7.4, 7.4, -0.4, C.red), lb(gX.X(4.6) + 6, gX.Y(10.2) + 6, 'y＝2x＋1', 11, C.blue, 'start', true), lb(gX.X(7.2) - 4, gX.Y(0.8) - 4, 'y＝−x＋7', 11, C.red, 'end', true)], [tx(160, 'ぶつかる点の座標は？', 14, C.gray, true)]),
  },
  {
    note: '❓ なぜ連立方程式で求まるの？ 交点は2本の直線の両方の上にあるので、その座標は、両方の式を同時に満たすからです。図の交点は (2, 5)。2×2＋1 ＝ 5 と −2＋7 ＝ 5、どちらの式にも合っています。',
    add: T([gX.pt(2, 5, C.purple), gX.t(2, 5, '(2, 5)', 6, -6, 12, C.purple)], [eb(152, '2 × 2 ＋ 1 ＝ 5 ✓', C.blue, FILL.blue, 14, 28), eb(188, '−2 ＋ 7 ＝ 5 ✓', C.red, FILL.red, 14, 28)]),
  },
  {
    note: '❓ y ＝ 〜 の形が2つあるとき、なぜ右辺どうしを等しいとおくの？ 交点では y の値が同じだから、y に等しい右辺も同じになるはずです。2x ＋ 1 ＝ −x ＋ 7。',
    add: F([eb(12, 'y ＝ 2x ＋ 1', C.blue, FILL.blue, 15, 30, 60, 200), eb(50, 'y ＝ −x ＋ 7', C.red, FILL.red, 15, 30, 60, 200), ar(160, 84, 160, 104, C.gray), lb(190, 96, '交点では y が同じ', 11, C.gray, 'start')], [eb(150, '2x ＋ 1 ＝ −x ＋ 7', C.purple, FILL.purple, 17, 34), tx(204, '右辺どうしが等しい', 12, C.gray)]),
  },
  {
    note: '❓ 移項するのはなぜ？ x の項を左、数を右にまとめると、x が1つの値だと分かるからです。2x ＋ x ＝ 7 − 1 で 3x ＝ 6、x ＝ 2。',
    add: F([eb(10, '2x ＋ 1 ＝ −x ＋ 7', C.gray, FILL.gray, 15, 28), eb(46, '2x ＋ x ＝ 7 − 1', C.blue, FILL.blue, 15, 28), eb(82, '3x ＝ 6', C.blue, FILL.blue, 15, 28), eb(118, 'x ＝ 2', C.green, FILL.green, 16, 24)], [tx(178, '数は右へ、x の項は左へ', 13, C.gray, true), tx(204, '（移すと符号が変わる）', 12, C.gray)]),
  },
  {
    note: '❓ x ＝ 2 だけで答えにしないのはなぜ？ 交点は「点」なので、x 座標と y 座標の2つが必要です。x ＝ 2 をどちらかの式に入れると y ＝ 2×2 ＋ 1 ＝ 5。',
    add: F([...gX.axes(), gX.line(-0.6, -0.2, 4.6, 10.2, C.blue), gX.line(-0.4, 7.4, 7.4, -0.4, C.red), ln(gX.X(2), gX.Y(0), gX.X(2), gX.Y(5), C.purple, true, 1.5), gX.pt(2, 5, C.purple), gX.t(2, 0, 'x＝2', 0, 12, 11, C.purple, 'middle')], [eb(152, 'y ＝ 2 × 2 ＋ 1 ＝ 5', C.purple, FILL.purple, 15), tx(204, '交点は (2, 5)', 14, C.green, true)]),
  },
  {
    note: '❓ どちらの式に代入してもよいの？ 交点は両方の直線の上にあるので、どちらでも同じ y になります。もう一方 −2＋7 ＝ 5 が、そのまま確かめになります。',
    add: F([eb(12, 'y ＝ 2x ＋ 1 → 2×2＋1 ＝ 5', C.blue, FILL.blue, 14, 30), eb(50, 'y ＝ −x ＋ 7 → −2＋7 ＝ 5', C.red, FILL.red, 14, 30), eb(88, '同じ 5 になる ✓', C.green, FILL.green, 15, 30)], [tx(160, 'ちがう値が出たら、x の計算ミス', 13, C.purple, true)]),
  },
  {
    note: '別の例。y ＝ 3x − 2 と y ＝ x ＋ 4。3x − 2 ＝ x ＋ 4、2x ＝ 6、x ＝ 3。y ＝ 3×3−2 ＝ 7。交点は (3, 7)。確かめ：3＋4 ＝ 7 ✓。',
    add: F([eb(12, '3x − 2 ＝ x ＋ 4', C.gray, FILL.gray, 15, 28), eb(46, '2x ＝ 6 → x ＝ 3', C.blue, FILL.blue, 15, 28), eb(80, 'y ＝ 3 × 3 − 2 ＝ 7', C.blue, FILL.blue, 15, 28), eb(114, '交点 (3, 7)', C.green, FILL.green, 16, 26)], [tx(172, '確かめ：もう一方 3 ＋ 4 ＝ 7 ✓', 13, C.purple, true)]),
  },
  {
    note: '平行のときは？ y ＝ 2x ＋ 1 と y ＝ 2x ＋ 5 は、2x ＋ 1 ＝ 2x ＋ 5 で 1 ＝ 5 となり、成り立ちません。❓ なぜ？ 傾きが同じなので、上下のはばがいつも4のまま、交わらないからです。',
    add: F([...gX.axes(), gX.line(-0.5, 0, 4.8, 10.6, C.blue), gX.line(-0.5, 4, 3.4, 11.8, C.red), lb(gX.X(4.8) + 6, gX.Y(10.6) + 8, 'y＝2x＋1', 11, C.blue, 'start', true), lb(gX.X(3.4) + 6, gX.Y(11.8) + 6, 'y＝2x＋5', 11, C.red, 'start', true)], [eb(152, '1 ＝ 5（成り立たない）', C.red, FILL.red, 15), tx(204, '解なし → 交点なし', 13, C.red, true)]),
  },
  {
    note: '式が y ＝ 〜 の形でないとき。y ＝ 2x ＋ 1 と 3x ＋ y ＝ 11 なら、2つ目を y ＝ −3x ＋ 11 と直してから等しいとおきます。2x ＋ 1 ＝ −3x ＋ 11、5x ＝ 10、x ＝ 2、y ＝ 5。',
    add: F([eb(10, '3x ＋ y ＝ 11 → y ＝ −3x ＋ 11', C.purple, FILL.purple, 13, 28), eb(44, '2x ＋ 1 ＝ −3x ＋ 11', C.blue, FILL.blue, 15, 28), eb(78, '5x ＝ 10 → x ＝ 2', C.blue, FILL.blue, 15, 28), eb(112, 'y ＝ 2 × 2 ＋ 1 ＝ 5 → (2, 5)', C.green, FILL.green, 14, 28)], [tx(170, '確かめ：3 × 2 ＋ 5 ＝ 11 ✓', 13, C.purple, true), tx(196, 'まず y ＝ の形にそろえる', 12, C.gray)]),
  },
  {
    note: 'まとめ。交点は2式を同時に満たす点。y ＝ 〜 が2つなら右辺どうしを等しいとおいて x、それをどちらかに代入して y。答えは (x, y) の形で。傾きが同じなら平行で交点なし。',
    add: F([eb(6, '交点 ＝ 連立方程式の解', C.blue, FILL.blue, 14, 26, 30, 260), eb(36, '右辺どうしを等しくして x を出す', C.blue, FILL.blue, 13, 26, 30, 260), eb(66, 'x を代入して y を出す', C.blue, FILL.blue, 13, 26, 30, 260), eb(96, '(x, y) の形で答える', C.green, FILL.green, 13, 26, 30, 260)], [tx(160, '傾きが同じなら、平行で交点なし', 14, C.red, true), tx(190, '両方の式で確かめる', 12, C.gray)]),
  },
]);

// ── 35. 変域と変化の割合 ──
const gD = G(60, 66, 10, 50, 230, 66, 60);
const hen: DiagramFigure = show([
  {
    note: '変化の割合とは、「x が増えたとき、y がどれだけ増えたか」の割合で、y の増加量 ÷ x の増加量です。一次関数ではこれが傾きと同じで、どこで測っても一定です。',
    add: F([eb(16, '変化の割合 ＝ y の増加量 ÷ x の増加量', C.blue, FILL.blue, 13, 34), ar(160, 54, 160, 78, C.gray), eb(84, '一次関数では ＝ 傾き a（一定）', C.green, FILL.green, 14, 34)], [tx(170, 'ここが二次関数との大きなちがい', 13, C.gray, true)]),
  },
  {
    note: '❓ なぜ一定なの？ y ＝ 3x ＋ 2 の表：x ＝ 0〜4 で y ＝ 2, 5, 8, 11, 14。x が1増えるごとに、いつも y は 3 増えます。区間を変えても (11−5)÷(3−1) ＝ 3 と同じです。',
    add: F([bx(20, 18, 56, 28, 'x', C.blue, FILL.blue, 13), bx(80, 18, 44, 28, '0', C.blue, FILL.blue, 13), bx(128, 18, 44, 28, '1', C.blue, FILL.blue, 13), bx(176, 18, 44, 28, '2', C.blue, FILL.blue, 13), bx(224, 18, 44, 28, '3', C.blue, FILL.blue, 13), bx(272, 18, 40, 28, '4', C.blue, FILL.blue, 13), bx(20, 50, 56, 28, 'y', C.green, FILL.green, 13), bx(80, 50, 44, 28, '2', C.green, FILL.green, 13), bx(128, 50, 44, 28, '5', C.green, FILL.green, 13), bx(176, 50, 44, 28, '8', C.green, FILL.green, 13), bx(224, 50, 44, 28, '11', C.green, FILL.green, 13), bx(272, 50, 40, 28, '14', C.green, FILL.green, 13), lb(102, 96, '＋3', 11, C.red, 'middle', true), lb(150, 96, '＋3', 11, C.red, 'middle', true), lb(198, 96, '＋3', 11, C.red, 'middle', true), lb(246, 96, '＋3', 11, C.red, 'middle', true)], [tx(150, 'どこで測っても 3', 14, C.blue, true), tx(180, '(11 − 5) ÷ (3 − 1) ＝ 3', 13, C.gray), tx(206, '直線だから、増え方が変わらない', 12, C.gray)]),
  },
  {
    note: '❓ 比例とはどんな関係？ 比例 y ＝ ax は、一次関数 y ＝ ax ＋ b の b ＝ 0 の場合です。だから比例のグラフは原点を通りますが、一次関数のグラフは原点を通るとは限りません。',
    add: F([eb(12, 'y ＝ ax ＋ b', C.blue, FILL.blue, 16, 32, 60, 200), ar(160, 48, 160, 72, C.gray), lb(200, 60, 'b ＝ 0 のとき', 11, C.red, 'start'), eb(78, 'y ＝ ax（比例）', C.green, FILL.green, 16, 32, 60, 200)], [tx(150, '比例は、一次関数の特別な場合', 14, C.purple, true), tx(180, 'b ＝ 0 → 原点を通る', 13, C.gray), tx(206, 'b ≠ 0 → 原点を通らない', 13, C.gray)]),
  },
  {
    note: '変域とは、x のとる値の範囲と、それに対応する y の範囲です。y ＝ x ＋ 1 で 0 ≦ x ≦ 3 のとき、グラフは (0, 1) から (3, 4) までの線分で、y は 1 ≦ y ≦ 4。',
    add: F([...gD.axes(), gD.line(-1, 0, 4.2, 5.2, C.gray, true, 1.5), gD.line(0, 1, 3, 4, C.blue, false, 3), gD.pt(0, 1, C.blue), gD.pt(3, 4, C.blue), gD.t(0, 1, '(0, 1)', -5, 6, 11, C.ink, 'end'), gD.t(3, 4, '(3, 4)', 6, -3)], [tx(154, 'y ＝ x ＋ 1（0 ≦ x ≦ 3）', 13, C.blue, true), tx(184, '1 ≦ y ≦ 4', 15, C.green, true)]),
  },
  {
    note: '❓ なぜ両はしの x を代入するだけで、最大・最小が分かるの？ 一次関数の直線は、一方向にまっすぐ増えるか減るかしかなく、途中で山や谷がないからです。だから最大と最小は端に出ます。',
    add: F([...gD.axes(), gD.line(0, 1, 3, 4, C.blue, false, 3), gD.pt(0, 1, C.red), gD.pt(3, 4, C.red), ar(gD.X(0.4), gD.Y(1.4) - 2, gD.X(2.6), gD.Y(3.6) + 2, C.gray), lb(gD.X(3) + 12, gD.Y(2.6), '途中に山も谷もない', 11, C.gray, 'start')], [eb(152, 'x ＝ 0 → y ＝ 1（最小）', C.red, FILL.red, 14, 28), eb(188, 'x ＝ 3 → y ＝ 4（最大）', C.red, FILL.red, 14, 28)]),
  },
  {
    note: '傾きが負のとき。y ＝ −2x ＋ 3 で 1 ≦ x ≦ 4。x ＝ 1 で y ＝ 1、x ＝ 4 で y ＝ −5。❓ なぜ大きい x で小さい y になるの？ 右下がりの直線なので、右へ行くほど y が下がるからです。',
    add: F([...gD.axes(), gD.line(0, 3, 4.5, -6, C.gray, true, 1.5), gD.line(1, 1, 4, -5, C.blue, false, 3), gD.pt(1, 1, C.red), gD.pt(4, -5, C.red), gD.t(1, 1, '(1, 1)', 6, -4), gD.t(4, -5, '(4, −5)', 6, 2)], [tx(154, 'y ＝ −2x ＋ 3（1 ≦ x ≦ 4）', 13, C.blue, true), tx(184, '−5 ≦ y ≦ 1', 15, C.green, true)]),
  },
  {
    note: '❓ 書き方で気をつけることは？ 変域は「小さい値 ≦ y ≦ 大きい値」の順に書きます。x の小さいほうを代入した 1 を先に書いて 1 ≦ y ≦ −5 とするのは、まちがいです。',
    add: F([eb(12, 'x ＝ 1 → y ＝ 1　　x ＝ 4 → y ＝ −5', C.gray, FILL.gray, 13, 32), eb(56, '1 ≦ y ≦ −5 ✗（左が大きい）', C.red, FILL.red, 14, 32), eb(100, '−5 ≦ y ≦ 1 ○', C.green, FILL.green, 16, 32)], [tx(170, '傾きが負なら、大小が入れかわる', 14, C.purple, true)]),
  },
  {
    note: '❓ 不等号に等号がつくかは、どう決まるの？ x の範囲にふくまれる端は y にもふくまれ、ふくまれない端は y にもふくまれないからです。0 ＜ x ≦ 3 なら、x ＝ 0 の点は白丸で、y ＝ 1 もふくまれません。',
    add: F([...gD.axes(), gD.line(0, 1, 3, 4, C.blue, false, 3), gD.open(0, 1, C.red), gD.pt(3, 4, C.red), gD.t(0, 1, '白丸', -5, 6, 11, C.red, 'end'), gD.t(3, 4, '黒丸', 6, -3, 11, C.red)], [tx(154, 'y ＝ x ＋ 1（0 ＜ x ≦ 3）', 13, C.blue, true), tx(184, '1 ＜ y ≦ 4', 15, C.green, true)]),
  },
  {
    note: '逆の問題。y ＝ ax ＋ b で a が正、1 ≦ x ≦ 3 のとき 5 ≦ y ≦ 9。❓ 傾きが正だと、x ＝ 1 で y ＝ 5、x ＝ 3 で y ＝ 9 になるからです。傾き ＝ (9 − 5) ÷ (3 − 1) ＝ 2。',
    add: F([eb(12, 'a ＞ 0：(1, 5) と (3, 9) を通る', C.blue, FILL.blue, 14, 30), eb(50, '傾き ＝ (9 − 5) ÷ (3 − 1) ＝ 2', C.green, FILL.green, 14, 30), eb(88, 'y ＝ 2x ＋ b に (1, 5)：5 ＝ 2 ＋ b', C.red, FILL.red, 13, 30)], [tx(160, 'b ＝ 3 → y ＝ 2x ＋ 3', 15, C.green, true), tx(190, '確かめ：x ＝ 3 → 2×3＋3 ＝ 9 ✓', 13, C.purple)]),
  },
  {
    note: '❓ 二次関数だとどうなるの？ y ＝ x² では、x が 0→1 のとき変化の割合は 1、1→2 のときは (4−1)÷1 ＝ 3。区間で変わります。直線でないので増え方が一定でなく、一次関数だけが「いつも同じ」です。',
    add: F([eb(12, 'y ＝ 3x ＋ 2：どの区間も 3', C.green, FILL.green, 14, 30), eb(50, 'y ＝ x²　x 0→1：(1−0)÷1 ＝ 1', C.red, FILL.red, 13, 30), eb(88, 'y ＝ x²　x 1→2：(4−1)÷1 ＝ 3', C.red, FILL.red, 13, 30)], [tx(160, '一次関数：一定　二次関数：区間で変わる', 13, C.purple, true), tx(190, 'あとで習う二次関数との見分けにも使う', 12, C.gray)]),
  },
  {
    note: 'まとめ。一次関数の変化の割合は傾きと同じで一定。変域は両はしの x を代入して求め、傾きが負なら大小が入れかわります。端をふくむかどうかは、不等号にそのまま反映します。',
    add: F([eb(8, '変化の割合 ＝ 傾き（一定）', C.blue, FILL.blue, 14, 28), eb(42, '変域：両はしの x を代入', C.blue, FILL.blue, 14, 28), eb(76, '傾き負 → 大小が入れかわる', C.red, FILL.red, 14, 28), eb(110, '等号は x の範囲と同じ', C.purple, FILL.purple, 14, 28)], [tx(170, '答えは「小 ≦ y ≦ 大」の順', 13, C.gray, true)]),
  },
]);

// ── 36. 一次関数のグラフと図形の面積 ──
const gA = G(40, 112, 20, 30, 240, 8, 104);
const gB = G(40, 126, 18, 30, 240, 8, 118);
const menseki: DiagramFigure = show([
  {
    note: '座標平面上の三角形の面積を求めます。O(0, 0)、A(4, 0)、B(4, 3) の三角形です。まず点を打って、形を見ましょう。',
    add: F([...gA.axes(), gA.pt(0, 0, C.blue), gA.pt(4, 0), gA.pt(4, 3), pgTri([[0, 0], [4, 0], [4, 3]], gA), gA.t(4, 0, 'A(4, 0)', 6, 10), gA.t(4, 3, 'B(4, 3)', 6, 0)], [tx(160, '三角形 O A B', 14, C.blue, true)]),
  },
  {
    note: '❓ なぜ軸に平行な線分を底辺にするの？ 長さが座標の引き算だけで分かり、高さも座標から直接読めるからです。OA は x 軸の上なので OA ＝ 4 − 0 ＝ 4。AB はたてで、AB ＝ 3 − 0 ＝ 3。',
    add: T([ln(gA.X(0), gA.Y(0), gA.X(4), gA.Y(0), C.green, false, 3), ln(gA.X(4), gA.Y(0), gA.X(4), gA.Y(3), C.red, false, 3), gA.t(2, 0, '底辺 4', 0, 14, 11, C.green, 'middle'), gA.t(4, 1.5, '高さ 3', 6, 0, 11, C.red)], [eb(152, 'OA ＝ 4 − 0 ＝ 4（底辺）', C.green, FILL.green, 14, 28), eb(188, 'AB ＝ 3 − 0 ＝ 3（高さ）', C.red, FILL.red, 14, 28)]),
  },
  {
    note: '❓ なぜ面積は「底辺 × 高さ ÷ 2」なの？ この三角形は、たて3・横4の長方形（面積12）を対角線で2つに分けた半分だからです。12 ÷ 2 ＝ 6。',
    add: T([ln(gA.X(0), gA.Y(3), gA.X(4), gA.Y(3), C.gray, true, 1.5), ln(gA.X(0), gA.Y(0), gA.X(0), gA.Y(3), C.gray, true, 1.5), lb(gA.X(1.3), gA.Y(2.4), '残り半分', 11, C.gray, 'middle')], [eb(152, '長方形 4 × 3 ＝ 12 の半分', C.gray, FILL.gray, 14, 28), eb(188, '4 × 3 ÷ 2 ＝ 6', C.green, FILL.green, 16, 30)]),
  },
  {
    note: '次の例。A(0, 6)、B(0, 2)、C(5, 4) の三角形。A と B はどちらも x ＝ 0 なので、AB は y 軸の上のたての線分で、AB ＝ 6 − 2 ＝ 4。これを底辺にします。',
    add: F([...gB.axes(), gB.pt(0, 6, C.blue), gB.pt(0, 2, C.blue), gB.pt(5, 4), pgTri([[0, 6], [0, 2], [5, 4]], gB), gB.t(0, 6, 'A(0, 6)', 6, 0), gB.t(0, 2, 'B(0, 2)', 6, 8), gB.t(5, 4, 'C(5, 4)', 6, -2), ln(gB.X(0), gB.Y(6), gB.X(0), gB.Y(2), C.green, false, 3)], [eb(152, 'AB ＝ 6 − 2 ＝ 4（底辺）', C.green, FILL.green, 14, 28), tx(200, '底辺が y 軸の上にある', 12, C.gray)]),
  },
  {
    note: '❓ 高さはなぜ C の x 座標なの？ 底辺が y 軸の上なので、高さは C から y 軸までのまっすぐな距離、つまり横の位置 5 だからです。点線が高さです。',
    add: T([ln(gB.X(0), gB.Y(4), gB.X(5), gB.Y(4), C.red, true, 2.5), gB.t(2.5, 4, '高さ 5', 0, -8, 11, C.red, 'middle')], [eb(152, '高さ ＝ C の x 座標 ＝ 5', C.red, FILL.red, 14, 28), eb(188, '面積 ＝ 4 × 5 ÷ 2 ＝ 10', C.green, FILL.green, 15, 30)]),
  },
  {
    note: '軸に平行な辺が1つもない三角形。P(1, 1)、Q(5, 2)、R(3, 5)。どの辺も斜めなので、底辺も高さも座標からは読めません。',
    add: F([...gB.axes(), gB.pt(1, 1), gB.pt(5, 2), gB.pt(3, 5), pgTri([[1, 1], [5, 2], [3, 5]], gB), gB.t(1, 1, 'P(1, 1)', 6, 12, 11, C.ink, 'start'), gB.t(5, 2, 'Q(5, 2)', 6, 2), gB.t(3, 5, 'R(3, 5)', 6, -4)], [tx(160, 'どの辺も、軸に平行でない', 14, C.red, true), tx(190, 'どうやって面積を出す？', 12, C.gray)]),
  },
  {
    note: '❓ どうすればよいの？ 3点をぴったり囲む長方形をかきます。x は 1〜5、y は 1〜5 なので、たて4・横4の長方形で面積16。三角形のまわりに直角三角形が3つできます。',
    add: T([ln(gB.X(1), gB.Y(1), gB.X(5), gB.Y(1), C.gray, true, 1.5), ln(gB.X(5), gB.Y(1), gB.X(5), gB.Y(5), C.gray, true, 1.5), ln(gB.X(5), gB.Y(5), gB.X(1), gB.Y(5), C.gray, true, 1.5), ln(gB.X(1), gB.Y(5), gB.X(1), gB.Y(1), C.gray, true, 1.5)], [tx(158, '囲む長方形：4 × 4 ＝ 16', 14, C.gray, true), tx(188, 'まわりに直角三角形が3つ', 13, C.gray)]),
  },
  {
    note: 'まわりの3つは、たて・横が軸に平行なので面積がすぐ出ます。下の三角形は 横4・たて1 で 2。右上は 横2・たて3 で 3。左は 横2・たて4 で 4。合わせて 9。',
    add: [pgTri([[1, 1], [5, 1], [5, 2]], gB, C.blue), pgTri([[5, 2], [5, 5], [3, 5]], gB, C.green), pgTri([[3, 5], [1, 5], [1, 1]], gB, C.purple), ...band(140, eb(148, '下：4×1÷2 ＝ 2（青）', C.blue, FILL.blue, 13, 24), eb(174, '右上：2×3÷2 ＝ 3（緑）', C.green, FILL.green, 13, 24), eb(200, '左：2×4÷2 ＝ 4（紫）', C.purple, FILL.purple, 13, 24))],
  },
  {
    note: '❓ なぜ引き算になるの？ 長方形は「三角形 ＋ まわりの3つ」でできているので、三角形 ＝ 長方形 − まわり。16 − (2 ＋ 3 ＋ 4) ＝ 16 − 9 ＝ 7。',
    add: band(140, eb(152, '長方形 16 ＝ 三角形 ＋ 9', C.gray, FILL.gray, 15), eb(190, '三角形 ＝ 16 − 9 ＝ 7', C.green, FILL.green, 17, 34)),
  },
  {
    note: '確かめ。別の方法として、頂点の座標を使う公式でも 7 になります。P(1,1)、Q(5,2)、R(3,5) は、|1×(2−5)＋5×(5−1)＋3×(1−2)| ÷ 2 ＝ |−3＋20−3| ÷ 2 ＝ 14 ÷ 2 ＝ 7。図から出した答えと同じです。',
    add: F([eb(12, '囲む長方形 16 − まわり 9 ＝ 7', C.green, FILL.green, 14, 32), eb(56, '座標の公式（参考）14 ÷ 2 ＝ 7', C.purple, FILL.purple, 14, 32), eb(100, '2通りが一致 ✓', C.green, FILL.green, 16, 32)], [tx(170, '長方形から引く方法は、どんな三角形にも使える', 12, C.gray, true)]),
  },
  {
    note: '直線と軸で囲まれた三角形。y ＝ 2x ＋ 4 は、x ＝ 0 で y ＝ 4（y 切片）、y ＝ 0 で 0 ＝ 2x ＋ 4 より x ＝ −2（x 切片）。❓ 切片が頂点になるのは、軸との交点だからです。',
    add: F([...G(160, 112, 20, 130, 130, 10, 100).axes(), pgTri([[-2, 0], [0, 4], [0, 0]], G(160, 112, 20)), ln(120, 112, 160, 32, C.blue, false, 2), ci(120, 112, 3.5, undefined, C.red, C.red), ci(160, 32, 3.5, undefined, C.red, C.red), lb(116, 126, '(−2, 0)', 11, C.ink, 'end', true), lb(168, 32, '(0, 4)', 11, C.ink, 'start', true)], [eb(148, 'x 切片 −2、y 切片 4', C.red, FILL.red, 14, 26), eb(180, '底辺 2 × 高さ 4 ÷ 2 ＝ 4', C.green, FILL.green, 14, 28)]),
  },
  {
    note: '交点が頂点になる例。y ＝ 2x ＋ 1、y ＝ −x ＋ 7、y 軸で囲まれた三角形。頂点は (0, 1)、(0, 7)、交点 (2, 5)。底辺は y 軸上の 7 − 1 ＝ 6、高さは交点の x 座標 2。面積 6 × 2 ÷ 2 ＝ 6。',
    add: F([...gX.axes(), gX.line(-0.3, 0.4, 3.4, 7.8, C.blue), gX.line(-0.3, 7.3, 3.4, 3.6, C.red), pgTri([[0, 1], [0, 7], [2, 5]], gX), gX.pt(0, 1), gX.pt(0, 7), gX.pt(2, 5, C.purple), ln(gX.X(0), gX.Y(5), gX.X(2), gX.Y(5), C.purple, true, 2), gX.t(2, 5, '(2, 5)', 6, -4, 11, C.purple), gX.t(0, 7, '(0, 7)', 8, -6), gX.t(0, 1, '(0, 1)', 8, 12)], [eb(150, '底辺 7 − 1 ＝ 6　高さ ＝ 2', C.blue, FILL.blue, 14, 26), eb(182, '6 × 2 ÷ 2 ＝ 6', C.green, FILL.green, 15, 28)]),
  },
  {
    note: 'まとめ。① 軸に平行な線分を底辺にする ② 底辺の長さは座標の差 ③ 高さは底辺に垂直な向きの座標の差 ④ 底辺 × 高さ ÷ 2。軸に平行な線分が無ければ、囲む長方形から3つの直角三角形を引きます。',
    add: F([eb(6, '① 軸に平行な線分を底辺に', C.blue, FILL.blue, 13, 24, 30, 260), eb(34, '② 底辺・高さは座標の差', C.blue, FILL.blue, 13, 24, 30, 260), eb(62, '③ 底辺 × 高さ ÷ 2', C.blue, FILL.blue, 13, 24, 30, 260), eb(90, '④ 平行がなければ長方形から引く', C.red, FILL.red, 13, 24, 30, 260)], [tx(150, '交点や切片は、頂点になることが多い', 13, C.purple, true), tx(180, '前の単元の「交点」がここで役立つ', 12, C.gray)]),
  },
]);

function pgTri(pts: [number, number][], g: { X: (x: number) => number; Y: (y: number) => number }, color: string = C.blue): E {
  const fill = color === C.blue ? 'rgba(2,132,199,0.22)' : color === C.green ? 'rgba(22,163,74,0.28)' : color === C.purple ? 'rgba(147,51,234,0.28)' : 'rgba(225,29,72,0.22)';
  return { t: 'poly', pts: pts.map(([x, y]) => [g.X(x), g.Y(y)] as [number, number]), color, fill };
}

export const DIAGRAMS_KOKO_SUGAKU_OLD_C: Record<string, DiagramFigure> = {
  '解の公式': kai,
  '解き方の選び方': erabi,
  '二次方程式の文章題': bunshou,
  '比例の式とグラフ': hirei,
  '反比例の式とグラフ': hanpirei,
  '座標と象限': zahyou,
  '比例・反比例の利用（歯車・仕事量）': riyou,
  '一次関数の式と傾き・切片': itiji,
  '2点から一次関数の式を求める': niten,
  '直線の交点の求め方': kouten,
  '変域と変化の割合': hen,
  '一次関数のグラフと図形の面積': menseki,
};
