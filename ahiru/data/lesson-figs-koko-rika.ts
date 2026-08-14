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

  // ===== 12 物理（運動の法則・力学的エネルギー発展） =====
  lf_krika_30: {
    kind: 'lineChart',
    xLabel: '時間 (s)',
    yLabel: '速さ (m/s)',
    series: [
      {
        label: '台車の加速',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 1, y: 3 },
          { x: 2, y: 6 },
        ],
      },
    ],
    caption: 'v-tグラフ：右上がりの直線は等加速度運動。傾き＝加速度（この例では3m/s²）',
  },
  lf_krika_31: {
    kind: 'barChart',
    yLabel: '受ける力 (N)',
    bars: [
      { label: '衝突時間0.1秒', value: 20 },
      { label: '衝突時間0.5秒', value: 4 },
    ],
    caption: '同じ力積（運動量変化）でも、衝突時間が長いほど受ける力は小さい（F=J/t）',
  },
  lf_krika_32: {
    kind: 'barChart',
    yLabel: '運動量 (kg・m/s)',
    bars: [
      { label: 'A(衝突前)', value: 6 },
      { label: 'B(衝突前)', value: 0 },
      { label: '合体後の合計', value: 6 },
    ],
    caption: '運動量保存の法則：衝突前の運動量の合計と衝突後の合計は等しい',
  },

  // ===== 13 物理（電流と磁界・モーターの原理） =====
  lf_krika_33: {
    kind: 'lineChart',
    xLabel: '導線からの距離',
    yLabel: '磁界の強さ',
    series: [
      {
        label: '電流一定',
        markers: true,
        points: [
          { x: 1, y: 8 },
          { x: 2, y: 4 },
          { x: 4, y: 2 },
          { x: 8, y: 1 },
        ],
      },
    ],
    caption: '直線電流がつくる磁界は、導線からの距離が近いほど強い',
  },
  lf_krika_34: {
    kind: 'barChart',
    yLabel: '電磁石の強さ(相対値)',
    bars: [
      { label: '50回巻き', value: 2 },
      { label: '100回巻き', value: 4 },
      { label: '200回巻き', value: 8 },
    ],
    caption: 'コイルの巻き数が多いほど電磁石は強くなる（電流の大きさが一定の場合）',
  },
  lf_krika_35: {
    kind: 'lineChart',
    xLabel: '電流 (A)',
    yLabel: '導線が受ける力 (N)',
    series: [
      {
        label: '磁界一定',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 1, y: 2 },
          { x: 2, y: 4 },
        ],
      },
    ],
    caption: 'フレミングの左手の法則：電流が大きいほど、磁界の中の導線が受ける力は大きい',
  },

  // ===== 14 化学（酸化還元と電池） =====
  lf_krika_36: {
    kind: 'chemEquation',
    equation: 'Zn -> Zn2+ + 2e-',
    caption: 'ボルタ電池・ダニエル電池の−極（亜鉛板）の反応：亜鉛が電子を放出してとける（酸化）',
  },
  lf_krika_37: {
    kind: 'chemEquation',
    equation: 'Zn + Cu2+ -> Zn2+ + Cu',
    caption: 'ダニエル電池全体の反応：亜鉛が銅イオンに電子を渡し、銅が析出する',
  },

  // ===== 15 化学（物質量・モル計算と気体） =====
  lf_krika_38: {
    kind: 'lineChart',
    xLabel: '物質量 (mol)',
    yLabel: '質量 (g)',
    series: [
      {
        label: '水(モル質量18g/mol)',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 1, y: 18 },
          { x: 2, y: 36 },
        ],
      },
    ],
    caption: '質量＝物質量×モル質量：原点を通る直線（水の場合、傾き18g/mol）',
  },

  // ===== 16 生物（生殖と発生） =====
  lf_krika_39: {
    kind: 'barChart',
    yLabel: '染色体の数（本）',
    bars: [
      { label: '体細胞(2n)', value: 46 },
      { label: '生殖細胞(n)', value: 23 },
    ],
    caption: '減数分裂で染色体数が半分になる（ヒトの例：46本→23本）',
  },
  lf_krika_40: {
    kind: 'barChart',
    yLabel: '細胞の数',
    bars: [
      { label: '1細胞期', value: 1 },
      { label: '2細胞期', value: 2 },
      { label: '4細胞期', value: 4 },
      { label: '8細胞期', value: 8 },
    ],
    caption: '卵割：分裂のたびに細胞数が倍増する（胚全体の大きさはほぼ変わらない）',
  },
  lf_krika_41: {
    kind: 'barChart',
    yLabel: '生じる遺伝子型の種類数(相対値)',
    bars: [
      { label: '無性生殖（クローン）', value: 1 },
      { label: '有性生殖（組み合わせ）', value: 4 },
    ],
    caption: '有性生殖は遺伝子の組み合わせにより多様な子を生み出す（無性生殖は親と同じクローンのみ）',
  },

  // ===== 17 生物（遺伝の規則性・発展） =====
  lf_krika_42: {
    kind: 'barChart',
    yLabel: '子の数の比',
    bars: [
      { label: 'Aa（優性）', value: 1 },
      { label: 'aa（劣性）', value: 1 },
    ],
    caption: '検定交雑（Aa×aa）の結果：優性:劣性=1:1になれば、もとの個体はAaと判定できる',
  },

  // ===== 18 地学（天気図と気団・日本の四季の天気） =====
  lf_krika_43: {
    kind: 'lineChart',
    xLabel: '地点の位置',
    yLabel: '気圧 (hPa)',
    series: [
      {
        label: '等圧線の間隔がせまい区間',
        markers: true,
        points: [
          { x: 0, y: 1020 },
          { x: 1, y: 1008 },
          { x: 2, y: 996 },
        ],
      },
    ],
    caption: '等圧線の間隔がせまい（気圧の変化が急な）ところほど風が強い',
  },
  lf_krika_44: {
    kind: 'barChart',
    yLabel: '気温の目安 (℃)',
    bars: [
      { label: 'シベリア気団', value: -10 },
      { label: 'オホーツク海気団', value: 5 },
      { label: '小笠原気団', value: 28 },
      { label: '揚子江気団', value: 15 },
    ],
    caption: '日本付近の4つの気団：発生場所により気温・湿り気の性質が大きく異なる（目安の値）',
  },
  lf_krika_45: {
    kind: 'lineChart',
    xLabel: '東西方向の移動(西→東)',
    yLabel: '緯度(北上)',
    series: [
      {
        label: '台風の進路',
        markers: true,
        points: [
          { x: 0, y: 5 },
          { x: 2, y: 8 },
          { x: 4, y: 12 },
          { x: 6, y: 20 },
          { x: 8, y: 30 },
        ],
      },
    ],
    caption: '台風は低緯度で西寄りに進んだのち、偏西風の影響で北東へ進路を変えることが多い',
  },

  // ===== 19 地学（地層の重なりと大地の歴史） =====
  lf_krika_46: {
    kind: 'stratum',
    columns: [
      {
        label: 'X地点',
        topLabel: '標高80m',
        layers: [
          { name: '泥岩', thickness: 2, pattern: 'mud' },
          { name: '砂岩', thickness: 2, pattern: 'sand' },
          { name: '凝灰岩(かぎ層)', thickness: 1, pattern: 'ash' },
          { name: 'れき岩', thickness: 3, pattern: 'gravel' },
        ],
      },
      {
        label: 'Y地点',
        topLabel: '標高72m',
        layers: [
          { name: '砂岩', thickness: 3, pattern: 'sand' },
          { name: '凝灰岩(かぎ層)', thickness: 1, pattern: 'ash' },
          { name: 'れき岩', thickness: 2, pattern: 'gravel' },
        ],
      },
    ],
    caption: '標高をそろえてかぎ層（凝灰岩）を対比すると、2地点の地層のつながりが分かる',
  },
  lf_krika_47: {
    kind: 'barChart',
    yLabel: 'おおよその長さ(百万年)',
    bars: [
      { label: '古生代', value: 290 },
      { label: '中生代', value: 186 },
      { label: '新生代', value: 66 },
    ],
    caption: '地質年代のおおよその長さの目安（古生代が最も長く続いた）',
  },

  // ===== 20 地学（太陽系の天体） =====
  lf_krika_48: {
    kind: 'barChart',
    yLabel: '密度 (g/cm³)',
    bars: [
      { label: '地球', value: 5.5 },
      { label: '火星', value: 3.9 },
      { label: '木星', value: 1.3 },
      { label: '土星', value: 0.7 },
    ],
    caption: '地球型惑星は密度が大きく、木星型惑星は密度が小さい（水の密度1.0との比較）',
  },
  lf_krika_49: {
    kind: 'lineChart',
    xLabel: '太陽からの距離 (AU)',
    yLabel: '公転周期 (年)',
    series: [
      {
        label: '惑星',
        markers: true,
        points: [
          { x: 0.4, y: 0.24 },
          { x: 0.7, y: 0.62 },
          { x: 1, y: 1 },
          { x: 1.5, y: 1.9 },
          { x: 5.2, y: 12 },
          { x: 9.6, y: 29 },
        ],
      },
    ],
    caption: '太陽から遠い惑星ほど公転周期が長くなる（ケプラーの法則の基礎）',
  },

  // ===== 21 理科総合（科学技術とエネルギー資源） =====
  lf_krika_50: {
    kind: 'lineChart',
    xLabel: '世代',
    yLabel: '核分裂の回数(相対値)',
    series: [
      {
        label: '連鎖反応',
        markers: true,
        points: [
          { x: 0, y: 1 },
          { x: 1, y: 2 },
          { x: 2, y: 4 },
          { x: 3, y: 8 },
        ],
      },
    ],
    caption: '核分裂の連鎖反応：1回の分裂で生じた中性子が次々に新たな分裂を引き起こす',
  },
  lf_krika_51: {
    kind: 'barChart',
    yLabel: '透過力(相対値)',
    bars: [
      { label: 'α線(紙で止まる)', value: 1 },
      { label: 'β線(アルミで止まる)', value: 2 },
      { label: 'γ線(厚い鉛が必要)', value: 3 },
    ],
    caption: '放射線の透過力：α線<β線<γ線の順に、物を通り抜ける力が強くなる',
  },

  // ===== 22 物理（圧力・浮力・大気の力） =====
  lf_krika_52: {
    kind: 'lineChart',
    xLabel: '接する面積 (m²)',
    yLabel: '圧力 (Pa)',
    series: [
      {
        label: '力20N一定',
        markers: true,
        points: [
          { x: 0.005, y: 4000 },
          { x: 0.01, y: 2000 },
          { x: 0.02, y: 1000 },
          { x: 0.04, y: 500 },
        ],
      },
    ],
    caption: '力が一定のとき、圧力は接する面積に反比例する（F=20Nの例）',
  },
  lf_krika_53: {
    kind: 'lineChart',
    xLabel: '沈んだ深さ (cm)',
    yLabel: '浮力 (N)',
    series: [
      {
        label: '物体が沈んでいく過程',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 2, y: 0.4 },
          { x: 4, y: 0.8 },
          { x: 6, y: 1.2 },
          { x: 8, y: 1.2 },
          { x: 10, y: 1.2 },
        ],
      },
    ],
    caption: '物体が完全に沈んだあとは、深さが増しても押しのける体積が変わらず浮力は一定',
  },

  // ===== 追加バッチ：物理（力のつりあい・仕事・電力・光・運動・磁界・圧力浮力） =====
  lf_krika_54: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 4, y: 0, label: 'B' },
      { x: 2, y: 3, label: 'C' },
    ],
    sideLabels: ['F1', 'F2', 'F3'],
    caption: '3力のつりあい：力の矢印を頭と尾でつないでいくと閉じた三角形になる→合力はゼロ',
  },
  lf_krika_55: {
    kind: 'coordinate',
    xRange: [0, 4],
    yRange: [0, 25],
    polygon: [
      { x: 0, y: 0 },
      { x: 3, y: 0 },
      { x: 3, y: 20 },
      { x: 0, y: 20 },
    ],
    caption: '仕事 W=F×d はF-dグラフの面積：F=20N・d=3mのときW=20×3=60J',
  },
  lf_krika_56: {
    kind: 'lineChart',
    xLabel: '通電時間 (s)',
    yLabel: '発熱量 Q (J)',
    series: [
      {
        label: 'P=500W',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 180, y: 90000 },
        ],
      },
    ],
    caption: 'Q=Pt：100V・500Wの電熱器を3分（180秒）使うと発熱量は90000J（90kJ）',
  },
  lf_krika_57: {
    kind: 'coordinate',
    xRange: [-4, 4],
    yRange: [-1, 4],
    segments: [
      [{ x: -3, y: 3 }, { x: 0, y: 0 }],
      [{ x: 0, y: 0 }, { x: 3, y: 3 }],
    ],
    points: [
      { x: -3, y: 3, label: '入射光' },
      { x: 3, y: 3, label: '反射光' },
    ],
    caption: '反射の法則：入射角=反射角（角度は鏡の面に立てた法線＝縦軸から測る。横軸が鏡の面）',
  },
  lf_krika_58: {
    kind: 'lineChart',
    xLabel: '時間 t (s)',
    yLabel: '速さ v (m/s)',
    series: [
      {
        label: 'a=2m/s²（初速度0）',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 5, y: 10 },
        ],
      },
    ],
    caption: 'v-tグラフの傾き=加速度。5秒後にv=2×5=10m/s、この間の移動距離x=25m（グラフの面積）',
  },
  lf_krika_59: {
    kind: 'lineChart',
    xLabel: '加速度 a (m/s²)',
    yLabel: '力 F (N)',
    series: [
      {
        label: 'm=2kg',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 1, y: 2 },
          { x: 2, y: 4 },
          { x: 3, y: 6 },
        ],
      },
    ],
    caption: '運動方程式 F=ma：質量2kgの物体では力は加速度に比例する（a=2m/s²のときF=4N）',
  },
  lf_krika_60: {
    kind: 'lineChart',
    xLabel: '時間 (s)',
    yLabel: '速さ (m/s)',
    series: [
      {
        label: '衝突による減速',
        markers: true,
        points: [
          { x: 0, y: 15 },
          { x: 0.3, y: 0 },
        ],
      },
    ],
    caption: '質量1500kg・15m/sの自動車が0.3秒で停止：平均の力=運動量変化/時間=22500/0.3=75000N',
  },
  lf_krika_61: {
    kind: 'lineChart',
    xLabel: '水深 (m)',
    yLabel: '水圧 (相対値)',
    series: [
      {
        label: '水圧は水深に比例',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 5, y: 5 },
          { x: 10, y: 10 },
        ],
      },
    ],
    caption: '水圧は水深に比例して大きくなる。あらゆる向きから同じ深さなら同じ大きさではたらく',
  },
  lf_krika_62: {
    kind: 'pieChart',
    slices: [
      { label: '水中部分', value: 92 },
      { label: '水面上', value: 8 },
    ],
    caption: '氷（密度0.92g/cm³）が水（密度1.00g/cm³）に浮くとき、体積の92%が水中、8%が水面上に出る',
  },
  lf_krika_63: {
    kind: 'pieChart',
    slices: [
      { label: '海中部分', value: 89 },
      { label: '海面上', value: 11 },
    ],
    caption: '氷山（氷0.92g/cm³・海水1.03g/cm³）：海面上に見えるのは全体のわずか約11%（「氷山の一角」）',
  },
  lf_krika_81: {
    kind: 'lineChart',
    xLabel: '磁石の強さ（相対値）',
    yLabel: '導線が受ける力 (N)',
    series: [
      {
        label: '電流一定',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 1, y: 1 },
          { x: 2, y: 2 },
        ],
      },
    ],
    caption: 'フレミングの左手の法則：磁界(磁石)が強いほど、電流が磁界から受ける力は大きい（導線が磁界に垂直なとき最大）',
  },

  // ===== 追加バッチ：化学（密度・電池・モル計算） =====
  lf_krika_64: {
    kind: 'lineChart',
    xLabel: '体積 (cm³)',
    yLabel: '質量 (g)',
    series: [
      {
        label: '密度2.7g/cm³（アルミニウム）',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 20, y: 54 },
        ],
      },
    ],
    caption: '密度=質量÷体積：質量54g・体積20cm³の金属→密度2.7g/cm³（アルミニウムと分かる）',
  },
  lf_krika_65: {
    kind: 'chemEquation',
    equation: '2H2 + O2 -> 2H2O',
    caption: '燃料電池：水素と酸素の反応から化学エネルギーを直接電気エネルギーに変える（生成物は水のみ）',
  },
  lf_krika_66: {
    kind: 'barChart',
    yLabel: '質量変化 (g)',
    bars: [
      { label: '亜鉛（減少）', value: 2.6 },
      { label: '銅（析出）', value: 2.56 },
    ],
    caption: 'ダニエル電池：亜鉛が2.6g（0.04mol）とけると、電子の数が等しいので銅は0.04mol=2.56g析出する',
  },
  lf_krika_67: {
    kind: 'chemEquation',
    equation: 'Cu + 2Ag+ -> Cu2+ + 2Ag',
    caption: '金属樹：銅が電子を放出してとけ（Cu→Cu2++2e-）、銀イオンがその電子を受け取り銀が析出する',
  },
  lf_krika_68: {
    kind: 'barChart',
    yLabel: '分子量・式量',
    bars: [
      { label: 'H2O', value: 18 },
      { label: 'CO2', value: 44 },
      { label: 'NaCl', value: 58.5 },
    ],
    caption: '分子量・式量は原子量の総和：H2O=1×2+16=18、CO2=12+16×2=44、NaCl=23+35.5=58.5',
  },
  lf_krika_69: {
    kind: 'barChart',
    yLabel: '標準状態で1molの質量 (g)',
    bars: [
      { label: '水素H2', value: 2 },
      { label: '酸素O2', value: 32 },
      { label: '二酸化炭素CO2', value: 44 },
    ],
    caption: '気体は種類によらず標準状態(0℃・1気圧)で1molは22.4L。質量は分子量に等しい（アボガドロの法則）',
  },
  lf_krika_70: {
    kind: 'barChart',
    yLabel: '物質量 (mol)',
    bars: [
      { label: 'C（炭素）', value: 3 },
      { label: 'O2（酸素）', value: 3 },
      { label: 'CO2', value: 3 },
    ],
    caption: 'C+O2→CO2の係数比は1:1:1。炭素3molを完全燃焼させると酸素3molを消費し、CO2が3mol(132g)生成する',
  },
  lf_krika_71: {
    kind: 'barChart',
    yLabel: 'モル濃度 (mol/L)',
    bars: [
      { label: '希釈前(100mL)', value: 2.0 },
      { label: '希釈後(500mL)', value: 0.4 },
    ],
    caption: '希釈しても溶質の物質量は変わらない：c1V1=c2V2 → 2.0×100=c2×500 → c2=0.4mol/L',
  },

  // ===== 追加バッチ：生物（葉・花・種子・遺伝の発展） =====
  lf_krika_72: {
    kind: 'bioDiagram',
    template: 'leafCrossSection',
    caption: '葉の断面：表皮・葉脈（道管は内側・師管は外側）・気孔のつくり',
  },
  lf_krika_73: {
    kind: 'bioDiagram',
    template: 'flower',
    caption: '花のつくり：がく→花弁→おしべ(やく・花糸)→めしべ(柱頭・花柱・子房・胚珠)。受粉後、胚珠→種子、子房→果実になる',
  },
  lf_krika_74: {
    kind: 'bioDiagram',
    template: 'seed',
    caption: '受精後、胚珠は種子になる。種子の中の胚（将来の子葉・幼根・幼芽）と種皮のつくり',
  },
  lf_krika_75: {
    kind: 'barChart',
    yLabel: '個体数の比',
    bars: [
      { label: '赤(RR)', value: 1 },
      { label: '桃色(Rr)', value: 2 },
      { label: '白(rr)', value: 1 },
    ],
    caption: '不完全優性(オシロイバナ)：Rr×Rrの子は表現型も遺伝子型と同じ1:2:1になる（ふつうの優性遺伝の3:1と異なる）',
  },
  lf_krika_76: {
    kind: 'barChart',
    yLabel: '子の血液型の比',
    bars: [
      { label: 'AB型', value: 1 },
      { label: 'A型', value: 1 },
      { label: 'B型', value: 1 },
      { label: 'O型', value: 1 },
    ],
    caption: 'A型(IAi)の父×B型(IBi)の母の子：AB型・A型・B型・O型が1:1:1:1の割合ですべて生まれ得る',
  },

  // ===== 追加バッチ：理科総合・地学（時間配分・流水・惑星距離・変換効率） =====
  lf_krika_77: {
    kind: 'barChart',
    yLabel: '目安時間 (分/問)',
    bars: [
      { label: '知識問題', value: 1 },
      { label: '計算問題', value: 2.5 },
      { label: '記述問題', value: 4 },
      { label: '実験・グラフ考察', value: 3.5 },
    ],
    caption: '大問の時間配分の目安：計算・記述・実験考察の問題ほど時間をかけて解く',
  },
  lf_krika_78: {
    kind: 'barChart',
    yLabel: '流れの速さ（相対値）',
    bars: [
      { label: '上流', value: 3 },
      { label: '中流', value: 2 },
      { label: '下流', value: 1 },
    ],
    caption: '川の流れの速さ：上流(侵食・V字谷)＞中流(扇状地)＞下流(三角州、堆積が中心)の順にゆるやかになる',
  },
  lf_krika_79: {
    kind: 'barChart',
    yLabel: '太陽からの距離 (AU)',
    bars: [
      { label: '水星', value: 0.4 },
      { label: '金星', value: 0.7 },
      { label: '地球', value: 1.0 },
      { label: '火星', value: 1.5 },
      { label: '木星', value: 5.2 },
      { label: '土星', value: 9.6 },
    ],
    caption: '太陽から遠い惑星ほど公転周期が長い（水星0.24年〜土星29年、ケプラーの法則の基礎）',
  },
  lf_krika_80: {
    kind: 'pieChart',
    slices: [
      { label: '光として利用(60J)', value: 60 },
      { label: '熱として損失(40J)', value: 40 },
    ],
    caption: '変換効率60%の電球：投入100Jのうち60Jが光に変換され、40Jは熱として失われる',
  },
};
