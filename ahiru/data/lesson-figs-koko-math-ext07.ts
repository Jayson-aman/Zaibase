import type { Figure } from './figures';

// 高校受験 数学「相似と三平方の定理」拡張ユニット（koko_math_s231〜s275）専用の図解データ。
// lessons-koko-math-ext07.ts の各Lessonのsections[].figureIdから参照される。
// 数値はすべて本文・答えと一致するように検算済み。
export const lessonFigsKokoMathExt07: Record<string, Figure> = {
  // s231: 相似な2つの直角三角形（相似比1:2）
  lf_kokomathext07_231: {
    kind: 'coordinate',
    xRange: [-1, 9],
    yRange: [-1, 5],
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 2, y: 0, label: 'B' },
      { x: 0, y: 1.5, label: 'C' },
      { x: 4, y: 0, label: 'D' },
      { x: 8, y: 0, label: 'E' },
      { x: 4, y: 3, label: 'F' },
    ],
    segments: [
      [{ x: 0, y: 0 }, { x: 2, y: 0 }],
      [{ x: 2, y: 0 }, { x: 0, y: 1.5 }],
      [{ x: 0, y: 1.5 }, { x: 0, y: 0 }],
      [{ x: 4, y: 0 }, { x: 8, y: 0 }],
      [{ x: 8, y: 0 }, { x: 4, y: 3 }],
      [{ x: 4, y: 3 }, { x: 4, y: 0 }],
    ],
    caption: '△ABC∽△DEF：AB=2, AC=1.5, BC=2.5 と DE=4, DF=3, EF=5。相似比1:2、対応する角は等しい',
  },

  // s234: DE∥BC のときの相似（相似比から長さを求める）
  lf_kokomathext07_234: {
    kind: 'polygon',
    points: [
      { x: 3, y: 6, label: 'A' },
      { x: 1, y: 2, label: 'D' },
      { x: 0, y: 0, label: 'B' },
      { x: 8, y: 0, label: 'C' },
      { x: 6.333, y: 2, label: 'E' },
    ],
    fill: true,
    diagonals: [[1, 4]],
    sideLabels: ['AD=4', 'DB=2', 'BC=9', null, null],
    caption: 'DE∥BC のとき △ADE∽△ABC。相似比は AD:AB=4:6=2:3 なので DE=9×2/3=6（AD:DBではない）',
  },

  // s238: 直角三角形の斜辺への垂線と3つの相似
  lf_kokomathext07_238: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 3, y: 0, label: 'B' },
      { x: 0, y: 4, label: 'C' },
    ],
    fill: true,
    rightAngles: [0],
    sideLabels: ['AB=3', 'BC=5', 'CA=4'],
    heights: [{ from: 0, toEdge: [1, 2], label: 'AH=2.4' }],
    caption: '∠A=90°、AH⊥BC。△ABC∽△HBA∽△HAC。AH=3×4÷5=2.4、BH=9/5=1.8、CH=16/5=3.2、AH²=1.8×3.2=5.76',
  },

  // s240: 平行線と線分の比（2種類の比）
  lf_kokomathext07_240: {
    kind: 'polygon',
    points: [
      { x: 3, y: 6, label: 'A' },
      { x: 1.2, y: 2.4, label: 'D' },
      { x: 0, y: 0, label: 'B' },
      { x: 8, y: 0, label: 'C' },
      { x: 6, y: 2.4, label: 'E' },
    ],
    fill: true,
    diagonals: [[1, 4]],
    sideLabels: ['AD=3', 'DB=2', 'BC=10', null, null],
    caption: 'DE∥BC ⇒ AD:DB=AE:EC=3:2、AD:AB=DE:BC=3:5。よって DE=10×3/5=6',
  },

  // s242: 3本の平行線に切り取られる線分の比
  lf_kokomathext07_242: {
    kind: 'polygon',
    points: [
      { x: 0, y: 6, label: 'A' },
      { x: 0.8, y: 3.6, label: 'B' },
      { x: 2, y: 0, label: 'C' },
      { x: 9, y: 0, label: 'F' },
      { x: 7.2, y: 3.6, label: 'E' },
      { x: 6, y: 6, label: 'D' },
    ],
    fill: true,
    diagonals: [[1, 4]],
    sideLabels: ['AB=4', 'BC=6', null, 'FE=9', 'ED=6', null],
    caption: '3本の平行線 l(AD)∥m(BE)∥n(CF) が2直線を切る。AB:BC=DE:EF すなわち 4:6=6:9（どちらも2:3）',
  },

  // s244: 中点連結定理
  lf_kokomathext07_244: {
    kind: 'polygon',
    points: [
      { x: 3, y: 6, label: 'A' },
      { x: 1.5, y: 3, label: 'M' },
      { x: 0, y: 0, label: 'B' },
      { x: 8, y: 0, label: 'C' },
      { x: 5.5, y: 3, label: 'N' },
    ],
    fill: true,
    diagonals: [[1, 4]],
    equalSides: [[0, 1], [3, 4]],
    sideLabels: [null, null, 'BC=12', null, null],
    caption: 'M、Nが辺AB、ACの中点 ⇒ MN∥BC、MN=BC÷2=6（同じ印は長さが等しいことを表す）',
  },

  // s246: 台形の中点連結定理
  lf_kokomathext07_246: {
    kind: 'polygon',
    points: [
      { x: 2, y: 4, label: 'A' },
      { x: 1, y: 2, label: 'M' },
      { x: 0, y: 0, label: 'B' },
      { x: 10, y: 0, label: 'C' },
      { x: 9, y: 2, label: 'N' },
      { x: 8, y: 4, label: 'D' },
    ],
    fill: true,
    diagonals: [[1, 4]],
    equalSides: [[0, 1], [3, 4]],
    sideLabels: [null, null, 'BC=10', null, null, 'AD=6'],
    caption: '台形（AD∥BC）の2脚の中点M、Nを結ぶと MN∥AD∥BC、MN=(6+10)÷2=8',
  },

  // s247: 角の二等分線と線分の比
  lf_kokomathext07_247: {
    kind: 'polygon',
    points: [
      { x: 4.5, y: 3.97, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 3, y: 0, label: 'D' },
      { x: 5, y: 0, label: 'C' },
    ],
    fill: true,
    diagonals: [[0, 2]],
    sideLabels: ['AB=6', 'BD=3', 'DC=2', 'CA=4'],
    caption: 'ADが∠Aの二等分線 ⇒ BD:DC=AB:AC=6:4=3:2。BC=5なので BD=3、DC=2（Dは中点ではない）',
  },

  // s252: 相似比1:2 と 面積比1:4
  lf_kokomathext07_252: {
    kind: 'coordinate',
    xRange: [-1, 11],
    yRange: [-1, 9],
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 3, y: 0, label: 'B' },
      { x: 0, y: 4, label: 'C' },
      { x: 4, y: 0, label: 'D' },
      { x: 10, y: 0, label: 'E' },
      { x: 4, y: 8, label: 'F' },
    ],
    segments: [
      [{ x: 0, y: 0 }, { x: 3, y: 0 }],
      [{ x: 3, y: 0 }, { x: 0, y: 4 }],
      [{ x: 0, y: 4 }, { x: 0, y: 0 }],
      [{ x: 4, y: 0 }, { x: 10, y: 0 }],
      [{ x: 10, y: 0 }, { x: 4, y: 8 }],
      [{ x: 4, y: 8 }, { x: 4, y: 0 }],
    ],
    caption: '相似比1:2（3,4,5 と 6,8,10）。面積は 3×4÷2=6 と 6×8÷2=24 で 6:24=1:4＝1²:2²（長さは1乗、面積は2乗）',
  },

  // s254: 相似比1:2 の円錐と体積比1:8
  lf_kokomathext07_254: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '3cm', height: '4cm', slant: '5cm' },
    caption: '半径3・高さ4の円錐と、半径6・高さ8の円錐は相似比1:2。表面積比1:4、体積比1:8（12π cm³ と 96π cm³）',
  },

  // s257: 三平方の定理（3-4-5）
  lf_kokomathext07_257: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 3, y: 0, label: 'B' },
      { x: 0, y: 4, label: 'C' },
    ],
    fill: true,
    rightAngles: [0],
    sideLabels: ['a=3', 'c=5', 'b=4'],
    caption: '直角をはさむ2辺 a=3、b=4、斜辺 c=5。a²+b²=9+16=25=c²（斜辺は直角の向かい側の最長辺）',
  },

  // s261: 直角二等辺三角形（45°-45°-90°）
  lf_kokomathext07_261: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 1, y: 0, label: 'B' },
      { x: 0, y: 1, label: 'C' },
    ],
    fill: true,
    rightAngles: [0],
    equalSides: [[0, 2]],
    equalAngles: [[1, 2]],
    sideLabels: ['1', '√2', '1'],
    caption: '45°-45°-90°の辺の比は 1:1:√2。斜辺=等辺×√2（√2≒1.41）。正方形を対角線で半分にした形',
  },

  // s262: 30°-60°-90°の直角三角形
  lf_kokomathext07_262: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 1, y: 0, label: 'B' },
      { x: 0, y: 1.732, label: 'C' },
    ],
    fill: true,
    rightAngles: [0],
    sideLabels: ['1', '2', '√3'],
    caption: '正三角形の半分。∠C=30°の対辺AB=1、∠B=60°の対辺AC=√3、斜辺BC=2。比は 1:√3:2',
  },

  // s264: 正三角形の高さと面積
  lf_kokomathext07_264: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 6, y: 0, label: 'B' },
      { x: 3, y: 5.196, label: 'C' },
    ],
    fill: true,
    equalSides: [[0, 1, 2]],
    equalAngles: [[0, 1, 2]],
    heights: [{ from: 2, toEdge: [0, 1], label: '高さ3√3≒5.20' }],
    sideLabels: ['6', '6', '6'],
    caption: '1辺6の正三角形：底辺の半分が3、高さ=√(6²−3²)=3√3≒5.20、面積=(1/2)×6×3√3=9√3≒15.59',
  },

  // s266: 円の弦と中心からの距離
  lf_kokomathext07_266: {
    kind: 'circle',
    radiusLabel: 'r=5',
    showCenter: true,
    points: [
      { angle: 143.13, label: 'A' },
      { angle: 36.87, label: 'B' },
    ],
    chords: [[0, 1]],
    caption: '中心Oから弦ABまでの距離OH=3、半径5 ⇒ AH=√(5²−3²)=4、弦AB=2×4=8（垂線は弦を2等分する）',
  },

  // s268: 座標平面上の2点間の距離
  lf_kokomathext07_268: {
    kind: 'coordinate',
    xRange: [-1, 7],
    yRange: [-1, 8],
    points: [
      { x: 1, y: 2, label: 'A(1,2)' },
      { x: 4, y: 6, label: 'B(4,6)' },
      { x: 4, y: 2, label: 'C(4,2)' },
    ],
    segments: [
      [{ x: 1, y: 2 }, { x: 4, y: 6 }],
      [{ x: 1, y: 2 }, { x: 4, y: 2 }],
      [{ x: 4, y: 2 }, { x: 4, y: 6 }],
    ],
    caption: '横の差AC=4−1=3、縦の差CB=6−2=4。AB=√(3²+4²)=√25=5（座標そのものではなく差を2乗する）',
  },

  // s269: 座標平面上の三角形の形状判定
  lf_kokomathext07_269: {
    kind: 'coordinate',
    xRange: [-1, 7],
    yRange: [-1, 8],
    points: [
      { x: 0, y: 0, label: 'A(0,0)' },
      { x: 4, y: 2, label: 'B(4,2)' },
      { x: 2, y: 6, label: 'C(2,6)' },
    ],
    polygon: [
      { x: 0, y: 0 },
      { x: 4, y: 2 },
      { x: 2, y: 6 },
    ],
    caption: 'AB²=20、BC²=20、CA²=40。AB=BC かつ AB²+BC²=CA² ⇒ ∠B=90°の直角二等辺三角形、面積=(1/2)×20=10',
  },

  // s271: 直方体の対角線
  lf_kokomathext07_271: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '3cm', depth: '4cm', height: '12cm' },
    caption: '底面の対角線=√(3²+4²)=5cm → 立体の対角線=√(5²+12²)=√169=13cm（=√(3²+4²+12²)）',
  },

  // s272: 立方体の切断面（正三角形）
  lf_kokomathext07_272: {
    kind: 'solid',
    shape: 'cube',
    labels: { width: '6cm', depth: '6cm', height: '6cm' },
    caption: '1辺6cmの立方体。3頂点B、D、Eを通る断面は1辺6√2cmの正三角形で、面積=(√3/4)×(6√2)²=18√3cm²',
  },

  // s273: 正四角錐の対角線を通る断面（高さの求め方）
  lf_kokomathext07_273: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 8.485, y: 0, label: 'C' },
      { x: 4.243, y: 4.243, label: 'T' },
    ],
    fill: true,
    equalSides: [[1, 2]],
    equalAngles: [[0, 1]],
    heights: [{ from: 2, toEdge: [0, 1], label: 'h=3√2≒4.24' }],
    sideLabels: ['AC=6√2≒8.49', '6', '6'],
    caption: '底面1辺6・側辺6の正四角錐の断面。対角線の半分は3√2 ⇒ h=√(6²−(3√2)²)=√18=3√2、体積=(1/3)×36×3√2=36√2',
  },

  // s274: 円錐の半径・高さ・母線
  lf_kokomathext07_274: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '6cm', height: '8cm', slant: '10cm' },
    caption: '母線10・半径6 ⇒ 高さ=√(10²−6²)=8。体積=(1/3)π×36×8=96π cm³、表面積=πrl+πr²=60π+36π=96π cm²',
  },

  // s275: 展開図上の最短距離（立方体の側面2面）
  lf_kokomathext07_275: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 8, y: 0, label: 'B' },
      { x: 8, y: 4, label: 'G' },
      { x: 0, y: 4, label: 'E' },
    ],
    fill: true,
    rightAngles: [0, 1, 2, 3],
    diagonals: [[0, 2]],
    sideLabels: ['4+4=8', '4', null, null],
    caption: '1辺4cmの立方体の側面2面を展開した長方形（8cm×4cm）。A→Gの最短経路は対角線 √(8²+4²)=√80=4√5≒8.94cm',
  },
};
