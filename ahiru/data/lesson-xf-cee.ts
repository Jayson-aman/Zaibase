// 中学受験 英語（教科書単元 30 件）の「動く図解スライド」。
// 「なぜ？」の連鎖で7枚以上。単元の節（section）ごとに 1 枚の図解をひもづける。
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

// 下の帯（y=170 から）に、そのスライドのひとことを出す。\n で改行できる。
const cap = (t: string, c: Col = BLUE, size = 12): DiagramElement => {
  const n = t.split('\n').length;
  return bx(14, 172, 292, 14 + 15 * n, t, c[0], c[1], size);
};

// 1枚のスライド＝まっさらな図＋下の帯
const S = (note: string, top: DiagramElement[], capText: string, c: Col = BLUE, size = 12) => ({
  note,
  add: fresh(...top, cap(capText, c, size)),
});

// 色つきの箱
const w = (x: number, y: number, ww: number, h: number, t: string, c: Col = MAIN, size = 12): DiagramElement =>
  bx(x, y, ww, h, t, c[0], c[1], size);

// ひとこと（中央そろえの文字）
const t = (x: number, y: number, s: string, size = 12, color: string = C.ink, bold = false): DiagramElement =>
  lb(x, y, s, size, color, 'middle', bold);

// 「なぜ？」の問い → 答え、の1組（高さ 0〜160 のなか）
const qa = (q: string, a: string, c: Col = BLUE, aSize = 13): DiagramElement[] => [
  bx(12, 6, 296, 38, 'なぜ？ ' + q, PURPLE[0], PURPLE[1], 12),
  ar(160, 46, 160, 60, PURPLE[0]),
  bx(12, 62, 296, 94, a, c[0], c[1], aSize),
];

const units = (s: string) => [...s].reduce((u, ch) => u + (ch.charCodeAt(0) < 256 ? 0.55 : 1), 0);

// 英語の語を横にならべた箱（語順・文の部品）。全体を中央にそろえる。
const chips = (items: [string, Col][], y: number, h = 28, size = 12, gap = 5): DiagramElement[] => {
  let ws = items.map(([s]) => units(s) * size + 14);
  const total = () => ws.reduce((a, b) => a + b, 0) + gap * (items.length - 1);
  let sz = size;
  while (total() > 304 && sz > 8) { sz -= 0.5; ws = items.map(([s]) => units(s) * sz + 14); }
  let x = (320 - total()) / 2;
  return items.map(([s, c], i) => {
    const el = bx(x, y, ws[i], h, s, c[0], c[1], sz);
    x += ws[i] + gap;
    return el;
  });
};

// 左の箱 → 右の箱（1行ぶん）
const pair = (a: string, b: string, y: number, ca: Col = BLUE, cb: Col = GREEN, h = 26, size = 12): DiagramElement[] => [
  w(8, y, 140, h, a, ca, size),
  ar(150, y + h / 2, 170, y + h / 2, C.main),
  w(172, y, 140, h, b, cb, size),
];

// 表（見出し行＋本文行）。cols は各列の幅。
const table = (head: string[], rows: string[][], x: number, y: number, cols: number[], rh = 24, size = 11, c: Col = BLUE): DiagramElement[] => {
  const out: DiagramElement[] = [];
  let cx = x;
  head.forEach((h, i) => { out.push(bx(cx, y, cols[i], rh, h, c[0], c[0] === C.blue ? '#BAE6FD' : FILL.yellow, size)); cx += cols[i]; });
  rows.forEach((r, j) => {
    let xx = x;
    r.forEach((s, i) => { out.push(bx(xx, y + rh * (j + 1), cols[i], rh, s, C.gray, '#FFFFFF', size)); xx += cols[i]; });
  });
  return out;
};

const F: Record<string, DiagramFigure> = {};
const SEC: Record<string, string> = {};
const reg = (id: string, sec: number, fig: DiagramFigure) => { F['xf_' + id] = fig; SEC[id + '#' + sec] = 'xf_' + id; };

// ── would①：would like to（節0: would like と would like to） ──
reg('eigo_s172', 0, show([
  S('お店（みせ）で I want a hamburger. と言っても通じますが、子どもっぽく聞こえます。大人は I\'d like a hamburger. と言います。would like は want のていねいな言いかえです。',
    [t(160, 16, 'お店で注文するとき', 12, C.gray), ...chips([['I want a hamburger.', GRAY]], 34, 32, 14), t(160, 82, '↓ ていねいに言いかえる', 12, C.main, true), ...chips([['I\'d like a hamburger.', GREEN]], 100, 32, 14)],
    'want より would like がていねい', GREEN),
  S('❓なぜ would like だとていねいに聞こえるの？ → want は「ほしい！」とまっすぐ言う形、would like は気持ちを少しやわらげて「ほしいのですが」と言う形だからです。店員さんや初めて会う人には、やわらかいほうを使います。',
    qa('would like だとていねいなのは？', 'want ＝「ほしい！」\n　まっすぐ言う（友だち・家族に）\n\nwould like ＝「ほしいのですが」\n　やわらかく言う（店員さん・目上の人に）', GREEN, 13),
    'ていねいさがちがうだけで、意味はほぼ同じ', GREEN),
  S('形の一つ目は would like ＋ 名詞（めいし）です。I would like a cup of tea. は「紅茶を一杯いただきたいのですが」。会話ではふつう短縮形（たんしゅくけい）の I\'d like を使います。',
    [...chips([['I would like', BLUE], ['a cup of tea.', MAIN]], 20, 32, 14), t(160, 62, '↓ 短縮形（I would → I\'d）', 12, C.main, true), ...chips([['I\'d like', BLUE], ['this one, please.', MAIN]], 80, 32, 14), t(160, 132, '「これをください」', 12, C.gray)],
    'would like ＋ 名詞 ＝ 〜がほしいのですが', BLUE),
  S('形の二つ目は would like to ＋ 動詞の原形（どうしのげんけい）です。I would like to go with you. は「あなたといっしょに行きたいのですが」。to のうしろは必ず動詞のもとの形です。',
    [...chips([['I would like to', BLUE], ['go', RED], ['with you.', MAIN]], 24, 32, 14), t(160, 70, '↑ 動詞のもとの形（原形）', 12, C.red, true), ...chips([['I\'d like to', BLUE], ['ask', RED], ['you a question.', MAIN]], 96, 32, 14), t(160, 142, '「質問したいのですが」', 12, C.gray)],
    'would like to ＋ 原形 ＝ 〜したいのですが', BLUE),
  S('❓なぜ to のうしろは原形で、going や goes ではだめなの？ → would like to は want to の仲間だからです。want to go と同じように、to のあとは動詞のもとの形を置きます。',
    [bx(12, 6, 296, 30, 'なぜ？ to のうしろが原形なのは？', PURPLE[0], PURPLE[1], 12), ...pair('I want to go', 'I would like to go', 50, GRAY, BLUE, 30, 13), t(160, 100, 'どちらも go（原形）', 12, C.green, true), w(40, 118, 240, 34, '× I\'d like to going　（-ing はだめ）', RED, 13)],
    'want to の形と同じ。to のあとは原形', RED),
  S('❓主語（しゅご）が he や she になったら、would も変わるの？ → 変わりません。would は助動詞（じょどうし）なので、he でも she でも would のままです。want だと wants と s がつくのとちがいます。',
    [bx(12, 6, 296, 28, 'なぜ？ 主語が he のとき would は？', PURPLE[0], PURPLE[1], 12), ...chips([['He', BLUE], ['wants', RED], ['to see you.', MAIN]], 48, 30, 14), t(160, 90, 'want は s がつく', 11, C.red), ...chips([['He', BLUE], ['would', GREEN], ['like to see you.', MAIN]], 108, 30, 14), t(160, 150, 'would は s がつかない', 11, C.green, true)],
    '助動詞の would は、主語が何でも同じ形', GREEN),
  S('want と would like の使い分けを確かめましょう。友だちや家族には I want some water.、店員さんや目上の人には I\'d like some water.。意味はほぼ同じで、ていねいさだけがちがいます。',
    [w(10, 16, 140, 30, '友だち・家族に', GRAY, 13), w(170, 16, 140, 30, '店員・目上の人に', GREEN, 13), ar(80, 48, 80, 70, C.gray), ar(240, 48, 240, 70, C.green), w(10, 72, 140, 44, 'I want some\nwater.', GRAY, 13), w(170, 72, 140, 44, 'I\'d like some\nwater.', GREEN, 13), t(160, 140, '水がほしい　／　お水をいただけますか', 11, C.gray)],
    '相手によって使い分ける', MAIN),
  S('まとめです。would like ＝ want、would like to ＝ want to という対応を覚えておけば、書きかえ問題はすぐ解けます。うしろに名詞が来るか、to ＋ 動詞の原形が来るかを見分けます。',
    [w(14, 14, 290, 36, 'would like ＝ want', BLUE, 14), w(14, 58, 290, 36, 'would like to ＝ want to', GREEN, 14), w(14, 102, 290, 44, '短縮形 I\'d like ／ I\'d like to\n主語がかわっても would は同じ', MAIN, 12)],
    'ていねいに言うなら would like', YELLOW),
], 'would like ＝ want のていねいな形'));

// ── Shall I 〜?（節0: Shall I 〜? の形と場面） ──
reg('eigo_s174', 0, show([
  S('Shall I carry your bag? は「私がかばんを持ちましょうか」という申し出（もうしで）です。困っている人を見かけたときに、自分から手助けを言い出す形です。',
    [w(10, 24, 80, 50, '重い荷物の人', GRAY, 12), w(230, 24, 80, 50, '私', GREEN, 14), ar(228, 56, 94, 56, C.green), t(160, 38, 'Shall I carry your bag?', 10, C.green, true), t(160, 100, '「私がかばんを持ちましょうか」', 12, C.ink, true), t(160, 130, '自分から言い出す', 11, C.gray)],
    'Shall I 〜? ＝ 私が〜しましょうか', GREEN),
  S('❓なぜ Shall I の I が大事なの？ → I（私）が動く、と決まっているからです。Shall I で始まったら、動くのは話している自分。相手に何かをしてもらうわけではありません。',
    qa('I がなぜ大事？', 'Shall I 〜?\n　動くのは「私」（話している自分）\n\n相手は「お願いします」か\n「けっこうです」と答えるだけ', GREEN, 13),
    '動くのは I（私）', GREEN),
  S('形は Shall I ＋ 動詞の原形です。Shall I open the window?（窓を開けましょうか）、Shall I help you?（お手伝いしましょうか）、Shall I call a taxi for you?（タクシーを呼びましょうか）。',
    [...chips([['Shall I', BLUE], ['open', RED], ['the window?', MAIN]], 14, 28, 13), ...chips([['Shall I', BLUE], ['help', RED], ['you?', MAIN]], 54, 28, 13), ...chips([['Shall I', BLUE], ['call', RED], ['a taxi for you?', MAIN]], 94, 28, 13), t(160, 140, '赤い語（動詞）はぜんぶ原形', 11, C.red, true)],
    'Shall I ＋ 動詞の原形 ＋ 〜?', BLUE),
  S('❓なぜ to をつけて Shall I to help you? としないの？ → shall も助動詞（じょどうし）だからです。can や will と同じ仲間なので、うしろには to なしで原形が来ます。',
    [bx(12, 6, 296, 30, 'なぜ？ Shall I to help? はなぜ誤り？', PURPLE[0], PURPLE[1], 12), w(20, 46, 130, 30, 'Can I help', BLUE, 13), w(170, 46, 130, 30, 'Will I help', BLUE, 13), w(95, 86, 130, 30, 'Shall I help', GREEN, 13), t(160, 134, '助動詞のうしろは to なしの原形', 12, C.ink, true), t(160, 152, '× Shall I to help you?', 12, C.red, true)],
    '助動詞のうしろは、to なしの原形', RED),
  S('申し出を受ける答えは Yes, please.（お願いします）。ことわるときは No, thank you. I\'m all right.（けっこうです。だいじょうぶです）です。ありがとうの気持ちをそえるのがポイントです。',
    [w(10, 10, 300, 28, 'Shall I carry your bag?', MAIN, 14), ar(80, 40, 80, 60, C.green), ar(240, 40, 240, 60, C.red), w(10, 62, 140, 40, 'Yes, please.\n（お願いします）', GREEN, 13), w(170, 62, 140, 40, 'No, thank you.\nI\'m all right.', RED, 12), t(160, 128, 'Thank you. That\'s very kind of you.', 11, C.gray), t(160, 146, '（ありがとう。ご親切に）', 11, C.gray)],
    '答えは「お願いします」か「けっこうです」', GREEN),
  S('❓なぜ Yes, let\'s. と答えてはいけないの？ → let\'s は「いっしょにしよう」という意味だからです。Shall I は私ひとりが動く申し出なので、いっしょにするという返事は合いません。',
    [bx(12, 6, 296, 30, 'なぜ？ Yes, let\'s. が誤りなのは？', PURPLE[0], PURPLE[1], 12), w(10, 48, 140, 50, 'Shall I 〜?\n私が動く', GREEN, 13), w(170, 48, 140, 50, 'Yes, let\'s.\nいっしょに動く', RED, 13), t(160, 72, '×', 18, C.red, true), t(160, 128, 'だから please で答える', 12, C.ink, true)],
    'Shall I はひとり、let\'s はいっしょ', RED),
  S('会話の例です。A: This box is very heavy.（この箱、とても重いんです）B: Shall I help you?（お手伝いしましょうか）A: Yes, please. Thank you very much.（はい、お願いします。ありがとうございます）。',
    [w(10, 8, 300, 34, 'A: This box is very heavy.', GRAY, 13), w(10, 50, 300, 34, 'B: Shall I help you?', GREEN, 13), w(10, 92, 300, 34, 'A: Yes, please. Thank you very much.', BLUE, 13), t(160, 146, '困っている → 申し出 → お願いします', 11, C.gray)],
    '困っている人に申し出る流れ', BLUE),
  S('まとめです。Shall I ＋ 原形 ＝「私が〜しましょうか」。答えは Yes, please. か No, thank you.。Yes, let\'s. は Shall we 〜?（いっしょに）の答えなので取りちがえません。',
    [w(14, 14, 290, 34, 'Shall I ＋ 原形 ＝ 私が〜しましょうか', GREEN, 13), w(14, 56, 290, 34, '答え：Yes, please. ／ No, thank you.', BLUE, 13), w(14, 98, 290, 34, '× Yes, let\'s. （これは Shall we 〜? の答え）', RED, 12)],
    '主語が I なら「お願いします」', YELLOW),
], 'Shall I 〜? ＝ 私が〜しましょうか'));

