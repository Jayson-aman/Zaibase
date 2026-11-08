// 月例実力テスト 2026年3月号（英語）の動く図解。キーは問題ID。
// 中学受験 c01〜c10 のうち 8問、高校受験 k01〜k10 のうち 7問（計15問）。
// 流れは「文の形を見る → ルール → 当てはめ → 答え → 確かめ（→ よくあるまちがい）」。
// 座標は 320×240。各スライドは画面をまっさらにして（fresh）図（上）＋下の帯を描き直す。
import type { DiagramElement, Figure } from './figures';
import { C, FILL, bx, lb, ar, ci, show, fresh } from './diagram-kit';

type Col = 'main' | 'blue' | 'green' | 'red' | 'purple' | 'gray';
const FL: Record<Col, string> = { main: FILL.warm, blue: FILL.blue, green: FILL.green, red: FILL.red, purple: FILL.purple, gray: FILL.gray };

const b = (x: number, y: number, w: number, h: number, text: string, col: Col = 'main', size = 12): DiagramElement => bx(x, y, w, h, text, C[col], FL[col], size);
const a = (x1: number, y1: number, x2: number, y2: number, col: Col = 'main'): DiagramElement => ar(x1, y1, x2, y2, C[col]);
const t = (x: number, y: number, text: string, col: Col | 'ink' = 'ink', size = 12, anchor: 'start' | 'middle' | 'end' = 'middle', bold = false): DiagramElement =>
  lb(x, y, text, size, col === 'ink' ? C.ink : C[col], anchor, bold);
const o = (cx: number, cy: number, r: number, text: string, col: Col = 'blue', size = 12): DiagramElement => ci(cx, cy, r, text, C[col], FL[col], size);

/** 文字の横幅の見積もり（日本語は1文字＝size、英数字は約0.58×size） */
const est = (s: string, size: number): number => [...s].reduce((n, ch) => n + (ch.charCodeAt(0) > 255 ? size : size * 0.58), 0);

/** 単語のタイルを1行に並べる（横に収まるよう文字を小さくする）。labels は各タイルの下にそえる短い名前。 */
const tl = (y: number, words: string[], cols: Col[], labels: string[] = [], size = 13, h = 28): DiagramElement[] => {
  const gap = 5;
  let s = size;
  const widths = (): number[] => words.map((w) => Math.max(40, est(w, s) + 14));
  let ws = widths();
  while (ws.reduce((p, q) => p + q, 0) + gap * (words.length - 1) > 304 && s > 9) {
    s -= 1;
    ws = widths();
  }
  const total = ws.reduce((p, q) => p + q, 0) + gap * (words.length - 1);
  let x = (320 - total) / 2;
  const out: DiagramElement[] = [];
  words.forEach((w, i) => {
    out.push(b(x, y, ws[i], h, w, cols[i] ?? 'gray', s));
    if (labels[i]) out.push(t(x + ws[i] / 2, y + h + 14, labels[i], cols[i] ?? 'gray', 10));
    x += ws[i] + gap;
  });
  return out;
};

/** 下の帯：大きな一言（と、その下の小さな補足） */
const bt = (main: string, sub?: string, col: Col = 'green', size = 14): DiagramElement[] => [
  b(14, 164, 292, 34, main, col, size),
  ...(sub ? [t(160, 216, sub, 'gray', 11)] : []),
];
/** 変身：左の箱 → 右の箱 */
const mv = (y: number, from: string, to: string, col: Col = 'main', h = 26, size = 13): DiagramElement[] => [
  b(16, y, 122, h, from, 'gray', size),
  a(140, y + h / 2, 178, y + h / 2, col),
  b(180, y, 124, h, to, col, size),
];
/** 確かめ：まちがいの選択肢（赤）と、正しい文（緑） */
const chk = (bad: string[], good: string): DiagramElement[] => [
  ...bad.map((s, i) => t(160, 24 + i * 30, s, 'red', 11)),
  t(160, 24 + bad.length * 30 + 16, good, 'green', 13, 'middle', true),
];
/** 1枚のスライド */
const sl = (note: string, ...els: (DiagramElement | DiagramElement[])[]) => ({ note, add: fresh(...els.flat()) });

// ═══════════════ 中学受験 ═══════════════

// c01 Ken and Mike ＿＿ good friends.（are）
const c01 = show([
  sl(
    '【文の形を見る】「Ken and Mike ＿＿ good friends.」は「ケンとマイクはよい友だちです」の文です。「〜は…です」の文には、be動詞（am・is・are）が入ります。まず、主語（しゅご）を確かめましょう。',
    tl(34, ['Ken and Mike', '＿＿', 'good friends'], ['blue', 'red', 'green'], ['主語', 'be動詞', 'よい友だち']),
    bt('空所には be動詞が入る', '「〜は…です」の文だから', 'gray'),
  ),
  sl(
    '【ルール】be動詞は主語によって形が変わります。❓なぜ？→英語は、主語が1人か何人かを be動詞の形でも知らせるからです。I は am、he・she・it や1人・1つは is、you や2人以上（複数）は are です。',
    b(14, 18, 292, 30, 'I → am', 'blue', 14),
    b(14, 56, 292, 30, 'he・she・it・1人・1つ → is', 'green', 13),
    b(14, 94, 292, 30, 'you・2人以上（複数）→ are', 'red', 13),
    bt('主語の人数で形が決まる', undefined, 'gray'),
  ),
  sl(
    '【当てはめ①】❓主語は何人？→Ken は1人、Mike も1人です。and でつなぐと、あわせて2人になります。2人以上は「複数」です。',
    o(100, 56, 22, 'Ken', 'blue', 13),
    t(160, 62, '＋', 'ink', 20),
    o(220, 56, 22, 'Mike', 'green', 13),
    t(160, 118, '1人 ＋ 1人 ＝ 2人（複数）', 'red', 14, 'middle', true),
    bt('and でつなぐと 複数', undefined, 'red'),
  ),
  sl(
    '【当てはめ②】❓複数の主語は、どう言いかえる？→they（彼ら）と言いかえられます。Ken and Mike ＝ They です。言いかえると、be動詞が選びやすくなります。',
    b(30, 36, 120, 34, 'Ken and Mike', 'blue', 13),
    a(152, 53, 176, 53),
    b(178, 36, 100, 34, 'They', 'green', 15),
    t(160, 108, '2人以上は they で言いかえる', 'ink', 12),
    bt('Ken and Mike ＝ They', undefined, 'green'),
  ),
  sl(
    '【当てはめ③】❓they のときの be動詞は？→are です。They are good friends. だから、Ken and Mike のあとも are になります。',
    tl(40, ['They', 'are', 'good friends'], ['green', 'red', 'green'], ['複数', '複数用', '']),
    bt('複数の主語 → are', undefined, 'red'),
  ),
  sl(
    '【答え】③ are。Ken and Mike are good friends.（ケンとマイクはよい友だちです。）',
    tl(40, ['Ken and Mike', 'are', 'good friends'], ['blue', 'green', 'green'], ['主語（複数）', '答え', '']),
    bt('③ are', 'Ken and Mike are good friends.', 'green'),
  ),
  sl(
    '【確かめ】is にすると「Ken and Mike is」となり、1人用の形が2人の主語に付いてしまいます。am は I だけ、be は原形なので、ここでは使えません。are なら、2人の主語にぴったり合います。',
    chk(['① Ken and Mike am ...（am は I だけ）', '② Ken and Mike is ...（is は1人用）', '④ Ken and Mike be ...（原形は使えない）'], '③ Ken and Mike are ...  ○'),
    bt('人数に合うのは are だけ', undefined, 'green'),
  ),
  sl(
    '【よくあるまちがい】Mike だけを見て、1人だと思って is にしてしまうことです。and でつないだ主語は、全部あわせた人数で数えます。',
    o(110, 60, 20, 'Ken', 'blue', 12),
    o(160, 60, 20, 'and', 'gray', 12),
    o(210, 60, 20, 'Mike', 'green', 12),
    t(160, 116, '全員で何人？ → 2人 → are', 'red', 13, 'middle', true),
    bt('「そのすぐ前」ではなく「全部」', undefined, 'red'),
  ),
], 'be動詞は主語の人数で決める');

