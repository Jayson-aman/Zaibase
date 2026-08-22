import type { Figure } from './figures';

// 新図形種別（回路図・曲線グラフ・棒/円グラフ・展開図・柱状図）のバッチ。
export const figuresMath7: Record<string, Figure> = {
  // 度数分布（離散的な点数ごとの人数）— 棒グラフ。答え（平均・中央値）は描かない。
  seifu_nankai_sansu_06: {
    kind: 'barChart',
    yLabel: '人数',
    bars: [
      { label: '40点', value: 2 },
      { label: '60点', value: 8 },
      { label: '70点', value: 12 },
      { label: '80点', value: 6 },
      { label: '100点', value: 2 },
    ],
    caption: 'クラス30人のテスト結果',
    steps: [
      '合計点 = 40×2+60×8+70×12+80×6+100×2 = 2080点 → 平均 = 2080÷30 ≒ 69点',
      '累積人数: 40点2人、60点10人、70点22人 → 15番目・16番目は70点グループ → 中央値=70点',
    ],
  },

  // 立方体の展開図（1辺3cmの正方形6枚・十字形）
  takatsuki_sansu_04: {
    kind: 'net',
    shape: 'cube',
    caption: '正方形6枚を十字形に並べた展開図',
  },

  // ヒストグラム（点数の階級ごとの度数）。中央値の階級が答えなので描かない。
  tezukayama_sansu_02: {
    kind: 'barChart',
    histogram: true,
    yLabel: '人数',
    bars: [
      { label: '50点未満', value: 5 },
      { label: '50〜60', value: 8 },
      { label: '60〜70', value: 10 },
      { label: '70以上', value: 7 },
    ],
    caption: 'クラス30人の点数分布',
    steps: [
      '累積人数: 50点未満5人、〜60点13人、〜70点23人',
      '15番目・16番目はともに60〜70点の階級に入る → 中央値の階級=60〜70点',
    ],
  },

  // 度数分布表（離散的な点数ごとの人数）— 棒グラフ。平均が答えなので描かない。
  toin_v2_s004: {
    kind: 'barChart',
    yLabel: '人数',
    bars: [
      { label: '50点', value: 3 },
      { label: '60点', value: 6 },
      { label: '70点', value: 9 },
      { label: '80点', value: 5 },
      { label: '90点', value: 4 },
      { label: '100点', value: 3 },
    ],
    caption: '算数テストの結果',
    steps: [
      '総人数 = 3+6+9+5+4+3 = 30人',
      '点数の合計 = 50×3+60×6+70×9+80×5+90×4+100×3 = 2200点',
      '平均点 = 2200÷30 ≒ 73.3点',
    ],
  },

  // ヒストグラム（100人・各階級の度数）。平均が答えなので描かない。
  koko_oyo_sansu_36: {
    kind: 'barChart',
    histogram: true,
    yLabel: '人数',
    bars: [
      { label: '60〜70', value: 32 },
      { label: '70〜80', value: 40 },
      { label: '80〜90', value: 20 },
      { label: '90〜100', value: 8 },
    ],
    caption: '100人のテスト結果',
    steps: [
      '階級値: 65,75,85,95点（各階級の中央値）',
      '合計点数 = 65×32+75×40+85×20+95×8 = 7540',
      '平均 = 7540÷100 = 75.4点',
    ],
  },

  // 度数分布表（20人）— ヒストグラム。平均が答えなので描かない。
  koko_kiso_sansu_85: {
    kind: 'barChart',
    histogram: true,
    yLabel: '人数（度数）',
    bars: [
      { label: '40〜50', value: 2 },
      { label: '50〜60', value: 5 },
      { label: '60〜70', value: 8 },
      { label: '70〜80', value: 4 },
      { label: '80〜90', value: 1 },
    ],
    caption: '度数分布表（合計20人）',
    steps: [
      '階級値: 45,55,65,75,85点',
      '階級値×度数の合計 = 90+275+520+300+85 = 1270',
      '平均 = 1270÷20 = 63.5点',
    ],
  },

  // 度数分布表（生徒20人）— ヒストグラム。平均が答えなので描かない。
  koko_gen_sansu_13: {
    kind: 'barChart',
    histogram: true,
    yLabel: '人数',
    bars: [
      { label: '50〜60', value: 3 },
      { label: '60〜70', value: 5 },
      { label: '70〜80', value: 8 },
      { label: '80〜90', value: 3 },
      { label: '90〜100', value: 1 },
    ],
    caption: '生徒20人の得点分布',
    steps: [
      '階級値: 55,65,75,85,95点',
      '階級値×度数の合計 = 165+325+600+255+95 = 1440',
      '平均 = 1440÷20 = 72点',
    ],
  },

  // ヒストグラム（30人）。70点以上の人数・割合が答えなので描かない。
  koko_sansu_ex_17_033: {
    kind: 'barChart',
    histogram: true,
    yLabel: '人数',
    bars: [
      { label: '60〜70', value: 8 },
      { label: '70〜80', value: 12 },
      { label: '80〜90', value: 6 },
      { label: '90以上', value: 4 },
    ],
    caption: 'クラス30人のテスト結果',
    steps: [
      '70点以上の人数 = 12+6+4 = 22人',
      '割合 = 22÷30 = 11/15 ≒ 73.3%',
    ],
  },

  // ヒストグラム（50人）。相対度数・割合が答えなので描かない。
  koko_moshi_sansu_38: {
    kind: 'barChart',
    histogram: true,
    yLabel: '人数',
    bars: [
      { label: '60〜70', value: 12 },
      { label: '70〜80', value: 18 },
      { label: '80〜90', value: 14 },
      { label: '90〜100', value: 6 },
    ],
    caption: '3年生50人の点数分布',
  },
  // 放物線 y=x²-4x+3。x軸との交点(1,0)(3,0)を示す。p,q・頂点の値は答えなので示さない。
  koko_sansu_ex_12_043: {
    kind: 'coordinate',
    xRange: [-1, 5],
    yRange: [-2, 6],
    parabolas: [{ a: 1, b: -4, c: 3 }],
    points: [
      { x: 1, y: 0, label: '(1,0)' },
      { x: 3, y: 0, label: '(3,0)' },
    ],
    steps: [
      'x切片1,3から: y=(x−1)(x−3)=x²−4x+3 → p=−4, q=3',
      '平方完成: y=(x−2)²−1 → 頂点=(2,−1)',
    ],
  },
};
