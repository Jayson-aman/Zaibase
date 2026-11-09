// 本試験対策（学校別）追加分A：麻布中学校（中学受験・算数 ID _13〜_50）の動く図解。算数の追加38問のうち20問に付ける。
// 各図は show() で7枚以上。座標は 320×240、下の帯（y 146〜）に説明の文字が出る。
import type { DiagramElement, Figure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, show, band, fresh } from './diagram-kit';
import type { Slide } from './diagram-kit';

type E = DiagramElement;

// 文字の幅の見積もり（scripts/figlint.ts と同じ）。はみ出すときは文字サイズを自動で小さくする。
const charW = (c: string, s: number) => (/[\x20-\x7e]/.test(c) ? (c === ' ' ? 0.3 : /[0-9]/.test(c) ? 0.58 : /[A-Z]/.test(c) ? 0.66 : 0.52) * s : s);
const textW = (t: string, s: number) => Math.max(...t.split('\n').map((l) => [...l].reduce((a, c) => a + charW(c, s), 0)));
const fit = (t: string, w: number, s: number) => { let z = s; while (textW(t, z) > w && z > 8) z -= 0.5; return z; };

const tx = (x: number, y: number, t: string, size = 14, color: string = C.ink, bold = true, anchor: 'start' | 'middle' | 'end' = 'middle'): E => {
  const room = anchor === 'middle' ? 2 * Math.min(x, 320 - x) - 8 : anchor === 'start' ? 316 - x : x - 4;
  return lb(x, y, t, fit(t, room, size), color, anchor, bold);
};
// 箱の中の文字は、箱に収まる大きさに自動で小さくする
const bf = (x: number, y: number, w: number, h: number, t: string, color?: string, fill?: string, size = 12): E => {
  const nl = t.split('\n').length;
  let z = fit(t, w - 6, size);
  while (nl * z * 1.2 > h - 1 && z > 8) z -= 0.5;
  return bx(x, y, w, h, t, color, fill, z);
};

// 下の帯：lines の先頭文字で色が決まる（=緑 / ~赤 / *紫 / それ以外は青）
const tone = (s: string): [string, string, string] => {
  const c = s[0];
  if (c === '=') return [s.slice(1), C.green, FILL.green];
  if (c === '~') return [s.slice(1), C.red, FILL.red];
  if (c === '*') return [s.slice(1), C.purple, FILL.purple];
  return [s, C.blue, FILL.blue];
};
const B = (lines: string[]): E[] => {
  if (lines.length === 1) {
    const [t, col, fill] = tone(lines[0]);
    const big = t.startsWith('答え');
    return band(146, bf(20, big ? 158 : 166, 280, big ? 42 : 36, t, col, fill, big ? 18 : 15));
  }
  const h = lines.length === 2 ? 36 : 27;
  const gap = lines.length === 2 ? 40 : 30;
  const y0 = lines.length === 2 ? 154 : 150;
  return band(146, ...lines.map((s, i) => { const [t, col, fill] = tone(s); return bf(20, y0 + i * gap, 280, h, t, col, fill, lines.length === 2 ? 14 : 13); }));
};
const S = (note: string, lines: string[], add: E[] = []): Slide => ({ note, add: [...add, ...B(lines)] });
const SF = (note: string, lines: string[], draw: E[]): Slide => ({ note, add: [...fresh(...draw), ...B(lines)] });
// 上の欄に文字の行だけを並べる（色は行頭の記号：=緑 ~赤 *紫）
const textLines = (strs: string[]): E[] => {
  const n = strs.length;
  const size = n === 1 ? 24 : n === 2 ? 20 : n === 3 ? 18 : 16;
  const dy = n === 1 ? 0 : n <= 3 ? 34 : 28;
  return strs.map((s, i) => {
    const c = s[0];
    const [t, col] = c === '=' ? [s.slice(1), C.green] : c === '~' ? [s.slice(1), C.red] : c === '*' ? [s.slice(1), C.purple] : [s, C.ink];
    return lb(160, 70 + (i - (n - 1) / 2) * dy + size * 0.35, t, fit(t, 288, size), col, 'middle', true);
  });
};
const P = (note: string, strs: string[], bottom: string[], extra: E[] = []): Slide => SF(note, bottom, [...textLines(strs), ...extra]);
const ANS = (t: string, note?: string): Slide => S(note ?? `答えは${t}です。`, [`=答え　${t}`]);

const poly = (cx: number, cy: number, r: number, n: number, rot = -90): [number, number][] =>
  Array.from({ length: n }, (_, k) => { const a = ((rot + (360 / n) * k) * Math.PI) / 180; return [cx + r * Math.cos(a), cy + r * Math.sin(a)] as [number, number]; });
const circ = (cx: number, cy: number, r: number, color: string = C.ink, fill?: string): E => pg(poly(cx, cy, r, 48), color, fill);
const arcLines = (cx: number, cy: number, r: number, a0: number, a1: number, color: string = C.ink, width = 2.5): E[] => {
  const out: E[] = []; const n = 14;
  for (let i = 0; i < n; i++) {
    const t0 = ((a0 + ((a1 - a0) * i) / n) * Math.PI) / 180, t1 = ((a0 + ((a1 - a0) * (i + 1)) / n) * Math.PI) / 180;
    out.push(ln(cx + r * Math.cos(t0), cy - r * Math.sin(t0), cx + r * Math.cos(t1), cy - r * Math.sin(t1), color, false, width));
  }
  return out;
};


const ell = (cx: number, cy: number, rx: number, ry: number, color: string = C.ink, fill?: string): E =>
  pg(Array.from({ length: 48 }, (_, k) => { const a = (k / 48) * 2 * Math.PI; return [cx + rx * Math.cos(a), cy + ry * Math.sin(a)] as [number, number]; }), color, fill);
const P2 = (pts: [number, number][], color: string = C.ink, fill?: string): E => pg(pts, color, fill);
const at = (cx: number, cy: number, r: number, deg: number): [number, number] => [cx + r * Math.cos((deg * Math.PI) / 180), cy - r * Math.sin((deg * Math.PI) / 180)];

// ───────── 算数（追加分） ─────────

