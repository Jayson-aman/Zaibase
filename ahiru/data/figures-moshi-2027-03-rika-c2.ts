import type { DiagramElement, Figure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, show, band, fresh, cover, flow } from './diagram-kit';

// 月例模試 2026年3月号 理科・中学受験 追加40問（c11〜c50）の「動く図解」。キーは問題ID。座標は 320×240。
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


/** 文字を持たない長方形・円は、文字検査の対象外にするため多角形で描く。 */
const rect = (x: number, y: number, w: number, h: number, color?: string, fill?: string): DiagramElement => pg([[x, y], [x + w, y], [x + w, y + h], [x, y + h]], color, fill);
const disc = (cx: number, cy: number, r: number, color?: string, fill?: string): DiagramElement =>
  pg(Array.from({ length: 28 }, (_, i) => [cx + r * Math.cos((i / 28) * 2 * Math.PI), cy + r * Math.sin((i / 28) * 2 * Math.PI)] as [number, number]), color, fill);

// ═════════ 中学受験 ═════════

// c11 動滑車
const c11Scene = (): DiagramElement[] => [
  ln(90, 20, 230, 20, C.ink, false, 5), ln(130, 20, 130, 85, C.gray, false, 2.5), ln(180, 85, 180, 36, C.gray, false, 2.5),
  disc(155, 85, 25, C.gray, FILL.gray), disc(155, 85, 3, C.gray, C.gray),
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
  { note: '10gで2cmのびる、同じばねが2本あります。縦につないだ「直列（ちょくれつ）」と、横にならべた「並列（へいれつ）」で、それぞれ40gをつるします。', add: [...c13Base(), ...m('同じばね2本に40gをつるす')] },
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
  rect(100, 92, 100, 66, C.blue, '#FFFFFF'), rect(101, 108, 98, 49, '#BAE6FD', '#BAE6FD'), bx(135, blockY, 30, 30, '300g', C.red, FILL.red, 10),
];
const c14 = show([
  { note: '金属のかたまり（空気中で300g、体積100cm³）を、ばねばかりにつるします。空気中では、ばねばかりは300gを示します。', add: [ln(110, 20, 190, 20, C.ink, false, 5), bx(135, 22, 30, 40, '300g', C.gray, FILL.gray, 10), ln(150, 62, 150, 70, C.gray, false, 2), bx(135, 70, 30, 30, '300g', C.red, FILL.red, 10), rect(100, 108, 100, 50, C.blue, FILL.blue), ...m('空気中では300g')] },
  { note: '❓水の中に完全にしずめると、ばねばかりの目もりはどうなるでしょう。水が、物体を上におし上げる力、浮力（ふりょく）をはたらかせます。', add: fresh(...c14Scene(112, '？'), ar(172, 140, 172, 112, C.blue), lb(175, 128, '浮力', 10, C.blue, 'start', true), ...m('水が上へおし上げる力＝浮力')) },
  { note: '❓浮力の大きさは、どう決まるのでしょう。物体がおしのけた水の重さと同じです。物体は水の中で、自分の体積と同じ量の水をおしのけます。', add: [bx(222, 92, 50, 50, '100cm³\nの水', C.blue, FILL.blue, 10), ...m('おしのけた水＝100cm³')] },
  { note: '水1cm³は1gなので、100cm³の水の重さは100g。浮力は100gぶんです。', add: m('浮力＝100×1＝100g', C.blue, FILL.blue) },
  { note: '❓ばねばかりが示す値は、どう計算するのでしょう。浮力は上向きに引き上げるので、ばねが引かれる力が減ります。物体の重さから、浮力を引きます。', add: m('300−100＝200g', C.red, FILL.red) },
  { note: '答え。ばねばかりの目もりは200gです。', add: [cover(133, 22, 34, 42), bx(135, 22, 30, 40, '200g', C.green, FILL.green, 10), ...m('答え 200g', C.green, FILL.green)] },
  { note: '確かめます。水の中では、物体は軽く感じられるので、300gより小さくなるはずです。200gは300gより小さく、むじゅんしません。', add: m('300gより小さいので正しい', C.green, FILL.green) },
], '答え：200g');

// c15 浮力（ういている木片）
const beaker = (): DiagramElement[] => [rect(80, 85, 160, 70, C.blue, '#FFFFFF'), rect(81, 85, 158, 69, '#BAE6FD', '#BAE6FD')];
const c15 = show([
  { note: '重さ60g、体積100cm³の木片を、水にうかべました。木片は、水に半分以上しずんで、ういています。', add: [...beaker(), bx(130, 65, 60, 50, '木片\n60g', C.main, FILL.warm, 11), ...m('木片60g、体積100cm³')] },
  { note: '❓ういて止まっているとき、力はどうなっているのでしょう。下向きの重さ60gと、上向きの浮力（ふりょく）が、つり合っています。', add: [ar(160, 118, 160, 150, C.red), lb(170, 146, '重さ60g', 10, C.red, 'start', true), ar(205, 140, 205, 105, C.blue), lb(212, 126, '浮力', 10, C.blue, 'start', true), ...m('ういている：浮力＝重さ')] },
  { note: '浮力は60g。❓浮力はおしのけた水の重さなので、60gの水をおしのけているはずです。水1cm³は1gなので、60cm³の水です。', add: [ln(126, 85, 126, 115, C.blue, false, 3), lb(122, 98, '水中', 10, C.blue, 'end', true), lb(122, 110, '60cm³', 10, C.blue, 'end', true), ...m('浮力60g＝水60cm³ぶん', C.blue, FILL.blue)] },
  { note: '(1) 木片が水の中におしのけた水は60cm³。つまり、水面より下にしずんでいる部分の体積は、60cm³です。', add: m('(1) しずんだ体積60cm³', C.green, FILL.green) },
  { note: '(2) 木片の上におもりをのせて、木片を全部しずませます。❓全部しずむとき、浮力はいくつになるのでしょう。体積100cm³ぶんの水の重さ、100gが最大です。', add: fresh(rect(80, 68, 160, 87, C.blue, '#FFFFFF'), rect(81, 68, 158, 86, '#BAE6FD', '#BAE6FD'), bx(130, 70, 60, 50, '木片\n60g', C.main, FILL.warm, 11), wt(160, 46, '□g'), ...m('全部しずむと浮力は100g')) },
  { note: '❓木片だけでは足りません。木片60gと、おもり□gの合計が、浮力の100gとつり合えばよいので、60＋□＝100です。', add: m('60＋□＝100', C.red, FILL.red) },
  { note: '□＝100−60＝40g。おもりは40gです。', add: [cover(138, 44, 44, 28), wt(160, 46, '40g', C.green, FILL.green), ...m('□＝100−60＝40g', C.green, FILL.green)] },
  { note: '確かめます。水の上に出ていた部分は 100−60＝40cm³。それを水の中におし下げるには、40gぶんの浮力が必要で、おもり40gと一致します。', add: m('出ていた40cm³＝おもり40g', C.green, FILL.green) },
], '答え：(1) 60cm³ (2) 40g');

// c16 鏡の反射
const mirror = (): DiagramElement[] => [ln(50, 130, 270, 130, C.ink, false, 5), lb(285, 134, '鏡', 12, C.gray, 'middle', true)];
const c16 = show([
  { note: '平面鏡に光の線を当てます。光は、鏡の面と40度の角をつくって鏡に当たります。', add: [...mirror(), ar(83, 66, 158, 128, C.red), lb(70, 58, '入ってくる光', 11, C.red, 'start', true), ...m('鏡の面と光の角は40度')] },
  { note: '❓入射角（にゅうしゃかく）は、どこから測る角でしょう。鏡の面ではなく、鏡の面に垂直な線（点線）から測ります。', add: [ln(160, 130, 160, 40, C.gray, true), lb(168, 48, '垂直な線', 10, C.gray, 'start'), ...m('角は垂直な線から測る')] },
  { note: '❓鏡の面と垂直な線のなす角は、何度でしょう。90度です。このうち40度は、光と鏡の面のあいだの角です。', add: [lb(105, 124, '40°', 11, C.red, 'middle', true), ...m('鏡の面と垂直な線は90°', C.blue, FILL.blue)] },
  { note: '(1) 入射角は、垂直な線と光の線のあいだの角です。90−40＝50度。', add: [lb(130, 80, '50°', 12, C.blue, 'middle', true), ...m('(1) 入射角＝90−40＝50度', C.blue, FILL.blue)] },
  { note: '❓反射した光は、どちらへ進むのでしょう。反射の法則（ほうそく）では、反射角は入射角と等しくなります。垂直な線をはさんで、反対側に50度のところへ進みます。', add: [ar(162, 128, 237, 66, C.green), lb(250, 58, '反射光', 11, C.green, 'end', true), lb(190, 80, '50°', 12, C.green, 'middle', true), ...m('反射角＝入射角＝50度', C.green, FILL.green)] },
  { note: '(2) 入ってくる光と反射した光のなす角は、50度と50度を合わせて 50×2＝100度です。', add: [lb(160, 30, 'なす角＝100°', 12, C.red, 'middle', true), ...m('(2) 50＋50＝100度', C.red, FILL.red)] },
  { note: '確かめます。鏡の面にそって測ると、入る光とのあいだが40度、反射光とのあいだも40度。残りは 180−40−40＝100度で、一致します。', add: m('40＋100＋40＝180（一直線）', C.green, FILL.green) },
], '答え：(1) 50度 (2) 100度');

// c17 凸レンズ
const c17Base = (): DiagramElement[] => [
  ln(10, 85, 310, 85, C.gray), ln(160, 38, 160, 132, C.blue, false, 4), lb(160, 30, '凸レンズ', 11, C.blue, 'middle', true),
  ln(60, 80, 60, 90, C.ink), ln(110, 80, 110, 90, C.ink), ln(210, 80, 210, 90, C.ink), ln(260, 80, 260, 90, C.ink),
  lb(60, 132, '2F', 11, C.gray, 'middle'), lb(110, 132, 'F', 11, C.gray, 'middle'), lb(210, 132, 'F', 11, C.gray, 'middle'), lb(260, 132, '2F', 11, C.gray, 'middle'),
];
const c17 = show([
  { note: '焦点距離（しょうてんきょり）10cmの凸（とつ）レンズです。FはレンズからF＝10cmの点（焦点）、2Fはその2倍の20cmの点です。ろうそくを、レンズから20cmの位置に立てます。', add: [...c17Base(), ar(60, 85, 60, 55, C.red), lb(60, 48, 'ろうそく', 10, C.red, 'middle', true), ...m('焦点距離10cm、ろうそく20cm')] },
  { note: '❓ろうそくは、レンズからどんな位置にあるでしょう。焦点距離のちょうど2倍、2Fの位置です。', add: [...m('ろうそくは2Fの位置')] },
  { note: '❓像のでき方は、光の道すじで考えます。まず、ろうそくの先から、軸に平行に出た光は、レンズで曲がって、反対側の焦点Fを通ります。', add: [ln(60, 55, 160, 55, C.red), ln(160, 55, 260, 115, C.red), ...m('平行な光は、焦点を通る', C.red, FILL.red)] },
  { note: 'もう1本。レンズの中心を通る光は、曲がらずにまっすぐ進みます。', add: [ln(60, 55, 260, 115, C.purple), ...m('中心を通る光はまっすぐ', C.purple, FILL.purple)] },
  { note: '❓2本の光は、どこで交わるのでしょう。レンズの反対側の、2Fの位置（20cm）です。ここにスクリーンを置くと、像がうつります。', add: [ln(260, 45, 260, 124, C.gray, false, 3), ar(260, 85, 260, 115, C.green), lb(260, 148, 'スクリーン', 10, C.gray, 'middle'), ...m('像はレンズから20cm', C.green, FILL.green)] },
  { note: '像の向きは、ろうそくが上向きなのに、像は下向きです。上下が逆で、左右も逆向きになります。', add: [lb(268, 62, '上下左右', 10, C.green, 'start', true), lb(268, 74, '逆向き', 10, C.green, 'start', true), ...m('像は上下左右が逆向き', C.green, FILL.green)] },
  { note: '像の大きさは、ろうそくの高さ（矢印30）と、像の高さ（矢印30）が同じです。光の道すじが対称になっているからです。', add: [lb(60, 154, '高さ同じ', 10, C.main, 'middle', true), lb(260, 34, '高さ同じ', 10, C.main, 'middle', true), ...m('ろうそくと同じ大きさ', C.green, FILL.green)] },
  { note: '答え。レンズから20cmの位置に、同じ大きさで、上下左右が逆向きの像がうつります。', add: m('20cm・同じ大きさ・逆向き', C.green, FILL.green) },
], '答え：20cmの位置に、同じ大きさの逆向きの像');

