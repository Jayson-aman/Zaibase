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

// ───────── new20_e6_eigo_09 友達や家族を比べる ─────────
const hbar = (x: number, h: number, t: string, c: string, f: string) => bx(x, 136 - h, 56, h, t, c, f, 11);
const u29: DiagramFigure = show([
  {
    note: '人を比べるときの形は3つです。2人（2つ）を比べるときは「比較級＋than」、3人以上の中でいちばんのときは「the＋最上級＋in…」、同じくらいのときは「as ~ as」です。',
    add: [bx(6, 10, 308, 28, 'My brother is taller than me.', C.blue, FILL.blue, 12), lb(160, 52, '兄は私より背が高い（二つを比べる）', 11, C.blue, 'middle', true), bx(6, 62, 308, 28, 'My father is the tallest in my family.', C.green, FILL.green, 12), lb(160, 104, '父は家族の中でいちばん背が高い', 11, C.green, 'middle', true), bx(6, 112, 308, 28, 'I am as tall as my mother.', C.purple, FILL.purple, 12), ...cap('比べる3つの形')],
  },
  {
    note: '家族の背の高さを並べてみます。父がいちばん高く、兄は私より高く、私と母は同じくらいです。これを文にすると、My brother is taller than me.、My father is the tallest in my family.、I am as tall as my mother. になります。',
    add: fresh(ln(8, 136, 312, 136, C.gray), hbar(24, 104, 'father', C.green, FILL.green), hbar(98, 90, 'brother', C.blue, FILL.blue), hbar(172, 76, 'me', C.red, FILL.red), hbar(246, 76, 'mother', C.purple, FILL.purple), lb(126, 22, '兄 ＞ 私', 11, C.blue, 'middle', true), lb(52, 12, 'いちばん高い', 11, C.green, 'middle', true), lb(240, 48, '私 ＝ 母', 11, C.purple, 'middle', true), ...cap('背の高さをくらべる')),
  },
  {
    note: '❓なぜ「私より」「家族の中で」と相手を書くのでしょう。→ My brother is tall.（兄は背が高い）だけでは、どれくらい高いのかが伝わらないからです。比べる相手や範囲（than me・in my family）を示すと、はじめて具体的になります。',
    add: fresh(bx(6, 12, 308, 28, 'My brother is tall.', C.gray, FILL.gray, 13), lb(160, 54, 'どれくらい高いかわからない', 11, C.gray, 'middle', true), bx(6, 70, 308, 26, 'My brother is taller than me.', C.green, FILL.green, 12), bx(6, 102, 308, 26, 'He is the tallest in my family.', C.green, FILL.green, 12), lb(160, 142, '比べる相手・範囲を書くと具体的', 11, C.green, 'middle', true), ...band(150, lb(160, 192, '比べる相手をはっきり', 12, C.green, 'middle', true))),
  },
  {
    note: '性格や特技も比べられます。My sister is kinder than me.（妹は私より優しい）、He is the funniest person in our class.（彼はクラスでいちばんおもしろい人）。funny は y を i に変えて funniest になります。She sings the best in our chorus club.（合唱部でいちばん歌がうまい）の best は good / well の最上級で、不規則な変化です。',
    add: fresh(bx(6, 8, 308, 26, 'My sister is kinder than me.', C.blue, FILL.blue, 12), bx(6, 40, 308, 26, 'He is the funniest person in our class.', C.green, FILL.green, 11), lb(160, 80, 'funny → funniest（y を i に変えて est）', 11, C.green, 'middle', true), bx(6, 94, 308, 26, 'She sings the best in our chorus club.', C.purple, FILL.purple, 11), lb(160, 134, 'good / well → best（不規則）', 11, C.purple, 'middle', true), ...band(150, lb(160, 192, '性格・特技もくらべる', 12, C.main, 'middle', true))),
  },
  {
    note: '同じくらいは as ~ as、そうでないときは not as ~ as です。I am as tall as my mother.（母と同じくらいの背）、My cat is not as active as my dog.（うちの猫は犬ほど活発ではない）。not as ~ as は「〜ほどではない」という意味です。',
    add: fresh(bx(6, 14, 308, 28, 'I am as tall as my mother.', C.purple, FILL.purple, 12), lb(160, 56, '母と同じくらいの背の高さ', 11, C.purple, 'middle', true), bx(6, 72, 308, 28, 'My cat is not as active as my dog.', C.red, FILL.red, 12), lb(160, 114, '猫は犬ほど活発ではない（犬 ＞ 猫）', 11, C.red, 'middle', true), ...cap('as ~ as ・ not as ~ as', C.main)),
  },
  {
    note: '❓「ずっと高い」と強めたいとき、なぜ very ではなく much を使うのでしょう。→ very は「程度が高い」ことを表すことばで、比較級が表す二つの差には付けられないからです。差が大きいことを言うには、much・a lot・far を比較級の前に置きます。My brother is much taller than me. は正しく、very taller は誤りです。',
    add: fresh(bx(6, 12, 308, 28, 'My brother is much taller than me.', C.green, FILL.green, 12), lb(160, 54, '兄は私よりずっと背が高い', 11, C.green, 'middle', true), bx(6, 68, 308, 28, 'This question is far more difficult.', C.green, FILL.green, 11), bx(6, 106, 308, 28, '✕  very taller', C.red, FILL.red, 13), ...band(150, lb(160, 192, '比較級は much・a lot・far で強める', 12, C.green, 'middle', true))),
  },
  {
    note: '最上級を強める決まり文句です。kinder than anyone else I know（私が知るだれよりも優しい）、the smartest dog I have ever seen（今まで見た中でいちばん賢い犬）。紹介文に使うと、ぐっと文章が引き立ちます。',
    add: fresh(bx(6, 12, 308, 32, 'He is kinder than anyone else I know.', C.blue, FILL.blue, 11), lb(160, 58, '私が知るだれよりも優しい', 11, C.blue, 'middle', true), bx(6, 74, 308, 32, 'She is the smartest dog I have ever seen.', C.green, FILL.green, 10), lb(160, 120, '今まで見た中でいちばん賢い犬', 11, C.green, 'middle', true), ...cap('than anyone else ・ I have ever seen', C.main, 11)),
  },
  {
    note: '❓than のあとの代名詞は me と I のどちらでしょう。→ 書き言葉では than I am が文法的に正しいとされますが、会話では than me が一般的です。中学入試では than me でも問題ないことが多いですが、学校の文法問題では than I（am）も覚えておきましょう。まとめ：二つ → 比較級＋than、三つ以上 → the＋最上級、同じ → as ~ as。',
    add: fresh(bx(6, 14, 148, 40, 'than me\n会話でよく使う', C.blue, FILL.blue, 12), bx(166, 14, 148, 40, 'than I (am)\n文法問題で出る', C.green, FILL.green, 12), lb(160, 76, '両方 覚えておこう', 13, C.ink, 'middle', true), lb(160, 104, '二つ ＝ 比較級＋than　三つ以上 ＝ the＋最上級', 11, C.ink, 'middle', true), lb(160, 124, '同じ ＝ as ~ as', 11, C.ink, 'middle', true), ...cap('比べる形の まとめ', C.main)),
  },
], '比べる文：比較級・最上級・as ~ as');

// ───────── new20_e6_eigo_10 買い物の会話を組み立てる ─────────
const u30: DiagramFigure = show([
  {
    note: '買い物の会話は、店員の声かけから始まります。May I help you?（いらっしゃいませ／お手伝いしましょうか）、Are you looking for something?（何かお探しですか）。この受け答えがスムーズだと、その後の会話全体が自然になります。',
    add: [bx(6, 10, 308, 30, 'May I help you?', C.blue, FILL.blue, 14), lb(160, 54, 'いらっしゃいませ ／ お手伝いしましょうか', 11, C.blue, 'middle', true), bx(6, 72, 308, 30, 'Are you looking for something?', C.blue, FILL.blue, 13), lb(160, 116, '何かお探しですか', 11, C.blue, 'middle', true), ...cap('店員の声かけ')],
  },
  {
    note: 'お客の答え方です。I\'m looking for a birthday present for my mother.（母への誕生日プレゼントを探しています）、Do you have any T-shirts?（Tシャツはありますか）、I\'d like a cap, please.（帽子がほしいのですが）、I\'m just looking, thank you.（見ているだけです）。',
    add: fresh(bx(6, 2, 308, 34, "I'm looking for a birthday\npresent for my mother.", C.green, FILL.green, 11), bx(6, 40, 308, 26, 'Do you have any T-shirts?', C.green, FILL.green, 12), bx(6, 70, 308, 26, "I'd like a cap, please.", C.green, FILL.green, 12), bx(6, 100, 308, 26, "I'm just looking, thank you.", C.green, FILL.green, 12), lb(160, 140, '見ているだけです（すぐに買わないとき）', 10, C.green, 'middle', true), ...band(150, lb(160, 192, 'お客の答え方', 12, C.green, 'middle', true))),
  },
  {
    note: '❓お店で、なぜ I want ではなく I\'d like を使うのでしょう。→ I\'d like ~, please. のほうがていねいで、お店や目上の人との会話にふさわしいからです。店員さんのほうも、This way, please.（こちらへどうぞ）、We have a lot of colors.（色々な色がございます）、This one is very popular.（これはとても人気です）と案内します。',
    add: fresh(bx(6, 10, 148, 30, 'I want a cap.', C.gray, FILL.gray, 13), bx(166, 10, 148, 30, "I'd like a cap, please.", C.green, FILL.green, 11), lb(80, 54, 'ふつう', 11, C.gray, 'middle', true), lb(240, 54, 'ていねい（お店向き）', 11, C.green, 'middle', true), bx(6, 76, 308, 24, 'This way, please.　こちらへどうぞ', C.blue, FILL.blue, 11), bx(6, 104, 308, 24, 'This one is very popular.　これは人気です', C.blue, FILL.blue, 11), ...cap('お店では I\'d like ~, please.', C.green)),
  },
  {
    note: 'サイズを相談します。Do you have a bigger one?（もっと大きいのはありますか）、Do you have a smaller size?（もっと小さいサイズはありますか）。Can I try this on?（これを試着してもいいですか）と聞くと、Sure, the fitting room is over there.（もちろんです、試着室はあちらです）と返ってきます。',
    add: fresh(bx(6, 6, 308, 26, 'Do you have a bigger one?', C.blue, FILL.blue, 12), bx(6, 38, 308, 26, 'Do you have a smaller size?', C.blue, FILL.blue, 12), bx(6, 70, 308, 26, 'Can I try this on?', C.green, FILL.green, 12), bx(6, 102, 308, 26, 'Sure, the fitting room is over there.', C.purple, FILL.purple, 11), lb(160, 142, '試着していいですか → 試着室はあちら', 10, C.ink, 'middle', true), ...band(150, lb(160, 192, 'サイズと試着', 12, C.main, 'middle', true))),
  },
  {
    note: '色もたずねられます。Do you have this in blue?（これの青色はありますか）、What colors do you have?（何色がありますか）。in blue の in は「〜色で」という意味で使われています。',
    add: fresh(bx(6, 14, 308, 30, 'Do you have this in blue?', C.blue, FILL.blue, 13), lb(160, 58, 'これの青色はありますか', 12, C.blue, 'middle', true), bx(6, 76, 308, 30, 'What colors do you have?', C.green, FILL.green, 13), lb(160, 120, '何色がありますか', 12, C.green, 'middle', true), ...cap('色をたずねる', C.main)),
  },
  {
    note: '❓値段のたずね方で、なぜ is と are を使い分けるのでしょう。→ ものの数に合わせるからです。ひとつのものは How much is it?（It\'s 1,500 yen.）、靴 shoes のように複数のものは How much are these shoes?（They\'re 3,000 yen.）と、be動詞も答えの代名詞も変わります。',
    add: fresh(bx(6, 8, 148, 28, 'How much is it?', C.blue, FILL.blue, 12), lb(80, 48, '単数（ひとつ）', 11, C.blue, 'middle', true), bx(6, 60, 148, 28, "It's 1,500 yen.", C.blue, FILL.blue, 12), bx(166, 8, 148, 28, 'How much are these shoes?', C.red, FILL.red, 10), lb(240, 48, '複数（2つで1組）', 11, C.red, 'middle', true), bx(166, 60, 148, 28, "They're 3,000 yen.", C.red, FILL.red, 12), lb(160, 112, 'ものの数に合わせて is / are', 12, C.ink, 'middle', true), ...cap('値段のたずね方', C.main)),
  },
  {
    note: '高いと感じたときは That\'s a little expensive.（それは少し高いですね）と言い、Do you have a cheaper one?（もっと安いのはありますか）とたずねます。bigger・smaller・cheaper は、どれも「もっと〜」を表す形です。',
    add: fresh(bx(6, 14, 308, 30, "That's a little expensive.", C.red, FILL.red, 13), lb(160, 58, '少し高いですね', 12, C.red, 'middle', true), ar(160, 66, 160, 80, C.main), bx(6, 84, 308, 30, 'Do you have a cheaper one?', C.green, FILL.green, 13), lb(160, 128, 'もっと安いのはありますか', 12, C.green, 'middle', true), ...cap('値段を相談する', C.main)),
  },
  {
    note: '会計です。I\'ll take this one.（これにします）、That will be 2,000 yen.（2,000円になります）、Here you are.（はい、どうぞ。ものを渡すときの決まり文句）、Here\'s your change.（お釣りです）、Keep the change.（お釣りはとっておいてください）。',
    add: fresh(bx(6, 6, 148, 26, "I'll take this one.", C.blue, FILL.blue, 11), lb(240, 19, 'これにします', 11, C.ink, 'middle', true), bx(6, 38, 148, 26, 'That will be 2,000 yen.', C.green, FILL.green, 10), lb(240, 51, '2,000円になります', 11, C.ink, 'middle', true), bx(6, 70, 148, 26, 'Here you are.', C.purple, FILL.purple, 11), lb(240, 83, 'はい、どうぞ', 11, C.ink, 'middle', true), bx(6, 102, 148, 26, "Here's your change.", C.main, FILL.warm, 11), lb(240, 115, 'お釣りです', 11, C.ink, 'middle', true), ...cap('会計の言い方', C.main)),
  },
  {
    note: 'まとめです。買い物の会話は、①声をかける（May I help you?）→ ②探しているものを伝える（I\'m looking for ~）→ ③サイズ・色・値段を相談する → ④会計する（I\'ll take this one.）の順に進みます。せりふを暗記せず、「聞かれたら何を答えるか」の流れで覚えましょう。',
    add: fresh(...flow(['声かけ\nMay I\nhelp you?', '探す\nI\'m looking\nfor ~', '相談\nbigger\ncheaper', '会計\nI\'ll take\nthis one.'], 14, { h: 82, size: 10, color: C.blue, fill: FILL.blue, gap: 8, pad: 6 }).flat(), lb(160, 118, '店員役とお客役で 声に出す', 12, C.red, 'middle', true), ...cap('買い物の4ステップ', C.green)),
  },
], '買い物の会話：声かけ・相談・会計');

