// 理科 第6批（formulas-rika-tsuika6.ts）の動く図解スライド。
// キーは項目の label（買い切りの識別キーと同じ）。「なぜ？」の連鎖で、根っこまでたどる。
// 中学受験向けなので、むずかしい漢字には（よみ）を添える。エネルギー・加速度などの語は使わない。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, show, band, fresh, flow } from './diagram-kit';

const BY = 152; // 下の帯の開始位置

// ══ ふりこの実験 ══
const ceil = () => ln(30, 14, 290, 14, C.ink, false, 3);
const pend = (px: number, len: number, r: number, col: string = C.main, fill: string = FILL.warm): DiagramElement[] => [
  ln(px, 15, px, 15 + len, C.gray),
  ci(px, 15 + len, r, undefined, col, fill),
];
const swing = (deg: number, len: number, r: number, side: 1 | -1, dashed?: boolean): DiagramElement[] => {
  const a = (deg * Math.PI) / 180;
  const x = 160 + side * len * Math.sin(a);
  const y = 15 + len * Math.cos(a);
  return [ln(160, 15, x, y, C.gray, dashed), ci(x, y, r, undefined, C.main, FILL.warm)];
};
const furiko: DiagramFigure = show([
  {
    note: 'ふりこが1往復（おうふく）する時間を「周期（しゅうき）」といいます。❓この周期は、何で決まるのでしょう。調べる候補は、ふりこの長さ・おもりの重さ・ふれはばの3つです。',
    add: [ceil(), ...pend(160, 95, 11), bx(15, 150, 90, 30, '長さ', C.blue, FILL.blue, 13), bx(115, 150, 90, 30, '重さ', C.blue, FILL.blue, 13), bx(215, 150, 90, 30, 'ふれはば', C.blue, FILL.blue, 13), lb(160, 205, 'どれで周期が決まる？', 13, C.ink, 'middle', true)],
  },
  {
    note: '1往復とは、はなした場所から反対がわまで行って、もとの場所にもどってくるまでです。この1往復にかかる時間が周期です。',
    add: fresh(ceil(), ...swing(35, 95, 11, -1, true), ...swing(35, 95, 11, 1), ar(205, 128, 115, 128, C.blue), ar(115, 140, 205, 140, C.blue), lb(160, 175, '右 → 左 → 右にもどるまでが1往復', 12, C.blue, 'middle', true)),
  },
  {
    note: '❓なぜ、変える条件を1つだけにするのでしょう。長さも重さも同時に変えると、周期が変わったとき、どちらのせいなのか分からなくなるからです。',
    add: fresh(ceil(), ...pend(110, 60, 8), ...pend(210, 110, 15), ...band(BY, bx(40, 165, 240, 30, '長さも重さも変える → どっちのせい？', C.red, FILL.red, 12), lb(160, 214, '調べたい条件だけを変える', 12, C.ink, 'middle', true))),
  },
  {
    note: 'まず重さだけを変えます（長さとふれはばは同じ）。結果は、周期は変わりません。❓なぜ？ 重いおもりは、地球に引かれる力も大きいけれど、そのぶん動かしにくさも大きいのです。この2つが打ち消し合って、動きの速さは同じになります。',
    add: fresh(ceil(), ...pend(110, 95, 8), ...pend(210, 95, 16), lb(110, 135, '軽い', 11), lb(210, 140, '重い', 11), ...band(BY, bx(50, 168, 220, 32, '重さを変える → 周期は同じ', C.green, FILL.green, 14))),
  },
  {
    note: '次にふれはばだけを変えます。これも周期は変わりません。❓なぜ？ 大きくふると進む道のりは長くなりますが、そのぶん速く動くので、かかる時間は同じになります。',
    add: fresh(ceil(), ...swing(20, 95, 8, 1), ...swing(40, 95, 8, -1), lb(200, 122, '小さくふる', 10, C.gray, 'start'), lb(110, 108, '大きくふる', 10, C.gray, 'end'), ...band(BY, bx(40, 168, 240, 32, 'ふれはばを変える → 周期は同じ', C.green, FILL.green, 14))),
  },
  {
    note: '最後に長さだけを変えます。長いふりこは周期が長くなります。❓なぜ？ 長いふりこは、1往復で動く道のりが長いので、そのぶん時間がかかるからです。',
    add: fresh(ceil(), ...pend(110, 55, 9), ...pend(210, 115, 9), lb(110, 90, '短い', 11), lb(210, 150, '長い', 11), ...band(BY + 12, bx(40, 176, 240, 32, '長さを変える → 周期が変わる', C.red, FILL.red, 14))),
  },
  {
    note: '❓では、長さを何倍にすると周期は何倍？ 長さが 2×2＝4倍なら周期は2倍、3×3＝9倍なら周期は3倍です。長さ100cmが2秒なら、25cm（100の4分の1）は周期が半分の1秒になります。',
    add: fresh(bx(20, 24, 120, 40, '長さ 25cm\n周期 1秒', C.blue, FILL.blue, 13), bx(180, 24, 120, 40, '長さ 100cm\n周期 2秒', C.main, FILL.warm, 13), ar(142, 44, 178, 44, C.gray), lb(160, 34, '4倍', 12, C.red, 'middle', true), bx(20, 100, 120, 34, '長さ 1倍', C.gray, FILL.gray, 12), bx(180, 100, 120, 34, '長さ 9倍', C.gray, FILL.gray, 12), ar(142, 117, 178, 117, C.gray), lb(160, 108, '9倍', 12, C.red, 'middle', true), lb(80, 150, '周期 1倍', 12, C.ink), lb(240, 150, '周期 3倍', 12, C.ink, 'middle', true), lb(160, 200, '4倍なら2倍、9倍なら3倍', 13, C.green, 'middle', true)),
  },
  {
    note: '周期をはかるときは、10往復の時間をはかって10でわります。❓なぜ？ ストップウォッチを押すタイミングは0.2秒くらいずれます。1往復（2秒）だけだと大きなずれですが、10往復（20秒）ではかって10でわれば、ずれも10分の1の0.02秒になるからです。',
    add: fresh(bx(20, 20, 130, 40, '1往復だけ\nずれ0.2秒 → 大きい', C.red, FILL.red, 12), bx(170, 20, 130, 40, '10往復（20秒）\nずれ0.2秒 → 小さい', C.green, FILL.green, 12), lb(160, 92, '20秒 ÷ 10 ＝ 2秒（周期）', 15, C.ink, 'middle', true), lb(160, 122, 'ずれも 0.2 ÷ 10 ＝ 0.02秒', 13, C.green), ...band(160, lb(160, 190, '10往復ぶんの時間 ÷ 10 ＝ 周期', 13, C.blue, 'middle', true))),
  },
  {
    note: 'まとめです。周期を決めるのは、ふりこの長さだけ。重さやふれはばは関係ありません。はかるときは10往復して10でわります。',
    add: fresh(bx(30, 20, 260, 34, '周期 ＝ 長さだけで決まる', C.green, FILL.green, 15), bx(30, 66, 260, 30, '重さ・ふれはば → 関係なし', C.gray, FILL.gray, 13), bx(30, 108, 260, 30, '長さ4倍 → 周期2倍', C.main, FILL.warm, 13), bx(30, 150, 260, 30, '10往復の時間 ÷ 10', C.blue, FILL.blue, 13)),
  },
]);

