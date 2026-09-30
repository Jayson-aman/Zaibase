// 高校受験・数学 追加項目（formulas-koko-sugaku-tsuika.ts）の21番目〜31番目の動く図解スライド。
// キーは項目の label（買い切りの識別キーと同じ）。「なぜそうなるの？」を根っこまでたどる形で、10枚以上で書く。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, sc, show, band, fresh } from './diagram-kit';

type P = [number, number];
const BL = 'rgba(2,132,199,0.28)';
const RD = 'rgba(225,29,72,0.28)';
const GR = 'rgba(22,163,74,0.28)';
const PU = 'rgba(147,51,234,0.28)';
const GY = 'rgba(110,100,92,0.16)';
const YE = 'rgba(234,179,8,0.35)';
const dot = (p: P, color: string = C.ink): DiagramElement => ci(p[0], p[1], 2.5, undefined, color, color);

// ── 台形の対角線でできる面積の等しい三角形 ──
const tA: P = [100, 20], tD: P = [220, 20], tB: P = [70, 130], tC: P = [250, 130], tO: P = [160, 64];
const tBase = (): DiagramElement[] => [
  pg([tA, tD, tC, tB], C.gray, FILL.warm),
  ln(tA[0], tA[1], tC[0], tC[1], C.gray),
  ln(tB[0], tB[1], tD[0], tD[1], C.gray),
  dot(tO),
  lb(90, 14, 'A', 12, C.ink, 'middle', true), lb(230, 14, 'D', 12, C.ink, 'middle', true),
  lb(60, 137, 'B', 12, C.ink, 'middle', true), lb(260, 137, 'C', 12, C.ink, 'middle', true),
  lb(170, 55, 'O', 11, C.ink, 'middle', true),
];
const tBaseNoDiag = (): DiagramElement[] => [
  pg([tA, tD, tC, tB], C.gray, FILL.warm),
  lb(90, 14, 'A', 12, C.ink, 'middle', true), lb(230, 14, 'D', 12, C.ink, 'middle', true),
  lb(60, 137, 'B', 12, C.ink, 'middle', true), lb(260, 137, 'C', 12, C.ink, 'middle', true),
];
const daikei: DiagramFigure = show([
  {
    note: '台形 ABCD があります。AD と BC は平行（AD // BC）です。ここに対角線を引いて、面積について大切なことを見つけます。',
    add: [...tBaseNoDiag(), ...band(150, lb(160, 180, '台形 ABCD（AD // BC）', 14, C.blue, 'middle', true))],
  },
  {
    note: '対角線 AC と BD を引き、交わる点を O とします。すると、台形の中に三角形が4つできます。',
    add: [ln(tA[0], tA[1], tC[0], tC[1], C.gray), ln(tB[0], tB[1], tD[0], tD[1], C.gray), dot(tO), lb(170, 55, 'O', 11, C.ink, 'middle', true), ...band(150, lb(160, 180, '三角形は △OAD・△OBC・△OAB・△ODC の4つ', 12, C.gray, 'middle', true))],
  },
  {
    note: '左右にある △OAB と △ODC に注目します。この2つの面積が等しくなる、というのが今日のテーマです。',
    add: fresh(...tBase(), pg([tA, tB, tO], C.red, RD), pg([tD, tC, tO], C.red, RD), ...band(150, lb(160, 180, '△OAB ＝ △ODC を示したい', 14, C.red, 'middle', true))),
  },
  {
    note: '❓ どうやって示すの？ まず、対角線を1本ずつ含む大きな三角形 △ABC と △DBC を比べます。この2つは、底辺 BC が共通です。',
    add: fresh(...tBase(), pg([tA, tB, tC], C.blue, BL), ln(tB[0], tB[1], tC[0], tC[1], C.red, false, 3), ...band(150, lb(160, 172, '△ABC の底辺は BC', 13, C.blue, 'middle', true), lb(160, 200, 'BC は △DBC と共通の底辺', 12, C.red, 'middle', true))),
  },
  {
    note: '❓ では高さは？ A から BC に下ろした垂線と、D から BC に下ろした垂線を見ます。AD // BC なので、この2本は同じ長さになります。',
    add: fresh(...tBase(), pg([tA, tB, tC], C.blue, BL), pg([tD, tB, tC], C.green, GR), ln(tA[0], tA[1], tA[0], 130, C.purple, true, 2), ln(tD[0], tD[1], tD[0], 130, C.purple, true, 2), lb(88, 78, 'h', 12, C.purple, 'middle', true), lb(232, 78, 'h', 12, C.purple, 'middle', true), ...band(150, lb(160, 180, 'A と D の高さは、どちらも h', 13, C.purple, 'middle', true))),
  },
  {
    note: '❓ なぜ高さが等しいの？ 平行な2本の直線の間の幅（距離）は、どこではかっても同じだからです。AD の上の A でも D でも、BC までの垂線は同じ長さになります。',
    add: fresh(...tBase(), ln(tA[0], tA[1], tA[0], 130, C.purple, true, 2), ln(tD[0], tD[1], tD[0], 130, C.purple, true, 2), ln(160, 20, 160, 130, C.purple, true, 2), lb(160, 142, '平行線の間の幅は どこも同じ', 11, C.purple), ...band(150, lb(160, 180, 'AD // BC ならば、高さは全部同じ', 13, C.purple, 'middle', true))),
  },
  {
    note: '❓ 高さも底辺も同じだと、何が言えるの？ 三角形の面積は「底辺×高さ÷2」なので、底辺 BC も高さ h も同じ △ABC と △DBC は、面積が等しくなります。',
    add: fresh(...tBase(), pg([tA, tB, tC], C.blue, BL), pg([tD, tB, tC], C.green, GR), ...band(150, bx(30, 160, 260, 32, '△ABC ＝ △DBC', C.green, FILL.green, 16), lb(160, 212, '（底辺 BC × 高さ h ÷ 2 が、どちらも同じ）', 11, C.gray))),
  },
  {
    note: '❓ そこから △OAB と △ODC はどう出るの？ △ABC は △OAB と △OBC をあわせた三角形です。まず左側を見ましょう。',
    add: fresh(...tBase(), pg([tA, tB, tO], C.blue, BL), pg([tB, tC, tO], C.gray, GY), ...band(150, bx(30, 165, 260, 32, '△ABC ＝ △OAB ＋ △OBC', C.blue, FILL.blue, 15))),
  },
  {
    note: '同じように、△DBC は △ODC と △OBC をあわせた三角形です。どちらにも △OBC（灰色）がふくまれています。',
    add: fresh(...tBase(), pg([tD, tC, tO], C.green, GR), pg([tB, tC, tO], C.gray, GY), ...band(150, bx(30, 165, 260, 32, '△DBC ＝ △ODC ＋ △OBC', C.green, FILL.green, 15))),
  },
  {
    note: '❓ 共通の △OBC を取りのぞくと？ △ABC ＝ △DBC の両方から同じ △OBC をひけば、残りも等しいままです。だから △OAB ＝ △ODC が成り立ちます。',
    add: fresh(...tBase(), pg([tA, tB, tO], C.red, RD), pg([tD, tC, tO], C.red, RD), pg([tB, tC, tO], C.gray, GY), ...band(150, lb(160, 165, '（△OAB＋△OBC）＝（△ODC＋△OBC）', 12, C.gray, 'middle', true), bx(40, 182, 240, 34, '△OAB ＝ △ODC', C.red, FILL.red, 17))),
  },
  {
    note: '残りの2つ、△OAD と △OCB にも大切な関係があります。AD // BC なので、錯角（さっかく）が等しく、O の対頂角も等しいので、2つの角が等しくなり、この2つの三角形は相似です。',
    add: fresh(...tBase(), pg([tA, tD, tO], C.purple, PU), pg([tB, tC, tO], C.purple, PU), ...band(150, lb(160, 170, '錯角＝錯角　対頂角＝対頂角', 12, C.purple, 'middle', true), lb(160, 198, '2つの角が等しい → △OAD ∽ △OCB', 13, C.purple, 'middle', true))),
  },
  {
    note: '❓ 相似だと面積はどうなるの？ たとえば △OAD＝4cm²、△OBC＝9cm² なら、面積の比は 4：9 です。面積比は相似比の2乗なので、相似比は 2：3（2×2＝4、3×3＝9）になります。',
    add: fresh(...tBase(), lb(160, 35, '4', 14, C.purple, 'middle', true), lb(160, 108, '9', 14, C.purple, 'middle', true), ...band(150, bx(20, 160, 280, 28, '面積比 4：9 → 相似比 2：3', C.purple, FILL.purple, 14), lb(160, 206, '相似比 ＝ AD：BC ＝ OA：OC ＝ 2：3', 12, C.gray))),
  },
  {
    note: '❓ △OAB の面積は？ △OAB と △OBC は、頂点 B から AC に下ろした高さが同じなので、面積の比は底辺の比 OA：OC ＝ 2：3 です。△OBC＝9 なので △OAB ＝ 9×2÷3 ＝ 6cm² です。',
    add: fresh(...tBase(), pg([tA, tB, tO], C.red, RD), pg([tB, tC, tO], C.gray, GY), lb(110, 71, '6', 14, C.red, 'middle', true), lb(160, 108, '9', 14, C.gray, 'middle', true), ...band(150, bx(20, 160, 280, 28, '△OAB：△OBC ＝ OA：OC ＝ 2：3', C.red, FILL.red, 13), lb(160, 206, '△OAB ＝ 9 × 2 ÷ 3 ＝ 6cm²', 14, C.red, 'middle', true))),
  },
  {
    note: '△ODC も △OAB と等しいので 6cm² です。台形全体は 4＋9＋6＋6 ＝ 25cm² になります。',
    add: fresh(...tBase(), lb(160, 35, '4', 14, C.purple, 'middle', true), lb(160, 108, '9', 14, C.gray, 'middle', true), lb(110, 71, '6', 14, C.red, 'middle', true), lb(210, 71, '6', 14, C.red, 'middle', true), ...band(150, bx(30, 164, 260, 30, '4 ＋ 9 ＋ 6 ＋ 6 ＝ 25cm²', C.green, FILL.green, 16))),
  },
  {
    note: '❓ 検算のしかたは？ 相似比 2：3 の2と3をたすと 5。その2乗 5×5＝25 が全体の面積になります。これは 2×2＝4、3×3＝9、2×3＝6 が2つ、と合計が (2＋3)² になるからです。',
    add: fresh(...tBase(), ...band(150, lb(160, 165, '4 ＋ 9 ＋ 6 ＋ 6 ＝ 4 ＋ 9 ＋ 2×3 ＋ 2×3', 12, C.gray, 'middle', true), bx(30, 182, 260, 34, '(2 ＋ 3)² ＝ 25 ✓', C.green, FILL.green, 16))),
  },
]);

