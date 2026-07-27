import type { Figure } from './figures';

// 算数・数学：図解ギャップ埋め バッチ3（未対応だった幾何・グラフ問題に図を追加）
export const figuresSansuGap3: Record<string, Figure> = {
  // 円Oの外部の点Pから2接線PA,PB（接点A,B）。PA=8cm、∠APB=60°（凧形OAPB、右角はA,B）。ABは解答なので示さない。
  koko_kankan_sansu_c2_04: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'O' },
      { x: 6.93, y: 4, label: 'A' },
      { x: 9.24, y: 0, label: 'P' },
      { x: 6.93, y: -4, label: 'B' },
    ],
    sideLabels: [null, '8cm', null, null],
    rightAngles: [1, 3],
    equalSides: [[1, 2]],
    caption: '円Oの外部の点Pから2本の接線PA、PB（PA=8cm）。∠APB=60°。ABは解答なので図には示さない。',
  },
  // 円O半径5cm、点PとOの距離13cm。接点Aで直角三角形OAP。接線PTの長さは解答なので示さない。
  koko_kankan_sansu_c2_08: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'O' },
      { x: 5, y: 0, label: 'A' },
      { x: 5, y: 12, label: 'P' },
    ],
    sideLabels: ['5cm', null, '13cm'],
    rightAngles: [1],
    caption: '円Oの半径5cm、OP=13cm。接線の長さPAは解答なので図には示さない。',
  },
  // 円外の点Pから接線PT・割線PAB。PT=6cm、PA=4cm（PBは解答なので示さない、内部配置のみ利用）。
  koko_kankan_sansu_c2_12: {
    kind: 'polygon',
    points: [
      { x: 3.86, y: 4.6, label: 'T' },
      { x: 0, y: 0, label: 'P' },
      { x: 4, y: 0, label: 'A' },
      { x: 9, y: 0, label: 'B' },
    ],
    sideLabels: ['6cm', '4cm', null, null],
    caption: '円外の点Pから接線PT（=6cm）と割線PAB（PA=4cm）。PBは解答（方べきの定理）なので図には示さない。',
  },
  // 接線と弦のなす接弦角55°（点Aで）。円周角∠ACBは解答なので示さない。
  koko_kankan_sansu_c2_18: {
    kind: 'circle',
    points: [
      { angle: 200, label: 'A' },
      { angle: 340, label: 'B' },
      { angle: 90, label: 'C' },
    ],
    chords: [[0, 1]],
    caption: '点Aを通る接線と弦ABのなす接弦角=55°（接線は図には表示せず）。Cは弧AB上にない点。∠ACBは解答なので示さない。',
  },
  // 平行四辺形ABCD、辺BC上の点E（BE:EC=2:3）、線分AEと対角線BDの交点F。BF:FDは解答なので示さない。
  koko_kankan_sansu_c2_23: {
    kind: 'polygon',
    points: [
      { x: 0, y: 2, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 2, y: 0, label: 'E' },
      { x: 5, y: 0, label: 'C' },
      { x: 5, y: 2, label: 'D' },
    ],
    sideLabels: [null, null, null, null, null],
    diagonals: [
      [0, 2],
      [1, 4],
    ],
    caption: '平行四辺形ABCD、辺BC上の点E（BE:EC=2:3）。線分AEと対角線BDの交点F（図には示さず）。BF:FDは解答。',
  },
  // 円に内接する四角形ABCD、辺CDの延長上の点E、∠BCE=115°(外角)。∠BAD・∠ADCは解答なので示さない。
  koko_kankan_sansu_c2_25: {
    kind: 'circle',
    points: [
      { angle: 100, label: 'A' },
      { angle: 20, label: 'B' },
      { angle: 280, label: 'C' },
      { angle: 190, label: 'D' },
    ],
    chords: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
    ],
    showCenter: false,
    caption: '円に内接する四角形ABCD。辺DCを延長した点E（図には示さず）で∠BCE=115°（外角）。∠ABC=95°も与えられている。∠BAD・∠ADCは解答。',
  },
  // 円Oの外部の点Pから2接線PA,PB。∠APB=50°（凧形OAPB）。∠AOB・∠ACBは解答なので示さない。
  koko_kankan_sansu_c2_26: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'O' },
      { x: 9.06, y: 4.23, label: 'A' },
      { x: 11.03, y: 0, label: 'P' },
      { x: 9.06, y: -4.23, label: 'B' },
    ],
    sideLabels: [null, null, null, null],
    rightAngles: [1, 3],
    equalSides: [[1, 2]],
    caption: '円Oの外部の点Pから2本の接線PA、PB。∠APB=50°。∠AOB、および弧AB上にない点Cから見た∠ACBは解答なので図には示さない。',
  },
  // 円Oに内接する△ABC、頂点Aの接線とBCの延長(Cの外側)の交点P。∠ABC=65°、∠ACB=75°(与えられた値)。∠PAC・∠APCは解答。
  koko_kankan_sansu_c2_29: {
    kind: 'circle',
    points: [
      { angle: 100, label: 'A' },
      { angle: 200, label: 'B' },
      { angle: 340, label: 'C' },
    ],
    chords: [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    caption: '円Oに内接する△ABC（∠ABC=65°、∠ACB=75°）。頂点Aの接線とBCの延長(Cの外側)の交点がP（図には示さず）。∠PAC・∠APCは解答。',
  },
  // 円Oの半径5cm、OP=13cm、Pを通り中心Oを通る割線が円と2点A(近い)・B(遠い、図には示さず)で交わる。PT・PA・PBは解答。
  koko_kankan_sansu_c2_35: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'P' },
      { x: 8, y: 0, label: 'A' },
      { x: 13, y: 0, label: 'O' },
      { x: 11.08, y: 4.62, label: 'T' },
    ],
    sideLabels: [null, '5cm', '5cm', null],
    rightAngles: [3],
    caption: '円Oの半径5cm、OP=13cm。Pを通り中心Oを通る割線が円と2点A（近い）、B（遠い、図には示さず）で交わる。OA=OT=5cm（半径）。接線PT・割線PA・PBは解答なので図には示さない。',
  },
  // 円Oの半径6cm、外部の点Pから2接線PA,PB。PA=8cm。POは解答、ABも解答なので示さない。
  koko_kankan_sansu_c2_37: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'O' },
      { x: 3.6, y: 4.8, label: 'A' },
      { x: 10, y: 0, label: 'P' },
      { x: 3.6, y: -4.8, label: 'B' },
    ],
    sideLabels: ['6cm', '8cm', null, '6cm'],
    rightAngles: [1, 3],
    equalSides: [[1, 2]],
    caption: '円Oの半径6cm、外部の点Pから接線PA=8cm。PO、弦ABは解答なので図には示さない。',
  },
  // 円Oに内接する△ABC、頂点Aの接線とBCの延長の交点P（B,C,Pの順）。PA=6cm、PB=4cm（与えられた値）。PCは解答。
  koko_kankan_sansu_c2_38: {
    kind: 'circle',
    points: [
      { angle: 100, label: 'A' },
      { angle: 200, label: 'B' },
      { angle: 340, label: 'C' },
    ],
    chords: [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    caption: '円Oに内接する△ABC。頂点Aの接線とBCの延長の交点P（B,C,Pの順、図には示さず）。PA=6cm、PB=4cm。PCは解答。',
  },
  // 円O半径13cm。弦ABは中心から距離5cm、弦CDは中心から距離12cm（AB⊥CD、概略図）。AB・CDの長さは解答。
  koko_kankan_sansu_c2_39: {
    kind: 'circle',
    points: [
      { angle: 200, label: 'A' },
      { angle: 340, label: 'B' },
      { angle: 110, label: 'C' },
      { angle: 250, label: 'D' },
    ],
    chords: [
      [0, 1],
      [2, 3],
    ],
    caption: '円Oの半径13cm。弦ABは中心から距離5cm、弦CDは中心から距離12cm（AB⊥CD、位置は概略）。AB・CDの長さは解答なので図には示さない。',
  },
  // 直線ABの同じ側にある点C,Dで∠ACB=∠ADB=40°（円周角の定理の逆の証明に使う配置、まだ同一円周上とは示していない）。
  koko_kankan_sansu_c2_40: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 2, y: 5, label: 'C' },
      { x: 6, y: 0, label: 'B' },
      { x: 4, y: 4, label: 'D' },
    ],
    sideLabels: [null, null, null, null],
    equalAngles: [[1, 3]],
    caption: '直線ABに関して同じ側にある点C、D。∠ACB=∠ADB=40°（円周角の定理の逆の証明に使う配置）。',
  },
  // 2つの割線PAB、PCD。PA=5cm、AB=7cm、PC=6cm（与えられた値）。PDは解答（方べきの定理）なので示さない。
  koko_kankan_sansu_c2_46: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'P' },
      { x: 4.7, y: 1.71, label: 'A' },
      { x: 11.28, y: 4.1, label: 'B' },
      { x: 6.43, y: -7.66, label: 'D' },
      { x: 3.86, y: -4.6, label: 'C' },
    ],
    sideLabels: ['5cm', '7cm', null, null, '6cm'],
    caption: '円外の点Pからの2本の割線PAB（PA=5cm、AB=7cm）とPCD（PC=6cm）。PDは解答（方べきの定理）なので図には示さない。',
  },
  // 台形ABCD（AD∥BC、AD=6cm、BC=9cm）。M,Nは辺AB,DCの中点、MNとACの交点Q。MQ・QNは解答。
  koko_kankan_sansu_c2_47: {
    kind: 'polygon',
    points: [
      { x: 1, y: 4, label: 'A' },
      { x: 0.5, y: 2, label: 'M' },
      { x: 0, y: 0, label: 'B' },
      { x: 9, y: 0, label: 'C' },
      { x: 8, y: 2, label: 'N' },
      { x: 7, y: 4, label: 'D' },
    ],
    sideLabels: [null, null, '9cm', null, null, '6cm'],
    diagonals: [
      [1, 4],
      [0, 3],
    ],
    caption: '台形ABCD（AD∥BC、AD=6cm、BC=9cm）。M、Nは辺AB、DCの中点。線分MNと対角線ACの交点Q。MQ・QNは解答なので図には示さない。',
  },
  // ∠C=90°の直角三角形ABCが円Oに内接（AB=17cmは直径、BC=8cm）。AC・外接円半径・内接円半径は解答。
  koko_kankan_sansu_c2_48: {
    kind: 'polygon',
    points: [
      { x: 0, y: 15, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 8, y: 0, label: 'C' },
    ],
    sideLabels: ['17cm', '8cm', null],
    rightAngles: [2],
    caption: '∠C=90°の直角三角形ABCが円Oに内接（ABは直径=17cm、BC=8cm）。AC・円Oの半径・内接円の半径は解答なので図には示さない。',
  },
  // 円Oは∠C=90°の直角三角形ABCの内接円。AC=9cm、BC=12cm。AB・内接円半径r・外接円半径Rは解答。
  koko_kankan_sansu_c2_50: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'C' },
      { x: 9, y: 0, label: 'A' },
      { x: 0, y: 12, label: 'B' },
    ],
    sideLabels: ['9cm', null, '12cm'],
    rightAngles: [0],
    caption: '円Oは∠C=90°の直角三角形ABCの内接円（AC=9cm、BC=12cm）。斜辺AB・内接円半径r・外接円半径Rは解答なので図には示さない。',
  },
  // 三角形の内角（50°、70°、与えられた値）。xは解答なので示さない。
  sx2_041: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 8, y: 0, label: 'B' },
      { x: 3, y: 5, label: 'C' },
    ],
    sideLabels: [null, null, null],
    caption: '三角形の3つの角のうち2つが50°、70°（与えられた値）。残りのx°は解答なので図には示さない。',
  },
  // 二等辺三角形、頂角40°（底角は解答なので示さない）。
  sx2_046: {
    kind: 'polygon',
    points: [
      { x: 0, y: 6, label: 'A' },
      { x: -3, y: 0, label: 'B' },
      { x: 3, y: 0, label: 'C' },
    ],
    sideLabels: [null, null, null],
    equalSides: [[0, 2]],
    caption: '二等辺三角形ABC（AB=AC）。頂角∠A=40°（与えられた値）。底角は解答なので図には示さない。',
  },
  // 正方形の対角線AC・BD（交わる角度は解答なので数値は示さない）。
  sx2_050: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 4, y: 0, label: 'B' },
      { x: 4, y: 4, label: 'C' },
      { x: 0, y: 4, label: 'D' },
    ],
    sideLabels: [null, null, null, null],
    diagonals: [
      [0, 2],
      [1, 3],
    ],
    caption: '正方形ABCDの対角線ACとBDが交わる角度を求める（角度は解答なので図には示さない）。',
  },
  // 底辺8cm・高さ5cmの三角形（面積は解答なので示さない）。
  sx2_051: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 8, y: 0, label: 'B' },
      { x: 3, y: 5, label: 'C' },
    ],
    sideLabels: ['8cm', null, null],
    heights: [{ from: 2, toEdge: [0, 1], label: '5cm' }],
    caption: '底辺8cm・高さ5cmの三角形。面積は解答なので図には示さない。',
  },
  // 半径6cmの円（面積は解答なので示さない）。
  sx2_052: {
    kind: 'circle',
    radiusLabel: '6cm',
    caption: '半径6cmの円。面積は解答なので図には示さない。',
  },
  // 上底4cm・下底8cm・高さ6cmの台形（面積は解答なので示さない）。
  sx2_053: {
    kind: 'polygon',
    points: [
      { x: 2, y: 6, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 8, y: 0, label: 'C' },
      { x: 6, y: 6, label: 'D' },
    ],
    sideLabels: [null, '8cm', null, '4cm'],
    heights: [{ from: 0, toEdge: [1, 2], label: '6cm' }],
    caption: '台形ABCD（上底AD=4cm・下底BC=8cm・高さ6cm）。面積は解答なので図には示さない。',
  },
  // 対角線10cmと8cmのひし形（面積は解答なので示さない）。
  sx2_054: {
    kind: 'polygon',
    points: [
      { x: 5, y: 0, label: 'A' },
      { x: 0, y: 4, label: 'B' },
      { x: -5, y: 0, label: 'C' },
      { x: 0, y: -4, label: 'D' },
    ],
    sideLabels: [null, null, null, null],
    diagonals: [
      [0, 2],
      [1, 3],
    ],
    caption: 'ひし形ABCD（対角線AC=10cm、BD=8cm）。面積は解答なので図には示さない。',
  },
  // 半径4cmの半円（面積は解答なので示さない）。
  sx2_056: {
    kind: 'circle',
    radiusLabel: '4cm',
    sector: { from: 0, to: 180 },
    caption: '半径4cmの半円。面積は解答なので図には示さない。',
  },
  // 縦6cm・横10cmの長方形から底辺3cm・高さ4cmの三角形を切り取った図（残りの面積は解答）。
  sx2_057: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 7, y: 0 },
      { x: 10, y: 4 },
      { x: 10, y: 6 },
      { x: 0, y: 6 },
    ],
    sideLabels: [null, null, null, '10cm', '6cm'],
    caption: '縦6cm・横10cmの長方形から、底辺3cm・高さ4cmの三角形を切り取った図（切り取った部分の斜辺のみ表示）。残りの面積は解答なので図には示さない。',
  },
  // 直径14cmの円（円周は解答なので示さない）。
  sx2_058: {
    kind: 'circle',
    radiusLabel: '直径14cm',
    caption: '直径14cmの円。円周の長さは解答なので図には示さない。',
  },
  // 1辺10cmの正三角形（面積は解答なので示さない）。
  sx2_059: {
    kind: 'polygon',
    points: [
      { x: 0, y: 8.66, label: 'A' },
      { x: -5, y: 0, label: 'B' },
      { x: 5, y: 0, label: 'C' },
    ],
    sideLabels: ['10cm', null, null],
    equalSides: [[0, 1, 2]],
    caption: '1辺10cmの正三角形ABC。面積は解答なので図には示さない。',
  },
  // たて3cm・よこ4cm・高さ5cmの直方体（体積は解答なので示さない）。
  sx2_060: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '4cm', depth: '3cm', height: '5cm' },
    caption: '直方体（縦3cm・横4cm・高さ5cm）。体積は解答なので図には示さない。',
  },
  // 1辺4cmの立方体（表面積は解答なので示さない）。
  sx2_061: {
    kind: 'solid',
    shape: 'cube',
    labels: { width: '4cm', depth: '4cm', height: '4cm' },
    caption: '1辺4cmの立方体。表面積は解答なので図には示さない。',
  },
  // 底面半径3cm・高さ10cmの円柱（体積は解答なので示さない）。
  sx2_062: {
    kind: 'solid',
    shape: 'cylinder',
    labels: { radius: '3cm', height: '10cm' },
    caption: '底面の半径3cm・高さ10cmの円柱。体積は解答なので図には示さない。',
  },
  // 底辺6cm・高さ8cmの平行四辺形（面積は解答なので示さない）。
  sx2_063: {
    kind: 'polygon',
    points: [
      { x: 3, y: 8, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 6, y: 0, label: 'C' },
      { x: 9, y: 8, label: 'D' },
    ],
    sideLabels: [null, '6cm', null, null],
    heights: [{ from: 0, toEdge: [1, 2], label: '8cm' }],
    caption: '平行四辺形ABCD（底辺BC=6cm・高さ8cm）。面積は解答なので図には示さない。',
  },
  // 半径5cmの円の4分の1の扇形（面積は解答なので示さない）。
  sx2_064: {
    kind: 'circle',
    radiusLabel: '5cm',
    sector: { from: 0, to: 90 },
    caption: '半径5cmの円の4分の1の扇形。面積は解答なので図には示さない。',
  },
  // 縦4cm・横6cm・高さ3cmの直方体（表面積は解答なので示さない）。
  sx2_065: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '6cm', depth: '4cm', height: '3cm' },
    caption: '直方体（縦4cm・横6cm・高さ3cm）。表面積は解答なので図には示さない。',
  },
  // 二次関数 y=-x²+6x-5（上に凸）。x=0〜5の範囲。最大値・最小値は解答なので点は示さない。
  koko_sansu_ex_02_005: {
    kind: 'coordinate',
    xRange: [-1, 6],
    yRange: [-6, 6],
    parabolas: [{ a: -1, b: 6, c: -5 }],
    caption: 'x=0から5の範囲で考える。最大値・最小値は解答なので点は示さない。',
  },
  // 円周角∠ACB=40°（与えられた値）。中心角∠AOB・別の点Dから見た∠ADBは解答。
  koko_sansu_ex_02_009: {
    kind: 'circle',
    points: [
      { angle: 130, label: 'A' },
      { angle: 50, label: 'B' },
      { angle: 270, label: 'C' },
    ],
    chords: [[0, 1]],
    showCenter: true,
    caption: '点Cから見た円周角∠ACB=40°（与えられた値）。中心角∠AOB、別の点Dからの∠ADBは解答なので図には示さない。',
  },
  // △ABCでAB=7cm、BC=5cm、AC=6cm（すべて与えられた値）。∠Bの種類（鋭角/鈍角）は解答。
  koko_sansu_ex_02_014: {
    kind: 'polygon',
    points: [
      { x: 3.8, y: 5.88, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 5, y: 0, label: 'C' },
    ],
    sideLabels: ['7cm', '5cm', '6cm'],
    caption: '△ABC（AB=7cm、BC=5cm、AC=6cm）。∠Bが鋭角・鈍角・直角のいずれかは解答なので図には示さない。',
  },
  // ∠B=90°の直角三角形ABC（AB=3、BC=4）。BからACへの垂線の足H。AH・HC・BHは解答。
  koko_sansu_ex_02_023: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'B' },
      { x: 3, y: 0, label: 'A' },
      { x: 1.92, y: 1.44, label: 'H' },
      { x: 0, y: 4, label: 'C' },
    ],
    sideLabels: ['3cm', null, null, '4cm'],
    rightAngles: [0],
    diagonals: [[0, 2]],
    caption: '∠B=90°の直角三角形ABC（AB=3、BC=4）。BからACへの垂線の足がH（BH⊥AC）。AH・HC・BHは解答なので図には示さない。',
  },
  // 座標平面上の△ABC：A(1,4)、B(5,2)、C(3,-2)（すべて与えられた点）。面積は解答。
  koko_sansu_ex_02_024: {
    kind: 'coordinate',
    xRange: [-1, 7],
    yRange: [-4, 6],
    points: [
      { x: 1, y: 4, label: 'A(1, 4)' },
      { x: 5, y: 2, label: 'B(5, 2)' },
      { x: 3, y: -2, label: 'C(3, -2)' },
    ],
    polygon: [
      { x: 1, y: 4 },
      { x: 5, y: 2 },
      { x: 3, y: -2 },
    ],
    caption: '面積は解答なので数値は示さない。',
  },
  // 正三角形ABC（1辺6cm）、辺BC上の点P（BP=2cm）。APは解答なので図には示さない。
  koko_sansu_ex_02_025: {
    kind: 'polygon',
    points: [
      { x: 3, y: 5.2, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 2, y: 0, label: 'P' },
      { x: 6, y: 0, label: 'C' },
    ],
    sideLabels: ['6cm', '2cm', null, '6cm'],
    diagonals: [[0, 2]],
    caption: '正三角形ABC（1辺6cm）。BP=2cm（Pは辺BC上）。APは解答なので図には示さない。',
  },
  // 円に内接する四角形ABCD、∠A=75°（与えられた値）。∠C・∠D（∠B=110°与えられた値）は解答。
  koko_sansu_ex_02_026: {
    kind: 'circle',
    points: [
      { angle: 100, label: 'A' },
      { angle: 20, label: 'B' },
      { angle: 280, label: 'C' },
      { angle: 190, label: 'D' },
    ],
    chords: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
    ],
    caption: '円に内接する四角形ABCD。∠A=75°、∠B=110°（与えられた値）。∠C・∠Dは解答なので図には示さない。',
  },
  // 円Oの半径6cm、外部の点Pから接線PA=8cm。∠OAP=90°。OP・∠APOは解答。
  koko_sansu_ex_02_027: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'O' },
      { x: 6, y: 0, label: 'A' },
      { x: 6, y: 8, label: 'P' },
    ],
    sideLabels: ['6cm', '8cm', null],
    rightAngles: [1],
    caption: '円Oの半径6cm、接線PA=8cm（∠OAP=90°）。OP・∠APOは解答なので図には示さない。',
  },
  // 二等辺三角形ABC（AB=AC=5cm、BC=6cm）。∠ABCの二等分線とACの交点D。BDは解答。
  koko_sansu_ex_02_035: {
    kind: 'polygon',
    points: [
      { x: 3, y: 4, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 6, y: 0, label: 'C' },
      { x: 4.36, y: 2.18, label: 'D' },
    ],
    sideLabels: ['5cm', '6cm', null, null],
    diagonals: [[1, 3]],
    caption: '二等辺三角形ABC（AB=AC=5cm、BC=6cm）。∠ABCの二等分線とACの交点D（BDは解答なので図には示さない）。',
  },
  // 円の直径AB=12cm。弦CDはABに垂直に交わり交点E（AE=4cm）。EB・CE・CDは解答。
  koko_sansu_ex_02_036: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 4, y: 0, label: 'E' },
      { x: 12, y: 0, label: 'B' },
      { x: 4, y: 5.66, label: 'C' },
      { x: 4, y: -5.66, label: 'D' },
    ],
    sideLabels: ['4cm', null, null],
    diagonals: [
      [1, 3],
      [1, 4],
    ],
    caption: '円の直径AB=12cm。弦CDはABに垂直に交わり、交点はE（AE=4cm）。EB・CE・CDは解答なので図には示さない。',
  },
  // 円に内接する正六角形（頂点は60°間隔）。1辺=半径の証明、周長と円周の比を問う。
  koko_sansu_ex_02_038: {
    kind: 'circle',
    points: [
      { angle: 0, label: 'A' },
      { angle: 60, label: 'B' },
      { angle: 120, label: 'C' },
      { angle: 180, label: 'D' },
      { angle: 240, label: 'E' },
      { angle: 300, label: 'F' },
    ],
    chords: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 0],
    ],
    showCenter: true,
    caption: '円に内接する正六角形（頂点は60°間隔）。1辺と半径の関係、周長と円周の比を確認する。',
  },
  // △ABC：AB=6、BC=8、CA=10（すべて与えられた直角三角形）。CA上を動く点PでBP²最小、最小値・位置は解答。
  koko_sansu_ex_02_043: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'B' },
      { x: 6, y: 0, label: 'A' },
      { x: 0, y: 8, label: 'C' },
    ],
    sideLabels: ['6cm', null, '8cm'],
    rightAngles: [0],
    caption: '△ABC（AB=6、BC=8、CA=10、∠B=90°）。斜辺CA上の点Pを動かしたときのBP²の最小値・位置は解答なので図には示さない。',
  },
  // 円Oの弦AB・弦CDが円内の点Eで交わる（方べきの定理の証明、一般配置）。
  koko_sansu_ex_02_045: {
    kind: 'circle',
    points: [
      { angle: 150, label: 'A' },
      { angle: 30, label: 'B' },
      { angle: 100, label: 'C' },
      { angle: 280, label: 'D' },
    ],
    chords: [
      [0, 1],
      [2, 3],
    ],
    caption: '円Oの弦ABと弦CDが円内の点Eで交わる（方べきの定理 EA×EB=EC×ED の証明に使う配置）。',
  },
  // 二等辺三角形ABC（AB=AC、∠A=36°の黄金三角形）。∠B・∠C・BC上の点D・AB:BCの比は解答。
  koko_sansu_ex_02_050: {
    kind: 'polygon',
    points: [
      { x: 0, y: 9.51, label: 'A' },
      { x: -3.09, y: 0, label: 'B' },
      { x: 3.09, y: 0, label: 'C' },
    ],
    sideLabels: [null, null, null],
    equalSides: [[0, 2]],
    caption: '二等辺三角形ABC（AB=AC、∠A=36°の黄金三角形）。∠B・∠C、BC上の点D、AB:BCの比は解答なので図には示さない。',
  },
  // 二次関数 y=x²-4x+3（下に凸）。x=0〜4。頂点・最小値は解答なので示さない。
  koko_sansu_ex_11_002: {
    kind: 'coordinate',
    xRange: [-1, 5],
    yRange: [-2, 8],
    parabolas: [{ a: 1, b: -4, c: 3 }],
    caption: 'x=0から4の範囲で考える。頂点・最小値は解答なので点は示さない。',
  },
  // 四角形ABCDでAB=CD、AD=BC（平行四辺形であることの証明）。対角線ACが補助線。
  koko_sansu_ex_11_014: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 4, y: 0, label: 'B' },
      { x: 5, y: 3, label: 'C' },
      { x: 1, y: 3, label: 'D' },
    ],
    sideLabels: [null, null, null, null],
    equalSides: [
      [0, 2],
      [1, 3],
    ],
    diagonals: [[0, 2]],
    caption: '四角形ABCDでAB=CD、AD=BC。対角線ACを補助線として平行四辺形であることを証明する。',
  },
  // 直径ABの円周上の点P（タレスの定理：∠APB=90°の証明）。
  koko_sansu_ex_11_016: {
    kind: 'circle',
    points: [
      { angle: 0, label: 'A' },
      { angle: 180, label: 'B' },
      { angle: 60, label: 'P' },
    ],
    chords: [[0, 1]],
    showCenter: true,
    caption: '直径ABの円周上の点P。∠APB=90°であることを証明する（タレスの定理）。',
  },
  // 二等辺三角形ABC（AB=AC）。∠Aの二等分線とBCの交点M。∠ABC=∠ACBの証明。
  koko_sansu_ex_11_018: {
    kind: 'polygon',
    points: [
      { x: 0, y: 4, label: 'A' },
      { x: -3, y: 0, label: 'B' },
      { x: 0, y: 0, label: 'M' },
      { x: 3, y: 0, label: 'C' },
    ],
    sideLabels: [null, null, null, null],
    equalSides: [[0, 3]],
    diagonals: [[0, 2]],
    caption: '二等辺三角形ABC（AB=AC）。∠Aの二等分線とBCの交点M（証明の補助線）。',
  },
  // △ABCの外接円O（正弦定理 a/sinA=2R の証明に使う一般配置）。
  koko_sansu_ex_11_020: {
    kind: 'circle',
    points: [
      { angle: 100, label: 'A' },
      { angle: 200, label: 'B' },
      { angle: 340, label: 'C' },
    ],
    chords: [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    showCenter: true,
    caption: '△ABCの外接円O（半径R）。正弦定理 a/sinA=2R の証明に使う配置。',
  },
  // 平行四辺形ABCDの各辺の中点E,F,G,H。EFGHが平行四辺形になることの証明。
  koko_sansu_ex_11_022: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 3, y: 0, label: 'E' },
      { x: 6, y: 0, label: 'B' },
      { x: 7, y: 2, label: 'F' },
      { x: 8, y: 4, label: 'C' },
      { x: 5, y: 4, label: 'G' },
      { x: 2, y: 4, label: 'D' },
      { x: 1, y: 2, label: 'H' },
    ],
    sideLabels: [null, null, null, null, null, null, null, null],
    diagonals: [
      [1, 3],
      [3, 5],
      [5, 7],
      [7, 1],
    ],
    caption: '平行四辺形ABCDの各辺の中点E、F、G、H。四角形EFGHが平行四辺形になることを証明する。',
  },
  // 円Oの弦ABと弦CDが円内の点Pで交わる（方べきの定理の証明、一般配置）。
  koko_sansu_ex_11_026: {
    kind: 'circle',
    points: [
      { angle: 160, label: 'A' },
      { angle: 20, label: 'B' },
      { angle: 100, label: 'C' },
      { angle: 260, label: 'D' },
    ],
    chords: [
      [0, 1],
      [2, 3],
    ],
    caption: '円Oの弦ABと弦CDが円内の点Pで交わる（PA・PB=PC・PDの証明に使う配置）。',
  },
  // ∠B=90°の直角三角形ABC。BからACへの垂線の足H（三平方の定理の面積による証明）。
  koko_sansu_ex_11_028: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'B' },
      { x: 4, y: 0, label: 'A' },
      { x: 1.44, y: 1.08, label: 'H' },
      { x: 0, y: 3, label: 'C' },
    ],
    sideLabels: [null, null, null, null],
    rightAngles: [0],
    diagonals: [[0, 2]],
    caption: '∠B=90°の直角三角形ABCで、BからACへの垂線の足がH（三平方の定理の面積を用いた証明）。',
  },
  // △ABCでBC=a、∠A=60°、外接円半径R。正弦定理 R=a/√3 の証明。
  koko_sansu_ex_11_036: {
    kind: 'circle',
    points: [
      { angle: 100, label: 'A' },
      { angle: 210, label: 'B' },
      { angle: 330, label: 'C' },
    ],
    chords: [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    showCenter: true,
    caption: '△ABC（BC=a、∠A=60°）の外接円O（半径R）。正弦定理よりR=a/√3であることを証明する。',
  },
  // △ABC：a=5、b=6、c=7（すべて与えられた値）。ヘロンの公式で面積を求める（面積は解答）。
  koko_sansu_ex_11_038: {
    kind: 'polygon',
    points: [
      { x: 3.8, y: 5.88, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 5, y: 0, label: 'C' },
    ],
    sideLabels: ['7cm', '5cm', '6cm'],
    caption: '△ABC（c=AB=7、a=BC=5、b=CA=6）。ヘロンの公式で面積を求める（面積は解答なので図には示さない）。',
  },
  // 円に内接する四角形ABPC（Pは弧BC上、Aと反対側）。∠BAC+∠BPC=180°の証明。
  koko_sansu_ex_11_045: {
    kind: 'circle',
    points: [
      { angle: 100, label: 'A' },
      { angle: 20, label: 'B' },
      { angle: 200, label: 'P' },
      { angle: 280, label: 'C' },
    ],
    chords: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
    ],
    caption: '円に内接する四角形ABPC（Pは弧BC上、Aと反対側）。∠BAC+∠BPC=180°であることを証明する。',
  },
  // 三角形の内角の和（∠A=50°、∠B=70°、与えられた値）。∠Cは解答なので示さない。
  koko_sansu_ex_01_009: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 8, y: 0, label: 'B' },
      { x: 3, y: 5, label: 'C' },
    ],
    sideLabels: [null, null, null],
    caption: '△ABC（∠A=50°、∠B=70°、与えられた値）。∠Cは解答なので図には示さない。',
  },
  // 直角三角形（直角を挟む2辺6cm・8cm、与えられた値）。斜辺は解答なので示さない。
  koko_sansu_ex_01_010: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 6, y: 0, label: 'B' },
      { x: 0, y: 8, label: 'C' },
    ],
    sideLabels: ['6cm', null, '8cm'],
    rightAngles: [0],
    caption: '直角三角形（直角を挟む2辺6cm・8cm）。斜辺の長さは解答なので図には示さない。',
  },
  // 半径5cmの円（面積・円周は解答なので示さない）。
  koko_sansu_ex_01_011: {
    kind: 'circle',
    radiusLabel: '5cm',
    caption: '半径5cmの円。面積・円周の長さは解答なので図には示さない。',
  },
  // 底辺8cm・高さ6cmの三角形（面積・同じ面積の平行四辺形の高さは解答）。
  koko_sansu_ex_01_025: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 8, y: 0, label: 'B' },
      { x: 3, y: 6, label: 'C' },
    ],
    sideLabels: ['8cm', null, null],
    heights: [{ from: 2, toEdge: [0, 1], label: '6cm' }],
    caption: '底辺8cm・高さ6cmの三角形。面積、および同じ底辺・同じ面積の平行四辺形の高さは解答なので図には示さない。',
  },
  // 平行四辺形ABCDの対角線AC、BDが点Oで交わる。AO=5cm、BO=4cm（与えられた値）。AC・BDは解答。
  koko_sansu_ex_01_029: {
    kind: 'polygon',
    points: [
      { x: -5, y: 0, label: 'A' },
      { x: 0, y: -4, label: 'B' },
      { x: 5, y: 0, label: 'C' },
      { x: 0, y: 4, label: 'D' },
    ],
    sideLabels: [null, null, null, null],
    diagonals: [
      [0, 2],
      [1, 3],
    ],
    caption: '平行四辺形ABCDの対角線AC、BDが点Oで交わる。AO=5cm、BO=4cm（与えられた値）。AC・BDは解答なので図には示さない。',
  },
  // 一次関数 y=2x+1 と y=-x+7（両方とも与えられた式）。交点の座標は解答なので点は示さない。
  koko_sansu_ex_01_030: {
    kind: 'coordinate',
    xRange: [-2, 8],
    yRange: [-2, 10],
    lines: [
      { a: 2, b: 1 },
      { a: -1, b: 7 },
    ],
    caption: '2直線の交点の座標は解答なので点は示さない。',
  },
  // 円周角の定理：中心角∠AOB=80°（与えられた値）。円周角∠ACBは解答なので示さない。
  koko_sansu_ex_01_032: {
    kind: 'circle',
    points: [
      { angle: 130, label: 'A' },
      { angle: 50, label: 'B' },
      { angle: 270, label: 'C' },
    ],
    chords: [[0, 1]],
    showCenter: true,
    caption: '中心角∠AOB=80°（与えられた値）。円周角∠ACBは解答なので図には示さない。',
  },
  // 直方体（縦3cm・横4cm・高さ5cm、与えられた値）。体積・表面積・対角線は解答。
  koko_sansu_ex_01_034: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '4cm', depth: '3cm', height: '5cm' },
    caption: '直方体（縦3cm・横4cm・高さ5cm）。体積・表面積・対角線の長さは解答なので図には示さない。',
  },
  // 座標平面上の△ABC：A(0,4)、B(-2,0)、C(4,0)（すべて与えられた点）。面積・重心は解答。
  koko_sansu_ex_01_039: {
    kind: 'coordinate',
    xRange: [-4, 6],
    yRange: [-2, 6],
    points: [
      { x: 0, y: 4, label: 'A(0, 4)' },
      { x: -2, y: 0, label: 'B(-2, 0)' },
      { x: 4, y: 0, label: 'C(4, 0)' },
    ],
    polygon: [
      { x: 0, y: 4 },
      { x: -2, y: 0 },
      { x: 4, y: 0 },
    ],
    caption: '面積・重心の座標は解答なので数値は示さない。',
  },
  // 正六角形（1辺4cm、与えられた値）。面積は解答なので示さない。
  koko_sansu_ex_01_045: {
    kind: 'polygon',
    points: [
      { x: 4, y: 0 },
      { x: 2, y: 3.46 },
      { x: -2, y: 3.46 },
      { x: -4, y: 0 },
      { x: -2, y: -3.46 },
      { x: 2, y: -3.46 },
    ],
    sideLabels: ['4cm', null, null, null, null, null],
    equalSides: [[0, 1, 2, 3, 4, 5]],
    caption: '正六角形（1辺4cm）。面積は解答なので図には示さない。',
  },
  // 円に内接する四角形ABCD、∠A=75°（与えられた値）。∠C、∠B+∠Dは解答。
  koko_sansu_ex_01_047: {
    kind: 'circle',
    points: [
      { angle: 100, label: 'A' },
      { angle: 20, label: 'B' },
      { angle: 280, label: 'C' },
      { angle: 190, label: 'D' },
    ],
    chords: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
    ],
    caption: '円に内接する四角形ABCD。∠A=75°（与えられた値）。∠C、∠B+∠Dは解答なので図には示さない。',
  },
  // 座標平面上の2点A(1,5)、B(5,-3)（与えられた点）。中点M・ABの長さは解答。
  koko_sansu_ex_01_049: {
    kind: 'coordinate',
    xRange: [-1, 7],
    yRange: [-5, 7],
    points: [
      { x: 1, y: 5, label: 'A(1, 5)' },
      { x: 5, y: -3, label: 'B(5, -3)' },
    ],
    segments: [
      [
        { x: 1, y: 5 },
        { x: 5, y: -3 },
      ],
    ],
    caption: '中点Mの座標、ABの長さは解答なので示さない。',
  },
  // 一次関数 y=3x-2 と二次関数 y=x²（両方とも与えられた式）。交点は解答なので点は示さない。
  koko_sansu_ex_01_050: {
    kind: 'coordinate',
    xRange: [-3, 4],
    yRange: [-6, 10],
    lines: [{ a: 3, b: -2 }],
    parabolas: [{ a: 1 }],
    caption: '交点の座標、交点を結ぶ線分の長さは解答なので点や数値は示さない。',
  },
  // 直角三角形（斜辺13cm・1辺5cm、与えられた値）。もう1辺は解答なので示さない。
  koko_sansu_ex_15_004: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 5, y: 0, label: 'B' },
      { x: 5, y: 12, label: 'C' },
    ],
    sideLabels: ['5cm', null, '13cm'],
    rightAngles: [1],
    caption: '直角三角形（斜辺13cm・1辺5cm）。もう1辺の長さは解答なので図には示さない。',
  },
  // 45°-45°-90°の直角二等辺三角形（斜辺6√2cm、与えられた値）。他の2辺は解答（等しい2辺）。
  koko_sansu_ex_15_005: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 6, y: 0, label: 'B' },
      { x: 0, y: 6, label: 'C' },
    ],
    sideLabels: [null, '6√2cm', null],
    rightAngles: [0],
    equalSides: [[0, 2]],
    caption: '45°-45°-90°の直角二等辺三角形（斜辺6√2cm）。他の2辺（等しい）は解答なので図には示さない。',
  },
  // 座標A(1,2)とB(4,6)（与えられた点）。距離は解答なので示さない。
  koko_sansu_ex_15_011: {
    kind: 'coordinate',
    xRange: [-1, 6],
    yRange: [-1, 8],
    points: [
      { x: 1, y: 2, label: 'A(1, 2)' },
      { x: 4, y: 6, label: 'B(4, 6)' },
    ],
    segments: [
      [
        { x: 1, y: 2 },
        { x: 4, y: 6 },
      ],
    ],
    caption: 'ABの距離は解答なので数値は示さない。',
  },
  // 30°-60°-90°の直角三角形、最短辺5cm（与えられた値）。他の2辺は解答なので示さない。
  koko_sansu_ex_15_014: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 8.66, y: 0, label: 'B' },
      { x: 0, y: 5, label: 'C' },
    ],
    sideLabels: [null, null, '5cm'],
    rightAngles: [0],
    caption: '30°-60°-90°の直角三角形（最短辺5cm）。他の2辺は解答なので図には示さない。',
  },
  // 放物線 y=x²-4x+1（与えられた式）。x軸との交点・距離は解答なので点は示さない。
  koko_sansu_ex_15_020: {
    kind: 'coordinate',
    xRange: [-1, 5],
    yRange: [-4, 4],
    parabolas: [{ a: 1, b: -4, c: 1 }],
    caption: 'x軸との交点のx座標、2点間の距離は解答なので点は示さない。',
  },
  // 円Oの半径3cm、点PからOP=5cm。接線PTの長さは解答なので示さない。
  koko_sansu_ex_15_027: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'O' },
      { x: 3, y: 0, label: 'T' },
      { x: 3, y: 4, label: 'P' },
    ],
    sideLabels: ['3cm', null, '5cm'],
    rightAngles: [1],
    caption: '円Oの半径3cm、OP=5cm（∠OTP=90°）。接線PTの長さは解答なので図には示さない。',
  },
  // 立方体（1辺6cm、与えられた値）。対角線・断面の正六角形の面積は解答。
  koko_sansu_ex_15_028: {
    kind: 'solid',
    shape: 'cube',
    labels: { width: '6cm', depth: '6cm', height: '6cm' },
    caption: '1辺6cmの立方体。対角線の長さ、頂点から対面の頂点を通る断面（正六角形）の面積は解答なので図には示さない。',
  },
  // 座標A(2,1)、B(6,5)（与えられた点）。3:1に内分する点Pの座標は解答。
  koko_sansu_ex_15_031: {
    kind: 'coordinate',
    xRange: [0, 8],
    yRange: [0, 7],
    points: [
      { x: 2, y: 1, label: 'A(2, 1)' },
      { x: 6, y: 5, label: 'B(6, 5)' },
    ],
    segments: [
      [
        { x: 2, y: 1 },
        { x: 6, y: 5 },
      ],
    ],
    caption: '線分ABを3:1に内分する点Pの座標は解答なので点は示さない。',
  },
  // 円 x²+y²=25 上の点(3,4)（与えられた点）。接線の方程式は解答なので示さない。
  koko_sansu_ex_15_034: {
    kind: 'circle',
    points: [{ angle: 53.13, label: '(3, 4)' }],
    radiusLabel: 'x² + y² = 25',
    caption: '円 x²+y²=25 上の点(3, 4)。この点における接線の方程式は解答なので図には示さない。',
  },
  // 底辺8cm・高さ6cmの三角形と、同じ面積の平行四辺形（既出パターン、△ABC用）。
  koko_kankan_sansu_b_06: {
    kind: 'coordinate',
    xRange: [-1, 4],
    yRange: [-6, 8],
    lines: [{ a: -3, b: 5 }],
    caption: '一次関数 y=-3x+5（与えられた式）。x=2のときのy、y=-1のときのx、傾き・切片は解答なので追加の点は示さない。',
  },
  // 平行四辺形ABCD、AB=8cm、AD=5cm、∠ABC=60°（すべて与えられた値）。∠ADC・∠BAD・BCは解答。
  koko_kankan_sansu_b_07: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 8, y: 0, label: 'B' },
      { x: 5.5, y: 4.33, label: 'C' },
      { x: -2.5, y: 4.33, label: 'D' },
    ],
    sideLabels: ['8cm', null, null, '5cm'],
    caption: '平行四辺形ABCD、AB=8cm、AD=5cm、∠ABC=60°（与えられた値）。∠ADC・∠BAD・BCは解答なので図には示さない。',
  },
  // 底面半径3cm・高さ8cmの円柱（与えられた値）。体積・側面積・表面積は解答。
  koko_kankan_sansu_b_12: {
    kind: 'solid',
    shape: 'cylinder',
    labels: { radius: '3cm', height: '8cm' },
    caption: '底面の半径3cm・高さ8cmの円柱。体積・側面積・表面積は解答なので図には示さない。',
  },
  // 三角形ABC：AB=5cm、BC=12cm、∠ABC=90°（与えられた値）。AC・面積・垂線の長さは解答。
  koko_kankan_sansu_b_14: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'B' },
      { x: 5, y: 0, label: 'A' },
      { x: 0, y: 12, label: 'C' },
    ],
    sideLabels: ['5cm', null, '12cm'],
    rightAngles: [0],
    caption: '△ABC（AB=5cm、BC=12cm、∠ABC=90°）。AC、面積、BからACへの垂線の長さは解答なので図には示さない。',
  },
  // 座標平面上の点A(2,6)、B(5,0)、C(-1,0)（すべて与えられた点）。直線AB・面積・垂線の足Hは解答。
  koko_kankan_sansu_b_20: {
    kind: 'coordinate',
    xRange: [-3, 7],
    yRange: [-1, 8],
    points: [
      { x: 2, y: 6, label: 'A(2, 6)' },
      { x: 5, y: 0, label: 'B(5, 0)' },
      { x: -1, y: 0, label: 'C(-1, 0)' },
    ],
    polygon: [
      { x: 2, y: 6 },
      { x: 5, y: 0 },
      { x: -1, y: 0 },
    ],
    caption: '直線ABの方程式、△ABCの面積、頂点Aから辺BCへの垂線の足Hの座標は解答なので追加の点や数値は示さない。',
  },
  // 円Oの弦ABに対する中心角∠AOB=100°（与えられた値）。円周角∠ACBは解答。
  koko_kankan_sansu_b_23: {
    kind: 'circle',
    points: [
      { angle: 140, label: 'A' },
      { angle: 40, label: 'B' },
      { angle: 270, label: 'C' },
    ],
    chords: [[0, 1]],
    showCenter: true,
    caption: '弦ABに対する中心角∠AOB=100°（与えられた値）。円周角∠ACBは解答なので図には示さない（∠AOB=180°の場合の考察も別途）。',
  },
  // 二等辺三角形ABC（AB=AC=5cm、BC=6cm、与えられた値）。高さ・面積・内接円半径は解答。
  koko_kankan_sansu_b_25: {
    kind: 'polygon',
    points: [
      { x: 0, y: 4, label: 'A' },
      { x: -3, y: 0, label: 'B' },
      { x: 3, y: 0, label: 'C' },
    ],
    sideLabels: [null, '6cm', null],
    equalSides: [[0, 2]],
    caption: '二等辺三角形ABC（AB=AC=5cm、BC=6cm）。頂点Aからの高さ・面積・内接円の半径rは解答なので図には示さない。',
  },
  // 放物線y=x²上の2点A(-2,4)、B(3,9)（両方とも与えられた点）。直線ABと軸で囲む面積は解答。
  koko_kankan_sansu_b_27: {
    kind: 'coordinate',
    xRange: [-4, 5],
    yRange: [-2, 10],
    parabolas: [{ a: 1 }],
    points: [
      { x: -2, y: 4, label: 'A(-2, 4)' },
      { x: 3, y: 9, label: 'B(3, 9)' },
    ],
    segments: [
      [
        { x: -2, y: 4 },
        { x: 3, y: 9 },
      ],
    ],
    caption: '直線ABとx軸・y軸で囲まれた三角形の面積は解答なので追加の点は示さない。',
  },
  // 正十角形（頂点10個）。対角線の本数・3点を選んでできる三角形の個数は解答（図は形のみ）。
  koko_kankan_sansu_c3_25: {
    kind: 'polygon',
    points: [
      { x: 5, y: 0 },
      { x: 4.05, y: 2.94 },
      { x: 1.55, y: 4.76 },
      { x: -1.55, y: 4.76 },
      { x: -4.05, y: 2.94 },
      { x: -5, y: 0 },
      { x: -4.05, y: -2.94 },
      { x: -1.55, y: -4.76 },
      { x: 1.55, y: -4.76 },
      { x: 4.05, y: -2.94 },
    ],
    sideLabels: [null, null, null, null, null, null, null, null, null, null],
    caption: '正十角形（頂点10個）。対角線の本数・3点を選んでできる三角形の個数は解答なので図には示さない（図は十角形の形のみ）。',
  },
};