// ══ 斜面を転がる球と木片 ══
const ramp = (): DiagramElement[] => [pg([[40, 30], [170, 110], [40, 110]], C.gray, FILL.gray), ln(20, 110, 310, 110, C.ink, false, 2)];
const blockAt = (x: number, col: string = C.main, fill: string = FILL.warm) => bx(x, 92, 22, 18, undefined, col, fill);
const ball = (x: number, y: number, r: number, col: string = C.red, fill: string = FILL.red) => ci(x, y, r, undefined, col, fill);
const naname: DiagramFigure = show([
  {
    note: '斜面（しゃめん）の上から球を転がして、木片にぶつけます。木片は押されて動きます。❓この動く距離は、何で決まるのでしょう。',
    add: [...ramp(), ball(50, 27, 8), blockAt(176), ...band(BY, lb(160, 175, '木片が動く距離は、何で決まる？', 13, C.ink, 'middle', true))],
  },
  {
    note: '❓なぜ木片が動くのでしょう。転がってきた球が木片にぶつかって、押すからです。強く押されるほど、木片は遠くまで動きます。',
    add: [ar(200, 78, 262, 78, C.blue), lb(232, 68, 'ぶつかって押す', 11, C.blue), ...band(BY, lb(160, 175, '強く押される ＝ 遠くまで動く', 13, C.blue, 'middle', true))],
  },
  {
    note: '球を重くすると、木片の動く距離も大きくなります。重さが2倍なら距離も2倍です。❓なぜ？ 重い球のほうが、木片を強く押すからです。',
    add: fresh(...ramp(), ball(50, 25, 12), blockAt(176), ...band(BY, lb(160, 168, '球の重さ 1 → 2', 12, C.ink, 'middle', true), bx(30, 178, 60, 22, '距離 1', C.gray, FILL.gray, 11), bx(30, 206, 120, 22, '距離 2', C.red, FILL.red, 11), lb(230, 200, '重さに比例', 13, C.red, 'middle', true))),
  },
  {
    note: '次に、球を放す高さを変えます。高さが2倍なら、距離も2倍です。❓なぜ？ 高い所から放すほど、球が速くなってぶつかるので、木片を強く押すからです。',
    add: fresh(...ramp(), ball(50, 27, 8), ball(110, 65, 8, C.blue, FILL.blue), ln(28, 27, 28, 110, C.red, true), ln(96, 65, 96, 110, C.blue, true), lb(2, 70, '高さ2', 10, C.red, 'start'), lb(100, 102, '高さ1', 10, C.blue, 'start'), blockAt(176), ...band(BY, bx(30, 170, 100, 22, '高さ1 → 距離1', C.blue, FILL.blue, 11), bx(30, 200, 200, 22, '高さ2 → 距離2', C.red, FILL.red, 11), lb(268, 200, '高さに比例', 12, C.red, 'middle', true))),
  },
  {
    note: '❓では、重さも高さも2倍にすると？ 重さで2倍、高さでさらに2倍なので、2×2＝4倍になります。それぞれの効果がかけ算でかさなるからです。',
    add: fresh(bx(20, 24, 80, 44, '重さ\n2倍', C.red, FILL.red, 14), lb(118, 46, '×', 22), bx(140, 24, 80, 44, '高さ\n2倍', C.blue, FILL.blue, 14), lb(238, 46, '＝', 22), bx(254, 24, 50, 44, '4倍', C.green, FILL.green, 16), lb(160, 110, '木片の動く距離', 13, C.ink, 'middle', true), ...band(BY, lb(160, 180, '2 × 2 ＝ 4倍', 18, C.green, 'middle', true))),
  },
  {
    note: '斜面のかたむきを変えるとどうでしょう。同じ高さから放せば、ゆるやかな斜面でも急な斜面でも、木片の動く距離は同じです。❓なぜ？ 速さを決めるのは「高さ」で、坂の長さやかたむきではないからです。',
    add: fresh(pg([[20, 30], [150, 110], [20, 110]], C.gray, FILL.gray), pg([[180, 30], [230, 110], [180, 110]], C.gray, FILL.gray), ln(10, 110, 310, 110, C.ink, false, 2), ln(10, 30, 310, 30, C.red, true), ball(25, 22, 7), ball(185, 22, 7), blockAt(152), blockAt(232), lb(95, 130, 'ゆるやか', 11, C.gray), lb(220, 130, '急', 11, C.gray), lb(300, 22, '同じ高さ', 10, C.red, 'end'), ...band(BY + 10, bx(60, 176, 200, 30, '距離は同じ', C.green, FILL.green, 14))),
  },
  {
    note: '実験で重さの影響を調べるときは、高さをそろえて重さだけを変えます。高さの影響を調べるときは、重さをそろえて高さだけを変えます。変える条件は1つだけです。',
    add: fresh(bx(20, 22, 130, 40, '重さを調べる', C.blue, FILL.blue, 13), bx(170, 22, 130, 40, '高さを調べる', C.blue, FILL.blue, 13), bx(20, 78, 130, 44, '高さは同じ\n重さだけ変える', C.gray, FILL.gray, 12), bx(170, 78, 130, 44, '重さは同じ\n高さだけ変える', C.gray, FILL.gray, 12), lb(160, 160, '変える条件は1つだけ', 14, C.red, 'middle', true)),
  },
  {
    note: 'まとめです。木片が動く距離は、球の重さに比例し、放す高さにも比例します。斜面のかたむきは関係ありません。',
    add: fresh(bx(30, 20, 260, 34, '距離は球の重さに比例（2倍で2倍）', C.red, FILL.red, 13), bx(30, 64, 260, 34, '距離は高さに比例（2倍で2倍）', C.blue, FILL.blue, 13), bx(30, 108, 260, 34, '重さ2倍 ＋ 高さ2倍 → 4倍', C.green, FILL.green, 13), bx(30, 152, 260, 34, 'かたむきを変えても同じ', C.gray, FILL.gray, 13)),
  },
]);

// ══ 浮力とばねばかり・台ばかり ══
type ScaleOpt = { objY: number; reading: string; base?: string };
const fu = ({ objY, reading, base }: ScaleOpt): DiagramElement[] => [
  bx(110, 6, 100, 24, 'ばねばかり ' + reading, C.blue, FILL.blue, 11),
  ln(160, 30, 160, objY, C.gray),
  bx(90, 100, 140, 50, undefined, C.blue, FILL.blue),
  bx(140, objY, 40, 36, '200g\n50cm³', C.main, FILL.warm, 10),
  ...(base ? [bx(70, 152, 180, 20, '台ばかり ' + base, C.gray, FILL.gray, 11)] : []),
];
const furyoku: DiagramFigure = show([
  {
    note: '重さ200g・体積50cm³の物体を、ばねばかりでつるします。水の外では、ばねばかりは物体の重さそのまま、200gを指します。',
    add: [...fu({ objY: 60, reading: '200g' }), ...band(178, lb(160, 205, '空気中：200g', 14, C.ink, 'middle', true))],
  },
  {
    note: 'この物体を水にしずめると、ばねばかりの値は小さくなります。❓なぜ？ 水が、物体を上に押し上げてくれるからです。この上向きの力を「浮力（ふりょく）」といいます。',
    add: fresh(...fu({ objY: 106, reading: '？' }), ar(196, 140, 196, 108, C.blue), lb(250, 124, '浮力', 12, C.blue, 'middle', true), ...band(178, lb(160, 205, '水が上に押し上げる ＝ 浮力', 13, C.blue, 'middle', true))),
  },
  {
    note: '❓では、浮力の大きさは何で決まるのでしょう。物体が押しのけた水の重さです。物体は体積50cm³ぶんの水をおしのけます。水1cm³は1gなので、50×1＝50gが浮力です。',
    add: fresh(...fu({ objY: 106, reading: '？' }), ar(196, 140, 196, 108, C.blue), ...band(178, bx(20, 182, 280, 26, '押しのけた水 50cm³ × 1g ＝ 50g', C.blue, FILL.blue, 13), lb(160, 224, '浮力 ＝ 押しのけた水の重さ', 12, C.gray))),
  },
  {
    note: 'ばねばかりの値は、「物体の重さ」から「浮力」をひいた値です。❓なぜ？ 下に引く重さ200gのうち、50g分を水が上から支えてくれるので、ばねばかりが支えるのは残りの150gだからです。',
    add: fresh(...fu({ objY: 106, reading: '150g' }), ar(196, 140, 196, 108, C.blue), ar(124, 108, 124, 146, C.red), lb(88, 128, '重さ\n200g', 10, C.red, 'end'), lb(232, 128, '浮力\n50g', 10, C.blue, 'start'), ...band(178, bx(20, 182, 280, 30, '200 − 50 ＝ 150g', C.green, FILL.green, 16))),
  },
  {
    note: '❓半分だけしずめたらどうなるでしょう。水の中にある体積が25cm³になるので、押しのける水も25g、浮力も25gです。ばねばかりは200−25＝175gを指します。',
    add: fresh(...fu({ objY: 82, reading: '175g' }), ar(196, 128, 196, 104, C.blue), ...band(178, bx(20, 182, 280, 26, '水中の体積 25cm³ → 浮力 25g', C.blue, FILL.blue, 13), lb(160, 224, '200 − 25 ＝ 175g', 14, C.green, 'middle', true))),
  },
  {
    note: '次に、水そうをのせた台ばかりを見ます。もとの値が1000gだとして、物体を水に入れると、台ばかりは50g増えて1050gになります。',
    add: fresh(...fu({ objY: 106, reading: '150g', base: '1050g' }), lb(160, 196, 'もとの値 1000g', 12, C.gray), lb(160, 222, '1000 ＋ 50 ＝ 1050g', 15, C.green, 'middle', true)),
  },
  {
    note: '❓なぜ台ばかりが増えるのでしょう。水が物体を上に50g押すと、物体も水を同じ大きさの50gで下に押し返します。この押し返された分が、水そうを通して台ばかりにかかるからです。',
    add: fresh(...fu({ objY: 106, reading: '150g', base: '1050g' }), ar(196, 140, 196, 108, C.blue), ar(124, 108, 124, 140, C.red), lb(88, 128, '物体が水を\n下に押す', 10, C.red, 'end'), lb(232, 128, '水が物体を\n上に押す', 10, C.blue, 'start'), lb(160, 196, '上に押す50g ＝ 下に押し返す50g', 12, C.ink, 'middle', true), lb(160, 222, '台ばかりは50g増える', 13, C.green, 'middle', true)),
  },
  {
    note: 'つまり、ばねばかりは浮力の分だけ軽くなり、台ばかりは浮力の分だけ重くなります。ふえた分と減った分は同じ50gです。',
    add: fresh(bx(30, 20, 260, 40, 'ばねばかり：200g → 150g\n（50g 減る）', C.blue, FILL.blue, 13), bx(30, 74, 260, 40, '台ばかり：1000g → 1050g\n（50g 増える）', C.red, FILL.red, 13), lb(160, 150, '減った分 ＝ 増えた分 ＝ 浮力', 14, C.green, 'middle', true)),
  },
  {
    note: 'まとめです。浮力は「水中にある部分の体積（cm³）×1g」。ばねばかり＝重さ−浮力、台ばかり＝もとの値＋浮力です。',
    add: fresh(bx(30, 20, 260, 32, '浮力 ＝ 水中の体積 × 1g', C.blue, FILL.blue, 14), bx(30, 62, 260, 32, 'ばねばかり ＝ 重さ − 浮力', C.red, FILL.red, 14), bx(30, 104, 260, 32, '台ばかり ＝ もとの値 ＋ 浮力', C.green, FILL.green, 14), bx(30, 146, 260, 32, '半分しずめる → 浮力も半分', C.gray, FILL.gray, 13)),
  },
]);

