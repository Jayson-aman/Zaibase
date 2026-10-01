// 高校受験 英語（和文英訳・並べかえ・英作文・入試対策・長文・誤文訂正・見直し・直前期）と
// 中1英語（曜日・月・日付）の教科書単元に、動く図解を1つずつ足す。
// 「なぜ？」の連鎖で、7枚以上。上に図、下の帯（y=160〜）にそのスライドのひとこと。
// キーは 'xf_<単元id>'、結び先は '<単元id>#<節の番号>'。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, show, fresh } from './diagram-kit';

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
    qa(' is running なの？', '絵は「いま〜している」場面。\nだから be動詞 ＋ 〜ing（現在進行形）。\nrun は n を重ねて running。（is run は誤り）', BLUE, 13),
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
    qa('②の答えが中心なの？', '相手がいちばん知りたいのは、質問への答え。\n配点の中心もここ。\n書き出しと結びは短く、答えに語数を使う。', RED, 13),
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
    [bx(10, 6, 300, 44, 'I agree with this idea.  ...\nHowever, I think students should not use smartphones.', C.red, FILL.red, 11), ar(160, 52, 160, 66, C.red), bx(40, 68, 240, 30, '賛成と言って、結論が反対 → 大きな減点', C.red, FILL.red, 12)],
    '立場が途中で入れかわるのは大きな減点', RED),
  S('反対意見に触れるなら、最後は自分の立場に戻します。Some people say smartphones are dangerous. However, I still think they are useful. のように書きます。',
    [bx(12, 14, 296, 34, 'Some people say smartphones are dangerous.', C.gray, FILL.gray, 12), ar(160, 50, 160, 66, C.main), bx(12, 68, 296, 34, 'However, I still think they are useful.', C.green, FILL.green, 12), lb(160, 124, 'ふれたあと、自分の立場に戻して閉じる', 12, C.gray, 'middle', true)],
    'However のあとで自分の立場に戻す', GREEN),
  S('模範解答は4文・27語です。1文目 5語（立場）、2文目 7語（理由）、3文目 7語（具体例）、4文目 8語（条件）。5＋7＋7＋8＝27語で、25語以上35語以内を満たします。',
    tbl(6, 8, [46, 220, 42], 24, [['役わり', '文', '語数'], ['立場', 'I agree with this idea.', '5'], ['理由', 'Using smartphones at school helps us study.', '7'], ['具体例', 'For example, we can find information quickly.', '7'], ['条件', 'However, we should not use them during classes.', '8'], ['合計', '5＋7＋7＋8', '27']], GREEN, 10),
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
    qa('具体例が効くの？', '抽象的な理由に、自分の経験が加わる。\n場面が見えるので説得力が増す。\n自分の経験だから、英語も簡単で語数も稼げる。', GREEN, 13),
    '具体例は、効率のよい武器', GREEN),
  S('具体例の合図になる表現です。For example,（たとえば）、Last year, I 〜.、When I was ten, I 〜.、I have 〜.（経験を表す現在完了）。具体例は一つで十分です。',
    [head('具体例の合図', 14), ...chips(['For example,', 'Last year, I ~', 'When I was ten, I ~', 'I have ~'], 30, { size: 13, h: 28 }), lb(160, 110, '具体例は一つで十分', 13, C.ink, 'middle', true)],
    '合図を使って、具体例につなぐ', BLUE),
  S('具体例は「いつ・どこで・何をした」の三点だけで書きます。Last year（いつ）、to Nagano（どこで）、we went（何をした）。細かく書こうとすると語数を使いすぎ、文法ミスも増えます。',
    cols(['いつ\nLast year', 'どこで\nNagano', '何をした\nwent / had'], 20, 56, [BLUE, GREEN, MAIN], 12, 10, 8),
    '三点だけでまとめる', BLUE),
  S('時制の切りかえに注意します。理由の文は現在形（一般的なこと）、具体例は過去形（自分の経験）になることが多いです。Last year があるので went と had にそろえます。go は went、have は had です。',
    [bx(10, 20, 140, 50, '理由\nI can enjoy skiing.\n（現在形）', C.blue, FILL.blue, 11), ar(152, 45, 168, 45, C.main), bx(170, 20, 140, 50, '具体例\nwe went ... had\n（過去形）', C.green, FILL.green, 11), lb(160, 100, 'Last year があるので過去形', 13, C.ink, 'middle', true), lb(160, 124, 'go → went　have → had', 12, C.gray, 'middle', true)],
    '現在形から過去形へ、切りかえる', GREEN),
  S('enjoy skiing の形も確かめます。なぜ enjoy to ski ではないの？→ enjoy は目的語に動名詞（〜ing）だけをとる動詞だからです。同じ仲間に finish, stop, practice, mind があります。want や hope は to 不定詞だけです。',
    qa('enjoy to ski ではだめ？', 'enjoy は動名詞（〜ing）だけをとる。\n仲間：finish, stop, practice, mind\n（want, hope は to 不定詞だけ）', GREEN, 13),
    'enjoy ＋ 〜ing', GREEN),
  S('経験談はあらかじめ用意しておきます。旅行、部活、読書、手伝い、勉強の5つを、各2文ほどで英語に直し、文法を確認しておきます。本番では、覚えている文に、テーマに合わせた一文を足します。',
    [...chips(['旅行', '部活', '読書', '手伝い', '勉強'], 14, { size: 13, h: 28 }), bx(30, 56, 260, 30, '確認済みの文を2文ずつ用意', C.green, FILL.green, 13), ar(160, 88, 160, 100, C.main), bx(30, 102, 260, 30, '覚えている文＋テーマに合わせた一文', C.main, FILL.yellow, 12)],
    '本番で新しく作る英語を減らす', YELLOW),
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
    qa('英作文を先に書くの？①', '英作文は最後にあるので、\n時間が押すと真っ先に犠牲になる。\n先に書けば、その12点は確定する。', RED, 13),
    '理由①：時間切れで白紙を防げる', RED),
  S('理由②：頭が疲れる前に書けます。英作文は自分で英文を作る作業で、読解より頭を使います。50分の終盤、疲れた状態で書くと、三単現の s や複数形の s が落ちやすくなります。',
    [bx(14, 20, 130, 60, '前半\n頭が元気\n正確に書ける', C.green, FILL.green, 13), bx(176, 20, 130, 60, '終盤\n疲れている\ns を落としやすい', C.red, FILL.red, 13), ar(146, 50, 174, 50, C.main), lb(160, 110, '英作文は「作る」作業だから先に', 13, C.ink, 'middle', true)],
    '理由②：頭が疲れる前に書ける', GREEN),
  S('理由③：長文の内容に引きずられません。英作文のテーマが長文と似ていると、長文で読んだ表現をうろ覚えのまま使って、かえって不正確になることがあります。先に自分の言葉で書いておくほうが安全です。',
    qa('英作文を先に書くの？③', '長文を先に読むと、うろ覚えの表現を使いがち。\nかえって不正確になる。\n先に自分の言葉で書けば安全。', GREEN, 12),
    '理由③：長文に引きずられない', GREEN),
  S('ただし、英作文に7分以上かけてはいけません。「先に書く」は「じっくり書く」ではありません。型に沿って4文を書き、細かい直しは最後の見直しの5分に回します。',
    [bx(30, 16, 260, 40, '英作文は7分まで', C.red, FILL.red, 16), ar(160, 58, 160, 74, C.main), bx(30, 76, 260, 40, '型に沿って4文を書く\n細かい直しは見直しの5分で', C.green, FILL.green, 13)],
    '「先に書く」は「じっくり書く」ではない', RED),
  S('順番を変えると、解答欄のずれが起きやすくなります。ずれると以降がすべてずれて、10点以上を失うことがあります。防ぐ手順は三つです。',
    chain(['① 大問ごとに、解答用紙の番号を指で確認', '② 飛ばした設問は○印、解答欄は空欄', '③ 最後の5分は、空欄が残っていないか全体を確認'], [BLUE, BLUE, BLUE], 8, 36, 12, 12),
    '大問を終えるたびに、番号を指でおさえる', BLUE),
  S('飛ばした設問は、なぜ空欄のままにするの？→ 仮の答えを書くと、戻ったときに「解いた問題」に見えて見直しから外れるからです。空欄なら一目で残りがわかります。ただし終了3分前になったら、記号選択の空欄は何かを書きます。無記入は0点です。',
    qa('空欄にしておくの？', '仮の答えを書くと「解いた問題」に見える。\n空欄なら、あとで一目で残りがわかる。\n終了3分前に、記号選択の空欄は必ず埋める。', BLUE, 12),
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
    [...stackBar(T80, 22, '目標80点', false), ...stackBar(T95, 62, '目標95点：23＋16＋19＋25＋12', false), lb(160, 104, '差がつく：長文の記述・英作文の正確さ', 12, C.red, 'middle', true), lb(160, 126, '三単現の s や冠詞を1つ落とすと 1〜2点引かれる', 11, C.gray, 'middle', true)],
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
    '挿入文：At first, the teachers\nwere not sure about it.', BLUE),
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
    qa('［ア］が正解？', 'it ＝ a new program → program の直後\nAt first ＝ 始めたころ → 開始直後\n2つの手がかりが、同じ［ア］を指す。', GREEN, 13),
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
    qa(' told の次が me なの？', 'tell ＝ 人に〜を教える\n形は tell ＋ 人 ＋ もの（SVOO）\n→ She told me ＋（何を）', GREEN, 13),
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
    qa(' reminds で of なの？', 'remind A of B ＝ AにBを思い出させる\n主語は「きっかけ」（this picture）\nof があるのが remind の合図。', GREEN, 13),
    'This picture reminds me of my childhood.', GREEN),
  S('まとめ。語群に前置詞（of／to／with／for）があったら、それと組み合わさる動詞や熟語がないかをまず疑います。前置詞は組み合わせの合図です。手順は、主語と述語 → 動詞 → 型 → 組み立て、の順です。',
    chain(['① 日本語で主語と述語', '② 述語の動詞を決める', '③ 動詞の型を決める', '④ 残りを組み立てる'], [BLUE, RED, GREEN, PURPLE], 6, 24, 9, 12),
    '前置詞は、組み合わせの合図', YELLOW),
], '整序英作文は、動詞から決めて骨組みを作る');

