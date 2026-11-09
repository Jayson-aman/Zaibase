// 本試験対策（学校別）早稲田実業学校高等部 準拠の自作問題（組B：理科・社会）の動く図解。座標は 320×240。
// 図は上（y＜165）に描き、下の帯（y≥170）に短い結論を出す。キー＝問題ID。
import type { DiagramElement, Figure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, sc, show, band, fresh, cover, stack, flow } from './diagram-kit';

/** 下の帯に一言（前のスライドの帯は白でおおいかくして書きかえる）。 */
const m = (text: string, color: string = C.main, fill: string = FILL.warm, size = 13): DiagramElement[] =>
  band(170, bx(20, 176, 280, 34, text, color, fill, size));
const rect = (x0: number, y0: number, x1: number, y1: number, color?: string, fill?: string): DiagramElement =>
  pg([[x0, y0], [x1, y0], [x1, y1], [x0, y1]], color, fill);
const K = (s: string, n: number) => `honshiken_school_koko_waseda_jitsugyo_${s}_${String(n).padStart(2, '0')}`;

// ═════════ 理科 ═════════

// r01 凸レンズ（1cm＝2.5px。焦点距離12cm＝30px）
const lens = (): DiagramElement[] => [
  ln(10, 100, 310, 100, C.gray, true), ln(140, 50, 140, 150, C.ink, false, 3), lb(140, 42, '凸レンズ', 11, C.ink, 'middle', true),
  ci(110, 100, 2.5, undefined, C.gray, C.gray), ci(170, 100, 2.5, undefined, C.gray, C.gray), ci(80, 100, 2.5, undefined, C.gray, C.gray), ci(200, 100, 2.5, undefined, C.gray, C.gray),
  lb(110, 116, 'F', 10, C.gray, 'middle', true), lb(80, 116, '2F', 10, C.gray, 'middle', true), lb(170, 90, 'F', 10, C.gray, 'middle', true), lb(200, 90, '2F', 10, C.gray, 'middle', true),
];
const r01 = show([
  { note: '焦点距離のわからない凸レンズです。物体をレンズから24cmの位置に置きます（図では1cmを2.5pxで描いています）。', add: [...lens(), ar(80, 100, 80, 88, C.main), lb(80, 76, '物体', 11, C.main, 'middle', true), ...m('物体はレンズから24cm')] },
  { note: 'スクリーンを動かすと、24cmの位置で、物体と同じ大きさの像がはっきり映りました。像は、上下が逆向きです。', add: [ar(200, 100, 200, 112, C.purple), lb(200, 130, '像（24cm）', 11, C.purple, 'middle', true), ...m('像も24cmで、同じ大きさ', C.purple, FILL.purple)] },
  { note: '❓なぜ同じ大きさになるのでしょう。物体を焦点距離の2倍の位置に置いたときだけ、像は反対側の2倍の位置にでき、物体と同じ大きさになります。', add: m('同じ大きさ→24cm＝焦点距離の2倍', C.blue, FILL.blue, 12) },
  { note: '24cmが焦点距離の2倍なので、焦点距離は24÷2＝12cmです。(1)の答えです。', add: m('(1) 焦点距離＝24÷2＝12cm', C.red, FILL.red) },
  { note: '次に、物体をレンズから16cmの位置に動かします。16cmは、焦点距離12cmと、2倍の24cmのあいだです。', add: fresh(...lens(), ar(100, 100, 100, 88, C.main), lb(100, 76, '物体（16cm）', 11, C.main, 'middle', true), ...m('物体は12cmと24cmのあいだ')) },
  { note: '作図します。物体の先端から光軸に平行に出た光は、レンズで曲がって、反対側の焦点を通ります。', add: [ln(100, 88, 140, 88, C.green), ln(140, 88, 260, 136, C.green), ...m('平行な光は焦点を通る', C.green, FILL.green)] },
  { note: 'レンズの中心を通る光は、曲がらずに直進します。この2本の光が交わる点が、像の先端です。', add: [ln(100, 88, 260, 136, C.blue), ar(260, 100, 260, 136, C.purple), lb(260, 150, '像', 11, C.purple, 'middle', true), ...m('2本の交点が像の先端', C.blue, FILL.blue)] },
  { note: '交点は、レンズから48cm（図では120px）のところで、24cmよりずっと遠くにあります。像は、物体より大きくなります。', add: m('像は24cmより遠く、大きい', C.purple, FILL.purple) },
  { note: '像が遠くにできるので、スクリーンはレンズから遠ざけます。(2)の答えです。', add: m('(2) スクリーンを遠ざける', C.red, FILL.red) },
], '答え：(1) 12cm (2) 遠ざける');

// r02 超音波（1px＝5m）
const sea = (): DiagramElement[] => [ln(20, 50, 300, 50, C.blue, false, 3), ln(20, 146, 300, 146, C.ink, false, 4), bx(130, 24, 60, 20, '船', C.main, FILL.warm, 12), lb(300, 160, '海底', 11, C.gray, 'end', true)];
const r02 = show([
  { note: '船から海底へ超音波を出します。水中の音の速さは1500m/sです（図では5mを1pxで描いています）。', add: [...sea(), ...m('水中の音の速さ 1500m/s')] },
  { note: '海底で反射して返ってくるまでに0.64秒かかりました。この時間は、行きと帰りの合計です。', add: [ar(155, 52, 155, 144, C.blue), ar(165, 144, 165, 52, C.green), lb(180, 100, '往復0.64秒', 11, C.blue, 'start', true), ...m('0.64秒は往復の時間', C.blue, FILL.blue)] },
  { note: '❓行きと帰りで同じ道のりを進むので、深さは「速さ×時間」の半分です。1500×0.64÷2＝480m。', add: [lb(268, 102, '480m', 12, C.red, 'middle', true), ...m('深さ＝1500×0.64÷2＝480m', C.red, FILL.red)] },
  { note: '次に、海底より上にいた魚の群れからの反射は、0.40秒後に返ってきました。', add: [bx(100, 104, 44, 18, '魚群', C.purple, FILL.purple, 11), ...m('魚群は往復0.40秒', C.purple, FILL.purple)] },
  { note: '魚の群れまでの深さは 1500×0.40÷2＝300mです。', add: [lb(94, 116, '300m', 12, C.purple, 'end', true), ...m('魚群の深さ＝1500×0.40÷2＝300m', C.purple, FILL.purple, 12)] },
  { note: '海底は水面から480m、魚の群れは300m。魚の群れは、海底から 480−300＝180m の高さにいます。', add: [ar(205, 122, 205, 144, C.red), lb(214, 138, '180m', 12, C.red, 'start', true), ...m('480−300＝180m', C.red, FILL.red)] },
  { note: '確かめます。魚の反射は、海底の反射より 0.64−0.40＝0.24秒早く返ります。', add: fresh(bx(30, 30, 260, 34, '0.64−0.40＝0.24秒（魚から海底の往復）', C.gray, FILL.gray, 12), bx(30, 90, 260, 34, '1500×0.24÷2＝180m', C.blue, FILL.blue, 13), ...m('答え 180m で一致', C.green, FILL.green)) },
], '答え：180m');

// r03 直列と並列の混合回路
const circ = (): DiagramElement[] => [
  bx(10, 90, 50, 40, '電源\n18V', C.ink, FILL.gray, 11),
  ln(35, 90, 35, 59, C.ink), ln(35, 59, 80, 59, C.ink),
  bx(80, 44, 60, 30, 'R1\n10Ω', C.main, FILL.warm, 11), ln(140, 59, 165, 59, C.ink),
  ln(165, 55, 165, 115, C.ink), ln(165, 55, 190, 55, C.ink), ln(165, 115, 190, 115, C.ink),
  bx(190, 40, 70, 30, 'R2 30Ω', C.blue, FILL.blue, 11), bx(190, 100, 70, 30, 'R3 60Ω', C.green, FILL.green, 11),
  ln(260, 55, 285, 55, C.ink), ln(260, 115, 285, 115, C.ink), ln(285, 55, 285, 150, C.ink), ln(285, 150, 35, 150, C.ink), ln(35, 150, 35, 130, C.ink),
];
const r03 = show([
  { note: '電源18Vに、R1（10Ω）を直列に、R2（30Ω）とR3（60Ω）の並列部分をつないだ回路です。', add: [...circ(), ...m('R1と（R2・R3の並列）が直列')] },
  { note: '❓並列部分を1本の抵抗にまとめましょう。R2とR3にかかる電圧は同じなので、電流の比は抵抗の逆の比。合成抵抗は 1/30＋1/60＝3/60 から 20Ω。', add: [lb(225, 90, '20Ω', 12, C.red, 'middle', true), ...m('並列部分は合成して20Ω', C.red, FILL.red)] },
  { note: '回路全体の抵抗は 10＋20＝30Ω。全体を流れる電流は 18÷30＝0.6Aです。', add: [lb(35, 78, '0.6A', 11, C.blue, 'start', true), ...m('全体30Ω→電流 18÷30＝0.6A', C.blue, FILL.blue)] },
  { note: 'R1にかかる電圧は 10×0.6＝6V。並列部分にかかる電圧は 18−6＝12Vです。', add: [lb(110, 36, '6V', 11, C.main, 'middle', true), lb(312, 92, '12V', 11, C.red, 'end', true), ...m('R1は6V、並列部分は12V')] },
  { note: 'R2に流れる電流は 12÷30＝0.4Aです。(1)の答えです。（R3は 12÷60＝0.2A）', add: [lb(225, 34, '0.4A', 11, C.blue, 'middle', true), lb(225, 143, '0.2A', 11, C.green, 'middle', true), ...m('(1) R2＝12÷30＝0.4A', C.red, FILL.red)] },
  { note: '回路全体の消費電力は、電源の電圧×全体の電流＝18×0.6＝10.8Wです。(2)の答えです。', add: m('(2) 18×0.6＝10.8W', C.red, FILL.red) },
  { note: '確かめます。各抵抗の消費電力を足すと、10.8Wになります。', add: fresh(bx(15, 40, 90, 40, 'R1\n6×0.6＝3.6W', C.main, FILL.warm, 11), bx(115, 40, 90, 40, 'R2\n12×0.4＝4.8W', C.blue, FILL.blue, 11), bx(215, 40, 90, 40, 'R3\n12×0.2＝2.4W', C.green, FILL.green, 11), ...m('3.6＋4.8＋2.4＝10.8W で一致', C.green, FILL.green)) },
], '答え：(1) 0.4A (2) 10.8W');

