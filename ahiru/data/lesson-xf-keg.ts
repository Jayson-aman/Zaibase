// 高校受験 英語（中3）の単元に、動く図解を1つずつ足す。
// 「❓なぜ？→答え」の連鎖で、語順・形のきまりを根っこからたどる。
import type { DiagramElement, DiagramFigure } from './figures';
import { show, bx, lb, ar, ln, ci, fresh, band, C, FILL } from './diagram-kit';

type K = 'b' | 'g' | 'r' | 'm' | 'p' | 'y' | 'n';
const KC: Record<K, [string, string]> = {
  b: [C.blue, FILL.blue],
  g: [C.green, FILL.green],
  r: [C.red, FILL.red],
  m: [C.main, FILL.warm],
  p: [C.purple, FILL.purple],
  y: ['#CA8A04', FILL.yellow],
  n: [C.gray, FILL.gray],
};
const TXT: Record<K, string> = { b: C.blue, g: C.green, r: C.red, m: C.main, p: C.purple, y: '#A16207', n: C.gray };

const units = (s: string) => Math.max(...s.split('\n').map((l) => [...l].reduce((u, ch) => u + (ch.charCodeAt(0) < 256 ? 0.55 : 1), 0)));
const tw = (s: string, z: number) => units(s) * z + 14;

/** 一行に並べる箱。幅は文字数から決め、はみ出すときは文字を小さくする。 */
const row = (y: number, items: [string, K?][], size = 12, h = 26, gap = 5): DiagramElement[] => {
  const total = (z: number) => items.reduce((a, [t]) => a + tw(t, z), 0) + gap * (items.length - 1);
  let z = size;
  while (total(z) > 312 && z > 9) z -= 0.5;
  let x = (320 - total(z)) / 2;
  return items.map(([t, k]) => {
    const w = tw(t, z);
    const [c, f] = KC[k ?? 'm'];
    const e = bx(x, y, w, h, t, c, f, z);
    x += w + gap;
    return e;
  });
};
/** 箱（色キーつき） */
const nb = (x: number, y: number, w: number, h: number, t: string, k: K = 'm', size = 12) => bx(x, y, w, h, t, KC[k][0], KC[k][1], size);
/** 上のタイトル */
const tt = (t: string, k: K = 'm', y = 14) => lb(160, y, t, 12, TXT[k], 'middle', true);
/** 下のひとこと */
const cp = (t: string, k: K = 'm', y = 205, size = 13) => lb(160, y, t, size, TXT[k], 'middle', true);
/** 小さな説明文 */
const sm = (x: number, y: number, t: string, k: K = 'n', size = 11, anchor: 'start' | 'middle' | 'end' = 'middle') => lb(x, y, t, size, TXT[k], anchor, false);
/** ○と× */
const ok = (x: number, y: number) => lb(x, y, '○', 16, C.green, 'middle', true);
const ng = (x: number, y: number) => lb(x, y, '×', 16, C.red, 'middle', true);

type Sl = { note: string; add?: DiagramElement[] };
/** まっさらな画面に描く */
const S = (note: string, ...els: DiagramElement[]): Sl => ({ note, add: fresh(...els) });
/** 前の図に描き足す */
const A = (note: string, ...els: DiagramElement[]): Sl => ({ note, add: els });
/** 下の帯だけ書きかえる */
const Bd = (note: string, ...els: DiagramElement[]): Sl => ({ note, add: band(150, ...els) });

export const XF_KEG_FIGURES: Record<string, DiagramFigure> = {};
export const XF_KEG_SECTIONS: Record<string, string> = {};
const reg = (id: string, sec: number, slides: Sl[], caption: string) => {
  XF_KEG_FIGURES['xf_' + id] = show(slides, caption);
  XF_KEG_SECTIONS[id + '#' + sec] = 'xf_' + id;
};

