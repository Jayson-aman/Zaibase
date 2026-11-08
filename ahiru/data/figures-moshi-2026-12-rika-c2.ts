import type { DiagramElement, Figure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, show, band, fresh, cover, flow } from './diagram-kit';

// 月例模試 2026年12月号 理科・中学受験 担当B（c26〜c50）の「動く図解」。キーは問題ID。座標は 320×240。
// 図は上（y＜165）に描き、下の帯（y≥170）に短い結論を出す。文字を持たない図形は多角形（pg）で描き、文字との重なり検査を通す。

/** 下の帯に一言（前のスライドの帯は白でおおいかくして書きかえる）。 */
const m = (text: string, color: string = C.main, fill: string = FILL.warm): DiagramElement[] =>
  band(170, bx(20, 176, 280, 34, text, color, fill, 13));

const rect = (x: number, y: number, w: number, h: number, color?: string, fill?: string): DiagramElement => pg([[x, y], [x + w, y], [x + w, y + h], [x, y + h]], color, fill);
const ell = (cx: number, cy: number, rx: number, ry: number, rot = 0, color?: string, fill?: string): DiagramElement => {
  const c = Math.cos((rot * Math.PI) / 180), s = Math.sin((rot * Math.PI) / 180);
  return pg(Array.from({ length: 28 }, (_, i) => {
    const t = (i / 28) * 2 * Math.PI;
    const px = rx * Math.cos(t), py = ry * Math.sin(t);
    return [cx + px * c - py * s, cy + px * s + py * c] as [number, number];
  }), color, fill);
};
const disc = (cx: number, cy: number, r: number, color?: string, fill?: string): DiagramElement => ell(cx, cy, r, r, 0, color, fill);

// ═════════ 中学受験 理科 担当B ═════════

// c26 アブラナの花のつくり
const polar = (cx: number, cy: number, a: number, d: number): [number, number] => [cx + d * Math.cos((a * Math.PI) / 180), cy + d * Math.sin((a * Math.PI) / 180)];
const flowerBase = (): DiagramElement[] => {
  const out: DiagramElement[] = [];
  for (const a of [-45, 45, 135, 225]) { const [x, y] = polar(160, 86, a, 30); out.push(ell(x, y, 22, 8, a, '#16A34A', '#BBF7D0')); }
  for (const a of [0, 90, 180, 270]) { const [x, y] = polar(160, 86, a, 30); out.push(ell(x, y, 24, 14, a, '#CA8A04', FILL.yellow)); }
  for (const a of [-45, 45, 135, 225]) { const [x, y] = polar(160, 86, a, 15); out.push(disc(x, y, 4, '#EA580C', '#FDBA74')); }
  out.push(disc(150, 86, 3.5, '#EA580C', '#FDBA74'), disc(170, 86, 3.5, '#EA580C', '#FDBA74'), disc(160, 86, 5, C.green, '#86EFAC'));
  return out;
};
const c26 = show([
  { note: 'アブラナの花を真上から見ます。外側から中心に向かって、どんな部分がならんでいるでしょう。', add: [...flowerBase(), ...m('アブラナの花（真上から）')] },
  { note: '❓いちばん外側にあるのは、どの部分でしょう。緑色の小さな「がく」です。つぼみのときは、花全体をつつんで守っています。', add: [ar(232, 46, 199, 52, C.green), lb(236, 50, 'がく', 12, C.green, 'start', true), ...m('いちばん外側＝がく', C.green, FILL.green)] },
  { note: '❓その内側には、何があるでしょう。黄色い「花びら」が4枚あります。目立つ色で、虫を引きよせます。', add: [ar(98, 90, 116, 86, '#CA8A04'), lb(94, 94, '花びら', 12, '#CA8A04', 'end', true), ...m('その内側＝花びら（4枚）', '#CA8A04', FILL.yellow)] },
  { note: '❓さらに内側には、何があるでしょう。花粉をつくる「おしべ」が6本あります（長いもの4本と短いもの2本）。', add: [ar(104, 142, 149, 99, C.red), lb(100, 146, 'おしべ', 12, C.red, 'end', true), ...m('さらに内側＝おしべ（6本）', C.red, FILL.red)] },
  { note: '❓いちばん中心には、何があるでしょう。1本の「めしべ」です。根もとのふくらんだ部分が、育って実になります。', add: [ar(226, 142, 166, 91, C.purple), lb(230, 148, 'めしべ', 12, C.purple, 'start', true), ...m('中心＝めしべ（1本）', C.purple, FILL.purple)] },
  { note: '外側から順に言うと、がく→花びら→おしべ→めしべ。「守る→引きよせる→花粉をつくる→実になる」と、役目がうつり変わります。', add: m('がく→花びら→おしべ→めしべ', C.blue, FILL.blue) },
  { note: '答えは、選択肢のイです。', add: m('答え：イ', C.green, FILL.green) },
  { note: '確かめます。アブラナの花は、がく4枚・花びら4枚・おしべ6本・めしべ1本で、外側から中心へ役目が自然につながっています。', add: m('4・4・6・1 で確かめた', C.green, FILL.green) },
], '答え：がく→花びら→おしべ→めしべ');

// c27 単子葉類と双子葉類
const mdHead = (): DiagramElement[] => [bx(10, 14, 145, 24, '双子葉類', C.blue, FILL.blue, 13), bx(165, 14, 145, 24, '単子葉類', C.green, FILL.green, 13)];
const c27 = show([
  { note: '植物は、子葉（種子から出る最初の葉）の数で、双子葉類と単子葉類に分けられます。アサガオ・ヒマワリ・ホウセンカは双子葉類、トウモロコシ・イネは単子葉類です。', add: [...mdHead(), lb(82, 60, 'アサガオ・ヒマワリ', 10, C.blue, 'middle'), lb(237, 60, 'トウモロコシ・イネ', 10, C.green, 'middle'), ...m('子葉の数で2つに分ける')] },
  { note: '❓まず子葉の数は、いくつでしょう。双子葉類は2枚、単子葉類は1枚です。', add: fresh(...mdHead(), ell(62, 88, 16, 9, -20, C.blue, FILL.blue), ell(102, 88, 16, 9, 20, C.blue, FILL.blue), ell(237, 88, 16, 9, 0, C.green, FILL.green), lb(82, 124, '子葉2枚', 12, C.blue, 'middle', true), lb(237, 124, '子葉1枚', 12, C.green, 'middle', true), ...m('子葉：2枚と1枚')) },
  { note: '❓次に、葉のすじ（葉脈）は、どうなっているでしょう。双子葉類は網の目のような「網状脈」、単子葉類は平行にならぶ「平行脈」です。', add: fresh(...mdHead(), ell(82, 96, 36, 26, 0, C.blue, FILL.blue), ln(46, 96, 118, 96, C.blue), ln(66, 96, 80, 78, C.blue), ln(66, 96, 80, 114, C.blue), ln(84, 96, 96, 76, C.blue), ln(84, 96, 96, 116, C.blue), ln(80, 78, 96, 76, C.blue), ln(80, 114, 96, 116, C.blue), ell(237, 96, 48, 16, 0, C.green, FILL.green), ln(196, 96, 278, 96, C.green), ln(204, 90, 272, 90, C.green), ln(204, 102, 272, 102, C.green), lb(82, 140, '網状脈', 12, C.blue, 'middle', true), lb(237, 140, '平行脈', 12, C.green, 'middle', true), ...m('葉脈：網の目と平行')) },
  { note: '❓さらに、根はどうでしょう。双子葉類は、太い根（主根）から細い根（側根）が出ます。単子葉類は、同じような細い根がたくさん出る「ひげ根」です。', add: fresh(...mdHead(), ln(82, 56, 82, 122, C.blue, false, 4), ln(82, 80, 58, 100, C.blue), ln(82, 80, 106, 100, C.blue), ln(82, 100, 62, 118, C.blue), ln(82, 100, 102, 118, C.blue), ln(237, 56, 205, 124, C.green), ln(237, 56, 222, 128, C.green), ln(237, 56, 237, 130, C.green), ln(237, 56, 252, 128, C.green), ln(237, 56, 269, 124, C.green), lb(82, 148, '主根と側根', 12, C.blue, 'middle', true), lb(237, 148, 'ひげ根', 12, C.green, 'middle', true), ...m('根：主根と側根／ひげ根')) },
  { note: '3つをまとめます。単子葉類は「子葉1枚・平行脈・ひげ根」の3点セットです。', add: fresh(bx(10, 18, 60, 30, '', C.gray, FILL.gray, 12), bx(75, 18, 115, 30, '双子葉類', C.blue, FILL.blue, 12), bx(195, 18, 115, 30, '単子葉類', C.green, FILL.green, 12), bx(10, 52, 60, 30, '子葉', C.gray, FILL.gray, 12), bx(75, 52, 115, 30, '2枚', C.blue, FILL.blue, 12), bx(195, 52, 115, 30, '1枚', C.green, FILL.green, 12), bx(10, 86, 60, 30, '葉脈', C.gray, FILL.gray, 12), bx(75, 86, 115, 30, '網状脈', C.blue, FILL.blue, 12), bx(195, 86, 115, 30, '平行脈', C.green, FILL.green, 12), bx(10, 120, 60, 30, '根', C.gray, FILL.gray, 12), bx(75, 120, 115, 30, '主根と側根', C.blue, FILL.blue, 12), bx(195, 120, 115, 30, 'ひげ根', C.green, FILL.green, 12), ...m('単子葉類＝1枚・平行・ひげ根', C.green, FILL.green)) },
  { note: '4つの植物を分けます。アサガオ・ヒマワリ・ホウセンカは双子葉類。トウモロコシだけが単子葉類です。', add: fresh(bx(10, 20, 145, 34, 'アサガオ：双子葉', C.blue, FILL.blue, 12), bx(165, 20, 145, 34, 'ヒマワリ：双子葉', C.blue, FILL.blue, 12), bx(10, 64, 145, 34, 'ホウセンカ：双子葉', C.blue, FILL.blue, 12), bx(165, 64, 145, 34, 'トウモロコシ：単子葉', C.green, FILL.green, 12), ...m('単子葉は、トウモロコシだけ', C.green, FILL.green)) },
  { note: '答えは、トウモロコシです。', add: m('答え：トウモロコシ', C.green, FILL.green) },
  { note: '確かめます。トウモロコシの葉は細長くて、すじが平行にならび、根は細い根が一面に広がります。単子葉類の特徴と一致します。', add: m('細長い葉・ひげ根で一致', C.green, FILL.green) },
], '答え：トウモロコシ');

