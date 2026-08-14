import type { Figure } from './figures';

// 中学受験 理科「IV. 物理：力のつり合い（てこ・輪軸・滑車・ばね）」45セッション分の図解バッチ。
// キーは lessons-rika-ext04.ts の figureId と対応。
export const lessonFigsRikaExt04: Record<string, Figure> = {
  // ── 1. てこの基本 ─────────────────────────────
  t4_101: {
    kind: 'numberLine',
    min: 0,
    max: 30,
    step: 5,
    points: [
      { x: 0, label: '支点' },
      { x: 5, label: '作用点(くぎ)' },
      { x: 25, label: '力点(手)' },
    ],
    caption: 'F×25＝200×5よりF＝40g（力点までの距離が長いほど得をする）',
  },
  t4_102a: {
    kind: 'coordinate',
    xRange: [0, 40],
    yRange: [0, 60],
    hyperbolas: [{ k: 480, label: '力×距離＝480' }],
    points: [
      { x: 20, y: 24, label: '左24g' },
      { x: 15, y: 32, label: '右32g' },
    ],
    caption: '24g×20cm＝32g×15cm＝480でつり合う',
  },
  t4_102b: {
    kind: 'barChart',
    yLabel: 'モーメント(g・cm)',
    bars: [
      { label: '左10cm(15g)', value: 150 },
      { label: '左25cm(6g)', value: 150 },
      { label: '合計(左)', value: 300 },
    ],
    caption: '複数のおもりはモーメントを足してからつり合いを考える。右20cmならx＝300÷20＝15g',
  },
  t4_103a: {
    kind: 'numberLine',
    min: 0,
    max: 36,
    step: 6,
    points: [
      { x: 0, label: '左端' },
      { x: 18, label: '支点＝重心' },
      { x: 36, label: '右端' },
    ],
    caption: '均一な棒がつり合う点＝重心＝棒のちょうど真ん中。18cmで釣り合うなら棒の長さは36cm',
  },
  t4_103b: {
    kind: 'barChart',
    yLabel: 'モーメント(g・cm)',
    bars: [
      { label: '棒の重さ(25cm)', value: 2500 },
      { label: 'おもり(10cm)', value: 400 },
      { label: '合計', value: 2900 },
    ],
    caption: '棒に重さがあるときは重心にかかる1つのおもりとして必ず加える。F＝2900÷50＝58g',
  },
  t4_104: {
    kind: 'numberLine',
    min: -15,
    max: 15,
    step: 5,
    points: [
      { x: -15, label: '左15cm(20g)' },
      { x: 0, label: '支点' },
      { x: 10, label: '右10cm(30g)' },
    ],
    caption: '不等腕てんびん：20g×15cm＝30g×10cmでつり合うが、これは重さが等しいことを意味しない',
  },
  t4_105: {
    kind: 'numberLine',
    min: 0,
    max: 120,
    step: 20,
    points: [
      { x: 0, label: '支点(車輪)' },
      { x: 30, label: '作用点(荷物60kg)' },
      { x: 120, label: '力点(取っ手)' },
    ],
    caption: '60kg×30cm＝F×120cmよりF＝15kg。支点は車輪であって取っ手ではない',
  },
  t4_106: {
    kind: 'barChart',
    yLabel: '刃先にかかる力(kg)',
    bars: [
      { label: '刃元(3cm)', value: 6 },
      { label: '刃先(8cm)', value: 2.25 },
    ],
    caption: '作用点までの距離が短いほど大きな力が出る。厚い紙は刃の根元で切るとよい',
  },
  t4_107: {
    kind: 'barChart',
    yLabel: 'モーメント(g・cm)',
    bars: [
      { label: '棒の重さ(40cm)', value: 6400 },
      { label: 'おもり(20cm)', value: 1000 },
      { label: '合計', value: 7400 },
    ],
    caption: 'F＝7400÷80＝92.5g。おもりの位置は必ず支点からの距離で読み取る',
  },

  // ── 2. てこの応用 ─────────────────────────────
  t4_108: {
    kind: 'barChart',
    yLabel: 'モーメント(g・cm)',
    bars: [
      { label: '8g×10cm', value: 80 },
      { label: '6g×20cm', value: 120 },
      { label: '4g×30cm', value: 120 },
    ],
    caption: '合計320。右16cmならx＝320÷16＝20g。おもりごとに距離をかけてから足す',
  },
  t4_109: {
    kind: 'barChart',
    yLabel: 'モーメント(g・cm)',
    bars: [
      { label: '左15cm(20g)', value: 300 },
      { label: '左25cm(8g)', value: 200 },
      { label: '右30cm(6g)', value: 180 },
      { label: '右10cm(x)', value: 320 },
    ],
    caption: '左合計500＝右の合計(180＋10x)。x＝32g。重さの合計だけで比べてはいけない',
  },
  t4_110: {
    kind: 'numberLine',
    min: -20,
    max: 10,
    step: 10,
    points: [
      { x: -20, label: '40g↓' },
      { x: -10, label: '20g↑' },
      { x: 0, label: '支点' },
      { x: 10, label: 'xg↓' },
    ],
    caption: '40g×20＝xg×10＋20g×10よりx＝60g。向きに注意して回転方向を見分ける',
  },
  t4_111a: {
    kind: 'numberLine',
    min: 0,
    max: 60,
    step: 10,
    points: [
      { x: 0, label: '40g' },
      { x: 20, label: '支点' },
      { x: 60, label: '20g' },
    ],
    caption: '40×20＝20×40が成り立つ位置(左端から20cm)が支点',
  },
  t4_111b: {
    kind: 'barChart',
    yLabel: 'モーメント(g・cm)',
    bars: [
      { label: '左100g×20cm', value: 2000 },
      { label: '棒40g×20cm', value: 800 },
      { label: '右20g×60cm', value: 1200 },
    ],
    caption: '棒の重さを含めて2000＝800＋1200で確認。支点は左端から20cm',
  },
  t4_112: {
    kind: 'barChart',
    yLabel: 'モーメント(g・cm)',
    bars: [
      { label: '棒の重さ(30cm)', value: 2700 },
      { label: 'おもり(40cm)', value: 4800 },
      { label: '合計', value: 7500 },
    ],
    caption: 'F＝7500÷60＝125g。支点の力は(90＋120)－125＝85g',
  },
  t4_113: {
    kind: 'barChart',
    yLabel: '力(g)',
    bars: [
      { label: '入力(力点A)', value: 20 },
      { label: 'A出力＝B入力', value: 100 },
      { label: '最終出力(B作用点)', value: 400 },
    ],
    caption: '連結したてこの倍率はかけ算：5倍×4倍＝20倍',
  },
  t4_114: {
    kind: 'numberLine',
    min: -50,
    max: 80,
    step: 10,
    points: [
      { x: -50, label: '8kg' },
      { x: 0, label: '支点(肩)' },
      { x: 80, label: '5kg' },
    ],
    caption: '8kg×50cm＝5kg×dよりd＝80cm',
  },

  // ── 3. 輪軸 ─────────────────────────────
  t4_115: {
    kind: 'coordinate',
    xRange: [0, 30],
    yRange: [0, 90],
    hyperbolas: [{ k: 400, label: '力×半径＝400' }],
    points: [
      { x: 25, y: 16, label: '大輪16g' },
      { x: 5, y: 80, label: '小輪80g' },
    ],
    caption: '16g×25cm＝80g×5cm＝400',
  },
  t4_116: {
    kind: 'barChart',
    yLabel: '必要な力(g)',
    bars: [
      { label: '小輪(半径12cm)', value: 96 },
      { label: '大輪(半径48cm)', value: 24 },
    ],
    caption: '半径比4:1のとき力の比は1:4(逆比)。96÷4＝24g',
  },
  t4_117: {
    kind: 'barChart',
    yLabel: '1回転で動く距離(cm)',
    bars: [
      { label: '大輪(半径21cm)', value: 131.88 },
      { label: '小輪(半径7cm)', value: 43.96 },
    ],
    caption: '円周比は半径比と同じ3:1。力が小さい大輪の方が長く動く(仕事の原理)',
  },
  t4_118: {
    kind: 'coordinate',
    xRange: [0, 35],
    yRange: [0, 700],
    hyperbolas: [{ k: 3000, label: '力×半径＝3000' }],
    points: [
      { x: 30, y: 100, label: 'ハンドル100g' },
      { x: 5, y: 600, label: '軸600g' },
    ],
    caption: '100g×30cm＝600g×5cm＝3000。力点はハンドルの半径を使う',
  },
  t4_119: {
    kind: 'barChart',
    yLabel: '力(g)',
    bars: [
      { label: '物体の重さ', value: 420 },
      { label: '動滑車後の張力', value: 210 },
      { label: '大輪の力', value: 35 },
    ],
    caption: '動滑車で半分→輪軸で半径比、の順に段階的に計算する',
  },
  t4_120: {
    kind: 'barChart',
    yLabel: '力(g)',
    bars: [
      { label: '小輪(140g)', value: 140 },
      { label: '大輪の力', value: 40 },
    ],
    caption: '半径比7:2の逆比を使う。140×2÷7＝40g',
  },

  // ── 4. 定滑車・動滑車の基本 ─────────────────────────────
  t4_121: {
    kind: 'barChart',
    yLabel: '力(g)',
    bars: [
      { label: '物体の重さ', value: 350 },
      { label: '定滑車使用時の力', value: 350 },
    ],
    caption: '定滑車はいくつ組み合わせても力は変わらない。向きが変わるだけ',
  },
  t4_122a: {
    kind: 'barChart',
    yLabel: '力(g)',
    bars: [
      { label: '物体の重さ', value: 140 },
      { label: '動滑車使用時の力', value: 70 },
    ],
    caption: '動滑車1個で力は半分。140÷2＝70g',
  },
  t4_122b: {
    kind: 'barChart',
    yLabel: '距離(cm)',
    bars: [
      { label: '持ち上がる距離', value: 30 },
      { label: '引くひもの長さ', value: 60 },
    ],
    caption: '力が半分になった分、引く距離は2倍になる(仕事の原理)',
  },
  t4_123: {
    kind: 'barChart',
    yLabel: '重さ・力(g)',
    bars: [
      { label: '物体', value: 200 },
      { label: '動滑車', value: 30 },
      { label: '合計', value: 230 },
      { label: '必要な力', value: 115 },
    ],
    caption: '動滑車自身の重さも一緒に持ち上げる。230÷2＝115g',
  },
  t4_124: {
    kind: 'barChart',
    yLabel: '力(g)',
    bars: [
      { label: '物体の重さ', value: 260 },
      { label: '必要な力', value: 130 },
    ],
    caption: '定滑車は力を変えない。動滑車だけが力を半分にする。260÷2＝130g',
  },
  t4_125: {
    kind: 'barChart',
    yLabel: '必要な力(g)',
    bars: [
      { label: 'ひも1本', value: 320 },
      { label: 'ひも2本', value: 160 },
      { label: 'ひも4本', value: 80 },
    ],
    caption: '物体の重さ320gを支えるひもの本数で割る。本数は図で正しく数える',
  },
  t4_126: {
    kind: 'barChart',
    yLabel: '重さ・力(g)',
    bars: [
      { label: '物体＋動滑車2個分', value: 530 },
      { label: '必要な力(4本)', value: 132.5 },
    ],
    caption: '動滑車が2個あれば重さもそれぞれ加える。530÷4＝132.5g',
  },

  // ── 5. 滑車の組み合わせ ─────────────────────────────
  t4_127a: {
    kind: 'barChart',
    yLabel: '力(g)',
    bars: [
      { label: '物体の重さ', value: 480 },
      { label: '必要な力(4本)', value: 120 },
    ],
    caption: '動滑車2個の直列で力は4分の1。480÷4＝120g',
  },
  t4_127b: {
    kind: 'barChart',
    yLabel: '距離(cm)',
    bars: [
      { label: '持ち上がる距離', value: 24 },
      { label: '引くひもの長さ', value: 96 },
    ],
    caption: '力が4分の1になった分、引く距離は4倍になる',
  },
  t4_128: {
    kind: 'barChart',
    yLabel: '必要な力(g)',
    bars: [
      { label: 'ひも2本', value: 180 },
      { label: 'ひも3本', value: 120 },
      { label: 'ひも4本', value: 90 },
      { label: 'ひも5本', value: 72 },
    ],
    caption: '物体360gを支えるひもの本数で必要な力が変わる',
  },
  t4_129: {
    kind: 'barChart',
    yLabel: '力(g)',
    bars: [
      { label: '物体の重さ', value: 600 },
      { label: '必要な力(4本)', value: 150 },
    ],
    caption: '定滑車をいくつ挟んでも、ひもの本数と力の関係は変わらない。600÷4＝150g',
  },
  t4_130: {
    kind: 'barChart',
    yLabel: '力(g)',
    bars: [
      { label: '物体の重さ', value: 300 },
      { label: '必要な力(5本で支える)', value: 60 },
    ],
    caption: '天井に固定した端も支えるひもの1本として数える。300÷5＝60g',
  },
  t4_131: {
    kind: 'barChart',
    yLabel: '必要な力(g)',
    bars: [
      { label: '装置A(ひも2本)', value: 360 },
      { label: '装置B(ひも6本)', value: 120 },
    ],
    caption: 'Aは20cm引いて仕事7200、Bは60cm引いて仕事7200。どちらも仕事量は同じ',
  },
  t4_132: {
    kind: 'barChart',
    yLabel: '重さ・力(g)',
    bars: [
      { label: '物体＋動滑車の重さ', value: 400 },
      { label: '必要な力(4本)', value: 100 },
    ],
    caption: '400÷4＝100g。動滑車の重さも忘れずに加える',
  },

  // ── 6. ばねの伸び ─────────────────────────────
  t4_133: {
    kind: 'lineChart',
    xLabel: 'おもりの重さ(g)',
    yLabel: 'ばねの伸び(cm)',
    xRange: [0, 50],
    yRange: [0, 12],
    series: [
      { label: '伸び', markers: true, points: [{ x: 0, y: 0 }, { x: 20, y: 4 }, { x: 50, y: 10 }] },
    ],
    caption: '伸びは重さに比例(フックの法則)。全長は自然の長さ＋伸びで求める',
  },
  t4_134: {
    kind: 'lineChart',
    xLabel: 'おもりの重さ(g)',
    yLabel: 'ばねの伸び(cm)',
    xRange: [0, 30],
    yRange: [0, 9],
    series: [
      { label: '伸び', markers: true, points: [{ x: 0, y: 0 }, { x: 10, y: 3 }, { x: 20, y: 6 }, { x: 30, y: 9 }] },
    ],
    caption: 'グラフの範囲(0〜30g)でしか比例は保証されない。範囲外への単純な延長は禁物',
  },
  t4_135: {
    kind: 'barChart',
    yLabel: '伸び(cm)',
    bars: [
      { label: 'ばねA(30gで)', value: 6 },
      { label: 'ばねB(30gで)', value: 15 },
      { label: '合計(直列)', value: 21 },
    ],
    caption: '直列つなぎでは各ばねが同じ30gの力を受け、伸びを合計する',
  },
  t4_136: {
    kind: 'barChart',
    yLabel: '伸び(cm)',
    bars: [
      { label: 'ばね1本で20g支える', value: 8 },
      { label: '2本並列で20g(1本10g)', value: 4 },
    ],
    caption: '並列では同じ重さでも1本あたりの力が半分になり、伸びも半分になる',
  },
  t4_137: {
    kind: 'barChart',
    yLabel: '合計の伸び(cm)',
    bars: [
      { label: '直列つなぎ', value: 18 },
      { label: '並列つなぎ', value: 4 },
    ],
    caption: '同じ30gでも、つなぎ方で伸びは大きく変わる',
  },
  t4_138: {
    kind: 'lineChart',
    xLabel: 'おもりの重さ(g)',
    yLabel: '目盛り(cm)',
    xRange: [0, 100],
    yRange: [0, 8],
    series: [
      { label: '目盛り', markers: true, points: [{ x: 0, y: 0 }, { x: 100, y: 8 }] },
    ],
    caption: '100gで8cmの目盛り→1cmあたり12.5g。目盛りの値をそのまま重さと読んではいけない',
  },
  t4_139: {
    kind: 'barChart',
    yLabel: 'モーメント・力(g)',
    bars: [
      { label: 'おもり(84g×20cm)', value: 1680 },
      { label: 'ばね(30cmでの力)', value: 56 },
    ],
    caption: 'てこの距離とばね自身の伸び率は別の数値。混同しない',
  },

  // ── 7. 入試実戦演習 ─────────────────────────────
  t4_140: {
    kind: 'barChart',
    yLabel: '力(g)',
    bars: [
      { label: 'おもり', value: 90 },
      { label: '滑車後の張力', value: 45 },
      { label: 'てこの反対側(x)', value: 30 },
    ],
    caption: '動滑車で半分にしてからてこのモーメントを計算する',
  },
  t4_141: {
    kind: 'barChart',
    yLabel: '力(g)',
    bars: [
      { label: '力点入力', value: 24 },
      { label: 'てこ出力＝輪軸入力', value: 120 },
      { label: '小輪で支える重さ', value: 840 },
    ],
    caption: 'てこの出力がそのまま輪軸の入力になる。順番に計算する',
  },
  t4_142: {
    kind: 'barChart',
    yLabel: 'モーメント・力(g)',
    bars: [
      { label: '滑車の張力×40cm', value: 4000 },
      { label: 'ばねの力(16cm)', value: 250 },
    ],
    caption: 'モーメントからばねの力250gを求め、そこから伸び37.5cmを別途計算する',
  },
  t4_143a: {
    kind: 'lineChart',
    xLabel: 'おもりの重さ(g)',
    yLabel: 'ばねの伸び(cm)',
    xRange: [0, 80],
    yRange: [0, 12],
    series: [
      { label: '伸び', markers: true, points: [{ x: 20, y: 3 }, { x: 40, y: 6 }, { x: 60, y: 9 }, { x: 80, y: 12 }] },
    ],
    caption: '比例関係：0.15cm/gで一定。80gなら12cm',
  },
  t4_143b: {
    kind: 'coordinate',
    xRange: [0, 40],
    yRange: [0, 60],
    hyperbolas: [{ k: 600, label: '力×半径＝600' }],
    points: [
      { x: 10, y: 60, label: '10cmで60g' },
      { x: 20, y: 30, label: '20cmで30g' },
      { x: 30, y: 20, label: '30cmで20g' },
      { x: 40, y: 15, label: '40cmで15g' },
    ],
    caption: '反比例の関係。等差数列と勘違いしないこと',
  },
  t4_144: {
    kind: 'barChart',
    yLabel: 'モーメント(g・cm)',
    bars: [
      { label: '棒の重さ(50cm)', value: 2500 },
      { label: '滑車の張力(70cm)', value: 9800 },
      { label: '合計', value: 12300 },
    ],
    caption: '棒の重さのモーメントを忘れずに加える。F＝12300÷10＝1230g',
  },
  t4_145: {
    kind: 'barChart',
    yLabel: '力(g)',
    bars: [
      { label: '滑車張力(24cm)', value: 2880 },
      { label: '反対側16cm必要力', value: 180 },
    ],
    caption: '単位をg・kgで正しくそろえてから計算する',
  },
};
