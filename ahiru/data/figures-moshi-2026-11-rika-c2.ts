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
  { note: '浮力は60g。❓浮力はおしのけた水の重さなので、60gの水をおしのけているはずです。水1cm³は1gなので、60cm³の水です。', add: [bx(130, 85, 60, 30, '水中60cm³', C.blue, '#BFDBFE', 10), ...m('浮力60g＝水60cm³ぶん', C.blue, FILL.blue)] },
  { note: '(1) 木片が水の中におしのけた水は60cm³。つまり、水面より下にしずんでいる部分の体積は、60cm³です。', add: m('(1) しずんだ体積60cm³', C.green, FILL.green) },
  { note: '(2) 木片の上におもりをのせて、木片を全部しずませます。❓全部しずむとき、浮力はいくつになるのでしょう。体積100cm³ぶんの水の重さ、100gが最大です。', add: fresh(bx(80, 68, 160, 87, ' ', C.blue, '#FFFFFF'), bx(81, 68, 158, 86, undefined, '#BAE6FD', '#BAE6FD'), bx(130, 70, 60, 50, '木片\n60g', C.main, FILL.warm, 11), wt(160, 38, '□g'), ...m('全部しずむと浮力は100g')) },
  { note: '❓木片だけでは足りません。木片60gと、おもり□gの合計が、浮力の100gとつり合えばよいので、60＋□＝100です。', add: m('60＋□＝100', C.red, FILL.red) },
  { note: '□＝100−60＝40g。おもりは40gです。', add: [cover(138, 36, 44, 30), wt(160, 38, '40g', C.green, FILL.green), ...m('□＝100−60＝40g', C.green, FILL.green)] },
  { note: '確かめます。水の上に出ていた部分は 100−60＝40cm³。それを水の中におし下げるには、40gぶんの浮力が必要で、おもり40gと一致します。', add: m('出ていた40cm³＝おもり40g', C.green, FILL.green) },
], '答え：(1) 60cm³ (2) 40g');

// c16 鏡の反射
const mirror = (): DiagramElement[] => [ln(50, 130, 270, 130, C.ink, false, 5), lb(285, 134, '鏡', 12, C.gray, 'middle', true)];
const c16 = show([
  { note: '平面鏡に光の線を当てます。光は、鏡の面と40度の角をつくって鏡に当たります。', add: [...mirror(), ar(83, 66, 158, 128, C.red), lb(70, 58, '入ってくる光', 11, C.red, 'start', true), ...m('鏡の面と光の角は40度')] },
  { note: '❓入射角は、どこから測る角でしょう。鏡の面ではなく、鏡の面に垂直な線（点線）から測ります。', add: [ln(160, 130, 160, 40, C.gray, true), lb(168, 48, '垂直な線', 10, C.gray, 'start'), ...m('角は垂直な線から測る')] },
  { note: '❓鏡の面と垂直な線のなす角は、何度でしょう。90度です。このうち40度は、光と鏡の面のあいだの角です。', add: [lb(105, 124, '40°', 11, C.red, 'middle', true), ...m('鏡の面と垂直な線は90°', C.blue, FILL.blue)] },
  { note: '(1) 入射角は、垂直な線と光の線のあいだの角です。90−40＝50度。', add: [lb(130, 80, '50°', 12, C.blue, 'middle', true), ...m('(1) 入射角＝90−40＝50度', C.blue, FILL.blue)] },
  { note: '❓反射した光は、どちらへ進むのでしょう。反射の法則では、反射角は入射角と等しくなります。垂直な線をはさんで、反対側に50度のところへ進みます。', add: [ar(162, 128, 237, 66, C.green), lb(250, 58, '反射光', 11, C.green, 'end', true), lb(190, 80, '50°', 12, C.green, 'middle', true), ...m('反射角＝入射角＝50度', C.green, FILL.green)] },
  { note: '(2) 入ってくる光と反射した光のなす角は、50度と50度を合わせて 50×2＝100度です。', add: [lb(160, 30, 'なす角＝100°', 12, C.red, 'middle', true), ...m('(2) 50＋50＝100度', C.red, FILL.red)] },
  { note: '確かめます。鏡の面にそって測ると、入る光とのあいだが40度、反射光とのあいだも40度。残りは 180−40−40＝100度で、一致します。', add: m('40＋100＋40＝180（一直線）', C.green, FILL.green) },
], '答え：(1) 50度 (2) 100度');