// ───────── s286 動名詞③：前置詞のうしろは必ず動名詞 ─────────
reg('koko_eigo_s286', 0, [
  S('「彼はピアノがじょうずだ」を英語にします。He is good at ( ) the piano. の空所に、play をどんな形で入れればよいでしょう。',
    tt('He is good at ( ) the piano.'),
    ...row(50, [['He is good at', 'b'], ['(　　)', 'n'], ['the piano.', 'b']]),
    ...row(100, [['to play', 'r'], ['play', 'r'], ['playing', 'g']], 14, 34),
    cp('どれが正しい？ 答えは最後に確かめます', 'm', 170, 12)),
  S('❓まず、at のうしろには何が来るのでしょう。→ at・in・of・for・with・about のような前置詞のうしろには、名詞が来ます。at the party、at school のように、必ず名詞を置きます。',
    tt('前置詞のうしろ ＝ 名詞'),
    ...row(46, [['at', 'b'], ['the party', 'g']], 14, 32),
    ...row(92, [['in', 'b'], ['Japan', 'g']], 14, 32),
    ...row(138, [['of', 'b'], ['my friend', 'g']], 14, 32),
    cp('前置詞は、名詞を従える言葉', 'b', 200)),
  S('❓では、動作を前置詞のうしろに置きたいときはどうするのでしょう。→ 動詞を名詞のかたまりに変えます。それが動名詞で、動詞に -ing を付けます。play（演奏する）が playing（演奏すること）になります。',
    tt('動作を名詞にする ＝ 動名詞'),
    ...row(50, [['play', 'n'], ['演奏する（動作）', 'n']], 13, 30),
    ar(160, 86, 160, 112, C.main),
    lb(200, 99, '-ing を付ける', 11, C.main, 'start', true),
    ...row(118, [['playing', 'g'], ['演奏すること（名詞）', 'g']], 13, 30),
    cp('at playing the piano', 'g', 190)),
  S('❓不定詞の to play も名詞のはたらきをするのに、なぜ使えないのでしょう。→ 前置詞のうしろには、動名詞だけが置けるという決まりだからです。不定詞は入れません。',
    tt('前置詞のうしろに置けるのは？'),
    ...row(50, [['good at', 'b'], ['to play', 'r']], 14, 32), ng(264, 66),
    ...row(100, [['good at', 'b'], ['playing', 'g']], 14, 32), ok(264, 116),
    cp('He is good at playing the piano.', 'g', 170, 13),
    sm(160, 196, '（彼はピアノがじょうずだ）', 'n', 12)),
  S('熟語の最後が前置詞なら、続く動詞は必ず -ing です。be good at ~ing（〜がじょうずだ）、be interested in ~ing（〜に興味がある）、be afraid of ~ing（〜をこわがる）、be proud of ~ing（〜を誇りに思う）、be tired of ~ing（〜にあきる）。',
    tt('最後が前置詞の熟語 → ing'),
    nb(14, 30, 190, 26, 'be good at', 'b'), nb(212, 30, 94, 26, '~ing', 'g'),
    nb(14, 62, 190, 26, 'be interested in', 'b'), nb(212, 62, 94, 26, '~ing', 'g'),
    nb(14, 94, 190, 26, 'be afraid of', 'b'), nb(212, 94, 94, 26, '~ing', 'g'),
    nb(14, 126, 190, 26, 'be proud of', 'b'), nb(212, 126, 94, 26, '~ing', 'g'),
    nb(14, 158, 190, 26, 'be tired of', 'b'), nb(212, 158, 94, 26, '~ing', 'g'),
    cp('熟語の最後を見る習慣をつけよう', 'm', 212, 12)),
  S('❓ほかの前置詞でも同じでしょうか。→ はい。without（〜しないで）、before（〜する前に）、after（〜したあとで）、by（〜することによって）、Thank you for（〜してくれてありがとう）のうしろも動名詞です。',
    tt('ほかの前置詞も同じ'),
    ...row(34, [['without', 'b'], ['saying goodbye', 'g']], 13, 28),
    ...row(70, [['before', 'b'], ['eating lunch', 'g']], 13, 28),
    ...row(106, [['by', 'b'], ['reading many books', 'g']], 13, 28),
    ...row(142, [['Thank you for', 'b'], ['helping me', 'g']], 13, 28),
    cp('前置詞 ＋ ~ing', 'm', 195)),
  S('❓I\'m looking forward to seeing you. の to はどうでしょう。→ to で終わる熟語の to は、不定詞ではなく前置詞です。見分け方は、その to のうしろに名詞を置けるか試すことです。I\'m looking forward to your letter. が成り立つので、前置詞だとわかります。',
    tt('to は前置詞？ 不定詞？'),
    ...row(34, [['looking forward to', 'b'], ['your letter', 'g']], 12, 28), ok(300, 48),
    sm(160, 70, '名詞が置ける → 前置詞 → あとは動名詞', 'g', 12),
    ...row(98, [['looking forward to', 'b'], ['seeing', 'g'], ['you', 'n']], 12, 28),
    ...row(140, [['want to', 'm'], ['a letter', 'r']], 12, 28), ng(300, 154),
    sm(160, 176, '名詞が置けない → 不定詞の to → あとは原形', 'r', 12),
    cp('名詞を置けるか試そう', 'm', 208, 12)),
  S('まとめです。前置詞のうしろに動作を置くときは、必ず動名詞（-ing）にします。さいしょの問題の答えは playing。熟語が at・in・of・for・with・about で終わっていれば -ing、to のうしろに名詞が置けるならその to も前置詞です。',
    tt('まとめ'),
    ...row(36, [['前置詞', 'b'], ['＋', 'n'], ['名詞', 'g']], 14, 30),
    ...row(78, [['前置詞', 'b'], ['＋', 'n'], ['動詞の ing', 'g']], 14, 30),
    ...row(120, [['good at', 'b'], ['playing', 'g']], 14, 30),
    cp('不定詞（to play）は入れない', 'r', 175, 13),
    sm(160, 202, 'to のうしろに名詞が置けるなら、その to も前置詞', 'n', 12)),
], '前置詞のうしろは名詞か動名詞');

