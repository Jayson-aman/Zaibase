import type { DiagramElement, Figure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, show, band, fresh, cover } from './diagram-kit';

// 月例模試 2027年1月号 理科・中学受験 前半（c01〜c25）の「動く図解」。キーは問題ID。座標は 320×240。
// 図は上（y＜165）に描き、下の帯（y≥170）に短い結論を出す。文字を持たない長方形・円は多角形で描く（文字との重なり検査のため）。

/** 下の帯に一言（前のスライドの帯は白でおおいかくして書きかえる）。 */
const m = (text: string, color: string = C.main, fill: string = FILL.warm): DiagramElement[] =>
  band(170, bx(20, 176, 280, 34, text, color, fill, 13));

const rect = (x: number, y: number, w: number, h: number, color?: string, fill?: string): DiagramElement => pg([[x, y], [x + w, y], [x + w, y + h], [x, y + h]], color, fill);
const ell = (cx: number, cy: number, rx: number, ry: number, color?: string, fill?: string): DiagramElement =>
  pg(Array.from({ length: 32 }, (_, i) => [cx + rx * Math.cos((i / 32) * 2 * Math.PI), cy + ry * Math.sin((i / 32) * 2 * Math.PI)] as [number, number]), color, fill);
const disc = (cx: number, cy: number, r: number, color?: string, fill?: string): DiagramElement => ell(cx, cy, r, r, color, fill);
/** 枠線だけの長方形（強調用） */
const frame = (x: number, y: number, w: number, h: number, color: string = C.red): DiagramElement[] => [
  ln(x, y, x + w, y, color, false, 3), ln(x + w, y, x + w, y + h, color, false, 3), ln(x + w, y + h, x, y + h, color, false, 3), ln(x, y + h, x, y, color, false, 3),
];

// ═════════ 中学受験 ═════════

// c01 てこの3種類
const lever = (): DiagramElement[] => [
  ln(40, 100, 250, 100, C.ink, false, 5),
  pg([[60, 101], [50, 121], [70, 121]], C.ink, FILL.gray),
  bx(99, 72, 34, 26, '30kg', C.red, FILL.red, 11),
  ar(228, 140, 228, 106, C.blue),
  lb(60, 138, '支点', 11, C.ink, 'middle', true), lb(116, 122, '作用点', 11, C.red, 'middle', true), lb(228, 156, '力点', 11, C.blue, 'middle', true),
];
const tools = (): DiagramElement[] => [
  bx(10, 10, 300, 30, 'ア ピンセット　中：力点', C.main, FILL.warm, 13),
  bx(10, 48, 300, 30, 'イ 栓ぬき　中：作用点', C.main, FILL.warm, 13),
  bx(10, 86, 300, 30, 'ウ はさみ　中：支点', C.main, FILL.warm, 13),
  bx(10, 124, 300, 30, 'エ 一輪車　中：作用点', C.main, FILL.warm, 13),
];
const c01 = show([
  { note: '一輪車の荷台に30kgの荷物をのせました。車輪の軸が支点、荷物の重さがかかる所が作用点、手でにぎる所が力点です。', add: [...lever(), ...m('支点・作用点・力点')] },
  { note: '❓(1) 3つの点の並びは、道具によってどうちがうのでしょう。まん中にある点で、道具を分けて見ます。', add: fresh(...tools(), ...m('まん中の点を調べる')) },
  { note: 'ピンセットは、根もとが支点、まん中の指でつまむ所が力点、先が作用点です。力点がまん中にあるのは、ピンセットだけです。(1) ア。', add: [...frame(6, 6, 308, 38, C.red), ...m('(1) ア（ピンセット）', C.green, FILL.green)] },
  { note: '(2) 一輪車にもどります。支点から荷物までは40cm、支点から手までは120cmです。', add: fresh(...lever(), ln(60, 62, 116, 62, C.red, false, 2), lb(88, 58, '40cm', 11, C.red, 'middle', true), ln(60, 42, 228, 42, C.blue, false, 2), lb(144, 36, '120cm', 11, C.blue, 'middle', true), ...m('40cmと120cm')) },
  { note: '❓なぜつり合うのでしょう。支点のまわりで、まわそうとするはたらき（力×支点からの長さ）が、左右で等しいときです。荷物のはたらきは、30kg×40cm＝1200です。', add: fresh(bx(20, 30, 280, 40, '荷物：30×40＝1200', C.red, FILL.red, 16), ...m('荷物のはたらき1200', C.red, FILL.red)) },
  { note: '手のはたらきも1200になればつり合います。□kg×120cm＝1200なので、□＝1200÷120＝10kg分です。', add: [bx(20, 90, 280, 40, '手：□×120＝1200', C.blue, FILL.blue, 16), ...m('(2) 10kg分', C.green, FILL.green)] },
  { note: '確かめます。支点から手までの長さは、荷物までの3倍（120÷40）です。長さが3倍なら、力は3分の1ですむので、30÷3＝10kg分で一致します。', add: m('長さ3倍→力は3分の1', C.green, FILL.green) },
], '答え：(1) ア (2) 10kg分');

// c02 音の波形
const wave = (cy: number, cycles: number, amp: number, color: string): DiagramElement[] => {
  const x0 = 50, x1 = 290, n = cycles * 8, out: DiagramElement[] = [];
  let px = x0, py = cy;
  for (let i = 1; i <= n; i++) {
    const x = x0 + ((x1 - x0) * i) / n, y = cy - amp * Math.sin((i / 8) * 2 * Math.PI);
    out.push(ln(px, py, x, y, color, false, 2)); px = x; py = y;
  }
  return out;
};
const screens = (): DiagramElement[] => [
  ...frame(48, 8, 244, 44, C.gray), ...frame(48, 64, 244, 44, C.gray), ...frame(48, 120, 244, 44, C.gray),
  lb(30, 34, 'ア', 13, C.ink, 'middle', true), lb(30, 90, 'イ', 13, C.ink, 'middle', true), lb(30, 146, 'ウ', 13, C.ink, 'middle', true),
];
const c02 = show([
  { note: '音の波の形を画面に表示する装置で、ア・イ・ウの3つの音を、同じ設定で調べます。画面の横のはばは0.01秒ぶんです。', add: [...screens(), ...m('横のはば＝0.01秒')] },
  { note: 'アの波は、画面の中に4つ入っています。波の高さは、基準の大きさです。', add: [...wave(30, 4, 14, C.blue), ...m('ア：波が4つ', C.blue, FILL.blue)] },
  { note: 'イの波は8つで、高さはアと同じです。', add: [...wave(86, 8, 14, C.green), ...m('イ：波が8つ・高さ同じ', C.green, FILL.green)] },
  { note: 'ウの波は4つで、高さはアの2倍です。', add: [...wave(142, 4, 22, C.red), ...m('ウ：波が4つ・高さ2倍', C.red, FILL.red)] },
  { note: '❓(1) 高い音はどれでしょう。音の高さは、1秒間にふるえる回数で決まります。同じ時間に入る波の数がいちばん多いイが、いちばん高い音です。', add: [...frame(46, 62, 248, 48, C.green), ...m('(1) イ（波の数が多い）', C.green, FILL.green)] },
  { note: '❓(2) 大きい音はどれでしょう。音の大きさは、ふるえるはば（波の高さ）で決まります。いちばん高い波のウが、いちばん大きい音です。', add: [...frame(46, 118, 248, 48, C.red), ...m('(2) ウ（波が高い）', C.red, FILL.red)] },
  { note: '(3) アは0.01秒で4回ふるえます。1秒は0.01秒の100倍なので、4×100＝400回です。確かめ：イは8×100＝800回で、アのちょうど2倍。波が2倍なので、イのほうが高い音で一致します。', add: m('(3) 4×100＝400回', C.green, FILL.green) },
], '答え：(1) イ (2) ウ (3) 400回');

// c03 影の長さ
const shadowScene = (px: number, shEnd: number): DiagramElement[] => [
  ln(10, 140, 310, 140, C.ink, false, 3),
  ln(30, 30, 30, 140, C.gray, false, 3), disc(30, 30, 6, C.main, FILL.yellow),
  ln(px, 140, px, 96, C.ink, false, 4), disc(px, 91, 5, C.ink, FILL.gray),
  ln(30, 30, shEnd, 140, C.red, false, 2),
  ln(px, 140, shEnd, 140, C.blue, false, 5),
];
const c03 = show([
  { note: '高さ4mの電灯の下から6mはなれて、身長1.6mの人が立っています。光は電灯からまっすぐ進みます。', add: [...shadowScene(195, 305).slice(0, 4), lb(37, 90, '4m', 11, C.gray, 'start', true), ln(30, 150, 195, 150, C.gray, false, 1.5), lb(112, 164, '6m', 11, C.gray, 'middle', true), ...m('電灯4m・人1.6m')] },
  { note: '❓影はどこにできるのでしょう。電灯から出た光が、頭の先をかすめて、まっすぐ地面にとどいた点が、影の先です。', add: [ln(30, 30, 305, 140, C.red, false, 2), ln(195, 140, 305, 140, C.blue, false, 5), lb(250, 128, '影', 12, C.blue, 'middle', true), ...m('光が頭をかすめる→影の先', C.red, FILL.red)] },
  { note: '❓なぜ長さが求められるのでしょう。大きい三角形（電灯・真下・影の先）と、小さい三角形（頭・足もと・影の先）は、角が同じ形です。', add: [ln(30, 30, 30, 140, C.purple, true, 2), ln(195, 96, 195, 140, C.green, true, 2), ...m('2つの三角形は同じ形', C.purple, FILL.purple)] },
  { note: '同じ形なら、高さの比と底辺の比は等しくなります。高さの比は4m：1.6m＝5：2です。', add: fresh(bx(20, 24, 280, 36, '高さ　4：1.6＝5：2', C.purple, FILL.purple, 15), bx(20, 74, 280, 36, '底辺　(6＋影)：影＝5：2', C.purple, FILL.purple, 15), ...m('底辺の比も5：2')) },
  { note: '5と2の差は3で、これが「人から電灯の真下まで」の6mにあたります。比の1つぶんは6÷3＝2m。影は2つぶんなので、2×2＝4mです。', add: fresh(bx(20, 24, 280, 36, '差3＝6m　→　1つぶん2m', C.red, FILL.red, 15), bx(20, 74, 280, 36, '影＝2つぶん＝4m', C.red, FILL.red, 16), ...m('(1) 4m', C.green, FILL.green)) },
  { note: '(2) 3m近づくと、電灯の真下から人まで3m。差3が3mなので、1つぶんは1m。影は2つぶんで2mです。', add: fresh(...shadowScene(112.5, 167.5), lb(37, 90, '4m', 11, C.gray, 'start', true), ln(30, 150, 112, 150, C.gray, false, 1.5), lb(71, 164, '3m', 11, C.gray, 'middle', true), lb(140, 128, '影2m', 11, C.blue, 'middle', true), ...m('(2) 2m', C.green, FILL.green)) },
  { note: '確かめます。(1) 大きい三角形の底辺は6＋4＝10m、小さい三角形の底辺は4m。10：4＝5：2で、高さの比と一致します。電灯に近づくほど、影は短くなります。', add: m('10：4＝5：2で一致', C.green, FILL.green) },
], '答え：(1) 4m (2) 2m');