// c18 音の速さ
const c18Base = (): DiagramElement[] => [ci(50, 80, 22, '花火', C.red, FILL.yellow, 11), disc(270, 80, 14, C.main, FILL.warm), lb(270, 114, 'わたし', 11, C.main, 'middle', true), ln(72, 135, 256, 135, C.gray, true), lb(164, 152, '距離（？m）', 11, C.gray, 'middle')];
const c18 = show([
  { note: '遠くで花火が開くのが見えてから、4.5秒後に音が聞こえました。花火までの距離を求めます。', add: [...c18Base(), ...m('見えて4.5秒後に音')] },
  { note: '❓光と音は、どちらが速いのでしょう。光はものすごく速くて、遠くの花火でもほとんど一瞬で目に届きます。', add: [ar(75, 66, 250, 66, C.red), lb(164, 56, '光はほぼ一瞬', 11, C.red, 'middle', true), ...m('光は一瞬で届く', C.red, FILL.red)] },
  { note: '音は、秒速340mです。1秒で340mしか進みません。', add: [ar(75, 100, 250, 100, C.blue, true), lb(164, 90, '音は秒速340m', 11, C.blue, 'middle', true), ...m('音は秒速340m', C.blue, FILL.blue)] },
  { note: '❓4.5秒は、何の時間でしょう。光はほぼ0秒で届くので、4.5秒は、音が花火の場所から私のところまで進むのにかかった時間です。', add: m('4.5秒＝音が進んだ時間') },
  { note: '❓距離を求める式は、何でしょう。距離＝速さ×時間です。340×4.5を計算します。', add: m('距離＝340×4.5', C.green, FILL.green) },
  { note: '計算を分けます。340×4＝1360、340×0.5＝170。足して 1360＋170＝1530です。', add: fresh(bx(20, 30, 130, 44, '340×4＝1360', C.blue, FILL.blue, 14), bx(170, 30, 130, 44, '340×0.5＝170', C.blue, FILL.blue, 14), ar(85, 78, 140, 100, C.gray), ar(235, 78, 180, 100, C.gray), bx(100, 100, 120, 40, '1360＋170', C.green, FILL.green, 14), ...m('＝1530m', C.green, FILL.green)) },
  { note: '答え。花火までの距離は1530mです。', add: m('答え 1530m', C.green, FILL.green) },
  { note: '確かめます。1530mを秒速340mで進む時間は 1530÷340＝4.5秒。問題と一致します。', add: m('1530÷340＝4.5秒', C.green, FILL.green) },
], '答え：1530m');

// c19 弦の音の高さ
const strRows = [{ y: 38, l: 80, t: 'A：40cm・強い', k: 'A' }, { y: 74, l: 120, t: 'B：60cm・強い', k: 'B' }, { y: 110, l: 80, t: 'C：40cm・弱い', k: 'C' }, { y: 146, l: 120, t: 'D：60cm・弱い', k: 'D' }];
const c19Base = (): DiagramElement[] => strRows.flatMap((r) => [lb(14, r.y + 4, r.k, 13, C.ink, 'start', true), ln(62, r.y, 62 + r.l, r.y, C.gray, false, 2.5), lb(200, r.y + 4, r.t, 11, C.ink, 'start')]);
const c19 = show([
  { note: 'モノコードの弦（げん）を、長さと張り方を変えて鳴らします。太さと材質は同じです。A〜Dの4通りで、音の高さをくらべます。', add: [...c19Base(), ...m('長さ2通り×張り方2通り')] },
  { note: '❓音の高さは、何で決まるのでしょう。弦が1秒間にふるえる回数です。回数が多いほど高い音になります。', add: m('ふるえる回数が多い→高い音') },
  { note: '❓弦が短いと、ふるえる回数はどうなるでしょう。短い弦ほど、はやくふるえて回数が多くなります。短いほど高い音です。', add: [ln(62, 38, 142, 38, C.blue, false, 4), ln(62, 110, 142, 110, C.blue, false, 4), ...m('短い弦ほど高い音', C.blue, FILL.blue)] },
  { note: '❓弦を強く張ると、どうなるでしょう。もとにもどろうとする力が強くなって、ふるえる回数が増えます。強く張るほど高い音です。', add: [ln(62, 74, 182, 74, C.purple, false, 4), ...m('強く張るほど高い音', C.purple, FILL.purple)] },
  { note: '高くなる条件を、いくつ持っているか数えます。Aは2つ、BとCは1つずつ、Dは0です。', add: [ci(40, 38, 9, '2', C.red, FILL.red, 11), ci(40, 74, 9, '1', C.main, FILL.warm, 11), ci(40, 110, 9, '1', C.main, FILL.warm, 11), ci(40, 146, 9, '0', C.blue, FILL.blue, 11), ...m('高くなる条件の数：2・1・1・0')] },
  { note: '(1) 2つそろったAが、いちばん高い音です。', add: [ln(62, 38, 142, 38, C.red, false, 5), ...m('(1) いちばん高いのはA', C.red, FILL.red)] },
  { note: '(2) どちらも低くなる条件のDが、いちばん低い音です。', add: [ln(62, 146, 182, 146, C.blue, false, 5), ...m('(2) いちばん低いのはD', C.blue, FILL.blue)] },
  { note: '確かめます。BとCは、高い条件と低い条件が1つずつなので、AとDの中間です。この問題では、BとCの高さのくらべはできませんが、聞かれていません。', add: m('A（高）＞B・C＞D（低）', C.green, FILL.green) },
], '答え：(1) A (2) D');

// c20 電磁石
const nailScene = (n: number): DiagramElement[] => {
  const out: DiagramElement[] = [ln(90, 70, 230, 70, C.gray, false, 6)];
  for (let i = 0; i < n; i++) out.push(ln(110 + i * 6, 62, 115 + i * 6, 78, C.main, false, 1.6));
  return out;
};
const clips = (n: number, y = 100, step = 20, per = 12): DiagramElement[] => Array.from({ length: n }, (_, i) => disc(110 + (i % per) * step, y + Math.floor(i / per) * 13, 5.5, C.gray, FILL.gray));
const c20 = show([
  { note: '鉄くぎにエナメル線を100回巻いて、かん電池1個をつなぐと、クリップが6個つきました。', add: [...nailScene(10), bx(250, 55, 50, 32, '電池\n1個', C.main, FILL.warm, 11), ln(230, 70, 250, 70, C.gray), ...clips(6), lb(110, 128, '巻き数100回・6個', 11, C.ink, 'start', true), ...m('100回・電池1個＝6個')] },
  { note: '❓電磁石（でんじしゃく）の強さは、何で決まるのでしょう。問題にあるとおり、巻き数と、流れる電流の大きさに、それぞれ比例します。', add: fresh(bx(20, 30, 80, 44, '巻き数\n○倍', C.blue, FILL.blue, 12), lb(114, 58, '×', 18, C.ink, 'middle', true), bx(128, 30, 80, 44, '電流\n○倍', C.purple, FILL.purple, 12), lb(222, 58, '＝', 18, C.ink, 'middle', true), bx(236, 30, 70, 44, '強さ\n○倍', C.red, FILL.red, 12), ...m('強さの倍率＝巻き数×電流')) },
  { note: '(1) 巻き数は100回から200回で2倍。電池2個を直列につなぐと、電流は電池1個のときの2倍になります。', add: fresh(bx(20, 30, 80, 44, '巻き数\n2倍', C.blue, FILL.blue, 12), lb(114, 58, '×', 18, C.ink, 'middle', true), bx(128, 30, 80, 44, '電流\n2倍', C.purple, FILL.purple, 12), lb(222, 58, '＝', 18, C.ink, 'middle', true), bx(236, 30, 70, 44, '強さ\n？倍', C.red, FILL.red, 12), lb(168, 100, '電池2個の直列→電流2倍', 11, C.gray, 'middle'), ...m('巻き数2倍、電流2倍')) },
  { note: '強さは 2×2＝4倍になります。クリップは 6×4＝24個です。', add: [cover(234, 28, 74, 48), bx(236, 30, 70, 44, '強さ\n4倍', C.red, FILL.red, 12), ...clips(24, 116, 14), lb(30, 150, '6×4＝24個', 12, C.red, 'start', true), ...m('(1) 6×4＝24個', C.red, FILL.red)] },
  { note: '(2) 巻き数は100回のまま。電池2個を並列につなぎます。❓並列にすると、電流は増えるでしょうか。', add: fresh(bx(20, 30, 80, 44, '巻き数\n1倍', C.blue, FILL.blue, 12), lb(114, 58, '×', 18, C.ink, 'middle', true), bx(128, 30, 80, 44, '電流\n？倍', C.purple, FILL.purple, 12), ...m('(2) 100回・電池2個並列')) },
  { note: '並列では、コイルに流れる電流は、電池1個のときと同じです。電池が電流を半分ずつ受けもつだけなので、電池が長持ちするだけで、電磁石は強くなりません。', add: [cover(126, 28, 84, 48), bx(128, 30, 80, 44, '電流\n1倍', C.purple, FILL.purple, 12), lb(222, 58, '＝', 18, C.ink, 'middle', true), bx(236, 30, 70, 44, '強さ\n1倍', C.red, FILL.red, 12), ...m('並列：電流は1倍のまま', C.purple, FILL.purple)] },
  { note: '強さは 1×1＝1倍。クリップは6個のままです。', add: [...clips(6, 126), lb(30, 150, '6個のまま', 12, C.red, 'start', true), ...m('(2) 6個', C.red, FILL.red)] },
  { note: '答え。(1) 24個、(2) 6個です。確かめ：(1)は(2)の4倍。巻き数と直列の効果が4倍で、並列は変化なし、という説明と合っています。', add: m('(1) 24個　(2) 6個', C.green, FILL.green) },
], '答え：(1) 24個 (2) 6個');

// c21 輪軸
const c21Base = (): DiagramElement[] => [
  disc(160, 85, 45, C.main, FILL.warm), disc(160, 85, 18, C.gray, FILL.gray), disc(160, 85, 3, C.ink, C.ink),
  ln(115, 85, 115, 128, C.gray, false, 2.5), wt(115, 128, '30g', C.red, FILL.red, 36, 22),
  ln(178, 85, 178, 138, C.gray, false, 2.5), wt(178, 138, '□g', C.blue, FILL.blue, 36, 22),
];
const c21 = show([
  { note: '大きい輪（半径10cm）と小さい輪（半径4cm）が同じ軸についた輪軸（りんじく）です。それぞれの輪にひもを巻いて、反対まわりにおもりをつるし、つり合わせます。', add: [...c21Base(), ...m('大きい輪に30g、小さい輪に□g')] },
  { note: '❓輪軸は、何と同じ考え方でしょう。てこです。軸が支点（してん）、ひもを巻いた輪の半径が、うでの長さにあたります。', add: [ln(160, 85, 115, 85, C.red, false, 2.5), ln(160, 85, 178, 85, C.blue, false, 2.5), lb(126, 79, '10cm', 10, C.red, 'middle', true), lb(188, 79, '4cm', 10, C.blue, 'middle', true), ...m('半径＝うでの長さ')] },
  { note: '❓てこがつり合うのは、いつでしょう。（おもりの重さ）×（うでの長さ）が、左右で等しいときです。まず、大きい輪のほうを計算します。30×10＝300。', add: m('大きい輪：30×10＝300', C.red, FILL.red) },
  { note: '小さい輪のほうは、□×4です。', add: m('小さい輪：□×4', C.blue, FILL.blue) },
  { note: 'つり合うので、300＝□×4です。', add: m('300＝□×4', C.main, FILL.warm) },
  { note: '□＝300÷4＝75。小さい輪には、75gのおもりをつるします。', add: [cover(176, 136, 40, 26), wt(178, 138, '75g', C.green, FILL.green, 36, 22), ...m('□＝300÷4＝75g', C.green, FILL.green)] },
  { note: '確かめます。半径の比は 10:4＝5:2。重さの比は、逆の 2:5になるはずです。30:75＝2:5で、一致しています。半径が大きいほうは、軽いおもりでつり合います。', add: m('半径5:2 ⇔ 重さ2:5', C.green, FILL.green) },
], '答え：75g');

// c22 斜面
const c22Scene = (): DiagramElement[] => [
  pg([[60, 150], [243, 150], [243, 70]], C.gray, FILL.gray), bx(130, 78, 40, 22, '500g', C.red, FILL.red, 11),
  ln(258, 70, 258, 150, C.ink), lb(264, 114, '高さ', 10, C.ink, 'start'), lb(264, 126, '40cm', 10, C.ink, 'start'), lb(165, 141, '斜面の長さ100cm', 10, C.ink, 'middle'),
];
const c22 = show([
  { note: 'なめらかな斜面（しゃめん：長さ100cm、高さ40cm）の上に、500gの物体があります。これを、斜面にそって引き上げます。', add: [...c22Scene(), ...m('長さ100cm、高さ40cm')] },
  { note: '❓道具を使うと、何が変わって、何が変わらないのでしょう。「力」と「動かす長さ」は変わりますが、その積（力×長さ）は変わりません。', add: m('力×動かす長さは変わらない') },
  { note: 'まず、斜面を使わずに、まっすぐ40cm持ち上げるとき。力は500g、長さは40cmなので、500×40＝20000です。', add: fresh(bx(30, 30, 260, 50, '直接持ち上げる\n500g×40cm＝20000', C.gray, FILL.gray, 14), ...m('直接：500×40＝20000')) },
  { note: '斜面を使っても、この20000は変わりません。斜面にそって引く長さは、斜面の長さの100cmです。', add: [bx(30, 92, 260, 50, '斜面を使う\n□g×100cm＝20000', C.blue, FILL.blue, 14), ...m('斜面：□×100＝20000', C.blue, FILL.blue)] },
  { note: '□＝20000÷100＝200g。(1) 引く力は200gです。', add: m('(1) □＝20000÷100＝200g', C.red, FILL.red) },
  { note: '(2) 引く長さは、斜面の長さと同じ100cmです。まっすぐ持ち上げる40cmより、長く引くことになります。', add: fresh(...c22Scene(), ar(178, 86, 228, 64, C.red), lb(205, 52, '100cm引く', 11, C.red, 'middle', true), ...m('(2) 100cm引く', C.red, FILL.red)) },
  { note: '確かめます。引く力は、重さの（高さ÷斜面の長さ）倍。40÷100＝0.4倍で、500×0.4＝200g。一致します。', add: m('500×40÷100＝200g', C.green, FILL.green) },
  { note: '答え。(1) 200g、(2) 100cmです。力は500gの0.4倍で済みますが、そのぶん長く引きます。', add: m('(1) 200g　(2) 100cm', C.green, FILL.green) },
], '答え：(1) 200g (2) 100cm');

