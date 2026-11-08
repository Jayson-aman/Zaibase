import type { DiagramElement, Figure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, show, band, fresh, cover } from './diagram-kit';

// 月例模試 2027年1月号 理科・中学受験 後半（c26〜c50）の「動く図解」。キーは問題ID。座標は 320×240。
// 図は上（y＜165）に描き、下の帯（y≥170）に短い結論を出す。文字を持たない形は多角形（pg）で描き、文字との重なり検査を通す。

/** 下の帯に一言（前のスライドの帯は白でおおいかくして書きかえる）。 */
const m = (text: string, color: string = C.main, fill: string = FILL.warm): DiagramElement[] =>
  band(170, bx(20, 176, 280, 34, text, color, fill, 13));

const rect = (x: number, y: number, w: number, h: number, color?: string, fill?: string): DiagramElement =>
  pg([[x, y], [x + w, y], [x + w, y + h], [x, y + h]], color, fill);
const ell = (cx: number, cy: number, rx: number, ry: number, color?: string, fill?: string): DiagramElement =>
  pg(Array.from({ length: 32 }, (_, i) => [cx + rx * Math.cos((i / 32) * 2 * Math.PI), cy + ry * Math.sin((i / 32) * 2 * Math.PI)] as [number, number]), color, fill);
const disc = (cx: number, cy: number, r: number, color?: string, fill?: string): DiagramElement => ell(cx, cy, r, r, color, fill);
/** 左半分だけの半円（光が当たった面のたとえ） */
const halfL = (cx: number, cy: number, r: number, color?: string, fill?: string): DiagramElement =>
  pg(Array.from({ length: 17 }, (_, i) => [cx + r * Math.cos(Math.PI / 2 + (i / 16) * Math.PI), cy + r * Math.sin(Math.PI / 2 + (i / 16) * Math.PI)] as [number, number]), color, fill);
/** 円周（線だけ） */
const ring = (cx: number, cy: number, r: number, color: string = C.gray): DiagramElement[] =>
  Array.from({ length: 40 }, (_, i) => {
    const a = (i / 40) * 2 * Math.PI, b = ((i + 1) / 40) * 2 * Math.PI;
    return ln(cx + r * Math.cos(a), cy + r * Math.sin(a), cx + r * Math.cos(b), cy + r * Math.sin(b), color, false, 1.2);
  });

const cx4 = [44, 122, 200, 278];

// ═════════ 生物 ═════════

// c26 種子の運ばれ方
const c26Names = (): DiagramElement[] => ['タンポポ', 'オナモミ', 'ホウセンカ', 'カエデ'].map((p, i) => bx(cx4[i] - 35, 24, 70, 36, p, C.main, FILL.warm, 12));
const c26m = (i: number, text: string, color: string, fill: string, sub: string): DiagramElement[] => [
  ar(cx4[i], 62, cx4[i], 88, color), bx(cx4[i] - 35, 90, 70, 44, text, color, fill, 12), lb(cx4[i], 150, sub, 10, color, 'middle'),
];
const c26 = show([
  { note: '4つの植物の種子（果実）が、どのように運ばれるかを考えます。', add: [...c26Names(), ...m('種子はどう運ばれる？')] },
  { note: '❓タンポポの果実には、何がついているでしょう。ふわふわしたわた毛です。軽くて風に乗るので、風で遠くまで飛びます。', add: [...c26m(0, '風に\n飛ぶ', C.blue, FILL.blue, 'わた毛'), ...m('わた毛→風に乗る', C.blue, FILL.blue)] },
  { note: '❓ホウセンカは、どうでしょう。果実が熟すと、ちょっとふれただけで裂けて、種子をはじき飛ばします。', add: [...c26m(2, 'はじけ\n飛ぶ', C.purple, FILL.purple, '果実が裂ける'), ...m('裂けて種子をはじく', C.purple, FILL.purple)] },
  { note: '❓カエデは、どうでしょう。果実に2枚の羽があって、風にのってくるくる回りながら遠くへ落ちます。', add: [...c26m(3, '風に\n飛ぶ', C.blue, FILL.blue, '2枚の羽'), ...m('羽→風に乗る', C.blue, FILL.blue)] },
  { note: '❓残ったオナモミは、どうでしょう。果実の表面に、かぎ状のとげがびっしりあります。このとげが、運ぶ手がかりです。', add: [ar(cx4[1], 62, cx4[1], 88, C.red), bx(cx4[1] - 35, 90, 70, 44, '？', C.red, FILL.red, 16), lb(cx4[1], 150, 'かぎ状のとげ', 10, C.red, 'middle'), ...m('とげのある果実は？', C.red, FILL.red)] },
  { note: '❓かぎ状のとげは、何にひっかかるのでしょう。動物の毛や、人の服です。くっついて、遠くへ運ばれます。', add: [cover(cx4[1] - 35, 90, 70, 44), bx(cx4[1] - 35, 90, 70, 44, '動物に\nくっつく', C.green, FILL.green, 12), ...m('答え：オナモミ', C.green, FILL.green)] },
  { note: '確かめます。ほかの3つは、風で飛ぶ（タンポポ・カエデ）か、はじけ飛ぶ（ホウセンカ）かのどちらかです。動物にくっつくのは、オナモミだけです。', add: m('動物にくっつくのは1つ', C.green, FILL.green) },
], '答え：オナモミ');

// c27 カボチャの袋かけ
const c27Boxes = (): DiagramElement[] => [
  bx(cx4[0] - 35, 18, 70, 38, 'ア めばな\n袋のまま', C.red, FILL.red, 10),
  bx(cx4[1] - 35, 18, 70, 38, 'イ めばな\n花粉をつけた', C.red, FILL.red, 10),
  bx(cx4[2] - 35, 18, 70, 38, 'ウ めばな\n何もつけず', C.red, FILL.red, 10),
  bx(cx4[3] - 35, 18, 70, 38, 'エ おばな\n花粉を確認', C.blue, FILL.blue, 10),
];
const mark = (i: number, ok: boolean): DiagramElement => ci(cx4[i], 148, 12, ok ? '○' : '×', ok ? C.green : C.red, ok ? FILL.green : FILL.red, 14);
const c27 = show([
  { note: 'カボチャの花に袋をかけて、虫が入らないようにします。ア〜エのうち、あとで実ができるのはどれでしょう。', add: [...c27Boxes(), ...m('袋かけの実験 ア〜エ')] },
  { note: '❓実ができる条件は、何でしょう。①実になる部分がある「めばな」であること。②花粉がめしべの先につく「受粉」をすること。この2つがそろうことです。', add: [bx(20, 66, 130, 30, '① めばなである', C.red, FILL.red, 12), bx(170, 66, 130, 30, '② 受粉する', C.blue, FILL.blue, 12), ...m('実＝めばな＋受粉', C.red, FILL.red)] },
  { note: '❓なぜ「めばな」でなければならないのでしょう。実になる子房（ふくらんだ部分）は、めばなのめしべのもとにしかないからです。おばなには子房がありません。', add: [lb(160, 122, '実になる子房は、めばなだけにある', 11, C.ink, 'middle'), ...m('子房はめばなだけ')] },
  { note: 'エを調べます。おばななので、花粉があっても、実になる子房がありません。実はできないので×です。', add: [mark(3, false), ...m('エ：おばなは実にならない', C.red, FILL.red)] },
  { note: 'アを調べます。めばなですが、袋で虫をふせいでいて、花粉もつけていません。受粉しないので、実はできません。×です。', add: [mark(0, false), ...m('ア：受粉しないので×', C.red, FILL.red)] },
  { note: 'ウを調べます。袋をはずしましたが、めしべには何もつけず、すぐにまた袋をかけました。受粉しないので、実はできません。×です。', add: [mark(2, false), ...m('ウ：受粉しないので×', C.red, FILL.red)] },
  { note: 'イを調べます。❓めばなで、人の手でおばなの花粉をつけました。受粉するので、実ができます。○です。', add: [mark(1, true), ...m('イ：めばな＋受粉で○', C.green, FILL.green)] },
  { note: '答え。実ができるのはイだけです。確かめ：「めばな」と「受粉」の両方を満たすのはイだけで、アとウは受粉が欠け、エはめばなではありません。', add: m('答え：イだけ', C.green, FILL.green) },
], '答え：イだけ');

