// 高校受験 英語（比較・不定詞・動名詞ほか 30 単元）の「動く図解スライド」。
// 「なぜ？」の連鎖で 7 枚以上。単元の節（section）ごとに 1 枚の図解をひもづける。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, show, fresh } from './diagram-kit';

type Col = [string, string];
const B: Col = [C.blue, FILL.blue];
const G: Col = [C.green, FILL.green];
const R: Col = [C.red, FILL.red];
const M: Col = [C.main, FILL.warm];
const P: Col = [C.purple, FILL.purple];
const Y: Col = [C.main, FILL.yellow];
const GR: Col = [C.gray, FILL.gray];

// 下の帯（y=160 から）に、そのスライドのひとことを出す。\n で改行できる。
const cap = (t: string, c: Col = B, size = 12): DiagramElement => {
  const n = t.split('\n').length;
  return bx(14, 160, 292, 16 + 15 * n, t, c[0], c[1], size);
};
// 1枚のスライド＝まっさらな図＋下の帯
const S = (note: string, top: DiagramElement[], capText: string, c: Col = B, size = 12) => ({
  note,
  add: fresh(...top, cap(capText, c, size)),
});
// 「なぜ？」の問い（上の帯）
const Q = (t: string): DiagramElement => bx(8, 6, 304, 34, 'なぜ？ ' + t, P[0], P[1], 12);
// ふつうの見出し
const H = (t: string, c: Col = M, y = 6, h = 30, size = 12): DiagramElement => bx(8, y, 304, h, t, c[0], c[1], size);

const un = (t: string) => [...t].reduce((a, ch) => a + (ch.charCodeAt(0) < 256 ? 0.55 : 1), 0);
// 箱を横一列に並べる（文字数に合わせた幅。入りきらないときは全体を縮める）
const seq = (parts: [string, Col?][], y: number, h = 30, size = 12, gap = 4): DiagramElement[] => {
  const ws = parts.map(([t]) => Math.max(...t.split('\n').map(un)) * size + 12);
  const sum = ws.reduce((a, b) => a + b, 0) + gap * (parts.length - 1);
  const k = Math.min(1, 304 / sum);
  let x = 8 + (304 - sum * k) / 2;
  return parts.map(([t, c], i) => {
    const col = c ?? B;
    const w = ws[i] * k;
    const e = bx(x, y, w, h, t, col[0], col[1], size);
    x += (ws[i] + gap) * k;
    return e;
  });
};
// 左右2列の表（左：見出し語、右：説明）
const tbl = (rows: [string, string][], y0: number, cl: Col = B, cr: Col = GR, wl = 112, h = 24, size = 12): DiagramElement[] =>
  rows.flatMap(([a, b], i) => [
    bx(8, y0 + i * (h + 4), wl, h, a, cl[0], cl[1], size),
    bx(8 + wl + 4, y0 + i * (h + 4), 304 - wl - 4, h, b, cr[0], cr[1], size),
  ]);
// 縦に並べた箱（矢印なし）
const col = (labels: string[], x: number, w: number, y0: number, c: Col, h = 24, size = 12, gap = 4): DiagramElement[] =>
  labels.map((t, i) => bx(x, y0 + i * (h + gap), w, h, t, c[0], c[1], size));
const OK = (t: string, y: number, size = 12): DiagramElement => bx(8, y, 304, 26, '○ ' + t, G[0], G[1], size);
const NG = (t: string, y: number, size = 12): DiagramElement => bx(8, y, 304, 26, '× ' + t, R[0], R[1], size);
const lab = (t: string, y: number, c: string = C.gray, size = 11): DiagramElement => lb(160, y, t, size, c, 'middle', true);
const dn = (x: number, y1: number, y2: number, c: string = C.main): DiagramElement => ar(x, y1, x, y2, c);

// ───────── s237 差を表す語句 ─────────
const s237 = show([
  S('「ケンはトムより2歳年上だ」を英語にするとき、「2歳」はどこに入れるのでしょう。答えは比較級 older のすぐ前です。two years が、どれだけちがうかを表す語句（差を表す語句）です。',
    [H('Ken is two years older than Tom.', M, 8, 30, 14), ...seq([['Ken is', GR], ['two years', R], ['older', B], ['than Tom.', GR]], 56, 36, 13), lab('差の語句は older の直前', 110, C.red)],
    '差の語句は 比較級の直前に置く'),
  S('なぜ older の前なのでしょう。差の語句は「どれだけ older なのか」を説明する言葉だからです。much taller（ずっと背が高い）や a little taller（少し背が高い）も、同じ場所に入る仲間です。',
    [Q('older の直前なの？'), bx(12, 52, 92, 28, 'two years', R[0], R[1], 12), bx(12, 84, 92, 28, 'much', R[0], R[1], 12), bx(12, 116, 92, 28, 'a little', R[0], R[1], 12), ar(108, 66, 160, 98, C.red), ar(108, 98, 160, 98, C.red), ar(108, 130, 160, 98, C.red), bx(164, 82, 144, 32, 'older / taller', B[0], B[1], 14)],
    'どれだけ？を説明する語は 比較級の前', R),
  S('なぜ two years と複数形にするのでしょう。年が2つ以上あるからです。差が1なら one year older と単数形、2以上なら two years、20 meters のように複数形にします。ただし yen だけは複数形にしません。',
    [Q('two years と s がつくの？'), ...tbl([['1のとき', 'one year older'], ['2以上のとき', 'two years older'], ['20メートル', '20 meters longer'], ['300円', '300 yen cheaper（yen に s なし）']], 46, B, GR, 100, 22, 12)],
    '2以上は複数形。ただし yen は s をつけない', B),
  S('日本語は「トムより・2歳・年上」の順ですが、英語は「2歳・年上・トムより」と逆になります。日本語のまま並べた × older two years than Tom は誤りです。〈差 ＋ 比較級 ＋ than〉のかたまりで覚えましょう。',
    [H('日本語と英語は順番が逆になる', M, 6, 28), ...seq([['トムより', GR], ['2歳', R], ['年上', B]], 44, 28, 12), lab('日本語の順', 80), ...seq([['two years', R], ['older', B], ['than Tom', GR]], 96, 28, 12), lab('英語の順', 132), NG('older two years than Tom（日本語の順のまま）', 138)].slice(0, 9),
    '英語は〈差 ＋ 比較級 ＋ than〉の順', R),
  S('では、数字から英文を作ってみましょう。ケン15歳、トム13歳なら、まず引き算で 15−13＝2。差は2歳なので、Ken is two years older than Tom. となります。',
    [H('Ken 15歳　Tom 13歳', M, 8, 30, 14), ...seq([['15', B], ['−', GR], ['13', B], ['＝', GR], ['2', R]], 50, 36, 16), dn(160, 90, 104), bx(20, 106, 280, 36, 'Ken is two years older than Tom.', G[0], G[1], 14)],
    '先に引き算で差を出してから英文にする', G),
  S('逆から言うこともできます。年上のケンが主語なら older、年下のトムが主語なら younger を使い、Tom is two years younger than Ken. となります。差の2歳はどちらも同じです。',
    [H('同じ「2歳の差」を 2通りで言える', M, 6, 28), bx(10, 44, 300, 40, 'Ken is two years older than Tom.', B[0], B[1], 13), bx(10, 94, 300, 40, 'Tom is two years younger than Ken.', R[0], R[1], 13), lab('主語が入れかわると older ↔ younger', 146)],
    '主語を変えたら older と younger も入れかえる', M),
  S('身長の問題です。ケン152cm、ボブ168cm。差は 168−152＝16cm。背の高いボブが主語なら Bob is 16 centimeters taller than Ken. です。centimeters と複数形にするのを忘れないようにします。',
    [bx(70, 126 - 76, 60, 76, 'Ken\n152cm', B[0], B[1], 12), bx(190, 126 - 84, 60, 84, 'Bob\n168cm', R[0], R[1], 12), ln(30, 126, 290, 126, C.gray), lb(160, 20, '差 ＝ 168 − 152 ＝ 16cm', 14, C.red, 'middle', true), lb(160, 144, 'Bob is 16 centimeters taller than Ken.', 12, C.ink, 'middle', true)],
    '16 centimeters ＋ taller ＋ than Ken', R),
  S('まとめです。差を表す語句は比較級の直前、2以上なら複数形（yen は別）。数字が出てきたら、先に引き算をしてから英文を作ります。',
    [H('まとめ', P, 6, 26), ...seq([['主語 is', GR], ['差の語句', R], ['比較級', B], ['than ～', GR]], 44, 36, 12), lab('例：Ken is two years older than Tom.', 94, C.ink), lab('例：Bob is 16 centimeters taller than Ken.', 112, C.ink)],
    '〈差 ＋ 比較級 ＋ than〉をひとかたまりで', P),
], '差を表す語句の置き場所');

