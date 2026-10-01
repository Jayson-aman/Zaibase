// 中学受験 英語（小学生向け・new20 小5〜小6）の単元に、動く図解スライドを1つずつ。
// 「なぜ？」の連鎖で7枚以上。上に図、下の帯（band）にそのスライドのひとこと。英文は英語の単元なので図に入れる。
import type { DiagramFigure } from './figures';
import { show, bx, lb, ar, ln, ci, flow, dots, band, fresh, C, FILL } from './diagram-kit';

const cap = (t: string, color: string = C.ink, size = 12) => band(150, lb(160, 192, t, size, color, 'middle', true));
const cap2 = (t1: string, t2: string, color: string = C.ink) => band(150, lb(160, 170, t1, 11, C.gray, 'middle'), lb(160, 200, t2, 12, color, 'middle', true));

// ───────── new20_e5_eigo_11 誕生日パーティーの招待状を読む ─────────
const u11: DiagramFigure = show([
  {
    note: '英語の招待状（しょうたいじょう）の例です。招待状には決まった書き方があるので、型を知っていれば、はじめて見る招待状でもすばやく読めます。まず全体をながめましょう。',
    add: [bx(24, 6, 272, 138, undefined, C.main, FILL.warm), lb(160, 24, 'You are invited to', 13, C.ink, 'middle', true), lb(160, 44, 'my birthday party!', 14, C.red, 'middle', true), lb(44, 70, 'Date: Saturday, May 10', 12, C.ink, 'start', true), lb(44, 92, 'Time: 2:00 p.m. to 4:00 p.m.', 12, C.ink, 'start', true), lb(44, 114, 'Place: my house', 12, C.ink, 'start', true), lb(160, 134, 'Please let me know if you can come.', 10, C.gray, 'middle'), ...cap('これが英語の招待状')],
  },
  {
    note: '❓最初の一文は、なぜ「You are invited to」なのでしょう。→ 「あなたは招待（しょうたい）されています」と相手によびかける決まった言い方だからです。be invited to で「〜に招待される」という意味になります。Please come to my birthday party. や Join us for a party! も同じように使われます。',
    add: fresh(bx(20, 12, 280, 34, 'You are invited to', C.blue, FILL.blue, 14), ar(160, 48, 160, 68, C.main), bx(20, 70, 280, 34, '〜に 招待されています', C.main, FILL.warm, 14), bx(20, 112, 280, 28, 'be invited to ＝ 〜に招待される', C.green, FILL.green, 12), ...cap('「される」の形で、さそいを伝える', C.blue)),
  },
  {
    note: '❓次に Date・Time・Place の3つが並ぶのはなぜでしょう。→ 参加するために、いちばん先に知りたいのが「いつ・何時に・どこへ行くか」だからです。箇条書き（かじょうがき）で並ぶことが多いので、一行ずつ落ち着いて確認（かくにん）すれば、そのまま得点につながります。日時（にちじ）は日付と時刻です。',
    add: fresh(bx(14, 10, 110, 34, 'Date:', C.blue, FILL.blue, 14), lb(140, 27, '日付 … いつの日？', 13, C.ink, 'start', true), bx(14, 54, 110, 34, 'Time:', C.green, FILL.green, 14), lb(140, 71, '時刻 … 何時？', 13, C.ink, 'start', true), bx(14, 98, 110, 34, 'Place:', C.red, FILL.red, 14), lb(140, 115, '場所 … どこで？', 13, C.ink, 'start', true), ...cap('いつ・何時・どこで、の3つ', C.main)),
  },
  {
    note: '❓「2:00 p.m. to 4:00 p.m.」は、何時から何時までなのでしょう。→ p.m. は午後（ごご）のしるしなので、午後2時から午後4時までです。午前（ごぜん）なら a.m. です。2時から4時までなので、パーティーは2時間（かん）です。',
    add: fresh(ln(40, 66, 280, 66, C.gray), ln(40, 56, 40, 76, C.blue, false, 2.4), ln(280, 56, 280, 76, C.red, false, 2.4), bx(60, 44, 200, 22, '2時間', C.green, FILL.green, 12), lb(40, 92, '2:00 p.m.', 13, C.blue, 'middle', true), lb(280, 92, '4:00 p.m.', 13, C.red, 'middle', true), lb(160, 126, 'p.m.＝午後　a.m.＝午前', 13, C.ink, 'middle', true), ...cap('to は「〜から…まで」の「まで」', C.green)),
  },
  {
    note: '❓出席できるかどうかは、どうたずねるのでしょう。→ Please let me know if you can come. です。let me know は「私に知らせて」、if は「〜かどうか」なので、「来られるかどうか教えてください」となります。RSVP by May 5. は「5月5日までに返事をください」という決まった書き方で、返事の期限（きげん）を示します。',
    add: fresh(bx(8, 10, 142, 36, 'Please let me\nknow', C.blue, FILL.blue, 12), bx(160, 10, 152, 36, 'if you can come.', C.green, FILL.green, 12), lb(79, 62, '知らせてください', 12, C.blue, 'middle', true), lb(236, 62, '来られるかどうか', 12, C.green, 'middle', true), bx(40, 86, 240, 32, 'RSVP by May 5.', C.red, FILL.red, 14), lb(160, 134, '5月5日までに返事を', 12, C.red, 'middle', true), ...cap('if ＝ 〜かどうか', C.blue)),
  },
  {
    note: '❓持ち物や服装（ふくそう）は、どう伝えるのでしょう。→ bring は「持ってくる」、wear は「身につける」です。You don\'t have to bring anything. は「何も持ってこなくていい」という意味で、have to の前に don\'t が付くと「〜しなくていい」になります。',
    add: fresh(bx(8, 10, 190, 30, 'Please bring a gift.', C.blue, FILL.blue, 11), lb(204, 25, 'プレゼントを持ってきて', 11, C.ink, 'start', true), bx(8, 52, 190, 30, "You don't have to bring anything.", C.green, FILL.green, 10), lb(204, 67, '何も持ってこなくていい', 11, C.ink, 'start', true), bx(8, 94, 190, 30, 'Wear something blue.', C.purple, FILL.purple, 11), lb(204, 109, '青いものを身につけて', 11, C.ink, 'start', true), ...cap('bring ＝ 持ってくる　wear ＝ 身につける', C.main, 11)),
  },
  {
    note: '❓問題を解くときは、どんな順で読めばよいでしょう。→ ①だれがだれを招待しているか、②何のイベントか、③いつ・どこでか、④準備は何か（返事の期限・持ち物・服装）の4つをメモしながら読みます。選択肢で「4:00 p.m.から始まる」のように時刻が書きかえてあることがあるので、メモと見くらべれば気づけます。',
    add: fresh(bx(14, 6, 292, 26, '① だれが だれを招待？', C.blue, FILL.blue, 12), bx(14, 36, 292, 26, '② 何のイベント？', C.green, FILL.green, 12), bx(14, 66, 292, 26, '③ いつ・どこで？（Date・Time・Place）', C.red, FILL.red, 12), bx(14, 96, 292, 26, '④ 準備は？（返事・持ち物・服装）', C.purple, FILL.purple, 12), lb(160, 138, '時刻の書きかえに注意', 12, C.red, 'middle', true), ...cap('4つをメモしながら読む', C.main)),
  },
  {
    note: 'まとめです。招待状は、①書き出し（You are invited to）、②Date・Time・Place、③返事（let me know / RSVP）、④持ち物と服装（bring / wear）の順に書かれます。この型を頭に入れて読みましょう。',
    add: fresh(...flow(['さそう\ninvited to', 'いつ・どこ\nDate\nTime\nPlace', '返事\nlet me know\nRSVP', '準備\nbring\nwear'], 20, { h: 78, size: 10, color: C.blue, fill: FILL.blue, gap: 8, pad: 6 }).flat(), ...cap('型を知れば、すばやく読める', C.green)),
  },
], '招待状の型：招待→日時・場所→返事→準備');

// ───────── new20_e5_eigo_12 好き嫌い・食べられないものを伝える表現 ─────────
const lad = (y: number, en: string, ja: string, c: string, f: string) => [bx(10, y, 200, 22, en, c, f, 11), lb(220, y + 11, ja, 11, C.ink, 'start', true)];
const u12: DiagramFigure = show([
  {
    note: '食べ物の好ききらいは、はしごのように強さを分けて言いわけます。いちばん上が love（大好き）、その下が like（好き）、さらに don\'t like ~ very much（あまり好きではない）、don\'t like（好きではない）、いちばん下が hate（大きらい）です。',
    add: [...lad(6, 'I love natto.', '大好き', C.red, FILL.red), ...lad(32, 'I like carrots.', '好き', C.main, FILL.warm), ...lad(58, "I don't like carrots very much.", 'あまり好きでない', C.green, FILL.green), ...lad(84, "I don't like green peppers.", '好きではない', C.blue, FILL.blue), ...lad(110, 'I hate mushrooms.', '大きらい', C.purple, FILL.purple), ...cap('好きの強さのはしご')],
  },
  {
    note: '❓なぜ very much を付けると「あまり」になるのでしょう。→ 「ものすごく好き、というわけではない」と、ほどほどに打ち消す言い方になるからです。hate は強い「きらい」なので、使う場面に注意しましょう。まず don\'t like very much くらいから使うと、言い方がやわらかくなります。',
    add: fresh(bx(14, 14, 292, 34, "I don't like carrots.", C.blue, FILL.blue, 13), lb(160, 66, '好きではありません', 12, C.blue, 'middle', true), ar(160, 76, 160, 92, C.main), bx(14, 94, 292, 34, "I don't like carrots very much.", C.green, FILL.green, 13), lb(160, 140, '→ やわらかい言い方', 11, C.green, 'middle', true), ...cap('very much で やわらかくなる', C.green)),
  },
  {
    note: '❓好ききらいの理由は、どう伝えるのでしょう。→ 味を表すことばを使います。sweet（甘い〈あまい〉）、sour（すっぱい）、bitter（苦い〈にがい〉）、spicy（辛い〈からい〉）、salty（塩からい）の5つを覚えましょう。',
    add: fresh(bx(10, 8, 96, 36, 'sweet\nあまい', C.red, FILL.red, 12), bx(112, 8, 96, 36, 'sour\nすっぱい', C.green, FILL.green, 12), bx(214, 8, 96, 36, 'bitter\nにがい', C.purple, FILL.purple, 12), bx(60, 56, 96, 36, 'spicy\nからい', C.main, FILL.warm, 12), bx(164, 56, 96, 36, 'salty\nしおからい', C.blue, FILL.blue, 12), ...cap('味を表す5つのことば', C.main)),
  },
  {
    note: '❓理由をつけるには、どう続けるのでしょう。→ because（〜なので）を使います。I don\'t like green peppers because they are bitter. は「ピーマンは苦いのできらいです」。ピーマンは複数形（green peppers）なので、あとは they are になります。',
    add: fresh(bx(10, 10, 300, 32, "I don't like green peppers", C.blue, FILL.blue, 13), lb(160, 54, 'ピーマンは好きではありません', 11, C.blue, 'middle', true), bx(112, 70, 96, 26, 'because', C.red, FILL.red, 13), lb(160, 108, '〜なので（理由）', 11, C.red, 'middle', true), bx(60, 118, 200, 26, 'they are bitter.', C.purple, FILL.purple, 13), ...band(150, lb(160, 172, 'にがいから', 12, C.purple, 'middle', true), lb(160, 200, '理由は because のあとに', 12, C.main, 'middle', true))),
  },
  {
    note: '❓おいしい・まずいは、どう言うのでしょう。→ taste（〜の味がする）のあとに good か bad を置きます。It tastes good. は「おいしいです」、It tastes bad. は「まずいです」。',
    add: fresh(bx(20, 16, 130, 40, 'It tastes good.', C.green, FILL.green, 12), lb(85, 76, 'おいしいです', 12, C.green, 'middle', true), bx(170, 16, 130, 40, 'It tastes bad.', C.red, FILL.red, 12), lb(235, 76, 'まずいです', 12, C.red, 'middle', true), lb(160, 116, 'taste ＝ 〜の味がする', 13, C.ink, 'middle', true), ...cap('taste ＋ good / bad', C.main)),
  },
  {
    note: '❓食べたことがあるかどうかは、どう言うのでしょう。→ try（試す）を使います。I\'ve never tried natto. は「納豆を食べたことがありません」。never tried で「一度も試したことがない」という意味です。たずねるときは Have you ever tried sushi?（今までにお寿司を食べたことがありますか）と言います。',
    add: fresh(bx(10, 12, 300, 34, "I've never tried natto.", C.blue, FILL.blue, 13), lb(160, 62, '納豆を食べたことがありません', 12, C.blue, 'middle', true), bx(10, 82, 300, 34, 'Have you ever tried sushi?', C.green, FILL.green, 13), lb(160, 132, '今までにお寿司を食べたことがありますか', 11, C.green, 'middle', true), ...cap('never tried ＝ 一度も試したことがない', C.main, 11)),
  },
  {
    note: '❓好ききらいとアレルギーは、何がちがうのでしょう。→ don\'t like は「好みとして食べたくない」、allergic to は「食べると体に害がある」という意味だからです。体のことなので、はっきり伝える必要があります。会話文では、断る理由が好みなのかアレルギーなのかを読み分けましょう。',
    add: fresh(bx(10, 10, 142, 30, '好き・きらい', C.blue, FILL.blue, 13), bx(168, 10, 142, 30, 'アレルギー', C.red, FILL.red, 13), bx(10, 52, 142, 38, "I don't like\ncarrots.", C.blue, FILL.blue, 12), bx(168, 52, 142, 38, "I'm allergic\nto eggs.", C.red, FILL.red, 12), lb(81, 108, '好みの問題', 12, C.blue, 'middle', true), lb(239, 108, '体に害がある', 12, C.red, 'middle', true), lb(239, 134, 'be allergic to ＝\n〜にアレルギーがある', 10, C.red, 'middle'), ...cap('理由が ちがうので 伝え方も ちがう', C.main)),
  },
  {
    note: 'レストランの会話です。A「何か食べられないものはありますか」。B「はい、エビアレルギーです。この料理にエビは入っていますか」。A「いいえ、入っていません。大丈夫（だいじょうぶ）ですよ」。アレルギーの対象（たいしょう）は to のあとに置きます。',
    add: fresh(bx(8, 6, 304, 28, "A: Is there anything you can't eat?", C.blue, FILL.blue, 11), bx(8, 40, 304, 42, "B: Yes, I'm allergic to shrimp.\nDoes this dish have shrimp in it?", C.red, FILL.red, 11), bx(8, 88, 304, 28, "A: No, it doesn't. It's safe for you.", C.green, FILL.green, 11), lb(160, 134, 'allergic to のあとに、食べ物を置く', 11, C.red, 'middle', true), ...cap('食べられない物を、はっきり伝える', C.red)),
  },
  {
    note: 'まとめです。①好ききらいは love・like・don\'t like very much・don\'t like・hate の強さで言いわける。②理由は味のことば（bitter など）を because のあとに。③アレルギーは I\'m allergic to ~. ではっきり伝える。この3つを覚えましょう。',
    add: fresh(bx(10, 10, 300, 32, '① love ＞ like ＞ don\'t like ＞ hate', C.blue, FILL.blue, 12), bx(10, 50, 300, 32, '② because they are bitter.（味の理由）', C.green, FILL.green, 12), bx(10, 90, 300, 32, "③ I'm allergic to ~.（体に害がある）", C.red, FILL.red, 12), ...cap('好みとアレルギーは、分けて伝える', C.main)),
  },
], '好ききらいとアレルギーの伝え方');

