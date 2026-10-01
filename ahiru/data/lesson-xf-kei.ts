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
    [...chips([['It', BLUE], ['is', RED], ['difficult', BLUE], ['for me', PURPLE], ['to get up', GREEN], ['early', GREEN]], 22, { size: 12, h: 28 }), lb(160, 82, 'It is difficult for me to get up early.', 13, C.ink, 'middle', true)],
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
    [...chips(['that', 'the', ['is', RED], ['read', RED], 'this', 'book', 'I', 'yesterday'], 18, { size: 12, h: 28 }), bx(40, 80, 240, 40, '動詞が二つ → 文が二つ分', C.red, FILL.red, 14)],
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
    tbl(12, 14, [90, 100, 106], 34, [['', '後ろの形', '例'], ['主格', 'who＋動詞', 'a friend who lives in Osaka'], ['目的格', 'that＋主語＋動詞', 'the book that I read']], BLUE, 10),
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
    qa('なぜ語句を先に置くの？', '後から押しこむと語順がくずれる。\n語句を先に置き、前後に空欄を作ってうめる。\n（品詞で置き場所が決まる）', BLUE, 13),
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
    [bx(10, 10, 130, 30, '困りごと', C.blue, FILL.blue, 13), bx(160, 10, 150, 30, 'Shall I help you?', C.green, FILL.green, 12), bx(10, 52, 130, 30, '知らせ', C.blue, FILL.blue, 13), bx(160, 52, 150, 30, "That's great.", C.green, FILL.green, 12), bx(10, 94, 130, 30, '誘い', C.blue, FILL.blue, 13), bx(160, 94, 150, 30, 'Sure. ／ I\'m sorry, but I can\'t.', C.green, FILL.green, 10)],
    '直前の内容からも、答えの形を絞れる', GREEN),
  S('まとめ。二段階で決めます。まず「疑問文か、平叙文か」、次に「疑問詞が要るか」。書いたら、直前とも直後ともつながるか、主語と動詞、文末の記号（? か .）を確かめます。',
    chain(['① 疑問文か、平叙文か', '② 疑問詞が要るか', '③ 直前・直後につながるか／文末は ? か .'], [BLUE, GREEN, YELLOW], 14, 34, 14, 13),
    '冒険せず、書ける表現で正確に', YELLOW),
], '空所の前後から、書くべき文の形を逆算する');

export const XF_KEI_FIGURES: Record<string, DiagramFigure> = {
  'xf_koko_eigo_s399': f_s399,
  'xf_koko_eigo_s401': f_s401,
  'xf_koko_eigo_s404': f_s404,
  'xf_koko_eigo_s405': f_s405,
  'xf_koko_eigo_s407': f_s407,
  'xf_koko_eigo_s408': f_s408,
  'xf_koko_eigo_s409': f_s409,
};

export const XF_KEI_SECTIONS: Record<string, string> = {
  'koko_eigo_s399#0': 'xf_koko_eigo_s399',
  'koko_eigo_s401#0': 'xf_koko_eigo_s401',
  'koko_eigo_s404#1': 'xf_koko_eigo_s404',
  'koko_eigo_s405#0': 'xf_koko_eigo_s405',
  'koko_eigo_s407#0': 'xf_koko_eigo_s407',
  'koko_eigo_s408#0': 'xf_koko_eigo_s408',
  'koko_eigo_s409#0': 'xf_koko_eigo_s409',
};