// ── Shall we 〜? と Let's 〜.（節0: Shall we 〜? と Let's 〜. の形） ──
reg('eigo_s175', 0, show([
  S('Shall we dance? は「いっしょにおどりませんか」。Shall I dance? なら「私がおどりましょうか」で、意味がまるでちがいます。I と we の一語で、申し出（もうしで）にもさそいにも変わります。',
    [w(10, 16, 140, 40, 'Shall we dance?', BLUE, 14), w(170, 16, 140, 40, 'Shall I dance?', GREEN, 14), t(80, 76, 'いっしょに', 12, C.blue, true), t(240, 76, '私が', 12, C.green, true), t(80, 96, 'おどりませんか', 12), t(240, 96, 'おどりましょうか', 12), t(160, 134, 'we ＝ さそい　　I ＝ 申し出', 12, C.main, true)],
    'we ならいっしょ、I なら私ひとり', MAIN),
  S('さそう言い方の一つ目は Shall we ＋ 動詞の原形（どうしのげんけい）です。Shall we play tennis after school?（放課後にテニスをしませんか）。少していねいで、相手の気持ちをたずねるひびきがあります。',
    [...chips([['Shall we', BLUE], ['play', RED], ['tennis after school?', MAIN]], 24, 32, 13), t(160, 70, '↑ 動詞の原形', 11, C.red), ...chips([['Shall we', BLUE], ['go', RED], ['to the museum?', MAIN]], 90, 32, 13), t(160, 140, '「博物館に行きましょうか」', 12, C.gray)],
    'Shall we ＋ 原形 〜?（疑問文）', BLUE),
  S('二つ目は Let\'s ＋ 動詞の原形です。Let\'s play tennis after school.（放課後にテニスをしよう）。Let\'s は Let us の短縮形（たんしゅくけい）で、疑問文ではないのでピリオドで終わります。',
    [...chips([['Let\'s', GREEN], ['play', RED], ['tennis after school.', MAIN]], 24, 32, 13), t(160, 68, 'Let\'s ＝ Let us', 13, C.green, true), ...chips([['Let\'s', GREEN], ['go', RED], ['to the museum.', MAIN]], 92, 32, 13), t(160, 142, '文の終わりは「.」（ピリオド）', 12, C.gray)],
    'Let\'s ＋ 原形 .（さそう文）', GREEN),
  S('❓なぜ Let\'s のうしろは to play や playing ではだめなの？ → Let\'s は Let us、つまり「私たちに〜させて」の形で、let のうしろには人＋動詞の原形が来るからです。だから play は原形のままです。',
    [bx(12, 6, 296, 30, 'なぜ？ × Let\'s to play ／ × Let\'s playing', PURPLE[0], PURPLE[1], 12), ...chips([['Let', BLUE], ['us', GRAY], ['play', RED]], 52, 30, 14), t(160, 98, '↓ 短くすると', 12, C.main, true), ...chips([['Let\'s', GREEN], ['play', RED]], 114, 30, 14), t(160, 154, 'play は原形のまま', 12, C.ink, true)],
    'let のうしろは「人＋原形」', GREEN),
  S('否定（ひてい）の「〜するのはやめよう」は Let\'s not ＋ 原形 です。Let\'s not go out today.（今日は出かけるのはやめよう）。not は Let\'s のすぐうしろに置きます。',
    [...chips([['Let\'s', GREEN], ['not', RED], ['go out today.', MAIN]], 24, 32, 14), t(160, 66, '↑ Let\'s のすぐうしろ', 12, C.red, true), w(30, 92, 260, 32, '× Let\'s don\'t go out today.', RED, 14), t(160, 146, 'don\'t は使わない', 12, C.red, true)],
    '〜するのはやめよう ＝ Let\'s not ＋ 原形', RED),
  S('❓Shall we と Let\'s はどうちがうの？ → 意味はほぼ同じです。ちがいは文の形で、Shall we 〜? は疑問文なので「?」で終わり、Let\'s 〜. はさそう文なので「.」で終わります。',
    qa('Shall we と Let\'s のちがいは？', 'Shall we go shopping?\n　疑問文 → 「?」で終わる\n\nLet\'s go shopping.\n　さそう文 → 「.」で終わる', BLUE, 13),
    '書き終えたら文末の記号を確かめる', BLUE),
  S('書きかえもできます。Shall we go shopping? ＝ Let\'s go shopping. ＝ Why don\'t we go shopping?。どれも「買い物に行きましょう」というほぼ同じ意味で、書きかえ問題でそのまま出ます。',
    [w(10, 14, 300, 32, 'Shall we go shopping?', BLUE, 14), t(160, 62, '＝', 16, C.main, true), w(10, 74, 300, 32, 'Let\'s go shopping.', GREEN, 14), t(160, 122, '＝', 16, C.main, true), w(10, 132, 300, 32, 'Why don\'t we go shopping?', MAIN, 14)],
    '三つともほぼ同じ意味', YELLOW),
  S('まとめです。Shall we ＋ 原形 ? と Let\'s ＋ 原形 . は、どちらも「いっしょに〜しよう」。うしろは原形、否定は Let\'s not。主語が I の Shall I 〜? と取りちがえないようにします。',
    [w(14, 12, 290, 32, 'Shall we ＋ 原形 ?　＝　Let\'s ＋ 原形 .', BLUE, 13), w(14, 52, 290, 32, 'うしろは原形（× to play ／ × playing）', GREEN, 12), w(14, 92, 290, 32, '否定は Let\'s not ＋ 原形', RED, 13), w(14, 132, 290, 28, 'Shall I 〜? は「私が」。別もの', GRAY, 12)],
    'さそう文は we と Let\'s', YELLOW),
], 'Shall we 〜? と Let\'s 〜. ＝ いっしょに〜しよう'));

// ── 提案・申し出への答え方のまとめ（節0: 「だれがするか」で返事が決まる） ──
reg('eigo_s176', 0, show([
  S('「手伝いましょうか」と言われて「はい、お願いします」と返すとき、英語では Yes, please. です。ところが Shall we 〜? には Yes, let\'s. と答えます。同じ「はい」でも、返事は決まっています。',
    [w(10, 16, 140, 36, 'Shall I help you?', GREEN, 13), ar(150, 34, 170, 34, C.main), w(172, 16, 138, 36, 'Yes, please.', GREEN, 14), w(10, 72, 140, 36, 'Shall we go?', BLUE, 13), ar(150, 90, 170, 90, C.main), w(172, 72, 138, 36, 'Yes, let\'s.', BLUE, 14), t(160, 134, '同じ「はい」でも返事がちがう', 12, C.ink, true)],
    'たずね方で、返事の形が決まる', MAIN),
  S('❓なぜ返事の形が変わるの？ → 動作をするのが「だれか」がちがうからです。私がする・いっしょにする・相手がする、の三つに分けて考えます。',
    qa('返事の形が変わるのは？', '動作をするのは だれ？\n\n① 私がする（してもらう側）\n② いっしょにする\n③ 相手がする', MAIN, 14),
    'だれがするかで返事が決まる', MAIN),
  S('一つ目。相手が「私が〜しましょうか」と申し出る場合です。Shall I 〜? や Would you like 〜? には、Yes, please.（お願いします）か No, thank you.（けっこうです）で答えます。',
    [w(10, 10, 300, 30, 'Shall I 〜?　／　Would you like 〜?', GREEN, 13), ar(80, 42, 80, 62, C.green), ar(240, 42, 240, 62, C.red), w(10, 64, 140, 40, 'Yes, please.', GREEN, 14), w(170, 64, 140, 40, 'No, thank you.', RED, 14), t(160, 130, '申し出を受ける・ことわる', 12, C.ink, true)],
    '申し出 → Yes, please. / No, thank you.', GREEN),
  S('二つ目。いっしょにする場合です。Shall we 〜? や Let\'s 〜. には、Yes, let\'s.（そうしましょう）か No, let\'s not.（やめておきましょう）で答えます。That\'s a good idea. や Sounds good. でもかまいません。',
    [w(10, 10, 300, 30, 'Shall we 〜?　／　Let\'s 〜.', BLUE, 13), ar(80, 42, 80, 62, C.blue), ar(240, 42, 240, 62, C.red), w(10, 64, 140, 40, 'Yes, let\'s.', BLUE, 14), w(170, 64, 140, 40, 'No, let\'s not.', RED, 14), t(160, 130, 'That\'s a good idea. ／ Sounds good.', 12, C.gray)],
    'さそい → Yes, let\'s. / No, let\'s not.', BLUE),
  S('三つ目。相手にしてもらう（頼む）場合です。Can you 〜? や Could you 〜? には、Sure.（いいですよ）や Of course. で引き受けます。できないときは I\'m sorry, I can\'t. と答えます。',
    [w(10, 10, 300, 30, 'Can you 〜?　／　Could you 〜?', MAIN, 13), ar(80, 42, 80, 62, C.green), ar(240, 42, 240, 62, C.red), w(10, 64, 140, 40, 'Sure. ／ Of course.', GREEN, 13), w(170, 64, 140, 40, 'I\'m sorry,\nI can\'t.', RED, 13), t(160, 130, '頼まれごとを引き受ける・ことわる', 12, C.ink, true)],
    '頼み → Sure. / I\'m sorry, I can\'t.', MAIN),
  S('❓Shall I 〜? に Yes, let\'s. と答えるとどうなるの？ → 「いっしょにしましょう」という意味になってしまい、場面に合いません。shall という語だけを見て決めずに、I か we かを必ず確かめます。',
    [bx(12, 6, 296, 30, 'なぜ？ Shall I 〜? に Yes, let\'s. ？', PURPLE[0], PURPLE[1], 12), w(10, 48, 140, 44, 'Shall I help you?\n私が手伝う', GREEN, 12), w(170, 48, 140, 44, 'Yes, let\'s.\nいっしょにやる', RED, 12), t(160, 70, '×', 18, C.red, true), t(160, 118, '○ Yes, please.', 14, C.green, true), t(160, 142, 'I か we かを見てから答える', 12, C.ink)],
    'shall だけで決めない', RED),
  S('練習です。Let\'s play catch in the park. → Yes, let\'s.。Shall I help you with your homework? → Yes, please.。Could you open the door? → Sure.。三つの形を、場面とセットで言えるようにします。',
    [w(8, 10, 304, 34, 'Let\'s play catch.  →  Yes, let\'s.', BLUE, 13), w(8, 52, 304, 34, 'Shall I help you?  →  Yes, please.', GREEN, 13), w(8, 94, 304, 34, 'Could you open the door?  →  Sure.', MAIN, 13)],
    '三つの形を場面で言えるように', YELLOW),
  S('まとめです。Yes, please. は「してもらう」とき、Yes, let\'s. は「いっしょにする」とき、Sure. は「してあげる」ときの返事です。この三つを場面とセットで覚えます。',
    [w(14, 14, 290, 36, 'Yes, please. ＝ してもらう', GREEN, 14), w(14, 58, 290, 36, 'Yes, let\'s. ＝ いっしょにする', BLUE, 14), w(14, 102, 290, 36, 'Sure. ＝ してあげる', MAIN, 14)],
    'だれがするかを見て返事を選ぶ', YELLOW),
], '返事は「だれがするか」で決まる'));

