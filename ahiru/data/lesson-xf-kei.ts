// 高校受験 英語（和文英訳・並べかえ・英作文・入試対策・長文・誤文訂正・見直し・直前期）と
// 中1英語（曜日・月・日付）の教科書単元に、動く図解を1つずつ足す。
// 「なぜ？」の連鎖で、7枚以上。上に図、下の帯（y=160〜）にそのスライドのひとこと。
// キーは 'xf_<単元id>'、結び先は '<単元id>#<節の番号>'。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, show, fresh, stack } from './diagram-kit';

type Col = [string, string];
const BLUE: Col = [C.blue, FILL.blue];
const GREEN: Col = [C.green, FILL.green];
const RED: Col = [C.red, FILL.red];
const MAIN: Col = [C.main, FILL.warm];
const PURPLE: Col = [C.purple, FILL.purple];
const GRAY: Col = [C.gray, FILL.gray];
const YELLOW: Col = [C.main, FILL.yellow];

// 下の帯（y=160 から）に、そのスライドのひとことを出す。\n で改行できる。
const cap = (t: string, c: Col = BLUE, size = 12): DiagramElement => {
  const n = t.split('\n').length;
  return bx(14, 160, 292, 16 + 15 * n, t, c[0], c[1], size);
};
// 1枚のスライド＝まっさらな図＋下の帯
const S = (note: string, top: DiagramElement[], capText: string, c: Col = BLUE, size = 12) => ({
  note,
  add: fresh(...top, cap(capText, c, size)),
});
// 「なぜ？」の問い → 答え
const qa = (q: string, a: string, c: Col = BLUE, aSize = 13): DiagramElement[] => [
  bx(12, 8, 296, 40, 'なぜ？ ' + q, PURPLE[0], PURPLE[1], 12),
  ar(160, 50, 160, 66, PURPLE[0]),
  bx(12, 68, 296, 74, a, c[0], c[1], aSize),
];
// 文字の幅の見つもり（半角は0.55、全角は1）
const U = (s: string, size: number) => [...s].reduce((u, ch) => u + (ch.charCodeAt(0) < 256 ? 0.55 : 1), 0) * size;
// ことば（単語・かたまり）を箱にして、はば304で折りかえしながら中央にならべる
const chips = (items: (string | [string, Col])[], y: number, o?: { size?: number; h?: number; gap?: number }): DiagramElement[] => {
  const size = o?.size ?? 12;
  const h = o?.h ?? 24;
  const gap = o?.gap ?? 5;
  const ws = items.map((it) => Math.max(26, U(typeof it === 'string' ? it : it[0], size) + 10));
  const rows: number[][] = [[]];
  let cur = 0;
  ws.forEach((w, i) => {
    if (cur + w > 308 && rows[rows.length - 1].length) { rows.push([]); cur = 0; }
    rows[rows.length - 1].push(i);
    cur += w + gap;
  });
  const out: DiagramElement[] = [];
  rows.forEach((r, ri) => {
    const tot = r.reduce((s, i) => s + ws[i], 0) + gap * (r.length - 1);
    let x = (320 - tot) / 2;
    r.forEach((i) => {
      const it = items[i];
      const t = typeof it === 'string' ? it : it[0];
      const c: Col = typeof it === 'string' ? MAIN : it[1];
      out.push(bx(x, y + ri * (h + 6), ws[i], h, t, c[0], c[1], size));
      x += ws[i] + gap;
    });
  });
  return out;
};
// 箱を縦につないだ流れ
const chain = (labels: string[], cols: Col[], y0 = 8, h = 28, gap = 11, size = 12, x = 12, w = 296): DiagramElement[] =>
  labels.flatMap((t, i) => {
    const y = y0 + i * (h + gap);
    const c = cols[i] ?? cols[cols.length - 1];
    const els: DiagramElement[] = [];
    if (i > 0) els.push(ar(x + w / 2, y - gap + 1, x + w / 2, y - 1, c[0]));
    els.push(bx(x, y, w, h, t, c[0], c[1], size));
    return els;
  });
// 横に並べた箱（矢印なし）。cols は箱の数
const cols = (labels: string[], y: number, h: number, cs: Col[], size = 12, pad = 10, gap = 8): DiagramElement[] => {
  const n = labels.length;
  const w = (320 - pad * 2 - gap * (n - 1)) / n;
  return labels.map((t, i) => bx(pad + i * (w + gap), y, w, h, t, (cs[i] ?? cs[cs.length - 1])[0], (cs[i] ?? cs[cs.length - 1])[1], size));
};
// 表（1行目と1列目だけ色をつける）
const tbl = (x: number, y: number, cw: number[], rh: number, rows: string[][], c: Col = BLUE, size = 11): DiagramElement[] =>
  rows.flatMap((r, i) => {
    let cx = x;
    return r.map((t, j) => {
      const e = bx(cx, y + i * rh, cw[j], rh, t, c[0], i === 0 || j === 0 ? c[1] : '#FFFFFF', size);
      cx += cw[j];
      return e;
    });
  });
// 見出し（図の上にひとこと）
const head = (t: string, y = 14, c: string = C.ink, size = 13): DiagramElement => lb(160, y, t, size, c, 'middle', true);

// ── 和文英訳②：知っている表現に言いかえる ──
// SEC koko_eigo_s399 0
const f_s399 = show([
  S('「彼は約束を守る人だ」を英語にしようとして、「約束を守る」の言い方が浮かばず手が止まりました。こういうとき、英語力が足りないのではなく、日本語をそのまま訳そうとしていることが原因です。',
    [head('彼は約束を守る人だ', 24, C.ink, 15), ar(160, 40, 160, 62, C.red), bx(60, 66, 200, 40, '？？？\n言い方が浮かばない', C.red, FILL.red, 13)],
    '手が止まる原因は「日本語をそのまま訳そうとすること」', RED),
  S('なぜ手が止まるの？→ 日本語の表現を一対一で英語に置きかえようとするからです。置きかえられる語を知らなければそこで止まります。でも、日本語のほうを書き直せば、知っている英語で書けます。',
    qa('日本語のままだと止まるの？', '日本語を英語に「置きかえる」と、\n知らない語に出会った瞬間に止まる。\nなら、日本語のほうを書ける形に直せばよい。', BLUE, 13),
    '日本語を直せば、知っている英語で書ける', BLUE),
  S('では、どう直すの？→ 「約束を守る」を「いつも、すると言ったことをする」というやさしい日本語に言いかえます。これなら does what he says と書けます。',
    chain(['彼は約束を守る人だ', 'やさしい日本語に直す\n「彼はいつも、すると言ったことをする」', 'He always does what he says.'], [BLUE, MAIN, GREEN], 8, 38, 14, 13),
    '難しい日本語 → やさしい日本語 → 英語', GREEN),
  S('型その1：一文を二文に分けます。「昨日買ったこの本はとてもおもしろい」は、「私は昨日この本を買った。それはとてもおもしろい。」に分ければ、関係代名詞を使わずに書けます。',
    [bx(12, 8, 296, 30, '昨日買ったこの本はとてもおもしろい。', C.blue, FILL.blue, 13), ar(160, 40, 110, 58, C.main), ar(160, 40, 210, 58, C.main), bx(12, 60, 140, 34, '私は昨日この本を買った。', C.main, FILL.warm, 12), bx(168, 60, 140, 34, 'それはとてもおもしろい。', C.main, FILL.warm, 12), bx(12, 106, 140, 30, 'I bought this book yesterday.', C.green, FILL.green, 11), bx(168, 106, 140, 30, 'It is very interesting.', C.green, FILL.green, 11)],
    '一文が書けないなら、二文に分ける', GREEN),
  S('二文に分けても減点されるの？→ されません。文法が正しく、意味が同じなら二文でかまいません。むしろ短い文のほうが、まちがえる場所が少なくなります。',
    qa('二文に分けて減点されない？', '減点されない。\n意味が同じで文法が正しければ、二文でOK。\n短いほど、ミスをする場所が減る。', GREEN, 13),
    '短く分けるほど、まちがいは減る', GREEN),
  S('型その2：抽象的な語を具体的な動作にします。「私は環境に関心がある」は「私は環境について学びたい」に直せば、want to learn about で書けます。',
    chain(['私は環境に関心がある', '具体的な動作にする「環境について学びたい」', 'I want to learn about the environment.'], [BLUE, MAIN, GREEN], 8, 38, 14, 13),
    '「関心がある」→「学びたい」で書ける', GREEN),
  S('型その3：主語を変えます。「この町にはたくさんの公園がある」は人を主語にせず There are 〜 で書きます。「知らせを聞いてうれしかった」は人を主語にして I was happy to hear the news. と書きます。',
    [bx(12, 10, 296, 28, 'この町にはたくさんの公園がある', C.blue, FILL.blue, 12), bx(12, 42, 296, 28, 'There are many parks in this town.', C.green, FILL.green, 12), bx(12, 82, 296, 28, 'その知らせを聞いて私はうれしかった', C.blue, FILL.blue, 12), bx(12, 114, 296, 28, 'I was happy to hear the news.', C.green, FILL.green, 12)],
    '主語を変えると、書きやすい形が見つかる', GREEN),
  S('まとめ。書けない表現に出会ったら、まず日本語を直します。一文を二文にする、抽象的な語を動作にする、主語を変える。ただし、意味が変わらない範囲で行うことが条件です。',
    chain(['型① 一文を二文に分ける', '型② 抽象的な語を具体的な動作に', '型③ 主語を変える（There is／人を主語に）'], [GREEN, GREEN, GREEN], 8, 30, 10, 12),
    '意味が変わらない範囲で、書ける形に言いかえる', YELLOW),
], '難しい日本語をやさしい日本語に言いかえてから英語にする');