// ── 相似で測る（影・木の高さ・池の幅） ──
const groundY = 125;
const scene = (): DiagramElement[] => [
  ln(8, groundY, 312, groundY, C.gray, false, 2),
  ln(30, groundY, 30, 102.6, C.blue, false, 3),
  ln(130, groundY, 130, 41, C.green, false, 4),
  ci(130, 36, 9, undefined, C.green, FILL.green),
  lb(22, 112, '1.6m', 10, C.blue, 'end'),
];
const shadows = (): DiagramElement[] => [
  ln(30, groundY, 58, groundY, C.red, false, 3), ln(130, groundY, 235, groundY, C.red, false, 3),
  lb(44, 138, '影 2m', 11, C.red), lb(182, 138, '影 7.5m', 11, C.red),
];
const rays = (): DiagramElement[] => [ar(5, 82.6, 58, groundY, C.main, true), ar(80, 1, 235, groundY, C.main, true)];
const trisTree = (): DiagramElement[] => [pg([[30, groundY], [30, 102.6], [58, groundY]], C.blue, BL), pg([[130, groundY], [130, 41], [235, groundY]], C.green, GR)];
const pA: P = [70, 125], pB: P = [250, 125], pC: P = [160, 20], pD: P = [130, 55], pE: P = [190, 55];
const pondBase = (): DiagramElement[] => [
  pg([pA, pB, pC], C.gray, FILL.warm),
  ln(pA[0], pA[1], pB[0], pB[1], C.blue, true, 3),
  lb(160, 140, '池（AB は直接測れない）', 11, C.blue),
  lb(58, 125, 'A', 12, C.ink, 'middle', true), lb(262, 125, 'B', 12, C.ink, 'middle', true), lb(160, 10, 'C', 12, C.ink, 'middle', true),
];
const kageSoji: DiagramFigure = show([
  {
    note: '身長 1.6m の人の影が 2m のとき、同じ時刻の木の影が 7.5m でした。木の高さは何 m でしょう。木の上までメジャーは届きません。',
    add: [...scene(), lb(122, 84, '木 x m', 12, C.green, 'end', true), ...band(150, lb(160, 180, '人の高さ 1.6m、木の高さ x を求めたい', 13, C.blue, 'middle', true))],
  },
  {
    note: '❓ 木の高さは直接測れないのに、どうするの？ 地面にできた影なら、歩いて測れます。影の長さから高さを求めましょう。人の影は 2m、木の影は 7.5m です。',
    add: [...shadows(), ...band(150, lb(160, 180, '影なら地面で測れる', 14, C.red, 'middle', true))],
  },
  {
    note: '❓ 影で高さがわかるのは、なぜ？ 太陽の光は、とても遠くから来るので、ほぼ平行に地面にとどきます。同じ時刻なら、人にも木にも同じ向きの光が当たっています。',
    add: [...rays(), ...band(150, lb(160, 180, '同じ時刻の太陽の光は、平行', 14, C.main, 'middle', true))],
  },
  {
    note: '光と影で、直角三角形が2つできます。人と影でできる小さな三角形と、木と影でできる大きな三角形です。この2つに注目しましょう。',
    add: [...trisTree(), ...band(150, lb(160, 180, '小さい直角三角形と、大きい直角三角形', 13, C.gray, 'middle', true))],
  },
  {
    note: '❓ この2つの三角形は、なぜ相似なの？ ①地面と人・木は垂直なので、どちらも 90°。②光が平行なので、影の先の角も等しい（同位角）。2つの角が等しいので相似です。',
    add: [bx(31, 117, 7, 7, undefined, C.gray), bx(131, 114, 10, 10, undefined, C.gray), lb(47, 120, '●', 9, C.purple), lb(215, 120, '●', 9, C.purple), ...band(150, lb(160, 168, '① 直角どうし　② 光が平行で同じ角', 12, C.purple, 'middle', true), lb(160, 198, '2つの角が等しい → 相似', 14, C.purple, 'middle', true))],
  },
  {
    note: '❓ 相似だと、何がわかるの？ 相似な図形では、対応する辺の比がすべて等しくなります。人と影の三角形と、木と影の三角形の対応する辺をくらべましょう。',
    add: fresh(...scene(), ...shadows(), ...trisTree(), ...band(150, lb(160, 172, '相似 → 対応する辺の比が等しい', 14, C.purple, 'middle', true))),
  },
  {
    note: '❓ どの辺とどの辺が対応するの？ 高さは「人の高さ 1.6」と「木の高さ x」、影は「人の影 2」と「木の影 7.5」です。同じ種類の辺どうしで比を作ります。',
    add: fresh(...scene(), ...shadows(), lb(122, 84, 'x m', 12, C.green, 'end', true), ...band(150, bx(20, 158, 130, 28, '高さ 1.6 と x', C.blue, FILL.blue, 13), bx(170, 158, 130, 28, '影 2 と 7.5', C.red, FILL.red, 13), bx(40, 196, 240, 30, '1.6 ： 2 ＝ x ： 7.5', C.green, FILL.green, 16))),
  },
  {
    note: '❓ この比例式は、どう解くの？ 「内項（ないこう）の積 ＝ 外項（がいこう）の積」を使います。内側の 2 と x をかけたもの ＝ 外側の 1.6 と 7.5 をかけたもの、です。',
    add: fresh(bx(30, 20, 260, 34, '1.6 ： 2 ＝ x ： 7.5', C.green, FILL.green, 17), lb(160, 88, '内側どうし ＝ 外側どうし', 13, C.blue, 'middle', true), bx(30, 108, 260, 32, '2 × x ＝ 1.6 × 7.5', C.blue, FILL.blue, 16), ...band(150, lb(160, 175, '2x ＝ 12', 15, C.gray, 'middle', true), lb(160, 205, 'x ＝ 12 ÷ 2 ＝ 6', 16, C.red, 'middle', true))),
  },
  {
    note: '❓ なぜ内項の積と外項の積が等しいの？ 1.6÷2 ＝ x÷7.5 の両方に 2×7.5 をかけると、左は 1.6×7.5、右は x×2 になって、そのまま等しいからです。答えは 6m。',
    add: fresh(bx(20, 24, 280, 32, '1.6 ÷ 2 ＝ x ÷ 7.5', C.gray, FILL.gray, 15), lb(160, 76, '両方に 2 × 7.5 をかける', 13, C.purple, 'middle', true), bx(20, 96, 280, 32, '1.6 × 7.5 ＝ x × 2', C.purple, FILL.purple, 15), ...band(146, bx(40, 160, 240, 34, '木の高さ ＝ 6m', C.green, FILL.green, 18), lb(160, 214, '（式は 12 ＝ 2x なので x ＝ 6）', 12, C.gray))),
  },
  {
    note: '❓ 答えが合っているか、確かめるには？ 影は 2m から 7.5m へ、7.5÷2＝3.75倍になっています。高さも 1.6m の 3.75倍のはずで、1.6×3.75＝6m。ぴったり一致します。',
    add: fresh(...scene(), ...shadows(), lb(122, 84, '6m', 12, C.green, 'end', true), ...band(150, lb(160, 168, '影：7.5 ÷ 2 ＝ 3.75倍', 13, C.red, 'middle', true), lb(160, 198, '高さ：1.6 × 3.75 ＝ 6m ✓', 14, C.green, 'middle', true))),
  },
  {
    note: '池の幅も測れます。池をはさむ A、B と、その外の点 C をとります。CA 上の点 D（CD＝10m）と、CB 上の点 E を、DE // AB となるようにとります。DE＝8m、CA＝30m です。',
    add: fresh(...pondBase(), ln(pD[0], pD[1], pE[0], pE[1], C.red, false, 3), dot(pD), dot(pE), lb(118, 55, 'D', 11, C.ink, 'middle', true), lb(202, 55, 'E', 11, C.ink, 'middle', true), lb(160, 46, '8m', 11, C.red), ...band(150, lb(160, 180, 'CD＝10m、CA＝30m、DE＝8m、AB を求める', 12, C.blue, 'middle', true))),
  },
  {
    note: '❓ △CDE と △CAB は、なぜ相似なの？ DE // AB なので、同位角が等しくなります。さらに C の角は共通です。2つの角が等しいので相似です。',
    add: fresh(...pondBase(), pg([pC, pD, pE], C.green, GR), ln(pD[0], pD[1], pE[0], pE[1], C.red, false, 3), lb(118, 55, 'D', 11, C.ink, 'middle', true), lb(202, 55, 'E', 11, C.ink, 'middle', true), ...band(150, lb(160, 170, 'DE // AB → 同位角が等しい', 13, C.purple, 'middle', true), lb(160, 198, '角 C は共通 → △CDE ∽ △CAB', 13, C.purple, 'middle', true))),
  },
  {
    note: '❓ 相似比はいくつ？ 対応する辺 CD と CA の比を作ります。10：30 ＝ 1：3 です。だから DE と AB の比も 1：3 になります。',
    add: fresh(...pondBase(), pg([pC, pD, pE], C.green, GR), ...band(150, bx(30, 158, 260, 28, 'CD ： CA ＝ 10 ： 30 ＝ 1 ： 3', C.green, FILL.green, 14), lb(160, 208, 'DE ： AB も 1 ： 3', 14, C.purple, 'middle', true))),
  },
  {
    note: '❓ では AB は？ DE ： AB ＝ 1 ： 3 で DE＝8m なので、AB ＝ 8×3 ＝ 24m です。池の向こう岸までの幅が、岸の外側で測るだけでわかりました。',
    add: fresh(...pondBase(), pg([pC, pD, pE], C.green, GR), ...band(150, bx(30, 160, 260, 28, '8 ： AB ＝ 1 ： 3', C.blue, FILL.blue, 15), bx(30, 196, 260, 30, 'AB ＝ 8 × 3 ＝ 24m', C.green, FILL.green, 16))),
  },
  {
    note: '❓ 気をつけることは？ 比を作る前に、単位を m か cm のどちらかにそろえます。身長 150cm なら 1.5m に直してから、1.5 ： 1.2 ＝ x ： 2.4 のように、対応する辺どうしで比を作ります。',
    add: fresh(bx(20, 20, 280, 34, '単位をそろえる（cm → m）', C.red, FILL.red, 14), bx(20, 68, 280, 34, '対応する辺どうしで比を作る', C.blue, FILL.blue, 14), bx(20, 116, 280, 34, '（人：影 ＝ 木：影）', C.green, FILL.green, 14), lb(160, 180, '例 150cm ＝ 1.5m → 1.5 ： 1.2 ＝ x ： 2.4', 12, C.gray, 'middle', true), lb(160, 210, 'x ＝ 1.5 × 2.4 ÷ 1.2 ＝ 3m', 13, C.red, 'middle', true)),
  },
]);

