import type { Figure } from './figures';

// IV-B. 平面図形 後半（移動・折り返し・重なり・比・総合演習）図解バッチ
// キーは lessons-sansu-ext05.ts の figureId と対応。
export const lessonFigsSansuExt05: Record<string, Figure> = {
  // ===== sansu_s161 平行移動の基本と作図 =====
  lf_ext05_161: {
    kind: 'coordinate',
    xRange: [-0.5, 10],
    yRange: [-0.5, 6],
    segments: [
      [{ x: 0, y: 0 }, { x: 4, y: 0 }],
      [{ x: 4, y: 0 }, { x: 1, y: 3 }],
      [{ x: 1, y: 3 }, { x: 0, y: 0 }],
      [{ x: 5, y: 2 }, { x: 9, y: 2 }],
      [{ x: 9, y: 2 }, { x: 6, y: 5 }],
      [{ x: 6, y: 5 }, { x: 5, y: 2 }],
    ],
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 4, y: 0, label: 'B' },
      { x: 1, y: 3, label: 'C' },
      { x: 5, y: 2, label: "A'" },
      { x: 9, y: 2, label: "B'" },
      { x: 6, y: 5, label: "C'" },
    ],
    caption: '三角形ABCを右に5・上に2平行移動すると三角形A\'B\'C\'になる。AB=A\'B\'=4、AC=A\'C\'=√10、BC=B\'C\'=√18で対応する辺の長さは変わらない',
  },

  // ===== sansu_s162 図形の折り返し・対称移動（線対称）の基本と作図 =====
  lf_ext05_162: {
    kind: 'coordinate',
    xRange: [-3, 7],
    yRange: [-1.5, 6],
    segments: [
      [{ x: 2, y: -1 }, { x: 2, y: 6 }],
      [{ x: 5, y: 3 }, { x: -1, y: 3 }],
    ],
    points: [
      { x: 5, y: 3, label: 'A(5,3)' },
      { x: -1, y: 3, label: "A'(-1,3)" },
    ],
    caption: '直線x=2を対称の軸として点A(5,3)を線対称移動すると、軸からの距離3が保たれA\'(-1,3)になる（原点対称の公式「符号を反転」がそのまま使えるのはx=0のときだけ）',
  },

  // ===== sansu_s163 対称移動（点対称）の基本と作図 =====
  lf_ext05_163: {
    kind: 'coordinate',
    xRange: [-3, 7],
    yRange: [-3, 7],
    segments: [
      [{ x: 5, y: 6 }, { x: 1, y: -2 }],
    ],
    points: [
      { x: 3, y: 2, label: 'M' },
      { x: 5, y: 6, label: 'A(5,6)' },
      { x: 1, y: -2, label: "A'(1,-2)" },
    ],
    caption: '点Mを対称の中心として点A(5,6)を点対称移動すると、Mが線分AA\'の中点になるようにA\'(1,-2)へ移る（中心が原点でないので座標の符号を反転するだけでは求められない）',
  },

  // ===== sansu_s164 回転移動の基本 =====
  lf_ext05_164: {
    kind: 'circle',
    showCenter: true,
    radiusLabel: '6cm',
    points: [
      { angle: 0, label: 'P' },
      { angle: 90, label: "P'" },
    ],
    chords: [[0, 1]],
    sector: { from: 0, to: 90 },
    caption: '点Pを中心Oのまわりに90°回転させると点P\'に移る。OP=OP\'=6cm（半径は変わらない）。Pが動いた弧の長さは6×2×3.14×90/360=9.42cm',
  },

  // ===== sansu_s165 移動と角度・長さの決定問題 =====
  lf_ext05_165: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 5, y: 0, label: 'B' },
      { x: 2.5, y: 4.330127, label: "B'" },
    ],
    sideLabels: ['5cm', '5cm', '5cm'],
    equalSides: [[0, 1, 2]],
    equalAngles: [[0]],
    caption: '1辺5cmの正三角形ABCを頂点Aを中心に60°回転させるとBはB\'に移る。AB=AB\'=5cm、∠BAB\'=60°より三角形ABB\'は正三角形になりBB\'=5cm',
  },

  // ===== sansu_s166 移動の総合問題（3種の移動の判別） =====
  lf_ext05_166: {
    kind: 'coordinate',
    xRange: [-1, 10],
    yRange: [-1, 5],
    segments: [
      [{ x: 0, y: 0 }, { x: 4, y: 0 }],
      [{ x: 4, y: 0 }, { x: 0, y: 3 }],
      [{ x: 0, y: 3 }, { x: 0, y: 0 }],
      [{ x: 6, y: 0 }, { x: 6, y: 4 }],
      [{ x: 6, y: 4 }, { x: 9, y: 0 }],
      [{ x: 9, y: 0 }, { x: 6, y: 0 }],
    ],
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 4, y: 0, label: 'B' },
      { x: 0, y: 3, label: 'C' },
      { x: 6, y: 0, label: "A'" },
      { x: 6, y: 4, label: "B'" },
      { x: 9, y: 0, label: "C'" },
    ],
    caption: '三角形ABCはA→B→Cの順に反時計回り。移った先の三角形はA\'→B\'→C\'の順に時計回りになっており、向きが反転している＝対称移動（裏返し）が混ざっている証拠',
  },

  // ===== sansu_s167 折り返しの基本原理（線対称性） =====
  lf_ext05_167: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 6, y: 0, label: 'B' },
      { x: 6, y: 4, label: 'C' },
      { x: 2.308, y: 5.538, label: "B'" },
    ],
    sideLabels: ['6cm', '4cm', '4cm', '6cm'],
    equalSides: [[0, 3], [1, 2]],
    diagonals: [[0, 2]],
    caption: '長方形ABCDの対角線ACを折り目として頂点Bを折り返すと点B\'に重なる。AB=AB\'=6cm、CB=CB\'=4cm。三角形ABCと三角形AB\'Cは対角線ACを軸とする線対称（対称移動）の関係で、回転移動ではない',
  },

  // ===== sansu_s168 長方形の角を折る（角度計算） =====
  lf_ext05_168: {
    kind: 'polygon',
    points: [
      { x: -5, y: 0, label: 'E' },
      { x: 0, y: 3, label: 'F' },
      { x: -2.647, y: 4.412, label: "B'" },
    ],
    sideLabels: [null, '3cm', '5cm'],
    rightAngles: [2],
    caption: '長方形の角B（直角）を折り目EFで折り返すとB\'に重なり、直角はそのまま∠EB\'F=90°として保たれる。EB\'=EB=5cm、FB\'=FB=3cm。∠BEF≈31°も∠B\'EF≈31°として保たれるので、直線AB上で∠AEB\'=180°−31°−31°=118°',
  },

  // ===== sansu_s169 長方形を対角線で折る問題（二等辺三角形の発見） =====
  lf_ext05_169: {
    kind: 'polygon',
    points: [
      { x: 0, y: 5, label: 'A' },
      { x: 2.438, y: 0, label: 'E' },
      { x: 8, y: 0, label: 'C' },
    ],
    sideLabels: ['5.56cm', '5.56cm', null],
    equalSides: [[0, 1]],
    equalAngles: [[0, 2]],
    caption: 'たて5cm・よこ8cmの長方形ABCDを対角線ACで折ると、折られた辺AB\'と辺DCの交点がE。錯角より∠EAC=∠ECA=32°となるので三角形AECは二等辺三角形（EA=EC≈5.56cm）。∠AEC=180°−32°−32°=116°',
  },

  // ===== sansu_s170 正方形・長方形を2回折る問題 =====
  lf_ext05_170: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 12, y: 0 },
      { x: 0, y: 6 },
    ],
    sideLabels: ['12cm', null, '6cm'],
    rightAngles: [0],
    caption: '1辺12cmの正方形を中点を結ぶ直線で折ると12cm×6cmの長方形（2層）になり、さらにその対角線で折ると面積72÷2=36cm²の直角三角形（4層）になる',
  },

  // ===== sansu_s171 三角形の折り返し（頂点を辺上の点に重ねる） =====
  lf_ext05_171: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 3, y: 0, label: 'E' },
      { x: 6, y: 0, label: 'B' },
      { x: 0, y: 8, label: 'C' },
      { x: 0, y: 4, label: 'F' },
    ],
    sideLabels: ['3cm', '3cm', '10cm', '4cm', '4cm'],
    rightAngles: [0],
    diagonals: [[1, 4]],
    caption: '直角三角形ABC（角A=90°、AB=6cm、AC=8cm、BC=10cm）の中点E・Fを結ぶ折り目（点線）で頂点Aを折り返すと、辺BC上の点Dに重なる。ED=AE=3cm、FD=AF=4cm（対応する辺の長さが保たれる）。EF=BC÷2=5cm（中点連結定理）',
  },

  // ===== sansu_s172 折り返しと面積の総合問題 =====
  lf_ext05_172: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 6, y: 0, label: 'B' },
      { x: 6, y: 6, label: 'F' },
      { x: 6, y: 10, label: 'C' },
      { x: 0, y: 10, label: 'D' },
    ],
    sideLabels: ['6cm', '6cm', '4cm', '6cm', '10cm'],
    rightAngles: [0, 1, 3, 4],
    diagonals: [[0, 2]],
    caption: '長方形ABCD（AB=6cm、BC=10cm）を頂点Aから点F（BF=6cm）への折り目AF（点線）で折ると、三角形ABFが浮き上がり頂点Bは辺AD上の点Gに重なる。三角形ABFの面積=6×6÷2=18cm²。残った四角形AFCDの面積=60−18=42cm²',
  },

  // ===== sansu_s173 重なりの基本（1つの図形が動く） =====
  lf_ext05_173: {
    kind: 'polygon',
    points: [
      { x: -2, y: 0 },
      { x: 12, y: 0 },
      { x: 12, y: 6 },
      { x: 0, y: 6 },
      { x: 0, y: 5 },
      { x: -2, y: 5 },
    ],
    sideLabels: [null, '6cm', '12cm', '1cm', '2cm', '5cm'],
    caption: '正方形（1辺5cm）が長方形（よこ12cm、たて6cm）の左から毎秒1cmで入り込み始めて3秒後の様子。正方形は3cm分だけ長方形の中に入っている（まだ5cm全部は入っていない）。重なった部分（よこ3cm×たて5cm）の面積＝15cm²',
  },

  // ===== sansu_s174 2つの図形が同時に動く重なりの問題 =====
  lf_ext05_174: {
    kind: 'polygon',
    points: [
      { x: 3.8, y: 0 },
      { x: 10.8, y: 0 },
      { x: 10.8, y: 6 },
      { x: 4.8, y: 6 },
      { x: 4.8, y: 4 },
      { x: 3.8, y: 4 },
    ],
    sideLabels: [null, '6cm', '6cm', '2cm', '1cm', '4cm'],
    caption: '正方形P（1辺4cm、毎秒3cmで右へ）と正方形Q（1辺6cm、毎秒2cmで左へ）が2.6秒後に重なっている様子。近づく速さ＝3+2＝5cm/秒、2.6秒で縮まる距離＝13cm、最初の隙間10cmを引くと重なりのよこ＝3cm。重なる部分の面積＝3×4＝12cm²',
  },

  // ===== sansu_s175 三角形が長方形を通過する重なりの面積 =====
  lf_ext05_175: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 6, y: 0 },
      { x: 0, y: 4.5 },
    ],
    sideLabels: ['6cm', null, '4.5cm'],
    rightAngles: [0],
    caption: '直角三角形（角A=90°、AB=6cm、AE=8cm）が長方形の中へ頂点から先に入っていくとき、境界線で切り取られた重なり部分は、もとの三角形と相似になる。進入した奥行き6cmのとき、相似比6:8=3:4よりたては6×3/4=4.5cm、重なりの面積＝6×4.5÷2＝13.5cm²',
  },

  // ===== sansu_s176 正方形どうしのスライドによる重なりの面積 =====
  lf_ext05_176: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 4, y: 0 },
      { x: 4, y: 5 },
      { x: 0, y: 5 },
    ],
    sideLabels: ['4cm', '5cm', null, null],
    rightAngles: [0, 1, 2, 3],
    caption: '1辺6cmの正方形PとQが、右へ2cm・上へ1cmずれた状態で重なっている部分。重なる部分はよこ(6−2)cm×たて(6−1)cmの長方形になり、面積＝4×5＝20cm²',
  },

  // ===== sansu_s177 重なる部分の面積が最大になる時刻 =====
  lf_ext05_177: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 5, y: 0 },
      { x: 5, y: 5 },
      { x: 0, y: 5 },
    ],
    sideLabels: ['5cm', '5cm', null, null],
    rightAngles: [0, 1, 2, 3],
    caption: '正方形P（1辺5cm）が長方形（12cm×6cm）の中に完全に入りきってから（5秒後）、長方形の右端に届くまで（12秒後）の間、重なる部分はつねにこの5cm×5cmの正方形のまま（面積25cm²）。これより大きくなることはない',
  },

  // ===== sansu_s178 図形の重なりの総合問題（グラフ） =====
  lf_ext05_178: {
    kind: 'lineChart',
    xLabel: '時間（秒）',
    yLabel: '重なる面積（cm²）',
    xRange: [0, 18],
    yRange: [0, 28],
    series: [
      {
        label: '重なる面積',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 5, y: 25 },
          { x: 12, y: 25 },
          { x: 17, y: 0 },
        ],
      },
    ],
    caption: '正方形（1辺5cm）が長方形（よこ12cm、たて6cm）の左から毎秒1cmで通り抜けるときの、重なる面積の変化。0〜5秒は増加、5〜12秒は最大25cm²のまま一定、12〜17秒は減少して0に戻る',
  },

  // ===== sansu_s179 円に内接する正多角形の基本 =====
  lf_ext05_179: {
    kind: 'circle',
    showCenter: true,
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
    caption: '半径6cmの円に内接する正六角形。中心角はどれも360÷6＝60°。半径2本と1辺でできる二等辺三角形は頂角60°なので正三角形になり、1辺の長さは半径と同じ6cmになる',
  },

  // ===== sansu_s180 円と正方形の複合図形の面積 =====
  lf_ext05_180: {
    kind: 'circle',
    showCenter: true,
    radiusLabel: '5cm',
    sector: { from: 0, to: 90 },
    caption: '1辺10cmの正方形の4すみを中心として、半径5cmの1/4円を4つ描く（1つ分を図示）。1/4円4つ分の面積の合計＝5×5×3.14＝78.5cm²（半径5cmの円1つ分と同じ）。正方形の面積100cm²から引くと、中央に残る部分の面積＝100−78.5＝21.5cm²',
  },

  // ===== sansu_s181 正六角形と円の複合図形（弓形） =====
  lf_ext05_181: {
    kind: 'circle',
    showCenter: true,
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
    sector: { from: 0, to: 60 },
    caption: '半径6cmの円に内接する正六角形。1つの60°のおうぎ形（色付き部分）の面積は18.84cm²、内側の正三角形（1辺6cm）の面積は15.59cm²なので、弓形（すきま）の面積は18.84−15.59＝3.25cm²',
  },

  // ===== sansu_s182 おうぎ形を組み合わせた複合図形の面積（輪の形） =====
  lf_ext05_182: {
    kind: 'polygon',
    points: [
      { x: 10, y: 0 },
      { x: 8.66, y: 5 },
      { x: 5, y: 8.66 },
      { x: 0, y: 10 },
      { x: 0, y: 6 },
      { x: 3, y: 5.196 },
      { x: 5.196, y: 3 },
      { x: 6, y: 0 },
    ],
    sideLabels: [null, null, null, '4cm', null, null, null, '4cm'],
    fill: true,
    caption: '半径10cmと半径6cmの2つのおうぎ形（どちらも中心角90°）を組み合わせた輪の形。外側のおうぎ形の面積78.5cm²から内側のおうぎ形の面積28.26cm²を引いて、面積は50.24cm²',
  },

  // ===== sansu_s183 円と正多角形の総合演習 =====
  lf_ext05_183: {
    kind: 'circle',
    showCenter: true,
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
    caption: '1辺12cmの正方形に内接する円（半径6cm）に、さらに正六角形（1辺6cm）が内接している。正六角形の面積＝15.59×6＝93.54cm²。正方形の面積144cm²から引くと、残りの面積は144−93.54＝50.46cm²',
  },

  // ===== sansu_s184 底辺の比と面積比の基本 =====
  lf_ext05_184: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'B' },
      { x: 2, y: 0, label: 'D' },
      { x: 5, y: 0, label: 'C' },
      { x: 2, y: 4, label: 'A' },
    ],
    sideLabels: ['2', '3', null, null],
    diagonals: [[3, 1]],
    caption: '三角形ABCで、BD:DC=2:3となる点DをBC上に取る。三角形ABDと三角形ADCは頂点Aからの高さが共通なので、面積比もBD:DC=2:3になる。全体の面積40cm²のとき、ABD=16cm²、ADC=24cm²',
  },

  // ===== sansu_s185 高さの比と面積比の基本 =====
  lf_ext05_185: {
    kind: 'polygon',
    points: [
      { x: 4, y: 6, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 4, y: -10, label: 'D' },
      { x: 8, y: 0, label: 'C' },
    ],
    diagonals: [[1, 3]],
    heights: [
      { from: 0, toEdge: [1, 3], label: '6cm' },
      { from: 2, toEdge: [1, 3], label: '10cm' },
    ],
    caption: '三角形ABCと三角形DBCは底辺BC（8cm）を共有。高さはAから6cm、Dから10cm。高さの比6:10=3:5がそのまま面積比になる。ABCの面積24cm²のとき、DBCの面積＝24×5/3＝40cm²',
  },

  // ===== sansu_s186 三角形の内部の点と面積比（2段階の分割） =====
  lf_ext05_186: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'B' },
      { x: 1, y: 0, label: 'D' },
      { x: 3, y: 0, label: 'C' },
      { x: 1, y: 4, label: 'A' },
    ],
    sideLabels: ['1', '2', null, null],
    diagonals: [[3, 1]],
    caption: '三角形ABCで、BD:DC=1:2となる点Dを取ると、三角形ABD:三角形ADC=1:2。さらに辺AD上の点EでAE:ED=3:1に分けると、三角形ABDの中で三角形ABE:三角形EBD=3:1。全体60cm²のとき、ABD=20cm²、ABE=20×3/4=15cm²',
  },

  // ===== sansu_s187 平行線と線分の比（相似との関連） =====
  lf_ext05_187: {
    kind: 'polygon',
    points: [
      { x: 0, y: 8, label: 'A' },
      { x: -3, y: 4.8, label: 'D' },
      { x: -7.5, y: 0, label: 'B' },
      { x: 7.5, y: 0, label: 'C' },
      { x: 3, y: 4.8, label: 'E' },
    ],
    sideLabels: ['2', '3', '15cm', '3', '2'],
    diagonals: [[1, 4]],
    caption: '三角形ABCで、辺AB上の点D、辺AC上の点EをDE∥BCとなるように取る。AD:DB=2:3のとき、AE:EC=2:3（同じ比）になり、DE:BC=AD:AB=2:5。BC=15cmのとき、DE=15×2/5=6cm',
  },

  // ===== sansu_s188 台形の対角線による面積比 =====
  lf_ext05_188: {
    kind: 'polygon',
    points: [
      { x: 1, y: 3, label: 'A' },
      { x: 5, y: 3, label: 'B' },
      { x: 6, y: 0, label: 'C' },
      { x: 0, y: 0, label: 'D' },
    ],
    sideLabels: ['4cm', null, '6cm', null],
    diagonals: [[0, 2], [1, 3]],
    caption: '台形ABCD（AB∥DC、AB=4cm、DC=6cm）の対角線の交点をOとする。三角形AOBと三角形CODは相似（相似比2:3、面積比4:9）。両わきの三角形BOCとDOAは互いに面積が等しくなる。AOB=8cm²のとき、BOC=DOA=12cm²、COD=18cm²',
  },

  // ===== sansu_s189 面積比の総合演習（比を使った逆算） =====
  lf_ext05_189: {
    kind: 'polygon',
    points: [
      { x: 2, y: 6, label: 'A' },
      { x: 0.667, y: 2, label: 'E' },
      { x: 0, y: 0, label: 'B' },
      { x: 3, y: 0, label: 'D' },
      { x: 8, y: 0, label: 'C' },
    ],
    sideLabels: ['2', '1', '3', '5', null],
    diagonals: [[1, 3]],
    caption: '三角形ABCの辺BC上の点D（BD:DC=3:5）、辺AB上の点E（AE:EB=2:1）。三角形ABDの面積18cm²、三角形ADCの面積30cm²のとき、三角形EBDの面積が6cm²ならAE:EB=2:1になる',
  },

  // ===== sansu_s190 移動と面積の複合入試問題 =====
  lf_ext05_190: {
    kind: 'circle',
    showCenter: true,
    radiusLabel: '8cm',
    points: [
      { angle: 0, label: 'B' },
      { angle: 90, label: "B'" },
    ],
    chords: [[0, 1]],
    sector: { from: 0, to: 90 },
    caption: '1辺8cmの正三角形ABCを頂点Aを中心に90°回転させると頂点Bは点B\'に移る。AB=AB\'=8cmの二等辺三角形で頂角90°、底角（角ABB\'）は45°。Bが動いてできる弧の長さ＝8×2×3.14×90/360＝12.56cm。おうぎ形ABB\'の面積＝8×8×3.14×90/360＝50.24cm²',
  },

  // ===== sansu_s191 折り返しと角度の複合入試問題 =====
  lf_ext05_191: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'C' },
      { x: 0, y: 6, label: 'E' },
      { x: 2.8, y: 0, label: 'F' },
    ],
    sideLabels: [null, null, null],
    rightAngles: [0],
    caption: '長方形の角C（直角）を折り目EF（E:辺DC上、F:辺BC上）で折り返す。三角形CEFは角C=90°、角CEF=25°、角CFE=90−25=65°。折り返しで角DEC\'=180−25−25=130°、角BFC\'=180−65−65=50°',
  },

  // ===== sansu_s192 重なりと比の複合入試問題 =====
  lf_ext05_192: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 4, y: 0, label: 'P' },
      { x: 6, y: 0 },
      { x: 0, y: 4 },
    ],
    sideLabels: ['2', '1', null, '4cm'],
    rightAngles: [0],
    caption: '直角三角形ABE（角A=90°、AB=6cm、AE=9cm、面積27cm²）が2秒後（進入した奥行き6cm）に長方形と重なった部分は、相似比6:9=2:3の相似な三角形（脚6cm、4cm）で面積12cm²。この三角形の底辺をP点で2:1に分けると、面積は8cm²と4cm²になる',
  },

  // ===== sansu_s193 円と多角形の複合入試問題 =====
  lf_ext05_193: {
    kind: 'circle',
    showCenter: true,
    radiusLabel: '6cm',
    caption: '1辺12cmの正方形に内接する円（半径6cm）と、正方形の4頂点を通る外接円。対角線の2乗＝12×12＋12×12＝288（それぞれの辺を2乗してから足す）、外接円の半径の2乗＝288÷4＝72。内接円の面積＝6×6×3.14＝113.04cm²、外接円の面積＝72×3.14＝226.08cm²で、内接円の2倍',
  },

  // ===== sansu_s194 図形と比の応用入試問題 =====
  lf_ext05_194: {
    kind: 'polygon',
    points: [
      { x: 0, y: 8, label: 'A' },
      { x: -3, y: 4.8, label: 'D' },
      { x: -7.5, y: 0, label: 'B' },
      { x: 0, y: 0, label: 'F' },
      { x: 7.5, y: 0, label: 'C' },
      { x: 3, y: 4.8, label: 'E' },
    ],
    sideLabels: ['2', '3', '7.5cm', '7.5cm', '3', '2'],
    diagonals: [[1, 5]],
    caption: '三角形ABCで、AD:DB=2:3の点D、DE∥BCとなる点E（AE:EC=2:3）、BCの中点F。三角形ADEの面積＝50×4/25＝8cm²。三角形DBCの面積＝50×3/5＝30cm²。Fは中点なので三角形DBFの面積＝30÷2＝15cm²',
  },

  // ===== sansu_s195 平面図形後半 総合まとめ演習 =====
  lf_ext05_195a: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 12, y: 0, label: 'B' },
      { x: 12, y: 12, label: 'C' },
      { x: 0, y: 12, label: 'D' },
    ],
    sideLabels: ['12cm', null, null, null],
    rightAngles: [0, 1, 2, 3],
    diagonals: [[0, 2]],
    caption: '1辺12cmの正方形ABCDの対角線ACで折ると、頂点Bはちょうど頂点Dの位置に重なる（B\'=D）。AB=AB\'=12cm、角BAB\'=角BAD=90°（正方形の角）なので、三角形ABB\'は直角二等辺三角形。対角線の交点Oでできる三角形AOBの面積＝144÷4＝36cm²',
  },
  lf_ext05_195b: {
    kind: 'circle',
    showCenter: true,
    radiusLabel: '10cm',
    points: [
      { angle: 0, label: 'B' },
      { angle: 72, label: "B'" },
    ],
    chords: [[0, 1]],
    sector: { from: 0, to: 72 },
    caption: '正三角形ABC（1辺10cm）を頂点Aを中心に72°回転させると頂点Bは点B\'に移る。弧の長さ＝10×2×3.14×72/360＝12.56cm。三角形ABB\'は頂角72°の二等辺三角形なので、底角（角ABB\'）は(180−72)÷2＝54°',
  },
};
