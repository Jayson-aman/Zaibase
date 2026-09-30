// 高校受験・理科（formulas-koko-rika.ts）の以前からある項目、図を持たない53番目〜65番目の動く図解スライド。
// キーは項目の label（買い切りの識別キー）。「なぜ？」の連鎖で、根っこまでたどる。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, show, band, fresh, flow } from './diagram-kit';

type E = DiagramElement;
const BY = 152; // 下の帯の開始位置
const cap = (t: string, col: string = C.green, fill: string = FILL.green, size = 13): E => bx(14, 166, 292, 50, t, col, fill, size);
const cell = (x: number, y: number, w: number, h: number, t: string, col: string = C.gray, fill: string = FILL.gray, size = 10): E => bx(x, y, w, h, t, col, fill, size);

// ══ 蒸散量の計算（ワセリンの実験）══
const leafD = (cx: number, y: number, top: boolean, bot: boolean): E[] => [
  pg([[cx - 20, y], [cx, y - 13], [cx + 20, y]], top ? C.gray : C.green, top ? FILL.gray : FILL.green),
  pg([[cx - 20, y], [cx, y + 13], [cx + 20, y]], bot ? C.gray : C.green, bot ? FILL.gray : FILL.green),
];
const branch = (cx: number, top: boolean, bot: boolean, drop: number, name: string, ml?: string): E[] => {
  const lvl = 44 - drop;
  const out: E[] = [
    ...leafD(cx, 28, top, bot),
    bx(cx - 16, 70, 32, 58, undefined, C.gray, '#FFFFFF'),
    bx(cx - 15, 128 - lvl, 30, lvl, undefined, C.blue, FILL.blue),
    bx(cx - 15, 124 - lvl, 30, 4, undefined, C.main, FILL.yellow),
    ln(cx, 41, cx, 100, C.green, false, 2),
  ];
  if (drop > 0) out.push(ln(cx - 20, 80, cx + 20, 80, C.red, true));
  out.push(lb(cx, 138, name, 9, C.ink, 'middle', true));
  if (ml) out.push(lb(cx, 159, ml, 10, C.red, 'middle', true));
  return out;
};
const XS = [45, 115, 185, 255];
const NAMES = ['A\n何もぬらない', 'B\n表にぬる', 'C\n裏にぬる', 'D\n表と裏にぬる'];
const scene = (reveal: number): E[] => {
  const cfg: [boolean, boolean, number, string][] = [[false, false, 30, '10mL減'], [true, false, 24, '8mL減'], [false, true, 12, '4mL減'], [true, true, 6, '2mL減']];
  const out: E[] = [];
  cfg.forEach((c, i) => out.push(...branch(XS[i], c[0], c[1], i < reveal ? c[2] : 0, NAMES[i], i < reveal ? c[3] : undefined)));
  if (reveal === 0) out.push(lb(70, 22, '表', 9, C.gray, 'start'), lb(70, 36, '裏', 9, C.gray, 'start'));
  return out;
};
const bigLeaf = (top: boolean): E[] => [
  pg([[100, 62], [160, 26], [220, 62]], top ? C.gray : C.green, top ? FILL.gray : FILL.green),
  pg([[100, 62], [160, 98], [220, 62]], C.green, FILL.green),
];
const jousan: DiagramFigure = show([
  {
    note: '葉にワセリンをぬると、ぬった所の気孔（水蒸気の出口）がふさがれます。実験では、同じような枝を4本用意します。A何もぬらない、B葉の表にぬる、C葉の裏にぬる、D表と裏の両方にぬる。❓では、これで何が分かるのでしょう。水の減り方をくらべると、葉の表・裏・茎のどこから水が出ているかが分かります。',
    add: [...scene(0), cap('4本の水の減り方をくらべる', C.blue, FILL.blue)],
  },
  {
    note: '試験管の水は、時間がたつと減ります。❓その水はどこへ行ったのでしょう。根の代わりに切り口から吸い上げられた水が、葉の気孔から水蒸気になって空気中へ出ていったのです。これが蒸散です。',
    add: fresh(...bigLeaf(false), ci(130, 82, 4, undefined, C.gray, '#FFFFFF'), ci(160, 94, 4, undefined, C.gray, '#FFFFFF'), ci(190, 82, 4, undefined, C.gray, '#FFFFFF'), ar(130, 88, 130, 124, C.blue), ar(160, 100, 160, 132, C.blue), ar(190, 88, 190, 124, C.blue), lb(160, 142, '水蒸気', 12, C.blue, 'middle', true), lb(240, 84, '気孔', 11, C.gray, 'start'), cap('水が気孔から水蒸気になって出る ＝ 蒸散', C.blue, FILL.blue)),
  },
  {
    note: '❓なぜ水面に油をうかべるのでしょう。油がないと、水面から直接蒸発する分がまざってしまい、減った水がぜんぶ蒸散だとは言えなくなるからです。油でふたをすれば、減った水 ＝ 葉から出ていった水になります。',
    add: fresh(bx(70, 40, 40, 70, undefined, C.gray, '#FFFFFF'), bx(71, 70, 38, 39, undefined, C.blue, FILL.blue), ar(80, 66, 80, 34, C.red), ar(100, 66, 100, 34, C.red), lb(90, 24, '水面から蒸発', 10, C.red, 'middle', true), bx(210, 40, 40, 70, undefined, C.gray, '#FFFFFF'), bx(211, 70, 38, 39, undefined, C.blue, FILL.blue), bx(211, 66, 38, 5, undefined, C.main, FILL.yellow), lb(230, 30, '油でふたをする', 10, C.main, 'middle', true), lb(90, 124, '油なし', 12, C.red, 'middle', true), lb(230, 124, '油あり', 12, C.green, 'middle', true), cap('油があれば、減った水 ＝ 蒸散した水')),
  },
  {
    note: 'ワセリンをぬると、その部分は気孔がふさがれて蒸散できません。❓これがなぜ実験に使えるのでしょう。ぬる場所を変えれば、ぬった部分から出なくなった分だけ水の減りが少なくなるので、どの部分からどれだけ出ていたかが差で分かるからです。',
    add: fresh(...bigLeaf(true), lb(160, 44, 'ワセリン', 10, C.gray, 'middle', true), ar(160, 20, 160, 8, C.gray, true), lb(196, 14, '×', 16, C.red, 'middle', true), ar(130, 88, 130, 124, C.blue), ar(160, 96, 160, 128, C.blue), ar(190, 88, 190, 124, C.blue), lb(160, 140, '裏からは出る', 11, C.blue, 'middle', true), cap('ぬった所は蒸散できない', C.gray, FILL.gray)),
  },
  {
    note: 'Aは何もぬっていないので、表・裏・茎のぜんぶから蒸散して10mL減りました。式にすると、A ＝ 表 ＋ 裏 ＋ 茎 ＝ 10mL です。茎からも少し水が出ます。',
    add: fresh(...scene(1), cap('A ＝ 表 ＋ 裏 ＋ 茎 ＝ 10mL', C.blue, FILL.blue)),
  },
  {
    note: 'Bは表にぬったので、表からは水が出ません。裏と茎だけで8mL減りました。❓Aより減りが少ないのはなぜ？ 表から出るはずだった分が止まったからです。だから、Aとの差 10 − 8 ＝ 2mL が、表からの蒸散量です。',
    add: fresh(...scene(2), cap('B ＝ 裏 ＋ 茎 ＝ 8mL\n表 ＝ 10 − 8 ＝ 2mL', C.blue, FILL.blue)),
  },
  {
    note: 'Cは裏にぬったので、表と茎だけで4mL減りました。❓Aとの差は何を表す？ 裏をふさいだせいで出なくなった分です。10 − 4 ＝ 6mL が、裏からの蒸散量です。',
    add: fresh(...scene(3), cap('C ＝ 表 ＋ 茎 ＝ 4mL\n裏 ＝ 10 − 4 ＝ 6mL', C.blue, FILL.blue)),
  },
  {
    note: '❓なぜ引き算で求められるのでしょう。AとBのちがいは「表をぬったかどうか」だけです。それ以外は同じ条件なので、水の減りの差は、表から出ていた分だけになります。Cも同じで、A − C が裏の分です。',
    add: fresh(lb(20, 18, 'A', 12, C.ink, 'start', true), bx(50, 6, 40, 26, '表2', C.blue, FILL.blue, 11), bx(90, 6, 120, 26, '裏6', C.red, FILL.red, 11), bx(210, 6, 40, 26, '茎2', C.gray, FILL.gray, 11), lb(20, 58, 'B', 12, C.ink, 'start', true), bx(90, 46, 120, 26, '裏6', C.red, FILL.red, 11), bx(210, 46, 40, 26, '茎2', C.gray, FILL.gray, 11), lb(66, 59, '表なし', 10, C.gray, 'middle'), lb(20, 98, 'C', 12, C.ink, 'start', true), bx(50, 86, 40, 26, '表2', C.blue, FILL.blue, 11), bx(210, 86, 40, 26, '茎2', C.gray, FILL.gray, 11), lb(150, 99, '裏なし', 10, C.gray, 'middle'), cap('A − B ＝ 10 − 8 ＝ 2mL（表）\nA − C ＝ 10 − 4 ＝ 6mL（裏）', C.green, FILL.green, 12)),
  },
  {
    note: 'Dは表も裏もふさぐので、残るのは茎だけです。❓茎は何mLでしょう。10 − 2 − 6 ＝ 2mL なので、Dをやれば2mL減るはずです。検算もしましょう。B ＝ 6 ＋ 2 ＝ 8mL、C ＝ 2 ＋ 2 ＝ 4mL。実験の値とぴったり合います。',
    add: fresh(...scene(4), cap('茎 ＝ 10 − 2 − 6 ＝ 2mL\n検算 6＋2＝8 ○　2＋2＝4 ○', C.green, FILL.green, 12)),
  },
  {
    note: '❓なぜ裏のほうが多いのでしょう。ふつうの植物は、気孔が葉の裏に多いからです。だから裏をふさぐと、水の減り方が大きく変わります。表2mLに対して裏6mLで、裏は表の3倍です。',
    add: fresh(bx(100, 116, 50, 24, undefined, C.blue, FILL.blue), bx(170, 68, 50, 72, undefined, C.red, FILL.red), lb(125, 104, '表 2mL', 11, C.blue, 'middle', true), lb(195, 56, '裏 6mL', 11, C.red, 'middle', true), lb(160, 20, '気孔の数のちがい', 12, C.ink, 'middle', true), cap('気孔は葉の裏に多い → 裏は表の3倍')),
  },
  {
    note: '❓蒸散がさかんになるのは、どんなときでしょう。気温が高い・湿度が低い・風がある・光が当たる、のときです。なぜ？ 洗たく物がよく乾く条件と同じで、水が水蒸気になって出ていきやすいからです。光が当たると気孔が開くことも理由です。',
    add: fresh(bx(14, 10, 140, 34, '気温が高い', C.red, FILL.red, 13), bx(166, 10, 140, 34, '湿度が低い', C.blue, FILL.blue, 13), bx(14, 56, 140, 34, '風がある', C.green, FILL.green, 13), bx(166, 56, 140, 34, '光が当たる', C.main, FILL.yellow, 13), ar(160, 96, 160, 116, C.ink), lb(160, 130, '蒸散がさかんになる', 14, C.ink, 'middle', true), cap('洗たく物が乾く条件と同じ')),
  },
]);