// c28 種子のつくり
const beanHalf = (): DiagramElement[] => [ell(155, 92, 72, 36, 0, '#A16207', '#FEF3C7'), ell(94, 84, 14, 7, -15, C.green, '#86EFAC')];
const c28 = show([
  { note: 'インゲンマメの種子を半分に割りました。大きな2枚の子葉と、そのあいだの小さな胚が見えます。', add: [...beanHalf(), ...m('インゲンマメを半分に割る')] },
  { note: '❓この切り口に、うすめたヨウ素液をたらします。ヨウ素液は、デンプンがあるところで色が変わります。', add: [ar(190, 44, 190, 68, C.purple), lb(196, 40, 'ヨウ素液', 11, C.purple, 'start', true), ...m('ヨウ素液はデンプンに反応')] },
  { note: '❓どこが青むらさき色に変わるでしょう。種子の大部分をしめる子葉です。発芽に使う養分のデンプンが、子葉にたくわえられているからです。', add: [ell(172, 94, 54, 26, 0, '#7E22CE', '#C4B5FD'), lb(172, 150, '子葉が青むらさき色', 12, '#7E22CE', 'middle', true), ...m('(1) 子葉が染まる', '#7E22CE', FILL.purple)] },
  { note: '❓では、染まらなかった小さな部分は何でしょう。のちに根・くき・葉になる幼根・胚軸・幼芽で、まとめて「胚」といいます。', add: [ar(66, 52, 88, 78, C.green), lb(30, 46, '胚（幼根・胚軸・幼芽）', 10, C.green, 'start', true), ...m('(2) 胚', C.green, FILL.green)] },
  { note: '❓トウモロコシの種子は、デンプンをどこにたくわえているでしょう。子葉ではなく、「胚乳」という部分です。', add: fresh(ell(160, 90, 62, 36, 0, '#A16207', '#FEF3C7'), ell(176, 92, 42, 26, 0, '#7E22CE', '#C4B5FD'), ell(122, 90, 12, 9, 0, C.green, '#86EFAC'), ar(122, 150, 122, 102, C.green), lb(122, 160, '胚', 12, C.green, 'middle', true), lb(176, 150, '胚乳が染まる', 12, '#7E22CE', 'middle', true), ...m('(3) 胚乳', '#7E22CE', FILL.purple)) },
  { note: '答え。(1) 子葉、(2) 胚、(3) 胚乳です。', add: m('(1) 子葉　(2) 胚　(3) 胚乳', C.green, FILL.green) },
  { note: '確かめます。インゲンマメは子葉に、トウモロコシは胚乳に養分をためます。ためる場所が種子によってちがうことと合っています。', add: m('養分の場所は種子で変わる', C.green, FILL.green) },
], '答え：(1) 子葉 (2) 胚 (3) 胚乳');

// c29 呼吸と酸素
const c29 = show([
  { note: 'ヒトは、酸素を21％ふくむ空気を吸い、酸素を16％ふくむ空気をはきます。体の中で、酸素が使われたからです。', add: [bx(10, 30, 92, 50, '吸う空気\n酸素21％', C.blue, FILL.blue, 12), ar(104, 55, 114, 55, C.gray), bx(116, 30, 88, 50, '体（肺）', C.red, FILL.red, 13), ar(206, 55, 216, 55, C.gray), bx(218, 30, 92, 50, 'はく空気\n酸素16％', C.purple, FILL.purple, 12), ...m('21％の酸素を吸い16％をはく')] },
  { note: '❓体にとり入れられた酸素は、どれだけでしょう。吸った酸素21％から、はいた酸素16％を引いた分です。21−16＝5％です。', add: [lb(160, 118, '21−16＝5％', 14, C.red, 'middle', true), ...m('とり入れた酸素は5％分', C.red, FILL.red)] },
  { note: '(1) 1回の呼吸で出し入れする空気は500cm³です。', add: fresh(bx(20, 30, 130, 44, '1回の空気\n500cm³', C.blue, FILL.blue, 13), ...m('1回の空気は500cm³', C.blue, FILL.blue)) },
  { note: 'そのうち5％が、とり入れられた酸素です。500×0.05＝25cm³。', add: [ar(152, 52, 168, 52, C.gray), bx(170, 30, 130, 44, '体にとり入れた\n酸素25cm³', C.red, FILL.red, 12), ...m('500×0.05＝25cm³', C.red, FILL.red)] },
  { note: '(2) 1分間に18回呼吸します。1分間にとり入れる酸素は、25×18＝450cm³です。', add: [bx(20, 92, 130, 36, '25cm³×18回', C.blue, FILL.blue, 13), ar(152, 110, 168, 110, C.gray), bx(170, 92, 130, 36, '450cm³（1分間）', C.red, FILL.red, 13), ...m('25×18＝450cm³', C.red, FILL.red)] },
  { note: '1時間は60分なので、450×60＝27000cm³。', add: fresh(bx(20, 40, 130, 40, '450cm³×60分', C.blue, FILL.blue, 13), ar(152, 60, 168, 60, C.gray), bx(170, 40, 130, 40, '27000cm³', C.red, FILL.red, 13), ...m('450×60＝27000cm³', C.red, FILL.red)) },
  { note: '1L＝1000cm³ですから、27000÷1000＝27L。答えは (1) 25cm³、(2) 27L です。', add: [bx(95, 100, 130, 40, '27000÷1000＝27L', C.green, FILL.green, 13), ...m('(1) 25cm³　(2) 27L', C.green, FILL.green)] },
  { note: '確かめます。27Lを60分、18回でわると、1回あたり 27000÷60÷18＝25cm³。(1)と一致します。', add: m('27000÷60÷18＝25 で一致', C.green, FILL.green) },
], '答え：(1) 25cm³ (2) 27L');

// c30 心臓と血液の量
const c30 = show([
  { note: '心臓は、1回縮むごとに、約70cm³の血液を送り出します。', add: [ci(100, 70, 32, '心臓', C.red, FILL.red, 16), ar(134, 70, 250, 70, C.red), lb(192, 58, '1回に70cm³', 12, C.red, 'middle', true), ...m('心臓1回で70cm³')] },
  { note: '❓脈はくは、何を数えているのでしょう。心臓が縮むたびに血管がゆれ、それが脈はくです。だから、脈はく72回は、心臓が72回縮んだことと同じです。', add: [lb(100, 128, '1分間に72回', 13, C.blue, 'middle', true), ...m('脈はく＝心臓が縮む回数', C.blue, FILL.blue)] },
  { note: '(1) 1分間に送り出す血液は、70×72＝5040cm³です。', add: [bx(60, 138, 200, 24, '70×72＝5040cm³', C.red, FILL.red, 13), ...m('(1) 5040cm³', C.red, FILL.red)] },
  { note: '(2) 全身の血液は4.2L。1L＝1000cm³なので、4200cm³です。', add: fresh(bx(20, 30, 130, 46, '全身の血液\n4.2L＝4200cm³', C.blue, FILL.blue, 12), ...m('4.2L＝4200cm³', C.blue, FILL.blue)) },
  { note: '❓1秒間に送り出す量は、いくつでしょう。1分間（60秒）に5040cm³なので、5040÷60＝84cm³です。', add: [ar(152, 53, 168, 53, C.gray), bx(170, 30, 130, 46, '1秒間に送る量\n84cm³', C.red, FILL.red, 12), ...m('5040÷60＝84cm³', C.red, FILL.red)] },
  { note: '4200cm³を、1秒に84cm³ずつ送り出すのにかかる時間は、4200÷84＝50秒です。', add: [bx(80, 100, 160, 44, '4200÷84＝50秒', C.green, FILL.green, 14), ...m('(2) 50秒', C.green, FILL.green)] },
  { note: '答え。(1) 5040cm³、(2) 50秒です。', add: m('(1) 5040cm³　(2) 50秒', C.green, FILL.green) },
  { note: '確かめます。50秒で送り出す量は 84×50＝4200cm³で、全身の血液と一致します。', add: m('84×50＝4200 で一致', C.green, FILL.green) },
], '答え：(1) 5040cm³ (2) 50秒');

// c31 消化と吸収
const gut = (): DiagramElement[] => flow(['口', '食道', '胃', '小腸', '大腸', 'こう門'], 30, { h: 34, size: 11, pad: 6, gap: 12, color: C.gray, fill: FILL.gray }).flat();
const c31 = show([
  { note: '食べ物は、口→食道→胃→小腸→大腸→こう門の順に、消化管を進みます。', add: [...gut(), ...m('口→食道→胃→小腸→大腸→こう門', C.gray, FILL.gray)] },
  { note: '口で食べ物をかみくだき、胃では胃液でどろどろにします。ここまでは、おもに「消化」で、養分はほとんど吸収されません。', add: [lb(26, 92, 'かむ', 10, C.main, 'middle'), lb(133, 92, '胃液で\nどろどろ', 10, C.main, 'middle'), ...m('胃：どろどろにする（消化）')] },
  { note: '❓養分は、どこで吸収されるのでしょう。長くて細い小腸です。', add: [ar(186, 82, 186, 70, C.red), lb(186, 96, '養分を\n吸収', 11, C.red, 'middle', true), ...m('養分を吸収＝小腸', C.red, FILL.red)] },
  { note: '❓なぜ小腸は、養分を効率よく吸収できるのでしょう。内側に、じゅう毛という小さなでっぱりがたくさんあり、表面積が広いからです。', add: fresh(rect(30, 96, 260, 30, '#FCA5A5', FILL.red), ...[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => ln(44 + i * 21, 96, 44 + i * 21, 72, C.red, false, 3)), lb(160, 56, 'じゅう毛（表面積が広い）', 12, C.red, 'middle', true), lb(160, 148, '小腸の内側のかべ', 11, C.gray, 'middle'), ...m('じゅう毛で養分をよく吸収', C.red, FILL.red)) },
  { note: '❓では、水分は、どこで吸収されるのでしょう。小腸で消化・吸収されなかったものは、大腸へ送られ、そこで水分が吸収されます。', add: fresh(...gut(), ar(240, 82, 240, 70, C.blue), lb(240, 96, '水分を\n吸収', 11, C.blue, 'middle', true), ...m('水分を吸収＝大腸', C.blue, FILL.blue)) },
  { note: '答えは、養分が小腸、水分が大腸の組み合わせ、イです。', add: m('答え：養分＝小腸、水分＝大腸', C.green, FILL.green) },
  { note: '確かめます。大腸で水分が吸収されて、ふんが固まります。「先に養分、最後に水分」という順番と合っています。', add: m('先に養分、最後に水分', C.green, FILL.green) },
], '答え：養分は小腸、水分は大腸');

