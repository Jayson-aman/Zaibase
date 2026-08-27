import type { Figure } from './figures';

// 中学1年 数学 新規50問（grade_j1_sansu_01〜50）の図解。
// 図が理解の助けになる問題のみ（比例・反比例のグラフ、平面図形の移動、
// 空間図形の立体、資料の活用のグラフ・箱ひげ図）に登録する。
// 正負の数・文字と式・一次方程式は純粋な数式計算のため図は付けない。
export const figuresGradeJ1Sansu: Record<string, Figure> = {
  // ---------- 比例と反比例 ----------

  // 比例 y=ax。x=4のときy=20という「与えられた点」のみ示す。a・式は解答なので線は引かない。
  grade_j1_sansu_25: {
    kind: 'coordinate',
    xRange: [-1, 6],
    yRange: [-2, 22],
    points: [{ x: 4, y: 20, label: '(4, 20)' }],
    caption: '比例 y＝ax のグラフは点(4, 20)を通る',
    steps: ['20 = a×4 として比例定数aを求める: a = 20÷4 = 5', 'よって y = 5x'],
  },
  // 反比例 y=a/x。x=3のときy=8という「与えられた点」のみ示す。式は解答なので曲線は描かない。
  grade_j1_sansu_26: {
    kind: 'coordinate',
    xRange: [-1, 9],
    yRange: [-1, 10],
    points: [{ x: 3, y: 8, label: '(3, 8)' }],
    caption: '反比例 y＝a/x のグラフは点(3, 8)を通る',
    steps: ['8 = a÷3 として比例定数aを求める: a = 8×3 = 24', 'よって y = 24/x'],
  },
  // 比例 y=-3x（式は問題文で与えられている）のグラフ。x=-4のときのyは解答なので点は打たない。
  grade_j1_sansu_27: {
    kind: 'coordinate',
    xRange: [-5, 5],
    yRange: [-5, 16],
    lines: [{ a: -3, b: 0, label: 'y＝－3x' }],
    caption: '比例 y＝－3x のグラフ',
  },
  // 反比例 y=36/x（式は問題文で与えられている）のグラフ。y=9のときのxは解答なので点は打たない。
  grade_j1_sansu_28: {
    kind: 'coordinate',
    xRange: [-10, 10],
    yRange: [-10, 10],
    hyperbolas: [{ k: 36, label: 'y＝36/x' }],
    caption: '反比例 y＝36/x のグラフ',
    steps: ['9 = 36/x の両辺にxをかける: 9x = 36', 'x = 36÷9 = 4'],
  },
  // 比例 y=ax。x=-2のときy=10という「与えられた点」のみ示す。x=7のときのyは解答。
  grade_j1_sansu_29: {
    kind: 'coordinate',
    xRange: [-4, 8],
    yRange: [-40, 12],
    points: [{ x: -2, y: 10, label: '(－2, 10)' }],
    caption: '比例のグラフは点(－2, 10)を通る',
    steps: ['10 = a×(－2) より a = 10÷(－2) = －5 → y = －5x', 'x = 7を代入: y = －5×7 = －35'],
  },
  // 比例のグラフが通る「与えられた点」(2,6)のみ示す。式・x=5のときのyは解答。
  grade_j1_sansu_30: {
    kind: 'coordinate',
    xRange: [-1, 7],
    yRange: [-1, 18],
    points: [{ x: 2, y: 6, label: '(2, 6)' }],
    caption: '比例のグラフは点(2, 6)を通る',
    steps: ['6 = a×2 より a = 3 → y = 3x', 'x = 5を代入: y = 3×5 = 15'],
  },
  // 面積24cm²の長方形。縦をxcmとラベルするが、横(y、解答)はラベルしない。
  grade_j1_sansu_31: {
    kind: 'polygon',
    points: [
      { x: 0, y: 4 },
      { x: 6, y: 4 },
      { x: 6, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['xcm', null, null, null],
    rightAngles: [0, 1, 2, 3],
    caption: '面積24cm²の長方形（縦の長さがxcm）',
    steps: ['面積の関係 xy = 24 より y = 24/x', 'x = 6を代入: y = 24÷6 = 4cm'],
  },
  // 比例 y=3x と反比例 y=48/x（どちらも式は問題文で与えられている）。交点の座標は解答なので点は打たない。
  grade_j1_sansu_32: {
    kind: 'coordinate',
    xRange: [0, 10],
    yRange: [0, 50],
    lines: [{ a: 3, b: 0, label: 'y＝3x' }],
    hyperbolas: [{ k: 48, label: 'y＝48/x' }],
    caption: 'x＞0の範囲での2つのグラフ（交点の座標を求める）',
    steps: [
      '交点ではy座標が等しい: 3x = 48/x',
      '両辺にxをかけて整理: 3x² = 48 → x² = 16 → x = 4（x＞0）',
      'y = 3×4 = 12 → 交点は(4, 12)',
    ],
  },

  // ---------- 平面図形 ----------

  // 半径6cm、中心角90°のおうぎ形。弧の長さ(3π cm)は解答なので示さない。
  grade_j1_sansu_33: {
    kind: 'circle',
    radiusLabel: '6cm',
    showCenter: true,
    sector: { from: 0, to: 90, label: '90°' },
    caption: '半径6cm、中心角90°のおうぎ形',
  },
  // 半径9cm、中心角120°のおうぎ形。面積(27π cm²)は解答なので示さない。
  grade_j1_sansu_34: {
    kind: 'circle',
    radiusLabel: '9cm',
    showCenter: true,
    sector: { from: 30, to: 150, label: '120°' },
    caption: '半径9cm、中心角120°のおうぎ形',
  },
  // 半径4cmの円。中心角は解答なのでおうぎ形として塗らず、弧の長さ2πcmという条件のみキャプションで示す。
  grade_j1_sansu_35: {
    kind: 'circle',
    radiusLabel: '4cm',
    showCenter: true,
    caption: '半径4cm、弧の長さ2πcmのおうぎ形（中心角は求める値）',
    steps: ['弧の長さの式にあてはめる: 2π = 2×π×4×(中心角/360)', '整理すると 中心角/360 = 1/4 → 中心角 = 90°'],
  },
  // 回転移動前の点A(3,0)のみ示す。回転後の点(0,3)は解答なので打たない。
  grade_j1_sansu_36: {
    kind: 'coordinate',
    xRange: [-4, 4],
    yRange: [-4, 4],
    points: [{ x: 3, y: 0, label: 'A(3, 0)' }],
    caption: '点Aを原点Oを中心に反時計回りに90°回転移動させる',
    steps: ['回転の規則: 点(x, y) → (－y, x)', 'A(3, 0)にあてはめる: (－0, 3) = (0, 3)'],
  },
  // 対称移動前の点B(2,5)のみ示す。対称移動後の点(-2,5)は解答なので打たない。
  grade_j1_sansu_37: {
    kind: 'coordinate',
    xRange: [-4, 4],
    yRange: [-1, 7],
    points: [{ x: 2, y: 5, label: 'B(2, 5)' }],
    caption: '点Bをy軸について対称移動させる',
  },
  // 平行移動前の点C(-1,3)のみ示す。移動後の点(3,-1)は解答なので打たない。
  grade_j1_sansu_38: {
    kind: 'coordinate',
    xRange: [-3, 5],
    yRange: [-3, 5],
    points: [{ x: -1, y: 3, label: 'C(－1, 3)' }],
    caption: '点Cをx軸方向に4、y軸方向に－2だけ平行移動し、さらにx軸について対称移動させる',
    steps: [
      '平行移動: x座標に4、y座標に－2を加える → (－1＋4, 3－2) = (3, 1)',
      'x軸について対称移動: y座標の符号を変える → (3, －1)',
    ],
  },

  // ---------- 空間図形 ----------

  // 縦5cm・横8cm・高さ4cmの直方体。体積(160cm³)は解答なので示さない。
  grade_j1_sansu_39: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '8cm', depth: '5cm', height: '4cm' },
    caption: '縦5cm、横8cm、高さ4cmの直方体',
  },
  // 底面の半径3cm、高さ10cmの円柱。体積(90π cm³)は解答なので示さない。
  grade_j1_sansu_40: {
    kind: 'solid',
    shape: 'cylinder',
    labels: { radius: '3cm', height: '10cm' },
    caption: '底面の半径3cm、高さ10cmの円柱',
  },
  // 底面の半径2cm、高さ7cmの円柱。表面積(36π cm²)は解答なので示さない。
  grade_j1_sansu_41: {
    kind: 'solid',
    shape: 'cylinder',
    labels: { radius: '2cm', height: '7cm' },
    caption: '底面の半径2cm、高さ7cmの円柱',
    steps: [
      '側面積 = 底面の円周×高さ = 2×π×2×7 = 28π cm²',
      '底面積(1つ分) = π×2² = 4π cm² → 2つ分で8π cm²',
      '表面積 = 28π + 8π = 36π cm²',
    ],
  },
  // 底面の半径6cm、高さ9cmの円すい。体積(108π cm³)は解答なので示さない。
  grade_j1_sansu_42: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '6cm', height: '9cm' },
    caption: '底面の半径6cm、高さ9cmの円すい',
    steps: ['底面積 = π×6² = 36π cm²', '体積 = (1/3)×36π×9 = 108π cm³'],
  },
  // 底面の半径5cm、母線13cmの円すい。表面積(90π cm²)は解答なので示さない。
  grade_j1_sansu_44: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '5cm', slant: '13cm' },
    caption: '底面の半径5cm、母線13cmの円すい',
    steps: [
      '底面積 = π×5² = 25π cm²',
      '側面積 = π×半径×母線 = π×5×13 = 65π cm²',
      '表面積 = 25π + 65π = 90π cm²',
    ],
  },

  // ---------- 資料の活用 ----------

  // 5人の得点を棒グラフで示す。平均(70点)は解答なので数値ラベルのみ、平均線は描かない。
  grade_j1_sansu_45: {
    kind: 'barChart',
    yLabel: '点',
    bars: [
      { label: 'Aさん', value: 60 },
      { label: 'Bさん', value: 75 },
      { label: 'Cさん', value: 80 },
      { label: 'Dさん', value: 65 },
      { label: 'Eさん', value: 70 },
    ],
    caption: '5人のテストの得点',
    steps: ['合計 = 60+75+80+65+70 = 350点', '平均 = 350÷5 = 70点'],
  },
  // 通学時間の度数分布（40人）。相対度数(0.35)は解答なので度数のみ示す。
  grade_j1_sansu_47: {
    kind: 'barChart',
    histogram: true,
    yLabel: '人数',
    bars: [
      { label: '0〜10分', value: 6 },
      { label: '10〜20分', value: 14 },
      { label: '20〜30分', value: 12 },
      { label: '30〜40分', value: 8 },
    ],
    caption: 'あるクラス40人の通学時間の分布',
    steps: ['度数の合計 = 6+14+12+8 = 40人', '10〜20分の度数14人 → 相対度数 = 14÷40 = 0.35'],
  },
  // 反復横跳びの記録の度数分布（25人）。平均(39.8回)は解答なので度数のみ示す。
  grade_j1_sansu_48: {
    kind: 'barChart',
    histogram: true,
    yLabel: '人数',
    bars: [
      { label: '20〜30回', value: 4 },
      { label: '30〜40回', value: 9 },
      { label: '40〜50回', value: 8 },
      { label: '50〜60回', value: 4 },
    ],
    caption: '生徒25人の反復横跳びの記録',
    steps: ['階級値: 25,35,45,55回', '階級値×度数の合計 = 100+315+360+220 = 995', '平均 = 995÷25 = 39.8回'],
  },
  // 握力の度数分布（50人）。30kg以上の割合(60%)は解答なので度数のみ示す。
  grade_j1_sansu_49: {
    kind: 'barChart',
    histogram: true,
    yLabel: '人数',
    bars: [
      { label: '10〜20kg', value: 6 },
      { label: '20〜30kg', value: 14 },
      { label: '30〜40kg', value: 20 },
      { label: '40〜50kg', value: 10 },
    ],
    caption: '生徒50人の握力の分布',
    steps: ['30kg以上の人数 = 20+10 = 30人', '全体の人数 = 6+14+20+10 = 50人', '割合 = 30÷50 = 0.6 = 60%'],
  },
  // 反復横跳びの記録の箱ひげ図（20人）。四分位範囲(12回)は解答なのでQ1・Q3の値そのものは箱ひげ図の構造として示すが、差の計算はしない。
  grade_j1_sansu_50: {
    kind: 'boxplot',
    min: 28,
    q1: 34,
    median: 40,
    q3: 46,
    max: 52,
    scaleMin: 20,
    scaleMax: 60,
    caption: '20人の反復横跳びの記録（回）',
    steps: ['四分位範囲 = Q3 － Q1', '46 － 34 = 12回'],
  },
};
