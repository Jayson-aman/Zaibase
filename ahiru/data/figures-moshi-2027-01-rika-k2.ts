import type { DiagramElement, Figure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, show, band, fresh, cover, flow } from './diagram-kit';

// 月例模試 2027年1月号（担当B 25問）高校受験 理科の「動く図解」。キーは問題ID。座標は 320×240。
// 図は上（y＜165）に描き、下の帯（y≥170）に短い結論を出す。

/** 下の帯に一言（前のスライドの帯は白でおおいかくして書きかえる）。 */
const m = (text: string, color: string = C.main, fill: string = FILL.warm): DiagramElement[] =>
  band(170, bx(20, 176, 280, 34, text, color, fill, 12));

const rad = (deg: number) => (deg * Math.PI) / 180;

// ═════════ 生物 ═════════

// k26 心臓
const k26Base = (): DiagramElement[] => [
  bx(14, 22, 90, 40, '右心房', C.blue, FILL.blue, 11),
  bx(206, 22, 90, 40, '左心房', C.red, FILL.red, 11),
  bx(14, 72, 90, 64, '右心室', C.blue, FILL.blue, 11),
  bx(196, 66, 110, 76, undefined, C.red, FILL.red),
  bx(210, 80, 82, 48, '左心室', C.red, '#FFFFFF', 11),
];
const f26 = show([
  { note: 'ヒトの心臓には4つの部屋があります（体の前から見た図なので、右心房・右心室は図の左側にあります）。左心室は壁が厚く、図では赤いふちどりで表しています。', add: [...k26Base(), ...m('心臓の4つの部屋')] },
  { note: '❓全身へ血液を送り出すのは、どの部屋でしょう。左心室から大動脈を通って、全身へ送り出されます。(1)の答えは左心室です。', add: [lb(250, 156, '全身へ送り出す', 10, C.red, 'middle', true), ...m('全身へ送る部屋＝左心室', C.red, FILL.red)] },
  { note: '❓なぜ左心室の壁は厚いのでしょう。肺までは近いので、右心室は弱い力で足ります。全身までは遠いので、左心室には強い力が必要で、筋肉が発達して壁が厚くなります。(2)の答えです。', add: fresh(bx(20, 30, 130, 70, '右心室\n肺へ（近い）\n壁はうすい', C.blue, FILL.blue, 11), bx(170, 30, 130, 70, '左心室\n全身へ（遠い）\n壁はあつい', C.red, FILL.red, 11), ...m('遠くへ送る→強い力→壁が厚い', C.red, FILL.red)) },
  { note: '❓弁は何のためにあるのでしょう。心房と心室のあいだ、心室と動脈のあいだの弁は、一方通行のドアのように、血液が逆もどりするのを防ぎます。(3)の答えです。', add: fresh(bx(30, 22, 110, 34, '心房', C.blue, FILL.blue, 12), bx(30, 108, 110, 34, '心室', C.red, FILL.red, 12), ar(85, 58, 85, 106, C.green), lb(200, 82, '弁（一方通行）', 11, C.green, 'middle', true), ar(115, 104, 115, 60, C.gray, true), lb(200, 118, '逆もどりはできない', 10, C.gray, 'middle', true), ...m('弁＝血液の逆流を防ぐ', C.green, FILL.green)) },
  { note: '(4) 1回に70mLを、1分間に70回送り出します。70×70＝4900mLです。', add: fresh(bx(20, 30, 280, 34, '1回70mL　×　1分間に70回', C.main, FILL.warm, 12), bx(20, 76, 280, 34, '70×70＝4900mL', C.red, FILL.red, 13), ...m('1分間に送り出す量＝4900mL', C.red, FILL.red)) },
  { note: '❓全血液量は、どれだけでしょう。体重52kgの13分の1なので、52÷13＝4kg。血液1mLが1gなので、4kg＝4000gで、4000mLです。', add: fresh(bx(20, 30, 280, 34, '52kg÷13＝4kg（全血液の質量）', C.main, FILL.warm, 12), bx(20, 76, 280, 34, '4kg＝4000g＝4000mL', C.blue, FILL.blue, 13), ...m('全血液量＝4000mL', C.blue, FILL.blue)) },
  { note: '送り出す量は全血液量の何倍でしょう。4900÷4000＝1.225なので、小数第1位まで求めると、約1.2倍です。(4)の答えです。', add: fresh(bx(20, 34, 196, 30, '4900mL（1分間に送り出す量）', C.red, FILL.red, 10), bx(20, 78, 160, 30, '4000mL（全血液量）', C.blue, FILL.blue, 10), ...m('4900÷4000＝1.225→約1.2倍', C.red, FILL.red)) },
  { note: '確かめます。1分間に、全身の血液と同じくらいの量が心臓を通っているので、血液は約1分で体を1周するくらいの速さで送り出されています。', add: m('約1分で全身の血液が心臓を1回通る', C.green, FILL.green) },
], '答え：(1) 左心室 (2) 全身へ送るため強い力が必要 (3) 血液の逆流を防ぐ (4) 4900mL、約1.2倍');

