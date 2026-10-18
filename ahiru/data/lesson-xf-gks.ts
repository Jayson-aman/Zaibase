// 高校受験 数学（中1〜中3）の追加単元 5 件の「動く図解スライド」（各 8 枚）。
// 「なぜ？→答え→では、なぜ？→答え…」の連鎖で、式を出して終わりにしない。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, show, fresh, stack } from './diagram-kit';

type Col = [string, string];
const BLUE: Col = [C.blue, FILL.blue];
const GREEN: Col = [C.green, FILL.green];
const RED: Col = [C.red, FILL.red];
const MAIN: Col = [C.main, FILL.warm];
const PURPLE: Col = [C.purple, FILL.purple];
const GRAY: Col = [C.gray, FILL.gray];

// 下の帯（y=164 から）に、そのスライドのひとことを出す。\n で改行できる。
const cap = (t: string, c: Col = BLUE, size = 12): DiagramElement => {
  const n = t.split('\n').length;
  return bx(10, 164, 300, 14 + 15 * n, t, c[0], c[1], size);
};

// 1枚のスライド＝まっさらな図＋下の帯
const S = (note: string, top: DiagramElement[], capText: string, c: Col = BLUE, size = 12) => ({
  note,
  add: fresh(...top, cap(capText, c, size)),
});

// 「なぜ？」の問い → 答え
const Q = (note: string, q: string, a: string, capText: string, c: Col = BLUE, aSize = 13) =>
  S(
    note,
    [
      bx(10, 8, 300, 34, 'なぜ？ ' + q, PURPLE[0], PURPLE[1], 12),
      ar(160, 44, 160, 56, PURPLE[0]),
      bx(10, 58, 300, 92, a, c[0], c[1], aSize),
    ],
    capText,
    c,
  );

// 表（先頭行は見出し）。colW は各列の幅。hl は赤くする [行, 列]。
const tab = (rows: string[][], y0: number, colW: number[], h = 26, size = 12, hl: [number, number][] = []): DiagramElement[] => {
  const tw = colW.reduce((a, b) => a + b, 0);
  const sx = (320 - tw) / 2;
  const out: DiagramElement[] = [];
  rows.forEach((r, i) => {
    let x = sx;
    r.forEach((t, j) => {
      const on = hl.some(([a, b]) => a === i && b === j);
      const c = i === 0 ? BLUE : on ? RED : MAIN;
      out.push(bx(x, y0 + i * h, colW[j], h, t, c[0], on ? FILL.red : i === 0 ? FILL.blue : FILL.warm, size));
      x += colW[j];
    });
  });
  return out;
};

// 座標平面（原点 (ox,oy)、1目もりが u px）。labelsX は x軸に数字を出す位置。
const grid = (ox: number, oy: number, u: number, x0: number, x1: number, y0: number, y1: number, labelsX: number[] = []) => {
  const px = (x: number) => ox + u * x;
  const py = (y: number) => oy - u * y;
  const els: DiagramElement[] = [
    ln(px(x0), oy, px(x1), oy, C.gray, false, 1.4),
    ln(ox, py(y1), ox, py(y0), C.gray, false, 1.4),
    lb(px(x1) + 2, oy + 14, 'x', 11, C.ink, 'start', true),
    lb(ox + 6, py(y1) + 8, 'y', 11, C.ink, 'start', true),
    lb(ox - 5, oy + 12, 'O', 10, C.ink, 'end'),
  ];
  for (let v = Math.ceil(x0); v <= x1; v++) {
    if (v === 0) continue;
    els.push(ln(px(v), oy - 3, px(v), oy + 3, C.gray, false, 1));
  }
  for (let v = Math.ceil(y0); v <= y1; v++) {
    if (v === 0) continue;
    els.push(ln(ox - 3, py(v), ox + 3, py(v), C.gray, false, 1));
  }
  labelsX.forEach((v) => els.push(lb(px(v), oy + 14, String(v).replace('-', '−'), 9, C.gray, 'middle')));
  return { px, py, els };
};

const dot = (cx: number, cy: number, c: Col, r = 4): DiagramElement => ci(cx, cy, r, undefined, c[0], c[0]);

