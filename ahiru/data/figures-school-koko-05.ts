// 高校受験 入試傾向問題（第05批）の動く図解スライド。
// キーは問題 id。画面の上半分に図、下の帯（band）に式やひとこと、という配置。
import type { Figure, DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, sc, show, band, fresh, cover } from './diagram-kit';

type E = DiagramElement;
type Pt = [number, number];

/** 下の帯に、そのスライドの式やひとことを出す。 */
const say = (text: string, color: string = C.ink, fill: string = FILL.warm, size = 12): E[] => band(150, bx(14, 160, 292, 66, text, color, fill, size));
/** まっさらにして、上に図、下の帯にひとこと。 */
const S = (top: E[], text: string, color: string = C.ink, fill: string = FILL.warm): E[] => fresh(...top, ...say(text, color, fill));
/** いまの図に部品を足して、下の帯だけ書きかえる。 */
const T = (top: E[], text: string, color: string = C.ink, fill: string = FILL.warm): E[] => [...top, ...say(text, color, fill)];
const dot = (x: number, y: number, color: string = C.ink, r = 2.5): E => ci(x, y, r, undefined, color, color);
const nm = (x: number, y: number, t: string, color: string = C.ink): E => lb(x, y, t, 12, color, 'middle', true);
/** 直角の印（頂点 v、2方向 a・b） */
const rt = (v: Pt, a: Pt, b: Pt, s = 9, color: string = C.ink): E[] => {
  const ua: Pt = [(a[0] - v[0]) / Math.hypot(a[0] - v[0], a[1] - v[1]), (a[1] - v[1]) / Math.hypot(a[0] - v[0], a[1] - v[1])];
  const ub: Pt = [(b[0] - v[0]) / Math.hypot(b[0] - v[0], b[1] - v[1]), (b[1] - v[1]) / Math.hypot(b[0] - v[0], b[1] - v[1])];
  const p1: Pt = [v[0] + ua[0] * s, v[1] + ua[1] * s];
  const p3: Pt = [v[0] + ub[0] * s, v[1] + ub[1] * s];
  const p2: Pt = [p1[0] + ub[0] * s, p1[1] + ub[1] * s];
  return [ln(p1[0], p1[1], p2[0], p2[1], color, false, 1.4), ln(p2[0], p2[1], p3[0], p3[1], color, false, 1.4)];
};
/** 方眼の正方形（n×n マス、1マスの1辺 u） */
const grid = (x: number, y: number, n: number, u: number, color: string, fill: string): E[] => {
  const out: E[] = [bx(x, y, n * u, n * u, undefined, color, fill)];
  for (let i = 1; i < n; i++) out.push(ln(x + i * u, y, x + i * u, y + n * u, color, false, 1), ln(x, y + i * u, x + n * u, y + i * u, color, false, 1));
  return out;
};
const BLUE_T = 'rgba(2,132,199,0.18)';
const RED_T = 'rgba(225,29,72,0.18)';
const GREEN_T = 'rgba(22,163,74,0.2)';

// ───────── 接線と半径（三平方）─────────
const tO: Pt = [100, 82], tA: Pt = [100, 42], tP: Pt = [196, 42];
const tB = (): Pt => {
  const dx = tP[0] - tO[0], dy = tP[1] - tO[1], L = dx * dx + dy * dy;
  const t = ((tA[0] - tO[0]) * dx + (tA[1] - tO[1]) * dy) / L;
  return [2 * (tO[0] + t * dx) - tA[0], 2 * (tO[1] + t * dy) - tA[1]];
};
const tCircle = (): E[] => [ci(tO[0], tO[1], 40, undefined, C.gray, 'rgba(2,132,199,0.07)'), dot(tO[0], tO[1]), nm(88, 90, 'O'), dot(tA[0], tA[1]), nm(100, 31, 'A'), dot(tP[0], tP[1]), nm(207, 38, 'P')];
const tBase = (): E[] => [...tCircle(), ln(60, 42, 236, 42, C.gray, false, 1.2), ln(tA[0], tA[1], tP[0], tP[1], C.red, false, 2.5), ln(tO[0], tO[1], tA[0], tA[1], C.blue, false, 2.5), lb(148, 34, '12cm', 11, C.red, 'middle', true), lb(106, 66, '5cm', 11, C.blue, 'start', true)];
const tPO = (t: string): E[] => [ln(tO[0], tO[1], tP[0], tP[1], C.green, false, 2.5), lb(176, 76, t, 12, C.green, 'start', true)];
const tTri = (): E => pg([tO, tA, tP], C.ink, 'rgba(22,163,74,0.12)');
const sqBoxes = (third: string, third2?: string): E[] => [
  bx(30, 85, 25, 25, '25', C.blue, FILL.blue, 11), lb(42, 122, '5×5', 10, C.blue, 'middle', true),
  lb(68, 100, '＋', 16, C.ink, 'middle', true),
  bx(80, 50, 60, 60, '144', C.red, FILL.red, 14), lb(110, 122, '12×12', 10, C.red, 'middle', true),
  lb(158, 100, '＝', 16, C.ink, 'middle', true),
  bx(175, 45, 65, 65, third, C.green, FILL.green, 14), lb(207, 122, third2 ?? 'PO×PO', 10, C.green, 'middle', true),
];
const tangentFig = (withB: boolean): DiagramFigure => {
  const B = tB();
  const slides = [
    { note: '円Oの外の点Pから円に接線PAを引きました。PA＝12cm、円の半径＝5cmです。POの長さを求めます。まず、問題の数値を図に書きこみます。', add: S([...tBase(), ...tPO('PO＝？')], 'PA＝12cm　半径OA＝5cm\nPO＝？を求めたい') },
    { note: '❓なぜ、接線PAと半径OAは垂直だと言えるの？→もし垂直でなければ、Aを通る線はななめになり、円の中に入りこんで円と2点で交わってしまいます。接線は円と1点でしか交わらないので、垂直な線だけが接線になれます。', add: S([...tCircle(), ln(tA[0], tA[1], tP[0], tP[1], C.red, false, 2.5), ln(tA[0], tA[1], 146, 71.5, C.purple, true, 2), dot(138.4, 68.8, C.purple, 3), lb(150, 82, '2点で交わる', 10, C.purple, 'start', true), ln(tO[0], tO[1], tA[0], tA[1], C.blue, false, 2.5), ...rt(tA, tO, tP, 9, C.ink)], '斜めの線は円と2点で交わる\n接線は1点だけ → 半径と垂直') },
    { note: '❓垂直だと、何がうれしいの？→∠OAP＝90°なので、O・A・Pを結ぶと直角三角形OAPができます。求めたいPOは、直角の向かい側にある、いちばん長い辺（斜辺）です。', add: S([tTri(), ...tBase(), ...rt(tA, tO, tP, 9, C.ink), ...tPO('PO＝？（斜辺）')], '∠OAP＝90° の直角三角形\nPOは直角の向かい側＝斜辺') },
    { note: '❓直角三角形の3辺は、どう結びつくの？→三平方の定理です。直角をはさむ2辺を1辺とする正方形の面積を足すと、斜辺を1辺とする正方形の面積になります。ここでは5×5＝25と12×12＝144が小さい2つの正方形です。', add: S(sqBoxes('？'), '5×5 ＋ 12×12 ＝ PO×PO\n（2つの小さい正方形の合計）') },
    { note: '❓なぜ面積を足してよいの？→直角三角形では、直角をはさむ2辺の正方形をばらして並べかえると、斜辺の正方形をちょうど埋めることができると知られているからです。まず足し算をします。25＋144＝169。', add: S(sqBoxes('169'), '25 ＋ 144 ＝ 169\nだから PO×PO ＝ 169', C.green, FILL.green) },
    { note: '❓PO×PO＝169 のとき、POは何cm？→同じ数を2回かけて169になる数を探します。12×12＝144は小さく、14×14＝196は大きいので、その間の13×13＝169が当たりです。', add: S([bx(30, 40, 80, 34, '12×12＝144', C.gray, FILL.gray, 12), bx(30, 82, 80, 34, '13×13＝169', C.green, FILL.green, 13), bx(130, 40, 160, 34, '169より小さい', C.gray, FILL.gray, 12), bx(130, 82, 160, 34, 'ぴったり 169 ○', C.green, FILL.green, 13), lb(210, 135, '14×14＝196 は大きすぎる', 11, C.gray, 'middle', false)], 'PO ＝ 13cm', C.green, FILL.green) },
    { note: '答えは PO＝13cm です。図のPOに13cmと書きこみました。', add: S([tTri(), ...tBase(), ...tPO('PO＝13cm')], '答え　PO＝13cm', C.green, FILL.green) },
    { note: '確かめ（検算）です。5×5＋12×12＝25＋144＝169＝13×13で、三平方の定理が成り立ちます。5・12・13は、3辺がすべて整数になる有名な直角三角形の組です。', add: S([pg([[60, 120], [60, 30], [180, 120]], C.ink, 'rgba(22,163,74,0.12)'), ...rt([60, 120], [60, 30], [180, 120], 9, C.ink), lb(50, 78, '5', 13, C.blue, 'end', true), lb(120, 135, '12', 13, C.red, 'middle', true), lb(130, 66, '13', 13, C.green, 'start', true)], '5×5＋12×12＝13×13 ○\n斜辺13が3辺でいちばん長い ○', C.green, FILL.green) },
    withB
      ? { note: '❓Pから円へ引いたもう1本の接線PBの長さは？→△OAPと△OBPで、OA＝OB（半径）、OPは共通、∠A＝∠B＝90°なので合同です。だからPB＝PA＝12cmです。円の外の点から引いた2本の接線は同じ長さになります。', add: S([...tBase(), tTri(), dot(B[0], B[1], C.purple, 3), nm(B[0] + 10, B[1] + 8, 'B', C.purple), ln(tP[0], tP[1], B[0], B[1], C.purple, false, 2.5), ln(tO[0], tO[1], B[0], B[1], C.purple, true, 2), ln(tO[0], tO[1], tP[0], tP[1], C.green, false, 2)], '△OAP ≡ △OBP（直角・OA＝OB・OP共通）\nだから PB ＝ PA ＝ 12cm', C.purple, FILL.purple) }
      : { note: '❓Pから円までの最短の距離は？→POは円の中心までの距離13cmですが、円の外側のぶんは13−5＝8cmです。接線PA（12cm）は、この8cmより長くなります。斜めに進んでいるからです。', add: S([...tCircle(), ln(tA[0], tA[1], tP[0], tP[1], C.red, false, 2), ln(tO[0], tO[1], tP[0], tP[1], C.gray, true, 1.5), ln(136.9, 66.6, tP[0], tP[1], C.green, false, 3.5), lb(170, 70, '8cm', 12, C.green, 'start', true)], '円の外のぶん PO−5 ＝ 13−5 ＝ 8cm\n接線PA 12cm は それより長い') },
    { note: 'よくあるまちがいです。接線と半径が垂直であることを確かめずに三平方の定理を使ってしまうこと。三平方は直角三角形でしか使えません。垂直を確かめてから「OAP＝直角三角形」と言います。', add: S([bx(20, 20, 280, 40, '✕ 垂直を確かめずに 5²＋12² を計算', C.red, FILL.red, 13), ar(160, 64, 160, 82, C.ink), bx(20, 86, 280, 50, '○ 接線⊥半径 → ∠OAP＝90° → 直角三角形 → 三平方', C.green, FILL.green, 13)], 'まず「直角かどうか」を確かめる') },
  ];
  return show(slides, withB ? '接線PA・PBと半径から、POの長さを三平方で求める' : '接線と半径の直角から、POの長さを三平方で求める');
};
const azabu_sansu_09 = tangentFig(false);
const nanzan_sansu_15 = tangentFig(true);

// ───────── 相似な図形の面積比（相似比 a:b、小さいほうの面積から大きいほうを求める）─────────
const twoTri = (r1: number, r2: number, small: string, big: string): E[] => {
  const sh: Pt[] = [[0, 0], [1, 0], [0.35, -0.8]];
  const mk = (ox: number, oy: number, k: number): Pt[] => sh.map((p) => [ox + p[0] * k, oy + p[1] * k] as Pt);
  const a = mk(36, 118, r1 * 28), b = mk(150, 118, r2 * 28);
  return [
    pg(a, C.blue, BLUE_T), pg(b, C.red, RED_T),
    lb((a[0][0] + a[1][0]) / 2, 134, String(r1), 13, C.blue, 'middle', true), lb((b[0][0] + b[1][0]) / 2, 134, String(r2), 13, C.red, 'middle', true),
    lb(a[0][0] + r1 * 14, 106, small, 11, C.blue, 'middle', true), lb(b[0][0] + r2 * 14, 100, big, 12, C.red, 'middle', true),
  ];
};
const simArea = (r1: number, r2: number, s1: number, s2: number): DiagramFigure => {
  const n1 = r1 * r1, n2 = r2 * r2, one = s1 / n1;
  const W = 280, cw = W / n2;
  const bars = (labelCells: boolean, big: string, bigFill: string): E[] => {
    const out: E[] = [lb(14, 30, '小', 12, C.blue, 'start', true), lb(14, 84, '大', 12, C.red, 'start', true)];
    for (let i = 0; i < n1; i++) out.push(bx(30 + i * cw, 40, cw, 28, labelCells ? String(one) : undefined, C.blue, FILL.blue, 11));
    for (let i = 0; i < n2; i++) out.push(bx(30 + i * cw, 94, cw, 28, labelCells ? big : undefined, C.red, bigFill, 11));
    return out;
  };
  const cell = 12 * r1, cell2 = 12 * r2;
  return show([
    { note: `相似な2つの三角形があり、対応する辺の比は${r1}:${r2}です。小さいほうの面積が${s1}cm²のとき、大きいほうの面積を求めます。図に相似比と面積を書きこみます。`, add: S(twoTri(r1, r2, `${s1}cm²`, '？'), `相似比 ${r1}:${r2}\n小さいほう ${s1}cm² → 大きいほうは？`) },
    { note: `❓なぜ、長さの比が${r1}:${r2}だと面積はもっとちがう比になるの？→面積は「たて×よこ」です。相似な図形は、たても よこも同じ倍率で大きくなるので、倍率が2回ぶん効いてきます。正方形で見ると、${r1}×${r1}＝${n1}マスと${r2}×${r2}＝${n2}マスです。`, add: S([...grid(40, 130 - 12 * r1 - 10, r1, 12, C.blue, FILL.blue).map((e) => e), ...grid(150, 130 - 12 * r2 - 10, r2, 12, C.red, FILL.red), lb(40 + cell / 2, 138, `1辺${r1}`, 11, C.blue, 'middle', true), lb(150 + cell2 / 2, 138, `1辺${r2}`, 11, C.red, 'middle', true)], `1辺${r1}の正方形 → ${r1}×${r1}＝${n1}マス\n1辺${r2}の正方形 → ${r2}×${r2}＝${n2}マス`) },
    { note: `❓でも三角形は正方形ではないのに、同じ考えでいいの？→どんな図形も、ごく小さい正方形のマスの集まりと考えられます。相似に拡大しても、マスの「数」は同じで、マス1つの面積が${r1}×${r1}と${r2}×${r2}の比で大きくなります。だから図形全体の面積も同じ比になります。`, add: S([bx(50, 40, cell, cell, String(n1), C.blue, FILL.blue, 12), lb(50 + cell / 2, 40 + cell + 14, `マス1つ ${r1}×${r1}`, 10, C.blue, 'middle', true), lb(138, 70, 'マスの数は同じ', 11, C.ink, 'middle', true), bx(190, 40, cell2, cell2, String(n2), C.red, FILL.red, 12), lb(190 + cell2 / 2, 40 + cell2 + 14, `マス1つ ${r2}×${r2}`, 10, C.red, 'middle', true)], `マス1つの面積が ${n1}:${n2}\nマスの数は同じ → 全体も ${n1}:${n2}`) },
    { note: `面積比は相似比の2乗です。${r1}²:${r2}²＝${n1}:${n2}。つまり「小さいほう${n1}に対して、大きいほう${n2}」の関係です。`, add: S([bx(30, 40, 120, 50, `${r1}×${r1}\n＝${n1}`, C.blue, FILL.blue, 15), lb(160, 66, ':', 20, C.ink, 'middle', true), bx(170, 40, 120, 50, `${r2}×${r2}\n＝${n2}`, C.red, FILL.red, 15)], `面積比 ＝ ${r1}² : ${r2}² ＝ ${n1} : ${n2}`, C.green, FILL.green) },
    { note: `❓その比を、どう使えばいいの？→小さいほうの面積${s1}cm²が、比の${n1}（${n1}マスぶん）にあたります。大きいほうは比の${n2}（${n2}マスぶん）です。面積を「マスの個数」に置きかえて考えます。`, add: S(bars(false, '', FILL.red), `小：${n1}マスぶん ＝ ${s1}cm²\n大：${n2}マスぶん ＝ ？cm²`) },
    { note: `❓1マスぶんの面積は？→${s1}cm²を${n1}マスで等しくわります。${s1}÷${n1}＝${one}cm²。これが、比の1つぶんの大きさです。`, add: S(bars(n2 <= 12, String(one), FILL.red), `1マスぶん ＝ ${s1}÷${n1} ＝ ${one}cm²`, C.blue, FILL.blue) },
    { note: `❓大きいほうは？→1マスぶん${one}cm²が${n2}個です。${one}×${n2}＝${s2}cm²。`, add: S(bars(n2 <= 12, String(one), FILL.red), `${one} × ${n2} ＝ ${s2}cm²`, C.red, FILL.red) },
    { note: `答えは${s2}cm²です。大きいほうの三角形に${s2}cm²と書きこみました。`, add: S(twoTri(r1, r2, `${s1}cm²`, `${s2}cm²`), `答え　${s2}cm²`, C.green, FILL.green) },
    { note: `確かめ（検算）です。面積は「倍」で見ると、大きいほうは小さいほうの（${r2}÷${r1}）の2乗倍。${s1}×${n2}÷${n1}＝${s2}で一致します。別の見方でも、${s1}:${s2}を約分すると${n1}:${n2}になり、面積比と合います。`, add: S([bx(20, 30, 280, 36, `${s1} : ${s2}`, C.gray, FILL.gray, 15), ar(160, 70, 160, 88, C.ink), bx(20, 92, 280, 36, `${n1} : ${n2}　＝ ${r1}² : ${r2}² ○`, C.green, FILL.green, 15)], `${s1}×${n2}÷${n1} ＝ ${s2}\n面積比 ${n1}:${n2} と一致`, C.green, FILL.green) },
    { note: `よくあるまちがいです。相似比${r1}:${r2}をそのまま面積に使って${s1}×${r2}÷${r1}＝${(s1 * r2) / r1}としてしまうこと。これは「長さ」が${r2}/${r1}倍になるときの計算で、面積は たてとよこの2回ぶん倍になります。`, add: S([bx(20, 24, 280, 40, `✕ ${s1}×${r2}÷${r1}＝${(s1 * r2) / r1}（長さの倍率だけ）`, C.red, FILL.red, 13), ar(160, 68, 160, 86, C.ink), bx(20, 90, 280, 40, `○ 面積は倍率を2回：${s1}×${n2}÷${n1}＝${s2}`, C.green, FILL.green, 13)], '長さ → 相似比　面積 → 相似比の2乗') },
  ], `相似比${r1}:${r2} → 面積比${n1}:${n2}`);
};
const nanzan_sansu_06 = simArea(2, 3, 8, 18);
const seinan_sansu_14 = simArea(3, 5, 27, 75);

// 周の長さの比と面積比（相似比3:4）
const azabu_sansu_10: DiagramFigure = show([
  { note: '相似比が3:4の2つの相似な図形があります。周の長さの比と、面積の比を求めます。図は相似な三角形で表しました。', add: S(twoTri(3, 4, '', ''), '相似比 3:4\n周の長さの比は？　面積の比は？') },
  { note: '❓なぜ周の長さの比は、相似比と同じになるの？→周は、まわりの辺をぜんぶ足した長さです。たとえば小さいほうの辺が6・9・12なら、大きいほうは8・12・16。どの辺も3:4になっています。', add: S([bx(20, 30, 130, 40, '小：6＋9＋12', C.blue, FILL.blue, 13), bx(170, 30, 130, 40, '大：8＋12＋16', C.red, FILL.red, 13), lb(85, 90, '＝27', 14, C.blue, 'middle', true), lb(235, 90, '＝36', 14, C.red, 'middle', true), ln(85, 100, 235, 100, C.ink, false, 1.2)], '辺は全部 3:4 → 6:8、9:12、12:16\n合計 27:36') },
  { note: '❓27:36が3:4なのは偶然ではないの？→ちがいます。6＝3×2、9＝3×3、12＝3×4 と、小さいほうは「3×（ある数）」の形で、大きいほうは同じ数に4をかけた形です。足し算すると、共通の数の合計に3と4がかかるだけなので、いつも3:4になります。', add: S([bx(20, 30, 280, 36, '小：3×(2＋3＋4)＝3×9＝27', C.blue, FILL.blue, 13), bx(20, 76, 280, 36, '大：4×(2＋3＋4)＝4×9＝36', C.red, FILL.red, 13)], '共通の 9 に 3 と 4 がかかるだけ\n周の長さの比 ＝ 3 : 4', C.green, FILL.green) },
  { note: '❓では面積は？ なぜ相似比とちがう比になるの？→面積は「たて×よこ」で決まり、たてもよこも3倍と4倍になるからです。まず正方形で考えます。1辺3の正方形は3×3＝9マス、1辺4の正方形は4×4＝16マスです。', add: S([...grid(60, 40, 3, 14, C.blue, FILL.blue), ...grid(170, 26, 4, 14, C.red, FILL.red), lb(81, 100, '3×3＝9', 12, C.blue, 'middle', true), lb(198, 100, '4×4＝16', 12, C.red, 'middle', true)], '1辺3 → 9マス　1辺4 → 16マス\n面積の比 9:16') },
  { note: '❓三角形や丸のような形も、同じになるの？→どんな図形も細かい正方形のマスで敷きつめて考えられます。拡大してもマスの数は同じで、マス1つの面積が3×3と4×4の比になります。だから図形全体の面積も9:16です。', add: S([bx(50, 36, 36, 36, '9', C.blue, FILL.blue, 14), lb(68, 88, 'マス1つ 3×3', 10, C.blue, 'middle', true), lb(150, 58, 'マスの数は同じ', 12, C.ink, 'middle', true), bx(214, 28, 48, 48, '16', C.red, FILL.red, 14), lb(238, 92, 'マス1つ 4×4', 10, C.red, 'middle', true)], 'マス1つの面積比 ＝ 9:16\n数は同じ → 図形全体も 9:16', C.green, FILL.green) },
  { note: '❓なぜ周は「そのまま」で、面積は「2乗」なの？→周は長さ（1方向）の量なので倍率は1回。面積は たてとよこ（2方向）の量なので倍率が2回かかります。量の次元がちがうからです。', add: S([bx(20, 26, 280, 34, '長さ（周）　　倍率 ×1回　→ 3:4', C.blue, FILL.blue, 13), bx(20, 70, 280, 34, '面積　　　　　倍率 ×2回　→ 3²:4²', C.red, FILL.red, 13)], '1方向の量は そのまま\n2方向（たて×よこ）の量は 2乗') },
  { note: '面積比を計算します。3²:4²＝9:16です。', add: S([bx(30, 40, 120, 50, '3×3＝9', C.blue, FILL.blue, 16), lb(160, 66, ':', 20, C.ink, 'middle', true), bx(170, 40, 120, 50, '4×4＝16', C.red, FILL.red, 16)], '面積の比 ＝ 9 : 16', C.green, FILL.green) },
  { note: '答えは、周の長さの比 3:4、面積比 9:16です。', add: S(twoTri(3, 4, '', ''), '答え　周の長さの比 3:4\n　　　面積比 9:16', C.green, FILL.green) },
  { note: '確かめ（検算）です。先ほどの三角形（辺6・9・12と8・12・16）で、周は27と36で27:36＝3:4。面積比は9:16ですから、大きいほうが「16÷9＝約1.8倍」の面積です。長さは4÷3＝約1.3倍なので、面積のほうが大きく伸びています。', add: S([bx(20, 30, 280, 36, '周　27 : 36 ＝ 3 : 4 ○', C.blue, FILL.blue, 14), bx(20, 76, 280, 36, '面積　9 : 16（16÷9≒1.8倍）', C.red, FILL.red, 14)], '長さ 約1.3倍 → 面積 約1.8倍\n面積のほうが大きく伸びる') },
  { note: 'よくあるまちがいです。面積比を相似比のまま3:4としてしまうこと。面積は2回倍になるので9:16です。さらに体積なら3回倍で、3³:4³＝27:64になります。', add: S([bx(20, 24, 280, 34, '✕ 面積比 3:4（相似比のまま）', C.red, FILL.red, 13), bx(20, 66, 280, 34, '○ 面積比 9:16（2乗）', C.green, FILL.green, 13), bx(20, 108, 280, 30, '（体積比は 3乗で 27:64）', C.purple, FILL.purple, 12)], '長さ・周 そのまま　面積 2乗　体積 3乗') },
], '相似比3:4の周の長さの比と面積比');

// ───────── DE∥BC の相似（辺の比・面積比）─────────
const pA: Pt = [160, 14], pB: Pt = [50, 132], pC: Pt = [270, 132];
const pD: Pt = [116, 61.2], pE: Pt = [204, 61.2];
const parBase = (): E[] => [pg([pA, pB, pC], C.ink, 'none'), ln(pD[0], pD[1], pE[0], pE[1], C.red, false, 2.5), nm(160, 9, 'A'), nm(38, 143, 'B'), nm(282, 143, 'C'), nm(106, 60, 'D'), nm(214, 60, 'E')];
const parShade = (): E => pg([pA, pD, pE], C.blue, BLUE_T);
const parAngles = (): E[] => [lb(128, 70, '●', 10, C.purple, 'middle', true), lb(60, 126, '●', 10, C.purple, 'middle', true), lb(192, 70, '▲', 10, C.green, 'middle', true), lb(260, 126, '▲', 10, C.green, 'middle', true)];
const parLabels = (ad: string, db: string, de: string, bc: string): E[] => [
  lb(134, 38, ad, 11, C.blue, 'end', true), lb(76, 100, db, 11, C.gray, 'end', true), lb(160, 53, de, 11, C.red, 'middle', true), lb(160, 147, bc, 11, C.green, 'middle', true),
];
/** 相似の理由から相似比まで（2〜6枚目）。 */
const parIntro = (adS: string, dbS: string, abS: string, ratio: string): { note: string; add: E[] }[] => [
  { note: '❓なぜ△ADEと△ABCは相似だと言えるの？→DE∥BCなので、同位角が等しくなります。∠ADE＝∠ABC（●）、∠AED＝∠ACB（▲）。さらに∠Aは2つの三角形に共通です。2組の角が等しいので相似です。', add: S([parShade(), ...parBase(), ...parAngles(), lb(116, 24, '∠Aは共通', 10, C.purple, 'end', true)], '∠A は共通　●どうし　▲どうし\n→ 2組の角が等しい') },
  { note: '❓2組の角が等しいと、なぜ相似になるの？→三角形の内角の和は180°なので、2つの角が同じなら3つ目の角も同じです。3つの角がぜんぶ等しければ、形が同じで大きさだけがちがう（拡大・縮小）三角形になるからです。', add: S([bx(20, 26, 130, 36, '△ADE：∠A ● ▲', C.blue, FILL.blue, 12), bx(170, 26, 130, 36, '△ABC：∠A ● ▲', C.red, FILL.red, 12), lb(160, 80, '残りの角 ＝ 180°－（2つの角）', 12, C.ink, 'middle', true), bx(40, 96, 240, 34, '3つの角がぜんぶ同じ → 同じ形', C.green, FILL.green, 13)], '内角の和は180°\n2つの角が同じ → 3つ目も同じ') },
  { note: '❓相似だと、何が分かるの？→対応する辺の比が、どれも同じになります。ADに対応するのはAB、DEに対応するのはBC、AEに対応するのはACです。', add: S([bx(20, 20, 280, 30, 'AD ↔ AB', C.blue, FILL.blue, 14), bx(20, 58, 280, 30, 'DE ↔ BC', C.red, FILL.red, 14), bx(20, 96, 280, 30, 'AE ↔ AC', C.green, FILL.green, 14)], '対応する辺の比は ぜんぶ同じ\n小 △ADE ： 大 △ABC') },
  { note: `❓相似比を出すとき、ADに対応する辺はDBではなくABなのはなぜ？→△ABCの辺はAB全体です。DBはAB全体の一部で、△ADEの辺ではありません。ADの相手は「ABまるごと」です。AB＝${abS}です。`, add: S([parShade(), ...parBase(), ...parLabels(adS, dbS, '', ''), bx(226, 22, 88, 40, `AB＝AD＋DB\n＝${abS}`, C.green, FILL.green, 11)], `ADの相手は AB（全体）\nAB ＝ ${abS}`, C.green, FILL.green) },
  { note: `相似比は AD:AB＝${ratio} です。約分できるときは、いちばん簡単な比にします。`, add: S([bx(20, 30, 130, 44, `AD : AB`, C.blue, FILL.blue, 15), lb(160, 56, '＝', 18, C.ink, 'middle', true), bx(170, 30, 130, 44, ratio, C.green, FILL.green, 15)], `相似比 ＝ ${ratio}\n（小 △ADE ： 大 △ABC）`, C.green, FILL.green) },
];
const par5bars = (a: number, b: number, per: string, big: string): E[] => {
  const out: E[] = [lb(14, 40, 'DE', 12, C.red, 'start', true), lb(14, 92, 'BC', 12, C.green, 'start', true)];
  const w = 240 / b;
  for (let i = 0; i < a; i++) out.push(bx(50 + i * w, 28, w, 26, per, C.red, FILL.red, 12));
  for (let i = 0; i < b; i++) out.push(bx(50 + i * w, 80, w, 26, big, C.green, FILL.green, 12));
  return out;
};

const seinan_sansu_07: DiagramFigure = show([
  { note: '△ABCの辺AB上に点D、辺AC上に点Eがあり、DE∥BCです。AD＝4cm、DB＝6cm、DE＝8cmのとき、BCの長さを求めます。図に数値を書きこみます。', add: S([...parBase(), ...parLabels('4cm', '6cm', '8cm', 'BC＝？')], 'AD＝4　DB＝6　DE＝8\nBC ＝ ？') },
  ...parIntro('4cm', '6cm', '4＋6＝10cm', '4:10＝2:5'),
  { note: '❓DEに対応するBCを、相似比から求めるには？→DE:BC＝2:5です。DEの8cmが「2つぶん」にあたります。1つぶんは8÷2＝4cm。BCは「5つぶん」なので4×5＝20cmです。', add: S(par5bars(2, 5, '4', '4'), '2つぶん＝8cm → 1つぶん4cm\nBC＝4×5＝20cm', C.green, FILL.green) },
  { note: '答えは BC＝20cm です。図のBCに20cmと書きこみました。', add: S([parShade(), ...parBase(), ...parLabels('4cm', '6cm', '8cm', 'BC＝20cm')], '答え　BC＝20cm', C.green, FILL.green) },
  { note: '確かめ（検算）です。DE:BC＝8:20＝2:5で、AD:AB＝4:10＝2:5と同じ比になります。また、BCはDEより長いはず（大きい三角形のほうが辺が長い）で、20＞8と合っています。', add: S([bx(20, 30, 280, 34, 'DE : BC ＝ 8 : 20 ＝ 2 : 5', C.red, FILL.red, 14), bx(20, 74, 280, 34, 'AD : AB ＝ 4 : 10 ＝ 2 : 5', C.blue, FILL.blue, 14), lb(160, 128, '同じ比 ○', 13, C.green, 'middle', true)], '2つの比が一致\nBC（20）は DE（8）より長い ○', C.green, FILL.green) },
  { note: 'よくあるまちがいです。AD:DB＝4:6＝2:3を相似比だと思ってしまうこと。DBは△ADEの辺ではないので、相似比には使えません。もし2:3を使うと BC＝8×3÷2＝12 になり、誤りです。', add: S([bx(20, 24, 280, 40, '✕ AD:DB＝2:3 を使う → BC＝12', C.red, FILL.red, 13), ar(160, 68, 160, 86, C.ink), bx(20, 90, 280, 40, '○ AD:AB＝2:5 を使う → BC＝20', C.green, FILL.green, 13)], 'ADの相手は AB（全体）') },
], 'DE∥BCの相似から、BCの長さを求める');

const kurume_sansu_10: DiagramFigure = show([
  { note: '△ABCの辺AB上に点D、辺AC上に点Eがあり、DE∥BCです。AD＝4cm、DB＝6cm、DE＝6cmのとき、BCの長さと、△ADEと△ABCの面積比を求めます。', add: S([...parBase(), ...parLabels('4cm', '6cm', '6cm', 'BC＝？')], 'AD＝4　DB＝6　DE＝6\nBC ＝ ？　面積比 ＝ ？') },
  ...parIntro('4cm', '6cm', '4＋6＝10cm', '4:10＝2:5'),
  { note: '❓DEに対応するBCの長さは？→DE:BC＝2:5です。DEの6cmが「2つぶん」なので、1つぶんは6÷2＝3cm。BCは「5つぶん」なので3×5＝15cmです。', add: S(par5bars(2, 5, '3', '3'), '2つぶん＝6cm → 1つぶん3cm\nBC＝3×5＝15cm', C.green, FILL.green) },
  { note: '❓面積比はなぜ相似比の2乗になるの？→面積は「たて×よこ」で、どちらも2:5の倍率がかかるので、2×2：5×5＝4：25になります。△ADE:△ABC＝4:25です。', add: S([parShade(), ...parBase(), bx(232, 24, 82, 42, '2×2 : 5×5\n＝4 : 25', C.green, FILL.green, 11)], '面積比 ＝ 相似比の2乗\n△ADE : △ABC ＝ 4 : 25', C.green, FILL.green) },
  { note: '答えは BC＝15cm、△ADE:△ABC＝4:25 です。', add: S([parShade(), ...parBase(), ...parLabels('4cm', '6cm', '6cm', 'BC＝15cm')], '答え　BC＝15cm\n　　　面積比 4:25', C.green, FILL.green) },
  { note: '確かめ（検算）です。DE:BC＝6:15＝2:5で相似比と一致します。面積比は（2:5）の2乗で4:25。長さの比を2乗しているので、4:25をそのまま長さの比に使っていないことも確認できます。', add: S([bx(20, 30, 280, 34, 'DE : BC ＝ 6 : 15 ＝ 2 : 5 ○', C.red, FILL.red, 14), bx(20, 74, 280, 34, '面積比 ＝ 2² : 5² ＝ 4 : 25 ○', C.blue, FILL.blue, 14)], '長さの比 2:5\n面積の比 4:25（2乗）', C.green, FILL.green) },
  { note: 'よくあるまちがいです。相似比をAD:DB（4:6）と勘違いすること。正しくは AD:AB＝4:10 です。これを間違えるとBCも面積比も全部くずれます。', add: S([bx(20, 24, 280, 40, '✕ 4:6 を相似比にする', C.red, FILL.red, 13), ar(160, 68, 160, 86, C.ink), bx(20, 90, 280, 40, '○ 全体どうし AD:AB ＝ 4:10', C.green, FILL.green, 13)], '「全体に対する部分」の比を使う') },
], 'DE∥BCの相似から、BCの長さと面積比を求める');

const ohori_sansu_06: DiagramFigure = show([
  { note: '△ABCの辺AB上に点D、辺AC上に点Eがあり、DE∥BC、AD:DB＝2:3です。△ADEの面積が8cm²のとき、四角形DBCEの面積を求めます。', add: S([parShade(), ...parBase(), ...parLabels('2', '3', '', ''), lb(160, 40, '8cm²', 11, C.blue, 'middle', true)], 'AD:DB＝2:3　△ADE＝8cm²\n四角形DBCE ＝ ？') },
  ...parIntro('2', '3', '2＋3＝5', '2:5'),
  { note: '❓相似比が2:5だと、面積比はいくつ？なぜ2乗？→面積は たて×よこ で、どちらも2:5の倍率がかかるので、2×2：5×5＝4：25です。△ADE:△ABC＝4:25。', add: S([parShade(), ...parBase(), bx(232, 24, 82, 42, '2×2 : 5×5\n＝4 : 25', C.green, FILL.green, 11)], '面積比 △ADE:△ABC ＝ 4:25', C.green, FILL.green) },
  { note: '❓その比から、△ABCの面積は？→△ADE（8cm²）が4つぶん。1つぶんは8÷4＝2cm²。△ABCは25つぶんなので2×25＝50cm²です。', add: S(([lb(14, 50, '△ADE', 11, C.blue, 'start', true), lb(14, 100, '△ABC', 11, C.green, 'start', true), ...Array.from({ length: 4 }, (_, i) => bx(60 + i * 10, 38, 10, 24, undefined, C.blue, FILL.blue, 9)), ...Array.from({ length: 25 }, (_, i) => bx(60 + i * 10, 88, 10, 24, undefined, C.green, FILL.green, 9)), lb(80, 30, '4つぶん＝8', 10, C.blue, 'middle', true), lb(185, 80, '25つぶん＝？', 10, C.green, 'middle', true)] as E[]), '1つぶん＝8÷4＝2cm²\n△ABC＝2×25＝50cm²', C.green, FILL.green) },
  { note: '❓四角形DBCEの面積は、どう求めるの？→△ABCは、△ADEと四角形DBCEをあわせたものです。だから四角形DBCE＝△ABC−△ADE＝50−8＝42cm²です。', add: S([pg([pA, pB, pC], C.ink, 'none'), parShade(), pg([pD, pB, pC, pE], C.red, RED_T), ln(pD[0], pD[1], pE[0], pE[1], C.red, false, 2.5), nm(160, 9, 'A'), nm(38, 143, 'B'), nm(282, 143, 'C'), nm(106, 60, 'D'), nm(214, 60, 'E'), lb(160, 38, '8', 12, C.blue, 'middle', true), lb(160, 100, '42', 14, C.red, 'middle', true)], '△ABC ＝ △ADE ＋ 四角形DBCE\n四角形DBCE ＝ 50－8 ＝ 42cm²', C.red, FILL.red) },
  { note: '答えは 42cm² です。', add: S([pg([pA, pB, pC], C.ink, 'none'), parShade(), pg([pD, pB, pC, pE], C.red, RED_T), ln(pD[0], pD[1], pE[0], pE[1], C.red, false, 2.5), nm(160, 9, 'A'), nm(38, 143, 'B'), nm(282, 143, 'C'), lb(160, 100, '42cm²', 14, C.red, 'middle', true), lb(160, 38, '8', 12, C.blue, 'middle', true)], '答え　42cm²', C.green, FILL.green) },
  { note: '確かめ（検算）です。面積比を4:25としたとき、四角形DBCEは25−4＝21つぶんです。1つぶん2cm²なので21×2＝42cm²で、先ほどと一致します。', add: S([bx(20, 30, 280, 34, '△ADE 4つぶん ＋ 四角形 21つぶん ＝ 25つぶん', C.gray, FILL.gray, 12), bx(20, 74, 280, 34, '21 × 2cm² ＝ 42cm² ○', C.green, FILL.green, 15)], '別の数え方でも 42cm²', C.green, FILL.green) },
  { note: 'よくあるまちがいです。面積比を相似比のまま2:5として、8×5÷2＝20を△ABCの面積にしてしまうこと。面積は2乗なので4:25です。20としてしまうと四角形も12になり、誤りです。', add: S([bx(20, 24, 280, 40, '✕ 面積比 2:5 → △ABC＝20 → 12', C.red, FILL.red, 13), ar(160, 68, 160, 86, C.ink), bx(20, 90, 280, 40, '○ 面積比 4:25 → △ABC＝50 → 42', C.green, FILL.green, 13)], '面積比 ＝ 相似比の2乗') },
], 'DE∥BCの相似と面積比から、四角形の面積を求める');

