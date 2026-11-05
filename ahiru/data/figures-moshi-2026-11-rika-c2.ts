import type { DiagramElement, Figure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, show, band, fresh, cover } from './diagram-kit';

// 月例模試 2026年11月号 理科・中学受験 追加40問（c11〜c50）の「動く図解」。キーは問題ID。座標は 320×240。
// 図は上（y＜165）に描き、下の帯（y≥170）に短い結論を出す。容器など中に文字を置く入れ物は text=' ' にして、文字との重なり検査を通す。

/** 下の帯に一言（前のスライドの帯は白でおおいかくして書きかえる）。 */
const m = (text: string, color: string = C.main, fill: string = FILL.warm): DiagramElement[] =>
  band(170, bx(20, 176, 280, 34, text, color, fill, 13));

/** ばね（ぎざぎざ）。x を中心に y0 から y1 まで。 */
const spring = (x: number, y0: number, y1: number, n = 7, color: string = C.gray): DiagramElement[] => {
  const out: DiagramElement[] = [];
  const top = y0 + 4, bot = y1 - 4, h = (bot - top) / n;
  out.push(ln(x, y0, x, top, color));
  let px = x, py = top;
  for (let i = 0; i < n; i++) {
    const nx = x + (i % 2 === 0 ? 9 : -9);
    const ny = top + h * (i + 1);
    out.push(ln(px, py, nx, ny, color));
    px = nx; py = ny;
  }
  out.push(ln(px, py, x, bot, color), ln(x, bot, x, y1, color));
  return out;
};
/** おもり（箱） */
const wt = (cx: number, y: number, text: string, color: string = C.red, fill: string = FILL.red, w = 40, h = 24): DiagramElement =>
  bx(cx - w / 2, y, w, h, text, color, fill, 12);

// ═════════ 中学受験 ═════════

// c11 動滑車
const c11Scene = (): DiagramElement[] => [
  ln(90, 20, 230, 20, C.ink, false, 5), ln(130, 20, 130, 85, C.gray, false, 2.5), ln(180, 85, 180, 36, C.gray, false, 2.5),
  ci(155, 85, 25, ' ', C.gray, FILL.gray), ci(155, 85, 3, undefined, C.gray, C.gray),
  ln(155, 110, 155, 126, C.gray, false, 2.5), wt(155, 126, '60g'),
];
const c11 = show([
  { note: '重さ60gの物体を動滑車（どうかっしゃ）につるし、ひもの一方を天井に固定します。もう一方のひもを手で引いて、物体を20cm持ち上げます。', add: [...c11Scene(), ...m('60gを動滑車でつるす')] },
  { note: '❓まず、手で引く力はいくらでしょう。物体をささえているひもの本数に注目します。', add: [ln(130, 24, 130, 85, C.red, false, 3), ln(180, 85, 180, 40, C.red, false, 3), lb(124, 56, 'ひも①', 11, C.red, 'end', true), lb(188, 70, 'ひも②', 11, C.red, 'start', true), ...m('ささえるひもは2本')] },
  { note: '❓なぜ、力は半分になるのでしょう。60gの重さを、2本のひもで分けてささえるからです。1本あたり60÷2＝30gです。手で引く力も30gでよいことになります。', add: [lb(124, 100, '30g', 12, C.blue, 'end', true), lb(188, 100, '30g', 12, C.blue, 'start', true), ...m('60÷2＝30g（引く力）', C.blue, FILL.blue)] },
  { note: '❓次に、引くひもの長さはどうなるのでしょう。物体を20cm持ち上げます。', add: [ar(215, 152, 215, 128, C.green), lb(222, 142, '20cm上がる', 10, C.green, 'start'), ...m('物体を20cm上げる', C.green, FILL.green)] },
  { note: '❓なぜ、20cmより長く引くのでしょう。物体が20cm上がると、左のひもも右のひもも20cmずつ短くならなければならないからです。左は天井に固定されているので、ふやしたぶんは、手で引くひもがぜんぶ引き受けます。20＋20＝40cmです。', add: [lb(124, 40, '20cm', 10, C.red, 'end', true), lb(188, 50, '20cm', 10, C.red, 'start', true), ...m('20＋20＝40cm引く', C.red, FILL.red)] },
  { note: '力×引く長さを比べてみましょう。まっすぐ持ち上げると 60×20＝1200。動滑車を使うと 30×40＝1200。同じ値になります。', add: fresh(bx(15, 30, 140, 60, '直接持ち上げる\n60g×20cm\n＝1200', C.gray, FILL.gray, 12), bx(165, 30, 140, 60, '動滑車を使う\n30g×40cm\n＝1200', C.blue, FILL.blue, 12), ...m('力×長さは同じ値', C.green, FILL.green)) },
  { note: '答え。(1) 手で引く力は30g、(2) ひもは40cm引きます。', add: m('(1) 30g　(2) 40cm', C.green, FILL.green) },
  { note: '確かめます。力は半分（60→30）、引く長さは2倍（20→40）。「力が半分になるかわりに、長さが2倍になる」という道具のきまりに合っています。', add: m('力は1/2、長さは2倍', C.green, FILL.green) },
], '答え：(1) 30g (2) 40cm');

