// 算数の教科書図解を、絵（人・箱・線分図・面積図）で描き直したもの（p08）。lesson-figs-sansu-pic.ts と同じ作り。
// 相似・移動・立体の切断など、棒グラフや座標では何の絵か伝わらなかった図を、図形そのものと数の流れで描く。
import type { Figure, DiagramElement } from './figures';
import { show, bx, lb, ln, ar, ci, pg, sc, C, FILL } from './diagram-kit';

type P = [number, number];
type E = DiagramElement;

/** 数学の座標（x,y）を、画面の座標へ（原点の位置と1めもりの長さを決める）。 */
const tf = (ox: number, oy: number, sx: number, sy: number = sx) => (x: number, y: number): P => [ox + x * sx, oy - y * sy];
const lerp = (p: P, q: P, t: number): P => [p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t];
/** 色をぬる領域（うすい色。下の文字や線を隠さない）。 */
const T = {
  blue: 'rgba(2,132,199,0.22)',
  red: 'rgba(225,29,72,0.20)',
  green: 'rgba(22,163,74,0.22)',
  yellow: 'rgba(250,204,21,0.40)',
  purple: 'rgba(147,51,234,0.20)',
  water: 'rgba(2,132,199,0.45)',
};
const L = (p: P, q: P, color: string = C.ink, dashed = false, w = 2): E => ln(p[0], p[1], q[0], q[1], color, dashed, w);
const AR = (p: P, q: P, color: string = C.red, dashed = false): E => ar(p[0], p[1], q[0], q[1], color, dashed);
/** 頂点の名前（点のすぐ近くに太字で）。 */
const nm = (p: P, t: string, dx: number, dy: number, color: string = C.ink): E => lb(p[0] + dx, p[1] + dy, t, 13, color, 'middle', true);
const dt = (p: P, color: string = C.ink, r = 3.5): E => ci(p[0], p[1], r, undefined, color, color);
const deg = (c: P, p: P): number => (Math.atan2(-(p[1] - c[1]), p[0] - c[0]) * 180) / Math.PI;
const norm = (a: number): number => ((a % 360) + 360) % 360;
/** 点c で、cからaへの線とcからbへの線のあいだの角（小さいほう）を色でぬる。 */
const wedge = (c: P, r: number, a: P, b: P, color: string, fill: string): E => {
  let a1 = norm(deg(c, a));
  let a2 = norm(deg(c, b));
  if (norm(a2 - a1) > 180) [a1, a2] = [a2, a1];
  return sc(c[0], c[1], r, a1, a2 < a1 ? a2 + 360 : a2, color, fill);
};
/** 辺の真ん中に、長さが等しいしるし（短い横線）。 */
const tick = (p: P, q: P, color: string = C.red): E => {
  const mx = (p[0] + q[0]) / 2, my = (p[1] + q[1]) / 2;
  const dx = q[0] - p[0], dy = q[1] - p[1];
  const len = Math.hypot(dx, dy) || 1;
  const nx = (-dy / len) * 5, ny = (dx / len) * 5;
  return ln(mx - nx, my - ny, mx + nx, my + ny, color, false, 2.2);
};
/** 三角形などの辺を、順に矢印でたどる（内側へ少しよせて描く）。向きを見せるために使う。 */
const loop = (pts: P[], color: string): E[] => {
  const g: P = [pts.reduce((s, p) => s + p[0], 0) / pts.length, pts.reduce((s, p) => s + p[1], 0) / pts.length];
  return pts.map((p, i) => {
    const q = pts[(i + 1) % pts.length];
    return AR(lerp(p, g, 0.22), lerp(q, g, 0.22), color);
  });
};
/** 円のふち（線だけ）。文字が円の上に乗る検査を避けるため、ふちだけの扇形で描く。from は半径の線をかく向き。 */
const ring = (c: P, r: number, color: string, from = 0): E => sc(c[0], c[1], r, from, from + 359.9, color, 'none');
/** n×n のマスの正方形。 */
const gridSq = (x: number, y: number, n: number, cell: number, color: string, fill: string): E[] => {
  const out: E[] = [bx(x, y, n * cell, n * cell, undefined, color, fill)];
  for (let i = 1; i < n; i++) {
    out.push(ln(x + i * cell, y, x + i * cell, y + n * cell, color, false, 0.8));
    out.push(ln(x, y + i * cell, x + n * cell, y + i * cell, color, false, 0.8));
  }
  return out;
};