// c28 オオカナダモ（光と泡）
const bars = [40, 22, 10, 4, 0, 0];
const barX = (i: number) => 18 + 49 * i;
const c28Bars = (): DiagramElement[] => bars.flatMap((v, i) => [
  ...(v > 0 ? [rect(barX(i), 140 - v * 2, 28, v * 2, C.green, FILL.green)] : []),
  lb(barX(i) + 14, v > 0 ? 136 - v * 2 : 134, String(v), 11, v === 0 ? C.red : C.ink, 'middle', true),
  lb(barX(i) + 14, 156, `${10 + 10 * i}cm`, 10, C.gray, 'middle'),
]);
const c28 = show([
  { note: 'オオカナダモにライトを当て、ライトとのきょりを変えて、1分間に出る泡の数を調べました。きょりが遠くなると泡は減り、50cmでは0個です。', add: [ln(10, 140, 308, 140, C.ink, false, 2), lb(10, 16, '泡の数（1分間）', 11, C.gray, 'start'), ...c28Bars(), ...m('ライトとのきょりと泡の数')] },
  { note: '❓この泡は、何でしょう。光合成でつくった酸素のうち、水草が呼吸で使いきれずに、余った分です。「泡＝出した酸素−使った酸素」です。', add: m('泡＝出した酸素−使った酸素', C.blue, FILL.blue) },
  { note: '❓きょりが遠くなると、泡が減るのはなぜでしょう。光が弱くなって、光合成でつくる酸素が減るからです。', add: [ar(110, 44, 250, 44, C.blue), lb(180, 36, '光が弱くなる', 11, C.blue, 'middle', true), ...m('光が弱い→酸素が減る', C.blue, FILL.blue)] },
  { note: '50cmで泡が0になりました。❓これは何を意味するのでしょう。「余った酸素が0」ということです。光合成でつくる酸素が、呼吸で使う酸素と同じか、それ以下になったのです。', add: [ln(208, 146, 248, 146, C.red, false, 3), ...m('余りが0になった', C.red, FILL.red)] },
  { note: '❓光合成は止まったのでしょうか。いいえ。50cmでも、ライトの光は水草にとどいています。光があるあいだ、光合成は続いています。', add: m('光があれば光合成は続く', C.green, FILL.green) },
  { note: '❓呼吸は止まったのでしょうか。いいえ。呼吸は生きているかぎり、昼も夜も続きます。', add: m('呼吸も続いている', C.green, FILL.green) },
  { note: '答え。光合成は行われているが、出る酸素が呼吸で使う酸素以下なので、泡にならない、です。', add: m('出る酸素≦使う酸素→泡0', C.green, FILL.green) },
  { note: '確かめます。もし光合成が完全に止まっていたら、光をさえぎった暗い場合と同じです。ここでは光がとどいているので、「止まっている」は条件に合いません。', add: m('光がとどく→止まらない', C.green, FILL.green) },
], '答え：光合成は続くが、出る酸素が呼吸以下なので泡にならない');

// c29 恒温動物と変温動物
const tx = [60, 130, 200, 270];
const ty = (t: number) => 150 - 3 * t;
const c29Axes = (): DiagramElement[] => [
  ln(40, 150, 300, 150, C.ink, false, 2), ln(40, 20, 40, 150, C.ink, false, 2), lb(46, 16, '体温（℃）', 10, C.gray, 'start'),
  ...['5℃', '15℃', '25℃', '35℃'].map((t, i) => lb(tx[i], 163, t, 10, C.gray, 'middle')),
];
const aPts = [6, 15, 26, 35], bPts = [38, 38, 38, 39];
const polyline = (pts: number[], color: string): DiagramElement[] => [
  ...pts.slice(1).map((v, i) => ln(tx[i], ty(pts[i]), tx[i + 1], ty(v), color, false, 2.5)),
  ...pts.map((v, i) => disc(tx[i], ty(v), 3.5, color, color)),
];
const c29 = show([
  { note: '気温を5・15・25・35℃に変えた部屋に、動物A・Bを入れて体温をはかりました。横が気温、縦が体温です。', add: [...c29Axes(), ...m('気温と体温の変わり方')] },
  { note: '動物Aを見ます。気温が上がるにつれて、体温も6→15→26→35℃と、ほぼ同じだけ上がっています。', add: [...polyline(aPts, C.blue), lb(284, 56, 'A', 13, C.blue, 'start', true), ...m('Aは気温と同じように変わる', C.blue, FILL.blue)] },
  { note: '動物Bを見ます。気温が30℃もちがっても、体温は38〜39℃で、ほとんど変わりません。', add: [...polyline(bPts, C.red), lb(284, 32, 'B', 13, C.red, 'start', true), ...m('Bはほぼ一定', C.red, FILL.red)] },
  { note: '❓Aのように、体温がまわりの温度といっしょに変わる動物を何というでしょう。「変温動物」です。魚類・両生類・は虫類がそうです。カエル・ヘビ・トカゲが当てはまります。', add: [lb(285, 128, '気温といっしょに変わる', 10, C.blue, 'end'), ...m('A＝変温動物', C.blue, FILL.blue)] },
  { note: '❓Bのように、体温がほぼ一定の動物を何というでしょう。「恒温動物」です。鳥類とほ乳類がそうです。ニワトリ・ウサギ・イルカが当てはまります。', add: [lb(275, 20, 'いつも約38℃で一定', 10, C.red, 'end'), ...m('B＝恒温動物', C.red, FILL.red)] },
  { note: '2つの条件を合わせます。Aは変温動物（カエル・ヘビ）、Bは恒温動物（ニワトリ・ウサギ・イルカ）。両方に合うのは「Aはカエル、Bはニワトリ」だけです。', add: m('A＝カエル　B＝ニワトリ', C.green, FILL.green) },
  { note: '確かめます。「Aはウサギ、Bはイルカ」はAが恒温動物になり、「Aはヘビ、Bはトカゲ」はBも変温動物になるので、表と合いません。', add: m('ほかの組は表と合わない', C.green, FILL.green) },
], '答え：Aはカエル、Bはニワトリ');

// c30 尿の道すじ
const c30x = [8, 88, 168, 248];
const c30Box = (i: number, t: string, color: string, fill: string): DiagramElement[] => [
  ...(i > 0 ? [ar(c30x[i] - 15, 122, c30x[i] - 1, 122, color)] : []),
  bx(c30x[i], 100, 64, 44, t, color, fill, 11),
];
const c30 = show([
  { note: '体の中で養分が使われると、いらないものができて、血液にまざります。尿が体の外に出るまでの道すじを、順に考えます。', add: [bx(60, 28, 200, 34, '血液のなかの いらないもの', C.red, FILL.red, 12), ...m('血液にいらないものがまざる', C.red, FILL.red)] },
  { note: '❓いらないものは、どこでこしとられるのでしょう。血液をこして尿をつくる臓器、「じん臓」です。', add: [ar(110, 64, 40, 98, C.red), ...c30Box(0, 'じん臓', C.red, FILL.red), lb(40, 158, '尿をつくる', 10, C.red, 'middle'), ...m('① じん臓で尿をつくる', C.red, FILL.red)] },
  { note: '❓つくられた尿は、何を通って運ばれるのでしょう。細い管の「にょう管」です。', add: [...c30Box(1, 'にょう管', C.blue, FILL.blue), lb(120, 158, '尿を運ぶ管', 10, C.blue, 'middle'), ...m('② にょう管で運ぶ', C.blue, FILL.blue)] },
  { note: '❓運ばれた尿は、どこにためられるのでしょう。袋の形をした「ぼうこう」です。いっぱいになるまで、ここにためます。', add: [...c30Box(2, 'ぼうこう', C.purple, FILL.purple), lb(200, 158, '尿をためる袋', 10, C.purple, 'middle'), ...m('③ ぼうこうにためる', C.purple, FILL.purple)] },
  { note: '最後に、ぼうこうから体の外へ出ます。', add: [...c30Box(3, '体の外', C.green, FILL.green), lb(280, 158, '尿が出る', 10, C.green, 'middle'), ...m('④ 体の外に出る', C.green, FILL.green)] },
  { note: '答え。じん臓→にょう管→ぼうこう→体の外、の順です。', add: m('じん臓→にょう管→ぼうこう→外', C.green, FILL.green) },
  { note: '確かめます。「作る→運ぶ→ためる→出す」という順で言い直せます。肝臓は、養分をたくわえたりする別の臓器で、尿はつくりません。', add: m('作る→運ぶ→ためる→出す', C.green, FILL.green) },
], '答え：じん臓→にょう管→ぼうこう→体の外');

