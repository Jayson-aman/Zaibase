import type { Figure } from './figures';

// コア算数問題（sansu_01..50）の図解。図があると分かりやすい問題だけに付与。
// 純粋な計算問題（最大公約数・素因数分解・単純な四則など）や、
// 樹形図が必要な場合の数などは、図で理解が深まらないため付けていない。
export const figuresCoreSansu: Record<string, Figure> = {
  // 半径5cmの円の面積。円周率3.14 → 78.5㎠。
  sansu_03: {
    kind: 'circle',
    radiusLabel: '5cm',
    showCenter: true,
    caption: '面積 = 5×5×3.14 = 78.5㎠',
  },

  // 速さ・時間・距離の比例のグラフ。時速60km（傾き60）で2.5時間 → 150km。
  sansu_05: {
    kind: 'coordinate',
    xRange: [0, 3],
    yRange: [0, 180],
    lines: [{ a: 60, b: 0, label: 'y=60x' }],
    points: [{ x: 2.5, y: 150, label: '(2.5時間, 150km)' }],
    caption: '時速60km：2.5時間で150km',
    steps: [
      '2時間30分 = 2.5時間（30分 = 0.5時間）',
      '距離 = 速さ × 時間 = 60 × 2.5 = 150km',
    ],
  },

  // 1辺8cmの正方形と対角線AC。対角線 = 8√2 ≈ 11.31cm。
  sansu_07: {
    kind: 'polygon',
    points: [
      { x: 0, y: 8, label: 'A' },
      { x: 8, y: 8, label: 'B' },
      { x: 8, y: 0, label: 'C' },
      { x: 0, y: 0, label: 'D' },
    ],
    sideLabels: ['8cm', '8cm', null, null],
    rightAngles: [1],
    diagonals: [[0, 2]],
    caption: '対角線AC = 8√2 ≈ 11.31cm',
  },

  // 12%の食塩水200gの成分（食塩24g・水176g）。
  sansu_09: {
    kind: 'barChart',
    yLabel: 'g',
    yMax: 200,
    bars: [
      { label: '食塩', value: 24 },
      { label: '水', value: 176 },
    ],
    caption: '200g × 0.12 = 食塩24g',
  },

  // 三角形の内角の和 = 180°。
  sansu_11: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 8, y: 0, label: 'B' },
      { x: 3, y: 5, label: 'C' },
    ],
    caption: '3つの内角の和 = 180°',
  },

  // 1辺10cmの立方体。体積 = 10×10×10 = 1000cm³。
  sansu_13: {
    kind: 'solid',
    shape: 'cube',
    labels: { width: '10cm', depth: '10cm', height: '10cm' },
    caption: '体積 = 10×10×10 = 1000cm³',
  },

  // 底辺12cm・高さ8cmの三角形。面積 = 12×8÷2 = 48㎠。
  sansu_18: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 12, y: 0, label: 'B' },
      { x: 4, y: 8, label: 'C' },
    ],
    sideLabels: ['12cm', null, null],
    heights: [{ from: 2, toEdge: [0, 1], label: '8cm' }],
    caption: '面積 = 12×8÷2 = 48㎠',
  },

  // 植木算（円形）。周囲120mに8m間隔 → 120÷8 = 15本（円形は本数＝間隔数）。
  sansu_23: {
    kind: 'circle',
    points: [
      { angle: 0 },
      { angle: 24 },
      { angle: 48 },
      { angle: 72 },
      { angle: 96 },
      { angle: 120 },
      { angle: 144 },
      { angle: 168 },
      { angle: 192 },
      { angle: 216 },
      { angle: 240 },
      { angle: 264 },
      { angle: 288 },
      { angle: 312 },
      { angle: 336 },
    ],
    caption: '周囲120mの円形の池に8mおきに木を植える（円形は本数＝間隔数）',
  },

  // 男子:女子 = 3:2、全40人 → 男子24人・女子16人。
  sansu_25: {
    kind: 'pieChart',
    slices: [
      { label: '男子 24人', value: 24 },
      { label: '女子 16人', value: 16 },
    ],
    caption: '男:女 = 3:2、全40人 → 男子24人',
    steps: [
      '比の合計 = 3 + 2 = 5',
      '男子 = 40 × 3/5 = 24人',
    ],
  },

  // 底面半径3cm・高さ10cmの円柱。体積 = 3.14×3²×10 = 282.6cm³。
  sansu_26: {
    kind: 'solid',
    shape: 'cylinder',
    labels: { radius: '3cm', height: '10cm' },
    caption: '体積 = 3.14×3²×10 = 282.6cm³',
    steps: [
      '底面積 = 3 × 3 × 3.14 = 28.26㎠',
      '体積 = 底面積 × 高さ = 28.26 × 10 = 282.6cm³',
    ],
  },

  // 正六角形。1つの内角 = (6-2)×180÷6 = 120°。
  sansu_32: {
    kind: 'polygon',
    points: [
      { x: 10, y: 0 },
      { x: 5, y: 8.66 },
      { x: -5, y: 8.66 },
      { x: -10, y: 0 },
      { x: -5, y: -8.66 },
      { x: 5, y: -8.66 },
    ],
    equalAngles: [[0, 1, 2, 3, 4, 5]],
    caption: '正六角形の1つの内角 = 120°',
    steps: [
      '六角形の内角の和 = (6−2) × 180 = 720度',
      '正六角形は6つの角が等しいので、1つの内角 = 720 ÷ 6 = 120度',
    ],
  },

  // 面積が1辺6cmの正方形（36㎠）と等しい円。半径 ≈ 3.39cm。
  sansu_34: {
    kind: 'circle',
    radiusLabel: '約3.39cm',
    showCenter: true,
    caption: '面積 = 36㎠（1辺6cmの正方形と同じ）→ 半径≈3.39cm',
    steps: [
      '正方形の面積 = 6 × 6 = 36㎠',
      '半径 × 半径 = 36 ÷ 3.14 ≈ 11.46',
      '3.39 × 3.39 ≈ 11.49 に近いので、半径 ≈ 3.39cm',
    ],
  },

  // 直角をはさむ2辺が6cm・8cmの直角三角形。面積 = 6×8÷2 = 24㎠。
  sansu_39: {
    kind: 'polygon',
    points: [
      { x: 0, y: 6, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 8, y: 0, label: 'C' },
    ],
    sideLabels: ['6cm', '8cm', null],
    rightAngles: [1],
    caption: '面積 = 6×8÷2 = 24㎠',
  },

  // 半径10cmの円に内接する正三角形。面積 = 75√3 ≈ 129.9㎠。
  sansu_41: {
    kind: 'circle',
    radiusLabel: '10cm',
    points: [
      { angle: 90, label: 'A' },
      { angle: 210, label: 'B' },
      { angle: 330, label: 'C' },
    ],
    chords: [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    showCenter: true,
    caption: '内接する正三角形の面積 = 75√3 ≈ 129.9㎠',
    steps: [
      '外接円の半径 R=10cm から、1辺 a = R√3 = 10√3 cm',
      '正三角形の面積 = (√3/4) × a² = (√3/4) × 300 = 75√3 ㎠',
      '75 × 1.732 ≈ 129.9㎠',
    ],
  },

  // 等差数列 2,5,8,11,… は直線 y=3n-1 上の点。差が一定（3ずつ増える）。
  sansu_44: {
    kind: 'coordinate',
    xRange: [0, 5],
    yRange: [0, 14],
    lines: [{ a: 3, b: -1, label: 'y=3n-1' }],
    points: [
      { x: 1, y: 2 },
      { x: 2, y: 5 },
      { x: 3, y: 8 },
      { x: 4, y: 11 },
    ],
    caption: '2,5,8,11,… 一定の差3ずつ増える等差数列',
    steps: [
      '第n項 = 2 + (n−1) × 3 = 3n − 1 なので、第100項 = 3×100 − 1 = 299',
      '和 = (初項 + 末項) × 項数 ÷ 2 = (2+299) × 100 ÷ 2 = 15050',
    ],
  },
};
