// 中学受験 英語（小4・小6）30 単元の「動く図解スライド」。
// 「なぜ？」の連鎖で、7枚以上。単元の節（section）ごとに 1 枚の図解をひもづける。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, show, fresh, flow } from './diagram-kit';

type Col = [string, string];
const BLUE: Col = [C.blue, FILL.blue];
const GREEN: Col = [C.green, FILL.green];
const RED: Col = [C.red, FILL.red];
const MAIN: Col = [C.main, FILL.warm];
const PURPLE: Col = [C.purple, FILL.purple];
const GRAY: Col = [C.gray, FILL.gray];
const YELLOW: Col = [C.main, FILL.yellow];

// 下の帯（y=168 から）に、そのスライドのひとことを出す。\n で改行できる。
const cap = (t: string, c: Col = BLUE, size = 12): DiagramElement => {
  const n = t.split('\n').length;
  return bx(10, 168, 300, 14 + 15 * n, t, c[0], c[1], size);
};

// 1枚のスライド＝まっさらな図＋下の帯
const S = (note: string, top: DiagramElement[], capText: string, c: Col = BLUE, size = 12) => ({
  note,
  add: fresh(...top, cap(capText, c, size)),
});

// 「なぜ？」の問い → 答え
const Q = (note: string, q: string, a: string, capText: string, c: Col = GREEN, aSize = 13) =>
  S(note, [
    bx(10, 8, 300, 34, 'なぜ？ ' + q.replace(/^なぜ/, ''), PURPLE[0], PURPLE[1], 12),
    ar(160, 44, 160, 56, PURPLE[0]),
    bx(10, 58, 300, 100, a, c[0], c[1], aSize),
  ], capText, c);

// 英文を語ごとの箱にして一列に並べる（箱の幅は文字数に比例）
const wd = (ws: (string | [string, Col])[], y: number, o: { h?: number; size?: number; x0?: number; total?: number; gap?: number } = {}): DiagramElement[] => {
  const h = o.h ?? 28;
  const size = o.size ?? 13;
  const x0 = o.x0 ?? 10;
  const total = o.total ?? 300;
  const gap = o.gap ?? 4;
  const items = ws.map((w) => (typeof w === 'string' ? ([w, MAIN] as [string, Col]) : w));
  const wt = items.map(([t]) => Math.max(t.length, 2) + 1.6);
  const sum = wt.reduce((a, b) => a + b, 0);
  const avail = total - gap * (items.length - 1);
  let x = x0;
  return items.map(([t, c]: [string, Col], i: number) => {
    const w = (avail * wt[i]) / sum;
    const e = bx(x, y, w, h, t, c[0], c[1], size);
    x += w + gap;
    return e;
  });
};

// 変身の組（左 → 右）を、cols 列で並べる
const pairs = (list: [string, string][], y0: number, o: { cols?: number; h?: number; size?: number; gap?: number; c?: Col; c2?: Col } = {}): DiagramElement[] => {
  const cols = o.cols ?? 2;
  const h = o.h ?? 22;
  const size = o.size ?? 11;
  const gapY = o.gap ?? 6;
  const c = o.c ?? MAIN;
  const c2 = o.c2 ?? GREEN;
  const cw = (300 - 8 * (cols - 1)) / cols;
  const out: DiagramElement[] = [];
  list.forEach(([a, b], i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = 10 + col * (cw + 8);
    const y = y0 + row * (h + gapY);
    const lw = cw * 0.42;
    const rw = cw * 0.46;
    out.push(bx(x, y, lw, h, a, c[0], c[1], size));
    out.push(ar(x + lw + 1, y + h / 2, x + cw - rw - 1, y + h / 2, c[0]));
    out.push(bx(x + cw - rw, y, rw, h, b, c2[0], c2[1], size));
  });
  return out;
};

// 表（先頭行は見出し）。colW は各列の幅。
const tab = (rows: string[][], y0: number, colW: number[], h = 26, size = 12, hl: [number, number][] = []): DiagramElement[] => {
  const tw = colW.reduce((a, b) => a + b, 0);
  const sx = (320 - tw) / 2;
  const out: DiagramElement[] = [];
  rows.forEach((r, i) => {
    let x = sx;
    r.forEach((t, j) => {
      const on = hl.some(([a, b]) => a === i && b === j);
      const c = i === 0 ? BLUE : on ? RED : MAIN;
      out.push(bx(x, y0 + i * h, colW[j], h, t, c[0], on ? FILL.red : i === 0 ? FILL.blue : FILL.warm, size));
      x += colW[j];
    });
  });
  return out;
};

// 縦に並べた箱。各行は 文字列 か [文字列, 色]
const L = (rows: (string | [string, Col])[], y0 = 10, h = 26, gap = 6, size = 14, x = 10, w = 300): DiagramElement[] =>
  rows.map((r, i) => {
    const t = typeof r === 'string' ? r : r[0];
    const c = typeof r === 'string' ? MAIN : r[1];
    return bx(x, y0 + i * (h + gap), w, h, t, c[0], c[1], size);
  });

// 横一列の箱（矢印つき）
const row = (labels: string[], y: number, c: Col = MAIN, size = 12, h = 44, gap = 14): DiagramElement[] =>
  flow(labels, y, { h, color: c[0], fill: c[1], size, gap }).flat();

// 矢印なしの横一列
const cells = (labels: string[], y: number, c: Col = MAIN, size = 12, h = 30, gap = 6, x0 = 10, total = 300): DiagramElement[] => {
  const n = labels.length;
  const w = (total - gap * (n - 1)) / n;
  return labels.map((t, i) => bx(x0 + i * (w + gap), y, w, h, t, c[0], c[1], size));
};

// 時計（h 時 m 分）
const clock = (cx: number, cy: number, r: number, h: number, m: number): DiagramElement[] => {
  const ah = ((h % 12) + m / 60) * 30 * (Math.PI / 180);
  const am = m * 6 * (Math.PI / 180);
  return [
    ci(cx, cy, r, undefined, C.ink, '#FFFFFF'),
    lb(cx, cy - r + 8, '12', 8, C.gray, 'middle'),
    lb(cx + r - 7, cy + 1, '3', 8, C.gray, 'middle'),
    lb(cx, cy + r - 5, '6', 8, C.gray, 'middle'),
    lb(cx - r + 7, cy + 1, '9', 8, C.gray, 'middle'),
    ln(cx, cy, cx + Math.sin(ah) * r * 0.5, cy - Math.cos(ah) * r * 0.5, C.ink, false, 3),
    ln(cx, cy, cx + Math.sin(am) * r * 0.8, cy - Math.cos(am) * r * 0.8, C.red, false, 2),
  ];
};

// 色つきの語の並び（文字列の配列に同じ色をつける）
const cw = (ws: string[], c: Col): [string, Col][] => ws.map((w) => [w, c] as [string, Col]);

// 上に「なぜ？」の問い、下は自由な絵
const Qt = (note: string, q: string, bottom: DiagramElement[], capText: string, c: Col = GREEN) =>
  S(note, [bx(10, 8, 300, 34, 'なぜ？ ' + q.replace(/^なぜ/, ''), PURPLE[0], PURPLE[1], 12), ar(160, 44, 160, 52, PURPLE[0]), ...bottom], capText, c);


// ── 絵の描写③：数量と様子をつけ加える ──
const f_442 = show([
  S('絵の中に牛乳（ぎゅうにゅう）のコップが3つあります。three milks と書けるでしょうか。じつは milk は数えられない名詞（めいし）なので、この書き方はまちがいです。',
    [...[0, 1, 2].map((i) => bx(40 + i * 82, 14, 56, 64, 'milk', C.blue, FILL.blue, 13)), lb(160, 104, 'three milks', 24, C.red, 'middle', true), lb(160, 134, '×  まちがい', 16, C.red, 'middle', true)],
    'milk は数えられない名詞', RED),
  Q('では、なぜ milk は数えられないのでしょう。牛乳は形がなく、半分に分けても牛乳のままです。「1つ、2つ」と分けられないものには、a も s もつけません。',
    'milk は数えられないの？', '形がなくて、分けても同じ milk\n→「1つ、2つ」と数えない\n→ a も、複数の s もつけない', 'a も s もつけない', GREEN, 15),
  S('名詞は2組に分かれます。数えられるものは book や dog、数えられないものは water・milk・bread・money・paper などです。',
    [bx(10, 10, 146, 26, '数えられる', C.green, FILL.green, 14), bx(164, 10, 146, 26, '数えられない', C.red, FILL.red, 14),
      ...['book', 'dog', 'apple', 'child'].map((t, i) => bx(10, 42 + i * 28, 146, 24, t, C.green, FILL.green, 13)),
      ...['water', 'milk', 'bread', 'money', 'paper'].map((t, i) => bx(164, 42 + i * 24, 146, 21, t, C.red, FILL.red, 12))],
    '数えられるか、数えられないかを先に決める', MAIN),
  Q('数えられないものを数えたいときは、どうするのでしょう。入れ物や単位（たんい）は数えられるので、それを使います。two glasses of milk では、数えているのは glasses で、milk は変わりません。',
    '入れ物で数えるの？', '入れ物・単位は数えられる\ntwo glasses of milk\n→ glasses に s、milk には s なし', '数えるのは入れ物。中身は s なし', GREEN, 15),
  S('量の言い方です。数えられる名詞には many と a few、数えられない名詞には much と a little を使います。a lot of と some は、どちらにも使えます。',
    tab([['', '数えられる', '数えられない'], ['たくさん', 'many books', 'much water'], ['少し', 'a few books', 'a little water'], ['どちらも', 'a lot of / some', 'a lot of / some']], 12, [70, 115, 115], 30, 13, [[3, 1], [3, 2]]),
    '迷ったら a lot of か some', BLUE),
  S('「テーブルの上に水がたくさんあります」は There is a lot of water on the table. です。many waters と書くと、数えられない名詞を数えたことになり、まちがいです。',
    [...wd(['There', 'is', 'a lot of', 'water', 'on the table.'], 14), lb(160, 60, '○', 22, C.green, 'middle', true),
      ...wd(cw(['There', 'are', 'many', 'waters', 'on the table.'], RED), 84), lb(160, 130, '×  数えられないのに複数にした', 13, C.red, 'middle', true)],
    'water には is。many waters は×', GREEN),
  Qt('では、特別な複数形（ふくすうけい）はなぜ覚えるのでしょう。three childs のように s をつけても正しくありません。形が変わるものは数がかぎられているので、まとめて覚えれば大丈夫です。',
    '特別な形は覚えるの？',
    pairs([['child', 'children'], ['man', 'men'], ['woman', 'women'], ['foot', 'feet'], ['tooth', 'teeth'], ['mouse', 'mice'], ['fish', 'fish'], ['sheep', 'sheep']], 54, { h: 22, gap: 5, size: 12 }),
    '数が少ない。まとめて覚えれば大丈夫'),
  S('s の付け方が変わるものもあります。s・x・ch・sh で終わる語は es、子音（しいん）＋y は y を i に変えて es、f と fe は ves にします。',
    pairs([['bus', 'buses'], ['box', 'boxes'], ['watch', 'watches'], ['city', 'cities'], ['country', 'countries'], ['leaf', 'leaves'], ['knife', 'knives']], 12, { h: 24, gap: 6, size: 12 }),
    's,x,ch,sh → es　子音+y → ies　f,fe → ves', MAIN),
  S('色や大きさは名詞の前、様子を表す語は文の後ろです。服装は in や wearing で表します。',
    [...wd([['a', MAIN], ['big', BLUE], ['brown', BLUE], ['dog', GREEN]], 10, { size: 12 }),
      ...wd([['The children are running', MAIN], ['happily', BLUE], ['in the park.', MAIN]], 46, { size: 11 }),
      ...wd([['A girl', GREEN], ['in a blue dress', BLUE], ['is singing.', MAIN]], 82, { size: 11 }),
      ...wd([['A boy', GREEN], ['wearing glasses', BLUE], ['is reading a book.', MAIN]], 118, { size: 11 })],
    '色・大きさ→名詞の前　様子→文の後ろ', BLUE),
  S('まとめです。①名詞が数えられるかを先に決める。②数えられないものは入れ物で数える。③many と much を使い分ける（迷ったら a lot of）。④特別な複数形はまとめて覚える。',
    L([['①数えられるか 数えられないか', BLUE], ['②数えられない → 入れ物で数える', GREEN], ['③many / a few　much / a little', MAIN], ['④child → children など 特別な形', PURPLE]], 10, 30, 8, 14),
    'この4つを思い出せば、量が書ける', GREEN),
], '数・量・様子をつけ加える');

// ── 誤文訂正②：冠詞のつけ忘れ・つけすぎ ──
const f_444 = show([
  S('I waited for a hour. という文は、じつは冠詞（かんし）の a がまちがいで、正しくは an hour です。a と an は、つづりではなく、次の語の最初の音で決めます。',
    [...wd(cw(['I', 'waited', 'for', 'a hour', 'at the station.'], RED), 12, { size: 11 }), lb(160, 56, '×', 20, C.red, 'middle', true),
      ...wd(['I', 'waited', 'for', ['an hour', GREEN], 'at the station.'], 74, { size: 11 }),
      lb(160, 120, '○   音で決める', 16, C.green, 'middle', true)],
    'a と an は、つづりでなく音で決める', RED),
  Q('では、なぜ a と an を使い分けるのでしょう。a apple と言うと「ア」が続いて言いにくいので、間に n を入れて言いやすくします。だから「ア・イ・ウ・エ・オ」の音の前では an になります。',
    'an というものがあるの？', 'a apple … 「ア」が2つ続いて言いにくい\nan apple … n が入って言いやすい\n→ ア・イ・ウ・エ・オの音の前は an', '言いやすくするために an を使う', GREEN, 14),
  S('an を使う例です。apple・egg・old man は母音（ぼいん）で始まります。hour と honest は、つづりは h ですが h を読まず「アワー」「オネスト」と読むので、これも an です。',
    [...['an apple', 'an egg', 'an old man'].map((t, i) => bx(10 + i * 102, 12, 96, 34, t, C.green, FILL.green, 13)),
      bx(10, 62, 146, 44, 'an hour\n（アワー）', C.red, FILL.red, 13), bx(164, 62, 146, 44, 'an honest boy\n（オネスト）', C.red, FILL.red, 13),
      lb(160, 132, 'h を読まない → 母音の音で始まる', 12, C.ink, 'middle', true)],
    '母音の音で始まる → an', GREEN),
  S('a を使う例です。university・uniform・useful は u で始まりますが、「ユ」という音で始まるので a です。one-day trip も「ワン」で始まるので a になります。',
    [...['a university\n（ユ）', 'a uniform\n（ユ）', 'a useful book\n（ユ）'].map((t, i) => bx(10 + i * 102, 12, 96, 50, t, C.blue, FILL.blue, 12)),
      bx(60, 76, 200, 50, 'a one-day trip\n（ワン）', C.blue, FILL.blue, 13), lb(160, 144, '母音の字でも、音は「ユ」「ワ」→ a', 12, C.ink, 'middle', true)],
    'つづりが u・o でも、音で a を選ぶ', BLUE),
  Qt('形容詞（けいようし）がつくときは、a と an をどう選ぶのでしょう。名詞の前に別の語が入ると、その次に来る語が最初の音になります。だから形容詞の音で決めます。',
    '形容詞がつくと変わるの？',
    [...wd(['an', 'apple'], 56, { total: 120, size: 13 }), ar(138, 70, 160, 70, C.main), ...wd([['a', BLUE], ['red', BLUE], ['apple', MAIN]], 56, { x0: 170, total: 140, size: 13 }),
      ...wd(['a', 'book'], 100, { total: 120, size: 13 }), ar(138, 114, 160, 114, C.main), ...wd([['an', BLUE], ['interesting', BLUE], ['book', MAIN]], 100, { x0: 170, total: 140, size: 12 })],
    '名詞の前に来る語の音で決める', GREEN),
  S('次は the です。I have a dog. で初めて出てきた犬は a dog、二度目に出てくると、どの犬か話す人も聞く人もわかるので The dog になります。',
    [bx(10, 20, 140, 36, 'I have a dog.', C.main, FILL.warm, 14), ar(150, 38, 170, 38, C.main), bx(170, 20, 140, 36, 'The dog is big.', C.green, FILL.green, 14),
      lb(80, 78, '初めて → a', 13, C.main, 'middle', true), lb(240, 78, '二度目 → the', 13, C.green, 'middle', true),
      bx(40, 100, 240, 40, 'どの犬か、二人ともわかっている', C.purple, FILL.purple, 13)],
    '二人ともわかる → the', GREEN),
  S('the をつける場合は、ほかにもあります。世界に1つしかないもの、最上級（さいじょうきゅう）や「〜番目」のあと、楽器（がっき）の名前です。',
    L([['1つしかない　the sun / the moon', GREEN], ['最上級　the highest mountain', BLUE], ['〜番目　the first day', BLUE], ['楽器　play the piano', PURPLE]], 10, 32, 8, 13),
    'どれのことか、はっきり決まる → the', GREEN),
  S('逆に、冠詞をつけない場合もあります。スポーツ、教科、食事、by のあとの乗り物、go to school などです。楽器は the があり、スポーツは the がありません。',
    [bx(10, 8, 146, 24, 'the をつけない', C.red, FILL.red, 13), ...['play soccer', 'study English', 'have breakfast', 'by bus', 'go to school'].map((t, i) => bx(10, 38 + i * 26, 146, 22, t, C.red, FILL.red, 12)),
      bx(164, 8, 146, 24, 'くらべよう', C.purple, FILL.purple, 13), bx(164, 38, 146, 40, 'play soccer\n（スポーツは なし）', C.red, FILL.red, 12), bx(164, 86, 146, 40, 'play the piano\n（楽器は the）', C.green, FILL.green, 12)],
    'スポーツは なし・楽器は the', RED),
  S('数えられない名詞にも a はつけません。I have a homework. はまちがいで、I have homework. か I have a lot of homework. が正しい文です。',
    [...wd(cw(['I', 'have', 'a homework.'], RED), 14), lb(160, 56, '× homework は数えられない', 12, C.red, 'middle', true),
      ...wd(['I', 'have', 'homework.'], 76), ...wd(['I', 'have', 'a lot of', 'homework.'], 112), lb(160, 150, '○ どちらも正しい文', 13, C.green, 'middle', true)],
    '数えられない名詞に a はつけない', GREEN),
  S('まとめです。名詞を書いたら、そのたびに「1つか、たくさんか、数えられないか」を心の中で聞きましょう。そして音で a と an、「どれか」で the を選びます。',
    L([['① a と an は つづりでなく 音で決める', BLUE], ['② 二度目・1つしかない → the', GREEN], ['③ スポーツ・食事・教科 → 冠詞なし', RED], ['④ 数えられない名詞に a はつけない', PURPLE]], 10, 30, 8, 13),
    '名詞を書くたびに、冠詞を確かめる', GREEN),
], '冠詞：a・an・the・なし');