// ───────── new20_e6_eigo_11 道案内をスムーズに ─────────
const u31: DiagramFigure = show([
  {
    note: '道をたずねる言い方です。Excuse me. How can I get to the station?（すみません、駅へはどう行けばいいですか）、Could you tell me the way to the library?（図書館への道を教えていただけますか）、Is there a post office near here?（この近くに郵便局はありますか）。',
    add: [bx(6, 6, 308, 36, 'Excuse me. How can I get to the station?', C.blue, FILL.blue, 11), lb(160, 56, '駅へはどう行けばいいですか', 11, C.blue, 'middle', true), bx(6, 70, 308, 28, 'Could you tell me the way to the library?', C.green, FILL.green, 10), lb(160, 112, '図書館への道を教えていただけますか', 11, C.green, 'middle', true), bx(6, 122, 308, 24, 'Is there a post office near here?', C.purple, FILL.purple, 11), ...cap('道をたずねる')],
  },
  {
    note: '❓Could you tell me the way to ~? と How can I get to ~? は何がちがうのでしょう。→ Could you tell me the way to ~? のほうが少していねいです。試験の会話文ではどちらも出ます。案内できないときは Sorry, I\'m not from around here.（この辺りの者ではないので）と言い、I\'m not sure, but you can ask that police officer.（わかりませんが、あの警察官に聞いてみてください）と続けます。',
    add: fresh(bx(6, 8, 148, 32, 'How can I get to ~?', C.blue, FILL.blue, 11), lb(80, 52, 'ふつう', 11, C.blue, 'middle', true), bx(166, 8, 148, 32, 'Could you tell me\nthe way to ~?', C.green, FILL.green, 10), lb(240, 52, '少していねい', 11, C.green, 'middle', true), bx(6, 76, 308, 26, "Sorry, I'm not from around here.", C.red, FILL.red, 11), lb(160, 116, 'この辺りの者ではないので（案内できないとき）', 10, C.red, 'middle', true), ...cap('たずね方と、ことわり方', C.main)),
  },
  {
    note: '基本の動作です。Go straight.（まっすぐ進む）、Turn left / right at the corner.（角を左／右に曲がる）、Cross the street.（通りを渡る）。',
    add: fresh(ln(55, 120, 55, 40, C.red, false, 3), ar(55, 46, 55, 30, C.red), lb(55, 140, 'Go straight', 11, C.red, 'middle', true), ln(160, 120, 160, 70, C.green, false, 3), ln(160, 70, 120, 70, C.green, false, 3), ar(130, 70, 108, 70, C.green), lb(160, 140, 'Turn left', 11, C.green, 'middle', true), bx(220, 60, 90, 36, undefined, C.gray, FILL.gray), lb(246, 78, 'street', 10, C.gray, 'middle', true), ln(288, 120, 288, 106, C.blue, false, 3), ar(288, 106, 288, 40, C.blue), lb(265, 140, 'Cross the street', 10, C.blue, 'middle', true), ...band(150, lb(160, 192, '3つの基本の動き', 12, C.main, 'middle', true))),
  },
  {
    note: '目印を伝えることばです。on your right / left（あなたの右手／左手に）、next to ~（〜の隣に）、across from ~（〜の向かいに）、between A and B（AとBの間に）。例：You will see the library on your right.（右手に図書館が見えます）。',
    add: fresh(bx(6, 6, 148, 26, 'on your right / left', C.blue, FILL.blue, 11), lb(240, 19, '右手に／左手に', 11, C.ink, 'middle', true), bx(6, 36, 148, 26, 'next to ~', C.green, FILL.green, 11), lb(240, 49, '〜の隣に', 11, C.ink, 'middle', true), bx(6, 66, 148, 26, 'across from ~', C.purple, FILL.purple, 11), lb(240, 79, '〜の向かいに', 11, C.ink, 'middle', true), bx(6, 96, 148, 26, 'between A and B', C.red, FILL.red, 11), lb(240, 109, 'AとBの間に', 11, C.ink, 'middle', true), lb(160, 138, 'You will see the library on your right.', 10, C.blue, 'middle', true), ...band(150, lb(160, 192, '目印を伝えることば', 12, C.main, 'middle', true))),
  },
  {
    note: '❓なぜ動作と目印をセットで伝えるのでしょう。→ 目印がないと、聞いた人はどこで曲がればよいかわからないからです。Go straight for three blocks, and turn right at the bookstore. The museum is on your left, next to the park.（3区画まっすぐ進んで、本屋のところを右に曲がってください。美術館は左手、公園の隣にあります）。',
    add: fresh(ci(100, 132, 8, '', C.red, FILL.red), ln(100, 124, 100, 62, C.red, false, 3), ln(92, 106, 108, 106, C.gray), ln(92, 86, 108, 86, C.gray), ln(92, 66, 108, 66, C.gray), lb(84, 90, '3 blocks', 10, C.gray, 'end'), bx(14, 48, 70, 22, 'bookstore', C.purple, FILL.purple, 10), ln(100, 62, 200, 62, C.green, false, 3), ar(190, 62, 214, 62, C.green), bx(122, 22, 70, 22, 'museum', C.blue, FILL.blue, 10), bx(198, 22, 60, 22, 'park', C.green, FILL.green, 10), lb(268, 33, '← 左手', 10, C.blue, 'start', true), lb(150, 82, 'turn right', 11, C.green, 'start', true), ...cap('動作 ＋ 目印', C.main)),
  },
  {
    note: '距離や時間を足すと親切です。It\'s about five minutes on foot.（歩いて約5分です）、It\'s about 200 meters ahead.（この先約200メートルです）、It takes about ten minutes by bus.（バスで約10分かかります）。',
    add: fresh(bx(6, 10, 308, 28, "It's about five minutes on foot.", C.blue, FILL.blue, 12), lb(160, 50, '歩いて約5分', 11, C.blue, 'middle', true), bx(6, 62, 308, 28, "It's about 200 meters ahead.", C.green, FILL.green, 12), lb(160, 102, 'この先約200メートル', 11, C.green, 'middle', true), bx(6, 112, 308, 28, 'It takes about ten minutes by bus.', C.purple, FILL.purple, 11), ...band(150, lb(160, 192, 'きょりと時間を 足す', 12, C.main, 'middle', true))),
  },
  {
    note: '案内の最後は You can\'t miss it.（見逃すことはありません＝すぐわかりますよ）や It\'s right in front of you.（すぐ目の前にあります）で締めます。会話の例：「花屋で左、公園の向かい、歩いて約7分」と教えられて、A は Got it. Thank you!（わかりました、ありがとう）と言います。',
    add: fresh(bx(6, 10, 308, 30, "You can't miss it.", C.green, FILL.green, 14), lb(160, 54, 'すぐわかりますよ', 12, C.green, 'middle', true), bx(6, 70, 308, 30, "It's right in front of you.", C.green, FILL.green, 13), lb(160, 114, 'すぐ目の前にあります', 12, C.green, 'middle', true), ...cap('案内の締めの一言', C.green)),
  },
  {
    note: 'まとめです。道案内は「動作 → 目印 → 距離・時間」の3点セットで伝えます。聞くとき・読むときも、地図の上で道順をなぞりながら、この3つを確かめましょう。',
    add: fresh(...flow(['動作\nGo straight\nTurn left', '目印\nat the\nbookstore', '距離・時間\nfive minutes\non foot'], 20, { h: 80, size: 11, color: C.blue, fill: FILL.blue, gap: 14, pad: 8 }).flat(), lb(160, 128, '最後に You can\'t miss it.', 12, C.red, 'middle', true), ...cap('動作 → 目印 → 距離', C.green)),
  },
], '道案内：動作・目印・距離');

