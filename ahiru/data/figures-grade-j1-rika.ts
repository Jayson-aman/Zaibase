import type { Figure } from './figures';

// 中学1年 理科 新規50問（grade_j1_rika_01〜50）の図解。
// 図が理解の助けになる問題のみ（光の反射、圧力・密度の計算、状態変化の
// 温度グラフ、地震の走時グラフ、地層の柱状図）に登録する。
// 用語の暗記・分類（動物や植物のなかま分け等）は空間的/量的な図が
// 助けにならないため、図を付けていない。
export const figuresGradeJ1Rika: Record<string, Figure> = {
  // ---------- 光と音 ----------

  // rika_03 光の反射：入射角45°で入射した光と、その反射光（法線を基準に対称）
  grade_j1_rika_03: {
    kind: 'coordinate',
    xRange: [-4, 4],
    yRange: [-1, 5],
    points: [
      { x: -3, y: 3, label: '入射光' },
      { x: 3, y: 3, label: '反射光' },
      { x: 0, y: 4.5, label: '法線' },
    ],
    segments: [
      [{ x: -4, y: 0 }, { x: 4, y: 0 }], // 鏡の面
      [{ x: 0, y: 0 }, { x: 0, y: 4 }], // 法線
      [{ x: -3, y: 3 }, { x: 0, y: 0 }], // 入射光
      [{ x: 0, y: 0 }, { x: 3, y: 3 }], // 反射光
    ],
    caption: '入射角45°で鏡の面に入射する光と反射光',
    steps: ['反射の法則より、入射角＝反射角が成り立つ', '入射角が45°なので、反射角も45°になる'],
  },

  // ---------- 力のはたらき ----------

  // rika_11 フックの法則：20gで4cm伸びる（与えられた点）のみ示す。50gでの伸びは解答。
  grade_j1_rika_11: {
    kind: 'lineChart',
    xLabel: 'おもりの重さ(g)',
    yLabel: 'ばねの伸び(cm)',
    xRange: [0, 55],
    yRange: [0, 12],
    series: [
      {
        label: 'ばねの伸び',
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 20, y: 4 },
        ],
      },
    ],
    caption: 'ばねの伸びはおもりの重さに比例する(フックの法則)。20gで4cm伸びる',
    steps: ['20gで4cm伸びるので、1gあたりの伸びは 4÷20＝0.2cm', '50gのときの伸びは 0.2×50＝10cm'],
  },

  // rika_14 圧力の計算：面積2m²の板に40Nの力（圧力Paは解答なので示さない）
  grade_j1_rika_14: {
    kind: 'polygon',
    points: [
      { x: 0, y: 1 },
      { x: 2, y: 1 },
      { x: 2, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['2m', '1m', null, null],
    rightAngles: [0, 1, 2, 3],
    caption: '面積2m²の板に垂直に40Nの力が加わっている',
    steps: ['圧力＝力÷面積', '圧力＝40N÷2m²', '圧力＝20Pa'],
  },

  // rika_15 圧力の計算（単位変換あり）：底面積25cm²(5cm×5cm)・重さ2Nの直方体
  grade_j1_rika_15: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '5cm', depth: '5cm' },
    caption: '底面積25cm²(5cm×5cm)、重さ2Nの直方体',
    steps: [
      '底面積をm²に直す: 25cm²＝25÷10000＝0.0025m²',
      '圧力＝力÷面積＝2N÷0.0025m²',
      '圧力＝800Pa',
    ],
  },

  // ---------- 身のまわりの物質 ----------

  // rika_18 密度の計算：体積40cm³(2cm×4cm×5cm)・質量100gの金属
  grade_j1_rika_18: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '2cm', depth: '4cm', height: '5cm' },
    caption: '体積40cm³(2cm×4cm×5cm)、質量100gの金属',
    steps: ['密度＝質量÷体積', '密度＝100g÷40cm³', '密度＝2.5g/cm³'],
  },

  // rika_21 密度による物質の判別：4種類の金属の密度を比較する棒グラフ
  grade_j1_rika_21: {
    kind: 'barChart',
    yLabel: '密度(g/cm³)',
    bars: [
      { label: '鉄', value: 7.9, color: '#64748B' },
      { label: '銅', value: 8.9, color: '#F59E0B' },
      { label: 'アルミニウム', value: 2.7, color: '#94A3B8' },
      { label: '鉛', value: 11.3, color: '#334155' },
    ],
    caption: '代表的な金属の密度(g/cm³)',
    steps: ['密度＝質量÷体積＝44.5g÷5cm³＝8.9g/cm³', '表の中で8.9g/cm³に一致するのは銅'],
  },

  // rika_24 状態変化の加熱曲線：状態変化中(とけている間)は温度が一定になる
  grade_j1_rika_24: {
    kind: 'lineChart',
    xLabel: '加熱時間',
    yLabel: '温度(℃)',
    series: [
      {
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 0, y: -10 },
          { x: 2, y: 0 },
          { x: 5, y: 0 },
          { x: 7, y: 20 },
        ],
      },
    ],
    caption: '固体を加熱したときの温度変化(状態変化中は温度が一定になる)',
    steps: [
      '固体の温度が0℃まで上がる',
      '0℃で固体がとけている間、温度は一定に保たれる(状態変化にエネルギーが使われるため)',
      'すべてとけ終わると、液体の温度が再び上がり始める',
    ],
  },

  // rika_25 沸点による液体の判別：78℃で温度が一定になる加熱曲線
  grade_j1_rika_25: {
    kind: 'lineChart',
    xLabel: '加熱時間',
    yLabel: '温度(℃)',
    series: [
      {
        color: '#EF4444',
        markers: true,
        points: [
          { x: 0, y: 20 },
          { x: 3, y: 78 },
          { x: 6, y: 78 },
          { x: 8, y: 90 },
        ],
      },
    ],
    caption: '液体を加熱したときの温度変化(78℃で沸騰し、温度が一定になる)',
    steps: ['グラフから、温度が一定になった(沸騰した)温度は78℃', '表と比べると、沸点78℃はエタノールと一致する'],
  },

  // ---------- 大地の変化 ----------

  // rika_45 地震のP波・S波：震源から60km地点への到達時間（走時グラフ）
  grade_j1_rika_45: {
    kind: 'lineChart',
    xLabel: '時間(秒)',
    yLabel: '震源からの距離(km)',
    xRange: [0, 20],
    yRange: [0, 70],
    series: [
      {
        label: 'P波',
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 10, y: 60 },
        ],
      },
      {
        label: 'S波',
        color: '#EF4444',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 15, y: 60 },
        ],
      },
    ],
    caption: '震源から60km離れた地点にP波(6km/s)は10秒後、S波(4km/s)は15秒後に到達',
    steps: [
      'P波の到達時間＝60km÷6km/s＝10秒',
      'S波の到達時間＝60km÷4km/s＝15秒',
      '初期微動継続時間＝15－10＝5秒',
    ],
  },

  // rika_46 初期微動継続時間と震源からの距離の比例関係（与えられた点(12,96)のみ示す）
  grade_j1_rika_46: {
    kind: 'lineChart',
    xLabel: '初期微動継続時間(秒)',
    yLabel: '震源からの距離(km)',
    xRange: [0, 15],
    yRange: [0, 110],
    series: [
      {
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 12, y: 96 },
        ],
      },
    ],
    caption: '震源からの距離は初期微動継続時間にほぼ比例する(距離＝8×初期微動継続時間)',
    steps: ['震源からの距離＝8×初期微動継続時間', '距離＝8×12', '距離＝96km'],
  },

  // rika_50 地層の柱状図：地層累重の法則（下ほど古く、上ほど新しい）
  grade_j1_rika_50: {
    kind: 'stratum',
    columns: [
      {
        label: '観測地点',
        topLabel: '地表',
        layers: [
          { name: 'C層(泥岩)', thickness: 3, pattern: 'mud' },
          { name: 'B層(砂岩)', thickness: 3, pattern: 'sand' },
          { name: 'A層(れき岩)', thickness: 3, pattern: 'gravel' },
        ],
      },
    ],
    caption: '地層累重の法則：下の層ほど古い。最下層のA層が最も古く、最上層のC層が最も新しい',
  },
};
