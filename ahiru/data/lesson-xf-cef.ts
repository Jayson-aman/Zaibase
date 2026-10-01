// 中学受験 英語（小5〜小6）30 単元の「動く図解スライド」。
// 「なぜ？」の連鎖で、1 単元 7 枚以上。単元の節（section）に 1 枚の図解をひもづける。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, show, fresh } from './diagram-kit';

type Col = [string, string];
const B: Col = [C.blue, FILL.blue];
const G: Col = [C.green, FILL.green];
const R: Col = [C.red, FILL.red];
const M: Col = [C.main, FILL.warm];
const P: Col = [C.purple, FILL.purple];
const Y: Col = [C.main, FILL.yellow];
const Gy: Col = [C.gray, FILL.gray];
const COLS: Record<string, Col> = { r: R, g: G, b: B, p: P, y: Y, m: M, k: Gy };

const units = (s: string) => [...s].reduce((u, ch) => u + (ch.charCodeAt(0) < 256 ? 0.55 : 1), 0);

// 下の帯（y=176 から）にそのスライドのひとこと。\n で改行。
const cap = (t: string, c: Col = B, size = 12): DiagramElement => {
  const n = t.split('\n').length;
  return bx(10, 176, 300, 16 + 15 * n, t, c[0], c[1], size);
};
// 1枚＝まっさらな図＋下の帯
const S = (note: string, top: DiagramElement[], capText: string, c: Col = B, size = 12) => ({
  note,
  add: fresh(...top, cap(capText, c, size)),
});
// 「なぜ？」の問い
const Q = (t: string, again = false): DiagramElement =>
  bx(10, 6, 300, 34, (again ? 'では、なぜ？ ' : 'なぜ？ ') + t, P[0], P[1], 12);

// なぜ？ではない問い（見分け方・順番など）
const Qq = (t: string): DiagramElement => bx(10, 6, 300, 34, t, P[0], P[1], 12);

// 横一列の語の箱。'r|word' のように色の頭文字と | を付けると色がつく。
const W = (items: string[], y: number, h = 30, size = 13, x0 = 6, x1 = 314, gap = 4): DiagramElement[] => {
  const its = items.map((i) => {
    const m = /^([rgbpymk])\|(.*)$/.exec(i);
    return (m ? [m[2], COLS[m[1]]] : [i, M]) as [string, Col];
  });
  const nat = its.map(([t]) => Math.max(...t.split('\n').map(units)) * size + 12);
  const avail = x1 - x0 - gap * (its.length - 1);
  const sum = nat.reduce((a, b) => a + b, 0);
  const k = sum > avail ? avail / sum : 1;
  const total = sum * k + gap * (its.length - 1);
  let x = x0 + (x1 - x0 - total) / 2;
  return its.map(([t, c], i) => {
    const w = nat[i] * k;
    const e = bx(x, y, w, h, t, c[0], c[1], size);
    x += w + gap;
    return e;
  });
};

// ×の文 → ○の文 の定番レイアウト（上に誤り、矢印、下に正しい形）
const FX = (wrong: string[], right: string[], msg: string, y = 18, size = 13, msg2?: string): DiagramElement[] => [
  ...W(wrong, y, 32, size),
  lb(160, y + 46, msg, 12, C.red, 'middle', true),
  ar(160, y + 58, 160, y + 76, C.main),
  ...W(right, y + 80, 32, size),
  ...(msg2 ? [lb(160, y + 130, msg2, 12, C.green, 'middle', true)] : []),
];

// 左右2つの箱
const LR = (l: string, r: string, y = 14, h = 100, cl: Col = B, cr: Col = G, size = 13): DiagramElement[] => [
  bx(10, y, 147, h, l, cl[0], cl[1], size),
  bx(163, y, 147, h, r, cr[0], cr[1], size),
];

// 縦に並べた幅いっぱいの箱
const ST = (items: [string, Col][], y = 12, h = 38, gap = 8, size = 13): DiagramElement[] =>
  items.map(([t, c], i) => bx(10, y + i * (h + gap), 300, h, t, c[0], c[1], size));

// 矢印でつないだ同じ幅の箱（流れ図）
const F = (items: [string, Col][], y: number, h = 50, size = 12, x0 = 8, x1 = 312, gap = 18): DiagramElement[] => {
  const n = items.length;
  const w = (x1 - x0 - gap * (n - 1)) / n;
  const out: DiagramElement[] = [];
  items.forEach(([t, c], i) => {
    const x = x0 + i * (w + gap);
    if (i > 0) out.push(ar(x - gap + 1, y + h / 2, x - 1, y + h / 2, C.main));
    out.push(bx(x, y, w, h, t, c[0], c[1], size));
  });
  return out;
};

// 表。rows[0] は見出し。ws は列の幅。rc は行ごとの色。
const T = (rows: string[][], y: number, ws: number[], c: Col = M, h = 24, size = 11, rc?: Col[]): DiagramElement[] => {
  const tot = ws.reduce((a, b) => a + b, 0);
  const x0 = (320 - tot) / 2;
  const out: DiagramElement[] = [];
  rows.forEach((r, ri) => {
    let x = x0;
    r.forEach((t, ci2) => {
      const col = ri === 0 ? c : rc?.[ri] ?? Gy;
      out.push(bx(x, y + ri * h, ws[ci2], h, t, col[0], col[1], size));
      x += ws[ci2];
    });
  });
  return out;
};

const figs: Record<string, DiagramFigure> = {};

// ── 否定文②：not を使わない否定（s224・節0）──
figs['xf_eigo_s224'] = show([
  S('I don\'t have no money. と書くと、英語では「お金がないわけではない」という意味に受け取られます。否定（ひてい）＝「〜ない」の言い方は、1つの文に1つが原則（げんそく）です。この文のどこがいけないのか、順に見ていきます。',
    [...W(['I', 'r|don\'t', 'have', 'r|no money.'], 40, 36, 15), lb(160, 98, '「ない」が2つ入っている', 13, C.red, 'middle', true), lb(160, 122, 'don\'t も no も「ない」を表す', 12, C.gray, 'middle')],
    '否定は1つの文に1つだけ', R),
  S('❓なぜ、重ねてはいけないのでしょう。→ don\'t が「ない」、no money も「お金がない」で、「ない」を2回言うと打ち消し合って、「ないわけではない」と聞こえてしまうからです。',
    [Q('「ない」を重ねてはいけないのは？'), bx(10, 56, 140, 36, 'don\'t ＝ ない', C.red, FILL.red, 14), bx(170, 56, 140, 36, 'no money ＝ ない', C.red, FILL.red, 14), lb(160, 74, '＋', 18, C.ink, 'middle', true), ar(160, 96, 160, 114, C.main), bx(30, 118, 260, 40, 'ない と ない で打ち消し合う', C.purple, FILL.purple, 14)],
    '「ない」×2 ＝ 意味がおかしくなる', P),
  S('直し方は2つです。don\'t のまま no を any に変える（I don\'t have any money.）か、don\'t をやめて no だけを使う（I have no money.）か。どちらも「ない」は1つだけになります。',
    [...W(['I', 'r|don\'t', 'have', 'r|no', 'money.'], 12, 28, 13), ar(160, 44, 160, 58, C.main), ...W(['I', 'don\'t', 'have', 'g|any', 'money.'], 62, 28, 13), lb(160, 104, 'または', 12, C.gray, 'middle'), ...W(['I', 'have', 'g|no', 'money.'], 116, 28, 13)],
    '「ない」を1つにする', G),
  S('❓any と no はどうつながるのでしょう。→ 否定文（ひていぶん）の not 〜 any は、no という一語で言いかえられます。I don\'t have any brothers. ＝ I have no brothers.（兄弟がいない）。no のほうが否定の気持ちが強くなります。',
    [Q('any と no のつながりは？'), bx(10, 52, 130, 40, 'not 〜 any', C.blue, FILL.blue, 15), lb(160, 72, '＝', 20, C.ink, 'middle', true), bx(180, 52, 130, 40, 'no', C.blue, FILL.blue, 15), bx(10, 108, 300, 24, 'I don\'t have any brothers.', C.main, FILL.warm, 13), lb(160, 144, '＝ I have no brothers.', 13, C.green, 'middle', true)],
    'not 〜 any ＝ no（どちらか1つ）', P),
  S('nothing（何も〜ない）・nobody（だれも〜ない）・no one（だれも〜ない）も、それ自体が否定の語です。だから I don\'t know nothing. のように don\'t と重ねてはいけません。I don\'t know anything. か I know nothing. にします。',
    [bx(10, 10, 96, 46, 'nothing\n何も〜ない', C.blue, FILL.blue, 12), bx(112, 10, 96, 46, 'nobody\nだれも〜ない', C.blue, FILL.blue, 12), bx(214, 10, 96, 46, 'no one\nだれも〜ない', C.blue, FILL.blue, 12), ...W(['I', 'r|don\'t', 'know', 'r|nothing.'], 70, 28, 13), lb(160, 112, '× ふたつ目の「ない」が余計', 12, C.red, 'middle', true), ...W(['I', 'don\'t', 'know', 'g|anything.'], 126, 28, 13)],
    'それ自体が否定 → don\'t と重ねない', B),
  S('Nobody came to the party.（だれもパーティーに来なかった）のように、nobody や nothing が主語（しゅご）のときは、三人称単数（さんにんしょうたんすう）として動詞を選びます。Nobody knows the answer. のように knows と s が付きます。',
    [...W(['g|Nobody', 'knows', 'the answer.'], 30, 34, 15), lb(160, 82, 'Nobody は単数あつかい → knows', 13, C.green, 'middle', true), ...W(['g|Nothing', 'is', 'impossible.'], 104, 34, 15), lb(160, 154, 'Nothing is impossible.（不可能なことは何もない）', 11, C.gray, 'middle')],
    'nobody / nothing は単数あつかい', G),
  S('never（一度も〜ない）も、それだけで否定です。入れる場所は not と同じで、一般動詞（いっぱんどうし）の前、be動詞のうしろです。I never eat natto. He has never been to Kyoto.',
    [...W(['I', 'g|never', 'eat', 'natto.'], 22, 34, 15), lb(160, 72, '一般動詞 eat の前', 12, C.green, 'middle', true), ...W(['He', 'has', 'g|never', 'been', 'to Kyoto.'], 94, 34, 14), lb(160, 144, 'have と been のあいだ（not の場所）', 12, C.gray, 'middle')],
    'not の場所に never を入れる', G),
  S('❓few と little は、a が付くかどうかでどうちがうのでしょう。→ a が付かない few・little は「ほとんどない」、a が付く a few・a little は「少しある」です。few は数えられるもの（数）に、little は数えられないもの（量）に使います。',
    [Q('a があるとないとで、どうちがう？'), ...T([['', 'a なし（ない）', 'a あり（ある）'], ['数', 'few friends', 'a few friends'], ['量', 'little money', 'a little money']], 52, [44, 130, 130], M, 30, 12, [M, [C.red, FILL.red], [C.green, FILL.green]]), lb(160, 154, 'few＝数（友だち）・little＝量（お金・時間）', 11, C.gray, 'middle')],
    'a が付けば「ある」、付かなければ「ない」', P),
  S('❓では、なぜ a で反対の意味になるのでしょう。→ a は「少しはある」という気持ちを表す、と考えると覚えやすいからです。He has few friends.（友だちがほとんどいない）、He has a few friends.（少しいる）。',
    [Q('a があると「ある」になるのは？', true), ...ST([['He has few friends. ＝ ほとんどいない', R], ['He has a few friends. ＝ 少しいる', G], ['I have little time. ＝ 時間がほとんどない', R], ['I have a little time. ＝ 少し時間がある', G]], 46, 26, 5, 12)],
    'a ＝「少しはある」の気持ち', P),
  S('否定の強さを並べると、never（0％）＜ hardly・seldom ＜ sometimes（ときどき）の順です。hardly は「ほとんど〜ない」、seldom は「めったに〜ない」です。どれも否定の意味をふくむので、not とは重ねません。',
    [bx(10, 118, 85, 40, 'never\n一度も〜ない', C.red, FILL.red, 11), bx(103, 78, 114, 80, 'hardly\nseldom\nほとんど・めったに\n〜ない', C.main, FILL.warm, 11), bx(225, 38, 85, 120, 'sometimes\nときどき', C.green, FILL.green, 12), lb(160, 20, 'ある回数が 少ない → 多い', 12, C.gray, 'middle')],
    'never ＜ hardly / seldom ＜ sometimes', M),
  S('まとめです。否定は1つの文に1つだけ。not の代わりに no・never・nothing などを使うなら don\'t とは重ねません。a があれば「少しある」、なければ「ほとんどない」です。',
    [...ST([['don\'t ＋ no は重ねない → any か no だけ', R], ['no・never・nothing・nobody は それ自体が否定', B], ['few・little は「ほとんどない」\na few・a little は「少しある」', G]], 12, 46, 8, 13)],
    '否定は1つ。a が付けば「ある」', M),
], 'not を使わない否定');

