// 英語（中学共通）の以前からある項目（formulas-eigo.ts・formulas-eigo-koko.ts）の動く図解スライド。
// キーは項目の label（買い切りの識別キーと同じ）。「なぜ？」の連鎖で、根っこまでたどる。9枚以上。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, show, fresh } from './diagram-kit';

type Chip = [string, string, string, number?];
/** 横一列に並べた箱（幅は weight の比）。 */
const chips = (y: number, list: Chip[], o?: { h?: number; size?: number; gap?: number }): DiagramElement[] => {
  const h = o?.h ?? 34;
  const gap = o?.gap ?? 6;
  const total = list.reduce((s, c) => s + (c[3] ?? 1), 0);
  const avail = 304 - gap * (list.length - 1);
  let x = 8;
  return list.map((c) => {
    const w = (avail * (c[3] ?? 1)) / total;
    const el = bx(x, y, w, h, c[0], c[1], c[2], o?.size ?? 12);
    x += w + gap;
    return el;
  });
};
/** 下の帯の結論ボックス。 */
const cap = (text: string, color: string = C.green, fill: string = FILL.green, size = 13, y = 172): DiagramElement =>
  bx(14, y, 292, 40, text, color, fill, size);
const hd = (text: string, y = 18, color: string = C.ink, size = 13): DiagramElement => lb(160, y, text, size, color, 'middle', true);
const S = (note: string, ...els: DiagramElement[]) => ({ note, add: fresh(...els) });
const B = (t: string, w?: number): Chip => [t, C.blue, FILL.blue, w];
const R = (t: string, w?: number): Chip => [t, C.red, FILL.red, w];
const G = (t: string, w?: number): Chip => [t, C.green, FILL.green, w];
const P = (t: string, w?: number): Chip => [t, C.purple, FILL.purple, w];
const Y = (t: string, w?: number): Chip => [t, C.main, FILL.yellow, w];
const K = (t: string, w?: number): Chip => [t, C.gray, FILL.gray, w];
const say = (y: number, text: string, color: string = C.gray, size = 12) => lb(160, y, text, size, color, 'middle');

// ══ 1 場面別の決まり文句 ══
const scenes: DiagramFigure = show([
  S('会話文では、場面ごとに使う言い方がほぼ決まっています。❓なぜ決まっているのでしょう。同じ場面では、みんなが同じ流れで話すほうが、相手にすぐ伝わるからです。ここでは店・電話・さそう・道案内の4つを見ます。',
    hd('場面ごとに言い方が決まっている'), ...chips(40, [B('店'), G('電話')], { h: 40, size: 15 }), ...chips(90, [Y('さそう'), P('道案内')], { h: 40, size: 15 }), cap('決まった流れを覚えると、すぐ答えられる', C.blue, FILL.blue)),
  S('店の会話です。店員は May I help you? と話しかけます。❓なぜ「私は助けてよいですか」という形なのでしょう。May I 〜? は「〜してもよいですか」と、ていねいに相手の許しをたずねる言い方だからです。客は I am looking for a cap. と答えます。',
    ...chips(24, [K('店員'), B('May I help you?', 3)], { h: 34 }), ar(160, 62, 160, 78, C.gray), ...chips(80, [K('客'), G('I am looking for a cap.', 3)], { h: 34 }), say(134, '（ぼうしをさがしています）'), cap('May I help you? → I am looking for 〜.', C.blue, FILL.blue)),
  S('買うつもりがないときは、I am just looking. と言います。❓just はどんな意味でしょう。「ただ〜だけ」という意味で、「見ているだけです」と伝えられます。ことわるときは No, thank you. も使います。Yes なら Yes, please. です。',
    ...chips(24, [K('店員'), B('May I help you?', 3)], { h: 34 }), ...chips(70, [G('Yes, please.', 1), Y('I am looking for a cap.', 2)], { h: 34 }), ...chips(114, [R('No, thank you.', 1), Y('I am just looking.', 2)], { h: 34 }), cap('見ているだけ → I am just looking.', C.red, FILL.red)),
  S('電話の会話です。名乗るときは I am Ken. ではなく This is Ken. と言います。❓なぜ This is なのでしょう。電話では相手に姿が見えず、声だけが届きます。そこで「こちらは〜です」と、自分のいる側を指して言う形になっているのです。',
    ...chips(26, [R('I am Ken.', 1), K('×', 0.4)], { h: 34 }), ...chips(74, [G('This is Ken.', 1), K('○', 0.4)], { h: 34 }), say(126, '声だけが届くので「こちらは」と言う'), cap('電話で名乗る → This is 〜.', C.green, FILL.green)),
  S('相手を確かめるときも同じです。Are you Tom? ではなく、Is this Tom? と言います。❓なぜ this を使うのでしょう。名乗るときと同じで、電話では相手も「そちらは」と指し示して呼ぶ約束だからです。',
    ...chips(26, [R('Are you Tom?', 1), K('×', 0.4)], { h: 34 }), ...chips(74, [G('Is this Tom?', 1), K('○', 0.4)], { h: 34 }), say(126, 'あいてにも this を使う'), cap('相手の確認 → Is this 〜?', C.green, FILL.green)),
  S('話したい人につないでもらうときは、May I speak to Tom? と言います。❓なぜ May I 〜? でしょうか。店のときと同じで、「〜してもよいですか」とていねいにたのむ形だからです。返事は Speaking.（私です）か Just a minute, please.（少し待って）です。',
    ...chips(24, [B('Hello. This is Ken.', 3)], { h: 32 }), ...chips(64, [B('May I speak to Tom?', 3)], { h: 32 }), ar(160, 98, 160, 114, C.gray), ...chips(116, [G('Speaking.', 1), Y('Just a minute, please.', 2)], { h: 32 }), cap('May I speak to 〜? → Speaking.', C.blue, FILL.blue)),
  S('さそうときは How about going to the movies? と言います。❓なぜ go ではなく going なのでしょう。about は前置詞で、前置詞のあとには名詞のはたらきをする形しか置けません。動詞を名詞のはたらきにするのが ing形だからです。',
    ...chips(26, [B('How', 1), Y('about', 1), R('going', 1), G('to the movies?', 2)], { h: 36 }), ar(120, 68, 120, 88, C.red), lb(120, 104, 'ing形（名詞のはたらき）', 11, C.red, 'middle', true), say(132, '前置詞 about のあとだから ing形'), cap('How about ＋ ing形?（×How about to go）', C.red, FILL.red, 12)),
  S('Thank you for coming. も同じ理由です。❓なぜ Thank you for come とならないのでしょうか。for も前置詞だからです。前置詞のあとの動詞は、いつも ing形になります。さそいへの返事は That sounds good. や Sure. です。',
    ...chips(26, [B('Thank you', 2), Y('for', 1), R('coming.', 2)], { h: 36 }), say(80, 'for も前置詞 → ing形'), ...chips(104, [B('Shall we go?', 2), G('That sounds good.', 2)], { h: 36 }), cap('前置詞のあとは ing形', C.red, FILL.red)),
  S('道をたずねるときは、Could you tell me how to get to the station? と言います。❓なぜ Can でなく Could なのでしょうか。Could は Can より一歩ていねいな言い方で、知らない人にたのむときに合うからです。how to get to 〜 は「〜への行き方」です。',
    ...chips(24, [B('Could you tell me', 2), Y('how to get to', 2), G('the station?', 2)], { h: 40, size: 11 }), say(78, '（駅への行き方を教えていただけますか）'), ar(160, 90, 160, 108, C.gray), ...chips(112, [G('Go straight and turn right at the second corner.', 1)], { h: 40, size: 11 }), cap('道案内：Could you tell me how to get to 〜?', C.blue, FILL.blue, 12)),
  S('ほかにもよく出る決まり文句です。体調は What is wrong?（どうしたのですか）、ざんねんな知らせには That is too bad.、ものをわたすときは Here you are.（はい、どうぞ）と言います。場面を思いうかべると、すぐ言葉が出てきます。',
    ...chips(24, [K('体調'), B('What is wrong?', 3)], { h: 32 }), ...chips(64, [K('返事'), Y('That is too bad.', 3)], { h: 32 }), ...chips(104, [K('わたす'), G('Here you are.', 3)], { h: 32 }), cap('場面を思いうかべて、決まった形で言う', C.blue, FILL.blue)),
]);