// ── Could you 〜?（節1: 道をたずねる会話） ──
reg('eigo_s177', 1, show([
  S('道でこまったとき、Where is the station? だけではぶっきらぼうに聞こえます。Excuse me. Could you tell me the way to the station?（すみません、駅へ行く道を教えていただけませんか）と言えば、ぐっとていねいです。',
    [w(10, 14, 300, 32, 'Where is the station?', GRAY, 14), t(160, 62, '↓ ていねいに', 12, C.main, true), w(10, 76, 300, 62, 'Excuse me.\nCould you tell me the way\nto the station?', GREEN, 14)],
    'Could you 〜? でていねいにたのむ', GREEN),
  S('❓この could は「できた」という過去の意味なの？ → ちがいます。疑問文の Could you 〜? は、過去ではなくていねいさを出す形です。Can you ＜ Could you の順でていねいになります。',
    [bx(12, 6, 296, 28, 'なぜ？ Could は「できた」？', PURPLE[0], PURPLE[1], 12), w(30, 44, 260, 30, 'Can you 〜?　友だちに', GRAY, 13), w(30, 80, 260, 30, 'Will you 〜?　友だち・家族に', BLUE, 13), w(30, 116, 260, 36, 'Could / Would you 〜?\n目上の人・初めての人に', GREEN, 12)],
    'Could you ＝ ていねいな依頼（いらい）', GREEN),
  S('続けて「どこにあるか」を言うときは、語順（ごじゅん）に注意します。Could you tell me where the station is? のように、where のうしろは「主語＋動詞」の順です。',
    [...chips([['Could you tell me', BLUE], ['where', MAIN], ['the station', RED], ['is?', GREEN]], 22, 32, 12), t(160, 68, '疑問詞 → 主語 → 動詞', 12, C.ink, true), w(30, 90, 260, 30, '× where is the station', RED, 14), w(30, 126, 260, 30, '○ where the station is', GREEN, 14)],
    'tell me のあとは「疑問詞＋主語＋動詞」', GREEN),
  S('❓なぜ is が後ろに回るの？ → Where is the station? は、それだけで一つの疑問文です。ほかの文の中に入れるときは、ふつうの文の語順（主語のあとに動詞）にもどすからです。Do you know what this is? も同じです。',
    [bx(12, 6, 296, 30, 'なぜ？ なぜ語順が変わる？', PURPLE[0], PURPLE[1], 12), w(10, 46, 300, 30, 'Where is the station?　（疑問文）', GRAY, 13), ar(160, 78, 160, 92, C.main), w(10, 94, 300, 30, 'Could you tell me ___ ?', BLUE, 13), t(160, 146, 'where the station is ＝ 文の中に入る形', 12, C.green, true)],
    '文の中に入れると、ふつうの語順にもどる', BLUE),
  S('では、教えてもらった道を地図で追ってみましょう。駅へ行きたい私は、いまこの道の下の端にいます。最初の答えは Go straight along this street.（この通りをまっすぐ行ってください）です。',
    [ln(60, 158, 60, 30, '#D6D0C8', false, 14), ln(20, 116, 100, 116, '#D6D0C8', false, 14), ln(20, 76, 300, 76, '#D6D0C8', false, 14), ci(60, 148, 9, '私', C.blue, FILL.blue, 10), w(170, 28, 100, 30, '駅 station', MAIN, 11), ar(60, 138, 60, 100, C.green), t(215, 118, 'Go straight', 11, C.green, true), t(215, 136, 'along this street.', 11, C.green, true)],
    'Go straight along this street.', GREEN),
  S('次は Turn right at the second corner.（二つ目の角を右に曲がってください）です。一つ目の角を通りすぎて、二つ目の角まで進み、そこで右に曲がります。',
    [ln(60, 158, 60, 30, '#D6D0C8', false, 14), ln(20, 116, 100, 116, '#D6D0C8', false, 14), ln(20, 76, 300, 76, '#D6D0C8', false, 14), w(170, 28, 100, 30, '駅 station', MAIN, 11), t(24, 104, '1つ目', 10, C.gray, true), t(24, 64, '2つ目', 10, C.red, true), ar(60, 148, 60, 86, C.green), ar(60, 76, 130, 76, C.red), t(215, 118, 'Turn right at the', 11, C.red, true), t(215, 136, 'second corner.', 11, C.red, true)],
    'Turn right at the second corner.', RED),
  S('最後は You\'ll see it on your left.（左手に見えますよ）です。右に曲がって進むと、左がわの上に駅が見えてきます。右へ向かって歩くと、左は上のほうだからです。',
    [ln(60, 158, 60, 30, '#D6D0C8', false, 14), ln(20, 116, 100, 116, '#D6D0C8', false, 14), ln(20, 76, 300, 76, '#D6D0C8', false, 14), w(170, 28, 100, 30, '駅 station', GREEN, 11), ar(60, 148, 60, 86, C.gray), ar(60, 76, 230, 76, C.gray), ar(190, 70, 190, 62, C.green), t(215, 118, 'You\'ll see it', 11, C.green, true), t(215, 136, 'on your left.', 11, C.green, true), t(215, 100, '↑ 左がわ', 11, C.green)],
    'You\'ll see it on your left.', GREEN),
  S('まとめです。道をたずねるときは Could you tell me where ○○ is? と、語順を「疑問詞＋主語＋動詞」にします。道を教える答えは Go / Turn のような命令文（めいれいぶん）で、ていねいにするなら please をつけます。',
    [w(10, 10, 300, 36, 'Could you tell me\nwhere the station is?', GREEN, 13), w(10, 56, 300, 30, 'Go straight. Turn right. (please)', BLUE, 13), w(10, 96, 300, 30, 'You\'ll see it on your left.', MAIN, 13), t(160, 144, '知らないときは I\'m a stranger here.', 11, C.gray)],
    '道案内の型は、ぜんぶ決まっている', YELLOW),
], 'Could you tell me ...? と道案内'));

// ── May I 〜? / Could I 〜?（節0: 許可を求める三つの言い方） ──
reg('eigo_s178', 0, show([
  S('写真をとってよいか聞くとき、Can I take a picture? でも通じますが、初めて会う人には May I take a picture? のほうが安心です。どちらも自分が動作をする許可（きょか）を求める形で、主語は I です。',
    [w(10, 14, 300, 32, 'May I take a picture?', BLUE, 15), t(160, 66, '「写真をとってもよろしいですか」', 12, C.ink), w(70, 86, 180, 30, '主語は I（私が する）', GREEN, 13), t(160, 140, '自分が動くので、相手に許しを求める', 12, C.gray)],
    'May I 〜? ＝ 〜してもよろしいですか', BLUE),
  S('許可を求める言い方は三つあります。Can I 〜?（〜してもいい？）は友だちに、May I 〜?（〜してもよろしいですか）は先生や目上の人に、Could I 〜?（〜させていただけますか）はいちばんていねいです。',
    [w(20, 12, 280, 36, 'Can I 〜?　友だちに', GRAY, 14), ar(160, 50, 160, 60, C.main), w(20, 62, 280, 36, 'May I 〜?　先生・目上の人に', BLUE, 14), ar(160, 100, 160, 110, C.main), w(20, 112, 280, 36, 'Could I 〜?　いちばんていねい', GREEN, 14)],
    'ていねいさ　Can I ＜ May I ＜ Could I', GREEN),
  S('なぜ May I 〜? と Could you 〜? を取りちがえやすいの？ → どちらもていねいな形で、日本語に直すと似ているからです。見分けるには、I で始まるか you で始まるかを見ます。I なら自分が動き、you なら相手が動きます。',
    [bx(12, 6, 296, 28, 'なぜ？ May I と Could you のちがいは？', PURPLE[0], PURPLE[1], 12), w(10, 44, 140, 50, 'May I 〜?\n私がしてよい？', BLUE, 13), w(170, 44, 140, 50, 'Could you 〜?\nあなたがして', GREEN, 13), t(80, 112, '許可を求める', 12, C.blue, true), t(240, 112, 'たのむ', 12, C.green, true), t(160, 148, 'I か you かで意味が決まる', 12, C.ink, true)],
    '自分がする → I　相手がする → you', MAIN),
  S('答え方です。承諾（しょうだく）は Sure. / Of course. / Certainly. / Go ahead.（どうぞ）。ことわるときは I\'m sorry, but you can\'t. や I\'m afraid not. と言います。',
    [w(10, 8, 300, 28, 'May I come in?', BLUE, 14), ar(80, 38, 80, 56, C.green), ar(240, 38, 240, 56, C.red), w(10, 58, 140, 54, 'Sure. ／ Of course.\nCertainly.\nGo ahead.（どうぞ）', GREEN, 12), w(170, 58, 140, 54, 'I\'m sorry, but\nyou can\'t.\nI\'m afraid not.', RED, 12), t(160, 134, 'はい、どうぞ　／　ごめんなさい、だめです', 11, C.gray)],
    '許可する・ことわる', GREEN),
  S('なぜ No, you may not. とは言わないの？ → 「だめです」と強くはねつける言い方になってしまうからです。ことわるときは、I\'m sorry を先につけて気持ちをやわらげます。',
    [bx(12, 6, 296, 30, 'なぜ？ No, you may not. は使わない？', PURPLE[0], PURPLE[1], 12), w(20, 48, 280, 34, '△ No, you may not.（強い）', RED, 14), ar(160, 84, 160, 98, C.main), w(20, 100, 280, 34, '○ I\'m sorry, but you can\'t.', GREEN, 14), t(160, 150, 'まず I\'m sorry で やわらげる', 12, C.ink, true)],
    'ことわるときは I\'m sorry をそえる', RED),
  S('日本語で「借りる」は一つですが、英語は二つあります。use は「その場で使う」（電話・トイレ・辞書）、borrow は「借りて持っていく」（本・かさ・自転車）。動かせるかどうかで選びます。',
    [w(10, 14, 140, 30, 'use', BLUE, 15), w(170, 14, 140, 30, 'borrow', GREEN, 15), t(80, 62, 'その場で使う', 12, C.blue, true), t(240, 62, '借りて持っていく', 12, C.green, true), t(80, 90, '電話・トイレ・辞書', 12), t(240, 90, '本・かさ・自転車', 12), t(160, 128, '動かせない → use　　動かせる → borrow', 12, C.main, true)],
    '「借りる」は動かすかどうかで決める', MAIN),
  S('なぜ May I borrow the bathroom? は誤りなの？ → bathroom は持って帰れないからです。その場で使わせてもらうので use を選びます。May I use the bathroom?（トイレをお借りしてもよいですか）が正しい形です。',
    [bx(12, 6, 296, 30, 'なぜ？ borrow the bathroom は誤り？', PURPLE[0], PURPLE[1], 12), w(20, 48, 280, 34, '× May I borrow the bathroom?', RED, 14), t(160, 98, 'トイレは持っていけない', 12, C.red, true), w(20, 112, 280, 34, '○ May I use the bathroom?', GREEN, 14)],
    'トイレ ＝ use、かさ ＝ borrow', RED),
  S('まとめです。May I 〜? / Could I 〜? は自分がする許可を求める形で、ていねいさは Can I ＜ May I ＜ Could I の順。ことわるときは I\'m sorry をそえ、「借りる」は use と borrow を使い分けます。',
    [w(14, 12, 290, 32, '主語は I ＝ 自分がする許可を求める', BLUE, 13), w(14, 52, 290, 32, 'Can I ＜ May I ＜ Could I', GREEN, 13), w(14, 92, 290, 32, 'ことわるとき：I\'m sorry, but ...', RED, 13), w(14, 132, 290, 28, 'use（その場）／ borrow（持っていく）', MAIN, 12)],
    'I で始まれば、自分がする', YELLOW),
], 'May I 〜? / Could I 〜? ＝ 許可を求める'));