// ── 形容詞のはたらき①：限定用法（s226・節0）──
figs['xf_eigo_s226'] = show([
  S('「赤い車」は a red car です。形容詞（けいようし）は「どんな」を表す語で、名詞（めいし）のすぐ前に置いて名詞を説明します。これを限定用法（げんていようほう）といいます。',
    [...W(['a', 'b|red', 'car'], 40, 40, 20), ar(150, 96, 200, 96, C.blue), lb(110, 108, '形容詞（どんな？）', 12, C.blue, 'middle', true), lb(230, 108, '名詞（もの）', 12, C.gray, 'middle', true), lb(160, 140, '形容詞は名詞の「すぐ前」', 12, C.ink, 'middle')],
    '形容詞 ＝ 「どんな」を表す語', B),
  S('❓red a car と言えないのは、なぜでしょう。→ 英語では a・the・my などの語が、必ず形容詞よりも前に来るという決まりがあるからです。日本語では「大きな一匹の犬」と言えるので、a を形容詞のうしろに置く誤りが多くなります。',
    [Q('red a car と言えないのは？'), ...W(['b|big', 'r|a', 'dog'], 52, 34, 16), lb(160, 98, '× a が形容詞のうしろにある', 12, C.red, 'middle', true), ar(160, 108, 160, 122, C.main), ...W(['g|a', 'b|big', 'dog'], 126, 34, 16)],
    '〈a → 形容詞 → 名詞〉の順', P),
  S('a だけでなく the・my・your なども、形容詞より前に置きます。the tall boy、my new bike が正しく、tall the boy や new my bike は誤りです。',
    [bx(10, 14, 300, 70, '○ the tall boy\n○ my new bike\n○ an interesting story', C.green, FILL.green, 15), bx(10, 94, 300, 70, '× tall the boy\n× new my bike\n× interesting an story', C.red, FILL.red, 15)],
    '前 → 形容詞 → 名詞（声に出して覚える）', G),
  S('❓名詞が複数形（ふくすうけい）になったら、形容詞も s が付くのでしょうか。→ 付きません。three big apples、beautiful flowers のままです。英語の形容詞は数でも男女でも形が変わらず、変わるのは名詞のほうだけだからです。',
    [Q('複数のとき形容詞は変わる？'), ...W(['three', 'b|big', 'g|apples'], 52, 34, 16), lb(160, 98, '形容詞 big は変わらない。名詞だけ s', 12, C.green, 'middle', true), ...W(['three', 'r|bigs', 'apples'], 116, 34, 16), lb(160, 160, '× 形容詞に s は付けない', 12, C.red, 'middle', true)],
    '変わるのは名詞だけ', P),
  S('次は a と an の使い分けです。決め手はつづりではなく「次に来る語の発音（はつおん）」です。ア・イ・ウ・エ・オの音（母音（ぼいん））で始まる語の前では an を使います。an apple、an egg、an ice cream。',
    [...W(['g|an', 'apple'], 20, 34, 16), ...W(['g|an', 'egg'], 62, 34, 16), ...W(['g|an', 'ice cream'], 104, 34, 16), lb(160, 154, 'ア・イ・ウ・エ・オの音で始まる → an', 12, C.green, 'middle', true)],
    '母音の音の前では an', G),
  S('形容詞が入ったら、a か an かを決めるのは名詞ではなく、すぐうしろに来る形容詞の音です。old は母音の音なので an old dog。big は子音（しいん）の音なので、apple が母音でも a big apple になります。',
    [...W(['g|an', 'b|old', 'dog'], 20, 34, 16), lb(160, 66, 'すぐ後ろの old が母音の音 → an', 12, C.green, 'middle', true), ...W(['g|a', 'b|big', 'apple'], 92, 34, 16), lb(160, 138, 'すぐ後ろの big が子音の音 → a', 12, C.green, 'middle', true)],
    '決めるのは「すぐ後ろの語」の音', G),
  S('つづりにだまされる語があります。useful と university は u で始まりますが、発音は「ユ」で子音の音なので a を使います。hour と honest は h で始まりますが h を発音せず、母音の音なので an です。',
    [...T([['語', 'つづり', '音', '冠詞'], ['useful', 'u', 'ユ', 'a useful book'], ['university', 'u', 'ユ', 'a university'], ['hour', 'h', 'アウア', 'an hour'], ['honest', 'h', 'オネスト', 'an honest boy']], 14, [78, 52, 66, 104], M, 28, 11, [M, [C.blue, FILL.blue], [C.blue, FILL.blue], [C.green, FILL.green], [C.green, FILL.green]]), lb(160, 166, 'an useful book は入試で出るひっかけ', 11, C.red, 'middle', true)],
    '見るのは文字ではなく「音」', B),
  S('❓なぜ、つづりでなく音で決めるのでしょう。→ a と an は話すときの言いやすさのための使い分けで、母音の音が続くときに n をはさんで言いやすくするからです。耳で聞こえる音が基準になります。',
    [Q('つづりでなく音で決めるのは？'), bx(10, 52, 140, 44, 'a book\n子音の音の前', C.blue, FILL.blue, 13), bx(170, 52, 140, 44, 'an apple\n母音の音の前', C.green, FILL.green, 13), lb(160, 118, 'n が入ると、ア音が続かずに言いやすい', 12, C.ink, 'middle', true), lb(160, 142, 'an ＋ apple ＝ アン・アップル', 12, C.gray, 'middle')],
    '言いやすさのために、音で使い分ける', P),
  S('まとめです。形容詞は名詞のすぐ前。順番は〈a・the・my → 形容詞 → 名詞〉で、複数でも形容詞は変わりません。a か an かは、すぐ後ろの語の発音で決めます。',
    [...ST([['a・the・my → 形容詞 → 名詞 の順', B], ['複数でも形容詞は変わらない（three big apples）', G], ['a と an は「すぐ後ろの音」で決める', P]], 14, 44, 10, 13)],
    '順番と音、この2つを確かめる', M),
], '形容詞が名詞を前から説明する');

// ── 形容詞のはたらき②：叙述用法（s228・節0）──
figs['xf_eigo_s228'] = show([
  S('This soup is hot. と This is hot soup. は、どちらも熱いスープの話です。でも hot の居場所がちがいます。形容詞（けいようし）には、名詞の前と be動詞のあとの2つの居場所があります。',
    [...W(['This soup', 'is', 'b|hot.'], 30, 34, 15), lb(160, 76, 'be動詞のあと（この単元）', 12, C.blue, 'middle', true), ...W(['This is', 'b|hot', 'soup.'], 104, 34, 15), lb(160, 150, '名詞の前（前の単元）', 12, C.gray, 'middle')],
    '形容詞の居場所は2つ', B),
  S('be動詞のあとに置いて主語（しゅご）の様子を説明する使い方を、叙述用法（じょじゅつようほう）といいます。This flower is beautiful.（この花は美しい）、He is kind.（彼は親切だ）。',
    [...W(['This flower', 'is', 'g|beautiful.'], 24, 34, 14), ar(250, 66, 80, 66, C.green, true), lb(160, 82, '形容詞が主語 This flower を説明', 12, C.green, 'middle', true), ...W(['He', 'is', 'g|kind.'], 112, 34, 14), ar(190, 152, 60, 152, C.green, true), lb(160, 164, 'kind が He を説明', 11, C.green, 'middle')],
    '〈主語 ＋ be動詞 ＋ 形容詞〉', G),
  S('同じ kind でも、何を説明しているかがちがいます。He is a kind boy. の kind は boy（名詞）を説明し、He is kind. の kind は He（主語）を説明します。',
    [...W(['He is a', 'b|kind', 'boy.'], 22, 34, 14), ar(160, 62, 220, 62, C.blue), lb(160, 84, '名詞 boy を説明（限定用法）', 12, C.blue, 'middle', true), ...W(['He', 'is', 'g|kind.'], 108, 34, 14), ar(160, 148, 60, 148, C.green), lb(160, 166, '主語 He を説明（叙述用法）', 12, C.green, 'middle', true)],
    '名詞の前 → 限定、be動詞のあと → 叙述', M),
  S('❓This book interesting. がまちがいなのは、なぜでしょう。→ 日本語の「この本はおもしろい」には「〜だ」にあたる語がはっきり出ませんが、英語は「〜は〜だ」の文に必ず動詞（どうし）が必要で、形容詞だけでは文にならないからです。',
    [Q('be動詞を落とすとまちがいなのは？'), ...W(['This book', 'r|interesting.'], 52, 34, 15), lb(160, 98, '× 動詞がない（文にならない）', 12, C.red, 'middle', true), ar(160, 108, 160, 122, C.main), ...W(['This book', 'g|is', 'interesting.'], 126, 34, 15)],
    '「〜は〜だ」には be動詞が必要', P),
  S('be動詞は主語に合わせて形が変わります。I am hungry. You are tired. She is happy. We are ready. 主語と be動詞をセットで言えるようにしましょう。',
    [...T([['主語', 'be動詞', '例'], ['I', 'am', 'I am hungry.'], ['You', 'are', 'You are tired.'], ['He / She', 'is', 'She is happy.'], ['We / They', 'are', 'We are ready.']], 14, [70, 64, 166], M, 30, 12, [M, [C.blue, FILL.blue], [C.blue, FILL.blue], [C.blue, FILL.blue], [C.blue, FILL.blue]])],
    '主語に合わせて am / are / is', B),
  S('be動詞のほかにも、形容詞をうしろに置く動詞があります。look（〜に見える）・sound（〜に聞こえる）・feel（〜に感じる）・taste（〜の味がする）・smell（〜のにおいがする）・become／get（〜になる）です。',
    [bx(10, 12, 300, 34, 'look　見える　　sound　聞こえる', C.main, FILL.warm, 13), bx(10, 52, 300, 34, 'feel　感じる　　taste　味がする', C.main, FILL.warm, 13), bx(10, 92, 300, 34, 'smell　においがする　　become / get　〜になる', C.main, FILL.warm, 12), lb(160, 148, 'これらのあとには 形容詞', 13, C.blue, 'middle', true)],
    'あとに形容詞が来る動詞', B),
  S('❓You look happily. ではなく You look happy. なのは、なぜでしょう。→ happy は「うれしそう」という主語の状態を表す語だからです。副詞（ふくし）の happily は動作のしかたを説明する語なので、look（見える）のあとには置けません。',
    [Q('You look happy. が正しいのは？'), ...W(['You', 'look', 'r|happily.'], 52, 34, 15), lb(160, 98, '× 副詞は動作のしかた', 12, C.red, 'middle', true), ar(160, 108, 160, 122, C.main), ...W(['You', 'look', 'g|happy.'], 126, 34, 15), lb(160, 168, '主語の状態を表す → 形容詞', 11, C.green, 'middle')],
    '主語の様子 → 形容詞', P),
  S('look のあとに at が付くと、意味も後ろの語もかわります。〈look＋形容詞〉は「〜に見える」、〈look at＋名詞〉は「〜を見る」です。動作の言い方なので、He looked at me carefully. のように副詞がつきます。',
    [bx(10, 14, 300, 56, 'look ＋ 形容詞\nYou look happy.　＝　うれしそうに見える', C.green, FILL.green, 13), bx(10, 82, 300, 56, 'look at ＋ 名詞\nHe looked at me carefully.　＝　注意深く見た', C.blue, FILL.blue, 12)],
    'at があるか、ないか', M),
  S('まとめです。形容詞は名詞の前（限定）と、be動詞や look などのあと（叙述）の2か所に入ります。be動詞を落とさず、look などのあとは副詞にしません。',
    [...ST([['名詞の前 → 限定　／　be動詞のあと → 叙述', B], ['This book is interesting.（be動詞を落とさない）', G], ['You look happy.（look のあとは形容詞）', P]], 14, 44, 10, 13)],
    '形容詞を見たら「何を説明している？」', M),
], '形容詞が主語の様子を説明する');