// c23 電池のつなぎ方
const cols = [55, 160, 265];
const cell = (i: number): DiagramElement[] => {
  const cx = cols[i];
  const out: DiagramElement[] = [lb(cx, 30, ['ア 直列', 'イ 並列', 'ウ 1個'][i], 11, C.ink, 'middle', true)];
  if (i === 0) out.push(bx(cx - 34, 56, 32, 22, '電池', C.main, FILL.warm, 10), bx(cx + 2, 56, 32, 22, '電池', C.main, FILL.warm, 10), ln(cx - 2, 67, cx + 2, 67, C.gray));
  if (i === 1) out.push(bx(cx - 16, 44, 32, 20, '電池', C.main, FILL.warm, 10), bx(cx - 16, 70, 32, 20, '電池', C.main, FILL.warm, 10), ln(cx - 16, 54, cx - 24, 54, C.gray), ln(cx - 24, 54, cx - 24, 80, C.gray), ln(cx - 24, 80, cx - 16, 80, C.gray), ln(cx + 16, 54, cx + 24, 54, C.gray), ln(cx + 24, 54, cx + 24, 80, C.gray), ln(cx + 24, 80, cx + 16, 80, C.gray));
  if (i === 2) out.push(bx(cx - 16, 56, 32, 22, '電池', C.main, FILL.warm, 10));
  out.push(ln(cx, i === 1 ? 90 : 78, cx, 108, C.gray), ci(cx, 122, 13, '球', C.main, FILL.yellow, 11));
  return out;
};
const c23 = show([
  { note: '同じかん電池と、同じ豆電球を使います。豆電球1個に、ア（電池2個を直列＝ちょくれつ）、イ（電池2個を並列＝へいれつ）、ウ（電池1個）をつなぎました。', add: [...cell(0), ...cell(1), ...cell(2), ...m('ア・イ・ウの3通り')] },
  { note: '❓アの直列は、電流がどうなるのでしょう。電池を直列につなぐと、電流を押し出す力が足し算になり、電池1個のときの2倍の電流が流れます。電流を「2」とします。', add: [lb(55, 156, '電流 2', 12, C.red, 'middle', true), ...m('ア：電池1個の2倍→2', C.red, FILL.red)] },
  { note: '❓イの並列は、どうでしょう。並列では、電流を押し出す力は電池1個のときと同じです。電流は電池1個のウと同じ「1」。したがって、イ＝ウです。', add: [lb(160, 156, '電流 1', 12, C.blue, 'middle', true), lb(265, 156, '電流 1', 12, C.blue, 'middle', true), ...m('イ＝ウ＝1', C.blue, FILL.blue)] },
  { note: '(1) 電流の大きさは、ア（2）＞イ（1）＝ウ（1）です。', add: m('(1) ア＞イ＝ウ', C.green, FILL.green) },
  { note: '(2) 長持ちを考えます。❓電池が長持ちするかどうかは、電池1個がどれだけの電流を出すかで決まります。出す電流が小さいほど長持ちです。', add: fresh(bx(10, 30, 95, 66, 'ア\n電池1個の電流\n2', C.red, FILL.red, 11), bx(112, 30, 95, 66, 'イ\n電池1個の電流\n0.5', C.green, FILL.green, 11), bx(214, 30, 95, 66, 'ウ\n電池1個の電流\n1', C.main, FILL.warm, 11), ...m('電池1個の出す電流をくらべる')) },
  { note: 'イでは、流れる電流1を、電池2個で半分ずつ出します。1÷2＝0.5。アでは電池1個が2、ウでは1を出すので、イがいちばん小さくなります。', add: m('イは1÷2＝0.5で最小', C.green, FILL.green) },
  { note: '答え。(1) ア＞イ＝ウ、(2) イ。確かめ：イでは、豆電球に流れる電流が電池1個のときと同じで、電池2個で分けるので、長持ちします。', add: m('(1) ア＞イ＝ウ　(2) イ', C.green, FILL.green) },
], '答え：(1) ア＞イ＝ウ (2) イ');

// ═════════ 化学 ═════════

// c24 リトマス紙
const paperB = (x: number, y: number): DiagramElement => bx(x, y, 78, 28, '青リトマス紙', C.blue, '#BFDBFE', 10);
const paperR = (x: number, y: number): DiagramElement => bx(x, y, 78, 28, '赤リトマス紙', C.red, '#FECDD3', 10);
const four = (labels: string[], y: number, colors: string[]): DiagramElement[] => labels.map((t, i) => bx(10 + i * 77, y, 70, 36, t, colors[i], FILL.warm, 11));
const c24 = show([
  { note: '4つの水よう液があります。食塩水、塩酸、アンモニア水、石灰水です。青色リトマス紙を赤色に変えるものを探します。', add: [...four(['食塩水', '塩酸', 'アンモニア\n水', '石灰水'], 40, [C.gray, C.gray, C.gray, C.gray]), ...m('青を赤に変えるものはどれ')] },
  { note: '❓リトマス紙は、何を調べる紙でしょう。水よう液が、酸性・中性・アルカリ性のどれなのかを調べる紙です。', add: fresh(paperB(30, 40), paperR(212, 40), lb(160, 60, '調べる紙', 11, C.gray, 'middle'), ...m('水よう液の性質を調べる')) },
  { note: '❓酸性の水よう液をつけると、どうなるでしょう。青色リトマス紙が、赤色に変わります。', add: fresh(paperB(30, 50), ar(116, 64, 190, 64, C.red), paperR(196, 50), lb(160, 110, '酸性：青→赤', 14, C.red, 'middle', true), ...m('酸性：青が赤に変わる', C.red, FILL.red)) },
  { note: 'アルカリ性の水よう液では、逆に、赤色リトマス紙が青色に変わります。', add: fresh(paperR(30, 50), ar(116, 64, 190, 64, C.blue), paperB(196, 50), lb(160, 110, 'アルカリ性：赤→青', 14, C.blue, 'middle', true), ...m('アルカリ性：赤が青に', C.blue, FILL.blue)) },
  { note: '中性の水よう液では、どちらの色も変わりません。', add: fresh(paperB(30, 40), paperR(30, 90), lb(190, 66, '中性：変わらない', 12, C.gray, 'start', true), ...m('中性：色は変わらない')) },
  { note: '❓では、4つはそれぞれ何性でしょう。食塩水は中性、塩酸は酸性、アンモニア水と石灰水はアルカリ性です。', add: fresh(...four(['食塩水', '塩酸', 'アンモニア\n水', '石灰水'], 36, [C.gray, C.red, C.blue, C.blue]), ...four(['中性', '酸性', 'アルカリ性', 'アルカリ性'], 96, [C.gray, C.red, C.blue, C.blue]), ...m('酸性は塩酸だけ')) },
  { note: '答え。青色リトマス紙を赤色に変えるのは、酸性の塩酸です。', add: m('答え 塩酸', C.green, FILL.green) },
  { note: '確かめます。ほかの3つは、青色リトマス紙を赤にしません。「アルカリ性は青」とおぼえておくと、色を取りちがえません。', add: m('酸性＝青を赤に', C.green, FILL.green) },
], '答え：塩酸');

// c25 水よう液の見分け（蒸発）
const cols4 = ['食塩水', '砂糖水', '塩酸', 'アンモニア\n水'];
const c25 = show([
  { note: '食塩水・砂糖水・塩酸・アンモニア水の4つを、少しずつ蒸発皿（じょうはつざら）に入れて、加熱して水を蒸発させます。', add: [...four(cols4, 40, [C.gray, C.gray, C.gray, C.gray]), ...m('水を蒸発させると何が残る')] },
  { note: '❓水よう液には、何がとけているのでしょう。食塩と砂糖は固体、塩酸には塩化水素（えんかすいそ）、アンモニア水にはアンモニアという気体がとけています。', add: fresh(...four(cols4, 30, [C.gray, C.gray, C.gray, C.gray]), ...four(['固体', '固体', '気体', '気体'], 84, [C.main, C.main, C.purple, C.purple]), ...m('とけているものの種類')) },
  { note: '食塩水からは、白い固体の食塩が残ります。砂糖水は、加熱で茶色くこげた固体が残ります。', add: fresh(...four(cols4, 30, [C.gray, C.gray, C.gray, C.gray]), bx(10, 84, 70, 44, '白い固体\nが残る', C.main, FILL.warm, 10), bx(87, 84, 70, 44, '茶色い\n固体', C.main, FILL.warm, 10), ...m('固体は蒸発しないで残る')) },
  { note: '❓では、塩酸とアンモニア水は、なぜ何も残らないのでしょう。気体は、水が蒸発するときに、空気中ににげてしまうからです。', add: [bx(164, 84, 70, 44, '何も残らない', C.purple, FILL.purple, 10), bx(241, 84, 70, 44, '何も残らない', C.purple, FILL.purple, 10), ...m('気体はにげてしまう', C.purple, FILL.purple)] },
  { note: '(1) 何も残らないのは、塩酸とアンモニア水です。', add: [ar(199, 145, 199, 134, C.green), ar(276, 145, 276, 134, C.green), ...m('(1) 塩酸とアンモニア水', C.green, FILL.green)] },
  { note: '(2) ❓この2つのうち、赤色リトマス紙を青色に変えるのはどちらでしょう。青に変えるのは、アルカリ性の水よう液です。', add: fresh(bx(40, 40, 110, 40, '塩酸\n酸性', C.red, FILL.red, 12), bx(170, 40, 110, 40, 'アンモニア水\nアルカリ性', C.blue, FILL.blue, 12), ...m('赤を青に変えるのは？')) },
  { note: 'アルカリ性のアンモニア水が、赤色リトマス紙を青色に変えます。塩酸は酸性なので、赤色リトマス紙は変わりません。', add: [lb(225, 108, '赤→青', 12, C.blue, 'middle', true), lb(95, 108, '変わらない', 12, C.red, 'middle', true), ...m('(2) アンモニア水', C.green, FILL.green)] },
  { note: '確かめます。アンモニア水も塩酸も、つんとしたにおいがします。気体がとけていることと合っています。', add: m('気体がとけた水よう液', C.green, FILL.green) },
], '答え：(1) 塩酸とアンモニア水 (2) アンモニア水');

// c26 中和
const c26 = show([
  { note: '塩酸20cm³とちょうど中和（ちゅうわ）するのは、水酸化ナトリウム水よう液10cm³です。塩酸60cm³に、水酸化ナトリウム水よう液40cm³を加えます。', add: [bx(30, 40, 110, 50, '塩酸\n20cm³', C.red, FILL.red, 12), lb(160, 70, '⇔', 18, C.ink, 'middle', true), bx(180, 40, 110, 50, '水酸化ナトリウム\n水よう液10cm³', C.blue, FILL.blue, 11), ...m('20：10でちょうど中和')] },
  { note: '❓まず、塩酸60cm³をちょうど中和するのに、水酸化ナトリウム水よう液はいくついるでしょう。60は20の3倍なので、必要なのも3倍です。', add: fresh(bx(20, 40, 130, 44, '塩酸60cm³\n（20の3倍）', C.red, FILL.red, 12), ar(155, 62, 175, 62, C.gray), bx(180, 40, 120, 44, '必要な量\n10×3＝30cm³', C.blue, FILL.blue, 12), ...m('ちょうどの量は30cm³')) },
  { note: '❓実際に加えた量は、どうでしょう。40cm³で、ちょうどの量30cm³より、10cm³多くなっています。', add: fresh(bx(20, 40, 130, 44, '必要 30cm³', C.gray, FILL.gray, 13), bx(165, 40, 135, 44, '加えた 40cm³', C.blue, FILL.blue, 13), lb(160, 118, '40−30＝10cm³ 多い', 13, C.red, 'middle', true), ...m('水酸化ナトリウムが余る', C.red, FILL.red)) },
  { note: '(1) 水酸化ナトリウムが余るので、アルカリ性です。BTB液は、酸性で黄色、中性で緑色、アルカリ性で青色になります。', add: fresh(bx(20, 40, 80, 36, '酸性\n黄色', C.main, '#FEF9C3', 12), bx(120, 40, 80, 36, '中性\n緑色', C.green, FILL.green, 12), bx(220, 40, 80, 36, 'アルカリ性\n青色', C.blue, '#BFDBFE', 11), lb(260, 100, '↑ これ', 13, C.blue, 'middle', true), ...m('(1) アルカリ性、青色', C.blue, FILL.blue)) },
  { note: '(2) ❓水を蒸発させると、何が固体として残るでしょう。中和でできた食塩が1つ。さらに、余った水酸化ナトリウムも、固体として残ります。', add: fresh(bx(30, 40, 120, 50, '中和でできた\n食塩', C.green, FILL.green, 12), lb(165, 70, '＋', 18, C.ink, 'middle', true), bx(180, 40, 110, 50, '余った\n水酸化ナトリウム', C.blue, FILL.blue, 11), ...m('(2) 固体は2種類', C.green, FILL.green)) },
  { note: '答え。(1) アルカリ性、BTB液は青色。(2) 2種類（食塩と水酸化ナトリウム）。', add: m('アルカリ性・青色・2種類', C.green, FILL.green) },
  { note: '確かめます。もし30cm³だけ加えたなら、ちょうど中性で、固体は食塩1種類のはずです。そこから10cm³多く加えたので、アルカリ性になり、固体が2種類になる、という流れと合っています。', add: m('30cm³ならちょうど中性', C.green, FILL.green) },
], '答え：(1) アルカリ性・青色 (2) 2種類');