// ── 文法で確実に取る②：適語選択は選択肢から逆算する ──
// SEC koko_eigo_s426 0
const f_s426 = show([
  S('4択問題で、選択肢を上から順に当てはめて読み比べると、1問に1分かかります。作問者は「何を問うか」を決めてから選択肢を作ります。だから選択肢の並びを見れば、何を確認すればいいかが先に分かります。',
    [bx(14, 8, 292, 34, '選択肢を順に当てはめる → 1問に1分', C.red, FILL.red, 13), bx(14, 56, 292, 34, '選択肢の並びから論点を読む → 確認は1か所', C.green, FILL.green, 13), lb(160, 118, '作問者は「何を問うか」を決めてから選択肢を作る', 12, C.gray, 'middle', true)],
    '選択肢の並びが、論点を教えてくれる', BLUE),
  S('型1：時制が論点。選択肢が is / was / has been / will be のように時制だけ違うときは、文中の時を表す語を探します。yesterday や last year なら過去形、since や for や ever や already なら現在完了、tomorrow や next week なら未来です。',
    tbl(10, 10, [132, 168], 26, [['文中の語', '選ぶ形'], ['yesterday／last year', '過去形'], ['since／for／ever／already', '現在完了'], ['tomorrow／next week', '未来（will）'], ['for three years', 'has studied']], BLUE, 10),
    '時を表す語を探す', BLUE),
  S('型2：関係代名詞が論点。選択肢が who / which / whose / what のとき、確認するのは先行詞です。例：I know a girl ( ) father is a doctor. 答えは whose です。なぜ whose なの？→ 空所のあとに father という名詞が続いていて、「その子の父」という所有を表すからです。',
    [...chips([['who', GRAY], ['which', GRAY], ['whose', GREEN], ['what', GRAY]], 12, { size: 14, h: 28 }), bx(14, 54, 292, 34, 'I know a girl ( ) father is a doctor.', C.blue, FILL.blue, 13), ar(160, 90, 160, 104, C.green), bx(14, 106, 292, 30, 'あとに名詞（father）→ 所有 → whose', C.green, FILL.green, 12)],
    '先行詞と、あとに続く形を見る', GREEN),
  S('型3：準動詞（不定詞・動名詞・分詞）が論点。確認するのは直前の語です。enjoy / finish / stop / practice のあとは -ing、want / hope / decide / promise のあとは to 不定詞。名詞の直後で「〜している」なら現在分詞、「〜された」なら過去分詞です。',
    [bx(10, 10, 140, 54, 'enjoy／finish\nstop／practice\n＋ -ing', C.blue, FILL.blue, 12), bx(170, 10, 140, 54, 'want／hope\ndecide／promise\n＋ to 不定詞', C.green, FILL.green, 12), bx(10, 76, 300, 34, 'The boy ( ) under the tree → standing', C.purple, FILL.purple, 12), lb(160, 128, '名詞の直後で「〜している」→ 現在分詞', 12, C.gray, 'middle', true)],
    '直前の語が、形を決める', GREEN),
  S('型4：語順が論点。選択肢に where does he live と where he lives が並ぶときは、間接疑問を疑います。I don\'t know ( ). の答えは where he lives です。疑問詞のあとが文の一部（目的語）になるときは、ふつうの語順〈主語＋動詞〉に戻るからです。',
    [...chips([['where does he live', GRAY], ['where he lives', GREEN]], 12, { size: 13, h: 28 }), bx(14, 56, 292, 32, "I don't know ( ).", C.blue, FILL.blue, 14), ar(160, 90, 160, 104, C.green), bx(14, 106, 292, 30, '疑問詞 ＋ 主語 ＋ 動詞（ふつうの語順）', C.green, FILL.green, 12)],
    '間接疑問 → 疑問詞 ＋ 主語 ＋ 動詞', GREEN),
  S('型5：語法（動詞＋前置詞）が論点。選択肢が for / to / at / with のときは、直前の動詞や形容詞を見ます。look for（探す）、look at（見る）、be good at（得意）、be interested in（興味がある）です。',
    [...chips(['for', 'to', 'at', 'with'], 12, { size: 14, h: 28 }), bx(14, 56, 140, 30, 'look for 〜（探す）', C.green, FILL.green, 12), bx(166, 56, 140, 30, 'look at 〜（見る）', C.green, FILL.green, 12), bx(14, 94, 140, 30, 'be good at 〜', C.green, FILL.green, 12), bx(166, 94, 140, 30, 'be interested in 〜', C.green, FILL.green, 12)],
    '直前の動詞・形容詞を見る', GREEN),
  S('消去法です。My mother told me ( ) the room clean. の選択肢は keep / to keep / keeping / kept。①tell は〈tell ＋ 人 ＋ to 不定詞〉なので、原形の keep と過去形の kept が消えます。②残る to keep と keeping のうち、tell は動名詞をとらないので to keep です。',
    [...chips([['keep', GRAY], ['to keep', GREEN], ['keeping', GRAY], ['kept', GRAY]], 12, { size: 13, h: 28 }), bx(14, 56, 292, 30, '① 形が合わない2つを消す（keep・kept）', C.red, FILL.red, 12), bx(14, 94, 292, 30, '② 残りの差だけ見る → to keep', C.green, FILL.green, 12)],
    '2つ消して、残りの差だけを見る', GREEN),
  S('まとめ。論点を見つけたら、確認するのはその1か所だけです。文全体を訳す必要はありません。1問30秒で、決まらなければ印をつけて次へ進みます。日本語訳から選ばず、直前の動詞で決めます。',
    chain(['選択肢の差 → 論点を決める', '確認するのは、その1か所だけ', '1問30秒。決まらなければ印をつけて次へ'], [BLUE, GREEN, YELLOW], 14, 34, 14, 13),
    '日本語ではなく、直前の動詞で決める', YELLOW),
], '選択肢の差から論点を特定し、確認する場所を1か所に絞る');

// ── 文法で確実に取る④：整序英作文は頻出構文で組む ──
// SEC koko_eigo_s428 0
const f_s428 = show([
  S('語群を眺めていると、いくつもの並べ方が浮かんで決まらなくなります。でも入試に出る文の形は、10個ほどの型に収まります。型を先に覚えておけば、語群を見た瞬間に「あの型だ」と分かり、迷う時間が消えます。',
    [head('頻出10型', 12), ...chips(['SVOO', 'SVOC', 'It is ~ to ~', 'too ~ to ~', 'so ~ that ~', '疑問詞+to', '間接疑問', '関係代名詞', '分詞の後置', '現在完了'], 28, { size: 12, h: 26 })],
    '型が決まれば、置き場所は1通り', BLUE),
  S('①SVOO（〜に…を）は、me や him などの目的格のあとにもう1つの名詞が続く形です。He showed me an old picture. ②SVOC（OをCにする）は make / call / keep ＋ 形容詞の形です。His story made us happy.',
    [bx(12, 12, 296, 28, '① SVOO　合図：me / him ＋ もう1つの名詞', C.blue, FILL.blue, 12), bx(12, 44, 296, 28, 'He showed me an old picture.', C.green, FILL.green, 13), bx(12, 82, 296, 28, '② SVOC　合図：make / call / keep ＋ 形容詞', C.blue, FILL.blue, 12), bx(12, 114, 296, 28, 'His story made us happy.', C.green, FILL.green, 13)],
    '①と②：動詞のあとの並びで見分ける', GREEN),
  S('③It is ... to 〜（it と to が両方ある）：It is important to study English every day. ④too ... to 〜：The box was too heavy for me to carry. ⑤so ... that 〜：He is so kind that everyone likes him.',
    [bx(12, 8, 296, 38, '③ It is important to study English every day.', C.green, FILL.green, 12), bx(12, 52, 296, 38, '④ The box was too heavy for me to carry.', C.green, FILL.green, 12), bx(12, 96, 296, 38, '⑤ He is so kind that everyone likes him.', C.green, FILL.green, 12)],
    '③ it と to　④ too と to　⑤ so と that', GREEN),
  S('⑥疑問詞＋to 不定詞：She told me where to buy the book. ⑦間接疑問（疑問詞があるのに do / does がない）：Do you know when she will come back? ',
    [bx(12, 16, 296, 36, '⑥ She told me where to buy the book.', C.green, FILL.green, 13), lb(160, 66, '合図：where / what / how ＋ to', 12, C.gray, 'middle', true), bx(12, 84, 296, 36, '⑦ Do you know when she will come back?', C.green, FILL.green, 13), lb(160, 134, '合図：疑問詞があるのに do / does がない', 12, C.gray, 'middle', true)],
    '⑥ 疑問詞＋to　⑦ 間接疑問', GREEN),
  S('⑧関係代名詞：The man I met yesterday is a famous singer.（目的格が省略）⑨分詞の後置修飾：The boy running over there is my brother. ⑩現在完了：I have known him for three years.',
    [bx(12, 8, 296, 38, '⑧ The man I met yesterday is a famous singer.', C.green, FILL.green, 12), bx(12, 52, 296, 38, '⑨ The boy running over there is my brother.', C.green, FILL.green, 12), bx(12, 96, 296, 38, '⑩ I have known him for three years.', C.green, FILL.green, 12)],
    '⑧ 動詞が2つ　⑨ 名詞＋-ing　⑩ have＋過去分詞', GREEN),
  S('間接疑問で when will she と並べてしまうのはなぜ？→ 「いつ帰ってくるか」を疑問文だと考えてしまうからです。when 以下は know の目的語で、ふつうの語順〈主語＋動詞〉に戻ります。文全体の疑問は Do you know の部分だけです。',
    [bx(14, 14, 130, 32, 'when will she', C.red, FILL.red, 13), lb(160, 30, '→', 16, C.main, 'middle', true), bx(176, 14, 130, 32, 'when she will', C.green, FILL.green, 13), bx(14, 62, 292, 34, 'Do you know when she will come back?', C.green, FILL.green, 13), lb(160, 118, '疑問文の語順は、先頭の Do you know だけ', 12, C.gray, 'middle', true)],
    'when 以下は、ふつうの語順に戻る', RED),
  S('日本語の語順どおりに並べないことも大切です。「私が昨日会った男性は」を I met yesterday the man と並べるのは誤りです。英語は〈修飾される名詞 → 修飾する部分〉の順なので、the man I met yesterday です。日本語とは逆の順番です。',
    [bx(14, 14, 292, 30, 'I met yesterday the man（日本語の順）', C.red, FILL.red, 12), ar(160, 46, 160, 62, C.main), bx(14, 64, 292, 30, 'the man  I met yesterday（名詞が先）', C.green, FILL.green, 12), lb(160, 114, '修飾する部分は、名詞の後ろに回る', 12, C.gray, 'middle', true)],
    '英語は、名詞が先で説明があと', GREEN),
  S('組み立てたあとの確認は3つです。①語数：語群をすべて使ったか（不要語がある形式では、不要語1語を除いたすべて）。②日本語に訳し直して、問題文と同じ意味か。③三単現・時制・冠詞。解答欄に番号が指定されているときは、英文に1、2、3…と番号を振ってから写します。',
    chain(['① 語数が合っているか（指で数える）', '② 日本語に訳し直して一致するか', '③ 三単現・時制・冠詞を確認'], [BLUE, GREEN, PURPLE], 14, 34, 14, 12),
    '組み立てて終わりにしない', YELLOW),
], '頻出10型を先に覚え、語群を型に流しこむ');

// ── 文法で確実に取る⑤：語彙・熟語問題の頻出型 ──
// SEC koko_eigo_s429 0
const f_s429 = show([
  S('熟語は数が多くて覚えきれないと感じがちですが、入試に出るものは少数の型に整理できます。型ごとにまとめると、ばらばらに覚えるより早く頭に入ります。',
    [head('熟語の4つの型', 12), ...chain(['型1  be動詞 ＋ 形容詞 ＋ 前置詞', '型2  動詞 ＋ 前置詞', '型3  動詞 ＋ 副詞', '型4  決まり文句'], [BLUE, GREEN, MAIN, PURPLE], 26, 24, 8, 12)],
    '意味だけでなく、後ろに何が来るかまで', BLUE),
  S('型1：be interested in（〜に興味がある）、be good at（〜が得意）、be famous for（〜で有名）、be afraid of（〜を恐れる）、be full of（〜でいっぱい）。I am interested in science. が正しく、I am interesting in science. は誤りです。',
    [...chips(['be interested in', 'be good at', 'be famous for', 'be afraid of', 'be full of'], 10, { size: 12, h: 26 }), bx(14, 76, 292, 30, 'I am interested in science.', C.green, FILL.green, 13), bx(14, 112, 292, 28, '× I am interesting in science.', C.red, FILL.red, 12)],
    '興味をもつ人は interested', GREEN),
  S('なぜ interested で interesting ではないの？→ interested は「（人が）興味をもっている」、interesting は「（ものが）おもしろい」という意味だからです。主語の I は人なので interested を使います。',
    qa('interested で interesting ではない？', 'interested ＝ （人が）興味をもっている\ninteresting ＝ （ものが）おもしろい\n主語 I は人 → interested', GREEN, 13),
    '人 → interested　もの → interesting', GREEN),
  S('型2：look for（探す）、look after（世話をする）、take care of（世話をする）、get along with（仲良くやる）、depend on（頼る）、belong to（所属する）。この中で look forward to の to だけは前置詞です。',
    [...chips(['look for', 'look after', 'take care of', 'get along with', 'depend on', 'belong to'], 10, { size: 12, h: 26 }), bx(14, 80, 292, 34, 'I am looking forward to seeing you.', C.green, FILL.green, 13), lb(160, 134, 'to は前置詞 → あとは動名詞', 12, C.red, 'middle', true)],
    'look forward to ＋ 動名詞', GREEN),
  S('なぜ to see ではなく to seeing なの？→ look forward to の to は不定詞の to ではなく前置詞だからです。前置詞のあとは名詞か動名詞です。見分けは「to のあとに名詞を置けるか」で、look forward to the party と置けるので、to は前置詞です。',
    qa('to see ではなく to seeing？', 'look forward to の to は前置詞。\n前置詞のあと ＝ 名詞か動名詞。\nlook forward to the party と置ける → 前置詞', RED, 12),
    'to のあとに名詞を置けたら、前置詞', RED),
  S('型3：動詞＋副詞（give up, put off, turn on / off, find out, take off, put on）。目的語が代名詞のときは間にはさみます。Please turn off the TV. はよいですが、it のときは Please turn it off. です。turn off it は誤りです。',
    [bx(14, 12, 292, 30, 'Please turn off the TV.', C.green, FILL.green, 13), bx(14, 50, 292, 30, 'Please turn it off.', C.green, FILL.green, 13), bx(14, 88, 292, 30, '× Please turn off it.', C.red, FILL.red, 13), lb(160, 134, '代名詞の目的語は、間にはさむ', 12, C.gray, 'middle', true)],
    '代名詞は、動詞と副詞の間に', GREEN),
  S('型4：決まり文句。It takes me twenty minutes to walk to school.（〜するのに時間がかかる）、How about going to the movies?、You had better see a doctor.（had better のあとは原形で、to はつけない）。',
    [bx(12, 10, 296, 32, 'It takes me twenty minutes to walk to school.', C.green, FILL.green, 12), bx(12, 50, 296, 32, 'How about going to the movies?', C.green, FILL.green, 12), bx(12, 90, 296, 32, 'You had better see a doctor.', C.green, FILL.green, 12), lb(160, 138, '× had better to see は誤り', 12, C.red, 'middle', true)],
    '決まり文句は、形ごと覚える', GREEN),
  S('熟語を丸暗記しきれないときは、前置詞の中心の意味に戻ります。at は一点、in は中、on は接触、for は向かう先、with は一緒、of は所属・切り離し、to は到達点です。be good at は一点に的中する、depend on は乗りかかる、というイメージです。',
    tbl(8, 10, [48, 252], 20, [['at', '点（at seven／be good at）'], ['in', '中（in the room／be interested in）'], ['on', '接触（on the desk／depend on）'], ['for', '向かう先・交換（leave for／famous for）'], ['with', '一緒・道具（write with a pen）'], ['of', '所属・切り離し（member of／afraid of）'], ['to', '到達点（go to school／belong to）']], BLUE, 10),
    '前置詞の中心の意味に戻る', BLUE),
  S('日本語につられて前置詞を入れる誤りも多いです。discuss, marry, reach, enter, answer, visit, attend, mention, approach, resemble は前置詞が不要です。discuss about は誤りで、We discussed the problem. が正しいです。なぜ不要なの？→ 英語ではこれらが目的語を直接とる動詞だからです。',
    [head('前置詞が不要な動詞', 12), ...chips(['discuss', 'marry', 'reach', 'enter', 'answer', 'visit', 'attend', 'mention', 'approach', 'resemble'], 26, { size: 12, h: 24 }), bx(14, 104, 292, 34, 'We discussed the problem.（× discussed about）', C.green, FILL.green, 12)],
    '「〜について」「〜に」を入れたくなっても不要', RED),
], '熟語は型でまとめ、前置詞の判断を確実にする');