// ───────── new20_e6_eigo_12 レストランでの会話を組み立てる ─────────
const u32: DiagramFigure = show([
  {
    note: 'レストランに入ると、まず人数をたずねられます。How many people?（何名様ですか）に、A table for two, please.（2人用の席をお願いします）と答えます。This way, please.（こちらへどうぞ）と案内されます。',
    add: [bx(6, 10, 308, 28, 'Waiter: How many people?', C.blue, FILL.blue, 12), lb(160, 50, '何名様ですか', 11, C.blue, 'middle', true), bx(6, 62, 308, 28, 'Customer: A table for two, please.', C.green, FILL.green, 12), lb(160, 102, '2人用の席をお願いします', 11, C.green, 'middle', true), bx(6, 112, 308, 28, 'Waiter: This way, please.', C.blue, FILL.blue, 12), ...cap('入店して席へ')],
  },
  {
    note: '❓How many people? に、なぜ文で答えるのでしょう。→ 数字だけの Two. でも通じますが、会話文では A table for ~, please.（〜人用の席を）と文で答えるのが自然だからです。席の希望は Can we have a table by the window?（窓際の席にできますか）、We\'d like a table for four, please.（4人用の席をお願いします）。メニューを渡されたら Here is the menu. Take your time.（ごゆっくりどうぞ）に Thank you. と答えます。',
    add: fresh(bx(6, 6, 308, 26, 'Can we have a table by the window?', C.blue, FILL.blue, 11), lb(160, 44, '窓際の席にできますか', 11, C.blue, 'middle', true), bx(6, 56, 308, 26, "We'd like a table for four, please.", C.green, FILL.green, 11), lb(160, 94, '4人用の席をお願いします', 11, C.green, 'middle', true), bx(6, 106, 308, 26, 'Here is the menu. Take your time.', C.purple, FILL.purple, 11), lb(160, 144, 'メニューです。ごゆっくりどうぞ', 10, C.purple, 'middle', true), ...band(150, lb(160, 192, '席の希望と、メニュー', 12, C.main, 'middle', true))),
  },
  {
    note: 'おすすめをたずねるときは What do you recommend?（おすすめは何ですか）。答えは I recommend the beef curry. It\'s very popular here.（ビーフカレーがおすすめです。ここでとても人気です）です。recommend は「すすめる」という意味です。',
    add: fresh(bx(6, 12, 308, 30, 'What do you recommend?', C.blue, FILL.blue, 14), lb(160, 56, 'おすすめは何ですか', 12, C.blue, 'middle', true), ar(160, 66, 160, 80, C.main), bx(6, 84, 308, 40, 'I recommend the beef curry.\nIt\'s very popular here.', C.green, FILL.green, 12), lb(160, 138, 'ビーフカレーがおすすめです。ここで人気', 11, C.green, 'middle', true), ...band(150, lb(160, 192, 'おすすめをたずねる', 12, C.main, 'middle', true))),
  },
  {
    note: '注文です。I\'d like the hamburger steak, please.（ハンバーグステーキをお願いします）、Can I have a salad, too?（サラダもいただけますか）。店員さんは What would you like?（何になさいますか）とたずねます。',
    add: fresh(bx(6, 10, 308, 30, "I'd like the hamburger steak, please.", C.green, FILL.green, 12), lb(160, 54, 'ハンバーグステーキをお願いします', 11, C.green, 'middle', true), bx(6, 68, 308, 30, 'Can I have a salad, too?', C.green, FILL.green, 13), lb(160, 112, 'サラダもいただけますか', 11, C.green, 'middle', true), bx(6, 122, 308, 24, 'Waiter: What would you like?', C.blue, FILL.blue, 11), ...band(150, lb(160, 192, '注文する', 12, C.main, 'middle', true))),
  },
  {
    note: '❓注文のとき、なぜ I want ではなく I\'d like を使うのでしょう。→ I\'d like ~. のほうがていねいで、接客の会話にふさわしいからです。I want a hamburger. もまちがいではありませんが、問題では I\'d like ~. のほうが自然な選択として問われやすいです。',
    add: fresh(bx(6, 14, 148, 34, 'I want a hamburger.', C.gray, FILL.gray, 11), lb(80, 62, 'まちがいではない', 11, C.gray, 'middle', true), bx(166, 14, 148, 34, "I'd like a hamburger.", C.green, FILL.green, 11), lb(240, 62, 'ていねいで自然', 11, C.green, 'middle', true), lb(160, 104, 'お店では I\'d like ~. を選ぶ', 13, C.ink, 'middle', true), ...cap('レストランでの注文はていねいに', C.green)),
  },
  {
    note: '飲み物と追加です。What would you like to drink?（お飲み物は何になさいますか）に I\'ll have orange juice, please.（オレンジジュースをお願いします）。Anything else?（他に何かございますか）に No, that\'s all, thank you.（いいえ、以上です）。',
    add: fresh(bx(6, 6, 308, 26, 'Waiter: What would you like to drink?', C.blue, FILL.blue, 11), bx(6, 38, 308, 26, "Customer: I'll have orange juice, please.", C.green, FILL.green, 11), bx(6, 70, 308, 26, 'Waiter: Anything else?', C.blue, FILL.blue, 11), bx(6, 102, 308, 26, "Customer: No, that's all, thank you.", C.green, FILL.green, 11), lb(160, 144, '他にありますか？ → 以上です', 10, C.ink, 'middle', true), ...band(150, lb(160, 192, '飲み物と、追加のやり取り', 12, C.main, 'middle', true))),
  },
  {
    note: 'お会計です。Check, please. か Can I have the bill, please?（お会計をお願いします）。That will be 1,800 yen.（1,800円になります）、Here you are.（どうぞ）、Have a nice day.（良い一日を）。',
    add: fresh(bx(6, 6, 308, 26, 'Can I have the bill, please?', C.green, FILL.green, 12), bx(6, 38, 308, 26, 'That will be 1,800 yen.', C.blue, FILL.blue, 12), bx(6, 70, 308, 26, 'Here you are.', C.green, FILL.green, 12), bx(6, 102, 308, 26, 'Have a nice day.', C.blue, FILL.blue, 12), lb(160, 144, 'Check, please. でも お会計をお願いできる', 10, C.ink, 'middle', true), ...band(150, lb(160, 192, '会計の言い方', 12, C.main, 'middle', true))),
  },
  {
    note: 'まとめです。レストランの会話は、入店（人数・席）→ 注文（おすすめ・飲み物・追加）→ 会計（bill）の順に進みます。買い物の会話と同じ「入る・頼む・払う」の流れなので、1つの場面を覚えれば似た場面にも使えます。',
    add: fresh(...flow(['入店\nA table\nfor two', '注文\nI\'d like\n~, please.', '追加\nAnything\nelse?', '会計\nthe bill,\nplease.'], 14, { h: 82, size: 10, color: C.blue, fill: FILL.blue, gap: 8, pad: 6 }).flat(), lb(160, 118, '買い物の会話と よく似た流れ', 12, C.red, 'middle', true), ...cap('入店 → 注文 → 会計', C.green)),
  },
], 'レストランの会話：入店から会計まで');

// ───────── new20_e6_eigo_13 空港・旅行での会話 ─────────
const u33: DiagramFigure = show([
  {
    note: '空港のチェックインカウンターでは、決まった質問をされます。May I see your passport and ticket, please?（パスポートとチケットを見せていただけますか）に Here you are.（どうぞ）。Window or aisle seat?（窓側と通路側、どちらがよろしいですか）に Window seat, please.（窓側でお願いします）。',
    add: [bx(6, 6, 308, 26, 'Staff: May I see your passport and ticket, please?', C.blue, FILL.blue, 10), bx(6, 38, 308, 24, 'Passenger: Here you are.', C.green, FILL.green, 11), bx(6, 68, 308, 24, 'Staff: Window or aisle seat?', C.blue, FILL.blue, 11), bx(6, 98, 308, 24, 'Passenger: Window seat, please.', C.green, FILL.green, 11), lb(160, 138, '窓側（window）か 通路側（aisle）か', 10, C.ink, 'middle', true), ...cap('チェックイン①')],
  },
  {
    note: '荷物についての会話です。How many bags are you checking in?（お預けになる荷物はいくつですか）に Just one, please.（1つだけです）。Please put your bag on the scale.（かばんをはかりに乗せてください）。I\'m sorry, this is over the weight limit.（申し訳ございません、重量制限を超えています）と言われることもあります。check in a bag は「かばんを預ける」という意味の動詞のまとまりで、名詞の check-in（ハイフンあり）とは形で区別します。',
    add: fresh(bx(6, 6, 308, 26, 'How many bags are you checking in?', C.blue, FILL.blue, 11), bx(6, 36, 308, 24, 'Just one, please.', C.green, FILL.green, 11), bx(6, 64, 308, 24, 'Please put your bag on the scale.', C.blue, FILL.blue, 11), bx(6, 92, 308, 26, "I'm sorry, this is over the weight limit.", C.red, FILL.red, 10), lb(160, 134, 'weight limit ＝ 重量制限', 10, C.red, 'middle', true), ...band(150, lb(160, 192, 'チェックイン②（荷物）', 12, C.main, 'middle', true))),
  },
  {
    note: '搭乗券（とうじょうけん）を受け取ります。Here is your boarding pass. Your flight leaves from Gate 25 at 10:30.（こちらが搭乗券です。あなたの便は10時30分にゲート25から出発します）。ゲート番号と出発時刻が、聞き取りのポイントです。',
    add: fresh(bx(40, 10, 240, 90, undefined, C.main, FILL.warm), lb(160, 28, 'boarding pass', 13, C.main, 'middle', true), lb(60, 56, 'Gate:  25', 14, C.blue, 'start', true), lb(60, 84, 'Time:  10:30', 14, C.red, 'start', true), lb(160, 122, 'Your flight leaves from Gate 25 at 10:30.', 10, C.ink, 'middle', true), lb(160, 138, '10時30分にゲート25から出発', 10, C.ink, 'middle', true), ...band(150, lb(160, 192, '数字（ゲートと時刻）を聞き取る', 12, C.main, 'middle', true))),
  },
  {
    note: '飛行機の中の会話です。Excuse me, where is seat 24A?（24Aの座席はどこですか）に It\'s over there, next to the window.（あちらです、窓の隣です）。客室乗務員（きゃくしつじょうむいん）は Would you like something to drink?（お飲み物はいかがですか）、Please fasten your seatbelt.（シートベルトをお締めください）、We will be landing soon.（まもなく着陸いたします）と言います。',
    add: fresh(bx(6, 6, 308, 24, 'Excuse me, where is seat 24A?', C.green, FILL.green, 11), bx(6, 34, 308, 24, "It's over there, next to the window.", C.blue, FILL.blue, 11), bx(6, 62, 308, 24, 'Would you like something to drink?', C.blue, FILL.blue, 11), bx(6, 90, 308, 24, 'Please fasten your seatbelt.', C.blue, FILL.blue, 11), bx(6, 118, 308, 24, 'We will be landing soon.', C.blue, FILL.blue, 11), ...cap('機内の会話')),
  },
  {
    note: '❓なぜ Do you want ~? ではなく Would you like ~? なのでしょう。→ would が「もしよろしければ」というやわらかさを足すことばだからです。Would you like ~? は「〜はいかがですか」とすすめるときの決まり文句で、接客の場面でよく使われます。',
    add: fresh(bx(6, 14, 148, 34, 'Do you want ~?', C.gray, FILL.gray, 13), lb(80, 62, 'ふつう', 11, C.gray, 'middle', true), bx(166, 14, 148, 34, 'Would you like ~?', C.green, FILL.green, 13), lb(240, 62, 'ていねい（すすめる）', 11, C.green, 'middle', true), bx(30, 88, 260, 30, 'Would you like something to drink?', C.green, FILL.green, 11), lb(160, 134, 'お飲み物はいかがですか', 11, C.green, 'middle', true), ...band(150, lb(160, 192, '接客では Would you like ~?', 12, C.green, 'middle', true))),
  },
  {
    note: '機内アナウンスです。Please stay in your seat.（お席にお座りください）、We are now beginning our descent.（ただいま降下を始めております）、Thank you for flying with us.（ご搭乗ありがとうございました）。',
    add: fresh(bx(6, 10, 308, 28, 'Please stay in your seat.', C.blue, FILL.blue, 12), lb(160, 50, 'お席にお座りください', 11, C.blue, 'middle', true), bx(6, 62, 308, 28, 'We are now beginning our descent.', C.blue, FILL.blue, 11), lb(160, 102, 'ただいま降下を始めております', 11, C.blue, 'middle', true), bx(6, 114, 308, 26, 'Thank you for flying with us.', C.blue, FILL.blue, 11), ...band(150, lb(160, 192, '機内アナウンス', 12, C.main, 'middle', true))),
  },
  {
    note: '入国審査です。What\'s the purpose of your visit?（訪問の目的は何ですか）に Sightseeing.（観光です）か I\'m here on business.（仕事で来ています）。How long will you stay?（どのくらい滞在しますか）に For one week.（1週間です）。Where will you be staying?（どこに滞在しますか）に At a hotel in the city.（市内のホテルです）。',
    add: fresh(bx(6, 6, 190, 26, "What's the purpose of your visit?", C.blue, FILL.blue, 10), bx(204, 6, 110, 26, 'Sightseeing.', C.green, FILL.green, 11), bx(6, 38, 190, 26, 'How long will you stay?', C.blue, FILL.blue, 11), bx(204, 38, 110, 26, 'For one week.', C.green, FILL.green, 11), bx(6, 70, 190, 26, 'Where will you be staying?', C.blue, FILL.blue, 11), bx(204, 70, 110, 26, 'At a hotel.', C.green, FILL.green, 11), lb(160, 116, '目的 ・ 期間 ・ 滞在先', 13, C.red, 'middle', true), lb(160, 136, 'I\'m here on business. ＝ 仕事で来ています', 10, C.ink, 'middle', true), ...band(150, lb(160, 192, '入国審査でたずねられること', 12, C.main, 'middle', true))),
  },
  {
    note: '❓なぜ旅行英語は、場面ごとに覚えると得点しやすいのでしょう。→ 聞かれることがほぼ決まっていて、決まった質問には決まった答え方があるからです。場面がわかれば、知らない語が出ても内容を推測できます。入国審査では「目的」と「期間」の二つがほぼ必ず聞かれます。',
    add: fresh(bx(6, 8, 98, 54, 'チェックイン\npassport\nwindow or aisle', C.blue, FILL.blue, 10), bx(111, 8, 98, 54, '機内\nsomething to\ndrink?', C.green, FILL.green, 10), bx(216, 8, 98, 54, '入国審査\npurpose\nhow long', C.red, FILL.red, 10), lb(160, 88, '場面がわかれば、質問を予想できる', 13, C.ink, 'middle', true), lb(160, 112, '入国審査は 目的 と 期間 が定番', 12, C.red, 'middle', true), ...cap('場面ごとに セットで覚える', C.main)),
  },
  {
    note: 'まとめです。旅行英語は、チェックイン（passport・seat・bags）→ 機内（drink・seatbelt・landing）→ 入国審査（purpose・how long・where）の順に、場面ごとの質問と答えをセットで覚えます。質問の中身を先に予想してから聞くと、聞き取りやすくなります。',
    add: fresh(...flow(['チェック\nイン', '機内', '入国\n審査'], 14, { h: 52, size: 12, color: C.blue, fill: FILL.blue, gap: 14, pad: 10 }).flat(), lb(160, 86, 'passport ・ seat ・ bags', 11, C.blue, 'middle', true), lb(160, 104, 'drink ・ seatbelt ・ landing', 11, C.green, 'middle', true), lb(160, 122, 'purpose ・ how long ・ where', 11, C.red, 'middle', true), ...cap('3つの場面を順に', C.green)),
  },
], '空港・旅行の会話：場面ごとの質問と答え');

