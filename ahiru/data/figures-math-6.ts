import type { Figure } from './figures';

// 算数・数学の図形バッチ6（面積・合同・角度・関数グラフ・立体など）。
// エージェントが問題ごとに図形を追加する。
export const figuresMath6: Record<string, Figure> = {
  // 一次関数 y=2x+b（b=3は与えられた点(0,3)で確定）と x軸・y軸で囲む三角形。
  // 面積(答え)は書かない。
  koko_oyo_sansu_34: {
    kind: 'coordinate',
    xRange: [-3, 3],
    yRange: [-2, 7],
    lines: [{ a: 2, b: 3 }],
    polygon: [
      { x: 0, y: 0 },
      { x: 0, y: 3 },
      { x: -1.5, y: 0 },
    ],
    points: [
      { x: 0, y: 3 },
      { x: -1.5, y: 0 },
    ],
    caption: `直線 y=2x+b と x軸・y軸で囲まれる三角形`,
  },

  // 与えられた2点 A(−3, 9/2)・B(2, 2) を座標平面にプロット（放物線は答えa=1/2を示すため描かない）。
  koko_moshi_sansu_18: {
    kind: 'coordinate',
    xRange: [-4, 4],
    yRange: [-1, 6],
    points: [
      { x: -3, y: 4.5, label: 'A' },
      { x: 2, y: 2, label: 'B' },
    ],
    caption: `点A(−3, 9/2) と 点B(2, 2)`,
  },

  // △ABC の辺AB上のD、辺CA上のE。DE∥BC。AD=4, DB=2（BCは答えなので書かない）。
  // 頂点順 A→D→B→C→E で三角形の輪郭をたどり、対角線でDEを描く。
  koko_kankan_sansu_c2_01: {
    kind: 'polygon',
    points: [
      { x: 0, y: 6, label: 'A' },
      { x: -1.3333, y: 2, label: 'D' },
      { x: -2, y: 0, label: 'B' },
      { x: 4, y: 0, label: 'C' },
      { x: 2.6667, y: 2, label: 'E' },
    ],
    sideLabels: ['4', '2', null, null, null],
    diagonals: [[1, 4]],
    caption: `DE∥BC`,
  },

  // 直径ABに対する円周角 ∠ACB=90°（タレスの定理）。AB=10, AC=6（BCは答えなので書かない）。
  koko_kankan_sansu_c2_07: {
    kind: 'circle',
    showCenter: true,
    points: [
      { angle: 180, label: 'A' },
      { angle: 0, label: 'B' },
      { angle: 106.3, label: 'C' },
    ],
    chords: [
      [0, 1],
      [0, 2],
      [1, 2],
    ],
    caption: `ABは直径`,
  },

  // 台形ABCD（AD∥BC, AD=4, BC=10）と対角線AC・BD、その交点P。
  koko_kankan_sansu_c2_13: {
    kind: 'polygon',
    points: [
      { x: -2, y: 3, label: 'A' },
      { x: -5, y: 0, label: 'B' },
      { x: 5, y: 0, label: 'C' },
      { x: 2, y: 3, label: 'D' },
    ],
    sideLabels: [null, '10', null, '4'],
    diagonals: [
      [0, 2],
      [1, 3],
    ],
    caption: `AD∥BC。対角線の交点がP`,
  },

  // 円内で弦ABと弦CDが交わる。長さ(答え)は書かない。
  koko_kankan_sansu_c2_19: {
    kind: 'circle',
    points: [
      { angle: 150, label: 'A' },
      { angle: 330, label: 'B' },
      { angle: 60, label: 'C' },
      { angle: 250, label: 'D' },
    ],
    chords: [
      [0, 1],
      [2, 3],
    ],
    caption: `弦ABと弦CDの交点がP`,
  },

  // 円周上の4点A,B,C,D（この順）。弦ACと弦BDが点Pで交わる。弧AB=70°, 弧CD=50°。
  koko_kankan_sansu_c2_43: {
    kind: 'circle',
    points: [
      { angle: 90, label: 'A' },
      { angle: 160, label: 'B' },
      { angle: 280, label: 'C' },
      { angle: 330, label: 'D' },
    ],
    chords: [
      [0, 2],
      [1, 3],
    ],
    caption: `弧AB=70°, 弧CD=50°。ACとBDの交点がP`,
  },

  // 円内で弦ABと弦CDが点Pで交わる。AP=x, PB=x+2, CP=3, PD=8（数値は答えに直結するので書かない）。
  koko_kankan_sansu_c2_49: {
    kind: 'circle',
    points: [
      { angle: 160, label: 'A' },
      { angle: 340, label: 'B' },
      { angle: 70, label: 'C' },
      { angle: 250, label: 'D' },
    ],
    chords: [
      [0, 1],
      [2, 3],
    ],
    caption: `弦ABと弦CDの交点がP`,
  },

  // 縦3cm・横4cm・高さ12cmの直方体（対角線の長さ13cmは答えなので書かない）。
  koko_kankan_sansu_c5_07: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '4cm', depth: '3cm', height: '12cm' },
    caption: `たて3cm・横4cm・高さ12cmの直方体`,
  },

  // 母線8cm・底面の半径2cmの円錐（中心角・ひもの長さは答えなので書かない）。
  koko_kankan_sansu_c5_25: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '2cm', slant: '8cm' },
    caption: `母線8cm・底面の半径2cmの円錐`,
  },

  // 底面の半径10cm・高さ12cmの円錐（切断後の体積・表面積は答えなので書かない）。
  koko_kankan_sansu_c5_50: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '10cm', height: '12cm' },
    caption: `底面の半径10cm・高さ12cmの円錐`,
  },
};