// ══ 2 5つの文型と動詞の後ろの形 ══
const bunkei: DiagramFigure = show([
  S('英語の文は、動詞の後ろに何が来るかで5つの型に分かれます。❓なぜ型に分けるのでしょう。動詞ごとに、意味を完成させるために必要な語がちがうので、型を知ると文の組み立てが見えてくるからです。まず SV から見ます。',
    hd('文型 ＝ 動詞の後ろに何が来るか'), ...chips(40, [B('SV'), G('SVC'), Y('SVO')], { h: 36, size: 14 }), ...chips(88, [P('SVOO'), R('SVOC')], { h: 36, size: 14 }), cap('S＝主語　V＝動詞　O＝目的語　C＝補語', C.blue, FILL.blue, 12)),
  S('SV は、He runs. のように動詞だけで意味が完結する型です。❓なぜ後ろに何もいらないのでしょう。run（走る）は「だれが走る」だけで言いたいことが伝わり、相手役の語がなくても意味が成り立つからです。',
    ...chips(34, [B('He', 1), G('runs.', 1)], { h: 40, size: 15 }), lb(84, 92, 'S（主語）', 12, C.blue), lb(236, 92, 'V（動詞）', 12, C.green), cap('SV：動詞だけで意味が完結', C.blue, FILL.blue)),
  S('SVC は He is a teacher. のように、主語をくわしく説明する語（補語）が来る型です。❓どう見分けるのでしょう。He ＝ a teacher と、イコールで結べるからです。be動詞のほか become, look, feel, sound, get もこの仲間です。',
    ...chips(30, [B('He', 1), G('is', 1), Y('a teacher.', 2)], { h: 38, size: 14 }), ln(70, 78, 70, 92, C.red, false, 2), ln(70, 92, 232, 92, C.red, false, 2), ln(232, 92, 232, 78, C.red, false, 2), lb(150, 112, 'He ＝ a teacher', 14, C.red, 'middle', true), cap('SVC：主語 ＝ 補語（イコールで結べる）', C.green, FILL.green)),
  S('SVO は I play tennis. のように、動作の相手（目的語）が来る型です。❓SVC とどうちがうのでしょう。I ＝ tennis とは言えません。tennis は主語ではなく、play という動作を受ける相手だからです。イコールにならなければ、目的語です。',
    ...chips(30, [B('I', 1), G('play', 1), Y('tennis.', 1)], { h: 38, size: 14 }), ar(150, 76, 250, 76, C.main), lb(200, 94, '動作を受ける相手', 11, C.main), lb(160, 122, 'I ＝ tennis ？ → ならない', 13, C.red, 'middle', true), cap('SVO：動詞の相手（目的語）が来る', C.main, FILL.yellow)),
  S('SVOO は I gave him a book. のように、目的語が2つ続く型です。❓なぜ2つ必要なのでしょう。give は「だれかに何かをあげる」という動詞で、相手の人と物の両方がそろって意味が完成するからです。順番は「人＋物」です。',
    ...chips(30, [B('I', 1), G('gave', 1), Y('him', 1), P('a book.', 1)], { h: 38, size: 13 }), lb(200, 84, '人', 12, C.main, 'middle', true), lb(268, 84, '物', 12, C.purple, 'middle', true), cap('SVOO：人 ＋ 物 の順', C.purple, FILL.purple)),
  S('SVOC は We call him Ken. のように、目的語のあとに補語が来る型です。❓SVC とのちがいは何でしょう。SVC は「主語 ＝ 補語」ですが、SVOC では「目的語 ＝ 補語」になります。him ＝ Ken と、イコールで結べるのは him のほうです。',
    ...chips(30, [B('We', 1), G('call', 1), Y('him', 1), R('Ken.', 1)], { h: 38, size: 13 }), ln(184, 76, 184, 90, C.red, false, 2), ln(184, 90, 262, 90, C.red, false, 2), ln(262, 90, 262, 76, C.red, false, 2), lb(224, 108, 'him ＝ Ken', 13, C.red, 'middle', true), cap('SVOC：目的語 ＝ 補語', C.red, FILL.red)),
  S('SVC と SVOC の見分け方をまとめます。❓どこを見ればよいのでしょう。動詞の後ろの語どうしがイコールで結べるかを調べます。「主語 ＝ 補語」なら SVC、「目的語 ＝ 補語」なら SVOC です。',
    ...chips(24, [B('He is a teacher.', 2), G('He ＝ teacher', 1.4)], { h: 34, size: 11 }), say(70, '主語とイコール → SVC', C.green), ...chips(90, [B('We call him Ken.', 2), R('him ＝ Ken', 1.4)], { h: 34, size: 11 }), say(140, '目的語とイコール → SVOC', C.red), cap('イコールで結べる語を探す', C.blue, FILL.blue)),
  S('SVC になる動詞には、look, feel, sound, get などがあります。She looks happy. は She ＝ happy です。❓なぜ happily ではないのでしょう。補語は主語の様子をくわしく説明する語なので、名詞や形容詞を使うからです。副詞は動詞を説明する語なので、ここには入りません。',
    ...chips(28, [B('She', 1), G('looks', 1), R('happy.', 1)], { h: 38, size: 14 }), lb(160, 88, 'She ＝ happy（様子）', 13, C.red, 'middle', true), say(116, '×  She looks happily.  ← 副詞は入れない', C.gray, 12), cap('look・feel・sound・get ＋ 形容詞', C.green, FILL.green)),
  S('SVOO は、SVO に書きかえられます。I gave him a book. は I gave a book to him. になります。❓なぜ to をつけるのでしょう。「人＋物」の順をひっくり返して「物＋人」にすると、人の前に「〜に向けて」を表す to が必要になるからです。',
    ...chips(26, [B('I gave him a book.', 1)], { h: 34 }), ar(160, 64, 160, 84, C.gray), ...chips(88, [G('I gave a book to him.', 1)], { h: 34 }), say(140, '人＋物  →  物 ＋ to ＋ 人'), cap('SVOO → SVO ＋ to（物 ＋ 人の順）', C.green, FILL.green)),
  S('to ではなく for を使う動詞もあります。❓どう分けるのでしょう。give, show, teach, send のように、相手がいないと成り立たない動作には to を使います。buy, make, cook のように、相手がいなくてもできる動作には for を使います。',
    ...chips(24, [B('to', 1), G('give・show・teach・send', 3)], { h: 34, size: 11 }), say(70, '相手がいないと成り立たない', C.blue), ...chips(88, [R('for', 1), Y('buy・make・cook', 3)], { h: 34, size: 11 }), say(138, '相手がいなくてもできる', C.red), cap('to 系と for 系は動詞で決まる', C.blue, FILL.blue)),
]);