// ── 長文の読み方②：設問を先に読む ──
// SEC koko_eigo_s431 0
const f_s431 = show([
  S('知らない街で「とりあえず歩いてみる」のと「駅を目指す」のでは、同じ時間でも進み方が違います。長文も、何を探すかを決めずに読むと、読み終えてから設問を見て、もう一度探しに戻ることになります。この往復が時間を食っています。',
    [bx(12, 12, 140, 50, 'とりあえず読む\n→ 読み終えて設問\n→ 探しに戻る', C.red, FILL.red, 12), bx(168, 12, 140, 50, '探すものを決める\n→ 読みながら拾う\n→ 戻らない', C.green, FILL.green, 12), lb(160, 100, '往復をなくすのが、設問先読み', 13, C.ink, 'middle', true)],
    '何を探すかを決めてから読む', BLUE),
  S('Step1：設問文だけを読みます。選択肢は飛ばします。問1 Why did Ken start the volunteer activity? 問2 What does the underlined word "it" refer to? 問3 How many students joined the event last year? 問4 Which is true about Ken\'s school?',
    [bx(10, 10, 300, 28, '問1  Why did Ken start the volunteer activity?', C.blue, FILL.blue, 11), bx(10, 42, 300, 28, '問2  What does the underlined word "it" refer to?', C.blue, FILL.blue, 11), bx(10, 74, 300, 28, '問3  How many students joined the event last year?', C.blue, FILL.blue, 11), bx(10, 106, 300, 28, "問4  Which is true about Ken's school?", C.blue, FILL.blue, 11)],
    '30〜60秒で、設問文だけを読む', BLUE),
  S('Step2：探すものを一語でメモします。問1は理由（because / so を探す）、問2は下線部の位置、問3は数字、問4は全体（最後に処理）です。',
    tbl(10, 14, [60, 240], 28, [['問1', '理由 → because／so を探す'], ['問2', '下線部の位置 → 印をつける'], ['問3', '数字 → ○で囲む'], ['問4', '全体 → 最後に処理']], GREEN, 12),
    '探すものを一語でメモする', GREEN),
  S('Step3：設問を本文の位置に対応づけます。設問は原則として本文の順番どおりに並びます。問1の根拠は前半、問3は中盤、問4は全体です。前半を読んでいるあいだは、問1のことだけを考えればよいのです。',
    [bx(14, 30, 292, 30, undefined, C.gray, FILL.gray), bx(14, 30, 90, 30, '前半', C.blue, FILL.blue, 12), bx(110, 30, 100, 30, '中盤', C.green, FILL.green, 12), bx(216, 30, 90, 30, '後半', C.gray, FILL.gray, 12), lb(59, 80, '問1', 13, C.blue, 'middle', true), lb(160, 80, '問3', 13, C.green, 'middle', true), lb(160, 112, '問4 は全体を読み終えてから', 12, C.red, 'middle', true)],
    '設問は、本文の順に並ぶ', GREEN),
  S('選択肢を先に読まないのはなぜ？→ 選択肢は4つのうち3つが誤りだからです。先に読むと、誤った内容が頭に残り、本文を読むとき「そう書いてあった気がする」という錯覚を起こします。設問文だけなら、何を探すかの情報だけが入ります。',
    qa('選択肢を先に読まないのは？', '4つのうち3つは誤りの内容。\n先に読むと、誤情報が頭に残る。\n「書いてあった気がする」という錯覚が起きる。', RED, 13),
    '先読みは、設問文だけ', RED),
  S('先読みで覚えられるのは3〜4問ぶんまでです。設問が8問あるなら、前半4問を先読みして本文の前半を読み、後半に入る前に残り4問を読みます。覚えきれないなら2問ずつに分けます。',
    [bx(14, 16, 130, 40, '前半4問を\n先読み', C.blue, FILL.blue, 12), ar(146, 36, 172, 36, C.main), bx(176, 16, 130, 40, '前半を読む', C.green, FILL.green, 12), ar(240, 58, 240, 76, C.main), bx(14, 80, 130, 40, '後半4問を\n先読み', C.blue, FILL.blue, 12), ar(146, 100, 172, 100, C.main), bx(176, 80, 130, 40, '後半を読む', C.green, FILL.green, 12)],
    '覚えられる量に、先読みを分ける', BLUE),
  S('設問には「読みながら解けるもの」と「読み終えてから解くもの」があります。下線部の指示内容・数字・空所補充はその場で処理します。あとで戻ると探す時間がもう一度かかるからです。内容一致・タイトル・筆者の主張は、通読後にまとめて処理します。',
    [bx(10, 12, 142, 28, '読みながら解く', C.green, FILL.green, 13), bx(168, 12, 142, 28, '読み終えてから解く', C.blue, FILL.blue, 13), bx(10, 46, 142, 76, '下線部の指示内容\n数字を問う設問\n空所補充', C.green, FILL.green, 12), bx(168, 46, 142, 76, '内容一致\nタイトル選び\n筆者の主張', C.blue, FILL.blue, 12)],
    '見つけた瞬間に解ける設問は、その場で', GREEN),
  S('大問4・13分の運用例です。設問の先読みとメモ1分、通読しながら下線部と数字の設問をその場で処理6分、残りの設問(内容一致など)5分、最終確認1分。合計1＋6＋5＋1＝13分です。',
    [bx(10, 20, 20, 36, '1', C.blue, FILL.blue, 12), bx(34, 20, 120, 36, '6', C.green, FILL.green, 12), bx(158, 20, 100, 36, '5', C.purple, FILL.purple, 12), bx(262, 20, 48, 36, '1', C.red, FILL.red, 12), lb(20, 70, '先読み', 10, C.blue, 'middle', true), lb(94, 70, '通読しながら処理', 11, C.green, 'middle', true), lb(208, 70, '残りの設問', 11, C.purple, 'middle', true), lb(286, 70, '確認', 10, C.red, 'middle', true), lb(160, 112, '1 ＋ 6 ＋ 5 ＋ 1 ＝ 13分', 14, C.ink, 'middle', true)],
    '13分の使い方：1＋6＋5＋1', YELLOW),
], '設問文を先に読み、何を探すかを決めてから本文に入る');


// ── 長文の読み方④：止まらずに読み進める技術 ──
// SEC koko_eigo_s433 0
const f_s433 = show([
  S('長文を読んでいて突然意味が取れなくなる原因は、多くの場合、単語ではなく文の形です。詰まりやすいのは3か所。①主語が長い ②途中に説明がはさまっている（挿入句）③it が何を指すか分からない（指示語）です。',
    [head('詰まる3か所', 14), ...chain(['① 長い主語', '② 挿入句（コンマにはさまれた部分）', '③ 指示語（it／this／they／one）'], [BLUE, GREEN, PURPLE], 30, 30, 14, 13)],
    '3か所を処理すれば、詰まる回数が減る', BLUE),
  S('英語の文は〈主語＋動詞〉が骨格です。例：The students who joined the volunteer activity last summer learned a lot of things. を、主語（The students）、説明（who joined the volunteer activity last summer）、動詞（learned a lot of things）に分けて読みます。',
    [bx(8, 10, 76, 52, 'The students\n生徒たちは', C.blue, FILL.blue, 11), bx(90, 10, 150, 52, 'who joined the volunteer\nactivity last summer\n去年の夏に参加した', C.main, FILL.warm, 10), bx(246, 10, 66, 52, 'learned ...\n学んだ', C.red, FILL.red, 11), lb(160, 92, '動詞 learned を見つけた時点で', 12, C.ink, 'middle', true), lb(160, 114, 'その前までが全部主語と確定する', 12, C.ink, 'middle', true)],
    '主語・説明・動詞に分けて読む', GREEN),
  S('主語の終わりをどうやって見つけるの？→ 動詞が2つ現れたら、1つ目は修飾部分の動詞、2つ目が文の動詞であることが多いからです。上の例では joined が修飾部分、learned が文の動詞です。',
    qa('主語の終わりは、どこ？', '動詞が2つ現れたとき、\n1つ目（joined）→ 説明の中の動詞\n2つ目（learned）→ 文の動詞', GREEN, 13),
    '動詞が2つなら、2つ目が文の動詞', GREEN),
  S('挿入句はいったん飛ばします。Mr. Tanaka, who has taught English for thirty years, will retire next March. コンマとコンマにはさまれた部分は説明なので、飛ばして Mr. Tanaka will retire next March. と骨格を取り、そのあとで挿入部分を足します。',
    [bx(12, 8, 296, 40, 'Mr. Tanaka, who has taught English for thirty years,\nwill retire next March.', C.gray, FILL.gray, 11), ar(160, 48, 160, 64, C.main), bx(12, 66, 296, 34, 'Mr. Tanaka will retire next March.（骨格）', C.green, FILL.green, 12), lb(160, 124, 'そのあとで「30年間英語を教えてきた」を足す', 12, C.gray, 'middle', true)],
    'コンマにはさまれた部分は、先に飛ばす', GREEN),
  S('飛ばしてよい挿入の合図は4つです。コンマ2つにはさまれた部分、ダッシュにはさまれた部分、かっこの中、, which や, who で始まる部分。設問に関係しない挿入句は、最後まで読まなくてもよいことが多いです。',
    tbl(10, 14, [190, 110], 28, [['合図', '例'], ['コンマ2つにはさまれた部分', ', ... ,'], ['ダッシュにはさまれた部分', '— ... —'], ['かっこの中', '( ... )'], [', which／, who で始まる部分', ', which ...']], BLUE, 11),
    '設問に関係しない挿入は、読み飛ばせる', BLUE),
  S('指示語は代入して確かめます。Many students bring their own bottles to school. They say it is good for the environment. They に their own bottles を入れると「水筒が言う」になっておかしい。Many students を入れると通るので、They ＝ Many students です。',
    [bx(10, 8, 300, 28, 'Many students bring their own bottles to school.', C.blue, FILL.blue, 11), bx(10, 42, 300, 28, 'They say it is good for the environment.', C.blue, FILL.blue, 11), bx(10, 78, 140, 40, 'They ＝ their own bottles\n「水筒が言う」', C.red, FILL.red, 10), bx(170, 78, 140, 40, 'They ＝ Many students\n「生徒たちが言う」', C.green, FILL.green, 10), lb(160, 132, 'say の主語になれるのは人', 12, C.ink, 'middle', true)],
    '代入して、意味が通るか確かめる', GREEN),
  S('it の3つの用法を区別します。①指示語の it（前に出たものを指す）②形式主語の it（It is important to study English. の it は「勉強すること」）③時・天気・距離の it（It is raining. ／ It takes ten minutes.）。②③は前を探しても答えがありません。it のあとに to 不定詞や that 節があれば形式主語です。',
    tbl(8, 10, [92, 208], 38, [['① 指示語', '前に出たものを指す'], ['② 形式主語', 'It is important to study English.\n（to 以下を指す）'], ['③ 時・天気・距離', 'It is raining. ／ It takes ten minutes.']], PURPLE, 11),
    '前を探して見つからない it は、①ではない', PURPLE),
  S('one と it の違い。it は「まさにそのもの」、one は「同じ種類の別のもの」です。I lost my pen, so I bought a new one. の one は別の1本。I lost my pen, but I found it later. の it はなくしたそのペンです。a new のあとに it は置けません。',
    [bx(10, 12, 300, 30, 'I lost my pen, so I bought a new one.', C.green, FILL.green, 12), lb(160, 56, 'one ＝ ペンという種類の別の1本', 12, C.gray, 'middle', true), bx(10, 78, 300, 30, 'I lost my pen, but I found it later.', C.green, FILL.green, 12), lb(160, 122, 'it ＝ なくしたそのペン', 12, C.gray, 'middle', true)],
    'it ＝ まさにそのもの　one ＝ 別のもの', GREEN),
  S('まとめ。どうしても分からない1文は飛ばします。1文に1分かけるより、残り10文を読むほうが得点になります。ただし、下線が引かれている文だけは飛ばしません。設問の対象だからです。',
    chain(['長い主語 → 動詞を見つけて主語の終わりを決める', '挿入句 → 飛ばして骨格を先に取る', '指示語 → 代入して意味が通るか確かめる'], [BLUE, GREEN, PURPLE], 8, 30, 12, 12),
    '下線部の文だけは飛ばさない', YELLOW),
], '長い主語・挿入句・指示語を処理して、読みを止めない');

