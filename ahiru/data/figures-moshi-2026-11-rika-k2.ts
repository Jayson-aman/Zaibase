import type { DiagramElement, Figure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, sc, show, band, fresh, cover } from './diagram-kit';

// 月例模試 2026年11月号（追加40問）高校受験 理科の「動く図解」。キーは問題ID。座標は 320×240。
// 図は上（y＜165）に描き、下の帯（y≥170）に短い結論を出す。

/** 下の帯に一言（前のスライドの帯は白でおおいかくして書きかえる）。 */
const m = (text: string, color: string = C.main, fill: string = FILL.warm): DiagramElement[] =>
  band(170, bx(20, 176, 280, 34, text, color, fill, 13));

// ═════════ 物理 ═════════

// k11 並列回路
const k11Base = (): DiagramElement[] => [
  ln(60, 30, 230, 30), ln(60, 130, 230, 130),
  ln(60, 30, 60, 65), ln(60, 95, 60, 130), bx(36, 65, 48, 30, '6V', C.main, FILL.yellow, 12),
  ln(140, 30, 140, 65), ln(140, 95, 140, 130), bx(125, 65, 30, 30, '12Ω', C.ink, FILL.warm, 10),
  ln(230, 30, 230, 65), ln(230, 95, 230, 130), bx(215, 65, 30, 30, '6Ω', C.ink, FILL.warm, 10),
  lb(140, 18, 'A', 11, C.gray, 'middle', true), lb(230, 18, 'B', 11, C.gray, 'middle', true),
];
const f11 = show([
  { note: '電圧6Vの電源に、12Ωの抵抗Aと6Ωの抵抗Bを並列につないだ回路です。求めるのは、Aの電流、全体の電流、全体の抵抗です。', add: [...k11Base(), ...m('6Vの電源、AとBを並列')] },
  { note: '❓並列だと、各抵抗にかかる電圧はいくらでしょう。AにもBにも、電源の＋極と−極が直接つながっているので、どちらにも6Vがかかります。', add: [lb(118, 86, '6V', 11, C.blue, 'end', true), lb(208, 86, '6V', 11, C.blue, 'end', true), ...m('どちらにも6V（電源と同じ）', C.blue, FILL.blue)] },
  { note: '電流＝電圧÷抵抗です。Aの電流は6÷12＝0.5Aです。(1)の答えです。', add: [ar(140, 34, 140, 62, C.red), lb(150, 46, '0.5A', 11, C.red, 'start', true), ...m('A：6÷12＝0.5A', C.red, FILL.red)] },
  { note: 'Bの電流は6÷6＝1Aです。抵抗が小さい枝のほうが、電流が大きくなります。', add: [ar(230, 34, 230, 62, C.red), lb(240, 46, '1A', 11, C.red, 'start', true), ...m('B：6÷6＝1A', C.red, FILL.red)] },
  { note: '❓全体の電流はどうなるでしょう。電流は枝分かれして、あとで合流します。だから、各枝の電流の和です。0.5＋1＝1.5A。(2)の答えです。', add: [ar(70, 22, 110, 22, C.purple), lb(90, 12, '1.5A', 11, C.purple, 'middle', true), ...m('全体：0.5＋1＝1.5A', C.purple, FILL.purple)] },
  { note: '全体の抵抗は、全体の電圧÷全体の電流です。6÷1.5＝4Ω。(3)の答えです。', add: m('全体の抵抗：6÷1.5＝4Ω', C.green, FILL.green) },
  { note: '確かめます。電流の通り道がふえたので、全体の抵抗は、どちらの抵抗（12Ω・6Ω）よりも小さくなるはずです。4Ωは6Ωより小さく、合っています。', add: m('4Ω＜6Ω＜12Ω、並列は小さくなる', C.green, FILL.green) },
], '答え：(1) 0.5A (2) 1.5A (3) 4Ω');

// k12 直列回路
const k12Base = (): DiagramElement[] => [
  ln(42, 40, 100, 40), ln(150, 40, 190, 40), ln(240, 40, 280, 40), ln(280, 40, 280, 130), ln(42, 130, 280, 130),
  ln(42, 40, 42, 60), ln(42, 100, 42, 130), bx(20, 60, 44, 40, '12V', C.main, FILL.yellow, 12),
  bx(100, 28, 50, 24, '4Ω', C.ink, FILL.warm, 12), bx(190, 28, 50, 24, '8Ω', C.ink, FILL.warm, 12),
  lb(125, 18, 'A', 11, C.gray, 'middle', true), lb(215, 18, 'B', 11, C.gray, 'middle', true),
];
const f12 = show([
  { note: '電圧12Vの電源に、4Ωの抵抗Aと8Ωの抵抗Bを直列につないだ回路です。求めるのは、電流、Aの電圧、Bの電力です。', add: [...k12Base(), ...m('12V、AとBを直列')] },
  { note: '❓直列だと、全体の抵抗はいくらでしょう。電流の通り道が1本なので、2つの抵抗を続けて通ります。4＋8＝12Ωです。', add: m('全体の抵抗＝4＋8＝12Ω') },
  { note: '電流＝電圧÷抵抗＝12÷12＝1Aです。直列では、電流はどこでも同じ大きさなので、AにもBにも1Aが流れます。(1)の答えです。', add: [ar(220, 150, 100, 150, C.red), lb(160, 140, '電流1A（どこも同じ）', 11, C.red, 'middle', true), ...m('電流＝12÷12＝1A', C.red, FILL.red)] },
  { note: 'Aにかかる電圧は、4Ω×1A＝4Vです。(2)の答えです。', add: [lb(125, 66, '4Ω×1A＝4V', 10, C.blue, 'middle', true), ...m('A：4×1＝4V', C.blue, FILL.blue)] },
  { note: 'Bにかかる電圧は、8Ω×1A＝8Vです。', add: [lb(215, 66, '8Ω×1A＝8V', 10, C.blue, 'middle', true), ...m('B：8×1＝8V', C.blue, FILL.blue)] },
  { note: '❓電圧の和は合っているでしょうか。4＋8＝12Vで、電源の電圧と同じです。直列では、電圧を2つの抵抗で分けあっています。', add: m('4V＋8V＝12V（電源と同じ）', C.green, FILL.green) },
  { note: '電力＝電圧×電流です。Bの電力は8V×1A＝8W。(3)の答えです。', add: [bx(190, 28, 50, 24, '8Ω', C.red, FILL.red, 12), ...m('B：8V×1A＝8W', C.red, FILL.red)] },
  { note: '確かめます。Aの電力は4V×1A＝4W。4＋8＝12Wは、電源の12V×1A＝12Wと一致します。', add: m('4W＋8W＝12W＝12V×1A', C.green, FILL.green) },
], '答え：(1) 1A (2) 4V (3) 8W');

// k13 電熱器と水
const k13Base = (): DiagramElement[] => [
  lb(160, 14, '電熱器 100V・420W', 12, C.ink, 'middle', true),
  ln(160, 24, 160, 70, C.gray, false, 3),
  bx(95, 60, 130, 80, undefined, C.blue, FILL.blue),
  bx(140, 70, 40, 50, '電熱線', C.red, FILL.red, 10),
  lb(160, 152, '水500g', 12, C.blue, 'middle', true),
];
const f13 = show([
  { note: '100Vで420Wの電熱器を、5分間使って、500gの水をあたためます。水1gを1℃上げるには4.2Jが必要です。', add: [...k13Base(), ...m('420Wの電熱器で水500gをあたためる')] },
  { note: '❓電力は何を表すのでしょう。電力＝電圧×電流です。電流は、電力÷電圧＝420÷100＝4.2Aです。(1)の答えです。', add: [ar(160, 26, 160, 56, C.red), lb(172, 40, '4.2A', 11, C.red, 'start', true), ...m('電流＝420÷100＝4.2A', C.red, FILL.red)] },
  { note: '❓時間はそのまま5を使ってよいでしょうか。Jは「W×秒」なので、秒に直します。5分＝5×60＝300秒です。', add: m('5分＝300秒', C.blue, FILL.blue) },
  { note: '熱量は、電力×時間です。420×300＝126000J。(2)の答えです。', add: [ar(180, 95, 205, 95, C.red), ...m('熱量＝420×300＝126000J', C.red, FILL.red)] },
  { note: '水500gを1℃上げるのに必要な熱量は、4.2×500＝2100Jです。', add: m('1℃あたり：4.2×500＝2100J', C.purple, FILL.purple) },
  { note: '上がる温度は、熱量÷（1℃あたりの熱量）です。126000÷2100＝60℃。(3)の答えです。', add: m('上昇温度＝126000÷2100＝60℃', C.green, FILL.green) },
  { note: '確かめます。1℃あたり2100Jで60℃上げるには、2100×60＝126000J。(2)の熱量と一致します。', add: m('2100×60＝126000J で一致', C.green, FILL.green) },
], '答え：(1) 4.2A (2) 126000J (3) 60℃');

// k14 磁界中のコイル
const k14Base = (): DiagramElement[] => [
  bx(40, 50, 30, 70, 'N', C.red, FILL.red, 14), bx(250, 50, 30, 70, 'S', C.blue, FILL.blue, 14),
  bx(130, 60, 60, 50, 'コイル', C.ink, FILL.warm, 12),
];
const f14 = show([
  { note: 'U字形磁石の間につるしたコイルに電流を流すと、コイルが磁界から力を受けて動きます。この力を大きくする方法を探します。', add: [...k14Base(), ...m('磁石の間のコイルに電流を流す')] },
  { note: '磁石のN極からS極に向かって、磁界ができています。コイルはこの磁界の中にあります。', add: [ar(74, 85, 126, 85, C.blue), ar(194, 85, 246, 85, C.blue), lb(160, 25, '磁界の向き（N→S）', 11, C.blue, 'middle', true), ...m('磁界：N極→S極', C.blue, FILL.blue)] },
  { note: '❓力の大きさは何で決まるのでしょう。電流が大きいほど、磁界が強いほど、力は大きくなります。', add: m('大きさ：電流と磁界の強さで決まる', C.purple, FILL.purple) },
  { note: '電流を大きくすると、コイルが受ける力は大きくなります。矢印が長くなります。', add: [ar(160, 58, 160, 36, C.red), lb(172, 48, '力が大きい', 11, C.red, 'start', true), ...m('電流を大きくする→力が大きい', C.red, FILL.red)] },
  { note: '❓電流の向きを逆にするとどうなるでしょう。力の向きが逆になるだけで、大きさは変わりません。磁石の向きを入れかえても、同じです。', add: [ar(160, 112, 160, 150, C.gray, true), lb(172, 140, '向きだけ逆', 11, C.gray, 'start', true), ...m('向きを変える→大きさは同じ', C.gray, FILL.gray)] },
  { note: '磁石をコイルから遠ざけると、コイルのある場所の磁界が弱くなるので、力は小さくなります。', add: m('磁石を遠ざける→力は小さい', C.blue, FILL.blue) },
  { note: '大きくなるのは、電流を大きくしたときだけです。答えは「コイルに流す電流を大きくする」です。', add: m('答え：電流を大きくする', C.green, FILL.green) },
], '答え：コイルに流す電流を大きくする');

// k15 圧力
const k15Base = (): DiagramElement[] => [
  ln(10, 140, 310, 140, C.gray, false, 4),
  bx(20, 110, 90, 30, '30cm面が下', C.main, FILL.warm, 10),
  bx(190, 50, 60, 90, '20cm面が下', C.main, FILL.warm, 10),
];
const f15 = show([
  { note: '質量6kgの直方体（10cm、20cm、30cm）を、向きを変えて机に置きます。圧力がいちばん小さい置き方と、いちばん大きい置き方を比べます。', add: [...k15Base(), ...m('6kgの直方体を2通りに置く')] },
  { note: '6kgは6000g。100gで1Nなので、重力は6000÷100＝60Nです。どちらの置き方でも、机をおす力は60Nです。', add: [ar(65, 80, 65, 106, C.red), lb(75, 92, '60N', 11, C.red, 'start', true), ar(220, 20, 220, 46, C.red), lb(230, 32, '60N', 11, C.red, 'start', true), ...m('重力＝6000÷100＝60N', C.red, FILL.red)] },
  { note: '❓なぜ面積が大事なのでしょう。圧力は、1m²あたりにかかる力だからです。同じ60Nでも、面積がせまいほど、1m²あたりの力が大きくなります。', add: [lb(65, 154, '600cm²＝0.06m²', 10, C.blue, 'middle', true), lb(220, 154, '200cm²＝0.02m²', 10, C.blue, 'middle', true), ...m('圧力＝力÷面積（m²）', C.blue, FILL.blue)] },
  { note: '面積が広い置き方（20×30＝600cm²＝0.06m²）の圧力は、60÷0.06＝1000Paです。これが最小です。(1)の答えです。', add: [bx(20, 110, 90, 30, '30cm面が下', C.green, FILL.green, 10), ...m('広い面：60÷0.06＝1000Pa', C.green, FILL.green)] },
  { note: '面積がせまい置き方（10×20＝200cm²＝0.02m²）の圧力は、60÷0.02＝3000Paです。これが最大です。(2)の答えです。', add: [bx(190, 50, 60, 90, '20cm面が下', C.red, FILL.red, 10), ...m('せまい面：60÷0.02＝3000Pa', C.red, FILL.red)] },
  { note: '❓どれくらいちがうでしょう。面積は600÷200＝3倍ちがいます。同じ力なので、圧力は3倍ちがうはずです。', add: m('面積1/3→圧力は3倍', C.purple, FILL.purple) },
  { note: '確かめます。3000÷1000＝3で、予想どおり3倍です。', add: m('3000÷1000＝3 で一致', C.green, FILL.green) },
], '答え：(1) 1000Pa (2) 3000Pa');