// ───────── new20_e6_eigo_14 簡単な長文読解①：友達からの手紙を読む ─────────
const u34: DiagramFigure = show([
  {
    note: '手紙・メールには決まった型があります。①呼びかけ（Dear ＋ 名前,）、②本文（近況報告 → 本題 → 結びの言葉）、③結びの表現（Your friend, など）、④差出人の名前。この型を知っていると、どこに何が書いてあるか予測しながら読めます。',
    add: [bx(30, 4, 260, 138, undefined, C.main, FILL.warm), lb(46, 22, 'Dear Emily,', 12, C.blue, 'start', true), lb(46, 52, '近況報告 → 本題 → 結びの言葉', 11, C.green, 'start', true), lb(46, 80, '（本文）', 11, C.gray, 'start'), lb(46, 108, 'Your friend,', 12, C.purple, 'start', true), lb(46, 128, 'Yuki', 12, C.red, 'start', true), lb(270, 22, '①呼びかけ', 10, C.blue, 'end'), lb(270, 108, '③結び', 10, C.purple, 'end'), lb(270, 128, '④差出人', 10, C.red, 'end'), ...cap('手紙の型')],
  },
  {
    note: '手紙の始めは近況報告です。How are you doing?（元気にしていますか）、I hope you are doing well.（元気に過ごしていることを願っています）、It\'s been a while since we last talked.（最後に話してからしばらく経ちますね）。',
    add: fresh(bx(6, 10, 308, 28, 'How are you doing?', C.blue, FILL.blue, 13), lb(160, 52, '元気にしていますか', 11, C.blue, 'middle', true), bx(6, 62, 308, 28, 'I hope you are doing well.', C.green, FILL.green, 13), lb(160, 104, '元気に過ごしていることを願っています', 11, C.green, 'middle', true), bx(6, 114, 308, 28, "It's been a while since we last talked.", C.purple, FILL.purple, 10), ...band(150, lb(160, 192, '近況報告のあいさつ', 12, C.main, 'middle', true))),
  },
  {
    note: '❓手紙の冒頭は、なぜ軽く読んでよいのでしょう。→ あいさつと近況が書かれているだけで、本題（いちばん伝えたいこと）は書かれていないことが多いからです。モデル文でも、引っ越して3か月、あなたが恋しい、カナダで元気でいることを願う、というあいさつだけです。設問は中盤〜終盤を重点的に読みます。',
    add: fresh(bx(6, 6, 308, 56, 'Dear Emily,\nHow are you doing? It\'s been three months since\nI moved to Japan, and I miss you a lot.', C.gray, FILL.gray, 10), lb(160, 78, '冒頭 ＝ あいさつと近況', 12, C.gray, 'middle', true), ar(160, 88, 160, 100, C.main), bx(6, 104, 308, 36, '本題は中盤〜終盤にある', C.red, FILL.red, 14), ...band(150, lb(160, 192, '設問は 中盤〜終盤を重点的に', 12, C.red, 'middle', true))),
  },
  {
    note: '本題のパターン1つ目は「お願い」です。Can you send me some photos of your school?（学校の写真を送ってくれますか）。I was wondering if you could visit me next summer.（来年の夏、私を訪ねてきてくれないかと思っています）は、Can you ~? よりていねいなお願いです。',
    add: fresh(bx(6, 12, 308, 30, 'Can you send me some photos of your school?', C.blue, FILL.blue, 10), lb(160, 56, '学校の写真を送ってくれますか', 11, C.blue, 'middle', true), bx(6, 72, 308, 40, 'I was wondering if you could\nvisit me next summer.', C.green, FILL.green, 11), lb(160, 126, '来年の夏、訪ねてきてくれないかと思っています（ていねい）', 10, C.green, 'middle', true), ...band(150, lb(160, 192, 'お願いのパターン', 12, C.main, 'middle', true))),
  },
  {
    note: '2つ目は「誘い」、3つ目は「報告」です。Would you like to come to my birthday party?（私の誕生日パーティーに来ませんか）、I hope you can come.（来てくれるとうれしいです）。I just wanted to let you know that I got a new dog.（新しい犬を飼ったことを知らせたくて）、Guess what? I made a new friend at school!（聞いて！学校で新しい友達ができたの！）。',
    add: fresh(lb(80, 10, '誘い', 13, C.green, 'middle', true), bx(6, 26, 148, 40, 'Would you like to\ncome to my party?', C.green, FILL.green, 10), bx(6, 72, 148, 28, 'I hope you can come.', C.green, FILL.green, 10), lb(240, 10, '報告', 13, C.purple, 'middle', true), bx(166, 26, 148, 40, 'I just wanted to let\nyou know that ~', C.purple, FILL.purple, 10), bx(166, 72, 148, 28, 'Guess what? ~', C.purple, FILL.purple, 11), lb(160, 118, '来てくれるとうれしい ／ 新しい犬を飼ったよ', 11, C.ink, 'middle', true), ...cap('誘いと報告', C.main)),
  },
  {
    note: '❓本題の始まりは、どう見つけるのでしょう。→ By the way（ところで）や Actually（実は）が、あいさつから本題に切りかわる合図だからです。By the way, I\'m having a birthday party next Saturday. I was wondering if you could come.（ところで、来週の土曜日に誕生日パーティーをします。来てくれないかと思っています）。',
    add: fresh(bx(6, 10, 100, 28, 'あいさつ', C.gray, FILL.gray, 12), ar(108, 24, 120, 24, C.main), bx(122, 10, 190, 28, 'By the way, / Actually,', C.red, FILL.red, 13), lb(160, 56, 'ここから 本題 が始まる合図', 12, C.red, 'middle', true), bx(6, 74, 308, 48, "By the way, I'm having a birthday party\nnext Saturday. I was wondering if you could come.", C.blue, FILL.blue, 10), ...band(150, lb(160, 192, '合図のことばを見のがさない', 12, C.red, 'middle', true))),
  },
  {
    note: '手紙全体を読んで、4点を確かめます。①差出人・宛先：Yuki が Emily に宛てた手紙。②本題：誕生日パーティーへの誘い（オンライン参加でもよい）。③追加情報：書道を始めたこと。④結びの依頼：返事を書いて、学校生活を教えてほしい。',
    add: fresh(bx(6, 6, 308, 26, '① 差出人・宛先　Yuki → Emily', C.blue, FILL.blue, 11), bx(6, 36, 308, 26, '② 本題　誕生日パーティーの誘い（オンラインでも）', C.red, FILL.red, 10), bx(6, 66, 308, 26, '③ 追加　書道を習い始めた', C.green, FILL.green, 11), bx(6, 96, 308, 26, '④ 結び　返事で学校生活を教えて', C.purple, FILL.purple, 11), ...cap('手紙を読む4つのチェック', C.main)),
  },
  {
    note: 'まとめです。手紙の読解は、型（Dear ~, / Your friend,）を知る → 冒頭のあいさつは軽く読む → By the way 以降の本題（お願い・誘い・報告）を確かめる → 最後の依頼を確かめる、の順に読みます。「本題は何か」「相手に何をしてほしいか」の二つが、最もよく問われます。',
    add: fresh(...flow(['型を知る', 'あいさつは\n軽く', 'By the way\n以降が本題', '最後の\n依頼'], 20, { h: 74, size: 11, color: C.blue, fill: FILL.blue, gap: 8, pad: 6 }).flat(), lb(160, 118, '問われやすい：本題 と 相手への依頼', 12, C.red, 'middle', true), ...cap('手紙の読み方の順', C.green)),
  },
], '友達からの手紙：型と本題');