// 17 通過算
const trainAt = (x0: number, y: number, color: string, fill: string, t: string): E => bx(x0, y, 60, 22, t, color, fill, 11);
const s_s17: Figure = show([
  SF('長さ120mの電車が、秒速20mで走り、トンネルを通りぬけるのに40秒かかります。', ['電車120m　秒速20m　40秒'], [bx(100, 60, 120, 46, 'トンネル　？m', C.gray, FILL.gray, 13), trainAt(30, 72, C.blue, FILL.blue, '電車120m'), ar(94, 83, 100, 83, C.blue)]),
  SF('「先頭が入った時」から「最後尾が出終わった時」までを考えます。先頭は、入口から出口の先まで進みます。', ['先頭が進む道のりに注目'], [bx(80, 70, 120, 40, 'トンネル', C.gray, FILL.gray, 13), trainAt(20, 79, C.blue, FILL.blue, '入った時'), trainAt(210, 79, C.red, FILL.red, '出終わり'), ar(80, 52, 270, 52, C.purple), tx(175, 44, '先頭が進んだ道のり', 12, C.purple)]),
  P('理由。最後尾が出終わるには、先頭がトンネルを出たあと、電車の長さの分、さらに進む必要があります。', ['先頭が進む道のり', '＝トンネルの長さ＋電車の長さ'], ['進む道のり＝トンネル＋電車']),
  P('40秒間に進む道のりは、20×40＝800m。', ['20×40＝800m'], ['秒速20m×40秒']),
  SF('この800mが、トンネルと電車をあわせた長さです。', ['800m＝トンネル＋120m'], [bf(20, 40, 238, 34, 'トンネル　？m', C.gray, FILL.gray, 14), bf(258, 40, 42, 34, '120m', C.blue, FILL.blue, 11), tx(160, 100, '全部で800m', 16, C.purple)]),
  P('トンネルの長さは、800−120＝680mです。', ['800−120＝680（m）'], ['電車の長さを引く']),
  ANS('680m'),
  P('確かめ。680＋120＝800m。800÷20＝40秒で、条件と合います。', ['680＋120＝800', '800÷20＝40秒'], ['=40秒で一致 ✓']),
], '20×40＝800m。800−120＝680m。');

// 18 平均の速さ
const s_s18: Figure = show([
  P('A町からB町まで、行きは時速6km、帰りは時速4kmで往復します。往復の平均の速さを求めます。', ['行き　時速6km', '帰り　時速4km', '平均の速さは？'], ['往復の平均の速さ']),
  P('まちがい。(6＋4)÷2＝5としてはいけません。行きと帰りで、かかる時間がちがうからです。', ['~(6＋4)÷2＝5 ✕', '時間がちがうので、そのまま平均できない'], ['速さの平均は、そのままでは出せない']),
  P('平均の速さ＝全体の道のり÷全体の時間。道のりがわからないので、片道を12kmと決めます（6と4でわり切れる数）。', ['片道12kmと仮に決める'], ['6と4の最小公倍数12km']),
  SF('行きは12÷6＝2時間、帰りは12÷4＝3時間。時間の長さを、箱の長さで表します。', ['行き2時間　帰り3時間'], [bf(20, 36, 100, 34, '行き　2時間', C.blue, FILL.blue, 14), bf(120, 36, 150, 34, '帰り　3時間', C.red, FILL.red, 14), tx(160, 100, '合計　5時間', 16, C.purple)]),
  P('往復の道のりは、12×2＝24km。全体の時間は、2＋3＝5時間です。', ['道のり　12×2＝24km', '時間　2＋3＝5時間'], ['24kmを5時間で']),
  P('平均の速さは、24÷5＝4.8。', ['24÷5＝4.8'], ['平均＝全体の道のり÷全体の時間']),
  ANS('時速4.8km'),
  P('確かめ。片道を24kmにしても、往復48kmで時間は4＋6＝10時間。48÷10＝4.8で同じです。', ['48÷10＝4.8'], ['=道のりを変えても同じ ✓']),
], '24km÷5時間＝時速4.8km。5kmではない。');

// 19 往復の出会い
const lineAB = (): E[] => [ln(30, 60, 290, 60, C.ink, false, 3), tx(30, 80, 'A町', 14), tx(290, 80, 'B町', 14), tx(160, 50, '2400m', 13, C.gray)];
const s_s19: Figure = show([
  SF('A町とB町は2400m。太郎さんはA町から分速100m、次郎さんはB町から分速140mで、向かいあって出発します。', ['出会ったら、折り返して往復'], [...lineAB(), ar(36, 38, 80, 38, C.blue), ar(284, 38, 240, 38, C.red), tx(40, 104, '太郎　分速100m', 12, C.blue, true, 'start'), tx(280, 124, '次郎　分速140m', 12, C.red, true, 'end')]),
  P('1回目に出会うまでに、2人あわせて進む道のりは、2人の間の道のり2400mです。', ['1回目　2人あわせて2400m'], ['出会う＝2人で間の道のりを進みきる']),
  SF('出会ったあと、2人はそれぞれ相手の町まで進みます（2人あわせて2400m）。折り返して、また出会うまで、もう2400m進みます。', ['出発→1回目　2400m', '→両方の町まで　2400m', '→2回目　2400m'], [bf(20, 14, 280, 28, '出発から1回目まで　2400m', C.blue, FILL.blue, 13), bf(20, 50, 280, 28, '1回目から両方が端まで　2400m', C.green, FILL.green, 13), bf(20, 86, 280, 28, '折り返して2回目まで　2400m', C.red, FILL.red, 13)]),
  P('出発から2回目までに、2人あわせて進む道のりは、2400×3＝7200mです。', ['2400×3＝7200m'], ['2回目は、間の道のりの3倍']),
  P('2人あわせて、1分に進む道のりは、100＋140＝240mです。', ['100＋140＝240m/分'], ['速さの和は240']),
  P('かかる時間は、7200÷240＝30分です。', ['7200÷240＝30（分）'], ['道のり÷速さの和']),
  ANS('30分後'),
  P('確かめ。30分で、太郎さんは3000m（B町で折り返して600m戻る）、次郎さんは4200m（A町で折り返して1800m戻る）。どちらもB町から600mの地点で出会います。', ['太郎　2400＋600＝3000m', '次郎　2400＋1800＝4200m'], ['=B町から600mで出会う ✓']),
], '合計の道のり2400×3＝7200m。7200÷240＝30分後。');

// 20 てんびん（濃度）
const bal = (x5: number, x8: number, x10: number, y = 80): E[] => [ln(x5, y, x10, y, C.ink, false, 3), P2([[x8, y], [x8 - 10, y + 22], [x8 + 10, y + 22]], C.gray, FILL.gray), tx(x5, y + 18, '5％', 13, C.blue), tx(x10, y + 18, '10％', 13, C.red), tx(x8, y + 40, '8％', 14, C.purple)];
const s_s20: Figure = show([
  SF('5％の食塩水200gと、10％の食塩水を混ぜて、8％の食塩水をつくります。10％の食塩水は何g必要か。', ['5％200g ＋ 10％？g → 8％'], [bf(20, 40, 80, 40, '5％\n200g', C.blue, FILL.blue, 14), tx(116, 66, '＋', 20), bf(132, 40, 80, 40, '10％\n？g', C.red, FILL.red, 14), ar(214, 60, 236, 60, C.ink), bf(238, 40, 66, 40, '8％', C.purple, FILL.purple, 16)]),
  SF('濃さを横の線にならべます。混ぜた8％は、5％と10％のあいだにきます。', ['5％と10％のあいだに8％'], bal(40, 184, 280)),
  S('8％は、5％から3％、10％から2％はなれています。', ['はなれ具合は 3：2'], [tx(112, 66, '3％', 13, C.green), tx(232, 66, '2％', 13, C.green)]),
  P('理由。てんびんでは、重さの比は、支点からの距離の逆の比でつりあいます。近いほうが、たくさん混ざっています。', ['はなれ具合　3：2', '重さの比は逆　2：3'], ['重さの比は、はなれ具合の逆']),
  P('5％の食塩水が2、10％の食塩水が3にあたります。', ['5％　2　200g', '10％　3　？g'], ['200gが2にあたる']),
  P('200÷2＝100g が1にあたるので、10％は 100×3＝300g です。', ['200÷2＝100', '100×3＝300（g）'], ['1あたり100g']),
  ANS('300g'),
  P('確かめ。食塩は200×0.05＝10gと300×0.10＝30gで合計40g。全体500gの40÷500＝0.08＝8％です。', ['10＋30＝40g', '40÷500＝8％'], ['=8％で一致 ✓']),
], '3：2の逆の2：3。200g：？＝2：3 → 300g。');