// k16 浮力
const k16Base = (): DiagramElement[] => [
  bx(55, 5, 50, 22, '3.0N', C.ink, FILL.yellow, 12), ln(80, 27, 80, 45, C.gray, false, 2), bx(62, 45, 36, 30, '物体', C.main, FILL.warm, 11),
  lb(80, 96, '空気中', 11, C.gray, 'middle', true),
  bx(190, 70, 100, 80, undefined, C.blue, FILL.blue),
  bx(215, 5, 50, 22, '2.2N', C.ink, FILL.yellow, 12), ln(240, 27, 240, 95, C.gray, false, 2), bx(222, 95, 36, 30, '物体', C.main, FILL.warm, 11),
  lb(240, 160, '水中', 11, C.blue, 'middle', true),
];
const f16 = show([
  { note: 'ばねばかりにつるした物体は、空気中で3.0N、水に入れると2.2Nを示しました。浮力、体積、密度を求めます。', add: [...k16Base(), ...m('空気中3.0N、水中2.2N')] },
  { note: '❓なぜ水中でばねばかりの値が減るのでしょう。水が物体を、上向きに押し上げているからです。この力を浮力といいます。', add: [ar(215, 122, 215, 100, C.green), lb(213, 134, '浮力', 11, C.green, 'middle', true), ...m('水が上向きに押す＝浮力', C.green, FILL.green)] },
  { note: '浮力は、空気中の値と水中の値の差です。3.0−2.2＝0.8N。(1)の答えです。', add: m('浮力＝3.0−2.2＝0.8N', C.red, FILL.red) },
  { note: '❓浮力から、どうして体積がわかるのでしょう。浮力は、物体が押しのけた水の重さに等しいからです。0.8Nは80gの水の重さで、水は1cm³が1gなので80cm³。すべて水に入っているので、これが物体の体積です。(2)の答えです。', add: m('0.8N＝80gの水→80cm³', C.blue, FILL.blue) },
  { note: '物体の質量を出します。空気中の3.0Nは、100gが1Nなので300gです。', add: m('3.0N＝300g', C.purple, FILL.purple) },
  { note: '密度＝質量÷体積です。300÷80＝3.75g/cm³。(3)の答えです。', add: m('密度＝300÷80＝3.75g/cm³', C.green, FILL.green) },
  { note: '確かめます。密度3.75g/cm³は、水の1g/cm³より大きいので、物体は水に沈みます。水中でもばねばかりに2.2Nの力が残っていたことと合っています。', add: m('3.75＞1 だから沈む', C.green, FILL.green) },
], '答え：(1) 0.8N (2) 80cm³ (3) 3.75g/cm³');

// k17 斜面を下る台車
const k17Dots = (): DiagramElement[] => [
  ln(20, 70, 285, 70, C.gray, false, 1.4),
  ci(30, 70, 3, undefined, C.ink, C.ink), ci(45, 70, 3, undefined, C.ink, C.ink), ci(90, 70, 3, undefined, C.ink, C.ink), ci(165, 70, 3, undefined, C.ink, C.ink), ci(270, 70, 3, undefined, C.ink, C.ink),
];
const f17 = show([
  { note: '斜面を下る台車の運動を、0.1秒ごとに記録タイマーで調べました。打点の間かくが、だんだん広がっています。', add: [...k17Dots(), ...m('0.1秒ごとの打点（間かくが広がる）')] },
  { note: '各区間の長さは、順に1.5cm、4.5cm、7.5cm、10.5cmです。どれも0.1秒間に進んだ距離です。', add: [lb(37, 55, '1.5cm', 10, C.blue, 'middle', true), lb(67, 55, '4.5cm', 10, C.blue, 'middle', true), lb(127, 55, '7.5cm', 10, C.blue, 'middle', true), lb(217, 55, '10.5cm', 10, C.blue, 'middle', true), ...m('区間の長さ：1.5・4.5・7.5・10.5cm', C.blue, FILL.blue)] },
  { note: '❓0.1秒の距離は、そのまま速さでしょうか。速さは1秒あたりの距離なので、0.1秒で割ります（10倍します）。1番目は15cm/s、2番目は45cm/s、3番目は75cm/s、4番目は105cm/sです。', add: [lb(37, 95, '15cm/s', 10, C.red, 'middle', true), lb(67, 108, '45cm/s', 10, C.red, 'middle', true), lb(127, 95, '75cm/s', 10, C.red, 'middle', true), lb(217, 108, '105cm/s', 10, C.red, 'middle', true), ...m('速さ＝距離÷0.1秒（10倍）', C.red, FILL.red)] },
  { note: '3番目の区間の平均の速さは、7.5÷0.1＝75cm/sです。(1)の答えです。', add: [ln(90, 80, 165, 80, C.red, false, 4), ...m('3番目：7.5÷0.1＝75cm/s', C.red, FILL.red)] },
  { note: '速さの差を見ます。45−15＝30、75−45＝30、105−75＝30。0.1秒ごとに30cm/sずつ一定の割合で増えています。(2)の答えです。', add: m('45−15＝75−45＝105−75＝30cm/s', C.purple, FILL.purple) },
  { note: '❓なぜ一定の割合で増えるのでしょう。斜面の上では、重力の斜面に平行な分力が、進む向きに一定の大きさではたらき続けるからです。', add: [pg([[30, 160], [130, 160], [130, 125]], C.gray, FILL.gray), ar(95, 138, 70, 148, C.red), lb(150, 148, '分力が一定', 10, C.red, 'start', true), ...m('分力が一定→速さが一定の割合で増える', C.red, FILL.red)] },
  { note: '斜面の傾きを大きくすると、斜面に平行な分力が大きくなります。そのため、速さの増え方は大きくなります。(3)の答えです。', add: [pg([[235, 160], [295, 160], [295, 118]], C.gray, FILL.gray), ar(285, 128, 259, 150, C.red), ...m('傾き大→分力大→増え方が大きい', C.green, FILL.green)] },
], '答え：(1) 75cm/s (2) 30cm/s (3) 大きくなる');

// k18 ふりこ
const k18Base = (): DiagramElement[] => [
  ln(130, 10, 190, 10, C.ink, false, 4),
  ln(160, 10, 160, 130, C.gray, true),
  ln(160, 10, 71, 90, C.gray, false, 2),
  ci(71, 90, 10, undefined, C.main, FILL.warm),
  lb(46, 76, '200g', 11, C.ink, 'middle', true),
];
const f18 = show([
  { note: '質量200gのおもりをつるしたふりこを、いちばん低い点より20cm高い所まで持ち上げて、静かに放します。摩擦や空気の抵抗は考えません。', add: [...k18Base(), ...m('200gのおもりを20cm持ち上げる')] },
  { note: '重力は、100gで1Nなので、200gなら2Nです。おもりには、下向きに2Nの重力がはたらいています。', add: [ar(71, 102, 71, 128, C.red), lb(80, 122, '重力2N', 10, C.red, 'start', true), ...m('200g→重力2N', C.red, FILL.red)] },
  { note: '❓位置エネルギーは何で決まるのでしょう。重力の大きさ×高さです。高さ20cm＝0.2mなので、2×0.2＝0.4J。(1)の答えです。', add: [ln(60, 90, 265, 90, C.gray, true), ln(285, 90, 285, 130, C.gray), lb(279, 112, '20cm', 11, C.blue, 'end', true), ...m('位置エネルギー＝2×0.2＝0.4J', C.blue, FILL.blue)] },
  { note: '放すと、おもりは下がりながら加速します。いちばん低い点では、高さが0なので位置エネルギーは0です。', add: [ci(160, 130, 10, undefined, C.green, FILL.green), ...m('最下点：位置エネルギー0J', C.green, FILL.green)] },
  { note: '❓なくなった位置エネルギーは、どこへ行ったのでしょう。運動エネルギーに変わりました。摩擦がなければ、位置エネルギーと運動エネルギーの和は一定です。運動エネルギー＝0.4J。(2)の答えです。', add: m('運動エネルギー＝0.4J（和は一定）', C.purple, FILL.purple) },
  { note: '反対側でも、おもりは放した高さと同じ高さまで上がります。そこで速さが0になり、運動エネルギーも0になります。', add: [ci(249, 90, 10, undefined, C.main, FILL.warm), ln(160, 10, 249, 90, C.gray, false, 2), ...m('反対側：高さ20cmまで上がる', C.main, FILL.warm)] },
  { note: '確かめます。最下点は位置0.0J＋運動0.4J、最高点は位置0.4J＋運動0J。どちらも合計0.4Jで、(3)の最高点は0.4÷2＝0.2m＝20cmです。', add: m('合計はどこでも0.4J', C.green, FILL.green) },
], '答え：(1) 0.4J (2) 0.4J (3) 20cm');

// k19 力のつり合い
const f19 = show([
  { note: '重さ12Nの本が、水平な机の上で静止しています。本にはたらく力を調べます。', add: [ln(40, 110, 280, 110, C.gray, false, 5), bx(120, 70, 80, 40, '本', C.main, FILL.warm, 14), ...m('重さ12Nの本が静止している')] },
  { note: '本には、下向きに重力12Nがはたらいています。重力の矢印は、本の中心から下向きにかきます。', add: [ar(140, 90, 140, 140, C.red), lb(130, 132, '重力12N', 11, C.red, 'end', true), ...m('下向きに重力12N', C.red, FILL.red)] },
  { note: '❓本が落ちないのは、なぜでしょう。机が、本を上向きに押しているからです。この力を垂直抗力といいます。(1)の答えです。', add: [ar(180, 110, 180, 50, C.green), lb(190, 55, '垂直抗力', 11, C.green, 'start', true), ...m('上向きの力＝垂直抗力', C.green, FILL.green)] },
  { note: '本は静止しているので、2つの力はつり合っています。つり合う力は、大きさが等しく、向きが反対です。だから垂直抗力も12N。(2)の答えです。', add: m('つり合い→垂直抗力も12N', C.purple, FILL.purple) },
  { note: '次に、本と机がおたがいに押しあう力を見ます。本が机を押す力と、机が本を押す力は、別々の物体にはたらく1組の力です。', add: fresh(bx(120, 20, 80, 36, '本', C.main, FILL.warm, 14), bx(120, 100, 80, 36, '机', C.gray, FILL.gray, 14), ar(145, 58, 145, 98, C.purple), lb(135, 78, '本が机を押す', 10, C.purple, 'end', true), ar(175, 98, 175, 58, C.green), lb(185, 78, '机が本を押す', 10, C.green, 'start', true), ...m('おたがいに押しあう1組の力', C.purple, FILL.purple)) },
  { note: '❓この2つの力は、つり合いでしょうか。ちがいます。つり合いは「1つの物体」にはたらく2力、これは「2つの物体」にはたらく力です。この関係を作用・反作用といいます。(3)の答えです。', add: m('2つの物体のあいだ＝作用・反作用', C.red, FILL.red) },
  { note: '区別をまとめます。重力と垂直抗力は同じ物体（本）にはたらくのでつり合い、本が机を押す力と机が本を押す力は別の物体にはたらくので作用・反作用です。', add: m('同じ物体→つり合い／別→作用反作用', C.green, FILL.green) },
], '答え：(1) 垂直抗力 (2) 12N (3) 作用・反作用の関係');

// k20 力の合成
const f20 = show([
  { note: '1つの物体に、6Nの力Aと8Nの力Bを加えます。向きの関係を変えたときの合力を調べます。', add: [ar(60, 100, 120, 100, C.red), lb(90, 88, 'A 6N', 11, C.red, 'middle', true), ar(60, 130, 140, 130, C.blue), lb(100, 142, 'B 8N', 11, C.blue, 'middle', true), ...m('A＝6N、B＝8N')] },
  { note: '同じ向きなら、力が加わりあいます。合力は6＋8＝14Nで、同じ向きです。(1)の答えです。', add: fresh(ar(30, 80, 90, 80, C.red), ar(90, 80, 170, 80, C.blue), lb(60, 68, 'A 6N', 11, C.red, 'middle', true), lb(130, 68, 'B 8N', 11, C.blue, 'middle', true), ar(30, 115, 170, 115, C.purple), lb(100, 130, '合力14N', 11, C.purple, 'middle', true), ...m('同じ向き：6＋8＝14N', C.purple, FILL.purple)) },
  { note: '反対向きなら、力が打ち消しあいます。大きいほうから小さいほうを引いて、8−6＝2N。向きは大きいBの向きです。(2)の答えです。', add: fresh(ar(160, 50, 220, 50, C.red), lb(190, 38, 'A 6N', 11, C.red, 'middle', true), ar(160, 80, 80, 80, C.blue), lb(120, 68, 'B 8N', 11, C.blue, 'middle', true), ar(160, 115, 140, 115, C.purple), lb(150, 130, '合力2N（Bの向き）', 11, C.purple, 'middle', true), ...m('反対向き：8−6＝2N', C.purple, FILL.purple)) },
  { note: '2つの力が直角のときは、2つの力を2辺とする長方形（平行四辺形）の対角線が、合力になります。', add: fresh(ar(80, 130, 140, 130, C.red), lb(110, 144, 'A 6N', 11, C.red, 'middle', true), ar(80, 130, 80, 50, C.blue), lb(60, 90, 'B 8N', 11, C.blue, 'end', true), ln(140, 130, 140, 50, C.gray, true), ln(80, 50, 140, 50, C.gray, true), ar(80, 130, 140, 50, C.purple), ...m('直角：対角線が合力', C.purple, FILL.purple)) },
  { note: '❓なぜ足し算にならないのでしょう。2つの力が別々の向きにはたらいて、一部しか協力しないからです。対角線は、直角三角形の斜辺なので、三平方の定理で求めます。', add: [lb(164, 90, '合力？', 11, C.purple, 'start', true), ...m('直角三角形の斜辺として求める', C.purple, FILL.purple)] },
  { note: '合力の2乗＝6²＋8²＝36＋64＝100。100は10を2回かけた数なので、合力は10Nです。(3)の答えです。', add: [cover(160, 82, 80, 16), lb(164, 90, '合力10N', 11, C.purple, 'start', true), ...m('36＋64＝100 → 合力10N', C.green, FILL.green)] },
  { note: '確かめます。合力の大きさは、同じ向きの14Nと反対向きの2Nのあいだで変わります。直角の10Nは、そのあいだに入っています。', add: m('14N（同）＞10N（直角）＞2N（逆）', C.green, FILL.green) },
], '答え：(1) 14N (2) 2N (3) 10N');

// ═════════ 化学 ═════════

/** 中心(cx,cy)の円周上にn個の電子（小さな円）を並べる。 */
const ring = (cx: number, cy: number, r: number, n: number, off: number, color: string = C.blue): DiagramElement[] =>
  Array.from({ length: n }, (_, i) => {
    const a = ((off + (360 / n) * i) * Math.PI) / 180;
    return ci(Math.round((cx + r * Math.cos(a)) * 10) / 10, Math.round((cy - r * Math.sin(a)) * 10) / 10, 3.2, undefined, color, color);
  });