// ══ うく・しずむの判断 ══
const arrowScene = (uh: number, dh: number, uText: string, dText: string, block: string): DiagramElement[] => [
  bx(100, 10, 120, 130, undefined, C.blue, FILL.blue),
  bx(140, 65, 40, 30, block, C.main, FILL.warm, 11),
  ar(150, 65, 150, 65 - uh, C.blue),
  ar(170, 95, 170, 95 + dh, C.red),
  lb(96, 40, uText, 11, C.blue, 'end', true),
  lb(224, 118, dText, 11, C.red, 'start', true),
];
const ukusizumu: DiagramFigure = show([
  {
    note: '水は1cm³が1gです。だから100cm³の水は100gです。うくかしずむかは、「同じ体積の水」と重さをくらべると分かります。',
    add: [bx(60, 20, 30, 30, '1cm³', C.blue, FILL.blue, 10), lb(110, 35, '＝ 1g', 14, C.blue, 'start', true), bx(60, 80, 100, 50, '水 100cm³', C.blue, FILL.blue, 12), lb(180, 105, '＝ 100g', 14, C.blue, 'start', true), ...band(BY, lb(160, 185, '水は 1cm³ が 1g', 14, C.ink, 'middle', true))],
  },
  {
    note: '❓なぜ「同じ体積」でくらべるのでしょう。大きさがちがうものを、重さだけでくらべても公平ではないからです。体積をそろえて、重さのちがいだけをくらべます。',
    add: fresh(bx(40, 30, 100, 90, '木片\n100cm³\n90g', C.main, FILL.warm, 13), bx(180, 30, 100, 90, '水\n100cm³\n100g', C.blue, FILL.blue, 13), lb(160, 75, 'VS', 14, C.gray, 'middle', true), ...band(BY, lb(160, 185, '同じ100cm³でくらべる', 14, C.ink, 'middle', true))),
  },
  {
    note: '1cm³あたりの重さにそろえるには、重さを体積でわります。木片は90÷100＝0.9g。水の1gより軽いので、うきます。',
    add: fresh(bx(30, 20, 260, 34, '木片：90 ÷ 100 ＝ 0.9g/cm³', C.main, FILL.warm, 14), bx(30, 66, 260, 34, '水：100 ÷ 100 ＝ 1g/cm³', C.blue, FILL.blue, 14), lb(160, 130, '0.9 ＜ 1  →  木片は軽い', 15, C.green, 'middle', true), ...band(160, lb(160, 195, '水より軽い → うく', 15, C.green, 'middle', true))),
  },
  {
    note: '❓なぜ軽いとうくのでしょう。木片が水に入ると、押しのけた水100g分の浮力（上に押す力）を受けます。木片を完全にしずめると浮力は100gで、重さ90gより大きいので、うき上がります。水面にうかんで止まったときは、浮力が木片の重さと同じ90gになっています。',
    add: fresh(...arrowScene(40, 36, '浮力 100g', '重さ 90g', '木片')),
  },
  {
    note: '❓では、重いとどうなるでしょう。たとえば100cm³で120gの物体は、浮力が100gで、重さが120g。下に引く重さのほうが大きいので、しずみます。',
    add: fresh(...arrowScene(40, 48, '浮力 100g', '重さ 120g', '物体')),
  },
  {
    note: '食塩水は、水より重い液体です。1cm³が1gより重いので（たとえば1.2g）、100cm³なら120gになります。押しのける液体が重いぶん、浮力も大きくなります。',
    add: fresh(bx(30, 20, 120, 60, '水\n100cm³ ＝ 100g', C.blue, FILL.blue, 12), bx(170, 20, 120, 60, '食塩水\n100cm³ ＝ 120g', C.purple, FILL.purple, 12), lb(160, 110, '食塩水のほうが重い', 14, C.purple, 'middle', true), ...band(BY, lb(160, 185, '浮力は押しのけた液体の重さ', 13, C.ink, 'middle', true))),
  },
  {
    note: '❓ではなぜ、水でしずむ物が食塩水でうくのでしょう。たとえば100cm³で105gの物体は、水では浮力100gで重さ105gなのでしずみます。食塩水では浮力120gで重さ105gなので、うきます。',
    add: fresh(bx(20, 20, 130, 90, undefined, C.blue, FILL.blue), bx(170, 20, 130, 90, undefined, C.purple, FILL.purple), bx(60, 76, 50, 30, '105g', C.main, FILL.warm, 11), bx(210, 30, 50, 30, '105g', C.main, FILL.warm, 11), lb(85, 125, '水：浮力100g', 11, C.blue, 'middle', true), lb(235, 125, '食塩水：浮力120g', 11, C.purple, 'middle', true), ...band(BY + 5, lb(85, 176, '105 ＞ 100 → しずむ', 12, C.red, 'middle', true), lb(235, 176, '105 ＜ 120 → うく', 12, C.green, 'middle', true))),
  },
  {
    note: '油・水・食塩水を入れると、重い液体が下、軽い液体が上に分かれます。❓なぜ？ 同じ体積なら、重いほうが下に沈むからです。油＜水＜食塩水の順に、1cm³あたりが重くなります。',
    add: fresh(bx(90, 20, 140, 36, '油（いちばん軽い）', C.main, FILL.yellow, 12), bx(90, 56, 140, 36, '水', C.blue, FILL.blue, 13), bx(90, 92, 140, 36, '食塩水（いちばん重い）', C.purple, FILL.purple, 12), ar(260, 30, 260, 120, C.red), lb(275, 75, '重い', 11, C.red, 'start'), lb(160, 160, '油 ＜ 水 ＜ 食塩水', 15, C.green, 'middle', true)),
  },
  {
    note: 'まとめです。同じ体積で液体より軽ければうき、重ければしずみます。1cm³あたりの重さ（重さ÷体積）でくらべましょう。',
    add: fresh(bx(30, 20, 260, 32, '1cm³あたり ＝ 重さ ÷ 体積', C.blue, FILL.blue, 14), bx(30, 62, 260, 32, '液体より軽い → うく', C.green, FILL.green, 14), bx(30, 104, 260, 32, '液体より重い → しずむ', C.red, FILL.red, 14), bx(30, 146, 260, 32, '食塩水は水より重いので、うきやすい', C.purple, FILL.purple, 12)),
  },
]);

