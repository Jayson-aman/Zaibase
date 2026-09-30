// 理科（以前からある公式）の動く図解スライド。キーは項目の label（買い切りの識別キーと同じ）。
// 「なぜ？」の連鎖で、根っこまでたどる。中学受験向けなので、むずかしい漢字には（よみ）を添える。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, show, band, fresh, flow } from './diagram-kit';

/** 下の帯に、ひとことを1行で出す。 */
const cap = (t: string, color: string = C.ink, fill: string = FILL.warm): DiagramElement[] => band(150, bx(10, 162, 300, 30, t, color, fill, 13));
/** 下の帯に、2行で出す。 */
const cap2 = (t1: string, t2: string, c1: string = C.ink, c2: string = C.green): DiagramElement[] =>
  band(150, bx(10, 156, 300, 30, t1, c1, FILL.warm, 12), bx(10, 194, 300, 30, t2, c2, FILL.green, 13));

const spring = (x: number, y1: number, y2: number, color: string = C.gray): DiagramElement[] => {
  const n = 8;
  const els: DiagramElement[] = [];
  let px = x;
  let py = y1;
  for (let i = 1; i <= n; i++) {
    const nx = i === n ? x : x + (i % 2 ? -8 : 8);
    const ny = y1 + ((y2 - y1) * i) / n;
    els.push(ln(px, py, nx, ny, color, false, 1.5));
    px = nx;
    py = ny;
  }
  return els;
};

// ══ 流れる水のはたらき ══
const riverProfile = (): DiagramElement[] => [
  pg([[20, 25], [90, 70], [170, 105], [300, 125], [300, 142], [20, 142]], C.gray, FILL.gray),
  lb(55, 28, '上流', 12, C.blue, 'middle', true),
  lb(130, 74, '中流', 12, C.blue, 'middle', true),
  lb(250, 106, '下流', 12, C.blue, 'middle', true),
];
const angular = (x: number, y: number, s: number): DiagramElement =>
  pg([[x, y + s * 0.3], [x + s * 0.5, y], [x + s, y + s * 0.35], [x + s * 0.8, y + s], [x + s * 0.15, y + s * 0.85]], C.gray, FILL.gray);
const kawa: DiagramFigure = show([
  {
    note: '川は、山の高いところ（上流）から海のほうへ流れていきます。❓その川の水は、まわりの地面に何をしているのでしょう。しん食・運搬（うんぱん）・堆積（たいせき）という3つのはたらきがあります。順に、なぜそうなるのかを見ていきましょう。',
    add: [...riverProfile(), ...cap('川は 上流 → 中流 → 下流 と流れる', C.blue, FILL.blue)],
  },
  {
    note: '❓なぜ、上流は流れが速いのでしょう。→山の中は地面のかたむきが急で、水は急な坂ほど速く走るからです。下流へ行くほど坂がゆるくなり、流れもゆっくりになります。',
    add: [ar(38, 34, 72, 58, C.blue), ar(96, 74, 128, 92, C.blue), ar(208, 116, 244, 121, C.blue), ...cap('上流は坂が急 → 流れが速い', C.blue, FILL.blue)],
  },
  {
    note: '❓速い水は、地面をどうするでしょう。→勢いがあるので、谷の底や岸の土や岩をどんどんけずります。これがしん食です。❓けずり続けるとどんな形になる？→深く切れこんだ、Vの字の谷（V字谷）ができます。',
    add: [
      ...fresh(),
      pg([[20, 30], [145, 112], [175, 112], [300, 30], [300, 142], [20, 142]], C.gray, FILL.gray),
      pg([[145, 112], [175, 112], [171, 103], [149, 103]], C.blue, FILL.blue),
      ar(160, 96, 160, 126, C.red),
      ar(146, 104, 126, 92, C.red),
      ar(174, 104, 194, 92, C.red),
      lb(160, 62, 'V字谷', 14, C.main, 'middle', true),
      ...cap('速い流れが谷の底と岸をけずる（しん食）', C.red, FILL.red),
    ],
  },
  {
    note: '❓けずった土や石は、どこへ行くのでしょう。→流れる水にのって、下流へ運ばれます。これが運搬です。❓なぜ、流れが速いほど運搬も強い？→水の力が大きいほど、重い石までおし流せるからです。',
    add: [
      ...fresh(),
      bx(10, 40, 300, 70, undefined, C.blue, FILL.blue),
      angular(40, 55, 26),
      angular(90, 62, 18),
      ci(140, 80, 6, undefined, C.gray, FILL.gray),
      ci(160, 70, 5, undefined, C.gray, FILL.gray),
      ci(180, 84, 5, undefined, C.gray, FILL.gray),
      ar(60, 96, 290, 96, C.blue),
      lb(160, 26, '石・砂・どろが流される', 12, C.gray),
      ...cap('けずったものを 下流へ運ぶ（運搬）', C.blue, FILL.blue),
    ],
  },
  {
    note: '❓では、下流で土や石が積もるのはなぜでしょう。→坂がゆるくなって流れがおそくなると、水は重い石や砂をもう運べなくなり、その場に落とすからです。これが堆積です。❓それがたくさん積もると？→平野や、川の河口（かこう）の三角州（さんかくす）ができます。',
    add: [
      ...fresh(),
      bx(200, 20, 110, 110, undefined, C.blue, FILL.blue),
      lb(288, 36, '海', 13, C.blue, 'middle', true),
      bx(10, 55, 190, 34, undefined, C.blue, FILL.blue),
      ar(20, 72, 80, 72, C.blue),
      ci(100, 80, 4, undefined, C.gray, FILL.gray),
      ci(125, 82, 4, undefined, C.gray, FILL.gray),
      ci(150, 80, 3, undefined, C.gray, FILL.gray),
      pg([[200, 70], [250, 45], [250, 100]], C.main, FILL.yellow),
      lb(250, 116, '三角州', 11, C.main, 'middle', true),
      lb(105, 40, '流れがゆるい', 12, C.blue),
      ...cap('流れがおそい → 土や砂が積もる（堆積）', C.main, FILL.yellow),
    ],
  },
  {
    note: '❓上流の石は大きく角ばっているのに、下流の石は小さく丸いのはなぜでしょう。→石は流されるあいだに、ほかの石や川底にぶつかって、少しずつけずれるからです。❓ということは？→長い道のりを運ばれた下流の石ほど、角がとれて小さく丸くなります。',
    add: [
      ...fresh(),
      angular(20, 40, 44),
      angular(80, 60, 30),
      lb(70, 24, '上流の石', 12, C.blue, 'middle', true),
      ar(135, 80, 185, 80, C.blue),
      lb(160, 66, 'ぶつかって', 10, C.gray),
      ci(215, 80, 14, undefined, C.gray, FILL.gray),
      ci(250, 90, 9, undefined, C.gray, FILL.gray),
      ci(278, 82, 6, undefined, C.gray, FILL.gray),
      lb(245, 24, '下流の石', 12, C.blue, 'middle', true),
      ...cap('上流：大きく角ばる ／ 下流：小さく丸い', C.blue, FILL.blue),
    ],
  },
  {
    note: '❓川が曲がっているところでは、どうなるでしょう。→外側は、水がまっすぐ進もうとして岸におしつけられるので、流れが速く、岸がけずられます。内側は流れがおそく、運ばれてきた土砂が積もります。',
    add: [
      ...fresh(),
      pg([[20, 110], [190, 110], [222, 96], [232, 60], [232, 10], [200, 10], [200, 50], [190, 70], [170, 80], [20, 80]], C.blue, FILL.blue),
      ar(198, 94, 216, 110, C.red),
      ci(150, 88, 3, undefined, C.gray, FILL.gray),
      ci(165, 86, 3, undefined, C.gray, FILL.gray),
      ci(180, 79, 3, undefined, C.gray, FILL.gray),
      lb(14, 30, '内側：流れがおそい → 堆積', 11, C.green, 'start', true),
      lb(14, 50, '外側：流れが速い → しん食', 11, C.red, 'start', true),
      ...cap('カーブの外側はけずられ、内側に積もる', C.main, FILL.warm),
    ],
  },
  {
    note: '❓風化（ふうか）としん食は同じことでしょうか。→ちがいます。風化は、温度の変化や水のはたらきで、岩がその場でもろくくずれること。まだ運ばれてはいません。しん食は、流れる水がけずって持ち去ることです。',
    add: [
      ...fresh(),
      bx(15, 20, 135, 100, undefined, C.gray, FILL.gray),
      lb(82, 36, '風化', 14, C.main, 'middle', true),
      angular(45, 55, 26),
      ln(90, 75, 84, 95, C.red, true),
      ci(100, 96, 4, undefined, C.gray, FILL.gray),
      ci(112, 100, 3, undefined, C.gray, FILL.gray),
      lb(82, 112, 'その場でくずれる', 10, C.gray),
      bx(170, 20, 135, 100, undefined, C.blue, FILL.blue),
      lb(237, 36, 'しん食', 14, C.blue, 'middle', true),
      angular(190, 60, 22),
      ar(225, 80, 290, 80, C.red),
      lb(237, 108, 'けずられて運ばれる', 10, C.gray),
      ...cap('その場でくずれる＝風化 ／ けずって運ぶ＝しん食', C.ink, FILL.warm),
    ],
  },
  {
    note: 'まとめです。❓上流は？→坂が急で流れが速く、しん食と運搬が強いので、V字谷ができ、石は大きく角ばっています。❓下流は？→坂がゆるく流れがおそいので、堆積が強く、平野や三角州ができ、石は小さく丸くなります。',
    add: [
      ...fresh(),
      bx(15, 20, 140, 120, undefined, C.blue, FILL.blue),
      lb(85, 38, '上流', 14, C.blue, 'middle', true),
      lb(85, 68, '速い → しん食・運搬', 11),
      lb(85, 92, 'V字谷', 12, C.main, 'middle', true),
      lb(85, 116, '石は大きく角ばる', 11),
      bx(165, 20, 140, 120, undefined, C.green, FILL.green),
      lb(235, 38, '下流', 14, C.green, 'middle', true),
      lb(235, 68, 'ゆるい → 堆積', 11),
      lb(235, 92, '平野・三角州', 12, C.main, 'middle', true),
      lb(235, 116, '石は小さく丸い', 11),
      ...cap('カーブは 外側がしん食・内側が堆積', C.ink, FILL.warm),
    ],
  },
]);