// ── リスニング①：先読みと設問の型 ──
const f_446 = show([
  S('リスニングは、放送が始まってから考えていては間に合いません。勝負は放送の始まる前です。選択肢（せんたくし）を先に読んで、何を聞けばいいかを決めておきましょう。',
    [bx(10, 24, 86, 56, '先読み\n（放送の前）', C.red, FILL.red, 13), ar(98, 52, 120, 52, C.main), bx(122, 24, 76, 56, '聞く', C.main, FILL.warm, 14), ar(200, 52, 222, 52, C.main), bx(224, 24, 86, 56, '答える', C.main, FILL.warm, 14), lb(160, 110, 'いちばん大事なのは 先読み', 15, C.red, 'middle', true)],
    '勝負は、放送が始まる前', RED),
  Qt('なぜ選択肢を先に読むのでしょう。選択肢がすべて時刻なら、「時刻だけを待ちかまえて聞けばよい」と決まるからです。ほかの部分が聞き取れなくても大丈夫になります。',
    '選択肢を先に読むの？',
    [...cells(['ア 3:00', 'イ 3:30', 'ウ 4:00', 'エ 4:30'], 58, BLUE, 13, 30), lb(160, 108, 'ぜんぶ 時刻', 14, C.ink, 'middle', true), ar(160, 118, 160, 134, C.red), bx(40, 136, 240, 24, '時刻を待ちかまえて聞く', C.red, FILL.red, 13)],
    '同じ種類の答え → その情報だけを聞く'),
  S('選択肢が場所なら、場所を表すことばを待ちかまえます。at the station や at the library が聞こえたら、印をつけておきます。',
    [...cells(['ア at the station', 'イ at the library'], 10, GREEN, 12, 30, 8), ...cells(['ウ at school', 'エ at the park'], 46, GREEN, 12, 30, 8), lb(160, 98, 'ぜんぶ 場所', 14, C.ink, 'middle', true), ar(160, 108, 160, 122, C.red), bx(40, 124, 240, 30, '場所のことばに印をつける', C.red, FILL.red, 13)],
    '場所の選択肢 → 場所を聞く', GREEN),
  S('設問の文（せつもんのぶん）があるなら、必ず先に読みましょう。疑問詞（ぎもんし）を見れば、聞き取る情報の種類が1つに決まります。',
    tab([['疑問詞', 'ききとること'], ['What time', '時刻（じこく）'], ['Where', '場所'], ['How many', '数（計算に注意）'], ['Why', '理由（Because）']], 10, [110, 190], 30, 13),
    '疑問詞 → 聞くことが決まる', BLUE),
  S('会話では、予定が途中で変わることが多いです。三時に会おうと言われても、Sorry と言って four に変わります。答えは最初の three ではなく、four（4時）です。',
    [bx(10, 10, 300, 26, 'Ａ：Let\'s meet at three.', C.main, FILL.warm, 13), bx(10, 42, 300, 38, 'Ｂ：Sorry, I have a piano lesson\nuntil three thirty. How about four?', C.red, FILL.red, 12),
      bx(10, 86, 300, 26, 'Ａ：OK. See you then.', C.main, FILL.warm, 13), bx(40, 122, 240, 30, 'What time? → 4:00', C.green, FILL.green, 15)],
    '最後に決まった時刻が答え', RED),
  Qt('なぜ最初に聞こえた three で答えてはいけないのでしょう。会話は途中で変更や修正が入るからです。変更の合図があったら、そのすぐ後ろに本当の答えがあります。',
    'three で答えてはいけないの？',
    [...cells(['but', 'Sorry', 'actually'], 54, RED, 12, 26), ...cells(['How about ~ ?', 'Let\'s ~ instead', 'I changed my mind'], 86, RED, 10, 26, 4), ar(160, 116, 160, 128, C.red), bx(40, 130, 240, 26, '合図の直後に本当の答え', C.green, FILL.green, 13)],
    '合図が聞こえたら、すぐ後ろを聞く'),
  S('数が出てくる問題では、計算が必要なことがあります。2本買って1本150円なら、150×2＝300円。放送には 300 という数は出てきません。',
    [bx(10, 10, 300, 28, 'I bought two pens. Each pen was 150 yen.', C.main, FILL.warm, 12), bx(30, 54, 120, 34, '1本 150円', C.blue, FILL.blue, 13), bx(170, 54, 120, 34, '2本', C.blue, FILL.blue, 13),
      ar(90, 90, 150, 106, C.main), ar(230, 90, 170, 106, C.main), bx(70, 108, 180, 34, '150 × 2 ＝ 300円', C.green, FILL.green, 16)],
    '数が2つ聞こえたら、計算を疑う', GREEN),
  S('まとめです。①選択肢を読んで、同じ種類を見つける。②疑問詞で聞くことを決める。③予定の変わる合図に注意。④数が2つ聞こえたら計算。⑤1問終わったらすぐ次を先読み。',
    L([['① 選択肢の共通点を見つける', BLUE], ['② 疑問詞で 聞くことを決める', GREEN], ['③ Sorry・How about ~ ? に注意', RED], ['④ 数が2つ → 計算', PURPLE]], 8, 30, 6, 13),
    '終わったらすぐ、次の問題を先読み', GREEN),
], '先読みと設問の型');

// ── リスニング②：数字と固有名詞のメモ ──
const f_447 = show([
  S('リスニングでいちばん点を落としやすいのが数字です。thirteen（13）と thirty（30）は、聞こえ方がとても似ています。でも数は大ちがいです。',
    [bx(20, 20, 120, 60, 'thirteen\n13', C.blue, FILL.blue, 18), lb(160, 52, '？', 22, C.red, 'middle', true), bx(180, 20, 120, 60, 'thirty\n30', C.green, FILL.green, 18), lb(160, 118, '音が似ている。どうやって聞き分ける？', 13, C.ink, 'middle', true)],
    '13 と 30 は聞こえ方が似ている', RED),
  Qt('では、どこで聞き分けるのでしょう。強く読む場所がちがいます。thirteen は後ろの teen を強く、thirty は前の thir を強く読みます。',
    '強く読む場所がちがうの？',
    [bx(10, 60, 50, 30, 'thir', C.gray, FILL.gray, 14), bx(62, 60, 80, 30, 'TEEN', C.red, FILL.red, 18), lb(76, 108, 'thirteen（後ろが強い）', 11, C.ink, 'middle', true),
      bx(168, 60, 80, 30, 'THIR', C.red, FILL.red, 18), bx(250, 60, 50, 30, 'ty', C.gray, FILL.gray, 14), lb(236, 108, 'thirty（前が強い）', 11, C.ink, 'middle', true)],
    '強い場所：teen は後ろ、ty は前'),
  S('もう1つの手がかりは、終わりの音です。-teen は最後までのばして「ティーン」、-ty は短く切って「ティ」と読みます。',
    [bx(20, 24, 150, 28, '-teen ティーーーン', C.red, FILL.red, 13), lb(180, 38, 'のばす', 12, C.red, 'start', true), bx(20, 66, 60, 28, '-ty ティ', C.blue, FILL.blue, 13), lb(90, 80, '短く切る', 12, C.blue, 'start', true),
      lb(160, 124, '長いほうが -teen、短いほうが -ty', 13, C.ink, 'middle', true)],
    '終わりの音：のばす → teen　切る → ty', BLUE),
  S('同じ関係の組が6つあります。fourteen と forty、fifteen と fifty、sixteen と sixty、seventeen と seventy、eighteen と eighty、nineteen と ninety です。',
    tab([['のばす（-teen）', '短い（-ty）'], ['14 fourteen', '40 forty'], ['15 fifteen', '50 fifty'], ['16 sixteen', '60 sixty'], ['17 seventeen', '70 seventy'], ['18 eighteen', '80 eighty'], ['19 nineteen', '90 ninety']], 6, [150, 150], 22, 12),
    '6つの組を、強い場所と終わりで聞き分ける', BLUE),
  S('時刻の言い方です。seven thirty は7時30分、a quarter past seven は7時15分、half past seven も7時30分、ten to eight は8時の10分前（7時50分）です。',
    tab([['言い方', '時刻'], ['seven thirty', '7:30'], ['a quarter past seven', '7:15'], ['half past seven', '7:30'], ['ten to eight', '7:50']], 10, [190, 110], 28, 13),
    'past は すぎ、to は 前', MAIN),
  Q('なぜメモは、日本語と数字と記号で書くのでしょう。英語で書いていると、書いている間に次の情報を聞きのがすからです。自分にだけわかればよいので、名前は頭文字、矢印も使います。',
    '英語でメモを書かないの？', 'Ken → K　　Tom → T\nK → 図書館　　T ×来ない\n150円/本　　2本\n→ すばやく書ける', '短く書いて、次を聞きのがさない', GREEN, 14),
  S('だれが何をするのか、取りちがえないことも大切です。Osaka と Okayama は音が似ているうえ、二人の行き先が入れかわりやすいので、話す人ごとに行を分けて書きます。',
    [bx(10, 14, 60, 34, 'Ａ', C.blue, FILL.blue, 16), ar(72, 31, 100, 31, C.blue), bx(102, 14, 208, 34, '大阪（Osaka）', C.blue, FILL.blue, 14),
      bx(10, 62, 60, 34, 'Ｂ', C.green, FILL.green, 16), ar(72, 79, 100, 79, C.green), bx(102, 62, 208, 34, '岡山（Okayama）・祖母に会う', C.green, FILL.green, 13), lb(160, 126, 'Where will Ｂ go? → 岡山', 14, C.red, 'middle', true)],
    '話す人ごとに行を分ける', GREEN),
  S('聞き取れないところがあっても、その語にこだわってはいけません。空らんにして先へ進みます。2回放送されるときは、1回目で全体をつかみ、2回目で空らんをうめます。',
    [...row(['1回目\n全体をつかむ', '2回目\n空らんをうめる', '答える'], 18, MAIN, 12, 56), lb(160, 104, '聞き取れない語は 飛ばして先へ', 14, C.red, 'middle', true), lb(160, 130, '1語にこだわると、あとが聞こえなくなる', 12, C.ink, 'middle')],
    '1回目から全部書こうとしない', MAIN),
  S('まとめです。①13と30は強い場所と終わりの音で聞き分ける。②数字はまず数字だけメモ。③日本語と記号で短く。④話す人ごとに行を分ける。⑤聞き取れない語は飛ばす。',
    L([['① thirteen は後ろ強く、thirty は前強く', BLUE], ['② メモは日本語と数字と記号', GREEN], ['③ 話す人ごとに行を分ける', PURPLE], ['④ 聞き取れない語は飛ばす', RED]], 8, 30, 6, 13),
    'メモは答えではない。設問に合う情報を選ぶ', GREEN),
], '数字と固有名詞のメモ');

// ── 総合実戦演習①：英語選択入試（標準） ──
const f_448 = show([
  S('第1問は、（　）の語を正しい形に直す問題です。まず、文の中のヒントになる語を探します。every day があれば現在形、last summer があれば過去形、now があれば進行形です。',
    tab([['ヒントの語', '時'], ['every day', '現在形'], ['last summer', '過去形'], ['Look! / now', '現在進行形']], 12, [150, 150], 30, 13),
    'ヒントの語から、時（形）を決める', BLUE),
  Q('では、My sister （go） to school by bus every day. の答えはなぜ goes でしょう。every day で現在形。主語 My sister は1人なので動詞に s がつきます。go は o で終わるので es です。',
    'go ではなく goes になるの？', 'every day → 現在形\nMy sister は1人 → 動詞に s\ngo は o で終わる → es\n答え goes', '主語が1人の現在形 → s（es）', GREEN, 14),
  S('（4）は He is good at （swim）. です。前置詞（ぜんちし）の at のあとは、動詞を -ing の形にします。swim は m を重ねて swimming です。（5）は one of the most beautiful cities。「〜のうちの1つ」は複数の名詞で、city は y を i に変えて cities です。',
    [bx(10, 10, 300, 28, 'He is good at （swim）.', C.main, FILL.warm, 13), ar(160, 40, 160, 52, C.main), bx(60, 54, 200, 28, 'at のあと → -ing　swimming', C.green, FILL.green, 13),
      bx(10, 94, 300, 28, 'one of the most beautiful （city）', C.main, FILL.warm, 12), ar(160, 124, 160, 136, C.main), bx(60, 138, 200, 24, '複数のうちの1つ → cities', C.green, FILL.green, 13)],
    'at のあとは -ing　one of のあとは複数形', GREEN),
  S('第2問は並べかえです。「私はきのう公園で野球をしました」は、I played baseball in the park yesterday. です。順番は、だれが→どうした→何を→どこで→いつ、と場所が先、時があとです。',
    [...wd([['I', GREEN], ['played', RED], ['baseball', MAIN], ['in the park', BLUE], ['yesterday.', PURPLE]], 14, { size: 11 }),
      ...L([['だれが（I）→ どうした（played）→ 何を（baseball）', MAIN], ['場所（in the park）→ 時（yesterday）', BLUE]], 62, 30, 8, 12)],
    '場所 → 時 の順', MAIN),
  Q('次は「彼がどこに住んでいるか知っていますか」です。なぜ Do you know where he lives? になるのでしょう。where he lives は文の中に入った質問なので、ふつうの文の語順（he lives）にします。does he live の形にはしません。',
    'where he lives の順なの？', 'Do you know where he lives?\nwhere ＋ 主語 ＋ 動詞\n→ 文の中に入ると ふつうの文の順', '文の中の質問 → ふつうの語順', GREEN, 14),
  S('「この箱は重すぎて私には運べません」は This box is too heavy to carry. です。too ～ to … は「～すぎて…できない」という型で、そのまま覚えて使います。',
    [...wd([['This box', GREEN], ['is', MAIN], ['too heavy', RED], ['to carry.', BLUE]], 20, { size: 13 }), lb(160, 76, 'too ～ to …　＝　～すぎて…できない', 14, C.ink, 'middle', true),
      bx(40, 96, 240, 40, 'too heavy ＝ 重すぎる\nto carry ＝ 運べない', C.blue, FILL.blue, 13)],
    '型：too ～ to …', BLUE),
  S('第3問の和文英訳（わぶんえいやく）です。「きのうは雨だったので、私たちは家にいました」は It was rainy yesterday, so we stayed home. です。天気の文の主語は it、rain は rainy に変えます。',
    [...wd([['It', GREEN], ['was', MAIN], ['rainy', RED], ['yesterday,', PURPLE]], 12, { size: 12 }), ...wd([['so', BLUE], ['we', GREEN], ['stayed', MAIN], ['home.', MAIN]], 48, { size: 12 }),
      lb(160, 100, '天気の主語は it　　rain → rainy', 13, C.ink, 'middle', true), lb(160, 126, 'so ＝ だから（結果をつなぐ）', 13, C.ink, 'middle')],
    '天気は it が主語。so で結果をつなぐ', RED),
  S('第4問は「五語以上で答えなさい」です。I usually play soccer with my friends in the park. は10語で条件を満たします。I play soccer. は3語で、内容が正しくても語数が足りず0点になります。',
    [...wd(['I', 'usually', 'play', 'soccer', 'with'], 8, { size: 11, h: 26 }), ...wd(['my', 'friends', 'in', 'the', 'park.'], 38, { size: 11, h: 26 }),
      lb(160, 82, '1 2 3 4 5 / 6 7 8 9 10　→　10語 ○', 13, C.green, 'middle', true),
      ...wd(cw(['I', 'play', 'soccer.'], RED), 104, { total: 140, size: 12 }), lb(160, 122, '3語　× 語数不足', 12, C.red, 'start', true)],
    '書いたら語を数える', GREEN),
  S('まとめです。①ヒントの語で時を決め、主語が1人なら s。②at のあとは -ing。③場所→時の順で、文の中の質問はふつうの語順。④天気は it を主語にして、語数を数える。',
    L([['① ヒントの語 → 時（形）', BLUE], ['② 主語が1人 → s（es）　at のあと → -ing', GREEN], ['③ 場所 → 時　文の中の質問は ふつうの順', MAIN], ['④ 天気は it　語数は数える', PURPLE]], 8, 30, 6, 12),
    '書いたら、見直してから次へ', GREEN),
], '英語選択入試の型');