// ══ 断層としゅう曲 ══
const layerColors = [FILL.yellow, FILL.warm, FILL.gray];
const flat = (ox = 60, w = 200, y0 = 30): DiagramElement[] => layerColors.map((f, i) => bx(ox, y0 + i * 30, w, 30, undefined, C.gray, f));
const wave = (amp: number): DiagramElement[] => {
  const out: DiagramElement[] = [];
  const cols = ['#EAB308', '#B5622E', '#94A3B8'];
  for (let k = 0; k < 3; k++) {
    for (let x = 40; x < 280; x += 8) {
      const y1 = 70 + k * 16 + amp * Math.sin((x - 40) / 38);
      const y2 = 70 + k * 16 + amp * Math.sin((x + 8 - 40) / 38);
      out.push(ln(x, y1, x + 8, y2, cols[k], false, 15));
    }
  }
  return out;
};
const faultScene = (ox: number, dy: number, w = 50): DiagramElement[] => [
  ...layerColors.map((f, i) => bx(ox, 30 + i * 30, w, 30, undefined, C.gray, f)),
  ...layerColors.map((f, i) => bx(ox + w, 30 + i * 30 + dy, w, 30, undefined, C.gray, f)),
  ln(ox + w, 20, ox + w, 130, C.red, true, 2),
];
const dansou: DiagramFigure = show([
  {
    note: 'ふつう、地層（ちそう）は水平にたまります。上ほど新しく、下ほど古い地層です。❓それなのに、曲がった地層や切れた地層があるのはなぜでしょう。',
    add: [...flat(), lb(50, 45, '新', 10, C.gray, 'end'), lb(50, 105, '古', 10, C.gray, 'end'), ...band(BY, lb(160, 185, 'もとは水平にたまる', 13, C.ink, 'middle', true))],
  },
  {
    note: '答えは、たまったあとに、大地に大きな力がはたらいたからです。横から押されたり、引っぱられたりすると、地層の形が変わります。',
    add: [ar(10, 75, 54, 75, C.red), ar(310, 75, 266, 75, C.red), ...band(BY, lb(160, 185, '大地に大きな力（押す・引く）', 13, C.red, 'middle', true))],
  },
  {
    note: '横から、ゆっくり大きな力で押されると、地層は波のように曲がります。これが「しゅう曲」です。',
    add: fresh(...wave(14), ar(8, 80, 34, 80, C.red), ar(312, 80, 286, 80, C.red), lb(160, 20, 'しゅう曲', 15, C.green, 'middle', true), ...band(BY, lb(160, 185, '曲がっている → しゅう曲', 14, C.green, 'middle', true))),
  },
  {
    note: '❓なぜ切れずに曲がるのでしょう。深い所では、地層がまわりから押されて熱もあり、やわらかくなっていて、ゆっくり力を受けると、ねんどのように曲がることができるからです。',
    add: fresh(...wave(14), bx(50, 130, 220, 26, 'ゆっくり力がはたらく → ねんどのように曲がる', C.blue, FILL.blue, 11), lb(160, 188, 'ゆっくり ＝ 曲がる', 14, C.blue, 'middle', true)),
  },
  {
    note: '一方、地層が途中で切れて、ずれているものを「断層（だんそう）」といいます。切れ目の左と右で、同じ地層の高さがちがっています。',
    add: fresh(...faultScene(60, 24, 100), lb(160, 12, '断層', 14, C.red, 'middle', true), ...band(BY + 10, lb(160, 190, '切れて、ずれている → 断層', 14, C.red, 'middle', true))),
  },
  {
    note: '❓なぜ切れるのでしょう。力が急に大きくなったり、地層がかたかったりすると、曲がりきれずに割れてしまうからです。かたいクッキーをゆっくり曲げても、急に力を入れると折れるのと同じです。',
    add: fresh(bx(20, 24, 130, 50, 'ゆっくり\n→ 曲がる', C.green, FILL.green, 14), bx(170, 24, 130, 50, '急に・強く\n→ 割れる', C.red, FILL.red, 14), lb(160, 110, 'クッキーを曲げるのと同じ', 13, C.ink, 'middle', true), ...band(BY, lb(160, 185, '曲がりきれないと切れる（断層）', 13, C.red, 'middle', true))),
  },
  {
    note: '❓では、地震（じしん）は？ 断層は、大きな力がたまって、地面が急にずれる時に、大地がゆれるのです。つまり、地震は断層がずれるときに起こります。',
    add: fresh(...faultScene(60, 24, 100), ar(90, 6, 90, 22, C.red), ar(230, 138, 230, 156, C.red), ...band(BY + 10, lb(160, 185, '断層がずれる → 地震', 15, C.red, 'middle', true), lb(160, 214, '大地がゆれる', 12, C.gray))),
  },
  {
    note: '断層には、押す力でできるものと、引く力でできるものがあります。押されると片方が乗り上げ、引っぱられると片方がずり落ちます。',
    add: fresh(...faultScene(20, -20, 45), ...faultScene(180, 20, 45), ar(4, 150, 18, 150, C.red), ar(122, 150, 108, 150, C.red), ar(174, 150, 160, 150, C.red), ar(300, 150, 314, 150, C.red), lb(70, 168, '押す力：乗り上げる', 11, C.red, 'middle', true), lb(240, 168, '引く力：ずり落ちる', 11, C.blue, 'middle', true)),
  },
  {
    note: 'まとめです。ずれている→断層、曲がっている→しゅう曲。どちらも大地に大きな力がはたらいた証拠で、断層がずれると地震が起こります。',
    add: fresh(bx(30, 20, 260, 32, 'ずれている → 断層', C.red, FILL.red, 14), bx(30, 62, 260, 32, '曲がっている → しゅう曲', C.green, FILL.green, 14), bx(30, 104, 260, 32, 'どちらも大きな力がはたらいた証拠', C.blue, FILL.blue, 13), bx(30, 146, 260, 32, '断層がずれる → 地震', C.purple, FILL.purple, 14)),
  },
]);

// ══ 地層の出来事を古い順にならべる ══
const strata = (x: number, w: number, y0: number, hs: number[], fills: string[], texts?: string[]): DiagramElement[] => {
  let y = y0;
  return hs.map((h, i) => {
    const b = bx(x, y, w, h, texts?.[i], C.gray, fills[i], 11);
    y += h;
    return b;
  });
};
const zig: [number, number][] = [[60, 90], [90, 80], [120, 93], [150, 78], [180, 91], [210, 82], [240, 93], [260, 88]];
const funiseigou = (): DiagramElement[] => [
  pg([[60, 150], ...zig, [260, 150]], C.gray, FILL.gray),
  pg([...zig, [260, 60], [60, 60]], C.gray, FILL.warm),
  pg([[60, 60], [260, 60], [260, 40], [60, 40]], C.gray, FILL.yellow),
  ln(60, 112, 260, 112, C.gray),
  ln(60, 130, 260, 130, C.gray),
];
const dekigoto: DiagramFigure = show([
  {
    note: '地層から昔の出来事を読み取るには、まず「下の層ほど古い」ことを覚えます。上に行くほど新しい層です。',
    add: [...strata(100, 120, 16, [30, 30, 30, 30], [FILL.yellow, FILL.warm, FILL.gray, FILL.blue], ['4番目（新）', '3番目', '2番目', '1番目（古）']), ar(250, 130, 250, 26, C.blue), lb(262, 80, '新しい', 11, C.blue, 'start', true), ...band(BY, lb(160, 185, '下 ＝ 古い、上 ＝ 新しい', 14, C.ink, 'middle', true))],
  },
  {
    note: '❓なぜ下が古いのでしょう。どろや砂は、先にたまったものの上に、あとからつもっていくからです。先に積まれたものが、いちばん下になります。',
    add: fresh(...strata(100, 120, 90, [30], [FILL.blue]), bx(100, 40, 120, 30, undefined, C.gray, FILL.warm), ar(160, 6, 160, 38, C.blue, true), ...band(BY, lb(160, 175, '先にたまる → 下', 13, C.ink, 'middle', true), lb(160, 200, 'あとでたまる → 上', 13, C.ink, 'middle', true))),
  },
  {
    note: '火山灰（かざんばい）の層があれば、その時に近くで火山の噴火（ふんか）があった証拠です。火山灰は同じ時期に広い範囲へ降るので、離れた場所の地層の年代をくらべる目印にもなります。',
    add: fresh(...strata(70, 180, 20, [30, 22, 30, 30], [FILL.yellow, '#FCA5A5', FILL.warm, FILL.gray], ['', '火山灰の層', '', '']), lb(160, 165, '火山灰 ＝ 噴火があったしるし', 14, C.red, 'middle', true)),
  },
  {
    note: '海の生物の化石（かせき）があれば、その層がたまった時、そこは海だったと分かります。❓なぜ？ 化石は、その場所にいた生き物が埋まったものだからです。',
    add: fresh(...strata(70, 180, 20, [40, 40, 40], [FILL.yellow, FILL.blue, FILL.gray], ['', 'アサリの化石', '']), lb(160, 165, '海の生物の化石 ＝ 海だった', 14, C.blue, 'middle', true)),
  },
  {
    note: '地層の途中に、でこぼこにけずられた面があることがあります。これを不整合（ふせいごう）といいます。この面の上と下では、地層がつながっていません。',
    add: fresh(...funiseigou(), lb(160, 30, '不整合面', 13, C.red, 'middle', true), ln(60, 90, 260, 90, C.red, true), ...band(BY + 8, lb(160, 190, 'でこぼこの面 ＝ 不整合', 14, C.red, 'middle', true))),
  },
  {
    note: '❓なぜでこぼこなのでしょう。地層が一度陸になると、雨や川に、けずられる（しん食）からです。海の底にたまった地層は、なめらかです。',
    add: fresh(...funiseigou(), bx(70, 160, 180, 30, '陸になる → 雨や川でけずられる', C.blue, FILL.blue, 12), lb(160, 208, 'けずられる ＝ しん食', 13, C.blue, 'middle', true)),
  },
  {
    note: '❓そのあと、どうして上に新しい地層がのったのでしょう。地層は水の底でたまるので、陸だった所がもう一度、海にしずむ必要があったからです。',
    add: fresh(bx(20, 22, 130, 28, '海の底でたまる', C.gray, FILL.gray, 11), bx(170, 22, 130, 28, '持ち上がって陸になる', C.blue, FILL.blue, 11), ...flow(['雨や川で\nけずられる', 'また海に\nしずむ', '新しい層が\nたまる'], 100, { h: 44, size: 10, gap: 20 }).flat()),
  },
  {
    note: '順にまとめると、こうなります。①下の層がたまる ②持ち上げられて陸になる（隆起：りゅうき） ③けずられる（しん食） ④また海にしずむ（沈降：ちんこう） ⑤新しい層がたまる。',
    add: fresh(...flow(['①下の層が\nたまる', '②隆起して\n陸になる', '③けずられる\n（しん食）'], 20, { h: 50, size: 10, gap: 20 }).flat(), ...flow(['④沈降して\n海にしずむ', '⑤新しい層が\nたまる'], 100, { h: 50, size: 10, gap: 30 }).flat(), lb(160, 190, '不整合の上と下で、この順に出来事が起きた', 12, C.green, 'middle', true)),
  },
  {
    note: '練習です。でこぼこにけずられた面の上に、また地層が積もっていたら、「下の地層が持ち上げられて陸になり、けずられ、そのあとまた海にしずんで、上に新しい地層が積もった」と答えます。',
    add: fresh(...funiseigou(), bx(40, 156, 240, 60, '持ち上がる → けずられる\n→ またしずむ → 新しい層がたまる', C.green, FILL.green, 12)),
  },
]);