// ── -ing・-ed の形容詞と、something のあとの形容詞（s229・節0）──
figs['xf_eigo_s229'] = show([
  S('I\'m exciting. と言うと「私は人をわくわくさせる人です」という意味になってしまいます。「わくわくしている」なら I\'m excited. です。-ing と -ed のちがいは、「させる側」と「される側」のちがいです。',
    [...W(['I\'m', 'r|exciting.'], 28, 34, 16), lb(160, 72, '＝ 私は人をわくわくさせる人', 12, C.red, 'middle', true), ...W(['I\'m', 'g|excited.'], 100, 34, 16), lb(160, 144, '＝ 私はわくわくしている', 12, C.green, 'middle', true)],
    '-ing と -ed で意味が変わる', R),
  S('-ing の形容詞（けいようし）は「（人を）〜させるような」という意味で、もの・こと・できごとが主語になります。The game was exciting.（その試合はわくわくするものだった）。',
    [bx(10, 20, 104, 50, 'The game\n（もの・こと）', C.blue, FILL.blue, 12), ar(118, 45, 200, 45, C.blue), lb(159, 34, '〜させる', 11, C.blue, 'middle', true), bx(206, 20, 104, 50, 'exciting', C.blue, FILL.blue, 15), ...W(['The game', 'was', 'b|exciting.'], 100, 34, 14)],
    '-ing ＝ 人を〜させる（主語は もの・こと）', B),
  S('-ed の形容詞は「〜させられた気持ちだ」という意味で、人が主語になります。I was excited.（私はわくわくした）。',
    [bx(10, 20, 104, 50, 'I\n（人）', C.green, FILL.green, 14), ar(118, 45, 200, 45, C.green), lb(159, 34, '〜させられた', 10, C.green, 'middle', true), bx(206, 20, 104, 50, 'excited', C.green, FILL.green, 15), ...W(['I', 'was', 'g|excited.'], 100, 34, 14)],
    '-ed ＝ 〜させられた（主語は 人）', G),
  S('❓なぜ試合は exciting で、私は excited なのでしょう。→ 試合はわくわくを「させる側」、私はわくわくを「させられる側」だからです。矢印の出どころが -ing、受け取るほうが -ed です。',
    [Q('試合は exciting、私は excited なのは？'), bx(10, 56, 104, 44, 'the game\nさせる側', C.blue, FILL.blue, 13), ar(118, 78, 200, 78, C.main), lb(159, 66, 'わくわく', 11, C.main, 'middle', true), bx(206, 56, 104, 44, 'I\nさせられる側', C.green, FILL.green, 13), lb(70, 118, '→ exciting', 14, C.blue, 'middle', true), lb(250, 118, '→ excited', 14, C.green, 'middle', true)],
    '出す側は -ing、受ける側は -ed', P),
  S('見分け方は、主語が人か、もの・ことかで決めます。interesting / interested、surprising / surprised、boring / bored、tiring / tired が同じ関係です。',
    [...T([['原形', 'もの・こと（-ing）', '人（-ed）'], ['interest', 'interesting', 'interested'], ['surprise', 'surprising', 'surprised'], ['bore', 'boring', 'bored'], ['tire', 'tiring', 'tired']], 14, [70, 124, 106], M, 30, 12, [M, [C.blue, FILL.blue], [C.blue, FILL.blue], [C.blue, FILL.blue], [C.blue, FILL.blue]])],
    '主語が人か、ものか', B),
  S('両方の形が1つの文に出てくる例です。I was excited about the exciting game.（私はそのわくわくする試合に興奮した）。人の気持ちが excited、試合のようすが exciting です。まるごと覚えてしまいましょう。',
    [...W(['I was', 'g|excited', 'about the', 'b|exciting', 'game.'], 30, 34, 12), lb(80, 84, '人（私）', 12, C.green, 'middle', true), lb(250, 84, 'もの（試合）', 12, C.blue, 'middle', true)],
    '人 → excited、もの → exciting', M),
  S('前置詞（ぜんちし）ごと熟語（じゅくご）で覚えるものもあります。be interested in ~（〜に興味がある）、be surprised at ~（〜に驚く）。I am interested in science.',
    [bx(10, 20, 300, 50, 'be interested in ~\n〜に興味がある', C.green, FILL.green, 14), bx(10, 82, 300, 50, 'be surprised at ~\n〜に驚く', C.green, FILL.green, 14), lb(160, 152, 'I am interested in science.', 13, C.ink, 'middle', true)],
    '前置詞（in / at）までセットで', G),
  S('ここからは、形容詞の置き場所の特別ルールです。something・anything・nothing・someone のように -thing・-body・-one で終わる語を説明するときだけ、形容詞を後ろに置きます。something cold（何か冷たいもの）。',
    [...W(['y|something', 'b|cold'], 24, 36, 17), ...W(['y|anything', 'b|interesting'], 72, 36, 17), ...W(['y|nothing', 'b|special'], 120, 36, 17)],
    '-thing / -body / -one の語は、形容詞が後ろ', B),
  S('to 不定詞（ふていし）が続くときは〈something＋形容詞＋to＋動詞の原形〉の順です。形容詞が先、to 不定詞があとです。something cold to drink（何か冷たい飲み物）。',
    [...W(['I want', 'something', 'b|cold', 'g|to drink.'], 22, 36, 14), lb(160, 72, '形容詞が先 → to 不定詞があと', 12, C.green, 'middle', true), bx(10, 92, 300, 60, '× something to drink cold\n× cold something to drink', C.red, FILL.red, 14)],
    'something ＋ 形容詞 ＋ to ~', G),
  S('something は肯定文（こうていぶん）、anything は疑問文（ぎもんぶん）と否定文で使うのが原則です。I have something to do. Do you have anything to do? I don\'t have anything to do.',
    [...ST([['I have something to do.　（ふつうの文）', G], ['Do you have anything to do?　（疑問文）', B], ['I don\'t have anything to do.　（否定文）', B]], 14, 40, 10, 13)],
    'ふつうの文 → something、疑問・否定 → anything', M),
  S('注意です。後ろに置くのは -thing・-body・-one で終わる語だけです。ふつうの名詞は、cold water のように形容詞が前です。water cold とは言いません。',
    [bx(10, 20, 300, 44, '○ cold water　　× water cold', C.blue, FILL.blue, 15), bx(10, 76, 300, 44, '○ something cold　　× cold something', C.green, FILL.green, 15), lb(160, 146, 'something の仲間だけが特別', 12, C.gray, 'middle', true)],
    '後置は something の仲間だけ', M),
  S('まとめです。-ing は人を〜させるもの、-ed は〜させられた人。something の仲間を説明する形容詞は後ろに置き、〈something＋形容詞＋to〜〉の順にします。',
    [...ST([['-ing ＝ させる側（もの）／ -ed ＝ される側（人）', B], ['something cold（形容詞は後ろ）', G], ['something cold to drink（to 不定詞は最後）', P]], 14, 44, 10, 13)],
    '「させる？される？」と「後ろに置く？」', M),
], '-ing と -ed の形容詞');

// ── 数えられる名詞・数えられない名詞と many / much（s230・節2）──
figs['xf_eigo_s230'] = show([
  S('英語で「数えられる」とは、形がはっきりしていて、一つ、二つと区切れることです。book は区切れるので a book、two books と数えます。water は区切りがないので、数えません。',
    [bx(10, 20, 62, 44, 'book', C.blue, FILL.blue, 14), bx(80, 20, 62, 44, 'book', C.blue, FILL.blue, 14), bx(150, 20, 62, 44, 'book', C.blue, FILL.blue, 14), lb(111, 82, '一つ・二つ…と区切れる', 12, C.blue, 'middle', true), bx(10, 100, 300, 46, 'water（区切りがない）', C.green, FILL.green, 15), lb(160, 162, '数えられない', 12, C.green, 'middle', true)],
    '区切れる → 数える／区切れない → 数えない', B),
  S('❓water のほかにも、数えない名詞があります。パン（bread）・米（rice）・お金（money）・紙（paper）も、形が決まっていない材料や、ひとかたまりのものなので、数えられない名詞（めいし）です。',
    [Q('ほかにも数えないものは？'), ...W(['g|water', 'g|milk', 'g|tea'], 52, 34, 16), ...W(['g|bread', 'g|rice', 'g|paper'], 96, 34, 16), lb(160, 150, 'どれも a や s を付けない（× a money、× moneys）', 11, C.gray, 'middle')],
    '形が決まっていない → 数えられない名詞', P),
  S('❓では、homework は、なぜ数えられないのでしょう。→ homework・information・news・advice は、目に見えない「ひとまとまり」で、区切れないからです。日本語では「宿題が三つ」と数えるので、homeworks と書いてしまいやすいのです。',
    [Q('homework が数えられないのは？', true), ...W(['r|homeworks', 'r|informations'], 52, 34, 15), lb(160, 98, '× 目に見えない「まとまり」は複数にしない', 12, C.red, 'middle', true), ...W(['g|homework', 'g|information', 'g|news', 'g|advice'], 116, 34, 12), lb(160, 162, '日本人がまちがえやすい4語', 11, C.gray, 'middle')],
    'homework・information・news・advice は数えない', P),
  S('数えたいときは、入れ物や単位で区切ります。a glass of water（コップ1杯の水）、two cups of tea（お茶2杯）、three pieces of paper（紙3枚）、a slice of bread（パン1枚）。two pieces of homework のようにも言えます。',
    [...ST([['a glass of water　コップ1杯の水', B], ['two cups of tea　お茶2杯', B], ['three pieces of paper　紙3枚', B], ['a slice of bread　パン1枚', B]], 10, 30, 6, 13), lb(160, 158, '水ではなく「コップ」を数えている', 12, C.blue, 'middle', true)],
    '入れ物・単位を数える', B),
  S('❓many と much は、どう使い分けるのでしょう。→ many は「数」、much は「量」です。数えられる名詞の複数形（ふくすうけい）には many、数えられない名詞には much を使います。',
    [Q('many と much の使い分けは？'), bx(10, 52, 147, 70, 'many\n数\nmany books', C.blue, FILL.blue, 14), bx(163, 52, 147, 70, 'much\n量\nmuch water', C.green, FILL.green, 14), lb(160, 144, '× much friends　× many time', 13, C.red, 'middle', true)],
    '数 → many ／ 量 → much', P),
  S('❓much はなぜ肯定文（こうていぶん）では避けるのでしょう。→ 英語の習慣として、much は否定文や疑問文で使われることが多く、ふつうの肯定文ではかたい言い方になるからです。肯定文では a lot of が自然です。',
    [Q('肯定文で much を避けるのは？'), ...T([['文の種類', '使う形'], ['肯定', 'I have a lot of money.'], ['否定', 'I don\'t have much time.'], ['疑問', 'How much water?']], 50, [80, 220], M, 28, 12, [M, [C.green, FILL.green], [C.blue, FILL.blue], [C.blue, FILL.blue]])],
    '肯定は a lot of、否定・疑問は much', P),
  S('many は肯定文でもふつうに使えます。Many students came to the party.（多くの生徒がパーティーに来た）。students は複数形で、many のうしろに複数形の名詞が続いています。',
    [...W(['g|Many', 'students', 'came', 'to the party.'], 40, 36, 14), lb(160, 92, 'many ＋ 数えられる名詞の複数形', 12, C.green, 'middle', true), lb(160, 124, 'many は肯定文でも自然', 13, C.blue, 'middle', true)],
    'many は肯定文でも使える', G),
  S('数や量をたずねる文です。数なら How many＋複数形、量や値段なら How much です。How many books do you have? How much water do you need? How much is this bag?',
    [...ST([['How many books do you have?　（何冊）', B], ['How much water do you need?　（どれくらい）', G], ['How much is this bag?　（いくら）', G]], 14, 34, 8, 12), lb(160, 152, '× How many book（名詞は必ず複数形）', 12, C.red, 'middle', true)],
    '数 → How many ＋ 複数形／量・値段 → How much', M),
  S('まとめの手順です。①数えられるかを先に決める。②数えられる→many＋複数形、数えられない→much。③肯定文なら a lot of。④数なら How many、量や値段なら How much。',
    [...F([['① 数えら\nれる？', B], ['② many\nか much', G], ['③ 肯定は\na lot of', P]], 24, 56, 12), lb(160, 110, '④ 数 → How many ＋ 複数形', 13, C.ink, 'middle', true), lb(160, 134, '　量・値段 → How much', 13, C.ink, 'middle', true)],
    '数えられるかを、先に決める', M),
], '数えられる名詞と many / much');