// c32 肝臓のはたらき
const organBoxes = (): DiagramElement[] => ['じん臓', '肝臓', '肺', '心臓'].map((t, i) => bx(10 + i * 77, 30, 70, 34, t, C.gray, FILL.gray, 13));
const c32 = show([
  { note: '4つの臓器、じん臓・肝臓・肺・心臓のうち、肝臓のはたらきを選びます。', add: [...organBoxes(), ...m('肝臓のはたらきはどれ？')] },
  { note: 'まず、ほかの3つのはたらきを確かめます。じん臓は尿をつくり、肺は酸素と二酸化炭素を出し入れし、心臓は血液を全身へ送ります。', add: [lb(45, 86, '血液をこして\n尿をつくる', 10, C.gray, 'middle'), lb(199, 86, '酸素をとり入れ\n二酸化炭素を出す', 10, C.gray, 'middle'), lb(276, 86, '血液を全身へ\n送る', 10, C.gray, 'middle'), ...m('じん臓・肺・心臓は別のはたらき')] },
  { note: '❓肝臓は、何をするのでしょう。脂肪の消化を助ける胆汁をつくり、小腸で吸収された養分をたくわえます。', add: [lb(122, 86, '胆汁・養分の\nたくわえ', 10, C.red, 'middle', true), bx(40, 116, 240, 40, '肝臓：胆汁をつくる＋養分をたくわえる', C.red, FILL.red, 12), ...m('肝臓＝胆汁＋養分のたくわえ', C.red, FILL.red)] },
  { note: '❓なぜ肝臓に養分がたくわえられるのでしょう。小腸で吸収した養分は、血液に入ってまず肝臓へ運ばれるからです。', add: fresh(...flow(['小腸', '血液', '肝臓'], 50, { h: 40, size: 14, color: C.red, fill: FILL.red, pad: 16, gap: 24 }).flat(), ...m('養分はまず肝臓に集まる', C.red, FILL.red)) },
  { note: '4つの選択肢を、臓器に分けます。ア＝じん臓、イ＝肝臓、ウ＝肺、エ＝心臓です。', add: fresh(bx(20, 14, 280, 30, 'ア 尿をつくる → じん臓', C.gray, FILL.gray, 12), bx(20, 48, 280, 30, 'イ 胆汁・養分のたくわえ → 肝臓', C.red, FILL.red, 12), bx(20, 82, 280, 30, 'ウ 酸素と二酸化炭素の出入り → 肺', C.gray, FILL.gray, 12), bx(20, 116, 280, 30, 'エ 血液を全身へ送る → 心臓', C.gray, FILL.gray, 12), ...m('肝臓にあたるのは、イ', C.red, FILL.red)) },
  { note: '答えは、イです。', add: m('答え：イ', C.green, FILL.green) },
  { note: '確かめます。消化管から出た血液は肝臓に集まります。養分を最初に受けとってたくわえるのは肝臓、というつくりと合っています。', add: m('小腸→肝臓の流れと一致', C.green, FILL.green) },
], '答え：胆汁をつくり養分をたくわえる');

// c33 こん虫の冬ごし
const stages = (): DiagramElement[] => flow(['卵', '幼虫', 'さなぎ', '成虫'], 24, { h: 34, size: 13, pad: 8, gap: 16, color: C.gray, fill: FILL.gray }).flat();
const lab = (cx: number, text: string, color: string): DiagramElement[] => [ar(cx, 72, cx, 60, color), lb(cx, 86, text, 12, color, 'middle', true)];
const c33 = show([
  { note: 'こん虫は、卵・幼虫・さなぎ・成虫のどれかの姿で、冬をこします。何の姿でこすかは、種類ごとに決まっています。', add: [...stages(), ...m('冬をこす姿は種類ごとに決まる')] },
  { note: 'カマキリは、卵（卵のう）の姿で冬をこします。', add: [...lab(40, 'カマキリ', C.main), ...m('カマキリ＝卵')] },
  { note: 'カブトムシは、土の中で幼虫の姿で冬をこします。', add: [...lab(120, 'カブトムシ', C.main), ...m('カブトムシ＝幼虫')] },
  { note: 'ナナホシテントウは、落ち葉の下などで、成虫の姿で冬をこします。', add: [ar(280, 72, 280, 60, C.main), lb(280, 86, 'ナナホシ\nテントウ', 11, C.main, 'middle', true), ...m('ナナホシテントウ＝成虫')] },
  { note: '❓では、さなぎでこすのは、どれでしょう。残ったアゲハです。秋に育った幼虫がさなぎになり、さなぎのまま冬をこします。', add: [...lab(200, 'アゲハ', C.red), ...m('アゲハ＝さなぎ', C.red, FILL.red)] },
  { note: '❓なぜさなぎは冬に向いているのでしょう。さなぎは、えさを食べず、ほとんど動かない時期だからです。', add: m('さなぎは食べずに動かない', C.blue, FILL.blue) },
  { note: '答えは、アゲハです。', add: m('答え：アゲハ', C.green, FILL.green) },
  { note: '確かめます。4種類のうち、卵・幼虫・成虫でこす3種類を除くと、さなぎでこすのはアゲハだけです。', add: m('ほかの3種類を除いて確認', C.green, FILL.green) },
], '答え：アゲハ');

// c34 ほ乳類
const animals = (): DiagramElement[] => ['ペンギン', 'イルカ', 'サメ', 'イモリ'].map((t, i) => bx(10 + i * 77, 24, 70, 34, t, C.gray, FILL.gray, 12));
const acx = (i: number): number => 45 + i * 77;
const c34 = show([
  { note: 'ペンギン・イルカ・サメ・イモリのうち、ほ乳類はどれでしょう。1種類ずつ、なかまを調べます。', add: [...animals(), ...m('ほ乳類はどれ？')] },
  { note: 'ペンギンは、卵を産んで、羽がある鳥類です。水にもぐるのが得意でも、鳥のなかまです。', add: [ar(acx(0), 76, acx(0), 60, C.gray), lb(acx(0), 90, '鳥類', 12, C.gray, 'middle', true), lb(acx(0), 106, '卵を産む', 10, C.gray, 'middle'), ...m('ペンギン＝鳥類')] },
  { note: 'サメは、えらで呼吸して水中でくらす魚類です。', add: [ar(acx(2), 76, acx(2), 60, C.gray), lb(acx(2), 90, '魚類', 12, C.gray, 'middle', true), lb(acx(2), 106, 'えらで呼吸', 10, C.gray, 'middle'), ...m('サメ＝魚類')] },
  { note: 'イモリは、卵を水中に産み、子がえらで呼吸する両生類です。', add: [ar(acx(3), 76, acx(3), 60, C.gray), lb(acx(3), 90, '両生類', 12, C.gray, 'middle', true), lb(acx(3), 106, '子はえら呼吸', 10, C.gray, 'middle'), ...m('イモリ＝両生類')] },
  { note: '❓イルカは、水中にすんでいますが、何類でしょう。子を産んで乳で育て、肺で呼吸するので、ほ乳類です。', add: [ar(acx(1), 76, acx(1), 60, C.red), lb(acx(1), 90, 'ほ乳類', 12, C.red, 'middle', true), lb(acx(1), 106, '子を産み\n乳で育てる', 10, C.red, 'middle'), ...m('イルカ＝ほ乳類', C.red, FILL.red)] },
  { note: '❓ほ乳類の条件は、何でしょう。子を産んで乳で育てること、肺で呼吸すること、体温がほぼ一定であること、の3つです。', add: fresh(bx(30, 20, 260, 30, '子を産んで乳で育てる（胎生）', C.red, FILL.red, 13), bx(30, 58, 260, 30, '肺で呼吸する', C.red, FILL.red, 13), bx(30, 96, 260, 30, '体温がほぼ一定', C.red, FILL.red, 13), ...m('3つの条件にあてはまる', C.red, FILL.red)) },
  { note: '答えは、イルカです。', add: m('答え：イルカ', C.green, FILL.green) },
  { note: '確かめます。イルカは、水面に出て息をします。えらで呼吸する魚なら水から出る必要がないので、肺で呼吸するほ乳類と合っています。', add: m('水面で息をする＝肺呼吸', C.green, FILL.green) },
], '答え：イルカ');

// c35 BTB液
const liquid = (x: number, color: string): DiagramElement => rect(x - 17, 66, 34, 57, color, color);
const plant = (x: number): DiagramElement[] => [ln(x - 6, 122, x - 10, 92, '#15803D', false, 3), ln(x + 6, 122, x + 10, 94, '#15803D', false, 3), ln(x, 122, x, 86, '#15803D', false, 3)];
const BG = '#86EFAC', BB = '#60A5FA', BY = '#FDE047';
const tubesBase = (): DiagramElement[] => {
  const out: DiagramElement[] = [];
  for (const x of [60, 160, 260]) out.push(rect(x - 18, 40, 36, 84, C.gray, '#FFFFFF'), liquid(x, BG));
  out.push(...plant(60), ...plant(160));
  ['A', 'B', 'C'].forEach((t, i) => out.push(lb(60 + i * 100, 144, t, 14, C.ink, 'middle', true)));
  ['あり・明るい', 'あり・暗い', 'なし・明るい'].forEach((t, i) => out.push(lb(60 + i * 100, 160, t, 10, C.gray, 'middle')));
  return out;
};
const c35 = show([
  { note: '息をふきこんで緑色にしたBTB液を、3本の試験管に入れます。Aは水草あり・明るい所、Bは水草あり・暗い所、Cは水草なし・明るい所です。', add: [...tubesBase(), ...m('はじめは3本とも緑色')] },
  { note: '❓Aは、どう変わるでしょう。明るい所では、光合成が呼吸より大きく、二酸化炭素がへります。BTB液は青色のほうへ向かいます。', add: [liquid(60, BB), ...plant(60), ...m('A：光合成が大きい→青', C.blue, FILL.blue)] },
  { note: '❓Bは、どう変わるでしょう。暗い所では光合成ができず、呼吸だけなので、二酸化炭素がふえます。BTB液は黄色のほうへ向かいます。', add: [liquid(160, BY), ...plant(160), ...m('B：呼吸だけ→黄', '#A16207', FILL.yellow)] },
  { note: '❓Cは、どう変わるでしょう。水草がいないので、二酸化炭素をふやすものも、へらすものもありません。緑色のままです。', add: [lb(260, 32, '変化なし', 11, C.green, 'middle', true), ...m('C：水草なし→緑のまま', C.green, FILL.green)] },
  { note: '3本をまとめます。Aは青色、Bは黄色、Cは緑色です。', add: fresh(bx(10, 30, 92, 56, 'A\n光合成＞呼吸\n青色', C.blue, FILL.blue, 11), bx(114, 30, 92, 56, 'B\n呼吸だけ\n黄色', '#A16207', FILL.yellow, 11), bx(218, 30, 92, 56, 'C\n水草なし\n緑色', C.green, FILL.green, 11), ...m('A青　B黄　C緑', C.blue, FILL.blue)) },
  { note: '❓なぜCの試験管が必要なのでしょう。AとCを比べると、ちがいは水草の有無だけです。色がちがうのは、水草のはたらきだとわかります。', add: [ln(56, 90, 56, 104, C.purple), ln(56, 104, 256, 104, C.purple), ln(256, 104, 256, 90, C.purple), lb(156, 124, 'ちがいは水草だけ', 11, C.purple, 'middle', true), ...m('AとC：水草のはたらき', C.purple, FILL.purple)] },
  { note: '答えは、アです。A：青色、B：黄色、C：緑色。', add: m('答え：ア', C.green, FILL.green) },
  { note: '確かめます。AとBを比べると、ちがいは光の有無だけです。光合成には光が必要だとわかります。', add: m('AとB：光合成には光が必要', C.green, FILL.green) },
], '答え：A青色 B黄色 C緑色');