// ───────── 放物線 y＝x² と直線でできる三角形OAB（y軸で2つに分ける）─────────
type AxCfg = {
  A: Pt; B: Pt; k: number; b: number;
  line: string;            // 直線の式
  cross?: string;          // 交点を求める式（あれば）
  cross2?: string;
  xr: [number, number]; yr: [number, number];
};
const axisTri = (c: AxCfg, problem: string): DiagramFigure => {
  const [xmin, xmax] = c.xr, [ymin, ymax] = c.yr;
  const sx = Math.min(54, 240 / (xmax - xmin)), sy = 126 / (ymax - ymin);
  const ox = 30 + (-xmin) * sx + 10, oy = 10 + ymax * sy;
  const X = (x: number) => ox + x * sx, Y = (y: number) => oy - y * sy;
  const inside = (x: number, y: number) => y <= ymax + 0.2 && y >= ymin - 0.6 && x >= xmin - 0.4 && x <= xmax + 0.5;
  const curve = (f: (x: number) => number, color: string, x0: number, x1: number, width = 2): E[] => {
    const out: E[] = []; const n = 40;
    for (let i = 0; i < n; i++) {
      const xa = x0 + ((x1 - x0) * i) / n, xb = x0 + ((x1 - x0) * (i + 1)) / n;
      if (inside(xa, f(xa)) && inside(xb, f(xb))) out.push(ln(X(xa), Y(f(xa)), X(xb), Y(f(xb)), color, false, width));
    }
    return out;
  };
  const { A, B } = c;
  const Cc: Pt = [0, c.b];
  const axes = (): E[] => [ln(X(xmin - 0.35), Y(0), X(xmax + 0.45), Y(0), C.gray, false, 1.2), ln(X(0), Y(ymax + 0.15), X(0), Y(ymin - 0.5), C.gray, false, 1.2), lb(X(xmax + 0.45), Y(0) - 4, 'x', 10, C.gray, 'end', true), lb(X(0) + 5, 12, 'y', 10, C.gray, 'start', true)];
  const parab = (): E[] => curve((x) => x * x, C.blue, xmin - 0.3, xmax + 0.45, 2);
  const lineAB = (): E[] => curve((x) => c.k * x + c.b, C.red, xmin - 0.3, xmax + 0.45, 2);
  const pts = (withC: boolean): E[] => [
    dot(X(A[0]), Y(A[1]), C.ink, 3), lb(X(A[0]) - 8, Y(A[1]) - 3, 'A', 12, C.ink, 'end', true),
    dot(X(B[0]), Y(B[1]), C.ink, 3), lb(X(B[0]) + 8, Y(B[1]) + 3, 'B', 12, C.ink, 'start', true),
    dot(X(0), Y(0), C.ink, 3), lb(X(0) - 6, Y(0) + 11, 'O', 12, C.ink, 'end', true),
    ...(withC ? [dot(X(0), Y(c.b), C.purple, 3.5), lb(X(0) + (c.b < 0 ? 8 : -8), Y(c.b) + (c.b < 0 ? 3 : -3), 'C', 12, C.purple, c.b < 0 ? 'start' : 'end', true)] : []),
  ];
  const sameSide = A[0] * B[0] > 0;
  const oc = Math.abs(c.b);
  const hA = Math.abs(A[0]), hB = Math.abs(B[0]);
  const aAC = (oc * hA) / 2, aBC = (oc * hB) / 2;
  const total = sameSide ? aBC - aAC : aAC + aBC;
  const f = (n: number) => String(Math.round(n * 100) / 100);
  const triOAC = (): E => pg([[X(0), Y(0)], [X(A[0]), Y(A[1])], [X(0), Y(c.b)]], C.blue, BLUE_T);
  const triOBC = (): E => pg([[X(0), Y(0)], [X(B[0]), Y(B[1])], [X(0), Y(c.b)]], C.red, RED_T);
  const triOAB = (): E => pg([[X(0), Y(0)], [X(A[0]), Y(A[1])], [X(B[0]), Y(B[1])]], C.green, GREEN_T);
  const base = (withC: boolean): E[] => [...axes(), ...parab(), ...lineAB(), ...pts(withC)];
  const dx = B[0] - A[0], dy = B[1] - A[1];
  const slides: { note: string; add: E[] }[] = [];
  slides.push({ note: `${problem}図に、放物線y＝x²と直線ABをかきました。三角形OABの面積を求めるのが目標です。`, add: S([...base(false), triOAB()], `A(${A[0]}, ${A[1]})　B(${B[0]}, ${B[1]})　O は原点\n△OAB の面積は？`) });
  if (c.cross) {
    slides.push({ note: `❓AとBの座標は、どうやって求めるの？→AとBは、放物線と直線が交わる点です。交点ではyが同じなので、2つの式の右辺を等しいとおきます。${c.cross}`, add: S([...axes(), ...parab(), ...lineAB(), bx(150, 18, 160, 26, c.cross, C.green, FILL.green, 11)], `${c.cross}\n${c.cross2 ?? ''}`, C.green, FILL.green) });
    slides.push({ note: `❓解のxが2つ出るのはなぜ？→直線と放物線が2点で交わるので、交点のx座標が2つあるからです。それぞれのxを y＝x² に入れて、yを求めます。A(${A[0]}, ${A[1]})、B(${B[0]}, ${B[1]})。`, add: S([...base(false)], `A(${A[0]}, ${A[1]})　B(${B[0]}, ${B[1]})\nyは y＝x² に入れて出す`) });
  } else {
    slides.push({ note: `❓AとBの座標は？→y＝x²上の点なので、x座標をx²に入れればy座標が出ます。A：x＝${A[0]}のとき y＝${A[1]}、B：x＝${B[0]}のとき y＝${B[1]}です。`, add: S([...axes(), ...parab(), ...pts(false)], `A：x＝${A[0]} → y＝${A[0]}²＝${A[1]}\nB：x＝${B[0]} → y＝${B[0]}²＝${B[1]}`) });
  }
  slides.push({ note: `❓直線ABの傾きは、どう求めるの？→傾きは「xが1増えたとき、yがいくつ増えるか」です。AからBまで、xが${dx}増え、yが${dy}増えるので、傾き＝${dy}÷${dx}＝${f(dy / dx)}です。`, add: S([...base(false), ln(X(A[0]), Y(A[1]), X(B[0]), Y(A[1]), C.purple, true, 1.6), ln(X(B[0]), Y(A[1]), X(B[0]), Y(B[1]), C.purple, true, 1.6), lb((X(A[0]) + X(B[0])) / 2, Y(A[1]) + 12, `xが${dx}`, 10, C.purple, 'middle', true), lb(X(B[0]) - 6, (Y(A[1]) + Y(B[1])) / 2, `yが${dy}`, 10, C.purple, 'end', true)], `傾き ＝ ${dy}÷${dx} ＝ ${f(dy / dx)}`, C.purple, FILL.purple) });
  slides.push({ note: `❓切片は、どう求めるの？→y＝${f(c.k)}x＋b に、通る点（${A[0]}, ${A[1]}）を入れます。${A[1]}＝${f(c.k)}×${A[0] < 0 ? '(' + A[0] + ')' : A[0]}＋b より b＝${f(c.b)}。直線の式は ${c.line} で、y軸との交点は C(0, ${f(c.b)}) です。`, add: S([...base(true)], `${c.line}\n y軸との交点 C(0, ${f(c.b)})　OC＝${f(oc)}`, C.purple, FILL.purple) });
  slides.push({ note: '❓なぜ三角形OABをそのまま計算できないの？→OAもOBもABも、軸にそろっていない斜めの辺なので、底辺と高さ（直角）がすぐには分かりません。そこで、y軸の上にあるOCを使って、2つの三角形に分けます。', add: S([...base(true), triOAB()], '斜めの辺ばかりで\n底辺と高さが直接は出せない') });
  slides.push({ note: `❓OCを底辺にすると、なぜ高さが分かるの？→OCはy軸の上にあります。A・Bからy軸までの距離が、そのままx座標の大きさです。△OACの高さは${hA}、△OBCの高さは${hB}になります。`, add: S([...axes(), ...parab(), ...lineAB(), ...pts(true), triOAC(), triOBC(), ln(X(A[0]), Y(A[1]), X(0), Y(A[1]), C.blue, true, 1.6), ln(X(B[0]), Y(B[1]), X(0), Y(B[1]), C.red, true, 1.6), lb(X(A[0]) / 2 + X(0) / 2, A[1] < ymax / 2 ? Y(A[1]) + 12 : Y(A[1]) - 6, `高さ${hA}`, 10, C.blue, 'middle', true), lb(X(B[0]) / 2 + X(0) / 2, Math.max(Y(B[1]) - 6, 18), `高さ${hB}`, 10, C.red, 'middle', true)], `底辺 OC＝${f(oc)}\n高さ：A は ${hA}、B は ${hB}（x座標の大きさ）`) });
  slides.push({ note: `三角形の面積は「底辺×高さ÷2」です。△OAC＝${f(oc)}×${hA}÷2＝${f(aAC)}、△OBC＝${f(oc)}×${hB}÷2＝${f(aBC)}。`, add: S([bx(20, 30, 130, 44, `△OAC\n${f(oc)}×${hA}÷2＝${f(aAC)}`, C.blue, FILL.blue, 12), bx(170, 30, 130, 44, `△OBC\n${f(oc)}×${hB}÷2＝${f(aBC)}`, C.red, FILL.red, 12)], `△OAC ＝ ${f(aAC)}　△OBC ＝ ${f(aBC)}`) });
  if (sameSide) {
    slides.push({ note: `❓たすの？ひくの？→AとBはy軸の同じ側（どちらもx＞0）です。大きい△OBCの中に、小さい△OACがすっぽり入っていて、その差が△OABです。だから引きます。${f(aBC)}－${f(aAC)}＝${f(total)}。`, add: S([...axes(), ...parab(), ...lineAB(), ...pts(true), triOBC(), triOAC(), triOAB()], `同じ側 → 大きい三角形から小さい方を引く\n${f(aBC)} － ${f(aAC)} ＝ ${f(total)}`, C.green, FILL.green) });
  } else {
    slides.push({ note: `❓たすの？ひくの？→AとBはy軸の反対側にあります。△OACと△OBCはy軸をはさんで左右に並び、重ならずにぴったり合わさって△OABになります。だから足します。${f(aAC)}＋${f(aBC)}＝${f(total)}。`, add: S([...axes(), ...parab(), ...lineAB(), ...pts(true), triOAC(), triOBC()], `反対側 → 左右を合わせる（たす）\n${f(aAC)} ＋ ${f(aBC)} ＝ ${f(total)}`, C.green, FILL.green) });
  }
  slides.push({ note: `答えは ${f(total)} です。`, add: S([...base(true), triOAB()], `答え　△OAB ＝ ${f(total)}`, C.green, FILL.green) });
  slides.push({ note: `確かめ（検算）です。別の見方では、△OAB＝OC×（AとBのx座標のあいだの距離）÷2 です。${f(oc)}×${f(Math.abs(dx))}÷2＝${f(total)}。先ほどと同じ値になりました。`, add: S([bx(20, 30, 280, 36, `OC × (xのあいだの距離) ÷ 2`, C.gray, FILL.gray, 14), bx(20, 76, 280, 36, `${f(oc)} × ${f(Math.abs(dx))} ÷ 2 ＝ ${f(total)} ○`, C.green, FILL.green, 15)], 'y軸で分けた結果と一致', C.green, FILL.green) });
  slides.push({ note: 'よくあるまちがいです。OAとOBを底辺と高さにしてしまうこと。OAとOBは直角に交わっていないので使えません。底辺はy軸上のOC、高さはx座標の大きさ（y軸までの距離）です。高さにy座標を使うのもまちがいです。', add: S([bx(20, 20, 280, 34, '✕ OAとOBを底辺・高さにする', C.red, FILL.red, 13), bx(20, 60, 280, 34, '✕ 高さに y 座標を使う', C.red, FILL.red, 13), bx(20, 100, 280, 36, '○ 底辺はy軸上の OC、高さは x座標', C.green, FILL.green, 13)], 'y軸と直角なのは「横の距離」') });
  return show(slides, 'y軸で2つに分けて、三角形OABの面積を求める');
};
const nanzan_sansu_02 = axisTri({ A: [1, 1], B: [5, 25], k: 6, b: -5, line: 'y＝6x－5', xr: [0, 5], yr: [-5, 25] }, '関数y＝x²のグラフ上に、x座標が1と5の2点A、Bがあります。直線ABの式と、原点Oとの△OABの面積を求めます。');
const nanzan_sansu_14 = axisTri({ A: [-1, 1], B: [2, 4], k: 1, b: 2, line: 'y＝x＋2', xr: [-1, 2], yr: [0, 4] }, '放物線y＝x²上に2点A(－1, 1)、B(2, 4)があります。原点をOとして、△OABの面積を求めます。');
const nanzan_sansu_16 = axisTri({ A: [-1, 1], B: [3, 9], k: 2, b: 3, line: 'y＝2x＋3', cross: 'x²＝2x＋3 → x²－2x－3＝0', cross2: '(x－3)(x＋1)＝0 → x＝3、－1', xr: [-1, 3], yr: [0, 9] }, '放物線y＝x²と直線y＝2x＋3の交点をA、Bとします。原点をOとして、△OABの面積を求めます。');

// ───────── 浮力（押しのけた水の重さ）─────────
const tankBase = (): E[] => [bx(50, 28, 140, 114, undefined, C.blue, 'rgba(2,132,199,0.14)'), ln(50, 34, 190, 34, C.blue, false, 1.5), lb(120, 25, '水', 10, C.blue, 'middle', true)];
const obj = (t: string, color: string = C.gray, fill: string = FILL.gray): E => bx(95, 62, 50, 50, t, color, fill, 11);
const buoyFig = (vol: number, cubeNote: string, problem: string): DiagramFigure => {
  const n = vol / 100;
  const nStr = String(n);
  return show([
    { note: `${problem}図のように、体積${vol}cm³の物体が水の中に完全に沈んでいます。浮力の大きさは何Nでしょう。`, add: S([...tankBase(), obj(`${vol}cm³`), bx(205, 50, 104, 34, `体積 ${vol}cm³`, C.ink, FILL.warm, 11), bx(205, 92, 104, 34, '浮力 ？N', C.red, FILL.red, 12)], `体積 ${vol}cm³ を水中に沈める\n浮力の大きさは？`) },
    { note: '❓なぜ水は物体を上に押し上げるの？→水の圧力は深いほど大きくなります。物体の下の面は上の面より深いので、下から押し上げる力が、上から押す力より大きくなります。その差が浮力です。', add: S([...tankBase(), obj(''), ar(105, 44, 105, 60, C.red), ar(135, 44, 135, 60, C.red), ar(105, 138, 105, 114, C.green), ar(120, 138, 120, 114, C.green), ar(135, 138, 135, 114, C.green), lb(205, 52, '上から：小さい', 11, C.red, 'start', true), lb(205, 122, '下から：大きい', 11, C.green, 'start', true)], '下から押す力 ＞ 上から押す力\nその差が 浮力（上向き）', C.green, FILL.green) },
    { note: '❓その差は、何で決まるの？（アルキメデスの原理）→もし物体のかわりに同じ形の水のかたまりがあったら、その水は沈みも浮きもせず止まっています。つまり周りの水は、そのかたまりの重さをちょうど支えているはずです。物体があっても周りの水の押し方は同じなので、浮力＝押しのけた水の重さになります。', add: S([...tankBase(), bx(95, 62, 50, 50, '同じ形の\n水', C.blue, 'rgba(2,132,199,0.25)', 10), ar(120, 138, 120, 114, C.green), ar(120, 40, 120, 60, C.red)], '同じ形の水は 止まっている\n→ 周りの水は その重さを支えている') },
    { note: `❓押しのけた水の体積は？→物体が完全に沈んでいるので、物体の体積と同じです。${cubeNote}押しのけた水は${vol}cm³です。`, add: S([...tankBase(), obj(`${vol}cm³`), bx(205, 60, 104, 40, `押しのけた水\n${vol}cm³`, C.blue, FILL.blue, 12)], `押しのけた水の体積 ＝ 物体の体積\n＝ ${vol}cm³`) },
    { note: `❓その水の重さ（質量）は？→水の密度は1g/cm³、つまり1cm³で1gです。${vol}cm³なら${vol}gです。`, add: S([bx(20, 34, 130, 40, `${vol}cm³`, C.blue, FILL.blue, 15), lb(160, 54, '×', 16, C.ink, 'middle', true), bx(170, 34, 130, 40, '1g/cm³', C.blue, FILL.blue, 15), ar(160, 80, 160, 100, C.ink), bx(90, 104, 140, 34, `${vol}g`, C.green, FILL.green, 16)], `${vol}cm³ × 1g ＝ ${vol}g`) },
    { note: `❓質量${vol}gを、力のN（ニュートン）に直すには？→100gの物体にはたらく重力が1Nという決まりです。${vol}gは100gが${nStr}個ぶんなので、${vol}÷100＝${nStr}Nです。`, add: S([...Array.from({ length: Math.min(n, 10) }, (_, i) => bx(20 + i * 28, 40, 24, 30, '100g', C.blue, FILL.blue, 8)), lb(160, 92, `100g ＝ 1N　→　${nStr}個ぶん`, 13, C.ink, 'middle', true), bx(90, 106, 140, 32, `${nStr}N`, C.green, FILL.green, 16)], `${vol} ÷ 100 ＝ ${nStr}N`, C.green, FILL.green) },
    { note: `答えは浮力＝${nStr}Nです。`, add: S([...tankBase(), obj(`${vol}cm³`), ar(120, 138, 120, 114, C.green), bx(205, 60, 104, 40, `浮力\n${nStr}N（上向き）`, C.green, FILL.green, 12)], `答え　浮力 ＝ ${nStr}N`, C.green, FILL.green) },
    { note: `確かめ（検算）です。水100cm³の重さは100g＝1Nなので、${vol}cm³は「100cm³が${nStr}個」で${nStr}Nです。最初の計算と一致します。`, add: S([...Array.from({ length: Math.min(n, 10) }, (_, i) => bx(20 + i * 28, 40, 24, 30, '100cm³', C.blue, FILL.blue, 7)), lb(160, 92, `水100cm³ ＝ 1N　が ${nStr}個 ＝ ${nStr}N`, 12, C.ink, 'middle', true)], `別の数え方でも ${nStr}N ○`, C.green, FILL.green) },
    { note: '❓物体を深く沈めたら、浮力は大きくなるの？→完全に沈んだあとは、押しのける水の体積が変わらないので、浮力も変わりません。深さは関係ありません。', add: S([bx(40, 28, 100, 114, undefined, C.blue, 'rgba(2,132,199,0.14)'), bx(180, 28, 100, 114, undefined, C.blue, 'rgba(2,132,199,0.14)'), bx(65, 50, 50, 40, `${n}N`, C.green, FILL.green, 12), bx(205, 92, 50, 40, `${n}N`, C.green, FILL.green, 12), lb(90, 22, '浅い', 10, C.gray, 'middle', true), lb(230, 22, '深い', 10, C.gray, 'middle', true)], '完全に沈めたら 深さは関係ない\n押しのける水の体積が同じだから') },
    { note: `よくあるまちがいです。${vol}をそのままNの値にしたり、質量のg（${vol}g）のまま答えにしたりすること。浮力は力なので、Nに直す必要があります。また、物体の重さや材質は浮力に関係しません。`, add: S([bx(20, 24, 280, 34, `✕ ${vol}N　／　${vol}g（単位が力になっていない）`, C.red, FILL.red, 12), bx(20, 66, 280, 34, `○ ${vol}g ÷ 100 ＝ ${nStr}N`, C.green, FILL.green, 13), bx(20, 108, 280, 30, '物体の重さ・材質は 浮力に関係しない', C.purple, FILL.purple, 12)], '浮力 ＝ 押しのけた水の重さ') },
  ], '浮力は、押しのけた水の重さ');
};
const azabu_rika_11 = buoyFig(1000, '体積は1辺10cmの立方体なので10×10×10＝1000cm³。', '1辺10cmの立方体を水中に完全に沈めたとき、はたらく浮力の大きさを求めます。');
const taki_rika_08 = buoyFig(200, '', '体積200cm³の物体を水中に完全に沈めたとき、物体が受ける浮力の大きさを求めます。');
const nanzan_rika_12 = buoyFig(500, '', '体積500cm³の物体を水中に完全に沈めたとき、はたらく浮力の大きさを求めます。');

// ばねばかりで水中の重さを測る
const springS = (x: number, hangY: number, label: string): E[] => [ln(x, 14, x, 30, C.gray, false, 2), bx(x - 16, 30, 32, 24, label, C.ink, FILL.warm, 10), ln(x, 54, x, hangY, C.gray, false, 2)];
const seinan_rika_11: DiagramFigure = show([
  { note: '質量300gの物体（重力3N）を水中に沈めたら、浮力が1.2Nでした。このときばねばかりが示す値を求めます。', add: S([...springS(70, 70, 'ばね'), bx(45, 70, 50, 40, '3N', C.gray, FILL.gray, 12), lb(70, 126, '空気中', 11, C.ink, 'middle', true), bx(150, 44, 150, 98, undefined, C.blue, 'rgba(2,132,199,0.14)'), ...springS(225, 62, 'ばね'), bx(200, 62, 50, 40, '物体', C.gray, FILL.gray, 11), ar(262, 130, 262, 104, C.green), lb(158, 124, '浮力1.2N', 10, C.green, 'start', true)], '重力 3N　浮力 1.2N\nばねばかりの値は？') },
  { note: '❓ばねばかりは何を測っているの？→ばねばかりは、ばねがのびる力、つまり「ひもで物体を支えている上向きの力」を示します。物体が静止しているとき、上向きの力の合計と下向きの力（重力）はつり合っています。', add: S([...springS(130, 70, 'ばね'), bx(105, 70, 50, 40, '物体', C.gray, FILL.gray, 12), ar(178, 70, 178, 40, C.green), ar(130, 112, 130, 138, C.red), lb(190, 52, '上向き：ばねの力', 10, C.green, 'start', true), lb(142, 134, '下向き：重力', 10, C.red, 'start', true)], '静止 → 上向きの合計 ＝ 下向きの合計', C.green, FILL.green) },
  { note: '空気中の場合です。上向きの力はばねだけ。重力3Nとつり合うので、ばねばかりは3Nを示します。', add: S([...springS(130, 70, 'ばね'), bx(105, 70, 50, 40, '3N', C.gray, FILL.gray, 12), ar(178, 70, 178, 40, C.green), ar(130, 112, 130, 138, C.red), lb(190, 52, 'ばね 3N', 11, C.green, 'start', true), lb(142, 134, '重力 3N', 11, C.red, 'start', true)], '空気中：ばね 3N ＝ 重力 3N') },
  { note: '❓水中では、上向きの力は何が増えるの？→水が物体を押し上げる浮力1.2Nが加わります。上向きの力は「ばねの力＋浮力」、下向きは重力3Nで、この2つがつり合います。', add: S([bx(150, 28, 140, 114, undefined, C.blue, 'rgba(2,132,199,0.14)'), ...springS(225, 70, 'ばね'), bx(200, 70, 50, 40, '3N', C.gray, FILL.gray, 12), ar(208, 112, 208, 138, C.red), ar(242, 138, 242, 112, C.green), lb(120, 60, '上向き', 11, C.green, 'end', true), lb(120, 76, 'ばね＋浮力1.2', 11, C.green, 'end', true), lb(120, 100, '下向き', 11, C.red, 'end', true), lb(120, 116, '重力3', 11, C.red, 'end', true)], '（ばねの力）＋ 1.2 ＝ 3') },
  { note: '❓なぜ引き算になるの？→浮力が1.2Nぶん物体を支えてくれるので、ばねが支える力は、重力3Nからそのぶんを引いた残りになります。3－1.2＝1.8Nです。', add: S([bx(20, 30, 130, 40, '重力 3N', C.red, FILL.red, 15), lb(160, 52, '－', 18, C.ink, 'middle', true), bx(170, 30, 130, 40, '浮力 1.2N', C.green, FILL.green, 15), ar(160, 76, 160, 94, C.ink), bx(90, 98, 140, 36, '1.8N', C.blue, FILL.blue, 18)], 'ばね ＝ 3 － 1.2 ＝ 1.8N', C.green, FILL.green) },
  { note: '答えは1.8Nです。水中では物体が「1.8Nの重さ」に感じられます（見かけの重さ）。', add: S([bx(150, 28, 140, 114, undefined, C.blue, 'rgba(2,132,199,0.14)'), ...springS(90, 70, 'ばね'), bx(65, 70, 50, 40, '物体', C.gray, FILL.gray, 11), lb(90, 126, '1.8N', 14, C.blue, 'middle', true), bx(195, 70, 50, 40, '浮力\n1.2N', C.green, FILL.green, 11)], '答え　1.8N', C.green, FILL.green) },
  { note: '確かめ（検算）です。ばねの力1.8Nと浮力1.2Nを足すと3.0Nで、重力3Nとちょうどつり合います。', add: S([bx(20, 34, 130, 40, 'ばね 1.8N', C.blue, FILL.blue, 15), lb(160, 56, '＋', 18, C.ink, 'middle', true), bx(170, 34, 130, 40, '浮力 1.2N', C.green, FILL.green, 15), ar(160, 80, 160, 98, C.ink), bx(90, 102, 140, 34, '3.0N ＝ 重力 ○', C.red, FILL.red, 14)], '上向きの合計 ＝ 下向き（重力）', C.green, FILL.green) },
  { note: '❓浮力1.2Nなら、押しのけた水は何cm³？→浮力は押しのけた水の重さ。100gで1Nなので、1.2Nは120g。水は1cm³で1gですから120cm³です。この物体の密度は300÷120＝2.5g/cm³で、水より重いので沈みます。', add: S([bx(20, 34, 130, 40, '1.2N ＝ 120g', C.green, FILL.green, 14), ar(160, 54, 185, 54, C.ink), bx(190, 34, 110, 40, '120cm³', C.blue, FILL.blue, 15), bx(20, 88, 280, 40, '物体：300g ÷ 120cm³ ＝ 2.5g/cm³', C.gray, FILL.gray, 14)], '物体の体積は120cm³\n水(1g/cm³)より重い → 沈む') },
  { note: 'よくあるまちがいです。3＋1.2＝4.2とたしてしまうこと。浮力は上向きで、重力を軽くする向きです。ばねばかりの値は、空気中より小さくなります。', add: S([bx(20, 24, 280, 40, '✕ 3 ＋ 1.2 ＝ 4.2N（空気中より重くなる）', C.red, FILL.red, 13), ar(160, 68, 160, 86, C.ink), bx(20, 90, 280, 40, '○ 3 － 1.2 ＝ 1.8N（軽く感じる）', C.green, FILL.green, 13)], '浮力は上向き → 引く') },
  { note: '❓もし浮力が3Nになったら？→ばねの力は3－3＝0。ばねばかりは0Nで、物体は水に浮いて静止します。浮力が重力より大きければ浮き、小さければ沈む、という判断につながります。', add: S([bx(20, 30, 130, 40, '浮力＜重力\n沈む', C.red, FILL.red, 12), bx(170, 30, 130, 40, '浮力＝重力\n浮いて静止', C.green, FILL.green, 12), bx(90, 84, 140, 40, '浮力＞重力\n浮き上がる', C.blue, FILL.blue, 12)], '浮力と重力をくらべる') },
], '水中のばねばかりの値＝重力－浮力');

const kurume_rika_16: DiagramFigure = show([
  { note: '体積500cm³・質量450gの物体を水中に完全に沈めます。浮力の大きさを求め、浮くか沈むかを判断します。1kgにはたらく重力は9.8Nとします。', add: S([...tankBase(), obj('500cm³\n450g'), bx(205, 50, 104, 34, '浮力 ？N', C.red, FILL.red, 12), bx(205, 92, 104, 34, '浮く？沈む？', C.purple, FILL.purple, 11)], '体積 500cm³　質量 450g\n浮力は？　浮くか沈むか？') },
  { note: '❓浮力は何で決まるの？→押しのけた水の重さです。水の圧力は深いほど大きく、物体の下の面は上の面より深いので、差が上向きに残ります。物体が押しのけた水と同じ形の水が支えられていた力と同じだからです。', add: S([...tankBase(), bx(95, 62, 50, 50, '同じ形の\n水', C.blue, 'rgba(2,132,199,0.25)', 10), ar(120, 138, 120, 114, C.green), ar(120, 40, 120, 60, C.red)], '浮力 ＝ 押しのけた水の重さ') },
  { note: '❓押しのけた水は何g？→完全に沈んだので体積は500cm³。水は1cm³で1gですから500gです。', add: S([bx(20, 34, 130, 40, '500cm³', C.blue, FILL.blue, 15), lb(160, 54, '×', 16, C.ink, 'middle', true), bx(170, 34, 130, 40, '1g/cm³', C.blue, FILL.blue, 15), ar(160, 80, 160, 100, C.ink), bx(90, 104, 140, 34, '500g', C.green, FILL.green, 16)], '押しのけた水 ＝ 500g') },
  { note: '❓500gの水の重さは何N？→1kgにはたらく重力が9.8Nなので、500g＝0.5kgには9.8×0.5＝4.9Nがはたらきます。これが浮力です。', add: S([bx(20, 34, 130, 40, '0.5kg', C.blue, FILL.blue, 15), lb(160, 54, '×', 16, C.ink, 'middle', true), bx(170, 34, 130, 40, '9.8N/kg', C.blue, FILL.blue, 15), ar(160, 80, 160, 100, C.ink), bx(90, 104, 140, 34, '4.9N', C.green, FILL.green, 16)], '浮力 ＝ 0.5 × 9.8 ＝ 4.9N', C.green, FILL.green) },
  { note: '❓では浮くか沈むかは、何とくらべて決めるの？→浮力（上向き）と、物体の重さ（下向き）をくらべます。上向きが大きければ浮き、小さければ沈みます。', add: S([bx(40, 40, 90, 50, '浮力\n上向き', C.green, FILL.green, 13), lb(160, 66, 'vs', 14, C.ink, 'middle', true), bx(190, 40, 90, 50, '重さ\n下向き', C.red, FILL.red, 13)], '浮力 ＞ 重さ → 浮く\n浮力 ＜ 重さ → 沈む') },
  { note: '❓物体の重さは何N？→450g＝0.45kgなので、0.45×9.8＝4.41Nです。', add: S([bx(20, 34, 130, 40, '0.45kg', C.blue, FILL.blue, 15), lb(160, 54, '×', 16, C.ink, 'middle', true), bx(170, 34, 130, 40, '9.8N/kg', C.blue, FILL.blue, 15), ar(160, 80, 160, 100, C.ink), bx(90, 104, 140, 34, '4.41N', C.red, FILL.red, 16)], '物体の重さ ＝ 0.45 × 9.8 ＝ 4.41N', C.red, FILL.red) },
  { note: '浮力4.9Nと重さ4.41Nをくらべると、4.9＞4.41。上向きの力のほうが大きいので、物体は浮きます。', add: S([bx(40, 40, 110, 50, '浮力 4.9N', C.green, FILL.green, 14), lb(165, 66, '＞', 20, C.ink, 'middle', true), bx(180, 40, 110, 50, '重さ 4.41N', C.red, FILL.red, 14)], '4.9 ＞ 4.41 → 浮く', C.green, FILL.green) },
  { note: '答えは、浮力は約4.9N（500gの水の重さ）、物体は浮く、です。', add: S([...tankBase(), bx(95, 34, 50, 28, '450g', C.gray, FILL.gray, 11), ar(120, 100, 120, 66, C.green), lb(205, 70, '浮力 4.9N', 12, C.green, 'start', true)], '答え　浮力 約4.9N　物体は浮く', C.green, FILL.green) },
  { note: '確かめ（検算）です。密度でも判断できます。450÷500＝0.9g/cm³で、水の1g/cm³より小さいので浮きます。重さの比べ方と同じ結論になりました。', add: S([bx(20, 34, 130, 40, '450g ÷ 500cm³', C.gray, FILL.gray, 12), ar(160, 54, 185, 54, C.ink), bx(190, 34, 110, 40, '0.9g/cm³', C.blue, FILL.blue, 15), bx(40, 92, 240, 38, '0.9 ＜ 1（水）→ 浮く ○', C.green, FILL.green, 14)], '密度でも 浮く と分かる', C.green, FILL.green) },
  { note: '❓浮いたとき、浮力はまだ4.9Nのまま？→完全に沈めたときが4.9Nです。浮いて水面から出ていくと、押しのける水が減って浮力も小さくなり、浮力＝重さ（4.41N）になったところで静止します。', add: S([bx(50, 28, 140, 114, undefined, C.blue, 'rgba(2,132,199,0.14)'), ln(50, 70, 190, 70, C.blue, false, 1.5), bx(95, 58, 50, 40, '450g', C.gray, FILL.gray, 11), ar(120, 138, 120, 100, C.green), lb(205, 70, '静止すると', 11, C.ink, 'start', true), lb(205, 86, '浮力＝4.41N', 11, C.green, 'start', true)], '浮くと 浮力は重さと同じ 4.41N に') },
], '浮力と重さをくらべて、浮くか沈むかを判断する');

