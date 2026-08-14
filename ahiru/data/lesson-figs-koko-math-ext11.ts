import type { Figure } from './figures';

// 高校受験 数学「融合問題・思考力問題（難関私立・公立自校作成レベル）」拡張ユニット
// （koko_math_s376〜koko_math_s410）の教科書用図解。
// キーは lessons-koko-math-ext11.ts の figureId と対応（35課中16課＝約46%）。
// 数値はすべて本文の解答と一致するよう検算済み。
export const lessonFigsKokoMathExt11: Record<string, Figure> = {
  // s376：放物線 y=x² と直線 y=x+2 の交点、△OAB の面積
  lf_kokomathext11_376: {
    kind: 'coordinate',
    xRange: [-3, 4],
    yRange: [-1, 10],
    parabolas: [{ a: 1, label: 'y=x²' }],
    lines: [{ a: 1, b: 2, label: 'y=x+2' }],
    points: [
      { x: -1, y: 1, label: 'A(−1, 1)' },
      { x: 2, y: 4, label: 'B(2, 4)' },
      { x: 0, y: 2, label: 'C(0, 2)' },
    ],
    polygon: [
      { x: 0, y: 0, label: 'O' },
      { x: -1, y: 1 },
      { x: 2, y: 4 },
    ],
    caption:
      'y=x² と y=x+2 の交点は A(−1, 1) と B(2, 4)。△OAB は y 軸との交点 C(0, 2) で二つに切り、OC=2 を共通の底辺とみて (1/2)×2×1＋(1/2)×2×2＝3 と求める',
  },

  // s378：等積変形（O を通り AB に平行な直線を引く）
  lf_kokomathext11_378: {
    kind: 'coordinate',
    xRange: [-2, 4],
    yRange: [-1, 11],
    parabolas: [{ a: 1, label: 'y=x²' }],
    lines: [
      { a: 2, b: 3, label: 'y=2x+3' },
      { a: 2, b: 0, label: 'y=2x' },
    ],
    points: [
      { x: -1, y: 1, label: 'A(−1, 1)' },
      { x: 3, y: 9, label: 'B(3, 9)' },
      { x: 2, y: 4, label: 'P(2, 4)' },
    ],
    caption:
      '直線 AB は y=2x+3、△OAB=6。O を通って AB に平行な直線 y=2x を引き、放物線との交点のうち原点でない方をとると P(2, 4)。AB を共通の底辺とみると高さが等しいので △PAB=△OAB=6（等積変形）',
  },

  // s381：y=ax² の a を決めてから面積へ進む誘導型
  lf_kokomathext11_381: {
    kind: 'coordinate',
    xRange: [-4, 7],
    yRange: [-1, 13],
    parabolas: [{ a: 1 / 3, label: 'y=(1/3)x²' }],
    lines: [
      { a: 1, b: 6, label: 'y=x+6' },
      { a: 1, b: 0, label: 'y=x' },
    ],
    points: [
      { x: -3, y: 3, label: 'A(−3, 3)' },
      { x: 6, y: 12, label: 'B(6, 12)' },
      { x: 3, y: 3, label: 'P(3, 3)' },
      { x: 0, y: 6, label: 'C(0, 6)' },
    ],
    caption:
      'A(−3, 3) を通るので a=1/3。B の x 座標が 6 なら y=12。直線 AB は y=x+6 で C(0, 6)、△OAB=(1/2)×6×9＝27。O を通り AB に平行な y=x と放物線の交点 P(3, 3) で △ABP=27 になる',
  },

  // s382：長方形の周上を動く点と面積のグラフ（3区間の折れ線）
  lf_kokomathext11_382: {
    kind: 'lineChart',
    xLabel: '時間 t（秒）',
    yLabel: '△APD の面積 y（cm²）',
    xRange: [0, 8],
    yRange: [0, 14],
    series: [
      {
        label: 'y',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 3, y: 12 },
          { x: 5, y: 12 },
          { x: 8, y: 0 },
        ],
      },
    ],
    caption:
      '長方形 ABCD（AB=6cm、AD=4cm）の周上を点 P が A→B→C→D と毎秒2cmで動くときの △APD の面積。0≤t≤3 は y=4t、3≤t≤5 は y=12 で一定、5≤t≤8 は y=32−4t。y=8 になるのは t=2 と t=6 の2回',
  },

  // s383：直角三角形上を2点が同時に動く
  lf_kokomathext11_383: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'B' },
      { x: 6, y: 0, label: 'C' },
      { x: 0, y: 8, label: 'A' },
    ],
    sideLabels: ['BC=6cm', 'CA=10cm', 'AB=8cm'],
    rightAngles: [0],
    fill: true,
    caption:
      '∠B=90°、AB=8cm、BC=6cm なので三平方より CA=10cm。点 P は A を出発して AB 上を、点 Q は B を出発して BC 上を、ともに毎秒1cmで動く。t 秒後は PB=8−t、BQ=t なので △PBQ=(1/2)t(8−t)（0≤t≤6）',
  },

  // s385：放物線上の動点と三角形の面積の最大
  lf_kokomathext11_385: {
    kind: 'coordinate',
    xRange: [-1, 4],
    yRange: [-1, 10],
    parabolas: [{ a: 1, label: 'y=x²' }],
    lines: [{ a: 3, b: 0, label: 'y=3x' }],
    points: [
      { x: 3, y: 9, label: 'A(3, 9)' },
      { x: 1.5, y: 2.25, label: 'P' },
      { x: 1.5, y: 4.5, label: 'Q' },
    ],
    segments: [
      [
        { x: 1.5, y: 2.25 },
        { x: 1.5, y: 4.5 },
      ],
    ],
    caption:
      'P(t, t²) を通り y 軸に平行な直線が直線 OA（y=3x）と交わる点を Q(t, 3t) とすると PQ=3t−t²。△OAP＝(1/2)×PQ×（A と O の x 座標の差3）＝(3/2)(3t−t²) で、t=3/2 のとき最大値 27/8',
  },

  // s386：直角三角形の斜辺への垂線と三つの相似
  lf_kokomathext11_386: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'B' },
      { x: 10, y: 0, label: 'C' },
      { x: 3.6, y: 4.8, label: 'A' },
    ],
    sideLabels: ['BC=10cm', 'CA=8cm', 'AB=6cm'],
    rightAngles: [2],
    heights: [{ from: 2, toEdge: [0, 1], label: 'AH=24/5cm' }],
    caption:
      '∠A=90°、AB=6cm、AC=8cm、BC=10cm。A から BC に下ろした垂線の足を H とすると △ABC∽△HBA∽△HAC。AH＝6×8÷10＝24/5cm、BH＝6²÷10＝18/5cm、CH＝8²÷10＝32/5cm（AH²＝BH×CH も成り立つ）',
  },

  // s388：正方形の折り返し（折り目 PQ の位置と長さ）
  lf_kokomathext11_388: {
    kind: 'polygon',
    points: [
      { x: 0, y: 10, label: 'A' },
      { x: 0, y: 3.75, label: 'P' },
      { x: 0, y: 0, label: 'B' },
      { x: 5, y: 0, label: 'M' },
      { x: 10, y: 0, label: 'C' },
      { x: 10, y: 8.75, label: 'Q' },
      { x: 10, y: 10, label: 'D' },
    ],
    sideLabels: ['AP=25/4', 'PB=15/4', 'BM=5', 'MC=5', 'CQ=35/4', 'QD=5/4', 'DA=10'],
    rightAngles: [0, 2, 4, 6],
    diagonals: [
      [1, 5],
      [0, 3],
    ],
    caption:
      '一辺10cmの正方形ABCD。頂点 A が辺 BC の中点 M に重なるように折ったときの折り目が線分 PQ。AP=PM=25/4cm、BP=15/4cm、DQ=5/4cm、折り目 PQ＝√(10²+5²)＝5√5 cm',
  },

  // s390：円の中で交わる2弦がつくる角
  lf_kokomathext11_390: {
    kind: 'circle',
    points: [
      { angle: 160, label: 'A' },
      { angle: 40, label: 'B' },
      { angle: 320, label: 'C' },
      { angle: 230, label: 'D' },
    ],
    chords: [
      [0, 2],
      [1, 3],
    ],
    showCenter: true,
    caption:
      '弦 AC と弦 BD の交点を P とすると、∠APB は △APD の外角なので ∠APB＝∠PAD＋∠ADP＝（弧CDの円周角）＋（弧ABの円周角）。弧AB の中心角が80°、弧CD の中心角が60°なら ∠APB＝40°＋30°＝70°',
  },

  // s391：直径を1辺とする直角三角形の総合
  lf_kokomathext11_391: {
    kind: 'circle',
    radiusLabel: '5cm',
    points: [
      { angle: 180, label: 'A' },
      { angle: 0, label: 'B' },
      { angle: 106, label: 'C' },
    ],
    chords: [
      [0, 1],
      [0, 2],
      [1, 2],
    ],
    showCenter: true,
    caption:
      'AB は直径（10cm）だから ∠ACB＝90°。AC=6cm なら三平方より BC=8cm。C から AB に下ろした垂線 CH は 6×8÷10＝24/5cm、AH＝18/5cm、BH＝32/5cm、OH＝5−18/5＝7/5cm。△ACH と △CBH の相似比は3:4、面積比は9:16',
  },

  // s392：立方体を A・C・F を通る平面で切る
  lf_kokomathext11_392: {
    kind: 'solid',
    shape: 'cube',
    labels: { width: '6cm', depth: '6cm', height: '6cm' },
    caption:
      '一辺6cmの立方体 ABCD-EFGH を頂点 A・C・F を通る平面で切ると、断面は一辺 6√2cm の正三角形で面積は 18√3cm²。切り取られる三角錐 B-ACF の体積は (1/3)×(1/2×6×6)×6＝36cm³、残りは 216−36＝180cm³ で体積比は 1:5',
  },

  // s393：立方体を6辺の中点を通る平面で切ると正六角形
  lf_kokomathext11_393: {
    kind: 'solid',
    shape: 'cube',
    labels: { width: '6cm', depth: '6cm', height: '6cm' },
    caption:
      '一辺6cmの立方体で、6本の辺の中点を通る平面で切ると断面は一辺 3√2cm の正六角形。面積は正三角形6個分で (√3/4)×(3√2)²×6＝27√3cm²。この平面は立方体の中心を通るので、体積は 108cm³ ずつに2等分される',
  },

  // s395：円錐の展開図・高さ・体積
  lf_kokomathext11_395: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '3cm', slant: '9cm', height: '6√2cm' },
    caption:
      '底面の半径3cm、母線9cmの円錐。側面の展開図は中心角 360°×3/9＝120° のおうぎ形。側面積は π×3×9＝27π cm²、表面積は 27π＋9π＝36π cm²。高さは √(9²−3²)＝6√2cm、体積は (1/3)×9π×6√2＝18√2 π cm³',
  },

  // s396：直方体の対角線と表面の最短距離
  lf_kokomathext11_396: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '4cm', depth: '3cm', height: '12cm' },
    caption:
      '3cm×4cm×12cm の直方体。内部を通る対角線は √(3²+4²+12²)＝√169＝13cm。表面を通って向かい合う頂点へ行く最短の道は、展開図で √((3+4)²+12²)＝√193cm（他の展開の仕方だと √241cm、√265cm になり、これらより短い）',
  },

  // s406：絶対値の方程式の場合分け
  lf_kokomathext11_406: {
    kind: 'numberLine',
    min: -6,
    max: 5,
    step: 1,
    points: [
      { x: -4, label: '解 x=−4' },
      { x: -3, label: '境目', open: true },
      { x: 2, label: '境目', open: true },
      { x: 3, label: '解 x=3' },
    ],
    caption:
      '|x−2|+|x+3|=7 は、絶対値の中身の符号が変わる x=−3 と x=2 で数直線を3つに分けて解く。x<−3 では −2x−1=7 → x=−4（範囲に合う）、−3≤x<2 では 5=7 となり解なし、2≤x では 2x+1=7 → x=3（範囲に合う）',
  },

  // s407：料金プランの比較（一次関数2本の交点）
  lf_kokomathext11_407: {
    kind: 'coordinate',
    xRange: [0, 200],
    yRange: [0, 6000],
    lines: [
      { a: 20, b: 2000, label: 'A社 y=20x+2000' },
      { a: 10, b: 3000, label: 'B社 y=10x+3000' },
    ],
    points: [{ x: 100, y: 4000, label: '(100, 4000)' }],
    caption:
      'A社は基本料2000円＋1分20円、B社は基本料3000円＋1分10円。2直線の交点は (100, 4000) で、通話100分のとき料金が等しくなる。100分より短ければA社、100分より長ければB社が安い',
  },
};