// r04 電熱線と水の温度上昇
const r04 = show([
  { note: '抵抗4Ωの電熱線に12Vを加え、水180gを3分30秒あたためます。まず、電流を求めます。', add: [...stack(['電圧12V、抵抗4Ω'], 40, 240, 40, { h: 34 }).flat(), ...m('まず電流を求める')] },
  { note: 'オームの法則より、電流は 12÷4＝3Aです。', add: [bx(40, 90, 240, 34, '電流＝12÷4＝3A', C.blue, FILL.blue, 13), ...m('電流は3A', C.blue, FILL.blue)] },
  { note: '電力は、電圧×電流＝12×3＝36Wです。1秒あたり36Jの熱が出ます。', add: [bx(40, 128, 240, 30, '電力＝12×3＝36W', C.red, FILL.red, 13), ...m('電力は36W（1秒に36J）', C.red, FILL.red)] },
  { note: '時間を秒にします。3分30秒は210秒です。熱量は 36×210＝7560Jです。', add: fresh(bx(40, 20, 240, 34, '3分30秒＝210秒', C.gray, FILL.gray, 13), ar(160, 55, 160, 70, C.main), bx(40, 72, 240, 34, '熱量＝36×210＝7560J', C.main, FILL.warm, 13), ...m('熱量は7560J')) },
  { note: '❓水180gの温度を1℃上げるのに必要な熱量は、4.2×180＝756Jです。', add: [ar(160, 107, 160, 122, C.main), bx(40, 124, 240, 34, '水180gを1℃上げる→756J', C.blue, FILL.blue, 13), ...m('1℃あたり756J', C.blue, FILL.blue)] },
  { note: '上昇する温度は 7560÷756＝10℃です。(1)の答えです。', add: m('(1) 7560÷756＝10℃', C.red, FILL.red) },
  { note: '(2)電圧が半分の6Vだと、電流も半分の1.5A。電力は 6×1.5＝9Wで、もとの1/4です。熱量は 9×210＝1890Jです。', add: fresh(bx(40, 20, 240, 34, '6V→電流1.5A、電力9W', C.gray, FILL.gray, 13), ar(160, 55, 160, 70, C.main), bx(40, 72, 240, 34, '熱量＝9×210＝1890J', C.main, FILL.warm, 13), ar(160, 107, 160, 122, C.main), bx(40, 124, 240, 34, '1890÷756＝2.5℃', C.red, FILL.red, 13), ...m('(2) 2.5℃（(1)の1/4）', C.red, FILL.red)) },
], '答え：(1) 10℃ (2) 2.5℃');

// r06 ばね
const r06 = show([
  { note: 'ばねAは100gで4cm、ばねBは100gで2cmのびます。まず、1gあたりののびを求めます。', add: [bx(30, 30, 120, 34, 'A：100gで4cm', C.blue, FILL.blue, 12), bx(170, 30, 120, 34, 'B：100gで2cm', C.green, FILL.green, 12), ...m('ばねの性質を整理する')] },
  { note: 'Aは1gあたり 4÷100＝0.04cm、Bは 2÷100＝0.02cmのびます。', add: [bx(30, 84, 120, 34, '0.04cm/g', C.blue, FILL.blue, 12), bx(170, 84, 120, 34, '0.02cm/g', C.green, FILL.green, 12), ...m('のびは力に比例する')] },
  { note: '(1)直列では、どちらのばねにも150gの力がかかります。Aは 150×0.04＝6cm、Bは 150×0.02＝3cm。', add: fresh(bx(30, 20, 120, 34, 'A：150×0.04＝6cm', C.blue, FILL.blue, 12), bx(170, 20, 120, 34, 'B：150×0.02＝3cm', C.green, FILL.green, 12), ar(90, 56, 150, 80, C.main), ar(230, 56, 170, 80, C.main), bx(80, 82, 160, 34, '合計 6＋3＝9cm', C.red, FILL.red, 13), ...m('(1) 直列は足し算で 9cm', C.red, FILL.red)) },
  { note: '(2)並列では、Aにxg、Bに(150−x)gがかかるとします。のびが等しいので 0.04x＝0.02×(150−x)。', add: fresh(bx(30, 20, 120, 34, 'Aにかかる力 x g', C.blue, FILL.blue, 12), bx(170, 20, 120, 34, 'Bに (150−x) g', C.green, FILL.green, 12), ar(160, 56, 160, 72, C.main), bx(40, 74, 240, 34, '0.04x＝0.02×(150−x)', C.main, FILL.warm, 13), ...m('のびが同じ になる式')) },
  { note: '0.04x＝3−0.02x より 0.06x＝3。x＝50gです。Aに50g、Bに100gがかかります。', add: [ar(160, 109, 160, 124, C.main), bx(40, 126, 240, 34, 'x＝50g（Aに50g、Bに100g）', C.red, FILL.red, 12), ...m('強いBが多くの力を受けもつ', C.red, FILL.red)] },
  { note: 'のびは 50×0.04＝2cm。Bで確かめても 100×0.02＝2cmで、同じです。(2)の答えです。', add: fresh(bx(30, 40, 120, 34, 'A：50×0.04＝2cm', C.blue, FILL.blue, 12), bx(170, 40, 120, 34, 'B：100×0.02＝2cm', C.green, FILL.green, 12), ...m('(2) のびは2cm（2本とも同じ）', C.red, FILL.red)) },
  { note: 'まとめです。直列は「のびを足す」、並列は「のびが同じになるように力が分かれる」。強いばねほど多くの力を受けもちます。', add: m('答え (1) 9cm (2) 2cm', C.red, FILL.red) },
], '答え：(1) 9cm (2) 2cm');

// r07 浮力
const r07 = show([
  { note: '金属のかたまりを、空気中ではかると3.6N、水中ではかると2.4Nでした。', add: [ln(70, 20, 70, 62, C.ink), ci(70, 80, 18, '物', C.main, FILL.warm, 10), lb(70, 118, '3.6N', 13, C.main, 'middle', true), lb(70, 140, '空気中', 11, C.gray, 'middle', true), rect(190, 56, 270, 140, C.blue, FILL.blue), ln(230, 20, 230, 76, C.ink), ci(230, 98, 18, '物', C.main, FILL.warm, 10), lb(230, 158, '2.4N（水中）', 12, C.blue, 'middle', true), ...m('空気中3.6N、水中2.4N')] },
  { note: '❓水中で軽くなった分が浮力です。浮力＝3.6−2.4＝1.2N。(1)の答えです。', add: m('(1) 浮力＝3.6−2.4＝1.2N', C.red, FILL.red) },
  { note: '浮力は、おしのけた水の重さに等しくなります。1.2Nは、100gが1Nなので、水120gの重さです。', add: m('1.2N＝水120gの重さ', C.blue, FILL.blue) },
  { note: '水1cm³は1gなので、水120gは120cm³。全部水に入れたので、かたまりの体積も120cm³です。(2)の答えです。', add: m('(2) 体積＝120cm³', C.red, FILL.red) },
  { note: '空気中で3.6Nなので、質量は360gです。', add: m('質量＝360g（3.6N）') },
  { note: '密度は、質量÷体積＝360÷120＝3.0g/cm³です。(3)の答えです。', add: m('(3) 360÷120＝3.0g/cm³', C.red, FILL.red) },
  { note: '確かめます。密度3.0g/cm³は水の1.0より大きいので、沈みます。水中でも2.4Nを示したことと合います。', add: m('3.0＞1.0 なので沈む', C.green, FILL.green) },
], '答え：(1) 1.2N (2) 120cm³ (3) 3.0g/cm³');

// r09 斜面の仕事
const slope = (): DiagramElement[] => [pg([[40, 150], [260, 150], [260, 81]], C.ink, FILL.gray), lb(110, 108, '斜面4m', 11, C.ink, 'middle', true), lb(252, 128, '1.2m', 11, C.ink, 'end', true), bx(46, 128, 40, 18, '50N', C.main, FILL.warm, 11)];
const r09 = show([
  { note: 'なめらかな斜面（長さ4m、高さ1.2m）の下に、重さ50Nの荷物があります。斜面に沿って引き上げます。', add: [...slope(), ...m('斜面4m、高さ1.2m、荷物50N')] },
  { note: '❓まず、真上に1.2m持ち上げる仕事を考えます。仕事＝力×距離＝50×1.2＝60Jです。', add: m('真上に持ち上げる仕事＝60J', C.blue, FILL.blue) },
  { note: 'なめらかな斜面では、道具を使っても仕事の大きさは変わりません（仕事の原理）。斜面に沿って引く仕事も60Jです。', add: m('斜面でも仕事は同じ60J', C.blue, FILL.blue) },
  { note: '引く力をxNとすると、x×4＝60です。', add: [ar(120, 136, 180, 118, C.red), lb(186, 114, 'x N', 11, C.red, 'start', true), ...m('x×4m＝60J', C.red, FILL.red)] },
  { note: 'x＝60÷4＝15N。(1)の答えです。距離が長くなるぶん、力は小さくてすみます。', add: m('(1) 引く力は15N', C.red, FILL.red) },
  { note: '仕事率は、1秒あたりの仕事。60J÷12秒＝5Wです。(2)の答えです。', add: m('(2) 60÷12＝5W', C.red, FILL.red) },
  { note: '確かめます。力の比 15：50＝3：10 は、斜面の高さと長さの比 1.2：4＝3：10 と一致します。', add: fresh(bx(30, 30, 260, 34, '力の比 15：50＝3：10', C.gray, FILL.gray, 13), bx(30, 90, 260, 34, '高さ：長さ＝1.2：4＝3：10', C.blue, FILL.blue, 13), ...m('2つの比が一致する', C.green, FILL.green)) },
], '答え：(1) 15N (2) 5W');

// r10 記録タイマー
const tape = (n: number, dashed = false): DiagramElement => bx(40 + n * 50, 150 - (n + 1) * 28, 36, (n + 1) * 28, undefined, dashed ? C.gray : C.main, dashed ? FILL.gray : FILL.warm);
const r10 = show([
  { note: '1秒間に50回打点する記録タイマーです。5打点ごとにテープを切ります。', add: [bx(40, 30, 240, 34, '1秒間に50打点', C.gray, FILL.gray, 13), ar(160, 66, 160, 84, C.main), bx(40, 86, 240, 34, '5打点＝5÷50＝0.1秒', C.blue, FILL.blue, 13), ...m('5打点は0.1秒の記録')] },
  { note: '切ったテープを順にならべます。長さは 2.0、4.0、6.0、8.0cmでした（図では1cmを14pxで描いています）。', add: fresh(tape(0), tape(1), tape(2), tape(3), lb(58, 164, '2.0cm', 10, C.gray, 'middle', true), lb(108, 164, '4.0cm', 10, C.gray, 'middle', true), lb(158, 164, '6.0cm', 10, C.gray, 'middle', true), lb(208, 164, '8.0cm', 10, C.gray, 'middle', true), lb(160, 20, '切ったテープ', 11, C.ink, 'middle', true)) },
  { note: '❓3番目のテープは6.0cm。0.1秒で6.0cm進んだので、平均の速さは 6.0÷0.1＝60cm/sです。(1)の答えです。', add: [lb(158, 60, '60cm/s', 12, C.red, 'middle', true)] },
  { note: 'テープの長さは、2.0cmずつ長くなっています。台車の速さが、一定の割合で増えているためです。', add: [lb(83, 98, '＋2.0', 11, C.blue, 'middle', true), lb(133, 70, '＋2.0', 11, C.blue, 'middle', true), lb(183, 42, '＋2.0', 11, C.blue, 'middle', true)] },
  { note: '5番目のテープは、8.0＋2.0＝10.0cmと考えられます。(2)の答えです。', add: [tape(4, true), lb(258, 164, '10.0cm', 10, C.red, 'middle', true)] },
  { note: '確かめます。速さにすると、20、40、60、80、100cm/sと、20cm/sずつ速くなっています。', add: fresh(bx(10, 40, 56, 34, '20', C.main, FILL.warm, 12), bx(70, 40, 56, 34, '40', C.main, FILL.warm, 12), bx(130, 40, 56, 34, '60', C.main, FILL.warm, 12), bx(190, 40, 56, 34, '80', C.main, FILL.warm, 12), bx(250, 40, 56, 34, '100', C.red, FILL.red, 12), lb(160, 30, 'テープごとの速さ（cm/s）', 11, C.ink, 'middle', true), ...m('20cm/sずつ増えて規則に合う', C.green, FILL.green, 12)) },
  { note: 'まとめです。5打点＝0.1秒（50回/秒）。速さ＝テープの長さ÷0.1秒。長さが2.0cmずつ増えるので、5番目は10.0cmです。', add: m('答え (1) 60cm/s (2) 10.0cm', C.red, FILL.red) },
], '答え：(1) 60cm/s (2) 10.0cm');