// 22 星形の先の角
const sp = (cx: number, cy: number, R: number) => {
  const v = [90, 18, -54, -126, 162].map((a) => at(cx, cy, R, a));
  const s = 2 * R * Math.sin(Math.PI / 5);
  const h = (s / 2) * Math.tan((72 * Math.PI) / 180);
  const a = s / (2 * Math.tan(Math.PI / 5));
  const tips = [54, -18, -90, -162, 126].map((d) => at(cx, cy, a + h, d));
  return { v, tips };
};
const star = sp(160, 72, 24.4);
const pent = (): E => P2(star.v as [number, number][], C.blue, FILL.blue);
const tipTris = (): E[] => star.tips.map((t, i) => P2([star.v[i], star.v[(i + 1) % 5], t] as [number, number][], C.purple, FILL.purple));
const s_s22: Figure = show([
  SF('正五角形の5つの辺を、両方向にのばすと、星の形ができます。星の5つの先の角の和を求めます。', ['先の5つの角の和は？'], [pent()]),
  S('のばした辺で、とがった三角形が5つできます。', ['先の三角形が5つ'], tipTris()),
  P('正五角形の1つの角は、180×3÷5＝108度です。', ['内角の和　180×3＝540°', '540÷5＝108°'], ['1つの角は108°']),
  SF('のばした辺と、五角形の辺がつくる角は、一直線180度から108度を引いて、72度。先の三角形の底の2つの角は、72度ずつです。', ['底の角　180−108＝72°'], [P2([[160, 32], [132, 118], [188, 118]], C.purple, FILL.purple), tx(160, 62, '？', 18, C.red), tx(138, 108, '72°', 12, C.blue, true, 'start'), tx(182, 108, '72°', 12, C.blue, true, 'end')]),
  P('理由。三角形の内角の和は180度。先の角は、180から底の角2つ分を引いた角度です。', ['先の角　180−72×2', '＝36°'], ['先の角は36度']),
  P('先の三角形は5つとも同じ形なので、先の角は全部36度。たすと、36×5＝180度です。', ['36×5＝180°'], ['5つ合わせて180°']),
  ANS('180度'),
  P('確かめ。先の三角形は5つとも合同なので、先の角はすべて36度。星の先の角の和は、いつも180度になります。', ['36×5＝180°'], ['=180度で一致 ✓']),
], '底の角72°。先の角36°。36×5＝180°。');

// 23 正八角形
const oc = { x: 160, y: 76, r: 50 };
const oAng = [202.5, 157.5, 112.5, 67.5, 22.5, -22.5, -67.5, -112.5];
const ov = oAng.map((a) => at(oc.x, oc.y, oc.r, a));
const oLab = 'ABCDEFGH'.split('').map((t, i) => { const [x, y] = at(oc.x, oc.y, oc.r + 13, oAng[i]); return tx(x, y + 5, t, 14); });
const oct = (): E[] => [P2(ov as [number, number][], C.blue), ...oLab];
const s_s23: Figure = show([
  SF('正八角形ABCDEFGH。A、B、C、Dはこの順にとなりあう頂点です。角ACDを求めます。', ['角ACD＝？'], oct()),
  S('頂点AとC、CとDを結んで、角ACDを見えるようにします。', ['角ACD＝角BCD−角BCA'], [ln(ov[0][0], ov[0][1], ov[2][0], ov[2][1], C.red, false, 2.5), ln(ov[2][0], ov[2][1], ov[3][0], ov[3][1], C.red, false, 2.5)]),
  P('正八角形の1つの角は、180×6÷8＝135度です。', ['内角の和　180×6＝1080°', '1080÷8＝135°'], ['角BCD＝135°']),
  SF('理由。三角形ABCは、AB＝BCの二等辺三角形で、頂角Bは135度。底角の和は180−135＝45度で、1つは22.5度です。', ['角BCA　45÷2＝22.5°'], [P2([[160, 86], [100, 111], [220, 111]], C.green, FILL.green), tx(160, 80, '135°', 14, C.red), tx(104, 130, '22.5°', 12, C.blue, true, 'start'), tx(216, 130, '22.5°', 12, C.blue, true, 'end'), tx(160, 54, 'AB＝BC', 13, C.purple)]),
  P('角ACD＝角BCD−角BCA＝135−22.5＝112.5度です。', ['135−22.5＝112.5°'], ['角ACD＝112.5°']),
  ANS('112.5度'),
  P('確かめ。ADとBCは平行なので台形ABCD。角BADは(360−135×2)÷2＝45度、角CADは45−22.5＝22.5度。角CDAも45度なので、角ACD＝180−22.5−45＝112.5度で一致。', ['角CAD＝22.5°　角CDA＝45°', '180−22.5−45＝112.5°'], ['=別の方法でも112.5° ✓']),
], '135°−22.5°＝112.5°。');

// 24 正六角形
const hc = { x: 160, y: 76, r: 46 };
const hAng = [150, 90, 30, -30, -90, -150];
const hv = hAng.map((a) => at(hc.x, hc.y, hc.r, a));
const hLab = 'ABCDEF'.split('').map((t, i) => { const [x, y] = at(hc.x, hc.y, hc.r + 11, hAng[i]); return tx(x, y + 5, t, 14); });
const hex = (): E[] => [P2(hv as [number, number][], C.blue), ...hLab];
const s_s24: Figure = show([
  SF('面積72cm²の正六角形ABCDEF。頂点A、C、Eを結ぶ三角形ACEの面積を求めます。', ['正六角形72cm²'], [...hex(), tx(58, 80, '72cm²', 14, C.ink)]),
  S('中心Oから各頂点に線を引くと、6つの合同な正三角形に分かれます。', ['1つ　72÷6＝12cm²'], [...hv.map((p) => ln(hc.x, hc.y, p[0], p[1], C.gray, false, 1.5))]),
  S('三角形ACEをかきます。まわりに、三角形ABC、CDE、EFAの3つが残ります。', ['ACE＝六角形−まわりの3つ'], [P2([hv[0], hv[2], hv[4]] as [number, number][], C.red, FILL.red)]),
  P('理由。四角形OABCは正三角形2つぶん（24cm²）。対角線ACで、同じ形の2つの三角形（OACとABC）に分かれるので、ABCは半分の12cm²です。', ['四角形OABC＝12×2＝24', 'ABC＝24÷2＝12cm²'], ['ABC＝12cm²']),
  P('三角形ABC、CDE、EFAは同じ形です。3つで、12×3＝36cm²。', ['12×3＝36cm²'], ['まわりの3つで36cm²']),
  P('三角形ACE＝正六角形−まわりの3つ＝72−36＝36cm²です。', ['72−36＝36（cm²）'], ['ACE＝36cm²']),
  ANS('36cm²'),
  P('確かめ。中心Oから見ると、三角形OAC、OCE、OEAも12cm²ずつで、合わせて36cm²。正六角形のちょうど半分です。', ['12×3＝36cm²'], ['=六角形の半分 ✓']),
], 'ABC＝12cm²。72−12×3＝36cm²。');