// ───────── new20_e5_eigo_13 家族それぞれの一日を紹介する英文を読む ─────────
const u13: DiagramFigure = show([
  {
    note: '家族それぞれの一日を紹介する文章です。父、母、私と、文が進むごとに主語（だれの話か）が変わっています。色で分けてみましょう。主語の切りかわりを見落とすと、だれの行動か取りちがえてしまいます。',
    add: [lb(14, 14, 'My father gets up at six.', 12, C.blue, 'start', true), lb(14, 34, 'He goes jogging every morning.', 12, C.blue, 'start', true), lb(14, 62, 'My mother gets up at six thirty.', 12, C.green, 'start', true), lb(14, 82, 'She makes breakfast for the family.', 12, C.green, 'start', true), lb(14, 110, 'I get up at seven and have breakfast', 12, C.red, 'start', true), lb(14, 128, 'with my family.', 12, C.red, 'start', true), ...cap('色が変わるところが、主語の切りかわり')],
  },
  {
    note: '❓He や She は、だれのことでしょう。→ 一度名前が出たあとは、代名詞（だいめいし）の he・she に置きかわって話が続きます。My father のあとの He は父、My mother のあとの She は母です。代名詞がだれを指すかを、たどりながら読みましょう。',
    add: fresh(bx(10, 14, 120, 34, 'My father', C.blue, FILL.blue, 13), ar(132, 31, 188, 31, C.blue), bx(190, 14, 120, 34, 'He（かれ）', C.blue, FILL.blue, 13), bx(10, 66, 120, 34, 'My mother', C.green, FILL.green, 13), ar(132, 83, 188, 83, C.green), bx(190, 66, 120, 34, 'She（かのじょ）', C.green, FILL.green, 12), lb(160, 126, 'he・she は 直前の人を指す', 12, C.ink, 'middle', true), ...cap('代名詞が だれかを たどる', C.main)),
  },
  {
    note: '❓なぜ gets up や goes には s が付くのでしょう。→ 三人称単数（さんにんしょうたんすう）、つまり I と you 以外の「ひとり」が主語の現在の文では、動詞に -s を付けるきまりだからです。go は goes のように es が付くものもあります。I get up at seven. には s が付きません。',
    add: fresh(bx(10, 10, 140, 26, 'I  get up', C.red, FILL.red, 13), bx(170, 10, 140, 26, 'My father  gets up', C.blue, FILL.blue, 12), bx(170, 44, 140, 26, 'He  goes jogging', C.blue, FILL.blue, 12), bx(170, 78, 140, 26, 'She  makes breakfast', C.green, FILL.green, 12), lb(80, 56, 's が付かない', 12, C.red, 'middle', true), lb(80, 90, 'go → goes', 13, C.ink, 'middle', true), lb(80, 112, 'make → makes', 13, C.ink, 'middle', true), ...cap('ひとりの he・she・名前 → 動詞に s', C.blue)),
  },
  {
    note: '❓内容一致の問題を解くには、どう整理するとよいでしょう。→ 「だれが・何時に・何をするか」を表にまとめます。父は6時に起きてジョギング、母は6時半に起きて朝食を作る、私は7時に起きて家族と朝食です。',
    add: fresh(bx(8, 8, 56, 24, 'だれが', C.gray, FILL.gray, 11), bx(68, 8, 70, 24, '何時に', C.gray, FILL.gray, 11), bx(142, 8, 170, 24, '何を', C.gray, FILL.gray, 11), bx(8, 38, 56, 26, '父', C.blue, FILL.blue, 12), bx(68, 38, 70, 26, '6時', C.blue, FILL.blue, 12), bx(142, 38, 170, 26, 'ジョギング', C.blue, FILL.blue, 12), bx(8, 68, 56, 26, '母', C.green, FILL.green, 12), bx(68, 68, 70, 26, '6時半', C.green, FILL.green, 12), bx(142, 68, 170, 26, '朝食を作る', C.green, FILL.green, 12), bx(8, 98, 56, 26, '私', C.red, FILL.red, 12), bx(68, 98, 70, 26, '7時', C.red, FILL.red, 12), bx(142, 98, 170, 26, '家族と朝食', C.red, FILL.red, 12), ...cap('読みながら表をつくる', C.main)),
  },
  {
    note: '❓「お母さんが6時に起きる」は正しいでしょうか。→ まちがいです。母は six thirty、つまり6時半に起きます。表にまとめておけば、こうしたひっかけの選択肢（せんたくし）にもすぐ気づけます。',
    add: fresh(bx(10, 12, 300, 30, 'My mother gets up at six.（選択肢）', C.red, FILL.red, 12), lb(160, 62, '×  表では 母は 6時半', 14, C.red, 'middle', true), bx(10, 82, 300, 30, 'My mother gets up at six thirty.', C.green, FILL.green, 12), lb(160, 130, '○  six thirty ＝ 6時半', 14, C.green, 'middle', true), ...cap('表と見くらべて、ひっかけを見やぶる', C.red)),
  },
  {
    note: '❓人物のちがいは、どのことばで示されるのでしょう。→ while（〜する一方で）、on the other hand（他方では）、but（しかし）です。対比（たいひ）を表すことばを見つけると、「だれとだれがちがうのか」がすぐわかります。',
    add: fresh(bx(6, 6, 70, 38, 'while', C.blue, FILL.blue, 13), bx(80, 6, 234, 38, 'My father cooks dinner\nwhile my mother does the laundry.', C.blue, FILL.blue, 10), bx(6, 50, 70, 38, 'on the\nother hand', C.green, FILL.green, 10), bx(80, 50, 234, 38, 'My brother likes soccer.\nOn the other hand, I like swimming.', C.green, FILL.green, 10), bx(6, 94, 70, 38, 'but', C.red, FILL.red, 13), bx(80, 94, 234, 38, 'My sister gets up early,\nbut I get up late.', C.red, FILL.red, 10), ...cap('while・on the other hand・but ＝ くらべる合図', C.main, 11)),
  },
  {
    note: '❓too や also が出てきたら、何がわかるのでしょう。→ 直前の人物と同じ動作や状態が、別の人物にもあてはまるとわかります。My father likes fishing. My brother likes it, too. なら、父も兄も釣り（つり）が好きです。too は文の終わりに置かれることが多いです。',
    add: fresh(bx(10, 14, 90, 30, 'father', C.blue, FILL.blue, 13), bx(10, 82, 90, 30, 'brother', C.green, FILL.green, 13), bx(190, 46, 120, 34, 'fishing', C.main, FILL.warm, 14), ar(102, 32, 188, 56, C.blue), ar(102, 98, 188, 72, C.green), lb(145, 100, '… likes it, too.', 10, C.green, 'middle', true), lb(250, 100, 'too ＝ 〜も', 13, C.red, 'middle', true), ...cap('too は「同じ」の合図', C.red)),
  },
  {
    note: 'まとめです。家族の一日の文章は、①主語を見て、②he・she がだれかをたどり、③動詞の s を確かめ、④表にまとめ、⑤while や too の合図に注目する、の順に読むとまちがえません。',
    add: fresh(...flow(['主語を見る', 'he / she\nはだれ？', '動詞の s', '表に\nまとめる'], 22, { h: 70, size: 11, color: C.blue, fill: FILL.blue, gap: 12 }).flat(), lb(160, 118, 'while・too などの合図も見のがさない', 12, C.main, 'middle', true), ...cap('だれの話かを、いつも確かめる', C.green)),
  },
], '家族の一日：主語・he/she・表');

// ───────── new20_e5_eigo_14 学校行事のお知らせを読む ─────────
const ev = (y: number, en: string, ja: string, c: string, f: string) => [bx(10, y, 170, 22, en, c, f, 11), lb(190, y + 11, ja, 12, C.ink, 'start', true)];
const u14: DiagramFigure = show([
  {
    note: '学校行事のお知らせは、英語の読解でよく出ます。まず行事の名前を覚えましょう。Sports Day は運動会、Field Trip は遠足（えんそく）、School Festival は文化祭（ぶんかさい）、Music Festival は音楽会、Graduation Ceremony は卒業式（そつぎょうしき）です。',
    add: [...ev(6, 'Sports Day', '運動会', C.red, FILL.red), ...ev(32, 'Field Trip', '遠足', C.green, FILL.green), ...ev(58, 'School Festival', '文化祭（学園祭）', C.blue, FILL.blue), ...ev(84, 'Music Festival', '音楽会', C.purple, FILL.purple), ...ev(110, 'Graduation Ceremony', '卒業式', C.main, FILL.warm), ...cap('よく出る学校行事の名前')],
  },
  {
    note: '❓案内文が見出しで整理されているのは、なぜでしょう。→ 読む人が必要な情報をすぐ見つけられるようにするためです。When（いつ）、Where（どこで）、What to bring（何を持ってくるか）、What to wear（何を着るか）の見出しが基本です。',
    add: fresh(bx(10, 6, 300, 134, undefined, C.main, FILL.warm), lb(22, 24, 'When: Friday, October 10', 11, C.blue, 'start', true), lb(22, 50, 'Where: the school playground', 11, C.green, 'start', true), lb(22, 80, 'What to bring: a lunch box,\na water bottle, a towel', 11, C.red, 'start', true), lb(22, 114, 'What to wear: your gym clothes', 11, C.purple, 'start', true), ...cap('見出しごとに情報が並ぶ')),
  },
  {
    note: '❓見出しを、どう使って読めばよいのでしょう。→ 知りたいことを問題文から見つけて、同じ意味の見出しをさがします。「いつ？」なら When、「どこ？」なら Where、「持ち物は？」なら What to bring です。必要な場所だけをすばやく探す読み方を、スキャニングといいます。',
    add: fresh(bx(10, 10, 100, 26, 'いつ？', C.blue, FILL.blue, 12), ar(114, 23, 164, 23, C.blue), bx(168, 10, 142, 26, 'When:', C.blue, FILL.blue, 12), bx(10, 44, 100, 26, 'どこ？', C.green, FILL.green, 12), ar(114, 57, 164, 57, C.green), bx(168, 44, 142, 26, 'Where:', C.green, FILL.green, 12), bx(10, 78, 100, 26, '持ち物は？', C.red, FILL.red, 12), ar(114, 91, 164, 91, C.red), bx(168, 78, 142, 26, 'What to bring:', C.red, FILL.red, 12), bx(10, 112, 100, 26, '何を着る？', C.purple, FILL.purple, 12), ar(114, 125, 164, 125, C.purple), bx(168, 112, 142, 26, 'What to wear:', C.purple, FILL.purple, 12), ...cap('問いと見出しを むすぶ', C.main)),
  },
  {
    note: '❓集合の時刻（じこく）と出発の時刻は、どう書かれるのでしょう。→ Please meet at the school gate at 8:30. は「8時30分に校門に集合（しゅうごう）してください」。We will leave school at 9:00. は「9時に学校を出発します」。meet が集合、leave が出発です。8時30分から9時までは30分あります。',
    add: fresh(bx(10, 14, 300, 32, 'Please meet at the school gate at 8:30.', C.blue, FILL.blue, 11), lb(160, 60, '8時30分に校門に集合', 12, C.blue, 'middle', true), ar(160, 70, 160, 86, C.main), lb(200, 80, '30分後', 12, C.main, 'start', true), bx(10, 90, 300, 32, 'We will leave school at 9:00.', C.green, FILL.green, 11), lb(160, 138, '9時に学校を出発', 12, C.green, 'middle', true), ...band(150, lb(160, 192, 'meet ＝ 集合する　leave ＝ 出発する', 11, C.main, 'middle', true))),
  },
  {
    note: '❓注意のことばは、どう言うのでしょう。→ Don\'t forget to ~. は「〜するのを忘れないで」、Make sure to ~. は「必ず〜してください」、should not は「〜してはいけない」です。お金を持ってこないように、という注意などに使われます。',
    add: fresh(bx(6, 10, 188, 30, "Don't forget to bring a hat.", C.blue, FILL.blue, 11), lb(200, 25, '帽子を忘れないで', 11, C.ink, 'start', true), bx(6, 52, 204, 30, 'Make sure to wear comfortable shoes.', C.green, FILL.green, 10), lb(216, 67, '歩きやすい靴を必ず', 11, C.ink, 'start', true), bx(6, 94, 188, 30, 'Students should not bring money.', C.red, FILL.red, 10), lb(200, 109, 'お金は持ってこない', 11, C.ink, 'start', true), ...cap('忘れない・必ず・してはいけない', C.main)),
  },
  {
    note: '❓なぜ天気の情報を、最後まで読まないといけないのでしょう。→ 運動会や遠足は天気で変わるので、中止（ちゅうし）や延期（えんき）の情報が後ろのほうに書かれ、見落とされやすいからです。The event will be canceled if it rains. は雨なら中止、If it rains, Sports Day will be held on the next day. は雨なら翌日に開催（かいさい）です。',
    add: fresh(bx(110, 6, 100, 28, 'if it rains', C.blue, FILL.blue, 13), ar(130, 36, 60, 60, C.red), ar(160, 36, 160, 60, C.green), ar(190, 36, 260, 60, C.purple), bx(6, 62, 108, 52, 'will be canceled\n中止になる', C.red, FILL.red, 10), bx(116, 62, 90, 52, 'held on the\nnext day\n翌日に開催', C.green, FILL.green, 10), bx(208, 62, 106, 52, 'check the\nschool website\nウェブサイトを見る', C.purple, FILL.purple, 9), ...cap('雨のときの対応は、後ろに書かれる', C.red, 11)),
  },
  {
    note: '読解のコツです。案内文を読むときは、①いつ（When）、②どこで（Where）、③何を持っていくか（What to bring）、④天気が悪いときどうなるか、の4点をチェックリストのように確かめます。④は特に見落としやすいので、最後の行まで読みましょう。',
    add: fresh(bx(14, 8, 292, 26, '✓ ① いつ？  When', C.blue, FILL.blue, 12), bx(14, 38, 292, 26, '✓ ② どこで？  Where', C.green, FILL.green, 12), bx(14, 68, 292, 26, '✓ ③ 何を持っていく？  What to bring', C.purple, FILL.purple, 12), bx(14, 98, 292, 26, '✓ ④ 雨のときは？  If it rains', C.red, FILL.red, 12), ...cap('4点を ひとつずつ たしかめる', C.main)),
  },
  {
    note: 'まとめです。行事の案内文は、行事の名前、見出し（When・Where・What to bring）、集合・持ち物・注意のことば、天気の対応、の順で読みます。見出しを手がかりにすれば、必要な情報をすばやく見つけられます。',
    add: fresh(...flow(['行事の名前\nSports Day', '見出し\nWhen\nWhere', '集合・注意\nmeet\nDon\'t forget', '雨のとき\nIf it rains'], 20, { h: 80, size: 10, color: C.blue, fill: FILL.blue, gap: 8, pad: 6 }).flat(), ...cap('見出しを手がかりに すばやく読む', C.green)),
  },
], '行事の案内文：見出しで読む');

// ───────── new20_e5_eigo_15 禁止・注意を表す掲示・看板の英語 ─────────
const sign = (y: number, en: string, ja: string) => [ci(24, y + 14, 12, '×', C.red, FILL.red, 13), bx(44, y, 170, 28, en, C.red, FILL.red, 13), lb(224, y + 14, ja, 11, C.ink, 'start', true)];
const u15: DiagramFigure = show([
  {
    note: '街の看板でいちばん多い禁止の書き方は、No＋動詞の ing 形です。No smoking.（禁煙〈きんえん〉）、No parking.（駐車禁止〈ちゅうしゃきんし〉）、No swimming.（遊泳禁止〈ゆうえいきんし〉）。短くて、ひと目でわかります。',
    add: [...sign(8, 'No smoking.', 'たばこ きんし'), ...sign(46, 'No parking.', 'ちゅうしゃ きんし'), ...sign(84, 'No swimming.', 'およぐの きんし'), ...cap('No ＋ 動詞のing形 ＝ 〜禁止')],
  },
  {
    note: '❓なぜ No のあとは ing の形なのでしょう。→ 動詞に ing を付けると「〜すること」という名詞のようなはたらき（動名詞〈どうめいし〉）になるからです。smoke（すう）が smoking（すうこと）になり、No smoking. は「すうことは なし」、つまり禁煙になります。',
    add: fresh(bx(10, 14, 120, 36, 'smoke\n（すう）', C.blue, FILL.blue, 13), ar(132, 32, 168, 32, C.main), lb(150, 20, '＋ing', 11, C.main, 'middle', true), bx(170, 14, 140, 36, 'smoking\n（すうこと）', C.green, FILL.green, 13), ar(240, 52, 240, 76, C.red), bx(120, 80, 190, 36, 'No smoking.\n（すうことは なし）', C.red, FILL.red, 12), lb(60, 98, '禁止', 14, C.red, 'middle', true), ...cap('ingにすると「〜すること」', C.green)),
  },
  {
    note: 'ただし、すべてが ing ではありません。No photos.（撮影禁止）は、photos が名詞なので ing は付きません。No photography. とも書きます。No littering.（ごみの投げ捨て禁止）は litter（ごみを散らかす）の ing 形です。',
    add: fresh(bx(10, 10, 140, 30, 'No photos.', C.red, FILL.red, 13), lb(230, 25, '撮影禁止（名詞だから ing なし）', 10, C.red, 'middle', true), bx(10, 48, 140, 30, 'No photography.', C.red, FILL.red, 13), lb(230, 63, 'これも撮影禁止', 11, C.ink, 'middle', true), bx(10, 86, 140, 30, 'No littering.', C.red, FILL.red, 13), lb(230, 101, 'ごみの投げ捨て禁止', 11, C.ink, 'middle', true), ...cap('photos は名詞 → ing なし', C.red)),
  },
  {
    note: '少していねいに伝えたいときは、Please do not ~. や Don\'t ~. を使います。Please do not touch.（おさわりにならないでください）は博物館や美術館、Please do not feed the animals.（動物にえさをあげないでください）は動物園、Don\'t run in the hallway.（廊下〈ろうか〉を走らないでください）は学校の掲示です。',
    add: fresh(bx(6, 8, 210, 28, 'Please do not touch.', C.blue, FILL.blue, 12), lb(224, 22, '博物館など', 11, C.ink, 'start', true), bx(6, 44, 210, 28, 'Please do not feed the animals.', C.green, FILL.green, 11), lb(224, 58, '動物園', 11, C.ink, 'start', true), bx(6, 80, 210, 28, "Don't run in the hallway.", C.purple, FILL.purple, 12), lb(224, 94, '学校', 11, C.ink, 'start', true), lb(160, 128, 'どれも「〜しないでください」', 12, C.main, 'middle', true), ...cap('ていねいな禁止', C.blue)),
  },
  {
    note: '❓もっと強く、公式に禁止するときは、どう書くのでしょう。→ must not（〜してはならない）や、be allowed to（〜することを許されている）の打ち消しを使います。You must not enter this room. は「この部屋に入ってはいけません」、Visitors are not allowed to bring food. は「来場者は食べ物を持ちこむことを許可されていません」です。',
    add: fresh(bx(6, 10, 308, 30, 'You must not enter this room.', C.red, FILL.red, 13), lb(160, 54, 'この部屋に入ってはいけません', 12, C.red, 'middle', true), bx(6, 70, 308, 30, 'Visitors are not allowed to bring food.', C.red, FILL.red, 11), lb(160, 114, '食べ物を持ちこむことは許可されていません', 11, C.red, 'middle', true), ...cap('must not ・ not allowed to ＝ 強い禁止', C.red, 11)),
  },
  {
    note: '禁止だけでなく、案内や施設の状態を伝える掲示もあります。Push（押す）と Pull（引く）はドアの表示、Open（営業中）と Closed（休業中）はお店の表示、Out of order（故障中）と Sold out（売り切れ）も覚えましょう。',
    add: fresh(bx(6, 8, 148, 28, 'Push　押す', C.blue, FILL.blue, 12), bx(166, 8, 148, 28, 'Pull　引く', C.blue, FILL.blue, 12), bx(6, 44, 148, 28, 'Open　営業中', C.green, FILL.green, 12), bx(166, 44, 148, 28, 'Closed　休業中', C.green, FILL.green, 12), bx(6, 80, 148, 28, 'Out of order　故障中', C.purple, FILL.purple, 11), bx(166, 80, 148, 28, 'Sold out　売り切れ', C.purple, FILL.purple, 11), ...cap('案内と、施設の状態', C.main)),
  },
  {
    note: '特に大切な決まった掲示語です。Keep out. / No entry. は立入禁止（たちいりきんし）、Emergency Exit は非常口、Caution! / Watch your step! は「注意！足元に気をつけて」、Wet floor. は「ゆかがぬれています」、Fragile. は「われもの注意」です。',
    add: fresh(bx(6, 6, 190, 24, 'Keep out. / No entry.', C.red, FILL.red, 11), lb(206, 18, '立入禁止', 11, C.ink, 'start', true), bx(6, 34, 190, 24, 'Emergency Exit', C.green, FILL.green, 11), lb(206, 46, '非常口', 11, C.ink, 'start', true), bx(6, 62, 190, 24, 'Caution! / Watch your step!', C.main, FILL.warm, 10), lb(206, 74, '足元に注意', 11, C.ink, 'start', true), bx(6, 90, 190, 24, 'Wet floor.', C.blue, FILL.blue, 11), lb(206, 102, 'ゆかがぬれている', 11, C.ink, 'start', true), bx(6, 118, 190, 24, 'Fragile.', C.purple, FILL.purple, 11), lb(206, 130, 'われもの注意', 11, C.ink, 'start', true), ...cap('よく出る決まった掲示語')),
  },
  {
    note: '❓なぜ、これらの掲示には主語や動詞がないのでしょう。→ 看板は一瞬で読むものなので、短い決まり文句になっているからです。文法で分けて考えるより、看板の絵や場所と組み合わせて「意味のかたまり」のまま覚えるほうが効率的です。ぬれたゆかの絵と Wet floor. をセットで思い出しましょう。',
    add: fresh(bx(20, 14, 130, 44, 'Wet floor.', C.blue, FILL.blue, 15), lb(85, 76, '文字', 11, C.gray, 'middle'), bx(170, 14, 130, 44, 'ろうかの\nぬれたゆか', C.main, FILL.warm, 12), lb(235, 76, '絵・場所', 11, C.gray, 'middle'), ar(152, 36, 168, 36, C.main), bx(60, 96, 200, 30, '意味のかたまりで覚える', C.green, FILL.green, 13), ...cap('絵や場所と セットで覚える', C.green)),
  },
  {
    note: 'まとめです。禁止は、①No＋ing形（短い）、②Please do not ~.（ていねい）、③must not・not allowed to（強い）の3段階。そのほかに案内の掲示（Push・Open・Out of order）と、決まった掲示語（Keep out.・Emergency Exit）があります。',
    add: fresh(bx(10, 8, 300, 28, '① No ＋ ing形　（短い）', C.red, FILL.red, 12), bx(10, 40, 300, 28, '② Please do not ~.　（ていねい）', C.blue, FILL.blue, 12), bx(10, 72, 300, 28, '③ must not ／ not allowed to　（強い）', C.purple, FILL.purple, 11), bx(10, 104, 300, 28, '案内・状態・決まった掲示語', C.green, FILL.green, 12), ...cap('強さで 書き方が かわる', C.main)),
  },
], '看板の英語：禁止の強さと決まった掲示語');