// ══ 高気圧・低気圧と風のふき方 ══
const pol = (cx: number, cy: number, ang: number, r: number) => {
  const a = (ang * Math.PI) / 180;
  return { x: cx + r * Math.cos(a), y: cy - r * Math.sin(a) };
};
const swirl = (cx: number, cy: number, out: boolean, color: string): DiagramElement[] => {
  const els: DiagramElement[] = [];
  for (let a = 45; a < 360; a += 90) {
    const p1 = out ? pol(cx, cy, a, 24) : pol(cx, cy, a, 58);
    const p2 = out ? pol(cx, cy, a - 40, 58) : pol(cx, cy, a + 40, 24);
    els.push(ar(p1.x, p1.y, p2.x, p2.y, color));
  }
  return els;
};
const kiatsu: DiagramFigure = show([
  {
    note: '天気図には「高」「低」と書いてあります。❓これは何を表しているのでしょう。→まわりより気圧（きあつ：空気の重み）が高いところが高気圧、低いところが低気圧です。',
    add: [ci(90, 70, 40, '高', C.red, FILL.red, 26), ci(230, 70, 40, '低', C.blue, FILL.blue, 26), ...cap2('高気圧：まわりより気圧が高い', '低気圧：まわりより気圧が低い', C.red, C.blue)],
  },
  {
    note: '❓では、なぜ風がふくのでしょう。→空気は、気圧の高いところから低いところへ流れようとするからです。ふくらませたふうせんの口をあけると、空気が外へ出ていくのと同じです。',
    add: [ar(134, 70, 186, 70, C.main), lb(160, 54, '風', 13, C.main, 'middle', true), ...cap('風は 気圧が高いほう → 低いほう へふく', C.main, FILL.warm)],
  },
  {
    note: '❓高気圧の中心では、空気はどう動くでしょう。→まわりへふき出すので、それをおぎなうように、上の空気が下りてきます（下降気流：かこうきりゅう）。❓それで天気はどうなる？→下りる空気の中では雲ができにくく、晴れやすくなります。',
    add: [
      ...fresh(),
      ln(20, 120, 300, 120, C.ink, false, 3),
      lb(160, 22, '高気圧', 13, C.red, 'middle', true),
      ar(160, 34, 160, 106, C.red),
      ar(110, 34, 110, 106, C.red),
      ar(210, 34, 210, 106, C.red),
      ar(150, 112, 60, 112, C.blue),
      ar(170, 112, 260, 112, C.blue),
      lb(262, 70, '下降気流', 12, C.red, 'middle', true),
      ...cap('中心で空気が下りる → 雲ができにくい → 晴れ', C.red, FILL.red),
    ],
  },
  {
    note: '❓低気圧の中心では？→まわりから空気がふきこんで集まるので、行き場がなくなった空気は上へのぼります（上昇気流：じょうしょうきりゅう）。❓上にのぼるとどうなる？→高いところで冷やされ、ふくまれていた水蒸気が水てきになって雲ができます。だから、くもりや雨になりやすいのです。',
    add: [
      ...fresh(),
      ln(20, 120, 300, 120, C.ink, false, 3),
      lb(160, 132, '低気圧', 13, C.blue, 'middle', true),
      ar(60, 112, 145, 112, C.blue),
      ar(260, 112, 175, 112, C.blue),
      ar(160, 104, 160, 40, C.blue),
      ci(140, 28, 16, undefined, C.gray, FILL.gray),
      ci(165, 24, 20, undefined, C.gray, FILL.gray),
      ci(190, 30, 14, undefined, C.gray, FILL.gray),
      lb(230, 70, '上昇気流', 12, C.blue, 'start', true),
      ...cap('空気がのぼる → 雲ができる → くもり・雨', C.blue, FILL.blue),
    ],
  },
  {
    note: '❓風は、高気圧から低気圧へまっすぐふくのでしょうか。→じつは、まっすぐには進みません。地球が自転（じてん）しているので、北半球では、風の進む向きが右へそれます。',
    add: [
      ...fresh(),
      ln(40, 55, 270, 55, C.gray, true, 2),
      lb(160, 40, 'まっすぐなら', 11, C.gray),
      ln(40, 80, 130, 90, C.main, false, 2.5),
      ln(130, 90, 200, 108, C.main, false, 2.5),
      ar(200, 108, 268, 130, C.main),
      lb(230, 88, '右へそれる', 12, C.red, 'middle', true),
      ...cap('北半球では、進む向きが右へそれる', C.red, FILL.red),
    ],
  },
  {
    note: '❓すると、高気圧のまわりの風はどうなるでしょう。→外へふき出しながら右へそれるので、全体では時計回りの渦（うず）になります。',
    add: [...fresh(), ci(160, 76, 20, '高', C.red, FILL.red, 16), ...swirl(160, 76, true, C.red), ...cap('高気圧：時計回りにふき出す', C.red, FILL.red)],
  },
  {
    note: '❓では低気圧のまわりは？→中心へふきこみながら右へそれるので、反時計回りの渦になります。北半球の日本では、高気圧と低気圧で回る向きが逆です。',
    add: [...fresh(), ci(160, 76, 20, '低', C.blue, FILL.blue, 16), ...swirl(160, 76, false, C.blue), ...cap('低気圧：反時計回りにふきこむ', C.blue, FILL.blue)],
  },
  {
    note: '❓天気図の線（等圧線：とうあつせん）のこみぐあいは何を表すのでしょう。→線の間隔がせまいところは、短いきょりで気圧が大きく変わっています。急な坂ほど水が速く流れるように、気圧の差が急なほど風は強くふきます。',
    add: [
      ...fresh(),
      ln(15, 40, 150, 40, C.gray, false, 2),
      ln(15, 52, 150, 52, C.gray, false, 2),
      ln(15, 64, 150, 64, C.gray, false, 2),
      lb(82, 86, 'せまい', 12, C.red, 'middle', true),
      ar(82, 100, 82, 130, C.red),
      lb(82, 22, '強い風', 13, C.red, 'middle', true),
      ln(170, 30, 305, 30, C.gray, false, 2),
      ln(170, 60, 305, 60, C.gray, false, 2),
      ln(170, 90, 305, 90, C.gray, false, 2),
      lb(238, 112, '広い', 12, C.blue, 'middle', true),
      lb(238, 14, '弱い風', 13, C.blue, 'middle', true),
      ...cap('等圧線の間隔がせまい ＝ 風が強い', C.red, FILL.red),
    ],
  },
  {
    note: 'まとめです。❓高気圧と低気圧のちがいは？→高気圧は下降気流で晴れやすく、時計回りにふき出します。低気圧は上昇気流で雲ができやすく、反時計回りにふきこみます。',
    add: [
      ...fresh(),
      bx(15, 20, 140, 120, undefined, C.red, FILL.red),
      lb(85, 38, '高気圧', 14, C.red, 'middle', true),
      lb(85, 66, '下降気流', 12),
      lb(85, 88, '晴れやすい', 12),
      lb(85, 110, '時計回りにふき出す', 11),
      bx(165, 20, 140, 120, undefined, C.blue, FILL.blue),
      lb(235, 38, '低気圧', 14, C.blue, 'middle', true),
      lb(235, 66, '上昇気流', 12),
      lb(235, 88, 'くもり・雨', 12),
      lb(235, 110, '反時計回りにふきこむ', 11),
      ...cap('等圧線がせまいほど風は強い', C.ink, FILL.warm),
    ],
  },
]);

// ══ 停滞前線と閉塞前線 ══
const teitai: DiagramFigure = show([
  {
    note: '❓前線（ぜんせん）とは何でしょう。→冷たい空気のかたまりと、暖かい空気のかたまり（それぞれ気団：きだん）がぶつかる境目です。',
    add: [bx(15, 30, 120, 90, '冷たい\n気団', C.blue, FILL.blue, 14), bx(185, 30, 120, 90, '暖かい\n気団', C.red, FILL.red, 14), ln(160, 20, 160, 130, C.ink, false, 3), lb(160, 138, '前線', 12, C.ink, 'middle', true), ...cap('冷たい気団と暖かい気団の境目 ＝ 前線')],
  },
  {
    note: '❓では、停滞前線（ていたいぜんせん）とは？→冷たい空気と暖かい空気の力がつり合って、おしあいをして動かない前線です。❓なぜ動かない？→どちらも相手をおし返せないからです。',
    add: [ar(60, 134, 140, 134, C.blue), ar(260, 134, 180, 134, C.red), ...cap('力がつり合う → 前線が動かない（停滞）', C.ink, FILL.warm)],
  },
  {
    note: '❓なぜ、停滞前線は長雨になるのでしょう。→ぶつかったところで、暖かい空気が冷たい空気の上へのぼり、雲ができるからです。前線が同じ場所にとどまるので、雨が何日も続きます。',
    add: [
      ...fresh(),
      pg([[170, 128], [310, 128], [310, 60], [120, 72]], C.red, FILL.red),
      pg([[10, 128], [170, 128], [120, 72], [10, 72]], C.blue, FILL.blue),
      ci(100, 40, 16, undefined, C.gray, FILL.gray),
      ci(126, 34, 20, undefined, C.gray, FILL.gray),
      ci(152, 42, 14, undefined, C.gray, FILL.gray),
      ar(190, 110, 150, 78, C.red),
      lb(250, 100, '暖かい空気', 12, C.red, 'middle', true),
      lb(60, 105, '冷たい空気', 12, C.blue, 'middle', true),
      ...cap('暖かい空気がのぼる → 雲 → 同じ場所で長雨', C.blue, FILL.blue),
    ],
  },
  {
    note: '❓いつ、そんな前線ができるのでしょう。→日本では、6月ごろの梅雨前線（つゆぜんせん）と、9月ごろの秋雨前線（あきさめぜんせん）が停滞前線の代表です。梅雨の長雨や秋の長雨は、このためです。',
    add: [...fresh(), bx(20, 25, 130, 70, '梅雨前線\n6月ごろ', C.blue, FILL.blue, 14), bx(170, 25, 130, 70, '秋雨前線\n9月ごろ', C.blue, FILL.blue, 14), ...cap('どちらも 停滞前線 → 長雨', C.blue, FILL.blue)],
  },
  {
    note: '❓低気圧にできる前線は？→低気圧の中心から、温暖前線（おんだんぜんせん）と寒冷前線（かんれいぜんせん）がのびています。❓進む速さはどうちがう？→寒冷前線のほうが速く、温暖前線のほうがおそいのです。',
    add: [
      ...fresh(),
      lb(70, 30, '温暖前線', 12, C.red, 'middle', true),
      ar(20, 55, 70, 55, C.red),
      lb(70, 75, 'ゆっくり', 11, C.red),
      lb(70, 100, '寒冷前線', 12, C.blue, 'middle', true),
      ar(20, 125, 190, 125, C.blue),
      lb(230, 125, 'はやい', 11, C.blue, 'middle', true),
      ...cap('寒冷前線は 温暖前線より速く進む', C.blue, FILL.blue),
    ],
  },
  {
    note: '❓寒冷前線のほうが速いと、そのうちどうなるでしょう。→だんだん近づいて、ついに温暖前線に追いつきます。',
    add: [
      ...fresh(),
      lb(14, 22, '①はなれている', 11, C.gray, 'start'),
      ci(40, 42, 11, '寒', C.blue, FILL.blue, 12),
      ci(180, 42, 11, '温', C.red, FILL.red, 12),
      lb(14, 66, '②近づく', 11, C.gray, 'start'),
      ci(100, 86, 11, '寒', C.blue, FILL.blue, 12),
      ci(210, 86, 11, '温', C.red, FILL.red, 12),
      lb(14, 110, '③追いつく', 11, C.gray, 'start'),
      ci(222, 130, 11, '寒', C.blue, FILL.blue, 12),
      ci(244, 130, 11, '温', C.red, FILL.red, 12),
      ...cap('速い寒冷前線が 温暖前線に追いつく', C.blue, FILL.blue),
    ],
  },
  {
    note: '❓追いつくと、どうなるでしょう。→2つの前線が重なって、閉塞前線（へいそくぜんせん）になります。❓そのとき、暖かい空気は？→地面から上へ、おし上げられてしまいます。',
    add: [
      ...fresh(),
      bx(15, 90, 290, 40, undefined, C.blue, FILL.blue),
      bx(100, 30, 120, 50, '暖かい空気', C.red, FILL.red, 13),
      ar(160, 84, 160, 62, C.red),
      lb(160, 112, '冷たい空気', 12, C.blue, 'middle', true),
      lb(260, 50, '地面から\nはなされる', 11, C.gray),
      ...cap('暖かい空気が上へおし上げられる（閉塞前線）', C.red, FILL.red),
    ],
  },
  {
    note: '❓では、なぜ低気圧はおとろえていくのでしょう。→低気圧は、暖かい空気がのぼって雲をつくることで元気になります。おし上げられて地面から切りはなされると、そのもとがなくなるので、やがておとろえて消えていきます。',
    add: [...fresh(), ...flow(['温暖前線\n寒冷前線', '追いつく\n閉塞前線', '低気圧が\nおとろえる'], 40, { h: 60, size: 13, color: C.blue, fill: FILL.blue }).flat(), ...cap('前線の一生：できる → 追いつく → おとろえる')],
  },
]);