// ══ 3 There構文と存在を表す言い方 ══
const there: DiagramFigure = show([
  S('There is / There are は「〜がある・いる」を表します。❓なぜ There を先に置くのでしょう。英語は「何があるか」を新しく知らせるとき、先に There で場面を切り出し、あとから中身を出す形をとるからです。',
    ...chips(28, [B('There', 1), G('is', 1), Y('a book', 1.4), K('on the desk.', 1.6)], { h: 38, size: 12 }), lb(160, 88, '（机の上に本があります）', 12, C.gray), cap('There is/are 〜 ＝ 〜がある・いる', C.blue, FILL.blue)),
  S('be動詞は、後ろの名詞に合わせます。❓なぜ There ではなく後ろに合わせるのでしょう。There は形だけの言葉で、本当の主語は後ろの名詞だからです。単数なら is、複数なら are を使います。',
    ...chips(24, [B('There', 1), G('is', 1), Y('a book', 1.5)], { h: 34 }), lb(160, 76, '単数 → is', 12, C.green, 'middle', true), ...chips(96, [B('There', 1), R('are', 1), Y('three books', 1.5)], { h: 34 }), lb(160, 148, '複数 → are', 12, C.red, 'middle', true), cap('be動詞は後ろの名詞に合わせる', C.green, FILL.green)),
  S('例題です。「机の上に本が3冊あります」は There are three books on the desk. です。❓なぜ are なのでしょう。three books は複数だからです。冊数が数えられるときは、3冊でも 100冊でも are を使います。',
    ...chips(26, [B('There', 1), R('are', 1), Y('three books', 1.6), K('on the desk.', 1.6)], { h: 40, size: 11 }), ar(184, 76, 184, 96, C.red), lb(184, 112, '複数だから are', 12, C.red, 'middle', true), cap('There are three books on the desk.', C.green, FILL.green, 12)),
  S('過去のことは There was / There were を使います。❓なぜ形が変わるのでしょう。is と are がそれぞれ過去形の was と were に変わるだけで、単数・複数の合わせ方は現在のときと同じだからです。',
    ...chips(26, [G('is', 1), K('→', 0.4), B('was', 1), K('（単数）', 1)], { h: 34 }), ...chips(74, [G('are', 1), K('→', 0.4), B('were', 1), K('（複数）', 1)], { h: 34 }), cap('There was a book. / There were books.', C.blue, FILL.blue, 12)),
  S('疑問文は、be動詞を There の前に出します。There is 〜 が Is there 〜? になります。❓なぜ前に出すのでしょう。be動詞の文は、be動詞を主語の前に出すとたずねる文になる決まりで、これは英語の文すべてに共通です。',
    ...chips(26, [B('There is a park.', 1)], { h: 34 }), ar(160, 64, 160, 84, C.gray), ...chips(88, [G('Is there a park?', 1)], { h: 34 }), say(140, 'be動詞を前に出す'), cap('Is there 〜? / Are there 〜?', C.green, FILL.green)),
  S('答えるときも there を使います。No, there are not.（No, there aren\'t.）となります。❓なぜ they ではだめなのでしょう。They と答えると、その they が何を指すのか分からなくなるからです。聞かれた形のまま there で答えます。',
    ...chips(24, [B('Are there any students in the room?', 1)], { h: 34, size: 11 }), ar(160, 62, 160, 82, C.gray), ...chips(86, [G('No, there are not.', 1)], { h: 34 }), ...chips(128, [R('No, they are not.', 1)], { h: 30 }), lb(280, 143, '×', 16, C.red, 'middle', true), cap('聞かれた形のまま there で答える', C.green, FILL.green)),
  S('大事なきまりです。my や the がついたものには There 構文を使いません。❓なぜでしょう。There 構文は、相手がまだ知らないものを「ありますよ」と新しく知らせる言い方です。my bag のように相手がもう分かっているものには合いません。',
    ...chips(24, [R('There is my bag on the table.', 1)], { h: 34, size: 12 }), lb(160, 76, '×  分かっているものを新しく知らせている', 11, C.red, 'middle', true), ...chips(96, [G('My bag is on the table.', 1)], { h: 34 }), lb(160, 148, '○  ふつうの文にする', 12, C.green, 'middle', true), cap('特定のもの → ふつうの be動詞の文', C.red, FILL.red)),
  S('数えられない名詞はどうでしょう。There ( ) a lot of water in the glass. には is が入ります。❓なぜ a lot of があるのに is なのでしょう。water は数えられない名詞で、単数と同じあつかいだからです。a lot of は「たくさん」の意味で、is か are かは決めません。',
    ...chips(26, [B('There', 1), G('is', 1), Y('a lot of water', 2)], { h: 36, size: 12 }), lb(160, 84, 'water は数えられない → 単数あつかい', 12, C.green, 'middle', true), say(112, '×  There are a lot of water', C.red, 12), cap('数えられない名詞は is', C.green, FILL.green)),
  S('まとめです。There 構文は「新しく存在を知らせる」形です。だから、後ろの名詞の数で is/are を選び、the や my のつく名詞には使いません。答えるときも there で答えます。',
    ...chips(24, [B('後ろの名詞が単数 → is'), G('複数 → are')], { h: 34, size: 11 }), ...chips(70, [R('the / my つき → 使わない')], { h: 34, size: 12 }), ...chips(116, [Y('答え方：Yes, there is. / No, there is not.')], { h: 34, size: 11 }), cap('新しく知らせる → 後ろの名詞に合わせる', C.blue, FILL.blue)),
]);

// ══ 4 名詞の数と冠詞の使い分け ══
const meishi: DiagramFigure = show([
  S('名詞には、数えられるものと数えられないものがあります。❓なぜ分けるのでしょう。英語では、数えられるものには a をつけたり複数形にしたりしますが、数えられないものにはそれができないからです。',
    hd('名詞は2種類'), ...chips(40, [G('数えられる名詞\nbook, dog, cup'), R('数えられない名詞\nwater, money')], { h: 54, size: 12 }), cap('a や複数形がつくかどうかが分かれ目', C.blue, FILL.blue)),
  S('数えられる名詞は、1つなら a（母音の音で始まれば an）をつけ、2つ以上なら複数形にします。a book, two books のようになります。❓なぜ形を変えるのでしょう。英語は、1つか2つ以上かを名詞の形ではっきり示す言語だからです。',
    ...chips(28, [B('a book', 1), K('→', 0.3), G('two books', 1)], { h: 40, size: 14 }), say(86, '1つ → a　　2つ以上 → 複数形（s）'), cap('数えられる名詞は a か 複数形', C.green, FILL.green)),
  S('数えられない名詞は、water, milk, money, time, information, homework, advice, news などです。❓なぜ数えられないのでしょう。形が決まっていなかったり、目に見えなかったりして、「1つ、2つ」と区切れないからです。',
    ...chips(24, [R('water'), R('milk'), R('money')], { h: 34, size: 13 }), ...chips(66, [R('time'), R('homework'), R('advice')], { h: 34, size: 13 }), ...chips(108, [R('information'), R('news')], { h: 34, size: 13 }), cap('形がない・見えないものが多い', C.red, FILL.red)),
  S('数えられない名詞には a をつけず、複数形にもしません。❓では、I have many homeworks today. は正しいでしょうか。正しくありません。homework は数えられないので、homeworks とせず、many も使えません。I have a lot of homework today. となります。',
    ...chips(24, [R('many homeworks', 1), K('×', 0.3)], { h: 34 }), ar(160, 62, 160, 80, C.gray), ...chips(84, [G('a lot of homework', 1), K('○', 0.3)], { h: 34 }), say(136, 'a lot of は両方に使える'), cap('homework・information・advice は数えられない', C.red, FILL.red, 12)),
  S('では、数えられない名詞の量を言いたいときはどうするのでしょう。入れ物や単位を借ります。a glass of water（コップ1杯の水）、two pieces of paper（紙2枚）のようになります。❓なぜ借りるのでしょう。水や紙そのものは数えられなくても、入れ物や1枚は数えられるからです。',
    ...chips(24, [G('a glass of water', 1)], { h: 32 }), ...chips(62, [G('two pieces of paper', 1)], { h: 32 }), ...chips(100, [G('a cup of coffee', 1)], { h: 32 }), say(146, '数えているのは入れ物や単位'), cap('数えられない名詞 → 単位を借りる', C.green, FILL.green)),
  S('many と much の使い分けです。many は数えられる名詞に、much は数えられない名詞につきます。❓なぜ分かれるのでしょう。many は「数が多い」、much は「量が多い」という意味だからです。a lot of は、どちらにも使えます。',
    ...chips(24, [B('many', 1), G('books（数）', 1.5)], { h: 34 }), ...chips(70, [R('much', 1), G('water（量）', 1.5)], { h: 34 }), ...chips(116, [Y('a lot of', 1), G('books / water どちらも', 1.5)], { h: 34, size: 11 }), cap('many ＝ 数　much ＝ 量　a lot of ＝ どちらも', C.blue, FILL.blue, 12)),
  S('次は a と the の使い分けです。a は初めて話に出るもの、the はすでに出たものにつけます。❓なぜ変えるのでしょう。a は「たくさんある中の1つ」、the は「どれのことか相手も分かっている」ことを表すからです。',
    ...chips(24, [B('I saw', 1), G('a dog.', 1)], { h: 34 }), say(70, '初めて出る → a', C.green), ...chips(88, [B('The dog', 1), G('was very big.', 1.4)], { h: 34 }), say(138, 'もう分かっている → the', C.blue), cap('初めて → a　　すでに出た → the', C.green, FILL.green)),
  S('1つしかないものにも the をつけます。the sun, the moon, the earth です。❓なぜでしょう。太陽や月は1つしかないので、言えば「どれのことか」が、だれにでも分かるからです。分かっているものには the、というきまりと同じ理由です。',
    ...chips(28, [Y('the sun', 1), Y('the moon', 1), Y('the earth', 1)], { h: 38, size: 13 }), say(88, '1つしかない → だれにでも分かる'), cap('1つしかないものは the', C.blue, FILL.blue)),
]);