// k21 炭酸水素ナトリウムの加熱
const k21Base = (): DiagramElement[] => [
  pg([[196, 72], [204, 88], [104, 133], [96, 117]], C.gray, FILL.gray),
  bx(176, 108, 48, 22, '加熱', C.red, FILL.red, 11),
  ci(190, 90, 6, undefined, C.gray, '#FFFFFF'),
  lb(236, 78, '炭酸水素\nナトリウム', 10, C.ink, 'start', true),
];
const f21 = show([
  { note: '炭酸水素ナトリウムを試験管に入れて加熱します。試験管の口は、少し下げておきます。', add: [...k21Base(), ...m('炭酸水素ナトリウムを加熱する')] },
  { note: '❓出てくる気体は何でしょう。試験管の口から出た気体を、石灰水に通します。石灰水が白くにごります。', add: [ln(98, 128, 60, 128, C.gray, false, 2), ln(60, 128, 60, 140, C.gray, false, 2), bx(35, 140, 50, 22, '石灰水', C.blue, FILL.blue, 10), ar(110, 118, 70, 126, C.purple), ...m('気体を石灰水に通す→白くにごる', C.purple, FILL.purple)] },
  { note: '石灰水を白くにごらせる気体は、二酸化炭素です。(1)の答えです。', add: [cover(35, 140, 50, 22), bx(30, 140, 60, 22, '白くにごる', C.red, FILL.red, 9), ...m('(1) 気体＝二酸化炭素', C.red, FILL.red)] },
  { note: '試験管の口の近くには、液体がたまります。青色の塩化コバルト紙をつけると、赤（桃）色に変わります。これは水です。(2)の答えです。', add: [ci(112, 123, 3.5, undefined, C.blue, FILL.blue), ci(120, 118, 3.5, undefined, C.blue, FILL.blue), ci(106, 128, 3.5, undefined, C.blue, FILL.blue), lb(150, 150, '水のつぶ', 10, C.blue, 'middle', true), ...m('(2) 口の液体＝水（塩化コバルト紙が赤）', C.blue, FILL.blue)] },
  { note: '❓残った白い固体は、もとの物質でしょうか。ちがいます。水にとけやすく、水溶液が強いアルカリ性を示す、炭酸ナトリウムです。(3)の答えです。', add: [ci(190, 90, 6, undefined, C.green, FILL.green), ...m('(3) 白い固体＝炭酸ナトリウム', C.green, FILL.green)] },
  { note: '化学反応式で表すと、2NaHCO₃ → Na₂CO₃ ＋ H₂O ＋ CO₂。1種類の物質が3種類に分かれる、熱分解です。', add: m('2NaHCO₃→Na₂CO₃＋H₂O＋CO₂', C.purple, FILL.purple) },
  { note: '確かめます。左右の原子の数は、ナトリウム2、水素2、炭素2、酸素6で、どちらも同じです。なお、口を少し下げるのは、水が加熱部分に流れて試験管が割れるのを防ぐためです。', add: m('口を下げる→水で割れるのを防ぐ', C.green, FILL.green) },
], '答え：(1) 二酸化炭素 (2) 水 (3) 炭酸ナトリウム');

// k22 水の電気分解
const k22Base = (): DiagramElement[] => [
  bx(90, 30, 40, 100, undefined, C.gray, '#FFFFFF'), bx(190, 30, 40, 100, undefined, C.gray, '#FFFFFF'),
  bx(70, 130, 180, 26, '水＋水酸化ナトリウム', C.blue, FILL.blue, 10),
  lb(110, 20, '陰極（−）', 10, C.blue, 'middle', true), lb(210, 20, '陽極（＋）', 10, C.red, 'middle', true),
];
const f22 = show([
  { note: '水に少量の水酸化ナトリウムをとかして電流を流します。水酸化ナトリウムは、電流を流れやすくするためのものです。', add: [...k22Base(), ...m('水を電気分解する')] },
  { note: '❓陰極には何が集まるでしょう。水は水素と酸素に分解されます。陰極側には、水素が集まります。(1)の答えです。', add: [bx(90, 30, 40, 60, 'H₂', C.blue, FILL.blue, 12), ...m('(1) 陰極：水素', C.blue, FILL.blue)] },
  { note: '陽極側には、酸素が集まります。水素のほうが、集まった気体の高さが高くなっています。', add: [bx(190, 30, 40, 30, 'O₂', C.red, FILL.red, 12), ...m('陽極：酸素', C.red, FILL.red)] },
  { note: '❓体積の比は、どうなるでしょう。目盛りを読むと、水素は酸素の2倍です。水素：酸素＝2：1。(2)の答えです。', add: [lb(160, 80, '体積 2：1', 11, C.purple, 'middle', true), ...m('(2) 水素：酸素＝2：1', C.purple, FILL.purple)] },
  { note: '❓なぜ2：1なのでしょう。水の化学式はH₂Oで、水分子2個が、水素分子2個と酸素分子1個に分かれます。2H₂O → 2H₂ ＋ O₂。係数の比が体積の比です。', add: m('2H₂O→2H₂＋O₂（係数2：1）', C.green, FILL.green) },
  { note: '水素が12cm³のとき、酸素はその半分で、12÷2＝6cm³です。(3)の答えです。', add: m('酸素＝12÷2＝6cm³', C.green, FILL.green) },
  { note: '確かめます。12：6＝2：1で、水H₂Oの原子の数（水素2に酸素1）とも合っています。', add: m('12：6＝2：1 で一致', C.green, FILL.green) },
], '答え：(1) 水素 (2) 水素：酸素＝2：1 (3) 6cm³');

// k23 銅の酸化
const f23 = show([
  { note: '銅粉1.6gを加熱して完全に酸化させると、酸化銅2.0gができました。銅と酸素が結びつく質量の比は一定です。', add: [bx(40, 30, 64, 24, '銅 1.6g', C.main, FILL.warm, 11), bx(40, 70, 80, 24, '酸化銅 2.0g', C.ink, FILL.gray, 11), ...m('銅1.6g＋酸素→酸化銅2.0g')] },
  { note: '❓結びついた酸素は何gでしょう。化学変化の前後で、全体の質量は変わりません。酸化銅から銅を引くと、2.0−1.6＝0.4g。(1)の答えです。', add: [bx(104, 30, 16, 24, undefined, C.blue, FILL.blue), lb(112, 62, '酸素0.4g', 10, C.blue, 'middle', true), ...m('酸素＝2.0−1.6＝0.4g', C.blue, FILL.blue)] },
  { note: '質量の比は、銅：酸素：酸化銅＝1.6：0.4：2.0＝4：1：5です。この比はいつも同じです。', add: m('銅：酸素：酸化銅＝4：1：5', C.purple, FILL.purple) },
  { note: '銅3.2gは、1.6gの2倍です。比は一定なので、酸化銅も2倍の2.0×2＝4.0g。(2)の答えです。', add: [bx(40, 108, 128, 22, '銅 3.2g', C.main, FILL.warm, 11), bx(40, 134, 160, 22, '酸化銅 4.0g', C.red, FILL.red, 11), ...m('2倍：酸化銅も2.0×2＝4.0g', C.red, FILL.red)] },
  { note: '酸化銅7.5gでは、そのうち銅は、全体5のうち4の割合です。', add: fresh(bx(20, 40, 225, 26, '酸化銅 7.5g', C.ink, FILL.gray, 12), ...m('酸化銅5のうち、銅は4（4/5）', C.blue, FILL.blue)) },
  { note: '銅＝7.5×4÷5＝6.0g。(3)の答えです。酸素は7.5−6.0＝1.5gです。', add: [bx(20, 86, 180, 26, '銅 6.0g', C.main, FILL.warm, 12), bx(200, 86, 45, 26, '酸素1.5g', C.blue, FILL.blue, 9), ...m('銅＝7.5×4÷5＝6.0g', C.red, FILL.red)] },
  { note: '確かめます。銅6.0gと酸素1.5g（6.0÷4）を足すと7.5g。酸化銅の質量と一致します。', add: m('6.0＋1.5＝7.5g で一致', C.green, FILL.green) },
], '答え：(1) 0.4g (2) 4.0g (3) 6.0g');

// k24 塩酸と石灰石
const k24Axes = (): DiagramElement[] => [
  ln(50, 140, 210, 140, C.ink, false, 1.8), ln(50, 140, 50, 10, C.ink, false, 1.8),
  lb(130, 163, '石灰石の質量(g)', 10, C.gray, 'middle', true), lb(50, 6, 'CO₂(g)', 9, C.gray, 'start', true),
];
const f24 = show([
  { note: '塩酸20cm³に石灰石を加えて、発生した二酸化炭素の質量を調べました。点は、0.5gごとの測定結果です。', add: [...k24Axes(), ci(75, 120.2, 3, undefined, C.blue, C.blue), ci(100, 100.4, 3, undefined, C.blue, C.blue), ci(125, 80.6, 3, undefined, C.blue, C.blue), ci(150, 80.6, 3, undefined, C.blue, C.blue), ci(175, 80.6, 3, undefined, C.blue, C.blue), ...m('塩酸20cm³に石灰石を加える')] },
  { note: '❓どんなふうに増えているでしょう。石灰石が1.5gまでは、0.5gごとに0.22gずつ、比例して増えます。2.0g以上は、0.66gで一定です。', add: [ln(50, 140, 125, 80.6, C.blue, false, 2), ln(125, 80.6, 200, 80.6, C.blue, false, 2), ...m('1.5gまで比例、それ以後は一定', C.blue, FILL.blue)] },
  { note: '❓なぜ一定になるのでしょう。塩酸が全部使われると、石灰石を増やしても、反応が進まないからです。折れ曲がる点が、ちょうど反応した点です。(1)の答えは1.5gです。', add: [ln(125, 80.6, 125, 140, C.red, true), lb(125, 150, '1.5g', 11, C.red, 'middle', true), ...m('(1) ちょうど反応＝1.5g', C.red, FILL.red)] },
  { note: '石灰石3.0gは、1.5gより多いので、塩酸が足りません。発生量は、上限の0.66gのままです。(2)の答えです。', add: [ln(50, 80.6, 125, 80.6, C.red, true), ci(200, 80.6, 4, undefined, C.red, FILL.red), lb(30, 81, '0.66', 10, C.red, 'middle', true), ...m('(2) 3.0g→上限の0.66g', C.red, FILL.red)] },
  { note: '❓塩酸を40cm³（2倍）にすると、どうなるでしょう。ちょうど反応する石灰石も2倍の3.0gになり、発生量の上限も2倍の1.32gになります。', add: [ln(50, 140, 200, 21.2, C.purple, false, 2), lb(90, 45, '塩酸40cm³', 10, C.purple, 'middle', true), ...m('40cm³：3.0gで上限1.32g', C.purple, FILL.purple)] },
  { note: '石灰石は2.0gで、3.0gに足りないので、石灰石がすべて反応します。1.0gで0.44gなので、2.0gでは0.88g。(3)の答えです。', add: [ln(50, 60.8, 150, 60.8, C.green, true), ln(150, 60.8, 150, 140, C.green, true), ci(150, 60.8, 4, undefined, C.green, FILL.green), lb(30, 61, '0.88', 10, C.green, 'middle', true), ...m('(3) 2.0g→0.44×2＝0.88g', C.green, FILL.green)] },
  { note: '確かめます。3.0gで1.32gなので、2.0gはその2/3。1.32×2/3＝0.88gで一致します。', add: m('1.32×(2.0÷3.0)＝0.88g', C.green, FILL.green) },
], '答え：(1) 1.5g (2) 0.66g (3) 0.88g');

// k25 ナトリウムイオン
const shells = (cx: number, cy: number, n3: number): DiagramElement[] => [
  ...(n3 ? [ci(cx, cy, 56, undefined, C.gray, 'none')] : []), ci(cx, cy, 42, undefined, C.gray, 'none'), ci(cx, cy, 26, undefined, C.gray, 'none'),
  ...ring(cx, cy, 26, 2, 90), ...ring(cx, cy, 42, 8, 20), ...(n3 ? ring(cx, cy, 56, n3, 0) : []),
  ci(cx, cy, 14, '＋11', C.red, FILL.red, 9),
];
const f25 = show([
  { note: 'ナトリウム原子は、陽子11個（＋の電気）と電子11個（−の電気）をもっています。＋と−が同じ数なので、中性です。', add: [...shells(80, 85, 1), ...m('Na原子：陽子11・電子11（中性）')] },
  { note: '❓どの電子が出ていくのでしょう。いちばん外側の電子1個が、出ていきやすい状態です。この1個を放出します。', add: [ci(136, 85, 3.6, undefined, C.red, C.red), ar(142, 85, 180, 85, C.red), lb(165, 72, 'e⁻', 12, C.red, 'middle', true), ...m('いちばん外の電子を1個放出', C.red, FILL.red)] },
  { note: '電子を1個放出したあとの姿です。電子は11−1＝10個になりました。(3)の答えは10個です。', add: [...shells(240, 85, 0), ...m('電子は11−1＝10個', C.blue, FILL.blue)] },
  { note: '❓電気はどうなるでしょう。陽子の＋11と、電子の−10を合わせると、差し引き＋1です。＋の電気を帯びます。', add: [lb(240, 24, '＋11−10＝＋1', 11, C.purple, 'middle', true), ...m('＋11と−10→差し引き＋1', C.purple, FILL.purple)] },
  { note: '＋の電気を帯びたものを陽イオンといいます。ナトリウムイオン、化学式はNa⁺です。(2)の答えです。', add: [lb(240, 150, 'Na⁺', 14, C.red, 'middle', true), ...m('(2) ナトリウムイオン Na⁺', C.red, FILL.red)] },
  { note: '❓陽子の数は変わったでしょうか。変わりません。原子核の中の陽子は、そのまま11個です。変わるのは電子の数だけです。', add: m('陽子は11個のまま（電子だけ減る）', C.green, FILL.green) },
  { note: '確かめます。(1)電子を1個放出する、(2)Na⁺（＋1の陽イオン）、(3)電子は10個。陽子11−電子10＝＋1が、Na⁺の「＋」と一致します。', add: m('陽子11−電子10＝＋1＝Na⁺', C.green, FILL.green) },
], '答え：(1) 1個放出 (2) ナトリウムイオン Na⁺ (3) 10個');

