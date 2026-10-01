// 中学受験 英語（小5〜）の単元に、動く図解スライドを足す（担当 ced）。
// 「なぜ？」の連鎖で7枚以上。上半分に図、下の帯（band）にそのスライドのひとこと。
import type { DiagramFigure, DiagramElement } from './figures';
import { show, bx, lb, ar, ln, ci, band, fresh, cover, C, FILL } from './diagram-kit';

type Slide = { note: string; add?: DiagramElement[] };

// 小学生向け：むずかしい言葉には、最初に出たとき1回だけ読みを添える（note だけ。図の文字は短いので添えない）。
const READ: [string, string][] = [
  ['不規則動詞', 'ふきそくどうし'], ['規則動詞', 'きそくどうし'], ['助動詞', 'じょどうし'], ['動詞', 'どうし'],
  ['原形', 'げんけい'], ['過去分詞', 'かこぶんし'], ['過去進行形', 'かこしんこうけい'], ['現在進行形', 'げんざいしんこうけい'],
  ['現在完了', 'げんざいかんりょう'], ['現在形', 'げんざいけい'], ['過去形', 'かこけい'], ['進行形', 'しんこうけい'],
  ['否定文', 'ひていぶん'], ['疑問文', 'ぎもんぶん'], ['疑問詞', 'ぎもんし'], ['主語', 'しゅご'],
  ['母音', 'ぼいん'], ['子音', 'しいん'], ['発音', 'はつおん'], ['音節', 'おんせつ'],
  ['三人称単数', 'さんにんしょうたんすう'], ['単数', 'たんすう'], ['複数', 'ふくすう'], ['継続', 'けいぞく'],
  ['完了', 'かんりょう'], ['状態', 'じょうたい'], ['動作', 'どうさ'], ['習慣', 'しゅうかん'],
  ['許可', 'きょか'], ['依頼', 'いらい'], ['推量', 'すいりょう'], ['義務', 'ぎむ'], ['助言', 'じょげん'],
  ['提案', 'ていあん'], ['意志', 'いし'], ['予測', 'よそく'], ['期間', 'きかん'], ['位置', 'いち'],
  ['区別', 'くべつ'], ['法則', 'ほうそく'], ['事実', 'じじつ'], ['時制', 'じせい'], ['未来', 'みらい'],
  ['経験', 'けいけん'], ['結果', 'けっか'], ['不変', 'ふへん'], ['肯定文', 'こうていぶん'], ['語順', 'ごじゅん'],
  ['丁寧', 'ていねい'], ['禁止', 'きんし'], ['必要', 'ひつよう'], ['可能', 'かのう'], ['推測', 'すいそく'],
  ['確信', 'かくしん'], ['決定', 'けってい'], ['短縮形', 'たんしゅくけい'], ['場面', 'ばめん'], ['存在', 'そんざい'],
  ['所有', 'しょゆう'], ['疑問', 'ぎもん'], ['否定', 'ひてい'], ['肯定', 'こうてい'], ['終了', 'しゅうりょう'],
];
const RE = new RegExp(READ.map(([k]) => k).sort((a, b) => b.length - a.length).join('|'), 'g');
const rd = (s: string): string => {
  const seen = new Set<string>();
  return s.replace(RE, (m, off: number) => {
    if (seen.has(m) || s[off + m.length] === '（') return m;
    seen.add(m);
    return m + '（' + READ.find(([k]) => k === m)![1] + '）';
  });
};
const S = (slides: Slide[], caption?: string): DiagramFigure => show(slides.map((s) => ({ ...s, note: rd(s.note) })), caption);

const cap = (t: string, color: string = C.ink, size = 12) => band(150, lb(160, 195, t, size, color, 'middle', true));
const cap2 = (t1: string, t2: string, color: string = C.ink) => band(150, lb(160, 180, t1, 12, color, 'middle', true), lb(160, 206, t2, 12, C.gray, 'middle'));

const uw = (s: string) => [...s].reduce((a, c) => a + (c.charCodeAt(0) < 256 ? 0.55 : 1), 0);
type Item = [string, string?, string?];
/** 単語の箱を横に並べる（全体が 300 に収まるよう文字を縮める）。 */
const row = (items: Item[], y: number, o?: { h?: number; size?: number; gap?: number }): DiagramElement[] => {
  const h = o?.h ?? 28;
  const gap = o?.gap ?? 5;
  let size = o?.size ?? 13;
  const widths = (sz: number) => items.map(([t]) => Math.max(26, Math.ceil(Math.max(...t.split('\n').map(uw)) * sz) + 12));
  let ws = widths(size);
  while (ws.reduce((a, b) => a + b, 0) + gap * (items.length - 1) > 304 && size > 8) {
    size -= 0.5;
    ws = widths(size);
  }
  const total = ws.reduce((a, b) => a + b, 0) + gap * (items.length - 1);
  let x = (320 - total) / 2;
  return items.map(([t, c, f], i) => {
    const e = bx(x, y, ws[i], h, t, c ?? C.blue, f ?? FILL.blue, size);
    x += ws[i] + gap;
    return e;
  });
};
/** 横いっぱいの1行の箱。 */
const wide = (y: number, text: string, color: string = C.blue, fill: string = FILL.blue, size = 12, h = 28, x = 10, w = 300) =>
  bx(x, y, w, h, text, color, fill, size);
/** 表。cols は列の幅、rows[0] は見出し。 */
const tbl = (x: number, y: number, cols: number[], rows: string[][], o?: { h?: number; size?: number; color?: string; fill?: string; head?: string; colors?: (string | undefined)[] }): DiagramElement[] => {
  const h = o?.h ?? 22;
  const out: DiagramElement[] = [];
  rows.forEach((r, i) => {
    let cx = x;
    r.forEach((t, j) => {
      const isHead = i === 0;
      out.push(bx(cx, y + i * h, cols[j], h, t, isHead ? C.gray : o?.colors?.[j] ?? o?.color ?? C.blue, isHead ? (o?.head ?? FILL.gray) : o?.fill ?? FILL.blue, o?.size ?? 11));
      cx += cols[j];
    });
  });
  return out;
};
const ok = (x: number, y: number) => lb(x, y, '○', 16, C.green, 'middle', true);
const ng = (x: number, y: number) => lb(x, y, '×', 16, C.red, 'middle', true);

// ───────── eigo_s118 現在形③：いつでも変わらない事実 ─────────
const eigo_s118 = S([
  {
    note: '「太陽は東からのぼる」を英語にします。昨日の話でも、100年前の話でも、形はいっしょです。どんな形になるでしょう。',
    add: [wide(20, 'The sun rises in the east.', C.main, FILL.warm, 14, 36), lb(160, 82, '昨日の話でも　100年前の話でも', 12, C.gray, 'middle'), ...cap('いつの話でも、この形')],
  },
  {
    note: '❓なぜ昔の話でも過去形にしないのでしょう。→ 「太陽が東からのぼる」のは、昨日も今日も明日も変わらない「いつでもそうだ」ということだからです。いつでもそうなことは、現在形で書きます。',
    add: fresh(lb(160, 14, '太陽が東からのぼる', 12, C.ink, 'middle', true), bx(10, 30, 92, 40, '昨日\n東からのぼる', C.blue, FILL.blue, 11), bx(114, 30, 92, 40, '今日\n東からのぼる', C.blue, FILL.blue, 11), bx(218, 30, 92, 40, '明日\n東からのぼる', C.blue, FILL.blue, 11), ok(56, 86), ok(160, 86), ok(264, 86), lb(160, 118, 'いつでもそう → 現在形', 13, C.green, 'middle', true), ...cap('「今」ではなく「いつでも」')),
  },
  {
    note: '同じように、水の性質も現在形です。水はセ氏100度でふっとうし、0度でこおります。主語の Water は三人称単数なので、boils と freezes のように s がつきます。',
    add: fresh(wide(14, 'Water boils at 100 degrees Celsius.', C.red, FILL.red, 13, 32), lb(160, 62, '水はセ氏100度でふっとうする', 11, C.gray), wide(78, 'Water freezes at zero degrees Celsius.', C.blue, FILL.blue, 13, 32), lb(160, 126, '水はセ氏0度でこおる', 11, C.gray), ...cap('Water は 三人称単数 → boils / freezes')),
  },
  {
    note: '❓では、実験したのは昨日だから Water boiled と書いてよいでしょうか。→ だめです。「水が100度でふっとうする」という性質は今も変わりません。過去形にするのは「昨日、水を熱したらふっとうした」のような、その日の1回の出来事を話すときだけです。',
    add: fresh(wide(10, 'Water boiled at 100 degrees.', C.red, FILL.red, 13, 28), ng(160, 54), lb(160, 72, '性質なのに「そのとき限り」に聞こえる', 11, C.red), wide(90, 'Yesterday we heated the water, and it boiled.', C.green, FILL.green, 11, 28), ok(160, 134), ...cap2('昨日の1回の出来事なら boiled でよい', '性質は boils')),
  },
  {
    note: '❓「地球は太陽のまわりを回っている」の「〜ている」は進行形ではないの？ → 日本語の「〜ている」は、「今やっている最中」にも「いつもそうだ」にも使える、あいまいな言い方です。地球の話はいつでもそうなので、現在形の The earth goes around the sun. です。',
    add: fresh(wide(10, 'The earth is going around the sun.', C.red, FILL.red, 12, 28), ng(160, 54), wide(72, 'The earth goes around the sun.', C.green, FILL.green, 13, 30), ok(160, 118), ...cap2('「〜ている」を見たら自分に聞く', '今だけ？　いつでも？')),
  },
  {
    note: '❓では進行形はいつ使うのでしょう。→ 「今この瞬間だけ」のときです。いつでもそうなら現在形、今だけなら進行形と、英語ははっきり分かれます。',
    add: fresh(bx(10, 20, 145, 56, 'いつでもそう\n現在形\ngoes', C.green, FILL.green, 12), bx(165, 20, 145, 56, '今この瞬間だけ\n進行形\nis going', C.purple, FILL.purple, 12), lb(160, 110, '日本語はどちらも「〜ている」', 12, C.gray, 'middle'), ...cap('英語は2つに分けて使う')),
  },
  {
    note: '時刻表や決まりごとも「いつでもそう」なので現在形です。まだ先のことでも、決まっていることは現在形で書きます。銀行は9時に開く、学校は4月に始まる、電車は6時30分に出る。',
    add: fresh(wide(12, 'The bank opens at nine.', C.blue, FILL.blue, 12, 28), wide(46, 'Our school starts in April.', C.blue, FILL.blue, 12, 28), wide(80, 'The train leaves at 6:30.', C.blue, FILL.blue, 12, 28), lb(160, 126, '動かない決まりごと → 現在形', 12, C.green, 'middle', true), ...cap('時刻表も現在形')),
  },
  {
    note: '❓「パンダは竹を食べる」のように、ものの性質を一般的に言うときは？ → 主語を複数形にした Pandas eat bamboo. がよく使われます。「パンダというものは」という感じがよく出るからです。A panda eats bamboo. でもまちがいではありません。',
    add: fresh(wide(14, 'Pandas eat bamboo.', C.main, FILL.warm, 14, 32), lb(160, 64, 'パンダは竹を食べる（複数形が自然）', 11, C.gray), wide(82, 'A panda eats bamboo.', C.blue, FILL.blue, 12, 28), lb(160, 126, 'これも まちがいではない', 11, C.gray), ...cap('性質は、複数形の主語で言うことが多い')),
  },
  {
    note: 'まとめです。現在形は「今」だけを指す形ではなく、「時間に左右されない形」です。習慣も、自然の法則も、時刻表も、「いつでもそうだ」から現在形になります。',
    add: fresh(bx(105, 12, 110, 34, '現在形', C.main, FILL.warm, 15), ar(120, 48, 60, 74, C.blue), ar(160, 48, 160, 74, C.blue), ar(200, 48, 260, 74, C.blue), bx(10, 76, 100, 34, '習慣', C.blue, FILL.blue, 12), bx(110, 76, 100, 34, '自然の法則', C.green, FILL.green, 12), bx(210, 76, 100, 34, '時刻表', C.purple, FILL.purple, 12), ...cap('「いつでもそう」＝現在形', C.main)),
  },
], '現在形は「時間に左右されない形」');

// ───────── eigo_s119 現在形④：be動詞と一般動詞 ─────────
const eigo_s119 = S([
  {
    note: '「私は野球が好きです」を英語にします。文の終わりが「です」なので、I am と書き始めたくなります。さて、正しい文はどれでしょう。',
    add: [wide(16, 'I am like baseball.', C.red, FILL.red, 13, 28), wide(54, 'I like baseball.', C.green, FILL.green, 13, 28), lb(160, 110, 'どちらが正しい？', 13, C.ink, 'middle', true), ...cap('「です」＝ am とは限らない')],
  },
  {
    note: '❓なぜ I am like がだめなのでしょう。→ be動詞は「主語＝後ろの語」を表す動詞で、like は「〜が好きだ」という意味をそれだけで持つ一般動詞です。1つの文の中心になる動詞は1つだけなので、並べてはいけません。',
    add: fresh(...row([['I', C.gray, FILL.gray], ['am', C.red, FILL.red], ['like', C.red, FILL.red], ['baseball.', C.gray, FILL.gray]], 24, { h: 32, size: 14 }), lb(160, 76, '動詞が2つ → 中心がぶつかる', 12, C.red, 'middle', true), ng(160, 112), ...cap('文の中心の動詞は1つだけ')),
  },
  {
    note: '❓では be動詞は何を表すのでしょう。→ 主語によって形が変わります。I は am、you と複数は are、he・she・it のような三人称単数は is。意味は「＝」か「いる」で、形がちがうだけです。',
    add: fresh(...tbl(16, 12, [90, 60, 130], [['主語', 'be動詞', '例'], ['I', 'am', 'I am a student.'], ['you・複数', 'are', 'You are kind.'], ['三人称単数', 'is', 'He is my brother.']], { h: 26, size: 11, colors: [C.blue, C.red, C.green] }), lb(160, 134, '意味は「＝」「いる」。形が変わるだけ', 11, C.gray, 'middle'), ...cap('主語で am / are / is が決まる')),
  },
  {
    note: '❓では一般動詞はどんなとき使うのでしょう。→ like（好きだ）、know（知っている）、have（持っている）、live（住んでいる）、want（ほしい）のように、動作や「今の状態」を表します。これらは現在形のままで「今のこと」を言えます。',
    add: fresh(...tbl(24, 10, [90, 182], [['動詞', '意味と例'], ['like', 'I like music.（好きだ）'], ['know', 'I know his name.（知っている）'], ['have', 'He has two dogs.（飼っている）'], ['live', 'She lives in Osaka.（住んでいる）']], { h: 24, size: 11, colors: [C.green, C.blue] }), ...cap('状態を表す動詞は現在形で今のこと')),
  },
  {
    note: '❓日本語は「知っています」「飼っています」なのに、I am knowing と進行形にしないのはなぜ？ → know や have は「今の状態」を表す動詞で、動作の途中ではないからです。進行形にしません。',
    add: fresh(wide(12, 'I am knowing his name.', C.red, FILL.red, 12, 28), ng(160, 54), wide(70, 'I know his name.', C.green, FILL.green, 13, 28), ok(160, 112), ...cap2('「〜ている」でも、状態なら現在形', 'know / have / live / want')),
  },
  {
    note: '「〜があります」には There is / There are も使います。机の上に本が1冊なら There is、3冊なら There are です。❓is と are は何で決めるの？ → There ではなく、後ろに来る名詞の数で決めます。',
    add: fresh(wide(10, 'There is a book on the desk.', C.blue, FILL.blue, 12, 28), lb(160, 52, '本が1冊（単数）→ is', 11, C.blue), wide(66, 'There are three books on the desk.', C.green, FILL.green, 12, 28), lb(160, 108, '本が3冊（複数）→ are', 11, C.green), lb(160, 132, '後ろの名詞の数に合わせる', 12, C.ink, 'middle', true), ...cap('There is ＋ 単数　/　There are ＋ 複数')),
  },
  {
    note: '❓では There is と have はどう使い分けるのでしょう。→ どちらも日本語では「あります」ですが、There is は「そこに存在する」、have は「だれかが持っている」です。だれのものかを言いたいときは have を使います。',
    add: fresh(bx(10, 14, 145, 44, 'There is a park\nnear my house.', C.blue, FILL.blue, 11), bx(165, 14, 145, 44, 'I have a bike.', C.green, FILL.green, 12), lb(82, 76, '場所に存在する', 12, C.blue, 'middle', true), lb(238, 76, 'だれかが持っている', 12, C.green, 'middle', true), lb(160, 118, 'だれのものか言うなら have', 12, C.ink, 'middle', true), ...cap('There is ＝ 存在　/　have ＝ 持っている')),
  },
  {
    note: '注意が1つあります。There is のあとには、my や the が付いた名詞は置きません。「私の自転車はガレージにあります」は My bike is in the garage. と書きます。',
    add: fresh(wide(14, 'There is my bike in the garage.', C.red, FILL.red, 12, 28), ng(160, 56), wide(74, 'My bike is in the garage.', C.green, FILL.green, 13, 28), ok(160, 118), ...cap('my / the のついた名詞は There is に置かない')),
  },
  {
    note: 'まとめです。①be動詞は「＝」、一般動詞は動作や状態。文の中心にするのはどちらか1つ。②like や know は進行形にしない。③「〜がある」は、後ろの名詞の数で There is / are を選ぶ。',
    add: fresh(wide(12, '① I like baseball.　（am は入れない）', C.blue, FILL.blue, 12, 30), wide(50, '② I know his name.　（進行形にしない）', C.green, FILL.green, 12, 30), wide(88, '③ There are three books.（名詞の数で選ぶ）', C.purple, FILL.purple, 12, 30), ...cap('中心の動詞は1つ', C.main)),
  },
], '現在形：今の状態を表す文');

// ───────── eigo_s121 過去形②：-ed のつけ方 ─────────
const eigo_s121 = S([
  {
    note: 'stop の過去形は stopped、study の過去形は studied、like の過去形は liked。同じ -ed をつけるだけなのに、つづりが変わります。なぜでしょう。語の最後の形で決まるので、順にたどりましょう。',
    add: [...row([['stop → stopped', C.blue, FILL.blue], ['study → studied', C.green, FILL.green]], 16, { h: 30, size: 12 }), ...row([['like → liked', C.purple, FILL.purple], ['play → played', C.main, FILL.warm]], 56, { h: 30, size: 12 }), ...cap('語の最後を見て決める')],
  },
  {
    note: '①いちばん多いのは、そのまま -ed をつける型です。play → played、watch → watched、want → wanted、open → opened。',
    add: fresh(...tbl(30, 10, [110, 150], [['原形', '過去形'], ['play', 'played'], ['watch', 'watched'], ['want', 'wanted'], ['open', 'opened']], { h: 26, size: 12, colors: [C.blue, C.green] }), ...cap('① そのまま ＋ed')),
  },
  {
    note: '❓e で終わる語はなぜ -d だけなのでしょう。→ すでに最後に e があるので、d を1つ足せば -ed と同じ形になるからです。like に -ed をつけて likeed と書くと e が2つになってしまいます。',
    add: fresh(...row([['l', C.gray, FILL.gray], ['i', C.gray, FILL.gray], ['k', C.gray, FILL.gray], ['e', C.red, FILL.red], ['＋ d', C.green, FILL.green], ['＝ liked', C.main, FILL.warm]], 20, { h: 34, size: 14 }), wide(76, 'like → liked　live → lived　use → used', C.purple, FILL.purple, 12, 28), ...cap('② e で終わる → d だけ足す')),
  },
  {
    note: '❓study はどうして studied になるのでしょう。→ 最後が「子音字（しいんじ）＋y」のときは、y を i に変えて -ed をつけます。study → studied、carry → carried、cry → cried、try → tried。三人称単数のときの -es と同じ考え方です。',
    add: fresh(...row([['s t u d', C.gray, FILL.gray], ['y', C.red, FILL.red], ['→', C.ink, FILL.gray], ['i', C.green, FILL.green], ['＋ ed', C.green, FILL.green]], 20, { h: 34, size: 14 }), wide(76, 'carry → carried　cry → cried　try → tried', C.purple, FILL.purple, 12, 28), ...cap('③ 子音字 ＋ y → y を i に変える')),
  },
  {
    note: '❓では play も y を i に変えるのでしょうか。→ 変えません。y の前が a や o などの母音字（ぼいんじ）のときは、そのまま -ed をつけます。play → played、enjoy → enjoyed、stay → stayed。plaied と書くのはまちがいです。',
    add: fresh(bx(15, 14, 135, 40, 'stu d y\n前が d（子音字）', C.red, FILL.red, 12), bx(170, 14, 135, 40, 'pla y\n前が a（母音字）', C.green, FILL.green, 12), lb(82, 74, 'y → i に変える', 12, C.red, 'middle', true), lb(238, 74, 'そのまま ＋ed', 12, C.green, 'middle', true), wide(98, 'play → played　enjoy → enjoyed　stay → stayed', C.blue, FILL.blue, 11, 28), ...cap('④ 母音字 ＋ y → そのまま')),
  },
  {
    note: '❓stop は stoped ではなく、なぜ p を2つ重ねるのでしょう。→ 「短い母音1つ＋子音字1つ」で終わる語は、最後の子音字を重ねて母音が短いままだと示すからです。stoped と書くと、「ストゥープト」と長く読む語に見えてしまいます。',
    add: fresh(...row([['s t o p', C.gray, FILL.gray], ['＋ p', C.red, FILL.red], ['＋ ed', C.green, FILL.green], ['＝ stopped', C.main, FILL.warm]], 20, { h: 34, size: 14 }), wide(76, 'plan → planned　drop → dropped　shop → shopped', C.purple, FILL.purple, 12, 28), ...cap('⑤ 短い母音 ＋ 子音字1つ → 子音字を重ねる')),
  },
  {
    note: '❓ではどんな語でも重ねてよいのでしょうか。→ だめです。visit は前を強く読む2つの音のかたまり（おとのかたまり）なので visited、wait は ai と母音字が2つ並ぶので waited、help は lp と子音字が2つなので helped。重ねるのは条件がそろったときだけです。',
    add: fresh(...tbl(14, 8, [90, 130, 76], [['原形', 'なぜ重ねない', '過去形'], ['visit', '前を強く読む', 'visited'], ['open', '前を強く読む', 'opened'], ['wait', '母音字が2つ', 'waited'], ['help', '子音字が2つ', 'helped'], ['look', '母音字が2つ', 'looked']], { h: 23, size: 11, colors: [C.red, C.gray, C.green] }), ...cap('visitted・waitted は まちがい', C.red)),
  },
  {
    note: 'まとめです。語の最後を見ます。e なら d だけ。「子音字＋y」なら i にかえて -ed。「短い母音1つ＋子音字1つ」で1音のかたまりなら子音字を重ねる。それ以外はそのまま -ed。左の stop と右の visit のように、並べて覚えましょう。',
    add: fresh(...tbl(14, 8, [150, 156], [['重ねる', '重ねない'], ['stop → stopped', 'visit → visited'], ['plan → planned', 'open → opened'], ['drop → dropped', 'wait → waited']], { h: 30, size: 12, colors: [C.green, C.red] }), lb(160, 140, '最後を見る：e／子音字＋y／短い母音＋子音字', 11, C.gray, 'middle'), ...cap('重ねる語と重ねない語を並べて覚える', C.main)),
  },
], '-ed のつけ方：語の最後で決まる');

