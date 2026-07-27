import type { Figure } from './figures';

// 算数・数学：図解ギャップ埋め バッチ1（未対応だった幾何・グラフ問題に図を追加）
export const figuresSansuGap1: Record<string, Figure> = {
  // 半径6cmの円に内接する正三角形（与件）。1辺の長さは解答なので示さない。
  koko_sansu_ex_13_004: {
    kind: 'circle',
    radiusLabel: '6cm',
    points: [
      { angle: 90, label: 'A' },
      { angle: 210, label: 'B' },
      { angle: 330, label: 'C' },
    ],
    chords: [[0, 1], [1, 2], [2, 0]],
    showCenter: true,
  },

  // 斜辺13cm・1辺5cm（ともに与件）の直角三角形。もう一方の辺と面積は解答なので示さない。
  koko_sansu_ex_13_006: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 12, y: 0, label: 'B' },
      { x: 0, y: 5, label: 'C' },
    ],
    sideLabels: [null, '13cm', '5cm'],
    rightAngles: [0],
  },

  // 底辺8cm・等しい斜辺10cm（ともに与件）の二等辺三角形。高さと面積は解答なので示さない。
  koko_sansu_ex_13_008: {
    kind: 'polygon',
    points: [
      { x: -4, y: 0, label: 'B' },
      { x: 4, y: 0, label: 'C' },
      { x: 0, y: 9.17, label: 'A' },
    ],
    sideLabels: ['8cm', '10cm', '10cm'],
    equalSides: [[1, 2]],
  },

  // 放物線 y=x²-4x+1（与件）。頂点の座標と軸は解答なので示さない。
  koko_sansu_ex_13_010: {
    kind: 'coordinate',
    xRange: [-1, 5],
    yRange: [-4, 6],
    parabolas: [{ a: 1, b: -4, c: 1 }],
  },

  // ∠C=90°の直角三角形ABC。AC=5cm・BC=12cm（ともに与件）。ABは解答の計算に使う値なので示さない。
  koko_sansu_ex_13_011: {
    kind: 'polygon',
    points: [
      { x: 0, y: 5, label: 'A' },
      { x: 12, y: 0, label: 'B' },
      { x: 0, y: 0, label: 'C' },
    ],
    sideLabels: [null, '12cm', '5cm'],
    rightAngles: [2],
  },

  // 円の弦AB=6cm、半径5cm（ともに与件）。弦の中点から中心までの距離は解答なので示さない。
  koko_sansu_ex_13_012: {
    kind: 'circle',
    radiusLabel: '5cm',
    points: [
      { angle: 120, label: 'A' },
      { angle: 60, label: 'B' },
    ],
    chords: [[0, 1]],
    showCenter: true,
    caption: '弦AB=6cm',
  },

  // 平行四辺形ABCD。AB=6cm・BC=4cm・∠ABC=60°（すべて与件）。面積は解答なので示さない。
  koko_sansu_ex_13_014: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 6, y: 0, label: 'B' },
      { x: 4, y: 3.46, label: 'C' },
      { x: -2, y: 3.46, label: 'D' },
    ],
    sideLabels: ['6cm', '4cm', '6cm', '4cm'],
    caption: '∠ABC=60°',
  },

  // 直角三角形ABC（∠C=90°）。a=BC、b=CA、c=AB（与件の定義）。内接円の半径r=(a+b-c)/2の証明用の一般図。
  koko_sansu_ex_13_018: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'C' },
      { x: 8, y: 0, label: 'B' },
      { x: 0, y: 6, label: 'A' },
    ],
    sideLabels: ['a', 'c', 'b'],
    rightAngles: [0],
  },

  // 3点 A(1,0)、B(3,4)、C(-1,2)（与件）。一直線上かどうか・面積は解答なので線分は結ばない。
  koko_sansu_ex_13_023: {
    kind: 'coordinate',
    xRange: [-3, 5],
    yRange: [-1, 6],
    points: [
      { x: 1, y: 0, label: 'A' },
      { x: 3, y: 4, label: 'B' },
      { x: -1, y: 2, label: 'C' },
    ],
  },

  // 直線 y=x+1（与件）。円 x²+y²=25（原点中心・半径5、与件）は座標平面の描画に対応していないためcaptionで補足。交点・弦の長さは解答なので示さない。
  koko_sansu_ex_13_024: {
    kind: 'coordinate',
    xRange: [-6, 6],
    yRange: [-6, 6],
    lines: [{ a: 1, b: 1 }],
    caption: '円 x²+y²=25（原点中心・半径5）との交点を求める',
  },

  // 円に外接する正六角形（円の半径はr、与件の記号）。1辺の長さ・面積は解答なので示さない。
  koko_sansu_ex_13_028: {
    kind: 'polygon',
    points: [
      { x: 10, y: 0 },
      { x: 5, y: 8.66 },
      { x: -5, y: 8.66 },
      { x: -10, y: 0 },
      { x: -5, y: -8.66 },
      { x: 5, y: -8.66 },
    ],
    equalSides: [[0, 1, 2, 3, 4, 5]],
    caption: '円（半径r）に外接する正六角形（円は各辺に接する＝内接円）',
  },

  // 半径rの球（与件の記号）。体積Vと表面積Sの関係 V=(r/3)S を確認する一般図。
  koko_sansu_ex_13_030: {
    kind: 'solid',
    shape: 'sphere',
    labels: { radius: 'r' },
  },

  // 直線 y=2x-1（与件）と点A(1,4)（与件）。距離が最小となる点Pの座標・最小距離は解答なので示さない。
  koko_sansu_ex_13_033: {
    kind: 'coordinate',
    xRange: [-2, 5],
    yRange: [-3, 8],
    lines: [{ a: 2, b: -1 }],
    points: [{ x: 1, y: 4, label: 'A' }],
  },

  // 1辺2cmの立方体（与件）。各面の対角線の交点の個数は解答なので数値は示さない。
  koko_sansu_ex_13_035: {
    kind: 'solid',
    shape: 'cube',
    labels: { width: '2cm', depth: '2cm', height: '2cm' },
  },

  // 放物線 y=x²（与件）。接線 y=2x+k の k の値と接点の座標は解答なので示さない。
  koko_sansu_ex_13_044: {
    kind: 'coordinate',
    xRange: [-3, 3],
    yRange: [-1, 9],
    parabolas: [{ a: 1 }],
    caption: '傾き2の接線 y=2x+k が接する点を求める',
  },

  // 放物線 y=x²-4x+5（与件）。円 (x-2)²+(y-2)²=r² の中心(2,2)は式から分かる与件。半径rと共有点の個数は解答なので示さない。
  koko_sansu_ex_13_050: {
    kind: 'coordinate',
    xRange: [-1, 5],
    yRange: [-1, 6],
    parabolas: [{ a: 1, b: -4, c: 5 }],
    points: [{ x: 2, y: 2, label: '円の中心(2,2)' }],
  },

  // 円錐。母線6cm・中心角120°（ともに与件、展開図の扇形）。底面の半径・高さは解答なので示さない。
  koko_kankan_sansu_c5_03: {
    kind: 'solid',
    shape: 'cone',
    labels: { slant: '6cm' },
    caption: '側面の展開図：中心角120°の扇形',
  },

  // 円錐。立面図から高さ8cm、平面図から底面の半径6cm（ともに与件）。母線の長さは解答なので示さない。
  koko_kankan_sansu_c5_09: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '6cm', height: '8cm' },
  },

  // 直角三角形（直角をはさむ2辺3cm・4cm、斜辺5cm、すべて与件）を4cmの辺を軸に回転させてできる、底面の半径3cm・高さ4cm・母線5cmの円錐。
  koko_kankan_sansu_c5_11: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '3cm', height: '4cm', slant: '5cm' },
  },

  // 外側半径5cm・高さ10cm（与件）の円筒。内側半径3cm（与件）の穴が貫通している（ドーナツ状の底面）。体積・表面積は解答なので示さない。
  koko_kankan_sansu_c5_21: {
    kind: 'solid',
    shape: 'cylinder',
    labels: { radius: '5cm', height: '10cm' },
    caption: '内側に半径3cmの穴が貫通している（ドーナツ状の底面）',
  },

  // 1辺6cmの立方体（与件）。6辺の中点を通る平面で切ると正六角形の断面ができる。1辺の長さ・面積は解答なので示さない。
  koko_kankan_sansu_c5_27: {
    kind: 'solid',
    shape: 'cube',
    labels: { width: '6cm', depth: '6cm', height: '6cm' },
    caption: '各辺の中点を通る平面で切断すると正六角形の断面ができる',
  },

  // 円柱（底面の半径5cm、与件）。高さは球の直径に一致する（与件の関係）ので10cm。この円柱に半径5cmの球が内接する。体積の差は解答なので示さない。
  koko_kankan_sansu_c5_29: {
    kind: 'solid',
    shape: 'cylinder',
    labels: { radius: '5cm', height: '10cm' },
    caption: '円柱の中に半径5cmの球がぴったり内接している',
  },

  // 底面20cm×15cm（与件）の直方体の水槽。1辺6cmの立方体（与件）を完全に沈める。水面の上昇量は解答なので高さは示さない。
  koko_kankan_sansu_c5_36: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '20cm', depth: '15cm' },
    caption: '1辺6cmの立方体を完全に沈める',
  },

  // 円柱（底面の半径6cm・高さ9cm、与件）。同じ底面・上面中心を頂点とする円錐をくり抜く。残りの体積は解答なので示さない。
  koko_kankan_sansu_c5_39: {
    kind: 'solid',
    shape: 'cylinder',
    labels: { radius: '6cm', height: '9cm' },
    caption: '円柱の上面中心を頂点とする、同じ底面の円錐をくり抜く',
  },

  // 円錐（底面の半径10cm・母線15cm、与件）。頂点からの母線の長さ9cm（与件）の位置で底面に平行に切断する。切り口の半径・側面積は解答なので示さない。
  koko_kankan_sansu_c5_42: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '10cm', slant: '15cm' },
    caption: '頂点からの母線の長さ9cmの位置で底面に平行に切断する',
  },

  // 直方体の縦・横・高さの比が3:4:12（与件）。対角線26cm（与件）から実際の長さを求める。体積は解答なので実寸は示さない。
  koko_kankan_sansu_c5_47: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '4k', depth: '3k', height: '12k' },
    caption: '縦:横:高さ=3k:4k:12k、対角線の長さ=26cm',
  },


  // 1辺10cmの正方形（与件）の1つの角を中心とする半径10cm・中心角90°のおうぎ形。三日月部分の面積は解答なので示さない。
  nichinoken_figure_02: {
    kind: 'circle',
    radiusLabel: '10cm',
    sector: { from: 0, to: 90 },
    caption: '正方形（1辺10cm）の角を中心とするおうぎ形と正方形を組み合わせた三日月型',
  },

  // 縦10cm・横10cm（与件）の長方形の角を中心とする半径10cmのおうぎ形。斜線部分の面積は解答なので示さない。
  nichinoken_figure_04: {
    kind: 'circle',
    radiusLabel: '10cm',
    sector: { from: 0, to: 90 },
    caption: '縦10cm・横10cmの長方形の角を中心とするおうぎ形',
  },

  // 縦12cm・横6cm（与件）の長方形の中に、半径3cm（与件）の円が4つ並んでいる。斜線部分の面積は解答なので示さない。
  nichinoken_figure_05: {
    kind: 'polygon',
    points: [
      { x: 0, y: 12 },
      { x: 6, y: 12 },
      { x: 6, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['6cm', '12cm', '6cm', '12cm'],
    caption: '長方形の中に半径3cmの円が4つ並んでいる',
  },

  // 1辺2cm（与件）の正方形の角を中心とする半径2cmのおうぎ形。三日月部分の面積は解答なので示さない。
  nichinoken_figure_06: {
    kind: 'circle',
    radiusLabel: '2cm',
    sector: { from: 0, to: 90 },
    caption: '1辺2cmの正方形の角を中心とするおうぎ形と正方形を組み合わせた三日月型',
  },

  // 底辺10cm・高さ12cm（ともに与件）の三角形。頂角30°（与件）。面積は解答なので示さない。
  nichinoken_figure_08: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 10, y: 0, label: 'B' },
      { x: 3, y: 12, label: 'C' },
    ],
    sideLabels: ['10cm', null, null],
    heights: [{ from: 2, toEdge: [0, 1], label: '12cm' }],
    caption: '頂角C=30°',
  },

  // 半径8cm（与件）の四分円。内接する正方形の対角線は半径と同じ8cm。正方形の面積は解答なので示さない。
  nichinoken_figure_10: {
    kind: 'circle',
    radiusLabel: '8cm',
    sector: { from: 0, to: 90 },
    caption: '内接する正方形の対角線=半径=8cm',
  },

  // 下底7cm・上底5cm（ともに与件）の台形。左下の角60°（与件）。左の斜辺の長さ・周の長さは解答なので示さない。
  nichinoken_perimeter_02: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'D' },
      { x: 7, y: 0, label: 'C' },
      { x: 7.31, y: 4, label: 'B' },
      { x: 2.31, y: 4, label: 'A' },
    ],
    sideLabels: ['7cm', null, '5cm', null],
    caption: '∠D=60°',
  },

  // 長方形ABCD。AB=8cm・BC=6cm・対角線AC=10cm（すべて与件）。頂点Cを中心に倒したとき頂点Aが描く弧の長さは解答なので示さない。
  nichinoken_move_01: {
    kind: 'polygon',
    points: [
      { x: 0, y: 6, label: 'A' },
      { x: 8, y: 6, label: 'B' },
      { x: 8, y: 0, label: 'C' },
      { x: 0, y: 0, label: 'D' },
    ],
    sideLabels: ['8cm', '6cm', null, null],
    diagonals: [[0, 2]],
    rightAngles: [1],
    caption: '対角線AC=10cm。頂点Cを中心にAが弧を描く',
  },

  // 縦6cm・横4cm（ともに与件）の長方形。半径1cm（与件）の円がこの長方形の外側を1周する。円の中心が通る距離は解答なので示さない。
  nichinoken_move_02: {
    kind: 'polygon',
    points: [
      { x: 0, y: 6 },
      { x: 4, y: 6 },
      { x: 4, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['4cm', '6cm', '4cm', '6cm'],
    caption: '半径1cmの円がこの長方形の外側を1周する',
  },

  // 縦6cm・横5cm（ともに与件）の長方形。半径1cm（与件）の円がこの長方形の内側を1周する。円の中心が通る距離は解答なので示さない。
  nichinoken_move_03: {
    kind: 'polygon',
    points: [
      { x: 0, y: 6 },
      { x: 5, y: 6 },
      { x: 5, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['5cm', '6cm', '5cm', '6cm'],
    caption: '半径1cmの円がこの長方形の内側を1周する',
  },

  // 1辺3cmの正三角形ABC（与件）。1辺1cmの正三角形PQR（与件）がこの周上を転がりながら1周する。頂点Pが動いた距離は解答なので示さない。
  nichinoken_move_04: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 3, y: 0, label: 'B' },
      { x: 1.5, y: 2.6, label: 'C' },
    ],
    sideLabels: ['3cm', '3cm', '3cm'],
    equalSides: [[0, 1, 2]],
    caption: '1辺1cmの正三角形PQRがこの周上を転がりながら1周する',
  },

  // 1辺8cm（与件）の正方形に円が内接し、その中に正方形、さらに円……と交互に重なる。かげの部分の面積の合計は解答なので示さない。
  nichinoken_figure_11: {
    kind: 'polygon',
    points: [
      { x: 0, y: 8 },
      { x: 8, y: 8 },
      { x: 8, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['8cm', '8cm', '8cm', '8cm'],
    caption: '正方形の中に円、その中に正方形……と交互に無限に重なる',
  },

  // 縦15m・横10m（ともに与件）の長方形の牛小屋。角Cに長さ10m（与件）の縄で牛がつながれている。牛が草を食べられる面積は解答なので示さない。
  nichinoken_pasture_01: {
    kind: 'polygon',
    points: [
      { x: 0, y: 15, label: 'A' },
      { x: 10, y: 15, label: 'B' },
      { x: 10, y: 0, label: 'C' },
      { x: 0, y: 0, label: 'D' },
    ],
    sideLabels: ['10m', '15m', '10m', '15m'],
    caption: '角Cに長さ10mの縄で牛がつながれている',
  },

  // 反比例のグラフ。与件の点(3,4)のみ示す。比例定数kと式は解答なので曲線は描かない。
  koko_sansu_ex_16_006: {
    kind: 'coordinate',
    xRange: [-1, 7],
    yRange: [-1, 6],
    points: [{ x: 3, y: 4, label: '(3, 4)' }],
  },

  // 反比例のグラフ。与件の2点のみ示す。式は解答なので曲線は描かない。
  koko_sansu_ex_16_007: {
    kind: 'coordinate',
    xRange: [-4, 8],
    yRange: [-4, 8],
    points: [
      { x: -2, y: 6, label: '(-2, 6)' },
      { x: 6, y: -2, label: '(6, -2)' },
    ],
  },

  // 点A(3, -1)（与件）。原点を中心に90°回転させた点A'は解答なので示さない。
  koko_sansu_ex_16_015: {
    kind: 'coordinate',
    xRange: [-4, 4],
    yRange: [-4, 4],
    points: [{ x: 3, y: -1, label: 'A' }],
  },

  // 点P(2, 3)（与件）。平行移動後の点P'は解答なので示さない。
  koko_sansu_ex_16_016: {
    kind: 'coordinate',
    xRange: [-2, 8],
    yRange: [-3, 5],
    points: [{ x: 2, y: 3, label: 'P' }],
  },

  // 正六角形（与件：正六角形＝すべての辺・角が等しい）。内角の和・1つの内角の大きさは解答なので数値は示さない。
  koko_sansu_ex_16_020: {
    kind: 'polygon',
    points: [
      { x: 10, y: 0 },
      { x: 5, y: 8.66 },
      { x: -5, y: 8.66 },
      { x: -10, y: 0 },
      { x: -5, y: -8.66 },
      { x: 5, y: -8.66 },
    ],
    equalSides: [[0, 1, 2, 3, 4, 5]],
    equalAngles: [[0, 1, 2, 3, 4, 5]],
  },

  // 円錐。底面の半径3cm・母線6cm（ともに与件）。体積・表面積は解答なので示さない。
  koko_sansu_ex_16_026: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '3cm', slant: '6cm' },
  },

  // 円錐。底面の半径4cm・高さ9cm（ともに与件）。母線・体積は解答なので示さない。
  koko_sansu_ex_16_027: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '4cm', height: '9cm' },
  },

  // 平行四辺形ABCD（一般図）。対角線BDを引いて△ABDと△CDBの合同を示す証明用の図。
  koko_sansu_ex_16_031: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 6, y: 0, label: 'B' },
      { x: 8, y: 4, label: 'C' },
      { x: 2, y: 4, label: 'D' },
    ],
    diagonals: [[1, 3]],
    caption: '対角線BDが共通。平行線の錯角を利用してASAを示す',
  },

  // 平行四辺形ABCD。AB=8cm・BC=5cm・∠ABC=60°（すべて与件）。面積は解答なので示さない。
  koko_sansu_ex_16_032: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 8, y: 0, label: 'B' },
      { x: 5.5, y: 4.33, label: 'C' },
      { x: -2.5, y: 4.33, label: 'D' },
    ],
    sideLabels: ['8cm', '5cm', '8cm', '5cm'],
    caption: '∠ABC=60°',
  },

  // 半径6cmの球（与件）。体積・表面積は解答なので示さない。
  koko_sansu_ex_16_036: {
    kind: 'solid',
    shape: 'sphere',
    labels: { radius: '6cm' },
  },

  // 放物線 y=2x²-8x+6（与件）。頂点の座標と軸は解答なので点は示さない。
  koko_sansu_ex_16_039: {
    kind: 'coordinate',
    xRange: [-1, 5],
    yRange: [-3, 10],
    parabolas: [{ a: 2, b: -8, c: 6 }],
  },

  // 3点 A(1,2)、B(5,2)、C(3,6)（与件）。面積は解答なので数値は示さない。
  koko_sansu_ex_16_040: {
    kind: 'coordinate',
    xRange: [0, 6],
    yRange: [0, 7],
    points: [
      { x: 1, y: 2, label: 'A' },
      { x: 5, y: 2, label: 'B' },
      { x: 3, y: 6, label: 'C' },
    ],
    polygon: [
      { x: 1, y: 2 },
      { x: 5, y: 2 },
      { x: 3, y: 6 },
    ],
  },

  // 放物線 y=x²（与件）。点A(0,3)・B(4,0)（与件）を通る直線。直線の式・交点のx座標は解答なので明示しない。
  koko_sansu_ex_16_042: {
    kind: 'coordinate',
    xRange: [-1, 5],
    yRange: [-1, 9],
    parabolas: [{ a: 1 }],
    points: [
      { x: 0, y: 3, label: 'A' },
      { x: 4, y: 0, label: 'B' },
    ],
    segments: [[{ x: 0, y: 3 }, { x: 4, y: 0 }]],
  },

  // 直方体（縦3・横4・高さ5、与件）。頂点AからGへの表面上の最短距離は解答なので示さない。
  koko_sansu_ex_16_046: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '4', depth: '3', height: '5' },
  },

  // 放物線 y=x²-6x+5（与件）。頂点・x軸との交点・囲まれた面積は解答なので点や塗りつぶしは示さない。
  koko_sansu_ex_16_050: {
    kind: 'coordinate',
    xRange: [-1, 7],
    yRange: [-6, 8],
    parabolas: [{ a: 1, b: -6, c: 5 }],
  },

  // 直線y=2x+aとy=-x+bが点(2,5)（与件）で交わる。aとbの値・三角形の面積は解答なので直線は描かない。
  koko_moshi_sansu_15: {
    kind: 'coordinate',
    xRange: [-2, 6],
    yRange: [-1, 8],
    points: [{ x: 2, y: 5, label: '(2, 5)' }],
  },

  // 円Oの直径AB=10cm（与件）。円周上の点CでAC=6cm（与件）。直径に対する円周角は90°（タレスの定理）。BCの長さは解答なので示さない。
  koko_moshi_sansu_21: {
    kind: 'circle',
    radiusLabel: '5cm',
    points: [
      { angle: 180, label: 'A' },
      { angle: 0, label: 'B' },
      { angle: 125, label: 'C' },
    ],
    chords: [[0, 1], [0, 2], [1, 2]],
    showCenter: true,
    caption: 'AC=6cm。ABは直径なので∠ACB=90°',
  },

  // 円に内接する四角形ABCD。∠ABC=75°・∠BCD=100°（ともに与件）。∠DAB・∠CDAは解答なので示さない。
  koko_moshi_sansu_25: {
    kind: 'circle',
    points: [
      { angle: 90, label: 'A' },
      { angle: 0, label: 'B' },
      { angle: 270, label: 'C' },
      { angle: 180, label: 'D' },
    ],
    chords: [[0, 1], [1, 2], [2, 3], [3, 0]],
    caption: '∠ABC=75°、∠BCD=100°',
  },

  // 半径3cm（与件）の円Oに外接する正三角形ABC（円は内接円）。一辺の長さは解答なので示さない。
  koko_moshi_sansu_27: {
    kind: 'polygon',
    points: [
      { x: 0, y: 10.39, label: 'A' },
      { x: -6, y: 0, label: 'B' },
      { x: 6, y: 0, label: 'C' },
    ],
    equalSides: [[0, 1, 2]],
    caption: '内接円Oの半径=3cm',
  },

  // 円Oの弦AB=8cm、中心Oから弦ABまでの距離=3cm（ともに与件）。半径・弧の長さは解答なので示さない。
  koko_moshi_sansu_31: {
    kind: 'circle',
    points: [
      { angle: 110, label: 'A' },
      { angle: 70, label: 'B' },
    ],
    chords: [[0, 1]],
    showCenter: true,
    caption: '弦AB=8cm、中心から弦までの距離=3cm',
  },

  // ∠BAC=90°の直角三角形ABC（AB=3cm・AC=4cm・BC=5cm、すべて与件）。頂点Aを中心とする半径2cm・中心角90°の扇形（与件）。扇形の面積は解答なので数値は示さない。
  koko_moshi_sansu_32: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 3, y: 0, label: 'B' },
      { x: 0, y: 4, label: 'C' },
    ],
    sideLabels: ['3cm', '5cm', '4cm'],
    rightAngles: [0],
    caption: '頂点Aを中心とする半径2cm・中心角90°の扇形が∠BACの内側にある',
  },

  // 1辺1cmの正三角形を規則的に並べてできる大きな正三角形（与件の図の説明、図はn=4の例）。総数・周の長さはnの式（解答）なので数値は示さない。
  koko_moshi_sansu_43: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 8, y: 0, label: 'B' },
      { x: 4, y: 6.93, label: 'C' },
    ],
    caption: '1辺1cmの正三角形をn段まで敷き詰めた大きな正三角形（図はn=4の例）',
  },

  // 3点 A(1,3)、B(4,7)、C(6,1)（与件）。面積は解答なので数値は示さない。
  koko_moshi_sansu_46: {
    kind: 'coordinate',
    xRange: [0, 7],
    yRange: [0, 8],
    points: [
      { x: 1, y: 3, label: 'A' },
      { x: 4, y: 7, label: 'B' },
      { x: 6, y: 1, label: 'C' },
    ],
    polygon: [
      { x: 1, y: 3 },
      { x: 4, y: 7 },
      { x: 6, y: 1 },
    ],
  },

  // 1辺6cmの立方体ABCD-EFGH（与件）。頂点AからGへの表面上の最短距離は解答なので示さない。
  koko_moshi_sansu_47: {
    kind: 'solid',
    shape: 'cube',
    labels: { width: '6cm', depth: '6cm', height: '6cm' },
  },

  // 円錐。底面の半径3cm・母線9cm（ともに与件）。高さ・体積・中心角は解答なので示さない。
  koko_moshi_sansu_48: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '3cm', slant: '9cm' },
  },

  // 点A(3, 0)・B(0, 4)（与件）。線分ABの長さ・垂線の足Hの座標は解答なので示さない。
  koko_moshi_sansu_49: {
    kind: 'coordinate',
    xRange: [-1, 5],
    yRange: [-1, 6],
    points: [
      { x: 3, y: 0, label: 'A' },
      { x: 0, y: 4, label: 'B' },
    ],
    segments: [[{ x: 3, y: 0 }, { x: 0, y: 4 }]],
  },

  // 三角形ABC。辺AB上にAD:DB=2:3となる点D、辺AC上にAE:EC=1:2となる点E（ともに与件）。線分DEを引く。△ADEの面積=12cm²（与件）のとき△ABCの面積は解答なので示さない。
  oyo_sansu_025: {
    kind: 'polygon',
    points: [
      { x: 0, y: 10, label: 'A' },
      { x: -2.4, y: 6, label: 'D' },
      { x: -6, y: 0, label: 'B' },
      { x: 6, y: 0, label: 'C' },
      { x: 2, y: 6.67, label: 'E' },
    ],
    diagonals: [[1, 4]],
    caption: 'AD:DB=2:3、AE:EC=1:2。△ADEの面積=12cm²',
  },

  // 直角三角形ABC（∠C=90°、AB=15cm・BC=9cm・AC=12cm、すべて与件）。頂点Cから斜辺ABへ垂線CHを下ろす。AH・BH・CHは解答なので数値は示さない。
  oyo_sansu_026: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'C' },
      { x: 12, y: 0, label: 'A' },
      { x: 0, y: 9, label: 'B' },
    ],
    sideLabels: ['12cm', '15cm', '9cm'],
    rightAngles: [0],
    heights: [{ from: 0, toEdge: [1, 2] }],
  },

  // 台形ABCD。AB∥CD、AB=12cm・CD=8cm・高さ6cm（すべて与件）。対角線ACとBDの交点をPとする。△APDの面積は解答なので示さない。
  oyo_sansu_027: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 12, y: 0, label: 'B' },
      { x: 10, y: 6, label: 'C' },
      { x: 2, y: 6, label: 'D' },
    ],
    sideLabels: ['12cm', null, '8cm', null],
    diagonals: [[0, 2], [1, 3]],
  },

  // 平行四辺形ABCD（面積72cm²、与件）。辺BCの中点M（与件）。直線AMを延長するとDCの延長と点Nで交わる（図には未記載）。△MNCの面積・面積比は解答なので示さない。
  oyo_sansu_028: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 8, y: 0, label: 'B' },
      { x: 6, y: 5, label: 'M' },
      { x: 4, y: 10, label: 'C' },
      { x: -4, y: 10, label: 'D' },
    ],
    diagonals: [[0, 2]],
    caption: 'Mは辺BCの中点。平行四辺形の面積=72cm²',
  },

  // 1辺10cmの正方形ABCD（与件）。辺CDの中点M（与件）。線分AM・BMを引く。△ABMの面積は解答なので示さない。
  oyo_sansu_029: {
    kind: 'polygon',
    points: [
      { x: 0, y: 10, label: 'A' },
      { x: 10, y: 10, label: 'B' },
      { x: 10, y: 0, label: 'C' },
      { x: 5, y: 0, label: 'M' },
      { x: 0, y: 0, label: 'D' },
    ],
    sideLabels: ['10cm', '10cm', '5cm', '5cm', '10cm'],
    diagonals: [[0, 3], [1, 3]],
  },

  // 三角形ABC（面積60cm²、与件）。辺BCを4等分する点D・E・F（与件）。頂点AとD・E・Fを結ぶ。△ABD等の各面積は解答なので示さない。
  oyo_sansu_030: {
    kind: 'polygon',
    points: [
      { x: 0, y: 8, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 3, y: 0, label: 'D' },
      { x: 6, y: 0, label: 'E' },
      { x: 9, y: 0, label: 'F' },
      { x: 12, y: 0, label: 'C' },
    ],
    diagonals: [[0, 2], [0, 3], [0, 4]],
    caption: 'BC上の点D・E・Fは辺BCを4等分する。三角形の面積=60cm²',
  },

  // 半径6cm（与件）の円に内接する正六角形。正六角形の面積・外接円と内接円の面積比は解答なので示さない。
  oyo_sansu_031: {
    kind: 'circle',
    radiusLabel: '6cm',
    points: [
      { angle: 0, label: 'A' },
      { angle: 60, label: 'B' },
      { angle: 120, label: 'C' },
      { angle: 180, label: 'D' },
      { angle: 240, label: 'E' },
      { angle: 300, label: 'F' },
    ],
    chords: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0]],
    showCenter: true,
  },

  // 三角形ABC。AB=13cm・BC=14cm・CA=15cm（すべて与件）。面積・内接円の半径は解答なので示さない。
  oyo_sansu_033: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'B' },
      { x: 14, y: 0, label: 'C' },
      { x: 5, y: 12, label: 'A' },
    ],
    sideLabels: ['14cm', '15cm', '13cm'],
  },

  // 底辺10cm・高さ7cm（ともに与件）の三角形。面積は解答なので示さない。
  kiso_s_052: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 10, y: 0, label: 'B' },
      { x: 3, y: 7, label: 'C' },
    ],
    sideLabels: ['10cm', null, null],
    heights: [{ from: 2, toEdge: [0, 1], label: '7cm' }],
  },

  // 半径6cmの円（与件）。面積は解答なので示さない。
  kiso_s_053: {
    kind: 'circle',
    radiusLabel: '6cm',
    showCenter: true,
  },

  // 縦6cm・横8cm・高さ4cm（すべて与件）の直方体。体積は解答なので示さない。
  kiso_s_055: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '8cm', depth: '6cm', height: '4cm' },
  },

  // 半径3cmの円（与件）。円周は解答なので示さない。
  kiso_s_056: {
    kind: 'circle',
    radiusLabel: '3cm',
    showCenter: true,
  },

  // 1辺8cmの正三角形（与件）。面積は解答なので示さない。
  kiso_s_057: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 8, y: 0, label: 'B' },
      { x: 4, y: 6.93, label: 'C' },
    ],
    sideLabels: ['8cm', '8cm', '8cm'],
    equalSides: [[0, 1, 2]],
  },

  // 上底4cm・下底8cm・高さ5cm（すべて与件）の台形。面積は解答なので示さない。
  kiso_s_058: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 8, y: 0, label: 'B' },
      { x: 6, y: 5, label: 'C' },
      { x: 2, y: 5, label: 'D' },
    ],
    sideLabels: ['8cm', null, '4cm', null],
    heights: [{ from: 3, toEdge: [0, 1], label: '5cm' }],
  },

  // 直径10cmの円（与件、半径5cm）。面積は解答なので示さない。
  kiso_s_059: {
    kind: 'circle',
    radiusLabel: '5cm',
    showCenter: true,
    caption: '直径10cm',
  },

  // 縦4cm・横6cm（与件）の長方形に内接する最大の円（半径2cm＝短辺の半分）。面積は解答なので示さない。
  kiso_s_060: {
    kind: 'circle',
    showCenter: true,
    caption: '縦4cm・横6cmの長方形に入る最大の円。半径は解答なので示さない。',
  },

  // 1辺6cmの立方体（与件）。表面積は解答なので示さない。
  kiso_s_062: {
    kind: 'solid',
    shape: 'cube',
    labels: { width: '6cm', depth: '6cm', height: '6cm' },
  },
};