// ───────── new20_e5_eigo_16 クラスアンケートの結果を読み取る ─────────
const bar = (i: number, name: string, n: number, c: string, f: string) => {
  const y = 34 + i * 26;
  return [lb(80, y + 9, name, 10, C.ink, 'end', true), ...(n > 0 ? [bx(86, y, n * 14, 18, String(n), c, f, 10)] : [lb(90, y + 9, '0', 10, C.gray, 'start', true)])];
};
const rank = (i: number, t: string, c: string) => lb(312, 34 + i * 26 + 9, t, 11, c, 'end', true);
const u16: DiagramFigure = show([
  {
    note: 'クラスで「好きな教科」のアンケートをとったとします。What\'s your favorite subject? は「あなたの好きな教科は何ですか」。favorite は「お気に入りの、いちばん好きな」という意味です。結果は、教科ごとの人数のグラフにまとめます。',
    add: [lb(160, 14, "What's your favorite subject?", 12, C.ink, 'middle', true), ln(86, 28, 86, 134, C.gray), lb(80, 43, 'math', 10, C.ink, 'end', true), lb(80, 69, 'science', 10, C.ink, 'end', true), lb(80, 95, 'English', 10, C.ink, 'end', true), lb(80, 121, 'social studies', 10, C.ink, 'end', true), ...cap('アンケートの質問と、グラフの形')],
  },
  {
    note: '人数は「〜 students like … the best.」と伝えます。Ten students like math the best. は「10人の生徒が算数をいちばん好きです」。like ~ the best は「いちばん〜が好きだ」です。',
    add: [...bar(0, 'math', 10, C.blue, FILL.blue), ...band(150, lb(160, 170, '10人の生徒が算数をいちばん好き', 11, C.gray, 'middle'), lb(160, 200, 'Ten students like math the best.', 12, C.blue, 'middle', true))],
  },
  {
    note: 'Five students chose science. は「5人の生徒が理科を選びました」。chose は choose（選ぶ）の過去形です。',
    add: [...bar(1, 'science', 5, C.green, FILL.green), ...band(150, lb(160, 170, '5人の生徒が理科を選びました', 11, C.gray, 'middle'), lb(160, 200, 'Five students chose science.', 12, C.green, 'middle', true))],
  },
  {
    note: '英語を4人が選び、社会を選んだ人は0人でした。Nobody chose social studies. は「社会科を選んだ人はだれもいませんでした」。nobody は「だれも〜ない」です。',
    add: [...bar(2, 'English', 4, C.purple, FILL.purple), ...bar(3, 'social studies', 0, C.gray, FILL.gray), ...band(150, lb(160, 170, '社会科を選んだ人はだれもいない', 11, C.gray, 'middle'), lb(160, 200, 'Nobody chose social studies.', 12, C.red, 'middle', true))],
  },
  {
    note: '❓いちばん人気があるのは、どう言うのでしょう。→ the most popular と言います。popular（人気のある）の最上級〈さいじょうきゅう〉で、いちばん人気がある、という意味です。このグラフでは 10 人の算数がいちばん多いので、Math is the most popular subject. です。',
    add: [rank(0, '1位', C.red), ...band(150, lb(160, 170, '算数はいちばん人気の教科', 11, C.gray, 'middle'), lb(160, 200, 'Math is the most popular subject.', 12, C.red, 'middle', true))],
  },
  {
    note: '❓2位と3位は、どう言うのでしょう。→ 2位は the second most popular、3位は comes in third place と言います。5人の理科が2位、4人の英語が3位です。second が付けば「2番目」なので、the most popular（1位）と取りちがえないようにしましょう。',
    add: [rank(1, '2位', C.green), rank(2, '3位', C.purple), ...band(150, lb(160, 170, 'The second most popular subject is science.', 10, C.green, 'middle', true), lb(160, 200, 'English comes in third place.', 12, C.purple, 'middle', true))],
  },
  {
    note: '割合の言い方もあります。別のアンケートで、20人のクラスのうち10人が夏を選んだとします。20人の半分なので、Half of the students like summer the best.（生徒の半分は夏がいちばん好きです）と言えます。half of ~ は「〜の半分」です。',
    add: fresh(lb(160, 16, 'Half of the students like summer the best.', 11, C.blue, 'middle', true), ...dots(10, 20, 40, { perRow: 20, gap: 14, r: 5, color: C.blue, fill: FILL.blue }), ...dots(10, 160, 40, { perRow: 20, gap: 14, r: 5, color: C.gray, fill: FILL.gray }), lb(160, 66, '20人のうち 10人 ＝ 半分', 12, C.ink, 'middle', true), ...cap('half of ＝ 〜の半分', C.blue)),
  },
  {
    note: '❓「ほとんど」や「少し」は、どう言うのでしょう。→ 18人は 20人のほとんどなので Most students like P.E.（ほとんどの生徒は体育が好きです）、2人は少しなので A few students like social studies.（少数の生徒は社会科が好きです）と言います。だれも選ばなかったら No one likes it. です。',
    add: fresh(lb(160, 14, 'Most students like P.E.　（18人）', 11, C.green, 'middle', true), ...dots(18, 20, 34, { perRow: 20, gap: 14, r: 5, color: C.green, fill: FILL.green }), ...dots(2, 20 + 18 * 14, 34, { perRow: 20, gap: 14, r: 5, color: C.gray, fill: FILL.gray }), lb(160, 66, 'A few students like social studies.　（2人）', 11, C.purple, 'middle', true), ...dots(2, 20, 86, { perRow: 20, gap: 14, r: 5, color: C.purple, fill: FILL.purple }), ...dots(18, 20 + 2 * 14, 86, { perRow: 20, gap: 14, r: 5, color: C.gray, fill: FILL.gray }), lb(160, 120, 'No one likes it.　（0人）', 11, C.gray, 'middle', true), ...cap('most ＝ ほとんど　a few ＝ 少数', C.green)),
  },
  {
    note: '❓なぜ、人数・順位・割合の三つの言い方を分けて覚えるのでしょう。→ アンケートの結果はこの三つで発表され、設問もこの三つの角度から作られるからです。どの言い方がどの設問に対応するかが、すぐにわかるようになります。',
    add: fresh(bx(8, 10, 98, 60, '人数\nTen students\nlike math.', C.blue, FILL.blue, 11), bx(111, 10, 98, 60, '順位\nthe most\npopular', C.red, FILL.red, 11), bx(214, 10, 98, 60, '割合\nhalf of\nmost / a few', C.green, FILL.green, 11), lb(160, 92, 'second が付けば「2番目」', 12, C.red, 'middle', true), lb(160, 114, 'the most popular と取りちがえない', 11, C.ink, 'middle', true), ...cap('人数・順位・割合の三つ', C.main)),
  },
  {
    note: '確かめのしかたです。①たずね方は What\'s your favorite ~? か、What ~ do you like the best? か。②人数は「〇 students like ~」か。③順位は the most popular（1位）、the second most popular（2位）で second を見落としていないか。④割合は half of・most・a few のどれか。数字と項目名をメモしながら読みます。',
    add: fresh(bx(10, 6, 300, 26, '① たずね方　What\'s your favorite ~?', C.gray, FILL.gray, 11), bx(10, 36, 300, 26, '② 人数　〇 students like ~ ／ chose ~', C.blue, FILL.blue, 11), bx(10, 66, 300, 26, '③ 順位　second を見落とさない', C.red, FILL.red, 11), bx(10, 96, 300, 26, '④ 割合　half of ／ most ／ a few', C.green, FILL.green, 11), ...cap('数字と項目名を メモしながら読む', C.main)),
  },
], 'アンケート結果：人数・順位・割合');

// ───────── new20_e5_eigo_17 ほしいものを伝える表現 ─────────
const sen = (y: number, en: string, ja: string, c: string, f: string, w = 190) => [bx(6, y, w, 30, en, c, f, 11), lb(w + 14, y + 15, ja, 11, C.ink, 'start', true)];
const u17: DiagramFigure = show([
  {
    note: '「〜がほしい」は want（望む〈のぞむ〉）で言います。want のあとに名詞（ものの名前）をそのまま置きます。I want a new bike. は「新しい自転車がほしいです」、What do you want for your birthday? は「誕生日に何がほしいですか」です。',
    add: [...sen(8, 'I want a new bike.', '新しい自転車がほしい', C.blue, FILL.blue, 170), ...sen(46, 'I want a video game.', 'ゲームソフトがほしい', C.green, FILL.green, 170), bx(6, 84, 308, 30, 'What do you want for your birthday?', C.main, FILL.warm, 11), lb(160, 130, '誕生日に何がほしいですか', 11, C.main, 'middle', true), ...cap('want ＋ ものの名前 ＝ 〜がほしい')],
  },
  {
    note: '「〜したい」も want で言います。want のあとに、to＋動詞の原形（げんけい）を置きます。I want to go to Australia. は「オーストラリアに行きたいです」、I want to be a doctor. は「医者になりたいです」、I want to play the piano. は「ピアノをひきたいです」です。',
    add: fresh(...sen(8, 'I want to go to Australia.', 'オーストラリアへ', C.blue, FILL.blue, 170), ...sen(46, 'I want to be a doctor.', '医者になりたい', C.green, FILL.green, 170), ...sen(84, 'I want to play the piano.', 'ピアノをひきたい', C.purple, FILL.purple, 170), ...cap('want ＋ to ＋ 動詞 ＝ 〜したい', C.green)),
  },
  {
    note: '❓なぜ want と go のあいだに to が必要なのでしょう。→ want は「名詞」か「to＋動詞の原形」をあとに続ける動詞で、動詞の原形だけを直接続けることはできないからです。「〜することを望む」と考えると、to を入れる理由がわかります。I want go to Australia. のように to を落とすのは、とても多いまちがいです。',
    add: fresh(bx(8, 14, 30, 34, 'I', C.gray, FILL.gray, 13), bx(44, 14, 62, 34, 'want', C.blue, FILL.blue, 13), bx(112, 14, 44, 34, 'to', C.red, FILL.red, 14), bx(162, 14, 150, 34, 'go to Australia.', C.green, FILL.green, 12), lb(134, 66, '↑ 落とさない', 12, C.red, 'middle', true), bx(30, 90, 260, 34, '✕  I want go to Australia.', C.red, FILL.red, 13), ...cap('want と 動詞の間には、かならず to', C.red)),
  },
  {
    note: '❓「あなたに〜してほしい」は、どう言うのでしょう。→ want＋人＋to＋動詞の原形と言います。I want you to help me. は「あなたに手伝ってほしいです」、My mother wants me to study more. は「母は私にもっと勉強してほしいと思っています」です。主語が My mother（ひとり）のときは wants と s が付きます。',
    add: fresh(bx(8, 10, 74, 32, 'I want', C.blue, FILL.blue, 13), bx(88, 10, 60, 32, 'you', C.red, FILL.red, 13), bx(154, 10, 158, 32, 'to help me.', C.green, FILL.green, 13), lb(45, 56, '私は望む', 11, C.blue, 'middle', true), lb(118, 56, 'あなたに', 11, C.red, 'middle', true), lb(233, 56, '手伝ってほしい', 11, C.green, 'middle', true), bx(8, 80, 120, 32, 'My mother wants', C.blue, FILL.blue, 10), bx(132, 80, 50, 32, 'me', C.red, FILL.red, 13), bx(186, 80, 126, 32, 'to study more.', C.green, FILL.green, 12), lb(160, 130, '母は私にもっと勉強してほしい', 11, C.ink, 'middle', true), ...cap('want ＋ 人 ＋ to ＋ 動詞', C.main)),
  },
  {
    note: '❓お店で注文するとき、なぜ want ではなく I\'d like を使うのでしょう。→ want は少し直接的（ちょくせつてき）で、目上の人やお店の人に言うと強い印象を与えることがあるからです。I\'d like は I would like の短縮形（たんしゅくけい）で、「〜がほしいのですが」というていねいな言い方になります。',
    add: fresh(bx(10, 10, 300, 32, 'I want a hamburger.', C.blue, FILL.blue, 13), lb(160, 56, 'ふつう（少し直接的）', 12, C.blue, 'middle', true), ar(160, 66, 160, 84, C.main), bx(10, 88, 300, 32, "I'd like a hamburger, please.", C.green, FILL.green, 13), lb(160, 134, 'ハンバーガーをお願いします（ていねい）', 11, C.green, 'middle', true), ...cap("I'd like ＝ I would like", C.green)),
  },
  {
    note: 'I\'d like の使い方は、want と同じ形です。名詞を置けば「〜がほしいのですが」、to＋動詞の原形を置けば「〜したいのですが」になります。I\'d like to try this on. は「これを試着したいのですが」、I\'d like to visit Kyoto someday. は「いつか京都を訪れたいです」です。',
    add: fresh(bx(6, 10, 148, 28, "I'd like ＋ 名詞", C.blue, FILL.blue, 12), lb(230, 24, '〜がほしいのですが', 12, C.blue, 'middle', true), bx(6, 46, 148, 28, "I'd like to ＋ 動詞", C.green, FILL.green, 12), lb(230, 60, '〜したいのですが', 12, C.green, 'middle', true), bx(6, 86, 308, 26, "I'd like to try this on.", C.green, FILL.green, 12), lb(160, 126, 'これを試着したいのですが', 11, C.ink, 'middle', true), ...cap('形は want と同じ。ひびきが ていねい', C.green)),
  },
  {
    note: '❓相手にほしいものをたずねるときも、ていねいな言い方があるのでしょうか。→ あります。What do you want? よりも What would you like? のほうがていねいです。Would you like something to drink? は「何かお飲み物はいかがですか」です。',
    add: fresh(bx(8, 10, 140, 30, 'What do you want?', C.blue, FILL.blue, 12), ar(150, 25, 170, 25, C.main), bx(172, 10, 140, 30, 'What would you like?', C.green, FILL.green, 12), lb(78, 54, 'ふつう', 12, C.blue, 'middle', true), lb(242, 54, 'ていねい', 12, C.green, 'middle', true), bx(8, 80, 304, 30, 'Would you like something to drink?', C.purple, FILL.purple, 12), lb(160, 126, '何かお飲み物はいかがですか', 11, C.purple, 'middle', true), ...cap('たずねるときも、would を使うとていねい', C.main, 11)),
  },
  {
    note: '❓「特にほしいものはない」と答えるには、どう言うのでしょう。→ I don\'t want anything special. や、Nothing in particular, thanks. と言います。in particular は「特に」という意味です。友達どうしなら I want ~.、お店や目上の人には I\'d like ~. と使い分けましょう。',
    add: fresh(bx(10, 8, 300, 30, "I don't want anything special.", C.blue, FILL.blue, 12), bx(10, 44, 300, 30, 'Nothing in particular, thanks.', C.green, FILL.green, 12), lb(160, 90, 'どちらも「特にありません」', 12, C.ink, 'middle', true), lb(80, 118, '友達どうし → I want ~.', 11, C.blue, 'middle', true), lb(240, 118, '目上・お店 → I\'d like ~.', 11, C.green, 'middle', true), ...cap('相手によって 言い方を使い分ける', C.main)),
  },
  {
    note: 'まとめです。①want＋名詞で「〜がほしい」、②want＋to＋動詞で「〜したい」（to を落とさない）、③want＋人＋to で「人に〜してほしい」、④お店や目上の人には I\'d like ~. を使う、の4つです。',
    add: fresh(bx(10, 6, 300, 26, '① want ＋ 名詞　〜がほしい', C.blue, FILL.blue, 12), bx(10, 36, 300, 26, '② want ＋ to ＋ 動詞　〜したい', C.green, FILL.green, 12), bx(10, 66, 300, 26, '③ want ＋ 人 ＋ to ＋ 動詞', C.purple, FILL.purple, 12), bx(10, 96, 300, 26, "④ I'd like ~.　ていねいな言い方", C.red, FILL.red, 12), ...cap('want の形は3つ、ていねいは I\'d like', C.main)),
  },
], 'ほしいものを伝える：want と I\'d like');