// c02 My father ＿＿ to work by bike every day.（goes）
const c02 = show([
  sl(
    '【文の形を見る】「My father ＿＿ to work by bike every day.」は「私の父は毎日、自転車で仕事に行きます」の文です。空所には、行く（go）という動詞が入ります。形が問題です。',
    tl(34, ['My father', '＿＿＿', 'to work', 'by bike'], ['blue', 'red', 'green', 'gray'], ['主語', '動詞', '', '']),
    t(160, 106, 'every day（毎日）がある', 'ink', 12),
    bt('空所は 動詞の形を選ぶ', undefined, 'gray'),
  ),
  sl(
    '【時を見る】❓every day は何を表す？→毎日している習慣です。ふだんのことは現在形で表します。「いま・昨日」の話ではありません。',
    t(160, 30, '毎日（every day）', 'blue', 14, 'middle', true),
    b(30, 56, 80, 30, '月', 'gray', 13),
    b(120, 56, 80, 30, '火', 'gray', 13),
    b(210, 56, 80, 30, '水…', 'gray', 13),
    t(160, 118, 'いつもの習慣 → 現在形', 'red', 13, 'middle', true),
    bt('習慣は 現在形', undefined, 'blue'),
  ),
  sl(
    '【主語を見る】❓My father はだれ？→1人の男の人で、he（彼）と言いかえられます。自分（I）と相手（you）以外の1人を「三人称（さんにんしょう）・単数」といいます。',
    b(30, 40, 110, 34, 'My father', 'blue', 14),
    a(142, 57, 176, 57),
    b(178, 40, 90, 34, 'he', 'green', 15),
    t(160, 108, '1人（自分・相手以外）', 'ink', 12),
    bt('三人称・単数', undefined, 'blue'),
  ),
  sl(
    '【ルール】❓なぜ s をつける？→主語が「自分と相手以外の1人」であることを、動詞の形でも知らせるためです。I・you・複数なら go のまま。he・she・it・1人なら s か es がつきます。これを三単現（さんたんげん）の s といいます。',
    b(14, 20, 292, 34, 'I・you・複数 → go（そのまま）', 'gray', 13),
    b(14, 66, 292, 34, 'he・she・it・1人 → goes（es がつく）', 'red', 13),
    bt('三単現の s', '主語が1人 ＋ 現在形 → 動詞に s・es', 'red'),
  ),
  sl(
    '【つけかた】❓go は s？ es？→o で終わるので es です。s・x・ch・sh で終わる語も es。子音字＋y は y を i に変えて es をつけます。',
    ...mv(16, 'go', 'goes', 'red'),
    ...mv(48, 'watch', 'watches', 'red'),
    ...mv(80, 'study', 'studies', 'red'),
    ...mv(112, 'have', 'has', 'red'),
    bt('go → goes', undefined, 'red'),
  ),
  sl(
    '【答え】② goes。My father goes to work by bike every day.（私の父は毎日、自転車で仕事に行きます。）',
    tl(40, ['My father', 'goes', 'to work'], ['blue', 'red', 'green'], ['he と同じ', '三単現', '']),
    bt('② goes', 'My father goes to work by bike every day.', 'green'),
  ),
  sl(
    '【確かめ】go は s が足りません。going は ing だけで、be動詞が無いので動詞として足りません。is go は be動詞と一般動詞をいっしょに使っていて、英語ではまちがいです。',
    chk(['① go（主語が1人なのに s が無い）', '③ going（be動詞が無い）', '④ is go（be動詞と動詞は並べない）'], '② goes  ○'),
    bt('主語が1人 → goes', undefined, 'green'),
  ),
], '1人の主語＋現在形 → 動詞に s・es');

// c04 ＿＿ do you live? — I live in Osaka.（Where）
const c04 = show([
  sl(
    '【文の形を見る】A がたずね、B が答える会話です。A の質問の最初が空所で、あとに do you live（あなたは住んでいますか）が続きます。空所には、たずねる言葉（疑問詞〈ぎもんし〉）が入ります。',
    b(14, 24, 292, 34, 'A: ＿＿＿ do you live?', 'blue', 14),
    b(14, 72, 292, 34, 'B: I live in Osaka.', 'green', 14),
    bt('まず 答え（B）を見る', undefined, 'gray'),
  ),
  sl(
    '【ルール】❓疑問詞はどう選ぶ？→たずねたい内容で選びます。Who は人、What はもの、When は時、Where は場所です。',
    b(30, 12, 260, 28, 'Who　→　だれ（人）', 'blue', 13),
    b(30, 46, 260, 28, 'What　→　何（もの）', 'green', 13),
    b(30, 80, 260, 28, 'When　→　いつ（時）', 'purple', 13),
    b(30, 114, 260, 28, 'Where　→　どこ（場所）', 'red', 13),
    bt('たずねたい内容で選ぶ', undefined, 'gray'),
  ),
  sl(
    '【当てはめ①】❓B の答えは何を言っている？→「in Osaka（大阪に）」です。in のあとに場所の名前が来ているので、「場所」の答えです。',
    tl(36, ['I live', 'in Osaka'], ['green', 'purple'], ['住んでいる', '場所']),
    bt('答えは「場所」', undefined, 'purple'),
  ),
  sl(
    '【当てはめ②】❓答えが場所なら？→場所をたずねる疑問詞は Where です。ほかの疑問詞だと、答えのかたちが合いません。',
    ...mv(14, 'Who ?', 'Ken.（人の名前）', 'gray', 24),
    ...mv(44, 'What ?', 'A cat.（もの）', 'gray', 24),
    ...mv(74, 'When ?', 'At six.（時）', 'gray', 24),
    ...mv(104, 'Where ?', 'Osaka（場所）', 'red', 24),
    bt('場所 → Where', undefined, 'red'),
  ),
  sl(
    '【答え】④ Where。Where do you live? — I live in Osaka.（あなたはどこに住んでいますか。—大阪に住んでいます。）',
    tl(36, ['Where', 'do', 'you', 'live'], ['red', 'purple', 'blue', 'green'], ['どこ', 'do', '主語', '動詞']),
    bt('④ Where', 'Where do you live?', 'green'),
  ),
  sl(
    '【確かめ】「どこに住んでいますか」「大阪に住んでいます」と、問いと答えがつながります。Who・What・When だと、「in Osaka」という答えと合いません。',
    chk(['① Who do you live?（人はたずねていない）', '② What do you live?（ものはたずねていない）', '③ When do you live?（時はたずねていない）'], '④ Where do you live?  ○'),
    bt('問いと答えがつながる', undefined, 'green'),
  ),
  sl(
    '【よくあるまちがい】When（いつ）と Where（どこ）は、どちらも w で始まって形がにています。答えが「時」なら When、「場所」なら Where と、答えのほうから決めると、まちがえません。',
    b(20, 24, 130, 40, 'When\nいつ（時）', 'purple', 13),
    b(170, 24, 130, 40, 'Where\nどこ（場所）', 'red', 13),
    t(160, 100, '答えの種類を見る', 'ink', 13, 'middle', true),
    bt('答えを先に見る', undefined, 'gray'),
  ),
], '疑問詞は答えの種類で選ぶ');