// ───────── new20_e6_eigo_15 簡単な長文読解②：動物・自然についての説明文 ─────────
const u35: DiagramFigure = show([
  {
    note: '動物や自然の説明文は、多くの場合「話題の紹介 → いくつかの特徴 → まとめ」という構成です。特徴は、見た目・大きさ、行動・習性、ほかの生き物とのちがい、などが順に説明されます。段落ごとの役割を意識すると整理しながら読めます。',
    add: [...flow(['話題の\n紹介', '特徴①\n見た目', '特徴②\n行動', '特徴③\nちがい'], 10, { h: 60, size: 11, color: C.blue, fill: FILL.blue, gap: 8, pad: 6 }).flat(), ar(160, 74, 160, 90, C.main), bx(60, 94, 200, 34, 'まとめ（全体の要点）', C.red, FILL.red, 13), ...cap('説明文の組み立て')],
  },
  {
    note: '説明文の始まりです。Have you ever heard of the axolotl?（ウーパールーパーについて聞いたことがありますか）は、「これから説明しますよ」という問いかけのサインです。It is a kind of salamander that lives in lakes in Mexico.（メキシコの湖にすむサンショウウオの一種です）と話題が紹介されます。',
    add: fresh(bx(6, 10, 308, 30, 'Have you ever heard of the axolotl?', C.blue, FILL.blue, 12), lb(160, 54, '→ これから説明しますよ、という合図', 11, C.blue, 'middle', true), bx(6, 70, 308, 40, 'It is a kind of salamander that\nlives in lakes in Mexico.', C.green, FILL.green, 11), lb(160, 124, 'メキシコの湖にすむ、サンショウウオの一種', 11, C.green, 'middle', true), ...band(150, lb(160, 192, '問いかけ → 話題の紹介', 12, C.main, 'middle', true))),
  },
  {
    note: '❓Unlike ~ のあとには、なぜ大切な情報が続くのでしょう。→ Unlike ~（〜と違って）は対比を表す表現で、「ほかの生き物と何が違うのか」という、その生き物のいちばんの特徴が続くことが多いからです。Unlike other salamanders, axolotls usually keep their gills even after they become adults.（ほかのサンショウウオと違い、ウーパールーパーは大人になってもえらを保持することが多い）。',
    add: fresh(bx(6, 8, 308, 32, 'Unlike other salamanders,', C.red, FILL.red, 13), lb(160, 54, 'ほかのサンショウウオと ちがって', 11, C.red, 'middle', true), bx(6, 68, 308, 44, 'axolotls usually keep their gills\neven after they become adults.', C.green, FILL.green, 11), lb(160, 126, '大人になっても えらを保持している', 11, C.green, 'middle', true), ...band(150, lb(160, 192, 'Unlike ~ は特徴の合図', 12, C.red, 'middle', true))),
  },
  {
    note: '❓数字が出てきたら、どうするのでしょう。→ 設問でピンポイントに問われやすいので、丸で囲むなどして目立たせます。Axolotls can grow up to 30 centimeters long.（体長30センチまで成長する）、They can live for more than 10 years.（10年以上生きる）。up to は「最大で」、more than は「〜以上」です。',
    add: fresh(bx(6, 14, 188, 26, '30 centimeters', C.blue, FILL.blue, 13), bx(200, 14, 114, 26, 'up to ＝ 最大で', C.blue, FILL.blue, 10), lb(160, 56, '体長は 30センチまで', 11, C.blue, 'middle', true), bx(6, 76, 130, 26, '10 years', C.green, FILL.green, 13), bx(144, 76, 170, 26, 'more than ＝ 〜以上', C.green, FILL.green, 10), lb(160, 118, '10年以上 生きる', 11, C.green, 'middle', true), ...band(150, lb(160, 192, '数字は目立たせて読む', 12, C.main, 'middle', true))),
  },
  {
    note: '理由と比較です。Because axolotls keep their gills, they can breathe underwater their whole lives.（えらを保持しているため、一生水中で呼吸できる）。Axolotls are more unusual than other salamanders because they don\'t go through a full change into adults.（完全には大人の姿に変化しないため、ほかのサンショウウオよりも珍しい）。than が出たら、何と何を比べているかを確かめます。',
    add: fresh(bx(6, 8, 308, 40, 'Because axolotls keep their gills,\nthey can breathe underwater their whole lives.', C.green, FILL.green, 10), lb(160, 60, 'えらがあるから（理由）→ 一生水中で呼吸（結果）', 10, C.green, 'middle', true), bx(6, 76, 308, 40, 'Axolotls are more unusual than other salamanders\nbecause they don\'t go through a full change.', C.blue, FILL.blue, 10), lb(160, 128, 'than ＝ 何と何を比べているか確かめる', 10, C.blue, 'middle', true), ...band(150, lb(160, 192, '理由と比較に注意', 12, C.main, 'middle', true))),
  },
  {
    note: '❓However のあとには、なぜ注目するのでしょう。→ それまでの説明と対照的な内容、多くは問題点や課題が続くからです。However, axolotls now live in only a few lakes, and they are an endangered species.（しかし、今ではわずかな湖にしかすんでおらず、絶滅危惧種〈ぜつめつきぐしゅ〉です）。ここで文章の流れが転換します。',
    add: fresh(bx(6, 10, 148, 50, 'それまで\n特徴の説明', C.blue, FILL.blue, 12), bx(166, 10, 148, 50, 'However,\n転換', C.red, FILL.red, 13), ar(156, 35, 164, 35, C.main), bx(6, 76, 308, 40, 'axolotls now live in only a few lakes,\nand they are an endangered species.', C.red, FILL.red, 10), lb(160, 130, 'わずかな湖にしかすんでおらず、絶滅危惧種', 10, C.red, 'middle', true), ...band(150, lb(160, 192, 'However の後に 課題が続く', 12, C.red, 'middle', true))),
  },
  {
    note: '代名詞（だいめいし）は、直前の文から何を指すかを確かめます。Axolotls live in only a few lakes in Mexico. They are now an endangered species. の They は、直前の Axolotls（複数）を指します。単数か複数か、人か物かをヒントにします。',
    add: fresh(bx(6, 14, 308, 30, 'Axolotls live in only a few lakes in Mexico.', C.blue, FILL.blue, 11), bx(6, 76, 308, 30, 'They are now an endangered species.', C.green, FILL.green, 12), ar(40, 74, 40, 46, C.red), lb(160, 62, 'They ＝ Axolotls（複数）', 12, C.red, 'middle', true), lb(160, 126, '代名詞は 直前の文から さがす', 12, C.ink, 'middle', true), ...band(150, lb(160, 192, 'They / It が指すものを確かめる', 12, C.main, 'middle', true))),
  },
  {
    note: 'この文章の要点は3つです。①特徴：えらを保持したまま大人になる。②大きさ・寿命：最大30センチ、10年以上生きる。③現状：However 以降で「絶滅危惧種」という転換が起きている。多くの人が守るために努力している、という結びです。',
    add: fresh(bx(6, 6, 308, 28, '① えらを保持したまま大人になる', C.blue, FILL.blue, 12), bx(6, 40, 308, 28, '② 最大30センチ、10年以上生きる', C.green, FILL.green, 12), bx(6, 74, 308, 28, '③ However 以降：絶滅危惧種', C.red, FILL.red, 12), lb(160, 122, '多くの人が守るために努力している', 11, C.ink, 'middle', true), ...cap('文章の要点3つ', C.main)),
  },
], '動物の説明文：構成・数字・However');

// ───────── new20_e6_eigo_16 簡単な長文読解③：伝記文で人物の人生を読み取る ─────────
const u36: DiagramFigure = show([
  {
    note: '伝記文（でんきぶん）は、人物の人生を時間の順に語る文章です。多くは「生まれ・子どものころ → きっかけ → 努力・挑戦 → 成し遂げたこと → 今の評価」の順に書かれます。',
    add: [...flow(['生まれ\n子ども時代', 'きっかけ', '努力\n挑戦', '成し遂げた\nこと'], 14, { h: 66, size: 11, color: C.blue, fill: FILL.blue, gap: 8, pad: 6 }).flat(), ar(160, 84, 160, 98, C.main), bx(60, 102, 200, 32, '今どう評価されているか', C.red, FILL.red, 13), ...cap('伝記文の流れ')],
  },
  {
    note: '冒頭を読みます。Wangari Maathai was born in Kenya in 1940.（1940年にケニアで生まれた）。When she was a child, she loved nature.（子どものころ自然が大好きだった）。Later, she studied biology in the United States and became the first woman in East Africa to earn a doctorate degree.（その後アメリカで生物学を学び、東アフリカの女性として初めて博士号を取った）。',
    add: fresh(...flow(['1940\nborn in\nKenya', 'a child\nloved\nnature', 'studied\nbiology in\nthe U.S.', 'first woman\nin East Africa\ndoctorate'], 14, { h: 80, size: 10, color: C.blue, fill: FILL.blue, gap: 8, pad: 6 }).flat(), lb(160, 118, '年号と順番を つかむ', 12, C.ink, 'middle', true), ...cap('ワンガリ・マータイの生い立ち', C.main)),
  },
  {
    note: '❓年号や年齢のことばに、なぜ印をつけるのでしょう。→ 出来事の順序を見失わないためです。When she was ten years old, ~（10歳のとき）、In 1990, ~（1990年に）、After graduating from ~, ~（〜を卒業したあと）、Later in her life, ~（人生の後半で）。伝記の設問は、時系列の並べかえや対応がよく問われます。',
    add: fresh(bx(6, 8, 308, 24, 'When she was ten years old, ~', C.blue, FILL.blue, 11), bx(6, 36, 308, 24, 'In 1990, ~', C.blue, FILL.blue, 11), bx(6, 64, 308, 24, 'After graduating from ~, ~', C.blue, FILL.blue, 11), bx(6, 92, 308, 24, 'Later in her life, ~', C.blue, FILL.blue, 11), lb(160, 134, '10歳のとき ／ 1990年に ／ 卒業後 ／ 人生の後半で', 10, C.ink, 'middle', true), ...band(150, lb(160, 192, '時間のことばに印をつける', 12, C.main, 'middle', true))),
  },
  {
    note: '伝記でほぼ必ず出てくるのが「困難」です。It was not easy for her to ~.（彼女にとって〜するのは簡単ではなかった）、Many people did not believe in her idea.（多くの人が彼女の考えを信じなかった）、She faced a lot of difficulties.（彼女は多くの困難に直面した）。',
    add: fresh(bx(6, 10, 308, 28, 'It was not easy for her to ~.', C.red, FILL.red, 12), lb(160, 50, '彼女にとって〜するのは簡単ではなかった', 11, C.red, 'middle', true), bx(6, 62, 308, 28, 'Many people did not believe in her idea.', C.red, FILL.red, 11), lb(160, 102, '多くの人が彼女の考えを信じなかった', 11, C.red, 'middle', true), bx(6, 112, 308, 28, 'She faced a lot of difficulties.', C.red, FILL.red, 12), ...band(150, lb(160, 192, '困難を表すことば', 12, C.red, 'middle', true))),
  },
  {
    note: '❓Despite ~ や but のあとが大切なのは、なぜでしょう。→ 「あきらめなかった」「続けた」という行動の部分に、その人物の強さや考え方が表れるからです。Despite these difficulties, she never gave up.（これらの困難にもかかわらず、決してあきらめなかった）。She kept planting trees with local women.（地元の女性たちと木を植え続けた）。together they planted more than 30 million trees（3000万本以上の木を植えた）。',
    add: fresh(bx(6, 8, 100, 28, 'Despite ~,', C.gray, FILL.gray, 13), ar(108, 22, 118, 22, C.main), bx(120, 8, 194, 28, 'she never gave up.', C.green, FILL.green, 13), lb(160, 48, '困難にもかかわらず、あきらめなかった', 11, C.green, 'middle', true), bx(6, 64, 308, 28, 'She kept planting trees with local women.', C.green, FILL.green, 10), lb(160, 104, '地元の女性たちと木を植え続けた', 11, C.green, 'middle', true), bx(60, 114, 200, 26, '30 million trees ＝ 3000万本以上', C.main, FILL.warm, 11), ...band(150, lb(160, 192, '乗りこえた行動に その人の強さ', 12, C.green, 'middle', true))),
  },
  {
    note: '人物の考えは、言葉からも読み取れます。She believed that small actions could change the world.（小さな行動が世界を変えられると信じていた）。"You can start where you are," she said.（「あなたは今いる場所から始められる」と彼女は言った）。引用符（" "）の中の言葉は、その人物の考えがそのまま表れる大切な部分です。',
    add: fresh(bx(6, 10, 308, 40, 'She believed that small actions\ncould change the world.', C.purple, FILL.purple, 12), lb(160, 64, '小さな行動が世界を変えられると信じていた', 11, C.purple, 'middle', true), bx(6, 80, 308, 36, '"You can start where you are," she said.', C.blue, FILL.blue, 12), lb(160, 130, '「今いる場所から始められる」と彼女は言った', 10, C.blue, 'middle', true), ...band(150, lb(160, 192, '信念と引用符の言葉', 12, C.purple, 'middle', true))),
  },
  {
    note: '結びは「今の評価」です。In 2004, she became the first African woman to win the Nobel Peace Prize.（2004年、アフリカの女性として初めてノーベル平和賞を受賞した）。Today, she is remembered as a great leader who showed that one person\'s small actions can change the world.（今日、一人の小さな行動が世界を変えられることを示した偉大なリーダーとして記憶されている）。',
    add: fresh(bx(6, 10, 308, 40, 'In 2004, she became the first African woman\nto win the Nobel Peace Prize.', C.red, FILL.red, 10), lb(160, 64, '2004年、ノーベル平和賞', 11, C.red, 'middle', true), bx(6, 78, 308, 50, 'Today, she is remembered as a great leader\nwho showed that one person\'s small actions\ncan change the world.', C.main, FILL.warm, 10), ...band(150, lb(160, 192, '結びに 要旨が集まる', 12, C.main, 'middle', true))),
  },
  {
    note: 'まとめの手順です。①時間のことばに印をつけて順序をつかむ、②困難と、それを乗りこえた行動を確かめる、③信念（believed that ~ / said "~"）と今の評価を確かめる、④③をつなげると、文章全体の要旨が見える。タイトルや要旨を選ぶ問題では、結びの部分が最大のヒントです。',
    add: fresh(bx(6, 6, 308, 26, '① 時間のことばで順序をつかむ', C.blue, FILL.blue, 11), bx(6, 36, 308, 26, '② 困難 → 乗りこえた行動', C.red, FILL.red, 11), bx(6, 66, 308, 26, '③ 信念（believed ・ said）と今の評価', C.purple, FILL.purple, 11), bx(6, 96, 308, 26, '④ ③をつなぐと 要旨が見える', C.green, FILL.green, 11), ...cap('伝記文を読む4つの手順', C.main)),
  },
], '伝記文：順序・困難・信念');

