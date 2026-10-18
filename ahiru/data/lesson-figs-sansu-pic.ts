// 算数の教科書図解のうち、グラフや格子では場面が伝わらなかったものを、絵（人・箱・線分図）で描き直したもの。
// lesson-figs-sansu.ts の同じキーを上書きする。座標は 320×240 の内部座標。
import type { Figure } from './figures';
import { show, bx, lb, ln, ar, ci, pg, C, FILL, type Slide } from './diagram-kit';
import type { DiagramElement } from './figures';

/** 正方形のふち（外周）に人（円）を並べた部品。n＝1辺の人数、gx/gy＝左上の中心、step＝間隔。 */
function ring(n: number, gx: number, gy: number, step: number, r: number, color: string, fill: string, inset = 0): DiagramElement[] {
  const out: DiagramElement[] = [];
  const m = n - 1;
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
    if (i !== 0 && i !== m && j !== 0 && j !== m) continue;
    out.push(ci(gx + (i + inset) * step, gy + (j + inset) * step, r, undefined, color, fill));
  }
  return out;
}

export const lessonFigsSansuPic: Record<string, Figure> = {
  // 中空方陣（1辺4人）
  lf_sansu_60: show(
    [
      { note: '問 真ん中があいた正方形に、1辺4人ずつ人がならんでいます。全部で何人でしょうか。答 真ん中は空なので、まわりに立っている人だけを数えます。',
        add: [...ring(4, 52, 52, 40, 12, C.blue, FILL.blue), lb(112, 118, '空', 16, C.gray, 'middle', true)] },
      { note: '問 1辺4人だから、4×4＝16人でよいでしょうか。答 まちがいです。四すみの赤い人は、2つの辺で2回ずつ数えてしまいます。',
        add: [ci(52, 52, 12, undefined, C.red, FILL.red), ci(172, 52, 12, undefined, C.red, FILL.red), ci(52, 172, 12, undefined, C.red, FILL.red), ci(172, 172, 12, undefined, C.red, FILL.red),
          lb(250, 100, '4×4＝16人', 14, C.red, 'middle', true), lb(250, 122, '✕ 四すみがダブる', 12, C.red, 'middle', true)] },
      { note: '問 四すみを1回ずつ数えるには、どうすればよいでしょうか。答 1辺から1人ひいた3人を、4つの辺ぶん数えます。四すみは、となりの辺の人として数えられます。',
        add: [lb(250, 158, '3人 × 4辺', 14, C.main, 'middle', true), lb(250, 180, '＝ 12人', 15, C.main, 'middle', true)] },
      { note: '問 いつでも使える式にすると、どうなるでしょうか。答 まわりの人数＝（1辺の人数−1）×4です。1辺が4人なら、（4−1）×4＝12人です。',
        add: [lb(160, 222, 'まわりの人数 ＝（1辺−1）×4', 14, C.red, 'middle', true)] },
      { note: '問 1辺が10人なら、まわりは何人でしょうか。答 （10−1）×4＝36人です。1辺の人数がちがっても、同じ式で求められます。' },
    ],
    '1辺4個の中空の正方形（方陣）の周りの人数＝(4−1)×4＝12人。1辺n個なら周は(n−1)×4人',
  ),

  // 二重の中空方陣（外が1辺10人、内が1辺8人）
  lf_sansu_95: show(
    [
      { note: '問 いちばん外側の1重目は、1辺10人の中空方陣です。まず絵に描いてみましょう。答 青い円が、外側のまわりに立つ人です。',
        add: [...ring(10, 22, 40, 18, 7, C.blue, FILL.blue), lb(262, 62, '1重目', 14, C.blue, 'middle', true), lb(262, 82, '1辺10人', 13, C.blue, 'middle', true)] },
      { note: '問 2重目は、1重目より何人少ない辺でしょうか。答 内側にもう1周あるので、左右の両はしが1人ずつ減り、1辺は10−2＝8人になります。',
        add: [...ring(8, 22, 40, 18, 7, C.green, FILL.green, 1), lb(262, 122, '2重目', 14, C.green, 'middle', true), lb(262, 142, '1辺8人', 13, C.green, 'middle', true)] },
      { note: '問 1重目の人数は、何人でしょうか。答 （10−1）×4＝36人です。四すみをダブらせないよう、1辺から1人ひいて4辺ぶん数えます。',
        add: [lb(262, 178, '1重目', 12, C.blue, 'middle', true), lb(262, 196, '(10−1)×4', 12, C.blue, 'middle'), lb(262, 214, '＝36人', 13, C.blue, 'middle', true)] },
      { note: '問 2重目の人数は、何人でしょうか。答 （8−1）×4＝28人です。1重目と同じ式に、1辺の8人を入れます。',
        add: [lb(8, 232, '2重目 (8−1)×4＝28人', 12, C.green, 'start', true)] },
      { note: '問 全部で何人でしょうか。答 36＋28＝64人です。1重ずつ求めてたせば、何重の方陣でも数えられます。',
        add: [lb(312, 232, '合計 36＋28＝64人', 13, C.red, 'end', true)] },
    ],
    '外側の1重目（1辺10人）と内側の2重目（1辺8人、外側より2人少ない）。1重目＝(10−1)×4＝36人、2重目＝(8−1)×4＝28人',
  ),

  // 数表（九九の表）
  lf_sansu_96: (() => {
    const x0 = 66, y0 = 34, cw = 50, ch = 38;
    const cell = (r: number, c: number, text: string, color: string, fill: string): DiagramElement => bx(x0 + c * cw, y0 + r * ch, cw, ch, text, color, fill, 15);
    const rows = (r: number, mark?: number): DiagramElement[] => [1, 2, 3, 4].map((c) => cell(r - 1, c - 1, mark === c ? '?' : String(r * c), mark === c ? C.red : C.ink, mark === c ? FILL.red : FILL.warm));
    return show(
      [
        { note: '問 この表は、どんなきまりでできているでしょうか。まず、たてと横にならんだ数を見ましょう。答 たては1・2・3・4行目、横は1・2・3・4列目をあらわしています。',
          add: [1, 2, 3, 4].flatMap((k) => [lb(x0 - 18, y0 + (k - 1) * ch + 24, `${k}行`, 12, C.blue, 'middle', true), lb(x0 + (k - 1) * cw + cw / 2, y0 - 8, `${k}列`, 12, C.green, 'middle', true)]) },
        { note: '問 1行目は、どんな数がならんでいるでしょうか。答 1、2、3、4です。1×列の数になっています。', add: rows(1) },
        { note: '問 2行目は、どうなっているでしょうか。答 2、4、6、8です。2×列の数になっています。', add: rows(2) },
        { note: '問 3行目はどうでしょうか。答 3、6、9、12です。3×列の数で、行の数ずつ増えています。', add: rows(3) },
        { note: '問 4行目の3列目（？）に入る数は、いくつでしょうか。答 4行目は4ずつ増える数です。4、8、？、16ですね。', add: rows(4, 3) },
        { note: '問 ？は、どう求めればよいでしょうか。答 4行目3列目なので、4×3＝12です。表の数は、いつも「行の数×列の数」になっています。',
          add: [lb(160, 232, '？ ＝ 4（行）× 3（列）＝ 12', 14, C.red, 'middle', true)] },
      ],
      '数表は「行の数×列の数」になっている（九九の表と同じ規則）。4行目3列目＝4×3＝12',
    );
  })(),

  // 階差数列
  lf_sansu_97: (() => {
    const vals = [1, 2, 4, 7, 11, 16];
    const bw = 38, gap = 14, x0 = 14, y = 52;
    const boxAt = (i: number, text: string, color = C.blue, fill: string = FILL.blue) => bx(x0 + i * (bw + gap), y, bw, 40, text, color, fill, 16);
    return show(
      [
        { note: '問 この数のならびには、どんなきまりがあるでしょうか。答 1、2、4、7、11、16と、だんだん増えています。となりどうしの差を調べてみましょう。',
          add: vals.map((v, i) => boxAt(i, String(v))) },
        { note: '問 となりどうしの差（階差）は、いくつでしょうか。答 +1、+2、+3、+4、+5です。差が1ずつ大きくなっています。',
          add: vals.slice(0, 5).flatMap((_, i) => [lb(x0 + i * (bw + gap) + bw + gap / 2, y + 62, `+${i + 1}`, 14, C.red, 'middle', true), ar(x0 + i * (bw + gap) + bw - 2, y + 44, x0 + (i + 1) * (bw + gap) + 2, y + 44, C.red)]) },
        { note: '問 7番目の数を求めるには、どの差を使えばよいでしょうか。答 次の差は+6です。差が1ずつ増えるきまりが、ずっと続くからです。',
          add: [lb(160, 144, '次の差は ＋6', 15, C.red, 'middle', true)] },
        { note: '問 7番目の数は、いくつでしょうか。答 6番目の16に+6をたして、16＋6＝22です。',
          add: [bx(122, 168, 76, 40, '22', C.green, FILL.green, 20), ar(160, 152, 160, 166, C.green), lb(160, 228, '16 ＋ 6 ＝ 22', 14, C.green, 'middle', true)] },
      ],
      '数列1,2,4,7,11,16,…の階差は1,2,3,4,5と増えていく等差数列。第7項＝16＋6＝22',
    );
  })(),

  // 格子点（直角をはさむ2辺が4と3の直角三角形）
  lf_sansu_61: (() => {
    const gx = 40, gy = 190, st = 40;
    const P = (i: number, j: number): [number, number] => [gx + i * st, gy - j * st];
    const dot = (i: number, j: number, color: string, fill: string, r = 7): DiagramElement => ci(P(i, j)[0], P(i, j)[1], r, undefined, color, fill);
    const all: DiagramElement[] = [];
    for (let i = 0; i <= 4; i++) for (let j = 0; j <= 3; j++) all.push(dot(i, j, C.gray, FILL.gray, 5));
    const edge: [number, number][] = [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [0, 1], [0, 2], [0, 3]];
    const inner: [number, number][] = [[1, 1], [2, 1], [1, 2]];
    return show(
      [
        { note: '問 たて3、横4の直角三角形のなかに、格子点（たてと横の線が交わる点）は何こあるでしょうか。答 まず、点のならびと三角形を描いて、1つずつ数えます。',
          add: [pg([P(0, 0), P(4, 0), P(0, 3)], C.main, FILL.warm), ...all] },
        { note: '問 三角形のふちの上にある点は、何こでしょうか。答 横の辺に5こ、たての辺に（角の点をのぞく）あと3こで、あわせて8こです。ななめの辺の上には、両はし以外に点はありません。',
          add: [...edge.map(([i, j]) => dot(i, j, C.blue, FILL.blue, 8)), lb(262, 120, 'ふちの上', 13, C.blue, 'middle', true), lb(262, 140, '8こ', 16, C.blue, 'middle', true)] },
        { note: '問 三角形の内側にある点は、何こでしょうか。答 1と1の点、2と1の点、1と2の点の3こです。ななめの辺より内側にあるものだけを数えます。',
          add: [...inner.map(([i, j]) => dot(i, j, C.green, FILL.green, 8)), lb(262, 176, '内側', 13, C.green, 'middle', true), lb(262, 196, '3こ', 16, C.green, 'middle', true)] },
        { note: '問 全部で何こでしょうか。答 ふちの8こと、内側の3こをたして、8＋3＝11こです。数えもれが出ないよう、ふちと内側に分けて数えるのがコツです。',
          add: [lb(160, 232, 'ふち8こ ＋ 内側3こ ＝ 11こ', 14, C.red, 'middle', true)] },
      ],
      '直角をはさむ2辺が4と3の直角三角形。格子点は、ふちの上と内側に分けて1つずつ数えるのが基本',
    );
  })(),

  // 値上げ→値下げ（2,000円→×1.2→×0.75）
  lf_sansu_62: show(
    [
      { note: '問 2,000円の品物を、まず20%値上げします。何円になるでしょうか。答 20%値上げは、もとの値段の1.2倍にすることです。2,000×1.2＝2,400円になります。',
        add: [bx(10, 70, 84, 50, '元値\n2,000円', C.blue, FILL.blue, 14), ar(96, 95, 126, 95, C.red), lb(111, 82, '×1.2', 13, C.red, 'middle', true), bx(128, 70, 84, 50, '値上げ後\n2,400円', C.green, FILL.green, 14), lb(111, 62, '20%値上げ', 11, C.red, 'middle')] },
      { note: '問 次に、25%値下げします。何円になるでしょうか。答 25%値下げは、0.75倍にすることです。2,400×0.75＝1,800円になります。',
        add: [ar(214, 95, 244, 95, C.red), lb(229, 82, '×0.75', 13, C.red, 'middle', true), bx(246, 70, 66, 50, '値下げ後\n1,800円', C.purple, FILL.purple, 12), lb(229, 62, '25%値下げ', 11, C.red, 'middle')] },
      { note: '問 2,000円にもどったでしょうか。答 もどりません。1,800円で、2,000円より200円安くなりました。値下げのもとにする値段が、値上げ後の2,400円に変わっているからです。',
        add: [lb(160, 160, '2,000円 → 1,800円', 15, C.red, 'middle', true), lb(160, 182, '200円 安くなった', 13, C.red, 'middle')] },
      { note: '問 まとめて1回の計算にすると、何倍でしょうか。答 1.2×0.75＝0.9倍です。結局、10%値下げしたのと同じになります。',
        add: [lb(160, 214, '1.2 × 0.75 ＝ 0.9（10%値下げと同じ）', 14, C.main, 'middle', true)] },
    ],
    '2,000円→20%値上げ(×1.2)→2,400円→25%値下げ(×0.75)→1,800円。結局10%値下げと同じ',
  ),

  // 食塩水：水を加える／食塩を加える（線分図・1g＝0.5px）
  lf_sansu_63: show(
    [
      { note: '問 10%の食塩水300gには、食塩が何g入っているでしょうか。答 300×0.1＝30gです。線分図では、黄色が食塩、青色が水をあらわします。',
        add: [lb(20, 52, '①10%の食塩水 300g', 13, C.ink, 'start', true), bx(20, 60, 15, 30, undefined, C.main, FILL.yellow), bx(35, 60, 135, 30, undefined, C.blue, FILL.blue), lb(180, 80, '食塩30g', 12, C.main, 'start', true),
          bx(214, 14, 12, 12, undefined, C.main, FILL.yellow), lb(230, 24, '食塩', 11, C.ink, 'start'), bx(266, 14, 12, 12, undefined, C.blue, FILL.blue), lb(282, 24, '水', 11, C.ink, 'start')] },
      { note: '問 水100gを加えると、食塩の量はどうなるでしょうか。答 食塩は30gのまま変わりません。全体が400gに増えるので、濃さは30÷400＝7.5%にうすまります。',
        add: [lb(20, 106, '②水100gを加える → 400g', 13, C.ink, 'start', true), bx(20, 112, 15, 28, undefined, C.main, FILL.yellow), bx(35, 112, 185, 28, undefined, C.blue, FILL.blue), lb(230, 131, '食塩30g', 12, C.main, 'start', true), lb(20, 156, '濃さ 30÷400 ＝ 7.5%', 12, C.red, 'start', true)] },
      { note: '問 さらに食塩20gを加えると、どうなるでしょうか。答 食塩が30＋20＝50gになり、全体は420gです。濃さは50÷420＝約11.9%と、こんどは濃くなります。',
        add: [lb(20, 176, '③食塩20gを加える → 420g', 13, C.ink, 'start', true), bx(20, 183, 25, 28, undefined, C.main, FILL.yellow), bx(45, 183, 185, 28, undefined, C.blue, FILL.blue), lb(238, 202, '食塩50g', 12, C.main, 'start', true), lb(20, 226, '濃さ 50÷420 ＝ 約11.9%', 12, C.red, 'start', true)] },
      { note: '問 水を加えるのと、食塩を加えるのでは、何がちがうでしょうか。答 水を加えても食塩の量は変わらず、濃さは下がります。食塩を加えると食塩の量が増え、濃さは上がります。濃さ＝食塩÷全体×100です。' },
    ],
    '水を加えても食塩の量は変わらないが、食塩そのものを加えると食塩の量が増える点に注意',
  ),

  // 食塩水：取り出してから水を加える
  lf_sansu_98: show(
    [
      { note: '問 15%の食塩水500gには、食塩が何g入っているでしょうか。答 500×0.15＝75gです。黄色が食塩、青色が水です（1g＝0.4px）。',
        add: [lb(20, 44, '①15%の食塩水 500g', 13, C.ink, 'start', true), bx(20, 52, 30, 30, undefined, C.main, FILL.yellow), bx(50, 52, 170, 30, undefined, C.blue, FILL.blue), lb(228, 72, '食塩75g', 12, C.main, 'start', true)] },
      { note: '問 100gを取り出すと、残りの食塩水の濃さは変わるでしょうか。答 変わりません。よくかき混ぜてあるので、取り出した100gも残りの400gも15%のままです。残りの食塩は400×0.15＝60gです。',
        add: [lb(20, 108, '②100gを取り出す → 残り400g（15%）', 13, C.ink, 'start', true), bx(20, 116, 24, 30, undefined, C.main, FILL.yellow), bx(44, 116, 136, 30, undefined, C.blue, FILL.blue), bx(184, 116, 40, 30, '100g', C.gray, FILL.gray, 11), lb(232, 136, '食塩60g', 12, C.main, 'start', true)] },
      { note: '問 そこへ水100gを加えると、濃さは何%になるでしょうか。答 食塩は60gのままで、全体が500gにもどります。濃さは60÷500＝12%です。',
        add: [lb(20, 172, '③水100gを加える → 500g', 13, C.ink, 'start', true), bx(20, 180, 24, 30, undefined, C.main, FILL.yellow), bx(44, 180, 176, 30, undefined, C.blue, FILL.blue), lb(228, 200, '食塩60g', 12, C.main, 'start', true), lb(20, 232, '濃さ 60÷500 ＝ 12%', 13, C.red, 'start', true)] },
      { note: '問 取り出したときに、濃さが変わらないのはなぜでしょうか。答 食塩水は、食塩と水がむらなく混ざっているからです。量が減っても、濃さ（食塩÷全体）は同じです。' },
    ],
    '15%の食塩水500gから100gを取り出しても、残り400gの濃さは15%のまま（食塩60g）。水100gを加えても食塩は変わらず60g→濃さは12%',
  ),

  // 売買損益と比（原価の比3:2、どちらも原価の2割の利益）
  lf_sansu_99: show(
    [
      { note: '問 Aの定価は3,600円です。これは原価の何倍でしょうか。答 原価の2割（0.2）の利益を見込むので、定価は原価の1.2倍です。線分図で、定価の長さを描きます。',
        add: [lb(20, 54, 'Aの定価 3,600円', 13, C.blue, 'start', true), bx(20, 62, 180, 34, '定価 3,600円', C.blue, FILL.blue, 14), lb(212, 84, '原価の1.2倍', 12, C.ink, 'start')] },
      { note: '問 Aの原価は、いくらでしょうか。答 3,600÷1.2＝3,000円です。線分図では、定価のうち原価の部分と、2割ぶんの利益の部分に分かれます。',
        add: [lb(20, 114, 'Aの原価 3,600÷1.2＝3,000円', 12, C.blue, 'start', true), bx(20, 124, 150, 24, '原価 3,000円', C.blue, FILL.blue, 12), bx(170, 124, 30, 24, '利益', C.red, FILL.red, 10)] },
      { note: '問 AとBの原価の比は3:2です。Bの原価は、いくらでしょうか。答 3,000円が3つ分なので、1つ分は1,000円です。Bは2つ分で、2,000円になります。',
        add: [lb(20, 172, 'Bの原価 3,000×2/3＝2,000円', 12, C.green, 'start', true), bx(20, 182, 100, 24, '原価 2,000円', C.green, FILL.green, 12)] },
      { note: '問 Bの定価は、いくらでしょうか。答 Bも原価の2割の利益を見込むので、2,000×1.2＝2,400円です。',
        add: [bx(120, 182, 20, 24, '利', C.red, FILL.red, 10), lb(150, 200, '定価 2,000×1.2＝2,400円', 12, C.green, 'start', true)] },
      { note: '問 答えが正しいか、どう確かめますか。答 原価の比3:2と、定価の比3,600:2,400＝3:2が同じになります。同じ割合で上乗せしたので、比は変わらないはずです。',
        add: [lb(160, 230, '原価 3:2 → 定価 3,600:2,400 ＝ 3:2 ✓', 13, C.red, 'middle', true)] },
    ],
    'A・Bの原価の比は3:2。どちらも原価の20%の利益を見込むと、Aの定価3,600円のときBの原価は2,000円、定価は2,400円',
  ),
};