// ══ 5 代名詞の格と再帰代名詞 ══
const daimeishi: DiagramFigure = show([
  S('代名詞は、文の中での役目に合わせて形が変わります。I - my - me - mine - myself の5つです。❓なぜ形が変わるのでしょう。「するのは私」「私の〜」「私を」のように、文の中の場所で役目がちがい、英語はそれを形で表すからです。',
    ...chips(26, [B('I', 1), G('my', 1), Y('me', 1)], { h: 36, size: 15 }), ...chips(72, [P('mine', 1), R('myself', 1.3)], { h: 36, size: 15 }), cap('主格・所有格・目的格・所有代名詞・再帰代名詞', C.blue, FILL.blue, 12)),
  S('まず主格（I）は「〜は」と、主語になる形です。所有格（my）は「〜の」で、後ろに名詞が続きます。❓なぜ my は名詞といっしょなのでしょう。my は「私の」というだけで、何の話かは後ろの名詞がおぎなうからです。',
    ...chips(24, [B('I', 1), K('play tennis.', 2)], { h: 34 }), say(70, '主格：主語になる', C.blue), ...chips(88, [G('my', 1), K('book', 1.4)], { h: 34 }), say(138, '所有格：あとに名詞が続く', C.green), cap('I ＝ 〜は　　my ＋ 名詞 ＝ 〜の…', C.blue, FILL.blue)),
  S('目的格（me）は「〜を・〜に」と、動詞や前置詞の後ろで使う形です。❓なぜ前置詞のあとも目的格なのでしょう。前置詞は「あとに来る名詞と、ほかの語をつなぐ」語で、あとの名詞は前置詞の相手（目的語）にあたるからです。for me, with him のようになります。',
    ...chips(24, [B('for', 1), R('me', 1)], { h: 34 }), ...chips(66, [B('with', 1), R('him', 1)], { h: 34 }), ...chips(108, [B('Help', 1), R('me.', 1)], { h: 34 }), cap('前置詞・動詞のあとは目的格', C.red, FILL.red)),
  S('例題です。Between you and ( ), I like it. に入る語は me です。❓and があるのに I ではないのはなぜでしょう。between は前置詞なので、そのあとは you も ( ) も目的格になります。and につられて I としないように注意します。',
    ...chips(24, [K('Between', 1.2), G('you', 1), K('and', 0.8), R('me', 1)], { h: 36 }), lb(160, 82, 'Between は前置詞', 12, C.blue, 'middle', true), ar(160, 92, 160, 112, C.red), lb(160, 128, '前置詞のあと ＝ me（× I）', 13, C.red, 'middle', true), cap('前置詞のあとは目的格', C.red, FILL.red)),
  S('所有代名詞（mine）は、「所有格＋名詞」を1語でまとめた形です。my book ＝ mine です。❓なぜ1語にするのでしょう。同じ名詞をくりかえさずにすませるためです。This book is mine. は「この本は私のものです」となります。',
    ...chips(24, [G('my book', 1), K('＝', 0.3), P('mine', 1)], { h: 36, size: 14 }), say(76, '名詞をくりかえさない'), ...chips(98, [B('This book is', 2), P('mine.', 1)], { h: 34 }), cap('mine ＝ my ＋ 名詞（1語）', C.purple, FILL.purple)),
  S('だから、後ろに名詞は置きません。This is mine book. は誤りです。❓なぜでしょう。mine の中に「私の本」の意味がすでに入っているので、book を足すと二重になってしまうからです。This is my book. か This book is mine. と直します。',
    ...chips(24, [R('This is mine book.', 1), K('×', 0.3)], { h: 34 }), ar(160, 62, 160, 80, C.gray), ...chips(84, [G('This is my book.', 1), K('○', 0.3)], { h: 30 }), ...chips(122, [G('This book is mine.', 1), K('○', 0.3)], { h: 30 }), cap('mine のあとに名詞は置かない', C.red, FILL.red)),
  S('再帰代名詞（myself）は「自分自身」を表します。❓なぜ me ではだめなのでしょう。I hurt me. だと、別の人（me）を傷つけたようにも読めます。同じ人だとはっきり示すために、self のつく形を使います。',
    ...chips(24, [B('I', 1), G('hurt', 1), R('myself.', 1.2)], { h: 36 }), lb(160, 84, '主語と同じ人（自分自身）', 12, C.red, 'middle', true), ...chips(110, [B('I', 0.8), G('like', 1), K('him.', 1.2), K('（別の人）', 1.4)], { h: 30, size: 11 }), cap('自分自身 → self のつく形', C.red, FILL.red)),
  S('再帰代名詞は、強調にも使います。She made the cake herself. は「彼女が自分で作った」です。❓なぜ by herself だと意味が変わるのでしょう。by oneself は「ひとりで」という決まった言い方で、だれの助けも借りないことを表すからです。',
    ...chips(24, [B('She made the cake', 2), R('herself.', 1)], { h: 34 }), say(70, '自分で（強調）', C.red), ...chips(92, [B('She lives', 1), R('by herself.', 1)], { h: 34 }), say(142, 'ひとりで（決まった言い方）', C.red), cap('herself ＝ 自分で　　by herself ＝ ひとりで', C.red, FILL.red, 12)),
  S('人ごとの形をまとめます。he - his - him - his - himself、she - her - her - hers - herself、they - their - them - theirs - themselves です。❓なぜ表で覚えるのでしょう。役目ごとの形を、人称の横並びで比べると、まちがえやすい me と I などがはっきり区別できるからです。',
    ...chips(22, [K('主', 1), K('所有', 1), K('目的', 1), K('所有代', 1), K('再帰', 1.2)], { h: 24, size: 10, gap: 3 }), ...chips(52, [B('I', 1), B('my', 1), B('me', 1), B('mine', 1), B('myself', 1.2)], { h: 26, size: 10, gap: 3 }), ...chips(84, [G('he', 1), G('his', 1), G('him', 1), G('his', 1), G('himself', 1.2)], { h: 26, size: 10, gap: 3 }), ...chips(116, [Y('they', 1), Y('their', 1), Y('them', 1), Y('theirs', 1), Y('themselves', 1.2)], { h: 26, size: 10, gap: 3 }), cap('前置詞のあとは目的格（for me, with him）', C.blue, FILL.blue, 12)),
]);