// c05 What did you do last Sunday?
const c05 = show([
  sl(
    '【文の形を見る】5つの語（句）をならべかえて、「あなたは先週の日曜日に何をしましたか」という文にします。「何を」と「しましたか（過去）」がヒントです。',
    tl(30, ['did', 'you', 'What', 'last Sunday', 'do'], ['purple', 'blue', 'red', 'gray', 'green']),
    t(160, 100, '先週の日曜日に 何を しましたか', 'ink', 12),
    bt('「何を」＋「過去の疑問」', undefined, 'gray'),
  ),
  sl(
    '【ルール①】❓まず何を置く？→たずねる言葉（疑問詞）の What を、文のいちばん前に置きます。疑問詞はいつも文の先頭です。',
    tl(40, ['What'], ['red'], ['文の先頭']),
    bt('疑問詞は いちばん前', undefined, 'red'),
  ),
  sl(
    '【ルール②】❓過去の疑問文の形は？→「did ＋ 主語 ＋ 動詞の原形」です。What のあとに did、主語 you、動詞 do を続けます。',
    tl(40, ['What', 'did', 'you', 'do'], ['red', 'purple', 'blue', 'green'], ['何を', '過去の疑問', '主語', '原形']),
    bt('did ＋ 主語 ＋ 原形', undefined, 'purple'),
  ),
  sl(
    '【なぜ do？】❓どうして did you did ではないの？→did の中にすでに「過去」の意味が入っています。動詞まで過去形にすると、過去を2回言うことになるので、動詞は原形（do）にもどします。',
    t(160, 34, '✕ What did you did ...', 'red', 14, 'middle', true),
    t(160, 62, '過去を2回言っている', 'red', 11),
    t(160, 104, '○ What did you do ...', 'green', 14, 'middle', true),
    t(160, 132, 'did が過去を引き受けるので、動詞は原形', 'green', 11),
    bt('did があると 動詞は原形', undefined, 'purple'),
  ),
  sl(
    '【ルール③】❓last Sunday（先週の日曜日）は？→いつのことかを表す言葉は、文の終わりに置きます。',
    tl(40, ['What', 'did', 'you', 'do', 'last Sunday'], ['red', 'purple', 'blue', 'green', 'gray'], ['', '', '', '', '時']),
    bt('時を表す語は 文末', undefined, 'gray'),
  ),
  sl(
    '【答え】What did you do last Sunday?（あなたは先週の日曜日に何をしましたか。）',
    tl(40, ['What', 'did', 'you', 'do', 'last Sunday'], ['red', 'purple', 'blue', 'green', 'gray']),
    bt('What did you do last Sunday?', undefined, 'green', 13),
  ),
  sl(
    '【確かめ】①5つの語（句）をすべて使った。②文の最初の What は大文字、文末は「？」。③did のあとの do は原形。この3つがそろえば正解です。答えは「I played soccer.」のように過去形で答えます。',
    t(160, 34, '✓ 5つの語（句）をすべて使った', 'green', 13, 'middle', true),
    t(160, 70, '✓ 文頭は大文字、文末は「？」', 'green', 13, 'middle', true),
    t(160, 106, '✓ did のあとは原形 do', 'green', 13, 'middle', true),
    bt('3つとも ○', undefined, 'green'),
  ),
], '疑問詞 ＋ did ＋ 主語 ＋ 動詞の原形');

// c06 She ＿＿ a book in her room.（is reading）
const c06 = show([
  sl(
    '【文の形を見る】A が「What is Aya doing now?（アヤはいま何をしていますか）」とたずね、B が「She ＿＿ a book in her room.」と答えます。空所には、read の形が入ります。',
    b(14, 20, 292, 34, 'A: What is Aya doing now?', 'blue', 13),
    b(14, 66, 292, 34, 'B: She ＿＿＿ a book in her room.', 'green', 13),
    bt('質問の形に注目', undefined, 'gray'),
  ),
  sl(
    '【時を見る】❓now は何を表す？→「いま」です。いま、その場で進んでいる動作を聞いています。ふだんの習慣や過去の話ではありません。',
    a(30, 80, 292, 80, 'gray'),
    o(160, 80, 8, '', 'red'),
    t(160, 56, 'now（いま）', 'red', 14, 'middle', true),
    t(60, 108, '昔', 'gray', 12),
    t(260, 108, 'これから', 'gray', 12),
    bt('いま している最中', undefined, 'red'),
  ),
  sl(
    '【ルール】❓「している最中」は？→現在進行形「be動詞 ＋ 動詞の ing」で表します。ing が「進んでいる最中」を表し、be動詞が「いまの話」と主語の数を表します。',
    tl(40, ['is', 'reading'], ['red', 'green'], ['be動詞', '動詞＋ing']),
    bt('be動詞 ＋ 〜ing ＝「〜している」', undefined, 'red', 13),
  ),
  sl(
    '【be動詞を決める】❓is？ are？→主語 She は1人なので is です。I は am、he・she・it・1人は is、you・複数は are。',
    b(30, 22, 260, 28, 'I → am', 'blue', 13),
    b(30, 58, 260, 28, 'She（1人）→ is', 'red', 13),
    b(30, 94, 260, 28, 'you・複数 → are', 'green', 13),
    bt('She → is', undefined, 'red'),
  ),
  sl(
    '【当てはめ】is のあとに、read に ing をつけた reading を置きます。She is reading a book in her room.',
    tl(40, ['She', 'is', 'reading', 'a book'], ['blue', 'red', 'green', 'gray'], ['1人', 'be動詞', 'ing形', '']),
    bt('She is reading', undefined, 'green'),
  ),
  sl(
    '【答え】② is reading。She is reading a book in her room.（彼女は自分の部屋で本を読んでいます。）',
    tl(40, ['She', 'is reading', 'a book'], ['blue', 'green', 'gray'], ['主語', '答え', '']),
    bt('② is reading', 'いま読んでいる最中', 'green'),
  ),
  sl(
    '【確かめ】reads は「ふだん読む」習慣です。read は過去形で「読んだ」。was reading は「読んでいた」で過去の話です。now がある質問の答えには、is reading だけが合います。',
    chk(['① reads（ふだん読む＝習慣）', '③ read（読んだ＝過去）', '④ was reading（読んでいた＝過去）'], '② is reading（いま読んでいる）  ○'),
    bt('now → is reading', undefined, 'green'),
  ),
], 'be動詞 ＋ 動詞の ing ＝ いま している');

