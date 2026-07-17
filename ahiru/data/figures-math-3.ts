import type { Figure } from './figures';

// 算数・数学の図形バッチ3（面積・合同・角度・関数グラフ・立体など）。
// エージェントが問題ごとに図形を追加する。
export const figuresMath3: Record<string, Figure> = {
  // y=2x² の放物線。x=-2〜2 の区間の端点 (-2,8),(2,8) を示す（変化の割合は問題の答えなので図示しない）。
  koko_gen_sansu_08: {
    kind: 'coordinate',
    xRange: [-3, 3],
    yRange: [-1, 9],
    parabolas: [{ a: 2 }],
    points: [
      { x: -2, y: 8 },
      { x: 2, y: 8 },
    ],
  },

  // y=-x²+4x+5 の放物線の概形（頂点・軸・最大値は答えなのでラベルを付けない）。
  koko_max_sansu_40: {
    kind: 'coordinate',
    xRange: [-3, 7],
    yRange: [-2, 11],
    parabolas: [{ a: -1, b: 4, c: 5 }],
  },

  // y=2x-1 と y=-x+5 の交点 P(2,3)。傾き3の直線（切片kが答え）は描かない。
  koko_moshi_sansu_12: {
    kind: 'coordinate',
    xRange: [-1, 5],
    yRange: [-3, 7],
    lines: [
      { a: 2, b: -1 },
      { a: -1, b: 5 },
    ],
    points: [{ x: 2, y: 3, label: 'P' }],
  },

  // 台形ABCD：AB=6, CD=4, BC=5, ∠ABC=90°。面積は答えなので図示しない。
  koko_moshi_sansu_26: {
    kind: 'polygon',
    points: [
      { x: 0, y: 6, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 5, y: 0, label: 'C' },
      { x: 5, y: 4, label: 'D' },
    ],
    sideLabels: ['6cm', '5cm', '4cm', null],
    rightAngles: [1],
  },

  // 一次関数 y=2x-3 の直線（傾き・切片・通る点は答えなのでラベルを付けない）。
  koko_nyushi_sansu_16: {
    kind: 'coordinate',
    xRange: [-2, 5],
    yRange: [-6, 6],
    lines: [{ a: 2, b: -3 }],
  },

  // △ABC の AB 上に P（AP:PB=1:2）をとり CP を引いた図。面積比は答えなので図示しない。
  koko_kankan_sansu_b_21: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 1, y: 0, label: 'P' },
      { x: 3, y: 0, label: 'B' },
      { x: 1.8, y: 2.6, label: 'C' },
    ],
    sideLabels: ['1', '2', null, null],
    diagonals: [[3, 1]],
  },

  // 縦12m・横9mの長方形とその対角線。対角線の長さ・正方形の面積は答えなので図示しない。
  koko_kankan_sansu_c2_10: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 9, y: 0, label: 'B' },
      { x: 9, y: 12, label: 'C' },
      { x: 0, y: 12, label: 'D' },
    ],
    sideLabels: ['9m', '12m', null, null],
    rightAngles: [0, 1, 2, 3],
    diagonals: [[0, 2]],
  },

  // 1辺6cmの正三角形（高さは答えなので図示しない）。
  koko_kankan_sansu_c2_22: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 6, y: 0, label: 'B' },
      { x: 3, y: 5.196, label: 'C' },
    ],
    sideLabels: ['6cm', '6cm', '6cm'],
    equalSides: [[0, 1, 2]],
  },

  // 半径13cmの円Oと、中心からの距離5cm・12cmの平行な2弦AB・CD。弦の長さは答えなので図示しない。
  koko_kankan_sansu_c2_28: {
    kind: 'circle',
    showCenter: true,
    points: [
      { angle: 157.38, label: 'A' },
      { angle: 22.62, label: 'B' },
      { angle: 112.62, label: 'C' },
      { angle: 67.38, label: 'D' },
    ],
    chords: [
      [0, 1],
      [2, 3],
    ],
    caption: '半径13cm・平行な2弦 AB, CD',
  },

  // ∠C=90°の直角三角形（AC=9, BC=12）と、Cから斜辺ABへの垂線CH。CH・AH・BHは答えなので図示しない。
  koko_kankan_sansu_c2_34: {
    kind: 'polygon',
    points: [
      { x: 0, y: 9, label: 'A' },
      { x: 12, y: 0, label: 'B' },
      { x: 0, y: 0, label: 'C' },
    ],
    sideLabels: [null, '12cm', '9cm'],
    rightAngles: [2],
    heights: [{ from: 2, toEdge: [0, 1] }],
  },

  // 底面の半径4cm・高さ9cmの円柱（体積は答えなので図示しない）。
  koko_kankan_sansu_c5_02: {
    kind: 'solid',
    shape: 'cylinder',
    labels: { radius: '4cm', height: '9cm' },
  },

  // y=x²-4x+3 の放物線の概形（頂点・軸は答えなのでラベルを付けない）。
  koko_sansu_ex_02_004: {
    kind: 'coordinate',
    xRange: [-1, 5],
    yRange: [-2, 6],
    parabolas: [{ a: 1, b: -4, c: 3 }],
  },

  // 比例のグラフ y=2x（各点のy値は答えなので個別に図示しない）。
  koko_sansu_ex_17_030: {
    kind: 'coordinate',
    xRange: [-3, 3],
    yRange: [-6, 6],
    lines: [{ a: 2, b: 0 }],
  },

  // 底面の半径5cm・母線13cmの円すい（高さ・体積は答えなので図示しない）。
  seifu_v2_s007: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '5cm', slant: '13cm' },
  },

  // 時間（分）と道のり（m）の折れ線グラフ。休憩後の速さは答えなので図示しない。
  kankan_top_sansu_045: {
    kind: 'coordinate',
    xRange: [0, 27],
    yRange: [0, 2600],
    segments: [
      [
        { x: 0, y: 0 },
        { x: 10, y: 1200 },
      ],
      [
        { x: 10, y: 1200 },
        { x: 15, y: 1200 },
      ],
      [
        { x: 15, y: 1200 },
        { x: 25, y: 2400 },
      ],
    ],
    points: [
      { x: 10, y: 1200 },
      { x: 15, y: 1200 },
      { x: 25, y: 2400 },
    ],
    caption: '横軸：時間（分）／縦軸：道のり（m）',
  },

  // 2点(2,1),(-1,7)を通る一次関数。式（＝答え）を示す直線は描かず、2点のみ図示する。
  term1_2026_koko_sansu_026: {
    kind: 'coordinate',
    xRange: [-3, 4],
    yRange: [-1, 9],
    points: [
      { x: 2, y: 1 },
      { x: -1, y: 7 },
    ],
  },
};