// ── 和文英訳④：書いたあとの検算 ──
// SEC koko_eigo_s401 0
const f_s401 = show([
  S('英作文で点を失う原因の大半は、内容ではなく細かいミスです。三単現の s、a と the、複数形の s。知っているのに落とすのは、見直しの順番を決めていないからです。',
    [head('見直しの順番を決める', 14), ...chain(['① 主語と動詞', '② 名詞（a／the／複数形）', '③ 時制', '④ つづり'], [BLUE, GREEN, MAIN, PURPLE], 28, 22, 6, 12)],
    '五段階：①主語と動詞 ②名詞 ③時制 ④つづり ⑤形式', BLUE),
  S('なぜ五つを一度に見ないの？→ 一度に全部見ようとすると、どれも見落とすからです。①だけを見て全文を通し、次に②だけを見て通す。この方法がいちばん見落としが少なくなります。',
    qa('五つを一度に見ないの？', '同時に見ると、どれも見落とす。\n①だけで全文を通す → 次に②だけで全文を通す。\n一つずつが、いちばん確実。', BLUE, 13),
    '観点を一つに決めて、全文を通す', BLUE),
  S('①主語と動詞。主語が三人称単数（he, she, it, My brother, Ken）で現在の話なら、動詞に s をつけます。My brother plays soccer. が正しく、play は誤りです。',
    [bx(20, 12, 130, 30, 'My brother play soccer.', C.red, FILL.red, 12), lb(160, 27, '→', 16, C.main, 'middle', true), bx(170, 12, 130, 30, 'My brother plays soccer.', C.green, FILL.green, 12), bx(12, 56, 296, 36, '主語が he／she／it／単数の名詞で\n現在の話 → 動詞に s', C.blue, FILL.blue, 12), bx(12, 100, 296, 36, '複数の主語には s をつけない\nMy friends play soccer.', C.green, FILL.green, 12)],
    '三人称単数・現在 → 動詞に s', GREEN),
  S('②名詞。数えられる名詞が単数なら a／an／the／my などが要り、複数なら s が要ります。water や homework のように数えられない名詞には、a も s もつけません。母音の音で始まる語の前は an です。',
    [bx(14, 10, 130, 28, 'two book', C.red, FILL.red, 13), lb(160, 24, '→', 16, C.main, 'middle', true), bx(176, 10, 130, 28, 'two books', C.green, FILL.green, 13), bx(14, 48, 130, 28, 'a water', C.red, FILL.red, 13), lb(160, 62, '→', 16, C.main, 'middle', true), bx(176, 48, 130, 28, 'water', C.green, FILL.green, 13), bx(14, 86, 130, 28, 'a apple', C.red, FILL.red, 13), lb(160, 100, '→', 16, C.main, 'middle', true), bx(176, 86, 130, 28, 'an apple', C.green, FILL.green, 13)],
    '数えられる？ 単数？ 複数？ を一つずつ確認', GREEN),
  S('③時制。yesterday, last week, ago があれば過去形、tomorrow, next week があれば will や be going to です。一文の中で時制がそろっているかも見ます。I went to the park and play soccer. は、play を played に直します。',
    [bx(14, 8, 140, 26, 'yesterday／ago', C.blue, FILL.blue, 12), bx(166, 8, 140, 26, '過去形', C.green, FILL.green, 13), bx(14, 40, 140, 26, 'tomorrow／next week', C.blue, FILL.blue, 11), bx(166, 40, 140, 26, 'will／be going to', C.green, FILL.green, 12), bx(14, 76, 292, 28, 'I went to the park and play soccer.', C.red, FILL.red, 12), ar(160, 106, 160, 118, C.main), bx(14, 120, 292, 28, 'I went to the park and played soccer.', C.green, FILL.green, 12)],
    '時を表す語を探し、動詞の形をそろえる', GREEN),
  S('④つづり。自信のない語は、別の簡単な語に書き直します。まちがえやすい語を先に知っておくと、見直しで気づけます。',
    [head('よくまちがえるつづり', 14), ...chips(['because', 'beautiful', 'friend', 'receive', 'restaurant', 'vegetable', 'interesting', 'favorite', 'different', 'important'], 28, { size: 12, h: 24 })],
    '自信がなければ、別の語に書き直す', PURPLE),
  S('⑤形式。文頭の大文字、文末のピリオド、疑問文の「?」、固有名詞（Japan, Ken, Monday, English）の大文字を確認します。',
    [bx(14, 12, 292, 30, 'ken likes english on monday', C.red, FILL.red, 13), ar(160, 44, 160, 62, C.main), bx(14, 64, 292, 30, 'Ken likes English on Monday.', C.green, FILL.green, 13), bx(14, 104, 292, 36, '文頭の大文字・固有名詞の大文字\n文末のピリオド（疑問文は ?）', C.blue, FILL.blue, 12)],
    '最後に、大文字とピリオドを確認', GREEN),
  S('まとめ。見直しは五段階を順に、一つの観点ずつ全文に当てます。この順番を決めておけば、落としやすい細かいミスを減らせます。',
    chain(['①主語と動詞 → ②名詞 → ③時制', '④つづり → ⑤形式（大文字・ピリオド）', '一つの観点ずつ、全文を通す'], [BLUE, PURPLE, GREEN], 14, 34, 14, 13),
    '順番を決めれば、見落としは減る', YELLOW),
], '五段階の検算：主語と動詞→名詞→時制→つづり→形式');

// ── 並べかえ③：不定詞・動名詞・分詞をふくむ文 ──
// SEC koko_eigo_s404 1
const f_s404 = show([
  S('語群に playing や to があると難しく感じます。でも、これらは動詞から作られた飾りです。飾る相手を決めれば置き場所が決まります。まず例題です。',
    [head('語群を並べかえて文にする', 14), ...chips(['the', 'playing', 'boy', 'tennis', 'is', 'brother', 'my'], 34, { size: 12, h: 28 })],
    '(the / playing / boy / tennis / is / brother / my)', BLUE),
  S('手順1：動詞を見つけます。語群の中の動詞（be動詞）は is です。ここが文の骨組みになります。',
    [...chips(['the', 'playing', 'boy', 'tennis', ['is', RED], 'brother', 'my'], 18, { size: 12, h: 28 }), bx(100, 70, 120, 34, '動詞は is', C.red, FILL.red, 14)],
    'まず動詞：is', RED),
  S('手順2：かたまりを作ります。the boy、playing tennis、my brother の三つです。名詞は冠詞や my とセットにします。',
    [bx(12, 24, 80, 34, 'the boy', C.blue, FILL.blue, 13), bx(100, 24, 120, 34, 'playing tennis', C.green, FILL.green, 13), bx(228, 24, 80, 34, 'my brother', C.blue, FILL.blue, 12), bx(130, 84, 60, 30, 'is', C.red, FILL.red, 14)],
    'かたまりは三つ + 動詞 is', GREEN),
  S('なぜ playing tennis は the boy の前ではなく後ろなの？→ 分詞が一語だけなら名詞の前（a sleeping baby）ですが、playing tennis のように二語以上のかたまりになると、名詞の後ろから飾るからです。',
    qa('the boy の前ではだめ？', '二語以上のかたまりの分詞は、名詞の後ろから飾る。\n前に置けるのは一語だけ（a sleeping baby）。\nplaying tennis は二語 → boy の後ろ。', GREEN, 12),
    '二語以上 → うしろから飾る', GREEN),
  S('飾る相手は the boy（テニスをしているのは少年）です。the boy の直後に playing tennis を置き、そのあとに is my brother を続けます。',
    [bx(10, 40, 70, 32, 'The boy', C.blue, FILL.blue, 13), bx(86, 40, 120, 32, 'playing tennis', C.green, FILL.green, 13), bx(212, 40, 28, 32, 'is', C.red, FILL.red, 13), bx(246, 40, 66, 32, 'my brother', C.blue, FILL.blue, 11), ln(146, 40, 146, 30, C.green), ln(146, 30, 45, 30, C.green), ar(45, 30, 45, 40, C.green), lb(160, 100, 'The boy playing tennis is my brother.', 13, C.ink, 'middle', true)],
    '飾る相手に線をつなぐ → 完成', GREEN),
  S('次は It is 〜 to 〜 です。語群は (to / it / for / is / me / difficult / early / get up)。It is difficult まで作り、for me を to の前に置き、to get up early を最後に置きます。',
    [...chips([['It', BLUE], ['is', RED], ['difficult', BLUE], ['for me', PURPLE], ['to get up', GREEN], ['early', GREEN]], 14, { size: 12, h: 28 }), lb(160, 96, 'It is difficult for me to get up early.', 13, C.ink, 'middle', true)],
    'It is 〜 for 人 to 〜 の順', GREEN),
  S('なぜ for me は to の直前なの？→ for me は「to 以下の動作をする人」を表します。to から離すと意味の関係が切れてしまうので、It is difficult to get up early for me. は不自然です。',
    qa('for me は文末ではだめ？', 'for 人 は「to 以下の動作をする人」を表す。\nto から離すと、関係が切れて不自然。\n→ for 人 は必ず to の直前。', GREEN, 13),
    'for 人 は to の直前', GREEN),
  S('too 〜 to 〜 は順番が固定です。This tea is too hot to drink.（熱すぎて飲めない）。too ＋ 形容詞 ＋ to ＋ 動詞の原形です。so 〜 that の形に書きかえることもできます。',
    [...chips([['too', RED], ['hot', BLUE], ['to', GREEN], ['drink', GREEN]], 14, { size: 14, h: 30 }), lb(160, 66, 'This tea is too hot to drink.', 13, C.ink, 'middle', true), ar(160, 78, 160, 92, C.main), lb(160, 108, "This tea is so hot that I can't drink it.", 12, C.ink, 'middle', true)],
    'too + 形容詞 + to + 動詞の原形', GREEN),
  S('まとめ。準動詞の並べかえは、動詞を決める → かたまりを作る → 飾る相手を決める、の順です。飾る相手と線で結んだとき、線が交差したり遠く離れたりしていたら、置き場所がまちがっています。',
    chain(['① 動詞（is など）を決める', '② かたまりを作る', '③ 飾る相手を決めて、その直後に置く'], [RED, GREEN, BLUE], 14, 34, 14, 13),
    '飾る相手を先に決める', YELLOW),
], '準動詞のかたまりは、飾る相手を決めてから置く');

