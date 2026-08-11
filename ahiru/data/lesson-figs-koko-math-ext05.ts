import type { Figure } from './figures';

// 高校受験 数学「関数 y=ax²（二次関数）」拡張ユニット（koko_math_s156〜s190）の図解。
// キーは lessons-koko-math-ext05.ts の figureId と完全一致させてある。
// 座標・交点・面積はすべて本文の数値と一致するよう検算済み。
export const lessonFigsKokoMathExt05: Record<string, Figure> = {
  // s156 y=x² の対応表とグラフ（y軸対称）
  lf_kokomathext05_156: {
    kind: 'coordinate',
    xRange: [-4, 4],
    yRange: [-1, 10],
    parabolas: [{ a: 1, label: 'y=x²' }],
    points: [
      { x: -2, y: 4, label: '(−2, 4)' },
      { x: -1, y: 1, label: '(−1, 1)' },
      { x: 0, y: 0, label: '(0, 0)' },
      { x: 1, y: 1, label: '(1, 1)' },
      { x: 2, y: 4, label: '(2, 4)' },
      { x: 3, y: 9, label: '(3, 9)' },
    ],
    caption: 'x と −x で y の値が等しいので、グラフは y 軸について対称。頂点は原点、軸は y 軸',
  },

  // s158 a の符号と絶対値でグラフがどう変わるか
  lf_kokomathext05_158: {
    kind: 'coordinate',
    xRange: [-3, 3],
    yRange: [-9, 9],
    parabolas: [
      { a: 2, label: 'y=2x²' },
      { a: 0.5, label: 'y=(1/2)x²' },
      { a: -1, label: 'y=−x²' },
    ],
    points: [
      { x: 2, y: 8, label: '(2, 8)' },
      { x: 2, y: 2, label: '(2, 2)' },
      { x: 2, y: -4, label: '(2, −4)' },
    ],
    caption: 'a>0 は上向き、a<0 は下向き。|a| が大きいほど細く、小さいほど横に広がる（x=2 での値で比較）',
  },

  // s161 0 をまたがない変域
  lf_kokomathext05_161: {
    kind: 'coordinate',
    xRange: [-1, 5],
    yRange: [-1, 9],
    parabolas: [{ a: 0.5, label: 'y=(1/2)x²' }],
    points: [
      { x: 0, y: 0, label: 'x=0 → y=0' },
      { x: 2, y: 2, label: 'x=2 → y=2' },
      { x: 4, y: 8, label: 'x=4 → y=8' },
    ],
    caption: '0≦x≦4 なら 0≦y≦8。2≦x≦4 なら x=0 を含まないので 2≦y≦8（0 は入らない）',
  },

  // s162 ★ 0 をまたぐ変域：最小値は端ではなく原点でとる
  lf_kokomathext05_162: {
    kind: 'coordinate',
    xRange: [-3, 4],
    yRange: [-1, 10],
    parabolas: [{ a: 1, label: 'y=x²' }],
    points: [
      { x: -1, y: 1, label: '左端 (−1, 1)' },
      { x: 0, y: 0, label: '最小 (0, 0)' },
      { x: 3, y: 9, label: '右端 (3, 9)' },
    ],
    segments: [
      [
        { x: -1, y: 1 },
        { x: -1, y: 0 },
      ],
      [
        { x: 3, y: 9 },
        { x: 3, y: 0 },
      ],
    ],
    caption: '−1≦x≦3 は x=0 を含むので最小値は 0。答えは 0≦y≦9 で、1≦y≦9 は誤り',
  },

  // s163 a<0 のときの変域（最大値が 0）
  lf_kokomathext05_163: {
    kind: 'coordinate',
    xRange: [-3, 5],
    yRange: [-9, 1],
    parabolas: [{ a: -0.5, label: 'y=−(1/2)x²' }],
    points: [
      { x: -2, y: -2, label: '左端 (−2, −2)' },
      { x: 0, y: 0, label: '最大 (0, 0)' },
      { x: 4, y: -8, label: '最小 (4, −8)' },
    ],
    caption: '−2≦x≦4 では x=0 で最大値 0、|x| が最大の x=4 で最小値 −8。答えは −8≦y≦0',
  },

  // s166 変化の割合＝2点を結ぶ直線の傾き
  lf_kokomathext05_166: {
    kind: 'coordinate',
    xRange: [-1, 4],
    yRange: [-4, 11],
    parabolas: [{ a: 1, label: 'y=x²' }],
    lines: [{ a: 4, b: -3, label: 'y=4x−3' }],
    points: [
      { x: 1, y: 1, label: '(1, 1)' },
      { x: 3, y: 9, label: '(3, 9)' },
    ],
    caption: 'x が 1→3 のときの変化の割合 (9−1)÷(3−1)=4 は、2点を結ぶ直線の傾き 4 に等しい',
  },

  // s170 原点を通る直線との交点（x で割ると原点が消える）
  lf_kokomathext05_170: {
    kind: 'coordinate',
    xRange: [-2, 4],
    yRange: [-2, 12],
    parabolas: [{ a: 2, label: 'y=2x²' }],
    lines: [{ a: 4, b: 0, label: 'y=4x' }],
    points: [
      { x: 0, y: 0, label: '(0, 0)' },
      { x: 2, y: 8, label: '(2, 8)' },
    ],
    caption: '2x²=4x の両辺を x で割ると原点の交点が消える。2x(x−2)=0 と因数分解して x=0, 2',
  },

  // s171 2交点を通る直線（傾き a(p+q)、切片 −apq）
  lf_kokomathext05_171: {
    kind: 'coordinate',
    xRange: [-5, 6],
    yRange: [-2, 10],
    parabolas: [{ a: 0.5, label: 'y=(1/2)x²' }],
    lines: [{ a: 1, b: 4, label: 'y=x+4' }],
    points: [
      { x: -2, y: 2, label: 'A(−2, 2)' },
      { x: 4, y: 8, label: 'B(4, 8)' },
      { x: 0, y: 4, label: 'C(0, 4)' },
    ],
    caption: '傾きは a(p+q)=(1/2)(−2+4)=1、切片は −apq=−(1/2)(−2)(4)=4。よって y=x+4',
  },

  // s172 △OAB を y 軸で分けて面積を求める
  lf_kokomathext05_172: {
    kind: 'coordinate',
    xRange: [-4, 4],
    yRange: [-1, 11],
    parabolas: [{ a: 1, label: 'y=x²' }],
    lines: [{ a: 1, b: 6, label: 'y=x+6' }],
    polygon: [
      { x: 0, y: 0, label: 'O' },
      { x: -2, y: 4, label: 'A' },
      { x: 3, y: 9, label: 'B' },
    ],
    points: [
      { x: -2, y: 4, label: 'A(−2, 4)' },
      { x: 3, y: 9, label: 'B(3, 9)' },
      { x: 0, y: 6, label: 'C(0, 6)' },
    ],
    caption: 'OC=6 を底辺に △OAC=(1/2)×6×2=6、△OCB=(1/2)×6×3=9。△OAB=15（高さは x 座標）',
  },

  // s175 別の数値で同じ型（△OAB=12）
  lf_kokomathext05_175: {
    kind: 'coordinate',
    xRange: [-5, 4],
    yRange: [-1, 10],
    parabolas: [{ a: 0.5, label: 'y=(1/2)x²' }],
    lines: [{ a: -1, b: 4, label: 'y=−x+4' }],
    polygon: [
      { x: 0, y: 0, label: 'O' },
      { x: -4, y: 8, label: 'A' },
      { x: 2, y: 2, label: 'B' },
    ],
    points: [
      { x: -4, y: 8, label: 'A(−4, 8)' },
      { x: 2, y: 2, label: 'B(2, 2)' },
      { x: 0, y: 4, label: 'C(0, 4)' },
    ],
    caption: 'OC=4、A と B の x 座標の差は 4+2=6。△OAB=(1/2)×4×6=12',
  },

  // s178 動点 P と直線の縦の距離 PQ が最大になるところ
  lf_kokomathext05_178: {
    kind: 'coordinate',
    xRange: [-2, 3],
    yRange: [-1, 6],
    parabolas: [{ a: 1, label: 'y=x²' }],
    lines: [{ a: 1, b: 2, label: 'y=x+2' }],
    polygon: [
      { x: -1, y: 1, label: 'A' },
      { x: 0.5, y: 0.25, label: 'P' },
      { x: 2, y: 4, label: 'B' },
    ],
    points: [
      { x: -1, y: 1, label: 'A(−1, 1)' },
      { x: 2, y: 4, label: 'B(2, 4)' },
      { x: 0.5, y: 0.25, label: 'P(1/2, 1/4)' },
      { x: 0.5, y: 2.5, label: 'Q(1/2, 5/2)' },
    ],
    segments: [
      [
        { x: 0.5, y: 0.25 },
        { x: 0.5, y: 2.5 },
      ],
    ],
    caption: 'PQ=(x+2)−x² は x=1/2（A と B の x 座標の平均）で最大 9/4。△PAB=(1/2)×3×(9/4)=27/8',
  },

  // s179 放物線上の4点でできる台形
  lf_kokomathext05_179: {
    kind: 'coordinate',
    xRange: [-4, 4],
    yRange: [-1, 11],
    parabolas: [{ a: 1, label: 'y=x²' }],
    polygon: [
      { x: -3, y: 9, label: 'A' },
      { x: 3, y: 9, label: 'D' },
      { x: 1, y: 1, label: 'C' },
      { x: -1, y: 1, label: 'B' },
    ],
    points: [
      { x: -3, y: 9, label: 'A(−3, 9)' },
      { x: -1, y: 1, label: 'B(−1, 1)' },
      { x: 1, y: 1, label: 'C(1, 1)' },
      { x: 3, y: 9, label: 'D(3, 9)' },
    ],
    caption: 'BC=2、AD=6、高さ 9−1=8 の台形。面積は (1/2)×(2+6)×8=32',
  },

  // s180 等積変形：AB に平行な直線上なら面積は変わらない
  lf_kokomathext05_180: {
    kind: 'coordinate',
    xRange: [-4, 5],
    yRange: [-2, 11],
    parabolas: [{ a: 1, label: 'y=x²' }],
    lines: [
      { a: 1, b: 6, label: 'y=x+6（直線AB）' },
      { a: 1, b: 0, label: 'y=x（Oを通る平行線）' },
    ],
    points: [
      { x: -2, y: 4, label: 'A(−2, 4)' },
      { x: 3, y: 9, label: 'B(3, 9)' },
      { x: 4, y: 4, label: 'P(4, 4)' },
      { x: 1, y: 1, label: '(1, 1)' },
    ],
    caption: 'y=x 上のどの点 P でも △PAB=△OAB=15。放物線との交点 (1, 1) も条件を満たす',
  },

  // s181 中線が面積を2等分する
  lf_kokomathext05_181: {
    kind: 'coordinate',
    xRange: [-2, 4],
    yRange: [-1, 10],
    parabolas: [{ a: 1, label: 'y=x²' }],
    lines: [
      { a: 2, b: 3, label: 'y=2x+3（直線AB）' },
      { a: 5, b: 0, label: 'y=5x（2等分）' },
    ],
    polygon: [
      { x: 0, y: 0, label: 'O' },
      { x: -1, y: 1, label: 'A' },
      { x: 3, y: 9, label: 'B' },
    ],
    points: [
      { x: -1, y: 1, label: 'A(−1, 1)' },
      { x: 3, y: 9, label: 'B(3, 9)' },
      { x: 1, y: 5, label: 'M(1, 5)' },
    ],
    caption: 'AB の中点 M(1, 5) は x も y も平均。OM は △OAB（面積6）を 3 と 3 に2等分する',
  },

  // s184 3点から平行四辺形をつくる
  lf_kokomathext05_184: {
    kind: 'coordinate',
    xRange: [-2, 3],
    yRange: [-1, 6],
    parabolas: [{ a: 1, label: 'y=x²' }],
    polygon: [
      { x: 0, y: 0, label: 'O' },
      { x: -1, y: 1, label: 'A' },
      { x: 1, y: 5, label: 'C' },
      { x: 2, y: 4, label: 'B' },
    ],
    points: [
      { x: -1, y: 1, label: 'A(−1, 1)' },
      { x: 2, y: 4, label: 'B(2, 4)' },
      { x: 1, y: 5, label: 'C(1, 5)' },
    ],
    caption: '平行四辺形 OACB では C=A+B−O=(1, 5)。対角線 OC と AB の中点はどちらも (1/2, 5/2)',
  },

  // s186 x 軸への垂線でできる相似（相似比 4:9）
  lf_kokomathext05_186: {
    kind: 'coordinate',
    xRange: [-7, 4],
    yRange: [-2, 11],
    parabolas: [{ a: 1, label: 'y=x²' }],
    lines: [{ a: 1, b: 6, label: 'y=x+6' }],
    points: [
      { x: -6, y: 0, label: 'D(−6, 0)' },
      { x: -2, y: 4, label: 'A(−2, 4)' },
      { x: -2, y: 0, label: "A′" },
      { x: 3, y: 9, label: 'B(3, 9)' },
      { x: 3, y: 0, label: "B′" },
    ],
    segments: [
      [
        { x: -2, y: 4 },
        { x: -2, y: 0 },
      ],
      [
        { x: 3, y: 9 },
        { x: 3, y: 0 },
      ],
    ],
    caption: 'DA′=4、DB′=9、AA′=4、BB′=9。△DAA′∽△DBB′（相似比 4:9、面積比 16:81）',
  },

  // s188 落下距離 y=4.9x²（意味があるのは x≧0 の部分だけ）
  lf_kokomathext05_188: {
    kind: 'coordinate',
    xRange: [-0.5, 3.5],
    yRange: [-5, 50],
    parabolas: [{ a: 4.9, label: 'y=4.9x²' }],
    points: [
      { x: 1, y: 4.9, label: '1秒 4.9m' },
      { x: 2, y: 19.6, label: '2秒 19.6m' },
      { x: 3, y: 44.1, label: '3秒 44.1m' },
    ],
    caption: '時間は負にならないので x≧0 の部分だけが意味をもつ。2秒後→4秒後の平均の速さは 4.9×(2+4)=29.4 m/秒',
  },
};