// ── 総合実戦演習②：帰国子女入試（記述中心） ──
const f_449 = show([
  S('英作文（えいさくぶん）では、まず文の組み立てを決めます。①意見 ②理由1 ③その具体例 ④理由2 ⑤その具体例 ⑥まとめ、の6つです。これを順に1文ずつ書きます。',
    [...row(['①意見', '②理由1', '③具体例'], 14, BLUE, 12, 40), ...row(['④理由2', '⑤具体例', '⑥まとめ'], 70, GREEN, 12, 40), lb(160, 128, '1つずつ 1文で書くと 6文になる', 13, C.ink, 'middle', true)],
    '意見 → 理由 → 具体例 → まとめ', MAIN),
  Q('なぜ6文も書くのでしょう。60語を書くのに、4文では足りないからです。1文が10語ぐらいなので、6文で約60語になります。理由ごとに具体例を1文ずつ足すと、ちょうどよい長さです。',
    '6文書くの？', '1文 約10語\n4文 → 約40語（足りない）\n6文 → 約60語\n理由に具体例を足して6文にする', '60語には 6文ほしい', GREEN, 14),
  S('模範解答（もはんかいとう）の語数を数えます。意見12語、理由1が12語、具体例15語、理由2が8語、具体例14語、まとめ9語で、合計70語です。60語程度の条件に合っています。',
    tab([['文', '語数'], ['①意見', '12語'], ['②理由1（First, ...）', '12語'], ['③具体例（At home, ...）', '15語'], ['④理由2（Second, ...）', '8語'], ['⑤具体例（When I ...）', '14語'], ['⑥まとめ（For these reasons, ...）', '9語']], 6, [220, 80], 22, 12),
    '12＋12＋15＋8＋14＋9 ＝ 70語', BLUE),
  S('意見の文は I think ～. で始め、何がどうだと思うかを言います。I think studying at the library is better than studying at home. の better than は「～よりよい」という意味です。',
    [...wd([['I think', BLUE], ['studying at the library', GREEN]], 8, { size: 12, h: 26 }), ...wd([['is better', MAIN], ['than', RED], ['studying at home.', GREEN]], 40, { size: 12, h: 26 }),
      bx(20, 78, 280, 30, 'better than ＝ ～よりよい（くらべる）', C.red, FILL.red, 13), lb(160, 134, 'I think ～ ＝ 私は～と思う', 13, C.ink, 'middle', true)],
    'I think ～ . で意見をはっきり言う', BLUE),
  S('理由は First, と Second, でつなぎます。そのあとに At home, ... や When I ... で具体例を足します。つなぎのことばがあると、読む人は話の順がわかります。',
    L([['First, ～.　　（1つ目の理由）', BLUE], ['At home, ～.　（その具体例）', GREEN], ['Second, ～.　（2つ目の理由）', BLUE], ['When I ～, ...　（その具体例）', GREEN], ['For these reasons, ～.　（まとめ）', PURPLE]], 8, 26, 4, 12),
    'つなぎのことばで、話の順を見せる', MAIN),
  S('第2問は読解（どっかい）です。ケンはオーストラリアに行き、スミス家に2週間とまりました。最初は英語が話せず緊張（きんちょう）、スミスさんが助けてくれ、数日後に楽しみ、帰国後に英語をもっと勉強すると決めました。',
    [...row(['2週間\nとまる', '話せず\n緊張', '助けて\nもらう'], 12, MAIN, 11, 44, 12), ...row(['話すのが\n楽しい', '帰国後\n決心'], 74, GREEN, 11, 44, 12), lb(160, 138, '本文の流れ：緊張 → 助けられる → 楽しい → 決心', 11, C.ink, 'middle', true)],
    '本文を時の順に整理する', GREEN),
  Q('(1) How long did Ken stay in Australia? の答えは、なぜ Last summer. ではないのでしょう。How long は期間（きかん）をたずねる語です。時期をたずねる When とはちがいます。答えは He stayed there for two weeks. です。',
    'How long に Last summer はだめ？', 'How long ＝ どれくらい長く（期間）\nWhen ＝ いつ（時期）\n本文の for two weeks が根拠\n→ He stayed there for two weeks.', '期間 → for ～　時期 → 季節・日付', GREEN, 13),
  S('(2) Why was Ken nervous at first? のように Why でたずねられたら、Because で答えます。答えは Because he could not speak English well. で、本文のことばをそのまま使います。',
    [bx(10, 12, 300, 30, 'Why was Ken nervous at first?', C.purple, FILL.purple, 13), ar(160, 44, 160, 58, C.purple), bx(10, 60, 300, 40, 'Because he could not speak English well.', C.green, FILL.green, 12),
      lb(160, 124, 'Why → Because ～（理由）', 14, C.ink, 'middle', true), lb(160, 146, '本文の語をそのまま借りると安全', 12, C.ink, 'middle')],
    'Why には Because で答える', GREEN),
  S('(3) は日本語で、(4) は選択肢（せんたくし）です。設問文の言語（げんご）を、まず確かめます。日本語の設問には日本語、英語の設問には英語で答えます。(4) の答えは イ です。',
    [bx(10, 10, 146, 56, '設問が日本語\n→ 日本語で答える\n英語をもっと勉強しよう', C.blue, FILL.blue, 11), bx(164, 10, 146, 56, '設問が英語\n→ 英語で答える\nHe stayed ...', C.green, FILL.green, 11),
      bx(10, 78, 300, 34, '(4) イ Mr. Smith spoke to Ken slowly.', C.red, FILL.red, 12), lb(160, 130, '本文の spoke to him slowly と合う', 12, C.ink, 'middle', true)],
    '設問の言語を確かめてから答える', RED),
  S('まとめです。①英作文は6文の型で書き、語数を数える。②How long は期間、Why は Because。③設問文が日本語か英語かを確かめる。④選択肢は本文と見くらべる。',
    L([['① 意見→理由→具体例→まとめ の6文', BLUE], ['② 書いたら語数を数える', GREEN], ['③ How long ＝ 期間　Why ＝ Because', MAIN], ['④ 設問の言語を確かめる', RED]], 8, 30, 6, 13),
    '型どおりに書けば、60語はちょうど書ける', GREEN),
], '英作文と読解の型');

// ── 音と文字①：二文字で一つの音（sh・ch・th・ph・wh） ──
const wordBoxes = (ws: string[], x: number, y: number, w: number, c: Col, h = 22, size = 12, gap = 4): DiagramElement[] =>
  ws.map((t, i) => bx(x, y + i * (h + gap), w, h, t, c[0], c[1], size));

const f_451 = show([
  S('英語には、2つの文字がならんで1つの音になる組み合わせがあります。sh・ch・th・ph・wh の5つが代表です。ばらばらに読まず、かたまりで読みます。',
    [...cells(['sh', 'ch', 'th', 'ph', 'wh'], 14, MAIN, 22, 56, 6), lb(160, 100, '2文字で 1つの音', 18, C.red, 'middle', true), lb(160, 128, '「エス・エイチ」と分けて読まない', 13, C.ink, 'middle')],
    '二文字で一つの音のかたまり', MAIN),
  Q('では、なぜ sh を「エス」「エイチ」と分けて読まないのでしょう。sh は2つの文字で1つの音になる決まりで、「シュ」に近い音を出します。ship は「シップ」、fish は「フィッシュ」と読みます。',
    'sh は分けて読まないの？', 'sh ＝ 「シュ」に近い1つの音\nship　fish　shop\n→ エス・エイチと読むと\n　まったくちがう音になる', '2文字で 1つの音', GREEN, 14),
  S('sh は「シュ」に近い音で、ship・fish・she・shop・wash などです。ch は「チ」に近い音で、chair・lunch・cheese・teacher などです。',
    [bx(10, 8, 146, 24, 'sh ＝ シュ', C.red, FILL.red, 14), ...wordBoxes(['ship（船）', 'fish（魚）', 'shop（店）', 'wash（あらう）'], 10, 36, 142, GREEN, 24, 12),
      bx(164, 8, 146, 24, 'ch ＝ チ', C.blue, FILL.blue, 14), ...wordBoxes(['chair（いす）', 'lunch（昼食）', 'cheese（チーズ）', 'teacher（先生）'], 168, 36, 142, BLUE, 24, 12)],
    'sh は「シュ」、ch は「チ」', MAIN),
  S('th には2つの音があります。this・that・they のようににごる音と、think・three・month のようににごらない音です。どちらも、舌の先を上と下の歯ではさんで出します。',
    [bx(14, 10, 100, 14, '上の歯', C.gray, FILL.gray, 10), ci(64, 40, 12, '舌', C.red, FILL.red, 11), bx(14, 58, 100, 14, '下の歯', C.gray, FILL.gray, 10), lb(64, 88, '舌を歯ではさむ', 11, C.red, 'middle', true),
      bx(130, 8, 180, 22, 'にごる：this / that / they', C.blue, FILL.blue, 12), bx(130, 36, 180, 22, 'にごる：mother（お母さん）', C.blue, FILL.blue, 12),
      bx(130, 68, 180, 22, 'にごらない：think / three', C.green, FILL.green, 12), bx(130, 96, 180, 22, 'にごらない：month / bath', C.green, FILL.green, 12)],
    'th ＝ 舌をはさむ音（2種類）', BLUE),
  S('ph は f と同じ音で、phone・photo・elephant・alphabet などです。wh は「ホワ」に近い音で、what・when・where・which・white・why など、たずねる言葉に多くあります。ただし who だけは「フー」と読みます。',
    [bx(10, 8, 146, 24, 'ph ＝ f の音', C.purple, FILL.purple, 14), ...wordBoxes(['phone（電話）', 'photo（写真）', 'elephant（ぞう）'], 10, 36, 142, PURPLE, 24, 12),
      bx(164, 8, 146, 24, 'wh ＝ ホワ', C.red, FILL.red, 14), ...wordBoxes(['what（何）', 'where（どこ）', 'white（白い）'], 168, 36, 142, RED, 24, 12),
      bx(164, 116, 146, 26, 'who だけ「フー」', C.main, FILL.yellow, 12)],
    'ph は f、wh は ホワ（who は例外）', PURPLE),
  S('ck は語の終わりで k の音になります。black・duck・clock・rock・back などです。ck は語のはじめには来ません。sh と ch は、語のはじめにも終わりにも来ます。',
    [...wordBoxes(['black（黒い）', 'duck（あひる）', 'clock（時計）'], 10, 10, 140, RED, 26, 13),
      bx(164, 10, 146, 26, 'ck は語の終わりだけ', C.red, FILL.red, 12), bx(164, 44, 146, 26, 'sh・ch は はじめも終わりも', C.green, FILL.green, 11), bx(164, 78, 146, 26, 'ph は どこにでも', C.purple, FILL.purple, 12)],
    'ck ＝ 終わりの k', RED),
  Qt('th をなぜ「ス」や「ズ」だけで覚えてはいけないのでしょう。think と sink が同じ音になってしまうからです。舌を歯ではさむ動きといっしょに覚えると、区別できます。',
    'th を「ス」で覚えてはだめ？',
    [bx(10, 58, 140, 40, 'think\n舌を歯ではさむ', C.green, FILL.green, 13), bx(170, 58, 140, 40, 'sink\n舌ははさまない', C.gray, FILL.gray, 13),
      lb(160, 118, '音と口の動きをセットで', 13, C.red, 'middle', true), lb(160, 140, 'school と Christmas の ch は「ク」の音', 12, C.ink, 'middle')],
    '口の動きとセットで覚える'),
  S('まとめです。聞こえた音から、どの組み合わせかを選びます。「シュ」なら sh、「チ」なら ch、「フ」には f と ph があります。',
    tab([['聞こえる音', 'つづり'], ['シュ', 'sh（ship）'], ['チ', 'ch（chair）'], ['舌をはさむ', 'th（this / think）'], ['フ', 'f または ph（phone）'], ['ホワ', 'wh（what）　語の終わりの k → ck']], 8, [120, 180], 26, 12),
    '二文字は、切りはなさず かたまりで読む', GREEN),
], '二文字で一つの音');

// ── 音と文字②：r のついた母音（ar・er・ir・or・ur） ──
const f_452 = show([
  S('母音（ぼいん）に r がついたつづりを学びます。ar は「アー」、or は「オー」、er・ir・ur は3つとも同じ「あいまいなアー」の音です。',
    [bx(10, 14, 90, 50, 'ar\nアー', C.red, FILL.red, 15), bx(115, 14, 90, 50, 'or\nオー', C.blue, FILL.blue, 15), bx(220, 14, 90, 50, 'er・ir・ur\nあいまいなアー', C.green, FILL.green, 11),
      lb(160, 100, 'r は日本語のラ行とはちがう音', 13, C.ink, 'middle', true), lb(160, 126, '舌を口の中で丸めるようにする', 12, C.ink, 'middle')],
    'r のついた母音は 5つ', MAIN),
  S('ar は口を大きく開けて「アー」と読みます。car（車）・park（公園）・star（星）・card（カード）・farm（農場）・dark（暗い）などです。',
    [...wordBoxes(['car（車）', 'park（公園）', 'star（星）'], 10, 12, 142, RED, 30, 14), ...wordBoxes(['card（カード）', 'farm（農場）', 'dark（暗い）'], 168, 12, 142, RED, 30, 14)],
    'ar ＝ 口を大きく開けて「アー」', RED),
  S('or は「オー」に近い音です。short（短い）・morning（朝）・fork（フォーク）・sport（スポーツ）・north（北）・horse（馬）などです。',
    [...wordBoxes(['short（短い）', 'morning（朝）', 'fork（フォーク）'], 10, 12, 142, BLUE, 30, 14), ...wordBoxes(['sport（スポーツ）', 'north（北）', 'horse（馬）'], 168, 12, 142, BLUE, 30, 14)],
    'or ＝ 「オー」', BLUE),
  S('er・ir・ur は、つづりがちがっても同じ音です。er は teacher・sister・water、ir は bird・girl・first・shirt、ur は turn・nurse・Thursday です。',
    [bx(10, 8, 96, 24, 'er', C.green, FILL.green, 14), ...wordBoxes(['teacher', 'sister', 'water'], 10, 36, 96, GREEN, 24, 12),
      bx(112, 8, 96, 24, 'ir', C.green, FILL.green, 14), ...wordBoxes(['bird', 'girl', 'first'], 112, 36, 96, GREEN, 24, 12),
      bx(214, 8, 96, 24, 'ur', C.green, FILL.green, 14), ...wordBoxes(['turn', 'nurse', 'Thursday'], 214, 36, 96, GREEN, 24, 12), lb(160, 130, '音はぜんぶ同じ「あいまいなアー」', 12, C.red, 'middle', true)],
    'er・ir・ur ＝ 同じ音', GREEN),
  Q('では、なぜ聞いただけでは、書くつづりが決まらないのでしょう。3つとも同じ音だからです。音ではなく、語ごとにつづりを覚えるしかありません。teacher は er、bird は ir、turn は ur です。',
    '聞いても書けないの？', '音が同じ → つづりが3通り\nteacher … er\nbird … ir\nturn … ur\n→ 語ごとに形を覚える', '語ごとに つづりを覚える', GREEN, 14),
  S('語の終わりの er は、人を表すことが多いです。teach（教える）→ teacher（先生）、play → player（選手）、sing → singer（歌手）、farm → farmer（農場主）。',
    pairs([['teach', 'teacher（先生）'], ['play', 'player（選手）'], ['sing', 'singer（歌手）'], ['farm', 'farmer（農場主）']], 14, { cols: 1, h: 26, gap: 8, size: 13 }),
    '動作の語 ＋ er ＝ その人', MAIN),
  S('つづりが似た語は、意味といっしょに覚えます。Tuesday（火曜日）と Thursday（木曜日）は、どちらも T で始まるので2番目の文字で見分けます。first と fast、short と shot もまちがえやすい組です。',
    tab([['語', 'ちがい'], ['Tuesday', '火曜日（ue）'], ['Thursday', '木曜日（ur）'], ['first / fast', '一番目 / 速い'], ['short / shot', '短い / 打つこと']], 10, [120, 180], 28, 13),
    '似たつづりは 意味とセット', BLUE),
  S('まとめです。①ar は「アー」。②or は「オー」。③er・ir・ur は同じ音で、つづりは語ごとに覚える。④語の終わりの er は人を表すことが多い。',
    L([['① ar ＝ アー（car・park）', RED], ['② or ＝ オー（short・horse）', BLUE], ['③ er・ir・ur ＝ 同じ音。つづりは語ごと', GREEN], ['④ 終わりの er ＝ 人（teacher）', PURPLE]], 8, 30, 6, 13),
    '聞いて書く問題は、つづりを覚えているかが勝負', GREEN),
], 'r のついた母音');

// ── 音と文字③：二つの母音がならぶとき ──
const f_453 = show([
  S('母音が2つならぶつづりを学びます。oi・oy、ou・ow、au・aw、oo、ea の5組です。同じつづりでも音が2つあるものがあるので、語ごとに確かめます。',
    [...cells(['oi・oy', 'ou・ow', 'au・aw'], 14, MAIN, 16, 44, 8), ...cells(['oo', 'ea'], 70, RED, 18, 44, 8, 60, 200), lb(160, 130, '同じつづりで 音が2つ：oo・ea・ow', 13, C.red, 'middle', true)],
    '二つの母音がならぶ組み合わせ', MAIN),
  S('oi と oy は「オイ」の音です。oi は語の中に来て、coin・point・oil・voice。oy は語の終わりに来て、boy・toy・enjoy です。',
    [bx(10, 8, 146, 24, 'oi（語の中）', C.blue, FILL.blue, 14), ...wordBoxes(['coin（コイン）', 'point（点）', 'oil（油）'], 10, 36, 142, BLUE, 24, 12),
      bx(164, 8, 146, 24, 'oy（語の終わり）', C.green, FILL.green, 14), ...wordBoxes(['boy（男の子）', 'toy（おもちゃ）', 'enjoy（楽しむ）'], 168, 36, 142, GREEN, 24, 12)],
    'oi は中、oy は終わり ＝ オイ', BLUE),
  S('ou と ow には「アウ」の音があります。house・mouse・out・about、cow・now・how・flower・town などです。',
    [...wordBoxes(['house（家）', 'mouse（ねずみ）', 'out（外へ）', 'about'], 10, 10, 142, RED, 26, 13), ...wordBoxes(['cow（牛）', 'now（今）', 'how（どのように）', 'town（町）'], 168, 10, 142, RED, 26, 13)],
    'ou・ow ＝ 「アウ」', RED),
  Q('同じ ow でも、なぜ cow と snow は別の音なのでしょう。ow には「アウ」と「オウ」の2つの音があり、ルールで決まっていないからです。snow・window・yellow・know・slow は「オウ」です。',
    'ow は音が2つあるの？', 'ow ＝ 「アウ」…… cow / now / town\now ＝ 「オウ」…… snow / window / yellow\n→ どちらかは語ごとに覚える', 'cow と snow をセットで覚える', GREEN, 13),
  S('au と aw は「オー」に近い音です。autumn（秋）・because、saw（のこぎり・見た）・draw（絵をかく）・straw（ストロー）です。',
    [...wordBoxes(['autumn（秋）', 'because'], 10, 14, 142, BLUE, 30, 14), ...wordBoxes(['saw', 'draw（絵をかく）', 'straw（ストロー）'], 168, 14, 142, BLUE, 30, 14)],
    'au・aw ＝ 「オー」', BLUE),
  S('oo には2つの音があります。長い「ウー」は food・school・moon・room、短い「ウ」は book・look・good・foot です。',
    [bx(10, 8, 146, 26, '長い「ウー」', C.blue, FILL.blue, 14), ...wordBoxes(['food（食べ物）', 'school（学校）', 'moon（月）', 'room（部屋）'], 10, 40, 142, BLUE, 24, 12),
      bx(164, 8, 146, 26, '短い「ウ」', C.green, FILL.green, 14), ...wordBoxes(['book（本）', 'look（見る）', 'good（よい）', 'foot（足）'], 168, 40, 142, GREEN, 24, 12)],
    'oo ＝ 長いウー と 短いウ', MAIN),
  S('ea にも2つの音があります。長い「イー」は eat・read・sea・teacher、短い「エ」は bread・head・ready です。read は、今の形が「イー」、過去の形が「エ」で、つづりは同じです。',
    [bx(10, 8, 146, 26, '長い「イー」', C.blue, FILL.blue, 14), ...wordBoxes(['eat（食べる）', 'sea（海）', 'teacher'], 10, 40, 142, BLUE, 24, 12),
      bx(164, 8, 146, 26, '短い「エ」', C.green, FILL.green, 14), ...wordBoxes(['bread（パン）', 'head（頭）', 'ready'], 168, 40, 142, GREEN, 24, 12),
      bx(40, 120, 240, 30, 'read：今 ＝ イー　過去 ＝ エ', C.red, FILL.red, 13)],
    'ea ＝ イー と エ', GREEN),
  S('まとめです。oo・ea・ow の3つは、同じつづりで音が2つあります。ほかの組み合わせは、1つの音で覚えられます。',
    L([['oi・oy ＝ オイ　　au・aw ＝ オー', BLUE], ['ou・ow ＝ アウ　　（ow は オウ もある）', RED], ['oo ＝ ウー / ウ　　ea ＝ イー / エ', GREEN]], 14, 34, 10, 13),
    '2つの音がある語は、セットで覚える', GREEN),
], '二つの母音のならび');

