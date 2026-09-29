// 高校受験 数学（formulas-koko-sugaku.ts）のうち、図解を持たない項目の 61〜72番目の動く図解スライド。
// 三平方の定理・空間図形・立体の体積と表面積・回転体・投影図・立体の切断。
// キーは項目の label（買い切りの識別キーと同じ）。「なぜそうなるの？」を根っこまでたどる形で、10枚以上で書く。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, sc, show, band, fresh } from './diagram-kit';

// ── 図をかくための小さな道具（このファイルだけで使う） ──
const dot = (x: number, y: number, color: string = C.ink): DiagramElement => ci(x, y, 2.6, undefined, color, color);
const ellPts = (cx: number, cy: number, rx: number, ry: number, a0 = 0, a1 = 360, n = 36): [number, number][] =>
  Array.from({ length: n + 1 }, (_, i) => {
    const a = ((a0 + ((a1 - a0) * i) / n) * Math.PI) / 180;
    return [Math.round((cx + rx * Math.cos(a)) * 10) / 10, Math.round((cy + ry * Math.sin(a)) * 10) / 10] as [number, number];
  });
const ell = (cx: number, cy: number, rx: number, ry: number, color: string = C.ink, fill: string = FILL.warm): DiagramElement =>
  pg(ellPts(cx, cy, rx, ry, 0, 360, 36).slice(0, 36), color, fill);
/** 楕円の一部を線分でつないだ線（点線にもできる）。角度は 0=右、90=下（画面の座標）。 */
const arcLine = (cx: number, cy: number, rx: number, ry: number, a0: number, a1: number, color: string, dashed = false): DiagramElement[] => {
  const p = ellPts(cx, cy, rx, ry, a0, a1, 18);
  const out: DiagramElement[] = [];
  for (let i = 0; i < p.length - 1; i++) out.push(ln(p[i][0], p[i][1], p[i + 1][0], p[i + 1][1], color, dashed, 1.6));
  return out;
};
/** 円柱（上のふたは楕円、側面は手前の弧まで）。 */
const cyl = (cx: number, yTop: number, yBot: number, rx: number, ry: number, color: string = C.blue, fill: string = FILL.blue): DiagramElement[] => {
  const body: [number, number][] = [[cx - rx, yTop], ...ellPts(cx, yBot, rx, ry, 180, 0, 18), [cx + rx, yTop], ...ellPts(cx, yTop, rx, ry, 0, 180, 18)];
  return [...arcLine(cx, yBot, rx, ry, 180, 360, color, true), pg(body, color, fill), ell(cx, yTop, rx, ry, color, fill)];
};
/** 円錐（頂点 apex と底面の楕円）。 */
const cone = (cx: number, apexY: number, baseY: number, rx: number, ry: number, color: string = C.green, fill: string = FILL.green): DiagramElement[] => {
  const body: [number, number][] = [[cx, apexY], ...ellPts(cx, baseY, rx, ry, 180, 0, 18)];
  return [...arcLine(cx, baseY, rx, ry, 180, 360, color, true), pg(body, color, fill)];
};

// ────────────────────────────────────────────────
// 三平方の定理と逆
// ────────────────────────────────────────────────
const PX = 145; // 直角の頂点 P の座標（1目もり＝11）
const PY = 52;
const tri3 = () => pg([[PX, PY], [PX, PY + 33], [PX + 44, PY]], C.ink, FILL.warm);
const rightMark = () => pg([[PX, PY], [PX + 7, PY], [PX + 7, PY + 7], [PX, PY + 7]], C.gray, FILL.warm);
const sqOnA = () => bx(PX - 33, PY, 33, 33, '9', C.blue, FILL.blue, 13);
const sqOnB = () => bx(PX, PY - 44, 44, 44, '16', C.green, FILL.green, 14);
const bigTri = () => pg([[110, 26], [110, 98], [206, 26]], C.ink, FILL.warm);
const bigMark = () => pg([[110, 26], [120, 26], [120, 36], [110, 36]], C.gray, FILL.warm);
const sqOnC = () => pg([[PX, PY + 33], [PX + 44, PY], [PX + 77, PY + 44], [PX + 33, PY + 77]], C.red, FILL.red);
// 大きな正方形（1辺 7 ＝ 3＋4）に4つの三角形をならべる
const bigSq = () => bx(107, 10, 105, 105, undefined, C.gray, FILL.warm);
const fourTri = (): DiagramElement[] => [
  pg([[107, 10], [167, 10], [107, 55]], C.ink, FILL.gray),
  pg([[167, 10], [212, 10], [212, 70]], C.ink, FILL.gray),
  pg([[212, 70], [212, 115], [152, 115]], C.ink, FILL.gray),
  pg([[152, 115], [107, 115], [107, 55]], C.ink, FILL.gray),
];
const sanpeiGyaku: DiagramFigure = show([
  {
    note: '三平方の定理は、直角三角形の3つの辺の長さの関係です。この三角形は、直角をはさむ辺が3と4、いちばん長い辺は？ という形です。',
    add: [bigTri(), bigMark(), lb(102, 62, '3', 14, C.blue, 'end', true), lb(158, 18, '4', 14, C.green, 'middle', true), lb(166, 70, '？', 16, C.red, 'start', true)],
  },
  {
    note: '❓ 「斜辺」って、どの辺？ 直角の向かい側にある辺です。三角形の中でいちばん長い辺になります。ここを取りちがえると、式が全部くるいます。',
    add: [ln(110, 98, 206, 26, C.red, false, 3.5), ...band(140, bx(20, 155, 280, 30, '斜辺 ＝ 直角の向かい側 ＝ いちばん長い辺', C.red, FILL.red, 13), lb(160, 208, '長さを c、ほかの2辺を a、b とよぶ', 12, C.gray))],
  },
  {
    note: '❓ 3つの辺の長さは、どんな関係なの？ それぞれの辺を1辺とする正方形をかいてみます。面積は 3×3＝9、4×4＝16、5×5＝25 です。',
    add: fresh(tri3(), rightMark(), sqOnA(), sqOnB(), sqOnC(), lb(PX + 38, PY + 39, '25', 14, C.red, 'middle', true), ...band(140, bx(20, 150, 80, 30, '3² ＝ 9', C.blue, FILL.blue, 13), bx(120, 150, 80, 30, '4² ＝ 16', C.green, FILL.green, 13), bx(220, 150, 80, 30, '5² ＝ 25', C.red, FILL.red, 13), lb(160, 208, '斜辺の正方形がいちばん大きい', 12, C.gray))),
  },
  {
    note: '気づきましたか？ 小さい2つの正方形を足すと 9＋16＝25 で、大きい正方形の面積とぴったり同じです。これが三平方の定理 a²＋b²＝c² です。',
    add: band(140, bx(20, 155, 280, 34, '9 ＋ 16 ＝ 25', C.purple, FILL.purple, 17), lb(160, 210, 'a² ＋ b² ＝ c²（c は斜辺）', 13, C.purple, 'middle', true)),
  },
  {
    note: '❓ でも、3と4のときだけ成り立つのでは？ どんな直角三角形でも成り立つ理由を、面積で確かめます。まず、1辺が（a＋b）の大きな正方形に、同じ直角三角形を4つ、ななめに向けてならべます。',
    add: fresh(bigSq(), ...fourTri(), pg([[167, 10], [212, 70], [152, 115], [107, 55]], C.red, FILL.red), lb(160, 63, 'c²', 15, C.red, 'middle', true), ...band(140, lb(160, 158, '大きな正方形 ＝ 三角形4つ ＋ 内側の正方形', 13, C.ink, 'middle', true), lb(160, 186, '内側の正方形の1辺は斜辺 c だから、面積は c²', 12, C.red), lb(160, 210, '外の1辺は 3＋4 ＝ 7 で、面積は 49', 12, C.gray))),
  },
  {
    note: '❓ 同じ三角形4つを、ならべかえるとどうなるの？ 三角形を2つずつ長方形にまとめて、すみにおくと、残りは a の正方形と b の正方形になります。外の大きさも三角形4つも変わっていません。',
    add: fresh(bigSq(), pg([[167, 10], [212, 10], [212, 70]], C.ink, FILL.gray), pg([[167, 10], [167, 70], [212, 70]], C.ink, FILL.gray), pg([[107, 70], [167, 70], [167, 115]], C.ink, FILL.gray), pg([[107, 70], [107, 115], [167, 115]], C.ink, FILL.gray), bx(107, 10, 60, 60, 'b²', C.green, FILL.green, 15), bx(167, 70, 45, 45, 'a²', C.blue, FILL.blue, 15), ...band(140, lb(160, 158, '同じ三角形4つを、すみに寄せた', 13, C.ink, 'middle', true), lb(160, 186, '残ったのは、b² と a² の2つの正方形', 12, C.purple), lb(160, 210, '（4×3 の長方形を、対角線で2つに切った）', 11, C.gray))),
  },
  {
    note: '❓ だから、なぜ c²＝a²＋b² と言えるの？ 外の正方形（49）から、同じ三角形4つ（24）をひいた残りが、2つの図でそれぞれ c² と、a²＋b² だからです。残りは同じ面積なので、25 ＝ 16 ＋ 9 とわかります。',
    add: fresh(bx(20, 16, 280, 30, '49 − 三角形4つ（6×4＝24）＝ 25', C.gray, FILL.gray, 14), bx(20, 58, 130, 40, '図①の残り\nc² ＝ 25', C.red, FILL.red, 13), bx(170, 58, 130, 40, '図②の残り\na²＋b² ＝ 9＋16', C.purple, FILL.purple, 12), lb(160, 122, '同じものを引いた残りだから等しい', 13, C.ink, 'middle', true), ...band(140, bx(30, 160, 260, 36, 'c² ＝ a² ＋ b²', C.purple, FILL.purple, 18), lb(160, 216, 'どんな直角三角形でも、この面積の話は同じ', 12, C.gray))),
  },
  {
    note: '使ってみましょう。直角をはさむ2辺が5cmと12cmなら、斜辺を c として 5²＋12²＝25＋144＝169。c は2乗して169になる正の数なので、√169＝13cm です。',
    add: fresh(pg([[120, 20], [120, 116], [160, 20]], C.ink, FILL.warm), pg([[120, 20], [128, 20], [128, 28], [120, 28]], C.gray, FILL.warm), lb(112, 70, '12', 12, C.green, 'end', true), lb(140, 12, '5', 12, C.blue, 'middle', true), lb(150, 74, 'c', 14, C.red, 'start', true), ...band(140, bx(20, 150, 280, 28, '5² ＋ 12² ＝ 25 ＋ 144 ＝ 169', C.blue, FILL.blue, 14), bx(20, 186, 280, 32, 'c ＝ √169 ＝ 13cm', C.green, FILL.green, 16))),
  },
  {
    note: '❓ 斜辺がわかっていて、ほかの辺を求めるときは？ 斜辺が10、1辺が6なら、10²＝6²＋x²。だから x²＝100−36＝64、x＝8 です。足さずに「引く」のは、斜辺の2乗が全部の合計だからです。',
    add: fresh(pg([[120, 30], [120, 90], [200, 30]], C.ink, FILL.warm), pg([[120, 30], [128, 30], [128, 38], [120, 38]], C.gray, FILL.warm), lb(112, 60, '6', 12, C.blue, 'end', true), lb(160, 22, '？', 13, C.green, 'middle', true), lb(170, 72, '斜辺10', 12, C.red, 'start', true), ...band(140, bx(20, 150, 280, 28, '10² − 6² ＝ 100 − 36 ＝ 64', C.blue, FILL.blue, 14), bx(20, 186, 280, 32, '残りの辺 ＝ √64 ＝ 8', C.green, FILL.green, 16))),
  },
  {
    note: '❓ 逆（3辺から直角三角形かどうか調べる）も言えるの？ 3辺が5、6、8の三角形で確かめましょう。いちばん長い辺の8を c として、5²＋6²＝25＋36＝61。8²＝64 とちがうので、直角三角形ではありません。',
    add: fresh(pg([[100, 110], [180, 110], [133, 72]], C.ink, FILL.warm), lb(140, 126, '8', 12, C.red, 'middle', true), lb(108, 88, '5', 12, C.blue, 'end', true), lb(166, 88, '6', 12, C.green, 'start', true), ...band(140, bx(20, 150, 280, 28, '5² ＋ 6² ＝ 61', C.blue, FILL.blue, 14), bx(20, 186, 280, 32, '8² ＝ 64 → 等しくない → 直角ではない', C.red, FILL.red, 13))),
  },
  {
    note: '❓ なぜ「2乗の和が等しい」だけで、直角だと言い切れるの？ 3辺の長さが決まると、三角形の形は1つに決まります。もし a²＋b²＝c² なら、同じ3辺の直角三角形をかけて、それは元の三角形とぴったり重なる（合同）からです。',
    add: fresh(pg([[60, 100], [120, 100], [60, 60]], C.ink, FILL.warm), pg([[200, 100], [260, 100], [200, 60]], C.ink, FILL.warm), pg([[200, 60], [208, 60], [208, 68], [200, 68]], C.gray, FILL.warm), lb(160, 82, '＝', 22, C.purple, 'middle', true), lb(90, 118, '3辺が a、b、c', 11, C.gray), lb(230, 118, '同じ3辺の直角三角形', 11, C.gray), ...band(140, lb(160, 160, '3辺が等しい三角形は、ぴったり重なる（合同）', 13, C.purple, 'middle', true), lb(160, 190, 'だから元の三角形にも直角がある', 13, C.red, 'middle', true))),
  },
  {
    note: '整数だけでできる有名な組は、覚えておくと計算がいりません。3・4・5と、5・12・13と、8・15・17（64＋225＝289）です。2倍・3倍にしたものも直角三角形になります（6・8・10 など）。',
    add: fresh(bx(20, 16, 280, 32, '3 ： 4 ： 5　（9 ＋ 16 ＝ 25）', C.blue, FILL.blue, 14), bx(20, 58, 280, 32, '5 ： 12 ： 13　（25 ＋ 144 ＝ 169）', C.green, FILL.green, 14), bx(20, 100, 280, 32, '8 ： 15 ： 17　（64 ＋ 225 ＝ 289）', C.purple, FILL.purple, 14), ...band(140, lb(160, 165, '2倍・3倍にしても成り立つ', 13, C.ink, 'middle', true), lb(160, 192, '6 ： 8 ： 10、9 ： 12 ： 15、10 ： 24 ： 26 …', 12, C.gray))),
  },
  {
    note: 'まとめます。①斜辺（直角の向かい側）を見つける ②a²＋b²＝c² を立てる ③求めたい辺について解く。判定のときは、いちばん長い辺を c にして左右を比べます。',
    add: fresh(bx(20, 14, 280, 34, '① 斜辺 c を決める（いちばん長い辺）', C.red, FILL.red, 13), bx(20, 62, 280, 34, '② a² ＋ b² ＝ c² を立てる', C.blue, FILL.blue, 14), bx(20, 110, 280, 34, '③ 求めたい辺について解く（正の数だけ）', C.green, FILL.green, 13), ...band(154, lb(160, 180, '判定は、いちばん長い辺を c にして', 13, C.ink, 'middle', true), lb(160, 208, 'a²＋b² と c² を比べる', 13, C.purple, 'middle', true))),
  },
]);