// k27 うでの曲げのばし
const muscleTop = (fat: boolean): DiagramElement =>
  fat
    ? pg([[56, 80], [100, 58], [150, 52], [200, 58], [236, 80], [200, 70], [150, 66], [100, 70]], C.red, FILL.red)
    : pg([[56, 80], [100, 72], [150, 70], [200, 72], [236, 80], [200, 76], [150, 75], [100, 76]], C.gray, FILL.gray);
const muscleBottom = (fat: boolean): DiagramElement =>
  fat
    ? pg([[56, 100], [100, 122], [150, 128], [200, 122], [236, 100], [200, 110], [150, 114], [100, 110]], C.red, FILL.red)
    : pg([[56, 100], [100, 108], [150, 110], [200, 108], [236, 100], [200, 104], [150, 105], [100, 104]], C.gray, FILL.gray);
const straightArm = (): DiagramElement[] => [
  ln(30, 90, 150, 90, C.gray, false, 12), ln(150, 90, 270, 90, C.gray, false, 12),
];
const k27Straight = (topFat: boolean, botFat: boolean): DiagramElement[] => [
  ...straightArm(), muscleTop(topFat), muscleBottom(botFat), ci(150, 90, 12, '関節', C.ink, FILL.yellow, 8),
];
const bentArm = (): DiagramElement[] => [
  ln(30, 120, 140, 120, C.gray, false, 12), ln(140, 120, 200, 30, C.gray, false, 12), ci(140, 120, 12, '関節', C.ink, FILL.yellow, 8),
];
const f27 = show([
  { note: 'うでの骨に、2つの筋肉がついています。上側がうでの内側の筋肉、下側が外側の筋肉で、どちらも骨にしっかりついています。', add: [...k27Straight(false, false), lb(80, 44, '内側の筋肉', 11, C.red, 'middle', true), lb(80, 144, '外側の筋肉', 11, C.blue, 'middle', true), ...m('向かい合う2つの筋肉')] },
  { note: '❓骨と骨のつなぎ目は何でしょう。曲げのばしができる、この部分を関節といいます（ひじ）。(1)の答えです。', add: [ci(150, 90, 16, '関節', C.red, FILL.red, 9), ...m('(1) 骨と骨のつなぎ目＝関節', C.red, FILL.red)] },
  { note: '❓筋肉は、どうやって骨についているのでしょう。筋肉の両はしの、じょうぶなひも状の部分が、骨につながっています。これをけんといいます。(2)の答えです。', add: [ci(56, 80, 6, undefined, C.green, FILL.green), ci(236, 80, 6, undefined, C.green, FILL.green), ar(40, 64, 52, 76, C.green), ar(266, 64, 240, 76, C.green), lb(36, 56, 'けん', 11, C.green, 'middle', true), lb(268, 56, 'けん', 11, C.green, 'middle', true), ...m('(2) 筋肉と骨をつなぐ＝けん', C.green, FILL.green)] },
  { note: '❓うでを曲げるとき、2つの筋肉はどうなるでしょう。内側の筋肉が縮んで、前腕を引きよせます。外側の筋肉はゆるみます。(3)の答えです。', add: fresh(...bentArm(), pg([[60, 108], [96, 78], [132, 56], [170, 50], [150, 78], [116, 100]], C.red, FILL.red), ln(86, 134, 160, 144, C.gray, true, 2), ln(160, 144, 205, 100, C.gray, true, 2), ln(205, 100, 190, 52, C.gray, true, 2), bx(228, 56, 84, 36, '内側の筋肉\n縮む', C.red, FILL.red, 10), bx(228, 106, 84, 36, '外側の筋肉\nゆるむ', C.blue, FILL.blue, 10), ...m('曲げる＝内側が縮む', C.red, FILL.red)) },
  { note: '❓うでをのばすときは、どうなるでしょう。今度は外側の筋肉が縮んで、前腕を引きます。内側の筋肉はゆるみます。', add: fresh(...k27Straight(false, true), bx(20, 134, 130, 26, '外側の筋肉：縮む', C.red, FILL.red, 10), bx(170, 134, 130, 26, '内側の筋肉：ゆるむ', C.blue, FILL.blue, 10), ...m('のばす＝外側が縮む', C.red, FILL.red)) },
  { note: '❓なぜ、のばすことができるのでしょう。筋肉は、縮む力だけをもち、自分でのびる力はありません。のばすときは、反対側の筋肉が縮んで引くので、のばせます。(4)の答えです。', add: fresh(bx(20, 30, 280, 34, '筋肉は縮む力だけ（のびる力はない）', C.main, FILL.warm, 12), ar(160, 66, 160, 90, C.main), bx(20, 92, 280, 34, '反対側の筋肉が縮んで引く', C.red, FILL.red, 12), ...m('(4) 反対側の筋肉が縮むから', C.red, FILL.red)) },
  { note: '確かめます。曲げるときは内側が縮み、のばすときは外側が縮みます。縮むのはいつも1つの筋肉で、反対側はゆるんでいます。', add: fresh(bx(20, 24, 130, 28, '', C.gray, FILL.gray, 10), bx(20, 24, 130, 28, '曲げる', C.ink, FILL.warm, 11), bx(170, 24, 130, 28, 'のばす', C.ink, FILL.warm, 11), bx(20, 58, 130, 34, '内側が縮む\n外側はゆるむ', C.red, FILL.red, 10), bx(170, 58, 130, 34, '外側が縮む\n内側はゆるむ', C.blue, FILL.blue, 10), ...m('縮むのは、いつも片方だけ', C.green, FILL.green)) },
], '答え：(1) 関節 (2) けん (3) 内側が縮み、外側がゆるむ (4) 外側の筋肉が縮んで引くから');

