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
};
