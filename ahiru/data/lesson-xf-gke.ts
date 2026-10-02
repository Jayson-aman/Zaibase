// 高校受験 英語：問題集に対して足りなかった分野の単元（gap_gke_01〜13）に足す動く図解スライド。
// 「❓なぜ？→答え」の連鎖で、7枚以上。上に図、下の帯にそのスライドのひとこと。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, show, fresh, flow } from './diagram-kit';

type Col = [string, string];
const BLUE: Col = [C.blue, FILL.blue];
const GREEN: Col = [C.green, FILL.green];
const RED: Col = [C.red, FILL.red];
const MAIN: Col = [C.main, FILL.warm];
const PURPLE: Col = [C.purple, FILL.purple];

// 下の帯（y=164 から）に、そのスライドのひとことを出す。\n で改行できる。
const cap = (t: string, c: Col = BLUE, size = 12): DiagramElement => {
  const n = t.split('\n').length;
  return bx(10, 164, 300, 14 + 15 * n, t, c[0], c[1], size);
};

// 1枚のスライド＝まっさらな図＋下の帯
const S = (note: string, top: DiagramElement[], capText: string, c: Col = BLUE, size = 12) => ({
  note,
  add: fresh(...top, cap(capText, c, size)),
});

// 「なぜ？」の問い → 答え
const Q = (note: string, q: string, a: string, capText: string, c: Col = BLUE, aSize = 13) =>
  S(note, [
    bx(10, 8, 300, 34, 'なぜ？ ' + q, PURPLE[0], PURPLE[1], 12),
    ar(160, 44, 160, 56, PURPLE[0]),
    bx(10, 58, 300, 92, a, c[0], c[1], aSize),
  ], capText, c);

// 横一列の箱（矢印つき）
const row = (labels: string[], y: number, c: Col = MAIN, size = 12, h = 44, gap = 14): DiagramElement[] =>
  flow(labels, y, { h, color: c[0], fill: c[1], size, gap }).flat();

// 矢印なしの横一列（total 幅を n 等分）
const cells = (labels: string[], y: number, c: Col = MAIN, size = 12, h = 30, gap = 6, x0 = 10, total = 300): DiagramElement[] => {
  const n = labels.length;
  const w = (total - gap * (n - 1)) / n;
  return labels.map((t, i) => bx(x0 + i * (w + gap), y, w, h, t, c[0], c[1], size));
};

// 色つきの横一列（箱ごとに色を変える）
const cellsC = (labels: [string, Col][], y: number, size = 12, h = 30, gap = 6, x0 = 10, total = 300): DiagramElement[] => {
  const n = labels.length;
  const w = (total - gap * (n - 1)) / n;
  return labels.map(([t, c], i) => bx(x0 + i * (w + gap), y, w, h, t, c[0], c[1], size));
};

// 表（先頭行は見出し）。colW は各列の幅。hl は強調するマス [行, 列]
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

// まとめ：3行の箱
const sum3 = (a: string, b: string, c: string, last: string, col: Col = GREEN) =>
  S('まとめです。' + a + '。' + b + '。' + c + '。',
    [bx(15, 12, 290, 34, a, BLUE[0], BLUE[1], 12), bx(15, 54, 290, 34, b, MAIN[0], MAIN[1], 12), bx(15, 96, 290, 34, c, GREEN[0], GREEN[1], 12)], last, col);

// ── gap_gke_01 Why と Because ──
const f01: DiagramFigure = show([
  S('理由をたずねるのが Why（なぜ）、理由を答えるのが Because（なぜなら）です。この2つは、いつも組になって出てきます。まず、それぞれの形を根っこからたどりましょう。',
    [bx(10, 14, 140, 52, 'Why ～?\n（なぜ？）', C.blue, FILL.blue, 15), bx(170, 14, 140, 52, 'Because ～.\n（なぜなら）', C.green, FILL.green, 15), ar(150, 40, 168, 40, C.main), lb(160, 96, 'たずねる → 答える', 14, C.ink, 'middle', true), lb(160, 122, '2つで1組のやりとり', 12, C.gray, 'middle')],
    '理由をたずねる Why ／ 理由を答える Because', MAIN),
  Q('❓なぜ、Why のあとは疑問文の語順なのでしょう。→ Why は疑問詞で、「文の先頭に出ただけ」だからです。うしろは、ふつうの疑問文のまま。do や does や did を使うか、be動詞を前に出します。',
    'Why のあとが疑問文の語順なのは？', 'Do you like summer?　（ふつうの疑問文）\n→ Why do you like summer?\nIs he absent today?\n→ Why is he absent today?\n先頭に Why を足すだけ', 'Why ＋ ふつうの疑問文', BLUE, 13),
  S('答えは Because ＋ 主語 ＋ 動詞です。Because I like swimming. は、I（主語）と like（動詞）がそろった文になっています。',
    [...cellsC([['Because', GREEN], ['I', BLUE], ['like', RED], ['swimming.', MAIN]], 24, 13, 40, 6), lb(160, 82, '接続詞　主語　動詞　目的語', 11, C.gray, 'middle'), lb(160, 112, 'Why do you like summer?', 13, C.ink, 'middle', true), lb(160, 134, '— Because I like swimming.', 13, C.green, 'middle', true)],
    'Because ＋ 主語 ＋ 動詞', GREEN),
  Q('❓なぜ、Because the bus. はだめなのでしょう。→ because は文と文をつなぐ接続詞です。つなぐ相手は、「主語＋動詞」の文でなければなりません。the bus だけでは、動詞がなく、文になっていません。',
    'Because the bus. がだめなのは？', 'because は「文と文をつなぐ語」\nつなぐ相手は 主語 ＋ 動詞\n× Because the bus.\n○ Because the bus was late.', '名詞だけを because に続けない', RED, 13),
  S('名詞で理由を言いたいときは、because of を使います。of が付くと、前置詞のかたまりになり、あとに名詞を置けます。',
    [bx(10, 14, 142, 66, 'because ＋ 文\nbecause it rained', C.green, FILL.green, 13), bx(168, 14, 142, 66, 'because of ＋ 名詞\nbecause of the rain', C.blue, FILL.blue, 13), lb(160, 108, 'どちらも「雨のために」', 13, C.ink, 'middle', true), lb(160, 132, 'of があるかないかで、続く形が決まる', 12, C.red, 'middle', true)],
    '文なら because ／ 名詞なら because of', BLUE),
  S('原因と結果の向きも、確かめましょう。because は理由の前、so は結果の前に置きます。同じ内容を、どちらから先に言うかのちがいです。',
    [bx(10, 10, 130, 40, 'I was tired\n（原因）', C.red, FILL.red, 12), ar(142, 30, 156, 30, C.main), bx(158, 10, 152, 40, 'so I went to bed.\n（結果）', C.green, FILL.green, 12), bx(10, 60, 130, 40, 'I went to bed\n（結果）', C.green, FILL.green, 12), ar(156, 80, 142, 80, C.main), bx(158, 60, 152, 40, 'because I was tired.\n（理由）', C.red, FILL.red, 12), lb(160, 126, 'so は結果の前、because は理由の前', 13, C.ink, 'middle', true)],
    'so ＝ 結果の前 ／ because ＝ 理由の前', MAIN),
  S('最後に、まちがいやすい形です。Why don\'t you ～? は、理由をたずねる文ではありません。「～してはどうですか」という誘いなので、Because では答えません。',
    [bx(10, 12, 300, 34, "Why don't you join us?", C.purple, FILL.purple, 14), bx(10, 62, 144, 40, '× Because ～.', C.red, FILL.red, 14), bx(166, 62, 144, 40, '○ Sure. /\nSorry, I can\'t.', C.green, FILL.green, 12), lb(160, 128, '意味は「いっしょにどう？」', 13, C.ink, 'middle', true)],
    'Why don\'t you ～? は誘い。理由ではない', RED),
  sum3('Why ＋ ふつうの疑問文の語順', 'Because ＋ 主語 ＋ 動詞（名詞なら because of）', 'because は理由の前、so は結果の前', 'Why と Because がそろった'),
], 'Why と Because');