// c36 生産者・消費者・分解者
const c36 = show([
  { note: '自然の中の生き物は、役わりで3つに分けられます。まず、光合成で養分をつくる「生産者」。選択肢では、ナズナです。', add: [bx(10, 36, 92, 44, '生産者\nナズナ', C.green, FILL.green, 12), ...m('生産者：光合成で養分をつくる', C.green, FILL.green)] },
  { note: '次に、ほかの生き物を食べる「消費者」。ウサギは植物を、ヘビは動物を食べます。', add: [ar(104, 58, 112, 58, C.gray), bx(114, 36, 92, 44, '消費者\nウサギ・ヘビ', C.main, FILL.warm, 12), ...m('消費者：ほかの生き物を食べる')] },
  { note: '❓では、死がいやふんは、だれが分解するのでしょう。カビ・キノコ・細菌のなかま「分解者」です。', add: [ar(208, 58, 216, 58, C.gray), bx(218, 36, 92, 44, '分解者\nカビ・キノコ', C.red, FILL.red, 12), ...m('分解者：死がい・ふんを分解', C.red, FILL.red)] },
  { note: '❓分解されたものは、どうなるのでしょう。土にもどり、植物が根から吸収して、また使います。物がめぐります。', add: [bx(114, 110, 92, 34, '土の養分', C.main, FILL.warm, 12), ar(240, 82, 196, 110, C.red), ar(114, 127, 60, 84, C.green), ...m('分解されて土にもどる', C.main, FILL.warm)] },
  { note: '4つの選択肢を役わりで分けます。ナズナ＝生産者、ウサギとヘビ＝消費者、アオカビ＝分解者です。', add: fresh(bx(10, 20, 145, 34, 'ウサギ：消費者', C.main, FILL.warm, 12), bx(165, 20, 145, 34, 'ナズナ：生産者', C.green, FILL.green, 12), bx(10, 64, 145, 34, 'アオカビ：分解者', C.red, FILL.red, 12), bx(165, 64, 145, 34, 'ヘビ：消費者', C.main, FILL.warm, 12), ...m('分解者は、アオカビだけ', C.red, FILL.red)) },
  { note: '答えは、アオカビです。', add: m('答え：アオカビ', C.green, FILL.green) },
  { note: '確かめます。パンにアオカビがはえると、パンがくさって分解されます。カビは光合成をしないので、植物ではなく分解者です。', add: m('カビは光合成をしない', C.green, FILL.green) },
], '答え：アオカビ');

// c37 ヒトの誕生
const womb = (): DiagramElement[] => [ell(160, 90, 70, 55, 0, C.red, FILL.red), ell(160, 92, 52, 40, 0, C.blue, FILL.blue), ell(150, 92, 26, 14, 0, '#CA8A04', '#FDE68A'), disc(122, 90, 10, '#CA8A04', '#FDE68A'), ell(222, 68, 16, 24, 20, C.purple, FILL.purple), ln(214, 78, 174, 90, C.purple, false, 3)];
const c37 = show([
  { note: 'ヒトの子どもは、母親の子宮の中で育ちます。子宮の中のようすを見てみましょう。', add: [...womb(), ...m('子宮の中の胎児')] },
  { note: '❓胎児は、何につつまれているでしょう。羊水という液につつまれ、水のクッションで外からのしょうげきから守られています。', add: [ar(88, 72, 112, 82, C.blue), lb(84, 70, '羊水', 12, C.blue, 'end', true), ...m('(1) 羊水＝水のクッション', C.blue, FILL.blue)] },
  { note: '❓胎児は、どうやって酸素や養分を受けとるのでしょう。母親の血液から、「たいばん」を通して受けとります。', add: [ar(236, 48, 226, 58, C.purple), lb(238, 44, 'たいばん', 11, C.purple, 'start', true), ...m('たいばんで受けとる', C.purple, FILL.purple)] },
  { note: '❓たいばんと胎児は、何でつながっているでしょう。血管が通る管、「へその緒」です。酸素や養分が胎児へ、不要なものが母親へ運ばれます。', add: [ar(236, 118, 196, 86, C.red), lb(238, 124, 'へその緒', 11, C.red, 'start', true), ...m('(2) へその緒', C.red, FILL.red)] },
  { note: '❓子どもが生まれるまでは、どれくらいでしょう。受精卵ができてから、約38週（約266日）です。', add: fresh(ln(30, 80, 290, 80, C.ink, false, 3), ln(30, 70, 30, 90, C.ink, false, 3), ln(290, 70, 290, 90, C.ink, false, 3), lb(30, 62, '受精卵', 11, C.gray, 'middle', true), lb(290, 62, '誕生', 11, C.gray, 'middle', true), lb(160, 112, '約38週（約266日）', 13, C.red, 'middle', true), ...m('(3) 約38週', C.red, FILL.red)) },
  { note: '答え。(1) 羊水、(2) へその緒、(3) 約38週です。', add: m('羊水・へその緒・約38週', C.green, FILL.green) },
  { note: '確かめます。生まれたあと、へその緒は切られます。おへそは、そのあとで、胎児が母親から養分をもらっていた証拠です。', add: m('おへそ＝へその緒のあと', C.green, FILL.green) },
], '答え：(1) 羊水 (2) へその緒 (3) 約38週');

// c38 顕微鏡の倍率と視野
const cells = (n: number): DiagramElement[] => Array.from({ length: n }, (_, i) => rect(100 + (i * 120) / n, 78, 120 / n, 14, '#16A34A', i % 2 === 0 ? '#BBF7D0' : '#DCFCE7'));
const c38 = show([
  { note: '接眼レンズが10倍、対物レンズが10倍の顕微鏡です。倍率は、2つのレンズの倍率をかけて求めます。', add: [bx(15, 34, 90, 44, '接眼レンズ\n10倍', C.blue, FILL.blue, 12), lb(117, 64, '×', 20, C.ink, 'middle', true), bx(130, 34, 90, 44, '対物レンズ\n10倍', C.blue, FILL.blue, 12), ...m('倍率＝接眼×対物')] },
  { note: '(1) 10×10＝100倍です。たし算ではなく、かけ算です。', add: [lb(232, 64, '＝', 20, C.ink, 'middle', true), bx(244, 34, 66, 44, '100倍', C.red, FILL.red, 14), ...m('(1) 100倍', C.red, FILL.red)] },
  { note: '100倍のとき、視野（見えるまるいはんい）は、実際の長さで直径1.6mmです。細胞1個は0.05mmなので、1.6÷0.05＝32個がならびます。', add: fresh(disc(160, 85, 60, C.gray, '#FFFFFF'), ...cells(32), lb(160, 18, '視野 1.6mm', 11, C.gray, 'middle', true), lb(160, 158, '細胞1個＝0.05mm', 11, C.gray, 'middle'), ...m('100倍：32個ならぶ')) },
  { note: '❓対物レンズを40倍にすると、倍率は何倍になるでしょう。10×40＝400倍で、はじめの4倍です。倍率が上がると、見えるはんいはせまくなります。', add: fresh(disc(160, 85, 60, C.gray, '#FFFFFF'), ...cells(8), lb(160, 18, '視野 ？mm', 11, C.gray, 'middle', true), lb(160, 158, '細胞1個＝0.05mm', 11, C.gray, 'middle'), ...m('倍率4倍→視野は小さく', C.blue, FILL.blue)) },
  { note: '(2) 倍率が4倍になると、視野の直径は4分の1です。1.6÷4＝0.4mm。', add: [...m('(2) 1.6÷4＝0.4mm', C.red, FILL.red)] },
  { note: '(3) 視野0.4mmにならぶ細胞の数は、0.4÷0.05＝8個です。', add: [...m('(3) 0.4÷0.05＝8個', C.red, FILL.red)] },
  { note: '答え。(1) 100倍、(2) 0.4mm、(3) 8個です。', add: m('100倍　0.4mm　8個', C.green, FILL.green) },
  { note: '確かめます。100倍では32個ならびました。倍率が4倍になったので、32÷4＝8個で、(3)と一致します。', add: m('32÷4＝8個で一致', C.green, FILL.green) },
], '答え：(1) 100倍 (2) 0.4mm (3) 8個');

// c39 金星
const c39 = show([
  { note: '夕方、太陽がしずんだあとの西の空に、金星が見えます。', add: [disc(270, 130, 12, '#F59E0B', '#FDE68A'), rect(10, 130, 300, 28, C.gray, '#D6D3D1'), disc(236, 94, 5, '#CA8A04', '#FEF08A'), lb(236, 80, '金星', 12, '#CA8A04', 'middle', true), lb(24, 150, '東', 12, C.ink, 'middle'), lb(296, 150, '西', 12, C.ink, 'middle'), ...m('夕方の西の空に金星')] },
  { note: '❓金星は、どこを回っているのでしょう。太陽のまわりを、地球より内側で回っています。', add: fresh(disc(160, 84, 70, C.blue, FILL.blue), disc(160, 84, 38, C.main, FILL.yellow), disc(160, 84, 9, C.main, '#FBBF24'), disc(130, 61, 4, '#CA8A04', '#FEF08A'), disc(230, 84, 6, C.blue, '#38BDF8'), lb(240, 88, '地球', 11, C.blue, 'start', true), lb(160, 110, '金星の軌道', 10, C.gray, 'middle'), ...m('金星は地球の内側を回る')) },
  { note: '❓地球から見て、金星はどこに見えるでしょう。地球から金星を見る向きは、太陽の向きから、あまりはなれません。だから、太陽の近くにしか見えません。', add: [ln(230, 84, 180.6, 52, C.red), ln(230, 84, 180.6, 116, C.red), ...m('見えるのは太陽の近く', C.red, FILL.red)] },
  { note: '太陽がしずんだ直後は、夕方の西の空（よいの明星）。太陽がのぼる前は、明け方の東の空（明けの明星）で見えます。', add: fresh(bx(10, 40, 145, 50, '夕方・西の空\nよいの明星', C.blue, FILL.blue, 13), bx(165, 40, 145, 50, '明け方・東の空\n明けの明星', C.purple, FILL.purple, 13), ...m('夕方＝西、明け方＝東', C.blue, FILL.blue)) },
  { note: '❓見かけの大きさは、どうなるでしょう。地球に近いと、欠けて大きく見え、遠いと、まるくて小さく見えます。', add: fresh(disc(80, 76, 30, C.gray, FILL.yellow), disc(96, 74, 27, '#FFFFFF', '#FFFFFF'), disc(240, 76, 10, C.gray, FILL.yellow), lb(80, 130, '地球に近い\n欠けて大きい', 11, C.red, 'middle', true), lb(240, 130, '地球から遠い\nまるくて小さい', 11, C.blue, 'middle', true), ...m('近いほど大きく見える', C.red, FILL.red)) },
  { note: '4つの選択肢を調べます。アは真夜中に見えない、ウは明け方は東、エは近いほど大きい、なので誤り。イが正しい文です。', add: fresh(bx(20, 14, 280, 28, 'ア 真夜中に南の空に見える　×', C.gray, FILL.gray, 12), bx(20, 46, 280, 28, 'イ 夕方、西の空＝よいの明星　○', C.green, FILL.green, 12), bx(20, 78, 280, 28, 'ウ 明け方は西の空に見える　×', C.gray, FILL.gray, 12), bx(20, 110, 280, 28, 'エ 近いほど小さく見える　×', C.gray, FILL.gray, 12), ...m('正しいのは、イ', C.green, FILL.green)) },
  { note: '答えは、イです。', add: m('答え：イ', C.green, FILL.green) },
  { note: '確かめます。金星は、太陽の近くにだけ見えるので、夕方か明け方だけです。真夜中には見えないことと合っています。', add: m('見えるのは夕方か明け方', C.green, FILL.green) },
], '答え：夕方の西の空に見える金星＝よいの明星');

