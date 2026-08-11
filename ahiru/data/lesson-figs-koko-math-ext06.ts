import type { Figure } from './figures';

// 高校受験 数学「平面図形（角・作図・多角形・合同）」拡張ユニット用の図解。
// キーは lessons-koko-math-ext06.ts の figureId と完全一致させること。
// 数値（辺の長さ・角度・面積）はすべて座標から検算済み。
export const lessonFigsKokoMathExt06: Record<string, Figure> = {
  // s192 平行線と錯角（平行四辺形の対辺の平行を利用）
  lf_kokomathext06_192: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 6, y: 0, label: 'B' },
      { x: 8, y: 3, label: 'C' },
      { x: 2, y: 3, label: 'D' },
    ],
    fill: true,
    diagonals: [[0, 2]],
    equalSides: [
      [0, 2],
      [1, 3],
    ],
    caption:
      'AB∥DC だから、対角線ACをはさむ錯角 ∠BAC と ∠DCA は等しい。AD∥BC からは ∠DAC＝∠BCA。同じ印の辺は長さが等しい対辺',
  },

  // s195 ブーメラン型（矢じり形）の角
  lf_kokomathext06_195: {
    kind: 'polygon',
    points: [
      { x: 2, y: 4.6, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 2, y: 1.5, label: 'D' },
      { x: 4, y: 0, label: 'C' },
    ],
    fill: true,
    caption:
      'ブーメラン型（矢じり形）。内側にへこんだ点Dについて、∠BDC＝∠BAC＋∠ABD＋∠ACD が成り立つ',
  },

  // s197 多角形の内角の和（正六角形を1つの頂点からの対角線で分ける）
  lf_kokomathext06_197: {
    kind: 'polygon',
    points: [
      { x: 0, y: 1, label: 'A' },
      { x: -0.866, y: 0.5, label: 'B' },
      { x: -0.866, y: -0.5, label: 'C' },
      { x: 0, y: -1, label: 'D' },
      { x: 0.866, y: -0.5, label: 'E' },
      { x: 0.866, y: 0.5, label: 'F' },
    ],
    fill: true,
    diagonals: [
      [0, 2],
      [0, 3],
      [0, 4],
    ],
    equalSides: [[0, 1, 2, 3, 4, 5]],
    caption:
      '頂点Aから対角線を引くと六角形は4つの三角形に分かれる。内角の和は 180°×4＝720°、正六角形の1つの内角は 720°÷6＝120°',
  },

  // s198 多角形の外角の和（正五角形）
  lf_kokomathext06_198: {
    kind: 'polygon',
    points: [
      { x: 0, y: 1, label: 'A' },
      { x: -0.951, y: 0.309, label: 'B' },
      { x: -0.588, y: -0.809, label: 'C' },
      { x: 0.588, y: -0.809, label: 'D' },
      { x: 0.951, y: 0.309, label: 'E' },
    ],
    fill: true,
    equalSides: [[0, 1, 2, 3, 4]],
    equalAngles: [[0, 1, 2, 3, 4]],
    caption:
      '正五角形。内角の和は 180°×(5−2)＝540° なので1つの内角は108°。外角は 180°−108°＝72° で、72°×5＝360°',
  },

  // s200 垂直二等分線の性質
  lf_kokomathext06_200: {
    kind: 'polygon',
    points: [
      { x: 0, y: 3, label: 'P' },
      { x: -2, y: 0, label: 'A' },
      { x: 2, y: 0, label: 'B' },
    ],
    fill: true,
    equalSides: [[0, 2]],
    heights: [{ from: 0, toEdge: [1, 2], label: '垂直二等分線' }],
    caption:
      '線分ABの垂直二等分線上の点Pは、AとBから等しい距離にある（PA＝PB）。逆に PA＝PB となる点Pは必ず垂直二等分線上にある',
  },

  // s201 角の二等分線の作図（ひし形ができる）
  lf_kokomathext06_201: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'O' },
      { x: 4, y: 0, label: 'A' },
      { x: 6.571, y: 3.064, label: 'C' },
      { x: 2.571, y: 3.064, label: 'B' },
    ],
    fill: true,
    diagonals: [[0, 2]],
    equalSides: [[0, 1, 2, 3]],
    caption:
      '角の二等分線の作図。OA＝OB（同じ半径の弧）、AC＝BC（同じ半径の弧）なので四角形OACBはひし形。だから対角線OCは∠AOB（図では50°）を25°ずつに二等分する',
  },

  // s202 垂線の作図（たこ形ができる）
  lf_kokomathext06_202: {
    kind: 'polygon',
    points: [
      { x: 0, y: 3, label: 'P' },
      { x: -2, y: 0, label: 'A' },
      { x: 0, y: -2, label: 'Q' },
      { x: 2, y: 0, label: 'B' },
    ],
    fill: true,
    diagonals: [
      [0, 2],
      [1, 3],
    ],
    equalSides: [
      [0, 3],
      [1, 2],
    ],
    caption:
      '点Pを通る直線ABの垂線の作図。PA＝PB、QA＝QB なので、PもQも線分ABの垂直二等分線上にある。よって直線PQ⊥AB',
  },

  // s204 三角形の外接円（垂直二等分線の交点が中心）
  lf_kokomathext06_204: {
    kind: 'circle',
    radiusLabel: 'r',
    showCenter: true,
    points: [
      { angle: 90, label: 'A' },
      { angle: 210, label: 'B' },
      { angle: 330, label: 'C' },
    ],
    chords: [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    caption:
      '3点A・B・Cを通る円（△ABCの外接円）。中心Oは3辺の垂直二等分線の交点で、OA＝OB＝OC＝r となる',
  },

  // s206 点対称（平行四辺形は対角線の交点のまわりに180°回転すると重なる）
  lf_kokomathext06_206: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 5, y: 0, label: 'B' },
      { x: 6.5, y: 2.8, label: 'C' },
      { x: 1.5, y: 2.8, label: 'D' },
    ],
    fill: true,
    diagonals: [
      [0, 2],
      [1, 3],
    ],
    equalSides: [
      [0, 2],
      [1, 3],
    ],
    caption:
      '2本の対角線の交点O(3.25, 1.4)を中心に180°回転すると、AとC、BとDが入れかわってもとの図形に重なる（点対称な図形）',
  },

  // s211 共通の辺を使う合同（たこ形）
  lf_kokomathext06_211: {
    kind: 'polygon',
    points: [
      { x: 0, y: 4, label: 'A' },
      { x: 2.5, y: 0, label: 'B' },
      { x: 0, y: -2, label: 'C' },
      { x: -2.5, y: 0, label: 'D' },
    ],
    fill: true,
    diagonals: [[0, 2]],
    equalSides: [
      [0, 3],
      [1, 2],
    ],
    caption:
      'AB＝AD、CB＝CD で、ACは△ABCと△ADCに共通の辺。3組の辺がそれぞれ等しいので △ABC≡△ADC',
  },

  // s214 二等辺三角形の底角
  lf_kokomathext06_214: {
    kind: 'polygon',
    points: [
      { x: 0, y: 4, label: 'A' },
      { x: -2, y: 0, label: 'B' },
      { x: 2, y: 0, label: 'C' },
    ],
    fill: true,
    equalSides: [[0, 2]],
    equalAngles: [[1, 2]],
    caption: 'AB＝AC の二等辺三角形。底辺BCの両はしの角（底角）∠Bと∠Cは等しい',
  },

  // s215 頂角の二等分線は底辺を垂直に二等分する
  lf_kokomathext06_215: {
    kind: 'polygon',
    points: [
      { x: 0, y: 4, label: 'A' },
      { x: -2.5, y: 0, label: 'B' },
      { x: 2.5, y: 0, label: 'C' },
    ],
    fill: true,
    equalSides: [[0, 2]],
    heights: [{ from: 0, toEdge: [1, 2], label: 'AM' }],
    caption:
      'AB＝AC の二等辺三角形で、頂角Aの二等分線AMは底辺BCの中点Mを通り、BCと垂直に交わる（BM＝MC、AM⊥BC）',
  },

  // s218 直角三角形の合同条件（斜辺と他の1辺）
  lf_kokomathext06_218: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 4, y: 0, label: 'B' },
      { x: 0, y: 3, label: 'C' },
    ],
    fill: true,
    rightAngles: [0],
    sideLabels: ['4cm', '斜辺 5cm', '3cm'],
    caption:
      '∠A＝90°の直角三角形。斜辺は直角に向かい合う辺BC。斜辺と他の1辺（または斜辺と1つの鋭角）が等しければ2つの直角三角形は合同になる',
  },

  // s219 角の二等分線上の点から2辺までの距離は等しい
  lf_kokomathext06_219: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'O' },
      { x: 3.464, y: 0, label: 'A' },
      { x: 3.464, y: 2, label: 'P' },
      { x: 1.732, y: 3.0, label: 'B' },
    ],
    fill: true,
    diagonals: [[0, 2]],
    rightAngles: [1, 3],
    equalSides: [
      [1, 2],
      [0, 3],
    ],
    caption:
      'OPが∠AOB（図では60°）の二等分線。PA⊥OA、PB⊥OB とすると、△OAPと△OBPは斜辺OPが共通で1鋭角30°が等しいので合同。よってPA＝PB＝2',
  },

  // s220 平行四辺形の性質（対辺・対角）
  lf_kokomathext06_220: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 6, y: 0, label: 'B' },
      { x: 7.5, y: 3, label: 'C' },
      { x: 1.5, y: 3, label: 'D' },
    ],
    fill: true,
    equalSides: [
      [0, 2],
      [1, 3],
    ],
    equalAngles: [
      [0, 2],
      [1, 3],
    ],
    caption:
      '平行四辺形ABCD。2組の対辺はそれぞれ平行で長さも等しく（AB＝DC＝6、AD＝BC）、2組の対角もそれぞれ等しい（∠A＝∠C、∠B＝∠D）',
  },

  // s221 平行四辺形の対角線
  lf_kokomathext06_221: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 5, y: 0, label: 'B' },
      { x: 7, y: 3, label: 'C' },
      { x: 2, y: 3, label: 'D' },
    ],
    fill: true,
    diagonals: [
      [0, 2],
      [1, 3],
    ],
    equalSides: [
      [0, 2],
      [1, 3],
    ],
    caption:
      '対角線ACとBDはどちらも中点(3.5, 1.5)で交わる。つまり交点Oについて AO＝CO、BO＝DO。証明には△ABO≡△CDOを使う',
  },

  // s225 1組の対辺が平行で長さが等しい
  lf_kokomathext06_225: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 6, y: 0, label: 'B' },
      { x: 7, y: 3, label: 'C' },
      { x: 1, y: 3, label: 'D' },
    ],
    fill: true,
    equalSides: [[0, 2]],
    caption:
      'AB∥DC かつ AB＝DC＝6。1組の対辺が平行でその長さが等しいので、四角形ABCDは平行四辺形になる',
  },

  // s227 ひし形の対角線
  lf_kokomathext06_227: {
    kind: 'polygon',
    points: [
      { x: 0, y: -3, label: 'A' },
      { x: 4, y: 0, label: 'B' },
      { x: 0, y: 3, label: 'C' },
      { x: -4, y: 0, label: 'D' },
    ],
    fill: true,
    diagonals: [
      [0, 2],
      [1, 3],
    ],
    equalSides: [[0, 1, 2, 3]],
    caption:
      '4辺が5で等しいひし形。対角線AC＝6とBD＝8は垂直に交わり、それぞれの中点で交わる。面積は 6×8÷2＝24',
  },

  // s229 平行線と面積（等積変形）
  lf_kokomathext06_229: {
    kind: 'polygon',
    points: [
      { x: 1, y: 3, label: 'A' },
      { x: 5, y: 3, label: 'D' },
      { x: 6, y: 0, label: 'C' },
      { x: 0, y: 0, label: 'B' },
    ],
    fill: true,
    diagonals: [
      [0, 2],
      [1, 3],
    ],
    caption:
      'AD∥BC のとき、△ABCと△DBCは底辺BC＝6が共通で高さも3で等しい。よって面積はどちらも 6×3÷2＝9 で等しい',
  },
};