// ───────── eigo_s122 過去形③：-ed の発音 ─────────
const eigo_s122 = S([
  {
    note: 'wanted は「ウォンティド」と読み、want（ウォント）より音のかたまりが1つ増えます。ところが looked は「ルックト」で増えません。同じ -ed なのに、読み方が3通りあります。',
    add: [...row([['wanted', C.red, FILL.red], ['looked', C.blue, FILL.blue], ['played', C.green, FILL.green]], 18, { h: 34, size: 15 }), ...row([['ウォンティド', C.red, FILL.red], ['ルックト', C.blue, FILL.blue], ['プレイド', C.green, FILL.green]], 62, { h: 30, size: 12 }), ...cap('-ed の読み方は3通り')],
  },
  {
    note: '❓どうやって3つを見分けるのでしょう。→ -ed の直前の音を見ます。まず t か d の音なら［id］（イド）。そうでなければ、のどがふるえない音のあとは［t］（ト）、ふるえる音と母音のあとは［d］（ド）です。',
    add: fresh(bx(100, 8, 120, 28, '-ed の直前の音は？', C.main, FILL.warm, 12), ar(130, 38, 60, 62, C.red), ar(160, 38, 160, 62, C.blue), ar(190, 38, 260, 62, C.green), bx(10, 64, 100, 44, 't か d の音\n→ ［id］', C.red, FILL.red, 11), bx(110, 64, 100, 44, 'のどがふるえない\n→ ［t］', C.blue, FILL.blue, 11), bx(210, 64, 100, 44, 'それ以外\n→ ［d］', C.green, FILL.green, 11), ...cap('まず t / d かどうか')),
  },
  {
    note: '❓なぜ t・d のあとだけ［id］になるのでしょう。→ want のあとに t（ト）をつなげると「ウォントト」と言いにくいので、間に母音（イ）を入れるからです。だから音のかたまりが1つ増えます（want は1つ、wanted は2つ）。',
    add: fresh(...row([['want', C.gray, FILL.gray], ['＋ t', C.red, FILL.red], ['言いにくい！', C.red, FILL.red]], 14, { h: 30, size: 13 }), ...row([['want', C.gray, FILL.gray], ['＋ id', C.green, FILL.green], ['＝ wanted', C.main, FILL.warm]], 58, { h: 30, size: 13 }), lb(160, 114, 'needed・visited・started・decided も同じ', 12, C.ink, 'middle'), ...cap('間に「イ」を入れて読みやすく')),
  },
  {
    note: '❓［t］と［d］はどうちがうのでしょう。→ k・p・s・sh・ch・f のような、息だけで出す音（のどがふるえない音）のあとは［t］。looked（ルックト）、stopped（ストップト）、washed（ウォッシュト）、watched（ウォッチト）。母音は入らず、ト とだけ言います。',
    add: fresh(...tbl(24, 10, [90, 100, 82], [['原形の終わり', '例', '-ed の音'], ['k', 'looked', 'ト［t］'], ['p', 'stopped', 'ト［t］'], ['sh', 'washed', 'ト［t］'], ['ch', 'watched', 'ト［t］']], { h: 23, size: 11, colors: [C.gray, C.blue, C.blue] }), lb(160, 142, '息だけの音のあと', 12, C.blue, 'middle', true), ...cap('のどがふるえない → ［t］')),
  },
  {
    note: 'それ以外の音（のどがふるえる音や母音）のあとは［d］（ド）です。played（プレイド）、opened（オープンド）、listened（リスンド）、cleaned（クリーンド）、lived（リヴド）、enjoyed（エンジョイド）。',
    add: fresh(...tbl(24, 10, [90, 100, 82], [['原形の終わり', '例', '-ed の音'], ['ay（母音）', 'played', 'ド［d］'], ['n', 'opened', 'ド［d］'], ['v', 'lived', 'ド［d］'], ['oy（母音）', 'enjoyed', 'ド［d］']], { h: 23, size: 11, colors: [C.gray, C.green, C.green] }), lb(160, 142, 'のどがふるえる音・母音のあと', 12, C.green, 'middle', true), ...cap('それ以外 → ［d］')),
  },
  {
    note: '❓stopped は p が2つあって長いから、「ストッピド」と3つの音で読むの？ → 読みません。［id］になるのは直前が t か d のときだけで、stop の最後は p なので［t］。「ストップト」と1つのかたまりで読みます。つづりが長くなっても、音は増えません。',
    add: fresh(wide(12, 'stopped　×「ストッピド」　○「ストップト」', C.main, FILL.warm, 12, 30), ...row([['stop', C.gray, FILL.gray], ['p の音', C.blue, FILL.blue], ['→ ［t］', C.blue, FILL.blue]], 56, { h: 30, size: 13 }), lb(160, 110, 'つづりでなく「音」で決める', 12, C.ink, 'middle', true), ...cap('音のかたまりは1つのまま')),
  },
  {
    note: 'つづりにも気をつけます。die は e で終わるので died（d だけ足す）。lie → lied、tie → tied も同じです。❓dyed ではないの？ → dyed は dye（染める）という別の動詞の過去形です。「死んだ」は died と書きます。',
    add: fresh(...tbl(24, 8, [90, 90, 92], [['原形', '過去形', '意味'], ['die', 'died', '死んだ'], ['lie', 'lied', 'うそをついた'], ['tie', 'tied', '結んだ'], ['dye', 'dyed', '染めた']], { h: 21, size: 11, colors: [C.green, C.green, C.gray] }), wide(118, 'The dog died three years ago.', C.blue, FILL.blue, 11, 24), ...cap('「死んだ」は died')),
  },
  {
    note: 'もう1つ。agree（同意する）は最後が ee なので、そのまま d を足して agreed です。free も freed です。e が3つ並ぶ eed ではなく、ee ＋ d と考えます。',
    add: fresh(...row([['agree', C.gray, FILL.gray], ['＋ d', C.green, FILL.green], ['＝ agreed', C.main, FILL.warm]], 20, { h: 34, size: 14 }), ...row([['free', C.gray, FILL.gray], ['＋ d', C.green, FILL.green], ['＝ freed', C.main, FILL.warm]], 66, { h: 34, size: 14 }), ...cap('ee で終わる語もまず d だけ')),
  },
  {
    note: 'まとめです。-ed の読みは直前の音で決めます。①t か d の音なら［id］②のどがふるえない音なら［t］③それ以外は［d］。練習：walked［t］、needed［id］、played［d］、washed［t］、visited［id］、opened［d］。',
    add: fresh(...tbl(14, 8, [100, 100, 106], [['読み', '例', '直前の音'], ['［id］', 'needed・visited', 't か d'], ['［t］', 'walked・washed', '息だけの音'], ['［d］', 'played・opened', 'それ以外']], { h: 28, size: 11, colors: [C.red, C.blue, C.green] }), lb(160, 130, 'yesterday などの語も手がかりにする', 11, C.gray, 'middle'), ...cap('まず t / d かどうか', C.main)),
  },
], '-ed の読み方：3つの音');

// ───────── eigo_s123 過去形④：否定文・疑問文（did） ─────────
const eigo_s123 = S([
  {
    note: '「あなたは昨日、テニスをしましたか」を英語にします。Did you played tennis yesterday? と書く人がとても多いのですが、これはまちがいです。どこがまちがっているのでしょう。',
    add: [wide(20, 'Did you played tennis yesterday?', C.red, FILL.red, 13, 32), ng(160, 70), lb(160, 98, 'どの語がおかしい？', 13, C.ink, 'middle', true), ...cap('過去の疑問文の作り方')],
  },
  {
    note: '❓なぜ played がおかしいのでしょう。→ Did がすでに「過去」を表しているからです。過去のしるしを did と played の2か所につけると二重になります。did のあとの動詞は、原形（もとの形）にもどします。',
    add: fresh(...row([['Did', C.purple, FILL.purple], ['you', C.gray, FILL.gray], ['play', C.green, FILL.green], ['tennis', C.gray, FILL.gray], ['yesterday?', C.gray, FILL.gray]], 20, { h: 34, size: 13 }), lb(60, 66, '過去を引き受ける', 11, C.purple, 'middle', true), lb(188, 66, '原形にもどす', 11, C.green, 'middle', true), ok(188, 92), wide(108, 'Did you play tennis yesterday?', C.green, FILL.green, 12, 28), ...cap('Did のあとは、必ず原形')),
  },
  {
    note: '答え方も did を使います。Yes, I did. / No, I didn\'t. 聞かれた言葉で答える、が英語の決まりです。質問の Did を、答えでもそのまま使います。',
    add: fresh(wide(12, 'Did you play tennis?', C.blue, FILL.blue, 13, 30), ar(160, 44, 160, 62, C.gray), bx(20, 64, 130, 34, 'Yes, I did.', C.green, FILL.green, 13), bx(170, 64, 130, 34, "No, I didn't.", C.red, FILL.red, 13), lb(160, 126, '内容を続けるなら I played tennis with Ken.（過去形）', 10, C.gray, 'middle'), ...cap('Did で聞かれたら did で答える')),
  },
  {
    note: '否定文は did not（短くすると didn\'t）＋動詞の原形です。I played tennis. → I didn\'t play tennis. ❓主語が he や she のときは変わるの？ → 変わりません。現在形は don\'t と doesn\'t を使い分けましたが、過去形は didn\'t だけです。',
    add: fresh(wide(12, 'I played tennis.', C.blue, FILL.blue, 12, 26), ar(160, 40, 160, 56, C.red), wide(58, "I didn't play tennis.", C.red, FILL.red, 13, 28), lb(160, 104, 'He watched TV. → He didn\'t watch TV.', 12, C.ink, 'middle'), lb(160, 126, '主語が何でも didn\'t は同じ', 12, C.green, 'middle', true), ...cap("didn't ＋ 原形")),
  },
  {
    note: '疑問詞（what・where・when）があるときは、疑問詞を先頭に置いて、そのあとを疑問文の順番にします。「疑問詞＋did＋主語＋原形」です。答えの文では、また過去形にもどります。',
    add: fresh(...row([['What', C.red, FILL.red], ['did', C.purple, FILL.purple], ['you', C.gray, FILL.gray], ['do', C.green, FILL.green], ['yesterday?', C.gray, FILL.gray]], 12, { h: 30, size: 13 }), bx(30, 56, 260, 28, 'I studied math.（答えは過去形）', C.blue, FILL.blue, 12), wide(94, 'Where did he go?　― He went to the library.', C.blue, FILL.blue, 11, 26), ...cap('疑問詞 ＋ did ＋ 主語 ＋ 原形')),
  },
  {
    note: '❓では「彼は昨日、家にいましたか」はどうでしょう。「過去の疑問文だから Did」と考えて Did he be at home? と書くのは、まちがいです。「いた」は be動詞の文だからです。',
    add: fresh(wide(14, 'Did he be at home yesterday?', C.red, FILL.red, 13, 30), ng(160, 62), lb(160, 88, '「いました」＝ be動詞の過去 was / were', 12, C.ink, 'middle', true), ...cap2('did を使うのは一般動詞の文だけ', 'be動詞の文は be動詞を動かす')),
  },
  {
    note: 'be動詞の文は、現在形のときと同じで be動詞そのものを動かします。否定文は was not（wasn\'t）や were not（weren\'t）。疑問文は was / were を主語の前に出して、Was he at home? と書きます。',
    add: fresh(...tbl(8, 8, [150, 154], [['肯定文', '疑問文'], ['He was at home.', 'Was he at home?'], ['You were tired.', 'Were you tired?']], { h: 28, size: 12, colors: [C.blue, C.green] }), wide(98, 'I was not (wasn\'t) busy.　They weren\'t at home.', C.red, FILL.red, 11, 26), ...cap('was / were を前に出す。did は使わない')),
  },
  {
    note: 'もう1つ。過去進行形も be動詞の文なので、did は使いません。Did you doing your homework? ではなく、Were you doing your homework?（宿題をしていましたか）です。迷ったら、まず肯定文を作ります。was / were があれば be動詞の文です。',
    add: fresh(wide(12, 'Did you doing your homework?', C.red, FILL.red, 12, 28), ng(160, 54), wide(70, 'Were you doing your homework?', C.green, FILL.green, 12, 28), ok(160, 112), ...cap('肯定文に was / were があるか見る')),
  },
  {
    note: 'まとめです。①一般動詞の過去の否定・疑問は did を使い、あとは原形。②be動詞の過去は was / were を動かす。③答えも質問と同じ語（did / was / were）を使う。',
    add: fresh(wide(10, "① 一般動詞：Did you play ...? / didn't play", C.purple, FILL.purple, 11, 30), wide(48, '② be動詞：Was he ...? / wasn\'t', C.green, FILL.green, 12, 30), wide(86, '③ 答え：Yes, I did. / Yes, he was.', C.blue, FILL.blue, 12, 30), ...cap('did の次は原形', C.main)),
  },
], '過去の否定文・疑問文');

// ───────── eigo_s125 不規則動詞②：A-B-B型 ─────────
const eigo_s125 = S([
  {
    note: 'buy は bought、bring は brought、think は thought。ばらばらに覚えると多く感じますが、音の似たものを組にすると一気に減ります。過去形と過去分詞が同じ形になる A-B-B 型は、不規則動詞のおよそ半分です。',
    add: [...row([['buy', C.gray, FILL.gray], ['bought', C.green, FILL.green], ['bought', C.green, FILL.green]], 20, { h: 32, size: 14 }), lb(160, 72, '原形A　　過去形B　　過去分詞B', 11, C.gray), lb(160, 100, 'Bが2回 → A-B-B 型', 13, C.main, 'middle', true), ...cap('2つ覚えれば足りる、いちばん楽な型')],
  },
  {
    note: '❓どうして A-B-B 型は覚えやすいのでしょう。→ 過去形と過去分詞が同じなので、覚えるのは「原形」と「Bの形」の2つだけだからです。3つとも別の A-B-C 型より、ずっと楽です。',
    add: fresh(...tbl(30, 12, [100, 90, 90], [['型', '覚える数', '例'], ['A-B-B', '2つ', 'buy・bought'], ['A-B-C', '3つ', 'go・went・gone']], { h: 30, size: 12, colors: [C.green, C.green, C.blue] }), lb(160, 118, 'A-B-B は不規則動詞のおよそ半分', 12, C.ink, 'middle', true), ...cap('同じ形が2回で楽')),
  },
  {
    note: 'まずオート・アート組。buy-bought、bring-brought、think-thought、fight-fought、teach-taught、catch-caught。❓どうしてまとめられるの？ → 過去形の読みが「オート」「アート」と似ているので、声に出してまとめて唱えると覚えやすいからです。',
    add: fresh(...tbl(30, 8, [120, 160], [['原形', '過去形 ＝ 過去分詞'], ['buy', 'bought（買った）'], ['bring', 'brought（持ってきた）'], ['think', 'thought（思った）'], ['teach', 'taught（教えた）'], ['catch', 'caught（つかまえた）']], { h: 23, size: 11, colors: [C.blue, C.green] }), ...cap('オート・アート組')),
  },
  {
    note: '次にエプト・エルト組。keep-kept、sleep-slept、feel-felt、leave-left、lose-lost、build-built、spend-spent、send-sent。最後が t で終わる形にそろっています。',
    add: fresh(...tbl(14, 8, [140, 152], [['原形', '過去形 ＝ 過去分詞'], ['keep / sleep', 'kept / slept'], ['feel / leave', 'felt / left'], ['lose / build', 'lost / built'], ['spend / send', 'spent / sent']], { h: 23, size: 12, colors: [C.blue, C.green] }), lb(160, 134, 'どれも最後が t', 12, C.ink, 'middle', true), ...cap('エプト・エルト組')),
  },
  {
    note: 'オールド組は tell-told、sell-sold、hold-held の3つです。さらに say-said、hear-heard、find-found、meet-met、make-made、have-had、pay-paid も A-B-B 型です。say は発音が「セッド」、hear は「ハード」になります。',
    add: fresh(...tbl(10, 8, [100, 100, 100], [['原形', '過去形・過去分詞', '意味'], ['tell', 'told', '伝える'], ['sell', 'sold', '売る'], ['say', 'said（セッド）', '言う'], ['hear', 'heard（ハード）', '聞こえる'], ['find', 'found', '見つける']], { h: 23, size: 11, colors: [C.blue, C.green, C.gray] }), ...cap('オールド組とそのほか')),
  },
  {
    note: '❓read はどうでしょう。→ read-read-read で、つづりは3つとも同じです。ちがうのは発音だけで、原形は「リード」、過去形と過去分詞は「レッド」と読みます。過去形も過去分詞も同じ read です。',
    add: fresh(...row([['read', C.gray, FILL.gray], ['read', C.green, FILL.green], ['read', C.green, FILL.green]], 18, { h: 32, size: 15 }), ...row([['リード', C.gray, FILL.gray], ['レッド', C.green, FILL.green], ['レッド', C.green, FILL.green]], 62, { h: 28, size: 13 }), lb(160, 112, 'つづりが同じ。発音だけ変わる', 12, C.ink, 'middle', true), ...cap('read は つづりが同じ')),
  },
  {
    note: '❓過去形と過去分詞が同じ形なら、文のどこに置いても形は変わりません。では、どう見分けるのでしょう。→ have があれば現在完了、be動詞があれば受け身、どちらもなければ過去形です。',
    add: fresh(wide(10, 'I bought this book last week.', C.blue, FILL.blue, 12, 26), lb(160, 48, '過去形（have も be動詞もない）', 11, C.blue), wide(60, 'I have bought a new computer.', C.green, FILL.green, 12, 26), lb(160, 98, '現在完了（have のあと）', 11, C.green), wide(110, 'This book was bought in Kyoto.', C.purple, FILL.purple, 12, 26), ...cap2('形は同じ bought', 'まわりの語で意味を決める')),
  },
  {
    note: '使うときに意味をとりちがえやすい語があります。say は「内容を言う」ので人は直接置けません。「私に言った」は tell me です。leave は「去る」のほか「置き忘れる」。I left my bag on the train.（電車にかばんを置き忘れた）。',
    add: fresh(wide(10, 'He said me the truth.', C.red, FILL.red, 12, 26), ng(160, 48), wide(60, 'He told me the truth.', C.green, FILL.green, 12, 26), ok(160, 102), wide(116, 'I left my bag on the train.', C.blue, FILL.blue, 11, 24), ...cap('say ＋ 人 はだめ → tell')),
  },
  {
    note: 'まとめです。A-B-B 型は、オート・アート組、エプト・エルト組、オールド組のように音でまとめます。have・be動詞・まわりの語で、過去形か過去分詞かを見分けます。teach の過去分詞は teached ではなく taught です。',
    add: fresh(wide(10, 'She has taught English for ten years.', C.green, FILL.green, 12, 28), lb(160, 52, 'has のあと → 過去分詞 taught', 11, C.gray), bx(10, 66, 95, 34, 'オート・アート\nbought taught', C.blue, FILL.blue, 10), bx(112, 66, 95, 34, 'エプト・エルト\nkept built', C.green, FILL.green, 10), bx(214, 66, 95, 34, 'オールド\ntold sold held', C.purple, FILL.purple, 10), ...cap('音のグループで覚える', C.main)),
  },
], 'A-B-B 型：過去形と過去分詞が同じ');

// ───────── eigo_s126 不規則動詞③：A-B-C型 ─────────
const eigo_s126 = S([
  {
    note: 'I seen it. や They swum. と言う人がいますが、これは入試では×です。see-saw-seen、swim-swam-swum のように、3つとも形がちがう A-B-C 型は、数は少ないのに出る回数は最も多い型です。',
    add: [...row([['see', C.gray, FILL.gray], ['saw', C.blue, FILL.blue], ['seen', C.green, FILL.green]], 18, { h: 32, size: 15 }), lb(160, 66, '原形A　　過去形B　　過去分詞C', 11, C.gray), wide(84, 'I seen it.　→　×', C.red, FILL.red, 13, 28), ...cap('3つとも形がちがう')],
  },
  {
    note: '❓なぜ I seen it. はだめなのでしょう。→ seen は過去分詞で、過去分詞は単独では文の動詞になれないからです。必ず have か be動詞といっしょに使います。過去形が必要な場所には saw を置きます。',
    add: fresh(wide(10, 'I seen it.', C.red, FILL.red, 13, 26), ng(160, 48), wide(60, 'I saw it.　（過去形）', C.green, FILL.green, 13, 26), wide(94, 'I have seen it.　（have ＋ 過去分詞）', C.green, FILL.green, 12, 26), ...cap('seen は have か be動詞といっしょ')),
  },
  {
    note: '❓どんな動詞が A-B-C 型でしょう。まず過去分詞が -en や -n で終わる組です。take-took-taken、give-gave-given、write-wrote-written、speak-spoke-spoken、break-broke-broken、choose-chose-chosen。',
    add: fresh(...tbl(14, 8, [90, 100, 102], [['原形', '過去形', '過去分詞'], ['take', 'took', 'taken'], ['give', 'gave', 'given'], ['write', 'wrote', 'written'], ['speak', 'spoke', 'spoken'], ['break', 'broke', 'broken']], { h: 23, size: 11, colors: [C.gray, C.blue, C.green] }), ...cap('過去分詞が -en / -n で終わる組')),
  },
  {
    note: '同じ組に、know-knew-known、grow-grew-grown、throw-threw-thrown、fly-flew-flown、draw-drew-drawn、eat-ate-eaten、fall-fell-fallen、wear-wore-worn などがあります。❓fly の過去形を flied としてはだめですか？ → だめです。y を i にかえる決まりは規則動詞だけで、fly は不規則動詞なので flew です。',
    add: fresh(...tbl(14, 8, [90, 100, 102], [['原形', '過去形', '過去分詞'], ['know', 'knew', 'known'], ['grow', 'grew', 'grown'], ['fly', 'flew', 'flown'], ['eat', 'ate', 'eaten'], ['wear', 'wore', 'worn']], { h: 23, size: 11, colors: [C.gray, C.blue, C.green] }), ...cap2('fly → flied は×', 'flew が正しい', C.red)),
  },
  {
    note: '次に、母音が i → a → u と変わる組です。sing-sang-sung、drink-drank-drunk、swim-swam-swum、begin-began-begun、ring-rang-rung。口の形が「イ・ア・ウ」と順に変わるので、声に出すと一気に覚えられます。',
    add: fresh(...tbl(14, 8, [90, 100, 102], [['原形 i', '過去形 a', '過去分詞 u'], ['sing', 'sang', 'sung'], ['drink', 'drank', 'drunk'], ['swim', 'swam', 'swum'], ['begin', 'began', 'begun'], ['ring', 'rang', 'rung']], { h: 23, size: 11, colors: [C.gray, C.blue, C.green] }), ...cap('イ・ア・ウと変わる')),
  },
  {
    note: '何よりも先に覚える最重要の5つです。go-went-gone、do-did-done、see-saw-seen、eat-ate-eaten、be-was/were-been。be動詞だけは過去形が was と were の2つあります。',
    add: fresh(...tbl(10, 8, [70, 110, 120], [['原形', '過去形', '過去分詞'], ['go', 'went', 'gone'], ['do', 'did', 'done'], ['see', 'saw', 'seen'], ['eat', 'ate', 'eaten'], ['be', 'was / were', 'been']], { h: 23, size: 11, colors: [C.gray, C.blue, C.green] }), ...cap('最重要の5つ', C.red)),
  },
  {
    note: '❓動詞の形は、何で決まるのでしょう。→ 意味ではなく「置かれる場所」です。have のあとなら過去分詞、did や will のあと、to のあとなら原形、ふつうの文の中心なら過去形です。',
    add: fresh(...tbl(8, 8, [150, 154], [['置かれる場所', '形'], ['文の中心（昨年）', 'I went to Kyoto.'], ['have のあと', 'I have been to Kyoto.'], ['be動詞のあと（受け身）', 'was written by Ken.'], ['to / did / will のあと', 'go（原形）']], { h: 25, size: 11, colors: [C.blue, C.green] }), ...cap('場所で形が決まる')),
  },
  {
    note: '❓では「私はその映画を見たことがあります」は？ have のあとなので過去分詞です。I have saw that movie. ではなく、I have seen that movie. になります。',
    add: fresh(wide(10, 'I have saw that movie.', C.red, FILL.red, 13, 28), ng(160, 52), wide(66, 'I have seen that movie.', C.green, FILL.green, 13, 28), ok(160, 110), ...cap2('have のあとは過去分詞', 'saw ではなく seen')),
  },
  {
    note: 'まとめです。A-B-C 型は「過去分詞に -en が付く組」と「イ・ア・ウの組」でほとんど整理できます。go・do・see・eat・be の5つを最初に。過去分詞は have か be動詞といっしょに使います。',
    add: fresh(bx(10, 14, 145, 40, '-en の組\ntake took taken', C.green, FILL.green, 11), bx(165, 14, 145, 40, 'イ・ア・ウの組\nsing sang sung', C.blue, FILL.blue, 11), bx(10, 64, 300, 34, '最重要：go do see eat be', C.red, FILL.red, 13), lb(160, 118, 'seen・swum は have / be動詞といっしょに', 11, C.gray, 'middle'), ...cap('2つの組＋最重要の5つ', C.main)),
  },
], 'A-B-C 型：3つとも形がちがう');