// ────────────────────────────────────────────────
// 特別な直角三角形の辺の比
// ────────────────────────────────────────────────
const tokubetsu: DiagramFigure = show([
  {
    note: '角度が分かるだけで辺の長さが出る、便利な直角三角形が2つあります。まずは正方形から。1辺1の正方形に、対角線を1本ひきます。',
    add: [bx(110, 20, 90, 90, undefined, C.gray, FILL.warm), ln(110, 110, 200, 20, C.red, false, 3), lb(90, 66, '1', 13, C.gray, 'end', true), lb(155, 128, '1', 13, C.gray, 'middle', true), ...band(140, lb(160, 175, '対角線の長さはいくつ？', 14, C.red, 'middle', true))],
  },
  {
    note: '❓ できた三角形の角度は？ 正方形の角は90°です。対角線は、その角をちょうど半分に分けるので、45°と45°。だから、45°・45°・90°の直角二等辺三角形になります。',
    add: [pg([[110, 110], [200, 110], [200, 20]], C.red, FILL.red), lb(130, 104, '45°', 11, C.red, 'start', true), lb(196, 46, '45°', 11, C.red, 'end', true), ...band(140, bx(30, 155, 260, 32, '90° ÷ 2 ＝ 45°　→　2つの角が等しい', C.red, FILL.red, 13), lb(160, 210, '角が等しいので、直角をはさむ2辺も等しい', 11, C.gray))],
  },
  {
    note: '❓ では、対角線（斜辺）の長さは？ 三平方の定理を使います。1²＋1²＝2 なので、斜辺は √2。だから 45°・45°・90° の辺の比は 1 : 1 : √2 です。',
    add: band(140, bx(20, 150, 280, 28, '1² ＋ 1² ＝ 2　→　斜辺 ＝ √2', C.blue, FILL.blue, 14), bx(20, 186, 280, 32, '辺の比　1 ： 1 ： √2', C.green, FILL.green, 16)),
  },
  {
    note: '❓ 1辺が1でないときは？ 三角形の形は同じで、大きさだけが変わるので、比のまま全部を同じ倍にします。1辺 a の正方形なら、対角線は a√2 です。',
    add: fresh(bx(110, 20, 90, 90, undefined, C.gray, FILL.warm), ln(110, 110, 200, 20, C.red, false, 3), lb(90, 66, 'a', 14, C.gray, 'end', true), lb(155, 128, 'a', 14, C.gray, 'middle', true), lb(170, 58, 'a√2', 13, C.red, 'start', true), ...band(140, bx(20, 155, 280, 30, 'a ： a ： a√2　（1 ： 1 ： √2 の a倍）', C.green, FILL.green, 13), lb(160, 210, '三平方でも a²＋a²＝2a² で √(2a²)＝a√2', 11, C.gray))),
  },
  {
    note: '使ってみましょう。斜辺が10cmの直角二等辺三角形。斜辺は1辺の √2 倍なので、1辺＝10÷√2。分母の√2を消すと 10×√2÷2＝5√2cm です。検算：(5√2)²＋(5√2)²＝50＋50＝100、斜辺の2乗と同じです。',
    add: fresh(pg([[110, 110], [210, 110], [210, 10]], C.ink, FILL.warm), pg([[204, 110], [204, 104], [210, 104], [210, 110]], C.gray, FILL.warm), lb(160, 128, '5√2', 13, C.blue, 'middle', true), lb(220, 62, '5√2', 13, C.blue, 'start', true), lb(148, 54, '10', 13, C.red, 'end', true), ...band(140, bx(20, 150, 280, 28, '1辺 ＝ 10 ÷ √2 ＝ 10√2 ÷ 2 ＝ 5√2', C.blue, FILL.blue, 13), lb(160, 200, '確かめ：50 ＋ 50 ＝ 100 ＝ 10²', 13, C.green, 'middle', true))),
  },
  {
    note: 'もう1つは正三角形から。1辺2の正三角形を、頂点からまっすぐ下ろした線（高さ）で半分に切ります。できた半分の三角形が、30°・60°・90° の三角形です。',
    add: fresh(pg([[100, 116], [220, 116], [160, 12]], C.ink, FILL.warm), ln(160, 12, 160, 116, C.red, false, 3), lb(130, 98, '60°', 11, C.gray, 'middle', true), lb(190, 98, '60°', 11, C.gray, 'middle', true), lb(160, 130, '2', 12, C.gray, 'middle', true), ...band(140, lb(160, 170, '正三角形を半分にすると…', 14, C.red, 'middle', true))),
  },
  {
    note: '❓ なぜ底辺が1と1に分かれるの？ 正三角形は二等辺三角形でもあるので、頂点から下ろした垂線は、底辺をちょうど半分に分けます。それぞれの角も、上の60°が30°ずつに分かれます。',
    add: fresh(pg([[100, 116], [160, 116], [160, 12]], C.red, FILL.red), pg([[160, 116], [220, 116], [160, 12]], C.ink, FILL.warm), lb(130, 130, '1', 13, C.red, 'middle', true), lb(190, 130, '1', 13, C.gray, 'middle', true), lb(165, 28, '30°', 11, C.red, 'start', true), lb(118, 108, '60°', 10, C.gray, 'middle', true), ...band(140, bx(30, 155, 260, 32, '底辺 2 → 半分ずつ 1 と 1', C.red, FILL.red, 14), lb(160, 210, '上の角 60° → 30° と 30°', 12, C.gray))),
  },
  {
    note: '❓ 高さは？ 左の三角形で三平方の定理。斜辺は2、底辺は1なので、1²＋高さ²＝2²。高さ²＝4−1＝3、高さ＝√3 です。だから比は 1 : 2 : √3。',
    add: band(140, bx(20, 150, 280, 28, '1² ＋ 高さ² ＝ 2²　→　高さ² ＝ 3', C.blue, FILL.blue, 14), bx(20, 186, 280, 32, '辺の比　1 ： 2 ： √3', C.green, FILL.green, 16)),
  },
  {
    note: '❓ どの辺が1で、どの辺が2、√3なの？ 短い辺（1）は30°の向かい側、いちばん長い辺（2）は直角の向かい側、√3 は60°の向かい側です。大きな角の向かいには大きな辺がくる、と覚えます。',
    add: fresh(pg([[100, 116], [160, 116], [160, 12]], C.ink, FILL.warm), pg([[154, 116], [154, 110], [160, 110], [160, 116]], C.gray, FILL.warm), lb(130, 132, '√3（60°の向かい）', 11, C.green, 'middle', true), lb(172, 66, '1（30°の向かい）', 11, C.blue, 'start', true), lb(118, 58, '2（90°の向かい）', 11, C.red, 'end', true), lb(165, 28, '30°', 10, C.blue, 'start'), lb(112, 108, '60°', 10, C.green, 'start'), ...band(140, lb(160, 170, '30° ： 60° ： 90° ＝ 1 ： √3 ： 2 の辺', 12, C.ink, 'middle', true), lb(160, 200, '小さい角の向かいは短い辺', 12, C.gray))),
  },
  {
    note: '使ってみましょう。1辺6cmの正三角形の高さ。半分にすると底辺3の 30°・60°・90° の三角形で、比は 1 : 2 : √3 の 3倍 ＝ 3 : 6 : 3√3。高さは 3√3cm です。',
    add: fresh(pg([[100, 116], [160, 116], [160, 12]], C.ink, FILL.warm), lb(130, 132, '3', 13, C.blue, 'middle', true), lb(174, 66, '高さ？', 12, C.red, 'start', true), lb(118, 58, '6', 13, C.gray, 'end', true), ...band(140, bx(20, 150, 280, 28, '1 ： 2 ： √3 を 3倍 → 3 ： 6 ： 3√3', C.blue, FILL.blue, 13), bx(20, 186, 280, 32, '高さ ＝ 3√3 cm', C.green, FILL.green, 16))),
  },
  {
    note: '30°・60°・90° の三角形で、斜辺が8なら、30°の向かいの辺は？ 比が 1 : 2 なので、斜辺の半分の4です。1辺a の正三角形の高さは、a の √3/2 倍になります。',
    add: fresh(pg([[100, 116], [220, 116], [220, 28]], C.ink, FILL.warm), lb(156, 132, '4√3', 12, C.green, 'middle', true), lb(232, 74, '？', 14, C.blue, 'start', true), lb(146, 56, '8', 13, C.red, 'end', true), lb(126, 108, '30°', 10, C.blue, 'start'), ...band(140, bx(20, 150, 280, 28, '30°の向かい ＝ 斜辺の半分 ＝ 4', C.blue, FILL.blue, 14), lb(160, 205, '正三角形の高さ ＝ 1辺 × √3/2', 13, C.green, 'middle', true))),
  },
  {
    note: 'まとめ。45°の三角形は 1 : 1 : √2、30°・60°の三角形は 1 : 2 : √3 。どちらも、角度が分かれば三平方の定理を使わずに辺の長さが出ます。',
    add: fresh(bx(20, 14, 280, 40, '45° ・ 45° ・ 90°　→　1 ： 1 ： √2', C.red, FILL.red, 15), bx(20, 66, 280, 40, '30° ・ 60° ・ 90°　→　1 ： √3 ： 2', C.blue, FILL.blue, 15), ...band(120, lb(160, 146, '正方形の対角線 ＝ 1辺の √2 倍', 13, C.ink, 'middle', true), lb(160, 176, '正三角形の高さ ＝ 1辺の √3/2 倍', 13, C.ink, 'middle', true), lb(160, 206, '図の中から、この2つの三角形を探す', 12, C.gray))),
  },
]);

// ────────────────────────────────────────────────
// 座標平面上の2点間の距離
// ────────────────────────────────────────────────
const gx = (x: number) => 60 + 18 * x; // 座標 → 画面
const gy = (y: number) => 125 - 18 * y;
const axes = (): DiagramElement[] => [ln(40, 125, 220, 125, C.gray, false, 1.2), ln(60, 130, 60, 12, C.gray, false, 1.2), lb(226, 129, 'x', 12, C.gray, 'start'), lb(64, 14, 'y', 12, C.gray, 'start')];
const kyori: DiagramFigure = show([
  {
    note: '座標平面に2点 A(1, 2) と B(4, 6) があります。この2点のあいだの距離を求めたい。でも、ななめの線は、定規なしにはどう測ればいいでしょうか。',
    add: [...axes(), ci(gx(1), gy(2), 4, undefined, C.blue, C.blue), ci(gx(4), gy(6), 4, undefined, C.red, C.red), lb(gx(1) - 6, gy(2) + 4, 'A(1, 2)', 11, C.blue, 'end', true), lb(gx(4) + 8, gy(6) + 4, 'B(4, 6)', 11, C.red, 'start', true), ln(gx(1), gy(2), gx(4), gy(6), C.purple, true, 2), ...band(140, lb(160, 170, 'AB の距離は？', 14, C.purple, 'middle', true))],
  },
  {
    note: '❓ ななめの長さを、どうやって求めるの？ 直角三角形の斜辺だと見れば、三平方の定理で出せます。A から真横に、B から真下に線をのばして、交わる点 C(4, 2) をとると、直角三角形 ACB ができます。',
    add: [ln(gx(1), gy(2), gx(4), gy(2), C.blue, false, 2.5), ln(gx(4), gy(2), gx(4), gy(6), C.green, false, 2.5), dot(gx(4), gy(2), C.ink), lb(gx(4) + 8, gy(2) + 4, 'C(4, 2)', 11, C.ink, 'start', true), pg([[gx(4) - 7, gy(2)], [gx(4) - 7, gy(2) - 7], [gx(4), gy(2) - 7]], C.gray, FILL.warm), ...band(140, lb(160, 170, '直角のかどは C。AB が斜辺', 13, C.ink, 'middle', true))],
  },
  {
    note: '❓ 横の辺 AC の長さは？ A と C は同じ高さ（y＝2）にあるので、x 座標の差だけです。4−1＝3。',
    add: band(140, bx(30, 155, 260, 32, '横の差 ＝ 4 − 1 ＝ 3', C.blue, FILL.blue, 15), lb(160, 210, 'AC は y が同じ → x だけ見る', 12, C.gray)),
  },
  {
    note: '❓ たての辺 CB の長さは？ C と B は同じ横の位置（x＝4）にあるので、y 座標の差だけです。6−2＝4。',
    add: band(140, bx(30, 155, 260, 32, 'たての差 ＝ 6 − 2 ＝ 4', C.green, FILL.green, 15), lb(160, 210, 'CB は x が同じ → y だけ見る', 12, C.gray)),
  },
  {
    note: '❓ では AB は？ 直角をはさむ2辺が3と4なので、三平方の定理より AB²＝3²＋4²＝9＋16＝25。AB は正の数なので、√25＝5 です。',
    add: [ln(gx(1), gy(2), gx(4), gy(6), C.red, false, 3), ...band(140, bx(20, 150, 280, 28, '3² ＋ 4² ＝ 9 ＋ 16 ＝ 25', C.blue, FILL.blue, 14), bx(20, 186, 280, 32, 'AB ＝ √25 ＝ 5', C.green, FILL.green, 16))],
  },
  {
    note: '❓ 引く順序は、まちがえてもいいの？ 4−1＝3 でも、1−4＝−3 でも、2乗すると (−3)²＝9 で同じです。だから、どちらの点を先にしても、距離は同じになります。',
    add: fresh(bx(20, 16, 130, 34, '(4 − 1)² ＝ 9', C.blue, FILL.blue, 14), bx(170, 16, 130, 34, '(1 − 4)² ＝ 9', C.blue, FILL.blue, 14), lb(160, 33, '＝', 18, C.purple, 'middle', true), bx(20, 66, 130, 34, '(6 − 2)² ＝ 16', C.green, FILL.green, 14), bx(170, 66, 130, 34, '(2 − 6)² ＝ 16', C.green, FILL.green, 14), lb(160, 83, '＝', 18, C.purple, 'middle', true), ...band(120, lb(160, 150, '2乗するとマイナスが消える', 14, C.purple, 'middle', true), lb(160, 184, 'ただし、引き忘れると値が変わる', 12, C.red), lb(160, 208, '差を正しく取ることは大事', 12, C.gray))),
  },
  {
    note: 'これを文字で書いたのが公式です。2点 (x₁, y₁)、(x₂, y₂) の距離は、横の差 x₂−x₁、たての差 y₂−y₁ を2辺とする直角三角形の斜辺なので √((x₂−x₁)²＋(y₂−y₁)²)。忘れても、図をかけばその場で作れます。',
    add: fresh(pg([[80, 100], [200, 100], [200, 20]], C.ink, FILL.warm), lb(140, 118, '横の差 x₂ − x₁', 11, C.blue, 'middle', true), lb(208, 62, 'たての差', 11, C.green, 'start', true), lb(208, 76, 'y₂ − y₁', 11, C.green, 'start', true), lb(130, 54, '距離', 12, C.red, 'end', true), ...band(140, bx(15, 158, 290, 36, '距離 ＝ √( (x₂−x₁)² ＋ (y₂−y₁)² )', C.purple, FILL.purple, 14), lb(160, 214, '三平方の定理そのもの', 12, C.gray))),
  },
  {
    note: '原点 (0, 0) と点 (5, 12) の距離。横に5、たてに12 進むので、5²＋12²＝25＋144＝169、√169＝13。5・12・13 は整数の組なので、暗算できます。',
    add: fresh(ln(40, 125, 200, 125, C.gray, false, 1.2), ln(50, 132, 50, 8, C.gray, false, 1.2), lb(204, 129, 'x', 12, C.gray, 'start'), lb(54, 12, 'y', 12, C.gray, 'start'), pg([[50, 125], [130, 125], [130, 29]], C.ink, FILL.warm), ln(50, 125, 130, 29, C.red, false, 3), ci(50, 125, 3, undefined, C.blue, C.blue), ci(130, 29, 3, undefined, C.red, C.red), lb(90, 140, '5', 12, C.blue, 'middle', true), lb(138, 80, '12', 12, C.green, 'start', true), lb(136, 26, '(5, 12)', 11, C.red, 'start', true), ...band(150, bx(20, 158, 280, 28, '5² ＋ 12² ＝ 169　→　√169 ＝ 13', C.green, FILL.green, 14), lb(160, 210, '3・4・5、5・12・13 は覚えておく', 12, C.gray))),
  },
  {
    note: '座標がマイナスのときも同じです。(−2, 3) と (1, −1) なら、横の差は 1−(−2)＝3、たての差は −1−3＝−4。2乗して 9＋16＝25、距離は √25＝5 です。',
    add: fresh(ln(40, 66, 220, 66, C.gray, false, 1.2), ln(100, 8, 100, 130, C.gray, false, 1.2), pg([[64, 30], [118, 30], [118, 84]], C.ink, FILL.warm), ln(64, 30, 118, 84, C.red, false, 3), ci(64, 30, 3, undefined, C.blue, C.blue), ci(118, 84, 3, undefined, C.red, C.red), lb(58, 26, '(−2, 3)', 11, C.blue, 'end', true), lb(124, 90, '(1, −1)', 11, C.red, 'start', true), lb(91, 24, '3', 12, C.blue, 'middle', true), lb(126, 60, '4', 12, C.green, 'start', true), ...band(140, bx(20, 150, 280, 28, '横 1−(−2) ＝ 3　　たて −1−3 ＝ −4', C.blue, FILL.blue, 12), bx(20, 186, 280, 32, '距離 ＝ √(9 ＋ 16) ＝ 5', C.green, FILL.green, 15))),
  },
  {
    note: 'まとめ。①2点から横の差とたての差を出す ②2乗して足す ③√をとる。座標がマイナスでも、引く順序をかえても結果は同じです。迷ったら、図をかいて直角三角形を見つけましょう。',
    add: fresh(bx(20, 14, 280, 34, '① 横の差・たての差を出す', C.blue, FILL.blue, 14), bx(20, 62, 280, 34, '② それぞれ2乗して足す', C.green, FILL.green, 14), bx(20, 110, 280, 34, '③ √をとる（正の数）', C.purple, FILL.purple, 14), ...band(154, lb(160, 182, '引く順序は結果に影響しない（2乗するため）', 13, C.ink, 'middle', true), lb(160, 210, '迷ったら直角三角形の図をかく', 13, C.gray))),
  },
]);