// c04 全身を見る鏡
const mirrorScene = (): DiagramElement[] => [
  ln(10, 150, 310, 150, C.ink, false, 3),
  ln(60, 150, 60, 22, C.ink, false, 4), disc(60, 30, 4, C.blue, FILL.blue),
  ln(170, 26, 170, 90, C.blue, false, 6),
  lb(44, 34, '目', 11, C.blue, 'end', true),
];
const c04 = show([
  { note: '身長160cmの人（目の高さ150cm）が、床に垂直に立てた平らな鏡で、頭から足まで全身を見ます。', add: [...mirrorScene(), lb(176, 70, '鏡', 12, C.blue, 'start', true), lb(60, 164, '足', 11, C.ink, 'middle')] },
  { note: '❓像はどこにできるのでしょう。鏡にうつる像は、鏡をはさんで、物と対称な位置（鏡から同じきょり）にできます。目は、像の向きに物があると感じます。', add: [ln(280, 150, 280, 22, C.gray, true, 3), lb(286, 100, '像', 12, C.gray, 'start', true), ...m('像は鏡の向こうに対称', C.gray, FILL.gray)] },
  { note: '足の先の像と目を結ぶと、線は鏡のところで、目の高さ150cmと足の高さ0cmの、ちょうど中間75cmを通ります。鏡の下のはしは、床から75cmです。', add: [ln(60, 30, 280, 150, C.red, true, 2), lb(206, 124, '75cm', 11, C.red, 'start', true), ...m('下のはし：75cm', C.red, FILL.red)] },
  { note: '頭のてっぺんの像と目を結ぶと、線は目150cmと頭160cmの中間155cmを通ります。鏡の上のはしは、床から155cmです。', add: [ln(60, 30, 280, 22, C.green, true, 2), ...m('上のはし：155cm', C.green, FILL.green)] },
  { note: '鏡の長さは、155−75＝80cm。(1) 80cmです。', add: fresh(bx(20, 24, 280, 36, '155−75＝80cm', C.red, FILL.red, 17), bx(20, 74, 280, 36, '(2) 下のはしは75cm', C.blue, FILL.blue, 15), ...m('(1) 80cm・(2) 75cm', C.green, FILL.green)) },
  { note: '❓なぜ身長の半分なのでしょう。目から足までの中間が目の高さの半分、目から頭までの中間が目の10cm上の半分。この差が、身長の半分になるからです。', add: fresh(bx(20, 24, 280, 36, '身長160cm　半分＝80cm', C.main, FILL.warm, 15), bx(20, 74, 280, 36, '近づいても遠ざかっても同じ', C.main, FILL.warm, 14), ...m('鏡は身長の半分でよい')) },
  { note: '確かめます。80cmは身長160cmのちょうど半分で、一致しています。よくあるまちがいは、下のはしを床にくっつけて0cmにすること。足の像との中間の75cmの高さが正しい位置です。', add: m('下のはしは床から75cm', C.green, FILL.green) },
], '答え：(1) 80cm (2) 75cm');

// c05 ペットボトルの穴
const bottle = (water: number): DiagramElement[] => [
  ln(110, 14, 110, 142, C.ink, false, 3), ln(210, 14, 210, 142, C.ink, false, 3), ln(110, 142, 210, 142, C.ink, false, 3),
  rect(111, water, 98, 141 - water, C.blue, FILL.blue),
  ci(210, 45, 3, undefined, C.ink, C.ink), ci(210, 80, 3, undefined, C.ink, C.ink), ci(210, 115, 3, undefined, C.ink, C.ink),
  lb(100, 49, 'ア', 12, C.ink, 'end', true), lb(100, 84, 'イ', 12, C.ink, 'end', true), lb(100, 119, 'ウ', 12, C.ink, 'end', true),
];
const c05 = show([
  { note: 'ペットボトルの側面に、同じ大きさの穴を上・中・下（ア・イ・ウ）にあけ、水をいっぱいに入れました。', add: [...bottle(26), ...m('穴は上から ア・イ・ウ')] },
  { note: 'テープをはがすと、3つの穴から水が横に飛び出しました。矢印の長さが、勢いの強さです。', add: [ar(214, 45, 240, 45, C.blue), ar(214, 80, 262, 80, C.blue), ar(214, 115, 296, 115, C.blue), ...m('飛び出し方がちがう')] },
  { note: '❓なぜ穴によってちがうのでしょう。穴の上には、水面までの水がのっています。水面から穴までの深さを比べます。', add: [ar(135, 28, 135, 41, C.red), ar(155, 28, 155, 76, C.red), ar(175, 28, 175, 111, C.red), ...m('水面から穴までの深さ', C.red, FILL.red)] },
  { note: '深いほど、穴の上にのっている水の量が多く、水の重さが大きくなります。この重さが、水を横へおし出す力になります。', add: fresh(bx(20, 20, 280, 36, '深い＝水の重さが大きい', C.red, FILL.red, 15), bx(20, 68, 280, 36, '水をおし出す力が大きい', C.red, FILL.red, 15), ...m('深いほど勢いが強い', C.red, FILL.red)) },
  { note: '勢いの強い順は、いちばん深い下の穴ウ＞イ＞アです。', add: fresh(bx(20, 20, 280, 34, '強い　ウ ＞ イ ＞ ア　弱い', C.green, FILL.green, 15), ...m('いちばん下ウが最も強い', C.green, FILL.green)) },
  { note: '❓水が減ると、どうなるのでしょう。水面が下がって、どの穴も深さが浅くなります。上にのる水の量がへるので、どの穴も勢いが弱くなります。', add: fresh(...bottle(95), ar(214, 115, 252, 115, C.blue), ...m('水が減ると弱くなる', C.blue, FILL.blue)) },
  { note: '確かめます。水がほとんどなくなると、下の穴の水もちょろちょろとしか出なくなります。深さがゼロに近づくと、勢いもゼロに近づきます。答えは「下の穴ウが最も強く、水が減ると弱くなる」です。', add: m('深さ小→勢い弱い', C.green, FILL.green) },
], '答え：下の穴ウが最も強く、水が減ると弱くなる');

// c06 注射器の空気と水
const syringe = (y: number, fill: number, color: string, fillColor: string): DiagramElement[] => [
  rect(60, y, 150, 26, C.ink, '#FFFFFF'),
  rect(61, y + 1, fill, 24, color, fillColor),
  ln(61 + fill, y - 4, 61 + fill, y + 30, C.ink, false, 4), ln(61 + fill, y + 13, 280, y + 13, C.ink, false, 3),
  ln(211, y + 13, 230, y + 13, C.ink, false, 2),
];
const c06 = show([
  { note: '注射器Aには空気60cm³、注射器Bには水60cm³を入れ、どちらも先を指でふさぎました。', add: [...syringe(30, 148, C.blue, FILL.blue), ...syringe(88, 148, C.main, '#CFE8FF'), lb(30, 47, 'A', 14, C.ink, 'middle', true), lb(30, 105, 'B', 14, C.ink, 'middle', true), ...m('A：空気60　B：水60')] },
  { note: 'ピストンをおしこんでみます。', add: [ar(290, 43, 270, 43, C.red), ar(290, 101, 270, 101, C.red), ...m('ピストンをおす')] },
  { note: '❓なぜちがうのでしょう。空気は粒と粒のすきまが大きいので、おすとすきまがつまって縮みます。水は粒どうしがほとんどくっついているので、おしても縮みません。(1) 縮むのはAです。', add: fresh(...syringe(30, 50, C.blue, FILL.blue), ...syringe(88, 148, C.main, '#CFE8FF'), lb(30, 47, 'A', 14, C.ink, 'middle', true), lb(30, 105, 'B', 14, C.ink, 'middle', true), ...m('(1) A（空気は縮む）', C.green, FILL.green)) },
  { note: '(2) Aの空気の体積は、60cm³から20cm³になりました。20÷60＝3分の1です。', add: fresh(bx(20, 24, 280, 36, '60cm³　→　20cm³', C.blue, FILL.blue, 16), bx(20, 74, 280, 36, '20÷60＝3分の1', C.blue, FILL.blue, 16), ...m('体積は3分の1')) },
  { note: '❓力はどうなるのでしょう。問題のきまりは「体積が2分の1で、力は2倍」です。体積が小さくなる倍率の逆の数を、力にかけます。', add: fresh(bx(20, 24, 280, 36, '体積2分の1　→　力2倍', C.main, FILL.warm, 15), bx(20, 74, 280, 36, '体積3分の1　→　力□倍', C.main, FILL.warm, 15), ...m('逆の数をかける')) },
  { note: '体積が3分の1なら、おし返す力は3倍です。(2) 3倍。', add: fresh(bx(20, 30, 280, 44, '3分の1の逆数＝3倍', C.red, FILL.red, 17), ...m('(2) 3倍', C.green, FILL.green)) },
  { note: '確かめます。「体積×おし返す力」は同じになります。はじめは60×1＝60、おしたあとは20×3＝60。一致しています。', add: m('60×1＝20×3＝60', C.green, FILL.green) },
], '答え：(1) A (2) 3倍');