// ── 英作文③：確実に書ける構文だけで書く ──
// SEC koko_eigo_s437 0
const f_s437 = show([
  S('英作文で背伸びをして、習ったばかりの構文を使いたくなることがあります。でも本番で使うのは、目をつぶっても書ける表現だけにします。伝わる内容が同じなら、簡単な英語で書いたほうが点数は高くなります。',
    [bx(14, 12, 292, 40, '背伸びして難しい構文 → 形を崩して減点', C.red, FILL.red, 13), bx(14, 66, 292, 40, '確実に書ける構文だけ → 正確で高得点', C.green, FILL.green, 13), lb(160, 128, '本番で使う構文を、あらかじめ8つに決めておく', 12, C.gray, 'middle', true)],
    '評価されるのは構文の難しさではなく、正確さ', BLUE),
  S('安全な8構文の前半です。①I think (that) 〜.　②I want to 〜.　③I can 〜.　④It is 形容詞 for me to 〜.　どのテーマも、この8つで書けます。',
    [bx(10, 8, 300, 30, '① I think that studying English is important.', C.green, FILL.green, 11), bx(10, 42, 300, 30, '② I want to visit many countries in the future.', C.green, FILL.green, 11), bx(10, 76, 300, 30, '③ I can talk with people from other countries.', C.green, FILL.green, 11), bx(10, 110, 300, 30, '④ It is difficult for me to speak English.', C.green, FILL.green, 11)],
    '構文①〜④', GREEN),
  S('後半です。⑤A is 比較級 than B.　⑥There is / There are 〜.　⑦because 節　⑧when / if 節。',
    [bx(10, 8, 300, 30, '⑤ Reading books is more interesting than watching TV.', C.green, FILL.green, 10), bx(10, 42, 300, 30, '⑥ There are many beautiful places in my town.', C.green, FILL.green, 11), bx(10, 76, 300, 30, '⑦ I like winter because I can enjoy skiing.', C.green, FILL.green, 11), bx(10, 110, 300, 30, '⑧ When I was a child, I liked playing outside.', C.green, FILL.green, 11)],
    '構文⑤〜⑧', GREEN),
  S('④の for me の位置に注意します。「英語を話すことは私にとって難しい」を It is difficult to me と書くのは誤りです。なぜ for なの？→ It is 形容詞 for 人 to 〜 の型で、意味上の主語（〜するのは誰か）を表すのは for だからです。',
    [bx(14, 16, 140, 34, 'It is difficult to me', C.red, FILL.red, 12), lb(160, 33, '→', 16, C.main, 'middle', true), bx(168, 16, 140, 34, 'It is difficult for me', C.green, FILL.green, 12), lb(160, 80, 'for 人 ＝ to 以下をする人', 13, C.ink, 'middle', true), lb(160, 106, 'Speaking English is difficult for me. でもよい', 11, C.gray, 'middle', true)],
    '意味上の主語は for で表す', GREEN),
  S('ほかの注意点です。There is many books は誤りで、後ろの名詞が複数なら There are many books。because は文の途中で使い、文頭に置いて1文にしません。when / if の節の中は、未来のことでも現在形です。',
    [bx(10, 12, 300, 30, '× There is many books → There are many books', C.red, FILL.red, 11), bx(10, 48, 300, 30, '× Because I like it. → I like it because ...', C.red, FILL.red, 11), bx(10, 84, 300, 30, 'If you come to Japan, you should visit Kyoto.', C.green, FILL.green, 11), lb(160, 132, 'if／when の節の中は現在形', 12, C.gray, 'middle', true)],
    '数・because・if節の3点を確認', RED),
  S('組み合わせ例（テーマ：将来の夢）です。I want to be a teacher in the future.（9語）I have two reasons.（4語）First, I like children very much.（6語）Second, it is exciting for me to teach something new.（10語）That is why I want to be a teacher.（9語）合計 9＋4＋6＋10＋9＝38語です。',
    tbl(6, 6, [264, 40], 19, [['文', '語数'], ['I want to be a teacher in the future.', '9'], ['I have two reasons.', '4'], ['First, I like children very much.', '6'], ['Second, it is exciting for me to teach something new.', '10'], ['That is why I want to be a teacher.', '9'], ['合計', '38']], GREEN, 10),
    '8構文の中の②と④で、38語を書ける', GREEN),
  S('日本語を先に言いかえます。「地球環境の保全に貢献したい」→「環境を守るために何かしたい」→ I want to do something to protect the environment. 「多様な価値観に触れられる」→「いろいろな考え方を知ることができる」→ I can learn many different ways of thinking.',
    chain(['地球環境の保全に貢献したい', '環境を守るために何かしたい', 'I want to do something to protect the environment.'], [BLUE, MAIN, GREEN], 8, 36, 14, 12),
    '難しい日本語 → 易しい日本語 → 英語', GREEN),
  S('なぜ仮定法などを避けるの？→ 形を間違えると意味が変わるうえ、高校入試の英作文で必要になる設問はほとんどないからです。分詞構文は中学の必修範囲外で崩れやすく、無生物主語の複雑な文も不自然になりやすいです。同じ内容は確実に書ける形に言いかえられます。',
    qa('難しい構文を避けるのはなぜ？', '形をまちがえると意味が変わり、減点される。\n使わなくても、どのテーマも書き切れる。\n例：I want to fly like a bird.', RED, 13),
    '自信のない構文は、使わない', RED),
  S('まとめ。書けない語は同義の易しい語に置きかえます（重要な→important、たくさんの→many）。同じ構文を2回使ってもかまいません。採点基準に「多様な表現」は入っていないからです。確実に書ける形で埋めるのが、いちばん得点が高い方法です。',
    chain(['使うのは、安全な8構文', '難しい日本語は、先に易しく言いかえる', '同じ構文をくり返してもよい'], [GREEN, BLUE, YELLOW], 14, 34, 14, 13),
    '確実に書ける形で埋める', YELLOW),
], '確実に書ける8つの構文だけで書く');

// ── 英作文⑤：和文英訳は日本語を作り直してから ──
// SEC koko_eigo_s439 0
const f_s439 = show([
  S('日本語は主語を省く言語です。「明日は雨が降るそうです」には主語がありません。これをそのまま英語にしようとすると詰まります。英語にする前に、日本語を英語の形に作り直します。',
    [bx(30, 14, 260, 38, '明日は雨が降るそうです。', C.blue, FILL.blue, 15), ar(160, 54, 160, 74, C.red), bx(30, 78, 260, 44, '主語がない\nそのまま訳そうとすると詰まる', C.red, FILL.red, 13)],
    '日本語は主語を省く', RED),
  S('手順は四つです。①主語を補う ②述語を動詞の形にほぐす ③難しい語を易しい語に言いかえる ④英語にする。',
    chain(['① 主語を補う', '② 述語を動詞の形にほぐす', '③ 難しい語を易しい語に', '④ 英語にする'], [BLUE, GREEN, MAIN, PURPLE], 8, 26, 12, 13),
    '日本語を作り直してから、英語にする', BLUE),
  S('例題1。「明日は雨が降るそうです」→ ①主語を補う「私は、明日雨が降るだろうと聞いています」→ ②「私は聞いている＋明日雨が降るだろう」→ I hear that it will rain tomorrow. なぜ it が主語なの？→ 天気を言うときの it を主語にするからです。Tomorrow rains. は誤りです。',
    [bx(10, 8, 300, 28, '私は、明日雨が降るだろうと聞いています', C.blue, FILL.blue, 12), ar(160, 38, 160, 52, C.main), bx(10, 54, 300, 28, 'I hear that it will rain tomorrow.', C.green, FILL.green, 13), bx(10, 96, 300, 28, 'It is raining. の it ＝ 天気の it', C.purple, FILL.purple, 12), lb(160, 138, '× Tomorrow rains. は誤り', 12, C.red, 'middle', true)],
    '天気は it を主語にする', GREEN),
  S('例題2。「私は彼に何と言えばよいかわからなかった」。主語は「私は」とすでにあります。述語をほぐすと「わからなかった＋何を言うべきか」。〈疑問詞＋to 不定詞〉を使って I did not know what to say to him. です。',
    [bx(10, 10, 300, 28, '私は彼に何と言えばよいかわからなかった', C.blue, FILL.blue, 12), ar(160, 40, 160, 54, C.main), bx(10, 56, 140, 32, 'わからなかった\nI did not know', C.green, FILL.green, 11), bx(170, 56, 140, 32, '何を言うべきか\nwhat to say to him', C.purple, FILL.purple, 11), lb(160, 112, 'I did not know what to say to him.', 13, C.ink, 'middle', true)],
    '疑問詞＋to 不定詞でほぐす', GREEN),
  S('例題3。「私たちの学校は50年前に建てられました」。「建てられた」は受動態です。Our school was built fifty years ago. なぜ was built なの？→ 学校は「建てる」側ではなく「建てられる」側だからです。build ― built ― built で、was build は誤りです。',
    qa('was built（受動態）？', '学校は「建てられる」側。\nbe動詞 ＋ 過去分詞 ＝ 受動態\nbuild ― built ― built（was build は誤り）', GREEN, 13),
    '建物・学校・町が主語 → 受動態を疑う', GREEN),
  S('例題4。「彼女は3年間ずっとピアノを練習しています」。「ずっと〜している」は現在完了（継続）です。She has practiced the piano for three years. 主語が三人称単数なので has、楽器には the をつけます。',
    [...chips([['She', BLUE], ['has practiced', RED], ['the piano', MAIN], ['for three years', GREEN]], 12, { size: 12, h: 28 }), lb(160, 92, 'She has practiced the piano for three years.', 13, C.ink, 'middle', true), lb(160, 118, '三人称単数 → has　楽器 → the', 12, C.gray, 'middle', true)],
    '継続 → 現在完了。has と the を確認', GREEN),
  S('例題5。「この本を読めば、彼の考え方がよくわかります」。主語を補うと「（あなたが）この本を読めば、（あなたは）彼の考えをよく理解できます」。If you read this book, you will understand his ideas well. if 節の中は、未来のことでも現在形です。',
    [bx(10, 10, 300, 32, 'If you read this book, you will understand his ideas well.', C.green, FILL.green, 11), lb(160, 70, 'read は現在形（will read ではない）', 12, C.red, 'middle', true), lb(160, 100, 'if の節の中は、未来のことでも現在形', 12, C.ink, 'middle', true)],
    '主語を補う。if 節の中は現在形', GREEN),
  S('対話文の中の英訳では、前後に時制と人称を合わせます。A: How was your weekend? に答えるなら過去形で I visited Kyoto with my family. It was a lot of fun. A: Have you ever been to Hokkaido? には現在完了で Yes, I have been there twice. です。',
    [bx(10, 8, 300, 24, 'A: How was your weekend?', C.blue, FILL.blue, 12), bx(10, 36, 300, 28, 'B: I visited Kyoto with my family. It was a lot of fun.', C.green, FILL.green, 11), bx(10, 76, 300, 24, 'A: Have you ever been to Hokkaido?', C.blue, FILL.blue, 12), bx(10, 104, 300, 28, 'B: Yes, I have been there twice.', C.green, FILL.green, 12)],
    '聞かれた時制で答える', GREEN),
  S('まとめ。日本語で主語が省かれているときは、まず I か you を補ってみます。学校・町・建物が主語になるときは受動態を疑います。書き終えたら、三単現・時制・冠詞・複数形の4点を確認します。',
    chain(['主語を補う（I か you）', '学校・町・建物 → 受動態を疑う', '書き終えたら 三単現・時制・冠詞・複数形'], [BLUE, GREEN, YELLOW], 14, 34, 14, 13),
    '日本語を作り直してから英語にする', YELLOW),
], '主語を補い、述語をほぐしてから英語にする');

