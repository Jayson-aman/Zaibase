import type { Figure } from './figures';

// 高校受験 数学「一次方程式・連立方程式・二次方程式」拡張ユニット
// （koko_math_s081〜koko_math_s120）の教科書用図解。
// キーは lessons-koko-math-ext03.ts の figureId と完全一致させてある。
// 方程式は「式変形」が中心の単元なので、図にして本当に理解が進む箇所
// （解の位置・2直線の交点・グラフとx軸の交点・文章題の場面）だけに付けた（40課中16課）。
export const lessonFigsKokoMathExt03: Record<string, Figure> = {
  // s087：過不足算「5枚ずつ配ると12枚あまり、6枚ずつ配ると3枚たりない」
  // 5x+12 と 6x−3 の交点 (15, 87) が答え
  lf_kokomathext03_087: {
    kind: 'coordinate',
    xRange: [0, 20],
    yRange: [0, 110],
    lines: [
      { a: 5, b: 12, label: '5x+12（5枚ずつ）' },
      { a: 6, b: -3, label: '6x−3（6枚ずつ）' },
    ],
    points: [{ x: 15, y: 87, label: '(15, 87)' }],
    caption: '横軸が人数 x、縦軸が画用紙の枚数。5枚ずつ配って12枚あまる場合の総数 5x+12 と、6枚ずつ配って3枚たりない場合の総数 6x−3 は同じ枚数なので、2直線の交点 x=15（15人）、y=87（87枚）が答えになる',
  },

  // s088：追いつき問題のダイヤグラム
  // 弟 分速60m で出発、その10分後に兄が分速80m で出発 → 弟の出発から40分後（兄の出発から30分後）に追いつく
  lf_kokomathext03_088: {
    kind: 'coordinate',
    xRange: [0, 50],
    yRange: [0, 3000],
    lines: [
      { a: 60, b: 0, label: '弟 y=60x' },
      { a: 80, b: -800, label: '兄 y=80(x−10)' },
    ],
    points: [{ x: 40, y: 2400, label: '(40, 2400)' }],
    caption: '横軸は弟が出発してからの時間（分）、縦軸は家からの道のり（m）。兄は10分おくれて出発するので x=10 から始まる。2本のグラフが交わる点が追いつく瞬間で、弟の出発から40分後（兄の出発から30分後）、家から2400mの地点',
  },

  // s093：連立方程式の解＝2直線の交点
  lf_kokomathext03_093: {
    kind: 'coordinate',
    xRange: [-1, 6],
    yRange: [-2, 7],
    lines: [
      { a: -1, b: 5, label: 'x+y=5' },
      { a: 2, b: -1, label: '2x−y=1' },
    ],
    points: [{ x: 2, y: 3, label: '(2, 3)' }],
    caption: '2つの式をそれぞれ y=… の形にして直線としてかくと、交点は1つだけ。その座標 (2, 3) が連立方程式の解 x=2, y=3 にあたる',
  },

  // s097：解がない連立方程式＝2直線が平行
  lf_kokomathext03_097: {
    kind: 'coordinate',
    xRange: [-2, 5],
    yRange: [-3, 8],
    lines: [
      { a: -2, b: 3, label: '2x+y=3' },
      { a: -2, b: 5, label: '4x+2y=10' },
    ],
    caption: '2x+y=3 は y=−2x+3、4x+2y=10 は y=−2x+5。傾きが同じで切片だけがちがうので2直線は平行になり、交点が存在しない。つまりこの連立方程式には解がない',
  },

  // s099：途中まで歩き、途中から走る（道のりと時間のグラフ）
  // 歩き分速60mで10分（600m）→ 走り分速150mで10分（1500m）＝合計20分・2100m
  lf_kokomathext03_099: {
    kind: 'coordinate',
    xRange: [0, 22],
    yRange: [0, 2300],
    segments: [
      [
        { x: 0, y: 0 },
        { x: 10, y: 600 },
      ],
      [
        { x: 10, y: 600 },
        { x: 20, y: 2100 },
      ],
    ],
    points: [
      { x: 10, y: 600, label: '(10, 600) 走り出す' },
      { x: 20, y: 2100, label: '(20, 2100) 学校' },
    ],
    caption: '横軸は時間（分）、縦軸は家からの道のり（m）。前半は分速60mなのでゆるやかな傾き、後半は分速150mなので急な傾きになる。折れ曲がる点の座標が「歩いた時間10分・歩いた道のり600m」を表す',
  },

  // s101：昨年→今年の男女別人数（男子10%増・女子5%減で全体7人増）
  lf_kokomathext03_101: {
    kind: 'barChart',
    xLabel: '男女別・年度別の生徒数',
    yLabel: '人数（人）',
    yMax: 260,
    bars: [
      { label: '昨年 男子', value: 180, color: '#0EA5E9' },
      { label: '今年 男子', value: 198, color: '#0369A1' },
      { label: '昨年 女子', value: 220, color: '#F59E0B' },
      { label: '今年 女子', value: 209, color: '#B45309' },
    ],
    caption: '昨年の男子180人が10%増えて198人（+18人）、昨年の女子220人が5%減って209人（−11人）。合計では 400人 → 407人 で7人の増加になり、問題の条件と一致する',
  },

  // s102：8%200g と 3%300g を混ぜて 5%500g（食塩の量で考える）
  lf_kokomathext03_102: {
    kind: 'barChart',
    xLabel: 'それぞれに含まれる食塩の量',
    yLabel: '食塩（g）',
    yMax: 30,
    bars: [
      { label: '8%の食塩水200g', value: 16, color: '#0EA5E9' },
      { label: '3%の食塩水300g', value: 9, color: '#0369A1' },
      { label: '混ぜた5%の食塩水500g', value: 25, color: '#16A34A' },
    ],
    caption: '食塩水を混ぜても食塩そのものの量は変わらない。200×0.08=16g と 300×0.03=9g を合わせた25gが、500gの食塩水にとけている。25÷500=0.05 なので濃度は5%になる',
  },

  // s104：x²=9 の解は ±3（原点から等距離の2点）
  lf_kokomathext03_104: {
    kind: 'numberLine',
    min: -5,
    max: 5,
    step: 1,
    points: [
      { x: -3, label: 'x=−3' },
      { x: 3, label: 'x=3' },
    ],
    caption: '2乗して9になる数は3だけではない。−3も (−3)×(−3)=9 となるので解である。x²=k の解は、原点から等しい距離だけ左右に離れた2点になる',
  },

  // s105：(x+3)²=4 の解は −1 と −5（中心 −3 から左右に2ずつ）
  lf_kokomathext03_105: {
    kind: 'numberLine',
    min: -8,
    max: 2,
    step: 1,
    points: [
      { x: -5, label: 'x=−5' },
      { x: -3, label: '中心 −3', open: true },
      { x: -1, label: 'x=−1' },
    ],
    caption: '(x+3)²=4 は x+3=±2 なので x=−3±2。2つの解 −1 と −5 は、白丸で示した中心 x=−3 から左右に2ずつ離れた位置にある。中心はかっこの中を0にする値',
  },

  // s106：y=x²+6x+5=(x+3)²−4 の頂点と x軸との交点
  lf_kokomathext03_106: {
    kind: 'coordinate',
    xRange: [-7, 1],
    yRange: [-6, 8],
    parabolas: [{ a: 1, b: 6, c: 5, label: 'y=x²+6x+5' }],
    points: [
      { x: -1, y: 0, label: 'x=−1' },
      { x: -5, y: 0, label: 'x=−5' },
      { x: -3, y: -4, label: '頂点(−3, −4)' },
    ],
    caption: 'x²+6x+5 を平方完成すると (x+3)²−4。頂点が (−3, −4) にあることが式から読み取れる。この放物線が x 軸と交わる x=−1, x=−5 が方程式 x²+6x+5=0 の解',
  },

  // s108：解の公式で解く x²−3x−1=0（解が無理数でもグラフ上には2点ある）
  lf_kokomathext03_108: {
    kind: 'coordinate',
    xRange: [-2, 5],
    yRange: [-5, 6],
    parabolas: [{ a: 1, b: -3, c: -1, label: 'y=x²−3x−1' }],
    points: [
      { x: 3.303, y: 0, label: '(3+√13)/2 ≒ 3.30' },
      { x: -0.303, y: 0, label: '(3−√13)/2 ≒ −0.30' },
    ],
    caption: 'x²−3x−1=0 は因数分解できないが、解の公式を使うと x=(3±√13)/2 と求まる。√13≒3.606 なので約3.30と約−0.30。放物線が x 軸を横切る2点がその解にあたる',
  },

  // s112：y=x²−5x+6 の x軸との交点＝因数分解 (x−2)(x−3)=0 の解
  lf_kokomathext03_112: {
    kind: 'coordinate',
    xRange: [-1, 6],
    yRange: [-2, 8],
    parabolas: [{ a: 1, b: -5, c: 6, label: 'y=x²−5x+6' }],
    points: [
      { x: 2, y: 0, label: 'x=2' },
      { x: 3, y: 0, label: 'x=3' },
    ],
    caption: 'x²−5x+6=(x−2)(x−3) と因数分解できるので、y=0 になるのは x=2 と x=3 のとき。因数分解した式のかっこの中を0にする値が、そのままグラフと x 軸との交点になっている',
  },

  // s115：道を端に寄せて考える（縦10m・横15mの土地、道幅 x m、残り126m²）
  lf_kokomathext03_115: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 14, y: 0 },
      { x: 14, y: 9 },
      { x: 0, y: 9 },
    ],
    sideLabels: ['(15−x) m', '(10−x) m', '(15−x) m', '(10−x) m'],
    fill: true,
    rightAngles: [0, 1, 2, 3],
    caption: '縦10m・横15mの土地に幅 x m の道を縦横1本ずつ作ったとき、道を土地のはしに寄せて考えると、残った土地は縦(10−x) m・横(15−x) mの長方形1つにまとまる。(10−x)(15−x)=126 を解くと x=1（x=24 は土地の幅をこえるので不適）',
  },

  // s116：正方形の厚紙の四すみを切り取って作る箱（1辺12cm、切り取り x cm）
  lf_kokomathext03_116: {
    kind: 'solid',
    shape: 'cuboid',
    labels: {
      width: '(12−2x) cm',
      depth: '(12−2x) cm',
      height: 'x cm',
    },
    caption: '1辺12cmの正方形の厚紙の四すみから1辺 x cm の正方形を切り取って折り曲げた箱。左右両はしから x ずつ切るので底面の1辺は 12−2x cm、高さが x cm になる。底面積が64cm²なら (12−2x)²=64 より 12−2x=8、x=2（x<6 が必要なので 12−2x=−8 の側は不適）',
  },

  // s118：動点 P・Q と △PBQ（AB=8cm、BC=12cm、3秒後）
  lf_kokomathext03_118: {
    kind: 'coordinate',
    xRange: [-2, 14],
    yRange: [-2, 10],
    segments: [
      [
        { x: 0, y: 8 },
        { x: 0, y: 0 },
      ],
      [
        { x: 0, y: 0 },
        { x: 12, y: 0 },
      ],
      [
        { x: 12, y: 0 },
        { x: 12, y: 8 },
      ],
      [
        { x: 12, y: 8 },
        { x: 0, y: 8 },
      ],
    ],
    polygon: [
      { x: 0, y: 5 },
      { x: 0, y: 0 },
      { x: 6, y: 0 },
    ],
    points: [
      { x: 0, y: 8, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 12, y: 0, label: 'C' },
      { x: 12, y: 8, label: 'D' },
      { x: 0, y: 5, label: 'P' },
      { x: 6, y: 0, label: 'Q' },
    ],
    caption: '長方形ABCD（AB=8cm、BC=12cm）。点PはAからBへ毎秒1cm、点QはBからCへ毎秒2cmで動く。出発してt秒後は AP=t なので PB=(8−t) cm、BQ=2t cm。図は t=3 のときで PB=5cm、BQ=6cm、△PBQ=1/2×5×6=15cm²',
  },

  // s119：判別式の符号と放物線の位置関係（D>0・D=0・D<0）
  lf_kokomathext03_119: {
    kind: 'coordinate',
    xRange: [-1, 5],
    yRange: [-2, 8],
    parabolas: [
      { a: 1, b: -4, c: 3, label: 'y=x²−4x+3（D=4>0）' },
      { a: 1, b: -4, c: 4, label: 'y=x²−4x+4（D=0）' },
      { a: 1, b: -4, c: 5, label: 'y=x²−4x+5（D=−4<0）' },
    ],
    points: [
      { x: 1, y: 0, label: 'x=1' },
      { x: 3, y: 0, label: 'x=3' },
      { x: 2, y: 0, label: 'x=2（重解）' },
    ],
    caption: '3本とも形は同じで、上下にずれているだけ。D=b²−4ac が正なら x 軸を2点で横切り解は2つ、0ならx軸に接して解は1つ（重解）、負ならx軸と交わらず実数の解はない',
  },
};