// ══ 地層の粒の大きさと海の深さ ══
const bottom = (x: number) => 60 + ((x - 70) * 60) / 240; // 海底の高さ（y）
const seaScene = (): DiagramElement[] => [
  pg([[70, 60], [310, 60], [310, 120], [70, 60]], C.blue, FILL.blue),
  pg([[10, 60], [70, 60], [310, 120], [310, 130], [10, 130]], C.gray, FILL.gray),
  lb(40, 92, '陸', 12, C.gray, 'middle', true),
  lb(200, 44, '海', 12, C.blue, 'middle', true),
];
const tsubu: DiagramFigure = show([
  {
    note: '地層をつくる粒には、大きさのちがいがあります。大きい順に、れき（2mm以上）・砂・どろです。',
    add: [ci(80, 60, 20, 'れき', C.main, FILL.warm, 11), ci(160, 60, 10, '砂', C.main, FILL.warm, 10), ci(230, 60, 4, undefined, C.main, FILL.warm), lb(230, 84, 'どろ', 11), ...band(BY - 20, lb(160, 170, 'れき ＞ 砂 ＞ どろ', 15, C.ink, 'middle', true))],
  },
  {
    note: '❓この粒はどこから来るのでしょう。雨や川が、陸をけずって粒を海まで運んできます。運ばれた粒は、海で沈んで、地層になります。',
    add: fresh(...seaScene(), ar(50, 80, 100, 90, C.blue), lb(160, 150, '川が粒を海へ運ぶ', 12, C.blue, 'middle', true)),
  },
  {
    note: '❓なぜ大きい粒は岸の近くにたまるのでしょう。大きい粒は重いので、水の流れが弱まるとすぐに沈みます。だから、岸の近く（浅い所）にたまります。',
    add: fresh(...seaScene(), ci(85, 70, 6, undefined, C.main, FILL.warm), ci(100, 82, 6, undefined, C.main, FILL.warm), ci(112, 95, 6, undefined, C.main, FILL.warm), ar(95, 66, 95, 80, C.red), lb(160, 150, '重い粒はすぐ沈む', 13, C.red, 'middle', true), ...band(BY + 15, lb(160, 200, 'れき → 岸の近く', 13, C.ink, 'middle', true))),
  },
  {
    note: '❓では、小さい粒は？ どろのような小さい粒は軽いので、なかなか沈まず、水に流されながら、沖（おき）の深い所までゆっくり運ばれます。',
    add: fresh(...seaScene(), ci(200, 66, 2, undefined, C.main, FILL.warm), ci(250, 80, 2, undefined, C.main, FILL.warm), ci(285, 100, 2, undefined, C.main, FILL.warm), ar(170, 70, 290, 70, C.blue), lb(160, 150, '軽い粒は遠くまで運ばれる', 13, C.blue, 'middle', true), ...band(BY + 15, lb(160, 200, 'どろ → 沖の深い所', 13, C.ink, 'middle', true))),
  },
  {
    note: '岸から沖へ、れき→砂→どろの順に、粒がだんだん小さくなっていきます。粒の大きさを見れば、その場所が岸に近いか遠いかが分かります。',
    add: fresh(...seaScene(), ln(70, 60, 120, 76, C.red, false, 6), ln(120, 76, 200, 102, '#D97706', false, 6), ln(200, 102, 300, 118, C.gray, false, 6), lb(96, 108, 'れき', 11, C.red, 'middle', true), lb(160, 122, '砂', 11, '#D97706', 'middle', true), lb(255, 138, 'どろ', 11, C.gray, 'middle', true), ...band(BY + 12, lb(160, 195, '岸に近い ＝ 大きい粒、沖 ＝ 小さい粒', 12, C.ink, 'middle', true))),
  },
  {
    note: '❓では、ある場所で海が深くなったらどうなるでしょう。岸が遠ざかるので、その場所にたまる粒は、だんだん小さくなっていきます。',
    add: fresh(bx(40, 20, 110, 34, '前：岸に近い → れき', C.red, FILL.red, 10), ar(95, 56, 95, 78, C.gray), bx(40, 80, 110, 34, 'のち：やや遠い → 砂', C.main, FILL.warm, 10), ar(95, 116, 95, 138, C.gray), bx(40, 140, 110, 34, 'さらに遠い → どろ', C.gray, FILL.gray, 10), lb(232, 100, '海が\n深くなる', 13, C.blue, 'middle', true)),
  },
  {
    note: '例題です。地層が下から、れき・砂・どろの順に重なっているとします。上へ行くほど粒が小さいので、海はだんだん深くなった（岸から遠くなった）と分かります。',
    add: fresh(...strata(100, 120, 20, [40, 40, 40], [FILL.gray, FILL.warm, FILL.red], ['どろ（上・新）', '砂', 'れき（下・古）']), ar(250, 130, 250, 26, C.blue), lb(262, 78, '粒が\n小さくなる', 11, C.blue, 'start'), ...band(BY, lb(160, 185, '粒が小さくなる → 海が深くなった', 14, C.blue, 'middle', true))),
  },
  {
    note: '逆に、下から上へ粒が大きくなっていたら、岸が近づいたということなので、海がだんだん浅くなったと考えます。',
    add: fresh(...strata(100, 120, 20, [40, 40, 40], [FILL.red, FILL.warm, FILL.gray], ['れき（上・新）', '砂', 'どろ（下・古）']), ar(250, 26, 250, 130, C.blue), lb(262, 78, '粒が\n大きくなる', 11, C.blue, 'start'), ...band(BY, lb(160, 185, '粒が大きくなる → 海が浅くなった', 14, C.blue, 'middle', true))),
  },
]);

// ══ たい積岩と火成岩 ══
const roundGrains = (x: number, y: number): DiagramElement[] => [ci(x, y, 9, undefined, C.main, FILL.warm), ci(x + 20, y + 3, 8, undefined, C.main, FILL.warm), ci(x + 8, y + 19, 9, undefined, C.main, FILL.warm), ci(x + 28, y + 22, 8, undefined, C.main, FILL.warm)];
const sharpGrains = (x: number, y: number): DiagramElement[] => [
  pg([[x - 9, y + 6], [x, y - 8], [x + 10, y + 4], [x + 2, y + 10]], C.purple, FILL.purple),
  pg([[x + 12, y + 4], [x + 20, y - 6], [x + 32, y + 6], [x + 22, y + 12]], C.purple, FILL.purple),
  pg([[x - 4, y + 14], [x + 8, y + 12], [x + 12, y + 26], [x - 2, y + 24]], C.purple, FILL.purple),
  pg([[x + 16, y + 16], [x + 30, y + 14], [x + 34, y + 28], [x + 20, y + 30]], C.purple, FILL.purple),
];
const taisekigan: DiagramFigure = show([
  {
    note: 'たい積岩と火成岩（かせいがん）は、できかたがちがいます。たい積岩は、砂やどろが積もって固まった岩。火成岩は、マグマが冷えて固まった岩です。',
    add: [bx(20, 24, 130, 60, 'たい積岩\n積もって固まる', C.main, FILL.warm, 12), bx(170, 24, 130, 60, '火成岩\nマグマが冷えて固まる', C.purple, FILL.purple, 11), ...band(BY - 20, lb(160, 160, 'できかたがちがう', 14, C.ink, 'middle', true))],
  },
  {
    note: 'たい積岩の粒は丸いことが多いです。❓なぜ？ 川や海で運ばれるあいだに、粒どうしがぶつかって、角がけずれて丸くなるからです。',
    add: fresh(...roundGrains(60, 40), lb(60, 110, '丸い粒', 13, C.main, 'middle', true), ar(150, 55, 250, 55, C.blue), lb(200, 45, '運ばれる間にぶつかる', 11, C.blue), ...band(BY, lb(160, 185, '粒が丸い ＝ たい積岩', 14, C.main, 'middle', true))),
  },
  {
    note: 'たい積岩には、層（そう）になっているものもあります。粒が積もった順に、重なっているからです。',
    add: fresh(...strata(80, 160, 20, [30, 30, 30, 30], [FILL.warm, FILL.yellow, FILL.warm, FILL.yellow]), ...band(BY, lb(160, 185, '層になっている ＝ たい積岩', 14, C.main, 'middle', true))),
  },
  {
    note: 'たい積岩には、化石（かせき）がふくまれることがあります。❓なぜ？ 生き物の死がいが、砂やどろといっしょに積もって、固まるからです。',
    add: fresh(...strata(80, 160, 20, [40, 40, 40], [FILL.warm, FILL.blue, FILL.warm], ['', '化石', '']), ...band(BY, lb(160, 185, '化石がある ＝ たい積岩', 14, C.main, 'middle', true))),
  },
  {
    note: '火成岩は、マグマが冷えて固まった岩です。❓なぜ角ばっているの？ マグマが冷えるときに、そこで結晶ができて、そのまま固まるので、運ばれてけずられることがなく、角ばったままなのです。',
    add: fresh(...sharpGrains(60, 40), lb(60, 110, '角ばった結晶', 13, C.purple, 'middle', true), bx(160, 40, 140, 40, 'マグマが冷える\n→ 結晶ができる', C.purple, FILL.purple, 11), ...band(BY, lb(160, 185, '角ばった結晶 ＝ 火成岩', 14, C.purple, 'middle', true))),
  },
  {
    note: '❓では、火成岩に化石がないのはなぜでしょう。マグマは、とても高い温度です。生き物がいたとしても、燃えたり、とけたりして、残らないからです。',
    add: fresh(bx(70, 30, 180, 60, 'マグマ（とても高い温度）', C.red, FILL.red, 13), lb(160, 112, '生き物は残らない', 13, C.red, 'middle', true), ...band(BY, lb(160, 185, '化石がない ＝ 火成岩', 14, C.purple, 'middle', true))),
  },
  {
    note: '石灰岩（せっかいがん）は、たい積岩の1つです。塩酸（えんさん）をかけると、二酸化炭素の泡が出るのが特ちょうです。❓なぜ？ 石灰岩は、サンゴなどの殻（から）が積もってできていて、塩酸と反応するからです。',
    add: fresh(bx(90, 70, 140, 40, '石灰岩', C.main, FILL.warm, 14), ci(120, 56, 4, undefined, C.blue, FILL.blue), ci(150, 46, 5, undefined, C.blue, FILL.blue), ci(180, 54, 4, undefined, C.blue, FILL.blue), ci(205, 44, 5, undefined, C.blue, FILL.blue), lb(160, 20, '塩酸をかける', 12, C.gray, 'middle', true), ...band(BY - 10, lb(160, 160, '泡が出る（二酸化炭素）→ 石灰岩', 13, C.blue, 'middle', true))),
  },
  {
    note: 'たい積岩は、粒の大きさで名前が決まります。大きい順に、れき岩・砂岩・でい岩（どろの岩）です。',
    add: fresh(bx(20, 30, 90, 50, 'れき岩\n（2mm以上）', C.main, FILL.warm, 11), bx(115, 30, 90, 50, '砂岩', C.main, FILL.yellow, 13), bx(210, 30, 90, 50, 'でい岩\n（どろ）', C.main, FILL.gray, 11), ar(70, 100, 260, 100, C.blue), lb(160, 118, '粒が小さくなる', 12, C.blue, 'middle', true)),
  },
  {
    note: '見分け方をまとめます。粒が丸いことが多い・層がある・化石がある・塩酸で泡が出る（石灰岩）、のならたい積岩。角ばった結晶で、層も化石もなければ火成岩です。',
    add: fresh(bx(20, 22, 135, 100, 'たい積岩\n粒が丸いことが多い\n層がある\n化石がある', C.main, FILL.warm, 12), bx(165, 22, 135, 100, '火成岩\n角ばった結晶\n層がない\n化石がない', C.purple, FILL.purple, 12), lb(160, 155, '例：化石がある → たい積岩', 14, C.green, 'middle', true)),
  },
]);