// c08 In my class, soccer is ＿＿ popular than baseball.（more）
const c08 = show([
  sl(
    '【文の形を見る】「In my class, soccer is ＿＿ popular than baseball.」は「私のクラスではサッカーは野球より人気があります」の文です。空所のあとに popular と than があります。',
    tl(40, ['soccer', 'is', '＿＿', 'popular', 'than', 'baseball'], ['blue', 'gray', 'red', 'green', 'purple', 'blue']),
    bt('than に注目', '「〜より」＝ 2つをくらべる', 'purple'),
  ),
  sl(
    '【ルール①】❓than があると？→2つをくらべる文なので、形容詞を比較級（ひかくきゅう）にします。「AはBより〜」の形です。',
    tl(40, ['A', 'is', '比較級', 'than', 'B'], ['blue', 'gray', 'red', 'purple', 'green'], ['', '', '〜より…', '', '']),
    bt('A is 比較級 than B', undefined, 'purple'),
  ),
  sl(
    '【ルール②】❓比較級の作り方は？→2通りです。短い語は er をつけ（tall → taller）、長い語は前に more を置きます（popular → more popular）。',
    ...mv(22, 'tall', 'taller', 'green'),
    ...mv(58, 'fast', 'faster', 'green'),
    ...mv(94, 'popular', 'more popular', 'red'),
    bt('短い語は er、長い語は more', undefined, 'red'),
  ),
  sl(
    '【なぜ more？】❓長い語に er をつけない理由は？→popularer のように言いにくくなるからです。音のかたまりが3つ以上の長い語は、前に more を置いて言いやすくします。popular は pop・u・lar の3つです。',
    o(90, 60, 24, 'pop', 'blue', 13),
    o(160, 60, 24, 'u', 'green', 13),
    o(230, 60, 24, 'lar', 'red', 13),
    t(160, 116, '3つのかたまり → 長い語', 'red', 13, 'middle', true),
    bt('3つ以上 → more をつける', undefined, 'red'),
  ),
  sl(
    '【当てはめ】popular を more popular にして、than baseball につなぎます。soccer is more popular than baseball.',
    tl(40, ['soccer', 'is', 'more popular', 'than', 'baseball'], ['blue', 'gray', 'red', 'purple', 'blue']),
    bt('more popular than ...', undefined, 'green'),
  ),
  sl(
    '【答え】① more。In my class, soccer is more popular than baseball.（私のクラスでは、サッカーは野球より人気があります。）',
    tl(40, ['soccer', 'is', 'more', 'popular', 'than'], ['blue', 'gray', 'green', 'red', 'purple'], ['', '', '答え', '', '']),
    bt('① more', undefined, 'green'),
  ),
  sl(
    '【確かめ】most は「いちばん」の最上級で、the がつきます。much は popular を強める語で、比較級の代わりになりません。as は as popular as の形のときに使います。',
    chk(['② most（いちばん＝最上級。the がつく）', '③ much（比較級の代わりにならない）', '④ as（as ... as の形で使う）'], '① more popular than ...  ○'),
    bt('than とセットは more', undefined, 'green'),
  ),
], '長い語の比較級は more ＋ 元の形');

// c09 When I called Yuki, she was taking a bath.
const c09 = show([
  sl(
    '【文の形を見る】英文を2つに分けて読みます。前半「When I called Yuki,」と後半「she was taking a bath.」です。コンマが区切りです。',
    b(14, 24, 292, 32, 'When I called Yuki,', 'blue', 14),
    b(14, 66, 292, 32, 'she was taking a bath.', 'green', 14),
    bt('コンマで前半と後半に分ける', undefined, 'gray'),
  ),
  sl(
    '【前半を読む】❓called の意味は？→call の過去形で「電話した」です。I が電話をかけた人で、Yuki が相手。When 〜は「〜したとき」です。',
    o(80, 60, 28, 'I', 'blue', 15),
    a(110, 60, 200, 60, 'blue'),
    o(240, 60, 28, 'Yuki', 'green', 13),
    t(160, 46, 'called（電話した）', 'blue', 12),
    t(160, 116, '私が ユキに 電話したとき', 'ink', 13, 'middle', true),
    bt('前半：私が電話したとき', undefined, 'blue'),
  ),
  sl(
    '【後半の主語】❓she はだれ？→前半に出てきた Yuki です。つまり、おふろに入っていたのはユキです。I と she は別の人です。',
    b(30, 36, 100, 34, 'she', 'green', 15),
    a(132, 53, 176, 53),
    b(178, 36, 100, 34, 'Yuki', 'green', 15),
    t(160, 108, 'I（私）ではない', 'red', 13, 'middle', true),
    bt('she ＝ ユキ', undefined, 'green'),
  ),
  sl(
    '【後半の動詞】❓was taking は？→「was ＋ ing」の過去進行形で、「過去のそのとき、している最中だった」を表します。入った瞬間ではなく、入っている最中です。',
    tl(40, ['was', 'taking'], ['red', 'green'], ['過去', 'ing']),
    t(160, 110, '「入っていた（最中）」', 'red', 14, 'middle', true),
    bt('was ＋ ing ＝ していた', undefined, 'red'),
  ),
  sl(
    '【時間の図】❓2つの動作の関係は？→「電話した」は一瞬の出来事、「おふろに入っていた」は続いている動作です。電話した瞬間は、入浴の最中のできごとです。',
    b(40, 60, 240, 26, 'おふろに入っていた（続いている）', 'green', 12),
    a(160, 40, 160, 58, 'blue'),
    t(160, 32, '電話した（一瞬）', 'blue', 12),
    bt('一瞬の出来事 ＋ 続いている動作', undefined, 'blue'),
  ),
  sl(
    '【答え】① 私がユキに電話したとき、彼女はおふろに入っていました。',
    b(14, 24, 292, 34, 'When I called Yuki,', 'blue', 13),
    b(14, 64, 292, 34, 'she was taking a bath.', 'green', 13),
    bt('① 私が電話したとき、彼女は入浴中', undefined, 'green', 12),
  ),
  sl(
    '【確かめ】②は電話をかけた人が逆です。③は「入りました」と動作が終わった意味になり、was taking の最中の意味が出ません。④は「入るところ」でこれから入る意味になり、ing と合いません。',
    chk(['② ユキが私に電話した（かけた人が逆）', '③ 入りました（最中の意味がない）', '④ 入るところでした（これからの意味）'], '① 電話したとき、入っていた  ○'),
    bt('was ＋ ing ＝ 最中', undefined, 'green'),
  ),
], 'When 〜（過去形）, 主語 was ＋ ing');

