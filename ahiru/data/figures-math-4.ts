import type { Figure } from './figures';

// 算数・数学の図形バッチ4（面積・合同・角度・関数グラフ・立体など）。
// エージェントが問題ごとに図形を追加する。
export const figuresMath4: Record<string, Figure> = {
  // y=ax² が点(3,-18)を通る。a と y を問う（値は図に書かない）
  kt_sansu_03: {
    kind: 'coordinate',
    xRange: [-4, 4],
    yRange: [-20, 3],
    parabolas: [{ a: -2 }],
    points: [{ x: 3, y: -18, label: '(3, −18)' }],
    caption: '放物線 y＝ax² は点 (3, −18) を通る',
  },

  // 反比例 y=12/x 上の A(2,6), B(4,3) と原点で作る三角形OAB（面積は書かない）
  koko_oyo_sansu_15: {
    kind: 'coordinate',
    xRange: [0, 7],
    yRange: [0, 8],
    hyperbolas: [{ k: 12 }],
    points: [
      { x: 2, y: 6, label: 'A' },
      { x: 4, y: 3, label: 'B' },
    ],
    polygon: [
      { x: 0, y: 0 },
      { x: 2, y: 6 },
      { x: 4, y: 3 },
    ],
    caption: '反比例 y＝12/x 上の 2 点 A(2, 6)・B(4, 3) と原点 O',
  },

  // y=ax² と y=-2x+8 が x=2 の点Aで交わる。aとBを問う（B座標は書かない）
  koko_moshi_sansu_13: {
    kind: 'coordinate',
    xRange: [-6, 4],
    yRange: [-2, 20],
    parabolas: [{ a: 1 }],
    lines: [{ a: -2, b: 8 }],
    points: [{ x: 2, y: 4, label: 'A' }],
    caption: '放物線 y＝ax² と直線 y＝−2x＋8 の交点 A（x 座標は 2）',
  },

  // 底辺8cm・高さ6cmの直角三角形を底辺軸で回転→円すい（半径6cm・高さ8cm）。体積を問う
  toin_sansu_05: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '6cm', height: '8cm' },
    caption: '直角三角形を底辺（軸）で 1 回転してできる円すい',
  },

  // 円に内接する四角形ABCD（角度は書かない）
  koko_kankan_sansu_c2_11: {
    kind: 'circle',
    points: [
      { angle: 140, label: 'A' },
      { angle: 35, label: 'B' },
      { angle: 300, label: 'C' },
      { angle: 210, label: 'D' },
    ],
    chords: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
    ],
    caption: '円に内接する四角形 ABCD',
  },

  // ∠C=90°の直角三角形。CからABへ垂線CH。AH=4, HB=9（CH・ACは答えなので書かない）
  koko_kankan_sansu_c2_17: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 13, y: 0, label: 'B' },
      { x: 4, y: 6, label: 'C' },
    ],
    rightAngles: [2],
    heights: [{ from: 2, toEdge: [0, 1] }],
    caption: '∠C＝90°、C から斜辺 AB への垂線の足が H（AH＝4cm、HB＝9cm）',
  },

  // 二次関数のグラフが3点(0,3)(1,0)(-1,8)を通る（a,b,cは書かない）
  koko_sansu_ex_02_019: {
    kind: 'coordinate',
    xRange: [-3, 4],
    yRange: [-1, 9],
    parabolas: [{ a: 1, b: -4, c: 3 }],
    points: [
      { x: 0, y: 3, label: '(0, 3)' },
      { x: 1, y: 0, label: '(1, 0)' },
      { x: -1, y: 8, label: '(−1, 8)' },
    ],
    caption: '放物線が通る 3 点',
  },

  // y=x²-4 のグラフ。x軸・y軸との交点を読み取る（交点は答えなので印を付けない）
  koko_sansu_ex_17_039: {
    kind: 'coordinate',
    xRange: [-4, 4],
    yRange: [-5, 6],
    parabolas: [{ a: 1, b: 0, c: -4 }],
    caption: '放物線 y＝x²−4',
  },

  // 時間(分)と水の深さ(cm)の比例グラフ。10分で25cm。毎分何Lかを問う
  kankan_top_sansu_050: {
    kind: 'coordinate',
    xRange: [0, 12],
    yRange: [0, 30],
    lines: [{ a: 2.5, b: 0 }],
    points: [{ x: 10, y: 25, label: '(10, 25)' }],
    caption: '横軸：時間（分）／縦軸：水の深さ（cm）',
  },

  // y=-2x+10 とx軸・y軸の交点A,Bで作る△OAB（面積は答えなので書かない）
  term1_2026_koko_sansu_052: {
    kind: 'coordinate',
    xRange: [-1, 7],
    yRange: [-1, 12],
    lines: [{ a: -2, b: 10 }],
    polygon: [
      { x: 0, y: 0 },
      { x: 5, y: 0 },
      { x: 0, y: 10 },
    ],
    points: [
      { x: 5, y: 0, label: 'A' },
      { x: 0, y: 10, label: 'B' },
    ],
    caption: '直線 y＝−2x＋10 と x 軸・y 軸の交点 A・B',
  },
};