// ── a lot of / lots of / plenty of（s231・節0）──
figs['xf_eigo_s231'] = show([
  S('many と much の使い分けは、めんどうです。でも a lot of なら、本にも水にも使えます。a lot of books も a lot of water も正しい形です。',
    [...LR('many\n数えられる名詞だけ', 'much\n数えられない名詞だけ', 14, 60, B, B, 13), ar(160, 84, 160, 100, C.main), bx(30, 104, 260, 46, 'a lot of\nどちらにも使える', C.green, FILL.green, 15)],
    'a lot of は数にも量にも使える', G),
  S('数えられる名詞には a lot of books・a lot of students・a lot of people、数えられない名詞には a lot of water・a lot of money・a lot of time・a lot of snow のように使います。',
    [bx(10, 14, 300, 56, '数えられる名詞\na lot of books / students / people', C.blue, FILL.blue, 13), bx(10, 82, 300, 56, '数えられない名詞\na lot of water / money / time / snow', C.green, FILL.green, 13), lb(160, 156, 'I have a lot of friends in Osaka.', 12, C.ink, 'middle', true)],
    'どちらの名詞にも使える', B),
  S('❓なぜ a lot of は両方に使えるのでしょう。→ many は「数」、much は「量」と決まった意味を持っています。a lot of は「たくさんの」という大きさだけを表す言い方で、数か量かを決めていないからです。',
    [Q('両方に使えるのは？'), bx(10, 52, 90, 40, 'many\n＝ 数', C.blue, FILL.blue, 13), bx(115, 52, 90, 40, 'much\n＝ 量', C.green, FILL.green, 13), bx(220, 52, 90, 40, 'a lot of\n＝ たくさん', C.purple, FILL.purple, 12), lb(160, 118, 'a lot of は数か量かを決めていない', 12, C.purple, 'middle', true), lb(160, 142, 'だからどちらの名詞にも置ける', 12, C.gray, 'middle')],
    '「たくさん」だけを表す言い方', P),
  S('動詞の形を決めるのは、a lot of のうしろの名詞です。本は複数なので There are a lot of books on the desk.、水は数えられないので There is a lot of water in the bottle. です。',
    [...W(['There', 'g|are', 'a lot of', 'b|books', 'on the desk.'], 22, 32, 11), lb(160, 66, 'books ＝ 複数 → are', 12, C.green, 'middle', true), ...W(['There', 'g|is', 'a lot of', 'b|water', 'in the bottle.'], 92, 32, 11), lb(160, 136, 'water ＝ 数えられない → is', 12, C.green, 'middle', true)],
    '動詞は うしろの名詞に合わせる', G),
  S('主語になるときも同じです。A lot of students like this song.（students は複数なので like）。A lot of time is needed.（time は数えられないので is）。「a lot of だから、いつも are」と決めつけてはいけません。',
    [...W(['A lot of', 'b|students', 'g|like', 'this song.'], 24, 34, 12), lb(160, 70, '複数 → like', 12, C.green, 'middle', true), ...W(['A lot of', 'b|time', 'g|is', 'needed.'], 96, 34, 12), lb(160, 142, '数えられない → is', 12, C.green, 'middle', true)],
    'a lot of 自体は単数でも複数でもない', G),
  S('❓a lot books と of を落とすと、どうなるのでしょう。→ 名詞が続くときは、必ず a lot of の形にします。of がないと形がくずれて、まちがいになります。',
    [Q('of を落としてもいい？'), ...W(['r|a lot', 'books'], 56, 36, 17), lb(160, 104, '× of がない', 13, C.red, 'middle', true), ar(160, 114, 160, 128, C.main), ...W(['g|a lot of', 'books'], 130, 36, 17)],
    '名詞が続くなら a lot of', P),
  S('a lot of の仲間です。lots of は a lot of とまったく同じ意味の、会話的でくだけた言い方です。plenty of は「十分にたくさんの」で、足りているという気持ちがふくまれます。We have plenty of time.',
    [bx(10, 14, 300, 50, 'lots of ＝ a lot of（くだけた言い方）\nI have lots of homework today.', C.blue, FILL.blue, 12), bx(10, 76, 300, 50, 'plenty of ＝ 十分にたくさんの\nWe have plenty of time.　時間はたっぷり', C.green, FILL.green, 12), lb(160, 150, 'plenty of は「足りている」気持ち', 12, C.gray, 'middle')],
    'lots of ・ plenty of も あとに名詞', B),
  S('名詞を続けずに a lot だけで使うと、「たくさん・とても」という副詞（ふくし）になります。このときは of を付けません。He eats a lot.（彼はたくさん食べる）。Thank you a lot.',
    [...W(['He', 'eats', 'g|a lot.'], 24, 34, 16), lb(160, 70, 'あとに名詞がない → of なし', 12, C.green, 'middle', true), ...W(['Thank you', 'g|a lot.'], 94, 34, 16), lb(160, 140, '「どうもありがとう」', 12, C.gray, 'middle')],
    '名詞がなければ a lot（of なし）', G),
  S('a lot は比較級（ひかくきゅう）の前に置くと「ずっと」と強める意味にもなります。This bag is a lot bigger than that one.（このかばんはあれよりずっと大きい）。',
    [...W(['This bag', 'is', 'g|a lot', 'b|bigger', 'than that one.'], 36, 34, 12), lb(160, 88, 'a lot ＝ ずっと　bigger ＝ 大きい', 12, C.green, 'middle', true), lb(160, 118, 'a lot が bigger を強めている', 12, C.gray, 'middle')],
    '比較級の前の a lot ＝「ずっと」', G),
  S('まとめです。名詞が続くなら a lot of（数にも量にも使える）、名詞がなければ a lot。動詞の形はうしろの名詞に合わせます。',
    [...ST([['a lot of ＋ 名詞（数にも量にも）', B], ['動詞は うしろの名詞に合わせる（are / is）', G], ['名詞がなければ a lot（of なし）', P]], 14, 44, 10, 13)],
    '名詞があれば of、なければ of なし', M),
], 'a lot of / lots of / plenty of');

// ── some と any の使い分け（s233・節0）──
figs['xf_eigo_s233'] = show([
  S('some と any は、どちらも「いくらかの」を表します。使う文の種類で使い分けるのが原則（げんそく）です。肯定文（こうていぶん）には some、疑問文（ぎもんぶん）と否定文（ひていぶん）には any を使います。',
    [bx(10, 14, 300, 40, '肯定文（ふつうの文）→ some', C.green, FILL.green, 15), bx(10, 62, 300, 40, '疑問文（〜ですか）→ any', C.blue, FILL.blue, 15), bx(10, 110, 300, 40, '否定文（〜ない）→ any', C.blue, FILL.blue, 15)],
    '文の種類を見て決める', M),
  S('例文です。I have some pens.（ペンを何本か持っている）。Do you have any pens?（ペンを持っていますか）。I don\'t have any pens.（ペンを1本も持っていない）。',
    [...ST([['I have some pens.　　肯定', G], ['Do you have any pens?　　疑問', B], ['I don\'t have any pens.　　否定', B]], 14, 36, 8, 13), lb(160, 154, 'まず文の種類 → some か any', 12, C.gray, 'middle')],
    '肯定 → some／疑問・否定 → any', M),
  S('some も any も、数えられる名詞の複数形（ふくすうけい）と、数えられない名詞の両方に使えます。some books・some water、any books・any water。many と much のように名詞の種類で選ばなくてよいのです。',
    [...LR('some / any\n＋ books\n（数えられる）', 'some / any\n＋ water\n（数えられない）', 14, 80, B, G, 13), lb(160, 120, 'some books ／ some water', 13, C.ink, 'middle', true), lb(160, 144, 'any books ／ any water', 13, C.ink, 'middle', true)],
    '名詞の種類は選ばない', B),
  S('否定文で数えられる名詞が続くとき、any のあとは複数形にします。I don\'t have any books. が正しく、I don\'t have any book. はまちがいです。',
    [...W(['I don\'t have', 'any', 'r|book.'], 30, 34, 15), lb(160, 78, '× 単数のまま', 12, C.red, 'middle', true), ar(160, 90, 160, 108, C.main), ...W(['I don\'t have', 'any', 'g|books.'], 112, 34, 15)],
    'any のあとは複数形', G),
  S('❓でも Would you like some tea? は疑問文なのに some です。なぜでしょう。→ 人にものをすすめるときは、相手が「はい」と答えると思っているので some を使います。「あるかどうか」を聞いているのではないのです。',
    [Q('疑問文なのに some を使うのは？'), ...W(['Would you like', 'g|some', 'tea?'], 52, 34, 14), lb(160, 98, '相手が「はい」と言うと思って すすめている', 11, C.green, 'middle', true), ...W(['Can I have', 'g|some', 'water?'], 116, 34, 14), lb(160, 160, '人に頼むときも some', 12, C.gray, 'middle')],
    'すすめる・頼む疑問文は some', P),
  S('❓では、本当に「あるかどうか」を知りたいときは？→ その場合は any を使います。Do you have any questions?（質問はありますか）。答えが Yes か No か分からないふつうの質問は、any です。',
    [Q('ふつうの質問では？', true), bx(10, 52, 300, 44, 'Would you like some tea?\nすすめる → Yes を期待 → some', C.green, FILL.green, 13), bx(10, 108, 300, 44, 'Do you have any questions?\nあるかどうか知りたい → any', C.blue, FILL.blue, 13)],
    '期待がある → some／ふつうの質問 → any', P),
  S('否定文の not 〜 any は、no を使って一語で言いかえられます。I don\'t have any brothers. ＝ I have no brothers. no を使うときは don\'t を重ねてはいけません。I don\'t have no money. はまちがいです。',
    [bx(10, 16, 300, 36, 'I don\'t have any brothers.', C.blue, FILL.blue, 14), lb(160, 66, '＝', 18, C.ink, 'middle', true), bx(10, 78, 300, 36, 'I have no brothers.', C.green, FILL.green, 14), lb(160, 138, '× I don\'t have no money.（ない が 2つ）', 12, C.red, 'middle', true)],
    'not any ＝ no（重ねない）', B),
  S('肯定文で any を使うと、意味が変わって「どんな〜でも」になります。Any student can join the club.（どの生徒でもクラブに入れる）。You can take any book you like.',
    [...W(['b|Any', 'student', 'can join', 'the club.'], 30, 36, 14), lb(160, 82, 'どの生徒でも', 13, C.blue, 'middle', true), ...W(['You can take', 'b|any', 'book', 'you like.'], 110, 36, 13), lb(160, 160, '好きな本ならどれでも', 12, C.blue, 'middle', true)],
    '肯定文の any ＝「どんな〜でも」', B),
  S('まとめです。まず文の種類（肯定・疑問・否定）を見て some か any を決め、次に名詞の形を整えます。人にすすめる疑問文では some、肯定文の any は「どんな〜でも」です。',
    [...ST([['肯定 → some／疑問・否定 → any', B], ['すすめる・頼む疑問文は some', G], ['not any ＝ no　（重ねない）', P]], 14, 44, 10, 13)],
    '文の種類 → 名詞の形、の順', M),
], 'some と any の使い分け');