// ───────── s238 比べる対象をそろえる ─────────
const s238 = show([
  S('「私のかばんはあなたより重い」を My bag is heavier than you. と書くと、かばんと人を比べる変な文になります。日本語では自然に聞こえるので気づきにくい、入試の定番の誤りです。',
    [H('My bag is heavier than you.', R, 6, 30, 14), bx(24, 56, 100, 40, 'my bag\n（かばん）', B[0], B[1], 12), bx(196, 56, 100, 40, 'you\n（あなた自身）', R[0], R[1], 12), lb(160, 76, '≠', 22, C.red, 'middle', true), lab('かばんと人を比べてしまっている', 120, C.red)],
    '比べるものの種類がそろっていない', R),
  S('なぜ誤りなのでしょう。主語が「かばん」なので、than のあとも「かばん」でなければ比べられないからです。かばんとかばんなら比べられます。',
    [Q('you ではだめなの？'), bx(24, 56, 100, 40, 'my bag\n（かばん）', B[0], B[1], 12), bx(196, 56, 100, 40, 'your bag\n（かばん）', B[0], B[1], 12), lb(160, 76, '＝', 22, C.green, 'middle', true), lab('同じ種類どうしを比べる', 120, C.green)],
    '主語が物なら than のあとも物', G),
  S('では「あなたのかばん」を一語で言うには？ yours を使います。your bag のくり返しをさけた形で、My bag is heavier than yours. となります。mine, his, hers, ours, theirs も同じ仲間です。',
    [Q('yours という形があるの？'), OK('My bag is heavier than yours.', 46), ...tbl([['私のもの', 'mine'], ['あなたのもの', 'yours'], ['彼のもの', 'his']], 80, B, GR, 100, 22, 12)],
    'yours ＝ your bag（持ち主を表す代名詞）', G),
  S('では人口を比べる文はどうでしょう。The population of Tokyo is larger than ... のあとに Osaka とだけ書くと、人口と都市を比べてしまいます。比べたいのは「東京の人口」と「大阪の人口」です。',
    [H('The population of Tokyo is larger than Osaka.', R, 6, 30, 12), bx(14, 52, 130, 40, 'the population\nof Tokyo（人口）', B[0], B[1], 12), bx(176, 52, 130, 40, 'Osaka\n（都市）', R[0], R[1], 12), lb(160, 72, '≠', 22, C.red, 'middle', true), lab('人口と都市を比べている', 112, C.red)],
    '「東京の人口」と比べるのは「大阪の人口」', R),
  S('そこで、くり返しになる the population を that に置きかえます。The population of Tokyo is larger than that of Osaka. that ＝ the population で、that of Osaka が「大阪の人口」です。',
    [H('The population of Tokyo is larger\nthan that of Osaka.', G, 6, 38, 12), bx(14, 56, 130, 40, 'the population\nof Tokyo', B[0], B[1], 12), bx(176, 56, 130, 40, 'that of Osaka\n（大阪の人口）', B[0], B[1], 12), lb(160, 76, '＝', 22, C.green, 'middle', true), lab('that が the population の代わりをする', 116, C.green)],
    'that of ～ ＝ 〈the 名詞〉のくり返し', G),
  S('なぜ one ではだめなのでしょう。one は a book → one のように、数えられる名詞のくり返しにしか使えません。that of は〈the ＋ 名詞 ＋ of〉の名詞部分のくり返しで、population のような名詞にも使えます。',
    [Q('one を使ってはいけないの？'), ...tbl([['one', 'a book → one（数えられる名詞）'], ['that of', 'the population of ～ → that of ～']], 52, B, GR, 70, 32, 12), NG('...larger than one of Osaka', 124)],
    'one は数えられる名詞だけ\nthat of は the 名詞 of のくり返し', R),
  S('くり返す名詞が複数のときは those を使います。The prices of these books are higher than those of the magazines. those ＝ the prices です。単数なら that、複数なら those と覚えます。',
    [Q('those になるのはいつ？'), bx(8, 50, 148, 40, 'population, weather\n（単数）', B[0], B[1], 11), ar(156, 70, 170, 70, C.main), bx(170, 50, 142, 40, 'that of ～', B[0], B[1], 13), bx(8, 98, 148, 40, 'prices, students\n（複数）', R[0], R[1], 11), ar(156, 118, 170, 118, C.main), bx(170, 98, 142, 40, 'those of ～', R[0], R[1], 13)],
    '単数 → that of　複数 → those of', R),
  S('まとめです。than のあとを見て「何と何を比べているか」を声に出して確かめましょう。人のもの → yours など、〈the 名詞 of〉のくり返し → that of / those of。',
    [H('まとめ', P, 6, 26), ...tbl([['持ち主を言う', 'mine / yours / his ...'], ['数えられる名詞', 'that one / those'], ['the 名詞 of ～', 'that of ～ / those of ～']], 44, P, GR, 112, 30, 12)],
    '比べる相手は 主語と同じ種類にそろえる', P),
], '比べる対象をそろえる');