// ── gap_gke_02 職業と町の場所 ──
const f02: DiagramFigure = show([
  S('職業は、I\'m a teacher. のように、〈be動詞＋a／an＋職業名〉で言います。たずねるときは What do you do? です。この do を2回使う形が、この単元のカギです。',
    [bx(10, 14, 300, 36, 'What do you do?', C.blue, FILL.blue, 16), ar(160, 52, 160, 66, C.main), bx(10, 68, 300, 36, "I'm a teacher.", C.green, FILL.green, 16), lb(160, 128, '職業をたずねて、職業を答える', 13, C.ink, 'middle', true)],
    'What do you do? ＝ 職業をたずねる', BLUE),
  Q('❓なぜ、職業をたずねるのに現在形なのでしょう。→ 現在形は「毎日・いつも」のくり返しを表します。毎日くり返す行いの積み重ねが、その人の職業だからです。',
    '職業をたずねるのが現在形なのは？', '現在形 ＝ くり返し・習慣\n毎日くり返す行いの積み重ね\n＝ その人の職業\nだから What do you do? を使う', '現在形は「くり返し」', GREEN, 13),
  S('いまの動作をたずねるときは、現在進行形を使います。What are you doing? は「いま何をしているところ？」という意味で、職業ではなくその瞬間の動作を聞いています。',
    [bx(10, 12, 144, 56, 'What do you do?\n職業・ふだん', C.blue, FILL.blue, 13), bx(166, 12, 144, 56, 'What are you doing?\nいまの動作', C.red, FILL.red, 13), bx(10, 82, 144, 34, "I'm a nurse.", C.blue, FILL.blue, 13), bx(166, 82, 144, 34, "I'm cooking dinner.", C.red, FILL.red, 12), lb(160, 138, '形がちがえば、聞いている内容もちがう', 12, C.ink, 'middle', true)],
    'do ＝ 職業 ／ are ＋ ing ＝ いま', MAIN),
  Q('❓What do you do? の do が2つあるのは、なぜでしょう。→ 1つ目の do は、疑問文をつくる助動詞です。2つ目の do は、「する」という意味の一般動詞です。「あなたは何を、ふだんするの？」と直訳できます。',
    'do が2つ並ぶのは？', 'What do you do?\n1つ目の do ＝ 疑問文をつくる助動詞\n2つ目の do ＝ 「する」という意味の動詞\n直訳 ＝ 「何を、ふだんするの？」', '1つ目は助動詞、2つ目は「する」', PURPLE, 13),
  S('主語が she や your mother のとき、助動詞は does になります。すると、本動詞の do は原形に戻ります。What does she do? は正しく、What does she does? は誤りです。',
    [bx(10, 12, 300, 34, 'What does your sister do?', C.green, FILL.green, 14), bx(10, 56, 300, 34, '× What does she does?', C.red, FILL.red, 14), bx(10, 100, 300, 34, '○ does のあとは 原形の do', C.green, FILL.green, 13)],
    'does ＋ 動詞の原形', GREEN),
  S('場所と職業を結ぶと、情報が深まります。nurse は hospital、teacher は school、pilot は airport で働きます。〈work at ＋ 場所〉で「～で働く」と言います。',
    [bx(10, 14, 90, 34, 'nurse', C.blue, FILL.blue, 13), ar(102, 31, 118, 31, C.main), bx(120, 14, 190, 34, 'a hospital', C.green, FILL.green, 13), bx(10, 58, 90, 34, 'teacher', C.blue, FILL.blue, 13), ar(102, 75, 118, 75, C.main), bx(120, 58, 190, 34, 'a school', C.green, FILL.green, 13), bx(10, 102, 90, 34, 'pilot', C.blue, FILL.blue, 13), ar(102, 119, 118, 119, C.main), bx(120, 102, 190, 34, 'an airport', C.green, FILL.green, 13)],
    'She works at a hospital.', GREEN),
  S('a と an の使い分けも、確かめましょう。a か an かは、つづりではなく、最初の音で決まります。母音の音で始まる artist や engineer は an、子音の音で始まる doctor や nurse は a です。',
    [bx(10, 14, 144, 56, 'a ＋ 子音の音\na doctor\na nurse', C.blue, FILL.blue, 13), bx(166, 14, 144, 56, 'an ＋ 母音の音\nan artist\nan engineer', C.green, FILL.green, 13), lb(160, 96, '音で決める（つづりではない）', 13, C.ink, 'middle', true), lb(160, 122, 'He is an engineer.', 13, C.red, 'middle', true)],
    'a か an かは「最初の音」で決まる', MAIN),
  sum3('質問が do／does なら 職業', 'are／is ＋ ing なら いまの動作', 'does のあとは原形、a／an は音で決める', '職業の聞き分けができた'),
], '職業と町の場所');

// ── gap_gke_03 句動詞①：動詞＋副詞 ──
const f03: DiagramFigure = show([
  S('pick up は「拾う」、put on は「身につける」。動詞のあとに up や on のような小さな語が付いて、新しい意味になる表現を、句動詞（くどうし）といいます。',
    [bx(10, 14, 144, 40, 'pick ＋ up', C.blue, FILL.blue, 15), bx(166, 14, 144, 40, '拾う', C.green, FILL.green, 15), bx(10, 64, 144, 40, 'put ＋ on', C.blue, FILL.blue, 15), bx(166, 64, 144, 40, '身につける', C.green, FILL.green, 15), bx(10, 114, 144, 34, 'turn ＋ off', C.blue, FILL.blue, 14), bx(166, 114, 144, 34, '消す', C.green, FILL.green, 14)],
    '動詞 ＋ 副詞 ＝ 句動詞', BLUE),
  Q('❓なぜ、小さな語で意味が変わるのでしょう。→ 小さな語は「向きのイメージ」を持っているからです。up は上へ、off は離れる、on はくっつく、out は外へ。そのイメージが動詞の意味に加わります。',
    '小さな語で意味が変わるのは？', 'up ＝ 上へ　　pick up（持ち上げる）\noff ＝ 離れる　take off（脱ぐ）\non ＝ くっつく　put on（着る）\nout ＝ 外へ　　find out（わかる）', '副詞は「向きのイメージ」', GREEN, 13),
  S('目的語がいらない句動詞もあります。get up（起きる）、sit down（すわる）、come back（戻る）は、動作そのものを表します。',
    [bx(10, 14, 144, 40, 'get up\n起きる', C.blue, FILL.blue, 13), bx(166, 14, 144, 40, 'sit down\nすわる', C.blue, FILL.blue, 13), bx(10, 64, 144, 40, 'come back\n戻る', C.blue, FILL.blue, 13), bx(166, 64, 144, 40, 'grow up\n成長する', C.blue, FILL.blue, 13), lb(160, 128, '目的語（～を）が 付かない', 13, C.ink, 'middle', true)],
    '目的語がいらないタイプ', BLUE),
  S('目的語が名詞のときは、2通りの置き方ができます。pick up the pen でも、pick the pen up でも正解です。名詞なら、副詞の前でも後ろでもかまいません。',
    [bx(10, 14, 300, 34, 'Please pick up the pen.', C.green, FILL.green, 14), bx(10, 60, 300, 34, 'Please pick the pen up.', C.green, FILL.green, 14), lb(160, 118, '名詞なら どちらでもよい', 13, C.ink, 'middle', true)],
    '名詞なら 副詞の前でも後ろでも ○', GREEN),
  Q('❓代名詞のときは、なぜ動詞と副詞の間に入るのでしょう。→ it や them は、すでに話題に出た短い語です。英語は、わかりきった語を弱く短く言い、新しい意味をもつ強い副詞（up や off）を後ろに残します。',
    '代名詞が間に入るのは？', 'it は「わかりきった短い語」\n動詞のすぐあとに寄る\n○ Please pick it up.\n× Please pick up it.', '代名詞は 動詞と副詞の間', RED, 13),
  S('put on と wear のちがいも大切です。put on は「着る動作」、wear は「着ている状態」です。「～を着ている」と言うときは wearing を使います。',
    [bx(10, 14, 144, 56, 'put on\n着る動作', C.blue, FILL.blue, 14), bx(166, 14, 144, 56, 'wear\n着ている状態', C.green, FILL.green, 14), bx(10, 84, 144, 40, 'Put on your coat.', C.blue, FILL.blue, 12), bx(166, 84, 144, 40, 'She is wearing a cap.', C.green, FILL.green, 11)],
    '動作 ＝ put on ／ 状態 ＝ wear', MAIN),
  S('反対のイメージの組も、セットで覚えましょう。on と off、up と down です。電気を「つける」は turn on、「消す」は turn off。音量を上げるのは turn up、下げるのは turn down です。',
    [bx(10, 14, 144, 34, 'turn on ＝ つける', C.green, FILL.green, 13), bx(166, 14, 144, 34, 'turn off ＝ 消す', C.red, FILL.red, 13), bx(10, 60, 144, 34, 'turn up ＝ 上げる', C.green, FILL.green, 13), bx(166, 60, 144, 34, 'turn down ＝ 下げる', C.red, FILL.red, 13), lb(160, 120, '反対のイメージは セットで', 13, C.ink, 'middle', true)],
    '反対の副詞は セットで覚える', MAIN),
  sum3('副詞は 向きのイメージ', '名詞は前後どちらでも ／ 代名詞は間', '動作は put on ／ 状態は wear', '句動詞の語順が決まった'),
], '句動詞①');