// c27 石灰石と塩酸
const barsData = [240, 480, 720, 840, 840];
const c27Chart = (upTo: number): DiagramElement[] => {
  const out: DiagramElement[] = [ln(30, 150, 300, 150, C.gray)];
  barsData.slice(0, upTo).forEach((v, i) => {
    const h = v * 0.14;
    out.push(rect(45 + i * 52, 150 - h, 34, h, i >= 3 ? C.red : C.blue, i >= 3 ? FILL.red : FILL.blue), lb(62 + i * 52, 146 - h, String(v), 10, C.ink, 'middle', true), lb(62 + i * 52, 163, `${i + 1}g`, 10, C.gray, 'middle'));
  });
  return out;
};
const c27 = show([
  { note: '濃さが同じ塩酸30cm³に、石灰石（せっかいせき）を1g、2g、…と増やして加え、出た二酸化炭素の体積（cm³）をはかりました。', add: [...c27Chart(5), ...m('塩酸30cm³に石灰石を増やす')] },
  { note: '❓表をよく見ると、増え方に変化があります。1g→2g→3gでは、240ずつ増えますが、4gと5gでは、同じ840のままです。', add: m('240・480・720・840・840') },
  { note: '❓増えなくなったのは、なぜでしょう。塩酸がなくなって、石灰石が余るようになったからです。石灰石が3.5gのところで、塩酸がちょうどなくなります。', add: [ln(35, 150 - 840 * 0.14, 300, 150 - 840 * 0.14, C.red, true), ...m('840で頭打ち＝塩酸がなくなる', C.red, FILL.red)] },
  { note: '(1) 石灰石1gで240cm³。840cm³になるのに必要な石灰石は、840÷240＝3.5gです。', add: m('(1) 840÷240＝3.5g', C.green, FILL.green) },
  { note: '(2) 塩酸が60cm³（2倍）になりました。❓反応できる石灰石は、何gまでふえるでしょう。2倍の 3.5×2＝7gまでです。', add: fresh(bx(20, 36, 130, 50, '塩酸30cm³\n石灰石3.5g', C.blue, FILL.blue, 12), bx(170, 36, 130, 50, '塩酸60cm³\n石灰石7g', C.red, FILL.red, 12), ar(150, 61, 168, 61, C.gray), ...m('塩酸2倍→反応する量も2倍')) },
  { note: '❓加えた石灰石は5gで、7gより少ないですね。ということは、どちらがなくなるでしょう。石灰石が全部反応し、塩酸が余ります。', add: fresh(bx(20, 36, 130, 40, '加えた石灰石5g', C.blue, FILL.blue, 13), lb(160, 60, '＜', 18, C.ink, 'middle', true), bx(170, 36, 130, 40, '反応できる7g', C.gray, FILL.gray, 13), lb(160, 110, '石灰石が先になくなる', 13, C.red, 'middle', true), ...m('石灰石の量で気体が決まる')) },
  { note: '気体は、石灰石1gあたり240cm³なので、240×5＝1200cm³です。', add: m('(2) 240×5＝1200cm³', C.green, FILL.green) },
  { note: '確かめます。1200cm³は、塩酸60cm³での最大量 840×2＝1680cm³より小さいので、塩酸が余っている状態と合っています。', add: m('1200＜1680で筋が通る', C.green, FILL.green) },
], '答え：(1) 3.5g (2) 1200cm³');

// c28 気体の見分け
const gasRows = [
  { k: 'ア', t: '火を近づける\nとポンと燃える', g: '水素', c: C.main },
  { k: 'イ', t: '石灰水が\n白くにごる', g: '二酸化炭素', c: C.blue },
  { k: 'ウ', t: 'しめった赤リト\nマス紙が青に', g: 'アンモニア', c: C.purple },
  { k: 'エ', t: '線香が炎を上げ\nて激しく燃える', g: '酸素', c: C.red },
];
const gasBase = (): DiagramElement[] => gasRows.flatMap((r, i) => [bx(10, 10 + i * 40, 34, 32, r.k, C.gray, FILL.gray, 14), bx(50, 10 + i * 40, 150, 32, r.t, C.gray, FILL.warm, 10)]);
const gasAns = (i: number): DiagramElement[] => [ar(205, 26 + i * 40, 232, 26 + i * 40, gasRows[i].c), bx(236, 10 + i * 40, 76, 32, gasRows[i].g, gasRows[i].c, FILL.warm, 11)];
const c28 = show([
  { note: '酸素・二酸化炭素・水素・アンモニアが、ア〜エの試験管に入っています。実験の結果から、それぞれ何の気体かを見分けます。', add: [...gasBase(), ...m('4つの実験の結果から見分ける')] },
  { note: 'ア：❓火を近づけると、ポンと音を立てて燃える気体は何でしょう。水素です。水素は、よく燃える軽い気体です。', add: [...gasAns(0), ...m('ア：水素', C.main, FILL.warm)] },
  { note: 'イ：❓石灰水（せっかいすい）を白くにごらせる気体は、何でしょう。二酸化炭素です。', add: [...gasAns(1), ...m('イ：二酸化炭素', C.blue, FILL.blue)] },
  { note: 'ウ：❓しめらせた赤色リトマス紙を青色に変えるのは、アルカリ性の気体です。水にとけてアルカリ性になるアンモニアです。', add: [...gasAns(2), ...m('ウ：アンモニア', C.purple, FILL.purple)] },
  { note: 'エ：❓火のついた線香が炎を上げて激しく燃えるのは、ものを燃やすはたらきのある気体、酸素です。', add: [...gasAns(3), ...m('エ：酸素', C.red, FILL.red)] },
  { note: 'まとめ。ア 水素、イ 二酸化炭素、ウ アンモニア、エ 酸素。', add: m('ア水素 イ二酸化炭素 ウアンモニア エ酸素', C.green, FILL.green) },
  { note: '確かめます。4つの気体が、1つずつ、重なりなく当てはまっています。酸素は線香が燃え、二酸化炭素は線香の火を消す、という区別も大切です。', add: m('酸素は燃やす、二酸化炭素は消す', C.green, FILL.green) },
], '答え：ア 水素 イ 二酸化炭素 ウ アンモニア エ 酸素');

// c29 水が氷になる
const c29Bars = (iceH: number): DiagramElement[] => [bx(40, 150 - 80, 70, 80, '水\n500cm³\n500g', C.blue, FILL.blue, 11), ...(iceH > 0 ? [ar(118, 110, 168, 110, C.gray), bx(176, 150 - iceH, 70, iceH, '氷\n？', C.main, '#E0F2FE', 12)] : [])];
const c29 = show([
  { note: '水500cm³（重さ500g）を冷やして、すべて氷にします。水が氷になると、体積は約1.1倍になります。氷の重さと体積を求めます。', add: [...c29Bars(88), ...m('水500cm³・500gを凍らせる')] },
  { note: '❓まず重さです。水が氷になっても、水のつぶがなくなったり、増えたりするでしょうか。いいえ、状態が変わるだけです。重さは変わりません。', add: m('状態が変わっても重さは同じ', C.blue, FILL.blue) },
  { note: '重さは、500gのままです。', add: [cover(174, 60, 74, 92), bx(176, 62, 70, 88, '氷\n500g', C.main, '#E0F2FE', 12), ...m('重さ 500g', C.blue, FILL.blue)] },
  { note: '❓では体積は、どうなるのでしょう。水のつぶが、すき間をあけてならぶので、体積は約1.1倍に大きくなります。', add: m('体積は約1.1倍', C.red, FILL.red) },
  { note: '体積は、500×1.1＝550cm³です。500cm³より、50cm³だけ大きくなります。', add: [cover(174, 60, 74, 92), bx(176, 62, 70, 88, '氷\n550cm³\n500g', C.main, '#E0F2FE', 11), ...m('500×1.1＝550cm³', C.red, FILL.red)] },
  { note: '答え。重さ500g、体積550cm³です。', add: m('重さ500g　体積550cm³', C.green, FILL.green) },
  { note: '確かめます。氷1cm³あたりの重さは 500÷550＝約0.91g。水の1gより軽いので、氷は水にういて、水面から頭を出します。実際の氷と合っています。', add: m('氷は水より軽い（約0.91g）', C.green, FILL.green) },
], '答え：重さ500g、体積550cm³');

// c30 加熱の時間
const c30 = show([
  { note: '同じ強さの火で水を温めます。水100gを20℃から100℃にするのに4分かかりました。水300gを20℃から60℃にするのは、何分でしょう。', add: [bx(20, 36, 130, 60, '水100g\n20℃→100℃\n4分', C.blue, FILL.blue, 12), bx(170, 36, 130, 60, '水300g\n20℃→60℃\n？分', C.red, FILL.red, 12), ...m('同じ強さの火で温める')] },
  { note: '❓必要な熱の量は、何で決まるのでしょう。水の重さが2倍なら2倍、上げる温度が2倍なら2倍です。「重さ×上げる温度」で決まります。', add: fresh(bx(30, 36, 100, 40, '水の重さ', C.blue, FILL.blue, 13), lb(150, 62, '×', 20, C.ink, 'middle', true), bx(170, 36, 120, 40, '上げる温度', C.red, FILL.red, 13), ...m('これが熱の量の目安')) },
  { note: '最初の条件で、上げる温度は 100−20＝80℃。重さ×温度＝100×80＝8000。これに4分かかりました。', add: fresh(bx(20, 36, 280, 40, '100g×（100−20）＝8000', C.blue, FILL.blue, 15), bx(20, 90, 280, 36, '8000の熱に4分かかった', C.blue, FILL.blue, 14), ...m('8000で4分')) },
  { note: '❓1分で、どれだけ温められるのでしょう。8000÷4＝2000。火の強さが同じなので、1分あたり2000です。', add: m('1分あたり 8000÷4＝2000', C.purple, FILL.purple) },
  { note: '求める条件は、上げる温度が 60−20＝40℃。重さ×温度＝300×40＝12000です。', add: fresh(bx(20, 36, 280, 40, '300g×（60−20）＝12000', C.red, FILL.red, 15), ...m('必要な熱は12000', C.red, FILL.red)) },
  { note: '時間は、12000÷2000＝6分です。', add: [bx(20, 90, 280, 40, '12000÷2000＝6分', C.green, FILL.green, 16), ...m('答え 6分', C.green, FILL.green)] },
  { note: '確かめます。水が3倍なので同じ温度上昇なら 4×3＝12分。上げる温度は80℃から40℃で半分なので 12÷2＝6分。一致します。', add: m('4×3÷2＝6分で一致', C.green, FILL.green) },
], '答え：6分');

// c31 鉄が燃える
const c31 = show([
  { note: 'スチールウール（鉄）5.0gを完全に燃やすと、燃えたあとは6.9gになりました。', add: [bx(20, 50, 90, 50, 'スチール\nウール5.0g', C.gray, FILL.gray, 11), ar(114, 75, 186, 75, C.red), lb(150, 66, '燃やす', 11, C.red, 'middle', true), bx(190, 50, 110, 50, '燃えたあと\n6.9g', C.main, FILL.warm, 12), ...m('5.0g→6.9g')] },
  { note: '❓なぜ、燃えたのに重くなったのでしょう。鉄が空気中の酸素と結びついて、酸素の重さが加わったからです。木や炭は気体になって出ていくので軽くなりますが、鉄は固体のままなので重くなります。', add: [ar(150, 125, 150, 106, C.blue), bx(110, 126, 80, 28, '酸素と結びつく', C.blue, FILL.blue, 11), ...m('鉄は酸素と結びついて重くなる')] },
  { note: '(1) 結びついた酸素の重さは、燃えたあとの重さから、燃やす前を引いて、6.9−5.0＝1.9gです。', add: fresh(bx(20, 40, 110, 44, '6.9g\n（燃えたあと）', C.main, FILL.warm, 12), lb(150, 66, '−', 20, C.ink, 'middle', true), bx(170, 40, 130, 44, '5.0g\n（燃やす前）', C.gray, FILL.gray, 12), ...m('(1) 6.9−5.0＝1.9g', C.blue, FILL.blue)) },
  { note: '(2) 20gのスチールウールは、5.0gの何倍でしょう。20÷5.0＝4倍です。', add: fresh(bx(20, 40, 110, 44, '5.0g', C.gray, FILL.gray, 15), ar(134, 62, 166, 62, C.gray), bx(170, 40, 130, 44, '20g（4倍）', C.red, FILL.red, 15), ...m('20÷5.0＝4倍', C.red, FILL.red)) },
  { note: '❓酸素が結びつく量は、鉄の量に比例します。鉄が4倍なら、燃えたあとの重さも4倍です。', add: m('燃えたあとも4倍', C.red, FILL.red) },
  { note: '燃えたあとの重さは、6.9×4＝27.6gです。', add: [bx(20, 100, 280, 40, '6.9×4＝27.6g', C.green, FILL.green, 16), ...m('(2) 27.6g', C.green, FILL.green)] },
  { note: '確かめます。(2)で結びつく酸素は 1.9×4＝7.6g。鉄20gにたすと 20＋7.6＝27.6gで一致します。', add: m('20＋7.6＝27.6gで一致', C.green, FILL.green) },
  { note: '答え。(1) 1.9g、(2) 27.6gです。', add: m('(1) 1.9g　(2) 27.6g', C.green, FILL.green) },
], '答え：(1) 1.9g (2) 27.6g');