// k26 塩化銅水溶液の電気分解
const k26Base = (): DiagramElement[] => [
  bx(60, 60, 210, 90, undefined, C.blue, FILL.blue),
  bx(100, 20, 14, 110, undefined, C.ink, C.gray), bx(216, 20, 14, 110, undefined, C.ink, C.gray),
  lb(107, 160, '陰極（−）', 10, C.blue, 'middle', true), lb(223, 160, '陽極（＋）', 10, C.red, 'middle', true),
];
const f26 = show([
  { note: '塩化銅水溶液に炭素棒を2本入れて、電流を流します。左が陰極（−）、右が陽極（＋）です。', add: [...k26Base(), ...m('塩化銅水溶液の電気分解')] },
  { note: '塩化銅は、水の中で、銅イオン（Cu²⁺）と塩化物イオン（Cl⁻）に分かれています。電離といいます。', add: [bx(124, 70, 34, 18, 'Cu²⁺', C.main, FILL.warm, 10), bx(124, 110, 34, 18, 'Cu²⁺', C.main, FILL.warm, 10), bx(170, 70, 30, 18, 'Cl⁻', C.green, FILL.green, 10), bx(170, 90, 30, 18, 'Cl⁻', C.green, FILL.green, 10), bx(170, 110, 30, 18, 'Cl⁻', C.green, FILL.green, 10), ...m('CuCl₂→Cu²⁺＋2Cl⁻（電離）')] },
  { note: '❓どのイオンがどちらの極に行くのでしょう。陰極（−）には＋の銅イオンが、陽極（＋）には−の塩化物イオンが引かれます。', add: [ar(158, 50, 118, 50, C.red), lb(138, 40, '陽イオン', 10, C.red, 'middle', true), ar(172, 50, 212, 50, C.blue), lb(192, 40, '陰イオン', 10, C.blue, 'middle', true), ...m('陰極に陽イオン、陽極に陰イオン', C.purple, FILL.purple)] },
  { note: '陰極では、銅イオンが電子を受け取って、銅原子になります。Cu²⁺＋2e⁻ → Cu。赤茶色の銅が付着します。(1)の答えです。', add: [bx(96, 60, 5, 60, undefined, C.main, '#FDBA74'), ...m('(1) 陰極：銅が付着', C.main, FILL.warm)] },
  { note: '陽極では、塩化物イオンが電子を放出して、塩素になります。2Cl⁻ → Cl₂＋2e⁻。気泡が発生します。(2)の答えです。', add: [ci(238, 100, 4, undefined, C.green, FILL.green), ci(248, 82, 4, undefined, C.green, FILL.green), ci(240, 66, 4, undefined, C.green, FILL.green), ...m('(2) 陽極：塩素が発生', C.green, FILL.green)] },
  { note: '❓塩素に、水でぬらした色つきの紙を近づけると、どうなるでしょう。塩素には漂白作用があるので、紙の色が消えます。(3)の答えです。', add: [bx(240, 22, 34, 22, '色紙', C.red, FILL.red, 10), ...m('(3) 紙の色が消える（漂白）', C.red, FILL.red)] },
  { note: '確かめます。全体では、CuCl₂ → Cu ＋ Cl₂と分解されています。銅と塩素が、もとの化学式の「Cu」と「Cl」に対応しています。', add: m('CuCl₂→Cu＋Cl₂（分解）', C.green, FILL.green) },
], '答え：(1) 銅 (2) 塩素 (3) 色が消える（漂白される）');

// k27 BTB溶液
const k27Boxes = (fills: string[]): DiagramElement[] => {
  const names = ['塩酸', '食塩水', '炭酸水', '水酸化\nナトリウム\n水溶液'];
  return names.map((t, i) => bx(12 + i * 78, 50, 66, 70, t, C.gray, fills[i], 11));
};
const f27 = show([
  { note: '4つの水溶液に、BTB溶液を加えて、色の変化を調べます。青色になるものを探します。', add: [...k27Boxes([FILL.gray, FILL.gray, FILL.gray, FILL.gray]), ...m('4つの水溶液にBTB溶液を加える')] },
  { note: '❓BTB溶液は、何で色が変わるのでしょう。酸性で黄色、中性で緑色、アルカリ性で青色です。', add: [bx(20, 130, 80, 26, '酸性＝黄', C.main, FILL.yellow, 12), bx(120, 130, 80, 26, '中性＝緑', C.green, FILL.green, 12), bx(220, 130, 80, 26, 'アルカリ性＝青', C.blue, FILL.blue, 11), ...m('酸性は黄、中性は緑、アルカリ性は青')] },
  { note: '塩酸は酸性です。BTB溶液は黄色になります。', add: [bx(12, 50, 66, 70, '塩酸', C.main, FILL.yellow, 11), ...m('塩酸：酸性→黄色', C.main, FILL.yellow)] },
  { note: '食塩水は中性です。BTB溶液は緑色のままです。', add: [bx(90, 50, 66, 70, '食塩水', C.green, FILL.green, 11), ...m('食塩水：中性→緑色', C.green, FILL.green)] },
  { note: '❓炭酸水は酸性でしょうか。二酸化炭素が水にとけてできる弱い酸性の水溶液です。BTB溶液は黄色になります。', add: [bx(168, 50, 66, 70, '炭酸水', C.main, FILL.yellow, 11), ...m('炭酸水：弱い酸性→黄色', C.main, FILL.yellow)] },
  { note: '水酸化ナトリウム水溶液は、アルカリ性です。水酸化物イオン（OH⁻）があるので、BTB溶液は青色になります。', add: [bx(246, 50, 66, 70, '水酸化\nナトリウム\n水溶液', C.blue, FILL.blue, 11), ...m('水酸化ナトリウム水溶液：青色', C.blue, FILL.blue)] },
  { note: '確かめます。フェノールフタレイン溶液を加えると、アルカリ性の水酸化ナトリウム水溶液だけが赤色に変わります。答えは水酸化ナトリウム水溶液です。', add: m('答え：水酸化ナトリウム水溶液', C.green, FILL.green) },
], '答え：水酸化ナトリウム水溶液');

// k28 溶解度
const f28 = show([
  { note: '硝酸カリウムは、水100gに、60℃で110gまでとけます。そのとき飽和水溶液は、100＋110＝210gです。1gを1pxで表します。', add: [bx(20, 30, 100, 24, '水 100g', C.blue, FILL.blue, 11), bx(120, 30, 110, 24, '溶質 110g', C.main, FILL.warm, 11), ...m('60℃：水100g＋110g＝210g')] },
  { note: '❓実際の水溶液105gは、210gの何倍でしょう。ちょうど半分です。飽和水溶液の割合は変わらないので、水も溶質も半分になります。水50g、溶質55gです。', add: [bx(20, 70, 50, 24, '水 50g', C.blue, FILL.blue, 11), bx(70, 70, 55, 24, '55g', C.main, FILL.warm, 11), ...m('105g＝210gの半分→水50g・溶質55g', C.blue, FILL.blue)] },
  { note: 'とけている硝酸カリウムは55gです。(1)の答えです。', add: [bx(70, 70, 55, 24, '55g', C.red, FILL.red, 11), ...m('(1) 55g', C.red, FILL.red)] },
  { note: '❓20℃に冷やすと、どうなるでしょう。20℃では、水100gに32g、水50gなら16gまでしかとけません。とけきれない分が、結晶になって出てきます。', add: [bx(20, 110, 50, 24, '水 50g', C.blue, FILL.blue, 11), bx(70, 110, 16, 24, undefined, C.main, FILL.warm), lb(78, 142, '16g', 10, C.main, 'middle', true), bx(86, 110, 39, 24, '結晶39g', C.purple, FILL.purple, 10), ...m('20℃：水50gにとけるのは32÷2＝16g', C.purple, FILL.purple)] },
  { note: '結晶の質量は、55−16＝39gです。(2)の答えです。', add: m('(2) 結晶＝55−16＝39g', C.red, FILL.red) },
  { note: '❓濃度は、水の質量で割るのでしょうか。質量パーセント濃度は、溶質÷水溶液全体×100です。110÷210×100＝52.38…％。整数で約52%。(3)の答えです。', add: [bx(120, 30, 110, 24, '溶質 110g', C.red, FILL.red, 11), ...m('(3) 110÷210×100≒52%', C.red, FILL.red)] },
  { note: '確かめます。冷やしたあとの水溶液は50＋16＝66g。結晶39gを足すと66＋39＝105gで、はじめの水溶液と一致します。', add: m('66＋39＝105g で一致', C.green, FILL.green) },
], '答え：(1) 55g (2) 39g (3) 約52%');

// k29 気体の集め方
const k29Base = (): DiagramElement[] => [
  bx(10, 16, 96, 26, '水上置換法', C.blue, FILL.blue, 12), bx(112, 16, 96, 26, '上方置換法', C.green, FILL.green, 12), bx(214, 16, 96, 26, '下方置換法', C.purple, FILL.purple, 12),
  bx(15, 100, 86, 40, undefined, C.blue, FILL.blue), lb(28, 128, '水', 11, C.blue, 'middle', true), bx(45, 56, 30, 64, undefined, C.gray, '#FFFFFF'),
  bx(150, 70, 30, 64, undefined, C.gray, '#FFFFFF'), ar(165, 152, 165, 118, C.green),
  bx(252, 70, 30, 64, undefined, C.gray, '#FFFFFF'), ar(267, 50, 267, 86, C.purple),
];
const f29 = show([
  { note: '気体の集め方は3つあります。水上置換法、上方置換法、下方置換法です。気体の性質によって、使い分けます。', add: [...k29Base(), ...m('気体の集め方は3つ')] },
  { note: 'アンモニアは、水に非常によくとけ、空気より軽い気体です。この2つの性質で、集め方を決めます。', add: m('アンモニア：水によくとける・軽い', C.purple, FILL.purple) },
  { note: '❓水上置換法は使えるでしょうか。水にとけやすい気体は、水に入れるととけてしまうので使えません。', add: [ln(20, 58, 96, 138, C.red, false, 3), ln(96, 58, 20, 138, C.red, false, 3), ...m('水にとける→水上置換法は不可', C.red, FILL.red)] },
  { note: '❓では、上と下のどちらに集まるでしょう。空気より軽いので、びんを逆さにして、上へ向けて集めます。これが上方置換法です。', add: [bx(108, 12, 104, 148, undefined, C.green, 'none'), ...m('軽い→上に集める＝上方置換法', C.green, FILL.green)] },
  { note: '下方置換法は、空気より重い気体（二酸化炭素など）を、びんの口を上に向けて、下にためる方法です。軽いアンモニアには向きません。', add: [ln(222, 58, 302, 138, C.red, false, 3), ln(302, 58, 222, 138, C.red, false, 3), ...m('下方置換法は重い気体用', C.red, FILL.red)] },
  { note: 'まとめます。水にとけにくい気体は水上置換法。水にとけやすくて軽い気体は上方置換法、重い気体は下方置換法です。', add: m('とけやすい＋軽い→上方置換法', C.green, FILL.green) },
  { note: '確かめます。アンモニアの水溶液がアルカリ性であること、噴水の実験で水に非常によくとけることからも、上方置換法で合っています。答えは上方置換法です。', add: m('答え：上方置換法', C.green, FILL.green) },
], '答え：上方置換法');

// k30 酸化銅と炭素
const k30Base = (): DiagramElement[] => [
  bx(20, 30, 90, 30, '酸化銅 8.0g', C.ink, FILL.gray, 11), bx(20, 100, 90, 30, '炭素 0.6g', C.ink, FILL.gray, 11),
  bx(210, 30, 90, 30, '銅 6.4g', C.main, FILL.warm, 11), bx(210, 100, 90, 30, '気体 ？g', C.blue, FILL.blue, 11),
  ar(112, 45, 208, 45, C.gray), ar(112, 115, 208, 115, C.gray),
];
const f30 = show([
  { note: '酸化銅8.0gと炭素0.6gを混ぜて加熱すると、過不足なく反応して、銅6.4gと気体ができました。', add: [...k30Base(), ...m('酸化銅＋炭素→銅＋気体')] },
  { note: '❓酸素はどこへ行ったのでしょう。酸化銅から酸素がうばわれて銅になり、その酸素が炭素と結びつきます。', add: [ar(65, 62, 65, 98, C.red), lb(78, 80, '酸素', 11, C.red, 'start', true), ...m('酸化銅の酸素が炭素へ移る', C.red, FILL.red)] },
  { note: '酸素をうばわれた酸化銅が、還元されました。(1)の答えです。', add: [bx(20, 30, 90, 30, '酸化銅 8.0g', C.red, FILL.red, 11), ...m('(1) 還元された物質＝酸化銅', C.red, FILL.red)] },
  { note: '酸素と結びついた炭素が、酸化されました。(2)の答えです。酸化と還元は、同時に起こります。', add: [bx(20, 100, 90, 30, '炭素 0.6g', C.blue, FILL.blue, 11), ...m('(2) 酸化された物質＝炭素', C.blue, FILL.blue)] },
  { note: '❓気体の質量は、どう求めるのでしょう。化学変化の前後で、全体の質量は変わりません。反応前の合計は、8.0＋0.6＝8.6gです。', add: m('反応前の合計＝8.0＋0.6＝8.6g', C.purple, FILL.purple) },
  { note: '反応後に残った固体は銅6.4gなので、気体の質量は、8.6−6.4＝2.2gです。(3)の答えです。', add: [cover(210, 100, 90, 30), bx(210, 100, 90, 30, '二酸化炭素 2.2g', C.green, FILL.green, 10), ...m('(3) 気体＝8.6−6.4＝2.2g', C.green, FILL.green)] },
  { note: '確かめます。二酸化炭素CO₂は、炭素0.6gと酸素1.6gが結びついたものです。酸素1.6gは、酸化銅8.0gと銅6.4gの差と等しく、0.6＋1.6＝2.2gで一致します。', add: m('C0.6g＋O1.6g＝CO₂ 2.2g', C.green, FILL.green) },
], '答え：(1) 酸化銅 (2) 炭素 (3) 2.2g');

// ═════════ 生物 ═════════

