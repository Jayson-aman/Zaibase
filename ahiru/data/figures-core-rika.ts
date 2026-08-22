import type { Figure } from './figures';

// コア理科問題（rika_01..50）の図解。図があると分かりやすい問題だけに付与。
// 用語の暗記・分類など、空間的/量的な図が助けにならない設問には付けていない。
export const figuresCoreRika: Record<string, Figure> = {
  // rika_02 アンモニアの構造式：窒素1個に水素3個が共有結合
  rika_02: {
    kind: 'chemStructure',
    atoms: [
      { el: 'N', x: 0, y: 0 },
      { el: 'H', x: 0, y: -1 },
      { el: 'H', x: -0.9, y: 0.6 },
      { el: 'H', x: 0.9, y: 0.6 },
    ],
    bonds: [
      { from: 0, to: 1, order: 1 },
      { from: 0, to: 2, order: 1 },
      { from: 0, to: 3, order: 1 },
    ],
    caption: 'アンモニア NH₃（窒素1・水素3の共有結合）',
  },

  // rika_15 日食：太陽－月－地球が一直線に並び、月が太陽を隠す
  rika_15: {
    kind: 'coordinate',
    xRange: [-1, 11],
    yRange: [-3, 3],
    points: [
      { x: 0, y: 0, label: '地球' },
      { x: 5, y: 0, label: '月' },
      { x: 9, y: 0, label: '太陽' },
    ],
    segments: [[{ x: 0, y: 0 }, { x: 9, y: 0 }]],
    caption: '日食：太陽－月－地球が一直線。間に入った月が太陽を隠す',
  },

  // rika_23 中和：塩酸＋水酸化ナトリウム → 塩化ナトリウム＋水
  rika_23: {
    kind: 'chemEquation',
    equation: 'HCl + NaOH -> NaCl + H2O',
    caption: '塩酸と水酸化ナトリウム水溶液の中和',
  },

  // rika_24 直列回路：3Ω＋6Ω＝9Ω
  rika_24: {
    kind: 'circuit',
    layout: 'series',
    series: [
      { type: 'resistor', label: '3Ω' },
      { type: 'resistor', label: '6Ω' },
    ],
    battery: { label: '電池', cells: 1 },
    caption: '直列：合成抵抗 = 3 + 6 = 9Ω',
  },

  // rika_25 並列回路：3Ωと6Ω → 2Ω
  rika_25: {
    kind: 'circuit',
    layout: 'parallel',
    branches: [
      [{ type: 'resistor', label: '3Ω' }],
      [{ type: 'resistor', label: '6Ω' }],
    ],
    battery: { label: '電池', cells: 1 },
    caption: '並列：1/R = 1/3 + 1/6 = 1/2 → R = 2Ω',
    steps: [
      '合成抵抗の式：1/R = 1/3 + 1/6',
      '通分して計算：1/R = 2/6 + 1/6 = 3/6 = 1/2',
      'R = 2Ω',
    ],
  },

  // rika_29 光の屈折：空気→密な媒質では法線に近づく（入射角>屈折角）
  rika_29: {
    kind: 'coordinate',
    xRange: [-4, 4],
    yRange: [-4, 4],
    points: [
      { x: -3, y: 3, label: '入射光' },
      { x: 1, y: -3, label: '屈折光' },
    ],
    segments: [
      [{ x: -3, y: 3 }, { x: 0, y: 0 }], // 入射光
      [{ x: 0, y: 0 }, { x: 1, y: -3 }], // 屈折光（法線側に寄る）
      [{ x: 0, y: 3 }, { x: 0, y: -3 }], // 法線
      [{ x: -4, y: 0 }, { x: 4, y: 0 }], // 境界面（上=空気、下=密な媒質）
    ],
    caption: '空気→密な媒質：屈折光は法線に近づく（入射角 > 屈折角）',
  },

  // rika_31 食物連鎖：各段階でエネルギーは約1/10に減る
  rika_31: {
    kind: 'barChart',
    yLabel: 'エネルギー（相対量）',
    bars: [
      { label: '植物', value: 100 },
      { label: '草食動物', value: 10 },
      { label: '肉食動物', value: 1 },
    ],
    caption: '上位に行くほどエネルギーは約10分の1に減少',
  },

  // rika_38 てこのつりあい：60g×30cm = 90g×20cm
  rika_38: {
    kind: 'coordinate',
    xRange: [-35, 25],
    yRange: [-6, 4],
    points: [
      { x: 0, y: 0, label: '支点' },
      { x: -30, y: 0, label: '60g' },
      { x: 20, y: 0, label: '90g' },
    ],
    segments: [
      [{ x: -30, y: 0 }, { x: 20, y: 0 }], // 棒
      [{ x: -30, y: 0 }, { x: -30, y: -3 }], // 60gのおもり
      [{ x: 20, y: 0 }, { x: 20, y: -3 }], // 90gのおもり
    ],
    caption: 'てこのつりあい：60×30 = 90×20 =1800（左右のモーメントが等しい）',
    steps: [
      '左側のモーメント = 60g × 30cm = 1800',
      '右側は F × 20cm = 1800 とおく',
      'F = 1800 ÷ 20 = 90g',
    ],
  },

  // rika_39 太陽系の惑星：太陽に近い順（水金地火木土天海）
  rika_39: {
    kind: 'coordinate',
    xRange: [-0.5, 10],
    yRange: [-2, 2],
    points: [
      { x: 0, y: 0, label: '太陽' },
      { x: 1, y: 0, label: '水星' },
      { x: 2, y: 0, label: '金星' },
      { x: 3, y: 0, label: '地球' },
      { x: 4, y: 0, label: '火星' },
      { x: 5.5, y: 0, label: '木星' },
      { x: 7, y: 0, label: '土星' },
      { x: 8.5, y: 0, label: '天王星' },
      { x: 9.5, y: 0, label: '海王星' },
    ],
    caption: '太陽に近い順：水星・金星・地球・火星・木星・土星・天王星・海王星',
  },

  // rika_41 炭酸水素ナトリウムの熱分解
  rika_41: {
    kind: 'chemEquation',
    equation: '2NaHCO3 -> Na2CO3 + H2O + CO2',
    caption: '重曹（炭酸水素ナトリウム）を加熱 → 炭酸ナトリウム＋水＋二酸化炭素',
  },

  // rika_42 メンデルの法則：F2の表現型比 丸:しわ = 3:1
  rika_42: {
    kind: 'pieChart',
    slices: [
      { label: '丸（優性）', value: 3 },
      { label: 'しわ（劣性）', value: 1 },
    ],
    caption: 'F2の表現型比 丸:しわ = 3:1（遺伝子型 AA:Aa:aa = 1:2:1）',
    steps: [
      '親 丸(AA) × しわ(aa) → F1はすべてAa（丸）',
      'F1(Aa)×F1(Aa) → F2の遺伝子型比 AA:Aa:aa = 1:2:1',
      'AAとAaはどちらも丸 → 表現型比 丸:しわ = 3:1',
    ],
  },

  // rika_43 天体の年周運動：同時刻の星は1か月で約30°西へ
  rika_43: {
    kind: 'circle',
    showCenter: true,
    points: [
      { angle: 90, label: '今月' },
      { angle: 120, label: '1か月後' },
    ],
    sector: { from: 90, to: 120, label: '約30°' },
    caption: '同時刻に見ると星は1か月で約30°移動（1年＝365日で360°）',
    steps: [
      '地球は365日で360度公転 → 1か月(30日)では 360 ÷ 12 = 30度',
      '同時刻の星は1か月で約30度西へ移動して見える',
      '1年では 30 × 12 = 360度でもとの位置に戻る',
    ],
  },

  // rika_44 てこ：100g×30cm = F×90cm → F≈33g
  rika_44: {
    kind: 'coordinate',
    xRange: [-40, 100],
    yRange: [-6, 4],
    points: [
      { x: 0, y: 0, label: '支点' },
      { x: -30, y: 0, label: '100g' },
      { x: 90, y: 0, label: '約33g' },
    ],
    segments: [
      [{ x: -30, y: 0 }, { x: 90, y: 0 }], // 長さ120cmの棒（左端-30〜右端90、支点0）
      [{ x: -30, y: 0 }, { x: -30, y: -3 }],
      [{ x: 90, y: 0 }, { x: 90, y: -3 }],
    ],
    caption: 'てこ：100×30 = F×90 → F ≈ 33g',
    steps: [
      '支点から右端までの距離 = 120 − 30 = 90cm',
      '左側のモーメント = 100g × 30cm = 3000',
      'F × 90 = 3000 → F = 3000 ÷ 90 ≈ 33.3g',
    ],
  },

  // rika_48 塩化銅水溶液の電気分解
  rika_48: {
    kind: 'chemEquation',
    equation: 'CuCl2 -> Cu + Cl2',
    caption: '塩化銅水溶液の電気分解：陰極に銅(Cu)、陽極に塩素(Cl₂)',
    steps: [
      '水溶液中でCuCl₂はCu²⁺（＋）とCl⁻（－）に分かれる',
      '陰極（－極）にCu²⁺が引かれ、銅(Cu)が析出する',
      '陽極（＋極）にCl⁻が引かれ、塩素(Cl₂)が発生する',
    ],
  },

  // rika_49 皆既月食：太陽－地球－月が一直線、月が地球の影に入る
  rika_49: {
    kind: 'coordinate',
    xRange: [-1, 11],
    yRange: [-3, 3],
    points: [
      { x: 0, y: 0, label: '月' },
      { x: 5, y: 0, label: '地球' },
      { x: 9, y: 0, label: '太陽' },
    ],
    segments: [[{ x: 0, y: 0 }, { x: 9, y: 0 }]],
    caption: '皆既月食：太陽－地球－月が一直線。満月が地球の本影に入る',
    steps: [
      '太陽－地球－月の順に一直線に並び、満月が地球の本影に完全に入る（皆既月食の条件）',
      '地球の大気を通るとき、青い光は散乱されて失われる',
      '散乱されにくい赤い光だけが屈折して月面に届き反射する → 月が赤黒く見える',
    ],
  },

  // rika_50 フレミング左手の法則：親指=力・人差し指=磁界・中指=電流（互いに直角）
  rika_50: {
    kind: 'coordinate',
    xRange: [-3, 4],
    yRange: [-3, 4],
    points: [
      { x: 0, y: 3, label: '親指=力' },
      { x: 3, y: 0, label: '人差し指=磁界' },
      { x: -2, y: -2, label: '中指=電流' },
    ],
    segments: [
      [{ x: 0, y: 0 }, { x: 0, y: 3 }],
      [{ x: 0, y: 0 }, { x: 3, y: 0 }],
      [{ x: 0, y: 0 }, { x: -2, y: -2 }],
    ],
    caption: 'フレミング左手の法則：親指・人差し指・中指が互いに直角',
    steps: [
      '親指 = 力（運動）の向き',
      '人差し指 = 磁界の向き',
      '中指 = 電流の向き',
    ],
  },
};