// ══ 台風の進路と風のふき方 ══
const taifuu: DiagramFigure = show([
  {
    note: '台風は、南の海の上でできる熱帯低気圧（ねったいていきあつ）が、大きく発達したものです。❓なぜ南の海でできるのでしょう。→海水があたたかく、水蒸気がたくさん出るからです。',
    add: [bx(15, 100, 290, 40, '南のあたたかい海', C.blue, FILL.blue, 13), ar(60, 96, 60, 50, C.red), ar(110, 96, 110, 60, C.red), ar(160, 96, 160, 40, C.red), lb(110, 30, '水蒸気', 13, C.red, 'middle', true), ...cap('あたたかい海 → 水蒸気がたくさん出る', C.red, FILL.red)],
  },
  {
    note: '❓水蒸気がたくさんあると、どうなるでしょう。→上空で水てきにかわるとき、まわりに熱を出します。❓その熱でどうなる？→空気があたためられて上へのぼり、さらに水蒸気が集まって、雲が大きく育ちます。これをくり返して台風は発達します。',
    add: [...fresh(), ...flow(['水蒸気が\n水てきに', '熱が出る\n空気がのぼる', 'さらに水蒸気\nが集まる'], 30, { h: 60, size: 12, color: C.red, fill: FILL.red }).flat(), ...cap('くり返して 雲が大きく育つ', C.red, FILL.red)],
  },
  {
    note: '❓台風のまわりの風は、どうふくでしょう。→低気圧なので、まわりから反時計回りにふきこみます。❓では、中心はどうなっている？→ふきこんだ空気は中心のまわりで上へのぼり、中心そのものは風が弱く、雲も少ない「台風の目」になります。',
    add: [...fresh(), ci(160, 76, 20, '目', C.blue, FILL.blue, 13), ...swirl(160, 76, false, C.blue), ...cap('反時計回りにふきこむ ／ 中心（目）は静か', C.blue, FILL.blue)],
  },
  {
    note: '❓台風が進むとき、風が特に強いのはどちら側でしょう。→進む向きに向かって右側です。❓なぜ右側が強い？→右側では、台風の風の向きが、台風の進む向きと同じになり、2つの速さが足されるからです。左側は向きが逆なので、引き算されて弱まります。',
    add: [
      ...fresh(),
      ci(170, 76, 42, '目', C.blue, FILL.blue, 13),
      ar(50, 130, 50, 40, C.gray),
      lb(50, 24, '台風が進む向き', 11, C.gray, 'middle', true),
      ar(230, 110, 230, 44, C.red),
      lb(266, 76, '右側\n強い', 12, C.red, 'middle', true),
      ar(110, 44, 110, 110, C.blue),
      lb(84, 76, '左側\n弱め', 12, C.blue, 'middle', true),
      ...cap('右側：風の向き ＝ 進む向き → 足される', C.red, FILL.red),
    ],
  },
  {
    note: '❓ほんとうに差が出るのでしょうか。→たとえば、台風の風が秒速30m、台風が進む速さが秒速10mだとします。右側は30＋10＝40m、左側は30−10＝20m。右側は左側の2倍の強さです。',
    add: [...fresh(), bx(20, 25, 130, 70, '右側\n30＋10\n＝ 40m', C.red, FILL.red, 14), bx(170, 25, 130, 70, '左側\n30−10\n＝ 20m', C.blue, FILL.blue, 14), ...cap('右側は左側の 2倍の強さ（40 ÷ 20）', C.red, FILL.red)],
  },
  {
    note: '❓台風はどこを通って日本に来るのでしょう。→南の海で生まれて、はじめは西や北へ進みます。日本付近まで来ると、上空にふいている偏西風（へんせいふう）にのって、北や東よりに向きを変えることが多くなります。',
    add: [
      ...fresh(),
      ln(30, 128, 80, 90, C.main, false, 2.5),
      ln(80, 90, 120, 55, C.main, false, 2.5),
      ln(120, 55, 190, 42, C.main, false, 2.5),
      ar(190, 42, 265, 60, C.main),
      lb(50, 140, '南の海', 11, C.gray),
      bx(130, 80, 50, 24, '日本', C.green, FILL.green, 12),
      ar(190, 14, 290, 14, C.blue),
      lb(240, 28, '偏西風', 11, C.blue, 'middle', true),
      ...cap('北へ進み、偏西風にのって東へ向きを変える', C.main, FILL.warm),
    ],
  },
  {
    note: '❓陸に上がると、台風はどうなるでしょう。→水蒸気の補給が止まるので、勢力がおとろえます。冷たい海に出たときも同じです。❓なぜ？→台風は、あたたかい海の水蒸気をもとにして元気になっていたからです。',
    add: [...fresh(), bx(15, 60, 140, 60, '海の上\n水蒸気がある', C.blue, FILL.blue, 13), bx(165, 60, 140, 60, '陸の上\n水蒸気が来ない', C.green, FILL.green, 13), lb(85, 40, '元気', 12, C.red, 'middle', true), lb(235, 40, 'おとろえる', 12, C.gray, 'middle', true), ...cap('水蒸気の補給が止まると おとろえる')],
  },
  {
    note: 'まとめです。❓台風の3つの特ちょうは？→①中心（目）は風が弱く雲が少ない。②進行方向の右側が特に強い。③陸に上がるとおとろえる。それぞれ、ふきこむ風と進む向きが足されるから、水蒸気のもとがなくなるから、という理由がありました。',
    add: [...fresh(), bx(15, 15, 290, 34, '中心（目）は風が弱く、雲も少ない', C.blue, FILL.blue, 12), bx(15, 57, 290, 34, '進行方向の右側は風が強い（足される）', C.red, FILL.red, 12), bx(15, 99, 290, 34, '陸に上がると水蒸気がなくなりおとろえる', C.green, FILL.green, 12)],
  },
]);