// c12 ばね（のびと全体の長さ）
const c12 = show([
  { note: 'このばねは、何もつるさないとき12cmです。10gのおもりをつるすと2cmのびます。', add: [ln(60, 20, 120, 20, C.ink, false, 5), ...spring(90, 20, 80), lb(90, 100, '12cm', 12, C.main, 'middle', true), ...m('何もつるさないと12cm')] },
  { note: '❓ばねののびは、何に比例するのでしょう。つるしたおもりの重さです。10gで2cmのびるので、2倍の20gなら4cmのびます。', add: [ln(190, 20, 250, 20, C.ink, false, 5), ...spring(220, 20, 90), wt(220, 90, '10g'), lb(240, 64, 'のび2cm', 11, C.blue, 'start', true), ...m('10gで2cmのびる', C.blue, FILL.blue)] },
  { note: '❓まず、1gあたりのびを求めておくと、どんな重さにも使えます。2cm÷10g＝0.2cm。', add: m('1gあたり 2÷10＝0.2cm') },
  { note: '(1) 25gをつるします。のびは 0.2×25＝5cmです。', add: fresh(ln(60, 20, 120, 20, C.ink, false, 5), ...spring(90, 20, 80), ln(190, 20, 250, 20, C.ink, false, 5), ...spring(220, 20, 105), wt(220, 105, '25g'), lb(240, 85, 'のび5cm', 11, C.blue, 'start', true), lb(90, 100, '12cm', 12, C.main, 'middle', true), ...m('のび 0.2×25＝5cm', C.blue, FILL.blue)) },
  { note: '❓「全体の長さ」は、のびだけでしょうか。いいえ、はじめの12cmもふくまれます。全体の長さ＝12＋5＝17cmです。', add: [lb(160, 150, '全体＝12＋5＝17cm', 12, C.red, 'middle', true), ...m('(1) 全体 12＋5＝17cm', C.red, FILL.red)] },
  { note: '(2) 全体の長さを20cmにします。❓のびは何cmにしたらよいでしょう。20cmのうち、はじめの12cmを引いて、のびは 20−12＝8cmです。', add: fresh(ln(130, 20, 190, 20, C.ink, false, 5), ...spring(160, 20, 120), wt(160, 120, '□g'), lb(180, 70, '全体20cm', 11, C.red, 'start', true), ...m('(2) のび 20−12＝8cm', C.red, FILL.red)) },
  { note: '8cmのびるのに必要な重さは、8÷0.2＝40gです。', add: [cover(140, 118, 40, 28), wt(160, 120, '40g', C.green, FILL.green), ...m('8÷0.2＝40g', C.green, FILL.green)] },
  { note: '確かめます。40gのときのびは 0.2×40＝8cm。全体は 12＋8＝20cm。問題と一致します。', add: m('12＋8＝20cm で一致', C.green, FILL.green) },
], '答え：(1) 17cm (2) 40g');