// 25 台形の対角線
const tz = { A: [80, 40], D: [200, 40], B: [50, 122], C: [230, 122], O: [140, 72] } as Record<string, [number, number]>;
const trap = (): E[] => [P2([tz.A, tz.D, tz.C, tz.B], C.blue), ln(tz.A[0], tz.A[1], tz.C[0], tz.C[1], C.gray, false, 1.5), ln(tz.B[0], tz.B[1], tz.D[0], tz.D[1], C.gray, false, 1.5), tx(68, 36, 'A', 14), tx(212, 36, 'D', 14), tx(38, 134, 'B', 14), tx(242, 134, 'C', 14), tx(152, 66, 'O', 13)];
const s_s25: Figure = show([
  SF('台形ABCD。AD＝4cm、BC＝6cm、ADとBCは平行です。対角線の交点がO、三角形OBCは45cm²。', ['台形ABCDの面積は？'], [...trap(), tx(140, 107, '45', 14, C.red)]),
  S('ADとBCが平行なので、AO：OC＝AD：BC＝4：6＝2：3です。', ['AO：OC＝2：3'], []),
  P('理由。高さが同じ三角形の面積の比は、底辺の比と同じです。OABとOBCは、AO：OCが底辺の比です。', ['OAB：OBC＝2：3', 'OAB＝45×2/3＝30cm²'], ['OAB＝30cm²']),
  SF('OCDの面積は、OABと等しくなります。三角形ABDとACDは、底辺ADが共通で高さも同じなので、同じ面積です。', ['OCD＝OAB＝30cm²'], [...trap(), tx(140, 107, '45', 14, C.red), tx(92, 82, '30', 14, C.green), tx(190, 82, '30', 14, C.green)]),
  P('DO：OB＝2：3。OADとOABは高さが同じなので、面積の比は2：3。OAD＝30×2/3＝20cm²です。', ['OAD＝30×2/3＝20cm²'], ['OAD＝20cm²']),
  P('4つの三角形をたします。20＋30＋45＋30＝125cm²。', ['20＋30＋45＋30', '＝125（cm²）'], ['4つの三角形の合計']),
  ANS('125cm²'),
  P('確かめ。OAD：OBC＝20：45＝4：9。相似比2：3を2回かけた比になっていて、合っています。', ['4：9＝(2×2)：(3×3)'], ['=相似比の2回かけと一致 ✓']),
], 'OAB30・OCD30・OAD20・OBC45。合計125cm²。');

// 26 方眼の対角線
const g26 = { x0: 80, y0: 28, cw: 18 };
const grid26 = (): E[] => {
  const o: E[] = [];
  for (let i = 0; i <= 9; i++) o.push(ln(g26.x0 + i * g26.cw, g26.y0, g26.x0 + i * g26.cw, g26.y0 + 6 * g26.cw, i === 0 || i === 9 ? C.ink : C.gray, false, i === 0 || i === 9 ? 2 : 1));
  for (let j = 0; j <= 6; j++) o.push(ln(g26.x0, g26.y0 + j * g26.cw, g26.x0 + 9 * g26.cw, g26.y0 + j * g26.cw, j === 0 || j === 6 ? C.ink : C.gray, false, j === 0 || j === 6 ? 2 : 1));
  return o;
};
const dg26 = (): E => ln(g26.x0, g26.y0 + 6 * g26.cw, g26.x0 + 9 * g26.cw, g26.y0, C.red, false, 3);
const s_s26: Figure = show([
  SF('たて6cm、よこ9cmの長方形を1cmのますに分けます。左下から右上へ対角線を引くと、何個のますを通るか。', ['対角線が通るますの数'], [...grid26(), dg26(), tx(40, 84, 'たて6', 13, C.ink), tx(160, 20, 'よこ9', 13, C.ink)]),
  S('対角線は、ますの境目の線を1本こえるたびに、となりのますに入ります。', ['線をこえる数＋1＝ますの数'], []),
  S('内側のたての線は9−1＝8本、内側のよこの線は6−1＝5本。あわせて13回こえるように見えます。', ['たて8本　よこ5本　合計13'], [tx(248, 70, 'たて線 8本', 12, C.blue, true, 'start'), tx(248, 90, 'よこ線 5本', 12, C.green, true, 'start')]),
  S('ますの角を通る点が2つあります（よこ3、たて2ごと）。ここでは、2本の線を同時にこえます。', ['角を通る点　2か所'], [ci(g26.x0 + 3 * g26.cw, g26.y0 + 6 * g26.cw - 2 * g26.cw, 5, undefined, C.purple, FILL.purple), ci(g26.x0 + 6 * g26.cw, g26.y0 + 6 * g26.cw - 4 * g26.cw, 5, undefined, C.purple, FILL.purple)]),
  P('理由。角の点では、2本こえても、ますは1つしか増えません。そのぶんを、13から引きます。', ['13−2＝11回こえる'], ['二重に数えた2回を引く']),
  P('はじめのますが1個。11回こえるので、ますが11個ふえます。1＋11＝12個。', ['1＋11＝12（個）'], ['はじめの1個を忘れない']),
  ANS('12個'),
  P('確かめ。たて＋よこ−最大公約数＝6＋9−3＝12個で、同じになります。', ['6＋9−3＝12'], ['=公式でも12個 ✓']),
], '13−2＝11回こえる。1＋11＝12個。');