// ── 数字③：順番を表す言い方と日付 ──
const f_454 = show([
  S('日付の May 5th は、「メイ ファイブ」ではなく「メイ フィフス」と読みます。5日は「5番目の日」だからです。今日は、順番を表す言い方（序数（じょすう））を学びます。',
    [bx(60, 14, 200, 44, 'May 5th', C.main, FILL.warm, 24), ar(160, 60, 160, 78, C.main), bx(40, 80, 240, 40, 'May fifth（メイ フィフス）', C.green, FILL.green, 18), lb(160, 144, 'five ではなく 順番の形 fifth', 12, C.red, 'middle', true)],
    '日付は 順番の形で読む', MAIN),
  Q('では、なぜ日付は five ではなく fifth と読むのでしょう。日付は「5番目の日」という意味で、順番を表す言い方を使う決まりだからです。同じように、3日は three ではなく third です。',
    '日付は順番の形なの？', '日付 ＝ 「〜番目の日」\n5日 → the fifth day → fifth\n3日 → the third day → third\n→ 数ではなく順番の形', '日付は「〜番目」の言い方', GREEN, 14),
  S('基本は、数に th をつけます。four → fourth、six → sixth、seven → seventh、ten → tenth、eleven → eleventh です。',
    pairs([['four', 'fourth（4番目）'], ['six', 'sixth（6番目）'], ['seven', 'seventh（7番目）'], ['ten', 'tenth（10番目）'], ['eleven', 'eleventh（11番目）']], 10, { cols: 1, h: 24, gap: 6, size: 13 }),
    '基本：数 ＋ th', MAIN),
  S('1・2・3だけは、ぜんぜんちがう形になります。one → first、two → second、three → third です。これだけ特別に覚えます。',
    pairs([['one', 'first（1番目）'], ['two', 'second（2番目）'], ['three', 'third（3番目）']], 22, { cols: 1, h: 30, gap: 12, size: 15, c2: RED }),
    '1・2・3 だけ特別', RED),
  S('形が少し変わる語もあります。five → fifth、eight → eighth、nine → ninth（e が消える）、twelve → twelfth（ve が f に変わる）、twenty → twentieth（y が ie に変わる）です。',
    pairs([['five', 'fifth'], ['eight', 'eighth'], ['nine', 'ninth（e が消える）'], ['twelve', 'twelfth（ve → f）'], ['twenty', 'twentieth（y → ie）'], ['thirty', 'thirtieth']], 8, { cols: 1, h: 20, gap: 4, size: 12, c2: BLUE }),
    'ninth・twelfth・twentieth に注意', BLUE),
  S('21番目からは、一の位だけを順番の形にします。twenty-one → twenty-first、twenty-two → twenty-second、twenty-three → twenty-third、thirty-one → thirty-first です。',
    pairs([['twenty-one', 'twenty-first'], ['twenty-two', 'twenty-second'], ['twenty-three', 'twenty-third'], ['thirty-one', 'thirty-first']], 12, { cols: 1, h: 26, gap: 8, size: 13 }),
    '一の位だけ 順番の形にする', GREEN),
  Q('数字で書くときは、1st・2nd・3rd・4th のように最後の2文字をつけます。では、なぜ 11th・12th・13th は st・nd・rd ではなく th なのでしょう。eleventh・twelfth・thirteenth は first・second・third の形ではないからです。',
    '11th は 11st ではないの？', '1st・2nd・3rd ＝ first・second・third の形\n11th・12th・13th ＝ その形ではない\neleventh・twelfth・thirteenth\n→ だから th', '21st・22nd・23rd は 一の位が 1・2・3', GREEN, 13),
  S('日付は「月 → 日」の順に言います。May 5th、July 20th、January 1st。たずねるときは What\'s the date today?、答えは It\'s October 10th. です。月の名前は大文字で書き始めます。',
    [bx(10, 10, 300, 30, 'What\'s the date today?', C.purple, FILL.purple, 14), ar(160, 42, 160, 54, C.purple), bx(10, 56, 300, 30, 'It\'s October 10th.', C.green, FILL.green, 14),
      lb(160, 108, '月（大文字）→ 日（順番の形）', 13, C.ink, 'middle', true), lb(160, 132, 'Sunday, May 5th ＝ 曜日 → 月 → 日', 12, C.ink, 'middle')],
    '月 → 日、日は順番の形', MAIN),
  S('まとめです。①基本は th。②1・2・3は first・second・third。③ninth・twelfth・twentieth に注意。④21番目からは一の位だけ。⑤日付は順番の形で読む。',
    L([['① 基本 ＋th　② 1・2・3 は特別', BLUE], ['③ ninth・twelfth・twentieth', RED], ['④ 21番目から 一の位だけ', GREEN], ['⑤ 日付は 順番の形で読む', PURPLE]], 8, 30, 6, 13),
    'May 5th ＝ May fifth', GREEN),
], '順番を表す言い方と日付');

// ── 時こくの言い方 ──
const f_455 = show([
  S('「今、何時ですか」は What time is it? とたずねます。答えは It\'s seven. （7時です）。ちょうどの7時なら It\'s seven o\'clock. と言います。',
    [...clock(80, 60, 44, 7, 0), bx(150, 18, 160, 30, 'What time is it?', C.purple, FILL.purple, 13), ar(230, 50, 230, 62, C.purple), bx(150, 64, 160, 30, 'It\'s seven o\'clock.', C.green, FILL.green, 13), lb(230, 120, '＝ 7時ちょうどです', 12, C.ink, 'middle')],
    '時こくのたずね方と答え方', MAIN),
  Q('なぜ答えはいつも It\'s で始めるのでしょう。英語の文には必ず主語が必要ですが、「7時です」には「何が」にあたる語がありません。そこで形をそろえるために It を置きます。この It は「それ」という意味ではありません。',
    'It\'s で始めるの？', '英語の文には 主語がいる\n「7時です」には「何が」がない\n→ 形をそろえる It を置く\nIt は「それ」ではない', 'I is や This is は使わない', GREEN, 14),
  S('何時何分は、時 → 分の順に、数字をそのまま読みます。7:30 は seven thirty、8:15 は eight fifteen、9:45 は nine forty-five です。',
    [...clock(54, 56, 38, 7, 30), ...clock(160, 56, 38, 8, 15), ...clock(266, 56, 38, 9, 45),
      lb(54, 112, 'seven thirty', 11, C.ink, 'middle', true), lb(160, 112, 'eight fifteen', 11, C.ink, 'middle', true), lb(266, 112, 'nine forty-five', 11, C.ink, 'middle', true)],
    '時 → 分 の順に 数字をそのまま読む', BLUE),
  Qt('10時5分は、なぜ ten oh five と言うのでしょう。分が1けたのときは、0を oh（オウ）と読みます。時こくを「10・0・5」と数字のならびとして読む決まりです。',
    '10:05 は ten five ではないの？',
    [...clock(70, 100, 38, 10, 5), bx(130, 66, 180, 30, '10 : 05', C.main, FILL.warm, 18), bx(130, 104, 180, 30, 'ten oh five', C.green, FILL.green, 16)],
    '1けたの分は 0 を oh と読む'),
  Qt('o\'clock は、なぜちょうどのときだけなのでしょう。o\'clock は「〜時ちょうど」という意味のことばだからです。分があるとき（seven thirty）には付けられません。',
    'o\'clock はいつ付ける？',
    [bx(10, 58, 146, 30, 'It\'s seven o\'clock.', C.green, FILL.green, 12), lb(83, 102, '○ ちょうどの7時', 12, C.green, 'middle', true),
      bx(164, 58, 146, 30, 'It\'s seven thirty.', C.green, FILL.green, 12), lb(237, 102, '○ 分があるとき', 12, C.green, 'middle', true),
      bx(60, 120, 200, 30, '× seven thirty o\'clock', C.red, FILL.red, 13)],
    'ちょうどのときだけ o\'clock'),
  S('「〜時に」と言うときは at を使います。I get up at six.（6時に起きます）、School starts at eight thirty.。時こくは時計の針が1か所を指す「点」なので at です。',
    [bx(10, 12, 300, 28, 'I get up at six.', C.main, FILL.warm, 14), bx(10, 46, 300, 28, 'School starts at eight thirty.', C.main, FILL.warm, 13),
      ...wd([['at', RED], ['時こく（点）', MAIN]], 88, { size: 13, total: 200, x0: 60 }), bx(40, 124, 240, 28, '曜日・日付 ＝ on　月・季節 ＝ in', C.blue, FILL.blue, 12)],
    '時こく（点）→ at', GREEN),
  S('ほかの言い方もあります。half past seven は7時半、a quarter past eight は8時15分、a quarter to nine は9時15分前（8時45分）です。past は「すぎ」、to は「前」です。',
    [...clock(54, 56, 38, 7, 30), ...clock(160, 56, 38, 8, 15), ...clock(266, 56, 38, 8, 45),
      lb(54, 112, 'half past seven', 10, C.ink, 'middle', true), lb(160, 112, 'a quarter past eight', 10, C.ink, 'middle', true), lb(266, 112, 'a quarter to nine', 10, C.ink, 'middle', true)],
    'past ＝ すぎ　to ＝ 前', BLUE),
  S('まとめです。①答えは It\'s で始める。②o\'clock はちょうどのときだけ。③時 → 分の順に数字を読み、1けたの分は oh。④「〜時に」は at。',
    L([['① It\'s ～.（I is や This is はだめ）', GREEN], ['② o\'clock は ちょうどだけ', BLUE], ['③ 時 → 分　10:05 ＝ ten oh five', MAIN], ['④ 「〜時に」は at', PURPLE]], 8, 30, 6, 13),
    '時こくの文は It\'s と at', GREEN),
], '時こくの言い方');

// ── 英語を書くときのきまり ──
const f_456 = show([
  S('正しい英語は、書き方のきまりも守って書きます。i like music を直すと I like music. になります。文の最初と I を大文字にし、最後にピリオドをつけます。',
    [...wd(cw(['i', 'like', 'music'], RED), 14, { total: 200, x0: 60 }), lb(160, 56, '×', 20, C.red, 'middle', true), ...wd(cw(['I', 'like', 'music.'], GREEN), 74, { total: 200, x0: 60 }), lb(160, 118, '○  大文字 と ピリオド', 15, C.green, 'middle', true)],
    '大文字とピリオドを忘れない', RED),
  S('大文字で書き始めるものは7つです。文の最初、I、人の名前、地名・国名、曜日、月の名前、言語や国の人を表す語です。',
    [...wordBoxes(['文の最初：This is my book.', 'I：Tom and I are friends.', '名前：Ken / Mary / Mr. Brown', '地名：Japan / Tokyo'], 10, 8, 300, GREEN, 28, 13, 6),
      lb(160, 148, '曜日 Sunday ／ 月 January ／ English', 12, C.ink, 'middle', true)],
    '日本語にない決まりは 忘れやすい', GREEN),
  Q('なぜ、文の最初は大文字、最後は記号なのでしょう。文がどこから始まり、どこで終わるかを読む人に知らせる目じるしだからです。書いてあることが正しくても、この2つをはずすと減点されます。',
    '文の最初と最後に目じるし？', '最初 ＝ 大文字\n最後 ＝ . ？ ！\n→ 文の始まりと終わりの目じるし\nはずすと減点される', 'この2つが基本', GREEN, 14),
  S('文の終わりの記号は3つです。ふつうの文はピリオド（.）、たずねる文はクエスチョンマーク（?）、強い気持ちはエクスクラメーションマーク（!）です。Do や What で始まる文は ? で終わります。',
    [bx(10, 12, 300, 30, 'I like dogs.　（ふつうの文）', C.main, FILL.warm, 13), bx(10, 48, 300, 30, 'Do you like dogs?　（たずねる文）', C.blue, FILL.blue, 13), bx(10, 84, 300, 30, 'Look!　Wow!　（強い気持ち）', C.red, FILL.red, 13),
      lb(160, 138, 'たずねる文に ピリオドは×', 12, C.red, 'middle', true)],
    '. と ? と !', BLUE),
  S('語と語の間は、必ず1つ分あけます。日本語のようにつめて書いてはいけません。Ilikedogs. ではなく、I like dogs. と書きます。',
    [...wd(['Ilikedogs.'], 14, { total: 160, x0: 80 }).map((e) => ({ ...e, color: C.red, fill: FILL.red })), lb(160, 56, '×  読めない', 14, C.red, 'middle', true), ...wd(cw(['I', 'like', 'dogs.'], GREEN), 78, { total: 200, x0: 60 }), lb(160, 124, '○  1語ずつ あける', 14, C.green, 'middle', true)],
    '語と語の間をあける', MAIN),
  S('コンマ（,）は3つ以上をならべるとき、呼びかけのあと、曜日と日付の間に使います。アポストロフィ（\'）は短くした形（I\'m・isn\'t・it\'s）と「〜の」（Ken\'s book）に使います。',
    [bx(10, 8, 300, 26, 'apples, oranges, and bananas', C.blue, FILL.blue, 12), bx(10, 38, 146, 26, 'Hello, Ken.', C.blue, FILL.blue, 12), bx(164, 38, 146, 26, 'Sunday, May 5th', C.blue, FILL.blue, 12),
      bx(10, 78, 146, 26, 'I am → I\'m', C.green, FILL.green, 12), bx(164, 78, 146, 26, 'is not → isn\'t', C.green, FILL.green, 12), bx(10, 108, 146, 26, 'it is → it\'s', C.green, FILL.green, 12), bx(164, 108, 146, 26, 'Ken\'s book（ケンの本）', C.green, FILL.green, 11)],
    'コンマ ＝ ,　アポストロフィ ＝ \'', BLUE),
  S('4本線に書くときは、大文字は上の3本、小文字の多くは真ん中の2本を使います。b・d・f・h・k・l・t は上にのび、g・j・p・q・y は下にのびます。',
    [ln(20, 20, 300, 20, C.gray, false, 1.2), ln(20, 46, 300, 46, C.gray, false, 1.2), ln(20, 72, 300, 72, C.red, false, 1.8), ln(20, 98, 300, 98, C.gray, false, 1.2),
      lb(50, 58, 'B', 30, C.ink, 'middle', true), lb(100, 62, 'a', 30, C.ink, 'middle', true), lb(150, 52, 'b', 30, C.blue, 'middle', true), lb(200, 82, 'g', 30, C.green, 'middle', true), lb(250, 62, 'e', 30, C.ink, 'middle', true),
      lb(160, 124, '赤い線の上に 文字をのせる', 12, C.red, 'middle', true), lb(160, 144, 'b d f h k l t → 上へ　g j p q y → 下へ', 11, C.ink, 'middle')],
    '大文字は上の3本、小文字は真ん中の2本', MAIN),
  S('まとめです。書き終えたら次の5つを確かめます。①文の最初は大文字か。②最後に . か ? があるか。③I は大文字か。④名前・曜日・月は大文字か。⑤語と語の間はあいているか。',
    L([['① 文の最初は 大文字', GREEN], ['② 最後に . か ? 　③ I は大文字', BLUE], ['④ 名前・曜日・月は 大文字', MAIN], ['⑤ 語と語の間は あいている', PURPLE]], 8, 30, 6, 13),
    '書き終えたら、5つを見直す', GREEN),
], '英語を書くときのきまり');

// ── 一般動詞①：「〜します」の文 ──
const f_457 = show([
  S('日本語は「わたしは サッカーを します」と、動作を最後に言います。英語は「わたしは します サッカーを」の順です。I play soccer. のように、だれが → どうする → 何を の順に並べます。',
    [...wd([['わたしは', GREEN], ['サッカーを', BLUE], ['します', RED]], 12, { size: 13 }), lb(160, 56, '日本語', 11, C.gray, 'middle'), ...wd([['I', GREEN], ['play', RED], ['soccer.', BLUE]], 76, { size: 14 }), lb(160, 120, '英語', 11, C.gray, 'middle'),
      lb(160, 142, '動作（します）が 2番目に来る', 12, C.red, 'middle', true)],
    'だれが → どうする → 何を', MAIN),
  Q('では、なぜ英語は「だれが → どうする → 何を」の順なのでしょう。英語は、だれが何をするかを先に言い、そのあとに相手を足すことばだからです。声に出しながら並べると、日本語のまま I soccer play とする誤りが減ります。',
    'なぜその順なの？', '英語 ＝ 先に「だれが何をする」を言う\n主語 → 動詞 → そのほか\nI play soccer.\n× I soccer play.', '声に出して 順番に並べる', GREEN, 14),
  S('「〜します」を表す語を、一般動詞（いっぱんどうし）といいます。play・like・go・eat・read・study・have・want・run・swim などです。',
    [...cells(['play', 'like', 'go', 'eat', 'read'], 14, RED, 14, 34, 6), ...cells(['study', 'have', 'want', 'run', 'swim'], 58, RED, 14, 34, 6), lb(160, 118, '動きや気持ちを表す語', 14, C.ink, 'middle', true), lb(160, 142, 'I have ～.（持っている）　I want ～.（ほしい）', 12, C.ink, 'middle')],
    '動きや気持ちを表す語 ＝ 一般動詞', RED),
  S('be動詞（am・is・are）は「〜です」「〜がいる」を表し、一般動詞は「〜します」を表します。I am a student.（学生です）と I play tennis.（テニスをします）のように使い分けます。',
    [bx(10, 12, 146, 26, 'be動詞：です・いる', C.blue, FILL.blue, 13), bx(10, 44, 146, 30, 'I am a student.', C.blue, FILL.blue, 13), bx(164, 12, 146, 26, '一般動詞：します', C.red, FILL.red, 13), bx(164, 44, 146, 30, 'I play tennis.', C.red, FILL.red, 13),
      lb(160, 106, 'のどちらか。両方は入れない', 13, C.ink, 'middle', true), ...wd(cw(['I', 'am', 'play', 'tennis.'], RED), 122, { total: 220, x0: 50, size: 12 })],
    '「です」は be動詞、「します」は一般動詞', BLUE),
  Q('なぜ I am play tennis. はまちがいなのでしょう。「です（am）」と「します（play）」が重なってしまい、意味が通らないからです。一つの文に動詞は一つ、と覚えます。',
    'am と play を並べないの？', '一つの文に 動詞は 一つ\n「です」の文 → be動詞\n「します」の文 → 一般動詞\nI play tennis.', 'am を取って I play tennis.', RED, 14),
  S('go のあとには to が必要です。go to school、go to the park のように「どこへ」を表します。ただし home は「家へ」の意味をもっているので、go home と言い、to はつけません。',
    [...wd([['I', GREEN], ['go', RED], ['to', BLUE], ['school.', MAIN]], 12, { size: 13 }), ...wd([['I', GREEN], ['go', RED], ['to', BLUE], ['the park.', MAIN]], 48, { size: 13 }),
      ...wd([['I', GREEN], ['go', RED], ['home.', MAIN]], 92, { size: 13, total: 220, x0: 10 }), lb(250, 106, '← to なし', 12, C.red, 'middle', true), lb(160, 140, 'go は動きだけ → 「どこへ」の to が必要', 12, C.ink, 'middle')],
    'go to ～　ただし go home', BLUE),
  S('もう1つ。好きなもの（動物・食べ物）は、ふつう複数形にします。I like dogs. です。I like dog. だと「犬の肉が好き」の意味になってしまいます。at school、every day、after school は文の終わりに置きます。',
    [...wd([['I', GREEN], ['like', RED], ['dogs.', BLUE]], 12, { size: 13, total: 220, x0: 10 }), lb(262, 26, '○', 20, C.green, 'middle', true),
      ...wd(cw(['I', 'like', 'dog.'], RED), 52, { size: 13, total: 220, x0: 10 }), lb(262, 66, '×', 20, C.red, 'middle', true),
      ...wd([['I play soccer', MAIN], ['after school.', BLUE]], 96, { size: 12 }), lb(160, 140, 'いつ・どこは 文の終わりへ', 12, C.ink, 'middle')],
    '好きなものは複数形　いつ・どこは終わり', GREEN),
  S('まとめです。①だれが → どうする → 何を。②一つの文に動詞は一つ。③go のあとは to（home は不要）。④好きなものは複数形。',
    L([['① だれが → どうする → 何を', GREEN], ['② 一つの文に動詞は一つ（I am play ×）', RED], ['③ go to ～　ただし go home', BLUE], ['④ I like dogs.（複数形）', PURPLE]], 8, 30, 6, 13),
    '主語 → 動詞 → そのほか', GREEN),
], '一般動詞「〜します」の文');