// ───────── eigo_s127 不規則動詞④：A-A-A型・A-B-A型 ─────────
const eigo_s127 = S([
  {
    note: 'cut や put は、原形も過去形も同じ形です。では I cut it. は「切る」でしょうか、「切った」でしょうか。形では決まりません。動詞の形が見た目で分からない型と、真ん中だけがちがう型を整理します。',
    add: [...row([['cut', C.blue, FILL.blue], ['cut', C.blue, FILL.blue], ['cut', C.blue, FILL.blue]], 16, { h: 32, size: 15 }), ...row([['come', C.green, FILL.green], ['came', C.red, FILL.red], ['come', C.green, FILL.green]], 62, { h: 32, size: 15 }), lb(160, 112, '上：A-A-A 型　下：A-B-A 型', 12, C.ink, 'middle', true), ...cap('同じ形の型と、真ん中だけちがう型')],
  },
  {
    note: 'A-A-A 型は cut、put、set、hit、let、shut、cost、hurt。三つとも同じ形のままです。❓形が同じなら、時制（じせい）はどうやって決めるのでしょう。→ 形では決まらないので、文全体を見て決めます。',
    add: fresh(...tbl(10, 8, [100, 100, 100], [['原形＝過去形', '＝過去分詞', '意味'], ['cut', 'cut', '切る'], ['put', 'put', '置く'], ['hit', 'hit', '打つ'], ['shut', 'shut', '閉める'], ['hurt', 'hurt', '痛む']], { h: 23, size: 11, colors: [C.blue, C.blue, C.gray] }), ...cap('形が変わらない動詞')),
  },
  {
    note: '手がかりの1つ目は、三人称単数の -s です。He cut the paper. は、主語が He なのに cuts ではないので過去形です。現在形なら He cuts the paper. になります。',
    add: fresh(wide(12, 'He cuts the paper.', C.blue, FILL.blue, 13, 28), lb(160, 52, '-s がある → 現在形', 12, C.blue, 'middle', true), wide(68, 'He cut the paper.', C.red, FILL.red, 13, 28), lb(160, 108, '-s がない → 過去形', 12, C.red, 'middle', true), ...cap('He なのに -s がなければ過去形')),
  },
  {
    note: '手がかりの2つ目は、時を表す語です。❓read はどうでしょう。read-read-read は、つづりが3つとも同じで、読み方だけが「リード」「レッド」と変わります。every night なら「リード」、last night なら「レッド」です。',
    add: fresh(wide(10, 'I read a book every night.', C.blue, FILL.blue, 12, 28), lb(160, 52, '毎晩 → 現在形 →「リード」', 11, C.blue), wide(68, 'I read a book last night.', C.red, FILL.red, 12, 28), lb(160, 110, 'ゆうべ → 過去形 →「レッド」', 11, C.red), ...cap('every / last が手がかり')),
  },
  {
    note: '❓では A-B-A 型は？ come-came-come、run-ran-run、become-became-become。原形と過去分詞が同じで、過去形だけがちがいます。He comes here every day.（現在形）、He came here yesterday.（過去形）、He has come here many times.（現在完了）。',
    add: fresh(...tbl(8, 8, [90, 214], [['形', '例'], ['現在形', 'He comes here every day.'], ['過去形', 'He came here yesterday.'], ['現在完了', 'He has come here many times.']], { h: 28, size: 12, colors: [C.gray, C.blue] }), ...cap('come は3つの形を使い分ける')),
  },
  {
    note: '❓「原形も過去分詞も come だから、過去形も come でいいのでは？」と思って He come here yesterday. と書くのは、よくある誤りです。真ん中だけがちがう型だと、はっきり意識します。run も同じで、昨日走ったなら I ran。',
    add: fresh(wide(12, 'He come here yesterday.', C.red, FILL.red, 13, 28), ng(160, 54), wide(70, 'He came here yesterday.', C.green, FILL.green, 13, 28), ok(160, 114), ...cap2('真ん中が came', 'come - came - come')),
  },
  {
    note: 'become は「〜になる」で、あとに名詞や形容詞が続きます。He became a doctor.（彼は医者になった）。過去分詞も become なので、He has become a good player.（彼はよい選手になった）となります。',
    add: fresh(wide(14, 'He became a doctor.', C.blue, FILL.blue, 13, 28), lb(160, 54, '彼は医者になった（過去形 became）', 11, C.gray), wide(70, 'He has become a good player.', C.green, FILL.green, 12, 28), lb(160, 110, '彼はよい選手になった（過去分詞 become）', 11, C.gray), ...cap('become - became - become')),
  },
  {
    note: 'まとめです。A-B-B は teach-taught-taught でいちばん多い。A-B-C は go-went-gone で最頻出。A-A-A は cut-cut-cut で、時制は周りの語で判断。A-B-A は come-came-come で、真ん中だけがちがう。',
    add: fresh(...tbl(8, 8, [100, 204], [['型', '例とポイント'], ['A-B-B', 'teach taught taught（いちばん多い）'], ['A-B-C', 'go went gone（数は少ないが最頻出）'], ['A-A-A', 'cut cut cut（周りの語で判断）'], ['A-B-A', 'come came come（真ん中だけ）']], { h: 26, size: 11, colors: [C.main, C.blue] }), ...cap('4つの型を見分ける', C.main)),
  },
], 'A-A-A 型・A-B-A 型');

// ───────── eigo_s131 現在進行形③：~ing のつづり ─────────
const eigo_s131 = S([
  {
    note: 'run の ~ing 形は running。runing とは書きません。make は making で、makeing ではありません。die は dying です。~ing をつけるだけなのに、語の最後の形によって3つの型に分かれます。',
    add: [...row([['run → running', C.blue, FILL.blue], ['make → making', C.green, FILL.green]], 16, { h: 30, size: 12 }), ...row([['die → dying', C.purple, FILL.purple], ['play → playing', C.main, FILL.warm]], 56, { h: 30, size: 12 }), ...cap('語の最後を見て決める')],
  },
  {
    note: '①いちばん多い型は、そのまま -ing をつけます。play → playing、watch → watching、read → reading、listen → listening、enjoy → enjoying。study も studying で、y を i にかえません。',
    add: fresh(...tbl(30, 8, [110, 150], [['原形', '~ing 形'], ['play', 'playing'], ['watch', 'watching'], ['study', 'studying'], ['read', 'reading']], { h: 23, size: 12, colors: [C.blue, C.green] }), lb(160, 138, 'study の y は i にかえない', 11, C.red, 'middle', true), ...cap('① そのまま ＋ing')),
  },
  {
    note: '❓過去形の studied では y を i にかえたのに、studying ではどうして y のままなのでしょう。→ i のあとに ing をつけると「ii」と i が2つ続いてしまうからです。だから y を残します。',
    add: fresh(...row([['stud', C.gray, FILL.gray], ['y', C.green, FILL.green], ['＋ ing', C.green, FILL.green], ['＝ studying', C.main, FILL.warm]], 20, { h: 34, size: 14 }), wide(76, 'studied（＋ed）では y → i', C.blue, FILL.blue, 12, 26), lb(160, 118, 'studiing だと i が2つ並んでしまう', 12, C.red, 'middle', true), ...cap('ing の前では y を残す')),
  },
  {
    note: '②e で終わる語は、e を取ってから -ing をつけます。make → making、write → writing、come → coming、take → taking、use → using、have → having、dance → dancing。❓どうして e を取るのでしょう。→ 最後の e は読まない「発音しない e」で、-ing のじゃまになるので取ってしまいます。',
    add: fresh(...row([['m a k', C.gray, FILL.gray], ['e', C.red, FILL.red], ['取る', C.red, FILL.red], ['＋ ing', C.green, FILL.green], ['＝ making', C.main, FILL.warm]], 20, { h: 34, size: 13 }), wide(76, 'write → writing　come → coming　use → using', C.purple, FILL.purple, 12, 28), ...cap('② e で終わる → e を取って ＋ing')),
  },
  {
    note: '❓どの e も取るのでしょうか。→ see → seeing、agree → agreeing のように ee で終わる語と、be → being は e を残します。e を取ると読み方がかわってしまうからです。',
    add: fresh(...tbl(30, 10, [100, 160], [['原形', '~ing 形'], ['see', 'seeing（e を残す）'], ['agree', 'agreeing（e を残す）'], ['be', 'being（e を残す）']], { h: 28, size: 12, colors: [C.red, C.green] }), lb(160, 136, 'make → making とは ちがう', 12, C.ink, 'middle', true), ...cap('ee で終わる語と be は残す')),
  },
  {
    note: '③「短い母音1つ＋子音字1つ」で終わる語は、子音字を重ねます。run → running、swim → swimming、sit → sitting、get → getting、put → putting、stop → stopping、begin → beginning。過去形の stopped と同じ考え方です。',
    add: fresh(...row([['r u n', C.gray, FILL.gray], ['＋ n', C.red, FILL.red], ['＋ ing', C.green, FILL.green], ['＝ running', C.main, FILL.warm]], 20, { h: 34, size: 14 }), wide(76, 'swim → swimming　sit → sitting　get → getting', C.purple, FILL.purple, 12, 28), ...cap('③ 短い母音 ＋ 子音字1つ → 重ねる')),
  },
  {
    note: '❓では、最後が子音字の語はすべて重ねるのでしょうか。→ いいえ。wait は ai と母音字が2つ、read は ea と2つ、look は oo と2つ、help は lp と子音字が2つなので重ねません。open と visit は前を強く読むので重ねません。',
    add: fresh(...tbl(12, 8, [80, 128, 88], [['原形', 'なぜ重ねない', '~ing 形'], ['wait', '母音字が2つ', 'waiting'], ['look', '母音字が2つ', 'looking'], ['help', '子音字が2つ', 'helping'], ['open', '前を強く読む', 'opening'], ['visit', '前を強く読む', 'visiting']], { h: 23, size: 11, colors: [C.red, C.gray, C.green] }), ...cap('waitting・helpping はまちがい', C.red)),
  },
  {
    note: 'もう1つ、ie で終わる語は ie を y にかえて -ing をつけます。die → dying、lie → lying、tie → tying。i が2つ続くのをさけるためです。',
    add: fresh(...row([['d', C.gray, FILL.gray], ['ie', C.red, FILL.red], ['→ y', C.green, FILL.green], ['＋ ing', C.green, FILL.green], ['＝ dying', C.main, FILL.warm]], 20, { h: 34, size: 13 }), wide(76, 'lie → lying　tie → tying', C.purple, FILL.purple, 12, 28), ...cap('ie → y')),
  },
  {
    note: 'まとめです。語の最後を見ます。e なら e を取る。「短い母音1つ＋子音字1つ」なら重ねる。ie なら y にかえる。それ以外はそのまま。run と rain、sit と wait のように並べて覚えましょう。重ねるのは running、重ねないのは raining です。',
    add: fresh(...tbl(14, 8, [150, 156], [['重ねる', '重ねない'], ['run → running', 'rain → raining'], ['sit → sitting', 'wait → waiting'], ['stop → stopping', 'open → opening']], { h: 30, size: 12, colors: [C.green, C.red] }), lb(160, 140, '過去形で重ねる語は、~ing でも重ねる', 11, C.gray, 'middle'), ...cap('重ねる語と重ねない語を並べて覚える', C.main)),
  },
], '~ing のつづり：3つの型');

// ───────── eigo_s132 現在進行形④：否定文・疑問文と答え方 ─────────
const eigo_s132 = S([
  {
    note: 'Do you playing soccer? と書いてしまう人がいます。疑問文には do が要る、と思いこんでいるからです。進行形の疑問文は、どう作るのでしょう。',
    add: [wide(20, 'Do you playing soccer?', C.red, FILL.red, 13, 32), ng(160, 70), lb(160, 98, 'どこがおかしい？', 13, C.ink, 'middle', true), ...cap('進行形の疑問文')],
  },
  {
    note: '❓なぜ do がいらないのでしょう。→ 進行形の文には、すでに be動詞（am・are・is）が入っているからです。進行形は be動詞の文なので、疑問文は be動詞を主語の前に出すだけです。You are studying. → Are you studying?',
    add: fresh(...row([['You', C.gray, FILL.gray], ['are', C.purple, FILL.purple], ['studying.', C.gray, FILL.gray]], 14, { h: 30, size: 14 }), ar(160, 48, 160, 66, C.purple), ...row([['Are', C.purple, FILL.purple], ['you', C.gray, FILL.gray], ['studying?', C.gray, FILL.gray]], 70, { h: 30, size: 14 }), lb(160, 122, 'be動詞を前に出す', 12, C.purple, 'middle', true), ...cap('動かすのは be動詞')),
  },
  {
    note: '否定文は、be動詞のすぐあとに not を置きます。He is playing soccer. → He is not（isn\'t）playing soccer. They are watching TV. → They aren\'t watching TV. I am reading. → I am not reading.（am not は短くしません）',
    add: fresh(wide(10, 'He is playing soccer.', C.blue, FILL.blue, 12, 26), ar(160, 38, 160, 52, C.red), wide(54, "He is not (isn't) playing soccer.", C.red, FILL.red, 12, 26), wide(92, "They aren't watching TV.　I am not reading.", C.red, FILL.red, 11, 26), ...cap('be動詞のあとに not')),
  },
  {
    note: '答え方も be動詞でそろえます。Are you watching TV? → Yes, I am. / No, I\'m not. Is she cooking? → Yes, she is. / No, she isn\'t. ❓Yes, I do. ではだめなの？ → だめです。質問が Are のときは、答えも be動詞を使います。',
    add: fresh(wide(10, 'Are you watching TV?', C.blue, FILL.blue, 13, 28), bx(20, 52, 130, 32, 'Yes, I am.', C.green, FILL.green, 13), bx(170, 52, 130, 32, "No, I'm not.", C.red, FILL.red, 13), wide(98, 'Yes, I do.', C.red, FILL.red, 13, 26, 90, 140), ng(160, 138), ...cap('聞かれた動詞で答える')),
  },
  {
    note: '「聞かれた動詞で答える」が英語の原則です。Do you 〜? には do、Are you 〜? には be動詞、Did you 〜? には did、Have you 〜? には have で答えます。質問の先頭の語を見れば、答えが決まります。',
    add: fresh(...tbl(14, 8, [150, 156], [['質問の先頭', '答え'], ['Do you ...?', 'Yes, I do.'], ['Are you ...?', 'Yes, I am.'], ['Did you ...?', 'Yes, I did.'], ['Have you ...?', 'Yes, I have.']], { h: 26, size: 12, colors: [C.blue, C.green] }), ...cap('先頭の語が答えを決める')),
  },
  {
    note: '疑問詞（what・where・who・how）を使うときは、疑問詞を先頭に置いて、あとを疑問文の順にします。「疑問詞＋be動詞＋主語＋~ing」です。What are you doing? — I\'m doing my homework.',
    add: fresh(...row([['What', C.red, FILL.red], ['are', C.purple, FILL.purple], ['you', C.gray, FILL.gray], ['doing?', C.green, FILL.green]], 14, { h: 30, size: 14 }), wide(54, "I'm doing my homework.　（進行形で答える）", C.blue, FILL.blue, 12, 28), wide(92, 'Where is he going?　― He is going to the library.', C.blue, FILL.blue, 10, 28), ...cap('疑問詞 ＋ be動詞 ＋ 主語 ＋ ~ing')),
  },
  {
    note: '❓What are you doing? に I do my homework. と答えてはだめでしょうか。→ だめです。今していることをたずねているので、答えも I\'m doing my homework. と進行形にそろえます。Who が主語のときは、Who is playing the piano? — Ken is. のように、そのまま Who is ~ing の順です。',
    add: fresh(wide(10, 'What are you doing?　― I do my homework.', C.red, FILL.red, 11, 28), ng(160, 52), wide(66, "What are you doing?　― I'm doing my homework.", C.green, FILL.green, 11, 28), ok(160, 108), lb(160, 128, 'Who is playing the piano?　― Ken is.', 11, C.gray, 'middle'), ...cap('今していること → 進行形で答える')),
  },
  {
    note: '❓What do you do? と What are you doing? はどうちがうのでしょう。→ 現在形は習慣や職業、進行形は今この瞬間の動作です。What do you do? は「ご職業は何ですか」、What are you doing? は「今、何をしているのですか」です。',
    add: fresh(bx(10, 14, 145, 54, 'What do you do?\n職業・いつもすること', C.blue, FILL.blue, 11), bx(165, 14, 145, 54, 'What are you doing?\n今この瞬間のこと', C.green, FILL.green, 11), lb(82, 88, '現在形', 12, C.blue, 'middle', true), lb(238, 88, '進行形', 12, C.green, 'middle', true), lb(160, 122, '会話の問題でよく出る', 12, C.ink, 'middle'), ...cap('意味がまったくちがう')),
  },
  {
    note: 'まとめです。進行形を見たら「これは be動詞の文だ」と最初に決めます。否定は be動詞のあとに not、疑問は be動詞を前に出す、答えも be動詞でそろえる。do は使いません。',
    add: fresh(wide(10, '否定：He is not playing.', C.red, FILL.red, 12, 28), wide(44, '疑問：Is he playing?', C.green, FILL.green, 12, 28), wide(78, '答え：Yes, he is. / No, he isn\'t.', C.blue, FILL.blue, 12, 28), lb(160, 126, 'do は使わない', 12, C.ink, 'middle', true), ...cap('動かすのは be動詞', C.main)),
  },
], '進行形の否定文・疑問文');

// ───────── eigo_s134 過去進行形②：when と while ─────────
const eigo_s134 = S([
  {
    note: '「電話が鳴ったとき、私はふろに入っていました」を英語にします。二つの動作のうち、どちらを進行形にするか迷います。決め手は「長く続いていたか、一瞬で終わったか」です。',
    add: [bx(10, 24, 300, 28, 'ふろに入っていた（長く続く）', C.blue, FILL.blue, 12), ln(190, 62, 190, 100, C.red, false, 3), lb(190, 116, '電話が鳴った（一瞬）', 12, C.red, 'middle', true), ...cap('長い動作と、一瞬の動作')],
  },
  {
    note: '長く続いていたほうは、過去進行形（was / were ＋ ~ing）にします。「ふろに入っていた」は was taking a bath です。❓なぜ進行形？ → 「その間ずっと続いていた」ことを表したいからです。',
    add: fresh(bx(10, 20, 300, 28, 'I was taking a bath.', C.blue, FILL.blue, 13), lb(160, 62, 'ふろに入っていた（続いていた）', 12, C.blue, 'middle', true), ln(10, 100, 310, 100, C.blue, false, 3), lb(160, 122, '時間のはば：ずっと続く', 11, C.gray), ...cap('長く続いた動作 → 過去進行形')),
  },
  {
    note: '一瞬の出来事は、過去形で表します。「電話が鳴った」は rang です。続いている動作の途中に、ぱっと割りこんだ出来事です。',
    add: fresh(bx(10, 16, 300, 24, 'I was taking a bath.', C.blue, FILL.blue, 12), ln(10, 66, 310, 66, C.blue, false, 3), ln(180, 50, 180, 82, C.red, false, 3), lb(180, 96, 'The phone rang.', 12, C.red, 'middle', true), lb(180, 116, '一瞬の出来事 → 過去形', 11, C.red), ...cap('割りこんだ短い動作 → 過去形')),
  },
  {
    note: '❓では、二つをつなぐ when と while はどうちがうのでしょう。→ when は「〜したとき」で、あとに一瞬の動作が来ることが多いです。while は「〜している間に」で、あとに続いていた動作が来ます。割りこんだほうが when、割りこまれたほうが while と覚えましょう。',
    add: fresh(bx(10, 14, 145, 54, 'When ...\n割りこんだ短い動作\nthe phone rang', C.red, FILL.red, 11), bx(165, 14, 145, 54, 'While ...\n続いていた動作\nI was taking a bath', C.blue, FILL.blue, 11), lb(160, 96, '割りこんだ → when　　割りこまれた → while', 11, C.ink, 'middle', true), ...cap('when ＝ 一瞬　　while ＝ 続いた')),
  },
  {
    note: '二つの言い方は入れかえられます。When the phone rang, I was taking a bath. ＝ While I was taking a bath, the phone rang. 同じ場面を、どちらを先に言うかで言いかえただけです。',
    add: fresh(wide(14, 'When the phone rang, I was taking a bath.', C.red, FILL.red, 11, 30), lb(160, 62, '＝', 18, C.ink, 'middle', true), wide(76, 'While I was taking a bath, the phone rang.', C.blue, FILL.blue, 11, 30), lb(160, 126, 'コンマ（,）で区切る', 11, C.gray), ...cap('前に置くときは コンマ')),
  },
  {
    note: '❓while のあとを過去形にしてもよいでしょうか。→ だめです。While I studied English のように書くのはまちがいです。while は「〜している間に」という意味なので、あとは進行形（was studying）にします。',
    add: fresh(wide(12, 'While I studied English, my brother came in.', C.red, FILL.red, 11, 28), ng(160, 54), wide(70, 'While I was studying English, my brother came in.', C.green, FILL.green, 10, 28), ok(160, 112), ...cap('while のあとは 進行形')),
  },
  {
    note: '二つの動作がどちらも続いていたら、両方とも過去進行形にします。While I was cooking, my sister was cleaning the room.（私が料理をしている間、姉は部屋をそうじしていました）。',
    add: fresh(bx(10, 20, 300, 24, 'I was cooking.', C.blue, FILL.blue, 12), ln(10, 60, 310, 60, C.blue, false, 3), bx(10, 78, 300, 24, 'My sister was cleaning the room.', C.green, FILL.green, 12), ln(10, 118, 310, 118, C.green, false, 3), ...cap('並んで続く → どちらも進行形')),
  },
  {
    note: '反対に、一瞬の動作どうしなら、両方とも過去形です。When I opened the door, the cat ran out.（私がドアを開けると、ネコが走り出た）。どちらも一瞬の出来事なので、進行形にはしません。',
    add: fresh(wide(14, 'When I opened the door, the cat ran out.', C.red, FILL.red, 11, 30), ln(100, 64, 100, 96, C.red, false, 3), ln(190, 64, 190, 96, C.red, false, 3), lb(100, 110, 'opened', 11, C.red, 'middle', true), lb(190, 110, 'ran out', 11, C.red, 'middle', true), ...cap('一瞬どうし → どちらも過去形')),
  },
  {
    note: 'まとめです。長く続いたほうは過去進行形、割りこんだ一瞬の動作は過去形。when のあとは一瞬の動作、while のあとは続いた動作。while の直後を過去形にしません。',
    add: fresh(wide(10, 'When + 一瞬の動作（過去形）', C.red, FILL.red, 12, 28), wide(44, 'While + 続いた動作（過去進行形）', C.blue, FILL.blue, 12, 28), wide(78, 'While I was studying, my brother came in.', C.green, FILL.green, 11, 28), ...cap('割りこんだほうが when', C.main)),
  },
], 'when と while の使い分け');