// r12 斜面の力の分解（高さ3：底辺4：斜面5。1N＝2.5px）
const tri = (): DiagramElement[] => [pg([[40, 140], [200, 140], [200, 20]], C.ink, FILL.gray), lb(206, 86, '3', 11, C.gray, 'start', true), lb(120, 156, '4', 11, C.gray, 'middle', true), lb(80, 70, '5', 11, C.gray, 'middle', true), ci(120, 80, 5, undefined, C.main, C.main)];
const r12 = show([
  { note: '重さ20Nの物体が、高さ：底辺：斜面の長さ＝3：4：5の斜面に置かれています。', add: [...tri(), ...m('斜面は 3：4：5 の直角三角形')] },
  { note: '重力は、まっすぐ下向きに20Nです（図では1Nを2.5pxで描いています）。', add: [ar(120, 80, 120, 130, C.red), lb(128, 128, '20N', 11, C.red, 'start', true), ...m('重力20N（鉛直下向き）', C.red, FILL.red)] },
  { note: '重力を、斜面に平行な力と、斜面に垂直な力に分けます。まず、斜面に平行で斜面を下る向きの分力です。', add: [ar(120, 80, 96, 98, C.blue), lb(90, 108, '平行', 11, C.blue, 'end', true), ...m('斜面に平行な分力', C.blue, FILL.blue)] },
  { note: '次に、斜面に垂直で、斜面を押す向きの分力です。2つの分力は直角で、足すと重力になります（平行四辺形の作図）。', add: [ar(120, 80, 144, 112, C.green), lb(150, 118, '垂直', 11, C.green, 'start', true), ...m('斜面に垂直な分力', C.green, FILL.green)] },
  { note: '❓力の三角形は、斜面の三角形と相似です。重力は直角のむかい側の辺（斜面の長さ）に対応し、5にあたります。20÷5＝4N が、1あたりの大きさです。', add: m('重力20N＝5にあたる→1あたり4N', C.main, FILL.warm, 12) },
  { note: '斜面に平行な分力は、高さにあたる3。3×4＝12Nです。(1)の答えです。', add: m('(1) 平行＝3×4＝12N', C.red, FILL.red) },
  { note: '斜面に垂直な分力は、底辺にあたる4。4×4＝16Nです。(2)の答えです。', add: m('(2) 垂直＝4×4＝16N', C.red, FILL.red) },
  { note: '確かめます。12²＋16²＝144＋256＝400＝20²。分力を合成すると、もとの重力20Nにもどります。', add: m('12²＋16²＝20² で一致', C.green, FILL.green) },
], '答え：(1) 12N (2) 16N');

// r14 硝酸カリウムの結晶
const r14 = show([
  { note: '60℃の硝酸カリウムの飽和水溶液420gを、20℃まで冷やします。', add: [bx(40, 30, 240, 34, '60℃の飽和水溶液 420g', C.main, FILL.warm, 13), ...m('何gの結晶が出るか？')] },
  { note: '水100gに硝酸カリウム110gをとかした210gが、飽和水溶液1組分です。420gは、その2倍です。', add: [bx(40, 80, 240, 34, '210g（水100g＋110g）の2組', C.blue, FILL.blue, 13), ...m('420g＝210gの2倍', C.blue, FILL.blue)] },
  { note: '水は200g、硝酸カリウムは220gです。左の棒で表します。', add: fresh(bx(30, 40, 70, 110, '60℃で\n220g', C.main, FILL.warm, 11), lb(65, 164, '60℃', 11, C.gray, 'middle', true), lb(165, 100, '→', 16, C.gray, 'middle', true), ...m('水200g、とけている量220g')) },
  { note: '❓20℃では、水100gに32gまでしかとけません。水200gなら 32×2＝64gまでです。', add: [bx(210, 118, 70, 32, 'とける\n64g', C.blue, FILL.blue, 11), lb(245, 164, '20℃', 11, C.gray, 'middle', true), ...m('20℃：水200gに64gまで', C.blue, FILL.blue)] },
  { note: 'とけきれなくなった分が、結晶として出てきます。220−64＝156gです。答えです。', add: [bx(210, 40, 70, 78, '結晶\n156g', C.red, FILL.red, 11), ...m('結晶＝220−64＝156g', C.red, FILL.red)] },
  { note: '確かめます。水100gあたりで考えると 110−32＝78g出ます。水は2倍あるので 78×2＝156gで一致します。', add: fresh(bx(30, 30, 260, 34, '水100gあたり：110−32＝78g', C.gray, FILL.gray, 13), bx(30, 90, 260, 34, '水200gなら：78×2＝156g', C.blue, FILL.blue, 13), ...m('答え 156g で一致', C.green, FILL.green)) },
  { note: 'まとめです。飽和水溶液は水の量に比例して溶質をとかしています。水200gで、60℃は220g、20℃は64g。出てくる結晶はその差の156gです。', add: m('答え 156g', C.red, FILL.red) },
], '答え：156g');

// r16 銅の酸化（1g＝50px）
const r16 = show([
  { note: '銅の粉末3.2gを加熱しました。銅と酸素は、質量の比4：1で結びつきます（図では1gを50pxで描いています）。', add: [bx(40, 30, 160, 30, '加熱前：銅 3.2g', C.main, FILL.warm, 12), ...m('銅：酸素＝4：1 で結びつく')] },
  { note: '加熱後の質量は3.6gでした。0.4g増えています。', add: [bx(40, 90, 180, 30, '加熱後 3.6g', C.blue, FILL.blue, 12), ...m('0.4g増えた', C.blue, FILL.blue)] },
  { note: '❓増えた0.4gは、結びついた酸素の質量です。', add: fresh(bx(40, 30, 160, 30, '加熱前：銅 3.2g', C.main, FILL.warm, 12), bx(40, 90, 160, 30, '加熱後 3.6g のうち…', C.blue, FILL.blue, 12), bx(200, 90, 20, 30, undefined, C.red, FILL.red), lb(210, 134, '酸素0.4g', 11, C.red, 'middle', true), ...m('増えた分＝酸素0.4g', C.red, FILL.red)) },
  { note: '銅と酸素は4：1なので、酸素0.4gと結びついた銅は 0.4×4＝1.6gです。酸化銅は 1.6＋0.4＝2.0gです。', add: fresh(bx(40, 30, 160, 30, '加熱前：銅 3.2g', C.main, FILL.warm, 12), bx(120, 90, 80, 30, '酸化した銅\n1.6g', C.main, FILL.warm, 11), bx(200, 90, 20, 30, undefined, C.red, FILL.red), lb(210, 134, '酸素0.4g', 11, C.red, 'middle', true), ...m('酸化した銅＝0.4×4＝1.6g')) },
  { note: '酸化しないで残った銅は、3.2−1.6＝1.6gです。答えです。', add: [bx(40, 90, 80, 30, '残る銅\n1.6g', C.green, FILL.green, 11), ...m('残った銅＝3.2−1.6＝1.6g', C.red, FILL.red)] },
  { note: '確かめます。残った銅1.6gと酸化銅2.0gを足すと3.6g。加熱後の質量に一致します。', add: m('1.6＋2.0＝3.6g で一致', C.green, FILL.green) },
  { note: 'まとめです。質量が増えた分は酸素。酸素の4倍が酸化した銅。残った銅は、もとの銅から酸化した銅を引いた1.6gです。', add: m('答え 1.6g', C.red, FILL.red) },
], '答え：1.6g');

// r18 酸化銅の還元（炭素 1g＝100px）
const r18 = show([
  { note: '酸化銅8.0gと炭素0.6gは、ちょうど反応して、銅6.4gと二酸化炭素2.2gができます。質量の比は 酸化銅：炭素＝8.0：0.6＝40：3です。', add: [bx(30, 30, 260, 34, '酸化銅8.0g：炭素0.6g＝40：3', C.main, FILL.warm, 13), ...m('ちょうど反応する量の比')] },
  { note: '酸化銅は12.0gです。8.0gの1.5倍にあたります。', add: [bx(30, 80, 260, 34, '12.0g＝8.0g×1.5倍', C.blue, FILL.blue, 13), ...m('酸化銅は1.5倍', C.blue, FILL.blue)] },
  { note: '❓酸化銅12.0gとちょうど反応する炭素は、0.6×1.5＝0.9gです。', add: fresh(bx(30, 30, 260, 34, '炭素：0.6×1.5＝0.9gが必要', C.main, FILL.warm, 13), ...m('必要な炭素は0.9g')) },
  { note: '手もとの炭素は1.2gで、0.9gより多いので、炭素が足りています。1.2−0.9＝0.3gが余ります。', add: [bx(30, 84, 90, 30, '反応 0.9g', C.blue, FILL.blue, 12), bx(120, 84, 30, 30, undefined, C.red, FILL.red), lb(135, 128, '余り0.3g', 11, C.red, 'middle', true), ...m('炭素が0.3g余る', C.red, FILL.red)] },
  { note: '酸化銅12.0gはすべて反応するので、銅は 6.4×1.5＝9.6gできます。', add: fresh(bx(30, 30, 260, 34, '銅：6.4×1.5＝9.6g', C.green, FILL.green, 13), bx(30, 84, 260, 34, '炭素が0.3g余る', C.red, FILL.red, 13), ...m('答え 炭素0.3g余り、銅9.6g', C.red, FILL.red)) },
  { note: '確かめます。二酸化炭素は 2.2×1.5＝3.3g。反応前12.0＋0.9＝12.9g、反応後 9.6＋3.3＝12.9gで等しく、質量保存の法則に合います。', add: fresh(bx(30, 30, 260, 34, '前：12.0＋0.9＝12.9g', C.gray, FILL.gray, 13), bx(30, 84, 260, 34, '後：9.6＋3.3＝12.9g', C.gray, FILL.gray, 13), ...m('質量が等しく一致', C.green, FILL.green)) },
  { note: 'まとめです。ちょうど反応する量の比（40：3）で、足りるほうを基準に考えます。余るのは炭素で0.3g。銅は9.6gです。', add: m('炭素0.3g余り、銅9.6g', C.red, FILL.red) },
], '答え：炭素が0.3g残る。銅は9.6g');