// ══ 示相化石と示準化石 ══
const layers = (): DiagramElement[] => [
  bx(20, 20, 280, 26, undefined, C.gray, FILL.gray),
  bx(20, 46, 280, 26, undefined, C.gray, FILL.yellow),
  bx(20, 72, 280, 26, undefined, C.gray, FILL.gray),
  bx(20, 98, 280, 26, undefined, C.gray, FILL.yellow),
];
const fossil = (x: number, y: number): DiagramElement => ci(x, y, 8, '化', C.main, FILL.warm, 9);
const jisou: DiagramFigure = show([
  {
    note: '化石は、大昔の生き物のからだや足あとが、地層の中にのこったものです。❓化石からは、何がわかるのでしょう。→手がかりが2つあります。「そのころの場所のようす」と「その地層ができた時代」です。',
    add: [...layers(), fossil(100, 59), fossil(220, 111), ...cap2('場所のようす → 示相化石（しそうかせき）', '時代 → 示準化石（しじゅんかせき）', C.blue, C.main)],
  },
  {
    note: '❓まず、「そのころの場所のようす」がわかる化石は？→示相化石です。「相」は、ようす・すがたという意味です。❓なぜようすがわかるのでしょう。→その生き物がすめる場所は、決まっているからです。',
    add: [...fresh(), bx(20, 40, 120, 50, '示相化石', C.blue, FILL.blue, 15), ar(146, 65, 174, 65, C.blue), bx(180, 40, 120, 50, '当時の場所の\nようす', C.blue, FILL.blue, 13), ...cap('相 ＝ ようす・すがた', C.blue, FILL.blue)],
  },
  {
    note: '❓サンゴの化石が見つかったら、何がわかるでしょう。→サンゴは、あたたかくてきれいな浅い海でしか生きられません。だから化石が出れば、そこは昔、あたたかい浅い海だったとわかります。',
    add: [...fresh(), bx(15, 20, 290, 100, undefined, C.blue, FILL.blue), lb(160, 36, 'あたたかく浅い海', 12, C.blue, 'middle', true), pg([[100, 116], [110, 84], [120, 116]], C.red, FILL.red), pg([[150, 116], [160, 76], [170, 116]], C.red, FILL.red), pg([[200, 116], [210, 90], [220, 116]], C.red, FILL.red), lb(160, 62, 'サンゴ', 12, C.red, 'middle', true), ...cap('サンゴの化石 → あたたかい浅い海だった', C.red, FILL.red)],
  },
  {
    note: '❓ほかにはどんな例があるでしょう。→しじみの化石なら、河口や湖のような、塩分のうすい水の場所。ブナの葉の化石なら、すずしい気候だったとわかります。❓どんな生き物が示相化石になれる？→すむ場所がはっきり決まっている生き物です。どこでも生きられる生き物では、場所を決める手がかりにならないからです。',
    add: [...fresh(), bx(15, 15, 90, 40, 'サンゴ', C.red, FILL.red, 13), bx(115, 15, 190, 40, 'あたたかく浅い海', C.red, FILL.red, 13), bx(15, 62, 90, 40, 'しじみ', C.blue, FILL.blue, 13), bx(115, 62, 190, 40, '河口や湖', C.blue, FILL.blue, 13), bx(15, 109, 90, 40, 'ブナ', C.green, FILL.green, 13), bx(115, 109, 190, 40, 'すずしい気候', C.green, FILL.green, 13)],
  },
  {
    note: '❓では、「地層ができた時代」がわかる化石は？→示準化石です。「準」は、ものさし・めやすという意味で、時代をはかるものさしになる化石です。',
    add: [...fresh(), bx(10, 30, 96, 36, '古生代', C.gray, FILL.gray, 13), bx(112, 30, 96, 36, '中生代', C.gray, FILL.gray, 13), bx(214, 30, 96, 36, '新生代', C.gray, FILL.gray, 13), lb(58, 90, 'サンヨウチュウ', 11, C.main, 'middle', true), lb(160, 90, 'アンモナイト', 11, C.main, 'middle', true), lb(262, 90, 'ナウマンゾウ', 11, C.main, 'middle', true), ...cap('準 ＝ ものさし（時代をはかる）', C.main, FILL.warm)],
  },
  {
    note: '❓なぜ、アンモナイトが出ると中生代（ちゅうせいだい）とわかるのでしょう。→アンモナイトは、中生代にだけさかえて、そのあと絶滅（ぜつめつ）したからです。ほかの時代の地層からは出てきません。',
    add: [...fresh(), bx(10, 30, 96, 36, '古生代', C.gray, FILL.gray, 13), bx(112, 30, 96, 36, '中生代', C.gray, FILL.gray, 13), bx(214, 30, 96, 36, '新生代', C.gray, FILL.gray, 13), bx(112, 78, 96, 20, 'アンモナイト', C.red, FILL.red, 11), lb(58, 88, '×', 16, C.gray), lb(262, 88, '×', 16, C.gray), ...cap('中生代だけにいた → 出れば中生代の地層', C.red, FILL.red)],
  },
  {
    note: '❓示準化石になれる生き物には、どんな条件が必要でしょう。→①短い時代だけにさかえた ②広い範囲にたくさんいた、の2つです。❓なぜ①が必要？→長い時代に生きた生き物だと、化石が出ても「どの時代か」をしぼれないからです。',
    add: [...fresh(), lb(14, 22, '短い時代だけ', 12, C.green, 'start', true), bx(112, 34, 70, 18, undefined, C.green, FILL.green), lb(14, 76, '長い時代ずっと', 12, C.red, 'start', true), bx(20, 88, 280, 18, undefined, C.red, FILL.red), lb(240, 43, '時代がしぼれる', 11, C.green, 'middle', true), lb(160, 122, '時代がしぼれない', 11, C.red, 'middle', true), ...cap('短い時代だけ → 時代をしぼりこめる', C.green, FILL.green)],
  },
  {
    note: '❓では、なぜ②の「広い範囲」も必要なのでしょう。→広い範囲にいた生き物なら、はなれた場所の地層どうしを、同じ目印でくらべられるからです。最後に、見分け方です。場所のようす→示相化石、時代→示準化石。',
    add: [...fresh(), bx(15, 20, 130, 30, 'A地点の地層', C.gray, FILL.gray, 12), bx(175, 20, 130, 30, 'B地点の地層', C.gray, FILL.gray, 12), fossil(80, 62), fossil(240, 62), ln(88, 62, 232, 62, C.main, true), lb(160, 82, '同じ化石 → 同じ時代', 12, C.main, 'middle', true), ...cap2('場所のようす → 示相化石', '時代 → 示準化石', C.blue, C.main)],
  },
]);

export const DIAGRAMS_OLD_RIKAF_1: Record<string, DiagramFigure> = {
  '流れる水のはたらき（しん食・運搬・堆積）': kawa,
  '高気圧・低気圧と風のふき方': kiatsu,
  '停滞前線と閉塞前線・前線の一生': teitai,
  '台風の進路と風のふき方': taifuu,
  '示相化石と示準化石': jisou,
};

// ══ 熱の伝わり方 ══
const beaker = (x: number, y: number, w: number, h: number): DiagramElement => bx(x, y, w, h, undefined, C.blue, FILL.blue);
const nettsu: DiagramFigure = show([
  {
    note: '熱の伝わり方には、3つの種類があります。❓どれも同じ伝わり方なのでしょうか。→ちがいます。1つずつ、なぜそう伝わるのかを見ていきましょう。',
    add: flow(['伝導\n（でんどう）', '対流\n（たいりゅう）', '放射\n（ほうしゃ）'], 40, { h: 60, size: 13, color: C.red, fill: FILL.red }).flat(),
  },
  {
    note: '❓熱いスープに入れた金属のスプーンの持ち手まで熱くなるのは、なぜでしょう。→熱くなった部分のつぶがはげしくゆれ、となりのつぶをゆらし、それがリレーのように次々に伝わるからです。これが伝導です。',
    add: [
      ...fresh(),
      ci(40, 70, 16, undefined, C.red, '#FCA5A5'),
      ci(90, 70, 16, undefined, C.red, '#FDBA74'),
      ci(140, 70, 16, undefined, C.red, '#FDE68A'),
      ci(190, 70, 16, undefined, C.blue, FILL.yellow),
      ci(240, 70, 16, undefined, C.blue, FILL.blue),
      ar(62, 100, 260, 100, C.red),
      lb(40, 40, '熱い', 12, C.red, 'middle', true),
      lb(240, 40, '冷たい', 12, C.blue, 'middle', true),
      ...cap('物の中を、つぶのゆれがリレーして伝わる（伝導）', C.red, FILL.red),
    ],
  },
  {
    note: '❓ものによって、熱の伝わりやすさはちがうのでしょうか。→金属はよく伝え、木や紙や空気は伝えにくいです。❓では、冬に服を重ねて着るとあたたかいのはなぜ？→服の間の空気が熱を伝えにくく、体の熱がにげにくくなるからです。',
    add: [
      ...fresh(),
      lb(14, 22, '金属', 12, C.red, 'start', true),
      bx(70, 12, 230, 18, undefined, C.red, FILL.red),
      lb(14, 62, '木・紙', 12, C.gray, 'start', true),
      bx(70, 52, 110, 18, undefined, C.gray, FILL.gray),
      lb(14, 102, '空気', 12, C.blue, 'start', true),
      bx(70, 92, 40, 18, undefined, C.blue, FILL.blue),
      lb(250, 60, '熱の伝わる\nはやさ', 11, C.gray),
      ...cap('金属：よく伝える ／ 木・紙・空気：伝えにくい', C.ink, FILL.warm),
    ],
  },
  {
    note: '❓では、水や空気は、何であたたまるのでしょう。→水や空気は熱を伝えにくいので、あたためられた水そのものが動いて熱を運びます。これが対流です。❓なぜ上へ動く？→あたためられた水は体積がふえて軽くなるからです。',
    add: [
      ...fresh(),
      beaker(100, 20, 120, 100),
      ci(160, 132, 8, undefined, C.red, FILL.red),
      ar(160, 106, 160, 40, C.red),
      ar(112, 40, 112, 100, C.blue),
      ar(208, 40, 208, 100, C.blue),
      lb(160, 26, '軽い', 10, C.red),
      lb(58, 70, '冷たい水は\n下へ', 10, C.blue),
      lb(266, 70, '冷たい水は\n下へ', 10, C.blue),
      ...cap('あたたまった水が上へ、冷たい水が下へ（対流）', C.red, FILL.red),
    ],
  },
  {
    note: '❓部屋のエアコンで暖房するとき、風は上と下のどちらへ向けるとよいでしょう。→下です。❓なぜ？→あたたかい空気は軽くて上にたまるので、下へ送ると、あたたまった空気がのぼり、冷たい空気が下りる対流が起こって、部屋全体があたたまります。冷房はその逆で、上向きにします。',
    add: [
      ...fresh(),
      bx(20, 15, 280, 125, undefined, C.gray, FILL.gray),
      bx(30, 22, 60, 22, 'エアコン', C.blue, FILL.blue, 10),
      ar(60, 46, 60, 116, C.red),
      ar(110, 116, 110, 40, C.red),
      ar(150, 40, 250, 40, C.red),
      ar(250, 50, 250, 116, C.blue),
      ar(240, 126, 100, 126, C.blue),
      ...cap('暖房は下向き → 対流で 部屋全体があたたまる', C.red, FILL.red),
    ],
  },
  {
    note: '❓たき火から少しはなれても、顔が熱く感じるのはなぜでしょう。→空気は熱を伝えにくいので、伝導や対流ではありません。熱が光のように、まっすぐ直接とどくからです。これが放射です。太陽の熱が、間に空気のない宇宙をこえて地球にとどくのも放射です。',
    add: [
      ...fresh(),
      ci(50, 75, 22, '火', C.red, FILL.red, 14),
      ar(80, 60, 200, 60, C.red),
      ar(80, 75, 200, 75, C.red),
      ar(80, 90, 200, 90, C.red),
      ci(240, 75, 22, '顔', C.main, FILL.warm, 14),
      lb(140, 40, '間の空気をあたためずに', 11, C.gray),
      ...cap('はなれていても 熱が直接とどく（放射）', C.red, FILL.red),
    ],
  },
  {
    note: '❓では、問題で見分けるには？→「物の中を伝わる」なら伝導、「あたたまった水や空気が動いて運ぶ」なら対流、「はなれていてもとどく」なら放射です。文の中の言葉に注目します。',
    add: [
      ...fresh(),
      bx(10, 15, 145, 32, '物の中をじわじわ', C.gray, FILL.gray, 12),
      bx(175, 15, 135, 32, '伝導', C.red, FILL.red, 15),
      ar(158, 31, 172, 31, C.red),
      bx(10, 62, 145, 32, '水や空気が動く', C.gray, FILL.gray, 12),
      bx(175, 62, 135, 32, '対流', C.red, FILL.red, 15),
      ar(158, 78, 172, 78, C.red),
      bx(10, 109, 145, 32, 'はなれてもとどく', C.gray, FILL.gray, 12),
      bx(175, 109, 135, 32, '放射', C.red, FILL.red, 15),
      ar(158, 125, 172, 125, C.red),
    ],
  },
  {
    note: '例題です。ビーカーの水を下から熱すると全体があたたまるのはなぜでしょう。→下の水があたたまって軽くなり上へ、冷たい水が下へ入れかわる対流が起こるからです。❓もし上から熱したらどうなる？→あたたかい水は軽いので上にとどまり、入れかわりが起こらず、下はなかなかあたたまりません。',
    add: [
      ...fresh(),
      beaker(30, 20, 100, 95),
      ci(80, 128, 8, undefined, C.red, FILL.red),
      ar(80, 100, 80, 40, C.red),
      ar(42, 40, 42, 100, C.blue),
      ar(118, 40, 118, 100, C.blue),
      lb(80, 12, '下から', 12, C.red, 'middle', true),
      beaker(190, 20, 100, 95),
      bx(190, 20, 100, 25, undefined, C.red, FILL.red),
      ci(240, 8, 8, undefined, C.red, FILL.red),
      lb(240, 78, '入れかわらない', 10, C.gray),
      ...cap('下から熱する → 対流が起こる ／ 上から → 起こらない', C.ink, FILL.warm),
    ],
  },
]);