// ───────── 地震（P波・S波・初期微動継続時間）─────────
const quakeFig = (D: number, vp: number, vs: number, T: number, perS: string, perP: string, perDiff: string, withFormula: boolean, problem: string): DiagramFigure => {
  const tS = D / vs, tP = D / vp;
  const pxs = 240 / tS;
  const timeBars = (showDiff: boolean): E[] => [
    lb(14, 50, 'P波', 11, C.blue, 'start', true), bx(50, 38, tP * pxs, 24, `${tP}秒`, C.blue, FILL.blue, 11),
    lb(14, 92, 'S波', 11, C.red, 'start', true), bx(50, 80, tS * pxs, 24, `${tS}秒`, C.red, FILL.red, 11),
    ...(showDiff ? [bx(50 + tP * pxs, 38, (tS - tP) * pxs, 24, `${T}秒`, C.purple, FILL.purple, 11), lb(50 + (tP + tS) * pxs / 2, 120, `差 ${T}秒＝初期微動継続時間`, 11, C.purple, 'middle', true)] : []),
  ];
  const route = (): E[] => [ci(40, 60, 9, '震源', C.red, FILL.red, 7), ln(49, 60, 266, 60, C.gray, true, 1.5), bx(266, 48, 38, 24, '観測点', C.green, FILL.green, 8), lb(158, 50, '距離 D', 10, C.gray, 'middle', true)];
  return show([
    { note: `${problem}震源から観測点までの距離を求めます。距離を文字Dで表して考えます。`, add: S([ci(40, 60, 9, '震源', C.red, FILL.red, 7), ln(49, 60, 266, 60, C.gray, true, 1.5), bx(266, 48, 38, 24, '観測点', C.green, FILL.green, 8), lb(158, 50, '距離 D km（求めたい）', 11, C.gray, 'middle', true), lb(158, 84, `P波 ${vp}km/秒　S波 ${vs}km/秒`, 12, C.ink, 'middle', true), lb(158, 104, `初期微動継続時間 ${T}秒`, 12, C.purple, 'middle', true)], `P波 ${vp}km/秒　S波 ${vs}km/秒\n初期微動継続時間 ${T}秒　D＝？`) },
    { note: '❓初期微動継続時間とは、何の時間？→地震では、速いP波が先に届いて小さなゆれ（初期微動）が始まり、おくれてS波が届くと大きなゆれ（主要動）になります。P波が届いてからS波が届くまでの時間が、初期微動継続時間です。', add: S([bx(30, 36, 100, 30, 'P波到着：小さなゆれ', C.blue, FILL.blue, 10), bx(190, 36, 100, 30, 'S波到着：大きなゆれ', C.red, FILL.red, 10), ar(130, 51, 190, 51, C.purple), lb(160, 84, `この間が ${T}秒`, 12, C.purple, 'middle', true)], `初期微動継続時間\n＝ S波の到着時刻 － P波の到着時刻`, C.purple, FILL.purple) },
    { note: '❓なぜ2つの波の到着に差が出るの？→どちらも同じ場所から同時に出発しますが、P波のほうが速いので先に着きます。遅いS波は同じ道のりに時間がかかります。距離が遠いほど、この差は大きくなります。', add: S([...route(), ar(60, 30, 200, 30, C.blue), lb(130, 24, 'P波（速い）', 10, C.blue, 'middle', true), ar(60, 82, 120, 82, C.red), lb(90, 96, 'S波（おそい）', 10, C.red, 'middle', true)], 'P波が先に着く\n遠いほど 差が広がる') },
    { note: `❓波が届くまでの時間はどう求める？→時間＝距離÷速さです。S波はD÷${vs}秒、P波はD÷${vp}秒かかります。`, add: S([bx(20, 34, 130, 40, `S波：D ÷ ${vs}`, C.red, FILL.red, 14), bx(170, 34, 130, 40, `P波：D ÷ ${vp}`, C.blue, FILL.blue, 14), lb(160, 100, '時間 ＝ 距離 ÷ 速さ', 14, C.ink, 'middle', true)], `S波 D÷${vs}秒　P波 D÷${vp}秒`) },
    { note: `その差が${T}秒なので、式はD÷${vs}－D÷${vp}＝${T}です。ここで、1kmあたりの時間で考えると分かりやすくなります。S波は1kmに1/${vs}秒、P波は1kmに1/${vp}秒かかります。`, add: S([bx(20, 34, 130, 40, `S波 1kmで\n1/${vs}秒`, C.red, FILL.red, 13), bx(170, 34, 130, 40, `P波 1kmで\n1/${vp}秒`, C.blue, FILL.blue, 13), lb(160, 100, `D÷${vs} － D÷${vp} ＝ ${T}`, 14, C.purple, 'middle', true)], `D÷${vs} － D÷${vp} ＝ ${T}（秒）`, C.purple, FILL.purple) },
    { note: `❓1kmごとに、差はどれだけ広がるの？→1/${vs}－1/${vp}を通分して計算します。${perS}－${perP}＝${perDiff}秒。つまり、1km進むごとに差が${perDiff}秒ずつ広がります。`, add: S([bx(20, 30, 130, 34, perS + '秒', C.red, FILL.red, 14), lb(160, 48, '－', 18, C.ink, 'middle', true), bx(170, 30, 130, 34, perP + '秒', C.blue, FILL.blue, 14), ar(160, 70, 160, 90, C.ink), bx(70, 94, 180, 38, `${perDiff}秒 / km`, C.purple, FILL.purple, 16)], `1kmごとに差が ${perDiff}秒 ずつ広がる`, C.purple, FILL.purple) },
    { note: `❓差が${T}秒になるのは、何km進んだとき？→1kmで${perDiff}秒広がるので、${T}秒ぶんを${perDiff}で割ります。${T}÷（${perDiff}）＝${D}。距離は${D}kmです。`, add: S([bx(30, 30, 260, 34, `1km進むと　差は ${perDiff}秒`, C.purple, FILL.purple, 14), bx(30, 76, 260, 34, `${D}km進むと　${perDiff}秒 × ${D} ＝ ${T}秒`, C.green, FILL.green, 14), lb(160, 128, `差が ${T}秒 になるのは ${D}km`, 12, C.ink, 'middle', true)], `${T} ÷ ${perDiff} ＝ ${D}km`, C.green, FILL.green) },
    ...(withFormula ? [{ note: `❓大森公式は、どこから来たの？→いま行ったことをまとめた式です。1kmあたりの差は（${vp}－${vs}）÷（${vp}×${vs}）秒。これで${T}秒を割ると、距離＝${T}×（${vp}×${vs}）÷（${vp}－${vs}）になります。公式は、割り算を逆数のかけ算にした形です。`, add: S([bx(20, 34, 280, 36, `1kmあたりの差 ＝ (${vp}－${vs}) ÷ (${vp}×${vs})`, C.purple, FILL.purple, 13), bx(20, 82, 280, 44, `D ＝ ${T} × (${vp}×${vs}) ÷ (${vp}－${vs})\n＝ ${T} × ${vp * vs} ÷ ${vp - vs} ＝ ${D}`, C.green, FILL.green, 13)], '公式に入れても D ＝ ' + D + 'km', C.green, FILL.green) }] : [{ note: '❓距離を2倍にすると、初期微動継続時間はどうなる？→1kmごとの差が同じ割合で積み重なるので、距離が2倍なら差も2倍になります。つまり、初期微動継続時間は震源からの距離に比例します。', add: S([bx(20, 30, 130, 34, `${D}km → ${T}秒`, C.green, FILL.green, 13), bx(170, 30, 130, 34, `${D * 2}km → ${T * 2}秒`, C.green, FILL.green, 13), lb(160, 100, '距離が2倍 → 差も2倍（比例）', 13, C.ink, 'middle', true)], '初期微動継続時間は 距離に比例') }]),
    { note: `答えは震源までの距離＝${D}kmです。`, add: S(timeBars(true), `答え　震源までの距離 ${D}km`, C.green, FILL.green) },
    { note: `確かめ（検算）です。S波は${D}÷${vs}＝${tS}秒、P波は${D}÷${vp}＝${tP}秒。その差は${tS}－${tP}＝${T}秒で、問題の初期微動継続時間と一致します。`, add: S(timeBars(true), `S波 ${tS}秒 － P波 ${tP}秒 ＝ ${T}秒 ○`, C.green, FILL.green) },
    { note: `よくあるまちがいです。速さの差（${vp}－${vs}）と積（${vp}×${vs}）を取りちがえたり、分母を${vp}＋${vs}にしたりすること。意味から考えれば、「差を作るのは引き算、1kmあたりの差は速さの逆数の差」と分かります。`, add: S([bx(20, 24, 280, 34, `✕ 分母を ${vp}＋${vs} にする`, C.red, FILL.red, 13), bx(20, 66, 280, 34, `✕ 積と差を入れかえる`, C.red, FILL.red, 13), bx(20, 108, 280, 34, `○ 時間の差：D÷${vs} － D÷${vp} ＝ ${T}`, C.green, FILL.green, 13)], '公式の暗記より、時間＝距離÷速さ から') },
  ], '地震波の到着時間の差から、震源までの距離を求める');
};
const seinan_rika_15 = quakeFig(96, 6, 4, 8, '3/12', '2/12', '1/12', true, '初期微動継続時間が8秒、P波の速さ6km/秒、S波の速さ4km/秒です。');
const taki_rika_07 = quakeFig(60, 6, 3, 10, '2/6', '1/6', '1/6', true, '初期微動継続時間が10秒、P波の速さ6km/秒、S波の速さ3km/秒です。');
const kurume_rika_13 = quakeFig(96, 6, 4, 8, '3/12', '2/12', '1/12', false, '初期微動継続時間が8秒、P波の速さ6km/秒、S波の速さ4km/秒です。');

// ───────── オームの法則 ─────────
const circ = (v: string, r: string, i: string, iColor: string = C.red): E[] => [
  ln(50, 35, 120, 35, C.ink, false, 2), bx(120, 22, 80, 26, r, C.blue, FILL.blue, 13), ln(200, 35, 270, 35, C.ink, false, 2), ln(270, 35, 270, 115, C.ink, false, 2), ln(270, 115, 50, 115, C.ink, false, 2),
  ln(50, 35, 50, 62, C.ink, false, 2), bx(34, 62, 32, 26, v, C.red, FILL.red, 12), ln(50, 88, 50, 115, C.ink, false, 2),
  ar(220, 70, 252, 70, iColor), lb(236, 84, i, 12, iColor, 'middle', true),
];
const taki_rika_03: DiagramFigure = show([
  { note: '抵抗20Ωの電熱線に4Vの電圧を加えます。流れる電流の大きさを求めます。図に数値を書きこみます。', add: S(circ('4V', '20Ω', '電流？'), '電圧 4V　抵抗 20Ω\n電流 ＝ ？A') },
  { note: '❓電圧・電流・抵抗は、それぞれ何？→水路にたとえると、電圧は水を押し出す高さの差、電流は流れる水の量、抵抗は管の細さ（流れにくさ）です。', add: S([bx(20, 34, 86, 50, '電圧 V\n押す力\n（高さの差）', C.red, FILL.red, 10), bx(117, 34, 86, 50, '電流 A\n流れる量', C.green, FILL.green, 11), bx(214, 34, 86, 50, '抵抗 Ω\n流れにくさ\n（細い管）', C.blue, FILL.blue, 10), lb(160, 110, '押す力が強いほど たくさん流れる', 12, C.ink, 'middle', true)], '電圧が大きい → 電流は増える\n抵抗が大きい → 電流は減る') },
  { note: '❓電圧を大きくすると、電流はどう変わるの？→同じ抵抗（20Ω）なら、電圧が2倍・3倍になると、電流も2倍・3倍になります（比例）。4Vで0.2Aなら、8Vで0.4Aです。', add: S([ln(50, 130, 290, 130, C.gray, false, 1.2), ln(50, 130, 50, 20, C.gray, false, 1.2), lb(290, 142, '電圧', 10, C.gray, 'end', true), lb(56, 18, '電流', 10, C.gray, 'start', true), ln(50, 130, 270, 35, C.blue, false, 2.5), dot(160, 82.5, C.red, 4), lb(160, 70, '4V → 0.2A', 10, C.red, 'middle', true), dot(270, 35, C.red, 3), lb(262, 26, '8V → 0.4A', 10, C.red, 'end', true)], '電圧 2倍 → 電流 2倍\n（原点を通る直線）') },
  { note: '❓抵抗を大きくすると、電流はどう変わるの？→同じ4Vでも、抵抗が2倍になると電流は半分、4倍になると4分の1になります。10Ωで0.4A、20Ωで0.2A、40Ωで0.1Aです。', add: S([bx(20, 26, 80, 30, undefined, C.blue, FILL.blue), lb(108, 45, '10Ω：0.4A', 12, C.ink, 'start', true), bx(20, 66, 40, 30, undefined, C.blue, FILL.blue), lb(68, 85, '20Ω：0.2A', 12, C.ink, 'start', true), bx(20, 106, 20, 30, undefined, C.blue, FILL.blue), lb(48, 125, '40Ω：0.1A', 12, C.ink, 'start', true), lb(250, 70, '抵抗が大きいほど\n流れにくい', 12, C.ink, 'middle', true)], '抵抗 2倍 → 電流 半分') },
  { note: '❓式「電流＝電圧÷抵抗」は、なぜ成り立つの？→20Ωとは「1Aを流すのに20Vが必要」という大きさです。4Vは20Vの4/20なので、流れる電流も1Aの4/20になります。つまり 4÷20＝0.2Aです。', add: S([bx(20, 26, 280, 34, '20Ω ＝ 1A を流すのに 20V 必要', C.blue, FILL.blue, 13), ar(160, 64, 160, 80, C.ink), bx(20, 84, 280, 34, '4V は 20V の 4/20 → 電流も 1A の 4/20', C.green, FILL.green, 13)], '電流 ＝ 電圧 ÷ 抵抗', C.green, FILL.green) },
  { note: '式に数値を入れます。電流＝電圧÷抵抗＝4÷20＝0.2Aです。', add: S([bx(20, 34, 130, 40, '電圧 4V', C.red, FILL.red, 15), lb(160, 54, '÷', 18, C.ink, 'middle', true), bx(170, 34, 130, 40, '抵抗 20Ω', C.blue, FILL.blue, 15), ar(160, 80, 160, 98, C.ink), bx(90, 102, 140, 34, '0.2A', C.green, FILL.green, 18)], '4 ÷ 20 ＝ 0.2A', C.green, FILL.green) },
  { note: '答えは0.2Aです。', add: S(circ('4V', '20Ω', '0.2A', C.green), '答え　0.2A', C.green, FILL.green) },
  { note: '確かめ（検算）です。電圧＝電流×抵抗なので、0.2×20＝4V。問題の電圧と一致します。', add: S([bx(20, 34, 130, 40, '電流 0.2A', C.green, FILL.green, 14), lb(160, 54, '×', 18, C.ink, 'middle', true), bx(170, 34, 130, 40, '抵抗 20Ω', C.blue, FILL.blue, 14), ar(160, 80, 160, 98, C.ink), bx(90, 102, 140, 34, '4V ○', C.red, FILL.red, 16)], '0.2 × 20 ＝ 4V（もとの電圧）', C.green, FILL.green) },
  { note: '❓0.2Aは、ふさわしい大きさ？→抵抗（20Ω）が電圧（4V）の数値よりずっと大きいので、電流は1Aより小さくなるはずです。0.2Aは1Aより小さいので、つじつまが合います。', add: S([bx(20, 34, 130, 40, '抵抗 20 ＞ 電圧 4', C.blue, FILL.blue, 12), ar(160, 54, 180, 54, C.ink), bx(185, 34, 115, 40, '電流は 1A未満', C.green, FILL.green, 12)], '大きさの見当をつけてから計算') },
  { note: 'よくあるまちがいです。20÷4＝5と、抵抗÷電圧にしてしまうこと。抵抗が大きいほど電流は小さくなるはずなのに、5Aという大きな電流になってしまい、意味がおかしくなります。電流は「電圧÷抵抗」です。', add: S([bx(20, 24, 280, 40, '✕ 20 ÷ 4 ＝ 5A（抵抗が大きいのに電流が大きい）', C.red, FILL.red, 12), ar(160, 68, 160, 86, C.ink), bx(20, 90, 280, 40, '○ 4 ÷ 20 ＝ 0.2A', C.green, FILL.green, 15)], '電流 ＝ 電圧 ÷ 抵抗') },
], 'オームの法則で電流を求める');

const kurume_rika_03: DiagramFigure = show([
  { note: '抵抗10Ωの電熱線に電圧5.0Vをかけます。流れる電流の大きさと、電熱線が消費する電力を求めます。', add: S(circ('5.0V', '10Ω', '電流？'), '電圧 5.0V　抵抗 10Ω\n電流？　電力？') },
  { note: '❓電流はどう求めるの？→10Ωとは「1Aを流すのに10Vが必要」という大きさです。5.0Vは10Vの半分ですから、流れる電流も1Aの半分です。', add: S([bx(20, 26, 280, 34, '10Ω ＝ 1A を流すのに 10V 必要', C.blue, FILL.blue, 13), ar(160, 64, 160, 80, C.ink), bx(20, 84, 280, 34, '5.0V は 10V の半分 → 電流も 1A の半分', C.green, FILL.green, 13)], '電流 ＝ 電圧 ÷ 抵抗', C.green, FILL.green) },
  { note: '式に入れます。電流＝電圧÷抵抗＝5.0÷10＝0.5Aです。', add: S([bx(20, 34, 130, 40, '電圧 5.0V', C.red, FILL.red, 15), lb(160, 54, '÷', 18, C.ink, 'middle', true), bx(170, 34, 130, 40, '抵抗 10Ω', C.blue, FILL.blue, 15), ar(160, 80, 160, 98, C.ink), bx(90, 102, 140, 34, '0.5A', C.green, FILL.green, 18)], '5.0 ÷ 10 ＝ 0.5A', C.green, FILL.green) },
  { note: '❓電力とは何？→電力は、1秒あたりに使う電気のエネルギー（熱や光になる量）です。単位はW（ワット）です。', add: S([bx(40, 40, 110, 50, '電力 W\n1秒に使う\nエネルギー', C.purple, FILL.purple, 11), ar(156, 65, 184, 65, C.ink), bx(190, 40, 90, 50, '熱・光に\n変わる', C.red, FILL.red, 12)], '電力が大きい ＝ 1秒でたくさん発熱') },
  { note: '❓なぜ電力＝電圧×電流なの？→水力のたとえで、水が落ちて仕事をする量は「水の量（電流）×落差（電圧）」です。電圧が大きいほど、電流が多いほど、1秒あたりのエネルギーは大きくなります。', add: S([bx(20, 34, 130, 40, '電圧（落差）', C.red, FILL.red, 13), lb(160, 54, '×', 18, C.ink, 'middle', true), bx(170, 34, 130, 40, '電流（水の量）', C.green, FILL.green, 13), ar(160, 80, 160, 98, C.ink), bx(70, 102, 180, 34, '電力（1秒の仕事）', C.purple, FILL.purple, 14)], '電力 W ＝ 電圧 V × 電流 A', C.purple, FILL.purple) },
  { note: '式に入れます。電力＝5.0×0.5＝2.5Wです。', add: S([bx(20, 34, 130, 40, '電圧 5.0V', C.red, FILL.red, 15), lb(160, 54, '×', 18, C.ink, 'middle', true), bx(170, 34, 130, 40, '電流 0.5A', C.green, FILL.green, 15), ar(160, 80, 160, 98, C.ink), bx(90, 102, 140, 34, '2.5W', C.purple, FILL.purple, 18)], '5.0 × 0.5 ＝ 2.5W', C.purple, FILL.purple) },
  { note: '答えは、電流0.5A、電力2.5Wです。', add: S(circ('5.0V', '10Ω', '0.5A', C.green), '答え　電流 0.5A　電力 2.5W', C.green, FILL.green) },
  { note: '確かめ（検算）です。電流0.5Aに抵抗10Ωをかけると5.0Vで、もとの電圧と一致します。電力も別の式「電流×電流×抵抗」で、0.5×0.5×10＝2.5Wと同じ値になります。', add: S([bx(20, 30, 280, 36, '0.5 × 10 ＝ 5.0V ○', C.green, FILL.green, 15), bx(20, 76, 280, 36, '0.5 × 0.5 × 10 ＝ 2.5W ○', C.purple, FILL.purple, 15)], '2通りの計算が一致', C.green, FILL.green) },
  { note: '❓2.5Wとは、どれだけのエネルギー？→1Wは1秒に1J（ジュール）です。2.5Wなら1秒に2.5J、1分（60秒）で150Jの熱や光が出ます。', add: S([bx(20, 34, 130, 40, '1秒 → 2.5J', C.purple, FILL.purple, 14), bx(170, 34, 130, 40, '60秒 → 150J', C.purple, FILL.purple, 14), lb(160, 100, '2.5 × 60 ＝ 150', 13, C.ink, 'middle', true)], '電力 × 時間 ＝ 熱量') },
  { note: 'よくあるまちがいです。電力を「電圧÷電流」としてしまうこと。5.0÷0.5＝10は抵抗の値（10Ω）になります。電力は「かける」です。', add: S([bx(20, 24, 280, 40, '✕ 5.0 ÷ 0.5 ＝ 10（これは抵抗）', C.red, FILL.red, 13), ar(160, 68, 160, 86, C.ink), bx(20, 90, 280, 40, '○ 電力 ＝ 5.0 × 0.5 ＝ 2.5W', C.green, FILL.green, 14)], '電圧÷電流 ＝ 抵抗　電圧×電流 ＝ 電力') },
], 'オームの法則と電力');

const serCirc = (v1: string, v2: string, i: string, vs: string): E[] => [
  ln(50, 35, 90, 35, C.ink, false, 2), bx(90, 22, 70, 26, '10Ω', C.blue, FILL.blue, 13), ln(160, 35, 175, 35, C.ink, false, 2), bx(175, 22, 70, 26, '20Ω', C.purple, FILL.purple, 13), ln(245, 35, 270, 35, C.ink, false, 2), ln(270, 35, 270, 115, C.ink, false, 2), ln(270, 115, 50, 115, C.ink, false, 2),
  ln(50, 35, 50, 62, C.ink, false, 2), bx(34, 62, 32, 26, vs, C.red, FILL.red, 10), ln(50, 88, 50, 115, C.ink, false, 2),
  lb(125, 66, v1, 12, C.blue, 'middle', true), lb(210, 66, v2, 12, C.purple, 'middle', true), ar(255, 75, 255, 95, C.red), lb(240, 106, i, 11, C.red, 'end', true),
];
const azabu_rika_04: DiagramFigure = show([
  { note: '抵抗R₁＝10Ω、R₂＝20Ωを直列につなぎ、30Vの電源をつなぎました（流れる電流は1A）。R₁にかかる電圧を求めます。', add: S(serCirc('R₁にかかる電圧？', '', '1A', '30V'), 'R₁＝10Ω　R₂＝20Ω　直列\n電源 30V　電流 1A') },
  { note: '❓直列つなぎでは、なぜ電流がどこでも同じなの？→道が1本しかなく、電流（電気の流れ）は途中で消えたり増えたりしないからです。R₁を通った電流は、そのままR₂を通ります。', add: S([...serCirc('', '', '', '30V'), ar(110, 80, 145, 80, C.red), ar(195, 80, 230, 80, C.red), lb(128, 96, '1A', 11, C.red, 'middle', true), lb(212, 96, '1A', 11, C.red, 'middle', true)], '道が1本 → 電流は同じ 1A') },
  { note: '❓2つの抵抗は、合わせて何Ω？→直列は道のりが2つつながって流れにくさが足し算になります。10＋20＝30Ωです。30Vで30Ωなら、電流は30÷30＝1Aで、問題の条件と合います。', add: S([bx(20, 34, 130, 40, 'R₁＝10Ω', C.blue, FILL.blue, 14), lb(160, 54, '＋', 18, C.ink, 'middle', true), bx(170, 34, 130, 40, 'R₂＝20Ω', C.purple, FILL.purple, 14), ar(160, 80, 160, 98, C.ink), bx(70, 102, 180, 34, '合計 30Ω → 30÷30＝1A ○', C.green, FILL.green, 13)], '直列の抵抗 ＝ たし算') },
  { note: '❓R₁にかかる電圧は、どう求めるの？→R₁だけを見て、オームの法則「電圧＝電流×抵抗」を使います。R₁の電流は1A、抵抗は10Ωです。', add: S([bx(90, 22, 70, 26, '10Ω', C.blue, FILL.blue, 14), lb(125, 66, '電流 1A', 12, C.red, 'middle', true), lb(125, 84, '電圧 ？', 12, C.blue, 'middle', true), bx(30, 100, 260, 34, 'R₁だけに注目（R₂は今は見ない）', C.gray, FILL.gray, 12)], 'R₁：電圧 ＝ 電流 × 抵抗') },
  { note: '計算します。1×10＝10Vです。R₁にかかる電圧は10Vです。', add: S([bx(20, 34, 130, 40, '電流 1A', C.red, FILL.red, 15), lb(160, 54, '×', 18, C.ink, 'middle', true), bx(170, 34, 130, 40, '抵抗 10Ω', C.blue, FILL.blue, 15), ar(160, 80, 160, 98, C.ink), bx(90, 102, 140, 34, '10V', C.green, FILL.green, 18)], '1 × 10 ＝ 10V', C.green, FILL.green) },
  { note: '❓R₂にかかる電圧は？→同じように1×20＝20Vです。電圧は抵抗の大きさに比例して分かれます。R₁:R₂＝10:20＝1:2なので、電圧も1:2です。', add: S([bx(20, 34, 130, 40, 'R₁　10V', C.blue, FILL.blue, 15), bx(170, 34, 130, 40, 'R₂　20V', C.purple, FILL.purple, 15), lb(160, 100, '電圧の比 ＝ 抵抗の比 ＝ 1 : 2', 13, C.ink, 'middle', true)], '電圧は 抵抗の比で分かれる') },
  { note: '答えはR₁にかかる電圧＝10Vです。', add: S(serCirc('R₁　10V', 'R₂　20V', '1A', '30V'), '答え　R₁にかかる電圧 10V', C.green, FILL.green) },
  { note: '確かめ（検算）です。R₁の10VとR₂の20Vを足すと30Vで、電源の電圧と一致します。直列では、各部分の電圧の合計が電源の電圧になります。', add: S([bx(20, 34, 130, 40, '10V', C.blue, FILL.blue, 16), lb(160, 54, '＋', 18, C.ink, 'middle', true), bx(170, 34, 130, 40, '20V', C.purple, FILL.purple, 16), ar(160, 80, 160, 98, C.ink), bx(90, 102, 140, 34, '30V ＝ 電源 ○', C.green, FILL.green, 14)], '電圧の合計 ＝ 電源の電圧', C.green, FILL.green) },
  { note: '❓もしR₁とR₂を入れかえたら？→電流は同じ1Aのままで、抵抗が20Ωになったほうに大きな電圧（20V）がかかります。電圧は「大きい抵抗のほうに、大きく」かかります。', add: S([bx(20, 34, 130, 40, '20Ω側：20V', C.purple, FILL.purple, 14), bx(170, 34, 130, 40, '10Ω側：10V', C.blue, FILL.blue, 14), lb(160, 100, '大きい抵抗 → 大きい電圧', 13, C.ink, 'middle', true)], '電流が同じなら 電圧は抵抗に比例') },
  { note: 'よくあるまちがいです。30VがそのままR₁にかかると思うこと。30VはR₁とR₂の2つで分け合うので、R₁だけにかかるのは抵抗の比に応じた一部（10V）です。', add: S([bx(20, 24, 280, 40, '✕ R₁にも 30V かかる', C.red, FILL.red, 14), ar(160, 68, 160, 86, C.ink), bx(20, 90, 280, 40, '○ 30V を 抵抗の比 1:2 で分ける → R₁は10V', C.green, FILL.green, 13)], '電源の電圧は 分け合う') },
], '直列回路の電圧の分かれ方');

// ───────── 密度 ─────────
const cubeBox = (t: string): E[] => [bx(60, 50, 80, 70, t, C.gray, FILL.gray, 13)];
const densFig = (V: number, m: number, d: string, table: boolean, problem: string): DiagramFigure => show([
  { note: `${problem}体積${V}cm³、質量${m}gの金属の密度を求めます。`, add: S([...cubeBox(`${V}cm³\n${m}g`), bx(190, 60, 100, 50, '密度 ？g/cm³', C.red, FILL.red, 12)], `体積 ${V}cm³　質量 ${m}g\n密度 ＝ ？g/cm³`) },
  { note: '❓密度とは、何のこと？→密度は「1cm³あたりの質量」です。同じ物質なら大きさがちがっても同じ値になるので、物質を見分ける手がかりになります。', add: S([bx(40, 40, 70, 50, '1cm³', C.blue, FILL.blue, 13), ar(116, 65, 150, 65, C.ink), bx(156, 40, 120, 50, 'その質量 g\n＝ 密度', C.green, FILL.green, 13)], '密度 ＝ 1cm³あたりの質量') },
  { note: `❓なぜ「質量÷体積」で求まるの？→${V}cm³の${m}gは、1cm³ぶんのかたまりが${V}個集まった重さです。全体の質量を${V}個に等しく分ければ、1cm³あたりの質量が出ます。`, add: S([bx(30, 30, 260, 34, `全体 ${m}g`, C.gray, FILL.gray, 14), ar(160, 68, 160, 86, C.ink), lb(200, 80, `${V}個に等分`, 11, C.ink, 'start', true), ...Array.from({ length: 10 }, (_, i) => bx(30 + i * 26, 90, 24, 30, '1', C.blue, FILL.blue, 10)), lb(160, 136, '1つぶん ＝ 1cm³あたりの質量', 11, C.blue, 'middle', true)], '質量 ÷ 体積 ＝ 1cm³あたり') },
  { note: `計算します。密度＝質量÷体積＝${m}÷${V}＝${d}g/cm³です。`, add: S([bx(20, 34, 130, 40, `質量 ${m}g`, C.gray, FILL.gray, 15), lb(160, 54, '÷', 18, C.ink, 'middle', true), bx(170, 34, 130, 40, `体積 ${V}cm³`, C.gray, FILL.gray, 15), ar(160, 80, 160, 98, C.ink), bx(70, 102, 180, 34, `${d}g/cm³`, C.green, FILL.green, 18)], `${m} ÷ ${V} ＝ ${d}g/cm³`, C.green, FILL.green) },
  table
    ? { note: '❓表のどの金属に近いの？→もし鉄なら50cm³で395g、銅なら445g、鉛なら565gになるはずですが、この金属は135gです。密度2.7g/cm³はアルミニウムの値とぴったり一致します。', add: S([bx(20, 20, 280, 26, 'アルミニウム 2.7 → 50cm³で 135g ←同じ', C.green, FILL.green, 12), bx(20, 52, 280, 26, '鉄 7.9 → 50cm³で 395g', C.gray, FILL.gray, 12), bx(20, 84, 280, 26, '銅 8.9 → 50cm³で 445g', C.gray, FILL.gray, 12), bx(20, 116, 280, 26, '鉛 11.3 → 50cm³で 565g', C.gray, FILL.gray, 12)], '同じ体積なら 密度が大きいほど重い') }
    : { note: `❓水とくらべると？→水の密度は1g/cm³です。この金属の${d}g/cm³は水の${d}倍で、水より重いので水に沈みます。`, add: S([bx(30, 40, 110, 50, '水\n1g/cm³', C.blue, FILL.blue, 13), lb(160, 66, '＜', 20, C.ink, 'middle', true), bx(180, 40, 110, 50, `この金属\n${d}g/cm³`, C.gray, FILL.gray, 12)], '水より密度が大きい → 沈む') },
  { note: `答えは、密度${d}g/cm³${table ? '、アルミニウム' : ''}です。`, add: S([...cubeBox(`${V}cm³\n${m}g`), bx(190, 60, 100, 50, `${d}g/cm³${table ? '\nアルミニウム' : ''}`, C.green, FILL.green, 12)], `答え　${d}g/cm³${table ? '（アルミニウム）' : ''}`, C.green, FILL.green) },
  { note: `確かめ（検算）です。密度×体積＝質量になるはずです。${d}×${V}＝${m}gで、問題の質量と一致します。`, add: S([bx(20, 34, 130, 40, `${d}g/cm³`, C.green, FILL.green, 15), lb(160, 54, '×', 18, C.ink, 'middle', true), bx(170, 34, 130, 40, `${V}cm³`, C.gray, FILL.gray, 15), ar(160, 80, 160, 98, C.ink), bx(90, 102, 140, 34, `${m}g ○`, C.gray, FILL.gray, 16)], `${d} × ${V} ＝ ${m}g（もとの質量）`, C.green, FILL.green) },
  { note: `❓半分に切ったら、密度は変わる？→体積は${V / 2}cm³、質量は${m / 2}gと、どちらも半分になります。${m / 2}÷${V / 2}＝${d}で、密度は変わりません。物質そのものの性質だからです。`, add: S([bx(30, 40, 100, 50, `${V}cm³\n${m}g`, C.gray, FILL.gray, 12), ar(136, 65, 160, 65, C.ink), bx(166, 50, 55, 40, `${V / 2}cm³\n${m / 2}g`, C.gray, FILL.gray, 9), bx(226, 50, 55, 40, `${V / 2}cm³\n${m / 2}g`, C.gray, FILL.gray, 9), lb(160, 110, `どちらも ${m / 2}÷${V / 2} ＝ ${d}g/cm³`, 12, C.green, 'middle', true)], '大きさが変わっても 密度は同じ', C.green, FILL.green) },
  { note: `❓密度がわかると、何が分かる？→水（1g/cm³）より大きければ沈み、小さければ浮くと判断できます。この金属は${d}g/cm³なので、水に沈みます。`, add: S([bx(30, 30, 120, 40, '密度 ＞ 1：沈む', C.red, FILL.red, 13), bx(170, 30, 120, 40, '密度 ＜ 1：浮く', C.blue, FILL.blue, 13), lb(160, 100, `この金属は ${d} ＞ 1 → 沈む`, 13, C.ink, 'middle', true)], '密度で 浮き沈みが分かる') },
  { note: `よくあるまちがいです。${V}÷${m}と、逆に割ってしまうこと。密度は「1cm³あたりの質量」なので、質量を体積で割ります。${V}÷${m}だと「1gあたりの体積」になってしまいます。`, add: S([bx(20, 24, 280, 40, `✕ ${V} ÷ ${m}（体積÷質量）`, C.red, FILL.red, 14), ar(160, 68, 160, 86, C.ink), bx(20, 90, 280, 40, `○ ${m} ÷ ${V} ＝ ${d}（質量÷体積）`, C.green, FILL.green, 14)], '質量 ÷ 体積') },
], '密度＝質量÷体積');
const azabu_rika_01 = densFig(50, 135, '2.7', true, '');
const nanzan_rika_02 = densFig(40, 320, '8', false, '');

// 惑星の密度（半径2倍・質量8倍）
const cubeUnit = (x: number, y: number, n: number, u: number, color: string, fill: string): E[] => grid(x, y, n, u, color, fill);
const koko_kanto2026_rika_030: DiagramFigure = show([
  { note: '半径が地球の2倍、質量が地球の8倍の惑星があります。平均密度は地球の何倍でしょう。球とみなし、体積は半径の3乗に比例するものとします。', add: S([ci(90, 76, 22, '地球', C.blue, FILL.blue, 11), ci(220, 76, 44, '惑星', C.red, FILL.red, 13), lb(90, 118, '半径 1　質量 1', 11, C.blue, 'middle', true), lb(220, 130, '半径 2　質量 8', 11, C.red, 'middle', true)], '半径 2倍　質量 8倍\n密度は 何倍？') },
  { note: '❓密度とは？→密度は1cm³あたりの質量で、質量÷体積で求めます。体積がどれだけ変わったかが分かれば、密度の変化も分かります。', add: S([bx(40, 40, 110, 50, '質量', C.gray, FILL.gray, 15), lb(160, 66, '÷', 18, C.ink, 'middle', true), bx(170, 40, 110, 50, '体積', C.gray, FILL.gray, 15)], '密度 ＝ 質量 ÷ 体積') },
  { note: '❓半径が2倍になると、体積は何倍になるの？→たて・よこ・高さの3方向がそれぞれ2倍になるからです。1辺1の立方体（1個）に対して、1辺2の立方体は上の段に4個、下の段に4個の、合わせて8個ぶんの大きさです。球でも同じです。', add: S([...cubeUnit(30, 50, 1, 20, C.blue, FILL.blue), lb(40, 84, '1個', 11, C.blue, 'middle', true), ...cubeUnit(130, 30, 2, 20, C.red, FILL.red), ...cubeUnit(154, 54, 2, 20, C.red, 'rgba(225,29,72,0.30)'), lb(185, 108, '上の段4個＋下の段4個', 11, C.red, 'middle', true), lb(210, 126, '＝ 8個 ＝ 2×2×2', 11, C.red, 'middle', true)], '半径2倍 → 体積は 2×2×2 ＝ 8倍', C.red, FILL.red) },
  { note: '惑星は、質量も体積も8倍です。密度は「質量÷体積」なので、惑星の密度は地球の（8÷8）倍です。', add: S([bx(20, 34, 130, 40, '質量 8倍', C.gray, FILL.gray, 15), lb(160, 54, '÷', 18, C.ink, 'middle', true), bx(170, 34, 130, 40, '体積 8倍', C.gray, FILL.gray, 15), ar(160, 80, 160, 98, C.ink), bx(90, 102, 140, 34, '8 ÷ 8 ＝ 1倍', C.green, FILL.green, 16)], '密度の倍率 ＝ 8 ÷ 8 ＝ 1') },
  { note: '❓なぜ倍率どうしを割り算してよいの？→地球の密度は「質量M÷体積V」。惑星は「8M÷8V」で、分子と分母に同じ8がかかっているだけです。約分すると M÷V になり、地球と同じ値だからです。', add: S([bx(20, 34, 130, 40, '地球　M ÷ V', C.blue, FILL.blue, 14), bx(170, 34, 130, 40, '惑星　8M ÷ 8V', C.red, FILL.red, 14), ar(235, 78, 235, 96, C.ink), lb(235, 110, '8が約分できて M ÷ V', 11, C.green, 'middle', true)], '同じ倍率どうしは 約分される') },
  { note: '答えは1倍（地球と同じ平均密度）です。', add: S([ci(90, 76, 22, undefined, C.blue, FILL.blue), ci(220, 76, 44, undefined, C.red, FILL.red), lb(90, 118, '密度 1', 13, C.blue, 'middle', true), lb(220, 130, '密度 1（同じ）', 13, C.red, 'middle', true)], '答え　1倍（地球と同じ）', C.green, FILL.green) },
  { note: '確かめ（検算）です。地球の質量を1、体積を1と決めると、地球の密度は1÷1＝1。惑星は質量8、体積8なので8÷8＝1。どちらも1で、同じ密度です。', add: S([bx(20, 30, 130, 40, '地球 1÷1 ＝ 1', C.blue, FILL.blue, 14), bx(170, 30, 130, 40, '惑星 8÷8 ＝ 1', C.red, FILL.red, 14), lb(160, 100, '同じ 1 → 倍率は 1倍 ○', 14, C.green, 'middle', true)], '数を決めて確かめる', C.green, FILL.green) },
  { note: '❓半径が3倍なら体積は何倍？→3×3×3＝27倍です。半径が2倍で8倍、3倍で27倍というふうに、体積は半径の3乗で増えます。', add: S([bx(20, 30, 130, 40, '半径 2倍 → 8倍', C.red, FILL.red, 14), bx(170, 30, 130, 40, '半径 3倍 → 27倍', C.red, FILL.red, 14), lb(160, 100, '体積 ＝ 半径の3乗に比例', 13, C.ink, 'middle', true)], '2×2×2＝8　3×3×3＝27') },
  { note: '❓もし質量が16倍だったら？→密度は16÷8＝2倍になります。質量と体積の増え方がちがうと、密度は変わります。ここでは偶然、同じ8倍だったので1倍でした。', add: S([bx(20, 30, 130, 40, '質量 16倍', C.gray, FILL.gray, 14), lb(160, 50, '÷', 18, C.ink, 'middle', true), bx(170, 30, 130, 40, '体積 8倍', C.gray, FILL.gray, 14), lb(160, 100, '16 ÷ 8 ＝ 2倍', 14, C.green, 'middle', true)], '増え方がちがうと 密度は変わる') },
  { note: 'よくあるまちがいです。半径が2倍だから体積も2倍と考えること。すると密度は8÷2＝4倍と誤ってしまいます。体積は3方向が2倍になるので、2の3乗＝8倍です。', add: S([bx(20, 24, 280, 40, '✕ 半径2倍 → 体積2倍 → 密度 8÷2＝4倍', C.red, FILL.red, 13), ar(160, 68, 160, 86, C.ink), bx(20, 90, 280, 40, '○ 体積 2³＝8倍 → 密度 8÷8＝1倍', C.green, FILL.green, 14)], '体積は 半径の3乗') },
], '質量と体積の倍率から、密度の倍率を求める');