// ── all / most / both / every / each（s234・節0）──
figs['xf_eigo_s234'] = show([
  S('every と all は、どちらも「全部」を表します。ところが Every student is here. の student は単数（たんすう）、All the students are here. の students は複数（ふくすう）です。同じ意味なのに形がちがいます。',
    [...W(['g|Every', 'student', 'is', 'here.'], 24, 34, 14), lb(160, 70, 'every ＋ 単数 ＋ is', 12, C.green, 'middle', true), ...W(['b|All the', 'students', 'are', 'here.'], 96, 34, 14), lb(160, 142, 'all ＋ 複数 ＋ are', 12, C.blue, 'middle', true)],
    '同じ「全部」でも 形がちがう', M),
  S('every は〈every＋単数名詞＋単数の動詞〉です。Every boy likes soccer.（どの男の子もサッカーが好きだ）の likes のように、動詞は三人称単数（さんにんしょうたんすう）の形になります。',
    [...W(['g|Every', 'boy', 'likes', 'soccer.'], 30, 36, 15), lb(160, 82, '名詞は単数形（boy）', 12, C.green, 'middle', true), lb(160, 104, '動詞も s が付く（likes）', 12, C.green, 'middle', true), lb(160, 138, 'Every house has a garden.', 12, C.gray, 'middle')],
    'every ＋ 単数名詞 ＋ 単数の動詞', G),
  S('❓全員のことなのに、なぜ every は単数なのでしょう。→ every は「全員をひとまとめに見る」のではなく「ひとりひとりを順に見ていく」言い方で、1つずつ数えるので単数をそえるからです。',
    [Q('全員なのに単数なのは？'), ...W(['1人', '1人', '1人', '1人'], 52, 30, 14), ar(30, 98, 290, 98, C.green), lb(160, 118, 'every は 1つずつ見ていく', 13, C.green, 'middle', true), lb(160, 142, 'だから student（1人）＋ is', 12, C.gray, 'middle')],
    'ひとりずつ見る → 単数', P),
  S('each も同じ単数あつかいです。Each student has a textbook.（それぞれの生徒が教科書を持っている）。Each of the boys was busy. のように、of のあとは複数でも、主語の each は単数なので was を使います。',
    [...W(['g|Each', 'student', 'has', 'a textbook.'], 22, 34, 13), ...W(['g|Each of', 'the boys', 'was', 'busy.'], 90, 34, 13), lb(160, 138, 'each が主語 → 動詞は単数（has / was）', 12, C.green, 'middle', true)],
    'each も単数あつかい', G),
  S('everyone・everybody も単数あつかいです。Everyone is happy.（みんな幸せだ）。Everybody knows him. 日本語の「みんな」は複数の感じがするので are や know としがちですが、英語では単数です。',
    [...W(['g|Everyone', 'is', 'happy.'], 24, 34, 15), lb(160, 70, '○ is', 13, C.green, 'middle', true), ...W(['r|Everyone', 'are', 'happy.'], 94, 34, 15), lb(160, 140, '× are（「みんな」でも単数）', 12, C.red, 'middle', true)],
    'everyone / everybody → 単数', G),
  S('ここからは複数あつかいの語です。all は「すべての」。All the students are here. のように、数えられる名詞なら複数形＋複数の動詞です。',
    [...W(['b|All the', 'students', 'are', 'here.'], 30, 36, 15), lb(160, 82, 'students ＝ 複数 → are', 12, C.blue, 'middle', true), lb(160, 114, 'All my friends like music.', 13, C.ink, 'middle', true)],
    'all ＋ 複数名詞 ＋ 複数の動詞', B),
  S('all のあとが数えられない名詞のときは、動詞は単数の形になります。All the water was gone.（水はすべてなくなっていた）。water は数えられないので was です。',
    [...W(['b|All the', 'water', 'was', 'gone.'], 30, 36, 15), lb(160, 82, 'water ＝ 数えられない → was', 12, C.blue, 'middle', true), lb(160, 120, 'all は名詞しだいで 動詞が変わる', 12, C.gray, 'middle')],
    'all ＋ 数えられない名詞 → 単数の動詞', B),
  S('both は「両方の」で、必ず2つ（2人）について使い、複数あつかいです。Both books are new.（両方の本とも新しい）。most は「ほとんどの」で、Most students like this song. のように使います。',
    [...W(['b|Both', 'books', 'are', 'new.'], 24, 34, 14), lb(160, 70, '2つ ＝ 複数 → are', 12, C.blue, 'middle', true), ...W(['b|Most', 'students', 'like', 'this song.'], 96, 34, 13), lb(160, 142, 'ほとんどの生徒 → like', 12, C.blue, 'middle', true)],
    'both / most ＋ 複数名詞', B),
  S('of を使うときは、そのあとの名詞に the や my が必要です。most of the students・both of my friends・all of these books が正しく、most of students・both of friends はまちがいです。',
    [bx(10, 14, 300, 70, '○ most of the students\n○ both of my friends\n○ all of these books', C.green, FILL.green, 14), bx(10, 94, 300, 56, '× most of students\n× both of friends', C.red, FILL.red, 14), lb(160, 164, 'of を使わなければ the は不要（most students）', 11, C.gray, 'middle')],
    'of のあとは the / my などが必要', G),
  S('まとめです。every・each・everyone は単数あつかいで、Every student are here. は最頻出のまちがいです。all・both・most は複数あつかいで、of を使うなら the や my を付けます。',
    [...ST([['every / each / everyone → 単数（is・has・likes）', G], ['all / both / most → 複数（are・like）', B], ['of を使うなら the / my が必要', P]], 14, 44, 10, 12)],
    '見たら すぐ 動詞の形を決める', M),
], '数量を表す語と動詞の形');

// ── 副詞のはたらき（s235・節0）──
figs['xf_eigo_s235'] = show([
  S('He is a slow walker. と He walks slowly. は、意味はほぼ同じです。ただし slow は名詞（めいし）の walker を、slowly は動詞（どうし）の walks を説明しています。説明する相手がちがうと、語の形も変わります。',
    [...W(['He is a', 'b|slow', 'walker.'], 24, 34, 14), lb(160, 70, '形容詞 slow が 名詞を説明', 12, C.blue, 'middle', true), ...W(['He', 'walks', 'g|slowly.'], 96, 34, 14), lb(160, 142, '副詞 slowly が 動詞を説明', 12, C.green, 'middle', true)],
    '形容詞 → 名詞を説明／副詞 → 名詞以外', M),
  S('副詞（ふくし）は名詞以外を説明する語で、説明する相手は4種類です。①動詞　②形容詞　③ほかの副詞　④文全体。何を説明しているかで、4つに分けられます。',
    [...ST([['① 動詞を説明する　（どのように・いつ・どこで）', B], ['② 形容詞を説明する　（どのくらい）', G], ['③ ほかの副詞を説明する', P], ['④ 文全体を説明する', Y]], 10, 32, 6, 12)],
    '副詞が説明する相手は4つ', M),
  S('①動詞を説明する副詞です。He runs fast.（彼は速く走る）、She sings beautifully.（彼女は美しく歌う）、I got up early today.（今日は早く起きた）。fast・beautifully・early が動詞の様子を説明しています。',
    [...W(['He', 'runs', 'g|fast.'], 22, 34, 15), ar(200, 62, 130, 62, C.green, true), ...W(['She', 'sings', 'g|beautifully.'], 80, 34, 14), ar(250, 120, 160, 120, C.green, true), lb(160, 152, '副詞 → 動詞を説明', 12, C.green, 'middle', true)],
    '動詞を説明 ＝ どのように・いつ・どこで', G),
  S('②形容詞を説明する副詞は、程度（どのくらい）を表します。It is very hot today.（今日はとても暑い）の very は形容詞 hot を、This question is too difficult. の too は difficult を説明しています。',
    [...W(['It is', 'g|very', 'b|hot', 'today.'], 22, 34, 14), ar(150, 62, 180, 62, C.green), lb(160, 86, 'very（副詞）が hot（形容詞）を説明', 11, C.green, 'middle', true), ...W(['It is', 'g|too', 'b|difficult.'], 112, 34, 14), lb(160, 160, 'too ＝ 〜すぎる', 12, C.gray, 'middle')],
    '形容詞を説明 ＝ どのくらい', G),
  S('③ほかの副詞を説明することもあります。He runs very fast.（彼はとても速く走る）の very は、副詞 fast を説明しています。She speaks English quite well. の quite は副詞 well を説明しています。',
    [...W(['He', 'runs', 'g|very', 'b|fast.'], 24, 34, 15), lb(160, 70, 'very が fast（副詞）を説明', 12, C.green, 'middle', true), ...W(['She speaks English', 'g|quite', 'b|well.'], 100, 34, 12), lb(160, 146, 'quite ＝ かなり', 12, C.gray, 'middle')],
    '副詞を説明する副詞', G),
  S('④文全体を説明する副詞もあります。Luckily, we won the game.（幸運にも、私たちは試合に勝った）。Fortunately, it didn\'t rain. のように、文のはじめに置いて、文全体への気持ちを表します。',
    [...W(['g|Luckily,', 'we won the game.'], 30, 36, 15), ...W(['g|Fortunately,', 'it didn\'t rain.'], 90, 36, 14), lb(160, 150, '文全体に「運がよかった」という気持ち', 12, C.gray, 'middle')],
    '文のはじめで 文全体を説明', G),
  S('形容詞と副詞は、言い方を切りかえられます。He is a good soccer player.（形容詞）＝ He plays soccer well.（副詞）。She is a fast runner. ＝ She runs fast. 名詞を説明しているなら形容詞、動詞を説明しているなら副詞です。',
    [...W(['He is a', 'b|good', 'soccer player.'], 12, 28, 13), ...W(['He plays soccer', 'g|well.'], 44, 28, 13), ...W(['She is a', 'b|fast', 'runner.'], 92, 28, 13), ...W(['She runs', 'g|fast.'], 124, 28, 13), lb(160, 166, '上の段は名詞を、下の段は動詞を説明', 11, C.gray, 'middle')],
    '名詞を説明 → 形容詞／動詞を説明 → 副詞', M),
  S('❓He sings good. がまちがいなのは、なぜでしょう。→ sings は動詞（どうし）なので、説明する語は副詞でなければいけません。good は形容詞、「上手に」は副詞の well です。He is a good singer. なら、名詞 singer を説明するので good です。',
    [Q('He sings good. がまちがいなのは？'), ...W(['He sings', 'r|good.'], 52, 34, 16), lb(160, 98, '× 動詞を説明するのに形容詞', 12, C.red, 'middle', true), ...W(['He sings', 'g|well.'], 118, 34, 16), lb(160, 164, 'good ＝ 形容詞／well ＝ 副詞', 12, C.gray, 'middle')],
    '動詞を説明 → 副詞 well', P),
  S('❓では、副詞は -ly を付ければよいのでしょうか。fast は形容詞（速い）も副詞（速く）も同じ形で、fastly という語は存在しません。hard・early・late・high・long も同じ形です。He runs fast. であって fastly ではありません。',
    [Q('fast に -ly は付く？', true), ...W(['He is a', 'b|fast', 'runner.'], 52, 32, 13), ...W(['He runs', 'g|fast.'], 94, 32, 13), ...W(['He runs', 'r|fastly.'], 134, 32, 13), lb(300, 150, '×', 12, C.red, 'end', true)],
    'fastly という語はない', R),
  S('very と much のちがいです。very は形容詞や副詞のふつうの形（原級（げんきゅう））を強め、much は動詞や比較級（ひかくきゅう）を強めます。very tall（とても背が高い）、I like it very much.（とても好きだ）。',
    [bx(10, 14, 300, 56, 'very ＋ 形容詞・副詞\nvery tall（とても背が高い）', C.blue, FILL.blue, 13), bx(10, 82, 300, 56, 'much ＋ 動詞・比較級\nI like it very much.（とても好き）', C.green, FILL.green, 13)],
    'very ＝ 形容詞・副詞を強める／much ＝ 動詞を強める', M),
  S('まとめです。副詞は名詞以外（動詞・形容詞・ほかの副詞・文全体）を説明します。動詞を説明するなら good ではなく well、fast には -ly を付けません。',
    [...ST([['名詞を説明 → 形容詞／それ以外 → 副詞', B], ['He sings well.（good ではなく well）', G], ['He runs fast.（fastly という語はない）', P]], 14, 44, 10, 13)],
    '何を説明しているかで、品詞が決まる', M),
], '副詞のはたらき');