// ══ 熱量と温度変化 ══
const netsuryou: DiagramFigure = show([
  {
    note: '熱の量は、どう表すのでしょう。→水1gの温度を1℃上げるのに必要な熱の量を、1カロリーときめています。',
    add: [ci(70, 70, 26, '水\n1g', C.blue, FILL.blue, 13), ar(104, 70, 160, 70, C.red), bx(166, 45, 80, 50, '1℃\n上げる', C.red, FILL.red, 13), ...cap('水1gを1℃ 上げる熱 ＝ 1カロリー', C.red, FILL.red)],
  },
  {
    note: '❓水が2gだったら、必要な熱はどうなるでしょう。→2gそれぞれを1℃上げるので、2カロリーです。❓3gなら？→3カロリー。つまり、必要な熱は水の重さに比例します。',
    add: [
      ...fresh(),
      lb(14, 30, '1g', 12, C.blue, 'start', true),
      ci(80, 30, 10, undefined, C.blue, FILL.blue),
      lb(230, 30, '1カロリー', 12, C.red, 'middle', true),
      lb(14, 65, '2g', 12, C.blue, 'start', true),
      ci(80, 65, 10, undefined, C.blue, FILL.blue),
      ci(106, 65, 10, undefined, C.blue, FILL.blue),
      lb(230, 65, '2カロリー', 12, C.red, 'middle', true),
      lb(14, 100, '3g', 12, C.blue, 'start', true),
      ci(80, 100, 10, undefined, C.blue, FILL.blue),
      ci(106, 100, 10, undefined, C.blue, FILL.blue),
      ci(132, 100, 10, undefined, C.blue, FILL.blue),
      lb(230, 100, '3カロリー', 12, C.red, 'middle', true),
      ...cap('水の重さが2倍・3倍 → 必要な熱も2倍・3倍', C.blue, FILL.blue),
    ],
  },
  {
    note: '❓では、上げる温度を2℃にすると？→1℃上げるごとに1カロリーずつ必要なので、水1gで2カロリー。❓合わせると？→水の重さ（3g）×上げる温度（2℃）＝6カロリー。図の小さい四角1つが、1gを1℃上げる1カロリーです。',
    add: [
      ...fresh(),
      ...[0, 1, 2].flatMap((i) => [0, 1].map((j) => bx(100 + i * 44, 24 + j * 44, 40, 40, '1', C.red, FILL.red, 12))),
      lb(90, 66, '上げる\n温度\n2℃', 11, C.red, 'end', true),
      lb(164, 12, '水の重さ 3g', 11, C.blue, 'middle', true),
      ...cap('3g × 2℃ ＝ 6カロリー（四角が6こ）', C.red, FILL.red),
    ],
  },
  {
    note: '例題です。200gの水を20℃から50℃まであたためるのに必要な熱量は？❓計算に使うのは50でしょうか。→ちがいます。使うのは「上がった温度」です。50−20＝30℃。❓なぜ？→1℃上がるごとに必要な熱が決まっているので、もとの温度は関係ないからです。',
    add: [
      ...fresh(),
      ln(30, 60, 290, 60, C.ink, false, 2),
      lb(30, 45, '20℃', 13, C.blue, 'middle', true),
      lb(290, 45, '50℃', 13, C.red, 'middle', true),
      ar(36, 90, 284, 90, C.red),
      lb(160, 110, '上がった温度 50−20 ＝ 30℃', 12, C.red, 'middle', true),
      ...cap('使うのは「上がった温度」30℃', C.red, FILL.red),
    ],
  },
  {
    note: '❓それで、必要な熱量は？→水の重さ×上がった温度＝200×30＝6000カロリーです。',
    add: [...fresh(), bx(15, 40, 80, 50, '200g', C.blue, FILL.blue, 15), lb(108, 65, '×', 20), bx(122, 40, 80, 50, '30℃', C.red, FILL.red, 15), lb(215, 65, '＝', 20), bx(228, 40, 80, 50, '6000\nカロリー', C.green, FILL.green, 13), ...cap('200 × 30 ＝ 6000カロリー', C.green, FILL.green)],
  },
  {
    note: '❓あたたかい水と冷たい水を混ぜると、どうなるでしょう。→熱いほうから冷たいほうへ熱が移って、同じ温度で落ち着きます。❓熱はなくなったり、ふえたりする？→しません。熱いほうが失った熱と、冷たいほうが得た熱は同じ量です。',
    add: [
      ...fresh(),
      bx(20, 25, 100, 90, '熱い水', C.red, FILL.red, 13),
      bx(200, 25, 100, 90, '冷たい水', C.blue, FILL.blue, 13),
      ar(124, 70, 196, 70, C.red),
      lb(160, 54, '熱が移る', 11, C.red, 'middle', true),
      ...cap('失った熱 ＝ 得た熱（熱は消えない）', C.ink, FILL.warm),
    ],
  },
  {
    note: '例題です。60℃の水100gと、20℃の水300gを混ぜます。❓混ぜたあとを□℃とすると？→熱い水が失う熱は100×（60−□）、冷たい水が得る熱は300×（□−20）で、この2つが等しくなります。□＝30のとき、100×30＝3000と300×10＝3000で、たしかに等しくなります。',
    add: [
      ...fresh(),
      bx(15, 20, 130, 60, '60℃・100g', C.red, FILL.red, 13),
      bx(175, 20, 130, 60, '20℃・300g', C.blue, FILL.blue, 13),
      lb(80, 100, '失う 100×(60−□)', 11, C.red, 'middle', true),
      lb(240, 100, '得る 300×(□−20)', 11, C.blue, 'middle', true),
      ...cap('この2つが等しくなる □ を さがす', C.ink, FILL.warm),
    ],
  },
  {
    note: '❓これを一気に出すには？→重さで重みをつけた平均をとります。（100×60＋300×20）÷（100＋300）＝12000÷400＝30℃です。❓なぜこれでいい？→熱が移るだけなので、「重さ×温度」の合計は、混ぜる前も後も同じだからです。',
    add: [
      ...fresh(),
      bx(10, 20, 300, 34, '100×60 ＝ 6000 ／ 300×20 ＝ 6000', C.gray, FILL.gray, 12),
      bx(10, 62, 300, 34, '合計 12000 ÷ 全部の重さ 400', C.gray, FILL.gray, 12),
      bx(10, 104, 300, 34, '＝ 30℃', C.green, FILL.green, 16),
      ...cap('重さ × 温度 の合計 ÷ 重さの合計', C.green, FILL.green),
    ],
  },
  {
    note: '❓答えが正しいか、どう確かめる？→量が多いほうの温度に近くなっているかを見ます。冷たい水が3倍多いので、20℃に近い30℃は自然です。さらに、下がった30℃（60→30）と上がった10℃（20→30）の比は3：1で、水の重さ1：3の逆になっています。',
    add: [
      ...fresh(),
      ln(30, 60, 290, 60, C.ink, false, 2),
      lb(30, 44, '20℃', 12, C.blue, 'middle', true),
      lb(230, 44, '60℃', 12, C.red, 'middle', true),
      lb(126, 44, '30℃', 12, C.green, 'middle', true),
      ln(126, 52, 126, 68, C.green, false, 3),
      lb(78, 88, '上がる 10℃', 11, C.blue, 'middle', true),
      lb(178, 88, '下がる 30℃', 11, C.red, 'middle', true),
      ...cap('10：30 ＝ 1：3 は 重さ 300：100 の逆', C.green, FILL.green),
    ],
  },
]);