// ── 内接円の半径を面積から求める ──
const iP: P = [110, 36], iQ: P = [110, 120], iR: P = [222, 120], iI: P = [138, 92];
const iTan: P[] = [[110, 92], [138, 120], [154.8, 69.6]];
const incBase = (): DiagramElement[] => [
  pg([iP, iQ, iR], C.gray, FILL.warm),
  ci(iI[0], iI[1], 28, undefined, C.blue, 'rgba(2,132,199,0.10)'),
  bx(110, 113, 7, 7, undefined, C.gray),
];
const incLabels = (): DiagramElement[] => [
  lb(96, 78, '6cm', 10, C.gray, 'end'), lb(166, 133, '8cm', 10, C.gray), lb(196, 70, '10cm', 10, C.gray, 'start'),
];
const kousaki: DiagramFigure = show([
  {
    note: '直角をはさむ辺が 6cm と 8cm、斜辺（しゃへん）が 10cm の三角形に、円がぴったり内側でふれています。この内接円の半径 r を求めます。',
    add: [...incBase(), ...incLabels(), ...band(150, lb(160, 180, '3辺 6cm・8cm・10cm、内接円の半径 r は？', 13, C.blue, 'middle', true))],
  },
  {
    note: '❓ 内接円の中心（内心）は、どこにあるの？ 円は3つの辺すべてにふれるので、中心は3辺から同じ距離にあります。それは3つの角の二等分線が交わる点です。',
    add: fresh(...incBase(), ln(iQ[0], iQ[1], iI[0], iI[1], C.purple, true, 1.6), ln(iP[0], iP[1], iI[0], iI[1], C.purple, true, 1.6), ln(iR[0], iR[1], iI[0], iI[1], C.purple, true, 1.6), dot(iI, C.red), lb(140, 82, 'I', 11, C.red, 'middle', true), ...band(150, lb(160, 175, '内心 I ＝ 3つの角の二等分線の交点', 13, C.purple, 'middle', true))),
  },
  {
    note: '❓ 半径 r を、面積とどう結びつけるの？ 中心 I と3つの頂点を結んで、三角形を3つに切り分けます。どの三角形も、底辺は元の三角形の辺になります。',
    add: fresh(...incBase(), ln(iP[0], iP[1], iI[0], iI[1], C.purple, false, 2), ln(iQ[0], iQ[1], iI[0], iI[1], C.purple, false, 2), ln(iR[0], iR[1], iI[0], iI[1], C.purple, false, 2), dot(iI, C.red), ...band(150, lb(160, 175, '3つの三角形に分ける', 14, C.purple, 'middle', true))),
  },
  {
    note: '❓ その3つの三角形の高さは？ 円は辺にふれる点（接点）で、半径が辺に垂直になります。だから I から各辺までの距離は、どれも半径 r と等しくなります。',
    add: fresh(...incBase(), ln(iP[0], iP[1], iI[0], iI[1], C.gray, false, 1), ln(iQ[0], iQ[1], iI[0], iI[1], C.gray, false, 1), ln(iR[0], iR[1], iI[0], iI[1], C.gray, false, 1), ...iTan.map((t) => ln(iI[0], iI[1], t[0], t[1], C.red, false, 2.5)), dot(iI, C.red), lb(124, 100, 'r', 11, C.red, 'middle', true), ...band(150, lb(160, 175, '3つの高さは、どれも r', 14, C.red, 'middle', true))),
  },
  {
    note: '3つの三角形の面積は、それぞれ「底辺×r÷2」です。左は 6×r÷2、下は 8×r÷2、斜辺側は 10×r÷2。色分けして見てみましょう。',
    add: fresh(...incBase(), pg([iP, iQ, iI], C.blue, BL), pg([iQ, iR, iI], C.green, GR), pg([iR, iP, iI], C.red, RD), ...band(150, lb(160, 165, '左 6×r÷2　下 8×r÷2', 13, C.blue, 'middle', true), lb(160, 195, '斜辺側 10×r÷2', 13, C.red, 'middle', true))),
  },
  {
    note: '❓ 全体の面積 S は？ 3つの面積をたせば、もとの三角形の面積になります。r÷2 が共通なので、まとめると S ＝ （6＋8＋10）× r ÷ 2 ＝ 3辺の和 × r ÷ 2 です。',
    add: fresh(...incBase(), ...band(150, bx(20, 158, 280, 28, 'S ＝ 6r÷2 ＋ 8r÷2 ＋ 10r÷2', C.gray, FILL.gray, 13), bx(20, 196, 280, 30, 'S ＝（3辺の和）× r ÷ 2', C.purple, FILL.purple, 15))),
  },
  {
    note: '❓ そこから r はどう求めるの？ S ＝ 3辺の和 × r ÷ 2 の両辺を2倍すると 2S ＝ 3辺の和 × r。両辺を「3辺の和」でわると r ＝ 2S ÷（3辺の和）になります。',
    add: fresh(bx(20, 20, 280, 34, 'S ＝ 3辺の和 × r ÷ 2', C.gray, FILL.gray, 15), lb(160, 72, '両辺を 2 倍する', 12, C.purple, 'middle', true), bx(20, 88, 280, 34, '2S ＝ 3辺の和 × r', C.purple, FILL.purple, 15), lb(160, 140, '両辺を「3辺の和」でわる', 12, C.purple, 'middle', true), bx(20, 156, 280, 40, 'r ＝ 2S ÷（3辺の和）', C.green, FILL.green, 17)),
  },
  {
    note: '計算しましょう。面積 S ＝ 6×8÷2 ＝ 24cm²、3辺の和は 6＋8＋10 ＝ 24cm です。r ＝ 2×24÷24 ＝ 2cm となります。',
    add: fresh(...incBase(), ...incLabels(), ...band(150, lb(160, 165, 'S ＝ 6×8÷2 ＝ 24　3辺の和 ＝ 24', 13, C.gray, 'middle', true), bx(30, 182, 260, 34, 'r ＝ 2 × 24 ÷ 24 ＝ 2cm', C.green, FILL.green, 16))),
  },
  {
    note: '❓ 答えが合っているか、別の方法で確かめられる？ 直角三角形の直角の角では、円と2つの辺の接点から角までの長さがどちらも r です。ここでは小さな正方形ができています。',
    add: fresh(...incBase(), ln(110, 92, 138, 92, C.red, false, 2.5), ln(138, 92, 138, 120, C.red, false, 2.5), ln(110, 92, 110, 120, C.red, false, 2.5), ln(110, 120, 138, 120, C.red, false, 2.5), lb(124, 132, 'r', 11, C.red, 'middle', true), lb(101, 106, 'r', 11, C.red, 'end', true), ...band(150, lb(160, 175, '直角の所は、辺の長さ r の正方形', 13, C.red, 'middle', true))),
  },
  {
    note: '❓ 斜辺の長さはどう表せるの？ 同じ点から円へ引いた2本の接線は長さが等しいので、斜辺の両はしの長さは、6−r と 8−r になります。この2つをたすと斜辺 10cm です。',
    add: fresh(...incBase(), lb(100, 62, '6−r', 11, C.blue, 'end', true), lb(184, 135, '8−r', 11, C.green, 'middle', true), lb(124, 132, 'r', 11, C.red), lb(101, 106, 'r', 11, C.red, 'end'), ...band(150, lb(160, 170, '同じ点からの接線の長さは等しい', 12, C.purple, 'middle', true), bx(30, 190, 260, 30, '(6−r) ＋ (8−r) ＝ 10', C.purple, FILL.purple, 15))),
  },
  {
    note: '(6−r)＋(8−r) ＝ 10 を解くと、14−2r ＝ 10 なので 2r ＝ 4、r ＝ 2。ここから「r ＝（直角をはさむ2辺の和−斜辺）÷2」＝（6＋8−10）÷2 ＝ 2 という近道も出ます。',
    add: fresh(bx(30, 20, 260, 32, '(6−r) ＋ (8−r) ＝ 10', C.purple, FILL.purple, 15), bx(30, 64, 260, 32, '14 − 2r ＝ 10', C.gray, FILL.gray, 15), bx(30, 108, 260, 32, '2r ＝ 4　→　r ＝ 2', C.green, FILL.green, 15), ...band(150, lb(160, 175, '近道（直角三角形だけ）', 12, C.gray, 'middle', true), lb(160, 205, 'r ＝（6 ＋ 8 − 10）÷ 2 ＝ 2', 14, C.red, 'middle', true))),
  },
  {
    note: '❓ 直角三角形でないときは？ 3辺 13cm・14cm・15cm で底辺 14cm の高さが 12cm の三角形なら、S ＝ 14×12÷2 ＝ 84cm²、3辺の和 ＝ 42cm。r ＝ 2×84÷42 ＝ 4cm です。',
    add: fresh(pg([[80, 130], [192, 130], [120, 34]], C.gray, FILL.warm), ci(128, 98, 32, undefined, C.blue, 'rgba(2,132,199,0.10)'), ln(120, 34, 120, 130, C.gray, true, 1.4), lb(74, 140, 'B', 11, C.ink), lb(198, 140, 'C', 11, C.ink), lb(120, 26, 'A', 11, C.ink), lb(136, 140, '14cm', 10, C.gray), lb(114, 50, '12cm', 10, C.gray, 'end'), ...band(150, lb(160, 165, 'S ＝ 14×12÷2 ＝ 84　3辺の和 ＝ 42', 13, C.gray, 'middle', true), bx(30, 182, 260, 34, 'r ＝ 2 × 84 ÷ 42 ＝ 4cm', C.green, FILL.green, 16))),
  },
  {
    note: '❓ なぜ直角三角形でなくても使えるの？ この公式は「3つの三角形に分けて、高さがすべて r」ということだけを使っています。直角かどうかは関係ないからです。S と3辺の和がわかれば、どんな三角形でも r が出ます。',
    add: fresh(bx(20, 20, 280, 34, '使ったのは 2 つだけ', C.purple, FILL.purple, 14), bx(20, 66, 280, 34, '① 3つの三角形に分ける', C.blue, FILL.blue, 14), bx(20, 112, 280, 34, '② 高さはどれも r', C.blue, FILL.blue, 14), lb(160, 176, '直角かどうかは使っていない', 13, C.red, 'middle', true), lb(160, 206, 'だから、どんな三角形でも r ＝ 2S ÷ 3辺の和', 12, C.gray)),
  },
]);

// ── 作図の考え方 ──
const zA: P = [110, 74], zB: P = [210, 74];
const zO: P = [160, 70];
const zCirc = (): DiagramElement[] => [ci(zO[0], zO[1], 56, undefined, C.gray, 'rgba(110,100,92,0.06)')];
const sakuzu: DiagramFigure = show([
  {
    note: '作図には3つの場面があります。①折り目をつくる ②円の中心を見つける ③接線を引く。実は3つとも「垂直二等分線」と「垂線」という2つの道具で説明できます。',
    add: [bx(20, 24, 280, 34, '① 折り目', C.blue, FILL.blue, 15), bx(20, 72, 280, 34, '② 円の中心', C.green, FILL.green, 15), bx(20, 120, 280, 34, '③ 円の接線', C.purple, FILL.purple, 15), ...band(166, lb(160, 195, '道具はたった2つ：垂直二等分線と垂線', 13, C.red, 'middle', true))],
  },
  {
    note: '❓ 垂直二等分線って何？ 線分 AB の真ん中を通り、AB に垂直な直線のことです。この線の上の点は、A からも B からも同じ距離になります。',
    add: fresh(ln(zA[0], zA[1], zB[0], zB[1], C.ink, false, 2), ln(160, 10, 160, 138, C.red, false, 2.5), dot(zA), dot(zB), lb(104, 90, 'A', 12, C.ink, 'middle', true), lb(216, 90, 'B', 12, C.ink, 'middle', true), ...band(150, lb(160, 178, '垂直二等分線（赤）', 14, C.red, 'middle', true))),
  },
  {
    note: '❓ なぜ「同じ距離」と言えるの？ 線上の点 P を A と B に結ぶと、P は AB の真ん中の真上にある二等辺三角形の頂点になります。だから PA ＝ PB です。',
    add: fresh(ln(zA[0], zA[1], zB[0], zB[1], C.ink, false, 2), ln(160, 10, 160, 138, C.red, false, 2.5), dot(zA), dot(zB), dot([160, 26], C.purple), ln(160, 26, zA[0], zA[1], C.purple, true, 2), ln(160, 26, zB[0], zB[1], C.purple, true, 2), lb(170, 16, 'P', 11, C.purple, 'start', true), lb(104, 90, 'A', 12, C.ink, 'middle', true), lb(216, 90, 'B', 12, C.ink, 'middle', true), ...band(150, lb(160, 178, 'PA ＝ PB（P は線上のどこでも）', 13, C.purple, 'middle', true))),
  },
  {
    note: '❓ 作図ではどうやってかくの？ A を中心に同じ半径の円、B を中心に同じ半径の円をかきます。2つの円の交点は、A からも B からも半径ぶんだけ離れています。',
    add: fresh(ci(zA[0], zA[1], 66, undefined, C.blue, 'rgba(2,132,199,0.05)'), ci(zB[0], zB[1], 66, undefined, C.green, 'rgba(22,163,74,0.05)'), dot(zA), dot(zB), dot([160, 31], C.red), dot([160, 117], C.red), lb(104, 90, 'A', 12, C.ink, 'middle', true), lb(216, 90, 'B', 12, C.ink, 'middle', true), ...band(150, lb(160, 178, '同じ半径の円 → 交点は A・B から等距離', 12, C.red, 'middle', true))),
  },
  {
    note: '2つの交点を結ぶと、それが垂直二等分線です。等距離の点は線の上にならぶので、この2点を通る直線が「A・B から等しい距離の点の集まり」になります。',
    add: [ln(160, 10, 160, 138, C.red, false, 2.5), ...band(150, lb(160, 178, '交点2つを結ぶ ＝ 垂直二等分線', 14, C.red, 'middle', true))],
  },
  {
    note: '① 折り目。紙を折って点 A を点 B にぴったり重ねたとき、折り目はどこにできるでしょう。',
    add: fresh(ln(zA[0], zA[1], zB[0], zB[1], C.ink, false, 1.5), ar(116, 60, 204, 60, C.blue), dot(zA), dot(zB), lb(104, 90, 'A', 12, C.ink, 'middle', true), lb(216, 90, 'B', 12, C.ink, 'middle', true), ...band(150, lb(160, 178, 'A を B に重ねる折り目は？', 14, C.blue, 'middle', true))),
  },
  {
    note: '❓ 折り目はなぜ垂直二等分線なの？ 折って重なる2点は、折り目をはさんで左右対称の位置にあります。だから A から折り目までと、B から折り目までの距離は同じです。',
    add: fresh(ln(zA[0], zA[1], zB[0], zB[1], C.ink, false, 1.5), ln(160, 10, 160, 138, C.red, true, 2.5), ar(116, 60, 154, 60, C.blue), ar(204, 60, 166, 60, C.blue), dot(zA), dot(zB), lb(104, 90, 'A', 12, C.ink, 'middle', true), lb(216, 90, 'B', 12, C.ink, 'middle', true), ...band(150, lb(160, 170, '折り目は A と B の真ん中', 13, C.red, 'middle', true), lb(160, 198, '折り目 ＝ AB の垂直二等分線', 14, C.red, 'middle', true))),
  },
  {
    note: '② 円の中心。円周上に弦 PQ をとります。中心 O は、P からも Q からも半径の長さだけ離れています。',
    add: fresh(...zCirc(), dot([111.5, 42]), dot([208.5, 42]), ln(111.5, 42, 208.5, 42, C.blue, false, 2), lb(106, 34, 'P', 11, C.ink, 'end', true), lb(214, 34, 'Q', 11, C.ink, 'start', true), ...band(150, lb(160, 178, '弦 PQ の両はしから中心までは、どちらも半径', 12, C.blue, 'middle', true))),
  },
  {
    note: '❓ だから中心はどこにあるの？ OP ＝ OQ なので、O は P と Q から等しい距離にあります。つまり、弦 PQ の垂直二等分線の上のどこかにあります。',
    add: [ln(160, 4, 160, 138, C.red, true, 2.5), ...band(150, lb(160, 178, '中心は PQ の垂直二等分線の上', 13, C.red, 'middle', true))],
  },
  {
    note: '❓ 1本では中心が1点に決まらないのは、なぜ？ 中心は、この線上のどこにあってもおかしくないからです。そこで、もう1本弦 RS をとって、その垂直二等分線もかきます。',
    add: fresh(...zCirc(), ln(160, 4, 160, 138, C.red, true, 2.5), ln(111.5, 42, 208.5, 42, C.blue, false, 2), ln(107.4, 89.2, 179.2, 122.6, C.green, false, 2), ln(136.6, 120.3, 170, 48.5, C.purple, true, 2.5), dot([107.4, 89.2]), dot([179.2, 122.6]), ...band(150, lb(160, 178, '2本目の垂直二等分線（紫）もかく', 13, C.purple, 'middle', true))),
  },
  {
    note: '2本の垂直二等分線の交点が、円の中心です。どちらの線の上にもある点は1つしかないので、中心が1点に決まります。だから弦は2本必要です。',
    add: fresh(...zCirc(), ln(160, 4, 160, 138, C.red, true, 2.5), ln(136.6, 120.3, 170, 48.5, C.purple, true, 2.5), dot(zO, C.red), lb(172, 84, 'O', 12, C.red, 'start', true), ...band(150, lb(160, 175, '交点 ＝ 円の中心 O', 14, C.red, 'middle', true), lb(160, 203, '弦は 2 本使う', 13, C.gray))),
  },
  {
    note: '③ 接線。円周上の点 P で円にふれる直線（接線）を引きます。接線は、中心 O と P を結ぶ半径に垂直になります。',
    add: fresh(...zCirc(), dot(zO, C.red), dot([202.9, 34], C.blue), ln(zO[0], zO[1], 202.9, 34, C.red, false, 2.5), ln(177.2, 3.4, 231.8, 68.5, C.blue, false, 2.5), lb(154, 78, 'O', 11, C.red, 'end', true), lb(210, 30, 'P', 11, C.blue, 'start', true), ...band(150, lb(160, 178, '接線 ⊥ 半径 OP', 14, C.blue, 'middle', true))),
  },
  {
    note: '❓ なぜ接線は半径に垂直なの？ 接線上の点は、接点 P以外はみんな円の外にあります。だから P が、中心 O にいちばん近い点です。いちばん近い点への線は垂直になります。',
    add: [ln(zO[0], zO[1], 225, 60, C.gray, true, 1.4), ln(zO[0], zO[1], 190, 24, C.gray, true, 1.4), lb(228, 78, '外の点は\n遠い', 10, C.gray, 'start'), ...band(150, lb(160, 170, '接線上で O にいちばん近い点 ＝ P', 13, C.blue, 'middle', true), lb(160, 198, '最短の距離 → 垂直', 14, C.blue, 'middle', true))],
  },
  {
    note: '接線の作図は3ステップです。①円の中心 O を求める ②O と P を結んで半径 OP をかく ③P を通って OP に垂直な直線（垂線）を引く。これが P での接線です。',
    add: fresh(bx(20, 20, 280, 34, '① 円の中心 O を求める', C.green, FILL.green, 14), bx(20, 66, 280, 34, '② O と P を結ぶ', C.blue, FILL.blue, 14), bx(20, 112, 280, 34, '③ P で OP に垂直な線を引く', C.purple, FILL.purple, 14), ...band(160, lb(160, 190, '① も垂直二等分線を2回', 13, C.red, 'middle', true), lb(160, 214, '作図に使った線は消さずに残す', 12, C.gray))),
  },
  {
    note: '❓ ③の垂線はどうかくの？ P を中心に同じ半径の円で OP の延長線上に2点 Q、R をとり、QR の垂直二等分線をかきます。QR の真ん中は P なので、その線は P を通ります。',
    add: fresh(ln(60, 74, 260, 74, C.gray, false, 1.6), ci(90, 74, 3, undefined, C.red, C.red), ci(160, 74, 3, undefined, C.blue, C.blue), ci(120, 74, 3, undefined, C.ink, C.ink), ci(200, 74, 3, undefined, C.ink, C.ink), ln(160, 10, 160, 138, C.purple, false, 2.5), lb(90, 88, 'O', 11, C.red, 'middle', true), lb(168, 88, 'P', 11, C.blue, 'start', true), lb(120, 88, 'Q', 11, C.ink, 'middle', true), lb(200, 88, 'R', 11, C.ink, 'middle', true), ...band(150, lb(160, 170, 'PQ ＝ PR、QR の垂直二等分線は P を通る', 12, C.purple, 'middle', true), lb(160, 198, 'これが P での接線', 14, C.purple, 'middle', true))),
  },
]);