// ── 並べかえ④：関係代名詞・比較・受け身をふくむ文 ──
// SEC koko_eigo_s405 0
const f_s405 = show([
  S('関係代名詞をふくむ並べかえは、語数が多くて難しく見えます。でも手順が決まっています。例題の語群は (that / the / is / read / this / book / I / yesterday) です。',
    [head('語群を並べかえて文にする', 14), ...chips(['that', 'the', 'is', 'read', 'this', 'book', 'I', 'yesterday'], 34, { size: 12, h: 28 })],
    '(that / the / is / read / this / book / I / yesterday)', BLUE),
  S('手順1：動詞を数えます。is と read の二つです。動詞が二つあるので、文が二つ分入っていると判断できます。関係代名詞・接続詞・不定詞などが含まれているサインです。',
    [...chips(['that', 'the', ['is', RED], ['read', RED], 'this', 'book', 'I', 'yesterday'], 18, { size: 12, h: 28 }), bx(40, 92, 240, 40, '動詞が二つ → 文が二つ分', C.red, FILL.red, 14)],
    '動詞が二つ → 関係代名詞などがある', RED),
  S('手順2：主になる文を作ります。This is the book. が骨組みです。',
    [bx(40, 36, 240, 40, 'This is the book.', C.blue, FILL.blue, 16), lb(160, 104, '主節（文の骨組み）', 12, C.gray, 'middle', true)],
    '主節：This is the book.', BLUE),
  S('手順3：残りを見ます。that I read yesterday です。that のあとが「I read」と主語＋動詞になっています。なぜ目的格なの？→ read の目的語（読んだ「もの」）が、先行詞 the book だからです。',
    qa('that のあとが I read なのはなぜ？', 'that のあとに「主語＋動詞」が続く → 目的格。\nread の目的語は先行詞 the book。\n（動詞が続くなら主格）', GREEN, 13),
    '主語＋動詞が続く → 目的格', GREEN),
  S('手順4：先行詞の直後に置きます。the book の直後に that I read yesterday を置けば完成です。関係詞のまとまりは、説明する名詞のすぐ後ろです。',
    [bx(10, 34, 70, 32, 'This is', C.blue, FILL.blue, 13), bx(86, 34, 82, 32, 'the book', C.main, FILL.warm, 13), bx(174, 34, 138, 32, 'that I read yesterday', C.green, FILL.green, 12), ar(240, 70, 130, 70, C.green), lb(160, 104, 'This is the book that I read yesterday.', 13, C.ink, 'middle', true)],
    '先行詞の直後に関係詞のまとまり', GREEN),
  S('主格との区別です。a friend who lives in Osaka は、who のあとが動詞（lives）なので主格です。the book that I read は、that のあとが主語＋動詞（I read）なので目的格です。動詞の形は先行詞に合わせます。',
    tbl(8, 14, [52, 98, 150], 34, [['', '後ろの形', '例'], ['主格', 'who＋動詞', 'a friend who lives in Osaka'], ['目的格', 'that＋主語＋動詞', 'the book that I read']], BLUE, 10),
    '直後が動詞 → 主格　直後が主語 → 目的格', BLUE),
  S('目的格の関係代名詞は省略できます。The girl (whom) I met yesterday is Ken\'s sister. 語群に who や which や that がなくても、名詞のすぐあとに「主語＋動詞」が続く形なら、省略された目的格だと考えます。',
    [bx(10, 20, 300, 34, "The girl (whom) I met yesterday is Ken's sister.", C.blue, FILL.blue, 12), ar(120, 58, 120, 76, C.main), bx(40, 78, 240, 36, '名詞の直後に「主語＋動詞」→\n省略された目的格', C.green, FILL.green, 12)],
    '語群になくても、目的格が省略されている', GREEN),
  S('まとめ。語群の動詞の数を数えます。二つあれば、関係代名詞・接続詞・不定詞・動名詞のどれかが含まれています。先行詞を見つけ、関係詞のまとまりをその直後に置きます。',
    chain(['① 動詞の数を数える（二つ → 文が二つ分）', '② 主節の骨組みを作る', '③ 先行詞の直後に関係詞のまとまりを置く'], [RED, BLUE, GREEN], 14, 34, 14, 12),
    '動詞の数 → 骨組み → 先行詞の直後', YELLOW),
], '関係代名詞は、先行詞の直後に置く');

// ── 条件英作文②：指定された語句を必ず使う ──
// SEC koko_eigo_s407 0
const f_s407 = show([
  S('「have been to を使って書きなさい」のような指定があるとき、語句を入れることだけ考えると文が不自然になります。指定語句は、文のどこに置くかを先に決めてから、まわりをうめます。',
    [head('指定語句があるとき', 14), ...chain(['① 語句の品詞・はたらきを確認', '② 文のどこに来るかを決める', '③ 主語を決める', '④ 前後をうめる'], [BLUE, GREEN, MAIN, PURPLE], 28, 22, 6, 12)],
    '語句を中心に文を組み立てる', BLUE),
  S('なぜ語句を先に置くの？→ 指定語句を文の途中に押しこむと、まわりの語順がくずれるからです。語句を紙に書き、前後に空欄を作ってからうめると安定します。',
    qa('語句を先に置くの？', '後から押しこむと語順がくずれる。\n語句を先に置き、前後に空欄を作ってうめる。\n（品詞で置き場所が決まる）', BLUE, 13),
    '語句を先に置き、まわりをうめる', BLUE),
  S('例1：have been to（〜へ行ったことがある）。現在完了の動詞句なので述語になります。主語を I にして、場所を入れます。I have been to Kyoto three times.',
    [...chips([['I', BLUE], ['have been to', RED], ['Kyoto', GREEN], ['three times', GREEN]], 20, { size: 13, h: 30 }), lb(160, 82, 'I have been to Kyoto three times.', 13, C.ink, 'middle', true), lb(160, 110, '動詞句 → 述語になる', 12, C.gray, 'middle', true)],
    'have been to ＝述語。主語 I を決めてうめる', GREEN),
  S('have gone to ではだめなの？→ have gone to は「行ってしまって、今ここにいない」という意味になり、経験を表せません。しかも問題は have been to を指定しているので、条件も満たしません。',
    qa('have gone to ではだめ？', 'have gone to ＝ 行ってしまって今ここにいない。\n「行ったことがある」は have been to。\n指定された語句でもないので、条件も外れる。', RED, 12),
    '経験は have been to', RED),
  S('主語が三人称単数なら have been to を has been to に変えます。My brother has been to Australia. 語形変化が許されるときは、主語と時制に合わせて活用します。',
    [bx(14, 22, 140, 34, 'I have been to', C.blue, FILL.blue, 13), bx(166, 22, 140, 34, 'My brother has been to', C.green, FILL.green, 11), lb(160, 86, 'My brother has been to Australia.', 13, C.ink, 'middle', true), lb(160, 112, '主語に合わせて have → has', 12, C.gray, 'middle', true)],
    '主語が三人称単数 → has been to', GREEN),
  S('例2：as 〜 as（〜と同じくらい）は形容詞をはさみます。This book is as interesting as that one. 間は必ず原級です。例3：too 〜 to 〜 は This bag is too heavy for me to carry. です。',
    [bx(12, 14, 296, 34, 'This book is as interesting as that one.', C.green, FILL.green, 12), lb(160, 66, 'as と as の間は原級', 12, C.gray, 'middle', true), bx(12, 86, 296, 34, 'This bag is too heavy for me to carry.', C.green, FILL.green, 12), lb(160, 138, 'for 人 は to の前に入れてもよい', 11, C.gray, 'middle', true)],
    '語句の型に合わせて、まわりをうめる', GREEN),
  S('例4：名詞が指定されたとき。environment なら、主語か目的語に置きます。We should think about the environment. We can start by using our own bags.',
    [bx(12, 14, 296, 34, 'We should think about the environment.', C.green, FILL.green, 12), bx(12, 62, 296, 34, 'We can start by using our own bags.', C.green, FILL.green, 12), lb(160, 118, '名詞 → 主語か目的語に置く', 12, C.gray, 'middle', true)],
    '名詞の指定語句は、主語か目的語に', GREEN),
  S('まとめ。品詞とはたらきを確認し、置き場所を決め、主語を決めて、前後をうめる。書き終えたら、指定語句がすべて使われているかを指さして確認します。',
    chain(['語句のはたらき → 置き場所を決める', '主語を決める → 前後をうめる', '指定語句をすべて使ったか、指さし確認'], [BLUE, GREEN, YELLOW], 14, 34, 14, 12),
    '先に置き場所、最後に指さし確認', YELLOW),
], '指定語句は、置き場所を先に決めてからまわりをうめる');