// ───────── 中和（体積の比例）─────────
const nanzan_rika_05: DiagramFigure = show([
  { note: '塩酸Aを5mL中和するのに、水酸化ナトリウム水溶液Bが4mL必要でした。塩酸Aを20mL用意したとき、ちょうど中和するBの体積を求めます。', add: S([bx(30, 40, 90, 50, '塩酸A\n5mL', C.red, FILL.red, 13), lb(160, 66, '⇄', 18, C.ink, 'middle', true), bx(200, 40, 90, 50, 'NaOH液B\n4mL', C.blue, FILL.blue, 12), lb(160, 116, '5mL ↔ 4mL でちょうど中和', 12, C.ink, 'middle', true)], '塩酸A 5mL ↔ B 4mL\nA 20mL ↔ B ？mL') },
  { note: '❓中和とは何？→酸性をもたらすものとアルカリ性をもたらすものが、たがいに打ち消し合って、酸性でもアルカリ性でもなくなる反応です。ちょうど打ち消し合う量どうしで中性になります。', add: S([bx(30, 40, 80, 50, '酸性', C.red, FILL.red, 14), lb(125, 66, '＋', 16, C.ink, 'middle', true), bx(145, 40, 80, 50, 'アルカリ性', C.blue, FILL.blue, 12), ar(230, 65, 252, 65, C.ink), bx(256, 40, 50, 50, '中性', C.green, FILL.green, 12)], '打ち消し合う量どうしで 中性') },
  { note: '❓なぜ体積が比例するの？→同じ濃さの溶液なら、酸性をもたらすものの量は体積に比例します。塩酸Aを2倍にすれば、打ち消す相手のアルカリ性のものも2倍必要です。濃さが変わらないかぎり、必要な体積の比は一定です。', add: S([bx(20, 30, 130, 40, 'Aが2倍\n→ Bも2倍', C.green, FILL.green, 13), bx(170, 30, 130, 40, 'Aが3倍\n→ Bも3倍', C.green, FILL.green, 13), lb(160, 100, '濃さが同じなら 体積の比は一定', 12, C.ink, 'middle', true)], 'Aが何倍 → Bも同じ倍') },
  { note: '❓20mLは5mLの何倍？→20÷5＝4倍です。Aが4倍になるので、Bも同じ4倍必要です。', add: S([bx(20, 34, 130, 40, '5mL → 20mL', C.red, FILL.red, 14), lb(160, 54, '→', 18, C.ink, 'middle', true), bx(170, 34, 130, 40, '4倍', C.green, FILL.green, 16), lb(160, 100, '20 ÷ 5 ＝ 4', 14, C.ink, 'middle', true)], 'Aは 4倍 → Bも 4倍') },
  { note: 'くらべやすいように表にします。Aを5mL、10mL、15mL、20mLと増やすと、Bは4mL、8mL、12mL、16mLと、Aが5mL増えるごとに4mLずつ増えます。', add: S([bx(20, 24, 280, 30, 'A：  5    10    15    20 mL', C.red, FILL.red, 14), bx(20, 62, 280, 30, 'B：  4     8    12    16 mL', C.blue, FILL.blue, 14), lb(160, 116, 'Aが 5 ふえるごとに Bは 4 ふえる', 12, C.ink, 'middle', true)], '比例の表：5→4、10→8、15→12、20→16') },
  { note: '計算します。B＝4mL×4＝16mLです。式で書くと、5:4＝20:□ で、□＝20×4÷5＝16です。', add: S([bx(20, 34, 130, 40, 'B：4mL', C.blue, FILL.blue, 15), lb(160, 54, '×', 18, C.ink, 'middle', true), bx(170, 34, 130, 40, '4倍', C.green, FILL.green, 15), ar(160, 80, 160, 98, C.ink), bx(90, 102, 140, 34, '16mL', C.green, FILL.green, 18)], '4 × 4 ＝ 16mL', C.green, FILL.green) },
  { note: '答えは16mLです。', add: S([bx(30, 40, 90, 50, '塩酸A\n20mL', C.red, FILL.red, 13), lb(160, 66, '⇄', 18, C.ink, 'middle', true), bx(200, 40, 90, 50, 'NaOH液B\n16mL', C.blue, FILL.blue, 12)], '答え　16mL', C.green, FILL.green) },
  { note: '確かめ（検算）です。5:4の比と20:16を比べると、どちらも（A÷B）＝1.25で同じ比です。Bは5mLのときの4mLから4倍の16mLになっていて、倍率が合います。', add: S([bx(20, 30, 280, 36, '5 ÷ 4 ＝ 1.25', C.gray, FILL.gray, 14), bx(20, 76, 280, 36, '20 ÷ 16 ＝ 1.25 ○', C.green, FILL.green, 14)], 'もとの比と一致', C.green, FILL.green) },
  { note: 'よくあるまちがいです。比の順番を逆にして、20×5÷4＝25としてしまうこと。もとの実験ではBのほうがAより少ない（4＜5）のに、25mLではBがAより多くなり、つじつまが合いません。', add: S([bx(20, 24, 280, 40, '✕ 20×5÷4 ＝ 25（BがAより多くなる）', C.red, FILL.red, 13), ar(160, 68, 160, 86, C.ink), bx(20, 90, 280, 40, '○ 20×4÷5 ＝ 16（BはAより少ない）', C.green, FILL.green, 13)], 'もとの実験：Bは Aより少ない') },
  { note: '❓グラフにするとどうなる？→Aの体積を横、Bの体積を縦にとると、原点を通る右上がりの直線になります。5mLで4mL、20mLで16mLの点が、同じ直線の上に並びます。', add: S([ln(50, 130, 290, 130, C.gray, false, 1.2), ln(50, 130, 50, 20, C.gray, false, 1.2), lb(290, 142, 'A(mL)', 10, C.gray, 'end', true), lb(56, 18, 'B(mL)', 10, C.gray, 'start', true), ln(50, 130, 266, 34, C.blue, false, 2.5), dot(104, 106, C.red, 3.5), lb(108, 98, '(5,4)', 10, C.red, 'start', true), dot(266, 34, C.red, 3.5), lb(260, 26, '(20,16)', 10, C.red, 'end', true)], '原点を通る直線 → 比例') },
], '中和に必要な体積は比例する');

// ───────── 動滑車 ─────────
const nanzan_rika_11: DiagramFigure = show([
  { note: '動滑車を1個使って、質量30kgのおもりを2.0m持ち上げます。滑車やひもの重さ・摩擦は考えません。仕事の原理を使って、ひもを引く力と、ひもを引く距離を求めます。', add: S([ln(90, 14, 230, 14, C.gray, false, 4), ln(112, 14, 112, 66, C.ink, false, 1.8), ci(130, 66, 18, undefined, C.gray, FILL.gray), ln(148, 66, 148, 14, C.ink, false, 1.8), ln(130, 84, 130, 96, C.ink, false, 1.8), bx(105, 96, 50, 34, '30kg', C.gray, FILL.gray, 12), ar(148, 40, 148, 24, C.red), lb(168, 34, 'ひもを引く', 11, C.red, 'start', true), ar(250, 120, 250, 60, C.green), lb(262, 90, '2.0m', 11, C.green, 'start', true)], 'おもり 30kg を 2.0m 持ち上げる\n引く力？　引く距離？') },
  { note: '❓おもりの重さは何N？→100gの物体にはたらく重力が1Nです。30kg＝30000gなので、30000÷100＝300Nです。', add: S([bx(20, 34, 130, 40, '30kg ＝ 30000g', C.gray, FILL.gray, 13), ar(155, 54, 175, 54, C.ink), bx(180, 34, 120, 40, '300N', C.red, FILL.red, 16), lb(160, 100, '100g で 1N → 300個ぶん', 12, C.ink, 'middle', true)], '30000 ÷ 100 ＝ 300N') },
  { note: '❓動滑車だと、なぜひもを引く力が半分になるの？→動滑車は、おもりといっしょに上下します。おもりを支えているひもは左右の2本あり、300Nを2本で分け合って支えます。1本あたり300÷2＝150Nです。', add: S([ln(90, 14, 230, 14, C.gray, false, 4), ln(112, 14, 112, 66, C.blue, false, 2.5), ci(130, 66, 18, undefined, C.gray, FILL.gray), ln(148, 66, 148, 14, C.blue, false, 2.5), bx(105, 96, 50, 34, '300N', C.gray, FILL.gray, 12), ln(130, 84, 130, 96, C.ink, false, 1.8), lb(95, 50, '150N', 11, C.blue, 'end', true), lb(165, 50, '150N', 11, C.blue, 'start', true), lb(250, 66, '2本で支える', 12, C.blue, 'middle', true)], '2本で300Nを支える → 1本150N', C.blue, FILL.blue) },
  { note: '❓では、ひもを引く距離はなぜ2倍になるの？→おもりを2.0m上げるには、左右2本のひもの両方が、それぞれ2.0mずつ短くならなければなりません。その2本ぶんを、引く側の1本から送り出すので、2.0×2＝4.0m引くことになります。', add: S([ln(90, 14, 230, 14, C.gray, false, 4), ln(112, 14, 112, 40, C.blue, true, 2), ln(148, 14, 148, 40, C.blue, true, 2), lb(100, 30, '2m', 11, C.blue, 'end', true), lb(162, 30, '2m', 11, C.blue, 'start', true), bx(105, 96, 50, 34, '30kg', C.gray, FILL.gray, 12), ar(250, 120, 250, 60, C.green), lb(262, 90, '2m', 11, C.green, 'start', true), bx(190, 20, 110, 30, '引く側：2＋2＝4m', C.red, FILL.red, 10)], '左右のひも 2m ＋ 2m ＝ 引く距離 4m', C.red, FILL.red) },
  { note: '❓力が半分で距離が2倍だと、何が変わらないの？→力×距離（仕事）です。直接持ち上げるなら300N×2.0m＝600J、動滑車なら150N×4.0m＝600Jで、同じ600Jです。これが仕事の原理で、道具を使っても仕事の量は変わりません。', add: S([bx(20, 30, 130, 44, '直接\n300N × 2.0m', C.gray, FILL.gray, 12), bx(170, 30, 130, 44, '動滑車\n150N × 4.0m', C.blue, FILL.blue, 12), lb(160, 100, 'どちらも 600J', 14, C.green, 'middle', true)], '仕事 ＝ 力 × 距離 は同じ 600J', C.green, FILL.green) },
  { note: '❓なぜ道具を使っても、仕事は減らないの？→もし減るなら、何もしないで得をしてしまうからです。楽になるぶんは、長い距離を引くことで必ず払わなければならない、と考えます。「力を半分にするかわりに、距離が2倍になる」という関係です。', add: S([bx(20, 30, 130, 40, '力 ÷2', C.blue, FILL.blue, 15), bx(170, 30, 130, 40, '距離 ×2', C.red, FILL.red, 15), lb(160, 98, '楽になるぶん 遠くまで引く', 13, C.ink, 'middle', true)], '力が減れば 距離がふえる') },
  { note: '計算します。引く力＝300÷2＝150N。引く距離＝2.0×2＝4.0mです。', add: S([bx(20, 34, 130, 40, '300N ÷ 2\n＝ 150N', C.blue, FILL.blue, 14), bx(170, 34, 130, 40, '2.0m × 2\n＝ 4.0m', C.red, FILL.red, 14), lb(160, 104, '力は半分　距離は2倍', 13, C.ink, 'middle', true)], '力 150N　距離 4.0m', C.green, FILL.green) },
  { note: '答えは、ひもを引く力150N、ひもを引く距離4.0mです。', add: S([ln(90, 14, 230, 14, C.gray, false, 4), ln(112, 14, 112, 66, C.ink, false, 1.8), ci(130, 66, 18, undefined, C.gray, FILL.gray), ln(148, 66, 148, 14, C.ink, false, 1.8), bx(105, 96, 50, 34, '30kg', C.gray, FILL.gray, 12), ar(148, 40, 148, 24, C.red), bx(190, 30, 110, 50, '力 150N\n距離 4.0m', C.green, FILL.green, 13)], '答え　力 150N　距離 4.0m', C.green, FILL.green) },
  { note: '確かめ（検算）です。引く側の仕事150×4.0＝600Jが、おもりを持ち上げる仕事300×2.0＝600Jと等しいので、仕事の原理が成り立っています。', add: S([bx(20, 30, 280, 36, '150N × 4.0m ＝ 600J', C.blue, FILL.blue, 15), bx(20, 76, 280, 36, '300N × 2.0m ＝ 600J ○', C.gray, FILL.gray, 15)], '2つの仕事が等しい', C.green, FILL.green) },
  { note: 'よくあるまちがいです。引く距離をそのまま2.0mにしてしまうこと。動滑車では、ひもを引く距離はおもりの上がる距離の2倍（4.0m）です。力を半分にしたぶん、距離がふえることを忘れないようにしましょう。', add: S([bx(20, 24, 280, 40, '✕ 力 150N、距離 2.0m（仕事が 300J に減る）', C.red, FILL.red, 12), ar(160, 68, 160, 86, C.ink), bx(20, 90, 280, 40, '○ 力 150N、距離 4.0m（仕事 600J のまま）', C.green, FILL.green, 13)], '仕事の量は 変わらない') },
], '動滑車と仕事の原理');

// ───────── 正方形の縦・横を変える（面積の式）─────────
const azabu_sansu_08: DiagramFigure = (() => {
  const sq = (): E[] => [bx(60, 40, 100, 100, 'x²', C.gray, FILL.gray, 16), lb(110, 34, 'x', 12, C.ink, 'middle', true), lb(54, 92, 'x', 12, C.ink, 'end', true)];
  const newRect = (): E => bx(60, 22, 88, 118, undefined, C.red, 'rgba(225,29,72,0.10)');
  return show([
    { note: '1辺がxcmの正方形の、縦を3cm長く、横を2cm短くした長方形をつくります。その面積は、もとの正方形より8cm²大きいそうです。xの値を求めます（x＞2）。', add: S([...sq(), newRect(), lb(206, 70, '縦 x＋3', 11, C.red, 'start', true), lb(206, 90, '横 x－2', 11, C.red, 'start', true)], '正方形 x×x\n→ 縦 x＋3、横 x－2 の長方形') },
    { note: '❓縦と横は、それぞれ何cm？→縦は3cm長いのでx＋3、横は2cm短いのでx－2です。横が正の長さでなければならないので、x＞2という条件がつきます。', add: S([bx(20, 34, 130, 40, '縦 ＝ x ＋ 3', C.red, FILL.red, 15), bx(170, 34, 130, 40, '横 ＝ x － 2', C.red, FILL.red, 15), lb(160, 104, '横は正の数 → x ＞ 2', 13, C.ink, 'middle', true)], '長方形の面積 ＝ (x＋3)(x－2)') },
    { note: '❓(x＋3)(x－2)は、どんな形になるの？→図で考えます。もとの正方形の横を2cm縮めると、縦x・横x－2の長方形になります。面積はx×(x－2)＝x²－2xです。', add: S([bx(60, 40, 88, 100, '(x－2)×x\n＝x²－2x', C.blue, FILL.blue, 12), bx(148, 40, 12, 100, undefined, C.gray, FILL.gray, 8), lb(112, 34, 'x－2', 12, C.blue, 'middle', true), lb(154, 146, '2', 10, C.gray, 'middle', true)], '横を2cm縮めると x²－2x') },
    { note: '❓縦を3cm伸ばしたぶんは？→上に、横x－2・縦3の帯が足されます。面積は3×(x－2)＝3x－6です。', add: S([bx(60, 40, 88, 100, '(x－2)×x', C.blue, FILL.blue, 12), bx(60, 22, 88, 18, '3×(x－2)', C.red, FILL.red, 9), lb(160, 34, '3', 11, C.red, 'start', true)], '縦を3cm伸ばすと 3x－6 が足される') },
    { note: '❓2つを合わせると、新しい長方形の面積は？→(x²－2x)＋(3x－6)＝x²＋x－6です。これが(x＋3)(x－2)を展開した形です。', add: S([bx(20, 30, 130, 36, 'x²－2x', C.blue, FILL.blue, 15), lb(160, 48, '＋', 18, C.ink, 'middle', true), bx(170, 30, 130, 36, '3x－6', C.red, FILL.red, 15), ar(160, 72, 160, 90, C.ink), bx(70, 94, 180, 36, 'x²＋x－6', C.green, FILL.green, 17)], '(x＋3)(x－2) ＝ x²＋x－6', C.green, FILL.green) },
    { note: '❓「もとより8cm²大きい」は、式でどう書くの？→新しい面積＝もとの面積＋8なので、x²＋x－6＝x²＋8です。', add: S([bx(20, 34, 130, 40, '新：x²＋x－6', C.red, FILL.red, 14), lb(160, 54, '＝', 18, C.ink, 'middle', true), bx(170, 34, 130, 40, 'もと＋8：x²＋8', C.gray, FILL.gray, 14)], 'x²＋x－6 ＝ x²＋8') },
    { note: '❓x²が両方にあるのは、どう使えるの？→両辺から同じx²を引いても等式は成り立つので、x²は消えて、x－6＝8という簡単な1次方程式になります。二次方程式にならないのがこの問題のポイントです。', add: S([bx(20, 30, 280, 34, 'x² ＋ x － 6 ＝ x² ＋ 8', C.gray, FILL.gray, 15), ar(160, 68, 160, 86, C.ink), bx(20, 90, 280, 34, '両辺から x² を引く → x － 6 ＝ 8', C.green, FILL.green, 14)], '同じものを両辺から引く') },
    { note: 'x－6＝8の両辺に6を足して、x＝14です。x＞2を満たすので、条件に合っています。', add: S([bx(20, 34, 130, 40, 'x － 6 ＝ 8', C.gray, FILL.gray, 15), ar(155, 54, 175, 54, C.ink), bx(180, 34, 120, 40, 'x ＝ 14', C.green, FILL.green, 17), lb(160, 104, '14 ＞ 2 で条件に合う', 13, C.ink, 'middle', true)], '答え　x ＝ 14（cm）', C.green, FILL.green) },
    { note: '確かめ（検算）です。x＝14のとき、新しい長方形は縦17cm、横12cmで17×12＝204cm²。もとの正方形は14×14＝196cm²。差は204－196＝8cm²で、問題の条件と一致します。', add: S([bx(20, 30, 130, 40, '新 17×12\n＝204cm²', C.red, FILL.red, 13), bx(170, 30, 130, 40, 'もと 14×14\n＝196cm²', C.gray, FILL.gray, 13), lb(160, 104, '204 － 196 ＝ 8 ○', 14, C.green, 'middle', true)], '差が 8cm² で一致', C.green, FILL.green) },
    { note: 'よくあるまちがいです。x²どうしを消さずに展開して、二次方程式にしてしまうこと。両辺にx²があるので、引いて消せば簡単な1次方程式になります。式を立てたら、まず整理できないか確かめましょう。', add: S([bx(20, 24, 280, 40, '✕ x²が残ったまま 二次方程式で 苦労する', C.red, FILL.red, 12), ar(160, 68, 160, 86, C.ink), bx(20, 90, 280, 40, '○ 両辺の x² を消して x－6＝8', C.green, FILL.green, 14)], '整理すると簡単になることがある') },
  ], '縦・横を変えた長方形の面積の式を立てる');
})();

// ───────── 三角数 ─────────
const azabu_sansu_11: DiagramFigure = (() => {
  const tri = (n: number, x0: number, y0: number, color: string, fill: string): E[] => {
    const out: E[] = [];
    for (let i = 0; i < n; i++) for (let j = 0; j <= i; j++) out.push(ci(x0 + j * 16, y0 + i * 16, 6, undefined, color, fill));
    return out;
  };
  const rect = (rows: number, cols: number, x0: number, y0: number): E[] => {
    const out: E[] = [];
    for (let i = 0; i < rows; i++) for (let j = 0; j < cols; j++) out.push(ci(x0 + j * 24, y0 + i * 24, 9, undefined, j <= i ? C.blue : C.red, j <= i ? FILL.blue : FILL.red));
    return out;
  };
  return show([
    { note: '1, 3, 6, 10, 15, …という数列（三角数）の第20項を求めます。まず、点を三角形に並べた図で、この数列のしくみを見てみます。', add: S([...tri(1, 30, 40, C.blue, FILL.blue), ...tri(2, 70, 40, C.blue, FILL.blue), ...tri(3, 130, 40, C.blue, FILL.blue), ...tri(4, 200, 40, C.blue, FILL.blue), lb(30, 110, '1', 13, C.ink, 'middle', true), lb(78, 110, '3', 13, C.ink, 'middle', true), lb(146, 110, '6', 13, C.ink, 'middle', true), lb(224, 110, '10', 13, C.ink, 'middle', true)], '1, 3, 6, 10, 15, …\n第20項は？') },
    { note: '❓数はどんなふうに増えているの？→1から3で＋2、3から6で＋3、6から10で＋4、10から15で＋5と、増える数が1ずつ大きくなっています。図では、新しい段が1つ増えるたびに、点が1個ずつ多い段が加わっています。', add: S([bx(20, 30, 50, 30, '1', C.blue, FILL.blue, 14), lb(84, 46, '＋2', 12, C.red, 'middle', true), bx(100, 30, 50, 30, '3', C.blue, FILL.blue, 14), lb(164, 46, '＋3', 12, C.red, 'middle', true), bx(180, 30, 50, 30, '6', C.blue, FILL.blue, 14), lb(244, 46, '＋4', 12, C.red, 'middle', true), bx(260, 30, 50, 30, '10', C.blue, FILL.blue, 14)], '増える数が 2, 3, 4, 5 … と1ずつ大きい') },
    { note: '❓だから、第n項はどんな和になるの？→第n項は、n段に並べた点の数、つまり1＋2＋3＋…＋nです。第4項は1＋2＋3＋4＝10です。', add: S([...tri(4, 80, 30, C.blue, FILL.blue), lb(60, 30, '1段目', 10, C.gray, 'end', true), lb(60, 46, '2段目', 10, C.gray, 'end', true), lb(60, 62, '3段目', 10, C.gray, 'end', true), lb(60, 78, '4段目', 10, C.gray, 'end', true), lb(200, 54, '1＋2＋3＋4', 13, C.blue, 'start', true), lb(200, 74, '＝ 10', 14, C.green, 'start', true)], '第n項 ＝ 1＋2＋3＋…＋n') },
    { note: '❓20段ぶんを、1つずつ足さずに求める方法は？→同じ三角形をもう1つ、上下さかさまにして合わせると長方形になります。n＝4で見てみます。', add: S([...rect(4, 5, 70, 40), lb(260, 60, '4×5', 13, C.ink, 'start', true)], '三角形（青）＋さかさまの三角形（赤）\n＝ 4行 × 5列の長方形', C.ink, FILL.warm) },
    { note: '❓なぜ横が5列になるの？→赤い三角形は青をさかさまにしたもので、青の各行の右側にちょうどはまります。1行目は青1個＋赤4個、2行目は青2個＋赤3個…と、どの行も合わせて5個です。青10個＋赤10個＝4×5＝20個なので、青1つぶんは20÷2＝10個です。', add: S([...rect(4, 5, 70, 40), lb(260, 60, '青 10個', 12, C.blue, 'start', true), lb(260, 82, '赤 10個', 12, C.red, 'start', true)], '10 ＋ 10 ＝ 4 × 5 ＝ 20\nだから 10 ＝ 20 ÷ 2') },
    { note: '❓どんなnでも同じになる？→はい。n段の三角形2つで、縦n行・横（n＋1）列の長方形ができます。点の数はn×（n＋1）で、三角形1つぶんはその半分なので、第n項＝n×（n＋1）÷2です。', add: S([bx(20, 34, 130, 40, '2つ合わせて\nn×(n＋1)', C.red, FILL.red, 13), bx(170, 34, 130, 40, '1つぶんは\nその半分', C.blue, FILL.blue, 13), lb(160, 104, '第n項 ＝ n(n＋1) ÷ 2', 14, C.green, 'middle', true)], '第n項 ＝ n×(n＋1)÷2', C.green, FILL.green) },
    { note: 'n＝20を入れます。20×21＝420。その半分で420÷2＝210です。', add: S([bx(20, 34, 130, 40, '20 × 21 ＝ 420', C.gray, FILL.gray, 14), ar(155, 54, 175, 54, C.ink), bx(180, 34, 120, 40, '÷2 ＝ 210', C.green, FILL.green, 16)], '第20項 ＝ 20×21÷2 ＝ 210', C.green, FILL.green) },
    { note: '答えは210です。', add: S([bx(40, 40, 240, 60, '第20項 ＝ 210', C.green, FILL.green, 22)], '答え　210', C.green, FILL.green) },
    { note: '確かめ（検算）です。式で第4項は4×5÷2＝10、第5項は5×6÷2＝15で、数列と合います。さらに、第19項は19×20÷2＝190で、第20項との差は210－190＝20。増える数が「20」になっていて、増え方のきまりとも合います。', add: S([bx(20, 30, 280, 34, '第4項 4×5÷2＝10 ○　第5項 5×6÷2＝15 ○', C.gray, FILL.gray, 12), bx(20, 72, 280, 34, '第19項 190 → 第20項 210（＋20）○', C.green, FILL.green, 13)], '数列・増え方のきまりと一致', C.green, FILL.green) },
    { note: 'よくあるまちがいです。20×21を2でわり忘れて420と答えること。420は2つの三角形を合わせた長方形の点の数です。三角形1つぶんは半分の210です。', add: S([bx(20, 24, 280, 40, '✕ 20×21 ＝ 420（長方形ぜんぶ）', C.red, FILL.red, 14), ar(160, 68, 160, 86, C.ink), bx(20, 90, 280, 40, '○ 420 ÷ 2 ＝ 210（三角形1つ）', C.green, FILL.green, 14)], '長方形は 三角形2つぶん') },
  ], '三角数：三角形を2つ合わせて長方形にする');
})();

// ───────── 座標平面上の2点（距離・中点）─────────
const azabu_sansu_12: DiagramFigure = (() => {
  const U = 11.5, ox = 66, oy = 134;
  const X = (x: number) => ox + x * U, Y = (y: number) => oy - y * U;
  const axes = (): E[] => [ln(X(0), Y(0), X(8.4), Y(0), C.gray, false, 1.2), ln(X(0), Y(0), X(0), Y(11.3), C.gray, false, 1.2), lb(X(8.4), Y(0) - 4, 'x', 10, C.gray, 'end', true), lb(X(0) + 5, Y(11.3) + 6, 'y', 10, C.gray, 'start', true)];
  const AB = (): E[] => [ln(X(1), Y(2), X(7), Y(10), C.red, false, 2.5), dot(X(1), Y(2), C.ink, 3), lb(X(1) - 8, Y(2) + 4, 'A', 12, C.ink, 'end', true), dot(X(7), Y(10), C.ink, 3), lb(X(7) + 8, Y(10) + 4, 'B', 12, C.ink, 'start', true)];
  const tri = (): E[] => [ln(X(1), Y(2), X(7), Y(2), C.blue, false, 2.5), ln(X(7), Y(2), X(7), Y(10), C.blue, false, 2.5), ...rt([X(7), Y(2)], [X(1), Y(2)], [X(7), Y(10)], 9, C.ink), dot(X(7), Y(2), C.ink, 2.5), lb(X(7) + 8, Y(2) + 4, 'C', 12, C.ink, 'start', true)];
  const M = (): E[] => [dot(X(4), Y(6), C.green, 4), lb(X(4) + 8, Y(6) + 14, 'M', 12, C.green, 'start', true)];
  const base = (): E[] => [...axes(), ...AB()];
  return show([
    { note: '座標平面上に2点A(1, 2)、B(7, 10)があります。線分ABの長さと、線分ABの中点の座標を求めます。', add: S(base(), 'A(1, 2)　B(7, 10)\nABの長さは？　中点は？') },
    { note: '❓斜めの線分の長さは、どうすれば測れるの？→定規がないので、横と縦の長さが測れる直角三角形をつくります。Aから右へ、Bから下へ進むと、C(7, 2)で直角に交わります。ABはその斜辺です。', add: S([...base(), ...tri()], '直角三角形 ACB をつくる\nAB は 斜辺') },
    { note: '❓横と縦の長さは、どう出すの？→座標の差が、目盛りの数になります。横ACは7－1＝6、縦CBは10－2＝8です。', add: S([...base(), ...tri(), lb(X(4), Y(2) + 14, '7－1＝6', 11, C.blue, 'middle', true), lb(X(7) + 10, Y(6), '10－2＝8', 11, C.blue, 'start', true)], '横 6　縦 8') },
    { note: '❓直角三角形で、斜辺の長さはどう求めるの？→三平方の定理です。直角をはさむ2辺を1辺とする正方形の面積を足すと、斜辺を1辺とする正方形の面積になります。6×6＝36と8×8＝64です。', add: S([bx(30, 50, 36, 36, '36', C.blue, FILL.blue, 13), lb(48, 100, '6×6', 11, C.blue, 'middle', true), lb(82, 70, '＋', 16, C.ink, 'middle', true), bx(96, 40, 64, 64, '64', C.blue, FILL.blue, 15), lb(128, 116, '8×8', 11, C.blue, 'middle', true), lb(176, 70, '＝', 16, C.ink, 'middle', true), bx(192, 34, 100, 100, 'AB×AB', C.red, FILL.red, 14)], '36 ＋ 64 ＝ AB×AB') },
    { note: '36＋64＝100なので、AB×AB＝100です。同じ数を2回かけて100になる数は10（10×10＝100）です。', add: S([bx(20, 34, 130, 40, '36 ＋ 64 ＝ 100', C.gray, FILL.gray, 15), ar(155, 54, 175, 54, C.ink), bx(180, 34, 120, 40, 'AB×AB＝100', C.red, FILL.red, 13), lb(160, 104, '10 × 10 ＝ 100', 14, C.green, 'middle', true)], 'AB ＝ 10', C.green, FILL.green) },
    { note: '❓中点の座標は、どう考えるの？→中点は、AからBまでのちょうど真ん中です。横には6の半分の3、縦には8の半分の4だけ、Aから進んだ所にあります。', add: S([...base(), ...tri(), ...M(), lb(X(2.5), Y(2) + 14, '半分 3', 10, C.green, 'middle', true), lb(X(4) - 6, Y(4) , '半分 4', 10, C.green, 'end', true)], '横 6÷2＝3　縦 8÷2＝4 進む', C.green, FILL.green) },
    { note: '中点の座標は、Aの座標（1, 2）に、3と4を足して（1＋3, 2＋4）＝（4, 6）です。これはx座標どうし、y座標どうしの平均と同じで、（1＋7）÷2＝4、（2＋10）÷2＝6です。', add: S([bx(20, 30, 280, 36, 'x：(1＋7)÷2 ＝ 4', C.blue, FILL.blue, 15), bx(20, 76, 280, 36, 'y：(2＋10)÷2 ＝ 6', C.blue, FILL.blue, 15)], '中点 ＝ (4, 6)', C.green, FILL.green) },
    { note: '答えは、AB＝10、中点（4, 6）です。', add: S([...base(), ...M()], '答え　AB＝10　中点(4, 6)', C.green, FILL.green) },
    { note: '確かめ（検算）です。Mから見ると、Aまでは横3・縦4で、三平方より3×3＋4×4＝25、つまり5。Bまでも横3・縦4で5。AM＝MB＝5で、足すと10です。', add: S([...base(), ...M(), lb(X(1) + 6, Y(6) + 12, 'AM＝5', 10, C.green, 'start', true), lb(X(6) + 6, Y(8) , 'MB＝5', 10, C.green, 'start', true)], 'AM＋MB ＝ 5＋5 ＝ 10 ＝ AB ○', C.green, FILL.green) },
    { note: 'よくあるまちがいです。中点の座標を「平均」ではなく「差」で求めてしまうこと（7－1＝6、10－2＝8）。差は長さ、平均が真ん中の位置です。距離を出すときは、差を2乗して足し、2乗する前にもどします。', add: S([bx(20, 24, 280, 34, '✕ 中点 ＝ (6, 8)（差は長さ）', C.red, FILL.red, 13), bx(20, 66, 280, 34, '✕ 距離 ＝ 6＋8＝14（直角に進んだ長さ）', C.red, FILL.red, 12), bx(20, 108, 280, 34, '○ 中点は平均、距離は三平方', C.green, FILL.green, 13)], '差 → 長さ　平均 → 真ん中') },
  ], '2点間の距離は直角三角形、中点は真ん中');
})();

// ───────── y＝ax² と傾き ─────────
const azabu_sansu_14: DiagramFigure = (() => {
  const sx = 60, sy = 7, ox = 40, oy = 142;
  const X = (x: number) => ox + x * sx, Y = (y: number) => oy - y * sy;
  const curve = (): E[] => { const o: E[] = []; for (let i = 0; i < 40; i++) { const a = (3.15 * i) / 40, b = (3.15 * (i + 1)) / 40; o.push(ln(X(a), Y(2 * a * a), X(b), Y(2 * b * b), C.blue, false, 2)); } return o; };
  const axes = (): E[] => [ln(X(0), Y(0), X(3.6), Y(0), C.gray, false, 1.2), ln(X(0), Y(0), X(0), Y(19.5), C.gray, false, 1.2), lb(X(3.6), Y(0) - 4, 'x', 10, C.gray, 'end', true), lb(X(0) + 5, 12, 'y', 10, C.gray, 'start', true)];
  const base = (): E[] => [...axes(), ...curve()];
  return show([
    { note: '関数y＝ax²のグラフが点(2, 8)を通ります。aの値を求め、さらにグラフ上でx座標がtとt＋2の2点を通る直線の傾きをtの式で表します。', add: S([...base(), dot(X(2), Y(8), C.red, 3.5), lb(X(2) + 8, Y(8), '(2, 8)', 11, C.red, 'start', true)], 'y＝ax²　点(2, 8)を通る\naは？　傾きは？') },
    { note: '❓点を通るというのは、式ではどういうこと？→グラフ上の点は、x座標とy座標が式を満たしています。x＝2、y＝8を y＝ax² に代入すると、aだけが残る式になります。', add: S([bx(20, 34, 280, 36, 'y ＝ a x²　に　x＝2、y＝8', C.gray, FILL.gray, 14), ar(160, 74, 160, 92, C.ink), bx(20, 96, 280, 36, '8 ＝ a × 2² ＝ 4a', C.green, FILL.green, 15)], '通る点は 式に代入できる') },
    { note: '8＝4aの両辺を4でわって、a＝2です。式はy＝2x²と決まりました。', add: S([bx(20, 34, 130, 40, '8 ＝ 4a', C.gray, FILL.gray, 15), ar(155, 54, 175, 54, C.ink), bx(180, 34, 120, 40, 'a ＝ 2', C.green, FILL.green, 17), lb(160, 104, 'y ＝ 2x²', 15, C.blue, 'middle', true)], 'a ＝ 2　（8÷4）', C.green, FILL.green) },
    { note: '❓x座標がtとt＋2の点のy座標は？→y＝2x²に代入します。x＝tのときy＝2t²、x＝t＋2のときy＝2(t＋2)²です。', add: S([bx(20, 34, 130, 40, 'x＝t\ny＝2t²', C.blue, FILL.blue, 14), bx(170, 34, 130, 40, 'x＝t＋2\ny＝2(t＋2)²', C.red, FILL.red, 13), lb(160, 104, '点の座標を文字の式で表す', 12, C.ink, 'middle', true)], '(t, 2t²)　(t＋2, 2(t＋2)²)') },
    { note: '❓(t＋2)²は、どう展開するの？→1辺t＋2の正方形の面積で考えます。t×tが1つ、t×2が2つ、2×2が1つなので、t²＋2t＋2t＋4＝t²＋4t＋4です。真ん中の項（4t）を忘れないようにします。', add: S([bx(60, 30, 60, 60, 't²', C.blue, FILL.blue, 15), bx(120, 30, 30, 60, '2t', C.green, FILL.green, 12), bx(60, 90, 60, 30, '2t', C.green, FILL.green, 12), bx(120, 90, 30, 30, '4', C.red, FILL.red, 12), lb(90, 24, 't', 11, C.ink, 'middle', true), lb(135, 24, '2', 11, C.ink, 'middle', true), lb(190, 66, '(t＋2)²', 13, C.ink, 'start', true), lb(190, 88, '＝ t²＋4t＋4', 13, C.green, 'start', true)], '(t＋2)² ＝ t² ＋ 4t ＋ 4', C.green, FILL.green) },
    { note: 'よって2(t＋2)²＝2t²＋8t＋8です。傾きは「yの変化量÷xの変化量」なので、yの変化量は（2t²＋8t＋8）－2t²＝8t＋8、xの変化量は（t＋2）－t＝2です。', add: S([bx(20, 30, 280, 36, 'yの変化量 ＝ (2t²＋8t＋8) － 2t² ＝ 8t＋8', C.red, FILL.red, 13), bx(20, 76, 280, 36, 'xの変化量 ＝ (t＋2) － t ＝ 2', C.blue, FILL.blue, 14)], '傾き ＝ yの変化量 ÷ xの変化量') },
    { note: '傾き＝(8t＋8)÷2＝4t＋4です。', add: S([bx(20, 34, 130, 40, '8t＋8', C.red, FILL.red, 15), lb(160, 54, '÷', 18, C.ink, 'middle', true), bx(170, 34, 130, 40, '2', C.blue, FILL.blue, 16), ar(160, 80, 160, 98, C.ink), bx(90, 102, 140, 34, '4t ＋ 4', C.green, FILL.green, 18)], '傾き ＝ 4t ＋ 4', C.green, FILL.green) },
    { note: '答えは、a＝2、傾き＝4t＋4です。', add: S([bx(30, 40, 260, 60, 'a ＝ 2　　傾き ＝ 4t＋4', C.green, FILL.green, 20)], '答え　a＝2、傾き＝4t＋4', C.green, FILL.green) },
    { note: '確かめ（検算）です。t＝1なら2点は（1, 2）と（3, 18）で、傾きは（18－2）÷（3－1）＝8。4t＋4にt＝1を入れても8で一致します。t＝0でも（0,0）と（2,8）の傾き4と、4×0＋4＝4が一致します。', add: S([...base(), dot(X(1), Y(2), C.red, 3.5), dot(X(3), Y(18), C.red, 3.5), ln(X(1), Y(2), X(3), Y(18), C.red, false, 2), lb(X(1) - 6, Y(2) + 4, '(1, 2)', 10, C.red, 'end', true), lb(X(3) - 6, Y(18) + 4, '(3, 18)', 10, C.red, 'end', true)], 't＝1：16÷2＝8　4×1＋4＝8 ○', C.green, FILL.green) },
    { note: 'よくあるまちがいです。(t＋2)²をt²＋4と展開して、真ん中の項4tを書き落とすこと。これだと傾きが2t＋2のようにずれてしまいます。面積図のように4つの部分を数えれば防げます。', add: S([bx(20, 24, 280, 40, '✕ (t＋2)² ＝ t²＋4（真ん中の項がない）', C.red, FILL.red, 13), ar(160, 68, 160, 86, C.ink), bx(20, 90, 280, 40, '○ (t＋2)² ＝ t²＋4t＋4', C.green, FILL.green, 14)], '(a＋b)² ＝ a²＋2ab＋b²') },
  ], 'y＝ax²のaと、2点を通る直線の傾き');
})();