// ───────── s239 比較の疑問文 ─────────
const s239 = show([
  S('「信濃川と利根川ではどちらが長いですか」。二つを比べてたずねるときは、文の最後に〈, A or B?〉をつけます。Which is longer, the Shinano River or the Tone River?',
    [H('Which is longer, the Shinano River\nor the Tone River?', M, 6, 38, 12), ...seq([['Which is', GR], ['longer', B], [',', GR], ['A', R], ['or', GR], ['B', R], ['?', GR]], 56, 34, 14), lab('比べる二つを or でならべる', 104, C.red)],
    'Which is 比較級, A or B ?'),
  S('なぜ最後に A or B を言うのでしょう。「どちらが」だけでは、何と何を比べているのかが相手に伝わらないからです。この or は「または」ではなく「AとBのどちら」という意味です。',
    [Q('A or B をつけるの？'), bx(12, 52, 130, 34, 'Which is longer?', R[0], R[1], 13), lb(160, 69, '→', 20, C.main), bx(176, 52, 132, 34, '何と何を比べるの？', R[0], R[1], 11), bx(12, 100, 296, 36, 'Which is longer, A or B?\n比べる二つがはっきりする', G[0], G[1], 12)],
    '二つを示すために A or B をつける', G),
  S('人をたずねるときは Who を使います。Who is taller, Ken or Tom? — Ken is. 答えるときは質問の動詞に合わせて、be動詞の質問には is で答えます。',
    [H('Who is taller, Ken or Tom?', B, 6, 30, 14), dn(160, 38, 50), bx(60, 52, 200, 34, 'Ken is.', G[0], G[1], 14), lab('質問が is → 答えも is', 106, C.green), lab('（Ken is taller. を短くした形）', 124)],
    'be動詞の質問 → is で答える', B),
  S('では Who runs faster, Ken or Tom? はどう答えるでしょう。質問の動詞が runs という一般動詞なので、答えは Ken does. です。Ken is. は誤りです。',
    [H('Who runs faster, Ken or Tom?', B, 6, 30, 14), dn(160, 38, 50), bx(10, 52, 140, 34, 'Ken does.', G[0], G[1], 14), bx(170, 52, 140, 34, 'Ken is.', R[0], R[1], 14), lab('一般動詞の質問は does / do', 106, C.green)],
    '一般動詞の質問 → does で答える', B),
  S('好みをたずねるときは Which do you like better, tea or coffee? と言います。答えも better を残して I like tea better. と答えるのが安全です。I like tea. だけでは不十分とされることがあります。',
    [H('Which do you like better, tea or coffee?', B, 6, 30, 12), dn(160, 38, 50), OK('I like tea better.', 52, 13), NG('I like tea.（better がない）', 84, 12)],
    '質問の better を答えにも残す', B),
  S('なぜ better なのでしょう。tea と coffee の二つを比べているからです。二つのときは比較級 better。三つ以上の中からなら最上級 the best を使います。',
    [Q('二つのときは better なの？'), bx(8, 52, 144, 40, '二つ（A or B）\nlike better', B[0], B[1], 12), bx(168, 52, 144, 40, '三つ以上\nlike the best', R[0], R[1], 12), lab('例：Which season do you like the best?', 116, C.ink)],
    '二つ → 比較級　三つ以上 → 最上級', R),
  S('二つか三つ以上かは、文にある手がかりで見分けます。「A or B」と二つだけ出ていれば比較級。of the three や in your class のように集団が出ていれば最上級です。',
    [H('二つか、三つ以上か？', M, 6, 26), bx(8, 40, 304, 42, 'Which is longer, A or B?\n二つだけ → 比較級', B[0], B[1], 12), bx(8, 88, 304, 56, 'Who is the tallest of the three?\nof the three / in your class → 最上級', R[0], R[1], 12)],
    '数を示す語句が見分けのてがかり', M),
  S('まとめです。二つなら〈Which is 比較級, A or B?〉。答えは質問の動詞（is / does / like ～ better）に合わせます。三つ以上なら最上級にします。',
    [H('まとめ', P, 6, 26), ...tbl([['be動詞の質問', '— Ken is.'], ['一般動詞の質問', '— Ken does.'], ['like better の質問', '— I like tea better.'], ['三つ以上', 'the 最上級 を使う']], 42, P, GR, 128, 26, 12)],
    '質問の形に合わせて答える', P),
], '比較の疑問文と答え方');