// k31 細胞と染色
const k31Cell = (): DiagramElement[] => [
  bx(60, 22, 200, 120, undefined, C.green, FILL.green),
  bx(68, 30, 184, 104, undefined, C.gray, FILL.warm),
];
const f31 = show([
  { note: 'タマネギの表皮の細胞を、顕微鏡で観察します。まず、細胞の模式図で、つくりを確かめます。', add: [...k31Cell(), ...m('タマネギの表皮の細胞（模式図）')] },
  { note: '細胞のいちばん外側のじょうぶなかべが細胞壁です。その内側の、核のまわりの部分が細胞質です。', add: [lb(160, 12, '細胞壁', 11, C.green, 'middle', true), lb(100, 55, '細胞質', 11, C.gray, 'middle', true), ...m('外側：細胞壁、内側：細胞質', C.green, FILL.green)] },
  { note: '細胞質の中に、丸い粒が1つあります。これが核で、染色体が入っています。', add: [ci(170, 85, 22, undefined, C.purple, FILL.purple), lb(170, 118, '核', 11, C.purple, 'middle', true), ...m('核：染色体が入っている', C.purple, FILL.purple)] },
  { note: '❓どうやって、核を見やすくするのでしょう。酢酸オルセイン液（染色液）を1滴たらします。', add: [bx(200, 148, 110, 16, '酢酸オルセイン液', C.red, FILL.red, 9), ...m('染色液を1滴たらす', C.red, FILL.red)] },
  { note: '染色体は、染色液によく染まります。そのため、核だけが赤くはっきり見えます。(答えは核)', add: [ci(170, 85, 22, undefined, C.red, '#FCA5A5'), ...m('染色体が染まる→核が赤くなる', C.red, FILL.red)] },
  { note: '細胞壁や細胞質は、あまり染まりません。選択肢のうち、染色液で赤くよく染まるのは、核です。', add: m('細胞壁・細胞質は染まりにくい', C.gray, FILL.gray) },
  { note: '確かめます。核は、動物の細胞にも植物の細胞にもあります。ヒトのほおの内側の細胞を染めても、核だけが赤く染まります。', add: m('核は動物にも植物にもある', C.green, FILL.green) },
], '答え：核');

// k32 BTB溶液とオオカナダモ
const k32Tubes = (aFill: string, bFill: string): DiagramElement[] => [
  bx(50, 50, 70, 90, undefined, C.ink, aFill), bx(200, 50, 70, 90, undefined, C.ink, bFill),
  lb(85, 118, 'オオカナダモ', 9, C.ink, 'middle', true), lb(235, 118, 'オオカナダモ', 9, C.ink, 'middle', true),
];
const f32 = show([
  { note: 'BTB溶液を加えて緑色にした水に、オオカナダモを入れます。Aは明るい窓ぎわ、Bはアルミニウムはくで包んで暗い所に置きます。', add: [...k32Tubes(FILL.green, FILL.green), lb(85, 150, 'A 光に当てる', 10, C.main, 'middle', true), lb(235, 150, 'B 暗い所', 10, C.gray, 'middle', true), ci(85, 25, 12, '光', C.main, FILL.yellow, 10), bx(190, 22, 90, 24, 'アルミはく', C.gray, FILL.gray, 10), ...m('Aは明るい所、Bは暗い所')] },
  { note: '❓暗いBでは、オオカナダモは何をしているでしょう。光がないので光合成はできません。呼吸だけを行います。', add: m('Bは暗い→呼吸だけ行う', C.gray, FILL.gray) },
  { note: '呼吸では二酸化炭素が出ます。水の中の二酸化炭素がふえると、水溶液は酸性に近づきます。', add: [ar(222, 80, 222, 58, C.gray), lb(250, 68, 'CO₂', 10, C.gray, 'middle', true), ...m('CO₂がふえる→酸性に近づく', C.gray, FILL.gray)] },
  { note: '酸性になると、BTB溶液は黄色になります。Bの水溶液は黄色です。(1)の答えです。', add: [...k32Tubes(FILL.green, FILL.yellow), ...m('(1) Bの色＝黄色', C.main, FILL.yellow)] },
  { note: '❓明るいAでは、何が起こっているでしょう。光があるので光合成が盛んです。呼吸でも二酸化炭素は出ますが、光合成で吸収する量のほうが多くなります。', add: [ar(72, 80, 72, 58, C.green), lb(100, 68, 'CO₂', 10, C.green, 'middle', true), ...m('A：光合成のほうが盛ん', C.green, FILL.green)] },
  { note: '二酸化炭素が減ると、水溶液はアルカリ性に近づき、BTB溶液は青色になります。Aが青色になったのは、光合成で二酸化炭素を吸収したからです。(2)の答えです。', add: [...k32Tubes(FILL.blue, FILL.yellow), ...m('(2) 光合成でCO₂を吸収→青色', C.blue, FILL.blue)] },
  { note: '確かめます。オオカナダモを入れない試験管を同じように置くと、色は変わりません。したがって、色の変化の原因は、オオカナダモのはたらきです。', add: m('対照実験で原因がわかる', C.green, FILL.green) },
], '答え：(1) 黄色 (2) 光合成で二酸化炭素を吸収したから');

// k33 蒸散
const k33Col = (cx: number, title: string, desc: string, leftFill: string, rightFill: string): DiagramElement[] => [
  lb(cx, 10, title, 12, C.ink, 'middle', true), lb(cx, 24, desc, 9, C.gray, 'middle', true),
  ci(cx - 11, 45, 8, undefined, C.green, leftFill), ci(cx + 11, 45, 8, undefined, C.green, rightFill),
  ln(cx, 53, cx, 95, C.green, false, 2), bx(cx - 16, 95, 32, 50, undefined, C.blue, FILL.blue),
];
const k33Base = (): DiagramElement[] => [
  ...k33Col(40, 'A', 'なにもしない', FILL.green, FILL.green),
  ...k33Col(120, 'B', '表にワセリン', FILL.red, FILL.green),
  ...k33Col(200, 'C', '裏にワセリン', FILL.green, FILL.red),
  ...k33Col(280, 'D', '葉を取る', '#FFFFFF', '#FFFFFF'),
];
const f33 = show([
  { note: '同じ大きさの枝A〜Dを、水を入れたメスシリンダーにさし、水面に油を注ぎます。B・Cは、表または裏にワセリンをぬった枝です（赤い葉）。', add: [...k33Base(), ...m('A〜Dの水の減少量を比べる')] },
  { note: '一定時間後の水の減少量は、Aが6.2cm³、Bが4.6cm³、Cが2.2cm³、Dが0.6cm³でした。水面には油があるので、減った水はすべて蒸散によります。', add: [lb(40, 158, '6.2cm³', 11, C.blue, 'middle', true), lb(120, 158, '4.6cm³', 11, C.blue, 'middle', true), lb(200, 158, '2.2cm³', 11, C.blue, 'middle', true), lb(280, 158, '0.6cm³', 11, C.blue, 'middle', true), ...m('減少量：A6.2、B4.6、C2.2、D0.6', C.blue, FILL.blue)] },
  { note: '❓Dは何の蒸散量でしょう。葉をすべて取ったので、茎だけからの蒸散です。茎は0.6cm³です。', add: [bx(244, 5, 72, 142, undefined, C.gray, 'none'), ...m('D：茎だけ＝0.6cm³', C.gray, FILL.gray)] },
  { note: '❓表側からの蒸散量は、どう求めるのでしょう。Aは表＋裏＋茎、Bは表をふさいだので裏＋茎です。AとBの差が表側です。6.2−4.6＝1.6cm³。(1)の答えです。', add: [bx(8, 5, 64, 142, undefined, C.red, 'none'), bx(88, 5, 64, 142, undefined, C.red, 'none'), ...m('(1) 表＝A−B＝6.2−4.6＝1.6cm³', C.red, FILL.red)] },
  { note: '裏側は、Cが表＋茎なので、AとCの差です。6.2−2.2＝4.0cm³。(2)の答えです。', add: [bx(168, 5, 64, 142, undefined, C.blue, 'none'), ...m('(2) 裏＝A−C＝6.2−2.2＝4.0cm³', C.blue, FILL.blue)] },
  { note: '確かめます。表1.6＋裏4.0＋茎0.6＝6.2cm³で、Aの値と一致します。Bは4.0＋0.6＝4.6、Cは1.6＋0.6＝2.2で、どちらも合っています。', add: m('1.6＋4.0＋0.6＝6.2cm³（A）', C.green, FILL.green) },
  { note: '❓気孔が多いのは、どちらでしょう。蒸散量は、裏側の4.0cm³が、表側の1.6cm³より多いので、気孔が多いのは裏側です。(3)の答えです。', add: m('(3) 蒸散量が多い裏側に気孔が多い', C.green, FILL.green) },
], '答え：(1) 1.6cm³ (2) 4.0cm³ (3) 裏側');

// k34 だ液のはたらき
const k34Base = (): DiagramElement[] => [
  bx(50, 40, 70, 70, 'デンプン\n＋だ液', C.main, FILL.warm, 11), bx(200, 40, 70, 70, 'デンプン\n＋水', C.gray, FILL.gray, 11),
  lb(85, 28, 'A', 12, C.main, 'middle', true), lb(235, 28, 'B', 12, C.gray, 'middle', true),
];
const f34 = show([
  { note: 'デンプン溶液に、Aはだ液を、Bは水を加えます。だ液のはたらきを調べる実験です。', add: [...k34Base(), ...m('A：だ液あり、B：水（対照）')] },
  { note: '約40℃の湯で10分間あたためます。だ液の消化酵素は、体温に近い約40℃でよくはたらきます。', add: [bx(40, 116, 90, 24, '約40℃の湯', C.red, FILL.red, 11), bx(190, 116, 90, 24, '約40℃の湯', C.red, FILL.red, 11), ...m('約40℃で10分あたためる', C.red, FILL.red)] },
  { note: '❓Aの中では、何が起こったでしょう。だ液にふくまれる消化酵素アミラーゼが、デンプンを麦芽糖などの糖に分解しました。', add: [cover(50, 40, 70, 70), bx(50, 40, 70, 70, 'デンプン\n→糖', C.purple, FILL.purple, 11), ...m('アミラーゼがデンプンを糖に分解', C.purple, FILL.purple)] },
  { note: '糖があるかどうかを調べるために、ベネジクト液を加えて加熱します。', add: [bx(100, 144, 120, 20, 'ベネジクト液を加えて加熱', C.blue, FILL.blue, 10), ...m('ベネジクト液を加えて加熱', C.blue, FILL.blue)] },
  { note: 'Aは、糖があるので、赤褐色の沈殿ができます。(答えは赤褐色の沈殿)', add: [cover(50, 40, 70, 70), bx(50, 40, 70, 70, '赤褐色の\n沈殿', C.red, '#FDBA74', 11), ...m('A：赤褐色の沈殿ができる', C.red, FILL.red)] },
  { note: '❓Bはどうでしょう。デンプンのままで糖ができていないので、ベネジクト液を加えて加熱しても、色は変わりません。', add: [cover(200, 40, 70, 70), bx(200, 40, 70, 70, '変化なし', C.gray, FILL.gray, 11), ...m('B：変化なし（だ液のはたらき）', C.gray, FILL.gray)] },
  { note: '確かめます。ヨウ素液を加えると、Bだけが青紫色になります。Aはデンプンが分解されて残っていないので、青紫色になりません。', add: m('ヨウ素液：Bだけ青紫（デンプン）', C.green, FILL.green) },
], '答え：赤褐色の沈殿ができる');

// k35 血液循環
const k35Base = (): DiagramElement[] => [
  bx(20, 60, 70, 50, '肺', C.blue, FILL.blue, 14), bx(125, 60, 70, 50, '心臓', C.red, FILL.red, 14), bx(230, 60, 70, 50, '全身', C.gray, FILL.gray, 14),
];
const f35 = show([
  { note: '血液は、心臓から肺と全身をめぐります。赤は酸素が多い血液（動脈血）、青は酸素が少ない血液（静脈血）を表します。', add: [...k35Base(), ...m('心臓・肺・全身を血液がめぐる')] },
  { note: '心臓から肺へ向かう血管は、肺動脈です。全身から帰ってきた、酸素の少ない血液（静脈血）が流れます。', add: [ar(125, 72, 92, 72, C.blue), lb(108, 62, '肺動脈', 9, C.blue, 'middle', true), ...m('心臓→肺：肺動脈（静脈血）', C.blue, FILL.blue)] },
  { note: '❓肺から心臓へもどる血管は何でしょう。心臓に向かう血管なので、静脈です。肺静脈といいます。(1)の答えです。', add: [ar(92, 98, 125, 98, C.red), lb(108, 110, '肺静脈', 9, C.red, 'middle', true), ...m('(1) 肺→心臓：肺静脈', C.red, FILL.red)] },
  { note: '❓この血液は、酸素が多いでしょうか。肺で酸素を受け取ったばかりなので、酸素が多い血液です。これを動脈血といいます。(2)の答えです。', add: m('(2) 酸素が多い血液＝動脈血', C.red, FILL.red) },
  { note: '血管の名前は、心臓から出るか、心臓に向かうかで決まります。心臓から全身へは大動脈（動脈血）、全身から心臓へは大静脈（静脈血）です。', add: [ar(195, 72, 228, 72, C.red), lb(212, 62, '大動脈', 9, C.red, 'middle', true), ar(228, 98, 195, 98, C.blue), lb(212, 110, '大静脈', 9, C.blue, 'middle', true), ...m('名前は向きで決まる', C.purple, FILL.purple)] },
  { note: '❓酸素を運ぶのは、血液の何でしょう。赤血球です。赤血球にふくまれるヘモグロビンが、酸素と結びついて運びます。(3)の答えです。', add: [ci(160, 140, 10, undefined, C.red, FILL.red), lb(180, 140, '赤血球', 11, C.red, 'start', true), ...m('(3) 酸素を運ぶ：赤血球', C.red, FILL.red)] },
  { note: '確かめます。肺動脈と肺静脈では、血液の種類が逆です。肺静脈は「静脈」でも、流れるのは動脈血です。', add: m('肺静脈は静脈でも動脈血', C.green, FILL.green) },
], '答え：(1) 肺静脈 (2) 動脈血 (3) 赤血球');

// k36 反射
const rf = (i: number): DiagramElement[] => {
  const w = 48;
  const x = 8 + i * (w + 16);
  const labels = ['皮ふ', '感覚\n神経', 'せきずい', '運動\n神経', '筋肉'];
  const els: DiagramElement[] = [];
  if (i > 0) els.push(ar(x - 15, 120, x - 1, 120, C.main));
  els.push(bx(x, 100, w, 40, labels[i], i === 2 ? C.red : C.main, i === 2 ? FILL.red : FILL.warm, 10));
  return els;
};
const f36 = show([
  { note: '熱いやかんに手がふれました。刺激を受け取るのは、皮ふです。', add: [...rf(0), ...m('熱い刺激を皮ふが受け取る')] },
  { note: '皮ふで受け取った刺激の信号は、感覚神経を通って、中枢（せきずい）へ伝わります。', add: [...rf(1), ...m('信号は感覚神経で中枢へ')] },
  { note: '❓手を引っこめる命令は、どこが出すのでしょう。反射では、脳ではなく、せきずいが命令を出します。(2)の答えです。', add: [...rf(2), ...m('(2) 命令を出す中枢＝せきずい', C.red, FILL.red)] },
  { note: 'せきずいが出した命令は、運動神経を通って、筋肉へ伝わります。', add: [...rf(3), ...m('命令は運動神経で筋肉へ')] },
  { note: '筋肉が縮んで、手を引っこめます。意識とは関係なく起こる、この反応が反射です。(1)の答えです。', add: [...rf(4), lb(8, 80, '(1) 反射', 12, C.red, 'start', true), ...m('皮ふ→感覚→せきずい→運動→筋肉', C.main, FILL.warm)] },
  { note: '同時に、せきずいから脳へも信号が伝わるので、手を引っこめたあとで「熱い」と感じます。', add: [bx(120, 24, 80, 28, '脳', C.purple, FILL.purple, 12), ar(160, 98, 160, 54, C.purple, true), ...m('脳には同時に伝わる→あとで「熱い」', C.purple, FILL.purple)] },
  { note: '❓なぜ反射は、すばやいのでしょう。脳で判断せず、せきずいが命令を出すので、短い道のりですむからです。体を危険から守ります。', add: m('脳を通らない→すばやく体を守る', C.green, FILL.green) },
], '答え：(1) 反射 (2) せきずい (3) 皮ふ→感覚神経→せきずい→運動神経→筋肉');