// c07 湯と水を混ぜる
const tline = (): DiagramElement[] => [
  ln(40, 90, 280, 90, C.ink, false, 3),
  ln(40, 82, 40, 98, C.ink, false, 2), ln(280, 82, 280, 98, C.ink, false, 2),
  lb(40, 114, '20℃', 12, C.blue, 'middle', true), lb(280, 114, '80℃', 12, C.red, 'middle', true),
];
const c07 = show([
  { note: '80℃の湯300gと、20℃の水200gを、熱がにげない容器の中で混ぜ、よくかき混ぜます。', add: [bx(20, 30, 130, 60, '湯\n80℃・300g', C.red, FILL.red, 14), bx(170, 30, 130, 60, '水\n20℃・200g', C.blue, FILL.blue, 14), ...m('混ぜるとどうなる？')] },
  { note: '❓なぜ温度が決まるのでしょう。熱い湯から冷たい水へ熱が移って、最後は同じ温度になります。湯が失った熱＝水が受けとった熱です。熱は「重さ×温度の変化」で比べます。', add: fresh(bx(20, 24, 280, 36, '失った熱＝受けとった熱', C.main, FILL.warm, 15), bx(20, 74, 280, 36, '熱＝重さ×温度の変化', C.main, FILL.warm, 15), ...m('熱の量は重さ×変化')) },
  { note: '湯と水の温度差は、80−20＝60℃です。この60℃を、湯の下がりと水の上がりに分けます。', add: fresh(...tline(), ln(40, 60, 280, 60, C.main, false, 2), lb(160, 52, '60℃', 12, C.main, 'middle', true), ...m('温度差60℃')) },
  { note: '重さの比は、湯：水＝300：200＝3：2。熱が等しいので、温度変化の比は逆の2：3です。', add: fresh(bx(20, 24, 280, 36, '重さ　湯：水＝3：2', C.purple, FILL.purple, 16), bx(20, 74, 280, 36, '変化　湯：水＝2：3', C.purple, FILL.purple, 16), ...m('重さの逆の比')) },
  { note: '60℃を2：3に分けると、湯の下がりは60×2÷5＝24℃、水の上がりは60×3÷5＝36℃。混ぜたあとは、80−24＝56℃です。(1) 56℃。', add: fresh(...tline(), ln(184, 76, 184, 104, C.green, false, 3), ar(280, 66, 184, 66, C.red), ar(40, 66, 184, 66, C.blue), lb(232, 58, '24℃下がる', 11, C.red, 'middle', true), lb(112, 58, '36℃上がる', 11, C.blue, 'middle', true), lb(184, 130, '56℃', 13, C.green, 'middle', true), ...m('(1) 56℃', C.green, FILL.green)) },
  { note: '(2) 湯300gを80℃から50℃にすると、30℃下がります。失う熱は、300×30＝9000です。水は20℃から50℃に、30℃上がります。9000÷30＝300gです。', add: fresh(bx(20, 24, 280, 36, '湯：300×30＝9000', C.red, FILL.red, 16), bx(20, 74, 280, 36, '水：9000÷30＝300g', C.blue, FILL.blue, 16), ...m('(2) 300g', C.green, FILL.green)) },
  { note: '確かめます。(1) 湯は300×24＝7200、水は200×36＝7200で等しい。(2) 湯の下がりと水の上がりがどちらも30℃で同じなので、重さも同じ300gです。', add: m('7200＝7200で一致', C.green, FILL.green) },
], '答え：(1) 56℃ (2) 300g');

// c08 方位磁針
const magnet = (): DiagramElement[] => [
  bx(110, 80, 50, 24, 'N', C.red, FILL.red, 14), bx(160, 80, 50, 24, 'S', C.blue, FILL.blue, 14),
];
const compass = (cx: number, cy: number): DiagramElement => ci(cx, cy, 11, undefined, C.ink, FILL.gray);
const c08 = show([
  { note: '左がN極・右がS極の棒磁石のまわりの3か所に、小さな方位磁針を置きました。①は左はし、②は中央のすぐ上、③は右はしの外側です。', add: [...magnet(), compass(80, 92), compass(160, 52), compass(240, 92), lb(80, 118, '①', 12, C.ink, 'middle', true), lb(160, 34, '②', 12, C.ink, 'middle', true), lb(240, 118, '③', 12, C.ink, 'middle', true), ...m('①②③の針のN極は？')] },
  { note: '❓どう考えるのでしょう。同じ極は退け合い、ちがう極は引き合います。針のN極は、磁石のN極から退けられ、S極に引かれます。', add: fresh(bx(20, 24, 280, 36, '同じ極＝退け合う', C.red, FILL.red, 16), bx(20, 74, 280, 36, 'ちがう極＝引き合う', C.blue, FILL.blue, 16), ...m('針のN極：S極へ・N極から')) },
  { note: '①は、磁石のN極のすぐ近くです。針のN極は、N極から退けられて、遠ざかる左を向きます。', add: fresh(...magnet(), compass(80, 92), compass(160, 52), compass(240, 92), ar(80, 92, 58, 92, C.red), ...m('①：N極から退けられ左', C.red, FILL.red)) },
  { note: '②は、N極とS極から同じきょりです。針のN極は、N極から退けられて右へ、S極に引かれて右へ。どちらも右向きです。', add: [ar(160, 52, 182, 52, C.red), ...m('②：右（どちらも右向き）', C.red, FILL.red)] },
  { note: '③は、磁石のS極のすぐ近くです。針のN極は、S極に引かれるので、磁石のある左を向きます。', add: [ar(240, 92, 218, 92, C.red), ...m('③：S極に引かれ左', C.red, FILL.red)] },
  { note: '❓3つをつなぐと、どうなるでしょう。磁石の外側では、N極から出て、まわって、S極に入る向きになっています。', add: fresh(...magnet(), ln(112, 80, 96, 62, C.gray, true, 2), ln(96, 62, 126, 40, C.gray, true, 2), ln(126, 40, 194, 40, C.gray, true, 2), ln(194, 40, 224, 62, C.gray, true, 2), ar(224, 62, 208, 80, C.gray, true), lb(160, 30, 'N極から出てS極へ', 11, C.gray, 'middle', true), ...m('磁石の外：N極→S極', C.gray, FILL.gray)) },
  { note: '答えは ①左 ②右 ③左 です。確かめ：左のN極から出て右のS極へ向かう流れで、①は出ていく向きの左、②は進む向きの右、③はS極に入っていく向きの左となり、一致します。', add: m('①左　②右　③左', C.green, FILL.green) },
], '答え：①左 ②右 ③左');

// c09 空気の重さ
const c09 = show([
  { note: 'サッカーボールの重さは420gでした。このボールに、ふだんの空気2Lを、さらに入れます。', add: [disc(80, 70, 40, C.ink, FILL.gray), lb(80, 74, '420g', 14, C.ink, 'middle', true), ar(150, 70, 192, 70, C.blue), bx(198, 50, 100, 40, '空気2L', C.blue, FILL.blue, 15), ...m('空気をさらに入れる')] },
  { note: '❓空気に重さはあるのでしょうか。あります。空気も物質なので、ふだんの空気1L（1000cm³）の重さは、約1.2gです。', add: fresh(bx(20, 30, 280, 44, '空気1L＝約1.2g', C.blue, FILL.blue, 18), ...m('空気にも重さがある', C.blue, FILL.blue)) },
  { note: '(1) 入れた空気2Lの重さは、2×1.2＝2.4gです。', add: fresh(bx(20, 30, 280, 44, '2L×1.2g＝2.4g', C.red, FILL.red, 18), ...m('ふえる重さ2.4g', C.red, FILL.red)) },
  { note: 'ボールは、はじめ420gで、2.4gふえます。420＋2.4＝422.4gです。(1) 422.4g。', add: fresh(bx(20, 30, 280, 44, '420＋2.4＝422.4g', C.red, FILL.red, 17), ...m('(1) 422.4g', C.green, FILL.green)) },
  { note: '(2) 部屋は、たて4m・横5m・高さ2.5mです。体積は、4×5×2.5＝50m³です。', add: fresh(pg([[60, 50], [220, 50], [260, 20], [100, 20]], C.gray, FILL.gray), rect(60, 50, 160, 90, C.ink, FILL.warm), lb(140, 100, '4m×5m×2.5m', 12, C.ink, 'middle', true), ...m('体積＝50m³')) },
  { note: '❓なぜ単位をそろえるのでしょう。1Lあたりの重さしかわからないので、体積をLにします。1m³＝1000Lなので、50m³＝50000L。空気の重さは、50000×1.2＝60000gです。', add: fresh(bx(20, 24, 280, 36, '50m³＝50000L', C.main, FILL.warm, 16), bx(20, 74, 280, 36, '50000×1.2＝60000g', C.main, FILL.warm, 16), ...m('60000g')) },
  { note: '1kgは1000gなので、60000÷1000＝60kgです。(2) 60kg。確かめ：1m³の空気は1.2kgで、50m³なら1.2×50＝60kgと一致します。大人1人ぶんの重さです。', add: m('(2) 60kg', C.green, FILL.green) },
], '答え：(1) 422.4g (2) 60kg');