// ════════════════════════════════════════════════════
// 01 座標平面と点の位置（中1）
// ════════════════════════════════════════════════════
const g1 = grid(160, 82, 16, -9, 9, -4, 4, [-8, -6, -4, -2, 2, 4, 6, 8]);
const f01 = show(
  [
    S(
      '平面の上にある点の位置を、数だけで相手に伝えるにはどうしたらよいでしょう。そこで、横の数直線と縦の数直線を1本ずつ、0の点で直角に交わらせます。これが座標平面で、交わる点を原点O、横の線をx軸、縦の線をy軸といいます。',
      [...g1.els, lb(g1.px(4), g1.py(2.6), 'x軸（横）', 11, C.blue, 'middle', true), lb(g1.px(-4), g1.py(3.2), 'y軸（縦）', 11, C.blue, 'middle', true)],
      '数直線を横と縦に1本ずつ、0で直角に交わらせる\n交わる点が原点 O',
      MAIN,
    ),
    Q(
      'なぜ、位置を表すのに数が2つ必要なのでしょう。数直線1本では、横の位置しか決まりません。平面には縦の広がりもあるので、縦の位置を表すもう1つの数がいります。球場の「3列目の2番」と同じで、2つの数がそろって1つの点が決まります。',
      '位置を表すのに、数が2つ必要なのは？',
      '数直線1本では「横の位置」しか決まらない\n平面には「縦の位置」もある\n横の数と縦の数の2つがそろって、点が1つに決まる\n（球場の「3列目の2番」と同じ）',
      '2つの数の組が、点の住所になる',
      PURPLE,
      12,
    ),
    S(
      '点Pのx座標は、Pから下にまっすぐおろしたx軸の目もり、y座標は、Pから左へまっすぐ引いたy軸の目もりです。P(3, 2) は、原点から右へ3、上へ2進んだ点を表します。',
      [
        ...g1.els,
        ln(g1.px(3), 82, g1.px(3), g1.py(2), C.red, true, 1.2),
        ln(160, g1.py(2), g1.px(3), g1.py(2), C.red, true, 1.2),
        dot(g1.px(3), g1.py(2), RED),
        lb(g1.px(3) + 7, g1.py(2) - 4, 'P(3, 2)', 11, C.red, 'start', true),
        lb(g1.px(3), 82 + 26, 'x座標＝3（横）', 10, C.red, 'middle'),
        lb(154, g1.py(2) + 4, 'y座標＝2（縦）', 10, C.red, 'end'),
      ],
      'P(3, 2)：原点から右へ3、上へ2\n書く順番は「横 → 縦」',
      RED,
    ),
    S(
      '(3, 2) と (2, 3) は、数字は同じでも別の点です。球場で「3列目の2番」と「2列目の3番」が別の席なのと同じで、座標は順番が決まった数の組だからです。必ず「横、縦」の順に書きます。',
      [
        ...g1.els,
        dot(g1.px(3), g1.py(2), RED),
        lb(g1.px(3) + 7, g1.py(2) + 12, '(3, 2)', 11, C.red, 'start', true),
        dot(g1.px(2), g1.py(3), BLUE),
        lb(g1.px(2) + 7, g1.py(3) - 2, '(2, 3)', 11, C.blue, 'start', true),
      ],
      '(3, 2) と (2, 3) は、別の点\n順番を入れかえてはいけない',
      MAIN,
    ),
    S(
      'では、なぜ象限の符号はこの並びになるのでしょう。x軸は右が正で左が負、y軸は上が正で下が負だからです。右上は(＋,＋)、左上はxが負でyが正なので(−,＋)というように、4つの部分の符号が決まります。数え方は、右上から反時計回りに第1〜第4象限です。',
      [
        ...g1.els,
        lb(g1.px(4.5), g1.py(2.6), '第1象限', 11, C.green, 'middle', true),
        lb(g1.px(4.5), g1.py(1.4), '(＋, ＋)', 11, C.green, 'middle'),
        lb(g1.px(-4.5), g1.py(2.6), '第2象限', 11, C.blue, 'middle', true),
        lb(g1.px(-4.5), g1.py(1.4), '(−, ＋)', 11, C.blue, 'middle'),
        lb(g1.px(-4.5), g1.py(-2), '第3象限', 11, C.purple, 'middle', true),
        lb(g1.px(-4.5), g1.py(-3.2), '(−, −)', 11, C.purple, 'middle'),
        lb(g1.px(4.5), g1.py(-2), '第4象限', 11, C.red, 'middle', true),
        lb(g1.px(4.5), g1.py(-3.2), '(＋, −)', 11, C.red, 'middle'),
      ],
      '右・上が正、左・下が負 だから符号が決まる\n軸の上の点は、どの象限にも入らない',
      GREEN,
    ),
    S(
      'x座標が同じ2点は、同じ縦線の上に並びます。この線はy軸に平行です。距離は上下の差で、大きいほうから小さいほうを引きます。A(3, 2) と B(3, −3) なら 2−(−3)＝5。原点をはさんでいても、引き算の形になるのがポイントです。',
      [
        ...g1.els,
        ln(g1.px(3), g1.py(2), g1.px(3), g1.py(-3), C.red, true, 1.4),
        dot(g1.px(3), g1.py(2), BLUE),
        dot(g1.px(3), g1.py(-3), BLUE),
        lb(g1.px(3) + 7, g1.py(2) - 4, 'A(3, 2)', 11, C.blue, 'start', true),
        lb(g1.px(3) + 7, g1.py(-3) + 4, 'B(3, −3)', 11, C.blue, 'start', true),
        lb(g1.px(3) + 8, g1.py(1.3), '距離 5', 11, C.red, 'start', true),
      ],
      'x座標が同じ → 縦線（y軸に平行）\n長さ ＝ 2 −(−3) ＝ 5',
      RED,
    ),
    S(
      '対称な点は、折り目になる軸をはさんで反対側にあります。x軸を折り目にすると上下だけが入れかわるので、y座標の符号だけが変わります。y軸なら左右が入れかわり、x座標の符号だけが変わります。原点について対称なら、両方が変わります。',
      [
        ...g1.els,
        dot(g1.px(3), g1.py(2), RED),
        lb(g1.px(3) + 7, g1.py(2) - 4, 'P(3, 2)', 11, C.red, 'start', true),
        dot(g1.px(3), g1.py(-2), BLUE),
        lb(g1.px(3) + 7, g1.py(-2) + 12, '(3, −2)', 11, C.blue, 'start'),
        dot(g1.px(-3), g1.py(2), GREEN),
        lb(g1.px(-3) - 7, g1.py(2) - 4, '(−3, 2)', 11, C.green, 'end'),
        dot(g1.px(-3), g1.py(-2), PURPLE),
        lb(g1.px(-3) - 7, g1.py(-2) + 12, '(−3, −2)', 11, C.purple, 'end'),
      ],
      'x軸について対称 → y座標の符号だけ変わる\ny軸について対称 → x座標の符号だけ変わる\n原点について対称 → 両方の符号が変わる',
      MAIN,
      11,
    ),
    S(
      'まとめです。①点は「横、縦」の順に書く。②右上から反時計回りに第1〜第4象限で、軸の上は象限に入らない。③x座標が同じなら縦線、y座標が同じなら横線で、距離は座標の差。④対称な点は、折り目と反対側の座標の符号を変える。',
      stack(
        ['① 点は（横, 縦）の順に書く', '② 右上から反時計回りに 第1〜第4象限', '③ 同じ座標をもつ点は、一直線に並ぶ', '④ 対称な点は、反対側の座標の符号を変える'],
        10,
        300,
        6,
        { h: 26, gap: 10, color: C.main, fill: FILL.warm, size: 12 },
      ).flat(),
      '座標は「順番」と「符号」がすべて',
      MAIN,
    ),
  ],
  '座標平面と点の位置',
);