// ══ 根・茎・葉のつくりと水の通り道 ══
const bundle = (cx: number, cy: number, x: number, y: number, dokan: string = C.blue, big = false): E[] => {
  const dx = x - cx, dy = y - cy;
  const d = Math.max(1, Math.hypot(dx, dy));
  const k = big ? 1.6 : 1;
  return [ci(x, y, 7 * k, undefined, C.green, FILL.green), ci(x - (dx / d) * 3 * k, y - (dy / d) * 3 * k, 3.5 * k, undefined, dokan, dokan === C.blue ? FILL.blue : FILL.red)];
};
const ringSec = (cx: number, cy: number, R: number, dokan: string = C.blue): E[] => {
  const out: E[] = [ci(cx, cy, R, undefined, C.green, FILL.warm)];
  for (let i = 0; i < 8; i++) {
    const a = (i * Math.PI) / 4;
    out.push(...bundle(cx, cy, cx + R * 0.62 * Math.cos(a), cy + R * 0.62 * Math.sin(a), dokan));
  }
  return out;
};
const scatSec = (cx: number, cy: number, R: number, dokan: string = C.blue): E[] => {
  const pts: [number, number][] = [[-0.5, -0.5], [0.15, -0.65], [0.6, -0.2], [-0.2, -0.05], [0.35, 0.2], [-0.6, 0.3], [0.05, 0.55], [0.6, 0.6]];
  const out: E[] = [ci(cx, cy, R, undefined, C.green, FILL.warm)];
  pts.forEach((p) => out.push(...bundle(cx, cy, cx + p[0] * R, cy + p[1] * R, dokan)));
  return out;
};
const upDown = (): E[] => [bx(110, 8, 100, 26, '葉', C.green, FILL.green, 12), bx(110, 114, 100, 26, '根', C.main, FILL.warm, 12)];
const konKuki: DiagramFigure = show([
  {
    note: '赤い色水に切った植物をさして数時間おくと、茎の一部だけが赤く染まります。❓どこが染まるのでしょう。水が通っている場所です。それを道管といいます。',
    add: [...ringSec(110, 72, 56, C.red), ar(214, 40, 150, 56, C.red), lb(220, 34, '赤く染まる ＝\n水の通り道', 11, C.red, 'start', true), lb(110, 140, '茎の断面', 11, C.gray, 'middle'), cap('赤く染まる所 ＝ 道管', C.red, FILL.red)],
  },
  {
    note: '茎の中には管が2種類あります。道管は水と、水にとけた養分を運びます。師管は葉でつくられた栄養分を運びます。❓なぜ2本に分かれているのでしょう。運ぶ物も、向きも逆だからです。',
    add: fresh(...upDown(), ar(140, 112, 140, 38, C.blue), ar(180, 38, 180, 112, C.green), lb(8, 76, '道管\n水・水にとけた養分\n上向き', 10, C.blue, 'start', true), lb(196, 76, '師管\n葉でつくった栄養分\n主に下向き', 10, C.green, 'start', true), cap('運ぶ物も向きも逆だから、2本ある', C.blue, FILL.blue)),
  },
  {
    note: '❓なぜ道管は上向きなのでしょう。根で吸った水を、茎の上や葉へ送るのが仕事だからです。葉の気孔から水が蒸散で出ていくと、そのぶんの水が引き上げられます。',
    add: fresh(...upDown(), ar(140, 112, 140, 38, C.blue), lb(190, 60, '蒸散で水が出る', 11, C.blue, 'start', true), ar(196, 46, 196, 34, C.blue), lb(190, 100, '根から水を吸う', 11, C.main, 'start', true), cap('根の水 → 上へ → 葉から蒸散', C.blue, FILL.blue)),
  },
  {
    note: '❓では、なぜ師管は主に下向きなのでしょう。養分をつくる光合成は葉で行われます。でも養分は、茎・根・実など体のあちこちで使います。葉でつくった養分を、下へ配って回るのが師管です。',
    add: fresh(...upDown(), ar(180, 38, 180, 112, C.green), lb(8, 60, '葉：光合成で\n養分をつくる', 10, C.green, 'start', true), lb(8, 106, '根・茎・実：\n養分を使う', 10, C.main, 'start', true), lb(196, 76, '師管が配る', 11, C.green, 'start', true), cap('葉でつくった養分を、体じゅうへ配る', C.green, FILL.green)),
  },
  {
    note: '道管と師管が集まって、束になったものを維管束といいます。茎の断面では、道管が内側、師管が外側にならびます。',
    add: fresh(lb(160, 10, '↑ 茎の外がわ', 10, C.gray, 'middle'), bx(100, 22, 120, 44, '師管（外側）', C.green, FILL.green, 14), bx(100, 66, 120, 44, '道管（内側）', C.blue, FILL.blue, 14), lb(160, 122, '↓ 茎の中心がわ', 10, C.gray, 'middle'), lb(232, 66, '2つで\n維管束', 12, C.ink, 'start', true), cap('道管は内側・師管は外側', C.blue, FILL.blue)),
  },
  {
    note: '双子葉類では、維管束が輪のようにならびます。根は太い主根から細い側根が枝分かれします。',
    add: fresh(...ringSec(80, 72, 56), ln(240, 16, 240, 120, C.main, false, 3), ln(240, 50, 210, 70, C.main), ln(240, 50, 270, 70, C.main), ln(240, 80, 208, 104, C.main), ln(240, 80, 272, 104, C.main), lb(80, 140, '維管束は輪', 11, C.ink, 'middle', true), lb(240, 136, '主根と側根', 11, C.ink, 'middle', true), cap('双子葉類：維管束は輪／根は主根と側根', C.green, FILL.green, 12)),
  },
  {
    note: '単子葉類では、維管束が茎の中に散らばります。根は同じような太さの細い根がたくさん広がる、ひげ根です。',
    add: fresh(...scatSec(80, 72, 56), ln(240, 20, 240, 60, C.main, false, 2), ...[-40, -25, -12, 0, 12, 25, 40].map((dx) => ln(240, 60, 240 + dx, 118, C.main)), lb(80, 140, '維管束は散らばる', 11, C.ink, 'middle', true), lb(240, 136, 'ひげ根', 11, C.ink, 'middle', true), cap('単子葉類：維管束は散在／根はひげ根', C.green, FILL.green, 12)),
  },
  {
    note: '❓なぜ「子葉の数」で、双子葉と単子葉を区別できるのでしょう。子葉の数・根の形・維管束の並び・葉脈の形が、いつもセットで決まっているからです。子葉が2枚なら、あとの3つも決まります。',
    add: fresh(cell(8, 6, 76, 24, '', C.gray, FILL.gray), cell(88, 6, 106, 24, '双子葉類', C.blue, FILL.blue, 12), cell(198, 6, 106, 24, '単子葉類', C.main, FILL.warm, 12), cell(8, 34, 76, 26, '子葉', C.gray, FILL.gray, 11), cell(88, 34, 106, 26, '2枚', C.blue, FILL.blue, 12), cell(198, 34, 106, 26, '1枚', C.main, FILL.warm, 12), cell(8, 64, 76, 26, '根', C.gray, FILL.gray, 11), cell(88, 64, 106, 26, '主根と側根', C.blue, FILL.blue, 11), cell(198, 64, 106, 26, 'ひげ根', C.main, FILL.warm, 11), cell(8, 94, 76, 26, '維管束', C.gray, FILL.gray, 11), cell(88, 94, 106, 26, '輪状', C.blue, FILL.blue, 11), cell(198, 94, 106, 26, '散在', C.main, FILL.warm, 11), cell(8, 124, 76, 26, '葉脈', C.gray, FILL.gray, 11), cell(88, 124, 106, 26, '網目状', C.blue, FILL.blue, 11), cell(198, 124, 106, 26, '平行', C.main, FILL.warm, 11), cap('4つはセット。1つ分かれば残りも決まる', C.green, FILL.green, 12)),
  },
  {
    note: '色水の実験では、茎を横に切って、赤く染まった点（道管）の並び方を見ます。❓なぜ分かるのでしょう。道管は維管束の中にあるので、赤い点の並びがそのまま維管束の並びになるからです。輪なら双子葉、散らばっていれば単子葉です。',
    add: fresh(...ringSec(80, 64, 50, C.red), ...scatSec(240, 64, 50, C.red), lb(80, 126, '輪 → 双子葉類', 11, C.blue, 'middle', true), lb(240, 126, '散らばる → 単子葉類', 11, C.main, 'middle', true), cap('赤い点の並び方で、双子葉か単子葉かが分かる', C.red, FILL.red, 12)),
  },
  {
    note: 'まとめです。道管は内側・水を上へ、師管は外側・栄養分を下へ。2つで維管束。双子葉は輪状、単子葉は散在。赤い色水で染まるのは道管です。',
    add: fresh(bx(20, 12, 280, 30, '道管：内側・水と養分（上向き）', C.blue, FILL.blue, 13), bx(20, 50, 280, 30, '師管：外側・葉でつくった栄養分（下向き）', C.green, FILL.green, 13), bx(20, 88, 280, 30, '双子葉は輪状／単子葉は散在', C.main, FILL.warm, 13), bx(20, 126, 280, 30, '色水で赤く染まるのは道管', C.red, FILL.red, 13)),
  },
]);

// ══ 植物の分類（中学）══
const tb = (x: number, y: number, w: number, h: number, t: string, hi: string | null, col: string = C.gray, fill: string = FILL.gray, size = 10): E =>
  bx(x, y, w, h, t, hi === t.split('\n')[0] ? C.red : col, hi === t.split('\n')[0] ? FILL.red : fill, size);
const treeRoot = (): E[] => [bx(110, 4, 100, 22, '植物', C.ink, '#FFFFFF', 12)];
const treeL1 = (): E[] => [ar(150, 26, 78, 40, C.gray), ar(170, 26, 242, 40, C.gray), bx(8, 40, 140, 28, '種子をつくる', C.green, FILL.green, 12), bx(172, 40, 140, 28, '種子をつくらない（胞子）', C.blue, FILL.blue, 11)];
const treeSeed = (hi: string | null = null): E[] => [ar(60, 68, 48, 84, C.gray), ar(96, 68, 122, 84, C.gray), tb(8, 84, 80, 28, '被子植物', hi, C.green, FILL.green, 11), tb(96, 84, 52, 28, '裸子植物', hi, C.green, FILL.green, 10)];
const treeCot = (): E[] => [ar(40, 112, 27, 124, C.gray), ar(56, 112, 69, 124, C.gray), bx(8, 124, 38, 24, '双子葉', C.green, FILL.green, 10), bx(50, 124, 38, 24, '単子葉', C.green, FILL.green, 10)];
const treeSpore = (hi: string | null = null): E[] => [ar(230, 68, 205, 84, C.gray), ar(254, 68, 279, 84, C.gray), tb(172, 84, 66, 28, 'シダ植物', hi, C.blue, FILL.blue, 11), tb(246, 84, 66, 28, 'コケ植物', hi, C.blue, FILL.blue, 11)];
const bunrui: DiagramFigure = show([
  {
    note: '植物を分けるとき、最初の目印は「種子をつくるかどうか」です。❓なぜ種子で分けるのでしょう。ふえ方がちがうからです。種子は栄養をたくわえた「入れもの」に守られて芽を出します。胞子は栄養がなく、とても小さいので、しめった所でしか育ちません。',
    add: [...treeRoot(), ...treeL1(), ...band(BY, cap('目印1：種子をつくるか', C.green, FILL.green))],
  },
  {
    note: '種子をつくる植物を、さらに分けます。❓何で分けるのでしょう。子房があるかどうかです。子房は、花の中で胚珠を包んでいる部分。子房がある被子植物は、胚珠が守られています。子房がなく、胚珠がむき出しなのが裸子植物です。',
    add: [...treeSeed(), ...band(BY, cap('目印2：子房がある＝被子　ない＝裸子', C.green, FILL.green))],
  },
  {
    note: '❓裸子植物とはどんな植物でしょう。「裸（はだか）の子（種子）」という意味で、胚珠がむき出しです。マツ・イチョウ・スギ・ソテツがなかまです。子房がないので実はできません。イチョウのぎんなんは、実ではなく種子です。',
    add: [...treeSeed('裸子植物'), ...band(BY, cap('裸子植物：マツ・イチョウ・スギ・ソテツ\n子房がないので実はできない', C.red, FILL.red, 12))],
  },
  {
    note: '被子植物は、子葉（芽生えで最初に出る葉）の数で、さらに2つに分けます。子葉が2枚なら双子葉類、1枚なら単子葉類です。',
    add: [...treeSeed(), ...treeCot(), ...band(BY, cap('目印3：子葉が2枚＝双子葉　1枚＝単子葉'))],
  },
  {
    note: '❓なぜ子葉の数で分ければ十分なのでしょう。子葉の数・根の形・維管束の並び・葉脈の形が、いつもセットで決まっているからです。子葉が2枚なら、根は主根と側根、維管束は輪、葉脈は網目状です。',
    add: fresh(cell(8, 6, 76, 24, '', C.gray, FILL.gray), cell(88, 6, 106, 24, '双子葉類', C.blue, FILL.blue, 12), cell(198, 6, 106, 24, '単子葉類', C.main, FILL.warm, 12), cell(8, 34, 76, 26, '子葉', C.gray, FILL.gray, 11), cell(88, 34, 106, 26, '2枚', C.blue, FILL.blue, 12), cell(198, 34, 106, 26, '1枚', C.main, FILL.warm, 12), cell(8, 64, 76, 26, '根', C.gray, FILL.gray, 11), cell(88, 64, 106, 26, '主根と側根', C.blue, FILL.blue, 11), cell(198, 64, 106, 26, 'ひげ根', C.main, FILL.warm, 11), cell(8, 94, 76, 26, '維管束', C.gray, FILL.gray, 11), cell(88, 94, 106, 26, '輪状', C.blue, FILL.blue, 11), cell(198, 94, 106, 26, '散在', C.main, FILL.warm, 11), cell(8, 124, 76, 26, '葉脈', C.gray, FILL.gray, 11), cell(88, 124, 106, 26, '網目状', C.blue, FILL.blue, 11), cell(198, 124, 106, 26, '平行', C.main, FILL.warm, 11), cap('4つはセット', C.green, FILL.green)),
  },
  {
    note: '種子をつくらない植物は、胞子でふえます。❓これを何で分けるのでしょう。維管束があるかどうかです。維管束は水や養分の通り道です。あればシダ植物、なければコケ植物です。',
    add: fresh(...treeRoot(), ...treeL1(), ...treeSpore(), cap('目印4：維管束あり＝シダ　なし＝コケ', C.blue, FILL.blue)),
  },
  {
    note: 'シダ植物のイヌワラビには、根・茎・葉の区別があります。コケ植物のゼニゴケやスギゴケには、根・茎・葉の区別がありません。根のように見える仮根は、体を固定するだけで、水は吸いません。',
    add: fresh(bx(10, 8, 145, 30, 'シダ植物（イヌワラビ）', C.blue, FILL.blue, 11), bx(165, 8, 145, 30, 'コケ植物（ゼニゴケなど）', C.blue, FILL.blue, 10), bx(10, 48, 145, 28, '維管束あり', C.green, FILL.green, 12), bx(165, 48, 145, 28, '維管束なし', C.red, FILL.red, 12), bx(10, 84, 145, 28, '根・茎・葉の区別あり', C.green, FILL.green, 11), bx(165, 84, 145, 28, '区別なし（仮根で固定）', C.red, FILL.red, 11), bx(10, 120, 145, 24, '胞子でふえる', C.gray, FILL.gray, 11), bx(165, 120, 145, 24, '胞子でふえる', C.gray, FILL.gray, 11), cap('コケには維管束も根茎葉の区別もない', C.red, FILL.red)),
  },
  {
    note: '❓なぜコケ植物は背が低いのでしょう。水を上へ運ぶ維管束がないので、体の表面から水を吸うしかなく、体を大きくできないからです。シダ植物は維管束があるので、背の高いものもあります。',
    add: fresh(ln(80, 120, 80, 30, C.green, false, 3), ar(72, 110, 72, 40, C.blue), ln(80, 60, 55, 44, C.green, false, 2), ln(80, 60, 105, 44, C.green, false, 2), lb(80, 134, 'シダ：維管束で水を運ぶ', 10, C.blue, 'middle', true), bx(200, 106, 24, 14, undefined, C.green, FILL.green), bx(228, 100, 24, 20, undefined, C.green, FILL.green), bx(256, 108, 24, 12, undefined, C.green, FILL.green), ar(212, 132, 212, 122, C.blue), ar(240, 132, 240, 122, C.blue), lb(240, 142, 'コケ：体の表面から水を吸う', 10, C.blue, 'middle', true), cap('維管束がない → 大きくなれない', C.blue, FILL.blue)),
  },
  {
    note: '全体をまとめると、植物は「種子をつくるか → 子房があるか → 子葉の数」、または「胞子でふえる → 維管束があるか」の順に枝分かれしていきます。',
    add: fresh(...treeRoot(), ...treeL1(), ...treeSeed(), ...treeCot(), ...treeSpore(), lb(210, 130, 'シダ:イヌワラビ　コケ:ゼニゴケ', 9, C.gray, 'middle'), cap('種子 → 子房 → 子葉の数／胞子 → 維管束', C.green, FILL.green, 12)),
  },
  {
    note: '練習です。マツは被子植物ですか、裸子植物ですか。マツの胚珠は子房に包まれていないので、裸子植物です。子房がないので、実もできません。',
    add: fresh(...treeRoot(), ...treeL1(), ...treeSeed('裸子植物'), ...treeCot(), ...treeSpore(), cap('マツ → 胚珠がむき出し → 裸子植物', C.red, FILL.red)),
  },
]);