// 27 回転体（円すい）
const s_s27: Figure = show([
  SF('直角をはさむ辺が3cmと4cmの直角三角形を、4cmの辺を軸にして1回転させます。', ['3cm・4cm・5cmの直角三角形'], [P2([[110, 126], [110, 66], [155, 126]], C.blue, FILL.blue), tx(100, 98, '4cm', 13, C.blue, true, 'end'), tx(132, 140, '3cm', 13, C.blue), tx(158, 94, '5cm', 13, C.ink, true, 'start'), ln(110, 50, 110, 134, C.red, true, 2), tx(110, 44, '軸', 12, C.red)]),
  SF('1回転させると、円すいができます。軸の4cmが高さ、まわる3cmが底面の半径です。', ['高さ4cm　半径3cm'], [P2([[160, 20], [118, 108], [202, 108]], C.blue, FILL.blue), ell(160, 108, 42, 12, C.blue, FILL.blue), ln(160, 20, 160, 108, C.red, true, 2), ln(160, 108, 202, 108, C.green, false, 2.5), tx(150, 66, '4', 14, C.red, true, 'end'), tx(184, 126, '3', 14, C.green)]),
  P('底面は、半径3cmの円です。面積は、3×3×3.14＝28.26cm²。', ['3×3×3.14＝28.26cm²'], ['底面積28.26cm²']),
  P('斜辺の5cmは、体積の計算には使いません。高さは軸の4cmです。', ['高さ＝4cm', '5cmは使わない'], ['斜辺（母線）5cmは使わない']),
  P('理由。円すいの体積は、同じ底面と高さの円柱の3分の1です。だから、底面積×高さ÷3で求めます。', ['円すい＝底面積×高さ÷3'], ['円柱の3分の1']),
  P('体積は、28.26×4÷3＝37.68cm³。', ['28.26×4＝113.04', '113.04÷3＝37.68'], ['底面積×高さ÷3']),
  ANS('37.68cm³'),
  P('確かめ。円柱は28.26×4＝113.04cm³。その3分の1は 113.04÷3＝37.68cm³で一致します。', ['113.04÷3＝37.68'], ['=円柱の3分の1 ✓']),
], '28.26×4÷3＝37.68cm³。斜辺5は使わない。');

// 28 積み上げた立方体
const cs = 14;
const stackBoxes = (): E[] => [bx(160 - 35, 134 - 70, 70, 70, '', C.blue, FILL.blue), bx(160 - 21, 64 - 42, 42, 42, '', C.green, FILL.green), bx(160 - 7, 22 - 14, 14, 14, '', C.red, FILL.red)];
const s_s28: Figure = show([
  SF('1辺5cm、3cm、1cmの立方体を、中心をそろえて積みます。正面から見た図です。', ['表面積は？'], [...stackBoxes(), tx(86, 100, '5cm', 13, C.blue, true, 'end'), tx(116, 44, '3cm', 13, C.green, true, 'end'), tx(150, 20, '1cm', 12, C.red, true, 'end')]),
  P('表面を、よこの面と、上向き・下向きの面に分けて数えます。', ['よこの面（まわり）', '上向きの面', '下向きの面'], ['3つに分けて数える']),
  P('よこの面は、立方体ごとに4面。4×(25＋9＋1)＝4×35＝140cm²。', ['4×(5×5＋3×3＋1×1)', '＝4×35＝140cm²'], ['よこの面140cm²']),
  SF('理由。上から見ると、5cmの正方形の中に、3cm・1cmの正方形がすべておさまります。上向きの面は、見える部分を合わせると、5×5。', ['上向き　5×5＝25cm²'], [bx(125, 30, 70, 70, '', C.blue, FILL.blue), bx(139, 44, 42, 42, '', C.green, FILL.green), bx(153, 58, 14, 14, '', C.red, FILL.red), tx(160, 118, '真上から見た図', 13, C.purple)]),
  P('下向きの面も同じで、真下から見える面積は 5×5＝25cm²。', ['下向き　25cm²'], ['下向きも25cm²']),
  P('表面積＝140＋25＋25＝190cm²。', ['140＋25＋25＝190（cm²）'], ['よこ＋上＋下']),
  ANS('190cm²'),
  P('確かめ。上向きの面を1つずつ数える。いちばん下 25−9＝16、まん中 9−1＝8、いちばん上 1。16＋8＋1＝25cm²で一致します。', ['16＋8＋1＝25cm²'], ['=真上から見た面積と一致 ✓']),
], 'よこ140＋上25＋下25＝190cm²。');

// 30 道順
const g30 = { x0: 50, y0: 24, dx: 44, dy: 34 };
const nx = (i: number) => g30.x0 + i * g30.dx;
const ny = (j: number) => g30.y0 + (3 - j) * g30.dy;
const road = (): E[] => {
  const o: E[] = [];
  for (let i = 0; i <= 5; i++) o.push(ln(nx(i), ny(0), nx(i), ny(3), C.gray, false, 1.5));
  for (let j = 0; j <= 3; j++) o.push(ln(nx(0), ny(j), nx(5), ny(j), C.gray, false, 1.5));
  return o;
};
const val30 = [[1, 1, 1, 1, 1, 1], [1, 2, 0, 1, 2, 3], [1, 3, 3, 4, 6, 9], [1, 4, 7, 11, 17, 26]];
const row30 = (j: number): E[] => val30[j].map((v, i) => (j === 1 && i === 2 ? ci(nx(i), ny(j), 10, '×', C.red, FILL.red, 12) : ci(nx(i), ny(j), 10, String(v), j === 3 && i === 5 ? C.green : C.blue, j === 3 && i === 5 ? FILL.green : FILL.blue, 10)));
const s_s30: Figure = show([
  SF('A地点から、東へ5、北へ3のB地点まで、東か北だけに進みます。×の交差点は通れません。', ['×は通れない交差点'], [...road(), tx(nx(0) - 18, ny(0) + 5, 'A', 14), tx(nx(5) + 18, ny(3) + 5, 'B', 14), ci(nx(2), ny(1), 10, '×', C.red, FILL.red, 12)]),
  S('いちばん下の線と、左の線は、まっすぐの道が1本だけ。どの交差点も1通りです。', ['下の段・左の列は 1通り'], [...row30(0), ...[1, 2, 3].map((j) => ci(nx(0), ny(j), 10, '1', C.blue, FILL.blue, 10))]),
  P('理由。ある交差点に着く直前は、左の交差点か、下の交差点のどちらか。だから、その2つの数をたします。通れない所は0です。', ['左の数＋下の数', '通れない交差点は0'], ['となりの2つをたしていく']),
  SF('下から2段目。（東1）は1＋1＝2、（東2）は×で0、（東3）は0＋1＝1、（東4）は1＋1＝2、（東5）は2＋1＝3。', ['2段目　1、2、0、1、2、3'], [...road(), tx(nx(0) - 18, ny(0) + 5, 'A', 14), tx(nx(5) + 18, ny(3) + 5, 'B', 14), ...row30(0), ...[1, 2, 3].map((j) => ci(nx(0), ny(j), 10, '1', C.blue, FILL.blue, 10)), ...row30(1).filter((_, i) => i > 0)]),
  S('3段目は1、3、3、4、6、9。いちばん上の4段目は1、4、7、11、17、26。', ['3段目　1、3、3、4、6、9', '4段目　1、4、7、11、17、26'], [...row30(2).filter((_, i) => i > 0), ...row30(3).filter((_, i) => i > 0)]),
  ANS('26通り'),
  P('確かめ。×を気にしない道順は 8×7×6÷(3×2×1)＝56通り。×を通る道順は 3×10＝30通り。56−30＝26通りで一致します。', ['56−30＝26'], ['=引き算でも26通り ✓']),
], '左と下をたす。×は0。B地点に着く数は26通り。');