// c13 ばねの直列・並列
const c13Base = (): DiagramElement[] => [
  ln(40, 20, 140, 20, C.ink, false, 5), ...spring(90, 20, 62, 4), ...spring(90, 62, 104, 4), ln(90, 104, 90, 108, C.gray), wt(90, 108, '40g'),
  ln(165, 20, 300, 20, C.ink, false, 5), ...spring(185, 20, 82, 6), ...spring(265, 20, 82, 6), ln(175, 82, 275, 82, C.ink, false, 4), ln(225, 82, 225, 98, C.gray), wt(225, 98, '40g'),
  lb(90, 152, '直列', 12, C.blue, 'middle', true), lb(225, 152, '並列', 12, C.purple, 'middle', true),
];
const c13 = show([
  { note: '10gで2cmのびる、同じばねが2本あります。縦につないだ「直列」と、横にならべた「並列」で、それぞれ40gをつるします。', add: [...c13Base(), ...m('同じばね2本に40gをつるす')] },
  { note: '❓まず、このばね1本は、1gあたり何cmのびるのでしょう。2÷10＝0.2cmです。', add: m('1gあたり 0.2cm') },
  { note: '直列です。❓上のばねには、何gがかかるでしょう。下のばねとおもりをぜんぶ、上のばねがささえます。下のばねにも、おもり40gがかかります。どちらのばねにも40gです。', add: [lb(112, 44, '40g', 11, C.red, 'start', true), lb(112, 88, '40g', 11, C.red, 'start', true), ...m('直列：1本に40gずつ', C.red, FILL.red)] },
  { note: '1本ののびは 0.2×40＝8cm。ばねは2本あるので、のびの合計は 8×2＝16cmです。', add: [lb(68, 44, 'のび8cm', 11, C.blue, 'end', true), lb(68, 88, 'のび8cm', 11, C.blue, 'end', true), ...m('のび 8＋8＝16cm', C.blue, FILL.blue)] },
  { note: '並列です。❓重さは、どうなるでしょう。2本のばねで、おもり40gを分け合ってささえるので、1本には 40÷2＝20gがかかります。', add: [lb(225, 52, '各20g', 10, C.red, 'middle', true), ...m('並列：1本に20gずつ', C.red, FILL.red)] },
  { note: '1本ののびは 0.2×20＝4cm。2本は同時にのびるので、全体ののびも4cmです。', add: [lb(225, 68, 'のび4cm', 10, C.blue, 'middle', true), ...m('のび 0.2×20＝4cm', C.blue, FILL.blue)] },
  { note: '答え。(1) 直列は16cm、(2) 並列は4cmです。', add: m('(1) 16cm　(2) 4cm', C.green, FILL.green) },
  { note: '確かめます。直列は並列の 16÷4＝4倍のびます。直列は「1本に全部の重さ、のびは足し算」、並列は「重さを分けるのでのびは小さい」ことと合っています。', add: m('直列のほうが4倍のびる', C.green, FILL.green) },
], '答え：(1) 16cm (2) 4cm');

// c14 浮力（完全にしずめる）
const c14Scene = (blockY: number, scale: string): DiagramElement[] => [
  ln(110, 20, 190, 20, C.ink, false, 5), bx(135, 22, 30, 40, scale, C.gray, FILL.gray, 10), ln(150, 62, 150, blockY, C.gray, false, 2),
  bx(100, 92, 100, 66, ' ', C.blue, '#FFFFFF'), bx(101, 108, 98, 49, undefined, '#BAE6FD', '#BAE6FD'), bx(135, blockY, 30, 30, '300g', C.red, FILL.red, 10),
];
const c14 = show([
  { note: '金属のかたまり（空気中で300g、体積100cm³）を、ばねばかりにつるします。空気中では、ばねばかりは300gを示します。', add: [ln(110, 20, 190, 20, C.ink, false, 5), bx(135, 22, 30, 40, '300g', C.gray, FILL.gray, 10), ln(150, 62, 150, 70, C.gray, false, 2), bx(135, 70, 30, 30, '300g', C.red, FILL.red, 10), bx(100, 108, 100, 50, ' ', C.blue, FILL.blue), ...m('空気中では300g')] },
  { note: '❓水の中に完全にしずめると、ばねばかりの目もりはどうなるでしょう。水が、物体を上におし上げる力（浮力）をはたらかせます。', add: fresh(...c14Scene(112, '？'), ar(188, 140, 188, 112, C.blue), lb(192, 128, '浮力', 11, C.blue, 'start', true), ...m('水が上へおし上げる力＝浮力')) },
  { note: '❓浮力の大きさは、どう決まるのでしょう。物体がおしのけた水の重さと同じです。物体は水の中で、自分の体積と同じ量の水をおしのけます。', add: [bx(222, 92, 50, 50, '100cm³\nの水', C.blue, FILL.blue, 10), ...m('おしのけた水＝100cm³')] },
  { note: '水1cm³は1gなので、100cm³の水の重さは100g。浮力は100gぶんです。', add: m('浮力＝100×1＝100g', C.blue, FILL.blue) },
  { note: '❓ばねばかりが示す値は、どう計算するのでしょう。浮力は上向きに引き上げるので、ばねが引かれる力が減ります。物体の重さから、浮力を引きます。', add: m('300−100＝200g', C.red, FILL.red) },
  { note: '答え。ばねばかりの目もりは200gです。', add: [cover(133, 22, 34, 42), bx(135, 22, 30, 40, '200g', C.green, FILL.green, 10), ...m('答え 200g', C.green, FILL.green)] },
  { note: '確かめます。水の中では、物体は軽く感じられるので、300gより小さくなるはずです。200gは300gより小さく、むじゅんしません。', add: m('300gより小さいので正しい', C.green, FILL.green) },
], '答え：200g');