// ── gap_gke_04 句動詞②：動詞＋前置詞と3語の熟語 ──
const f04: DiagramFigure = show([
  S('look at は「見る」、look for は「探す」、look after は「世話をする」。同じ look でも、あとの小さな語で意味が変わります。この小さな語が前置詞です。',
    [bx(10, 12, 144, 36, 'look at', C.blue, FILL.blue, 15), bx(166, 12, 144, 36, '見る', C.green, FILL.green, 15), bx(10, 56, 144, 36, 'look for', C.blue, FILL.blue, 15), bx(166, 56, 144, 36, '探す', C.green, FILL.green, 15), bx(10, 100, 144, 36, 'look after', C.blue, FILL.blue, 15), bx(166, 100, 144, 36, '世話をする', C.green, FILL.green, 15)],
    '前置詞が意味を決める', BLUE),
  Q('❓なぜ、前置詞で意味が決まるのでしょう。→ 前置詞が「向き」を示すからです。at は一点に向ける、for は求めて向かう、after はあとを追う。この向きが動詞の意味に加わります。',
    '前置詞で意味が決まるのは？', 'at ＝ 一点に向ける　look at（見る）\nfor ＝ 求めて　　　look for（探す）\nafter ＝ あとを追う look after（世話）\nup to ＝ 見上げる　look up to（尊敬）', '前置詞は「向き」を示す', GREEN, 13),
  S('見分け方があります。代名詞を入れてみましょう。副詞型は pick it up と、代名詞が間に入ります。前置詞型は look for it と、代名詞が前置詞のあとに来ます。',
    [bx(10, 14, 144, 56, '副詞型\npick it up\n（間に入る）', C.blue, FILL.blue, 13), bx(166, 14, 144, 56, '前置詞型\nlook for it\n（あとに来る）', C.green, FILL.green, 13), bx(10, 84, 144, 34, '× look it for', C.red, FILL.red, 13), bx(166, 84, 144, 34, '× pick up it', C.red, FILL.red, 13), lb(160, 138, '代名詞の位置で 型がわかる', 12, C.ink, 'middle', true)],
    '代名詞を入れて 型を見分ける', MAIN),
  Q('❓日本語の「を」にだまされるとは？ →「待つ」「聞く」「見る」は、日本語ではどれも「を」でつながります。そのため、英語でも前置詞を落として、wait you や listen music と書いてしまいます。',
    '前置詞を落としてしまうのは？', '日本語は どれも「～を」でつながる\n英語は 向かう先を前置詞で示す\nwait for ／ listen to ／ look at\n× I\'m waiting you.\n○ I\'m waiting for you.', '前置詞を落とさない', RED, 13),
  S('3語の熟語も、前置詞型の仲間です。最後の前置詞のあとに目的語が来ます。get along with（仲よくやっていく）、come up with（思いつく）、run out of（使い果たす）。',
    [bx(10, 12, 300, 30, 'get along with ～ ＝ ～と仲よくやっていく', C.blue, FILL.blue, 12), bx(10, 48, 300, 30, 'come up with ～ ＝ ～を思いつく', C.green, FILL.green, 12), bx(10, 84, 300, 30, 'run out of ～ ＝ ～を使い果たす', C.red, FILL.red, 12), bx(10, 120, 300, 30, 'take care of ～ ＝ ～の世話をする', C.main, FILL.warm, 12)],
    '3語の熟語はまとまりで覚える', MAIN, 12),
  S('look forward to の to は、前置詞です。不定詞の to ではありません。だから、あとには名詞か動名詞（-ing）が来ます。seeing you と言い、see you とは言いません。',
    [bx(10, 14, 300, 34, 'I\'m looking forward to seeing you.', C.green, FILL.green, 13), bx(10, 60, 300, 34, '× looking forward to see you', C.red, FILL.red, 13), lb(160, 118, 'この to は 前置詞 → あとは -ing', 14, C.ink, 'middle', true)],
    'look forward to ～ing', GREEN),
  S('意味のイメージで、仲間をまとめましょう。look の仲間は、at＝見る、for＝探す、after＝世話、up to＝尊敬の4つです。前置詞をひとつ変えるだけで、意味が変わります。',
    [bx(10, 12, 300, 28, 'look at ＝ 見る', C.blue, FILL.blue, 12), bx(10, 44, 300, 28, 'look for ＝ 探す', C.green, FILL.green, 12), bx(10, 76, 300, 28, 'look after ＝ 世話をする', C.red, FILL.red, 12), bx(10, 108, 300, 28, 'look up to ＝ 尊敬する', C.main, FILL.warm, 12)],
    'look ＋ 前置詞で 4つの意味', MAIN),
  sum3('前置詞は向きを示す', '前置詞を落とさない（wait for、listen to）', '3語の熟語はまとまりで覚える', '動詞＋前置詞が整理できた'),
], '句動詞②');