// k37 染色体の数
const f37 = show([
  { note: 'ある動物の体細胞には、染色体が14本あります。母親の体細胞と、父親の体細胞です。', add: [bx(10, 20, 78, 30, '母の体細胞\n14本', C.main, FILL.warm, 10), bx(10, 80, 78, 30, '父の体細胞\n14本', C.blue, FILL.blue, 10), ...m('体細胞の染色体は14本')] },
  { note: '❓卵や精子ができるとき、染色体はどうなるでしょう。減数分裂が起こり、染色体の数が半分になります。', add: [ar(88, 35, 125, 35, C.purple), ar(88, 95, 125, 95, C.purple), lb(106, 65, '減数分裂', 9, C.purple, 'middle', true), bx(125, 20, 60, 30, '卵', C.main, FILL.warm, 12), bx(125, 80, 60, 30, '精子', C.blue, FILL.blue, 12), ...m('減数分裂で染色体が半分になる', C.purple, FILL.purple)] },
  { note: '卵の染色体は、14÷2＝7本です。精子も7本です。(1)の答えです。', add: [cover(125, 20, 60, 30), bx(125, 20, 60, 30, '卵 7本', C.red, FILL.red, 11), cover(125, 80, 60, 30), bx(125, 80, 60, 30, '精子 7本', C.red, FILL.red, 11), ...m('(1) 卵＝14÷2＝7本', C.red, FILL.red)] },
  { note: '受精すると、卵の染色体と精子の染色体が合わさって、受精卵になります。', add: [ar(185, 35, 235, 58, C.green), ar(185, 95, 235, 78, C.green), bx(235, 50, 75, 34, '受精卵', C.green, FILL.green, 11), ...m('卵7本＋精子7本', C.green, FILL.green)] },
  { note: '7＋7＝14本。受精卵の染色体は14本で、体細胞と同じ数にもどります。(2)の答えです。', add: [cover(235, 50, 75, 34), bx(235, 50, 75, 34, '受精卵\n14本', C.red, FILL.red, 11), ...m('(2) 受精卵＝7＋7＝14本', C.red, FILL.red)] },
  { note: '❓もし減数分裂がなかったら、どうなるでしょう。卵も精子も14本で、受精卵は28本になります。世代ごとに倍になってしまうので、数が一定に保てません。', add: m('なければ受精のたびに2倍になる', C.gray, FILL.gray) },
  { note: '染色体の数が半分になる、この特別な細胞分裂が、減数分裂です。(3)の答えです。', add: m('(3) 減数分裂', C.green, FILL.green) },
], '答え：(1) 7本 (2) 14本 (3) 減数分裂');

// k38 遺伝の組み合わせ
const grid = (colH: [string, string], rowH: [string, string], cells: [string, string, string, string], hi?: number[]): DiagramElement[] => {
  const els: DiagramElement[] = [
    bx(130, 30, 50, 24, colH[0], C.gray, FILL.gray, 12), bx(180, 30, 50, 24, colH[1], C.gray, FILL.gray, 12),
    bx(80, 54, 50, 24, rowH[0], C.gray, FILL.gray, 12), bx(80, 78, 50, 24, rowH[1], C.gray, FILL.gray, 12),
  ];
  const pos: [number, number][] = [[130, 54], [180, 54], [130, 78], [180, 78]];
  cells.forEach((t, i) => {
    const on = hi?.includes(i);
    els.push(bx(pos[i][0], pos[i][1], 50, 24, t, on ? C.red : C.main, on ? FILL.red : FILL.warm, 12));
  });
  return els;
};
const f38 = show([
  { note: '赤花Rrに、白花rrを交配します。Rが赤（優性）、rが白です。白花の遺伝子の組み合わせは、rrしかありません。', add: [bx(20, 40, 80, 30, 'Rr（赤）', C.red, FILL.red, 12), lb(130, 56, '×', 16, C.ink, 'middle', true), bx(160, 40, 80, 30, 'rr（白）', C.gray, FILL.gray, 12), ...m('Rr（赤）×rr（白）')] },
  { note: '❓子の組み合わせは、どう調べるのでしょう。親がつくる生殖細胞の遺伝子を表の縦と横に書いて、組み合わせます。Rrの生殖細胞はRとr、rrの生殖細胞はrだけです。', add: fresh(...grid(['r', 'r'], ['R', 'r'], ['Rr', 'Rr', 'rr', 'rr']), ...m('(1) Rr：rr＝2：2＝1：1（赤：白＝1：1）', C.main, FILL.warm)) },
  { note: '子は、Rr（赤）が2つ、rr（白）が2つです。赤：白＝1：1。(1)の答えです。', add: [...grid(['r', 'r'], ['R', 'r'], ['Rr', 'Rr', 'rr', 'rr'], [2, 3]), ...m('赤2：白2＝1：1', C.red, FILL.red)] },
  { note: '次に、Rrの赤花を自家受粉させます。Rrの生殖細胞はRとrなので、縦も横もR、rです。', add: fresh(...grid(['R', 'r'], ['R', 'r'], ['RR', 'Rr', 'Rr', 'rr']), ...m('Rr×Rr：RR：Rr：rr＝1：2：1')) },
  { note: '白花は、rrの1つだけで、全体の1/4です。1600個の1/4＝400個。(2)の答えです。', add: [...grid(['R', 'r'], ['R', 'r'], ['RR', 'Rr', 'Rr', 'rr'], [3]), ...m('(2) 1600×1/4＝400個', C.red, FILL.red)] },
  { note: '❓赤花のうち、RRはどれだけでしょう。赤花は、RR、Rr、Rrの3つ分です。「赤花のうち」と聞かれたら、この3つを全体にします。RRは、そのうちの1つです。', add: [...grid(['R', 'r'], ['R', 'r'], ['RR', 'Rr', 'Rr', 'rr'], [0, 1, 2]), ...m('赤は3つ分、RRは1つ', C.purple, FILL.purple)] },
  { note: '1/3は、約33%。(3)の答えです。確かめると、赤花は1600−400＝1200個、RRは1600×1/4＝400個で、400÷1200＝1/3です。', add: m('(3) 1/3＝約33%', C.green, FILL.green) },
], '答え：(1) 赤：白＝1：1 (2) 約400個 (3) 約33%');

// k39 炭素の循環
const k39Base = (): DiagramElement[] => [
  bx(20, 10, 280, 26, '大気中の二酸化炭素', C.blue, FILL.blue, 12),
  bx(20, 90, 80, 34, '植物\n（生産者）', C.green, FILL.green, 10), bx(120, 90, 80, 34, '動物\n（消費者）', C.main, FILL.warm, 10), bx(220, 90, 80, 34, '菌類・細菌類\n（分解者）', C.purple, FILL.purple, 10),
];
const f39 = show([
  { note: '生態系の中で、炭素は、二酸化炭素や有機物の形で、大気と生物のあいだを移動します。', add: [...k39Base(), ...m('炭素は大気と生物をめぐる')] },
  { note: '❓大気中の二酸化炭素は、どうやって生物に入るのでしょう。植物が、光合成で二酸化炭素を取りこみ、有機物をつくります。(1)の答えです。', add: [ar(36, 38, 36, 88, C.green), lb(33, 62, '光合成', 9, C.green, 'end', true), ...m('(1) 二酸化炭素を取りこむ＝光合成', C.green, FILL.green)] },
  { note: '植物がつくった有機物は、動物に食べられて移ります。動物の死がいやふんは、分解者に移ります。', add: [ar(100, 107, 120, 107, C.main), lb(110, 136, '食べられる', 9, C.main, 'middle', true), ar(200, 107, 220, 107, C.main), lb(210, 150, '死がい・ふん', 9, C.main, 'middle', true), ...m('有機物は食べられて移る', C.main, FILL.warm)] },
  { note: '❓二酸化炭素は、大気にもどるのでしょうか。生産者・消費者・分解者のすべてが、呼吸で有機物を分解して、二酸化炭素を出します。(2)の答えです。', add: [ar(84, 88, 84, 38, C.red), lb(90, 62, '呼吸', 9, C.red, 'start', true), ar(160, 88, 160, 38, C.red), lb(166, 62, '呼吸', 9, C.red, 'start', true), ar(260, 88, 260, 38, C.red), lb(266, 62, '呼吸', 9, C.red, 'start', true), ...m('(2) 全員が呼吸でCO₂を出す', C.red, FILL.red)] },
  { note: '❓死がいやふんは、どうなるのでしょう。分解者が、有機物を二酸化炭素や水などの無機物に分解します。', add: [bx(216, 86, 88, 42, undefined, C.purple, 'none'), ...m('死がい・ふんを分解する＝分解者', C.purple, FILL.purple)] },
  { note: 'シイタケやアオカビは、菌類です。ほかに、大腸菌のような細菌類も分解者です。(3)の答えです。', add: m('(3) シイタケ・アオカビ＝菌類', C.green, FILL.green) },
  { note: '確かめます。炭素は、「二酸化炭素→光合成→有機物→食べられる→呼吸→二酸化炭素」と、ぐるぐる循環しています。', add: m('光合成と呼吸で炭素が循環', C.green, FILL.green) },
], '答え：(1) 光合成 (2) 呼吸 (3) 菌類');

// k40 顕微鏡
const f40 = show([
  { note: '接眼レンズ10倍、対物レンズ10倍の顕微鏡で観察すると、視野の直径は1.6mmでした。視野の右上に細胞が見えます。', add: [ci(80, 85, 55, undefined, C.gray, FILL.gray), ci(105, 60, 7, undefined, C.purple, FILL.purple), lb(80, 12, '視野 1.6mm', 11, C.gray, 'middle', true), ...m('接眼10×対物10の視野')] },
  { note: '顕微鏡の倍率は、接眼レンズの倍率×対物レンズの倍率です。10×10＝100倍。(1)の答えです。', add: m('(1) 倍率＝10×10＝100倍', C.red, FILL.red) },
  { note: '❓対物レンズを40倍にすると、視野はどうなるでしょう。倍率は10×40＝400倍。100倍の4倍です。倍率が上がると、見える範囲はせまくなります。', add: [ci(240, 85, 14, undefined, C.red, FILL.red), lb(240, 60, '400倍', 11, C.red, 'middle', true), ...m('倍率が4倍→見える範囲は小さい', C.red, FILL.red)] },
  { note: '視野の直径は、倍率に反比例して1/4になります。1.6÷4＝0.4mm。(2)の答えです。', add: [lb(240, 112, '0.4mm', 11, C.red, 'middle', true), ...m('(2) 視野＝1.6÷4＝0.4mm', C.red, FILL.red)] },
  { note: '次に、右上の細胞を、視野の中央に動かしたいとします。中央は、左下の向きです。', add: [ar(105, 60, 84, 81, C.red), ...m('右上の像を、中央（左下）へ', C.purple, FILL.purple)] },
  { note: '❓プレパラートは、どちらへ動かすのでしょう。顕微鏡では上下左右が逆に見えるので、プレパラートを動かすと、像は反対向きに動きます。だから、像のある右上へ動かします。(3)の答えです。', add: [bx(130, 138, 70, 24, 'プレパラート', C.blue, FILL.blue, 10), ar(202, 150, 258, 132, C.blue), lb(262, 152, '右上へ動かす', 10, C.blue, 'middle', true), ...m('(3) プレパラートは右上へ', C.blue, FILL.blue)] },
  { note: '確かめます。プレパラートを右上へ動かすと、像は反対の左下へ動いて、視野の中央に来ます。', add: m('像は逆に動く→中央に来る', C.green, FILL.green) },
], '答え：(1) 100倍 (2) 0.4mm (3) 右上');

// ═════════ 地学 ═════════

// k41 湿度と水滴
const f41 = show([
  { note: '気温25℃、湿度70%の空気1m³を考えます。飽和水蒸気量は、25℃で23.1g/m³、10℃で9.4g/m³です。1gを8pxで表します。', add: [lb(32, 42, '25℃', 11, C.ink, 'middle', true), bx(60, 30, 185, 24, undefined, C.blue, FILL.gray), lb(152, 64, '飽和水蒸気量 23.1g', 10, C.blue, 'middle', true), ...m('25℃の飽和水蒸気量＝23.1g/m³')] },
  { note: '❓空気1m³にふくまれる水蒸気は、何gでしょう。湿度は、飽和水蒸気量に対する割合です。23.1×0.7＝16.17gです。小数第1位まで求めると約16.2g。(1)の答えです。', add: [bx(60, 30, 129, 24, '16.17g', C.blue, FILL.blue, 11), ...m('(1) 23.1×0.7＝16.17→約16.2g', C.blue, FILL.blue)] },
  { note: '次に、この空気を10℃まで冷やします。10℃の飽和水蒸気量は9.4gです。この空気が、水蒸気のままでいられるのは、9.4gまでです。', add: [lb(32, 92, '10℃', 11, C.ink, 'middle', true), bx(60, 80, 75, 24, '入る分 9.4g', C.green, FILL.green, 10), ...m('10℃では9.4gまでしか入らない', C.green, FILL.green)] },
  { note: '❓ふくんでいる水蒸気は何gでしょう。冷やす前と同じ16.17gです。9.4gを超えた分が、入りきらずに水滴になります。', add: [bx(135, 80, 54, 24, '水滴', C.blue, FILL.blue, 11), ...m('16.17gのうち、9.4gを超えた分が水滴', C.blue, FILL.blue)] },
  { note: '水滴になる量は、16.17−9.4＝6.77g。小数第1位まで求めると約6.8g。(2)の答えです。', add: [bx(135, 80, 54, 24, '6.77g', C.red, FILL.red, 11), ...m('(2) 16.17−9.4＝6.77→約6.8g', C.red, FILL.red)] },
  { note: '❓25℃の飽和水蒸気量23.1gから、9.4gを引いてよいでしょうか。いけません。冷やす前の空気がふくんでいるのは、飽和の70％の16.17gだからです。', add: m('引くのは23.1gではなく16.17g', C.purple, FILL.purple) },
  { note: '確かめます。冷やしたあとの空気は、入る分9.4gと水滴6.77gで、合計16.17g。冷やす前の水蒸気の量と一致します。', add: m('9.4＋6.77＝16.17g で一致', C.green, FILL.green) },
], '答え：(1) 約16.2g (2) 約6.8g');