// ── 形容詞から副詞をつくる（s236・節0）──
figs['xf_eigo_s236'] = show([
  S('多くの副詞（ふくし）は、形容詞（けいようし）に -ly を付けてつくります。slow → slowly（ゆっくり）、quick → quickly（すばやく）、careful → carefully（注意深く）、quiet → quietly（静かに）。そのまま -ly を付けるのがいちばん多い型です。',
    [...T([['形容詞', '→', '副詞'], ['slow', '→', 'slowly'], ['quick', '→', 'quickly'], ['careful', '→', 'carefully'], ['quiet', '→', 'quietly']], 14, [110, 40, 120], M, 30, 13, [M, [C.blue, FILL.blue], [C.blue, FILL.blue], [C.blue, FILL.blue], [C.blue, FILL.blue]])],
    '型① そのまま -ly を付ける', B),
  S('型②です。〈子音字＋y〉で終わる語は、y を i に変えて -ly を付けます。easy → easily、happy → happily、angry → angrily、lucky → luckily。y のままにして easyly とはしません。',
    [...T([['形容詞', '→', '副詞'], ['easy', '→', 'easily'], ['happy', '→', 'happily'], ['angry', '→', 'angrily'], ['lucky', '→', 'luckily']], 14, [110, 40, 120], M, 30, 13, [M, [C.green, FILL.green], [C.green, FILL.green], [C.green, FILL.green], [C.green, FILL.green]])],
    '型② y を i に変えて -ly', G),
  S('❓なぜ y を i に変えるのでしょう。→ 比較級（ひかくきゅう）でも easy → easier、happy → happier と同じ変え方をします。つづりの決まりを、副詞と比較級でまとめて覚えられます。',
    [Q('y を i に変えるのは？'), ...W(['easy', '→', 'g|easily'], 52, 32, 16), ...W(['easy', '→', 'g|easier'], 96, 32, 16), lb(160, 150, 'どちらも y → i（比較級と同じ決まり）', 12, C.green, 'middle', true)],
    '副詞も比較級も y → i', P),
  S('型③です。-le で終わる語は、e を取って -y を付けます。gentle → gently（やさしく）、simple → simply（単純に）。型④は特別な形で、true → truly（e を取る）、full → fully（l が二つ）です。',
    [...T([['形容詞', '→', '副詞', 'ルール'], ['gentle', '→', 'gently', 'e を取って y'], ['simple', '→', 'simply', 'e を取って y'], ['true', '→', 'truly', 'e を取る'], ['full', '→', 'fully', 'l が二つ']], 12, [76, 34, 80, 110], M, 28, 12, [M, [C.purple, FILL.purple], [C.purple, FILL.purple], [C.main, FILL.warm], [C.main, FILL.warm]]), lb(160, 162, 'good だけは形が全部かわる → well', 12, C.gray, 'middle')],
    '型③ -le → -ly ／ 型④ 特別な形', P),
  S('形容詞と副詞が同じ形の語もあります。fast・hard・early・late・high・long・near・straight は、-ly を付けずにそのまま副詞として使います。He runs fast. であって fastly ではありません。',
    [...W(['fast', 'hard', 'early', 'late'], 28, 36, 16), ...W(['high', 'long', 'near', 'straight'], 80, 36, 16), lb(160, 138, 'このまま副詞にも使える', 13, C.green, 'middle', true), lb(160, 160, '× fastly', 12, C.red, 'middle', true)],
    '-ly を付けない副詞', G),
  S('ここから、-ly が付くと意味が変わる語です。hard ＝ 熱心に、激しく。hardly ＝ ほとんど〜ない。He studies hard.（彼は熱心に勉強する）。He hardly studies.（彼はほとんど勉強しない）。',
    [bx(10, 14, 147, 60, 'hard\n熱心に・激しく', C.green, FILL.green, 14), bx(163, 14, 147, 60, 'hardly\nほとんど〜ない', C.red, FILL.red, 14), lb(84, 96, 'He studies hard.', 12, C.green, 'middle', true), lb(237, 96, 'He hardly studies.', 12, C.red, 'middle', true), lb(84, 118, '熱心に勉強する', 12, C.gray, 'middle'), lb(237, 118, 'ほとんど勉強しない', 12, C.gray, 'middle')],
    'hard と hardly は ほぼ反対の意味', R),
  S('❓「一生けんめい勉強する」を He studies hardly. と書くと、どうなるのでしょう。→ 「ほとんど勉強しない」という正反対の意味になります。-ly を付けても意味は同じ、という思いこみが失点のもとです。',
    [Q('hardly を使ってしまうと？'), ...W(['He studies', 'r|hardly.'], 52, 34, 16), ar(160, 94, 160, 112, C.red), bx(40, 116, 240, 40, '＝ 彼は ほとんど勉強しない', C.red, FILL.red, 14)],
    '意味が正反対になる', P),
  S('ほかにも、-ly が付くと別の語になるものがあります。late（遅く）／lately（最近）、near（近くに）／nearly（ほとんど、およそ）。I got up late this morning. I haven\'t seen him lately.',
    [...T([['語', '意味', '-ly を付けた語', '意味'], ['late', '遅く', 'lately', '最近'], ['near', '近くに', 'nearly', 'ほとんど'], ['high', '高く', 'highly', '大いに']], 14, [66, 74, 90, 70], M, 32, 12, [M, [C.blue, FILL.blue], [C.blue, FILL.blue], [C.blue, FILL.blue]]), lb(160, 160, 'It is nearly ten o\'clock. ＝ もうすぐ10時', 11, C.gray, 'middle')],
    '-ly で意味が変わる語', B),
  S('hardly はそれ自体が「ほとんど〜ない」という否定の意味をふくんでいます。だから not を重ねてはいけません。I can hardly see it.（ほとんど見えない）が正しく、I can\'t hardly see it. はまちがいです。',
    [...W(['I', 'can', 'g|hardly', 'see it.'], 28, 34, 15), lb(160, 72, '○ hardly だけで否定', 12, C.green, 'middle', true), ...W(['I', 'r|can\'t', 'hardly', 'see it.'], 98, 34, 15), lb(160, 142, '× 否定が2つ', 12, C.red, 'middle', true)],
    'hardly と not は重ねない', G),
  S('-ly で終わるのに、形容詞の語があります。friendly（親しみのある）・lovely（すてきな）・lonely（ひとりぼっちの）・ugly（みにくい）です。He is a friendly boy. は正しく、He spoke to me friendly. は副詞が必要な場所なのでまちがいです。',
    [...W(['friendly', 'lovely', 'lonely', 'ugly'], 28, 36, 14), lb(160, 76, '-ly でも 形容詞！', 13, C.blue, 'middle', true), ...W(['He is a', 'g|friendly', 'boy.'], 100, 32, 13), ...W(['He spoke to me', 'r|friendly.'], 140, 28, 12)],
    '-ly で終わっても形容詞の語がある', B),
  S('まとめです。-ly の付け方には4つの型があります。fast などは形のまま、hard と hardly・late と lately のように -ly で意味が変わる語は区別が大切です。',
    [...ST([['そのまま／y→i／-le→-ly／特別（truly・fully）', B], ['fast・hard・early は形のまま副詞', G], ['hard ≠ hardly、late ≠ lately、near ≠ nearly', R]], 14, 44, 10, 12)],
    '型を選ぶ → 意味が変わる語に注意', M),
], '形容詞から副詞をつくる');