// r25 蒸散（1mL＝20px）
const r25 = show([
  { note: '同じ大きさの枝4本。A：何もぬらない。B：葉の表にワセリン。C：葉の裏にワセリン。D：表と裏の両方にワセリン。', add: [bx(30, 40, 260, 30, 'A無処理 B表をふさぐ C裏をふさぐ D両方', C.gray, FILL.gray, 11), ...m('水が減るのは蒸散のため')] },
  { note: 'Aは何もふさがないので、10.0mL減りました（図では1mLを20pxで描いています）。', add: fresh(bx(40, 40, 200, 30, 'A：10.0mL', C.main, FILL.warm, 12), ...m('A（無処理）：10.0mL')) },
  { note: '❓Bは表をふさぎました。Aとの差 10.0−8.0＝2.0mLが、表からの蒸散量です。', add: [bx(40, 84, 160, 30, 'B：8.0mL', C.blue, FILL.blue, 12), bx(200, 84, 40, 30, '表2.0', C.red, FILL.red, 11), ...m('表の蒸散量＝10.0−8.0＝2.0mL', C.red, FILL.red, 12)] },
  { note: 'Cは裏をふさぎました。Aとの差 10.0−3.0＝7.0mLが、裏からの蒸散量です。', add: fresh(bx(40, 40, 200, 30, 'A：10.0mL', C.main, FILL.warm, 12), bx(40, 84, 60, 30, 'C：3.0mL', C.green, FILL.green, 11), bx(100, 84, 140, 30, '裏7.0', C.red, FILL.red, 11), ...m('裏の蒸散量＝10.0−3.0＝7.0mL', C.red, FILL.red, 12)) },
  { note: '全体10.0mLのうち、表2.0と裏7.0を足して9.0mL。残りの1.0mLは、茎からの蒸散です。', add: fresh(bx(40, 40, 40, 30, '表2.0', C.red, FILL.red, 11), bx(80, 40, 140, 30, '裏7.0mL', C.red, FILL.red, 11), bx(220, 40, 20, 30, undefined, C.purple, FILL.purple), lb(230, 84, '茎1.0', 11, C.purple, 'middle', true), ...m('10.0−2.0−7.0＝1.0mL（茎）', C.purple, FILL.purple)) },
  { note: 'Dは葉の表と裏の両方をふさぐので、茎からの1.0mLだけが減ります。答えです。', add: m('D＝茎の蒸散だけ＝1.0mL', C.red, FILL.red) },
  { note: '確かめます。表2.0＋裏7.0＋茎1.0＝10.0mLで、Aの減少量と一致します。', add: fresh(bx(30, 40, 260, 34, '2.0＋7.0＋1.0＝10.0mL', C.blue, FILL.blue, 13), ...m('Aの10.0mLと一致', C.green, FILL.green)) },
], '答え：1.0mL');

// r32 露点（飽和水蒸気量 1g＝6px）
const sat: [string, number][] = [['10', 9.4], ['12', 10.7], ['14', 12.1], ['16', 13.6], ['18', 15.4], ['20', 17.3]];
const satBox = (i: number, hi = false): DiagramElement => bx(30 + i * 46, 150 - sat[i][1] * 6, 30, sat[i][1] * 6, undefined, hi ? C.red : C.blue, hi ? FILL.red : FILL.blue);
const satBar = (i: number): DiagramElement[] => [satBox(i), lb(45 + i * 46, 164, `${sat[i][0]}℃`, 10, C.gray, 'middle', true)];
const r32 = show([
  { note: '気温28℃の空気は、飽和水蒸気量が27.2g/m³で、湿度50％です。実際の水蒸気量は 27.2×0.50＝13.6g/m³です。', add: [bx(40, 40, 240, 34, '27.2g/m³ × 50％ ＝ 13.6g/m³', C.main, FILL.warm, 13), ...m('空気中の水蒸気量は13.6g/m³')] },
  { note: '露点は、水蒸気量が、飽和水蒸気量とちょうど等しくなる気温です。表をグラフにします（図では1gを6pxで描いています）。', add: fresh(...satBar(0), ...satBar(1), ...satBar(2), ...satBar(3), ...satBar(4), ...satBar(5), lb(160, 24, '飽和水蒸気量（g/m³）', 11, C.ink, 'middle', true)) },
  { note: '❓冷やすと飽和水蒸気量が小さくなります。13.6gの高さに線を引き、どの気温の棒の高さと等しくなるか探します。', add: [ln(20, 68, 300, 68, C.red, true), lb(20, 62, '13.6g', 11, C.red, 'start', true)] },
  { note: '16℃の棒の高さが、ちょうど13.6gです。', add: [satBox(3, true), ...m('16℃で飽和水蒸気量＝13.6g', C.red, FILL.red)] },
  { note: 'この空気は、16℃まで冷えると、水蒸気がちょうど飽和します。露点は16℃です。', add: m('露点は16℃', C.red, FILL.red) },
  { note: '確かめます。14℃では飽和水蒸気量が12.1gで、13.6gをふくめないので、水滴が出ます。16℃以下に冷えると水滴ができます。', add: m('14℃：12.1g＜13.6g→水滴', C.green, FILL.green) },
  { note: 'まとめです。露点は「実際の水蒸気量が飽和水蒸気量になる気温」。13.6gは、表の16℃の値と一致するので、16℃です。', add: m('答え 16℃', C.red, FILL.red) },
], '答え：16℃');

// r34 地震の波（1秒＝9px）
const quake = (): DiagramElement[] => [ln(30, 100, 290, 100, C.ink, false, 3), ci(30, 100, 4, undefined, C.red, C.red), lb(30, 86, '発生', 11, C.red, 'middle', true), lb(30, 120, '0秒', 10, C.gray, 'middle', true)];
const r34 = show([
  { note: 'P波は7.0km/s、S波は4.0km/sで伝わります。P波の到着からS波の到着まで12秒でした。', add: [bx(30, 30, 260, 34, 'P波7.0km/s　S波4.0km/s　差12秒', C.gray, FILL.gray, 12), ...m('震源までの距離は？')] },
  { note: '地震が発生した時刻を0秒として、時間の軸をかきます（図では1秒を9pxで描いています）。', add: fresh(...quake(), ...m('時間の軸（発生が0秒）')) },
  { note: '震源までの距離をd kmとします。P波は d÷7.0秒、S波は d÷4.0秒で到着します。', add: m('P波：d÷7.0秒　S波：d÷4.0秒', C.blue, FILL.blue) },
  { note: '❓S波のほうがおそく着くので、2つの到着時刻の差が12秒です。式にすると d÷4.0−d÷7.0＝12。', add: m('d÷4.0−d÷7.0＝12', C.red, FILL.red) },
  { note: '両辺に28をかけると 7d−4d＝336。3d＝336で、d＝112km。(1)の答えです。', add: m('(1) 3d＝336→d＝112km', C.red, FILL.red) },
  { note: 'P波が着くまでの時間は 112÷7.0＝16秒。地震は、P波の到着の16秒前に発生しました。(2)の答えです。', add: [ci(174, 100, 4, undefined, C.blue, C.blue), lb(174, 86, 'P波', 11, C.blue, 'middle', true), lb(174, 120, '16秒', 10, C.gray, 'middle', true), ...m('(2) 112÷7.0＝16秒前', C.red, FILL.red)] },
  { note: '確かめます。S波が着くのは 112÷4.0＝28秒後。28−16＝12秒で、初期微動継続時間と一致します。', add: [ci(282, 100, 4, undefined, C.green, C.green), lb(282, 86, 'S波', 11, C.green, 'middle', true), lb(282, 120, '28秒', 10, C.gray, 'middle', true), ar(176, 138, 280, 138, C.red), lb(228, 154, '12秒', 11, C.red, 'middle', true), ...m('28−16＝12秒で一致', C.green, FILL.green)] },
], '答え：(1) 112km (2) 16秒前');

// r35 地層（上から見た図。100m＝55px）
const pts35 = (): DiagramElement[] => [ci(50, 110, 10, 'A', C.main, FILL.warm, 11), ci(105, 110, 10, 'B', C.main, FILL.warm, 11), ci(50, 55, 10, 'C', C.main, FILL.warm, 11), ci(160, 110, 10, 'D', C.gray, FILL.gray, 11)];
const r35 = show([
  { note: '地点Aの真東100mがB、真北100mがC、真東200mがDです（図では100mを55pxで描いています）。Dは、まだ調べていません。', add: [...pts35(), ...m('Dでの深さを予想する')] },
  { note: 'まず、Z層の上面の標高を求めます。A：150−10＝140m、B：140−10＝130m、C：145−5＝140mです。', add: [lb(50, 94, '140m', 10, C.main, 'middle', true), lb(105, 94, '130m', 10, C.main, 'middle', true), lb(50, 39, '140m', 10, C.main, 'middle', true), ...m('Z層の標高：A140　B130　C140')] },
  { note: '❓深さではなく、標高にそろえて比べます。AからBへ（東へ100m）進むと、Z層は 140→130 で、10m低くなります。', add: [ar(62, 126, 100, 126, C.red), lb(81, 142, '−10m', 10, C.red, 'middle', true), ...m('東へ100m進むと10m低い', C.red, FILL.red)] },
  { note: 'AからCへ（北へ100m）進んでも、Z層は 140→140 で変わりません。地層は、東だけに低くかたむいています。', add: [ar(50, 72, 50, 90, C.green), ...m('北へは変わらない', C.green, FILL.green)] },
  { note: 'DはAから東へ200mなので、Z層の標高は 140−10×2＝120mです。', add: [lb(160, 94, '120m', 10, C.blue, 'middle', true), ...m('Dのとき標高 140−20＝120m', C.blue, FILL.blue)] },
  { note: 'Dの地表の標高は148mです。地表から、Z層までの深さは 148−120＝28mです。答えです。', add: m('深さ＝148−120＝28m', C.red, FILL.red) },
  { note: '確かめます。深さ28mを標高にもどすと 148−28＝120m。AからDまでの20mの低下と一致します。', add: fresh(bx(30, 30, 260, 34, '148−28＝120m（Dの上面）', C.blue, FILL.blue, 13), bx(30, 90, 260, 34, '140−120＝20m低い（A→D）', C.blue, FILL.blue, 13), ...m('答え 28m で一致', C.green, FILL.green)) },
], '答え：28m');