// ── 誤文訂正②：動詞の形の誤りを見つける ──
// SEC koko_eigo_s441 0
const f_s441 = show([
  S('英語の文でいちばん情報を持っているのは動詞です。だから出題者も、動詞に誤りを仕こみます。逆に言えば、動詞を1つずつ確認する習慣をつけるだけで、誤文訂正の3分の1は確実に取れるようになります。最も多いのが三単現に関わる誤りです。',
    [head('動詞の点検は4項目', 14), ...chain(['① 三単現（-s／-es、doesn\'t）', '② 助動詞の後ろは原形', '③ be・have の後ろは過去分詞', '④ 動名詞と不定詞'], [RED, BLUE, GREEN, PURPLE], 28, 22, 6, 12)],
    '三単現の誤りが、いちばん多い', BLUE),
  S('誤 He don\'t like natto. → 正 He doesn\'t like natto. なぜ doesn\'t なの？→ 主語 He は三人称単数だからです。現在形の否定文では、主語が三人称単数なら do ではなく does を使います。',
    [bx(12, 14, 140, 34, "He don't like natto.", C.red, FILL.red, 12), lb(160, 31, '→', 16, C.main, 'middle', true), bx(168, 14, 140, 34, "He doesn't like natto.", C.green, FILL.green, 12), bx(12, 66, 296, 40, '主語 He ＝ 三人称単数\n現在の否定文 → doesn\'t', C.blue, FILL.blue, 13), lb(160, 130, '主語を指さして「三人称単数か」を確認', 12, C.gray, 'middle', true)],
    '三人称単数の否定は doesn\'t', GREEN),
  S('誤 He doesn\'t likes natto. → 正 He doesn\'t like natto. 誤 Does he likes natto? → 正 Does he like natto? なぜ原形なの？→ 三単現の -s は does が引き受けているからです。do / does / did を使ったら、その後ろの動詞は必ず原形です。',
    [bx(12, 12, 296, 28, "× He doesn't likes natto.", C.red, FILL.red, 12), bx(12, 44, 296, 28, "○ He doesn't like natto.", C.green, FILL.green, 12), bx(12, 80, 296, 28, '× Does he likes natto?', C.red, FILL.red, 12), bx(12, 112, 296, 28, '○ Does he like natto?', C.green, FILL.green, 12)],
    'does を使ったら、動詞は原形', GREEN),
  S('主語が単数なのに動詞が原形のままの誤りです。誤 My sister go to school by bus. → 正 goes。誤 Every student have a computer. → 正 has。every ＋ 単数名詞は三人称単数扱いです。',
    [bx(12, 12, 296, 30, '× My sister go to school by bus.', C.red, FILL.red, 12), bx(12, 46, 296, 30, '○ My sister goes to school by bus.', C.green, FILL.green, 12), bx(12, 86, 296, 30, '× Every student have a computer.', C.red, FILL.red, 12), bx(12, 120, 296, 30, '○ Every student has a computer.', C.green, FILL.green, 12)],
    'every ＋ 単数名詞 → 三人称単数', GREEN),
  S('三単現の -s の付け方です。原則は -s（play → plays）。-s / -x / -ch / -sh / -o で終わる語は -es（watch → watches、go → goes、do → does）。子音字＋y は y を i に変えて -es（study → studies、carry → carries）。have は特別に has です。',
    tbl(8, 8, [120, 180], 24, [['語の終わり', '付け方'], ['ふつう', 'play → plays'], ['-s／-x／-ch／-sh／-o', 'watch → watches／go → goes'], ['子音字＋y', 'study → studies'], ['have', 'has（特別）']], BLUE, 11),
    '-s／-es／ies／has の4つを使い分ける', BLUE),
  S('主語が長いときは、修飾部分を外して核になる名詞を見つけます。The boys in my class are very kind. は核が The boys（複数）なので are。One of my friends lives in Tokyo. は核が One（単数）なので lives です。friends に引かれてはいけません。',
    [bx(10, 10, 300, 30, 'One of my friends lives in Tokyo.', C.blue, FILL.blue, 13), ln(40, 44, 76, 44, C.red, false, 3), ln(94, 44, 160, 44, C.gray, true), lb(58, 58, '核 One（単数）', 11, C.red, 'middle', true), lb(128, 58, '修飾（外す）', 11, C.gray, 'middle', true), bx(10, 80, 300, 30, 'The boys in my class are very kind.', C.blue, FILL.blue, 13), lb(160, 128, '核 The boys（複数）→ are', 12, C.ink, 'middle', true)],
    '修飾を外して、核の数で動詞を決める', GREEN),
  S('The number of students are increasing. は誤りで、核は The number（数）なので単数、is が正しいです。students に引かれて are にしてしまうのが典型的な誤りです。',
    [bx(14, 14, 292, 30, '× The number of students are increasing.', C.red, FILL.red, 12), bx(14, 52, 292, 30, '○ The number of students is increasing.', C.green, FILL.green, 12), lb(160, 104, '核 The number（数）＝ 単数', 13, C.ink, 'middle', true), lb(160, 128, 'students に引かれない', 12, C.gray, 'middle', true)],
    'The number of ~ は単数扱い', RED),
  S('まとめ。否定文・疑問文で do / does / did を使ったら、その後ろの動詞は必ず原形です。三単現の -s は does が引き受けています。主語が長いときは、修飾を外して核を見つけます。',
    chain(['主語を指さして三人称単数か確認', 'do／does／did のあとは原形', '長い主語は、核の名詞で決める'], [BLUE, GREEN, YELLOW], 14, 34, 14, 13),
    '主語を見る → 動詞の形を決める', YELLOW),
], '動詞は主語に合わせる。三単現の誤りを見つける');

// ── 誤文訂正③：前置詞の余分と不足 ──
// SEC koko_eigo_s442 0
const f_s442 = show([
  S('「その問題について議論した」を英語にすると、about を入れたくなります。日本語の「〜について」がそのまま英語にも必要な気がするからです。この日本語からの引きずりが、前置詞の誤りのほとんどを生んでいます。',
    [bx(14, 14, 292, 32, 'その問題について議論した', C.blue, FILL.blue, 14), ar(160, 48, 160, 64, C.main), bx(14, 66, 292, 32, 'We discussed about the problem.', C.red, FILL.red, 13), lb(160, 122, '「について」の about は要らない', 13, C.red, 'middle', true)],
    '日本語の「〜について」につられる', RED),
  S('前置詞が不要な他動詞は9つです。discuss, marry, reach, enter, answer, visit, attend, mention, approach。日本語では「〜に」「〜と」「〜について」がつきますが、英語では直接目的語をとります。',
    [head('前置詞が要らない9つの動詞', 14), ...chips(['discuss', 'marry', 'reach', 'enter', 'answer', 'visit', 'attend', 'mention', 'approach'], 30, { size: 13, h: 28 })],
    '9つの動詞は、前置詞なしで目的語をとる', GREEN),
  S('誤りと訂正の例です。discussed about → discussed。reached to → reached。entered into → entered。answered to → answered。visited to → visited。mentioned about → mentioned。',
    tbl(8, 8, [158, 142], 22, [['誤', '正'], ['discussed about the problem', 'discussed the problem'], ['reached to the station', 'reached the station'], ['entered into the room', 'entered the room'], ['answered to my question', 'answered my question'], ['visited to Kyoto', 'visited Kyoto']], BLUE, 10),
    '余分な前置詞を消す', GREEN),
  S('なぜ前置詞が要らないの？→ これらは他動詞で、動詞自体に「〜について」「〜に」の意味がふくまれているからです。日本語では助詞がつくので、前置詞を足したくなるのが誤りの原因です。',
    qa('前置詞が要らないのはなぜ？', '他動詞は、目的語を直接とる。\n動詞自体に「〜について」「〜に」の意味がある。\n日本語の助詞につられて足すのが誤りの原因。', GREEN, 13),
    '日本語で助詞がつく動詞ほど、前置詞が要らない', GREEN),
  S('逆に、前置詞が必要な動詞もあります。listen to（聞く）、wait for（待つ）、look for（探す）、arrive at（到着する）、belong to（所属する）、graduate from（卒業する）。誤 I listened the music. → 正 I listened to the music.',
    [...chips(['listen to', 'wait for', 'look for', 'arrive at', 'belong to', 'graduate from'], 10, { size: 12, h: 26 }), bx(14, 76, 292, 28, '× I listened the music.', C.red, FILL.red, 12), bx(14, 110, 292, 28, '○ I listened to the music.', C.green, FILL.green, 12)],
    '前置詞が必要な動詞は、組で覚える', BLUE),
  S('marry には注意が必要です。My sister married with a doctor. も married to a doctor. も誤りで、正しくは married a doctor. です。ただし形容詞的な be married to / get married to では to を使います。My sister got married to a doctor. も正しい文です。',
    [bx(10, 10, 300, 28, '× She married with him.', C.red, FILL.red, 12), bx(10, 42, 300, 28, '○ She married him.', C.green, FILL.green, 12), bx(10, 78, 300, 28, '○ She got married to him.', C.green, FILL.green, 12), lb(160, 126, 'marry（動詞）は前置詞なし／be・get married to は to', 11, C.gray, 'middle', true)],
    'marry 人　／　get married to 人', GREEN),
  S('to が前置詞になる熟語もあります。look forward to -ing、be used to -ing、object to -ing。誤 I look forward to see you. → 正 to seeing you。見分け方は「to のあとに名詞を置けるか」です。前置詞のあとは名詞か動名詞で、原形は置けません。',
    [bx(12, 12, 296, 28, '× I look forward to see you.', C.red, FILL.red, 12), bx(12, 44, 296, 28, '○ I look forward to seeing you.', C.green, FILL.green, 12), bx(12, 84, 296, 36, 'look forward to the party（名詞が置ける）\n→ to は前置詞 → あとは -ing', C.purple, FILL.purple, 11)],
    '前置詞のあとに、原形は置けない', RED),
  S('まとめ。前置詞は組で覚えます。be interested in（× on）、be good at（× in）、be famous for（× of）、be afraid of（× for）、be different from（× with）。熟語の前置詞は意味から推測すると外れるので、声に出して覚えるのが最短です。',
    chain(['日本語で助詞がつく動詞 → 前置詞が要らない', '前置詞のあとは、名詞か動名詞', '熟語の前置詞は、組で声に出して覚える'], [GREEN, RED, YELLOW], 14, 34, 14, 12),
    '余分な前置詞と、足りない前置詞を探す', YELLOW),
], '前置詞は、日本語の助詞につられず、組で覚える');