// ── 回数の表し方（s240・節0）──
figs['xf_eigo_s240'] = show([
  S('「週に3回」は three times a week と言います。回数の言い方には、1回と2回だけ特別な語があり、3回からは〈数＋times〉と規則的になります。',
    [...W(['g|three times', 'a', 'week'], 36, 40, 18), lb(160, 98, '「週に3回」', 14, C.ink, 'middle', true), lb(160, 126, '回数 ＋ a ＋ 期間', 13, C.blue, 'middle', true)],
    '回数 ＋ a ＋ 期間', G),
  S('回数の基本です。once（1回）、twice（2回）、three times（3回）、four times（4回）、many times（何度も）。I have been to Kyoto once.（京都に1度行ったことがある）。I read the book twice.（その本を2回読んだ）。',
    [...T([['回数', '英語'], ['1回', 'once'], ['2回', 'twice'], ['3回', 'three times'], ['何度も', 'many times']], 14, [80, 160], M, 30, 14, [M, [C.red, FILL.red], [C.red, FILL.red], [C.green, FILL.green], [C.green, FILL.green]])],
    '1回・2回だけ 特別な語', M),
  S('❓なぜ、one time・two times ではなく once・twice なのでしょう。→ よく使う語ほど、古い形がそのまま残っているからです。そのため two times とは言わず、twice を使うのがふつうです。',
    [Q('once・twice だけ特別なのは？'), bx(10, 52, 147, 50, 'one time\n× ふつうは言わない', C.red, FILL.red, 12), bx(163, 52, 147, 50, 'once\n○ 古い形が残った', C.green, FILL.green, 12), bx(10, 110, 147, 50, 'two times\n× ふつうは言わない', C.red, FILL.red, 12), bx(163, 110, 147, 50, 'twice\n○ 古い形が残った', C.green, FILL.green, 12)],
    'よく使う語ほど 古い形が残る', P),
  S('「〜につき何回」は〈回数＋a＋期間〉で表します。three times a week（週に3回）、once a month（月に1回）、twice a year（年に2回）、five times a day（1日に5回）。この a は「〜につき」という意味です。',
    [...T([['回数 a 期間', '意味'], ['three times a week', '週に3回'], ['once a month', '月に1回'], ['twice a year', '年に2回'], ['five times a day', '1日に5回']], 14, [170, 110], M, 30, 13, [M, [C.blue, FILL.blue], [C.blue, FILL.blue], [C.blue, FILL.blue], [C.blue, FILL.blue]])],
    'a ＝「〜につき」', B),
  S('I play tennis twice a week.（私は週に2回テニスをする）のように使います。かんちがいしやすいのは、a の代わりに in を使った three times in a week と、times の s を落とした three time a week で、どちらもまちがいです。',
    [...W(['I play tennis', 'g|twice a week.'], 20, 34, 14), ...W(['three times', 'r|in a', 'week'], 82, 34, 14), lb(160, 128, '× in は使わない', 12, C.red, 'middle', true), ...W(['three', 'r|time', 'a week'], 144, 28, 14)],
    '○ three times a week', G),
  S('「毎日」「毎週」のように、every＋時を表す語でも回数を言えます。every day（毎日）、every week（毎週）、every month（毎月）、every year（毎年）、every Sunday（毎週日曜日）、every morning（毎朝）。',
    [...W(['every day', 'every week', 'every month'], 28, 34, 13), ...W(['every year', 'every Sunday', 'every morning'], 76, 34, 12), lb(160, 130, 'every ＋ 時を表す語 ＝ 毎〜', 13, C.blue, 'middle', true), lb(160, 154, 'I study English every day.', 12, C.gray, 'middle')],
    'every ＋ 時 ＝ 毎〜', B),
  S('❓every day と everyday は同じでしょうか。→ ちがいます。2語の every day は「毎日」という副詞（ふくし）で、1語の everyday は「日常の」という形容詞（けいようし）です。I study English every day. は2語、This is an everyday event. は1語です。',
    [Q('every day と everyday は同じ？'), bx(10, 52, 147, 60, 'every day\n（2語）\n毎日', C.green, FILL.green, 13), bx(163, 52, 147, 60, 'everyday\n（1語）\n日常の', C.blue, FILL.blue, 13), lb(160, 134, '× I study English everyday.', 12, C.red, 'middle', true), lb(160, 156, '「毎日」は必ず2語', 12, C.green, 'middle', true)],
    '毎日は2語、日常のは1語', P),
  S('every の後ろに数と複数名詞（ふくすうめいし）を続けると「〜おきに」になります。every three days（3日ごとに）、every two weeks（2週間ごとに）。また、曜日を複数形にした on Sundays は「毎週日曜日に」です。',
    [bx(10, 14, 300, 44, 'every three days　＝　3日ごとに', C.blue, FILL.blue, 14), bx(10, 66, 300, 44, 'every two weeks　＝　2週間ごとに', C.blue, FILL.blue, 14), bx(10, 118, 300, 44, 'on Sundays　＝　毎週日曜日に', C.green, FILL.green, 14)],
    'every ＋ 数 ＋ 複数名詞 ／ 曜日の複数形', B),
  S('どこに置くかは、これらの語句は原則として文末（ぶんまつ）です。I go to the gym twice a week. 強調するときだけ、文頭に出して Every morning, I walk my dog. と言います。',
    [...W(['I go to the gym', 'g|twice a week.'], 24, 34, 13), lb(160, 70, '原則は文末', 12, C.green, 'middle', true), ...W(['g|Every morning,', 'I walk my dog.'], 98, 34, 13), lb(160, 144, '強調するときだけ文頭', 12, C.blue, 'middle', true)],
    '文末が基本、強調なら文頭', G),
  S('まとめです。1回は once、2回は twice、3回からは three times。〈回数＋a＋期間〉で「〜につき…回」。「毎日」は every day と必ず2語で書きます。',
    [...ST([['once ・ twice ・ three times（s を落とさない）', B], ['three times a week（a ＝ 〜につき）', G], ['every day（毎日）は2語', P]], 14, 44, 10, 12)],
    '回数 ＋ a ＋ 期間', M),
], '回数の表し方');

// ── 比較級・最上級のつづりの変化（s243・節0）──
figs['xf_eigo_s243'] = show([
  S('big の比較級（ひかくきゅう）は biger ではなく bigger、easy は easyer ではなく easier です。どちらも読み方を保つためのつづりの決まりです。三つの型に分けて覚えれば、はじめて見る語も自分で変化させられます。',
    [...ST([['① e で終わる語　→　-r / -st だけ', B], ['② 子音字 ＋ y　→　y を i にして -er / -est', G], ['③ 短い母音 ＋ 子音字1つ　→　子音字を重ねる', P]], 14, 44, 10, 12)],
    'つづりの変化は 3つの型', M),
  S('①e で終わる語は -r / -st だけを付けます。large → larger → largest、nice → nicer → nicest、wide → wider → widest、late → later → latest。',
    [...T([['原級', '比較級', '最上級'], ['large', 'larger', 'largest'], ['nice', 'nicer', 'nicest'], ['wide', 'wider', 'widest'], ['late', 'later', 'latest']], 14, [90, 100, 100], M, 30, 13, [M, [C.blue, FILL.blue], [C.blue, FILL.blue], [C.blue, FILL.blue], [C.blue, FILL.blue]])],
    'e で終わる → -r / -st', B),
  S('❓なぜ -er ではなく -r だけを付けるのでしょう。→ もともと e で終わっているので、-er をそのまま付けると e が二つ重なって largeer のようになってしまうからです。',
    [Q('e で終わる語に -r だけ付けるのは？'), ...W(['large', '＋', 'r.'], 52, 34, 16), ar(160, 94, 160, 110, C.main), ...W(['g|larger'], 114, 34, 18), lb(160, 160, '× largeer（e が二つ重なる）', 12, C.red, 'middle', true)],
    'e が二つ重ならないように', P),
  S('②〈子音字＋y〉は y を i に変えて -er / -est を付けます。easy → easier → easiest、happy → happier → happiest、busy → busier → busiest、early → earlier → earliest。',
    [...T([['原級', '比較級', '最上級'], ['easy', 'easier', 'easiest'], ['happy', 'happier', 'happiest'], ['busy', 'busier', 'busiest'], ['early', 'earlier', 'earliest']], 14, [90, 100, 100], M, 30, 13, [M, [C.green, FILL.green], [C.green, FILL.green], [C.green, FILL.green], [C.green, FILL.green]])],
    '子音字 ＋ y → y を i にして -er / -est', G),
  S('③〈短い母音＋子音字1つ〉で終わる1音節の語は、子音字を重ねます。big → bigger → biggest、hot → hotter → hottest、sad → sadder、thin → thinner、fat → fatter、red → redder。',
    [...T([['原級', '比較級', '最上級'], ['big', 'bigger', 'biggest'], ['hot', 'hotter', 'hottest'], ['sad', 'sadder', 'saddest'], ['thin', 'thinner', 'thinnest']], 14, [90, 100, 100], M, 30, 13, [M, [C.purple, FILL.purple], [C.purple, FILL.purple], [C.purple, FILL.purple], [C.purple, FILL.purple]])],
    '短い母音 ＋ 子音字1つ → 子音字を重ねる', P),
  S('❓なぜ子音字を重ねるのでしょう。→ 短い母音の音を守るためです。bigger を biger と書くと、「バイガー」のように読めてしまいます。子音字を重ねると、短い「ビ」の音のままだと分かります。',
    [Q('子音字を重ねるのは？'), ...W(['r|biger'], 52, 34, 18), lb(160, 98, '「バイガー」と読めてしまう', 12, C.red, 'middle', true), ar(160, 108, 160, 122, C.main), ...W(['g|bigger'], 126, 34, 18)],
    '短い母音の音を守る', P),
  S('重ねない語もあります。母音字が二つ並ぶ語は重ねません。clean → cleaner、cheap → cheaper、great → greater、cool → cooler。new → newer、slow → slower も重ねません。',
    [...T([['原級', '比較級', '最上級'], ['clean', 'cleaner', 'cleanest'], ['cheap', 'cheaper', 'cheapest'], ['great', 'greater', 'greatest'], ['cool', 'cooler', 'coolest']], 12, [90, 100, 100], M, 28, 13, [M, [C.gray, FILL.gray], [C.gray, FILL.gray], [C.gray, FILL.gray], [C.gray, FILL.gray]]), lb(160, 165, '母音字が二つ並ぶ → 重ねない', 12, C.blue, 'middle', true)],
    '母音字が二つ並ぶ語は重ねない', M),
  S('子音字が二つ以上で終わる語も重ねません。long → longer（ng で終わる）、strong → stronger、fast → faster（st で終わる）、young → younger、short → shorter、old → older。',
    [...T([['原級', '比較級', '最上級'], ['long', 'longer', 'longest'], ['fast', 'faster', 'fastest'], ['short', 'shorter', 'shortest'], ['old', 'older', 'oldest']], 12, [90, 100, 100], M, 28, 13, [M, [C.gray, FILL.gray], [C.gray, FILL.gray], [C.gray, FILL.gray], [C.gray, FILL.gray]]), lb(160, 165, '子音字が二つ以上で終わる → 重ねない', 12, C.blue, 'middle', true)],
    '子音字が二つ以上で終わる語は重ねない', M),
  S('見分ける順番をまとめます。まず e で終わるか。次に〈子音字＋y〉か。最後に〈短い母音＋子音字1つ〉か。どれでもなければ、そのまま -er / -est を付けます。',
    [...F([['e で\n終わる？', B], ['子音字＋\ny？', G], ['短母音＋\n子音字1つ？', P]], 22, 56, 11), lb(160, 98, 'はい → -r / -st', 12, C.blue, 'middle', true), lb(160, 120, 'はい → y を i にして -er / -est', 12, C.green, 'middle', true), lb(160, 142, 'はい → 子音字を重ねて -er / -est', 12, C.purple, 'middle', true)],
    '3つに当てはまらなければ そのまま -er / -est', M),
  S('最上級でも同じ規則です。比較級で子音字を重ねた語は、最上級でも重ねます。the biggest、the hottest、the saddest。hotest・biger・happyer は入試の誤答の定番です。',
    [...W(['g|the biggest', 'g|the hottest', 'g|the saddest'], 28, 34, 13), lb(160, 76, '最上級でも 重ねる', 12, C.green, 'middle', true), ...W(['r|hotest', 'r|biger', 'r|happyer'], 104, 34, 15), lb(160, 150, '× 入試の誤答の定番', 12, C.red, 'middle', true)],
    '口に出して確かめる習慣を', R),
  S('まとめです。e で終わる→-r / -st。子音字＋y→i にして -er / -est。短い母音＋子音字1つ→子音字を重ねる。それ以外はそのまま -er / -est です。',
    [...ST([['e で終わる → larger / largest', B], ['子音字 ＋ y → easier / easiest', G], ['短母音 ＋ 子音字1つ → bigger / biggest', P]], 14, 44, 10, 13)],
    '3つの型を口に出して確かめる', M),
], '比較級・最上級のつづりの変化');