// ── 円錐の展開図 ──
const coneSide = (): DiagramElement[] => [
  pg([[160, 16], [127, 110], [193, 110]], C.gray, FILL.warm),
  ln(127, 110, 193, 110, C.blue, false, 3),
  ln(160, 16, 193, 110, C.red, false, 2.5),
  lb(190, 62, '母線 9cm', 10, C.red, 'start'),
  lb(160, 124, '底面の半径 3cm', 10, C.blue),
];
const secD = (): DiagramElement[] => [sc(160, 16, 100, 210, 330, C.red, RD), lb(108, 32, '母線 9cm', 10, C.red, 'end')];
const ensuiten: DiagramFigure = show([
  {
    note: '底面の半径が 3cm、母線（ぼせん）の長さが 9cm の円錐があります。母線とは、頂点から底面の円周までの、側面にそった線のことです。',
    add: [...coneSide(), ...band(150, lb(160, 180, '半径 3cm、母線 9cm の円錐', 14, C.blue, 'middle', true))],
  },
  {
    note: '側面を、母線にそって1本切り開いて広げます。すると、円錐の側面は、ぴったりおうぎ形になります。',
    add: fresh(...secD(), ...band(150, lb(160, 180, '側面を開くと、おうぎ形', 14, C.red, 'middle', true))),
  },
  {
    note: '❓ なぜおうぎ形になるの？ 母線はどれも頂点から同じ長さ（9cm）です。頂点から同じ距離にある点は円の一部にならぶので、側面は半径9cmの円の一部、つまりおうぎ形になります。',
    add: fresh(...secD(), ln(160, 16, 73.4, 66, C.red, false, 2), ln(160, 16, 246.6, 66, C.red, false, 2), ...band(150, lb(160, 170, '半径は母線の長さ 9cm', 13, C.red, 'middle', true), lb(160, 198, '（底面の半径 3cm ではない）', 12, C.gray))),
  },
  {
    note: '❓ このおうぎ形の弧（こ）の長さは？ 側面のふち（弧）は、もとの円錐では底面の円のまわりにあたります。つまり、弧の長さ ＝ 底面の円周です。',
    add: fresh(...secD(), ...band(150, bx(20, 158, 280, 28, '弧の長さ ＝ 底面の円周', C.blue, FILL.blue, 15), lb(160, 210, '2π × 3 ＝ 6π cm', 15, C.blue, 'middle', true))),
  },
  {
    note: '❓ では中心角はどう決まるの？ このおうぎ形の弧は、半径9cmの円全体の円周（2π×9＝18π）の何分の1かで決まります。6π ÷ 18π ＝ 1/3 なので、中心角は 360° の 1/3 です。',
    add: fresh(...secD(), lb(160, 60, '？°', 14, C.purple, 'middle', true), ...band(150, lb(160, 168, '弧 6π ÷ 円周 18π ＝ 1／3', 13, C.purple, 'middle', true), lb(160, 198, '中心角 ＝ 360° × 1／3 ＝ 120°', 14, C.purple, 'middle', true))),
  },
  {
    note: '❓ 一般の式にすると？ 弧は 2π×r、円周は 2π×l（r：底面の半径、l：母線）。中心角 ＝ 360°×2πr÷2πl。2π が消えて、中心角 ＝ 360° × r ÷ l になります。',
    add: fresh(bx(20, 20, 280, 34, '中心角 ＝ 360° × 2πr ÷ 2πl', C.gray, FILL.gray, 14), lb(160, 76, '2π が約分で消える', 13, C.purple, 'middle', true), bx(20, 96, 280, 34, '中心角 ＝ 360° × r ÷ l', C.green, FILL.green, 16), ...band(146, lb(160, 170, 'r ＝ 3、l ＝ 9 を入れる', 13, C.gray, 'middle', true), lb(160, 200, '360° × 3 ÷ 9 ＝ 120°', 15, C.red, 'middle', true))),
  },
  {
    note: '❓ 側面積はどうなるの？ おうぎ形の面積は「円の面積 × 中心角÷360°」です。半径9の円の面積 π×9² ＝ 81π の 1/3 で、27π cm² です。',
    add: fresh(sc(160, 16, 100, 210, 330, C.red, RD), lb(160, 60, '27π', 15, C.red, 'middle', true), ...band(150, lb(160, 165, 'π × 9² × 120／360', 13, C.gray, 'middle', true), bx(30, 182, 260, 34, '81π × 1／3 ＝ 27π cm²', C.red, FILL.red, 15))),
  },
  {
    note: '❓ 式にすると近道があるの？ 側面積 ＝ π×l²×（r÷l） ＝ π × l × r。だから π × 母線 × 底面の半径 で求められます。π×9×3 ＝ 27π となり、上の計算と一致します。',
    add: fresh(bx(20, 20, 280, 34, '側面積 ＝ π × l² × （r ÷ l）', C.gray, FILL.gray, 14), lb(160, 76, 'l が1つ約分で消える', 13, C.purple, 'middle', true), bx(20, 96, 280, 34, '側面積 ＝ π × l × r', C.green, FILL.green, 16), ...band(146, lb(160, 175, 'π × 9 × 3 ＝ 27π cm²', 15, C.red, 'middle', true))),
  },
  {
    note: '底面は半径3cmの円なので、面積は π×3² ＝ 9π cm² です。表面積は「側面積 ＋ 底面積」なので、27π ＋ 9π ＝ 36π cm² になります。',
    add: fresh(...coneSide(), ...band(150, lb(160, 165, '側面積 27π ＋ 底面積 9π', 14, C.gray, 'middle', true), bx(40, 182, 240, 34, '表面積 ＝ 36π cm²', C.green, FILL.green, 16))),
  },
  {
    note: '❓ 検算のしかたは？ 中心角 120° のおうぎ形の弧の長さを、もう一度計算します。2π×9×120/360 ＝ 6π。これが底面の円周 2π×3 ＝ 6π と同じなら、正しい展開図です。',
    add: fresh(...secD(), ...band(150, lb(160, 165, '弧 ＝ 2π × 9 × 120／360 ＝ 6π', 13, C.blue, 'middle', true), lb(160, 195, '底面の円周 ＝ 2π × 3 ＝ 6π ✓', 14, C.green, 'middle', true))),
  },
  {
    note: '逆に、母線 12cm で中心角 150° の円錐の底面の半径は？ 150 ＝ 360 × r ÷ 12 なので、r ＝ 150×12÷360 ＝ 5cm です。',
    add: fresh(bx(20, 24, 280, 34, '150 ＝ 360 × r ÷ 12', C.gray, FILL.gray, 15), lb(160, 78, '両辺に 12 をかけて 360 でわる', 12, C.purple, 'middle', true), bx(20, 96, 280, 34, 'r ＝ 150 × 12 ÷ 360', C.blue, FILL.blue, 15), ...band(146, bx(60, 164, 200, 34, 'r ＝ 5cm', C.green, FILL.green, 17))),
  },
  {
    note: '❓ まちがえやすい所は？ おうぎ形の半径は底面の半径ではなく、母線の長さです。また、表面積には底面の円も入れることをわすれないようにしましょう。',
    add: fresh(bx(20, 20, 280, 34, 'おうぎ形の半径 ＝ 母線', C.red, FILL.red, 15), bx(20, 66, 280, 34, '弧の長さ ＝ 底面の円周', C.blue, FILL.blue, 15), bx(20, 112, 280, 34, '表面積 ＝ 側面積 ＋ 底面積', C.green, FILL.green, 15), lb(160, 176, '底面積を足しわすれない', 13, C.red, 'middle', true), lb(160, 206, '例 底面 2cm・母線 8cm → 中心角 90°', 12, C.gray)),
  },
]);