// ───────── s242 最上級の the を使わない場合 ─────────
const s242 = show([
  S('最上級には the をつけると習いましたが、「私のいちばんの友達」は my best friend で、the はありません。なぜでしょう。',
    [Q('my best friend に the がないの？'), OK('He is my best friend.', 52, 14), NG('He is my the best friend.', 86, 14)],
    '所有格があるときは the を使わない', R),
  S('the は「これだ」と決める言葉で、my も「私の」と決める言葉です。名詞を決める語は一つしか置けません。a と the を同時に使えない（× a the book）のと同じ理屈です。',
    [Q('二つ並べてはいけないの？'), ...seq([['my', B], ['the', R], ['best friend', GR]], 54, 34, 14), lb(160, 104, '決める語が二つ → ×', 14, C.red, 'middle', true), ...seq([['a', B], ['the', R], ['book', GR]], 116, 28, 12)],
    '名詞を決める語は一つだけ', R),
  S('所有格は my, your, his, her, our, their, Ken’s などです。いずれも the の代わりに最上級の前に置きます。Ken’s oldest brother, her most famous book のように使います。',
    [H('所有格 ＋ 最上級（the はなし）', M, 6, 28), ...tbl([['my best friend', 'わたしのいちばんの友達'], ["Ken's oldest brother", 'ケンのいちばん上の兄'], ['her most famous book', '彼女のいちばん有名な本']], 42, B, GR, 150, 30, 12)],
    '所有格がつけば the は不要', B),
  S('もう一つ、副詞の最上級では the を省略できます。Ken runs (the) fastest in his class. the はあってもなくても正しい文です。',
    [H('Ken runs (the) fastest in his class.', B, 6, 30, 13), ...seq([['Ken runs', GR], ['(the)', Y], ['fastest', B], ['in his class.', GR]], 54, 34, 13), lab('the はあってもなくてもよい', 104, C.main)],
    '副詞の最上級は the を省略できる', B),
  S('なぜ副詞だと省略できるのでしょう。形容詞の最上級は名詞をくわしくするので、the で「その名詞」を決める必要があります。副詞は動詞を説明するだけなので、決める名詞がなく the がなくても困りません。',
    [Q('副詞だと the がいらないの？'), bx(8, 50, 148, 52, 'the fastest runner\n（名詞を決める）\nthe が必要', R[0], R[1], 11), bx(164, 50, 148, 52, 'runs (the) fastest\n（動詞を説明する）\nthe は省略可', G[0], G[1], 11)],
    '名詞があれば the　動詞を説明するなら省略できる', G),
  S('見分け方は、最上級のすぐあとに名詞があるかどうかです。He is the best player. は player があるので形容詞で、the が必要です。He plays (the) best. は動詞 plays を説明する副詞です。',
    [H('最上級の直後に名詞があるか？', M, 6, 28), bx(8, 42, 304, 40, 'He is the best player.\nあとに名詞 player → the が必要', R[0], R[1], 12), bx(8, 90, 304, 40, 'He plays (the) best.\nあとに名詞なし → the は省略できる', G[0], G[1], 12)],
    '直後に名詞 → the が必要', M),
  S('三つ目は、同じものの中を比べるときです。This lake is deepest here.（この湖はここがいちばん深い）は他の湖と比べておらず、同じ湖の中の場所を比べているので the をつけません。他の湖と比べるなら the deepest in Japan です。',
    [Q('This lake is deepest here に the がないの？'), bx(8, 52, 148, 56, 'deepest here\n同じ湖の中の場所を比べる\nthe なし', G[0], G[1], 11), bx(164, 52, 148, 56, 'the deepest in Japan\n他の湖と比べる\nthe あり', R[0], R[1], 11)],
    '同じもの どうしの場所・時期の比べ → the なし', G),
  S('まとめです。the が消えるのは三つの場合です。①所有格がつく ②副詞の最上級は省略できる ③同じものの中を比べる。空所の直後に名詞があるかを、まず確かめます。',
    [H('the が消える 3つの場合', P, 6, 26), ...col(['① my best friend（所有格）', '② runs (the) fastest（副詞は省略可）', '③ deepest here（同じものの中の比べ）'], 8, 304, 42, P, 30, 12, 6)],
    '直後に名詞があるかを まず見る', P),
], 'the を使わない最上級');

// ───────── s243 序数＋最上級 ─────────
const s243 = show([
  S('日本でいちばん長い川は信濃川。では二番目は利根川です。「二番目に長い」は the second longest と言います。The Tone River is the second longest river in Japan.',
    [H('The Tone River is the second longest river in Japan.', M, 6, 30, 11), ...seq([['the', GR], ['second', R], ['longest', B], ['river', GR]], 54, 34, 14), lab('the ＋ 序数 ＋ 最上級 ＋ 名詞', 104, C.red)],
    'the ＋ 序数 ＋ 最上級'),
  S('なぜ最上級のままなのでしょう。「何番目の」というのを足しているだけだからです。1位は the longest、2位は the second longest、3位は the third longest と、同じ最上級に順位を足していきます。',
    [Q('二番目なのに最上級なの？'), bx(8, 50, 96, 66, '1位\nthe\nlongest\n信濃川', B[0], B[1], 12), bx(112, 50, 96, 66, '2位\nthe second\nlongest\n利根川', R[0], R[1], 12), bx(216, 50, 96, 66, '3位\nthe third\nlongest\n石狩川', G[0], G[1], 12)],
    '順位をあらわす序数を最上級の前に足す', R),
  S('× the second longer とは言いません。longer は「二つの比べ」の形です。順位は「全体の中で」決めるので、最上級 longest にします。× second longest river の the 落ちにも注意です。',
    [Q('second longer ではだめなの？'), OK('the second longest river', 52, 13), NG('the second longer river（比較級にしない）', 84, 12), NG('second longest river（the がない）', 116, 12)],
    '序数のあとも最上級。the も落とさない', R),
  S('序数のつづりに注意しましょう。fourth は four に th、fifth は five ではなく fif ＋ th、eighth は eight に h を一つ、ninth は nine の e を落とす、twelfth は twelve の ve が f に変わります。',
    [H('つづりに注意する序数', M, 6, 26), ...tbl([['fourth', 'four ＋ th'], ['fifth', 'five ではない（fif ＋ th）'], ['eighth', 'eight に h を一つ'], ['ninth', 'nine の e を落とす'], ['twelfth', 'twelve の ve が f に変わる']], 38, R, GR, 90, 20, 11)],
    '4番目から後の序数は つづりをまちがえやすい', R),
  S('言いかえてみましょう。The Tone River is the second longest river in Japan. ＝ Only the Shinano River is longer than the Tone River in Japan. 利根川より長いのは信濃川だけ、という意味です。',
    [H('二番目 ＝ 自分より上は一つだけ', M, 6, 26), bx(14, 42, 292, 40, 'The Tone River is the second\nlongest river in Japan.', B[0], B[1], 12), lb(160, 96, '＝', 20, C.main, 'middle', true), bx(14, 106, 292, 40, 'Only the Shinano River is\nlonger than the Tone River.', G[0], G[1], 12)],
    '二番目 ＝ 上に一つだけある', M),
  S('次は「今まで〜した中でいちばん」。This is the most beautiful picture that I have ever seen.（これは私が今までに見た中でいちばん美しい絵だ）。最上級のあとに〈主語 ＋ have ever ＋ 過去分詞〉が続きます。',
    [H('今まで〜した中でいちばん…', M, 6, 26), ...seq([['the most beautiful picture', B], ['that', Y]], 38, 30, 11), ...seq([['I', GR], ['have ever', R], ['seen.', G]], 74, 30, 13), lab('that は省略できる', 116, C.main)],
    'the 最上級 ＋ 名詞 ＋ 主語 ＋ have ever ＋ 過去分詞'),
  S('なぜ saw ではなく seen なのでしょう。have があるので現在完了の形で、「今までに見たことがある」という経験を表すからです。現在完了では過去分詞を使います。see − saw − seen。',
    [Q('saw ではなく seen なの？'), ...seq([['see', GR], ['saw', GR], ['seen', G]], 48, 34, 14), lab('原形　　　過去形　　　過去分詞', 92), NG('I have ever saw', 102), OK('I have ever seen', 130)].slice(0, 7),
    'have ever のあとは 過去分詞', G),
  S('まとめです。「〜番目に…」は〈the ＋ 序数 ＋ 最上級〉。「今まで〜した中でいちばん」は〈the 最上級 ＋ 名詞 ＋ 主語 ＋ have ever ＋ 過去分詞〉です。',
    [H('まとめ', P, 6, 26), ...tbl([['二番目に長い川', 'the second longest river'], ['今まで見た中で一番', 'the best movie I have ever seen']], 44, P, GR, 112, 40, 11)],
    '序数は最上級の前に　経験は過去分詞', P),
], '序数 ＋ 最上級');

