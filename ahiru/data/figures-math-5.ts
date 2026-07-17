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
  },

  // 放物線 y=x² と直線 y=2x+3（囲まれた図形）
  koko_meidai_sansu_02: {
    kind: 'coordinate',
    xRange: [-3, 5],
    yRange: [-2, 12],
    parabolas: [{ a: 1 }],
    lines: [{ a: 2, b: 3 }],
  },

  // 放物線 y=ax²（点(2,-8)を通る上に凸のグラフ／与えられたグラフ）
  koko_kankan_sansu_c1_24: {
    kind: 'coordinate',
    xRange: [-4, 4],
    yRange: [-20, 3],
    parabolas: [{ a: -2 }],
    points: [{ x: 2, y: -8, label: '(2, -8)' }],
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
  },

  // 立方体（頂点・辺・面の数）
  koko_kankan_sansu_c5_06: {
    kind: 'solid',
    shape: 'cube',
    caption: '立方体',
  },

  // 1辺6cmの立方体（対角線を含む切断）
  koko_kankan_sansu_c5_13: {
    kind: 'solid',
    shape: 'cube',
    labels: { width: '6cm' },
  },

  // 1辺4cmの立方体（頂点付近の切断）
  koko_kankan_sansu_c5_24: {
    kind: 'solid',
    shape: 'cube',
    labels: { width: '4cm' },
  },

  // 一次関数 y=2x-4 のグラフ（式は問題文で与えられている）
  koko_sansu_ex_03_009: {
    kind: 'coordinate',
    xRange: [-2, 5],
    yRange: [-6, 6],
    lines: [{ a: 2, b: -4 }],
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
  },

  // 時間（分）と2人の間の距離（m）のグラフ
  kankan_top_sansu_057: {
    kind: 'coordinate',
    xRange: [0, 14],
    yRange: [0, 1100],
    lines: [{ a: 80, b: 0 }],
    points: [{ x: 12, y: 960, label: '(12, 960)' }],
    caption: '横軸：時間（分）／縦軸：2人の間の距離（m）',
  },
};