// ══ 6 目的語の形が決まっている動詞 ══
const mokuteki: DiagramFigure = show([
  S('動詞には、後ろに to 不定詞が来るものと、ing形（動名詞）が来るものがあります。❓なぜ決まっているのでしょう。動詞の意味が、これからのことに向くか、すでにしたことや今していることに向くかで、合う形がちがうからです。',
    hd('動詞の後ろの形は、動詞ごとに決まる'), ...chips(40, [B('to 不定詞\nこれから先のこと'), G('ing形\nすでに・今のこと')], { h: 54, size: 12 }), cap('意味の向きが、後ろの形を決める', C.blue, FILL.blue)),
  S('to 不定詞だけをとる動詞は、want, hope, wish, decide, promise, expect, plan です。❓なぜ to なのでしょう。どれも「これからしたい・する予定」という未来に向いた動詞で、to は「〜へ向かう」というイメージを持つので合うからです。',
    ...chips(24, [B('want'), B('hope'), B('wish'), B('decide')], { h: 34, size: 13 }), ...chips(66, [B('promise'), B('expect'), B('plan')], { h: 34, size: 13 }), lb(160, 118, '→ ＋ to ＋ 動詞（未来へ向かう）', 13, C.blue, 'middle', true), cap('これからのことを表す動詞 ＋ to', C.blue, FILL.blue)),
  S('ing形だけをとる動詞は、enjoy, finish, stop, give up, mind, practice です。❓なぜ ing形なのでしょう。どれも「今している・すでに始めたこと」を相手にする動詞なので、実際に行われている感じの ing形が合うからです。',
    ...chips(24, [G('enjoy'), G('finish'), G('stop')], { h: 34, size: 13 }), ...chips(66, [G('give up'), G('mind'), G('practice')], { h: 34, size: 13 }), lb(160, 118, '→ ＋ ing形（実際にしていること）', 13, C.green, 'middle', true), cap('今・すでにのことを表す動詞 ＋ ing', C.green, FILL.green)),
  S('例題です。We finished ( ) the room. の clean の形は？ finish は「すでに始めたことを終える」ので、ing形の cleaning になります。❓なぜ to clean ではだめなのでしょう。「終える」のはもうやっていたことで、これから先を向く to とは合わないからです。',
    ...chips(24, [B('We finished', 2), G('cleaning', 1.2), K('the room.', 1.4)], { h: 36, size: 12 }), ar(160, 66, 160, 86, C.green), lb(160, 104, 'finish ＋ ing形', 14, C.green, 'middle', true), say(130, '×  finished to clean'), cap('finish ＋ ing形', C.green, FILL.green)),
  S('もう1問。He decided ( ) abroad. の go の形は？ decide は「これからのことを決める」ので to 不定詞、to go になります。❓なぜ going ではないのでしょう。決めるのは、まだしていないこれからのことなので、未来へ向かう to が合うからです。',
    ...chips(24, [B('He decided', 2), G('to go', 1.2), K('abroad.', 1.2)], { h: 36, size: 12 }), ar(160, 66, 160, 86, C.blue), lb(160, 104, 'decide ＋ to 不定詞', 14, C.blue, 'middle', true), say(130, '×  decided going'), cap('decide ＋ to 不定詞', C.blue, FILL.blue)),
  S('どちらも使える動詞もあります。like, love, begin, start, continue です。❓なぜ両方使えるのでしょうか。「好き」や「始める」は、これからも今もあてはまる意味なので、どちらの形とも合うからです。意味はほとんど変わりません。',
    ...chips(24, [Y('like'), Y('love'), Y('begin')], { h: 34, size: 13 }), ...chips(66, [Y('start'), Y('continue')], { h: 34, size: 13 }), lb(160, 118, 'to ＋ 動詞  でも  ing形 でもよい', 13, C.main, 'middle', true), cap('like / begin / start は両方使える', C.main, FILL.yellow)),
  S('誤りを直してみます。I enjoyed to play tennis. は、enjoy が ing形だけの動詞なので、I enjoyed playing tennis. と直します。❓なぜ気づけるのでしょう。enjoy は「今していて楽しい」という動詞で、ing形の仲間だと覚えているからです。',
    ...chips(24, [R('I enjoyed to play tennis.', 1), K('×', 0.3)], { h: 34 }), ar(160, 62, 160, 80, C.gray), ...chips(84, [G('I enjoyed playing tennis.', 1), K('○', 0.3)], { h: 34 }), cap('enjoy ＋ ing形（to 不定詞は不可）', C.green, FILL.green)),
  S('見分けるための覚え方です。「これから」のことなら to、「すでに」のことなら ing、と考えます。want to go は「これから行きたい」、enjoy playing は「今していて楽しい」です。❓迷ったらどうするのでしょう。その動詞の意味が、未来向きか、今・過去向きかを考えます。',
    ...chips(24, [B('want to go', 1), K('これから', 0.9)], { h: 34 }), ...chips(66, [G('enjoy playing', 1), K('今・すでに', 0.9)], { h: 34 }), say(116, '迷ったら意味の向きを考える'), cap('to は これから　ing は すでに', C.blue, FILL.blue)),
  S('まとめです。to だけの動詞（want, hope, decide）と、ing だけの動詞（enjoy, finish, stop）を、3つずつ覚えておきます。「これから」なら to、「すでに」なら ing、という理由も合わせて覚えると、忘れにくくなります。',
    ...chips(24, [B('to だけ', 1), K('want / hope / decide', 2)], { h: 34, size: 11 }), ...chips(66, [G('ing だけ', 1), K('enjoy / finish / stop', 2)], { h: 34, size: 11 }), ...chips(108, [Y('どちらも', 1), K('like / begin / start', 2)], { h: 34, size: 11 }), cap('意味の向きで、後ろの形が決まる', C.blue, FILL.blue)),
]);

// ══ 7 stop と remember の意味の変化 ══
const stopRem: DiagramFigure = show([
  S('stop の後ろが ing形か to 不定詞かで、意味が変わります。❓なぜ変わるのでしょう。to は「これから先・目的」、ing は「すでにしていること」を表す性質があり、それが動詞の意味に加わるからです。',
    ...chips(28, [G('stop ＋ ing', 1), R('stop ＋ to', 1)], { h: 40, size: 14 }), say(86, 'やめる　　　立ち止まる'), cap('後ろの形で意味がちがう', C.blue, FILL.blue)),
  S('stop smoking は「タバコをやめる」です。❓なぜ「やめる」なのでしょう。smoking（吸うこと）は名詞のはたらきで、stop の相手（目的語）です。「吸うこと」を止める、つまりやめる、という意味になるからです。',
    ...chips(28, [B('He stopped', 1.3), G('smoking.', 1)], { h: 38 }), ar(160, 74, 160, 96, C.green), lb(160, 112, '吸うことを止めた ＝ やめた', 13, C.green, 'middle', true), cap('stop ＋ ing ＝ 〜するのをやめる', C.green, FILL.green)),
  S('stop to smoke は「タバコを吸うために立ち止まる」です。❓なぜ意味がちがうのでしょう。この to smoke は stop の相手ではなく、「〜するために」という目的を表す部分です。歩くのを止めて、吸うために立ち止まったのです。',
    ...chips(28, [B('He stopped', 1.3), R('to smoke.', 1)], { h: 38 }), ar(160, 74, 160, 96, C.red), lb(160, 112, '立ち止まった ＋ 目的', 13, C.red, 'middle', true), cap('stop ＋ to ＝ 〜するために立ち止まる', C.red, FILL.red)),
  S('例題です。He stopped to talk with her. の意味は「彼は彼女と話すために立ち止まった」です。❓なぜ「話すのをやめた」ではないのでしょう。stopped の後ろが to talk で、to 以下は目的を表すからです。話すのをやめたなら stopped talking になります。',
    ...chips(24, [B('He stopped', 1), R('to talk with her.', 1.6)], { h: 34 }), say(70, '彼は彼女と話すために立ち止まった', C.red), ...chips(92, [B('He stopped', 1), G('talking with her.', 1.6)], { h: 34 }), say(142, '彼は彼女と話すのをやめた', C.green), cap('to talk ＝ 目的　　talking ＝ やめる相手', C.red, FILL.red, 12)),
  S('remember でも同じことが起こります。remember to do は「これから〜するのを覚えている」、remember doing は「過去に〜したのを覚えている」です。❓なぜ、to は未来なのでしょう。to は「〜へ向かう」というイメージなので、これから向かう動作を表すからです。',
    ln(30, 70, 290, 70, C.gray, false, 2), ci(160, 70, 6, undefined, C.main, FILL.warm), lb(160, 52, '今', 12, C.main), lb(75, 52, '過去', 12, C.green, 'middle', true), lb(245, 52, '未来', 12, C.blue, 'middle', true), lb(75, 96, 'remember doing', 12, C.green, 'middle', true), lb(245, 96, 'remember to do', 12, C.blue, 'middle', true), cap('to は これから　ing は すでに', C.blue, FILL.blue)),
  S('例です。Remember to lock the door. は「忘れずにドアにかぎをかけなさい」です。❓なぜ命令として使えるのでしょう。lock はこれからする動作で、to lock は「これからかぎをかけること」を指すので、「忘れないで」という意味になるからです。',
    ...chips(24, [B('Remember', 1.2), B('to lock the door.', 1.8)], { h: 36 }), ar(210, 66, 210, 86, C.blue), lb(210, 102, 'これからする', 12, C.blue, 'middle', true), say(130, '（忘れずにドアにかぎをかけなさい）'), cap('remember to do ＝ 忘れずに〜する', C.blue, FILL.blue)),
  S('remember doing なら、意味は変わります。I remember locking the door. は「かぎをかけたのを覚えている」です。❓なぜ過去なのでしょう。locking はすでにしたことを表す ing形だからです。「かけたこと」を今、思い出しているのです。',
    ...chips(24, [B('I remember', 1.2), G('locking the door.', 1.8)], { h: 36 }), ar(210, 66, 210, 86, C.green), lb(210, 102, 'すでにした', 12, C.green, 'middle', true), say(130, '（かぎをかけたのを覚えている）'), cap('remember doing ＝ 〜したのを覚えている', C.green, FILL.green)),
  S('forget も、remember と同じ使い分けです。I forgot to call him. は「電話するのを忘れた（電話していない）」、I forgot calling him. は「電話したことを忘れていた」です。❓なぜ同じなのでしょう。to と ing の性質が、動詞が変わっても変わらないからです。',
    ...chips(24, [B('forget to do', 1), K('これからするのを忘れる', 1.6)], { h: 34, size: 11 }), ...chips(66, [G('forget doing', 1), K('したことを忘れる', 1.6)], { h: 34, size: 11 }), say(116, 'remember とセットで覚える'), cap('to は これから　ing は すでに', C.blue, FILL.blue)),
  S('try も同じです。try to do は「〜しようとする」、try doing は「ためしに〜してみる」です。❓なぜでしょう。to はこれからやろうとする努力、ing はやってみた結果を表すからです。まとめると、to は目的や未来、ing はすでにや実際、と考えます。',
    ...chips(24, [B('try to do', 1), K('しようとする', 1)], { h: 34 }), ...chips(66, [G('try doing', 1), K('ためしにしてみる', 1)], { h: 34 }), cap('stop・remember・forget・try は、形で意味が変わる', C.blue, FILL.blue, 12, 130)),
]);