// ───────── s245 one of ~ が主語のとき ─────────
const s245 = show([
  S('One of my friends (is / are) a doctor. どちらでしょうか。直前の friends が複数なので are にしたくなりますが、正解は is です。',
    [H('One of my friends (　) a doctor.', M, 6, 30, 14), ...seq([['is', G], ['are', R]], 58, 34, 16), lab('どちらが正しい？', 110)],
    'まよいやすい 主語と動詞の一致', M),
  S('なぜ is なのでしょう。主語の中心は One（一人）で、of my friends は「友達のうちの」と説明する部分だからです。動詞は主語の中心に合わせます。',
    [Q('is になるの？'), ...seq([['One', R], ['of my friends', GR], ['is', G], ['a doctor.', GR]], 54, 36, 13), lab('主語の中心 ＝ One（一人）', 106, C.red), lab('of my friends は説明の部分', 124)],
    '動詞は 主語の中心（one）に合わせる', R),
  S('確かめる方法は、of 以下を消してみることです。One 〔of my friends〕 is a doctor. → One is a doctor. これなら one が単数だとはっきりわかります。',
    [H('of 以下を〔　〕でくくって消す', M, 6, 26), bx(8, 40, 304, 30, 'One 〔of my friends〕 is a doctor.', GR[0], GR[1], 13), dn(160, 72, 86), bx(8, 88, 304, 30, 'One is a doctor.  → 単数 → is', G[0], G[1], 13)],
    '修飾の部分を消すと 主語が見える', M),
  S('主語がちがう例も見てみましょう。The students in this class are kind. in this class を消すと The students are kind. 主語の中心は students（複数）なので are です。',
    [H('The students 〔in this class〕 are kind.', M, 6, 26), bx(8, 40, 304, 30, 'The students 〔in this class〕 are kind.', GR[0], GR[1], 12), dn(160, 72, 86), bx(8, 88, 304, 30, 'The students are kind.  → 複数 → are', B[0], B[1], 13)],
    '中心の名詞が複数なら are', B),
  S('one 以外にも、各自を一人ずつ見るグループがあります。each of ~, every ~, either of ~, neither of ~ も単数扱いです。Each of the students has a computer. のように has になります。',
    [H('単数扱いのグループ', G, 6, 26), ...col(['one of ～（～のうちの一人）', 'each of ～（それぞれ）', 'every ～（どの～も）', 'either of ～ / neither of ～'], 8, 304, 38, G, 24, 12, 4), lab('Each of the students has a computer.', 144, C.ink)],
    'ひとりずつ・ひとつずつ見る語は 単数扱い', G),
  S('反対に、some of ~, most of ~, all of ~, half of ~ は of のあとの名詞に合わせます。Some of the students were absent.（複数だから were）、Most of the water was gone.（数えられない水だから was）。',
    [H('of のあとに合わせるグループ', B, 6, 26), bx(8, 40, 146, 26, 'some / most / all / half', B[0], B[1], 11), ar(154, 53, 166, 53, C.main), bx(166, 40, 146, 26, 'of のあとの名詞に合わせる', Y[0], Y[1], 11), bx(8, 76, 304, 30, 'Some of the students were absent.（複数）', B[0], B[1], 11), bx(8, 112, 304, 30, 'Most of the water was gone.（数えられない）', B[0], B[1], 11)],
    'some・most・all・half は of のあとを見る', B),
  S('練習です。①One of the questions (was / were) difficult. one → was。②Some of the questions (was / were) difficult. questions が複数 → were。同じ形でも、of の直前の語で答えが変わります。',
    [H('of の直前の語を見る', P, 6, 26), bx(8, 40, 304, 36, '① One of the questions was difficult.', G[0], G[1], 12), bx(8, 84, 304, 36, '② Some of the questions were difficult.', B[0], B[1], 12), lab('one か、some か。まずここを見る', 138, C.main)],
    'one 型なら単数、some 型なら of のあとに合わせる', P),
  S('まとめです。主語の中心を見つけて、それに動詞を合わせます。one / each / every / either / neither は単数、some / most / all / half は of のあとに合わせます。',
    [H('まとめ', P, 6, 26), bx(8, 40, 304, 40, 'one・each・every・either・neither\n→ 単数扱い（is / has / 動詞に s）', G[0], G[1], 12), bx(8, 90, 304, 40, 'some・most・all・half\n→ of のあとの名詞に合わせる', B[0], B[1], 12)],
    '主語の中心をさがす', P),
], 'one of ~ が主語のときの動詞');