// c17 凸レンズ
const c17Base = (): DiagramElement[] => [
  ln(10, 85, 310, 85, C.gray), ln(160, 38, 160, 132, C.blue, false, 4), lb(160, 30, '凸レンズ', 11, C.blue, 'middle', true),
  ln(60, 80, 60, 90, C.ink), ln(110, 80, 110, 90, C.ink), ln(210, 80, 210, 90, C.ink), ln(260, 80, 260, 90, C.ink),
  lb(60, 104, '2F', 11, C.gray, 'middle'), lb(110, 104, 'F', 11, C.gray, 'middle'), lb(210, 104, 'F', 11, C.gray, 'middle'), lb(260, 104, '2F', 11, C.gray, 'middle'),
];
const c17 = show([
  { note: '焦点距離（しょうてんきょり）10cmの凸レンズです。FはレンズからF＝10cmの点（焦点）、2Fはその2倍の20cmの点です。ろうそくを、レンズから20cmの位置に立てます。', add: [...c17Base(), ar(60, 85, 60, 55, C.red), lb(60, 48, 'ろうそく', 10, C.red, 'middle', true), ...m('焦点距離10cm、ろうそく20cm')] },
  { note: '❓ろうそくは、レンズからどんな位置にあるでしょう。焦点距離のちょうど2倍、2Fの位置です。', add: [...m('ろうそくは2Fの位置')] },
  { note: '❓像のでき方は、光の道すじで考えます。まず、ろうそくの先から、軸に平行に出た光は、レンズで曲がって、反対側の焦点Fを通ります。', add: [ln(60, 55, 160, 55, C.red), ln(160, 55, 260, 115, C.red), ...m('平行な光は、焦点を通る', C.red, FILL.red)] },
  { note: 'もう1本。レンズの中心を通る光は、曲がらずにまっすぐ進みます。', add: [ln(60, 55, 260, 115, C.purple), ...m('中心を通る光はまっすぐ', C.purple, FILL.purple)] },
  { note: '❓2本の光は、どこで交わるのでしょう。レンズの反対側の、2Fの位置（20cm）です。ここにスクリーンを置くと、像がうつります。', add: [ln(260, 45, 260, 130, C.gray, false, 3), ar(260, 85, 260, 115, C.green), lb(272, 120, 'スクリーン', 10, C.gray, 'start'), ...m('像はレンズから20cm', C.green, FILL.green)] },
  { note: '像の向きは、ろうそくが上向きなのに、像は下向きです。上下が逆で、左右も逆向きになります。', add: [lb(285, 60, '上下左右が', 10, C.green, 'end', true), lb(285, 72, '逆向き', 10, C.green, 'end', true), ...m('像は上下左右が逆向き', C.green, FILL.green)] },
  { note: '像の大きさは、ろうそくの高さ（矢印30）と、像の高さ（矢印30）が同じです。光の道すじが対称になっているからです。', add: [lb(60, 135, '高さ同じ', 10, C.main, 'middle', true), lb(260, 150, '高さ同じ', 10, C.main, 'middle', true), ...m('ろうそくと同じ大きさ', C.green, FILL.green)] },
  { note: '答え。レンズから20cmの位置に、同じ大きさで、上下左右が逆向きの像がうつります。', add: m('20cm・同じ大きさ・逆向き', C.green, FILL.green) },
], '答え：20cmの位置に、同じ大きさの逆向きの像');