// ── 三平方で立体の高さを求める ──
const cSide = (): DiagramElement[] => [
  pg([[160, 20], [120, 116], [200, 116]], C.gray, FILL.warm),
  ln(160, 20, 160, 116, C.purple, true, 2.5),
  ln(160, 116, 200, 116, C.blue, false, 3),
  ln(160, 20, 200, 116, C.red, false, 2.5),
  bx(152, 108, 8, 8, undefined, C.gray),
];
const sqTop = (): DiagramElement[] => [
  pg([[30, 20], [120, 20], [120, 110], [30, 110]], C.gray, FILL.warm),
  ln(30, 20, 120, 110, C.gray, true, 1.4), ln(120, 20, 30, 110, C.gray, true, 1.4),
  dot([75, 65], C.red),
];
const pyrSide = (): DiagramElement[] => [
  pg([[250, 35], [186.4, 110], [313.6, 110]], C.gray, FILL.warm),
  ln(250, 35, 250, 110, C.purple, true, 2.5),
  ln(250, 110, 313.6, 110, C.blue, false, 3),
  ln(250, 35, 313.6, 110, C.red, false, 2.5),
];
const takasa: DiagramFigure = show([
  {
    note: '円錐や角錐の「高さ」は、頂点から底面に垂直にまっすぐ下ろした線の長さです。この高さを、三平方の定理で求めます。',
    add: [...cSide(), lb(154, 68, '高さ h', 11, C.purple, 'end', true), lb(180, 128, '半径 r', 11, C.blue), lb(190, 64, '母線 l', 11, C.red, 'start'), ...band(150, lb(160, 180, '円錐を真横から見た図', 13, C.gray, 'middle', true))],
  },
  {
    note: '❓ なぜ直角三角形ができるの？ 高さは底面に垂直に下ろした線だから、底面と 90° で交わります。頂点の真下は底面の円の中心なので、そこから縁までの長さが半径 r です。',
    add: fresh(...cSide(), lb(154, 68, '高さ h', 11, C.purple, 'end', true), lb(180, 128, '半径 r', 11, C.blue), lb(190, 64, '母線 l', 11, C.red, 'start'), ...band(150, lb(160, 170, '高さ h、半径 r、母線 l で', 13, C.purple, 'middle', true), lb(160, 198, '直角三角形ができる', 14, C.purple, 'middle', true))),
  },
  {
    note: '❓ 母線はこの三角形のどの辺なの？ 直角の向かい側にある辺なので、斜辺（しゃへん）です。斜辺は三角形でいちばん長い辺で、直角をはさむ h と r の外側にあります。',
    add: [...band(150, bx(30, 160, 260, 32, '斜辺 ＝ 母線 l', C.red, FILL.red, 16), lb(160, 210, '直角をはさむ辺 ＝ 高さ h と 半径 r', 12, C.gray))],
  },
  {
    note: '❓ 三平方の定理を使うと？ 直角をはさむ2辺の2乗の和が、斜辺の2乗になります。だから h² ＋ r² ＝ l² です。これが円錐の高さの公式のもとです。',
    add: fresh(...cSide(), ...band(150, bx(20, 160, 280, 34, 'h² ＋ r² ＝ l²', C.purple, FILL.purple, 18), lb(160, 212, '（三平方の定理）', 12, C.gray))),
  },
  {
    note: 'r ＝ 5cm、l ＝ 13cm の円錐で使ってみましょう。h² ＋ 5² ＝ 13² なので、h² ＝ 169 − 25 ＝ 144。h ＝ 12cm です。',
    add: fresh(...cSide(), lb(154, 68, '12', 11, C.purple, 'end', true), lb(180, 128, '5', 11, C.blue), lb(190, 64, '13', 11, C.red, 'start'), ...band(150, lb(160, 165, 'h² ＝ 13² − 5² ＝ 169 − 25 ＝ 144', 13, C.gray, 'middle', true), bx(40, 182, 240, 34, 'h ＝ 12cm', C.green, FILL.green, 17))),
  },
  {
    note: '❓ 5、12、13 は、なぜぴったりの数なの？ 5² ＋ 12² ＝ 25 ＋ 144 ＝ 169 ＝ 13² が成り立つ、有名な直角三角形の3辺の組だからです。3、4、5 や 6、8、10 とあわせて覚えておくと、計算が速くなります。',
    add: fresh(bx(20, 20, 280, 34, '3 ： 4 ： 5', C.blue, FILL.blue, 15), bx(20, 66, 280, 34, '5 ： 12 ： 13', C.green, FILL.green, 15), bx(20, 112, 280, 34, '8 ： 15 ： 17', C.purple, FILL.purple, 15), lb(160, 176, '3辺がぜんぶ整数の直角三角形', 13, C.gray, 'middle', true), lb(160, 206, '6、8、10 は 3、4、5 の 2 倍', 12, C.red)),
  },
  {
    note: '高さがわかったので、体積を求めましょう。体積 ＝ 底面積 × 高さ ÷ 3 ＝ π×5²×12÷3 ＝ 100π cm³ です。',
    add: fresh(...cSide(), lb(154, 68, '12', 11, C.purple, 'end', true), lb(180, 128, '5', 11, C.blue), ...band(150, lb(160, 165, 'π × 5² × 12 ÷ 3', 14, C.gray, 'middle', true), bx(40, 182, 240, 34, '体積 ＝ 100π cm³', C.green, FILL.green, 17))),
  },
  {
    note: '❓ なぜ「÷3」なの？ 円柱と円錐で、底面と高さが同じなら、円錐の体積は円柱のちょうど 1/3 になるからです（実験でも、円錐の容器3杯分で円柱がいっぱいになります）。',
    add: fresh(bx(20, 20, 280, 34, '円柱 ＝ 底面積 × 高さ', C.blue, FILL.blue, 15), bx(20, 66, 280, 34, '円錐 ＝ 円柱の 1／3', C.green, FILL.green, 15), lb(160, 130, '（底面と高さが同じとき）', 12, C.gray), ...band(150, lb(160, 178, '底面積 × 高さ ÷ 3', 15, C.red, 'middle', true))),
  },
  {
    note: '次は正四角錐（せいしかくすい）です。底面が1辺6cmの正方形で、稜（りょう）の長さが √43cm とします。稜とは、頂点から底面の角までの辺です。まず底面を真上から見ます。',
    add: fresh(...sqTop(), lb(75, 116, '1辺 6cm', 10, C.gray), lb(128, 65, '← 中心が頂点の真下', 11, C.red, 'start'), ...band(150, lb(160, 180, '底面は 1辺6cm の正方形', 13, C.gray, 'middle', true))),
  },
  {
    note: '❓ 三角形の底辺には、対角線のどの長さを使うの？ 正四角錐の頂点は、底面の真ん中の真上にあります。だから高さの足は中心で、中心から角までの長さ、つまり対角線の半分を使います。',
    add: fresh(...sqTop(), ln(75, 65, 120, 20, C.blue, false, 3), ...band(150, lb(160, 170, '頂点の真下 ＝ 底面の中心', 13, C.red, 'middle', true), lb(160, 198, '使う長さ ＝ 中心から角まで ＝ 対角線の半分', 12, C.blue, 'middle', true))),
  },
  {
    note: '❓ 対角線の長さは？ 対角線は、1辺6cmの直角二等辺三角形の斜辺です。三平方の定理で 6² ＋ 6² ＝ 72、対角線 ＝ √72 ＝ 6√2cm。その半分は 3√2cm です。',
    add: fresh(...sqTop(), ln(75, 65, 120, 20, C.blue, false, 3), ...band(150, lb(160, 165, '対角線 ＝ √(6² ＋ 6²) ＝ √72 ＝ 6√2', 12, C.gray, 'middle', true), lb(160, 195, '半分 ＝ 3√2 cm（2乗すると 18）', 14, C.blue, 'middle', true))),
  },
  {
    note: '横から見ると、高さ h と、底面の中心から角までの 3√2cm と、稜 √43cm で直角三角形ができます。稜が斜辺です。',
    add: fresh(...pyrSide(), lb(244, 72, 'h', 12, C.purple, 'end', true), lb(282, 124, '3√2', 11, C.blue), lb(316, 44, '稜 √43', 11, C.red, 'end'), bx(242, 102, 8, 8, undefined, C.gray), ...band(150, lb(160, 178, '横から見た図', 13, C.gray, 'middle', true))),
  },
  {
    note: '❓ h はいくつ？ h² ＋ (3√2)² ＝ (√43)² なので、h² ＋ 18 ＝ 43。h² ＝ 25 で、h ＝ 5cm です。2乗すると √ が消えるので、計算がかんたんになります。',
    add: fresh(...pyrSide(), lb(244, 72, '5', 12, C.purple, 'end', true), ...band(150, lb(160, 165, 'h² ＋ 18 ＝ 43', 14, C.gray, 'middle', true), bx(40, 182, 240, 34, 'h² ＝ 25 → h ＝ 5cm', C.green, FILL.green, 16))),
  },
  {
    note: 'まとめです。円錐は「高さ・半径・母線」、正四角錐は「高さ・底面の対角線の半分・稜」で直角三角形をつくります。使う底面の長さがちがうことに注意します。',
    add: fresh(bx(20, 20, 280, 40, '円錐\nh² ＋ 半径² ＝ 母線²', C.blue, FILL.blue, 13), bx(20, 74, 280, 40, '正四角錐\nh² ＋（対角線の半分）² ＝ 稜²', C.green, FILL.green, 13), lb(160, 146, '体積 ＝ 底面積 × 高さ ÷ 3', 14, C.red, 'middle', true), lb(160, 180, 'まず「直角をつくる3つの線」を見つける', 12, C.gray, 'middle', true)),
  },
]);

// ── 円錐の容器の水 ──
const cw = (level: number): DiagramElement[] => {
  // 頂点(160,130)を下にした円錐。上ふち y=20（幅120）。level は高さの割合。
  const y = 130 - 110 * level;
  const hw = 60 * level;
  return [
    pg([[100, 20], [220, 20], [160, 130]], C.gray, FILL.warm),
    pg([[160 - hw, y], [160 + hw, y], [160, 130]], C.blue, 'rgba(2,132,199,0.35)'),
  ];
};
const suimen: DiagramFigure = show([
  {
    note: '頂点を下にした円錐の容器（容積 270cm³）に、高さの 2/3 まで水を入れました。水の量と、あと何 cm³ 入るかを求めます。',
    add: [...cw(2 / 3), lb(240, 50, '容積 270cm³', 11, C.gray, 'start'), lb(240, 90, '水面は高さの\n2／3', 11, C.blue, 'start'), ...band(150, lb(160, 180, '水の量は？ あと入る量は？', 14, C.blue, 'middle', true))],
  },
  {
    note: '❓ 水の部分は、どんな形なの？ 頂点の側から水面までの部分も、円錐の形をしています。容器全体の円錐と、同じ形で小さくしたものになっています。',
    add: [ln(100, 20, 160, 130, C.red, false, 2), ln(220, 20, 160, 130, C.red, false, 2), ...band(150, lb(160, 175, '水の部分 ＝ 容器と同じ形の小さい円錐', 13, C.red, 'middle', true))],
  },
  {
    note: '❓ なぜ同じ形（相似）と言えるの？ 水面は底（頂点側）から見て、容器のふちと平行です。どちらも同じ角度で頂点から広がるので、水の円錐は容器の円錐を縮めた形になります。',
    add: fresh(...cw(2 / 3), ln(100, 20, 220, 20, C.purple, false, 2), ln(120, 56.7, 200, 56.7, C.purple, false, 2), lb(160, 12, 'ふち', 10, C.purple), ...band(150, lb(160, 170, '水面 // 容器のふち', 13, C.purple, 'middle', true), lb(160, 198, '頂点の角は共通 → 相似', 14, C.purple, 'middle', true))),
  },
  {
    note: '❓ 相似比はいくつ？ 水の深さは容器の高さの 2/3 なので、高さの比は 2：3 です。相似では半径の比も同じなので、相似比は 2：3 です。',
    add: fresh(...cw(2 / 3), ln(250, 56.7, 250, 130, C.blue, false, 2.5), ln(275, 20, 275, 130, C.gray, false, 2.5), lb(246, 95, '2', 13, C.blue, 'end', true), lb(279, 75, '3', 13, C.gray, 'start', true), ...band(150, lb(160, 178, '相似比 ＝ 高さの比 ＝ 2 ： 3', 15, C.blue, 'middle', true))),
  },
  {
    note: '❓ では体積の比は？ 相似比が 2：3 のとき、長さの比は 2：3、面積の比は 2²：3² ＝ 4：9 です。体積は縦・横・高さの3方向がのびるので 2³：3³ ＝ 8：27 になります。',
    add: fresh(bx(20, 20, 280, 30, '長さの比　　2 ： 3', C.blue, FILL.blue, 14), bx(20, 62, 280, 30, '面積の比　　2² ： 3² ＝ 4 ： 9', C.green, FILL.green, 14), bx(20, 104, 280, 30, '体積の比　　2³ ： 3³ ＝ 8 ： 27', C.purple, FILL.purple, 14), ...band(146, lb(160, 175, '3方向にのびるから 3乗', 14, C.red, 'middle', true), lb(160, 205, '長さ→1乗　面積→2乗　体積→3乗', 12, C.gray))),
  },
  {
    note: '❓ 8：27 をどう使うの？ 容器全体が 27 にあたるとき、水の部分は 8 にあたります。容積 270cm³ を 27 等分すると 1 つぶんは 10cm³ です。',
    add: fresh(bx(20, 24, 280, 34, '全体 270cm³ ＝ 27 ぶん', C.gray, FILL.gray, 15), lb(160, 76, '270 ÷ 27 ＝ 10（1ぶん）', 13, C.purple, 'middle', true), bx(20, 96, 130, 34, '水 8 ぶん', C.blue, FILL.blue, 14), bx(170, 96, 130, 34, 'あき 19 ぶん', C.gray, FILL.gray, 14), ...band(146, lb(160, 176, '27 － 8 ＝ 19', 13, C.gray, 'middle', true))),
  },
  {
    note: '水の量は 8 ぶんなので 10×8 ＝ 80cm³ です。式にすると 270 × 8 ÷ 27 ＝ 80cm³ です。',
    add: fresh(...cw(2 / 3), ...band(150, lb(160, 165, '270 × 8 ÷ 27 ＝ 10 × 8', 14, C.gray, 'middle', true), bx(40, 182, 240, 34, '水の量 ＝ 80cm³', C.blue, FILL.blue, 17))),
  },
  {
    note: '❓ あと何 cm³ 入るの？ 容器全体（270）から水の量（80）をひきます。270−80 ＝ 190cm³。上にあいている部分は円錐ではなく円錐台なので、ひき算で求めるのがかんたんです。',
    add: fresh(...cw(2 / 3), ...band(150, lb(160, 165, '全体 270 − 水 80', 14, C.gray, 'middle', true), bx(40, 182, 240, 34, 'あと 190cm³ 入る', C.green, FILL.green, 17))),
  },
  {
    note: '別の例です。容積 400cm³ の容器に、高さの半分まで水を入れると、相似比は 1：2、体積比は 1³：2³ ＝ 1：8 です。水の量は 400÷8 ＝ 50cm³ になります。',
    add: fresh(...cw(0.5), ...band(150, lb(160, 165, '高さの比 1：2 → 体積の比 1：8', 13, C.gray, 'middle', true), bx(40, 182, 240, 34, '400 ÷ 8 ＝ 50cm³', C.blue, FILL.blue, 16))),
  },
  {
    note: '❓ 高さが半分なのに、体積は 1/2 でないのはなぜ？ 高さだけでなく、半径も半分になるからです。縦も横も高さも半分になると、体積は 1/2 × 1/2 × 1/2 ＝ 1/8 になります。',
    add: fresh(bx(20, 20, 280, 34, '高さ 1／2', C.blue, FILL.blue, 15), bx(20, 64, 280, 34, '半径 1／2', C.blue, FILL.blue, 15), bx(20, 108, 280, 34, '（もう 1つの方向も 1／2）', C.blue, FILL.blue, 13), lb(160, 172, '1／2 × 1／2 × 1／2 ＝ 1／8', 15, C.red, 'middle', true), lb(160, 204, '体積は 1／2 ではない', 13, C.gray)),
  },
  {
    note: 'もう1問。容積 810cm³ の容器に、高さの 1/3 まで水を入れると、相似比 1：3、体積比 1：27。水の量は 810 ÷ 27 ＝ 30cm³ です。',
    add: fresh(...cw(1 / 3), ...band(150, lb(160, 165, '相似比 1：3 → 体積比 1：27', 13, C.gray, 'middle', true), bx(40, 182, 240, 34, '810 ÷ 27 ＝ 30cm³', C.blue, FILL.blue, 16))),
  },
  {
    note: '❓ 気をつけることは？ 面積の比（2乗）と体積の比（3乗）を取りちがえないことです。相似比 2：3 のとき、表面積の比は 4：9、体積の比は 8：27 になります。',
    add: fresh(bx(20, 20, 280, 34, '相似比 2 ： 3', C.gray, FILL.gray, 15), bx(20, 66, 280, 34, '表面積の比 4 ： 9（2乗）', C.green, FILL.green, 14), bx(20, 112, 280, 34, '体積の比 8 ： 27（3乗）', C.purple, FILL.purple, 14), lb(160, 176, '水の量は体積なので、3乗の比', 13, C.red, 'middle', true), lb(160, 206, '「あと入る量」は全体 − 水の量', 12, C.gray)),
  },
]);