// ── gap_gke_05 関係代名詞 what① ──
const f05: DiagramFigure = show([
  S('I know what you want. は「私はあなたが欲しいものを知っている」。what は the thing that（～するもの）を一語にまとめた関係代名詞です。',
    [bx(10, 12, 300, 36, 'I know what you want.', C.green, FILL.green, 15), lb(160, 64, '＝', 20, C.main, 'middle', true), bx(10, 76, 300, 36, 'I know the thing that you want.', C.blue, FILL.blue, 14), lb(160, 134, 'the thing that が what 一語になる', 13, C.ink, 'middle', true)],
    'what ＝ the thing that', GREEN),
  Q('❓なぜ、what の前には名詞を置かないのでしょう。→ who や which は、前の名詞（先行詞）を指して説明します。what は「もの・こと」という名詞の役まで、自分の中に持っています。だから前に名詞はいりません。',
    'what の前に名詞がいらないのは？', 'who・which・that\n→ 前の名詞（先行詞）を説明する\nwhat\n→ 「もの・こと」を自分で持っている\nだから 先行詞がいらない', 'what は先行詞を中に含む', BLUE, 13),
  S('what の形は2つです。目的語が欠けた what ＋ 主語 ＋ 動詞と、主語が欠けた what ＋ 動詞。どちらも、名詞が一つ欠けた文が続きます。',
    [bx(10, 12, 300, 30, 'what ＋ 主語 ＋ 動詞（目的語が欠ける）', C.blue, FILL.blue, 12), bx(10, 46, 300, 30, 'This is what I bought.', C.blue, FILL.blue, 13), bx(10, 86, 300, 30, 'what ＋ 動詞（主語が欠ける）', C.green, FILL.green, 12), bx(10, 120, 300, 30, 'What happened?', C.green, FILL.green, 13)],
    'どちらも 名詞が一つ欠けている', MAIN),
  S('先行詞がある文と、ない文を並べます。the book があるときは that を使います。the book がなく、「私が買ったもの」と言うときに what を使います。',
    [bx(10, 14, 300, 34, 'This is the book that I bought.', C.blue, FILL.blue, 13), lb(160, 66, '↓ the book that を what にまとめる', 12, C.gray, 'middle', true), bx(10, 78, 300, 34, 'This is what I bought.', C.green, FILL.green, 14), lb(160, 134, '先行詞（the book）が消えて what に', 12, C.ink, 'middle', true)],
    '先行詞あり → that ／ なし → what', GREEN),
  Q('❓なぜ、先行詞があるのに what を使ってはいけないのでしょう。→ the book で「もの」の部分がすでに決まっています。そこに what を足すと、「もの」が二重になって、文が成り立たなくなります。',
    '先行詞があると what がだめなのは？', 'the book も what も「もの」を表す\n→ 「もの」が二重になってしまう\n× This is the book what I bought.\n○ This is the book that I bought.', '「もの」を二重にしない', RED, 13),
  S('all・everything・anything も、先行詞の役をします。「彼が言ったことはすべて」は Everything that he said で、what は使いません。',
    [bx(10, 14, 300, 34, '○ Everything that he said was true.', C.green, FILL.green, 13), bx(10, 60, 300, 34, '× Everything what he said was true.', C.red, FILL.red, 13), lb(160, 118, 'everything が「もの」の役を持つ', 13, C.ink, 'middle', true)],
    'all・everything のあとは that', BLUE),
  S('見分け方は3つの手順です。①直前に先行詞があるか。②「～もの・～こと」と訳せるか。③what のあとの文に、名詞が一つ欠けているか。',
    [bx(10, 12, 300, 34, '① 直前に先行詞（名詞）がある？', C.blue, FILL.blue, 13), bx(10, 54, 300, 34, '② 「～もの・～こと」と訳せる？', C.green, FILL.green, 13), bx(10, 96, 300, 34, '③ あとの文に 名詞が一つ欠けている？', C.red, FILL.red, 13)],
    '3つの手順で what を決める', MAIN),
  sum3('what ＝ the thing that', '先行詞があれば that、なければ what', 'all・everything のあとは that', 'what の使い方が決まった'),
], '関係代名詞 what①');

// ── gap_gke_06 関係代名詞 what② ──
const f06: DiagramFigure = show([
  S('what 節は、「～もの・～こと」という一つの名詞のかたまりです。名詞は、主語・目的語・補語・前置詞の目的語になれるので、what 節もその4か所に入れます。',
    [bx(10, 12, 144, 56, '主語\nWhat he said\nsurprised me.', C.blue, FILL.blue, 12), bx(166, 12, 144, 56, '目的語\nShow me what\nyou have.', C.green, FILL.green, 12), bx(10, 78, 144, 56, '補語\nThat is what\nI need.', C.red, FILL.red, 12), bx(166, 78, 144, 56, '前置詞の目的語\nListen to what\nI say.', C.main, FILL.warm, 12)],
    '名詞の4つの場所に入る', BLUE),
  Q('❓なぜ、what 節はどの場所にも入れるのでしょう。→ what は二重の働きをするからです。節の中では、欠けた名詞（目的語や主語）の役をします。同時に、what 全体で「もの・こと」という名詞の意味になります。',
    'what 節が名詞になるのは？', 'what には二重の働きがある\n① 節の中で 欠けた名詞の役\n② 節の全体が「もの・こと」\n→ 名詞のかたまりになる', 'what の二重の働き', GREEN, 13),
  S('what 節の中に前置詞が入るときは、前置詞を落とさず、文の最後に残します。what が前に出ても、about や for は動詞のうしろに残ります。',
    [bx(10, 14, 300, 34, "I don't understand what he is talking about.", C.green, FILL.green, 12), ar(262, 92, 284, 52, C.red), lb(250, 106, 'about を残す', 13, C.red, 'middle', true), lb(160, 138, '× what he is talking（about が落ちている）', 13, C.red, 'middle', true)],
    '前置詞は節の最後に残す', GREEN),
  S('what he wants という形は、2通りに読めます。「彼が何を欲しがっているか」なら疑問詞、「彼が欲しがっているもの」なら関係代名詞です。',
    [bx(10, 12, 300, 56, "I don't know what he wants.\n彼が何を欲しがっているか（疑問詞）", C.blue, FILL.blue, 12), bx(10, 78, 300, 56, "I'll buy what he wants.\n彼が欲しがっているもの（関係代名詞）", C.green, FILL.green, 12)],
    '疑問詞か 関係代名詞か', MAIN),
  Q('❓どうやって見分けるのでしょう。→ 日本語に訳して、自然なほうを選びます。「何を～か」と読めるなら疑問詞、「～もの・～こと」と読めるなら関係代名詞。know や ask のあとは疑問詞が多く、buy や show のあとは関係代名詞が多くなります。',
    '疑問詞か関係代名詞かの見分けは？', '「何を～か」→ 疑問詞\n「～もの・～こと」→ 関係代名詞\nknow・ask のあと → 疑問詞が多い\nbuy・show のあと → 関係詞が多い', '訳して自然なほうを選ぶ', PURPLE, 13),
  S('決まった言い方も覚えましょう。what we call ～ と what is called ～ は、どちらも「いわゆる～」という意味です。',
    [bx(10, 14, 300, 34, 'He is what we call a walking dictionary.', C.green, FILL.green, 12), lb(160, 72, '彼はいわゆる生き字引だ', 15, C.ink, 'middle', true), bx(10, 96, 300, 34, 'what we call ～ ＝ what is called ～', C.blue, FILL.blue, 13)],
    'what we call ～ ＝ いわゆる～', BLUE),
  S('that では代用できません。関係代名詞の that は、前の名詞を説明するときだけに使えます。先行詞のない場所では、what を使います。',
    [bx(10, 14, 300, 34, "× I can't believe that he said.", C.red, FILL.red, 13), bx(10, 60, 300, 34, "○ I can't believe what he said.", C.green, FILL.green, 13), lb(160, 118, 'said の目的語が欠けている → what', 13, C.ink, 'middle', true)],
    '先行詞がなければ what', RED),
  sum3('what 節は 名詞のかたまり', '前置詞は節の最後に残す', '疑問詞か関係詞かは 訳して決める', 'what 節が使いこなせる'),
], '関係代名詞 what②');