// ───────── s246 one of the 最上級 ─────────
const s246 = show([
  S('Kyoto is one of the most popular cities in Japan. 直訳は「最も人気のある都市の一つ」ですが、日本語では「日本有数の人気都市」と訳すと自然です。',
    [H('Kyoto is one of the most popular cities in Japan.', M, 6, 30, 11), ...seq([['one of', Y], ['the most popular', B], ['cities', G], ['in Japan', GR]], 54, 34, 12), lab('「～の一つ」＝ 有数・屈指', 104, C.main)],
    'one of the 最上級 ＝ 有数の、屈指の'),
  S('なぜ「一つ」と言うのでしょう。人気のある都市は京都だけではないからです。上位のグループの中の一つ、と言っているだけで、一位だとは言っていません。',
    [Q('「一つ」と言うの？'), ci(60, 90, 22, '京都', R[0], R[1], 12), ci(130, 90, 22, '奈良', B[0], B[1], 12), ci(200, 90, 22, '大阪', B[0], B[1], 12), ci(270, 90, 22, '…', B[0], B[1], 12), lab('人気の上位グループ', 60, C.main), lab('その中の一つが京都', 130, C.red)],
    '上位グループの一員 ≠ 一位', R),
  S('内容一致問題の落とし穴です。本文が Nara is one of the oldest cities in Japan. のとき、「奈良は日本でいちばん古い都市だ」は本文と一致しません。one of を読み飛ばさないこと。',
    [H('本文：Nara is one of the oldest cities in Japan.', M, 6, 30, 11), NG('奈良は日本でいちばん古い都市だ（一位とは言っていない）', 46, 11), OK('奈良は日本で最も古い都市の一つだ', 80, 12), lab('選択肢で one of を the 最上級にかえる手口が定番', 124, C.red)],
    '読むときに one of を丸で囲む', R),
  S('なぜこの表現は英作文に便利なのでしょう。「いちばん」と言い切ると、それが本当に事実かが問われます。「最も〜な一つ」なら控えめで、まちがいにくいからです。',
    [Q('英作文で使いやすいの？'), bx(8, 46, 304, 48, 'Soccer is the most popular\nsport in the world.\n断定（本当に一位？）', R[0], R[1], 11), bx(8, 100, 304, 48, 'Soccer is one of the most popular\nsports in the world.\n控えめで安全', G[0], G[1], 11)],
    '断定をさけたいときに便利', G),
  S('作り方の手順です。「私たちの学校で最も古い建物の一つ」を作ります。① one of ② the oldest ③ buildings ④ in our school の順につなぎます。',
    [H('This is one of the oldest buildings in our school.', M, 6, 28, 11), ...col(['① one of', '② the oldest', '③ buildings（複数形）', '④ in our school'], 8, 160, 40, B, 24, 12, 6), ar(172, 90, 190, 90, C.main), bx(192, 60, 120, 60, '範囲を表す\nin / of を\n最後に', Y[0], Y[1], 12)],
    '① one of ② the 最上級 ③ 複数名詞 ④ 範囲', B),
  S('なぜ名詞は複数形なのでしょう。「複数あるものの中の一つ」だからです。one of the oldest building は誤りで、buildings とします。主語なら動詞は単数です。One of my friends speaks English.',
    [Q('buildings と複数形なの？'), OK('one of the oldest buildings', 52, 13), NG('one of the oldest building（単数形）', 86, 12), lab('主語のときは動詞を単数に：One of my friends speaks English.', 134, C.ink)],
    'of のあとは複数形、動詞は one に合わせる', R),
  S('チェックリストです。①名詞は複数形 ②the が入っている ③最上級の形が正しい（× the most oldest）④主語なら動詞は単数 ⑤範囲を表す語句がある。書いたあとに一つずつ確かめます。',
    [H('書いたあとのチェック', P, 6, 26), ...col(['名詞を複数形にしたか', 'the を入れたか', '× the most oldest になっていないか', '主語のとき動詞は単数か', '範囲（in ～ / of ～）を付けたか'], 8, 304, 38, P, 20, 12, 4)],
    '複数形と動詞の一致は減点されやすい', P),
  S('まとめです。one of the 最上級 ＋ 複数名詞 は「有数の」「屈指の」。一位とは言っていないこと、名詞は複数形にすること、この二点を守ります。',
    [H('まとめ', P, 6, 26), ...seq([['one of', Y], ['the 最上級', B], ['複数名詞', G], ['範囲', GR]], 48, 34, 12), lab('Kyoto is one of the most popular cities in Japan.', 100, C.ink), lab('→ 京都は日本有数の人気都市だ', 120, C.ink)],
    '「一つ」であって「一位」ではない', P),
], 'one of the 最上級');