// ══ 細胞のつくりと観察 ══
const animCell = (): E[] => [ci(80, 72, 54, undefined, C.blue, FILL.yellow)];
const plantCell = (): E[] => [bx(168, 14, 142, 116, undefined, C.main, '#FFFFFF'), bx(174, 20, 130, 104, undefined, C.blue, FILL.yellow)];
const nuc = (x: number, y: number): E => ci(x, y, 13, '核', C.red, FILL.red, 10);
const saibou: DiagramFigure = show([
  {
    note: '動物の細胞（左）と植物の細胞（右）を見くらべます。❓中にはどんなつくりがあり、何がちがうのでしょう。',
    add: [...animCell(), ...plantCell(), lb(80, 140, '動物の細胞', 11, C.ink, 'middle', true), lb(240, 140, '植物の細胞', 11, C.ink, 'middle', true), cap('動物と植物の細胞。何がちがう？', C.blue, FILL.blue)],
  },
  {
    note: 'まず共通のつくりです。核・細胞質（細胞膜の内側のやわらかい部分）・細胞膜（細胞を包むうすい膜）は、動物にも植物にもあります。',
    add: [nuc(80, 72), nuc(210, 50), lb(80, 112, '細胞膜', 10, C.blue, 'middle', true), lb(80, 94, '細胞質', 10, C.gray, 'middle'), lb(262, 116, '細胞膜', 10, C.blue, 'middle', true), ...band(BY, cap('共通：核・細胞質・細胞膜'))],
  },
  {
    note: '植物の細胞にだけあるのが、細胞壁・葉緑体・液胞です。細胞壁は細胞膜の外側のかたい壁、葉緑体は緑色の粒、液胞は水などがたまった大きな袋です。',
    add: [ci(258, 82, 22, '液胞', C.blue, FILL.blue, 10), ci(196, 100, 6, undefined, C.green, FILL.green), ci(290, 42, 6, undefined, C.green, FILL.green), ci(232, 34, 6, undefined, C.green, FILL.green), lb(204, 100, '葉緑体', 9, C.green, 'start', true), ln(300, 18, 312, 8, C.main, false, 2), lb(312, 6, '細胞壁', 10, C.main, 'end', true), ...band(BY, cap('植物だけ：細胞壁・葉緑体・液胞', C.main, FILL.warm))],
  },
  {
    note: '❓なぜ植物にだけあるのでしょう。植物は動けないからです。細胞壁はかたい壁で体を支え、葉緑体は光合成で自分で養分をつくり、液胞は水や養分をためます。動物は動いて食べ物を探せるので、これらは要りません。',
    add: fresh(bx(10, 10, 92, 34, '細胞壁', C.main, FILL.warm, 13), bx(114, 10, 92, 34, '葉緑体', C.green, FILL.green, 13), bx(218, 10, 92, 34, '液胞', C.blue, FILL.blue, 13), ar(56, 46, 56, 64, C.gray), ar(160, 46, 160, 64, C.gray), ar(264, 46, 264, 64, C.gray), bx(10, 66, 92, 44, '体を支える', C.ink, '#FFFFFF', 12), bx(114, 66, 92, 44, '光合成で\n養分をつくる', C.ink, '#FFFFFF', 12), bx(218, 66, 92, 44, '水や養分を\nためる', C.ink, '#FFFFFF', 12), lb(160, 130, '動けない植物に必要なはたらき', 12, C.ink, 'middle', true), cap('動けないから、自分で支え・つくり・ためる')),
  },
  {
    note: '核は、そのままだと透明に近くて見えにくいです。❓なぜ染めるのでしょう。染色液で核だけが赤く染まると、細胞の数や核の位置がはっきり見えるからです。酢酸カーミン液や酢酸オルセイン液を使います。',
    add: fresh(...[0, 1, 2].flatMap((i) => [bx(20 + i * 44, 24, 38, 38, undefined, C.gray, '#FFFFFF'), ci(39 + i * 44, 43, 5, undefined, '#D6D3D1', '#F5F5F4')]), ...[0, 1, 2].flatMap((i) => [bx(180 + i * 44, 24, 38, 38, undefined, C.gray, '#FFFFFF'), ci(199 + i * 44, 43, 5, undefined, C.red, FILL.red)]), lb(80, 78, '染める前：見えにくい', 10, C.gray, 'middle', true), lb(240, 78, '染めた後：核が赤い', 10, C.red, 'middle', true), ar(150, 43, 172, 43, C.ink), cap('核 → 酢酸カーミン液・酢酸オルセイン液で赤く染まる', C.red, FILL.red, 12)),
  },
  {
    note: '❓ヨウ素液とはどうちがうのでしょう。調べたいものがちがいます。酢酸カーミン液は核を染める液、ヨウ素液はデンプンを調べる液です。用途をまちがえないようにします。',
    add: fresh(bx(14, 20, 140, 44, '酢酸カーミン液\n酢酸オルセイン液', C.red, FILL.red, 12), bx(166, 20, 140, 44, 'ヨウ素液', C.purple, FILL.purple, 13), ar(84, 66, 84, 92, C.red), ar(236, 66, 236, 92, C.purple), bx(14, 94, 140, 34, '核を染める（赤）', C.red, FILL.red, 12), bx(166, 94, 140, 34, 'デンプンを調べる', C.purple, FILL.purple, 12), cap('染める物がちがう。用途をまちがえない', C.red, FILL.red)),
  },
  {
    note: '顕微鏡の倍率は、接眼レンズと対物レンズの倍率をかけ算した値です。❓なぜかけ算なのでしょう。対物レンズで10倍にした像を、さらに接眼レンズで10倍に広げて見るので、倍率が重なるからです。10 × 40 ＝ 400倍。',
    add: fresh(bx(14, 30, 86, 50, '接眼レンズ\n10倍', C.blue, FILL.blue, 12), lb(112, 55, '×', 20, C.ink, 'middle', true), bx(124, 30, 86, 50, '対物レンズ\n40倍', C.blue, FILL.blue, 12), lb(222, 55, '＝', 20, C.ink, 'middle', true), bx(234, 30, 76, 50, '400倍', C.red, FILL.red, 16), cap('倍率 ＝ 接眼レンズ × 対物レンズ\n10 × 40 ＝ 400倍', C.blue, FILL.blue, 12)),
  },
  {
    note: '倍率を上げると、視野（見える範囲）はせまく、暗くなります。❓なぜ暗くなるのでしょう。せまい範囲を大きく引きのばして見るので、同じ量の光がうすく広がってしまうからです。',
    add: fresh(ci(80, 70, 56, '低倍率\n広い・明るい', C.blue, FILL.yellow, 11), ci(240, 70, 24, undefined, C.gray, FILL.gray), lb(240, 70, '高倍率', 10, C.ink, 'middle', true), lb(240, 110, 'せまい・暗い', 10, C.gray, 'middle', true), ar(142, 70, 210, 70, C.ink), cap('倍率を上げる → 視野はせまく暗くなる', C.red, FILL.red)),
  },
  {
    note: '❓なぜ、まず低倍率から見るのでしょう。高倍率は視野がせまく、探したいものがどこにあるか分からなくなるからです。低倍率で見つけて中央に寄せてから、倍率を上げます。',
    add: fresh(...flow(['低倍率で\n探す', '見たい物を\n中央に', '高倍率に\nする'], 24, { h: 56, color: C.blue, fill: FILL.blue, size: 12 }).flat(), lb(160, 110, '順番をまもる', 13, C.ink, 'middle', true), cap('低倍率 → 中央に寄せる → 高倍率', C.blue, FILL.blue)),
  },
  {
    note: 'ピントを合わせるときは、横から見ながら対物レンズをプレパラートに近づけ、次に接眼レンズをのぞきながら、遠ざけてピントを合わせます。❓なぜ遠ざける向きなのでしょう。のぞいたまま近づけると、レンズがプレパラートにぶつかって、割れるおそれがあるからです。',
    add: fresh(...flow(['横から見て\n近づける', 'のぞきながら\n遠ざける', 'ピントが\n合う'], 24, { h: 56, color: C.green, fill: FILL.green, size: 12 }).flat(), lb(160, 110, '近づけるときは横から', 13, C.red, 'middle', true), cap('のぞきながら近づけるのは危険（割れる）', C.red, FILL.red)),
  },
  {
    note: 'まとめです。共通は核・細胞質・細胞膜、植物だけは細胞壁・葉緑体・液胞。核は酢酸カーミン液などで赤く染めます。倍率は接眼 × 対物、高倍率ほど視野は暗くせまくなります。',
    add: fresh(bx(20, 10, 280, 30, '共通：核・細胞質・細胞膜', C.blue, FILL.blue, 13), bx(20, 48, 280, 30, '植物だけ：細胞壁・葉緑体・液胞', C.green, FILL.green, 13), bx(20, 86, 280, 30, '核は酢酸カーミン液で赤く染める', C.red, FILL.red, 13), bx(20, 124, 280, 30, '倍率 ＝ 接眼 × 対物（高倍率は暗くせまい）', C.main, FILL.warm, 12)),
  },
]);

// ══ 消化酵素のはたらき（中学）══
const NUT = ['デンプン', 'タンパク質', '脂肪'];
const FIN = ['ブドウ糖', 'アミノ酸', '脂肪酸と\nモノグリセリド'];
const RY = [34, 70, 106];
const mx = (col: number, mark: string[]): E[] => {
  const xs = [76, 132, 188];
  const heads = ['だ液', '胃液', 'すい液'];
  const out: E[] = [cell(xs[col], 8, 52, 22, heads[col], C.blue, FILL.blue, 11)];
  mark.forEach((m, r) => out.push(cell(xs[col], RY[r], 52, 30, m, m === '○' ? C.green : C.gray, m === '○' ? FILL.green : FILL.gray, 15)));
  return out;
};
const mxBase = (): E[] => [cell(4, 8, 68, 22, '栄養分', C.ink, '#FFFFFF', 11), cell(244, 8, 72, 22, '最終産物', C.ink, '#FFFFFF', 10), ...NUT.map((n, r) => cell(4, RY[r], 68, 30, n, C.main, FILL.warm, 10)), ...FIN.map((f, r) => cell(244, RY[r], 72, 30, f, C.purple, FILL.purple, 9))];
const shouka: DiagramFigure = show([
  {
    note: '❓なぜ食べ物を消化するのでしょう。食べ物の粒は大きすぎて、小腸の壁を通れないからです。壁を通れる小さな粒にまで分解することを、消化といいます。',
    add: [ln(160, 10, 160, 60, C.ink, false, 3), ln(160, 90, 160, 132, C.ink, false, 3), lb(110, 40, '通れない', 10, C.red, 'middle', true), ci(112, 78, 22, '大きい\n粒', C.red, FILL.red, 10), ci(230, 70, 4, undefined, C.green, FILL.green), ci(244, 84, 4, undefined, C.green, FILL.green), ci(222, 92, 4, undefined, C.green, FILL.green), ar(190, 76, 214, 76, C.green), lb(238, 46, '小さい粒は\n通れる', 10, C.green, 'middle', true), lb(160, 144, '小腸の壁', 10, C.gray, 'middle'), cap('小さく分解しないと 体に取り入れられない', C.blue, FILL.blue)],
  },
  {
    note: '3つの栄養分は、それぞれ決まった小さな物質にまで分解されます。デンプンはブドウ糖に、タンパク質はアミノ酸に、脂肪は脂肪酸とモノグリセリドになります。',
    add: fresh(...NUT.flatMap((n, r) => [cell(10, RY[r] - 12, 90, 34, n, C.main, FILL.warm, 12), ar(104, RY[r] + 5, 206, RY[r] + 5, C.gray), cell(210, RY[r] - 12, 100, 34, FIN[r].replace('\n', ''), C.purple, FILL.purple, 10)]), lb(155, 12, '分解', 11, C.gray, 'middle', true), cap('デンプン→ブドウ糖／タンパク質→アミノ酸\n脂肪→脂肪酸とモノグリセリド', C.blue, FILL.blue, 11)),
  },
  {
    note: '❓では、この分解をするのは何でしょう。消化酵素です。酵素は、決まった物質にだけはたらきます。なぜ？ かぎと鍵穴のように、形がぴったり合う相手にしかはたらけないからです。',
    add: fresh(bx(120, 20, 80, 40, '消化酵素', C.blue, FILL.blue, 13), ar(130, 62, 70, 96, C.green), ar(190, 62, 250, 96, C.gray, true), bx(20, 98, 100, 32, 'デンプン専用', C.green, FILL.green, 11), bx(200, 98, 100, 32, '別の物質', C.gray, FILL.gray, 11), lb(84, 76, '合う', 12, C.green, 'middle', true), lb(238, 76, '合わない', 12, C.red, 'middle', true), cap('酵素は決まった物質にだけはたらく', C.blue, FILL.blue)),
  },
  {
    note: 'だ液にふくまれるアミラーゼは、デンプンだけを分解します。タンパク質や脂肪には何もしません。',
    add: fresh(...mxBase(), ...mx(0, ['○', '×', '×']), lb(160, 152, 'だ液（アミラーゼ）', 10, C.blue, 'middle'), cap('だ液 ＝ デンプンだけ', C.blue, FILL.blue)),
  },
  {
    note: '胃液にふくまれるペプシンは、タンパク質だけを分解します。❓デンプンや脂肪はどうなる？ ペプシンの相手ではないので、そのまま次へ進みます。',
    add: fresh(...mxBase(), ...mx(0, ['○', '×', '×']), ...mx(1, ['×', '○', '×']), cap('胃液（ペプシン）＝ タンパク質だけ', C.blue, FILL.blue)),
  },
  {
    note: '❓では、すい液は？ すい液には3種類の酵素がふくまれていて、デンプン・タンパク質・脂肪のすべてにはたらきます。1つで全部をこなすのは、すい液だけです。',
    add: fresh(...mxBase(), ...mx(0, ['○', '×', '×']), ...mx(1, ['×', '○', '×']), ...mx(2, ['○', '○', '○']), cap('すい液 ＝ 3つすべてにはたらく', C.green, FILL.green)),
  },
  {
    note: '胆汁（たんじゅう）には消化酵素がふくまれていません。❓ではなぜ必要なのでしょう。脂肪は水にまざりにくいので、胆汁が細かい粒にして、酵素とふれる面を増やしてくれるからです。助けるだけで、自分では分解しません。',
    add: fresh(ci(70, 60, 40, '脂肪の\nかたまり', C.main, FILL.yellow, 11), ar(114, 60, 176, 60, C.green), lb(145, 46, '胆汁', 12, C.green, 'middle', true), ...[[210, 40], [236, 52], [222, 68], [252, 72], [204, 80], [240, 92], [268, 46]].map((p) => ci(p[0], p[1], 8, undefined, C.main, FILL.yellow)), lb(236, 116, '細かい粒（酵素がふれやすい）', 10, C.ink, 'middle'), cap('胆汁：酵素なし。脂肪を細かくする助け', C.green, FILL.green)),
  },
  {
    note: '酵素がいちばんよくはたらく温度は、体温くらい（約40℃）です。❓なぜ高温ではだめなのでしょう。酵素は熱で変化してしまい、はたらけなくなるからです。だ液の実験で40℃の湯を使うのはこのためです。',
    add: fresh(ln(34, 14, 34, 122, C.ink, false, 2), ln(34, 122, 300, 122, C.ink, false, 2), ln(34, 118, 90, 96, C.blue, false, 2), ln(90, 96, 150, 56, C.blue, false, 2), ln(150, 56, 200, 24, C.blue, false, 2), ln(200, 24, 214, 26, C.blue, false, 2), ln(214, 26, 246, 80, C.red, false, 2), ln(246, 80, 262, 118, C.red, false, 2), ln(200, 24, 200, 122, C.gray, true), lb(200, 134, '約40℃', 11, C.ink, 'middle', true), lb(300, 134, '温度', 10, C.gray, 'end'), lb(40, 12, 'はたらきの大きさ', 10, C.gray, 'start'), lb(262, 64, '熱で変化\nはたらけない', 10, C.red, 'middle', true), cap('体温くらいで最もよくはたらく', C.red, FILL.red)),
  },
  {
    note: 'だ液の実験です。デンプン液にだ液を入れて40℃の湯につけたAと、水を入れたBを比べ、ヨウ素液を加えます。ヨウ素液は、デンプンがあると青紫色になります。❓結果は？ Aは色が変わらず、Bは青紫色。だ液がデンプンを分解して、なくしたことが分かります。',
    add: fresh(bx(40, 30, 50, 60, undefined, C.gray, FILL.yellow), bx(210, 30, 50, 60, undefined, C.gray, FILL.purple), lb(65, 20, 'A デンプン＋だ液', 10, C.ink, 'middle', true), lb(235, 20, 'B デンプン＋水', 10, C.ink, 'middle', true), lb(65, 60, '変化\nなし', 11, C.ink, 'middle', true), lb(235, 60, '青紫', 12, C.purple, 'middle', true), lb(65, 106, 'デンプンが\nなくなった', 10, C.green, 'middle', true), lb(235, 106, 'デンプンが\nのこっている', 10, C.purple, 'middle', true), cap('ヨウ素液：デンプンがあると青紫色', C.purple, FILL.purple)),
  },
  {
    note: '食べ物が通る順に見ると、口でだ液がデンプンを、胃で胃液がタンパク質を分解し、最後に小腸で、すい液と小腸の壁の酵素が仕上げをします。',
    add: fresh(...flow(['口\nだ液', '胃\n胃液', '小腸\nすい液・腸'], 20, { h: 52, color: C.blue, fill: FILL.blue, size: 11 }).flat(), lb(160, 100, '順に分解して、最後は吸収できる大きさに', 11, C.ink, 'middle', true), cap('小腸で ブドウ糖・アミノ酸・脂肪酸と\nモノグリセリドになる', C.blue, FILL.blue, 11)),
  },
  {
    note: 'まとめです。だ液はデンプン、胃液はタンパク質、すい液は3つすべて。胆汁に酵素はなく、脂肪を細かくする助けだけ。酵素は約40℃でよくはたらきます。',
    add: fresh(bx(20, 10, 280, 28, 'だ液：デンプン／胃液：タンパク質', C.blue, FILL.blue, 12), bx(20, 46, 280, 28, 'すい液：3つすべて', C.green, FILL.green, 13), bx(20, 82, 280, 28, '胆汁：酵素なし。脂肪を細かくする', C.main, FILL.warm, 12), bx(20, 118, 280, 28, '酵素は約40℃で最もはたらく', C.red, FILL.red, 13)),
  },
]);