// ══ 電熱線の発熱 ══
const zig = (x1: number, x2: number, y: number, color: string = C.red): DiagramElement[] => {
  const n = 8;
  const els: DiagramElement[] = [];
  let px = x1;
  let py = y;
  for (let i = 1; i <= n; i++) {
    const nx = x1 + ((x2 - x1) * i) / n;
    const ny = i === n ? y : y + (i % 2 ? -8 : 8);
    els.push(ln(px, py, nx, ny, color, false, 2));
    px = nx;
    py = ny;
  }
  return els;
};
const denne: DiagramFigure = show([
  {
    note: '電熱線に電流を流すと、熱が出ます。❓なぜ熱が出るのでしょう。→電流が細い線の中を通りぬけるとき、通りにくさのぶんだけ、線がこすれるようにあたたまるからです。ドライヤーやトースターの中には、この電熱線が入っています。',
    add: [bx(20, 40, 50, 40, '電池', C.gray, FILL.gray, 12), ln(70, 60, 110, 60, C.gray, false, 2), ...zig(110, 210, 60), ln(210, 60, 250, 60, C.gray, false, 2), lb(160, 98, '電熱線', 12, C.red, 'middle', true), ...cap('電流が電熱線を通ると 熱が出る', C.red, FILL.red)],
  },
  {
    note: '❓発熱量は、何で決まるのでしょう。→同じ電池なら、流れる電流が大きいほど、たくさん発熱します。❓では電流の大きさは何で決まる？→電熱線の「通り道の広さ（太さ）」と「道のりの長さ」で決まります。',
    add: [...fresh(), ...flow(['太さ・長さ', '電流の大きさ', '発熱量'], 40, { h: 60, size: 13, color: C.red, fill: FILL.red }).flat(), ...cap('電流が大きい → 発熱量が大きい', C.red, FILL.red)],
  },
  {
    note: '❓なぜ、太いと電流が大きくなるのでしょう。→太い線は電流の通り道が広く、通りやすいからです。道はばが2倍になれば、同じ時間に通れる電流も2倍。だから発熱量も2倍になります。',
    add: [
      ...fresh(),
      bx(20, 20, 230, 24, undefined, C.red, FILL.red),
      ar(30, 32, 240, 32, C.red),
      lb(280, 32, '細い', 11, C.gray),
      bx(20, 70, 230, 48, undefined, C.red, FILL.red),
      ar(30, 84, 240, 84, C.red),
      ar(30, 104, 240, 104, C.red),
      lb(280, 94, '太い', 11, C.gray),
      ...cap('太さ2倍 → 通り道2倍 → 電流2倍 → 発熱量2倍', C.red, FILL.red),
    ],
  },
  {
    note: '❓では、なぜ長いと電流が小さくなるのでしょう。→通りぬける道のりが長いほど、電流は通りにくくなるからです。長さが2倍なら電流は半分、だから発熱量も半分になります。',
    add: [
      ...fresh(),
      bx(20, 25, 110, 30, undefined, C.red, FILL.red),
      ar(28, 40, 122, 40, C.red),
      lb(160, 40, '短い', 11, C.gray),
      bx(20, 75, 220, 30, undefined, C.red, FILL.red),
      ar(28, 90, 100, 90, C.red),
      lb(280, 90, '長い', 11, C.gray),
      ...cap('長さ2倍 → 電流1/2 → 発熱量1/2', C.red, FILL.red),
    ],
  },
  {
    note: '❓では、いちばんよく発熱するのは、どんな電熱線でしょう。→太くて短い電熱線です。通り道が広く、道のりも短いので、電流がたくさん流れるからです。長い電熱線を「よく発熱する」とかんちがいしないように注意します。',
    add: [
      ...fresh(),
      bx(20, 20, 130, 90, '太く\n短い', C.red, FILL.red, 16),
      lb(85, 124, 'よく発熱する', 12, C.red, 'middle', true),
      bx(170, 20, 130, 90, '細く\n長い', C.blue, FILL.blue, 16),
      lb(235, 124, 'あまり発熱しない', 12, C.blue, 'middle', true),
    ],
  },
  {
    note: '例題です。同じ材料の電熱線A（長さ10cm）とB（長さ20cm）を、同じかん電池につなぎます。水を早くあたためるのは？→Aです。❓なぜ？→Bの長さはAの2倍なので、電流は半分、発熱量も半分になるからです。',
    add: [
      ...fresh(),
      lb(14, 30, 'A', 14, C.red, 'start', true),
      bx(40, 18, 100, 24, undefined, C.red, FILL.red),
      ar(48, 30, 132, 30, C.red),
      lb(210, 30, '電流 2', 12, C.red, 'middle', true),
      lb(14, 80, 'B', 14, C.blue, 'start', true),
      bx(40, 68, 200, 24, undefined, C.blue, FILL.blue),
      ar(48, 80, 90, 80, C.blue),
      lb(275, 80, '電流 1', 12, C.blue, 'middle', true),
      ...cap('Aのほうが電流が大きい → 水が早くあたたまる', C.red, FILL.red),
    ],
  },
  {
    note: '❓長さも太さも2倍にしたら、発熱量はどうなるでしょう。→長さ2倍で電流は1/2倍、太さ2倍で電流は2倍。1/2×2＝1で、もとと同じです。打ち消しあうのです。',
    add: [...fresh(), bx(15, 40, 90, 50, '長さ2倍\n×1/2', C.blue, FILL.blue, 13), lb(115, 65, '×', 20), bx(125, 40, 90, 50, '太さ2倍\n×2', C.red, FILL.red, 13), lb(225, 65, '＝', 20), bx(235, 40, 75, 50, '×1\n同じ', C.green, FILL.green, 14), ...cap('1/2 × 2 ＝ 1（もとと同じ）', C.green, FILL.green)],
  },
  {
    note: '❓かん電池をふやしたら？→電池を直列につなぐと、電流をおす力が大きくなって電流がふえ、発熱量もふえます。❓水の温度で比べる実験では、何に気をつける？→水の量と時間をそろえないと、電熱線のちがいを比べられません。',
    add: [...fresh(), bx(15, 25, 130, 40, '電池をふやす', C.gray, FILL.gray, 13), ar(148, 45, 172, 45, C.red), bx(175, 25, 130, 40, '電流が大きい', C.red, FILL.red, 13), ar(240, 68, 240, 90, C.red), bx(175, 92, 130, 40, '発熱量がふえる', C.red, FILL.red, 13), bx(15, 92, 130, 40, '水の量・時間\nをそろえる', C.blue, FILL.blue, 11)],
  },
]);

// ══ 豆電球の明るさとつなぎ方 ══
const DIM = '#FEF9C3';
const MID = '#FDE68A';
const BRT = '#FACC15';
/** 回路。bat: 電池（1個・直列2個・並列2個）、bulb: 豆電球（1個・直列2個・並列2個）。 */
const ckt = (bat: '1' | 's' | 'p', bulb: '1' | 's' | 'p', fill: string, off?: boolean): DiagramElement[] => {
  const els: DiagramElement[] = [];
  const bulbXs = bulb === 'p' ? [180, 270] : [270];
  const bulbYs = bulb === 's' ? [46, 84] : [65];
  els.push(ln(50, 20, 270, 20, C.gray, false, 2), ln(50, 110, 270, 110, C.gray, false, 2), ln(50, 20, 50, 110, C.gray, false, 2));
  for (const x of bulbXs) els.push(ln(x, 20, x, 110, C.gray, false, 2));
  if (bat === 'p') els.push(ln(110, 20, 110, 110, C.gray, false, 2));
  if (bat === 's') els.push(bx(28, 36, 44, 22, '電池', C.gray, FILL.gray, 10), bx(28, 64, 44, 22, '電池', C.gray, FILL.gray, 10));
  else els.push(bx(28, 52, 44, 26, '電池', C.gray, FILL.gray, 10));
  if (bat === 'p') els.push(bx(88, 52, 44, 26, '電池', C.gray, FILL.gray, 10));
  for (const x of bulbXs) for (const y of bulbYs) els.push(ci(x, y, 13, off ? undefined : '球', C.main, off ? '#FFFFFF' : fill, 10));
  return els;
};
const mame: DiagramFigure = show([
  {
    note: '電池1個に豆電球1個をつないだときの明るさを「基準」にします。❓豆電球や電池をふやすと、なぜ明るさが変わるのでしょう。→明るさは、流れる電流の大きさで決まるからです。「電流はふえる？へる？」と考えるのがコツです。',
    add: [...ckt('1', '1', MID), ...cap('電池1個・豆電球1個 ＝ 基準の明るさ')],
  },
  {
    note: '❓豆電球を2個、直列（1本の道にならべる）につなぐと？→電流は2個を続けて通りぬけなければならず、通りにくさが2倍になるので、電流は半分。どちらも暗くなります。❓電池の減りは？→電流が少ないので、ゆっくり減ります。',
    add: [...fresh(), ...ckt('1', 's', DIM), ...cap('豆電球の直列 → 電流が半分 → 暗い（電池は長持ち）', C.blue, FILL.blue)],
  },
  {
    note: '❓豆電球を2個、並列（道を2本に分ける）につなぐと？→それぞれの道に、電池1個ぶんがそのままかかるので、1個ずつは基準と同じ明るさです。❓電池の減りは？→電池からは2本ぶんの電流が出ていくので、早く減ります。',
    add: [...fresh(), ...ckt('1', 'p', MID), ...cap('豆電球の並列 → 1個ずつ同じ明るさ（電池は早く減る）', C.green, FILL.green)],
  },
  {
    note: '❓電池を2個、直列につなぐと？→電池2個ぶんで電流をおすので、電流が2倍になり、明るくなります。',
    add: [...fresh(), ...ckt('s', '1', BRT), ...cap('電池の直列 → 電流が2倍 → 明るい', C.red, FILL.red)],
  },
  {
    note: '❓電池を2個、並列につなぐと？→電流をおす力は電池1個ぶんのままなので、明るさは同じです。❓では、なぜ長持ちするのでしょう。→必要な電流を2個の電池で分けて出すので、1個ずつの減りがおそくなるからです。',
    add: [...fresh(), ...ckt('p', '1', MID), ...cap('電池の並列 → 明るさは同じ・長持ち', C.green, FILL.green)],
  },
  {
    note: '❓ここまでをまとめると？→豆電球と電池では、直列と並列の効果が逆になります。混同しないように、いつも「電流はどうなる？」と考えましょう。',
    add: [
      ...fresh(),
      bx(10, 12, 145, 30, '豆電球の直列', C.gray, FILL.gray, 12), bx(165, 12, 145, 30, '暗い', C.blue, FILL.blue, 13),
      bx(10, 48, 145, 30, '豆電球の並列', C.gray, FILL.gray, 12), bx(165, 48, 145, 30, '同じ・早く減る', C.green, FILL.green, 13),
      bx(10, 84, 145, 30, '電池の直列', C.gray, FILL.gray, 12), bx(165, 84, 145, 30, '明るい', C.red, FILL.red, 13),
      bx(10, 120, 145, 30, '電池の並列', C.gray, FILL.gray, 12), bx(165, 120, 145, 30, '同じ・長持ち', C.green, FILL.green, 13),
    ],
  },
  {
    note: '❓並列の回路で、一方の豆電球をソケットから外すと？→もう一方はそのまま光ります。直列では、道が1本なので切れて両方消えます。❓なぜ？→並列は道が枝分かれしているので、残った道に電流が流れ続けるからです。',
    add: [
      ...fresh(),
      ...ckt('1', 'p', MID),
      ci(180, 65, 13, undefined, C.gray, '#FFFFFF'),
      ci(270, 65, 13, '球', C.main, MID, 10),
      lb(180, 90, '外した', 10, C.gray),
      ...cap('並列：外しても もう一方はつく ／ 直列：両方消える', C.green, FILL.green),
    ],
  },
  {
    note: '❓問題を見たら、どう考えればよいでしょう。①豆電球がふえるなら、直列は暗く、並列は同じ。②電池がふえるなら、直列は明るく、並列は同じで長持ち。この順に考えれば迷いません。',
    add: [...fresh(), bx(15, 20, 290, 40, '①豆電球がふえる → 直列は暗い・並列は同じ', C.blue, FILL.blue, 12), bx(15, 74, 290, 40, '②電池がふえる → 直列は明るい・並列は同じで長持ち', C.red, FILL.red, 12), ...cap('いつも「電流はふえる？へる？」')],
  },
]);

