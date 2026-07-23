import type { Figure } from './figures';

// 理科・化学の図バッチ2（化学反応式・構造式・グラフなど）。
export const figuresSci2: Record<string, Figure> = {
  // 見かけの光合成量グラフ。問題文で与えられた測定点のみプロット（真の光合成量6は非表示）。
  tokyo_hosei_rika_02: {
    kind: 'coordinate',
    xRange: [0, 10],
    yRange: [-3, 6],
    points: [
      { x: 0, y: -2, label: '(0,−2)' },
      { x: 4, y: 0, label: '(4,0)' },
      { x: 8, y: 4, label: '(8,4)' },
    ],
    segments: [
      [{ x: 0, y: -2 }, { x: 4, y: 0 }],
      [{ x: 4, y: 0 }, { x: 8, y: 4 }],
    ],
    caption: '横軸＝光の強さ、縦軸＝見かけの光合成量（CO₂吸収量）',
  },
  // 硝酸カリウムの溶解度。問題文の測定値のみプロット（析出量78gは非表示）。
  'rika-020': {
    kind: 'coordinate',
    xRange: [0, 80],
    yRange: [0, 150],
    points: [
      { x: 20, y: 32, label: '20℃,32g' },
      { x: 60, y: 110, label: '60℃,110g' },
    ],
    segments: [[{ x: 20, y: 32 }, { x: 60, y: 110 }]],
    caption: '横軸＝温度(℃)、縦軸＝溶解度(g/100g水)',
  },
};