// c32 びんの中の酸素
const c32Bottle = (water: number): DiagramElement[] => [rect(100, 28, 100, 100, C.gray, '#FFFFFF'), rect(60, 118, 180, 40, C.blue, '#FFFFFF'), rect(61, 124, 178, 33, '#BAE6FD', '#BAE6FD'), ...(water > 0 ? [rect(101, 118 - water, 98, water + 8, '#BAE6FD', '#BAE6FD')] : []), bx(120, 46, 60, 30, 'スチール\nウール', C.gray, FILL.gray, 9)];
const c32 = show([
  { note: '空気600cm³がふくまれるびんの中に、スチールウールを入れて、さかさにして口を水に入れます。長い間おくと、スチールウールがさびて、びんの中に水が入ってきます。', add: [...c32Bottle(0), ...m('600cm³の空気とスチールウール')] },
  { note: '❓スチールウールがさびるとき、空気の何が使われるのでしょう。酸素です。酸素は、鉄と結びついて、気体ではなくなります。', add: m('酸素が使われてなくなる', C.blue, FILL.blue) },
  { note: '❓空気のうち、酸素はどれくらいでしょう。体積の約5分の1です。', add: fresh(bx(20, 50, 56, 40, '酸素\n1/5', C.blue, FILL.blue, 12), bx(76, 50, 224, 40, 'ちっ素など（4/5）', C.gray, FILL.gray, 13), lb(160, 118, '空気600cm³', 12, C.ink, 'middle', true), ...m('空気の約1/5が酸素')) },
  { note: '酸素の体積は、600÷5＝120cm³です。この120cm³がなくなります。', add: [lb(48, 108, '120cm³', 12, C.blue, 'middle', true), ...m('600÷5＝120cm³', C.blue, FILL.blue)] },
  { note: '❓なくなった体積は、どうなるのでしょう。びんの中の気体が120cm³減って、そのぶんを水が入ってきてうめます。', add: fresh(...c32Bottle(24), lb(260, 70, '水が入る', 11, C.blue, 'middle', true), ...m('(1) 入る水は120cm³', C.blue, FILL.blue)) },
  { note: '(2) 酸素がなくなったあと、びんに残る気体で、いちばん多いのは、空気のおもな成分の残り、ちっ素です。', add: [lb(150, 88, 'ちっ素', 14, C.main, 'middle', true), ...m('(2) 残るのはちっ素', C.main, FILL.warm)] },
  { note: '確かめます。水が入ったあとの気体は 600−120＝480cm³。これは、もとの空気のちっ素 600×4÷5＝480cm³と一致します。', add: m('600−120＝480cm³で一致', C.green, FILL.green) },
], '答え：(1) 120cm³ (2) ちっ素');

// c33 食塩水の濃度
const c33Bar = (y: number, total: number, salt: number, saltColor: string = C.red): DiagramElement[] => [
  rect(25, y, total * 0.9, 36, C.blue, FILL.blue), rect(25, y, salt * 0.9, 36, saltColor, FILL.red),
];
const c33 = show([
  { note: '濃度（のうど）10％の食塩水300gを加熱して、水を蒸発させ、濃度15％にします。何gの水を蒸発させればよいでしょう。', add: [...c33Bar(60, 300, 30), lb(25, 50, '食塩水300g', 11, C.ink, 'start', true), ...m('10％の食塩水300g')] },
  { note: '❓まず、食塩は何gとけているのでしょう。濃度は「食塩÷全体」なので、食塩は 300×0.10＝30gです。', add: [lb(25, 118, '食塩30g（赤い部分）', 11, C.red, 'start', true), ...m('食塩＝300×0.10＝30g', C.red, FILL.red)] },
  { note: '❓水を蒸発させたら、食塩は減るでしょうか。いいえ、食塩は蒸発しません。変わるのは水だけです。食塩は30gのままです。', add: fresh(...c33Bar(60, 300, 30), lb(25, 50, 'はじめ300g', 11, C.ink, 'start', true), ...c33Bar(125, 200, 30), lb(25, 114, '蒸発後 □g', 11, C.ink, 'start', true), ...m('食塩30gは変わらない')) },
  { note: '❓15％になったときの全体の重さは、いくつでしょう。食塩30gが全体の15％なので、全体＝30÷0.15＝200gです。', add: [lb(215, 147, '200g', 13, C.blue, 'start', true), ...m('全体＝30÷0.15＝200g', C.blue, FILL.blue)] },
  { note: '蒸発させた水は、はじめの300gと、蒸発後の200gの差です。300−200＝100gです。', add: [bx(205, 60, 90, 36, '蒸発した水100g', C.purple, FILL.purple, 10), ...m('300−200＝100g', C.purple, FILL.purple)] },
  { note: '答え。100gの水を蒸発させます。', add: m('答え 100g', C.green, FILL.green) },
  { note: '確かめます。水は 300−30＝270gから 270−100＝170gに。食塩30gと水170gで全体200g。濃度は 30÷200＝0.15＝15％です。', add: m('30÷200＝15％で一致', C.green, FILL.green) },
], '答え：100g');

// ═════════ 生物 ═════════

// c34 花のつくり
const flower = (): DiagramElement[] => [
  pg([[160, 100], [100, 70], [112, 112]], '#F9A8D4', '#FCE7F3'), pg([[160, 100], [220, 70], [208, 112]], '#F9A8D4', '#FCE7F3'),
  ln(160, 46, 160, 110, C.green, false, 3), disc(160, 42, 6, C.red, FILL.red), disc(160, 128, 22, C.green, FILL.green), disc(160, 128, 5, C.main, FILL.yellow),
  ln(135, 100, 135, 66, C.gray), disc(135, 62, 5, C.main, FILL.yellow), ln(185, 100, 185, 66, C.gray), disc(185, 62, 5, C.main, FILL.yellow),
  lb(172, 38, '柱頭', 11, C.red, 'start', true), lb(190, 124, '子房', 11, C.green, 'start', true), lb(190, 140, '（中に胚珠）', 10, C.main, 'start'), lb(125, 58, 'やく', 11, C.main, 'end', true),
];
const c34 = show([
  { note: '花のつくりです。めしべは、先の「柱頭（ちゅうとう）」、真ん中の細い部分、根もとのふくらんだ「子房（しぼう）」でできています。子房の中には、小さな粒「胚珠（はいしゅ）」が入っています。', add: [...flower(), ...m('めしべの根もとが子房')] },
  { note: '❓受粉（じゅふん）とは、何でしょう。おしべの先「やく」でできた花粉が、めしべの先「柱頭」につくことです。', add: [ar(180, 58, 166, 44, C.purple), lb(215, 50, '花粉', 10, C.purple, 'start', true), ...m('受粉：花粉が柱頭につく', C.purple, FILL.purple)] },
  { note: '❓受粉のあと、子房はどうなるのでしょう。成長して、大きくふくらみ、実になります。', add: fresh(bx(30, 50, 100, 44, '子房', C.green, FILL.green, 16), ar(134, 72, 176, 72, C.gray), bx(180, 50, 110, 44, '実', C.green, FILL.green, 16), ...m('子房→実', C.green, FILL.green)) },
  { note: '❓では、子房の中の胚珠は、どうなるのでしょう。成長して、種子になります。', add: [bx(30, 104, 100, 44, '胚珠', C.main, FILL.warm, 16), ar(134, 126, 176, 126, C.gray), bx(180, 104, 110, 44, '種子', C.main, FILL.warm, 16), ...m('胚珠→種子', C.main, FILL.warm)] },
  { note: '❓実の中に種子があるのは、なぜでしょう。種子になる胚珠が、もともと子房の中に入っていたからです。', add: fresh(rect(60, 24, 200, 120, C.green, FILL.green), lb(160, 48, '実（もとは子房）', 13, C.green, 'middle', true), bx(115, 70, 90, 50, '種子\n（もとは胚珠）', C.main, FILL.warm, 11), ...m('実の中に種子が入っている', C.green, FILL.green)) },
  { note: '答え。実は子房、種子は胚珠が変化してできます。', add: m('実は子房、種子は胚珠', C.green, FILL.green) },
  { note: '確かめます。アブラナの花が終わると、めしべの根もとが細長いさやになり、中に種子ができます。さやが実、中の粒が種子です。', add: m('さや＝実、中の粒＝種子', C.green, FILL.green) },
], '答え：実は子房、種子は胚珠');

// c35 発芽の条件
const gRows = [
  ['A', '水あり', '空気あり', '25℃', '明るい', '発芽した'],
  ['B', '水なし', '空気あり', '25℃', '明るい', '発芽せず'],
  ['C', '水あり', '空気あり', '5℃', '明るい', '発芽せず'],
  ['D', '水あり', '空気なし', '25℃', '明るい', '発芽せず'],
  ['E', '水あり', '空気あり', '25℃', '暗い', '発芽した'],
];
const gX = [6, 34, 88, 142, 196, 250], gW = [24, 50, 50, 50, 50, 64];
const c35Table = (): DiagramElement[] => {
  const out: DiagramElement[] = ['', '水', '空気', '温度', '光', '結果'].map((t, i) => bx(gX[i], 6, gW[i], 18, t, C.gray, FILL.gray, 9));
  gRows.forEach((r, ri) => r.forEach((t, ci2) => out.push(bx(gX[ci2], 28 + ri * 27, gW[ci2], 24, t, ci2 === 5 ? (t === '発芽した' ? C.green : C.red) : C.gray, ci2 === 5 ? (t === '発芽した' ? FILL.green : FILL.red) : FILL.warm, 9))));
  return out;
};
const frame = (ri: number, color: string): DiagramElement => rect(3, 26 + ri * 27, 314, 28, color, 'none');
const c35 = show([
  { note: 'インゲンマメの種子を、A〜Eの5つの条件に置いて、発芽（はつが）するかどうかを調べました。', add: [...c35Table(), ...m('A〜Eの結果の表')] },
  { note: '❓「光が必要か」を調べるには、どれとどれを比べればよいでしょう。調べたい条件（光）だけがちがって、ほかはすべて同じものを選びます。', add: [frame(0, C.red), frame(4, C.red), ...m('光だけがちがう組を探す')] },
  { note: 'AとEを見ると、水（あり）、空気（あり）、温度（25℃）が同じで、光だけが「明るい」と「暗い」でちがいます。', add: m('(1) AとE', C.red, FILL.red) },
  { note: '❓AとEの結果は、どうなったでしょう。どちらも発芽しました。光がなくても発芽できたので、光は必要ありません。', add: m('(2) どちらも発芽→必要ない', C.green, FILL.green) },
  { note: '❓B・C・Dは、なぜ発芽しなかったのでしょう。Aと比べると、Bは水がなく、Cは温度が低く、Dは空気がありません。', add: [frame(1, C.blue), frame(2, C.blue), frame(3, C.blue), ...m('B水なし　C低温　D空気なし', C.blue, FILL.blue)] },
  { note: 'この実験から、発芽に必要なものは、水・空気・適当な温度の3つだとわかります。', add: fresh(bx(15, 40, 90, 50, '水', C.blue, FILL.blue, 18), bx(115, 40, 90, 50, '空気', C.green, FILL.green, 18), bx(215, 40, 90, 50, '適当な温度', C.red, FILL.red, 13), ...m('発芽の3つの条件')) },
  { note: '答え。(1) AとE、(2) 必要ない。なお、すべての種子が光不要とは限りません。この実験でいえるのは、インゲンマメの場合です。', add: m('(1) AとE　(2) 必要ない', C.green, FILL.green) },
], '答え：(1) AとE (2) 必要ない');

// c36 光合成と呼吸
const c36 = show([
  { note: '植物を密閉した容器に入れて、二酸化炭素の量の変化を調べます。暗い所では1時間で2mg増え、明るい所では1時間で3mg減りました。', add: [bx(15, 36, 140, 60, '暗い所\n1時間で\n2mg増えた', C.gray, FILL.gray, 12), bx(165, 36, 140, 60, '明るい所\n1時間で\n3mg減った', C.main, FILL.yellow, 12), ...m('二酸化炭素の出入り')] },
  { note: '❓暗い所では、何が起こっているのでしょう。光合成（こうごうせい）はできないので、呼吸だけです。呼吸で二酸化炭素を出しているので、増えます。呼吸で出す量は、1時間に2mgです。', add: [ar(85, 120, 85, 102, C.red), lb(85, 138, '呼吸で出す2mg', 11, C.red, 'middle', true), ...m('呼吸：1時間に2mg出す', C.red, FILL.red)] },
  { note: '❓明るい所では、光合成と呼吸が、同時に行われます。光合成で吸う量から、呼吸で出す量を引いた分が、見かけで3mg減った量です。', add: fresh(bx(10, 36, 90, 50, '光合成で\n使う ？mg', C.green, FILL.green, 11), lb(110, 66, '−', 18, C.ink, 'middle', true), bx(122, 36, 90, 50, '呼吸で\n出す 2mg', C.red, FILL.red, 11), lb(224, 66, '＝', 18, C.ink, 'middle', true), bx(236, 36, 74, 50, '見かけ\n3mg減', C.main, FILL.warm, 11), ...m('明るい所は呼吸もしている')) },
  { note: '(1) 光合成で使った量は、見かけの3mgに、呼吸で出した2mgを足して、3＋2＝5mgです。', add: [cover(8, 34, 92, 54), bx(10, 36, 90, 50, '光合成で\n使う 5mg', C.green, FILL.green, 11), ...m('(1) 3＋2＝5mg', C.green, FILL.green)] },
  { note: '(2) 1日のうち、明るい所8時間と、暗い所16時間です。❓まず、明るい8時間では、見かけで 3×8＝24mg吸収します。', add: fresh(bx(20, 36, 130, 50, '明るい8時間\n3×8＝24mg吸収', C.green, FILL.green, 12), bx(170, 36, 130, 50, '暗い16時間\n2×16＝32mg放出', C.red, FILL.red, 12), ...m('明るい所の呼吸は計算ずみ')) },
  { note: '❓暗い16時間では、呼吸だけなので、2×16＝32mg出します。差し引くと、出した32mgのほうが多いので、32−24＝8mg、二酸化炭素を出していることになります。', add: [lb(160, 118, '32−24＝8mg（放出が多い）', 13, C.red, 'middle', true), ...m('(2) 8mg出している', C.red, FILL.red)] },
  { note: '確かめます。1日全体で、光合成は 5×8＝40mg使い、呼吸は24時間×2mg＝48mg出します。48−40＝8mg出していて、一致します。', add: m('48−40＝8mgで一致', C.green, FILL.green) },
  { note: '答え。(1) 5mg、(2) 8mg出している。', add: m('(1) 5mg　(2) 8mg出している', C.green, FILL.green) },
], '答え：(1) 5mg (2) 8mg出している');