// k28 耳
const earRow1 = (n: number): DiagramElement[] => {
  const xs = [10, 115, 220];
  const names = ['鼓膜', '耳小骨', 'うずまき管'];
  const out: DiagramElement[] = [];
  for (let i = 0; i < n; i++) {
    if (i > 0) out.push(ar(xs[i] - 14, 49, xs[i] - 1, 49, C.main));
    out.push(bx(xs[i], 30, 90, 38, names[i], C.main, FILL.warm, 12));
  }
  return out;
};
const f28 = show([
  { note: '音は、空気のふるえです。このふるえが、耳の中をどう伝わって、脳に届くのかをたどります。', add: [bx(10, 40, 130, 36, '音＝空気のふるえ', C.blue, FILL.blue, 12), ar(142, 58, 176, 58, C.main), bx(176, 40, 130, 36, '耳の中へ伝わる', C.main, FILL.warm, 12), ...m('音が耳に入る')] },
  { note: '❓最初にふるえるのは何でしょう。空気のふるえを最初に受けて、ふるえる膜が鼓膜です。(1)の答えです。', add: fresh(...earRow1(1), lb(55, 86, '最初にふるえる膜', 10, C.red, 'middle', true), ...m('(1) 鼓膜：空気のふるえを受ける', C.red, FILL.red)) },
  { note: '❓鼓膜のふるえは、次にどこへ伝わるのでしょう。小さな3つの骨、耳小骨が、ふるえを内耳へ伝えます。(2)の答えです。', add: [...earRow1(2), lb(160, 86, '小さな3つの骨', 10, C.red, 'middle', true), ...m('(2) 耳小骨：ふるえを内耳へ伝える', C.red, FILL.red)] },
  { note: '❓音の刺激を受けとるのは、どこでしょう。うずまき状の、うずまき管の中に、音の刺激を受けとる細胞があります。(3)の答えです。', add: [...earRow1(3), lb(265, 86, '刺激を受けとる細胞', 9, C.red, 'middle', true), ...m('(3) うずまき管：刺激を受けとる', C.red, FILL.red)] },
  { note: '❓受けとった刺激は、どうなるのでしょう。聴神経を通って脳へ伝わり、脳で音として感じます。(4)の答えです。', add: [ar(265, 70, 265, 102, C.main), bx(220, 104, 90, 38, '聴神経', C.green, FILL.green, 12), ar(218, 123, 204, 123, C.main), bx(114, 104, 90, 38, '脳', C.purple, FILL.purple, 12), ...m('(4) 聴神経：刺激を脳へ伝える', C.green, FILL.green)] },
  { note: '全体の順番です。鼓膜→耳小骨→うずまき管→聴神経→脳。この中で、刺激を受けとる細胞があるのはうずまき管です。鼓膜と耳小骨は、ふるえを伝えるだけです。', add: fresh(...flow(['鼓膜', '耳小骨', 'うずまき\n管', '聴神経', '脳'], 50, { h: 44, size: 10, pad: 6, gap: 12, color: C.main, fill: FILL.warm }).flat(), bx(134, 50, 52, 44, 'うずまき\n管', C.red, FILL.red, 10), lb(160, 118, '刺激を受けとる細胞はここだけ', 11, C.red, 'middle', true), ...m('音が脳へ届く順番', C.red, FILL.red)) },
  { note: '確かめます。ふるえ（鼓膜・耳小骨）→刺激（うずまき管）→神経の信号（聴神経）→脳、と、4つの答えが順番につながりました。', add: m('ふるえ→刺激→神経→脳', C.green, FILL.green) },
], '答え：(1) 鼓膜 (2) 耳小骨 (3) うずまき管 (4) 聴神経');