// ────────────────────────────────────────────────
// 三平方の定理と空間図形
// ────────────────────────────────────────────────
const cA: [number, number] = [90, 110];
const cB: [number, number] = [170, 110];
const cC: [number, number] = [200, 88];
const cD: [number, number] = [120, 88];
const cE: [number, number] = [90, 50];
const cF: [number, number] = [170, 50];
const cG: [number, number] = [200, 28];
const cH: [number, number] = [120, 28];
const boxParts = (): DiagramElement[] => [
  pg([cA, cB, cF, cE], C.ink, FILL.warm),
  pg([cB, cC, cG, cF], C.ink, FILL.gray),
  pg([cE, cF, cG, cH], C.ink, FILL.yellow),
  ln(cA[0], cA[1], cD[0], cD[1], C.gray, true, 1.4),
  ln(cD[0], cD[1], cC[0], cC[1], C.gray, true, 1.4),
  ln(cD[0], cD[1], cH[0], cH[1], C.gray, true, 1.4),
];
const cuboidAC = () => ln(cA[0], cA[1], cC[0], cC[1], C.blue, false, 3);
const cuboidCG = () => ln(cC[0], cC[1], cG[0], cG[1], C.green, false, 3);
const cuboidAG = () => ln(cA[0], cA[1], cG[0], cG[1], C.red, false, 3);
const kukanBox: DiagramFigure = show([
  {
    note: '縦3cm、横4cm、高さ12cmの直方体があります。頂点 A から、いちばん遠い頂点 G まで、箱の中をななめに通る対角線 AG の長さを求めます。',
    add: [...boxParts(), lb(130, 126, '横 4', 12, C.gray, 'middle', true), lb(204, 106, '縦 3', 12, C.gray, 'start', true), lb(84, 82, '高さ 12', 12, C.gray, 'end', true), lb(84, 112, 'A', 12, C.ink, 'end', true), lb(206, 26, 'G', 12, C.ink, 'start', true), cuboidAG(), ...band(140, lb(160, 175, '対角線 AG の長さは？', 14, C.red, 'middle', true))],
  },
  {
    note: '❓ なぜ、そのまま三平方の定理が使えないの？ AG は、どの面の上にもなく、箱の中を斜めに突きぬける線です。三平方の定理は、1つの平らな面の中の直角三角形にしか使えません。',
    add: band(140, bx(20, 152, 280, 30, 'AG は、面の上ではなく、箱の中を通る', C.red, FILL.red, 13), lb(160, 208, '→ 平らな面の中に直角三角形を作る必要がある', 12, C.gray)),
  },
  {
    note: '❓ では、どうするの？ 2回に分けます。まず底面（下の面）の中で、A から C までの対角線を考えます。底面は縦3・横4の長方形です。',
    add: [cuboidAC(), lb(150, 100, 'AC', 12, C.blue, 'middle', true), ...band(140, lb(160, 175, 'まず底面の対角線 AC', 14, C.blue, 'middle', true))],
  },
  {
    note: '底面は長方形で、横4と縦3が直角に交わっています。だから AC² ＝ 4² ＋ 3² ＝ 16 ＋ 9 ＝ 25。AC は正の数なので √25 ＝ 5 です（3・4・5 の組）。',
    add: band(140, bx(20, 150, 280, 28, 'AC² ＝ 4² ＋ 3² ＝ 16 ＋ 9 ＝ 25', C.blue, FILL.blue, 14), bx(20, 186, 280, 32, 'AC ＝ √25 ＝ 5cm', C.green, FILL.green, 16)),
  },
  {
    note: '❓ 次はどんな三角形を作るの？ 辺 CG は底面に垂直に立っています。だから CG は、底面の中の線 AC とも直角です。A・C・G を結ぶと、C が直角の三角形 ACG ができます。',
    add: [pg([cA, cC, cG], C.red, 'rgba(225,29,72,0.16)'), cuboidCG(), lb(206, 62, 'CG 12', 12, C.green, 'start', true), ...band(140, bx(20, 155, 280, 30, '三角形 ACG は、C が直角', C.red, FILL.red, 14), lb(160, 210, '直角をはさむ辺は AC（5）と CG（12）', 12, C.gray))],
  },
  {
    note: 'この直角三角形に、もう一度三平方の定理を使います。AG² ＝ AC² ＋ CG² ＝ 5² ＋ 12² ＝ 25 ＋ 144 ＝ 169。だから AG ＝ √169 ＝ 13cm です。',
    add: [cuboidAG(), ...band(140, bx(20, 150, 280, 28, 'AG² ＝ 5² ＋ 12² ＝ 25 ＋ 144 ＝ 169', C.blue, FILL.blue, 13), bx(20, 186, 280, 32, 'AG ＝ √169 ＝ 13cm', C.green, FILL.green, 16))],
  },
  {
    note: '❓ 公式の √(a²＋b²＋c²) は、どこから来たの？ 1回目の 5² は、実は 3²＋4² でした。それを2回目に入れると AG² ＝ (3²＋4²)＋12² ＝ 3²＋4²＋12²。3方向の長さの2乗を全部足した形になります。',
    add: fresh(bx(15, 14, 290, 30, '1回目：AC² ＝ 4² ＋ 3²', C.blue, FILL.blue, 14), bx(15, 56, 290, 30, '2回目：AG² ＝ AC² ＋ 12²', C.green, FILL.green, 14), lb(160, 106, '1回目を2回目に入れると…', 12, C.gray), ...band(120, bx(15, 132, 290, 36, 'AG² ＝ 3² ＋ 4² ＋ 12² ＝ 169', C.purple, FILL.purple, 15), lb(160, 192, '対角線 ＝ √(縦² ＋ 横² ＋ 高さ²)', 14, C.purple, 'middle', true), lb(160, 216, '13 ＝ √169 で確かめ完了', 12, C.gray))),
  },
  {
    note: '立方体は、3方向の長さがすべて a です。だから対角線は √(a²＋a²＋a²)＝√(3a²)＝a√3。たとえば1辺が2なら、2√3 です。',
    add: fresh(...boxParts(), cuboidAG(), lb(130, 126, 'a', 13, C.gray, 'middle', true), lb(204, 106, 'a', 13, C.gray, 'start', true), lb(84, 82, 'a', 13, C.gray, 'end', true), ...band(140, bx(20, 150, 280, 28, 'a² ＋ a² ＋ a² ＝ 3a²', C.blue, FILL.blue, 14), bx(20, 186, 280, 32, '対角線 ＝ √(3a²) ＝ a√3', C.green, FILL.green, 16))),
  },
  {
    note: '角錐でも同じ考え方です。底面が1辺6cmの正方形、側辺（頂点から底の頂点まで）が5cmの正四角錐の高さを求めます。高さは、頂点 P から底面の中心 O へ、まっすぐ下ろした長さです。',
    add: fresh(pg([[100, 118], [180, 118], [210, 96], [130, 96]], C.ink, FILL.warm), ln(155, 30, 100, 118, C.ink, false, 1.6), ln(155, 30, 180, 118, C.ink, false, 1.6), ln(155, 30, 210, 96, C.ink, false, 1.6), ln(155, 30, 130, 96, C.gray, true, 1.4), ln(155, 30, 155, 107, C.red, true, 2.6), dot(155, 107, C.red), lb(160, 26, 'P', 12, C.ink, 'start', true), lb(161, 112, 'O', 11, C.red, 'start', true), lb(158, 66, '高さ', 11, C.red, 'start', true), ...band(140, lb(160, 170, '底面1辺6、側辺5。高さ PO は？', 13, C.red, 'middle', true), lb(160, 198, '直角三角形 POA を作ればよい', 12, C.gray))),
  },
  {
    note: '❓ 三角形 POA の、OA の長さは？ 底面の正方形の対角線 AC は、1辺の √2 倍で 6√2。中心 O はその真ん中なので、OA は半分の 3√2 です。',
    add: fresh(pg([[100, 118], [180, 118], [210, 96], [130, 96]], C.ink, FILL.warm), ln(100, 118, 210, 96, C.blue, false, 3), dot(155, 107, C.red), lb(160, 128, 'A', 12, C.ink, 'end', true), lb(214, 96, 'C', 12, C.ink, 'start', true), lb(161, 100, 'O', 11, C.red, 'middle', true), ...band(140, bx(20, 150, 280, 28, 'AC ＝ 6√2　→　OA ＝ 6√2 ÷ 2 ＝ 3√2', C.blue, FILL.blue, 13), lb(160, 205, '正方形の対角線は、たがいに真ん中で交わる', 12, C.gray))),
  },
  {
    note: '三角形 POA は、O が直角です。斜辺は側辺 PA＝5。だから PO² ＝ 5² − (3√2)² ＝ 25 − 18 ＝ 7。高さは √7cm です。検算：7 ＋ 18 ＝ 25 で、側辺の2乗と同じです。',
    add: fresh(pg([[80, 118], [230, 118], [230, 24]], C.ink, FILL.warm), pg([[224, 118], [224, 112], [230, 112], [230, 118]], C.gray, FILL.warm), lb(155, 134, 'OA ＝ 3√2', 12, C.blue, 'middle', true), lb(238, 72, 'PO ＝ ？', 12, C.red, 'start', true), lb(140, 62, 'PA ＝ 5', 12, C.ink, 'end', true), ...band(140, bx(20, 150, 280, 28, 'PO² ＝ 5² − (3√2)² ＝ 25 − 18 ＝ 7', C.blue, FILL.blue, 13), bx(20, 186, 280, 32, '高さ PO ＝ √7 cm', C.green, FILL.green, 16))),
  },
  {
    note: '❓ 「側面の三角形の高さ」は、この高さと同じなの？ ちがいます。側面の三角形 PAB の高さ PM は、辺 AB の真ん中 M までの長さで、PM² ＝ 5² − 3² ＝ 16、PM ＝ 4。立体の高さ √7 とは別のものです。',
    add: fresh(pg([[100, 118], [180, 118], [210, 96], [130, 96]], C.ink, FILL.warm), ln(155, 30, 100, 118, C.ink, false, 1.6), ln(155, 30, 180, 118, C.ink, false, 1.6), ln(155, 30, 210, 96, C.ink, false, 1.6), ln(155, 30, 130, 96, C.gray, true, 1.4), ln(155, 30, 155, 107, C.red, true, 2.6), ln(155, 30, 140, 118, C.green, false, 3), dot(140, 118, C.green), lb(140, 132, 'M', 12, C.green, 'middle', true), lb(162, 62, '高さ √7', 10, C.red, 'start', true), lb(142, 62, '側面の高さ 4', 10, C.green, 'end', true), ...band(140, bx(20, 150, 280, 28, 'PM² ＝ 5² − 3² ＝ 16　→　PM ＝ 4', C.green, FILL.green, 13), lb(160, 205, '問題文が「どちらの高さ」か、必ず確かめる', 12, C.red, 'middle', true))),
  },
  {
    note: 'まとめ。空間図形では、①平らな面の中で直角三角形を見つけ、三平方を使う ②その結果を使って、もう1つ直角三角形を立てる。この2段階で、直方体でも角錐でも解けます。',
    add: fresh(bx(20, 14, 280, 34, '① 底面で直角三角形 → 三平方（1回目）', C.blue, FILL.blue, 13), bx(20, 62, 280, 34, '② その結果と高さで直角三角形 → 三平方（2回目）', C.green, FILL.green, 12), bx(20, 110, 280, 34, '直方体の対角線 ＝ √(a²＋b²＋c²)', C.purple, FILL.purple, 14), ...band(154, lb(160, 182, '角錐の高さは、頂点から底面の中心へ', 13, C.ink, 'middle', true), lb(160, 210, 'まず図に、使う直角三角形を書き込む', 13, C.gray))),
  },
]);