// r36 南中高度（1°＝3px）
const r36 = show([
  { note: '北緯40°の地点で、太陽の南中高度を調べます。地軸の傾きは23.4°です。', add: [bx(40, 40, 240, 34, '北緯40°、地軸の傾き23.4°', C.gray, FILL.gray, 13), ...m('夏至と冬至の差は？')] },
  { note: '春分・秋分は、太陽が赤道の真上にあるので、南中高度は 90−40＝50°です（図では1°を3pxで描いています）。', add: fresh(bx(60, 24, 150, 26, '春分・秋分 50°', C.green, FILL.green, 11), ...m('春分・秋分＝90−40＝50°', C.green, FILL.green)) },
  { note: '夏至は、太陽が北半球側に23.4°ずれるので、50＋23.4＝73.4°です。', add: [bx(60, 60, 220, 26, '夏至 73.4°', C.red, FILL.red, 11), ...m('夏至＝50＋23.4＝73.4°', C.red, FILL.red)] },
  { note: '冬至は、太陽が南半球側に23.4°ずれるので、50−23.4＝26.6°です。', add: [bx(60, 96, 80, 26, '冬至 26.6°', C.blue, FILL.blue, 11), ...m('冬至＝50−23.4＝26.6°', C.blue, FILL.blue)] },
  { note: '❓夏至と冬至の差は、冬至の棒の先から夏至の棒の先までの長さです。', add: [ar(140, 134, 280, 134, C.red), ar(280, 134, 140, 134, C.red), lb(210, 152, '差', 11, C.red, 'middle', true), ...m('差＝73.4−26.6＝46.8°', C.red, FILL.red)] },
  { note: '確かめます。差は、緯度に関係なく、地軸の傾きの2倍です。23.4×2＝46.8°で一致します。', add: m('23.4×2＝46.8° で一致', C.green, FILL.green) },
  { note: 'まとめです。夏至と冬至の南中高度の差は、緯度に関係なく、地軸の傾きの2倍です。', add: m('答え 46.8°', C.red, FILL.red) },
], '答え：46.8°');

// r37 星の日周運動・年周運動
const ring = (): DiagramElement[] => [pg(Array.from({ length: 36 }, (_, i) => [Math.round(160 + 60 * Math.cos((2 * Math.PI * i) / 36)), Math.round(92 + 60 * Math.sin((2 * Math.PI * i) / 36))] as [number, number]), C.gray, FILL.warm), ci(160, 92, 3, undefined, C.ink, C.ink), lb(160, 110, '北極星', 10, C.ink, 'middle', true)];
const r37 = show([
  { note: '北の空の星は、北極星を中心にして、ぐるりと回って見えます。', add: [...ring(), ...m('星は北極星を中心に回る')] },
  { note: '午後8時に、星が図の上の位置（12時の向き）にありました。', add: [ci(160, 32, 5, undefined, C.red, C.red), lb(160, 22, '午後8時', 11, C.red, 'middle', true), ...m('午後8時の星の位置', C.red, FILL.red)] },
  { note: '❓なぜ星が動いて見えるのでしょう。地球が1日に1回自転しているからです。1日で360°なので、1時間に 360÷24＝15°動いて見えます。', add: m('1時間に 360÷24＝15°', C.blue, FILL.blue) },
  { note: '午後8時から午前1時までは5時間。15°×5＝75°、反時計回りに動きます。(1)の答えです。', add: [sc(160, 92, 34, 90, 165, C.blue, FILL.blue), ci(102, 76, 5, undefined, C.blue, C.blue), lb(94, 70, '午前1時', 11, C.blue, 'end', true), ...m('(1) 15°×5＝75°', C.red, FILL.red)] },
  { note: '次に、1か月後の同じ時刻です。地球は1年（12か月）で太陽のまわりを1周するので、1か月で 360÷12＝30°ずれます。', add: fresh(...ring(), ci(160, 32, 5, undefined, C.gray, C.gray), lb(160, 22, '今月', 11, C.gray, 'middle', true), sc(160, 92, 34, 90, 120, C.red, FILL.red), ci(130, 40, 5, undefined, C.red, C.red), lb(116, 36, '1か月後', 11, C.red, 'end', true), ...m('1か月で 360÷12＝30°', C.red, FILL.red)) },
  { note: '向きは、日周運動と同じ反時計回りです。(2)の答えです。', add: m('(2) 反時計回りに30°', C.red, FILL.red) },
  { note: '確かめます。30°は、日周運動の時間では 30÷15＝2時間ぶんです。毎月、同じ位置に見える時刻が約2時間早くなることと一致します。', add: fresh(bx(30, 30, 260, 34, '30°÷15°＝2時間', C.blue, FILL.blue, 13), bx(30, 90, 260, 34, '1か月で約2時間早く見える', C.blue, FILL.blue, 13), ...m('年周運動の規則と一致', C.green, FILL.green)) },
], '答え：(1) 75° (2) 反時計回りに30°');

// r40 月の満ち欠け（上から見た図。太陽の光は右から）
const moon = (): DiagramElement[] => [
  ci(160, 78, 14, '地球', C.blue, FILL.blue, 10), pg(Array.from({ length: 36 }, (_, i) => [Math.round(160 + 48 * Math.cos((2 * Math.PI * i) / 36)), Math.round(78 + 48 * Math.sin((2 * Math.PI * i) / 36))] as [number, number]), C.gray, 'rgba(255,255,255,0)'),
  ar(300, 60, 262, 60, C.main), ar(300, 96, 262, 96, C.main), lb(300, 46, '太陽の光', 10, C.main, 'end', true),
];
const r40 = show([
  { note: '地球の北極の上から見た図です。太陽の光は右から来ます。月は、地球のまわりを反時計回りに公転します。', add: [...moon(), ...m('太陽の光は右から')] },
  { note: '月の位置と名前です。光が当たる側が、地球から見えるかどうかで、満ち欠けが決まります。右から順に、新月・上弦・満月・下弦です。', add: [ci(208, 78, 7, undefined, C.gray, FILL.gray), lb(222, 82, '新月', 11, C.gray, 'start', true), ci(160, 30, 7, undefined, C.gray, FILL.gray), lb(160, 18, '上弦', 11, C.gray, 'middle', true), ci(112, 78, 7, undefined, C.gray, FILL.gray), lb(98, 82, '満月', 11, C.gray, 'end', true), ci(160, 126, 7, undefined, C.gray, FILL.gray), lb(160, 150, '下弦', 11, C.gray, 'middle', true), ...m('新月→上弦→満月→下弦')] },
  { note: '❓午後6時は、太陽がしずむころで、太陽は地球から見て右（西）の方向です。そのとき、南の空は、太陽の方向から90°はなれた方向にあたります。', add: m('夕方、南の方向＝太陽から90°') },
  { note: '南の空で最も高くなる月は、太陽と90°をなす位置の月で、右半分が光る上弦の月です。(1)の答えです。', add: [ci(160, 30, 9, undefined, C.red, FILL.red), ...m('(1) 太陽と90°→上弦の月', C.red, FILL.red)] },
  { note: '月は、約29.5日で満ち欠けを1周します。7日では、約90°進みます。', add: [ar(152, 34, 120, 66, C.blue), ...m('7日で約90°進む', C.blue, FILL.blue)] },
  { note: '7日後には、太陽と反対側の位置に来ます。(2)の答えは、満月です。', add: [ci(112, 78, 9, undefined, C.red, FILL.red), ...m('(2) 7日後＝満月', C.red, FILL.red)] },
  { note: '確かめます。新月から上弦まで約7.4日、満月まで約14.8日。上弦の7日後が満月という順番に合います。', add: fresh(...flow(['新月', '上弦\n約7日', '満月\n約15日'], 60, { h: 50, size: 12 }).flat(), ...m('上弦の約7日後が満月', C.green, FILL.green)) },
], '答え：(1) 上弦の月 (2) 満月');

// ═════════ 社会 ═════════
const circlePts = (cx: number, cy: number, r: number, n = 36): [number, number][] =>
  Array.from({ length: n }, (_, i) => [Math.round((cx + r * Math.cos((2 * Math.PI * i) / n)) * 10) / 10, Math.round((cy + r * Math.sin((2 * Math.PI * i) / n)) * 10) / 10] as [number, number]);
const ringPoly = (cx: number, cy: number, r: number, color?: string, fill?: string): DiagramElement => pg(circlePts(cx, cy, r), color, fill);
/** 年表の1行（左：年代、右：出来事）。i は 0 から。 */
const row = (i: number, left: string, right: string, color: string = C.main, fill: string = FILL.warm): DiagramElement[] => [
  bx(14, 14 + i * 38, 76, 30, left, color, fill, 11), bx(96, 14 + i * 38, 210, 30, right, color, fill, 11),
];

// s01 時差
const s01 = show([
  { note: '東京は東経135°、ニューヨークは西経75°の経線を標準時子午線としています。', add: [bx(20, 30, 130, 44, '東京\n東経135°', C.main, FILL.warm, 12), bx(170, 30, 130, 44, 'ニューヨーク\n西経75°', C.blue, FILL.blue, 12), ...m('東京とニューヨークの時差')] },
  { note: '❓東経と西経は、本初子午線をはさんで反対側にあります。だから、経度の差は足し算です。135＋75＝210°。', add: [ar(150, 52, 170, 52, C.gray), ...m('経度の差＝135＋75＝210°', C.red, FILL.red)] },
  { note: '地球は24時間で360°回るので、経度15°で1時間の時差です。210÷15＝14時間。', add: m('時差＝210÷15＝14時間', C.red, FILL.red) },
  { note: '東京は6月1日の午後10時（22時）です。', add: [bx(20, 92, 130, 34, '6月1日 22時', C.main, FILL.warm, 12), ...m('東京は6月1日22時')] },
  { note: '東にある東京のほうが時刻が進んでいるので、ニューヨークは14時間おそくなります。', add: [bx(170, 92, 130, 34, '？', C.blue, FILL.blue, 12), ar(150, 109, 170, 109, C.blue), ...m('ニューヨークは14時間おそい', C.blue, FILL.blue)] },
  { note: '22−14＝8。ニューヨークは、同じ日（6月1日）の午前8時です。', add: [cover(170, 92, 130, 34), bx(170, 92, 130, 34, '6月1日 8時', C.red, FILL.red, 12), ...m('答え 6月1日午前8時', C.red, FILL.red)] },
  { note: '確かめます。ニューヨークの8時に14時間を足すと22時で、東京の時刻にもどります。', add: fresh(bx(30, 40, 260, 34, '8時＋14時間＝22時', C.blue, FILL.blue, 13), bx(30, 100, 260, 34, '東京の22時と一致', C.green, FILL.green, 13), ...m('答え 6月1日午前8時', C.red, FILL.red)) },
], '答え：6月1日午前8時');