// ════════════════════════════════════════════════════
// 02 数の範囲と四則計算（中1）
// ════════════════════════════════════════════════════
const f02 = show(
  [
    S(
      '3−5 は、小学校で習った数（0より大きい整数）だけでは答えが出ません。1、2、3、…という数の中には、3から5を引いた答えがないからです。ここから、数の範囲を広げる話が始まります。',
      [
        bx(50, 14, 220, 56, '3 − 5 ＝ ？', C.red, FILL.red, 24),
        lb(160, 96, '自然数（1, 2, 3, …）の中には', 13, C.ink, 'middle', true),
        lb(160, 118, '答えにあたる数がない', 13, C.ink, 'middle', true),
        lb(160, 142, '→ 数の範囲を広げる必要が出た', 12, C.main, 'middle'),
      ],
      '引けない計算が出たとき、数の範囲は広がった',
      MAIN,
    ),
    Q(
      'では、なぜ数の範囲は3つもあるのでしょう。計算を広げるたびに、答えが出ない場面が出てきて、そのたびに新しい数をつけ足したからです。引き算のために0と負の数を足して整数に、割り算のために分数や小数を足して有理数になりました。',
      '数の範囲が3つもあるのは？',
      '計算のたびに「答えが出ない」場面が出た\n3−5 → 0と負の数を足して 整数 へ\n3÷4 → 分数・小数を足して 有理数 へ\nできない計算を、できるようにするため',
      '新しい数は、できない計算を救うために生まれた',
      PURPLE,
      12,
    ),
    S(
      '自然数に、0と負の整数をつけ足した数の仲間が整数です。整数の中に自然数が入っているので、自然数は整数の一部だとわかります。0は自然数には入れません。',
      [
        bx(8, 10, 304, 118, undefined, C.blue, FILL.blue),
        lb(160, 28, '整数', 14, C.blue, 'middle', true),
        bx(16, 40, 112, 78, '負の整数\n…, −3, −2, −1', C.purple, FILL.purple, 12),
        bx(136, 40, 52, 78, '0', C.gray, FILL.gray, 16),
        bx(196, 40, 108, 78, '自然数\n1, 2, 3, …', C.green, FILL.green, 12),
      ],
      '整数 ＝ 負の整数 ＋ 0 ＋ 自然数\n自然数は、整数の一部',
      BLUE,
    ),
    S(
      '整数どうしの割り算 1÷2 や 3÷4 は、整数では答えが出ません。そこで、整数の分母で表せる数を全部ふくむ範囲に広げます。これが有理数で、0.5 や 3/4、−5/3 のような数もふくみます。整数 5 も 5/1 と書けるので、有理数の仲間です。',
      [
        bx(6, 6, 308, 152, undefined, C.main, FILL.warm),
        lb(160, 22, '有理数', 14, C.main, 'middle', true),
        bx(12, 30, 176, 122, undefined, C.blue, FILL.blue),
        lb(100, 46, '整数', 12, C.blue, 'middle', true),
        bx(18, 54, 78, 92, '自然数\n1, 2, 3, …', C.green, FILL.green, 11),
        bx(102, 54, 80, 92, '0 と\n負の整数', C.purple, FILL.purple, 11),
        bx(194, 34, 114, 114, '整数でない数\n0.5　3/4\n−5/3　0.25', C.red, FILL.red, 11),
      ],
      '有理数 ＝ 整数 ＋ 整数でない分数（小数）',
      MAIN,
    ),
    S(
      '3つの範囲で、加減乗除がいつでもできるかをまとめた表です。自然数は引き算と割り算が、整数は割り算が、いつでもできるとは限りません。有理数では、0でわる場合を除いて、四則がすべてできます。',
      [
        ...tab(
          [
            ['範囲', 'たし算', 'ひき算', 'かけ算', 'わり算'],
            ['自然数', '○', '×', '○', '×'],
            ['整数', '○', '○', '○', '×'],
            ['有理数', '○', '○', '○', '○'],
          ],
          12,
          [70, 58, 58, 58, 58],
          28,
          12,
          [[1, 2], [1, 4], [2, 4]],
        ),
        lb(160, 142, '有理数のわり算は、0でわる場合を除く', 11, C.gray, 'middle'),
      ],
      '×の例：3−5　3÷6　1÷2',
      GREEN,
    ),
    Q(
      'なぜ「×」と言い切れるのでしょう。「いつでもできる」と言うには、例外が1つもないことが必要だからです。1つでも例外（反例）が見つかれば、「いつでもできるとは限らない」と言えます。たとえば整数どうしの 1÷2＝0.5 は整数ではありません。',
      '「×」と言い切れるのは？',
      '「いつでも」には、例外が1つもないことが必要\n例外（反例）が1つでもあれば「×」\n例：整数どうしの 1÷2＝0.5 は整数でない\n○と言うには、すべての場合の理由が要る',
      '反例は1つ見つければ十分',
      PURPLE,
      12,
    ),
    S(
      '整数だけでは、数直線の目もりの間の点を表せません。たとえば1と2の真ん中の点は1.5（＝3/2）で、整数ではありません。有理数まで広げると、1.5 や 1/4 のような点も数で表せます。',
      [
        ln(20, 70, 300, 70, C.gray, false, 1.6),
        ...[0, 1, 2, 3, 4].flatMap((v) => [ln(30 + v * 65, 64, 30 + v * 65, 76, C.gray, false, 1.4), lb(30 + v * 65, 92, String(v), 12, C.ink, 'middle')]),
        ci(30 + 1.5 * 65, 70, 6, undefined, C.red, FILL.red),
        lb(30 + 1.5 * 65, 48, '1.5（＝3/2）', 12, C.red, 'middle', true),
        ar(30 + 1.5 * 65, 54, 30 + 1.5 * 65, 63, C.red),
        lb(160, 124, '整数の目もりだけでは、この点が表せない', 12, C.ink, 'middle'),
      ],
      '有理数まで広げると、1.5 や 1/4 の点も表せる',
      RED,
    ),
    S(
      'まとめです。数の範囲は、自然数、整数、有理数の順に広がります。広げるたびに、それまでできなかった計算ができるようになります。計算がいつでもできるかを調べるときは、0、負の数、分数を入れた具体例を試して、反例を探します。',
      stack(
        ['自然数 → 整数 → 有理数（順に広がる）', '広げた理由：引き算・割り算のため', '調べ方：0・負の数・分数で反例を探す', '有理数でも 0でわる計算はできない'],
        10,
        300,
        6,
        { h: 26, gap: 10, color: C.main, fill: FILL.warm, size: 12 },
      ).flat(),
      '範囲を広げるたびに、できる計算がふえる',
      MAIN,
    ),
  ],
  '数の範囲と四則計算',
);