// c10 レンガ
const c10 = show([
  { note: '重さ1000gのレンガです。たて10cm、横20cm、高さ5cm。机の1cm²あたりにかかる重さを、置き方でくらべます。', add: [pg([[60, 60], [200, 60], [230, 36], [90, 36]], C.ink, FILL.warm), rect(60, 60, 140, 40, C.ink, FILL.warm), pg([[200, 60], [230, 36], [230, 76], [200, 100]], C.ink, FILL.gray), lb(130, 84, '20cm', 11, C.ink, 'middle', true), lb(214, 120, '5cm', 11, C.ink, 'middle', true), lb(246, 56, '10cm', 11, C.ink, 'start', true), ...m('重さ1000g')] },
  { note: '❓どう求めるのでしょう。「机をおす全体の重さ÷机にふれている面積」を求めます。まず、面の面積です。', add: fresh(bx(20, 20, 280, 34, '10×20＝200cm²（大）', C.main, FILL.warm, 14), bx(20, 62, 280, 34, '20×5＝100cm²', C.main, FILL.warm, 14), bx(20, 104, 280, 34, '10×5＝50cm²（小）', C.main, FILL.warm, 14), ...m('面積は3種類')) },
  { note: '(1) いちばん小さい面50cm²を下にします。1000÷50＝20gです。', add: fresh(rect(130, 40, 30, 100, C.ink, FILL.warm), lb(145, 90, '1000g', 10, C.ink, 'middle', true), ln(110, 140, 180, 140, C.ink, false, 3), lb(240, 80, '1000÷50', 13, C.red, 'middle', true), ...m('(1) 20g', C.green, FILL.green)) },
  { note: '(2) 同じ向きで2個を重ねると、全体の重さは2000g。ふれている面は、下のレンガの50cm²だけです。2000÷50＝40gです。', add: fresh(rect(130, 20, 30, 60, C.ink, FILL.warm), rect(130, 80, 30, 60, C.ink, FILL.gray), lb(145, 54, '1000g', 10, C.ink, 'middle', true), lb(145, 114, '1000g', 10, C.ink, 'middle', true), ln(110, 140, 180, 140, C.ink, false, 3), lb(244, 80, '2000÷50', 13, C.red, 'middle', true), ...m('(2) 40g', C.green, FILL.green)) },
  { note: '(3) 大きい面を下にして、2個を横にならべます。ふれている面積は、200×2＝400cm²。全体の重さは2000g。2000÷400＝5gです。', add: fresh(rect(40, 100, 100, 40, C.ink, FILL.warm), rect(150, 100, 100, 40, C.ink, FILL.gray), lb(90, 124, '1000g', 11, C.ink, 'middle', true), lb(200, 124, '1000g', 11, C.ink, 'middle', true), ln(30, 140, 260, 140, C.ink, false, 3), lb(150, 70, '2000÷400', 14, C.red, 'middle', true), ...m('(3) 5g', C.green, FILL.green)) },
  { note: '❓(3) が1個のときと同じになるのはなぜでしょう。ならべると、重さも面積も2倍になるので、割ると同じです。1個だけ大きい面を下にした1000÷200＝5gと一致します。', add: fresh(bx(20, 24, 280, 36, '重さ2倍・面積2倍', C.main, FILL.warm, 16), bx(20, 74, 280, 36, '1000÷200＝2000÷400', C.main, FILL.warm, 15), ...m('ならべても変わらない')) },
  { note: '確かめます。(2) は、(1) の2倍の重さを同じ面積で支えるので、20の2倍の40g。一致しています。よくあるまちがいは、(3) を2000÷200で10gとすること。', add: m('せまいほど・重ねるほど大', C.green, FILL.green) },
], '答え：(1) 20g (2) 40g (3) 5g');

// c11 電気を通すもの
const circ = (): DiagramElement[] => [
  ln(40, 40, 280, 40, C.ink, false, 3), ln(280, 40, 280, 110, C.ink, false, 3), ln(280, 110, 40, 110, C.ink, false, 3), ln(40, 110, 40, 40, C.ink, false, 3),
  bx(20, 60, 40, 30, '電池', C.ink, FILL.gray, 11), ci(250, 40, 14, '', C.main, FILL.yellow),
  bx(120, 28, 70, 24, 'はさむ物', C.red, FILL.red, 12),
];
const c11 = show([
  { note: 'かん電池・豆電球・導線の回路の途中に、いろいろな物を1つずつはさんで、豆電球がつくかどうかを調べます。', add: [...circ(), ...m('はさんで調べる')] },
  { note: '❓どれが電気を通すのでしょう。電気を通すのは、鉄・銅・アルミニウムなどの金属です。鉄のくぎ、10円玉（銅）、アルミニウムはくは、豆電球がつきます。', add: fresh(bx(20, 14, 280, 34, '鉄のくぎ　○', C.green, FILL.green, 15), bx(20, 56, 280, 34, '10円玉（銅）　○', C.green, FILL.green, 15), bx(20, 98, 280, 34, 'アルミニウムはく　○', C.green, FILL.green, 15), ...m('金属は電気を通す', C.green, FILL.green)) },
  { note: 'えんぴつのしんは、金属ではありませんが、炭のなかまで、電気を通します。これも○です。', add: fresh(bx(20, 30, 280, 44, 'えんぴつのしん　○', C.green, FILL.green, 17), bx(20, 90, 280, 36, '金属ではないが通す', C.purple, FILL.purple, 14), ...m('炭のなかまは通す', C.purple, FILL.purple)) },
  { note: '❓通さないのは何でしょう。ガラス・消しゴム・わりばし（木）・ゴム・ビニールは、電気を通しません。豆電球はつきません。', add: fresh(bx(20, 10, 280, 28, 'ガラスのぼう　×', C.red, FILL.red, 14), bx(20, 44, 280, 28, '消しゴム・ビニール　×', C.red, FILL.red, 14), bx(20, 78, 280, 28, 'わりばし（木）　×', C.red, FILL.red, 14), bx(20, 112, 280, 28, 'ゴムのひも　×', C.red, FILL.red, 14), ...m('通さない物はつかない', C.red, FILL.red)) },
  { note: '選択肢を見ます。1番目は、ガラスと消しゴムがふくまれます。×です。', add: fresh(bx(20, 24, 280, 44, '1番目：ガラス・消しゴム', C.red, FILL.red, 15), ...m('1番目は×', C.red, FILL.red)) },
  { note: '2番目は、わりばしとゴムのひもがふくまれます。3番目は、ガラスとビニールひもがふくまれます。どちらも×です。', add: fresh(bx(20, 14, 280, 44, '2番目：わりばし・ゴム', C.red, FILL.red, 15), bx(20, 70, 280, 44, '3番目：ガラス・ビニール', C.red, FILL.red, 15), ...m('2番目・3番目も×', C.red, FILL.red)) },
  { note: '4番目の「鉄のくぎ・10円玉・アルミニウムはく・えんぴつのしん」だけが、すべて電気を通します。確かめ：金属3つとえんぴつのしんで、どれもつきます。', add: fresh(bx(20, 24, 280, 80, '鉄のくぎ・10円玉\nアルミニウムはく\nえんぴつのしん', C.green, FILL.green, 16), ...m('答え：4番目', C.green, FILL.green)) },
], '答え：鉄のくぎ・10円玉・アルミニウムはく・えんぴつのしん');

// c12 ショート
const circ2 = (aLit: boolean, bLit: boolean, wireB: boolean, wireA: boolean): DiagramElement[] => {
  const out: DiagramElement[] = [
    ln(35, 70, 280, 70, C.ink, false, 3), ln(280, 70, 280, 120, C.ink, false, 3), ln(280, 120, 35, 120, C.ink, false, 3), ln(35, 120, 35, 70, C.ink, false, 3),
    bx(15, 85, 40, 20, '電池', C.ink, FILL.gray, 11),
    ci(110, 70, 15, 'A', aLit ? C.main : C.gray, aLit ? FILL.yellow : FILL.gray, 12), ci(210, 70, 15, 'B', bLit ? C.main : C.gray, bLit ? FILL.yellow : FILL.gray, 12),
  ];
  if (wireB) out.push(ln(190, 55, 190, 30, C.red, false, 3), ln(190, 30, 230, 30, C.red, false, 3), ln(230, 30, 230, 55, C.red, false, 3));
  if (wireA) out.push(ln(90, 55, 90, 30, C.red, false, 3), ln(90, 30, 130, 30, C.red, false, 3), ln(130, 30, 130, 55, C.red, false, 3));
  return out;
};
const c12 = show([
  { note: 'かん電池1個に、同じ豆電球AとBを1列につなぎました（直列）。どちらの豆電球も暗くつきます。', add: [...circ2(true, true, false, false), ...m('直列：どちらも暗い')] },
  { note: '次に、豆電球Bの両はしを、1本の導線でつなぎます。Bをとばして電気が流れる道ができます。', add: fresh(...circ2(true, true, true, false), ...m('Bに導線をつなぐ')) },
  { note: '❓電流はどこを通るのでしょう。電流は、通りにくい豆電球より、導線だけの通りやすい道を流れます。Bには電流が流れないので、(1) Bは消えます。', add: fresh(...circ2(true, false, true, false), ar(190, 36, 230, 36, C.red), ...m('(1) Bは消える', C.red, FILL.red)) },
  { note: '❓Aはどうなるのでしょう。いまの回路は、電池→A→導線→電池で、豆電球1個だけの回路と同じです。(2) かん電池1個に豆電球1個のときと同じ明るさです。', add: [lb(160, 150, '電池1個＋豆電球1個と同じ', 12, C.main, 'middle', true), ...m('(2) 同じ明るさ', C.green, FILL.green)] },
  { note: '(3) さらに豆電球Aの両はしも、導線でつなぎます。', add: fresh(...circ2(false, false, true, true), ...m('Aにも導線をつなぐ')) },
  { note: '❓どうなるのでしょう。電流は豆電球を1個も通らず、導線だけの回路ができます。これをショートといいます。AもBも消えます。', add: [ar(35, 100, 35, 75, C.red), ar(160, 120, 80, 120, C.red), ...m('どちらも消える', C.red, FILL.red)] },
  { note: 'じゃまするものがないので、電池から大きな電流が流れます。導線や電池が熱くなり、電池もすぐ使えなくなります。とても危険です。', add: m('導線と電池が熱くなる', C.red, FILL.red) },
], '答え：(1) 消える (2) 同じ明るさ (3) どちらも消え、熱くなる');