// c31 呼吸のしくみ
const chest = (): DiagramElement[] => [
  ln(90, 30, 230, 30, C.ink, false, 3), ln(90, 30, 90, 112, C.ink, false, 3), ln(230, 30, 230, 112, C.ink, false, 3),
  ell(160, 64, 44, 32, C.blue, FILL.blue),
];
const dome = (color: string, w = 2): DiagramElement[] => [ln(90, 112, 160, 98, color, false, w), ln(160, 98, 230, 112, color, false, w)];
const c31 = show([
  { note: '胸は、ろっ骨と、胸とおなかのさかいの横隔膜（おうかくまく）でかこまれた空間です。肺は、その中に入っています。', add: [...chest(), ...dome(C.gray), lb(86, 72, 'ろっ骨', 11, C.gray, 'end'), lb(236, 124, '横隔膜', 11, C.gray, 'start'), lb(160, 68, '肺', 12, C.blue, 'middle', true), ...m('胸の空間の中に肺がある')] },
  { note: '❓肺は、自分でふくらむことができるでしょうか。肺にはふくらむ筋肉がありません。まわりの空間が広がると、いっしょに広がります。', add: m('肺は自分でふくらめない', C.blue, FILL.blue) },
  { note: '❓息をすうとき、ろっ骨はどう動くでしょう。上に持ち上がって、胸を広げます。', add: [ar(70, 60, 70, 36, C.red), ar(250, 60, 250, 36, C.red), lb(70, 26, 'ろっ骨↑', 11, C.red, 'middle', true), ...m('ろっ骨が上がる', C.red, FILL.red)] },
  { note: '❓横隔膜は、どう動くでしょう。ドームの形がたいらになるように、下に引き下がります。胸の空間が、下にも広がります。', add: [ln(90, 112, 230, 112, C.red, false, 3), ar(160, 102, 160, 120, C.red), lb(160, 140, '横隔膜↓', 11, C.red, 'middle', true), ...m('横隔膜が下がる', C.red, FILL.red)] },
  { note: '❓その結果、胸の空間はどうなるのでしょう。広がります。空間が広がると、肺がふくらんで、外の空気が入ってきます。', add: m('空間が広がる→空気が入る', C.green, FILL.green) },
  { note: '答え。息をすうときは、ろっ骨は上がり、横隔膜は下がります。', add: m('ろっ骨↑　横隔膜↓', C.green, FILL.green) },
  { note: '確かめます。息をはくときは、すべて逆になります。ろっ骨は下がり、横隔膜は上がって、胸の空間がせまくなり、空気が外に出ます。', add: m('はくときは逆の動き', C.green, FILL.green) },
], '答え：ろっ骨は上がり、横隔膜は下がる');

// c32 うでの筋肉
const arm = (): DiagramElement[] => [
  ln(50, 100, 150, 100, C.gray, false, 8), ln(150, 100, 215, 48, C.gray, false, 6),
  lb(222, 46, '前うで', 10, C.gray, 'start'),
];
const c32 = show([
  { note: 'うでの上うでには、内側（上側）と外側（下側）に、2つの筋肉がついています。', add: [...arm(), ell(100, 86, 45, 9, C.red, FILL.red), ell(100, 114, 45, 9, C.blue, FILL.blue), lb(100, 66, '内側の筋肉', 10, C.red, 'middle'), lb(100, 142, '外側の筋肉', 10, C.blue, 'middle'), ...m('2つの筋肉がついている')] },
  { note: '❓筋肉は、どんなはたらきをするのでしょう。ちぢむことしかできません。自分でのびる力はありません。', add: m('筋肉はちぢむだけ', C.blue, FILL.blue) },
  { note: '❓ものを持ち上げて、うでを曲げるとき、どちらがちぢむでしょう。内側の筋肉がちぢんで、前うでを引き上げます。ちぢんだ筋肉は太くなって、力こぶになります。', add: [ell(110, 84, 28, 12, C.red, FILL.red), lb(110, 50, '力こぶ', 11, C.red, 'middle', true), ...m('内側がちぢむ→力こぶ', C.red, FILL.red)] },
  { note: '❓このとき、外側の筋肉は、どうなっているでしょう。ゆるんで、引きのばされています。', add: [ell(100, 114, 52, 6, C.blue, FILL.blue), ...m('外側はゆるんでいる', C.blue, FILL.blue)] },
  { note: '❓うでをのばすときは、どうなるでしょう。逆になります。外側の筋肉がちぢんで、内側の筋肉がゆるみます。', add: m('のばすときは外側がちぢむ', C.purple, FILL.purple) },
  { note: '❓両方がちぢんだり、両方がゆるんだりすることはあるでしょうか。両方ちぢむと引き合って動けず、両方ゆるむとささえられません。2つで1組として、反対のはたらきをします。', add: m('2つで1組・反対のはたらき', C.main, FILL.warm) },
  { note: '答え。うでを曲げるとき、内側の筋肉がちぢみ、外側の筋肉がゆるみます。', add: m('内側ちぢむ・外側ゆるむ', C.green, FILL.green) },
], '答え：内側の筋肉がちぢみ、外側の筋肉がゆるむ');

// c33 ひとみの大きさ
const eyes = (): DiagramElement[] => [
  disc(80, 90, 38, C.gray, '#FFFFFF'), disc(80, 90, 7, C.ink, C.ink),
  lb(80, 36, '明るい所', 12, C.main, 'middle', true), lb(240, 36, '暗い所', 12, C.blue, 'middle', true),
];
const c33 = show([
  { note: '明るい場所では、目の中央の黒い部分「ひとみ」は小さくなっています。', add: [...eyes(), ...m('明るい所のひとみは小さい')] },
  { note: '暗い部屋に入った直後です。入ってくる光が少なくて、ものがほとんど見えません。ひとみは、まだ小さいままです。', add: [disc(240, 90, 38, C.gray, '#FFFFFF'), disc(240, 90, 7, C.ink, C.ink), ...m('入った直後は光が少ない', C.blue, FILL.blue)] },
  { note: '❓見えるようにするために、目は光をどうやって集めるのでしょう。ひとみを大きく開きます。', add: [ar(125, 90, 195, 90, C.red), disc(240, 90, 20, C.ink, C.ink), ...m('ひとみを大きく開く', C.red, FILL.red)] },
  { note: '❓大きく開くと、何がふえるのでしょう。目に入る光の量がふえます。少ない光を、できるだけ多く取りこんで、見えやすくします。', add: [ar(190, 54, 222, 78, C.main), ar(215, 52, 236, 74, C.main), ar(245, 50, 246, 70, C.main), ...m('入る光の量がふえる', C.main, FILL.warm)] },
  { note: '❓明るい所では、なぜ小さくなるのでしょう。光が入りすぎると、まぶしくて目をいためるので、ひとみを小さくして光をへらします。', add: [lb(80, 148, '小さい＝光をへらす', 10, C.main, 'middle'), lb(240, 148, '大きい＝光をふやす', 10, C.blue, 'middle'), ...m('明るい→小さく、暗い→大きく', C.purple, FILL.purple)] },
  { note: '答え。暗い所では、ひとみは大きくなります。理由は、目に入る光の量をふやして、見えやすくするためです。', add: m('大きくなる→光をふやす', C.green, FILL.green) },
  { note: '確かめます。暗い所から急に外へ出ると、まぶしく感じて、ひとみは小さくなります。「暗いと大きく、明るいと小さく」が結論です。', add: m('暗→大・明→小で光を調節', C.green, FILL.green) },
], '答え：大きくなる。光の量をふやして見えやすくするため');

// c34 カエルの成長
const fx = (i: number) => 10 + i * 62;
const c34Box = (i: number, t: string, color: string, fill: string): DiagramElement[] => [
  ...(i > 0 ? [ar(fx(i) - 9, 62, fx(i) - 1, 62, color)] : []),
  bx(fx(i), 40, 52, 44, t, color, fill, 10),
];
const c34 = show([
  { note: 'カエルは、たまごから、おたまじゃくしを経て、成体のカエルになります。このあいだに、呼吸のしかたとからだのつくりが変わります。', add: [...c34Box(0, 'たまご', C.gray, FILL.gray), ...c34Box(1, 'おたま\nじゃくし', C.blue, FILL.blue), ...m('たまごからおたまじゃくしへ')] },
  { note: '❓水の中で生活するおたまじゃくしは、何で呼吸するでしょう。魚と同じ、えらです。このあいだ、あしはありません。', add: [lb(36, 104, 'えらで呼吸', 10, C.blue, 'middle'), lb(98, 104, 'えらで呼吸', 10, C.blue, 'middle'), ...m('水中はえらで呼吸', C.blue, FILL.blue)] },
  { note: '❓あしは、前と後ろのどちらが先に出るでしょう。先に後ろあしが出ます。', add: [...c34Box(2, '後ろあし\nが出る', C.purple, FILL.purple), lb(160, 104, 'えらで呼吸', 10, C.blue, 'middle'), ...m('先に後ろあしが出る', C.purple, FILL.purple)] },
  { note: '次に、前あしが出ます。❓このころ、からだの中で肺ができはじめ、えらが小さくなっていきます。', add: [...c34Box(3, '前あし\nが出る', C.purple, FILL.purple), lb(222, 104, 'えら→肺', 10, C.main, 'middle'), ...m('次に前あしが出る', C.purple, FILL.purple)] },
  { note: '❓陸にあがるころには、どうなるのでしょう。尾が短くなって消え、肺と皮ふで呼吸する、カエルの姿になります。', add: [...c34Box(4, 'カエル', C.green, FILL.green), lb(272, 104, '肺と皮ふ', 10, C.green, 'middle'), ...m('尾が消えて肺で呼吸', C.green, FILL.green)] },
  { note: '答え。おたまじゃくしは、水中でえらで呼吸し、まず後ろあし、次に前あしが出て、尾が短くなって陸にあがります。', add: m('えら→後ろあし→前あし→肺', C.green, FILL.green) },
  { note: '確かめます。「前あしが先」は順序が逆、「一生えらで呼吸」は成体が陸で生活することと合いません。', add: m('前あしが先は誤り', C.green, FILL.green) },
], '答え：えらで呼吸し、後ろあし→前あしの順に出て、尾が短くなる');