// ───────── s287 動名詞④：go ~ing・be busy ~ing などの慣用表現 ─────────
reg('koko_eigo_s287', 2, [
  S('「釣りに行く」は go to fish でしょうか、go fishing でしょうか。動名詞には、理屈より先に形で覚えたほうが速い決まり文句があります。その理由もたどってみましょう。',
    tt('「釣りに行く」は？'),
    ...row(56, [['go to fish', 'r'], ['go fishing', 'g']], 15, 40, 14),
    sm(160, 124, '決まった形で覚えると速い', 'n', 13),
    cp('なぜ go fishing なのか、たどってみよう', 'm', 190, 12)),
  S('❓go fishing の fishing は何を表しているのでしょう。→ 「釣り」という活動そのものを表す動名詞です。活動へ出かけるときは、go のあとに活動を表す -ing を続ける決まった形を使います。',
    tt('go ＋ 活動（~ing）'),
    nb(30, 44, 70, 38, 'go', 'b', 16), lb(118, 63, '＋', 18, C.gray, 'middle', true), nb(136, 44, 154, 38, 'fishing', 'g', 16),
    sm(213, 100, '釣りという活動そのもの', 'g', 12),
    ar(160, 116, 160, 140, C.main),
    cp('「釣りに出かける」', 'm', 165, 14),
    sm(160, 195, 'We often go fishing in the river.', 'n', 12)),
  S('❓どんな動詞が go のあとに来られるのでしょう。→ swim・ski・shop・fish・camp・hike など、それ自体が活動を表す動詞です。study は「活動として出かける」種類の動作ではないので、go studying とは言いません。',
    tt('go ~ing に使える動詞'),
    ci(55, 60, 38, 'swimming', C.green, FILL.green, 11), ci(160, 60, 38, 'skiing', C.green, FILL.green, 12), ci(265, 60, 38, 'shopping', C.green, FILL.green, 11),
    ci(55, 128, 38, 'camping', C.green, FILL.green, 11), ci(160, 128, 38, 'hiking', C.green, FILL.green, 12),
    nb(222, 108, 86, 40, 'go studying', 'r', 12), ng(300, 104),
    cp('活動に出かける動詞だけ', 'g', 195, 13)),
  S('❓場所はどう言えばよいのでしょう。→ at や in を使います。go shopping at the store、go swimming in the sea。to は使いません。go shopping to the store は誤りです。',
    tt('場所を言うときの前置詞'),
    ...row(46, [['go shopping', 'g'], ['at', 'b'], ['the store', 'n']], 13, 30), ok(300, 60),
    ...row(94, [['go swimming', 'g'], ['in', 'b'], ['the sea', 'n']], 13, 30), ok(300, 108),
    ...row(142, [['go shopping', 'g'], ['to', 'r'], ['the store', 'n']], 13, 30), ng(300, 156),
    cp('場所は at ／ in', 'b', 200)),
  S('動名詞を使う決まり文句はほかにもあります。be busy ~ing（〜するのに忙しい）、feel like ~ing（〜したい気がする）、spend ＋時間・お金＋ ~ing（〜して時間・お金を使う）。形のまま覚えて使います。',
    tt('ほかの決まり文句'),
    nb(12, 34, 140, 30, 'be busy ~ing', 'b'), sm(160, 49, '〜するのに忙しい', 'n', 11, 'start'),
    sm(12, 74, 'I was busy doing my homework.', 'n', 11, 'start'),
    nb(12, 94, 140, 30, 'feel like ~ing', 'b'), sm(160, 109, '〜したい気がする', 'n', 11, 'start'),
    sm(12, 134, 'I feel like eating something sweet.', 'n', 11, 'start'),
    nb(12, 154, 140, 30, 'spend ＋時間 ＋ ~ing', 'b', 11), sm(160, 169, '〜して時間を使う', 'n', 11, 'start'),
    sm(12, 194, 'I spent two hours playing video games.', 'n', 11, 'start')),
  S('❓be used to ~ing と used to ＋原形は、形が似ているのに、なぜ別の意味なのでしょう。→ be used to の to は前置詞なので、うしろは名詞（動名詞）。used to は助動詞のようにはたらくひとかたまりなので、うしろは原形です。',
    tt('to の正体がちがう'),
    ...row(34, [['I am', 'n'], ['used to', 'b'], ['getting up', 'g'], ['early.', 'n']], 11, 28),
    sm(160, 72, 'to は前置詞 → うしろは動名詞 → 「慣れている」', 'b', 12),
    ...row(110, [['I', 'n'], ['used to', 'p'], ['get up', 'g'], ['early.', 'n']], 11, 28),
    sm(160, 148, 'used to でひとかたまり → うしろは原形 → 「以前は〜した」', 'p', 12),
    cp('同じ「used to」でも別物', 'm', 195, 13)),
  S('❓どうやって見分けるのでしょう。→ be動詞があるかどうかです。be動詞があれば be used to ~ing（慣れている）、なければ used to ＋原形（以前は〜したものだ）。My grandfather used to walk. は「祖父は以前は歩いたものだ」です。',
    tt('見分け方は be動詞の有無'),
    nb(14, 34, 130, 40, 'be動詞が\nある', 'b', 13), ar(144, 54, 168, 54, C.blue), nb(170, 34, 136, 40, 'be used to ~ing\n慣れている', 'g', 12),
    nb(14, 104, 130, 40, 'be動詞が\nない', 'p', 13), ar(144, 124, 168, 124, C.purple), nb(170, 104, 136, 40, 'used to ＋原形\n以前は〜した', 'p', 12),
    cp('My grandfather used to walk.', 'n', 185, 12),
    sm(160, 205, '（祖父は以前は歩いたものだ）', 'n', 12)),
  S('まとめです。「〜しに行く」は go ~ing。ほかに be busy ~ing、feel like ~ing、spend ＋時間・お金＋ ~ing。そして be used to の to は前置詞（うしろは -ing）、used to は助動詞のかたまり（うしろは原形）で、be動詞の有無で見分けます。',
    tt('まとめ'),
    nb(14, 30, 292, 30, 'go ~ing（go shopping／go fishing）', 'g', 12),
    nb(14, 68, 292, 30, 'be busy ~ing ／ feel like ~ing ／ spend…~ing', 'g', 12),
    nb(14, 106, 292, 30, 'be used to ~ing（慣れている）', 'b', 12),
    nb(14, 144, 292, 30, 'used to ＋原形（以前は〜した）', 'p', 12),
    cp('見分けは be動詞の有無', 'm', 202, 13)),
], '動名詞の決まり文句と used to');