// c13 氷と水面
const tank = (level: number): DiagramElement[] => [
  ln(60, 20, 60, 140, C.ink, false, 3), ln(260, 20, 260, 140, C.ink, false, 3), ln(60, 140, 260, 140, C.ink, false, 3),
  rect(61, level, 198, 139 - level, C.blue, FILL.blue),
  ln(61, level, 259, level, C.blue, false, 2),
];
const c13 = show([
  { note: '底面積100cm²の水そうに、氷900gを浮かべます。氷は水に浮くものとします。', add: [...tank(70), rect(130, 56, 60, 30, C.main, FILL.warm), lb(160, 76, '氷900g', 11, C.ink, 'middle', true), ...m('氷900gが浮く')] },
  { note: '❓なぜ浮くのでしょう。浮いている物は、自分の重さと同じ重さの水を、水面の下でおしのけています。氷900gなら、900gの水をおしのけます。', add: fresh(bx(20, 24, 280, 36, '浮く物＝自分の重さの水を', C.main, FILL.warm, 14), bx(20, 74, 280, 36, 'おしのける', C.main, FILL.warm, 16), ...m('おしのける水＝氷の重さ')) },
  { note: '水1cm³は1gなので、おしのけた水の体積は900cm³。(1) 水面より下の氷の体積は900cm³です。', add: fresh(...tank(70), rect(130, 56, 60, 30, C.main, FILL.warm), rect(130, 70, 60, 16, C.red, FILL.red), lb(210, 84, '水面の下900cm³', 11, C.red, 'start', true), ...m('(1) 900cm³', C.green, FILL.green)) },
  { note: '❓(2) 氷がとけると、水面はどうなるでしょう。とけた氷は、900gの水になります。体積は900cm³で、おしのけていた体積900cm³と、ちょうど同じです。', add: fresh(...tank(70), rect(131, 70, 128, 16, C.blue, FILL.blue), ...m('(2) 変わらない', C.green, FILL.green)) },
  { note: '(3) 氷の中に、体積10cm³・重さ79gの鉄の球があります。全体は979gで浮いているので、おしのけている水は979gで、979cm³です。', add: fresh(...tank(70), rect(130, 56, 60, 30, C.main, FILL.warm), disc(160, 72, 6, C.ink, FILL.gray), lb(210, 84, '979cm³', 12, C.red, 'start', true), ...m('おしのけ979cm³', C.red, FILL.red)) },
  { note: '❓とけると、どうなるのでしょう。氷は900gの水（900cm³）になり、鉄の球は底にしずんで、自分の体積10cm³ぶんをしめます。合計910cm³で、979−910＝69cm³へります。', add: fresh(...tank(80), disc(160, 132, 6, C.ink, FILL.gray), lb(210, 76, '910cm³', 12, C.blue, 'start', true), ...m('979→910：69cm³へる', C.red, FILL.red)) },
  { note: '水そうの底面積は100cm²。69cm³へるので、水面は69÷100＝0.69cm下がります。(3) 0.69cm。確かめ：しずむと79cm³ぶんが10cm³ぶんになり、79−10＝69cm³で一致します。', add: m('(3) 0.69cm下がる', C.green, FILL.green) },
], '答え：(1) 900cm³ (2) 変わらない (3) 0.69cm');

// c14 気体の集め方
const jar = (x: number, y: number, mouthDown: boolean): DiagramElement[] => mouthDown
  ? [ln(x, y, x + 36, y, C.ink, false, 3), ln(x, y, x, y + 50, C.ink, false, 3), ln(x + 36, y, x + 36, y + 50, C.ink, false, 3)]
  : [ln(x, y + 50, x + 36, y + 50, C.ink, false, 3), ln(x, y, x, y + 50, C.ink, false, 3), ln(x + 36, y, x + 36, y + 50, C.ink, false, 3)];
const c14 = show([
  { note: 'アンモニア・二酸化炭素・水素の性質です。アンモニアは水に非常によくとけて空気より軽い。二酸化炭素は水に少しとけて空気より重い。水素は水にとけにくく空気よりずっと軽い。', add: [bx(10, 20, 96, 80, 'アンモニア\n水によくとける\n軽い', C.main, FILL.warm, 11), bx(112, 20, 96, 80, '二酸化炭素\n水に少しとける\n重い', C.blue, FILL.blue, 11), bx(214, 20, 96, 80, '水素\n水にとけにくい\nずっと軽い', C.green, FILL.green, 11), ...m('性質で集め方が決まる')] },
  { note: '❓集め方は何で決まるのでしょう。「水にとけるか」と「空気より重いか軽いか」です。3つの方法があります。', add: fresh(bx(10, 20, 96, 36, '水上置換法', C.green, FILL.green, 13), bx(112, 20, 96, 36, '上方置換法', C.main, FILL.warm, 13), bx(214, 20, 96, 36, '下方置換法', C.blue, FILL.blue, 13), lb(58, 76, '水にとけにくい', 10, C.green, 'middle'), lb(160, 76, '軽くてとける', 10, C.main, 'middle'), lb(262, 76, '重くてとける', 10, C.blue, 'middle'), ...m('3つの集め方')) },
  { note: '(1) アンモニアは水によくとけるので、水を使う方法は×。空気より軽いので、びんの口を下に向けて、上にためる「上方置換法」です。', add: fresh(...jar(142, 30, true), ar(160, 130, 160, 86, C.main), lb(160, 150, 'アンモニア', 11, C.main, 'middle', true), ...m('(1) 上方置換法', C.green, FILL.green)) },
  { note: '(2) 二酸化炭素は、水を使わないので水上置換法は×。空気より重いので、びんの口を上に向けて、下にためる「下方置換法」です。', add: fresh(...jar(142, 60, false), ar(160, 20, 160, 100, C.blue), lb(160, 150, '二酸化炭素', 11, C.blue, 'middle', true), ...m('(2) 下方置換法', C.green, FILL.green)) },
  { note: '❓(3) 集めたびんは、どちら向きにおくのでしょう。二酸化炭素は重いので、びんの中にたまっています。口を下に向けると、こぼれ落ちてしまいます。', add: fresh(...jar(142, 40, true), ar(160, 100, 160, 140, C.red), lb(160, 158, 'こぼれ落ちる', 11, C.red, 'middle', true), ...m('口を下だと×', C.red, FILL.red)) },
  { note: 'だから、ふたをして、口を上に向けておきます。(3) 上に向ける。', add: fresh(...jar(142, 50, false), rect(138, 44, 44, 6, C.ink, FILL.gray), ...m('(3) 口を上に向ける', C.green, FILL.green)) },
  { note: '確かめます。名前の「上」「下」は、気体がたまる位置です。軽いアンモニアは上方、重い二酸化炭素は下方で、一致しています。', add: m('軽い→上方・重い→下方', C.green, FILL.green) },
], '答え：(1) 上方置換法 (2) 下方置換法 (3) 上に向ける');

// c15 燃える3つの条件
const rows4 = (): DiagramElement[] => [
  bx(10, 10, 200, 30, 'ガスを止める', C.main, FILL.warm, 13),
  bx(10, 48, 200, 30, 'びんをかぶせる', C.main, FILL.warm, 13),
  bx(10, 86, 200, 30, '水をかける', C.main, FILL.warm, 13),
  bx(10, 124, 200, 30, '木を切りたおす', C.main, FILL.warm, 13),
];
const c15 = show([
  { note: '物が燃えるには、「燃えるもの」「酸素（空気）」「発火点以上の温度」の3つが必要です。', add: [bx(100, 12, 120, 34, '燃えるもの', C.red, FILL.red, 13), bx(20, 100, 120, 34, '酸素（空気）', C.blue, FILL.blue, 13), bx(180, 100, 120, 34, '発火点以上の温度', C.green, FILL.green, 11), ar(130, 50, 80, 98, C.gray), ar(190, 50, 240, 98, C.gray), ar(142, 117, 178, 117, C.gray), ...m('3つがそろうと燃える')] },
  { note: '❓どれか1つをなくすとどうなるのでしょう。火は消えます。消火の方法は、どの条件をなくすかで分けられます。', add: fresh(bx(20, 24, 280, 40, '1つでもなくなれば消える', C.red, FILL.red, 15), ...m('消火＝条件を1つなくす', C.red, FILL.red)) },
  { note: 'ガスを止める方法は、燃えるもの（ガス）をなくしています。', add: fresh(...rows4(), bx(216, 10, 94, 30, '燃えるもの', C.red, FILL.red, 11), ...m('ガス：燃えるものをなくす')) },
  { note: '❓集気びんをかぶせるとどうなるのでしょう。外から新しい空気が入らず、びんの中の酸素が使われてへり、やがて火が消えます。酸素をへらしています。', add: [bx(216, 48, 94, 30, '酸素', C.blue, FILL.blue, 13), ...frame(6, 44, 308, 38, C.blue), ...m('びん：酸素をへらす', C.blue, FILL.blue)] },
  { note: '水をかける方法は、水が熱をうばって、温度を発火点より下げています。', add: [bx(216, 86, 94, 30, '温度', C.green, FILL.green, 13), ...m('水：温度を下げる', C.green, FILL.green)] },
  { note: '山火事で木を切りたおす方法は、火が燃えうつる、燃えるものをなくしています。', add: [bx(216, 124, 94, 30, '燃えるもの', C.red, FILL.red, 11), ...m('木：燃えるものをなくす')] },
  { note: '答えは「ろうそくの火に、集気びんをかぶせる」です。確かめ：4つのうち、酸素に関係するのはびんだけです。ガスと木は燃えるもの、水は温度です。', add: fresh(...frame(6, 44, 308, 38, C.green), bx(10, 48, 300, 30, 'びんをかぶせる＝酸素', C.green, FILL.green, 13), ...m('答え：集気びん', C.green, FILL.green)) },
], '答え：ろうそくの火に、集気びんをかぶせる');

// c16 ろうそくの炎
const flame = (): DiagramElement[] => [
  rect(100, 150, 40, 16, C.ink, FILL.gray), ln(120, 150, 120, 126, C.ink, false, 2),
  ell(120, 90, 34, 62, C.blue, '#EAF6FF'), ell(120, 100, 22, 44, C.main, FILL.yellow), ell(120, 108, 9, 24, C.gray, FILL.gray),
];
const c16 = show([
  { note: 'ろうそくの炎は、ア（しんのまわりのいちばん内側・暗い）、イ（アのまわり・明るい）、ウ（いちばん外側・うすい）に分けられます。', add: [...flame(), lb(190, 50, 'ウ', 14, C.blue, 'start', true), lb(190, 100, 'イ', 14, C.main, 'start', true), lb(190, 140, 'ア', 14, C.gray, 'start', true), ...m('ア・イ・ウの3つの部分')] },
  { note: '❓どこがいちばん熱いのでしょう。外側のウは、空気（酸素）にいちばんよくふれるので、ろうの気体がよく燃えて、温度が最も高くなります。(1) ウ。', add: [ln(186, 46, 150, 46, C.blue, true, 2), ...m('(1) ウ（空気にふれる）', C.blue, FILL.blue)] },
  { note: '❓なぜイが明るいのでしょう。イは酸素が足りないので、ろうが完全には燃えず、細かい炭の粒ができます。この粒が熱せられて光るので、明るく見えます。(2) イ。', add: [ln(186, 96, 140, 96, C.main, true, 2), ...m('(2) イ（炭の粒が光る）', C.main, FILL.warm)] },
  { note: 'アは、しんのすぐ近くで、ろうが気体になって集まっているだけで、まだ燃えていません。温度もいちばん低い部分です。', add: [ln(186, 136, 126, 112, C.gray, true, 2), ...m('ア：燃える前のろうの気体', C.gray, FILL.gray)] },
  { note: '(3) アの部分に、先を細くしたガラス管の一方を差しこみ、もう一方に、マッチの火を近づけます。', add: fresh(...flame(), ln(120, 110, 250, 110, C.ink, false, 3), ln(250, 110, 290, 110, C.ink, false, 3), ar(300, 72, 272, 100, C.red), lb(300, 64, 'マッチ', 11, C.red, 'end', true), ...m('管の先に火を近づける')) },
  { note: '❓どうなるのでしょう。管の中をアの気体のろうが通ってきて、先で空気にふれ、火がつきます。(3) 燃えます。', add: [pg([[276, 108], [288, 82], [300, 108]], C.main, FILL.yellow), ...m('(3) 燃える', C.green, FILL.green)] },
  { note: '確かめます。炎の中に割りばしを横に入れると、ウにふれた部分がいちばんよく焦げます。温度が高いのは外側という (1) と一致します。明るい所が熱いわけではありません。', add: m('明るい所≠いちばん熱い', C.green, FILL.green) },
], '答え：(1) ウ (2) イ (3) 燃える');