// k42 寒冷前線の通過
const k42Box = (i: number, t: string, c: string = C.main, f: string = FILL.warm): DiagramElement =>
  bx(10 + i * 105, 30, 90, 80, t, c, f, 11);
const f42 = show([
  { note: '3つの時刻の観測結果です。9時は21℃・南東の風・くもり、12時は22℃・南の風・くもり、15時は15℃・北西の風・強い雨です。', add: [k42Box(0, '9時\n21℃\n南東\nくもり'), k42Box(1, '12時\n22℃\n南\nくもり'), k42Box(2, '15時\n15℃\n北西\n強い雨'), ...m('9時・12時・15時の観測')] },
  { note: '9時から12時は、気温が21℃から22℃へほとんど変わらず、風向も南東から南です。どちらも暖かい空気の中にいます。', add: [ar(100, 70, 114, 70, C.green), ...m('9→12時：変化は小さい（暖気の中）', C.green, FILL.green)] },
  { note: '❓12時から15時は、どうでしょう。気温が22℃から15℃へ7℃も下がり、風向は南から北西へ急に変わって、強い雨になりました。大きな変化が起こっています。', add: [ar(205, 70, 219, 70, C.red), ...m('12→15時：気温−7℃・風向が急変', C.red, FILL.red)] },
  { note: '❓寒冷前線は、どんな前線でしょう。冷たい空気（寒気）が、暖かい空気（暖気）の下にもぐりこみ、暖気を急に押し上げる前線です。', add: fresh(pg([[100, 150], [290, 150], [290, 100]], C.blue, FILL.blue), lb(272, 142, '寒気', 12, C.blue, 'middle', true), lb(60, 110, '暖気', 12, C.red, 'middle', true), ar(260, 120, 200, 140, C.blue), ...m('寒気が暖気の下にもぐりこむ', C.blue, FILL.blue)) },
  { note: '暖気が急に押し上げられるので、積乱雲が発達し、強い雨が短時間降ります。', add: [ci(130, 55, 24, '積乱雲', C.gray, FILL.gray, 10), ln(120, 80, 114, 104, C.blue, false, 2), ln(132, 80, 126, 104, C.blue, false, 2), ln(144, 80, 138, 104, C.blue, false, 2), ...m('積乱雲→強い雨', C.blue, FILL.blue)] },
  { note: '前線が通りすぎると、冷たい空気にすっぽり入ります。気温は急に下がり、風向は南寄りから北寄りに急に変わります。', add: m('通過後：気温が急に下がる・風は北寄り', C.purple, FILL.purple) },
  { note: '12時の気温はまだ22℃で暖気の中、15時には15℃で寒気の中です。したがって、通過したのは、12時から15時のあいだです。', add: m('答え：12時から15時のあいだ', C.green, FILL.green) },
], '答え：12時から15時のあいだ');

// k43 高気圧と等圧線
const f43 = show([
  { note: '高気圧は、まわりより気圧が高いところです。天気図では、Hと書かれます。', add: [ci(160, 70, 24, 'H', C.red, FILL.red, 20), ...m('高気圧：まわりより気圧が高い')] },
  { note: '❓高気圧の中心付近で、空気はどう動くのでしょう。断面で見ると、上から下へ向かう空気の流れ（下降気流）があります。(1)の答えです。', add: fresh(ln(20, 130, 300, 130, C.gray, false, 4), ar(120, 40, 120, 112, C.blue), ar(160, 40, 160, 112, C.blue), ar(200, 40, 200, 112, C.blue), lb(160, 22, '高気圧（H）', 11, C.red, 'middle', true), ...m('(1) 中心付近は下降気流', C.blue, FILL.blue)) },
  { note: '下りてきた空気は、地面にそって、中心から外側へ吹き出します。', add: [ar(110, 122, 50, 122, C.blue), ar(210, 122, 270, 122, C.blue), ...m('地上では外側へ吹き出す', C.blue, FILL.blue)] },
  { note: '❓天気はどうなるでしょう。空気が下降すると、雲ができにくくなります。そのため、晴れやすくなります。(2)の答えです。', add: [ci(262, 50, 14, '晴', C.main, FILL.yellow, 12), ...m('(2) 雲ができにくい→晴れやすい', C.main, FILL.yellow)] },
  { note: '次に、等圧線の間隔と風を見ます。風は、気圧の高いところから低いところへ吹き、気圧の差が大きいほど強く吹きます。', add: fresh(ln(30, 30, 30, 100, C.gray), ln(45, 30, 45, 100, C.gray), ln(60, 30, 60, 100, C.gray), ln(75, 30, 75, 100, C.gray), ln(160, 30, 160, 100, C.gray), ln(200, 30, 200, 100, C.gray), ln(240, 30, 240, 100, C.gray), ln(280, 30, 280, 100, C.gray), lb(52, 18, '間隔がせまい', 10, C.red, 'middle', true), lb(220, 18, '間隔が広い', 10, C.blue, 'middle', true), ...m('等圧線の間隔と風の強さ', C.purple, FILL.purple)) },
  { note: '❓どちらの風が強いでしょう。間隔がせまいところは、短い距離で気圧が大きく変わるので、風が強くなります。(3)の答えです。', add: [ar(25, 125, 95, 125, C.red), ar(180, 125, 215, 125, C.blue), ...m('(3) 間隔がせまい→風が強い', C.red, FILL.red)] },
  { note: '確かめます。低気圧は逆で、中心に空気が集まって上昇気流が起こり、雲ができやすく、くもりや雨になりやすくなります。高気圧と低気圧で、天気が逆になっています。', add: m('高気圧＝下降＝晴れ、低気圧＝上昇＝雨', C.green, FILL.green) },
], '答え：(1) 下降気流 (2) 晴れやすい (3) 強くなる');

// k44 冬の日本海側の雪
const k44Base = (): DiagramElement[] => [
  bx(10, 120, 100, 30, '日本海', C.blue, FILL.blue, 12), pg([[130, 120], [180, 55], [230, 120]], C.gray, FILL.gray),
  bx(250, 120, 60, 30, '太平洋', C.blue, FILL.blue, 12),
];
const f44 = show([
  { note: '冬の日本列島を、断面で見ます。左が日本海側、中央が山地、右が太平洋側です。', add: [...k44Base(), ...m('冬の日本列島（断面）')] },
  { note: '冬は、シベリア気団から、冷たく乾いた北西の季節風が吹いてきます。', add: [ar(20, 70, 110, 70, C.blue), lb(65, 56, '冷たく乾いた風', 10, C.blue, 'middle', true), ...m('シベリア気団から北西の季節風', C.blue, FILL.blue)] },
  { note: '❓なぜ乾いた風が、雪を降らせるのでしょう。風は、あたたかい日本海の上をわたるあいだに、海から蒸発する水蒸気をたくさん取りこみます。', add: [ar(40, 118, 40, 92, C.green), ar(70, 118, 70, 92, C.green), ar(100, 118, 100, 92, C.green), lb(70, 80, '水蒸気', 9, C.green, 'middle', true), ...m('日本海で水蒸気をふくむ', C.green, FILL.green)] },
  { note: '水蒸気をふくんだ湿った空気は、山地にぶつかって、斜面をのぼります。上昇すると、冷えて雲ができます。', add: [ar(122, 100, 160, 66, C.purple), ci(180, 40, 18, '雲', C.gray, FILL.gray, 11), ...m('山にぶつかり上昇→冷えて雲', C.purple, FILL.purple)] },
  { note: '雲から、日本海側に雪が降ります。', add: [ci(142, 82, 2.5, undefined, C.blue, C.blue), ci(130, 90, 2.5, undefined, C.blue, C.blue), ci(150, 96, 2.5, undefined, C.blue, C.blue), ci(138, 104, 2.5, undefined, C.blue, C.blue), lb(120, 78, '雪', 12, C.blue, 'middle', true), ...m('日本海側に雪が降る', C.blue, FILL.blue)] },
  { note: '❓山をこえると、どうなるでしょう。水分を失った乾いた風が吹きおりるので、太平洋側は、乾燥した晴れの日が多くなります。', add: [ar(215, 80, 255, 105, C.main), lb(268, 92, '乾いた風', 10, C.main, 'middle', true), ...m('太平洋側は乾燥した晴れ', C.main, FILL.warm)] },
  { note: 'まとめます。冷たい風が、日本海で水蒸気をふくみ、山地で上昇して雲をつくるため、日本海側に雪が降ります。', add: m('答え：水蒸気をふくみ山で上昇して雲', C.green, FILL.green) },
], '答え：シベリアからの冷たく乾いた空気が日本海で水蒸気をふくみ、山地で上昇して雲をつくるから');

// k45 星の動き
const f45 = show([
  { note: '北半球で、北の空の星を観察します。北極星はほとんど動かず、ほかの星は北極星を中心に回って見えます。', add: [ci(160, 85, 55, undefined, C.gray, 'none'), ci(160, 85, 3, undefined, C.main, C.main), lb(160, 98, '北極星', 10, C.main, 'middle', true), ci(150.5, 30.8, 4, undefined, C.blue, FILL.yellow), ...m('北の空の星は北極星を中心に回る')] },
  { note: '❓星は、1時間にどれだけ動くのでしょう。地球は24時間で1回転（360°）自転しているので、360÷24＝15°。星は1時間に15°ずつ動いて見えます。', add: m('地球の自転：360°÷24時間＝15°', C.purple, FILL.purple) },
  { note: '4時間では、15×4＝60°動きます。(1)の答えです。', add: [sc(160, 85, 55, 100, 160, C.blue, 'rgba(14,165,233,0.15)'), ci(108.3, 66.2, 4, undefined, C.blue, FILL.yellow), lb(82, 56, '4時間後', 10, C.blue, 'middle', true), ...m('(1) 15°×4＝60°', C.blue, FILL.blue)] },
  { note: '❓どちら回りでしょう。星は、矢印の向きに、反時計回りに動いて見えます。(2)の答えです。', add: [ar(146, 33, 122, 42, C.red), ...m('(2) 反時計回り', C.red, FILL.red)] },
  { note: '次に、東の空です。東の空にのぼる星は、時間がたつと、右上に向かって動いて見えます。(3)の答えです。', add: fresh(ln(20, 140, 300, 140, C.gray, false, 3), ci(60, 130, 4, undefined, C.blue, FILL.yellow), ar(66, 124, 140, 70, C.blue), lb(40, 152, '東', 12, C.ink, 'middle', true), lb(280, 152, '西', 12, C.ink, 'middle', true), ...m('(3) 東の空：右上へ動く', C.blue, FILL.blue)) },
  { note: '❓星そのものが動いているのでしょうか。いいえ。地球が西から東へ自転しているので、星が東から西へ動くように見えるのです。見かけの動きです。', add: fresh(ci(160, 80, 32, '地球', C.green, FILL.green, 12), ar(205, 100, 205, 60, C.red), lb(214, 80, '北極の上から\n見て反時計回り', 9, C.red, 'start', true), ...m('地球の自転による見かけの動き', C.green, FILL.green)) },
  { note: '確かめます。24時間で、15×24＝360°。ちょうど1周して、もとの位置にもどります。', add: m('15×24＝360°（1周）で一致', C.green, FILL.green) },
], '答え：(1) 60度 (2) 反時計回り (3) 右上');

// k46 金星
const f46 = show([
  { note: '太陽のまわりを、地球と金星が回っています。金星の軌道は、地球の軌道の内側にあります。', add: [ci(160, 80, 68, undefined, C.gray, 'none'), ci(160, 80, 38, undefined, C.gray, 'none'), ci(160, 80, 12, '太陽', C.red, FILL.yellow, 9), ci(160, 148, 8, '地', C.green, FILL.green, 9), ...m('金星は地球より内側を公転')] },
  { note: '❓真夜中に見える方向は、どちらでしょう。真夜中は、地球から見て、太陽と反対側（下向き）の方向です。', add: [ar(160, 158, 160, 166, C.purple), lb(208, 160, '真夜中の方向', 9, C.purple, 'middle', true), ...m('真夜中は太陽と反対の方向', C.purple, FILL.purple)] },
  { note: '❓金星は、その方向に来るでしょうか。金星の軌道は、地球の内側にあります。地球から見ると、太陽から大きく離れた方向に来ることはありません。', add: [ln(164.5, 141.4, 191.5, 101.2, C.gray, true), ln(155.5, 141.4, 128.5, 101.2, C.gray, true), ci(191.5, 101.2, 5, undefined, C.red, FILL.red), ci(128.5, 101.2, 5, undefined, C.red, FILL.red), ...m('金星は太陽の近くの方向にしか見えない', C.red, FILL.red)] },
  { note: '見えるのは、太陽が沈んだあとの夕方の西の空か、太陽がのぼる前の明け方の東の空だけです。真夜中には見えません。これが正しい選択肢です。', add: m('夕方の西か、明け方の東だけ', C.green, FILL.green) },
  { note: '❓金星が地球に近いとき、どう見えるでしょう。地球に近いと、金星は大きく見えますが、太陽の光が当たった面の一部しか見えないので、三日月形に欠けて見えます。', add: [ci(160, 118, 6, undefined, C.red, FILL.red), bx(240, 30, 70, 50, '三日月形\n大きい', C.red, FILL.red, 10), ...m('近い→欠けて大きく見える', C.red, FILL.red)] },
  { note: '反対に、地球から遠いときは、ほぼ丸く見えますが、遠いので小さく見えます。「三日月のときは遠くて小さい」は誤りです。', add: [ci(160, 42, 6, undefined, C.blue, FILL.blue), bx(240, 95, 70, 50, '丸い\n小さい', C.blue, FILL.blue, 10), ...m('遠い→丸くて小さく見える', C.blue, FILL.blue)] },
  { note: '確かめます。外側を公転する惑星（火星など）なら、真夜中にも見えます。金星は内側を公転しているので、真夜中には見えません。', add: m('答え：内側を公転→真夜中は見えない', C.green, FILL.green) },
], '答え：地球より内側を公転しているので、真夜中には見えない');