// c35 養分と熱の量
const c35Row = (i: number): number => 24 + i * 42;
const c35Left = (i: number, t: string, color: string, fill: string): DiagramElement => bx(10, c35Row(i), 86, 32, t, color, fill, 10);
const c35Mul = (i: number, t: string, color: string): DiagramElement[] => [lb(104, c35Row(i) + 20, t, 12, color, 'start'), lb(168, c35Row(i) + 20, '＝', 12, C.ink, 'start')];
const c35Res = (i: number, t: string, color: string, fill: string): DiagramElement => bx(190, c35Row(i), 80, 32, t, color, fill, 13);
const c35 = show([
  { note: '食品100gには、たんぱく質20g、脂肪10g、炭水化物30gがふくまれていて、残りは水分などです。', add: [c35Left(0, 'たんぱく質\n20g', C.blue, FILL.blue), c35Left(1, '脂肪\n10g', C.red, FILL.red), c35Left(2, '炭水化物\n30g', C.green, FILL.green), ...m('100g中の養分とその量')] },
  { note: '❓熱の量は、どう求めるのでしょう。養分ごとに、「重さ×1gあたりの熱の量」を計算します。たんぱく質と炭水化物は4kcal、脂肪は9kcalです。', add: [...c35Mul(0, '× 4kcal', C.blue), ...c35Mul(1, '× 9kcal', C.red), ...c35Mul(2, '× 4kcal', C.green), ...m('1gあたり 4・9・4kcal')] },
  { note: 'たんぱく質は、20g×4kcal＝80kcal。', add: [c35Res(0, '80kcal', C.blue, FILL.blue), ...m('20×4＝80kcal', C.blue, FILL.blue)] },
  { note: '脂肪は、10g×9kcal＝90kcal。重さは少なくても、1gあたりの熱が大きいので、90kcalになります。', add: [c35Res(1, '90kcal', C.red, FILL.red), ...m('10×9＝90kcal', C.red, FILL.red)] },
  { note: '炭水化物は、30g×4kcal＝120kcal。', add: [c35Res(2, '120kcal', C.green, FILL.green), ...m('30×4＝120kcal', C.green, FILL.green)] },
  { note: '❓3つを合わせると、いくらでしょう。80＋90＋120＝290kcalです。', add: m('80＋90＋120＝290kcal', C.main, FILL.warm) },
  { note: '❓残りの水分などは、どうなるのでしょう。熱を出さないので、計算に入れません。100gのうち60gが養分で、残り40gは0kcalです。', add: m('水分40gは0kcal', C.gray, FILL.gray) },
  { note: '答え。290kcalです。確かめ：脂肪は10gだけですが、全体の約3割を占めています。', add: m('答え：290kcal', C.green, FILL.green) },
], '答え：290kcal');

// c36 血液の成分と量
const c36Cols = ['赤血球', '白血球', '血小板', '血しょう'];
const c36Roles = ['酸素を運ぶ', '細菌をたいじ', '出血を止める', '養分などを運ぶ'];
const c36 = show([
  { note: '血液は、赤血球・白血球・血小板などの血球と、液体の血しょうからできています。', add: [...c36Cols.map((t, i) => bx(cx4[i] - 35, 24, 70, 34, t, i < 3 ? C.red : C.blue, i < 3 ? FILL.red : FILL.blue, 12)), ...m('血液のなかま')] },
  { note: '(1) ❓肺で酸素を受け取って運ぶのは、どれでしょう。赤血球です。ほかに、白血球は細菌をたいじし、血小板は出血を止め、血しょうは養分などを運びます。', add: [...c36Roles.map((t, i) => lb(cx4[i], 80, t, 10, C.gray, 'middle')), ar(cx4[0], 62, cx4[0], 68, C.red), ...m('(1) 酸素を運ぶ→赤血球', C.red, FILL.red)] },
  { note: '(2) 血液の量を求めます。体重52kgは、52000gです。血液の重さは、体重の13分の1です。', add: fresh(bx(20, 24, 280, 34, '52kg＝52000g　→　13分の1', C.blue, FILL.blue, 13), ...m('まず体重をgにそろえる', C.blue, FILL.blue)) },
  { note: '52000÷13＝4000g。血液1mLが1gなので、4000mLです。', add: [bx(20, 70, 280, 34, '52000÷13＝4000g＝4000mL', C.green, FILL.green, 13), ...m('(2) 血液は4000mL', C.green, FILL.green)] },
  { note: '(3) ❓血しょうは、何％でしょう。血球が45％なので、残りの55％が血しょうです。長い棒で、全体を4000mLとして見てみます。', add: [rect(20, 118, 126, 30, C.red, FILL.red), rect(146, 118, 154, 30, C.blue, FILL.blue), lb(83, 138, '血球45％', 11, C.ink, 'middle'), lb(223, 138, '血しょう55％', 11, C.ink, 'middle'), ...m('血しょうは全体の55％')] },
  { note: '血しょうの量は、4000mL×0.55＝2200mLです。', add: [lb(160, 162, '全体4000mL', 11, C.gray, 'middle'), ...m('(3) 4000×0.55＝2200mL', C.blue, FILL.blue)] },
  { note: '答え。(1) 赤血球、(2) 4000mL、(3) 2200mLです。', add: m('赤血球・4000mL・2200mL', C.green, FILL.green) },
  { note: '確かめます。血球は 4000×0.45＝1800mL。血球1800mL＋血しょう2200mL＝4000mLで、(2)と一致します。', add: m('1800＋2200＝4000で一致', C.green, FILL.green) },
], '答え：(1) 赤血球 (2) 4000mL (3) 2200mL');

// c37 メダカのたまごと積算温度
const c37 = show([
  { note: 'メダカのたまごは、水温と日数をかけた値が、約250になるとかえります。この「たまっていく量」を追いかけて考えます。', add: [bx(30, 24, 260, 40, '水温×日数＝約250で かえる', C.main, FILL.warm, 14), ...m('たまった量が250でかえる')] },
  { note: '(1) 水温25℃のとき。❓かえるまでの日数は、250÷25＝10日です。', add: [bx(30, 76, 260, 32, '(1) 25℃：250÷25＝10日', C.blue, FILL.blue, 13), ...m('(1) 10日', C.blue, FILL.blue)] },
  { note: '(2) 水温20℃のとき。250÷20＝12.5日です。', add: [bx(30, 116, 260, 32, '(2) 20℃：250÷20＝12.5日', C.green, FILL.green, 13), ...m('(2) 12.5日', C.green, FILL.green)] },
  { note: '(3) 水温がとちゅうで変わります。❓この場合は、たまった量を、棒で足し合わせて考えます。全体の棒の長さが250です。', add: fresh(rect(35, 80, 250, 30, C.gray, '#FFFFFF'), lb(160, 66, '全体＝250でかえる', 11, C.gray, 'middle', true), ...m('たまった量を足していく')) },
  { note: 'はじめの5日間は水温20℃です。20×5＝100たまります。', add: [rect(35, 80, 100, 30, C.blue, FILL.blue), lb(85, 100, '20×5＝100', 11, C.ink, 'middle', true), ...m('はじめの5日で100', C.blue, FILL.blue)] },
  { note: '❓残りは、いくらでしょう。250−100＝150です。この150を、水温25℃でためます。150÷25＝6日かかります。', add: [rect(135, 80, 150, 30, C.green, FILL.green), lb(210, 100, '150÷25＝6日', 11, C.ink, 'middle', true), ...m('残り150を25℃で6日', C.green, FILL.green)] },
  { note: '全部で、5＋6＝11日です。', add: m('(3) 5＋6＝11日', C.main, FILL.warm) },
  { note: '答え。(1) 10日、(2) 12.5日、(3) 11日です。確かめ：20×5＋25×6＝100＋150＝250で、ちょうど250になります。', add: m('20×5＋25×6＝250で一致', C.green, FILL.green) },
], '答え：(1) 10日 (2) 12.5日 (3) 11日');

