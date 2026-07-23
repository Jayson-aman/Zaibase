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
  },
  // 放物線 y=ax² 上の点A(2, 8)（与えられた点）。a・b・直線ABは解答なので示さない。
  koko_oyo_sansu_48: {
    kind: 'coordinate',
    xRange: [-3, 3],
    yRange: [-2, 10],
    parabolas: [{ a: 2 }],
    points: [{ x: 2, y: 8, label: 'A(2, 8)' }],
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
  },
  // 放物線 y=x²-4x+3（下に凸）。頂点・軸・x切片は解答なので点や式は示さない。
  koko_sansu_ex_01_037: {
    kind: 'coordinate',
    xRange: [-1, 5],
    yRange: [-2, 8],
    parabolas: [{ a: 1, b: -4, c: 3 }],
  },
  // 放物線 y=x²-4x+3（下に凸）。頂点・切片は解答なので点や式は示さない。
  koko_sansu_ex_04_013: {
    kind: 'coordinate',
    xRange: [-1, 5],
    yRange: [-2, 8],
    parabolas: [{ a: 1, b: -4, c: 3 }],
  },
};