const outline = (x: number, y: number, w: number, h: number, color: string): E[] => [ln(x, y, x + w, y, color, false, 3), ln(x + w, y, x + w, y + h, color, false, 3), ln(x + w, y + h, x, y + h, color, false, 3), ln(x, y + h, x, y, color, false, 3)];
// 33 同じ数が並ぶ数列
const cum = [1, 3, 6, 10, 15, 21, 28, 36, 45, 55];
const cumBoxes = (hi: number[] = []): E[] => cum.map((v, i) => bf(13 + (i % 5) * 60, 22 + Math.floor(i / 5) * 46, 54, 34, `${i + 1}→${v}`, hi.includes(i) ? C.red : C.blue, hi.includes(i) ? FILL.red : FILL.blue, 13));
const s_s33: Figure = show([
  P('1が1個、2が2個、3が3個…とならびます。はじめから50番目の数を求めます。', ['1、2、2、3、3、3、4、4、4、4、…', '50番目は？'], ['nがn個ならぶ']),
  P('理由。「nのかたまり」が終わるまでに、数は 1＋2＋…＋n 個ならんでいます。この合計が50をはじめて超えるnを探します。', ['nのかたまりの終わりまで', '1＋2＋3＋…＋n（個）'], ['かたまりごとの合計をたす']),
  SF('かたまりごとに合計を出します。「9→45」は、9のかたまりが終わるまでに45個ならぶ、という意味です。', ['n→（nのかたまりの終わりまでの個数）'], cumBoxes()),
  S('9のかたまりの終わりが45番目。10のかたまりの終わりが55番目。', ['45番目＜50番目≦55番目'], [...outline(13 + 3 * 60, 22 + 46, 54, 34, C.red), ...outline(13 + 4 * 60, 22 + 46, 54, 34, C.red)]),
  P('46番目から55番目までが、10のかたまりです。50番目はその中にあります。', ['46〜55番目＝10'], ['50番目は10のかたまりの中']),
  ANS('10'),
  P('確かめ。9のかたまりまでで45個、10のかたまりの終わりまでで45＋10＝55個。50は45より大きく55以下なので、10です。', ['45＜50≦55'], ['=10のかたまりの中 ✓']),
], '9まで45個。46〜55番目は10。50番目は10。');

// 34 棒で作る大きな正三角形
const tp = (r: number, c: number): [number, number] => [160 + (c - r / 2) * 36, 24 + r * 31];
const sticksH: E[] = [], sticksL: E[] = [], sticksR: E[] = [];
for (let r = 1; r <= 3; r++) for (let c = 0; c < r; c++) { const a = tp(r, c), b = tp(r, c + 1); sticksH.push(ln(a[0], a[1], b[0], b[1], C.gray, false, 3)); }
for (let r = 0; r < 3; r++) for (let c = 0; c <= r; c++) { const a = tp(r, c), b = tp(r + 1, c); sticksL.push(ln(a[0], a[1], b[0], b[1], C.gray, false, 3)); }
for (let r = 0; r < 3; r++) for (let c = 0; c <= r; c++) { const a = tp(r, c), b = tp(r + 1, c + 1); sticksR.push(ln(a[0], a[1], b[0], b[1], C.gray, false, 3)); }
const recolor = (els: E[], color: string): E[] => els.map((e) => (e.t === 'line' ? { ...e, color, width: 4 } : e));
const s_s34: Figure = show([
  SF('同じ長さの棒で、1辺の本数を増やした大きな正三角形をつくります。1辺が3本のときの形です。', ['1辺3本の正三角形'], [...sticksH, ...sticksL, ...sticksR]),
  S('よこの向きの棒を、段ごとに数えます。上から 1本、2本、3本。', ['よこ　1＋2＋3＝6本'], recolor(sticksH, C.blue)),
  S('左ななめの向きの棒も、同じように 1＋2＋3＝6本。右ななめも6本です。', ['左ななめ6本　右ななめ6本'], [...recolor(sticksL, C.green), ...recolor(sticksR, C.red)]),
  P('理由。正三角形は、3つの向きの棒が同じ数ずつ。だから、1つの向きを数えて、3倍すればよいのです。', ['3つの向きは同じ数', '全部＝（1つの向き）×3'], ['1つの向きを数えて3倍']),
  P('1辺が3本なら、6×3＝18本。では、1辺が10本のときは、1つの向きが 1＋2＋3＋…＋10 本です。', ['1＋2＋3＋…＋10＝55本'], ['10段ぶんをたす']),
  P('3つの向きがあるので、55×3＝165本。', ['55×3＝165（本）'], ['1つの向き55本×3']),
  ANS('165本'),
  P('確かめ。1辺2本のとき 3×(1＋2)＝9本、1辺3本のとき 3×(1＋2＋3)＝18本。実際にかいても同じです。', ['2本→9本　3本→18本'], ['=小さい場合で確認 ✓']),
], '1つの向き1＋2＋…＋10＝55本。55×3＝165本。');

// 36 本のページ（線分図）
const seg = (i: number): [number, number] => [20 + i * 35, 34];
const segBoxes = (fillFrom: number, fillTo: number, color: string, fill: string): E[] => Array.from({ length: fillTo - fillFrom }, (_, k) => bx(seg(fillFrom + k)[0], 40, 35, 36, '', color, fill));
const s_s36: Figure = show([
  SF('ある本を、1日目に全体の3/8、2日目に残りの2/5を読むと、90ページ残ります。全体のページ数を求めます。', ['全体を1として線分図にかく'], [...segBoxes(0, 8, C.gray, FILL.warm), tx(160, 30, '全体＝1（8等分）', 14, C.ink), tx(160, 100, '1つぶんが 1/8', 13, C.gray)]),
  S('1日目は、全体の3/8。8つのうち3つ分です。', ['1日目　3/8'], [...segBoxes(0, 3, C.red, FILL.red), tx(72, 100, '1日目 3/8', 13, C.red)]),
  P('理由。2日目の「残りの2/5」の「残り」は、1日目のあとの残り（5/8）のことです。全体の2/5ではありません。', ['残り＝1−3/8＝5/8', '2日目＝5/8の2/5'], ['「残りの」のもとは5/8']),
  SF('残りの5つ分の2/5は、5×2/5＝2つ分。つまり2日目は、全体の2/8（1/4）です。', ['2日目　5/8×2/5＝2/8'], [...segBoxes(0, 3, C.red, FILL.red), ...segBoxes(3, 5, C.green, FILL.green), ...segBoxes(5, 8, C.gray, FILL.warm), tx(72, 100, '1日目 3/8', 12, C.red), tx(160, 100, '2日目 2/8', 12, C.green)]),
  S('のこりは、8−3−2＝3つ分（3/8）。これが90ページです。', ['のこり3/8＝90ページ'], [...segBoxes(5, 8, C.blue, FILL.blue), tx(248, 100, 'のこり 3/8', 12, C.blue), tx(248, 118, '90ページ', 13, C.blue)]),
  P('3/8が90ページなので、1/8は90÷3＝30ページ。全体は8つ分で、30×8＝240ページです。', ['90÷3＝30', '30×8＝240（ページ）'], ['1/8が30ページ']),
  ANS('240ページ'),
  P('確かめ。240ページの3/8は90ページ。残り150ページの2/5は60ページ。150−60＝90ページ残り。問題と一致します。', ['1日目90　2日目60　のこり90'], ['=条件と一致 ✓']),
], '3/8＝90ページ → 1/8＝30ページ → 全体240ページ。');