// ── 会話でよく出る受け答えと決まり文句（節0: 場面別の決まり文句） ──
reg('eigo_s180', 0, show([
  S('英語の会話には、Sure. / Here you are. / I\'m afraid not. のように、決まった返しがくり返し出てきます。入試の会話文でも同じ表現が何度も出るので、場面ごとにまとめて覚えましょう。',
    [w(10, 14, 144, 38, 'たのまれた', BLUE, 13), w(166, 14, 144, 38, 'ものをわたす', GREEN, 13), w(10, 62, 144, 38, '申し出を受ける', MAIN, 13), w(166, 62, 144, 38, '残念な知らせ', RED, 13), w(88, 110, 144, 38, 'お店で', PURPLE, 13)],
    '場面ごとに、決まった返しがある', MAIN),
  S('なぜ決まり文句をそのまま覚えるの？ → 単語ごとに日本語にすると意味が取れないからです。Here you are. を直訳すると「ここにあなたがいます」ですが、本当の意味は「はい、どうぞ」です。',
    [bx(12, 6, 296, 30, 'なぜ？ 直訳しないで覚える？', PURPLE[0], PURPLE[1], 12), w(20, 48, 280, 32, '× ここに あなたが います', RED, 14), ar(160, 82, 160, 96, C.main), w(20, 98, 280, 32, '○ はい、どうぞ', GREEN, 15), t(160, 148, 'Here you are. は場面ごと覚える', 12, C.ink, true)],
    '決まり文句は、場面とセットで覚える', RED),
  S('たのまれたときは、Sure. / Of course. / Certainly. / All right. / No problem.（いいですよ）。できないときは I\'m sorry, I can\'t. や I\'m afraid I can\'t.（残念ながらできません）です。',
    [w(10, 10, 300, 26, 'Could you help me?', BLUE, 13), ar(80, 38, 80, 54, C.green), ar(240, 38, 240, 54, C.red), w(10, 56, 140, 60, 'Sure.\nOf course.\nNo problem.', GREEN, 13), w(170, 56, 140, 60, 'I\'m sorry,\nI can\'t.\nI\'m afraid I can\'t.', RED, 12), t(160, 136, 'いいですよ　／　できません', 12, C.gray)],
    'たのまれたとき', BLUE),
  S('ものをわたすときは Here you are.（はい、どうぞ）。受け取ったら Thank you.、それに対して You\'re welcome.（どういたしまして）と続きます。この三つは一つの流れで覚えます。',
    [w(30, 12, 260, 32, '① Here you are.　（はい、どうぞ）', GREEN, 13), ar(160, 46, 160, 58, C.main), w(30, 60, 260, 32, '② Thank you.　（ありがとう）', BLUE, 13), ar(160, 94, 160, 106, C.main), w(30, 108, 260, 32, '③ You\'re welcome.　（どういたしまして）', MAIN, 13)],
    'どうぞ → ありがとう → どういたしまして', GREEN),
  S('申し出を受けるときは Yes, please.、ことわるときは No, thank you. I\'m all right.（けっこうです。だいじょうぶです）。ご親切にお礼を言うなら That\'s very kind of you. と言います。',
    [w(10, 10, 300, 26, 'Shall I carry your bag?', MAIN, 13), ar(80, 38, 80, 54, C.green), ar(240, 38, 240, 54, C.red), w(10, 56, 140, 44, 'Yes, please.', GREEN, 14), w(170, 56, 140, 44, 'No, thank you.\nI\'m all right.', RED, 12), w(40, 112, 240, 30, 'That\'s very kind of you.（ご親切に）', BLUE, 12)],
    '申し出を受ける・ことわる', MAIN),
  S('残念な知らせを聞いたときは、That\'s too bad.（それは残念ですね）、I\'m sorry to hear that.（それはお気の毒に）と言います。なぜ「それはとても悪い」と直訳しないのでしょう。気持ちをこめた決まり文句だからです。',
    [w(10, 12, 300, 30, '"I can\'t go to the party."', GRAY, 13), ar(160, 44, 160, 58, C.main), w(10, 60, 300, 30, 'That\'s too bad.　（それは残念ですね）', RED, 13), w(10, 100, 300, 30, 'I\'m sorry to hear that.（お気の毒に）', RED, 13), t(160, 148, '直訳せず、気持ちを伝える言葉', 12, C.ink, true)],
    '残念な知らせ → That\'s too bad.', RED),
  S('お店では、店員さんが May I help you? と声をかけます。見ているだけなら No, thank you. I\'m just looking.。気に入ったら How much is it? とたずねて、I\'ll take it.（これをいただきます）と決めます。',
    [w(8, 8, 304, 28, '店員　May I help you?', GRAY, 13), w(8, 42, 304, 28, '客　No, thank you. I\'m just looking.', BLUE, 13), w(8, 76, 304, 28, '客　How much is it?', BLUE, 13), w(8, 110, 304, 28, '客　I\'ll take it.　（これをいただきます）', GREEN, 13)],
    'お店の会話の流れ', GREEN),
  S('なぜ I\'m afraid を使うの？ → 「残念ながら〜」と、ことわるときの前置きにして、きつくならないようにするためです。I\'m afraid not.（残念ながらちがいます）と I\'m afraid so.（残念ながらそのとおりです）の二つは、丸ごと覚えます。',
    [bx(12, 6, 296, 30, 'なぜ？ I\'m afraid をつける？', PURPLE[0], PURPLE[1], 12), w(20, 46, 280, 30, 'Is it going to rain?', GRAY, 13), w(20, 84, 134, 44, 'I\'m afraid so.\n残念ながらそうです', RED, 11), w(166, 84, 134, 44, 'I\'m afraid not.\n残念ながらちがいます', RED, 11), t(160, 148, '悪い知らせをやわらげる前置き', 12, C.ink, true)],
    'I\'m afraid ＝ 残念ながら', RED),
  S('まとめです。会話の決まり文句は、場面ごとに覚えます。Sure. は引き受け、Here you are. は手わたし、That\'s too bad. は残念な知らせ、I\'m just looking. はお店で見ているだけ、です。',
    [w(14, 12, 290, 28, 'Sure. ＝ いいですよ', BLUE, 13), w(14, 46, 290, 28, 'Here you are. ＝ はい、どうぞ', GREEN, 13), w(14, 80, 290, 28, 'That\'s too bad. ＝ それは残念ですね', RED, 13), w(14, 114, 290, 28, 'I\'m just looking. ＝ 見ているだけです', MAIN, 13)],
    '場面とセットで覚える', YELLOW),
], '場面ごとの決まり文句'));

// ── 命令文②：否定の命令文（節0: Don't で始める否定の命令文） ──
reg('eigo_s182', 0, show([
  S('「走ってはいけません」を英語にするとき、No run. と書いてしまう人がいます。看板の No running. につられるからです。文として言うときは、Don\'t run. が正しい形です。',
    [w(10, 16, 300, 32, '× No run.', RED, 15), ar(160, 50, 160, 64, C.main), w(10, 66, 300, 32, '○ Don\'t run.', GREEN, 15), t(160, 122, '「走ってはいけません」', 12, C.ink, true), t(160, 144, '看板の No running. は別の形', 11, C.gray)],
    '文では Don\'t を使う', GREEN),
  S('作り方は、命令文（めいれいぶん）の前に Don\'t を置くだけです。Open the window.（窓を開けなさい）→ Don\'t open the window.（窓を開けてはいけません）。一般動詞（いっぱんどうし）の文も同じです。',
    [w(10, 14, 300, 30, 'Open the window.', BLUE, 14), ar(160, 46, 160, 62, C.main), ...chips([['Don\'t', RED], ['open the window.', BLUE]], 66, 32, 14), t(160, 124, '前に Don\'t を足すだけ', 12, C.red, true), t(160, 146, 'Don\'t run in the hallway.（ろうかを走るな）', 11, C.gray)],
    '命令文 ＋ 前に Don\'t ＝ 〜してはいけない', RED),
  S('なぜ主語が he や she の文のように doesn\'t を使わないの？ → 命令文には主語がないからです。相手が何人でも、どんな人でも、Don\'t のままです。× Doesn\'t run. という形はありません。',
    qa('doesn\'t を使わないのは？', '命令文には「主語」がない\n\n相手が だれでも 何人でも\nいつも Don\'t', RED, 14),
    '主語がないので、いつも Don\'t', RED),
  S('be動詞（どうし）の文も同じです。Be late.（遅れなさい）→ Don\'t be late.（遅れてはいけません）。Don\'t be afraid.（こわがらないで）、Don\'t be shy.（はずかしがらないで）。',
    [...chips([['Be', BLUE], ['late.', MAIN]], 14, 30, 14), ar(160, 46, 160, 60, C.main), ...chips([['Don\'t', RED], ['be', BLUE], ['late.', MAIN]], 64, 30, 14), w(30, 108, 260, 28, '× Be not late.', RED, 13), t(160, 152, 'be動詞の文も Don\'t be 〜.', 12, C.ink, true)],
    'be動詞の命令文も Don\'t be 〜.', BLUE),
  S('なぜ Don\'t late. と be を落としてはいけないの？ → late は「遅い」という形容詞（けいようし）で、動詞ではないからです。be動詞と組んで be late（遅れる）になります。',
    [bx(12, 6, 296, 30, 'なぜ？ be を落とせない？', PURPLE[0], PURPLE[1], 12), w(20, 46, 280, 30, '× Don\'t late.', RED, 14), t(160, 94, 'late は「遅い」という形容詞', 12, C.red, true), w(20, 108, 280, 30, '○ Don\'t be late.', GREEN, 14), t(160, 152, 'be ＋ late ＝ 遅れる', 12, C.ink)],
    '形容詞の前には be が必要', RED),
  S('よく使う形をまとめて見ましょう。Don\'t touch this button.（このボタンにさわらないで）、Don\'t worry.（心配しないで）、Don\'t forget your homework.（宿題を忘れないで）。',
    [w(8, 12, 304, 28, 'Don\'t touch this button.　さわらないで', BLUE, 12), w(8, 46, 304, 28, 'Don\'t worry.　心配しないで', GREEN, 12), w(8, 80, 304, 28, 'Don\'t forget your homework.　忘れないで', MAIN, 12), w(8, 114, 304, 28, 'Don\'t be afraid.　こわがらないで', RED, 12)],
    'どれも「Don\'t ＋ 原形（げんけい）」', YELLOW),
  S('まとめです。否定の命令文は、命令文の頭に Don\'t を足すだけ。一般動詞でも be動詞でも同じで、例外はありません。late のような形容詞の前には be を忘れないようにします。',
    [w(14, 14, 290, 34, '命令文の頭に Don\'t を足す', RED, 14), w(14, 56, 290, 34, '主語がないので doesn\'t は使わない', BLUE, 13), w(14, 98, 290, 34, 'be動詞も Don\'t be 〜.', GREEN, 14)],
    'Don\'t ＋ 原形　例外なし', YELLOW),
], 'Don\'t ＋ 動詞の原形 ＝ 〜してはいけない'));