// c17 湯気
const kettle = (): DiagramElement[] => [
  bx(20, 100, 70, 44, 'やかん', C.ink, FILL.gray, 12), ln(90, 108, 118, 88, C.ink, false, 4),
  lb(124, 90, 'ア', 13, C.ink, 'start', true), lb(212, 50, 'イ', 13, C.ink, 'start', true), lb(246, 36, 'ウ', 13, C.ink, 'start', true),
];
const c17 = show([
  { note: 'やかんの湯をわかしました。注ぎ口のすぐそば（ア）は何も見えず、少し先（イ）は白く、さらに先（ウ）はまた何も見えません。', add: [...kettle(), ...m('ア：見えない　イ：白い')] },
  { note: '❓アには何があるのでしょう。水は、わくと目に見えない気体の水蒸気になります。注ぎ口のすぐそばは、まだ温かい水蒸気です。(1) 水蒸気。', add: [ar(100, 90, 126, 76, C.blue), lb(150, 104, '水蒸気（気体）', 11, C.blue, 'start', true), ...m('(1) 水蒸気（見えない）', C.blue, FILL.blue)] },
  { note: '❓イの白いものは何でしょう。水蒸気は、空気に冷やされると、小さな水のつぶ（液体）にもどります。この水のつぶがたくさん集まって、白く見えます。', add: [ci(172, 50, 5, undefined, C.gray, '#FFFFFF'), ci(184, 44, 5, undefined, C.gray, '#FFFFFF'), ci(196, 52, 5, undefined, C.gray, '#FFFFFF'), ci(180, 58, 5, undefined, C.gray, '#FFFFFF'), ci(192, 60, 5, undefined, C.gray, '#FFFFFF'), ...m('冷やされて水のつぶ', C.gray, FILL.gray)] },
  { note: '(2) 白く見える湯気の正体は、水蒸気ではなく、小さな水のつぶ（液体の水）です。', add: fresh(bx(20, 24, 280, 36, '水蒸気＝気体（見えない）', C.blue, FILL.blue, 14), bx(20, 74, 280, 36, '湯気＝水のつぶ（白い）', C.gray, FILL.gray, 14), ...m('(2) 小さな水のつぶ', C.green, FILL.green)) },
  { note: '❓ウで見えなくなるのはなぜでしょう。水のつぶは、まわりの空気にあたためられ、広がって、また蒸発して水蒸気にもどるからです。', add: fresh(...kettle(), ar(210, 50, 252, 40, C.blue, true), lb(210, 100, '水のつぶ→水蒸気', 11, C.blue, 'start', true), ...m('蒸発して見えなくなる', C.blue, FILL.blue)) },
  { note: '(3) 水のつぶが、空気中で水蒸気になった（蒸発した）からです。', add: m('(3) 蒸発して水蒸気に', C.green, FILL.green) },
  { note: '確かめます。冬にはく息が白く見えるのも同じです。見えない水蒸気が冷たい空気で冷やされて、水のつぶになります。注ぎ口のすぐそばが見えないのが、水蒸気のあるところです。', add: m('見えない＝水蒸気', C.green, FILL.green) },
], '答え：(1) 水蒸気 (2) 小さな水のつぶ (3) 蒸発して水蒸気になった');

// c18 水の沸とう
const axes = (): DiagramElement[] => [
  ln(40, 150, 40, 20, C.ink, false, 2), ln(40, 150, 296, 150, C.ink, false, 2),
  lb(30, 154, '0', 10, C.ink, 'end'), lb(30, 44, '100', 10, C.ink, 'end'), lb(32, 132, '20', 10, C.ink, 'end'), lb(40, 14, '℃', 10, C.ink, 'middle'),
  lb(218, 164, '10', 10, C.ink, 'middle'), lb(298, 164, '分', 10, C.ink, 'middle'),
];
const gx = (t: number) => 40 + t * 17.86;
const gy = (T: number) => 150 - T * 1.1;
const seg = (t0: number, T0: number, t1: number, T1: number, color: string = C.red): DiagramElement[] => [ln(gx(t0), gy(T0), gx(t1), gy(T1), color, false, 3), ci(gx(t1), gy(T1), 3, undefined, color, color)];
const c18 = show([
  { note: '水100gを一定の強さの火で加熱して、2分ごとに温度をはかります。横が加熱時間（分）、たてが温度（℃）のグラフにします。', add: [...axes(), ci(gx(0), gy(20), 3, undefined, C.red, C.red), ...m('時間と温度のグラフ')] },
  { note: '0分から2分ごとに、20・36・52・68・84℃と、16℃ずつ上がります。', add: [...seg(0, 20, 2, 36), ...seg(2, 36, 4, 52), ...seg(4, 52, 6, 68), ...seg(6, 68, 8, 84), ...m('2分で16℃ずつ上がる')] },
  { note: '❓いつ100℃になるのでしょう。20℃から100℃までは80℃で、80÷16＝5回、5×2＝10分かかります。10分で100℃になります。', add: [...seg(8, 84, 10, 100), ln(gx(10), 150, gx(10), gy(100), C.gray, true, 2), ...m('10分で100℃')] },
  { note: '(1) 100℃になって、沸とうし始めたのは、10分後です。', add: [...frame(gx(10) - 10, gy(100) - 12, 24, 24, C.green), ...m('(1) 10分後', C.green, FILL.green)] },
  { note: '❓沸とう中は、どうなるのでしょう。10分・12分・14分は、すべて100℃です。沸とうしているあいだは、熱が水を水蒸気に変えるために使われ、温度は上がりません。', add: [...seg(10, 100, 12, 100), ...seg(12, 100, 14, 100), ...m('沸とう中は温度が一定')] },
  { note: '(2) 12分のとき、火を2倍に強くしても、熱が水蒸気に変わる速さがふえるだけです。温度は100℃のままです。(3) 沸とう中の大きなあわは、水蒸気です。', add: [ci(gx(11), gy(100) - 14, 4, undefined, C.blue, '#FFFFFF'), ci(gx(12.4), gy(100) - 24, 5, undefined, C.blue, '#FFFFFF'), ci(gx(13.2), gy(100) - 12, 4, undefined, C.blue, '#FFFFFF'), ...m('(2) 100℃のまま (3) 水蒸気', C.green, FILL.green)] },
  { note: '確かめます。表の10分・12分・14分はすべて100℃で、変化がありません。火の強さにかかわらず、沸とう中の水の温度は変わらないことと一致します。', add: m('沸とう中は変わらない', C.green, FILL.green) },
], '答え：(1) 10分後 (2) 100℃のまま (3) 水蒸気');

// c19 蒸発と結晶（1gを1px）
const bars = (): DiagramElement[] => [
  rect(20, 30, 200, 26, C.blue, FILL.blue), lb(120, 48, '水200g', 12, C.blue, 'middle', true),
  rect(20, 76, 60, 26, C.main, FILL.warm), lb(50, 94, 'X 60g', 12, C.main, 'middle', true),
];
const c19 = show([
  { note: '物質Xは、20℃の水100gに30gまでとけます。20℃の水200gにXをとけるだけとかした、飽和水溶液をつくります。', add: [...bars(), ...m('水200gにX 60gとけた')] },
  { note: '❓Xは何gとけているのでしょう。水100gに30gなので、水200gには、30×2＝60gです。', add: [lb(250, 94, '30×2＝60g', 11, C.main, 'start', true), ...m('とけているX＝60g')] },
  { note: '(1) 温度は20℃のまま、水を50g蒸発させます。', add: fresh(...bars(), rect(170, 30, 50, 26, C.red, FILL.red), lb(195, 48, '蒸発50g', 10, C.red, 'middle', true), ...m('水50gが蒸発')) },
  { note: '❓なぜ結晶ができるのでしょう。蒸発した水50gにとけていたXが、行き場がなくなって、結晶になります。水50gには、30÷2＝15gがとけていました。', add: [rect(65, 76, 15, 26, C.red, FILL.red), lb(150, 94, '結晶15g', 12, C.red, 'start', true), ...m('(1) 15g', C.green, FILL.green)] },
  { note: '(2) 水が80gになるまで蒸発させます。蒸発する水は、200−80＝120gです。', add: fresh(...bars(), rect(100, 30, 120, 26, C.red, FILL.red), lb(160, 48, '蒸発120g', 11, C.red, 'middle', true), ...m('蒸発する水＝120g')) },
  { note: '水120gにとけていたXは、30×120÷100＝36g。これが結晶になります。(2) 36g。', add: [rect(44, 76, 36, 26, C.red, FILL.red), lb(130, 94, '結晶36g', 12, C.red, 'start', true), ...m('(2) 36g', C.green, FILL.green)] },
  { note: '確かめます。残った水80gには、30×80÷100＝24gがとけたまま。もとの60gから24gをひくと、結晶は60−24＝36gで、一致しています。', add: m('60−24＝36g', C.green, FILL.green) },
], '答え：(1) 15g (2) 36g');