// c10 How long did you stay in Kyoto?
const c10 = show([
  sl(
    '【文の形を見る】6つの語（句）をならべかえて、「あなたは京都にどのくらいの間いましたか」という文にします。「どのくらい（の間）」と「いましたか（過去）」がヒントです。',
    tl(26, ['did', 'stay', 'How'], ['purple', 'green', 'red']),
    tl(76, ['in Kyoto', 'long', 'you'], ['gray', 'red', 'blue']),
    bt('「どのくらい」＋「過去の疑問」', undefined, 'gray'),
  ),
  sl(
    '【ルール①】❓How long の意味は？→How は「どれくらい」、long は「長く」。2語で1セットの疑問詞のかたまりで、期間をたずねます。',
    tl(36, ['How', 'long'], ['red', 'red'], ['どれくらい', '長く']),
    t(160, 106, '2語はいつもくっつく', 'red', 13, 'middle', true),
    bt('How long ＝ どのくらいの間', undefined, 'red'),
  ),
  sl(
    '【なかま】❓How のつく疑問詞には何がある？→How long は期間、How many は数、How old は年れい、How much はねだんや量です。どれも How のあとにセットの語が続きます。',
    b(20, 14, 130, 30, 'How long\n期間・長さ', 'red', 11),
    b(170, 14, 130, 30, 'How many\n数', 'blue', 11),
    b(20, 56, 130, 30, 'How old\n年れい', 'green', 11),
    b(170, 56, 130, 30, 'How much\nねだん・量', 'purple', 11),
    bt('How ＋ セットの語', undefined, 'gray'),
  ),
  sl(
    '【ルール②】❓そのあとは？→過去の疑問文の形「did ＋ 主語 ＋ 動詞の原形」を続けます。did に過去の意味が入っているので、stay は stayed にしません。',
    tl(40, ['How long', 'did', 'you', 'stay'], ['red', 'purple', 'blue', 'green'], ['', '過去の疑問', '主語', '原形']),
    bt('did ＋ 主語 ＋ 原形', undefined, 'purple'),
  ),
  sl(
    '【ルール③】❓in Kyoto（京都に）はどこ？→場所を表す語句は、文の終わりに置きます。',
    tl(40, ['How long', 'did', 'you', 'stay', 'in Kyoto'], ['red', 'purple', 'blue', 'green', 'gray'], ['', '', '', '', '場所']),
    bt('場所は 文末', undefined, 'gray'),
  ),
  sl(
    '【答え】How long did you stay in Kyoto?（あなたは京都にどのくらいの間いましたか。）',
    tl(40, ['How long', 'did', 'you', 'stay', 'in Kyoto'], ['red', 'purple', 'blue', 'green', 'gray']),
    bt('How long did you stay in Kyoto?', undefined, 'green', 13),
  ),
  sl(
    '【確かめ】6つの語（句）をすべて使いました。答えるときは「I stayed in Kyoto for three days.（3日間いました）」のように for ＋ 期間 で答えます。期間をたずねる How long に、きちんと合います。',
    t(160, 34, 'Q: How long did you stay in Kyoto?', 'blue', 12, 'middle', true),
    a(160, 46, 160, 66, 'gray'),
    t(160, 90, 'A: I stayed in Kyoto for three days.', 'green', 12, 'middle', true),
    t(160, 124, 'for ＋ 期間 で答える', 'ink', 12),
    bt('問いと答えが合う', undefined, 'green'),
  ),
], 'How long ＋ did ＋ 主語 ＋ 動詞の原形');

// ═══════════════ 高校受験 ═══════════════

// k01 English ＿＿ in many countries.（is spoken）
const k01 = show([
  sl(
    '【文の形を見る】「English ＿＿ in many countries.」は「英語は多くの国で話されています」の文です。主語は English、あとに in many countries（多くの国で）が続きます。空所には動詞の形が入ります。',
    tl(34, ['English', '＿＿＿', 'in many countries'], ['blue', 'red', 'gray'], ['主語', '動詞', '']),
    bt('動詞の形を選ぶ', undefined, 'gray'),
  ),
  sl(
    '【主語と動作の関係】❓English は「話す」側？「話される」側？→英語は自分では話せません。人に「話される」側です。「される」側が主語のときは、受け身を使います。',
    b(20, 24, 130, 34, 'People speak\nEnglish.', 'gray', 12),
    a(152, 41, 176, 41, 'main'),
    b(178, 24, 130, 34, 'English is\nspoken.', 'red', 12),
    t(160, 100, '話される物（目的語）が主語に', 'ink', 12),
    bt('「される」側が主語 → 受け身', undefined, 'red', 13),
  ),
  sl(
    '【ルール】❓受け身の形は？→「be動詞 ＋ 過去分詞」です。❓なぜ？→動作の中心を「した人」から「された物」に移すので、動詞を「〜される」という形に変えます。be動詞が時と主語の数を、過去分詞が「される」を表します。',
    tl(40, ['is', 'spoken'], ['red', 'green'], ['be動詞', '過去分詞']),
    bt('be動詞 ＋ 過去分詞 ＝「〜される」', undefined, 'red', 13),
  ),
  sl(
    '【過去分詞】❓speak の過去分詞は？→speak − spoke − spoken と変わります。過去形（spoke）とちがうので、3つセットで覚えます。',
    b(10, 40, 90, 34, 'speak\n原形', 'gray', 12),
    a(102, 57, 112, 57),
    b(114, 40, 90, 34, 'spoke\n過去形', 'gray', 12),
    a(206, 57, 216, 57),
    b(218, 40, 92, 34, 'spoken\n過去分詞', 'red', 12),
    bt('受け身は 過去分詞', undefined, 'red'),
  ),
  sl(
    '【当てはめ】現在の話で主語は English（1つ）なので be動詞は is。そのあとに過去分詞 spoken を置きます。English is spoken in many countries.',
    tl(40, ['English', 'is', 'spoken', 'in many countries'], ['blue', 'red', 'green', 'gray'], ['主語', 'be', '過去分詞', '']),
    bt('English is spoken', undefined, 'green'),
  ),
  sl(
    '【答え】② is spoken。English is spoken in many countries.（英語は多くの国で話されています。）',
    tl(40, ['English', 'is spoken', 'in many countries'], ['blue', 'green', 'gray'], ['主語', '答え', '']),
    bt('② is spoken', undefined, 'green'),
  ),
  sl(
    '【確かめ】speaks だと「英語が話す」になり、意味が合いません。spoke は過去形だけで、受け身になりません。speaking は ing だけで、be動詞が無く動詞として足りません。',
    chk(['① speaks（英語が話す？ 意味が合わない）', '③ spoke（過去形だけ。受け身でない）', '④ speaking（be動詞が無い）'], '② is spoken  ○'),
    bt('「される」は be ＋ 過去分詞', undefined, 'green'),
  ),
  sl(
    '【よくあるまちがい】過去分詞を spoke（過去形）と書くことです。不規則に変わる動詞は、原形・過去形・過去分詞の3つをセットで覚えます。「by 〜（〜によって）」は、わかりきっているときは省略します。',
    b(20, 30, 280, 30, 'is spoke  ✕', 'red', 14),
    b(20, 76, 280, 30, 'is spoken  ○', 'green', 14),
    bt('過去形と過去分詞は別', undefined, 'red'),
  ),
], '受け身 ＝ be動詞 ＋ 過去分詞');