// ── 条件英作文③：絵・表・グラフを英語で説明する ──
// SEC koko_eigo_s408 0
const f_s408 = show([
  S('絵の説明では、想像を書く必要はありません。見えているものを見えているとおりに書けば得点になります。書く順番は、だれが、何をしている、どこで、付け足し、の順です。',
    [head('絵の説明を書く順番', 14), ...chain(['① 主語（だれ・何が）', '② 動詞（何をしている）', '③ 場所（どこで）', '④ 付け足し（だれと・何を使って）'], [BLUE, GREEN, MAIN, PURPLE], 28, 22, 6, 12)],
    '主語 → 動詞 → 場所 → 付け足し', BLUE),
  S('例：公園で少年が犬と走っている絵。A boy is running in the park. His dog is running with him. 見えたとおりに、短い文を二つ並べます。',
    [bx(20, 10, 280, 92, undefined, C.green, FILL.green), ci(100, 56, 14, 'boy', C.blue, FILL.blue, 10), ci(200, 70, 12, 'dog', C.main, FILL.warm, 10), ar(120, 56, 150, 56, C.blue), ar(185, 70, 160, 70, C.main), lb(160, 20, 'park', 11, C.green, 'middle', true), lb(160, 122, 'A boy is running in the park.', 13, C.ink, 'middle', true)],
    '見えたとおりに書く', GREEN),
  S('なぜ現在進行形なの？→ 絵は「今、動作の途中」を描いているからです。進行形は be動詞 ＋ 〜ing で、is run は誤りです。run は n を重ねて running とつづります。',
    qa('なぜ is running なの？', '絵は「いま〜している」場面。\nだから be動詞 ＋ 〜ing（現在進行形）。\nrun は n を重ねて running。（is run は誤り）', BLUE, 13),
    '絵の動作 ＝ be動詞＋〜ing', BLUE),
  S('主語が複数なら be動詞は are です。Two boys are playing soccer. 数えられる名詞の単数には a／an をつけ、複数には s をつけます。',
    [bx(12, 18, 140, 34, 'A boy is playing', C.blue, FILL.blue, 12), bx(168, 18, 140, 34, 'Two boys are playing', C.green, FILL.green, 12), lb(160, 82, 'Two boys are playing soccer.', 13, C.ink, 'middle', true), lb(160, 110, '単数 → a／is　複数 → s／are', 12, C.gray, 'middle', true)],
    '主語の数に be動詞を合わせる', GREEN),
  S('身につけている状態は wear の進行形です。He is wearing a red cap. 持っているものは holding。左右を言うときは The girl on the left is holding a book. のように書きます。',
    [bx(12, 10, 296, 32, 'He is wearing a red cap.', C.green, FILL.green, 13), bx(12, 52, 296, 32, 'The girl on the left is holding a book.', C.green, FILL.green, 12), bx(12, 94, 296, 32, 'There is a big tree in front of the house.', C.green, FILL.green, 12)],
    'wearing／holding／There is を使う', GREEN),
  S('絵から読み取れないことは書きません。名前、年齢、気持ちの理由を書くと「資料と一致しない」と判断されます。look ＋ 形容詞（They look happy.）は絵から言えるので使えます。',
    [bx(12, 12, 140, 54, '書かない\n名前・年齢\n気持ちの理由', C.red, FILL.red, 12), bx(168, 12, 140, 54, '書ける\n見えること\nThey look happy.', C.green, FILL.green, 12), lb(160, 98, '資料にないことを書くと食いちがいで減点', 12, C.red, 'middle', true)],
    '絵にないことは書かない', RED),
  S('まとめ。絵の説明は一文8〜10語で十分です。短く正確な文を並べるほうが、長い一文より高く評価されます。',
    chain(['主語 → 動詞（現在進行形）→ 場所', '一文は8〜10語、短く正確に', '絵にないことは書かない'], [BLUE, GREEN, RED], 14, 34, 14, 13),
    '見たまま、短く、正確に', YELLOW),
], '絵は「だれが・何をしている・どこで」の順に説明する');

// ── 条件英作文④：対話の空所に一文を書く ──
// SEC koko_eigo_s409 0
const f_s409 = show([
  S('選択肢のない空所補充は難しそうですが、前後がヒントをくれます。例題の会話です。A の荷物が重く、B の言葉が空所で、そのあと A は Yes, please. と答えています。',
    [bx(12, 8, 296, 32, 'A: I have a lot of bags. They are very heavy.', C.blue, FILL.blue, 12), bx(12, 50, 296, 32, 'B:  （　　　　　　　　　　）', C.purple, FILL.purple, 14), bx(12, 92, 296, 32, 'A: Yes, please. Thank you very much.', C.blue, FILL.blue, 12)],
    '空所に入る一文を考える', BLUE),
  S('まず直後を見ます。Yes, please. は「お願いします」という返事です。なぜ申し出だとわかるの？→ 何かを頼まれたときの返事は Sure. や Of course. です。Yes, please. は「〜しましょうか」と申し出られたときの返事だからです。',
    qa('Yes, please. なら何を言った？', 'Yes, please. ＝ 申し出への返事。\n（依頼への返事なら Sure. ／ Of course.）\nだから B は「手伝いましょうか」と申し出た。', BLUE, 13),
    '直後の返事から、書く文の種類が決まる', BLUE),
  S('荷物を持っているのは A なので、手伝うのは B です。主語は I になります。解答例は Shall I help you? です。Can you help me? だと主語が逆になって誤りです。',
    [bx(14, 14, 130, 32, 'Can you help me?', C.red, FILL.red, 12), lb(160, 30, '×', 16, C.red, 'middle', true), bx(176, 14, 130, 32, 'Shall I help you?', C.green, FILL.green, 12), lb(160, 80, '荷物を持つのは A。手伝うのは B。', 12, C.ink, 'middle', true), lb(160, 104, '主語は I（私が手伝いましょうか）', 12, C.ink, 'middle', true)],
    '申し出 ＝ Shall I 〜?', GREEN),
  S('直後の返事から逆算する表です。Yes, I do. なら Do you 〜?、Yes, I did. なら Did you 〜?、Yes, please. なら Shall I 〜?、Sure. なら Can you 〜?、Because なら Why、場所なら Where です。',
    tbl(10, 8, [140, 160], 20, [['直後の返事', '書く文'], ['Yes, I do.', 'Do you 〜?'], ['Yes, I did.', 'Did you 〜?'], ['Yes, please.', 'Shall I 〜?'], ['Sure. / Of course.', 'Can you 〜?'], ['Because 〜', 'Why 〜?'], ['場所を答える', 'Where 〜?']], BLUE, 11),
    '返事の形が、問いの形を決める', BLUE),
  S('もう一つ例です。A: （　　　） B: Because I had a fever. B は Because で答えているので、理由をたずねる Why の疑問文です。解答例：Why were you absent yesterday?',
    [bx(12, 14, 296, 32, 'A:  （　　　　　　　　）', C.purple, FILL.purple, 14), bx(12, 56, 296, 32, 'B: Because I had a fever.', C.blue, FILL.blue, 13), ar(160, 90, 160, 104, C.main), bx(12, 106, 296, 32, 'Why were you absent yesterday?', C.green, FILL.green, 13)],
    'Because で答える → Why の疑問文', GREEN),
  S('直前からも逆算できます。直前が困りごとなら申し出や助言、知らせなら感想（That\'s great. ／ That\'s too bad.）、誘いなら承諾か断りです。',
    [bx(10, 10, 130, 30, '困りごと', C.blue, FILL.blue, 13), bx(160, 10, 150, 30, 'Shall I help you?', C.green, FILL.green, 12), bx(10, 52, 130, 30, '知らせ', C.blue, FILL.blue, 13), bx(160, 52, 150, 30, "That's great.", C.green, FILL.green, 12), bx(10, 94, 130, 30, '誘い', C.blue, FILL.blue, 13), bx(160, 94, 150, 30, 'Sure.／I can\'t.', C.green, FILL.green, 12)],
    '直前の内容からも、答えの形を絞れる', GREEN),
  S('まとめ。二段階で決めます。まず「疑問文か、平叙文か」、次に「疑問詞が要るか」。書いたら、直前とも直後ともつながるか、主語と動詞、文末の記号（? か .）を確かめます。',
    chain(['① 疑問文か、平叙文か', '② 疑問詞が要るか', '③ 直前・直後につながるか／文末は ? か .'], [BLUE, GREEN, YELLOW], 14, 34, 14, 13),
    '冒険せず、書ける表現で正確に', YELLOW),
], '空所の前後から、書くべき文の形を逆算する');

