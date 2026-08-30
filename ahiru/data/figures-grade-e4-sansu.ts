import type { Figure } from './figures';

// 小学4年生・算数（grade_e4_sansu_01〜50）の図解。
// 図があると理解が深まる問題（角度・四角形・概数の範囲・折れ線グラフ・面積・
// 分数・立体）だけに付与し、純粋な計算問題（大きな数の読み書き・わり算の筆算・
// 小数のかけ算わり算）には付けていない。
export const figuresGradeE4Sansu: Record<string, Figure> = {
  // 三角形の内角の和＝180°。2つの角(50°・70°)から残りの角を求める。
  grade_e4_sansu_11: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 10, y: 0, label: 'B' },
      { x: 3, y: 6, label: 'C' },
    ],
    caption: '3つの角の和 = 180°（50° + 70° + ? = 180°）',
    steps: [
      '三角形の3つの角の和はいつも180°',
      'わかっている角は50°と70°の2つ',
      '180から50をひく：180 − 50 = 130',
      '130から70をひく：130 − 70 = 60',
      'よって残りの角は60°',
    ],
  },

  // 四角形の内角の和＝360°。3つの角(90°・80°・110°)から残りの角を求める。
  grade_e4_sansu_13: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 10, y: 0, label: 'B' },
      { x: 10, y: 7, label: 'C' },
      { x: 0, y: 8, label: 'D' },
    ],
    caption: '4つの角の和 = 360°（90° + 80° + 110° + ? = 360°）',
    steps: [
      '四角形の4つの角の和はいつも360°',
      'わかっている角は90°・80°・110°の3つ',
      '360から90をひく：360 − 90 = 270',
      '270から80をひく：270 − 80 = 190',
      '190から110をひく：190 − 110 = 80',
      'よって残りの角は80°',
    ],
  },

  // 頂角40°の二等辺三角形。底角どうしが等しいことを使って求める。
  grade_e4_sansu_15: {
    kind: 'polygon',
    points: [
      { x: 5, y: 8, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 10, y: 0, label: 'C' },
    ],
    equalSides: [[0, 2]],
    equalAngles: [[1, 2]],
    caption: '頂角A = 40°、底角B = 底角C（二等辺三角形）',
    steps: [
      '三角形の内角の和は180°',
      '頂角は40°なので、180から40をひいて底角2つの和を求める：180 − 40 = 140',
      '二等辺三角形なので、底角2つは等しい',
      '140を2等分する：140 ÷ 2 = 70',
      'よって底角はそれぞれ70°',
    ],
  },

  // 1つの角が65°の平行四辺形。となり合う角の和は180°。
  grade_e4_sansu_16: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 10, y: 0, label: 'B' },
      { x: 13, y: 6, label: 'C' },
      { x: 3, y: 6, label: 'D' },
    ],
    equalSides: [
      [0, 1],
      [1, 2],
    ],
    equalAngles: [
      [0, 2],
      [1, 3],
    ],
    caption: 'となり合う角Aと角Bの和 = 180°（角A = 65°のとき角B = 115°）',
  },

  // 1辺6cmのひし形。4つの辺の長さがすべて等しい。
  grade_e4_sansu_17: {
    kind: 'polygon',
    points: [
      { x: 5, y: 0, label: 'A' },
      { x: 9, y: 4, label: 'B' },
      { x: 5, y: 8, label: 'C' },
      { x: 1, y: 4, label: 'D' },
    ],
    sideLabels: ['6cm', '6cm', '6cm', '6cm'],
    equalSides: [[0, 1, 2, 3]],
    caption: 'まわりの長さ = 6 × 4 = 24cm',
  },

  // 台形の定義（1組の辺だけが平行）。
  grade_e4_sansu_18: {
    kind: 'polygon',
    points: [
      { x: 1, y: 0, label: 'A' },
      { x: 9, y: 0, label: 'B' },
      { x: 7, y: 5, label: 'C' },
      { x: 3, y: 5, label: 'D' },
    ],
    caption: '辺ABと辺DCだけが平行な四角形＝台形',
  },

  // 2直線が90°で交わる＝垂直。
  grade_e4_sansu_19: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 8, y: 0, label: 'B' },
      { x: 8, y: 8, label: 'C' },
    ],
    rightAngles: [1],
    caption: '直線ABと直線BCが交わる角は90° → 垂直の関係',
  },

  // 2辺が9cm・6cmの平行四辺形。まわりの長さを求める。
  grade_e4_sansu_20: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 9, y: 0, label: 'B' },
      { x: 12, y: 5, label: 'C' },
      { x: 3, y: 5, label: 'D' },
    ],
    sideLabels: ['9cm', '6cm', null, null],
    equalSides: [
      [0, 1],
      [1, 2],
    ],
    caption: 'まわりの長さ = (9 + 6) × 2 = 30cm',
    steps: [
      '平行四辺形は向かい合う辺の長さが等しい',
      '9cmの辺が2本、6cmの辺が2本ある',
      'まず隣り合う2辺の和を求める：9 + 6 = 15',
      '2本ずつあるので2倍する：15 × 2 = 30',
      'よってまわりの長さは30cm',
    ],
  },

  // 数直線：四捨五入して2400になる整数の範囲(2350以上2450未満)。
  grade_e4_sansu_23: {
    kind: 'numberLine',
    min: 2300,
    max: 2500,
    step: 50,
    points: [
      { x: 2350, label: '2350' },
      { x: 2400, label: '2400' },
      { x: 2450, label: '2450', open: true },
    ],
    segments: [{ from: 2350, to: 2450, toOpen: true }],
    caption: '四捨五入して2400になる整数の範囲：2350以上2450未満',
    steps: [
      '四捨五入して2400になる整数の範囲を考える',
      '下の境目を考える：十の位が5になる2350から切り上げると2400になる',
      '2350より小さい数は切り捨てられて2300になってしまう',
      '上の境目を考える：2450になると切り上げて2500になってしまう',
      '2450の手前までなら四捨五入で2400のままになる',
      'よって範囲は2350以上2450未満',
    ],
  },

  // 数直線：四捨五入して350になる整数の範囲(345以上355未満)。
  grade_e4_sansu_25: {
    kind: 'numberLine',
    min: 330,
    max: 370,
    step: 10,
    points: [
      { x: 345, label: '345（いちばん小さい）' },
      { x: 350, label: '350' },
      { x: 354, label: '354（いちばん大きい）' },
      { x: 355, label: '355', open: true },
    ],
    segments: [{ from: 345, to: 355, toOpen: true }],
    caption: '四捨五入して350になる整数の範囲：345以上355未満',
    steps: [
      '四捨五入して350になる整数の範囲を考える',
      'その範囲は345以上355未満',
      'この範囲でいちばん小さい整数を考える：345',
      'この範囲でいちばん大きい整数を考える：355の1つ手前の354',
      'よっていちばん小さい数は345、いちばん大きい数は354',
    ],
  },

  // 気温の変化を表す折れ線グラフ(9時〜15時)。最高気温は13時(午後1時)の26℃。
  grade_e4_sansu_26: {
    kind: 'lineChart',
    xLabel: '時こく',
    yLabel: '気温(℃)',
    xRange: [9, 15],
    yRange: [15, 28],
    series: [
      {
        label: '気温',
        markers: true,
        points: [
          { x: 9, y: 18 },
          { x: 10, y: 20 },
          { x: 11, y: 23 },
          { x: 12, y: 25 },
          { x: 13, y: 26 },
          { x: 14, y: 24 },
          { x: 15, y: 22 },
        ],
      },
    ],
    caption: '気温がいちばん高いのは13時（午後1時）の26℃',
  },

  // 同じ気温グラフ。10時→11時の区間の変化がいちばん大きい(+3℃)。
  grade_e4_sansu_27: {
    kind: 'lineChart',
    xLabel: '時こく',
    yLabel: '気温(℃)',
    xRange: [9, 15],
    yRange: [15, 28],
    series: [
      {
        label: '気温',
        markers: true,
        points: [
          { x: 9, y: 18 },
          { x: 10, y: 20 },
          { x: 11, y: 23 },
          { x: 12, y: 25 },
          { x: 13, y: 26 },
          { x: 14, y: 24 },
          { x: 15, y: 22 },
        ],
      },
    ],
    caption: '折れ線のかたむきがいちばん急な区間＝10時から11時（+3℃）',
    steps: [
      '1時間ごとの気温の変化を計算する',
      '9時→10時：20−18＝+2℃、10時→11時：23−20＝+3℃',
      '11時→12時：25−23＝+2℃、12時→13時：26−25＝+1℃',
      '13時→14時：24−26＝−2℃、14時→15時：22−24＝−2℃',
      'この中でいちばん大きい変化は+3℃',
      'それは10時から11時の間',
    ],
  },

  // ヒマワリの高さの変化を表す折れ線グラフ(1〜5週目)。
  grade_e4_sansu_28: {
    kind: 'lineChart',
    xLabel: '週',
    yLabel: '高さ(cm)',
    xRange: [1, 5],
    yRange: [0, 60],
    series: [
      {
        label: 'ヒマワリの高さ',
        markers: true,
        points: [
          { x: 1, y: 10 },
          { x: 2, y: 18 },
          { x: 3, y: 29 },
          { x: 4, y: 45 },
          { x: 5, y: 58 },
        ],
      },
    ],
    caption: '4週目(45cm)から5週目(58cm)までで13cm伸びた',
  },

  // 同じヒマワリのグラフ。1週目から5週目までの伸びを表す。
  grade_e4_sansu_29: {
    kind: 'lineChart',
    xLabel: '週',
    yLabel: '高さ(cm)',
    xRange: [1, 5],
    yRange: [0, 60],
    series: [
      {
        label: 'ヒマワリの高さ',
        markers: true,
        points: [
          { x: 1, y: 10 },
          { x: 2, y: 18 },
          { x: 3, y: 29 },
          { x: 4, y: 45 },
          { x: 5, y: 58 },
        ],
      },
    ],
    caption: '1週目(10cm)から5週目(58cm)までで48cm伸びた',
  },

  // 同じヒマワリのグラフ。区間ごとの伸びを比べる(3→4週16cm vs 4→5週13cm)。
  grade_e4_sansu_30: {
    kind: 'lineChart',
    xLabel: '週',
    yLabel: '高さ(cm)',
    xRange: [1, 5],
    yRange: [0, 60],
    series: [
      {
        label: 'ヒマワリの高さ',
        markers: true,
        points: [
          { x: 1, y: 10 },
          { x: 2, y: 18 },
          { x: 3, y: 29 },
          { x: 4, y: 45 },
          { x: 5, y: 58 },
        ],
      },
    ],
    caption: '3週目→4週目は16cm、4週目→5週目は13cm伸びた（3→4週のほうが大きい）',
    steps: [
      '3週目から4週目までの伸びを求める',
      '45 − 29 = 16cm',
      '4週目から5週目までの伸びを求める',
      '58 − 45 = 13cm',
      '2つの伸びを比べる：16cmと13cm',
      '16cm > 13cm',
      'よって3週目から4週目の間のほうが大きく伸びた',
    ],
  },

  // 縦8cm・横15cmの長方形。面積 = 8×15 = 120c㎡。
  grade_e4_sansu_31: {
    kind: 'polygon',
    points: [
      { x: 0, y: 8, label: 'A' },
      { x: 15, y: 8, label: 'B' },
      { x: 15, y: 0, label: 'C' },
      { x: 0, y: 0, label: 'D' },
    ],
    sideLabels: ['15cm', '8cm', null, null],
    rightAngles: [0, 1, 2, 3],
    caption: '面積 = 8 × 15 = 120c㎡',
  },

  // 1辺12cmの正方形。面積 = 12×12 = 144c㎡。
  grade_e4_sansu_32: {
    kind: 'polygon',
    points: [
      { x: 0, y: 12, label: 'A' },
      { x: 12, y: 12, label: 'B' },
      { x: 12, y: 0, label: 'C' },
      { x: 0, y: 0, label: 'D' },
    ],
    sideLabels: ['12cm', '12cm', null, null],
    rightAngles: [0, 1, 2, 3],
    caption: '面積 = 12 × 12 = 144c㎡',
  },

  // 面積96c㎡・縦8cmの長方形。横の長さを求める(96÷8=12cm)。
  grade_e4_sansu_33: {
    kind: 'polygon',
    points: [
      { x: 0, y: 8, label: 'A' },
      { x: 12, y: 8, label: 'B' },
      { x: 12, y: 0, label: 'C' },
      { x: 0, y: 0, label: 'D' },
    ],
    sideLabels: ['?', '8cm', null, null],
    rightAngles: [0, 1, 2, 3],
    caption: '面積96c㎡、縦8cm → 横 = 96 ÷ 8 = 12cm',
  },

  // 10m×14mの土地から4m×6mを切り取ったL字形。残りの面積 = 116㎡。
  grade_e4_sansu_34: {
    kind: 'polygon',
    points: [
      { x: 0, y: 10, label: 'A' },
      { x: 14, y: 10, label: 'B' },
      { x: 14, y: 4, label: 'C' },
      { x: 8, y: 4, label: 'D' },
      { x: 8, y: 0, label: 'E' },
      { x: 0, y: 0, label: 'F' },
    ],
    caption: '大きい長方形(10m×14m=140㎡)から切り取った部分(4m×6m=24㎡)をひく → 116㎡',
    steps: [
      'もとの土地の面積を求める',
      'たて10m×横14m＝140㎡',
      '切り取った長方形の面積を求める',
      'たて4m×横6m＝24㎡',
      'もとの面積から切り取った面積をひく',
      '140 − 24 = 116',
      'よって残りの面積は116㎡',
    ],
  },

  // 1辺30mの正方形の畑。面積を㎡からaに単位変換する。
  grade_e4_sansu_35: {
    kind: 'polygon',
    points: [
      { x: 0, y: 30, label: 'A' },
      { x: 30, y: 30, label: 'B' },
      { x: 30, y: 0, label: 'C' },
      { x: 0, y: 0, label: 'D' },
    ],
    sideLabels: ['30m', '30m', null, null],
    rightAngles: [0, 1, 2, 3],
    caption: '面積 = 30 × 30 = 900㎡ = 9a（1a = 100㎡）',
    steps: [
      '正方形の面積を求める',
      '30 × 30 = 900㎡',
      '1a＝100㎡なので、㎡をaに直すには100でわる',
      '900 ÷ 100 = 9',
      'よって畑の面積は9a',
    ],
  },

  // 2/7Lと3/7Lをたして5/7Lになる様子。
  grade_e4_sansu_42: {
    kind: 'barChart',
    yLabel: 'L(7分の1が1目もり)',
    yMax: 7,
    bars: [
      { label: '1回目 2/7L', value: 2 },
      { label: '2回目 3/7L', value: 3 },
      { label: '合計 5/7L', value: 5 },
    ],
    caption: '2/7 + 3/7 = 5/7L',
  },

  // 5/8mから2/8mを使って残り3/8mになる様子。
  grade_e4_sansu_43: {
    kind: 'barChart',
    yLabel: 'm(8分の1が1目もり)',
    yMax: 8,
    bars: [
      { label: 'はじめ 5/8m', value: 5 },
      { label: '使った 2/8m', value: 2 },
      { label: '残り 3/8m', value: 3 },
    ],
    caption: '5/8 − 2/8 = 3/8m',
  },

  // 数直線上に1と2/5、1と1/5、和の2と3/5を示す。
  grade_e4_sansu_44: {
    kind: 'numberLine',
    min: 0,
    max: 3,
    step: 1,
    points: [
      { x: 1.4, label: '1と2/5L' },
      { x: 1.2, label: '1と1/5L' },
      { x: 2.6, label: '2と3/5L（合計）' },
    ],
    caption: '1と2/5 + 1と1/5 = 2と3/5L',
    steps: [
      '整数部分どうしをたす',
      '1 + 1 = 2',
      '分数部分どうしをたす',
      '2/5 + 1/5 = 3/5',
      '整数部分と分数部分をあわせる',
      '2と3/5',
      'よって全部で2と3/5L',
    ],
  },

  // 数直線上に3m、切り取った1と2/5m、残りの1と3/5mを示す。
  grade_e4_sansu_45: {
    kind: 'numberLine',
    min: 0,
    max: 3,
    step: 1,
    points: [
      { x: 3, label: '3m（はじめ）' },
      { x: 1.4, label: '1と2/5m（切り取った長さ）' },
      { x: 1.6, label: '1と3/5m（残り）' },
    ],
    caption: '3 − 1と2/5 = 1と3/5m',
    steps: [
      '3から1と2/5をそのままひくと、分数の部分がひけない',
      'そこで3を「2と5/5」に直す',
      '整数部分をひく：2 − 1 = 1',
      '分数部分をひく：5/5 − 2/5 = 3/5',
      '整数部分と分数部分をあわせる',
      '1と3/5',
      'よって残りは1と3/5m',
    ],
  },

  // 1辺4cmの立方体。体積 = 4×4×4 = 64c㎥。
  grade_e4_sansu_46: {
    kind: 'solid',
    shape: 'cube',
    labels: { width: '4cm', depth: '4cm', height: '4cm' },
    caption: '体積 = 4 × 4 × 4 = 64c㎥',
  },

  // たて3cm・横5cm・高さ6cmの直方体。体積 = 90c㎥。
  grade_e4_sansu_47: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '5cm', depth: '3cm', height: '6cm' },
    caption: '体積 = 3 × 5 × 6 = 90c㎥',
  },

  // 体積120c㎥、たて4cm、横5cmの直方体。高さを求める(6cm)。
  grade_e4_sansu_48: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '5cm', depth: '4cm', height: '?' },
    caption: '体積120c㎥ ÷ 底面積(4×5=20c㎡) = 高さ6cm',
    steps: [
      'たて×横の面（底面）の面積を求める',
      '4 × 5 = 20c㎡',
      '体積＝底面積×高さなので、高さ＝体積÷底面積',
      '120 ÷ 20 = 6',
      'よって高さは6cm',
    ],
  },

  // 立方体の面・辺・頂点の数を確認する図。
  grade_e4_sansu_49: {
    kind: 'solid',
    shape: 'cube',
    labels: { width: '立方体', depth: '', height: '' },
    caption: '面6つ・辺12本・頂点8つ',
  },

  // 十字形の立方体の展開図。「あ」の面と向かい合うのは「う」。
  grade_e4_sansu_50: {
    kind: 'net',
    shape: 'cube',
    faceLabels: ['あ', 'い', 'う', 'え', 'お', 'か'],
    caption: '縦に並ぶ「あ・い・う・え」は1つとばしで向かい合う：あ⇔う、い⇔え。左右の「お・か」も1組',
    steps: [
      '十字形の展開図で縦に並んだ4面「あ・い・う・え」を考える',
      '組み立てると、この4面は側面を1周する帯になる',
      '1周する帯では、1つとばしの面どうしが向かい合う',
      '「あ」から1つとばした「う」が向かい合う',
      '「い」から1つとばした「え」が向かい合う',
      '左右に張り出した「お」と「か」も考える',
      '組み立てると「お」と「か」も向かい合う1組になる',
      'よって「あ」の面と向かい合うのは「う」',
    ],
  },
};
