import type { Figure } from './figures';

// 高校受験 理科（物理・化学分野含む） の教科書用図解バッチ。キーは lessons-*.ts の figureId と対応。
export const lessonFigsKokoRika: Record<string, Figure> = {
  // ===== 01 物理（力・運動・エネルギー） =====
  lf_krika_01: {
    kind: 'lineChart',
    xLabel: 'ばねの伸び x (m)',
    yLabel: '力 F (N)',
    series: [
      {
        label: 'F=kx (k=50)',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 0.02, y: 1 },
          { x: 0.04, y: 2 },
          { x: 0.06, y: 3 },
        ],
      },
    ],
    caption: 'フックの法則：ばねの伸びは力に比例（ばね定数k=50N/mの例、原点を通る直線）',
  },
  lf_krika_02: {
    kind: 'lineChart',
    xLabel: '落下した距離 (m)',
    yLabel: 'エネルギー (J)',
    yRange: [0, 110],
    series: [
      {
        label: '位置E',
        points: [
          { x: 0, y: 100 },
          { x: 5, y: 0 },
        ],
      },
      {
        label: '運動E',
        points: [
          { x: 0, y: 0 },
          { x: 5, y: 100 },
        ],
      },
      {
        label: '力学的E(一定)',
        dashed: true,
        points: [
          { x: 0, y: 100 },
          { x: 5, y: 100 },
        ],
      },
    ],
    caption: '力学的エネルギー保存：位置Eと運動Eの和は一定（2kg・高さ5m・g=10の例）',
  },

  // ===== 02 電気（回路・電力・磁界） =====
  lf_krika_03: {
    kind: 'lineChart',
    xLabel: '電流 I (A)',
    yLabel: '電圧 V (V)',
    series: [
      {
        label: 'R=10Ω',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 1, y: 10 },
          { x: 2, y: 20 },
          { x: 3, y: 30 },
        ],
      },
    ],
    caption: 'オームの法則 V=IR：V-Iグラフの傾きが抵抗値（10Ωの例）',
  },
  lf_krika_04: {
    kind: 'circuit',
    layout: 'series',
    series: [
      { type: 'resistor', label: 'R1=6Ω' },
      { type: 'resistor', label: 'R2=4Ω' },
    ],
    battery: { label: '20V' },
    caption: '直列回路：合成抵抗 R=R1+R2=10Ω、電流はどこでも同じ',
  },
  lf_krika_05: {
    kind: 'circuit',
    layout: 'parallel',
    branches: [[{ type: 'resistor', label: 'R1=6Ω' }], [{ type: 'resistor', label: 'R2=3Ω' }]],
    battery: { label: '電源' },
    caption: '並列回路：合成抵抗は各抵抗より小さい（1/R=1/R1+1/R2）',
  },

  // ===== 03 化学（化学変化・イオン・酸塩基） =====
  lf_krika_06: {
    kind: 'chemEquation',
    equation: '2H2 + O2 -> 2H2O',
    caption: '水の生成：左辺と右辺で原子の数が等しい（質量保存の法則）',
  },
  lf_krika_07: {
    kind: 'lineChart',
    xLabel: '銅の質量 (g)',
    yLabel: '酸化銅CuOの質量 (g)',
    series: [
      {
        label: 'Cu:CuO=4:5',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 4, y: 5 },
          { x: 8, y: 10 },
        ],
      },
    ],
    caption: '化合の質量比は一定：銅4gから酸化銅5gができる（Cu:CuO=4:5）',
  },
  lf_krika_08: {
    kind: 'chemEquation',
    equation: 'CuCl2 -> Cu + Cl2',
    caption: '塩化銅水溶液の電気分解：陰極に銅が析出、陽極に塩素が発生',
  },
  lf_krika_09: {
    kind: 'chemEquation',
    equation: 'HCl + NaOH -> NaCl + H2O',
    caption: '中和：酸と塩基が反応して塩（えん）と水ができる',
  },

  // ===== 04 生物（細胞・植物・動物・遺伝） =====
  lf_krika_10: {
    kind: 'chemEquation',
    equation: '6CO2 + 6H2O -> C6H12O6 + 6O2',
    caption: '光合成：光エネルギーでCO2と水から有機物（グルコース）とO2をつくる',
  },
  lf_krika_11: {
    kind: 'barChart',
    yLabel: '個体数の比',
    bars: [
      { label: 'AA', value: 1 },
      { label: 'Aa', value: 2 },
      { label: 'aa', value: 1 },
    ],
    caption: 'Aa×Aaの子の遺伝子型 AA:Aa:aa=1:2:1（表現型は優性:劣性=3:1）',
  },
  lf_krika_12: {
    kind: 'barChart',
    yLabel: '表現型の比',
    bars: [
      { label: 'A_B_', value: 9 },
      { label: 'A_bb', value: 3 },
      { label: 'aaB_', value: 3 },
      { label: 'aabb', value: 1 },
    ],
    caption: '二遺伝子雑種 AaBb×AaBb の子の表現型比 = 9:3:3:1',
  },

  // ===== 05 地学（地層・天気・天体） =====
  lf_krika_13: {
    kind: 'stratum',
    columns: [
      {
        label: 'A地点',
        topLabel: '標高60m',
        layers: [
          { name: '砂岩', thickness: 2, pattern: 'sand' },
          { name: '泥岩', thickness: 3, pattern: 'mud' },
          { name: '凝灰岩(かぎ層)', thickness: 1, pattern: 'ash' },
          { name: 'れき岩', thickness: 2, pattern: 'gravel' },
        ],
      },
      {
        label: 'B地点',
        topLabel: '標高55m',
        layers: [
          { name: '泥岩', thickness: 2, pattern: 'mud' },
          { name: '凝灰岩(かぎ層)', thickness: 1, pattern: 'ash' },
          { name: 'れき岩', thickness: 3, pattern: 'gravel' },
        ],
      },
    ],
    caption: '柱状図の対比：凝灰岩などの「かぎ層」を目印に地層のつながりを読む',
  },
  lf_krika_14: {
    kind: 'lineChart',
    xLabel: '気温 (℃)',
    yLabel: '飽和水蒸気量 (g/m³)',
    series: [
      {
        label: '飽和水蒸気量',
        markers: true,
        points: [
          { x: 0, y: 4.8 },
          { x: 10, y: 9.4 },
          { x: 20, y: 17.3 },
          { x: 30, y: 30.4 },
        ],
      },
    ],
    caption: '気温が高いほど飽和水蒸気量は大きい（20℃で約17.3g/m³）',
  },
  lf_krika_15: {
    kind: 'barChart',
    yLabel: '南中高度 (°)',
    yMax: 90,
    bars: [
      { label: '冬至', value: 31.6 },
      { label: '春分秋分', value: 55 },
      { label: '夏至', value: 78.4 },
    ],
    caption: '北緯35°の南中高度：夏至と冬至の差は 23.4×2=46.8°（緯度によらず一定）',
  },

  // ===== 06 理科総合・実験考察・計算問題 =====
  lf_krika_16: {
    kind: 'coordinate',
    xRange: [0, 5],
    yRange: [0, 10],
    lines: [{ a: 2, b: 0, label: 'y=2x' }],
    caption: '比例のグラフ：原点を通る直線、傾きが比例定数k（反比例は双曲線 xy=一定）',
  },
  lf_krika_17: {
    kind: 'lineChart',
    xLabel: '電流 (A)',
    yLabel: '水の温度上昇 (℃)',
    series: [
      {
        label: '電流の2乗に比例',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 1, y: 0.5 },
          { x: 2, y: 2.0 },
          { x: 3, y: 4.5 },
        ],
      },
    ],
    caption: '発熱量 Q=I²Rt：温度上昇は電流の2乗に比例（原点を通る曲線）',
  },

  // ===== 07 物理（光・音・波） =====
  lf_krika_18: {
    kind: 'lineChart',
    xLabel: '物体距離 a (cm)',
    yLabel: '像距離 b (cm)',
    series: [
      {
        label: 'f=10cm',
        markers: true,
        points: [
          { x: 15, y: 30 },
          { x: 20, y: 20 },
          { x: 25, y: 16.7 },
          { x: 30, y: 15 },
          { x: 40, y: 13.3 },
          { x: 60, y: 12 },
        ],
      },
    ],
    caption: '凸レンズの式 1/a+1/b=1/f：a=2f(=20cm)で実物大の倒立実像（a=b）',
  },
  lf_krika_19: {
    kind: 'lineChart',
    xLabel: '時間',
    yLabel: '振れ',
    yRange: [-3, 3],
    series: [
      {
        label: '大きい音(振幅大)',
        points: [
          { x: 0, y: 0 },
          { x: 0.25, y: 1.77 },
          { x: 0.5, y: 2.5 },
          { x: 0.75, y: 1.77 },
          { x: 1, y: 0 },
          { x: 1.25, y: -1.77 },
          { x: 1.5, y: -2.5 },
          { x: 1.75, y: -1.77 },
          { x: 2, y: 0 },
          { x: 2.25, y: 1.77 },
          { x: 2.5, y: 2.5 },
          { x: 2.75, y: 1.77 },
          { x: 3, y: 0 },
          { x: 3.25, y: -1.77 },
          { x: 3.5, y: -2.5 },
          { x: 3.75, y: -1.77 },
          { x: 4, y: 0 },
        ],
      },
      {
        label: '高い音(振動数大)',
        points: [
          { x: 0, y: 0 },
          { x: 0.25, y: 1 },
          { x: 0.5, y: 0 },
          { x: 0.75, y: -1 },
          { x: 1, y: 0 },
          { x: 1.25, y: 1 },
          { x: 1.5, y: 0 },
          { x: 1.75, y: -1 },
          { x: 2, y: 0 },
          { x: 2.25, y: 1 },
          { x: 2.5, y: 0 },
          { x: 2.75, y: -1 },
          { x: 3, y: 0 },
          { x: 3.25, y: 1 },
          { x: 3.5, y: 0 },
          { x: 3.75, y: -1 },
          { x: 4, y: 0 },
        ],
      },
    ],
    caption: '音の三要素：振幅が大きいほど大きい音、振動数が多い（間隔がせまい）ほど高い音',
  },
  lf_krika_20: {
    kind: 'lineChart',
    xLabel: '気温 (℃)',
    yLabel: '音速 (m/s)',
    yRange: [325, 355],
    series: [
      {
        label: 'v=331.5+0.6t',
        markers: true,
        points: [
          { x: 0, y: 331.5 },
          { x: 15, y: 340.5 },
          { x: 30, y: 349.5 },
        ],
      },
    ],
    caption: '音速は気温が高いほど速い（常温15℃で約340m/s）',
  },

  // ===== 08 化学（状態変化・気体・水溶液） =====
  lf_krika_21: {
    kind: 'lineChart',
    xLabel: '加熱時間',
    yLabel: '温度 (℃)',
    series: [
      {
        label: '水の加熱',
        points: [
          { x: 0, y: -20 },
          { x: 2, y: 0 },
          { x: 4, y: 0 },
          { x: 8, y: 100 },
          { x: 11, y: 100 },
          { x: 13, y: 110 },
        ],
      },
    ],
    caption: '加熱曲線：状態変化中は温度が一定（0℃で融解・100℃で沸騰、純物質の場合）',
  },
  lf_krika_22: {
    kind: 'pieChart',
    slices: [
      { label: '溶質(食塩)', value: 20 },
      { label: '溶媒(水)', value: 180 },
    ],
    caption: '質量パーセント濃度 = 溶質/(溶質+溶媒)×100 = 20/200×100 = 10%',
  },
  lf_krika_23: {
    kind: 'lineChart',
    xLabel: '温度 (℃)',
    yLabel: '溶解度 (g/水100g)',
    series: [
      {
        label: '硝酸カリウム',
        markers: true,
        points: [
          { x: 20, y: 32 },
          { x: 40, y: 64 },
          { x: 60, y: 110 },
        ],
      },
      {
        label: '塩化ナトリウム',
        markers: true,
        points: [
          { x: 20, y: 36 },
          { x: 40, y: 36.5 },
          { x: 60, y: 37 },
        ],
      },
    ],
    caption: '溶解度曲線：傾きが急な硝酸カリウムは冷やすと結晶が多く出る（食塩はほぼ変化なし）',
  },

  // ===== 09 生物（植物のつくりとはたらき・分類） =====
  lf_krika_24: {
    kind: 'lineChart',
    xLabel: '光の強さ',
    yLabel: '見かけのCO2吸収量',
    yRange: [-4, 10],
    series: [
      {
        label: '見かけの光合成量',
        markers: true,
        points: [
          { x: 0, y: -2 },
          { x: 2, y: 0 },
          { x: 6, y: 6 },
          { x: 10, y: 8 },
          { x: 14, y: 8 },
        ],
      },
    ],
    caption: '光補償点（グラフが0を横切る点）で光合成量＝呼吸量。以降は光飽和',
  },
  lf_krika_25: {
    kind: 'barChart',
    yLabel: '蒸散量 (g)',
    bars: [
      { label: '葉の表', value: 2.0 },
      { label: '葉の裏', value: 5.0 },
      { label: '茎', value: 0.5 },
    ],
    caption: '蒸散量は葉の裏が最も多い＝気孔が葉の裏に多いことを示す',
  },

  // ===== 10 生物（生態系・食物連鎖・環境） =====
  lf_krika_26: {
    kind: 'barChart',
    yLabel: '個体数(相対)',
    bars: [
      { label: '生産者', value: 1000 },
      { label: '一次消費者', value: 100 },
      { label: '二次消費者', value: 10 },
      { label: '三次消費者', value: 1 },
    ],
    caption: '個体数ピラミッド：食べられる側（下位）ほど数が多く、上位ほど少ない',
  },
  lf_krika_27: {
    kind: 'lineChart',
    xLabel: '時間',
    yLabel: '個体数',
    series: [
      {
        label: '被食者(草食)',
        points: [
          { x: 0, y: 50 },
          { x: 1, y: 84.6 },
          { x: 2, y: 84.6 },
          { x: 3, y: 50 },
          { x: 4, y: 15.4 },
          { x: 5, y: 15.4 },
          { x: 6, y: 50 },
          { x: 7, y: 84.6 },
          { x: 8, y: 84.6 },
          { x: 9, y: 50 },
          { x: 10, y: 15.4 },
          { x: 11, y: 15.4 },
          { x: 12, y: 50 },
        ],
      },
      {
        label: '捕食者(肉食)',
        points: [
          { x: 0, y: 10 },
          { x: 1, y: 20 },
          { x: 2, y: 40 },
          { x: 3, y: 50 },
          { x: 4, y: 40 },
          { x: 5, y: 20 },
          { x: 6, y: 10 },
          { x: 7, y: 20 },
          { x: 8, y: 40 },
          { x: 9, y: 50 },
          { x: 10, y: 40 },
          { x: 11, y: 20 },
          { x: 12, y: 10 },
        ],
      },
    ],
    caption: '捕食者の個体数のピークは、被食者のピークより遅れて現れる',
  },

  // ===== 11 地学（火山・プレート・大地の変動） =====
  lf_krika_28: {
    kind: 'barChart',
    yLabel: '有色鉱物の割合 (%)',
    yMax: 100,
    bars: [
      { label: '花こう岩', value: 10 },
      { label: '閃緑岩', value: 35 },
      { label: '斑れい岩', value: 60 },
    ],
    caption: '黒っぽい岩ほど有色鉱物が多い（白っぽい花こう岩→黒っぽい斑れい岩、深成岩の例）',
  },
  lf_krika_29: {
    kind: 'lineChart',
    xLabel: '震源距離 (km)',
    yLabel: '到達時間 (s)',
    series: [
      {
        label: 'P波(8km/s)',
        points: [
          { x: 0, y: 0 },
          { x: 80, y: 10 },
        ],
      },
      {
        label: 'S波(4km/s)',
        points: [
          { x: 0, y: 0 },
          { x: 80, y: 20 },
        ],
      },
    ],
    caption: '走時曲線：P波とS波の到達時間の差（初期微動継続時間）は震源距離に比例',
  },
};