// 37 平均点（てんびん）
const sx = (s: number) => 40 + (s - 62) * 24;
const s_s37: Figure = show([
  P('A組30人は平均62点。A組とB組をあわせた50人は平均66点。B組20人の平均点を求めます。', ['A組　30人　62点', '全体　50人　66点', 'B組　20人　？点'], ['B組の平均点は？']),
  SF('点数を横の線にならべます。全体の平均66点は、A組の62点より高くなっています。', ['A組62点　全体66点'], [ln(sx(62), 70, sx(72), 70, C.ink, false, 3), ci(sx(62), 70, 8, undefined, C.blue, FILL.blue), ci(sx(66), 70, 8, undefined, C.purple, FILL.purple), tx(sx(62), 96, 'A組 62点', 12, C.blue), tx(sx(66), 118, '全体 66点', 12, C.purple), tx(sx(72), 96, 'B組 ？点', 12, C.red, true, 'end')]),
  P('理由。平均点は、点数×人数＝合計点にもどすと、たし算・引き算で考えられます。全体の合計から、A組の合計を引けば、B組の合計がわかります。', ['平均×人数＝合計点'], ['平均は合計点にもどす']),
  P('全体の合計点は 66×50＝3300点。A組の合計点は 62×30＝1860点です。', ['全体　66×50＝3300', 'A組　62×30＝1860'], ['合計点を出す']),
  P('B組の合計点は 3300−1860＝1440点。20人で割ると、1440÷20＝72点です。', ['3300−1860＝1440', '1440÷20＝72（点）'], ['B組の合計÷人数']),
  ANS('72点'),
  SF('確かめ。てんびんで見ると、全体66点は、A組から4点、B組72点から6点。4：6＝2：3は、人数30：20＝3：2の逆の比で、つりあいます。', ['4：6＝2：3 ←→ 30：20＝3：2'], [ln(sx(62), 70, sx(72), 70, C.ink, false, 3), P2([[sx(66), 70], [sx(66) - 9, 90], [sx(66) + 9, 90]], C.gray, FILL.gray), tx(sx(64), 56, '4点', 13, C.green), tx(sx(69), 56, '6点', 13, C.green), tx(sx(62), 112, 'A 30人', 12, C.blue), tx(sx(72), 112, 'B 20人', 12, C.red, true, 'end')]),
], '合計 3300−1860＝1440。1440÷20＝72点。');

// 45 水そうと角柱
const tk = { x: 70, w: 100, y: 28, h: 100, k: 2.5 };
const tank = (): E[] => [bx(tk.x, tk.y, tk.w, tk.h, '', C.ink, FILL.warm), tx(tk.x + tk.w / 2, tk.y + tk.h + 14, 'たて20　よこ30　高さ40', 11, C.gray)];
const waterBox = (d: number, fill: string = FILL.blue): E => bx(tk.x, tk.y + tk.h - d * tk.k, tk.w, d * tk.k, '', C.blue, fill);
const s_s45: Figure = show([
  SF('たて20cm、よこ30cm、高さ40cmの水そうに、深さ25cmまで水が入っています。', ['水の深さ25cm'], [...tank(), waterBox(25), tx(210, 80, '水の深さ\n25cm', 13, C.blue)]),
  SF('底面積100cm²、高さ36cmの角柱を、底にぴったりつけて立てます。水はこぼれません。', ['角柱　底面積100cm²　高さ36cm'], [...tank(), waterBox(25), bx(tk.x + 35, tk.y + tk.h - 36 * tk.k, 30, 36 * tk.k, '', C.gray, FILL.gray), tx(228, 80, '角柱\n高さ36cm', 13, C.gray)]),
  P('理由。角柱を立てても、水の量は変わりません。ただし、角柱がじゃまをする分、水が入れる底面積が小さくなるので、深さが増えます。', ['水の量は同じ', '入れる底面積が減る'], ['水の量÷入れる底面積＝深さ']),
  P('水の量は、20×30×25＝15000cm³です。', ['20×30×25＝15000cm³'], ['水の量は15000cm³']),
  P('水そうの底面積は20×30＝600cm²。角柱をのぞくと、600−100＝500cm²です。', ['600−100＝500cm²'], ['水が入れる底面積500cm²']),
  P('水の深さは、15000÷500＝30cmです。角柱の高さ36cmより低いので、角柱は水面から出ています。', ['15000÷500＝30（cm）'], ['深さ30cm＜角柱36cm']),
  ANS('30cm'),
  SF('確かめ。水の深さ30cmは、水そうの高さ40cmより低いので、こぼれません。500×30＝15000cm³で、水の量と一致します。', ['500×30＝15000cm³'], [...tank(), waterBox(30), bx(tk.x + 35, tk.y + tk.h - 36 * tk.k, 30, 36 * tk.k, '', C.gray, FILL.gray), tx(228, 80, '深さ30cm', 13, C.blue)]),
], '15000÷(600−100)＝30cm。');

// 46 円すいの展開図
const sec = (cx: number, cy: number, r: number, a0: number, a1: number): E => pg([[cx, cy], ...Array.from({ length: 25 }, (_, k) => at(cx, cy, r, a0 + ((a1 - a0) * k) / 24))] as [number, number][], C.blue, FILL.blue);
const s_s46: Figure = show([
  SF('底面の半径4cm、母線12cmの円すいの側面を広げます。おうぎ形の中心角を求めます。', ['中心角は？'], [sec(80, 118, 80, 30, 150), tx(80, 134, '母線12cm', 13, C.blue), circ(240, 72, 28, C.green, FILL.green), tx(240, 76, '半径4cm', 12, C.green), tx(240, 118, '底面', 13, C.green)]),
  S('側面を広げたおうぎ形の弧の部分が、まるめると底面の円周にぴったり重なります。', ['弧の長さ＝底面の円周'], [ar(150, 60, 212, 66, C.purple, true), tx(182, 50, '同じ長さ', 12, C.purple)]),
  P('底面の円周は、2×4×円周率＝8×円周率です。', ['底面の円周', '2×4×円周率＝8×円周率'], ['弧の長さは8×円周率']),
  P('おうぎ形の半径は12cm。この半径の円の円周は、2×12×円周率＝24×円周率です。', ['半径12cmの円の円周', '2×12×円周率＝24×円周率'], ['大きい円の円周は24×円周率']),
  P('理由。おうぎ形の弧は、円周の何分の何か（8÷24＝1/3）が、中心角が360度の何分の何かと同じです。', ['弧は円周の　8÷24＝1/3', '中心角は360度の1/3'], ['弧の割合＝中心角の割合']),
  P('中心角は、360÷3＝120度です。', ['360÷3＝120（度）'], ['360度の1/3']),
  ANS('120度'),
  P('確かめ。360×(底面の半径÷母線)＝360×4/12＝120度で、同じになります。', ['360×4/12＝120°'], ['=別の式でも120° ✓']),
], '底面の円周÷大きい円の円周＝1/3。360°×1/3＝120°。');

