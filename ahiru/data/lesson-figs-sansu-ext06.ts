// 中学受験 算数「V. 立体図形」拡張ユニット（sansu_s196〜sansu_s240、45セッション）の動く図解。
// lesson-figures.ts から ...lessonFigsSansuExt06 の形でマージして使う想定（このファイル単体では未登録）。

import type { Figure } from './figures';

export const lessonFigsSansuExt06: Record<string, Figure> = {
  // ===== 1. 立体の基本（角柱・円柱の体積・表面積） =====

  // s196: 三角柱の体積
  lf_sansu_ext06_01: {
    kind: 'solid',
    shape: 'triangularPrism',
    labels: { width: '6cm', depth: '4cm', height: '10cm' },
    caption: '底面は直角をはさむ辺が6cm・4cmの直角三角形（面積12cm²）。柱の長さ10cm。体積＝12×10＝120cm³',
  },

  // s197: 円柱の体積
  lf_sansu_ext06_02: {
    kind: 'solid',
    shape: 'cylinder',
    labels: { radius: '半径3cm', height: '高さ8cm' },
    caption: '半径3cm・高さ8cmの円柱。体積＝3×3×3.14×8＝226.08cm³',
  },

  // s198: 角柱（直方体）の表面積・展開図
  lf_sansu_ext06_03: {
    kind: 'net',
    shape: 'cuboid',
    dims: { w: '4cm', d: '3cm', h: '5cm' },
    caption: 'たて3cm・よこ4cm・高さ5cmの直方体の展開図。表面積＝(3×4＋4×5＋3×5)×2＝94cm²',
  },

  // s199: 円柱の表面積
  lf_sansu_ext06_04: {
    kind: 'solid',
    shape: 'cylinder',
    labels: { radius: '半径5cm', height: '高さ10cm' },
    caption: '底面積157cm²（半径5cm×2枚）＋側面積314cm²（直径10cm×3.14×高さ10cm）＝表面積471cm²',
  },

  // s200: 円柱の側面積 vs 表面積
  lf_sansu_ext06_05: {
    kind: 'solid',
    shape: 'cylinder',
    labels: { radius: '半径4cm', height: '高さ6cm' },
    caption: '側面積＝150.72cm²（直径8cm×3.14×高さ6cm）。表面積はこれに底面2枚分(100.48cm²)を足して251.2cm²',
  },

  // s201: 角柱・円柱の複合（L字型柱体）
  lf_sansu_ext06_06: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '8cm', depth: '6cm', height: '5cm' },
    caption: '底面はよこ8cm・たて6cmの長方形から、角の4cm×3cmを切り取ったL字型（面積36cm²）。柱の高さ5cm。体積＝36×5＝180cm³',
  },

  // ===== 2. 角錐・円錐の体積・表面積 =====

  // s203: 円すいの体積
  lf_sansu_ext06_07: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '半径3cm', height: '高さ12cm' },
    caption: '半径3cm・高さ12cmの円すい。体積＝3×3×3.14×12÷3＝113.04cm³',
  },

  // s204: 円すいの表面積
  lf_sansu_ext06_08: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '半径4cm', slant: '母線5cm' },
    caption: '側面積＝5×4×3.14＝62.8cm²。底面積＝4×4×3.14＝50.24cm²。表面積＝113.04cm²',
  },

  // s205: 円すいの側面のおうぎ形の中心角
  lf_sansu_ext06_09: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '半径2cm', slant: '母線6cm' },
    caption: '中心角＝360×半径÷母線＝360×2÷6＝120°',
  },

  // s207: すい体は柱体の1/3（円柱と円すいの比較）
  lf_sansu_ext06_10: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '半径3cm', height: '高さ9cm' },
    caption: '同じ底面・高さの円柱の体積は254.34cm³。円すいはその1/3で84.78cm³',
  },

  // ===== 3. 展開図 =====

  // s208: 立方体の展開図の基本（向かい合う面の見分け方）
  lf_sansu_ext06_11: {
    kind: 'net',
    shape: 'cube',
    faceLabels: ['あ', 'い', 'う', 'え', 'お', 'か'],
    caption: '十字型の展開図：縦に並んだ列は1つ飛ばし（あ⇔う、い⇔え）、左右の羽（お・か）が向かい合う',
  },

  // s209: 直方体の展開図
  lf_sansu_ext06_12: {
    kind: 'net',
    shape: 'cuboid',
    dims: { w: '5cm', d: '3cm', h: '4cm' },
    caption: 'たて3cm・よこ5cm・高さ4cmの直方体の展開図。表面積＝(3×5＋5×4＋3×4)×2＝94cm²',
  },

  // s210: サイコロ型の展開図（向かい合う面の判定）
  lf_sansu_ext06_13: {
    kind: 'net',
    shape: 'cube',
    faceLabels: ['あ', 'い', 'う', 'え', 'お', 'か'],
    caption: '縦の列「あ・い・う・え」のうち、1つ飛ばしの「い」と「え」が組み立てると向かい合う面になる',
  },

  // s211: 円柱の展開図
  lf_sansu_ext06_14: {
    kind: 'solid',
    shape: 'cylinder',
    labels: { radius: '半径2cm', height: '高さ7cm' },
    caption: '側面の長方形はよこ12.56cm（直径4cm×3.14）・たて7cm。表面積＝87.92＋25.12＝113.04cm²',
  },

  // s212: 円すいの展開図（側面のおうぎ形の中心角）
  lf_sansu_ext06_15: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '半径3cm', slant: '母線9cm' },
    caption: '展開図の側面はおうぎ形（半径＝母線9cm）。中心角＝360×3÷9＝120°',
  },

  // ===== 4. 立体の切断 =====

  // s214: 立方体の切断の基本原則（頂点を切り落とす）
  lf_sansu_ext06_16: {
    kind: 'solid',
    shape: 'cube',
    labels: { width: '6cm' },
    caption: '各辺の中点（頂点から3cm）を通る平面で頂点を切り落とす。切り落とす三角すいの体積＝(3×3÷2)×3÷3＝4.5cm³',
  },

  // s215: 直方体の対角線切断
  lf_sansu_ext06_17: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '6cm', depth: '4cm', height: '8cm' },
    caption: 'たて4cm・よこ6cm・高さ8cmの直方体（体積192cm³）を対角線を含む面で切ると、96cm³ずつの三角柱2つに分かれる',
  },

  // s216: 立方体の切断で正六角形になるケース
  lf_sansu_ext06_18: {
    kind: 'polygon',
    points: [
      { x: 2, y: 0, label: 'P' },
      { x: 4, y: 0, label: 'Q' },
      { x: 6, y: 2, label: 'R' },
      { x: 4, y: 4, label: 'S' },
      { x: 2, y: 4, label: 'T' },
      { x: 0, y: 2, label: 'U' },
    ],
    fill: true,
    caption: '1辺8cmの立方体の各辺の中点を通る平面の切り口は正六角形PQRSTU。体積はちょうど半分（512÷2＝256cm³）に分かれる',
  },

  // s217: 円すいの切断と相似（体積比）
  lf_sansu_ext06_19: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '半径6cm', height: '高さ15cm' },
    caption: '頂点から5cmで切ると、上部の相似な円すいとの相似比は5:15＝1:3。体積比は1³:3³＝1:27',
  },

  // s218: 円すい台の体積
  lf_sansu_ext06_20: {
    kind: 'solid',
    shape: 'cone',
    labels: { height: '高さ18cm' },
    caption: '体積486cm³の円すいを頂点から6cmで切ると、上部の小さい円すい（相似比1:3、体積486÷27＝18cm³）を除いた円すい台は486－18＝468cm³',
  },

  // s219: 頂点を含む三角すいの体積
  lf_sansu_ext06_21: {
    kind: 'solid',
    shape: 'cube',
    labels: { width: '12cm' },
    caption: '各辺の中点（頂点から6cm）を通る平面で頂点を切り落とす。三角すいの体積＝(6×6÷2)×6÷3＝36cm³',
  },

  // s220: 複数回切断（立方体を2回水平に切る）
  lf_sansu_ext06_22: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '12cm', depth: '12cm', height: '12cm' },
    caption: '1辺12cmの立方体（体積1728cm³）を高さ4cm・3cmの位置で2回水平に切ると、576cm³・432cm³・720cm³の3つの直方体に分かれる',
  },

  // ===== 5. 水そう問題 =====

  // s221: 水そうの基本
  lf_sansu_ext06_23: {
    kind: 'lineChart',
    xLabel: '時間（分）',
    yLabel: '水の深さ（cm）',
    series: [
      {
        label: '水位',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 10, y: 20 },
        ],
      },
    ],
    caption: '底面積25cm²の水そうに毎分50cm³で注水。10分後の深さ＝(50×10)÷25＝20cm',
  },

  // s222: おもりを沈める水そう問題
  lf_sansu_ext06_24: {
    kind: 'lineChart',
    xLabel: '時間（分）',
    yLabel: '水の深さ（cm）',
    series: [
      {
        label: '水位',
        markers: true,
        points: [
          { x: 0, y: 15 },
          { x: 1, y: 22.5 },
          { x: 5, y: 22.5 },
        ],
      },
    ],
    caption: '底面積40cm²、深さ15cmの水そうに体積300cm³のおもりを沈めると、水位は300÷40＝7.5cm上がり22.5cmになる',
  },

  // s223: 給水と排水が同時にある水そう
  lf_sansu_ext06_25: {
    kind: 'lineChart',
    xLabel: '時間（分）',
    yLabel: '水位の上昇（cm）',
    series: [
      {
        label: '水位の上昇',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 5, y: 25 },
        ],
      },
    ],
    caption: '底面積40cm²に毎分280cm³で給水しながら毎分80cm³で排水。正味毎分200cm³、5分後の上昇＝(200×5)÷40＝25cm',
  },

  // s224: 仕切りのある水そう
  lf_sansu_ext06_26: {
    kind: 'lineChart',
    xLabel: '時間（分）',
    yLabel: '水位（cm）',
    series: [
      {
        label: '水位',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 2.4, y: 12 },
          { x: 3.9, y: 15 },
        ],
      },
    ],
    caption: '左側（底面積20cm²・仕切りの高さ12cm）に毎分100cm³で注水。仕切りを超えたあとは底面積50cm²（左右合計）で水位が上昇する',
  },

  // s225: 段差のある水そう
  lf_sansu_ext06_27: {
    kind: 'lineChart',
    xLabel: '時間（分）',
    yLabel: '水位（cm）',
    series: [
      {
        label: '水位',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 6, y: 10 },
          { x: 16, y: 20 },
        ],
      },
    ],
    caption: '下半分（底面積30cm²）は毎分50cm³で6分、上半分（底面積50cm²）はさらに10分。満水（高さ20cm）まで合計16分',
  },

  // s226: 水そうを傾ける問題
  lf_sansu_ext06_28: {
    kind: 'solid',
    shape: 'triangularPrism',
    labels: { width: '20cm', depth: '15cm', height: '30cm' },
    caption: '傾けて残った水は断面が底辺20cm・高さ15cmの直角三角形（面積150cm²）の三角柱。奥行き30cm。体積＝150×30＝4500cm³',
  },

  // s227: グラフから水そうの形を復元する
  lf_sansu_ext06_29: {
    kind: 'lineChart',
    xLabel: '時間（分）',
    yLabel: '水位（cm）',
    series: [
      {
        label: '水位',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 4, y: 20 },
          { x: 10, y: 32 },
        ],
      },
    ],
    caption: '毎分200cm³で注水。4〜10分（6分間）で水位が20→32cm（12cm上昇）→底面積＝(200×6)÷12＝100cm²',
  },

  // ===== 6. 回転体 =====

  // s228: 回転体の基本（長方形→円柱）
  lf_sansu_ext06_30: {
    kind: 'solid',
    shape: 'cylinder',
    labels: { radius: '半径5cm', height: '高さ3cm' },
    caption: 'たて5cm・よこ3cmの長方形をよこの辺（軸）で回転→半径5cm・高さ3cmの円柱。体積＝5×5×3.14×3＝235.5cm³',
  },

  // s229: 回転体（直角三角形→円すい）
  lf_sansu_ext06_31: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '半径4cm', height: '高さ9cm' },
    caption: '底辺4cm・高さ9cmの直角三角形を高さの辺（軸）で回転→円すい。体積＝4×4×3.14×9÷3＝150.72cm³',
  },

  // s230: 台形の回転体（円すい台）
  lf_sansu_ext06_32: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 6, y: 0, label: 'B' },
      { x: 3, y: 8, label: 'C' },
      { x: 0, y: 8, label: 'D' },
    ],
    sideLabels: ['6cm', null, '3cm', '8cm(軸)'],
    rightAngles: [0, 3],
    caption: '上底3cm・下底6cm・高さ8cmの直角台形DABCを、辺DA（軸）で回転させると円すい台ができる。体積＝602.88－75.36＝527.52cm³',
  },

  // s231: L字型の回転体
  lf_sansu_ext06_33: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 5, y: 0, label: 'B' },
      { x: 5, y: 3, label: 'C' },
      { x: 2, y: 3, label: 'D' },
      { x: 2, y: 10, label: 'E' },
      { x: 0, y: 10, label: 'F' },
    ],
    sideLabels: ['5cm', '3cm', null, '7cm', null, '10cm(軸)'],
    rightAngles: [0, 1, 2, 4, 5],
    caption: '辺FA（軸）で回転させると、半径2cm・高さ7cmの円柱の下に半径5cm・高さ3cmの円柱がついた形になる。体積＝87.92＋235.5＝323.42cm³',
  },

  // s232: 軸から離れた図形の回転体（パイプ状）
  lf_sansu_ext06_34: {
    kind: 'polygon',
    points: [
      { x: 2, y: 0, label: 'A' },
      { x: 5, y: 0, label: 'B' },
      { x: 5, y: 4, label: 'C' },
      { x: 2, y: 4, label: 'D' },
    ],
    sideLabels: ['3cm', '4cm', null, null],
    caption: '軸（x＝0、Aの左2cm）から離れたたて3cm・よこ4cmの長方形を回転→外側半径5cm・内側半径2cm・高さ4cmのパイプ状の立体。体積＝314－50.24＝263.76cm³',
  },

  // ===== 7. 立体の複合問題 =====

  // s233: くりぬかれた立体
  lf_sansu_ext06_35: {
    kind: 'solid',
    shape: 'cube',
    labels: { width: '9cm' },
    caption: '1辺9cmの立方体（表面積486cm²）に1辺3cmの正方形の穴を貫通。体積＝729－81＝648cm³、表面積＝486－18＋108＝576cm²',
  },

  // s235: 円すいと半球の複合立体
  lf_sansu_ext06_36: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '半径3cm', height: '高さ4cm' },
    caption: '半径3cm・高さ4cmの円すい（37.68cm³）の上に半径3cmの半球（56.52cm³）がのった形。体積＝37.68＋56.52＝94.2cm³',
  },

  // s236: 展開図を使った表面上の最短距離
  lf_sansu_ext06_37: {
    kind: 'net',
    shape: 'cuboid',
    dims: { w: '3cm', d: '6cm', h: '5cm' },
    caption: 'たて6cm・よこ3cm・高さ5cmの直方体。展開図上で6cmの辺と(3＋5＝)8cmの辺を組み合わせた直角三角形の斜辺＝√(6²＋8²)＝10cmが表面上の最短距離',
  },

  // ===== 8. 影の問題 =====

  // s237: 影の基本（点光源）
  lf_sansu_ext06_38: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: '街灯の底' },
      { x: 12.8, y: 0, label: '影の先端' },
      { x: 0, y: 4, label: '街灯(4m)' },
    ],
    sideLabels: ['12.8m', null, '4m'],
    rightAngles: [0],
    caption: '高さ4mの街灯から8m離れた高さ1.5mの人の影の長さ。街灯の底から影の先端までの距離＝12.8m、影の長さ＝12.8－8＝4.8m',
  },

  // s238: 棒の影の長さ（平行光線）
  lf_sansu_ext06_39: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: '棒の底' },
      { x: 5, y: 0, label: '影の先端' },
      { x: 0, y: 3, label: '棒(3m)' },
    ],
    sideLabels: ['5m', null, '3m'],
    rightAngles: [0],
    caption: '太陽光（平行光線）では高さの比＝影の長さの比。棒(高さ3m・影5m)と同じ倍率で、高さ15mの木の影は3:5＝15:x→x＝25m',
  },

  // s239: 街灯の高さを逆算する
  lf_sansu_ext06_40: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: '街灯の底' },
      { x: 9, y: 0, label: '影の先端' },
      { x: 0, y: 4.5, label: '街灯(?m)' },
    ],
    sideLabels: ['9m', null, '4.5m'],
    rightAngles: [0],
    caption: '街灯から5m離れた高さ2mの棒の影の先端が、街灯から9mの位置にできた。街灯の高さ＝9×2÷(9－5)＝4.5m',
  },

  // s240: 光源が動くときの影の変化
  lf_sansu_ext06_41: {
    kind: 'lineChart',
    xLabel: '街灯と棒の距離d（m）',
    yLabel: '影の長さ（m）',
    series: [
      {
        label: '影の長さ＝d',
        markers: true,
        points: [
          { x: 2, y: 2 },
          { x: 4, y: 4 },
          { x: 6, y: 6 },
          { x: 8, y: 8 },
        ],
      },
    ],
    caption: '高さ6mの街灯と高さ3mの棒（高さの比2:1）の間では、影の長さは常に街灯と棒の距離dに等しくなる',
  },
};