// ───────── s289 不定詞だけを目的語にとる動詞 ─────────
reg('koko_eigo_s289', 0, [
  S('「またお会いしたいです」を英語にします。I hope ( ) you again. の空所は、see・to see・seeing のどれでしょう。',
    tt('I hope ( ) you again.'),
    ...row(50, [['I hope', 'b'], ['(　　)', 'n'], ['you again.', 'b']]),
    ...row(100, [['see', 'r'], ['to see', 'g'], ['seeing', 'r']], 15, 36),
    cp('なぜその形なのか、たどってみよう', 'm', 170, 12)),
  S('❓なぜ hope のうしろは to なのでしょう。→ hope は「まだ起きていないこれからのこと」を続ける動詞だからです。未来へ向かう感覚をもつ to と結びつきます。',
    tt('hope ＝ これからのことを望む'),
    nb(14, 60, 80, 40, 'hope', 'b', 16), ar(96, 80, 140, 80, C.main), nb(142, 60, 50, 40, 'to', 'm', 16), ar(194, 80, 238, 80, C.main), nb(240, 60, 66, 40, 'see', 'g', 16),
    sm(160, 125, '未来へ向かう to', 'm', 13),
    sm(160, 150, '会うのは、これから先のこと', 'n', 12),
    cp('I hope to see you again.', 'g', 195)),
  S('同じグループの動詞は七つあります。want（〜したい）、hope（〜したいと望む）、decide（〜することに決める）、promise（〜すると約束する）、wish（〜したいと願う）、expect（〜するつもりだ）、plan（〜する計画だ）。いずれも to ＋原形が続きます。',
    tt('to だけをとる七つの動詞'),
    nb(10, 30, 72, 30, 'want', 'g', 13), nb(88, 30, 72, 30, 'hope', 'g', 13), nb(166, 30, 72, 30, 'decide', 'g', 13), nb(244, 30, 66, 30, 'wish', 'g', 13),
    nb(10, 68, 84, 30, 'promise', 'g', 13), nb(100, 68, 84, 30, 'expect', 'g', 13), nb(190, 68, 72, 30, 'plan', 'g', 13),
    lb(160, 128, '＋ to ＋ 動詞の原形', 15, C.main, 'middle', true),
    sm(160, 160, 'She decided to join the tennis club.', 'n', 12),
    sm(160, 182, 'They plan to visit Kyoto next month.', 'n', 12),
    cp('どれも「まだ起きていないこと」', 'm', 210, 12)),
  S('❓動名詞だけをとる動詞とは、何がちがうのでしょう。→ 向きがちがいます。enjoy・finish・stop・mind は、すでにしていること、している最中のことを続けます。want や hope は、まだ起きていないことを続けます。',
    tt('向きがちがう'),
    nb(10, 30, 142, 28, '動名詞グループ', 'b', 13), nb(168, 30, 142, 28, '不定詞グループ', 'g', 13),
    sm(81, 78, 'enjoy ~ing', 'b', 12), sm(81, 100, 'finish ~ing', 'b', 12), sm(81, 122, 'stop ~ing', 'b', 12), sm(81, 144, 'mind ~ing', 'b', 12),
    sm(239, 78, 'want to ~', 'g', 12), sm(239, 100, 'hope to ~', 'g', 12), sm(239, 122, 'decide to ~', 'g', 12), sm(239, 144, 'plan to ~', 'g', 12),
    ln(160, 30, 160, 156, C.gray, true),
    sm(81, 176, 'すでに・いま', 'b', 12), sm(239, 176, 'まだ・これから', 'g', 12),
    cp('この向きの違いで整理する', 'm', 207, 12)),
  S('❓日本語の訳で決めると、なぜ失敗するのでしょう。→ decide・promise・plan は「〜することを決める」のように名詞のように訳されるので、-ing を選びたくなるからです。訳ではなく、動詞のグループで決めましょう。',
    tt('訳で選ぶと失敗する'),
    nb(14, 36, 292, 30, '決める ＝「〜することを」', 'n', 13),
    ar(160, 68, 160, 92, C.red),
    ...row(98, [['decide', 'b'], ['deciding', 'r']], 13, 30), ng(250, 112),
    ...row(142, [['decide', 'b'], ['to go', 'g']], 13, 30), ok(250, 156),
    cp('訳ではなく、動詞のグループで決める', 'm', 200, 12)),
  S('hope には注意点があります。hope は「人＋to」の形をとりません。× I hope you to come. ではなく、○ I hope (that) you will come. と言います。want・tell・ask は「人＋to」をとりますが、hope・say・think はとりません。',
    tt('hope は「人＋to」をとらない'),
    ...row(40, [['I hope you to come.', 'r']], 13, 30), ng(280, 54),
    ...row(86, [['I hope (that) you will come.', 'g']], 13, 30), ok(296, 100),
    nb(14, 132, 142, 30, '人＋to をとる', 'b', 12), nb(164, 132, 142, 30, 'とらない', 'r', 12),
    sm(85, 180, 'want ／ tell ／ ask', 'b', 12), sm(235, 180, 'hope ／ say ／ think', 'r', 12)),
  S('疑問文や否定文になっても、形は変わりません。Do you plan to study abroad? や He didn\'t promise to help us. では、to ＋原形のままです。主語が三人称単数でも、She wants to go home early. のように、wants に s が付き、go は原形のままです。',
    tt('形は変わらない'),
    ...row(36, [['Do you', 'n'], ['plan to study', 'g'], ['abroad?', 'n']], 12, 28),
    ...row(78, [['He didn\'t', 'n'], ['promise to help', 'g'], ['us.', 'n']], 12, 28),
    ...row(120, [['She', 'n'], ['wants', 'b'], ['to go', 'g'], ['home early.', 'n']], 12, 28),
    sm(160, 160, 's は want に付き、go は原形のまま', 'b', 12),
    cp('疑問文・否定文でも to ＋原形', 'm', 200, 12)),
  S('まとめです。さいしょの問題の答えは to see。want・hope・decide・promise・wish・expect・plan は、まだ起きていないことを続けるので to ＋原形。動名詞グループ（enjoy・finish・stop・mind）と向きが反対だと覚えましょう。',
    tt('まとめ'),
    ...row(36, [['I hope', 'b'], ['to see', 'g'], ['you again.', 'n']], 14, 32),
    nb(14, 86, 142, 40, 'これから\nwant hope decide…', 'g', 12), nb(164, 86, 142, 40, 'すでに・いま\nenjoy finish…', 'b', 12),
    sm(85, 140, '→ to ＋原形', 'g', 13), sm(235, 140, '→ ~ing', 'b', 13),
    cp('訳ではなく、グループで決める', 'm', 190, 13)),
], 'to不定詞だけをとる動詞');