// c40 冬の大三角
const winterStars = (): DiagramElement[] => [disc(210, 64, 5, '#DC2626', '#FCA5A5'), disc(88, 64, 4, '#CA8A04', '#FEF08A'), disc(150, 126, 6, '#2563EB', '#BFDBFE'), disc(222, 96, 2.5, C.gray, '#E7E5E4'), disc(232, 99, 2.5, C.gray, '#E7E5E4'), disc(242, 102, 2.5, C.gray, '#E7E5E4'), disc(252, 132, 4, '#2563EB', '#BFDBFE')];
const c40 = show([
  { note: '冬の夜空に、明るい3つの星を結ぶと、大きな三角形ができます。これが「冬の大三角」です。', add: [...winterStars(), ...m('冬の大三角：3つの星')] },
  { note: '赤っぽい星は、オリオン座のベテルギウスです。オリオン座の肩の位置にあります。', add: [lb(210, 48, 'ベテルギウス', 11, C.red, 'middle', true), lb(276, 58, 'オリオン座', 10, C.gray, 'middle'), ...m('オリオン座＝ベテルギウス', C.red, FILL.red)] },
  { note: '❓全天で最も明るい恒星は、どれでしょう。おおいぬ座のシリウスです。青白く、強く輝きます。', add: [lb(150, 146, 'シリウス', 11, '#2563EB', 'middle', true), lb(150, 160, 'おおいぬ座', 10, C.gray, 'middle'), ...m('おおいぬ座＝シリウス', C.blue, FILL.blue)] },
  { note: 'もうひとつは、こいぬ座のプロキオンです。', add: [lb(88, 50, 'プロキオン', 11, '#CA8A04', 'middle', true), lb(88, 34, 'こいぬ座', 10, C.gray, 'middle'), ...m('こいぬ座＝プロキオン', '#A16207', FILL.yellow)] },
  { note: '3つの星を線で結ぶと、冬の大三角になります。3つは、それぞれ別の星座の星です。', add: [ln(210, 64, 88, 64, C.purple, false, 2), ln(88, 64, 150, 126, C.purple, false, 2), ln(150, 126, 210, 64, C.purple, false, 2), ...m('3つを結ぶと大三角', C.purple, FILL.purple)] },
  { note: '答え。(1) シリウス、(2) ベテルギウス、(3) プロキオンです。', add: m('(1) シリウス　(2) ベテルギウス\n(3) プロキオン', C.green, FILL.green) },
  { note: '確かめます。オリオン座・おおいぬ座・こいぬ座の3つの星座から、星がひとつずつ選ばれています。夏の大三角（ベガ・アルタイル・デネブ）とは別です。', add: m('3つとも別々の星座の星', C.green, FILL.green) },
], '答え：(1) シリウス (2) ベテルギウス (3) プロキオン');

// c41 夏至と冬至
const hz = (): DiagramElement[] => [disc(160, 90, 62, C.gray, '#FFFFFF'), lb(160, 22, '北', 12, C.ink, 'middle', true), lb(160, 164, '南', 12, C.ink, 'middle', true), lb(228, 95, '東', 12, C.ink, 'start', true), lb(92, 95, '西', 12, C.ink, 'end', true)];
const sunPath = (az: number, apexY: number, color: string): DiagramElement[] => {
  const x0 = 160 + 62 * Math.sin((az * Math.PI) / 180), x1 = 320 - x0, y0 = 90 - 62 * Math.cos((az * Math.PI) / 180);
  const cy = 2 * apexY - y0;
  const pts: [number, number][] = Array.from({ length: 13 }, (_, i) => { const t = i / 12; return [(1 - t) * (1 - t) * x0 + 2 * (1 - t) * t * 160 + t * t * x1, (1 - t) * (1 - t) * y0 + 2 * (1 - t) * t * cy + t * t * y0]; });
  const out: DiagramElement[] = [];
  for (let i = 0; i < 12; i++) out.push(ln(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], color, false, 3));
  out.push(disc(x0, y0, 4, '#F59E0B', '#FDE68A'));
  return out;
};
const xh = (h: number): number => 20 + h * 11.667;
const c41 = show([
  { note: '太陽の通り道を、真上から見ます。上が北、右が東です。', add: [...hz(), ...m('真上から見た方位（北が上）')] },
  { note: '❓夏至の日の太陽は、どこを通るでしょう。真東より北寄りからのぼり、高い空を通って、真西より北寄りにしずみます。', add: [...sunPath(60, 103, C.red), lb(160, 96, '夏至', 11, C.red, 'middle', true), ...m('夏至：北寄りに出て、しずむ', C.red, FILL.red)] },
  { note: '❓冬至の日の太陽は、どこを通るでしょう。真東より南寄りからのぼり、低い空を通って、真西より南寄りにしずみます。', add: [...sunPath(120, 142.8, C.blue), lb(160, 132, '冬至', 11, C.blue, 'middle', true), ...m('冬至：南寄りに出て、しずむ', C.blue, FILL.blue)] },
  { note: '次に昼の長さです。時刻を横にならべて、昼の部分を棒で表します。', add: fresh(ln(20, 118, 300, 118, C.ink, false, 2), ...[[0, '0時'], [6, '6時'], [12, '12時'], [18, '18時'], [24, '24時']].map(([h, t]) => lb(xh(h as number), 136, t as string, 10, C.gray, 'middle')), lb(12, 57, '夏至', 11, C.red, 'start', true), lb(12, 97, '冬至', 11, C.blue, 'start', true), ...m('時刻のものさし')) },
  { note: '(1) 夏至は、日の出4時30分から、日の入り19時00分（午後7時）まで。19時00分−4時30分＝14時間30分です。', add: [rect(xh(4.5), 40, xh(19) - xh(4.5), 26, C.red, FILL.red), lb(157, 57, '14時間30分', 12, C.red, 'middle', true), ...m('(1) 19:00−4:30＝14時間30分', C.red, FILL.red)] },
  { note: '(2) 冬至は、日の出6時45分から、日の入り16時30分（午後4時30分）まで。16時30分−6時45分＝9時間45分です。', add: [rect(xh(6.75), 80, xh(16.5) - xh(6.75), 26, C.blue, FILL.blue), lb(156, 97, '9時間45分', 12, C.blue, 'middle', true), ...m('(2) 16:30−6:45＝9時間45分', C.blue, FILL.blue)] },
  { note: '(3) 夏至の日、太陽は真西より北寄りにしずみます。', add: fresh(...hz(), ...sunPath(60, 103, C.red), lb(100, 48, '日の入り', 10, C.red, 'end', true), ...m('(3) 北より', C.red, FILL.red)) },
  { note: '確かめます。夏至の昼は、冬至の昼より 14時間30分−9時間45分＝4時間45分長く、夏に昼が長いことと合っています。', add: m('差は4時間45分', C.green, FILL.green) },
], '答え：(1) 14時間30分 (2) 9時間45分 (3) 北より');

// c42 寒冷前線
const frontBase = (): DiagramElement[] => [pg([[10, 50], [110, 50], [150, 140], [10, 140]], C.blue, '#BFDBFE'), pg([[110, 50], [310, 50], [310, 140], [150, 140]], C.red, '#FECACA'), rect(10, 140, 300, 10, C.gray, '#A8A29E')];
const c42 = show([
  { note: '寒冷前線は、つめたい空気と、あたたかい空気がぶつかる境めです。つめたい空気は重いので、地面にそってすすみます。', add: [...frontBase(), lb(50, 90, 'つめたい空気', 11, C.blue, 'middle', true), lb(250, 110, 'あたたかい空気', 11, C.red, 'middle', true), ...m('つめたい空気とあたたかい空気')] },
  { note: '❓つめたい空気は、どう動くのでしょう。あたたかい空気の下に、もぐりこみます。境めは、急なかたむきになります。', add: [ar(24, 120, 98, 120, C.blue), lb(24, 112, 'もぐりこむ', 10, C.blue, 'start', true), ln(110, 50, 150, 140, C.red, false, 3), ...m('下にもぐりこむ', C.blue, FILL.blue)] },
  { note: '❓あたたかい空気は、どうなるのでしょう。急にもち上げられるので、強い上昇気流になります。', add: [ar(190, 130, 170, 76, C.red), lb(204, 134, '一気に上昇', 11, C.red, 'start', true), ...m('あたたかい空気が一気に上昇', C.red, FILL.red)] },
  { note: '❓どんな雲ができるのでしょう。強い上昇気流で、背の高い積乱雲が発達します。せまいはんいに、短時間の強い雨が降ります。', add: [disc(165, 56, 15, C.gray, '#FFFFFF'), disc(180, 44, 17, C.gray, '#FFFFFF'), disc(150, 42, 14, C.gray, '#FFFFFF'), disc(166, 34, 15, C.gray, '#FFFFFF'), ...[150, 160, 170, 180, 190].map((x) => ln(x, 76, x - 4, 100, C.blue, false, 2)), lb(212, 36, '積乱雲', 12, C.gray, 'start', true), lb(212, 74, '強い雨', 11, C.blue, 'start', true), ...m('積乱雲・強い雨・短時間', C.gray, FILL.gray)] },
  { note: '❓通過後の気温は、どうなるのでしょう。つめたい空気におおわれるので、気温が下がります。', add: fresh(bx(20, 30, 130, 50, '通過前\nあたたかい空気', C.red, FILL.red, 12), ar(152, 55, 168, 55, C.gray), bx(170, 30, 130, 50, '通過後\nつめたい空気', C.blue, FILL.blue, 12), lb(160, 110, '気温が下がる', 14, C.blue, 'middle', true), ...m('通過後は気温が下がる', C.blue, FILL.blue)) },
  { note: '温暖前線と比べます。温暖前線は、乱層雲・弱い雨が長く降る・通過後は気温が上がる。寒冷前線は、積乱雲・強い雨が短時間・通過後は気温が下がる。', add: fresh(bx(10, 18, 60, 28, '', C.gray, FILL.gray, 12), bx(75, 18, 115, 28, '温暖前線', C.red, FILL.red, 12), bx(195, 18, 115, 28, '寒冷前線', C.blue, FILL.blue, 12), bx(10, 50, 60, 28, '雲', C.gray, FILL.gray, 12), bx(75, 50, 115, 28, '乱層雲', C.red, FILL.red, 12), bx(195, 50, 115, 28, '積乱雲', C.blue, FILL.blue, 12), bx(10, 82, 60, 28, '雨', C.gray, FILL.gray, 12), bx(75, 82, 115, 28, '弱く長く', C.red, FILL.red, 12), bx(195, 82, 115, 28, '強く短く', C.blue, FILL.blue, 12), bx(10, 114, 60, 28, '気温', C.gray, FILL.gray, 12), bx(75, 114, 115, 28, '上がる', C.red, FILL.red, 12), bx(195, 114, 115, 28, '下がる', C.blue, FILL.blue, 12), ...m('寒冷前線は、右の列', C.blue, FILL.blue)) },
  { note: '答えは、積乱雲・短時間の強い雨・通過後に気温が下がる、の選択肢です。', add: m('答え：積乱雲・強い雨・気温が下がる', C.green, FILL.green) },
  { note: '確かめます。夏の夕方に、はげしい雷雨があって、そのあと涼しくなることがあります。寒冷前線の通過と合っています。', add: m('夕立のあと涼しくなる', C.green, FILL.green) },
], '答え：積乱雲・短時間の強い雨・気温が下がる');