// c37 だ液のはたらき
const tubeX = [30, 130, 230];
const tubeBase = (): DiagramElement[] => tubeX.flatMap((x, i) => [
  bx(x, 28, 60, 26, [`A\nだ液・36℃`, `B\n水・36℃`, `C\nだ液・0℃`][i], C.gray, FILL.gray, 9),
  rect(x, 62, 60, 80, C.gray, FILL.yellow),
]);
const tubeCol = (i: number, fill: string, text: string): DiagramElement[] => [bx(tubeX[i] + 1, 63, 58, 78, text, C.gray, fill, 10)];
const PURPLE = '#C4B5FD';
const c37 = show([
  { note: 'デンプンの液を3本の試験管に入れます。A：だ液＋約36℃、B：水＋約36℃、C：だ液＋氷水（0℃）。15分置いたあと、ヨウ素液を加えます。', add: [...tubeBase(), ...m('A・B・Cにヨウ素液を加える')] },
  { note: '❓ヨウ素液は、何を調べる薬でしょう。デンプンがあると、青紫色になります。デンプンがなくなっていれば、色は変わりません。', add: fresh(bx(30, 40, 120, 50, 'デンプンあり', C.purple, PURPLE, 13), bx(170, 40, 120, 50, 'デンプンなし', C.gray, FILL.yellow, 13), lb(90, 110, '青紫色', 13, C.purple, 'middle', true), lb(230, 110, '色は変わらない', 12, C.gray, 'middle', true), ...m('青紫色＝デンプンが残っている')) },
  { note: 'A：だ液がデンプンを別のものに変えます。体温くらい（36℃）は、だ液がいちばんよくはたらく温度です。デンプンがなくなるので、青紫色になりません。', add: fresh(...tubeBase(), ...tubeCol(0, FILL.yellow, '色が\n変わらない'), ...m('A：デンプンが変わる', C.green, FILL.green)) },
  { note: 'B：だ液がなく、水だけです。デンプンはそのまま残るので、ヨウ素液で青紫色になります。', add: [...tubeCol(1, PURPLE, '青紫色'), ...m('B：デンプンが残る→青紫', C.purple, FILL.purple)] },
  { note: 'C：だ液はありますが、0℃ではだ液がほとんどはたらきません。デンプンが残って、青紫色になります。', add: [...tubeCol(2, PURPLE, '青紫色'), ...m('C：低温ではたらかない→青紫', C.purple, FILL.purple)] },
  { note: '答え。青紫色になるのは、BとCです。', add: m('答え BとC', C.green, FILL.green) },
  { note: '確かめます。AとBは、だ液の有無だけがちがうので、だ液がデンプンを変えるとわかります。AとCは、温度だけがちがうので、体温くらいの温度が必要だとわかります。', add: m('だ液と体温の2つが必要', C.green, FILL.green) },
], '答え：BとC');

// c38 血液の流れ
const hLabelCols = { low: C.blue, high: C.red };
const heartBase = (): DiagramElement[] => [
  bx(8, 60, 70, 60, '肺', C.gray, FILL.gray, 16), bx(125, 70, 70, 50, '心臓', C.red, FILL.red, 16), bx(242, 60, 70, 60, '全身', C.gray, FILL.gray, 16),
  lb(101, 72, '肺静脈', 11, C.gray, 'middle', true), lb(101, 128, '肺動脈', 11, C.gray, 'middle', true), lb(218, 72, '大動脈', 11, C.gray, 'middle', true), lb(218, 128, '大静脈', 11, C.gray, 'middle', true),
  ar(78, 82, 125, 82, C.gray, true), ar(125, 108, 78, 108, C.gray, true), ar(195, 82, 242, 82, C.gray, true), ar(242, 108, 195, 108, C.gray, true),
];
const c38 = show([
  { note: '血液は、心臓、肺、全身をめぐります。心臓につながる4つの血管は、大動脈（だいどうみゃく）・肺動脈（はいどうみゃく）・大静脈（だいじょうみゃく）・肺静脈（はいじょうみゃく）です。酸素を多くふくむ血液が流れるものを探します。', add: [...heartBase(), lb(160, 158, '赤＝酸素が多い　青＝酸素が少ない', 11, C.gray, 'middle'), ...m('4つの血管のうち、酸素が多いのは？')] },
  { note: '❓全身をまわってきた血液は、酸素を使ったあとなので、酸素が少ない血液です。大静脈を通って、心臓にもどります。', add: [ar(242, 108, 195, 108, hLabelCols.low), ...m('大静脈：酸素が少ない', C.blue, FILL.blue)] },
  { note: '心臓から肺へ送られる血液も、まだ酸素が少ない血液です。肺動脈を通ります。', add: [ar(125, 108, 78, 108, hLabelCols.low), ...m('肺動脈：酸素が少ない', C.blue, FILL.blue)] },
  { note: '❓肺では、何が起こるのでしょう。血液が酸素を受け取ります。酸素を多くふくんだ血液が、肺静脈を通って、心臓にもどります。', add: [ar(78, 82, 125, 82, hLabelCols.high), ...m('肺静脈：酸素が多い', C.red, FILL.red)] },
  { note: '心臓は、酸素が多い血液を、大動脈を通して、全身に送り出します。', add: [ar(195, 82, 242, 82, hLabelCols.high), ...m('大動脈：酸素が多い', C.red, FILL.red)] },
  { note: '答え。酸素を多くふくむのは、大動脈と肺静脈です。', add: m('答え 大動脈と肺静脈', C.green, FILL.green) },
  { note: '確かめます。「静脈は酸素が少ない」と覚えがちですが、肺静脈だけは例外です。動脈・静脈は、心臓から出るか入るかのちがいで、酸素の多少とは別です。', add: m('肺静脈は酸素が多い例外', C.green, FILL.green) },
], '答え：大動脈と肺静脈');

// c39 食物連鎖
const chain = (): DiagramElement[] => flow(['草', 'バッタ', 'カエル', 'ヘビ'], 50, { h: 40, size: 13, color: C.green, fill: FILL.green }).flat();
const c39 = show([
  { note: '「草→バッタ→カエル→ヘビ」という食べる・食べられるの関係です。矢印は、食べられるほうから、食べるほうへ向かいます。', add: [...chain(), lb(160, 30, '矢印＝食べられる→食べる', 11, C.gray, 'middle'), ...m('草→バッタ→カエル→ヘビ')] },
  { note: 'この野原で、カエルが急に増えました。しばらくの間に、バッタとヘビの数がどうなるかを考えます。', add: [ar(200, 118, 200, 98, C.red), lb(200, 134, 'カエルが増える', 11, C.red, 'middle', true), ...m('カエルが急に増えた', C.red, FILL.red)] },
  { note: '❓カエルは、何を食べるのでしょう。バッタです。カエルが増えると、食べられるバッタの数が増えるので、バッタは減ります。', add: [ar(120, 98, 120, 118, C.blue), lb(120, 134, 'バッタは減る', 11, C.blue, 'middle', true), ...m('バッタは食べられて減る', C.blue, FILL.blue)] },
  { note: '❓ヘビは、何を食べるのでしょう。カエルです。えさのカエルが増えるので、ヘビは増えます。', add: [ar(280, 118, 280, 98, C.red), lb(280, 134, 'ヘビは増える', 11, C.red, 'middle', true), ...m('ヘビはえさが増えて増える', C.red, FILL.red)] },
  { note: '答え。バッタは減り、ヘビは増えます。', add: m('バッタ減る・ヘビ増える', C.green, FILL.green) },
  { note: '確かめます。しばらくすると、バッタが減ってカエルのえさが足りなくなり、ヘビも増えるので、カエルは減ってもとにもどります。数は、つり合いをたもとうとします。', add: m('数はつり合いにもどる', C.green, FILL.green) },
  { note: '注意。増えた生き物の「えさ」は減り、その生き物を食べる「天敵」は増える、と覚えておきましょう。', add: m('えさは減り、天敵は増える', C.main, FILL.warm) },
], '答え：バッタは減り、ヘビは増える');

// c40 こん虫のからだ
const insect = (): DiagramElement[] => [
  ln(158, 82, 140, 118, C.ink, false, 2), ln(166, 84, 166, 122, C.ink, false, 2), ln(174, 82, 192, 118, C.ink, false, 2),
  ci(120, 70, 16, '頭', C.main, FILL.warm, 12), ci(166, 70, 20, '胸', C.main, FILL.yellow, 12), ci(220, 70, 26, '腹', C.main, FILL.warm, 12),
];
const c40 = show([
  { note: '次の4つの生き物のうち、こん虫でないものを探します。アリ、カブトムシ、ダンゴムシ、セミです。', add: [bx(10, 40, 70, 40, 'アリ', C.gray, FILL.gray, 14), bx(87, 40, 70, 40, 'カブト\nムシ', C.gray, FILL.gray, 12), bx(164, 40, 70, 40, 'ダンゴ\nムシ', C.gray, FILL.gray, 12), bx(241, 40, 70, 40, 'セミ', C.gray, FILL.gray, 14), ...m('こん虫でないものはどれ')] },
  { note: '❓こん虫のからだは、どうなっているのでしょう。頭・胸・腹の3つの部分に分かれています。', add: fresh(...insect(), ...m('からだは頭・胸・腹の3つ')) },
  { note: '❓あしは、何本で、どこについているのでしょう。6本で、すべて胸についています（左右3本ずつ）。', add: [lb(166, 150, 'あしは6本、胸につく', 12, C.red, 'middle', true), ...m('あしは6本（胸に3対）', C.red, FILL.red)] },
  { note: 'アリ・カブトムシ・セミは、どれも、あしが6本で、こん虫の条件に当てはまります。', add: fresh(bx(10, 40, 70, 40, 'アリ\n6本', C.green, FILL.green, 12), bx(87, 40, 70, 40, 'カブト\nムシ6本', C.green, FILL.green, 11), bx(241, 40, 70, 40, 'セミ\n6本', C.green, FILL.green, 12), bx(164, 40, 70, 40, 'ダンゴ\nムシ？', C.gray, FILL.gray, 12), ...m('アリ・カブトムシ・セミは6本')) },
  { note: 'ダンゴムシは、あしが14本あります。6本ではないので、こん虫ではありません。エビやカニと同じ、甲殻類（こうかくるい）のなかまです。', add: [cover(162, 38, 74, 44), bx(164, 40, 70, 40, 'ダンゴ\nムシ14本', C.red, FILL.red, 11), ...m('ダンゴムシはあし14本', C.red, FILL.red)] },
  { note: '答え。こん虫でないのは、ダンゴムシです。', add: m('答え ダンゴムシ', C.green, FILL.green) },
  { note: '確かめます。クモ（あし8本）も、こん虫ではありません。小さくても、あしの数や体のつくりがちがえば、こん虫ではありません。', add: m('クモ（8本）もこん虫でない', C.green, FILL.green) },
], '答え：ダンゴムシ');

// c41 メダカ
const fish = (y: number, male: boolean): DiagramElement[] => [
  pg([[60, y], [100, y - 14], [150, y - 10], [200, y], [150, y + 10], [100, y + 14]], C.gray, '#E2E8F0'),
  ...(male ? [pg([[120, y - 12], [130, y - 28], [137, y - 12]], C.blue, '#BFDBFE'), pg([[142, y - 10], [150, y - 28], [158, y - 10]], C.blue, '#BFDBFE'), pg([[96, y + 13], [150, y + 10], [160, y + 30], [108, y + 30]], C.red, FILL.red)]
    : [pg([[125, y - 12], [140, y - 26], [150, y - 10]], C.blue, '#BFDBFE'), pg([[104, y + 13], [140, y + 10], [136, y + 22]], C.red, FILL.red)]),
  pg([[200, y], [226, y - 12], [226, y + 12]], C.gray, '#E2E8F0'), disc(78, y - 3, 3, C.ink, C.ink),
];
const c41 = show([
  { note: 'メダカのおすとめすです。上がおす、下がめすです。せびれとしりびれの形を見くらべます。', add: [...fish(50, true), ...fish(124, false), lb(250, 54, 'おす', 13, C.ink, 'start', true), lb(250, 128, 'めす', 13, C.ink, 'start', true), ...m('せびれ・しりびれをくらべる')] },
  { note: '❓せびれは、どうちがうでしょう。おすは切れこみがあり、めすは切れこみがありません。', add: [lb(250, 70, '切れこみ', 10, C.blue, 'start', true), lb(250, 142, '切れこみなし', 10, C.blue, 'start', true), ...m('せびれ：おすに切れこみ', C.blue, FILL.blue)] },
  { note: '❓しりびれは、どうちがうでしょう。おすは大きく、平行四辺形に近い形です。めすは小さく、三角形に近い形です。', add: [lb(250, 88, '大きい', 10, C.red, 'start', true), lb(250, 160, '小さい', 10, C.red, 'start', true), ...m('しりびれ：おすは大きい', C.red, FILL.red)] },
  { note: '(1) おすは、せびれに切れこみがあり、しりびれが大きい。ア。', add: m('(1) ア', C.green, FILL.green) },
  { note: '(2) 生まれたばかりのメダカの子を見てみましょう。おなかに、養分の入った袋があります。', add: fresh(pg([[60, 80], [100, 68], [150, 72], [190, 84], [150, 96], [100, 94]], C.gray, '#E2E8F0'), disc(110, 104, 14, C.main, FILL.yellow), pg([[190, 84], [212, 74], [212, 94]], C.gray, '#E2E8F0'), disc(74, 80, 3, C.ink, C.ink), lb(110, 140, 'はらのふくろ', 12, C.main, 'middle', true), ...m('おなかの袋に養分がある')) },
  { note: '❓なぜ、えさを食べなくても生きていられるのでしょう。この袋の中の養分を使って育つからです。袋が小さくなったころから、えさを食べはじめます。', add: m('袋の養分で2〜3日育つ', C.main, FILL.warm) },
  { note: '答え。(1) ア、(2) はらのふくろの中の養分を使っているから。', add: m('(1) ア　(2) はらのふくろ', C.green, FILL.green) },
], '答え：(1) ア (2) はらのふくろの養分');

