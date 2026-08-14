import type { Figure } from './figures';

// 高校受験 数学「正負の数・文字式・式の計算」拡張ユニット（koko_math_s001〜koko_math_s040）の教科書用図解。
// キーは lessons-koko-math-ext01.ts の figureId と対応。
// 計算単元なので図が飾りになりやすい。数直線・面積モデル・指数の棒グラフなど、
// 図にすることで本当に理解が進む箇所にだけ付けてある（全40課中17課）。
export const lessonFigsKokoMathExt01: Record<string, Figure> = {
  // s001：正負の数の並びと絶対値（原点からの距離）
  lf_kokomathext01_001: {
    kind: 'numberLine',
    min: -5,
    max: 5,
    step: 1,
    points: [
      { x: -4, label: 'A(−4)' },
      { x: -1, label: 'B(−1)' },
      { x: 0, label: '原点' },
      { x: 2, label: 'C(+2)' },
      { x: 5, label: 'D(+5)' },
    ],
    caption: '数直線は右へ行くほど大きい。A(−4) は原点から左へ4なので絶対値は4、C(+2) の絶対値は2。絶対値はA のほうが大きいが、数の大小は −4 < +2 である',
  },

  // s002：加法を「数直線上の移動」で見る（+3 から左へ5進むと −2）
  lf_kokomathext01_002: {
    kind: 'numberLine',
    min: -6,
    max: 6,
    step: 1,
    segments: [{ from: -2, to: 3 }],
    points: [
      { x: 0, label: 'スタート0' },
      { x: 3, label: '+3' },
      { x: -2, label: '答え −2' },
    ],
    caption: '(+3)+(−5) の計算。0 から右へ3進み（+3）、そこから左へ5進む（−5）と −2 に着く。異符号の加法は絶対値の差 5−3=2 に、絶対値が大きいほうの符号 − を付ける',
  },

  // s007：累乗は「かけ算のくり返し」で急に大きくなる
  lf_kokomathext01_007: {
    kind: 'barChart',
    xLabel: '指数',
    yLabel: '値',
    yMax: 36,
    bars: [
      { label: '2¹', value: 2, color: '#0EA5E9' },
      { label: '2²', value: 4, color: '#0EA5E9' },
      { label: '2³', value: 8, color: '#0369A1' },
      { label: '2⁴', value: 16, color: '#0369A1' },
      { label: '2⁵', value: 32, color: '#16A34A' },
    ],
    caption: '2の累乗。指数が1増えるごとに値は2倍になる。2×5=10 ではなく 2⁵=32 であることに注意（累乗は「指数の回数だけかける」）',
  },

  // s010：360 の素因数分解 360＝2³×3²×5
  lf_kokomathext01_010: {
    kind: 'barChart',
    xLabel: '素因数',
    yLabel: '指数（かけた個数）',
    yMax: 4,
    bars: [
      { label: '2', value: 3, color: '#0EA5E9' },
      { label: '3', value: 2, color: '#0369A1' },
      { label: '5', value: 1, color: '#16A34A' },
    ],
    caption: '360 の素因数分解。2 を3個、3 を2個、5 を1個かけ合わせた数なので 360＝2³×3²×5。実際 8×9×5＝360 になる',
  },

  // s011：約数の個数（素因数の指数に1を足してかける）
  lf_kokomathext01_011: {
    kind: 'barChart',
    xLabel: '数',
    yLabel: '約数の個数',
    yMax: 14,
    bars: [
      { label: '12', value: 6, color: '#0EA5E9' },
      { label: '18', value: 6, color: '#0EA5E9' },
      { label: '24', value: 8, color: '#0369A1' },
      { label: '36', value: 9, color: '#0369A1' },
      { label: '60', value: 12, color: '#16A34A' },
    ],
    caption: '約数の個数。12＝2²×3 なら (2+1)(1+1)＝6個、36＝2²×3² なら (2+1)(2+1)＝9個、60＝2²×3×5 なら 3×2×2＝12個。指数に1を足して「かける」のがポイント',
  },

  // s012：72 と 108 の最大公約数・最小公倍数の位置関係
  lf_kokomathext01_012: {
    kind: 'barChart',
    yLabel: '値',
    yMax: 230,
    bars: [
      { label: '最大公約数36', value: 36, color: '#16A34A' },
      { label: '72', value: 72, color: '#0EA5E9' },
      { label: '108', value: 108, color: '#0EA5E9' },
      { label: '最小公倍数216', value: 216, color: '#0369A1' },
    ],
    caption: '72＝2³×3²、108＝2²×3³。最大公約数は指数の小さいほうをとって 2²×3²＝36、最小公倍数は大きいほうをとって 2³×3³＝216。最大公約数はどちらの数より小さく、最小公倍数はどちらより大きい（36×216＝72×108＝7776）',
  },

  // s013：168 を平方数にするには指数を全部偶数にする
  lf_kokomathext01_013: {
    kind: 'barChart',
    xLabel: '素因数',
    yLabel: '指数',
    yMax: 4,
    bars: [
      { label: '2', value: 3, color: '#0EA5E9' },
      { label: '3', value: 1, color: '#F59E0B' },
      { label: '7', value: 1, color: '#F59E0B' },
    ],
    caption: '168＝2³×3×7。指数がすべて偶数なら平方数なので、奇数になっている 2・3・7 を1個ずつ補う。かける最小の自然数は 2×3×7＝42 で、168×42＝7056＝84²',
  },

  // s022：分配法則 a(b+c)＝ab+ac の面積モデル
  lf_kokomathext01_022: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 7, y: 0 },
      { x: 7, y: 5 },
      { x: 0, y: 5 },
    ],
    sideLabels: ['3＋4', '5', null, null],
    fill: true,
    caption: '縦5、横 3＋4 の長方形。面積は 5×(3＋4)＝35 だが、横を3と4に分けると 5×3＝15 と 5×4＝20 の2枚に分かれ、和はやはり35。これが分配法則 a(b＋c)＝ab＋ac の正体',
  },

  // s023：単項式の積を直方体の体積で見る
  lf_kokomathext01_023: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '2a', depth: '3b', height: '4c' },
    caption: '縦2a、横3b、高さ4c の直方体の体積は 2a×3b×4c。係数どうし 2×3×4＝24、文字どうし a×b×c＝abc をかけて 24abc となる',
  },

  // s025：L字型の面積は「全体−欠け」でも「2つに分けて足す」でも求まる
  lf_kokomathext01_025: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 8, y: 0 },
      { x: 8, y: 3 },
      { x: 3, y: 3 },
      { x: 3, y: 6 },
      { x: 0, y: 6 },
    ],
    sideLabels: ['8', '3', '5', '3', '3', '6'],
    fill: true,
    caption: 'L字型の面積。大きい長方形からへこみを引いて 8×6−5×3＝33、2つの長方形に分けて 8×3＋3×3＝33。どちらでも同じになるのは分配法則 a(b−c)＝ab−ac が成り立つから',
  },

  // s030：台形の面積の公式を h について解く
  lf_kokomathext01_030: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 7, y: 0 },
      { x: 6, y: 4 },
      { x: 2, y: 4 },
    ],
    sideLabels: ['下底 b', null, '上底 a', null],
    heights: [{ from: 3, toEdge: [0, 1], label: '高さ h' }],
    caption: '台形の面積は S＝(a＋b)×h÷2。h について解くと、両辺を2倍して 2S＝(a＋b)h、両辺を (a＋b) で割って h＝2S/(a＋b) となる',
  },

  // s033：偶数と奇数が交互に並ぶことを数直線で確認
  lf_kokomathext01_033: {
    kind: 'numberLine',
    min: 0,
    max: 8,
    step: 1,
    points: [
      { x: 2, label: '偶数 2n' },
      { x: 3, label: '奇数 2n+1' },
      { x: 4, label: '偶数 2n+2' },
    ],
    caption: '整数は偶数と奇数が交互に並ぶ。ある偶数を 2n とおくと、その次の奇数は 2n+1、次の偶数は 2n+2。「連続する」ことを表すには同じ文字 n を使うのがポイント',
  },

  // s034：連続する3つの整数と、その和が真ん中の3倍になること
  lf_kokomathext01_034: {
    kind: 'numberLine',
    min: 0,
    max: 10,
    step: 1,
    points: [
      { x: 4, label: 'n−1' },
      { x: 5, label: 'n' },
      { x: 6, label: 'n+1' },
    ],
    caption: '連続する3つの整数は、真ん中を n として n−1, n, n+1 と表すのが最短。和は (n−1)+n+(n+1)＝3n となり、真ん中の数の3倍（＝3の倍数）だとすぐわかる',
  },

  // s035：2桁の数の位取り（73＝10×7＋3）
  lf_kokomathext01_035: {
    kind: 'barChart',
    xLabel: '位',
    yLabel: 'その位が表す大きさ',
    yMax: 80,
    bars: [
      { label: '十の位 7×10', value: 70, color: '#0EA5E9' },
      { label: '一の位 3×1', value: 3, color: '#0369A1' },
    ],
    caption: '73 は 70 と 3 に分かれる（73＝10×7＋3）。だから十の位が a、一の位が b の2桁の数は ab ではなく 10a＋b と表す。位を入れかえた数は 10b＋a',
  },

  // s038：面積5の正方形の一辺が√5
  lf_kokomathext01_038: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 5, y: 0 },
      { x: 5, y: 5 },
      { x: 0, y: 5 },
    ],
    sideLabels: ['√5', null, null, null],
    equalSides: [[0, 1, 2, 3]],
    fill: true,
    caption: '面積が5の正方形の一辺の長さが √5。2²＝4、3²＝9 だから √5 は2と3の間の数（2.236…）で、分数では表せない',
  },

  // s039：平方根の数直線上の位置
  lf_kokomathext01_039: {
    kind: 'numberLine',
    min: 0,
    max: 4,
    step: 1,
    points: [
      { x: 1.414, label: '√2' },
      { x: 2.236, label: '√5' },
      { x: 3.162, label: '√10' },
    ],
    caption: '√2≒1.41、√5≒2.24、√10≒3.16。1＝√1、2＝√4、3＝√9 と直すと、√の中の大小がそのまま数の大小になる（√9<√10 なので √10>3）',
  },

  // s040：おぼえておく平方根の近似値
  lf_kokomathext01_040: {
    kind: 'barChart',
    xLabel: '平方根',
    yLabel: 'およその値',
    yMax: 3,
    bars: [
      { label: '√2', value: 1.414, color: '#0EA5E9' },
      { label: '√3', value: 1.732, color: '#0369A1' },
      { label: '√5', value: 2.236, color: '#16A34A' },
      { label: '√6', value: 2.449, color: '#F59E0B' },
      { label: '√7', value: 2.646, color: '#EF4444' },
    ],
    caption: '覚えておく近似値。√2＝1.41421356（一夜一夜に人見ごろ）、√3＝1.7320508（人並みにおごれや）、√5＝2.2360679（富士山麓オウム鳴く）。√6 は √2×√3、√7 は 2.6457… ',
  },
};