// ── 一般動詞②：he・she のときは s がつく ──
const f_458 = show([
  S('主語が he・she・it・1人・1つのとき、一般動詞（いっぱんどうし）の形が変わります。I play tennis. では play、Ken plays tennis. では plays と、s がつきます。',
    [...wd([['I', GREEN], ['play', RED], ['tennis.', MAIN]], 14, { total: 140, size: 13 }), ...wd([['Ken', GREEN], ['plays', RED], ['tennis.', MAIN]], 14, { x0: 170, total: 140, size: 13 }),
      lb(80, 62, 's なし', 13, C.blue, 'middle', true), lb(240, 62, 's がつく', 13, C.red, 'middle', true), bx(40, 86, 240, 40, '主語が 1人・1つ のとき → s', C.red, FILL.red, 14)],
    '主語が1人なら 動詞に s', MAIN),
  S('主語の見分け方です。s がつくのは he・she・it と、1人・1つの名前（Ken・my mother・the dog）。s がつかないのは I・you・we・they と、2人以上（my friends・Tom and Ken）です。',
    [bx(10, 8, 146, 24, 's がつく', C.red, FILL.red, 14), ...wordBoxes(['he / she / it', 'Ken', 'my mother', 'the dog'], 10, 36, 142, RED, 24, 12), bx(164, 8, 146, 24, 's がつかない', C.blue, FILL.blue, 14), ...wordBoxes(['I / you / we / they', 'my friends', 'Tom and Ken', 'the dogs'], 168, 36, 142, BLUE, 24, 12)],
    '1人・1つ → s　2人以上 → なし', BLUE),
  Q('なぜ、動詞を書く前に主語の数を確かめるのでしょう。日本語では「わたしはします」も「かれはします」も同じ形ですが、英語は主語によって動詞の形が変わるからです。英語特有のきまりなので、書くたびに確かめます。',
    '主語を先に見るの？', '日本語 … 「します」はいつも同じ\n英語 … 主語で動詞の形が変わる\n→ 書く前に主語の数を見る\n1人・1つ？　2人以上？', '先に主語、あとで動詞', GREEN, 14),
  S('いちばん多いのは、そのまま s をつける形です。play → plays、like → likes、run → runs、read → reads。',
    pairs([['play', 'plays'], ['like', 'likes'], ['run', 'runs'], ['read', 'reads']], 14, { cols: 1, h: 28, gap: 10, size: 14 }),
    'ふつうは s をつける', MAIN),
  S('s・x・ch・sh・o で終わる語には es をつけます。go → goes、do → does、watch → watches、wash → washes、teach → teaches。',
    pairs([['go', 'goes'], ['do', 'does'], ['watch', 'watches'], ['wash', 'washes'], ['teach', 'teaches']], 10, { cols: 1, h: 24, gap: 7, size: 13, c2: BLUE }),
    's・x・ch・sh・o で終わる → es', BLUE),
  S('子音（しいん）＋y で終わる語は、y を i に変えて es をつけます。study → studies、try → tries、carry → carries。母音（ぼいん）＋y の play と enjoy は、そのまま s で plays、enjoys です。',
    [...pairs([['study', 'studies'], ['try', 'tries'], ['carry', 'carries']], 12, { cols: 1, h: 24, gap: 7, size: 13, c2: BLUE }),
      ...pairs([['play', 'plays'], ['enjoy', 'enjoys']], 106, { cols: 1, h: 24, gap: 7, size: 13, c2: GREEN })],
    '子音+y → ies　母音+y → そのまま s', PURPLE),
  S('have だけは特別で、has になります。Ken has a dog.（ケンは犬を飼っています）。haves とは書きません。',
    [...pairs([['have', 'has']], 20, { cols: 1, h: 36, gap: 10, size: 18, c2: RED }), ...wd([['Ken', GREEN], ['has', RED], ['a dog.', MAIN]], 84, { size: 14, total: 240, x0: 40 }), lb(160, 130, '× haves', 14, C.red, 'middle', true)],
    'have → has（特別）', RED),
  S('まとめです。文を書いたら、①主語は1人・1つか ②そうなら動詞に s がついているか ③ s か es か ies か、を確かめます。My friends plays のように、2人以上に s をつけないよう気をつけます。',
    L([['① 主語は 1人・1つ？', BLUE], ['② そうなら 動詞に s', GREEN], ['③ s・es・ies？　have は has', PURPLE], ['My friends play（2人以上は s なし）', RED]], 8, 30, 6, 13),
    '主語の数を見てから、動詞を書く', GREEN),
], 'he・she のときは s');

// ── 一般動詞③：「〜しません」の文 ──
const f_459 = show([
  S('「〜しません」は、動詞の前に don\'t か doesn\'t を置きます。I don\'t play soccer.（サッカーをしません）、He doesn\'t play soccer.（かれはサッカーをしません）です。',
    [...wd([['I', GREEN], ['don\'t', RED], ['play', MAIN], ['soccer.', MAIN]], 14, { size: 13 }), ...wd([['He', GREEN], ['doesn\'t', RED], ['play', MAIN], ['soccer.', MAIN]], 56, { size: 13 }), lb(160, 110, '動詞の前に don\'t / doesn\'t', 14, C.ink, 'middle', true)],
    '動詞の前に don\'t / doesn\'t', MAIN),
  S('どちらを使うかは主語で決まります。I・you・we・they には don\'t、he・she・it と1人・1つには doesn\'t を使います。don\'t は do not、doesn\'t は does not を短くした形です。',
    [bx(10, 12, 146, 30, 'don\'t', C.blue, FILL.blue, 16), ...wordBoxes(['I', 'you', 'we / they'], 10, 48, 142, BLUE, 24, 13), bx(164, 12, 146, 30, 'doesn\'t', C.red, FILL.red, 16), ...wordBoxes(['he / she / it', 'Ken（1人）', 'the cat（1ぴき）'], 168, 48, 142, RED, 24, 13)],
    '主語で don\'t か doesn\'t を決める', BLUE),
  Q('なぜ doesn\'t のうしろの動詞には s をつけないのでしょう。s の役目は、doesn\'t の中の does がもう引き受けているからです。s は一つの文に一回だけです。',
    'doesn\'t のあとは s なし？', 'He plays soccer.　… s は plays\nHe does not play soccer.\n… s は does が引き受ける\n→ play は もとの形', 's は一つの文に一回だけ', GREEN, 14),
  S('まちがいの例です。He doesn\'t plays soccer. と She doesn\'t studies English. は、s が二重になっています。どちらも、動詞はもとの形の play、study にします。',
    [...wd(cw(['He', 'doesn\'t', 'plays', 'soccer.'], RED), 12, { size: 12 }), lb(160, 50, '× s が二重', 12, C.red, 'middle', true), ...wd([['He', MAIN], ['doesn\'t', MAIN], ['play', GREEN], ['soccer.', MAIN]], 68, { size: 12 }), lb(160, 106, '○', 18, C.green, 'middle', true),
      ...wd(cw(['She', 'doesn\'t', 'studies', 'English.'], RED), 122, { size: 12 })],
    'doesn\'t のうしろは もとの形', RED),
  S('be動詞の文の「〜ではありません」は、be動詞のうしろに not を置きます（I am not a student.）。一般動詞の文に isn\'t は使いません。He isn\'t play soccer. ではなく He doesn\'t play soccer. です。',
    [bx(10, 12, 146, 26, 'be動詞 → not', C.blue, FILL.blue, 13), bx(10, 42, 146, 30, 'He is not a teacher.', C.blue, FILL.blue, 11), bx(164, 12, 146, 26, '一般動詞 → don\'t', C.red, FILL.red, 13), bx(164, 42, 146, 30, 'He doesn\'t play soccer.', C.red, FILL.red, 11),
      ...wd(cw(['He', 'isn\'t', 'play', 'soccer.'], RED), 98, { size: 12 }), lb(160, 138, '× 「です」の否定と「します」の否定を混ぜた', 12, C.red, 'middle', true)],
    '「です」の否定と「します」の否定', BLUE),
  S('have の文では、has にはしません。She doesn\'t have a dog.（かのじょは犬を飼っていません）。doesn\'t のうしろは、いつももとの形の have です。',
    [...wd([['She', GREEN], ['doesn\'t', RED], ['have', MAIN], ['a dog.', MAIN]], 24, { size: 13 }), lb(160, 76, '○', 20, C.green, 'middle', true), ...wd(cw(['She', 'doesn\'t', 'has', 'a dog.'], RED), 98, { size: 13 })],
    'doesn\'t have（has にしない）', GREEN),
  S('答え方にも使います。Do you like dogs? には No, I don\'t.、Does he play tennis? には No, he doesn\'t. と答えます。たずねる文と同じ語を使います。',
    [bx(10, 12, 300, 28, 'Do you like dogs?', C.purple, FILL.purple, 13), ar(160, 42, 160, 54, C.purple), bx(10, 56, 300, 28, 'No, I don\'t.', C.green, FILL.green, 13),
      bx(10, 98, 300, 28, 'Does he play tennis?', C.purple, FILL.purple, 13), ar(160, 128, 160, 138, C.purple), bx(10, 140, 300, 24, 'No, he doesn\'t.', C.green, FILL.green, 12)],
    'セットで覚える', GREEN),
  S('まとめです。①動詞の前に don\'t か doesn\'t。②I・you・we・they は don\'t、he・she・it は doesn\'t。③doesn\'t のうしろは、s なしのもとの形。④一般動詞の文に isn\'t は使わない。',
    L([['① 動詞の前に don\'t / doesn\'t', BLUE], ['② 主語が1人・1つ → doesn\'t、それ以外 → don\'t', GREEN], ['③ doesn\'t のうしろは もとの形', RED], ['④ isn\'t は 一般動詞に使わない', PURPLE]], 8, 30, 6, 12),
    'I\'m not と I don\'t はちがう', GREEN),
], '「〜しません」の文');

// ── 一般動詞④：「〜しますか」とたずねる文 ──
const f_460 = show([
  S('「〜しますか」とたずねるときは、文の先頭に Do か Does を置きます。Do you like dogs?（犬が好きですか）、Does he like dogs?（かれは犬が好きですか）です。',
    [...wd([['Do', RED], ['you', GREEN], ['like', MAIN], ['dogs?', MAIN]], 14, { size: 13 }), ...wd([['Does', RED], ['he', GREEN], ['like', MAIN], ['dogs?', MAIN]], 56, { size: 13 }), lb(160, 108, '先頭に Do（Does）、最後に ?', 14, C.ink, 'middle', true)],
    'Do（Does）＋主語＋動詞 ?', MAIN),
  S('Do と Does の使い分けは、主語で決まります。I・you・we・they には Do、he・she・it と 1人・1つには Does です。',
    [bx(10, 12, 146, 30, 'Do', C.blue, FILL.blue, 18), ...wordBoxes(['I / you', 'we / they', 'Do they play baseball?'], 10, 48, 142, BLUE, 26, 12), bx(164, 12, 146, 30, 'Does', C.red, FILL.red, 18), ...wordBoxes(['he / she / it', 'Ken（1人）', 'Does your sister play?'], 168, 48, 142, RED, 26, 12)],
    '主語で Do か Does', BLUE),
  Qt('なぜ一般動詞の文では、Do を先頭に置くのでしょう。be動詞は文の先頭に出せば質問になりますが、一般動詞は先頭に出せません。そこで「これからたずねます」という合図の Do を置きます。',
    'Do を先頭に置くの？',
    [...wd([['You are', MAIN], ['a student.', MAIN]], 58, { total: 150, size: 12 }), ar(163, 72, 175, 72, C.main), ...wd([['Are', RED], ['you', MAIN], ['a student?', MAIN]], 58, { x0: 180, total: 130, size: 11 }),
      lb(80, 100, 'be動詞は 前に出せる', 11, C.blue, 'middle', true), ...wd([['You like dogs.', MAIN]], 114, { total: 130, size: 12 }), ar(143, 128, 160, 128, C.main), ...wd([['Do', RED], ['you like dogs?', MAIN]], 114, { x0: 164, total: 146, size: 11 }),
      lb(80, 156, '一般動詞は 合図の Do を置く', 11, C.red, 'middle', true)],
    '一般動詞 → 合図の Do', GREEN),
  Q('では、Does のうしろの動詞に、なぜ s をつけないのでしょう。s の役目を Does が引き受けているからです。Does he likes dogs? は、s が二重になっているのでまちがいです。',
    'Does のあとは s なし？', 'Does he like dogs?\ns の役目は Does が引き受ける\n→ 動詞は もとの形 like\n× Does he likes dogs?', 'Does を書いたら 動詞はもとの形', GREEN, 14),
  S('答え方です。Do で聞かれたら do、Does で聞かれたら does で答えます。Do you like dogs? には Yes, I do. か No, I don\'t.。Does he like dogs? には Yes, he does. か No, he doesn\'t. です。',
    tab([['たずねる文', 'Yes', 'No'], ['Do you like dogs?', 'Yes, I do.', 'No, I don\'t.'], ['Do they like dogs?', 'Yes, they do.', 'No, they don\'t.'], ['Does he like dogs?', 'Yes, he does.', 'No, he doesn\'t.']], 12, [112, 94, 94], 32, 11),
    'Do → do　Does → does', BLUE),
  Qt('なぜ答えでも、質問と同じ語を使うのでしょう。答えは、質問の動詞をくり返しているからです。Yes, I do. の do は「Yes, I like dogs.」の like dogs の代わりです。Are you ～? なら am、Do ～? なら do です。',
    '答えの語をそろえるの？',
    [bx(10, 58, 300, 28, 'Do you like music?', C.purple, FILL.purple, 13), bx(10, 94, 300, 28, 'Yes, I do.　＝　Yes, I (like music).', C.green, FILL.green, 12), bx(10, 130, 300, 26, '× Yes, I am.（くり返しの語がちがう）', C.red, FILL.red, 12)],
    '質問の語をくり返して答える'),
  S('答えるときは、名前を he・she・they に変えます。Does Ken like soccer? → Yes, he does.、Do Ken and Mary study English? → Yes, they do. です。「犬とねこ、どちらが好き」のように or で聞かれたら、Yes / No ではなく I like dogs. と答えます。',
    [bx(10, 10, 300, 26, 'Does Ken like soccer?', C.purple, FILL.purple, 12), bx(10, 40, 300, 26, 'Yes, he does.', C.green, FILL.green, 12), bx(10, 76, 300, 26, 'Do you like dogs or cats?', C.purple, FILL.purple, 12), bx(10, 106, 300, 26, 'I like dogs.（Yes / No は使わない）', C.green, FILL.green, 12)],
    '名前 → he / she / they', GREEN),
  S('まとめです。①先頭に Do か Does、最後に ?。②Does のうしろは、もとの形。③答えは質問の語をそろえる。④ Are や Is は一般動詞の文には使わない。',
    L([['① Do（Does）＋主語＋動詞 ?', BLUE], ['② Does のうしろは もとの形', GREEN], ['③ 答えは Do → do、Does → does', PURPLE], ['④ 一般動詞に Are / Is は ×', RED]], 8, 30, 6, 13),
    'Does he likes ～ ? がいちばん多いまちがい', GREEN),
], '「〜しますか」とたずねる文');