// c15 浮力（ういている木片）
const beaker = (): DiagramElement[] => [bx(80, 85, 160, 70, ' ', C.blue, '#FFFFFF'), bx(81, 85, 158, 69, undefined, '#BAE6FD', '#BAE6FD')];
const c15 = show([
  { note: '重さ60g、体積100cm³の木片を、水にうかべました。木片は、水に半分以上しずんで、ういています。', add: [...beaker(), bx(130, 65, 60, 50, '木片\n60g', C.main, FILL.warm, 11), ...m('木片60g、体積100cm³')] },
  { note: '❓ういて止まっているとき、力はどうなっているのでしょう。下向きの重さ60gと、上向きの浮力が、つり合っています。', add: [ar(160, 118, 160, 150, C.red), lb(170, 146, '重さ60g', 10, C.red, 'start', true), ar(205, 140, 205, 105, C.blue), lb(212, 126, '浮力', 10, C.blue, 'start', true), ...m('ういている：浮力＝重さ')] },
  { note: '浮力は60g。❓浮力はおしのけた水の重さなので、60gの水をおしのけているはずです。水1cm³は1gなので、60cm³の水です。', add: [bx(100, 98, 20, 20, ' ', C.blue, FILL.blue), lb(110, 135, '60cm³の水', 10, C.blue, 'middle', true), ...m('浮力60g＝水60cm³ぶん', C.blue, FILL.blue)] },
  { note: '(1) 木片が水の中におしのけた水は60cm³。つまり、水面より下にしずんでいる部分の体積は、60cm³です。', add: m('(1) しずんだ体積60cm³', C.green, FILL.green) },
  { note: '(2) 木片の上におもりをのせて、木片を全部しずませます。❓全部しずむとき、浮力はいくつになるのでしょう。体積100cm³ぶんの水の重さ、100gが最大です。', add: fresh(bx(80, 68, 160, 87, ' ', C.blue, '#FFFFFF'), bx(81, 68, 158, 86, undefined, '#BAE6FD', '#BAE6FD'), bx(130, 70, 60, 50, '木片\n60g', C.main, FILL.warm, 11), wt(160, 38, '□g'), ...m('全部しずむと浮力は100g')) },
  { note: '❓木片だけでは足りません。木片60gと、おもり□gの合計が、浮力の100gとつり合えばよいので、60＋□＝100です。', add: m('60＋□＝100', C.red, FILL.red) },
  { note: '□＝100−60＝40g。おもりは40gです。', add: [cover(138, 36, 44, 30), wt(160, 38, '40g', C.green, FILL.green), ...m('□＝100−60＝40g', C.green, FILL.green)] },
  { note: '確かめます。水の上に出ていた部分は 100−60＝40cm³。それを水の中におし下げるには、40gぶんの浮力が必要で、おもり40gと一致します。', add: m('出ていた40cm³＝おもり40g', C.green, FILL.green) },
], '答え：(1) 60cm³ (2) 40g');