// ───────── 円周角の定理 ─────────
const cO: Pt = [110, 72], cR = 55;
const cat = (deg: number): Pt => [cO[0] + cR * Math.cos((deg * Math.PI) / 180), cO[1] - cR * Math.sin((deg * Math.PI) / 180)];
const inscFig = (numeric: boolean): DiagramFigure => {
  const A = cat(220), B = cat(320), Cp = cat(95), Dp = cat(55), E = cat(275);
  const circle = (): E[] => [ci(cO[0], cO[1], cR, undefined, C.gray, 'rgba(2,132,199,0.06)'), dot(cO[0], cO[1]), lb(cO[0] - 8, cO[1] + 12, 'O', 11, C.ink, 'end', true)];
  const pt = (p: Pt, n: string, dx: number, dy: number, color: string = C.ink): E[] => [dot(p[0], p[1], color, 3), lb(p[0] + dx, p[1] + dy, n, 12, color, 'middle', true)];
  const chordAB = (): E => ln(A[0], A[1], B[0], B[1], C.gray, false, 1.5);
  const cAB = (): E[] => [...pt(A, 'A', -10, 6), ...pt(B, 'B', 10, 6)];
  const cBC = (): E[] => [...pt(A, 'B', -10, 6), ...pt(B, 'C', 10, 6)];
  const angC = (): E[] => [ln(Cp[0], Cp[1], A[0], A[1], C.blue, false, 2), ln(Cp[0], Cp[1], B[0], B[1], C.blue, false, 2), ...pt(Cp, 'C', 0, -8, C.blue)];
  const angD = (): E[] => [ln(Dp[0], Dp[1], A[0], A[1], C.red, false, 2), ln(Dp[0], Dp[1], B[0], B[1], C.red, false, 2), ...pt(Dp, 'D', 10, -6, C.red)];
  const cen = (): E[] => [ln(cO[0], cO[1], A[0], A[1], C.green, false, 2.5), ln(cO[0], cO[1], B[0], B[1], C.green, false, 2.5)];
  const nm2 = numeric ? '∠BOC' : '∠AOB';
  const right = (t: string, col: string): E => lb(200, 60, t, 12, col, 'start', true);
  const tx = (l: string[]): E[] => l.map((t, i) => lb(192, 40 + i * 20, t, 11, C.ink, 'start', true));
  return show([
    numeric
      ? { note: '円Oの周上に3点A・B・Cがあり、中心角∠BOC＝100°です。点Aは弧BC（Oを含む側）の上にはありません。円周角∠BACの大きさを求めます。', add: S([...circle(), ...cBC(), ...pt(Cp, 'A', 0, -8, C.blue), ln(Cp[0], Cp[1], A[0], A[1], C.blue, false, 2), ln(Cp[0], Cp[1], B[0], B[1], C.blue, false, 2), ...cen(), lb(cO[0], cO[1] + 28, '100°', 11, C.green, 'middle', true), ...tx(['中心角 ∠BOC', '＝100°', '円周角 ∠BAC', '＝？'])], '中心角 100°\n円周角 ∠BAC は？') }
      : { note: '円Oの周上に、弧ABに対して同じ側に2点C、Dがあります。∠ACB＝∠ADBとなる理由を説明します。', add: S([...circle(), ...cAB(), ...angC(), ...angD(), chordAB(), ...tx(['∠ACB （青）', '＝', '∠ADB （赤）', 'になる理由は？'])], '同じ弧ABを見込む 円周角\n∠ACB と ∠ADB') },
    { note: '❓円周角とは、何のこと？→円周上の点から、弧の両はしを見た角です。弧ABに対する円周角は∠ACB。いっぽう、中心Oから見た角∠AOBは中心角です。どちらも同じ弧ABを見ています。', add: S([...circle(), ...cAB(), ...angC(), ...cen(), chordAB(), ...tx(['円周角（青）', '中心角（緑）', '同じ弧ABを見る'])], '円周角 ∠ACB　中心角 ∠AOB') },
    { note: '❓円周角と中心角は、どんな関係なの？→円周角は中心角の半分です。なぜかを確かめます。まず、CからOを通る直線を引き、円との交点をEとします。OA＝OC（どちらも半径）なので、△OACは二等辺三角形で、底角∠OAC＝∠OCA＝●です。', add: S([...circle(), ...cAB(), ...angC(), ln(Cp[0], Cp[1], E[0], E[1], C.purple, true, 2), ...pt(E, 'E', 0, 12, C.purple), ln(cO[0], cO[1], A[0], A[1], C.green, false, 2), lb(Cp[0] - 10, Cp[1] + 22, '●', 11, C.purple, 'middle', true), lb(A[0] + 16, A[1] - 12, '●', 11, C.purple, 'middle', true), ...tx(['OA＝OC', '（半径）', '△OAC は', '二等辺三角形'])], '△OAC：底角が等しい（●）') },
    { note: '❓∠AOEは何度？→三角形の外角は、となりあわない2つの内角の和に等しいので、∠AOE＝●＋●＝2×●です。つまり∠AOEは、∠ACO（＝∠ACE）の2倍です。', add: S([...circle(), ...cAB(), ln(Cp[0], Cp[1], A[0], A[1], C.blue, false, 2), ln(Cp[0], Cp[1], E[0], E[1], C.purple, true, 2), ...pt(E, 'E', 0, 12, C.purple), ln(cO[0], cO[1], A[0], A[1], C.green, false, 2.5), ...pt(Cp, 'C', 0, -8, C.blue), ...tx(['外角 ∠AOE', '＝ ● ＋ ●', '＝ 2×●'])], '∠AOE ＝ 2 × ∠ACE') },
    { note: '同じように、OB＝OCの二等辺三角形△OBCを見ると、∠BOE＝2×■（■＝∠BCE）です。', add: S([...circle(), ...cAB(), ln(Cp[0], Cp[1], B[0], B[1], C.red, false, 2), ln(Cp[0], Cp[1], E[0], E[1], C.purple, true, 2), ...pt(E, 'E', 0, 12, C.purple), ln(cO[0], cO[1], B[0], B[1], C.green, false, 2.5), ...pt(Cp, 'C', 0, -8, C.red), ...tx(['外角 ∠BOE', '＝ ■ ＋ ■', '＝ 2×■'])], '∠BOE ＝ 2 × ∠BCE') },
    { note: '❓2つを合わせると？→∠AOB＝∠AOE＋∠BOE＝2×●＋2×■＝2×（●＋■）です。（●＋■）はちょうど円周角∠ACBなので、中心角∠AOBは円周角の2倍、つまり円周角は中心角の半分です。', add: S([...circle(), ...cAB(), ...angC(), ...cen(), bx(192, 34, 120, 70, '∠AOB\n＝2×(●＋■)\n＝2×∠ACB', C.green, FILL.green, 11)], '円周角 ＝ 中心角 ÷ 2', C.green, FILL.green) },
    numeric
      ? { note: '中心角∠BOC＝100°なので、円周角∠BAC＝100°÷2＝50°です。', add: S([bx(20, 34, 130, 40, '100°', C.green, FILL.green, 17), lb(160, 54, '÷2', 16, C.ink, 'middle', true), bx(170, 34, 130, 40, '50°', C.blue, FILL.blue, 18), lb(160, 104, '円周角 ＝ 中心角の半分', 13, C.ink, 'middle', true)], '∠BAC ＝ 100° ÷ 2 ＝ 50°', C.green, FILL.green) }
      : { note: '❓Dでも同じことが言えるの？→はい。Dについても、まったく同じ説明で∠ADB＝中心角∠AOB÷2になります。中心角∠AOBは、CやDの位置に関係なく、弧ABだけで決まります。', add: S([...circle(), ...cAB(), ...angD(), ...cen(), bx(192, 34, 120, 70, '∠ADB\n＝∠AOB÷2', C.red, FILL.red, 12)], '∠ADB ＝ 中心角 ÷ 2') },
    numeric
      ? { note: '答えは50°です。', add: S([...circle(), ...cBC(), ...pt(Cp, 'A', 0, -8, C.blue), ln(Cp[0], Cp[1], A[0], A[1], C.blue, false, 2), ln(Cp[0], Cp[1], B[0], B[1], C.blue, false, 2), ...cen(), lb(Cp[0], Cp[1] + 26, '50°', 11, C.blue, 'middle', true)], '答え　50°', C.green, FILL.green) }
      : { note: '答えは、∠ACBも∠ADBも「弧ABの中心角÷2」という同じ値になるので、∠ACB＝∠ADBです（円周角の定理）。', add: S([...circle(), ...cAB(), ...angC(), ...angD(), bx(192, 34, 120, 70, '∠ACB＝∠AOB÷2\n∠ADB＝∠AOB÷2\n→ 等しい', C.green, FILL.green, 10)], '答え　同じ弧に対する円周角は等しい', C.green, FILL.green) },
    numeric
      ? { note: '確かめ（検算）です。Aを弧BCの反対側にある別の位置にずらしても、弧BCが同じなら円周角は50°のまま。点Aの位置（Oを含む側か、反対側か）だけ確認します。', add: S([...circle(), ...cBC(), ...pt(Dp, 'A′', 10, -6, C.red), ln(Dp[0], Dp[1], A[0], A[1], C.red, false, 2), ln(Dp[0], Dp[1], B[0], B[1], C.red, false, 2), ...cen(), lb(Dp[0] - 4, Dp[1] + 24, '50°', 11, C.red, 'middle', true), ...tx(['Aを動かしても', '50°のまま'])], '同じ弧なら 円周角は同じ 50°', C.green, FILL.green) }
      : { note: '確かめ（検算）です。たとえば中心角∠AOBが100°なら、CでもDでも円周角は50°です。CやDを弧ABに対して同じ側のどこに動かしても、50°のままだとイメージできます。', add: S([...circle(), ...cAB(), ...angC(), ...angD(), bx(192, 34, 120, 50, '中心角 100° なら\nどちらも 50°', C.green, FILL.green, 11)], '位置を動かしても 50° のまま', C.green, FILL.green) },
    { note: numeric ? 'よくあるまちがいです。中心角100°をそのまま円周角の答えにして、2でわり忘れること。円周角は中心角の半分です。' : 'よくあるまちがいです。円周角の定理を中心角と混同すること。円周角は中心角の半分であり、さらに点が弧ABの反対側（弧AB上）にあるときは、円周角が180°－（円周角）になって、ここでの等式は成り立ちません。', add: S([bx(20, 24, 280, 40, numeric ? '✕ ∠BAC ＝ 100°（中心角のまま）' : '✕ 円周角 ＝ 中心角 ／ 反対側の点でも等しい', C.red, FILL.red, 13), ar(160, 68, 160, 86, C.ink), bx(20, 90, 280, 40, numeric ? '○ ∠BAC ＝ 100° ÷ 2 ＝ 50°' : '○ 同じ側の点なら ∠ACB＝∠ADB＝中心角÷2', C.green, FILL.green, 13)], '円周角 ＝ 中心角の半分') },
  ], '円周角の定理：円周角は中心角の半分');
};
const remapABC = (fig: DiagramFigure): DiagramFigure => {
  const mp = (t: string): string => t.replace(/[ABC]/g, (ch) => ({ A: 'B', B: 'C', C: 'A' } as Record<string, string>)[ch]);
  const from = fig.stepParts[0], to = fig.stepParts[5];
  const parts = fig.parts.map((e, i) => {
    if (i < from || i >= to) return e;
    if (e.t === 'label') return { ...e, text: mp(e.text) };
    if ((e.t === 'box' || e.t === 'circle') && e.text) return { ...e, text: mp(e.text) };
    return e;
  });
  const steps = (fig.steps ?? []).map((t, i) => (i >= 1 && i <= 5 ? mp(t) : t));
  return { ...fig, parts, steps };
};
const azabu_sansu_15 = inscFig(false);
const nanzan_sansu_04 = remapABC(inscFig(true));

// ───────── 図の印（等しい辺・等しい角）─────────
const mid = (a: Pt, b: Pt): Pt => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
const tick = (a: Pt, b: Pt, n: number, color: string): E[] => {
  const m = mid(a, b), dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy), ux = dx / L, uy = dy / L, px = -uy, py = ux;
  const out: E[] = [];
  for (let i = 0; i < n; i++) { const off = (i - (n - 1) / 2) * 5; const cx = m[0] + ux * off, cy = m[1] + uy * off; out.push(ln(cx - px * 4, cy - py * 4, cx + px * 4, cy + py * 4, color, false, 1.8)); }
  return out;
};
const arcM = (v: Pt, a: Pt, b: Pt, r: number, color: string, n = 10): E[] => {
  const t1 = Math.atan2(a[1] - v[1], a[0] - v[0]), t2 = Math.atan2(b[1] - v[1], b[0] - v[0]);
  let d = t2 - t1; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI;
  const out: E[] = [];
  for (let i = 0; i < n; i++) { const s = t1 + (d * i) / n, e = t1 + (d * (i + 1)) / n; out.push(ln(v[0] + r * Math.cos(s), v[1] + r * Math.sin(s), v[0] + r * Math.cos(e), v[1] + r * Math.sin(e), color, false, 1.8)); }
  return out;
};
const arcs2 = (v: Pt, a: Pt, b: Pt, r: number, color: string, k: number): E[] => (k === 1 ? arcM(v, a, b, r, color) : [...arcM(v, a, b, r, color), ...arcM(v, a, b, r + 4, color)]);

// ───────── 二等辺三角形の頂角の二等分線（合同の証明）─────────
const iA: Pt = [160, 16], iB: Pt = [70, 128], iC: Pt = [250, 128], iD: Pt = [160, 128];
const iBase = (): E[] => [pg([iA, iB, iC], C.ink, 'none'), ln(iA[0], iA[1], iD[0], iD[1], C.ink, false, 1.6), nm(160, 10, 'A'), nm(58, 138, 'B'), nm(262, 138, 'C'), nm(160, 142, 'D')];
const nanzan_sansu_11: DiagramFigure = show([
  { note: '△ABCでAB＝ACです。頂角Aの二等分線と辺BCの交点をDとするとき、△ABD≡△ACDであることを証明します。', add: S([...iBase(), pg([iA, iB, iD], C.blue, BLUE_T)], 'AB＝AC　ADは∠Aの二等分線\n△ABD ≡ △ACD を示す') },
  { note: '❓合同を証明するには、何を探せばいいの？→三角形の合同条件のどれかを満たす「等しいもの」を、3つ見つけます。条件は3通り（3辺／2辺とその間の角／1辺とその両端の角）。ここではどれが使えるか、図に印をつけて探します。', add: S([bx(20, 20, 280, 34, '①3組の辺がそれぞれ等しい', C.gray, FILL.gray, 13), bx(20, 62, 280, 34, '②2組の辺とその間の角がそれぞれ等しい', C.gray, FILL.gray, 13), bx(20, 104, 280, 34, '③1組の辺とその両端の角がそれぞれ等しい', C.gray, FILL.gray, 13)], '合同条件は3つ\nどれが使えるか探す') },
  { note: '❓問題文から、何が分かる？→「AB＝AC」は問題に書いてある条件（仮定）です。「ADは∠Aの二等分線」は、∠BAD＝∠CAD（●）ということです。図に印をつけます。', add: S([...iBase(), ...tick(iA, iB, 1, C.blue), ...tick(iA, iC, 1, C.blue), ...arcs2(iA, iB, iD, 26, C.red, 1), ...arcs2(iA, iC, iD, 26, C.red, 1)], 'AB＝AC（仮定）\n∠BAD＝∠CAD（二等分線）', C.blue, FILL.blue) },
  { note: '❓まだ足りない。もう1つは？→ADは、△ABDと△ACDのどちらにもふくまれる同じ辺です。AD＝AD（共通）も等しいものとして使えます。見落としやすい根拠です。', add: S([...iBase(), ...tick(iA, iB, 1, C.blue), ...tick(iA, iC, 1, C.blue), ...arcs2(iA, iB, iD, 26, C.red, 1), ...arcs2(iA, iC, iD, 26, C.red, 1), ...tick(iA, iD, 2, C.green), lb(186, 70, '共通', 11, C.green, 'start', true)], 'AD＝AD（共通）') },
  { note: '❓この3つで、どの合同条件になるの？→AB＝AC（辺）、∠BAD＝∠CAD（角）、AD＝AD（辺）。角∠BADは、辺ABと辺ADにはさまれた角です。「2組の辺とその間の角」がそれぞれ等しいので、条件②に当てはまります。', add: S([pg([iA, iB, iD], C.blue, BLUE_T), pg([iA, iC, iD], C.red, RED_T), ...iBase(), ...tick(iA, iB, 1, C.blue), ...tick(iA, iC, 1, C.blue), ...arcs2(iA, iB, iD, 26, C.red, 1), ...arcs2(iA, iC, iD, 26, C.red, 1), ...tick(iA, iD, 2, C.green)], '辺AB・角A・辺AD がセット\n（角は2辺の間にある）', C.green, FILL.green) },
  { note: '証明の書き方です。①どの三角形か「△ABDと△ACDにおいて」、②等しいものを根拠つきで3つ、③合同条件を書いて結論、の順に書きます。', add: S([bx(14, 14, 292, 30, '△ABDと△ACDにおいて', C.ink, FILL.warm, 13), bx(14, 48, 292, 30, 'AB＝AC（仮定）　∠BAD＝∠CAD（仮定）', C.blue, FILL.blue, 11), bx(14, 82, 292, 30, 'AD＝AD（共通）', C.green, FILL.green, 13), bx(14, 116, 292, 28, 'よって 2組の辺とその間の角が等しい', C.red, FILL.red, 11)], '根拠のことばを 必ず添える', C.ink, FILL.warm) },
  { note: '答え（結論）です。2組の辺とその間の角がそれぞれ等しいので、△ABD≡△ACD（二辺夾角相等）です。', add: S([pg([iA, iB, iD], C.blue, BLUE_T), pg([iA, iC, iD], C.red, RED_T), ...iBase()], '答え　△ABD ≡ △ACD\n（2組の辺とその間の角）', C.green, FILL.green) },
  { note: '確かめ（検算）です。合同な図形は、対応する頂点を順に書きます。A↔A、B↔C、D↔D。△ABDと△ACDの頂点の並びが、この対応になっているかを確認します。', add: S([bx(20, 30, 130, 36, '△ A B D', C.blue, FILL.blue, 16), bx(170, 30, 130, 36, '△ A C D', C.red, FILL.red, 16), lb(160, 84, 'A↔A　B↔C　D↔D', 14, C.ink, 'middle', true)], '対応する頂点を 同じ順に書く') },
  { note: '❓合同だと、ほかに何が分かる？→対応する辺や角が等しくなります。BD＝CD（Dは底辺の中点）、∠ADB＝∠ADC。この2つの角は合わせて180°なので、どちらも90°です。頂角の二等分線は、底辺の垂直二等分線になります。', add: S([...iBase(), ...tick(iB, iD, 1, C.purple), ...tick(iD, iC, 1, C.purple), ...rt(iD, iA, iB, 9, C.purple), ...rt(iD, iA, iC, 9, C.purple)], 'BD＝CD　∠ADB＝∠ADC＝90°', C.purple, FILL.purple) },
  { note: 'よくあるまちがいです。「2組の辺とその間の角」を使うのに、角が2辺にはさまれていることを確かめないこと。たとえばAB・AD・∠ABDの組のように、角が2辺の間になければ、この条件は使えません。', add: S([bx(20, 24, 280, 40, '✕ AB・AD と ∠ABD（角が辺の間にない）', C.red, FILL.red, 13), ar(160, 68, 160, 86, C.ink), bx(20, 90, 280, 40, '○ AB・AD と ∠BAD（2辺にはさまれた角）', C.green, FILL.green, 13)], '角は 2辺の間にあるか？') },
], '二等辺三角形の頂角の二等分線で合同を示す');

// ───────── 平行四辺形の対角線（合同の証明）─────────
const hA: Pt = [80, 34], hB: Pt = [40, 120], hC: Pt = [240, 120], hD: Pt = [280, 34], hO: Pt = [160, 77];
const hBase = (): E[] => [pg([hA, hB, hC, hD], C.ink, 'none'), ln(hA[0], hA[1], hC[0], hC[1], C.ink, false, 1.6), ln(hB[0], hB[1], hD[0], hD[1], C.ink, false, 1.6), nm(70, 26, 'A'), nm(30, 130, 'B'), nm(250, 130, 'C'), nm(290, 28, 'D'), nm(160, 66, 'O')];
const seinan_sansu_10: DiagramFigure = show([
  { note: '平行四辺形ABCDで、対角線ACとBDの交点をOとします。△ABO≡△CDOであることを証明します。', add: S([pg([hA, hB, hO], C.blue, BLUE_T), pg([hC, hD, hO], C.red, RED_T), ...hBase()], '平行四辺形ABCD\n△ABO ≡ △CDO を示す') },
  { note: '❓平行四辺形の性質として、何が使える？→対辺は平行で、長さも等しいです。AB∥DC、AB＝DC。この「AB＝DC」が、合同のための1つ目の等しいものになります。', add: S([...hBase(), ...tick(hA, hB, 1, C.blue), ...tick(hD, hC, 1, C.blue)], 'AB∥DC　AB＝DC（対辺）', C.blue, FILL.blue) },
  { note: '❓等しい角は、どこから出てくる？→AB∥DCなので、直線ACをまたぐ「錯角」が等しくなります。∠BAO（＝∠BAC）と∠DCO（＝∠DCA）は錯角なので、∠BAO＝∠DCO（●）です。', add: S([...hBase(), ...tick(hA, hB, 1, C.blue), ...tick(hD, hC, 1, C.blue), ...arcs2(hA, hB, hO, 22, C.red, 1), ...arcs2(hC, hD, hO, 22, C.red, 1)], '錯角：∠BAO ＝ ∠DCO（●）', C.red, FILL.red) },
  { note: '❓もう1組の角は？→同じように、直線BDをまたぐ錯角を考えます。AB∥DCなので、∠ABO（＝∠ABD）と∠CDO（＝∠CDB）も錯角で、∠ABO＝∠CDO（▲）です。', add: S([...hBase(), ...tick(hA, hB, 1, C.blue), ...tick(hD, hC, 1, C.blue), ...arcs2(hA, hB, hO, 22, C.red, 1), ...arcs2(hC, hD, hO, 22, C.red, 1), ...arcs2(hB, hA, hO, 22, C.green, 2), ...arcs2(hD, hC, hO, 22, C.green, 2)], '錯角：∠ABO ＝ ∠CDO（▲）', C.green, FILL.green) },
  { note: '❓これで、どの合同条件が使えるの？→AB＝DC（辺）と、その両はしの角∠BAO＝∠DCO、∠ABO＝∠CDO。「1組の辺とその両端の角がそれぞれ等しい」という条件③に当てはまります。ABの両はしは、AとBだからです。', add: S([pg([hA, hB, hO], C.blue, BLUE_T), pg([hC, hD, hO], C.red, RED_T), ...hBase(), ...tick(hA, hB, 1, C.blue), ...tick(hD, hC, 1, C.blue), ...arcs2(hA, hB, hO, 22, C.red, 1), ...arcs2(hC, hD, hO, 22, C.red, 1), ...arcs2(hB, hA, hO, 22, C.green, 2), ...arcs2(hD, hC, hO, 22, C.green, 2)], '辺ABの両はし A・B の角が等しい\n→ 1組の辺とその両端の角', C.ink, FILL.warm) },
  { note: '書き方です。「△ABOと△CDOにおいて」と書き、等しいものを3つ、根拠（平行四辺形の対辺・錯角）を添えて書き、合同条件で結論します。', add: S([bx(14, 14, 292, 28, '△ABOと△CDOにおいて', C.ink, FILL.warm, 13), bx(14, 46, 292, 28, 'AB＝CD（平行四辺形の対辺）', C.blue, FILL.blue, 12), bx(14, 78, 292, 28, '∠BAO＝∠DCO、∠ABO＝∠CDO（錯角）', C.red, FILL.red, 11), bx(14, 110, 292, 30, 'よって 1組の辺とその両端の角が等しい', C.green, FILL.green, 11)], '根拠のことばを 添える') },
  { note: '答え（結論）です。1組の辺とその両端の角がそれぞれ等しいので、△ABO≡△CDOです。', add: S([pg([hA, hB, hO], C.blue, BLUE_T), pg([hC, hD, hO], C.red, RED_T), ...hBase()], '答え　△ABO ≡ △CDO\n（1組の辺とその両端の角）', C.green, FILL.green) },
  { note: '確かめ（検算）です。対応する頂点を順に書くと、A↔C、B↔D、O↔Oです。△ABOと△CDOの並びがこの対応になっています。', add: S([bx(20, 30, 130, 36, '△ A B O', C.blue, FILL.blue, 16), bx(170, 30, 130, 36, '△ C D O', C.red, FILL.red, 16), lb(160, 84, 'A↔C　B↔D　O↔O', 14, C.ink, 'middle', true)], '対応する頂点を 同じ順に') },
  { note: '❓合同だと、ほかに何が分かる？→対応する辺が等しいので、AO＝CO、BO＝DO。つまり、平行四辺形の対角線は、おたがいの中点で交わることが分かります。この証明は、その性質の土台になっています。', add: S([...hBase(), ...tick(hA, hO, 1, C.purple), ...tick(hO, hC, 1, C.purple), ...tick(hB, hO, 2, C.purple), ...tick(hO, hD, 2, C.purple)], 'AO＝CO　BO＝DO\n対角線は おたがいの中点で交わる', C.purple, FILL.purple) },
  { note: 'よくあるまちがいです。「対角線は中点で交わる」を、証明なしで最初から使ってしまうこと。この問題では、それが結論なので、使うと理由が輪になってしまいます。使ってよいのは、対辺が平行・等しいという性質からです。', add: S([bx(20, 24, 280, 40, '✕ 対角線は中点で交わる（結論を先に使う）', C.red, FILL.red, 13), ar(160, 68, 160, 86, C.ink), bx(20, 90, 280, 40, '○ 対辺が平行・等しい → 錯角 → 合同', C.green, FILL.green, 13)], '結論を 根拠に使わない') },
], '平行四辺形の対角線でできる三角形の合同');

// ───────── 二等辺三角形の底辺を共有する三角形の合同 ─────────
const oA: Pt = [160, 14], oB: Pt = [60, 130], oC: Pt = [260, 130], oD: Pt = [115, 72], oE: Pt = [205, 72];
const oBase = (): E[] => [pg([oA, oB, oC], C.ink, 'none'), nm(160, 8, 'A'), nm(48, 140, 'B'), nm(272, 140, 'C'), nm(104, 70, 'D'), nm(216, 70, 'E')];
const ohori_sansu_12: DiagramFigure = show([
  { note: '△ABCで∠ABC＝∠ACBです。辺AB上に点D、辺AC上に点Eを、BD＝CEとなるようにとります。△DBC≡△ECBであることを証明します。', add: S([...oBase(), ln(oD[0], oD[1], oC[0], oC[1], C.blue, false, 2), ln(oE[0], oE[1], oB[0], oB[1], C.red, false, 2)], '∠ABC＝∠ACB　BD＝CE\n△DBC ≡ △ECB を示す') },
  { note: '❓どの三角形とどの三角形？→△DBC（D・B・Cの三角形）と△ECB（E・C・Bの三角形）です。頂点の対応は、D↔E、B↔C、C↔Bです。BCが、2つの三角形に共通して使われています。', add: S([pg([oD, oB, oC], C.blue, BLUE_T), pg([oE, oC, oB], C.red, RED_T), ...oBase()], '△DBC（青）と △ECB（赤）\nD↔E　B↔C　C↔B') },
  { note: '❓問題文からすぐ分かることは？→BD＝CEです（仮定）。これが等しい辺の1組目です。', add: S([...oBase(), ln(oD[0], oD[1], oC[0], oC[1], C.ink, false, 1.4), ln(oE[0], oE[1], oB[0], oB[1], C.ink, false, 1.4), ...tick(oB, oD, 1, C.blue), ...tick(oC, oE, 1, C.blue)], 'BD＝CE（仮定）', C.blue, FILL.blue) },
  { note: '❓等しい角は、どう出すの？→仮定より∠ABC＝∠ACB。DはAB上、EはAC上の点なので、∠DBCは∠ABCと同じ角、∠ECBは∠ACBと同じ角です。だから∠DBC＝∠ECB（●）が言えます。', add: S([...oBase(), ln(oD[0], oD[1], oC[0], oC[1], C.ink, false, 1.4), ln(oE[0], oE[1], oB[0], oB[1], C.ink, false, 1.4), ...tick(oB, oD, 1, C.blue), ...tick(oC, oE, 1, C.blue), ...arcs2(oB, oA, oC, 26, C.red, 1), ...arcs2(oC, oA, oB, 26, C.red, 1)], '∠DBC＝∠ABC＝∠ACB＝∠ECB', C.red, FILL.red) },
  { note: '❓3つ目は？→BCは、△DBCと△ECBの両方にふくまれる辺です（BC＝CB、共通）。等しいものが3つそろいました。', add: S([...oBase(), ln(oD[0], oD[1], oC[0], oC[1], C.ink, false, 1.4), ln(oE[0], oE[1], oB[0], oB[1], C.ink, false, 1.4), ...tick(oB, oD, 1, C.blue), ...tick(oC, oE, 1, C.blue), ...arcs2(oB, oA, oC, 26, C.red, 1), ...arcs2(oC, oA, oB, 26, C.red, 1), ...tick(oB, oC, 2, C.green)], 'BC＝CB（共通）', C.green, FILL.green) },
  { note: '❓どの合同条件になるの？→BD＝CE（辺）、∠DBC＝∠ECB（角）、BC＝CB（辺）。角∠DBCは辺BDと辺BCにはさまれた角で、∠ECBは辺CEと辺CBにはさまれた角です。「2組の辺とその間の角」の条件に当てはまります。', add: S([pg([oD, oB, oC], C.blue, BLUE_T), pg([oE, oC, oB], C.red, RED_T), ...oBase(), ...tick(oB, oD, 1, C.blue), ...tick(oC, oE, 1, C.blue), ...arcs2(oB, oA, oC, 26, C.red, 1), ...arcs2(oC, oA, oB, 26, C.red, 1), ...tick(oB, oC, 2, C.green)], '辺BD・角B・辺BC がセット\n（角は2辺の間）', C.ink, FILL.warm) },
  { note: '書き方です。「△DBCと△ECBにおいて」、仮定・共通・角の等しさを根拠とともに3つ書き、最後に合同条件で結論します。', add: S([bx(14, 14, 292, 28, '△DBCと△ECBにおいて', C.ink, FILL.warm, 13), bx(14, 46, 292, 28, 'BD＝CE（仮定）　BC＝CB（共通）', C.blue, FILL.blue, 12), bx(14, 78, 292, 28, '∠DBC＝∠ECB（∠ABC＝∠ACBより）', C.red, FILL.red, 11), bx(14, 110, 292, 30, 'よって 2組の辺とその間の角が等しい', C.green, FILL.green, 11)], '根拠のことばを 添える') },
  { note: '答え（結論）です。2組の辺とその間の角がそれぞれ等しいので、△DBC≡△ECBです。', add: S([pg([oD, oB, oC], C.blue, BLUE_T), pg([oE, oC, oB], C.red, RED_T), ...oBase()], '答え　△DBC ≡ △ECB\n（2組の辺とその間の角）', C.green, FILL.green) },
  { note: '確かめ（検算）です。対応する頂点を順に書くと、D↔E、B↔C、C↔Bです。△DBCと△ECBの並びが、この対応になっているか確認します。', add: S([bx(20, 30, 130, 36, '△ D B C', C.blue, FILL.blue, 16), bx(170, 30, 130, 36, '△ E C B', C.red, FILL.red, 16), lb(160, 84, 'D↔E　B↔C　C↔B', 14, C.ink, 'middle', true)], '対応する頂点を 同じ順に') },
  { note: 'よくあるまちがいです。対応する頂点の順番をまちがえて、合同条件に使う「間の角」がずれてしまうこと。△DBCの∠DBCに対応するのは、△ECBの∠ECBです（∠EBCではありません）。', add: S([bx(20, 24, 280, 40, '✕ ∠DBC ＝ ∠EBC（対応がずれる）', C.red, FILL.red, 13), ar(160, 68, 160, 86, C.ink), bx(20, 90, 280, 40, '○ ∠DBC ＝ ∠ECB（B↔C の角）', C.green, FILL.green, 13)], '対応する頂点の順に 書く') },
], '二等辺三角形の下の2つの三角形の合同');

// ───────── 点を結んでできる線分の本数 ─────────
const polyPts = (n: number, cx: number, cy: number, r: number): Pt[] => Array.from({ length: n }, (_, i) => [cx + r * Math.cos(((90 + (360 * i) / n) * Math.PI) / 180), cy - r * Math.sin(((90 + (360 * i) / n) * Math.PI) / 180)] as Pt);
const allSeg = (p: Pt[], color: string, w = 1.6): E[] => { const o: E[] = []; for (let i = 0; i < p.length; i++) for (let j = i + 1; j < p.length; j++) o.push(ln(p[i][0], p[i][1], p[j][0], p[j][1], color, false, w)); return o; };
const azabu_sansu_16: DiagramFigure = (() => {
  const H = polyPts(6, 160, 70, 50);
  const names = ['A', 'B', 'C', 'D', 'E', 'F'];
  const dots6 = (): E[] => H.flatMap((p, i) => [dot(p[0], p[1], C.ink, 3), nm(p[0] + (p[0] - 160) * 0.3, p[1] + (p[1] - 70) * 0.3 + 4, names[i])]);
  return show([
    { note: '平面上にn個の点を、どの3点も同じ直線上にないように置き、すべての点を結んでできる線分の本数を、nの式で表します。n＝6のときの本数も求めます。', add: S([...allSeg(H, C.blue, 1.3), ...dots6()], 'n個の点を ぜんぶ結ぶ\n線分は何本？（n＝6のとき）') },
    { note: '❓線分は、何が決まると1本に決まるの？→2つの点を選べば、その2点を結ぶ線分が1本決まります。つまり、線分の本数は「2点の選び方の数」と同じです。', add: S([...H.flatMap((p, i) => [dot(p[0], p[1], C.ink, 3), nm(p[0] + (p[0] - 160) * 0.3, p[1] + (p[1] - 70) * 0.3 + 4, names[i])]), ln(H[0][0], H[0][1], H[2][0], H[2][1], C.red, false, 3)], '点Aと点C → 線分AC の1本\n2点を選ぶ ＝ 線分1本') },
    { note: '❓「どの3点も一直線上にない」という条件は、なぜ必要なの？→もし3点が一直線上にあると、2点ずつ結んだ線分が重なって、別々の線分として数えられなくなります。条件があれば、2点ごとにちがう線分ができます。', add: S([ln(50, 60, 150, 60, C.red, false, 3), dot(50, 60, C.ink, 3), dot(100, 60, C.ink, 3), dot(150, 60, C.ink, 3), lb(100, 82, '一直線上 → 重なる ✕', 11, C.red, 'middle', true), ...polyPts(3, 235, 66, 32).flatMap((p) => [dot(p[0], p[1], C.ink, 3)]), ...allSeg(polyPts(3, 235, 66, 32), C.green, 2), lb(235, 112, '三角形 → 3本 ○', 11, C.green, 'middle', true)], '一直線上にないから\n2点ごとに別の線分') },
    { note: 'まず、小さい数で調べます。3点なら三角形で3本、4点なら6本、5点なら10本、6点なら15本です。数えたら、本数が1本ずつ増えるわけではなく、3、6、10、15…と増え方が大きくなっていきます。', add: S([...allSeg(polyPts(3, 40, 70, 28), C.blue, 1.6), ...allSeg(polyPts(4, 120, 70, 30), C.blue, 1.6), ...allSeg(polyPts(5, 200, 70, 30), C.blue, 1.4), ...allSeg(polyPts(6, 280, 70, 30), C.blue, 1.2), lb(40, 116, '3点→3本', 10, C.ink, 'middle', true), lb(120, 116, '4点→6本', 10, C.ink, 'middle', true), lb(200, 116, '5点→10本', 10, C.ink, 'middle', true), lb(280, 116, '6点→15本', 10, C.ink, 'middle', true)], '点が1つ増えるごとに\nふえ方が大きくなる') },
    { note: '❓式を見つけるには？→まず1つの点から出る線分を数えます。点Aからは、ほかの5点（B〜F）に向かって5本出ます。n個の点なら、1つの点から出る線分は（n－1）本です。', add: S([...allSeg(H, C.gray, 1), ...[1, 2, 3, 4, 5].map((k) => ln(H[0][0], H[0][1], H[k][0], H[k][1], C.red, false, 2.5)), ...dots6()], '点Aから 5本\n（n－1）本') },
    { note: '❓点がn個あるとき、全部の線分は？→どの点からも（n－1）本出るので、n×（n－1）本と数えられます。n＝6なら6×5＝30です。でもこれは本当の本数より多いのです。', add: S([bx(20, 30, 130, 40, 'n個の点', C.gray, FILL.gray, 15), lb(160, 50, '×', 18, C.ink, 'middle', true), bx(170, 30, 130, 40, '(n－1)本ずつ', C.blue, FILL.blue, 14), ar(160, 76, 160, 94, C.ink), bx(70, 98, 180, 38, 'n×(n－1) ＝ 6×5 ＝ 30', C.red, FILL.red, 14)], '30本と数えたが…') },
    { note: '❓なぜ多いの？→線分ABは、Aから数えるときに1回、Bから数えるときにもう1回、合わせて2回数えているからです。どの線分も両はしで2回ずつ数えているので、本数は半分の15本になります。', add: S([dot(60, 70, C.ink, 4), dot(260, 70, C.ink, 4), nm(60, 56, 'A'), nm(260, 56, 'B'), ln(60, 70, 260, 70, C.blue, false, 2.5), ar(150, 100, 90, 78, C.red), lb(160, 118, 'Aから数える（1回目）', 11, C.red, 'middle', true), ar(170, 100, 230, 78, C.green), lb(160, 136, 'Bから数える（2回目）', 11, C.green, 'middle', true)], 'ABは 2回数えている\n→ 半分にする', C.ink, FILL.warm) },
    { note: 'これで式が決まりました。線分の本数＝n×（n－1）÷2です。n＝6なら、6×5÷2＝30÷2＝15本です。', add: S([bx(20, 30, 280, 40, '本数 ＝ n × (n－1) ÷ 2', C.green, FILL.green, 17), bx(20, 82, 280, 40, 'n＝6：6×5÷2 ＝ 30÷2 ＝ 15', C.blue, FILL.blue, 15)], '答え　n(n－1)/2 本、n＝6のとき15本', C.green, FILL.green) },
    { note: '確かめ（検算）です。n＝3なら3×2÷2＝3本（三角形の3辺）、n＝4なら4×3÷2＝6本（四角形の4辺と2本の対角線）、n＝5なら10本で、数えた結果と一致します。', add: S([bx(20, 24, 280, 34, 'n＝3：3×2÷2＝3本 ○', C.gray, FILL.gray, 13), bx(20, 64, 280, 34, 'n＝4：4×3÷2＝6本 ○', C.gray, FILL.gray, 13), bx(20, 104, 280, 34, 'n＝5：5×4÷2＝10本 ○', C.gray, FILL.gray, 13)], '小さい数で実際に数えた結果と一致', C.green, FILL.green) },
    { note: 'よくあるまちがいです。本数を点の数と同じnだと思うこと、または÷2を忘れてn×（n－1）の30本と答えること。30は2回ずつ数えた数です。', add: S([bx(20, 24, 280, 34, '✕ 6本（点の数と同じ）', C.red, FILL.red, 13), bx(20, 64, 280, 34, '✕ 30本（2回ずつ数えた）', C.red, FILL.red, 13), bx(20, 104, 280, 34, '○ 30 ÷ 2 ＝ 15本', C.green, FILL.green, 14)], '両はしで 2回数える → ÷2') },
  ], 'n個の点を結ぶ線分の本数：n(n－1)÷2');
})();