// ── 条件英作文⑤：メール・手紙の返信を書く ──
// SEC koko_eigo_s410 0
const f_s410 = show([
  S('外国の友達からのメールに返事を書く問題は、公立入試の定番です。相手が質問をしてくれているので、書く内容は向こうが決めてくれています。例題は、オーストラリアの友達 Emma からのメールです。',
    [bx(12, 8, 296, 100, undefined, C.blue, FILL.blue), lb(24, 24, 'Emma のメール', 12, C.blue, 'start', true), lb(24, 46, 'I will visit Japan next month.', 12, C.ink, 'start', true), lb(24, 68, 'Where do you want to take me?', 13, C.red, 'start', true), lb(24, 90, 'I want to see something Japanese.', 12, C.ink, 'start', true)],
    '返信を25語以上35語以内で書く', BLUE),
  S('返信には決まった型があります。①書き出し ②相手の質問への答え ③付け足し ④結び。型に沿って書けば、内容を考える時間を質問への答えに使えます。',
    chain(['① 書き出し（Thank you for your e-mail.）', '② 質問への答え（ここが中心）', '③ 付け足し（理由・具体例）', '④ 結び（See you soon. など）'], [BLUE, RED, GREEN, PURPLE], 8, 28, 10, 12),
    '返信の四部構成', BLUE),
  S('なぜ②が中心なの？→ 相手が知りたいのは自分の質問への答えだからです。採点でも配点の中心はここです。だから、書き出しと結びは短くまとめ、答えに語数を使います。',
    qa('なぜ②の答えが中心なの？', '相手がいちばん知りたいのは、質問への答え。\n配点の中心もここ。\n書き出しと結びは短く、答えに語数を使う。', RED, 13),
    '質問に答えたかどうかで点が動く', RED),
  S('質問を見つけます。メール本文の中で「?」で終わる文に線を引きます。ここでは Where do you want to take me? の1文です。相手の語句を借りて、語順を平叙文に直します。',
    [bx(12, 14, 296, 34, 'Where do you want to take me?', C.red, FILL.red, 14), ar(160, 50, 160, 70, C.main), bx(12, 72, 296, 34, 'I want to take you to Nara Park.', C.green, FILL.green, 14), lb(160, 128, '質問の語句を借りる → つづりミスを防げる', 12, C.gray, 'middle', true)],
    '質問の語句を借りて、答えの文にする', GREEN),
  S('take you to Nara Park の to を落とさないようにします。「人を場所へ連れて行く」は take ＋ 人 ＋ to ＋ 場所です。質問文にも to があるので、写せば防げます。',
    [bx(14, 20, 130, 34, 'take you Nara Park', C.red, FILL.red, 12), lb(160, 37, '→', 16, C.main, 'middle', true), bx(176, 20, 130, 34, 'take you to Nara Park', C.green, FILL.green, 12), lb(160, 86, '行き先の前には to が要る', 13, C.ink, 'middle', true), lb(160, 112, '（home は例外：go home）', 12, C.gray, 'middle', true)],
    '行き先の前に to を忘れない', GREEN),
  S('模範解答は4文です。1文目 5語、2文目 8語、3文目 6語、4文目 10語。5＋8＋6＋10＝29語で、25語以上35語以内を満たします。書き出しの Thank you for your e-mail. も語数に入れます。',
    tbl(8, 10, [236, 62], 24, [['文', '語数'], ['Thank you for your e-mail.', '5語'], ['I want to take you to Nara Park.', '8語'], ['You can see many deer there.', '6語'], ['We can also visit an old temple near the park.', '10語'], ['合計 5＋8＋6＋10', '29語']], GREEN, 10),
    '29語 → 25語以上35語以内を満たす', GREEN),
  S('文法の検算です。deer は単数も複数も同じ形なので many deer が正しく、many deers は誤りです。old は母音の音で始まるので an old temple。特定の公園なので the park。時制は現在形と can にそろえています。',
    [bx(12, 12, 140, 30, 'many deers', C.red, FILL.red, 13), lb(160, 27, '→', 16, C.main, 'middle', true), bx(168, 12, 140, 30, 'many deer', C.green, FILL.green, 13), bx(12, 52, 296, 30, 'a old temple → an old temple', C.green, FILL.green, 12), bx(12, 92, 296, 30, 'near the park（特定の公園 → the）', C.green, FILL.green, 12)],
    'deer は単複同形／an old／the park', GREEN),
  S('最後に内容の検算です。書き終えたら、メール本文の「?」の文に戻り、すべてに答えているかを確かめます。質問が二つあれば答えも二つ書きます。Emma の質問と「日本らしいものが見たい」という希望の両方に応えられています。',
    chain(['書き出し → 質問への答え → 付け足し → 結び', 'メールの「?」に、すべて答えたか', '語数・つづり・時制を確認'], [BLUE, RED, GREEN], 14, 34, 14, 12),
    '質問への答えが、すべてそろっているか', YELLOW),
], 'メールの返信は、相手の質問に順に答える');

// ── 自由英作文③：賛成・反対を述べる ──
// SEC koko_eigo_s413 0
const f_s413 = show([
  S('「学校にスマートフォンを持ちこむべきか」のような問いには、正しい答えがあるわけではありません。採点されるのは、立場の正しさではなく、立場を最後まで守れているかどうかです。',
    [bx(30, 14, 260, 40, '学校でスマートフォンを\n使ってもよい', C.blue, FILL.blue, 14), bx(20, 84, 120, 40, '賛成', C.green, FILL.green, 15), bx(180, 84, 120, 40, '反対', C.red, FILL.red, 15), ar(120, 56, 80, 82, C.main), ar(200, 56, 240, 82, C.main)],
    '採点されるのは「立場を守れているか」', BLUE),
  S('立場を示す表現です。賛成は I agree with this idea. や I think so, too.、反対は I do not agree with this idea. や I disagree. です。難しい語は要りません。',
    [bx(12, 12, 296, 54, '賛成\nI agree with this idea.／I think so, too.', C.green, FILL.green, 13), bx(12, 78, 296, 54, '反対\nI do not agree with this idea.／I disagree.', C.red, FILL.red, 13)],
    '第1文で立場をはっきり示す', GREEN),
  S('なぜ正しいと思うほうを選ばないの？→ 本当にどちらが正しいかを考えると時間を失うからです。採点で立場の優劣はつきません。英語で理由を二つ書けるほうを選びます。',
    qa('正しいほうを選ばないの？', '採点で立場の優劣はつかない。\n正しさを考えると時間を失う。\n英語で理由を書けるほうを選ぶ。', BLUE, 13),
    '書きやすいほうを選ぶ', BLUE),
  S('立場を一貫させます。最初に賛成と書きながら、最後に反対の結論を書くと大きく減点されます。However のあとの文が、自分の立場を打ち消していないか確かめます。',
    [bx(10, 8, 300, 34, 'I agree with this idea.  ...  However, I think students should not use smartphones.', C.red, FILL.red, 10), ar(160, 44, 160, 60, C.red), bx(40, 62, 240, 30, '賛成と言って、結論が反対 → 大きな減点', C.red, FILL.red, 12)],
    '立場が途中で入れかわるのは大きな減点', RED),
  S('反対意見に触れるなら、最後は自分の立場に戻します。Some people say smartphones are dangerous. However, I still think they are useful. のように書きます。',
    [bx(12, 14, 296, 34, 'Some people say smartphones are dangerous.', C.gray, FILL.gray, 12), ar(160, 50, 160, 66, C.main), bx(12, 68, 296, 34, 'However, I still think they are useful.', C.green, FILL.green, 12), lb(160, 124, 'ふれたあと、自分の立場に戻して閉じる', 12, C.gray, 'middle', true)],
    'However のあとで自分の立場に戻す', GREEN),
  S('模範解答は4文・27語です。1文目 5語（立場）、2文目 7語（理由）、3文目 7語（具体例）、4文目 8語（条件）。5＋7＋7＋8＝27語で、25語以上35語以内を満たします。',
    tbl(8, 8, [88, 164, 48], 24, [['役わり', '文', '語数'], ['立場', 'I agree with this idea.', '5'], ['理由', 'Using smartphones at school helps us study.', '7'], ['具体例', 'For example, we can find information quickly.', '7'], ['条件', 'However, we should not use them during classes.', '8'], ['合計', '5＋7＋7＋8', '27']], GREEN, 9),
    '27語 → 25語以上35語以内を満たす', GREEN),
  S('文法の検算です。Using smartphones at school は動名詞の主語で単数扱いなので、動詞は helps です。主語が長いときは、直前の名詞ではなくかたまりの中心（Using）に合わせます。information は数えられない名詞なので a も s もつけません。',
    [bx(10, 12, 140, 34, 'Using smartphones help', C.red, FILL.red, 11), lb(160, 29, '→', 16, C.main, 'middle', true), bx(170, 12, 140, 34, 'Using smartphones helps', C.green, FILL.green, 11), bx(12, 60, 296, 30, 'information に a も s もつけない', C.green, FILL.green, 12), bx(12, 98, 296, 30, 'during のあとは名詞（during classes）', C.green, FILL.green, 12)],
    '動名詞の主語は単数 → helps', GREEN),
  S('一貫性の検算です。第1文は賛成。第4文の However は「授業中は別」という条件で、賛成の立場を打ち消していません。「使ってよいが、授業中は別」という主張が最後まで通っています。まとめ：第1文と最終文を見比べて、同じ立場かを確かめます。',
    chain(['第1文：I agree with this idea.（賛成）', '最終文：授業中は別（条件）', '同じ立場 → 一貫している'], [GREEN, GREEN, YELLOW], 14, 34, 14, 12),
    '第1文と最終文が同じ立場なら合格', YELLOW),
], '賛成・反対は、立場を決めて最後まで守る');