// ───────── new20_e5_eigo_18 ペンフレンドへの手紙の返事を書く ─────────
const u18: DiagramFigure = show([
  {
    note: 'ペンフレンド（外国の文通相手）への返事は、5つの部分で組み立てます。①お礼のあいさつ、②相手の質問への答え、③自分からの質問、④話題を変える（必要なとき）、⑤締めくくりの言葉、の順です。',
    add: [bx(8, 4, 304, 24, '① Thank you for your letter.', C.blue, FILL.blue, 11), bx(8, 31, 304, 24, '② You asked me about ~.　（答える）', C.green, FILL.green, 11), bx(8, 58, 304, 24, '③ How about you?　（質問を返す）', C.purple, FILL.purple, 11), bx(8, 85, 304, 24, '④ By the way, ~.　（話題を変える）', C.main, FILL.warm, 11), bx(8, 112, 304, 24, '⑤ I hope to hear from you soon.', C.red, FILL.red, 11), ...cap('返事の組み立て：5つの部分')],
  },
  {
    note: '❓なぜ、最初にお礼を書くのでしょう。→ 手紙をもらったことへの感謝を伝えると、読む相手がうれしい気持ちになるからです。Thank you for your letter.（お手紙をありがとう）、I was happy to hear from you.（あなたから便りをもらってうれしかったです）、I enjoyed reading your letter.（あなたの手紙を読んで楽しかったです）が書き出しの決まり文句です。',
    add: fresh(bx(6, 10, 308, 30, 'Thank you for your letter.', C.blue, FILL.blue, 12), lb(160, 52, 'お手紙をありがとう', 11, C.blue, 'middle', true), bx(6, 62, 308, 30, 'I was happy to hear from you.', C.green, FILL.green, 12), lb(160, 104, 'あなたから便りをもらってうれしかった', 11, C.green, 'middle', true), bx(6, 114, 308, 26, 'I enjoyed reading your letter.', C.purple, FILL.purple, 12), ...cap('hear from ~ ＝ 〜から便りをもらう', C.main)),
  },
  {
    note: '❓なぜ「You asked me about ~.」と書くのでしょう。→ 相手の手紙のどの質問に答えているのかがはっきりして、話がかみ合うからです。「好きな教科について聞かれましたね」と確かめてから、My favorite subject is science.（私の好きな教科は理科です）と答えます。',
    add: fresh(bx(10, 8, 300, 28, '相手の手紙：好きな教科は？', C.gray, FILL.gray, 12), ar(160, 38, 160, 54, C.main), bx(10, 56, 300, 46, 'You asked me about my favorite subject.\nMy favorite subject is science.', C.green, FILL.green, 11), lb(160, 118, '聞かれたことを確かめてから、答える', 12, C.green, 'middle', true), ...cap('You asked me about ~.', C.green)),
  },
  {
    note: '質問が「週末に何をするか」のときも同じです。In your letter, you asked what I do on weekends. は「お手紙で、週末に何をするか聞かれましたね」。そのあと I usually play soccer with my friends.（私はたいてい友達とサッカーをします）と答えます。',
    add: fresh(bx(6, 8, 308, 46, 'In your letter, you asked\nwhat I do on weekends.', C.blue, FILL.blue, 12), lb(160, 66, '手紙で、週末に何をするか聞かれましたね', 11, C.blue, 'middle', true), ar(160, 74, 160, 88, C.main), bx(6, 92, 308, 46, 'I usually play soccer\nwith my friends.', C.green, FILL.green, 12), ...band(150, lb(160, 192, 'usually ＝ たいてい', 12, C.main, 'middle', true))),
  },
  {
    note: '❓なぜ、自分からも質問を返すのでしょう。→ 自分の答えを伝えるだけでなく、相手にも質問すると、手紙のやり取りが続いていくからです。How about you? / What about you? は「あなたはどうですか」で、自分の答えのあとに付けるのが定番です。Do you have any pets? のように、新しい質問をしてもかまいません。',
    add: fresh(bx(8, 12, 140, 34, 'My hobby is reading.', C.blue, FILL.blue, 11), ar(150, 29, 170, 29, C.main), bx(172, 12, 140, 34, 'How about you?', C.purple, FILL.purple, 12), lb(160, 66, 'あなたはどうですか', 12, C.purple, 'middle', true), bx(40, 86, 240, 34, 'Do you have any pets?', C.green, FILL.green, 12), lb(160, 136, 'ペットは飼っていますか（新しい質問）', 11, C.green, 'middle', true), ...band(150, lb(160, 192, '質問を返すと、やり取りが続く', 12, C.purple, 'middle', true))),
  },
  {
    note: '話題を変えるときは、By the way,（ところで）という つなぎ語を使います。By the way, do you like Japanese food? は「ところで、あなたは日本食が好きですか」です。ひとつの話題が終わってから使います。',
    add: fresh(bx(8, 14, 130, 40, '趣味の話\nおしまい', C.gray, FILL.gray, 12), ar(140, 34, 172, 34, C.main), bx(176, 14, 136, 40, '日本食の話\nはじまり', C.green, FILL.green, 12), bx(88, 66, 144, 28, 'By the way,', C.main, FILL.warm, 14), lb(160, 110, 'ところで', 12, C.main, 'middle', true), bx(10, 120, 300, 24, 'By the way, do you like Japanese food?', C.blue, FILL.blue, 11), ...band(150, lb(160, 192, '話題を変える合図', 12, C.main, 'middle', true))),
  },
  {
    note: '❓手紙の最後には、何を書くのでしょう。→ 次の手紙を楽しみにしている気持ち、結びの言葉、自分の名前の順に書きます。I hope to hear from you soon.（すぐにまたお便りをもらえるとうれしいです）、Please write back soon.（また早く返事をください）、Take care,（お元気で）、Your friend, Kenta（あなたの友達、ケンタより）です。',
    add: fresh(bx(10, 6, 300, 26, 'I hope to hear from you soon.', C.blue, FILL.blue, 12), bx(10, 36, 300, 26, 'Please write back soon.', C.green, FILL.green, 12), bx(10, 66, 300, 26, 'Take care,', C.purple, FILL.purple, 12), bx(10, 96, 300, 26, 'Your friend, Kenta', C.red, FILL.red, 12), lb(160, 138, 'write back ＝ 返事を書く', 11, C.ink, 'middle', true), ...cap('楽しみ → 結び → 名前', C.main)),
  },
  {
    note: 'まとめです。返事は、お礼 → 質問に答える → 質問を返す → 話題を変える → 締めくくり、の順に組み立てます。相手の質問に一つずつ答えて、自分のことも伝えましょう。',
    add: fresh(...flow(['お礼', '答える', '質問', '話題', '締め'], 26, { h: 64, size: 12, color: C.blue, fill: FILL.blue, gap: 8, pad: 6 }).flat(), lb(160, 116, '相手の質問を、わすれずに！', 12, C.red, 'middle', true), ...cap('5つの部分で 返事を組み立てる', C.green)),
  },
], 'ペンフレンドへの返事の組み立て');

// ───────── new20_e5_eigo_19 一週間の予定表を読み取る ─────────
const day = (x: number, y: number, en: string, ja: string, c: string, f: string) => bx(x, y, 72, 36, `${en}\n${ja}`, c, f, 11);
const u19: DiagramFigure = show([
  {
    note: '予定表を読むには、まず曜日の名前を覚えます。月曜日 Monday、火曜日 Tuesday、水曜日 Wednesday、木曜日 Thursday、金曜日 Friday、土曜日 Saturday、日曜日 Sunday。曜日の名前は、必ず大文字で書きはじめます。',
    add: [day(6, 8, 'Monday', '月', C.blue, FILL.blue), day(84, 8, 'Tuesday', '火', C.blue, FILL.blue), day(162, 8, 'Wednesday', '水', C.blue, FILL.blue), day(240, 8, 'Thursday', '木', C.blue, FILL.blue), day(6, 54, 'Friday', '金', C.blue, FILL.blue), day(84, 54, 'Saturday', '土', C.green, FILL.green), day(162, 54, 'Sunday', '日', C.red, FILL.red), lb(160, 114, 'M・T・W・F・S は 大文字で はじめる', 12, C.ink, 'middle', true), ...cap('七つの曜日の名前')],
  },
  {
    note: '予定表の文章を読みます。「月曜日は放課後ピアノのレッスン、水曜日は水泳教室、金曜日はサッカーの練習、日曜日はひま」。曜日と活動を、一つずつペアにしてメモするのが読み方のコツです。',
    add: fresh(bx(6, 6, 100, 26, 'Monday', C.blue, FILL.blue, 12), ar(108, 19, 132, 19, C.main), bx(134, 6, 180, 26, 'a piano lesson', C.blue, FILL.blue, 12), bx(6, 38, 100, 26, 'Wednesday', C.green, FILL.green, 12), ar(108, 51, 132, 51, C.main), bx(134, 38, 180, 26, 'swimming school', C.green, FILL.green, 12), bx(6, 70, 100, 26, 'Friday', C.purple, FILL.purple, 12), ar(108, 83, 132, 83, C.main), bx(134, 70, 180, 26, 'soccer practice', C.purple, FILL.purple, 12), bx(6, 102, 100, 26, 'Sunday', C.red, FILL.red, 12), ar(108, 115, 132, 115, C.main), bx(134, 102, 180, 26, 'free（ひま）', C.red, FILL.red, 12), ...cap('曜日と活動を ペアにする', C.main)),
  },
  {
    note: '予定や習い事の言い方を確かめます。have a piano lesson（ピアノのレッスンがある）、have soccer practice（サッカーの練習がある）、have a club activity（クラブ活動がある）。go to swimming school（水泳教室に行く）、go to cram school（塾〈じゅく〉に行く）。レッスンや練習は have、教室や塾は go to で言います。',
    add: fresh(lb(80, 14, 'have ＋ ある', 13, C.blue, 'middle', true), bx(6, 24, 148, 26, 'have a piano lesson', C.blue, FILL.blue, 11), bx(6, 56, 148, 26, 'have soccer practice', C.blue, FILL.blue, 11), bx(6, 88, 148, 26, 'have a club activity', C.blue, FILL.blue, 11), lb(240, 14, 'go to ＋ 行く', 13, C.green, 'middle', true), bx(166, 24, 148, 26, 'go to swimming school', C.green, FILL.green, 10), bx(166, 56, 148, 26, 'go to cram school', C.green, FILL.green, 11), lb(80, 134, 'レッスン・練習・活動', 11, C.blue, 'middle'), lb(240, 100, '教室・塾（行く場所）', 11, C.green, 'middle'), ...cap('予定の言い方', C.main)),
  },
  {
    note: '問題の読み方です。「What do you do on Wednesdays?（水曜日はいつも何をしますか）」ときかれたら、まず Wednesday を見つけ、すぐ右の活動を読みます。答えは I go to swimming school.（水泳教室に行きます）です。',
    add: fresh(bx(6, 6, 308, 28, 'What do you do on Wednesdays?', C.blue, FILL.blue, 12), bx(6, 44, 100, 24, 'Monday', C.gray, FILL.gray, 11), bx(134, 44, 180, 24, 'a piano lesson', C.gray, FILL.gray, 11), bx(6, 72, 100, 24, 'Wednesday', C.green, FILL.green, 12), ar(108, 84, 132, 84, C.green), bx(134, 72, 180, 24, 'swimming school', C.green, FILL.green, 12), bx(6, 100, 100, 24, 'Friday', C.gray, FILL.gray, 11), bx(134, 100, 180, 24, 'soccer practice', C.gray, FILL.gray, 11), lb(160, 138, '→ I go to swimming school.', 12, C.green, 'middle', true), ...band(150, lb(160, 192, '曜日をさがして、となりを読む', 12, C.green, 'middle', true))),
  },
  {
    note: '❓on Monday と on Mondays は、何がちがうのでしょう。→ 複数形（s が付く形）には「毎週」の意味が含まれるからです。on Monday は「この月曜日に」と特定の1回、on Mondays は「毎週月曜日に」と習慣（しゅうかん）を表します。スケジュール表の説明では、習慣を言うことが多いので Mondays や Fridays がよく使われます。',
    add: fresh(bx(8, 8, 144, 44, 'on Monday\nこの月曜日（1回）', C.blue, FILL.blue, 12), bx(168, 8, 144, 44, 'on Mondays\n毎週月曜日（習慣）', C.green, FILL.green, 12), bx(8, 66, 144, 40, 'I have a piano\nlesson on Monday.', C.blue, FILL.blue, 10), bx(168, 66, 144, 40, 'I have a piano\nlesson on Mondays.', C.green, FILL.green, 10), lb(80, 124, '今週の月曜日だけ', 11, C.blue, 'middle', true), lb(240, 124, '毎週ある', 11, C.green, 'middle', true), ...cap('s が付くと「毎週」', C.green)),
  },
  {
    note: '予定のたずね方は3つです。What do you do on Mondays? は習慣をたずねる現在形で「月曜日はいつも何をしますか」。What are you doing this Saturday? は現在進行形（〜している形）で近い未来の予定をたずね、「今度の土曜日は何をする予定ですか」。Are you free on Sunday? は「日曜日はひまですか」です。',
    add: fresh(bx(6, 8, 308, 28, 'What do you do on Mondays?', C.blue, FILL.blue, 12), lb(160, 48, 'いつもの習慣', 11, C.blue, 'middle', true), bx(6, 58, 308, 28, 'What are you doing this Saturday?', C.green, FILL.green, 12), lb(160, 98, '近い未来の予定', 11, C.green, 'middle', true), bx(6, 108, 308, 28, 'Are you free on Sunday?', C.purple, FILL.purple, 12), ...cap('ひまな日は free', C.main)),
  },
  {
    note: '❓「ひまな日」は、どう言うのでしょう。→ I\'m free on Sundays.（日曜日はひまです）や I don\'t have any plans on Saturday.（土曜日は何も予定がありません）と言います。ひまな日を聞かれたら、free や don\'t have any plans が手がかりです。',
    add: fresh(bx(6, 12, 308, 32, "I'm free on Sundays.", C.green, FILL.green, 13), lb(160, 58, '日曜日はひまです', 12, C.green, 'middle', true), bx(6, 72, 308, 32, "I don't have any plans on Saturday.", C.green, FILL.green, 12), lb(160, 118, '土曜日は何も予定がありません', 12, C.green, 'middle', true), ...cap('free ・ don\'t have any plans が手がかり', C.red, 11)),
  },
  {
    note: 'まとめです。予定表の問題は、①曜日ごとの活動を一つずつ確かめる、②on Monday と on Mondays のちがいに注意する、③ひまな日は free や don\'t have any plans を手がかりに探す、の3つで解きます。',
    add: fresh(bx(10, 10, 300, 32, '① 曜日 → 活動 を ペアにする', C.blue, FILL.blue, 12), bx(10, 50, 300, 32, '② on Monday ／ on Mondays', C.green, FILL.green, 12), bx(10, 90, 300, 32, '③ free ・ don\'t have any plans', C.purple, FILL.purple, 12), ...cap('3つのポイント', C.main)),
  },
], '予定表の読み方：曜日と活動のペア');