// c18 音の速さ
const c18Base = (): DiagramElement[] => [ci(50, 80, 22, '花火', C.red, FILL.yellow, 11), ci(270, 80, 14, ' ', C.main, FILL.warm), lb(270, 114, 'わたし', 11, C.main, 'middle', true), ln(72, 135, 256, 135, C.gray, true), lb(164, 152, '距離（？m）', 11, C.gray, 'middle')];
const c18 = show([
  { note: '遠くで花火が開くのが見えてから、4.5秒後に音が聞こえました。花火までの距離を求めます。', add: [...c18Base(), ...m('見えて4.5秒後に音')] },
  { note: '❓光と音は、どちらが速いのでしょう。光はものすごく速くて、遠くの花火でもほとんど一瞬で目に届きます。', add: [ar(75, 66, 250, 66, C.red), lb(164, 56, '光はほぼ一瞬', 11, C.red, 'middle', true), ...m('光は一瞬で届く', C.red, FILL.red)] },
  { note: '音は、秒速340mです。1秒で340mしか進みません。', add: [ar(75, 96, 250, 96, C.blue, true), lb(164, 90, '音は秒速340m', 11, C.blue, 'middle', true), ...m('音は秒速340m', C.blue, FILL.blue)] },
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
  { note: 'モノコードの弦を、長さと張り方を変えて鳴らします。太さと材質は同じです。A〜Dの4通りで、音の高さをくらべます。', add: [...c19Base(), ...m('長さ2通り×張り方2通り')] },
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
const clips = (n: number, y = 100): DiagramElement[] => Array.from({ length: n }, (_, i) => ci(110 + i * 20, y, 6, undefined, C.gray, FILL.gray));
const c20 = show([
  { note: '鉄くぎにエナメル線を100回巻いて、かん電池1個をつなぐと、クリップが6個つきました。', add: [...nailScene(10), bx(250, 55, 50, 32, '電池\n1個', C.main, FILL.warm, 11), ln(230, 70, 250, 70, C.gray), ...clips(6), lb(110, 128, '巻き数100回・6個', 11, C.ink, 'start', true), ...m('100回・電池1個＝6個')] },
  { note: '❓電磁石の強さは、何で決まるのでしょう。問題にあるとおり、巻き数と、流れる電流の大きさに、それぞれ比例します。', add: fresh(bx(20, 30, 80, 44, '巻き数\n○倍', C.blue, FILL.blue, 12), lb(114, 58, '×', 18, C.ink, 'middle', true), bx(128, 30, 80, 44, '電流\n○倍', C.purple, FILL.purple, 12), lb(222, 58, '＝', 18, C.ink, 'middle', true), bx(236, 30, 70, 44, '強さ\n○倍', C.red, FILL.red, 12), ...m('強さの倍率＝巻き数×電流')) },
  { note: '(1) 巻き数は100回から200回で2倍。電池2個を直列につなぐと、電流は電池1個のときの2倍になります。', add: fresh(bx(20, 30, 80, 44, '巻き数\n2倍', C.blue, FILL.blue, 12), lb(114, 58, '×', 18, C.ink, 'middle', true), bx(128, 30, 80, 44, '電流\n2倍', C.purple, FILL.purple, 12), lb(222, 58, '＝', 18, C.ink, 'middle', true), bx(236, 30, 70, 44, '強さ\n？倍', C.red, FILL.red, 12), lb(168, 100, '電池2個の直列→電流2倍', 11, C.gray, 'middle'), ...m('巻き数2倍、電流2倍')) },
  { note: '強さは 2×2＝4倍になります。クリップは 6×4＝24個です。', add: [cover(234, 28, 74, 48), bx(236, 30, 70, 44, '強さ\n4倍', C.red, FILL.red, 12), ...clips(12, 126), lb(30, 150, '6×4＝24個', 12, C.red, 'start', true), ...m('(1) 6×4＝24個', C.red, FILL.red)] },
  { note: '(2) 巻き数は100回のまま。電池2個を並列につなぎます。❓並列にすると、電流は増えるでしょうか。', add: fresh(bx(20, 30, 80, 44, '巻き数\n1倍', C.blue, FILL.blue, 12), lb(114, 58, '×', 18, C.ink, 'middle', true), bx(128, 30, 80, 44, '電流\n？倍', C.purple, FILL.purple, 12), ...m('(2) 100回・電池2個並列')) },
  { note: '並列では、コイルに流れる電流は、電池1個のときと同じです。電池が電流を半分ずつ受けもつだけなので、電池が長持ちするだけで、電磁石は強くなりません。', add: [cover(126, 28, 84, 48), bx(128, 30, 80, 44, '電流\n1倍', C.purple, FILL.purple, 12), lb(222, 58, '＝', 18, C.ink, 'middle', true), bx(236, 30, 70, 44, '強さ\n1倍', C.red, FILL.red, 12), ...m('並列：電流は1倍のまま', C.purple, FILL.purple)] },
  { note: '強さは 1×1＝1倍。クリップは6個のままです。', add: [...clips(6, 126), lb(30, 150, '6個のまま', 12, C.red, 'start', true), ...m('(2) 6個', C.red, FILL.red)] },
  { note: '答え。(1) 24個、(2) 6個です。確かめ：(1)は(2)の4倍。巻き数と直列の効果が4倍で、並列は変化なし、という説明と合っています。', add: m('(1) 24個　(2) 6個', C.green, FILL.green) },
], '答え：(1) 24個 (2) 6個');

// c21 輪軸
const c21Base = (): DiagramElement[] => [
  ci(160, 85, 45, ' ', C.main, FILL.warm), ci(160, 85, 18, ' ', C.gray, FILL.gray), ci(160, 85, 3, undefined, C.ink, C.ink),
  ln(115, 85, 115, 128, C.gray, false, 2.5), wt(115, 128, '30g', C.red, FILL.red, 36, 22),
  ln(178, 85, 178, 138, C.gray, false, 2.5), wt(178, 138, '□g', C.blue, FILL.blue, 36, 22),
];
const c21 = show([
  { note: '大きい輪（半径10cm）と小さい輪（半径4cm）が同じ軸についた輪軸です。それぞれの輪にひもを巻いて、反対まわりにおもりをつるし、つり合わせます。', add: [...c21Base(), ...m('大きい輪に30g、小さい輪に□g')] },
  { note: '❓輪軸は、何と同じ考え方でしょう。てこです。軸が支点、ひもを巻いた輪の半径が、うでの長さにあたります。', add: [ln(160, 85, 115, 85, C.red, false, 2.5), ln(160, 85, 178, 85, C.blue, false, 2.5), lb(98, 70, '10cm', 11, C.red, 'start', true), lb(196, 74, '4cm', 11, C.blue, 'start', true), ...m('半径＝うでの長さ')] },
  { note: '❓てこがつり合うのは、いつでしょう。（おもりの重さ）×（うでの長さ）が、左右で等しいときです。まず、大きい輪のほうを計算します。30×10＝300。', add: m('大きい輪：30×10＝300', C.red, FILL.red) },
  { note: '小さい輪のほうは、□×4です。', add: m('小さい輪：□×4', C.blue, FILL.blue) },
  { note: 'つり合うので、300＝□×4です。', add: m('300＝□×4', C.main, FILL.warm) },
  { note: '□＝300÷4＝75。小さい輪には、75gのおもりをつるします。', add: [cover(176, 136, 40, 26), wt(178, 138, '75g', C.green, FILL.green, 36, 22), ...m('□＝300÷4＝75g', C.green, FILL.green)] },
  { note: '確かめます。半径の比は 10:4＝5:2。重さの比は、逆の 2:5になるはずです。30:75＝2:5で、一致しています。半径が大きいほうは、軽いおもりでつり合います。', add: m('半径5:2 ⇔ 重さ2:5', C.green, FILL.green) },
], '答え：75g');

// c22 斜面
const c22Scene = (): DiagramElement[] => [
  pg([[60, 150], [243, 150], [243, 70]], C.gray, FILL.gray), bx(130, 78, 40, 22, '500g', C.red, FILL.red, 11),
  ln(258, 70, 258, 150, C.ink), lb(264, 114, '高さ', 10, C.ink, 'start'), lb(264, 126, '40cm', 10, C.ink, 'start'), lb(150, 132, '斜面の長さ100cm', 10, C.ink, 'middle'),
];
const c22 = show([
  { note: 'なめらかな斜面（長さ100cm、高さ40cm）の上に、500gの物体があります。これを、斜面にそって引き上げます。', add: [...c22Scene(), ...m('長さ100cm、高さ40cm')] },
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
  { note: '同じかん電池と、同じ豆電球を使います。豆電球1個に、ア（電池2個を直列）、イ（電池2個を並列）、ウ（電池1個）をつなぎました。', add: [...cell(0), ...cell(1), ...cell(2), ...m('ア・イ・ウの3通り')] },
  { note: '❓アの直列は、電流がどうなるのでしょう。電池を直列につなぐと、電流を押し出す力が足し算になり、電池1個のときの2倍の電流が流れます。電流を「2」とします。', add: [lb(55, 156, '電流 2', 12, C.red, 'middle', true), ...m('ア：電池1個の2倍→2', C.red, FILL.red)] },
  { note: '❓イの並列は、どうでしょう。並列では、電流を押し出す力は電池1個のときと同じです。電流は電池1個のウと同じ「1」。したがって、イ＝ウです。', add: [lb(160, 156, '電流 1', 12, C.blue, 'middle', true), lb(265, 156, '電流 1', 12, C.blue, 'middle', true), ...m('イ＝ウ＝1', C.blue, FILL.blue)] },
  { note: '(1) 電流の大きさは、ア（2）＞イ（1）＝ウ（1）です。', add: m('(1) ア＞イ＝ウ', C.green, FILL.green) },
  { note: '(2) 長持ちを考えます。❓電池が長持ちするかどうかは、電池1個がどれだけの電流を出すかで決まります。出す電流が小さいほど長持ちです。', add: fresh(bx(10, 30, 95, 56, 'ア\n電池1個あたり2', C.red, FILL.red, 11), bx(112, 30, 95, 56, 'イ\n電池1個あたり0.5', C.green, FILL.green, 11), bx(214, 30, 95, 56, 'ウ\n電池1個あたり1', C.main, FILL.warm, 11), ...m('電池1個の出す電流をくらべる')) },
  { note: 'イでは、流れる電流1を、電池2個で半分ずつ出します。1÷2＝0.5。アでは電池1個が2、ウでは1を出すので、イがいちばん小さくなります。', add: m('イは1÷2＝0.5で最小', C.green, FILL.green) },
  { note: '答え。(1) ア＞イ＝ウ、(2) イ。確かめ：イでは、豆電球に流れる電流が電池1個のときと同じで、電池2個で分けるので、長持ちします。', add: m('(1) ア＞イ＝ウ　(2) イ', C.green, FILL.green) },
], '答え：(1) ア＞イ＝ウ (2) イ');