// ────────────────────────────────────────────────
// 円と三平方（弦の長さ・接線）
// ────────────────────────────────────────────────
const cO = { x: 160, y: 65, r: 55 };
const chordCircle = () => ci(cO.x, cO.y, cO.r, undefined, C.blue, FILL.blue);
const enSanpei: DiagramFigure = show([
  {
    note: '半径5cmの円に、中心 O から3cm離れたところを通る弦 AB があります。弦（げん）とは、円周上の2点を結んだ線です。AB の長さを求めます。',
    add: [chordCircle(), ln(116, 98, 204, 98, C.red, false, 3), dot(cO.x, cO.y, C.ink), dot(116, 98, C.red), dot(204, 98, C.red), lb(cO.x + 6, cO.y - 4, 'O', 12, C.ink, 'start', true), lb(108, 104, 'A', 12, C.red, 'end', true), lb(212, 104, 'B', 12, C.red, 'start', true), ...band(140, lb(160, 175, '半径5、中心から弦まで3。AB は？', 13, C.red, 'middle', true))],
  },
  {
    note: '❓ 弦の長さは、どうやって求めるの？ 弦のままでは、長さの手がかりがありません。そこで、中心 O から弦 AB へ垂線（すいせん）を下ろして、足を M とします。',
    add: [ln(cO.x, cO.y, cO.x, 98, C.green, false, 2.6), dot(cO.x, 98, C.green), lb(cO.x + 6, 108, 'M', 12, C.green, 'start', true), pg([[cO.x, 92], [cO.x + 6, 92], [cO.x + 6, 98], [cO.x, 98]], C.gray, FILL.warm), lb(cO.x - 6, 82, '3', 12, C.green, 'end', true), ...band(140, lb(160, 175, '垂線 OM ＝ 中心から弦までの距離 ＝ 3', 13, C.green, 'middle', true))],
  },
  {
    note: '❓ M は弦の真ん中と言えるの？ まず O と A、O と B を結びます。どちらも半径なので OA＝OB。三角形 OAB は二等辺三角形です。',
    add: [ln(cO.x, cO.y, 116, 98, C.blue, false, 2.5), ln(cO.x, cO.y, 204, 98, C.blue, false, 2.5), lb(128, 74, '5', 12, C.blue, 'end', true), lb(196, 74, '5', 12, C.blue, 'start', true), ...band(140, bx(30, 155, 260, 32, 'OA ＝ OB ＝ 半径 ＝ 5', C.blue, FILL.blue, 15), lb(160, 210, '2つの辺が等しい → 二等辺三角形', 12, C.gray))],
  },
  {
    note: '❓ だから、なぜ M が真ん中になるの？ 二等辺三角形では、頂点から底辺に下ろした垂線は、底辺をちょうど半分に分けます（左右の直角三角形がぴったり重なる）。だから AM＝MB です。',
    add: [pg([[cO.x, cO.y], [116, 98], [cO.x, 98]], C.green, 'rgba(22,163,74,0.16)'), pg([[cO.x, cO.y], [204, 98], [cO.x, 98]], C.purple, 'rgba(147,51,234,0.14)'), ...band(140, bx(30, 155, 260, 32, '左右の三角形は合同 → AM ＝ MB', C.purple, FILL.purple, 14), lb(160, 210, '弦の半分の長さを求めれば十分', 12, C.gray))],
  },
  {
    note: '❓ 何が分かって何が分からないの？ 直角三角形 OMA を見ると、斜辺 OA は半径 5、OM は 3。求めたいのは AM（弦の半分）です。直角三角形なので、三平方の定理が使えます。',
    add: fresh(chordCircle(), pg([[cO.x, cO.y], [116, 98], [cO.x, 98]], C.red, 'rgba(225,29,72,0.16)'), ln(116, 98, 204, 98, C.gray, false, 1.4), dot(cO.x, cO.y, C.ink), lb(cO.x + 6, cO.y - 4, 'O', 12, C.ink, 'start', true), lb(108, 104, 'A', 12, C.ink, 'end', true), lb(cO.x + 6, 108, 'M', 12, C.ink, 'start', true), lb(128, 74, '5', 12, C.blue, 'end', true), lb(cO.x - 6, 82, '3', 12, C.green, 'end', true), lb(138, 111, '？', 13, C.red, 'middle', true), ...band(140, lb(160, 170, '直角三角形 OMA', 14, C.red, 'middle', true), lb(160, 198, '斜辺5（半径）、1辺3、もう1辺 AM ＝ ？', 12, C.gray))),
  },
  {
    note: '斜辺が5なので、AM² ＝ 5² − 3² ＝ 25 − 9 ＝ 16。AM は正の数なので √16 ＝ 4 です。3・4・5 の組になっています。',
    add: band(140, bx(20, 150, 280, 28, 'AM² ＝ 5² − 3² ＝ 25 − 9 ＝ 16', C.blue, FILL.blue, 14), bx(20, 186, 280, 32, 'AM ＝ √16 ＝ 4cm', C.green, FILL.green, 16)),
  },
  {
    note: '❓ 弦 AB の長さは？ AM は弦の半分でした。だから AB ＝ AM × 2 ＝ 4 × 2 ＝ 8cm です。半分のまま答えてはいけません。',
    add: fresh(chordCircle(), ln(116, 98, 204, 98, C.red, false, 3.5), dot(116, 98, C.red), dot(204, 98, C.red), lb(138, 111, '4', 12, C.blue, 'middle', true), lb(182, 111, '4', 12, C.blue, 'middle', true), ...band(140, bx(20, 150, 280, 28, '弦 AB ＝ AM × 2 ＝ 4 × 2', C.blue, FILL.blue, 14), bx(20, 186, 280, 32, 'AB ＝ 8cm', C.green, FILL.green, 17))),
  },
  {
    note: '逆の問題もやってみましょう。半径13cmの円で、長さ24cmの弦は中心から何cm離れていますか。24cmの弦は、半分の12cmにしてから使います。',
    add: fresh(ci(160, 66, 52, undefined, C.blue, FILL.blue), ln(112, 86, 208, 86, C.red, false, 3), ln(160, 66, 160, 86, C.green, false, 2.6), ln(160, 66, 112, 86, C.blue, false, 2), dot(160, 66, C.ink), lb(126, 72, '13', 11, C.blue, 'end', true), lb(136, 100, '12', 11, C.red, 'middle', true), lb(152, 78, '？', 12, C.green, 'end', true), ...band(140, bx(20, 150, 280, 28, '？² ＝ 13² − 12² ＝ 169 − 144 ＝ 25', C.blue, FILL.blue, 13), bx(20, 186, 280, 32, '中心からの距離 ＝ √25 ＝ 5cm', C.green, FILL.green, 15))),
  },
  {
    note: '❓ 24をそのまま使うとどうなるの？ 13² − 24² ＝ 169 − 576 ＝ −407 と、2乗が負になってしまい、そんな長さはありません。こうなったら「半分にし忘れ」を疑いましょう。斜辺（半径）より、弦の半分が短いのは当然です。',
    add: fresh(bx(20, 16, 280, 34, '13² − 24² ＝ 169 − 576 ＜ 0', C.red, FILL.red, 15), lb(160, 76, 'ありえない！', 18, C.red, 'middle', true), bx(20, 100, 280, 34, '13² − 12² ＝ 169 − 144 ＝ 25', C.green, FILL.green, 15), ...band(146, lb(160, 170, '弦の半分は、いつも半径より短い', 13, C.ink, 'middle', true), lb(160, 198, '（直角三角形の斜辺は半径だから）', 12, C.gray))),
  },
  {
    note: '接線も、同じ形で解けます。円の外の点 P から、円に接線 PT をひきます。半径 5、OP＝13 のとき、接線の長さ PT を求めます。O と接点 T を結ぶと、三角形 OTP ができます。',
    add: fresh(ci(90, 70, 30, undefined, C.blue, FILL.blue), ln(168, 70, 101.5, 42.3, C.red, false, 3), ln(90, 70, 101.5, 42.3, C.blue, false, 2), ln(90, 70, 168, 70, C.gray, true, 1.4), dot(90, 70, C.ink), dot(101.5, 42.3, C.red), dot(168, 70, C.red), lb(84, 76, 'O', 12, C.ink, 'end', true), lb(104, 34, 'T', 12, C.red, 'start', true), lb(174, 74, 'P', 12, C.red, 'start', true), lb(88, 50, '5', 11, C.blue, 'end', true), lb(128, 80, '13', 11, C.gray, 'middle', true), lb(140, 50, 'PT ＝ ？', 12, C.red, 'start', true), ...band(140, lb(160, 175, '半径5、OP＝13。接線の長さ PT は？', 13, C.red, 'middle', true))),
  },
  {
    note: '❓ なぜ OT と PT は直角なの？ 接線上で T 以外の点は、円の外側にあるので、O からの距離は半径より長くなります。つまり T が O にいちばん近い点。点から直線への最短の線は垂線なので、OT は接線に垂直です。',
    add: fresh(ci(90, 70, 30, undefined, C.blue, FILL.blue), ln(60, 30, 168, 70, C.gray, false, 1.4), ln(90, 70, 73.8, 30.8, C.gray, true, 1.4), ln(90, 70, 129.2, 53.9, C.gray, true, 1.4), ln(90, 70, 101.5, 42.3, C.red, false, 3), dot(90, 70, C.ink), dot(101.5, 42.3, C.red), dot(73.8, 30.8, C.gray), dot(129.2, 53.9, C.gray), lb(104, 36, 'T', 12, C.red, 'start', true), lb(150, 88, 'ほかの点は半径より遠い', 11, C.gray, 'middle'), ...band(140, bx(20, 152, 280, 30, '接点 T が、O にいちばん近い点', C.red, FILL.red, 14), lb(160, 208, '最短の線は垂線 → OT は接線に垂直（90°）', 12, C.gray))),
  },
  {
    note: 'OT が接線と直角だと分かったので、三角形 OTP は T が直角、斜辺は OP＝13 です。PT² ＝ 13² − 5² ＝ 169 − 25 ＝ 144、PT ＝ √144 ＝ 12cm。5・12・13 の組です。',
    add: fresh(pg([[90, 70], [101.5, 42.3], [168, 70]], C.red, 'rgba(225,29,72,0.14)'), ci(90, 70, 30, undefined, C.blue, 'rgba(224,242,254,0.4)'), ln(168, 70, 101.5, 42.3, C.red, false, 3), ln(90, 70, 101.5, 42.3, C.blue, false, 2), dot(90, 70, C.ink), dot(101.5, 42.3, C.red), dot(168, 70, C.red), lb(84, 76, 'O', 12, C.ink, 'end', true), lb(104, 34, 'T', 12, C.red, 'start', true), lb(174, 74, 'P', 12, C.red, 'start', true), ...band(140, bx(20, 150, 280, 28, 'PT² ＝ 13² − 5² ＝ 169 − 25 ＝ 144', C.blue, FILL.blue, 13), bx(20, 186, 280, 32, 'PT ＝ √144 ＝ 12cm', C.green, FILL.green, 16))),
  },
  {
    note: 'まとめ。円と長さの問題は、①中心から弦へ垂線を下ろす（弦は二等分される）、または中心と接点を結ぶ（接線と直角） ②半径を含む直角三角形を作る ③三平方の定理。弦を求めたら、最後に2倍を忘れずに。',
    add: fresh(bx(20, 14, 280, 34, '① 中心から垂線 / 中心と接点を結ぶ', C.blue, FILL.blue, 14), bx(20, 62, 280, 34, '② 半径が斜辺の直角三角形を作る', C.green, FILL.green, 14), bx(20, 110, 280, 34, '③ 三平方の定理で残りの辺を求める', C.purple, FILL.purple, 14), ...band(154, lb(160, 182, '弦の半分 → 最後に ×2', 13, C.red, 'middle', true), lb(160, 210, '半径は、いつも斜辺になる', 13, C.gray))),
  },
]);

// ────────────────────────────────────────────────
// 立体の最短距離（展開図）
// ────────────────────────────────────────────────
const SECT = { x: 160, y: 20, r: 90 };
const sectorMain = () => sc(SECT.x, SECT.y, SECT.r, 210, 330, C.green, 'rgba(22,163,74,0.16)');
const saitan: DiagramFigure = show([
  {
    note: '底面の半径3cm、母線（ぼせん：頂点から底のふちまでの線）9cmの円錐があります。表面にそって進む、いちばん短い道のりを考えます。',
    add: [...cone(160, 16, 104, 46, 12), ln(160, 16, 114, 104, C.red, false, 2.5), lb(128, 52, '母線 9', 12, C.red, 'end', true), ln(160, 104, 206, 104, C.blue, false, 2.5), lb(184, 122, '半径 3', 12, C.blue, 'middle', true), ...band(140, lb(160, 175, '表面にそった最短の道は？', 14, C.ink, 'middle', true))],
  },
  {
    note: '❓ 曲がった面の上で、どう考える？ 円錐や箱の表面は曲がったりおれたりしていて、そのままでは長さが測れません。そこで表面を切り開いて、平らな1枚の図（展開図）にします。',
    add: band(140, bx(30, 155, 260, 32, '立体の表面 → 切り開いて平らにする', C.blue, FILL.blue, 14), lb(160, 210, 'これが展開図', 12, C.gray)),
  },
  {
    note: '❓ 平らにすると、なぜ直線が最短なの？ 平らな紙の上で、2点間の最短の道は直線だからです。だから、展開図の上で2点を直線で結んだ長さが、立体の表面にそった最短距離になります。',
    add: band(140, bx(30, 155, 260, 32, '展開図の上で2点を直線で結ぶ', C.red, FILL.red, 14), lb(160, 210, '平面では、2点間の最短は直線', 12, C.gray)),
  },
  {
    note: 'まず直方体で考えます。縦3・横4・高さ5の直方体で、ある頂点から、反対側の頂点まで、表面を通る最短の道を求めます。どの2つの面を通るかで、展開図が3通りできます。',
    add: fresh(bx(30, 30, 56, 40, undefined, C.gray, FILL.warm), ln(30, 70, 86, 30, C.red, false, 2.5), bx(100, 30, 64, 32, undefined, C.gray, FILL.warm), ln(100, 62, 164, 30, C.red, false, 2.5), bx(178, 30, 72, 24, undefined, C.gray, FILL.warm), ln(178, 54, 250, 30, C.red, false, 2.5), lb(58, 84, '7 × 5', 12, C.ink, 'middle', true), lb(132, 84, '8 × 4', 12, C.ink, 'middle', true), lb(214, 84, '9 × 3', 12, C.ink, 'middle', true), lb(160, 110, '（横の長さ × たての長さ）', 11, C.gray), ...band(140, lb(160, 170, '展開図は3通り。ななめの線はそれぞれ？', 13, C.ink, 'middle', true))),
  },
  {
    note: '❓ それぞれの長さは？ 三平方の定理で、7×5 なら 7²＋5²＝49＋25＝74。8×4 なら 64＋16＝80、9×3 なら 81＋9＝90。いちばん短いのは 74 の場合です。',
    add: band(140, bx(15, 150, 90, 30, '7²＋5²＝74', C.green, FILL.green, 12), bx(115, 150, 90, 30, '8²＋4²＝80', C.gray, FILL.gray, 12), bx(215, 150, 90, 30, '9²＋3²＝90', C.gray, FILL.gray, 12), bx(30, 192, 260, 34, '最短 ＝ √74 cm', C.green, FILL.green, 16)),
  },
  {
    note: '❓ なぜ3通りとも計算するの？ どの面を通るかで、展開図の形が変わり、直線の長さもちがうからです。1通りだけで終わると、もっと短い道を見落とすかもしれません。2〜3通り試して、いちばん短いものを選びます。',
    add: fresh(bx(20, 16, 280, 30, '面を変えると、長さも変わる', C.red, FILL.red, 14), bx(20, 58, 90, 30, '√74', C.green, FILL.green, 14), bx(115, 58, 90, 30, '√80', C.gray, FILL.gray, 14), bx(210, 58, 90, 30, '√90', C.gray, FILL.gray, 14), lb(160, 112, '2〜3通り試して、いちばん短いものを選ぶ', 12, C.ink, 'middle', true), ...band(130, lb(160, 158, '1通りだけで終わらない', 14, C.red, 'middle', true), lb(160, 188, '74 ＜ 80 ＜ 90 だから √74', 13, C.green))),
  },
  {
    note: '次は円錐です。円錐の側面を切り開くと、おうぎ形になります。おうぎ形の半径は母線の長さ9cmです。では、おうぎ形の中心角は何度になるのでしょう。',
    add: fresh(sectorMain(), lb(SECT.x, 14, 'O', 12, C.ink, 'middle', true), lb(SECT.x, 70, '半径 ＝ 母線 ＝ 9', 12, C.red, 'middle', true), ...band(140, lb(160, 170, '中心角は何度？', 14, C.ink, 'middle', true))),
  },
  {
    note: '❓ 中心角は、何で決まるの？ 切り開いたおうぎ形を、もう一度まるめて円錐にすると、おうぎ形の弧（こ）の部分が、底面の円のふち（円周）にぴったり重なります。だから、弧の長さ ＝ 底面の円周です。',
    add: [...arcLine(SECT.x, SECT.y, SECT.r, SECT.r, 30, 150, C.red), ...band(140, bx(15, 152, 290, 30, '弧の長さ ＝ 底面の円周 ＝ 2π × 3 ＝ 6π', C.red, FILL.red, 13), lb(160, 208, 'おうぎ形の弧が、底面のふちになる', 12, C.gray))],
  },
  {
    note: '❓ 弧の長さから、中心角はどう決まるの？ 半径9の円の円周は 2π×9＝18π。そのうち弧が 6π なので、円全体の 6π÷18π＝1/3 です。中心角も、360°の1/3で 120° になります。',
    add: band(140, bx(15, 148, 290, 28, '円周 2π×9 ＝ 18π のうち、弧は 6π', C.blue, FILL.blue, 13), bx(15, 182, 290, 28, '6π ÷ 18π ＝ 1/3　→　360° × 1/3 ＝ 120°', C.green, FILL.green, 13)),
  },
  {
    note: 'この計算をまとめると、中心角 ＝ 360° × (底面の半径 ÷ 母線) です。3÷9＝1/3 なので 120°。底面の半径2cm、母線6cmでも 2÷6＝1/3 で、やはり 120° になります。',
    add: fresh(bx(15, 16, 290, 36, '中心角 ＝ 360° × 底面の半径 ÷ 母線', C.purple, FILL.purple, 15), bx(15, 66, 290, 30, '半径3、母線9　→　360 × 3/9 ＝ 120°', C.blue, FILL.blue, 13), bx(15, 106, 290, 30, '半径2、母線6　→　360 × 2/6 ＝ 120°', C.green, FILL.green, 13), ...band(148, lb(160, 176, '比 半径 : 母線 が同じなら、中心角も同じ', 13, C.ink, 'middle', true), lb(160, 206, '3 : 9 ＝ 2 : 6 ＝ 1 : 3', 12, C.gray))),
  },
  {
    note: '使ってみましょう。円錐の底のふちの点 A から、側面を1周してもとの A にもどる最短の道。展開図では、おうぎ形の両はしの A と A′ を直線で結んだ長さです。',
    add: fresh(sectorMain(), ln(82, 65, 238, 65, C.red, false, 3), dot(82, 65, C.red), dot(238, 65, C.red), lb(74, 76, 'A', 12, C.red, 'end', true), lb(246, 76, 'A′', 12, C.red, 'start', true), lb(SECT.x, 14, 'O', 12, C.ink, 'middle', true), ...band(140, lb(160, 170, '1周して A にもどる最短の道は AA′', 13, C.red, 'middle', true), lb(160, 198, '（中心角120°、半径9のおうぎ形）', 12, C.gray))),
  },
  {
    note: '❓ AA′ の長さはどう求めるの？ 三角形 OAA′ は OA＝OA′＝9 の二等辺三角形。O から AA′ へ垂線 OM を下ろすと、頂角120°が半分の60°になり、30°・60°・90° の直角三角形ができます。',
    add: fresh(sectorMain(), ln(82, 65, 238, 65, C.red, false, 2), ln(SECT.x, SECT.y, SECT.x, 65, C.green, true, 2.2), ln(SECT.x, SECT.y, 82, 65, C.ink, false, 1.6), dot(SECT.x, 65, C.green), lb(74, 76, 'A', 12, C.red, 'end', true), lb(SECT.x + 6, 78, 'M', 12, C.green, 'start', true), lb(SECT.x + 8, 44, '60°', 11, C.green, 'start', true), ...band(140, bx(15, 150, 290, 28, 'AM ＝ 9 × √3/2　（30°・60°・90° の比 1:2:√3）', C.blue, FILL.blue, 12), bx(15, 186, 290, 30, 'AA′ ＝ 2 × 9√3/2 ＝ 9√3 cm', C.green, FILL.green, 14))),
  },
  {
    note: '❓ 中心角を 360×(9÷3)＝1080° と、逆にしてしまったら？ おうぎ形は円の一部なので、中心角は360°より大きくなりません。1080°になったら、比を逆にしたサイン。「小さいほう（底面の半径）÷大きいほう（母線）」と覚えましょう。',
    add: fresh(bx(15, 16, 290, 34, '360 × (9 ÷ 3) ＝ 1080° ＞ 360°', C.red, FILL.red, 15), lb(160, 76, 'ありえない！', 18, C.red, 'middle', true), bx(15, 100, 290, 34, '360 × (3 ÷ 9) ＝ 120°', C.green, FILL.green, 15), ...band(146, lb(160, 172, '底面の半径 ÷ 母線（小 ÷ 大）', 14, C.ink, 'middle', true), lb(160, 200, '答えが360°以下か、いつも確かめる', 12, C.gray))),
  },
  {
    note: 'まとめ。①通る面だけを展開する ②2点を直線で結ぶ ③三平方の定理などで長さを求める。直方体は複数の展開を試し、円錐は 中心角＝360°×底面の半径÷母線 を使います。',
    add: fresh(bx(20, 14, 280, 34, '① 通る面だけを展開する', C.blue, FILL.blue, 14), bx(20, 62, 280, 34, '② 2点を直線で結ぶ', C.red, FILL.red, 14), bx(20, 110, 280, 34, '③ 三平方の定理で長さを求める', C.green, FILL.green, 14), ...band(154, lb(160, 182, '直方体は、面のえらび方を複数試す', 13, C.ink, 'middle', true), lb(160, 210, '円錐の中心角 ＝ 360° × 半径 ÷ 母線', 13, C.purple, 'middle', true))),
  },
]);