// ───────── eigo_s136 進行形にしない動詞②：have や think の二つの顔 ─────────
const eigo_s136 = S([
  {
    note: '「私たちは今、昼食を食べているところです」を英語にします。have は進行形にしない動詞だと習ったので、We have lunch now. と書きたくなります。でも、これはまちがいです。have には二つの顔があります。',
    add: [wide(16, 'We have lunch now.', C.red, FILL.red, 13, 30), ng(160, 64), lb(160, 92, '「食べる」の have は…？', 13, C.ink, 'middle', true), ...cap('have の二つの顔')],
  },
  {
    note: '❓どんなときの have が進行形にならないのでしょう。→ 「持っている・そなえている」という、ずっとそうである状態の have です。I have two brothers.（兄弟が二人います）、He has a new bike.（新しい自転車を持っています）、I have a cold.（風邪をひいています）。',
    add: fresh(lb(160, 12, '状態の have（進行形にしない）', 12, C.blue, 'middle', true), wide(26, 'I have two brothers.', C.blue, FILL.blue, 12, 26), wide(58, 'He has a new bike.', C.blue, FILL.blue, 12, 26), wide(90, 'I have a cold.', C.blue, FILL.blue, 12, 26), lb(160, 130, '持っている・そなえている', 11, C.gray), ...cap('状態 → 現在形のまま')),
  },
  {
    note: '❓では、進行形にできる have は？ → 「食べる・飲む・開く・過ごす」の意味の have は、始まって終わる動作です。We are having lunch now.（今、昼食を食べているところです）、They are having a party.（パーティーを開いているところです）、I am having a good time.（楽しい時を過ごしています）。',
    add: fresh(lb(160, 12, '動作の have（進行形にできる）', 12, C.green, 'middle', true), wide(26, 'We are having lunch now.', C.green, FILL.green, 12, 26), wide(58, 'They are having a party.', C.green, FILL.green, 12, 26), wide(90, 'I am having a good time.', C.green, FILL.green, 12, 26), lb(160, 130, '食べる・開く・過ごす', 11, C.gray), ...cap('動作 → 進行形にできる')),
  },
  {
    note: '❓どうやって状態か動作かを見分けるのでしょう。→ 「今始めた」「もうすぐ終わる」と言えれば動作です。昼食は始まって終わるので動作。兄弟がいることはやめられないので状態です。「自然にそうなっている」なら状態、「自分でしている」なら動作と覚えます。',
    add: fresh(bx(10, 14, 145, 56, '昼食を食べる\n始まって終わる\n→ 動作', C.green, FILL.green, 11), bx(165, 14, 145, 56, '兄弟がいる\nやめられない\n→ 状態', C.blue, FILL.blue, 11), lb(160, 98, '「今始めた」「もうすぐ終わる」と言える？', 12, C.ink, 'middle', true), lb(160, 122, '言える → 動作　　言えない → 状態', 12, C.main, 'middle'), ...cap('始めたり止めたりできるか')),
  },
  {
    note: 'think も二つの顔を持ちます。I think he is a good teacher.（彼はよい先生だと思います）の「思う」は意見で、状態です。I am thinking about my future.（将来について考えているところです）の「考える」は頭を働かせる動作なので、進行形にできます。',
    add: fresh(wide(10, 'I think he is a good teacher.', C.blue, FILL.blue, 12, 26), lb(160, 46, '「〜と思う」＝ 意見 ＝ 状態', 11, C.blue), wide(62, 'I am thinking about my future.', C.green, FILL.green, 12, 26), lb(160, 98, '「あれこれ考える」＝ 動作', 11, C.green), ...cap('think の二つの顔')),
  },
  {
    note: 'see も同じです。I can see a bird in the tree.（木に鳥が見えます）は「見える」で状態。I am seeing my grandmother this weekend.（今週末、祖母に会う予定です）は「会う」で動作です。「会う予定」の意味では、これから先のことを表します。',
    add: fresh(wide(10, 'I can see a bird in the tree.', C.blue, FILL.blue, 12, 26), lb(160, 46, '「見える」＝ 状態', 11, C.blue), wide(62, 'I am seeing my grandmother this weekend.', C.green, FILL.green, 11, 26), lb(160, 98, '「会う」＝ 動作（会う予定）', 11, C.green), ...cap('see の二つの顔')),
  },
  {
    note: 'taste・smell・look もそうです。This soup tastes good.（おいしい味がする）は状態で、She is tasting the soup.（味見をしている）は動作。The flower smells sweet. は状態で、He is smelling the flower.（においをかいでいる）は動作。You look tired. は状態で、I am looking at the map. は動作です。',
    add: fresh(...tbl(8, 8, [150, 154], [['状態（自然にそうなる）', '動作（自分でする）'], ['The soup tastes good.', 'She is tasting the soup.'], ['The flower smells sweet.', 'He is smelling the flower.'], ['You look tired.', 'I am looking at the map.']], { h: 28, size: 10, colors: [C.blue, C.green] }), ...cap('味がするのは自然、味見は自分')),
  },
  {
    note: '❓「have は進行形にできない」とだけ覚えると、どうなるでしょう。→ 今度は We have lunch now. と書いてしまいます。ルールは覚えすぎても失点になります。意味を確かめてから、形を決める順番を守りましょう。',
    add: fresh(wide(12, 'We have lunch now.', C.red, FILL.red, 13, 28), ng(160, 54), wide(70, 'We are having lunch now.', C.green, FILL.green, 13, 28), ok(160, 114), ...cap2('意味を確かめてから形を決める', '「持っている」か「食べる・過ごす」か')),
  },
  {
    note: 'まとめです。have は「持っている」なら現在形のまま、「食べる・過ごす」なら進行形もよい。I am having a new bike. はまちがいで、I have a new bike. が正しい。think・see・taste・smell・look も「状態か動作か」で決めます。',
    add: fresh(bx(10, 14, 145, 44, '状態\nI have a new bike.', C.blue, FILL.blue, 11), bx(165, 14, 145, 44, '動作\nI am having lunch.', C.green, FILL.green, 11), lb(160, 82, 'think ／ see ／ taste ／ smell ／ look', 12, C.ink, 'middle', true), lb(160, 108, 'どれも「状態か動作か」で決める', 12, C.gray, 'middle'), ...cap('意味を確かめてから形を決める', C.main)),
  },
], 'have や think の二つの顔');

// ───────── eigo_s138 未来②：will の否定文・疑問文と Shall ─────────
const eigo_s138 = S([
  {
    note: '「私は明日、学校へ行きません」を英語にします。don\'t や isn\'t のように、will に n\'t をつけて willn\'t と書きたくなります。でも、そんな語はありません。正しい短縮形（たんしゅくけい）は何でしょう。',
    add: [wide(16, "I willn't go to school tomorrow.", C.red, FILL.red, 12, 30), ng(160, 64), lb(160, 92, 'will not の短縮形は…？', 13, C.ink, 'middle', true), ...cap('will の否定文')],
  },
  {
    note: '答えは won\'t です。will not の短縮形は、特別な形の won\'t で、つづりが「wo」で始まります。覚えるしかありません。I won\'t go to school tomorrow. と書きます。短縮しない I will not go でも、もちろん正しいです。',
    add: fresh(...row([['will', C.gray, FILL.gray], ['not', C.gray, FILL.gray], ['→', C.ink, FILL.gray], ["won't", C.red, FILL.red]], 16, { h: 34, size: 15 }), wide(66, "I won't go to school tomorrow.", C.green, FILL.green, 12, 28), lb(160, 114, "It won't rain this afternoon.（雨は降らないでしょう）", 11, C.gray, 'middle'), ...cap("willn't という語はない")),
  },
  {
    note: '疑問文は、will を主語の前に出します。Will he come to the party?（彼はパーティーに来るでしょうか）答えは Yes, he will. / No, he won\'t. do や does は使いません。❓なぜ使わないの？ → will 自身が動かせる助動詞（じょどうし）だからです。',
    add: fresh(wide(10, 'He will come to the party.', C.blue, FILL.blue, 12, 26), ar(160, 38, 160, 52, C.purple), wide(54, 'Will he come to the party?', C.purple, FILL.purple, 12, 26), bx(20, 92, 130, 28, 'Yes, he will.', C.green, FILL.green, 12), bx(170, 92, 130, 28, "No, he won't.", C.red, FILL.red, 12), ...cap('will を前に出す。do は使わない')),
  },
  {
    note: '疑問詞があるときは、疑問詞を先頭に置いて、「疑問詞＋will＋主語＋原形」の順にします。What will you do this weekend?（今週末は何をしますか）— I\'ll visit my uncle. Where will you go next summer? When will he come back?',
    add: fresh(...row([['What', C.red, FILL.red], ['will', C.purple, FILL.purple], ['you', C.gray, FILL.gray], ['do', C.green, FILL.green], ['this weekend?', C.gray, FILL.gray]], 14, { h: 30, size: 12 }), wide(56, "I'll visit my uncle.　（答え）", C.blue, FILL.blue, 12, 28), wide(92, 'Where will you go?　When will he come back?', C.blue, FILL.blue, 11, 28), ...cap('疑問詞 ＋ will ＋ 主語 ＋ 原形')),
  },
  {
    note: '❓Will you open the window? はどういう意味でしょう。本来は「あなたは開けるつもりですか」ですが、実際には「窓を開けてくれませんか」という頼み方によく使います。答えは Sure. / All right. / OK. / Sorry, I can\'t. もっと丁寧（ていねい）に言うなら Would you 〜? や Could you 〜? です。',
    add: fresh(wide(10, 'Will you open the window?', C.purple, FILL.purple, 13, 28), lb(160, 50, '窓を開けてくれませんか（頼む）', 12, C.ink, 'middle', true), bx(10, 70, 95, 28, 'Sure.', C.green, FILL.green, 12), bx(113, 70, 95, 28, 'All right.', C.green, FILL.green, 12), bx(216, 70, 94, 28, "Sorry, I can't.", C.red, FILL.red, 10), lb(160, 122, 'ていねいには Would you 〜? / Could you 〜?', 11, C.gray, 'middle'), ...cap('Will you 〜? ＝ 頼む言い方')),
  },
  {
    note: '❓Shall I 〜? は？ → 「（私が）〜しましょうか」と、自分が相手のために何かをしようと申し出る言い方です。Shall I open the window?（窓を開けましょうか）答えは Yes, please.（はい、お願いします）/ No, thank you.（いいえ、けっこうです）。',
    add: fresh(wide(10, 'Shall I open the window?', C.blue, FILL.blue, 13, 28), lb(160, 50, '私が 開けましょうか（申し出る）', 12, C.ink, 'middle', true), bx(20, 70, 130, 30, 'Yes, please.', C.green, FILL.green, 13), bx(170, 70, 130, 30, 'No, thank you.', C.red, FILL.red, 13), ...cap('Shall I 〜? ＝ 私がしましょうか')),
  },
  {
    note: '❓Shall we 〜? は？ → 「（いっしょに）〜しましょうか」と、相手をさそう言い方です。Shall we play tennis? は Let\'s play tennis. とほぼ同じ意味です。答えは Yes, let\'s.（そうしましょう）/ No, let\'s not.（やめておきましょう）。',
    add: fresh(wide(10, 'Shall we play tennis?', C.purple, FILL.purple, 13, 28), lb(160, 50, 'いっしょにテニスをしませんか（さそう）', 12, C.ink, 'middle', true), bx(20, 70, 130, 30, "Yes, let's.", C.green, FILL.green, 13), bx(170, 70, 130, 30, "No, let's not.", C.red, FILL.red, 13), ...cap('Shall we 〜? ＝ いっしょにしましょう')),
  },
  {
    note: '❓答え方はどう選ぶのでしょう。→ 主語を見ます。I（私が一人でする）なら Yes, please.、we（いっしょにする）なら Yes, let\'s. です。Shall という語だけ見て答えを選ばないことが大切です。',
    add: fresh(...tbl(8, 8, [110, 100, 94], [['質問', '主語', '答え'], ['Shall I 〜?', 'I（私が）', 'Yes, please.'], ['Shall we 〜?', 'we（いっしょに）', "Yes, let's."]], { h: 32, size: 11, colors: [C.blue, C.gray, C.green] }), wide(112, 'Shall I carry your bag? ― Yes, please.', C.green, FILL.green, 11, 26), ...cap('I か we かを先に確かめる')),
  },
  {
    note: 'まとめです。①否定は will not、短縮は won\'t。②疑問は will を前に出す。③Will you 〜? は頼む言い方、Shall I 〜? は申し出る言い方、Shall we 〜? はさそう言い方。',
    add: fresh(wide(10, "① won't ＋ 原形　／　Will he 〜?", C.red, FILL.red, 12, 28), wide(44, '② Will you 〜?　頼む（Sure.）', C.purple, FILL.purple, 12, 28), wide(78, '③ Shall I 〜?（Yes, please.）／ Shall we 〜?（Yes, let\'s.）', C.blue, FILL.blue, 10, 28), ...cap('will を動かす。答えは I か we で選ぶ', C.main)),
  },
], 'will の否定文・疑問文と Shall');

// ───────── eigo_s140 未来④：will と be going to ─────────
const eigo_s140 = S([
  {
    note: 'will も be going to も「〜するつもり」と訳せます。でも英語では選び分けます。決め手は「いつ決めたか」です。切符をもう買ってあるなら、どちらでしょう。',
    add: [bx(10, 24, 145, 44, 'will', C.blue, FILL.blue, 16), bx(165, 24, 145, 44, 'be going to', C.green, FILL.green, 14), lb(160, 98, 'どちらも「〜するつもり」と訳せる', 12, C.gray, 'middle'), lb(160, 122, '決め手は「いつ決めたか」', 13, C.main, 'middle', true), ...cap('2つの未来の言い方')],
  },
  {
    note: 'A: The phone is ringing.（電話が鳴っているよ）B: I\'ll answer it.（私が出ます）電話が鳴るのを聞いて、その瞬間に決めたので will を使います。❓I\'m going to answer it. ではだめ？ → 「前から出るつもりだった」という不自然な意味になります。',
    add: fresh(bx(10, 10, 300, 26, 'A: The phone is ringing.', C.gray, FILL.gray, 12), ar(160, 38, 160, 52, C.blue), bx(10, 54, 300, 28, "B: I'll answer it.", C.green, FILL.green, 13), lb(160, 100, 'その瞬間に決めた → will', 12, C.green, 'middle', true), lb(160, 124, "I'm going to answer it. だと 前からそのつもり", 10, C.red, 'middle'), ...cap('その場で決めた → will')),
  },
  {
    note: '手伝いを申し出るときも、その場で決めるので will です。A: I can\'t open this jar.（このびんが開かない）B: I\'ll help you.（手伝ってあげるよ）。相手の言葉を聞いて決めたなら、必ず will です。',
    add: fresh(bx(10, 10, 300, 26, "A: I can't open this jar.", C.gray, FILL.gray, 12), ar(160, 38, 160, 52, C.blue), bx(10, 54, 300, 28, "B: I'll help you.", C.green, FILL.green, 13), lb(160, 100, '相手の言葉を聞いて決めた → will', 12, C.green, 'middle', true), ...cap('会話では直前のセリフを見る')),
  },
  {
    note: 'A: Why are you buying so much food?（どうしてそんなに食べ物を買っているの）B: I\'m going to have a party tonight.（今夜パーティーを開く予定なんだ）買い物をしている時点で、もう決まっていたことなので be going to を使います。',
    add: fresh(bx(10, 10, 300, 26, 'A: Why are you buying so much food?', C.gray, FILL.gray, 11), ar(160, 38, 160, 52, C.blue), bx(10, 54, 300, 28, "B: I'm going to have a party tonight.", C.green, FILL.green, 11), lb(160, 100, '話す前から決まっていた → be going to', 12, C.green, 'middle', true), ...cap('前から決めていた → be going to')),
  },
  {
    note: '❓では「今年の夏、北海道を訪れるつもりです。切符はもう買いました」はどちら？ → 切符を買ってあるのは、前から予定が決まっていた証拠なので I\'m going to visit Hokkaido this summer. です。I will visit と書くと、証拠を読み落としたことになります。',
    add: fresh(wide(10, 'I will visit Hokkaido this summer.', C.red, FILL.red, 12, 28), ng(160, 52), wide(68, "I'm going to visit Hokkaido this summer.", C.green, FILL.green, 11, 28), lb(160, 114, '切符はもう買った → 前から決めていた', 12, C.green, 'middle', true), ...cap('「つもり」だけで決めない')),
  },
  {
    note: '判断の手順です。①その予定は、話す前から決まっていたか → はい：be going to。②話しているその瞬間に決めたか → はい：will。会話の問題では直前のセリフを見ます。',
    add: fresh(bx(30, 10, 260, 30, '話す前から決まっていた？', C.main, FILL.warm, 12), ar(100, 42, 70, 62, C.green), ar(220, 42, 250, 62, C.blue), bx(10, 64, 120, 40, 'はい\nbe going to', C.green, FILL.green, 12), bx(190, 64, 120, 40, 'いいえ（その場）\nwill', C.blue, FILL.blue, 12), ...cap('決めた時点を見る')),
  },
  {
    note: '予測するときも使い分けます。❓どうちがうの？ → 根拠が目の前にあるときは be going to です。Look at the sky. It\'s going to snow.（空を見て。雪が降りそうだ）、The baby is going to cry.（赤ちゃんが泣きそうだ）。顔がゆがんでいるのが根拠です。',
    add: fresh(lb(160, 12, '目の前に根拠がある → be going to', 12, C.green, 'middle', true), wide(26, "Look at the sky. It's going to snow.", C.green, FILL.green, 11, 28), wide(62, 'The baby is going to cry.', C.green, FILL.green, 12, 28), lb(160, 108, '空の様子・赤ちゃんの顔 ＝ 根拠', 11, C.gray), ...cap('証拠があるから「〜しそう」')),
  },
  {
    note: '根拠がなくて、話し手の見通しを言うときは will です。I think he will win the game.（彼は試合に勝つと思う）、Our team will be strong next year.（来年、私たちのチームは強くなるでしょう）。I think や probably といっしょに出てきたら will です。',
    add: fresh(lb(160, 12, '根拠なし・自分の見通し → will', 12, C.blue, 'middle', true), wide(26, 'I think he will win the game.', C.blue, FILL.blue, 12, 28), wide(62, 'Our team will be strong next year.', C.blue, FILL.blue, 12, 28), lb(160, 108, 'I think ／ probably といっしょ → will', 11, C.gray), ...cap('見通しは will')),
  },
  {
    note: 'まとめです。その場の決断・申し出は will。前から決めていた予定や、目の前に根拠のある予測は be going to。意見や見通しは will。決まりきった未来 (He will be twelve next year.) はどちらでもかまいません。',
    add: fresh(...tbl(8, 8, [150, 154], [['will', 'be going to'], ['その場の決断・申し出', '前から決めていた予定'], ['根拠なしの見通し', '目の前の根拠から予測'], ['I think ... will', '切符を買った・準備した']], { h: 30, size: 11, colors: [C.blue, C.green] }), ...cap('いつ決めたか・根拠があるか', C.main)),
  },
], 'will と be going to の使い分け');

// ───────── eigo_s143 現在完了②：継続用法 ─────────
const eigo_s143 = S([
  {
    note: '「私は大阪に3年住んでいます」を英語にします。I live in Osaka for three years. と書きたくなりますが、これはまちがいです。「3年前から今まで」という幅（はば）があるので、別の形を使います。',
    add: [wide(16, 'I live in Osaka for three years.', C.red, FILL.red, 12, 30), ng(160, 64), lb(160, 92, 'どう直す？', 13, C.ink, 'middle', true), ...cap('継続用法')],
  },
  {
    note: '❓なぜ live ではだめなのでしょう。→ 現在形は「今のこと」しか表せないので、「3年間」という期間をそえることができないからです。3年前から今まで続いているなら、現在完了 have lived を使います。',
    add: fresh(ln(20, 60, 300, 60, C.gray, false, 2), ci(40, 60, 6, '', C.blue, FILL.blue), ci(280, 60, 6, '', C.red, FILL.red), lb(40, 42, '3年前', 11, C.blue, 'middle', true), lb(280, 42, '今', 11, C.red, 'middle', true), ln(40, 80, 280, 80, C.green, false, 4), lb(160, 100, '始まって、今も続いている', 12, C.green, 'middle', true), wide(114, 'I have lived in Osaka for three years.', C.green, FILL.green, 11, 28), ...cap('過去から今まで続く → 現在完了')),
  },
  {
    note: '継続用法は「過去のある時点に始まって、今もその状態が続いている」ことを表します。I have known him for ten years.（彼を10年間知っています）は、10年前に知り合って、今も知っているということです。',
    add: fresh(wide(10, 'I have known him for ten years.', C.green, FILL.green, 12, 28), lb(160, 52, '10年前に知り合った → 今も知っている', 11, C.gray), wide(70, 'She has lived in Tokyo since 2020.', C.green, FILL.green, 12, 28), lb(160, 112, '2020年に住み始めた → 今も住んでいる', 11, C.gray), ...cap('for と since が合図')),
  },
  {
    note: '合図は for（〜の間）と since（〜以来）です。for は期間の長さ（for ten years）、since は始まりの時（since 2020）を言います。How long（どのくらいの間）でたずねられたときも、継続を考えます。',
    add: fresh(...tbl(14, 10, [90, 110, 92], [['合図', '意味', '例'], ['for', '〜の間（長さ）', 'for ten years'], ['since', '〜以来（始まり）', 'since 2020'], ['How long', 'どのくらいの間', 'How long ...?']], { h: 30, size: 11, colors: [C.green, C.gray, C.blue] }), ...cap('期間が出てきたら 現在完了')),
  },
  {
    note: '❓過去形とはどうちがうのでしょう。→ 今とつながっているかどうかです。He lived in Tokyo for ten years. は「10年間住んでいた」で、今はもう住んでいません。He has lived in Tokyo for ten years. は「10年間住んでいる」で、今も住んでいます。',
    add: fresh(wide(10, 'He lived in Tokyo for ten years.', C.red, FILL.red, 12, 28), lb(160, 50, '終わっている（今はもう住んでいない）', 11, C.red), wide(66, 'He has lived in Tokyo for ten years.', C.green, FILL.green, 12, 28), lb(160, 106, '今も続いている（今も住んでいる）', 11, C.green), ...cap('今も続いている？ → 現在完了')),
  },
  {
    note: 'live・know・be・want・have のような状態を表す語は、have ＋ 過去分詞のままで継続を表せます。I have wanted this book for a long time.（この本をずっとほしいと思っていました）、He has been sick since Monday.（彼は月曜日からずっと病気です）。',
    add: fresh(wide(10, 'I have wanted this book for a long time.', C.blue, FILL.blue, 11, 28), wide(46, 'He has been sick since Monday.', C.blue, FILL.blue, 12, 28), lb(160, 98, '状態を表す語 → have ＋ 過去分詞', 12, C.green, 'middle', true), ...cap('live / know / be / want / have')),
  },
  {
    note: '❓動作を表す語は？ → run・study・rain・wait のような動作の語は、have been ＋ ~ing（現在完了進行形）で「ずっと〜し続けている」を表します。It has been raining since this morning.（今朝からずっと雨が降っています）、He has been running for two hours.（彼は2時間ずっと走っています）。',
    add: fresh(wide(10, 'It has been raining since this morning.', C.blue, FILL.blue, 11, 28), wide(46, 'He has been running for two hours.', C.blue, FILL.blue, 12, 28), wide(82, 'I have been waiting for you for an hour.', C.blue, FILL.blue, 11, 28), lb(160, 128, '動作を表す語 → have been ＋ ~ing', 12, C.green, 'middle', true), ...cap('ずっと続ける動作')),
  },
  {
    note: '❓He has run for two hours. ではだめ？ → 「走ったことがある」という経験の意味に読まれやすいので、動作の継続は have been running にします。また、know や like のように進行形にできない動詞は、現在完了進行形にもできません。I have been knowing him とは言いません。',
    add: fresh(wide(10, 'He has run for two hours.', C.red, FILL.red, 12, 26), ng(160, 48), wide(60, 'He has been running for two hours.', C.green, FILL.green, 12, 26), wide(100, 'I have been knowing him.', C.red, FILL.red, 12, 26), ng(160, 140), ...cap('動作の継続は been ~ing')),
  },
  {
    note: 'まとめです。過去に始まって今も続いていれば現在完了。合図は for・since・How long。状態の語は have ＋ 過去分詞、動作の語は have been ＋ ~ing。終わっていれば過去形です。',
    add: fresh(wide(10, '続いている → 現在完了（for / since）', C.green, FILL.green, 12, 28), wide(44, '状態の語：I have known him for 5 years.', C.blue, FILL.blue, 11, 28), wide(78, '動作の語：He has been running for 2 hours.', C.purple, FILL.purple, 11, 28), ...cap('終わっていれば 過去形', C.main)),
  },
], '継続用法：ずっと〜している');