// k02 I ＿＿ in this town since I was five.（have lived）
const k02 = show([
  sl(
    '【文の形を見る】「I ＿＿ in this town since I was five.」は「私は5歳のときからこの町に住んでいます」の文です。since I was five（5歳のときから）が手がかりです。',
    tl(30, ['I', '＿＿＿', 'in this town'], ['blue', 'red', 'gray']),
    t(160, 100, 'since I was five（5歳のときから）', 'purple', 13, 'middle', true),
    bt('since に注目', undefined, 'purple'),
  ),
  sl(
    '【時間の流れ】❓since は何を表す？→「〜から（ずっと）」で、始まりの時を示します。5歳のときから、いままで続いている話です。',
    a(30, 90, 300, 90, 'gray'),
    o(60, 90, 8, '', 'purple'),
    o(260, 90, 8, '', 'red'),
    t(60, 66, '5歳', 'purple', 12, 'middle', true),
    t(260, 66, 'いま', 'red', 12, 'middle', true),
    a(70, 90, 250, 90, 'blue'),
    t(160, 122, 'ずっと続いている', 'blue', 13, 'middle', true),
    bt('5歳 → いままで つながる', undefined, 'blue'),
  ),
  sl(
    '【なぜ過去形ではだめ？】❓lived だけだと？→「昔住んでいた」で終わってしまい、いまとのつながりが出ません。過去から今までつなげるのが現在完了です。',
    t(160, 24, '過去形 lived：昔だけ', 'gray', 12, 'middle', true),
    a(40, 48, 150, 48, 'gray'),
    o(160, 48, 5, '', 'gray'),
    t(160, 84, '現在完了 have lived：いままで', 'green', 12, 'middle', true),
    a(40, 108, 270, 108, 'green'),
    o(280, 108, 6, '', 'red'),
    t(280, 130, 'いま', 'red', 11),
    bt('いままで続く → 現在完了', undefined, 'green'),
  ),
  sl(
    '【ルール】❓現在完了の形は？→「have（has）＋ 過去分詞」です。主語 I のときは have、he・she・it・1人のときは has です。live の過去分詞は lived（規則動詞は ed）。',
    tl(40, ['have', 'lived'], ['red', 'green'], ['have・has', '過去分詞']),
    bt('have ＋ 過去分詞', undefined, 'red'),
  ),
  sl(
    '【合図の言葉】❓継続の合図は？→since のあとには「始まりの時」、for のあとには「期間」が来ます。どちらも現在完了とセットで使います。',
    b(14, 24, 292, 34, 'since ＋ 始まり（since I was five）', 'purple', 12),
    b(14, 70, 292, 34, 'for ＋ 期間（for ten years）', 'blue', 12),
    bt('since・for → 現在完了', undefined, 'purple'),
  ),
  sl(
    '【当てはめ】主語 I に have、動詞 live を過去分詞の lived にして、I have lived in this town since I was five. とします。',
    tl(40, ['I', 'have', 'lived', 'in this town'], ['blue', 'red', 'green', 'gray']),
    bt('I have lived', undefined, 'green'),
  ),
  sl(
    '【答え】③ have lived。I have lived in this town since I was five.（私は5歳のときからこの町に住んでいます。）',
    tl(40, ['I', 'have lived', 'in this town'], ['blue', 'green', 'gray'], ['', '答え', '']),
    bt('③ have lived', undefined, 'green'),
  ),
  sl(
    '【確かめ】live は現在形だけで since と合いません。lived は過去で終わった話です。was living は過去進行形で、過去のあるときの「住んでいた最中」になります。since があるのは have lived だけです。',
    chk(['① live（現在形だけ）', '② lived（過去で終わった話）', '④ was living（過去の最中）'], '③ have lived  ○'),
    bt('since ＋ 現在完了', undefined, 'green'),
  ),
], 'since・for は現在完了とセット');

// k03 The girl ＿＿ is singing on the stage is my sister.（who）
const k03 = show([
  sl(
    '【文の形を見る】「The girl ＿＿ is singing on the stage is my sister.」の「The girl」のあとに空所があり、すぐに動詞 is singing が続きます。空所は、The girl を説明するつなぎの言葉です。',
    tl(24, ['The girl', '＿＿＿ is singing on the stage'], ['blue', 'red']),
    tl(72, ['is my sister'], ['green']),
    bt('空所は「少女」を説明するつなぎ', undefined, 'gray'),
  ),
  sl(
    '【2つの文に分ける】❓もとは2つの文？→「The girl is my sister.（その少女は私の妹です）」と「The girl is singing on the stage.（その少女はステージで歌っています）」です。',
    b(14, 24, 292, 34, 'The girl is my sister.', 'green', 13),
    b(14, 70, 292, 34, 'The girl is singing on the stage.', 'blue', 13),
    bt('同じ The girl がくり返される', undefined, 'gray'),
  ),
  sl(
    '【つなぐ】❓くり返しはどうする？→2つ目の The girl を関係代名詞に変えて、1つ目の The girl のうしろにつなぎます。文が短くなり、読みやすくなります。',
    b(30, 30, 100, 34, 'The girl', 'blue', 14),
    a(132, 47, 176, 47),
    b(178, 30, 100, 34, '＿＿＿', 'red', 14),
    t(160, 96, '同じ名詞は つなぎの言葉に', 'ink', 12),
    bt('The girl ＿＿＿ is singing ...', undefined, 'red'),
  ),
  sl(
    '【ルール①】❓何を使う？→説明される名詞（先行詞〈せんこうし〉）が人なら who、物・動物なら which です。that は人にも物にも使えます。',
    b(30, 18, 260, 30, '人 → who', 'blue', 14),
    b(30, 58, 260, 30, '物・動物 → which', 'green', 14),
    b(30, 98, 260, 30, '人・物どちらも → that', 'purple', 14),
    bt('先行詞が人 → who', undefined, 'blue'),
  ),
  sl(
    '【ルール②】❓who と whom のちがいは？→関係代名詞のすぐあとに動詞が来るなら、主語のはたらき（主格）で who。「主語＋動詞」が来るなら、目的語のはたらき（目的格）で whom（または that）です。',
    b(14, 24, 292, 34, 'who ＋ 動詞（主格）', 'blue', 13),
    b(14, 70, 292, 34, 'whom ＋ 主語 ＋ 動詞（目的格）', 'gray', 13),
    t(160, 126, 'ここは who の次が is singing（動詞）', 'blue', 12, 'middle', true),
    bt('who の次は 動詞', undefined, 'blue'),
  ),
  sl(
    '【答え】① who。The girl who is singing on the stage is my sister.（ステージで歌っている少女は私の妹です。）',
    tl(24, ['The girl', 'who', 'is singing on the stage'], ['blue', 'red', 'gray']),
    tl(72, ['is my sister'], ['green']),
    bt('① who', undefined, 'green'),
  ),
  sl(
    '【確かめ】which は物・動物用です。whose は「〜の」で、あとに名詞（whose bag など）が続きます。whom は目的格で、あとに「主語＋動詞」が続くので、ここには合いません。',
    chk(['② which（物・動物用）', '③ whose（あとに名詞が続く）', '④ whom（あとが「主語＋動詞」）'], '① who ＋ is singing  ○'),
    bt('人 ＋ who ＋ 動詞', undefined, 'green'),
  ),
], '人 ＋ who ＋ 動詞（主格）');