// ── 見直し②：つづりの点検 ──
// SEC koko_eigo_s445 0
const f_s445 = show([
  S('because を beacuse と書いてしまう。書いているときは気づかないのに、あとで見ると明らかに違う。つづりのミスは、書いた直後には見えません。だからこそ、時間を空けて別の目で見る「点検」が必要です。',
    [bx(14, 14, 292, 30, 'beacuse', C.red, FILL.red, 16), ar(160, 46, 160, 62, C.main), bx(14, 64, 292, 30, 'because', C.green, FILL.green, 16), lb(160, 118, '書いた直後には見えないので、点検する', 13, C.ink, 'middle', true)],
    'つづりのミスは、書いた直後には見えない', RED),
  S('入試の英作文でよく使うのにまちがえやすい語です。左が誤り、右が正しい形です。',
    tbl(10, 6, [140, 160], 20, [['誤', '正'], ['freind', 'friend'], ['recieve', 'receive'], ['tommorow', 'tomorrow'], ['Wenesday', 'Wednesday'], ['Feburary', 'February'], ['enviroment', 'environment']], BLUE, 11),
    'よくあるまちがい', BLUE),
  S('receive と believe は、なぜ順番がちがうの？→ 「c の後ろは ei の順、それ以外は ie の順」という決まりがあるからです。receive（c のあと ei）、believe と friend（ie）。この決まりを知っていると、recieve や beleive を見抜けます。',
    [bx(10, 14, 140, 34, 'c のあと → ei', C.blue, FILL.blue, 14), bx(170, 14, 140, 34, 'それ以外 → ie', C.green, FILL.green, 14), bx(10, 62, 140, 34, 'receive', C.blue, FILL.blue, 15), bx(170, 62, 140, 34, 'believe／friend', C.green, FILL.green, 14), lb(160, 126, '× recieve　× beleive　× freind', 12, C.red, 'middle', true)],
    'receive は ei、believe と friend は ie', PURPLE),
  S('語尾の変化にも例外があります。study → studies / studied（子音字＋y は y を i に）。play → plays / played（母音字＋y はそのまま）。stop → stopped（短い母音＋子音字1つは重ねる）。make → making（e を取る）。run → running。write → writing（t は重ねない）。',
    tbl(8, 6, [90, 210], 22, [['study', 'studies／studied（y → i）'], ['play', 'plays／played（そのまま）'], ['stop', 'stopped（p を重ねる）'], ['make', 'making（e を取る）'], ['run', 'running（n を重ねる）'], ['write', 'writing（t は重ねない）']], GREEN, 11),
    '語尾の変化は、規則で点検する', GREEN),
  S('大文字の点検です。文の最初、I、国名・言語・曜日・月・人名は大文字で書き始めます。Japan, English, Monday, April, Tom。日本語では小文字でも通じる感覚がありますが、英語では誤りとして扱われます。',
    [bx(10, 12, 300, 28, 'i like english on monday.', C.red, FILL.red, 13), ar(160, 42, 160, 56, C.main), bx(10, 58, 300, 28, 'I like English on Monday.', C.green, FILL.green, 13), lb(160, 106, '文頭・I・国名・言語・曜日・月・人名', 12, C.ink, 'middle', true), lb(160, 128, 'Japan／English／Monday／April／Tom', 12, C.gray, 'middle', true)],
    '文頭・I・固有名詞は大文字', GREEN),
  S('つづりに自信がない語は、書ける語に置きかえてかまいません。delicious が不安なら very good、environment が不安なら nature や the earth と書きます。減点されるより確実です。',
    [bx(14, 14, 130, 32, 'delicious', C.red, FILL.red, 14), ar(146, 30, 172, 30, C.main), bx(176, 14, 130, 32, 'very good', C.green, FILL.green, 14), bx(14, 62, 130, 32, 'environment', C.red, FILL.red, 14), ar(146, 78, 172, 78, C.main), bx(176, 62, 130, 32, 'nature', C.green, FILL.green, 14), lb(160, 122, '自信のない語は、書ける語に置きかえる', 12, C.gray, 'middle', true)],
    '減点されるより、置きかえる', GREEN),
  S('同音異義語は意味で区別します。their（彼らの）、there（そこに）、they are。誤 Their are many students. → 正 There are many students. its（それの）と it is（it\'s）。誤 Its raining. → 正 It is raining. to（〜へ）、too（〜もまた・〜すぎる）、two（2）。',
    tbl(8, 8, [80, 220], 28, [['their', '彼らの　their house'], ['there', 'そこに　There are many students.'], ['its', 'それの（it is ではない）'], ['it is', 'It is raining.（× Its raining）'], ['to／too／two', '〜へ／〜もまた・すぎる／2']], PURPLE, 11),
    '発音が同じ語は、意味で区別する', PURPLE),
  S('まとめ。英作文を書き終えたら、名詞・動詞のつづりを1語ずつ指で追います。40語なら30秒で終わります。読み流すと、書いたときと同じ思いこみで読んでしまうので、指で追って1語ずつ見る状態をつくります。',
    chain(['よくまちがえる語を知っておく', '大文字を点検する（文頭・I・固有名詞）', '指で1語ずつ追う（40語で30秒）'], [BLUE, GREEN, YELLOW], 14, 34, 14, 13),
    '指で追って、1語ずつ見る', YELLOW),
], 'つづりは、時間を空けて指で追って点検する');

// ── 見直し③：単複と主語・動詞の一致 ──
// SEC koko_eigo_s446 0
const f_s446 = show([
  S('「私の友だちの1人が」という主語のとき、動詞は is でしょうか are でしょうか。直前にある friends が複数なので are にしたくなりますが、正解は is です。主語の本当の中心がどこにあるかを見抜けるかどうかが、一致の分かれ目です。',
    [bx(14, 16, 292, 34, 'One of my friends ( is / are ) a doctor.', C.blue, FILL.blue, 13), ar(160, 52, 160, 68, C.main), bx(60, 70, 200, 34, '正解は is', C.green, FILL.green, 15), lb(160, 128, 'friends に引かれない', 12, C.gray, 'middle', true)],
    '主語の本当の中心はどこか', BLUE),
  S('なぜ is なの？→ 動詞の形を決めるのは、主語の核になる名詞だからです。修飾部分（of my friends）を外すと、残る核は One です。One は単数なので単数の動詞になります。',
    qa('is なの？', '動詞を決めるのは主語の核。\n修飾部分 of my friends を外すと、核は One。\nOne ＝ 単数 → is（lives）', GREEN, 13),
    '修飾を外して、残る名詞で決める', GREEN),
  S('The number of students is increasing. は核が The number（数）で単数、A number of students are waiting outside. は A number of 〜 が「多くの〜」の意味で複数扱いなので are です。同じ形に見えても、扱いが逆です。',
    tbl(8, 12, [100, 200], 36, [['', '扱い'], ['The number of ~', '単数 → is（数そのものが主語）'], ['A number of ~', '複数 → are（多くの〜）']], BLUE, 11),
    'The number は単数、A number は複数', BLUE),
  S('every / each は単数扱い、both は複数扱いです。Every student has a computer.（× Every students have は二重に誤り）。Each of the members has a key. Both of my parents are teachers.',
    [bx(10, 10, 300, 32, 'Every student has a computer.', C.green, FILL.green, 13), bx(10, 48, 300, 32, 'Each of the members has a key.', C.green, FILL.green, 13), bx(10, 86, 300, 32, 'Both of my parents are teachers.', C.blue, FILL.blue, 13), lb(160, 136, 'every／each → 単数　both → 複数', 12, C.gray, 'middle', true)],
    'every・each は単数、both は複数', GREEN),
  S('There is / There are は、あとに来る名詞の数で決まります。There is a book on the desk. There are many books on the desk. 誤 There is many books は、正しくは There are many books です。水のように数えられない名詞なら There is a lot of water です。',
    [bx(10, 8, 300, 28, 'There is a book on the desk.', C.green, FILL.green, 12), bx(10, 40, 300, 28, 'There are many books on the desk.', C.green, FILL.green, 12), bx(10, 72, 300, 28, '× There is many books on the desk.', C.red, FILL.red, 12), bx(10, 104, 300, 28, 'There is a lot of water in the bottle.', C.green, FILL.green, 12)],
    'あとの名詞を見てから、be動詞を決める', GREEN),
  S('修飾部分に引かれる例です。The girl who is talking with my brother is my sister. 核は The girl（単数）なので文の動詞は is。途中の is talking は関係代名詞節の中の動詞です。The students who joined the activity were very happy. は核が複数なので were です。',
    [bx(10, 8, 300, 40, 'The girl who is talking with my brother\nis my sister.', C.blue, FILL.blue, 12), lb(160, 62, '核 The girl（単数）→ 文の動詞は is', 12, C.red, 'middle', true), lb(160, 80, '途中の is talking は関係詞節の中', 11, C.gray, 'middle', true), bx(10, 94, 300, 40, 'The students who joined the activity\nwere very happy.', C.blue, FILL.blue, 12), lb(160, 148, '核 The students（複数）→ were', 12, C.ink, 'middle', true)],
    '途中の動詞は、文の動詞ではない', GREEN),
  S('数を表す語は、あとの名詞の形を決めます。many / a few / several / both / two / a lot of のあとは複数形、every / each / a のあとは単数形、much / a little のあとは数えられない名詞です。a few は「少しはある」、few は「ほとんどない」、a little と little も同じ関係です。',
    tbl(8, 8, [110, 190], 26, [['数を表す語', 'あとの名詞'], ['many／a few／several', '複数形（books）'], ['every／each／a', '単数形（book）'], ['much／a little', '数えられない（water）'], ['few／little', 'ほとんどない（否定的）']], BLUE, 11),
    '数を表す語と名詞は、組で覚える', BLUE),
  S('まとめ。主語が長いときは、まず修飾部分（前置詞句・関係代名詞節・分詞）に線を引いて外します。残った名詞が単数か複数かで、動詞の形が決まります。英作文では名詞に指を置いて、数えられるか、a や s があるか、動詞が合っているかを確認します。',
    chain(['修飾部分を外す', '残った名詞が単数か複数かを見る', '動詞の形をそろえる'], [BLUE, GREEN, YELLOW], 14, 34, 14, 13),
    '核の数に、動詞をそろえる', YELLOW),
], '主語の核を見つけて、動詞の形をそろえる');

// ── 見直し④：時制の点検と解答欄の確認 ──
// SEC koko_eigo_s447 0
const f_s447 = show([
  S('英作文で最初は過去形で書いていたのに、途中から現在形に変わってしまう。これはよくあることで、書いている本人はまず気づきません。文章全体で時間の位置がそろっているかを確認するだけで、毎回1〜2点が戻ってきます。',
    [bx(14, 16, 292, 30, 'Last summer, I visited my grandmother.', C.green, FILL.green, 12), bx(14, 54, 292, 30, 'She is very kind and cooks many dishes.', C.red, FILL.red, 12), lb(160, 108, '途中で現在形に変わっている', 13, C.red, 'middle', true)],
    '途中で時制が変わっていないか', RED),
  S('照合①：時を表す語と動詞の形を合わせます。yesterday / last week / ago / then → 過去形。now / today / every day → 現在形。tomorrow / next week / soon → will か be going to。since / for / ever / never / just / already / yet → 現在完了。',
    tbl(8, 8, [130, 170], 28, [['時を表す語', '動詞の形'], ['yesterday／last week／ago', '過去形'], ['now／today／every day', '現在形'], ['tomorrow／next week', 'will／be going to'], ['since／for／ever／never', '現在完了']], BLUE, 11),
    '時を表す語を探して、動詞を合わせる', BLUE),
  S('誤りと訂正の例です。I go to Kyoto last summer. → I went to Kyoto last summer. He has finished his homework yesterday. → He finished his homework yesterday. I know him for ten years. → I have known him for ten years.',
    [bx(10, 10, 300, 24, '× I go to Kyoto last summer.', C.red, FILL.red, 11), bx(10, 36, 300, 24, '○ I went to Kyoto last summer.', C.green, FILL.green, 11), bx(10, 66, 300, 24, '× He has finished his homework yesterday.', C.red, FILL.red, 11), bx(10, 92, 300, 24, '○ He finished his homework yesterday.', C.green, FILL.green, 11), bx(10, 122, 300, 24, '× I know him for ten years. ○ I have known him ...', C.purple, FILL.purple, 10)],
    '語と動詞の形を照合する', GREEN),
  S('has finished と yesterday は、なぜ一緒に使えないの？→ 現在完了は「現在とつながりのある過去」を表すので、yesterday や last year のように過去の一時点を指定する語とは共存できないからです。その場合は過去形にします。',
    qa('現在完了と yesterday は使えない？', '現在完了 ＝ 現在とつながる過去\nyesterday／last year は「過去の一時点」\n共存できない → 過去形にする', RED, 13),
    '過去の一時点を示す語 → 過去形', RED),
  S('照合②：文章全体の時制をそろえます。体験を書く英作文では、全体が過去形になります。Last summer, I visited my grandmother. She was very kind and cooked many dishes for me. I was very happy. ただし「今も変わらない事実」は現在形でよい（My grandmother lives in Nagano.）。',
    [bx(10, 8, 300, 26, 'Last summer, I visited my grandmother.', C.green, FILL.green, 11), bx(10, 38, 300, 26, 'She was very kind and cooked many dishes for me.', C.green, FILL.green, 11), bx(10, 68, 300, 26, 'I was very happy.', C.green, FILL.green, 11), bx(10, 100, 300, 38, 'My grandmother lives in Nagano.\n（今も変わらない事実 → 現在形）', C.blue, FILL.blue, 11)],
    '体験の作文は、全体を過去形にそろえる', GREEN),
  S('照合③：時制の一致。主節が過去形なら、that 節の中も過去形にそろえます。He said that he was busy.（× he is busy）。I thought that she would come.（× will come）。ただし不変の真理は現在形のままです。He said that the earth goes around the sun.',
    [bx(10, 10, 300, 30, 'He said that he was busy.', C.green, FILL.green, 13), bx(10, 46, 300, 30, 'I thought that she would come.', C.green, FILL.green, 13), bx(10, 86, 300, 36, 'He said that the earth goes around the sun.\n（不変の真理は現在形）', C.blue, FILL.blue, 11)],
    '主節が過去 → that 節も過去', GREEN),
  S('照合④：時・条件の副詞節。I will call you when I will arrive. は誤りで、I will call you when I arrive. が正しい。なぜ when 以下だけ現在形なの？→ when / if / before / until / as soon as が導く副詞節の中では、未来のことでも現在形を使う規則だからです。主節の will は残します。',
    [bx(10, 8, 300, 28, '× I will call you when I will arrive.', C.red, FILL.red, 12), bx(10, 40, 300, 28, '○ I will call you when I arrive.', C.green, FILL.green, 12), lb(160, 90, '主節の will は残す。when 以下は現在形。', 12, C.ink, 'middle', true), lb(160, 112, "I don't know when he will come.（名詞節）は will を使う", 11, C.gray, 'middle', true)],
    '副詞節の中は、未来でも現在形', RED),
  S('最後の1分は、解答用紙そのものを確認します。空白がないか、大問番号のずれがないか、英語・日本語・記号などの指定どおりか、文字が判別できるか、受験番号と氏名。残り3分は空白 → 受験番号 → 英作文の -s の順です。試験終了の合図があったら、1文字も書きません。',
    chain(['① 空白がないか', '② 大問番号のずれがないか（指でたどる）', '③ 書く場所・言語・字数の指定', '④ 受験番号・氏名'], [BLUE, BLUE, GREEN, RED], 8, 24, 10, 12),
    '残り3分：空白 → 受験番号 → 英作文の -s', YELLOW),
  S('まとめ。英作文を書き終えたら、動詞にだけ丸をつけて、上から順に時制がそろっているかを見ます。意味を読まずに動詞だけを見るのがこつです。',
    chain(['時を表す語と動詞を照合', '全体の時制をそろえる', '動詞だけに丸をつけて上から見る'], [BLUE, GREEN, YELLOW], 14, 34, 14, 13),
    '意味を読まず、動詞だけを見る', YELLOW),
], '時を表す語と動詞を照合し、最後に解答欄を確認する');