// ───────── eigo_s145 現在完了④：継続の疑問文と答え方 ─────────
const eigo_s145 = S([
  {
    note: '「どのくらい日本にいますか」は、英語でどうたずねるでしょう。How long have you been in Japan? です。そして答えは Yes や No ではありません。なぜ Yes では答えられないのか、順に見ていきます。',
    add: [wide(16, 'How long have you been in Japan?', C.blue, FILL.blue, 13, 30), lb(160, 66, 'どのくらい日本にいますか', 12, C.gray), wide(90, 'Yes, I have.', C.red, FILL.red, 13, 26, 90, 140), ng(160, 132), ...cap('期間をたずねる文')],
  },
  {
    note: '語順は「How long ＋ have / has ＋ 主語 ＋ 過去分詞 … ?」です。How long have you lived in this town?（どのくらいこの町に住んでいますか）、How long has she been sick?（彼女はどのくらい病気なのですか）。',
    add: fresh(...row([['How long', C.red, FILL.red], ['have', C.purple, FILL.purple], ['you', C.gray, FILL.gray], ['lived', C.green, FILL.green], ['here?', C.gray, FILL.gray]], 14, { h: 32, size: 13 }), wide(60, 'How long has she been sick?', C.blue, FILL.blue, 12, 28), lb(160, 110, 'How long ＋ have / has ＋ 主語 ＋ 過去分詞', 11, C.ink, 'middle', true), ...cap('期間をたずねる語順')),
  },
  {
    note: '❓なぜ Yes / No で答えられないのでしょう。→ How long は「どのくらいの間」とたずねる言葉なので、答えは期間でなければなりません。For five years.（5年間です）か、Since 2020.（2020年からです）と答えます。疑問詞のある文は、Yes / No で答えません。',
    add: fresh(wide(10, 'How long have you lived here?', C.blue, FILL.blue, 12, 28), bx(10, 52, 145, 32, 'For five years.\n（期間の長さ）', C.green, FILL.green, 11), bx(165, 52, 145, 32, 'Since 2020.\n（始まり）', C.green, FILL.green, 11), wide(100, 'Yes, I have.', C.red, FILL.red, 12, 26, 90, 140), ng(160, 140), ...cap('疑問詞がある文 → Yes / No は×')),
  },
  {
    note: '疑問詞がなければ、Yes / No で答えます。Have you lived here for a long time?（長い間ここに住んでいるのですか）— Yes, I have. / No, I haven\'t. 形（疑問詞があるかどうか）で判断します。',
    add: fresh(wide(10, 'Have you lived here for a long time?', C.blue, FILL.blue, 12, 28), bx(20, 52, 130, 30, 'Yes, I have.', C.green, FILL.green, 13), bx(170, 52, 130, 30, "No, I haven't.", C.red, FILL.red, 13), lb(160, 108, '疑問詞がない → Yes / No', 12, C.ink, 'middle', true), ...cap('疑問詞があるかを先に見る')),
  },
  {
    note: '継続の否定文は haven\'t / hasn\'t ＋ 過去分詞です。I haven\'t seen him for a week.（1週間、彼に会っていません）、It hasn\'t rained for a month.（1か月、雨が降っていません）。「ずっと〜していない」という意味で、これも継続用法です。',
    add: fresh(wide(10, "I haven't seen him for a week.", C.red, FILL.red, 12, 28), wide(46, "She hasn't written to me since last year.", C.red, FILL.red, 11, 28), wide(82, "It hasn't rained for a month.", C.red, FILL.red, 12, 28), lb(160, 128, '「ずっと〜していない」', 12, C.ink, 'middle', true), ...cap("haven't / hasn't ＋ 過去分詞")),
  },
  {
    note: '言いかえもあります。I haven\'t seen him for a week. ＝ It has been a week since I last saw him.（彼に最後に会ってから1週間になります）。少し難しいですが、上位校ではこの言いかえも問われます。',
    add: fresh(wide(14, "I haven't seen him for a week.", C.blue, FILL.blue, 12, 28), lb(160, 60, '＝', 18, C.ink, 'middle', true), wide(76, 'It has been a week since I last saw him.', C.green, FILL.green, 11, 28), ...cap('最後に会ってから 1週間')),
  },
  {
    note: '❓When でたずねるとどうなるでしょう。When は「いつ」と過去の一点をたずねる言葉なので、現在完了とはいっしょに使えません。When did you come to Japan?（いつ日本に来たのですか）のように過去形の文になります。',
    add: fresh(wide(10, 'How long have you lived in Japan?', C.green, FILL.green, 12, 28), lb(160, 50, '現在完了', 11, C.green), wide(64, 'When did you come to Japan?', C.blue, FILL.blue, 12, 28), lb(160, 104, '過去形', 11, C.blue), wide(116, 'When have you come to Japan?', C.red, FILL.red, 12, 24), ng(290, 128), ...cap('When は過去形とセット')),
  },
  {
    note: '答え方もちがいます。How long 〜? には For 〜. / Since 〜. で答えます。When 〜? には Three years ago. / In 2020. / Last week. のように「時」で答えます。どちらも時に関する質問ですが、答えの形がちがいます。',
    add: fresh(...tbl(14, 10, [100, 200], [['質問', '答え'], ['How long 〜?', 'For 〜. / Since 〜.'], ['When 〜?', 'Three years ago. / In 2020. / Last week.']], { h: 36, size: 11, colors: [C.green, C.blue] }), lb(160, 128, '答えの形がちがう', 12, C.ink, 'middle', true), ...cap('How long は継続、When は過去')),
  },
  {
    note: 'まとめです。期間は How long have you 〜? とたずね、For や Since で答える。疑問詞のない文だけ Yes / No で答える。否定は haven\'t。When は過去形の文です。',
    add: fresh(wide(10, 'How long have you ...? ― For / Since', C.green, FILL.green, 12, 28), wide(44, 'Have you ...? ― Yes, I have.', C.blue, FILL.blue, 12, 28), wide(78, 'When did you ...? ― 〜 ago.', C.purple, FILL.purple, 12, 28), ...cap('質問の形で答えが決まる', C.main)),
  },
], '継続の疑問文と答え方');

// ───────── eigo_s147 現在完了⑥：just と already の位置 ─────────
const eigo_s147 = S([
  {
    note: '「私はちょうど駅に着いたところです」を英語にします。日本語の語順のまま I have arrived just at the station. と書くのはまちがいです。just はどこに置くのでしょう。',
    add: [wide(16, 'I have arrived just at the station.', C.red, FILL.red, 12, 30), ng(160, 64), lb(160, 92, 'just はどこ？', 13, C.ink, 'middle', true), ...cap('just の位置')],
  },
  {
    note: 'just は、have と過去分詞の間に置きます。I have just arrived at the station. 「have ＋ just ＋ 過去分詞」をひとかたまりで覚えます。❓なぜ中なのか？ → just は「場所」ではなく「動作が起きたばかり」を表す言葉で、動詞にかかるからです。',
    add: fresh(...row([['I', C.gray, FILL.gray], ['have', C.purple, FILL.purple], ['just', C.red, FILL.red], ['arrived', C.green, FILL.green], ['at the station.', C.gray, FILL.gray]], 20, { h: 34, size: 12 }), lb(160, 76, 'have と 過去分詞の 間', 13, C.red, 'middle', true), wide(94, 'The bus has just left.（バスはちょうど出たところ）', C.green, FILL.green, 11, 26), ...cap('have ＋ just ＋ 過去分詞')),
  },
  {
    note: 'already（もう）も同じ位置です。He has already finished his homework.（彼はもう宿題を終えました）。She has already gone home.（彼女はもう帰ってしまいました）。He has finished already his homework. は不自然です。',
    add: fresh(...row([['He', C.gray, FILL.gray], ['has', C.purple, FILL.purple], ['already', C.red, FILL.red], ['finished', C.green, FILL.green], ['his homework.', C.gray, FILL.gray]], 20, { h: 34, size: 12 }), lb(160, 76, 'have / has と過去分詞の間', 12, C.red, 'middle', true), wide(94, 'She has already gone home.', C.green, FILL.green, 12, 26), ...cap('already も中に置く')),
  },
  {
    note: '❓yet はどこでしょう。→ yet だけは文の最後に置きます。I haven\'t finished my homework yet.（まだ宿題を終えていません）、Have you finished your homework yet?（もう宿題を終えましたか）。just と already は「中」、yet は「後ろ」です。',
    add: fresh(wide(10, "I haven't finished my homework yet.", C.red, FILL.red, 12, 28), wide(46, 'Have you finished your homework yet?', C.red, FILL.red, 12, 28), lb(160, 98, 'yet だけは 文の最後', 13, C.red, 'middle', true), ...cap('just / already は中、yet は後ろ')),
  },
  {
    note: '位置のまとめです。have ＋ just ＋ 過去分詞 …「ちょうど〜したところだ」。have ＋ already ＋ 過去分詞 …「もう〜してしまった」。have not ＋ 過去分詞 ＋ yet …「まだ〜していない」。Have ＋ 主語 ＋ 過去分詞 ＋ yet? …「もう〜しましたか」。',
    add: fresh(...tbl(8, 8, [150, 154], [['形', '意味'], ['have + just + 過去分詞', 'ちょうど〜したところ'], ['have + already + 過去分詞', 'もう〜してしまった'], ['have not + 過去分詞 + yet', 'まだ〜していない'], ['Have + 主語 + 過去分詞 + yet?', 'もう〜しましたか']], { h: 26, size: 10, colors: [C.blue, C.gray] }), ...cap('中・中・後ろ')),
  },
  {
    note: 'just に似た just now もあります。❓同じように使えるの？ → 使えません。He has just left the office.（ちょうど出たところです）は現在完了ですが、He left the office just now.（たった今、出ました）は過去形です。He has left the office just now. はまちがいです。',
    add: fresh(wide(10, 'He has just left the office.', C.green, FILL.green, 12, 26), lb(160, 46, 'just ＋ 現在完了', 11, C.green), wide(60, 'He left the office just now.', C.blue, FILL.blue, 12, 26), lb(160, 96, 'just now ＋ 過去形', 11, C.blue), wide(110, 'He has left the office just now.', C.red, FILL.red, 11, 24), ng(290, 122), ...cap('just now は過去形とセット')),
  },
  {
    note: '❓なぜちがうのでしょう。→ just now は yesterday や three days ago と同じ「いつ」を表す言葉だからです。現在完了は「いつ」を表す言葉とはいっしょに使えません。just は「いつ」ではなく「たった今しがた」という近さだけを表すので、現在完了と使えます。',
    add: fresh(bx(10, 12, 145, 70, 'just now\nyesterday\nthree days ago\n＝「いつ」', C.blue, FILL.blue, 11), bx(165, 12, 145, 70, 'just\n＝「たった今」\nという近さだけ', C.green, FILL.green, 11), lb(82, 102, '過去形とセット', 12, C.blue, 'middle', true), lb(238, 102, '現在完了と使える', 12, C.green, 'middle', true), ...cap('「いつ」を言う語は現在完了と使えない')),
  },
  {
    note: 'never と ever も同じ位置です。I have never been to Hokkaido. / Have you ever seen a panda? また already を疑問文で使うと、「もう終わったの？」とおどろきの意味になります。ふつうの質問なら yet を使います。',
    add: fresh(wide(10, 'I have never been to Hokkaido.', C.blue, FILL.blue, 12, 26), wide(44, 'Have you ever seen a panda?', C.blue, FILL.blue, 12, 26), lb(160, 86, 'never / ever も have と過去分詞の間', 11, C.green, 'middle', true), wide(100, 'Have you already finished?（そんなに早く？）', C.purple, FILL.purple, 10, 26), ...cap('ふつうの質問は yet')),
  },
  {
    note: 'まとめです。just・already・never・ever は have と過去分詞の間、yet は文の最後。just は現在完了、just now は過去形。位置ごとかたまりで覚えましょう。',
    add: fresh(wide(10, '中：have + just / already / never / ever + 過去分詞', C.green, FILL.green, 11, 28), wide(44, '後ろ：... yet', C.red, FILL.red, 12, 28), wide(78, 'just ＝ 現在完了　　just now ＝ 過去形', C.blue, FILL.blue, 12, 28), ...cap('位置ごと覚える', C.main)),
  },
], 'just と already の位置');

// ───────── eigo_s148 現在完了⑦：yet の二つの意味 ─────────
const eigo_s148 = S([
  {
    note: '同じ yet でも、否定文では「まだ」、疑問文では「もう」と、日本語の訳が反対になります。Have you washed the dishes yet? は「もう皿を洗いましたか」です。なぜ訳が反対になるのか、見ていきましょう。',
    add: [wide(16, "I haven't washed the dishes yet.", C.red, FILL.red, 12, 28), lb(160, 54, 'まだ洗っていません', 11, C.red), wide(72, 'Have you washed the dishes yet?', C.blue, FILL.blue, 12, 28), lb(160, 110, 'もう洗いましたか', 11, C.blue), ...cap('yet は「まだ」？「もう」？')],
  },
  {
    note: '否定文の yet は「まだ〜していない」です。I haven\'t finished my homework yet.（まだ宿題を終えていません）、She hasn\'t come home yet.（彼女はまだ帰ってきていません）、The store hasn\'t opened yet.（その店はまだ開いていません）。yet は文の最後に置きます。',
    add: fresh(wide(10, "I haven't finished my homework yet.", C.red, FILL.red, 12, 26), wide(42, "She hasn't come home yet.", C.red, FILL.red, 12, 26), wide(74, "The store hasn't opened yet.", C.red, FILL.red, 12, 26), lb(160, 116, '否定文 → まだ〜ない', 13, C.red, 'middle', true), ...cap('否定文の yet ＝ まだ')),
  },
  {
    note: '疑問文の yet は「もう〜しましたか」です。Have you finished your homework yet?（もう宿題を終えましたか）、Has the bus come yet?（バスはもう来ましたか）。答えは Yes, I have.（はい、終えました）/ No, not yet.（いいえ、まだです）。',
    add: fresh(wide(10, 'Have you finished your homework yet?', C.blue, FILL.blue, 12, 26), bx(20, 48, 130, 28, 'Yes, I have.', C.green, FILL.green, 12), bx(170, 48, 130, 28, 'No, not yet.', C.red, FILL.red, 12), wide(92, 'Has the bus come yet?', C.blue, FILL.blue, 12, 26), lb(160, 134, '疑問文 → もう〜しましたか', 13, C.blue, 'middle', true), ...cap('疑問文の yet ＝ もう')),
  },
  {
    note: '❓なぜ訳が反対になるのでしょう。→ yet はもともと「今の時点で」という意味の言葉だからです。否定文では「今の時点でまだ〜ない」、疑問文では「今の時点でもう〜したか」となります。日本語の訳が反対に見えるだけで、はたらきは同じです。',
    add: fresh(bx(90, 10, 140, 30, 'yet ＝ 今の時点で', C.main, FILL.warm, 13), ar(130, 42, 70, 66, C.red), ar(190, 42, 250, 66, C.blue), bx(10, 68, 140, 58, '否定文\n今の時点で\nまだ〜ない', C.red, FILL.red, 11), bx(170, 68, 140, 58, '疑問文\n今の時点で\nもう〜したか', C.blue, FILL.blue, 11), ...cap('はたらきは同じ、訳が反対に見えるだけ')),
  },
  {
    note: '答え方の決まりもあります。No, not yet. は「いいえ、まだです」という決まった言い方で、会話文の空所補充でよく出ます。Yes, I have already finished it. のように already で答えることもできます。',
    add: fresh(wide(10, 'Have you eaten lunch yet?', C.blue, FILL.blue, 13, 28), wide(50, 'No, not yet.　（いいえ、まだです）', C.red, FILL.red, 12, 28), wide(86, 'Yes, I have already finished it.', C.green, FILL.green, 12, 28), ...cap('決まり文句 No, not yet.')),
  },
  {
    note: '❓still はどうでしょう。→ still は「まだ〜している」と、以前からの状態が今も続くことを表し、動詞の前に置きます。He is still sleeping.（彼はまだねむっています）、I still remember her name.（私はまだ彼女の名前を覚えています）。文末には置きません。',
    add: fresh(...row([['He', C.gray, FILL.gray], ['is', C.purple, FILL.purple], ['still', C.red, FILL.red], ['sleeping.', C.green, FILL.green]], 16, { h: 32, size: 14 }), lb(160, 64, 'still は 動詞の前（文末には置かない）', 12, C.red, 'middle', true), wide(86, 'I still remember her name.', C.blue, FILL.blue, 12, 28), ...cap('still ＝ 続いている')),
  },
  {
    note: '三つの語をまとめます。already は「もう」で、肯定文の have と過去分詞の間。yet は「まだ／もう」で、否定文・疑問文の文末。still は「まだ〜している」で、動詞の前。He has already arrived. / He hasn\'t arrived yet. / He is still waiting.',
    add: fresh(...tbl(8, 8, [70, 110, 124], [['語', '意味と文', '位置'], ['already', '肯定文：もう', 'have と過去分詞の間'], ['yet', '否定：まだ／疑問：もう', '文末'], ['still', 'まだ〜している', '動詞の前']], { h: 30, size: 10, colors: [C.red, C.blue, C.gray] }), lb(160, 136, 'He has already arrived. / He hasn\'t arrived yet.', 10, C.gray, 'middle'), ...cap('already ・ yet ・ still')),
  },
  {
    note: '❓「私はまだ昼食を食べていません」を I don\'t eat lunch yet. と書くのはなぜまちがいなのでしょう。→ 現在形の否定は「ふだん食べない」という習慣の意味になってしまうからです。「まだ〜していない」は、現在完了の否定文に yet をつけて I haven\'t eaten lunch yet. と書きます。eat の過去分詞は eaten です。',
    add: fresh(wide(10, "I don't eat lunch yet.", C.red, FILL.red, 13, 28), lb(160, 50, '「ふだん食べない」の意味になる', 11, C.red), wide(68, "I haven't eaten lunch yet.", C.green, FILL.green, 13, 28), lb(160, 108, 'eat - ate - eaten', 12, C.ink, 'middle', true), ...cap('まだ〜ない ＝ 現在完了の否定 ＋ yet')),
  },
  {
    note: 'まとめです。yet を見たら、まず否定文か疑問文かを確かめます。否定文なら「まだ」、疑問文なら「もう」。どちらも文末に置きます。still は「まだ〜している」で、動詞の前です。',
    add: fresh(wide(10, "否定文：I haven't ... yet. ＝ まだ〜ない", C.red, FILL.red, 12, 28), wide(44, '疑問文：Have you ... yet? ＝ もう〜したか', C.blue, FILL.blue, 12, 28), wide(78, 'still：He is still sleeping.（まだ〜している）', C.purple, FILL.purple, 11, 28), ...cap('文の形を先に見る', C.main)),
  },
], 'yet の二つの意味');

// ───────── eigo_s149 現在完了⑧：結果が今に残る ─────────
const eigo_s149 = S([
  {
    note: 'I lost my key. と I have lost my key. はどうちがうのでしょう。どちらも「かぎをなくした」ですが、伝わることがちがいます。今の状況まで伝えるのはどちらでしょう。',
    add: [wide(16, 'I lost my key.', C.blue, FILL.blue, 13, 28), wide(54, 'I have lost my key.', C.green, FILL.green, 13, 28), lb(160, 110, '伝わることが ちがう', 13, C.ink, 'middle', true), ...cap('過去形と現在完了のちがい')],
  },
  {
    note: 'I lost my key. は、「なくした」という過去の事実だけを言います。今も見つかっていないのか、もう見つかったのかは、この文からは分かりません。',
    add: fresh(...row([['過去', C.blue, FILL.blue], ['なくした', C.red, FILL.red], ['今？', C.gray, FILL.gray]], 24, { h: 34, size: 14 }), wide(76, 'I lost my key.', C.blue, FILL.blue, 13, 28), lb(160, 122, '今どうなっているかは 分からない', 12, C.gray, 'middle'), ...cap('過去形 ＝ 過去の事実だけ')),
  },
  {
    note: '❓では I have lost my key. は？ → 「なくして、今も見つかっていない」まで伝わります。過去の出来事が、今の状態につながっているからです。だから今こまっている、という気持ちも伝わります。',
    add: fresh(ln(20, 50, 300, 50, C.gray, false, 2), ci(60, 50, 6, '', C.red, FILL.red), ci(260, 50, 6, '', C.green, FILL.green), lb(60, 32, 'なくした', 11, C.red, 'middle', true), lb(260, 32, '今', 11, C.green, 'middle', true), ln(66, 70, 254, 70, C.green, false, 4), lb(160, 90, '今も見つかっていない', 12, C.green, 'middle', true), wide(104, 'I have lost my key.', C.green, FILL.green, 13, 28), ...cap('現在完了 ＝ 結果が今に残る')),
  },
  {
    note: 'このような言い方がほかにもあります。have broken（こわして、今もこわれている）: He has broken the window.（彼が窓をこわしてしまった＝今も割れたまま）。have become（〜になって、今もそうである）: It has become warm.（暖かくなった＝今は暖かい）。',
    add: fresh(...tbl(8, 8, [100, 200], [['形', '今の状態'], ['have lost', 'なくして、今もない'], ['have broken', 'こわして、今もこわれている'], ['have become', 'なって、今もそうである'], ['have caught a cold', '風邪をひいて、今もひいている']], { h: 26, size: 10, colors: [C.green, C.gray] }), ...cap('どれも「〜してしまった。だから今こう」')),
  },
  {
    note: '❓He has gone to America. は？ → 「行ってしまって、今ここにいない」という結果です。「行ったことがある」という経験は have been to を使って、He has been to America. と言います。gone to は「行ったきり」です。',
    add: fresh(wide(10, 'He has gone to America.', C.green, FILL.green, 13, 28), lb(160, 50, '行ってしまった（今ここにいない）', 12, C.green), wide(68, 'He has been to America.', C.blue, FILL.blue, 13, 28), lb(160, 108, '行ったことがある（今はここにいる）', 12, C.blue), ...cap('gone to ≠ been to')),
  },
  {
    note: '❓結果が今は残っていないときは？ → 過去形を使います。She lost her wallet, but she found it later.（財布をなくしたが、あとで見つけた）。「今はある」のに現在完了を使うと、「今もない」という意味とぶつかってしまいます。',
    add: fresh(wide(14, 'She lost her wallet, but she found it later.', C.green, FILL.green, 11, 30), lb(160, 62, '今はある → 過去形', 12, C.green, 'middle', true), wide(80, 'She has lost her wallet, but she found it.', C.red, FILL.red, 10, 30), ng(160, 128), ...cap('「今もない」と「今はある」はぶつかる')),
  },
  {
    note: '会話では、現在完了は「だから今こまっている」と今の事情を伝えるのにぴったりです。A: Why are you looking for something?（何をさがしているの）B: I\'ve lost my glasses.（めがねをなくしてしまって）。',
    add: fresh(bx(10, 10, 300, 28, 'A: Why are you looking for something?', C.gray, FILL.gray, 12), ar(160, 40, 160, 54, C.blue), bx(10, 56, 300, 30, "B: I've lost my glasses.", C.green, FILL.green, 13), lb(160, 108, '理由（今こまっている事情）を伝える', 12, C.green, 'middle', true), ...cap('理由を説明するときに よく出る')),
  },
  {
    note: '注意があります。yesterday や last week のように「いつ」を言う語といっしょには、現在完了を使いません。I have lost my key yesterday. はまちがいで、I lost my key yesterday.（過去形）にします。くわしくは s154 の単元で学びます。',
    add: fresh(wide(14, 'I have lost my key yesterday.', C.red, FILL.red, 12, 28), ng(160, 56), wide(70, 'I lost my key yesterday.', C.green, FILL.green, 13, 28), ok(160, 114), ...cap('「いつ」を言うなら 過去形')),
  },
  {
    note: 'まとめです。現在完了は「その結果、今どうなのか」を伝える形です。have lost・have gone・have broken など、「〜してしまった。だから今こうだ」という二段構えの意味になります。過去形は過去の事実だけを言います。',
    add: fresh(bx(10, 14, 145, 44, '過去形\n過去の事実だけ', C.blue, FILL.blue, 12), bx(165, 14, 145, 44, '現在完了\n結果が今に残る', C.green, FILL.green, 12), wide(76, 'I have lost my key. ＝ なくして、今もない', C.green, FILL.green, 11, 28), ...cap('今の状態まで伝える形', C.main)),
  },
], '結果が今に残る現在完了');