// ══ 吸収と柔毛のしくみ（中学）══
const juumo = (n: number, x0: number, y: number, w: number, h: number): E[] => Array.from({ length: n }, (_, i) => bx(x0 + i * (w + 4), y - h, w, h, undefined, C.main, FILL.warm));
const kyuushuu: DiagramFigure = show([
  {
    note: '消化で小さくなった栄養分は、小腸の壁から体の中へ吸収されます。❓では吸収されたあと、どこへ行くのでしょう。それを順に見ていきます。',
    add: [...flow(['消化された\n栄養分', '小腸の壁で\n吸収', '血液へ'], 24, { h: 56, color: C.blue, fill: FILL.blue, size: 12 }).flat(), lb(160, 110, 'どこから、どうやって入る？', 13, C.ink, 'middle', true), cap('小腸で吸収される', C.blue, FILL.blue)],
  },
  {
    note: '小腸の内側の壁には、柔毛（じゅうもう）という小さな突起がびっしり生えています。',
    add: fresh(...juumo(10, 12, 100, 20, 30), ln(8, 100, 312, 100, C.main, false, 2), lb(160, 118, '小腸の内側', 11, C.gray, 'middle'), lb(160, 30, '柔毛（小さな突起）', 12, C.main, 'middle', true), ar(160, 40, 160, 66, C.main), cap('小腸の壁は、柔毛でおおわれている', C.main, FILL.warm)),
  },
  {
    note: '❓なぜ突起があるのでしょう。突起があると、同じ長さの壁でも、養分にふれる面（表面積）が広くなるからです。ふれる面が広いほど、たくさん吸収できます。',
    add: fresh(ln(20, 40, 300, 40, C.gray, false, 2), lb(160, 26, '平らな壁：ふれる面は短い', 10, C.gray, 'middle', true), ...Array.from({ length: 8 }, (_, i) => [ln(20 + i * 35, 110, 20 + i * 35, 84, C.main, false, 2), ln(20 + i * 35, 84, 32 + i * 35, 84, C.main, false, 2), ln(32 + i * 35, 84, 32 + i * 35, 110, C.main, false, 2), ln(32 + i * 35, 110, 55 + i * 35, 110, C.main, false, 2)]).flat(), lb(160, 72, '柔毛のある壁：ふれる面が長い', 10, C.main, 'middle', true), cap('突起がある → 表面積が大きい → よく吸収')),
  },
  {
    note: '柔毛の中には、毛細血管とリンパ管が通っています。吸収された栄養分は、この2つのどちらかに入ります。',
    add: fresh(bx(110, 10, 100, 120, undefined, C.main, FILL.warm), bx(120, 30, 38, 90, '毛細\n血管', C.red, FILL.red, 10), bx(162, 30, 38, 90, 'リンパ管', C.green, FILL.green, 9), lb(160, 20, '柔毛の断面', 10, C.main, 'middle', true), cap('柔毛の中：毛細血管とリンパ管', C.main, FILL.warm)),
  },
  {
    note: 'ブドウ糖とアミノ酸は、毛細血管に入ります。水にとけやすい物質は、そのまま血液に入れるからです。',
    add: fresh(bx(110, 10, 100, 120, undefined, C.main, FILL.warm), bx(120, 30, 38, 90, '毛細\n血管', C.red, FILL.red, 10), bx(162, 30, 38, 90, 'リンパ管', C.green, FILL.green, 9), lb(160, 20, '柔毛の断面', 10, C.main, 'middle', true), ar(74, 76, 118, 76, C.red), lb(38, 76, 'ブドウ糖\nアミノ酸', 10, C.red, 'middle', true), cap('ブドウ糖・アミノ酸 → 毛細血管', C.red, FILL.red)),
  },
  {
    note: '脂肪酸とモノグリセリドは、リンパ管に入ります。❓なぜ行き先がちがうのでしょう。この2つは柔毛の細胞の中で、もう一度くっついて脂肪にもどります。脂肪のかたまりは、毛細血管ではなくリンパ管へ入っていきます。',
    add: fresh(bx(110, 10, 100, 120, undefined, C.main, FILL.warm), bx(120, 30, 38, 90, '毛細\n血管', C.red, FILL.red, 10), bx(162, 30, 38, 90, 'リンパ管', C.green, FILL.green, 9), lb(160, 20, '柔毛の断面', 10, C.main, 'middle', true), ar(246, 76, 202, 76, C.green), lb(282, 68, '脂肪酸と\nモノグリセリド', 9, C.green, 'middle', true), lb(282, 100, '柔毛の中で\n脂肪にもどる', 9, C.main, 'middle'), cap('脂肪酸とモノグリセリド → 脂肪にもどる → リンパ管', C.green, FILL.green, 12)),
  },
  {
    note: '毛細血管に入った血液は、門脈（もんみゃく）という太い血管を通って、まず肝臓へ向かいます。❓なぜ肝臓へ？ 小腸から出た血液は、全身へ行く前に必ず肝臓を通るしくみになっているからです。',
    add: fresh(...flow(['小腸の\n毛細血管', '門脈', '肝臓', '全身へ'], 24, { h: 56, color: C.red, fill: FILL.red, size: 11, gap: 14 }).flat(), lb(160, 110, '必ず肝臓を通ってから全身へ', 12, C.ink, 'middle', true), cap('小腸 → 門脈 → 肝臓 → 全身', C.red, FILL.red)),
  },
  {
    note: '肝臓では、ブドウ糖の一部をグリコーゲンに変えてたくわえます。❓なぜたくわえるのでしょう。食後にブドウ糖が一気に血液へ流れこむと、血液中の量が増えすぎるからです。必要なときにはブドウ糖にもどして送り出します。',
    add: fresh(bx(110, 30, 100, 60, '肝臓', C.red, FILL.red, 14), ar(40, 48, 108, 56, C.red), lb(40, 24, 'ブドウ糖\n（多い）', 10, C.red, 'middle', true), ar(212, 56, 280, 48, C.red, true), lb(284, 26, '必要な分\nだけ出す', 10, C.ink, 'middle', true), lb(160, 104, 'ブドウ糖 → グリコーゲンにして貯える', 11, C.ink, 'middle', true), cap('食後の血液中のブドウ糖を、増えすぎないようにする', C.red, FILL.red, 12)),
  },
  {
    note: 'リンパ管に入った脂肪は、やがて首のあたりで血管と合流し、最後は血液に入って全身へ運ばれます。',
    add: fresh(...flow(['脂肪', 'リンパ管', '首のあたりで\n血管と合流', '血液'], 24, { h: 56, color: C.green, fill: FILL.green, size: 10, gap: 14 }).flat(), lb(160, 110, '糖・アミノ酸より少し遠回り', 12, C.ink, 'middle', true), cap('脂肪は、リンパ管を通ってから血液へ', C.green, FILL.green)),
  },
  {
    note: '❓「表面積を大きくする」という発想は、ほかにも出てきませんか。小腸の柔毛、肺の肺胞、根の根毛が同じです。限られた場所で効率よく出入りさせるには、表面積を広げるのが一番だからです。',
    add: fresh(bx(10, 24, 96, 44, '小腸\n柔毛', C.main, FILL.warm, 12), bx(112, 24, 96, 44, '肺\n肺胞', C.blue, FILL.blue, 12), bx(214, 24, 96, 44, '根\n根毛', C.green, FILL.green, 12), ar(58, 72, 58, 100, C.gray), ar(160, 72, 160, 100, C.gray), ar(262, 72, 262, 100, C.gray), lb(160, 112, '表面積を大きくして、たくさん出入りさせる', 11, C.ink, 'middle', true), cap('表面積を大きくする工夫は、生物によく出てくる')),
  },
  {
    note: 'まとめです。柔毛は表面積を大きくして吸収をよくします。ブドウ糖とアミノ酸は毛細血管へ、脂肪は脂肪にもどってリンパ管へ。毛細血管の血液は門脈から肝臓へ。',
    add: fresh(bx(20, 10, 280, 28, '柔毛：表面積を大きくして吸収しやすく', C.main, FILL.warm, 12), bx(20, 46, 280, 28, '糖・アミノ酸 → 毛細血管 → 門脈 → 肝臓', C.red, FILL.red, 12), bx(20, 82, 280, 28, '脂肪酸とモノグリセリド → 脂肪 → リンパ管', C.green, FILL.green, 12), bx(20, 118, 280, 28, '肝臓：ブドウ糖をグリコーゲンにして貯える', C.blue, FILL.blue, 12)),
  },
]);

