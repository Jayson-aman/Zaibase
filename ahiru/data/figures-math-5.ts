import type { Figure } from './figures';

// 算数・数学の図形バッチ5（面積・合同・角度・関数グラフ・立体など）。
// エージェントが問題ごとに図形を追加する。
export const figuresMath5: Record<string, Figure> = {
  // 放物線 y=ax²（点(-3,18)を通る／与えられたグラフ）
  koko_max_sansu_02: {
    kind: 'coordinate',
    xRange: [-4, 3],
    yRange: [-2, 20],
    parabolas: [{ a: 2 }],
    points: [{ x: -3, y: 18, label: '(-3, 18)' }],
    steps: [
      '(−3, 18) を代入: 18 = a×9 → a = 2',
      'x=0で最小値0（変域内に含まれる）、x=−2でy=8、x=1でy=2 → 最大はy=8',
      'yの変域: 0 ≤ y ≤ 8',
    ],
  },

  // 一次関数 y=2x-3 のグラフ（式は問題文で与えられている）
  koko_kiso_sansu_12: {
    kind: 'coordinate',
    xRange: [-2, 5],
    yRange: [-5, 7],
    lines: [{ a: 2, b: -3 }],
  },

  // 箱ひげ図（最小20・Q1=40・中央60・Q3=75・最大90）
  koko_oyo_sansu_28: {
    kind: 'boxplot',
    min: 20,
    q1: 40,
    median: 60,
    q3: 75,
    max: 90,
    scaleMin: 0,
    scaleMax: 100,
    steps: [
      '四分位範囲 = Q3 − Q1 = 75 − 40 = 35（③は正しい）',
      '範囲 = 最大値 − 最小値 = 90 − 20 = 70（④は正しい）',
    ],
  },

  // 放物線 y=x² 上の動点 P と、x軸に下ろした垂線・台形
  koko_moshi_sansu_14: {
    kind: 'coordinate',
    xRange: [-1, 4],
    yRange: [-1, 10],
    parabolas: [{ a: 1 }],
    polygon: [
      { x: 1, y: 0 },
      { x: 3, y: 0 },
      { x: 3, y: 9 },
      { x: 1, y: 1 },
    ],
    points: [
      { x: 1, y: 1, label: 'P₁' },
      { x: 3, y: 9, label: 'P₂' },
      { x: 1, y: 0, label: 'H₁' },
      { x: 3, y: 0, label: 'H₂' },
    ],
    caption: '放物線 y=x² 上の点 P と垂線 PH',
    steps: [
      '上底 = P₁の y座標 = 1',
      '下底 = P₂の y座標 = 9',
      '高さ = H₂の x座標 − H₁の x座標 = 3 − 1 = 2',
      '台形の面積 = (1 + 9) × 2 ÷ 2 = 10',
    ],
  },

  // 一次関数 y=-2x+4 のグラフ（式は問題文で与えられている）
  koko_kiso_sansu_b_22: {
    kind: 'coordinate',
    xRange: [-2, 5],
    yRange: [-4, 8],
    lines: [{ a: -2, b: 4 }],
  },

  // 長方形ABCD（AP=8, BQ=9）と対角線 DP・DQ
  toin_sansu_r02: {
    kind: 'polygon',
    points: [
      { x: 0, y: 15, label: 'A' },
      { x: 8, y: 15, label: 'P' },
      { x: 20, y: 15, label: 'B' },
      { x: 20, y: 6, label: 'Q' },
      { x: 20, y: 0, label: 'C' },
      { x: 0, y: 0, label: 'D' },
    ],
    sideLabels: ['8cm', null, '9cm', null, '20cm', '15cm'],
    rightAngles: [0, 2, 4, 5],
    diagonals: [
      [5, 1],
      [5, 3],
    ],
    caption: '長方形ABCD（縦15cm・横20cm）',
    steps: [
      '△DAP = (1/2) × DA × AP = (1/2) × 15 × 8 = 60cm²',
      '△BPQ = (1/2) × BP × BQ = (1/2) × 12 × 9 = 54cm²',
      '△QCD = (1/2) × QC × CD = (1/2) × 6 × 20 = 60cm²',
      '△DPQ = 長方形300cm² − 60 − 54 − 60 = 126cm²（長方形全体の21/50）',
    ],
  },

  // 放物線 y=x² と直線 y=2x+3（囲まれた図形）
  koko_meidai_sansu_02: {
    kind: 'coordinate',
    xRange: [-3, 5],
    yRange: [-2, 12],
    parabolas: [{ a: 1 }],
    lines: [{ a: 2, b: 3 }],
    steps: [
      'x²=2x+3 → x²−2x−3=0 → (x−3)(x+1)=0 → x=3, x=−1 → 交点(3,9)と(−1,1)',
      '面積 = ∫₋₁³ [(2x+3)−x²] dx = 32/3',
      '点(2,4)での接線: y′=2x → x=2で傾き4 → y=4x−4',
    ],
  },

  // 放物線 y=ax²（点(2,-8)を通る上に凸のグラフ／与えられたグラフ）
  koko_kankan_sansu_c1_24: {
    kind: 'coordinate',
    xRange: [-4, 4],
    yRange: [-20, 3],
    parabolas: [{ a: -2 }],
    points: [{ x: 2, y: -8, label: '(2, -8)' }],
    steps: [
      '(2,−8)を代入: −8 = a×2² = 4a → a = −2',
      'x=−3のとき: y = −2×(−3)² = −2×9 = −18',
      'a=−2<0なので上に凸',
    ],
  },

  // 3辺 x, x+1, x+2 の直角三角形（x+2 が斜辺）
  koko_kankan_sansu_c2_06: {
    kind: 'polygon',
    points: [
      { x: 0, y: 6 },
      { x: 5, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['(x+2)cm', 'xcm', '(x+1)cm'],
    rightAngles: [2],
  },

  // 座標平面上の3点 A(1,1), B(5,4), C(1,4)
  koko_kankan_sansu_c2_24: {
    kind: 'coordinate',
    xRange: [0, 6],
    yRange: [0, 5],
    polygon: [
      { x: 1, y: 1, label: 'A' },
      { x: 5, y: 4, label: 'B' },
      { x: 1, y: 4, label: 'C' },
    ],
    points: [
      { x: 1, y: 1, label: 'A' },
      { x: 5, y: 4, label: 'B' },
      { x: 1, y: 4, label: 'C' },
    ],
    steps: [
      'AB=√(4²+3²)=5、AC=√(0²+3²)=3、BC=√(4²+0²)=4',
      'AC²+BC²=9+16=25=AB² → ∠C=90°（三平方の定理の逆）',
      '面積 = AC×BC÷2 = 3×4÷2 = 6',
    ],
  },

  // △ABC の∠Aの二等分線と辺BCの交点D（AB=8, AC=6, BC=10.5）
  koko_kankan_sansu_c2_30: {
    kind: 'polygon',
    points: [
      { x: 6.58, y: 4.55, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 6, y: 0, label: 'D' },
      { x: 10.5, y: 0, label: 'C' },
    ],
    sideLabels: ['8cm', null, null, '6cm'],
    diagonals: [[0, 2]],
    caption: 'AD は∠Aの二等分線',
    steps: [
      '角の二等分線の定理: BD:DC = AB:AC = 8:6 = 4:3',
      'BD = 10.5×4/7 = 6cm',
      'DC = 10.5×3/7 = 4.5cm',
    ],
  },

  // 円に内接する正六角形（対角線を表示）
  koko_kankan_sansu_c2_36: {
    kind: 'circle',
    showCenter: true,
    points: [
      { angle: 0 },
      { angle: 60 },
      { angle: 120 },
      { angle: 180 },
      { angle: 240 },
      { angle: 300 },
    ],
    chords: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 0],
      [0, 3],
      [0, 2],
    ],
    caption: '円に内接する正六角形と対角線',
    steps: [
      '正六角形の1辺=外接円の半径 → 半径=6cm、直径=6×2=12cm',
      '1つ飛ばしの対角線: 底辺の半分=6×sin60°=3√3cm',
      '対角線 = 2×3√3 = 6√3cm',
    ],
  },

  // 立方体（頂点・辺・面の数）
  koko_kankan_sansu_c5_06: {
    kind: 'solid',
    shape: 'cube',
    caption: '立方体',
    steps: [
      '頂点の数 V = 8（上面4個＋下面4個）',
      '辺の数 E = 12（上面4本＋下面4本＋縦の辺4本）',
      '面の数 F = 6',
      'V−E+F = 8−12+6 = 2（オイラーの公式が成立）',
    ],
  },

  // 1辺6cmの立方体（対角線を含む切断）
  koko_kankan_sansu_c5_13: {
    kind: 'solid',
    shape: 'cube',
    labels: { width: '6cm' },
    steps: [
      '面の対角線 = √(6²+6²) = √72 = 6√2cm',
      '切り口の面積 = 6 × 6√2 = 36√2cm²',
    ],
  },

  // 1辺4cmの立方体（頂点付近の切断）
  koko_kankan_sansu_c5_24: {
    kind: 'solid',
    shape: 'cube',
    labels: { width: '4cm' },
    steps: [
      '切り口の一辺 = 面の対角線 = 4×√2 = 4√2cm',
      '正三角形の面積 = (√3/4)×(4√2)² = (√3/4)×32 = 8√3cm²',
    ],
  },

  // 一次関数 y=2x-4 のグラフ（式は問題文で与えられている）
  koko_sansu_ex_03_009: {
    kind: 'coordinate',
    xRange: [-2, 5],
    yRange: [-6, 6],
    lines: [{ a: 2, b: -4 }],
    steps: [
      'x切片: y=0を代入 → 0=2x−4 → x=2 → (2,0)',
      'y切片: x=0を代入 → y=2×0−4=−4 → (0,−4)',
      '傾き = xの係数 = 2',
    ],
  },

  // 二次関数 y=ax²+bx+c（頂点(2,-1)・点(0,3)を通る／与えられたグラフ）
  koko_sansu_ex_12_028: {
    kind: 'coordinate',
    xRange: [-1, 5],
    yRange: [-2, 6],
    parabolas: [{ a: 1, b: -4, c: 3 }],
    points: [
      { x: 0, y: 3, label: '(0, 3)' },
      { x: 2, y: -1, label: '頂点(2, -1)' },
    ],
    steps: [
      '頂点形式: y=a(x−2)²−1',
      '(0,3)を代入: 3=4a−1 → a=1',
      '展開: y=(x−2)²−1=x²−4x+3 → b=−4, c=3',
    ],
  },

  // 時間（分）と2人の間の距離（m）のグラフ
  kankan_top_sansu_057: {
    kind: 'coordinate',
    xRange: [0, 14],
    yRange: [0, 1100],
    lines: [{ a: 80, b: 0 }],
    points: [{ x: 12, y: 960, label: '(12, 960)' }],
    caption: '横軸：時間（分）／縦軸：2人の間の距離（m）',
    steps: [
      '2人の速さの和 = 960÷12 = 毎分80m',
      '兄=x+10, 弟=xとして: x+(x+10)=80 → 2x=70 → x=35',
    ],
  },
};