// ════════════════════════════════════════════════════
// 03 近似値・誤差・有効数字（中3前半）
// ════════════════════════════════════════════════════
const nl3 = (v: number) => 40 + ((v - 12.3) / 0.15) * 240;
const nl4 = (v: number) => 40 + (v - 270) * 12;
const f03 = show(
  [
    S(
      '長さを測ったり、数をまるめたりして得た値は、本当の値（真の値）とは少しだけずれます。測った値やまるめた値を近似値といいます。たとえば、真の値が 12.36cm のものを 12.4cm と読んだとき、12.4 が近似値です。',
      [
        bx(12, 14, 130, 62, '真の値\n12.36 cm', C.blue, FILL.blue, 15),
        bx(178, 14, 130, 62, '近似値\n12.4 cm', C.red, FILL.red, 15),
        ar(144, 45, 176, 45, C.main),
        lb(160, 108, '少しだけずれる', 13, C.ink, 'middle', true),
        lb(160, 132, 'このずれを「誤差」という', 13, C.main, 'middle', true),
      ],
      '測った値・まるめた値は近似値\n真の値とは少しずれる',
      MAIN,
    ),
    S(
      '誤差は、近似値から真の値を引いた差です。12.4−12.36＝0.04 なので誤差は 0.04。近似値が真の値より大きければ誤差は＋、小さければ−になります。',
      [
        ln(30, 80, 290, 80, C.gray, false, 1.6),
        ...[12.3, 12.35, 12.4, 12.45].flatMap((v) => [ln(nl3(v), 74, nl3(v), 86, C.gray, false, 1.4), lb(nl3(v), 102, v.toFixed(2).replace(/0$/, ''), 11, C.ink, 'middle')]),
        ci(nl3(12.36), 80, 5, undefined, C.blue, FILL.blue),
        lb(nl3(12.36), 56, '真の値 12.36', 11, C.blue, 'middle', true),
        ci(nl3(12.4), 80, 5, undefined, C.red, FILL.red),
        lb(nl3(12.4), 40, '近似値 12.4', 11, C.red, 'middle', true),
        ar(nl3(12.36) + 6, 66, nl3(12.4) - 6, 66, C.main),
        lb(160, 134, '誤差 ＝ 12.4 − 12.36 ＝ 0.04', 13, C.main, 'middle', true),
      ],
      '誤差 ＝ 近似値 − 真の値\n近似値が大きければ ＋、小さければ −',
      RED,
    ),
    Q(
      'なぜ、近似値には「どこまで当てになるか」を示す必要があるのでしょう。測った値は、最小の目もりの10分の1まで目分量で読むので、必ず誤差をふくみます。どの位まで信じてよいかが分からないと、その値を使った計算結果も信用できません。',
      '近似値に「当てになる桁」が大事なのは？',
      '測定値は目分量をふくむので、必ず誤差がある\nどの位まで信じてよいか分からないと\nその値を使った計算の答えも信用できない\n→ 信じてよい数字を「有効数字」という',
      '近似値は「どの桁まで当てになるか」とセット',
      PURPLE,
      12,
    ),
    S(
      '一の位を四捨五入して 280 になった数 a の範囲を考えます。275 は四捨五入すると 280 になり、285 は 290 になります。だから a は 275 以上 285 未満で、誤差の大きさは 5 以下です。',
      [
        ln(30, 80, 290, 80, C.gray, false, 1.6),
        ...[270, 275, 280, 285, 290].flatMap((v) => [ln(nl4(v), 74, nl4(v), 86, C.gray, false, 1.4), lb(nl4(v), 102, String(v), 11, C.ink, 'middle')]),
        ln(nl4(275), 64, nl4(285), 64, C.red, false, 3),
        ci(nl4(275), 80, 5, undefined, C.red, C.red),
        ci(nl4(285), 80, 5, undefined, C.red, '#FFFFFF'),
        lb(nl4(280), 46, '275 以上 285 未満', 12, C.red, 'middle', true),
        lb(160, 134, '●は ふくむ　○は ふくまない', 11, C.gray, 'middle'),
      ],
      '一の位を四捨五入して 280 になる数は\n275 ≦ a ＜ 285',
      RED,
    ),
    Q(
      'なぜ、275 は入るのに 285 は入らないのでしょう。四捨五入は、5 になったら切り上げるきまりだからです。275 は 280 に切り上がるので入ります。285 は 290 に切り上がってしまうので入りません。だから右はしだけ「未満」になります。',
      '275 は入るのに、285 は入らないのは？',
      '四捨五入は、5 で切り上げるきまり\n275 → 280（入る）\n285 → 290（入らない）\nだから、右はしだけ「未満」になる',
      '左は以上（ふくむ）、右は未満（ふくまない）',
      PURPLE,
      13,
    ),
    S(
      '有効数字は、近似値の中の、信じてよい数字です。a×10ⁿ（a は1以上10未満）の形で書くと、桁数がはっきり分かります。2.5×10³ は2桁、2.50×10³ は3桁、2.500×10³ は4桁で、真の値の範囲は右の表のように、桁数が多いほどせまくなります。',
      tab(
        [
          ['書き方', '桁数', '真の値の範囲'],
          ['2.5×10³ m', '2桁', '2450 以上 2550 未満'],
          ['2.50×10³ m', '3桁', '2495 以上 2505 未満'],
          ['2.500×10³ m', '4桁', '2499.5 以上 2500.5 未満'],
        ],
        18,
        [88, 42, 170],
        30,
        11,
      ),
      '桁数が多い ＝ 範囲がせまい ＝ 精度が高い',
      GREEN,
    ),
    Q(
      'なぜ 2500 ではなく 2.50×10³ と書くのでしょう。2500 とだけ書くと、最後の 0 が測って得た数字なのか、位を表すだけの 0 なのか区別がつきません。2.50×10³ と書けば、2・5・0 の3桁が信頼できる、とはっきり示せます。',
      '2500 ではなく 2.50×10³ と書くのは？',
      '2500 だけでは、末尾の 0 の意味が分からない\n測った 0 か、位取りの 0 か区別できない\n2.50×10³ なら 2・5・0 の3桁が有効と分かる\n桁数をはっきり示すための書き方',
      '桁数を見せるために a×10ⁿ の形にする',
      PURPLE,
      12,
    ),
    S(
      'まとめです。誤差は「近似値−真の値」。四捨五入でできた近似値は、右はしだけ「未満」の範囲になります。有効数字は a×10ⁿ の形で桁数を示します。乗除の計算結果は、もとの数の有効数字の桁数が少ないほうにそろえてまとめます。',
      stack(
        ['誤差 ＝ 近似値 − 真の値', '四捨五入の範囲は 以上〜未満', '有効数字は a×10ⁿ で桁数を示す', '計算結果は 有効数字の少ない桁にそろえる'],
        10,
        300,
        6,
        { h: 26, gap: 10, color: C.main, fill: FILL.warm, size: 12 },
      ).flat(),
      '近似値は「範囲」と「桁数」で読む',
      MAIN,
    ),
  ],
  '近似値・誤差・有効数字',
);