// ── 直前期②：誤答ノートの作り方と回し方 ──
const SKL = ['動詞', '前置詞', '冠詞・数', '語順', '読み違い'];
// SEC koko_eigo_s449 0
const f_s449 = show([
  S('間違えた問題をノートに丁寧に写して、色ペンで解説を書きこむ。時間をかけたのに、そのノートを二度と開かない。よくある失敗です。誤答ノートは作るためではなく、何度も回すためのものです。だから作るのに時間をかけてはいけません。',
    [bx(14, 16, 140, 56, '10回作って\n1回も回さない\n（最悪）', C.red, FILL.red, 13), bx(166, 16, 140, 56, '1回作って\n10回回す\n（正しい）', C.green, FILL.green, 13), lb(160, 104, 'ノートの価値は「回した回数」で決まる', 13, C.ink, 'middle', true)],
    '作った量ではなく、回した回数', RED),
  S('1問1行で、4項目を書きます。①自分が書いた誤答 ②正しい答え ③誤りの型（動詞／前置詞／冠詞・数／語順／読み違い）④次にどうするか（一言）。',
    cols(['① 誤答', '② 正答', '③ 型', '④ 次の一手'], 14, 44, [RED, GREEN, PURPLE, BLUE], 12, 8, 6),
    '4項目を、1行に', BLUE),
  S('記録例です。× He don\'t like → ○ He doesn\'t like ／動詞／主語が三人称単数か毎回指さす。× discussed about → ○ discussed ／前置詞／前置詞不要の9語を音読。× look forward to see → ○ to seeing ／前置詞／to の後ろに名詞が置けるかで判断。',
    tbl(4, 8, [74, 74, 52, 116], 30, [['誤答', '正答', '型', '次の一手'], ["He don't like", "He doesn't like", '動詞', '主語を指さす'], ['discussed about', 'discussed', '前置詞', '9語を音読'], ['to see', 'to seeing', '前置詞', '名詞が置けるか']], BLUE, 10),
    '1問1行。次の一手まで書く', BLUE),
  S('書かないことも決めておきます。問題文の全文（元の問題集にある）、長い解説（1行で書けないなら、覚える情報が多すぎる）、色ペンでの装飾（時間の無駄）。作成にかける時間は1問30秒以内です。過去問1回分で10問まちがえたなら、5分で作ります。',
    [bx(14, 10, 292, 30, '書かない：問題文の全文', C.red, FILL.red, 12), bx(14, 46, 292, 30, '書かない：長い解説・色ペンの装飾', C.red, FILL.red, 12), bx(14, 90, 292, 40, '1問30秒以内\n10問なら5分', C.green, FILL.green, 13)],
    '作る時間をかけるほど、回せなくなる', RED),
  S('回し方の手順です。①誤答側を隠して、正答を思い出す ②思い出せたら○、思い出せなければ✓ ③翌日は✓だけを回す ④週に1回は全部を回す。1問1分で20問なら20分。これを14日続けると、同じ問題を何度も見ることになります。',
    chain(['① 誤答を隠して、正答を思い出す', '② 思い出せたら ○、だめなら ✓', '③ 翌日は ✓ だけ回す', '④ 週に1回は全部回す'], [BLUE, GREEN, PURPLE, MAIN], 8, 24, 10, 12),
    '毎日20分。同じノートを回す', GREEN),
  S('型の集計をします。例：第1週は 動詞8、前置詞6、冠詞・数5、語順3、読み違い3。合計 8＋6＋5＋3＋3＝25個です。集計しないと「なんとなく苦手」で終わり、対策が決まりません。',
    [...[8, 6, 5, 3, 3].flatMap((n, i) => [lb(48, 20 + i * 24, SKL[i], 11, C.ink, 'end', true), bx(54, 8 + i * 24, n * 24, 20, String(n), SEGC[i][0], SEGC[i][1], 11)]), lb(160, 134, '8 ＋ 6 ＋ 5 ＋ 3 ＋ 3 ＝ 25個', 13, C.ink, 'middle', true)],
    '週に1回、誤りの型を数える', GREEN),
  S('次の1週間は、どれを優先するの？→ 動詞です。25個のうち動詞が8個で、全体の3割強を占めます。ここを潰すのがいちばん回収額が大きく、しかも動詞の誤りは「点検手順を作る」ことで機械的に防げます。5つすべてを均等に復習すると、手順が身につきません。',
    qa('どれを優先する？', '最多の動詞（8個／25個）に絞る。\n三単現・時制・助動詞の後ろ・過去分詞の\n点検手順を毎回実行する。', GREEN, 13),
    '直前期は、対象を1つに絞る', GREEN),
  S('3回ルールです。同じ型が3回以上出たら、偶然ではなく自分の癖です。癖は意識するだけでは直らないので、点検手順に組みこみます。例：三単現の落ちが3回出た → 英作文を書いたら必ず動詞に丸をつけて主語を確認する。',
    [bx(14, 12, 292, 34, '同じ型が3回以上 ＝ 自分の癖', C.red, FILL.red, 14), ar(160, 48, 160, 64, C.main), bx(14, 66, 292, 44, '点検手順に組みこむ\n例：動詞に丸をつけて主語を確認', C.green, FILL.green, 13)],
    '癖は、手順で直す', RED),
  S('2週間回して、10回連続で○がついた問題は、ノートから外します（線を引いて消す）。ノートが薄くなっていくと不安が減ります。入試前日は誤答ノートだけを見て、新しいことはしません。他人のノートでは意味がありません。誤りの型は人によって違うからです。',
    chain(['10回連続で ○ → ノートから外す', '前日は誤答ノートだけを見る', '自分がまちがえた問題だけに価値がある'], [GREEN, BLUE, YELLOW], 14, 34, 14, 12),
    'ノートが薄くなるほど、不安は減る', YELLOW),
], '誤答ノートは、1問1行で作り、何度も回す');

// ── 直前期③：試験当日の手順とチェックリスト ──
// SEC koko_eigo_s450 0
const f_s450 = show([
  S('本番で緊張するのは当たり前です。問題は、緊張したときに何をするかを決めていないことです。決めていなければその場で考えることになり、いつもと違うことをしてしまいます。当日の手順を先に決めておけば、あとはなぞるだけです。',
    [bx(14, 14, 292, 40, '決めていない → その場で考える\n→ いつもと違うことをする', C.red, FILL.red, 13), bx(14, 66, 292, 40, '決めてある → 手順をなぞるだけ\n→ 実力どおりに解ける', C.green, FILL.green, 13)],
    '判断する回数が減るほど、実力どおりに解ける', BLUE),
  S('試験開始前です。会場には試験開始の30分前までに着く。英語の直前に見るのは、誤答ノートの型の一覧と、英作文の骨組み（4ブロック）だけ。新しい問題は解きません。解けなかったときの動揺が大きいからです。',
    [bx(14, 12, 292, 30, '会場に開始30分前までに着く', C.blue, FILL.blue, 13), bx(14, 48, 292, 30, '見るのは：誤答ノートの型の一覧・英作文の骨組み', C.green, FILL.green, 12), bx(14, 84, 292, 30, '新しい問題は解かない', C.red, FILL.red, 13)],
    '直前は、新しいことをしない', BLUE),
  S('試験開始直後の30秒です。①受験番号・氏名を書く ②問題冊子をめくって大問構成と配点を確認する ③余白に終了予定時刻を書く。',
    chain(['① 受験番号・氏名を書く', '② 大問構成と配点を確認する', '③ 余白に終了予定時刻を書く'], [BLUE, GREEN, PURPLE], 12, 30, 14, 13),
    '開始直後の30秒でやる3つ', BLUE),
  S('終了予定時刻の書き方の例です。L 9:42 ／ 大問2 9:47 ／ 大問3 9:55 ／ 大問4 10:08 ／ 大問5 10:15 ／ 見直し 10:20。解く順番を決めてあるので、時刻も決められます。',
    tbl(10, 8, [100, 200], 20, [['区切り', '終了予定時刻'], ['リスニング', '9:42'], ['大問2', '9:47'], ['大問3', '9:55'], ['大問4', '10:08'], ['大問5', '10:15'], ['見直し', '10:20']], BLUE, 11),
    '時刻を先に書いておく', BLUE),
  S('頭が真っ白になったら、まず何をするの？→ 判断を必要としない作業から始めます。受験番号を書く、配点を確認する、時刻を書く。この3つは考える必要がなく、手を動かすだけです。その30秒で手が動き始め、そのまま大問1に入れます。落ち着くのを待つより、決めた手順を実行するほうが落ち着きます。',
    qa('頭が真っ白になったら？', '考えなくていい作業から始める。\n受験番号・配点・時刻を書く（手を動かすだけ）。\n手順を実行すると、結果的に落ち着く。', GREEN, 12),
    '落ち着くのを待たず、手順を実行する', GREEN),
  S('リスニングと大問2〜5です。放送前の指示文が読まれている数十秒で、大問1の選択肢に目を通す。1回目で答えが決まったら、2回目は確認に使う。分からなくても必ず何かを書く。大問2以降は、練習してきた順番で解き、1問3分を超えたら印をつけて次へ進みます。',
    [bx(10, 10, 300, 34, 'リスニング：指示文の間に選択肢を見る\n分からなくても必ず何か書く', C.blue, FILL.blue, 11), bx(10, 50, 300, 34, '大問2〜5：練習した順番で解く', C.green, FILL.green, 12), bx(10, 90, 300, 34, '1問3分を超えたら、印をつけて次へ', C.red, FILL.red, 12)],
    '1問3分を超えたら離れる', GREEN),
  S('終了5分前に、あと2問残っていて解けそうな感触があったらどうするの？→ 見直しに移ります。残り2問を解いても正解の保証はありませんが、見直しでは複数形の -s、三単現の -s、つづり、冠詞、空欄もれを確実に点に戻せます。残りの問題は、見直しが終わって時間があれば戻ります。',
    qa('解けそうでも、見直し？', '「解けそう」という感触は当てにならない。\n見直しは確実に点になる作業。\n空欄 → 英作文の4点確認 → 記述の文末 → 受験番号', RED, 12),
    '終了5分前は、必ず見直しへ', RED),
  S('前日と当日朝です。前日は誤答ノートを1時間かけて見返し、英作文の骨組みを3テーマぶん口に出して、不規則動詞の過去分詞を50語ほど声に出して確認し、23時までに寝ます。当日は試験開始の3時間前に起き、朝食をとります。',
    chain(['前日：誤答ノートを全部見返す', '前日：英作文の骨組みを口に出す・23時までに寝る', '当日：3時間前に起きて朝食をとる'], [BLUE, GREEN, MAIN], 14, 34, 14, 12),
    '前日は、新しい問題をやらない', BLUE),
  S('試験が終わったあとは、終わった科目の答え合わせをしません。次の科目に影響するからです。友人と問題の話もしません。次の科目の準備だけをします。まとめ：当日にやることは、すべて過去問演習で一度は試したことに限ります。初めてやることを本番で試しません。',
    chain(['終わった科目の答え合わせをしない', '次の科目の準備だけをする', '本番では、試したことのあることだけ'], [RED, BLUE, YELLOW], 14, 34, 14, 13),
    '決めた手順を、なぞるだけ', YELLOW),
], '当日の流れを先に決めて、手順どおりに解く');