// ═════════ 地学 ═════════

// c38 雲量と天気
const skyX = [10, 88, 166, 244];
const cloudAmt = [1, 5, 9, 10];
const c38Skies = (): DiagramElement[] => skyX.flatMap((x, i) => [rect(x, 40, 64, 64, C.blue, '#BAE6FD'), lb(x + 32, 32, ['9時', '正午', '3時', '6時'][i], 11, C.ink, 'middle', true)]);
const c38Clouds = (): DiagramElement[] => skyX.flatMap((x, i) => [rect(x, 40, 64 * cloudAmt[i] / 10, 64, C.gray, '#F1F5F9'), lb(x + 32, 120, `雲量${cloudAmt[i]}`, 11, C.gray, 'middle')]);
const c38Res = (i: number, t: string, color: string): DiagramElement => lb(skyX[i] + 32, 144, t, 13, color, 'middle', true);
const c38 = show([
  { note: '空全体の広さを10としたとき、雲が空をおおっている割合が「雲量」です。4つの時刻の空を見ていきます。', add: [...c38Skies(), ...m('4つの時刻の空')] },
  { note: '雲の量は、時間とともに、1→5→9→10と増えています。灰色の部分が雲です。', add: [...c38Clouds(), ...m('雲量＝雲の割合（空全体10）')] },
  { note: '❓午前9時、雲量1は、どの天気でしょう。0〜1は雲がほとんどない「快晴」です。', add: [c38Res(0, '快晴', C.blue), ...m('0〜1は快晴', C.blue, FILL.blue)] },
  { note: '❓正午、雲量5は、どの天気でしょう。2〜8は、雲があっても青空が見える「晴れ」です。', add: [c38Res(1, '晴れ', C.main), ...m('2〜8は晴れ', C.main, FILL.warm)] },
  { note: '❓午後3時、雲量9は、どの天気でしょう。9〜10は、空がほとんど雲におおわれて、「くもり」です。雨はふっていません。', add: [c38Res(2, 'くもり', C.gray), ...m('9〜10はくもり', C.gray, FILL.gray)] },
  { note: '❓午後6時、雲量10は、くもりでしょうか。雨がふっているので、雲量に関係なく「雨」です。', add: [ln(252, 60, 248, 72, C.blue, false, 2), ln(266, 74, 262, 86, C.blue, false, 2), ln(280, 58, 276, 70, C.blue, false, 2), c38Res(3, '雨', C.red), ...m('雨がふれば雨が優先', C.red, FILL.red)] },
  { note: '答え。午前9時は快晴、正午は晴れ、午後3時はくもり、午後6時は雨です。', add: m('快晴→晴れ→くもり→雨', C.green, FILL.green) },
], '答え：快晴・晴れ・くもり・雨');

// c39 百葉箱
const hyaku = (): DiagramElement[] => [
  ln(40, 150, 300, 150, C.ink, false, 3),
  ln(125, 120, 125, 150, C.gray, false, 4), ln(195, 120, 195, 150, C.gray, false, 4),
  rect(105, 60, 110, 60, C.ink, '#FFFFFF'),
];
const c39 = show([
  { note: '気温をはかる百葉箱（ひゃくようばこ）です。色・とびらの向き・置く高さの3つに、理由があります。', add: [...hyaku(), lb(160, 94, '百葉箱', 12, C.ink, 'middle', true), ...m('百葉箱のつくりと置き方')] },
  { note: '❓なぜ白くぬるのでしょう。黒だと日光を吸収して、箱が熱くなり、気温がはかれません。白は日光をはね返します。', add: [disc(40, 40, 14, C.main, FILL.yellow), ar(58, 46, 102, 70, C.red), lb(40, 70, '南', 12, C.main, 'middle', true), ...m('白で日光をはね返す', C.red, FILL.red)] },
  { note: '❓とびらは、どちら向きでしょう。開けたとき、日光が温度計に直接当たらないように、日が当たりにくい北向きにします。日本では、太陽はおもに南にあります。', add: [rect(215, 66, 10, 48, C.main, FILL.warm), lb(230, 64, 'とびらは', 10, C.main, 'start'), lb(230, 76, '北向き', 10, C.main, 'start'), ...m('とびらは北向き', C.main, FILL.warm)] },
  { note: '❓なぜ地面から高いところに置くのでしょう。日光で温まった地面の熱の影響をさけるためです。約1.2〜1.5mの高さに置きます。', add: [ar(160, 124, 160, 146, C.blue), lb(232, 138, '地上1.2〜1.5m', 10, C.blue, 'start'), ...m('地面の熱をさけ約1.2m', C.blue, FILL.blue)] },
  { note: '❓まわりのつくりは、どうなっているでしょう。よろい戸のようなすき間で、雨や日光を防ぎながら、風を通します。', add: [ln(112, 72, 208, 72, C.gray), ln(112, 84, 208, 84, C.gray), ln(112, 108, 208, 108, C.gray), ...m('よろい戸で風通しをよくする', C.green, FILL.green)] },
  { note: '答え。日光をはね返す白色にぬり、とびらは北向きで、地上約1.2〜1.5mの高さに置きます。', add: m('白・北向き・1.2〜1.5m', C.green, FILL.green) },
  { note: '確かめます。黒色は熱くなり、南向きのとびらは開けたとき日光が入り、地面にじかに置くと地面の熱を受けます。ほかの選択肢は条件に合いません。', add: m('黒・南向き・地面は×', C.green, FILL.green) },
], '答え：白色・とびらは北向き・地上約1.2〜1.5m');

// c40 気温と地温の1日の変化
const hx = (h: number) => 30 + (260 / 15) * (h - 6);
const ty40 = (t: number) => 160 - (t - 10) * 4.6;
const hours = [6, 9, 12, 13, 14, 15, 18, 21];
const air = [14, 18, 23, 24, 25, 24, 20, 16];
const gnd = [13, 22, 33, 34, 32, 29, 21, 16];
const line40 = (vals: number[], color: string): DiagramElement[] => [
  ...vals.slice(1).map((v, i) => ln(hx(hours[i]), ty40(vals[i]), hx(hours[i + 1]), ty40(v), color, false, 2.5)),
  ...vals.map((v, i) => disc(hx(hours[i]), ty40(v), 3, color, color)),
];
const c40 = show([
  { note: 'よく晴れた日の、気温と地温の表をグラフにします。横は時刻、縦は温度です。太陽がいちばん高くなったのは、正午ごろです。', add: [ln(24, 160, 300, 160, C.ink, false, 2), ln(24, 20, 24, 160, C.ink, false, 2), lb(30, 16, '温度（℃）', 10, C.gray, 'start'), ...hours.map((h) => lb(hx(h), 168 - 6, String(h), 10, C.gray, 'middle')), ...m('時刻（時）と温度')] },
  { note: '地温（地面の温度）を見ます。6時の13℃から上がって、13時に34℃で最高になり、そのあと下がります。', add: [...line40(gnd, C.red), lb(hx(13), 40, '地温', 11, C.red, 'middle', true), ...m('地温の最高は13時', C.red, FILL.red)] },
  { note: '気温を見ます。6時の14℃から上がって、14時に25℃で最高になり、そのあと下がります。', add: [...line40(air, C.blue), lb(hx(14), 80, '気温', 11, C.blue, 'middle', true), ...m('気温の最高は14時', C.blue, FILL.blue)] },
  { note: '❓どちらが先に最高になるでしょう。地温が13時、気温が14時で、気温の最高のほうが、1時間おそくなっています。', add: [bx(200, 24, 110, 22, '地温の最高：13時', C.red, FILL.red, 10), bx(200, 50, 110, 22, '気温の最高：14時', C.blue, FILL.blue, 10), ...m('気温のほうがおそい', C.blue, FILL.blue)] },
  { note: '❓なぜ、気温の最高は正午よりおそいのでしょう。太陽の光はまず地面を温め、温まった地面が空気を下から温めるからです。熱が伝わるのに時間がかかります。', add: m('正午→地温13時→気温14時', C.main, FILL.warm) },
  { note: '答え。気温の最高は、地温の最高より、おそい時刻になります。', add: m('気温の最高のほうがおそい', C.green, FILL.green) },
  { note: '確かめます。変化の大きさは、地温が34−13＝21℃、気温が25−14＝11℃で、地温のほうが大きくなります。「地温より気温のほうが大きい」は誤りです。', add: m('変化 地温21℃＞気温11℃', C.green, FILL.green) },
], '答え：気温の最高は、地温の最高よりおそい時刻になる');