// c43 高気圧と低気圧
const swirl = (cx: number, cy: number, high: boolean, color: string): DiagramElement[] =>
  [0, 60, 120, 180, 240, 300].map((deg) => {
    const a = (deg * Math.PI) / 180, rx = Math.cos(a), ry = Math.sin(a);
    const sx = cx + (high ? 12 : 42) * rx, sy = cy + (high ? 12 : 42) * ry;
    const vx = high ? 0.8 * rx - 0.6 * ry : -0.8 * rx + 0.6 * ry;
    const vy = high ? 0.8 * ry + 0.6 * rx : -0.8 * ry - 0.6 * rx;
    return ar(sx, sy, sx + 30 * vx, sy + 30 * vy, color);
  });
const hlDiscs = (): DiagramElement[] => [disc(80, 90, 46, C.blue, FILL.blue), disc(240, 90, 46, C.gray, FILL.gray), lb(80, 26, '高気圧', 13, C.blue, 'middle', true), lb(240, 26, '低気圧', 13, C.gray, 'middle', true)];
const c43 = show([
  { note: '高気圧は、まわりより気圧が高いところ、低気圧は、まわりより気圧が低いところです。真上から見た図で、風の動きを調べます。', add: [...hlDiscs(), ...m('気圧が高い・低い')] },
  { note: '❓高気圧では、風はどう動くでしょう。中心から、まわりへふき出します。北半球では、時計回りにうずを巻くようにふきます。', add: [...swirl(80, 90, true, C.blue), ...m('高気圧：時計回りにふき出す', C.blue, FILL.blue)] },
  { note: '❓ふき出した分の空気は、どこから来るのでしょう。上空からおりてきます（下降気流）。空気がおりると雲ができにくく、晴れやすくなります。', add: [lb(80, 150, '下降気流→晴れ', 11, C.blue, 'middle', true), ...m('高気圧：下降気流で晴れ', C.blue, FILL.blue)] },
  { note: '❓低気圧では、風はどう動くでしょう。まわりから中心へふきこみます。北半球では、反時計回りにうずを巻くようにふきます。', add: [...swirl(240, 90, false, C.red), ...m('低気圧：反時計回りにふきこむ', C.red, FILL.red)] },
  { note: '❓ふきこんだ空気は、どこへ行くのでしょう。行き場がないので、上へ上がります（上昇気流）。空気が上がると雲ができて、くもりや雨になりやすくなります。', add: [lb(240, 150, '上昇気流→雲', 11, C.red, 'middle', true), ...m('低気圧：上昇気流で雲', C.red, FILL.red)] },
  { note: '2つをまとめます。高気圧は、下降気流・晴れやすい・時計回りにふき出す。低気圧は、上昇気流・雲ができやすい・反時計回りにふきこむ。', add: fresh(bx(10, 18, 60, 28, '', C.gray, FILL.gray, 12), bx(75, 18, 115, 28, '高気圧', C.blue, FILL.blue, 12), bx(195, 18, 115, 28, '低気圧', C.red, FILL.red, 12), bx(10, 50, 60, 28, '気流', C.gray, FILL.gray, 11), bx(75, 50, 115, 28, '下降気流', C.blue, FILL.blue, 12), bx(195, 50, 115, 28, '上昇気流', C.red, FILL.red, 12), bx(10, 82, 60, 28, '天気', C.gray, FILL.gray, 11), bx(75, 82, 115, 28, '晴れやすい', C.blue, FILL.blue, 12), bx(195, 82, 115, 28, '雲ができやすい', C.red, FILL.red, 12), bx(10, 114, 60, 28, '地上の風', C.gray, FILL.gray, 10), bx(75, 114, 115, 28, '時計回りに出る', C.blue, FILL.blue, 12), bx(195, 114, 115, 28, '反時計回りに入る', C.red, FILL.red, 12), ...m('2つの表と同じ組み合わせ', C.green, FILL.green)) },
  { note: '答えは、1番目の選択肢です。高気圧は下降気流で晴れ・時計回りにふき出し、低気圧は上昇気流で雲・反時計回りにふきこみます。', add: m('答え：表のとおりの選択肢', C.green, FILL.green) },
  { note: '確かめます。天気図では、低気圧や前線の近くに雲や雨が多く、高気圧の下では晴れが多いことと合っています。', add: m('低気圧＝雨、高気圧＝晴れ', C.green, FILL.green) },
], '答え：高気圧は下降気流で晴れ、低気圧は上昇気流で雲');

// c44 冬の季節風と日本海側の雪
const jpBase = (): DiagramElement[] => [rect(10, 100, 56, 40, '#A16207', '#E7D3A7'), rect(66, 110, 74, 30, C.blue, '#BAE6FD'), pg([[140, 140], [172, 66], [204, 140]], C.gray, '#D6D3D1'), rect(204, 110, 106, 30, C.blue, '#BAE6FD'), lb(38, 156, '大陸', 11, C.gray, 'middle'), lb(103, 156, '日本海', 11, C.gray, 'middle'), lb(172, 156, '日本列島', 11, C.gray, 'middle'), lb(257, 156, '太平洋', 11, C.gray, 'middle')];
const c44 = show([
  { note: '冬の日本付近を横から見た図です。左が大陸、右が太平洋で、風は北西（左）から南東（右）へふきます。', add: [...jpBase(), ...m('冬の日本付近（北西→南東）')] },
  { note: '❓冬の風は、どこから、どんな空気でふいてくるのでしょう。冷たい大陸から、冷たくてかわいた北西の風がふきます。', add: [ar(14, 78, 98, 78, C.blue), lb(14, 66, '冷たくかわいた風', 10, C.blue, 'start', true), ...m('冷たくかわいた北西の風', C.blue, FILL.blue)] },
  { note: '❓日本海の上を通るあいだに、風はどう変わるでしょう。あたたかい海面から水蒸気をたくさん受けとって、湿った空気になります。', add: [...[80, 100, 120].map((x) => ar(x, 112, x, 94, C.green)), lb(103, 130, '海面から水蒸気', 10, C.green, 'middle', true), ...m('日本海で水蒸気をもらう', C.green, FILL.green)] },
  { note: '❓山地にぶつかると、どうなるでしょう。空気が山にそって上昇し、冷やされて雲（雪雲）ができ、日本海側に雪が多く降ります。', add: [ar(130, 92, 164, 72, C.red), disc(150, 50, 12, C.gray, '#FFFFFF'), disc(165, 42, 13, C.gray, '#FFFFFF'), disc(137, 44, 10, C.gray, '#FFFFFF'), lb(190, 46, '雪', 14, C.red, 'start', true), ...m('山地で上昇して雪を降らす', C.red, FILL.red)] },
  { note: '❓山をこえた太平洋側は、どうでしょう。水蒸気は雪になって、ほとんど失われているので、かわいた風になり、晴れの日が多くなります。', add: [ar(206, 62, 296, 62, C.main), lb(252, 48, 'かわいた風', 10, C.main, 'middle', true), lb(256, 92, '晴れ', 12, C.main, 'middle', true), ...m('太平洋側はかわいた晴れ')] },
  { note: '答えは、「冷たくかわいた北西の風が、日本海の上で水蒸気を受け、山地にぶつかって上昇して雲をつくる」の選択肢、アです。', add: m('答え：ア', C.green, FILL.green) },
  { note: '確かめます。日本海側の雪は、山地の風上側に多く、山をこえた太平洋側では、かわいた風（からっ風）がふくこととよく合います。', add: m('風上は雪、風下は晴れ', C.green, FILL.green) },
], '答え：日本海で水蒸気を受けた北西の風が山地で雪雲に');