// ───────── new20_e5_eigo_20 動物園の案内図・パンフレットを読み取る ─────────
const u20: DiagramFigure = show([
  {
    note: '動物園の案内図（あんないず）には、短い単語や印が書かれています。You are here は現在地（げんざいち）、Entrance は入口、Exit は出口、Restroom はトイレ、Gift Shop は売店、Restaurant はレストランです。図の中の表示も、文章といっしょに確かめましょう。',
    add: [bx(8, 8, 98, 40, 'You are here\n現在地', C.red, FILL.red, 11), bx(111, 8, 98, 40, 'Entrance\n入口', C.blue, FILL.blue, 11), bx(214, 8, 98, 40, 'Exit\n出口', C.blue, FILL.blue, 11), bx(8, 58, 98, 40, 'Restroom\nトイレ', C.green, FILL.green, 11), bx(111, 58, 98, 40, 'Gift Shop\n売店', C.purple, FILL.purple, 11), bx(214, 58, 98, 40, 'Restaurant\nレストラン', C.main, FILL.warm, 11), ...cap('案内図の記号')],
  },
  {
    note: '動物の場所は、まず Where is the lion?（ライオンはどこにいますか）とたずねます。答えは位置を表すことばを使います。The lion is next to the tiger. は「ライオンはトラのとなりにいます」。next to は「〜のとなりに」です。',
    add: fresh(bx(8, 8, 304, 28, 'Where is the lion?', C.blue, FILL.blue, 13), bx(40, 56, 110, 44, 'tiger\nトラ', C.main, FILL.warm, 12), bx(154, 56, 110, 44, 'lion\nライオン', C.red, FILL.red, 12), ln(152, 52, 152, 104, C.gray, true), lb(160, 118, 'next to ＝ すぐ となり', 12, C.red, 'middle', true), ...cap('The lion is next to the tiger.', C.red, 11)),
  },
  {
    note: '❓「間」は、どう言うのでしょう。→ between A and B と言います。The monkey house is between the zoo shop and the entrance. は「サル舎（しゃ）はお店と入口の間にあります」。A と B の2つをはさんだ真ん中の場所です。',
    add: fresh(bx(6, 40, 92, 44, 'zoo shop\nお店', C.purple, FILL.purple, 11), bx(114, 40, 92, 44, 'monkey house\nサル舎', C.red, FILL.red, 10), bx(222, 40, 92, 44, 'entrance\n入口', C.blue, FILL.blue, 11), ln(52, 94, 52, 104, C.gray), ln(268, 94, 268, 104, C.gray), ln(52, 104, 268, 104, C.gray), lb(160, 122, 'between  A  and  B', 13, C.red, 'middle', true), ...cap('お店と入口の間にある', C.red)),
  },
  {
    note: '❓「向かい」は、どう言うのでしょう。→ across from と言います。The panda house is across from the restaurant. は「パンダ舎はレストランの向かいにあります」。道をはさんで、反対側にあるときに使います。',
    add: fresh(bx(40, 8, 240, 34, 'restaurant　レストラン', C.main, FILL.warm, 12), ln(10, 66, 310, 66, C.gray, true, 2.4), lb(24, 58, '道', 11, C.gray, 'middle'), bx(40, 90, 240, 34, 'panda house　パンダ舎', C.red, FILL.red, 12), ar(160, 86, 160, 50, C.red), lb(176, 76, 'across from', 12, C.red, 'start', true), ...cap('道をはさんで 向かいがわ', C.red)),
  },
  {
    note: '❓「後ろ」は、どう言うのでしょう。→ behind と言います。The bird cage is behind the elephant area. は「鳥かごはゾウのエリアの後ろにあります」。入口から見て、手前がゾウのエリア、その向こう側が鳥かごです。',
    add: fresh(bx(30, 8, 190, 34, 'bird cage　鳥かご', C.purple, FILL.purple, 12), bx(30, 56, 190, 34, 'elephant area　ゾウのエリア', C.main, FILL.warm, 11), ci(125, 118, 12, '見る', C.red, FILL.red, 9), ar(125, 104, 125, 94, C.red), lb(232, 25, 'behind', 13, C.purple, 'start', true), ...cap('ゾウのエリアの後ろに 鳥かご', C.purple)),
  },
  {
    note: '道順の言い方です。Go straight and turn right at the panda house. は「まっすぐ行って、パンダ舎で右に曲がってください」。go straight が「まっすぐ進む」、turn right が「右に曲がる」、turn left は「左に曲がる」です。',
    add: fresh(ci(60, 130, 10, '入口', C.blue, FILL.blue, 8), ln(60, 120, 60, 84, C.red, false, 2.6), ar(60, 84, 60, 80, C.red), ln(60, 80, 190, 80, C.green, false, 2.6), ar(180, 80, 200, 80, C.green), bx(14, 46, 92, 24, 'panda house', C.main, FILL.warm, 11), lb(76, 112, 'Go straight（まっすぐ進む）', 11, C.red, 'start', true), lb(112, 62, 'turn right（右に曲がる）', 11, C.green, 'start', true), ...cap('Go straight → turn right', C.main)),
  },
  {
    note: 'Walk past the gift shop, and you will see the lion area on your left. は「売店を通り過ぎると、左手にライオンのエリアが見えます」。walk past は「通り過ぎる」、on your left は「あなたの左側に」です。The elephant area is a five-minute walk from the entrance. は「入口から歩いて5分」です。',
    add: fresh(ln(160, 134, 160, 20, C.main, false, 2.6), ar(160, 24, 160, 12, C.main), ci(160, 134, 8, '', C.red, FILL.red), bx(176, 78, 100, 26, 'gift shop', C.purple, FILL.purple, 11), bx(40, 22, 100, 26, 'lion area', C.red, FILL.red, 11), lb(70, 64, 'on your left', 11, C.red, 'middle', true), lb(226, 120, 'walk past', 11, C.purple, 'middle', true), lb(176, 136, 'a five-minute walk', 10, C.green, 'start', true), ...cap('walk past ＝ 通り過ぎる', C.main)),
  },
  {
    note: '時間の案内です。The zoo is open from 9 a.m. to 5 p.m. は「午前9時から午後5時まで開いています」。9時から17時（午後5時）までなので8時間です。The panda show starts at 11 a.m.（午前11時にショーが始まる）、Feeding time is at 2:00 p.m.（エサやりは午後2時）。The zoo is closed on Mondays. は「月曜日は休園」です。',
    add: fresh(bx(20, 40, 280, 14, undefined, C.green, FILL.green), lb(20, 28, '9 a.m.', 11, C.green, 'middle', true), lb(300, 28, '5 p.m.', 11, C.green, 'middle', true), ln(90, 36, 90, 62, C.purple, false, 2.4), lb(90, 78, '11 a.m.', 10, C.purple, 'middle', true), lb(90, 92, 'panda show', 10, C.purple, 'middle'), ln(195, 36, 195, 62, C.red, false, 2.4), lb(195, 78, '2:00 p.m.', 10, C.red, 'middle', true), lb(195, 92, 'feeding time', 10, C.red, 'middle'), lb(160, 120, 'open from 9 a.m. to 5 p.m.（8時間）', 11, C.green, 'middle', true), lb(160, 138, 'closed on Mondays ＝ 月曜日は休園', 11, C.ink, 'middle', true), ...cap('open ＝ 開いている　closed ＝ 閉まっている', C.main, 11)),
  },
  {
    note: 'まとめです。動物園の読解は、①案内図から動物の位置を見つける（next to・between・across from・behind）、②道順にそってルートを選ぶ（go straight・turn right・walk past）、③時間の案内から何時に何が見られるかを答える、の3つです。3つを混ぜないで、別々に整理して読みましょう。',
    add: fresh(bx(10, 8, 300, 34, '① 位置　next to ・ between ・ across from ・ behind', C.blue, FILL.blue, 10), bx(10, 50, 300, 34, '② 道順　go straight ・ turn right ・ walk past', C.green, FILL.green, 11), bx(10, 92, 300, 34, '③ 時間　open from ~ to ~ ・ at 2:00 p.m.', C.purple, FILL.purple, 11), ...cap('3つを別々に整理して読む', C.main)),
  },
], '動物園の案内：位置・道順・時間');

const two = (y: number, en: string, ja: string, c: string, f: string, size = 12) => [bx(6, y, 308, 28, en, c, f, size), lb(160, y + 38, ja, 11, c, 'middle', true)];

// ───────── new20_e6_eigo_01 過去形で自分のことを話す ─────────
const u21: DiagramFigure = show([
  {
    note: '過去のことを言うときは、動詞を過去形にします。I played tennis yesterday.（私は昨日テニスをした）、She watched a movie last night.（彼女は昨夜映画を見た）、We visited Kyoto last summer.（私たちは去年の夏、京都を訪れた）。「主語＋過去形の動詞＋時を表すことば」の型です。',
    add: [...two(2, 'I played tennis yesterday.', '私は昨日テニスをした', C.blue, FILL.blue), ...two(50, 'She watched a movie last night.', '彼女は昨夜映画を見た', C.green, FILL.green), ...two(98, 'We visited Kyoto last summer.', '私たちは去年の夏、京都を訪れた', C.purple, FILL.purple), ...cap('動詞を過去形にすると「〜した」')],
  },
  {
    note: '❓なぜ、She のときに s を付けないのでしょう。→ 三人称単数（さんにんしょうたんすう）の s は現在形だけのきまりで、過去形には存在しないからです。I でも She でも We でも、過去形の動詞は played のまま変わりません。',
    add: fresh(bx(6, 20, 96, 40, 'I\nplayed', C.blue, FILL.blue, 13), bx(112, 20, 96, 40, 'She\nplayed', C.green, FILL.green, 13), bx(218, 20, 96, 40, 'We\nplayed', C.purple, FILL.purple, 13), lb(160, 86, 'どの主語でも played のまま', 13, C.red, 'middle', true), lb(160, 112, '（現在形の gets・goes の s は付けない）', 11, C.gray, 'middle'), ...cap('過去形は 主語で形が変わらない', C.red)),
  },
  {
    note: '「いつ」を表すことばを覚えます。yesterday（昨日）、last night（昨夜）、last week（先週）、two days ago（2日前）、this morning（今朝）。ふつうは文の終わりに置きますが、強調したいときは文の最初に置いて、コンマで区切ります。',
    add: fresh(bx(6, 6, 148, 24, 'yesterday　昨日', C.blue, FILL.blue, 11), bx(166, 6, 148, 24, 'last night　昨夜', C.blue, FILL.blue, 11), bx(6, 36, 148, 24, 'last week　先週', C.blue, FILL.blue, 11), bx(166, 36, 148, 24, 'two days ago　2日前', C.blue, FILL.blue, 11), bx(6, 66, 148, 24, 'this morning　今朝', C.blue, FILL.blue, 11), bx(6, 100, 308, 28, 'Yesterday, I cleaned my room.', C.green, FILL.green, 12), lb(160, 142, '文の最初に置くと強調（コンマで区切る）', 11, C.green, 'middle', true), ...band(150, lb(160, 192, '「いつ」を表すことば', 12, C.main, 'middle', true))),
  },
  {
    note: '❓否定文では、なぜ didn\'t のあとの動詞を原形にもどすのでしょう。→ did がすでに「過去」の目印を持っているからです。過去の目印は1つで足りるので、あとの動詞は原形（げんけい）です。I didn\'t played. のように ed を重ねると、二重に過去形にしてしまうまちがいになります。',
    add: fresh(bx(6, 14, 40, 32, 'I', C.gray, FILL.gray, 13), bx(52, 14, 76, 32, "didn't", C.red, FILL.red, 13), bx(134, 14, 66, 32, 'play', C.green, FILL.green, 13), bx(206, 14, 108, 32, 'soccer.', C.gray, FILL.gray, 13), lb(90, 62, '過去の目印', 11, C.red, 'middle', true), lb(167, 62, '原形', 11, C.green, 'middle', true), bx(40, 90, 240, 32, "✕  I didn't played.", C.red, FILL.red, 13), lb(160, 138, 'ed を重ねると 二重の過去形', 11, C.red, 'middle', true), ...band(150, lb(160, 192, 'did の後ろは 原形', 12, C.red, 'middle', true))),
  },
  {
    note: '疑問文も did を使います。Did you play soccer? は「サッカーをしましたか」。答えは Yes, I did.（はい、しました）か No, I didn\'t.（いいえ、しませんでした）です。ここでも、あとの動詞 play は原形のままです。',
    add: fresh(bx(6, 12, 308, 32, 'Did you play soccer?', C.blue, FILL.blue, 14), lb(160, 60, 'サッカーをしましたか', 12, C.blue, 'middle', true), bx(6, 78, 148, 30, 'Yes, I did.', C.green, FILL.green, 13), bx(166, 78, 148, 30, "No, I didn't.", C.red, FILL.red, 13), lb(80, 124, 'はい、しました', 11, C.green, 'middle', true), lb(240, 124, 'いいえ、しませんでした', 11, C.red, 'middle', true), ...cap('Did ＋ 主語 ＋ 動詞の原形', C.main)),
  },
  {
    note: '過去形のつくり方は2種類あります。規則動詞は ed を付けます。play→played、watch→watched。study のように y で終わる語は、y を i に変えて ed を付けるので studied です。不規則動詞は形が変わります。go→went、eat→ate、do→did、wake→woke。',
    add: fresh(lb(80, 14, '規則（ed を付ける）', 12, C.blue, 'middle', true), bx(6, 24, 148, 26, 'play → played', C.blue, FILL.blue, 12), bx(6, 56, 148, 26, 'watch → watched', C.blue, FILL.blue, 12), bx(6, 88, 148, 26, 'study → studied', C.blue, FILL.blue, 12), lb(80, 128, 'y を i に変えて ed', 10, C.blue, 'middle'), lb(240, 14, '不規則（形が変わる）', 12, C.red, 'middle', true), bx(166, 24, 148, 26, 'go → went', C.red, FILL.red, 12), bx(166, 56, 148, 26, 'eat → ate', C.red, FILL.red, 12), bx(166, 88, 148, 26, 'do → did', C.red, FILL.red, 12), bx(166, 120, 148, 22, 'wake → woke', C.red, FILL.red, 11), ...cap('2しゅるいの 過去形', C.main)),
  },
  {
    note: '一日の流れを語ってみましょう。「昨日、7時に起きた。朝食を食べ、1時間算数を勉強した。そのあと公園でサッカーをした。夕方、テレビを見て宿題をした。10時に寝た」。woke・ate・studied・played・watched・did・went と、規則と不規則が混ざっています。',
    add: fresh(...flow(['woke up\nat seven', 'ate\nbreakfast', 'studied math\nfor an hour'], 8, { h: 48, size: 10, color: C.blue, fill: FILL.blue, gap: 14, pad: 8 }).flat(), ...flow(['played soccer\nin the park', 'watched TV,\ndid homework', 'went to bed\nat ten'], 78, { h: 48, size: 10, color: C.green, fill: FILL.green, gap: 14, pad: 8 }).flat(), ...cap('時間の流れどおりに 並べる', C.main)),
  },
  {
    note: '❓なぜ、順番どおりに話すのでしょう。→ 聞いている人が場面を思いうかべやすいからです。first（まず）、then / after that（それから）、finally（最後に）のつなぎ語を使うと、さらに流れが伝わります。',
    add: fresh(...flow(['first\nまず', 'then\nそれから', 'after that\nそのあと', 'finally\n最後に'], 30, { h: 60, size: 11, color: C.purple, fill: FILL.purple, gap: 8, pad: 6 }).flat(), lb(160, 116, '動作を時間の順に ならべて話す', 12, C.ink, 'middle', true), ...cap('つなぎ語で 流れをしめす', C.purple)),
  },
  {
    note: '一日の話によく出る不規則動詞です。get up→got up、have→had、go→went、come→came、see→saw、read→read（つづりは同じで、発音が「レッド」に変わる）、make→made、buy→bought、meet→met、run→ran、swim→swam。goed や eated のように ed を付けるのはまちがいです。ペアで声に出して覚えましょう。',
    add: fresh(bx(6, 4, 98, 24, 'get up → got up', C.red, FILL.red, 10), bx(111, 4, 98, 24, 'have → had', C.red, FILL.red, 10), bx(216, 4, 98, 24, 'go → went', C.red, FILL.red, 10), bx(6, 32, 98, 24, 'come → came', C.red, FILL.red, 10), bx(111, 32, 98, 24, 'see → saw', C.red, FILL.red, 10), bx(216, 32, 98, 24, 'read → read', C.red, FILL.red, 10), bx(6, 60, 98, 24, 'make → made', C.red, FILL.red, 10), bx(111, 60, 98, 24, 'buy → bought', C.red, FILL.red, 10), bx(216, 60, 98, 24, 'meet → met', C.red, FILL.red, 10), bx(6, 88, 98, 24, 'run → ran', C.red, FILL.red, 10), bx(111, 88, 98, 24, 'swim → swam', C.red, FILL.red, 10), lb(160, 130, '✕  goed ・ eated ・ buyed', 12, C.red, 'middle', true), ...cap('ペアで 声に出して 覚える', C.main)),
  },
  {
    note: '週末の日記を書いてみましょう。Last Saturday, I got up late in the morning. In the afternoon, I went shopping with my mother. It was fun. In the evening, I cooked dinner with my sister. I went to bed at eleven. 最後に It was fun. のような感想を足すと、気持ちが伝わります。',
    add: fresh(bx(6, 4, 308, 24, 'Last Saturday, I got up late in the morning.', C.blue, FILL.blue, 10), bx(6, 32, 308, 24, 'In the afternoon, I went shopping with my mother.', C.blue, FILL.blue, 10), bx(6, 60, 308, 24, 'It was fun.', C.red, FILL.red, 11), bx(6, 88, 308, 24, 'In the evening, I cooked dinner with my sister.', C.blue, FILL.blue, 10), bx(6, 116, 308, 24, 'I went to bed at eleven.', C.blue, FILL.blue, 10), ...cap('感想の一文で 気持ちが伝わる', C.red)),
  },
  {
    note: '感想の文で was と were を使い分けます。主語が I・he・she・it のときは was、you・we・they のときは were です。My friends were happy.（私の友達はうれしそうだった）。まとめ：過去形は主語で変わらない、否定と疑問は did＋原形、不規則動詞はペアで覚える、順番どおりに話して感想を足す、です。',
    add: fresh(bx(6, 10, 148, 40, 'I ・ he ・ she ・ it\n→ was', C.blue, FILL.blue, 12), bx(166, 10, 148, 40, 'you ・ we ・ they\n→ were', C.green, FILL.green, 12), bx(6, 64, 308, 30, 'My friends were happy.', C.green, FILL.green, 13), lb(160, 110, '友達（複数）だから were', 12, C.green, 'middle', true), lb(160, 132, 'did の後ろは原形・順番どおり・感想を足す', 11, C.ink, 'middle', true), ...cap('was と were の使い分け', C.main)),
  },
], '過去形で一日を語る');