// ══ 組み合わせ滑車 ══
const ropes = (n: number, label: string, ropeLabel?: string): DiagramElement[] => {
  const x0 = 110;
  const xs = Array.from({ length: n }, (_, i) => x0 + (i - (n - 1) / 2) * 26);
  const els: DiagramElement[] = [ln(20, 12, 210, 12, C.ink, false, 3)];
  for (const x of xs) els.push(ln(x, 12, x, 70, C.gray, false, 1.8));
  els.push(bx(x0 - (n - 1) * 13 - 14, 70, (n - 1) * 26 + 28, 22, '動滑車', C.blue, FILL.blue, 10));
  els.push(ln(x0, 92, x0, 112, C.gray, false, 1.8));
  els.push(bx(x0 - 26, 112, 52, 26, label, C.main, FILL.warm, 12));
  if (ropeLabel) els.push(lb(262, 40, ropeLabel, 13, C.red, 'middle', true));
  return els;
};
const kassha: DiagramFigure = show([
  {
    note: '動滑車（どうかっしゃ）を使うと、物をつるすひもが何本かに分かれて、力を分け合います。❓引く力はどうやって出せばよいでしょう。→まず、動滑車と物のかたまりを、天井から支えているひもが何本あるか、かぞえます。',
    add: [...ropes(2, '物', 'ひも\n2本'), ...cap('動滑車のかたまりを支えるひもの数をかぞえる')],
  },
  {
    note: '❓なぜ、ひもの本数でわるのでしょう。→物の重さ80gを、4本のひもが同じだけ分けて支えているからです。1本あたり80÷4＝20g。手で引く力は、このひも1本ぶんです。',
    add: [
      ...fresh(),
      ...ropes(4, '80g', 'ひも\n4本'),
      lb(59, 40, '20g', 10, C.red, 'middle', true),
      lb(85, 40, '20g', 10, C.red, 'middle', true),
      lb(135, 40, '20g', 10, C.red, 'middle', true),
      lb(161, 40, '20g', 10, C.red, 'middle', true),
      ...cap('80g ÷ 4本 ＝ 20g（引く力）', C.red, FILL.red),
    ],
  },
  {
    note: '❓では、引くひもの長さはどうなるでしょう。→物を1cm上げるには、支えている4本のひもがそれぞれ1cmずつ短くならなければなりません。合わせて4cm、手もとでたぐりよせます。',
    add: [
      ...fresh(),
      ...ropes(4, '80g', 'ひも\n4本'),
      lb(59, 40, '1cm', 10, C.blue, 'middle', true),
      lb(85, 40, '1cm', 10, C.blue, 'middle', true),
      lb(135, 40, '1cm', 10, C.blue, 'middle', true),
      lb(161, 40, '1cm', 10, C.blue, 'middle', true),
      ...cap('1cm × 4本 ＝ 4cm 引く', C.blue, FILL.blue),
    ],
  },
  {
    note: '❓力が小さくなったので、まるまる得なのでしょうか。→いいえ。力は1/4になりましたが、引く長さは4倍です。力×長さは、20×4＝80。道具を使わずに80gを1cm持ち上げる、80×1＝80と同じです。これを仕事の原理といいます。',
    add: [...fresh(), bx(15, 25, 140, 70, '道具を使う\n20g × 4cm\n＝ 80', C.red, FILL.red, 14), bx(165, 25, 140, 70, '使わない\n80g × 1cm\n＝ 80', C.blue, FILL.blue, 14), ...cap('力で得したぶん、長さで損をする（同じ 80）', C.ink, FILL.warm)],
  },
  {
    note: '❓では、定滑車（ていかっしゃ）はどうでしょう。→天井に固定されていて動きません。ひもが1本で物を支えるので、力の大きさは変わらず、引く向きを下向きに変えるだけです。',
    add: [
      ...fresh(),
      ln(20, 12, 210, 12, C.ink, false, 3),
      ln(110, 12, 110, 24, C.gray, false, 2),
      ci(110, 40, 16, '定', C.blue, FILL.blue, 11),
      ln(94, 40, 94, 105, C.gray, false, 1.8),
      bx(70, 105, 48, 26, '100g', C.main, FILL.warm, 11),
      ar(126, 60, 126, 120, C.red),
      lb(180, 90, '引く力\n100g', 12, C.red, 'middle', true),
      ...cap('定滑車：力は同じ、向きだけ変える', C.blue, FILL.blue),
    ],
  },
  {
    note: '例題です。物が2本のひもで支えられ、100gの物を20cm持ち上げます。❓引く力は？→100÷2＝50g。❓引く長さは？→物が20cm上がるには、2本がそれぞれ20cmずつ短くなるので、20×2＝40cmです。',
    add: [...fresh(), ...ropes(2, '100g', 'ひも\n2本'), lb(262, 80, '力 50g\n長さ 40cm', 12, C.red, 'middle', true), ...cap('100÷2＝50g ／ 20×2＝40cm', C.red, FILL.red)],
  },
  {
    note: '例題です。物が4本のひもで支えられ、120gの物を30cm持ち上げました。❓力と長さは？→力は120÷4＝30g、長さは30×4＝120cm。❓確かめは？→力×長さは 30×120＝3600、道具なしの 120×30＝3600 と同じです。',
    add: [...fresh(), bx(15, 20, 90, 50, '力\n30g', C.red, FILL.red, 14), lb(118, 45, '×', 18), bx(128, 20, 90, 50, '長さ\n120cm', C.blue, FILL.blue, 14), lb(230, 45, '＝', 18), bx(240, 20, 70, 50, '3600', C.green, FILL.green, 14), bx(15, 84, 90, 50, '120g', C.gray, FILL.gray, 14), lb(118, 109, '×', 18), bx(128, 84, 90, 50, '30cm', C.gray, FILL.gray, 14), lb(230, 109, '＝', 18), bx(240, 84, 70, 50, '3600', C.green, FILL.green, 14)],
  },
  {
    note: '❓ひもの本数をまちがえないコツは？→動滑車と物のかたまりを丸でかこんで、そこにつながって、天井や上へ向かうひもだけを数えます。手で引く向きを変えるだけの定滑車は、本数に数えません。',
    add: [...fresh(), ...ropes(3, '物', 'ひも\n3本'), ci(110, 100, 40, undefined, C.red, 'transparent'), ...cap('かたまりにつながる、上へのびるひもだけ数える', C.red, FILL.red)],
  },
]);

// ══ ばねの直列つなぎ・並列つなぎ ══
const wt = (x: number, y: number, t: string): DiagramElement => bx(x - 18, y, 36, 22, t, C.main, FILL.warm, 11);
const bane: DiagramFigure = show([
  {
    note: 'ばねは、引く力が大きいほどのびます。❓どれくらいのびるのでしょう。→たとえば10gで2cmのびるばねなら、20gで4cm、30gで6cm。のびは、力に比例します。',
    add: [
      ln(20, 12, 300, 12, C.ink, false, 3),
      ...spring(60, 12, 42 + 12), wt(60, 54, '10g'), lb(96, 44, '2cm', 11, C.red, 'start', true),
      ...spring(160, 12, 42 + 24), wt(160, 66, '20g'), lb(196, 50, '4cm', 11, C.red, 'start', true),
      ...spring(250, 12, 42 + 36), wt(250, 78, '30g'), lb(286, 56, '6cm', 11, C.red, 'start', true),
      ...cap('のびは 力に比例する（10gごとに2cm）', C.red, FILL.red),
    ],
  },
  {
    note: '例題です。20gで4cmのびるばねに、50gをつるすと何cmのびますか。❓まず何を出す？→10gあたりののびです。20gで4cmなので、10gで2cm。❓50gでは？→50gは10gの5個ぶんなので、2×5＝10cmです。',
    add: [...fresh(), bx(15, 30, 90, 50, '20g\n4cm', C.gray, FILL.gray, 14), ar(108, 55, 132, 55, C.red), bx(135, 30, 80, 50, '10g\n2cm', C.blue, FILL.blue, 14), ar(218, 55, 242, 55, C.red), bx(245, 30, 65, 50, '50g\n10cm', C.green, FILL.green, 13), ...cap('10gあたり2cm × 5 ＝ 10cm', C.green, FILL.green)],
  },
  {
    note: '❓ばねをたてに2本つなぐ（直列：ちょくれつ）と、それぞれのばねにかかる力は？→下のばねは重りを支え、上のばねも、下のばねと重りをまとめて支えます。どちらのばねも、10gの重りに引かれるので、どちらにも10gがかかります。',
    add: [
      ...fresh(),
      ln(90, 12, 230, 12, C.ink, false, 3),
      ...spring(160, 12, 60),
      ...spring(160, 60, 108),
      wt(160, 108, '10g'),
      lb(210, 36, '10gがかかる', 11, C.red, 'start', true),
      lb(210, 84, '10gがかかる', 11, C.red, 'start', true),
      ...cap('直列：どのばねにも 重り全部の重さ', C.red, FILL.red),
    ],
  },
  {
    note: '❓では、全体ののびは？→10gで2cmのばねが2本、それぞれ2cmのびるので、2＋2＝4cm。ばねの本数ぶん、のびは2倍になります。',
    add: [
      ...fresh(),
      ln(90, 12, 230, 12, C.ink, false, 3),
      ...spring(160, 12, 72),
      ...spring(160, 72, 132),
      wt(160, 132, '10g'),
      lb(210, 42, '2cmのびた', 11, C.red, 'start', true),
      lb(210, 102, '2cmのびた', 11, C.red, 'start', true),
      ...cap('2cm ＋ 2cm ＝ 4cm', C.red, FILL.red),
    ],
  },
  {
    note: '❓では、横に2本ならべて、1つの重りを支える（並列：へいれつ）と？→2本が力を分け合うので、1本にかかる力は10÷2＝5g。❓のびは？→10gで2cmなので、5gなら1cm。ばねののびは、そのばね自身にかかる力だけで決まるからです。',
    add: [
      ...fresh(),
      ln(70, 12, 250, 12, C.ink, false, 3),
      ...spring(110, 12, 66),
      ...spring(210, 12, 66),
      bx(90, 66, 140, 8, undefined, C.gray, FILL.gray),
      ln(160, 74, 160, 90, C.gray, false, 1.8),
      wt(160, 90, '10g'),
      lb(40, 40, '5g', 11, C.red, 'middle', true),
      lb(280, 40, '5g', 11, C.red, 'middle', true),
      ...cap('10g ÷ 2本 ＝ 5g → のびは 1cm', C.red, FILL.red),
    ],
  },
  {
    note: '❓ここまでを同じ10gで比べると？→直列は4cm、ばね1本は2cm、並列は1cm。のびは、1本にかかる力しだいで変わります。',
    add: [...fresh(), bx(15, 25, 90, 60, '直列\n4cm', C.red, FILL.red, 15), bx(115, 25, 90, 60, '1本\n2cm', C.gray, FILL.gray, 15), bx(215, 25, 90, 60, '並列\n1cm', C.blue, FILL.blue, 15), lb(60, 105, '10g まるごと', 10, C.red), lb(160, 105, '10g', 10, C.gray), lb(260, 105, '10g ÷ 2', 10, C.blue), ...cap('同じ10gでも 1本にかかる力で変わる')],
  },
  {
    note: '例題です。10gで3cmのびるばねを、たてに2本つないで20gの重りをつるします。全体のびは？❓1本にかかる力は？→どちらにも20g。❓1本ののびは？→10gで3cmなので20gで6cm。2本で 6＋6＝12cmです。',
    add: [...fresh(), bx(15, 20, 90, 50, '1本に\n20g', C.red, FILL.red, 14), ar(108, 45, 132, 45, C.red), bx(135, 20, 90, 50, '1本\n6cm', C.blue, FILL.blue, 14), ar(228, 45, 250, 45, C.red), bx(253, 20, 57, 50, '12cm', C.green, FILL.green, 13), ...cap('6cm × 2本 ＝ 12cm', C.green, FILL.green)],
  },
  {
    note: '例題です。20gで4cmのびるばね2本を横にならべ、20gの重りを支えます。❓1本にかかる力は？→20÷2＝10g。❓のびは？→20gで4cmなら10gで2cm。もし、たてにつなぐ直列なら、どちらにも20gがかかるので4cmずつ、全体で8cmになり、話が逆になります。',
    add: [...fresh(), bx(15, 20, 90, 50, '1本に\n10g', C.blue, FILL.blue, 14), ar(108, 45, 132, 45, C.blue), bx(135, 20, 90, 50, '1本\n2cm', C.green, FILL.green, 14), bx(15, 84, 295, 40, '直列なら 4cm × 2 ＝ 8cm（並列と逆）', C.gray, FILL.gray, 12), ...cap('並列は 力を分けるので のびは小さい', C.blue, FILL.blue)],
  },
  {
    note: '最後に、まちがえないコツです。❓どうやって考える？→「1本のばねに、何gの力がかかっているか」を先に出します。直列はどれも重り全部、並列は重さを本数でわった力です。あとは「10gあたりののび」をかけるだけです。',
    add: [...fresh(), bx(15, 15, 290, 34, '①1本にかかる力を出す', C.blue, FILL.blue, 13), bx(15, 57, 290, 34, '直列＝全部の重さ ／ 並列＝重さ÷本数', C.red, FILL.red, 12), bx(15, 99, 290, 34, '②10gあたりののび × その力', C.green, FILL.green, 13)],
  },
]);