// ───────── 円に内接する四角形（対角の和は180°）─────────
const qAng = [90, 180, 260, 320];
const qP = qAng.map((d) => cat(d));
const arcOut = (from: number, to: number, color: string, r = cR + 6, n = 24): E[] => { const o: E[] = []; for (let i = 0; i < n; i++) { const a0 = from + ((to - from) * i) / n, a1 = from + ((to - from) * (i + 1)) / n; const p0: Pt = [cO[0] + r * Math.cos((a0 * Math.PI) / 180), cO[1] - r * Math.sin((a0 * Math.PI) / 180)]; const p1: Pt = [cO[0] + r * Math.cos((a1 * Math.PI) / 180), cO[1] - r * Math.sin((a1 * Math.PI) / 180)]; o.push(ln(p0[0], p0[1], p1[0], p1[1], color, false, 3.5)); } return o; };
const seinan_sansu_16: DiagramFigure = (() => {
  const [A, B, Cc, D] = qP;
  const circle = (): E[] => [ci(cO[0], cO[1], cR, undefined, C.gray, 'rgba(2,132,199,0.06)'), dot(cO[0], cO[1])];
  const quad = (col: string = C.ink, fill: string = 'none'): E => pg([A, B, Cc, D], col, fill);
  const names = (): E[] => [nm(A[0], A[1] - 8, 'A'), nm(B[0] - 10, B[1] + 4, 'B'), nm(Cc[0] - 2, Cc[1] + 14, 'C'), nm(D[0] + 10, D[1] + 4, 'D')];
  const tx = (l: string[], col: string = C.ink): E[] => l.map((t, i) => lb(200, 36 + i * 20, t, 11, col, 'start', true));
  return show([
    { note: '円に内接する四角形ABCDがあります。∠A＝70°のとき∠Cを、∠B＝95°のとき∠Dを求めます。', add: S([...circle(), quad(), ...names(), lb(A[0] + 2, A[1] + 22, '70°', 10, C.blue, 'middle', true), lb(B[0] + 22, B[1] - 10, '95°', 10, C.red, 'middle', true), ...tx(['∠A＝70° → ∠C＝？', '∠B＝95° → ∠D＝？'])], '∠A＝70° → ∠C は？\n∠B＝95° → ∠D は？') },
    { note: '❓内接とは、どういうこと？→四角形の4つの頂点が、すべて円周の上にあることです。4つの角は、それぞれ円周角になっています。', add: S([...circle(), quad(C.blue, BLUE_T), ...names(), ...tx(['4つの頂点が', '円周上にある', '→ 4つの角は', '円周角'])], '頂点がぜんぶ円周上') },
    { note: '❓∠Aと∠Cは、どの弧を見ている円周角なの？→∠Aは弧BCD（Aと反対側の弧）を見ています。∠Cは弧BAD（Cと反対側の弧）を見ています。この2つの弧は、あわせて円ちょうど1周です。', add: S([...circle(), quad(), ...names(), ...arcOut(180, 320, C.blue), ...arcOut(320, 540, C.red), ...tx(['∠A → 弧BCD（青）', '∠C → 弧BAD（赤）', 'あわせて 円1周'])], '∠Aは弧BCD、∠Cは弧BAD\n2つの弧で 円1周（360°）') },
    { note: '❓円周角は、何で決まるの？→円周角は、見ている弧の中心角の半分です。∠A＝（弧BCDの中心角）÷2、∠C＝（弧BADの中心角）÷2です。', add: S([bx(20, 30, 280, 36, '∠A ＝ （弧BCDの中心角）÷ 2', C.blue, FILL.blue, 14), bx(20, 76, 280, 36, '∠C ＝ （弧BADの中心角）÷ 2', C.red, FILL.red, 14)], '円周角 ＝ 中心角の半分') },
    { note: '❓では∠A＋∠Cは？→（弧BCDの中心角＋弧BADの中心角）÷2です。2つの弧で円1周なので、中心角の和は360°。360÷2＝180°です。', add: S([bx(20, 30, 280, 36, '∠A＋∠C ＝ (中心角の和) ÷ 2', C.purple, FILL.purple, 14), bx(20, 76, 280, 36, '＝ 360° ÷ 2 ＝ 180°', C.green, FILL.green, 16)], '対角の和は 180°', C.green, FILL.green) },
    { note: '∠Cを求めます。∠A＋∠C＝180°なので、∠C＝180°－70°＝110°です。', add: S([...circle(), quad(C.blue, BLUE_T), ...names(), lb(A[0] + 2, A[1] + 22, '70°', 10, C.blue, 'middle', true), lb(Cc[0] - 2, Cc[1] - 12, '110°', 10, C.red, 'middle', true), ...tx(['∠A＋∠C＝180°', '∠C＝180°－70°', '＝110°'])], '∠C ＝ 180° － 70° ＝ 110°', C.green, FILL.green) },
    { note: '∠Dを求めます。∠BとDも向かい合った角（対角）なので、∠B＋∠D＝180°。∠D＝180°－95°＝85°です。', add: S([...circle(), quad(C.blue, BLUE_T), ...names(), lb(B[0] + 22, B[1] - 10, '95°', 10, C.blue, 'middle', true), lb(D[0] - 18, D[1] + 4, '85°', 10, C.red, 'middle', true), ...tx(['∠B＋∠D＝180°', '∠D＝180°－95°', '＝85°'])], '∠D ＝ 180° － 95° ＝ 85°', C.green, FILL.green) },
    { note: '答えは、∠C＝110°、∠D＝85°です。', add: S([...circle(), quad(C.green, GREEN_T), ...names(), ...tx(['∠C＝110°', '∠D＝85°'], C.green)], '答え　∠C＝110°、∠D＝85°', C.green, FILL.green) },
    { note: '確かめ（検算）です。四角形の4つの角の和は360°です。70°＋95°＋110°＋85°＝360°になり、条件と一致します。', add: S([bx(20, 34, 280, 36, '70° ＋ 95° ＋ 110° ＋ 85°', C.gray, FILL.gray, 15), ar(160, 74, 160, 92, C.ink), bx(70, 96, 180, 36, '＝ 360° ○', C.green, FILL.green, 17)], '四角形の内角の和 360°', C.green, FILL.green) },
    { note: 'よくあるまちがいです。対角ではなく、となり合う角どうしの和を180°だと思うこと。内接四角形で180°になるのは向かい合う角（AとC、BとD）の和です。となりどうし（AとB）の和は180°とは限りません。', add: S([bx(20, 24, 280, 40, '✕ ∠A＋∠B ＝ 180°（となりどうし）', C.red, FILL.red, 13), ar(160, 68, 160, 86, C.ink), bx(20, 90, 280, 40, '○ ∠A＋∠C ＝ 180°（向かい合う角）', C.green, FILL.green, 13)], '向かい合う角の和が 180°') },
  ], '円に内接する四角形：向かい合う角の和は180°');
})();

// ───────── 中線と重心（BG：GN）─────────
const gA: Pt = [160, 14], gB: Pt = [50, 130], gC: Pt = [270, 130], gM: Pt = [105, 72], gN: Pt = [215, 72], gG: Pt = [160, 91.3];
const gBase = (): E[] => [pg([gA, gB, gC], C.ink, 'none'), ln(gB[0], gB[1], gN[0], gN[1], C.ink, false, 1.6), ln(gC[0], gC[1], gM[0], gM[1], C.ink, false, 1.6), nm(160, 8, 'A'), nm(38, 140, 'B'), nm(282, 140, 'C'), nm(94, 70, 'M'), nm(226, 70, 'N'), nm(172, 104, 'G')];
const kurume_sansu_09: DiagramFigure = show([
  { note: '△ABCの辺AB、ACの中点をそれぞれM、Nとします。線分BNと線分CMの交点をGとするとき、BG：GNを求め、理由も説明します。', add: S([...gBase(), ln(gM[0], gM[1], gN[0], gN[1], C.gray, true, 1.4)], 'M、Nは 中点\nBG : GN ＝ ？') },
  { note: '❓MとNを結ぶと、なぜMN∥BCと言えるの？→AM：AB＝AN：AC＝1：2で、∠Aも共通なので、△AMN∽△ABC（相似比1：2）です。相似なので対応する角が等しく（同位角）、MN∥BCになり、MN＝BCの半分です。（中点連結定理）', add: S([...gBase(), pg([gA, gM, gN], C.blue, BLUE_T), ln(gM[0], gM[1], gN[0], gN[1], C.blue, false, 2.5)], 'MN∥BC　MN＝BC÷2\n（中点連結定理）', C.blue, FILL.blue) },
  { note: '❓では、△GMNと△GCBはなぜ相似なの？→MN∥BCなので、直線CMをまたぐ錯角で∠GMN＝∠GCB、直線BNをまたぐ錯角で∠GNM＝∠GBC。2組の角がそれぞれ等しいので、△GMN∽△GCBです。（対頂角∠MGN＝∠CGBも等しい）', add: S([...gBase(), pg([gG, gM, gN], C.blue, BLUE_T), pg([gG, gC, gB], C.red, RED_T), ln(gM[0], gM[1], gN[0], gN[1], C.blue, false, 2.5), lb(118, 88, '●', 10, C.purple, 'middle', true), lb(254, 120, '●', 10, C.purple, 'middle', true), lb(206, 88, '▲', 10, C.green, 'middle', true), lb(72, 120, '▲', 10, C.green, 'middle', true)], '錯角が2組 等しい\n→ △GMN ∽ △GCB', C.ink, FILL.warm) },
  { note: '❓相似比はいくつ？→対応する辺は、MNとCBです。MN：CB＝1：2（MNはBCの半分）。だから、△GMNと△GCBの相似比は1：2です。', add: S([bx(20, 34, 130, 40, 'MN : CB', C.blue, FILL.blue, 15), lb(160, 54, '＝', 18, C.ink, 'middle', true), bx(170, 34, 130, 40, '1 : 2', C.green, FILL.green, 17), lb(160, 104, '△GMN ： △GCB', 13, C.ink, 'middle', true)], '相似比 ＝ 1 : 2', C.green, FILL.green) },
  { note: '❓GNに対応する辺はどれ？→△GMNの頂点M・N・Gは、△GCBのC・B・Gに対応しています（M↔C、N↔B）。だからGN（NとG）に対応するのはGB（BとG）です。GN：GB＝1：2。', add: S([bx(20, 34, 130, 40, '△ G M N', C.blue, FILL.blue, 16), bx(170, 34, 130, 40, '△ G C B', C.red, FILL.red, 16), lb(160, 98, 'G↔G　M↔C　N↔B', 13, C.ink, 'middle', true), lb(160, 118, 'GN ↔ GB', 14, C.green, 'middle', true)], 'GN : GB ＝ 1 : 2', C.green, FILL.green) },
  { note: '❓BG：GNにするには？→GN：GB＝1：2を、順番を入れかえてGB：GN＝2：1と読みます。BGとGBは同じ線分なので、BG：GN＝2：1です。', add: S([bx(40, 34, 240, 34, 'GN : GB ＝ 1 : 2', C.gray, FILL.gray, 15), ar(160, 72, 160, 90, C.ink), bx(40, 94, 240, 34, 'BG : GN ＝ 2 : 1', C.green, FILL.green, 16)], '前後を入れかえる', C.green, FILL.green) },
  { note: '答えは、BG：GN＝2：1です。理由は、中点連結定理でMN∥BC・MN＝BC÷2が言え、△GMN∽△GCB（相似比1：2）になるためです。', add: S([...gBase(), pg([gG, gB, gC], C.red, RED_T), lb(104, 112, '2', 13, C.red, 'middle', true), lb(186, 88, '1', 13, C.blue, 'middle', true)], '答え　BG : GN ＝ 2 : 1', C.green, FILL.green) },
  { note: '確かめ（検算）です。対称にCG：GMも同じ理由で2：1になるはずです。実際に図を測ると、Gは頂点Bから中点Nまでの線の3分の2の位置にあり、2：1と合います。', add: S([...gBase(), lb(238, 106, 'CG : GM', 11, C.ink, 'middle', true), lb(238, 120, '＝ 2 : 1', 11, C.ink, 'middle', true)], 'BG:GN ＝ 2:1　CG:GM ＝ 2:1', C.green, FILL.green) },
  { note: '❓3本目の中線AL（Lは辺BCの中点）も、同じ点Gを通るの？→はい。3本の中線は1点で交わり、その点（重心）は各中線を頂点から2：1に分けます。この問題は、そのことを証明したことになります。', add: S([...gBase(), ln(gA[0], gA[1], 160, 130, C.purple, false, 2), nm(160, 142, 'L', C.purple)], '3本の中線が 1点Gで交わる\n（重心）', C.purple, FILL.purple) },
  { note: 'よくあるまちがいです。相似の対応をまちがえて、比が逆（BG：GN＝1：2）になること。GNは小さい三角形の辺、GBは大きい三角形の辺で、GBのほうが長いので、BG：GNは2：1です。', add: S([bx(20, 24, 280, 40, '✕ BG : GN ＝ 1 : 2（逆）', C.red, FILL.red, 14), ar(160, 68, 160, 86, C.ink), bx(20, 90, 280, 40, '○ GBのほうが長い → BG : GN ＝ 2 : 1', C.green, FILL.green, 13)], '対応する辺を 確かめる') },
], '中点連結定理と相似で、BG：GNを求める');

// ───────── 円の接線2本と∠APB＝60° ─────────
const kO: Pt = [159, 75], kP: Pt = [270, 75], kA: Pt = [187, 27], kB: Pt = [187, 123];
const kBase = (): E[] => [ci(kO[0], kO[1], 55, undefined, C.gray, 'rgba(2,132,199,0.07)'), dot(kO[0], kO[1]), nm(148, 84, 'O'), dot(kA[0], kA[1]), nm(192, 18, 'A'), dot(kB[0], kB[1]), nm(192, 140, 'B'), dot(kP[0], kP[1]), nm(282, 79, 'P'), ln(kP[0], kP[1], kA[0], kA[1], C.red, false, 2.5), ln(kP[0], kP[1], kB[0], kB[1], C.red, false, 2.5)];
const kurume_sansu_14: DiagramFigure = show([
  { note: '円Oの外の点Pから接線PA、PBを引きます（A、Bは接点）。PA＝12cm、∠APB＝60°のとき、円Oの半径を求めます。', add: S([...kBase(), ln(kO[0], kO[1], kA[0], kA[1], C.blue, false, 2.5), lb(240, 38, '12cm', 11, C.red, 'start', true), lb(262, 62, '60°', 10, C.ink, 'end', true)], 'PA＝12cm　∠APB＝60°\n半径OA＝？') },
  { note: '❓接線PAとPBが同じ長さで、OPが∠APBを半分にする理由は？→OA＝OB（半径）、OPは共通、∠OAP＝∠OBP＝90°（接線⊥半径）なので、直角三角形OAPと直角三角形OBPは合同です（斜辺と他の1辺が等しい）。だから∠OPA＝∠OPB＝60°÷2＝30°です。', add: S([...kBase(), ln(kO[0], kO[1], kA[0], kA[1], C.blue, false, 2.5), ln(kO[0], kO[1], kB[0], kB[1], C.blue, false, 2.5), ln(kO[0], kO[1], kP[0], kP[1], C.green, true, 1.8), ...rt(kA, kO, kP, 8, C.ink), ...rt(kB, kO, kP, 8, C.ink), lb(238, 76, '30°', 10, C.green, 'end', true)], '△OAP ≡ △OBP\n→ ∠OPA ＝ 30°', C.green, FILL.green) },
  { note: '❓△OAPの角は、何度ずつ？→∠OAP＝90°（接線と半径は垂直）、∠OPA＝30°。三角形の内角の和は180°なので、∠AOP＝180°－90°－30°＝60°です。つまり△OAPは、30°・60°・90°の直角三角形です。', add: S([pg([kO, kA, kP], C.ink, 'rgba(22,163,74,0.12)'), ...rt(kA, kO, kP, 8, C.ink), lb(238, 76, '30°', 10, C.green, 'end', true), lb(176, 70, '60°', 10, C.blue, 'end', true), lb(198, 44, '90°', 10, C.ink, 'start', true), nm(148, 84, 'O'), nm(192, 18, 'A'), nm(282, 79, 'P')], '30°・60°・90° の直角三角形') },
  { note: '❓30°・60°・90°の直角三角形では、3辺の比はどうなるの？→1辺2の正三角形を半分に切ると、底辺1、斜辺2、高さ√3（三平方より2²－1²＝3）の直角三角形になります。3辺の比は1：2：√3です。', add: S([pg([[60, 120], [160, 120], [110, 34]], C.gray, FILL.gray), ln(110, 34, 110, 120, C.green, true, 2), pg([[110, 120], [160, 120], [110, 34]], C.green, GREEN_T), lb(85, 130, '1', 11, C.ink, 'middle', true), lb(135, 136, '1', 11, C.green, 'middle', true), lb(150, 76, '2', 12, C.green, 'start', true), lb(100, 82, '√3', 11, C.green, 'end', true), lb(230, 54, '正三角形を', 11, C.ink, 'middle', true), lb(230, 70, '半分に切る', 11, C.ink, 'middle', true), lb(230, 96, '1 : 2 : √3', 14, C.green, 'middle', true)], '30°・60°・90° → 辺の比 1 : 2 : √3', C.green, FILL.green) },
  { note: '❓PAとOAは、この比のどの辺？→30°の角の向かい側の辺OAが「1」、直角の向かい側の斜辺OPが「2」、残りの辺PAが「√3」です。PA＝12cmが√3にあたります。', add: S([pg([kO, kA, kP], C.ink, 'rgba(22,163,74,0.12)'), ...rt(kA, kO, kP, 8, C.ink), lb(158, 50, 'OA：1', 11, C.blue, 'end', true), lb(230, 24, 'PA：√3', 11, C.red, 'middle', true), lb(224, 96, 'OP：2', 11, C.green, 'middle', true), nm(148, 84, 'O'), nm(192, 18, 'A'), nm(282, 79, 'P')], 'PA ＝ 12 が √3 にあたる') },
  { note: '半径OAは「1」にあたるので、OA＝12÷√3です。分母に√があると扱いにくいので、分母と分子に√3をかけます。12÷√3＝12×√3÷（√3×√3）＝12√3÷3＝4√3です（√3×√3＝3）。', add: S([bx(20, 30, 280, 34, 'OA ＝ 12 ÷ √3', C.blue, FILL.blue, 15), bx(20, 70, 280, 34, '＝ 12×√3 ÷ (√3×√3) ＝ 12√3 ÷ 3', C.blue, FILL.blue, 13), bx(20, 110, 280, 30, '＝ 4√3', C.green, FILL.green, 16)], '分母の√を なくす（√3×√3＝3）', C.green, FILL.green) },
  { note: '答えは、円の半径が4√3cmです。', add: S([...kBase(), ln(kO[0], kO[1], kA[0], kA[1], C.blue, false, 2.5), lb(160, 52, '4√3cm', 11, C.blue, 'end', true)], '答え　半径 4√3 cm', C.green, FILL.green) },
  { note: '確かめ（検算）です。半径OA＝4√3のとき、OP＝2×4√3＝8√3。三平方で、OA²＋PA²＝48＋144＝192。OP²＝（8√3）²＝64×3＝192で一致します。', add: S([bx(20, 30, 280, 34, 'OA² ＋ PA² ＝ 48 ＋ 144 ＝ 192', C.blue, FILL.blue, 14), bx(20, 72, 280, 34, 'OP² ＝ (8√3)² ＝ 64×3 ＝ 192 ○', C.green, FILL.green, 14)], '三平方の定理で 一致', C.green, FILL.green) },
  { note: '大きさの見当もつけます。4√3は約6.9cm。直角三角形の斜辺OPは約13.9cmで、PA＝12cmより長く、OAは12cmより短い。辺の長さの順序が、30°・60°・90°の直角三角形として自然です。', add: S([bx(20, 30, 280, 34, 'OA ≒ 6.9　PA ＝ 12　OP ≒ 13.9', C.gray, FILL.gray, 14), lb(160, 92, '小さい角の向かい側が いちばん短い辺', 12, C.ink, 'middle', true)], '30° → OA（最短）、90° → OP（最長）') },
  { note: 'よくあるまちがいです。∠APB＝60°そのものを直角三角形の角として使うこと。直角三角形OAPの角Pは、60°を半分にした30°です。60°のまま使うと辺の比がずれてしまいます。', add: S([bx(20, 24, 280, 40, '✕ 直角三角形の角を 60° として計算する', C.red, FILL.red, 13), ar(160, 68, 160, 86, C.ink), bx(20, 90, 280, 40, '○ 半分にした 30°（OPが∠APBを2等分）', C.green, FILL.green, 13)], '使うのは 二等分した 30°') },
], '接線と半径から30°・60°・90°の直角三角形をつくる');

// ───────── 奇数の和 ─────────
const oddGrid = (n: number, x0: number, y0: number, u: number, upto: number): E[] => {
  const cols = [[C.blue, FILL.blue], [C.red, FILL.red], [C.green, FILL.green], [C.purple, FILL.purple], [C.main, FILL.warm], [C.gray, FILL.gray]];
  const out: E[] = [];
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) { const k = Math.max(i, j); if (k < upto) out.push(bx(x0 + j * u, y0 + i * u, u, u, undefined, cols[k % 6][0], cols[k % 6][1], 8)); }
  return out;
};
const kurume_sansu_16: DiagramFigure = show([
  { note: '1辺1cmの正方形を、1段目に1個、2段目に3個、5個、…と、奇数個ずつ並べます。n段目までの正方形の総数をnの式で表し、n＝10のときの個数を求めます。', add: S([...[1, 3, 5, 7].flatMap((k, i) => Array.from({ length: k }, (_, j) => bx(160 - (k * 14) / 2 + j * 14, 24 + i * 16, 14, 14, undefined, C.blue, FILL.blue, 8))), lb(250, 40, '1段目 1個', 10, C.ink, 'start', true), lb(250, 56, '2段目 3個', 10, C.ink, 'start', true), lb(250, 72, '3段目 5個', 10, C.ink, 'start', true), lb(250, 88, '4段目 7個', 10, C.ink, 'start', true)], '1段目1個、2段目3個、3段目5個…\nn段目までの 総数は？') },
  { note: '❓k段目には何個あるの？→1個、3個、5個、7個…と、2個ずつ増えています。k段目は「2×k－1」個です（1段目は2×1－1＝1、2段目は2×2－1＝3）。n段目は2n－1個です。', add: S([bx(20, 30, 130, 40, '1段目 2×1－1＝1', C.blue, FILL.blue, 11), bx(170, 30, 130, 40, '2段目 2×2－1＝3', C.blue, FILL.blue, 11), bx(20, 80, 130, 40, '3段目 2×3－1＝5', C.blue, FILL.blue, 11), bx(170, 80, 130, 40, 'k段目 2×k－1', C.green, FILL.green, 12)], 'k段目は (2×k－1)個') },
  { note: '❓n段目までの総数は、どんな和？→1＋3＋5＋…＋（2n－1）です。n＝1なら1、n＝2なら1＋3＝4、n＝3なら1＋3＋5＝9、n＝4なら16。どれもある数の2乗（1、4、9、16）になっています。', add: S([bx(20, 30, 130, 34, 'n＝1：1 ＝ 1×1', C.blue, FILL.blue, 13), bx(170, 30, 130, 34, 'n＝2：1＋3 ＝ 4 ＝ 2×2', C.blue, FILL.blue, 11), bx(20, 74, 130, 34, 'n＝3：1＋3＋5 ＝ 9', C.blue, FILL.blue, 12), bx(170, 74, 130, 34, 'n＝4：…＋7 ＝ 16', C.blue, FILL.blue, 12)], '1、4、9、16 → 2乗の数') },
  { note: '❓なぜ2乗になるの？→L字型に足していくと分かります。1個の正方形に、L字型の3個を足すと2×2の正方形、さらにL字型の5個を足すと3×3、7個を足すと4×4になります。', add: S([...oddGrid(4, 100, 24, 26, 4), lb(113, 18, '1', 10, C.blue, 'middle', true), lb(148, 18, '＋3', 10, C.red, 'middle', true), lb(174, 18, '＋5', 10, C.green, 'middle', true), lb(200, 18, '＋7', 10, C.purple, 'middle', true)], '1＋3＋5＋7 ＝ 4×4\nL字を足すと 大きな正方形') },
  { note: '❓n段まで足すと、どんな正方形になる？→どの段を足しても、いつも「正方形」です。n段目までだと、1辺がnの正方形になります。だから総数は n×n＝n²個です。', add: S([...oddGrid(5, 90, 14, 24, 5), lb(260, 70, '1辺 n の', 11, C.ink, 'middle', true), lb(260, 86, '正方形', 11, C.ink, 'middle', true), lb(260, 106, 'n×n', 13, C.green, 'middle', true)], '総数 ＝ n × n ＝ n²', C.green, FILL.green) },
  { note: 'n＝10を入れます。10×10＝100個です。', add: S([bx(20, 34, 130, 40, 'n ＝ 10', C.gray, FILL.gray, 16), ar(155, 54, 175, 54, C.ink), bx(180, 34, 120, 40, '10×10＝100', C.green, FILL.green, 15)], '答え　n²個、n＝10のとき100個', C.green, FILL.green) },
  { note: '答えは、総数がn²個、n＝10のとき100個です。', add: S([bx(30, 40, 260, 60, 'n²個　n＝10 → 100個', C.green, FILL.green, 20)], '答え　n² 個　n＝10のとき 100個', C.green, FILL.green) },
  { note: '確かめ（検算）です。1＋3＋5＋…＋19を、両はしからペアにします。1＋19、3＋17、5＋15、7＋13、9＋11で、どれも20。5組なので20×5＝100で一致します。', add: S([bx(20, 24, 280, 30, '1＋19　3＋17　5＋15', C.gray, FILL.gray, 13), bx(20, 60, 280, 30, '7＋13　9＋11　→ どれも 20', C.gray, FILL.gray, 13), bx(20, 96, 280, 34, '20 × 5組 ＝ 100 ○', C.green, FILL.green, 15)], 'ペアでも 100', C.green, FILL.green) },
  { note: '❓10段目だけの個数は？→2×10－1＝19個です。これは「10段目の個数」で、問題が聞いている「10段目までの合計」ではありません。聞かれているのがどちらかをよく読みます。', add: S([bx(20, 34, 130, 40, '10段目だけ\n19個', C.red, FILL.red, 13), bx(170, 34, 130, 40, '10段目まで\n100個', C.green, FILL.green, 13), lb(160, 104, 'どちらを聞かれている？', 13, C.ink, 'middle', true)], '「その段」と「その段まで」') },
  { note: 'よくあるまちがいです。10段目の個数19を答えてしまうこと。聞かれているのは合計なので、19ではなく、100個です。', add: S([bx(20, 24, 280, 40, '✕ 19個（10段目だけの個数）', C.red, FILL.red, 14), ar(160, 68, 160, 86, C.ink), bx(20, 90, 280, 40, '○ 100個（10段目までの合計）', C.green, FILL.green, 14)], '合計を聞かれている') },
], '奇数の和＝n²（L字型で正方形になる）');

// ───────── 縦と横の差が3の長方形（二次方程式）─────────
const kurume_sansu_02: DiagramFigure = show([
  { note: '横の長さが縦の長さより3cm長い長方形があります。面積は108cm²です。縦の長さを求めます。', add: S([bx(70, 34, 130, 90, '面積 108cm²', C.blue, FILL.blue, 13), lb(135, 28, '横 x＋3', 11, C.ink, 'middle', true), lb(64, 82, '縦 x', 11, C.ink, 'end', true)], '縦 x cm　横 (x＋3) cm\n面積 108cm²') },
  { note: '❓式は、どうやって立てるの？→長方形の面積は「縦×横」です。縦をxcmとすると横はx＋3cmなので、x(x＋3)＝108です。', add: S([bx(20, 30, 130, 40, '縦 x', C.blue, FILL.blue, 15), lb(160, 50, '×', 18, C.ink, 'middle', true), bx(170, 30, 130, 40, '横 x＋3', C.blue, FILL.blue, 15), ar(160, 76, 160, 94, C.ink), bx(70, 98, 180, 38, 'x(x＋3) ＝ 108', C.green, FILL.green, 16)], '面積 ＝ 縦 × 横') },
  { note: '❓かっこをはずすと？→x(x＋3)は、1辺xの正方形（x²）と、縦x・横3の長方形（3x）を合わせた面積です。だからx²＋3x＝108になります。', add: S([bx(50, 34, 90, 90, 'x²', C.blue, FILL.blue, 18), bx(140, 34, 40, 90, '3x', C.green, FILL.green, 13), lb(95, 28, 'x', 11, C.ink, 'middle', true), lb(160, 28, '3', 11, C.ink, 'middle', true), lb(250, 70, 'x²＋3x', 14, C.ink, 'middle', true)], 'x(x＋3) ＝ x² ＋ 3x') },
  { note: '❓なぜ右辺を0にするの？→「2つの数をかけて0になるなら、どちらかが0」という性質を使って、xを見つけるためです。108を左に移して、x²＋3x－108＝0とします。', add: S([bx(20, 30, 280, 36, 'x² ＋ 3x ＝ 108', C.gray, FILL.gray, 15), ar(160, 70, 160, 88, C.ink), bx(20, 92, 280, 36, 'x² ＋ 3x － 108 ＝ 0', C.green, FILL.green, 15)], '右辺を0にすると 因数分解で解ける') },
  { note: '❓因数分解は、どう見つけるの？→「かけて－108、足して3」になる2つの数を探します。108の約数の組（9と12など）で、差が3になるのは9と12です。大きいほうを＋、小さいほうを－にして、＋12と－9です。', add: S([bx(20, 18, 130, 24, '1×108　2×54', C.gray, FILL.gray, 11), bx(170, 18, 130, 24, '3×36　4×27', C.gray, FILL.gray, 11), bx(20, 48, 130, 24, '6×18', C.gray, FILL.gray, 11), bx(170, 48, 130, 24, '9×12 ← 差が3', C.green, FILL.green, 11), lb(160, 98, '(x＋12)(x－9) ＝ 0', 15, C.green, 'middle', true), lb(160, 122, '展開：x²＋3x－108 ○', 11, C.ink, 'middle', true)], '積が108、差が3 → 9 と 12') },
  { note: '❓なぜ(x＋12)(x－9)＝0から、xが分かるの？→2つをかけて0になるのは、どちらかが0のときです。x＋12＝0ならx＝－12、x－9＝0ならx＝9です。', add: S([bx(20, 34, 130, 40, 'x＋12 ＝ 0\nx ＝ －12', C.gray, FILL.gray, 13), lb(160, 88, 'または', 12, C.ink, 'middle', true), bx(170, 34, 130, 40, 'x－9 ＝ 0\nx ＝ 9', C.blue, FILL.blue, 13), lb(160, 116, 'かけて0 → どちらかが0', 13, C.ink, 'middle', true)], 'x ＝ －12 または 9') },
  { note: '❓2つの解のうち、どちらが答え？→xは縦の長さなので、正の数でなければなりません。x＝－12は長さにならないので、あてはまりません。x＝9が答えです。', add: S([bx(20, 34, 130, 40, 'x＝－12\n長さは負にならない ✕', C.red, FILL.red, 11), bx(170, 34, 130, 40, 'x＝9\n正の数 ○', C.green, FILL.green, 12), lb(160, 104, '問題の条件に合うか確かめる', 12, C.ink, 'middle', true)], '縦 ＝ 9cm', C.green, FILL.green) },
  { note: '答えは縦9cmです。横は9＋3＝12cmです。', add: S([bx(70, 34, 120, 90, '面積 108cm²', C.green, FILL.green, 12), lb(130, 28, '横 12cm', 11, C.ink, 'middle', true), lb(64, 82, '縦 9cm', 11, C.ink, 'end', true)], '答え　縦 9cm（横 12cm）', C.green, FILL.green) },
  { note: '確かめ（検算）です。縦9cm、横9＋3＝12cmの面積は9×12＝108cm²で、問題の面積と一致します。横が縦より3cm長い条件も満たしています。', add: S([bx(20, 34, 130, 40, '9 × 12', C.gray, FILL.gray, 16), ar(155, 54, 175, 54, C.ink), bx(180, 34, 120, 40, '108cm² ○', C.green, FILL.green, 16), lb(160, 104, '12－9 ＝ 3 ○', 13, C.ink, 'middle', true)], '面積も 差も 一致', C.green, FILL.green) },
  { note: 'よくあるまちがいです。x＝－12も解として答えに含めてしまうこと。二次方程式の解は2つ出ますが、長さは正の数なので、問題の条件に合わないものは答えから外します（解の吟味）。', add: S([bx(20, 24, 280, 40, '✕ 縦 ＝ 9 と －12', C.red, FILL.red, 14), ar(160, 68, 160, 86, C.ink), bx(20, 90, 280, 40, '○ 縦 ＝ 9（負の長さはない）', C.green, FILL.green, 14)], '解が問題に合うか 必ず確かめる') },
], '二次方程式を立てて、長さを求める');

// ───────── 品物の個数（つるかめ算）─────────
const itemRow = (nB: number, y: number, tag: boolean): E[] => Array.from({ length: 10 }, (_, i) => { const isB = i >= 10 - nB; return bx(20 + i * 28, y, 26, 34, tag ? (isB ? 'B' : 'A') : 'A', isB ? C.red : C.blue, isB ? FILL.red : FILL.blue, 12); });
const taki_sansu_08: DiagramFigure = show([
  { note: '品物AとBを合わせて10個買うと、代金の合計は3400円でした。Aは1個300円、Bは1個400円です。AとBをそれぞれ何個買ったか求めます。', add: S([...itemRow(0, 40, false), lb(160, 100, 'A 300円　B 400円', 13, C.ink, 'middle', true), lb(160, 122, '合わせて10個で 3400円', 13, C.ink, 'middle', true)], 'A（300円）とB（400円）\n合わせて10個で 3400円') },
  { note: '❓まず、10個ぜんぶがAだったら、代金はいくら？→300×10＝3000円です。実際の3400円より少なくなります。', add: S([...itemRow(0, 30, false), lb(160, 86, '全部A：300×10 ＝ 3000円', 14, C.blue, 'middle', true), lb(160, 112, '実際は 3400円', 13, C.red, 'middle', true)], '全部Aなら 3000円\n実際は3400円') },
  { note: '❓実際は、何円ぶん多いの？→3400－3000＝400円です。この400円ぶんを、どこかの品物をBに変えることで説明します。', add: S([bx(20, 34, 130, 40, '実際 3400円', C.red, FILL.red, 14), lb(160, 54, '－', 18, C.ink, 'middle', true), bx(170, 34, 130, 40, '全部A 3000円', C.blue, FILL.blue, 13), ar(160, 80, 160, 98, C.ink), bx(90, 102, 140, 34, '400円 多い', C.green, FILL.green, 15)], '400円ぶんを Bで説明する') },
  { note: '❓AをBに1個かえると、代金はいくら増えるの？→Bは400円、Aは300円なので、400－300＝100円増えます。どの1個をかえても、いつも100円ずつです。', add: S([bx(50, 40, 40, 40, 'A\n300', C.blue, FILL.blue, 12), ar(96, 60, 134, 60, C.ink), bx(140, 40, 40, 40, 'B\n400', C.red, FILL.red, 12), lb(230, 54, '1個かえると', 12, C.ink, 'middle', true), lb(230, 74, '＋100円', 16, C.green, 'middle', true)], '1個かえる ＝ ＋100円', C.green, FILL.green) },
  { note: '❓では、何個かえれば400円増えるの？→1個で100円なので、400円なら400÷100＝4個です。4個をBにかえれば、ちょうど3400円になります。', add: S([...itemRow(4, 34, true), lb(160, 92, '4個かえる：＋100円 × 4 ＝ ＋400円', 13, C.green, 'middle', true), lb(160, 114, '3000 ＋ 400 ＝ 3400円', 13, C.ink, 'middle', true)], '400 ÷ 100 ＝ 4個を Bにかえる', C.green, FILL.green) },
  { note: 'よって、Bは4個、Aは10－4＝6個です。', add: S([...itemRow(4, 40, true), lb(104, 96, 'A 6個', 15, C.blue, 'middle', true), lb(244, 96, 'B 4個', 15, C.red, 'middle', true)], 'A 6個、B 4個', C.green, FILL.green) },
  { note: '答えは、Aが6個、Bが4個です。', add: S([bx(30, 40, 260, 60, 'A＝6個　B＝4個', C.green, FILL.green, 22)], '答え　A＝6個、B＝4個', C.green, FILL.green) },
  { note: '確かめ（検算）です。個数は6＋4＝10個。代金は300×6＋400×4＝1800＋1600＝3400円で、問題の条件と一致します。', add: S([bx(20, 30, 280, 34, '個数　6 ＋ 4 ＝ 10 ○', C.gray, FILL.gray, 15), bx(20, 74, 280, 34, '代金　1800 ＋ 1600 ＝ 3400円 ○', C.green, FILL.green, 15)], '2つの条件を どちらも満たす', C.green, FILL.green) },
  { note: '別の方法でも解けます。Aをx個、Bをy個として、x＋y＝10、3x＋4y＝34（代金は100でわって簡単にする）。1つ目を3倍して3x＋3y＝30、2つ目から引くとy＝4、x＝6です。', add: S([bx(20, 24, 280, 30, 'x＋y＝10　→ 3倍 → 3x＋3y＝30', C.gray, FILL.gray, 12), bx(20, 60, 280, 30, '3x＋4y＝34', C.gray, FILL.gray, 13), bx(20, 96, 280, 34, '引くと y＝4 → x＝6', C.green, FILL.green, 14)], '連立方程式でも 同じ答え', C.green, FILL.green) },
  { note: 'よくあるまちがいです。増えた400円をそのまま「Bの個数」としてしまうこと。1個かえるごとに増えるのは400円ではなく100円（BとAの差）なので、個数は400÷100＝4個です。', add: S([bx(20, 24, 280, 40, '✕ B ＝ 400個（差額をそのまま個数に）', C.red, FILL.red, 13), ar(160, 68, 160, 86, C.ink), bx(20, 90, 280, 40, '○ 400 ÷ 100（1個あたりの差）＝ 4個', C.green, FILL.green, 13)], '個数 ＝ 差の合計 ÷ 1個の差') },
], 'つるかめ算：全部Aと考えて、差を1個の差でわる');