// c41 台風
const typh = (): DiagramElement[] => [disc(160, 95, 48, C.gray, FILL.gray), disc(160, 95, 8, C.gray, '#FFFFFF'), lb(285, 24, '北↑', 11, C.gray, 'middle', true)];
const c41 = show([
  { note: '台風を、上から見た図です。中心のまわりを、風がうずをまいています。', add: [...typh(), ...m('台風を上から見た図')] },
  { note: '❓北半球の台風の風は、どちらまわりでしょう。上から見て反時計回りです。東側では北向き、北側では西向き、西側では南向き、南側では東向きに風がふきます。', add: [ar(208, 108, 208, 80, C.blue), ar(175, 47, 145, 47, C.blue), ar(112, 80, 112, 110, C.blue), ar(145, 143, 175, 143, C.blue), ...m('反時計回りにふく', C.blue, FILL.blue)] },
  { note: '(1) 観測地点は、台風の中心の真西にあります。❓西側の風は、どちら向きでしょう。南向きです。南へふく風は、北からふいてくるので、風向は「北」です。', add: [disc(62, 95, 6, C.red, C.red), lb(62, 118, '観測地点', 10, C.red, 'middle', true), ar(62, 58, 62, 84, C.red), lb(62, 50, '北から', 10, C.red, 'middle'), ...m('(1) 西側は南向き→北風', C.red, FILL.red)] },
  { note: '(2) 台風は北へ、秒速15mで進んでいます。', add: [ar(262, 150, 262, 100, C.green), lb(262, 90, '進む：秒速15m', 10, C.green, 'middle', true), ...m('台風は北へ秒速15m', C.green, FILL.green)] },
  { note: '❓右側（東側）では、風はどうなるでしょう。回転による風は北向きで、台風の進む向きと同じです。足し算で、30＋15＝45mです。', add: [lb(214, 124, '右：45m', 11, C.red, 'start', true), ...m('右側：30＋15＝45m', C.red, FILL.red)] },
  { note: '❓左側（西側）では、どうでしょう。回転による風は南向きで、台風の進む向きと逆です。引き算で、30−15＝15mです。', add: [lb(20, 140, '左：15m', 11, C.blue, 'start', true), ...m('左側：30−15＝15m', C.blue, FILL.blue)] },
  { note: '答え。(1) 北、(2) 右側は秒速45m、左側は秒速15mです。', add: m('(1) 北　(2) 右45m・左15m', C.green, FILL.green) },
  { note: '確かめます。右と左の差は 45−15＝30mで、進む速さ15mの2倍です。回転の風30mを中心に、15mずつ上と下にずれていて、筋が通ります。', add: m('45−15＝30m＝15m×2', C.green, FILL.green) },
], '答え：(1) 北 (2) 右側45m・左側15m');

// c42 天気は西から東へ
const c42Cities = (): DiagramElement[] => [ci(60, 90, 20, '大阪', C.red, FILL.red, 12), ci(260, 90, 20, '東京', C.blue, FILL.blue, 12), ln(82, 90, 238, 90, C.gray, true, 2), lb(160, 80, '約400km', 11, C.gray, 'middle')];
const c42 = show([
  { note: '4月のある日の午前6時に、大阪で雨がふりはじめました。東京まで、直線きょりは約400kmです。', add: [...c42Cities(), ...m('大阪で午前6時に雨')] },
  { note: '❓雲は、何に乗って動くのでしょう。日本の上空にふく強い西風です。雲は、西から東へ流されます。', add: [ar(80, 56, 240, 56, C.blue), lb(160, 46, '強い西風', 11, C.blue, 'middle', true), ...m('上空の強い西風に乗る', C.blue, FILL.blue)] },
  { note: '雲の速さは、時速約40kmです。1時間で40km進みます。', add: m('雲は時速40km', C.main, FILL.warm) },
  { note: '❓大阪から東京まで、何時間かかるでしょう。時間は、きょり÷速さです。400÷40＝10時間です。', add: fresh(bx(40, 30, 240, 40, '時間＝きょり÷速さ', C.blue, FILL.blue, 14), bx(40, 80, 240, 40, '400÷40＝10時間', C.green, FILL.green, 14), ...m('10時間かかる', C.green, FILL.green)) },
  { note: '❓では、何時ごろでしょう。午前6時の10時間後です。6＋10＝16で、午後4時になります。', add: [bx(40, 128, 240, 34, '午前6時＋10時間＝午後4時', C.red, FILL.red, 13), ...m('(1) 午後4時ごろ', C.red, FILL.red)] },
  { note: '(2) ❓天気が西から東へ移る理由は、上空の強い西風です。この風を「偏西風（へんせいふう）」といいます。', add: m('(2) 偏西風', C.green, FILL.green) },
  { note: '確かめます。時速40kmで10時間進むと、40×10＝400kmで、大阪から東京までのきょりと一致します。', add: m('40×10＝400kmで一致', C.green, FILL.green) },
], '答え：(1) 午後4時ごろ (2) 偏西風');

// c43 フェーン現象
const mtn = (): DiagramElement[] => [pg([[20, 150], [160, 50], [300, 150]], C.gray, FILL.gray), ln(10, 150, 310, 150, C.ink, false, 2)];
const c43 = show([
  { note: '標高0mの海岸の、気温28℃の湿った空気が、標高1000mの山をのぼって、反対側へふきおります。', add: [...mtn(), lb(20, 164, '28℃', 12, C.red, 'start', true), lb(8, 104, '500m', 10, C.gray, 'start'), lb(8, 54, '1000m', 10, C.gray, 'start'), ...m('海面28℃の湿った空気')] },
  { note: '(1) ❓雲ができるまでの0〜500mは、何℃下がるでしょう。100mで1℃なので、500mで5℃下がります。28−5＝23℃です。', add: [ln(40, 100, 90, 100, C.gray, true), lb(82, 92, '23℃', 12, C.blue, 'end', true), ...m('500mまで 1℃/100m→23℃', C.blue, FILL.blue)] },
  { note: '❓500mで雲ができはじめます。雲の中では、水蒸気が水のつぶに変わるときに熱が出て、温度が下がりにくくなります。', add: [ell(112, 76, 30, 12, C.gray, '#FFFFFF'), lb(112, 80, '雲', 11, C.gray, 'middle', true), ...m('雲の中は100mで0.5℃', C.purple, FILL.purple)] },
  { note: '(2) 500〜1000mの500mで、5×0.5＝2.5℃下がります。山頂は 23−2.5＝20.5℃です。', add: [lb(160, 40, '20.5℃', 12, C.blue, 'middle', true), ...m('(2) 23−2.5＝20.5℃', C.blue, FILL.blue)] },
  { note: '(3) ❓ふきおりる空気は、雲が消えているので、100mくだるごとに1℃上がります。1000mで10℃上がるので、20.5＋10＝30.5℃です。', add: [ar(176, 62, 270, 134, C.red), lb(300, 164, '30.5℃', 12, C.red, 'end', true), ...m('(3) 20.5＋10＝30.5℃', C.red, FILL.red)] },
  { note: '答え。(1) 23℃、(2) 20.5℃、(3) 30.5℃です。', add: m('23℃・20.5℃・30.5℃', C.green, FILL.green) },
  { note: '確かめます。のぼりで下がった合計は5＋2.5＝7.5℃、くだりで上がった合計は10℃。差は2.5℃で、はじめの28℃より2.5℃高い30.5℃です。これが、フェーン現象です。', add: m('−7.5＋10＝2.5℃高い', C.green, FILL.green) },
], '答え：(1) 23℃ (2) 20.5℃ (3) 30.5℃');

// c44 太陽の黒点
const spotX = [130, 150, 172, 192], spotY = [80, 84, 86, 84];
const c44 = show([
  { note: '太陽の表面にある黒い点が「黒点」です。左が東、右が西です。', add: [disc(160, 85, 50, C.main, FILL.yellow), lb(90, 90, '東', 12, C.ink, 'middle', true), lb(230, 90, '西', 12, C.ink, 'middle', true), ...m('太陽の表面の黒点')] },
  { note: '❓同じ黒点を数日観察すると、どう動いて見えるでしょう。東から西へ、少しずつ動いて見えます。', add: [...spotX.map((x, i) => disc(x, spotY[i], 4, C.ink, C.ink)), ar(125, 118, 195, 118, C.red), lb(160, 130, '東→西', 11, C.red, 'middle', true), ...m('日がたつと東から西へ', C.red, FILL.red)] },
  { note: '❓なぜ動いて見えるのでしょう。黒点は太陽の表面にくっついていて、太陽が自転しているからです。約27日で1回転します。', add: m('太陽が自転しているから', C.blue, FILL.blue) },
  { note: '❓なぜ黒く見えるのでしょう。まわりより、温度が低いからです。', add: [bx(20, 142, 120, 24, 'まわり約6000℃', C.main, FILL.warm, 11), bx(180, 142, 120, 24, '黒点約4000℃', C.ink, FILL.gray, 11), ...m('温度がひくいので暗く見える', C.main, FILL.warm)] },
  { note: '選択肢アは「温度が高いので黒く見える」。黒点は温度が低いので、まちがいです。', add: m('ア：温度が高い→まちがい', C.red, FILL.red) },
  { note: '選択肢ウは地球の自転、エは月のかげ。地球の自転なら太陽全体が動き、月のかげなら日食です。どちらも黒点ではありません。', add: m('ウ・エも黒点の説明でない', C.red, FILL.red) },
  { note: '答え。同じ黒点が東から西へ動いて見えるのは、太陽が自転しているからです。', add: m('東→西は太陽の自転', C.green, FILL.green) },
], '答え：同じ黒点が東から西へ動いて見えるのは、太陽が自転しているから');

