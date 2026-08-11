import type { Figure } from './figures';

// 高校受験 数学「比例・反比例・一次関数」拡張ユニット（koko_math_s121〜koko_math_s155）の教科書用図解。
// キーは lessons-koko-math-ext04.ts の figureId と対応（35課中18課＝約51%）。
// このユニットは「グラフを見て考える」ことが得点に直結するので、
// 傾き・切片・交点・面積が目で確認できる coordinate 図を中心に置いてある。
// 図に描いた数値は本文の式・答えと必ず一致させてある。
export const lessonFigsKokoMathExt04: Record<string, Figure> = {
  // s121：比例 y=ax のグラフは原点を通る直線。a の符号で右上がり／右下がり
  lf_kokomathext04_121: {
    kind: 'coordinate',
    xRange: [-4, 4],
    yRange: [-7, 7],
    lines: [
      { a: 2, b: 0, label: 'y=2x' },
      { a: -1, b: 0, label: 'y=−x' },
    ],
    points: [
      { x: 1, y: 2, label: '(1, 2)' },
      { x: 3, y: 6, label: '(3, 6)' },
      { x: -2, y: -4, label: '(−2, −4)' },
    ],
    caption:
      '比例 y=ax のグラフは必ず原点を通る直線。a=2 のとき x が1増えると y は2増えるので右上がり、a=−1 のときは右下がりになる。(1,2)(3,6)(−2,−4) はすべて y=2x 上の点',
  },

  // s123：反比例 y=a/x のグラフ（双曲線）。a の符号で通る象限が変わる
  lf_kokomathext04_123: {
    kind: 'coordinate',
    xRange: [-8, 8],
    yRange: [-8, 8],
    hyperbolas: [
      { k: 6, label: 'y=6/x' },
      { k: -6, label: 'y=−6/x' },
    ],
    points: [
      { x: 1, y: 6, label: '(1, 6)' },
      { x: 2, y: 3, label: '(2, 3)' },
      { x: 3, y: 2, label: '(3, 2)' },
      { x: 6, y: 1, label: '(6, 1)' },
    ],
    caption:
      '反比例 y=6/x のグラフは、原点について点対称な2本の曲線（双曲線）。(1,6)(2,3)(3,2)(6,1) はどれも xy=6 を満たす。a>0 なら第1・第3象限、a<0 なら第2・第4象限を通り、軸には決して接しない',
  },

  // s126：一次関数 y=ax+b は比例 y=ax を y 軸方向に b だけ平行移動した直線
  lf_kokomathext04_126: {
    kind: 'coordinate',
    xRange: [-4, 4],
    yRange: [-6, 10],
    lines: [
      { a: 2, b: 0, label: 'y=2x' },
      { a: 2, b: 3, label: 'y=2x+3' },
    ],
    points: [
      { x: 0, y: 0, label: 'O' },
      { x: 0, y: 3, label: '(0, 3)' },
      { x: 1, y: 5, label: '(1, 5)' },
    ],
    caption:
      'y=2x+3 のグラフは、比例 y=2x のグラフを y 軸の正の向きに3だけ平行移動した直線。傾きはどちらも2で平行のまま、y 軸との交点だけが O から (0,3) に移る',
  },

  // s127：傾き a=2/3 の意味「右へ3進むと上へ2進む」
  lf_kokomathext04_127: {
    kind: 'coordinate',
    xRange: [-2, 8],
    yRange: [-2, 7],
    lines: [{ a: 2 / 3, b: 1, label: 'y=(2/3)x+1' }],
    points: [
      { x: 0, y: 1, label: '(0, 1)' },
      { x: 3, y: 3, label: '(3, 3)' },
      { x: 6, y: 5, label: '(6, 5)' },
    ],
    segments: [
      [
        { x: 0, y: 1 },
        { x: 3, y: 1 },
      ],
      [
        { x: 3, y: 1 },
        { x: 3, y: 3 },
      ],
    ],
    caption:
      '傾き 2/3 は「右へ3進むと上へ2進む」という意味。(0,1) から右へ3、上へ2で (3,3)、さらに右へ3、上へ2で (6,5) に着く。傾き＝(y の増加量)÷(x の増加量)＝2÷3',
  },

  // s130：a・b の符号とグラフの位置（4本を同時に見比べる）
  lf_kokomathext04_130: {
    kind: 'coordinate',
    xRange: [-6, 6],
    yRange: [-8, 8],
    lines: [
      { a: 1, b: 3, label: 'y=x+3' },
      { a: 1, b: -3, label: 'y=x−3' },
      { a: -1, b: 3, label: 'y=−x+3' },
      { a: -1, b: -3, label: 'y=−x−3' },
    ],
    caption:
      'a の符号は向き（a>0 で右上がり、a<0 で右下がり）、b の符号は y 軸との交点の上下（b>0 で原点より上、b<0 で下）を決める。式を見ただけでグラフのだいたいの位置がわかる',
  },

  // s133：x の変域から y の変域を求める（a<0 では大小が逆転する）
  lf_kokomathext04_133: {
    kind: 'coordinate',
    xRange: [-1, 6],
    yRange: [-5, 7],
    lines: [{ a: -2, b: 5, label: 'y=−2x+5' }],
    points: [
      { x: 1, y: 3, label: '(1, 3)' },
      { x: 4, y: -3, label: '(4, −3)' },
    ],
    segments: [
      [
        { x: 1, y: 3 },
        { x: 4, y: -3 },
      ],
    ],
    caption:
      'y=−2x+5 で 1≦x≦4 のとき、太い線分の部分だけを使う。x=1 のとき y=3（最大）、x=4 のとき y=−3（最小）なので y の変域は −3≦y≦3。a<0 だから x が最小のところで y が最大になる',
  },

  // s135：2点 A(−1,−1)、B(3,7) を通る直線 y=2x+1
  lf_kokomathext04_135: {
    kind: 'coordinate',
    xRange: [-4, 5],
    yRange: [-4, 9],
    lines: [{ a: 2, b: 1, label: 'y=2x+1' }],
    points: [
      { x: -1, y: -1, label: 'A(−1, −1)' },
      { x: 3, y: 7, label: 'B(3, 7)' },
      { x: 0, y: 1, label: '(0, 1)' },
    ],
    caption:
      '2点 A(−1,−1)、B(3,7) を通る直線。傾きは (7−(−1))÷(3−(−1))＝8÷4＝2。y=2x+b に B を代入して 7=6+b より b=1、求める式は y=2x+1（切片が (0,1) と一致することを確認できる）',
  },

  // s138：2直線の交点＝両方の式を同時に満たす点
  lf_kokomathext04_138: {
    kind: 'coordinate',
    xRange: [-2, 6],
    yRange: [-4, 8],
    lines: [
      { a: 2, b: -1, label: 'y=2x−1' },
      { a: -1, b: 5, label: 'y=−x+5' },
    ],
    points: [{ x: 2, y: 3, label: 'P(2, 3)' }],
    caption:
      'y=2x−1 と y=−x+5 の交点 P。2x−1=−x+5 より 3x=6、x=2。これを y=2x−1 に代入して y=3。交点 P(2,3) は両方の直線の上にあるので、どちらの式に代入しても成り立つ',
  },

  // s139：連立方程式の解＝2直線の交点の座標
  lf_kokomathext04_139: {
    kind: 'coordinate',
    xRange: [-1, 6],
    yRange: [-5, 7],
    lines: [
      { a: 2, b: -4, label: '2x−y=4' },
      { a: -1, b: 5, label: 'x+y=5' },
    ],
    points: [{ x: 3, y: 2, label: '(3, 2)' }],
    caption:
      '連立方程式 2x−y=4、x+y=5 を y について解くと y=2x−4 と y=−x+5。2直線の交点 (3,2) がそのまま連立方程式の解 x=3, y=2 になる（6−2=4、3+2=5 で検算できる）',
  },

  // s142：傾きが等しい2直線は平行
  lf_kokomathext04_142: {
    kind: 'coordinate',
    xRange: [-4, 4],
    yRange: [-8, 10],
    lines: [
      { a: 2, b: 3, label: 'y=2x+3' },
      { a: 2, b: -2, label: 'y=2x−2' },
    ],
    points: [
      { x: 0, y: 3, label: '(0, 3)' },
      { x: 0, y: -2, label: '(0, −2)' },
    ],
    caption:
      '傾きがどちらも2で等しいので2直線は平行。切片が 3 と −2 でちがうため決して交わらない。連立方程式にすると 2x+3=2x−2 → 3=−2 となり、解がないことと対応している',
  },

  // s143：垂直な2直線は傾きの積が −1
  lf_kokomathext04_143: {
    kind: 'coordinate',
    xRange: [-2, 7],
    yRange: [-4, 8],
    lines: [
      { a: 2, b: -1, label: 'y=2x−1' },
      { a: -1 / 2, b: 4, label: 'y=−(1/2)x+4' },
    ],
    points: [{ x: 2, y: 3, label: '(2, 3)' }],
    caption:
      '傾きの積が 2×(−1/2)=−1 なので、この2直線は直角に交わる。交点は 2x−1=−(1/2)x+4 より (5/2)x=5、x=2、y=3 で (2,3)',
  },

  // s144：座標平面上の三角形の面積（y 軸上の辺を底辺にとる）
  lf_kokomathext04_144: {
    kind: 'coordinate',
    xRange: [-3, 6],
    yRange: [-2, 10],
    lines: [
      { a: 1, b: 2, label: 'y=x+2' },
      { a: -2, b: 8, label: 'y=−2x+8' },
    ],
    polygon: [
      { x: 0, y: 2, label: 'A' },
      { x: 0, y: 8, label: 'B' },
      { x: 2, y: 4, label: 'P' },
    ],
    points: [
      { x: 0, y: 2, label: 'A(0, 2)' },
      { x: 0, y: 8, label: 'B(0, 8)' },
      { x: 2, y: 4, label: 'P(2, 4)' },
    ],
    caption:
      '△PAB の面積。y 軸上の辺 AB を底辺とみると AB=8−2=6、高さは P の x 座標そのもので 2。よって面積は 6×2÷2=6。交点 P は x+2=−2x+8 より x=2、y=4',
  },

  // s145：三角形の面積を2等分する直線は「向かい合う辺の中点」を通る
  lf_kokomathext04_145: {
    kind: 'coordinate',
    xRange: [-1, 6],
    yRange: [-1, 8],
    lines: [{ a: 3 / 2, b: 0, label: 'y=(3/2)x' }],
    polygon: [
      { x: 0, y: 0, label: 'O' },
      { x: 4, y: 0, label: 'A' },
      { x: 0, y: 6, label: 'B' },
    ],
    points: [
      { x: 4, y: 0, label: 'A(4, 0)' },
      { x: 0, y: 6, label: 'B(0, 6)' },
      { x: 2, y: 3, label: 'M(2, 3)' },
    ],
    segments: [
      [
        { x: 0, y: 0 },
        { x: 2, y: 3 },
      ],
    ],
    caption:
      '△OAB は 4×6÷2=12。原点 O を通って面積を2等分する直線は、向かい合う辺 AB の中点 M((4+0)/2, (0+6)/2)=(2,3) を通る y=(3/2)x。△OAM と △OMB はどちらも面積6になる',
  },

  // s146：等積変形（底辺が共通で、頂点が平行線上にあれば面積は等しい）
  lf_kokomathext04_146: {
    kind: 'coordinate',
    xRange: [-1, 6],
    yRange: [-1, 5],
    lines: [{ a: 0, b: 3, label: 'ℓ（BCに平行）' }],
    polygon: [
      { x: 0, y: 0, label: 'B' },
      { x: 4, y: 0, label: 'C' },
      { x: 1, y: 3, label: 'A' },
    ],
    points: [
      { x: 0, y: 0, label: 'B(0, 0)' },
      { x: 4, y: 0, label: 'C(4, 0)' },
      { x: 1, y: 3, label: 'A(1, 3)' },
      { x: 3, y: 3, label: "A′(3, 3)" },
    ],
    segments: [
      [
        { x: 0, y: 0 },
        { x: 3, y: 3 },
      ],
      [
        { x: 3, y: 3 },
        { x: 4, y: 0 },
      ],
    ],
    caption:
      '底辺 BC（長さ4）が共通で、頂点 A と A′ がどちらも BC に平行な直線 ℓ（y=3）の上にあるので、高さはどちらも3。△ABC も △A′BC も面積は 4×3÷2=6 で等しい。これが等積変形',
  },

  // s149：長方形の辺上を動く点と、三角形の面積のグラフ（3区間の折れ線）
  lf_kokomathext04_149: {
    kind: 'coordinate',
    xRange: [0, 12],
    yRange: [0, 35],
    segments: [
      [
        { x: 0, y: 0 },
        { x: 3, y: 30 },
      ],
      [
        { x: 3, y: 30 },
        { x: 8, y: 30 },
      ],
      [
        { x: 8, y: 30 },
        { x: 11, y: 0 },
      ],
    ],
    points: [
      { x: 3, y: 30, label: '(3, 30)' },
      { x: 8, y: 30, label: '(8, 30)' },
      { x: 11, y: 0, label: '(11, 0)' },
    ],
    caption:
      '長方形 ABCD（AB=6cm、AD=10cm）の辺上を A→B→C→D と毎秒2cm で動く点 P と、△APD の面積 y cm² のグラフ。0≦x≦3 は y=10x、3≦x≦8 は y=30（一定）、8≦x≦11 は y=−10x+110。区間ごとに式が変わる点に注意',
  },

  // s150：グラフから長方形の辺の長さを逆に読み取る
  lf_kokomathext04_150: {
    kind: 'coordinate',
    xRange: [0, 17],
    yRange: [0, 20],
    segments: [
      [
        { x: 0, y: 0 },
        { x: 4, y: 16 },
      ],
      [
        { x: 4, y: 16 },
        { x: 12, y: 16 },
      ],
      [
        { x: 12, y: 16 },
        { x: 16, y: 0 },
      ],
    ],
    points: [
      { x: 4, y: 16, label: '(4, 16)' },
      { x: 12, y: 16, label: '(12, 16)' },
      { x: 16, y: 0, label: '(16, 0)' },
    ],
    caption:
      '毎秒1cm で A→B→C→D と動く点のグラフ。折れ目の x=4、12、16 が P の B・C・D 到着時刻なので AB=4cm、BC=12−4=8cm、CD=16−12=4cm。最大面積16＝AD×AB÷2＝8×4÷2 とも一致する',
  },

  // s153：速さのグラフ（ダイヤグラム）と追いつく点
  lf_kokomathext04_153: {
    kind: 'coordinate',
    xRange: [0, 16],
    yRange: [0, 1300],
    segments: [
      [
        { x: 0, y: 0 },
        { x: 15, y: 1200 },
      ],
      [
        { x: 5, y: 0 },
        { x: 10, y: 1200 },
      ],
    ],
    points: [
      { x: 7.5, y: 600, label: '(7.5, 600)' },
      { x: 15, y: 1200, label: '弟 到着' },
      { x: 10, y: 1200, label: '兄 到着' },
    ],
    caption:
      '家から図書館（1200m）までのダイヤグラム。弟は分速80m で y=80x、兄は5分後に分速240m で出発し y=240(x−5)。交点 (7.5, 600) が「出発から7分30秒後、家から600m の地点で追いつく」ことを表す',
  },

  // s154：料金プランの比較（交点より右か左かで有利なプランが変わる）
  lf_kokomathext04_154: {
    kind: 'coordinate',
    xRange: [0, 25],
    yRange: [0, 6000],
    lines: [
      { a: 200, b: 1000, label: 'A：y=200x+1000' },
      { a: 100, b: 2500, label: 'B：y=100x+2500' },
    ],
    points: [{ x: 15, y: 4000, label: '(15, 4000)' }],
    caption:
      'A プラン（基本料1000円＋1回200円）と B プラン（基本料2500円＋1回100円）の比較。交点は 200x+1000=100x+2500 より x=15、y=4000。14回以下なら A、15回でちょうど同額、16回以上なら B が安い',
  },
};