export const lessonFigsSansuPicP08: Record<string, Figure> = {
  // 台形→三角形（下底を上底と同じ長さだけのばす）
  lf_sansu_ext04_153: (() => {
    const m = tf(20, 168, 17);
    const a = m(0, 0), b = m(10, 0), c = m(7, 5), d = m(1, 5), e = m(16, 0);
    return show(
      [
        { note: '問 台形ABCDの面積は、いくつでしょうか。答 （上底6＋下底10）×高さ5÷2＝40cm²です。この台形を、面積を変えずに三角形に作りかえてみましょう。',
          add: [pg([a, b, c, d], C.blue, T.blue), nm(a, 'A', -8, 16), nm(b, 'B', 2, 16), nm(c, 'C', 4, -7), nm(d, 'D', -4, -7),
            lb(88, 75, '上底 6cm', 12, C.blue, 'middle', true), lb(105, 200, '下底 10cm', 12, C.blue, 'middle', true),
            L(d, [d[0], 168], C.gray, true, 1.6), lb(41, 130, '高さ5cm', 12, C.gray, 'start', true),
            lb(160, 216, '台形 (6＋10)×5÷2＝40cm²', 12, C.blue, 'middle', true)] },
        { note: '問 台形を三角形に変えるには、どうすればよいでしょうか。答 下底ABをBの先へ、上底と同じ6cmだけのばして点Eとし、DとEを結びます。',
          add: [L(b, e, C.green, false, 4), L(d, e, C.red, false, 2.2), dt(e, C.green), nm(e, 'E', 4, 16), lb(241, 184, 'のばす6cm', 12, C.green, 'middle', true)] },
        { note: '問 台形を対角線BDで2つの三角形に分けると、面積はいくつずつでしょうか。答 三角形ABDは底辺10×高さ5÷2＝25cm²、三角形DBCは底辺6×高さ5÷2＝15cm²です。合わせて40cm²になります。',
          add: [L(d, b, C.ink, true, 1.6), pg([a, b, d], C.blue, T.blue), pg([b, c, d], C.red, T.red),
            lb(82, 142, '△ABD 25', 12, C.blue, 'middle', true), lb(122, 116, '△DBC 15', 12, C.red, 'middle', true)] },
        { note: '問 のばしてできた三角形DBEの面積は、三角形DBCと比べてどうでしょうか。答 DBEも底辺BEが6cm、高さが5cmなので、6×5÷2＝15cm²で、DBCと同じ大きさです。DBCを切り取ってDBEをつけ足したのだから、面積は変わりません。',
          add: [pg([b, e, d], C.green, T.green), lb(198, 152, '△DBE 15', 12, C.green, 'middle', true)] },
        { note: '問 できた三角形ADEの面積は、いくつでしょうか。答 底辺AE＝10＋6＝16cm、高さ5cmなので、16×5÷2＝40cm²です。底辺が「上底＋下底」になるのがポイントです。',
          add: [pg([a, e, d], C.main, 'none'), lb(235, 200, '底辺 16cm', 12, C.main, 'middle', true), lb(160, 232, '三角形ADE 16×5÷2＝40cm²', 12, C.main, 'middle', true)] },
        { note: '問 答えが正しいか、どう確かめますか。答 台形は25＋15＝40cm²、三角形ADEも25＋15＝40cm²で、ぴったり同じです。台形の公式は、この三角形の面積の式そのものです。',
          add: [lb(312, 22, '台形 ＝ 25＋15 ＝ 40', 13, C.blue, 'end', true), lb(312, 42, '三角形 ＝ 25＋15 ＝ 40 ✓', 13, C.red, 'end', true)] },
      ],
      '台形ABCD（上底6cm・下底10cm・高さ5cm）。下底を上底と同じ6cmのばしてEとすると、三角形ADEの面積は台形と等しく、(6＋10)×5÷2＝40cm²',
    );
  })(),

  // 相似とは・相似の3条件
  lf_sansu_ext04_154: (() => {
    const m = tf(18, 150, 22);
    const a = m(0, 0), b = m(3, 0), c = m(1, 2), a2 = m(6, 0), b2 = m(12, 0), c2 = m(8, 4);
    return show(
      [
        { note: '問 「相似」とは、どんな関係でしょうか。答 形がまったく同じで、大きさだけがちがう関係です。小さい△ABCと大きい△A′B′C′は、相似です。',
          add: [pg([a, b, c], C.blue, T.blue), pg([a2, b2, c2], C.green, T.green),
            nm(a, 'A', -6, 16), nm(b, 'B', 4, 16), nm(c, 'C', 0, -8), nm(a2, 'A′', -8, 16), nm(b2, 'B′', 6, 16), nm(c2, 'C′', 0, -8)] },
        { note: '問 辺の長さは、どうちがうでしょうか。答 すべての辺が2倍の長さです。AB＝3cmに対してA′B′＝6cm。ほかの辺も1：2で、この比を「相似比」といいます。',
          add: [lb(51, 184, 'AB 3cm', 12, C.blue, 'middle', true), lb(216, 184, 'A′B′ 6cm', 12, C.green, 'middle', true), lb(117, 118, '相似比\n1:2', 12, C.red, 'middle', true)] },
        { note: '問 角は、どうなっているでしょうか。答 対応する角は、それぞれ等しくなっています。角A＝角A′（赤）、角B＝角B′（緑）です。',
          add: [wedge(a, 16, b, c, C.red, T.red), wedge(a2, 16, b2, c2, C.red, T.red), wedge(b, 16, a, c, C.green, T.green), wedge(b2, 16, a2, c2, C.green, T.green)] },
        { note: '問 3つの角を全部調べないと、相似とは言えないでしょうか。答 いいえ。三角形の内角の和は180°なので、2組の角が等しければ、残りの1組（紫）も等しくなります。これが「AA相似」で、入試でいちばんよく使われます。',
          add: [wedge(c, 14, a, b, C.purple, T.purple), wedge(c2, 14, a2, b2, C.purple, T.purple)] },
        { note: '問 ほかに、相似とわかる条件はあるでしょうか。答 全部で3つあります。①2組の角が等しい（AA）、②2組の辺の比が等しく、その間の角も等しい（SAS）、③3組の辺の比がすべて等しい（SSS）です。',
          add: [bx(8, 196, 98, 36, 'AA相似\n2組の角が等しい', C.red, FILL.red, 11), bx(111, 196, 98, 36, 'SAS相似\n2辺の比と間の角', C.green, FILL.green, 11), bx(214, 196, 98, 36, 'SSS相似\n3組の辺の比', C.blue, FILL.blue, 11)] },
        { note: '問 「合同」とは、どうちがうでしょうか。答 合同は大きさも形も同じで、相似比が1：1の特別な場合です。相似は、形が同じなら大きさがちがってもかまいません。',
          add: [lb(160, 30, '合同 ＝ 相似比1:1（大きさも同じ）', 12, C.main, 'middle', true)] },
      ],
      '△ABCと△A′B′C′は形が同じで大きさが2倍（相似比1:2）。対応する角はそれぞれ等しく、対応する辺の比はすべて1:2',
    );
  })(),

  // ピラミッド型の相似（AD:DB＝3:4、AB＝14、BC＝21）
  lf_sansu_ext04_155: (() => {
    const a: P = [110, 40], b: P = [58, 170], c: P = [214, 170];
    const d = lerp(a, b, 3 / 7), e = lerp(a, c, 3 / 7);
    return show(
      [
        { note: '問 DEがBCと平行のとき、△ADEと△ABCはどんな関係でしょうか。答 形が同じ、相似な三角形です。小さい△ADEと、大きい△ABCです。',
          add: [pg([a, b, c], C.blue, 'none'), pg([a, d, e], C.red, T.red), L(d, e, C.red, false, 2.4),
            nm(a, 'A', 0, -7), nm(b, 'B', -8, 14), nm(c, 'C', 8, 14), nm(d, 'D', -11, 4), nm(e, 'E', 11, 4)] },
        { note: '問 なぜ相似といえるのでしょうか。答 DEとBCが平行なので、同位角が等しく、角ADE＝角ABC（赤）です。角Aは共通（緑）なので、2組の角が等しく、AA相似になります。',
          add: [wedge(d, 14, e, a, C.red, T.red), wedge(b, 14, c, a, C.red, T.red), wedge(a, 18, b, c, C.green, T.green)] },
        { note: '問 相似比は、どの辺とどの辺の比でしょうか。答 対応する辺の比、AD：ABです（部分：全体）。AD：DB＝3：4のときは、AD：AB＝3：（3＋4）＝3：7です。AD：DBは相似比ではありません。',
          add: [L(a, d, C.green, false, 4), L(d, b, C.red, false, 4), lb(222, 52, 'AD:DB＝3:4', 13, C.red, 'start', true), lb(222, 72, 'AD:AB＝3:7', 13, C.green, 'start', true)] },
        { note: '問 AB＝14cmのとき、ADは何cmでしょうか。答 14÷7＝2が1つぶんで、ADは3つぶんなので、2×3＝6cm。DBは4つぶんで8cmです。',
          add: [lb(88, 70, 'AD 6cm', 12, C.green, 'end', true), lb(64, 134, 'DB 8cm', 12, C.red, 'end', true), lb(222, 100, '14÷7×3＝6cm', 13, C.green, 'start', true)] },
        { note: '問 BC＝21cmのとき、DEは何cmでしょうか。答 DE：BC＝AD：AB＝3：7なので、21÷7×3＝9cmです。',
          add: [lb(121, 112, 'DE 9cm', 12, C.red, 'middle', true), lb(136, 190, 'BC 21cm', 12, C.blue, 'middle', true), lb(222, 122, '21÷7×3＝9cm', 13, C.red, 'start', true)] },
        { note: '問 答えが正しいか、どう確かめますか。答 AD：DB＝6：8＝3：4、DE：BC＝9：21＝3：7となり、はじめの比と合います。',
          add: [lb(222, 146, '6:8＝3:4 ✓', 13, C.main, 'start', true), lb(222, 164, '9:21＝3:7 ✓', 13, C.main, 'start', true)] },
      ],
      'AD:AB＝3:7のとき、DE//BCならばDE:BC＝3:7。例：AB＝14cm→AD＝6cm、BC＝21cm→DE＝9cm',
    );
  })(),

  // 面積比＝相似比を2回かけた比（3:5→9:25）
  lf_sansu_ext04_156: (() => {
    const m = tf(58, 150, 21);
    const a = m(0, 5), b = m(-2, 0), c = m(4, 0), d = m(-1.2, 2), e = m(2.4, 2);
    return show(
      [
        { note: '問 △ADE∽△ABCで、相似比AD：AB＝3：5です。面積の比は、いくつでしょうか。答 まず図を見ましょう。小さい△ADE（赤）と、大きい△ABCです。',
          add: [pg([a, b, c], C.blue, 'none'), pg([a, d, e], C.red, T.red), L(d, e, C.red, false, 2.2), nm(a, 'A', 0, -7), nm(b, 'B', -8, 14), nm(c, 'C', 8, 14), nm(d, 'D', -10, 4), nm(e, 'E', 10, 4),
            lb(312, 36, '相似比 AD:AB＝3:5', 13, C.red, 'end', true)] },
        { note: '問 相似比3：5の正方形で考えると、面積はどうなるでしょうか。答 1辺3の正方形は3×3＝9マス、1辺5の正方形は5×5＝25マスです。たても横も3：5ののびなので、面積は9：25になります。',
          add: [...gridSq(176, 108, 3, 14, C.red, FILL.red), ...gridSq(236, 80, 5, 14, C.blue, FILL.blue), lb(197, 166, '3×3\n＝9マス', 12, C.red, 'middle', true), lb(271, 166, '5×5\n＝25マス', 12, C.blue, 'middle', true)] },
        { note: '問 三角形でも同じでしょうか。答 同じです。面積は「長さ×長さ」の形なので、長さが3：5なら、面積は3×3：5×5＝9：25です。小さい三角形が9にあたります。',
          add: [lb(58, 96, '9', 16, C.red, 'middle', true), lb(160, 200, '面積比 3×3 : 5×5 ＝ 9 : 25', 13, C.red, 'middle', true)] },
        { note: '問 △ADEが27cm²のとき、△ABCは何cm²でしょうか。答 9が27cm²にあたるので、1あたり27÷9＝3cm²です。△ABCは25にあたるので、3×25＝75cm²です。',
          add: [lb(160, 216, '27÷9＝3　3×25＝75cm²', 13, C.main, 'middle', true)] },
        { note: '問 台形DBCEの面積は、何cm²でしょうか。答 台形は全体25から小さい三角形9をひいた16にあたります。3×16＝48cm²です。',
          add: [pg([d, e, c, b], C.green, T.yellow), lb(79, 134, '台形 48cm²', 12, C.main, 'middle', true), lb(160, 232, '25−9＝16　3×16＝48cm²', 13, C.green, 'middle', true)] },
        { note: '問 答えの確かめと、よくあるまちがいは何でしょうか。答 27＋48＝75で全体に合います。面積比を相似比のまま3：5とすると27×5÷3＝45cm²となり、75より小さくなってしまいます。',
          add: [lb(312, 56, '27＋48＝75 ✓', 13, C.main, 'end', true), lb(312, 72, '3:5のまま→45 ✕', 12, C.gray, 'end', true)] },
      ],
      '△ADE∽△ABCで相似比3:5なら、面積比は3×3:5×5＝9:25。△ADEが27cm²のとき、△ABC＝75cm²',
    );
  })(),

  // なぜ面積比は相似比を2回かけた比か（マスで数える）
  sext04_s156_naze: (() => {
    return show(
      [
        { note: '問 相似比が3：5とは、何が3：5なのでしょうか。答 たても、横も、すべての長さが3：5です。小さい正方形は1辺3、大きい正方形は1辺5とします。',
          add: [...gridSq(20, 94, 3, 22, C.red, FILL.red), ...gridSq(120, 50, 5, 22, C.blue, FILL.blue), lb(53, 176, '1辺 3', 12, C.red, 'middle', true), lb(175, 176, '1辺 5', 12, C.blue, 'middle', true)] },
        { note: '問 小さい正方形の面積は、どう求めるでしょうか。答 面積は「たて×横」です。3×3＝9で、1cm²のマスが9個です。',
          add: [bx(20, 94, 66, 66, undefined, C.red, T.red), lb(53, 194, '3×3＝9マス', 12, C.red, 'middle', true)] },
        { note: '問 大きい正方形の面積は、いくつでしょうか。答 5×5＝25で、マスが25個です。小さい方と比べると、9：25になります。',
          add: [bx(120, 50, 110, 110, undefined, C.blue, T.blue), lb(175, 194, '5×5＝25マス', 12, C.blue, 'middle', true)] },
        { note: '問 小さい方が27cm²のとき、大きい方は何cm²でしょうか。答 9マスが27cm²なので、1マス＝27÷9＝3cm²です。大きい方は25マスなので、3×25＝75cm²です。',
          add: [lb(160, 212, '1マス＝27÷9＝3cm²', 13, C.main, 'middle', true), lb(160, 230, '25マス＝3×25＝75cm²', 13, C.main, 'middle', true)] },
        { note: '問 相似比のまま3：5で計算すると、どうなるでしょうか。答 27×5÷3＝45cm²と出ますが、これはまちがいです。長さの倍率（5÷3倍）を1回しかかけていません。面積は、たてにも横にものびるので、5÷3倍を2回かけて、27×25÷9＝75cm²です。',
          add: [lb(312, 24, '27×5÷3＝45 ✕（小さすぎ）', 12, C.gray, 'end', true), lb(312, 40, '2回かけて 75 ✓', 12, C.red, 'end', true)] },
      ],
      '相似比3:5の図形は、たても横も3:5。面積は長さ×長さなので3×3:5×5＝9:25。小さい方が27cm²なら1あたり3cm²で、大きい方は75cm²',
    );
  })(),

  // 砂時計型の相似（AB//CD、AB＝4、CD＝6）
  lf_sansu_ext04_158: (() => {
    const o: P = [150, 108], a: P = [94, 60], b: P = [206, 60], c: P = [234, 180], d: P = [66, 180];
    return show(
      [
        { note: '問 ACとBDが点Oで交わり、AB//CDのとき、△OABと△OCDはどんな関係でしょうか。答 砂時計の形になります。上の小さい三角形と下の大きい三角形は、相似です。',
          add: [pg([o, a, b], C.blue, T.blue), pg([o, c, d], C.green, T.green), L(a, c, C.ink, false, 2), L(b, d, C.ink, false, 2), L(a, b, C.ink, false, 2), L(c, d, C.ink, false, 2),
            dt(o), nm(a, 'A', -10, -4), nm(b, 'B', 10, -4), nm(c, 'C', 10, 14), nm(d, 'D', -10, 14), nm(o, 'O', 0, 22)] },
        { note: '問 まず、等しい角はどこでしょうか。答 向かい合う角（対頂角）は、いつも等しくなります。角AOB＝角COD（赤）です。',
          add: [wedge(o, 16, a, b, C.red, T.red), wedge(o, 16, c, d, C.red, T.red)] },
        { note: '問 もう1組の等しい角は、どこでしょうか。答 AB//CDなので、ななめの線がつくる角（錯角）が等しくなります。角OAB＝角OCD（緑）です。平行だからこそ、2組目の角が見つかります。',
          add: [wedge(a, 18, b, o, C.green, T.green), wedge(c, 18, d, o, C.green, T.green), lb(8, 38, 'AB//CD が必要', 12, C.green, 'start', true)] },
        { note: '問 2組の角が等しいと、どうなるでしょうか。答 AA相似です。△OAB∽△OCDで、AとC、BとDが対応します。向かい合う頂点どうしが対応するのがコツです。',
          add: [lb(160, 22, '△OAB ∽ △OCD（A↔C、B↔D）', 13, C.red, 'middle', true)] },
        { note: '問 相似比は、いくつでしょうか。答 向かい合う平行な辺の比、AB：CD＝4：6＝2：3です。だからOA：OC＝OB：OD＝2：3になります。',
          add: [lb(150, 52, 'AB 4cm', 12, C.blue, 'middle', true), lb(150, 196, 'CD 6cm', 12, C.green, 'middle', true), lb(160, 214, 'AB:CD＝4:6＝2:3　OA:OC＝2:3', 13, C.red, 'middle', true)] },
        { note: '問 OA＝3cmのとき、OCは何cmでしょうか。答 OA：OC＝2：3なので、OC＝3×3÷2＝4.5cmです。大きい三角形の辺なので、OAより長くなるのが正しい向きです。',
          add: [lb(160, 232, 'OC＝3×3÷2＝4.5cm（3:4.5＝2:3 ✓）', 13, C.main, 'middle', true)] },
        { note: '問 AB//CDではなかったら、どうなるでしょうか。答 交わっているだけでは、対頂角が1組しか等しくなりません。相似には2組の角が必要なので、平行であることを必ず確かめます。',
          add: [] },
      ],
      'AB//CDのとき、対角線ACとBDの交点をOとすると△OAB∽△OCD（砂時計型）。AB＝4cm、CD＝6cmなら相似比2:3で、OA:OC＝OB:OD＝2:3',
    );
  })(),

  // 影を利用して木の高さを求める（ぼう2m・影3m、木の影15m）
  lf_sansu_ext04_159: (() => {
    const sx: P = [30, 190];
    return show(
      [
        { note: '問 はしごで測れない木の高さを、どうやって求めるでしょうか。答 同じ時刻に、高さのわかる棒と、木の影の長さを測ります。棒は2m・影は3m、木の影は15mでした。',
          add: [L([4, 190], [316, 190], C.gray, false, 2), L(sx, [30, 162], C.main, false, 4), L([100, 190], [100, 72], C.main, false, 5), ci(100, 72, 22, undefined, C.green, FILL.green),
            L([30, 190], [72, 190], C.red, false, 4), L([100, 190], [310, 190], C.red, false, 4),
            lb(30, 150, 'ぼう 2m', 12, C.main, 'middle', true), lb(100, 40, '木 ？m', 13, C.green, 'middle', true), lb(51, 208, '影 3m', 12, C.red, 'middle', true), lb(205, 208, '影 15m', 12, C.red, 'middle', true)] },
        { note: '問 太陽の光は、どんな向きでしょうか。答 太陽はとても遠いので、光はすべて平行です。そのため、棒にも木にも同じ角度で光があたります。',
          add: [ci(58, 22, 9, undefined, C.main, '#FDE68A'), L([58, 22], [310, 190], C.main, true, 1.6), AR([18, 154], [72, 190], C.main), AR([180, 40], [240, 80], C.main), AR([215, 50], [275, 90], C.main), lb(312, 112, '太陽の光は平行', 12, C.main, 'end', true)] },
        { note: '問 どんな三角形ができるでしょうか。答 「棒・影・光」の直角三角形と、「木・影・光」の直角三角形です。直角と、光が地面とつくる角（赤）が等しいので、2組の角が等しく、相似です。',
          add: [pg([[30, 162], [30, 190], [72, 190]], C.blue, T.blue), pg([[100, 50], [100, 190], [310, 190]], C.green, T.green), wedge([72, 190], 16, [30, 190], [30, 162], C.red, T.red), wedge([310, 190], 16, [100, 190], [100, 50], C.red, T.red)] },
        { note: '問 影の長さの比は、いくつでしょうか。答 棒の影3mに対して木の影は15mなので、15÷3＝5で、5倍です。相似なので、高さも5倍になります（高さ：影＝2：3、2：3＝？：15）。',
          add: [lb(312, 18, '影は 15÷3＝5倍', 13, C.red, 'end', true)] },
        { note: '問 木の高さは、何mでしょうか。答 棒の高さの5倍なので、2×5＝10mです。',
          add: [lb(312, 36, '高さも5倍　2×5＝10m', 13, C.red, 'end', true), lb(112, 150, '木 10m', 14, C.red, 'start', true)] },
        { note: '問 答えが正しいか、どう確かめますか。答 「影の長さ÷高さ」は、同じ時刻なら、どの物でも同じはずです。棒は3÷2＝1.5、木は15÷10＝1.5で、同じになりました。',
          add: [lb(312, 54, '影÷高さ 3÷2＝15÷10＝1.5 ✓', 12, C.main, 'end', true)] },
      ],
      '棒の高さ2m・影3mと、木の影15mが同じ太陽の角度でできているとき、相似な直角三角形になる。木の高さ＝2×15÷3＝10m',
    );
  })(),

  // 中点連結定理と面積比（△ABC＝48cm²）
  lf_sansu_ext04_160: (() => {
    const m = tf(100, 170, 22);
    const a = m(0, 6), b = m(-4, 0), c = m(4, 0), d = m(-2, 3), e = m(2, 3), f = m(0, 0);
    return show(
      [
        { note: '問 D、EがそれぞれAB、ACの真ん中（中点）のとき、DEとBCはどんな関係でしょうか。答 DEはBCと平行で、長さはBCの半分です。（印のついた辺どうしは同じ長さ）',
          add: [pg([a, b, c], C.blue, T.blue), L(d, e, C.red, false, 2.4), tick(a, d), tick(d, b), tick(a, e), tick(e, c), dt(d, C.red), dt(e, C.red),
            nm(a, 'A', 0, -7), nm(b, 'B', 4, 16), nm(c, 'C', -2, 16), nm(d, 'D', -10, 4), nm(e, 'E', 10, 4)] },
        { note: '問 なぜ平行で半分になるのでしょうか。答 AD：AB＝1：2、AE：AC＝1：2で、角Aは共通なので、△ADE∽△ABC（相似比1：2）です。ピラミッド型の相似の、特別な場合です。',
          add: [pg([a, d, e], C.red, T.red), lb(206, 56, 'AD:AB＝1:2', 13, C.red, 'start', true), lb(206, 74, 'AE:AC＝1:2', 13, C.red, 'start', true)] },
        { note: '問 面積の比は、いくつでしょうか。答 相似比が1：2なので、面積比は1×1：2×2＝1：4です。△ABC全体を4とすると、△ADEは1です。',
          add: [lb(206, 98, '面積比 1:4', 13, C.red, 'start', true)] },
        { note: '問 台形DBCEは、いくつにあたるでしょうか。答 全体の4から小さい三角形の1をひいて、3です。だから、△ADE：台形DBCE＝1：3になります。',
          add: [pg([d, e, c, b], C.green, T.yellow), lb(206, 122, '台形 4−1＝3', 13, C.green, 'start', true), lb(206, 140, '△:台形＝1:3', 13, C.green, 'start', true)] },
        { note: '問 △ABCが48cm²のとき、△ADEと台形DBCEは何cm²でしょうか。答 4にあたるのが48cm²なので、1あたり48÷4＝12cm²です。△ADE＝12cm²、台形＝12×3＝36cm²です。',
          add: [lb(206, 164, '48÷4＝12cm²', 13, C.main, 'start', true), lb(206, 182, '台形 12×3＝36', 13, C.main, 'start', true)] },
        { note: '問 4つの同じ三角形に分けて見ると、どうなるでしょうか。答 3辺の中点を結ぶと、同じ大きさの三角形が4つできます。△ADEはその1つ、台形はのこりの3つです。12×4＝48cm²で合います。',
          add: [L(d, f, C.red, false, 2), L(e, f, C.red, false, 2), lb(100, 88, '12', 14, C.main, 'middle', true), lb(100, 130, '12', 14, C.main, 'middle', true), lb(50, 152, '12', 14, C.main, 'middle', true), lb(150, 152, '12', 14, C.main, 'middle', true),
            lb(206, 208, '12が4つで48', 13, C.red, 'start', true), lb(206, 226, 'ADE1つ・台形3つ', 13, C.red, 'start', true)] },
      ],
      'D、EはAB、ACの中点。DE//BC、DE＝BC÷2（相似比1:2）。△ADEは△ABCの面積の4分の1。△ABC＝48cm²のとき△ADE＝12cm²、台形DBCE＝36cm²で、1:3',
    );
  })(),

  // 平行移動（右に5・上に2）
  lf_ext05_161: (() => {
    const m = tf(44, 160, 26);
    const a = m(0, 0), b = m(4, 0), c = m(1, 3), a2 = m(5, 2), b2 = m(9, 2), c2 = m(6, 5);
    const up: P = [a[0], a2[1]];
    return show(
      [
        { note: '問 △ABCを、右に5・上に2すべらせると、どうなるでしょうか。答 形も向きも変わらず、△A′B′C′の位置にぴったり移ります。これが平行移動です。',
          add: [pg([a, b, c], C.blue, T.blue), pg([a2, b2, c2], C.green, T.green), nm(a, 'A', -8, 16), nm(b, 'B', 8, 16), nm(c, 'C', -8, -2), nm(a2, 'A′', -8, 16), nm(b2, 'B′', 8, 16), nm(c2, 'C′', 0, -7)] },
        { note: '問 点Aは、どう動いたでしょうか。答 上へ2、右へ5です。方眼のますを数えて、上に2ます、右に5ます進むと、A′に着きます。',
          add: [L(a, up, C.red, true, 2), L(up, a2, C.red, true, 2), AR(a, a2, C.red), lb(40, 138, '上へ2', 12, C.red, 'end', true), lb(109, 103, '右へ5', 12, C.red, 'middle', true)] },
        { note: '問 点BとCは、どう動くでしょうか。答 すべての点が、同じ向きに同じだけ動きます。BもCも、右へ5・上へ2です。だから矢印はすべて平行で、長さも同じです。',
          add: [AR(b, b2, C.green, true), AR(c, c2, C.green, true)] },
        { note: '問 辺の長さや角の大きさは、変わるでしょうか。答 変わりません。AB＝4、A′B′＝4で同じです。AC＝A′C′、BC＝B′C′も同じで、対応する辺は平行です。',
          add: [lb(96, 176, 'AB 4', 12, C.blue, 'middle', true), lb(226, 124, 'A′B′ 4', 12, C.green, 'middle', true), lb(160, 204, '対応する辺は 平行で同じ長さ', 12, C.red, 'middle', true)] },
        { note: '問 点の位置を数でたしかめるには、どうすればよいでしょうか。答 それぞれ、横に5・たてに2をたします。A（0，0）→（0＋5，0＋2）＝A′（5，2）、B（4，0）→B′（9，2）、C（1，3）→C′（6，5）です。',
          add: [lb(160, 220, 'A(0,0)→A′(5,2)　B(4,0)→B′(9,2)', 12, C.main, 'middle', true), lb(160, 234, 'C(1,3)→C′(6,5)', 12, C.main, 'middle', true)] },
      ],
      '三角形ABCを右に5・上に2平行移動すると三角形A′B′C′になる。対応する辺の長さは変わらず、AB＝A′B′＝4',
    );
  })(),

  // 線対称（軸が横4のたての線）
  lf_ext05_162: (() => {
    const m = tf(30, 206, 32);
    const a = m(2, 3), a2 = m(6, 3), axT = m(4, 6.2), axB = m(4, 0), mid = m(4, 3);
    return show(
      [
        { note: '問 点A（2，3）を、横4のたての線を軸にして線対称に移すと、どこへ行くでしょうか。答 軸でパタンと折り返します。まず、軸と点Aの位置を見ましょう。',
          add: [L([30, 206], [286, 206], C.gray, false, 1.6), L(axB, axT, C.purple, true, 2.2), lb(164, 26, '対称の軸（横4）', 12, C.purple, 'start', true), dt(a, C.blue, 5), lb(74, 130, 'A(2,3)', 12, C.blue, 'middle', true),
            lb(94, 222, '2', 12, C.gray, 'middle', true), lb(158, 222, '4', 12, C.purple, 'middle', true), lb(222, 222, '6', 12, C.gray, 'middle', true)] },
        { note: '問 Aから軸までのきょりは、いくつでしょうか。答 軸は横4、Aは横2なので、4−2＝2です。',
          add: [AR(a, mid, C.red), lb(126, 100, '4−2＝2', 12, C.red, 'middle', true)] },
        { note: '問 A′は、どこになるでしょうか。答 軸の反対側に、同じきょり2だけ進みます。横は4＋2＝6です。たては3のまま変わりません。だからA′（6，3）です。動いた量は、きょりの2倍の4（6−2）です。',
          add: [AR(mid, a2, C.green), L(a, a2, C.gray, false, 1.6), dt(a2, C.green, 5), lb(222, 100, 'A′(6,3)', 12, C.green, 'middle', true), lb(190, 126, '4＋2＝6', 12, C.green, 'middle', true)] },
        { note: '問 答えが合っているか、どう確かめますか。答 AとA′の真ん中は（4，3）で、ちょうど軸の上にあります。AとA′を結ぶ線は、軸と直角に交わります。',
          add: [dt(mid, C.red, 5), lb(158, 160, 'AとA′の真ん中(4,3)は軸の上', 12, C.red, 'middle', true)] },
      ],
      '横4のたての線を対称の軸として点A(2,3)を線対称移動すると、軸からのきょり2が保たれてA′(6,3)になる（動く量は軸までのきょりの2倍）',
    );
  })(),

  // なぜ「軸までのきょり」で対称な点が決まるのか（2回の折り返し）
  sext05_s162_naze: (() => {
    const m = tf(30, 214, 22);
    const a = m(2, 3), a2 = m(6, 3), b = m(6, 2), b2 = m(6, 8), ax1: [P, P] = [m(4, 0), m(4, 9)], ax2: [P, P] = [m(0, 5), m(9, 5)];
    return show(
      [
        { note: '問 A（2，3）を、横4のたての線で折り返すと、どうなるでしょうか。答 たての線（軸）をはさんで、A′が反対側にできます。まず軸と点Aを見ましょう。',
          add: [L([30, 214], [250, 214], C.gray, false, 1.6), L(ax1[0], ax1[1], C.purple, true, 2.2), lb(122, 28, '軸（たて線）横4', 12, C.purple, 'start', true), dt(a, C.blue, 5), lb(62, 166, 'A(2,3)', 12, C.blue, 'middle', true),
            lb(74, 228, '2', 12, C.gray, 'middle', true), lb(118, 228, '4', 12, C.purple, 'middle', true), lb(162, 228, '6', 12, C.gray, 'middle', true)] },
        { note: '問 Aから軸までのきょりは、いくつでしょうか。答 軸は横4、Aは横2なので、4−2＝2です。',
          add: [AR(a, m(4, 3), C.red), lb(232, 60, 'A：4−2＝2', 12, C.red, 'start', true)] },
        { note: '問 A′はどこでしょうか。答 軸の反対側に同じきょり2進むので、4＋2＝6。たては3のままなので、A′（6，3）です。',
          add: [AR(m(4, 3), a2, C.green), dt(a2, C.green, 5), lb(168, 152, 'A′(6,3)', 12, C.green, 'start', true), lb(232, 78, 'A′：4＋2＝6', 12, C.green, 'start', true)] },
        { note: '問 B（6，2）を、たて5の横の線で折り返すと、どうなるでしょうか。答 こんどの軸は横向きの線で、たての高さ5のところを通ります。まず、軸と点Bを見ましょう。',
          add: [L(ax2[0], ax2[1], C.purple, true, 2.2), lb(32, 98, '軸（横線）たて5', 12, C.purple, 'start', true), lb(24, 108, '5', 12, C.purple, 'middle', true), dt(b, C.blue, 5), lb(168, 176, 'B(6,2)', 12, C.blue, 'start', true)] },
        { note: '問 Bから軸までのきょりは、いくつでしょうか。答 軸は高さ5、Bは高さ2なので、5−2＝3です。',
          add: [AR(b, m(6, 5), C.red), lb(232, 122, 'B：5−2＝3', 12, C.red, 'start', true)] },
        { note: '問 B′はどこでしょうか。答 軸の反対側に同じきょり3進むので、5＋3＝8。横は6のままなので、B′（6，8）です。',
          add: [AR(m(6, 5), b2, C.green), dt(b2, C.green, 5), lb(168, 42, 'B′(6,8)', 12, C.green, 'start', true), lb(232, 140, 'B′：5＋3＝8', 12, C.green, 'start', true)] },
        { note: '問 答えが合っているか、どう確かめますか。答 AとA′の真ん中は（4，3）でたて線の軸の上、BとB′の真ん中は（6，5）で横線の軸の上にあります。どちらも、軸が2点の真ん中を通っています。',
          add: [dt(m(4, 3), C.red, 5), dt(m(6, 5), C.red, 5), lb(118, 166, '(4,3)', 12, C.red, 'middle', true), lb(168, 100, '(6,5)', 12, C.red, 'start', true)] },
      ],
      'A(2,3)を横4のたての線について折り返すとA′(6,3)。B(6,2)をたて5の横の線について折り返すとB′(6,8)。軸は、2点の真ん中を通る',
    );
  })(),

  // 点対称（中心M(4,5)、A(6,8)→A′(2,2)）
  lf_ext05_163: (() => {
    const m = tf(60, 214, 22);
    const a = m(6, 8), mm = m(4, 5), a2 = m(2, 2);
    const corner1: P = [mm[0], a[1]], corner2: P = [a2[0], mm[1]];
    return show(
      [
        { note: '問 点M（4，5）を中心に、点A（6，8）を点対称に移すと、どこへ行くでしょうか。答 Mのまわりに半回転（180°）させます。まず、中心Mと点Aの位置を見ましょう。',
          add: [dt(mm, C.purple, 5), dt(a, C.blue, 5), lb(154, 98, 'M(4,5)', 12, C.purple, 'start', true), lb(198, 42, 'A(6,8)', 12, C.blue, 'start', true)] },
        { note: '問 AからMまでは、どう動くでしょうか。答 左へ2、下へ3です。方眼のますを数えるとわかります。',
          add: [AR(a, corner1, C.red, true), AR(corner1, mm, C.red, true), lb(170, 30, '左へ2', 12, C.red, 'middle', true), lb(140, 72, '下へ3', 12, C.red, 'end', true)] },
        { note: '問 A′は、どこでしょうか。答 Mから、もう一度同じだけ動かします。左へ2、下へ3です。横は4−2＝2、たては5−3＝2で、A′（2，2）です。',
          add: [AR(mm, corner2, C.green, true), AR(corner2, a2, C.green, true), dt(a2, C.green, 5), lb(126, 96, '左へ2', 12, C.green, 'middle', true), lb(96, 140, '下へ3', 12, C.green, 'end', true), lb(104, 188, 'A′(2,2)', 12, C.green, 'middle', true)] },
        { note: '問 A、M、A′は、どんな並びになっているでしょうか。答 1本の直線の上にあり、MA＝MA′です。Mは、AA′のちょうど真ん中になっています。',
          add: [L(a, a2, C.ink, false, 2), tick(a, mm), tick(mm, a2)] },
        { note: '問 答えが合っているか、どう確かめますか。答 AとA′の真ん中を計算します。横は（6＋2）÷2＝4、たては（8＋2）÷2＝5で、（4，5）＝Mになります。',
          add: [lb(232, 130, '(6＋2)÷2＝4', 12, C.red, 'start', true), lb(232, 148, '(8＋2)÷2＝5', 12, C.red, 'start', true)] },
      ],
      '点M(4,5)を対称の中心として点A(6,8)を点対称移動すると、Mが線分AA′の真ん中になるようにA′(2,2)へ移る',
    );
  })(),

  // なぜ点対称では「中心が真ん中」になるのか（半回転）
  sext05_s163_naze: (() => {
    const m = tf(60, 214, 22);
    const a = m(6, 8), mm = m(4, 5), a2 = m(2, 2);
    const corner1: P = [mm[0], a[1]], corner2: P = [a2[0], mm[1]];
    const r = Math.hypot(a[0] - mm[0], a[1] - mm[1]);
    return show(
      [
        { note: '問 点対称移動とは、どんな移動でしょうか。答 中心Mのまわりに、180°（半回転）させる移動です。A（6，8）を、M（4，5）のまわりに半回転させます。',
          add: [sc(mm[0], mm[1], r, deg(mm, a), deg(mm, a) + 180, C.purple, T.purple), dt(mm, C.purple, 5), dt(a, C.blue, 5), lb(154, 98, 'M(4,5)', 12, C.purple, 'start', true), lb(198, 42, 'A(6,8)', 12, C.blue, 'start', true)] },
        { note: '問 回しても、Mからのきょりは変わるでしょうか。答 変わりません。AもA′も、Mから同じきょりの円の上にあります。半回転すると、Mをはさんで反対側にきます。',
          add: [ring(mm, r, C.gray, deg(mm, a)), L(a, mm, C.blue, false, 2), L(mm, a2, C.green, false, 2), tick(a, mm), tick(mm, a2), dt(a2, C.green, 5), lb(104, 188, 'A′', 13, C.green, 'middle', true)] },
        { note: '問 A′の位置は、どう決まるでしょうか。答 AからMへの動き（左へ2・下へ3）を、Mからもう一度くり返した位置です。',
          add: [AR(a, corner1, C.red, true), AR(corner1, mm, C.red, true), AR(mm, corner2, C.green, true), AR(corner2, a2, C.green, true), lb(170, 30, '左2', 12, C.red, 'middle', true), lb(140, 72, '下3', 12, C.red, 'end', true), lb(126, 96, '左2', 12, C.green, 'middle', true), lb(96, 140, '下3', 12, C.green, 'end', true)] },
        { note: '問 A′の座標は、いくつでしょうか。答 Mの横4から2引いて2、たて5から3引いて2なので、A′（2，2）です。',
          add: [lb(232, 70, '横 4−2＝2', 12, C.green, 'start', true), lb(232, 88, 'たて 5−3＝2', 12, C.green, 'start', true), lb(232, 106, '→ A′(2,2)', 12, C.green, 'start', true)] },
        { note: '問 だから、Mはどんな点でしょうか。答 AとA′の真ん中の点です。（6＋2）÷2＝4、（8＋2）÷2＝5で、（4，5）＝Mになります。',
          add: [lb(232, 140, '(6＋2)÷2＝4', 12, C.red, 'start', true), lb(232, 158, '(8＋2)÷2＝5', 12, C.red, 'start', true), lb(232, 176, 'Mは真ん中 ✓', 12, C.red, 'start', true)] },
      ],
      '点対称移動は中心Mを軸に180°回すこと。AとA′はMから同じきょりで反対側にあるので、Mは線分AA′の真ん中。A(6,8)→A′(2,2)',
    );
  })(),

  // なぜ回転した点の通り道が「弧」になるのか
  sext05_s164_naze: (() => {
    const o: P = [110, 120], p: P = [194, 120], pd: P = [110, 204], pu: P = [110, 36], r = 84;
    return show(
      [
        { note: '問 点PをOのまわりに回すと、どう動くでしょうか。答 OからPまでは6cmです。Oを中心にして回します。',
          add: [L(o, p, C.blue, false, 2.4), dt(o, C.ink, 4), dt(p, C.blue, 5), lb(102, 114, 'O(6,6)', 12, C.ink, 'end', true), lb(202, 114, 'P(12,6)', 12, C.blue, 'start', true), lb(152, 140, '6cm', 12, C.blue, 'middle', true)] },
        { note: '問 回しているあいだ、OからPまでのきょりは、どうなるでしょうか。答 ずっと6cmのままです。コンパスで円をかくのと同じで、Pは半径6cmの円の上を動きます。',
          add: [ring(o, r, C.gray, 0)] },
        { note: '問 90°回すと、Pはどこへ行くでしょうか。答 時計回りなら真下のP′（6，0）、反時計回りなら真上の（6，12）です。どちらもOから6cmのままです。',
          add: [sc(o[0], o[1], r, 270, 360, C.red, T.red), sc(o[0], o[1], r, 0, 90, C.green, T.green), dt(pd, C.red, 5), dt(pu, C.green, 5), lb(118, 208, 'P′(6,0)', 12, C.red, 'start', true), lb(118, 40, '(6,12)', 12, C.green, 'start', true),
            lb(232, 196, '時計回り90°', 12, C.red, 'middle', true), lb(232, 52, '反時計回り90°', 12, C.green, 'middle', true)] },
        { note: '問 Pが通った道は、どんな形でしょうか。答 円の一部、中心角90°のおうぎ形の弧になります。まっすぐではなく、丸く動くのは、Oからのきょりが変わらないからです。',
          add: [lb(312, 84, '中心角90°の弧', 13, C.red, 'end', true)] },
        { note: '問 弧の長さは、何cmでしょうか。答 円周は6×2×3.14＝37.68cmです。90°は360°の4分の1（90÷360）なので、弧の長さは37.68×90÷360＝9.42cmです。',
          add: [lb(312, 140, '円周 37.68cm', 12, C.main, 'end', true), lb(312, 158, '×90÷360', 12, C.main, 'end', true), lb(312, 176, '＝9.42cm', 13, C.red, 'end', true)] },
      ],
      'PはOから6cm。Oのまわりに回すとPは半径6の円周上を動く。時計回りに90°ならP′(6,0)、反時計回りなら(6,12)。弧の長さは6×2×3.14×90÷360＝9.42cm',
    );
  })(),

  // 頂点の向きから移動の種類を見抜く
  lf_ext05_166: (() => {
    const m = tf(24, 150, 22);
    const a = m(3, 0), b = m(7, 0), c = m(3, 3), a2 = m(9, 0), b2 = m(9, 4), c2 = m(12, 0);
    return show(
      [
        { note: '問 同じ形の三角形が2つあります。片方をどう動かすと、もう片方に重なるでしょうか。答 すべらせる？ 回す？ 裏返す？ 見分けるコツは、頂点の並ぶ向きを見ることです。',
          add: [pg([a, b, c], C.blue, T.blue), pg([a2, b2, c2], C.green, T.green), nm(a, 'A', -10, 16), nm(b, 'B', 8, 16), nm(c, 'C', -10, -2), nm(a2, 'A′', -12, 16), nm(b2, 'B′', 10, -2), nm(c2, 'C′', 8, 16)] },
        { note: '問 △ABCの頂点を、A→B→Cの順にたどると、どちらまわりでしょうか。答 反時計まわりです。A（右へ）→B（左上へもどる）→C、と回っています。',
          add: [...loop([a, b, c], C.red), lb(134, 190, 'A→B→C\n反時計回り', 12, C.red, 'middle', true)] },
        { note: '問 △A′B′C′の頂点を、A′→B′→C′の順にたどると、どちらまわりでしょうか。答 時計まわりです。A′（上へ）→B′（右下へ）→C′、と回っています。',
          add: [...loop([a2, b2, c2], C.blue), lb(255, 190, 'A′→B′→C′\n時計回り', 12, C.blue, 'middle', true)] },
        { note: '問 向きが逆になったのは、どんな移動のせいでしょうか。答 すべらせる移動（平行移動）も、回す移動（回転移動）も、向きは変わりません。向きが逆になるのは、裏返したときだけなので、対称移動がふくまれています。',
          add: [lb(160, 222, '向きが逆 → 裏返し（対称移動）がある', 12, C.main, 'middle', true)] },
        { note: '問 辺の長さも確かめましょう。答 AB＝4、A′B′＝4（たて）、AC＝3、A′C′＝3（横）で、長さは同じです。大きさも形も同じなのに、向きだけが逆なので、裏返しがふくまれています。',
          add: [lb(134, 166, 'AB 4', 12, C.blue, 'middle', true), lb(84, 120, 'AC 3', 12, C.blue, 'end', true), lb(232, 106, 'A′B′ 4', 12, C.green, 'start', true), lb(255, 166, 'A′C′ 3', 12, C.green, 'middle', true)] },
      ],
      'A→B→Cは反時計回り、A′→B′→C′は時計回り。まわる向きが反転しているので、この移動には対称移動（裏返し）がふくまれている',
    );
  })(),

  // なぜ「頂点の向き」で対称移動が見抜けるのか（向きが同じ→回転移動）
  sext05_s166_naze: (() => {
    const m = tf(60, 150, 22);
    const a = m(3, 0), b = m(7, 0), c = m(3, 3), b2 = m(3, 4), c2 = m(0, 0);
    return show(
      [
        { note: '問 △ABCを動かして、△AB′C′になりました。どんな移動でしょうか。答 大きさも形も同じです。まず、頂点の並ぶ向きを調べます。',
          add: [pg([a, b, c], C.blue, T.blue), pg([a, b2, c2], C.green, T.green), nm(a, 'A=A′', 0, 18), nm(b, 'B', 8, 16), nm(c, 'C', 10, 4), nm(b2, 'B′', 10, -2), nm(c2, 'C′', -2, 16)] },
        { note: '問 △ABCの向きは、どちらまわりでしょうか。答 A→B→Cの順にたどると、反時計まわりです。',
          add: [...loop([a, b, c], C.red), lb(180, 190, 'A→B→C\n反時計回り', 12, C.red, 'middle', true)] },
        { note: '問 △AB′C′の向きは、どちらまわりでしょうか。答 A→B′→C′の順にたどると、これも反時計まわりで、向きは同じです。',
          add: [...loop([a, b2, c2], C.blue), lb(62, 100, 'A→B′→C′\n反時計回り', 12, C.blue, 'middle', true)] },
        { note: '問 向きが同じなら、何がいえるでしょうか。答 裏返し（対称移動）はありません。平行移動か、回転移動のどちらかです。',
          add: [] },
        { note: '問 平行移動でしょうか。答 ちがいます。平行移動なら、辺の向きも変わりません。ところがAB（横向き）が、AB′（たて向き）に変わっています。',
          add: [lb(170, 144, 'AB 横向き', 12, C.blue, 'start', true), lb(134, 112, 'AB′ たて向き', 12, C.green, 'start', true)] },
        { note: '問 では、どんな移動でしょうか。答 点Aは動かず、ABがAB′へ、ACがAC′へ、どちらも反時計まわりに90°回っています。点Aを中心に反時計まわりに90°の回転移動です。',
          add: [wedge(a, 24, b, b2, C.red, T.red), wedge(a, 16, c, c2, C.purple, T.purple), lb(150, 134, '90°', 12, C.red, 'middle', true),
            lb(160, 222, 'Aを中心に 反時計回りに90°の回転移動', 12, C.main, 'middle', true)] },
      ],
      'A→B→C も A′→B′→C′ も反時計回りで向きは同じ。ただしABが横向きからたて向きに変わっているので、平行移動ではなく、点Aを中心に反時計回りに90°回した回転移動',
    );
  })(),

  // 正方形を2回折る（面積は半分・層は2倍）
  sext05_s170_naze: (() => {
    const sq: P[] = [[16, 70], [94, 70], [94, 148], [16, 148]];
    const rect: P[] = [[120, 109], [198, 109], [198, 148], [120, 148]];
    const tri: P[] = [[224, 148], [302, 148], [224, 109]];
    return show(
      [
        { note: '問 1辺12cmの正方形（144cm²）を、真ん中の線MNで折ると、どうなるでしょうか。答 MNは正方形を、同じ形の2つの長方形に分けます。折ると、ぴったり重なります。',
          add: [pg(sq, C.blue, T.blue), L([16, 109], [94, 109], C.red, true, 2), AR([55, 85], [55, 125], C.red), lb(9, 113, 'M', 13, C.ink, 'middle', true), lb(101, 113, 'N', 13, C.ink, 'middle', true), lb(55, 170, '144cm²\n1層', 12, C.blue, 'middle', true)] },
        { note: '問 折ったあとの面積と、紙の重なりは、どうなるでしょうか。答 見えている面積は144÷2＝72cm²、紙は2枚重なって2層です。',
          add: [AR([98, 129], [116, 129], C.main), pg(rect, C.green, T.green), lb(159, 170, '72cm²\n2層', 12, C.green, 'middle', true)] },
        { note: '問 この長方形を、対角線で折ると、どうなるでしょうか。答 対角線は長方形を、同じ形の2つの直角三角形に分けます。だから、また面積は半分で72÷2＝36cm²、層は2×2＝4層です。',
          add: [L([120, 109], [198, 148], C.red, true, 2), AR([202, 129], [220, 129], C.main), pg(tri, C.red, T.red), lb(263, 170, '36cm²\n4層', 12, C.red, 'middle', true)] },
        { note: '問 もう1回、同じように2つに分けて折ると、どうなるでしょうか。答 面積は36÷2＝18cm²、層は4×2＝8層になります。折るたびに、面積は半分、層は2倍です。',
          add: [lb(160, 202, '3回目 18cm²・8層', 12, C.main, 'middle', true)] },
        { note: '問 「見えている面積×層の数」は、どうなっているでしょうか。答 144、72×2＝144、36×4＝144で、いつも144cm²です。紙の面積そのものは変わらないからです。',
          add: [lb(160, 220, '144 ＝ 72×2 ＝ 36×4', 13, C.red, 'middle', true)] },
        { note: '問 どこで折っても、面積は半分になるでしょうか。答 なりません。折り目が、図形を同じ形の2つに分けるときだけ半分です。はしを少しだけ折ると、面積はほとんど減りません。',
          add: [lb(160, 28, '合同な2つに分ける折り目だけ 半分', 12, C.main, 'middle', true)] },
      ],
      '1辺12cmの正方形（144cm²）を中線MNで折ると合同な長方形が重なり72cm²・2層。さらに対角線で折ると36cm²・4層。折るたびに面積は半分、層は2倍',
    );
  })(),

  // 輪の形（半径10と6のおうぎ形）
  sext05_s182_naze: (() => {
    const o: P = [30, 200];
    return show(
      [
        { note: '問 同じ中心・中心角90°で、半径10cmと6cmのおうぎ形にはさまれた「輪」の面積は、いくつでしょうか。答 まず外側の、半径10cmのおうぎ形を見ましょう。',
          add: [L([30, 200], [150, 200], C.gray, false, 1.6), sc(o[0], o[1], 120, 0, 90, C.blue, T.blue), lb(126, 216, '10cm', 12, C.blue, 'middle', true)] },
        { note: '問 外側のおうぎ形の面積は、いくつでしょうか。答 半径10cmの円の4分の1なので、10×10×3.14÷4＝78.5cm²です。',
          add: [lb(176, 70, '外側 10×10×3.14÷4', 12, C.blue, 'start', true), lb(176, 88, '＝78.5cm²', 13, C.blue, 'start', true)] },
        { note: '問 内側のおうぎ形の面積は、いくつでしょうか。答 半径6cmの円の4分の1なので、6×6×3.14÷4＝28.26cm²です。',
          add: [sc(o[0], o[1], 72, 0, 90, C.red, T.red), lb(66, 216, '6cm', 12, C.red, 'middle', true), lb(176, 118, '内側 6×6×3.14÷4', 12, C.red, 'start', true), lb(176, 136, '＝28.26cm²', 13, C.red, 'start', true)] },
        { note: '問 輪の面積は、どう求めるでしょうか。答 外側から内側をひきます。78.5−28.26＝50.24cm²です。',
          add: [sc(o[0], o[1], 72, 0, 90, C.red, '#FFFFFF'), lb(176, 166, '輪 78.5−28.26', 12, C.main, 'start', true), lb(176, 184, '＝50.24cm²', 13, C.main, 'start', true)] },
        { note: '問 半径の差の4cmを半径にして、4×4×3.14÷4としてよいでしょうか。答 だめです。12.56cm²と、小さく出てしまいます。10×10−6×6＝64で、4×4＝16とは同じにならないように、面積は半径の差では決まりません。',
          add: [lb(160, 28, '4×4×3.14÷4＝12.56 ✕', 12, C.gray, 'start', true), lb(160, 46, '半径の差では出ない', 12, C.gray, 'start', true)] },
        { note: '問 別の方法で確かめましょう。答 先に10×10−6×6＝64を出してから、64×3.14÷4＝50.24cm²と求めます。ひき算を先にしても、同じ答えになります。',
          add: [lb(160, 212, '(100−36)×3.14÷4', 12, C.red, 'start', true), lb(160, 230, '＝64×3.14÷4＝50.24 ✓', 12, C.red, 'start', true)] },
      ],
      '同じ中心・中心角90°の半径10cmと6cmのおうぎ形。輪の面積＝外側78.5−内側28.26＝50.24cm²。半径の差4で計算した12.56は誤り',
    );
  })(),

  // 角すいの体積（柱の3分の1）
  sext06_s202_naze: (() => {
    const prism: P[] = [[20, 70], [80, 70], [80, 160], [20, 160]];
    const pyr: P[] = [[110, 160], [170, 160], [140, 70]];
    const pyr2: P[] = [[220, 160], [280, 160], [250, 120]];
    return show(
      [
        { note: '問 底面が6×6＝36cm²、高さ9cmの四角柱の体積は、いくつでしょうか。答 底面積×高さなので、36×9＝324cm³です。',
          add: [pg(prism, C.blue, T.blue), L([86, 70], [86, 160], C.gray, true, 1.6), lb(90, 118, '9cm', 12, C.gray, 'start', true), lb(50, 178, '四角柱', 12, C.blue, 'middle', true),
            lb(112, 196, '底面積 6×6＝36cm²', 12, C.blue, 'middle', true), lb(112, 212, '体積 36×9＝324cm³', 12, C.blue, 'middle', true)] },
        { note: '問 同じ底面・同じ高さの四角すいは、同じ体積でしょうか。答 同じではありません。柱は上まで同じ太さですが、すいは先へ行くほど細くなるので、柱より少なくなります。',
          add: [pg(pyr, C.red, T.red), lb(140, 178, '四角すい', 12, C.red, 'middle', true)] },
        { note: '問 どれだけ少ないのでしょうか。答 すいに水を入れて柱に移すと、3杯でちょうどいっぱいになります。だから、すいの体積は柱の3分の1です。',
          add: [bx(20, 130, 60, 30, undefined, C.blue, T.water), AR([112, 110], [84, 130], C.blue), lb(312, 40, '水3杯でいっぱい', 12, C.blue, 'end', true), lb(312, 58, '→ 柱の3分の1', 12, C.blue, 'end', true)] },
        { note: '問 四角すいの体積は、いくつでしょうか。答 324÷3＝108cm³です。式にまとめると、底面積×高さ÷3＝36×9÷3＝108cm³です。',
          add: [lb(112, 228, '324÷3＝108cm³', 12, C.red, 'middle', true)] },
        { note: '問 底面が6×6、高さ4cm、斜高5cmの正四角すいの体積は、いくつでしょうか。答 体積に使うのは、底面に垂直な高さ4cmです。36×4÷3＝48cm³です。',
          add: [pg(pyr2, C.green, T.green), L([250, 120], [250, 160], C.gray, true, 1.6), lb(254, 148, '高さ4cm', 11, C.green, 'start', true), lb(236, 110, '斜高5cm', 11, C.green, 'end', true), lb(250, 178, '底面 6×6', 12, C.green, 'middle', true), lb(262, 196, '36×4÷3＝48cm³', 12, C.green, 'middle', true)] },
        { note: '問 斜高5cmを使って、36×5÷3＝60としてよいでしょうか。答 だめです。斜高は側面の三角形の高さで、立体の高さではありません。立体の高さ（4cm）より長いので、60cm³は大きすぎます。',
          add: [lb(312, 76, '斜高5で 36×5÷3＝60 ✕', 12, C.gray, 'end', true)] },
      ],
      '同じ底面（6×6＝36）・同じ高さ9の四角柱は324cm³。四角すいはその3分の1で108cm³。高さ4・斜高5の正四角すいは36×4÷3＝48cm³（斜高5は使わない）',
    );
  })(),

  // 角すいの表面積（展開図）
  sext06_s206_naze: (() => {
    const sq: P[] = [[88, 78], [132, 78], [132, 122], [88, 122]];
    const top: P[] = [[88, 78], [132, 78], [110, 12]];
    const bot: P[] = [[88, 122], [132, 122], [110, 188]];
    const left: P[] = [[88, 78], [88, 122], [22, 100]];
    const right: P[] = [[132, 78], [132, 122], [198, 100]];
    return show(
      [
        { note: '問 正四角すいを紙で作るとき、どんな形が必要でしょうか。答 底の正方形が1枚と、側面の二等辺三角形が4枚です。広げた形（展開図）で見ましょう。',
          add: [pg(sq, C.blue, T.blue), pg(top, C.main, T.yellow), pg(bot, C.main, T.yellow), pg(left, C.main, T.yellow), pg(right, C.main, T.yellow), lb(110, 96, '底面', 12, C.blue, 'middle', true)] },
        { note: '問 底面の面積は、いくつでしょうか。答 1辺4cmの正方形なので、4×4＝16cm²です。',
          add: [lb(110, 114, '16', 13, C.blue, 'middle', true), lb(206, 40, '底面 4×4＝16', 12, C.blue, 'start', true)] },
        { note: '問 側面の三角形1枚の面積は、いくつでしょうか。答 底辺4cm、高さ（斜高）6cmなので、4×6÷2＝12cm²です。三角形の面積は「底辺×高さ÷2」です。',
          add: [pg(top, C.red, T.red), L([110, 12], [110, 78], C.gray, true, 1.6), lb(124, 44, '斜高6cm', 11, C.red, 'start', true), lb(110, 66, '12', 13, C.red, 'middle', true), lb(210, 64, '側面1枚', 12, C.red, 'start', true), lb(210, 82, '4×6÷2＝12cm²', 12, C.red, 'start', true)] },
        { note: '問 側面4枚では、何cm²でしょうか。答 4枚とも同じ大きさなので、12×4＝48cm²です。',
          add: [pg(bot, C.red, T.red), pg(left, C.red, T.red), pg(right, C.red, T.red), lb(110, 150, '12', 13, C.red, 'middle', true), lb(66, 104, '12', 13, C.red, 'middle', true), lb(154, 104, '12', 13, C.red, 'middle', true), lb(206, 106, '4枚 12×4＝48', 12, C.red, 'start', true)] },
        { note: '問 表面積は、いくつでしょうか。答 底面と側面を合わせて、16＋48＝64cm²です。',
          add: [lb(210, 130, '16＋48＝64cm²', 13, C.main, 'start', true)] },
        { note: '問 ÷2を忘れると、どうなるでしょうか。答 側面1枚が4×6＝24cm²になり、4枚で96cm²、表面積は16＋96＝112cm²となり、まちがいです。三角形の面積には、必ず÷2がいります。',
          add: [lb(210, 154, '4×6＝24 ✕', 12, C.gray, 'start', true), lb(210, 172, '16＋96＝112 ✕', 12, C.gray, 'start', true)] },
        { note: '問 三角形の高さに、立体の高さを使ってよいでしょうか。答 だめです。側面の三角形の高さは「斜高」で、立体の高さより長くなります。展開図で測れる、三角形の中の高さを使います。',
          add: [lb(210, 198, '斜高 ＞ 立体の高さ', 12, C.main, 'start', true)] },
      ],
      '正四角すいの展開図は、底の正方形1枚と側面の二等辺三角形4枚。底面4×4＝16、側面1枚4×6÷2＝12、4枚で48。表面積16＋48＝64cm²',
    );
  })(),

  // 円すいは円柱の3分の1
  sext06_s207_naze: (() => {
    const cyl: P[] = [[20, 60], [80, 60], [80, 150], [20, 150]];
    const cone: P[] = [[110, 150], [170, 150], [140, 60]];
    return show(
      [
        { note: '問 底面の半径3cm、高さ9cmの円柱の体積は、いくつでしょうか。答 底面積は3×3×3.14＝28.26cm²。体積は底面積×高さなので、28.26×9＝254.34cm³です。',
          add: [pg(cyl, C.blue, T.blue), L([86, 60], [86, 150], C.gray, true, 1.6), lb(90, 108, '9cm', 12, C.gray, 'start', true), lb(50, 52, '半径3cm', 12, C.blue, 'middle', true), lb(50, 168, '円柱', 12, C.blue, 'middle', true),
            lb(112, 196, '底面積 3×3×3.14＝28.26cm²', 12, C.blue, 'middle', true), lb(112, 212, '28.26×9＝254.34cm³', 12, C.blue, 'middle', true)] },
        { note: '問 同じ底面・同じ高さの円すいは、同じ体積でしょうか。答 同じではありません。柱は上まで太いままですが、すいは先へ行くほど細くなるので、柱より少ない体積です。',
          add: [pg(cone, C.red, T.red), lb(140, 168, '円すい', 12, C.red, 'middle', true)] },
        { note: '問 どれだけ少ないのでしょうか。答 円すいの体積は、円柱の3分の1です。水を入れて移すと、3杯でちょうど円柱がいっぱいになります。',
          add: [bx(20, 120, 60, 30, undefined, C.blue, T.water), AR([114, 100], [84, 128], C.blue), lb(312, 30, '水3杯でいっぱい', 12, C.blue, 'end', true), lb(312, 48, '→ 柱の3分の1', 12, C.blue, 'end', true)] },
        { note: '問 この円すいの体積は、いくつでしょうか。答 254.34÷3＝84.78cm³です。',
          add: [lb(112, 228, '254.34÷3＝84.78cm³', 12, C.red, 'middle', true)] },
        { note: '問 円すいの体積が42cm³のとき、同じ底面・同じ高さの円柱は、いくつでしょうか。答 円柱は円すいの3倍なので、42×3＝126cm³です。',
          add: [bx(200, 70, 100, 40, '円すい\n42cm³', C.red, FILL.red, 13), AR([250, 112], [250, 132], C.main), lb(260, 126, '×3', 13, C.main, 'start', true), bx(200, 136, 100, 40, '円柱\n126cm³', C.blue, FILL.blue, 13)] },
        { note: '問 42÷3＝14としてよいでしょうか。答 だめです。向きが逆です。円柱のほうが大きいので、円すいから円柱は×3、円柱から円すいは÷3です。',
          add: [lb(312, 196, '42÷3＝14 ✕', 12, C.gray, 'end', true)] },
      ],
      '同じ底面（半径3）・同じ高さ9の円柱254.34cm³と円すい。円すいは柱の3分の1で84.78cm³。円すい42cm³から円柱は×3で126cm³（÷3の14は向きが逆）',
    );
  })(),

  // 投影図と積み木の個数（真上から見た図の数をたす）
  sext06_s213_naze: (() => {
    const vals = [[3, 1, 2], [1, 4, 2], [2, 1, 3]];
    const x0 = 18, y0 = 48, cs = 38;
    const rowStyle = [[C.blue, FILL.blue], [C.main, FILL.yellow], [C.red, FILL.red]];
    const cells: E[] = vals.flatMap((row, r) => row.map((v, c) => bx(x0 + c * cs, y0 + r * cs, cs, cs, String(v), rowStyle[r][0], rowStyle[r][1], 16)));
    const colors = [C.blue, C.main, C.red, C.purple];
    const fills = [T.blue, T.yellow, T.red, T.purple];
    const mini = (layer: number): E[] => {
      const mx = 186 + (layer - 1) * 32, my = 70, mc = 9;
      const out: E[] = [bx(mx, my, 3 * mc, 3 * mc, undefined, C.gray, '#FFFFFF')];
      let n = 0;
      vals.forEach((row, r) => row.forEach((v, c) => { if (v >= layer) { n++; out.push(bx(mx + c * mc, my + r * mc, mc, mc, undefined, colors[layer - 1], fills[layer - 1])); } }));
      out.push(lb(mx + 13.5, 112, `${layer}段目\n${n}個`, 10, colors[layer - 1], 'middle', true));
      return out;
    };
    return show(
      [
        { note: '問 真上から見た図に、各マスの積み木の数が書いてあります。全部で何個あるでしょうか。答 マスの数は、そのマスにたてに積んだ個数です。まず、全部を足してみましょう。',
          add: [...cells, lb(75, 40, '真上から見た図', 12, C.ink, 'middle', true)] },
        { note: '問 マスの数は、どういう意味でしょうか。答 たとえば真ん中の4は、そのマスに積み木が4個、上へ4段重なっているという意味です。',
          add: [bx(146, 128, 24, 12, undefined, C.main, FILL.yellow), bx(146, 116, 24, 12, undefined, C.main, FILL.yellow), bx(146, 104, 24, 12, undefined, C.main, FILL.yellow), bx(146, 92, 24, 12, undefined, C.main, FILL.yellow), lb(158, 158, '中央は4個\nたてに4段', 11, C.main, 'middle', true)] },
        { note: '問 全部足すと、何個でしょうか。答 3＋1＋2＋1＋4＋2＋2＋1＋3＝19個です。',
          add: [lb(160, 190, '3＋1＋2＋1＋4＋2＋2＋1＋3＝19個', 12, C.red, 'middle', true)] },
        { note: '問 数えもれを防ぐ、別の数え方はないでしょうか。答 段ごとにスライスして数えます。1段目は、すべてのマスに積み木があるので9個です。',
          add: mini(1) },
        { note: '問 2段目は、何個でしょうか。答 2以上のマスに2段目があります。3・2・4・2・2・3の6個です。',
          add: mini(2) },
        { note: '問 3段目と4段目は、何個でしょうか。答 3段目は3以上のマスで、3・4・3の3個です。4段目は4のマス1個だけです。',
          add: [...mini(3), ...mini(4)] },
        { note: '問 段ごとの個数を足すと、いくつでしょうか。答 9＋6＋3＋1＝19個で、全部足した答えと同じになりました。たてに足しても、横に足しても、合計は同じです。',
          add: [lb(160, 208, '9＋6＋3＋1＝19個 ✓', 13, C.red, 'middle', true)] },
        { note: '問 正面から見える段数（各列で一番高い数）を足してもよいでしょうか。答 だめです。3＋4＋3＝10は、見える高さの合計です。奥にかくれた積み木は数えられないので、個数ではありません。',
          add: [lb(160, 226, '正面から見える 3＋4＋3＝10 は個数ではない', 12, C.gray, 'middle', true)] },
      ],
      '真上から見た3×3のマスの数は、そのマスに積んだ個数。全部足して3＋1＋2＋1＋4＋2＋2＋1＋3＝19個。段ごとにスライスしても9＋6＋3＋1＝19個',
    );
  })(),

  // 円すいの相似切断と体積比（高さ15cm・頂点から5cm）
  sext06_s217_naze: (() => {
    const ap: P = [110, 36], bl: P = [62, 156], br: P = [158, 156], cl: P = [94, 76], cr: P = [126, 76];
    return show(
      [
        { note: '問 高さ15cmの円すいを、頂点から5cmのところで、底面に平行に切ると、どうなるでしょうか。答 上に小さな円すい、下に円すい台ができます。',
          add: [pg([ap, bl, br], C.blue, 'none'), L(cl, cr, C.red, true, 2), L(ap, [110, 156], C.gray, true, 1.4), lb(88, 60, '5cm', 12, C.red, 'end', true), lb(100, 120, '15cm', 12, C.blue, 'end', true)] },
        { note: '問 上の小さい円すいと、もとの円すいは、どんな関係でしょうか。答 形が同じ、相似です。高さの比は5：15＝1：3なので、相似比は1：3です。',
          add: [pg([ap, cl, cr], C.red, T.red), lb(172, 48, '相似比 5:15＝1:3', 12, C.red, 'start', true)] },
        { note: '問 底面積の比は、いくつでしょうか。答 底面の半径も1：3です。面積は「半径×半径」なので、1×1：3×3＝1：9です。',
          add: [lb(172, 76, '底面積 1×1:3×3＝1:9', 12, C.main, 'start', true)] },
        { note: '問 体積の比は、いくつでしょうか。答 円すいの体積は底面積×高さ÷3です。底面積が1：9、高さが1：3なので、1×1×1：3×3×3＝1：27です。',
          add: [lb(172, 104, '体積 1×1×1 : 3×3×3', 12, C.green, 'start', true), lb(172, 122, '＝1:27', 12, C.green, 'start', true)] },
        { note: '問 下の円すい台は、いくつにあたるでしょうか。答 全体の27から、小さい円すいの1をひいて、26です。だから、小さい円すい：円すい台＝1：26です。',
          add: [pg([cl, cr, br, bl], C.green, T.yellow), lb(172, 150, '台 27−1＝26', 12, C.green, 'start', true), lb(172, 168, '小:台＝1:26', 12, C.green, 'start', true)] },
        { note: '問 体積の比を、相似比のまま1：3としてよいでしょうか。答 だめです。1：3は長さの比です。面積は2回、体積は3回かけて、1：27になります。',
          add: [lb(172, 194, '体積比 1:3 ✕', 12, C.gray, 'start', true), lb(172, 212, '（1:3は長さの比）', 12, C.gray, 'start', true)] },
      ],
      '高さ15cmの円すいを頂点から5cmで底面に平行に切ると、上は相似比1:3の小さい円すい。長さ1:3、底面積1:9、体積1:27。台は27−1＝26で、小:台＝1:26',
    );
  })(),

  // 円すい台の体積（全体−小さい円すい）
  sext06_s218_naze: (() => {
    const ap: P = [110, 36], bl: P = [62, 156], br: P = [158, 156], cl: P = [94, 76], cr: P = [126, 76];
    return show(
      [
        { note: '問 高さ18cm、体積486cm³の円すいを、頂点から6cmのところで底面に平行に切ります。上の円すいと全体の相似比は、いくつでしょうか。答 高さの比は6：18＝1：3なので、相似比は1：3です。',
          add: [pg([ap, bl, br], C.blue, 'none'), L(cl, cr, C.red, true, 2), L(ap, [110, 156], C.gray, true, 1.4), lb(88, 60, '6cm', 12, C.red, 'end', true), lb(100, 120, '18cm', 12, C.blue, 'end', true), lb(172, 48, '相似比 6:18＝1:3', 12, C.red, 'start', true)] },
        { note: '問 体積の比は、いくつでしょうか。答 体積は3回かける比になるので、1×1×1：3×3×3＝1：27です。',
          add: [pg([ap, cl, cr], C.red, T.red), lb(172, 76, '体積比 1×1×1:3×3×3', 12, C.main, 'start', true), lb(172, 94, '＝1:27', 12, C.main, 'start', true)] },
        { note: '問 小さい円すいの体積は、何cm³でしょうか。答 全体の27分の1にあたるので、486÷27＝18cm³です。',
          add: [lb(172, 120, '小 486÷27＝18cm³', 12, C.red, 'start', true)] },
        { note: '問 円すい台の体積は、何cm³でしょうか。答 全体から小さい円すいをひきます。486−18＝468cm³です。これは全体の27分の26にあたります。',
          add: [pg([cl, cr, br, bl], C.green, T.yellow), lb(172, 144, '台 486−18＝468cm³', 12, C.green, 'start', true)] },
        { note: '問 「円すい台は全体の3分の2」として、486×2÷3＝324cm³としてよいでしょうか。答 だめです。1：3は長さの比で、体積の割合ではありません。体積は1：27なので、台は全体の27分の26です。',
          add: [lb(172, 172, '486×2÷3＝324 ✕', 12, C.gray, 'start', true), lb(172, 190, '（1:3は長さの比）', 12, C.gray, 'start', true)] },
        { note: '問 答えが正しいか、どう確かめますか。答 18＋468＝486で、全体にもどります。また468÷18＝26で、台は小さい円すいの26倍になっています。',
          add: [lb(172, 214, '18＋468＝486 ✓', 12, C.main, 'start', true), lb(172, 230, '468÷18＝26 ✓', 12, C.main, 'start', true)] },
      ],
      '高さ18cm・体積486cm³の円すいを頂点から6cmで切る。小さい円すいは相似比1:3、体積比1:27で486÷27＝18cm³。円すい台＝486−18＝468cm³',
    );
  })(),

  // 立方体を水平に2回切る（高さ4・3・5）
  sext06_s220_naze: (() => {
    return show(
      [
        { note: '問 1辺12cmの立方体を、上から4cmのところと、その下3cmのところで、水平に2回切ると、どうなるでしょうか。答 3つの直方体に分かれます。上の高さは4cm、真ん中は3cmです。',
          add: [bx(30, 40, 120, 120, undefined, C.ink, FILL.warm), L([30, 80], [150, 80], C.red, true, 2), L([30, 110], [150, 110], C.red, true, 2), lb(90, 32, '12cm', 12, C.ink, 'middle', true), lb(156, 64, '4cm', 12, C.blue, 'start', true), lb(156, 98, '3cm', 12, C.red, 'start', true)] },
        { note: '問 いちばん下の高さは、何cmでしょうか。答 全体の高さ12cmから、上の4cmと真ん中の3cmをひきます。12−4−3＝5cmです。',
          add: [lb(156, 140, '5cm', 12, C.green, 'start', true), lb(196, 140, '12−4−3＝5cm', 12, C.green, 'start', true)] },
        { note: '問 水平に切ると、底面はどうなるでしょうか。答 どの直方体も、底面は12×12＝144cm²のままです。変わるのは高さだけなので、3つの直方体は高さだけで区別できます。',
          add: [bx(30, 40, 120, 40, '上 高さ4cm', C.blue, FILL.blue, 12), bx(30, 80, 120, 30, '中 高さ3cm', C.red, FILL.red, 12), bx(30, 110, 120, 50, '下 高さ5cm', C.green, FILL.green, 12), lb(90, 180, 'どの底面も 12×12＝144cm²', 12, C.main, 'middle', true)] },
        { note: '問 真ん中の直方体の体積は、何cm³でしょうか。答 底面積×高さなので、144×3＝432cm³です。720cm³は144×5で、いちばん下の直方体の体積です。「真ん中」がどれか、色で確かめましょう。',
          add: [lb(196, 96, '中 144×3＝432cm³', 12, C.red, 'start', true), lb(196, 114, '（144×5＝720は下）', 11, C.gray, 'start', true)] },
        { note: '問 3つの体積を足すと、いくつになるでしょうか。答 576＋432＋720＝1728で、もとの立方体の12×12×12＝1728cm³と同じです。',
          add: [lb(170, 30, '576＋432＋720＝1728', 12, C.main, 'start', true), lb(170, 46, '＝12×12×12 ✓', 12, C.main, 'start', true)] },
        { note: '問 切ると、表面積はどうなるでしょうか。答 1回切るたびに、切り口が2枚（上の立体の底と下の立体の上）ふえます。1枚は144cm²なので、1回で144×2＝288cm²、2回で288×2＝576cm²ふえます。',
          add: [lb(160, 204, '切り口が2枚ふえる 144×2＝288cm²', 12, C.red, 'middle', true), lb(160, 222, '2回で 288×2＝576cm²ふえる', 12, C.red, 'middle', true)] },
      ],
      '1辺12cmの立方体を上から4cm、その下3cmで水平に2回切ると、底面144cm²が共通で高さ4・3・5の直方体3つ。真ん中は144×3＝432cm³、3つの合計は1,728cm³',
    );
  })(),

  // 水そうの基本（深さ＝体積÷底面積）
  lf_sansu_ext06_23: (() => {
    return show(
      [
        { note: '問 底面積25cm²の水そうに、毎分50cm³ずつ水を入れます。10分後、水の深さは何cmになるでしょうか。答 まず、水そうと、入れる水の量を見ましょう。',
          add: [bx(150, 70, 100, 110, undefined, C.ink, '#FFFFFF'), AR([200, 30], [200, 66], C.blue), lb(190, 40, '毎分50cm³', 12, C.blue, 'end', true), lb(200, 198, '底面積 25cm²', 12, C.ink, 'middle', true)] },
        { note: '問 1分で、水の深さは何cm上がるでしょうか。答 1分で水は50cm³ふえます。深さ＝体積÷底面積なので、50÷25＝2cmです。',
          add: [bx(150, 172, 100, 8, undefined, C.blue, T.water), lb(8, 96, '1分で 50cm³', 12, C.blue, 'start', true), lb(8, 114, '深さ 50÷25＝2cm', 12, C.blue, 'start', true)] },
        { note: '問 10分後の水の量は、何cm³でしょうか。答 1分に50cm³ずつなので、50×10＝500cm³です。',
          add: [bx(150, 100, 100, 80, undefined, C.blue, T.water), lb(8, 138, '10分 50×10＝500cm³', 12, C.blue, 'start', true)] },
        { note: '問 そのときの水の深さは、何cmでしょうか。答 水の体積＝底面積×深さなので、深さ＝体積÷底面積です。500÷25＝20cmです。',
          add: [L([262, 100], [262, 180], C.red, false, 2), lb(268, 144, '20cm', 13, C.red, 'start', true), lb(8, 162, '500÷25＝20cm', 13, C.red, 'start', true)] },
        { note: '問 1分に上がる深さから考えても、同じでしょうか。答 1分で2cm上がるので、10分で2×10＝20cmです。同じ答えになります。',
          add: [lb(8, 186, '1分2cm 2×10＝20cm', 12, C.main, 'start', true)] },
        { note: '問 答えが正しいか、どう確かめますか。答 底面積×深さ＝25×20＝500cm³で、入れた水の量500cm³と同じです。',
          add: [lb(8, 206, '25×20＝500 ✓', 12, C.main, 'start', true)] },
      ],
      '底面積25cm²の水そうに毎分50cm³で注水。10分後の深さ＝(50×10)÷25＝20cm',
    );
  })(),
};
