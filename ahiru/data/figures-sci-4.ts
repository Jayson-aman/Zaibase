import type { Figure } from './figures';

// 新図形種別（回路図・曲線グラフ・棒/円グラフ・展開図・柱状図）のバッチ。
export const figuresSci4: Record<string, Figure> = {
  // 並列回路：電源6V、2Ωと3Ωの抵抗（各電流・合成抵抗が答えなので図には描かない）
  'rika-025': {
    kind: 'circuit',
    layout: 'parallel',
    branches: [
      [{ type: 'resistor', label: '2Ω' }],
      [{ type: 'resistor', label: '3Ω' }],
    ],
    battery: { label: '6V' },
    caption: '並列回路（電源電圧6V）',
  },

  // 硝酸カリウムの溶解度曲線（与えられた表の4点。析出量は答えなので描かない）
  kaimei_v2_r001: {
    kind: 'lineChart',
    xLabel: '温度（℃）',
    yLabel: '溶解度（g/100g水）',
    xRange: [0, 80],
    yRange: [0, 180],
    series: [
      {
        label: '硝酸カリウム',
        markers: true,
        points: [
          { x: 20, y: 31 },
          { x: 40, y: 64 },
          { x: 60, y: 110 },
          { x: 80, y: 169 },
        ],
      },
    ],
    caption: '水の温度と硝酸カリウムの溶解度',
  },

  // 光の強さとCO₂の変化量（与えられた表の5点。光補償点は答えなので描かない）
  toin_v2_r002: {
    kind: 'lineChart',
    xLabel: '光の強さ',
    yLabel: 'CO₂の変化量（mg/時）',
    xRange: [0, 4],
    yRange: [-4, 6],
    series: [
      {
        markers: true,
        points: [
          { x: 0, y: -3 },
          { x: 1, y: -1 },
          { x: 2, y: 1 },
          { x: 3, y: 3 },
          { x: 4, y: 5 },
        ],
      },
    ],
    caption: '光の強さとCO₂の変化量（＋は吸収・−は放出）',
  },
};