// ── 少なくとも1つ（さいころ36通り） ──
const gx = 100, gy = 24, cw6 = 16;
const cell = (a: number, b: number, color: string, fill: string): DiagramElement =>
  bx(gx + (b - 1) * cw6, gy + (a - 1) * cw6, cw6, cw6, undefined, color, fill);
const grid = (pred?: (a: number, b: number) => [string, string] | null): DiagramElement[] => {
  const out: DiagramElement[] = [];
  for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) {
    const c = pred?.(a, b);
    out.push(cell(a, b, c ? c[0] : C.gray, c ? c[1] : FILL.gray));
  }
  return out;
};
const gridLabels = (): DiagramElement[] => [
  lb(gx - 12, gy + 48, '大', 11, C.gray, 'end', true), lb(gx + 48, gy - 4, '小', 11, C.gray, 'middle', true),
];
const suku: DiagramFigure = show([
  {
    note: '大小2つのさいころを投げるとき、「少なくとも1つは 6 の目が出る」確率を求めます。目の出方は全部で 6×6 ＝ 36 通りで、下の表のマス1つが1通りです。',
    add: [...grid(), ...gridLabels(), ...band(122, lb(160, 148, '36 通り（大の目 × 小の目）', 13, C.gray, 'middle', true), lb(160, 176, '少なくとも1つ 6 が出る確率は？', 14, C.blue, 'middle', true))],
  },
  {
    note: '「少なくとも1つは 6」を直接数えるとどうなるでしょう。6 の行（大が6）と 6 の列（小が6）に色をつけます。赤いマスの数を数えることになります。',
    add: fresh(...grid((a, b) => (a === 6 || b === 6 ? [C.red, FILL.red] : null)), ...gridLabels(), ...band(122, lb(160, 150, '赤 ＝ 6 が少なくとも1つ', 13, C.red, 'middle', true))),
  },
  {
    note: '❓ 直接数えるのが、なぜめんどうなの？ 「6 が1つだけ」「6 が2つ」と場合が分かれるうえ、（6，6）のマスが行と列でだぶって数えやすいからです。',
    add: [cell(6, 6, C.purple, YE), ...band(122, lb(160, 150, '（6，6）は行と列で2回数えやすい', 13, C.purple, 'middle', true), lb(160, 178, 'まちがいのもと', 13, C.gray))],
  },
  {
    note: '❓ 数えやすくするには？ 反対の場合を考えます。「1つも 6 が出ない」ときのマスを数えます。それは、青いマスです。',
    add: fresh(...grid((a, b) => (a <= 5 && b <= 5 ? [C.blue, FILL.blue] : null)), ...gridLabels(), ...band(122, lb(160, 150, '青 ＝ 6 が1つも出ない', 13, C.blue, 'middle', true))),
  },
  {
    note: '❓ 青いマスは何個？ 大のさいころは 1〜5 の5通り、小のさいころも 1〜5 の5通りなので、かけ算で 5×5 ＝ 25 通りです。全体 36 通りのうち 25 通りなので、確率は 25/36 です。',
    add: [...band(122, bx(20, 132, 280, 30, '5 × 5 ＝ 25 通り', C.blue, FILL.blue, 15), lb(160, 184, '1つも 6 が出ない確率 ＝ 25／36', 14, C.blue, 'middle', true))],
  },
  {
    note: '❓ なぜ「1 からひく」と答えが出るの？ 「少なくとも1つ 6 が出る」と「1つも 6 が出ない」は、どちらかが必ず起こり、同時には起こりません。あわせると全体で、確率は 1 になるからです。',
    add: fresh(bx(20, 20, 280, 34, '起こる ＋ 起こらない ＝ 全体（1）', C.purple, FILL.purple, 14), lb(160, 76, '全体 36 通り ＝ 赤 11 ＋ 青 25', 13, C.gray, 'middle', true), ...grid((a, b) => (a <= 5 && b <= 5 ? [C.blue, FILL.blue] : [C.red, FILL.red])).map((e) => shiftY(e, 100)), lb(160, 232, '（下の図は 36 マスの色分け）', 10, C.gray)),
  },
  {
    note: 'だから、少なくとも1つ 6 が出る確率は 1 − 25/36 ＝ 36/36 − 25/36 ＝ 11/36 です。',
    add: fresh(...grid((a, b) => (a <= 5 && b <= 5 ? [C.blue, FILL.blue] : [C.red, FILL.red])), ...gridLabels(), ...band(122, lb(160, 140, '1 − 25／36 ＝ 36／36 − 25／36', 13, C.gray, 'middle', true), bx(50, 160, 220, 34, '11／36', C.green, FILL.green, 18))),
  },
  {
    note: '❓ 答えは合っているの？ 6 の行に 6 マス、6 の列に 6 マスありますが、（6，6）が両方にふくまれるので 6＋6−1 ＝ 11 マス。直接数えても 11 通りで、11/36 と一致します。',
    add: fresh(...grid((a, b) => (a === 6 || b === 6 ? [C.red, FILL.red] : null)), ...gridLabels(), cell(6, 6, C.purple, YE), ...band(122, lb(160, 148, '6 ＋ 6 − 1（ダブり）＝ 11 通り', 13, C.red, 'middle', true), lb(160, 176, '11／36 ✓', 15, C.green, 'middle', true))),
  },
  {
    note: '別の例。3枚のコインを投げて「少なくとも1枚は表」です。全部で 2×2×2 ＝ 8 通り。1つも表が出ないのは「裏裏裏」の1通りだけです。',
    add: fresh(...['表表表', '表表裏', '表裏表', '表裏裏', '裏表表', '裏表裏', '裏裏表', '裏裏裏'].map((t, i) => bx(20 + (i % 4) * 72, 20 + Math.floor(i / 4) * 44, 64, 34, t, i === 7 ? C.blue : C.gray, i === 7 ? FILL.blue : FILL.gray, 13)), ...band(122, lb(160, 148, '8 通り。青い「裏裏裏」だけが表なし', 13, C.blue, 'middle', true))),
  },
  {
    note: '❓ 少なくとも1枚表になる確率は？ 表なしの確率が 1/8 なので、1 − 1/8 ＝ 7/8 です。直接数えると 7 通りをかぞえることになり、逆から考えたほうがずっと楽です。',
    add: [...band(122, bx(30, 134, 260, 30, '1 − 1／8 ＝ 7／8', C.green, FILL.green, 16), lb(160, 186, '7 通りを数えるより、1 通りを数える', 12, C.gray, 'middle', true))],
  },
  {
    note: '目の和が 3 以上になる確率は？ 直接数えると 35 通りもあります。でも「3 以上にならない」のは、和が 2 のとき（1，1）の 1 通りだけです。',
    add: fresh(...grid((a, b) => (a === 1 && b === 1 ? [C.blue, FILL.blue] : null)), ...gridLabels(), ...band(122, lb(160, 148, '3 以上にならないのは（1，1）だけ', 13, C.blue, 'middle', true), bx(40, 164, 240, 30, '1 − 1／36 ＝ 35／36', C.green, FILL.green, 15))),
  },
  {
    note: '少なくとも1つは偶数、の場合。1つも偶数が出ないのは、2つとも奇数のとき。大の奇数 3通り × 小の奇数 3通り ＝ 9 通り（青いマス）。1 − 9/36 ＝ 3/4 です。',
    add: fresh(...grid((a, b) => (a % 2 === 1 && b % 2 === 1 ? [C.blue, FILL.blue] : null)), ...gridLabels(), ...band(122, lb(160, 146, '3 × 3 ＝ 9 通り（2つとも奇数）', 13, C.blue, 'middle', true), bx(40, 164, 240, 30, '1 − 9／36 ＝ 3／4', C.green, FILL.green, 15))),
  },
  {
    note: '❓ どんなときに「1 からひく」を使うの？ 問題に「少なくとも」「〜以上」「1つは」などの言葉があるときが目印です。まず「起こらない場合」が数えやすいかを考えましょう。',
    add: fresh(bx(20, 20, 280, 34, '「少なくとも」「1つは」', C.purple, FILL.purple, 15), bx(20, 66, 280, 34, '→ 反対の場合を数える', C.blue, FILL.blue, 15), bx(20, 112, 280, 34, '→ 1 から ひく', C.green, FILL.green, 15), lb(160, 176, '全体の場合の数を、まず確かめる', 13, C.gray, 'middle', true), lb(160, 206, '答えは約分する', 12, C.gray)),
  },
]);

function shiftY(e: DiagramElement, dy: number): DiagramElement {
  if (e.t === 'box') return { ...e, y: e.y + dy, x: e.x };
  return e;
}