// c20 金属の見分け
const grid = (): DiagramElement[] => [
  bx(48, 6, 120, 34, 'うすい塩酸', C.ink, FILL.gray, 12), bx(172, 6, 140, 34, '水酸化ナトリウム\n水よう液', C.ink, FILL.gray, 11),
  bx(6, 44, 38, 32, 'ア', C.ink, FILL.gray, 13), bx(6, 80, 38, 32, 'イ', C.ink, FILL.gray, 13), bx(6, 116, 38, 32, 'ウ', C.ink, FILL.gray, 13),
];
const cell = (col: number, row: number, text: string, color: string, fill: string): DiagramElement =>
  bx(col === 0 ? 48 : 172, 44 + row * 36, col === 0 ? 120 : 140, 32, text, color, fill, 11);
const c20 = show([
  { note: '鉄・アルミニウム・銅の粉が、ア・イ・ウに1種類ずつ入っています。うすい塩酸と水酸化ナトリウム水よう液に入れた結果を表にします。', add: [...grid(), cell(0, 0, 'あわを出してとけた', C.green, FILL.green), cell(1, 0, '変化なし', C.gray, FILL.gray), cell(0, 1, 'あわを出してとけた', C.green, FILL.green), cell(1, 1, 'あわを出してとけた', C.green, FILL.green), cell(0, 2, '変化なし', C.gray, FILL.gray), cell(1, 2, '変化なし', C.gray, FILL.gray), ...m('結果の表')] },
  { note: '❓まず、どれがわかるでしょう。ウは、どちらにもとけないので、銅です。', add: [...frame(4, 114, 310, 36, C.red), ...m('ウ＝どちらにもとけない→銅', C.red, FILL.red)] },
  { note: '❓次に、イはどうでしょう。塩酸にも水酸化ナトリウム水よう液にもとけるのは、アルミニウムだけです。イはアルミニウムです。', add: [...frame(4, 78, 310, 36, C.blue), ...m('イ＝両方にとける→アルミニウム', C.blue, FILL.blue)] },
  { note: 'アは、塩酸にだけとけるので、鉄です。(1) ア：鉄、イ：アルミニウム、ウ：銅。', add: [...frame(4, 42, 310, 36, C.green), ...m('ア＝塩酸だけ→鉄', C.green, FILL.green)] },
  { note: '(2) 金属が塩酸にとけるとき、あわとして出る気体は水素です。火を近づけると、ポンと音を立てて燃えます。', add: fresh(bx(20, 24, 280, 40, '金属＋塩酸→水素が出る', C.main, FILL.warm, 15), bx(20, 78, 280, 36, '火を近づけるとポンと燃える', C.main, FILL.warm, 13), ...m('(2) 水素', C.green, FILL.green)) },
  { note: '❓(3) 鉄を塩酸にとかして、水を蒸発させると、何が残るのでしょう。もとの鉄とは別の物質です。鉄ではなくなっているので、磁石につきません。', add: fresh(bx(20, 24, 280, 36, '鉄＋塩酸→別の物質', C.main, FILL.warm, 15), bx(20, 74, 280, 36, '蒸発して残る固体', C.main, FILL.warm, 15), ...m('(3) 磁石につかない', C.green, FILL.green)) },
  { note: '確かめます。「とけた」の数は、鉄が1つ、アルミニウムが2つ、銅が0個で、3つを区別できます。よくあるまちがいは、塩酸にとけたアとイをどちらもアルミニウムとすることです。', add: m('とけた数 鉄1・アル2・銅0', C.green, FILL.green) },
], '答え：(1) ア鉄・イアルミニウム・ウ銅 (2) 水素 (3) つかない');

// c21 クロマトグラフィー
const strip = (): DiagramElement[] => [
  rect(130, 14, 50, 130, C.ink, '#FAFAF5'), rect(100, 120, 110, 30, C.blue, FILL.blue), lb(155, 142, '水', 11, C.blue, 'middle', true),
  ci(155, 104, 5, undefined, C.ink, C.ink),
];
const c21 = show([
  { note: '黒いインクの水性ペンで、ろ紙の下のほうに点をうちます。点が水面より上になるようにして、ろ紙の下はしを水につけます。', add: [...strip(), lb(205, 108, '点', 11, C.ink, 'start', true), ...m('点は水面より上')] },
  { note: '❓どうなるのでしょう。水が、ろ紙をじわじわとのぼっていきます。水はインクをふくんだ点に達して、インクをいっしょに運びます。', add: [ar(155, 96, 155, 70, C.blue), ar(140, 96, 140, 80, C.blue), ar(170, 96, 170, 80, C.blue), ...m('水が上へのぼる', C.blue, FILL.blue)] },
  { note: '色が、青・赤・黄の3つに分かれました。黄色がいちばん上まで進み、青色は点の近くにとどまりました。', add: fresh(...strip(), ci(155, 40, 6, undefined, '#CA8A04', '#FACC15'), ci(155, 72, 6, undefined, C.red, '#FB7185'), ci(155, 98, 6, undefined, C.blue, '#38BDF8'), lb(205, 44, '黄', 12, '#CA8A04', 'start', true), lb(205, 76, '赤', 12, C.red, 'start', true), lb(205, 102, '青', 12, C.blue, 'start', true), ...m('黄が上・青が下')) },
  { note: '❓黒インクは何でできているのでしょう。1つの点から3つの色が出てきたので、もともと青・赤・黄の3つの色が混ざっていたとわかります。色が変わったのではありません。', add: fresh(bx(20, 24, 280, 36, '黒インク', C.ink, FILL.gray, 15), bx(20, 74, 280, 36, '青・赤・黄の混ざり', C.main, FILL.warm, 15), ...m('混ざった色が分かれた')) },
  { note: '❓なぜ分かれるのでしょう。色によって、水へのとけやすさと、紙へのくっつきやすさがちがうからです。水にとけやすく、紙にくっつきにくい色ほど、水といっしょに速く進みます。', add: fresh(bx(20, 24, 280, 36, '黄：とけやすい・速い', C.main, FILL.warm, 14), bx(20, 74, 280, 36, '青：くっつきやすい・遅い', C.blue, FILL.blue, 14), ...m('遠くへ進む＝とけやすい')) },
  { note: '❓点を水面より下にしずめると、どうなるのでしょう。インクが水にとけ出して、ろ紙をのぼる前に、水の中に広がってしまい、きれいに分かれません。', add: fresh(rect(130, 14, 50, 130, C.ink, '#FAFAF5'), rect(100, 90, 110, 56, C.blue, FILL.blue), ci(155, 110, 5, undefined, C.ink, C.ink), lb(205, 112, '点', 11, C.red, 'start', true), ...m('点をしずめるのは×', C.red, FILL.red)) },
  { note: '答えは「黒インクは、青・赤・黄が混ざったもので、水にとけやすく紙にくっつきにくい色ほど速く進む」です。確かめ：黄色がいちばん上で、青色が点の近くという結果と合っています。', add: m('ペーパークロマトグラフィー', C.green, FILL.green) },
], '答え：混ざった色が分かれ、とけやすい色ほど速く進む');

// c22 ろうの液体と固体
const c22 = show([
  { note: 'ろうそくのろうを、あたためて液体にしました。体積は90cm³、重さは72gです。', add: [rect(20, 40, 180, 40, C.red, FILL.red), lb(110, 66, '液体 90cm³・72g', 13, C.ink, 'middle', true), ...m('液体：90cm³・72g')] },
  { note: '冷やして固体にもどすと、重さは72gのまま、体積は80cm³になりました。', add: [rect(20, 100, 160, 40, C.blue, FILL.blue), lb(100, 126, '固体 80cm³・72g', 13, C.ink, 'middle', true), ...m('固体：80cm³・72g')] },
  { note: '(1) 液体のろう1cm³あたりの重さは、72÷90＝0.8gです。', add: fresh(bx(20, 30, 280, 44, '液体　72÷90＝0.8g', C.red, FILL.red, 17), ...m('(1) 0.8g', C.green, FILL.green)) },
  { note: '❓なぜ浮き沈みが決まるのでしょう。同じ体積で重いほうが、しずみます。固体のろう1cm³あたりは、72÷80＝0.9gで、液体の0.8gより重いです。', add: fresh(bx(20, 24, 280, 36, '固体　72÷80＝0.9g', C.blue, FILL.blue, 16), bx(20, 74, 280, 36, '0.9g ＞ 0.8g', C.main, FILL.warm, 17), ...m('固体のほうが重い')) },
  { note: '(2) だから、固体のろうの小さなかたまりは、液体のろうの中で、しずみます。', add: fresh(ln(80, 20, 80, 130, C.ink, false, 3), ln(240, 20, 240, 130, C.ink, false, 3), ln(80, 130, 240, 130, C.ink, false, 3), rect(81, 50, 158, 79, C.red, FILL.red), rect(150, 100, 20, 28, C.blue, FILL.blue), ar(160, 66, 160, 94, C.blue), ...m('(2) しずむ', C.green, FILL.green)) },
  { note: '❓(3) 液体のろうを容器に入れて冷やすと、どうなるでしょう。外側から先に固まり、内側はあとで固まります。固まると体積が小さくなるので、表面のまん中がへこみます。', add: fresh(ln(80, 20, 80, 130, C.ink, false, 3), ln(240, 20, 240, 130, C.ink, false, 3), ln(80, 130, 240, 130, C.ink, false, 3), pg([[81, 50], [120, 50], [160, 70], [200, 50], [239, 50], [239, 129], [81, 129]], C.blue, FILL.blue), lb(160, 44, 'へこむ', 11, C.red, 'middle', true), ...m('(3) へこむ', C.green, FILL.green)) },
  { note: '確かめます。体積が90cm³から80cm³へ10cm³へったので、固まると表面がへこむという (3) と一致します。水は例外で、氷になると体積がふえて、水に浮きます。', add: m('ふつうの物質は縮む', C.green, FILL.green) },
], '答え：(1) 0.8g (2) しずむ (3) へこむ');