// c42 茎の断面
const ring = (cx: number, cy: number, r: number, n: number): DiagramElement[] => Array.from({ length: n }, (_, i) => disc(cx + r * Math.cos((i / n) * 2 * Math.PI), cy + r * Math.sin((i / n) * 2 * Math.PI), 5, C.red, '#FB7185'));
const scatter = (cx: number, cy: number): DiagramElement[] => [[-22, -18], [8, -30], [28, -8], [-4, -6], [-30, 10], [14, 14], [-12, 28], [30, 26], [-34, -4]].map(([dx, dy]) => disc(cx + dx, cy + dy, 5, C.red, '#FB7185'));
const c42 = show([
  { note: 'ホウセンカ（子葉が2枚の植物）の根を、赤い色水にさして、しばらく置きます。そのあと、茎を輪切りにして、断面を見ます。', add: [rect(120, 100, 80, 50, C.red, '#FECACA'), ln(160, 40, 160, 120, C.green, false, 8), lb(160, 30, '茎', 11, C.green, 'middle', true), ...m('赤い水を吸わせる')] },
  { note: '❓水は、茎のどこを通るのでしょう。「道管（どうかん）」という管を通ります。赤い水が通った道管が、赤く染まります。', add: [lb(210, 70, '道管が', 11, C.red, 'start', true), lb(210, 84, '赤く染まる', 11, C.red, 'start', true), ...m('水の通り道＝道管')] },
  { note: '茎を輪切りにした断面です。道管は、師管（しかん）と束になって、維管束（いかんそく）をつくっています。', add: fresh(disc(160, 85, 52, C.green, FILL.green), lb(160, 24, '輪切りの断面', 12, C.green, 'middle', true), ...m('道管と師管の束＝維管束')) },
  { note: '❓ホウセンカの茎では、赤い点はどう見えるでしょう。茎の外側に近いところに、輪のようにならんで見えます。', add: [...ring(160, 85, 34, 8), ...m('輪のようにならぶ', C.red, FILL.red)] },
  { note: '比べてみます。子葉が1枚のトウモロコシの茎では、赤い点は、断面の全体にばらばらに散らばって見えます。', add: fresh(disc(80, 85, 52, C.green, FILL.green), ...ring(80, 85, 34, 8), disc(240, 85, 52, C.green, FILL.green), ...scatter(240, 85), lb(80, 30, 'ホウセンカ', 11, C.ink, 'middle', true), lb(240, 30, 'トウモロコシ', 11, C.ink, 'middle', true), lb(80, 160, '輪にならぶ', 11, C.red, 'middle', true), lb(240, 160, 'ばらばら', 11, C.red, 'middle', true), ...m('子葉2枚＝輪、子葉1枚＝ばらばら')) },
  { note: '答え。茎の外側に近いところに、輪のようにならんだ点として見えます。', add: m('答え 輪のようにならんだ点', C.green, FILL.green) },
  { note: '確かめます。赤く染まるのは水の通り道の道管だけで、茎の中心や全体ではありません。', add: m('染まるのは道管だけ', C.green, FILL.green) },
], '答え：輪のようにならんだ点');

// ═════════ 地学 ═════════

// c43 影の向き
const compass = (): DiagramElement[] => [
  ln(60, 85, 260, 85, C.gray, true), ln(160, 40, 160, 135, C.gray, true),
  lb(160, 32, '北', 13, C.ink, 'middle', true), lb(160, 152, '南', 13, C.ink, 'middle', true), lb(272, 90, '東', 13, C.ink, 'start', true), lb(48, 90, '西', 13, C.ink, 'end', true),
  disc(160, 85, 4, C.ink, C.ink),
];
const c43 = show([
  { note: '午後、太陽が南西の空に見えています。地面に立てた棒（中心の点）の影が、どの向きにのびるかを考えます。', add: [...compass(), ci(112, 125, 12, '日', C.main, FILL.yellow, 11), ...m('太陽は南西にある')] },
  { note: '❓影は、太陽の光がさえぎられてできます。光が当たらない側は、どちらでしょう。太陽と反対の側です。', add: [ln(122, 117, 158, 87, C.main, true), ...m('影は太陽と反対側にできる')] },
  { note: '❓南西の反対は、どちらでしょう。南の反対は北、西の反対は東なので、南西の反対は北東です。', add: [lb(78, 140, '南西', 11, C.main, 'middle', true), lb(244, 40, '北東', 11, C.red, 'middle', true), ...m('南西の反対は北東', C.red, FILL.red)] },
  { note: '影は、棒から北東の向きにのびます。', add: [ar(162, 83, 214, 48, C.red), ...m('影は北東の向き', C.red, FILL.red)] },
  { note: '答え。北東です。', add: m('答え 北東', C.green, FILL.green) },
  { note: '確かめます。正午、太陽が真南にあるとき、影は真北にのびます。午後、太陽が南から西にまわると、影は北から東へまわります。南西の太陽なら、北東の影になるのは自然な流れです。', add: fresh(...compass(), ci(160, 128, 12, '日', C.main, FILL.yellow, 11), ar(160, 83, 160, 45, C.blue), lb(205, 62, '正午は北', 11, C.blue, 'start', true), ...m('正午：太陽は南、影は北', C.blue, FILL.blue)) },
  { note: '1日のうちの影の動きです。午前は西〜北西、正午は北、午後は北東〜東と、影は西から北を通って東へ動きます。', add: fresh(...compass(), ar(158, 83, 112, 52, C.main), lb(100, 46, '午前', 10, C.main, 'end', true), ar(160, 83, 160, 48, C.blue), lb(172, 50, '正午', 10, C.blue, 'start', true), ar(162, 83, 206, 52, C.red), lb(212, 46, '午後', 10, C.red, 'start', true), ...m('影は西→北→東と動く')) },
], '答え：北東');

// c44 南中高度
const ground = (): DiagramElement[] => [ln(30, 130, 290, 130, C.ink, false, 3), disc(160, 124, 5, C.ink, C.ink), lb(28, 150, '北', 12, C.gray, 'start', true), lb(290, 150, '南', 12, C.gray, 'end', true), lb(160, 150, '観測する人', 10, C.gray, 'middle')];
const c44 = show([
  { note: '北緯35度の地点です。春分（しゅんぶん）の日と冬至（とうじ）の日の正午（太陽が真南にきたとき）の、太陽の高さ（南中高度＝なんちゅうこうど）を求めます。', add: [...ground(), ...m('北緯35度、太陽は南の空')] },
  { note: '❓赤道（緯度0度）では、春分の日の正午、太陽はほぼ真上（90度）に見えます。北へ1度行くごとに、南中高度は1度ずつ低くなります。', add: m('春分：南中高度＝90−緯度') },
  { note: '(1) 春分の日の南中高度は、90−35＝55度です。', add: [ci(223, 40, 10, '日', C.main, FILL.yellow, 11), ar(216, 47, 166, 118, C.main), lb(196, 122, '55°', 11, C.red, 'middle', true), ...m('(1) 90−35＝55度', C.red, FILL.red)] },
  { note: '❓冬至は、どうなるでしょう。冬は北半球が太陽と反対がわにかたむくので、太陽が低くなります。春分の日より、地軸のかたむき23.4度ぶん低くなります。', add: [ci(254, 72, 10, '日', C.blue, '#BFDBFE', 11), ar(247, 78, 166, 120, C.blue, true), lb(230, 126, '？', 12, C.blue, 'middle', true), ...m('冬至：23.4度ぶん低くなる', C.blue, FILL.blue)] },
  { note: '(2) 冬至の南中高度は、55−23.4＝31.6度です。', add: [cover(220, 112, 22, 16), lb(238, 125, '31.6°', 11, C.blue, 'middle', true), ...m('(2) 55−23.4＝31.6度', C.blue, FILL.blue)] },
  { note: '参考に、夏至は 55＋23.4＝78.4度になります。夏至、春分、冬至の順に、太陽は低くなります。', add: m('夏至 55＋23.4＝78.4度', C.main, FILL.warm) },
  { note: '確かめます。夏至と冬至の差は 78.4−31.6＝46.8度。これは地軸のかたむき23.4度の2倍で、夏と冬で上下に同じだけ変わっていることと合っています。', add: m('46.8＝23.4×2で一致', C.green, FILL.green) },
  { note: '答え。(1) 55度、(2) 31.6度です。', add: m('(1) 55度　(2) 31.6度', C.green, FILL.green) },
], '答え：(1) 55度 (2) 31.6度');

// c45 北の空の星
const c45 = show([
  { note: '北緯35度の地点で、北の空を見ます。北極星（ほっきょくせい）は、北の地平線から、どれくらいの高さに見えるでしょう。', add: [ln(40, 140, 280, 140, C.ink, false, 3), disc(262, 134, 5, C.ink, C.ink), lb(40, 158, '北の地平線', 11, C.gray, 'start'), ci(162, 71, 9, '★', C.main, FILL.yellow, 10), lb(162, 52, '北極星', 11, C.main, 'middle', true), ...m('北極星の高さは？')] },
  { note: '❓北極星の高さは、何で決まるのでしょう。その場所の緯度と同じです。北緯35度なら、35度です。', add: [ln(262, 134, 168, 76, C.main, true), lb(214, 130, '35°', 11, C.red, 'middle', true), ...m('(1) 北極星の高さ＝緯度＝35度', C.red, FILL.red)] },
  { note: '(2) 北の空の星の動きです。星は、北極星を中心に、まわって見えます。午後8時、カシオペヤ座が北極星の真上にありました。', add: fresh(disc(160, 95, 55, C.gray, '#F8FAFC'), disc(160, 95, 4, C.main, C.main), lb(172, 100, '北極星', 10, C.main, 'start', true), ci(160, 45, 12, '8時', C.blue, '#BFDBFE', 9), ...m('午後8時：真上にある')) },
  { note: '❓星は、1時間にどれだけまわるのでしょう。1日（24時間）で1周（360度）なので、360÷24＝15度です。', add: m('1時間に 360÷24＝15度', C.blue, FILL.blue) },
  { note: '午後8時から11時までは3時間。15×3＝45度まわります。', add: [ln(160, 95, 160, 45, C.gray, true), ln(160, 95, 125, 60, C.gray, true), ci(125, 60, 12, '11時', C.red, FILL.red, 9), lb(140, 118, '45°', 11, C.red, 'middle', true), ...m('15×3＝45度', C.red, FILL.red)] },
  { note: '❓まわる向きは、どちらでしょう。北の空の星は、反時計まわりにまわって見えます。真上にあった星は、左がわへ動きます。', add: [ar(150, 36, 134, 44, C.red), ...m('(2) 反時計まわりに45度', C.red, FILL.red)] },
  { note: '確かめます。1周360度の45度は8分の1。24時間の8分の1は3時間で、問題の3時間と一致します。', add: m('24÷8＝3時間で一致', C.green, FILL.green) },
  { note: '答え。(1) 35度、(2) 反時計まわりに45度。', add: m('(1) 35度　(2) 反時計まわりに45度', C.green, FILL.green) },
], '答え：(1) 35度 (2) 反時計回りに45度');

// c46 月食
const c46Base = (): DiagramElement[] => [ci(40, 85, 26, '太陽', C.main, FILL.yellow, 11), ci(150, 85, 18, '地球', C.blue, '#BFDBFE', 10)];
const shadow = (): DiagramElement => pg([[168, 70], [305, 76], [305, 94], [168, 100]], C.gray, '#CBD5E1');
const c46 = show([
  { note: '月食（げっしょく）とは、月が欠けて見える現象です。月食が起こるとき、月の形と、太陽・地球・月のならびを考えます。', add: [...c46Base(), ...m('太陽と地球')] },
  { note: '❓なぜ、月が欠けるのでしょう。月は太陽の光を反射して光っています。地球のかげに入ると、光が当たらなくなるからです。', add: [shadow(), lb(240, 128, '地球のかげ', 11, C.gray, 'middle', true), ...m('月が地球のかげに入る')] },
  { note: '❓月がかげに入るには、どの順にならべばよいでしょう。太陽の反対側に、月がなければなりません。太陽・地球・月の順です。', add: [ci(250, 85, 13, '月', C.gray, FILL.gray, 11), ...m('太陽・地球・月の順', C.blue, FILL.blue)] },
  { note: '❓このとき、月はどんな形でしょう。太陽の反対側にある月は、ふだんは太陽の光が全面に当たる満月の位置です。月食は、満月のときに起こります。', add: [lb(250, 62, '満月の位置', 11, C.red, 'middle', true), ...m('月食は満月のとき', C.red, FILL.red)] },
  { note: '比べてみます。日食（にっしょく）は、太陽・月・地球の順にならんで、月が太陽をかくします。このとき月は新月です。', add: fresh(ci(40, 85, 26, '太陽', C.main, FILL.yellow, 11), ci(150, 85, 13, '月', C.gray, FILL.gray, 11), ci(250, 85, 18, '地球', C.blue, '#BFDBFE', 10), lb(160, 150, '日食：新月のとき', 12, C.purple, 'middle', true), ...m('日食：太陽・月・地球（新月）', C.purple, FILL.purple)) },
  { note: '答え。月食は、満月のときに、太陽・地球・月の順に一直線にならぶときに起こります。', add: m('満月・太陽→地球→月', C.green, FILL.green) },
  { note: '確かめます。月食は月が欠ける現象、日食は太陽が欠ける現象。月食は満月、日食は新月と、月の形もならび方も逆になっています。', add: m('月食＝満月　日食＝新月', C.green, FILL.green) },
], '答え：満月のとき、太陽・地球・月の順');