// ───────── new20_e6_eigo_02 思い出を伝える①：夏休みの思い出 ─────────
const u22: DiagramFigure = show([
  {
    note: '夏休みの思い出の文章は、3つのブロックで組み立てます。①導入（いつ・どこへ行ったか）、②出来事（何をしたか）、③感想（どう感じたか）。いきなり出来事を並べず、この型に入れるとまとまった文章になります。',
    add: [bx(6, 6, 308, 38, 'Last summer, I went to Okinawa\nwith my family.', C.blue, FILL.blue, 11), bx(6, 50, 308, 50, 'First, we went to the beach.\nThen, we swam in the sea.\nAfter that, we ate shaved ice.', C.green, FILL.green, 11), bx(6, 106, 308, 34, 'It was one of the best days of my life.', C.red, FILL.red, 11), ...cap('①導入　②出来事　③感想')],
  },
  {
    note: '❓出来事を並べるとき、なぜつなぎ語を使うのでしょう。→ 動詞を並べるだけだと単調になるからです。first（まず）、next / then（次に）、after that（そのあと）、finally / in the end（最後に）を使うと、「流れ」が読む人に伝わります。',
    add: fresh(...flow(['first\nまず', 'next / then\n次に', 'after that\nそのあと', 'finally\n最後に'], 20, { h: 64, size: 11, color: C.blue, fill: FILL.blue, gap: 8, pad: 6 }).flat(), lb(160, 112, '出来事を時間の順にならべる', 12, C.ink, 'middle', true), ...cap('つなぎ語で 流れが伝わる', C.blue)),
  },
  {
    note: '❓出来事は、いくつ書けばよいのでしょう。→ 3〜4個にしぼって、それぞれに It was fun. のような簡単な感想を添えるのがよいです。10個の事実を並べるより、採点する人にも伝わりやすくなります。',
    add: fresh(bx(10, 10, 140, 70, '✕\n10個の事実を\nならべる', C.red, FILL.red, 12), bx(170, 10, 140, 70, '○\n3〜4個＋\n簡単な感想', C.green, FILL.green, 12), lb(160, 104, '出来事を つめこみすぎない', 12, C.ink, 'middle', true), ...cap('しぼって、感想を添える', C.green)),
  },
  {
    note: '感想の表し方の1つ目は It was ~.（それは〜だった）です。形容詞（けいようし）を1つ入れるだけです。It was exciting.（わくわくした）、It was amazing.（すごかった）、It was a little scary.（少し怖かった）。',
    add: fresh(bx(10, 10, 300, 28, 'It was exciting.　わくわくした', C.blue, FILL.blue, 12), bx(10, 46, 300, 28, 'It was amazing.　すごかった', C.blue, FILL.blue, 12), bx(10, 82, 300, 28, 'It was a little scary.　少し怖かった', C.blue, FILL.blue, 12), ...cap('パターン① It was ~.', C.blue)),
  },
  {
    note: '2つ目は I was ~.（私は〜な気持ちだった）で、自分の感情を言います。I was so happy.（とてもうれしかった）、I was surprised.（驚いた）、I was nervous at first.（最初は緊張した）。',
    add: fresh(bx(10, 10, 300, 28, 'I was so happy.　とてもうれしかった', C.green, FILL.green, 12), bx(10, 46, 300, 28, 'I was surprised.　驚いた', C.green, FILL.green, 12), bx(10, 82, 300, 28, 'I was nervous at first.　最初は緊張した', C.green, FILL.green, 12), ...cap('パターン② I was ~.', C.green)),
  },
  {
    note: '❓3つ目の I enjoyed ~ing. で、なぜ ing を使うのでしょう。→ enjoy は、あとに動名詞（ing の形）だけを置く動詞で、to＋動詞は使えないからです。I enjoyed swimming in the sea.（海で泳いで楽しかった）が正しく、I enjoyed to swim. はまちがいです。',
    add: fresh(bx(10, 10, 300, 30, 'I enjoyed swimming in the sea.', C.purple, FILL.purple, 12), lb(160, 54, '海で泳いで楽しかった', 12, C.purple, 'middle', true), bx(10, 70, 300, 30, '✕  I enjoyed to swim.', C.red, FILL.red, 13), lb(160, 114, 'enjoy ＋ ing（to は使えない）', 12, C.red, 'middle', true), ...cap('パターン③ I enjoyed ~ing.', C.purple)),
  },
  {
    note: '一番の思い出を強調するには、My favorite part was ~.（一番よかったのは〜だった）や The best thing about the trip was ~.（旅行で一番よかったのは〜だった）を使います。My favorite part was watching the fireworks.（一番よかったのは花火を見たことだった）。',
    add: fresh(bx(10, 10, 300, 30, 'My favorite part was ~.', C.red, FILL.red, 13), bx(10, 48, 300, 30, 'The best thing about the trip was ~.', C.red, FILL.red, 12), bx(10, 90, 300, 34, 'My favorite part was\nwatching the fireworks.', C.main, FILL.warm, 12), lb(160, 138, '一番よかったのは花火を見たこと', 11, C.main, 'middle', true), ...band(150, lb(160, 192, '一番の思い出を強調する', 12, C.red, 'middle', true))),
  },
  {
    note: '完成した文章です。長野のおばあさんの家に行って、まずハイキング、次に虫とり、それからカレー作り。It was a lot of fun.（とても楽しかった）。一番よかったのは夜にたくさんの星を見たこと。街では見たことがなかったので、とても驚きました。',
    add: fresh(bx(6, 6, 308, 28, 'Last summer, I went to my grandmother\'s house in Nagano.', C.blue, FILL.blue, 10), ...flow(['First,\nhiked', 'Next,\ncaught insects', 'Then,\nmade curry'], 40, { h: 44, size: 10, color: C.green, fill: FILL.green, gap: 12, pad: 8 }).flat(), bx(6, 92, 308, 24, 'It was a lot of fun, and the curry was delicious.', C.red, FILL.red, 10), bx(6, 120, 308, 24, 'My favorite part was seeing so many stars at night.', C.main, FILL.warm, 10), ...cap('導入 → 出来事 → 感想', C.main)),
  },
  {
    note: '書き終えたら点検します。①動詞はすべて過去形か、②出来事は3〜4個に しぼって つなぎ語でつないだか、③最後に感想の文を入れたか、④ I went・We swam のように主語と動詞が合っているか。「どう感じたか、なぜか」を書けると差がつきます。',
    add: fresh(bx(10, 6, 300, 26, '✓ ① 動詞は すべて過去形', C.blue, FILL.blue, 12), bx(10, 36, 300, 26, '✓ ② 出来事は3〜4個、つなぎ語で', C.green, FILL.green, 12), bx(10, 66, 300, 26, '✓ ③ 感想の文を 入れた', C.red, FILL.red, 12), bx(10, 96, 300, 26, '✓ ④ 主語と動詞が 合っている', C.purple, FILL.purple, 12), ...cap('どう感じたか・なぜかを書く', C.main)),
  },
], '思い出の文章：導入・出来事・感想');

// ───────── new20_e6_eigo_03 思い出を伝える②：学校行事の思い出をスピーチする ─────────
const u23: DiagramFigure = show([
  {
    note: 'スピーチは、聞いている人を意識して5つのブロックで組み立てます。①呼びかけ・自己紹介、②話題の紹介、③出来事、④感想・学んだこと、⑤締めの一言です。',
    add: [bx(6, 4, 308, 24, '① 呼びかけ　Hello, everyone.', C.blue, FILL.blue, 11), bx(6, 32, 308, 24, '② 話題　いつ・どこで・何の行事か', C.green, FILL.green, 11), bx(6, 60, 308, 24, '③ 出来事　2〜3個の場面', C.purple, FILL.purple, 11), bx(6, 88, 308, 24, '④ 感想・学んだこと', C.main, FILL.warm, 11), bx(6, 116, 308, 24, '⑤ 締め　Thank you for listening.', C.red, FILL.red, 11), ...cap('スピーチの5ブロック')],
  },
  {
    note: '①と②の例です。Hello, everyone. Today I want to talk about my school trip.（みなさん、こんにちは。今日は修学旅行について話します）。Last October, my class went to Kyoto and Nara for two days.（去年の10月、私のクラスは京都と奈良に2日間行きました）。呼びかけで始め、いつ・どこかをすぐ伝えます。',
    add: fresh(bx(6, 8, 308, 40, 'Hello, everyone.\nToday I want to talk about my school trip.', C.blue, FILL.blue, 11), lb(160, 62, 'みなさん、こんにちは。今日は修学旅行について話します', 10, C.blue, 'middle', true), bx(6, 78, 308, 40, 'Last October, my class went to\nKyoto and Nara for two days.', C.green, FILL.green, 11), lb(160, 132, '去年の10月、京都と奈良に2日間行きました', 10, C.green, 'middle', true), ...band(150, lb(160, 192, '呼びかけ → 話題の紹介', 12, C.blue, 'middle', true))),
  },
  {
    note: '❓出来事は、なぜ2〜3個の場面にしぼるのでしょう。→ 全部を話すと、聞いている人の記憶に残らないからです。On the first day, we visited an old temple. On the second day, we made traditional sweets.（1日目は古いお寺を訪れ、2日目は伝統的なお菓子を作った）のように、印象に残った場面を選びます。',
    add: fresh(bx(6, 10, 148, 70, 'On the first day,\nwe visited an\nold temple.', C.green, FILL.green, 11), bx(166, 10, 148, 70, 'On the second day,\nwe made\ntraditional sweets.', C.green, FILL.green, 11), lb(80, 96, '1日目：お寺', 12, C.green, 'middle', true), lb(240, 96, '2日目：お菓子作り', 12, C.green, 'middle', true), ...cap('印象に残った場面を 選ぶ', C.green)),
  },
  {
    note: '❓その場にいるように伝えるには、どうするのでしょう。→ 見たもの・聞いたもの・感じたことを1つ足します。I saw a lot of beautiful autumn leaves.（きれいな紅葉を見た）、I heard a lot of interesting stories from the guide.（ガイドさんから面白い話を聞いた）、The mochi we made was very sticky, but it was delicious.（作ったおもちはとても伸びたが、おいしかった）。',
    add: fresh(bx(6, 8, 308, 32, 'I saw a lot of beautiful autumn leaves.', C.blue, FILL.blue, 11), lb(160, 52, '見た：きれいな紅葉', 11, C.blue, 'middle', true), bx(6, 62, 308, 32, 'I heard a lot of interesting stories\nfrom the guide.', C.green, FILL.green, 10), lb(160, 106, '聞いた：ガイドさんの面白い話', 11, C.green, 'middle', true), bx(6, 116, 308, 26, 'The mochi was very sticky, but delicious.', C.purple, FILL.purple, 10), ...band(150, lb(160, 192, '見る・聞く・感じる を足す', 12, C.main, 'middle', true))),
  },
  {
    note: '❓「大変だったこと」を話すと、なぜよいスピーチになるのでしょう。→ うまくいかなかったことを正直に話し、そこから何を得たかを伝えると、聞き手の共感を得やすいからです。リレーの前は緊張した → 友達が応援してくれた → 全力を出した → 一緒にゴールできてうれしかった、という流れです。',
    add: fresh(...flow(['nervous\n緊張した', 'friends\ncheered', 'I did\nmy best', 'so happy\nうれしい'], 24, { h: 60, size: 10, color: C.green, fill: FILL.green, gap: 10, pad: 6 }).flat(), lb(160, 108, '大変だったこと → のりこえたこと', 12, C.ink, 'middle', true), ...cap('完ぺきでなくても 伝わる', C.green)),
  },
  {
    note: '学んだことを伝える言い方です。I learned that ~.（〜だと学んだ）、I realized that ~.（〜だと気づいた）、Thanks to ~, I could ...（〜のおかげで…できた）。例は I learned that teamwork is very important.（チームワークがとても大切だと学んだ）です。',
    add: fresh(bx(6, 8, 308, 28, 'I learned that ~.　〜だと学んだ', C.blue, FILL.blue, 12), bx(6, 44, 308, 28, 'I realized that ~.　〜だと気づいた', C.green, FILL.green, 12), bx(6, 80, 308, 28, 'Thanks to ~, I could ...　〜のおかげで…できた', C.purple, FILL.purple, 11), lb(160, 126, 'I learned that teamwork is very important.', 11, C.blue, 'middle', true), ...band(150, lb(160, 192, '経験から得たことを伝える', 12, C.main, 'middle', true))),
  },
  {
    note: '❓スピーチの最後は、なぜ「Thank you for listening.」なのでしょう。→ 聞いてくれた人へのお礼で終えるのが基本のマナーだからです。for のあとは ing の形なので、Thank you for listen. はまちがいです。This event taught me a lot, and I will never forget it.（この行事はたくさんのことを教えてくれ、決して忘れません）で全体をまとめてから言います。',
    add: fresh(bx(6, 10, 308, 40, 'This event taught me a lot,\nand I will never forget it.', C.blue, FILL.blue, 11), bx(6, 62, 308, 28, 'Thank you for listening.', C.green, FILL.green, 13), bx(6, 100, 308, 26, '✕  Thank you for listen.', C.red, FILL.red, 12), lb(160, 140, 'for のあとは ing の形', 11, C.red, 'middle', true), ...band(150, lb(160, 192, '一言まとめて、お礼で終える', 12, C.green, 'middle', true))),
  },
  {
    note: '行事のことばを覚えます。sports day（運動会）、school trip（修学旅行）、chorus contest（合唱コンクール）、relay（リレー）、tug-of-war（綱引き）、graduation ceremony（卒業式）。まとめ：呼びかけ → 話題 → 2〜3個の出来事（描写つき）→ 学んだこと → お礼、の順で話します。',
    add: fresh(bx(6, 6, 148, 24, 'sports day　運動会', C.blue, FILL.blue, 11), bx(166, 6, 148, 24, 'school trip　修学旅行', C.blue, FILL.blue, 11), bx(6, 36, 148, 24, 'chorus contest　合唱', C.blue, FILL.blue, 10), bx(166, 36, 148, 24, 'relay　リレー', C.blue, FILL.blue, 11), bx(6, 66, 148, 24, 'tug-of-war　綱引き', C.blue, FILL.blue, 11), bx(166, 66, 148, 24, 'graduation ceremony', C.blue, FILL.blue, 10), lb(160, 114, '呼びかけ→話題→出来事→学び→お礼', 12, C.main, 'middle', true), ...cap('行事のことばと、話す順番', C.main)),
  },
], '行事のスピーチの組み立て');

// ───────── new20_e6_eigo_04 未来の予定を伝える①：週末の予定を友達と相談する ─────────
const u24: DiagramFigure = show([
  {
    note: '友達を誘うときは、まず相手の予定をたずねます。Are you free this Saturday?（今週の土曜日は空いている？）、Do you have any plans for the weekend?（週末に何か予定はある？）、What are you doing this Sunday?（今度の日曜日、何か予定は？）。',
    add: [...two(2, 'Are you free this Saturday?', '今週の土曜日は空いている？', C.blue, FILL.blue), ...two(50, 'Do you have any plans for the weekend?', '週末に何か予定はある？', C.green, FILL.green, 11), ...two(98, 'What are you doing this Sunday?', '今度の日曜日、何か予定は？', C.purple, FILL.purple), ...cap('相手の都合をたずねる')],
  },
  {
    note: '答え方です。空いているときは I\'m free. か I don\'t have any plans.（予定はありません）。予定があるときは I\'m going to visit my grandmother.（祖母を訪ねる予定です）や I have a piano lesson.（ピアノのレッスンがあります）と言います。',
    add: fresh(lb(80, 14, '空いているとき', 12, C.green, 'middle', true), bx(6, 24, 148, 28, "I'm free.", C.green, FILL.green, 12), bx(6, 58, 148, 40, "I don't have\nany plans.", C.green, FILL.green, 12), lb(240, 14, '予定があるとき', 12, C.red, 'middle', true), bx(166, 24, 148, 40, "I'm going to visit\nmy grandmother.", C.red, FILL.red, 11), bx(166, 70, 148, 28, 'I have a piano lesson.', C.red, FILL.red, 10), ...cap('答え方は 2つ', C.main)),
  },
  {
    note: '❓なぜ「Do you free?」ではないのでしょう。→ Are you free? は be動詞（are）の疑問文だからです。be動詞の疑問文には Do を使いません。「空いている」は am・are・is のなかまに free を続ける形です。',
    add: fresh(bx(6, 14, 70, 32, 'Are', C.green, FILL.green, 14), bx(82, 14, 70, 32, 'you', C.gray, FILL.gray, 14), bx(158, 14, 100, 32, 'free?', C.gray, FILL.gray, 14), lb(41, 62, 'be動詞', 11, C.green, 'middle', true), bx(30, 88, 260, 32, '✕  Do you free?', C.red, FILL.red, 14), lb(160, 138, 'be動詞の疑問文に Do は使わない', 12, C.red, 'middle', true), ...band(150, lb(160, 192, 'Are you free? が正しい', 12, C.green, 'middle', true))),
  },
  {
    note: '❓will と be going to は、会話でどう使い分けるのでしょう。→ その場で決めたことは will です。「新しいパン屋に行こう」と誘われて、その場で「うん、一緒に行くよ」と決めるなら I will go with you! と言います。',
    add: fresh(bx(100, 6, 120, 28, 'will', C.blue, FILL.blue, 15), lb(160, 48, 'その場で決める', 13, C.blue, 'middle', true), bx(6, 62, 308, 28, "A: Let's go to the new bakery this weekend.", C.gray, FILL.gray, 11), bx(6, 98, 308, 28, 'B: OK, I will go with you!', C.blue, FILL.blue, 13), lb(160, 140, 'うん、一緒に行くよ！（その場で決めた）', 11, C.blue, 'middle', true), ...band(150, lb(160, 192, 'その場で決めたら will', 12, C.blue, 'middle', true))),
  },
  {
    note: '前から決まっていた予定は be going to です。「土曜日は空いている？」と聞かれて、前からピアノのレッスンがあるなら I\'m going to have a piano lesson. と答えます。誘われる前から決まっていた、というところがポイントです。',
    add: fresh(bx(100, 6, 120, 28, 'be going to', C.red, FILL.red, 14), lb(160, 48, '前から決まっている', 13, C.red, 'middle', true), bx(6, 62, 308, 28, 'A: Are you free this Saturday?', C.gray, FILL.gray, 12), bx(6, 98, 308, 28, "B: Sorry, I'm going to have a piano lesson.", C.red, FILL.red, 11), lb(160, 140, 'ごめん、ピアノのレッスンがあるんだ', 11, C.red, 'middle', true), ...band(150, lb(160, 192, '前から決まっていたら be going to', 12, C.red, 'middle', true))),
  },
  {
    note: 'be going to には、もう1つ使い方があります。目の前の根拠（こんきょ）から予測するときです。Look at the sky. It\'s going to rain soon.（空を見て。もうすぐ雨が降りそうだ）。空のようすという根拠があるので、be going to を使います。',
    add: fresh(bx(10, 14, 130, 36, 'Look at the sky.', C.blue, FILL.blue, 12), lb(75, 64, '根拠：空のようす', 11, C.blue, 'middle', true), ar(142, 32, 176, 32, C.main), bx(180, 14, 130, 36, "It's going to rain soon.", C.red, FILL.red, 10), lb(245, 64, 'もうすぐ雨が降りそう', 11, C.red, 'middle', true), lb(160, 104, '根拠がある予測 → be going to', 13, C.ink, 'middle', true), ...cap('見えている根拠から 予測する', C.red)),
  },
  {
    note: '誘う言い方は3つあります。Would you like to come with us?（一緒に来ませんか）は to のあとが動詞の原形、How about coming with us?（一緒に来るのはどう？）は about のあとが ing の形、Let\'s go together.（一緒に行こう）です。❓Would you like to going としないのは、to のあとは必ず原形だからです。',
    add: fresh(bx(6, 8, 308, 28, 'Would you like to come with us?', C.blue, FILL.blue, 12), lb(160, 48, 'to ＋ 動詞の原形', 11, C.blue, 'middle', true), bx(6, 58, 308, 28, 'How about coming with us?', C.green, FILL.green, 12), lb(160, 98, 'about ＋ ing の形', 11, C.green, 'middle', true), bx(6, 108, 308, 28, "Let's go together.", C.purple, FILL.purple, 12), ...band(150, lb(160, 192, '✕ Would you like to going', 12, C.red, 'middle', true))),
  },
  {
    note: '誘いを受けるときは Sure, I\'d love to.（ぜひ）、That sounds fun.（楽しそう）、OK, let\'s go.（いいね、行こう）。断るときは I\'m sorry, I can\'t. I already have plans that day.（ごめんなさい、行けません。その日はもう予定があるんです）と、理由をそえて言います。',
    add: fresh(lb(80, 14, '受ける', 13, C.green, 'middle', true), bx(6, 24, 148, 28, "Sure, I'd love to.", C.green, FILL.green, 12), bx(6, 58, 148, 28, 'That sounds fun.', C.green, FILL.green, 12), bx(6, 92, 148, 28, "OK, let's go.", C.green, FILL.green, 12), lb(240, 14, '断る', 13, C.red, 'middle', true), bx(166, 24, 148, 96, "I'm sorry, I can't.\nI already have\nplans that day.", C.red, FILL.red, 12), ...cap('断るときは 理由もそえる', C.main)),
  },
  {
    note: '誘いを受けたら、最後に時間と場所を決めます。What time should we meet?（何時に待ち合わせる？）、Let\'s meet at the station at ten.（10時に駅で待ち合わせよう）、OK, see you then!（じゃあその時にね！）。Where should we meet? で場所をたずねることもできます。',
    add: fresh(bx(6, 8, 308, 30, 'B: What time should we meet?', C.blue, FILL.blue, 12), bx(6, 46, 308, 30, "A: Let's meet at the station at ten.", C.green, FILL.green, 12), bx(6, 84, 308, 30, 'B: OK, see you then!', C.blue, FILL.blue, 12), lb(160, 130, 'Where should we meet?　どこで待ち合わせる？', 11, C.ink, 'middle', true), ...cap('日時と場所を 決める', C.main)),
  },
  {
    note: 'まとめです。会話は、①誘う → ②都合を確認 → ③受ける・断る → ④詳細（時間・場所）を決める、の順に進みます。旅行や買い物など話題が変わっても、同じ型で組み立てられます。',
    add: fresh(...flow(['誘う', '都合を\n確認', '受ける\n断る', '時間・場所\nを決める'], 22, { h: 70, size: 12, color: C.blue, fill: FILL.blue, gap: 8, pad: 6 }).flat(), lb(160, 118, 'その場で決めたら will、前から決まっていたら be going to', 10, C.red, 'middle', true), ...cap('会話の4ステップ', C.green)),
  },
], '週末の予定を相談する会話');