// ── 命令する文・さそう文 ──
const f_461 = show([
  S('命令する文（めいれいするぶん）は、主語を書かず、動詞から始めます。Stand up.（立ちなさい）、Sit down.（すわりなさい）、Open your book.（本を開きなさい）です。',
    [...wd([['Stand', RED], ['up.', MAIN]], 12, { total: 160, size: 14 }), lb(260, 26, '立ちなさい', 12, C.ink, 'middle'), ...wd([['Sit', RED], ['down.', MAIN]], 50, { total: 160, size: 14 }), lb(260, 64, 'すわりなさい', 12, C.ink, 'middle'),
      ...wd([['Open', RED], ['your book.', MAIN]], 88, { total: 200, size: 14 }), lb(160, 138, '動詞から始まる → 命令する文', 14, C.red, 'middle', true)],
    '動詞から始まる文 ＝ 命令する文', MAIN),
  Q('では、なぜ命令する文には主語がないのでしょう。目の前の相手（you）に向かって言うので、だれに言っているかは分かりきっているからです。You open the window.（あなたは開けます）はふつうの文、Open the window. が命令する文です。',
    '主語を書かないの？', '目の前の you に言う\n→ だれに言うかは分かっている\n→ 主語を書かない\nOpen the window.', '動詞は もとの形で始める', GREEN, 14),
  S('「〜しないで」は、動詞の前に Don\'t を置きます。Don\'t run.（走らないで）、Don\'t talk.（話さないで）。Don\'t のあとの動詞も、もとの形です。',
    [...wd([['Don\'t', RED], ['run.', MAIN]], 14, { total: 160, size: 14 }), lb(250, 28, '走らないで', 12, C.ink, 'middle'), ...wd([['Don\'t', RED], ['talk.', MAIN]], 52, { total: 160, size: 14 }), lb(250, 66, '話さないで', 12, C.ink, 'middle'),
      ...wd([['Don\'t', RED], ['be late.', MAIN]], 90, { total: 180, size: 14 }), lb(260, 104, 'おくれないで', 12, C.ink, 'middle')],
    'Don\'t ＋ もとの形', RED),
  S('ていねいに言うときは please をつけます。Please open the window. でも Open the window, please. でも、同じ意味です。ていねいさの順は、Open the window. → Please open the window. → Can you open the window? です。',
    [bx(30, 12, 260, 30, 'Open the window.　（開けて）', C.main, FILL.warm, 13), ar(160, 44, 160, 56, C.main), bx(30, 58, 260, 30, 'Please open the window.', C.blue, FILL.blue, 13), ar(160, 90, 160, 102, C.main), bx(30, 104, 260, 30, 'Can you open the window?', C.green, FILL.green, 13), lb(160, 150, '下へ行くほど ていねい', 12, C.red, 'middle', true)],
    '下にいくほど ていねい', BLUE),
  Qt('「静かにしなさい」は、なぜ Be quiet. なのでしょう。命令する文は動詞がもとの形になります。be動詞のもとの形は be です。am・is・are は主語に合わせて変わった形なので、主語のない命令文には使いません。',
    'Are quiet. ではないの？',
    [...wd([['Be', GREEN], ['quiet.', MAIN]], 58, { total: 150, size: 14 }), lb(85, 100, '○', 18, C.green, 'middle', true), ...wd(cw(['Are', 'quiet.'], RED), 58, { x0: 170, total: 140, size: 14 }), lb(240, 100, '×', 18, C.red, 'middle', true),
      bx(40, 118, 240, 34, 'be のもとの形は be\nBe careful.　Be kind to others.', C.blue, FILL.blue, 12)],
    'be動詞の命令文は Be から'),
  Qt('さそう文の Let\'s のあとは、なぜ動詞のもとの形なのでしょう。Let\'s は Let us（私たちに〜させて）を短くした形で、let のあとにはもとの形を置く決まりだからです。Let\'s to play や Let\'s playing は誤りです。',
    'Let\'s のあとは もとの形？',
    [...wd([['Let\'s', BLUE], ['play', GREEN], ['soccer.', MAIN]], 58, { size: 14 }), lb(160, 98, 'Let\'s ＝ Let us', 13, C.ink, 'middle', true), ...wd(cw(['Let\'s', 'to', 'play'], RED), 116, { total: 130, size: 12 }), ...wd(cw(['Let\'s', 'playing'], RED), 116, { x0: 180, total: 130, size: 12 }), lb(160, 154, '× to や -ing は つけない', 12, C.red, 'middle', true)],
    'Let\'s ＋ もとの形'),
  S('さそわれたときの答え方です。Yes, let\'s.（そうしよう）、Sounds good.（いいね）、Sorry, I can\'t.（ごめん、できない）。教室では Raise your hand.（手をあげて）、Repeat after me.（あとについて言って）なども使います。',
    [bx(10, 10, 300, 28, 'Let\'s play soccer.', C.purple, FILL.purple, 14), ...L([['Yes, let\'s.　（そうしよう）', GREEN], ['Sounds good.　（いいね）', GREEN], ['Sorry, I can\'t.　（ごめん、できない）', RED]], 44, 24, 5, 12), lb(160, 150, 'Raise your hand.　Repeat after me.', 12, C.ink, 'middle')],
    'さそわれたら 返事をする', GREEN),
  S('まとめです。①命令する文は主語なしで、動詞のもとの形から始める。②Don\'t ＋ もとの形。③be動詞は Be。④Let\'s のあとも もとの形。',
    L([['① 動詞のもとの形から始める（You は書かない）', BLUE], ['② Don\'t ＋ もとの形', RED], ['③ be動詞は Be（Be quiet.）', GREEN], ['④ Let\'s ＋ もとの形', PURPLE]], 8, 30, 6, 12),
    '動詞から始まったら 命令する文', GREEN),
], '命令する文・さそう文');

// ── 場所を表す語：in・on・under・by・near ──
const f_462 = show([
  S('場所を表す語を、絵で覚えます。The cat is in the box.（はこの中）、The book is on the desk.（つくえの上）、The ball is under the chair.（いすの下）。まず in・on・under の3つです。',
    [bx(14, 40, 80, 50, '', C.main, FILL.warm), ci(54, 66, 11, 'cat', C.red, FILL.red, 9), lb(54, 108, 'in the box', 12, C.ink, 'middle', true),
      ln(118, 80, 204, 80, C.main, false, 3), ci(160, 66, 11, 'book', C.blue, FILL.blue, 8), lb(161, 108, 'on the desk', 12, C.ink, 'middle', true),
      ln(226, 56, 306, 56, C.main, false, 3), ln(232, 56, 232, 92, C.main, false, 2), ln(300, 56, 300, 92, C.main, false, 2), ci(266, 80, 11, 'ball', C.green, FILL.green, 8), lb(266, 108, 'under the chair', 11, C.ink, 'middle', true)],
    'in ＝ 中　on ＝ 上　under ＝ 下', MAIN),
  S('in は「〜の中に」です。in the box・in the bag・in the room・in Japan。The cat is in the box.（ねこははこの中にいます）。',
    [bx(30, 20, 120, 80, '', C.main, FILL.warm), ci(90, 66, 14, 'cat', C.red, FILL.red, 10), ...wordBoxes(['in the box', 'in the bag', 'in the room', 'in Japan'], 176, 14, 134, BLUE, 24, 12), lb(90, 118, 'The cat is in the box.', 12, C.ink, 'middle', true)],
    'in ＝ 〜の中に', BLUE),
  Qt('かべや天じょうは、なぜ in ではなく on なのでしょう。on は「面にくっついている」ときに使うからです。かべのポスターも、天じょうの電気も、くっついているので on です。',
    'かべや天じょうも on？',
    [ln(40, 58, 40, 146, C.main, false, 3), bx(40, 80, 30, 36, '', C.blue, FILL.blue), lb(84, 98, 'on the wall', 12, C.ink, 'start', true), ln(150, 60, 306, 60, C.main, false, 3), ci(228, 74, 11, 'light', C.red, FILL.red, 8), lb(228, 104, 'on the ceiling', 12, C.ink, 'middle', true),
      ln(140, 146, 306, 146, C.main, false, 3), ci(160, 133, 10, 'book', C.green, FILL.green, 8), lb(240, 130, 'on the desk', 12, C.ink, 'middle', true)],
    'くっついている面 → on'),
  S('under は「〜の下に」です。The ball is under the chair.（ボールはいすの下にあります）、under the tree（木の下に）。',
    [ln(30, 40, 120, 40, C.main, false, 3), ln(36, 40, 36, 90, C.main, false, 2), ln(114, 40, 114, 90, C.main, false, 2), ci(75, 78, 11, 'ball', C.green, FILL.green, 8),
      ci(236, 40, 26, 'tree', C.green, FILL.green, 10), ln(236, 66, 236, 100, C.main, false, 4), ci(210, 90, 9, 'cat', C.red, FILL.red, 8), ...wordBoxes(['under the chair', 'under the tree'], 20, 108, 120, GREEN, 22, 12).slice(0, 1), bx(186, 108, 120, 22, 'under the tree', C.green, FILL.green, 12)],
    'under ＝ 〜の下に', GREEN),
  S('by と near は「〜のそばに」です。by the window（まどのそばに）のほうが近く、near the station（駅の近くに）は少しはなれていてもよい言い方です。',
    [bx(20, 30, 50, 60, 'window', C.blue, FILL.blue, 9), ci(94, 70, 11, 'me', C.red, FILL.red, 9), lb(70, 118, 'by the window\n（すぐそば）', 11, C.ink, 'middle', true),
      bx(190, 30, 50, 60, 'station', C.blue, FILL.blue, 9), ci(290, 70, 11, 'me', C.red, FILL.red, 9), ln(246, 70, 276, 70, C.gray, true), lb(250, 118, 'near the station\n（少しはなれて）', 11, C.ink, 'middle', true)],
    'by ＝ すぐそば　near ＝ 近く', MAIN),
  S('そのほかの語です。in front of（〜の前に）、behind（〜のうしろに）、between（〜の間に）、next to（〜のとなりに）、over（〜の上のほうに）。',
    L([['in front of the school　（学校の前に）', BLUE], ['behind the door　（ドアのうしろに）', BLUE], ['between the chair and the desk　（間に）', GREEN], ['next to the post office　（となりに）', GREEN], ['over the table　（はなれた上のほうに）', PURPLE]], 8, 24, 5, 12),
    '位置を表す語は 場所の絵で覚える', MAIN),
  Q('「つくえの上」を in the desk と書くと、どうなるのでしょう。in は「中」なので、in the desk は「つくえの引き出しの中」になります。表面にのっているなら on the desk です。',
    'in the desk ではだめ？', 'in the desk ＝ つくえの 引き出しの中\non the desk ＝ つくえの 上（表面）\n→ のっているなら on', '表面にのっているなら on', RED, 14),
  S('in と on は、時にも使います。on Monday（月曜日に）、on May 5th（5月5日に）、in May（5月に）、in summer（夏に）、in 2026（2026年に）。バスに乗って行くときは by bus です。',
    [bx(10, 12, 146, 26, 'on：曜日・日付', C.blue, FILL.blue, 13), ...wordBoxes(['on Monday', 'on May 5th'], 10, 42, 142, BLUE, 24, 12), bx(164, 12, 146, 26, 'in：月・季節・年', C.green, FILL.green, 13), ...wordBoxes(['in May', 'in summer', 'in 2026'], 168, 42, 142, GREEN, 22, 12),
      bx(40, 124, 240, 28, 'by bus（乗り物の手段は by）', C.main, FILL.warm, 13)],
    '場所のことばは 時にも使う', BLUE),
  S('まとめです。in は中、on はくっついた面、under は下です。by はすぐそば、near は近く。かべは on、つくえの上も on です。',
    L([['in ＝ 中　　on ＝ くっついた面　　under ＝ 下', BLUE], ['by ＝ すぐそば　　near ＝ 近く', GREEN], ['かべ・天じょう・つくえの上 ＝ on', PURPLE]], 14, 34, 10, 12),
    'まずは in・on・under を確実に', GREEN),
], '場所を表す語');

// ── 時を表す語：at・on・in ──
const f_463 = show([
  S('「〜に」を表す at・on・in は、時の長さで使い分けます。時こくは at、日（曜日・日付）は on、月・季節・年は in です。せまい順に at → on → in と覚えます。',
    [bx(10, 8, 300, 156, '', C.green, FILL.green), lb(24, 24, 'in　月・季節・年', 13, C.green, 'start', true), bx(40, 38, 240, 110, '', C.blue, FILL.blue), lb(54, 54, 'on　日（曜日・日付）', 13, C.blue, 'start', true), bx(80, 70, 160, 62, 'at\n時こく', C.red, FILL.red, 16)],
    'at ＜ on ＜ in（せまい順）', MAIN),
  Q('では、なぜ「せまい順に at・on・in」なのでしょう。at・on・in は、場所を表す意味がそのまま時にも使われているからです。at は一点、on は面、in は中。時こくは「点」、日は「面」、月や季節は「中に入っている広がり」にあたります。',
    'なぜ at・on・in の順？', '場所：at 一点 → on 面 → in 中\n時　：時こく（点）→ 日（面）→ 月・年（中）\n→ 点 → 面 → 中 の順\n→ せまい順に at・on・in', '点 → 面 → 中', GREEN, 13),
  S('場所の例です。at the station（駅で。一点）、on the desk（つくえの上に。面）、in the room（部屋の中に。空間）。時の使い分けも、これと同じ考え方です。',
    [bx(10, 14, 94, 56, 'at the station\n（一点）', C.red, FILL.red, 11), bx(113, 14, 94, 56, 'on the desk\n（面）', C.blue, FILL.blue, 11), bx(216, 14, 94, 56, 'in the room\n（中）', C.green, FILL.green, 11),
      lb(160, 100, '時でも 同じ順', 14, C.ink, 'middle', true), ...cells(['at seven', 'on Monday', 'in May'], 116, MAIN, 12, 28, 6)],
    '場所も時も「点 → 面 → 中」', BLUE),
  S('時の例です。at seven（7時に）・at eight thirty・at noon、on Monday・on May 5th・on my birthday、in May・in summer・in 2026・in the morning です。',
    [bx(10, 8, 94, 24, 'at', C.red, FILL.red, 14), ...wordBoxes(['at seven', 'at eight thirty', 'at noon'], 10, 36, 94, RED, 24, 11), bx(113, 8, 94, 24, 'on', C.blue, FILL.blue, 14), ...wordBoxes(['on Monday', 'on May 5th', 'on my birthday'], 113, 36, 94, BLUE, 24, 11),
      bx(216, 8, 94, 24, 'in', C.green, FILL.green, 14), ...wordBoxes(['in May', 'in summer', 'in 2026'], 216, 36, 94, GREEN, 24, 11)],
    'at ＝ 時こく　on ＝ 日　in ＝ 月から上', MAIN),
  S('決まった言い方もあります。in the morning（午前中に）、in the afternoon（午後に）、in the evening（夕方に）ですが、夜だけは at night です。曜日がつくと on になり、on Monday morning（月曜日の朝に）と言います。',
    [...wordBoxes(['in the morning', 'in the afternoon', 'in the evening'], 10, 12, 140, GREEN, 26, 12), bx(164, 12, 146, 26, 'at night（夜だけ at）', C.red, FILL.red, 12), bx(164, 44, 146, 26, 'on Monday morning', C.blue, FILL.blue, 12), lb(160, 130, '日が決まると on が勝つ', 13, C.ink, 'middle', true)],
    '夜だけ at　日が決まると on', RED),
  Qt('every day に、なぜ at・on・in をつけないのでしょう。every day・today・tomorrow・yesterday・this morning・next week は、それ自体で「いつ」を表すことばだからです。in every day は誤りです。',
    'every day に前置詞は？',
    [...cells(['every day', 'today', 'tomorrow'], 56, MAIN, 12, 28, 6), ...cells(['yesterday', 'this morning', 'next week'], 90, MAIN, 11, 28, 6), bx(40, 126, 240, 28, '× in every day　○ every day', C.red, FILL.red, 13)],
    'それ自体で「いつ」→ 前置詞なし'),
  S('練習です。I go to bed （ ） nine. → at。We have a party （ ） Sunday. → on。It snows （ ） winter. → in。School starts （ ） April. → in。I eat lunch （ ） twelve. → at。',
    tab([['文', '答え'], ['I go to bed ( ) nine.', 'at'], ['We have a party ( ) Sunday.', 'on'], ['It snows ( ) winter.', 'in'], ['School starts ( ) April.', 'in'], ['I eat lunch ( ) twelve.', 'at']], 8, [220, 80], 26, 12),
    '時こくか、日か、月かを 先に決める', GREEN),
  S('まとめです。①時こくは at。②曜日・日付は on。③月・季節・年は in。④夜は at night、朝・午後は in the ～。⑤every day には何もつけない。',
    L([['① at ＝ 時こく　② on ＝ 曜日・日付', BLUE], ['③ in ＝ 月・季節・年', GREEN], ['④ at night　in the morning', PURPLE], ['⑤ every day には 何もつけない', RED]], 8, 30, 6, 13),
    '点 → 面 → 中 ＝ at → on → in', GREEN),
], 'at・on・in（時）');

// ── たずねる言葉：what・where・when・who・how ──
const f_464 = show([
  S('たずねる言葉は5つです。what（何）、where（どこ）、when（いつ）、who（だれ）、how（どのように）。この5つで、知りたいことのほとんどをたずねられます。',
    [...cells(['what\n何', 'where\nどこ', 'when\nいつ'], 14, MAIN, 14, 50, 8), ...cells(['who\nだれ', 'how\nどのように'], 76, RED, 14, 50, 8, 60, 200), lb(160, 144, '知りたいことを 先頭に置く', 13, C.red, 'middle', true)],
    '5つのたずねる言葉', MAIN),
  Q('なぜ、たずねる言葉は文の先頭に来るのでしょう。what・where などは「知りたいことそのもの」だからです。いちばん知りたいことを先に言い、そのあとにふつうのたずねる文（do you like など）を続けます。',
    'たずねる言葉は先頭？', '知りたいこと ＝ 先頭に置く\nたずねる言葉 ＋ ふつうのたずねる文\nWhat ＋ do you like?\nWhere ＋ does he live?', 'Does のあとは もとの形', GREEN, 14),
  S('what・where・when の例です。What is this? — It\'s a pen.、Where do you live? — I live in Tokyo.、When is your birthday? — It\'s May 5th. 答えはたずねられた中身を言います。',
    [bx(10, 8, 148, 26, 'What is this?', C.purple, FILL.purple, 12), bx(164, 8, 146, 26, 'It\'s a pen.', C.green, FILL.green, 12), bx(10, 44, 148, 26, 'Where do you live?', C.purple, FILL.purple, 12), bx(164, 44, 146, 26, 'I live in Tokyo.', C.green, FILL.green, 12), bx(10, 80, 148, 26, 'When is your birthday?', C.purple, FILL.purple, 11), bx(164, 80, 146, 26, 'It\'s May 5th.', C.green, FILL.green, 12)],
    '何・どこ・いつ', BLUE),
  S('who と how の例です。Who is that boy? — He is my brother.、How are you? — I\'m fine, thank you.、How do you go to school? — By bus.',
    [bx(10, 8, 148, 26, 'Who is that boy?', C.purple, FILL.purple, 12), bx(164, 8, 146, 26, 'He is my brother.', C.green, FILL.green, 12), bx(10, 44, 148, 26, 'How are you?', C.purple, FILL.purple, 12), bx(164, 44, 146, 26, 'I\'m fine, thank you.', C.green, FILL.green, 11), bx(10, 80, 148, 26, 'How do you go to school?', C.purple, FILL.purple, 10), bx(164, 80, 146, 26, 'By bus.', C.green, FILL.green, 12)],
    'だれ・どのように', BLUE),
  Q('なぜ、Where do you live? に Yes, I do. と答えてはいけないのでしょう。この質問は「はい・いいえ」ではなく、中身（どこか）を聞いているからです。Yes / No で答えるのは Do や Are で始まる質問だけです。',
    'Yes / No で答えないの？', 'Where do you live?\n× Yes, I do.（どこかが伝わらない）\n○ I live in Osaka.\nYes / No で答えるのは Do・Are で始まる質問', '中身を聞かれたら 中身を答える', RED, 13),
  S('how は、ことばを足して内容をくわしくします。How old（何才）、How many（いくつ。数えられるもの）、How much（いくら）、How long（どれくらい長い）、How tall（どれくらい高い）です。How many のあとは複数形にします。',
    tab([['How ～', '意味'], ['How old', '何才'], ['How many books', 'いくつ（複数形）'], ['How much', 'いくら（お金・量）'], ['How long', 'どれくらい長い'], ['How tall', 'どれくらい高い']], 8, [140, 160], 26, 12),
    'how ＋ ことば で くわしく', BLUE),
  Qt('職業（しょくぎょう）をたずねるとき、なぜ Who ではなく What を使うのでしょう。What は「何（をする人）か」を聞くことば、Who は「どの人か」を聞くことばだからです。',
    '職業は What？',
    [bx(10, 56, 300, 28, 'What is your father? — He is a doctor.', C.green, FILL.green, 12), lb(160, 98, '→ お父さんの仕事は何？', 12, C.green, 'middle', true), bx(10, 112, 300, 28, 'Who is your father? — That man.', C.blue, FILL.blue, 12), lb(160, 152, '→ どの人がお父さん？', 12, C.blue, 'middle', true)],
    '仕事 → What　どの人 → Who'),
  S('答えから質問を作る練習です。I go to school by bike. の質問は How do you go to school?。My birthday is in August. の質問は When is your birthday? です。答えの中身から、たずねる言葉を選びます。',
    [bx(10, 12, 300, 26, 'I go to school by bike.', C.green, FILL.green, 13), ar(160, 40, 160, 52, C.main), bx(10, 54, 300, 26, 'How do you go to school?', C.purple, FILL.purple, 13),
      bx(10, 92, 300, 26, 'My birthday is in August.', C.green, FILL.green, 13), ar(160, 120, 160, 132, C.main), bx(10, 134, 300, 26, 'When is your birthday?', C.purple, FILL.purple, 13)],
    '答えの中身 → たずねる言葉', GREEN),
  S('まとめです。①知りたいことを先頭に。②うしろはふつうのたずねる文。③中身を答える（Yes / No ではない）。④How many のあとは複数形。⑤職業は What。',
    L([['① 知りたいこと → 先頭（what・where・when・who・how）', BLUE], ['② うしろは ふつうのたずねる文', GREEN], ['③ 中身を答える（Yes / No ×）', RED], ['④ How many ＋ 複数形　職業は What', PURPLE]], 8, 30, 6, 11),
    '5つの言葉で たいていの質問ができる', GREEN),
], 'たずねる言葉');