// s02 縮尺
const s02 = show([
  { note: '2万5千分の1の地形図で、駅から神社までを測ると4.8cmでした。', add: [ln(30, 70, 222, 70, C.main, false, 4), ln(30, 62, 30, 78, C.main), ln(222, 62, 222, 78, C.main), lb(126, 56, '地図上 4.8cm', 12, C.main, 'middle', true), ...m('縮尺は 1/25000')] },
  { note: '❓縮尺1/25000は、実際の長さを25000分の1にしたということ。だから、地図上の長さに25000をかければ、実際の長さです。', add: m('実際＝地図上×25000', C.blue, FILL.blue) },
  { note: '4.8×25000＝120000cm です。', add: m('4.8×25000＝120000cm') },
  { note: '1m＝100cmなので、120000÷100＝1200m。(1)の答えです。', add: m('(1) 120000÷100＝1200m', C.red, FILL.red) },
  { note: '分速80mで歩くと、1200÷80＝15分かかります。(2)の答えです。', add: m('(2) 1200÷80＝15分', C.red, FILL.red) },
  { note: '確かめます。2万5千分の1では、地図上の1cmが実際の250mです。', add: fresh(bx(30, 30, 260, 34, '1cm＝250m', C.blue, FILL.blue, 13), bx(30, 90, 260, 34, '4.8×250＝1200m', C.blue, FILL.blue, 13), ...m('120000cmの計算と一致', C.green, FILL.green)) },
  { note: '地図の読み取りでは、縮尺の分母をかけて、cm→mに直すのが基本です。', add: m('答え (1) 1200m (2) 15分', C.red, FILL.red) },
], '答え：(1) 1200m (2) 15分');

// s05 人口構成（1px＝300人）
const popBar = (): DiagramElement[] => [bx(25, 40, 27, 34, '年少', C.green, FILL.green, 10), bx(52, 40, 133, 34, '生産年齢', C.blue, FILL.blue, 11), bx(185, 40, 107, 34, '老年', C.red, FILL.red, 11), lb(38, 90, '8,000', 10, C.gray, 'middle', true), lb(118, 90, '40,000', 10, C.gray, 'middle', true), lb(238, 90, '32,000', 10, C.gray, 'middle', true)];
const s05 = show([
  { note: 'ある町の人口は、年少8,000人、生産年齢40,000人、老年32,000人です。', add: [bx(15, 30, 90, 34, '年少\n8,000人', C.green, FILL.green, 11), bx(115, 30, 90, 34, '生産年齢\n40,000人', C.blue, FILL.blue, 11), bx(215, 30, 90, 34, '老年\n32,000人', C.red, FILL.red, 11), ...m('3つの人口がわかっている')] },
  { note: '3つを合わせた総人口は 8000＋40000＋32000＝80000人です。棒の長さで表します（1pxを300人として描いています）。', add: fresh(...popBar(), ...m('総人口は80,000人')) },
  { note: '❓割合は、総人口でわります。老年人口は 32000÷80000＝0.4で、40％です。', add: [lb(238, 32, '40％', 12, C.red, 'middle', true), ...m('老年の割合＝32000÷80000', C.red, FILL.red)] },
  { note: '(1)の答えは40％です。', add: m('(1) 40％', C.red, FILL.red) },
  { note: '次に、働く世代がささえる人数です。ささえられる側は、年少8,000＋老年32,000＝40,000人。', add: fresh(bx(30, 30, 260, 34, '年少＋老年＝8,000＋32,000', C.gray, FILL.gray, 13), bx(30, 90, 260, 34, '＝40,000人', C.blue, FILL.blue, 13), ...m('ささえられる側は40,000人')) },
  { note: 'ささえる側の生産年齢人口は40,000人。40000÷40000＝1人です。(2)の答えです。', add: m('(2) 40000÷40000＝1人', C.red, FILL.red) },
  { note: '確かめます。割合は年少10％、生産年齢50％、老年40％で、合計100％。ささえ方は 50％÷50％＝1人で一致します。', add: fresh(bx(30, 30, 260, 34, '10％＋50％＋40％＝100％', C.blue, FILL.blue, 13), bx(30, 90, 260, 34, '（10＋40）÷50＝1人', C.blue, FILL.blue, 13), ...m('答え (1) 40％ (2) 1人', C.red, FILL.red)) },
], '答え：(1) 40％ (2) 1人');

// s06 緯度と距離
const globe = (): DiagramElement[] => [ringPoly(160, 90, 60, C.gray, FILL.blue), ln(100, 90, 220, 90, C.gray, true), ln(160, 90, 160, 28, C.gray, true)];
const s06 = show([
  { note: '地球を、北極と南極を通る面で切った図です。地球1周は4万kmとします。', add: [...globe(), lb(232, 94, '赤道', 10, C.gray, 'start', true), ...m('地球1周＝4万km')] },
  { note: '北緯36°の地点は、地球の中心から見て、赤道から36°上にあります。', add: [ci(208, 55, 4, undefined, C.red, C.red), ln(160, 90, 208, 55, C.red), lb(216, 52, '北緯36°', 11, C.red, 'start', true), ...m('北緯36°の地点', C.red, FILL.red)] },
  { note: '北極点は北緯90°です。', add: [ci(160, 30, 4, undefined, C.blue, C.blue), lb(160, 20, '北極点（90°）', 11, C.blue, 'middle', true), ...m('北極点は90°', C.blue, FILL.blue)] },
  { note: '❓北緯36°から北極点まで、中心から見た角度は、90−36＝54°です。', add: [sc(160, 90, 24, 36, 90, C.main, FILL.warm), ...m('角度の差＝90−36＝54°')] },
  { note: '360°が4万kmなので、54°は 40000×54÷360＝6000kmです。', add: m('40000×54÷360＝6000km', C.red, FILL.red) },
  { note: '確かめます。赤道から北極点までの90°は、地球1周の1/4で10000km。54°は90°の 54/90＝3/5 なので、10000×3/5＝6000kmです。', add: fresh(bx(30, 30, 260, 34, '90°ぶん＝40000÷4＝10000km', C.gray, FILL.gray, 12), bx(30, 90, 260, 34, '10000×54/90＝6000km', C.blue, FILL.blue, 13), ...m('答え 6000km で一致', C.green, FILL.green)) },
  { note: '2点が同じ経線の上にあるとき、緯度の差から距離が求められます。', add: m('答え 6000km', C.red, FILL.red) },
], '答え：6000km');

// s11 人口密度
const s11 = show([
  { note: 'A県は面積4,200km²・人口168万人。B県は面積6,000km²・人口密度70人/km²です。', add: [bx(15, 24, 140, 66, 'A県\n4,200km²\n168万人', C.blue, FILL.blue, 11), bx(165, 24, 140, 66, 'B県\n6,000km²\n密度70人/km²', C.green, FILL.green, 11), ...m('2つの県が合併する')] },
  { note: '❓B県の人口は、人口密度×面積です。70×6000＝420,000人（42万人）。', add: m('B県の人口＝70×6000＝42万人', C.green, FILL.green) },
  { note: '合併後の人口は、168万＋42万＝210万人です。', add: m('合併後の人口＝210万人') },
  { note: '合併後の面積は、4200＋6000＝10200km²です。', add: m('合併後の面積＝10200km²') },
  { note: '合併後の人口密度は、人口の合計÷面積の合計＝2100000÷10200≒205.88。四捨五入して約206人/km²です。', add: m('2100000÷10200≒206人/km²', C.red, FILL.red) },
  { note: '確かめます。A県の人口密度は 1680000÷4200＝400人/km²。400と70を単純に平均すると235ですが、B県のほうが面積が大きいので、それより小さくなるのは自然です。', add: fresh(bx(30, 30, 260, 34, 'A県の密度：400人/km²', C.blue, FILL.blue, 13), bx(30, 90, 260, 34, '単純な平均235ではない', C.gray, FILL.gray, 13), ...m('答え 約206人/km²', C.red, FILL.red)) },
  { note: '合併後は、人口の合計を、面積の合計でわります。', add: m('答え 約206人/km²', C.red, FILL.red) },
], '答え：約206人/km²');

// s14 領海と排他的経済水域（1海里＝1.25px）
const sea14 = (): DiagramElement[] => [bx(10, 60, 20, 50, '陸', C.gray, FILL.gray, 11), ln(30, 60, 30, 110, C.ink, false, 3), lb(30, 124, '海岸線', 10, C.gray, 'middle', true)];
const s14 = show([
  { note: '海岸線から沖へ向かって、領海と排他的経済水域が広がっています（図では1海里を1.25pxで描いています）。', add: [...sea14(), ...m('海岸線から200海里まで')] },
  { note: '領海は、海岸線から12海里までです。国の主権がおよぶ海です。', add: [bx(30, 70, 15, 30, undefined, C.blue, FILL.blue), lb(38, 62, '領海12海里', 10, C.blue, 'start', true), ...m('領海＝12海里', C.blue, FILL.blue)] },
  { note: 'その外側から200海里までが、排他的経済水域です。水産資源などを沿岸国が使える海です。', add: [bx(45, 70, 235, 30, '排他的経済水域（188海里）', C.green, FILL.green, 11), ...m('その外側が排他的経済水域', C.green, FILL.green)] },
  { note: '❓1海里は1852mです。海岸線から200海里は 200×1852＝370400m。', add: [ar(30, 140, 280, 140, C.red), lb(155, 154, '200海里', 11, C.red, 'middle', true), ...m('200×1852＝370400m', C.red, FILL.red)] },
  { note: '370400mは約370kmです。(1)の答えです。', add: m('(1) 約370km', C.red, FILL.red) },
  { note: '(2)排他的経済水域の幅は、200−12＝188海里。188×1852＝348176m で、約348kmです。', add: m('(2) 188×1852≒348km', C.red, FILL.red) },
  { note: '確かめます。12海里は 12×1852＝22224mで約22km。370−22＝348kmで一致します。', add: fresh(bx(30, 30, 260, 34, '12海里＝約22km', C.blue, FILL.blue, 13), bx(30, 90, 260, 34, '370−22＝348km', C.blue, FILL.blue, 13), ...m('答え (1) 約370km (2) 約348km', C.red, FILL.red, 12)) },
], '答え：(1) 約370km (2) 約348km');

// s15 弥生〜古墳
const s15 = show([
  { note: 'ア〜エの4つの出来事を、古い順にならべます。', add: [...m('ア〜エを年代順にならべる')] },
  { note: 'ア 稲作は、縄文時代の終わりから弥生時代のはじめ（紀元前4世紀ごろ）に、九州北部に伝わりました。', add: [...row(0, '前4世紀ごろ', 'ア 稲作が九州北部に伝わる')] },
  { note: 'イ 卑弥呼が魏に使いを送ったのは、239年（3世紀の前半）です。', add: [...row(1, '239年', 'イ 卑弥呼が魏に使いを送る', C.blue, FILL.blue)] },
  { note: 'ウ 前方後円墳が各地につくられはじめるのは、3世紀の後半からです。', add: [...row(2, '3世紀後半', 'ウ 前方後円墳がつくられはじめる', C.green, FILL.green)] },
  { note: 'エ 倭の五王が中国の南朝に使いを送るのは、5世紀です。', add: [...row(3, '5世紀', 'エ 倭の五王が南朝に使いを送る', C.purple, FILL.purple)] },
  { note: '❓世紀の小さい順にならべます。前4世紀→3世紀前半→3世紀後半→5世紀の順です。', add: m('古い順は ア→イ→ウ→エ', C.red, FILL.red) },
  { note: '確かめます。ウ（前方後円墳）をイ（卑弥呼）より前と考えるのが、よくあるまちがいです。巨大な前方後円墳は、3世紀の後半からです。', add: m('ウはイより後（3世紀後半）', C.green, FILL.green) },
], '答え：ア→イ→ウ→エ');