// ══ けんび鏡の使い方 ══
const field = (cx: number, cy: number, r: number, dot?: [number, number]) => [ci(cx, cy, r, undefined, C.gray, FILL.gray), ...(dot ? [ci(dot[0], dot[1], 5, undefined, C.red, FILL.red)] : [])];
const kenbikyo: DiagramFigure = show([
  {
    note: 'けんび鏡の倍率は、接眼（せつがん）レンズと対物（たいぶつ）レンズの倍率をかけ算します。接眼10倍、対物40倍なら、10×40＝400倍です。',
    add: [bx(20, 30, 100, 44, '接眼レンズ\n10倍', C.blue, FILL.blue, 12), lb(140, 52, '×', 22), bx(160, 30, 100, 44, '対物レンズ\n40倍', C.main, FILL.warm, 12), ...band(BY - 40, lb(160, 140, '10 × 40 ＝ 400倍', 20, C.green, 'middle', true))],
  },
  {
    note: '❓なぜかけ算なのでしょう。対物レンズで大きくした像を、さらに接眼レンズで大きくして見るからです。2回大きくするので、倍率どうしをかけます。',
    add: fresh(bx(20, 30, 80, 40, '実物\n1', C.gray, FILL.gray, 12), ar(102, 50, 118, 50, C.gray), bx(120, 30, 80, 40, '対物で\n40倍', C.main, FILL.warm, 12), ar(202, 50, 218, 50, C.gray), bx(220, 30, 80, 40, '接眼で\n10倍', C.blue, FILL.blue, 12), ...band(BY - 40, lb(160, 140, '40倍 の 10倍 ＝ 400倍', 16, C.green, 'middle', true))),
  },
  {
    note: 'けんび鏡でのぞくと、上下左右が逆に見えます。実物が左上にあるものは、視野（しや）では右下に見えるのです。❓なぜ？ レンズを通ると、像が反対向きにひっくり返るからです。',
    add: fresh(...field(90, 65, 50, [70, 50]), ...field(230, 65, 50, [250, 85]), lb(90, 128, '実物：左上', 11), lb(230, 128, '視野：右下', 11), ar(140, 65, 180, 65, C.blue), ...band(BY + 10, lb(160, 190, '像は上下左右が逆', 14, C.red, 'middle', true))),
  },
  {
    note: 'だから、見たい物を中央に入れたいときは、動かしたい向きと反対に、プレパラートを動かします。視野の右上に見える物を中央に動かすには、プレパラートを右上に動かします。',
    add: fresh(...field(90, 65, 50, [125, 40]), lb(90, 128, '視野：右上に見える', 11), bx(200, 40, 100, 50, 'プレパラート', C.gray, FILL.gray, 11), ar(215, 32, 285, 8, C.red), ...band(BY + 5, lb(160, 185, '右上に見える → プレパラートも右上へ', 13, C.red, 'middle', true))),
  },
  {
    note: '最初は、必ず低い倍率で見ます。❓なぜ？ 高い倍率だと視野がとても狭く、見たい物を見つけにくいからです。低倍率で中央に入れてから、高倍率に変えます。',
    add: fresh(...field(90, 65, 55), lb(90, 132, '低倍率：広い', 12, C.green, 'middle', true), ...field(230, 65, 25), lb(230, 132, '高倍率：狭い', 12, C.red, 'middle', true), ...band(BY + 10, lb(160, 190, '低倍率で見つけてから高倍率へ', 13, C.ink, 'middle', true))),
  },
  {
    note: '高倍率にすると、視野は狭く、そして暗くなります。❓なぜ暗くなる？ 像を大きくのばして見るので、同じ光がより広い面積に広がって、うすくなるからです。',
    add: fresh(bx(30, 20, 120, 60, '低倍率\n広くて明るい', C.green, '#F0FDF4', 12), bx(170, 20, 120, 60, '高倍率\n狭くて暗い', C.gray, '#CBD5E1', 12), ...band(BY - 50, lb(160, 130, 'しぼりや反射鏡で明るさを調節', 12, C.blue, 'middle', true))),
  },
  {
    note: 'ピントを合わせる順番です。プレパラートをのせたら、横から見ながら対物レンズをプレパラートに近づけ、次に接眼レンズをのぞきながら、遠ざけてピントを合わせます。',
    add: fresh(...flow(['プレパラート\nをのせる', '横から見て\n近づける'], 20, { h: 46, size: 10, gap: 24 }).flat(), ...flow(['のぞいて\n遠ざける', 'ピントが\n合う'], 100, { h: 46, size: 10, gap: 24 }).flat(), lb(160, 175, '❓なぜ横から？ ぶつけて割らないため', 12, C.red, 'middle', true)),
  },
  {
    note: '❓なぜ、のぞきながら近づけないのでしょう。目では、レンズとプレパラートの間が見えないので、ぶつけてプレパラートやレンズをこわすからです。だから、近づけるのは横から、離すのはのぞきながらです。',
    add: fresh(bx(50, 30, 90, 40, '近づける\n＝ 横から見る', C.blue, FILL.blue, 11), bx(180, 30, 90, 40, '遠ざける\n＝ のぞきながら', C.green, FILL.green, 11), ...band(BY - 40, lb(160, 130, 'ぶつけない順番', 14, C.red, 'middle', true))),
  },
  {
    note: 'けんび鏡は、直射日光（ちょくしゃにっこう）の当たらない明るい所に置きます。❓なぜ？ 反射鏡で太陽の光を目に入れると、強すぎて目をいためるからです。',
    add: fresh(bx(30, 30, 130, 50, '直射日光は ✕', C.red, FILL.red, 14), bx(170, 30, 130, 50, '明るい窓ぎわ ○', C.green, FILL.green, 13), ...band(BY - 40, lb(160, 130, '明るい所で、日光は直接入れない', 13, C.ink, 'middle', true))),
  },
]);