// ────────────────────────────────────────────────
// 角柱・円柱の体積と表面積
// ────────────────────────────────────────────────
/** 直方体（前の面 x,y,w,h と、うしろへのずれ dx,dy）。 */
const box3d = (x: number, y: number, w: number, h: number, dx: number, dy: number, front: string = FILL.warm, side: string = FILL.gray, top: string = FILL.yellow, color: string = C.ink): DiagramElement[] => [
  pg([[x, y], [x + w, y], [x + w, y + h], [x, y + h]], color, front),
  pg([[x + w, y], [x + w + dx, y - dy], [x + w + dx, y + h - dy], [x + w, y + h]], color, side),
  pg([[x, y], [x + w, y], [x + w + dx, y - dy], [x + dx, y - dy]], color, top),
];
const chuu: DiagramFigure = show([
  {
    note: '底面が1辺4cmの正方形で、高さ7cmの四角柱があります。柱（はしら）の体積は、底面積×高さで求まります。なぜそう言えるのか、確かめましょう。',
    add: [...box3d(120, 34, 56, 92, 20, 14), lb(148, 136, '4', 12, C.gray, 'middle', true), lb(114, 82, '高さ 7', 12, C.gray, 'end', true), ...band(140, lb(160, 175, '体積は？', 14, C.ink, 'middle', true))],
  },
  {
    note: '❓ なぜ「底面積×高さ」なの？ 高さ7cmを、1cmの厚さの板7枚に分けてみます。1枚は、底面と同じ形で厚さ1cm。1枚の体積は、底面積 16cm² × 1cm ＝ 16cm³ です。',
    add: fresh(...[0, 1, 2, 3, 4, 5, 6].map((i) => bx(110, 26 + i * 14, 84, 14, i === 0 ? '16cm³' : undefined, C.blue, i % 2 ? FILL.blue : FILL.warm, 10)), lb(204, 60, '1cmの板', 11, C.blue, 'start', true), lb(204, 76, '（底面積 × 1）', 10, C.gray, 'start'), ...band(140, lb(160, 170, '1枚 ＝ 底面積 × 1cm ＝ 16cm³', 13, C.blue, 'middle', true))),
  },
  {
    note: '❓ 何枚あるの？ 高さが7cmなので、1cmの板が7枚です。全部で 16 × 7 ＝ 112cm³。底面積に「高さの数」をかけているだけなので、体積 ＝ 底面積 × 高さ です。',
    add: band(140, bx(20, 150, 280, 28, '16cm³ の板が 7 枚', C.blue, FILL.blue, 14), bx(20, 186, 280, 32, '16 × 7 ＝ 112cm³', C.green, FILL.green, 16)),
  },
  {
    note: '❓ 円柱でも同じ式でいいの？ 円柱も、底面の円を高さの分だけ積み上げた形です。どの高さで切っても、切り口は底面と同じ円になるので、同じ考えが使えます。体積 ＝ πr² × h です。',
    add: fresh(...cyl(160, 30, 108, 46, 12), ...arcLine(160, 70, 46, 12, 0, 180, C.red), ...arcLine(160, 70, 46, 12, 180, 360, C.red, true), lb(214, 72, 'どこで切っても\n同じ円', 11, C.red, 'start', true), ...band(140, bx(30, 155, 260, 32, '体積 ＝ 底面積 × 高さ ＝ πr² × h', C.purple, FILL.purple, 14), lb(160, 210, '底面の形が何でも、柱なら同じ式', 12, C.gray))),
  },
  {
    note: '使ってみましょう。底面の半径3cm、高さ5cmの円柱。底面積は π×3²＝9π、これに高さ5をかけて 9π×5＝45π cm³ です。',
    add: fresh(...cyl(160, 30, 108, 46, 12), lb(160, 34, 'r＝3', 11, C.red, 'middle', true), lb(218, 72, '高さ 5', 12, C.gray, 'start', true), ...band(140, bx(20, 150, 280, 28, '底面積 ＝ π × 3² ＝ 9π', C.blue, FILL.blue, 14), bx(20, 186, 280, 32, '体積 ＝ 9π × 5 ＝ 45π cm³', C.green, FILL.green, 15))),
  },
  {
    note: 'つぎに表面積です。円柱の表面を切り開くと、1つの長方形（側面）と、2つの円（上と下のふた）に分かれます。',
    add: fresh(ci(110, 26, 18, undefined, C.blue, FILL.blue), bx(60, 44, 200, 44, '側面（長方形）', C.green, FILL.green, 13), ci(210, 106, 18, undefined, C.blue, FILL.blue), lb(136, 26, '上のふた', 11, C.blue, 'start', true), lb(236, 106, '下の底', 11, C.blue, 'start', true), lb(268, 66, '高さ', 11, C.gray, 'start', true), ...band(140, lb(160, 175, '表面積 ＝ 側面 ＋ 円2つ', 14, C.ink, 'middle', true))),
  },
  {
    note: '❓ 長方形の「横の長さ」は何なの？ 側面は、長方形をくるっと丸めた筒です。丸めると横の辺が、底面の円のふちにぴったり重なります。だから横の長さ ＝ 底面の円周 ＝ 2πr です。',
    add: fresh(ci(110, 26, 18, undefined, C.blue, FILL.blue), bx(60, 44, 200, 44, undefined, C.green, FILL.green), ci(210, 106, 18, undefined, C.blue, FILL.blue), ar(160, 66, 254, 66, C.red), ar(160, 66, 66, 66, C.red), lb(160, 56, '横 ＝ 円周 ＝ 2πr', 12, C.red, 'middle', true), lb(160, 80, '側面', 11, C.green, 'middle', true), ...band(140, bx(20, 155, 280, 30, '側面積 ＝ 2πr × h', C.red, FILL.red, 15), lb(160, 210, '横 2πr、たて h の長方形の面積', 12, C.gray))),
  },
  {
    note: '半径3cm、高さ5cmなら、側面は 2π×3×5＝30π。底の円は π×3²＝9π です。ふたと底で2つあるので 9π×2＝18π。合わせて 30π＋18π＝48π cm² です。',
    add: band(140, bx(20, 148, 280, 26, '側面 ＝ 2π × 3 × 5 ＝ 30π', C.green, FILL.green, 13), bx(20, 180, 280, 26, '底面 ＝ π × 3² × 2 ＝ 18π', C.blue, FILL.blue, 13), lb(160, 224, '表面積 ＝ 30π ＋ 18π ＝ 48π cm²', 14, C.purple, 'middle', true)),
  },
  {
    note: '❓ 底面は、なぜ2つ分を足すの？ 円柱には、上のふたと下の底の、同じ大きさの円が2つあるからです。1つ分しか足さないミスが多いので、展開図に円が2つあることを、いつも確かめましょう。',
    add: fresh(bx(20, 16, 280, 34, '表面積 ＝ 側面積 ＋ 底面積 × 2', C.purple, FILL.purple, 15), ci(110, 82, 20, '上', C.blue, FILL.blue, 13), ci(210, 82, 20, '下', C.blue, FILL.blue, 13), lb(160, 86, '＋', 18, C.ink, 'middle', true), ...band(120, lb(160, 148, '底面は2つ（上と下）', 14, C.blue, 'middle', true), lb(160, 178, '1つだけ足すのは、よくあるミス', 13, C.red), lb(160, 206, '2πr² ＋ 2πrh とも書ける', 12, C.gray))),
  },
  {
    note: '角柱も同じです。底面が3・4・5の直角三角形で、高さ10cmの三角柱。側面は3枚の長方形が横につながった形で、横の長さは底面の周（3＋4＋5＝12）です。だから側面積 ＝ 底面の周 × 高さ ＝ 12×10 ＝ 120。',
    add: fresh(bx(40, 50, 60, 50, '3', C.green, FILL.green, 13), bx(100, 50, 80, 50, '4', C.green, FILL.green, 13), bx(180, 50, 100, 50, '5', C.green, FILL.green, 13), pg([[100, 50], [180, 50], [100, 8]], C.blue, FILL.blue), pg([[180, 100], [260, 100], [260, 134]], C.blue, FILL.blue), lb(34, 76, '高さ\n10', 11, C.gray, 'end', true), ...band(140, lb(160, 158, '側面：横 3＋4＋5 ＝ 12（底面の周）', 13, C.green, 'middle', true), lb(160, 186, '側面積 ＝ 12 × 10 ＝ 120cm²', 13, C.ink, 'middle', true), lb(160, 212, '底面：6 × 2 ＝ 12　→　表面積 132cm²', 13, C.purple, 'middle', true))),
  },
  {
    note: '❓ 体積は cm³、表面積は cm²。ちがいは？ 体積は「1cm角の立方体が何個入るか」、表面積は「1cm角の正方形が何枚ぶんの面か」を表します。単位がちがうので、たしても比べてもいけません。',
    add: fresh(bx(20, 16, 280, 34, '体積 → cm³（立方体が何個？）', C.blue, FILL.blue, 14), bx(20, 62, 280, 34, '表面積 → cm²（正方形が何枚？）', C.green, FILL.green, 14), ...band(110, lb(160, 140, '円柱 半径3・高さ5', 13, C.ink, 'middle', true), lb(160, 168, '体積 45π cm³　／　表面積 48π cm²', 14, C.purple, 'middle', true), lb(160, 200, '数がちかくても、意味がちがう', 12, C.gray))),
  },
  {
    note: 'まとめ。体積 ＝ 底面積 × 高さ。側面積 ＝ 底面の周 × 高さ。表面積 ＝ 側面積 ＋ 底面積 × 2。円柱なら 側面積 ＝ 2πr × h、底面積 ＝ πr² です。',
    add: fresh(bx(20, 14, 280, 34, '体積 ＝ 底面積 × 高さ', C.blue, FILL.blue, 15), bx(20, 62, 280, 34, '側面積 ＝ 底面の周 × 高さ', C.green, FILL.green, 15), bx(20, 110, 280, 34, '表面積 ＝ 側面積 ＋ 底面積 × 2', C.purple, FILL.purple, 14), ...band(154, lb(160, 182, '円柱：側面積 2πrh、底面積 πr²', 13, C.ink, 'middle', true), lb(160, 210, '底面は上と下で2つ分', 13, C.red))),
  },
]);