// ───────── new20_e6_eigo_17 音の変化①：リンキング ─────────
const u37: DiagramFigure = show([
  {
    note: '英語を話すときは、単語と単語の間にほとんど「間」を置きません。子音で終わる語のあとに、母音で始まる語が続くと、2つの音がつながって、1つの単語のように聞こえます。これをリンキング（つながる音）といいます。たとえば an apple は「アナプル」のように聞こえます。',
    add: [bx(30, 14, 70, 34, 'an', C.blue, FILL.blue, 15), bx(110, 14, 100, 34, 'apple', C.green, FILL.green, 15), ar(160, 54, 160, 80, C.main), bx(70, 84, 180, 38, 'ア・ナ・プル', C.red, FILL.red, 16), lb(160, 136, 'n の音と a の音が つながる', 11, C.ink, 'middle', true), ...cap('子音 ＋ 母音 → つながる')],
  },
  {
    note: '代表的な例です。an apple →「アナプル」、turn off →「ターノフ」、come on →「カモン」。come on は、日本語のカタカナ語としてもなじみのある音です。リンキングは特別なことではなく、ふだんから耳にしているものです。',
    add: fresh(bx(6, 10, 120, 28, 'an apple', C.blue, FILL.blue, 13), ar(128, 24, 150, 24, C.main), bx(154, 10, 160, 28, 'アナプル', C.red, FILL.red, 14), bx(6, 50, 120, 28, 'turn off', C.blue, FILL.blue, 13), ar(128, 64, 150, 64, C.main), bx(154, 50, 160, 28, 'ターノフ', C.red, FILL.red, 14), bx(6, 90, 120, 28, 'come on', C.blue, FILL.blue, 13), ar(128, 104, 150, 104, C.main), bx(154, 90, 160, 28, 'カモン', C.red, FILL.red, 14), ...cap('つながって 聞こえる例', C.main)),
  },
  {
    note: '❓なぜつながるのでしょう。→ 英語は、息の流れを止めずに単語をつなげて発音することばだからです。子音で終わったあと、すぐに母音が続くと、口の形が自然に次の音へ移り、2つの音が1つのかたまりに聞こえます。',
    add: fresh(lb(60, 14, '日本語の感覚', 12, C.gray, 'middle', true), bx(10, 24, 40, 24, 'an', C.gray, FILL.gray, 11), bx(60, 24, 70, 24, 'apple', C.gray, FILL.gray, 11), lb(80, 62, '一語ずつ区切る', 11, C.gray, 'middle'), lb(240, 14, '英語の感じ', 12, C.red, 'middle', true), bx(170, 24, 140, 24, 'an apple', C.red, FILL.red, 12), lb(240, 62, '息が止まらずに つながる', 11, C.red, 'middle', true), ar(172, 90, 308, 90, C.red), lb(160, 116, '息の流れを止めない', 13, C.ink, 'middle', true), ...cap('息のながれを止めない', C.red)),
  },
  {
    note: '❓聞こえ方が変わるなら、つづりも変わるのでしょうか。→ いいえ。リンキングは「発音（音）」の変化であって、つづりは変わりません。an apple は「アナプル」と聞こえても、書くときは an apple のままです。リスニングとつづりを混同しないようにしましょう。',
    add: fresh(bx(10, 12, 140, 34, '聞こえ方\nアナプル', C.red, FILL.red, 13), bx(170, 12, 140, 34, '書き方\nan apple', C.blue, FILL.blue, 13), lb(160, 66, '音は変わっても、つづりは変わらない', 12, C.ink, 'middle', true), bx(60, 86, 200, 32, '✕  anapple と書かない', C.red, FILL.red, 12), ...cap('音の変化 ≠ つづりの変化', C.red)),
  },
  {
    note: '同じ（似た）子音が続くときは、音が1つにまとまります。good day は「グッデイ」、big game は「ビゲーム」のように聞こえます。前の語の最後の子音がほとんど発音されず、次の語の最初の子音と重なります。',
    add: fresh(bx(6, 14, 130, 30, 'good day', C.blue, FILL.blue, 14), ar(138, 29, 166, 29, C.main), bx(170, 14, 144, 30, 'グッデイ', C.red, FILL.red, 14), lb(160, 60, 'd の音が 1つにまとまる', 11, C.ink, 'middle', true), bx(6, 78, 130, 30, 'big game', C.blue, FILL.blue, 14), ar(138, 93, 166, 93, C.main), bx(170, 78, 144, 30, 'ビゲーム', C.red, FILL.red, 14), lb(160, 124, 'g の音が 1つにまとまる', 11, C.ink, 'middle', true), ...cap('同じ子音は 1つになる', C.main)),
  },
  {
    note: 't や d のあとに you が続くと、「チュ」「ジュ」のように聞こえます。want you →「ワンチュ」、did you →「ディジュ」。What did you eat? は「ワッ・ディジュ・イート」のように聞こえます。Did you ~? や What do you ~? の疑問文でとてもよく起こるので、会話文のリスニングで頻出です。',
    add: fresh(bx(6, 12, 130, 28, 'want you', C.blue, FILL.blue, 13), ar(138, 26, 166, 26, C.main), bx(170, 12, 144, 28, 'ワンチュ', C.red, FILL.red, 14), bx(6, 50, 130, 28, 'did you', C.blue, FILL.blue, 13), ar(138, 64, 166, 64, C.main), bx(170, 50, 144, 28, 'ディジュ', C.red, FILL.red, 14), bx(6, 88, 308, 28, 'What did you eat?', C.green, FILL.green, 13), lb(160, 132, 'ワッ・ディジュ・イート', 12, C.green, 'middle', true), ...band(150, lb(160, 192, 't / d ＋ you は チュ・ジュに', 12, C.main, 'middle', true))),
  },
  {
    note: '声に出して練習します。Did you see it?（ディジュ・シー・イット）、What do you want?（ワッダユー・ウォント）、Nice to meet you.（ナイス・トゥ・ミーチュー）。リンキングされた音を、「そういう決まった音のかたまり」として耳と口で覚えるのが、いちばん効果的な対策です。',
    add: fresh(bx(6, 8, 308, 26, 'Did you see it?　ディジュ・シー・イット', C.blue, FILL.blue, 12), bx(6, 40, 308, 26, 'What do you want?　ワッダユー・ウォント', C.green, FILL.green, 12), bx(6, 72, 308, 26, 'Nice to meet you.　ナイス・トゥ・ミーチュー', C.purple, FILL.purple, 12), lb(160, 118, '音のかたまりとして 耳と口で覚える', 12, C.ink, 'middle', true), ...cap('声に出して練習', C.main)),
  },
  {
    note: 'よくある崩れた形もあります。want to → ワナ、going to → ゴナ、got to → ガラ（ガッタ）。I\'m going to study. は「アイム・ゴナ・スタディ」。リスニングでは、①先に設問と選択肢の単語を確かめ、②頻出パターンが聞こえたら次の内容に集中し、③1語ずつではなく「かたまり」で意味をつかみます。',
    add: fresh(bx(6, 6, 98, 26, 'want to', C.blue, FILL.blue, 12), lb(155, 19, '→ ワナ', 12, C.red, 'middle', true), bx(111, 6, 98, 26, 'going to', C.blue, FILL.blue, 12), lb(260, 19, '→ ゴナ', 12, C.red, 'middle', true), bx(6, 40, 98, 26, 'got to', C.blue, FILL.blue, 12), lb(155, 53, '→ ガラ', 12, C.red, 'middle', true), bx(6, 78, 308, 20, '① 先に設問と選択肢を確かめる', C.green, FILL.green, 11), bx(6, 102, 308, 20, '② 頻出パターンを合図に集中', C.green, FILL.green, 11), bx(6, 126, 308, 20, '③ かたまりで意味をつかむ', C.green, FILL.green, 11), ...band(150, lb(160, 192, 'リスニングのコツ', 12, C.main, 'middle', true))),
  },
], '音のつながり：リンキング');