// ── 命令文④：命令文, and 〜 と 命令文, or 〜（節0: 二つの型を覚える） ──
reg('eigo_s184', 0, show([
  S('Hurry up, and you will catch the bus.（急ぎなさい、そうすればバスに間に合います）。Hurry up, or you will miss the bus.（急ぎなさい、さもないと乗りおくれます）。and と or の一語で、はげましと警告（けいこく）が入れかわります。',
    [w(10, 12, 300, 32, 'Hurry up, and you will catch the bus.', GREEN, 12), t(160, 56, 'そうすれば間に合う', 12, C.green, true), w(10, 82, 300, 32, 'Hurry up, or you will miss the bus.', RED, 12), t(160, 126, 'さもないと乗りおくれる', 12, C.red, true)],
    'and と or で、意味が変わる', MAIN),
  S('一つ目の型は「命令文, and 〜」です。Study hard, and you will pass the exam.（一生けんめい勉強しなさい、そうすれば試験に受かります）。and のあとには、命令にしたがった良い結果が続きます。',
    [...chips([['Study hard,', BLUE], ['and', GREEN]], 12, 28, 13), ...chips([['you will pass the exam.', MAIN]], 46, 28, 13), t(160, 90, '命令文　→　and　→　良い結果', 11, C.gray), w(30, 106, 260, 34, 'そうすれば ＝ and', GREEN, 15), t(160, 154, 'Turn right, and you will see the post office.', 11, C.gray)],
    '命令文, and 〜 ＝ そうすれば', GREEN),
  S('二つ目の型は「命令文, or 〜」です。Get up early, or you will be late for school.（早く起きなさい、でないと学校に遅れます）。or のあとには、したがわなかった場合の困った結果が続きます。',
    [...chips([['Get up early,', BLUE], ['or', RED]], 12, 28, 13), ...chips([['you will be late for school.', MAIN]], 46, 28, 13), t(160, 90, '命令文　→　or　→　困った結果', 11, C.gray), w(30, 106, 260, 34, 'さもないと ＝ or', RED, 15), t(160, 154, 'Take an umbrella, or you will get wet.', 11, C.gray)],
    '命令文, or 〜 ＝ さもないと', RED),
  S('なぜ and と or を取りちがえてしまうの？ → どちらも「命令文のあとにつなぐ語」だと覚えて、うしろの内容を見ないからです。見分けるコツは、うしろの話が「うまくいく話」なら and、「困った話」なら or です。',
    qa('and と or の見分け方は？', 'うしろの話が\n　うまくいく話 → and\n　困った話 → or\n\n文の終わりまで読んでから選ぶ', MAIN, 14),
    '結果が良いか悪いかで選ぶ', MAIN),
  S('組みになる語を覚えておくと便利です。catch the bus（間に合う）には and、miss the bus（乗りおくれる）には or。pass（受かる）には and、fail（落ちる）には or が続きます。',
    [...table(['良い結果 → and', '困った結果 → or'], [['catch the bus', 'miss the bus'], ['pass the exam', 'fail the exam'], ['get well', 'get sick'], ['be on time', 'be late']], 20, 14, [140, 140], 28, 12)],
    '良い結果と困った結果の組', BLUE),
  S('なぜ or は「さもないと」と言うの？ → 「もしその命令にしたがわなければ」という意味をふくんでいるからです。だから if を使った文にすると、or は否定（ひてい）の don\'t が入ります。',
    [bx(12, 6, 296, 30, 'なぜ？ or は「さもないと」？', PURPLE[0], PURPLE[1], 12), w(10, 46, 300, 32, 'Hurry up, or you will miss the bus.', RED, 12), ar(160, 80, 160, 94, C.main), w(10, 96, 300, 32, 'If you don\'t hurry up, you will miss the bus.', RED, 11), t(160, 150, 'or ＝ もし〜しなければ', 12, C.ink, true)],
    'or ＝ if 〜 not（もし〜しなければ）', RED),
  S('練習です。Turn right, ___ you will see the post office. → and（見える＝良い結果）。Take an umbrella, ___ you will get wet. → or（ぬれる＝困った結果）。うしろの内容を見て選びます。',
    [w(8, 12, 304, 44, 'Turn right, ___ you will see the post office.\n→ and', GREEN, 12), w(8, 66, 304, 44, 'Take an umbrella, ___ you will get wet.\n→ or', RED, 12), t(160, 134, '空所のうしろを読んでから選ぶ', 12, C.ink, true)],
    '見えるは良い結果、ぬれるは困った結果', YELLOW),
  S('まとめです。命令文, and 〜 ＝「そうすれば」、命令文, or 〜 ＝「さもないと」。うしろの結果が良ければ and、困った話なら or。コンマの位置まで一緒に覚えます。',
    [w(14, 14, 290, 34, '命令文, and 〜 ＝ そうすれば', GREEN, 14), w(14, 56, 290, 34, '命令文, or 〜 ＝ さもないと', RED, 14), w(14, 98, 290, 34, '良い結果 → and　困った結果 → or', MAIN, 13)],
    'うしろの結果を見て and / or を選ぶ', YELLOW),
], '命令文, and 〜 と 命令文, or 〜'));

// ── 感嘆文③：What と How の使い分け（節0: 名詞があるかどうかで決める） ──
reg('eigo_s187', 0, show([
  S('What a fast runner he is! と How fast he runs! は、どちらも「彼はなんて速く走るのだろう」という意味です。同じことを二通りに言えるのは、名詞を使うか使わないかがちがうからです。',
    [w(10, 14, 300, 32, 'What a fast runner he is!', BLUE, 14), t(160, 62, '＝（同じ意味）', 13, C.main, true), w(10, 78, 300, 32, 'How fast he runs!', GREEN, 14), t(160, 132, '名詞 runner がある　／　名詞がない', 12, C.ink, true)],
    '名詞があれば What、なければ How', MAIN),
  S('なぜ名詞があるかどうかで決まるの？ → What は「なんという〜」と名詞をほめたりおどろいたりする語で、How は「どれほど〜」と程度（ていど）におどろく語だからです。だから名詞を使うなら What、使わないなら How です。',
    qa('名詞で What か How か決まる？', 'What ＝「なんという〜」\n　名詞に おどろく\n\nHow ＝「どれほど〜」\n　形容詞・副詞に おどろく', BLUE, 13),
    '名詞に注目 ＝ What　程度に注目 ＝ How', BLUE),
  S('What の語順です。What ＋ a/an ＋ 形容詞 ＋ 名詞 ＋ 主語 ＋ 動詞 ! の順に並べます。What a good baseball player he is!（彼はなんてよい野球選手なのだろう）。',
    [...chips([['What', BLUE], ['a', GRAY], ['good', GREEN], ['baseball player', RED], ['he is!', MAIN]], 24, 32, 11), t(160, 68, '形容詞 ＋ 名詞 ＋ 主語 ＋ 動詞', 12, C.ink, true), t(160, 100, 'What an easy question this is!', 14, C.blue, true), t(160, 124, '（これはなんて簡単な問題なのだろう）', 11, C.gray)],
    'What ＋ a(n) ＋ 形容詞 ＋ 名詞 ＋ 主語 ＋ 動詞 !', BLUE),
  S('How の語順です。How ＋ 形容詞・副詞 ＋ 主語 ＋ 動詞 ! の順です。How well he plays baseball!（彼はなんて上手に野球をするのだろう）。How easy this question is!（この問題はなんて簡単なのだろう）。',
    [...chips([['How', GREEN], ['well', GREEN], ['he plays baseball!', MAIN]], 24, 32, 13), ...chips([['How', GREEN], ['easy', GREEN], ['this question is!', MAIN]], 76, 32, 13), t(160, 128, '名詞は主語の中にある（a は付かない）', 12, C.ink, true)],
    'How ＋ 形容詞・副詞 ＋ 主語 ＋ 動詞 !', GREEN),
  S('なぜ very に注目するとよいの？ → 感嘆文は「とても〜」を前に出した文だからです。very が名詞のかたまりの中にあれば What、very が副詞の前にあれば How に置きかわります。',
    [bx(12, 6, 296, 30, 'なぜ？ very に注目する？', PURPLE[0], PURPLE[1], 12), w(10, 46, 300, 30, 'He is a very good player.', BLUE, 13), t(160, 90, '↓ very ＋ 形容詞 ＋ 名詞　→ What', 12, C.blue, true), w(10, 106, 300, 30, 'He plays very well.', GREEN, 13), t(160, 150, '↑ very ＋ 副詞　→ How', 12, C.green, true)],
    'very を what / how におきかえて前に出す', MAIN),
  S('もとの文から作ってみましょう。He is a very good player. は What a good player he is!、He plays very well. は How well he plays! です。very をぬいて、What か How を文のはじめに出します。',
    [w(10, 6, 300, 26, 'He is a very good player.', BLUE, 13), ar(160, 34, 160, 46, C.main), w(10, 48, 300, 26, 'What a good player he is!', BLUE, 13), w(10, 88, 300, 26, 'He plays very well.', GREEN, 13), ar(160, 116, 160, 128, C.main), w(10, 130, 300, 26, 'How well he plays!', GREEN, 13)],
    '名詞のかたまりなら What、副詞なら How', GREEN),
  S('同じ内容を、What と How の両方で言えることがあります。What a good baseball player he is! ＝ How well he plays baseball!。意味はほぼ同じで、名詞 player を使うか、副詞 well を使うかだけがちがいます。',
    [w(10, 14, 300, 34, 'What a good baseball player he is!', BLUE, 13), t(160, 66, '名詞 player', 12, C.red, true), t(160, 86, '＝', 18, C.main, true), w(10, 100, 300, 34, 'How well he plays baseball!', GREEN, 13), t(160, 152, '副詞 well', 12, C.red, true)],
    '書きかえ問題でよく出る', YELLOW),
  S('まとめです。名詞があれば What、なければ How。What の文には a / an が付くことが多く、How の文には付きません。迷ったら、もとの文の very が名詞のかたまりの中にあるかを見ます。',
    [w(14, 14, 290, 34, '名詞がある → What a(n) ...', BLUE, 14), w(14, 56, 290, 34, '名詞がない → How 形容詞・副詞 ...', GREEN, 14), w(14, 98, 290, 34, 'very がどこにあるかで確かめる', MAIN, 13)],
    '名詞の有無で What / How を決める', YELLOW),
], 'What と How の使い分け'));