// ── gap_gke_07 so ～ that ／ such ～ that ──
const f07: DiagramFigure = show([
  S('The test was so difficult that nobody could finish it.「テストはとても難しかったので、だれも終えられなかった」。so ～ that … は、程度と結果をひとつの文で言う形です。',
    [bx(10, 14, 300, 34, 'The test was so difficult', C.blue, FILL.blue, 14), ar(160, 50, 160, 64, C.main), bx(10, 66, 300, 34, 'that nobody could finish it.', C.green, FILL.green, 14), lb(160, 122, '程度 → 結果', 14, C.ink, 'middle', true)],
    'so ～ that … ＝ とても～なので…', BLUE),
  Q('❓so と such は、どう使い分けるのでしょう。→ so は程度を表す副詞で、形容詞や副詞だけを強めます。名詞は直接強められません。such は名詞を説明する語なので、名詞が付くときは such を使います。',
    'so と such の使い分けは？', 'so ＋ 形容詞／副詞\n　so difficult / so fast\nsuch ＋ (a／an) ＋ (形容詞) ＋ 名詞\n　such a hot day', '名詞があれば such', GREEN, 13),
  S('形を並べて比べます。so のあとは形容詞か副詞だけ。such のあとは、名詞を含んだかたまりです。名詞があるかないかが、見分けのすべてです。',
    [bx(10, 12, 300, 34, 'so ＋ tired（形容詞だけ）', C.blue, FILL.blue, 13), bx(10, 52, 300, 34, 'such ＋ a hot day（名詞を含む）', C.green, FILL.green, 13), bx(10, 92, 300, 34, 'so ＋ fast（副詞だけ）', C.blue, FILL.blue, 13), lb(160, 144, '名詞が見えたら such', 13, C.red, 'middle', true)],
    '名詞の有無で so と such を選ぶ', MAIN),
  S('such のあとの名詞が複数形、または数えられない名詞のときは、a／an を付けません。such nice people、such good weather と言います。',
    [bx(10, 14, 300, 34, 'such a nice girl（単数 → a）', C.blue, FILL.blue, 13), bx(10, 56, 300, 34, 'such nice people（複数 → a なし）', C.green, FILL.green, 13), bx(10, 98, 300, 34, 'such good weather（数えられない）', C.green, FILL.green, 13)],
    '複数形・数えられない名詞に a は付けない', GREEN),
  Q('❓なぜ that のあとが結果になるのでしょう。→ so ～ の「そんなに～」は、どれほどなのかを示さずに終わります。that 節が「その程度は…ということだ」と内容を説明して、結果を示します。',
    'that 節が結果になるのは？', 'He was so tired . . .\n「それほど疲れていた」\n　→ どれほど？\nthat he fell asleep.\n「眠りこんだほどだ」', 'that ＝ 「～ということ」', PURPLE, 13),
  S('過去の文では、that 節も過去形にそろえます。「歩けなかった」は couldn\'t です。can\'t では、時制が合いません。',
    [bx(10, 14, 300, 34, 'He was so tired that he couldn\'t walk.', C.green, FILL.green, 13), bx(10, 60, 300, 34, '× … that he can\'t walk.', C.red, FILL.red, 13), lb(160, 118, '主節が過去 → that 節も過去', 14, C.ink, 'middle', true)],
    '時制は主節にそろえる', GREEN),
  S('書きかえもできます。so ～ that … can\'t は too ～ to …、so ～ that … can は ～ enough to … に言いかえられます。',
    [bx(10, 12, 300, 34, "so young that he can't drive", C.blue, FILL.blue, 13), bx(10, 50, 300, 30, '＝ too young to drive', C.green, FILL.green, 13), bx(10, 90, 300, 34, 'so strong that he can lift the box', C.blue, FILL.blue, 12), bx(10, 128, 300, 26, '＝ strong enough to lift the box', C.green, FILL.green, 12)],
    'too ～ to … ／ ～ enough to … と同じ意味', MAIN),
  sum3('名詞がなければ so、あれば such', 'that 節は結果を表す', '時制は主節にそろえる', 'so ～ that の使い分けができた'),
], 'so ～ that …');

// ── gap_gke_08 so that ～ can／will ──
const f08: DiagramFigure = show([
  S('I got up early so that I could catch the first train.「始発に乗れるように早起きした」。so that は、「～するために」という目的を表します。',
    [bx(10, 14, 300, 34, 'I got up early', C.blue, FILL.blue, 14), ar(160, 50, 160, 64, C.main), bx(10, 66, 300, 34, 'so that I could catch the first train.', C.green, FILL.green, 12), lb(160, 122, '早起き → 何のため？ → 始発に乗れるように', 12, C.ink, 'middle', true)],
    'so that ＝ ～するために', GREEN),
  Q('❓なぜ、so that のあとに can や will が付くのでしょう。→ 目的は、まだ実現していないことだからです。実現していないことや、実現するかもしれないことは、英語では助動詞 can や will で表します。',
    '助動詞が付くのは？', '目的 ＝ これから実現させたいこと\nまだ実現していない\n→ 助動詞 can ／ will で表す\n過去の話なら could ／ would', '目的は「まだ実現していない」', BLUE, 13),
  S('時制もそろえます。主節が現在のときは can や will、主節が過去のときは could や would を使います。',
    [bx(10, 14, 300, 36, 'He speaks slowly so that we can understand.', C.blue, FILL.blue, 12), bx(10, 60, 300, 36, 'I got up early so that I could catch it.', C.green, FILL.green, 12), lb(160, 118, '現在 → can ／ 過去 → could', 14, C.ink, 'middle', true)],
    '主節の時制にそろえる', GREEN),
  S('so ～ that … と見分けるには、so のすぐあとを見ます。形容詞や副詞が来れば「結果・程度」、that が来れば「目的」です。',
    [bx(10, 12, 300, 50, 'so busy that she couldn\'t eat\n結果「とても忙しくて食べられなかった」', C.red, FILL.red, 12), bx(10, 72, 300, 50, 'so that she could buy a bike\n目的「自転車を買えるように」', C.green, FILL.green, 12), lb(160, 142, 'so のすぐあとを見る', 13, C.ink, 'middle', true)],
    'so のあとが 形容詞 ＝ 結果 ／ that ＝ 目的', MAIN),
  Q('❓日本語でも見分けられますか。→ 見分けられます。「ように」「ために」と訳せれば目的で、so that です。「ので」「ほど」と訳せれば結果で、so ～ that … です。',
    '日本語での見分け方は？', '「～ように」「～ために」→ 目的（so that）\n「～ので」「～ほど」→ 結果（so ～ that）\nI was so busy that I couldn\'t call you.\n→ 「とても忙しかったので、電話できなかった」', '訳し分けが手がかり', PURPLE, 12),
  S('主語が同じなら、in order to や to を使った文にも書きかえられます。主語がちがうときは、so that を使います。',
    [bx(10, 12, 300, 30, 'I studied hard so that I could pass.', C.blue, FILL.blue, 12), bx(10, 46, 300, 30, '＝ I studied hard to pass the exam.', C.green, FILL.green, 12), bx(10, 90, 300, 34, 'She spoke slowly so that I could understand.', C.red, FILL.red, 11), lb(160, 144, '主語がちがうとき（she と I）は so that', 12, C.ink, 'middle', true)],
    '同じ主語 → to ／ ちがう主語 → so that', MAIN),
  S('コンマの付いた so は別物です。I was hungry, so I ate a sandwich. の so は「だから」の意味で、前の文の結果を述べます。that は付きません。',
    [bx(10, 14, 300, 34, 'I was hungry, so I ate a sandwich.', C.blue, FILL.blue, 13), lb(160, 72, '「おなかがすいていた。だから食べた」', 13, C.ink, 'middle', true), bx(10, 94, 300, 34, 'この so ＝ だから（結果）', C.red, FILL.red, 13)],
    'コンマ ＋ so ＝ だから', BLUE),
  sum3('so that ＋ 主語 ＋ can／will ＝ 目的', '過去の文では could ／ would', '「ように」なら目的、「ので」なら結果', 'so that が見分けられた'),
], 'so that ～');