// ── 語彙①：まちの中の建物と場所 ──
const f_465 = show([
  S('まちの建物と場所を、英語で覚えます。school・library・park・station・post office・bank・hospital・zoo など。場所の名前と「そこで何をするか」を対にして覚えると、会話でも使えます。',
    [...cells(['school', 'library', 'park'], 12, GREEN, 13, 40, 8), ...cells(['station', 'post office', 'bank'], 60, BLUE, 12, 40, 8), ...cells(['hospital', 'zoo', 'bakery'], 108, MAIN, 13, 40, 8)],
    'まちの建物と場所', MAIN),
  S('学校・勉強に関係する場所と、買い物の場所です。school（学校）・classroom（教室）・library（図書館）・gym（体育館）・playground（運動場）、supermarket（スーパー）・bookstore（書店）・bakery（パン屋）・department store（デパート）。',
    [bx(10, 8, 146, 24, '学校・勉強', C.green, FILL.green, 13), ...wordBoxes(['school', 'classroom', 'library', 'gym', 'playground'], 10, 36, 142, GREEN, 20, 11, 3), bx(164, 8, 146, 24, '買い物', C.blue, FILL.blue, 13), ...wordBoxes(['supermarket', 'bookstore', 'bakery', 'department store', 'flower shop'], 168, 36, 142, BLUE, 20, 11, 3)],
    '学校の場所 と 買い物の場所', GREEN),
  S('公共の場所と、楽しむ場所です。station（駅）・post office（郵便局）・bank（銀行）・hospital（病院）・police station（けいさつ署）・city hall（市役所）、park（公園）・zoo（動物園）・aquarium（水族館）・museum（博物館）・restaurant・movie theater（映画館）。',
    [bx(10, 8, 146, 24, '公共の場所', C.red, FILL.red, 13), ...wordBoxes(['station', 'post office', 'bank', 'hospital', 'city hall'], 10, 36, 142, RED, 20, 11, 3), bx(164, 8, 146, 24, '楽しむ場所', C.purple, FILL.purple, 13), ...wordBoxes(['park', 'zoo', 'aquarium', 'museum', 'movie theater'], 168, 36, 142, PURPLE, 20, 11, 3)],
    '公共の場所 と 楽しむ場所', RED),
  S('「そこで何をするか」と対にして覚えます。I study at school.、I read books in the library.、I buy food at the supermarket.、I see animals at the zoo.、I take a train at the station.',
    L([['school ─ I study at school.', GREEN], ['library ─ I read books in the library.', GREEN], ['supermarket ─ I buy food at the supermarket.', BLUE], ['zoo ─ I see animals at the zoo.', PURPLE], ['station ─ I take a train at the station.', RED]], 8, 24, 5, 11),
    '場所 ＋ そこでする動作', MAIN),
  Q('go to school には the がなく、go to the park には the があります。なぜでしょう。学校のように「そこで活動する場所」は、建物ではなく活動を表すので、the をつけないことが多いからです。公園は建物・場所そのものなので the をつけます。',
    'school には the がない？', 'go to school ＝ 勉強しに行く（活動）\ngo to the park ＝ 公園という場所へ\n→ 活動する場所は the なしが多い\n※ go home は to なし', 'go to school / go to the park', BLUE, 13),
  Qt('go home に、なぜ to をつけないのでしょう。home は「家へ」の意味をすでにもっているからです。go there（そこへ行く）、come here（ここへ来る）も同じで、to をつけません。',
    'go home に to は？',
    [...wd([['I', GREEN], ['go', RED], ['home.', MAIN]], 56, { size: 14, total: 160, x0: 10 }), lb(250, 70, '○', 20, C.green, 'middle', true), ...wd(cw(['I', 'go', 'to home.'], RED), 100, { size: 14, total: 160, x0: 10 }), lb(250, 114, '×', 20, C.red, 'middle', true), lb(160, 150, 'go there　come here も to なし', 12, C.ink, 'middle', true)],
    'home・there・here には to なし'),
  S('2語で書く建物名があります。post office・police station・fire station・convenience store・department store・movie theater・city hall。間を1語分あけて書きます。',
    [...wordBoxes(['post office', 'police station', 'fire station', 'city hall'], 10, 12, 142, MAIN, 28, 12, 6), ...wordBoxes(['convenience store', 'department store', 'movie theater'], 168, 12, 142, MAIN, 28, 12, 6), lb(160, 154, 'postoffice と つなげて書かない', 12, C.red, 'middle', true)],
    '2語の建物は 間をあける', MAIN),
  S('まとめです。①場所の名前と「そこですること」を対にして覚える。②go to school / go to the park、③go home には to なし。④2語の建物名は間をあける。',
    L([['① 場所 ＋ そこでする動作', BLUE], ['② go to ＋ 場所（school は the なし）', GREEN], ['③ go home（to なし）', PURPLE], ['④ post office など 2語は間をあける', RED]], 8, 30, 6, 13),
    '場所の名前は 動作とセット', GREEN),
], 'まちの建物と場所');

// ── 語彙②：スポーツと楽器 ──
const f_466 = show([
  S('play のあとに the がつくのは、楽器です。play the piano のように、楽器には the をつけます。スポーツには the をつけず、play soccer と言います。',
    [bx(10, 12, 146, 30, 'スポーツ：the なし', C.red, FILL.red, 13), ...wordBoxes(['play soccer', 'play baseball', 'play tennis'], 10, 48, 142, RED, 26, 13, 6), bx(164, 12, 146, 30, '楽器：the あり', C.green, FILL.green, 13), ...wordBoxes(['play the piano', 'play the guitar', 'play the violin'], 168, 48, 142, GREEN, 26, 12, 6)],
    'スポーツは the なし、楽器は the あり', MAIN),
  S('play を使うスポーツです。soccer・baseball・tennis・basketball・volleyball・badminton・table tennis。どれも the はつけません。',
    [...wordBoxes(['play soccer', 'play baseball', 'play tennis', 'play basketball'], 10, 12, 142, RED, 26, 13, 6), ...wordBoxes(['play volleyball', 'play badminton', 'play table tennis'], 168, 12, 142, RED, 26, 12, 6)],
    'play ＋ スポーツ名（the なし）', RED),
  S('play を使う楽器です。the piano・the guitar・the violin・the recorder・the drums・the flute。楽器には the をつけます。',
    [...wordBoxes(['play the piano', 'play the guitar', 'play the violin'], 10, 12, 142, GREEN, 26, 13, 6), ...wordBoxes(['play the recorder', 'play the drums', 'play the flute'], 168, 12, 142, GREEN, 26, 12, 6)],
    'play the ＋ 楽器名', GREEN),
  Q('では、なぜ楽器には the がつき、スポーツにはつかないのでしょう。楽器は「ピアノという種類の楽器そのもの」を指して「その楽器をひく」と言う習慣があるからです。スポーツは「サッカーという活動をする」ので、活動の名前に冠詞（かんし）はつけません。理屈より、長い習慣で決まった形なので、一点で覚えます。',
    'なぜ the の有無がちがう？', '楽器 ＝ その楽器そのものを指す → the\nスポーツ ＝ 活動の名前 → the なし\n長い習慣で決まった形\n→ 「楽器は the あり」と覚える', '一点だけ覚える', BLUE, 13),
  S('swim・run・ski・skate には play を使いません。I swim in summer.、I run every morning. のように、動作そのものが動詞だからです。日本の武道（柔道・空手）は do を使います。do judo、do karate。',
    [bx(10, 12, 146, 26, 'play をつけない', C.red, FILL.red, 13), ...wordBoxes(['I swim in summer.', 'I run every morning.', 'I ski.'], 10, 42, 142, RED, 26, 11, 6), bx(164, 12, 146, 26, 'do を使う', C.green, FILL.green, 13), ...wordBoxes(['do judo', 'do karate', 'do kendo'], 168, 42, 142, GREEN, 26, 13, 6), lb(160, 140, '× play swimming', 13, C.red, 'middle', true)],
    '動作そのものが動詞なら play は不要', RED),
  S('「好き」「得意」の言い方です。I like soccer.、I like playing the piano.、I am good at tennis.、I can play the piano. たずねるときは Do you play any sports? や What sport do you like? です。',
    [...L([['I like soccer.　（好き）', MAIN], ['I am good at tennis.　（得意）', MAIN], ['I can play the piano.　（ひける）', MAIN]], 10, 26, 6, 12), bx(10, 108, 300, 24, 'Do you play any sports? — Yes, I play soccer.', C.purple, FILL.purple, 11), bx(10, 136, 300, 24, 'What sport do you like? — I like basketball.', C.purple, FILL.purple, 11)],
    '好き・得意・できる', BLUE),
  S('「見る」「選手」の言い方です。play soccer（する）、watch soccer（見る）、a soccer game（試合）、a soccer player（選手）。決まった言い方として、watch TV は the なし、listen to the radio は the ありです。',
    L([['play soccer　（サッカーをする）', GREEN], ['watch soccer　（サッカーを見る）', BLUE], ['a soccer game　a soccer player', MAIN], ['watch TV（the なし）　listen to the radio（the あり）', PURPLE]], 8, 28, 6, 12),
    '決まった言い方は 形ごと覚える', MAIN),
  S('まとめです。①楽器は play the ○○、スポーツは play ○○。②swim・run には play を使わない。③武道は do。④watch TV と listen to the radio は決まった言い方。',
    L([['① 楽器 play the ○○　スポーツ play ○○', BLUE], ['② swim・run・ski に play は×', RED], ['③ 武道は do（do judo）', GREEN], ['④ watch TV / listen to the radio', PURPLE]], 8, 30, 6, 12),
    '楽器は the あり、スポーツは the なし', GREEN),
], 'スポーツと楽器');

// ── 語彙③：季節と行事 ──
const f_467 = show([
  S('英語の一年は、4つの季節に分かれます。spring（春）は March・April・May、summer（夏）は June・July・August、fall（秋）は September・October・November、winter（冬）は December・January・February です。',
    [bx(10, 8, 146, 62, 'spring（春）\nMarch April May', C.green, FILL.green, 12), bx(164, 8, 146, 62, 'summer（夏）\nJune July August', C.red, FILL.red, 12), bx(10, 78, 146, 62, 'fall（秋）\nSeptember October\nNovember', C.main, FILL.yellow, 12), bx(164, 78, 146, 62, 'winter（冬）\nDecember January\nFebruary', C.blue, FILL.blue, 12)],
    '4つの季節と、月の名前', MAIN),
  Q('季節の名前は小文字で、月の名前は大文字で書き始めます。なぜちがうのでしょう。月や曜日、行事の決まった名前（Christmas）は、一つ一つが決まった名前だからです。季節は、ふつうの名詞と同じ扱いなので小文字です。',
    '季節は小文字なの？', '小文字：spring・summer・fall・winter\n大文字：July・Sunday・Christmas\n（名前として決まっているもの）\n→ 書くときに気をつける', 'in summer と in July', GREEN, 14),
  S('天気を表す語です。sunny（晴れ）・cloudy（くもり）・rainy（雨）・snowy（雪）・windy（風が強い）、hot（暑い）・cold（寒い）・warm（あたたかい）・cool（すずしい）。',
    [...cells(['sunny', 'cloudy', 'rainy', 'snowy', 'windy'], 12, BLUE, 12, 34, 4), ...cells(['hot', 'cold', 'warm', 'cool'], 56, RED, 13, 34, 6), lb(160, 110, 'How\'s the weather? — It\'s sunny.', 14, C.ink, 'middle', true), lb(160, 136, '（天気はどうですか — 晴れです）', 12, C.ink, 'middle')],
    '天気の語', BLUE),
  Q('天気を言うとき、なぜ必ず It\'s で始めるのでしょう。英語の文には必ず主語が必要だからです。天気や時こくを言うときの it は「それ」ではなく、形をそろえるための決まった言い方です。Sunny. だけにしてはいけません。',
    'It\'s sunny. の It は？', '英語の文には 主語がいる\n天気の it ＝ 決まった言い方\nIt\'s sunny.　It\'s hot in summer.\n× Sunny.（主語がない）', '天気は It\'s で始める', GREEN, 14),
  S('季節と行事を結びつけます。In spring, we have the entrance ceremony.（春は入学式）、In summer, we have the summer festival.（夏は夏祭り）、In fall, we have sports day.（秋は運動会）、In winter, we have Christmas.（冬はクリスマス）。',
    L([['In spring, we have the entrance ceremony.', GREEN], ['In summer, we have the summer festival.', RED], ['In fall, we have sports day.', MAIN], ['In winter, we have Christmas.', BLUE]], 10, 28, 8, 11),
    'In ＋ 季節, we have ＋ 行事.', MAIN),
  S('行事の名前です。New Year\'s Day（元日）・Children\'s Day（こどもの日）・the Star Festival（七夕）・Halloween・Christmas・New Year\'s Eve（大みそか）。決まった名前の行事は、大文字で書き始めます。',
    [...wordBoxes(['New Year\'s Day', 'Children\'s Day', 'the Star Festival'], 10, 12, 142, PURPLE, 28, 12, 8), ...wordBoxes(['Halloween', 'Christmas', 'New Year\'s Eve'], 168, 12, 142, PURPLE, 28, 12, 8), lb(160, 140, 'sports day は小文字、Christmas は大文字', 12, C.ink, 'middle', true)],
    '決まった名前の行事 → 大文字', PURPLE),
  S('理由は because のあとに続けます。I like summer because I can swim.（泳げるので夏が好きです）。作文では My favorite season is ～. / I like ～ because ～. / In ～, I ～. の3つを組み合わせます。',
    [...wd([['I like summer', BLUE], ['because', RED], ['I can swim.', GREEN]], 12, { size: 12 }), lb(160, 56, 'because ＋ 理由', 13, C.red, 'middle', true), ...L([['My favorite season is ～.', MAIN], ['I like ～ because ～.', MAIN], ['In ～, I ～.', MAIN]], 78, 26, 6, 12)],
    '3つの形で 短い作文ができる', GREEN),
  S('まとめです。①季節は小文字、月と行事の決まった名前は大文字。②天気は It\'s で始める。③fall と autumn はどちらでもよい。④because のあとに理由。',
    L([['① 季節 summer（小文字）　月 July（大文字）', BLUE], ['② 天気は It\'s sunny.（主語を落とさない）', GREEN], ['③ fall ＝ autumn', PURPLE], ['④ because ＋ 理由', RED]], 8, 30, 6, 12),
    '大文字・小文字に気をつけて書く', GREEN),
], '季節と行事');

// ── 語彙④：気持ちを表す語 ──
const face = (cx: number, cy: number, r: number, kind: 'happy' | 'sad' | 'angry' | 'sleepy', c: Col): DiagramElement[] => {
  const out: DiagramElement[] = [ci(cx, cy, r, undefined, c[0], c[1])];
  const e = r * 0.35;
  if (kind === 'sleepy') {
    out.push(ln(cx - e - 4, cy - 4, cx - e + 4, cy - 4, C.ink, false, 2), ln(cx + e - 4, cy - 4, cx + e + 4, cy - 4, C.ink, false, 2));
    out.push(ci(cx, cy + r * 0.4, 3, undefined, C.ink, C.ink));
    out.push(lb(cx + r * 0.9, cy - r * 0.8, 'z', 10, C.gray, 'middle', true));
    return out;
  }
  out.push(ci(cx - e, cy - 4, 2, undefined, C.ink, C.ink), ci(cx + e, cy - 4, 2, undefined, C.ink, C.ink));
  if (kind === 'happy') {
    out.push(ln(cx - e, cy + 6, cx - e / 2, cy + 12, C.ink, false, 2), ln(cx - e / 2, cy + 12, cx + e / 2, cy + 12, C.ink, false, 2), ln(cx + e / 2, cy + 12, cx + e, cy + 6, C.ink, false, 2));
  } else if (kind === 'sad') {
    out.push(ln(cx - e, cy + 12, cx - e / 2, cy + 6, C.ink, false, 2), ln(cx - e / 2, cy + 6, cx + e / 2, cy + 6, C.ink, false, 2), ln(cx + e / 2, cy + 6, cx + e, cy + 12, C.ink, false, 2));
  } else {
    out.push(ln(cx - e - 5, cy - 12, cx - e + 4, cy - 8, C.ink, false, 2), ln(cx + e + 5, cy - 12, cx + e - 4, cy - 8, C.ink, false, 2), ln(cx - e, cy + 9, cx + e, cy + 9, C.ink, false, 2));
  }
  return out;
};