// c23 メスシリンダー（0cm³＝y145、1cm³＝1.3px）
const cy = (v: number) => 145 - v * 1.3;
const cylinder = (): DiagramElement[] => [
  ln(130, 15, 130, 145, C.ink, false, 3), ln(170, 15, 170, 145, C.ink, false, 3), ln(130, 145, 170, 145, C.ink, false, 3),
  ln(130, cy(40), 138, cy(40), C.ink, false, 1.5),
  lb(124, cy(40) + 4, '40', 10, C.ink, 'end'),
];
const c23 = show([
  { note: '最小目盛り1cm³のメスシリンダーに水を入れ、水面を読むと40cm³でした。', add: [...cylinder(), rect(131, cy(40), 38, 144 - cy(40), C.blue, FILL.blue), ...m('水面は40cm³')] },
  { note: '❓(1) 水面は、どこを、どう読むのでしょう。水面は、まん中がへこんで見えます。目を水面と同じ高さにして、へこんだいちばん低い所を読みます。目が上下にずれると、読みちがえます。', add: [ar(60, cy(40), 124, cy(40), C.red), lb(56, cy(40) + 4, '目', 12, C.red, 'end', true), ...m('(1) 真横から、へこんだ所', C.red, FILL.red)] },
  { note: '重さ66gの石を静かに入れると、石は水の中にしずみ、水面が62cm³になりました。', add: fresh(...cylinder(), lb(124, cy(62) + 4, '62', 10, C.red, 'end', true), rect(131, cy(62), 38, 144 - cy(62), C.blue, FILL.blue), disc(150, 136, 8, C.ink, FILL.gray), ...m('水面は62cm³に')) },
  { note: '❓なぜ石の体積がわかるのでしょう。しずんだ石は、自分の体積と同じ体積の水をおしのけるので、水面は、石の体積のぶん上がります。(2) 62−40＝22cm³です。', add: fresh(bx(20, 24, 280, 36, '上がった分＝石の体積', C.main, FILL.warm, 15), bx(20, 74, 280, 36, '62−40＝22cm³', C.red, FILL.red, 17), ...m('(2) 22cm³', C.green, FILL.green)) },
  { note: '(3) この石の1cm³あたりの重さは、66÷22＝3gです。', add: fresh(bx(20, 30, 280, 44, '66÷22＝3g（1cm³あたり）', C.blue, FILL.blue, 15), ...m('1cm³あたり3g', C.blue, FILL.blue)) },
  { note: '❓なぜ重さがわかるのでしょう。同じ種類の石は、1cm³あたりの重さが同じなので、重さは体積に比例します。150cm³なら、3×150＝450gです。(3) 450g。', add: fresh(bx(20, 30, 280, 44, '3×150＝450g', C.red, FILL.red, 18), ...m('(3) 450g', C.green, FILL.green)) },
  { note: '確かめます。体積が22cm³から150cm³になると、重さも同じ倍率で、66×150÷22＝450gになります。よくあるまちがいは、62cm³をそのまま石の体積にすることです。', add: m('66×150÷22＝450で一致', C.green, FILL.green) },
], '答え：(1) 真横からへこんだ所 (2) 22cm³ (3) 450g');

// c24 酸素の割合（1000cm³＝280px）
const bar = (ox: number): DiagramElement[] => {
  const w1 = (ox / 1000) * 280, w2 = 280 - w1;
  return [rect(20, 40, w1, 30, C.blue, FILL.blue), rect(20 + w1, 40, w2, 30, C.gray, FILL.gray), ln(20, 36, 300, 36, C.ink, false, 1.5)];
};
const c24 = show([
  { note: '容積1000cm³の集気びんに水を入れ、水上置換法で酸素を途中まで集めます。水があった部分には、あとで空気を入れます。空気の5分の1（20％）が酸素です。', add: [rect(20, 40, 280, 30, C.ink, FILL.gray), lb(160, 58, 'びん全体 1000cm³', 12, C.ink, 'middle', true), ...m('空気の20％が酸素')] },
  { note: '(1) 水を500cm³おし出して、酸素を集めました。びんの半分に酸素、残りの半分に空気が入ります。', add: fresh(...bar(500), lb(90, 60, '酸素500', 12, C.blue, 'middle', true), lb(230, 60, '空気500', 12, C.ink, 'middle', true), ...m('酸素500＋空気500')) },
  { note: '❓空気の部分にも酸素はあるのでしょうか。あります。空気500cm³の5分の1は、500÷5＝100cm³の酸素です。', add: [rect(160, 76, 28, 24, C.blue, FILL.blue), lb(200, 94, '空気中の酸素100', 11, C.blue, 'start', true), ...m('空気の中に酸素100')] },
  { note: '酸素の合計は、集めた500＋空気の中の100＝600cm³。全体の体積は1000cm³なので、600÷1000＝0.6、つまり60％です。(1) 60％。', add: fresh(bx(20, 24, 280, 36, '500＋100＝600cm³', C.red, FILL.red, 16), bx(20, 74, 280, 36, '600÷1000＝60％', C.red, FILL.red, 16), ...m('(1) 60％', C.green, FILL.green)) },
  { note: '❓(2) 52％にするには、どう考えるのでしょう。酸素を集めた部分をびんの□分の（全体を1とする）とすると、空気の部分は1−□です。□＋(1−□)×0.2＝0.52です。', add: fresh(bx(20, 24, 280, 36, '□＋(1−□)×0.2＝0.52', C.main, FILL.warm, 15), bx(20, 74, 280, 36, '□＋0.2−0.2×□＝0.52', C.main, FILL.warm, 15), ...m('酸素の割合を式にする')) },
  { note: '□のぶんは1−0.2＝0.8倍で、0.8×□＝0.52−0.2＝0.32。□＝0.32÷0.8＝0.4＝5分の2です。(2) 5分の2。', add: fresh(bx(20, 24, 280, 36, '0.8×□＝0.32', C.red, FILL.red, 16), bx(20, 74, 280, 36, '□＝0.32÷0.8＝5分の2', C.red, FILL.red, 15), ...m('(2) 5分の2', C.green, FILL.green)) },
  { note: '確かめます。5分の2は400cm³。酸素400cm³と、空気600cm³の中の酸素120cm³で、合計520cm³。520÷1000＝52％で、一致しています。', add: fresh(...bar(400), lb(76, 60, '酸素400', 12, C.blue, 'middle', true), lb(204, 60, '空気600', 12, C.ink, 'middle', true), ...m('400＋120＝520→52％', C.green, FILL.green)) },
], '答え：(1) 60％ (2) 5分の2');

// c25 アンモニアのふんすい
const fountain = (dots: number): DiagramElement[] => [
  disc(110, 90, 40, C.ink, '#FFFFFF'),
  ln(240, 150, 240, 12, C.ink, false, 3), ln(240, 12, 110, 12, C.ink, false, 3), ln(110, 12, 110, 70, C.ink, false, 3),
  rect(190, 140, 110, 26, C.green, FILL.green), lb(245, 158, 'BTB液（緑）', 11, C.green, 'middle', true),
  ...Array.from({ length: dots }, (_, i) => ci(88 + (i % 4) * 14, 82 + Math.floor(i / 4) * 14, 3, undefined, C.main, FILL.warm)),
];
const c25 = show([
  { note: 'かわいたフラスコにアンモニアを集め、ガラス管をとおしたゴム栓でふたをします。ガラス管の先を、BTB液を加えた緑色の水に入れます。', add: [...fountain(12), lb(110, 142, 'フラスコ', 11, C.ink, 'middle', true), ...m('アンモニアが入っている')] },
  { note: '管の途中のスポイトの水を、フラスコの中におしこみます。', add: [ar(125, 30, 112, 52, C.blue), ...m('少しの水をおしこむ', C.blue, FILL.blue)] },
  { note: '❓アンモニアはどうなるのでしょう。アンモニアは水に非常によくとけます。水におしこんだとたん、フラスコの中のアンモニアが、いっきに水にとけます。', add: fresh(...fountain(2), lb(110, 142, 'フラスコ', 11, C.ink, 'middle', true), ...m('気体がへる', C.blue, FILL.blue)) },
  { note: '❓フラスコの中は、どうなるのでしょう。気体が少なくなって、中の空気が少ない状態になります。外の空気は、水そうの水面をおしています。', add: [ar(215, 120, 215, 138, C.red), ar(265, 120, 265, 138, C.red), lb(240, 112, '外の空気が押す', 10, C.red, 'middle', true), ...m('外の空気が水をおす', C.red, FILL.red)] },
  { note: '水そうの水が、ガラス管を通って、フラスコの中に押しこまれ、ふんすいのように吹き上がります。', add: fresh(...fountain(2), ar(110, 66, 110, 36, C.blue), ar(104, 66, 92, 44, C.blue), ar(116, 66, 128, 44, C.blue), ...m('ふんすいが起こる', C.blue, FILL.blue)) },
  { note: '❓水の色はなぜ変わるのでしょう。アンモニアが水にとけた液は、アルカリ性です。BTB液は、アルカリ性で青色になります。', add: fresh(bx(20, 24, 280, 36, 'アンモニア水＝アルカリ性', C.main, FILL.warm, 14), bx(20, 74, 280, 36, 'BTB液　アルカリ性＝青', C.blue, FILL.blue, 14), ...m('ふんすいの水は青色', C.blue, FILL.blue)) },
  { note: '答えは「青色：アンモニアが水にたくさんとけて、フラスコの中の気体が少なくなり、外の空気が水をおしこむから」です。確かめ：水にとけにくい気体では、この実験は成功しません。', add: m('青色・気体がへるから', C.green, FILL.green) },
], '答え：青色。気体がへり、外の空気が水をおしこむ');

export const figuresHonshiken202701RikaChugaku1: Record<string, Figure> = {
  honshiken_2027_01_rika_c01: c01,
  honshiken_2027_01_rika_c02: c02,
  honshiken_2027_01_rika_c03: c03,
  honshiken_2027_01_rika_c04: c04,
  honshiken_2027_01_rika_c05: c05,
  honshiken_2027_01_rika_c06: c06,
  honshiken_2027_01_rika_c07: c07,
  honshiken_2027_01_rika_c08: c08,
  honshiken_2027_01_rika_c09: c09,
  honshiken_2027_01_rika_c10: c10,
  honshiken_2027_01_rika_c11: c11,
  honshiken_2027_01_rika_c12: c12,
  honshiken_2027_01_rika_c13: c13,
  honshiken_2027_01_rika_c14: c14,
  honshiken_2027_01_rika_c15: c15,
  honshiken_2027_01_rika_c16: c16,
  honshiken_2027_01_rika_c17: c17,
  honshiken_2027_01_rika_c18: c18,
  honshiken_2027_01_rika_c19: c19,
  honshiken_2027_01_rika_c20: c20,
  honshiken_2027_01_rika_c21: c21,
  honshiken_2027_01_rika_c22: c22,
  honshiken_2027_01_rika_c23: c23,
  honshiken_2027_01_rika_c24: c24,
  honshiken_2027_01_rika_c25: c25,
};