// ════════════════════════════════════════════════════
// 04 三角形の重心（中3夏）
// ════════════════════════════════════════════════════
const tA: [number, number] = [110, 20];
const tB: [number, number] = [30, 140];
const tC: [number, number] = [290, 140];
const tM: [number, number] = [160, 140];
const tE: [number, number] = [200, 80];
const tF: [number, number] = [70, 80];
const tG: [number, number] = [(110 + 30 + 290) / 3, (20 + 140 + 140) / 3];
const tri = (c: string = C.main): DiagramElement[] => [ln(...tA, ...tB, c, false, 1.8), ln(...tB, ...tC, c, false, 1.8), ln(...tC, ...tA, c, false, 1.8)];
const vlabels: DiagramElement[] = [
  lb(tA[0] - 6, tA[1] + 4, 'A', 12, C.ink, 'end', true),
  lb(tB[0] - 6, tB[1] + 12, 'B', 12, C.ink, 'end', true),
  lb(tC[0] + 6, tC[1] + 12, 'C', 12, C.ink, 'start', true),
];
const cent = (a: [number, number], b: [number, number], c: [number, number]): [number, number] => [(a[0] + b[0] + c[0]) / 3, (a[1] + b[1] + c[1]) / 3];
const f04 = show(
  [
    S(
      '三角形の頂点と、向かい合う辺の中点を結んだ線分を中線といいます。ここでは頂点Aと辺BCの中点Mを結ぶ線分AMが中線です。三角形には頂点が3つあるので、中線も3本引けます。',
      [...tri(), ...vlabels, dot(...tM, BLUE), lb(tM[0], tM[1] + 14, 'M（BCの中点）', 11, C.blue, 'middle', true), ln(...tA, ...tM, C.blue, false, 2.2)],
      '頂点と、向かいの辺の中点を結ぶ線分が「中線」',
      BLUE,
    ),
    S(
      '残りの2本の中線BEとCFも引くと、3本の中線は不思議なことに1点で交わります。この交点を重心といい、Gで表します。なぜ1点で交わるのかは、このあとの「なぜ？」で確かめます。',
      [
        ...tri(),
        ...vlabels,
        ln(...tA, ...tM, C.blue, false, 2),
        ln(...tB, ...tE, C.green, false, 2),
        ln(...tC, ...tF, C.purple, false, 2),
        dot(...tG, RED, 5),
        lb(tG[0] + 8, tG[1] - 6, 'G', 13, C.red, 'start', true),
        lb(tM[0], tM[1] + 14, 'M', 11, C.blue, 'middle', true),
        lb(tE[0] + 8, tE[1] - 2, 'E', 11, C.green, 'start', true),
        lb(tF[0] - 8, tF[1] - 2, 'F', 11, C.purple, 'end', true),
      ],
      '3本の中線は1点で交わる\nその点が重心 G',
      RED,
    ),
    S(
      'では、なぜ重心は中線を2対1に分けるのでしょう。EとFはAC、ABの中点なので、中点連結定理から FE は BC に平行で、長さは BC の半分です。すると△GFE と△GCB は2組の角が等しく相似で、相似比は FE:BC＝1:2 になります。',
      [
        pg([tG, tF, tE], C.main, FILL.yellow),
        pg([tG, tC, tB], C.blue, FILL.blue),
        ...tri(),
        ...vlabels,
        ln(...tB, ...tE, C.green, false, 2),
        ln(...tC, ...tF, C.purple, false, 2),
        ln(...tF, ...tE, C.red, true, 2),
        dot(...tG, RED, 5),
        lb(tG[0] + 8, tG[1] - 6, 'G', 13, C.red, 'start', true),
        lb(tE[0] + 8, tE[1] - 2, 'E', 11, C.green, 'start', true),
        lb(tF[0] - 8, tF[1] - 2, 'F', 11, C.purple, 'end', true),
      ],
      'FE∥BC、FE＝BC の半分\n△GFE ∽ △GCB（相似比 1:2）',
      MAIN,
    ),
    S(
      '相似比が1対2なので、GE:GB＝1:2、つまりBG:GE＝2:1です。CFについても同じで、CG:GF＝2:1。3本目の中線AMも、BEとの交点がBE を2対1に分けます。BEを頂点側から2対1に分ける点は1つしかないので、3本とも同じ点Gを通ります。',
      stack(
        ['△GFE ∽ △GCB　相似比 1:2', 'GE:GB ＝ 1:2　→ BG:GE ＝ 2:1', 'AM も同じ理屈で BE を 2:1 に分ける', '2:1 に分ける点は1つだけ → 3本が1点に'],
        10,
        300,
        6,
        { h: 26, gap: 10, color: C.main, fill: FILL.warm, size: 12 },
      ).flat(),
      '重心は、各中線を「頂点側：辺側＝2：1」に分ける',
      MAIN,
    ),
    S(
      'では、なぜ中線は面積を2等分するのでしょう。△ABMと△ACMは、底辺BMとMCが等しく、頂点Aからの高さも同じだからです。底辺と高さが同じなら面積は等しくなるので、中線は三角形を同じ面積の2つに分けます。',
      [
        pg([tA, tB, tM], C.blue, FILL.blue),
        pg([tA, tM, tC], C.green, FILL.green),
        ...tri(),
        ...vlabels,
        ln(...tA, ...tM, C.main, false, 2),
        lb(tM[0], tM[1] + 14, 'M', 11, C.ink, 'middle', true),
        lb(90, 108, '△ABM', 12, C.blue, 'middle', true),
        lb(205, 112, '△ACM', 12, C.green, 'middle', true),
      ],
      '底辺 BM＝MC、高さも同じ\n→ △ABM ＝ △ACM（面積が等しい）',
      GREEN,
    ),
    S(
      '三角形ABCの面積を36とします。△ABMは18で、その中でAG:GM＝2:1なので△GBMは18の3分の1の6、△ABGは12です。同じように他の中線でも分けると、重心のまわりの6つの小三角形は、どれも面積が6で等しくなります。',
      [
        ...[
          [tG, tA, tF, FILL.red],
          [tG, tF, tB, FILL.blue],
          [tG, tB, tM, FILL.red],
          [tG, tM, tC, FILL.blue],
          [tG, tC, tE, FILL.red],
          [tG, tE, tA, FILL.blue],
        ].map((t) => pg([t[0] as [number, number], t[1] as [number, number], t[2] as [number, number]], C.gray, t[3] as string)),
        ...tri(),
        ...vlabels,
        ln(...tA, ...tM, C.gray, false, 1.2),
        ln(...tB, ...tE, C.gray, false, 1.2),
        ln(...tC, ...tF, C.gray, false, 1.2),
        ...[
          [tG, tA, tF],
          [tG, tF, tB],
          [tG, tB, tM],
          [tG, tM, tC],
          [tG, tC, tE],
          [tG, tE, tA],
        ].map((t) => {
          const c = cent(t[0] as [number, number], t[1] as [number, number], t[2] as [number, number]);
          return lb(c[0], c[1] + 4, '6', 12, C.ink, 'middle', true);
        }),
        dot(...tG, RED, 3),
      ],
      '6つの小三角形は、どれも面積が等しい\n36 ÷ 6 ＝ 6',
      MAIN,
    ),
    S(
      '座標で考えます。A(0, 6)、B(−3, 0)、C(6, 0) の重心は、x座標どうし、y座標どうしの平均で G(1, 2) です。BCの中点Mは(1.5, 0)で、AからMへ向かって2対1の点も(1, 2)になり、一致します。△GBCは底辺9、高さ2で面積9。△ABCは27なので、ちょうど3分の1です。',
      [
        bx(10, 8, 300, 26, 'A(0, 6)　B(−3, 0)　C(6, 0)', C.main, FILL.warm, 13),
        bx(10, 40, 300, 26, 'x座標の平均 (0−3+6)÷3 ＝ 1', C.blue, FILL.blue, 13),
        bx(10, 72, 300, 26, 'y座標の平均 (6+0+0)÷3 ＝ 2', C.blue, FILL.blue, 13),
        bx(10, 104, 300, 44, '重心 G(1, 2)\n△GBC＝9 は △ABC＝27 の 3分の1', C.red, FILL.red, 13),
      ],
      '座標の重心は、3点の座標の平均',
      RED,
    ),
    S(
      'まとめです。重心は3本の中線の交点で、各中線を頂点側から2対1に分けます。小三角形6つの面積は等しく、重心をふくむ三角形は、もとの三角形の3分の1になります。座標では3点の座標の平均が重心です。',
      stack(
        ['中線 → 3本が1点（重心）で交わる', '頂点側：辺側 ＝ 2：1', '6つの小三角形は面積が等しい', '座標の重心 ＝ 3点の座標の平均'],
        10,
        300,
        6,
        { h: 26, gap: 10, color: C.main, fill: FILL.warm, size: 12 },
      ).flat(),
      '重心は「2:1」「面積6等分」「平均」の3点セット',
      MAIN,
    ),
  ],
  '三角形の重心',
);