// ── 大小2つのさいころの目と直線・座標の確率 ──
const ox = 80, oy = 132, u = 16;
const gp = (a: number, b: number): P => [ox + u * a, oy - u * b];
const axes = (): DiagramElement[] => [
  ar(ox, oy, ox + 7.4 * u, oy, C.gray), ar(ox, oy, ox, oy - 7.6 * u, C.gray),
  lb(ox + 7.4 * u + 8, oy, 'a', 11, C.gray, 'start', true), lb(ox, oy - 7.6 * u - 6, 'b', 11, C.gray, 'middle', true),
  lb(ox - 8, oy + 8, '0', 9, C.gray, 'end'),
];
const pts = (hi?: (a: number, b: number) => boolean): DiagramElement[] => {
  const out: DiagramElement[] = [];
  for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) {
    const on = hi?.(a, b);
    const p = gp(a, b);
    out.push(ci(p[0], p[1], on ? 4.5 : 3, undefined, on ? C.red : C.gray, on ? C.red : FILL.gray));
  }
  return out;
};
const sikaku: DiagramFigure = show([
  {
    note: '大きいさいころの目を a、小さいさいころの目を b とします。（a，b）の組は 6×6 ＝ 36 通りです。この組を、座標平面の点 P（a，b）と考えます。',
    add: [...axes(), ...pts(), ...band(150, lb(160, 180, '点 P（a，b）は全部で 36 個', 14, C.blue, 'middle', true))],
  },
  {
    note: '❓ なぜ座標の点で考えるの？ 直線の式は、「点がその直線の上にある」という条件を式に表したものだからです。点として見ると、直線上にのる点を目で確かめられます。',
    add: [...band(150, lb(160, 170, '直線の式 ＝ 点が直線上にある条件', 13, C.purple, 'middle', true), lb(160, 198, '36 個の点のうち、直線上の点を数える', 13, C.gray, 'middle', true))],
  },
  {
    note: '❓ 点 P が直線 y ＝ x ＋ 1 の上にあるとは？ P の座標（a，b）が、この式に当てはまることです。つまり b ＝ a ＋ 1 が成り立つことです。直線をかいてみましょう。',
    add: fresh(...axes(), ln(gp(0, 1)[0], gp(0, 1)[1], gp(6.6, 7.6)[0], gp(6.6, 7.6)[1], C.blue, false, 2), ...pts(), ...band(150, lb(160, 175, 'b ＝ a ＋ 1 を満たす点をさがす', 14, C.blue, 'middle', true))),
  },
  {
    note: '❓ どの点が直線の上にあるの？ a を 1 から順に入れます。a＝1 のとき b＝2、a＝2 のとき b＝3、…、a＝5 のとき b＝6。順に赤く印をつけます。',
    add: fresh(...axes(), ln(gp(0, 1)[0], gp(0, 1)[1], gp(6.6, 7.6)[0], gp(6.6, 7.6)[1], C.blue, false, 2), ...pts((a, b) => b === a + 1), ...band(150, lb(160, 170, '（1，2）（2，3）（3，4）（4，5）（5，6）', 12, C.red, 'middle', true), lb(160, 198, '5 個', 14, C.red, 'middle', true))),
  },
  {
    note: '❓ a＝6 はなぜ数えないの？ a＝6 のとき b＝7 ですが、さいころの目に 7 はありません。だから、点 (6，7) は表の外で、数えません。',
    add: [lb(192, 26, '(6，7) は\nない', 10, C.gray, 'start'), ...band(150, lb(160, 178, '目は 1〜6 だけ。b＝7 は起こらない', 13, C.gray, 'middle', true))],
  },
  {
    note: '確率は（あてはまる組の数）÷（全部の組の数）です。5 ÷ 36 ＝ 5/36。全体は 36 通りですから、約分はできません。',
    add: [...band(150, bx(30, 160, 260, 34, '確率 ＝ 5／36', C.green, FILL.green, 17), lb(160, 210, '5 通り ÷ 全部 36 通り', 12, C.gray))],
  },
  {
    note: '直線 y ＝ x のとき。b ＝ a なので、（1，1）（2，2）…（6，6）の 6 個が直線上にあります。確率は 6/36 ＝ 1/6 です。',
    add: fresh(...axes(), ln(ox, oy, gp(7.2, 7.2)[0], gp(7.2, 7.2)[1], C.blue, false, 2), ...pts((a, b) => b === a), ...band(150, lb(160, 170, '6 個 → 6／36 ＝ 1／6', 15, C.green, 'middle', true), lb(160, 198, '約分をわすれない', 12, C.gray))),
  },
  {
    note: '直線 y ＝ 2x のとき。b ＝ 2a を満たすのは、a＝1 で b＝2、a＝2 で b＝4、a＝3 で b＝6 の 3 個です。',
    add: fresh(...axes(), ln(ox, oy, gp(3.7, 7.4)[0], gp(3.7, 7.4)[1], C.blue, false, 2), ...pts((a, b) => b === 2 * a), ...band(150, lb(160, 170, '（1，2）（2，4）（3，6）の 3 個', 13, C.red, 'middle', true), lb(160, 198, '3／36 ＝ 1／12', 15, C.green, 'middle', true))),
  },
  {
    note: '❓ a＝4 以上はなぜだめなの？ a＝4 のとき b＝8 になり、さいころの目（1〜6）をこえてしまいます。a が大きくなるほど b はもっと大きくなるので、以降も全部だめです。',
    add: [lb(gp(4, 8)[0] + 8, 14, 'b＝8 ✕', 10, C.gray, 'start'), ...band(150, lb(160, 178, 'a ＝ 4 以上 → b ＝ 8 以上 → 目にならない', 12, C.gray, 'middle', true))],
  },
  {
    note: '直線 x ＋ y ＝ 5 のとき。a ＋ b ＝ 5 を満たす組は（1，4）（2，3）（3，2）（4，1）の 4 個です。確率は 4/36 ＝ 1/9 です。',
    add: fresh(...axes(), ln(gp(0, 5)[0], gp(0, 5)[1], gp(5, 0)[0], gp(5, 0)[1], C.blue, false, 2), ...pts((a, b) => a + b === 5), ...band(150, lb(160, 170, '（1，4）（2，3）（3，2）（4，1）の 4 個', 13, C.red, 'middle', true), lb(160, 198, '4／36 ＝ 1／9', 15, C.green, 'middle', true))),
  },
  {
    note: '❓ もれやだぶりを防ぐには？ a を 1、2、3、…と小さい順にひとつずつ決めて、成り立つ b を探します。順に調べれば、数え落としもだぶりもありません。',
    add: fresh(bx(20, 20, 280, 30, 'a ＝ 1 のとき　b ＝ 4', C.blue, FILL.blue, 14), bx(20, 58, 280, 30, 'a ＝ 2 のとき　b ＝ 3', C.blue, FILL.blue, 14), bx(20, 96, 280, 30, 'a ＝ 3 のとき　b ＝ 2', C.blue, FILL.blue, 14), bx(20, 134, 280, 30, 'a ＝ 4 のとき　b ＝ 1', C.blue, FILL.blue, 14), lb(160, 184, 'a ＝ 5 のとき b ＝ 0（目にない）', 12, C.gray), lb(160, 210, '順に調べて、4 通り', 13, C.red, 'middle', true)),
  },
  {
    note: 'まとめ。①全部の場合は 6×6 ＝ 36 通り ②条件を式にする ③a に 1〜6 を入れて、b が 1〜6 になる組を書き出す ④（組の数）÷ 36。a、b が 1〜6 の整数であることを、いつも確かめます。',
    add: fresh(bx(20, 16, 280, 30, '① 全部で 36 通り', C.gray, FILL.gray, 14), bx(20, 54, 280, 30, '② 条件を式にする', C.blue, FILL.blue, 14), bx(20, 92, 280, 30, '③ a に 1〜6 を入れて書き出す', C.purple, FILL.purple, 14), bx(20, 130, 280, 30, '④ 組の数 ÷ 36（約分）', C.green, FILL.green, 14), lb(160, 186, 'a、b は 1〜6 の整数', 13, C.red, 'middle', true)),
  },
]);

// ── 仮平均を使って平均値を計算する ──
const kb = 126, ks = 5;
const kx = (i: number) => 30 + i * 48;
const KS = [72, 75, 68, 80, 70];
const bars = (hi?: number[]): DiagramElement[] => KS.map((s, i) => bx(kx(i), kb - (s - 60) * ks, 30, (s - 60) * ks, undefined, hi?.includes(i) ? C.red : C.blue, hi?.includes(i) ? FILL.red : FILL.blue));
const barLabels = (): DiagramElement[] => KS.map((s, i) => lb(kx(i) + 15, kb - (s - 60) * ks - 8, String(s), 11, C.ink, 'middle', true));
const kariLine = (y = 76, text = '仮平均 70'): DiagramElement[] => [ln(20, y, 312, y, C.purple, true, 2), lb(314, y - 8, text, 10, C.purple, 'end', true)];
const diffLabels = (): DiagramElement[] => [2, 5, -2, 10, 0].map((d, i) => lb(kx(i) + 15, kb + 12, d > 0 ? `＋${d}` : d < 0 ? `−${-d}` : '0', 12, d < 0 ? C.blue : C.red, 'middle', true));
const karihei: DiagramFigure = show([
  {
    note: '5人のテストの得点は 72、75、68、80、70 点でした。平均点を、仮平均を使って求めます。棒グラフで、点数の高さを見てみましょう。',
    add: [...bars(), ...barLabels(), ln(20, kb, 312, kb, C.gray, false, 1.5), ...band(146, lb(160, 175, '72・75・68・80・70 点の平均は？', 14, C.blue, 'middle', true))],
  },
  {
    note: '❓ 全部たしてから5でわるのではだめなの？ 72＋75＋68＋80＋70 ＝ 365 と、大きな数のたし算になり、途中で計算をまちがえやすくなります。もっと楽に求める方法があります。',
    add: [...band(146, lb(160, 165, '72 ＋ 75 ＋ 68 ＋ 80 ＋ 70 ＝ 365', 14, C.gray, 'middle', true), lb(160, 195, '大きな数のたし算はミスのもと', 13, C.red, 'middle', true))],
  },
  {
    note: '❓ 楽にするコツは？ 全員が 70 点前後なので、基準の 70 点に横線を引きます。この基準を「仮平均」といいます。各点数が基準より何点上か下かだけを見ます。',
    add: [...kariLine(), ...band(146, lb(160, 175, '基準の線（仮平均）を決める', 14, C.purple, 'middle', true), lb(160, 203, 'ほぼ真ん中の、きりのよい数にする', 12, C.gray))],
  },
  {
    note: '各点数と基準 70 の差を出します。72 は ＋2、75 は ＋5、68 は −2、80 は ＋10、70 は 0 です。基準より下なら、差はマイナスになります。',
    add: [...band(146, ...diffLabels(), lb(160, 200, '差 ＝ 点数 − 70', 13, C.gray, 'middle', true))],
  },
  {
    note: '❓ この差をたすと何がわかるの？ 基準から上に出た分と下に出た分を、打ち消し合いながらたします。2＋5−2＋10＋0 ＝ 15。5人全体で、基準より合計 15 点高いということです。',
    add: fresh(...bars(), ...barLabels(), ...kariLine(), ln(20, kb, 312, kb, C.gray, false, 1.5), ...band(146, ...diffLabels(), lb(160, 190, '2 ＋ 5 − 2 ＋ 10 ＋ 0 ＝ 15', 13, C.gray, 'middle', true), lb(160, 214, '全体で、基準より 15 点高い', 13, C.red, 'middle', true))),
  },
  {
    note: '❓ なぜ5でわるの？ 合計 15 点を5人で等しく分けると、1人あたり 15÷5 ＝ 3 点です。これが「平均は、基準よりも3点高い」という意味になります。',
    add: fresh(bx(20, 20, 280, 34, '合計 15 点高い', C.gray, FILL.gray, 15), lb(160, 72, '5人で等しく分ける', 13, C.purple, 'middle', true), bx(20, 88, 280, 34, '15 ÷ 5 ＝ 3（1人あたり）', C.purple, FILL.purple, 15), ...band(146, lb(160, 175, '平均は、基準より 3 点高い', 14, C.red, 'middle', true))),
  },
  {
    note: '基準が 70 点で、平均はそれより 3 点高いので、平均点 ＝ 70 ＋ 3 ＝ 73 点です。',
    add: fresh(...bars(), ...barLabels(), ...kariLine(), ln(20, kb, 312, kb, C.gray, false, 1.5), ln(20, kb - 13 * ks, 312, kb - 13 * ks, C.green, false, 2.5), lb(314, kb - 13 * ks - 8, '平均 73', 11, C.green, 'end', true), ...band(146, bx(40, 158, 240, 34, '70 ＋ 3 ＝ 73 点', C.green, FILL.green, 17))),
  },
  {
    note: '❓ なぜ、基準に平均のずれをたして本当の平均になるの？ どの点数も「70 ＋ 差」と書けます。全部をたすと 70×5 ＋（差の合計）。5でわると、70 ＋（差の合計）÷ 5 になるからです。',
    add: fresh(bx(20, 16, 280, 30, '点数 ＝ 70 ＋ 差', C.gray, FILL.gray, 14), bx(20, 56, 280, 30, '合計 ＝ 70×5 ＋ 差の合計', C.purple, FILL.purple, 14), bx(20, 96, 280, 30, '平均 ＝ 70 ＋ 差の合計 ÷ 5', C.green, FILL.green, 14), lb(160, 152, '70×5÷5 は 70 のまま', 13, C.gray, 'middle', true), lb(160, 182, '＝ 70 ＋ 15 ÷ 5 ＝ 73', 15, C.red, 'middle', true)),
  },
  {
    note: '確かめましょう。ふつうに求めると 365 ÷ 5 ＝ 73 点。仮平均を使った答えと一致します。',
    add: fresh(...bars(), ...barLabels(), ln(20, kb, 312, kb, C.gray, false, 1.5), ...band(146, lb(160, 165, '72＋75＋68＋80＋70 ＝ 365', 13, C.gray, 'middle', true), lb(160, 195, '365 ÷ 5 ＝ 73 ✓', 15, C.green, 'middle', true))),
  },
  {
    note: '別の例。106、96、110、100 の平均を、仮平均 100 で求めます。差は ＋6、−4、＋10、0。合計 12 を4個でわると 3。100 ＋ 3 ＝ 103 です。',
    add: fresh(bx(20, 16, 280, 30, '差は ＋6、−4、＋10、0', C.blue, FILL.blue, 14), bx(20, 56, 280, 30, '合計 ＝ 6 − 4 ＋ 10 ＋ 0 ＝ 12', C.gray, FILL.gray, 14), bx(20, 96, 280, 30, '12 ÷ 4 ＝ 3', C.purple, FILL.purple, 14), ...band(140, bx(40, 152, 240, 34, '100 ＋ 3 ＝ 103', C.green, FILL.green, 17), lb(160, 208, 'マイナスの差も、符号のままたす', 12, C.gray))),
  },
  {
    note: '❓ 仮平均は 70 でなければだめなの？ どんな数を仮平均にしても、同じ答えになります。たとえば 60 を仮平均にすると、差は 12、15、8、20、10 で合計 65。65÷5 ＝ 13。60 ＋ 13 ＝ 73 で同じです。',
    add: fresh(bx(20, 16, 280, 30, '仮平均 60 → 差 12、15、8、20、10', C.blue, FILL.blue, 13), bx(20, 56, 280, 30, '合計 ＝ 65　65 ÷ 5 ＝ 13', C.gray, FILL.gray, 14), bx(20, 96, 280, 30, '60 ＋ 13 ＝ 73', C.green, FILL.green, 15), lb(160, 152, '70 のときと同じ答え', 14, C.red, 'middle', true), lb(160, 182, '差が小さくなる数を選ぶのがコツ', 12, C.gray)),
  },
  {
    note: '❓ 仮平均は、どう選ぶと楽なの？ データのほぼ真ん中の、きりのよい数（70、100 など）を選びます。差が小さい数になり、暗算でたせます。最後に仮平均をたすのをわすれないようにしましょう。',
    add: fresh(bx(20, 20, 280, 34, '真ん中あたりで、きりのよい数', C.purple, FILL.purple, 14), bx(20, 66, 280, 34, '差は 小さい数（プラスとマイナス）', C.blue, FILL.blue, 14), bx(20, 112, 280, 34, '最後に仮平均をたす', C.red, FILL.red, 14), lb(160, 176, '平均 ＝ 仮平均 ＋ 差の合計 ÷ 個数', 13, C.gray, 'middle', true)),
  },
]);