// ══ 血液循環の経路（体循環・肺循環）══
const heart = (arrows: boolean, hi: string | null = null): E[] => {
  const h = (t: string, x: number, y: number, blue: boolean): E => bx(x, y, 90, 44, t, hi === t ? C.ink : blue ? C.blue : C.red, blue ? FILL.blue : FILL.red, 13);
  const out: E[] = [h('右心房', 60, 14, true), h('左心房', 170, 14, false), h('右心室', 60, 70, true), h('左心室', 170, 70, false)];
  if (arrows) out.push(ar(105, 58, 105, 70, C.ink), ar(215, 58, 215, 70, C.ink));
  return out;
};
const blank = (): E[] => [bx(60, 14, 90, 44, '右心房', C.gray, FILL.gray, 13), bx(170, 14, 90, 44, '左心房', C.gray, FILL.gray, 13), bx(60, 70, 90, 44, '右心室', C.gray, FILL.gray, 13), bx(170, 70, 90, 44, '左心室', C.gray, FILL.gray, 13)];
const rowB = (labels: string[], y: number, fills: number[], hiIdx = -1): E[] => {
  const out: E[] = [];
  labels.forEach((t, i) => {
    const x = 8 + i * 64;
    if (i > 0) out.push(ar(x - 15, y + 15, x - 1, y + 15, C.gray));
    const f = fills[i];
    out.push(bx(x, y, 48, 30, t, i === hiIdx ? C.ink : f === 1 ? C.blue : f === 2 ? C.red : C.gray, f === 1 ? FILL.blue : f === 2 ? FILL.red : FILL.gray, 10));
  });
  return out;
};
const R1 = ['右心室', '肺動脈', '肺', '肺静脈', '左心房'];
const R2 = ['左心室', '大動脈', '全身', '大静脈', '右心房'];
const F1 = [1, 1, 0, 2, 2];
const F2 = [2, 2, 0, 1, 1];
const junkan: DiagramFigure = show([
  {
    note: '血液を全身に送るポンプが心臓です。心臓には4つの部屋があります。図は体を正面から見たようすなので、心臓の「右」は図の左がわに描きます。❓それぞれの部屋は何をするのでしょう。',
    add: [...blank(), lb(160, 128, '右心房・右心室・左心房・左心室', 11, C.ink, 'middle', true), cap('心臓の4つの部屋', C.gray, FILL.gray)],
  },
  {
    note: '心房は、血液を受け取る入り口。心室は、血液を送り出す出口です。❓なぜ心室のほうが壁が厚いのでしょう。強い力で血液を送り出す部屋だからです。とくに左心室は、全身に送るので、いちばん壁が厚くなっています。',
    add: fresh(...heart(true), lb(30, 36, '入り口', 10, C.gray, 'middle'), lb(290, 36, '入り口', 10, C.gray, 'middle'), lb(30, 92, '出口', 10, C.gray, 'middle'), lb(290, 92, '出口', 10, C.gray, 'middle'), cap('心房＝受け取る入り口　心室＝送り出す出口', C.blue, FILL.blue, 12)),
  },
  {
    note: '血管の名前は、流れる向きで決まります。心臓から出ていく血管が動脈、心臓へもどってくる血管が静脈です。❓中の血液の種類では決まらないの？ そのとおり。名前は向きだけで決まります。',
    add: fresh(bx(110, 40, 100, 44, '心臓', C.ink, FILL.gray, 14), ar(190, 44, 250, 26, C.purple), lb(288, 24, '動脈\n（出る）', 11, C.purple, 'middle', true), ar(250, 98, 190, 84, C.main), lb(288, 104, '静脈\n（もどる）', 11, C.main, 'middle', true), cap('出る ＝ 動脈　もどる ＝ 静脈', C.purple, FILL.purple)),
  },
  {
    note: '血液の種類は別の決まりです。酸素を多くふくむ血液が動脈血、酸素が少ない血液が静脈血です。❓動脈血は動脈だけを流れるの？ そうとは限りません。名前の動脈・静脈と、動脈血・静脈血は、別のことがらです。',
    add: fresh(bx(20, 30, 130, 60, '動脈血\n酸素が多い', C.red, FILL.red, 14), bx(170, 30, 130, 60, '静脈血\n酸素が少ない', C.blue, FILL.blue, 14), lb(160, 116, '血管の名前とは別のこと', 13, C.ink, 'middle', true), cap('酸素の多さで決まる（血管の名前とは別）', C.red, FILL.red)),
  },
  {
    note: '体循環です。左心室から出た血液は、大動脈を通って全身へ行き、酸素を渡します。そして大静脈を通って右心房へもどります。',
    add: fresh(lb(8, 20, '体循環', 12, C.ink, 'start', true), ...rowB(R2, 30, F2), lb(160, 82, '赤：酸素が多い（動脈血）　青：酸素が少ない（静脈血）', 9, C.gray, 'middle'), cap('体循環：左心室 → 全身 → 右心房', C.red, FILL.red)),
  },
  {
    note: '肺循環です。右心室から出た血液は、肺動脈を通って肺へ行き、酸素を受け取ります。そして肺静脈を通って左心房へもどります。❓なぜ肺へ行くのでしょう。体で酸素を使ってしまった血液が、酸素をもらい直す必要があるからです。',
    add: fresh(lb(8, 20, '肺循環', 12, C.ink, 'start', true), ...rowB(R1, 30, F1), lb(160, 82, '赤：酸素が多い（動脈血）　青：酸素が少ない（静脈血）', 9, C.gray, 'middle'), cap('肺循環：右心室 → 肺 → 左心房', C.blue, FILL.blue)),
  },
  {
    note: 'ここが例外です。肺動脈には静脈血、肺静脈には動脈血が流れます。❓なぜ「動脈なのに静脈血」なのでしょう。名前は向きで決まっていて、肺動脈は心臓から出ていく血管だから動脈。でも中の血液は全身から帰ってきた、酸素の少ない血液だからです。',
    add: fresh(lb(8, 20, '肺循環', 12, C.ink, 'start', true), ...rowB(R1, 30, F1, 1), bx(72, 70, 120, 40, '肺動脈\n動脈だが静脈血', C.red, FILL.red, 11), bx(196, 70, 116, 40, '肺静脈\n静脈だが動脈血', C.red, FILL.red, 11), cap('肺動脈は静脈血、肺静脈は動脈血', C.red, FILL.red)),
  },
  {
    note: '❓肺静脈の血液はなぜ酸素が多いのでしょう。肺で酸素を受け取った直後だからです。肺へ向かう肺動脈では酸素が少なく、肺を出た肺静脈では酸素が多くなります。',
    add: fresh(bx(8, 30, 90, 40, '肺動脈\n酸素が少ない', C.blue, FILL.blue, 11), ar(102, 50, 122, 50, C.gray), bx(126, 30, 68, 40, '肺', C.gray, FILL.gray, 13), ar(198, 50, 218, 50, C.gray), bx(222, 30, 90, 40, '肺静脈\n酸素が多い', C.red, FILL.red, 11), lb(160, 92, '肺で酸素を受け取る', 12, C.green, 'middle', true), cap('肺の直後の肺静脈は、酸素がいちばん多い', C.green, FILL.green, 12)),
  },
  {
    note: '2つをつなげると、血液は「全身の輪」と「肺の輪」を交互に回っています。右心房 → 右心室 → 肺 → 左心房 → 左心室 → 全身 → 右心房、の順です。',
    add: fresh(lb(8, 16, '肺循環', 11, C.ink, 'start', true), ...rowB(R1, 24, F1), lb(8, 78, '体循環', 11, C.ink, 'start', true), ...rowB(R2, 86, F2), lb(160, 130, '左心房 → 左心室 とつながる', 10, C.gray, 'middle'), cap('肺と全身、2つの輪を交互に回る', C.blue, FILL.blue)),
  },
  {
    note: '血液の成分を問われたら、「どの臓器の直後か」で考えます。肺の直後の肺静脈は酸素が最多、小腸の直後の門脈は栄養分が最多、じん臓の直後の静脈は尿素が最少です。❓なぜ直後で決まるのでしょう。その臓器が、血液に物を足したり、こし取ったりした直後だからです。',
    add: fresh(bx(10, 10, 300, 32, '肺の直後 ＝ 肺静脈：酸素が最も多い', C.red, FILL.red, 12), bx(10, 50, 300, 32, '小腸の直後 ＝ 門脈：栄養分が最も多い', C.green, FILL.green, 12), bx(10, 90, 300, 32, 'じん臓の直後 ＝ 静脈：尿素が最も少ない', C.blue, FILL.blue, 12), cap('「どの臓器の直後か」で考える', C.ink, '#FFFFFF')),
  },
  {
    note: 'まとめです。体循環は左心室 → 全身 → 右心房、肺循環は右心室 → 肺 → 左心房。動脈は心臓から出る血管、静脈は心臓へもどる血管。肺動脈は静脈血、肺静脈は動脈血です。',
    add: fresh(bx(20, 10, 280, 28, '体循環：左心室 → 全身 → 右心房', C.red, FILL.red, 12), bx(20, 46, 280, 28, '肺循環：右心室 → 肺 → 左心房', C.blue, FILL.blue, 12), bx(20, 82, 280, 28, '動脈＝出る血管　静脈＝もどる血管', C.purple, FILL.purple, 12), bx(20, 118, 280, 28, '肺動脈は静脈血、肺静脈は動脈血', C.red, FILL.red, 12)),
  },
]);

// ══ 呼吸のしくみと肺胞 ══
const chest = (lungR: number, dia: number): E[] => [bx(100, 8, 120, 100, undefined, C.gray, '#FFFFFF'), ci(160, 50, lungR, '肺', C.red, FILL.red, 12), ln(100, dia, 220, dia, C.blue, false, 4)];
const kokyuu: DiagramFigure = show([
  {
    note: '肺は空気を出し入れしますが、❓肺は自分でふくらむのでしょうか。じつは、肺には筋肉がなく、自分ではふくらめません。では、何が肺をふくらませているのでしょう。',
    add: [ci(160, 60, 40, '肺', C.red, FILL.red, 16), lb(160, 118, '筋肉がない', 12, C.red, 'middle', true), lb(160, 138, '自分では動けない', 11, C.gray, 'middle'), cap('肺には筋肉がない。では、何が動かす？', C.red, FILL.red)],
  },
  {
    note: '胸のようすを、容器のモデルで考えます。容器が胸、中の風船が肺、底のゴム膜が横隔膜です。',
    add: fresh(bx(100, 10, 120, 100, undefined, C.gray, '#FFFFFF'), ci(160, 52, 22, '風船', C.red, FILL.red, 11), ln(100, 110, 220, 110, C.blue, false, 4), lb(236, 30, '容器 ＝ 胸', 10, C.gray, 'start'), lb(236, 52, '風船 ＝ 肺', 10, C.red, 'start'), lb(236, 110, 'ゴム膜 ＝ 横隔膜', 10, C.blue, 'start'), cap('胸のモデル：容器・風船・ゴム膜', C.blue, FILL.blue)),
  },
  {
    note: 'ゴム膜を下に引くと、風船がふくらみます。❓なぜでしょう。容器の中の空間が広がって、中の空気がうすくなるので、外の空気が風船の中へ入りこむからです。',
    add: fresh(bx(100, 10, 120, 116, undefined, C.gray, '#FFFFFF'), ci(160, 56, 32, '風船', C.red, FILL.red, 12), ln(100, 126, 220, 126, C.blue, false, 4), ar(160, 130, 160, 148, C.blue), lb(236, 140, '下に引く', 10, C.blue, 'start', true), cap('空間が広がる → 外の空気が入る → ふくらむ', C.blue, FILL.blue, 12)),
  },
  {
    note: '息を吸うときは、横隔膜が下がり、ろっ骨が上がります。❓なぜ両方動くのでしょう。胸の空間を、上下と前後に広げて、たくさん空気を入れるためです。空間が広がると、肺がふくらんで空気が入ります。',
    add: fresh(...chest(36, 116), ar(160, 118, 160, 138, C.blue), ar(94, 70, 94, 34, C.green), ar(226, 70, 226, 34, C.green), lb(52, 52, 'ろっ骨\n上がる', 10, C.green, 'middle', true), lb(278, 100, '横隔膜\n下がる', 10, C.blue, 'middle', true), cap('吸う：横隔膜↓　ろっ骨↑ → 胸が広がる', C.green, FILL.green)),
  },
  {
    note: '息をはくときは、逆に、横隔膜が上がり、ろっ骨が下がります。すると胸の空間がせまくなり、肺が小さくなって、空気が外へ押し出されます。',
    add: fresh(...chest(24, 96), ar(160, 130, 160, 104, C.blue), ar(94, 34, 94, 70, C.red), ar(226, 34, 226, 70, C.red), lb(52, 52, 'ろっ骨\n下がる', 10, C.red, 'middle', true), lb(278, 96, '横隔膜\n上がる', 10, C.blue, 'middle', true), cap('はく：横隔膜↑　ろっ骨↓ → 胸がせまくなる', C.red, FILL.red)),
  },
  {
    note: '肺の中は、気管支が枝分かれして、先に小さな袋がたくさんついています。これが肺胞（はいほう）です。❓なぜ小さな袋にたくさん分かれているのでしょう。次の絵で考えます。',
    add: fresh(ln(160, 8, 160, 40, C.gray, false, 4), ln(160, 40, 100, 66, C.gray, false, 3), ln(160, 40, 220, 66, C.gray, false, 3), ...[[84, 82], [104, 90], [96, 104], [218, 90], [238, 82], [226, 106], [116, 78], [206, 78]].map((p) => ci(p[0], p[1], 10, undefined, C.blue, FILL.blue)), lb(172, 22, '気管支', 10, C.gray, 'start', true), lb(160, 128, '先に小さな袋（肺胞）', 11, C.blue, 'middle', true), cap('肺の中は、小さな袋（肺胞）だらけ', C.blue, FILL.blue)),
  },
  {
    note: '大きな立方体（1辺2）の表面積は、6 × 2 × 2 ＝ 24。同じ大きさを、1辺1の小さな立方体8個に分けると、6 × 1 × 1 × 8 ＝ 48。同じ体積でも、細かく分けると、空気にふれる面が2倍になります。',
    add: fresh(bx(20, 30, 90, 90, '1個（1辺2）\n表面積 24', C.gray, FILL.gray, 12), ...[0, 1, 2, 3].map((i) => bx(190 + (i % 2) * 46, 30 + Math.floor(i / 2) * 46, 44, 44, '6', C.blue, FILL.blue, 12)), lb(236, 130, '8個に分ける（1辺1）\n1個の表面積6 × 8 ＝ 48', 10, C.blue, 'middle', true), ar(114, 76, 184, 76, C.ink), cap('細かく分ける → ふれる面が2倍（24→48）', C.blue, FILL.blue)),
  },
  {
    note: '肺胞のまわりには毛細血管があり、ここで気体の交換をします。酸素が血液へ、二酸化炭素が肺胞の中へ移ります。❓なぜ移るのでしょう。気体は濃いほうから薄いほうへ広がるからです。血液は酸素が少なく二酸化炭素が多いので、向きが決まります。',
    add: fresh(ci(90, 72, 46, '肺胞\n（空気）', C.blue, FILL.blue, 12), bx(190, 40, 56, 64, '毛細血管', C.red, FILL.red, 10), ar(140, 56, 188, 56, C.green), lb(164, 44, '酸素', 10, C.green, 'middle', true), ar(188, 88, 140, 88, C.purple), lb(164, 102, '二酸化炭素', 9, C.purple, 'middle', true), cap('酸素は血液へ、二酸化炭素は肺胞へ', C.green, FILL.green)),
  },
  {
    note: '細胞呼吸です。全身の細胞の中で、酸素を使って養分を分解し、生きるためのエネルギーを取り出します。あとには二酸化炭素と水ができます。❓なぜ酸素が必要なのでしょう。養分を分解してエネルギーを取り出すのに、酸素が必要だからです。',
    add: fresh(bx(10, 34, 92, 48, '酸素\n＋ 養分', C.green, FILL.green, 12), ar(106, 58, 124, 58, C.gray), ci(160, 58, 32, '細胞', C.main, FILL.warm, 13), ar(196, 58, 214, 58, C.gray), bx(218, 24, 94, 68, '二酸化炭素\n＋ 水\n＋ エネルギー', C.purple, FILL.purple, 11), cap('養分を酸素で分解してエネルギーを取り出す', C.green, FILL.green, 12)),
  },
  {
    note: '❓「呼吸」は2種類あるのでしょうか。はい。肺で空気とやりとりするガス交換（外呼吸）と、細胞の中で酸素を使ってエネルギーを取り出す細胞呼吸は、別のはたらきです。区別しておきましょう。',
    add: fresh(bx(14, 14, 140, 60, '肺での\nガス交換\n（外呼吸）', C.blue, FILL.blue, 12), bx(166, 14, 140, 60, '細胞呼吸\n（細胞の中）', C.main, FILL.warm, 12), bx(14, 82, 140, 44, '空気と血液の間で\n酸素・二酸化炭素を交換', C.blue, '#FFFFFF', 10), bx(166, 82, 140, 44, '酸素を使って\nエネルギーを取り出す', C.main, '#FFFFFF', 10), cap('別のはたらき。区別する', C.red, FILL.red)),
  },
  {
    note: 'まとめです。肺に筋肉はなく、横隔膜とろっ骨が動かします。吸うときは横隔膜が下がり、ろっ骨が上がります。肺胞は表面積を大きくして気体交換をよくします。',
    add: fresh(bx(20, 10, 280, 28, '肺に筋肉はない。横隔膜とろっ骨が動かす', C.red, FILL.red, 12), bx(20, 46, 280, 28, '吸う：横隔膜↓　ろっ骨↑', C.green, FILL.green, 13), bx(20, 82, 280, 28, '肺胞：表面積を大きくして気体交換', C.blue, FILL.blue, 12), bx(20, 118, 280, 28, '細胞呼吸：酸素＋養分 → 二酸化炭素＋水＋エネルギー', C.main, FILL.warm, 10)),
  },
]);