// ── gap_gke_09 資料読み取り①：お知らせ・案内文・ポスター ──
const f09: DiagramFigure = show([
  S('入試では、ポスターや案内文を見て答える問題がよく出ます。この図のポスターを使って、必要な情報を探す手順を学びましょう。まず、見出しの語を目でたどります。',
    [bx(10, 6, 300, 152, undefined, C.main, FILL.warm),
      lb(160, 22, 'Summer English Camp', 14, C.red, 'middle', true),
      lb(20, 42, 'Date: August 3 (Mon.) – August 5 (Wed.)', 11, C.ink, 'start'),
      lb(20, 60, 'Place: Midori Park Center', 11, C.ink, 'start'),
      lb(20, 78, 'Time: 9:00 a.m. – 3:00 p.m.', 11, C.ink, 'start'),
      lb(20, 96, 'Fee: 3,000 yen (Lunch is included.)', 11, C.ink, 'start'),
      lb(36, 112, 'Children under 6 are free.', 11, C.gray, 'start'),
      lb(20, 130, 'Bring: a notebook, a pen, a water bottle', 11, C.ink, 'start'),
      lb(20, 146, 'Sign up by July 20 (Mon.).', 11, C.ink, 'start')],
    '見出しの語を目でたどる', MAIN),
  Q('❓なぜ、設問から先に読むのでしょう。→ 入試は時間が限られているからです。案内文に書いてある情報は多くても、設問が聞くのはその一部だけ。何を探すかを先に決めれば、必要な行だけを読めば済みます。',
    '設問から先に読むのは？', '設問が聞くのは 情報の一部だけ\n① 設問を読んで 探す情報を決める\n② 見出しの語で その行を探す\n③ その行だけを読んで 確かめる', '探す情報を先に決める', GREEN, 13),
  S('設問の言葉と、探す見出しの語を対応させます。「何日間か」は Date の行、「何時に終わるか」は Time の行、「いくら払うか」は Fee の行、「持ち物」は Bring の行です。',
    [bx(10, 8, 148, 30, '何日間？', C.blue, FILL.blue, 12), bx(170, 8, 140, 30, 'Date の行', C.green, FILL.green, 12), bx(10, 44, 148, 30, '何時に終わる？', C.blue, FILL.blue, 12), bx(170, 44, 140, 30, 'Time の行', C.green, FILL.green, 12), bx(10, 80, 148, 30, 'いくら払う？', C.blue, FILL.blue, 12), bx(170, 80, 140, 30, 'Fee の行', C.green, FILL.green, 12), bx(10, 116, 148, 30, '持ち物は？', C.blue, FILL.blue, 12), bx(170, 116, 140, 30, 'Bring の行', C.green, FILL.green, 12)],
    '設問 → 見出しの語', BLUE),
  Q('❓Children under 6 は、6歳の子を含むのでしょうか。→ 含みません。under は「未満」で、その数字を含みません。under 6 は 0歳から5歳まで。6歳の子は、ふつうの料金です。',
    'under 6 に6歳は含まれる？', 'under 6 ＝ 6歳未満\n0・1・2・3・4・5歳 → 無料\n6歳 → 3,000 yen\n数字そのものは 含まれない', 'under ＝ 未満', RED, 13),
  S('期間の日数は、両端を含めて数えます。8月3日（月）から8月5日（水）は、3日、4日、5日で3日間です。5－3＝2 ではありません。',
    [bx(10, 20, 90, 56, '8/3 (Mon.)\n1日め', C.blue, FILL.blue, 12), bx(115, 20, 90, 56, '8/4 (Tue.)\n2日め', C.blue, FILL.blue, 12), bx(220, 20, 90, 56, '8/5 (Wed.)\n3日め', C.blue, FILL.blue, 12), lb(160, 104, '3日間（両端を含める）', 15, C.ink, 'middle', true), lb(160, 130, '× 5 − 3 ＝ 2 日間', 14, C.red, 'middle', true)],
    '日数は 両端を含めて数える', BLUE),
  S('期限を表す語も、区別しましょう。by は「～までに」で、期限の1点です。until は「～までずっと」で、続く線です。Sign up by July 20 は、7月20日が申しこみの最後の日です。',
    [lb(60, 22, 'by July 20', 14, C.red, 'middle', true), ci(60, 50, 7, undefined, C.red, FILL.red), lb(60, 76, '期限の1点', 12, C.ink, 'middle'), lb(210, 22, 'until July 20', 14, C.blue, 'middle', true), ln(150, 50, 270, 50, C.blue, false, 5), ci(270, 50, 7, undefined, C.blue, FILL.blue), lb(210, 76, 'その日までずっと続く', 12, C.ink, 'middle'), bx(10, 100, 300, 40, 'Sign up by July 20.\n7月20日までに申しこむ（最後の日が 20日）', C.red, FILL.red, 12)],
    'by ＝ 期限の点 ／ until ＝ 続く線', RED),
  S('本文と設問は、言いかえられています。Bring は「持っていく」、free は「払わなくてよい」と言いかえられます。語そのものではなく、意味で探しましょう。',
    [bx(10, 12, 144, 34, 'Bring: a pen', C.blue, FILL.blue, 12), ar(156, 29, 166, 29, C.main), bx(166, 12, 144, 34, 'You need a pen.', C.green, FILL.green, 12), bx(10, 58, 144, 34, 'free', C.blue, FILL.blue, 13), ar(156, 75, 166, 75, C.main), bx(166, 58, 144, 34, "don't have to pay", C.green, FILL.green, 11), bx(10, 104, 144, 34, 'included', C.blue, FILL.blue, 13), ar(156, 121, 166, 121, C.main), bx(166, 104, 144, 34, 'no need to bring', C.green, FILL.green, 12)],
    '語ではなく 意味で探す', MAIN),
  sum3('設問を読んで 探す情報を決める', 'under・by・included に印を付ける', '日数は両端を含める', '案内文の読み方が決まった'),
], '資料読み取り①');

// ── gap_gke_10 資料読み取り②：予定表・時刻表・メニュー ──
const f10: DiagramFigure = show([
  S('メニューの値段表です。食べ物と飲み物に値段が付いています。計算をするときは、どの行の値段を使うかを、指でたどって決めます。',
    tab([['Menu', 'Price'], ['Hamburger', '450 yen'], ['Pizza', '600 yen'], ['Salad', '300 yen'], ['Soup', '250 yen'], ['Orange juice', '200 yen'], ['Tea', '150 yen']], 10, [150, 100], 20, 12),
    'メニュー表：行ごとに値段', BLUE),
  S('バスの時刻表です。行は便（No.）、列は場所です。No. 2 の City Hall の時刻は、No. 2 の行と City Hall の列が交わるマス、8:45 です。',
    [...tab([['Bus', 'Station', 'City Hall', 'Library'], ['No. 1', '8:00', '8:15', '8:30'], ['No. 2', '8:30', '8:45', '9:00'], ['No. 3', '9:00', '9:15', '9:30']], 14, [64, 80, 84, 80], 28, 12, [[2, 2]]), lb(160, 140, '行と列の交わるマスを読む', 13, C.ink, 'middle', true)],
    '行と列が交わるマス', RED),
  Q('❓なぜ、条件を一つずつ当てはめるのでしょう。→ 表の問題は、条件がいくつも重なっているからです。一つの条件で、合わない候補を消していくと、答えが一つに絞られます。',
    '条件を一つずつ当てはめるのは？', '条件① 9:15 までに着く\n→ 9:30 着の No. 3 は消える\n条件② いちばん遅く出る\n→ 残りの No. 1 と No. 2 から選ぶ', '候補を消して絞りこむ', GREEN, 13),
  S('計算を確かめましょう。ミカは 800円を持ち、ピザ（600円）と紅茶（150円）を注文します。合計は 750円で、おつりは 800－750＝50円です。',
    [bx(10, 12, 300, 32, 'Pizza 600 ＋ Tea 150 ＝ 750 yen', C.blue, FILL.blue, 13), bx(10, 52, 300, 32, '800 － 750 ＝ 50 yen（おつり）', C.green, FILL.green, 13), bx(10, 92, 300, 32, '検算：50 ＋ 750 ＝ 800', C.red, FILL.red, 13), lb(160, 144, 'おつり ＋ 合計 ＝ 持っているお金', 12, C.ink, 'middle', true)],
    '合計 → おつり → 検算', GREEN),
  S('スープ（250円）も加えるとどうでしょう。750＋250＝1,000円で、800円を超えます。1,000－800＝200円足りないので、買えません。',
    [bx(10, 12, 300, 32, '750 ＋ Soup 250 ＝ 1,000 yen', C.blue, FILL.blue, 13), bx(10, 52, 300, 32, '1,000 ＞ 800（持っているお金）', C.red, FILL.red, 13), bx(10, 92, 300, 32, '1,000 － 800 ＝ 200 yen 足りない', C.red, FILL.red, 13), lb(160, 144, 'No, she can\'t.', 15, C.red, 'middle', true)],
    '合計が持っているお金を超えたら買えない', RED),
  S('時刻表の問題です。「9:15 までに図書館に着きたい」。Library の列を見ると、No. 1 は 8:30、No. 2 は 9:00、No. 3 は 9:30。9:15 以前なのは No. 1 と No. 2 です。その中でいちばん遅いのは No. 2 です。',
    [bx(10, 12, 300, 28, 'No. 1 → 8:30　○（間に合う）', C.green, FILL.green, 13), bx(10, 46, 300, 28, 'No. 2 → 9:00　○（間に合う）', C.green, FILL.green, 13), bx(10, 80, 300, 28, 'No. 3 → 9:30　×（間に合わない）', C.red, FILL.red, 13), lb(160, 132, '間に合うバスのうち 最も遅いのは No. 2', 13, C.ink, 'middle', true)],
    '9:15 以前に着く 最も遅い便', GREEN),
  Q('❓取りちがえやすいのは、どこでしょう。→ 次の4か所です。①列（出発と到着）②合計の足し忘れ③ちょうどの時刻（9:15 ちょうどはふくむ）④午前・午後（a.m. と p.m.）。',
    '取りちがえやすいのは？', '① 列の取りちがえ（出発 or 到着）\n② 2品の合計を足し忘れる\n③ ちょうどの時刻をふくむか\n④ a.m.（午前）と p.m.（午後）', '4つのわなに注意', RED, 13),
  sum3('行と列の交わるマスを読む', '条件を一つずつ当てはめて絞る', '計算は紙に書いて、逆算で検算する', '表の読み取りが落ち着いてできた'),
], '資料読み取り②');