// ── 付加疑問文②：答え方と特別な形（節0: 答え方は「事実」で決める） ──
reg('eigo_s189', 0, show([
  S('You can swim, can\'t you?（泳げますよね）に、泳げるなら Yes, I can.、泳げないなら No, I can\'t. と答えます。付加疑問（ふかぎもん）への答えは、実際にどうなのかという事実で決まります。',
    [w(10, 12, 300, 32, 'You can swim, can\'t you?', MAIN, 14), ar(80, 46, 80, 62, C.green), ar(240, 46, 240, 62, C.red), w(10, 64, 140, 40, '泳げる\nYes, I can.', GREEN, 13), w(170, 64, 140, 40, '泳げない\nNo, I can\'t.', RED, 13), t(160, 128, '事実にあわせて答える', 12, C.ink, true)],
    '答えは「事実」で決める', GREEN),
  S('なぜ付いている疑問の形で決めないの？ → Yes は「そのとおり、肯定（こうてい）だ」、No は「そうではない、否定（ひてい）だ」という事実を表す語だからです。質問が否定の形でも、事実が肯定なら Yes です。',
    qa('答えを事実で決めるのは？', 'Yes ＝ 事実が「ある・する」\nNo ＝ 事実が「ない・しない」\n\n質問の形ではなく\n事実を表す', GREEN, 13),
    'Yes / No は事実を表す', GREEN),
  S('Tom can\'t swim, can he?（トムは泳げないんですよね）。トムが泳げないなら、日本語では「はい、泳げません」と答えますが、英語では事実に合わせて No, he can\'t. です。ここが日本語とずれます。',
    [w(10, 10, 300, 30, 'Tom can\'t swim, can he?', MAIN, 14), ar(80, 42, 80, 58, C.red), ar(240, 42, 240, 58, C.green), w(10, 60, 140, 44, '泳げない\nNo, he can\'t.', RED, 13), w(170, 60, 140, 44, '泳げる\nYes, he can.', GREEN, 13), t(80, 124, '日本語：はい', 12, C.gray), t(240, 124, '日本語：いいえ', 12, C.gray), t(160, 148, '日本語の はい・いいえ と ずれる', 12, C.red, true)],
    '日本語の「はい」につられない', RED),
  S('なぜ Yes, he can\'t. は誤りなの？ → Yes は「そのとおり、できる」という肯定の意味なので、あとに否定は続けられないからです。Yes のあとは肯定、No のあとは否定と、そろえます。',
    [bx(12, 6, 296, 30, 'なぜ？ Yes, he can\'t. は誤り？', PURPLE[0], PURPLE[1], 12), w(20, 46, 130, 34, '○ Yes, he can.', GREEN, 13), w(170, 46, 130, 34, '○ No, he can\'t.', GREEN, 13), w(20, 94, 130, 34, '× Yes, he can\'t.', RED, 13), w(170, 94, 130, 34, '× No, he can.', RED, 13), t(160, 148, 'Yes ＋ 肯定　No ＋ 否定', 12, C.ink, true)],
    'Yes と肯定、No と否定はセット', GREEN),
  S('答え方の手順は三つです。①質問を日本語に直さず、事実はどちらかだけを考える ②事実が肯定なら Yes、否定なら No ③そのあとの文を Yes なら肯定、No なら否定でそろえる。',
    [w(14, 12, 290, 34, '① 事実は どちらか？', BLUE, 14), ar(160, 48, 160, 58, C.main), w(14, 60, 290, 34, '② 肯定 → Yes　否定 → No', GREEN, 14), ar(160, 96, 160, 106, C.main), w(14, 108, 290, 34, '③ Yes+肯定 ／ No+否定 でそろえる', MAIN, 13)],
    '日本語に訳さず、事実を考える', YELLOW),
  S('練習です。Tom can\'t play the guitar, can he? に「はい、ひけません」という内容で答えます。ひけないという事実があるので、No, he can\'t. です。日本語の「はい」につられると誤りになります。',
    [w(8, 12, 304, 32, 'Tom can\'t play the guitar, can he?', MAIN, 12), t(160, 62, '「はい、ひけません」', 13, C.ink, true), ar(160, 76, 160, 92, C.main), w(60, 94, 200, 34, 'No, he can\'t.', GREEN, 15), t(160, 148, '事実が「ひけない」だから No', 12, C.ink)],
    'ひけない（否定）→ No, he can\'t.', GREEN),
  S('まとめです。付加疑問の答えは、事実で決めます。事実が肯定なら Yes ＋ 肯定、否定なら No ＋ 否定。この組み合わせがくずれることはありません。',
    [w(14, 14, 290, 34, '答えは 質問の形でなく「事実」で決める', GREEN, 13), w(14, 56, 290, 34, 'Yes ＋ 肯定　／　No ＋ 否定', BLUE, 14), w(14, 98, 290, 34, '日本語の はい・いいえ に つられない', RED, 13)],
    '事実はどちらか、だけを考える', YELLOW),
], '付加疑問文への答えは事実で決める'));

// ── 否定疑問文（節1: 答え方は日本語と逆になる） ──
reg('eigo_s190', 1, show([
  S('Don\'t you like natto?（納豆が好きではないのですか）と聞かれて、きらいなら No, I don\'t. です。日本語なら「はい、きらいです」と言うので、つい Yes と答えたくなりますが、英語は事実で決めます。',
    [w(10, 12, 300, 32, 'Don\'t you like natto?', MAIN, 14), t(160, 62, '納豆は きらい', 13, C.ink, true), ar(160, 78, 160, 92, C.main), w(60, 94, 200, 34, 'No, I don\'t.', RED, 15), t(160, 148, '日本語では「はい、きらいです」', 11, C.gray)],
    '英語は「事実」で Yes / No を決める', RED),
  S('なぜ日本語とずれるの？ → 日本語の「はい・いいえ」は相手の言ったことに同意するかどうかを表し、英語の Yes / No は事実がどうかだけを表すからです。否定の質問では、この二つが逆になります。',
    qa('日本語とずれるのは？', '日本語：はい・いいえ\n　＝ 相手の言葉に同意するか\n\n英語：Yes / No\n　＝ 事実がどうか', RED, 13),
    '同意か、事実か、のちがい', RED),
  S('Don\'t you like tomatoes? に、好きなら Yes, I do.（日本語では「いいえ、好きです」）。質問の Don\'t は無視して、「好きかどうか」だけを考えます。',
    [w(10, 10, 300, 30, 'Don\'t you like tomatoes?', MAIN, 14), t(160, 56, '事実：トマトが 好きだ', 13, C.ink, true), ar(160, 70, 160, 86, C.green), w(60, 88, 200, 34, 'Yes, I do.', GREEN, 15), t(160, 142, '日本語では「いいえ、好きです」', 12, C.gray)],
    '好き → Yes, I do.', GREEN),
  S('好きではないなら No, I don\'t.（日本語では「はい、好きではありません」）です。事実が否定だから No、そのあとも否定の I don\'t でそろえます。',
    [w(10, 10, 300, 30, 'Don\'t you like tomatoes?', MAIN, 14), t(160, 56, '事実：トマトが 好きではない', 13, C.ink, true), ar(160, 70, 160, 86, C.red), w(60, 88, 200, 34, 'No, I don\'t.', RED, 15), t(160, 142, '日本語では「はい、好きではありません」', 12, C.gray)],
    '好きではない → No, I don\'t.', RED),
  S('まちがえない手順は三つです。①質問の否定は無視して、事実はどうかだけを考える ②事実が肯定なら Yes、否定なら No ③Yes のあとは肯定、No のあとは否定でそろえる。',
    [w(14, 12, 290, 34, '① 質問の否定は無視。事実は？', BLUE, 13), ar(160, 48, 160, 58, C.main), w(14, 60, 290, 34, '② 肯定 → Yes　否定 → No', GREEN, 14), ar(160, 96, 160, 106, C.main), w(14, 108, 290, 34, '③ Yes+肯定 ／ No+否定', MAIN, 14)],
    '日本語に引きずられない', YELLOW),
  S('Aren\'t you hungry?（おなかはすいていないのですか）も同じです。すいているなら Yes, I am.（日本語では「いいえ、すいています」）、すいていないなら No, I\'m not.（日本語では「はい、すいていません」）。',
    [w(10, 10, 300, 30, 'Aren\'t you hungry?', MAIN, 14), ar(80, 42, 80, 58, C.green), ar(240, 42, 240, 58, C.red), w(10, 60, 140, 44, 'すいている\nYes, I am.', GREEN, 13), w(170, 60, 140, 44, 'すいていない\nNo, I\'m not.', RED, 13), t(80, 124, 'いいえ、すいています', 11, C.gray), t(240, 124, 'はい、すいていません', 11, C.gray)],
    'be動詞の否定疑問文も同じ', BLUE),
  S('なぜ Yes, I don\'t. や No, I do. はどんな場合でも誤りなの？ → Yes は肯定、No は否定の事実を表すので、あとの文と食いちがうと意味が通らないからです。答えを書いたら、組み合わせがそろっているか確かめます。',
    [bx(12, 6, 296, 30, 'なぜ？ Yes, I don\'t. は誤り？', PURPLE[0], PURPLE[1], 12), w(20, 46, 130, 32, '× Yes, I don\'t.', RED, 13), w(170, 46, 130, 32, '× No, I do.', RED, 13), w(20, 94, 130, 32, '○ Yes, I do.', GREEN, 13), w(170, 94, 130, 32, '○ No, I don\'t.', GREEN, 13), t(160, 148, '書いたら Yes と肯定、No と否定を確かめる', 11, C.ink, true)],
    'Yes と肯定、No と否定はセット', RED),
  S('まとめです。否定疑問文の答えは事実で決めます。好きなら Yes, I do.、好きでないなら No, I don\'t.。日本語の「はい・いいえ」と逆になることが多いので、質問の否定は無視して考えます。',
    [w(14, 14, 290, 34, '事実が肯定 → Yes ＋ 肯定', GREEN, 14), w(14, 56, 290, 34, '事実が否定 → No ＋ 否定', RED, 14), w(14, 98, 290, 34, '付加疑問文でも考え方は同じ', BLUE, 13)],
    '質問の否定は無視して、事実で答える', YELLOW),
], '否定疑問文の答え方は日本語と逆になる'));

// ── Yes/No疑問文③：過去の文をたずねる（節1: 過去の一般動詞の疑問文 Did） ──
reg('eigo_s193', 1, show([
  S('He went to Kyoto. を疑問文にするとき、Did he went to Kyoto? としてしまいがちです。正しくは Did he go to Kyoto? で、動詞は went ではなく原形（げんけい）の go にもどります。',
    [w(10, 14, 300, 30, 'He went to Kyoto.', GRAY, 14), ar(160, 46, 160, 58, C.main), w(10, 60, 300, 30, '× Did he went to Kyoto?', RED, 14), w(10, 100, 300, 30, '○ Did he go to Kyoto?', GREEN, 14), t(160, 150, 'went → go にもどす', 12, C.green, true)],
    '過去の疑問文は Did ＋ 原形', GREEN),
  S('作り方は三つの手順です。①Did を文の先頭に置く ②動詞を原形にもどす（過去形をやめる） ③最後を ? にする。You went to the park. → Did you go to the park? です。',
    [w(14, 8, 290, 28, '① Did を先頭に置く', BLUE, 13), w(14, 40, 290, 28, '② 動詞を原形にもどす（went → go）', GREEN, 13), w(14, 72, 290, 28, '③ 最後を ? にする', MAIN, 13), ...chips([['Did', RED], ['you', BLUE], ['go', GREEN], ['to the park?', MAIN]], 114, 30, 13), t(160, 156, 'You went to the park. が もとの文', 11, C.gray)],
    'Did ＋ 主語 ＋ 動詞の原形 ＋ ...?', GREEN),
  S('なぜ動詞を原形にもどすの？ → 「過去である」という印は、Did がすべて引き受けるからです。went をそのまま残すと、過去の印を二つ付けることになり、誤りです。',
    [bx(12, 6, 296, 30, 'なぜ？ 動詞を原形にもどす？', PURPLE[0], PURPLE[1], 12), ...chips([['Did', RED], ['he', BLUE], ['went', GRAY]], 50, 30, 14), t(160, 94, '過去の印が 2つ（Did と went）', 12, C.red, true), ...chips([['Did', RED], ['he', BLUE], ['go', GREEN]], 112, 30, 14), t(160, 154, '過去の印は Did の 1つだけ', 12, C.green, true)],
    '過去の印は文の中に1つだけ', RED),
  S('なぜ主語が何でも Did でよいの？ → 現在の文は he のとき does、I のとき do と使い分けますが、過去の Did は主語が変わっても形が同じだからです。全員 Did で始めます。',
    [bx(12, 6, 296, 28, 'なぜ？ 主語が何でも Did？', PURPLE[0], PURPLE[1], 12), ...table(['主語', '現在', '過去'], [['I / you', 'Do', 'Did'], ['he / she', 'Does', 'Did'], ['they / we', 'Do', 'Did']], 50, 44, [70, 70, 80], 28, 13)],
    '過去は全員 Did　使い分けはいらない', BLUE),
  S('原形にもどす例をまとめて見ましょう。went → go、studied → study、had → have。Did he study English?、Did they have lunch at noon? のように、動詞は辞書にのっているもとの形です。',
    [...table(['もとの文', '疑問文'], [['You went there.', 'Did you go there?'], ['He studied English.', 'Did he study English?'], ['They had lunch.', 'Did they have lunch?']], 10, 14, [140, 160], 34, 12)],
    'went → go　studied → study　had → have', GREEN),
  S('不規則動詞（ふきそくどうし）は、原形にもどすと形が大きく変わるので注意です。see — saw、eat — ate、take — took。Did you see the movie? では saw ではなく see を書きます。',
    [...table(['原形', '過去形'], [['go', 'went'], ['see', 'saw'], ['have', 'had'], ['eat', 'ate'], ['take', 'took']], 50, 4, [100, 120], 22, 13), t(160, 150, 'Did のあとは左の列（原形）を書く', 12, C.green, true)],
    'Did のうしろは、いつも原形', YELLOW),
  S('答え方は Yes, 主語＋did. か No, 主語＋didn\'t. です。Did you see the movie? — Yes, I did. / No, I didn\'t. 答えでは動詞をくり返さず、did だけで受けます。',
    [w(10, 10, 300, 30, 'Did you see the movie?', MAIN, 14), ar(80, 42, 80, 58, C.green), ar(240, 42, 240, 58, C.red), w(10, 60, 140, 40, 'Yes, I did.', GREEN, 15), w(170, 60, 140, 40, 'No, I didn\'t.', RED, 15), t(160, 124, 'たずねられた Did を did で受ける', 12, C.ink, true)],
    'Yes, ... did. ／ No, ... didn\'t.', BLUE),
  S('なぜ be動詞の文には Did を使わないの？ → be動詞は自分で主語の前に出て疑問文を作れるからです。You were free yesterday. は Were you free yesterday? で、Did you were free? は誤りです。Did は一般動詞の文だけです。',
    [bx(12, 6, 296, 30, 'なぜ？ be動詞に Did は使わない？', PURPLE[0], PURPLE[1], 12), w(20, 46, 280, 30, 'You were free yesterday.', GRAY, 13), ar(160, 78, 160, 90, C.main), w(20, 92, 280, 30, '○ Were you free yesterday?', GREEN, 14), w(20, 128, 280, 30, '× Did you were free yesterday?', RED, 14)],
    'be動詞は前に出す　一般動詞は Did', RED),
  S('まとめです。過去の一般動詞の疑問文は、Did を先頭に置いて動詞を原形にもどします。主語が何でも Did、答えは did / didn\'t。be動詞の文は Was / Were を前に出します。',
    [w(14, 12, 290, 32, 'Did ＋ 主語 ＋ 原形 ...?', GREEN, 14), w(14, 52, 290, 32, '答え：Yes, I did. ／ No, I didn\'t.', BLUE, 13), w(14, 92, 290, 32, 'be動詞は Was / Were を前に出す', MAIN, 13)],
    '過去の印は Did に まかせる', YELLOW),
], 'Did ＋ 主語 ＋ 動詞の原形 ＝ 過去の疑問文'));