// ───────── new20_e6_eigo_18 音の変化②：弱い語と消える・変わる音 ─────────
const u38: DiagramFigure = show([
  {
    note: '英語の文には「強く読む語」と「弱く読む語」があります。強く読むのは意味の中心になる語（名詞・動詞・形容詞・副詞・疑問詞など）、弱く読むのは文法のはたらきをする語（a / the、to / for / of、and / but など）です。I want to go to the park. では、want・go・park が強く、to・to・the が弱く読まれます。',
    add: [bx(6, 6, 148, 26, '強く（意味の中心）', C.red, FILL.red, 11), bx(166, 6, 148, 26, '弱く（文法の語）', C.gray, FILL.gray, 11), lb(80, 48, '名詞・動詞・形容詞…', 11, C.red, 'middle', true), lb(240, 48, 'a / the ・ to / for ・ and', 11, C.gray, 'middle', true), bx(6, 70, 308, 30, 'I want to go to the park.', C.blue, FILL.blue, 14), lb(160, 118, '強い：want ・ go ・ park　弱い：to ・ to ・ the', 11, C.ink, 'middle', true), ...cap('強く読む語・弱く読む語')],
  },
  {
    note: '弱く読まれる語は、短く、あいまいな母音で発音されます。to は「トゥー」ではなく軽く「タ」、for は「フォー」ではなく「フォ」、and は「アンド」ではなく「アン」か「ン」、a は「エイ」ではなく軽く「ア」です。',
    add: fresh(bx(6, 8, 148, 28, 'to', C.gray, FILL.gray, 14), lb(236, 22, 'トゥー → 軽く「タ」', 12, C.red, 'middle', true), bx(6, 42, 148, 28, 'for', C.gray, FILL.gray, 14), lb(236, 56, 'フォー → 軽く「フォ」', 12, C.red, 'middle', true), bx(6, 76, 148, 28, 'and', C.gray, FILL.gray, 14), lb(236, 90, 'アンド → 「アン」「ン」', 12, C.red, 'middle', true), bx(6, 110, 148, 28, 'a', C.gray, FILL.gray, 14), lb(236, 124, 'エイ → 軽く「ア」', 12, C.red, 'middle', true), ...band(150, lb(160, 192, '弱く短く読まれる', 12, C.main, 'middle', true))),
  },
  {
    note: '❓なぜ強弱をつけるのでしょう。→ 意味の中心になる語を目立たせ、英語らしいリズムを作るためです。I WANT to GO to the PARK. のように、強い語だけが大きく、弱い語は小さく短くなります。このリズムを意識して聞くことが、自然な英語耳への第一歩です。',
    add: fresh(bx(6, 40, 40, 70, 'I', C.gray, FILL.gray, 11), bx(52, 20, 60, 90, 'WANT', C.red, FILL.red, 14), bx(118, 70, 30, 40, 'to', C.gray, FILL.gray, 10), bx(154, 20, 40, 90, 'GO', C.red, FILL.red, 14), bx(200, 70, 30, 40, 'to', C.gray, FILL.gray, 10), bx(236, 70, 34, 40, 'the', C.gray, FILL.gray, 10), bx(276, 20, 38, 90, 'PARK', C.red, FILL.red, 11), lb(160, 130, '強い語が大きく、弱い語は小さく短く', 11, C.ink, 'middle', true), ...cap('強弱のリズム', C.red)),
  },
  {
    note: '音が消える「脱落（だつらく）」です。語の最後の子音（特に t や d）のあとに別の子音が続くと、その音がほとんど発音されなくなります。next day は t がほとんど聞こえず「ネクス・デイ」、best friend は t が消えて「ベス・フレンド」のように聞こえます。',
    add: fresh(bx(6, 12, 130, 30, 'next day', C.blue, FILL.blue, 14), ar(138, 27, 166, 27, C.main), bx(170, 12, 144, 30, 'ネクス・デイ', C.red, FILL.red, 13), lb(160, 56, 'next の t が消える', 11, C.ink, 'middle', true), bx(6, 76, 130, 30, 'best friend', C.blue, FILL.blue, 14), ar(138, 91, 166, 91, C.main), bx(170, 76, 144, 30, 'ベス・フレンド', C.red, FILL.red, 13), lb(160, 120, 'best の t が消える', 11, C.ink, 'middle', true), ...band(150, lb(160, 192, '音が消える ＝ 脱落', 12, C.main, 'middle', true))),
  },
  {
    note: '音が変わる「同化（どうか）」です。隣り合う2つの音が影響しあって、別の音になります。don\'t you は「ドンチュ」、miss you は「ミシュ」のように聞こえます。t / d ＋ 子音なら音が消えやすく、t / d ＋ you ならチュ・ジュに変わりやすい、とまとめられます。',
    add: fresh(bx(6, 10, 130, 30, "don't you", C.blue, FILL.blue, 14), ar(138, 25, 166, 25, C.main), bx(170, 10, 144, 30, 'ドンチュ', C.red, FILL.red, 14), bx(6, 50, 130, 30, 'miss you', C.blue, FILL.blue, 14), ar(138, 65, 166, 65, C.main), bx(170, 50, 144, 30, 'ミシュ', C.red, FILL.red, 14), bx(6, 94, 148, 30, 't / d ＋ 子音\n→ 消えやすい', C.green, FILL.green, 10), bx(166, 94, 148, 30, 't / d ＋ you\n→ チュ・ジュに', C.green, FILL.green, 10), ...band(150, lb(160, 192, '音が変わる ＝ 同化', 12, C.main, 'middle', true))),
  },
  {
    note: '練習です。Would you like something to drink? は、would you が「ウジュ」、to が弱く「タ」になり、全体で「ウジュ・ライク・サムシン・タ・ドリンク」のように聞こえます。What would you like to eat? も、would you は「ウジュ」、like to は「ライク・タ」と速くなめらかに聞こえます。',
    add: fresh(bx(6, 10, 308, 30, 'Would you like something to drink?', C.blue, FILL.blue, 12), ar(160, 44, 160, 60, C.main), bx(6, 64, 308, 34, 'ウジュ・ライク・サムシン・タ・ドリンク', C.red, FILL.red, 12), lb(160, 118, 'would you → ウジュ ／ to → タ', 12, C.ink, 'middle', true), ...band(150, lb(160, 192, '聞こえ方に 慣れる', 12, C.main, 'middle', true))),
  },
  {
    note: '❓リスニングでは、どう対策するのでしょう。→ ①意味の中心の語を聞き取ることに集中し、弱い語は文法で補う。②not や don\'t のような否定の短い語は特に注意（聞き逃すと意味が正反対になるため）。③知っている語が聞き取れないときは「弱形・脱落・同化かも」と考えて、文脈で埋める。',
    add: fresh(bx(6, 8, 308, 34, '① 意味の中心の語に集中\n弱い語は文法で補う', C.blue, FILL.blue, 11), bx(6, 48, 308, 34, '② not ・ don\'t は特に注意\n（意味が正反対になる）', C.red, FILL.red, 11), bx(6, 88, 308, 34, '③ 聞き取れない語は\n「音の変化かも」と考える', C.green, FILL.green, 11), ...cap('リスニング本番の3つの対策', C.main)),
  },
  {
    note: '家庭でできる練習は3ステップです。①短い会話文をゆっくり音声で聞く → ②同じ文をふつうの速さで聞く → ③自分でも同じリズムをまねて声に出す。耳と口の両方で、音の変化に慣れていきます。音読やシャドーイングもおすすめです。',
    add: fresh(...flow(['ゆっくり\n聞く', 'ふつうの速さで\n聞く', 'まねして\n声に出す'], 22, { h: 70, size: 12, color: C.blue, fill: FILL.blue, gap: 14, pad: 10 }).flat(), lb(160, 118, 'くりかえして 耳と口を慣らす', 12, C.red, 'middle', true), ...cap('家でできる 3ステップ', C.green)),
  },
], '弱い語・脱落・同化');

// ───────── new20_e6_eigo_19 英検5級レベル総合演習 ─────────
const u39: DiagramFigure = show([
  {
    note: '英検5級の筆記は3つのパターンが中心です。①短文の語句・文法選択（空所に合う語を4つから選ぶ）、②会話文の空所補充（自然な発言を選ぶ）、③語句の並べかえ。リスニングは絵を見て答える形式と、会話の最後の受け答えを選ぶ形式が中心です。',
    add: [bx(6, 8, 308, 30, '① 短文の語句・文法選択', C.blue, FILL.blue, 13), bx(6, 44, 308, 30, '② 会話文の空所補充', C.green, FILL.green, 13), bx(6, 80, 308, 30, '③ 語句の並べかえ', C.purple, FILL.purple, 13), lb(160, 128, '＋ リスニング', 12, C.red, 'middle', true), ...cap('5級の筆記3パターン')],
  },
  {
    note: '例題①です。My sister ( ) to school every day. 選択肢は 1. go　2. goes　3. going　4. went。every day（毎日）から現在の習慣とわかります。主語 My sister は三人称単数なので、動詞に -s が必要です。答えは 2. goes です。',
    add: fresh(bx(6, 8, 308, 30, 'My sister (   ) to school every day.', C.blue, FILL.blue, 13), lb(60, 56, '1. go', 12, C.gray, 'middle', true), lb(130, 56, '2. goes', 13, C.green, 'middle', true), lb(200, 56, '3. going', 12, C.gray, 'middle', true), lb(270, 56, '4. went', 12, C.gray, 'middle', true), bx(6, 72, 148, 30, 'every day → 現在の習慣', C.green, FILL.green, 10), bx(166, 72, 148, 30, 'My sister → 三人称単数', C.green, FILL.green, 10), lb(160, 122, '答え：2. goes', 14, C.green, 'middle', true), ...band(150, lb(160, 192, '空所の前後に 手がかり', 12, C.main, 'middle', true))),
  },
  {
    note: '例題②です。A: What time is it now?　B: It\'s ( ) nine. 選択肢は 1. in　2. on　3. at　4. to。時刻の前に置く前置詞は at です。at nine で「9時に」という意味になります。答えは 3. at です。',
    add: fresh(bx(6, 8, 308, 30, "B: It's (   ) nine.", C.blue, FILL.blue, 14), lb(60, 56, '1. in', 12, C.gray, 'middle', true), lb(130, 56, '2. on', 12, C.gray, 'middle', true), lb(200, 56, '3. at', 13, C.green, 'middle', true), lb(270, 56, '4. to', 12, C.gray, 'middle', true), bx(40, 74, 240, 30, '時刻の前の前置詞は at', C.green, FILL.green, 13), lb(160, 122, '答え：3. at（9時に）', 14, C.green, 'middle', true), ...band(150, lb(160, 192, '決まった組み合わせ', 12, C.main, 'middle', true))),
  },
  {
    note: '例題③です。There ( ) two cats under the table. 選択肢は 1. is　2. are　3. was　4. am。There is / are のあとの動詞は、そのあとに続く名詞の数に合わせます。two cats は複数なので、答えは 2. are です。',
    add: fresh(bx(6, 8, 308, 30, 'There (   ) two cats under the table.', C.blue, FILL.blue, 12), lb(60, 56, '1. is', 12, C.gray, 'middle', true), lb(130, 56, '2. are', 13, C.green, 'middle', true), lb(200, 56, '3. was', 12, C.gray, 'middle', true), lb(270, 56, '4. am', 12, C.gray, 'middle', true), bx(40, 74, 240, 30, 'two cats ＝ 複数 → are', C.green, FILL.green, 13), lb(160, 122, '答え：2. are', 14, C.green, 'middle', true), ...band(150, lb(160, 192, 'あとの名詞の数に合わせる', 12, C.main, 'middle', true))),
  },
  {
    note: '語句選択の手がかりは3つです。①時を表す語（every day・now）、②主語の数（三人称単数か複数か）、③決まった組み合わせ（at＋時刻）。この3つを探すと、確実に絞り込めます。',
    add: fresh(bx(6, 10, 308, 32, '① 時を表す語　every day ・ now', C.blue, FILL.blue, 12), bx(6, 50, 308, 32, '② 主語の数　単数か複数か', C.green, FILL.green, 12), bx(6, 90, 308, 32, '③ 決まった組み合わせ　at ＋ 時刻', C.purple, FILL.purple, 12), ...cap('3つの手がかり', C.main)),
  },
  {
    note: '会話文の空所補充では、空所の前の発言が質問か提案かを見きわめ、その応答を選びます。A: Would you like some tea? には B: Yes, please.。A: How was your weekend? には B: It was great.（How was ~? は感想をたずねる）。❓文法が正しいだけでは不十分で、「会話としてつながるか」が基準です。',
    add: fresh(bx(6, 8, 308, 26, 'A: Would you like some tea?', C.gray, FILL.gray, 12), bx(6, 38, 308, 26, 'B: Yes, please.', C.green, FILL.green, 12), lb(160, 76, 'Would you like ~? ＝ すすめる → Yes / No', 11, C.green, 'middle', true), bx(6, 92, 308, 26, 'A: How was your weekend?', C.gray, FILL.gray, 12), bx(6, 122, 308, 24, 'B: It was great. I went to the zoo.', C.green, FILL.green, 11), ...band(150, lb(160, 192, '会話として つながるものを選ぶ', 12, C.green, 'middle', true))),
  },
  {
    note: '並べかえ問題です。( is / your / this / bag / ) ? 手順は、①動詞を探す（is）、②疑問文なので be動詞を主語の前に置く、③残りを意味が通るように当てはめる。答えは Is this your bag? です。',
    add: fresh(bx(6, 8, 308, 28, '( is / your / this / bag ) ?', C.blue, FILL.blue, 13), ...flow(['① 動詞\nis', '② 疑問文\nis を前に', '③ 残りを\n並べる'], 48, { h: 50, size: 11, color: C.green, fill: FILL.green, gap: 14, pad: 8 }).flat(), bx(60, 108, 200, 30, 'Is this your bag?', C.green, FILL.green, 15), ...band(150, lb(160, 192, 'まず動詞をさがす', 12, C.main, 'middle', true))),
  },
  {
    note: 'リスニングは3つのパートです。パート1：絵を見て合う英文を選ぶ（絵の中の人・物・動作を先に確認）。パート2：短い会話の最後の応答を選ぶ（会話文問題と同じ考え方）。パート3：やや長い会話や英文の内容に合う絵・選択肢を選ぶ（数字・場所・人物名に集中）。どの場合も、放送前に選択肢に目を通します。',
    add: fresh(bx(6, 6, 308, 34, 'パート1　絵を見て 合う英文を選ぶ', C.blue, FILL.blue, 11), bx(6, 46, 308, 34, 'パート2　会話の最後の応答を選ぶ', C.green, FILL.green, 11), bx(6, 86, 308, 34, 'パート3　数字・場所・人物名に集中', C.purple, FILL.purple, 11), lb(160, 136, '放送の前に 選択肢に目を通す', 12, C.red, 'middle', true), ...cap('リスニングの3パート', C.main)),
  },
], '英検5級：語句選択・会話文・並べかえ');