// ── 自由英作文④：理由に具体例を足して厚くする ──
// SEC koko_eigo_s414 0
const f_s414 = show([
  S('「楽しいから」だけでは、理由として弱く、語数も稼げません。足す前の文は I like winter the best. I can enjoy skiing. で9語です。',
    [bx(12, 24, 296, 54, 'I like winter the best.\nI can enjoy skiing.', C.gray, FILL.gray, 15), lb(160, 104, '9語（5語＋4語）', 13, C.red, 'middle', true)],
    '理由だけだと、弱くて短い', RED),
  S('そこに具体例を一文足します。Last year, we went to Nagano and had a great time. これだけで、説得力と語数が一気に増えます。足したあとは25語です。',
    [bx(12, 8, 296, 28, 'I like winter the best.', C.blue, FILL.blue, 12), bx(12, 42, 296, 28, 'In winter, I can enjoy skiing with my family.', C.blue, FILL.blue, 12), bx(12, 76, 296, 36, 'Last year, we went to Nagano and had a great time.', C.green, FILL.green, 12), lb(160, 130, '5語＋9語＋11語＝25語', 13, C.red, 'middle', true)],
    '具体例を足すと25語になる', GREEN),
  S('なぜ具体例が効くの？→ 抽象的な理由に自分の経験が加わると、読む人が場面を思いうかべられるからです。しかも自分の経験なら英語も簡単です。',
    qa('具体例が効くのはなぜ？', '抽象的な理由に、自分の経験が加わる。\n場面が見えるので説得力が増す。\n自分の経験だから、英語も簡単で語数も稼げる。', GREEN, 13),
    '具体例は、効率のよい武器', GREEN),
  S('具体例の合図になる表現です。For example,（たとえば）、Last year, I 〜.、When I was ten, I 〜.、I have 〜.（経験を表す現在完了）。具体例は一つで十分です。',
    [head('具体例の合図', 14), ...chips(['For example,', 'Last year, I ~', 'When I was ten, I ~', 'I have ~'], 30, { size: 13, h: 28 }), lb(160, 110, '具体例は一つで十分', 13, C.ink, 'middle', true)],
    '合図を使って、具体例につなぐ', BLUE),
  S('具体例は「いつ・どこで・何をした」の三点だけで書きます。Last year（いつ）、to Nagano（どこで）、we went（何をした）。細かく書こうとすると語数を使いすぎ、文法ミスも増えます。',
    cols(['いつ\nLast year', 'どこで\nNagano', '何をした\nwent ... had a great time'], 20, 56, [BLUE, GREEN, MAIN], 12, 10, 8),
    '三点だけでまとめる', BLUE),
  S('時制の切りかえに注意します。理由の文は現在形（一般的なこと）、具体例は過去形（自分の経験）になることが多いです。Last year があるので went と had にそろえます。go は went、have は had です。',
    [bx(10, 20, 140, 50, '理由\nI can enjoy skiing.\n（現在形）', C.blue, FILL.blue, 11), ar(152, 45, 168, 45, C.main), bx(170, 20, 140, 50, '具体例\nwe went ... had\n（過去形）', C.green, FILL.green, 11), lb(160, 100, 'Last year があるので過去形', 13, C.ink, 'middle', true), lb(160, 124, 'go → went　have → had', 12, C.gray, 'middle', true)],
    '現在形から過去形へ、切りかえる', GREEN),
  S('enjoy skiing の形も確かめます。なぜ enjoy to ski ではないの？→ enjoy は目的語に動名詞（〜ing）だけをとる動詞だからです。同じ仲間に finish, stop, practice, mind があります。want や hope は to 不定詞だけです。',
    qa('enjoy to ski ではだめ？', 'enjoy は動名詞（〜ing）だけをとる。\n仲間：finish, stop, practice, mind\n（want, hope は to 不定詞だけ）', GREEN, 13),
    'enjoy ＋ 〜ing', GREEN),
  S('経験談はあらかじめ用意しておきます。旅行、部活、読書、手伝い、勉強の5つを、各2文ほどで英語に直し、文法を確認しておきます。本番では、覚えている文に、テーマに合わせた一文を足します。',
    [...chips(['旅行', '部活', '読書', '手伝い', '勉強'], 14, { size: 13, h: 28 }), bx(30, 56, 260, 30, '確認済みの文を2文ずつ用意', C.green, FILL.green, 13), ar(160, 88, 160, 100, C.main), bx(30, 102, 260, 30, '覚えている文＋テーマに合わせた一文', C.main, FILL.yellow, 12)],
    '覚えた文 ＋ テーマに合わせた一文', YELLOW),
], '理由に具体例を一文足して、説得力と語数を増やす');

// ── 公立入試の全体像③：解く順番の戦略 ──
// SEC koko_eigo_s418 0
const f_s418 = show([
  S('テストは前から順に解くもの、と決めつけていませんか。問題用紙に書いてあるのは配点だけで、「この順で解け」とは書いてありません。リスニングは放送の順で固定ですが、大問2以降は並べかえられます。',
    [bx(10, 20, 300, 30, 'リスニング（放送の順・固定）', C.gray, FILL.gray, 13), lb(160, 76, '大問2以降は、解く順番を自分で決められる', 13, C.ink, 'middle', true), ...cols(['大問2', '大問3', '大問4', '大問5'], 92, 36, [BLUE], 13, 14, 8)],
    '自由に並べかえられるのは大問2以降', BLUE),
  S('推奨の順番です。大問1 → 大問2（語形変化）→ 大問5（英作文）→ 大問3（会話文）→ 大問4（長文）。英作文を先に書くのが、最も効果の大きい変更です。',
    [...cols(['大問1', '大問2', '大問5', '大問3', '大問4'], 24, 42, [GRAY, BLUE, RED, BLUE, BLUE], 12, 10, 6), lb(160, 86, '① → ② → ⑤ → ③ → ④', 15, C.red, 'middle', true), ar(160, 100, 160, 110, C.red), lb(160, 126, '英作文を3番目に前倒しする', 12, C.gray, 'middle', true)],
    '大問1 → 2 → 5 → 3 → 4', RED),
  S('理由①：時間切れのリスクを構造的に消せます。英作文は最後にあるため、時間が押すと真っ先に犠牲になります。先に書けば、その12点は確定します。長文で数点落とすより、英作文で12点まるごと落とすほうがはるかに痛いからです。',
    qa('なぜ英作文を先に書くの？①', '英作文は最後にあるので、\n時間が押すと真っ先に犠牲になる。\n先に書けば、その12点は確定する。', RED, 13),
    '理由①：時間切れで白紙を防げる', RED),
  S('理由②：頭が疲れる前に書けます。英作文は自分で英文を作る作業で、読解より頭を使います。50分の終盤、疲れた状態で書くと、三単現の s や複数形の s が落ちやすくなります。',
    [bx(14, 20, 130, 60, '前半\n頭が元気\n正確に書ける', C.green, FILL.green, 13), bx(176, 20, 130, 60, '終盤\n疲れている\ns を落としやすい', C.red, FILL.red, 13), ar(146, 50, 174, 50, C.main), lb(160, 110, '英作文は「作る」作業だから先に', 13, C.ink, 'middle', true)],
    '理由②：頭が疲れる前に書ける', GREEN),
  S('理由③：長文の内容に引きずられません。英作文のテーマが長文と似ていると、長文で読んだ表現をうろ覚えのまま使って、かえって不正確になることがあります。先に自分の言葉で書いておくほうが安全です。',
    qa('なぜ英作文を先に書くの？③', '長文を先に読むと、うろ覚えの表現を使いがち。\nかえって不正確になる。\n先に自分の言葉で書けば安全。', GREEN, 12),
    '理由③：長文に引きずられない', GREEN),
  S('ただし、英作文に7分以上かけてはいけません。「先に書く」は「じっくり書く」ではありません。型に沿って4文を書き、細かい直しは最後の見直しの5分に回します。',
    [bx(30, 16, 260, 40, '英作文は7分まで', C.red, FILL.red, 16), ar(160, 58, 160, 74, C.main), bx(30, 76, 260, 40, '型に沿って4文を書く\n細かい直しは見直しの5分で', C.green, FILL.green, 13)],
    '「先に書く」は「じっくり書く」ではない', RED),
  S('順番を変えると、解答欄のずれが起きやすくなります。ずれると以降がすべてずれて、10点以上を失うことがあります。防ぐ手順は三つです。',
    chain(['① 大問ごとに、解答用紙の番号を指で確認', '② 飛ばした設問は問題用紙に大きく○、解答欄は空欄', '③ 最後の5分は、空欄が残っていないか全体を確認'], [BLUE, BLUE, BLUE], 8, 36, 12, 12),
    '大問を終えるたびに、番号を指でおさえる', BLUE),
  S('飛ばした設問は、なぜ空欄のままにするの？→ 仮の答えを書くと、戻ったときに「解いた問題」に見えて見直しから外れるからです。空欄なら一目で残りがわかります。ただし終了3分前になったら、記号選択の空欄は何かを書きます。無記入は0点です。',
    qa('なぜ空欄にしておくの？', '仮の答えを書くと「解いた問題」に見える。\n空欄なら、あとで一目で残りがわかる。\n終了3分前に、記号選択の空欄は必ず埋める。', BLUE, 12),
    '飛ばした問題は空欄のまま', BLUE),
  S('まとめ。時間が足りない人は、英作文を先に書く順番にして、確認手順を足します。過去問で毎回5分以上余る人は、順番を変えなくてかまいません。本番の前に、同じ順番・同じ時間で通して解く練習を最低3回します。',
    chain(['時間が足りない人 → 英作文を先に', '確認手順（番号を指で押さえる）を足す', '本番前に最低3回、同じ順番で練習'], [RED, BLUE, GREEN], 14, 34, 14, 12),
    '練習で3回、本番と同じ順番で通す', YELLOW),
], '英作文を先に書き、解答欄のずれを防ぐ手順を持つ');