// ── Yes/No疑問文⑤：短く答える形（節0: 主語を代名詞に置きかえる） ──
reg('eigo_s195', 0, show([
  S('Is your mother a teacher? と聞かれて、Yes, my mother is. と答えるのはくどい言い方です。英語では Yes, she is. と代名詞（だいめいし）に置きかえます。',
    [w(10, 12, 300, 30, 'Is your mother a teacher?', MAIN, 14), ar(80, 44, 80, 60, C.red), ar(240, 44, 240, 60, C.green), w(10, 62, 140, 36, '△ Yes, my mother is.', RED, 11), w(170, 62, 140, 36, '○ Yes, she is.', GREEN, 14), t(80, 114, 'くどい言い方', 11, C.gray), t(240, 114, '自然な言い方', 11, C.gray)],
    '短い答えでは、主語を代名詞にする', GREEN),
  S('なぜ代名詞に置きかえるの？ → 質問で言ったばかりの名前を、もう一度くり返さなくても通じるからです。my mother は she に、ひとまとめで言いかえます。',
    qa('代名詞に置きかえるのは？', '質問で 言ったばかりの名前を\nくり返さなくても通じる\n\nmy mother → she\nKen → he', GREEN, 14),
    '同じ言葉をくり返さない', GREEN),
  S('置きかえの一覧です。this / that / your bag / the dog → it。these / those / your books / the dogs → they。your father / Ken → he。your mother / Ms. Green → she。',
    [...table(['もとの主語', '答えの主語'], [['this / that / the dog', 'it'], ['these / those / the dogs', 'they'], ['your father / Ken', 'he'], ['your mother / Ms. Green', 'she']], 20, 10, [180, 100], 30, 12)],
    '1つ・1ぴきは it、複数は they', BLUE),
  S('you（あなた）と聞かれたら I で答えます。Are you hungry? — Yes, I am.。聞かれた「あなた」に、答える私が入れかわるので、you は I になります。',
    [w(10, 14, 300, 30, 'Are you hungry?', MAIN, 14), ar(160, 46, 160, 60, C.main), w(60, 62, 200, 34, 'Yes, I am.', GREEN, 15), t(160, 116, 'you（あなた）→ I（私）', 13, C.ink, true), t(160, 140, 'たずねる人と答える人は入れかわる', 12, C.gray)],
    'you と聞かれたら I で答える', GREEN),
  S('なぜ Are you and your sister good at English? には we で答えるの？ → 主語が「あなたとお姉さん」で、答える自分もふくまれているからです。自分をふくむ複数は we です。Ken and Tom のように自分をふくまない複数なら they です。',
    [bx(12, 6, 296, 30, 'なぜ？ you and ... には we？', PURPLE[0], PURPLE[1], 12), w(10, 44, 300, 28, 'Are you and your sister ...?', MAIN, 12), w(10, 80, 140, 40, '自分をふくむ複数\n→ we', GREEN, 13), w(170, 80, 140, 40, '自分をふくまない\n複数 → they', BLUE, 13), t(160, 140, 'Yes, we are.　　Ken and Tom → they', 11, C.ink, true)],
    '自分がふくまれるか、で決める', GREEN),
  S('例を見ましょう。Is that your bike? — Yes, it is.。Are these your pencils? — No, they aren\'t.。Does your mother like coffee? — Yes, she does.。主語は代名詞、あとは聞かれた語で受けます。',
    [w(6, 10, 308, 28, 'Is that your bike? — Yes, it is.', BLUE, 12), w(6, 44, 308, 28, 'Are these your pencils? — No, they aren\'t.', MAIN, 12), w(6, 78, 308, 28, 'Does your mother like coffee? — Yes, she does.', GREEN, 11), w(6, 112, 308, 28, 'Are you and Ken in the same class? — Yes, we are.', GRAY, 11)],
    '主語を代名詞にして、短く答える', BLUE),
  S('犬や本のように人でないものは、犬でも本でも it で受けます。複数なら they です。ペットを he や she と呼ぶこともありますが、テストでは it で答えれば正解です。',
    [w(30, 14, 120, 32, 'the dog', GRAY, 14), ar(152, 30, 176, 30, C.main), w(178, 14, 112, 32, 'it', GREEN, 15), w(30, 60, 120, 32, 'the books', GRAY, 14), ar(152, 76, 176, 76, C.main), w(178, 60, 112, 32, 'they', GREEN, 15), t(160, 124, 'Is this your dog? — Yes, it is.', 13, C.ink, true)],
    '人でないもの ＝ it / they', YELLOW),
  S('まとめです。短い答えは、①Yes / No ②主語を代名詞に ③聞かれた語で受ける（Is → is、Do → do）の三点セットです。主語が何人かを数えてから代名詞を決めます。',
    [w(14, 12, 290, 32, '① Yes / No', BLUE, 14), w(14, 52, 290, 32, '② 主語を代名詞に（it / they / he / she / I / we）', GREEN, 12), w(14, 92, 290, 32, '③ 聞かれた語で受ける（Is → is）', MAIN, 13)],
    '三点セットで短答をつくる', YELLOW),
], '短い答えは、主語を代名詞にする'));

// ── what②：What ＋ 名詞（節1: 時刻・曜日・日付のたずね方） ──
reg('eigo_s197', 1, show([
  S('What time is it? は「今、何時ですか」とたずねる文で、答えは It\'s seven thirty.（七時半です）のように It\'s で始めます。時刻の言い方は、たずね方と答え方をセットで覚えます。',
    [w(10, 14, 300, 32, 'What time is it?', BLUE, 15), ar(160, 48, 160, 62, C.main), w(10, 64, 300, 32, 'It\'s seven thirty.', GREEN, 15), t(160, 124, '今の時刻をたずねる・答える', 12, C.ink, true)],
    'What time is it? — It\'s 〜.', BLUE),
  S('なぜ答えの主語が It なの？ → この it は「それ」という意味ではなく、時刻や天気を言うときに使う決まりの it だからです。日本語には当たる語がなく、そのまま It\'s 〜 と覚えます。',
    qa('答えの主語が It なのは？', 'この it は「それ」ではなく\n時刻を言うときの it\n\nIt\'s seven thirty.\nIt\'s Monday.', BLUE, 14),
    '時刻・曜日・日付の答えは It\'s 〜.', BLUE),
  S('「何時に〜しますか」は少しちがいます。What time do you get up? は、あなたが起きる時刻をたずねています。答えは I get up at six. のように、主語と動詞をそろえ、時刻の前に at を置きます。',
    [w(10, 10, 300, 30, 'What time do you get up?', MAIN, 14), ar(160, 42, 160, 56, C.main), ...chips([['I', BLUE], ['get up', GREEN], ['at six.', RED]], 58, 32, 14), t(160, 112, '時刻の前に at', 12, C.red, true), t(160, 136, 'What time does the movie start? — It starts at two.', 10, C.gray)],
    '「何時に〜」の答えは 主語＋動詞＋at ...', GREEN),
  S('なぜ同じ What time なのに、答え方が変わるの？ → うしろを見ると、たずねている中身がちがうからです。What time is it? は今の時刻そのもの、What time do you ...? はあなたの行動の時刻です。',
    [bx(12, 6, 296, 30, 'なぜ？ 同じ What time で答えが変わる？', PURPLE[0], PURPLE[1], 12), w(10, 46, 140, 56, 'What time is it?\n今の時刻\n→ It\'s 〜.', BLUE, 12), w(170, 46, 140, 56, 'What time do you ...?\nあなたの行動の時刻\n→ I ... at 〜.', GREEN, 11), t(160, 126, 'うしろの形を見て答えを決める', 12, C.ink, true)],
    'うしろまで読んでから答える', RED),
  S('曜日は What day is it today? とたずねます。答えは It\'s Monday.（月曜日です）。What day of the week is it? も同じ意味です。day は「曜日」と結びつけます。',
    [w(10, 14, 300, 32, 'What day is it today?', BLUE, 15), ar(160, 48, 160, 62, C.main), w(10, 64, 300, 32, 'It\'s Monday.', GREEN, 15), t(160, 124, 'day ＝ 曜日', 14, C.red, true), t(160, 146, '＝ What day of the week is it?', 11, C.gray)],
    'What day 〜? ＝ 曜日をたずねる', GREEN),
  S('日付は What\'s the date today? とたずねます。答えは It\'s May 5.（五月五日です）。日付をたずねるときは day ではなく date を使います。',
    [w(10, 14, 300, 32, 'What\'s the date today?', MAIN, 15), ar(160, 48, 160, 62, C.main), w(10, 64, 300, 32, 'It\'s May 5.', GREEN, 15), t(160, 124, 'date ＝ 日付', 14, C.red, true), t(160, 146, '日付をたずねるときは date', 11, C.gray)],
    'What\'s the date 〜? ＝ 日付をたずねる', MAIN),
  S('なぜ What day is it today? に It\'s May 5. と答えてはいけないの？ → day は「曜日」をたずねる語だからです。日本語の「何日？」「何曜日？」はどちらも「今日は何？」と言えるので、day を「日」と訳すと取りちがえます。',
    [bx(12, 6, 296, 30, 'なぜ？ day に日付で答えてはだめ？', PURPLE[0], PURPLE[1], 12), ...table(['たずね方', '意味', '答え'], [['What day', '曜日', 'It\'s Monday.'], ['What\'s the date', '日付', 'It\'s May 5.']], 14, 44, [100, 60, 126], 28, 12), t(160, 148, 'day ＝ 曜日　date ＝ 日付', 13, C.red, true)],
    'day は曜日、date は日付', RED),
  S('月は What month is it? — It\'s July.。誕生日は When is your birthday? — It\'s in April.。月の前には in を置きます。時刻の前は at、曜日は on、月は in と、答えの前置詞も確かめます。',
    [w(8, 10, 304, 28, 'What month is it? — It\'s July.', BLUE, 13), w(8, 44, 304, 28, 'When is your birthday? — It\'s in April.', GREEN, 13), ...table(['at', 'on', 'in'], [['時刻', '曜日', '月']], 40, 88, [80, 80, 80], 28, 13)],
    '時刻は at、曜日は on、月は in', YELLOW),
  S('まとめです。What time is it? は今の時刻（It\'s 〜）、What time do you ...? は行動の時刻（I ... at 〜）、What day は曜日、What\'s the date は日付です。たずね方と答え方をセットで覚えます。',
    [w(14, 10, 290, 28, 'What time is it? — It\'s 7:30.', BLUE, 13), w(14, 42, 290, 28, 'What time do you ...? — I ... at 6.', GREEN, 12), w(14, 74, 290, 28, 'What day ...? — It\'s Monday.', MAIN, 13), w(14, 106, 290, 28, 'What\'s the date ...? — It\'s May 5.', RED, 13)],
    '時刻・曜日・日付を区別する', YELLOW),
], 'What time / What day / What\'s the date'));