// c45 日食
const c45Row = (i: number): number => 18 + i * 36;
const c45 = show([
  { note: '新月のころ、太陽・月・地球が一直線にならぶと、日食が起こります。（図は大きさの比を、そのまま表していません。）', add: [disc(50, 80, 36, C.main, FILL.yellow), disc(170, 80, 7, C.gray, FILL.gray), disc(270, 80, 12, C.blue, FILL.blue), lb(50, 130, '太陽', 11, C.main, 'middle', true), lb(170, 130, '月', 11, C.gray, 'middle', true), lb(270, 130, '地球', 11, C.blue, 'middle', true), ...m('新月：太陽・月・地球の順')] },
  { note: '❓空での見かけの大きさは、何で決まるのでしょう。「距離÷直径」が小さいほど、大きく見えます。', add: m('距離÷直径が小さい→大きい', C.blue, FILL.blue) },
  { note: '太陽の「距離÷直径」を計算します。1億5000万km÷140万km＝約107です。', add: fresh(bx(20, c45Row(0), 280, 30, '太陽：1億5000万÷140万＝約107', C.main, FILL.warm, 12), ...m('太陽は約107')) },
  { note: '(1) 月が36万kmのとき。36万÷3500＝約103です。', add: [bx(20, c45Row(1), 280, 30, '(1) 月36万km：36万÷3500＝約103', C.blue, FILL.blue, 12), ...m('月は約103', C.blue, FILL.blue)] },
  { note: '❓107と103では、どちらが小さいでしょう。103のほうです。月のほうが大きく見えるので、太陽は完全にかくれます。皆既日食です。', add: [bx(20, c45Row(2), 280, 30, '103＜107：月が大きい→皆既日食', C.red, FILL.red, 12), ...m('(1) 皆既日食', C.red, FILL.red)] },
  { note: '(2) 月が40万kmのとき。40万÷3500＝約114です。', add: [bx(20, c45Row(3), 280, 30, '(2) 月40万km：40万÷3500＝約114', C.blue, FILL.blue, 12), ...m('月は約114', C.blue, FILL.blue)] },
  { note: '❓114と107では、どちらが小さいでしょう。107の太陽のほうです。月が小さく見えるので、太陽が輪のようにはみ出します。金環日食です。', add: [bx(20, c45Row(4), 280, 30, '114＞107：月が小さい→金環日食', C.red, FILL.red, 12), ...m('(2) 金環日食', C.red, FILL.red)] },
  { note: '答え。(1) は皆既日食、(2) は金環日食です。確かめ：月が近いほど大きく見え、遠いほど小さく見えます。', add: m('(1) 皆既　(2) 金環', C.green, FILL.green) },
], '答え：(1) 皆既日食 (2) 金環日食');

// c46 星の南中時刻
const tl = (h: number) => 60 + (22 - h) * -50 + 200; // 22時→260、20時→160、18時→60
const c46Axis = (): DiagramElement[] => [ln(40, 100, 280, 100, C.ink, false, 2)];
const c46Pt = (h: number, up: string, down: string, color: string): DiagramElement[] => [
  disc(tl(h), 100, 6, color, color), lb(tl(h), 76, up, 11, color, 'middle', true), lb(tl(h), 126, down, 11, color, 'middle'),
];
const c46 = show([
  { note: 'ある星が、1月1日の午後10時に南中しました。この星は、毎日、約4分ずつ早く南中します。', add: [...c46Axis(), ...c46Pt(22, '1月1日', '午後10時', C.main), ...m('1月1日 午後10時に南中')] },
  { note: '❓同じ星が、1日にどれだけ早く南中するのでしょう。約4分です。毎日4分ずつ、時刻が早くなっていきます。', add: m('1日に約4分早くなる', C.blue, FILL.blue) },
  { note: '(1) 1月31日は、30日後です。4分×30日＝120分、つまり2時間早くなります。午後10時の2時間前は、午後8時です。', add: [ar(250, 100, 172, 100, C.red), lb(210, 94, '30日で2時間早い', 10, C.red, 'middle'), ...c46Pt(20, '1月31日', '午後8時', C.red), ...m('(1) 4分×30＝120分＝2時間', C.red, FILL.red)] },
  { note: '(2) ❓午後6時に南中するには、午後10時から何時間早くなればよいでしょう。10−6＝4時間、つまり240分です。', add: [...c46Pt(18, '60日後', '午後6時', C.blue), ...m('22時→18時で240分', C.blue, FILL.blue)] },
  { note: '❓1日に4分ずつ早くなるので、240分では何日かかるでしょう。240÷4＝60日です。', add: m('240÷4＝60日', C.blue, FILL.blue) },
  { note: '答え。(1) 午後8時、(2) 60日後です。', add: m('(1) 午後8時　(2) 60日後', C.green, FILL.green) },
  { note: '❓なぜ4分なのでしょう。地球は1日に1回転しながら、太陽のまわりを1日に約1度ずつ進みます。1度回るのに、24時間（1440分）÷360度＝4分かかります。', add: m('1440分÷360度＝4分', C.main, FILL.warm) },
  { note: '確かめます。1か月（30日）で2時間早くなるので、2か月（60日）で4時間早くなり、午後10時が午後6時になります。(1) と (2) が一致します。', add: m('2か月で4時間早くなる', C.green, FILL.green) },
], '答え：(1) 午後8時 (2) 60日後');

// c47 光の速さ
const c47 = show([
  { note: '太陽の光が地球にとどくまでの時間を求めます。太陽と地球は約1億5000万km、光は1秒に約30万km進みます。', add: [disc(40, 70, 24, C.main, FILL.yellow), disc(270, 70, 10, C.blue, FILL.blue), ln(66, 70, 258, 70, C.gray, true, 2), lb(160, 60, '約1億5000万km', 11, C.gray, 'middle'), ...m('光は秒速30万km')] },
  { note: '❓時間は、どう求めるのでしょう。時間＝きょり÷速さです。', add: [bx(60, 104, 200, 34, '時間＝きょり÷速さ', C.blue, FILL.blue, 13), ...m('きょり÷速さ', C.blue, FILL.blue)] },
  { note: '150000000÷300000を計算します。両方から、0を4つずつ消します。すると、15000÷30＝500になります。', add: fresh(bx(30, 28, 260, 34, '150000000÷300000', C.main, FILL.warm, 13), bx(30, 70, 260, 34, '0を4つずつ消す→15000÷30', C.blue, FILL.blue, 13), bx(30, 112, 260, 34, '＝500秒', C.green, FILL.green, 13), ...m('(1) 500秒', C.green, FILL.green)) },
  { note: '500秒は、何分何秒でしょう。60秒で1分なので、500÷60＝8あまり20です。8分20秒です。', add: m('500秒＝8分20秒', C.green, FILL.green) },
  { note: '(2) 月から地球までは、約39万kmです。', add: fresh(disc(60, 70, 10, C.gray, FILL.gray), disc(260, 70, 14, C.blue, FILL.blue), ln(72, 70, 244, 70, C.gray, true, 2), lb(160, 60, '約39万km', 11, C.gray, 'middle'), ...m('月→地球は39万km')) },
  { note: '❓時間は、きょり÷速さです。39万÷30万＝1.3です。1.3秒かかります。', add: [bx(30, 104, 260, 34, '39万÷30万＝1.3秒', C.green, FILL.green, 14), ...m('(2) 1.3秒', C.green, FILL.green)] },
  { note: '答え。(1) 500秒（8分20秒）、(2) 1.3秒です。', add: m('500秒（8分20秒）・1.3秒', C.green, FILL.green) },
  { note: '確かめます。500秒×30万km＝1億5000万kmで、太陽までのきょりと一致します。1.3秒×30万km＝39万kmで、月までのきょりとも一致します。', add: m('500×30万＝1億5000万km', C.green, FILL.green) },
], '答え：(1) 500秒（8分20秒） (2) 1.3秒');