// ── 公立入試の全体像⑤：目標点別の戦い方 ──
const SEGN = ['リスニング', '語形変化', '会話文', '長文', '英作文'];
const SEGC: Col[] = [BLUE, GREEN, MAIN, PURPLE, RED];
// 積み上げの横棒。pts は5つの得点、y は棒の上端、label は左上の見出し
const stackBar = (pts: number[], y: number, label: string, names: boolean): DiagramElement[] => {
  const k = 2.9;
  let x = 15;
  const out: DiagramElement[] = [lb(15, y - 6, label, 11, C.ink, 'start', true)];
  pts.forEach((p, i) => {
    out.push(bx(x, y, p * k, 26, names ? `${SEGN[i]}\n${p}` : String(p), SEGC[i][0], SEGC[i][1], names ? 9 : 11));
    x += p * k;
  });
  return out;
};
const T100 = [24, 16, 20, 28, 12];
const T60 = [16, 14, 12, 12, 6];
const T80 = [20, 16, 16, 20, 8];
const T95 = [23, 16, 19, 25, 12];
// SEC koko_eigo_s420 0
const f_s420 = show([
  S('100点満点の内訳です。リスニング24、語形変化16、会話文20、長文28、英作文12。合計は24＋16＋20＋28＋12＝100点です。同じ入試でも、目標点によってやるべきことは正反対になります。',
    [...stackBar(T100, 30, '満点：100点', true)],
    '満点の内訳：24＋16＋20＋28＋12＝100', BLUE),
  S('目標60点の設計です。16＋14＋12＋12＋6＝60。長文は28点のうち12点だけ取ればよい設計です。満点の棒とくらべると、長文と会話文の取りこぼしを大きく見こんでいます。',
    [...stackBar(T100, 24, '満点：100点', false), ...stackBar(T60, 70, '目標60点：16＋14＋12＋12＋6', false)],
    '目標60点：長文は12点だけ取る', BLUE),
  S('目標80点の設計です。20＋16＋16＋20＋8＝80。語形変化は満点が前提で、長文は記述にも取りかかって部分点をねらいます。英作文は型どおりに4文書いて8点です。',
    [...stackBar(T100, 14, '満点：100点', false), ...stackBar(T60, 54, '目標60点', false), ...stackBar(T80, 94, '目標80点：20＋16＋16＋20＋8', false)],
    '目標80点：語形変化は満点、記述は部分点', GREEN),
  S('目標95点の設計です。23＋16＋19＋25＋12＝95。ここまで来ると、差がつくのは日本語記述の書き方と、英作文の文法的な正確さだけです。',
    [...stackBar(T80, 8, '目標80点', false), ...stackBar(T95, 48, '目標95点：23＋16＋19＋25＋12', false), lb(160, 104, '差がつく：長文の記述・英作文の正確さ', 12, C.red, 'middle', true), lb(160, 126, '三単現の s や冠詞を1つ落とすと 1〜2点引かれる', 11, C.gray, 'middle', true)],
    '目標95点：見直しの精度が最後の勝負', RED),
  S('なぜ目標60点の人は、長文の日本語記述を最初から捨てるの？→ 長文28点のうち12点だけ取ればよいので、内容一致と語句選択だけを拾えば足ります。捨てると長文の時間が13分から8分に減り、その5分を語形変化と英作文の確実化に回せます。',
    qa('60点の人は記述を捨てるの？', '長文は28点中12点でよい。\n内容一致と語句選択だけ拾う。\n長文が13分→8分、浮いた5分を\n語形変化と英作文の確実化に回す。', BLUE, 12),
    '60点：浮いた5分を、確実な得点に回す', BLUE),
  S('捨てるとは「見ない」ことではありません。一定時間で解けなければ即座に離れる、と決めておくことです。捨て候補は、長文の「40字以内で日本語で説明」型（4点・3分以上）、会話文の並べかえ型（3点）、リスニング最後の「英語で答える」型（3点）です。',
    [bx(12, 8, 296, 38, '長文：40字以内の日本語で説明（4点・3分以上）', C.red, FILL.red, 12), bx(12, 52, 296, 38, '会話文：文を並べかえて対話を完成（3点）', C.red, FILL.red, 12), bx(12, 96, 296, 38, 'リスニング：最後の「英語で答える」（3点）', C.red, FILL.red, 12)],
    '捨て候補は、時間のわりに点が小さい設問', RED),
  S('英作文は捨ててはいけません。白紙なら0点ですが、「I think 〜. I have two reasons. First, 〜. Second, 〜.」の型どおりに4文書けば6〜8点入ります。捨てる対象は「時間をかけても入る点が小さい設問」で、苦手な大問まるごとではありません。',
    [bx(14, 16, 130, 50, '英作文を捨てる\n0点', C.red, FILL.red, 14), bx(176, 16, 130, 50, '型どおり4文\n6〜8点', C.green, FILL.green, 14), lb(160, 98, 'I think ~.  I have two reasons.', 12, C.ink, 'middle', true), lb(160, 118, 'First, ~.  Second, ~.', 12, C.ink, 'middle', true)],
    '英作文は、時間あたりの回収が最も大きい', GREEN),
  S('まとめ。大問ごとの目標を自分で決め、過去問を解くたびにその数字と比べます。「70点だった」ではなく「長文が目標より6点低い」と言えるようにします。捨てる判断は、過去問を3年分解いて実力が見えてから、12月以降に固めます。',
    chain(['目標点 → 大問ごとの数字を決める', '過去問のたびに、目標との差を見る', '捨てる判断は、12月以降に固める'], [BLUE, GREEN, YELLOW], 14, 34, 14, 13),
    '「何点」ではなく「どこが何点低い」と言う', YELLOW),
], '目標点によって、捨てる問題と取り切る問題は変わる');

// ── 難関私立の傾向②：長文の語数・テーマ・設問形式 ──
const insertText = (hi: number): DiagramElement[] => {
  const ss = ['Some schools started a new program last year.', 'Students grew vegetables in the schoolyard.', 'They also cooked lunch with them.', 'Many parents said that the program changed their children.'];
  const mk = ['ア', 'イ', 'ウ', 'エ'];
  const out: DiagramElement[] = [];
  ss.forEach((t, i) => {
    out.push(bx(34, 4 + i * 36, 276, 26, t, C.blue, FILL.blue, 11));
    out.push(ci(16, 4 + i * 36 + 31, 7, mk[i], hi === i ? C.red : C.gray, hi === i ? FILL.red : '#FFFFFF', 9));
  });
  return out;
};
// SEC koko_eigo_s422 0
const f_s422 = show([
  S('脱文挿入は「次の英文が入る最も適切な場所を［ア］〜［エ］から選びなさい」という形式です。例題の本文は4つの文で、各文のあとに［ア］〜［エ］があります。入れる文は At first, the teachers were not sure about it. です。',
    [...insertText(-1)],
    '挿入文：At first, the teachers were not sure about it.', BLUE),
  S('本文を全部読み直さなくても、3つの手がかりで決まります。①指示語 ②接続語 ③冠詞です。',
    [...chain(['① 指示語（this／it／such）', '② 接続語（However／For example／As a result）', '③ 冠詞（the がつく名詞は既出）'], [BLUE, GREEN, PURPLE], 8, 30, 14, 12), ...[]],
    '3つの手がかり：指示語・接続語・冠詞', BLUE),
  S('手がかり①：挿入文の it は、すぐ前に出てきたものを指します。it が何を指すかは、a new program です。つまり a new program が出た直後でなければなりません。なぜなら、指示語の指す内容が前になければ意味が通じないからです。',
    [...insertText(0), ar(160, 100, 160, 100, C.red)],
    'it ＝ a new program → 出た直後', BLUE),
  S('手がかり②：At first は「始めたころは」という時間の起点を示します。最後の［エ］に置くと、プログラムが成果を出したあとに「最初は自信がなかった」と戻ることになり、時系列が逆転します。',
    [bx(14, 10, 292, 30, 'At first ＝ 始めたころは（時の起点）', C.green, FILL.green, 13), ar(160, 42, 160, 56, C.main), ...cols(['始めた', '最初は不安', '野菜を育てた', '親の感想'], 60, 40, [GRAY, RED, BLUE, BLUE], 11, 10, 6), lb(160, 118, '時間の順に並べる → 起点のそば', 12, C.gray, 'middle', true)],
    'At first は、出来事のはじめに置く', GREEN),
  S('なぜ答えは［ア］なの？→ it が a new program を指すので、program が出た直後であること。At first が始めたころを示すので、プログラムを始めた直後であること。2つの手がかりが同じ場所を指します。',
    qa('なぜ［ア］が正解？', 'it ＝ a new program → program の直後\nAt first ＝ 始めたころ → 開始直後\n2つの手がかりが、同じ［ア］を指す。', GREEN, 13),
    '答え：［ア］', GREEN),
  S('接続語の見分け方です。However は前と逆の内容が来る場所。For example は直前が一般論で直後が具体例になる場所。As a result は直前が原因で直後が結果になる場所です。',
    tbl(8, 10, [96, 204], 30, [['接続語', '入る場所'], ['However', '前と逆の内容が来ている場所'], ['For example', '直前が一般論、直後が具体例の場所'], ['As a result', '直前が原因、直後が結果の場所']], BLUE, 11),
    '接続語は、前後の関係を指定する', BLUE),
  S('4つの候補すべてに入れて読み比べる時間はありません。指示語と接続語で候補を2つに絞り、そこだけ読み比べます。',
    [...cols(['ア', 'イ', 'ウ', 'エ'], 20, 40, [GREEN, GRAY, GRAY, GRAY], 16, 30, 12), ar(160, 66, 160, 84, C.main), bx(60, 88, 200, 34, '2つに絞って読み比べる', C.green, FILL.green, 13)],
    '全部読み比べない。2つに絞る', GREEN),
  S('長文のテーマは、実はかなり限られています。環境、食品ロス、AIと仕事、多様性、ボランティア、言語と文化、睡眠と健康の7分野です。背景を知っていれば、数字の読み違いが減り、段落の展開も予測できます。',
    [head('頻出7分野', 12), ...chips(['環境', '食品ロス', 'AIと仕事', '多様性', 'ボランティア', '言語と文化', '睡眠と健康'], 26, { size: 12, h: 26 }), lb(160, 110, '日本語で読んでおくだけで、速度が上がる', 12, C.ink, 'middle', true)],
    '背景知識で、読む速度が上がる', PURPLE),
  S('まとめ。内容一致は必ず本文の記述だけで判断します。知識は速度を上げるためのもので、答えを決めるためのものではありません。また、本文の語をそのまま含む選択肢ほど誤答のことが多く、正解は言いかえられていることが多いです。',
    chain(['脱文挿入：指示語・接続語・冠詞で2つに絞る', 'テーマの知識は、速く読むために使う', '本文の語そのままの選択肢は、まず疑う'], [BLUE, PURPLE, RED], 14, 34, 14, 12),
    '答えは本文の記述だけで決める', YELLOW),
], '脱文挿入は、指示語・接続語・冠詞の手がかりで場所を絞る');