// ── which①：「どちら・どれ」と選ばせる疑問文（節0: Which の使い方） ──
reg('eigo_s198', 0, show([
  S('「コーヒーと紅茶、どちらがいいですか」は Which do you want, coffee or tea? です。えらぶものを or でならべ、コンマのあとにつけ足すのが英語のやり方です。',
    [w(10, 14, 300, 32, 'Which do you want, coffee or tea?', BLUE, 13), t(160, 66, 'どちらがほしいですか', 12, C.ink), w(20, 86, 120, 40, 'coffee', MAIN, 15), t(160, 106, 'or', 15, C.red, true), w(180, 86, 120, 40, 'tea', MAIN, 15)],
    'Which ＝ どれ・どちら', BLUE),
  S('なぜ What ではなく Which を使うの？ → 目の前に二つ以上のものが示されていて、その中から選ぶときは Which、範囲が決まっていなければ What を使うからです。',
    [bx(12, 6, 296, 30, 'なぜ？ What でなく Which？', PURPLE[0], PURPLE[1], 12), w(10, 46, 140, 70, 'Which\n範囲がある\n（この中のどれ）', BLUE, 12), w(170, 46, 140, 70, 'What\n範囲がない\n（なんでも）', GRAY, 12), t(160, 138, '選ぶものが見えているなら Which', 12, C.ink, true)],
    '示された中から選ぶ ＝ Which', BLUE),
  S('Which だけでも使えます。Which is your bag?（どれがあなたのかばんですか）。Which のあとに名詞も置けます。Which bus goes to the station?（どのバスが駅に行きますか）。What ＋ 名詞と同じ作り方です。',
    [...chips([['Which', BLUE], ['is your bag?', MAIN]], 14, 30, 14), t(160, 60, 'どれがあなたのかばんですか', 12, C.gray), ...chips([['Which bus', BLUE], ['goes to the station?', MAIN]], 84, 30, 14), t(160, 130, 'どのバスが駅に行きますか', 12, C.gray), t(160, 152, 'Which ＋ 名詞 はひとかたまり', 12, C.red, true)],
    'Which だけ／Which ＋ 名詞', GREEN),
  S('なぜ A and B ではなく A or B なの？ → and は「両方」という意味になってしまい、どちらかを選ばせる文にならないからです。選ばせるときは必ず or を使います。',
    [bx(12, 6, 296, 30, 'なぜ？ and ではなく or？', PURPLE[0], PURPLE[1], 12), w(20, 46, 280, 32, '× Which do you want, tea and coffee?', RED, 12), t(160, 92, 'and ＝ 両方', 12, C.red, true), w(20, 108, 280, 32, '○ Which do you want, tea or coffee?', GREEN, 12), t(160, 154, 'or ＝ どちらか', 12, C.green, true)],
    '選ばせる文は or', RED),
  S('語順を確かめましょう。Which ＋ 疑問文の語順 ＋ コンマ ＋ A or B ? です。Which is bigger, the sun or the moon?（太陽と月ではどちらが大きいですか）。Which のうしろは疑問文の形です。',
    [...chips([['Which', BLUE], ['do you want,', MAIN], ['tea', GREEN], ['or', RED], ['coffee?', GREEN]], 20, 32, 12), t(160, 66, '疑問詞　つづき　選ぶ A　or　選ぶ B', 11, C.gray), ...chips([['Which', BLUE], ['is bigger,', MAIN], ['the sun', GREEN], ['or', RED], ['the moon?', GREEN]], 90, 32, 12), t(160, 144, '太陽と月ではどちらが大きい？', 11, C.gray)],
    'Which ＋ 疑問文 , A or B ?', BLUE),
  S('なぜ Which の文は Yes / No で答えないの？ → 「はい・いいえ」を聞かれていないからです。選ばせる文なので、選んだほうを答えます。Which do you like, summer or winter? — I like summer.',
    [bx(12, 6, 296, 30, 'なぜ？ Yes / No で答えない？', PURPLE[0], PURPLE[1], 12), w(10, 44, 300, 30, 'Which do you like, summer or winter?', MAIN, 12), w(8, 86, 150, 32, '× Yes, I like summer.', RED, 12), w(168, 86, 144, 32, '○ I like summer.', GREEN, 13), t(160, 140, '選んだほうをそのまま答える', 12, C.ink, true)],
    '選ぶ文には、選んだものを答える', GREEN),
  S('読み方にも決まりがあります。A or B の疑問文では、A を上がり調子、B を下がり調子で読みます。最後まで上げるとYes / No の疑問文になってしまうので注意です。',
    [w(30, 30, 100, 40, 'tea', GREEN, 15), t(80, 88, '↗ 上げる', 13, C.green, true), t(160, 50, 'or', 15, C.red, true), w(190, 30, 100, 40, 'coffee', RED, 15), t(240, 88, '↘ 下げる', 13, C.red, true), t(160, 128, 'Which do you want, tea or coffee?', 12, C.ink)],
    'A は上がり調子、B は下がり調子', YELLOW),
  S('Which one do you want? の one は、前に出た名詞のくり返しをさけるための語です。答えも This one, please. のように one を使えます。ものがいくつか並んでいる場面で、よく使います。',
    [w(10, 14, 300, 32, 'Which one do you want?', BLUE, 14), ar(160, 48, 160, 62, C.main), w(10, 64, 300, 32, 'This one, please.', GREEN, 14), t(160, 124, 'one ＝ 前に出た名詞のかわり', 12, C.ink, true)],
    'Which one 〜? — This one.', GREEN),
  S('まとめです。Which は示された範囲から選ぶ疑問詞。選択肢は A or B で並べ（and は使わない）、答えは Yes / No ではなく選んだほうを言います。',
    [w(14, 12, 290, 32, 'Which ＝ 示された中から選ぶ', BLUE, 14), w(14, 52, 290, 32, 'A or B で並べる（and は使わない）', GREEN, 13), w(14, 92, 290, 32, 'Yes / No でなく、選んだほうを答える', RED, 13)],
    'Which ＋ or で選ばせる', YELLOW),
], 'Which と or で選ばせる'));

// ── who①：「だれ」をたずねる（節0: Who is 〜? の形と数の一致） ──
reg('eigo_s200', 0, show([
  S('「あの女の子はだれですか」は Who is that girl?、「あの子たちはだれですか」は Who are those girls? です。Who の形は変わらないのに、be動詞（どうし）はうしろの語に合わせて変わります。',
    [w(10, 14, 300, 32, 'Who is that girl?', BLUE, 15), t(160, 60, 'あの女の子は だれ？', 12, C.gray), w(10, 82, 300, 32, 'Who are those girls?', GREEN, 15), t(160, 128, 'あの女の子たちは だれ？', 12, C.gray), t(160, 150, 'Who は同じ　is と are が変わる', 12, C.red, true)],
    'Who は同じ形、be動詞が変わる', BLUE),
  S('なぜ be動詞は Who ではなく、うしろの語で決まるの？ → Who 自体は単数にも複数にも使えるからです。「だれ」は一人かもしれないし、何人かもしれないので、うしろの名詞を見て is か are かを決めます。',
    qa('be動詞は何で決まる？', 'Who は 一人にも 何人にも使える\n\nだから be動詞は\nうしろの語（主語）で決める', BLUE, 14),
    'Who ではなく、うしろの語を見る', BLUE),
  S('見分け方の表です。that girl は単数なので is、those girls は複数なので are、they は複数なので過去なら were です。Who were they? のように、過去の文でも同じ考え方です。',
    [...table(['うしろの語', '単数か複数か', 'be動詞'], [['that girl', '単数', 'is'], ['those girls', '複数', 'are'], ['they（過去）', '複数', 'were']], 14, 14, [110, 100, 76], 32, 12)],
    '単数 → is　複数 → are / were', GREEN),
  S('なぜ Who is those boys? は誤りなの？ → those boys は複数で、-s がついているからです。日本語の「あの子たちはだれですか」には単数・複数の区別がないので、つい is にしがちです。-s の有無を必ず見ます。',
    [bx(12, 6, 296, 30, 'なぜ？ Who is those boys? は誤り？', PURPLE[0], PURPLE[1], 12), w(20, 46, 280, 32, '× Who is those boys?', RED, 15), t(160, 92, 'those boys は複数（-s）', 12, C.red, true), w(20, 108, 280, 32, '○ Who are those boys?', GREEN, 15), t(160, 154, '-s がついていたら are', 12, C.green, true)],
    'うしろの名詞に -s があるか、を見る', RED),
  S('答え方です。Who is that man? — He is my uncle.。Who is she? — She is Ms. Green, our new teacher.。Who are those boys? — They are my classmates.。答えの主語は he / she / they の代名詞です。',
    [w(6, 10, 308, 28, 'Who is that man? — He is my uncle.', BLUE, 12), w(6, 44, 308, 28, 'Who is she? — She is Ms. Green.', MAIN, 12), w(6, 78, 308, 28, 'Who are those boys? — They are my classmates.', GREEN, 11), t(160, 126, '人をたずねられたら he / she / they で答える', 12, C.ink, true)],
    '答えは代名詞で受ける', BLUE),
  S('電話の決まり文句もあります。Who is calling, please?（どちら様ですか）に、This is Ken speaking.（ケンです）と答えます。電話では I am Ken. ではなく This is Ken. と言います。',
    [w(10, 14, 300, 30, 'Who is calling, please?', GRAY, 13), ar(160, 46, 160, 60, C.main), w(10, 62, 300, 30, '○ This is Ken speaking.', GREEN, 14), w(10, 100, 300, 30, '× I am Ken.', RED, 14), t(160, 150, '電話では This is ... と言う', 12, C.ink, true)],
    '電話の答えは This is 〜.', GREEN),
  S('Who\'s は Who is の短縮形（たんしゅくけい）です。Who\'s that boy? は Who is that boy? と同じ意味です。Whose（だれの）と発音が同じなので、書くときに取りちがえないようにします。',
    [w(30, 14, 120, 32, 'Who\'s', BLUE, 15), t(165, 30, '＝', 15, C.main, true), w(180, 14, 110, 32, 'Who is', BLUE, 15), w(30, 68, 120, 32, 'Whose', GREEN, 15), t(165, 84, '≠', 15, C.red, true), w(180, 68, 110, 32, 'だれの', GREEN, 14), t(160, 128, 'Who\'s と Whose は同じ発音', 12, C.ink, true)],
    'Who\'s ＝ Who is　Whose ＝ だれの', MAIN),
  S('まとめです。Who は人をたずねる語で、be動詞はうしろの主語に合わせます。those boys なら Who are、that girl なら Who is。答えは he / she / they の代名詞です。',
    [w(14, 12, 290, 32, 'Who is that girl? ／ Who are those girls?', BLUE, 12), w(14, 52, 290, 32, 'be動詞は うしろの語（単数か複数か）で決める', GREEN, 12), w(14, 92, 290, 32, '答えは he / she / they で受ける', MAIN, 13)],
    'Who の be動詞は、うしろを見る', YELLOW),
], 'Who is 〜? / Who are 〜?'));

export const XF_CEE_FIGURES: Record<string, DiagramFigure> = F;
export const XF_CEE_SECTIONS: Record<string, string> = SEC;
