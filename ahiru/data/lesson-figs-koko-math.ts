import type { Figure } from './figures';

// 高校受験 数学 の教科書用図解バッチ。キーは lessons-*.ts の figureId と対応。
export const lessonFigsKokoMath: Record<string, Figure> = {
  // ===== koko_math_01 方程式 =====

  // 連立方程式の解＝2直線の交点
  lf_kmath_01: {
    kind: 'coordinate',
    xRange: [-1, 6],
    yRange: [-4, 8],
    lines: [
      { a: -2 / 3, b: 4, label: '2x+3y=12' },
      { a: 4, b: -10, label: '4x−y=10' },
    ],
    points: [{ x: 3, y: 2, label: '(3, 2)' }],
    caption: '連立方程式の解 x=3, y=2 は、2直線の交点の座標と一致する',
  },

  // 二次方程式 2x²−3x−2=0 の解と放物線
  lf_kmath_02: {
    kind: 'coordinate',
    xRange: [-2, 3],
    yRange: [-5, 6],
    parabolas: [{ a: 2, b: -3, c: -2, label: 'y=2x²−3x−2' }],
    points: [
      { x: 2, y: 0, label: 'x=2' },
      { x: -0.5, y: 0, label: 'x=−1/2' },
    ],
    caption: '二次方程式 2x²−3x−2=0 の解は、放物線が x 軸と交わる点の x 座標',
  },

  // ===== koko_math_02 関数 =====

  // 比例と反比例のグラフ
  lf_kmath_03: {
    kind: 'coordinate',
    xRange: [-4, 4],
    yRange: [-8, 8],
    lines: [{ a: 2, b: 0, label: 'y=2x' }],
    hyperbolas: [{ k: 6, label: 'y=6/x' }],
    caption: '比例 y=2x は原点を通る直線、反比例 y=6/x は双曲線',
  },

  // 一次関数 y=2x+1
  lf_kmath_04: {
    kind: 'coordinate',
    xRange: [-2, 4],
    yRange: [-2, 7],
    lines: [{ a: 2, b: 1, label: 'y=2x+1' }],
    points: [
      { x: 0, y: 1, label: '(0, 1)' },
      { x: 1, y: 3, label: '(1, 3)' },
      { x: 2, y: 5, label: '(2, 5)' },
    ],
    caption: '切片 b=1 が y 軸との交点。傾き a=2 なので x が1増えるごとに y が2増える',
  },

  // 二次関数 y=x² と y=−x²
  lf_kmath_05: {
    kind: 'coordinate',
    xRange: [-3, 3],
    yRange: [-6, 6],
    parabolas: [
      { a: 1, label: 'y=x²' },
      { a: -1, label: 'y=−x²' },
    ],
    caption: 'a>0 は上向き（下に凸）、a<0 は下向き（上に凸）。どちらも y 軸について対称',
  },

  // 放物線と直線の交点
  lf_kmath_06: {
    kind: 'coordinate',
    xRange: [-3, 4],
    yRange: [-2, 8],
    parabolas: [{ a: 1, label: 'y=x²' }],
    lines: [{ a: 1, b: 2, label: 'y=x+2' }],
    points: [
      { x: -1, y: 1, label: '(−1, 1)' },
      { x: 2, y: 4, label: '(2, 4)' },
    ],
    caption: 'x²=x+2 を解くと x=−1, 2。二次方程式の解が交点の x 座標になる',
  },

  // ===== koko_math_03 平面図形 =====

  // 平行四辺形の性質
  lf_kmath_07: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 4, y: 0, label: 'B' },
      { x: 5.5, y: 2.5, label: 'C' },
      { x: 1.5, y: 2.5, label: 'D' },
    ],
    fill: true,
    diagonals: [[0, 2], [1, 3]],
    equalSides: [[0, 2], [1, 3]],
    caption: '平行四辺形は対辺が平行で等しく、2本の対角線は互いの中点で交わる',
  },

  // 中点連結定理
  lf_kmath_08: {
    kind: 'coordinate',
    xRange: [-3, 5],
    yRange: [-1, 5],
    segments: [
      [{ x: 1, y: 4 }, { x: -2, y: 0 }],
      [{ x: -2, y: 0 }, { x: 4, y: 0 }],
      [{ x: 4, y: 0 }, { x: 1, y: 4 }],
      [{ x: -0.5, y: 2 }, { x: 2.5, y: 2 }],
    ],
    points: [
      { x: 1, y: 4, label: 'A' },
      { x: -2, y: 0, label: 'B' },
      { x: 4, y: 0, label: 'C' },
      { x: -0.5, y: 2, label: 'M' },
      { x: 2.5, y: 2, label: 'N' },
    ],
    caption: '中点連結定理：M, N が AB, AC の中点なら MN∥BC かつ MN=BC÷2',
  },

  // 円周角の定理
  lf_kmath_09: {
    kind: 'circle',
    showCenter: true,
    points: [
      { angle: 230, label: 'A' },
      { angle: 310, label: 'B' },
      { angle: 90, label: 'P' },
      { angle: 150, label: 'Q' },
    ],
    chords: [[0, 2], [1, 2], [0, 3], [1, 3]],
    caption: '同じ弧 AB に対する円周角は等しい（∠APB＝∠AQB）。中心角は円周角の2倍',
  },

  // ===== koko_math_04 三平方の定理 =====

  // 三平方の定理（3-4-5の直角三角形）
  lf_kmath_10: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 3, y: 0, label: 'B' },
      { x: 0, y: 4, label: 'C' },
    ],
    fill: true,
    rightAngles: [0],
    sideLabels: ['a=3', 'c=5', 'b=4'],
    caption: '三平方の定理 a²+b²=c²。3²+4²=9+16=25=5² が成り立つ',
  },

  // 30-60-90の特別な直角三角形
  lf_kmath_11: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 1, y: 0, label: 'B' },
      { x: 0, y: 1.732, label: 'C' },
    ],
    fill: true,
    rightAngles: [0],
    sideLabels: ['1', '2', '√3'],
    caption: '30°-60°-90°（正三角形の半分）の辺の比は 1 : √3 : 2',
  },

  // 2点間の距離（距離公式）
  lf_kmath_12: {
    kind: 'coordinate',
    xRange: [0, 6],
    yRange: [0, 8],
    segments: [
      [{ x: 1, y: 3 }, { x: 4, y: 3 }],
      [{ x: 4, y: 3 }, { x: 4, y: 7 }],
      [{ x: 1, y: 3 }, { x: 4, y: 7 }],
    ],
    points: [
      { x: 1, y: 3, label: 'A(1, 3)' },
      { x: 4, y: 7, label: 'B(4, 7)' },
    ],
    caption: 'Δx=3, Δy=4 の直角三角形を作ると AB=√(3²+4²)=√25=5（距離公式）',
  },

  // 円錐の母線・半径・高さ（三平方）
  lf_kmath_13: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '6cm', height: '8cm', slant: '10cm' },
    caption: '母線10cm・底面半径6cm の円錐の高さは h=√(10²−6²)=√64=8cm',
  },

  // ===== koko_math_05 確率・統計 =====

  // さいころ2個の和の分布
  lf_kmath_14: {
    kind: 'barChart',
    yLabel: '場合の数',
    bars: [
      { label: '2', value: 1, color: '#0EA5E9' },
      { label: '3', value: 2, color: '#0EA5E9' },
      { label: '4', value: 3, color: '#0EA5E9' },
      { label: '5', value: 4, color: '#0EA5E9' },
      { label: '6', value: 5, color: '#0EA5E9' },
      { label: '7', value: 6, color: '#E11D48' },
      { label: '8', value: 5, color: '#0EA5E9' },
      { label: '9', value: 4, color: '#0EA5E9' },
      { label: '10', value: 3, color: '#0EA5E9' },
      { label: '11', value: 2, color: '#0EA5E9' },
      { label: '12', value: 1, color: '#0EA5E9' },
    ],
    caption: '2個のさいころの和の場合の数（全36通り）。和7が6通りで最多、確率は 6/36=1/6',
  },

  // 度数分布のヒストグラム
  lf_kmath_15: {
    kind: 'barChart',
    histogram: true,
    yLabel: '度数',
    bars: [
      { label: '10〜20', value: 5, color: '#0EA5E9' },
      { label: '20〜30', value: 8, color: '#0EA5E9' },
      { label: '30〜40', value: 7, color: '#0EA5E9' },
    ],
    caption: '度数分布表のヒストグラム（全体20）。相対度数＝度数÷全体で 0.25, 0.40, 0.35',
  },

  // 箱ひげ図
  lf_kmath_16: {
    kind: 'boxplot',
    min: 2,
    q1: 4.5,
    median: 8,
    q3: 12,
    max: 15,
    scaleMin: 0,
    scaleMax: 16,
    caption: 'データ 2,4,5,7,9,11,13,15 の箱ひげ図。四分位範囲 IQR=Q₃−Q₁=12−4.5=7.5',
  },

  // ===== koko_math_06 数と式・規則性 =====

  // 等差数列は直線状に並ぶ
  lf_kmath_17: {
    kind: 'lineChart',
    xLabel: 'n（番目）',
    yLabel: '第n項',
    xRange: [0, 6],
    yRange: [0, 21],
    series: [
      {
        label: '4n−1',
        markers: true,
        points: [
          { x: 1, y: 3 },
          { x: 2, y: 7 },
          { x: 3, y: 11 },
          { x: 4, y: 15 },
          { x: 5, y: 19 },
        ],
      },
    ],
    caption: '等差数列 3, 7, 11, 15, 19 …（公差4）。点は一直線に並び、第n項＝4n−1',
  },

  // マッチ棒の規則性
  lf_kmath_18: {
    kind: 'barChart',
    yLabel: 'マッチ棒の本数',
    bars: [
      { label: '1個', value: 4, color: '#0EA5E9' },
      { label: '2個', value: 7, color: '#0EA5E9' },
      { label: '3個', value: 10, color: '#0EA5E9' },
      { label: '4個', value: 13, color: '#0EA5E9' },
    ],
    caption: '正方形を n 個並べるマッチ棒は 4, 7, 10, 13 … と3本ずつ増え、3n+1 本',
  },

  // ===== koko_math_07 展開・因数分解 =====

  // (a+b)² の面積モデル
  lf_kmath_19: {
    kind: 'coordinate',
    xRange: [-0.5, 4],
    yRange: [-0.5, 4],
    polygon: [
      { x: 0, y: 0 },
      { x: 3, y: 0 },
      { x: 3, y: 3 },
      { x: 0, y: 3 },
    ],
    segments: [
      [{ x: 2, y: 0 }, { x: 2, y: 3 }],
      [{ x: 0, y: 2 }, { x: 3, y: 2 }],
    ],
    points: [
      { x: 1, y: 1, label: 'a²' },
      { x: 2.5, y: 1, label: 'ab' },
      { x: 1, y: 2.5, label: 'ab' },
      { x: 2.5, y: 2.5, label: 'b²' },
    ],
    caption: '一辺 a+b の正方形（a=2, b=1）。面積は a²+ab+ab+b²＝a²+2ab+b²',
  },

  // 因数分解と放物線の x 切片
  lf_kmath_20: {
    kind: 'coordinate',
    xRange: [-6, 2],
    yRange: [-2, 8],
    parabolas: [{ a: 1, b: 5, c: 6, label: 'y=x²+5x+6' }],
    points: [
      { x: -2, y: 0, label: 'x=−2' },
      { x: -3, y: 0, label: 'x=−3' },
    ],
    caption: 'x²+5x+6=(x+2)(x+3)。放物線が x 軸と交わる x=−2, −3 が因数分解の答えに対応',
  },

  // ===== koko_math_08 平方根 =====

  // √2・√3・√5 の数直線上の位置
  lf_kmath_21: {
    kind: 'numberLine',
    min: 0,
    max: 3,
    step: 1,
    points: [
      { x: 1.41, label: '√2' },
      { x: 1.73, label: '√3' },
      { x: 2.24, label: '√5' },
    ],
    caption: '√2≒1.41、√3≒1.73 は1と2の間、√5≒2.24 は2と3の間にある',
  },

  // √7 の整数部分
  lf_kmath_22: {
    kind: 'numberLine',
    min: 0,
    max: 4,
    step: 1,
    segments: [{ from: 2, to: 3, toOpen: true }],
    points: [{ x: 2.65, label: '√7' }],
    caption: '2²=4 ≤ 7 < 9=3² より 2≤√7<3。整数部分は2、小数部分は √7−2',
  },

  // ===== koko_math_09 空間図形 =====

  // 立方体の展開図
  lf_kmath_23: {
    kind: 'net',
    shape: 'cube',
    faceLabels: ['ア', 'イ', 'ウ', 'エ', 'オ', 'カ'],
    caption: '立方体の展開図（11種類のうち十字型）。組み立てると ア⇔ウ・イ⇔エ・オ⇔カ が向かい合う面',
  },

  // 円柱の体積・表面積
  lf_kmath_24: {
    kind: 'solid',
    shape: 'cylinder',
    labels: { radius: '3cm', height: '10cm' },
    caption: '体積＝π×3²×10＝90π cm³。表面積＝底面9π×2＋側面2π×3×10＝78π cm²',
  },

  // 円錐の体積・側面積
  lf_kmath_25: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '3cm', height: '4cm', slant: '5cm' },
    caption: '体積＝(1/3)π×3²×4＝12π cm³（柱の1/3）。側面積＝πrl＝π×3×5＝15π cm²',
  },

  // 球の体積・表面積
  lf_kmath_26: {
    kind: 'solid',
    shape: 'sphere',
    labels: { radius: '3cm' },
    caption: '半径3cmの球：体積＝(4/3)π×3³＝36π cm³、表面積＝4π×3²＝36π cm²',
  },

  // ===== koko_math_10 不等式 =====

  // 負の数を掛けると大小が逆転
  lf_kmath_27: {
    kind: 'numberLine',
    min: -6,
    max: 6,
    step: 2,
    points: [
      { x: -5, label: '−5' },
      { x: -2, label: '−2' },
      { x: 2, label: '2' },
      { x: 5, label: '5' },
    ],
    caption: '2<5 の両辺に −1 を掛けると −2>−5。負の数を掛ける・割ると不等号の向きが逆転する',
  },

  // 連立不等式の共通部分 2<x≤4
  lf_kmath_28: {
    kind: 'numberLine',
    min: 0,
    max: 6,
    step: 1,
    segments: [{ from: 2, to: 4, fromOpen: true, toOpen: false }],
    caption: 'x>2 と x≤4 の共通部分が解 2<x≤4。○は含まない・●は含む',
  },

  // 範囲に含まれる整数を数える
  lf_kmath_29: {
    kind: 'numberLine',
    min: -4,
    max: 4,
    step: 1,
    segments: [{ from: -2, to: 3, fromOpen: false, toOpen: true }],
    caption: '−2≤x<3 を満たす整数は −2, −1, 0, 1, 2 の5個。端の●○で個数が1つ変わる',
  },

  // ===== koko_math_11 平面図形の計量と作図 =====

  // 垂直二等分線（2点から等距離）
  lf_kmath_30: {
    kind: 'coordinate',
    xRange: [-4, 4],
    yRange: [-3, 4],
    segments: [
      [{ x: -2, y: -1 }, { x: 2, y: -1 }],
      [{ x: 0, y: -2.5 }, { x: 0, y: 3.5 }],
      [{ x: 0, y: 2 }, { x: -2, y: -1 }],
      [{ x: 0, y: 2 }, { x: 2, y: -1 }],
    ],
    points: [
      { x: -2, y: -1, label: 'A' },
      { x: 2, y: -1, label: 'B' },
      { x: 0, y: 2, label: 'P' },
    ],
    caption: '垂直二等分線上のどの点Pをとっても PA＝PB（2点から等距離の点の集まり）',
  },

  // おうぎ形の弧と面積
  lf_kmath_31: {
    kind: 'circle',
    showCenter: true,
    radiusLabel: '6cm',
    sector: { from: 0, to: 120, label: '120°' },
    caption: '半径6cm・中心角120°は円の1/3。弧＝2π×6×(120/360)＝4π cm、面積＝12π cm²',
  },

  // 五角形の内角の和（三角形に分割）
  lf_kmath_32: {
    kind: 'polygon',
    points: [
      { x: 0, y: 1, label: 'A' },
      { x: 0.951, y: 0.309, label: 'B' },
      { x: 0.588, y: -0.809, label: 'C' },
      { x: -0.588, y: -0.809, label: 'D' },
      { x: -0.951, y: 0.309, label: 'E' },
    ],
    fill: true,
    diagonals: [[0, 2], [0, 3]],
    caption: '1つの頂点からの対角線で五角形は3つの三角形に分かれる → 内角の和＝180°×3＝540°',
  },

  // 弓形＝おうぎ形−三角形
  lf_kmath_33: {
    kind: 'circle',
    showCenter: true,
    radiusLabel: '4cm',
    points: [
      { angle: 0, label: 'A' },
      { angle: 90, label: 'B' },
    ],
    chords: [[0, 1]],
    sector: { from: 0, to: 90 },
    caption: '弓形＝おうぎ形−三角形＝(π×4²×90/360)−(1/2×4×4)＝4π−8 cm²',
  },

  // ===== koko_math_12 二次関数と図形の融合 =====

  // 放物線上の2点から直線の式を求める
  lf_kmath_34: {
    kind: 'coordinate',
    xRange: [-5, 7],
    yRange: [-1, 14],
    parabolas: [{ a: 1 / 3, label: 'y=(1/3)x²' }],
    lines: [{ a: 1, b: 6, label: 'y=x+6' }],
    points: [
      { x: -3, y: 3, label: 'A(−3, 3)' },
      { x: 6, y: 12, label: 'B(6, 12)' },
    ],
    caption: '放物線上の点 A, B の座標から直線の式 y=x+6 を求める',
  },

  // △OABをy軸上の点で分割
  lf_kmath_35: {
    kind: 'coordinate',
    xRange: [-5, 7],
    yRange: [-1, 14],
    segments: [
      [{ x: 0, y: 0 }, { x: -3, y: 3 }],
      [{ x: 0, y: 0 }, { x: 6, y: 12 }],
      [{ x: -3, y: 3 }, { x: 6, y: 12 }],
      [{ x: 0, y: 0 }, { x: 0, y: 6 }],
    ],
    points: [
      { x: 0, y: 0, label: 'O' },
      { x: -3, y: 3, label: 'A' },
      { x: 6, y: 12, label: 'B' },
      { x: 0, y: 6, label: 'C(0,6)' },
    ],
    caption: '△OABをy軸上の点Cで分割：△OAC=9, △OBC=18、合計27',
  },

  // 等積変形（Pに平行な直線でQへ移す）
  lf_kmath_36: {
    kind: 'coordinate',
    xRange: [-6, 4],
    yRange: [-1, 6],
    parabolas: [{ a: 1, label: 'y=x²' }],
    lines: [{ a: 1, b: 5, label: 'Pを通りABに平行' }],
    points: [
      { x: -1, y: 1, label: 'A' },
      { x: 2, y: 4, label: 'B' },
      { x: 0, y: 5, label: 'P' },
      { x: -5, y: 0, label: 'Q' },
    ],
    caption: 'PをABに平行な直線上でQへ動かしても△ABPと△ABQの面積は変わらない',
  },

  // 動点Pの面積変化グラフ
  lf_kmath_37: {
    kind: 'lineChart',
    xLabel: 't',
    yLabel: '△OAPの面積 S',
    xRange: [0, 4],
    yRange: [0, 9],
    series: [
      {
        label: 'S=8t−2t²',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 1, y: 6 },
          { x: 2, y: 8 },
          { x: 3, y: 6 },
          { x: 4, y: 0 },
        ],
      },
    ],
    caption: '面積 S=8t−2t² は t=2 のとき最大値8。t=1, 3 のとき S=6',
  },

  // ===== koko_math_13 相似の応用 =====

  // 平行線と線分の比の定理
  lf_kmath_38: {
    kind: 'coordinate',
    xRange: [-4, 7],
    yRange: [-1, 7],
    segments: [
      [{ x: 0, y: 6 }, { x: -3, y: 0 }],
      [{ x: 0, y: 6 }, { x: 6, y: 0 }],
      [{ x: -3, y: 0 }, { x: 6, y: 0 }],
      [{ x: -2, y: 2 }, { x: 4, y: 2 }],
    ],
    points: [
      { x: 0, y: 6, label: 'A' },
      { x: -3, y: 0, label: 'B' },
      { x: 6, y: 0, label: 'C' },
      { x: -2, y: 2, label: 'D' },
      { x: 4, y: 2, label: 'E' },
    ],
    caption: 'DE∥BCのとき AD:AB=AE:AC=DE:BC（この例ではすべて2:3）',
  },

  // 原点を相似の中心とした拡大
  lf_kmath_39: {
    kind: 'coordinate',
    xRange: [-1, 9],
    yRange: [-1, 7],
    segments: [
      [{ x: 0, y: 0 }, { x: 4, y: 0 }],
      [{ x: 4, y: 0 }, { x: 4, y: 3 }],
      [{ x: 4, y: 3 }, { x: 0, y: 0 }],
      [{ x: 0, y: 0 }, { x: 8, y: 0 }],
      [{ x: 8, y: 0 }, { x: 8, y: 6 }],
      [{ x: 8, y: 6 }, { x: 0, y: 0 }],
    ],
    points: [
      { x: 0, y: 0, label: 'O' },
      { x: 4, y: 0, label: 'B(4,0)' },
      { x: 4, y: 3, label: 'C(4,3)' },
      { x: 8, y: 0, label: 'E(8,0)' },
      { x: 8, y: 6, label: 'F(8,6)' },
    ],
    caption: '原点を相似の中心として2倍に拡大：OB:OE=OC:OF=1:2で△OBC∽△OEF',
  },

  // 角の二等分線と比
  lf_kmath_40: {
    kind: 'coordinate',
    xRange: [-1, 11],
    yRange: [-1, 7],
    segments: [
      [{ x: 2.75, y: 5.33 }, { x: 0, y: 0 }],
      [{ x: 2.75, y: 5.33 }, { x: 10, y: 0 }],
      [{ x: 0, y: 0 }, { x: 10, y: 0 }],
      [{ x: 2.75, y: 5.33 }, { x: 4, y: 0 }],
    ],
    points: [
      { x: 2.75, y: 5.33, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 10, y: 0, label: 'C' },
      { x: 4, y: 0, label: 'D' },
    ],
    caption: '∠Aの二等分線ADが対辺BCを AB:AC=6:9=2:3 の比に分ける（BD:DC=2:3）',
  },

  // ===== koko_math_14 円と相似・方べきの定理 =====

  // 円に内接する四角形（対角の和180°）
  lf_kmath_41: {
    kind: 'circle',
    points: [
      { angle: 60, label: 'A' },
      { angle: 150, label: 'B' },
      { angle: 220, label: 'C' },
      { angle: 330, label: 'D' },
    ],
    chords: [[0, 1], [1, 2], [2, 3], [3, 0]],
    caption: '円に内接する四角形ABCDでは ∠A+∠C=180°、∠B+∠D=180°',
  },

  // 方べきの定理①：円内部で交わる弦
  lf_kmath_42: {
    kind: 'circle',
    points: [
      { angle: 10, label: 'A' },
      { angle: 100, label: 'C' },
      { angle: 170, label: 'B' },
      { angle: 260, label: 'D' },
    ],
    chords: [[0, 2], [1, 3]],
    caption: '弦ABと弦CDが円の内部の点Pで交わるとき、PA×PB＝PC×PDが成り立つ（方べきの定理）',
  },

  // 接弦定理（接線と弦のなす角＝円周角）
  lf_kmath_43: {
    kind: 'circle',
    points: [
      { angle: 0, label: 'T' },
      { angle: 120, label: 'A' },
      { angle: 240, label: 'C' },
    ],
    chords: [[0, 1], [1, 2], [0, 2]],
    caption: '接点Tでの接線と弦TAのなす角は、弧TAに対する円周角∠TCAに等しい（接弦定理）',
  },

  // ===== koko_math_15 動点問題 =====

  // 正方形の辺上を動く点P
  lf_kmath_44: {
    kind: 'coordinate',
    xRange: [-1, 9],
    yRange: [-1, 9],
    segments: [
      [{ x: 0, y: 0 }, { x: 8, y: 0 }],
      [{ x: 8, y: 0 }, { x: 8, y: 8 }],
      [{ x: 8, y: 8 }, { x: 0, y: 8 }],
      [{ x: 0, y: 8 }, { x: 0, y: 0 }],
    ],
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 8, y: 0, label: 'B' },
      { x: 8, y: 8, label: 'C' },
      { x: 0, y: 8, label: 'D' },
      { x: 3, y: 0, label: 'P(t=1.5)' },
    ],
    caption: '点PはAを出発し毎秒2cmでB→Cの順に動く。t秒後のAP=2t（0≤t≤4の間はAB上）',
  },

  // △APDの面積の変化グラフ（直線→一定）
  lf_kmath_45: {
    kind: 'lineChart',
    xLabel: 't（秒）',
    yLabel: '△APDの面積 S',
    xRange: [0, 8],
    yRange: [0, 36],
    series: [
      {
        label: 'S(t)',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 4, y: 32 },
          { x: 8, y: 32 },
        ],
      },
    ],
    caption: '0≤t≤4はS=8tで直線的に増加、4≤t≤8はS=32で一定（AD∥BCのため高さが変わらない）',
  },

  // 折れ線グラフから式を逆算する
  lf_kmath_46: {
    kind: 'lineChart',
    xLabel: 't（秒）',
    yLabel: '面積 S',
    xRange: [0, 7],
    yRange: [0, 14],
    series: [
      {
        label: 'S(t)',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 3, y: 12 },
          { x: 7, y: 12 },
        ],
      },
    ],
    caption: '0≤t≤3で直線的に増加(S=4t)、3≤t≤7で一定(S=12)。t=3の折れ目が点が次の辺へ移った時刻',
  },
};