// ───────── s248 No other ~ is 比較級 than ─────────
const s248 = show([
  S('「東京より大きい都市は日本にない」。これは「東京がいちばん大きい」と同じ意味です。英語では No other city で文を始めます。',
    [H('Tokyo is the largest city in Japan.', B, 6, 30, 13), lb(160, 52, '＝', 20, C.main, 'middle', true), H('東京より大きい都市は日本にない', G, 62, 30, 13), lab('どちらも「東京が1番」', 114, C.main)],
    '「～より…なものはない」＝「～が1番」'),
  S('英語にすると No other city in Japan is larger than Tokyo. になります。No other city が主語で、「他のどの都市も」が東京より大きくない、という意味です。',
    [H('No other city in Japan is larger than Tokyo.', M, 6, 30, 12), ...seq([['No other city', R], ['in Japan', GR]], 50, 32, 12), ...seq([['is larger', B], ['than Tokyo.', G]], 88, 32, 12), lab('主語が「他のどの都市も～ない」', 134, C.red)],
    'No other ＋ 単数名詞 ＋ is ＋ 比較級 ＋ than A'),
  S('なぜ cities ではなく city と単数なのでしょう。「他の都市のどれを一つ取っても、東京より大きくない」と一つずつ見るからです。any other city と同じ考え方で、動詞も is と単数です。',
    [Q('No other city と単数なの？'), OK('No other city in Japan is larger than Tokyo.', 52, 11), NG('No other cities in Japan is larger than Tokyo.', 86, 11), lab('どの一つを取っても → 単数', 134, C.main)],
    'どの一つを取っても → 単数名詞・単数の動詞', R),
  S('もう一つの形が as ～ as です。No other city in Japan is as large as Tokyo. as と as のあいだには、larger ではなく原級の large を入れます。',
    [H('No other city in Japan is as large as Tokyo.', M, 6, 30, 12), ...seq([['is', GR], ['as', Y], ['large', B], ['as', Y], ['Tokyo.', G]], 54, 34, 14), lab('as ～ as ではさむのは原級', 106, C.red), NG('as larger as', 120)],
    'as 原級 as のあいだは 原級', B),
  S('なぜ not をつけないのでしょう。No がすでに「ない」という否定の意味をもっているからです。not を重ねると二重否定になり、意味がこわれます。',
    [Q('not はいらないの？'), OK('No other city is larger than Tokyo.', 52), NG('No other city is not larger than Tokyo.', 86), lab('No ＝ すでに否定', 134, C.main)],
    'No があるので not は重ねない', R),
  S('最上級の文は四通りで言いかえられます。①最上級 ②than any other ③No other ～ 比較級 than ④No other ～ as 原級 as。どれも「東京が1番」を表します。',
    [H('四通りの言いかえ', P, 6, 24), ...col(['① Tokyo is the largest city in Japan.', '② Tokyo is larger than any other city in Japan.', '③ No other city in Japan is larger than Tokyo.', '④ No other city in Japan is as large as Tokyo.'], 8, 304, 36, P, 26, 11, 4)],
    '一つの内容を 四通りで書けるようにする', P),
  S('一般動詞の文でも同じです。Ken runs faster than any other student. → No other student in his class runs faster than Ken. 単数の No other student に合わせて、runs と s がつきます。',
    [H('一般動詞の文', M, 6, 26), bx(8, 38, 304, 32, 'Ken runs (the) fastest in his class.', B[0], B[1], 12), dn(160, 72, 84), bx(8, 86, 304, 32, 'No other student in his class runs faster than Ken.', G[0], G[1], 11), lab('No other student は単数 → runs', 138, C.main)],
    '主語が単数なので runs に s がつく', M),
  S('まとめです。主語を〈No other ＋ 単数名詞〉にして、比較級 than か as 原級 as をつなぎます。not は重ねず、名詞も動詞も単数です。',
    [H('まとめ', P, 6, 26), ...seq([['No other', R], ['単数名詞', B], ['is 比較級 than A', G]], 44, 34, 11), lab('または', 90), ...seq([['No other', R], ['単数名詞', B], ['is as 原級 as A', G]], 100, 34, 11)],
    '「～より…なものはない」＝ A が一番', P),
], 'No other ~');

// ───────── s249 Nothing is more ~ than ─────────
const s249 = show([
  S('「健康ほど大切なものはない」。日本語でもよく使う言い方です。英語では Nothing is more important than health. と、否定の nothing が主語になります。',
    [H('Nothing is more important than health.', M, 6, 30, 13), ...seq([['Nothing', R], ['is more important', B], ['than health.', G]], 54, 36, 12), lab('「健康より大切なものは何もない」', 106, C.red)],
    'Nothing is more ～ than A.'),
  S('なぜ nothing が主語なのでしょう。「何も（健康より大切では）ない」と言うことで、結果として「健康がいちばん大切だ」と言えるからです。直訳せず、「健康がいちばん大切だ」と言いかえて理解します。',
    [Q('nothing が主語なの？'), bx(8, 50, 304, 34, 'Nothing is more important than health.', B[0], B[1], 12), dn(160, 86, 100), bx(8, 102, 304, 34, '健康がいちばん大切だ', G[0], G[1], 14)],
    '否定の主語で 最上級と同じ意味になる', R),
  S('同じ意味は四通りで言えます。Health is the most important thing. / Health is more important than anything else. / Nothing is more ... than health. / Nothing is as important as health.',
    [H('「健康が1番」を表す四通り', P, 6, 24), ...col(['Health is the most important thing.', 'Health is more important than anything else.', 'Nothing is more important than health.', 'Nothing is as important as health.'], 8, 304, 36, P, 26, 11, 4)],
    'どの形でも書けるようにする', P),
  S('人が対象のときは nobody や no one を使います。Nobody in my class runs faster than Ken. ＝ Ken runs faster than anyone else in my class. 物なら nothing、人なら nobody / no one です。',
    [H('物か、人か', M, 6, 26), bx(8, 40, 146, 32, 'Nothing（物）', B[0], B[1], 13), bx(166, 40, 146, 32, 'Nobody / No one（人）', R[0], R[1], 12), bx(8, 84, 304, 32, 'Nobody in my class runs faster than Ken.', R[0], R[1], 12), bx(8, 122, 304, 28, '＝ Ken runs faster than anyone else in my class.', G[0], G[1], 11)],
    '物 → nothing　人 → nobody / no one', M),
  S('なぜ not をつけないのでしょう。nothing, nobody, no one は、語そのものが「ない」という否定を含んでいるからです。not を重ねる二重否定は意味が反対になります。',
    [Q('not を入れないの？'), OK('Nothing is more important than health.', 52), NG('Nothing is not more important than health.', 86, 11), lab('nothing ＝ not ＋ anything', 134, C.main)],
    '否定の語に not を重ねない', R),
  S('なぜ than anything else で、than any other thing とは言わないのでしょう。any other は〈any other ＋ 単数名詞〉の形で名詞を続けますが、物一般には anything、人一般には anyone をつけて else を続けるからです。',
    [Q('than anything else と言うの？'), ...tbl([['any other ＋ 名詞', '具体的な名詞のとき'], ['anything else', '物ぜんぶのとき'], ['anyone else', '人ぜんぶのとき']], 46, B, GR, 110, 24, 11), NG('than any other thing', 130, 11)],
    'any other ＋ 名詞 ／ anything else\nanyone else（物・人ぜんぶ）', B),
  S('入れかえの関係を見ておきましょう。Nothing is more important than health. ↔ Health is more important than anything else. 否定語が主語なら Nothing、比べる相手に回すなら anything else です。',
    [H('主語を入れかえる', M, 6, 26), bx(8, 40, 304, 32, 'Nothing is more important than health.', B[0], B[1], 12), lb(160, 86, '↕', 22, C.main, 'middle', true), bx(8, 98, 304, 32, 'Health is more important than anything else.', G[0], G[1], 12)],
    '相手を anything else に回すと 同じ意味', M),
  S('まとめです。「～ほど…なものはない」は〈Nothing is more … than A.〉か〈Nothing is as … as A.〉。人なら Nobody / No one。not は重ねません。',
    [H('まとめ', P, 6, 26), ...tbl([['物が対象', 'Nothing is more ～ than A.'], ['人が対象', 'Nobody is more ～ than A.'], ['言いかえ', 'A is more ～ than anything else.']], 42, P, GR, 90, 30, 11)],
    '否定の語 ＋ 比較で「A が1番」', P),
], 'Nothing is more ~ than');

