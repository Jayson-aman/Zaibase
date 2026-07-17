import type { Figure } from './figures';

// 新図形種別（回路図・曲線グラフ・棒/円グラフ・展開図・柱状図）のバッチ。
export const figuresSci3: Record<string, Figure> = {
  // 光合成曲線（陽生植物・陰生植物の2本）。補償点・飽和点は答えのため図には記さない。
  koko_max_rika_50: {
    kind: 'lineChart',
    xLabel: '光の強さ',
    yLabel: '見かけの光合成速度',
    xRange: [0, 10],
    yRange: [-4, 12],
    series: [
      {
        label: '陽生植物',
        color: '#0EA5E9',
        points: [
          { x: 0, y: -3 }, { x: 0.5, y: -2.1 }, { x: 1, y: -1.1 }, { x: 1.5, y: 0 },
          { x: 2, y: 1.3 }, { x: 2.5, y: 2.7 }, { x: 3, y: 4.0 }, { x: 3.5, y: 5.2 },
          { x: 4, y: 6.3 }, { x: 5, y: 8.2 }, { x: 6, y: 9.4 }, { x: 7, y: 9.9 },
          { x: 8, y: 10 }, { x: 10, y: 10 },
        ],
      },
      {
        label: '陰生植物',
        color: '#059669',
        points: [
          { x: 0, y: -1.2 }, { x: 0.4, y: -0.6 }, { x: 0.8, y: 0 }, { x: 1.2, y: 0.7 },
          { x: 1.6, y: 1.5 }, { x: 2, y: 2.2 }, { x: 2.5, y: 3.0 }, { x: 3, y: 3.6 },
          { x: 3.5, y: 3.9 }, { x: 4, y: 4.0 }, { x: 5, y: 4.0 }, { x: 6, y: 4.0 },
          { x: 8, y: 4.0 }, { x: 10, y: 4.0 },
        ],
      },
    ],
    caption: '光の強さと見かけの光合成速度（0より下は呼吸によるCO₂放出）',
  },

  // 地層の縦断面（上から A砂岩・B泥岩・C石灰岩・D れき岩・E砂岩）。
  tokyo_chuo_rika_03: {
    kind: 'stratum',
    columns: [
      {
        layers: [
          { name: 'A 砂岩', thickness: 2, pattern: 'sand' },
          { name: 'B 泥岩', thickness: 2, pattern: 'mud' },
          { name: 'C 石灰岩', thickness: 2, pattern: 'lime' },
          { name: 'D れき岩', thickness: 2, pattern: 'gravel' },
          { name: 'E 砂岩', thickness: 2, pattern: 'sand' },
        ],
      },
    ],
    caption: 'A・B の境目に不整合面がある',
  },

  // 光の強さとCO₂変化量（表のデータ。＋は放出、−は吸収）。
  tokyo_meidai_max_03: {
    kind: 'lineChart',
    xLabel: '光の強さ(ルクス)',
    yLabel: 'CO₂変化量(mg/時)',
    xRange: [0, 3000],
    yRange: [-9, 6],
    series: [
      {
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 0, y: 4 }, { x: 1000, y: -2 }, { x: 2000, y: -8 }, { x: 3000, y: -8 },
        ],
      },
    ],
    caption: '＋＝CO₂放出、−＝CO₂吸収',
  },

  // 直列回路（3Ω・6Ω・9V）。
  'rika-024': {
    kind: 'circuit',
    layout: 'series',
    series: [
      { type: 'resistor', label: '3Ω' },
      { type: 'resistor', label: '6Ω' },
    ],
    battery: { label: '9V' },
  },

  // 混合回路（4Ω に 2Ω・6Ω の並列が直列接続、12V）。
  'rika-026': {
    kind: 'circuit',
    layout: 'parallel',
    series: [{ type: 'resistor', label: '4Ω' }],
    branches: [
      [{ type: 'resistor', label: '2Ω' }],
      [{ type: 'resistor', label: '6Ω' }],
    ],
    battery: { label: '12V' },
  },

  // 光合成速度と呼吸速度（単一曲線）。補償点・飽和点は答えのため記さない。
  'rika-047': {
    kind: 'lineChart',
    xLabel: '光の強さ',
    yLabel: '見かけ上の光合成量',
    xRange: [0, 10],
    yRange: [-4, 12],
    series: [
      {
        color: '#0EA5E9',
        points: [
          { x: 0, y: -3 }, { x: 0.5, y: -2.1 }, { x: 1, y: -1.1 }, { x: 1.5, y: 0 },
          { x: 2, y: 1.3 }, { x: 2.5, y: 2.7 }, { x: 3, y: 4.0 }, { x: 3.5, y: 5.2 },
          { x: 4, y: 6.3 }, { x: 5, y: 8.2 }, { x: 6, y: 9.4 }, { x: 7, y: 9.9 },
          { x: 8, y: 10 }, { x: 10, y: 10 },
        ],
      },
    ],
    caption: '0より下は呼吸による有機物の消費',
  },

  // 東西2地点の柱状図。共通の火山灰（鍵層）が東側で低い位置にある。
  koko_kankan_rika_c3_36: {
    kind: 'stratum',
    columns: [
      {
        label: 'A（西）',
        layers: [
          { name: '表土', thickness: 1, pattern: 'plain' },
          { name: '火山灰', thickness: 1, pattern: 'ash' },
          { name: '泥岩', thickness: 2, pattern: 'mud' },
          { name: '砂岩', thickness: 2, pattern: 'sand' },
        ],
      },
      {
        label: 'B（東）',
        layers: [
          { name: '表土', thickness: 2, pattern: 'plain' },
          { name: '泥岩', thickness: 1, pattern: 'mud' },
          { name: '火山灰', thickness: 1, pattern: 'ash' },
          { name: '砂岩', thickness: 2, pattern: 'sand' },
        ],
      },
    ],
    caption: '同じ火山灰の層（鍵層）を対比。東側ほど低い',
  },

  // 酸化銅の還元（酸化銅の質量に対する発生した水・残った銅）。表のデータ。
  toin_v2_r001: {
    kind: 'lineChart',
    xLabel: '酸化銅(g)',
    yLabel: '質量(g)',
    xRange: [0, 4],
    yRange: [0, 3.4],
    series: [
      {
        label: '残った銅',
        color: '#B45309',
        markers: true,
        points: [
          { x: 1, y: 0.80 }, { x: 2, y: 1.60 }, { x: 3, y: 2.40 }, { x: 4, y: 3.20 },
        ],
      },
      {
        label: '発生した水',
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 1, y: 0.23 }, { x: 2, y: 0.45 }, { x: 3, y: 0.68 }, { x: 4, y: 0.90 },
        ],
      },
    ],
  },

  // 離れた2地点の柱状図。共通の火山灰の層（かぎ層）で対比する。
  otemon_rika_019: {
    kind: 'stratum',
    columns: [
      {
        label: 'A地点',
        layers: [
          { name: '砂岩', thickness: 2, pattern: 'sand' },
          { name: '火山灰', thickness: 1, pattern: 'ash' },
          { name: '泥岩', thickness: 2, pattern: 'mud' },
          { name: 'れき岩', thickness: 2, pattern: 'gravel' },
        ],
      },
      {
        label: 'B地点',
        layers: [
          { name: '泥岩', thickness: 2, pattern: 'mud' },
          { name: '火山灰', thickness: 1, pattern: 'ash' },
          { name: '砂岩', thickness: 2, pattern: 'sand' },
          { name: 'れき岩', thickness: 2, pattern: 'gravel' },
        ],
      },
    ],
    caption: '同じ火山灰の層で離れた地層を対比',
  },

  // 気温と飽和水蒸気量（表のデータ）。露点・追加できる量は答えのため記さない。
  chugaku2026_rika_111: {
    kind: 'lineChart',
    xLabel: '気温(℃)',
    yLabel: '飽和水蒸気量(g/m³)',
    xRange: [10, 30],
    yRange: [0, 32],
    series: [
      {
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 10, y: 9.4 }, { x: 15, y: 12.8 }, { x: 20, y: 17.3 },
          { x: 25, y: 23.0 }, { x: 30, y: 30.0 },
        ],
      },
    ],
  },
};