// ───────── eigo_s151 現在完了⑩：ever・never・before と回数 ─────────
const eigo_s151 = S([
  {
    note: '「私はその本を一度も読んだことがありません」を英語にします。「一度も」を先に言いたくて I never have read the book. と書いてしまう人がいます。never はどこに置くのでしょう。',
    add: [wide(16, 'I never have read the book.', C.red, FILL.red, 13, 30), ng(160, 64), lb(160, 92, 'never の位置は？', 13, C.ink, 'middle', true), ...cap('語の位置')],
  },
  {
    note: '❓なぜ never は have と過去分詞のあいだなのでしょう。→ ever・never・just・already は動作の「あり方」を説明する言葉で、動詞にくっついて説明するからです。だから「have ＋ never ＋ 過去分詞」をかたまりで覚えます。',
    add: fresh(...row([['I', C.gray, FILL.gray], ['have', C.purple, FILL.purple], ['never', C.red, FILL.red], ['read', C.green, FILL.green], ['the book.', C.gray, FILL.gray]], 20, { h: 34, size: 13 }), lb(160, 72, 'ever / never / just / already は「中」', 12, C.red, 'middle', true), wide(92, 'Have you ever visited Kyoto?', C.blue, FILL.blue, 12, 26), ...cap('have ＋ never ＋ 過去分詞')),
  },
  {
    note: '❓では before は？ → before（以前に）や yet、回数の言葉は、文全体に「いつ・何回」という情報を足す言葉なので、文の終わりに置きます。I have seen him before.（以前に彼に会ったことがあります）、I have seen him twice.（2回会ったことがあります）。',
    add: fresh(...row([['I', C.gray, FILL.gray], ['have', C.purple, FILL.purple], ['seen', C.green, FILL.green], ['him', C.gray, FILL.gray], ['before.', C.red, FILL.red]], 20, { h: 34, size: 13 }), lb(160, 72, 'before ・ yet ・ 回数は「後ろ」', 12, C.red, 'middle', true), wide(92, 'I have seen him twice.', C.blue, FILL.blue, 12, 26), ...cap('文全体の情報は 文末')),
  },
  {
    note: '回数の言い方です。once（1回）、twice（2回）、three times（3回）、four times（4回）、many times（何度も）。1回と2回だけは once・twice という特別な語を使い、3回からは「数＋times」です。',
    add: fresh(...tbl(40, 8, [110, 130], [['回数', '英語'], ['1回', 'once'], ['2回', 'twice'], ['3回', 'three times'], ['何度も', 'many times']], { h: 24, size: 12, colors: [C.gray, C.green] }), lb(160, 141, 'I have been to Hokkaido once.', 11, C.gray, 'middle'), ...cap('1回・2回だけ特別')),
  },
  {
    note: '回数をたずねるときは How many times have you 〜? です。How many times have you been to Kyoto?（何回、京都へ行ったことがありますか）答えは Three times. / Only once. / Never. のように、短く答えます。',
    add: fresh(wide(10, 'How many times have you been to Kyoto?', C.blue, FILL.blue, 12, 28), bx(10, 52, 95, 30, 'Three times.', C.green, FILL.green, 11), bx(113, 52, 95, 30, 'Only once.', C.green, FILL.green, 11), bx(216, 52, 94, 30, 'Never.', C.red, FILL.red, 11), lb(160, 104, 'Have you ever 〜? → Yes, I have. / No, never.', 11, C.gray, 'middle'), ...cap('回数は How many times')),
  },
  {
    note: '❓「以前に」は before、では ago は使えるのでしょうか。→ I have met him ago. はまちがいです。ago は three days ago のように数量とセットで使い、しかも過去形といっしょに使う言葉だからです。「以前に」と現在完了なら before です。',
    add: fresh(wide(10, 'I have met him ago.', C.red, FILL.red, 13, 26), ng(160, 48), wide(60, 'I have met him before.', C.green, FILL.green, 13, 26), lb(160, 100, '現在完了 ＋ before（以前に）', 11, C.green), wide(114, 'I met him three days ago.', C.blue, FILL.blue, 12, 26), ...cap('ago は 過去形とセット')),
  },
  {
    note: '❓なぜ ago は現在完了と使えないのでしょう。→ ago は「今から3日さかのぼった過去の一点」を指す言葉だからです。現在完了は「過去から今までの幅」を表すので、一点を指す言葉（ago・yesterday・last year）とは合いません。before は時点を指さないので使えます。',
    add: fresh(ln(20, 40, 300, 40, C.gray, false, 2), ci(60, 40, 6, '', C.red, FILL.red), ci(260, 40, 6, '', C.green, FILL.green), lb(60, 22, 'three days ago', 11, C.red, 'middle', true), lb(260, 22, '今', 11, C.green, 'middle', true), lb(60, 62, '過去の一点', 11, C.red), ln(66, 84, 254, 84, C.blue, false, 4), lb(160, 102, '現在完了は 過去から今までの幅', 12, C.blue, 'middle', true), lb(160, 126, '一点を指す語とは 合わない', 12, C.red, 'middle'), ...cap('点と幅はぶつかる')),
  },
  {
    note: '確かめのしかたです。①中に置く語（ever・never・just・already）と、文末に置く語（before・yet・回数）に分けて言えるか。②I never have read は×、I have never read が正しい。③「以前に」は before、「〇日前に」は ago（過去形）。',
    add: fresh(...tbl(10, 8, [100, 100, 100], [['中', '文末', '過去形とセット'], ['ever', 'before', 'ago'], ['never', 'yet', 'three days ago'], ['just / already', 'once / twice', '（なし）']], { h: 28, size: 11, colors: [C.green, C.blue, C.red] }), ...cap('3つのグループで覚える')),
  },
  {
    note: 'まとめです。ever・never は動作のあり方なので中に、before・yet・回数は文全体への情報なので文末に置く。ago は過去の一点なので過去形と使い、現在完了には before を使います。',
    add: fresh(wide(10, 'I have never read the book.', C.green, FILL.green, 12, 28), wide(44, 'I have met him before.', C.blue, FILL.blue, 12, 28), wide(78, 'I met him three days ago.', C.purple, FILL.purple, 12, 28), ...cap('位置と時制をセットで覚える', C.main)),
  },
], 'ever・never・before と回数の言い方');

// ───────── eigo_s152 現在完了⑪：have been to と have gone to ─────────
const eigo_s152 = S([
  {
    note: 'He has been to America. と He has gone to America. は、to のあとが同じでも意味が大きくちがいます。前者は「行ったことがある」、後者は「行ってしまって、今ここにいない」です。しくみが分かれば取りちがえません。',
    add: [wide(16, 'He has been to America.', C.blue, FILL.blue, 13, 28), wide(54, 'He has gone to America.', C.green, FILL.green, 13, 28), lb(160, 110, 'どうちがう？', 13, C.ink, 'middle', true), ...cap('been to と gone to')],
  },
  {
    note: '❓been to はどんな意味でしょう。→ 「行ったことがある」（経験）です。その場所を訪れたことがあり、今はもどってきています。I have been to Kyoto three times.（京都へ3回行ったことがあります）。',
    add: fresh(bx(10, 20, 80, 36, 'ここ（今）', C.green, FILL.green, 12), bx(230, 20, 80, 36, 'アメリカ', C.blue, FILL.blue, 12), ar(130, 30, 230, 30, C.blue), ar(230, 46, 130, 46, C.green), lb(160, 80, '行って、帰ってきた', 12, C.green, 'middle', true), wide(96, 'I have been to Kyoto three times.', C.blue, FILL.blue, 11, 26), ...cap('been to ＝ 行って帰ってきた')),
  },
  {
    note: '❓gone to は？ → 「行ってしまって、今ここにいない」（結果）です。He has gone to America. は、アメリカへ行ったきり、この場にいないことを表します。',
    add: fresh(bx(10, 20, 80, 36, 'ここ（今）', C.gray, FILL.gray, 12), bx(230, 20, 80, 36, 'アメリカ\n（今そこ）', C.green, FILL.green, 11), ar(100, 38, 226, 38, C.green), lb(160, 80, '行ったきり。ここにはいない', 12, C.green, 'middle', true), wide(96, 'He has gone to America.', C.green, FILL.green, 12, 26), ...cap('gone to ＝ 行ったきり')),
  },
  {
    note: '❓been in は？ → 「〜にずっといる」（継続）です。She has been in Osaka for three years.（彼女は3年間ずっと大阪にいます）。in は「その中にいる」状態を表すので、継続の意味になります。',
    add: fresh(wide(10, 'She has been in Osaka for three years.', C.purple, FILL.purple, 11, 28), ln(40, 70, 280, 70, C.purple, false, 4), lb(160, 56, '3年間ずっと大阪に', 11, C.purple), lb(160, 92, 'in ＝ その中にいる ＝ 状態', 12, C.ink, 'middle', true), ...cap('been in ＝ ずっといる')),
  },
  {
    note: '三つをまとめて並べます。been to は「行って帰ってきた」、gone to は「行ったきり」、been in は「ずっとそこにいる」です。前置詞が to か in かでも、been か gone かでも意味が変わります。',
    add: fresh(...tbl(8, 8, [84, 90, 130], [['形', '意味', '例'], ['been to', '行ったことがある', 'been to Kyoto'], ['gone to', '行ってしまった', 'gone to America'], ['been in', 'ずっといる', 'been in Osaka']], { h: 32, size: 11, colors: [C.blue, C.gray, C.green] }), ...cap('3つを並べて区別')),
  },
  {
    note: '❓I have gone to Kyoto. と自分のことに使えるでしょうか。→ 使えません。「行ってしまって今ここにいない」のは話している本人になってしまい、おかしいからです。自分のことは I have been to Kyoto.（行ったことがある）と言います。',
    add: fresh(wide(10, 'I have gone to Kyoto.', C.red, FILL.red, 13, 26), ng(160, 48), lb(160, 66, '話している本人が「ここにいない」？', 11, C.red), wide(84, 'I have been to Kyoto.', C.green, FILL.green, 13, 26), ok(160, 124), ...cap('I / we には gone to を使わない')),
  },
  {
    note: '三人称なら、今どこにいるかで使い分けます。He has been to Kyoto.（彼は京都へ行ったことがある＝今ここにいる）。He has gone to Kyoto.（彼は京都へ行ってしまった＝今ここにいない）。また、前置詞を落とさず、I have been to Kyoto. と to を書きます。',
    add: fresh(wide(10, 'He has been to Kyoto.', C.blue, FILL.blue, 12, 26), lb(160, 46, '今ここにいる', 11, C.blue), wide(60, 'He has gone to Kyoto.', C.green, FILL.green, 12, 26), lb(160, 96, '今ここにいない', 11, C.green), wide(110, 'I have been Kyoto.', C.red, FILL.red, 12, 24), ng(280, 122), ...cap('to を落とさない')),
  },
  {
    note: 'been to に just や already がつくと意味が変わります。I have just been to the post office.（郵便局へ行ってきたところです）は完了の意味です。合図の語を見てから訳を決めましょう。また「彼女は3日間ずっと病院にいます」は been in で、She has been in the hospital for three days. です。',
    add: fresh(wide(10, 'I have just been to the post office.', C.blue, FILL.blue, 11, 28), lb(160, 50, '行ってきたところ（完了）', 11, C.blue), wide(68, 'She has been in the hospital for three days.', C.purple, FILL.purple, 10, 28), lb(160, 108, '3日間ずっといる（継続）', 11, C.purple), ...cap('for があれば been in')),
  },
  {
    note: 'まとめです。been to は「行って帰ってきた」、gone to は「行ったきり」、been in は「ずっといる」。I や we には gone to を使いません。',
    add: fresh(wide(10, 'been to ＝ 行って帰ってきた（経験）', C.blue, FILL.blue, 12, 28), wide(44, 'gone to ＝ 行ったきり（今いない）', C.green, FILL.green, 12, 28), wide(78, 'been in ＝ ずっといる（継続）', C.purple, FILL.purple, 12, 28), ...cap('I / we には gone を使わない', C.main)),
  },
], 'have been to と have gone to');

// ───────── eigo_s154 現在完了と過去形②：いっしょに使えない語 ─────────
const eigo_s154 = S([
  {
    note: 'I have finished it yesterday. はまちがいです。現在完了は今とつながる形なので、yesterday のように過去の一点を指す言葉とは同居できません。どの言葉が使えて、どの言葉が使えないのかを整理します。',
    add: [wide(16, 'I have finished it yesterday.', C.red, FILL.red, 13, 30), ng(160, 64), lb(160, 92, 'どこがいけない？', 13, C.ink, 'middle', true), ...cap('いっしょに使えない語')],
  },
  {
    note: '❓なぜ yesterday と現在完了はぶつかるのでしょう。→ 現在完了は「過去から今まで」を一本の線でとらえる形です。yesterday は線の途中の一点だけを指すので、線と点が矛盾してしまいます。',
    add: fresh(ln(20, 56, 300, 56, C.gray, false, 2), ci(60, 56, 6, '', C.red, FILL.red), ci(260, 56, 6, '', C.green, FILL.green), lb(60, 38, 'yesterday', 11, C.red, 'middle', true), lb(260, 38, '今', 11, C.green, 'middle', true), ln(66, 80, 254, 80, C.blue, false, 4), lb(160, 98, '現在完了：過去から今までの線', 12, C.blue, 'middle', true), lb(160, 122, 'yesterday：途中の一点', 12, C.red, 'middle'), ...cap('線と点はぶつかる')),
  },
  {
    note: '使えない語は、yesterday・last night / week / year・three days ago・a long time ago・just now・then・in 2020・When 〜? などです。これらは「過去の一点」を指します。使うなら過去形にします。',
    add: fresh(...tbl(12, 8, [140, 156], [['使えない（一点を指す）', '正しい文（過去形）'], ['yesterday', 'I finished it yesterday.'], ['three days ago', 'I finished it three days ago.'], ['last year', 'He came to Japan last year.'], ['in 2020 / then', '過去形にする']], { h: 26, size: 10, colors: [C.red, C.green] }), ...cap('一点を指す語 → 過去形')),
  },
  {
    note: '使える語は、for・since・just・already・yet・ever・never・before・回数（once / twice / times）・today・this week です。❓なぜ使えるの？ → これらは「今を含む範囲」や「どのくらい・何回・もう／まだ」を表す言葉で、線と矛盾しないからです。',
    add: fresh(...tbl(12, 8, [140, 156], [['使える（今を含む）', '例'], ['for / since', 'for ten years'], ['just / already / yet', 'just finished'], ['ever / never / before', 'never been'], ['once / twice / today', 'twice today']], { h: 26, size: 10, colors: [C.green, C.gray] }), ...cap('今を含む語は 現在完了と両立')),
  },
  {
    note: '疑問文では When と How long が対になります。When did you come to Japan?（いつ日本に来たのですか）— Three years ago. How long have you been in Japan?（どのくらい日本にいますか）— For three years. When は必ず過去形とセットです。',
    add: fresh(wide(10, 'When did you come to Japan?', C.blue, FILL.blue, 12, 28), lb(160, 50, '過去形 ― Three years ago.', 11, C.blue), wide(66, 'How long have you been in Japan?', C.green, FILL.green, 12, 28), lb(160, 106, '現在完了 ― For three years.', 11, C.green), wide(118, 'When have you come to Japan?', C.red, FILL.red, 11, 24), ng(290, 130), ...cap('When ＝ 過去形、How long ＝ 現在完了')),
  },
  {
    note: '❓「3年前に日本に来て、今もここにいる」を一つの文で言えますか。→ 言えません。一つの文に「3年前」と現在完了を同居させられないので、二つの文に分けます。I came to Japan three years ago. And I have been here since then.',
    add: fresh(wide(10, 'I came to Japan three years ago.', C.blue, FILL.blue, 12, 28), lb(160, 50, '過去形：3年前の一点', 11, C.blue), wide(64, 'And I have been here since then.', C.green, FILL.green, 12, 28), lb(160, 104, '現在完了：それからずっと', 11, C.green), ...cap('二つの文に分ける')),
  },
  {
    note: '書きかえの問題もあります。He died three years ago.（彼は3年前に亡くなった）＝ He has been dead for three years. ＝ It has been three years since he died. 「3年前に死んだ」は「死んだ状態が3年続いている」と考えると、現在完了に置きかえられます。',
    add: fresh(wide(8, 'He died three years ago.', C.blue, FILL.blue, 12, 26), lb(160, 44, '＝', 16, C.ink, 'middle', true), wide(54, 'He has been dead for three years.', C.green, FILL.green, 11, 26), lb(160, 90, '＝', 16, C.ink, 'middle', true), wide(100, 'It has been three years since he died.', C.green, FILL.green, 10, 26), ...cap('死んだ状態が3年続いている')),
  },
  {
    note: 'today や this week は「今を含む期間」なので現在完了と使えます。I have seen him twice today.（今日、彼に2回会いました）。ただし、今日がもう終わった話をするなら過去形です。今を含むかどうかで判断します。',
    add: fresh(wide(14, 'I have seen him twice today.', C.green, FILL.green, 12, 28), lb(160, 56, '今日はまだ続いている → 現在完了', 11, C.green), wide(78, 'I saw him twice today.', C.blue, FILL.blue, 12, 28), lb(160, 118, '今日がもう終わった話 → 過去形', 11, C.blue), ...cap('今を含むかで判断')),
  },
  {
    note: 'まとめです。「いつ」を言いたいなら過去形、「今どうか」を言いたいなら現在完了。yesterday・ago・last 〜・When は過去形。for・since・already・yet・ever・never・before・回数は現在完了です。',
    add: fresh(wide(10, '「いつ」→ 過去形：yesterday / ago / last / When', C.blue, FILL.blue, 11, 28), wide(44, '「今どうか」→ 現在完了：for / since / yet / ever', C.green, FILL.green, 11, 28), wide(78, 'When did you ...?　／　How long have you ...?', C.purple, FILL.purple, 11, 28), ...cap('語を見たら時制が決まる', C.main)),
  },
], '現在完了と過去形：いっしょに使えない語');

// ───────── eigo_s159 can④：許可と依頼の can、can't の「はずがない」 ─────────
const eigo_s159 = S([
  {
    note: 'Can I open the window? と Can you open the window? ちがうのは1語だけですが、意味は入れかわります。前者は「開けてもいいですか」、後者は「開けてくれますか」です。だれが動作をするのかが決め手です。',
    add: [wide(16, 'Can I open the window?', C.blue, FILL.blue, 13, 28), wide(54, 'Can you open the window?', C.green, FILL.green, 13, 28), lb(160, 110, '1語ちがうだけで 意味が入れかわる', 12, C.ink, 'middle', true), ...cap('許可と依頼')],
  },
  {
    note: '❓Can I 〜? はどんな意味でしょう。→ 「（私が）〜してもいいですか」と、許可を求める言い方です。Can I use your dictionary?（辞書を使ってもいいですか）、Can I have some water?（お水をいただけますか）。自分が何かをしたいときに使います。',
    add: fresh(bx(15, 14, 100, 40, '私（I）が\nする', C.blue, FILL.blue, 13), ar(120, 34, 190, 34, C.blue), bx(194, 14, 110, 40, '許可を\nもらう', C.green, FILL.green, 13), wide(70, 'Can I use your dictionary?', C.blue, FILL.blue, 12, 28), wide(104, 'Can I have some water?', C.blue, FILL.blue, 12, 28), ...cap('Can I 〜? ＝ してもいいですか')),
  },
  {
    note: '❓Can you 〜? は？ → 「（あなたが）〜してくれませんか」と、相手にお願いする言い方です。Can you open the window?（窓を開けてくれませんか）、Can you help me with my homework?（宿題を手伝ってくれませんか）。するのは相手です。',
    add: fresh(bx(15, 14, 100, 40, 'あなた（you）が\nする', C.green, FILL.green, 12), ar(120, 34, 190, 34, C.green), bx(194, 14, 110, 40, 'お願い\nする', C.purple, FILL.purple, 13), wide(70, 'Can you open the window?', C.green, FILL.green, 12, 28), wide(104, 'Can you help me with my homework?', C.green, FILL.green, 11, 28), ...cap('Can you 〜? ＝ してくれませんか')),
  },
  {
    note: '❓なぜ主語を見ればよいのでしょう。→ 動作をするのがだれなのかを、主語がはっきり示すからです。「窓を開けてくれませんか」と日本語には主語がありませんが、開けるのは相手なので Can you を選びます。「相手にしてもらう＝ you」「自分がする＝ I」と、先に決めます。',
    add: fresh(...tbl(14, 10, [100, 100, 98], [['主語', '動作をする人', '意味'], ['Can I 〜?', '私', '〜してもいい？'], ['Can you 〜?', 'あなた', '〜してくれる？']], { h: 32, size: 12, colors: [C.blue, C.gray, C.green] }), wide(112, '「窓を開けてくれませんか」＝ Can you open the window?', C.green, FILL.green, 10, 26), ...cap('動作をする人を先に決める')),
  },
  {
    note: '答え方は、どちらも同じです。承諾（しょうだく）は Sure. / Of course. / All right. / No problem. 断るときは I\'m sorry, I can\'t. / Sorry, but I\'m busy now. Yes, you can. とも言えますが、上から許可を出すひびきになることがあるので、会話では Sure. がよく使われます。',
    add: fresh(wide(10, 'Can you open the window?', C.green, FILL.green, 13, 28), bx(8, 52, 146, 56, 'OK のとき\nSure. / Of course.\nAll right. / No problem.', C.green, FILL.green, 11), bx(166, 52, 146, 56, '断るとき\nI\'m sorry, I can\'t.\nSorry, but I\'m busy.', C.red, FILL.red, 11), ...cap('会話では Sure. が自然')),
  },
  {
    note: 'can には、もう一つの意味があります。can\'t は「〜できない」のほかに、「〜のはずがない」という強い打ち消しの推量（すいりょう）も表します。It can\'t be true.（それが本当のはずがない）。上位校や英検3級で問われる用法です。',
    add: fresh(wide(14, "It can't be true.", C.purple, FILL.purple, 13, 28), lb(160, 56, 'それが本当のはずがない', 12, C.ink, 'middle', true), wide(78, "He can't be at home. His bike isn't here.", C.purple, FILL.purple, 11, 28), lb(160, 118, '彼が家にいるはずがない。自転車がないもの', 11, C.gray), ...cap("can't be 〜 ＝ 〜のはずがない")),
  },
  {
    note: '❓must be との関係は？ → must be 〜（〜にちがいない）の反対が can\'t be 〜（〜のはずがない）で、二つは対です。「〜でないにちがいない」と言いたくて must not be とするのは、よくあるまちがいです。must not は「してはいけない」という禁止になってしまいます。',
    add: fresh(bx(10, 14, 145, 40, 'must be 〜\n〜にちがいない', C.green, FILL.green, 12), bx(165, 14, 145, 40, "can't be 〜\n〜のはずがない", C.red, FILL.red, 12), lb(160, 72, '← 対になっている →', 12, C.ink, 'middle', true), wide(92, 'must not be 〜 ＝ 禁止になってしまう', C.red, FILL.red, 11, 26), ...cap('反対語として覚える')),
  },
  {
    note: '見分け方です。うしろが be や動詞の原形でも、文の内容が「能力」ではなく「そんなことはありえない」という判断なら推量の can\'t です。She can\'t be twenty.（彼女が20歳のはずがない）は能力の話ではありません。訳して意味が通らないときは推量を疑います。',
    add: fresh(wide(12, "She can't be twenty.", C.purple, FILL.purple, 13, 28), lb(160, 56, '彼女が20歳のはずがない（能力の話ではない）', 11, C.ink), wide(78, "That story can't be true.", C.purple, FILL.purple, 12, 28), lb(160, 116, '× 本当にすることができない', 11, C.red), ...cap('意味が通らなければ 推量を疑う')),
  },
  {
    note: 'まとめです。Can I 〜? は許可を求める、Can you 〜? は相手へのお願い。どちらも Sure. などで答える。can\'t be 〜 は「〜のはずがない」で、must be の反対です。',
    add: fresh(wide(10, 'Can I 〜?　私がしてもいい？', C.blue, FILL.blue, 12, 28), wide(44, 'Can you 〜?　あなたがしてくれる？', C.green, FILL.green, 12, 28), wide(78, "can't be 〜　〜のはずがない（↔ must be）", C.purple, FILL.purple, 11, 28), ...cap('主語を見て意味を決める', C.main)),
  },
], 'Can I と Can you、can\'t be');

