import type { Figure } from './figures';

// 高校受験 数学「空間図形」拡張ユニット（koko_math_s306〜koko_math_s340）の教科書用図解。
// キーは lessons-koko-math-ext09.ts の figureId と対応（35課中17課）。
// 立体（solid）と展開図（net）を主役にし、円すいの側面のおうぎ形は circle で中心角を示す。
// 図中の数値・キャプションの計算結果は、本文・ひっかけ問題の数値とすべて一致させてある。
export const lessonFigsKokoMathExt09: Record<string, Figure> = {
  // ===== 1. 直線と平面の位置関係 =====

  // s306：直方体の辺の分類（交わる4・平行3・ねじれ4）
  lf_kokomathext09_306: {
    kind: 'solid',
    shape: 'cuboid',
    caption:
      '直方体ABCD−EFGH（ABCDが上の面、EFGHが下の面）。辺ABを基準にすると、交わる辺はAD・BC・AE・BFの4本、平行な辺はDC・EF・HGの3本、残るCG・DH・FG・EHの4本が「ねじれの位置」。1＋4＋3＋4＝12で辺の総数と一致する',
  },

  // ===== 2. 立体の分類・投影図 =====

  // s311：円すいの投影図（立面図＝二等辺三角形、平面図＝円）
  lf_kokomathext09_311: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '3cm', height: '4cm', slant: '5cm' },
    caption:
      '底面の半径3cm・高さ4cm・母線5cmの円すい。真正面から見た立面図は底辺6cm（＝直径）・高さ4cmの二等辺三角形、真上から見た平面図は直径6cmの円になる。立面図の底辺は直径であって半径ではない',
  },

  // ===== 3. 展開図 =====

  // s313：立方体の十字型展開図と、向かい合う面（1つとばし）
  lf_kokomathext09_313: {
    kind: 'net',
    shape: 'cube',
    faceLabels: ['ア', 'イ', 'ウ', 'エ', 'オ', 'カ'],
    caption:
      '立方体の十字型の展開図。縦に並ぶ4面ア・イ・ウ・エは側面を1周する帯になるので、1つとばしのア↔ウ、イ↔エが向かい合う。左右に張り出したオ↔カも1組。アとエは「いちばん離れている」ように見えるが、組み立てるととなり合う',
  },

  // s314：さいころの展開図（向かい合う面の目の和は7）
  lf_kokomathext09_314: {
    kind: 'net',
    shape: 'cube',
    faceLabels: ['1', '2', '6', '5', '3', '4'],
    caption:
      'さいころの展開図。縦の4面は上から1・2・6・5、左右が3と4。1つとばしで向かい合うので 1↔6、2↔5、左右の3↔4となり、3組とも和が7になる。3組すべての和が7かどうかが最速の検算になる',
  },

  // s315：直方体（たて3・よこ6・高さ4）の展開図と表面積
  lf_kokomathext09_315: {
    kind: 'net',
    shape: 'cuboid',
    dims: { w: 'よこ6cm', d: 'たて3cm', h: '高さ4cm' },
    caption:
      'たて3cm・よこ6cm・高さ4cmの直方体の展開図。長方形は3種類が2枚ずつあり、表面積＝2×(6×3＋3×4＋4×6)＝2×54＝108cm²。体積は6×3×4＝72cm³。「種類は3つ、枚数は6枚」なので2倍を忘れない',
  },

  // s316：円すいの側面の展開図（半径3cm・母線9cm → 中心角120°）
  lf_kokomathext09_316: {
    kind: 'circle',
    radiusLabel: '母線 9cm',
    sector: { from: 0, to: 120, label: '120°' },
    showCenter: true,
    points: [
      { angle: 0, label: 'A' },
      { angle: 120, label: 'B' },
    ],
    caption:
      '底面の半径3cm・母線9cmの円すいの側面の展開図（濃い部分のおうぎ形）。中心角＝360°×(3÷9)＝120°。弧ABの長さ＝2π×9×(120/360)＝6πcmで、底面の円周2π×3＝6πcmと一致する。側面積＝π×3×9＝27πcm²（＝π×9²×(120/360)＝27πcm²）',
  },

  // ===== 4. 角柱・円柱の表面積と体積 =====

  // s318：三角柱の体積（底面＝底辺6cm・高さ5cmの三角形、奥行き8cm）
  lf_kokomathext09_318: {
    kind: 'solid',
    shape: 'triangularPrism',
    labels: { height: '5cm' },
    caption:
      '手前の三角形（底辺6cm・高さ5cm）が奥行き8cmだけ続いた三角柱。底面積＝6×5÷2＝15cm²、体積＝15×8＝120cm³。底面は「合同で平行な2つの面」＝手前と奥の三角形であり、下の長方形は側面である',
  },

  // s320：円柱（半径4cm・高さ10cm）の体積と表面積
  lf_kokomathext09_320: {
    kind: 'solid',
    shape: 'cylinder',
    labels: { radius: '4cm', height: '10cm' },
    caption:
      '底面の半径4cm・高さ10cmの円柱。体積＝π×4²×10＝160πcm³。側面積＝（底面の周2π×4）×10＝80πcm²、底面2枚＝2×16π＝32πcm²、表面積＝112πcm²。側面のよこは半径ではなく円周であることに注意',
  },

  // ===== 5. 角すい・円すいの表面積と体積 =====

  // s322：円すいの体積は柱の3分の1（半径3・高さ4・母線5）
  lf_kokomathext09_322: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '3cm', height: '4cm', slant: '5cm' },
    caption:
      '底面の半径3cm・高さ4cmの円すい。母線は√(3²＋4²)＝5cm。体積＝(1/3)×π×3²×4＝12πcm³で、同じ底面・同じ高さの円柱36πcm³のちょうど3分の1。表面積＝π×3×5＋π×3²＝15π＋9π＝24πcm²。体積に使うのは高さ4cm、側面積に使うのは母線5cm',
  },

  // s323：円すいの側面（半径4cm・母線10cm → 中心角144°）
  lf_kokomathext09_323: {
    kind: 'circle',
    radiusLabel: '母線 10cm',
    sector: { from: 0, to: 144, label: '144°' },
    showCenter: true,
    points: [
      { angle: 0, label: 'P' },
      { angle: 144, label: 'Q' },
    ],
    caption:
      '底面の半径4cm・母線10cmの円すいの側面の展開図。中心角＝360°×(4÷10)＝144°。弧PQ＝2π×10×(144/360)＝8πcmで、底面の円周2π×4＝8πcmと一致する。側面積＝π×10²×(144/360)＝40πcm²＝πrl＝π×4×10＝40πcm²',
  },

  // ===== 6. 球 =====

  // s327：球（半径6cm）の体積と表面積
  lf_kokomathext09_327: {
    kind: 'solid',
    shape: 'sphere',
    labels: { radius: '6cm' },
    caption:
      '半径6cmの球。体積＝(4/3)×π×6³＝(4/3)×216π＝288πcm³（身の上に心配あーる）。表面積＝4×π×6²＝144πcm²（心配ある事情）。体積は半径の3乗、表面積は2乗に比例するので、半径が2倍なら体積8倍・表面積4倍になる',
  },

  // ===== 7. 回転体 =====

  // s330：直角三角形（5cm・12cm）を12cmの辺を軸に回転した円すい
  lf_kokomathext09_330: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '5cm', height: '12cm', slant: '13cm' },
    caption:
      '直角をはさむ2辺が5cm・12cmの直角三角形を、12cmの辺を軸として1回転させてできる円すい。半径5cm・高さ12cm・母線（斜辺）13cm。体積＝(1/3)π×25×12＝100πcm³、表面積＝π×5×13＋π×25＝90πcm²。5cmの辺を軸にすると半径12cm・高さ5cmの別の円すい（240πcm³）になる',
  },

  // ===== 8. 立体の切断 =====

  // s333：切断の3原則
  lf_kokomathext09_333: {
    kind: 'solid',
    shape: 'cube',
    caption:
      '立方体を1つの平面で切るときの3原則。①同じ面の上にある2点は直線で結ぶ ②向かい合う平行な面にできる切り口の線どうしは平行になる ③線が面からはみ出すときは辺や面を延長して交点をとる。別々の面にある2点を立体の内部を突き抜けて結んではいけない',
  },

  // s334：1辺4cmの立方体の6辺の中点を通る切り口＝正六角形
  lf_kokomathext09_334: {
    kind: 'polygon',
    points: [
      { x: 2, y: 0 },
      { x: 1, y: 1.732 },
      { x: -1, y: 1.732 },
      { x: -2, y: 0 },
      { x: -1, y: -1.732 },
      { x: 1, y: -1.732 },
    ],
    sideLabels: ['2√2 cm', null, null, null, null, null],
    fill: true,
    equalSides: [[0, 1, 2, 3, 4, 5]],
    caption:
      '1辺4cmの立方体の6つの辺の中点を通る平面で切った切り口。正六角形になり、その1辺は面の対角線4√2cmの半分で2√2cm。面積＝(3√3/2)×(2√2)²＝(3√3/2)×8＝12√3cm²（約20.8cm²）。1辺を立方体の1辺4cmと取り違えないこと',
  },

  // ===== 9. 立体と三平方 =====

  // s336：直方体（3・6・2）の対角線＝7cm
  lf_kokomathext09_336: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: 'よこ6cm', depth: 'たて3cm', height: '高さ2cm' },
    caption:
      'たて3cm・よこ6cm・高さ2cmの直方体。底面の対角線＝√(3²＋6²)＝√45＝3√5cm、立体の対角線＝√(3²＋6²＋2²)＝√49＝7cm。三平方の定理を2回使う（1回目で底面、2回目で高さを足す）。3√5で止めると面の対角線どまりになる',
  },

  // s338：円すいの半径・高さ・母線（9・12・15）
  lf_kokomathext09_338: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '9cm', height: '12cm', slant: '15cm' },
    caption:
      '底面の半径9cm・高さ12cmの円すい。母線＝√(9²＋12²)＝√225＝15cm。体積＝(1/3)π×81×12＝324πcm³（高さを使う）、側面積＝π×9×15＝135πcm²（母線を使う）、表面積＝135π＋81π＝216πcm²、側面の中心角＝360°×(9÷15)＝216°',
  },

  // s339：円すいの側面を1周する最短のひも（半径2cm・母線8cm → 中心角90°）
  lf_kokomathext09_339: {
    kind: 'circle',
    radiusLabel: '母線 8cm',
    sector: { from: 0, to: 90, label: '90°' },
    showCenter: true,
    points: [
      { angle: 0, label: 'A' },
      { angle: 90, label: 'A2' },
    ],
    caption:
      '底面の半径2cm・母線8cmの円すいの側面の展開図。中心角＝360°×(2÷8)＝90°。母線OA上の点Aから側面を1周してAにもどるひもは、展開図では線分AA2になる。OA＝OA2＝8cm、∠AOA2＝90°の直角二等辺三角形なので AA2＝8√2≒11.3cm。母線を往復する16cmより短い',
  },
};