// k04 This is the book that my father bought for me.（整序）
const k04 = show([
  sl(
    '【文の形を見る】7つの語（句）をならべかえて、「これは、私の父が私に買ってくれた本です」という文にします。「私の父が私に買ってくれた」が「本」を説明しています。',
    tl(26, ['bought', 'This', 'that', 'for me'], ['green', 'blue', 'red', 'gray']),
    tl(76, ['the book', 'my father', 'is'], ['blue', 'green', 'gray']),
    bt('説明する部分は「本」のうしろ', undefined, 'gray'),
  ),
  sl(
    '【2つの文に分ける】❓もとの2つの文は？→「This is the book.（これは本です）」と「My father bought it for me.（父は私にそれを買ってくれた）」です。it は the book のことです。',
    b(14, 24, 292, 34, 'This is the book.', 'blue', 13),
    b(14, 70, 292, 34, 'My father bought it for me.', 'green', 13),
    bt('it ＝ the book', undefined, 'gray'),
  ),
  sl(
    '【つなぐ】❓it はどうなる？→2つ目の文の it（買われた物）を関係代名詞 that に変えて、the book のうしろにつなぎます。it は「買った」の目的語なので、目的格の関係代名詞です。',
    b(30, 24, 100, 34, 'the book', 'blue', 14),
    a(132, 41, 176, 41),
    b(178, 24, 100, 34, 'that', 'red', 14),
    t(160, 90, 'it（目的語）→ that に変わる', 'ink', 12),
    bt('目的格は that ＋ 主語 ＋ 動詞', undefined, 'red', 13),
  ),
  sl(
    '【説明の部分】❓that のあとの順番は？→「主語 → 動詞」です。that ＋ my father（主語）＋ bought（動詞）＋ for me の順になります。',
    tl(40, ['that', 'my father', 'bought', 'for me'], ['red', 'green', 'blue', 'gray'], ['', '主語', '動詞', '']),
    bt('that ＋ 主語 ＋ 動詞', undefined, 'red'),
  ),
  sl(
    '【土台を作る】❓前半は？→「This is the book（これは本です）」です。This が主語、is が動詞、the book が名詞です。',
    tl(40, ['This', 'is', 'the book'], ['blue', 'gray', 'green']),
    bt('土台：This is the book', undefined, 'blue'),
  ),
  sl(
    '【全体を組み立てる】土台のうしろに、説明の部分をつなぎます。This is the book that my father bought for me.',
    tl(24, ['This', 'is', 'the book', 'that'], ['blue', 'gray', 'green', 'red']),
    tl(72, ['my father', 'bought', 'for me'], ['green', 'blue', 'gray']),
    bt('土台 ＋ that ＋ 主語 ＋ 動詞', undefined, 'green'),
  ),
  sl(
    '【答え】This is the book that my father bought for me.（これは、私の父が私に買ってくれた本です。）',
    t(160, 40, 'This is the book', 'blue', 15, 'middle', true),
    t(160, 76, 'that my father bought for me.', 'green', 15, 'middle', true),
    bt('7つの語（句）を すべて使った', undefined, 'green'),
  ),
  sl(
    '【確かめ】bought のうしろには、本来ある「買った物」がありません。that がその役目をしているので、目的格の関係代名詞の形として正しいです。that のあとに動詞を先に置いたら、まちがいです。',
    t(160, 34, '✕ that bought my father ...', 'red', 13, 'middle', true),
    t(160, 62, '（動詞が先だと 意味が通らない）', 'red', 11),
    t(160, 104, '○ that my father bought ...', 'green', 13, 'middle', true),
    t(160, 132, 'bought のうしろは 空き（that の役目）', 'green', 11),
    bt('that のあとは 主語 → 動詞', undefined, 'green'),
  ),
], '名詞 ＋ that ＋ 主語 ＋ 動詞');

// k05 This is a picture ＿＿ by my uncle.（painted）
const k05 = show([
  sl(
    '【文の形を見る】「This is a picture ＿＿ by my uncle.」は「これは私のおじによって描かれた絵です」の文です。This is がすでに文の動詞です。空所は、a picture を説明する言葉が入ります。',
    tl(34, ['This is', 'a picture', '＿＿＿', 'by my uncle'], ['gray', 'blue', 'red', 'gray'], ['文の動詞', '名詞', '説明', '']),
    bt('空所は a picture の説明', undefined, 'gray'),
  ),
  sl(
    '【動詞は2つ並ばない】❓paints・paint を入れたら？→is と paints で動詞が2つ並んでしまいます。英語では、1つの文に動詞を2つ並べることはできません。だから動詞（paints・paint）は入りません。',
    t(160, 34, '✕ This is a picture paints ...', 'red', 13, 'middle', true),
    t(160, 62, '動詞が2つ（is と paints）', 'red', 11),
    t(160, 104, '○ 説明の語（分詞）を使う', 'green', 13, 'middle', true),
    bt('動詞は 1つだけ', undefined, 'red'),
  ),
  sl(
    '【絵と動作の関係】❓絵は「描く」？「描かれる」？→絵は人に「描かれる」側です。by my uncle（おじによって）も、「される」の目印です。',
    b(20, 28, 130, 34, 'my uncle\npaints', 'gray', 12),
    a(152, 45, 176, 45),
    b(178, 28, 130, 34, 'a picture\npainted', 'red', 12),
    t(160, 104, '絵は 描かれる 側', 'red', 13, 'middle', true),
    bt('by 〜 は「される」の目印', undefined, 'red'),
  ),
  sl(
    '【ルール】❓名詞のうしろに置く分詞は？→「される」なら過去分詞（painted）、「している」なら ing（painting）です。a picture painted by my uncle ＝「おじに描かれた絵」。',
    b(14, 24, 292, 34, '名詞 ＋ 過去分詞 ＝ 〜された名詞', 'red', 13),
    b(14, 70, 292, 34, '名詞 ＋ ing ＝ 〜している名詞', 'blue', 13),
    bt('される → 過去分詞', undefined, 'red'),
  ),
  sl(
    '【うしろから説明】❓どこまでが説明？→「painted by my uncle」がひとかたまりで、前の a picture を説明しています。日本語では「おじに描かれた」と、名詞の前から説明します。',
    b(20, 50, 100, 34, 'a picture', 'blue', 14),
    a(148, 67, 122, 67, 'red'),
    b(150, 50, 150, 34, 'painted by my uncle', 'red', 11),
    t(160, 106, 'うしろから 前の名詞を説明', 'ink', 12),
    bt('かたまりで 名詞を説明', undefined, 'red'),
  ),
  sl(
    '【答え】② painted。This is a picture painted by my uncle.（これは私のおじによって描かれた絵です。）',
    tl(40, ['This is', 'a picture', 'painted', 'by my uncle'], ['gray', 'blue', 'red', 'gray']),
    bt('② painted', undefined, 'green'),
  ),
  sl(
    '【確かめ】painting は「描いている（絵）」で、絵が描く側になってしまいます。paints と paint は動詞で、is と2つ並んでしまいます。by my uncle との意味もつながるのは painted だけです。',
    chk(['① painting（絵が描く側になる）', '③ paints（動詞が2つ並ぶ）', '④ paint（動詞が2つ並ぶ）'], '② painted by my uncle  ○'),
    bt('「される」→ painted', undefined, 'green'),
  ),
], '名詞 ＋ 過去分詞 ＝ 〜された名詞');