// c45 化石
const c45 = show([
  { note: '地層から見つかる化石には、2つの使いみちがあります。当時の環境を知る「示相化石」と、地層の時代を知る「示準化石」です。', add: [bx(10, 30, 145, 56, '示相化石\n当時の環境', C.blue, FILL.blue, 13), bx(165, 30, 145, 56, '示準化石\n地層の時代', C.purple, FILL.purple, 13), ...m('(1) 環境の手がかり＝示相化石', C.blue, FILL.blue)] },
  { note: '❓サンゴの化石からは、何がわかるでしょう。サンゴは、あたたかくて浅いきれいな海にしかすめません。だから、その地層は、あたたかくて浅い海でできたとわかります。', add: [ar(82, 88, 82, 110, C.blue), bx(10, 112, 145, 40, 'サンゴの化石\nあたたかい浅い海', C.blue, FILL.blue, 12), ...m('(2) あたたかくて浅い海', C.blue, FILL.blue)] },
  { note: '次に示準化石です。地球の長い歴史は、古生代・中生代・新生代に分けられます。', add: fresh(bx(10, 40, 95, 34, '古生代', C.gray, FILL.gray, 13), bx(112, 40, 95, 34, '中生代', C.gray, FILL.gray, 13), bx(214, 40, 95, 34, '新生代', C.gray, FILL.gray, 13), lb(160, 128, '古い → 新しい', 11, C.gray, 'middle'), ...m('時代：古生代・中生代・新生代')) },
  { note: '各時代に栄えた生き物が、示準化石になります。古生代はサンヨウチュウ、中生代はアンモナイト、新生代はナウマンゾウです。', add: [lb(57, 98, 'サンヨウチュウ', 11, C.gray, 'middle', true), lb(160, 98, 'アンモナイト', 11, C.gray, 'middle', true), lb(262, 98, 'ナウマンゾウ', 11, C.gray, 'middle', true), ...m('時代ごとに栄えた生き物')] },
  { note: '❓アンモナイトの化石が見つかった地層は、いつできたのでしょう。アンモナイトは、恐竜と同じ中生代に栄えました。', add: [ar(160, 90, 160, 78, C.red), lb(160, 114, '恐竜の時代', 11, C.red, 'middle', true), ...m('(3) 中生代', C.red, FILL.red)] },
  { note: '答え。(1) 示相化石、(2) あたたかくて浅い海、(3) 中生代です。', add: m('(1) 示相化石　(2) あたたかい浅い海\n(3) 中生代', C.green, FILL.green) },
  { note: '確かめます。「相」はすがた・ようす（環境）、「準」はものさし（時代）と覚えます。サンゴは環境、アンモナイトは時代の手がかりで、ことばの意味と合っています。', add: m('相＝環境、準＝ものさし', C.green, FILL.green) },
], '答え：(1) 示相化石 (2) あたたかくて浅い海 (3) 中生代');

// c46 火山の形
const domeV = (): DiagramElement => pg([[20, 140], [45, 125], [65, 88], [85, 70], [105, 88], [125, 125], [150, 140]], C.gray, '#E7E5E4');
const shieldV = (): DiagramElement => pg([[165, 140], [200, 120], [240, 108], [280, 120], [310, 140]], C.gray, '#78716C');
const c46 = show([
  { note: '火山の形は、マグマのねばりけによって、大きくちがいます。左は盛り上がった形の昭和新山、右はゆるやかな形のマウナロアです。', add: [domeV(), shieldV(), lb(85, 156, '昭和新山', 11, C.gray, 'middle', true), lb(240, 156, 'マウナロア', 11, C.gray, 'middle', true), ...m('火山の形はねばりけで決まる')] },
  { note: '昭和新山のマグマは、ねばりけが強く、水あめのように流れにくいものです。', add: [lb(85, 52, 'ねばりけが強い', 11, C.red, 'middle', true), ...m('昭和新山：ねばりけが強い', C.red, FILL.red)] },
  { note: 'マウナロアのマグマは、ねばりけが弱く、さらさらと流れやすいものです。', add: [lb(240, 86, 'ねばりけが弱い', 11, C.blue, 'middle', true), ...m('マウナロア：ねばりけが弱い', C.blue, FILL.blue)] },
  { note: '❓なぜ形がちがうのでしょう。ねばりけが強いと流れにくいので、火口の近くに積もって盛り上がり、ガスもぬけにくいので、噴火がはげしくなります。弱いと、遠くまで広がり、ガスがぬけやすいので、噴火はおだやかです。', add: fresh(bx(10, 18, 145, 28, '強い：流れにくい', C.red, FILL.red, 12), ar(82, 48, 82, 60, C.red), bx(10, 62, 145, 28, '盛り上がるドーム', C.red, FILL.red, 12), ar(82, 92, 82, 104, C.red), bx(10, 106, 145, 28, '噴火がはげしい', C.red, FILL.red, 12), bx(165, 18, 145, 28, '弱い：流れやすい', C.blue, FILL.blue, 12), ar(237, 48, 237, 60, C.blue), bx(165, 62, 145, 28, '遠くまで広がる', C.blue, FILL.blue, 12), ar(237, 92, 237, 104, C.blue), bx(165, 106, 145, 28, '噴火がおだやか', C.blue, FILL.blue, 12), ...m('流れ方で形と噴火が決まる')) },
  { note: '溶岩の色も、ねばりけと関係があります。ねばりけが強いものは白っぽく、弱いものは黒っぽい色をしています。まとめの表です。', add: fresh(bx(10, 12, 60, 24, '', C.gray, FILL.gray, 11), bx(75, 12, 115, 24, 'ねばりけ強い', C.red, FILL.red, 11), bx(195, 12, 115, 24, 'ねばりけ弱い', C.blue, FILL.blue, 11), bx(10, 38, 60, 24, '形', C.gray, FILL.gray, 11), bx(75, 38, 115, 24, '盛り上がる', C.red, FILL.red, 11), bx(195, 38, 115, 24, 'ゆるやか', C.blue, FILL.blue, 11), bx(10, 64, 60, 24, '溶岩の色', C.gray, FILL.gray, 10), bx(75, 64, 115, 24, '白っぽい', C.red, FILL.red, 11), bx(195, 64, 115, 24, '黒っぽい', C.blue, FILL.blue, 11), bx(10, 90, 60, 24, '噴火', C.gray, FILL.gray, 11), bx(75, 90, 115, 24, 'はげしい', C.red, FILL.red, 11), bx(195, 90, 115, 24, 'おだやか', C.blue, FILL.blue, 11), bx(10, 116, 60, 24, '例', C.gray, FILL.gray, 11), bx(75, 116, 115, 24, '昭和新山', C.red, FILL.red, 11), bx(195, 116, 115, 24, 'マウナロア', C.blue, FILL.blue, 11), ...m('表と同じ組み合わせを選ぶ', C.green, FILL.green)) },
  { note: '答えは、表と同じ組み合わせの選択肢、ア（強い＝ドーム・白っぽい・はげしい／弱い＝ゆるやか・黒っぽい・おだやか）です。', add: m('答え：ア（表のとおり）', C.green, FILL.green) },
  { note: '確かめます。「流れにくいから盛り上がる」「流れやすいから広がる」という理由が、形の説明と合っています。', add: m('流れ方と形が一致', C.green, FILL.green) },
], '答え：強い＝ドーム・白っぽい・はげしい／弱い＝ゆるやか・黒っぽい・おだやか');

// c47 火成岩
const crossSec = (): DiagramElement[] => [rect(20, 40, 280, 110, C.gray, '#E7E5E4'), pg([[130, 40], [160, 18], [190, 40]], C.gray, '#D6D3D1'), ln(160, 40, 160, 100, C.red, false, 4), ell(160, 118, 60, 22, 0, C.red, '#FCA5A5')];
const specks = (): DiagramElement[] => {
  const out: DiagramElement[] = [];
  for (let i = 0; i < 10; i++) for (let j = 0; j < 7; j++) out.push(rect(28 + i * 12.5 + (j % 2) * 5, 32 + j * 13.5, 2, 2, C.gray, C.gray));
  return out;
};
const granite = (): DiagramElement[] => {
  const cols = ['#F5F5F4', '#FBCFE8', '#A8A29E', '#E7E5E4', '#78716C'];
  const out: DiagramElement[] = [];
  for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) out.push(rect(170 + c * 32.5, 24 + r * 33.3, 32.5, 33.3, C.gray, cols[(r * 2 + c) % 5]));
  return out;
};
const c47 = show([
  { note: '火成岩は、マグマが冷えて固まった岩石です。火山の下には、マグマがたまっています。', add: [...crossSec(), ...m('マグマが冷えて固まる')] },
  { note: '❓マグマが地表近くまで出てくると、どうなるでしょう。空気や水で急に冷えて固まります。このようにしてできるのが火山岩（玄武岩・安山岩など）です。', add: [ar(234, 64, 196, 44, C.red), lb(236, 72, '地表近く\n急に冷える', 10, C.red, 'start', true), ...m('火山岩：急に冷える', C.red, FILL.red)] },
  { note: '❓マグマが地下深くにあるままだと、どうなるでしょう。まわりの岩石にあたためられ、長い時間をかけてゆっくり冷えます。これが深成岩（花こう岩など）です。', add: [ar(230, 126, 220, 120, C.blue), lb(232, 134, '地下深く\nゆっくり冷える', 10, C.blue, 'start', true), ...m('深成岩：ゆっくり冷える', C.blue, FILL.blue)] },
  { note: '❓急に冷えると、粒はどうなるでしょう。大きく育つ時間がないので、細かい粒の中に、先に育った大きな粒がまじる「斑状組織」になります。', add: fresh(rect(20, 24, 130, 100, C.gray, '#F5F5F4'), ...specks(), rect(46, 50, 12, 9, C.gray, '#FBCFE8'), rect(94, 66, 12, 9, C.gray, '#BAE6FD'), rect(60, 94, 12, 9, C.gray, '#FBCFE8'), rect(116, 42, 12, 9, C.gray, '#BAE6FD'), rect(122, 98, 12, 9, C.gray, '#FBCFE8'), lb(85, 16, '火山岩', 11, C.red, 'middle', true), lb(85, 140, '斑状組織', 11, C.red, 'middle', true), ...m('急冷：細かい粒＋大きい粒', C.red, FILL.red)) },
  { note: '❓ゆっくり冷えると、粒はどうなるでしょう。どの粒も大きく育ち、ぎっしりと組み合わさった「等粒状組織」になります。', add: [...granite(), lb(235, 16, '深成岩', 11, C.blue, 'middle', true), lb(235, 140, '等粒状組織', 11, C.blue, 'middle', true), ...m('ゆっくり冷える→大きい粒', C.blue, FILL.blue)] },
  { note: '2つをまとめます。火山岩は急に冷えて斑状組織、深成岩はゆっくり冷えて等粒状組織です。', add: m('火山岩＝斑状、深成岩＝等粒状', C.green, FILL.green) },
  { note: '答えは、ア（火山岩＝地表近くで急冷＝斑状組織、深成岩＝地下深くでゆっくり冷える＝等粒状組織）です。', add: m('答え：火山岩＝斑状組織\n深成岩＝等粒状組織', C.green, FILL.green) },
  { note: '確かめます。花こう岩を墓石やかべで見ると、大きな粒がぎっしり並んでいます。深成岩の等粒状組織と合っています。', add: m('花こう岩は大粒ぎっしり', C.green, FILL.green) },
], '答え：火山岩＝斑状組織、深成岩＝等粒状組織');