// ───────── s291 不定詞と動名詞：総合識別演習 ─────────
reg('koko_eigo_s291', 0, [
  S('不定詞（to ＋原形）と動名詞（-ing）のどちらを使うか。判断の材料は三つだけです。①前置詞のうしろか、②動詞の目的語か、③それ以外か。この順に見れば、ほとんどの問題が数秒で終わります。',
    tt('この ( ) には to ～ ？ ～ing ？'),
    nb(14, 40, 292, 34, '① 前置詞のうしろか', 'b', 14),
    nb(14, 84, 292, 34, '② 動詞の目的語か', 'g', 14),
    nb(14, 128, 292, 34, '③ それ以外か', 'p', 14),
    cp('①→②→③ の順に確認する', 'm', 195, 13)),
  S('①前置詞のうしろなら、必ず動名詞です。She is good at cooking. / Thank you for coming. / He left without saying anything. ❓なぜかというと、前置詞のうしろには名詞しか置けず、動作は動名詞にして置くからです。',
    tt('① 前置詞のうしろ → 動名詞', 'b'),
    ...row(36, [['good at', 'b'], ['cooking', 'g']], 13, 28),
    ...row(72, [['Thank you for', 'b'], ['coming', 'g']], 13, 28),
    ...row(108, [['without', 'b'], ['saying anything', 'g']], 13, 28),
    sm(160, 152, '前置詞のうしろは名詞だけ → 動作は ~ing にして置く', 'n', 12),
    cp('まず前置詞を探す', 'b', 195)),
  S('②動詞の目的語なら、動詞の種類で決まります。enjoy・finish・stop・mind・practice・keep・give up・avoid は動名詞。want・hope・decide・promise・wish・expect・plan は to不定詞。like・love・begin・start・continue はどちらでもよい。',
    tt('② 動詞の目的語 → 動詞で決まる', 'g'),
    nb(10, 28, 300, 42, '動名詞：enjoy finish stop mind\npractice keep give up avoid', 'b', 12),
    nb(10, 78, 300, 42, 'to不定詞：want hope decide\npromise wish expect plan', 'g', 12),
    nb(10, 128, 300, 42, 'どちらでも：like love\nbegin start continue', 'p', 12),
    cp('I finished writing. ／ I decided to write.', 'm', 202, 12)),
  S('③それ以外です。主語や補語にはどちらも使えて、Swimming is fun. = To swim is fun. です。でも形式主語の It のときは不定詞だけで、It is fun to swim. とします。× It is fun swimming. は誤りです。',
    tt('③ 主語・補語・形式主語'),
    ...row(34, [['Swimming is fun.', 'b']], 13, 28), ok(262, 48),
    ...row(70, [['To swim is fun.', 'g']], 13, 28), ok(262, 84),
    ...row(106, [['It is fun to swim.', 'g']], 13, 28), ok(262, 120),
    ...row(142, [['It is fun swimming.', 'r']], 13, 28), ng(268, 156),
    cp('It の文は to不定詞だけ', 'm', 195)),
  S('「〜するために」と目的を表すときも、to不定詞に限られます。I went to the park to play tennis.（テニスをするために公園へ行った）。for playing tennis とは言いません。',
    tt('目的「〜するために」→ to不定詞'),
    ...row(46, [['I went to the park', 'n'], ['to play tennis.', 'g']], 12, 30), ok(300, 62),
    ...row(100, [['I went to the park', 'n'], ['for playing tennis.', 'r']], 12, 30), ng(300, 116),
    cp('目的は to ＋原形', 'g', 170, 13),
    sm(160, 196, '（テニスをするために公園へ行った）', 'n', 12)),
  S('三つの手順で実際に解いてみましょう。I\'m interested in ( learn ) about history. は前置詞 in のうしろなので learning。He decided ( go ) abroad. は decide が to不定詞のグループなので to go。Would you mind ( open ) the window? は mind が動名詞のグループなので opening。',
    tt('3問で練習'),
    nb(8, 28, 160, 34, 'interested in (learn)', 'n', 11), ar(170, 45, 196, 45, C.main), nb(198, 28, 114, 34, '① → learning', 'b', 12),
    nb(8, 76, 160, 34, 'decided (go) abroad', 'n', 11), ar(170, 93, 196, 93, C.main), nb(198, 76, 114, 34, '② → to go', 'g', 12),
    nb(8, 124, 160, 34, 'Would you mind (open)', 'n', 11), ar(170, 141, 196, 141, C.main), nb(198, 124, 114, 34, '② → opening', 'g', 12),
    cp('どこを見たかを言えれば迷わない', 'm', 195, 12)),
  S('例外が一つあります。like・begin は両方とれますが、進行形の中では -ing が重なるのを避けて不定詞を使います。It is beginning to rain.（○）。It is beginning raining.（×）。',
    tt('進行形の中は不定詞'),
    ...row(50, [['It is beginning', 'n'], ['to rain.', 'g']], 13, 30), ok(284, 66),
    ...row(100, [['It is beginning', 'n'], ['raining.', 'r']], 13, 30), ng(284, 116),
    sm(160, 160, '-ing が2つ重なるのを避ける', 'n', 12),
    cp('beginning ＋ to不定詞', 'm', 195)),
  S('まとめです。①前置詞のうしろ → 動名詞。②動詞の目的語 → 動詞のグループで決める。③形式主語 It の文と目的（〜するために）→ to不定詞。まず前置詞を探す、という習慣をつけましょう。',
    tt('まとめ'),
    nb(14, 36, 292, 36, '① 前置詞のうしろ → ~ing', 'b', 14),
    nb(14, 82, 292, 36, '② 目的語 → 動詞のグループで決める', 'g', 14),
    nb(14, 128, 292, 36, '③ It の文・目的 → to ＋原形', 'p', 14),
    cp('まず前置詞を探す', 'm', 196, 14)),
], '不定詞か動名詞かの三分岐');