// ══ 8 疑問詞＋不定詞 ══
const gimonshi: DiagramFigure = show([
  S('疑問詞に to 不定詞をつなぐと、「〜のしかた」「何を〜すべきか」のような意味のかたまりになります。❓なぜつなぐのでしょう。I do not know how I should do it. のような長い文を、how to do it と短く言えるからです。',
    ...chips(28, [B('how', 1), G('to', 0.7), Y('do', 1)], { h: 40, size: 15 }), say(86, '＝ しかた（どうやって〜するか）'), cap('疑問詞 ＋ to ＋ 動詞の原形', C.blue, FILL.blue)),
  S('how to は「〜のしかた」です。how to use it は「それの使い方」です。❓なぜ「しかた」になるのでしょう。how は「どうやって」を表し、to use は「使うこと」なので、合わせて「どうやって使うか」つまり使い方になるからです。',
    ...chips(28, [B('how', 1), G('to use', 1.2), K('it', 0.8)], { h: 38, size: 14 }), say(82, 'どうやって ＋ 使う ＝ 使い方'), cap('how to do ＝ 〜のしかた', C.blue, FILL.blue)),
  S('what to は「何を〜すべきか」です。where to は「どこへ〜すべきか」です。❓なぜ「〜すべき」がつくのでしょうか。to 不定詞には「これからすること」という意味があるので、「これからするべきこと」というニュアンスが出るからです。',
    ...chips(24, [B('what to do', 1), K('何をすべきか', 1)], { h: 34 }), ...chips(66, [G('where to go', 1), K('どこへ行くべきか', 1)], { h: 34 }), say(116, 'to ＝ これからすること'), cap('what to / where to ＝ 〜すべきか', C.green, FILL.green)),
  S('when to と which to もあります。when to start は「いつ始めるべきか」、which to choose は「どちらを選ぶべきか」です。❓形はどれも同じでしょうか。はい。疑問詞のあとに to と動詞の原形が来る、という形はすべて共通です。',
    ...chips(24, [B('when to start', 1), K('いつ始めるべきか', 1)], { h: 34 }), ...chips(66, [G('which to choose', 1), K('どちらを選ぶべきか', 1)], { h: 34 }), say(116, '疑問詞 ＋ to ＋ 原形'), cap('形はすべて同じ', C.blue, FILL.blue)),
  S('このかたまりは、文の中で名詞のはたらきをします。❓なぜ名詞なのでしょう。「しかた」「すべきこと」という中身を表すので、名詞と同じように扱えるからです。I know how to swim. では know の目的語になっています。',
    ...chips(26, [B('I know', 1), G('how to swim.', 1.4)], { h: 36 }), lb(210, 84, '名詞のかたまり（know の目的語）', 11, C.green, 'middle', true), ...chips(108, [G('How to use it', 1.3), B('is difficult.', 1)], { h: 34 }), lb(112, 158, '主語にもなる', 11, C.green, 'middle', true), cap('疑問詞 ＋ to ＝ 名詞のはたらき', C.green, FILL.green)),
  S('例題です。Please tell me ( ) ( ) get to the station. に入るのは how to です。❓なぜ how to なのでしょう。「駅への行き方」を言いたいので、「しかた」を表す how to が合うからです。tell me の後ろの名詞のかたまりとして入ります。',
    ...chips(24, [K('Please tell me', 1.3), R('how to', 1), K('get to the station.', 1.7)], { h: 36, size: 11 }), say(74, '（駅への行き方を教えてください）'), cap('行き方 → how to get to 〜', C.blue, FILL.blue)),
  S('間接疑問文に書きかえることもできます。I do not know what to do. は I do not know what I should do. になります。❓なぜ should を使うのでしょう。to 不定詞の「〜すべき」という意味を、should が同じように表すからです。',
    ...chips(24, [B('I do not know what to do.', 1)], { h: 34 }), ar(160, 62, 160, 82, C.gray), ...chips(86, [G('I do not know what I should do.', 1)], { h: 34, size: 12 }), say(138, 'to do ＝ I should do'), cap('疑問詞 ＋ to do ＝ 疑問詞 ＋ 主語 ＋ should ＋ 動詞', C.green, FILL.green, 11)),
  S('例外があります。why to do という形はありません。❓なぜ why だけないのでしょう。why は「理由」をたずねる語で、「理由をこれからするべき」という意味にならないからです。理由を言うときは why の文（節）を使います。',
    ...chips(24, [R('why to do', 1), K('×', 0.4)], { h: 34 }), ...chips(66, [G('why he did it', 1), K('○', 0.4)], { h: 34 }), say(116, 'why は主語と動詞の文を使う'), cap('why ＋ to は使わない', C.red, FILL.red)),
  S('まとめです。how to（しかた）、what to（何を）、where to（どこへ）、when to（いつ）、which to（どちら）は、名詞のかたまりで、〜すべき、の意味を含みます。why だけは例外です。',
    ...chips(22, [B('how to　しかた', 1)], { h: 26, size: 12 }), ...chips(52, [G('what to　何を', 1)], { h: 26, size: 12 }), ...chips(82, [Y('where to　どこへ', 1)], { h: 26, size: 12 }), ...chips(112, [P('when / which to　いつ・どちら', 1)], { h: 26, size: 12 }), cap('why to はない', C.red, FILL.red, 13, 150)),
]);