// c48 震度とマグニチュード
const c48 = show([
  { note: '電球にたとえます。電球そのものの強さは1つですが、部屋の中の明るさは、電球に近いほど明るく、遠いほど暗くなります。', add: [disc(40, 80, 12, '#CA8A04', '#FDE68A'), lb(40, 110, '電球の強さ', 11, C.main, 'middle', true), ln(52, 80, 112, 80, C.gray, true), ln(128, 80, 192, 80, C.gray, true), ln(208, 80, 272, 80, C.gray, true), disc(120, 80, 8, C.gray, FILL.gray), disc(200, 80, 8, C.gray, FILL.gray), disc(280, 80, 8, C.gray, FILL.gray), lb(120, 106, '近い：明るい', 10, C.gray, 'middle'), lb(200, 106, 'ふつう', 10, C.gray, 'middle'), lb(280, 106, '遠い：暗い', 10, C.gray, 'middle'), ...m('電球の強さと場所の明るさ')] },
  { note: '地震も同じです。電球の強さにあたるのが震源でのマグニチュード、場所ごとの明るさにあたるのが震度です。', add: fresh(disc(40, 80, 12, C.red, FILL.red), lb(40, 56, '震源', 11, C.red, 'middle', true), lb(160, 36, '地震1つ：マグニチュード6.8', 12, C.red, 'middle', true), ln(52, 80, 112, 80, C.gray, true), ln(128, 80, 192, 80, C.gray, true), ln(208, 80, 272, 80, C.gray, true), disc(120, 80, 8, C.gray, FILL.gray), disc(200, 80, 8, C.gray, FILL.gray), disc(280, 80, 8, C.gray, FILL.gray), lb(120, 66, '震度6強', 11, C.blue, 'middle', true), lb(200, 66, '震度4', 11, C.blue, 'middle', true), lb(280, 66, '震度2', 11, C.blue, 'middle', true), ...m('マグニチュードは1つ、震度は場所ごと')) },
  { note: '2つのちがいをまとめます。マグニチュードは地震そのものの規模（1つの値）、震度はその場所のゆれの大きさ（場所ごとの値）です。', add: fresh(bx(10, 30, 145, 56, 'マグニチュード\n地震そのものの規模\n（1つの値）', C.red, FILL.red, 11), bx(165, 30, 145, 56, '震度\nその場所のゆれ\n（場所ごと）', C.blue, FILL.blue, 11), ...m('規模はMがあらわす', C.red, FILL.red)) },
  { note: '震度は、0・1・2・3・4・5弱・5強・6弱・6強・7の10段階で表します。', add: fresh(lb(160, 46, '震度は10段階', 12, C.blue, 'middle', true), ...['0', '1', '2', '3', '4', '5弱', '5強', '6弱', '6強', '7'].map((t, i) => bx(11 + i * 30, 60, 28, 26, t, C.blue, FILL.blue, 10)), ...m('震度は0〜7の10段階', C.blue, FILL.blue)) },
  { note: '❓同じ地震でも、場所によって震度がちがうのは、なぜでしょう。震源に近いほどゆれが大きく、遠いほどゆれが小さくなるからです。', add: fresh(bx(20, 30, 130, 44, '震源に近い\n震度 大', C.red, FILL.red, 12), ar(152, 52, 168, 52, C.gray), bx(170, 30, 130, 44, '震源から遠い\n震度 小', C.blue, FILL.blue, 12), ...m('同じ地震でも場所で変わる')) },
  { note: '答えは、「震度はそれぞれの場所でのゆれの大きさを表し、マグニチュードは地震そのものの規模を表す」の選択肢、イです。', add: m('答え：イ', C.green, FILL.green) },
  { note: '確かめます。ニュースで「マグニチュード6.8、A市は震度6強、B市は震度3」と伝えられます。Mは1つ、震度は場所ごとで、答えと合っています。', add: m('Mは1つ、震度は場所ごと', C.green, FILL.green) },
], '答え：震度は場所のゆれ、マグニチュードは地震の規模');

// c49 月ののぼる時刻と南中
const xt = (h: number): number => 20 + (h - 18) * 23.333;
const moon = (x: number, y: number): DiagramElement => disc(x, y, 8, '#CA8A04', '#FEF08A');
const rowA = (): DiagramElement[] => [ln(20, 60, 300, 60, C.ink, false, 2), ...[[18, '午後6時'], [21, '9時'], [24, '午前0時'], [27, '3時'], [30, '6時']].map(([h, t]) => lb(xt(h as number), 80, t as string, 10, C.gray, 'middle'))];
const c49 = show([
  { note: '満月は、午後6時に、東の空からのぼります。時刻を横にならべた線の上に、月の位置を書いていきます。', add: [...rowA(), moon(20, 60), lb(20, 40, 'のぼる', 11, C.red, 'middle', true), ...m('満月：午後6時にのぼる')] },
  { note: '❓満月は、夜のあいだどう動くでしょう。夕方にのぼり、夜明けごろにしずみます。午前6時にしずみます。', add: [moon(300, 60), lb(300, 40, 'しずむ', 11, C.red, 'middle', true), ...m('満月：午前6時にしずむ')] },
  { note: '(1) 南中は、のぼってからしずむまでの、ちょうど真ん中です。午後6時から午前6時までは12時間なので、真ん中は6時間後の午前0時です。', add: [moon(160, 60), lb(160, 40, '南中', 11, C.red, 'middle', true), ...m('(1) 真ん中＝午前0時', C.red, FILL.red)] },
  { note: '(2) 月は、毎日約50分ずつ、のぼる時刻がおそくなります。2日後は、50×2＝100分（1時間40分）おくれます。午後6時＋1時間40分＝午後7時40分です。', add: [ln(20, 120, 300, 120, C.ink, false, 2), moon(xt(19 + 40 / 60 + 0), 120), lb(xt(19 + 40 / 60), 104, 'のぼる', 11, C.red, 'middle', true), lb(xt(19 + 40 / 60), 142, '午後7時40分', 10, C.gray, 'middle'), lb(62, 91, '＋100分', 10, C.blue, 'middle', true), ...m('(2) 6:00＋1時間40分＝7:40', C.red, FILL.red)] },
  { note: '(3) 南中する時刻も、同じ100分おくれます。午前0時＋1時間40分＝午前1時40分です。', add: [moon(xt(25 + 40 / 60), 120), lb(xt(25 + 40 / 60), 104, '南中', 11, C.red, 'middle', true), lb(xt(25 + 40 / 60), 142, '午前1時40分', 10, C.gray, 'middle'), ...m('(3) 0:00＋1時間40分＝1:40', C.red, FILL.red)] },
  { note: '確かめます。のぼってから南中するまでの時間は、満月の日も、2日後も、どちらも6時間です。毎日変わらないことと合っています。', add: [ar(30, 52, 150, 52, C.green), lb(90, 46, '6時間', 10, C.green, 'middle', true), ar(70, 110, 188, 110, C.green), lb(130, 106, '6時間', 10, C.green, 'middle', true), ...m('のぼってから南中まで6時間', C.green, FILL.green)] },
  { note: '答え。(1) 午前0時、(2) 午後7時40分、(3) 午前1時40分です。まちがいやすいのは、50分を2日で50分と考えることです。', add: m('(1) 午前0時　(2) 午後7時40分\n(3) 午前1時40分', C.green, FILL.green) },
], '答え：(1) 午前0時 (2) 午後7時40分 (3) 午前1時40分');

// c50 太陽系の惑星
const PL: [string, number, number][] = [['水星', 52, 3], ['金星', 82, 5], ['地球', 112, 5], ['火星', 142, 4], ['木星', 182, 11], ['土星', 222, 9], ['天王星', 262, 7], ['海王星', 298, 7]];
const plDots = (): DiagramElement[] => [disc(14, 85, 10, '#F59E0B', '#FDE68A'), ...PL.map(([, x, r]) => disc(x, 85, r, C.gray, FILL.gray))];
const c50 = show([
  { note: '太陽を中心に、8つの惑星が回っています。太陽に近いほうから、ならべてみましょう。', add: [...plDots(), ...m('太陽と惑星')] },
  { note: '太陽に近い順に、水星・金星・地球・火星・木星・土星・天王星・海王星です。', add: [...PL.map(([n, x]) => lb(x, 66, n, 10, C.ink, 'middle', true)), ...m('水・金・地・火・木・土・天・海')] },
  { note: '(1) 近いほうから数えます。1水星、2金星、3地球、4火星、5木星。5番目は木星です。', add: [...PL.map(([, x], i) => lb(x, 112, String(i + 1), 11, C.gray, 'middle')), disc(182, 85, 12, C.red, '#FCA5A5'), ...m('(1) 5番目＝木星', C.red, FILL.red)] },
  { note: '(2) 地球のすぐ外側（4番目）は火星です。岩石でできた惑星です。', add: [disc(142, 85, 7, C.red, '#FCA5A5'), ...m('(2) 地球のとなり＝火星', C.red, FILL.red)] },
  { note: '❓惑星は、どう分けられるでしょう。内側の4つ（水星・金星・地球・火星）は、岩石でできた地球型。外側の4つは、ガスや氷が主な大きな木星型です。', add: [ln(40, 126, 152, 126, C.green, false, 3), lb(96, 144, '地球型（岩石）', 11, C.green, 'middle', true), ln(170, 126, 310, 126, C.purple, false, 3), lb(240, 144, '木星型（大きい）', 11, C.purple, 'middle', true), ...m('内側4つ＋外側4つ', C.green, FILL.green)] },
  { note: '(3) 内側の4つと外側の4つで、惑星は全部で8個です。冥王星は、2006年に惑星から外され、準惑星になりました。', add: m('(3) 4＋4＝8個', C.red, FILL.red) },
  { note: '答え。(1) 木星、(2) 火星、(3) 8個です。', add: m('(1) 木星　(2) 火星　(3) 8個', C.green, FILL.green) },
  { note: '確かめます。数えなおすと、地球型4つと木星型4つで8個。地球は3番目で、火星は4番目です。', add: m('4＋4＝8個で一致', C.green, FILL.green) },
], '答え：(1) 木星 (2) 火星 (3) 8個');

export const figuresMoshi202612RikaChugaku2: Record<string, Figure> = {
  moshi_2026_12_rika_c26: c26,
  moshi_2026_12_rika_c27: c27,
  moshi_2026_12_rika_c28: c28,
  moshi_2026_12_rika_c29: c29,
  moshi_2026_12_rika_c30: c30,
  moshi_2026_12_rika_c31: c31,
  moshi_2026_12_rika_c32: c32,
  moshi_2026_12_rika_c33: c33,
  moshi_2026_12_rika_c34: c34,
  moshi_2026_12_rika_c35: c35,
  moshi_2026_12_rika_c36: c36,
  moshi_2026_12_rika_c37: c37,
  moshi_2026_12_rika_c38: c38,
  moshi_2026_12_rika_c39: c39,
  moshi_2026_12_rika_c40: c40,
  moshi_2026_12_rika_c41: c41,
  moshi_2026_12_rika_c42: c42,
  moshi_2026_12_rika_c43: c43,
  moshi_2026_12_rika_c44: c44,
  moshi_2026_12_rika_c45: c45,
  moshi_2026_12_rika_c46: c46,
  moshi_2026_12_rika_c47: c47,
  moshi_2026_12_rika_c48: c48,
  moshi_2026_12_rika_c49: c49,
  moshi_2026_12_rika_c50: c50,
};