const f_468 = show([
  S('気持ちを表す英語を、顔といっしょに覚えます。happy（うれしい）、sad（悲しい）、angry（おこっている）、sleepy（ねむい）。文の形は I am ＋ 気持ちの語 です。',
    [...face(52, 56, 30, 'happy', C.green).map((e) => e), ...face(122, 56, 30, 'sad', C.blue), ...face(192, 56, 30, 'angry', C.red), ...face(262, 56, 30, 'sleepy', C.purple),
      lb(52, 106, 'happy', 13, C.ink, 'middle', true), lb(122, 106, 'sad', 13, C.ink, 'middle', true), lb(192, 106, 'angry', 13, C.ink, 'middle', true), lb(262, 106, 'sleepy', 13, C.ink, 'middle', true), lb(160, 138, 'I am happy.　I am sad.', 13, C.ink, 'middle', true)],
    'I am ＋ 気持ちの語', MAIN),
  S('気持ちを表す語は、3つに分けて覚えます。基本の気持ち、体の感じ、気持ちの動きです。',
    [bx(10, 8, 300, 22, '基本：happy sad angry fine good bad', C.green, FILL.green, 12), bx(10, 36, 300, 22, '体の感じ：tired sleepy hungry thirsty sick hot cold', C.blue, FILL.blue, 11),
      bx(10, 64, 300, 22, '気持ちの動き：excited surprised nervous scared bored glad', C.purple, FILL.purple, 10), lb(160, 110, 'tired つかれた　hungry おなかがすいた', 12, C.ink, 'middle'), lb(160, 130, 'excited わくわく　nervous きんちょう', 12, C.ink, 'middle')],
    '3つのグループ', BLUE),
  Qt('気持ちの語は、なぜ be動詞とセットなのでしょう。happy や hungry は「〜です」という状態を表す語で、「です」にあたる be動詞が必要だからです。I happy. のように be動詞を落としてはいけません。',
    'be動詞を落とさないの？',
    [...wd([['I', GREEN], ['am', RED], ['happy.', MAIN]], 58, { total: 150, size: 14 }), lb(85, 100, '○', 18, C.green, 'middle', true), ...wd(cw(['I', 'happy.'], RED), 58, { x0: 180, total: 120, size: 14 }), lb(240, 100, '×', 18, C.red, 'middle', true),
      ...wd([['She', GREEN], ['is', RED], ['tired.', MAIN]], 118, { total: 150, size: 13 }), ...wd([['They', GREEN], ['are', RED], ['excited.', MAIN]], 118, { x0: 180, total: 130, size: 12 })],
    '気持ちの語は be動詞とセット'),
  S('一般動詞とならべてはいけません。I am play happy. のような文にはなりません。気持ちの語は一般動詞ではなく、「〜です」を表す形容詞（けいようし）の仲間だからです。',
    [...wd(cw(['I', 'am', 'play', 'happy.'], RED), 20, { size: 13 }), lb(160, 64, '× 動詞が2つ', 14, C.red, 'middle', true), ...wd([['I', GREEN], ['am', RED], ['happy.', MAIN]], 92, { total: 220, x0: 50, size: 14 }), lb(160, 136, '気持ち ＝ 「です」の仲間', 13, C.ink, 'middle', true)],
    '気持ちの語 ＋ 一般動詞 は ×', RED),
  S('程度（ていど）をつけ足せます。very（とても）、so（とても）、a little（少し）。I am very happy.、I am so happy.、I am a little tired.。',
    L([['I am very happy.　（とても）', MAIN], ['I am so happy.　（とても）', MAIN], ['I am a little tired.　（少し）', MAIN]], 14, 30, 10, 14),
    'very・so ＝ とても　a little ＝ 少し', BLUE),
  S('hungry と angry は、一文字ちがうだけでよく似ています。hungry（ハングリー）はおなかがすいた、angry（アングリー）はおこっている。意味を取りちがえないよう注意します。',
    [bx(20, 20, 130, 54, 'hungry\nおなかがすいた', C.blue, FILL.blue, 14), bx(170, 20, 130, 54, 'angry\nおこっている', C.red, FILL.red, 14), lb(160, 100, 'つづりが似ている！', 13, C.red, 'middle', true), lb(160, 126, '「のどがかわいた」は I\'m thirsty.', 12, C.ink, 'middle')],
    'hungry と angry を見まちがえない', RED),
  S('理由とたずね方です。I am happy because it\'s my birthday.（たん生日なのでうれしい）。How are you? — I\'m fine, thank you. / What\'s wrong? — I\'m sick.（どうしたの）。',
    [bx(10, 8, 300, 26, 'I am happy because it\'s my birthday.', C.green, FILL.green, 12), bx(10, 40, 300, 26, 'I am tired because I played soccer.', C.green, FILL.green, 12), bx(10, 76, 146, 26, 'How are you?', C.purple, FILL.purple, 12), bx(164, 76, 146, 26, 'I\'m fine, thank you.', C.green, FILL.green, 11), bx(10, 108, 146, 26, 'What\'s wrong?', C.purple, FILL.purple, 12), bx(164, 108, 146, 26, 'I\'m sick.', C.green, FILL.green, 12)],
    'because ＋ 理由', GREEN),
  S('まとめです。①I am ＋ 気持ちの語。②be動詞を落とさない。③very・so・a little。④hungry と angry に注意。⑤because で理由。',
    L([['① I am ＋ 気持ちの語', BLUE], ['② be動詞を落とさない（I happy ×）', RED], ['③ very・so・a little', GREEN], ['④ hungry と angry に注意　because ＋ 理由', PURPLE]], 8, 30, 6, 12),
    '気持ちは be動詞とセット', GREEN),
], '気持ちを表す語');

// ── 会話①：買い物 ──
const f_469 = show([
  S('買い物の会話は、5つの場面でできています。店に入る → ほしいものを言う → 値段をたずねる → 買うと決める → お金をわたす、の順です。',
    [...row(['①店に入る', '②ほしい\nものを言う', '③値段を\nたずねる'], 14, BLUE, 11, 48, 14), ...row(['④買うと\n決める', '⑤お金を\nわたす'], 76, GREEN, 11, 48, 14).slice(0, 4), lb(160, 144, 'How much is it? が中心', 13, C.red, 'middle', true)],
    '買い物の会話の流れ', MAIN),
  S('店員さんが May I help you?（いらっしゃいませ）と言います。ほしいなら Yes, please. I want a T-shirt.、見ているだけなら No, thank you. I\'m just looking. と答えます。',
    [bx(10, 8, 300, 28, '店員：May I help you?', C.purple, FILL.purple, 13), ar(160, 38, 160, 48, C.purple), bx(10, 50, 300, 28, 'お客：Yes, please. I want a T-shirt.', C.green, FILL.green, 12), bx(10, 86, 300, 28, 'または　No, thank you. I\'m just looking.', C.blue, FILL.blue, 12), lb(160, 138, 'just looking ＝ 見ているだけ', 12, C.ink, 'middle')],
    '店に入ったとき', BLUE),
  S('ほしいものを言います。I want a cap, please.（ぼうしがほしいです）。I\'d like a hamburger, please. は I want よりていねいな言い方です。ていねいさの順は、I want a cap. → I want a cap, please. → I\'d like a cap, please. です。',
    [bx(30, 12, 260, 28, 'I want a cap.', C.main, FILL.warm, 13), ar(160, 42, 160, 52, C.main), bx(30, 54, 260, 28, 'I want a cap, please.', C.blue, FILL.blue, 13), ar(160, 84, 160, 94, C.main), bx(30, 96, 260, 28, 'I\'d like a cap, please.', C.green, FILL.green, 13), lb(160, 144, '下へ行くほど ていねい', 12, C.red, 'middle', true)],
    '下にいくほど ていねい', GREEN),
  S('値段は How much is it? （いくらですか）とたずね、It\'s 500 yen. と答えます。ものが2つ以上なら How much are they? — They are 1,000 yen. です。yen は複数でも s をつけません。',
    [bx(10, 8, 300, 26, 'お客：How much is it?', C.purple, FILL.purple, 13), bx(10, 38, 300, 26, '店員：It\'s 500 yen.', C.green, FILL.green, 13), bx(10, 76, 300, 26, 'How much are they?', C.purple, FILL.purple, 13), bx(10, 106, 300, 26, 'They are 1,000 yen.', C.green, FILL.green, 13), lb(160, 150, '1つなら is、2つ以上なら are　yen に s なし', 11, C.red, 'middle', true)],
    'How much is / are ～?', BLUE),
  S('買うと決めたら I\'ll take it.（それをください）。お金をわたすときは Here you are.（はいどうぞ）、店員さんは Here\'s your change.（おつりです）と言います。最後にお礼を言います。',
    [bx(10, 8, 300, 26, 'I\'ll take it.　I\'ll take two.', C.green, FILL.green, 13), bx(10, 40, 300, 26, 'お客：Here you are.', C.blue, FILL.blue, 13), bx(10, 72, 300, 26, '店員：Thank you. Here\'s your change.', C.purple, FILL.purple, 12), bx(10, 104, 300, 26, 'お客：Thank you.　店員：You\'re welcome.', C.main, FILL.warm, 12)],
    '買う → わたす → おつり → お礼', GREEN),
  Q('「ください」を Give me ～. と言うのは、なぜよくないのでしょう。Give me ～. は「わたしに〜をよこしなさい」という命令する言い方だからです。店では please をつけるか、I\'d like ～ を使います。',
    'Give me ～. はだめ？', 'Give me ～. ＝ 命令する言い方\n→ 店では ていねいでない\n○ I want ～, please.\n○ I\'d like ～, please.', '店では please か I\'d like', RED, 14),
  S('ファストフード店の会話です。What would you like?（何になさいますか）— I\'d like a hamburger and a small drink, please. — For here or to go?（店内ですか、お持ち帰りですか）— For here, please.',
    [bx(10, 8, 300, 26, '店員：What would you like?', C.purple, FILL.purple, 12), bx(10, 38, 300, 26, 'お客：I\'d like a hamburger and a small drink, please.', C.green, FILL.green, 10), bx(10, 68, 300, 26, '店員：For here or to go?', C.purple, FILL.purple, 12), bx(10, 98, 300, 26, 'お客：For here, please.', C.green, FILL.green, 12), lb(160, 144, 'for here ＝ 店内　to go ＝ お持ち帰り', 12, C.ink, 'middle')],
    '注文のやりとり', MAIN),
  S('まとめです。①ほしいものは I want ～, please. か I\'d like ～, please.。②値段は How much is it? — It\'s ～ yen.。③Give me ～. は使わない。④yen に s はつけない。',
    L([['① I want ～, please.　I\'d like ～, please.', BLUE], ['② How much is it? — It\'s ～ yen.', GREEN], ['③ Give me ～. は使わない', RED], ['④ yen に s なし　1つ is・2つ以上 are', PURPLE]], 8, 30, 6, 12),
    'How much is it? の一往復が中心', GREEN),
], '買い物の会話');

// ── 会話②：道をたずねる・教える ──
const roadMap = (): DiagramElement[] => [
  bx(10, 70, 300, 24, '', C.gray, FILL.gray), bx(146, 8, 28, 150, '', C.gray, FILL.gray),
  bx(30, 36, 80, 28, 'hospital', C.red, FILL.red, 11), bx(190, 36, 80, 28, 'bank', C.blue, FILL.blue, 11), bx(190, 102, 80, 28, 'park', C.green, FILL.green, 11),
  ci(160, 148, 7, 'S', C.main, FILL.yellow, 9), lb(160, 128, 'start', 9, C.gray, 'middle'),
];
const f_470 = show([
  S('道をたずねる会話です。Excuse me. Where is the hospital?（すみません、病院はどこですか）。地図の S から病院まで、どう説明するか見てみましょう。',
    [...roadMap(), lb(80, 112, 'Excuse me.', 12, C.purple, 'middle', true), lb(80, 128, 'Where is the hospital?', 11, C.purple, 'middle', true)],
    'まず Excuse me. でたずねる', MAIN),
  S('1つ目の動きは「まっすぐ進む」です。Go straight for two blocks.（2ブロックまっすぐ行ってください）。',
    [...roadMap(), ar(160, 140, 160, 92, C.red), lb(228, 82, 'Go straight.', 12, C.red, 'middle', true)],
    'Go straight.（まっすぐ）', RED),
  S('2つ目の動きは「曲がる」です。Turn left at the corner.（角を左に曲がってください）。目印を at ～ でつけると、どこで曲がるかが伝わります。',
    [...roadMap(), ar(160, 140, 160, 84, C.red), ar(160, 82, 100, 82, C.blue), lb(110, 108, 'Turn left\nat the corner.', 11, C.blue, 'middle', true)],
    'Turn left at the corner.', BLUE),
  S('3つ目の動きは「着く」です。It\'s on your right.（右側に見えます）。左に曲がって進むと、病院は進行方向の右側になります。It\'s next to the bank. のように、目印のとなりと言う言い方もあります。',
    [...roadMap(), ar(160, 140, 160, 84, C.red), ar(160, 82, 100, 82, C.blue), bx(30, 36, 80, 28, 'hospital', C.green, FILL.green, 11), lb(70, 24, 'It\'s on your right.', 11, C.green, 'middle', true)],
    'It\'s on your right.（着く）', GREEN),
  Q('道案内は、なぜ3つの言い方でできるのでしょう。どんなに複雑な道でも、「まっすぐ進む・曲がる・着く」の3つの動きの組み合わせだからです。Go straight、Turn right（left）、It\'s on your right。目印は at ～ で足します。',
    '3つで道案内できる？', '進む → Go straight.\n曲がる → Turn right / left at ～.\n着く → It\'s on your right.\n複雑な道も この組み合わせ', '進む・曲がる・着く', GREEN, 14),
  Qt('Turn right に、なぜ to をつけないのでしょう。right は「右に」という向きを表すことば（副詞）で、それだけで turn を説明できるからです。「歩いて」が on foot なのも、by のあとには乗り物の名前しか置けないからです。',
    'Turn right に to は？',
    [...wd([['Turn', RED], ['right', GREEN], ['at the corner.', MAIN]], 58, { size: 13 }), lb(160, 100, '○', 18, C.green, 'middle', true), ...wd(cw(['Turn', 'to', 'right'], RED), 116, { total: 160, size: 13 }), lb(250, 130, '×', 18, C.red, 'middle', true), lb(160, 154, 'by bus（the なし）　on foot（歩いて）', 12, C.ink, 'middle', true)],
    'Turn right（to なし）'),
  S('位置を表すことばです。next to ～（～のとなり）、in front of ～（～の前）、behind ～（～のうしろ）、between A and B（AとBの間）、across from ～（～の向かい）。',
    L([['It\'s next to the bank.　（銀行のとなり）', BLUE], ['It\'s in front of the park.　（公園の前）', BLUE], ['It\'s behind the school.　（学校のうしろ）', GREEN], ['It\'s between A and B.　（AとBの間）', GREEN], ['It\'s across from the station.　（駅の向かい）', PURPLE]], 8, 24, 5, 11),
    '目印と位置のことば', MAIN),
  S('分からないときや聞き返すときの言い方です。I\'m sorry. I don\'t know.（ごめんなさい、わかりません）、I\'m not from here.（この辺の者ではありません）、Pardon?（もう一度お願いします）、Could you say that again?（もう一度言っていただけますか）。',
    L([['I\'m sorry. I don\'t know.', MAIN], ['I\'m not from here.　（この辺の者ではない）', MAIN], ['Pardon?　（もう一度）', BLUE], ['Could you say that again?', BLUE]], 10, 28, 8, 12),
    '分からないときは そう言ってよい', BLUE),
  S('まとめです。①Excuse me. でたずねる。②進む（Go straight）・曲がる（Turn right / left）・着く（It\'s on your right）。③Turn に to はつけない。④by bus（the なし）、歩いては on foot。',
    L([['① Excuse me. Where is ～?', PURPLE], ['② Go straight → Turn left → It\'s on your right.', GREEN], ['③ Turn right（to なし）', BLUE], ['④ by bus　on foot', RED]], 8, 30, 6, 12),
    '3つの動きで道案内', GREEN),
], '道をたずねる・教える');

export const XF_CEJ_FIGURES: Record<string, DiagramFigure> = {
  'xf_eigo_s442': f_442,
  'xf_eigo_s444': f_444,
  'xf_eigo_s446': f_446,
  'xf_eigo_s447': f_447,
  'xf_eigo_s448': f_448,
  'xf_eigo_s449': f_449,
  'xf_eigo_s451': f_451,
  'xf_eigo_s452': f_452,
  'xf_eigo_s453': f_453,
  'xf_eigo_s454': f_454,
  'xf_eigo_s455': f_455,
  'xf_eigo_s456': f_456,
  'xf_eigo_s457': f_457,
  'xf_eigo_s458': f_458,
  'xf_eigo_s459': f_459,
  'xf_eigo_s460': f_460,
  'xf_eigo_s461': f_461,
  'xf_eigo_s462': f_462,
  'xf_eigo_s463': f_463,
  'xf_eigo_s464': f_464,
  'xf_eigo_s465': f_465,
  'xf_eigo_s466': f_466,
  'xf_eigo_s467': f_467,
  'xf_eigo_s468': f_468,
  'xf_eigo_s469': f_469,
  'xf_eigo_s470': f_470,
};

export const XF_CEJ_SECTIONS: Record<string, string> = {
  'eigo_s442#1': 'xf_eigo_s442',
  'eigo_s444#0': 'xf_eigo_s444',
  'eigo_s446#0': 'xf_eigo_s446',
  'eigo_s447#1': 'xf_eigo_s447',
  'eigo_s448#0': 'xf_eigo_s448',
  'eigo_s449#0': 'xf_eigo_s449',
  'eigo_s451#0': 'xf_eigo_s451',
  'eigo_s452#0': 'xf_eigo_s452',
  'eigo_s453#0': 'xf_eigo_s453',
  'eigo_s454#0': 'xf_eigo_s454',
  'eigo_s455#2': 'xf_eigo_s455',
  'eigo_s456#0': 'xf_eigo_s456',
  'eigo_s457#2': 'xf_eigo_s457',
  'eigo_s458#0': 'xf_eigo_s458',
  'eigo_s459#0': 'xf_eigo_s459',
  'eigo_s460#2': 'xf_eigo_s460',
  'eigo_s461#2': 'xf_eigo_s461',
  'eigo_s462#0': 'xf_eigo_s462',
  'eigo_s463#2': 'xf_eigo_s463',
  'eigo_s464#2': 'xf_eigo_s464',
  'eigo_s465#0': 'xf_eigo_s465',
  'eigo_s466#2': 'xf_eigo_s466',
  'eigo_s467#0': 'xf_eigo_s467',
  'eigo_s468#0': 'xf_eigo_s468',
  'eigo_s469#0': 'xf_eigo_s469',
  'eigo_s470#2': 'xf_eigo_s470',
};
