import type { Figure } from './figures';

// 算数・数学の図形バッチ1（面積・合同・角度・関数グラフ・立体など）。
// エージェントが問題ごとに図形を追加する。
export const figuresMath1: Record<string, Figure> = {
  // 放物線 y=3x²（上に開く・原点が頂点・y軸対称）。最大値・最小値は解答なので点は打たない。
  koko_kiso_sansu_77: {
    kind: 'coordinate',
    xRange: [-3, 3],
    yRange: [-2, 14],
    parabolas: [{ a: 3 }],
    steps: [
      'x = -2 のとき y = 3×(-2)² = 12',
      'x = 0 のとき y = 3×0² = 0（頂点）',
      'x = 1 のとき y = 3×1² = 3',
      '最大値 y = 12（x = -2）、最小値 y = 0（x = 0）',
    ],
  },
  // 放物線 y=ax² 上の点A(2, 8)（与えられた点）。a・b・直線ABは解答なので示さない。
  koko_oyo_sansu_48: {
    kind: 'coordinate',
    xRange: [-3, 3],
    yRange: [-2, 10],
    parabolas: [{ a: 2 }],
    points: [{ x: 2, y: 8, label: 'A(2, 8)' }],
    steps: [
      'A(2, 8) を y=ax² に代入: 8 = 4a → a = 2',
      'B(-1, b) を y=2x² に代入: b = 2×(-1)² = 2',
      '直線ABの傾き = (8-2)/(2-(-1)) = 2、y=2x+c に(2,8)を代入 → c=4、直線AB: y=2x+4',
    ],
  },
  // ∠C=90°の直角三角形ABC。斜辺AB=10cm・BC=6cm。ACは解答なのでラベルを付けない。
  koko_kankan_sansu_c2_02: {
    kind: 'polygon',
    points: [
      { x: 0, y: 8, label: 'A' },
      { x: 6, y: 0, label: 'B' },
      { x: 0, y: 0, label: 'C' },
    ],
    sideLabels: ['10cm', '6cm', null],
    rightAngles: [2],
  },
  // 縦3cm・横4cm・高さ12cmの直方体。対角線の長さは解答なので示さない。
  koko_kankan_sansu_c2_14: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '4cm', depth: '3cm', height: '12cm' },
    steps: [
      '底面の対角線: ℓ² = 3²+4² = 25 → ℓ = 5cm',
      '立体の対角線: d² = 5²+12² = 169 → d = 13cm',
    ],
  },
  // 円に内接する正八角形ABCDEFGH。頂点A・C・Fを結ぶ△ACF。各内角は解答なので示さない。
  koko_kankan_sansu_c2_32: {
    kind: 'circle',
    points: [
      { angle: 112.5, label: 'A' },
      { angle: 67.5, label: 'B' },
      { angle: 22.5, label: 'C' },
      { angle: 337.5, label: 'D' },
      { angle: 292.5, label: 'E' },
      { angle: 247.5, label: 'F' },
      { angle: 202.5, label: 'G' },
      { angle: 157.5, label: 'H' },
    ],
    chords: [
      [0, 2],
      [2, 5],
      [5, 0],
    ],
    showCenter: true,
    steps: [
      '弧CF = 45°×3 = 135° → ∠A = 135°÷2 = 67.5°',
      '弧FA = 45°×3 = 135° → ∠C = 135°÷2 = 67.5°',
      '弧AC = 45°×2 = 90° → ∠F = 90°÷2 = 45°',
    ],
  },
  // 放物線 y=x²-4x+3（下に凸）。頂点・軸・x切片は解答なので点や式は示さない。
  koko_sansu_ex_01_037: {
    kind: 'coordinate',
    xRange: [-1, 5],
    yRange: [-2, 8],
    parabolas: [{ a: 1, b: -4, c: 3 }],
    steps: [
      '平方完成: y = x²-4x+3 = (x-2)²-1 → 頂点(2,-1)、軸 x=2',
      'x軸との交点: (x-1)(x-3)=0 → x=1, 3 → (1,0)と(3,0)',
    ],
  },
  // 放物線 y=x²-4x+3（下に凸）。頂点・切片は解答なので点や式は示さない。
  koko_sansu_ex_04_013: {
    kind: 'coordinate',
    xRange: [-1, 5],
    yRange: [-2, 8],
    parabolas: [{ a: 1, b: -4, c: 3 }],
    steps: [
      '平方完成: y = (x-2)²-1 → 頂点(2,-1)',
      'y=0: (x-1)(x-3)=0 → x軸との交点 (1,0)と(3,0)',
      'x=0: y=3 → y切片 (0,3)',
    ],
  },
};