// ══ 9 make・let・help と原形不定詞 ══
const shieki: DiagramFigure = show([
  S('make, let, have は「人に〜させる」という意味で使う動詞です。後ろは ＋ 人 ＋ 動詞の原形で、to はつけません。❓なぜ to をつけないのでしょう。この3つは、人に直接はたらきかけて、すぐにそうさせる動詞だからです。「これから〜へ向かう」という to の意味がいらないのです。',
    ...chips(28, [B('make', 1), G('人', 0.8), R('原形', 1)], { h: 40, size: 14 }), lb(160, 88, '（to をつけない）', 12, C.red, 'middle', true), cap('make・let・have ＋ 人 ＋ 動詞の原形', C.blue, FILL.blue)),
  S('3つは、させ方の強さがちがいます。make は「強制的に〜させる」、let は「許して〜させる」、have は「頼んで〜してもらう」です。❓なぜ分けるのでしょう。同じ「させる」でも、相手の気持ちに逆らうか、許すか、頼むかで、言いたいことがちがうからです。',
    ...chips(24, [R('make', 1), K('（強制的に）〜させる', 2)], { h: 34 }), ...chips(66, [G('let', 1), K('（許して）〜させる', 2)], { h: 34 }), ...chips(108, [B('have', 1), K('（頼んで）〜してもらう', 2)], { h: 34 }), cap('させ方の強さ・気持ちがちがう', C.blue, FILL.blue, 12)),
  S('例題です。My mother made me clean my room. は「母は私に部屋をそうじさせた」です。❓なぜ cleaned や to clean ではないのでしょう。made のあとの me に「そうじさせる」ので、動詞の原形をそのまま置くと決まっているからです。',
    ...chips(26, [B('My mother', 1.2), R('made', 1), G('me', 0.7), Y('clean', 1)], { h: 36, size: 11 }), say(76, 'clean my room（部屋をそうじする）'), say(100, '（母は私に部屋をそうじさせた）', C.gray), cap('made ＋ 人 ＋ 原形（× to clean）', C.red, FILL.red)),
  S('誤りを直します。Let me to know. は誤りで、Let me know. が正解です。❓なぜ to をとるのがだめなのでしょう。let の後ろは、to のつかない原形（原形不定詞）を使うきまりだからです。make, have も同じです。',
    ...chips(24, [R('Let me to know.', 1), K('×', 0.3)], { h: 34 }), ar(160, 62, 160, 80, C.gray), ...chips(84, [G('Let me know.', 1), K('○', 0.3)], { h: 34 }), cap('let ＋ 人 ＋ 原形（to をつけない）', C.green, FILL.green)),
  S('help は少しちがいます。help ＋ 人 ＋ 原形も、help ＋ 人 ＋ to 不定詞も使えます。❓なぜ両方使えるのでしょう。help は「手伝う」という意味で、させるというより、いっしょに動く動詞なので、to があってもなくても意味が変わらないからです。',
    ...chips(24, [B('help him', 1), G('study', 1)], { h: 34 }), ...chips(66, [B('help him', 1), G('to study', 1)], { h: 34 }), say(116, 'どちらも「彼が勉強するのを手伝う」'), cap('help は to があってもなくてもよい', C.blue, FILL.blue)),
  S('see, hear, feel などの知覚動詞も、原形をとります。I saw him cross the street. は「彼が通りを渡りきるところを見た」です。❓なぜ原形なのでしょう。見たのは、その動作のはじめから終わりまで全部だからです。',
    ...chips(24, [B('I saw', 1), G('him', 0.8), R('cross', 1), K('the street.', 1.4)], { h: 36, size: 11 }), say(74, '見た ＋ 人 ＋ 原形'), say(98, '（渡りきるところまで見た）', C.gray), cap('知覚動詞 ＋ 人 ＋ 原形', C.green, FILL.green)),
  S('知覚動詞のあとを ing形にすると、意味が少し変わります。I saw him crossing the street. は「渡っている途中を見た」です。❓なぜ変わるのでしょう。ing形は「今している途中」を表すからです。どちらも正しい形ですが、どこを見たかがちがいます。',
    ...chips(24, [B('I saw him', 1.3), R('cross', 1)], { h: 34 }), say(70, '全部（渡りきる）を見た', C.red), ...chips(90, [B('I saw him', 1.3), G('crossing', 1)], { h: 34 }), say(140, '途中（渡っているところ）を見た', C.green), cap('原形 ＝ 全体　　ing形 ＝ 途中', C.blue, FILL.blue)),
  S('大事な例外です。受動態にすると、to が復活します。He was made to go there. のようになります。❓なぜ to が戻るのでしょう。was made go と動詞が2つ並ぶと、文の切れ目が分かりにくくなるので、to を置いて区切るからです。',
    ...chips(24, [B('She made him go.', 1)], { h: 32 }), ar(160, 60, 160, 78, C.gray), ...chips(82, [G('He was made to go there.', 1)], { h: 34 }), say(134, '受け身では to が復活する'), cap('be made ＋ to ＋ 原形', C.red, FILL.red)),
  S('まとめです。make・let・have は「人 ＋ 原形」で to はつけません。help はどちらも可。知覚動詞も原形。ただし受動態では to が復活します。「to は使わない」だけでなく、「なぜ」もいっしょに覚えると強くなります。',
    ...chips(22, [R('make / let / have ＋ 人 ＋ 原形', 1)], { h: 28, size: 11 }), ...chips(56, [B('help ＋ 人 ＋ 原形 / to 不定詞', 1)], { h: 28, size: 11 }), ...chips(90, [G('see / hear / feel ＋ 人 ＋ 原形', 1)], { h: 28, size: 11 }), ...chips(124, [Y('受け身 ＝ to が復活', 1)], { h: 28, size: 12 }), cap('to をつけるかは、動詞ごとに決まる', C.blue, FILL.blue)),
]);

// ══ 10 目的格の関係代名詞と省略 ══
const kankei: DiagramFigure = show([
  S('関係代名詞は、名詞をあとからくわしく説明する文をつなぐ語です。❓なぜ必要なのでしょう。The book I read のように、名詞のあとに文をつなげると、「どんな本か」をくわしく言えるからです。まず、主格と目的格を見分けます。',
    hd('名詞を、あとから文でくわしく説明する'), ...chips(40, [B('The man', 1), G('who lives here', 1.5)], { h: 36 }), say(94, '名詞 ＋ 説明の文'), cap('主格と目的格を見分ける', C.blue, FILL.blue)),
  S('主格は、関係代名詞が説明の文の主語になる形です。The man who lives here is kind. の who は、lives の主語です。❓なぜ主格は省略できないのでしょうか。who を消すと The man lives here となり、動詞だけが名詞の後ろに残って、文の切れ目が分からなくなるからです。',
    ...chips(24, [B('The man', 1), G('who', 0.6), Y('lives here', 1)], { h: 34 }), lb(160, 76, 'who ＝ lives の主語', 12, C.green, 'middle', true), ...chips(96, [R('The man lives here', 1), K('is kind.', 0.6)], { h: 34 }), lb(160, 146, '消すと、文が2つの動詞でつながらない', 11, C.red, 'middle'), cap('主格は省略できない', C.red, FILL.red)),
  S('目的格は、関係代名詞が説明の文の目的語になる形です。The book (which) I read was good. の which は、read の目的語です。❓なぜ目的格は省略できるのでしょう。省略しても、名詞のあとに「主語＋動詞」が続くので、説明の文だと分かるからです。',
    ...chips(24, [B('The book', 1), G('(which)', 1), Y('I read', 1)], { h: 34 }), lb(160, 76, 'which ＝ read の目的語', 12, C.green, 'middle', true), ...chips(96, [B('The book', 1), Y('I read', 1), K('was good.', 1)], { h: 34 }), lb(160, 146, '消しても、主語＋動詞が続くので分かる', 11, C.green, 'middle'), cap('目的格は省略できる', C.green, FILL.green)),
  S('見分けるポイントは、関係代名詞のあとに何が来るかです。名詞のすぐあとに「主語＋動詞」が続いていれば、目的格が省略されています。❓なぜそう言えるのでしょう。目的格の後ろには、説明の文の主語がそのまま来るからです。',
    ...chips(24, [B('The book', 1), Y('I read', 1)], { h: 34 }), say(70, '主語(I)＋動詞(read)  → 省略されている', C.green), ...chips(88, [B('The book', 1), G('which is on the desk', 1.4)], { h: 34, size: 11 }), say(128, 'すぐ動詞  → 主格（省略できない）', C.red), cap('直後が 主語＋動詞 → 省略', C.blue, FILL.blue)),
  S('例題です。This is the letter he wrote. で省略されているのは which（または that）です。❓なぜ分かるのでしょう。the letter のすぐあとに he wrote と、主語＋動詞が続いているからです。手紙は wrote の目的語なので、目的格です。',
    ...chips(24, [B('This is', 1), B('the letter', 1), G('(which)', 1), Y('he wrote.', 1)], { h: 36, size: 11 }), ar(220, 66, 220, 86, C.green), lb(220, 102, 'ここに省略', 12, C.green, 'middle', true), cap('the letter ＋ 主語＋動詞 → 目的格の省略', C.green, FILL.green, 12)),
  S('前置詞の目的語のときも、省略できます。This is the house (which) I live in. の which は in の目的語です。❓なぜ in が後ろに残っているのでしょう。live in the house の in が、文の後ろに残った形だからです。which を消しても意味は変わりません。',
    ...chips(24, [B('This is', 1), B('the house', 1.1), G('(which)', 1), Y('I live in.', 1.2)], { h: 36, size: 11 }), lb(160, 82, 'live in the house → the house I live in', 11, C.blue, 'middle'), cap('前置詞が残っても、省略できる', C.green, FILL.green)),
  S('例題です。The girl ( ) is singing is my sister. の( )に入る語は who で、主格なので省略できません。❓なぜ主格だと分かるのでしょう。( ) の後ろが is singing と、動詞から始まっているからです。主語が抜けているので、who が主語の役をしています。',
    ...chips(24, [B('The girl', 1), R('who', 0.7), Y('is singing', 1.2), K('is my sister.', 1.3)], { h: 36, size: 11 }), lb(160, 82, 'who の後ろが動詞 → 主格', 12, C.red, 'middle', true), cap('who ＋ 動詞 → 主格。省略できない', C.red, FILL.red)),
  S('who と which と that の使い分けです。人なら who か whom、物なら which、どちらでも that が使えます。❓なぜ that が便利なのでしょう。先行詞が人でも物でも、主格でも目的格でも使えるからです。ただし、前置詞の直後には使えません。',
    ...chips(24, [B('人', 0.5), G('who / whom', 1.2), K('/ that', 0.8)], { h: 32 }), ...chips(64, [Y('物', 0.5), G('which', 1.2), K('/ that', 0.8)], { h: 32 }), say(112, 'that は人にも物にも使える'), cap('省略できるのは目的格だけ', C.blue, FILL.blue)),
  S('まとめです。名詞のあとに「主語＋動詞」が続いたら、目的格が省略されています。名詞のあとがいきなり動詞なら、主格で、省略されていません。この見分けができると、長い文もすばやく読めます。',
    ...chips(24, [G('The book I read', 1.5), K('省略あり', 1)], { h: 34 }), ...chips(66, [R('The book which is here', 1.5), K('省略なし', 1)], { h: 34, size: 11 }), cap('主語＋動詞 → 省略　動詞 → 主格', C.blue, FILL.blue, 12, 130)),
]);