// c48 堆積岩
const rockNames = ['れき岩', '石灰岩', '凝灰岩', 'チャート'];
const rockSub = ['丸いれき\nが固まる', '生き物の\n死がい', '火山灰が\nおし固まる', 'かたい殻\nが積もる'];
const c48 = show([
  { note: '4つの堆積岩（たいせきがん）です。何が積もって固まったかで、種類が分かれます。', add: [...rockNames.map((t, i) => bx(cx4[i] - 35, 20, 70, 32, t, C.main, FILL.warm, 12)), ...rockSub.map((t, i) => bx(cx4[i] - 35, 62, 70, 40, t, C.gray, FILL.gray, 10)), ...m('4つの堆積岩')] },
  { note: '4つの岩石に、うすい塩酸をかけてみます。泡が出るのは、どれでしょう。', add: [...cx4.map((x) => ar(x, 104, x, 114, C.blue)), ...m('うすい塩酸をかけてみる', C.blue, FILL.blue)] },
  { note: '❓れき岩・凝灰岩・チャートは、塩酸をかけても、泡が出ません。', add: [0, 2, 3].map((i) => ci(cx4[i], 132, 12, '×', C.red, FILL.red, 14)).concat(m('3つは泡が出ない', C.red, FILL.red)) },
  { note: '❓石灰岩だけ、泡が出ます。石灰岩は、炭酸カルシウムをふくむので、塩酸でとけて泡を出します。', add: [ci(cx4[1], 132, 12, '泡', C.green, FILL.green, 12), ...m('(1) 石灰岩', C.green, FILL.green)] },
  { note: '(2) ❓出る気体は、何でしょう。二酸化炭素です。石灰水に通すと、白くにごることで確かめられます。', add: [bx(70, 146, 100, 20, '二酸化炭素', C.blue, FILL.blue, 11), ...m('(2) 二酸化炭素', C.blue, FILL.blue)] },
  { note: '(3) ❓火山灰がおし固まってできた岩石は、どれでしょう。凝灰岩です。つぶが細かく、角ばっています。', add: [lb(236, 160, '火山灰→凝灰岩', 10, C.red, 'middle', true), ...m('(3) 凝灰岩', C.red, FILL.red)] },
  { note: '答え。(1) 石灰岩、(2) 二酸化炭素、(3) 凝灰岩です。確かめ：チャートは泡が出ず、鉄のくぎでも傷がつかないほどかたい岩石です。', add: m('石灰岩・二酸化炭素・凝灰岩', C.green, FILL.green) },
], '答え：(1) 石灰岩 (2) 二酸化炭素 (3) 凝灰岩');

// c49 地球の公転と星座
const orbit = (): DiagramElement[] => [...ring(130, 95, 60), ci(130, 95, 16, '太陽', C.main, FILL.yellow, 10)];
const star = (): DiagramElement[] => [lb(290, 80, 'さそり座', 11, C.purple, 'end', true), lb(290, 100, '★', 14, C.purple, 'end', true)];
const c49 = show([
  { note: '地球は、1年かけて、太陽のまわりを1周しています。これを公転といいます。', add: [...orbit(), ...m('地球は太陽のまわりを1年で1周')] },
  { note: '❓夏の夜は、どの方向が見えるでしょう。夜は、太陽と反対側を向いているので、図の右側の遠くが見えます。さそり座が、その方向にあります。', add: [ci(190, 95, 11, '夏', C.red, FILL.red, 10), ar(204, 95, 244, 95, C.red), ...star(), ...m('夏の夜はさそり座の方向を向く', C.red, FILL.red)] },
  { note: '❓半年たつと、地球はどこにいるでしょう。太陽をはさんで、反対側（図の左）に移ります。', add: [ci(70, 95, 11, '冬', C.blue, FILL.blue, 10), ...m('半年後は反対側へ移る', C.blue, FILL.blue)] },
  { note: '❓冬の夜は、どの方向が見えるでしょう。夜は太陽と反対側なので、図の左の遠くが見えます。さそり座は右側（太陽のある側）にあるので、夜には見えません。', add: [ar(56, 95, 20, 95, C.blue), lb(160, 130, 'さそり座は太陽のある側', 10, C.purple, 'middle'), ...m('夜の側にさそり座はない', C.blue, FILL.blue)] },
  { note: '❓では、いつ見えるのでしょう。地球は自転しているので、夜明けが近づくと、太陽のある側が東の空にのぼってきます。さそり座も、夜明け前に東の空にのぼります。', add: m('夜明け前に東からのぼる', C.purple, FILL.purple) },
  { note: '答え。午後9時にはまだ地平線の下にあり、夜明け前に東の空にのぼってきます。', add: m('9時は地平線の下・明け方に東', C.green, FILL.green) },
  { note: '確かめます。星は毎日約4分ずつ早く南中するので、半年（約180日）では 4×180＝720分、つまり12時間ずれます。夏の夜の位置が、冬は昼の位置になります。', add: m('180日×4分＝12時間ずれる', C.green, FILL.green) },
], '答え：午後9時には地平線の下で、夜明け前に東の空にのぼる');

// c50 月から見た地球
const c50 = show([
  { note: '新月のとき、太陽・月・地球は、この順に一直線にならびます。（大きさや距離の比は、そのままではありません。）', add: [disc(40, 90, 30, C.main, FILL.yellow), disc(150, 90, 9, C.gray, FILL.gray), disc(250, 90, 16, C.blue, '#FFFFFF'), lb(40, 138, '太陽', 11, C.main, 'middle', true), lb(150, 138, '月', 11, C.gray, 'middle', true), lb(250, 138, '地球', 11, C.blue, 'middle', true), ...m('新月：太陽・月・地球の順')] },
  { note: '❓地球のどの面に、太陽の光が当たるでしょう。太陽のほう（左側）の面です。この面が、月のほうを向いています。', add: [halfL(250, 90, 16, C.blue, FILL.yellow), ar(75, 56, 232, 56, C.main), lb(150, 48, '太陽の光', 10, C.main, 'middle'), ...m('光が当たる面は月を向く', C.main, FILL.warm)] },
  { note: '❓月から地球を見ると、どう見えるでしょう。太陽は自分の後ろ側にあるので、地球の光っている面が全部見えます。まるく光る、満ちた地球です。', add: fresh(disc(160, 70, 40, C.main, FILL.yellow), lb(160, 130, '月から見た地球', 11, C.ink, 'middle', true), ...m('満ちた地球（まるく光る）', C.main, FILL.warm)) },
  { note: '❓その地球は、空で動くでしょうか。月は、自転と公転の時間が同じで、いつも同じ面を地球に向けています。だから、月の表側の地点から見ると、地球は空のほぼ同じ位置にとどまります。', add: [lb(160, 150, 'ほぼ同じ位置にとどまる', 11, C.blue, 'middle', true), ...m('月は同じ面を地球に向ける', C.blue, FILL.blue)] },
  { note: '❓満月のときは、どうなるでしょう。太陽・地球・月の順になり、地球の夜の側が月を向きます。月から見ると、地球は光らず暗く見えます。', add: m('満月のとき地球は暗い', C.gray, FILL.gray) },
  { note: '答え。まるく全体が光って見えて、空のほぼ同じ位置にとどまって見えます。', add: m('満ちた地球・ほぼ動かない', C.green, FILL.green) },
  { note: '確かめます。地球から見た月の満ち欠けと、月から見た地球の満ち欠けは、逆になります。新月の地球は満ち、満月の地球は暗くなります。', add: m('満ち欠けは地球と月で逆', C.green, FILL.green) },
], '答え：まるく光って見え、空のほぼ同じ位置にとどまる');

export const figuresHonshiken202701RikaChugaku2: Record<string, Figure> = {
  honshiken_2027_01_rika_c26: c26,
  honshiken_2027_01_rika_c27: c27,
  honshiken_2027_01_rika_c28: c28,
  honshiken_2027_01_rika_c29: c29,
  honshiken_2027_01_rika_c30: c30,
  honshiken_2027_01_rika_c31: c31,
  honshiken_2027_01_rika_c32: c32,
  honshiken_2027_01_rika_c33: c33,
  honshiken_2027_01_rika_c34: c34,
  honshiken_2027_01_rika_c35: c35,
  honshiken_2027_01_rika_c36: c36,
  honshiken_2027_01_rika_c37: c37,
  honshiken_2027_01_rika_c38: c38,
  honshiken_2027_01_rika_c39: c39,
  honshiken_2027_01_rika_c40: c40,
  honshiken_2027_01_rika_c41: c41,
  honshiken_2027_01_rika_c42: c42,
  honshiken_2027_01_rika_c43: c43,
  honshiken_2027_01_rika_c44: c44,
  honshiken_2027_01_rika_c45: c45,
  honshiken_2027_01_rika_c46: c46,
  honshiken_2027_01_rika_c47: c47,
  honshiken_2027_01_rika_c48: c48,
  honshiken_2027_01_rika_c49: c49,
  honshiken_2027_01_rika_c50: c50,
};