// ════════════════════════════════════════════════════
// 05 対称移動を使った最短経路（中3秋〜直前）
// ════════════════════════════════════════════════════
const g5 = grid(40, 120, 20, -1, 8, -1.4, 5.7, [1, 2, 3, 4, 5, 6, 7]);
const pA: [number, number] = [g5.px(1), g5.py(1)];
const pB: [number, number] = [g5.px(7), g5.py(5)];
const pA2: [number, number] = [g5.px(1), g5.py(-1)];
const pP: [number, number] = [g5.px(2), g5.py(0)];
const pP0: [number, number] = [g5.px(4), g5.py(0)];
const f05 = show(
  [
    S(
      'Aの家から川の岸(x軸)のどこかのP に寄って水をくみ、Bの家へ行きます。Pを岸のどこにするかで、道のりAP＋PBは変わります。たとえば P0(4, 0) なら√10＋√34 で約 9.0。いちばん短くなるPはどこでしょう。',
      [
        ...g5.els,
        ln(...pA, ...pP0, C.red, true, 1.4),
        ln(...pP0, ...pB, C.red, true, 1.4),
        dot(...pA, BLUE),
        dot(...pB, BLUE),
        dot(...pP0, RED),
        lb(pA[0] + 7, pA[1] - 5, 'A(1, 1)', 11, C.blue, 'start', true),
        lb(pB[0] + 7, pB[1] + 4, 'B(7, 5)', 11, C.blue, 'start', true),
        lb(pP0[0] + 4, pP0[1] + 26, 'P0(4, 0)', 10, C.red, 'middle'),
        lb(280, 118, '川（x軸）', 11, C.gray, 'middle'),
      ],
      'AからPに寄ってBへ行く道のりを最短にしたい\nPをどこにすればよいか',
      MAIN,
    ),
    Q(
      'なぜ、Aを川の反対側にうつした点を考えるのでしょう。岸は、Aとそのうつした点A′を結ぶ線分の垂直二等分線になります。垂直二等分線上の点は2点から等しい距離にあるので、岸のどこにPをとっても AP＝A′P が成り立つからです。',
      'Aを川の反対側にうつすのは？',
      "x軸について A をひっくり返した点 A′ をとる\nx軸は AA′ の垂直二等分線\nだからx軸上のどこに P をとっても AP＝A′P\nAP を A′P に置きかえてよい",
      '長さを変えずに、点を反対側へ移せる',
      PURPLE,
      12,
    ),
    S(
      'A(1, 1) をx軸について対称移動すると、A′(1, −1) です。x軸上の点P0について、AP0 と A′P0 は同じ長さです。どの点をとっても、この2本の長さは変わりません。',
      [
        ...g5.els,
        ln(...pA, ...pA2, C.gray, true, 1.2),
        ln(...pA, ...pP0, C.red, true, 1.4),
        ln(...pA2, ...pP0, C.blue, true, 1.4),
        dot(...pA, BLUE),
        dot(...pA2, BLUE),
        dot(...pP0, RED),
        lb(pA[0] - 6, pA[1] - 2, 'A', 12, C.blue, 'end', true),
        lb(pA2[0] + 8, pA2[1] + 8, "A′(1, −1)", 11, C.blue, 'start', true),
        lb(pP0[0], pP0[1] - 8, 'P0', 11, C.red, 'middle', true),
        lb(230, 60, 'AP0 ＝ A′P0', 13, C.main, 'middle', true),
      ],
      "x軸上のどこにPをとっても AP ＝ A′P\n（x軸は AA′ の垂直二等分線）",
      BLUE,
    ),
    Q(
      "では、なぜ A′B を一直線に結ぶと最短なのでしょう。AP＋PB は、AP を A′P に置きかえると A′P＋PB になります。これは A′ から P を通って B へ行く折れ線で、2点間の最短は直線です。A′、P、B が一直線のときに最小になります。",
      "A′B を直線で結ぶと最短なのは？",
      "AP＋PB ＝ A′P＋PB（AP＝A′P だから）\nA′ から P を通って B へ行く道のりと同じ\n2点間でいちばん短いのは直線\n→ A′, P, B が一直線のとき最小",
      '折れ線を、まっすぐな線に変えて考える',
      PURPLE,
      12,
    ),
    S(
      "A′ と B を結ぶ直線が、x軸と交わる点がPです。A′(1, −1)、B(7, 5) を結ぶ直線は y＝x−2。y＝0 を代入すると x＝2 なので、P(2, 0) です。このとき AP と PB は、同じ角度で岸に当たります。",
      [
        ...g5.els,
        ln(...pA2, ...pB, C.green, false, 2.2),
        ln(...pA, ...pP, C.red, false, 1.8),
        dot(...pA, BLUE),
        dot(...pA2, BLUE),
        dot(...pB, BLUE),
        dot(...pP, RED, 5),
        lb(pA[0] - 6, pA[1] - 2, 'A', 12, C.blue, 'end', true),
        lb(pA2[0] - 6, pA2[1] + 8, "A′", 12, C.blue, 'end', true),
        lb(pB[0] + 7, pB[1] + 4, 'B', 12, C.blue, 'start', true),
        lb(pP[0] + 4, pP[1] + 26, 'P(2, 0)', 11, C.red, 'start', true),
      ],
      "A′, P, B が一直線 → AP＋PB が最小\nそのときの P が P(2, 0)",
      GREEN,
    ),
    S(
      "座標で手順を確かめます。A′(1, −1) と B(7, 5) の傾きは (5+1)÷(7−1)＝1。点(1, −1) を通るので y＝x−2。x軸との交点は y＝0 のときで、x＝2。したがって P(2, 0) です。",
      [
        ...g5.els,
        ln(...pA2, ...pB, C.green, false, 2),
        dot(...pA2, BLUE),
        dot(...pB, BLUE),
        dot(...pP, RED, 5),
        bx(204, 8, 108, 30, "A′(1,−1) B(7,5)", C.main, FILL.warm, 10),
        bx(204, 44, 108, 30, '傾き 6÷6＝1', C.blue, FILL.blue, 10),
        bx(204, 80, 108, 30, '直線 y＝x−2', C.blue, FILL.blue, 11),
        bx(204, 116, 108, 30, 'y＝0 → x＝2 P(2, 0)', C.red, FILL.red, 10),
      ],
      "直線 A′B と x軸 の交点を求めればよい",
      GREEN,
    ),
    S(
      "最小の長さは A′B＝√(6²＋6²)＝6√2 です。確かめると、AP＝√2、PB＝5√2 で、合計は 6√2 と一致します。P0(4, 0) だと √10＋√34 ≒ 8.99 で、6√2 ≒ 8.49 より長くなり、P(2, 0) が最短だと確かめられます。",
      [
        bx(10, 10, 300, 30, "最小 ＝ A′B ＝ √(6²＋6²) ＝ 6√2", C.red, FILL.red, 13),
        bx(10, 46, 300, 30, 'AP ＝ √2　PB ＝ 5√2　合計 6√2', C.green, FILL.green, 13),
        bx(10, 82, 300, 44, 'P0(4, 0) だと √10＋√34 ≒ 8.99\n6√2 ≒ 8.49 より 長い', C.blue, FILL.blue, 13),
        lb(160, 146, '直線で結んだ長さが、いちばん短い', 12, C.main, 'middle', true),
      ],
      '最小の長さ ＝ A′B ＝ 6√2',
      RED,
    ),
    S(
      "A、Bがx軸の両側にあるときは、対称移動はいりません。A(1, 3)、B(5, −1) なら、直線ABが最短で、y＝−x＋4。x軸との交点が P(4, 0)、最小の長さは AB＝4√2 です。対称移動を使うのは、A、Bが同じ側にあるときだけです。",
      [
        ...g5.els,
        ln(g5.px(1), g5.py(3), g5.px(5), g5.py(-1), C.green, false, 2.2),
        dot(g5.px(1), g5.py(3), BLUE),
        dot(g5.px(5), g5.py(-1), BLUE),
        dot(g5.px(4), g5.py(0), RED, 5),
        lb(g5.px(1) + 7, g5.py(3) - 5, 'A(1, 3)', 11, C.blue, 'start', true),
        lb(g5.px(5) + 7, g5.py(-1) + 8, 'B(5, −1)', 11, C.blue, 'start', true),
        bx(204, 14, 108, 30, '直線AB y＝−x＋4', C.blue, FILL.blue, 10),
        bx(204, 50, 108, 30, 'P(4, 0)', C.red, FILL.red, 11),
        bx(204, 86, 108, 30, '最小 ＝ AB ＝ 4√2', C.red, FILL.red, 10),
      ],
      "両側にあるとき → そのままABを結ぶ\n同じ側にあるとき → 片方を対称移動する",
      MAIN,
    ),
  ],
  '対称移動を使った最短経路',
);

export const XF_GKS_FIGURES: Record<string, DiagramFigure> = {
  xf_gap_gks_01: f01,
  xf_gap_gks_02: f02,
  xf_gap_gks_03: f03,
  xf_gap_gks_04: f04,
  xf_gap_gks_05: f05,
};

export const XF_GKS_SECTIONS: Record<string, string> = {
  'gap_gks_01#0': 'xf_gap_gks_01',
  'gap_gks_02#0': 'xf_gap_gks_02',
  'gap_gks_03#0': 'xf_gap_gks_03',
  'gap_gks_04#0': 'xf_gap_gks_04',
  'gap_gks_05#0': 'xf_gap_gks_05',
};
