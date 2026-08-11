import type { Figure } from './figures';

// 高校受験 数学「円の性質」拡張ユニット（koko_math_s276〜koko_math_s305）の図解。
// キーは lessons-koko-math-ext08.ts の figureId と対応（30課中15課に付与）。
// circle（points / chords / sector）を主役に据え、接線のように円周上だけでは
// 表現しきれない場面のみ polygon（直角三角形・凧形）で補っている。
// 角度は 0°＝右、反時計回り。数値はすべて検算済み。
export const lessonFigsKokoMathExt08: Record<string, Figure> = {
  // s276：弦AB・劣弧AB（120°）・優弧AB（240°）・中心角∠AOB
  lf_kokomathext08_276: {
    kind: 'circle',
    radiusLabel: '6cm',
    points: [
      { angle: 150, label: 'A' },
      { angle: 30, label: 'B' },
    ],
    chords: [[0, 1]],
    sector: { from: 30, to: 150, label: '120°' },
    showCenter: true,
    caption:
      '線分ABが弦。上側の短い弧（中心角120°）が劣弧AB、下側の長い弧（中心角240°）が優弧AB。ぬられた部分がおうぎ形OAB',
  },

  // s278：半径8cm・中心角135°のおうぎ形（弧6π・面積24πは答えなので書かない）
  lf_kokomathext08_278: {
    kind: 'circle',
    radiusLabel: '8cm',
    points: [
      { angle: 0, label: 'A' },
      { angle: 135, label: 'B' },
    ],
    sector: { from: 0, to: 135, label: '135°' },
    showCenter: true,
    caption: '半径8cm・中心角135°のおうぎ形OAB。135/360＝3/8 が円全体に対する割合',
  },

  // s280：弧AB（Pを含まない側）の中心角140°と、その円周角∠APB（70°は答えなので書かない）
  lf_kokomathext08_280: {
    kind: 'circle',
    points: [
      { angle: 200, label: 'A' },
      { angle: 340, label: 'B' },
      { angle: 90, label: 'P' },
    ],
    chords: [
      [2, 0],
      [2, 1],
      [0, 1],
    ],
    sector: { from: 200, to: 340, label: '140°' },
    showCenter: true,
    caption: 'Pを含まない側の弧ABに対する中心角∠AOBが140°。同じ弧に対する円周角が∠APB',
  },

  // s282：同じ弧ABに対する2つの円周角∠APBと∠AQB（どちらも80°）
  lf_kokomathext08_282: {
    kind: 'circle',
    points: [
      { angle: 190, label: 'A' },
      { angle: 350, label: 'B' },
      { angle: 90, label: 'P' },
      { angle: 40, label: 'Q' },
    ],
    chords: [
      [0, 2],
      [1, 2],
      [0, 3],
      [1, 3],
    ],
    caption: '下側の弧AB（中心角160°）に対する円周角∠APBと∠AQB。P・Qが弦ABの同じ側にあれば大きさは等しい',
  },

  // s285：ABは直径10cm・AC=6cm。∠ACB=90°（BC=8cmは答えなので書かない）
  lf_kokomathext08_285: {
    kind: 'circle',
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
    showCenter: true,
    caption: 'ABは直径（10cm）、AC＝6cm。半円の弧に対する円周角なので∠ACB＝90°',
  },

  // s287：弧AB:弧BC:弧CA＝80°:120°:160°＝2:3:4（円周角40°・60°・80°は答え）
  lf_kokomathext08_287: {
    kind: 'circle',
    points: [
      { angle: 90, label: 'A' },
      { angle: 170, label: 'B' },
      { angle: 290, label: 'C' },
    ],
    chords: [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    showCenter: true,
    caption: '3点A・B・Cが円周を 弧AB:弧BC:弧CA＝2:3:4 に分けている。各弧の中心角は80°・120°・160°',
  },

  // s290：∠ACB＝∠ADB（ともに70°）→ 4点A・B・C・Dは同一円周上
  lf_kokomathext08_290: {
    kind: 'circle',
    points: [
      { angle: 200, label: 'A' },
      { angle: 340, label: 'B' },
      { angle: 60, label: 'C' },
      { angle: 120, label: 'D' },
    ],
    chords: [
      [0, 2],
      [1, 2],
      [0, 3],
      [1, 3],
    ],
    caption: 'C・Dは弦ABについて同じ側にあり、∠ACB＝∠ADB。このとき4点A・B・C・Dは1つの円周上に並ぶ',
  },

  // s291：円に内接する四角形ABCD（弧AB=90°, BC=90°, CD=100°, DA=80°）
  //        ∠A=95°, ∠C=85°（和180°）／∠B=90°, ∠D=90°（和180°）
  lf_kokomathext08_291: {
    kind: 'circle',
    points: [
      { angle: 100, label: 'A' },
      { angle: 190, label: 'B' },
      { angle: 280, label: 'C' },
      { angle: 20, label: 'D' },
    ],
    chords: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
    ],
    showCenter: true,
    caption: '4つの頂点がすべて円周上にある四角形ABCD。向かい合う角の和（∠A＋∠C、∠B＋∠D）はどちらも180°になる',
  },

  // s293：半径OA=3cm・OP=5cm の直角三角形OAP（接線の長さPA=4cmは答えなので書かない）
  lf_kokomathext08_293: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'O' },
      { x: 0, y: 3, label: 'A' },
      { x: 4, y: 3, label: 'P' },
    ],
    sideLabels: ['3cm', null, '5cm'],
    rightAngles: [1],
    caption: '円Oの外の点Pから引いた接線の接点がA。半径OAと接線PAは垂直なので、△OAPは∠A＝90°の直角三角形',
  },

  // s295：円外の点Pから2本の接線。PA=PB=4cm, OA=OB=3cm（半径）, OP=5cm
  lf_kokomathext08_295: {
    kind: 'polygon',
    points: [
      { x: 5, y: 0, label: 'P' },
      { x: 1.8, y: 2.4, label: 'A' },
      { x: 0, y: 0, label: 'O' },
      { x: 1.8, y: -2.4, label: 'B' },
    ],
    sideLabels: ['4cm', '3cm', '3cm', '4cm'],
    rightAngles: [1, 3],
    equalSides: [
      [0, 3],
      [1, 2],
    ],
    caption: '点Pから円Oに引いた2本の接線と接点A・B。PA＝PB、OA＝OB（半径）、∠OAP＝∠OBP＝90°の凧形',
  },

  // s299：円の内部で交わる2弦ABとCD。交点をPとすると△APC∽△DPB
  lf_kokomathext08_299: {
    kind: 'circle',
    points: [
      { angle: 155, label: 'A' },
      { angle: 340, label: 'B' },
      { angle: 65, label: 'C' },
      { angle: 255, label: 'D' },
    ],
    chords: [
      [0, 1],
      [2, 3],
    ],
    caption: '弦ABと弦CDの交点をPとする。弧BCに対する円周角より∠PAC＝∠PDB、対頂角より∠APC＝∠DPB',
  },

  // s302：半径OA=5cm・中心から弦までの距離OM=3cm（AM=4cm・AB=8cmは答え）
  lf_kokomathext08_302: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'O' },
      { x: 4, y: 3, label: 'A' },
      { x: 0, y: 3, label: 'M' },
    ],
    sideLabels: ['5cm', null, '3cm'],
    rightAngles: [2],
    caption: '中心Oから弦ABに引いた垂線の足がM（Mは弦ABの中点）。半径OA＝5cm、OM＝3cmの直角三角形OMAで三平方の定理を使う',
  },

  // s303：半径5cmの円の平行な2弦 AB=8cm（中心から3cm）・CD=6cm（中心から4cm）。中心をはさんで反対側
  lf_kokomathext08_303: {
    kind: 'circle',
    radiusLabel: '5cm',
    points: [
      { angle: 53.13, label: 'A' },
      { angle: 306.87, label: 'B' },
      { angle: 143.13, label: 'C' },
      { angle: 216.87, label: 'D' },
    ],
    chords: [
      [0, 1],
      [2, 3],
    ],
    showCenter: true,
    caption: '半径5cmの円の平行な2つの弦。AB＝8cm、CD＝6cmで、2弦は中心Oをはさんで反対側にある',
  },

  // s304：半径rの円に内接する正六角形（1辺の長さはr、中心と2頂点で1辺rの正三角形が6個）
  lf_kokomathext08_304: {
    kind: 'circle',
    radiusLabel: 'r',
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
    caption: '半径rの円に内接する正六角形。中心角は360°÷6＝60°で、中心と隣り合う2頂点を結ぶと1辺rの正三角形が6個できる',
  },

  // s305：3辺 3cm・4cm・5cm の直角三角形（内接円の半径1cm・外接円の半径2.5cmは答え）
  lf_kokomathext08_305: {
    kind: 'polygon',
    points: [
      { x: 0, y: 3, label: 'A' },
      { x: 4, y: 0, label: 'B' },
      { x: 0, y: 0, label: 'C' },
    ],
    sideLabels: ['5cm', '4cm', '3cm'],
    rightAngles: [2],
    caption: '∠C＝90°、AC＝3cm・BC＝4cm・AB＝5cmの直角三角形。この三角形の内接円と外接円の半径を考える',
  },
};