// ── 難関私立の傾向④：整序英作文と和文英訳 ──
// SEC koko_eigo_s424 0
const f_s424 = show([
  S('並べかえ問題は、単語カードをあれこれ動かして探すと1問に3分かかります。決まった手順で解きます。例題は「彼女は私に、その本をどこで買えばよいか教えてくれた。」で、語群は (me / where / she / buy / told / to) the book. です。',
    [bx(14, 8, 292, 30, '彼女は私に、その本をどこで買えばよいか教えてくれた。', C.blue, FILL.blue, 11), ...chips(['me', 'where', 'she', 'buy', 'told', 'to'], 54, { size: 14, h: 30 }), lb(160, 112, '+  the book.', 13, C.ink, 'middle', true)],
    '動かす前に、手順を決める', BLUE),
  S('Step1：日本語で主語と述語を確認します。主語は「彼女は」、述語は「教えてくれた」です。ここを決めてから、カードに手をのばします。',
    [bx(14, 20, 130, 40, '主語\n彼女は', C.blue, FILL.blue, 14), bx(176, 20, 130, 40, '述語\n教えてくれた', C.red, FILL.red, 14), lb(160, 90, 'まず日本語で骨組みを決める', 13, C.ink, 'middle', true)],
    'Step1：主語と述語を日本語で決める', BLUE),
  S('Step2：述語にあたる動詞を語群から探します。「教えた」は told です。語群の中で動詞になれるのは told と buy ですが、文全体の述語は told です。',
    [...chips(['me', 'where', 'she', 'buy', ['told', RED], 'to'], 28, { size: 14, h: 30 }), bx(80, 90, 160, 34, '述語は told', C.red, FILL.red, 14)],
    'Step2：述語の動詞を決める（told）', RED),
  S('Step3：その動詞が取る型を決めます。なぜ told の次が me なの？→ tell は「人に〜を教える」という意味で、tell ＋ 人 ＋ もの の形（SVOO）をとるからです。だから She told me のあとに「何を」が続きます。',
    qa('なぜ told の次が me なの？', 'tell ＝ 人に〜を教える\n形は tell ＋ 人 ＋ もの（SVOO）\n→ She told me ＋（何を）', GREEN, 13),
    'Step3：動詞の取る型を決める', GREEN),
  S('Step4：残りを組み立てます。残りは where / buy / to です。「どこで買えばよいか」は〈疑問詞 ＋ to ＋ 動詞の原形〉で、where to buy になります。',
    [...chips([['where', PURPLE], ['to', PURPLE], ['buy', PURPLE]], 20, { size: 15, h: 32 }), ar(160, 58, 160, 74, C.main), bx(60, 78, 200, 34, '疑問詞 ＋ to ＋ 動詞の原形', C.purple, FILL.purple, 13)],
    'Step4：where to buy で一つのかたまり', PURPLE),
  S('完成です。She told me where to buy the book. 骨組み（She told me）に、かたまり（where to buy）と目的語の続き（the book）を組み立てました。',
    [...chips([['She', BLUE], ['told', RED], ['me', BLUE], ['where to buy', PURPLE], ['the book', MAIN]], 40, { size: 13, h: 30 }), lb(160, 110, 'She told me where to buy the book.', 14, C.ink, 'middle', true)],
    '完成：She told me where to buy the book.', GREEN),
  S('不要語が1語入る形式です。「この写真を見ると、私は子どものころを思い出します。」語群は (me / this picture / of / reminds / my childhood / remembers)。日本語の主語は「私は」なので remembers を使いたくなりますが、これが不要語です。',
    [bx(10, 8, 300, 28, 'この写真を見ると、私は子どものころを思い出します。', C.blue, FILL.blue, 11), ...chips(['me', 'this picture', ['of', RED], ['reminds', GREEN], 'my childhood', ['remembers', GRAY]], 46, { size: 12, h: 26 }), lb(160, 118, '1語不要 → remembers', 13, C.red, 'middle', true)],
    '日本語につられて選びたくなる語が不要語', RED),
  S('なぜ reminds なの？→ remind A of B は「AにBを思い出させる」で、思い出させるきっかけ（この写真）が主語になるからです。remember は自分が思い出すという意味で、of を取りません。語群の of が remind の合図です。',
    qa('なぜ reminds で of なの？', 'remind A of B ＝ AにBを思い出させる\n主語は「きっかけ」（this picture）\nof があるのが remind の合図。', GREEN, 13),
    'This picture reminds me of my childhood.', GREEN),
  S('まとめ。語群に前置詞（of／to／with／for）があったら、それと組み合わさる動詞や熟語がないかをまず疑います。前置詞は組み合わせの合図です。手順は、主語と述語 → 動詞 → 型 → 組み立て、の順です。',
    chain(['① 日本語で主語と述語', '② 述語の動詞を決める', '③ 動詞の型を決める', '④ 残りを組み立てる'], [BLUE, RED, GREEN, PURPLE], 6, 24, 9, 12),
    '前置詞は、組み合わせの合図', YELLOW),
], '整序英作文は、動詞から決めて骨組みを作る');

export const XF_KEI_FIGURES: Record<string, DiagramFigure> = {
  'xf_koko_eigo_s399': f_s399,
  'xf_koko_eigo_s401': f_s401,
  'xf_koko_eigo_s404': f_s404,
  'xf_koko_eigo_s405': f_s405,
  'xf_koko_eigo_s407': f_s407,
  'xf_koko_eigo_s408': f_s408,
  'xf_koko_eigo_s409': f_s409,
  'xf_koko_eigo_s410': f_s410,
  'xf_koko_eigo_s413': f_s413,
  'xf_koko_eigo_s414': f_s414,
  'xf_koko_eigo_s418': f_s418,
  'xf_koko_eigo_s420': f_s420,
  'xf_koko_eigo_s422': f_s422,
  'xf_koko_eigo_s424': f_s424,
};

export const XF_KEI_SECTIONS: Record<string, string> = {
  'koko_eigo_s399#0': 'xf_koko_eigo_s399',
  'koko_eigo_s401#0': 'xf_koko_eigo_s401',
  'koko_eigo_s404#1': 'xf_koko_eigo_s404',
  'koko_eigo_s405#0': 'xf_koko_eigo_s405',
  'koko_eigo_s407#0': 'xf_koko_eigo_s407',
  'koko_eigo_s408#0': 'xf_koko_eigo_s408',
  'koko_eigo_s409#0': 'xf_koko_eigo_s409',
  'koko_eigo_s410#0': 'xf_koko_eigo_s410',
  'koko_eigo_s413#0': 'xf_koko_eigo_s413',
  'koko_eigo_s414#0': 'xf_koko_eigo_s414',
  'koko_eigo_s418#0': 'xf_koko_eigo_s418',
  'koko_eigo_s420#0': 'xf_koko_eigo_s420',
  'koko_eigo_s422#0': 'xf_koko_eigo_s422',
  'koko_eigo_s424#0': 'xf_koko_eigo_s424',
};