// ───────── 美術館の入館料（連立方程式）─────────
const pplRow = (a: number, c: number, y: number, label: string, col: string): E[] => [...Array.from({ length: a }, (_, i) => ci(34 + i * 26, y + 14, 11, '大', C.blue, FILL.blue, 11)), ...Array.from({ length: c }, (_, i) => ci(34 + (a + i) * 26, y + 14, 11, '子', C.red, FILL.red, 11)), lb(236, y + 18, label, 12, col, 'start', true)];
const ohori_sansu_04: DiagramFigure = show([
  { note: '美術館の入館料は、大人1人と子ども2人で2000円、大人2人と子ども3人で3400円です。大人1人、子ども1人の入館料をそれぞれ求めます。', add: S([...pplRow(1, 2, 24, '＝ 2000円', C.ink), ...pplRow(2, 3, 74, '＝ 3400円', C.ink), lb(160, 122, '大人1人・子ども1人の料金は？', 12, C.ink, 'middle', true)], '大1＋子2 ＝ 2000円\n大2＋子3 ＝ 3400円') },
  { note: '❓式にするには？→大人1人の料金をx円、子ども1人の料金をy円とします。1つ目はx＋2y＝2000、2つ目は2x＋3y＝3400です。', add: S([bx(20, 34, 280, 36, 'x ＋ 2y ＝ 2000　…①', C.blue, FILL.blue, 15), bx(20, 80, 280, 36, '2x ＋ 3y ＝ 3400　…②', C.red, FILL.red, 15)], 'x：大人1人　y：子ども1人') },
  { note: '❓どうやって、xかyのどちらかを消すの？→大人の人数をそろえます。①を2倍すると、大人2人・子ども4人で4000円になります。「同じ組を2組買うと、料金も2倍」だから、式の両辺を2倍してよいのです。', add: S([...pplRow(2, 4, 24, '＝ 4000円', C.blue), ...pplRow(2, 3, 74, '＝ 3400円', C.red), lb(160, 122, '大人が同じ2人になった', 12, C.ink, 'middle', true)], '①×2：2x＋4y＝4000\n②　：2x＋3y＝3400', C.ink, FILL.warm) },
  { note: '❓この2つを見くらべると、何が分かる？→どちらも大人2人です。ちがいは子どもが1人多いことだけ。料金の差の4000－3400＝600円が、子ども1人ぶんです。', add: S([...pplRow(2, 4, 24, '＝ 4000円', C.blue), ...pplRow(2, 3, 74, '＝ 3400円', C.red), ar(34 + 5 * 26, 50, 34 + 5 * 26, 68, C.green), lb(186, 62, '差＝子ども1人', 11, C.green, 'start', true)], '4000 － 3400 ＝ 600円 → 子ども1人', C.green, FILL.green) },
  { note: '式でも同じです。2x＋4y＝4000から2x＋3y＝3400を、同じ向きで引きます。2x－2x＝0、4y－3y＝y、4000－3400＝600で、y＝600です。', add: S([bx(20, 24, 280, 30, '2x ＋ 4y ＝ 4000', C.blue, FILL.blue, 14), bx(20, 58, 280, 30, '2x ＋ 3y ＝ 3400　（引く）', C.red, FILL.red, 13), bx(20, 96, 280, 36, '　　　　 y ＝ 600', C.green, FILL.green, 16)], '子ども1人 ＝ 600円', C.green, FILL.green) },
  { note: '❓大人の料金は？→y＝600を①に入れます。x＋2×600＝2000、x＋1200＝2000、x＝800です。', add: S([bx(20, 34, 280, 34, 'x ＋ 2×600 ＝ 2000', C.gray, FILL.gray, 15), ar(160, 72, 160, 90, C.ink), bx(20, 94, 280, 34, 'x ＝ 2000 － 1200 ＝ 800', C.green, FILL.green, 15)], '大人1人 ＝ 800円', C.green, FILL.green) },
  { note: '答えは、大人800円、子ども600円です。', add: S([bx(30, 30, 260, 34, '大人　800円', C.blue, FILL.blue, 18), bx(30, 76, 260, 34, '子ども　600円', C.red, FILL.red, 18)], '答え　大人800円、子ども600円', C.green, FILL.green) },
  { note: '確かめ（検算）です。①大人1人＋子ども2人＝800＋1200＝2000円。②大人2人＋子ども3人＝1600＋1800＝3400円。どちらも問題と一致します（2つの式の両方で確かめます）。', add: S([bx(20, 30, 280, 34, '①　800 ＋ 600×2 ＝ 2000 ○', C.blue, FILL.blue, 14), bx(20, 74, 280, 34, '②　800×2 ＋ 600×3 ＝ 3400 ○', C.red, FILL.red, 14)], '2つの条件を どちらも満たす', C.green, FILL.green) },
  { note: '❓引き算は、なぜ向きをそろえるの？→同じ側どうしで引かないと、xやyの係数が合わず、消えるはずの文字が消えません。左辺どうし、右辺どうしを同じ向きで引きます。', add: S([bx(20, 24, 280, 34, '✕ 4000－3400 と 3y－4y（向きがちがう）', C.red, FILL.red, 12), ar(160, 62, 160, 80, C.ink), bx(20, 84, 280, 34, '○ 4y－3y と 4000－3400（同じ向き）', C.green, FILL.green, 12)], '左辺どうし・右辺どうしで 同じ向きに') },
  { note: 'よくあるまちがいです。引くときに、4000－3400は計算しても、4y－3yの向きをそろえず、符号がずれること。ひとつずつ、上の式から下の式を引く形に書くと防げます。', add: S([bx(20, 24, 280, 40, '✕ 符号がずれて y ＝ －600', C.red, FILL.red, 13), ar(160, 68, 160, 86, C.ink), bx(20, 90, 280, 40, '○ 上の式 － 下の式 ＝ y ＝ 600', C.green, FILL.green, 14)], '料金は 負にならない') },
], '連立方程式：加減法で大人と子どもの料金を求める');

// ───────── 正四角錐の体積 ─────────
const pyB = [[80, 118], [170, 118], [220, 98], [130, 98]] as Pt[];
const pyApex: Pt = [150, 22], pyCenter: Pt = [150, 108];
const pyramid = (fill: string = 'rgba(2,132,199,0.12)'): E[] => [pg(pyB, C.ink, fill), ln(pyApex[0], pyApex[1], pyB[0][0], pyB[0][1], C.ink, false, 1.6), ln(pyApex[0], pyApex[1], pyB[1][0], pyB[1][1], C.ink, false, 1.6), ln(pyApex[0], pyApex[1], pyB[2][0], pyB[2][1], C.ink, false, 1.6), ln(pyApex[0], pyApex[1], pyB[3][0], pyB[3][1], C.gray, true, 1.2)];
const taki_sansu_16: DiagramFigure = show([
  { note: '底面が1辺6cmの正方形で、高さが8cmの正四角錐の体積を求めます。図に数値を書きこみます。', add: S([...pyramid(), ln(pyApex[0], pyApex[1], pyCenter[0], pyCenter[1], C.red, true, 2), lb(232, 60, '高さ 8cm', 11, C.red, 'start', true), lb(232, 76, '（赤い点線）', 10, C.red, 'start', true), lb(125, 136, '6cm', 11, C.ink, 'middle', true), lb(206, 116, '6cm', 11, C.ink, 'start', true)], '底面 6cm×6cm　高さ 8cm\n体積は？') },
  { note: '❓角錐の体積は、どう求めるの？→「底面積×高さ÷3」です。同じ底面・同じ高さの角柱の体積の3分の1になります。', add: S([bx(20, 34, 130, 40, '角柱\n底面積×高さ', C.gray, FILL.gray, 12), ar(155, 54, 175, 54, C.ink), bx(180, 34, 120, 40, '角錐\nその 1/3', C.blue, FILL.blue, 13), lb(160, 104, '体積 ＝ 底面積 × 高さ ÷ 3', 14, C.green, 'middle', true)], '角錐 ＝ 角柱の 1/3') },
  { note: '❓なぜ3分の1なの？→1辺2cmの立方体（体積8cm³）の中心と6つの面を結ぶと、合同な6個の四角錐に分かれます。1個は8÷6＝4/3cm³。この四角錐は、底面積4cm²、高さ1cm（立方体の半分）です。', add: S([bx(100, 16, 100, 100, undefined, C.gray, FILL.gray), ln(100, 16, 200, 116, C.blue, false, 1.5), ln(200, 16, 100, 116, C.blue, false, 1.5), pg([[100, 16], [200, 16], [150, 66]], C.green, GREEN_T), lb(240, 30, '1つの面から', 10, C.green, 'start', true), lb(240, 44, '中心へ', 10, C.green, 'start', true), lb(150, 134, '立方体(体積8) ＝ 6個の四角錐', 11, C.ink, 'middle', true)], '立方体 ＝ 合同な 6個の四角錐') },
  { note: '同じ底面・同じ高さの角柱なら4×1＝4cm³で、四角錐は4/3cm³。4/3は4の3分の1です（4÷3＝4/3）。つまり、角錐は角柱の3分の1です。', add: S([bx(20, 30, 130, 36, '角柱 4×1 ＝ 4', C.gray, FILL.gray, 14), bx(170, 30, 130, 36, '四角錐 8÷6 ＝ 4/3', C.blue, FILL.blue, 13), lb(160, 92, '4/3 ＝ 4 ÷ 3', 16, C.green, 'middle', true), lb(160, 116, '角錐は 角柱の 1/3', 13, C.ink, 'middle', true)], '1/3 になることの 確かめ', C.green, FILL.green) },
  { note: '❓底面積はいくら？→底面は1辺6cmの正方形なので、6×6＝36cm²です。', add: S([...pyramid('rgba(2,132,199,0.06)'), bx(260, 40, 48, 50, '底面積\n36cm²', C.blue, FILL.blue, 10), lb(125, 136, '6cm', 11, C.ink, 'middle', true), lb(206, 116, '6cm', 11, C.ink, 'start', true)], '底面積 ＝ 6×6 ＝ 36cm²') },
  { note: '❓同じ底面・同じ高さの角柱だったら？→36×8＝288cm³です。角錐はその3分の1なので、288÷3＝96cm³です。', add: S([bx(20, 30, 130, 40, '角柱　36×8\n＝ 288cm³', C.gray, FILL.gray, 12), ar(155, 50, 175, 50, C.ink), bx(180, 30, 120, 40, '÷3 ＝ 96cm³', C.green, FILL.green, 14)], '36 × 8 ÷ 3 ＝ 96cm³', C.green, FILL.green) },
  { note: '答えは96cm³です。', add: S([...pyramid(GREEN_T), ln(pyApex[0], pyApex[1], pyCenter[0], pyCenter[1], C.red, true, 2), lb(150, 136, '体積 96cm³', 13, C.green, 'middle', true)], '答え　96cm³', C.green, FILL.green) },
  { note: '確かめ（検算）です。96×3＝288で、角柱の体積288cm³にもどります。角錐の体積は角柱より小さいはずで、96＜288と合っています。', add: S([bx(20, 34, 130, 40, '96 × 3', C.gray, FILL.gray, 16), ar(155, 54, 175, 54, C.ink), bx(180, 34, 120, 40, '288 ○', C.gray, FILL.gray, 16), lb(160, 104, '96 ＜ 288（角錐のほうが小さい）', 12, C.ink, 'middle', true)], '逆にかけて もとにもどる', C.green, FILL.green) },
  { note: '❓高さは、どの長さを使うの？→頂点から底面にまっすぐ（垂直に）おろした長さです。側面にそった斜めの長さ（斜辺）ではありません。問題の「高さ8cm」はこの垂直の長さです。', add: S([...pyramid(), ln(pyApex[0], pyApex[1], pyCenter[0], pyCenter[1], C.green, false, 2.5), ln(pyApex[0], pyApex[1], pyB[1][0], pyB[1][1], C.red, true, 2.5), lb(136, 60, '高さ（垂直）', 10, C.green, 'end', true), lb(200, 96, '斜め ✕', 10, C.red, 'start', true)], '高さ ＝ 垂直の長さ') },
  { note: 'よくあるまちがいです。÷3を忘れて288cm³と答えること。288は角柱の体積です。角錐は「1/3」をかけるか、3でわります。', add: S([bx(20, 24, 280, 40, '✕ 36×8 ＝ 288cm³（角柱のまま）', C.red, FILL.red, 14), ar(160, 68, 160, 86, C.ink), bx(20, 90, 280, 40, '○ 36×8÷3 ＝ 96cm³', C.green, FILL.green, 14)], '角錐は 「÷3」') },
], '角錐の体積＝底面積×高さ÷3');

// ───────── 石灰石と塩酸（グラフが頭打ちになる点）─────────
const gX = (g: number) => 50 + g * 40, gY = (v: number) => 136 - v * 43;
const gAxes = (): E[] => [ln(50, 136, 296, 136, C.gray, false, 1.2), ln(50, 136, 50, 12, C.gray, false, 1.2), lb(296, 126, '石灰石(g)', 10, C.gray, 'end', true), lb(56, 12, '発生した二酸化炭素(g)', 10, C.gray, 'start', true), lb(gX(3), 145, '3', 10, C.gray, 'middle', true), lb(gX(6), 145, '6', 10, C.gray, 'middle', true), lb(44, gY(1.32) + 4, '1.32', 9, C.gray, 'end', true)];
const gLine1 = (): E[] => [ln(gX(0), gY(0), gX(3), gY(1.32), C.blue, false, 2.5), ln(gX(3), gY(1.32), gX(6), gY(1.32), C.blue, false, 2.5), dot(gX(3), gY(1.32), C.red, 4)];
const koko_kanto2026_rika_028: DiagramFigure = show([
  { note: 'うすい塩酸50cm³に石灰石（炭酸カルシウム）の粉末を加えていきます。0〜3gまでは、石灰石1gあたり二酸化炭素が0.44g発生し、3g以上では発生量が1.32gで一定でした。塩酸と過不足なく反応する石灰石は何gか、また、塩酸の濃度を2倍にすると何gになるかを求めます。', add: S([...gAxes(), ...gLine1(), lb(gX(3) + 6, gY(1.32) - 8, '(3g, 1.32g)', 10, C.red, 'start', true)], '3gをこえると 1.32g で一定\n過不足なく反応する石灰石は？') },
  { note: '❓なぜ、最初は石灰石の量に比例して二酸化炭素が増えるの？→塩酸にはまだ反応する相手（塩化水素）が残っているので、石灰石を入れた分だけそのまま反応します。1gごとに0.44gずつ発生するのは、石灰石1gが反応してできる二酸化炭素の量が決まっているからです。', add: S([...gAxes(), ln(gX(0), gY(0), gX(3), gY(1.32), C.blue, false, 2.5), lb(gX(1.5) - 6, gY(0.66) - 6, '1gで0.44g', 10, C.blue, 'end', true), lb(200, 40, '塩酸がまだ余っている', 11, C.ink, 'middle', true)], '石灰石を入れた分だけ 反応\n1gあたり 0.44g') },
  { note: '❓なぜ3gのところで頭打ちになるの？→塩酸の中の塩化水素が、ちょうど使い切られるからです。それ以上石灰石を入れても、反応する相手がもうないので、二酸化炭素は増えません（石灰石が余るだけです）。', add: S([...gAxes(), ...gLine1(), lb(230, gY(1.32) - 8, '塩酸が なくなった → 増えない', 10, C.ink, 'middle', true), ar(gX(3), gY(1.32) + 20, gX(3), gY(1.32) + 4, C.red)], '塩酸が使い切られる点が\n頭打ちの はじまり') },
  { note: '❓では、ちょうど使い切る石灰石は何g？→頭打ちの発生量1.32gが、比例の関係（1gで0.44g）の上にあるので、1.32÷0.44＝3gです。3gのときに、塩酸と石灰石が過不足なく反応します。', add: S([bx(20, 34, 130, 40, '1.32g ÷ 0.44', C.blue, FILL.blue, 14), ar(155, 54, 175, 54, C.ink), bx(180, 34, 120, 40, '3g', C.green, FILL.green, 18), lb(160, 104, '3gで ちょうど反応', 13, C.ink, 'middle', true)], '1.32 ÷ 0.44 ＝ 3g', C.green, FILL.green) },
  { note: '❓塩酸の濃度を2倍にすると、50cm³の中の塩化水素はどうなる？→同じ体積でも、塩化水素が2倍の量ふくまれます。反応する相手が2倍に増えます。', add: S([bx(30, 34, 110, 50, '50cm³\nふつうの濃さ', C.blue, FILL.blue, 12), bx(180, 34, 110, 50, '50cm³\n2倍の濃さ', C.red, FILL.red, 12), lb(160, 60, '→', 18, C.ink, 'middle', true), lb(160, 110, '塩化水素の量が 2倍', 13, C.ink, 'middle', true)], '同じ50cm³でも 塩化水素は2倍') },
  { note: '❓反応できる石灰石の量は、どうなる？→石灰石1gと反応する塩化水素の量は決まっています。塩化水素が2倍あれば、反応できる石灰石も2倍です。3g×2＝6gです。', add: S([bx(20, 34, 130, 40, '塩化水素 2倍', C.red, FILL.red, 14), ar(155, 54, 175, 54, C.ink), bx(180, 34, 120, 40, '石灰石も 2倍', C.green, FILL.green, 14), lb(160, 104, '3g × 2 ＝ 6g', 16, C.green, 'middle', true)], '反応できる石灰石 ＝ 6g', C.green, FILL.green) },
  { note: '❓グラフはどう変わる？→傾き（1gあたり0.44g）は変わらないので、同じ直線がそのまま伸び、6gまで上がってから頭打ちになります。最大の発生量は0.44×6＝2.64gです。', add: S([...gAxes(), ...gLine1(), ln(gX(3), gY(1.32), gX(6), gY(2.64), C.red, true, 2.5), ln(gX(6), gY(2.64), 296, gY(2.64), C.red, true, 2.5), dot(gX(6), gY(2.64), C.red, 4), lb(gX(6) - 6, gY(2.64) - 8, '(6g, 2.64g)', 10, C.red, 'end', true)], '傾きは同じ 0.44\n頭打ちが 6g まで のびる', C.red, FILL.red) },
  { note: '答えは、もとの塩酸と過不足なく反応する石灰石が3g、濃度を2倍にしたときが6gです。', add: S([bx(30, 30, 260, 34, 'もとの塩酸：3g', C.blue, FILL.blue, 18), bx(30, 76, 260, 34, '濃度2倍：6g', C.red, FILL.red, 18)], '答え　3g、濃度2倍で 6g', C.green, FILL.green) },
  { note: '確かめ（検算）です。6g×0.44＝2.64gで、もとの最大の発生量1.32gのちょうど2倍です。石灰石が2倍になれば、発生する二酸化炭素も2倍になるという関係と一致します。', add: S([bx(20, 34, 130, 40, '6g × 0.44', C.gray, FILL.gray, 15), ar(155, 54, 175, 54, C.ink), bx(180, 34, 120, 40, '2.64g', C.gray, FILL.gray, 16), lb(160, 104, '1.32g × 2 ＝ 2.64g ○', 14, C.green, 'middle', true)], '発生量も ちょうど2倍', C.green, FILL.green) },
  { note: 'よくあるまちがいです。濃度を2倍にしたとき、グラフの傾き（1gあたりの発生量）も2倍になると考えること。傾きは石灰石1gが作る二酸化炭素の量なので変わりません。変わるのは、頭打ちになる位置（3g→6g）です。', add: S([bx(20, 24, 280, 40, '✕ 傾きも2倍（1gで0.88g）', C.red, FILL.red, 14), ar(160, 68, 160, 86, C.ink), bx(20, 90, 280, 40, '○ 傾きは0.44のまま、頭打ちが3g→6g', C.green, FILL.green, 13)], '変わるのは 頭打ちの位置') },
], '石灰石と塩酸：グラフが頭打ちになる点から考える');

// ───────── 月食 ─────────
const sunE = (): E[] => [ci(40, 75, 26, '太陽', C.main, FILL.yellow, 11)];
const earthE = (): E[] => [ci(160, 75, 13, '地球', C.blue, FILL.blue, 9)];
const moonE = (x: number, y: number, fill: string = FILL.gray): E[] => [ci(x, y, 9, '月', C.gray, fill, 9)];
const shadowE = (): E => pg([[160, 62], [304, 68], [304, 82], [160, 88]], C.gray, 'rgba(110,100,92,0.30)');
const azabu_rika_14: DiagramFigure = show([
  { note: '太陽・地球・月がこの順に一直線に並び、月が地球の影に入る現象の名前と、そのときの月の見え方（満月か新月か）を答えます。', add: S([...sunE(), shadowE(), ...earthE(), ...moonE(265, 75, FILL.gray), lb(265, 100, '地球の影の中', 10, C.ink, 'middle', true)], '太陽 → 地球 → 月 の順\n月が 地球の影に入る') },
  { note: '❓なぜ地球の後ろに影ができるの？→太陽の光はほぼ平行にまっすぐ進み、地球がその光をさえぎるからです。地球の反対側（太陽と反対の向き）に、光のとどかない影の部分ができます。', add: S([...sunE(), ar(70, 62, 146, 66, C.main), ar(70, 75, 146, 75, C.main), ar(70, 88, 146, 84, C.main), shadowE(), ...earthE(), lb(240, 110, '光がとどかない（影）', 11, C.ink, 'middle', true)], '地球が光をさえぎる\n→ 反対側に影') },
  { note: '❓月が影に入るには、どんな位置関係が必要？→影は地球の真うしろにできるので、月もその線上に来る必要があります。太陽・地球・月の順に並び、地球が真ん中です。影からずれた位置にある月は、影に入りません。', add: S([...sunE(), shadowE(), ...earthE(), ...moonE(265, 75), ...moonE(225, 30), lb(265, 100, '影の中 ○', 10, C.green, 'middle', true), lb(225, 48, '影の外 ✕', 10, C.red, 'middle', true)], '地球が真ん中 → 月食') },
  { note: '❓このとき、月は地球から見て、太陽のどちら側にあるの？→太陽の反対側です。月の太陽に照らされる側は太陽のほうを向いています。地球から見ると、この位置の月は、その太陽に照らされた面がこちらを向くので、ふつうなら全体が明るい満月に見える位置です。', add: S([...sunE(), ...earthE(), ci(265, 75, 12, undefined, C.gray, FILL.gray), sc(265, 75, 12, 90, 270, C.main, FILL.yellow), ar(70, 75, 146, 75, C.main), ar(176, 75, 248, 75, C.ink), lb(265, 100, '光を受けた面が', 10, C.main, 'middle', true), lb(265, 113, '地球のほうを向く', 10, C.main, 'middle', true)], '太陽の反対側の月 ＝ 満月の位置') },
  { note: '❓では、新月はどんな位置関係？→新月は、月が太陽と地球の間に来たときです。月の太陽に照らされていない面が地球を向くので、見えません。このとき太陽が月にかくれるのが日食です。月食の並び（太陽・地球・月）とは、地球と月の位置が入れかわっています。', add: S([...sunE(), ...moonE(110, 75), ...earthE(), ar(70, 75, 98, 75, C.main), lb(110, 100, '新月', 11, C.gray, 'middle', true), lb(250, 75, 'このとき 日食', 12, C.ink, 'middle', true)], '太陽 → 月 → 地球：新月・日食') },
  { note: '答えは、現象の名前が月食、そのときの月は満月です。太陽・地球・月の順に並び、地球が真ん中にあるとき、月は満月の位置にあり、地球の影に入って月食になります。', add: S([...sunE(), shadowE(), ...earthE(), ...moonE(265, 75, FILL.gray), lb(265, 100, '満月の位置', 10, C.ink, 'middle', true)], '答え　月食。そのときの月は満月。', C.green, FILL.green) },
  { note: '確かめ（検算）です。月食は「太陽・地球・月」の順で満月のとき、日食は「太陽・月・地球」の順で新月のときです。真ん中に来るのが地球なら月食、月なら日食、と覚えられます。', add: S([bx(20, 34, 130, 50, '太陽→地球→月\n月食・満月', C.blue, FILL.blue, 12), bx(170, 34, 130, 50, '太陽→月→地球\n日食・新月', C.red, FILL.red, 12), lb(160, 110, '真ん中が 地球なら月食、月なら日食', 12, C.ink, 'middle', true)], '真ん中は どちら？', C.green, FILL.green) },
  { note: '❓では、なぜ満月のたびに月食にならないの？→月が地球を回る面（軌道）が、地球が太陽を回る面に対して約5°かたむいているからです。ふつうは、満月のとき月は影の少し上や下を通りすぎます。', add: S([...sunE(), ...earthE(), shadowE(), ln(100, 75, 300, 75, C.gray, true, 1.2), ln(100, 105, 300, 45, C.purple, false, 2), ...moonE(250, 57), lb(200, 128, '月の通り道は かたむいている', 11, C.purple, 'middle', true), lb(250, 40, '影の上を通る', 10, C.purple, 'middle', true)], '月の軌道が 約5°かたむく\n→ ふつうは影を外れる', C.purple, FILL.purple) },
  { note: '❓月食はどこで見えるの？→月食は月そのものが暗くなる現象なので、地球の夜の側ならどこでも同じように見えます。日食は、月の影が落ちるせまい地域でしか見えません。', add: S([bx(20, 34, 130, 50, '月食\n夜の側ならどこでも', C.blue, FILL.blue, 11), bx(170, 34, 130, 50, '日食\nせまい地域だけ', C.red, FILL.red, 11), lb(160, 110, '月が暗くなる？　太陽がかくれる？', 12, C.ink, 'middle', true)], '月食は 広い範囲で見える') },
  { note: 'よくあるまちがいです。月食と日食の並び順を混同すること。影に入るのは月なので、月が地球のうしろにある（太陽・地球・月）のが月食です。太陽・月・地球の順は日食で、そのときの月は新月です。', add: S([bx(20, 24, 280, 40, '✕ 月食 ＝ 太陽・月・地球（新月）', C.red, FILL.red, 13), ar(160, 68, 160, 86, C.ink), bx(20, 90, 280, 40, '○ 月食 ＝ 太陽・地球・月（満月）', C.green, FILL.green, 13)], '月が 地球の影に入る → 月食') },
], '月食：太陽・地球・月の順に並ぶとき');

// ───────── 月の満ち欠けの周期 ─────────
const mE: Pt = [110, 76];
const mAt = (deg: number, r = 50): Pt => [mE[0] + r * Math.cos((deg * Math.PI) / 180), mE[1] - r * Math.sin((deg * Math.PI) / 180)];
const moonHalf = (p: Pt, litFrom: number, litTo: number): E[] => [ci(p[0], p[1], 9, undefined, C.gray, FILL.gray), sc(p[0], p[1], 9, litFrom, litTo, C.main, FILL.yellow)];
const orbit = (): E[] => [ci(mE[0], mE[1], 50, undefined, C.gray, 'none'), ci(mE[0], mE[1], 12, '地球', C.blue, FILL.blue, 8)];
const sunRays = (): E[] => [ar(300, 50, 252, 50, C.main), ar(300, 76, 252, 76, C.main), ar(300, 102, 252, 102, C.main), lb(278, 40, '太陽の光', 10, C.main, 'middle', true)];
const phases = (): E[] => { const p0 = mAt(0), p1 = mAt(90), p2 = mAt(180), p3 = mAt(270); return [...moonHalf(p0, -90, 90), ...moonHalf(p1, -90, 90), ...moonHalf(p2, -90, 90), ...moonHalf(p3, -90, 90), lb(p0[0] + 14, p0[1] + 4, '新月', 10, C.ink, 'start', true), lb(p1[0], p1[1] - 14, '上弦', 10, C.ink, 'middle', true), lb(p2[0] - 14, p2[1] + 4, '満月', 10, C.ink, 'end', true), lb(p3[0], p3[1] + 18, '下弦', 10, C.ink, 'middle', true)]; };
const seinan_rika_10: DiagramFigure = show([
  { note: '月が地球のまわりを回ることで、満ち欠けが起こります。新月から次の新月までの日数として、最も近いものを選びます。選択肢は、約7日、約15日、約30日、約365日です。', add: S([...orbit(), ...moonHalf(mAt(0), -90, 90), lb(mAt(0)[0] + 14, mAt(0)[1] + 4, '新月', 10, C.ink, 'start', true), ...sunRays()], '新月 → 次の新月\n約7日・約15日・約30日・約365日のどれ？') },
  { note: '❓月の満ち欠けは、なぜ起こるの？→月は自分では光らず、太陽の光が当たった側の半分だけが明るく見えています。月が地球のまわりを回ると、その明るい半分を地球から見る角度が変わるので、満ち欠けして見えます。', add: S([...orbit(), ...phases(), ...sunRays()], '月が回る → 明るい半分の\n見える範囲が変わる') },
  { note: '❓月が地球のまわりを1周するには何日？→月が元の位置（星空の中で同じ向き）にもどる時間は約27.3日です。でも、新月になるには、太陽・月・地球の位置関係がもとにもどる必要があります。', add: S([...orbit(), ...moonHalf(mAt(0), -90, 90), ar(mE[0] + 50, mE[1] + 6, mE[0] + 50, mE[1] - 6, C.blue), bx(200, 18, 110, 34, '1周 約27.3日', C.blue, FILL.blue, 12)], '月が1周 ＝ 約27.3日\nでも新月は 太陽との関係') },
  { note: '❓なぜ27.3日では新月にもどらないの？→その間に、地球も太陽のまわりを約27°進むからです（1年365日で360°、つまり1日に約1°）。地球から見た太陽の向きが、27°ずれてしまいます。', add: S([...orbit(), ...moonHalf(mAt(0), -90, 90), ln(mE[0], mE[1], 300, mE[1], C.main, false, 2), ln(mE[0], mE[1], mAt(27, 190)[0], mAt(27, 190)[1], C.red, true, 2), lb(262, mE[1] - 4, '27.3日前の太陽', 10, C.main, 'end', true), lb(252, 30, '27°ずれた太陽', 10, C.red, 'end', true)], '地球が進む → 太陽の向きが\n約27°ずれる', C.red, FILL.red) },
  { note: '❓月は、あと何日で追いつくの？→月は1日に約13°進みます（360÷27.3）。ずれた27°ぶんを追いかけるには、27÷13＝約2日かかります。27.3日に約2日を足して、約29.5日です。', add: S([bx(20, 34, 130, 40, '27.3日 ＋ 約2日', C.gray, FILL.gray, 14), ar(155, 54, 175, 54, C.ink), bx(180, 34, 120, 40, '約29.5日', C.green, FILL.green, 16), lb(160, 104, '27° ÷ 13°（1日）＝ 約2日', 12, C.ink, 'middle', true)], '満ち欠けの周期 ＝ 約29.5日', C.green, FILL.green) },
  { note: '答えは約30日です。約29.5日にいちばん近い選択肢が「約30日」です。', add: S([bx(14, 14, 80, 22, '約7日', C.gray, FILL.gray, 10), bx(14, 40, 80, 22, '約15日', C.gray, FILL.gray, 10), bx(14, 66, 80, 22, '約30日 ○', C.green, FILL.green, 11), bx(14, 92, 80, 22, '約365日', C.gray, FILL.gray, 10), lb(200, 70, '29.5日に 一番近い', 12, C.green, 'middle', true)], '答え　約30日', C.green, FILL.green) },
  { note: '❓ほかの選択肢は、何の日数？→約7日は新月から上弦までで、周期の4分の1。約15日は新月から満月までで、周期の半分。約365日は、地球が太陽のまわりを1周する1年です。', add: S([bx(20, 24, 280, 30, '約7日　＝ 新月から上弦（1/4周期）', C.gray, FILL.gray, 12), bx(20, 60, 280, 30, '約15日 ＝ 新月から満月（半分）', C.gray, FILL.gray, 12), bx(20, 96, 280, 30, '約365日 ＝ 地球の公転（1年）', C.gray, FILL.gray, 12)], '満ち欠けの周期は その中間の 約30日') },
  { note: '満ち欠けの時間の流れです。新月（0日）から約7日で上弦、約15日で満月、約22日で下弦、約29.5日で次の新月にもどります。', add: S([ln(30, 70, 290, 70, C.gray, false, 2), dot(30, 70, C.ink, 4), dot(95, 70, C.ink, 4), dot(160, 70, C.ink, 4), dot(225, 70, C.ink, 4), dot(290, 70, C.ink, 4), lb(30, 54, '新月', 11, C.ink, 'middle', true), lb(95, 54, '上弦', 11, C.ink, 'middle', true), lb(160, 54, '満月', 11, C.ink, 'middle', true), lb(225, 54, '下弦', 11, C.ink, 'middle', true), lb(290, 54, '新月', 11, C.ink, 'middle', true), lb(30, 92, '0日', 10, C.gray, 'middle', true), lb(95, 92, '約7日', 10, C.gray, 'middle', true), lb(160, 92, '約15日', 10, C.gray, 'middle', true), lb(225, 92, '約22日', 10, C.gray, 'middle', true), lb(290, 92, '約29.5日', 10, C.gray, 'middle', true)], '0 → 7 → 15 → 22 → 29.5日') },
  { note: '確かめ（検算）です。満ち欠けの周期が約29.5日なら、12回（12か月）で約354日。ほぼ1年（365日）になり、暦の「1か月」という区切りとも合います。', add: S([bx(20, 34, 130, 40, '29.5日 × 12', C.gray, FILL.gray, 15), ar(155, 54, 175, 54, C.ink), bx(180, 34, 120, 40, '約354日', C.green, FILL.green, 16), lb(160, 104, 'ほぼ 1年（365日）○', 13, C.ink, 'middle', true)], '12か月で ほぼ1年', C.green, FILL.green) },
  { note: 'よくあるまちがいです。満ち欠けの周期を、月が地球を1周する周期（約27.3日）と同じだと考えること。地球も太陽のまわりを動くので、満ち欠けの周期は公転周期より約2日長い約29.5日です。', add: S([bx(20, 24, 280, 40, '✕ 満ち欠けの周期 ＝ 公転周期 27.3日', C.red, FILL.red, 13), ar(160, 68, 160, 86, C.ink), bx(20, 90, 280, 40, '○ 地球も動く → 約2日長い 29.5日', C.green, FILL.green, 13)], '満ち欠けの周期は 公転周期より長い') },
], '新月から次の新月まで：約29.5日');

// ───────── 光の屈折（空気→ガラス）─────────
const rx = 160, ry = 80;
const rayIn = (): E[] => [ar(114, 41.4, rx, ry, C.red)];
const rayOut = (): E[] => [ar(rx, ry, 188.3, 127.1, C.red)];
const seinan_rika_03: DiagramFigure = (() => {
  const medium = (): E[] => [bx(40, 80, 240, 66, undefined, C.blue, 'rgba(2,132,199,0.12)'), ln(40, 80, 280, 80, C.ink, false, 1.8), lb(262, 70, '空気', 11, C.ink, 'end', true), lb(262, 96, 'ガラス', 11, C.blue, 'end', true), ln(rx, 14, rx, 146, C.gray, true, 1.4), lb(rx + 4, 18, '法線', 10, C.gray, 'start', true)];
  return show([
    { note: '光が空気中からガラス中へ進むとき、入射角と屈折角の大小関係として正しいものを選びます（入射角＞屈折角、入射角＜屈折角、入射角＝屈折角、屈折は起こらない）。', add: S([...medium(), ...rayIn(), ...rayOut(), lb(140, 62, '入射角', 10, C.red, 'end', true), lb(180, 108, '屈折角', 10, C.red, 'start', true)], '入射角と屈折角は\nどちらが大きい？') },
    { note: '❓入射角・屈折角は、どこから測る角？→境目の面ではなく、境目に垂直な線（法線）から測ります。光が境目に入る前の道すじと法線の間の角が入射角、入ったあとの道すじと法線の間の角が屈折角です。', add: S([...medium(), ...rayIn(), ...rayOut(), ...arcM([rx, ry], [rx, 40], [114, 41.4], 22, C.blue), ...arcM([rx, ry], [rx, 120], [188.3, 127.1], 22, C.green), lb(140, 62, '入射角', 10, C.blue, 'end', true), lb(180, 108, '屈折角', 10, C.green, 'start', true)], '角は 法線から測る\n（境目の面からではない）') },
    { note: '❓なぜ光は境目で曲がるの？→光は、空気中よりガラスの中のほうが、進む速さがおそいからです（ガラスの中では空気中の約3分の2）。速さが変わる境目で、進む向きも変わります。', add: S([bx(20, 30, 130, 40, '空気中\n速い', C.blue, FILL.blue, 13), bx(170, 30, 130, 40, 'ガラス中\nおそい（約2/3）', C.red, FILL.red, 11), lb(160, 104, '速さが変わる → 向きが変わる', 13, C.ink, 'middle', true)], '速さの変化が 曲がる原因') },
    { note: '❓速さが変わると、なぜ向きが変わるの？→光の波の面（波面）を考えます。ななめに入ると、波面の片はしが先にガラスに入って、そこだけ先におそくなります。まだ空気中の反対のはしは速いままなので、波面がかたむいて向きが変わります。', add: S([...medium(), ln(130, 80, 155.7, 49.4, C.blue, false, 2.5), ln(146.4, 107.3, 192.2, 80, C.red, false, 2.5), ar(148, 66, 162, 82, C.blue), ar(170, 95, 178, 108, C.red), lb(110, 60, '先にガラスに入る端は', 9, C.blue, 'end', true), lb(110, 71, 'おそくなる', 9, C.blue, 'end', true), lb(236, 118, '波面(青→赤)', 10, C.ink, 'middle', true)], '先に入った端が おそくなり\n波面がかたむく') },
    { note: '❓どちら向きに曲がるの？→先にガラスに入ってゆっくりになった端のほうへ、波面がまわり込むので、光は法線に近づく向きに曲がります。屈折角は入射角より小さくなります。', add: S([...medium(), ...rayIn(), ...rayOut(), ...arcM([rx, ry], [rx, 40], [114, 41.4], 22, C.blue), ...arcM([rx, ry], [rx, 120], [188.3, 127.1], 22, C.green), lb(140, 62, '大', 11, C.blue, 'end', true), lb(180, 108, '小', 11, C.green, 'start', true)], '空気 → ガラス：法線に近づく\n入射角 ＞ 屈折角', C.green, FILL.green) },
    { note: '答えは「入射角＞屈折角」です。空気からガラスへ進むとき、光は法線に近づくように曲がるので、屈折角は入射角より小さくなります。', add: S([bx(14, 16, 130, 28, '入射角＞屈折角 ○', C.green, FILL.green, 12), bx(14, 48, 130, 28, '入射角＜屈折角', C.gray, FILL.gray, 12), bx(14, 80, 130, 28, '入射角＝屈折角', C.gray, FILL.gray, 12), bx(14, 112, 130, 28, '屈折は起こらない', C.gray, FILL.gray, 12), lb(230, 76, '50° ＞ 約31°', 14, C.green, 'middle', true)], '答え　入射角 ＞ 屈折角', C.green, FILL.green) },
    { note: '❓ガラスから空気へ出るときは？→速さが速くなる向きなので、逆に法線から遠ざかるように曲がります。屈折角のほうが、入射角より大きくなります。', add: S([...medium(), ar(188.3, 127.1, rx, ry, C.purple), ar(rx, ry, 114, 41.4, C.purple), lb(200, 60, 'ガラス→空気', 11, C.purple, 'middle', true)], 'ガラス → 空気：法線から遠ざかる\n入射角 ＜ 屈折角', C.purple, FILL.purple) },
    { note: '確かめ（検算）です。光の道すじは、逆向きにたどることもできます。空気からガラスへ入る光が法線に近づくなら、ガラスから空気へ出る光は逆に遠ざかる、と同じ道すじで確かめられます。', add: S([...medium(), ar(114, 41.4, rx, ry, C.red), ar(rx, ry, 188.3, 127.1, C.red), ar(180, 122, 166, 94, C.purple, true), ar(154, 70, 130, 50, C.purple, true)], '同じ道すじを 逆にたどれる', C.green, FILL.green) },
    { note: 'よくあるまちがいです。光が入るときと出るときで、曲がる向きを混同すること。「空気→ガラス」は法線に近づく（屈折角が小さい）、「ガラス→空気」は法線から遠ざかる（屈折角が大きい）と、速さの変化と結びつけて覚えます。', add: S([bx(20, 24, 280, 40, '✕ 入るときも 出るときも同じ向きに曲がる', C.red, FILL.red, 13), ar(160, 68, 160, 86, C.ink), bx(20, 90, 280, 40, '○ おそい側へ入る → 法線に近づく', C.green, FILL.green, 13)], '速さの変化で 向きが決まる') },
    { note: '身近な例です。水の中のストローが折れ曲がって見えたり、プールが実際より浅く見えたりするのは、空気と水の境目で光が屈折するからです。', add: S([bx(20, 34, 130, 50, 'コップの水の\nストローが曲がって見える', C.blue, FILL.blue, 10), bx(170, 34, 130, 50, 'プールが\n浅く見える', C.blue, FILL.blue, 12), lb(160, 110, 'どちらも 境目での屈折', 13, C.ink, 'middle', true)], '屈折は 身近な現象') },
  ], '光の屈折：空気からガラスへ');
})();