// ══ 排出と肝臓・じん臓のはたらき（中学）══
const haishutsu: DiagramFigure = show([
  {
    note: 'タンパク質は、体の中で分解されるとアンモニアという物質ができます。アンモニアは体にとって有害です。❓このまま体にためておくとどうなるでしょう。体に害があるので、すぐ処理して外へ出さなければなりません。',
    add: [...flow(['タンパク質', 'アミノ酸', 'アンモニア\n（有害）'], 24, { h: 56, color: C.main, fill: FILL.warm, size: 12 }).flat().map((e, i, a) => (i === a.length - 1 ? { ...e, color: C.red, fill: FILL.red } as E : e)), lb(160, 110, '分解されると、体に有害な物質ができる', 12, C.red, 'middle', true), cap('タンパク質の分解 → アンモニア（有害）', C.red, FILL.red)],
  },
  {
    note: '❓なぜタンパク質の分解でだけアンモニアができるのでしょう。タンパク質には窒素がふくまれていて、分解するとその窒素がアンモニアの形で出てくるからです。デンプンや脂肪には窒素がないので、分解してもアンモニアはできません。',
    add: fresh(bx(10, 14, 120, 36, 'タンパク質\n（窒素あり）', C.main, FILL.warm, 11), ar(134, 32, 186, 32, C.red), bx(190, 14, 120, 36, 'アンモニアが\nできる', C.red, FILL.red, 11), bx(10, 66, 120, 36, 'デンプン・脂肪\n（窒素なし）', C.gray, FILL.gray, 11), ar(134, 84, 186, 84, C.gray, true), bx(190, 66, 120, 36, 'アンモニアは\nできない', C.gray, FILL.gray, 11), cap('タンパク質にだけ窒素がある')),
  },
  {
    note: '有害なアンモニアは、肝臓で、害の少ない尿素に変えられます。❓なぜ変えるのでしょう。アンモニアのままだと体に害があるので、まず無害に近い形にしてから体の外へ出すためです。',
    add: fresh(bx(10, 40, 84, 44, 'アンモニア\n（有害）', C.red, FILL.red, 11), ar(98, 62, 118, 62, C.gray), bx(122, 30, 76, 64, '肝臓', C.red, FILL.red, 14), ar(202, 62, 222, 62, C.gray), bx(226, 40, 84, 44, '尿素\n（害が少ない）', C.green, FILL.green, 11), cap('肝臓：アンモニア → 尿素（無害化）', C.green, FILL.green)),
  },
  {
    note: '尿素は、血液にとけて運ばれます。❓次はどこへ行くのでしょう。血液から尿素をこし取る臓器、じん臓です。',
    add: fresh(...flow(['肝臓', '血液\n（尿素をふくむ）', 'じん臓'], 24, { h: 56, color: C.blue, fill: FILL.blue, size: 12 }).flat(), lb(160, 110, '尿素は血液で運ばれる', 12, C.ink, 'middle', true), cap('肝臓 → 血液 → じん臓', C.blue, FILL.blue)),
  },
  {
    note: 'じん臓は、血液から尿素と、余分な水分や塩分をこし取って、尿にします。❓こし取ったあとの血液はどうなる？ 尿素が少ない、きれいな血液になって、体へもどっていきます。',
    add: fresh(lb(48, 24, '血液\n（尿素が多い）', 10, C.red, 'middle', true), ar(48, 42, 112, 66, C.red), bx(112, 40, 96, 60, 'じん臓', C.blue, FILL.blue, 14), ar(208, 56, 264, 40, C.green), lb(276, 28, 'きれいな血液\n（尿素が少ない）', 9, C.green, 'middle', true), ar(208, 84, 264, 100, C.main), lb(276, 112, '尿\n（尿素・水・塩分）', 9, C.main, 'middle', true), cap('じん臓：血液をこし取って、尿にする', C.blue, FILL.blue)),
  },
  {
    note: 'できた尿は、輸尿管を通ってぼうこうにためられ、尿道から体の外へ出ます。',
    add: fresh(...flow(['じん臓', '輸尿管', 'ぼうこう', '尿道'], 24, { h: 56, color: C.main, fill: FILL.warm, size: 11, gap: 14 }).flat(), lb(160, 110, '尿の通り道', 13, C.ink, 'middle', true), cap('じん臓 → 輸尿管 → ぼうこう → 尿道 → 体の外', C.main, FILL.warm, 12)),
  },
  {
    note: '❓肝臓とじん臓は、何がちがうのでしょう。役割が分かれています。無害にするのが肝臓、こし取るのがじん臓です。取りちがえないようにします。',
    add: fresh(bx(14, 14, 140, 44, '肝臓', C.red, FILL.red, 15), bx(166, 14, 140, 44, 'じん臓', C.blue, FILL.blue, 15), bx(14, 66, 140, 56, 'アンモニアを\n尿素に変える\n（無害化）', C.red, '#FFFFFF', 12), bx(166, 66, 140, 56, '血液から尿素を\nこし取る\n（尿をつくる）', C.blue, '#FFFFFF', 12), cap('無害にする＝肝臓　こし取る＝じん臓', C.ink, '#FFFFFF')),
  },
  {
    note: '肝臓のはたらきは、ほかにもたくさんあります。胆汁をつくる、グリコーゲンをたくわえる、体に害のあるものを無害にする（解毒）。❓なぜ「体の中の化学工場」とよばれるのでしょう。いくつもの化学変化を1つの臓器でまとめて受け持っているからです。',
    add: fresh(bx(110, 6, 100, 28, '肝臓', C.red, FILL.red, 14), ar(130, 36, 60, 60, C.gray), ar(160, 36, 160, 60, C.gray), ar(190, 36, 260, 60, C.gray), bx(8, 62, 96, 44, '胆汁を\nつくる', C.green, FILL.green, 12), bx(112, 62, 96, 44, 'グリコーゲンを\nたくわえる', C.blue, FILL.blue, 11), bx(216, 62, 96, 44, '解毒\n（無害にする）', C.purple, FILL.purple, 11), lb(160, 122, '体の中の化学工場', 12, C.ink, 'middle', true), cap('肝臓の主なはたらき')),
  },
  {
    note: '血液の成分は「どこの直後か」で考えます。❓尿素がいちばん少ない血管は？ じん臓を出た直後の静脈です。じん臓で尿素がこし取られたばかりだからです。',
    add: fresh(bx(10, 40, 84, 44, '血液\n尿素 多', C.red, FILL.red, 12), ar(98, 62, 118, 62, C.gray), bx(122, 30, 76, 64, 'じん臓', C.blue, FILL.blue, 14), ar(202, 62, 222, 62, C.gray), bx(226, 40, 84, 44, 'じん臓を出た静脈\n尿素 最少', C.green, FILL.green, 10), cap('じん臓の直後の静脈は、尿素がいちばん少ない', C.green, FILL.green, 12)),
  },
  {
    note: 'まとめです。タンパク質の分解でアンモニアができ、肝臓が尿素に変え、じん臓がこし取って尿として出します。肝臓は無害化、じん臓はこし取る、と役割を分けて覚えます。',
    add: fresh(...flow(['アンモニア', '（肝臓）\n尿素', '（じん臓）\n尿'], 20, { h: 50, color: C.main, fill: FILL.warm, size: 11 }).flat(), bx(20, 84, 280, 28, '肝臓は無害化、じん臓はこし取る', C.red, FILL.red, 13), bx(20, 120, 280, 28, 'アンモニアはタンパク質の分解から', C.blue, FILL.blue, 13)),
  },
]);

// ══ 刺激と反応・反射 ══
const nerveBase = (): E[] => [bx(120, 8, 80, 28, '脳', C.purple, FILL.purple, 13), bx(130, 92, 60, 28, '脊髄', C.blue, FILL.blue, 12), bx(8, 92, 74, 28, '皮ふ\n（感覚器）', C.main, FILL.warm, 10), bx(238, 92, 74, 28, '筋肉', C.red, FILL.red, 12)];
const sensory = (): E[] => [ar(84, 106, 128, 106, C.main), lb(106, 84, '感覚神経', 9, C.main, 'middle', true)];
const motor = (): E[] => [ar(192, 106, 236, 106, C.red), lb(214, 84, '運動神経', 9, C.red, 'middle', true)];
const hansha: DiagramFigure = show([
  {
    note: '熱いものにさわると、思わず手を引っこめます。❓このとき体の中では、何が起きているのでしょう。皮ふで感じた刺激が、神経を通って、筋肉へ命令として伝わっています。',
    add: [...nerveBase(), ...sensory(), ...motor(), cap('刺激 → 神経 → 命令 → 筋肉が動く', C.blue, FILL.blue)],
  },
  {
    note: '自分で意識して動かすときは、刺激が脊髄から脳まで行きます。脳が判断して命令を出し、それが脊髄から運動神経を通って筋肉に届きます。順番は、感覚器 → 感覚神経 → 脊髄 → 脳 → 脊髄 → 運動神経 → 筋肉です。',
    add: fresh(...nerveBase(), ...sensory(), ar(150, 92, 150, 38, C.purple), ar(172, 38, 172, 90, C.purple), ...motor(), cap('意識して動かす：脳まで往復する', C.purple, FILL.purple)),
  },
  {
    note: '❓なぜ意識して動かすと時間がかかるのでしょう。脳まで信号が行って、判断して、また脊髄までもどってくる、という長い道のりがあるからです。道のりが長いほど、時間がかかります。',
    add: fresh(...nerveBase(), ...sensory(), ar(150, 92, 150, 38, C.purple), ar(172, 38, 172, 90, C.purple), ...motor(), lb(184, 62, '判断', 11, C.purple, 'start', true), cap('道のりが長い → 時間がかかる', C.purple, FILL.purple)),
  },
  {
    note: '熱いものから思わず手を引くのが反射です。反射では、信号が脳まで行かず、脊髄で折り返して、すぐ運動神経へ命令が出ます。順番は、感覚器 → 感覚神経 → 脊髄 → 運動神経 → 筋肉です。',
    add: fresh(...nerveBase(), ...sensory(), ...motor(), lb(160, 66, '脳は通らない', 11, C.red, 'middle', true), cap('反射：脊髄で折り返す（脳を通らない）', C.red, FILL.red)),
  },
  {
    note: '❓なぜ反射は脊髄で折り返すのでしょう。脳まで行くより近道で、道のりが短いからです。道のりが短いので、反応が速くなります。',
    add: fresh(bx(10, 10, 300, 34, '意識して動かす：長い道のり（脳まで）', C.purple, FILL.purple, 12), ar(20, 60, 290, 60, C.purple), lb(150, 74, 'かかる時間：長い', 10, C.purple, 'middle', true), bx(10, 90, 170, 34, '反射：短い道のり（脊髄まで）', C.red, FILL.red, 11), ar(20, 138, 170, 138, C.red), lb(190, 138, 'かかる時間：短い', 10, C.red, 'start', true), cap('近道だから速い', C.red, FILL.red)),
  },
  {
    note: '❓なぜ反射があると役に立つのでしょう。熱いものや鋭いものに、脳が判断するより先に体が反応して、やけどやけがを防げるからです。速いことは、身を守ることにつながります。',
    add: fresh(bx(20, 14, 130, 40, '熱い！', C.red, FILL.red, 16), ar(154, 34, 176, 34, C.gray), bx(180, 14, 120, 40, 'すぐ手を引く', C.green, FILL.green, 14), lb(160, 84, 'やけどが小さくてすむ', 13, C.ink, 'middle', true), lb(160, 110, '危険から身を守る', 13, C.ink, 'middle', true), cap('反射は、速いから身を守れる', C.green, FILL.green)),
  },
  {
    note: '反射の例は、熱いものから手を引く、ひざの下をたたくと足が上がる、明るい光でひとみが小さくなる、などです。どれも、考える前に体が動きます。',
    add: fresh(bx(10, 16, 96, 60, '熱いものから\n手を引く', C.red, FILL.red, 11), bx(112, 16, 96, 60, 'ひざの下を\nたたくと\n足が上がる', C.blue, FILL.blue, 11), bx(214, 16, 96, 60, '明るいと\nひとみが\n小さくなる', C.green, FILL.green, 11), lb(160, 100, '考える前に体が動く', 13, C.ink, 'middle', true), cap('反射の例')),
  },
  {
    note: '❓反射なのに、あとから「熱い」と感じるのはなぜでしょう。脊髄に届いた信号は、手を引く命令をすぐ出すと同時に、脳にも送られるからです。命令は近い脊髄から出るので速く、熱さを感じるのは、そのあとになります。',
    add: fresh(...nerveBase(), ...sensory(), ...motor(), ar(150, 92, 150, 38, C.purple, true), lb(214, 52, '感じるのは あと', 10, C.purple, 'middle', true), lb(66, 60, 'まず 手を引く', 10, C.red, 'middle', true), cap('先に手が動き、あとから「熱い」と感じる', C.purple, FILL.purple, 12)),
  },
  {
    note: '神経には2種類の分け方があります。脳と脊髄を中枢神経、そこから全身へのびる感覚神経と運動神経を末しょう神経といいます。❓反射のとき命令を出すのはどちら？ 脊髄で、脊髄も中枢神経です。',
    add: fresh(bx(20, 14, 130, 40, '中枢神経', C.purple, FILL.purple, 14), bx(170, 14, 130, 40, '末しょう神経', C.main, FILL.warm, 13), bx(20, 62, 130, 44, '脳と脊髄\n判断・命令', C.purple, '#FFFFFF', 12), bx(170, 62, 130, 44, '感覚神経と運動神経\n全身へのびる', C.main, '#FFFFFF', 10), cap('中枢神経 ＝ 脳と脊髄', C.purple, FILL.purple)),
  },
  {
    note: 'まとめです。意識して動かすときは脳まで行きます。反射は脊髄で折り返すので速く、身を守るのに役立ちます。あとから感じるのは、信号が脳にも届くからです。',
    add: fresh(bx(20, 10, 280, 28, '意識：感覚器 → 脊髄 → 脳 → 脊髄 → 筋肉', C.purple, FILL.purple, 11), bx(20, 46, 280, 28, '反射：感覚器 → 脊髄 → 筋肉（脳を通らない）', C.red, FILL.red, 11), bx(20, 82, 280, 28, '脊髄で折り返す近道だから速い', C.green, FILL.green, 12), bx(20, 118, 280, 28, '中枢神経 ＝ 脳と脊髄', C.blue, FILL.blue, 13)),
  },
]);