// ── 累積度数と中央値がふくまれる階級 ──
const HB = 112;
const hx = (i: number) => 40 + i * 48;
const HF = [3, 7, 12, 6, 2];
const HC = [3, 10, 22, 28, 30];
const HN = ['0〜10', '10〜20', '20〜30', '30〜40', '40〜50'];
const hist = (hi?: number[]): DiagramElement[] => HF.map((f, i) => bx(hx(i), HB - f * 8, 48, f * 8, undefined, hi?.includes(i) ? C.red : C.blue, hi?.includes(i) ? FILL.red : FILL.blue));
const histLab = (): DiagramElement[] => [
  ...HF.map((f, i) => lb(hx(i) + 24, HB - f * 8 - 8, `${f}人`, 11, C.ink, 'middle', true)),
  ...HN.map((n, i) => lb(hx(i) + 24, HB + 10, n, 9, C.gray, 'middle')),
];
const cumLab = (): DiagramElement[] => HC.map((c, i) => lb(hx(i) + 24, HB + 26, String(c), 12, C.purple, 'middle', true));
const chuo: DiagramFigure = show([
  {
    note: '30人のテストの結果を、度数分布表（ヒストグラム）にしました。0点以上10点未満が3人、10点以上20点未満が7人、20点以上30点未満が12人、30点以上40点未満が6人、40点以上50点未満が2人です。',
    add: [...hist(), ...histLab(), ln(40, HB, 280, HB, C.gray, false, 1.5), ...band(150, lb(160, 190, '中央値がふくまれる階級は？', 14, C.blue, 'middle', true))],
  },
  {
    note: '❓ 中央値って何？ データを小さい順に並べたとき、ちょうど真ん中にくる値のことです。平均値とちがって、極端に大きい値や小さい値の影響を受けません。',
    add: [...band(150, lb(160, 175, '小さい順に並べた、真ん中の値', 14, C.purple, 'middle', true), lb(160, 203, '極端な値の影響を受けにくい', 12, C.gray))],
  },
  {
    note: '❓ 30人のとき、真ん中は何番目？ 30 は偶数なので、真ん中が1つに決まりません。15 番目と 16 番目の2つが真ん中で、中央値は、この2つの値の平均です。',
    add: [...band(150, lb(160, 165, '30人 → 真ん中は 15 番目と 16 番目', 14, C.purple, 'middle', true), lb(160, 195, '（15 番目 ＋ 16 番目）÷ 2', 13, C.gray, 'middle', true))],
  },
  {
    note: '❓ 度数分布表からは、何がわかるの？ もとの1人ずつの点数はわかりません。でも、「小さいほうから数えて何番目の人が、どの階級にいるか」はわかります。それを調べるのが累積度数です。',
    add: [...band(150, lb(160, 170, '1人ずつの点数は、わからない', 13, C.gray, 'middle', true), lb(160, 198, '何番目がどの階級か、はわかる', 14, C.purple, 'middle', true))],
  },
  {
    note: '累積度数は、いちばん小さい階級から順に度数をたしていった数です。3、3＋7＝10、10＋12＝22、22＋6＝28、28＋2＝30 となり、最後は全体の人数 30 になります。',
    add: [...cumLab(), lb(20, HB + 26, '累積', 10, C.purple, 'start', true), ...band(150, lb(160, 190, '3 → 10 → 22 → 28 → 30', 14, C.purple, 'middle', true))],
  },
  {
    note: '❓ 累積度数 22 は何を表すの？ 「30点未満までの人が、あわせて22人」という意味です。小さいほうから数えて、1番目から22番目までが、この階級までにいることになります。',
    add: fresh(...hist([0, 1, 2]), ...histLab(), ...cumLab(), lb(20, HB + 26, '累積', 10, C.purple, 'start', true), ln(40, HB, 280, HB, C.gray, false, 1.5), ...band(150, lb(160, 175, '30点未満までで 22 人（1〜22 番目）', 13, C.red, 'middle', true))),
  },
  {
    note: '❓ 各階級には、何番目から何番目の人が入っているの？ 累積度数から読みとります。1つ目の階級は 1〜3 番目、2つ目は 4〜10 番目、3つ目は 11〜22 番目、4つ目は 23〜28 番目、5つ目は 29〜30 番目です。',
    add: fresh(...hist(), ...histLab(), ln(40, HB, 280, HB, C.gray, false, 1.5), ...HF.map((_, i) => lb(hx(i) + 24, HB + 26, ['1〜3', '4〜10', '11〜22', '23〜28', '29〜30'][i], 10, C.purple, 'middle', true)), lb(20, HB + 26, '番目', 10, C.purple, 'start', true), ...band(150, lb(160, 190, '前の階級の累積度数 ＋ 1 から、今の累積度数まで', 12, C.gray, 'middle', true))),
  },
  {
    note: '15 番目はどの階級でしょう。10 ＜ 15 ≦ 22 なので、11〜22 番目の階級、つまり3つ目の 20点以上30点未満の階級に入ります。',
    add: fresh(...hist([2]), ...histLab(), ...cumLab(), lb(20, HB + 26, '累積', 10, C.purple, 'start', true), ln(40, HB, 280, HB, C.gray, false, 1.5), ...band(150, lb(160, 170, '10 ＜ 15 ≦ 22', 15, C.red, 'middle', true), lb(160, 198, '15 番目は 20点以上30点未満', 13, C.red, 'middle', true))),
  },
  {
    note: '16 番目も同じ階級です。10 ＜ 16 ≦ 22 だからです。15 番目も 16 番目も同じ階級の中なので、その平均の中央値も、この階級の中にあります。',
    add: [...band(150, lb(160, 170, '10 ＜ 16 ≦ 22（同じ階級）', 14, C.red, 'middle', true), lb(160, 198, '答え：20点以上30点未満', 15, C.green, 'middle', true))],
  },
  {
    note: '❓ 2つの値が別々の階級に入るときは？ たとえば15番目が3つ目の階級、16番目が4つ目の階級なら、中央値は2つの階級の境目あたりです。今回は同じ階級に入っているので、そう答えて大丈夫です。',
    add: [...band(150, lb(160, 170, '2つが別の階級のこともある', 13, C.gray, 'middle', true), lb(160, 198, '今回は同じ階級で、1つに決まる', 13, C.purple, 'middle', true))],
  },
  {
    note: '個数が奇数のときは、真ん中は1つです。25個なら、前に12個、後ろに12個がくる 13 番目が中央値です。（25＋1）÷ 2 ＝ 13 と計算できます。',
    add: fresh(...Array.from({ length: 25 }, (_, i) => ci(26 + (i % 13) * 22.4, 30 + Math.floor(i / 13) * 34, 8, i === 12 ? '13' : undefined, i === 12 ? C.red : C.blue, i === 12 ? FILL.red : FILL.blue, 8)), ...band(120, lb(160, 148, '前 12 個　13 番目　後ろ 12 個', 13, C.gray, 'middle', true), lb(160, 178, '（25 ＋ 1）÷ 2 ＝ 13 番目', 14, C.red, 'middle', true))),
  },
  {
    note: '累積相対度数は、累積度数を全体の個数でわった値です。たとえば 40 人で累積度数 30 なら、30 ÷ 40 ＝ 0.75。全体の 75% がその階級までにふくまれるという意味です。',
    add: fresh(bx(20, 24, 280, 34, '累積相対度数 ＝ 累積度数 ÷ 全体', C.purple, FILL.purple, 14), bx(20, 74, 280, 34, '30 ÷ 40 ＝ 0.75', C.green, FILL.green, 16), lb(160, 138, '全体の 75% が、この階級まで', 14, C.red, 'middle', true), ...band(160, lb(160, 190, '（本文の30人なら 22 ÷ 30 ≒ 0.73）', 12, C.gray))),
  },
  {
    note: '練習です。20人の度数が小さい階級から 2、4、7、5、2 人のとき、累積度数は 2、6、13、18、20。中央値は 10 番目と 11 番目で、6 ＜ 10 ≦ 13 なので、どちらも3番目の階級に入ります。',
    add: fresh(...[2, 4, 7, 5, 2].map((f, i) => bx(hx(i), HB - f * 12, 48, f * 12, undefined, i === 2 ? C.red : C.blue, i === 2 ? FILL.red : FILL.blue)), ...[2, 4, 7, 5, 2].map((f, i) => lb(hx(i) + 24, HB - f * 12 - 8, `${f}人`, 11, C.ink, 'middle', true)), ...[2, 6, 13, 18, 20].map((c, i) => lb(hx(i) + 24, HB + 12, String(c), 12, C.purple, 'middle', true)), lb(20, HB + 12, '累積', 10, C.purple, 'start', true), ...band(146, lb(160, 170, '10 番目・11 番目 → 6 ＜ 10 ≦ 13', 13, C.red, 'middle', true), lb(160, 198, '3番目の階級', 15, C.green, 'middle', true))),
  },
  {
    note: 'まとめ。①度数の合計を出す ②偶数個なら真ん中の2つの順位、奇数個なら1つの順位を出す ③累積度数を小さい階級からつくる ④その順位が初めて入る階級を探す。',
    add: fresh(bx(20, 14, 280, 30, '① 度数の合計を出す', C.gray, FILL.gray, 14), bx(20, 52, 280, 30, '② 真ん中の順位を出す', C.blue, FILL.blue, 14), bx(20, 90, 280, 30, '③ 累積度数をつくる', C.purple, FILL.purple, 14), bx(20, 128, 280, 30, '④ 初めて入る階級を探す', C.green, FILL.green, 14), lb(160, 186, '偶数個は 2 つの順位（15 番目と 16 番目）', 12, C.red, 'middle', true), lb(160, 212, '累積度数は小さい階級から足していく', 12, C.gray)),
  },
]);

export const DIAGRAMS_KOKO_SUGAKU_C: Record<string, DiagramFigure> = {
  '台形の対角線でできる面積の等しい三角形（△OAB ＝ △ODC）': daikei,
  '相似で測る（影・木の高さ・池の幅）': kageSoji,
  '内接円の半径を面積から求める（r＝2S÷3辺の和）': kousaki,
  '作図の考え方（折り目・円の中心・接線）': sakuzu,
  '円錐の展開図（中心角＝360°×底面の半径÷母線）': ensuiten,
  '三平方で立体の高さを求める（円錐・正四角錐）': takasa,
  '円錐の容器の水（水面の高さと体積比）': suimen,
  '確率で「少なくとも」は起こらない確率を1からひく（中学数学）': suku,
  '大小2つのさいころの目と直線・座標の確率': sikaku,
  '仮平均を使って平均値を計算する': karihei,
  '累積度数と中央値がふくまれる階級': chuo,
};