// ───────── new20_e6_eigo_20 英検4級レベル総合演習 ─────────
const u40: DiagramFigure = show([
  {
    note: '英検4級では、5級の基礎に加えて新しい文法が問われます。現在完了（have / has＋過去分詞）、不定詞（to＋原形）、比較級・最上級、受動態、接続詞（when・if・because）。長文問題（Eメール・掲示文）も加わります。',
    add: [bx(6, 4, 308, 24, '現在完了　I have just finished my homework.', C.blue, FILL.blue, 10), bx(6, 32, 308, 24, '不定詞　It\'s fun to swim.', C.green, FILL.green, 11), bx(6, 60, 308, 24, '比較　This book is more interesting than that one.', C.purple, FILL.purple, 10), bx(6, 88, 308, 24, '受動態　This song is loved by many people.', C.red, FILL.red, 10), bx(6, 116, 308, 24, '接続詞　I was happy when I saw you.', C.main, FILL.warm, 10), ...cap('4級で新しく問われる文法')],
  },
  {
    note: '例題①です。A: Have you ( ) finished your homework?　B: Yes, I have. 選択肢は 1. yet　2. already　3. still　4. never。Have you already finished ~? は完了の疑問文として自然な組み合わせです。yet は主に疑問文の文末や否定文で使われます。答えは 2. already です。',
    add: fresh(bx(6, 8, 308, 30, 'Have you (   ) finished your homework?', C.blue, FILL.blue, 12), lb(60, 56, '1. yet', 12, C.gray, 'middle', true), lb(130, 56, '2. already', 13, C.green, 'middle', true), lb(200, 56, '3. still', 12, C.gray, 'middle', true), lb(270, 56, '4. never', 12, C.gray, 'middle', true), bx(6, 72, 148, 30, 'already ＝ もう（完了）', C.green, FILL.green, 11), bx(166, 72, 148, 30, 'yet ＝ 文末・否定文で', C.gray, FILL.gray, 11), lb(160, 122, '答え：2. already', 14, C.green, 'middle', true), ...band(150, lb(160, 192, '完了の疑問文', 12, C.main, 'middle', true))),
  },
  {
    note: '例題②です。This mountain is ( ) than that one. 選択肢は 1. high　2. higher　3. highest　4. more high。than があるので、比較級が入ります。high は -er を付ける規則変化なので higher が正解です。答えは 2. higher です。',
    add: fresh(bx(6, 8, 308, 30, 'This mountain is (   ) than that one.', C.blue, FILL.blue, 12), lb(60, 56, '1. high', 12, C.gray, 'middle', true), lb(130, 56, '2. higher', 13, C.green, 'middle', true), lb(200, 56, '3. highest', 12, C.gray, 'middle', true), lb(270, 56, '4. more high', 11, C.gray, 'middle', true), bx(40, 74, 240, 30, 'than があるので 比較級', C.green, FILL.green, 13), lb(160, 122, '答え：2. higher', 14, C.green, 'middle', true), ...band(150, lb(160, 192, 'than → 比較級', 12, C.main, 'middle', true))),
  },
  {
    note: '4級から加わる長文問題は、Eメールのやり取りや掲示がよく題材になります。件名（Subject）・差出人（From）・宛先（To）も読み取る対象です。例：Subject: About the school festival / From: Emma / To: Yuki / Hi Yuki, are you free next Saturday? Our school is having a festival, and I want to go with you. It starts at 10 a.m.',
    add: fresh(bx(30, 4, 260, 138, undefined, C.main, FILL.warm), lb(46, 20, 'Subject: About the school festival', 10, C.ink, 'start', true), lb(46, 38, 'From: Emma', 11, C.blue, 'start', true), lb(46, 56, 'To: Yuki', 11, C.green, 'start', true), lb(46, 80, 'Hi Yuki, are you free next Saturday?', 10, C.ink, 'start'), lb(46, 98, 'Our school is having a festival, and', 10, C.ink, 'start'), lb(46, 114, 'I want to go with you. It starts at 10 a.m.', 10, C.ink, 'start'), ...cap('Eメール形式の長文')),
  },
  {
    note: '❓内容一致問題で、なぜ本文のことばをそのまま探してはいけないのでしょう。→ 4級では、同じ内容を別の言い方に言いかえた選択肢が正解になることが多いからです。本文の I want to go with you. は、選択肢では She wants to go to the festival with Yuki. のように言いかえられます。',
    add: fresh(bx(6, 10, 308, 28, 'I want to go with you.　（本文）', C.blue, FILL.blue, 12), ar(160, 42, 160, 62, C.main), bx(6, 66, 308, 40, 'She wants to go to the festival\nwith Yuki.　（選択肢）', C.green, FILL.green, 11), lb(160, 124, '同じ意味を ちがう言い方で', 12, C.ink, 'middle', true), ...band(150, lb(160, 192, '言いかえに注意', 12, C.green, 'middle', true))),
  },
  {
    note: '語句整序（ごくせいじょ）は、5級より長い文になります。( to / want / I / be / a / doctor / in the future ). まず主語と動詞で骨組み I want to be を作り、そこに a doctor、時を表す in the future を組み合わせます。不定詞（to＋原形）はひとかたまりで考えます。',
    add: fresh(bx(6, 8, 308, 28, '( to / want / I / be / a / doctor / in the future )', C.blue, FILL.blue, 10), ...flow(['I want\nto be', 'a doctor', 'in the\nfuture'], 50, { h: 44, size: 12, color: C.green, fill: FILL.green, gap: 14, pad: 8 }).flat(), lb(160, 110, '① 主語と動詞　② to ＋ 原形は かたまり　③ 時の語は 最後', 10, C.ink, 'middle', true), lb(160, 130, 'I want to be a doctor in the future.', 12, C.green, 'middle', true), ...band(150, lb(160, 192, '骨組みから組み立てる', 12, C.main, 'middle', true))),
  },
  {
    note: '4級のリスニングは、5級より会話が長く、Eメールの内容を問う問題も出ます。「だれが・何を・いつ」を聞き取るだけでなく、会話全体の流れ（提案 → 断る理由 → 代わりの案）まで追います。',
    add: fresh(...flow(['提案', '断る理由', '代わりの案'], 20, { h: 60, size: 13, color: C.blue, fill: FILL.blue, gap: 16, pad: 10 }).flat(), lb(160, 104, 'だれが・何を・いつ ＋ 全体の流れ', 13, C.ink, 'middle', true), ...cap('会話の流れを追う', C.main)),
  },
  {
    note: '総仕上げの進め方です。①これまでの単元で学んだ文法・表現を横断的に復習する。②過去形・未来表現・比較・道案内・買い物・お知らせ文など、場面ごとの型を思い出しながら模擬問題を解く。③まちがえた問題は「知らなかった」のか「わかっていたのに読みまちがえた」のかを区別し、後者は同じような問題でもう一度確かめる。',
    add: fresh(bx(6, 8, 308, 32, '① 学んだ文法・表現を 横断的に復習', C.blue, FILL.blue, 11), bx(6, 46, 308, 32, '② 場面ごとの型を思い出して 模擬問題', C.green, FILL.green, 11), bx(6, 84, 308, 44, '③ まちがいを区別する\n知らなかった ／ 読みまちがえた', C.red, FILL.red, 11), ...cap('総仕上げの3ステップ', C.main)),
  },
], '英検4級：新しい文法と長文');

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
  'xf_new20_e6_eigo_09': u29,
  'xf_new20_e6_eigo_10': u30,
  'xf_new20_e6_eigo_11': u31,
  'xf_new20_e6_eigo_12': u32,
  'xf_new20_e6_eigo_13': u33,
  'xf_new20_e6_eigo_14': u34,
  'xf_new20_e6_eigo_15': u35,
  'xf_new20_e6_eigo_16': u36,
  'xf_new20_e6_eigo_17': u37,
  'xf_new20_e6_eigo_18': u38,
  'xf_new20_e6_eigo_19': u39,
  'xf_new20_e6_eigo_20': u40,
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
  'new20_e6_eigo_09#0': 'xf_new20_e6_eigo_09',
  'new20_e6_eigo_10#0': 'xf_new20_e6_eigo_10',
  'new20_e6_eigo_11#0': 'xf_new20_e6_eigo_11',
  'new20_e6_eigo_12#0': 'xf_new20_e6_eigo_12',
  'new20_e6_eigo_13#0': 'xf_new20_e6_eigo_13',
  'new20_e6_eigo_14#0': 'xf_new20_e6_eigo_14',
  'new20_e6_eigo_15#0': 'xf_new20_e6_eigo_15',
  'new20_e6_eigo_16#0': 'xf_new20_e6_eigo_16',
  'new20_e6_eigo_17#0': 'xf_new20_e6_eigo_17',
  'new20_e6_eigo_18#0': 'xf_new20_e6_eigo_18',
  'new20_e6_eigo_19#0': 'xf_new20_e6_eigo_19',
  'new20_e6_eigo_20#0': 'xf_new20_e6_eigo_20',
};