// k06 Do you know what time the movie starts?（整序）
const k06 = show([
  sl(
    '【文の形を見る】6つの語（句）をならべかえて、「あなたは、その映画が何時に始まるか知っていますか」という文にします。「知っていますか」の中に、「何時に始まるか」が入る形です。',
    tl(26, ['the movie', 'Do', 'starts'], ['green', 'blue', 'red']),
    tl(76, ['know', 'what time', 'you'], ['blue', 'purple', 'blue']),
    bt('「知っていますか」＋「何時に始まるか」', undefined, 'gray'),
  ),
  sl(
    '【もとの疑問文】❓「その映画は何時に始まりますか」は、1つだけの文なら？→What time does the movie start? です。疑問詞のあとに does ＋ 主語 ＋ 動詞の原形が続きます。',
    t(160, 40, 'What time does the movie start?', 'purple', 14, 'middle', true),
    tl(76, ['What time', 'does', 'the movie', 'start'], ['purple', 'red', 'green', 'blue']),
    bt('単独の疑問文の語順', undefined, 'purple'),
  ),
  sl(
    '【かたまりにする】❓Do you know の中に入れると？→疑問文ではなく「何時に始まるか」という名詞のかたまりになります。かたまりの中は、ふつうの文の語順（主語 → 動詞）にもどります。',
    b(14, 24, 292, 34, 'Do you know ＋ （かたまり）', 'blue', 13),
    t(160, 90, 'かたまりの中は ふつうの語順', 'ink', 13, 'middle', true),
    bt('疑問文 → ふつうの語順', undefined, 'purple'),
  ),
  sl(
    '【語順の変化】❓どこが変わる？→does が消えて、「主語 → 動詞」の順になります。動詞は、主語が1つ（the movie）なので、start が starts になります。',
    tl(30, ['What time', 'does', 'the movie', 'start'], ['purple', 'red', 'green', 'blue']),
    tl(96, ['what time', 'the movie', 'starts'], ['purple', 'green', 'blue'], ['', '主語', '動詞']),
    bt('does が消える ／ start → starts', undefined, 'red', 13),
  ),
  sl(
    '【なぜ does が消える？】❓どうして？→does は「これは疑問文です」という合図の役目と、動詞の形を決める役目をしています。かたまりになると疑問文ではなくなるので、does は要りません。動詞は主語に合わせて starts になります。',
    t(160, 40, '✕ what time does the movie start', 'red', 13, 'middle', true),
    t(160, 68, '（疑問文のままで入れた）', 'red', 11),
    t(160, 110, '○ what time the movie starts', 'green', 13, 'middle', true),
    bt('文の中では 主語 → 動詞', undefined, 'red'),
  ),
  sl(
    '【組み立てる】Do you know に、かたまり「what time the movie starts」をつなぎます。',
    tl(24, ['Do', 'you', 'know'], ['blue', 'blue', 'blue']),
    tl(72, ['what time', 'the movie', 'starts'], ['purple', 'green', 'blue']),
    bt('Do you know ＋ かたまり', undefined, 'green'),
  ),
  sl(
    '【答え】Do you know what time the movie starts?（あなたは、その映画が何時に始まるか知っていますか。）',
    t(160, 44, 'Do you know', 'blue', 15, 'middle', true),
    t(160, 80, 'what time the movie starts?', 'green', 15, 'middle', true),
    bt('文末は「？」', 'Do you know で始まる疑問文だから', 'green'),
  ),
  sl(
    '【確かめ】6つの語（句）をすべて使いました。全体は「知っていますか」とたずねる疑問文なので、文末は「？」です。what time のあとは「the movie starts」（主語 → 動詞）の順で、does は使っていません。',
    t(160, 34, '✓ 6つの語（句）をすべて使った', 'green', 13, 'middle', true),
    t(160, 70, '✓ 文末は「？」', 'green', 13, 'middle', true),
    t(160, 106, '✓ the movie starts（主語 → 動詞）', 'green', 13, 'middle', true),
    bt('3つとも ○', undefined, 'green'),
  ),
], 'Do you know ＋ 疑問詞 ＋ 主語 ＋ 動詞');

// k08 This is the ＿＿ movie I have ever seen.（most interesting）
const k08 = show([
  sl(
    '【文の形を見る】「This is the ＿＿ movie I have ever seen.」は「これは、私がこれまでに見た中でいちばんおもしろい映画です」の文です。空所の前に the、うしろに movie があります。',
    tl(30, ['This is', 'the', '＿＿＿', 'movie'], ['gray', 'blue', 'red', 'green']),
    tl(76, ['I have ever seen'], ['purple']),
    bt('the ＋ 空所 ＋ 名詞', undefined, 'gray'),
  ),
  sl(
    '【範囲を見る】❓ever があると？→「I have ever seen（これまでに見た）」は、見たすべての映画が範囲です。2つをくらべる than がなく、すべての中での1つなので、「いちばん」の意味になります。',
    t(160, 34, 'I have ever seen', 'purple', 14, 'middle', true),
    ...[0, 1, 2, 3, 4].map((i) => o(50 + i * 55, 84, 18, String(i + 1), i === 2 ? 'red' : 'gray')),
    t(160, 130, 'これまでに見た すべての映画', 'ink', 12),
    bt('範囲は「すべての中」', undefined, 'purple'),
  ),
  sl(
    '【ルール①】❓比較級と最上級のちがいは？→2つをくらべるなら「比較級 ＋ than」。3つ以上（全体）の中でいちばんなら「the ＋ 最上級」です。',
    b(14, 24, 292, 34, '2つ → 比較級 ＋ than', 'blue', 13),
    b(14, 70, 292, 34, '3つ以上の中で1番 → the ＋ 最上級', 'red', 13),
    bt('ここは the ＋ 最上級', undefined, 'red'),
  ),
  sl(
    '【ルール②】❓長い語の最上級は？→interesting のような長い語は、est をつけると言いにくいので、前に most を置きます。短い語は est（tall → the tallest）です。',
    ...mv(22, 'tall', 'tallest', 'green', 26, 12),
    ...mv(58, 'fast', 'fastest', 'green', 26, 12),
    ...mv(94, 'interesting', 'most interesting', 'red', 26, 12),
    bt('the ＋ 最上級（長い語は most）', undefined, 'red', 13),
  ),
  sl(
    '【うしろの説明】❓I have ever seen は何？→movie を説明するかたまりです。movie と I のあいだに、目的格の関係代名詞 that が省略されています。「私がこれまでに見た映画」の意味です。',
    b(20, 50, 100, 34, 'movie', 'green', 14),
    a(138, 67, 122, 67, 'purple'),
    b(140, 50, 164, 34, '(that) I have ever seen', 'purple', 10),
    bt('that を省略した説明', undefined, 'purple'),
  ),
  sl(
    '【答え】③ most interesting。This is the most interesting movie I have ever seen.（これは私がこれまでに見た中でいちばんおもしろい映画です。）',
    tl(30, ['This is', 'the', 'most interesting', 'movie'], ['gray', 'blue', 'red', 'green']),
    tl(76, ['I have ever seen'], ['purple']),
    bt('③ most interesting', undefined, 'green'),
  ),
  sl(
    '【確かめ】interesting だけでは the のあとで「いちばん」の意味が出ません。more は比較級で、than（〜より）が必要です。very は「とても」と強める語で、「いちばん」の意味は出ません（最上級を強める the very best のような形はあります）。',
    chk(['① interesting（「いちばん」の意味が出ない）', '② more interesting（than が必要）', '④ very interesting（「いちばん」にならない）'], '③ the most interesting  ○'),
    bt('the ＋ most ＋ 長い語', undefined, 'green'),
  ),
], 'the ＋ 最上級（長い語は most）');

export const figuresMoshi202703Eigo: Record<string, Figure> = {
  moshi_2027_03_eigo_c01: c01,
  moshi_2027_03_eigo_c02: c02,
  moshi_2027_03_eigo_c04: c04,
  moshi_2027_03_eigo_c05: c05,
  moshi_2027_03_eigo_c06: c06,
  moshi_2027_03_eigo_c08: c08,
  moshi_2027_03_eigo_c09: c09,
  moshi_2027_03_eigo_c10: c10,
  moshi_2027_03_eigo_k01: k01,
  moshi_2027_03_eigo_k02: k02,
  moshi_2027_03_eigo_k03: k03,
  moshi_2027_03_eigo_k04: k04,
  moshi_2027_03_eigo_k05: k05,
  moshi_2027_03_eigo_k06: k06,
  moshi_2027_03_eigo_k08: k08,
};