// ───────── eigo_s160 may①：許可の may ─────────
const eigo_s160 = S([
  {
    note: 'お店に入ると、店員さんが May I help you? と声をかけてきます。直訳すると「私はあなたを手伝ってもよいですか」。日本語の「いらっしゃいませ」にあたる決まり文句です。may って、どんな言葉なのでしょう。',
    add: [bx(60, 14, 200, 40, 'May I help you?', C.blue, FILL.blue, 15), lb(160, 76, '直訳：私はあなたを手伝ってもよいですか', 11, C.gray), lb(160, 100, '＝「いらっしゃいませ」', 13, C.main, 'middle', true), ...cap('店員さんの決まり文句')],
  },
  {
    note: 'may の第一の意味は「〜してもよい」という許可です。May I 〜? は「〜してもよろしいですか」と、ていねいに許可を求めます。May I come in?（入ってもよろしいですか）、May I use your phone?（電話をお借りしてもよろしいですか）。',
    add: fresh(wide(10, 'May I come in?', C.blue, FILL.blue, 13, 26), wide(42, 'May I use your phone?', C.blue, FILL.blue, 13, 26), wide(74, 'May I ask you a question?', C.blue, FILL.blue, 13, 26), lb(160, 122, '〜してもよろしいですか', 12, C.ink, 'middle', true), ...cap('May I 〜? ＝ ていねいな許可')),
  },
  {
    note: '❓Can I 〜? とどうちがうのでしょう。→ may は相手にへりくだって許しを求める言葉なので、Can I 〜? よりていねいです。友達には Can I、店員さんや先生には May I、さらにていねいなら Could I と、場面で選びます。',
    add: fresh(...row([['Can I 〜?', C.blue, FILL.blue], ['May I 〜?', C.green, FILL.green], ['Could I 〜?', C.purple, FILL.purple]], 20, { h: 34, size: 13, gap: 14 }), ar(60, 66, 250, 66, C.gray), lb(160, 54, 'ていねいさ', 11, C.gray), lb(60, 90, '友達に', 11, C.blue), lb(160, 90, '店員・先生に', 11, C.green), lb(262, 90, 'さらに', 11, C.purple), ...cap('相手と場面で選ぶ')),
  },
  {
    note: '答え方です。承諾は Sure. / Of course. / Certainly. / Yes, please do. 断りは I\'m sorry, but you can\'t. / I\'m afraid not. No, you may not. は「だめです」と強くはねつけるひびきになるので、ふつうは I\'m sorry をつけてやわらげます。',
    add: fresh(wide(10, 'May I take a picture here?', C.blue, FILL.blue, 12, 26), bx(8, 48, 146, 52, 'OK のとき\nSure. / Of course.\nCertainly.', C.green, FILL.green, 11), bx(166, 48, 146, 52, '断るとき\nI\'m sorry, but you can\'t.\nI\'m afraid not.', C.red, FILL.red, 10), ...cap('断るときは I\'m sorry をそえる')),
  },
  {
    note: '❓May you 〜? と言えるでしょうか。→ 言えません。相手に何かを頼むときに May you 〜? とは言いません。may で許可を求められるのは、主語が I のときだけです。頼むときは Can you / Will you / Could you 〜? を使います。',
    add: fresh(wide(10, 'May you carry my bag?', C.red, FILL.red, 13, 26), ng(160, 48), wide(60, 'Could you carry my bag?', C.green, FILL.green, 13, 26), lb(160, 104, '（Can you 〜? / Will you 〜? も可）', 11, C.gray), ...cap('許可の may は 主語が I')),
  },
  {
    note: '会話の決まり文句です。店では、店員 May I help you? — 客 Yes, please. I\'m looking for a T-shirt.（Tシャツを探しています）/ No, thank you. I\'m just looking.（見ているだけです）。電話では May I speak to Ken, please?（ケンさんをお願いします）と言います。',
    add: fresh(bx(10, 8, 300, 26, '店員：May I help you?', C.gray, FILL.gray, 12), bx(10, 38, 145, 34, "Yes, please.\nI'm looking for a T-shirt.", C.green, FILL.green, 9), bx(165, 38, 145, 34, "No, thank you.\nI'm just looking.", C.red, FILL.red, 10), wide(86, 'May I speak to Ken, please?（電話）', C.blue, FILL.blue, 11, 26), ...cap('場面ごと丸ごと覚える')),
  },
  {
    note: '❓May I help you? を「私を手伝ってくれますか」と取りちがえる人が多いのですが、どうして？ → 動作をするのは I（店員）だからです。「（私が）お手伝いしましょうか」という申し出です。「手伝ってくれますか」と頼むときは Can you help me? と言います。',
    add: fresh(wide(10, 'May I help you?', C.blue, FILL.blue, 13, 26), lb(160, 48, '＝ 私がお手伝いしましょうか（申し出）', 12, C.blue, 'middle', true), wide(66, 'Can you help me?', C.green, FILL.green, 13, 26), lb(160, 104, '＝ 手伝ってくれますか（お願い）', 12, C.green, 'middle', true), ...cap('するのはだれか')),
  },
  {
    note: 'もう1つ、You may go home now.（もう帰ってよろしい）のように、平らな文の may は、先生が生徒に言うような、上の立場から許可を与えるひびきになります。友達どうしでは使いません。',
    add: fresh(wide(14, 'You may go home now.', C.purple, FILL.purple, 13, 28), lb(160, 56, 'もう帰ってよろしい', 12, C.ink, 'middle', true), lb(160, 84, '先生 → 生徒　のような上から目線', 12, C.purple, 'middle'), lb(160, 110, '友達どうしでは使わない', 12, C.red, 'middle', true), ...cap('平らな文の may は上から許可')),
  },
  {
    note: 'まとめです。May I 〜? は「〜してもよろしいですか」。may のうしろは動詞の原形で、to はつけません。答えは Sure. / Of course. / I\'m sorry, but 〜。May you 〜? とは言いません。May I help you? は店員の決まり文句です。',
    add: fresh(wide(10, 'May I ＋ 原形 〜?（to は つけない）', C.blue, FILL.blue, 12, 28), wide(44, '答え：Sure. / I\'m sorry, but 〜.', C.green, FILL.green, 12, 28), wide(78, 'May you 〜? は ない　　May I help you? ＝ 店員の決まり文句', C.red, FILL.red, 9, 28), ...cap('主語は I のとき', C.main)),
  },
], '許可の may');

// ───────── eigo_s162 may③：許可と推量の見分け方 ─────────
const eigo_s162 = S([
  {
    note: 'may には「〜してもよい」（許可）と「〜かもしれない」（推量）の二つの意味があります。You may go home. は「帰ってよろしい」とも「帰るかもしれない」とも読めそうです。どこを見れば決められるのでしょう。',
    add: [bx(10, 20, 145, 44, 'may\n〜してもよい', C.blue, FILL.blue, 13), bx(165, 20, 145, 44, 'may\n〜かもしれない', C.green, FILL.green, 13), lb(160, 92, '許可　　　　　　　　推量', 12, C.gray, 'middle'), lb(160, 120, '見分ける手順を作ろう', 13, C.main, 'middle', true), ...cap('may の二つの意味')],
  },
  {
    note: '手順①：主語と文の形を見ます。May I 〜? / May we 〜? は許可。You may 〜. も許可（〜してよろしい）。He / She / It / They may 〜. は、ほとんど推量（〜かもしれない）です。',
    add: fresh(...tbl(8, 8, [150, 154], [['形', '意味'], ['May I / May we 〜?', '許可'], ['You may 〜.', '許可（〜してよろしい）'], ['He / She / It / They may 〜.', '推量（〜かもしれない）']], { h: 30, size: 11, colors: [C.blue, C.green] }), ...cap('① 主語と形を見る')),
  },
  {
    note: '手順②：日本語にして通るほうを選びます。It may be cold tomorrow. を「明日は寒くてもよい」と訳しても意味が通りません。「明日は寒いかもしれない」なら通ります。だから推量です。',
    add: fresh(wide(10, 'It may be cold tomorrow.', C.purple, FILL.purple, 13, 28), wide(50, '明日は寒くてもよい（許可）', C.red, FILL.red, 12, 26), ng(290, 63), wide(86, '明日は寒いかもしれない（推量）', C.green, FILL.green, 12, 26), ok(290, 99), ...cap('② 日本語にして 通るほう')),
  },
  {
    note: '手順③：内容がマイナスなら推量を疑います。He may be sick.（病気かもしれない）、The train may be late.（電車は遅れるかもしれない）。「病気になってよい」「遅れてよい」と許可することは、ふつうないからです。',
    add: fresh(wide(14, 'He may be sick.', C.green, FILL.green, 13, 28), lb(160, 56, '病気かもしれない（推量）', 12, C.green), wide(78, 'The train may be late.', C.green, FILL.green, 13, 28), lb(160, 120, '電車は遅れるかもしれない（推量）', 12, C.green), ...cap('③ マイナスの内容 ＝ 推量')),
  },
  {
    note: '❓might はどう使うのでしょう。→ might は許可の意味がほとんどなく、ほぼ推量専用です。might が出てきたら「ひょっとすると〜かもしれない」と訳せば当たります。',
    add: fresh(wide(12, 'He might be late.', C.green, FILL.green, 13, 28), lb(160, 56, 'ひょっとすると 遅れるかもしれない', 12, C.ink, 'middle', true), lb(160, 90, 'might ＝ ほぼ推量専用', 13, C.main, 'middle', true), ...cap('might は推量専用')),
  },
  {
    note: '言いかえも覚えます。許可の may は can で言いかえられます。May I use this computer? ＝ Can I use this computer? 推量の may は maybe（たぶん）を使った文で言いかえます。She may come tomorrow. ＝ Maybe she will come tomorrow.',
    add: fresh(wide(8, 'May I use this computer? ＝ Can I use ...?', C.blue, FILL.blue, 11, 26), lb(160, 44, '許可 ⇔ can', 12, C.blue, 'middle', true), wide(62, 'She may come tomorrow.', C.green, FILL.green, 12, 26), lb(160, 98, '＝', 14, C.ink, 'middle', true), wide(108, 'Maybe she will come tomorrow.', C.green, FILL.green, 12, 26), ...cap('推量 ⇔ maybe ＋ will')),
  },
  {
    note: '❓maybe と may be は同じでしょうか。→ ちがいます。maybe は「たぶん」という1語の副詞、may be は助動詞 may ＋ be の2語です。She may be late. ＝ Maybe she will be late. のように、空所のあとに完全な文が続くなら maybe です。また、Maybe は It will maybe rain. ではなく、文頭に置いて Maybe it will rain. と書きます。',
    add: fresh(bx(10, 14, 145, 44, 'maybe\n1語・副詞\n「たぶん」', C.green, FILL.green, 11), bx(165, 14, 145, 44, 'may be\n2語・助動詞＋be\n「〜かもしれない」', C.blue, FILL.blue, 10), wide(76, 'Maybe it will rain.　（文頭に置く）', C.green, FILL.green, 12, 26), ...cap('maybe と may be は別')),
  },
  {
    note: 'ていねいさの階段（かいだん）も確かめます。Can I 〜?（友達に）、May I 〜?（目上の人に）、Could I 〜?（さらにていねい）。会話では、A: May I sit here? B: Sure. Go ahead.（どうぞ）のように答えます。',
    add: fresh(bx(10, 10, 300, 28, 'A: May I sit here?', C.gray, FILL.gray, 12), ar(160, 40, 160, 54, C.blue), bx(10, 56, 145, 30, 'B: Sure. Go ahead.', C.green, FILL.green, 12), bx(165, 56, 145, 30, "B: I'm sorry, but my friend is coming.", C.red, FILL.red, 8), ...cap('許可の答え方')),
  },
  {
    note: 'まとめです。May I 〜? と You may 〜. は許可。He / She / It may 〜. と内容がマイナスなら推量。might はほぼ推量専用。許可は can、推量は maybe で言いかえられます。',
    add: fresh(wide(10, '許可：May I 〜? / You may 〜.（＝ can）', C.blue, FILL.blue, 12, 28), wide(44, '推量：He may 〜. / マイナスの内容（＝ maybe）', C.green, FILL.green, 11, 28), wide(78, 'might ＝ ほぼ推量専用', C.purple, FILL.purple, 12, 28), ...cap('日本語にして意味で分ける', C.main)),
  },
], 'may の二つの意味の見分け方');

// ───────── eigo_s163 must①：「〜しなければならない」 ─────────
const eigo_s163 = S([
  {
    note: '「もう帰らなければなりません」を英語で言うと、I must go home now. の5語で足ります。「しなければならない」という気持ちは must 1語が引き受け、動詞は原形のまま。英語の身軽さがよく分かります。',
    add: [...row([['I', C.gray, FILL.gray], ['must', C.red, FILL.red], ['go', C.green, FILL.green], ['home', C.gray, FILL.gray], ['now.', C.gray, FILL.gray]], 20, { h: 34, size: 14 }), lb(160, 76, '「しなければならない」は must 1語', 12, C.red, 'middle', true), lb(160, 100, 'うしろは 動詞の原形', 12, C.green, 'middle', true), ...cap('must ＋ 原形')],
  },
  {
    note: '❓must はどんな意味でしょう。→ 「〜しなければならない」という強い義務です。規則で決まっていることや、話し手が「絶対にそうすべきだ」と思っていることに使います。You must wash your hands before dinner.（夕食の前に手を洗いなさい）、We must be quiet in the library.（図書館では静かにしなければならない）。',
    add: fresh(wide(10, 'You must wash your hands before dinner.', C.red, FILL.red, 11, 28), wide(44, 'We must be quiet in the library.', C.red, FILL.red, 12, 28), lb(160, 92, '規則・強い義務', 12, C.ink, 'middle', true), ...cap('must ＝ しなければならない')),
  },
  {
    note: '❓主語が she のとき、must に s はつくでしょうか。→ つきません。She must study hard for the test. のように、must は形が1つしかなく、うしろの動詞も原形のままです。「変わらない代わりに、意味が強い」と覚えます。',
    add: fresh(wide(12, 'She must study hard for the test.', C.green, FILL.green, 12, 28), wide(48, 'She musts study hard.', C.red, FILL.red, 12, 28), ng(290, 61), wide(84, 'She must studies hard.', C.red, FILL.red, 12, 28), ng(290, 97), ...cap('s もつかない。to もつかない')),
  },
  {
    note: '否定文は must not（mustn\'t）で、「〜してはいけない」という強い禁止になります。You must not run here.（ここで走ってはいけません）。「〜しなくてよい」という意味ではないところが最大のポイントです。',
    add: fresh(wide(14, 'You must not run here.', C.red, FILL.red, 13, 28), lb(160, 56, 'ここで走ってはいけません（禁止）', 12, C.red, 'middle', true), lb(160, 86, '× 走らなくてよい', 12, C.gray, 'middle'), lb(160, 112, "短縮形は mustn't", 12, C.ink, 'middle'), ...cap('must not ＝ してはいけない')),
  },
  {
    note: '疑問文は Must ＋ 主語 ＋ 原形 〜? で、do は使いません。Must I go now?（もう行かなければなりませんか）答えは Yes, you must. / No, you don\'t have to.（いいえ、その必要はありません）。❓No, you mustn\'t. と答えてもいい？ → だめです。「行ってはいけない」という別の意味になってしまいます。',
    add: fresh(wide(10, 'Must I go now?', C.blue, FILL.blue, 13, 26), bx(10, 48, 145, 30, 'Yes, you must.', C.green, FILL.green, 12), bx(165, 48, 145, 30, "No, you don't have to.", C.red, FILL.red, 10), wide(94, "No, you mustn't. ＝ 行ってはいけない（別の意味）", C.gray, FILL.gray, 10, 26), ng(290, 118), ...cap('No の答えは don\'t have to')),
  },
  {
    note: '❓must には弱点があります。それは過去形と未来形がないことです。過去の「〜しなければならなかった」は had to を使います。I had to walk home yesterday.（昨日は歩いて帰らなければならなかった）。I must walk home yesterday. とは書けません。',
    add: fresh(wide(10, 'I must walk home yesterday.', C.red, FILL.red, 12, 26), ng(160, 48), wide(60, 'I had to walk home yesterday.', C.green, FILL.green, 12, 26), ok(160, 104), ...cap('過去は had to')),
  },
  {
    note: '未来の「〜しなければならないだろう」は will have to です。You will have to get up early tomorrow. 助動詞は2つ並べられないので、will must はまちがいです。',
    add: fresh(wide(10, 'You will must get up early tomorrow.', C.red, FILL.red, 11, 26), ng(160, 48), wide(60, 'You will have to get up early tomorrow.', C.green, FILL.green, 11, 26), ok(160, 104), lb(160, 130, '助動詞は 2つ並べられない', 11, C.gray, 'middle'), ...cap('未来は will have to')),
  },
  {
    note: '❓must のうしろに to を入れて You must to go. と書くまちがいが多いのはなぜ？ → have to の to につられるからです。「to がつくのは have to のほうだけ」と唱えて覚えます。また、must は命令に近い強さがあり、目上の人にはきつく響くので、会話では have to や should を使うことが多いです。',
    add: fresh(wide(10, 'You must to go.', C.red, FILL.red, 13, 26), ng(160, 48), wide(60, 'You must go.', C.green, FILL.green, 13, 26), wide(96, 'You have to go.　（to は have にくっつく）', C.blue, FILL.blue, 11, 26), ...cap('to がつくのは have to')),
  },
  {
    note: 'まとめです。must ＋ 原形で「〜しなければならない」。s も to もつけない。否定の must not は禁止。過去は had to、未来は will have to で補います。',
    add: fresh(wide(10, 'must ＋ 原形　（s も to もつけない）', C.blue, FILL.blue, 12, 28), wide(44, 'must not ＝ 禁止　／　Must I 〜? ＝ 疑問', C.red, FILL.red, 11, 28), wide(78, '過去：had to　　未来：will have to', C.green, FILL.green, 12, 28), ...cap('形は1つ、意味は強い', C.main)),
  },
], 'must：しなければならない');

// ───────── eigo_s165 have to②：had to と will have to ─────────
const eigo_s165 = S([
  {
    note: 'must には過去形も未来形もありません。では「昨日は早く起きなければならなかった」はどう言うのでしょう。ここで have to が活やくします。時制を自由に動かせるのが have to の強みです。',
    add: [...tbl(20, 10, [100, 90, 90], [['', 'must', 'have to'], ['現在', 'must', 'have to'], ['過去', '（なし）', 'had to'], ['未来', '（なし）', 'will have to']], { h: 30, size: 12, colors: [C.gray, C.red, C.green] }), ...cap('have to は時制を動かせる')],
  },
  {
    note: '過去は have to の過去形 had to を使います。I had to stay home last Sunday.（この前の日曜は家にいなければならなかった）、She had to take care of her brother.（彼女は弟の世話をしなければならなかった）。had to は主語が何でも had to のままです。',
    add: fresh(wide(10, 'I had to stay home last Sunday.', C.green, FILL.green, 12, 28), wide(46, 'She had to take care of her brother.', C.green, FILL.green, 12, 28), lb(160, 98, '主語が何でも had to のまま', 12, C.ink, 'middle', true), lb(160, 122, '手がかり：yesterday / last week / then', 11, C.gray, 'middle'), ...cap('過去 ＝ had to ＋ 原形')),
  },
  {
    note: '過去の否定は didn\'t have to で、「〜する必要がなかった」という意味です。I didn\'t have to go to school yesterday.（昨日は学校へ行かなくてよかった）。「行かなければならなかった」の否定ではなく、「行く必要がなかった」です。',
    add: fresh(wide(14, "I didn't have to go to school yesterday.", C.red, FILL.red, 11, 28), lb(160, 60, '昨日は学校へ行かなくてよかった', 12, C.ink, 'middle', true), lb(160, 90, '＝ 行く必要がなかった', 12, C.red, 'middle'), lb(160, 116, "didn't のあとは have（原形）", 11, C.gray, 'middle'), ...cap("didn't have to ＝ する必要がなかった")),
  },
  {
    note: '❓過去の疑問文はどうなるのでしょう。Did you had to walk home? と書くとまちがいです。Did を使ったら、うしろは had to ではなく have to にもどります。Did you have to walk home?（歩いて帰らなければならなかったの）。答えは Yes, I did. / No, I didn\'t.',
    add: fresh(wide(10, 'Did you had to walk home?', C.red, FILL.red, 12, 26), ng(160, 48), wide(60, 'Did you have to walk home?', C.green, FILL.green, 12, 26), ok(160, 104), lb(160, 128, '過去のしるしは Did だけで十分', 11, C.gray, 'middle'), ...cap('Did のあとは have to')),
  },
  {
    note: '未来は will have to です。You will have to wait for an hour.（一時間待たなければならないでしょう）。❓なぜ will must ではだめなの？ → 助動詞を二つ並べられないからです。will を残して、must を have to に置きかえます。',
    add: fresh(wide(10, 'We will must get up at six.', C.red, FILL.red, 12, 26), ng(160, 48), wide(60, 'We will have to get up at six.', C.green, FILL.green, 12, 26), ok(160, 104), lb(160, 128, 'will ＋ must は 助動詞が2つ', 11, C.gray, 'middle'), ...cap('未来は will have to')),
  },
  {
    note: '❓will のあとの have は has にならないの？ → なりません。will のうしろは原形なので have のままです。He will have to go. が正しく、He will has to go. はまちがいです。',
    add: fresh(wide(14, 'He will has to go.', C.red, FILL.red, 13, 28), ng(160, 56), wide(70, 'He will have to go.', C.green, FILL.green, 13, 28), ok(160, 114), ...cap('will のあとは 原形 have')),
  },
  {
    note: '未来の否定は won\'t have to で、「〜する必要はないでしょう」です。You won\'t have to pay for it.（それにお金をはらう必要はないでしょう）。疑問文は Will I have to change trains?（電車を乗りかえなければなりませんか）— Yes, you will. / No, you won\'t.',
    add: fresh(wide(10, "You won't have to pay for it.", C.red, FILL.red, 12, 28), lb(160, 48, '払う必要はないでしょう', 11, C.gray), wide(62, 'Will I have to change trains?', C.blue, FILL.blue, 12, 28), bx(20, 100, 130, 26, 'Yes, you will.', C.green, FILL.green, 11), bx(170, 100, 130, 26, "No, you won't.", C.red, FILL.red, 11), ...cap('未来の否定と疑問')),
  },
  {
    note: 'まとめ表です。現在は must / have to（has to）。過去は had to（must には過去形なし）。未来は will have to（must には未来形なし）。否定は must not（禁止）と don\'t have to（必要ない）で、意味がちがいます。',
    add: fresh(...tbl(8, 8, [90, 214], [['時', '形'], ['現在', 'must / have to（has to）'], ['過去', 'had to ／ didn\'t have to'], ['未来', 'will have to ／ won\'t have to'], ['否定', 'must not（禁止）／ don\'t have to（不要）']], { h: 26, size: 11, colors: [C.gray, C.blue] }), ...cap('時を表す語が手がかり')),
  },
], 'had to と will have to');