// ───────── new20_e6_eigo_05 未来の予定を伝える②：お知らせ文・予告文を読む ─────────
const u25: DiagramFigure = show([
  {
    note: 'お知らせ文を読みます。学校祭のお知らせです。物語文とちがい、「事実」を正確に拾う読み方が必要です。まず全体をながめましょう。',
    add: [bx(6, 4, 308, 138, undefined, C.main, FILL.warm), lb(160, 20, 'School Festival Notice', 12, C.ink, 'middle', true), lb(16, 40, 'Our school festival will be held on', 10, C.ink, 'start'), lb(16, 56, 'Saturday, November 14th. It will start', 10, C.ink, 'start'), lb(16, 72, 'at nine a.m. and end at three p.m.', 10, C.ink, 'start'), lb(16, 88, 'All students and their families are welcome.', 10, C.ink, 'start'), lb(16, 104, 'Please bring your own lunch. If it rains, the', 10, C.ink, 'start'), lb(16, 120, 'event will be held in the gym instead of the schoolyard.', 10, C.ink, 'start'), ...cap('学校祭のお知らせ')],
  },
  {
    note: '❓どんな順で読めばよいのでしょう。→ 5つの質問を頭に置いて、答えを拾います。What（何が）：school festival、When（いつ）：11月14日土曜日の午前9時〜午後3時、Where（どこで）：校庭（雨なら体育館）、Who（だれが）：全生徒と家族、持ち物：お弁当（lunch）です。',
    add: fresh(bx(6, 4, 70, 24, 'What', C.blue, FILL.blue, 11), bx(80, 4, 234, 24, 'school festival　学校祭', C.blue, FILL.blue, 11), bx(6, 32, 70, 24, 'When', C.green, FILL.green, 11), bx(80, 32, 234, 24, 'Sat., Nov. 14th　9 a.m. – 3 p.m.', C.green, FILL.green, 11), bx(6, 60, 70, 24, 'Where', C.purple, FILL.purple, 11), bx(80, 60, 234, 24, 'schoolyard（雨なら gym）', C.purple, FILL.purple, 11), bx(6, 88, 70, 24, 'Who', C.main, FILL.warm, 11), bx(80, 88, 234, 24, 'all students and their families', C.main, FILL.warm, 11), bx(6, 116, 70, 24, '持ち物', C.red, FILL.red, 11), bx(80, 116, 234, 24, 'lunch　お弁当', C.red, FILL.red, 11), ...cap('5つの質問で 情報を拾う', C.main)),
  },
  {
    note: '❓お知らせ文では、なぜ be going to より will がよく使われるのでしょう。→ 話し手個人の予定ではなく、「公式に決まっていること」や「客観的な予測」を伝える場面が多いからです。The concert will be held on May 5th.（コンサートは5月5日に開催されます）。',
    add: fresh(bx(6, 10, 148, 40, 'be going to\n個人の予定', C.gray, FILL.gray, 12), bx(166, 10, 148, 40, 'will\n公式・客観的', C.blue, FILL.blue, 12), ar(160, 64, 160, 80, C.blue), bx(6, 84, 308, 30, 'The concert will be held on May 5th.', C.blue, FILL.blue, 12), lb(160, 130, 'コンサートは5月5日に開催されます', 11, C.blue, 'middle', true), ...cap('お知らせは will が多い', C.blue)),
  },
  {
    note: '❓「開催される」は、なぜ be held と受け身で書くのでしょう。→ コンサート自身が「開催する」のではなく、「開催される」立場だからです。The concert will hold ~. と書くのはまちがいです。take place も「行われる」という意味で使えます。The event will take place in the park.（イベントは公園で行われます）。',
    add: fresh(bx(6, 10, 308, 30, 'The concert will be held ~.', C.green, FILL.green, 13), lb(160, 54, '開催される（受け身）', 12, C.green, 'middle', true), bx(6, 68, 308, 30, '✕  The concert will hold ~.', C.red, FILL.red, 13), bx(6, 108, 308, 30, 'The event will take place in the park.', C.blue, FILL.blue, 11), ...band(150, lb(160, 192, 'be held ＝ take place ＝ 行われる', 12, C.green, 'middle', true))),
  },
  {
    note: '変更や中止の知らせです。The trip will be canceled if it rains.（雨天の場合、遠足は中止になります）、The date has been changed to June 2nd.（日付は6月2日に変更されました）。canceled は「中止された」、changed は「変更された」です。',
    add: fresh(bx(6, 14, 308, 30, 'The trip will be canceled if it rains.', C.red, FILL.red, 12), lb(160, 58, '雨天の場合、遠足は中止になります', 11, C.red, 'middle', true), bx(6, 78, 308, 30, 'The date has been changed to June 2nd.', C.blue, FILL.blue, 12), lb(160, 122, '日付は6月2日に変更されました', 11, C.blue, 'middle', true), ...cap('変更・中止の知らせ', C.main)),
  },
  {
    note: '持ち物・注意の言い方です。Please bring your umbrella.（傘をお持ちください）、Don\'t forget to bring your ID card.（IDカードを忘れずにお持ちください）、Students should arrive by eight thirty.（生徒は8時30分までに到着してください）。by は「〜までに」です。',
    add: fresh(bx(6, 10, 308, 28, 'Please bring your umbrella.', C.blue, FILL.blue, 12), lb(160, 50, '傘をお持ちください', 11, C.blue, 'middle', true), bx(6, 60, 308, 28, "Don't forget to bring your ID card.", C.green, FILL.green, 12), lb(160, 100, 'IDカードを忘れずにお持ちください', 11, C.green, 'middle', true), bx(6, 110, 308, 28, 'Students should arrive by eight thirty.', C.purple, FILL.purple, 11), ...band(150, lb(160, 192, 'by ＝ 〜までに（8時30分まで）', 12, C.purple, 'middle', true))),
  },
  {
    note: '天気予報も「未来のお知らせ」です。It will be sunny tomorrow.（明日は晴れるでしょう）。It will be cloudy in the morning and rainy in the afternoon.（午前は曇り、午後は雨でしょう）。The high will be 25 degrees, and the low will be 15 degrees.（最高気温は25度、最低気温は15度でしょう）。',
    add: fresh(bx(6, 6, 100, 26, 'sunny　晴れ', C.main, FILL.yellow, 11), bx(110, 6, 100, 26, 'cloudy　曇り', C.gray, FILL.gray, 11), bx(214, 6, 100, 26, 'rainy　雨', C.blue, FILL.blue, 11), bx(6, 38, 100, 26, 'snowy　雪', C.blue, FILL.blue, 11), bx(110, 38, 100, 26, 'windy　風が強い', C.green, FILL.green, 10), bx(214, 38, 100, 26, 'foggy　霧', C.gray, FILL.gray, 11), bx(6, 76, 308, 26, 'The high will be 25 degrees,', C.red, FILL.red, 11), bx(6, 106, 308, 26, 'and the low will be 15 degrees.', C.blue, FILL.blue, 11), ...cap('天気のことば と 気温', C.main)),
  },
  {
    note: 'モデル文を読み取ります。「午前中は曇りですが、午後は晴れるでしょう。最高気温は20度です。念のため傘をお忘れなく」。午前は曇り、午後は晴れ（clear up は天気が回復する）、最高気温は20度、持ち物は傘（念のため）。この4つの情報が読み取れます。',
    add: fresh(bx(6, 10, 148, 40, 'morning\ncloudy　曇り', C.gray, FILL.gray, 12), ar(156, 30, 164, 30, C.main), bx(166, 10, 148, 40, 'afternoon\nclear up　晴れ', C.main, FILL.yellow, 12), bx(6, 62, 148, 28, 'high ＝ 20 degrees', C.red, FILL.red, 11), bx(166, 62, 148, 28, 'umbrella　傘', C.blue, FILL.blue, 11), lb(160, 112, '午前：曇り　午後：晴れ　最高20度　傘は念のため', 11, C.ink, 'middle', true), ...cap('4つの情報を 読み取る', C.main)),
  },
  {
    note: 'まとめです。お知らせ文は、①What・When・Where・Who・持ち物の5つを拾う、②公式な予定は will と be held、③変更・中止・持ち物・注意のことばを見のがさない、④天気予報は天気・気温・持ち物の4つを読み取る。全部を訳そうとせず、聞かれているキーワードを先に探しましょう。',
    add: fresh(bx(10, 6, 300, 26, '① What・When・Where・Who・持ち物', C.blue, FILL.blue, 11), bx(10, 36, 300, 26, '② will ・ be held ・ take place', C.green, FILL.green, 11), bx(10, 66, 300, 26, '③ canceled ・ changed ・ Don\'t forget', C.purple, FILL.purple, 11), bx(10, 96, 300, 26, '④ 天気予報：天気・気温・持ち物', C.red, FILL.red, 11), ...cap('キーワードを 先に探す', C.main)),
  },
], 'お知らせ文と天気予報の読み方');

// ───────── new20_e6_eigo_06 将来の夢①：What do you want to be? に答える ─────────
const u26: DiagramFigure = show([
  {
    note: '将来の夢のたずね方と、答え方の型です。What do you want to be in the future?（あなたは将来何になりたいですか）に、I want to be a ＋ 職業名.（私は〜になりたい）と答えます。I want to be a doctor. なら「医者になりたい」です。',
    add: [bx(6, 10, 308, 32, 'What do you want to be in the future?', C.blue, FILL.blue, 12), lb(160, 56, 'あなたは将来何になりたいですか', 11, C.blue, 'middle', true), ar(160, 66, 160, 80, C.main), bx(6, 84, 308, 32, 'I want to be a doctor.', C.green, FILL.green, 14), lb(160, 130, '私は医者になりたい', 11, C.green, 'middle', true), ...cap('夢をたずねる・答える')],
  },
  {
    note: '❓職業名の前の a と an は、どう使い分けるのでしょう。→ つづりではなく、音で決まります。doctor は子音の音で始まるので a doctor、English teacher は母音の音（エ）で始まるので an English teacher です。',
    add: fresh(bx(10, 14, 140, 34, 'a doctor', C.blue, FILL.blue, 14), lb(80, 64, 'ド…（子音の音）', 11, C.blue, 'middle', true), bx(170, 14, 140, 34, 'an English teacher', C.red, FILL.red, 12), lb(240, 64, 'エ…（母音の音）', 11, C.red, 'middle', true), lb(160, 104, '母音の音で始まる語の前は an', 13, C.ink, 'middle', true), ...cap('a と an は 音で決まる', C.main)),
  },
  {
    note: 'よく使う職業名です。doctor（医者）、nurse（看護師）、teacher（先生）、vet（獣医〈じゅうい〉）、scientist（科学者）、pilot（パイロット）、astronaut（宇宙飛行士）、soccer player（サッカー選手）、cook（コック）、pastry chef（パティシエ）、firefighter（消防士）、police officer（警察官）。',
    add: fresh(bx(6, 4, 98, 24, 'doctor　医者', C.blue, FILL.blue, 10), bx(111, 4, 98, 24, 'nurse　看護師', C.blue, FILL.blue, 10), bx(216, 4, 98, 24, 'teacher　先生', C.blue, FILL.blue, 10), bx(6, 32, 98, 24, 'vet　獣医', C.blue, FILL.blue, 10), bx(111, 32, 98, 24, 'scientist', C.blue, FILL.blue, 10), bx(216, 32, 98, 24, 'pilot', C.blue, FILL.blue, 10), bx(6, 60, 98, 24, 'astronaut', C.blue, FILL.blue, 10), bx(111, 60, 98, 24, 'soccer player', C.blue, FILL.blue, 10), bx(216, 60, 98, 24, 'cook　コック', C.blue, FILL.blue, 10), bx(6, 88, 98, 24, 'pastry chef', C.blue, FILL.blue, 10), bx(111, 88, 98, 24, 'firefighter', C.blue, FILL.blue, 10), bx(216, 88, 98, 24, 'police officer', C.blue, FILL.blue, 10), lb(160, 128, '職業名の前には a か an', 12, C.ink, 'middle', true), ...cap('よく使う職業名', C.main)),
  },
  {
    note: '❓なぜ理由を加えるのでしょう。→ 職業名だけでは考えが伝わらず、because（〜だから）で理由をつけると説得力が出るからです。I want to be a vet because I love animals.（動物が大好きだから獣医になりたい）。',
    add: fresh(bx(6, 14, 188, 32, 'I want to be a vet', C.blue, FILL.blue, 13), bx(200, 14, 114, 32, 'because', C.red, FILL.red, 13), bx(6, 62, 308, 32, 'I love animals.', C.green, FILL.green, 14), lb(160, 112, '動物が大好きだから獣医になりたい', 12, C.ink, 'middle', true), ...cap('夢 ＋ because ＋ 理由', C.red)),
  },
  {
    note: '❓because のあとに名詞だけを置いてもよいでしょうか。→ いけません。because のあとは「主語＋動詞」の文が続きます。because animal ではなく、because I love animals とします。I want to be a scientist because I am interested in space.（宇宙に興味があるから科学者になりたい）のように言います。',
    add: fresh(bx(6, 10, 308, 30, '✕  because animal', C.red, FILL.red, 14), bx(6, 52, 308, 30, '○  because I love animals', C.green, FILL.green, 14), bx(6, 94, 308, 36, 'I want to be a scientist because\nI am interested in space.', C.blue, FILL.blue, 11), ...band(150, lb(160, 192, 'because のあとは 主語＋動詞', 12, C.red, 'middle', true))),
  },
  {
    note: '理由をふくらませる言い方です。I am interested in ~.（〜に興味がある）、I like ~ing.（〜することが好き）、I am good at ~ing.（〜することが得意）。例：I am interested in science. / I like taking care of animals. / I am good at drawing pictures.',
    add: fresh(bx(6, 8, 200, 28, 'I am interested in science.', C.blue, FILL.blue, 11), lb(214, 22, '理科に興味がある', 11, C.ink, 'start', true), bx(6, 46, 200, 28, 'I like taking care of animals.', C.green, FILL.green, 10), lb(214, 60, '世話をするのが好き', 11, C.ink, 'start', true), bx(6, 84, 200, 28, 'I am good at drawing pictures.', C.purple, FILL.purple, 10), lb(214, 98, '絵を描くのが得意', 11, C.ink, 'start', true), ...cap('興味・好き・得意を 足す', C.main)),
  },
  {
    note: '夢がまだ決まっていないときも、正直に言えます。I haven\'t decided yet.（まだ決めていません）、I don\'t know yet, but I\'m interested in a lot of things.（まだわからないけど、いろいろなことに興味がある）、I have some dreams, but I haven\'t chosen one yet.（夢はいくつかあるけど、まだ1つにしぼっていない）。',
    add: fresh(bx(6, 8, 308, 28, "I haven't decided yet.", C.blue, FILL.blue, 12), bx(6, 42, 308, 36, "I don't know yet, but I'm interested\nin a lot of things.", C.green, FILL.green, 11), bx(6, 84, 308, 36, "I have some dreams, but I haven't\nchosen one yet.", C.purple, FILL.purple, 11), ...cap('決まっていないときの答え方', C.main)),
  },
  {
    note: 'まとめて短いスピーチにします。My dream is to be a vet.（夢）→ I want to be a vet because I love animals very much.（理由）→ I have a dog, and I take care of him every day.（今していること）→ In the future, I want to help sick animals.（将来）→ I will study hard to make my dream come true.（夢をかなえるために一生懸命勉強します）。',
    add: fresh(bx(6, 4, 308, 24, '夢　My dream is to be a vet.', C.blue, FILL.blue, 10), bx(6, 32, 308, 24, '理由　I love animals very much.', C.red, FILL.red, 10), bx(6, 60, 308, 24, '今　I take care of my dog every day.', C.green, FILL.green, 10), bx(6, 88, 308, 24, '将来　I want to help sick animals.', C.purple, FILL.purple, 10), bx(6, 116, 308, 24, '決意　I will make my dream come true.', C.main, FILL.warm, 10), ...cap('夢 → 理由 → 今 → 将来 → 決意', C.main)),
  },
], '将来の夢を答える型');