// ───────── s292 分詞①：現在分詞と過去分詞の意味 ─────────
reg('koko_eigo_s292', 0, [
  S('boiling water は「沸騰しているお湯」、boiled water は「沸かした湯」。同じ boil でも -ing と -ed で意味が逆になります。',
    tt('boil の -ing と -ed'),
    nb(14, 40, 140, 54, 'boiling water\n沸騰しているお湯', 'r', 13), nb(166, 40, 140, 54, 'boiled water\n沸かした湯', 'b', 13),
    cp('何が決め手なのか、たどってみよう', 'm', 150, 12)),
  S('❓決め手は何でしょう。→ 修飾される名詞が、その動作を「する側」か「される側」かです。お湯は自分で沸騰するので「する側」、湯は人に沸かされるので「される側」です。',
    tt('名詞は、動作を する側？ される側？'),
    nb(14, 36, 140, 40, 'water が\n沸騰する', 'r', 13), nb(166, 36, 140, 40, 'water が\n沸かされる', 'b', 13),
    ar(84, 80, 84, 104, C.red), ar(236, 80, 236, 104, C.blue),
    nb(14, 108, 140, 36, 'する側 → -ing', 'r', 14), nb(166, 108, 140, 36, 'される側 → -ed', 'b', 14),
    cp('名詞を主語にして考える', 'm', 190, 13)),
  S('現在分詞（-ing）は「〜している」。a running boy（走っている少年）は、the boy runs という関係です。a crying baby、the rising sun も同じです。名詞がその動作をする側のときに使います。',
    tt('現在分詞（-ing）＝ 〜している', 'r'),
    ...row(40, [['the boy', 'n'], ['runs', 'r']], 13, 30),
    ar(160, 74, 160, 98, C.red),
    ...row(104, [['a', 'n'], ['running', 'r'], ['boy', 'n']], 14, 32),
    cp('走っている少年', 'r', 170, 14),
    sm(160, 196, 'a crying baby ／ the rising sun', 'n', 12)),
  S('過去分詞は「〜される・〜された」。a broken window（割られた窓）は、the window is broken という関係です。a used car、boiled water も同じです。名詞がその動作をされる側のときに使います。',
    tt('過去分詞 ＝ 〜された', 'b'),
    ...row(40, [['the window', 'n'], ['is broken', 'b']], 13, 30),
    ar(160, 74, 160, 98, C.blue),
    ...row(104, [['a', 'n'], ['broken', 'b'], ['window', 'n']], 14, 32),
    cp('割られた窓', 'b', 170, 14),
    sm(160, 196, 'a used car ／ boiled eggs', 'n', 12)),
  S('判定の手順です。①修飾される名詞を主語にして文を作る。②「名詞が〜する」が自然なら現在分詞、「名詞が〜される」が自然なら過去分詞。a ( break ) window なら、The window is broken. なので broken です。',
    tt('判定の手順'),
    nb(10, 30, 300, 28, '① 名詞を主語にして文を作る', 'm', 13),
    nb(10, 64, 300, 28, 'a (break) window → The window is broken.', 'n', 12),
    nb(10, 98, 300, 28, '② 「〜される」が自然 → 過去分詞', 'b', 13),
    nb(10, 132, 300, 28, 'broken window', 'g', 14),
    cp('「割られる」なので broken', 'b', 196, 13)),
  S('❓a used car は「使う車」でしょうか。→ いいえ。use の過去分詞なので「使われた車」、つまり中古車です。spoken English も「話す英語」ではなく「話される英語」、つまり話し言葉です。',
    tt('訳し方に注意'),
    ...row(40, [['a used car', 'b']], 14, 32),
    sm(160, 86, '× 使う車　○ 使われた車（中古車）', 'b', 13),
    ...row(116, [['spoken English', 'b']], 14, 32),
    sm(160, 162, '× 話す英語　○ 話される英語（話し言葉）', 'b', 13),
    cp('use・speak の過去分詞だから', 'm', 200, 12)),
  S('感情を表す分詞も同じ考え方です。an exciting game は、ものが人をわくわくさせるので -ing。excited children は、人がわくわくさせられた状態なので過去分詞です。',
    tt('感情を表す分詞'),
    ...row(40, [['an exciting game', 'r']], 13, 30),
    sm(160, 82, 'ゲームが人をわくわくさせる → -ing', 'r', 12),
    ...row(110, [['excited children', 'b']], 13, 30),
    sm(160, 152, '子どもがわくわくさせられた → 過去分詞', 'b', 12),
    cp('物が人を〜させる ＝ -ing', 'm', 195, 13)),
  S('まとめです。名詞がする側なら -ing、される側なら過去分詞。過去分詞は不規則変化が多いので、break-broke-broken、write-wrote-written、speak-spoke-spoken、take-took-taken、know-knew-known を正しく書けるようにしましょう。',
    tt('まとめ'),
    nb(14, 28, 142, 34, 'する側 → -ing', 'r', 13), nb(164, 28, 142, 34, 'される側 → -ed', 'b', 13),
    sm(160, 80, '不規則な過去分詞', 'm', 12),
    nb(14, 94, 142, 26, 'break → broken', 'n', 12), nb(164, 94, 142, 26, 'write → written', 'n', 12),
    nb(14, 126, 142, 26, 'speak → spoken', 'n', 12), nb(164, 126, 142, 26, 'take → taken', 'n', 12),
    nb(14, 158, 142, 26, 'know → known', 'n', 12),
    cp('名詞を主語にして考える', 'm', 208, 13)),
], '現在分詞か過去分詞か');