// k29 ふ入りの葉
const leafBoxes = (): DiagramElement[] => [
  bx(10, 24, 92, 70, 'A\n緑の部分\n光が当たる', C.green, FILL.green, 10),
  bx(114, 24, 92, 70, 'B\n緑の部分\nアルミはく', C.gray, FILL.gray, 10),
  bx(218, 24, 92, 70, 'C\nふの部分\n光が当たる', C.ink, '#FFFFFF', 10),
];
const f29 = show([
  { note: 'ふ入りの葉を使います。A：緑の部分（光が当たる）、B：緑の部分（アルミはくでおおう）、C：ふの部分（光が当たる）の3つの部分を比べます。', add: [...leafBoxes(), ...m('A・B・Cの3つの部分を比べる')] },
  { note: '❓なぜ、実験の前に、一晩暗い所に置くのでしょう。光合成ができない暗い所に置くと、葉にもともとあったデンプンが使われて、なくなります。(2)の答えです。', add: fresh(bx(20, 30, 130, 44, '一晩、暗い所\n光合成できない', C.blue, FILL.blue, 11), ar(152, 52, 168, 52, C.main), bx(170, 30, 130, 44, 'もとのデンプンを\n使ってなくす', C.red, FILL.red, 11), ...m('(2) もとのデンプンをなくすため', C.red, FILL.red)) },
  { note: 'そのあと、数時間、よく光に当てます。Bは、アルミはくでおおわれているので、光が当たりません。', add: fresh(...leafBoxes(), ar(56, 4, 56, 22, C.main), ar(264, 4, 264, 22, C.main), lb(160, 116, '数時間、よく光を当てる（Bはおおってある）', 10, C.main, 'middle', true), ...m('光を当てる')) },
  { note: '次に、あたためたエタノールで葉の色をぬき、水で洗ってから、ヨウ素液につけます。色をぬくのは、ヨウ素液の色の変化を見やすくするためです。', add: fresh(...flow(['あたためた\nエタノール', '水で洗う', 'ヨウ素液'], 40, { h: 46, size: 10, color: C.main, fill: FILL.warm }).flat(), ...m('色をぬく→水洗い→ヨウ素液')) },
  { note: '❓どこが青紫色になったでしょう。ヨウ素液は、デンプンがあると青紫色になります。光合成ができたAだけが青紫色で、BとCは変化しませんでした。(1)の答えはAです。', add: fresh(bx(10, 24, 92, 70, 'A\n青紫色\nデンプンあり', C.purple, FILL.purple, 10), bx(114, 24, 92, 70, 'B\n変化なし', C.gray, FILL.gray, 10), bx(218, 24, 92, 70, 'C\n変化なし', C.gray, '#FFFFFF', 10), ...m('(1) 青紫色になるのはA', C.red, FILL.red)) },
  { note: '❓AとBを比べると、何がわかるでしょう。どちらも緑色で、光が当たったかどうかだけがちがいます。Aだけデンプンができたので、光合成には光が必要です。(3)の答えです。', add: fresh(bx(20, 30, 130, 56, 'A　光あり\n青紫色', C.purple, FILL.purple, 11), bx(170, 30, 130, 56, 'B　光なし\n変化なし', C.gray, FILL.gray, 11), lb(160, 108, '緑色で、光だけがちがう', 11, C.blue, 'middle', true), ...m('(3) 光合成には光が必要', C.blue, FILL.blue)) },
  { note: '❓AとCを比べると、何がわかるでしょう。どちらも光が当たり、緑色かどうか（葉緑体があるかどうか）だけがちがいます。Aだけデンプンができたので、葉緑体が必要です。(4)の答えです。', add: fresh(bx(20, 30, 130, 56, 'A　緑色（葉緑体）\n青紫色', C.purple, FILL.purple, 10), bx(170, 30, 130, 56, 'C　ふ（葉緑体なし）\n変化なし', C.gray, '#FFFFFF', 10), lb(160, 108, '光は同じで、葉緑体だけがちがう', 11, C.green, 'middle', true), ...m('(4) 光合成には葉緑体が必要', C.green, FILL.green)) },
  { note: '確かめます。光も葉緑体もそろったAだけで、デンプンができました。BとCは、どちらか1つが欠けているので、デンプンができません。', add: fresh(bx(20, 24, 280, 28, 'A　光○　葉緑体○　→　デンプンができる', C.purple, FILL.purple, 11), bx(20, 58, 280, 28, 'B　光×　葉緑体○　→　できない', C.gray, FILL.gray, 11), bx(20, 92, 280, 28, 'C　光○　葉緑体×　→　できない', C.gray, FILL.gray, 11), ...m('光と葉緑体がそろうと光合成', C.green, FILL.green)) },
], '答え：(1) A (2) もとのデンプンをなくすため (3) 光 (4) 葉緑体');