// ───────── new20_e6_eigo_07 将来の夢②：夢について理由をそえてスピーチする ─────────
const u27: DiagramFigure = show([
  {
    note: '1分ほどのスピーチの型です。①夢の発表、②理由（きっかけ）、③今している努力・準備、④将来したいこと、⑤締めの一言（決意）。夢と理由だけでなく、今の行動と決意を加えると深みが出ます。',
    add: [bx(6, 4, 308, 24, '① 夢の発表', C.blue, FILL.blue, 12), bx(6, 32, 308, 24, '② 理由・きっかけ', C.red, FILL.red, 12), bx(6, 60, 308, 24, '③ 今している努力・準備', C.green, FILL.green, 12), bx(6, 88, 308, 24, '④ 将来したいこと', C.purple, FILL.purple, 12), bx(6, 116, 308, 24, '⑤ 締めの一言（決意）', C.main, FILL.warm, 12), ...cap('スピーチの5つの部分')],
  },
  {
    note: '❓理由は、どう語るとよいのでしょう。→ いつ、何がきっかけでその夢を持ったかを語ります。When I was seven years old, I visited a hospital with my grandmother.（7歳のとき、祖母と病院に行った）。The doctors were very kind, and I decided to be a doctor too.（医師たちがとても優しくて、私も医者になろうと決めた）。',
    add: fresh(...flow(['age 7\n7歳のとき', 'visited a\nhospital', 'kind\ndoctors', 'decided to\nbe a doctor'], 14, { h: 66, size: 10, color: C.red, fill: FILL.red, gap: 8, pad: 6 }).flat(), lb(160, 104, 'When I was seven years old, ...', 11, C.red, 'middle', true), lb(160, 124, '祖母と病院に行き、優しい医師を見て、夢を決めた', 10, C.ink, 'middle', true), ...band(150, lb(160, 192, 'きっかけを語る', 12, C.red, 'middle', true))),
  },
  {
    note: '❓なぜ「かっこいいから」だけではだめなのでしょう。→ 抽象的な理由より、「いつ・何がきっかけで」という具体的なエピソードのほうが、聞き手の心に残るからです。',
    add: fresh(bx(10, 14, 140, 60, '✕\nかっこいいから', C.red, FILL.red, 13), bx(170, 14, 140, 60, '○\n7歳のとき病院で\n優しい医師に会った', C.green, FILL.green, 11), lb(160, 104, '具体的なエピソードを語る', 13, C.ink, 'middle', true), ...cap('きっかけを具体的に', C.green)),
  },
  {
    note: '今していることを伝えます。習慣は現在形で、I study English every day.（毎日英語を勉強している）。続けていることは現在進行形で、I am practicing the piano for my dream of becoming a musician.（音楽家になる夢のためにピアノを練習している）。',
    add: fresh(bx(6, 8, 308, 30, 'I study English every day.', C.blue, FILL.blue, 13), lb(160, 52, '習慣 → 現在形', 12, C.blue, 'middle', true), bx(6, 68, 308, 40, 'I am practicing the piano for my dream\nof becoming a musician.', C.green, FILL.green, 11), lb(160, 122, '続けていること → 現在進行形（be＋ing）', 11, C.green, 'middle', true), ...cap('今の努力を伝える', C.main)),
  },
  {
    note: '将来のことは I hope to ~.（〜したいと願っている）でも言えます。want to より少しやわらかい願いです。I hope to work at a zoo someday.（いつか動物園で働きたいと願っている）。',
    add: fresh(bx(6, 12, 148, 32, 'I want to ~.', C.blue, FILL.blue, 13), bx(166, 12, 148, 32, 'I hope to ~.', C.green, FILL.green, 13), lb(80, 58, 'ふつうの願い', 12, C.blue, 'middle', true), lb(240, 58, 'ややわらかい願い', 12, C.green, 'middle', true), bx(6, 80, 308, 30, 'I hope to work at a zoo someday.', C.green, FILL.green, 12), lb(160, 126, 'いつか動物園で働きたいと願っている', 11, C.green, 'middle', true), ...band(150, lb(160, 192, '将来の願いの言い方', 12, C.main, 'middle', true))),
  },
  {
    note: '「〜する人になりたい」は I want to be someone who ~. です。I want to be someone who can help people in need.（困っている人を助けられる人になりたい）。who が主語のはたらきをするので、動詞は who のすぐ後ろに続きます。who の後ろに動詞を置くことを忘れないようにしましょう。',
    add: fresh(bx(6, 14, 120, 32, 'I want to be\nsomeone', C.blue, FILL.blue, 11), bx(132, 14, 50, 32, 'who', C.red, FILL.red, 14), bx(188, 14, 126, 32, 'can help people\nin need.', C.green, FILL.green, 10), lb(157, 64, 'who が主語のはたらき → 動詞がすぐ続く', 11, C.red, 'middle', true), lb(160, 92, '困っている人を助けられる人になりたい', 12, C.ink, 'middle', true), ...cap('someone who ＋ 動詞', C.red)),
  },
  {
    note: '締めの一言には決意を入れます。I will do my best.（全力を尽くします）、I will never give up on my dream.（夢を決してあきらめません）、I believe I can make it.（きっとできると信じています）。今の努力と決意をセットで語ると、本気度が伝わります。',
    add: fresh(bx(6, 10, 308, 30, 'I will do my best.', C.blue, FILL.blue, 13), lb(160, 54, '全力を尽くします', 11, C.blue, 'middle', true), bx(6, 62, 308, 30, 'I will never give up on my dream.', C.green, FILL.green, 12), lb(160, 106, '夢を決してあきらめません', 11, C.green, 'middle', true), bx(6, 114, 308, 28, 'I believe I can make it.', C.purple, FILL.purple, 12), ...band(150, lb(160, 192, '決意の一言で 結ぶ', 12, C.main, 'middle', true))),
  },
  {
    note: '完成モデルの流れです。My dream is to be a vet.（夢）→ 8歳のとき、犬が病気になり優しい獣医さんが助けてくれた（きっかけ）→ Now, I study science hard and read books about animals every week.（今）→ I hope to work at an animal hospital.（将来）→ I will never give up on my dream. Thank you for listening.（決意とお礼）。',
    add: fresh(...flow(['dream\nvet', 'age 8\ndog sick', 'kind vet\nhelped'], 8, { h: 50, size: 10, color: C.red, fill: FILL.red, gap: 14, pad: 8 }).flat(), ...flow(['now: study\nscience', 'future:\nanimal hospital', 'never give up\nthank you'], 78, { h: 50, size: 10, color: C.green, fill: FILL.green, gap: 14, pad: 8 }).flat(), ...cap('夢 → きっかけ → 今 → 将来 → 決意', C.main)),
  },
], '夢のスピーチ：きっかけと努力と決意');

// ───────── new20_e6_eigo_08 趣味を語る ─────────
const u28: DiagramFigure = show([
  {
    note: '趣味を語る表現は4つあり、あとに ing の形（動名詞〈どうめいし〉＝「〜すること」）が続きます。I like playing ~.（〜するのが好き）、I enjoy reading ~.（〜を楽しんでいる）、I am interested in cooking.（料理に興味がある）、I am good at drawing.（絵を描くのが得意）。',
    add: [bx(6, 6, 190, 28, 'I like playing video games.', C.blue, FILL.blue, 11), lb(204, 20, '〜するのが好き', 11, C.ink, 'start', true), bx(6, 40, 190, 28, 'I enjoy reading manga.', C.green, FILL.green, 11), lb(204, 54, '〜を楽しんでいる', 11, C.ink, 'start', true), bx(6, 74, 190, 28, 'I am interested in cooking.', C.purple, FILL.purple, 11), lb(204, 88, '〜に興味がある', 11, C.ink, 'start', true), bx(6, 108, 190, 28, 'I am good at drawing.', C.red, FILL.red, 11), lb(204, 122, '〜が得意', 11, C.ink, 'start', true), ...cap('趣味を伝える4つの形')],
  },
  {
    note: '❓like と enjoy は、あとに続く形がどうちがうのでしょう。→ like は ing の形も to＋動詞も使えます（I like playing. / I like to play.）。enjoy は ing の形だけで、to＋動詞は使えません。I enjoy reading manga. が正しく、I enjoy to read. はまちがいです。',
    add: fresh(bx(6, 8, 148, 28, 'like', C.blue, FILL.blue, 14), bx(166, 8, 148, 28, 'enjoy', C.green, FILL.green, 14), bx(6, 44, 148, 28, 'I like playing.', C.blue, FILL.blue, 11), bx(6, 78, 148, 28, 'I like to play.', C.blue, FILL.blue, 11), lb(80, 122, 'どちらも ○', 12, C.blue, 'middle', true), bx(166, 44, 148, 28, 'I enjoy reading.', C.green, FILL.green, 11), bx(166, 78, 148, 28, '✕  I enjoy to read.', C.red, FILL.red, 11), lb(240, 122, 'ing の形だけ', 12, C.green, 'middle', true), ...cap('enjoy は ing だけ', C.green)),
  },
  {
    note: '❓なぜ interested in や good at のあとは ing なのでしょう。→ in と at は前置詞（ぜんちし）で、前置詞のあとに動詞を置くときは、必ず ing の形（「〜すること」という名詞のはたらき）にするきまりだからです。good at draw や interested in cook はまちがいです。',
    add: fresh(bx(6, 12, 90, 30, 'interested', C.gray, FILL.gray, 12), bx(100, 12, 46, 30, 'in', C.red, FILL.red, 14), bx(150, 12, 100, 30, 'cooking', C.green, FILL.green, 13), bx(6, 56, 90, 30, 'good', C.gray, FILL.gray, 12), bx(100, 56, 46, 30, 'at', C.red, FILL.red, 14), bx(150, 56, 100, 30, 'drawing', C.green, FILL.green, 13), lb(280, 28, '前置詞', 11, C.red, 'middle', true), lb(160, 108, '前置詞のあとの動詞は ing', 13, C.ink, 'middle', true), lb(160, 130, '✕  good at draw', 12, C.red, 'middle', true), ...band(150, lb(160, 192, '前置詞 ＋ ing の形', 12, C.red, 'middle', true))),
  },
  {
    note: 'どのくらいの頻度（ひんど）かを足すと具体的になります。always（いつも）、usually（たいてい）、often（よく）、sometimes（ときどき）。回数なら once a week（週に1回）、twice a week（週に2回）です。I play basketball twice a week.（週に2回バスケットボールをする）。',
    add: fresh(...flow(['always\nいつも', 'usually\nたいてい', 'often\nよく', 'sometimes\nときどき'], 8, { h: 50, size: 10, color: C.blue, fill: FILL.blue, gap: 8, pad: 6 }).flat(), bx(6, 72, 148, 28, 'once a week　週に1回', C.green, FILL.green, 10), bx(166, 72, 148, 28, 'twice a week　週に2回', C.green, FILL.green, 10), lb(160, 122, 'I play basketball twice a week.', 12, C.ink, 'middle', true), ...cap('どのくらい するか', C.main)),
  },
  {
    note: '期間（きかん）も足せます。I have played the piano for six years.（6年間ピアノを弾いている）は、今まで続いていることを表します。I started playing soccer when I was five.（5歳のときサッカーを始めた）は、始めた時を表します。',
    add: fresh(bx(6, 10, 308, 30, 'I have played the piano for six years.', C.blue, FILL.blue, 12), lb(160, 54, '6年間ピアノを弾いている（今も続く）', 11, C.blue, 'middle', true), bx(6, 70, 308, 30, 'I started playing soccer when I was five.', C.green, FILL.green, 11), lb(160, 114, '5歳のときサッカーを始めた', 11, C.green, 'middle', true), ...band(150, lb(160, 192, '続けた期間と、始めた時', 12, C.main, 'middle', true))),
  },
  {
    note: '始めたきっかけも足せます。My father taught me how to ~.（父が〜のやり方を教えてくれた）、I started playing tennis because my sister plays it too.（姉もテニスをするので、テニスを始めた）。頻度・期間・きっかけのうち1〜2個を足すだけで、印象に残る自己紹介になります。',
    add: fresh(bx(6, 10, 308, 30, 'My father taught me how to ~.', C.purple, FILL.purple, 12), lb(160, 54, '父が〜のやり方を教えてくれた', 11, C.purple, 'middle', true), bx(6, 68, 308, 40, 'I started playing tennis because\nmy sister plays it too.', C.purple, FILL.purple, 11), lb(160, 122, '姉もするので、テニスを始めた', 11, C.purple, 'middle', true), ...band(150, lb(160, 192, 'きっかけを足す', 12, C.purple, 'middle', true))),
  },
  {
    note: '完成した自己紹介です。①趣味：My hobby is playing soccer. ②きっかけ：I started playing soccer when I was six years old. ③頻度：I practice with my team twice a week. ④得意：I enjoy playing with my friends, and I am good at passing the ball. ⑤将来：I want to be a good soccer player like him someday.',
    add: fresh(bx(6, 4, 308, 24, '① My hobby is playing soccer.', C.blue, FILL.blue, 10), bx(6, 32, 308, 24, '② I started playing soccer when I was six years old.', C.green, FILL.green, 10), bx(6, 60, 308, 24, '③ I practice with my team twice a week.', C.purple, FILL.purple, 10), bx(6, 88, 308, 24, '④ I enjoy playing ... I am good at passing the ball.', C.red, FILL.red, 10), bx(6, 116, 308, 24, '⑤ I want to be a good soccer player someday.', C.main, FILL.warm, 10), ...cap('趣味 → きっかけ → 頻度 → 得意 → 将来', C.main)),
  },
], '趣味の自己紹介：ing の形と3つの足し方');

export const XF_CEL_FIGURES: Record<string, DiagramFigure> = {
  'xf_new20_e5_eigo_11': u11,
  'xf_new20_e5_eigo_12': u12,
  'xf_new20_e5_eigo_13': u13,
  'xf_new20_e5_eigo_14': u14,
  'xf_new20_e5_eigo_15': u15,
  'xf_new20_e5_eigo_16': u16,
  'xf_new20_e5_eigo_17': u17,
  'xf_new20_e5_eigo_18': u18,
  'xf_new20_e5_eigo_19': u19,
  'xf_new20_e5_eigo_20': u20,
  'xf_new20_e6_eigo_01': u21,
  'xf_new20_e6_eigo_02': u22,
  'xf_new20_e6_eigo_03': u23,
  'xf_new20_e6_eigo_04': u24,
  'xf_new20_e6_eigo_05': u25,
  'xf_new20_e6_eigo_06': u26,
  'xf_new20_e6_eigo_07': u27,
  'xf_new20_e6_eigo_08': u28,
};

export const XF_CEL_SECTIONS: Record<string, string> = {
  'new20_e5_eigo_11#0': 'xf_new20_e5_eigo_11',
  'new20_e5_eigo_12#0': 'xf_new20_e5_eigo_12',
  'new20_e5_eigo_13#0': 'xf_new20_e5_eigo_13',
  'new20_e5_eigo_14#0': 'xf_new20_e5_eigo_14',
  'new20_e5_eigo_15#0': 'xf_new20_e5_eigo_15',
  'new20_e5_eigo_16#0': 'xf_new20_e5_eigo_16',
  'new20_e5_eigo_17#0': 'xf_new20_e5_eigo_17',
  'new20_e5_eigo_18#0': 'xf_new20_e5_eigo_18',
  'new20_e5_eigo_19#0': 'xf_new20_e5_eigo_19',
  'new20_e5_eigo_20#0': 'xf_new20_e5_eigo_20',
  'new20_e6_eigo_01#0': 'xf_new20_e6_eigo_01',
  'new20_e6_eigo_02#0': 'xf_new20_e6_eigo_02',
  'new20_e6_eigo_03#0': 'xf_new20_e6_eigo_03',
  'new20_e6_eigo_04#0': 'xf_new20_e6_eigo_04',
  'new20_e6_eigo_05#0': 'xf_new20_e6_eigo_05',
  'new20_e6_eigo_06#0': 'xf_new20_e6_eigo_06',
  'new20_e6_eigo_07#0': 'xf_new20_e6_eigo_07',
  'new20_e6_eigo_08#0': 'xf_new20_e6_eigo_08',
};