// ══ 虫めがね ══
const lens = (): DiagramElement[] => [pg([[160, 18], [168, 38], [170, 60], [168, 82], [160, 102], [152, 82], [150, 60], [152, 38]], C.blue, FILL.blue)];
const rays = (yFocus: number, fx: number, ys: number[]): DiagramElement[] => ys.flatMap((y) => [ln(30, y, 160, y, C.gray), ln(160, y, fx, yFocus, C.red)]);
const mushi: DiagramFigure = show([
  {
    note: '虫めがねは、目に近づけて持ちます。そして、見たい物を動かして、はっきり見える場所を探します。',
    add: [bx(20, 30, 40, 40, '目', C.gray, FILL.gray, 14), ci(110, 50, 24, undefined, C.blue, FILL.blue), ar(220, 50, 160, 50, C.main), bx(225, 35, 60, 30, '見る物', C.main, FILL.warm, 11), ...band(BY, lb(160, 185, '目に近づけて、見る物を動かす', 13, C.ink, 'middle', true))],
  },
  {
    note: '❓なぜ目に近づけるのでしょう。目からレンズを遠ざけると、レンズを通して見える範囲がせまくなるからです。目に近づけるほど、広く見えます。',
    add: fresh(bx(20, 30, 40, 40, '目', C.gray, FILL.gray, 14), ci(80, 50, 20, undefined, C.blue, FILL.blue), ln(60, 50, 260, 20, C.gray, true), ln(60, 50, 260, 80, C.gray, true), ci(190, 50, 20, undefined, C.blue, FILL.blue), lb(80, 100, '近い：広く見える', 11, C.green, 'middle', true), lb(210, 110, '遠い：せまい', 11, C.red, 'middle', true)),
  },
  {
    note: '動かせない物（花や木）を見るときは、見る物は動かせないので、自分が顔ごと近づいたり、遠ざかったりして、ピントを合わせます。',
    add: fresh(bx(20, 50, 40, 40, '目', C.gray, FILL.gray, 14), ci(95, 70, 20, undefined, C.blue, FILL.blue), ar(66, 110, 110, 110, C.red), ar(110, 118, 66, 118, C.red), bx(230, 50, 60, 40, '花', C.green, FILL.green, 13), ...band(BY, lb(160, 185, '動かせない物 → 自分が動く', 13, C.ink, 'middle', true))),
  },
  {
    note: '次は、日光を集める実験です。虫めがねは、まっすぐ来た日光を、1点に集めます。この点を焦点（しょうてん）といいます。',
    add: fresh(...lens(), ...rays(60, 250, [30, 45, 60, 75, 90]), ci(250, 60, 4, undefined, C.red, FILL.red), lb(250, 84, '焦点', 12, C.red, 'middle', true), ...band(BY, lb(160, 185, '日光が1点に集まる', 14, C.ink, 'middle', true))),
  },
  {
    note: '❓なぜ焦点でいちばん熱くなるのでしょう。虫めがねの大きさ分の日光が、小さな点にぎゅっと集まるからです。同じ量の光が、せまい面積に集まるので、明るく熱くなります。',
    add: fresh(...lens(), ...rays(60, 250, [30, 45, 60, 75, 90]), ci(250, 60, 4, undefined, C.red, FILL.red), bx(60, 140, 90, 30, '広い面積の光', C.gray, FILL.gray, 10), bx(190, 140, 90, 30, '小さい点に集中', C.red, FILL.red, 10), ar(150, 155, 188, 155, C.red)),
  },
  {
    note: '紙を近づけたり遠ざけたりして、光の輪がいちばん小さく、いちばん明るくなる場所を探します。そこが焦点で、いちばん早く紙がこげます。',
    add: fresh(...lens(), ...rays(60, 250, [30, 45, 60, 75, 90]), bx(196, 40, 6, 40, undefined, C.gray, FILL.gray), bx(246, 40, 6, 40, undefined, C.red, FILL.red), bx(290, 40, 6, 40, undefined, C.gray, FILL.gray), lb(199, 100, '大', 10), lb(249, 100, '小', 11, C.red, 'middle', true), lb(293, 100, '大', 10), ...band(BY, lb(160, 185, '光の輪が最小の所 ＝ 焦点', 13, C.red, 'middle', true))),
  },
  {
    note: '黒い紙と白い紙では、黒い紙のほうが早くこげます。❓なぜ？ 黒は日光を吸収して熱にかえやすく、白は日光を反射してしまうからです。',
    add: fresh(bx(30, 30, 110, 60, '黒い紙\n光を吸収 → 熱', C.ink, '#94A3B8', 12), bx(180, 30, 110, 60, '白い紙\n光を反射', C.gray, '#FFFFFF', 12), ...band(BY - 40, lb(160, 130, '黒い紙が早くこげる', 15, C.red, 'middle', true))),
  },
  {
    note: '虫めがねで、太陽を見てはいけません。❓なぜ？ 目の中でも、日光が虫めがねの光と同じように1点に集まって、目のおくを焼いてしまい、失明するおそれがあるからです。',
    add: fresh(bx(30, 30, 130, 50, '太陽を見る ✕', C.red, FILL.red, 15), lb(160, 110, '光が目の中で集まる → 危険', 13, C.red, 'middle', true), ...band(BY, lb(160, 185, '虫めがねで太陽は見ない', 14, C.ink, 'middle', true))),
  },
]);

// ══ メダカ ══
const fish = (ox: number, sex: 'o' | 'm'): DiagramElement[] => {
  const dorsal: [number, number][] = sex === 'o'
    ? [[ox + 12, 40], [ox + 14, 28], [ox + 22, 31], [ox + 25, 37], [ox + 30, 33], [ox + 40, 40]]
    : [[ox + 14, 40], [ox + 24, 28], [ox + 40, 40]];
  const anal: [number, number][] = sex === 'o'
    ? [[ox + 20, 66], [ox + 60, 66], [ox + 68, 86], [ox + 28, 86]]
    : [[ox + 20, 66], [ox + 60, 66], [ox + 22, 82]];
  return [
    pg([[ox, 52], [ox - 20, 40], [ox - 20, 64]], C.gray, FILL.gray),
    pg([[ox, 52], [ox + 25, 40], [ox + 65, 40], [ox + 92, 54], [ox + 65, 66], [ox + 25, 66]], C.main, sex === 'o' ? FILL.warm : FILL.yellow),
    pg(dorsal, C.blue, FILL.blue),
    pg(anal, C.green, FILL.green),
    ci(ox + 78, 50, 2.5, undefined, C.ink, C.ink),
  ];
};
const medaka: DiagramFigure = show([
  {
    note: 'メダカは、オスとメスで体のつくりがちがいます。見分けるポイントは、背びれ・しりびれ・おなかの3つです。',
    add: [...fish(50, 'o'), ...fish(210, 'm'), lb(100, 110, 'オス', 14, C.blue, 'middle', true), lb(260, 110, 'メス', 14, C.red, 'middle', true), ...band(BY, lb(160, 185, '背びれ・しりびれ・おなかを見る', 13, C.ink, 'middle', true))],
  },
  {
    note: 'まず背びれです。オスは背びれに切れこみがあり、メスは切れこみがありません。',
    add: fresh(...fish(50, 'o'), ...fish(210, 'm'), lb(100, 110, 'オス：切れこみあり', 11, C.blue, 'middle', true), lb(260, 110, 'メス：切れこみなし', 11, C.red, 'middle', true), ar(82, 14, 70, 28, C.blue), lb(100, 12, '切れこみ', 10, C.blue), ...band(BY, lb(160, 185, '背びれに切れこみ ＝ オス', 14, C.blue, 'middle', true))),
  },
  {
    note: '次にしりびれです。オスは大きい平行四辺形に近く、メスは後ろほど細い三角形です。❓なぜ？ オスは、しりびれで産卵中のメスをかかえるようにして、卵に精子をかけるので、大きいのです。',
    add: fresh(...fish(50, 'o'), ...fish(210, 'm'), lb(100, 110, 'オス：平行四辺形', 11, C.blue, 'middle', true), lb(260, 110, 'メス：三角形', 11, C.red, 'middle', true), ...band(BY, lb(160, 178, 'オスは大きなしりびれでメスをかかえる', 12, C.blue, 'middle', true))),
  },
  {
    note: 'そして、おなかです。メスは、体の中に卵をもっているので、おなかがふくらんでいます。❓なぜ？ 産卵前のメスは、卵をたくさん育てているからです。',
    add: fresh(...fish(50, 'o'), ...fish(210, 'm'), ci(255, 60, 12, undefined, C.red, FILL.red), lb(255, 60, '卵', 10, C.red, 'middle', true), lb(100, 110, 'オス：ほっそり', 11, C.blue, 'middle', true), lb(260, 110, 'メス：ふくらむ', 11, C.red, 'middle', true), ...band(BY, lb(160, 185, 'おなかがふくらむ ＝ メス', 14, C.red, 'middle', true))),
  },
  {
    note: 'メダカを飼うときは、くみ置きの水を使い、直射日光を避けて、水草を入れます。❓なぜ？ 水道水のカルキ（消毒の薬）を抜くため。日光が当たると水温が上がりすぎるため。水草は卵を産みつける場所になり、酸素も出すからです。',
    add: fresh(bx(20, 22, 90, 50, 'くみ置きの水\nカルキを抜く', C.blue, FILL.blue, 10), bx(115, 22, 90, 50, '直射日光を\nさける', C.red, FILL.red, 10), bx(210, 22, 90, 50, '水草を入れる\n卵・酸素', C.green, FILL.green, 10), lb(160, 110, '水温が上がりすぎない場所で', 12, C.gray)),
  },
  {
    note: '卵は、メスが水草に産みつけます。水温が約25℃だと、約10日で、子メダカがかえります。',
    add: fresh(ln(80, 20, 80, 110, C.green, false, 5), ln(110, 30, 110, 110, C.green, false, 5), ci(90, 60, 6, undefined, C.blue, FILL.blue), ci(90, 78, 6, undefined, C.blue, FILL.blue), ci(102, 70, 6, undefined, C.blue, FILL.blue), lb(200, 60, '水温 約25℃', 14, C.red, 'middle', true), lb(200, 84, '約10日でかえる', 14, C.blue, 'middle', true), ...band(BY, lb(160, 185, '卵は水草に産みつけられる', 13, C.ink, 'middle', true))),
  },
  {
    note: '❓水温が低いとどうなるでしょう。ふ化までの日数が長くなります。卵が育つ速さは、水温が高いほど速く、低いほどゆっくりになるからです。水温が高いほど早く、低いほど遅くかえります。',
    add: fresh(bx(20, 30, 130, 50, '水温 高い\n→ 早くかえる', C.red, FILL.red, 12), bx(170, 30, 130, 50, '水温 低い\n→ 遅くかえる', C.blue, FILL.blue, 12), lb(160, 115, '25℃で約10日が目安', 14, C.ink, 'middle', true)),
  },
  {
    note: '子メダカは、生まれてから2〜3日は、エサを食べなくても大丈夫です。❓なぜ？ おなかにつけている養分（ようぶん）の入った袋から、栄養をとっているからです。',
    add: fresh(...fish(140, 'm'), ci(170, 76, 8, undefined, C.red, FILL.red), lb(170, 100, '養分の袋', 11, C.red, 'middle', true), ...band(BY, lb(160, 185, '2〜3日はエサ不要', 14, C.green, 'middle', true))),
  },
  {
    note: '例題です。背びれに切れこみがあり、しりびれが大きく平行四辺形に近いメダカは、オスです。',
    add: fresh(...fish(120, 'o'), ...band(BY, bx(80, 165, 160, 34, 'オス', C.blue, FILL.blue, 16))),
  },
]);