// ───────── 金星（よいの明星）─────────
const vS: Pt = [90, 68], vE: Pt = [190, 68], vV: Pt = [141.8, 18.1];
const venusBase = (): E[] => [ci(vS[0], vS[1], 72, undefined, C.gray, 'none'), ci(vS[0], vS[1], 14, '太陽', C.main, FILL.yellow, 8), ci(vE[0], vE[1], 10, '地球', C.blue, FILL.blue, 7), lb(150, 141, '金星の軌道', 10, C.gray, 'middle', true), ci(vS[0] + 72, vS[1], 5, undefined, C.purple, FILL.purple)];
const taki_rika_10: DiagramFigure = show([
  { note: '金星が「よいの明星」として観測されるのは、どんな時間帯・方角か。また、金星が真夜中に観測されない理由を説明します。図は、太陽を中心に、金星の軌道と地球の位置を上から見たものです。', add: S([...venusBase(), lb(250, 64, '地球', 11, C.blue, 'start', true), lb(250, 80, '（外側）', 10, C.blue, 'start', true), lb(40, 130, '金星の軌道は', 10, C.ink, 'middle', true), lb(40, 143, '地球より内側', 10, C.ink, 'middle', true)], 'よいの明星は いつ・どちら？\n真夜中に見えない理由は？') },
  { note: '❓金星は、地球から見てどんな惑星？→金星は地球より内側を回る内惑星です。太陽に近い軌道を回っているので、地球から見ると、太陽のそばにしか現れません。', add: S([...venusBase(), ln(vS[0], vS[1], vE[0], vE[1], C.gray, true, 1.2)], '内惑星：地球より内側を回る\n太陽の近くにいる') },
  { note: '❓なぜ、太陽から大きくはなれて見えないの？→金星の軌道は小さい円なので、地球から見た「太陽と金星のあいだの角（離角）」には上限があります。地球から金星の軌道に接線を引いたとき、金星が接点にいる位置が最大です。', add: S([...venusBase(), ln(vE[0], vE[1], vS[0], vS[1], C.main, false, 1.6), ln(vE[0], vE[1], vV[0], vV[1], C.red, false, 2.5), dot(vV[0], vV[1], C.purple, 4), lb(vV[0] - 4, vV[1] - 6, '金星', 10, C.purple, 'end', true), ...arcM(vE, vS, vV, 28, C.red), lb(150, 70, '最大', 10, C.red, 'end', true)], '軌道の接線の向きが\nいちばん大きい角') },
  { note: '❓その最大の角は、何度くらい？→金星の軌道は地球の軌道の約0.72倍の大きさで、最大の離角は約47°です。つまり、金星は太陽から約47°より外側には決して現れません。', add: S([...venusBase(), ln(vE[0], vE[1], vS[0], vS[1], C.main, false, 1.6), ln(vE[0], vE[1], 134.4, 10.4, C.red, false, 2), ln(vE[0], vE[1], 134.4, 125.6, C.red, false, 2), ...arcM(vE, vS, vV, 30, C.red), lb(152, 82, '約47°', 11, C.red, 'end', true)], '太陽との角は 最大 約47°') },
  { note: '❓真夜中に見える方向は、太陽に対してどちら？→真夜中は、地球の夜の側の真ん中です。ここから見える方向は、太陽のちょうど反対側（180°はなれた方向）です。', add: S([...venusBase(), ln(vE[0], vE[1], vS[0], vS[1], C.main, false, 1.6), ar(vE[0] + 4, vE[1], 300, vE[1], C.purple), lb(260, vE[1] - 10, '真夜中に見える方向', 10, C.purple, 'middle', true), lb(260, vE[1] + 14, '（太陽の反対 180°）', 10, C.purple, 'middle', true)], '真夜中 ＝ 太陽と反対の向き') },
  { note: '❓では、なぜ金星は真夜中に見えないの？→金星は太陽から約47°以内にしか現れず、真夜中に見える方向（太陽の反対側、180°）は、その範囲の外です。金星は、そちらの方向には決していません。だから真夜中には観測できません。', add: S([...venusBase(), ln(vE[0], vE[1], 134.4, 10.4, C.red, true, 1.6), ln(vE[0], vE[1], 134.4, 125.6, C.red, true, 1.6), lb(130, 90, '金星がいる範囲', 10, C.red, 'end', true), ar(vE[0] + 4, vE[1], 300, vE[1], C.purple), lb(262, vE[1] - 10, '金星はいない', 10, C.purple, 'middle', true)], '金星は 太陽から47°以内だけ\n→ 真夜中の方向にはいない', C.green, FILL.green) },
  { note: '❓よいの明星は、いつ・どちらの空に見えるの？→金星が太陽より東側にあるときは、太陽が西にしずんだあとも、金星は西の空にしばらく残ります。つまり、日没後の西の空です。', add: S([ln(40, 120, 280, 120, C.ink, false, 2), lb(160, 138, '地平線', 10, C.gray, 'middle', true), ci(80, 120, 14, '太陽', C.main, FILL.yellow, 8), ci(150, 84, 8, '金', C.purple, FILL.purple, 8), lb(80, 60, '日没後の西の空', 11, C.blue, 'start', true), lb(180, 92, '太陽がしずんだあと', 10, C.ink, 'start', true), lb(180, 106, '金星は まだ空に残る', 10, C.ink, 'start', true)], '太陽がしずんだあと、西の空に\n金星が残る → よいの明星', C.ink, FILL.warm) },
  { note: '答えは、よいの明星は日没後の西の空です。金星は地球より内側を回る内惑星で、地球から見て太陽から大きくはなれることがない（最大約47°）ので、真夜中に観測されることはありません。', add: S([bx(20, 30, 280, 34, 'よいの明星 ＝ 日没後の西の空', C.blue, FILL.blue, 15), bx(20, 76, 280, 50, '内惑星で 太陽から大きくはなれない\n→ 真夜中には見えない', C.green, FILL.green, 13)], '答え　日没後の西の空。内惑星だから真夜中には見えない', C.green, FILL.green) },
  { note: '確かめ（検算）です。地球は1時間に約15°自転します（360°÷24時間）。太陽から約47°はなれた金星は、47÷15＝約3時間で、太陽と同じように地平線にしずみます。真夜中（日没から何時間もあと）には、もう見えません。', add: S([bx(20, 34, 130, 40, '47° ÷ 15°/時間', C.gray, FILL.gray, 12), ar(155, 54, 175, 54, C.ink), bx(180, 34, 120, 40, '約3時間', C.green, FILL.green, 16), lb(160, 104, '日没後 約3時間で しずむ', 13, C.ink, 'middle', true)], '金星が見えるのは 日没後 約3時間まで', C.green, FILL.green) },
  { note: 'よくあるまちがいです。金星を、火星や木星のように真夜中にも見える惑星と同じに考えること。火星・木星などは地球より外側の外惑星で、太陽の反対側にも来られるので、真夜中にも見えます。金星は内惑星なので、見えません。', add: S([bx(20, 24, 280, 40, '✕ 金星は 真夜中にも見える（外惑星と同じ）', C.red, FILL.red, 12), ar(160, 68, 160, 86, C.ink), bx(20, 90, 280, 40, '○ 内惑星は 太陽のそばだけ → 夕方か明け方', C.green, FILL.green, 12)], '内惑星と外惑星で 見え方がちがう') },
  { note: '❓明け方に見える場合は？→金星が太陽より西側にあるときは、太陽より先に東の空から昇るので、明け方の東の空に見えます。これが「明けの明星」です。よいの明星も明けの明星も同じ金星で、太陽のそばにしか現れない点は同じです。', add: S([ln(40, 120, 280, 120, C.ink, false, 2), lb(160, 138, '地平線', 10, C.gray, 'middle', true), ci(240, 120, 14, '太陽', C.main, FILL.yellow, 8), ci(170, 84, 8, '金', C.purple, FILL.purple, 8), lb(40, 60, '明け方の東の空', 11, C.blue, 'start', true), lb(60, 96, '太陽より先に昇る', 10, C.ink, 'start', true)], '明けの明星 ＝ 明け方の東の空') },
], '金星：内惑星は太陽のそばにしか見えない');

// ───────── 仕事（kg→N→J）─────────
const seinan_rika_16: DiagramFigure = show([
  { note: '質量5kgの物体を、2mの高さまで一定の速さで持ち上げるときの仕事の大きさを求めます。質量100gの物体にはたらく重力の大きさを1Nとします。', add: S([bx(120, 84, 60, 44, '5kg', C.gray, FILL.gray, 14), ar(150, 80, 150, 24, C.green), lb(166, 54, '2m', 12, C.green, 'start', true), ln(90, 130, 210, 130, C.gray, false, 2), lb(150, 146, '床', 10, C.gray, 'middle', true)], '5kgを 2m 持ち上げる\n仕事は何J？') },
  { note: '❓仕事とは何？→物体に力を加えて、その力の向きに動かしたとき、「力×動かした距離」で表します。単位はJ（ジュール）です。大きな力で長い距離を動かすほど、仕事は大きくなります。', add: S([bx(20, 34, 130, 40, '力（N）', C.red, FILL.red, 15), lb(160, 54, '×', 18, C.ink, 'middle', true), bx(170, 34, 130, 40, '距離（m）', C.green, FILL.green, 15), ar(160, 80, 160, 98, C.ink), bx(90, 102, 140, 34, '仕事（J）', C.blue, FILL.blue, 16)], '仕事 ＝ 力 × 距離') },
  { note: '❓手で加える力は、何Nなの？→一定の速さで持ち上げるときは、力がつり合っています。手が上向きに引く力は、物体にはたらく重力とちょうど同じ大きさです。加速させる必要がないからです。', add: S([bx(120, 70, 60, 44, '5kg', C.gray, FILL.gray, 14), ar(140, 66, 140, 28, C.green), ar(160, 116, 160, 146, C.red), lb(130, 40, '手の力', 10, C.green, 'end', true), lb(172, 136, '重力', 10, C.red, 'start', true)], '一定の速さ → つり合い\n手の力 ＝ 重力') },
  { note: '❓5kgの重力は何N？→まず質量をgにします。5kg＝5000gです。100gで1Nなので、5000÷100＝50Nです。', add: S([bx(20, 34, 130, 40, '5kg ＝ 5000g', C.gray, FILL.gray, 14), ar(155, 54, 175, 54, C.ink), bx(180, 34, 120, 40, '50N', C.red, FILL.red, 18), lb(160, 104, '100g で 1N → 50個ぶん', 12, C.ink, 'middle', true)], '5000 ÷ 100 ＝ 50N', C.red, FILL.red) },
  { note: '仕事を計算します。力50N×距離2m＝100Jです。', add: S([bx(20, 34, 130, 40, '50N', C.red, FILL.red, 18), lb(160, 54, '×', 18, C.ink, 'middle', true), bx(170, 34, 130, 40, '2m', C.green, FILL.green, 18), ar(160, 80, 160, 98, C.ink), bx(90, 102, 140, 34, '100J', C.blue, FILL.blue, 18)], '50 × 2 ＝ 100J', C.blue, FILL.blue) },
  { note: '答えは100Jです。', add: S([bx(30, 40, 260, 60, '仕事 ＝ 100J', C.green, FILL.green, 22)], '答え　100J', C.green, FILL.green) },
  { note: '確かめ（検算）です。1Jは「1Nの力で1m動かす仕事」で、100gの物体を1m持ち上げる仕事にあたります。5kgは100gの50個ぶんで、2m持ち上げるので50×2＝100Jです。', add: S([bx(20, 34, 130, 40, '100g を 1m → 1J', C.gray, FILL.gray, 12), bx(170, 34, 130, 40, '50個 × 2m → 100J', C.green, FILL.green, 12), lb(160, 104, '別の数え方でも 100J ○', 13, C.ink, 'middle', true)], '1Jの感覚で 確かめる', C.green, FILL.green) },
  { note: '❓高さを2倍の4mにしたら？→力は同じ50Nで、距離が2倍なので、仕事も2倍の200Jです。仕事は、力が同じなら距離に比例します。', add: S([bx(20, 34, 130, 40, '2m → 100J', C.gray, FILL.gray, 14), bx(170, 34, 130, 40, '4m → 200J', C.green, FILL.green, 14), lb(160, 104, '距離が2倍 → 仕事も2倍', 13, C.ink, 'middle', true)], '力が同じなら 仕事は距離に比例') },
  { note: '❓斜面や滑車を使っても、仕事は変わらないの？→使うと力は小さくなりますが、そのぶん動かす距離が長くなり、仕事は同じです（仕事の原理）。この問題で直接持ち上げるときの100Jは、道具を使っても変わりません。', add: S([bx(20, 34, 130, 40, '直接\n50N × 2m', C.gray, FILL.gray, 12), bx(170, 34, 130, 40, '斜面（例）\n25N × 4m', C.blue, FILL.blue, 12), lb(160, 104, 'どちらも 100J', 14, C.green, 'middle', true)], '道具を使っても 仕事は同じ') },
  { note: 'よくあるまちがいです。質量5kgをそのまま5Nとして使い、5×2＝10Jとしてしまうこと。質量（kg）は力（N）ではありません。100gが1Nの決まりで、5kgは50Nです。', add: S([bx(20, 24, 280, 40, '✕ 5kg を 5N として 5×2＝10J', C.red, FILL.red, 13), ar(160, 68, 160, 86, C.ink), bx(20, 90, 280, 40, '○ 5kg ＝ 50N として 50×2＝100J', C.green, FILL.green, 13)], 'kg は 力ではない') },
], '仕事＝力×距離：質量を力に直してから');

// ───────── 花火と音 ─────────
const kurume_rika_05: DiagramFigure = show([
  { note: '音の速さを340m/sとします。花火が光ってから3秒後に音が聞こえました。花火までの距離を求めます。', add: S([ci(40, 60, 16, '花火', C.red, FILL.red, 9), ci(280, 100, 12, '人', C.blue, FILL.blue, 10), ln(58, 66, 268, 98, C.gray, true, 1.5), lb(160, 66, '距離？', 12, C.ink, 'middle', true), lb(160, 120, '光ってから 3秒後に音', 12, C.ink, 'middle', true)], '音の速さ 340m/s\n光ってから3秒後に音') },
  { note: '❓なぜ、光の時間は考えなくていいの？→光は1秒に約30万km（地球を7周半）進むので、1000m先でもほんの一瞬で届きます。花火が光るのとほぼ同時に見えるので、3秒は「音が伝わるのにかかった時間」だと考えます。', add: S([bx(20, 34, 130, 40, '光\n1秒に約30万km', C.main, FILL.yellow, 12), bx(170, 34, 130, 40, '音\n1秒に340m', C.blue, FILL.blue, 12), lb(160, 104, '光は一瞬 → 時間は無視', 13, C.ink, 'middle', true)], '3秒 ＝ 音が伝わる時間') },
  { note: '❓距離は、なぜ「速さ×時間」で求まるの？→音は1秒に340m進みます。3秒あれば、その340mを3回分進みます。だから340×3で求められます。', add: S([bx(20, 40, 92, 40, '1秒\n340m', C.blue, FILL.blue, 13), bx(114, 40, 92, 40, '2秒\n340m', C.blue, FILL.blue, 13), bx(208, 40, 92, 40, '3秒\n340m', C.blue, FILL.blue, 13), lb(160, 108, '340m が 3回分', 14, C.ink, 'middle', true)], '1秒ごとに 340m 進む') },
  { note: '計算します。距離＝速さ×時間＝340×3＝1020mです。', add: S([bx(20, 34, 130, 40, '340m/s', C.blue, FILL.blue, 15), lb(160, 54, '×', 18, C.ink, 'middle', true), bx(170, 34, 130, 40, '3秒', C.blue, FILL.blue, 15), ar(160, 80, 160, 98, C.ink), bx(90, 102, 140, 34, '1020m', C.green, FILL.green, 18)], '340 × 3 ＝ 1020m', C.green, FILL.green) },
  { note: '答えは1020mです。', add: S([ci(40, 60, 16, '花火', C.red, FILL.red, 9), ci(280, 100, 12, '人', C.blue, FILL.blue, 10), ln(58, 66, 268, 98, C.green, false, 2.5), lb(160, 64, '1020m', 14, C.green, 'middle', true)], '答え　1020m', C.green, FILL.green) },
  { note: '確かめ（検算）です。距離÷速さ＝時間なので、1020÷340＝3秒で、問題の3秒と一致します。', add: S([bx(20, 34, 130, 40, '1020m ÷ 340', C.gray, FILL.gray, 14), ar(155, 54, 175, 54, C.ink), bx(180, 34, 120, 40, '3秒 ○', C.green, FILL.green, 16)], '逆算して もとの3秒にもどる', C.green, FILL.green) },
  { note: '❓光の時間は、本当に無視できるの？→光が1020mを進む時間は、1020÷300000000＝約0.0000034秒（100万分の3.4秒）です。3秒にくらべて小さすぎるので、ないものとして考えて問題ありません。', add: S([bx(20, 34, 130, 40, '光の時間\n約0.0000034秒', C.main, FILL.yellow, 11), bx(170, 34, 130, 40, '音の時間\n3秒', C.blue, FILL.blue, 13), lb(160, 104, '比べると ほぼ0', 14, C.ink, 'middle', true)], '光の時間は 無視できる') },
  { note: '❓音が1秒ずれると、距離はどれだけちがう？→340mです。雷が光ってから音が聞こえるまでの秒数を数えると、3秒で約1km（1020m）、6秒で約2kmと、おおよその距離が分かります。', add: S([bx(20, 34, 130, 40, '1秒 → 約340m', C.blue, FILL.blue, 13), bx(170, 34, 130, 40, '3秒 → 約1km', C.blue, FILL.blue, 13), lb(160, 104, '数えた秒数 × 340m', 13, C.ink, 'middle', true)], '秒数を数えれば 距離が分かる') },
  { note: '❓340m/sは、いつでも同じ？→音の速さは空気の温度でわずかに変わります。約15℃で340m/s、温度が高いと少し速くなります。問題で「340m/sとする」と指定されているときは、その値を使います。', add: S([bx(20, 34, 130, 40, '約15℃\n340m/s', C.blue, FILL.blue, 13), bx(170, 34, 130, 40, '温度が高い\n少し速い', C.red, FILL.red, 13), lb(160, 104, '問題の値を使う', 13, C.ink, 'middle', true)], '速さは 問題で指定された値') },
  { note: 'よくあるまちがいです。光の速さまで足して考えたり、「3秒」を速さの数字と混ぜたりすること。3秒は、音が伝わった時間そのもので、距離は340×3です。光の時間を加える必要はありません。', add: S([bx(20, 24, 280, 40, '✕ 光の時間も考えて 複雑にする', C.red, FILL.red, 13), ar(160, 68, 160, 86, C.ink), bx(20, 90, 280, 40, '○ 3秒 ＝ 音の時間 → 340 × 3 ＝ 1020m', C.green, FILL.green, 13)], '光は一瞬 → 音の時間だけ') },
], '音の速さ×時間＝距離');

// ───────── 円外の点から2本の割線 ─────────
const sP: Pt = [142, 75], sO: Pt = [220, 75];
const sd1: Pt = [Math.cos(0.588), -Math.sin(0.588)], sd2: Pt = [Math.cos(0.2845), Math.sin(0.2845)];
const along = (d: Pt, t: number): Pt => [sP[0] + d[0] * t, sP[1] + d[1] * t];
const sA = along(sd1, 40), sB = along(sd1, 90), sC = along(sd2, 30), sD = along(sd2, 120);
const secBase = (): E[] => [ci(sO[0], sO[1], 50, undefined, C.gray, 'rgba(2,132,199,0.07)'), ln(sP[0], sP[1], sB[0], sB[1], C.blue, false, 2), ln(sP[0], sP[1], sD[0], sD[1], C.red, false, 2), dot(sP[0], sP[1]), nm(sP[0] - 10, sP[1] + 4, 'P'), dot(sA[0], sA[1]), nm(sA[0] - 2, sA[1] - 8, 'A'), dot(sB[0], sB[1]), nm(sB[0] + 6, sB[1] - 6, 'B'), dot(sC[0], sC[1]), nm(sC[0] - 4, sC[1] + 14, 'C'), dot(sD[0], sD[1]), nm(sD[0] + 10, sD[1] + 8, 'D')];
const taki_sansu_13: DiagramFigure = show([
  { note: '円の外の点Pから2本の直線を引きます。1本目は円と点A、Bで交わり、PA＝4cm、AB＝5cm。2本目は円と点C、Dで交わり、PC＝3cmです。CDの長さを求めます。', add: S([...secBase(), lb(14, 28, 'PA＝4　AB＝5', 10, C.blue, 'start', true), lb(14, 128, 'PC＝3　CD＝？', 10, C.red, 'start', true)], 'PA＝4　AB＝5　PC＝3\nCD＝？') },
  { note: '❓どんな関係を使えばいいの？→円の外の点から引いた2本の直線では、「PA×PB＝PC×PD」という関係が成り立ちます。ここでは、この関係がなぜ成り立つのかを、相似を使って確かめます。まず、ACとBDを結びます。', add: S([...secBase(), ln(sA[0], sA[1], sC[0], sC[1], C.green, false, 2), ln(sB[0], sB[1], sD[0], sD[1], C.green, false, 2)], 'AC と BD を結ぶ\n△PAC と △PDB に注目') },
  { note: '❓∠PACと∠PDBは、なぜ等しいの？→A・B・D・Cは円周上にあるので、四角形ABDCは円に内接しています。向かい合う角の和は180°なので、∠CAB＋∠CDB＝180°。また、∠PAC＋∠CAB＝180°（一直線）です。だから∠PAC＝∠CDB＝∠PDBです。', add: S([...secBase(), ln(sA[0], sA[1], sC[0], sC[1], C.green, false, 2), ln(sB[0], sB[1], sD[0], sD[1], C.green, false, 2), ...arcs2(sA, sP, sC, 14, C.purple, 1), ...arcs2(sD, sP, sB, 16, C.purple, 1)], '内接四角形 → 向かい合う角の和180°\n∠PAC ＝ ∠PDB（●）', C.purple, FILL.purple) },
  { note: '❓相似と言える理由は？→∠PAC＝∠PDB（●）に加えて、∠Pは△PACと△PDBに共通です。2組の角がそれぞれ等しいので、△PAC∽△PDBです。', add: S([pg([sP, sA, sC], C.blue, BLUE_T), pg([sP, sD, sB], C.red, RED_T), ...secBase(), ln(sA[0], sA[1], sC[0], sC[1], C.green, false, 2), ln(sB[0], sB[1], sD[0], sD[1], C.green, false, 2)], '∠P は共通　∠PAC＝∠PDB\n→ △PAC ∽ △PDB', C.ink, FILL.warm) },
  { note: '❓相似だと、辺の比はどうなるの？→対応する辺の比が等しくなります。△PACの辺PAに対応するのは△PDBの辺PD、PCに対応するのはPB（P↔P、A↔D、C↔B）です。よってPA：PD＝PC：PB。', add: S([bx(20, 34, 130, 40, '△ P A C', C.blue, FILL.blue, 16), bx(170, 34, 130, 40, '△ P D B', C.red, FILL.red, 16), lb(160, 98, 'P↔P　A↔D　C↔B', 13, C.ink, 'middle', true), lb(160, 118, 'PA : PD ＝ PC : PB', 14, C.green, 'middle', true)], '対応する辺の比は等しい') },
  { note: '❓そこから、PA×PB＝PC×PDは、どう出るの？→比PA：PD＝PC：PBで、内側どうし（PDとPC）と外側どうし（PAとPB）をそれぞれかけると等しくなります。PA×PB＝PC×PDです。', add: S([bx(20, 34, 280, 34, 'PA : PD ＝ PC : PB', C.gray, FILL.gray, 15), ar(160, 72, 160, 90, C.ink), bx(20, 94, 280, 34, 'PA × PB ＝ PC × PD', C.green, FILL.green, 16)], '外どうしの積 ＝ 内どうしの積', C.green, FILL.green) },
  { note: '❓PBは何cm？→AはP・B のあいだにあるので、PB＝PA＋AB＝4＋5＝9cmです。PA×PB＝4×9＝36です。', add: S([...secBase(), lb(14, 28, 'PB＝4＋5＝9', 10, C.blue, 'start', true)], 'PA×PB ＝ 4 × 9 ＝ 36', C.blue, FILL.blue) },
  { note: '❓PDは何cm？→PC×PD＝36で、PC＝3cmなので、PD＝36÷3＝12cmです。', add: S([bx(20, 34, 130, 40, '3 × PD ＝ 36', C.red, FILL.red, 14), ar(155, 54, 175, 54, C.ink), bx(180, 34, 120, 40, 'PD ＝ 12', C.red, FILL.red, 16)], 'PD ＝ 36 ÷ 3 ＝ 12cm', C.red, FILL.red) },
  { note: '❓CDは何cm？→CはP・Dのあいだにあるので、CD＝PD－PC＝12－3＝9cmです。', add: S([...secBase(), lb(14, 128, 'CD＝12－3＝9', 10, C.red, 'start', true)], 'CD ＝ 12 － 3 ＝ 9cm', C.green, FILL.green) },
  { note: '答えは CD＝9cm です。', add: S([bx(30, 40, 260, 60, 'CD ＝ 9cm', C.green, FILL.green, 22)], '答え　CD＝9cm', C.green, FILL.green) },
  { note: '確かめ（検算）です。PA×PB＝4×9＝36、PC×PD＝3×12＝36で、両方が36になり、関係が成り立っています。', add: S([bx(20, 34, 130, 40, '4 × 9 ＝ 36', C.blue, FILL.blue, 15), bx(170, 34, 130, 40, '3 × 12 ＝ 36', C.red, FILL.red, 15), lb(160, 104, '2つの積が 同じ ○', 14, C.green, 'middle', true)], '外どうしの積が 一致', C.green, FILL.green) },
  { note: 'よくあるまちがいです。PB、PDを「Pから遠いほうの交点までの距離」ではなく、PA＋ABやPC＋CDと取りちがえること。遠いほうの交点までは、近い交点までと、その間の長さを足したものです。今回は、PB＝PA＋AB＝9、PD＝12です。', add: S([bx(20, 24, 280, 40, '✕ PB を AB（5）のまま使う', C.red, FILL.red, 13), ar(160, 68, 160, 86, C.ink), bx(20, 90, 280, 40, '○ PB ＝ PA＋AB ＝ 9（Pから遠い交点まで）', C.green, FILL.green, 12)], 'P から 遠い交点までの 全体の長さ') },
], '2本の直線でできる相似から長さを求める');

// ───────── y＝ax²（負の数の2乗）─────────
const ohori_sansu_05: DiagramFigure = (() => {
  const sx = 36, sy = 4.4, ox = 160, oy = 138;
  const X = (x: number) => ox + x * sx, Y = (y: number) => oy - y * sy;
  const curve = (): E[] => { const o: E[] = []; for (let i = 0; i < 48; i++) { const a = -3.2 + (6.4 * i) / 48, b = -3.2 + (6.4 * (i + 1)) / 48; if (3 * b * b <= 29) o.push(ln(X(a), Y(3 * a * a), X(b), Y(3 * b * b), C.blue, false, 2)); } return o; };
  const axes = (): E[] => [ln(X(-3.6), Y(0), X(3.6), Y(0), C.gray, false, 1.2), ln(X(0), Y(0), X(0), Y(29), C.gray, false, 1.2), lb(X(3.6), Y(0) - 4, 'x', 10, C.gray, 'end', true), lb(X(0) + 5, 12, 'y', 10, C.gray, 'start', true)];
  const base = (): E[] => [...axes(), ...curve()];
  return show([
    { note: '2次関数y＝ax²のグラフが点(2, 12)を通ります。aの値を求め、このグラフ上でx＝－3のときのyの値を求めます。', add: S([...base(), dot(X(2), Y(12), C.red, 3.5), lb(X(2) + 8, Y(12), '(2, 12)', 11, C.red, 'start', true)], 'y＝ax²　点(2, 12)を通る\na は？　x＝－3 のとき y は？') },
    { note: '❓点を通るというのは、式ではどういうこと？→グラフ上の点は、x座標とy座標が式を満たします。x＝2、y＝12を y＝ax² に代入すると、aだけが残ります。', add: S([bx(20, 34, 280, 36, 'y ＝ a x²　に　x＝2、y＝12', C.gray, FILL.gray, 14), ar(160, 74, 160, 92, C.ink), bx(20, 96, 280, 36, '12 ＝ a × 2² ＝ 4a', C.green, FILL.green, 15)], '通る点は 式に代入できる') },
    { note: '12＝4aの両辺を4でわって、a＝3です。式はy＝3x²と決まりました。', add: S([bx(20, 34, 130, 40, '12 ＝ 4a', C.gray, FILL.gray, 15), ar(155, 54, 175, 54, C.ink), bx(180, 34, 120, 40, 'a ＝ 3', C.green, FILL.green, 17), lb(160, 104, 'y ＝ 3x²', 15, C.blue, 'middle', true)], 'a ＝ 3　（12÷4）', C.green, FILL.green) },
    { note: '❓x＝－3のときのyは、どう求めるの？→y＝3x²のxに－3を入れます。y＝3×(－3)²です。負の数を入れるときは、かっこをつけるのが大切です。', add: S([bx(20, 34, 280, 36, 'y ＝ 3 × x²', C.gray, FILL.gray, 15), ar(160, 74, 160, 92, C.ink), bx(20, 96, 280, 36, 'y ＝ 3 × (－3)²', C.green, FILL.green, 15)], '負の数は かっこをつけて 代入') },
    { note: '❓(－3)²は、いくつ？なぜ？→(－3)²は、(－3)×(－3)のことです。負の数どうしをかけると正の数になるので、＋9です。（－3²と書くと、3²に－をつけた－9の意味になり、別ものです。）', add: S([bx(20, 30, 130, 40, '(－3)² ＝ (－3)×(－3)\n＝ 9', C.green, FILL.green, 11), bx(170, 30, 130, 40, '－3² ＝ －(3×3)\n＝ －9', C.red, FILL.red, 11), lb(160, 100, 'かっこがあるかどうかで ちがう', 13, C.ink, 'middle', true)], '(－3)² ＝ 9　と　－3² ＝ －9') },
    { note: '計算します。y＝3×9＝27です。', add: S([bx(20, 34, 130, 40, '3 × 9', C.gray, FILL.gray, 17), ar(155, 54, 175, 54, C.ink), bx(180, 34, 120, 40, '27', C.green, FILL.green, 20)], 'x＝－3 のとき y ＝ 27', C.green, FILL.green) },
    { note: '❓グラフで見ると？→y＝3x²のグラフはy軸について左右対称です。x＝－3の点（－3, 27）は、x＝3の点（3, 27）と、同じ高さにあります。xの符号が逆でもyが同じになるのは、2乗すると正になるからです。', add: S([...base(), dot(X(-3), Y(27), C.red, 3.5), dot(X(3), Y(27), C.red, 3.5), ln(X(-3), Y(27), X(3), Y(27), C.red, true, 1.6), lb(X(-3) + 6, Y(27) + 12, '(－3, 27)', 10, C.red, 'start', true), lb(X(3) - 6, Y(27) + 12, '(3, 27)', 10, C.red, 'end', true)], 'y軸について 左右対称\nxが ±3 → どちらも y＝27', C.red, FILL.red) },
    { note: '答えは、a＝3、y＝27です。', add: S([bx(30, 40, 260, 60, 'a ＝ 3　　y ＝ 27', C.green, FILL.green, 22)], '答え　a＝3、y＝27', C.green, FILL.green) },
    { note: '確かめ（検算）です。y＝3x²に(2, 12)を入れると3×4＝12で、最初の点を通っています。x＝3でも3×9＝27となり、x＝－3のときと同じ値です。', add: S([bx(20, 30, 280, 34, 'x＝2：3 × 4 ＝ 12 ○', C.gray, FILL.gray, 15), bx(20, 74, 280, 34, 'x＝3：3 × 9 ＝ 27 ○（x＝－3と同じ）', C.green, FILL.green, 13)], '対称性でも 確認できる', C.green, FILL.green) },
    { note: 'よくあるまちがいです。(－3)²を－9として、y＝－27と答えること。かっこがあるので(－3)×(－3)＝9です。2乗は、負の数でも必ず0以上になります。', add: S([bx(20, 24, 280, 40, '✕ (－3)² ＝ －9 → y ＝ －27', C.red, FILL.red, 14), ar(160, 68, 160, 86, C.ink), bx(20, 90, 280, 40, '○ (－3)² ＝ 9 → y ＝ 27', C.green, FILL.green, 14)], '2乗は 必ず0以上') },
  ], 'y＝ax²のaを求めて、負のxを代入する');
})();

export const figuresSchoolKoko05: Record<string, Figure> = {
  'azabu_sansu_09': azabu_sansu_09,
  'nanzan_sansu_15': nanzan_sansu_15,
  'nanzan_sansu_06': nanzan_sansu_06,
  'seinan_sansu_14': seinan_sansu_14,
  'azabu_sansu_10': azabu_sansu_10,
  'seinan_sansu_07': seinan_sansu_07,
  'kurume_sansu_10': kurume_sansu_10,
  'ohori_sansu_06': ohori_sansu_06,
  'nanzan_sansu_02': nanzan_sansu_02,
  'nanzan_sansu_14': nanzan_sansu_14,
  'nanzan_sansu_16': nanzan_sansu_16,
  'azabu_rika_11': azabu_rika_11,
  'taki_rika_08': taki_rika_08,
  'nanzan_rika_12': nanzan_rika_12,
  'seinan_rika_11': seinan_rika_11,
  'kurume_rika_16': kurume_rika_16,
  'seinan_rika_15': seinan_rika_15,
  'taki_rika_07': taki_rika_07,
  'kurume_rika_13': kurume_rika_13,
  'taki_rika_03': taki_rika_03,
  'kurume_rika_03': kurume_rika_03,
  'azabu_rika_04': azabu_rika_04,
  'azabu_rika_01': azabu_rika_01,
  'nanzan_rika_02': nanzan_rika_02,
  'koko_kanto2026_rika_030': koko_kanto2026_rika_030,
  'nanzan_rika_05': nanzan_rika_05,
  'nanzan_rika_11': nanzan_rika_11,
  'azabu_sansu_08': azabu_sansu_08,
  'azabu_sansu_11': azabu_sansu_11,
  'azabu_sansu_12': azabu_sansu_12,
  'azabu_sansu_14': azabu_sansu_14,
  'azabu_sansu_15': azabu_sansu_15,
  'nanzan_sansu_04': nanzan_sansu_04,
  'nanzan_sansu_11': nanzan_sansu_11,
  'seinan_sansu_10': seinan_sansu_10,
  'ohori_sansu_12': ohori_sansu_12,
  'azabu_sansu_16': azabu_sansu_16,
  'seinan_sansu_16': seinan_sansu_16,
  'kurume_sansu_09': kurume_sansu_09,
  'kurume_sansu_14': kurume_sansu_14,
  'kurume_sansu_16': kurume_sansu_16,
  'kurume_sansu_02': kurume_sansu_02,
  'taki_sansu_08': taki_sansu_08,
  'ohori_sansu_04': ohori_sansu_04,
  'taki_sansu_16': taki_sansu_16,
  'koko_kanto2026_rika_028': koko_kanto2026_rika_028,
  'azabu_rika_14': azabu_rika_14,
  'seinan_rika_10': seinan_rika_10,
  'seinan_rika_03': seinan_rika_03,
  'taki_rika_10': taki_rika_10,
  'seinan_rika_16': seinan_rika_16,
  'kurume_rika_05': kurume_rika_05,
  'taki_sansu_13': taki_sansu_13,
  'ohori_sansu_05': ohori_sansu_05,
};