// k30 発芽の条件
const k30cols = [
  { x: 8, w: 34, t: '条件' }, { x: 44, w: 44, t: '水' }, { x: 90, w: 44, t: '空気' },
  { x: 136, w: 50, t: '温度' }, { x: 188, w: 44, t: '光' }, { x: 234, w: 78, t: '結果' },
];
const k30rows: string[][] = [
  ['ア', '○', '○', '20℃', '明', '発芽する'],
  ['イ', '×', '○', '20℃', '明', '発芽しない'],
  ['ウ', '○', '○', '20℃', '暗', '発芽する'],
  ['エ', '○', '×', '20℃', '明', '発芽しない'],
  ['オ', '○', '○', '5℃', '明', '発芽しない'],
];
const k30cell = (r: number, c: number, color: string, fill: string): DiagramElement =>
  bx(k30cols[c].x, 28 + r * 24, k30cols[c].w, 22, k30rows[r][c], color, fill, 10);
const k30table = (): DiagramElement[] => {
  const out: DiagramElement[] = k30cols.map((c) => bx(c.x, 4, c.w, 20, c.t, C.ink, FILL.gray, 10));
  k30rows.forEach((row, r) => row.forEach((_, c) => {
    const ok = c === 5 && row[5] === '発芽する';
    out.push(k30cell(r, c, ok ? C.green : C.main, ok ? FILL.green : FILL.warm));
  }));
  return out;
};
const k30hl = (cells: [number, number][], color: string, fill: string): DiagramElement[] => cells.map(([r, c]) => k30cell(r, c, color, fill));
const f30 = show([
  { note: 'インゲンマメの種子を、5つの条件に置きました（○はある、×はない）。発芽したのは、アとウだけです。', add: [...k30table(), ...m('ア〜オの条件と、結果')] },
  { note: '❓どう比べればよいでしょう。調べたい条件だけをちがえて、ほかの条件は同じにして比べます。これを対照実験といいます。', add: fresh(bx(20, 30, 280, 34, '調べたい条件だけを、ちがえる', C.blue, FILL.blue, 12), bx(20, 74, 280, 34, 'ほかの条件は、すべて同じにする', C.main, FILL.warm, 12), ...m('対照実験：1つだけちがえて比べる', C.blue, FILL.blue)) },
  { note: '❓水が必要かどうかは、どれとどれを比べるのでしょう。水だけがちがう、アとイです。アは発芽し、イは発芽しないので、水が必要です。(1)の答えです。', add: fresh(...k30table(), ...k30hl([[0, 1], [1, 1]], C.red, FILL.red), ...m('(1) 水だけがちがう：アとイ', C.red, FILL.red)) },
  { note: '❓光は必要でしょうか。光だけがちがうアとウを比べます。暗い所のウも発芽したので、光は必要ありません。(2)の答えです。', add: fresh(...k30table(), ...k30hl([[0, 4], [2, 4]], C.blue, FILL.blue), ...m('(2) 暗くても発芽→光は不要', C.blue, FILL.blue)) },
  { note: '❓空気と温度は、どうでしょう。空気だけがちがうアとエ、温度だけがちがうアとオを比べます。どちらも発芽しなかったので、空気と適当な温度が必要です。', add: fresh(...k30table(), ...k30hl([[0, 2], [3, 2]], C.purple, FILL.purple), ...k30hl([[0, 3], [4, 3]], C.green, FILL.green), ...m('空気：アとエ　温度：アとオ', C.purple, FILL.purple)) },
  { note: 'まとめます。発芽に必要な条件は、水・空気・適当な温度の3つです。(3)の答えです。', add: fresh(bx(10, 40, 92, 50, '水', C.red, FILL.red, 14), bx(114, 40, 92, 50, '空気', C.purple, FILL.purple, 14), bx(218, 40, 92, 50, '適当な温度', C.green, FILL.green, 12), ...m('(3) 水・空気・適当な温度', C.red, FILL.red)) },
  { note: '❓発芽のための養分は、どこにあるのでしょう。インゲンマメは、養分を子葉にたくわえています。発芽のとき、この養分が使われて、芽や根がのびます。(4)の答えです。', add: fresh(ci(60, 80, 30, '子葉', C.main, FILL.yellow, 12), ci(122, 80, 30, '子葉', C.main, FILL.yellow, 12), ar(158, 80, 196, 80, C.main), bx(198, 60, 112, 40, '芽や根が\nのびる養分', C.green, FILL.green, 11), ...m('(4) 養分は子葉にある', C.green, FILL.green)) },
], '答え：(1) アとイ (2) 光は必要ない (3) 水・空気・適当な温度 (4) 子葉');