// ───────── s252 比較級 and 比較級 ─────────
const s252 = show([
  S('春になると、日ごとに暖かくなっていきます。この「だんだん暖かくなる」を英語では It is getting warmer and warmer. と、同じ比較級を and でつないで表します。',
    [H('It is getting warmer and warmer.', M, 6, 30, 14), ...seq([['It is getting', GR], ['warmer', B], ['and', Y], ['warmer.', B]], 54, 36, 13), lab('比較級 and 比較級 ＝ ますます・だんだん', 106, C.red)],
    '比較級 and 比較級 ＝ ますます～'),
  S('なぜ同じ語を二回言うのでしょう。くり返すことで、変化がどんどん進んでいくようすを表せるからです。気温が少しずつ上がっていく絵を思い浮かべるとわかりやすくなります。',
    [Q('二回くり返すの？'), bx(22, 118 - 26, 44, 26, '', B[0], B[1]), bx(80, 118 - 46, 44, 46, '', B[0], B[1]), bx(138, 118 - 66, 44, 66, '', B[0], B[1]), bx(196, 118 - 86, 44, 86, '', B[0], B[1]), ln(14, 118, 306, 118, C.gray), ar(250, 90, 296, 56, C.red), lab('warmer and warmer', 138, C.red, 12)],
    'くり返し ＝ 変化が進み続ける', R),
  S('more を使う長い形容詞では、くり返し方が変わります。more difficult の more だけをくり返して more and more difficult とします。more difficult and more difficult とは言いません。',
    [Q('more だけをくり返すの？'), OK('more and more difficult', 52, 13), NG('more difficult and more difficult（長すぎる）', 86, 12), lab('-er 型は語ごと：colder and colder', 134, C.main)],
    'more 型は more だけをくり返す', G),
  S('変化を表す動詞といっしょに使うのがふつうです。get / become / grow など。get colder and colder（どんどん寒くなる）、become more and more famous（ますます有名になる）、grow bigger and bigger（どんどん大きくなる）。',
    [H('いっしょに使う動詞', G, 6, 26), ...tbl([['get', 'get colder and colder'], ['become', 'become more and more famous'], ['grow', 'grow bigger and bigger']], 40, G, GR, 80, 30, 12)],
    '変化の動詞 ＋ 比較級 and 比較級', G),
  S('名詞につく形もあります。More and more people are using smartphones.（ますます多くの人がスマートフォンを使っている）。減る方向なら Fewer and fewer children play outside. です。',
    [H('名詞につく形', M, 6, 26), bx(8, 40, 304, 36, 'More and more people are using smartphones.\nますます多くの人が', B[0], B[1], 11), bx(8, 84, 304, 36, 'Fewer and fewer children play outside.\nますます少ない子どもが', R[0], R[1], 11)],
    'more and more ＋ 名詞　fewer and fewer ＋ 名詞', M),
  S('進行形ととても相性がよい形です。「今まさに変化している」ことを表すので、be動詞 ＋ getting / becoming と組み合わせます。It is getting darker and darker.（だんだん暗くなってきている）。',
    [Q('進行形と組み合わせるの？'), ...seq([['It is', GR], ['getting', Y], ['darker', B], ['and', Y], ['darker.', B]], 54, 36, 13), lab('いまも変化が進んでいる最中', 106, C.main)],
    '今まさに進む変化 → getting / becoming', B),
  S('「the 比較級, the 比較級」との違いです。比較級 and 比較級 は一つのものの変化。The warmer it gets, the more people go out. は二つのことが連動する形です。and があるか、the が二つあるかで見分けます。',
    [H('見分け方', M, 6, 26), bx(8, 40, 304, 44, '比較級 and 比較級\n一つのものが 時間とともに変化する', B[0], B[1], 12), bx(8, 92, 304, 44, 'The 比較級, the 比較級\n二つのことが 連動して変化する', R[0], R[1], 12)],
    'and があるか、the が二つあるか', M),
  S('まとめです。-er 型は語ごとくり返し、more 型は more だけをくり返します。変化の動詞や進行形とよく組み合わせます。',
    [H('まとめ', P, 6, 26), ...tbl([['-er 型', 'warmer and warmer'], ['more 型', 'more and more difficult'], ['名詞につく', 'more and more people']], 42, P, GR, 90, 30, 12)],
    '「ますます～」「だんだん～」', P),
], '比較級 and 比較級');

export const XF_KEF_FIGURES: Record<string, DiagramFigure> = {
  'xf_koko_eigo_s237': s237,
  'xf_koko_eigo_s238': s238,
  'xf_koko_eigo_s239': s239,
  'xf_koko_eigo_s242': s242,
  'xf_koko_eigo_s243': s243,
  'xf_koko_eigo_s245': s245,
  'xf_koko_eigo_s246': s246,
  'xf_koko_eigo_s248': s248,
  'xf_koko_eigo_s249': s249,
  'xf_koko_eigo_s252': s252,
};

export const XF_KEF_SECTIONS: Record<string, string> = {
  'koko_eigo_s237#0': 'xf_koko_eigo_s237',
  'koko_eigo_s238#1': 'xf_koko_eigo_s238',
  'koko_eigo_s239#0': 'xf_koko_eigo_s239',
  'koko_eigo_s242#0': 'xf_koko_eigo_s242',
  'koko_eigo_s243#0': 'xf_koko_eigo_s243',
  'koko_eigo_s245#0': 'xf_koko_eigo_s245',
  'koko_eigo_s246#0': 'xf_koko_eigo_s246',
  'koko_eigo_s248#0': 'xf_koko_eigo_s248',
  'koko_eigo_s249#0': 'xf_koko_eigo_s249',
  'koko_eigo_s252#0': 'xf_koko_eigo_s252',
};