// ────────────────────────────────────────────────
// 角錐・円錐の体積と表面積
// ────────────────────────────────────────────────
const sen: DiagramFigure = show([
  {
    note: '同じ底面、同じ高さの、柱（円柱）と錐（円錐）を並べました。錐（すい）は、とがった形の立体です。錐の体積は、柱のどれくらいでしょうか。',
    add: [...cyl(90, 30, 110, 44, 11), ...cone(230, 30, 110, 44, 11), lb(90, 128, '柱', 12, C.blue, 'middle', true), lb(230, 128, '錐', 12, C.green, 'middle', true), ...band(140, lb(160, 175, '同じ底面・同じ高さ。体積は？', 13, C.ink, 'middle', true))],
  },
  {
    note: '❓ 実験で確かめると？ 円錐の容器に水を入れて、円柱の容器に移します。すると、ちょうど3回でいっぱいになります。錐は、同じ底面・同じ高さの柱の 1/3 です。',
    add: fresh(...cone(40, 60, 108, 22, 6), ...cone(100, 60, 108, 22, 6), ...cone(160, 60, 108, 22, 6), ar(190, 90, 220, 90, C.blue), ...cyl(268, 40, 108, 26, 8), lb(100, 128, '1杯', 11, C.gray, 'middle'), lb(268, 128, '3杯でいっぱい', 11, C.blue, 'middle', true), ...band(140, bx(30, 155, 260, 32, '錐の体積 ＝ 柱の 1/3', C.purple, FILL.purple, 16), lb(160, 210, '底面積 × 高さ ÷ 3', 13, C.gray))),
  },
  {
    note: '❓ 水の実験だけでなく、理由はあるの？ 立方体は、1つの頂点から3つの面に向けて切ると、同じ形の四角錐3つに分けられます。どの錐も、底面は1辺 a の正方形、高さも a。3つで立方体 a³ なので、1つは a³÷3 です。',
    add: fresh(...boxParts(), ln(cG[0], cG[1], cA[0], cA[1], C.red, true, 2), ln(cG[0], cG[1], cB[0], cB[1], C.red, false, 2), ln(cG[0], cG[1], cE[0], cE[1], C.red, false, 2), ln(cG[0], cG[1], cD[0], cD[1], C.red, true, 2), ...band(140, bx(15, 150, 290, 28, '立方体 a³ ＝ 同じ四角錐 3つ', C.red, FILL.red, 14), bx(15, 186, 290, 30, '四角錐1つ ＝ a³ ÷ 3 ＝ 底面積a² × 高さa ÷ 3', C.purple, FILL.purple, 12))),
  },
  {
    note: '使ってみましょう。底面積12cm²、高さ5cmの角錐なら、12 × 5 ÷ 3 ＝ 60 ÷ 3 ＝ 20cm³ です。÷3 を忘れると3倍の60cm³になってしまうので、「とがった立体は÷3」と覚えます。',
    add: fresh(bx(20, 20, 280, 34, '底面積 12cm²、高さ 5cm', C.gray, FILL.gray, 14), bx(20, 70, 280, 34, '12 × 5 ＝ 60（柱ならこれ）', C.blue, FILL.blue, 14), ...band(120, bx(20, 132, 280, 34, '錐は ÷3 → 60 ÷ 3 ＝ 20cm³', C.green, FILL.green, 15), lb(160, 200, '÷3 を忘れると、3倍の答えになる', 12, C.red))),
  },
  {
    note: '❓ 円錐の「高さ」と「母線」は、どうちがうの？ 高さは、頂点から底面へ垂直に下ろした長さ。母線（ぼせん）は、頂点から底のふちまでの、ななめの長さです。',
    add: fresh(...cone(160, 16, 104, 50, 13), ln(160, 16, 160, 104, C.red, true, 2.6), ln(160, 16, 110, 104, C.green, false, 3), ln(160, 104, 210, 104, C.blue, false, 2.5), lb(164, 60, '高さ h', 12, C.red, 'start', true), lb(122, 52, '母線 l', 12, C.green, 'end', true), lb(186, 120, '半径 r', 12, C.blue, 'middle', true), ...band(140, lb(160, 175, '体積には「高さ」、側面積には「母線」', 13, C.ink, 'middle', true))),
  },
  {
    note: '❓ 高さが分からないときは？ 高さ・底面の半径・母線は、直角三角形をつくり、母線がいちばん長い斜辺です。半径4、母線5なら、高さ ＝ √(5² − 4²) ＝ √9 ＝ 3cm です。',
    add: fresh(pg([[100, 100], [220, 100], [100, 28]], C.ink, FILL.warm), pg([[100, 94], [106, 94], [106, 100], [100, 100]], C.gray, FILL.warm), lb(160, 116, '半径 4', 13, C.blue, 'middle', true), lb(92, 66, '高さ ？', 13, C.red, 'end', true), lb(172, 56, '母線 5', 13, C.green, 'start', true), ...band(140, bx(20, 150, 280, 28, '高さ² ＝ 5² − 4² ＝ 25 − 16 ＝ 9', C.blue, FILL.blue, 14), bx(20, 186, 280, 32, '高さ ＝ 3cm（3・4・5 の組）', C.green, FILL.green, 15))),
  },
  {
    note: '円錐の側面積です。側面を切り開くと、半径が母線 l のおうぎ形になります。このおうぎ形の弧の長さは、底面の円周 2πr と同じです。',
    add: fresh(sc(160, 20, 90, 210, 330, C.green, 'rgba(22,163,74,0.16)'), ...arcLine(160, 20, 90, 90, 30, 150, C.red), lb(160, 14, 'O', 12, C.ink, 'middle', true), lb(160, 70, '半径 ＝ 母線 l', 12, C.green, 'middle', true), ...band(140, bx(20, 155, 280, 30, '弧の長さ ＝ 底面の円周 ＝ 2πr', C.red, FILL.red, 14), lb(160, 210, 'おうぎ形の弧が、底面のふちになる', 12, C.gray))),
  },
  {
    note: '❓ このおうぎ形の面積は？ 半径 l の円全体の面積は πl²。おうぎ形は、そのうち「弧 ÷ 円周」の割合です。円周は 2πl、弧は 2πr なので、割合は 2πr÷2πl ＝ r/l です。',
    add: band(140, bx(15, 148, 290, 28, '円全体 πl² のうち、割合は 2πr ÷ 2πl ＝ r/l', C.blue, FILL.blue, 12), bx(15, 182, 290, 32, 'おうぎ形 ＝ πl² × r/l ＝ π × l × r', C.green, FILL.green, 14)),
  },
  {
    note: '使ってみましょう。底面の半径3cm、母線5cmの円錐。側面積は π × 5 × 3 ＝ 15π。底面は π × 3² ＝ 9π。合わせて 表面積 ＝ 15π ＋ 9π ＝ 24π cm² です。',
    add: fresh(...cone(160, 16, 104, 50, 13), lb(122, 52, '母線 5', 12, C.green, 'end', true), lb(186, 120, '半径 3', 12, C.blue, 'middle', true), ...band(140, bx(20, 148, 280, 26, '側面積 ＝ π × 5 × 3 ＝ 15π', C.green, FILL.green, 13), bx(20, 180, 280, 26, '底面積 ＝ π × 3² ＝ 9π', C.blue, FILL.blue, 13), lb(160, 224, '表面積 ＝ 15π ＋ 9π ＝ 24π cm²', 14, C.purple, 'middle', true))),
  },
  {
    note: '❓ 体積で母線を使うとどうなる？ 半径3、母線5の円錐の体積を、母線で計算すると 9π×5÷3＝15π。正しい高さは √(5²−3²)＝4 なので 9π×4÷3＝12π。まちがいのもとは、高さと母線の取りちがえです。',
    add: fresh(bx(15, 16, 290, 34, '母線5を使う → 9π × 5 ÷ 3 ＝ 15π（×）', C.red, FILL.red, 13), bx(15, 62, 290, 34, '高さ4を使う → 9π × 4 ÷ 3 ＝ 12π（○）', C.green, FILL.green, 13), ...band(110, lb(160, 138, '高さ ＝ √(5² − 3²) ＝ 4', 13, C.blue, 'middle', true), lb(160, 166, '体積は「高さ」、側面積は「母線」', 13, C.ink, 'middle', true), lb(160, 198, '問題文が高さか母線か、かならず確かめる', 12, C.red))),
  },
  {
    note: 'まとめ。錐の体積は 底面積×高さ÷3（柱の1/3）。円錐の側面積は π×母線×底面の半径。表面積は側面積＋底面積。高さと母線を取りちがえないことが、いちばん大事です。',
    add: fresh(bx(20, 14, 280, 34, '体積 ＝ 底面積 × 高さ ÷ 3', C.blue, FILL.blue, 15), bx(20, 62, 280, 34, '円錐の側面積 ＝ π × 母線 × 半径', C.green, FILL.green, 14), bx(20, 110, 280, 34, '表面積 ＝ 側面積 ＋ 底面積', C.purple, FILL.purple, 14), ...band(154, lb(160, 182, '体積は高さ、側面積は母線', 13, C.ink, 'middle', true), lb(160, 210, '高さが不明なら 三平方の定理', 13, C.gray))),
  },
]);

// ────────────────────────────────────────────────
// 球の体積と表面積
// ────────────────────────────────────────────────
const ball = (cx: number, cy: number, r: number, color: string = C.blue, fill: string = FILL.blue): DiagramElement[] => [
  ci(cx, cy, r, undefined, color, fill),
  ...arcLine(cx, cy, r, r * 0.24, 180, 360, color, true),
  ...arcLine(cx, cy, r, r * 0.24, 0, 180, color),
];
const kyuu: DiagramFigure = show([
  {
    note: '球の体積と表面積の公式は、体積 ＝ (4/3)πr³、表面積 ＝ 4πr² です。丸暗記する前に、これらがどこから来たのかを見ていきましょう。',
    add: [...ball(160, 64, 50), ln(160, 64, 210, 64, C.red, false, 2.5), lb(186, 58, 'r', 13, C.red, 'middle', true), ...band(140, bx(15, 150, 290, 28, '体積 ＝ (4/3)πr³', C.blue, FILL.blue, 15), bx(15, 186, 290, 28, '表面積 ＝ 4πr²', C.green, FILL.green, 15))],
  },
  {
    note: '❓ 表面積 4πr² は、なぜ「4」なの？ 球がぴったり入る円柱を考えます。半径は r、高さは 2r。この円柱の側面（筒の部分）の面積は 2πr × 2r ＝ 4πr² で、球の表面積とぴったり同じになります。',
    add: fresh(...cyl(160, 20, 114, 50, 12, C.gray, 'rgba(241,239,234,0.5)'), ...ball(160, 67, 47, C.blue, 'rgba(224,242,254,0.7)'), lb(224, 68, '高さ 2r', 11, C.gray, 'start', true), ...band(140, bx(15, 152, 290, 30, '円柱の側面 ＝ 2πr × 2r ＝ 4πr²', C.red, FILL.red, 14), lb(160, 210, 'これが球の表面積と同じ', 12, C.gray))),
  },
  {
    note: '❓ 4πr² は、円のいくつぶん？ 半径 r の円の面積は πr²。4πr² ÷ πr² ＝ 4 なので、球の表面積は、同じ半径の円の4つぶんです。半径2cmなら 4π×2²＝16π cm² です。',
    add: fresh(ci(64, 60, 30, 'πr²', C.blue, FILL.blue, 13), ci(128, 60, 30, 'πr²', C.blue, FILL.blue, 13), ci(192, 60, 30, 'πr²', C.blue, FILL.blue, 13), ci(256, 60, 30, 'πr²', C.blue, FILL.blue, 13), ...band(110, bx(15, 122, 290, 28, 'πr² × 4 ＝ 4πr²', C.green, FILL.green, 15), lb(160, 172, '半径2cm → 4 × π × 2² ＝ 16π cm²', 14, C.purple, 'middle', true), lb(160, 204, '表面積は、円4つぶん', 12, C.gray))),
  },
  {
    note: '体積は、同じ図で考えます。半径 r、高さ 2r の円柱の体積は πr² × 2r ＝ 2πr³。この円柱にぴったり入る円錐（底面 r、高さ 2r）の体積は、柱の1/3で (2/3)πr³ です。',
    add: fresh(...cyl(70, 30, 108, 34, 10), ...cone(250, 30, 108, 34, 10), ...ball(160, 76, 34), lb(70, 128, '円柱 2πr³', 12, C.blue, 'middle', true), lb(160, 128, '球', 12, C.purple, 'middle', true), lb(250, 128, '円錐 (2/3)πr³', 11, C.green, 'middle', true), ...band(140, lb(160, 176, '同じ半径 r、高さ 2r の 円柱・円錐', 13, C.ink, 'middle', true), lb(160, 204, '球の体積は、この中間', 12, C.gray))),
  },
  {
    note: '❓ 球の体積は？ 実験で確かめると、球の体積は、この円柱の 2/3、円錐の2つぶんになります。円柱 2πr³ の 2/3 は (2/3)×2 ＝ 4/3 なので、球の体積は (4/3)πr³ です。',
    add: band(140, bx(15, 148, 290, 26, '円錐 : 球 : 円柱 ＝ 1 : 2 : 3', C.purple, FILL.purple, 14), bx(15, 180, 290, 26, '球 ＝ 2πr³ × 2/3 ＝ (4/3)πr³', C.green, FILL.green, 14), lb(160, 224, '円錐 (2/3)πr³ × 2 ＝ (4/3)πr³ とも一致', 11, C.gray)),
  },
  {
    note: '❓ 体積と表面積を、どう区別するの？ 次数（かける回数）で見分けられます。体積は長さを3回かけるので r³、表面積は2回かけるので r²。単位も、体積は cm³、表面積は cm² です。',
    add: fresh(bx(20, 18, 280, 40, '体積 → r³（3回）→ cm³', C.blue, FILL.blue, 15), bx(20, 70, 280, 40, '表面積 → r²（2回）→ cm²', C.green, FILL.green, 15), ...band(126, lb(160, 158, '(4/3)πr³ と 4πr² を', 13, C.ink, 'middle', true), lb(160, 186, '取りちがえたら、次数を思い出す', 13, C.red, 'middle', true))),
  },
  {
    note: '使ってみましょう。半径3cmの球。体積 ＝ (4/3)π×27 ＝ 36π cm³。表面積 ＝ 4π×9 ＝ 36π cm²。数は同じですが、単位がちがいます。',
    add: fresh(...ball(160, 60, 46), ln(160, 60, 206, 60, C.red, false, 2.5), lb(184, 54, '3', 13, C.red, 'middle', true), ...band(130, bx(15, 140, 290, 26, '体積 ＝ (4/3)π × 27 ＝ 36π cm³', C.blue, FILL.blue, 13), bx(15, 172, 290, 26, '表面積 ＝ 4π × 9 ＝ 36π cm²', C.green, FILL.green, 13), lb(160, 220, '数が同じでも、単位がちがう', 12, C.gray))),
  },
  {
    note: '❓ 半径が2倍になると、どうなる？ 表面積は半径の2乗に比例するので 2²＝4倍。体積は3乗に比例するので 2³＝8倍です。半径を3倍にすれば、表面積9倍、体積27倍になります。',
    add: fresh(...ball(90, 76, 22), ...ball(220, 76, 44), lb(90, 110, '半径 r', 11, C.gray, 'middle'), lb(220, 130, '半径 2r', 11, C.gray, 'middle'), ...band(140, bx(15, 150, 290, 26, '表面積は 2² ＝ 4倍', C.green, FILL.green, 14), bx(15, 184, 290, 26, '体積は 2³ ＝ 8倍', C.blue, FILL.blue, 14))),
  },
  {
    note: '半球（はんきゅう）の表面積です。半径3cmの半球の表面は、丸い部分と、切ったところの平らな円の2つからできています。丸い部分は、球の表面積の半分です。',
    add: fresh(pg(ellPts(160, 96, 55, 55, 180, 360, 36), C.blue, FILL.blue), ell(160, 96, 55, 14, C.red, 'rgba(225,29,72,0.14)'), lb(160, 60, '丸い部分', 12, C.blue, 'middle', true), lb(160, 100, '切り口（円）', 11, C.red, 'middle', true), ...band(140, lb(160, 175, '表面 ＝ 丸い部分 ＋ 切り口の円', 13, C.ink, 'middle', true))),
  },
  {
    note: '❓ なぜ切り口の円も足すの？ 半球は、球を半分に切った立体です。切った面は、平らなふたとして立体の表面になります。丸い部分は 4π×9÷2＝18π、切り口は π×3²＝9π。合わせて 27π cm² です。',
    add: band(140, bx(15, 148, 290, 26, '丸い部分 ＝ 4π × 9 ÷ 2 ＝ 18π', C.blue, FILL.blue, 13), bx(15, 180, 290, 26, '切り口 ＝ π × 3² ＝ 9π', C.red, FILL.red, 13), lb(160, 224, '半球の表面積 ＝ 18π ＋ 9π ＝ 27π cm²', 14, C.purple, 'middle', true)),
  },
  {
    note: '❓ 半球の体積は？ 体積は、球の体積の半分です（切り口は関係ありません）。半径3cmなら (4/3)π×27÷2 ＝ 36π÷2 ＝ 18π cm³。表面積のように、切り口を足す必要はありません。',
    add: fresh(pg(ellPts(160, 80, 55, 55, 180, 360, 36), C.blue, FILL.blue), ell(160, 80, 55, 14, C.blue, FILL.blue), ...band(120, bx(15, 132, 290, 28, '半球の体積 ＝ 36π ÷ 2 ＝ 18π cm³', C.green, FILL.green, 14), lb(160, 190, '体積は半分にするだけ', 13, C.ink, 'middle', true), lb(160, 214, '表面積は、切り口の円を足す', 13, C.red, 'middle', true))),
  },
  {
    note: 'まとめ。球の体積 ＝ (4/3)πr³、表面積 ＝ 4πr²。半径が k 倍なら、表面積は k²倍、体積は k³倍。半球は、体積が半分、表面積は「球の半分＋切り口の円 πr²」です。',
    add: fresh(bx(20, 14, 280, 34, '体積 ＝ (4/3)πr³　表面積 ＝ 4πr²', C.blue, FILL.blue, 14), bx(20, 62, 280, 34, '半径 k倍 → 表面積 k²倍、体積 k³倍', C.green, FILL.green, 13), bx(20, 110, 280, 34, '半球の表面積 ＝ 2πr² ＋ πr² ＝ 3πr²', C.purple, FILL.purple, 13), ...band(154, lb(160, 182, '半球の体積 ＝ (2/3)πr³', 13, C.ink, 'middle', true), lb(160, 210, '切り口の円を足し忘れない', 13, C.red))),
  },
]);

