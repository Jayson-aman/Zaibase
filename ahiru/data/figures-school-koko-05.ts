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
  { note: '❓なぜ△ADEと△ABCは相似だと言えるの？→DE∥BCなので、同位角が等しくなります。∠ADE＝∠ABC（●）、∠AED＝∠ACB（▲）。さらに∠Aは2つの三角形に共通です。2組の角が等しいので相似です。', add: S([parShade(), ...parBase(), ...parAngles(), nm(160, 28, '共通')], '∠A は共通　●どうし　▲どうし\n→ 2組の角が等しい') },
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
  { note: '❓その比から、△ABCの面積は？→△ADE（8cm²）が4つぶん。1つぶんは8÷4＝2cm²。△ABCは25つぶんなので2×25＝50cm²です。', add: S(par5bars(4, 25, '', '').map((e) => e).slice(0, 0).concat([lb(14, 50, '△ADE', 11, C.blue, 'start', true), lb(14, 100, '△ABC', 11, C.green, 'start', true), ...Array.from({ length: 4 }, (_, i) => bx(60 + i * 10, 38, 10, 24, undefined, C.blue, FILL.blue, 9)), ...Array.from({ length: 25 }, (_, i) => bx(60 + i * 10, 88, 10, 24, undefined, C.green, FILL.green, 9)), lb(80, 30, '4つぶん＝8', 10, C.blue, 'middle', true), lb(185, 80, '25つぶん＝？', 10, C.green, 'middle', true)]), '1つぶん＝8÷4＝2cm²\n△ABC＝2×25＝50cm²', C.green, FILL.green) },
  { note: '❓四角形DBCEの面積は、どう求めるの？→△ABCは、△ADEと四角形DBCEをあわせたものです。だから四角形DBCE＝△ABC−△ADE＝50−8＝42cm²です。', add: S([pg([pA, pB, pC], C.ink, 'none'), parShade(), pg([pD, pB, pC, pE], C.red, RED_T), ln(pD[0], pD[1], pE[0], pE[1], C.red, false, 2.5), nm(160, 9, 'A'), nm(38, 143, 'B'), nm(282, 143, 'C'), nm(106, 60, 'D'), nm(214, 60, 'E'), lb(160, 38, '8', 12, C.blue, 'middle', true), lb(160, 100, '42', 14, C.red, 'middle', true)], '△ABC ＝ △ADE ＋ 四角形DBCE\n四角形DBCE ＝ 50－8 ＝ 42cm²', C.red, FILL.red) },
  { note: '答えは 42cm² です。', add: S([pg([pA, pB, pC], C.ink, 'none'), parShade(), pg([pD, pB, pC, pE], C.red, RED_T), ln(pD[0], pD[1], pE[0], pE[1], C.red, false, 2.5), nm(160, 9, 'A'), nm(38, 143, 'B'), nm(282, 143, 'C'), lb(160, 100, '42cm²', 14, C.red, 'middle', true), lb(160, 38, '8', 12, C.blue, 'middle', true)], '答え　42cm²', C.green, FILL.green) },
  { note: '確かめ（検算）です。面積比を4:25としたとき、四角形DBCEは25−4＝21つぶんです。1つぶん2cm²なので21×2＝42cm²で、先ほどと一致します。', add: S([bx(20, 30, 280, 34, '△ADE 4つぶん ＋ 四角形 21つぶん ＝ 25つぶん', C.gray, FILL.gray, 12), bx(20, 74, 280, 34, '21 × 2cm² ＝ 42cm² ○', C.green, FILL.green, 15)], '別の数え方でも 42cm²', C.green, FILL.green) },
  { note: 'よくあるまちがいです。面積比を相似比のまま2:5として、8×5÷2＝20を△ABCの面積にしてしまうこと。面積は2乗なので4:25です。20としてしまうと四角形も12になり、誤りです。', add: S([bx(20, 24, 280, 40, '✕ 面積比 2:5 → △ABC＝20 → 12', C.red, FILL.red, 13), ar(160, 68, 160, 86, C.ink), bx(20, 90, 280, 40, '○ 面積比 4:25 → △ABC＝50 → 42', C.green, FILL.green, 13)], '面積比 ＝ 相似比の2乗') },
], 'DE∥BCの相似と面積比から、四角形の面積を求める');

export const figuresSchoolKoko05: Record<string, Figure> = {
  'azabu_sansu_09': azabu_sansu_09,
  'nanzan_sansu_15': nanzan_sansu_15,
  'nanzan_sansu_06': nanzan_sansu_06,
  'seinan_sansu_14': seinan_sansu_14,
  'azabu_sansu_10': azabu_sansu_10,
  'seinan_sansu_07': seinan_sansu_07,
  'kurume_sansu_10': kurume_sansu_10,
  'ohori_sansu_06': ohori_sansu_06,
};