// ── gap_gke_11 リスニング⑥ 音の変化 ──
const f11: DiagramFigure = show([
  S('単語はぜんぶ知っているのに、放送では聞き取れない。それは、英語の音が文の中で変わるからです。変わり方は、5つに整理できます。',
    [bx(10, 8, 144, 34, '① 連結', C.blue, FILL.blue, 14), bx(166, 8, 144, 34, '② 脱落', C.green, FILL.green, 14), bx(10, 50, 144, 34, '③ 同化', C.red, FILL.red, 14), bx(166, 50, 144, 34, '④ はじき音', C.purple, FILL.purple, 14), bx(10, 92, 300, 34, '⑤ 弱形（弱く短くなる語）', C.main, FILL.warm, 14), lb(160, 144, 'この5つを知っていれば 音から文が復元できる', 12, C.ink, 'middle', true)],
    '音が変わる5つのしくみ', MAIN),
  Q('❓なぜ、音は変わるのでしょう。→ 英語は、強く読む語（名詞・動詞・形容詞）を軸にして、息を切らずに一息で言うからです。そのあいだの弱い語は、短くなったり、前後の音と混ざったりします。',
    '音が変わるのは？', '日本語 ＝ 一音ずつ ほぼ同じ長さ\n英語 ＝ 強い語を軸に 一息で言う\n→ 弱い語は 短く・つながる\nだから 聞こえ方が変わる', '強い語を軸に、一息で言う', GREEN, 13),
  S('連結は、語末の子音が次の語の母音にくっつく変化です。an apple は「アナップル」、turn off は「ターノフ」と、一語のように聞こえます。',
    [bx(10, 14, 144, 34, 'an apple', C.blue, FILL.blue, 14), ar(156, 31, 166, 31, C.main), bx(166, 14, 144, 34, 'アナップル', C.green, FILL.green, 14), bx(10, 62, 144, 34, 'turn off', C.blue, FILL.blue, 14), ar(156, 79, 166, 79, C.main), bx(166, 62, 144, 34, 'ターノフ', C.green, FILL.green, 14), lb(160, 122, '子音 ＋ 母音 → つながる', 13, C.ink, 'middle', true)],
    '連結：子音が次の母音に乗る', BLUE),
  S('同化は、隣り合う音が混ざって別の音になる変化です。Did you は「ディジュ」、Would you は「ウジュ」、meet you は「ミーチュ」と聞こえます。',
    [bx(10, 12, 144, 32, 'Did you', C.red, FILL.red, 14), ar(156, 28, 166, 28, C.main), bx(166, 12, 144, 32, 'ディジュ', C.green, FILL.green, 14), bx(10, 54, 144, 32, 'Would you', C.red, FILL.red, 14), ar(156, 70, 166, 70, C.main), bx(166, 54, 144, 32, 'ウジュ', C.green, FILL.green, 14), bx(10, 96, 144, 32, 'meet you', C.red, FILL.red, 14), ar(156, 112, 166, 112, C.main), bx(166, 96, 144, 32, 'ミーチュ', C.green, FILL.green, 14)],
    '同化：d・t ＋ you が混ざる', RED),
  S('脱落とはじき音です。next day の t は聞こえにくく「ネクスデイ」と聞こえます。water は、母音にはさまれた t がラ行に近くなり、「ウォーラー」と聞こえます（アメリカ英語）。',
    [bx(10, 14, 144, 34, 'next day', C.green, FILL.green, 14), ar(156, 31, 166, 31, C.main), bx(166, 14, 144, 34, 'ネクスデイ', C.blue, FILL.blue, 14), lb(160, 66, 't が聞こえにくい（脱落）', 12, C.gray, 'middle'), bx(10, 84, 144, 34, 'water', C.green, FILL.green, 14), ar(156, 101, 166, 101, C.main), bx(166, 84, 144, 34, 'ウォーラー', C.blue, FILL.blue, 14), lb(160, 136, '母音にはさまれた t → ラ行（はじき音）', 12, C.gray, 'middle')],
    '脱落とはじき音', GREEN),
  Q('❓can と can\'t は、どう聞き分けるのでしょう。→ 強さと長さで聞き分けます。can は弱く短く「クン」、can\'t は強く長く「キャーント」。強く長い音が聞こえたら、否定です。',
    'can と can\'t の聞き分けは？', 'can ＝ 「クン」と弱く短い\ncan\'t ＝ 「キャーント」と強く長い\n強く長い音が聞こえたら 否定\n文末の can は強く読む（Yes, I can.）', '強さと長さがヒント', PURPLE, 13),
  S('聞こえた音から英文に直す手順です。①カタカナでメモ ②文法で復元（主語・動詞がそろうか）③意味で確かめる。「ディジュー イート ブレックファスト」は Did you eat breakfast? と復元できます。',
    [...row(['① 聞こえた音を\nメモ', '② 文法で\n復元', '③ 意味で\n確認'], 14, MAIN, 12, 48), bx(10, 84, 300, 30, 'ディジュー イート ブレックファスト', C.blue, FILL.blue, 13), ar(160, 116, 160, 128, C.main), bx(10, 130, 300, 24, 'Did you eat breakfast?', C.green, FILL.green, 13)],
    '音 → メモ → 文法で復元 → 意味で確認', MAIN),
  sum3('連結・脱落・同化・はじき音・弱形', 'can は弱く短く、can\'t は強く長く', '聞こえた音を書き、文法で復元する', '音の変化が読み解けた'),
], 'リスニング⑥');

// ── gap_gke_12 科学技術・情報 ──
const f12: DiagramFigure = show([
  S('科学技術と情報は、入試の長文や英作文に出やすいテーマです。語は品詞ごとに整理すると覚えやすくなります。名詞・動詞・形容詞の代表を見ましょう。',
    [bx(10, 8, 300, 44, '名詞\ntechnology（科学技術） / information（情報）', C.blue, FILL.blue, 12), bx(10, 58, 300, 44, '動詞\ninvent（発明する） / discover（発見する）', C.green, FILL.green, 12), bx(10, 108, 300, 44, '形容詞\nuseful（役に立つ） / convenient（便利な）', C.red, FILL.red, 12)],
    '品詞ごとに整理する', BLUE),
  Q('❓なぜ、派生語でまとめて覚えるのでしょう。→ 語尾のきまりを知ると、1つの語から仲間が増えるからです。-ion は名詞、-er／-or は「人」、-ful は「～に満ちた」、-less は「～がない」。',
    '派生語でまとめるのは？', '-ion ・ -ery ＝ 名詞をつくる\n-er ・ -or ＝ 「～する人」\n-ful ＝ 「～に満ちた」\n-less ＝ 「～がない」', '語尾のきまりで語が増える', GREEN, 13),
  S('派生語の例です。invent（発明する）→ invention（発明）→ inventor（発明家）。use（使う）→ useful（役に立つ）⇔ useless（役に立たない）。',
    [...cells(['invent', 'invention', 'inventor'], 14, BLUE, 13, 34, 8), lb(160, 66, '発明する → 発明 → 発明家', 12, C.gray, 'middle'), ...cells(['use', 'useful', 'useless'], 84, GREEN, 13, 34, 8), lb(160, 136, '使う → 役に立つ ⇔ 役に立たない', 12, C.gray, 'middle')],
    '1語から仲間が増える', MAIN),
  Q('❓invent と discover は、どうちがうのでしょう。→ invent は世の中になかったものを新しく作ること。discover は、もとからあったものを見つけることです。新しい星や新しい魚は、もとからあったので discover です。',
    'invent と discover のちがいは？', 'invent ＝ 新しく作り出す\n　例）電話・機械\ndiscover ＝ もとからあるものを見つける\n　例）新しい星・新しい魚', '作る ＝ invent ／ 見つける ＝ discover', PURPLE, 13),
  S('information と research は、数えられない名詞です。複数形にはしません。a lot of information、some research の形で使います。',
    [bx(10, 14, 300, 34, '○ a lot of information', C.green, FILL.green, 14), bx(10, 56, 300, 34, '× a lot of informations', C.red, FILL.red, 14), bx(10, 98, 300, 34, '○ some research ／ × researches', C.green, FILL.green, 13)],
    '数えられない名詞に s は付けない', RED),
  S('長文の「型」も覚えましょう。科学技術の文章は、ほとんど「便利になった」「しかし問題もある」「私の考えは…」の順に進みます。However の位置で、話の向きが変わります。',
    [...row(['便利になった\nTechnology has\nmade our lives\neasier.', 'しかし問題も\nHowever, it\nalso has some\nproblems.', '私の考え\nIn my opinion,\nwe should ～.'], 14, MAIN, 11, 80, 14)],
    '良い点 → However → 自分の考え', MAIN),
  S('反意語のペアもセットで覚えましょう。useful ⇔ useless、safe ⇔ dangerous、convenient ⇔ inconvenient。ペアで覚えると、選択肢の消去がはやくなります。',
    [bx(10, 12, 300, 30, 'useful（役に立つ） ⇔ useless', C.blue, FILL.blue, 13), bx(10, 48, 300, 30, 'safe（安全な） ⇔ dangerous（危険な）', C.green, FILL.green, 13), bx(10, 84, 300, 30, 'convenient（便利な） ⇔ inconvenient', C.red, FILL.red, 12), lb(160, 138, 'ペアで覚えると 選択肢が消せる', 13, C.ink, 'middle', true)],
    '反意語はペアで覚える', GREEN),
  sum3('テーマ別・品詞別に語を整理する', '語尾のきまりで 派生語を増やす', 'information は数えられない', '科学技術の語がそろった'),
], '科学技術・情報の語彙');