// c47 湿度と水滴
const satTable = (hi: number[] = []): DiagramElement[] => [[5, 7], [10, 9], [15, 13], [20, 17], [25, 23]].map(([t, g], i) => bx(6 + i * 62, 36, 58, 46, `${t}℃\n${g}g`, hi.includes(i) ? C.red : C.gray, hi.includes(i) ? FILL.red : FILL.warm, 12));
const c47 = show([
  { note: '空気1m³にふくめる水蒸気の最大の量（飽和水蒸気量＝ほうわすいじょうきりょう）の表です。気温20℃、湿度50％の空気1m³を考えます。', add: [...satTable(), ...m('飽和水蒸気量（1m³あたり）')] },
  { note: '❓湿度（しつど）とは、何でしょう。ふくまれている水蒸気の量が、飽和水蒸気量の何％にあたるかです。湿度＝水蒸気の量÷飽和水蒸気量×100です。', add: m('湿度＝水蒸気量÷飽和量×100') },
  { note: '(1) 20℃の飽和水蒸気量は17g。湿度50％なので、ふくまれている水蒸気は、その半分です。17×0.50＝8.5gです。', add: fresh(rect(30, 40, 260, 36, C.blue, '#FFFFFF'), bx(30, 40, 130, 36, '8.5g', C.blue, '#BFDBFE', 14), lb(160, 100, '20℃の最大 17g の50％', 12, C.ink, 'middle', true), ...m('(1) 17×0.50＝8.5g', C.blue, FILL.blue)) },
  { note: '❓この空気を冷やすと、どうなるでしょう。水蒸気の量は8.5gのままですが、飽和水蒸気量が小さくなっていきます。10℃では9gなので、まだ8.5gをふくめます。5℃では7gなので、ふくみきれなくなります。', add: fresh(...satTable([1, 0]), lb(160, 108, '水蒸気は8.5gのまま', 12, C.ink, 'middle', true), lb(160, 128, '10℃：9g＞8.5g　まだ大丈夫', 11, C.green, 'middle', true), lb(160, 146, '5℃：7g＜8.5g　あふれる', 11, C.red, 'middle', true), ...m('5℃でふくみきれなくなる')) },
  { note: '(2) 5℃では、7gまでしか水蒸気としてふくめません。8.5gのうち、7gは水蒸気のまま。', add: fresh(bx(30, 40, 98, 36, '7g（水蒸気）', C.blue, '#BFDBFE', 12), rect(128, 40, 21, 36, C.red, FILL.red), lb(160, 100, '5℃の最大は7g', 12, C.ink, 'middle', true), ...m('のこせる量は7g')) },
  { note: 'あふれた 8.5−7＝1.5gが、水滴になって出てきます。', add: [lb(188, 62, '← 水滴1.5g', 12, C.red, 'start', true), ...m('(2) 8.5−7＝1.5g', C.red, FILL.red)] },
  { note: '確かめます。露点（ろてん）は、8.5gがちょうど飽和水蒸気量になる温度で、表の5℃（7g）と10℃（9g）のあいだです。5℃は露点より低いので、水滴が出ます。', add: m('露点は5℃と10℃の間', C.green, FILL.green) },
  { note: '答え。(1) 8.5g、(2) 1.5gです。', add: m('(1) 8.5g　(2) 1.5g', C.green, FILL.green) },
], '答え：(1) 8.5g (2) 1.5g');

// c48 川の曲がりと石
const arcPts = (R: number, from: number, to: number, n = 14): [number, number][] =>
  Array.from({ length: n + 1 }, (_, i) => { const t = from + ((to - from) * i) / n; return [160 + R * Math.cos(t), 168 - R * Math.sin(t)] as [number, number]; });
const riverShape = (): DiagramElement => pg([...arcPts(100, Math.PI, 0), ...arcPts(58, 0, Math.PI)], C.blue, '#BAE6FD');
const c48 = show([
  { note: '曲がって流れる川を、上から見たところです。川は、左から右へ、上に張り出すように曲がっています。', add: [riverShape(), lb(160, 52, '曲がりの外側', 11, C.ink, 'middle', true), lb(160, 138, '曲がりの内側', 11, C.ink, 'middle', true), ...m('曲がる川のようす')] },
  { note: '❓水は、外側と内側で、どちらが速く流れるでしょう。外側のほうが、流れが速く、強くなります。', add: [ar(138, 73, 182, 73, C.red), lb(160, 84, '速い', 10, C.red, 'middle', true), ar(142, 94, 178, 94, C.blue), lb(160, 106, 'ゆっくり', 10, C.blue, 'middle', true), ...m('外側は速く、内側はゆっくり')] },
  { note: '(1) 流れの速い外側では、岸がけずられて、がけができます。', add: [pg([[64, 168], [72, 120], [96, 90], [128, 72], [128, 62], [88, 80], [56, 118], [48, 168]], C.red, FILL.red), ...m('(1) 外側にがけができる', C.red, FILL.red)] },
  { note: '流れのゆるやかな内側では、石や砂が積もって、川原ができます。', add: [pg([[112, 168], [118, 140], [140, 124], [180, 124], [202, 140], [208, 168]], C.main, FILL.yellow), ...m('内側には川原ができる', C.main, FILL.warm)] },
  { note: '(2) 川の石を見ます。❓上流では、どんな石でしょう。大きくて、角ばった石です。', add: fresh(bx(20, 40, 130, 50, '上流の石\n大きくて角ばる', C.gray, FILL.gray, 12), ...m('上流は大きくて角ばる')) },
  { note: '❓下流へ流されるあいだに、石はどうなるのでしょう。ほかの石とぶつかり合って、角がとれ、小さくなります。', add: [ar(154, 65, 176, 65, C.gray), bx(180, 40, 130, 50, '下流の石\n小さくて丸い', C.green, FILL.green, 12), ...m('(2) 小さくて丸い（エ）', C.green, FILL.green)] },
  { note: '答え。(1) 外側、(2) エ（小さくて丸い）。確かめ：河口に近い川原では、小さくて丸い石や砂が見られます。', add: m('(1) 外側　(2) エ', C.green, FILL.green) },
], '答え：(1) 外側 (2) エ');

// c49 地震の波
const c49 = show([
  { note: '震源（しんげん）から、2種類の波が出ます。はじめに伝わる波は秒速8kmで、はじめの小さなゆれ（初期微動＝しょきびどう）。あとから伝わる波は秒速4kmで、大きなゆれ（主要動＝しゅようどう）です。', add: [ci(30, 80, 14, '震源', C.red, FILL.red, 9), ci(290, 80, 14, '地点', C.blue, FILL.blue, 9), ln(46, 80, 274, 80, C.gray, true), lb(160, 70, '？km', 12, C.gray, 'middle', true), ...m('初期微動から主要動まで15秒')] },
  { note: '❓2つの波は、同じ距離を進むのに、かかる時間がちがいます。はじめの波（秒速8km）のほうが、速くて先に着きます。', add: [ar(46, 100, 270, 100, C.red), lb(160, 118, '速い波 秒速8km', 11, C.red, 'middle', true), ar(46, 128, 158, 128, C.blue), lb(160, 146, '遅い波 秒速4km', 11, C.blue, 'middle', true), ...m('速い波が先に着く')] },
  { note: '❓まず、1km進むのにかかる時間を求めます。速い波は 1÷8＝0.125秒、遅い波は 1÷4＝0.25秒。差は、0.25−0.125＝0.125秒です。', add: fresh(bx(15, 36, 135, 50, '速い波\n1÷8＝0.125秒', C.red, FILL.red, 12), bx(170, 36, 135, 50, '遅い波\n1÷4＝0.25秒', C.blue, FILL.blue, 12), lb(160, 118, '1kmで 0.125秒の差', 13, C.purple, 'middle', true), ...m('差は1kmにつき0.125秒')) },
  { note: '(1) 差が15秒になる距離は、15÷0.125＝120kmです。', add: m('(1) 15÷0.125＝120km', C.green, FILL.green) },
  { note: '時間の流れで見ます。地震が起こった時刻から、速い波が着くまでが「？秒」、遅い波が着くまでが「？秒」です。', add: fresh(ln(30, 70, 290, 70, C.gray, false, 2), lb(30, 56, '地震発生', 11, C.red, 'start', true), bx(30, 90, 130, 30, '速い波が着く', C.red, FILL.red, 11), bx(30, 130, 250, 30, '遅い波が着く', C.blue, FILL.blue, 11), ...m('(2) 速い波が着くまでの時間')) },
  { note: '(2) 速い波が120km進む時間は、120÷8＝15秒です。', add: [lb(168, 112, '15秒', 12, C.red, 'start', true), ...m('(2) 120÷8＝15秒', C.red, FILL.red)] },
  { note: '確かめます。遅い波が120km進む時間は 120÷4＝30秒。30−15＝15秒で、問題の初期微動継続時間と一致します。', add: m('30−15＝15秒で一致', C.green, FILL.green) },
  { note: '答え。(1) 120km、(2) 15秒です。', add: m('(1) 120km　(2) 15秒', C.green, FILL.green) },
], '答え：(1) 120km (2) 15秒');

// c50 地層のでき方
const layers = (): DiagramElement[] => [bx(90, 40, 140, 30, '泥岩', C.gray, '#E5E7EB', 13), bx(90, 70, 140, 30, '砂岩', C.main, FILL.yellow, 13), bx(90, 100, 140, 30, 'れき岩', C.red, FILL.red, 13)];
const c50 = show([
  { note: 'がけの地層は、下から、れき岩・砂岩（さがん）・泥岩（でいがん）の順に重なっていました。粒の大きさは、れき、砂、泥の順に小さくなります。', add: [...layers(), ...m('下から れき岩・砂岩・泥岩')] },
  { note: '❓川が運んできた土砂は、海に出ると、どう積もるのでしょう。粒の大きいものほど、早く沈みます。', add: fresh(bx(10, 60, 100, 50, '海岸に近い\nれき（大）', C.red, FILL.red, 12), bx(110, 60, 100, 50, '少し沖\n砂（中）', C.main, FILL.yellow, 12), bx(210, 60, 100, 50, '沖・深い所\n泥（小）', C.gray, '#E5E7EB', 12), ...m('大きい粒ほど岸の近くに積もる')) },
  { note: '❓地層は、新しいものと古いものが、どう重なるのでしょう。下から順に積み重なるので、下が古く、上が新しい層です。', add: fresh(...layers(), ar(260, 125, 260, 45, C.blue), lb(262, 36, '新しい', 11, C.blue, 'middle', true), lb(262, 150, '古い', 11, C.blue, 'middle', true), ...m('下が古く、上が新しい')) },
  { note: '(1) 下から、れき→砂→泥と、粒がだんだん小さくなっています。岸の近くから、沖（深い所）の積もり方へ変わったので、この場所は、海岸から遠ざかっていきました。海が深くなっていったということです。', add: [lb(140, 150, 'れき→砂→泥：岸から遠ざかる', 12, C.red, 'middle', true), ...m('(1) 海岸から遠ざかった', C.red, FILL.red)] },
  { note: '(2) いちばん新しい層は、いちばん上の層です。', add: [rect(88, 38, 144, 34, C.green, 'none'), ...m('(2) いちばん上の泥岩', C.green, FILL.green)] },
  { note: '答え。(1) 遠ざかっていった（海が深くなっていった）、(2) 泥岩。', add: m('(1) 遠ざかった　(2) 泥岩', C.green, FILL.green) },
  { note: '確かめます。もし下から泥岩→砂岩→れき岩と重なっていたら、岸に近づいた（海が浅くなった）ことになります。粒の大きさの順が逆なら、結論も逆になります。', add: m('順が逆なら結論も逆', C.green, FILL.green) },
], '答え：(1) 遠ざかった (2) 泥岩');

export const figuresMoshi202703RikaChugaku2: Record<string, Figure> = {
  moshi_2027_03_rika_c11: c11,
  moshi_2027_03_rika_c12: c12,
  moshi_2027_03_rika_c13: c13,
  moshi_2027_03_rika_c14: c14,
  moshi_2027_03_rika_c15: c15,
  moshi_2027_03_rika_c16: c16,
  moshi_2027_03_rika_c17: c17,
  moshi_2027_03_rika_c18: c18,
  moshi_2027_03_rika_c19: c19,
  moshi_2027_03_rika_c20: c20,
  moshi_2027_03_rika_c21: c21,
  moshi_2027_03_rika_c22: c22,
  moshi_2027_03_rika_c23: c23,
  moshi_2027_03_rika_c24: c24,
  moshi_2027_03_rika_c25: c25,
  moshi_2027_03_rika_c26: c26,
  moshi_2027_03_rika_c27: c27,
  moshi_2027_03_rika_c28: c28,
  moshi_2027_03_rika_c29: c29,
  moshi_2027_03_rika_c30: c30,
  moshi_2027_03_rika_c31: c31,
  moshi_2027_03_rika_c32: c32,
  moshi_2027_03_rika_c33: c33,
  moshi_2027_03_rika_c34: c34,
  moshi_2027_03_rika_c35: c35,
  moshi_2027_03_rika_c36: c36,
  moshi_2027_03_rika_c37: c37,
  moshi_2027_03_rika_c38: c38,
  moshi_2027_03_rika_c39: c39,
  moshi_2027_03_rika_c40: c40,
  moshi_2027_03_rika_c41: c41,
  moshi_2027_03_rika_c42: c42,
  moshi_2027_03_rika_c43: c43,
  moshi_2027_03_rika_c44: c44,
  moshi_2027_03_rika_c45: c45,
  moshi_2027_03_rika_c46: c46,
  moshi_2027_03_rika_c47: c47,
  moshi_2027_03_rika_c48: c48,
  moshi_2027_03_rika_c49: c49,
  moshi_2027_03_rika_c50: c50,
};