// ── 曜日と月の言い方 ──
// SEC new20_j1_eigo_01 1
const f_new20_j1_eigo_01 = show([
  S('曜日は Sunday から Saturday の7つです。まず曜日の名前を確認します。どれも大文字で書き始めます。',
    [head('7つの曜日', 14), ...chips(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], 28, { size: 13, h: 28 })],
    'Sunday ~ Saturday', BLUE),
  S('曜日も月も、文の途中でも必ず大文字で書き始めます。なぜ大文字なの？→ 曜日・月の名前は国名（Japan）や人名（Ken）と同じ固有名詞の仲間だからです。My birthday is in march. は誤りで、March が正しいです。',
    [bx(14, 16, 130, 34, 'in march', C.red, FILL.red, 14), lb(160, 33, '→', 16, C.main, 'middle', true), bx(176, 16, 130, 34, 'in March', C.green, FILL.green, 14), bx(14, 66, 292, 44, '曜日・月は固有名詞の仲間\nJapan／Ken と同じ大文字', C.blue, FILL.blue, 13)],
    '曜日・月は、文の途中でも大文字', GREEN),
  S('曜日のたずね方と答え方です。What day is it today?（今日は何曜日ですか）― It\'s Monday.（月曜日です）。答えの主語は it で、天候や日付を答えるときと同じ、訳さない it です。',
    [bx(14, 14, 292, 36, 'What day is it today?', C.blue, FILL.blue, 14), ar(160, 52, 160, 68, C.main), bx(14, 70, 292, 36, "It's Monday.", C.green, FILL.green, 14), lb(160, 128, '主語の it は「訳さない it」', 12, C.gray, 'middle', true)],
    '曜日をたずねるときは day', BLUE),
  S('月は12個あります。多くは -ary か -ber で終わるグループに分けると覚えやすくなります。-ary は January と February、-ber は September, October, November, December です。May だけは3文字です。',
    [...chips(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], 8, { size: 11, h: 22 }), bx(14, 100, 140, 32, '-ary：Jan・Feb', C.blue, FILL.blue, 12), bx(166, 100, 140, 32, '-ber：Sep〜Dec', C.green, FILL.green, 12)],
    '12の月を、語尾のグループで覚える', BLUE),
  S('つづりでまちがえやすい月です。February は、真ん中の r を忘れて Febuary と書く人が非常に多いです。なぜ忘れやすいの？→ 2つ目の r が聞き取りにくいからです。Feb-ru-ary と区切って発音しながら書きます。August は Au- で始まり、December は De- で始まります（c であって s ではない）。',
    [bx(14, 12, 130, 30, 'Febuary', C.red, FILL.red, 14), lb(160, 27, '→', 16, C.main, 'middle', true), bx(176, 12, 130, 30, 'February', C.green, FILL.green, 14), lb(160, 66, 'Feb - ru - ary', 15, C.ink, 'middle', true), lb(160, 92, 'r が2か所', 12, C.red, 'middle', true), lb(160, 118, 'Au-gust　De-cember（c）', 12, C.gray, 'middle', true)],
    '区切って発音しながら書く', GREEN),
  S('月のたずね方と答え方です。What month is it?（今、何月ですか）― It\'s May.（5月です）。What month were you born in?（何月生まれですか）― I was born in April.',
    [bx(14, 10, 292, 30, 'What month is it?', C.blue, FILL.blue, 13), bx(14, 44, 292, 28, "It's May.", C.green, FILL.green, 13), bx(14, 84, 292, 30, 'What month were you born in?', C.blue, FILL.blue, 13), bx(14, 118, 292, 28, 'I was born in April.', C.green, FILL.green, 13)],
    '月をたずねるときは month', BLUE),
  S('短縮形はカレンダーや表でよく使います。Jan., Feb., Mar., Apr., Jun., Jul., Aug., Sep., Oct., Nov., Dec.（May は短くしません）。曜日にも Mon., Tue. などがあります。',
    [...chips(['Jan.', 'Feb.', 'Mar.', 'Apr.', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'], 10, { size: 12, h: 24 }), bx(30, 90, 260, 34, 'May は短くしない', C.main, FILL.warm, 13)],
    '表やカレンダーでは短縮形', PURPLE),
  S('注意：曜日も月も、名詞の前に a や the をつけません。× a Monday, × the May とは言わず、そのまま Monday, May と使います。まとめ：大文字で書き始める、語尾でグループ分け、February は r が2か所。',
    chain(['大文字で書き始める', '-ary と -ber のグループで覚える', 'February は r が2か所'], [GREEN, BLUE, YELLOW], 14, 34, 14, 13),
    '曜日と月は、そのまま大文字で使う', YELLOW),
], '月は語尾でグループ分けし、大文字で正しくつづる');

// ── 日付の言い方とたずね方 ──
// SEC new20_j1_eigo_02 1
const f_new20_j1_eigo_02 = show([
  S('カレンダーに「5/5」と数字だけで書いてあっても、声に出して読むときは序数を使います。日付は数字ではなく序数で読む。この一点を知っているかどうかで、英作文や会話の自然さが大きく変わります。',
    [bx(20, 14, 120, 40, 'May 5', C.gray, FILL.gray, 18), ar(142, 34, 178, 34, C.main), bx(180, 14, 120, 40, 'May fifth', C.green, FILL.green, 16), lb(160, 88, '書くときは数字でも', 13, C.ink, 'middle', true), lb(160, 112, '読むときは序数（the fifth）', 13, C.red, 'middle', true)],
    '日付は、序数で読む', BLUE),
  S('基本の読み方です。1st → first、2nd → second、3rd → third、5th → fifth、10th → tenth。May 1st は the first of May と読みます。',
    tbl(8, 8, [100, 100, 100], 24, [['書き方', '読み方', '日付の例'], ['1st', 'first', 'May 1st'], ['2nd', 'second', 'May 2nd'], ['3rd', 'third', 'May 3rd'], ['5th', 'fifth', 'May 5th'], ['10th', 'tenth', 'May 10th']], BLUE, 12),
    '数字 → 序数に自動変換する', BLUE),
  S('なぜ序数で読むの？→ 日付は「その月の何番目の日か」を表すからです。May 5 は「5月の5番目の日」なので、five ではなく fifth と読みます。「メイ・ファイブ」と基数のまま読むのはよくある誤りです。',
    qa('日付は序数？', '日付は「その月の何番目の日」を表す。\nMay 5 ＝ 5月の5番目の日 → fifth\n× May five（基数のまま）', GREEN, 13),
    '「何番目の日」だから、序数', GREEN),
  S('20以降の序数です。20th → twentieth、21st → twenty-first、23rd → twenty-third、30th → thirtieth、31st → thirty-first。月の日付は31日まであるので、20台・30台も必要です。',
    tbl(10, 6, [120, 170], 23, [['書き方', '読み方'], ['20th', 'twentieth'], ['21st', 'twenty-first'], ['23rd', 'twenty-third'], ['30th', 'thirtieth'], ['31st', 'thirty-first']], PURPLE, 12),
    '20台・30台の序数', PURPLE),
  S('日付のたずね方と答え方です。What\'s the date today?（今日は何日ですか）― It\'s May 5th.（5月5日です）。What\'s today\'s date? も同じ意味です。It\'s the 5th of May. という言い方もあります。',
    [bx(14, 12, 292, 32, "What's the date today?", C.blue, FILL.blue, 14), ar(160, 46, 160, 60, C.main), bx(14, 62, 292, 32, "It's May 5th.", C.green, FILL.green, 14), bx(14, 104, 292, 32, "It's the 5th of May.", C.green, FILL.green, 13)],
    '日付をたずねるときは date', BLUE),
  S('day と date はどうちがうの？→ day は曜日、date は日付をたずねる語だからです。形が似ているので混同しやすいです。What day is it today? ― It\'s Monday. What\'s the date today? ― It\'s May 5th.',
    [bx(10, 10, 140, 34, 'What day ~?', C.blue, FILL.blue, 14), bx(170, 10, 140, 34, "What's the date ~?", C.green, FILL.green, 12), ar(80, 46, 80, 62, C.blue), ar(240, 46, 240, 62, C.green), bx(10, 64, 140, 34, "It's Monday.", C.blue, FILL.blue, 13), bx(170, 64, 140, 34, "It's May 5th.", C.green, FILL.green, 13), lb(160, 126, 'day ＝ 曜日　date ＝ 日付', 13, C.ink, 'middle', true)],
    'day は曜日、date は日付', GREEN),
  S('「〜日に」と言うときは前置詞 on を使います。We have a school trip on May 20th.（5月20日に修学旅行がある）。My birthday is on June 3rd.（誕生日は6月3日だ）。',
    [bx(10, 14, 300, 34, 'We have a school trip on May 20th.', C.green, FILL.green, 13), bx(10, 58, 300, 34, 'My birthday is on June 3rd.', C.green, FILL.green, 13), lb(160, 118, '日付・曜日の前は on', 13, C.ink, 'middle', true)],
    '「〜日に」は on', GREEN),
  S('西暦は下2桁ずつ区切って読むのが基本です。2026 → twenty twenty-six。1998 → nineteen ninety-eight。2005 のような2000年台の最初は two thousand five と読みます。',
    tbl(10, 10, [90, 210], 30, [['西暦', '読み方'], ['2026', 'twenty twenty-six'], ['1998', 'nineteen ninety-eight'], ['2005', 'two thousand five（例外）']], BLUE, 12),
    '西暦は2桁ずつ区切る', BLUE),
  S('まとめ。日付は書き方が数字でも、声に出すときは序数で読みます。たずねるときは day（曜日）と date（日付）を使い分け、「〜日に」は on を使います。',
    chain(['数字の日付 → 序数で読む', 'day は曜日、date は日付', '「〜日に」は on'], [GREEN, BLUE, YELLOW], 14, 34, 14, 13),
    '日付を見たら、頭の中で序数に変える', YELLOW),
], '日付は数字ではなく序数で読む');

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
  'xf_koko_eigo_s426': f_s426,
  'xf_koko_eigo_s428': f_s428,
  'xf_koko_eigo_s429': f_s429,
  'xf_koko_eigo_s431': f_s431,
  'xf_koko_eigo_s433': f_s433,
  'xf_koko_eigo_s437': f_s437,
  'xf_koko_eigo_s439': f_s439,
  'xf_koko_eigo_s441': f_s441,
  'xf_koko_eigo_s442': f_s442,
  'xf_koko_eigo_s445': f_s445,
  'xf_koko_eigo_s446': f_s446,
  'xf_koko_eigo_s447': f_s447,
  'xf_koko_eigo_s449': f_s449,
  'xf_koko_eigo_s450': f_s450,
  'xf_new20_j1_eigo_01': f_new20_j1_eigo_01,
  'xf_new20_j1_eigo_02': f_new20_j1_eigo_02,
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
  'koko_eigo_s426#0': 'xf_koko_eigo_s426',
  'koko_eigo_s428#0': 'xf_koko_eigo_s428',
  'koko_eigo_s429#0': 'xf_koko_eigo_s429',
  'koko_eigo_s431#0': 'xf_koko_eigo_s431',
  'koko_eigo_s433#0': 'xf_koko_eigo_s433',
  'koko_eigo_s437#0': 'xf_koko_eigo_s437',
  'koko_eigo_s439#0': 'xf_koko_eigo_s439',
  'koko_eigo_s441#0': 'xf_koko_eigo_s441',
  'koko_eigo_s442#0': 'xf_koko_eigo_s442',
  'koko_eigo_s445#0': 'xf_koko_eigo_s445',
  'koko_eigo_s446#0': 'xf_koko_eigo_s446',
  'koko_eigo_s447#0': 'xf_koko_eigo_s447',
  'koko_eigo_s449#0': 'xf_koko_eigo_s449',
  'koko_eigo_s450#0': 'xf_koko_eigo_s450',
  'new20_j1_eigo_01#1': 'xf_new20_j1_eigo_01',
  'new20_j1_eigo_02#1': 'xf_new20_j1_eigo_02',
};