// ══ アサガオとヘチマ ══
const asagao: DiagramFigure = show([
  {
    note: 'アサガオもヘチマも、種子→子葉→本葉→つる→つぼみ→花→実→種子、の順に育ちます。1周したら、また種子にもどります。',
    add: [...flow(['種子', '子葉', '本葉', 'つる'], 30, { h: 40, size: 12, gap: 16 }).flat(), ...flow(['つぼみ', '花', '実', '種子'], 110, { h: 40, size: 12, gap: 16, color: C.green, fill: FILL.green }).flat(), lb(160, 190, '育つ順を覚える', 13, C.ink, 'middle', true)],
  },
  {
    note: '❓なぜ最初に子葉が出るのでしょう。種子の中にある養分（ようぶん）で育つからです。子葉は、その養分を使って出てきます。本葉が出てから、自分で光合成をして養分をつくります。',
    add: fresh(bx(20, 30, 90, 50, '種子\n養分がある', C.main, FILL.warm, 11), ar(112, 55, 128, 55, C.gray), bx(130, 30, 80, 50, '子葉\n養分で育つ', C.green, FILL.green, 10), ar(212, 55, 228, 55, C.gray), bx(230, 30, 80, 50, '本葉\n光合成', C.green, FILL.green, 11), ...band(BY - 40, lb(160, 130, '本葉が出てから自分で養分づくり', 12, C.blue, 'middle', true))),
  },
  {
    note: 'アサガオの花は、1つの花の中に、おしべとめしべの両方があります。おしべの花粉がめしべの先につくことを受粉（じゅふん）といいます。',
    add: fresh(ci(160, 70, 45, undefined, C.purple, FILL.purple), ln(160, 70, 160, 40, C.red, false, 3), ci(160, 38, 4, undefined, C.red, FILL.red), ln(140, 75, 130, 52, C.blue), ln(180, 75, 190, 52, C.blue), ci(130, 50, 3, undefined, C.blue, FILL.blue), ci(190, 50, 3, undefined, C.blue, FILL.blue), lb(230, 45, 'めしべ', 11, C.red, 'start', true), lb(230, 65, 'おしべ', 11, C.blue, 'start', true), ...band(BY, lb(160, 185, '1つの花におしべとめしべ', 13, C.ink, 'middle', true))),
  },
  {
    note: '❓では、アサガオは、どうやって受粉するのでしょう。同じ花の中におしべとめしべがあるので、自分の花粉で受粉できます。多くはつぼみのうちに受粉がすんでいます。',
    add: fresh(ci(160, 70, 45, undefined, C.purple, FILL.purple), ln(160, 70, 160, 40, C.red, false, 3), ci(160, 38, 4, undefined, C.red, FILL.red), ln(140, 75, 130, 52, C.blue), ci(130, 50, 3, undefined, C.blue, FILL.blue), ar(133, 48, 156, 38, C.blue), lb(230, 45, '自分の花粉が\nめしべにつく', 11, C.blue, 'start'), ...band(BY, lb(160, 185, '自分の花粉で受粉できる', 14, C.green, 'middle', true))),
  },
  {
    note: 'ヘチマの花は、おばなとめばなに分かれています。おばなにはおしべだけ、めばなにはめしべだけがあります。めばなは、花の下にふくらみ（実になる部分）があります。',
    add: fresh(ln(90, 100, 90, 60, C.gray, false, 4), ci(90, 50, 30, undefined, C.purple, FILL.purple), ln(90, 50, 90, 32, C.blue, false, 3), lb(90, 118, 'おばな\n（おしべだけ）', 11, C.blue, 'middle', true), bx(213, 76, 24, 28, undefined, C.green, FILL.green), ci(225, 50, 30, undefined, C.purple, FILL.purple), ln(225, 50, 225, 32, C.red, false, 3), lb(225, 118, 'めばな\n（めしべだけ）', 11, C.red, 'middle', true), lb(268, 92, 'ふくらみ', 10, C.green, 'start')),
  },
  {
    note: '❓では、実になるのはどちらでしょう。めばなです。めしべのもとのふくらみが、受粉するとふくらんで、実になります。おばなは花粉を出したあとは、落ちてしまいます。',
    add: fresh(ln(90, 100, 90, 60, C.gray, false, 4), ci(90, 50, 30, undefined, C.purple, FILL.purple), bx(213, 76, 24, 28, undefined, C.green, FILL.green), ci(225, 50, 30, undefined, C.purple, FILL.purple), lb(90, 118, 'おばな：落ちる', 11, C.blue, 'middle', true), lb(225, 118, 'めばな：実になる', 11, C.red, 'middle', true), ar(90, 138, 90, 158, C.gray), ar(225, 138, 225, 158, C.gray), lb(90, 176, '落ちる', 12, C.gray, 'middle', true), bx(195, 160, 60, 30, '実', C.green, FILL.green, 14)),
  },
  {
    note: '❓ヘチマは、どうやって受粉するのでしょう。おばなとめばなが別の花なので、ハチなどの虫が、おばなの花粉をめばなに運んで受粉します。',
    add: fresh(ci(80, 70, 28, undefined, C.purple, FILL.purple), ci(240, 70, 28, undefined, C.purple, FILL.purple), lb(80, 110, 'おばな', 11, C.blue, 'middle', true), lb(240, 110, 'めばな', 11, C.red, 'middle', true), ar(120, 70, 200, 70, C.main), lb(160, 56, '虫が花粉を運ぶ', 12, C.main, 'middle', true), ...band(BY, lb(160, 185, '別々の花 → 虫が運んで受粉', 13, C.ink, 'middle', true))),
  },
  {
    note: 'ヘチマの種子は黒色です。実の中のせんいは、かわかしてたわしに使われます。',
    add: fresh(bx(30, 30, 110, 60, 'ヘチマの種子\n黒色', C.ink, '#CBD5E1', 13), bx(180, 30, 110, 60, '実のせんい\n→ たわし', C.green, FILL.green, 13), ...band(BY - 40, lb(160, 130, '種子は黒、実はたわし', 14, C.ink, 'middle', true))),
  },
  {
    note: 'まとめです。アサガオは1つの花におしべとめしべ。ヘチマはおばなとめばなが別々で、実になるのはめばなです。',
    add: fresh(bx(30, 20, 260, 34, 'アサガオ：1つの花におしべとめしべ', C.purple, FILL.purple, 13), bx(30, 64, 260, 34, 'ヘチマ：おばな（おしべ）とめばな（めしべ）', C.green, FILL.green, 12), bx(30, 108, 260, 34, '実になる ＝ めばな', C.red, FILL.red, 14), lb(160, 175, '例：ヘチマの実になるのは めばな', 13, C.green, 'middle', true)),
  },
]);

export const DIAGRAMS_RIKA_6: Record<string, DiagramFigure> = {
  'ふりこの実験（条件の変え方・10往復ではかる理由）': furiko,
  '斜面を転がる球と木片の動き（重さ・高さとの関係）': naname,
  '浮力とばねばかり・台ばかりの読み': furyoku,
  'うく・しずむの判断（同じ体積でくらべる）': ukusizumu,
  '断層としゅう曲（大地に力がはたらいたあと）': dansou,
  '地層の出来事を古い順にならべる（不整合・火山灰・隆起）': dekigoto,
  '地層の粒の大きさと海の深さの変化': tsubu,
  'たい積岩と火成岩の見分け方（粒の形・化石・塩酸）': taisekigan,
  'けんび鏡の使い方（倍率・見え方・操作の順）': kenbikyo,
  '虫めがねの使い方と日光を集める実験': mushi,
  'メダカの飼い方と観察（オスとメスの見分け方・卵）': medaka,
  'アサガオとヘチマの育ち方と花のつくり': asagao,
};