// ───────── eigo_s168 should①：すべきだ・したほうがよい ─────────
const eigo_s168 = S([
  {
    note: 'かぜをひいた友だちに「病院に行ったほうがいいよ」と言いたいとき、must を使うと「行かなければだめだ」と命令のようにひびきます。ここで使うのが should です。強さのちがいを見ていきましょう。',
    add: [wide(14, 'You must see a doctor.', C.red, FILL.red, 13, 28), lb(160, 54, '行かなければだめだ（強い）', 11, C.red), wide(72, 'You should see a doctor.', C.green, FILL.green, 13, 28), lb(160, 112, '行ったほうがいいよ（やわらかい助言）', 11, C.green), ...cap('must より弱い助言')],
  },
  {
    note: 'should は「〜したほうがいいよ」とすすめたり、「〜すべきだ」と軽く義務を示したりする助動詞です。must ほど強くないので、友達にも先生にも使いやすいです。You should take an umbrella. It may rain.（かさを持っていったほうがいい。雨が降るかもしれない）。',
    add: fresh(wide(10, 'You should see a doctor.', C.green, FILL.green, 12, 26), wide(42, 'You should take an umbrella.', C.green, FILL.green, 12, 26), wide(74, 'We should help each other.', C.green, FILL.green, 12, 26), lb(160, 122, 'すすめる・軽い義務', 12, C.ink, 'middle', true), ...cap('should ＝ したほうがいい')),
  },
  {
    note: '❓should のうしろの形は？ → 助動詞なので、うしろは動詞の原形です。三単現の s も、to もつきません。He should goes. も He should to go. もまちがいで、He should go. が正しいです。can・may・must・will と同じ決まりです。',
    add: fresh(wide(10, 'He should goes.', C.red, FILL.red, 12, 24), ng(290, 22), wide(40, 'He should to go.', C.red, FILL.red, 12, 24), ng(290, 52), wide(70, 'He should go.', C.green, FILL.green, 13, 26), ok(290, 83), lb(160, 118, 'can / may / must / will / should は 同じ決まり', 11, C.gray, 'middle'), ...cap('should ＋ 原形')),
  },
  {
    note: '否定文は should not（shouldn\'t）で、「〜しないほうがいい」というやわらかい打ち消しです。You shouldn\'t eat too much.（食べすぎないほうがいい）。must not（絶対にするな）ほど強くありません。',
    add: fresh(wide(10, "You shouldn't eat too much.", C.blue, FILL.blue, 12, 26), lb(160, 48, '食べすぎないほうがいい', 11, C.gray), wide(62, 'You must not eat too much.', C.red, FILL.red, 12, 26), lb(160, 100, '食べすぎてはいけない（禁止）', 11, C.gray), lb(160, 126, 'should not は やわらかい', 12, C.blue, 'middle', true), ...cap("shouldn't ＝ しないほうがいい")),
  },
  {
    note: '疑問文は Should I 〜?（〜したほうがいいですか）です。Should I bring my lunch?（お弁当を持っていったほうがいいですか）答えは Yes, you should. / No, you don\'t have to.（その必要はありません）/ No, you shouldn\'t.（やめたほうがいい）。',
    add: fresh(wide(10, 'Should I bring my lunch?', C.blue, FILL.blue, 13, 26), bx(8, 48, 98, 44, 'Yes, you\nshould.', C.green, FILL.green, 11), bx(111, 48, 98, 44, "No, you don't\nhave to.", C.gray, FILL.gray, 10), bx(214, 48, 98, 44, "No, you\nshouldn't.", C.red, FILL.red, 11), lb(160, 112, '必要ない と やめたほうがいい は 別の意味', 11, C.ink, 'middle'), ...cap('質問の内容に合う答えを選ぶ')),
  },
  {
    note: '会話では、疑問詞といっしょに「何をしたらいいですか」と相談する場面が多いです。語順は「疑問詞 ＋ should ＋ 主語 ＋ 動詞の原形」です。What should I do?（私はどうしたらよいですか）、Where should we meet?（どこで待ち合わせましょうか）。',
    add: fresh(...row([['What', C.red, FILL.red], ['should', C.purple, FILL.purple], ['I', C.gray, FILL.gray], ['do?', C.green, FILL.green]], 14, { h: 32, size: 14 }), wide(58, 'Where should we meet?', C.blue, FILL.blue, 12, 26), wide(90, 'Which bus should I take?', C.blue, FILL.blue, 12, 26), ...cap('疑問詞 ＋ should ＋ 主語 ＋ 原形')),
  },
  {
    note: '❓What I should do? はなぜまちがいなのでしょう。→ 日本語は「私は何をすべきですか」と主語が先に来ますが、英語では疑問詞のすぐうしろに助動詞、その次に主語を置くからです。順番を固定して覚えます。',
    add: fresh(wide(12, 'What I should do?', C.red, FILL.red, 13, 28), ng(160, 54), wide(70, 'What should I do?', C.green, FILL.green, 13, 28), lb(160, 118, '疑問詞 → 助動詞 → 主語', 12, C.ink, 'middle', true), ...cap('日本語の順番につられない')),
  },
  {
    note: '助言を表す言い方は、ほかにもあります。You should go to bed early. ＝ You had better go to bed early.（もっと強い）＝ Why don\'t you go to bed early?（早く寝たらどう？）＝ How about going to bed early?（早く寝るのはどう？）。',
    add: fresh(wide(8, 'You should go to bed early.', C.green, FILL.green, 12, 24), wide(38, 'You had better go to bed early.（もっと強い）', C.red, FILL.red, 10, 24), wide(68, "Why don't you go to bed early?（〜したらどう）", C.blue, FILL.blue, 10, 24), wide(98, 'How about going to bed early?', C.blue, FILL.blue, 11, 24), ...cap('助言の言い方いろいろ')),
  },
  {
    note: 'まとめです。should ＋ 原形で「〜したほうがいい」。否定は shouldn\'t。疑問は Should I 〜? と What should I do?。must より弱い、やわらかい助言です。s も to もつけません。',
    add: fresh(wide(10, 'should ＋ 原形　（s も to もつけない）', C.green, FILL.green, 12, 28), wide(44, "否定：shouldn't　疑問：Should I 〜?", C.blue, FILL.blue, 12, 28), wide(78, 'What should I do?　（疑問詞 → should → 主語）', C.purple, FILL.purple, 11, 28), ...cap('やわらかい助言', C.main)),
  },
], 'should：すべきだ・したほうがよい');

// ───────── eigo_s170 should②：助言・提案の表現 ─────────
const eigo_s170 = S([
  {
    note: '「勉強したら？」とすすめるとき、英語では Why don\'t you study? と言います。直訳は「なぜ勉強しないの？」。責めているように見えますが、実はやさしいすすめの言い方です。日本語から想像しにくい表現をまとめて覚えます。',
    add: [wide(16, "Why don't you study?", C.purple, FILL.purple, 14, 30), lb(160, 66, '直訳：なぜ勉強しないの？', 12, C.red, 'middle'), lb(160, 92, '本当は：勉強したらどう？', 13, C.green, 'middle', true), ...cap('Why don\'t you 〜? ＝ 提案')],
  },
  {
    note: 'まず、You should 〜.（〜したほうがいい）。You should try this cake.（このケーキを食べてみるといいよ）。次に Why don\'t you 〜?（〜したらどうですか）。Why don\'t you ask your teacher?（先生に聞いてみたらどう）。形は否定疑問文ですが、理由をたずねる文ではなく、提案の決まり文句です。',
    add: fresh(wide(10, 'You should try this cake.', C.green, FILL.green, 12, 26), lb(160, 46, 'このケーキを食べてみるといいよ', 11, C.gray), wide(62, "Why don't you ask your teacher?", C.purple, FILL.purple, 12, 26), lb(160, 98, '先生に聞いてみたらどう', 11, C.gray), lb(160, 126, '理由をたずねる文ではない', 12, C.red, 'middle', true), ...cap('すすめる言い方')),
  },
  {
    note: '❓How about 〜? は？ → 「〜はどうですか」とすすめる言い方です。How about this one?（こちらはいかがですか）のように、うしろは名詞か、動詞の -ing 形にします。❓なぜ -ing なのか？ → about は前置詞で、前置詞のうしろに動詞を続けるときは -ing 形（動名詞）にするからです。',
    add: fresh(wide(10, 'How about this one?', C.blue, FILL.blue, 12, 26), lb(160, 46, 'うしろは名詞', 11, C.gray), wide(60, 'How about going to the movies?', C.blue, FILL.blue, 12, 26), lb(160, 96, 'うしろは動詞の -ing 形', 11, C.gray), wide(110, 'How about to go to the movies?', C.red, FILL.red, 11, 24), ng(290, 122), ...cap('about は前置詞 → -ing')),
  },
  {
    note: 'いっしょにしよう、と誘う言い方もあります。Why don\'t we play tennis? ＝ Shall we play tennis? ＝ Let\'s play tennis. ❓you と we のちがいは？ → Why don\'t you 〜? は「あなたへの提案」、Why don\'t we 〜? は「いっしょにやろう」という誘いです。',
    add: fresh(wide(8, "Why don't we play tennis?", C.purple, FILL.purple, 12, 24), wide(38, 'Shall we play tennis?', C.purple, FILL.purple, 12, 24), wide(68, "Let's play tennis.", C.purple, FILL.purple, 12, 24), lb(160, 108, 'どれも「いっしょにテニスをしよう」', 12, C.ink, 'middle', true), lb(160, 130, 'you ＝ あなたが　　we ＝ いっしょに', 11, C.gray, 'middle'), ...cap('you と we を読み分ける')),
  },
  {
    note: '提案されたときの返事（へんじ）も決まっています。賛成するとき: That\'s a good idea.（いい考えですね）、Sounds good.（よさそうですね）、Yes, let\'s.（そうしましょう）、Sure. / Of course. / All right.（いいですよ）。',
    add: fresh(lb(160, 12, '賛成するとき', 13, C.green, 'middle', true), wide(26, "That's a good idea.", C.green, FILL.green, 12, 24), wide(54, 'Sounds good.', C.green, FILL.green, 12, 24), wide(82, "Yes, let's.（Let's 〜. / Shall we 〜? に対して）", C.green, FILL.green, 10, 24), wide(110, 'Sure. / Of course. / All right.', C.green, FILL.green, 12, 24), ...cap('賛成の返事')),
  },
  {
    note: '断るときは、I\'m sorry, I can\'t.（すみません、できません）、Sorry, but I have to help my mother.（ごめんなさい、母を手伝わないといけないので）、Maybe next time.（また今度ね）。断るときは、理由を一言そえるのが自然です。',
    add: fresh(lb(160, 12, '断るとき', 13, C.red, 'middle', true), wide(26, "I'm sorry, I can't.", C.red, FILL.red, 12, 24), wide(54, 'Sorry, but I have to help my mother.', C.red, FILL.red, 11, 24), wide(82, 'Maybe next time.', C.red, FILL.red, 12, 24), lb(160, 122, '理由を一言そえるのが自然', 12, C.ink, 'middle', true), ...cap('断る返事')),
  },
  {
    note: '会話の流れです。A: I have a bad cold.（ひどいかぜをひいてしまって）B: Why don\'t you go home and rest?（家に帰って休んだらどう）A: That\'s a good idea. Thank you.（それはいい考えだね。ありがとう）。',
    add: fresh(bx(10, 8, 300, 26, 'A: I have a bad cold.', C.gray, FILL.gray, 12), bx(10, 40, 300, 28, "B: Why don't you go home and rest?", C.purple, FILL.purple, 12), bx(10, 74, 300, 28, "A: That's a good idea. Thank you.", C.green, FILL.green, 12), ...cap('提案 → 賛成の流れ')),
  },
  {
    note: '❓Why don\'t you 〜? に Because 〜 と理由を答えてもいい？ → いけません。提案なので、Sure. や That\'s a good idea. のように、賛成か不賛成かで答えます。「Why don\'t you come with us?」は「私たちといっしょに来ませんか」です。',
    add: fresh(wide(10, "Why don't you come with us?", C.purple, FILL.purple, 12, 26), lb(160, 46, '私たちといっしょに来ませんか', 11, C.gray), wide(62, 'Because I am busy.', C.red, FILL.red, 12, 26), ng(290, 75), wide(98, "Sure. / That's a good idea.", C.green, FILL.green, 12, 26), ok(290, 111), ...cap('理由ではなく 賛成・不賛成で答える')),
  },
  {
    note: 'まとめです。You should 〜. / Why don\'t you 〜? / How about 〜ing? はすすめる言い方。Why don\'t we 〜? / Shall we 〜? / Let\'s 〜. は誘う言い方。返事は That\'s a good idea. / Sounds good. / Sorry, I can\'t.',
    add: fresh(wide(10, "すすめる：should / Why don't you 〜? / How about 〜ing?", C.green, FILL.green, 10, 28), wide(44, "誘う：Why don't we 〜? / Shall we 〜? / Let's 〜.", C.purple, FILL.purple, 10, 28), wide(78, "返事：That's a good idea. / Sorry, I can't.", C.blue, FILL.blue, 10, 28), ...cap('決まり文句を丸ごと覚える', C.main)),
  },
], '助言・提案の言い方');

// ───────── eigo_s171 will①：未来と意志 ─────────
const eigo_s171 = S([
  {
    note: '「明日は雨が降るでしょう」も「私が持ちますよ」も、英語ではどちらも will を使えます。予想（よそう）と意志（いし）という別のことを、1語でまかなっているのです。will の形を順に見ていきましょう。',
    add: [wide(14, 'It will rain tomorrow.', C.blue, FILL.blue, 13, 28), lb(160, 54, '明日は雨が降るでしょう（予想）', 11, C.gray), wide(70, "I'll carry it.", C.green, FILL.green, 13, 28), lb(160, 110, '私が持ちますよ（意志）', 11, C.gray), ...cap('will ＝ 予想と意志')],
  },
  {
    note: 'will は未来のことを表す助動詞で、「〜するだろう」（予想）と「〜するつもりだ」（意志）の二つの意味があります。It will be sunny tomorrow.（明日は晴れるでしょう）は予想、I will call you tonight.（今夜、電話するね）は意志です。',
    add: fresh(...tbl(8, 8, [90, 110, 104], [['意味', '例', '訳'], ['予想', 'It will be sunny.', '晴れるでしょう'], ['意志', 'I will call you.', '電話するね'], ['予想', 'He will be fifteen.', '15歳になる']], { h: 30, size: 10, colors: [C.blue, C.green, C.gray] }), lb(160, 138, 'tomorrow / next week / soon があれば 未来', 11, C.ink, 'middle'), ...cap('will ＋ 動詞の原形')),
  },
  {
    note: '❓主語が he のとき、will や動詞に s はつくでしょうか。→ つきません。助動詞のあとは原形で、will 自身も wills にはなりません。He will come. が正しく、He wills come. も He will comes. もまちがいです。',
    add: fresh(wide(10, 'He will come.', C.green, FILL.green, 13, 26), ok(290, 23), wide(44, 'He wills come.', C.red, FILL.red, 13, 26), ng(290, 57), wide(78, 'He will comes.', C.red, FILL.red, 13, 26), ng(290, 91), ...cap('s は つかない')),
  },
  {
    note: '否定文は will not の短縮形 won\'t です。I won\'t tell anyone.（だれにも言わないよ）、It won\'t rain this afternoon. willn\'t とは書きません。疑問文は Will you be free tomorrow?（明日はひまですか）— Yes, I will. / No, I won\'t.',
    add: fresh(wide(10, "I won't tell anyone.", C.red, FILL.red, 12, 26), lb(160, 46, "will not → won't（willn't ではない）", 11, C.gray), wide(60, 'Will you be free tomorrow?', C.blue, FILL.blue, 12, 26), bx(20, 98, 130, 26, 'Yes, I will.', C.green, FILL.green, 12), bx(170, 98, 130, 26, "No, I won't.", C.red, FILL.red, 12), ...cap('won\'t と Will 〜?')),
  },
  {
    note: '会話では短縮形も大切です。I\'ll / You\'ll / He\'ll / We\'ll / They\'ll は会話文で必ず出ます。読めるだけでなく、書けるようにしておきます。',
    add: fresh(...tbl(40, 10, [110, 130], [['短縮しない形', '短縮形'], ['I will', "I'll"], ['You will', "You'll"], ['He will', "He'll"], ['We will / They will', "We'll / They'll"]], { h: 26, size: 12, colors: [C.gray, C.green] }), ...cap('書ける短縮形')),
  },
  {
    note: '❓未来を表す言い方はほかにありますか。→ be going to があります。前から決めていた予定に使います。I am going to visit my grandmother next Sunday.（次の日曜に祖母を訪ねる予定です）。be動詞は主語に合わせて am / is / are と変わります。',
    add: fresh(wide(10, 'I am going to visit my grandmother next Sunday.', C.green, FILL.green, 10, 28), lb(160, 52, '前から決めていた予定', 12, C.green, 'middle', true), wide(70, 'She is going to buy a new bag.', C.green, FILL.green, 12, 26), lb(160, 114, 'うしろは動詞の原形（× buys）', 11, C.red, 'middle'), ...cap('be going to ＝ 前から決めた予定')),
  },
  {
    note: '❓will との使い分けは？ → will は「その場で決めた意志」や「ただの予想」に使います。A: The phone is ringing. B: I\'ll get it.（ぼくが出るよ）は今その場で決めたことです。I think it will rain tomorrow.（明日は雨だと思う）は予想です。',
    add: fresh(bx(8, 8, 146, 52, 'will\nその場で決めた意志\nただの予想', C.blue, FILL.blue, 11), bx(166, 8, 146, 52, 'be going to\n前から決めていた予定', C.green, FILL.green, 11), wide(72, "A: The phone is ringing.　B: I'll get it.", C.blue, FILL.blue, 11, 26), wide(104, 'I think it will rain tomorrow.', C.blue, FILL.blue, 12, 26), ...cap('いつ決めたかで選ぶ')),
  },
  {
    note: 'be going to の否定・疑問は be動詞を動かします。I\'m not going to go out today. / Are you going to play soccer? — Yes, I am. / No, I\'m not. will の疑問文とは作り方がちがいます。また、if や when のあとでは、未来のことでも現在形を使います。If it is fine tomorrow, we will go on a picnic.',
    add: fresh(wide(8, "I'm not going to go out today.", C.red, FILL.red, 11, 24), wide(38, 'Are you going to play soccer?', C.blue, FILL.blue, 11, 24), lb(160, 76, '― Yes, I am. / No, I\'m not.', 11, C.gray), wide(92, 'If it is fine tomorrow, we will go on a picnic.', C.purple, FILL.purple, 10, 26), lb(160, 128, 'if のあとは 未来でも現在形', 11, C.purple, 'middle', true), ...cap('be動詞を動かす')),
  },
  {
    note: 'まとめです。will ＋ 動詞の原形は、予想と意志。s はつかず、否定は won\'t、疑問は Will 〜?。be going to は前から決めていた予定。if や when のあとは現在形です。',
    add: fresh(wide(10, 'will ＋ 原形　（s なし）　否定 won\'t', C.blue, FILL.blue, 12, 28), wide(44, 'be going to ＋ 原形　（前から決めた予定）', C.green, FILL.green, 12, 28), wide(78, 'if / when のあとは 現在形', C.purple, FILL.purple, 12, 28), ...cap('予想と意志、予定', C.main)),
  },
], 'will：未来と意志');

export const XF_CED_FIGURES: Record<string, DiagramFigure> = {
  'xf_eigo_s118': eigo_s118,
  'xf_eigo_s119': eigo_s119,
  'xf_eigo_s121': eigo_s121,
  'xf_eigo_s122': eigo_s122,
  'xf_eigo_s123': eigo_s123,
  'xf_eigo_s125': eigo_s125,
  'xf_eigo_s126': eigo_s126,
  'xf_eigo_s127': eigo_s127,
  'xf_eigo_s131': eigo_s131,
  'xf_eigo_s132': eigo_s132,
  'xf_eigo_s134': eigo_s134,
  'xf_eigo_s136': eigo_s136,
  'xf_eigo_s138': eigo_s138,
  'xf_eigo_s140': eigo_s140,
  'xf_eigo_s143': eigo_s143,
  'xf_eigo_s145': eigo_s145,
  'xf_eigo_s147': eigo_s147,
  'xf_eigo_s148': eigo_s148,
  'xf_eigo_s149': eigo_s149,
  'xf_eigo_s151': eigo_s151,
  'xf_eigo_s152': eigo_s152,
  'xf_eigo_s154': eigo_s154,
  'xf_eigo_s159': eigo_s159,
  'xf_eigo_s160': eigo_s160,
  'xf_eigo_s162': eigo_s162,
  'xf_eigo_s163': eigo_s163,
  'xf_eigo_s165': eigo_s165,
  'xf_eigo_s168': eigo_s168,
  'xf_eigo_s170': eigo_s170,
  'xf_eigo_s171': eigo_s171,
};

export const XF_CED_SECTIONS: Record<string, string> = {
  'eigo_s118#0': 'xf_eigo_s118',
  'eigo_s119#0': 'xf_eigo_s119',
  'eigo_s121#0': 'xf_eigo_s121',
  'eigo_s122#0': 'xf_eigo_s122',
  'eigo_s123#0': 'xf_eigo_s123',
  'eigo_s125#0': 'xf_eigo_s125',
  'eigo_s126#0': 'xf_eigo_s126',
  'eigo_s127#0': 'xf_eigo_s127',
  'eigo_s131#0': 'xf_eigo_s131',
  'eigo_s132#0': 'xf_eigo_s132',
  'eigo_s134#0': 'xf_eigo_s134',
  'eigo_s136#0': 'xf_eigo_s136',
  'eigo_s138#0': 'xf_eigo_s138',
  'eigo_s140#0': 'xf_eigo_s140',
  'eigo_s143#0': 'xf_eigo_s143',
  'eigo_s145#0': 'xf_eigo_s145',
  'eigo_s147#0': 'xf_eigo_s147',
  'eigo_s148#0': 'xf_eigo_s148',
  'eigo_s149#0': 'xf_eigo_s149',
  'eigo_s151#2': 'xf_eigo_s151',
  'eigo_s152#0': 'xf_eigo_s152',
  'eigo_s154#0': 'xf_eigo_s154',
  'eigo_s159#0': 'xf_eigo_s159',
  'eigo_s160#0': 'xf_eigo_s160',
  'eigo_s162#0': 'xf_eigo_s162',
  'eigo_s163#0': 'xf_eigo_s163',
  'eigo_s165#0': 'xf_eigo_s165',
  'eigo_s168#0': 'xf_eigo_s168',
  'eigo_s170#0': 'xf_eigo_s170',
  'eigo_s171#0': 'xf_eigo_s171',
};