// s18 院政〜平氏滅亡
const s18 = show([
  { note: '白河上皇が院政を始めた1086年から、壇ノ浦の戦いで平氏がほろんだ1185年までを調べます。', add: [...m('1086年〜1185年の年数は？')] },
  { note: '1086年に、白河上皇が院政を始めました。', add: [...row(0, '1086年', '白河上皇が院政を始める')] },
  { note: '1156年に保元の乱、', add: [...row(1, '1156年', '保元の乱がおこる', C.blue, FILL.blue)] },
  { note: '1159年に平治の乱がおこり、平清盛が武士として力をのばしました。', add: [...row(2, '1159年', '平治の乱がおこる', C.blue, FILL.blue)] },
  { note: '1185年に、壇ノ浦の戦いで、平氏がほろびました。', add: [...row(3, '1185年', '壇ノ浦で平氏がほろぶ', C.green, FILL.green)] },
  { note: '❓年数は、あとの年から前の年を引きます。1185−1086＝99年です。', add: m('1185−1086＝99年', C.red, FILL.red) },
  { note: '確かめます。年は 1086→1156→1159→1185 と増える順で、99年に一致します。この間の内乱は、保元の乱と平治の乱です。', add: m('99年。保元の乱と平治の乱', C.green, FILL.green) },
], '答え：99年。保元の乱と平治の乱');

// s22 江戸の改革の順
const s22 = show([
  { note: '江戸時代の4つの政策を、古い順にならべます。', add: [...m('A〜Dを古い順にならべる')] },
  { note: 'A 上げ米は、8代将軍徳川吉宗の享保の改革で、1722年に出されました。', add: [...row(0, '1722年ごろ', 'A 上げ米（徳川吉宗）')] },
  { note: 'B 株仲間の公認は、老中田沼意次の政治（1767〜86年）です。商人の力を使いました。', add: [...row(1, '1767〜86年', 'B 株仲間の公認（田沼意次）', C.blue, FILL.blue)] },
  { note: 'C 囲い米は、松平定信の寛政の改革（1787年〜）です。田沼の政治をあらためました。', add: [...row(2, '1787年〜', 'C 囲い米（松平定信）', C.green, FILL.green)] },
  { note: 'D 株仲間の解散は、水野忠邦の天保の改革（1841年〜）です。', add: [...row(3, '1841年〜', 'D 株仲間の解散（水野忠邦）', C.purple, FILL.purple)] },
  { note: '❓人名と年代を順に見ます。吉宗→田沼→定信→忠邦です。', add: m('古い順は A→B→C→D', C.red, FILL.red) },
  { note: '確かめます。同じ「株仲間」でも、Bは公認、Dは解散で、田沼から忠邦までのあいだに政策が逆になったと分かります。', add: m('B（公認）→D（解散）', C.green, FILL.green) },
], '答え：A→B→C→D');

// s24 地租改正
const s24 = show([
  { note: '地価2,400円の土地の地租を、1873年の地租改正の税率（3％）と、1877年以降の税率（2.5％）で比べます。', add: [bx(40, 30, 240, 34, '地価 2,400円', C.gray, FILL.gray, 13), ...m('税率3％→2.5％に引き下げ')] },
  { note: '1873年の地租は、地価の3％を現金でおさめます。2400×0.03＝72円。', add: [ar(160, 65, 160, 80, C.main), bx(40, 82, 240, 34, '3％：2400×0.03＝72円', C.red, FILL.red, 13), ...m('1873年は72円', C.red, FILL.red)] },
  { note: '❓2.5％は、小数に直すと0.025です。2400×0.025＝60円。', add: [bx(40, 124, 240, 34, '2.5％：2400×0.025＝60円', C.blue, FILL.blue, 13), ...m('1877年以降は60円', C.blue, FILL.blue)] },
  { note: '2つの地租の差は、72−60＝12円です。', add: fresh(bx(40, 30, 240, 34, '72円−60円', C.gray, FILL.gray, 13), ar(160, 65, 160, 80, C.main), bx(40, 82, 240, 34, '差は12円', C.red, FILL.red, 14), ...m('答え 12円', C.red, FILL.red)) },
  { note: '確かめます。税率の差は 3−2.5＝0.5％。2400×0.005＝12円で一致します。', add: fresh(bx(40, 30, 240, 34, '税率の差 3−2.5＝0.5％', C.gray, FILL.gray, 13), bx(40, 90, 240, 34, '2400×0.005＝12円', C.blue, FILL.blue, 13), ...m('一致する', C.green, FILL.green)) },
  { note: '地租改正は、収穫量に関係なく、地価に対して一定の割合の税を現金でおさめさせるしくみでした。', add: m('地価の一定割合を現金で', C.main, FILL.warm) },
  { note: '農民の負担は重く、各地で一揆が起こったため、税率が引き下げられました。', add: m('答え 12円', C.red, FILL.red) },
], '答え：12円');

// s28 市民革命の文書
const s28 = show([
  { note: 'A〜Cの3つの文書を、古い順にならべます。', add: [...m('A〜Cを古い順にならべる')] },
  { note: 'A 権利章典は、イギリスの名誉革命のあと、1689年に出されました。議会の権利を確かなものにしました。', add: [...row(0, '1689年', 'A 権利章典（イギリス）')] },
  { note: 'B 独立宣言は、アメリカがイギリスから独立するときの1776年の文書です。', add: [...row(1, '1776年', 'B 独立宣言（アメリカ）', C.blue, FILL.blue)] },
  { note: 'C 人権宣言は、フランス革命の1789年の文書です。', add: [...row(2, '1789年', 'C 人権宣言（フランス）', C.green, FILL.green)] },
  { note: '❓年の小さい順は、1689→1776→1789です。', add: m('古い順は A→B→C', C.red, FILL.red) },
  { note: '確かめます。フランスの人権宣言は、アメリカの独立宣言をお手本にしました。だから、Cのほうが後です。', add: m('B（1776）→C（1789）', C.green, FILL.green) },
  { note: '時代が進むほど、国王の権力を制限する文書から、人民の権利を広くうたう文書になります。', add: m('答え A→B→C', C.red, FILL.red) },
], '答え：A→B→C');

// s30 衆議院の優越（400人＝280px）
const s30 = show([
  { note: '衆議院の出席議員は400人です。参議院が否決した法律案を再可決するには、出席議員の3分の2以上の賛成が必要です。', add: [bx(20, 60, 280, 30, '出席議員 400人', C.blue, FILL.blue, 13), ...m('3分の2以上の賛成が必要')] },
  { note: '❓400人の3分の2は 400×2÷3＝266.66…人です。小数になります。', add: m('400×2÷3＝266.66…人', C.main, FILL.warm) },
  { note: '3分の2の位置に線を引くと、266.66…人のところです（図では1人を0.7pxで描いています）。', add: [ln(207, 50, 207, 100, C.red, true, 2), lb(207, 44, '266.66…', 10, C.red, 'middle', true)] },
  { note: '266人では、線に足りません。266÷400＝0.665で、3分の2（0.6666…）より小さいからです。', add: m('266人では足りない', C.gray, FILL.gray) },
  { note: '「3分の2以上」なので、266.66…以上の整数のうち、最も小さい整数が必要です。それは267人です。', add: m('267人なら 2/3 以上', C.red, FILL.red) },
  { note: '確かめます。267÷400＝0.6675で、0.6666…以上です。', add: fresh(bx(30, 30, 260, 34, '267÷400＝0.6675', C.blue, FILL.blue, 13), bx(30, 90, 260, 34, '0.6675 ≧ 0.6666…', C.blue, FILL.blue, 13), ...m('答え 267人', C.red, FILL.red)) },
  { note: '「以上」では、小数点以下を切り上げます。切り捨てて266人とするのが、よくあるまちがいです。', add: m('切り上げて267人', C.red, FILL.red) },
], '答え：267人');

// s31 解散から特別国会
const s31 = show([
  { note: '衆議院が解散されると、40日以内に総選挙、総選挙から30日以内に特別国会が召集されます（図では1日を3pxで描いています）。', add: [ci(30, 95, 4, undefined, C.red, C.red), lb(30, 80, '解散', 11, C.red, 'middle', true), ...m('解散→総選挙→特別国会')] },
  { note: '解散の日から総選挙までは、最長40日です。', add: [bx(30, 90, 120, 30, '40日以内', C.blue, FILL.blue, 12), ci(150, 95, 4, undefined, C.blue, C.blue), lb(150, 80, '総選挙', 11, C.blue, 'middle', true), ...m('解散から総選挙まで最長40日', C.blue, FILL.blue)] },
  { note: '総選挙の日から特別国会の召集までは、最長30日です。', add: [bx(150, 90, 90, 30, '30日以内', C.green, FILL.green, 12), ci(240, 95, 4, undefined, C.green, C.green), lb(240, 80, '特別国会', 11, C.green, 'middle', true), ...m('総選挙から召集まで最長30日', C.green, FILL.green)] },
  { note: '❓どの日から数えるかに気をつけます。30日は、解散の日ではなく、総選挙の日から数えます。', add: m('30日は総選挙の日から数える', C.red, FILL.red) },
  { note: '2つの期間を続けて足すと、40＋30＝70日です。', add: [ar(30, 144, 240, 144, C.red), lb(135, 160, '70日', 12, C.red, 'middle', true), ...m('最長 40＋30＝70日', C.red, FILL.red)] },
  { note: '確かめます。解散から数えて40日目に総選挙、そのさらに30日後（70日目）が召集の期限です。', add: fresh(bx(30, 30, 260, 34, '40日目に総選挙', C.blue, FILL.blue, 13), bx(30, 90, 260, 34, 'その30日後＝70日目', C.green, FILL.green, 13), ...m('答え 70日', C.red, FILL.red)) },
  { note: '総選挙のあと、新しい国会で、内閣総理大臣の指名が行われます。', add: m('答え 70日', C.red, FILL.red) },
], '答え：70日');

// s33 ドント方式
const cx33 = [70, 140, 210];
const dcell = (c: number, r: number, v: number, hi = false): DiagramElement => bx(cx33[c], 44 + r * 24, 60, 22, String(v), hi ? C.red : C.gray, hi ? FILL.red : FILL.gray, 11);
const dv = [[4800, 2400, 1600, 1200], [3000, 1500, 1000, 750], [1440, 720, 480, 360]];
const dtop = new Set(['0,0', '1,0', '0,1', '0,2', '1,1', '2,0']);
const dhead = (): DiagramElement[] => [bx(70, 18, 60, 22, 'A党4800', C.blue, FILL.blue, 10), bx(140, 18, 60, 22, 'B党3000', C.green, FILL.green, 10), bx(210, 18, 60, 22, 'C党1440', C.purple, FILL.purple, 10), ...[1, 2, 3, 4].map((k, r) => bx(20, 44 + r * 24, 44, 22, `÷${k}`, C.gray, FILL.gray, 11))];
const s33 = show([
  { note: '定数6人のドント方式です。A党は4800票、B党は3000票、C党は1440票です。', add: [...dhead(), ...m('得票数を1、2、3…でわる')] },
  { note: '❓A党の得票数を、1、2、3、4でわった商です。', add: [...dv[0].map((v, r) => dcell(0, r, v))] },
  { note: 'B党の商です。', add: [...dv[1].map((v, r) => dcell(1, r, v))] },
  { note: 'C党の商です。', add: [...dv[2].map((v, r) => dcell(2, r, v))] },
  { note: '商を大きい順に6つ選びます。4800（A）、3000（B）、2400（A）、1600（A）、1500（B）、1440（C）。', add: fresh(...dhead(), ...[0, 1, 2].flatMap((c) => dv[c].map((v, r) => dcell(c, r, v, dtop.has(`${c},${r}`)))), ...m('大きい順に6つ（赤）を選ぶ', C.red, FILL.red)) },
  { note: 'A党は赤が3つ、B党は2つ、C党は1つです。', add: m('A党3人、B党2人、C党1人', C.red, FILL.red) },
  { note: '確かめます。議席の合計は 3＋2＋1＝6で、定数と一致します。7番目の商は1200（A党）で、6番目の1440より小さいので、枠に入りません。', add: m('3＋2＋1＝6人で一致', C.green, FILL.green) },
], '答え：A党3人、B党2人、C党1人');