// ── more / most 型の代表語（s244・節0）──
figs['xf_eigo_s244'] = show([
  S('important、interesting、difficult、expensive などは、すべて more を付けて比べます。共通しているのは語が長いことです。よく出る語をまとまりで覚えてしまえば、「-er か more か」と迷う時間がなくなります。',
    [...W(['important', 'interesting', 'difficult'], 22, 34, 13), ...W(['expensive', 'beautiful', 'popular'], 66, 34, 13), ar(160, 108, 160, 124, C.main), bx(40, 128, 240, 36, 'more ＋ 原級（もとの形）', C.green, FILL.green, 15)],
    '長い語は more を付けて比べる', G),
  S('3音節以上の形容詞（けいようし）の代表です。beautiful（美しい）、interesting（おもしろい）、difficult（難しい）、important（大切な）、expensive（高価な）、exciting（わくわくする）、wonderful（すばらしい）、dangerous（危険な）、delicious（おいしい）、popular（人気のある）、comfortable（快適な）。',
    [bx(10, 12, 300, 56, 'beautiful ・ interesting ・ difficult\nimportant ・ expensive ・ exciting', C.green, FILL.green, 13), bx(10, 76, 300, 56, 'wonderful ・ dangerous ・ delicious\npopular ・ comfortable', C.green, FILL.green, 13), lb(160, 152, '3音節以上 ＝ more / most 型', 13, C.green, 'middle', true)],
    '3音節以上 → more / most', G),
  S('2音節でも more を使う語があります。famous（有名な）、useful（役に立つ）、careful（注意深い）、helpful（助けになる）、boring（退屈な）、tired（疲れた）、active（活発な）、common（共通の）、crowded（混雑した）。これもそのまま覚えます。',
    [bx(10, 12, 300, 56, 'famous ・ useful ・ careful\nhelpful ・ boring', C.blue, FILL.blue, 13), bx(10, 76, 300, 56, 'tired ・ active ・ common\ncrowded', C.blue, FILL.blue, 13), lb(160, 152, '2音節でも more を使う語', 13, C.blue, 'middle', true)],
    '2音節の more 型はまとめて覚える', B),
  S('❓どちらの型かは、何で決まるのでしょう。→ 語の意味ではなく、音節（おんせつ）の数で決まります。short と long はどちらも1音節なので -er 型です。beautiful は3音節なので more 型です。',
    [Qq('-er か more かは何で決まる？'), ...T([['語', '音節', '型'], ['short', '1つ', 'shorter'], ['long', '1つ', 'longer'], ['famous', '2つ', 'more famous'], ['beautiful', '3つ', 'more beautiful']], 48, [100, 70, 130], M, 24, 12, [M, [C.blue, FILL.blue], [C.blue, FILL.blue], [C.green, FILL.green], [C.green, FILL.green]])],
    '意味ではなく 音節の数', P),
  S('例文で確かめます。This flower is more beautiful than that one.（この花はあの花より美しい）。Health is more important than money.（健康はお金より大切だ）。形容詞の形は、そのまま原級です。',
    [...W(['This flower is', 'g|more', 'beautiful', 'than that one.'], 24, 34, 12), lb(160, 70, 'more ＋ 原級のまま（beautifuler ではない）', 12, C.green, 'middle', true), ...W(['Health is', 'g|more', 'important', 'than money.'], 96, 34, 12), lb(160, 142, 'Science is more interesting than math.', 12, C.gray, 'middle')],
    'more の後ろは 原級のまま', G),
  S('副詞（ふくし）も同じです。-ly で終わる副詞は more / most 型です。Please speak more slowly.（もっとゆっくり話してください）。She writes more carefully than I do.',
    [...W(['Please speak', 'g|more', 'slowly.'], 28, 34, 15), lb(160, 74, 'slowly ＝ 副詞 → more slowly', 12, C.green, 'middle', true), ...W(['She writes', 'g|more', 'carefully', 'than I do.'], 104, 34, 13), lb(160, 150, 'more carefully ＝ もっと注意深く', 12, C.gray, 'middle')],
    '-ly の副詞も more / most 型', G),
  S('次に最上級（さいじょうきゅう）です。とくに多い誤りが the の落としです。This is the most expensive bag in the shop. が正しく、This is most expensive bag in the shop. はまちがいです。',
    [...W(['This is', 'g|the most', 'expensive', 'bag in the shop.'], 24, 34, 12), lb(160, 70, '○ the がある', 12, C.green, 'middle', true), ...W(['This is', 'r|most', 'expensive', 'bag in the shop.'], 96, 34, 12), lb(160, 142, '× the が落ちている', 12, C.red, 'middle', true)],
    'the most の the を落とさない', R),
  S('❓名詞がないときは、the はいらないのでしょうか。→ 名詞がなくても the は必要です。This question is the most difficult of the five.（この問題は5問の中でいちばん難しい）。That movie was the most exciting of all.',
    [Qq('名詞がなくても the は必要？'), ...W(['This question is', 'g|the most', 'difficult', 'of the five.'], 52, 34, 11), lb(160, 98, '名詞がなくても the', 13, C.green, 'middle', true), ...W(['That movie was', 'g|the most', 'exciting', 'of all.'], 114, 34, 11)],
    '最上級には いつも the', G),
  S('比較級では、than を忘れないことが大切です。This book is more interesting than that one. が正しく、than を that と書いた more interesting that one. はまちがいです。同じ名詞をくり返すときは one（単数）か ones（複数）で受けます。',
    [...W(['This book is more interesting', 'g|than', 'that one.'], 26, 34, 11), ...W(['This book is more interesting', 'r|that', 'one.'], 74, 34, 11), lb(160, 118, '× than を that と書かない', 12, C.red, 'middle', true), lb(160, 144, 'one ＝ 単数の名詞／ones ＝ 複数の名詞', 12, C.gray, 'middle')],
    'than ＋ one / ones', M),
  S('まとめです。the・most・原級の三つがそろって初めて最上級になります。どれか一つでも欠けるとまちがいです。',
    [...F([['the', B], ['most', G], ['beautiful', P]], 30, 56, 18), lb(160, 110, 'the ＋ most ＋ 原級', 14, C.ink, 'middle', true), lb(160, 138, '三つそろって 最上級', 13, C.green, 'middle', true)],
    '三つのうち 一つでも欠けるとまちがい', M),
], 'more / most 型の代表語');

// ── 比較級・最上級を使う基本文の組み立て（s245・節0）──
figs['xf_eigo_s245'] = show([
  S('比べる文には、形容詞（けいようし）を使う形と、副詞（ふくし）を使う形があります。形容詞の比較級（ひかくきゅう）は〈A＋be動詞＋比較級＋than＋B〉です。Ken is taller than Tom.（ケンはトムより背が高い）。',
    [...W(['Ken', 'is', 'g|taller', 'than', 'Tom.'], 26, 34, 15), lb(160, 72, 'A ＋ be動詞 ＋ 比較級 ＋ than ＋ B', 12, C.blue, 'middle', true), lb(160, 104, 'This bag is heavier than that one.', 12, C.gray, 'middle'), lb(160, 126, 'Today is colder than yesterday.', 12, C.gray, 'middle')],
    '形容詞の比較級は be動詞を使う', B),
  S('副詞の比較級は〈A＋一般動詞＋比較級＋than＋B〉です。Ken runs faster than Tom.（ケンはトムより速く走る）。She gets up earlier than her brother. He speaks English better than I do.',
    [...W(['Ken', 'runs', 'g|faster', 'than', 'Tom.'], 26, 34, 15), lb(160, 72, 'A ＋ 一般動詞 ＋ 比較級 ＋ than ＋ B', 12, C.green, 'middle', true), lb(160, 104, 'She gets up earlier than her brother.', 12, C.gray, 'middle'), lb(160, 126, 'He speaks English better than I do.', 12, C.gray, 'middle')],
    '副詞の比較級は 一般動詞を使う', G),
  S('❓Ken is run faster than Tom. がまちがいなのは、なぜでしょう。→ is と run という動詞が二つ並んでしまうからです。文の動詞は一つなので、be動詞か一般動詞のどちらか一方を選びます。',
    [Q('be動詞と一般動詞を混ぜると？'), ...W(['Ken', 'r|is', 'r|run', 'faster than Tom.'], 52, 34, 13), lb(160, 98, '× 動詞が2つ', 12, C.red, 'middle', true), ...W(['Ken', 'g|runs', 'faster than Tom.'], 118, 34, 13), lb(160, 164, '動詞は1つ', 12, C.green, 'middle', true)],
    'まず be動詞か一般動詞かを決める', P),
  S('最上級（さいじょうきゅう）の形です。形容詞は〈A＋be動詞＋the＋最上級＋in / of ~〉、Ken is the tallest in his class.。副詞は〈A＋一般動詞＋(the)＋最上級＋in / of ~〉、Ken runs (the) fastest of the three. 副詞の the は省略できます。',
    [...W(['Ken is', 'g|the tallest', 'in his class.'], 24, 34, 13), ...W(['Ken runs', 'g|(the) fastest', 'of the three.'], 80, 34, 13), lb(160, 138, '副詞の最上級では the を省略できる', 12, C.gray, 'middle')],
    '形容詞 → the 必須／副詞 → the 省略可', G),
  S('最上級の範囲は、in か of で表します。in は場所や集団（in his class・in Japan）、of は数や仲間（of the five・of all）です。',
    [...LR('in ＋ 場所・集団\nin his class\nin Japan', 'of ＋ 数・仲間\nof the five\nof all', 14, 100, B, G, 13), lb(160, 136, 'Ken is the tallest in his class.', 12, C.blue, 'middle', true), lb(160, 158, 'This is the biggest dog of the five.', 12, C.green, 'middle', true)],
    'in ＝ 場所・集団／of ＝ 数・仲間', B),
  S('比べる数で形が決まります。2つを比べるなら比較級、3つ以上なら最上級です。Which is bigger, Japan or Australia?（2つ）。Which is the biggest of the three?（3つ）。She plays the piano best of the three.',
    [bx(10, 14, 147, 70, '2つ（2人）\n比較級\nbigger', C.blue, FILL.blue, 14), bx(163, 14, 147, 70, '3つ以上\n最上級\nthe biggest', C.green, FILL.green, 14), lb(84, 102, 'Japan or Australia?', 12, C.blue, 'middle', true), lb(237, 102, 'of the three', 12, C.green, 'middle', true)],
    '2つ → 比較級、3つ以上 → 最上級', M),
  S('❓of the three とあるのに better と書くと、どうなるのでしょう。→ 「3人の中で」という範囲が見えているのに、2人を比べる比較級を使うことになり、まちがいです。範囲を示す語句を見て、比較級か最上級かを決めます。',
    [Q('範囲の語句と形が合わないと？'), ...W(['She plays', 'r|better', 'of the three.'], 52, 34, 14), lb(160, 98, '× 3人 なのに 比較級', 12, C.red, 'middle', true), ...W(['She plays', 'g|best', 'of the three.'], 118, 34, 14), lb(160, 164, '○ 3人 → 最上級', 12, C.green, 'middle', true)],
    '範囲の語句を見て 形を決める', P),
  S('比べる相手は、同じ種類にそろえます。名詞のくり返しは one / ones（This bag is bigger than that one.）、動詞のくり返しは do / does / did（He runs faster than I do.）、持ち物は mine / yours（My bag is bigger than yours.）で受けます。',
    [...T([['くり返し', '受ける語', '例'], ['名詞', 'one / ones', 'than that one'], ['動詞', 'do / does / did', 'than I do'], ['持ち物', 'mine / yours', 'than yours']], 14, [70, 100, 130], M, 30, 12, [M, [C.blue, FILL.blue], [C.green, FILL.green], [C.purple, FILL.purple]]), lb(160, 148, '× My bag is bigger than you.（かばんと人を比べている）', 11, C.red, 'middle', true)],
    '比べる二つを 同じ種類にそろえる', M),
  S('まとめです。まず主語と動詞（be動詞か一般動詞か）を決めてから、比較級・最上級を入れます。2つなら比較級、3つ以上なら最上級、範囲は in か of で表します。',
    [...ST([['形容詞 → be動詞 ／ 副詞 → 一般動詞', B], ['2つ → 比較級 ／ 3つ以上 → 最上級', G], ['範囲 → in（場所）／ of（数）', P]], 14, 44, 10, 13)],
    '動詞を決める → 比べる数を数える', M),
], '比較級・最上級の基本文');

export const XF_CEF_FIGURES: Record<string, DiagramFigure> = figs;

export const XF_CEF_SECTIONS: Record<string, string> = {
  'eigo_s224#0': 'xf_eigo_s224',
};