// ────────────────────────────────────────────────
// 回転体
// ────────────────────────────────────────────────
const axisV = (x: number, y1 = 14, y2 = 124): DiagramElement => ln(x, y1, x, y2, C.red, true, 2);
const kaiten: DiagramFigure = show([
  {
    note: '回転体（かいてんたい）とは、平面の図形を、ある直線（軸）のまわりに1回転させてできる立体です。まず、軸にぴったりくっついた長方形を回してみます。',
    add: [axisV(70), lb(70, 10, '軸', 11, C.red, 'middle', true), pg([[70, 34], [110, 34], [110, 100], [70, 100]], C.blue, FILL.blue), ...band(140, lb(160, 175, '長方形を軸のまわりに1回転すると？', 13, C.ink, 'middle', true))],
  },
  {
    note: '❓ 何ができるの？ 長方形の全部の点が軸のまわりに円をえがくので、中がつまった円柱ができます。長方形のたて（軸に平行な辺）が高さ、横（軸に垂直な辺）が底面の半径になります。',
    add: [ar(125, 66, 190, 66, C.purple), ...cyl(240, 34, 100, 40, 10), ...band(140, bx(30, 155, 260, 32, '長方形 → 円柱', C.blue, FILL.blue, 16), lb(160, 210, '軸に接した長方形は、中がつまった円柱', 12, C.gray))],
  },
  {
    note: '直角三角形を、直角をはさむ1辺を軸にして回すと、円錐（えんすい）になります。軸にした辺が高さ、軸に垂直な辺が底面の半径、残った斜めの辺が母線（ぼせん）です。',
    add: fresh(axisV(70), lb(70, 10, '軸', 11, C.red, 'middle', true), pg([[70, 100], [110, 100], [70, 30]], C.green, FILL.green), ar(125, 66, 190, 66, C.purple), ...cone(240, 30, 100, 40, 10), ...band(140, bx(30, 155, 260, 32, '直角三角形 → 円錐', C.green, FILL.green, 16), lb(160, 210, '斜辺が回って、側面（母線）になる', 12, C.gray))),
  },
  {
    note: '半円（はんえん）を、直径を軸にして回すと球になります。半円のふちの弧が1周して、ちょうど球面をえがくからです。球の半径は、半円の半径のままです。',
    add: fresh(axisV(70), lb(70, 10, '軸', 11, C.red, 'middle', true), pg(ellPts(70, 66, 44, 44, -90, 90, 30), C.purple, FILL.purple), ar(125, 66, 190, 66, C.purple), ...ball(240, 66, 44, C.purple, FILL.purple), ...band(140, bx(30, 155, 260, 32, '半円 → 球', C.purple, FILL.purple, 16), lb(160, 210, '直径を軸にしたときだけ球になる', 12, C.gray))),
  },
  {
    note: '❓ なぜ、そんな立体になるの？ 軸に垂直な辺は、軸を中心にぐるっと回って円（底面）をえがきます。軸に平行な辺は、まっすぐ進んだまま回るので筒（側面）になります。辺と軸の位置関係で決まります。',
    add: fresh(axisV(70), lb(70, 10, '軸', 11, C.red, 'middle', true), pg([[70, 34], [110, 34], [110, 100], [70, 100]], C.gray, FILL.warm), ln(70, 100, 110, 100, C.red, false, 3.5), ln(110, 34, 110, 100, C.green, false, 3.5), ar(125, 66, 190, 66, C.purple), ...cyl(240, 34, 100, 40, 10), ln(240, 34, 280, 34, C.red, false, 3.5), ln(280, 34, 280, 100, C.green, false, 3.5), lb(90, 116, '垂直な辺', 10, C.red, 'middle', true), lb(116, 92, '平行な辺', 10, C.green, 'start', true), ...band(140, bx(15, 150, 290, 28, '軸に垂直な辺 → 円（底面の半径）', C.red, FILL.red, 13), bx(15, 184, 290, 28, '軸に平行な辺 → 筒（高さ）', C.green, FILL.green, 13))),
  },
  {
    note: '使ってみましょう。縦4cm、横3cmの長方形を、横の辺を軸として1回転させます。軸は横の辺なので、軸に垂直な縦の辺4cmが半径、軸に平行な横の辺3cmが高さになります。',
    add: fresh(ln(40, 110, 160, 110, C.red, true, 2), lb(150, 122, '軸（横の辺）', 11, C.red, 'end', true), pg([[60, 30], [120, 30], [120, 110], [60, 110]], C.blue, FILL.blue), lb(90, 74, '長方形', 11, C.gray, 'middle', true), lb(52, 70, '縦 4', 12, C.red, 'end', true), lb(90, 22, '横 3', 12, C.green, 'middle', true), bx(180, 30, 130, 34, '半径 ＝ 4\n（軸に垂直な辺）', C.red, FILL.red, 11), bx(180, 76, 130, 34, '高さ ＝ 3\n（軸に平行な辺）', C.green, FILL.green, 11), ...band(140, lb(160, 175, '円柱ができる', 14, C.blue, 'middle', true))),
  },
  {
    note: '体積は 底面積×高さ です。底面積は π × 4² ＝ 16π、高さは3なので、16π × 3 ＝ 48π cm³。半径と高さを逆にして π×3²×4＝36π としてしまう、うっかりに注意します。',
    add: band(140, bx(20, 148, 280, 28, '底面積 ＝ π × 4² ＝ 16π', C.blue, FILL.blue, 14), bx(20, 184, 280, 32, '体積 ＝ 16π × 3 ＝ 48π cm³', C.green, FILL.green, 15)),
  },
  {
    note: '❓ 同じ直角三角形でも、軸をかえると？ 直角をはさむ辺が3cmと4cmの直角三角形。4cmの辺を軸にすると、半径3・高さ4の円錐で (1/3)×π×9×4 ＝ 12π。3cmの辺を軸にすると、半径4・高さ3の円錐で (1/3)×π×16×3 ＝ 16π。',
    add: fresh(axisV(50, 20, 118), pg([[50, 110], [110, 110], [50, 30]], C.green, FILL.green), lb(50, 12, '軸(4)', 10, C.red, 'middle', true), lb(80, 124, '半径 3', 11, C.blue, 'middle', true), ln(170, 110, 260, 110, C.red, true, 2), pg([[170, 110], [230, 110], [170, 30]], C.purple, FILL.purple), lb(262, 106, '軸(3)', 10, C.red, 'start', true), lb(200, 124, '高さ 3', 11, C.green, 'middle', true), lb(164, 70, '半径 4', 11, C.blue, 'end', true), ...band(140, bx(10, 150, 145, 28, '12π cm³', C.green, FILL.green, 14), bx(165, 150, 145, 28, '16π cm³', C.purple, FILL.purple, 14), lb(160, 206, '同じ三角形でも、軸で体積がちがう', 13, C.red, 'middle', true))),
  },
  {
    note: '❓ 軸から離れた図形は？ 軸から2cm離れた所から5cmの所までの、高さ4cmの長方形を回すと、軸のまわりにすき間があるので、中が空っぽの筒（中空の円柱）になります。',
    add: fresh(axisV(60), lb(60, 10, '軸', 11, C.red, 'middle', true), ln(60, 108, 80, 108, C.gray, false, 1.4), lb(70, 120, '2', 11, C.gray, 'middle', true), pg([[80, 40], [110, 40], [110, 80], [80, 80]], C.blue, FILL.blue), lb(95, 100, '3', 11, C.blue, 'middle', true), ar(130, 60, 170, 60, C.purple), ...cyl(240, 40, 80, 50, 12), ell(240, 40, 20, 5, C.gray, FILL.gray), ...band(140, lb(160, 165, '軸から離れている → 中が空っぽ', 13, C.red, 'middle', true), lb(160, 195, '軸から2cm離れて、5cmまで（高さ4cm）', 12, C.gray))),
  },
  {
    note: '❓ 体積はどう求めるの？ 「外側の大きな円柱」から「中の空洞の円柱」を引きます。外は半径5・高さ4で 25π×4＝100π。中は半径2・高さ4で 4π×4＝16π。差は 100π − 16π ＝ 84π cm³ です。',
    add: band(140, bx(15, 148, 290, 26, '外側 ＝ π × 5² × 4 ＝ 100π', C.blue, FILL.blue, 13), bx(15, 180, 290, 26, '空洞 ＝ π × 2² × 4 ＝ 16π', C.gray, FILL.gray, 13), lb(160, 224, '体積 ＝ 100π − 16π ＝ 84π cm³', 14, C.green, 'middle', true)),
  },
  {
    note: '半円を直径のまわりに回してできる球の体積。半円の半径が3cmなら、球の半径も3cm。(4/3)π×3³ ＝ (4/3)π×27 ＝ 36π cm³ です。軸が直径でないと球にならないので、軸の位置を必ず確かめます。',
    add: fresh(axisV(70), pg(ellPts(70, 66, 44, 44, -90, 90, 30), C.purple, FILL.purple), lb(94, 70, '3', 12, C.purple, 'start', true), ar(125, 66, 190, 66, C.purple), ...ball(240, 66, 44, C.purple, FILL.purple), ...band(140, bx(20, 152, 280, 30, '(4/3) × π × 3³ ＝ 36π cm³', C.green, FILL.green, 15), lb(160, 210, '軸が直径のときだけ、球', 12, C.gray))),
  },
  {
    note: 'まとめ。①回転の軸を確かめる ②軸に接していれば中がつまった立体、離れていれば中空（外側−内側）③できた立体の公式で体積・表面積を求める。軸に垂直な辺が半径、平行な辺が高さです。',
    add: fresh(bx(20, 14, 280, 34, '① 回転の軸を確かめる', C.red, FILL.red, 14), bx(20, 62, 280, 34, '② 立体を見きわめる（離れていれば外−内）', C.blue, FILL.blue, 12), bx(20, 110, 280, 34, '③ 公式で体積・表面積を求める', C.green, FILL.green, 14), ...band(154, lb(160, 182, '垂直な辺 ＝ 半径、平行な辺 ＝ 高さ', 13, C.ink, 'middle', true), lb(160, 210, 'まず図にかいてから公式を選ぶ', 13, C.gray))),
  },
]);