// ══ 11 関係代名詞 what と that の使い分け ══
const whatThat: DiagramFigure = show([
  S('what と that は、どちらも名詞をつなぐ働きがありますが、使い方がちがいます。❓なぜちがうのでしょう。what は「〜するもの・こと」という意味の中に、先行詞（説明される名詞）がすでに入っているからです。that は先行詞が必要です。',
    ...chips(28, [B('what', 1), K('先行詞をふくむ', 1.4)], { h: 38, size: 13 }), ...chips(78, [G('that', 1), K('先行詞が必要', 1.4)], { h: 38, size: 13 }), cap('先行詞があるかないかが、分かれ目', C.blue, FILL.blue)),
  S('what ＝ the thing(s) which です。This is what I want. は「これが私のほしいものだ」です。❓なぜ what は「もの」の意味を持つのでしょう。the thing which を1語にまとめた形なので、「もの」と「〜する」の両方をふくんでいるからです。',
    ...chips(26, [G('the thing which', 1.4), K('＝', 0.3), B('what', 0.8)], { h: 36 }), say(76, '2語ぶんを1語にまとめた'), ...chips(96, [B('This is', 1), B('what I want.', 1.5)], { h: 34 }), cap('what ＝ 〜するもの・こと', C.blue, FILL.blue)),
  S('書きかえてみます。This is the thing which I need. は、the thing which を what にして This is what I need. と書けます。❓なぜ the thing が消えるのでしょう。what の中に「もの」の意味が入っているので、the thing を残すと二重になるからです。',
    ...chips(24, [B('This is the thing which I need.', 1)], { h: 34, size: 12 }), ar(160, 62, 160, 82, C.gray), ...chips(86, [G('This is what I need.', 1)], { h: 34 }), say(138, 'the thing which → what'), cap('先行詞ごと what にまとめる', C.green, FILL.green)),
  S('だから、what の前には先行詞を置けません。the thing what は誤りです。❓なぜでしょう。「もの」を二回言うことになるからです。What he said is true. のように、what から始まるかたまりが、そのまま主語や目的語になります。',
    ...chips(24, [R('the thing what I need', 1), K('×', 0.3)], { h: 34 }), ...chips(66, [G('What he said is true.', 1), K('○', 0.3)], { h: 34 }), say(116, 'what のかたまりが主語になる'), cap('what の前に先行詞は置けない', C.red, FILL.red)),
  S('例題です。Show me what you bought. の意味は「あなたが買ったものを見せてください」です。❓なぜ「ものを」と訳すのでしょう。what you bought は「あなたが買ったもの」というひとまとまりの名詞で、show の目的語だからです。',
    ...chips(24, [B('Show me', 1), G('what you bought.', 1.5)], { h: 34 }), say(70, 'what you bought ＝ あなたが買ったもの'), say(92, '（あなたが買ったものを見せてください）'), cap('what ＋ 主語 ＋ 動詞 ＝ 〜するもの', C.blue, FILL.blue)),
  S('次は that です。that は先行詞のあとに置く語で、人にも物にも使えます。❓なぜ前に名詞が必要なのでしょう。that は説明の文を前の名詞につなぐ役目だけで、「もの」の意味はふくまないからです。',
    ...chips(24, [B('the book', 1), G('that', 0.7), K('I read', 1)], { h: 34 }), lb(160, 76, 'that は、前の名詞（the book）をくわしくする', 11, C.green, 'middle'), cap('that ＝ 先行詞のあとに置く', C.green, FILL.green)),
  S('先行詞に最上級・the only・the first・all などがつくと、that が好まれます。❓なぜでしょう。「一番」「ただ1つ」のような強い限定の語がついていると、which よりも that のほうが、その限定をそのまま受ける形で自然に聞こえるからです。',
    ...chips(24, [B('the most interesting book', 1.6), G('that', 0.6), K('I have ever read', 1.3)], { h: 36, size: 10 }), say(78, '最上級がついている → that', C.green), ...chips(100, [Y('the only / the first / all', 1.3), G('that', 0.5)], { h: 34, size: 11 }), cap('最上級・the only のあとは that', C.green, FILL.green)),
  S('使えない場面もあります。前置詞の直後には that を使えません。❓なぜでしょう。that は前置詞とすぐ組み合わせない語だからです。in that house のような形はふつう使わず、in which のように which を使います。先行詞が人と物の両方のときは that です。',
    ...chips(24, [G('in which', 1), K('○', 0.3)], { h: 32 }), ...chips(62, [R('in that', 1), K('×', 0.3)], { h: 32 }), ...chips(102, [Y('人 と 物', 0.8), G('that', 0.5)], { h: 32 }), say(146, '人と物の両方 → that'), cap('前置詞の直後には that は使えない', C.red, FILL.red)),
  S('まとめです。what は先行詞をふくむので、前に名詞を置きません。that は先行詞が必要です。最上級・the only のあとは that を選びます。「先行詞があるか」を見れば、迷いません。',
    ...chips(24, [B('what', 1), K('先行詞なし（ふくむ）', 2)], { h: 34 }), ...chips(66, [G('that', 1), K('先行詞あり', 2)], { h: 34 }), ...chips(108, [Y('最上級など', 1), K('→ that', 2)], { h: 34 }), cap('先行詞があるかを、まず見る', C.blue, FILL.blue)),
]);

export const DIAGRAMS_OLD_EIGOC: Record<string, DiagramFigure> = {
  場面別の決まり文句: scenes,
  '5つの文型と動詞の後ろの形': bunkei,
  There構文と存在を表す言い方: there,
  名詞の数と冠詞の使い分け: meishi,
  代名詞の格と再帰代名詞: daimeishi,
  目的語の形が決まっている動詞: mokuteki,
  'stop と remember の意味の変化': stopRem,
  '疑問詞＋不定詞': gimonshi,
  'make・let・help と原形不定詞': shieki,
  目的格の関係代名詞と省略: kankei,
  '関係代名詞 what と that の使い分け': whatThat,
};

// ci, ln, P, Y は一部のスライドで使う
void ci;