// s34 直接請求
const s34 = show([
  { note: '有権者が12万人の市で、住民が直接請求を行います。', add: [bx(40, 40, 240, 34, '有権者 120,000人', C.gray, FILL.gray, 13), ...m('必要な署名の数を求める')] },
  { note: '(1)条例の制定の請求は、有権者の50分の1以上の署名が必要です。', add: [ar(160, 75, 160, 90, C.main), bx(40, 92, 240, 34, '条例の制定：1/50以上', C.blue, FILL.blue, 13), ...m('条例の制定は 1/50')] },
  { note: '120000÷50＝2400人です。(1)の答えです。', add: m('(1) 120000÷50＝2400人', C.red, FILL.red) },
  { note: '❓(2)市長の解職は、重い請求なので、有権者の3分の1以上（有権者40万人以下の場合）が必要です。', add: fresh(bx(40, 40, 240, 34, '市長の解職：1/3以上', C.green, FILL.green, 13), ...m('解職請求は 1/3 以上', C.green, FILL.green)) },
  { note: '120000÷3＝40000人です。(2)の答えです。', add: m('(2) 120000÷3＝40000人', C.red, FILL.red) },
  { note: '確かめます。(2)は(1)の 40000÷2400＝約16.7倍です。解職請求のほうが、条例の制定よりずっと重い請求だと分かります。', add: fresh(bx(40, 30, 240, 34, '40000÷2400＝約16.7倍', C.blue, FILL.blue, 13), bx(40, 90, 240, 34, '重い請求ほど割合が大きい', C.blue, FILL.blue, 13), ...m('答え (1) 2400人 (2) 40000人', C.red, FILL.red, 12)) },
  { note: '条例の制定・監査請求は50分の1、議会の解散・首長や議員の解職は3分の1（40万人以下）です。', add: m('50分の1と3分の1を区別', C.main, FILL.warm) },
], '答え：(1) 2400人以上 (2) 40000人以上');

// s35 需要と供給（軸：x＝60＋数量×3、y＝160−価格×0.3）
const axes35 = (): DiagramElement[] => [ln(50, 160, 50, 28, C.ink), ln(50, 160, 310, 160, C.ink), lb(50, 22, '価格', 10, C.ink, 'middle', true), lb(312, 154, '数量', 10, C.ink, 'end', true), lb(46, 134, '100円', 10, C.gray, 'end', true), lb(46, 74, '300円', 10, C.gray, 'end', true), lb(46, 44, '400円', 10, C.gray, 'end', true)];
const s35 = show([
  { note: '横軸に数量、縦軸に価格をとります。価格が上がると、買いたい量（需要量）は減ります。', add: [...axes35(), ln(300, 130, 240, 100, C.blue, false, 2), ln(240, 100, 180, 70, C.blue, false, 2), ln(180, 70, 120, 40, C.blue, false, 2), lb(300, 118, '需要', 11, C.blue, 'middle', true), ...m('高いと需要量は減る', C.blue, FILL.blue)] },
  { note: '価格が上がると、売りたい量（供給量）は増えます。', add: [ln(90, 130, 135, 100, C.red, false, 2), ln(135, 100, 180, 70, C.red, false, 2), ln(180, 70, 225, 40, C.red, false, 2), lb(236, 44, '供給', 11, C.red, 'start', true), ...m('高いと供給量は増える', C.red, FILL.red)] },
  { note: '❓2本の線が交わる点では、需要量と供給量が等しく（40個）、価格は300円です。これが均衡価格です。(1)の答えです。', add: [ci(180, 70, 4, undefined, C.ink, C.ink), ...m('(1) 均衡価格は300円', C.ink, FILL.gray)] },
  { note: '価格が400円のとき、需要量は20個、供給量は55個です。', add: [ln(50, 40, 310, 40, C.gray, true), ...m('400円：需要20個、供給55個', C.gray, FILL.gray)] },
  { note: '供給量が需要量より多いぶんが、売れ残りです。55−20＝35個。(2)の答えです。', add: [ln(120, 36, 225, 36, C.red, false, 3), ...m('(2) 売れ残り＝55−20＝35個', C.red, FILL.red)] },
  { note: '確かめます。400円は均衡価格より高いので、売れ残りが出ます。売れ残りが出ると、価格は下がって、300円に向かいます。', add: m('高い→売れ残り→価格が下がる', C.green, FILL.green) },
  { note: '反対に、価格が均衡価格より低いと、品不足が起こり、価格は上がります。', add: m('答え (1) 300円 (2) 35個', C.red, FILL.red) },
], '答え：(1) 300円 (2) 35個');

// s36 為替
const s36 = show([
  { note: '1ドル＝150円のとき、日本の15,000円の商品は、アメリカで何ドルでしょう。', add: [bx(40, 30, 240, 34, '日本での値段 15,000円', C.gray, FILL.gray, 13), ar(160, 65, 160, 80, C.main), bx(40, 82, 240, 34, '15000÷150＝100ドル', C.blue, FILL.blue, 13), ...m('1ドル＝150円なら100ドル')] },
  { note: '為替相場が、1ドル＝120円に変わりました。', add: fresh(bx(40, 40, 240, 34, '1ドル＝150円 → 120円', C.main, FILL.warm, 13), ...m('為替相場が変わった')) },
  { note: '❓ドルでの値段は、円での値段を、1ドルの円の数でわります。15000÷120＝125ドル。(1)の答えです。', add: [ar(160, 75, 160, 90, C.main), bx(40, 92, 240, 34, '15000÷120＝125ドル', C.red, FILL.red, 13), ...m('(1) 125ドル', C.red, FILL.red)] },
  { note: '100ドルから125ドルに、アメリカでの値段が上がりました。', add: m('100ドル→125ドルに上がる', C.blue, FILL.blue) },
  { note: '1ドルを手に入れるのに必要な円が、150円から120円に減りました。円の価値が高くなったので、円高です。(2)の答えです。', add: m('(2) 円高', C.red, FILL.red) },
  { note: '円高になると、日本の商品はアメリカで高くなり、輸出に不利です。反対に、外国の商品は、日本で安くなり、輸入に有利です。', add: m('円高：輸出に不利、輸入に有利', C.green, FILL.green) },
  { note: '確かめます。円安（1ドルの円が増える）なら、日本の商品は外国で安くなります。逆の変化なので、答えと合います。', add: m('答え (1) 125ドル (2) 円高', C.red, FILL.red) },
], '答え：(1) 125ドル (2) 円高');

// s37 累進課税（1万円＝0.4px）
const s37 = show([
  { note: '課税所得が650万円の人の所得税を求めます。400万円までは10％、超えた部分は20％です。', add: [bx(30, 50, 260, 30, '課税所得 650万円', C.gray, FILL.gray, 13), ...m('区切りごとに税率がちがう')] },
  { note: '❓650万円全体に20％をかけてはいけません。税率が変わる400万円で、2つの部分に分けます（図では1万円を0.4pxで描いています）。', add: fresh(bx(30, 50, 160, 30, '400万円まで', C.blue, FILL.blue, 12), bx(190, 50, 100, 30, '超えた250万円', C.red, FILL.red, 11), ...m('400万円で2つに分ける')) },
  { note: '400万円までの部分の税は、400×0.10＝40万円です。', add: [bx(30, 100, 160, 30, '×10％＝40万円', C.blue, FILL.blue, 12), ...m('前半の税＝40万円', C.blue, FILL.blue)] },
  { note: '超えた部分は 650−400＝250万円。税は 250×0.20＝50万円です。', add: [bx(190, 100, 100, 30, '×20％＝50万円', C.red, FILL.red, 10), ...m('後半の税＝50万円', C.red, FILL.red)] },
  { note: '合計は 40＋50＝90万円です。答えです。', add: m('合計 40＋50＝90万円', C.red, FILL.red) },
  { note: '確かめます。90÷650≒0.138で、平均の税率は約13.8％。10％と20％のあいだに入っています。', add: fresh(bx(30, 30, 260, 34, '90÷650≒13.8％', C.blue, FILL.blue, 13), bx(30, 90, 260, 34, '10％と20％のあいだ', C.blue, FILL.blue, 13), ...m('答え 90万円', C.red, FILL.red)) },
  { note: '累進課税は、所得が多いほど税率が高くなるしくみです。', add: m('答え 90万円', C.red, FILL.red) },
], '答え：90万円');

export const figuresHonshikenSchool_koko_waseda_jitsugyo_B: Record<string, Figure> = {
  [K('rika', 1)]: r01,
  [K('rika', 2)]: r02,
  [K('rika', 3)]: r03,
  [K('rika', 4)]: r04,
  [K('rika', 6)]: r06,
  [K('rika', 7)]: r07,
  [K('rika', 9)]: r09,
  [K('rika', 10)]: r10,
  [K('rika', 12)]: r12,
  [K('rika', 14)]: r14,
  [K('rika', 16)]: r16,
  [K('rika', 18)]: r18,
  [K('rika', 25)]: r25,
  [K('rika', 32)]: r32,
  [K('rika', 34)]: r34,
  [K('rika', 35)]: r35,
  [K('rika', 36)]: r36,
  [K('rika', 37)]: r37,
  [K('rika', 40)]: r40,
  [K('shakai', 1)]: s01,
  [K('shakai', 2)]: s02,
  [K('shakai', 5)]: s05,
  [K('shakai', 6)]: s06,
  [K('shakai', 11)]: s11,
  [K('shakai', 14)]: s14,
  [K('shakai', 15)]: s15,
  [K('shakai', 18)]: s18,
  [K('shakai', 22)]: s22,
  [K('shakai', 24)]: s24,
  [K('shakai', 28)]: s28,
  [K('shakai', 30)]: s30,
  [K('shakai', 31)]: s31,
  [K('shakai', 33)]: s33,
  [K('shakai', 34)]: s34,
  [K('shakai', 35)]: s35,
  [K('shakai', 36)]: s36,
  [K('shakai', 37)]: s37,
};
