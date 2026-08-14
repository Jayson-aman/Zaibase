// 平面図形 前半（角度・面積・等積変形・相似）— sansu_s126〜sansu_s160 用の図解データ。
// 座標はすべて distance formula / shoelace 公式で検算済み（生成時の検証スクリプト参照）。
import type { Figure } from './figures';

export const lessonFigsSansuExt04: Record<string, Figure> = {
  // ===== 1. 角度の基本 =====

  // s126: 三角形の内角の和（角B=55°, 角C=65°, 角A=60°）
  lf_sansu_ext04_126: {
    kind: 'polygon',
    points: [
      { x: 4.8, y: 6.86, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 8, y: 0, label: 'C' },
    ],
    caption: '角B＝55°、角C＝65°のとき、角A＝180−55−65＝60°。三角形の内角の和は常に180°',
  },

  // s127: 三角形の外角の性質（角A=42°, 角B=88°, 角C=50°、Cの外角=130°）
  lf_sansu_ext04_127: {
    kind: 'polygon',
    points: [
      { x: 0.32, y: 9.15, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 8, y: 0, label: 'C' },
    ],
    caption: '角A＝42°、角B＝88°のとき、角Cの内角＝50°。角Cの外角＝隣り合わない2つの内角の和＝42＋88＝130°',
  },

  // s128: 平行線と角度（同位角・錯角）
  lf_sansu_ext04_128: {
    kind: 'coordinate',
    xRange: [-1.5, 5],
    yRange: [-1, 4],
    segments: [
      [{ x: -1, y: 1 }, { x: 5, y: 1 }],
      [{ x: -1, y: 3 }, { x: 5, y: 3 }],
      [{ x: -0.5, y: -0.5 }, { x: 4.5, y: 4.5 }],
    ],
    points: [
      { x: -1, y: 1, label: 'ℓ' },
      { x: -1, y: 3, label: 'm' },
      { x: 1, y: 1, label: 'P' },
      { x: 3, y: 3, label: 'Q' },
    ],
    caption: '直線ℓとmは平行。横断線がつくる同位角どうし・錯角どうしはそれぞれ等しい（ℓ//mのときだけ成り立つ性質）',
  },

  // s129: 二等辺三角形（頂角40°、底角70°ずつ、底辺6cm）
  lf_sansu_ext04_129: {
    kind: 'polygon',
    points: [
      { x: 3, y: 8.24, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 6, y: 0, label: 'C' },
    ],
    sideLabels: [null, '6cm', null],
    equalSides: [[0, 2]],
    equalAngles: [[1, 2]],
    caption: '頂角A＝40°の二等辺三角形。底角はそれぞれ(180−40)÷2＝70°で等しい。等しい辺(AB＝AC)には同じ印をつける',
  },

  // s130: 星形（五芒星）の先端の角の和＝180°
  lf_sansu_ext04_130: {
    kind: 'circle',
    points: [
      { angle: 90, label: 'P1' },
      { angle: 162, label: 'P2' },
      { angle: 234, label: 'P3' },
      { angle: 306, label: 'P4' },
      { angle: 18, label: 'P5' },
    ],
    chords: [
      [0, 2],
      [2, 4],
      [4, 1],
      [1, 3],
      [3, 0],
    ],
    caption: '星形（五芒星）の5つの先端の角の和は、いつも180°になる（三角形の外角の性質を利用して証明できる）',
  },

  // ===== 2. 多角形の内角・外角の和 =====

  // s131: 四角形の内角の和（対角線1本で三角形2つ）
  lf_sansu_ext04_131: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 6, y: 0, label: 'B' },
      { x: 7, y: 4, label: 'C' },
      { x: 2, y: 5, label: 'D' },
    ],
    diagonals: [[0, 2]],
    caption: '四角形は対角線を1本引くと三角形2つに分かれる → 内角の和＝180°×2＝360°',
  },

  // s132: 七角形の内角の和（対角線4本で三角形5つ）
  lf_sansu_ext04_132: {
    kind: 'polygon',
    points: [
      { x: 0, y: 5, label: 'P1' },
      { x: 3.91, y: 3.12, label: 'P2' },
      { x: 4.87, y: -1.11, label: 'P3' },
      { x: 2.17, y: -4.5, label: 'P4' },
      { x: -2.17, y: -4.5, label: 'P5' },
      { x: -4.87, y: -1.11, label: 'P6' },
      { x: -3.91, y: 3.12, label: 'P7' },
    ],
    diagonals: [
      [0, 2],
      [0, 3],
      [0, 4],
      [0, 5],
    ],
    caption: '七角形は1つの頂点から対角線を4本引くと三角形5つに分かれる → 内角の和＝(7−2)×180°＝900°',
  },

  // s133: 多角形の外角の和は常に360°（正六角形で例示）
  lf_sansu_ext04_133: {
    kind: 'polygon',
    points: [
      { x: 5, y: 0, label: 'A' },
      { x: 2.5, y: 4.33, label: 'B' },
      { x: -2.5, y: 4.33, label: 'C' },
      { x: -5, y: 0, label: 'D' },
      { x: -2.5, y: -4.33, label: 'E' },
      { x: 2.5, y: -4.33, label: 'F' },
    ],
    caption: '凸多角形は、辺の数に関係なく外角の和がいつも360°になる（1周してもとの向きにもどるから）',
  },

  // s134: 正十二角形の1つの内角・外角
  lf_sansu_ext04_134: {
    kind: 'polygon',
    points: [
      { x: 5, y: 0 },
      { x: 4.33, y: 2.5 },
      { x: 2.5, y: 4.33 },
      { x: 0, y: 5 },
      { x: -2.5, y: 4.33 },
      { x: -4.33, y: 2.5 },
      { x: -5, y: 0 },
      { x: -4.33, y: -2.5 },
      { x: -2.5, y: -4.33 },
      { x: 0, y: -5 },
      { x: 2.5, y: -4.33 },
      { x: 4.33, y: -2.5 },
    ],
    caption: '正十二角形の1つの内角＝(12−2)×180÷12＝150°、1つの外角＝360÷12＝30°（内角+外角＝180°で確認できる）',
  },

  // ===== 3. 円と扇形 =====

  // s135: 円周の長さ（半径7cm）
  lf_sansu_ext04_135: {
    kind: 'circle',
    radiusLabel: '7cm',
    showCenter: true,
    caption: '円周＝直径×3.14＝(7×2)×3.14＝43.96cm',
  },

  // s136: 円の面積（半径9cm）
  lf_sansu_ext04_136: {
    kind: 'circle',
    radiusLabel: '9cm',
    showCenter: true,
    caption: '円の面積＝半径×半径×3.14＝9×9×3.14＝254.34c㎡',
  },

  // s137: おうぎ形の弧の長さ（半径6cm、中心角120°）
  lf_sansu_ext04_137: {
    kind: 'circle',
    radiusLabel: '6cm',
    sector: { from: 0, to: 120, label: '120°' },
    caption: '半径6cm、中心角120°のおうぎ形の弧の長さ＝2×6×3.14×120/360＝12.56cm',
  },

  // s138: おうぎ形の面積（半径8cm、中心角45°）
  lf_sansu_ext04_138: {
    kind: 'circle',
    radiusLabel: '8cm',
    sector: { from: 0, to: 45, label: '45°' },
    caption: '半径8cm、中心角45°のおうぎ形の面積＝8×8×3.14×45/360＝25.12c㎡',
  },

  // s139: 半円の周りの長さ（半径4cm）
  lf_sansu_ext04_139: {
    kind: 'circle',
    radiusLabel: '4cm',
    sector: { from: 0, to: 180, label: '半円' },
    caption: '半径4cmの半円の周りの長さ＝弧(2×4×3.14÷2＝12.56cm)＋直径(8cm)＝20.56cm',
  },

  // s140: 円が絡む複合図形（長方形8cm×5cm＋半径4cmの半円）
  lf_sansu_ext04_140: {
    kind: 'circle',
    radiusLabel: '4cm',
    sector: { from: 0, to: 180, label: '半円' },
    caption: '長方形(8cm×5cm)の上に直径8cmの半円をのせた複合図形。半円部分＝4×4×3.14÷2＝25.12c㎡。長方形40c㎡と合わせて合計65.12c㎡',
  },

  // ===== 4. 三角形の面積の公式と応用 =====

  // s141: 三角形の面積の基本（底辺8cm・高さ5cm）
  lf_sansu_ext04_141: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'B' },
      { x: 8, y: 0, label: 'C' },
      { x: 3, y: 5, label: 'A' },
    ],
    sideLabels: ['底辺8cm', null, null],
    heights: [{ from: 2, toEdge: [0, 1], label: '高さ5cm' }],
    fill: true,
    caption: '三角形の面積＝底辺×高さ÷2＝8×5÷2＝20c㎡',
  },

  // s142: 高さが外にある三角形（頂点が底辺の外側）
  lf_sansu_ext04_142: {
    kind: 'polygon',
    points: [
      { x: -4, y: 3, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 3, y: 0, label: 'C' },
    ],
    sideLabels: ['AB＝5cm', '底辺3cm', null],
    heights: [{ from: 0, toEdge: [1, 2], label: '高さ3cm' }],
    caption: '頂点Aは底辺BCの外側にあるが、直線BCを延長して垂線を下ろせば高さが求められる。面積＝3×3÷2＝4.5c㎡（辺AB＝5cmは高さではない）',
  },

  // s143: 底辺の比と面積比（高さ共通、BD:DC=4:6）
  lf_sansu_ext04_143: {
    kind: 'polygon',
    points: [
      { x: 4, y: 6, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 4, y: 0, label: 'D' },
      { x: 10, y: 0, label: 'C' },
    ],
    sideLabels: [null, '4cm', '6cm', null],
    diagonals: [[0, 2]],
    heights: [{ from: 0, toEdge: [1, 3], label: '高さ6cm' }],
    caption: 'BD:DC＝4:6＝2:3、高さ（頂点Aから底辺BCへの距離）は共通なので、△ABD:△ADC＝2:3',
  },

  // s144: 座標上の三角形の面積
  lf_sansu_ext04_144: {
    kind: 'polygon',
    points: [
      { x: 1, y: 1, label: 'A' },
      { x: 7, y: 1, label: 'B' },
      { x: 3, y: 5, label: 'C' },
    ],
    sideLabels: ['底辺6cm', null, null],
    heights: [{ from: 2, toEdge: [0, 1], label: '高さ4cm' }],
    fill: true,
    caption: '底辺AB＝7−1＝6cm、高さ＝5−1＝4cm（Cのy座標とABのy座標の差）。面積＝6×4÷2＝12c㎡',
  },

  // ===== 5. 四角形の面積 =====

  // s145: 平行四辺形の面積（底辺6cm・高さ4cm・斜辺5cm）
  lf_sansu_ext04_145: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 6, y: 0, label: 'B' },
      { x: 9, y: 4, label: 'C' },
      { x: 3, y: 4, label: 'D' },
    ],
    sideLabels: ['底辺6cm', null, null, '5cm'],
    heights: [{ from: 3, toEdge: [0, 1], label: '高さ4cm' }],
    fill: true,
    caption: '平行四辺形の面積＝底辺×高さ＝6×4＝24c㎡（斜辺AD＝5cmは高さではない）',
  },

  // s146: 台形の面積（上底5cm・下底9cm・高さ4cm）
  lf_sansu_ext04_146: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 9, y: 0, label: 'B' },
      { x: 7, y: 4, label: 'C' },
      { x: 2, y: 4, label: 'D' },
    ],
    sideLabels: ['下底9cm', null, '上底5cm', null],
    heights: [{ from: 3, toEdge: [0, 1], label: '高さ4cm' }],
    fill: true,
    caption: '台形の面積＝(上底+下底)×高さ÷2＝(5+9)×4÷2＝28c㎡',
  },

  // s147: ひし形の面積（対角線10cm・6cm）
  lf_sansu_ext04_147: {
    kind: 'polygon',
    points: [
      { x: 5, y: 0, label: 'A' },
      { x: 0, y: 3, label: 'B' },
      { x: -5, y: 0, label: 'C' },
      { x: 0, y: -3, label: 'D' },
    ],
    diagonals: [
      [0, 2],
      [1, 3],
    ],
    equalSides: [[0, 1, 2, 3]],
    fill: true,
    caption: 'ひし形の面積＝対角線×対角線÷2＝10×6÷2＝30c㎡（対角線AC＝10cm、対角線BD＝6cm）',
  },

  // s148: 凧形（対角線が垂直な四角形）の面積
  lf_sansu_ext04_148: {
    kind: 'polygon',
    points: [
      { x: 7, y: 0, label: 'A' },
      { x: 0, y: 4, label: 'B' },
      { x: -5, y: 0, label: 'C' },
      { x: 0, y: -3, label: 'D' },
    ],
    diagonals: [
      [0, 2],
      [1, 3],
    ],
    fill: true,
    caption: '対角線が垂直に交わる四角形（凧形）は、ひし形と同じ「対角線×対角線÷2」の公式が使える：対角線AC＝12cm、対角線BD＝7cmより12×7÷2＝42c㎡',
  },

  // ===== 6. 等積変形 =====

  // s149: 等積変形の基本原理（頂点が平行線上を移動）
  lf_sansu_ext04_149: {
    kind: 'coordinate',
    xRange: [-1.5, 9.5],
    yRange: [-1, 6],
    segments: [
      [{ x: -1, y: 5 }, { x: 9, y: 5 }],
      [{ x: 0, y: 0 }, { x: 3, y: 5 }],
      [{ x: 3, y: 5 }, { x: 8, y: 0 }],
      [{ x: 0, y: 0 }, { x: 6, y: 5 }],
      [{ x: 6, y: 5 }, { x: 8, y: 0 }],
    ],
    points: [
      { x: 0, y: 0, label: 'B' },
      { x: 8, y: 0, label: 'C' },
      { x: 3, y: 5, label: 'A' },
      { x: 6, y: 5, label: "A'" },
    ],
    caption: '頂点をBCに平行な直線上でAからA′へ動かしても、底辺BC(8cm)と高さ(5cm)は変わらないので、△ABCと△A′BCの面積はどちらも8×5÷2＝20c㎡で等しい',
  },

  // s150: 対角線で分けた四角形の面積の合計
  lf_sansu_ext04_150: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 6, y: 2, label: 'B' },
      { x: 9, y: 0, label: 'C' },
      { x: 4, y: -5, label: 'D' },
    ],
    diagonals: [[0, 2]],
    heights: [
      { from: 1, toEdge: [0, 2], label: '高さ2cm' },
      { from: 3, toEdge: [0, 2], label: '高さ5cm' },
    ],
    fill: true,
    caption: '対角線ACで四角形ABCDを△ABCと△ACDに分ける。共通の底辺AC＝9cmに対し高さはそれぞれ2cmと5cm。△ABC＝9×2÷2＝9c㎡、△ACD＝9×5÷2＝22.5c㎡、合計31.5c㎡',
  },

  // s151: L字型図形の面積（長方形－長方形）
  lf_sansu_ext04_151: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 10, y: 0, label: 'B' },
      { x: 10, y: 5, label: 'C' },
      { x: 6, y: 5, label: 'D' },
      { x: 6, y: 8, label: 'E' },
      { x: 0, y: 8, label: 'F' },
    ],
    rightAngles: [0, 1, 2, 3, 4, 5],
    sideLabels: ['10cm', null, '4cm', '3cm', null, '8cm'],
    fill: true,
    caption: 'L字型の土地は、大きな長方形(10cm×8cm)から欠けた部分の長方形(4cm×3cm)を引いて求める：10×8－4×3＝80－12＝68c㎡',
  },

  // s152: 四角形を等積変形で三角形に変える（対角線に平行な補助線）
  lf_sansu_ext04_152: {
    kind: 'coordinate',
    xRange: [-1, 15],
    yRange: [-1, 6],
    polygon: [
      { x: 0, y: 0 },
      { x: 9, y: 2 },
      { x: 7, y: 5 },
      { x: 0, y: 5 },
    ],
    segments: [
      [{ x: 0, y: 0 }, { x: 7, y: 5 }],
      [{ x: 9, y: 2 }, { x: 13.2, y: 5 }],
      [{ x: 0, y: 0 }, { x: 13.2, y: 5 }],
      [{ x: 0, y: 5 }, { x: 13.2, y: 5 }],
    ],
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 9, y: 2, label: 'B' },
      { x: 7, y: 5, label: 'C' },
      { x: 0, y: 5, label: 'D' },
      { x: 13.2, y: 5, label: 'E' },
    ],
    caption: '対角線ACに平行な直線をBから引き、DCの延長との交点をEとすると、△ADEの面積は四角形ABCDの面積と等しい（等積変形）。四角形ABCD＝33c㎡ → △ADE＝13.2×5÷2＝33c㎡',
  },

  // s153: 台形を等積変形で三角形に変える（底辺を上底の長さぶん延長）
  lf_sansu_ext04_153: {
    kind: 'coordinate',
    xRange: [-1, 17],
    yRange: [-1, 6.5],
    polygon: [
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 7, y: 5 },
      { x: 1, y: 5 },
    ],
    segments: [
      [{ x: 10, y: 0 }, { x: 16, y: 0 }],
      [{ x: 1, y: 5 }, { x: 16, y: 0 }],
    ],
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 10, y: 0, label: 'B' },
      { x: 7, y: 5, label: 'C' },
      { x: 1, y: 5, label: 'D' },
      { x: 16, y: 0, label: 'E' },
    ],
    caption: '台形ABCD(上底6cm・下底10cm・高さ5cm)の底辺ABを、上底の長さ(6cm)だけ延長した点をEとすると、△ADEの面積は台形と等しい：(6+10)×5÷2＝16×5÷2＝40c㎡',
  },

  // ===== 7. 相似 =====

  // s154: 相似の基本（相似比1:2で拡大した三角形）
  lf_sansu_ext04_154: {
    kind: 'coordinate',
    xRange: [-1, 13],
    yRange: [-1, 5],
    polygon: [
      { x: 0, y: 0 },
      { x: 3, y: 0 },
      { x: 1, y: 2 },
    ],
    segments: [
      [{ x: 6, y: 0 }, { x: 12, y: 0 }],
      [{ x: 12, y: 0 }, { x: 8, y: 4 }],
      [{ x: 8, y: 4 }, { x: 6, y: 0 }],
    ],
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 3, y: 0, label: 'B' },
      { x: 1, y: 2, label: 'C' },
      { x: 6, y: 0, label: "A'" },
      { x: 12, y: 0, label: "B'" },
      { x: 8, y: 4, label: "C'" },
    ],
    caption: '△ABCと△A′B′C′は形が同じで大きさが2倍（相似比1:2）。対応する角はそれぞれ等しく、対応する辺の比はすべて1:2',
  },

  // s155: 相似比と辺の比（AD:AB=3:7、DE//BC）
  lf_sansu_ext04_155: {
    kind: 'coordinate',
    xRange: [-3, 5],
    yRange: [-1, 6],
    polygon: [
      { x: 0, y: 5 },
      { x: -2, y: 0 },
      { x: 4, y: 0 },
    ],
    segments: [[{ x: -0.86, y: 2.86 }, { x: 1.71, y: 2.86 }]],
    points: [
      { x: 0, y: 5, label: 'A' },
      { x: -2, y: 0, label: 'B' },
      { x: 4, y: 0, label: 'C' },
      { x: -0.86, y: 2.86, label: 'D' },
      { x: 1.71, y: 2.86, label: 'E' },
    ],
    caption: 'AD:AB＝3:7のとき、DE//BCならばDE:BC＝3:7。例：AB＝14cm→AD＝6cm、BC＝21cm→DE＝9cm',
  },

  // s156: 相似比と面積比（相似比3:5→面積比9:25）
  lf_sansu_ext04_156: {
    kind: 'coordinate',
    xRange: [-3, 5],
    yRange: [-1, 6],
    polygon: [
      { x: 0, y: 5 },
      { x: -2, y: 0 },
      { x: 4, y: 0 },
    ],
    segments: [[{ x: -1.2, y: 2 }, { x: 2.4, y: 2 }]],
    points: [
      { x: 0, y: 5, label: 'A' },
      { x: -2, y: 0, label: 'B' },
      { x: 4, y: 0, label: 'C' },
      { x: -1.2, y: 2, label: 'D' },
      { x: 2.4, y: 2, label: 'E' },
    ],
    caption: '△ADE∽△ABCで相似比AD:AB＝3:5→面積比＝3²:5²＝9:25。△ADEが27c㎡のとき、△ABC＝27×25/9＝75c㎡',
  },

  // s157: 台形の対角線でできる相似（ピラミッド型・砂時計型）
  lf_sansu_ext04_157: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 10, y: 0, label: 'B' },
      { x: 7, y: 6, label: 'C' },
      { x: 3, y: 6, label: 'D' },
    ],
    diagonals: [
      [0, 2],
      [1, 3],
    ],
    sideLabels: ['下底10cm', null, '上底4cm', null],
    caption: '台形ABCD(下底AB=10cm、上底DC=4cm)の対角線の交点をOとすると、△OAB∽△OCD(相似比10:4＝5:2)。OA:OC＝OB:OD＝5:2',
  },

  // s158: 砂時計型相似（AB//CDの交差する線分）
  lf_sansu_ext04_158: {
    kind: 'coordinate',
    xRange: [-3, 4],
    yRange: [-4, 4],
    polygon: [
      { x: 0, y: 0 },
      { x: -2, y: -2 },
      { x: -2, y: 2 },
    ],
    segments: [
      [{ x: -2, y: -2 }, { x: 3, y: 3 }],
      [{ x: -2, y: 2 }, { x: 3, y: -3 }],
      [{ x: -2, y: -2 }, { x: -2, y: 2 }],
      [{ x: 3, y: 3 }, { x: 3, y: -3 }],
    ],
    points: [
      { x: 0, y: 0, label: 'O' },
      { x: -2, y: -2, label: 'A' },
      { x: -2, y: 2, label: 'B' },
      { x: 3, y: 3, label: 'C' },
      { x: 3, y: -3, label: 'D' },
    ],
    caption: 'AB//CDのとき、対角線ACとBDの交点をOとすると△OAB∽△OCD(砂時計型相似)。AB＝4cm、CD＝6cmなら相似比4:6＝2:3で、OA:OC＝OB:OD＝2:3',
  },

  // s159: 相似を利用した高さの測定（棒の影と木の影）
  lf_sansu_ext04_159: {
    kind: 'coordinate',
    xRange: [-1, 21],
    yRange: [-1, 11],
    polygon: [
      { x: 0, y: 0 },
      { x: 3, y: 0 },
      { x: 0, y: 2 },
    ],
    segments: [
      [{ x: 5, y: 0 }, { x: 20, y: 0 }],
      [{ x: 20, y: 0 }, { x: 5, y: 10 }],
      [{ x: 5, y: 10 }, { x: 5, y: 0 }],
    ],
    points: [
      { x: 0, y: 2, label: 'ぼう2m' },
      { x: 3, y: 0, label: '影3m' },
      { x: 5, y: 10, label: '木' },
      { x: 20, y: 0, label: '影15m' },
    ],
    caption: '棒の高さ2m・影3mと、木の影15mが同じ太陽の角度でできているとき、相似な直角三角形になる。木の高さ＝2×15÷3＝10m',
  },

  // s160: 中点連結定理と面積比の応用
  lf_sansu_ext04_160: {
    kind: 'coordinate',
    xRange: [-5, 5],
    yRange: [-1, 7],
    polygon: [
      { x: 0, y: 6 },
      { x: -4, y: 0 },
      { x: 4, y: 0 },
    ],
    segments: [[{ x: -2, y: 3 }, { x: 2, y: 3 }]],
    points: [
      { x: 0, y: 6, label: 'A' },
      { x: -4, y: 0, label: 'B' },
      { x: 4, y: 0, label: 'C' },
      { x: -2, y: 3, label: 'D' },
      { x: 2, y: 3, label: 'E' },
    ],
    caption: 'D、EはそれぞれAB、ACの中点。中点連結定理よりDE//BC、DE＝BC÷2（相似比1:2）。△ADEの面積は△ABCの(1/2)²＝1/4。△ABC＝48c㎡のとき△ADE＝12c㎡、台形DBCE＝48−12＝36c㎡で、△ADE:台形DBCE＝1:3',
  },
};