// ────────────────────────────────────────────────
// 投影図と立体の見方
// ────────────────────────────────────────────────
const vlabels = (f: string, p: string): DiagramElement[] => [lb(118, 36, '立面図', 12, C.blue, 'end', true), lb(118, 102, '平面図', 12, C.green, 'end', true), lb(118, 24, '（正面から）', 9, C.gray, 'end'), lb(118, 116, '（真上から）', 9, C.gray, 'end'), ...(f ? [lb(200, 36, f, 12, C.blue, 'start', true)] : []), ...(p ? [lb(200, 102, p, 12, C.green, 'start', true)] : [])];
const frontRect = () => bx(130, 14, 50, 44, undefined, C.blue, FILL.blue);
const frontTri = () => pg([[155, 14], [130, 58], [180, 58]], C.blue, FILL.blue);
const planCircle = () => ci(155, 100, 25, undefined, C.green, FILL.green);
const planSquare = () => bx(130, 76, 50, 50, undefined, C.green, FILL.green);
const toueiZu: DiagramFigure = show([
  {
    note: '立体を、平面の図で表す方法が投影図（とうえいず）です。正面から見た図を立面図（りつめんず）、真上から見た図を平面図（へいめんず）といい、立面図を上、平面図を下に並べてかきます。',
    add: [...cyl(52, 40, 98, 26, 8), lb(52, 122, '円柱', 11, C.gray, 'middle', true), frontRect(), planCircle(), ...vlabels('', ''), ...band(140, lb(160, 175, '立面図 ＝ 正面　／　平面図 ＝ 真上', 13, C.ink, 'middle', true))],
  },
  {
    note: '❓ 立面図だけでは、立体は決まらないの？ 立面図が長方形でも、円柱、四角柱、三角柱のどれもありえます。正面から見ただけでは、奥行きの形がわからないからです。',
    add: fresh(frontRect(), lb(155, 74, '？', 16, C.red, 'middle', true), ...vlabels('', ''), lb(40, 30, '立面図が', 10, C.blue, 'middle'), lb(40, 43, '長方形なら…', 10, C.blue, 'middle'), ...cyl(52, 92, 124, 16, 5), ...box3d(140, 100, 22, 24, 8, 6), pg([[218, 124], [242, 124], [230, 106]], C.blue, FILL.blue), pg([[228, 118], [252, 118], [240, 100]], C.blue, 'rgba(224,242,254,0.5)'), ln(218, 124, 228, 118, C.blue), ln(242, 124, 252, 118, C.blue), ln(230, 106, 240, 100, C.blue), ...band(140, lb(160, 170, '円柱？ 四角柱？ 三角柱？', 14, C.red, 'middle', true), lb(160, 200, '平面図で、底面の形を確かめる', 12, C.gray))),
  },
  {
    note: '円柱です。立面図は長方形、平面図は円。❓ なぜ？ 真上から見ると、底面の円がそのまま見えます。正面から見ると、側面が「直径の幅・高さの長さ」の長方形に見えるからです。',
    add: fresh(frontRect(), planCircle(), ...vlabels('長方形（側面）', '円（底面）'), ...band(140, bx(30, 155, 260, 32, '円柱 ＝ 長方形 ＋ 円', C.blue, FILL.blue, 16), lb(160, 210, '底面は円、側面は長方形', 12, C.gray))),
  },
  {
    note: '円錐です。立面図は三角形、平面図は円。❓ なぜ三角形？ 側面が頂点に向かってすぼまっていくので、正面から見ると、頂点のある三角形になります。平面図の真ん中の点が頂点です。',
    add: fresh(frontTri(), planCircle(), dot(155, 100, C.red), ...vlabels('三角形', '円（中心に頂点）'), ...band(140, bx(30, 155, 260, 32, '円錐 ＝ 三角形 ＋ 円', C.green, FILL.green, 16), lb(160, 210, '頂点は、平面図では中心の点', 12, C.gray))),
  },
  {
    note: '球です。立面図も平面図も円。❓ なぜ？ 球は、どの方向から見ても同じ丸い形に見えるからです。ほかの立体は、方向をかえると形がかわります。',
    add: fresh(ci(155, 36, 22, undefined, C.purple, FILL.purple), ci(155, 100, 22, undefined, C.purple, FILL.purple), ...vlabels('円', '円'), ...band(140, bx(30, 155, 260, 32, '球 ＝ 円 ＋ 円', C.purple, FILL.purple, 16), lb(160, 210, 'どこから見ても円', 12, C.gray))),
  },
  {
    note: '四角柱です。立面図は長方形、平面図は正方形（または長方形）。❓ なぜ？ 底面が四角形なので、真上から見るとその四角形が見えます。側面は、横から見れば長方形です。',
    add: fresh(frontRect(), planSquare(), ...vlabels('長方形', '正方形'), ...band(140, bx(30, 155, 260, 32, '四角柱 ＝ 長方形 ＋ 四角形', C.blue, FILL.blue, 15), lb(160, 210, '平面図の形が、底面の形', 12, C.gray))),
  },
  {
    note: '正四角錐です。立面図は三角形、平面図は正方形で、中の対角線に見える線は、頂点から四すみへの辺です。❓ なぜ実線？ 真上から見ると、これらの辺はすべて見えているからです。',
    add: fresh(frontTri(), planSquare(), ln(130, 76, 180, 126, C.green, false, 1.6), ln(180, 76, 130, 126, C.green, false, 1.6), ...vlabels('三角形', '正方形＋対角線'), ...band(140, bx(30, 155, 260, 32, '四角錐 ＝ 三角形 ＋ 対角線つき四角形', C.green, FILL.green, 13), lb(160, 210, '頂点から四すみへの辺が見える', 12, C.gray))),
  },
  {
    note: '三角柱です。立面図は長方形、平面図は三角形。❓ なぜ？ 底面が三角形なので、真上から見ると三角形が見えます。円柱・四角柱との区別は、平面図でつきます。',
    add: fresh(frontRect(), pg([[155, 78], [130, 124], [180, 124]], C.green, FILL.green), ...vlabels('長方形', '三角形'), ...band(140, bx(30, 155, 260, 32, '三角柱 ＝ 長方形 ＋ 三角形', C.blue, FILL.blue, 15), lb(160, 210, '立面図が同じでも、平面図でちがう', 12, C.gray))),
  },
  {
    note: '❓ 点線は、何を表すの？ 立体の中にかくれて見えない辺は、点線でかきます。たとえば、筒状のパイプ（中が空洞の円柱）は、正面から見ると、内側のふちが外側にかくれるので、点線の縦線が2本入ります。',
    add: fresh(frontRect(), ln(143, 14, 143, 58, C.red, true, 1.8), ln(167, 14, 167, 58, C.red, true, 1.8), ci(155, 100, 25, undefined, C.green, FILL.green), ci(155, 100, 12, undefined, C.green, FILL.warm), ...vlabels('点線＝かくれた辺', '円が2重'), ...band(140, bx(30, 155, 260, 32, '見える辺は実線、見えない辺は点線', C.red, FILL.red, 13), lb(160, 210, '内側の空洞のふちが、点線になる', 12, C.gray))),
  },
  {
    note: '実線と点線を守るのは、伝えるためです。点線を書かないと、中身がつまった円柱と区別できません。逆に、見えている辺を点線にしたり、見えない辺を実線にすると、別の立体に読めてしまいます。',
    add: fresh(bx(20, 16, 130, 40, '中がつまった円柱\n点線なし', C.blue, FILL.blue, 11), bx(170, 16, 130, 40, 'パイプ\n点線あり', C.red, FILL.red, 11), lb(160, 36, '≠', 20, C.purple, 'middle', true), ...band(70, lb(160, 100, '立面図が同じ長方形でも', 13, C.ink, 'middle', true), lb(160, 128, '点線のあるなしで、立体がちがう', 13, C.red, 'middle', true), lb(160, 170, '点線の位置も、大事な手がかり', 12, C.gray))),
  },
  {
    note: '2つの図の組み合わせで立体が決まります。立面図が長方形×平面図が円 → 円柱、三角形×円 → 円錐、円×円 → 球、長方形×長方形 → 直方体、三角形×正方形 → 四角錐です。',
    add: fresh(bx(15, 10, 290, 26, '長方形 × 円　→　円柱', C.blue, FILL.blue, 13), bx(15, 42, 290, 26, '三角形 × 円　→　円錐', C.green, FILL.green, 13), bx(15, 74, 290, 26, '円 × 円　→　球', C.purple, FILL.purple, 13), bx(15, 106, 290, 26, '長方形 × 長方形　→　四角柱（直方体）', C.blue, FILL.blue, 12), ...band(140, lb(160, 165, '三角形 × 四角形　→　四角錐', 13, C.green, 'middle', true), lb(160, 195, '長方形 × 三角形　→　三角柱', 13, C.blue, 'middle', true))),
  },
  {
    note: 'まとめ。①平面図（真上）で底面の形をつかむ ②立面図（正面）で高さと側面の形をつかむ ③2つを合わせて立体を決める ④見えない辺は点線。立面図が上、平面図が下です。',
    add: fresh(bx(20, 14, 280, 34, '① 平面図（真上）→ 底面の形', C.green, FILL.green, 14), bx(20, 62, 280, 34, '② 立面図（正面）→ 高さ・側面の形', C.blue, FILL.blue, 14), bx(20, 110, 280, 34, '③ 2つを合わせて立体を決める', C.purple, FILL.purple, 14), ...band(154, lb(160, 182, '見えない辺は点線でかく', 13, C.red, 'middle', true), lb(160, 210, '立面図 ＝ 上、平面図 ＝ 下', 13, C.gray))),
  },
]);

// ────────────────────────────────────────────────
// 立体の切断
// ────────────────────────────────────────────────
const kA: [number, number] = [114, 115];
const kB: [number, number] = [179, 115];
const kC: [number, number] = [207, 91];
const kD: [number, number] = [142, 91];
const kE: [number, number] = [114, 50];
const kF: [number, number] = [179, 50];
const kG: [number, number] = [207, 26];
const kH: [number, number] = [142, 26];
const cubeParts = (): DiagramElement[] => [
  pg([kA, kB, kF, kE], C.ink, FILL.warm),
  pg([kB, kC, kG, kF], C.ink, FILL.gray),
  pg([kE, kF, kG, kH], C.ink, FILL.yellow),
  ln(kA[0], kA[1], kD[0], kD[1], C.gray, true, 1.4),
  ln(kD[0], kD[1], kC[0], kC[1], C.gray, true, 1.4),
  ln(kD[0], kD[1], kH[0], kH[1], C.gray, true, 1.4),
];
const mid = (p: [number, number], q: [number, number]): [number, number] => [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
const m1 = mid(kF, kE);
const m2 = mid(kF, kB);
const m3 = mid(kF, kG);
const kv = (p: [number, number], t: string, dx: number, dy: number, c: string = C.ink): DiagramElement[] => [dot(p[0], p[1], c), lb(p[0] + dx, p[1] + dy, t, 11, c, dx < 0 ? 'end' : 'start', true)];
const setsudan: DiagramFigure = show([
  {
    note: '立方体を、1つの平面で切ったときの、切り口の形を考えます。切り口をかくときの決まりは、たった2つだけです。①同じ面の上にある2点は直線で結べる ②平行な面にできる切り口の線どうしは平行になる。',
    add: [...cubeParts(), ...band(140, bx(15, 148, 290, 28, '① 同じ面の2点は、直線で結ぶ', C.blue, FILL.blue, 13), bx(15, 182, 290, 28, '② 平行な面の切り口は、平行', C.green, FILL.green, 13))],
  },
  {
    note: '1つ目の例。頂点 F に集まる3つの辺の中点 P、Q、R を通る平面で切ります。P（辺FEの中点）と Q（辺FBの中点）は、どちらも前の面の上にあります。❓ なぜ結べるの？ 平らな面の上の2点を結ぶ線は、面からはみ出さないからです。',
    add: fresh(...cubeParts(), ...kv(m1, 'P', -4, -6, C.red), ...kv(m2, 'Q', 6, 4, C.red), ...kv(m3, 'R', 6, -2, C.red), ln(m1[0], m1[1], m2[0], m2[1], C.red, false, 3), ...band(140, lb(160, 170, 'P と Q は前の面の上 → 結べる', 13, C.red, 'middle', true))),
  },
  {
    note: '同じように、P と R は上の面の上、Q と R は右の面の上にあります。どの2点も同じ面の上にあるので、3本とも直線で結べます。切り口は三角形 PQR になります。',
    add: [ln(m1[0], m1[1], m3[0], m3[1], C.red, false, 3), ln(m2[0], m2[1], m3[0], m3[1], C.red, false, 3), pg([m1, m2, m3], C.red, 'rgba(225,29,72,0.25)'), ...band(140, bx(30, 155, 260, 32, 'PQ・PR・QR の3本 → 三角形', C.red, FILL.red, 15), lb(160, 210, '3つの面を通るので、切り口は三角形', 12, C.gray))],
  },
  {
    note: '❓ この三角形は、どんな三角形？ 辺 PQ は、1辺 a の立方体の前の面で、直角をはさむ2辺が a/2 の直角二等辺三角形の斜辺です。PR、QR も同じなので、3辺の長さは全部 (a/2)×√2 で等しく、正三角形です。',
    add: band(140, bx(15, 148, 290, 26, 'PQ ＝ PR ＝ QR ＝ (a/2)√2', C.red, FILL.red, 14), bx(15, 180, 290, 30, '3辺がすべて等しい → 正三角形', C.green, FILL.green, 15), lb(160, 226, '各辺は、面の直角二等辺三角形の斜辺', 11, C.gray)),
  },
  {
    note: '2つ目の例。3点 A、C、G を通る平面で切ります。A と C は下の面の上にあるので結べます。C と G は右うしろの面の上にあり、辺 CG そのものなので、これも結べます。',
    add: fresh(...cubeParts(), ...kv(kA, 'A', -4, 4, C.red), ...kv(kC, 'C', 6, 4, C.red), ...kv(kG, 'G', 6, -2, C.red), ln(kA[0], kA[1], kC[0], kC[1], C.red, false, 3), ln(kC[0], kC[1], kG[0], kG[1], C.red, false, 3), ...band(140, lb(160, 170, 'A と C（下の面）、C と G（辺）を結ぶ', 13, C.red, 'middle', true))),
  },
  {
    note: '❓ G と A は、同じ面の上にないよ？ ここで2つ目の決まりを使います。上の面と下の面は平行です。下の面の切り口は AC なので、上の面の切り口は AC に平行で、G を通る線になります。それは G から E へ引いた線です。',
    add: [ln(kG[0], kG[1], kE[0], kE[1], C.red, false, 3), ...kv(kE, 'E', -4, -4, C.red), ...band(140, bx(15, 152, 290, 30, '上の面と下の面は平行 → GE と AC も平行', C.green, FILL.green, 14), lb(160, 208, '下の面の切り口 AC に平行に、G を通る線', 12, C.gray))],
  },
  {
    note: '最後に、E と A は、左の前の面（辺 AE）の上にあるので結べます。切り口は A→C→G→E の四角形です。向かい合う辺が平行（AC と EG、AE と CG）で、AE は面に垂直なので、長方形になります。',
    add: [ln(kE[0], kE[1], kA[0], kA[1], C.red, false, 3), pg([kA, kC, kG, kE], C.red, 'rgba(225,29,72,0.22)'), ...band(140, bx(30, 155, 260, 32, '切り口 ＝ 四角形 ACGE（長方形）', C.red, FILL.red, 14), lb(160, 210, '4つの面を通るので、四角形', 12, C.gray))],
  },
  {
    note: '❓ なぜ、平行な面の切り口は平行になるの？ 平行な2つの面を、別の平面で切ると、2本の切り口の線は同じ平面の上にあります。もしそれらが交われば、もとの平行な2つの面も交わることになり、矛盾するからです。',
    add: fresh(...cubeParts(), ln(kA[0], kA[1], kC[0], kC[1], C.red, false, 3), ln(kE[0], kE[1], kG[0], kG[1], C.red, false, 3), ...band(140, bx(15, 148, 290, 28, '平行な2面 ＋ 1つの平面 → 交わる線は平行', C.green, FILL.green, 13), lb(160, 200, '交われば、もとの2面が交わってしまう', 12, C.gray), lb(160, 220, 'それは平行という条件に反する', 12, C.gray))),
  },
  {
    note: '❓ 切り口は、最大で何角形？ 立方体の面は6つで、1つの面の上にできる切り口の辺は1本まで（図の番号は、六角形の6本の辺がのっている、ちがう面です）。だから切り口の辺は最大でも6本、つまり六角形までです。七角形はつくれません。',
    add: fresh(pg(ellPts(160, 72, 44, 44, 0, 360, 6).slice(0, 6), C.red, 'rgba(225,29,72,0.16)'), ...[0, 1, 2, 3, 4, 5].map((i) => ci(160 + 58 * Math.cos(((30 + 60 * i) * Math.PI) / 180), 72 - 58 * Math.sin(((30 + 60 * i) * Math.PI) / 180), 9, String(i + 1), C.blue, FILL.blue, 10)), ...band(140, bx(15, 148, 290, 28, '面は6つ ＋ 1面に辺は1本 → 最大6本', C.red, FILL.red, 13), lb(160, 200, '切り口は、六角形までしかできない', 13, C.ink, 'middle', true), lb(160, 224, '七角形は、できない', 12, C.gray))),
  },
  {
    note: '切り口の辺の数は、平面が通る面の数と同じです。3つの面を通れば三角形、4つなら四角形、5つなら五角形、6つなら六角形。切り口をかいたら、通った面を数えて、形を確かめましょう。',
    add: fresh(bx(20, 12, 280, 30, '3つの面を通る → 三角形', C.blue, FILL.blue, 14), bx(20, 50, 280, 30, '4つの面を通る → 四角形', C.green, FILL.green, 14), bx(20, 88, 280, 30, '5つの面を通る → 五角形', C.purple, FILL.purple, 14), ...band(126, bx(20, 132, 280, 30, '6つの面を通る → 六角形（最大）', C.red, FILL.red, 14), lb(160, 190, '面の数 ＝ 切り口の辺の数', 13, C.ink, 'middle', true), lb(160, 216, '正三角形・長方形・正六角形も、できる', 12, C.gray))),
  },
  {
    note: 'まとめ。①同じ面の上にある2点を直線で結ぶ ②結べない点は、平行な面の切り口が平行になることを使う ③通った面を数えて、切り口の形を確かめる。立方体の切り口は六角形が最大です。',
    add: fresh(bx(20, 14, 280, 34, '① 同じ面の2点を直線で結ぶ', C.blue, FILL.blue, 14), bx(20, 62, 280, 34, '② 結べない点は、平行を使う', C.green, FILL.green, 14), bx(20, 110, 280, 34, '③ 通った面を数えて形を確かめる', C.purple, FILL.purple, 14), ...band(154, lb(160, 182, '立方体の切り口は、六角形が最大', 13, C.red, 'middle', true), lb(160, 210, '3点で平面は1つに決まる', 13, C.gray))),
  },
]);

export const DIAGRAMS_KOKO_SUGAKU_OLD_F: Record<string, DiagramFigure> = {
  '三平方の定理と逆': sanpeiGyaku,
  '特別な直角三角形の辺の比': tokubetsu,
  '座標平面上の2点間の距離': kyori,
  '三平方の定理と空間図形': kukanBox,
  '円と三平方（弦の長さ・接線）': enSanpei,
  '立体の最短距離（展開図）': saitan,
  '角柱・円柱の体積と表面積': chuu,
  '角錐・円錐の体積と表面積': sen,
  '球の体積と表面積': kyuu,
  '回転体': kaiten,
  '投影図と立体の見方': toueiZu,
  '立体の切断': setsudan,
};