// 47 長方形の内側を回る円
const rc = { x: 60, y: 22, k: 20 };
const rect47 = (): E[] => [bx(rc.x, rc.y, 10 * rc.k, 6 * rc.k, '', C.ink, FILL.warm), tx(rc.x - 4, rc.y + 3 * rc.k + 5, 'たて6', 12, C.ink, true, 'end'), tx(rc.x + 5 * rc.k, rc.y - 4, 'よこ10cm', 12, C.ink)];
const s_s47: Figure = show([
  SF('たて6cm、よこ10cmの長方形の内側を、半径1cmの円が、かべにそって1周します。通った部分の面積を求めます。', ['円が通った部分の面積'], [...rect47(), ci(rc.x + 20, rc.y + 100, 20, undefined, C.blue, FILL.blue)]),
  S('円の中心は、かべから1cm内側の線の上を動きます。この線は、たて4cm・よこ8cmの長方形です。', ['中心が動く線　4cm×8cm'], [ln(rc.x + 20, rc.y + 20, rc.x + 180, rc.y + 20, C.purple, true, 2), ln(rc.x + 180, rc.y + 20, rc.x + 180, rc.y + 100, C.purple, true, 2), ln(rc.x + 180, rc.y + 100, rc.x + 20, rc.y + 100, C.purple, true, 2), ln(rc.x + 20, rc.y + 100, rc.x + 20, rc.y + 20, C.purple, true, 2)]),
  S('円が通らない部分は、まん中の長方形。四方から2cmずつ内側なので、たて2cm・よこ6cm＝12cm²です。', ['まん中　2×6＝12cm²'], [bx(rc.x + 40, rc.y + 40, 120, 40, '12cm²', C.gray, FILL.gray, 13)]),
  P('もう1つ、四すみにも、円がとどかない部分があります。1辺1cmの正方形から、半径1cmの円の4分の1を引いた形です。', ['1×1−3.14×1×1÷4', '＝1−0.785＝0.215cm²'], ['四すみ1か所0.215cm²']),
  P('四すみは4か所で、0.215×4＝0.86cm²。通らない部分は、12＋0.86＝12.86cm²です。', ['0.215×4＝0.86cm²'], ['通らない部分12.86cm²']),
  P('長方形の面積は6×10＝60cm²。通った部分は、60−12.86＝47.14cm²です。', ['60−12−0.86＝47.14（cm²）'], ['全体から通らない部分を引く']),
  ANS('47.14cm²'),
  P('確かめ。よこの帯2本 16×2、たての帯2本 8×2、かどの円の4分の1が4個で3.14、重なる1cm²を4か所引くと 32＋16＋3.14−4＝47.14cm²。', ['32＋16＋3.14−4＝47.14'], ['=別の分け方でも一致 ✓']),
], '60−12−0.86＝47.14cm²。');

// 50 直方体の表面の最短
const s_s50: Figure = show([
  P('たて2cm、よこ3cm、高さ12cmの直方体。頂点Aから表面を通って、反対側の頂点Bまで、ひもを張ります。', ['Aは底の頂点', 'Bは上のいちばん遠い頂点', '最短のひもの長さは？'], ['表面を通る最短の長さ']),
  P('理由。表面ではまっすぐ進めませんが、通る面を平らに広げれば、AとBを結ぶ直線が最短になります。通る面の選び方で、広げ方が何通りかあります。', ['面を広げて、直線で結ぶ', '広げ方をくらべる'], ['広げた図で直線が最短']),
  SF('となりあう2つの側面（よこ3cmと2cm）を横にならべます。よこは3＋2＝5cm、高さは12cm。AからBは直線です。', ['側面2つ　よこ5cm　高さ12cm'], [bx(60, 20, 90, 108, '', C.blue, FILL.blue), bx(150, 20, 60, 108, '', C.green, FILL.green), ln(60, 128, 210, 20, C.red, false, 3), tx(52, 138, 'A', 14, C.ink), tx(218, 18, 'B', 14, C.ink), tx(105, 140, '3cm', 13, C.blue), tx(180, 140, '2cm', 13, C.green), tx(236, 78, '12cm', 13, C.ink, true, 'start')]),
  P('直角をはさむ辺が5cmと12cmの三角形。斜辺は13cmです。これが1つめの候補です。', ['5cmと12cm → 斜辺13cm'], ['1つめの候補は13cm']),
  P('側面1つと上の面を通る広げ方では、直角をはさむ辺が 14cmと3cm、または 15cmと2cm。', ['14cmと3cm', '15cmと2cm'], ['2つめ・3つめの広げ方']),
  P('理由。斜辺は、直角をはさむ長いほうの辺（14cmや15cm）より長いので、どちらも13cmより長くなります。いちばん短いのは1つめです。', ['斜辺＞14　斜辺＞15', '13cmがいちばん短い'], ['斜辺は長いほうの辺より長い']),
  ANS('13cm'),
  P('確かめ。直線でなく、上に12cm・横に5cm進むと、12＋5＝17cm。表面を広げて斜めに結ぶと、13cmと、それより短くなります。', ['17cm＞13cm'], ['=直線のほうが短い ✓']),
], '5と12の直角三角形の斜辺13cmが最短。');

export const figuresHonshikenSchool_tokyo_azabu_A: Record<string, Figure> = {
  honshiken_school_tokyo_azabu_sansu_17: s_s17,
  honshiken_school_tokyo_azabu_sansu_18: s_s18,
  honshiken_school_tokyo_azabu_sansu_19: s_s19,
  honshiken_school_tokyo_azabu_sansu_20: s_s20,
  honshiken_school_tokyo_azabu_sansu_22: s_s22,
  honshiken_school_tokyo_azabu_sansu_23: s_s23,
  honshiken_school_tokyo_azabu_sansu_24: s_s24,
  honshiken_school_tokyo_azabu_sansu_25: s_s25,
  honshiken_school_tokyo_azabu_sansu_26: s_s26,
  honshiken_school_tokyo_azabu_sansu_27: s_s27,
  honshiken_school_tokyo_azabu_sansu_28: s_s28,
  honshiken_school_tokyo_azabu_sansu_30: s_s30,
  honshiken_school_tokyo_azabu_sansu_33: s_s33,
  honshiken_school_tokyo_azabu_sansu_34: s_s34,
  honshiken_school_tokyo_azabu_sansu_36: s_s36,
  honshiken_school_tokyo_azabu_sansu_37: s_s37,
  honshiken_school_tokyo_azabu_sansu_45: s_s45,
  honshiken_school_tokyo_azabu_sansu_46: s_s46,
  honshiken_school_tokyo_azabu_sansu_47: s_s47,
  honshiken_school_tokyo_azabu_sansu_50: s_s50,
};