// ── gap_gke_13 健康・食・生活習慣 ──
const f13: DiagramFigure = show([
  S('体調を伝える言い方です。「頭が痛い」は I have a headache. のように、have のあとに痛みの名前を置きます。headache（頭痛）、stomachache（腹痛）、toothache（歯痛）、fever（熱）、cough（せき）。',
    [bx(10, 8, 144, 34, 'a headache', C.blue, FILL.blue, 14), bx(166, 8, 144, 34, 'a stomachache', C.blue, FILL.blue, 14), bx(10, 50, 144, 34, 'a toothache', C.blue, FILL.blue, 14), bx(166, 50, 144, 34, 'a fever', C.green, FILL.green, 14), bx(10, 92, 144, 34, 'a cough', C.green, FILL.green, 14), lb(238, 109, '↑ I have ＋ これ', 12, C.red, 'middle', true)],
    'I have ＋ 痛みや症状', BLUE),
  Q('❓なぜ、名詞は動詞とセットで覚えるのでしょう。→ 日本語の直訳では、動詞が合わないからです。「かぜをひく」は take ではなく catch、「薬を飲む」は drink ではなく take。セットで覚えれば、そのまま使えます。',
    '動詞とセットで覚えるのは？', '「かぜをひく」＝ catch a cold\n「薬を飲む」＝ take medicine\n「休む」＝ take a rest\n「十分に眠る」＝ get enough sleep', '名詞は動詞とセット', GREEN, 13),
  S('生活習慣の言い方です。eat a balanced diet（バランスのとれた食事をする）、stay healthy（健康でいる）、make a habit of ～ing（～する習慣をつける）。',
    [bx(10, 12, 300, 30, 'eat a balanced diet ＝ バランスのよい食事', C.blue, FILL.blue, 12), bx(10, 48, 300, 30, 'stay healthy ＝ 健康でいる', C.green, FILL.green, 13), bx(10, 84, 300, 30, 'make a habit of ～ing ＝ ～する習慣をつける', C.red, FILL.red, 12), bx(10, 120, 300, 30, 'take a rest ＝ 休息をとる', C.main, FILL.warm, 13)],
    '生活習慣の表現', MAIN),
  S('前置詞にも注意しましょう。「～によい」は good for ～、「～に悪い」は bad for ～。日本語の「に」から to を選ばず、for と覚えます。',
    [bx(10, 14, 300, 34, 'Sleep is good for your health.', C.green, FILL.green, 14), bx(10, 60, 300, 34, 'Sugar is bad for your health.', C.red, FILL.red, 14), lb(160, 118, 'good for ／ bad for（to ではない）', 13, C.ink, 'middle', true)],
    'good for ～ ／ bad for ～', GREEN),
  Q('❓sleep や sugar に a や s を付けないのは、なぜでしょう。→ 数えられない名詞だからです。形がなく、1つ2つと数えられないものは、a も複数形も付けません。量は much や a lot of で表します。',
    'sleep に a や s を付けないのは？', 'sleep ・ sugar ・ salt ・ medicine\n→ 数えられない名詞\n× a sleep ・ × sleeps\n○ a lot of sleep ・ some medicine', '数えられない名詞は a も s も付けない', PURPLE, 13),
  S('health と healthy は、品詞がちがいます。health は名詞（健康）、healthy は形容詞（健康的な）。「健康によい食べ物」は、形容詞を使って healthy food と言います。',
    [bx(10, 14, 144, 56, 'health\n名詞「健康」', C.blue, FILL.blue, 14), bx(166, 14, 144, 56, 'healthy\n形容詞「健康的な」', C.green, FILL.green, 13), bx(10, 84, 300, 34, 'healthy food ＝ 体によい食べ物', C.green, FILL.green, 13), lb(160, 138, 'unhealthy ＝ 不健康な', 13, C.gray, 'middle', true)],
    '名詞 health ／ 形容詞 healthy', BLUE),
  S('健康の話題の書き方の型です。①主張 ②理由 ③例の順に書きます。「朝食は大切だ。なぜなら午前中のエネルギーになるから。例えば…」と進めると、短い英作文でもまとまります。',
    [...row(['① 主張\nBreakfast is\nimportant.', '② 理由\nBecause it gives\nus energy.', '③ 例\nFor example,\n～.'], 14, MAIN, 11, 80, 14)],
    '主張 → 理由 → 例', MAIN),
  sum3('動詞とセットで覚える', 'good for ／ bad for の前置詞は for', 'health は名詞、healthy は形容詞', '健康の語彙がそろった'),
], '健康・食・生活習慣の語彙');

export const XF_GKE_FIGURES: Record<string, DiagramFigure> = {
  'xf_gap_gke_01': f01,
  'xf_gap_gke_02': f02,
  'xf_gap_gke_03': f03,
  'xf_gap_gke_04': f04,
  'xf_gap_gke_05': f05,
  'xf_gap_gke_06': f06,
  'xf_gap_gke_07': f07,
  'xf_gap_gke_08': f08,
  'xf_gap_gke_09': f09,
  'xf_gap_gke_10': f10,
  'xf_gap_gke_11': f11,
  'xf_gap_gke_12': f12,
  'xf_gap_gke_13': f13,
};

export const XF_GKE_SECTIONS: Record<string, string> = {
  'gap_gke_01#0': 'xf_gap_gke_01',
  'gap_gke_02#0': 'xf_gap_gke_02',
  'gap_gke_03#0': 'xf_gap_gke_03',
  'gap_gke_04#0': 'xf_gap_gke_04',
  'gap_gke_05#0': 'xf_gap_gke_05',
  'gap_gke_06#0': 'xf_gap_gke_06',
  'gap_gke_07#0': 'xf_gap_gke_07',
  'gap_gke_08#0': 'xf_gap_gke_08',
  'gap_gke_09#0': 'xf_gap_gke_09',
  'gap_gke_10#0': 'xf_gap_gke_10',
  'gap_gke_11#0': 'xf_gap_gke_11',
  'gap_gke_12#0': 'xf_gap_gke_12',
  'gap_gke_13#0': 'xf_gap_gke_13',
};