// ══ 動物の分類と進化のあと ══
const TC = [
  ['魚類', 'えら', '卵生（水中）', '変温'],
  ['両生類', '子：えら\n親：肺と皮ふ', '卵生（水中）', '変温'],
  ['ハチュウ類', '肺', '卵生（陸上）', '変温'],
  ['鳥類', '肺', '卵生（陸上）', '恒温'],
  ['ホニュウ類', '肺', '胎生', '恒温'],
];
const TX = [8, 76, 186, 274];
const TW = [64, 106, 84, 38];
const tcol = (c: number, hi: number = -1): E[] => {
  const heads = ['なかま', '呼吸', 'ふえ方', '体温'];
  const out: E[] = [cell(TX[c], 4, TW[c], 20, heads[c], C.ink, '#FFFFFF', 10)];
  TC.forEach((r, i) => out.push(cell(TX[c], 28 + i * 24, TW[c], 22, r[c], i === hi ? C.red : C.blue, i === hi ? FILL.red : c === 0 ? FILL.warm : FILL.blue, r[c].includes('\n') ? 8 : 10)));
  return out;
};
const dobutsu: DiagramFigure = show([
  {
    note: '動物は、まず背骨があるかどうかで分けます。背骨があるのがセキツイ動物（魚類・両生類・ハチュウ類・鳥類・ホニュウ類の5つ）、ないのが無セキツイ動物です。❓5つのなかまは、さらに何で区別するのでしょう。呼吸・ふえ方・体温の3つで整理します。',
    add: [bx(110, 6, 100, 24, '動物', C.ink, '#FFFFFF', 12), ar(140, 30, 80, 48, C.gray), ar(180, 30, 240, 48, C.gray), bx(10, 48, 140, 34, 'セキツイ動物\n（背骨あり）', C.green, FILL.green, 11), bx(170, 48, 140, 34, '無セキツイ動物\n（背骨なし）', C.gray, FILL.gray, 11), ...band(BY - 40, lb(80, 116, '魚類・両生類・ハチュウ類\n鳥類・ホニュウ類', 10, C.green, 'middle', true), lb(240, 116, '節足動物・軟体動物\nなど', 10, C.gray, 'middle', true), cap('目印：背骨があるか', C.green, FILL.green))],
  },
  {
    note: '呼吸のしかたで見ます。魚類はえら、両生類は子がえらで親が肺と皮ふ、ハチュウ類・鳥類・ホニュウ類は肺です。❓なぜ両生類は子と親でちがうのでしょう。子は水の中、親は水辺や陸で生活するからです。両生類は、水から陸へうつる途中のなかまです。',
    add: fresh(...tcol(0), ...tcol(1), cap('呼吸：魚＝えら／両生＝えら→肺と皮ふ／他＝肺', C.blue, FILL.blue, 12)),
  },
  {
    note: 'ふえ方は、卵で生まれる卵生と、母親の体内で育ってから生まれる胎生に分かれます。ホニュウ類だけが胎生で、あとはすべて卵生です。',
    add: fresh(...tcol(0), ...tcol(1), ...tcol(2), cap('ふえ方：ホニュウ類だけが胎生', C.blue, FILL.blue)),
  },
  {
    note: '❓卵生の中で、水中と陸上のちがいは何でしょう。陸上に産む卵（ハチュウ類・鳥類）には、かんそうを防ぐ殻があります。水中に産む卵（魚類・両生類）には殻がありません。水の中ならかわく心配がないからです。',
    add: fresh(ci(80, 60, 34, '卵', C.main, FILL.warm, 14), ci(240, 60, 30, '卵', C.blue, FILL.blue, 14), lb(80, 112, '陸上：殻がある\n（ハチュウ類・鳥類）', 10, C.main, 'middle', true), lb(240, 112, '水中：殻がない\n（魚類・両生類）', 10, C.blue, 'middle', true), cap('殻は、かんそうを防ぐためにある', C.main, FILL.warm)),
  },
  {
    note: '体温は、まわりの温度で体温が変わる変温動物と、変わらない恒温動物に分かれます。恒温動物は鳥類とホニュウ類だけです。',
    add: fresh(...tcol(0), ...tcol(1), ...tcol(2), ...tcol(3), cap('体温：恒温は鳥類とホニュウ類だけ', C.red, FILL.red)),
  },
  {
    note: '❓恒温だと何が得なのでしょう。まわりの温度が変わっても体温を一定に保てるので、寒い場所や夜でも活動できます。変温動物は、気温が下がると体温も下がり、動きがにぶくなります。',
    add: fresh(bx(20, 14, 130, 40, '恒温動物', C.red, FILL.red, 14), bx(170, 14, 130, 40, '変温動物', C.blue, FILL.blue, 14), bx(20, 62, 130, 56, '気温が下がっても\n体温は一定\n→ 寒くても動ける', C.red, '#FFFFFF', 10), bx(170, 62, 130, 56, '気温が下がると\n体温も下がる\n→ 動きがにぶい', C.blue, '#FFFFFF', 10), cap('恒温は、寒い所でも活動できる', C.red, FILL.red)),
  },
  {
    note: '❓胎生だと何が得なのでしょう。母親の体内である程度まで育ててから産むので、生まれた子が生き残りやすくなります。卵生は、たくさん産んでも、外で食べられたりかわいたりする危険があります。',
    add: fresh(bx(20, 14, 130, 40, '胎生', C.red, FILL.red, 14), bx(170, 14, 130, 40, '卵生', C.blue, FILL.blue, 14), bx(20, 62, 130, 56, '母親の体内で育つ\n→ 生き残りやすい', C.red, '#FFFFFF', 11), bx(170, 62, 130, 56, '外で育つ\n→ 食べられる・\nかわく危険', C.blue, '#FFFFFF', 10), cap('胎生は、母親が守りながら育てる', C.red, FILL.red)),
  },
  {
    note: '5つのなかまを1つの表にまとめます。呼吸・ふえ方・体温の3つの目印で、どのなかまか決まります。ホニュウ類だけが胎生、恒温動物は鳥類とホニュウ類、両生類だけ子と親で呼吸がちがう、が頻出です。',
    add: fresh(...tcol(0), ...tcol(1), ...tcol(2), ...tcol(3), cap('呼吸・ふえ方・体温で整理する', C.green, FILL.green)),
  },
  {
    note: '5つのなかまは、魚類 → 両生類 → ハチュウ類 →（鳥類・ホニュウ類）の順に、水から陸へ広がってきたと考えられています。❓その証拠は？ 化石です。たとえば始祖鳥（しそちょう）は、鳥類とハチュウ類の両方の特徴をもつ化石で、2つのなかまのつながりを示しています。',
    add: fresh(...flow(['魚類', '両生類', 'ハチュウ類', '鳥類\nホニュウ類'], 24, { h: 52, color: C.green, fill: FILL.green, size: 11, gap: 14 }).flat(), lb(160, 100, '水 → 陸へ', 13, C.ink, 'middle', true), lb(160, 122, '始祖鳥：ハチュウ類と鳥類の特徴をもつ化石', 10, C.main, 'middle', true), cap('化石が、なかまのつながりを教えてくれる', C.green, FILL.green, 12)),
  },
  {
    note: '背骨のない無セキツイ動物には、節足動物と軟体動物があります。エビ・カニ・昆虫は、かたい殻と節のあるあしをもつ節足動物です。イカ・タコ・貝は、骨がなく、内臓が外とう膜というやわらかい膜に包まれた軟体動物です。',
    add: fresh(bx(10, 14, 145, 34, '節足動物', C.main, FILL.warm, 14), bx(165, 14, 145, 34, '軟体動物', C.blue, FILL.blue, 14), bx(10, 56, 145, 60, 'かたい殻（外骨格）\n節のあるあし\nエビ・カニ・昆虫', C.main, '#FFFFFF', 10), bx(165, 56, 145, 60, '骨がない\n内臓を外とう膜が包む\nイカ・タコ・貝', C.blue, '#FFFFFF', 10), cap('イカ・タコは軟体動物、エビ・カニは節足動物', C.blue, FILL.blue, 12)),
  },
  {
    note: 'まとめです。恒温動物は鳥類とホニュウ類だけ。胎生はホニュウ類だけ。両生類は子がえら、親が肺と皮ふ。無セキツイ動物には節足動物と軟体動物があります。',
    add: fresh(bx(20, 10, 280, 28, '恒温は鳥類とホニュウ類だけ', C.red, FILL.red, 13), bx(20, 46, 280, 28, '胎生はホニュウ類だけ', C.green, FILL.green, 13), bx(20, 82, 280, 28, '両生類：子はえら、親は肺と皮ふ', C.blue, FILL.blue, 13), bx(20, 118, 280, 28, '無セキツイ：節足動物・軟体動物', C.main, FILL.warm, 13)),
  },
]);

// ══ 体細胞分裂と減数分裂 ══
const rodsAt = (cx: number, cy: number, n: number, dbl = false, cols: string[] = [C.red, C.blue, C.red, C.blue], sp = 8): E[] => {
  const out: E[] = [];
  const w = (n - 1) * sp;
  for (let i = 0; i < n; i++) {
    const x = cx - w / 2 + i * sp + (i % 2 ? 2 : -2);
    const y = cy + (i % 2 ? 3 : -3);
    const col = cols[i % cols.length];
    out.push(bx(x - 2, y - 9, 4.5, 18, undefined, col, col));
    if (dbl) out.push(bx(x + 3, y - 9, 4.5, 18, undefined, col, col));
  }
  return out;
};
const cellR = (cx: number, cy: number, r: number, n: number, dbl = false, cols?: string[], sp = 8): E[] => [ci(cx, cy, r, undefined, C.gray, FILL.yellow), ...rodsAt(cx, cy, n, dbl, cols, sp)];
const bunretsu: DiagramFigure = show([
  {
    note: '体が成長するとき、体をつくる細胞の数がふえます。1つの細胞が2つに分かれて、数がふえていくのです。❓このとき、細胞の中の染色体（せんしょくたい：遺伝の情報をもつひも状のもの）はどうなるのでしょう。',
    add: [ci(50, 60, 22, undefined, C.gray, FILL.yellow), ar(76, 60, 96, 60, C.gray), ci(124, 44, 16, undefined, C.gray, FILL.yellow), ci(124, 78, 16, undefined, C.gray, FILL.yellow), ar(146, 60, 166, 60, C.gray), ...[[184, 32], [214, 32], [184, 60], [214, 60], [184, 88], [214, 88], [244, 46], [244, 76]].map((p) => ci(p[0], p[1], 12, undefined, C.gray, FILL.yellow)), lb(160, 122, '分かれて、数がふえていく', 12, C.ink, 'middle', true), cap('細胞が分かれて成長する。染色体は？', C.blue, FILL.blue)],
  },
  {
    note: '体細胞分裂の始まりです。ここでは細胞に染色体が4本あるとします。分かれるとき、染色体の数は変わるのでしょうか。',
    add: fresh(...cellR(50, 70, 38, 4), lb(50, 122, '染色体 4本', 11, C.ink, 'middle', true), cap('染色体4本の細胞', C.blue, FILL.blue)),
  },
  {
    note: '❓なぜ分かれても数が同じになるのでしょう。分裂の前に、染色体がそれぞれコピーされて、2倍（4本 → 8本）になるからです。同じ設計図を、もう一組つくっておくのです。',
    add: [ar(92, 70, 118, 70, C.gray), ...cellR(160, 70, 38, 4, true, undefined, 12), lb(160, 122, '染色体をコピー（8本）', 11, C.red, 'middle', true), ...band(BY, cap('分裂の前に染色体がコピーされて2倍になる', C.red, FILL.red, 12))],
  },
  {
    note: 'コピーされた染色体は、半分ずつに分かれて、2つの新しい細胞に入ります。8本が4本ずつに分かれるので、できた細胞の染色体は、もとと同じ4本です。',
    add: fresh(...cellR(40, 70, 32, 4, true, undefined, 9), ar(76, 70, 100, 70, C.gray), ...cellR(150, 44, 28, 4, false, undefined, 9), ...cellR(150, 100, 28, 4, false, undefined, 9), lb(240, 44, '4本', 12, C.ink, 'middle', true), lb(240, 100, '4本', 12, C.ink, 'middle', true), lb(250, 72, 'もとと同じ', 10, C.green, 'middle', true), cap('体細胞分裂：染色体の数は変わらない', C.green, FILL.green)),
  },
  {
    note: '次に、生殖細胞（精子や卵）をつくるときの分裂を見ます。これを減数分裂といいます。❓なぜ「減数」なのでしょう。染色体の数が、もとの半分に減るからです。4本が2本ずつになります。',
    add: fresh(...cellR(50, 70, 38, 4), ar(92, 70, 118, 70, C.gray), ...cellR(170, 44, 28, 2, false, [C.red, C.blue], 9), ...cellR(170, 100, 28, 2, false, [C.red, C.blue], 9), lb(250, 44, '2本', 12, C.ink, 'middle', true), lb(250, 100, '2本', 12, C.ink, 'middle', true), lb(250, 72, '生殖細胞', 10, C.main, 'middle', true), cap('減数分裂：染色体の数が半分になる', C.main, FILL.warm)),
  },
  {
    note: '❓なぜ半分にする必要があるのでしょう。受精では、2つの生殖細胞（精子と卵）が合わさるからです。半分どうしが合わさって、ちょうどもとの数にもどります。2本＋2本＝4本。',
    add: fresh(...cellR(50, 44, 26, 2, false, [C.red, C.blue], 9), ...cellR(50, 100, 26, 2, false, [C.red, C.blue], 9), lb(100, 74, '＋', 18, C.ink, 'middle', true), ar(120, 74, 156, 74, C.gray), ...cellR(220, 74, 40, 4, false, undefined, 12), lb(220, 126, '受精卵：4本', 11, C.ink, 'middle', true), lb(50, 138, '半分どうし', 10, C.gray, 'middle'), cap('半分 ＋ 半分 ＝ もとの数', C.green, FILL.green)),
  },
  {
    note: '❓もし減数分裂で半分にならなかったら？ たとえば24本どうしが合わさって48本になり、次の世代は96本…と、世代ごとに2倍にふえてしまいます。減数分裂があるから、数が保たれるのです。',
    add: fresh(...flow(['24本', '48本', '96本'], 22, { h: 44, color: C.red, fill: FILL.red, size: 15 }).flat(), lb(160, 86, '世代ごとに2倍にふえてしまう', 12, C.red, 'middle', true), lb(160, 108, '半分にするから、いつも同じ数', 12, C.green, 'middle', true), cap('減数分裂があるから、染色体の数が保たれる', C.green, FILL.green, 12)),
  },
  {
    note: '体細胞分裂の観察には、根の先端を使います。❓なぜ根の先端なのでしょう。根の先端は成長点といって、さかんに細胞分裂して伸びている場所だからです。分裂の途中の細胞をたくさん見つけられます。根もとは、細胞が大きくなるだけで、分裂は見られません。',
    add: fresh(bx(146, 6, 28, 100, undefined, C.main, FILL.warm), pg([[146, 106], [174, 106], [160, 130]], C.main, FILL.warm), ...[[154, 96], [166, 96], [154, 110], [166, 110]].map((p) => ci(p[0], p[1], 4, undefined, C.red, FILL.red)), ar(230, 110, 180, 110, C.red), lb(266, 106, '成長点\nさかんに分裂', 10, C.red, 'middle', true), ar(230, 30, 180, 30, C.gray), lb(266, 30, '根もと\n分裂しない', 10, C.gray, 'middle', true), cap('観察は根の先端（成長点）を使う', C.red, FILL.red)),
  },
  {
    note: '根の先をうすい塩酸につけます。❓なぜでしょう。細胞どうしをつなぐ部分をとかして、細胞をはなれやすくするためです。細胞が重なったままだと、1つ1つが見えません。',
    add: fresh(...[[50, 50], [70, 60], [60, 78], [84, 46], [80, 74]].map((p) => ci(p[0], p[1], 15, undefined, C.gray, FILL.yellow)), lb(68, 110, '重なって見にくい', 10, C.red, 'middle', true), ar(130, 64, 164, 64, C.blue), lb(147, 50, 'うすい塩酸', 10, C.blue, 'middle', true), ...[[200, 40], [246, 44], [276, 70], [222, 82], [258, 100], [200, 104]].map((p) => ci(p[0], p[1], 15, undefined, C.gray, FILL.yellow)), lb(238, 130, 'はなれて1つずつ見える', 10, C.green, 'middle', true), cap('塩酸で細胞をはなれやすくする', C.blue, FILL.blue)),
  },
  {
    note: '観察の手順です。根の先を切る → うすい塩酸でやわらかくする → 染色液で核（染色体）を染める → おしつぶして顕微鏡で見る。❓なぜ染めるのか？ 染色体は透明に近く、染めないと見えにくいからです。',
    add: fresh(...flow(['根の先を\n切る', 'うすい塩酸\nではなす', '染色液で\n染める', 'おしつぶして\n観察'], 22, { h: 58, color: C.green, fill: FILL.green, size: 10, gap: 12 }).flat(), lb(160, 104, '酢酸カーミン液・酢酸オルセイン液で赤く染まる', 10, C.red, 'middle', true), cap('切る → 塩酸 → 染める → おしつぶす', C.green, FILL.green)),
  },
  {
    note: '練習です。染色体を24本もつ生物の生殖細胞は、染色体を何本もつでしょう。減数分裂で半分になるので、24 ÷ 2 ＝ 12本。受精すると 12 ＋ 12 ＝ 24本で、もとの数にもどります。',
    add: fresh(bx(10, 20, 88, 44, '体細胞\n24本', C.blue, FILL.blue, 13), ar(102, 42, 122, 42, C.gray), bx(126, 20, 88, 44, '生殖細胞\n12本', C.main, FILL.warm, 13), ar(218, 42, 238, 42, C.gray), bx(242, 20, 68, 44, '受精卵\n24本', C.green, FILL.green, 12), lb(160, 96, '24 ÷ 2 ＝ 12　　12 ＋ 12 ＝ 24', 14, C.ink, 'middle', true), cap('生殖細胞は12本、受精卵は24本', C.green, FILL.green)),
  },
  {
    note: 'まとめです。体細胞分裂は染色体の数が変わらず、減数分裂だけが半分にします。受精で半分どうしが合わさって、もとの数にもどります。観察は根の先端、塩酸は細胞をはなすためです。',
    add: fresh(bx(20, 10, 280, 28, '体細胞分裂：染色体の数は変わらない', C.blue, FILL.blue, 13), bx(20, 46, 280, 28, '減数分裂：染色体の数が半分になる', C.main, FILL.warm, 13), bx(20, 82, 280, 28, '受精：半分＋半分＝もとの数', C.green, FILL.green, 13), bx(20, 118, 280, 28, '観察は根の先端。塩酸は細胞をはなす', C.red, FILL.red, 12)),
  },
]);