// ══ 鏡にうつる像 ══
const mirrorLine = (x: number, y1: number, y2: number): DiagramElement => ln(x, y1, x, y2, C.blue, false, 5);
const kagami: DiagramFigure = show([
  {
    note: '鏡をのぞくと、鏡の向こうにもう1人の自分がいるように見えます。❓その像（ぞう）は、どこにあるように見えるのでしょう。→鏡の面をはさんで、ちょうど反対側の、同じきょりのところです。',
    add: [mirrorLine(160, 15, 135), ci(90, 75, 18, '自分', C.main, FILL.warm, 10), ci(230, 75, 18, '像', C.gray, FILL.gray, 12), lb(178, 24, '鏡', 11, C.blue, 'start', true), ...cap('鏡をはさんで 反対側の 同じきょりに見える', C.blue, FILL.blue)],
  },
  {
    note: '❓なぜ、反対側に見えるのでしょう。→物から出た光は、鏡ではね返って目にとどきます。人は、光がやって来た方向にまっすぐ物があると感じるので、はね返った光をまっすぐうしろへのばした先に、像が見えるのです。',
    add: [
      ...fresh(),
      mirrorLine(170, 10, 135),
      ci(80, 100, 8, undefined, C.main, FILL.warm),
      ci(80, 40, 8, undefined, C.blue, FILL.blue),
      ln(88, 98, 170, 70, C.main, false, 2),
      ln(170, 70, 88, 42, C.main, false, 2),
      ln(170, 70, 252, 98, C.gray, true, 1.5),
      ci(260, 100, 8, undefined, C.gray, FILL.gray),
      lb(60, 112, '物', 11, C.main, 'middle', true),
      lb(60, 34, '目', 11, C.blue, 'middle', true),
      lb(260, 116, '像', 11, C.gray, 'middle', true),
      ...cap('はね返った光を まっすぐのばした先に像が見える', C.main, FILL.warm),
    ],
  },
  {
    note: '❓自分と像は、どれくらいはなれて見えるでしょう。→鏡までが2m、像までも2mなので、2＋2＝4mはなれて見えます。例：鏡から1.5mなら、1.5×2＝3mです。',
    add: [
      ...fresh(),
      mirrorLine(160, 15, 100),
      ci(80, 70, 16, '自分', C.main, FILL.warm, 10),
      ci(240, 70, 16, '像', C.gray, FILL.gray, 12),
      ln(80, 110, 160, 110, C.blue, false, 1.5),
      ln(160, 110, 240, 110, C.gray, false, 1.5),
      lb(120, 124, '2m', 12, C.blue, 'middle', true),
      lb(200, 124, '2m', 12, C.gray, 'middle', true),
      ...cap('2m ＋ 2m ＝ 4m はなれて見える', C.blue, FILL.blue),
    ],
  },
  {
    note: '❓鏡に1m近づくと、自分と像のきょりはどうなるでしょう。→自分が1m近づくと、像も鏡に向かって1m近づきます。おたがいが1mずつ近づくので、合わせて2m縮まります。',
    add: [
      ...fresh(),
      mirrorLine(160, 15, 100),
      ci(80, 40, 12, undefined, C.gray, FILL.gray),
      ci(240, 40, 12, undefined, C.gray, FILL.gray),
      lb(160, 116, '前：4m', 11, C.gray, 'middle'),
      ci(120, 80, 12, '自分', C.main, FILL.warm, 8),
      ci(200, 80, 12, '像', C.main, FILL.warm, 10),
      ar(94, 40, 112, 68, C.red),
      ar(226, 40, 208, 68, C.red),
      ...cap2('自分1m ＋ 像1m ＝ 2m 縮まる', '（4m → 2m）', C.red, C.green),
    ],
  },
  {
    note: '❓全身を映すのに、鏡は身長と同じ長さが必要でしょうか。→いいえ、半分でたります。❓なぜ？→足もとから出た光は、足と目の高さのちょうど真ん中で鏡に当たって、目にとどきます。頭の先は目とほぼ同じ高さなので、鏡は足と目の真ん中から頭までの、身長の半分でたります。',
    add: [
      ...fresh(),
      ln(90, 30, 90, 138, C.main, false, 3),
      ci(90, 26, 8, undefined, C.main, FILL.warm),
      mirrorLine(170, 30, 84),
      ln(90, 138, 170, 84, C.main, false, 1.5),
      ln(170, 84, 96, 30, C.main, false, 1.5),
      lb(232, 56, '鏡の長さ\n身長の半分', 12, C.blue, 'middle', true),
      lb(50, 84, '身長', 11, C.main, 'middle', true),
      ...cap('足と目の真ん中で 光がはね返る', C.blue, FILL.blue),
    ],
  },
  {
    note: '例題です。身長160cmの人が全身を映すのに必要な鏡の長さは？→身長の半分なので、160÷2＝80cmです。',
    add: [...fresh(), bx(15, 35, 90, 50, '身長\n160cm', C.main, FILL.warm, 14), lb(118, 60, '÷ 2', 16), ar(140, 60, 170, 60, C.blue), bx(178, 35, 130, 50, '鏡の長さ\n80cm', C.green, FILL.green, 14), ...cap('160 ÷ 2 ＝ 80cm', C.green, FILL.green)],
  },
  {
    note: '❓鏡から遠ざかったり、近づいたりすると、必要な長さは変わるでしょうか。→変わりません。❓なぜ？→遠ざかると像も遠ざかりますが、光がはね返る位置は「足と目の真ん中の高さ」のままだからです。',
    add: [
      ...fresh(),
      mirrorLine(90, 40, 100),
      lb(90, 116, '近い：80cm', 11, C.blue, 'middle', true),
      mirrorLine(230, 40, 100),
      lb(230, 116, '遠い：80cm', 11, C.blue, 'middle', true),
      ...cap('近づいても遠ざかっても 鏡の長さは同じ', C.blue, FILL.blue),
    ],
  },
  {
    note: '❓鏡では左右が逆に見えるのに、上下は逆にならないのはなぜでしょう。→鏡は「鏡に向かう向き（前と後ろ）」だけを反対にうつします。上下や左右の位置は同じ場所にうつるので、像の右手も同じがわにあります。それを「向かいあった人」として見るから、左右が逆に感じるのです。',
    add: [
      ...fresh(),
      ln(50, 70, 270, 70, C.blue, false, 5),
      ci(160, 112, 14, '自分', C.main, FILL.warm, 9),
      ci(190, 112, 5, undefined, C.red, FILL.red),
      ci(160, 30, 14, '像', C.gray, FILL.gray, 11),
      ci(190, 30, 5, undefined, C.red, FILL.red),
      lb(222, 112, '右手', 11, C.red, 'start', true),
      lb(222, 30, '右手', 11, C.red, 'start', true),
      ...cap('前後だけ反対 ／ 上下・左右の位置は同じ', C.ink, FILL.warm),
    ],
  },
]);

export const DIAGRAMS_OLD_RIKAF_2: Record<string, DiagramFigure> = {
  '熱の伝わり方（伝導・対流・放射）': nettsu,
  '熱量と温度変化の計算': netsuryou,
  '電熱線の発熱（太さ・長さと発熱量）': denne,
  '豆電球の明るさとつなぎ方': mame,
  '組み合わせ滑車（動滑車が複数）': kassha,
  'ばねの直列つなぎ・並列つなぎ': bane,
  '鏡にうつる像': kagami,
};

export const DIAGRAMS_OLD_RIKAF: Record<string, DiagramFigure> = { ...DIAGRAMS_OLD_RIKAF_1, ...DIAGRAMS_OLD_RIKAF_2 };