// k47 地層の傾き
const f47 = show([
  { note: 'A・B・Cの3地点です。AはCの真西、BはAとCを結ぶ線の真南にあります。', add: [ci(70, 60, 5, undefined, C.red, C.red), ci(230, 60, 5, undefined, C.red, C.red), ci(150, 115, 5, undefined, C.red, C.red), lb(70, 46, 'A（西）', 11, C.ink, 'middle', true), lb(230, 46, 'C（東）', 11, C.ink, 'middle', true), lb(150, 130, 'B（南）', 11, C.ink, 'middle', true), ...m('AとCは東西、Bはその真南')] },
  { note: '地表の標高と、火山灰の層の上面の深さは、Aが120mと10m、Bが130mと30m、Cが115mと5mです。', add: [lb(70, 28, '地表120m 深さ10m', 9, C.gray, 'middle', true), lb(230, 28, '地表115m 深さ5m', 9, C.gray, 'middle', true), lb(150, 146, '地表130m 深さ30m', 9, C.gray, 'middle', true), ...m('地表の標高−深さ＝層の標高', C.blue, FILL.blue)] },
  { note: 'A地点の火山灰の層の上面は、120−10＝110mです。', add: [lb(70, 76, '110m', 11, C.red, 'middle', true), ...m('A：120−10＝110m', C.red, FILL.red)] },
  { note: '❓B地点は、何mでしょう。地表は130mで高いのですが、層は30m下にあります。130−30＝100m。(1)の答えです。', add: [lb(150, 100, '100m', 11, C.red, 'middle', true), ...m('(1) B：130−30＝100m', C.red, FILL.red)] },
  { note: 'C地点は、115−5＝110mです。', add: [lb(230, 76, '110m', 11, C.red, 'middle', true), ...m('C：115−5＝110m', C.red, FILL.red)] },
  { note: '❓どちらへ傾いているでしょう。AとCは、どちらも110mで同じ高さです。東西には傾いていません。Bは100mで低く、Bは南にあるので、地層は南に向かって低くなっています。(2)の答えです。', add: [ln(70, 60, 230, 60, C.red, true), ar(120, 66, 120, 100, C.green), lb(128, 84, '低くなる', 10, C.green, 'start', true), ...m('(2) 同じ高さの線の南が低い→南', C.green, FILL.green)] },
  { note: '火山灰の層は、短い期間に広い範囲に降り積もるので、離れた地層を比べる手がかりになります。このような層を鍵層といいます。(3)の答えです。', add: m('(3) 離れた地層を比べる層＝鍵層', C.purple, FILL.purple) },
], '答え：(1) 100m (2) 南 (3) 鍵層');

// k48 火山の形とマグマ
const f48 = show([
  { note: '2つの火山です。左は傾斜がゆるやかなマウナロアのような火山、右は盛り上がった形の火山です。', add: [pg([[10, 140], [40, 118], [80, 106], [120, 118], [150, 140]], C.gray, FILL.gray), pg([[190, 140], [200, 95], [220, 68], [240, 60], [260, 68], [280, 95], [290, 140]], C.gray, FILL.gray), lb(80, 154, 'ゆるやかな形', 10, C.ink, 'middle', true), lb(240, 154, '盛り上がった形', 10, C.ink, 'middle', true), ...m('傾斜がゆるやか／盛り上がった形')] },
  { note: '❓ゆるやかな形は、どうやってできるのでしょう。溶岩が、さらさらと遠くまで流れ広がると、横に広いゆるやかな形になります。', add: [ar(85, 108, 135, 130, C.red), ar(75, 108, 25, 130, C.red), ...m('溶岩が遠くまで流れる→ゆるやか', C.red, FILL.red)] },
  { note: '溶岩がよく流れるのは、マグマのねばりけが弱いからです。(1)の答えは、弱い、です。', add: m('(1) マグマのねばりけは弱い', C.red, FILL.red) },
  { note: '❓その岩石の色は、何色でしょう。ねばりけが弱いマグマには、黒っぽい鉱物（有色鉱物）が多くふくまれます。冷えると、黒っぽい火山岩の玄武岩になります。(2)の答えです。', add: [bx(15, 18, 130, 26, '黒っぽい（玄武岩）', C.ink, FILL.gray, 11), ...m('(2) 黒っぽい火山岩', C.ink, FILL.gray)] },
  { note: '反対に、ねばりけが強いマグマは、溶岩が流れにくく、火口のまわりで盛り上がります。白っぽい岩石（流紋岩など）になります。', add: [ar(240, 62, 250, 66, C.blue), bx(175, 18, 130, 26, '白っぽい（流紋岩など）', C.blue, FILL.blue, 10), ...m('強い→盛り上がる→白っぽい', C.blue, FILL.blue)] },
  { note: '2つを対比します。ねばりけが弱いと、ゆるやかな形で、黒っぽい。ねばりけが強いと、盛り上がった形で、白っぽい。', add: m('弱い＝ゆるやか＝黒っぽい', C.green, FILL.green) },
  { note: '確かめます。ゆるやかな形のマウナロアは、ねばりけが弱く、黒っぽい玄武岩でできています。', add: m('答え：(1) 弱い (2) 黒っぽい', C.green, FILL.green) },
], '答え：(1) 弱い (2) 黒っぽい');

// k49 地震波
const f49 = show([
  { note: 'ある地点で、初期微動（P波）が10時0分12秒、主要動（S波）が10時0分21秒に始まりました。P波は7km/s、S波は4km/sです。横軸は時間（1秒＝12px）です。', add: [ln(20, 70, 290, 70, C.ink, false, 2), ci(20, 70, 4, undefined, C.gray, FILL.gray), ci(164, 70, 4, undefined, C.blue, C.blue), ci(272, 70, 4, undefined, C.red, C.red), lb(20, 56, '発生？', 10, C.gray, 'start', true), lb(164, 56, 'P波 12秒', 10, C.blue, 'middle', true), lb(272, 56, 'S波 21秒', 10, C.red, 'middle', true), ...m('初期微動12秒・主要動21秒（0分○秒）')] },
  { note: '初期微動が始まってから、主要動が始まるまでの時間が、初期微動継続時間です。21−12＝9秒。(1)の答えです。', add: [ar(164, 95, 272, 95, C.red), lb(218, 108, '9秒', 11, C.red, 'middle', true), ...m('(1) 21−12＝9秒', C.red, FILL.red)] },
  { note: '❓なぜ、継続時間から距離がわかるのでしょう。1km進むのに、P波は1/7秒、S波は1/4秒かかります。1kmあたりの時間の差は、1/4−1/7＝3/28秒で、距離に比例して広がります。', add: m('1kmあたりの差：1/4−1/7＝3/28秒', C.purple, FILL.purple) },
  { note: '9秒が、1kmあたり3/28秒の何倍かを求めます。9÷（3/28）＝9×28÷3＝84km。(2)の答えです。', add: m('(2) 震源距離＝9÷(3/28)＝84km', C.red, FILL.red) },
  { note: '❓発生時刻は、どう求めるのでしょう。P波が84km進むのにかかった時間を、P波の到着時刻からさかのぼります。84÷7＝12秒です。', add: [ar(20, 125, 164, 125, C.blue), lb(92, 140, '84÷7＝12秒', 10, C.blue, 'middle', true), ...m('P波が届くまで 84÷7＝12秒', C.blue, FILL.blue)] },
  { note: 'P波の到着は10時0分12秒。そこから12秒さかのぼると、10時0分0秒です。(3)の答えです。', add: [cover(10, 48, 70, 16), lb(20, 56, '10時0分0秒', 10, C.green, 'start', true), ...m('(3) 12秒−12秒＝0秒→10時0分0秒', C.green, FILL.green)] },
  { note: '確かめます。S波は、84÷4＝21秒で届くので、10時0分0秒＋21秒＝10時0分21秒。観測した主要動の始まりと一致します。', add: m('0秒＋21秒＝21秒（S波の観測）', C.green, FILL.green) },
], '答え：(1) 9秒 (2) 84km (3) 10時0分0秒');

// k50 月の満ち欠け
const crescent = (cx: number, cy: number, r: number, k: number): DiagramElement => {
  const pts: [number, number][] = [];
  for (let a = -90; a <= 90; a += 15) pts.push([Math.round((cx + r * Math.cos((a * Math.PI) / 180)) * 10) / 10, Math.round((cy - r * Math.sin((a * Math.PI) / 180)) * 10) / 10]);
  for (let a = 90; a >= -90; a -= 15) pts.push([Math.round((cx + k * Math.cos((a * Math.PI) / 180)) * 10) / 10, Math.round((cy - r * Math.sin((a * Math.PI) / 180)) * 10) / 10]);
  return pg(pts, C.main, FILL.yellow);
};
const k50Base = (): DiagramElement[] => [
  ci(160, 85, 55, undefined, C.gray, 'none'), ci(160, 85, 12, '地球', C.green, FILL.green, 8),
  ar(310, 60, 285, 60, C.main), ar(310, 85, 285, 85, C.main), ar(310, 110, 285, 110, C.main), lb(296, 46, '太陽の光', 9, C.main, 'middle', true),
];
const f50 = show([
  { note: '月は、地球のまわりを約29.5日で1周します。太陽の光は、右から当たっています。月が太陽と同じ向きにあるのが、新月です。', add: [...k50Base(), ci(215, 85, 7, undefined, C.gray, FILL.gray), lb(224, 85, '新月', 10, C.gray, 'start', true), ...m('月は約29.5日で地球を1周')] },
  { note: '❓新月から約7日後は、どこにあるでしょう。4分の1周して、太陽と90°ずれた位置（上）にあります。地球から見ると、右半分が光る上弦の月（半月）です。(1)の答えです。', add: [ci(160, 30, 7, undefined, C.main, FILL.yellow), lb(160, 14, '上弦', 10, C.main, 'middle', true), ...m('(1) 約7日後＝上弦の月（半月）', C.red, FILL.red)] },
  { note: '約15日後には、月は太陽と反対側（左）に来ます。太陽の光を受けた面を、すべて地球に向けるので、満月です。', add: [ci(105, 85, 7, undefined, C.main, FILL.yellow), lb(96, 85, '満月', 10, C.main, 'end', true), ...m('満月：太陽の反対側にある', C.main, FILL.yellow)] },
  { note: '❓真夜中に南の空に見える月は何でしょう。真夜中、地球の観測者は太陽と反対向きを向いています。その方向にあるのは、満月です。(2)の答えです。', add: [ci(148, 85, 3, undefined, C.red, C.red), ar(144, 85, 114, 85, C.red), ...m('(2) 真夜中に南中する月＝満月', C.red, FILL.red)] },
  { note: '夕方は、太陽が西にしずんだころです。地球の北側にいる観測者が、夕方に見る三日月は、太陽より少し東（左）にずれた、新月に近い位置にあります。', add: fresh(...k50Base(), ci(215, 85, 7, undefined, C.gray, FILL.gray), lb(224, 85, '新月', 10, C.gray, 'start', true), ci(160, 73, 3, undefined, C.red, C.red), ci(202, 50, 5, undefined, C.main, FILL.yellow), ar(163, 71, 197, 53, C.red), lb(210, 36, '三日月', 10, C.main, 'start', true), ...m('夕方の三日月は新月に近い位置', C.purple, FILL.purple)) },
  { note: '❓光っているのは、右側と左側のどちらでしょう。光っている側は、太陽の方向（西）を向いています。夕方は、右側が光ります。(3)の答えです。', add: fresh(ci(160, 70, 40, undefined, C.gray, FILL.gray), crescent(160, 70, 40, 20), lb(230, 70, '右側が光る', 12, C.red, 'start', true), lb(160, 128, '夕方の西の空の三日月', 11, C.ink, 'middle', true), ...m('(3) 太陽に向いた右側が光る', C.red, FILL.red)) },
  { note: '確かめます。夕方の月は、日がたつにつれて、右側から満ちていきます。左側が光るのは、満月のあとの欠けていく月（明け方に見える）です。', add: m('右が光る月は夕方、満ちていく', C.green, FILL.green) },
], '答え：(1) 上弦の月 (2) 満月 (3) 右側');

export const figuresMoshi202611RikaKoko2: Record<string, Figure> = {
  moshi_2026_11_rika_k11: f11,
  moshi_2026_11_rika_k12: f12,
  moshi_2026_11_rika_k13: f13,
  moshi_2026_11_rika_k14: f14,
  moshi_2026_11_rika_k15: f15,
  moshi_2026_11_rika_k16: f16,
  moshi_2026_11_rika_k17: f17,
  moshi_2026_11_rika_k18: f18,
  moshi_2026_11_rika_k19: f19,
  moshi_2026_11_rika_k20: f20,
  moshi_2026_11_rika_k21: f21,
  moshi_2026_11_rika_k22: f22,
  moshi_2026_11_rika_k23: f23,
  moshi_2026_11_rika_k24: f24,
  moshi_2026_11_rika_k25: f25,
  moshi_2026_11_rika_k26: f26,
  moshi_2026_11_rika_k27: f27,
  moshi_2026_11_rika_k28: f28,
  moshi_2026_11_rika_k29: f29,
  moshi_2026_11_rika_k30: f30,
  moshi_2026_11_rika_k31: f31,
  moshi_2026_11_rika_k32: f32,
  moshi_2026_11_rika_k33: f33,
  moshi_2026_11_rika_k34: f34,
  moshi_2026_11_rika_k35: f35,
  moshi_2026_11_rika_k36: f36,
  moshi_2026_11_rika_k37: f37,
  moshi_2026_11_rika_k38: f38,
  moshi_2026_11_rika_k39: f39,
  moshi_2026_11_rika_k40: f40,
  moshi_2026_11_rika_k41: f41,
  moshi_2026_11_rika_k42: f42,
  moshi_2026_11_rika_k43: f43,
  moshi_2026_11_rika_k44: f44,
  moshi_2026_11_rika_k45: f45,
  moshi_2026_11_rika_k46: f46,
  moshi_2026_11_rika_k47: f47,
  moshi_2026_11_rika_k48: f48,
  moshi_2026_11_rika_k49: f49,
  moshi_2026_11_rika_k50: f50,
};