// ══ 有性生殖と無性生殖 ══
const seishoku: DiagramFigure = show([
  {
    note: '生き物のふえ方には、大きく2種類あります。受精を行う有性生殖と、受精を行わない無性生殖です。❓子は親と同じになるのでしょうか。ふえ方によって、答えが変わります。',
    add: [bx(14, 20, 140, 60, '有性生殖\n（受精あり）', C.blue, FILL.blue, 14), bx(166, 20, 140, 60, '無性生殖\n（受精なし）', C.green, FILL.green, 14), lb(160, 110, '子は親とそっくり？', 14, C.ink, 'middle', true), cap('ふえ方は2種類。子は親と同じになる？', C.ink, '#FFFFFF')],
  },
  {
    note: '無性生殖では、親の体の一部から、子ができます。ジャガイモのいもから新しい芽が出るのがその例です。子は親とまったく同じ形質になり、このような子をクローンといいます。',
    add: fresh(ci(70, 66, 36, '親', C.green, FILL.green, 14), ar(110, 66, 170, 66, C.gray), ci(230, 66, 36, '子', C.green, FILL.green, 14), lb(140, 50, '体の一部から', 10, C.gray, 'middle'), lb(230, 118, 'クローン\n（親と同じ）', 11, C.green, 'middle', true), cap('無性生殖：親と同じ子（クローン）ができる', C.green, FILL.green)),
  },
  {
    note: '❓なぜ親とまったく同じになるのでしょう。受精をしないので、染色体（遺伝子）が、そのまま子に受けつがれるからです。同じ設計図を、そのままコピーして使っていることになります。',
    add: fresh(...cellR(70, 66, 40, 4), ar(116, 66, 174, 66, C.gray), lb(145, 52, 'そのまま', 10, C.gray, 'middle'), ...cellR(230, 66, 40, 4), lb(70, 120, '親', 11, C.ink, 'middle', true), lb(230, 120, '子（染色体が同じ）', 11, C.ink, 'middle', true), cap('染色体がそのまま → 親と同じ形質', C.green, FILL.green)),
  },
  {
    note: '無性生殖の例です。ジャガイモをいもからふやす、植物を挿し木でふやす、ミカヅキモのような単細胞生物が分裂してふえる、などがあります。',
    add: fresh(bx(10, 20, 96, 60, 'ジャガイモ\nいも', C.green, FILL.green, 12), bx(112, 20, 96, 60, '挿し木', C.green, FILL.green, 13), bx(214, 20, 96, 60, 'ミカヅキモ\nの分裂', C.green, FILL.green, 12), lb(160, 110, 'どれも受精をしない', 13, C.ink, 'middle', true), cap('無性生殖の例')),
  },
  {
    note: '有性生殖では、2つの親から生殖細胞（精子と卵など）がつくられ、それが合わさる受精で、子ができます。赤い染色体をもつ細胞と、青い染色体をもつ細胞が合わさると、赤と青がまざった子になります。',
    add: fresh(...cellR(50, 34, 24, 2, false, [C.red, C.red], 9), lb(50, 64, '親A', 10, C.red, 'middle', true), ...cellR(50, 104, 24, 2, false, [C.blue, C.blue], 9), lb(50, 134, '親B', 10, C.blue, 'middle', true), lb(104, 76, '＋', 18, C.ink, 'middle', true), ar(124, 76, 164, 76, C.gray), ...cellR(230, 76, 42, 4, false, [C.red, C.blue, C.red, C.blue], 13), lb(230, 130, '受精卵（まざる）', 10, C.ink, 'middle', true), cap('有性生殖：2つの親の遺伝子がまざる', C.blue, FILL.blue)),
  },
  {
    note: '❓なぜ子が親とちがうことがあるのでしょう。どの染色体の組み合わせになるかが、受精のたびに変わるからです。同じ親からでも、赤と青の組み合わせがちがう、いろいろな子ができます。',
    add: fresh(...cellR(60, 60, 34, 4, false, [C.red, C.red, C.blue, C.blue], 10), ...cellR(160, 60, 34, 4, false, [C.red, C.blue, C.blue, C.blue], 10), ...cellR(260, 60, 34, 4, false, [C.red, C.red, C.red, C.blue], 10), lb(160, 118, '同じ親からでも、組み合わせがちがう', 12, C.ink, 'middle', true), cap('組み合わせが変わる → 形質に多様性が生まれる', C.blue, FILL.blue, 12)),
  },
  {
    note: '❓多様性があると、なぜよいのでしょう。病気や気候の変化が起きたとき、全部が同じ性質だと、まとめてやられてしまいます。いろいろな性質の子がいれば、その中のどれかは生きのびられるからです。',
    add: fresh(...[0, 1, 2, 3, 4].map((i) => ci(40 + i * 60, 34, 18, undefined, C.green, FILL.green)), ...[0, 1, 2, 3, 4].map((i) => lb(40 + i * 60, 34, '×', 20, C.red, 'middle', true)), lb(160, 66, '全部同じ → 全部やられる', 11, C.red, 'middle', true), ...[[C.purple, FILL.purple], [C.blue, FILL.blue], [C.main, FILL.yellow], [C.red, FILL.red], [C.green, FILL.green]].map((c, i) => ci(40 + i * 60, 104, 18, undefined, c[0], c[1])), lb(100, 104, '×', 20, C.red, 'middle', true), lb(220, 104, '×', 20, C.red, 'middle', true), lb(160, 136, 'いろいろ → 生きのびるものがいる', 11, C.green, 'middle', true), cap('多様性があると、環境の変化に強い', C.green, FILL.green)),
  },
  {
    note: '❓では、無性生殖には良いところはないのでしょうか。あります。相手がいなくても、速く、同じ性質の子をたくさんふやせます。そのかわり、全部が同じなので、病気などにはまとめて弱いという弱点があります。',
    add: fresh(bx(14, 20, 140, 60, '無性生殖の利点', C.green, FILL.green, 13), bx(166, 20, 140, 60, '無性生殖の弱点', C.red, FILL.red, 13), bx(14, 84, 140, 46, '相手がいらない\n速くふやせる', C.green, '#FFFFFF', 11), bx(166, 84, 140, 46, '全部同じ性質\n変化に弱い', C.red, '#FFFFFF', 11), cap('利点と弱点は、裏表', C.ink, '#FFFFFF')),
  },
  {
    note: '❓ジャガイモは、有性生殖でしょうか、無性生殖でしょうか。いもからふやせば、受精をしないので無性生殖です。同じジャガイモでも、花が咲いて種子ができ、それからふやせば有性生殖です。生き物の種類ではなく、ふやし方で決まります。',
    add: fresh(bx(14, 20, 140, 44, 'いもからふやす', C.green, FILL.green, 13), bx(166, 20, 140, 44, '種子からふやす', C.blue, FILL.blue, 13), ar(84, 66, 84, 84, C.green), ar(236, 66, 236, 84, C.blue), bx(14, 88, 140, 40, '無性生殖', C.green, FILL.green, 14), bx(166, 88, 140, 40, '有性生殖\n（花→受精→種子）', C.blue, FILL.blue, 11), cap('生き物の種類でなく、ふやし方で決まる', C.red, FILL.red)),
  },
  {
    note: '2つを表で比べます。受精は、有性ではあり、無性ではなし。子の形質は、有性は多様、無性は親と同じ（クローン）。例は、有性が種子でふえる、無性が挿し木です。',
    add: fresh(cell(8, 6, 70, 24, '', C.gray, FILL.gray), cell(82, 6, 110, 24, '有性生殖', C.blue, FILL.blue, 12), cell(196, 6, 116, 24, '無性生殖', C.green, FILL.green, 12), cell(8, 34, 70, 28, '受精', C.gray, FILL.gray, 11), cell(82, 34, 110, 28, 'あり', C.blue, FILL.blue, 12), cell(196, 34, 116, 28, 'なし', C.green, FILL.green, 12), cell(8, 66, 70, 28, '子の形質', C.gray, FILL.gray, 10), cell(82, 66, 110, 28, '多様', C.blue, FILL.blue, 12), cell(196, 66, 116, 28, '親と同じ（クローン）', C.green, FILL.green, 10), cell(8, 98, 70, 28, '例', C.gray, FILL.gray, 11), cell(82, 98, 110, 28, '種子でふえる', C.blue, FILL.blue, 11), cell(196, 98, 116, 28, '挿し木・いも', C.green, FILL.green, 11), cap('受精の有無で、子の形質が変わる', C.ink, '#FFFFFF')),
  },
  {
    note: 'まとめです。無性生殖は親と同じ形質（クローン）、有性生殖は多様性が生まれ、環境の変化に強くなります。ふえ方は、生き物の種類ではなく、受精をするかどうかで決まります。',
    add: fresh(bx(20, 10, 280, 28, '無性生殖：親と同じ形質（クローン）', C.green, FILL.green, 13), bx(20, 46, 280, 28, '有性生殖：形質に多様性が生まれる', C.blue, FILL.blue, 13), bx(20, 82, 280, 28, '利点：多様性 → 環境の変化に強い', C.main, FILL.warm, 13), bx(20, 118, 280, 28, '受精をするかどうかで決まる', C.red, FILL.red, 13)),
  },
]);

export const DIAGRAMS_KOKO_RIKA_OLD_E: Record<string, DiagramFigure> = {
  '蒸散量の計算（ワセリンの実験）': jousan,
  '根・茎・葉のつくりと水の通り道': konKuki,
  '植物の分類（中学）': bunrui,
  '細胞のつくりと観察': saibou,
  '消化酵素のはたらき（中学）': shouka,
  '吸収と柔毛のしくみ（中学）': kyuushuu,
  '血液循環の経路（体循環・肺循環）': junkan,
  '呼吸のしくみと肺胞': kokyuu,
  '排出と肝臓・じん臓のはたらき（中学）': haishutsu,
  '刺激と反応・反射': hansha,
  '動物の分類と進化のあと': dobutsu,
  '体細胞分裂と減数分裂': bunretsu,
  '有性生殖と無性生殖': seishoku,
};
