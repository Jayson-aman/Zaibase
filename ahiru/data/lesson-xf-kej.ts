// 高校受験 英語（中1・中2）の単元に1つずつ足す動く図解スライド。
// 「❓なぜ？→答え」の連鎖で、7枚以上。上に図、下の帯（band）にそのスライドのひとこと。
import type { DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, show, flow, stack, band, fresh, cover } from './diagram-kit';

const cap = (t: string, color: string = C.ink, size = 12) => band(150, lb(160, 190, t, size, color, 'middle', true));
const capx = (t1: string, t2: string, color: string, fill: string) =>
  band(150, lb(160, 165, t1, 11, C.gray, 'middle'), bx(20, 178, 280, 46, t2, color, fill, 13));
/** 時計（時 h・分 m）。 */
const clock = (cx: number, cy: number, r: number, h: number, m: number) => {
  const ah = ((h % 12) * 30 + m * 0.5) * Math.PI / 180;
  const am = m * 6 * Math.PI / 180;
  const hl = r * 0.45, ml = r * 0.65;
  return [
    ci(cx, cy, r, undefined, C.gray, '#FFFFFF'),
    lb(cx, cy - r + 9, '12', 9, C.gray), lb(cx + r - 9, cy, '3', 9, C.gray), lb(cx, cy + r - 9, '6', 9, C.gray), lb(cx - r + 9, cy, '9', 9, C.gray),
    ln(cx, cy, cx + hl * Math.sin(ah), cy - hl * Math.cos(ah), C.ink, false, 3.5),
    ln(cx, cy, cx + ml * Math.sin(am), cy - ml * Math.cos(am), C.blue, false, 2),
  ];
};
const sum3 = (a: string, b: string, c: string, last: string) =>
  fresh(bx(15, 12, 290, 34, a, C.blue, FILL.blue, 12), bx(15, 54, 290, 34, b, C.main, FILL.warm, 12), bx(15, 96, 290, 34, c, C.green, FILL.green, 12), ...cap(last, C.green));

// ───────── new20_j1_eigo_03 時刻の言い方とたずね方 ─────────
const e03: DiagramFigure = show([
  {
    note: '時刻のたずね方と答え方の型です。「今、何時ですか」は What time is it? とたずね、It\'s three o\'clock.（3時です）のように It\'s のあとに時刻を言います。',
    add: [...clock(70, 72, 52, 3, 0), bx(140, 26, 170, 36, 'What time is it?', C.blue, FILL.blue, 13), bx(140, 80, 170, 36, "It's three o'clock.", C.green, FILL.green, 13), ...cap('たずねる → It\'s 〜. で答える')],
  },
  {
    note: '❓なぜ、答えの主語は I や the time ではなく it なのでしょう。→ 英語の文には必ず主語が必要です。でも時刻の話には、人や物の話題がありません。そこで形だけの主語 it を置きます。「それ」とは訳しません。天気や日付の文と同じ仲間です。',
    add: fresh(bx(20, 24, 80, 40, 'It', C.red, FILL.red, 16), bx(110, 24, 80, 40, "'s", C.gray, FILL.gray, 16), bx(200, 24, 100, 40, 'five.', C.green, FILL.green, 16), lb(80, 84, '訳さない', 11, C.red, 'middle', true), lb(250, 84, '時刻', 11, C.green, 'middle', true), lb(160, 118, '天気・日付の文も 主語は it', 11, C.gray), ...cap('時刻の主語は いつも it', C.red)),
  },
  {
    note: "❓o'clock は、いつ付けるのでしょう。→ o'clock は「ちょうど」の意味を含むので、ちょうどの時刻だけに付けます。3時30分のように分がある時刻には付けません。",
    add: fresh(bx(15, 20, 290, 36, "○ It's three o'clock.（ちょうど3時）", C.green, FILL.green, 13), bx(15, 70, 290, 36, "× It's three thirty o'clock.", C.red, FILL.red, 13), lb(160, 126, '分がある時刻には o\'clock なし', 11, C.red, 'middle', true), ...cap("o'clock は「ちょうど」だけ", C.red)),
  },
  {
    note: '分がある時刻は、時と分をそのまま数字で並べます。3時15分は three fifteen、7時45分は seven forty-five。いちばん簡単で、会話でもよく使われる言い方です。',
    add: fresh(...clock(70, 72, 52, 3, 15), bx(140, 26, 170, 36, "It's three fifteen.", C.blue, FILL.blue, 13), bx(140, 80, 170, 36, "It's seven forty-five.", C.blue, FILL.blue, 13), ...cap('時 ＋ 分 を数字のまま並べる', C.blue)),
  },
  {
    note: '❓「〜時半」は、どう言うのでしょう。→ half は「半分」。1時間の半分が30分なので、half past three（3時を半分過ぎた）で3時半です。three thirty と言ってもかまいません。',
    add: fresh(...clock(70, 72, 52, 3, 30), bx(140, 26, 170, 36, "It's half past three.", C.main, FILL.warm, 13), lb(225, 84, '＝ It\'s three thirty.', 12, C.ink, 'middle', true), ...cap('half past three ＝ 3時半', C.main)),
  },
  {
    note: '❓では、half past のあとは three と four のどちらでしょう。→ three です。3時を過ぎてから30分たっただけで、まだ4時にはなっていません。past は「過ぎた」なので、あとには「今の時」が来ます。',
    add: fresh(bx(15, 20, 290, 36, "○ half past three（3時＋30分）", C.green, FILL.green, 13), bx(15, 70, 290, 36, "× half past four（4時にはまだ）", C.red, FILL.red, 13), lb(160, 126, 'past のあとは「今の時」', 11, C.gray, 'middle', true), ...cap('3時半 → past three', C.green)),
  },
  {
    note: '❓quarter（クォーター）とは何でしょう。→ 「4分の1」です。1時間60分の4分の1は15分。だから a quarter past nine は9時15分過ぎ（9時15分）、a quarter to nine は9時の15分前（8時45分）です。',
    add: fresh(bx(10, 14, 75, 28, '15分', C.blue, FILL.blue, 11), bx(85, 14, 75, 28, '15分', C.blue, FILL.blue, 11), bx(160, 14, 75, 28, '15分', C.blue, FILL.blue, 11), bx(235, 14, 75, 28, '15分', C.blue, FILL.blue, 11), lb(160, 56, '60分 ÷ 4 ＝ 15分（quarter）', 11, C.ink, 'middle', true), bx(15, 74, 290, 30, "a quarter past nine ＝ 9:15", C.green, FILL.green, 12), bx(15, 110, 290, 30, "a quarter to nine ＝ 8:45", C.red, FILL.red, 12), ...cap('past は過ぎ、to は前', C.ink)),
  },
  {
    note: '15分以外でも「〜分前」は 分 ＋ to ＋ 時 で言えます。ten to eight は8時10分前なので7時50分、five to twelve は12時5分前なので11時55分です。to のあとの時は「次に来る時」です。',
    add: fresh(bx(15, 20, 290, 36, "ten to eight ＝ 7:50", C.red, FILL.red, 13), bx(15, 66, 290, 36, "five to twelve ＝ 11:55", C.red, FILL.red, 13), lb(160, 124, 'to のあとは 次の時（8時・12時）', 11, C.gray, 'middle', true), ...cap('分 ＋ to ＋ 時 ＝ 〜分前', C.red)),
  },
  {
    note: "午前・午後は、数字の時刻のうしろに a.m.（午前）、p.m.（午後）を付けます。eight thirty a.m. は午前8時30分、nine p.m. は午後9時。o'clock と a.m. は一緒に使いません。",
    add: fresh(bx(15, 14, 290, 34, 'eight thirty a.m. ＝ 午前8時30分', C.blue, FILL.blue, 12), bx(15, 56, 290, 34, 'nine p.m. ＝ 午後9時', C.main, FILL.warm, 12), bx(15, 98, 290, 34, "× eight o'clock a.m.", C.red, FILL.red, 12), ...cap("a.m./p.m. は o'clock と一緒に使わない", C.red, 11)),
  },
  {
    note: "まとめです。時刻は What time is it? とたずね、主語 it で答えます。ちょうどは o'clock、半分は half past、15分は a quarter、前は to、過ぎは past です。",
    add: sum3('たずねる：What time is it?（主語は it）', "ちょうど o'clock／半 half past", '15分 a quarter ／ 前 to ／ 過ぎ past', '時刻の型がそろった'),
  },
], '時刻の言い方');

// ───────── new20_j1_eigo_04 天気と気温を表す it の文 ─────────
const e04: DiagramFigure = show([
  {
    note: '「今日は晴れだ」を英語にします。日本語には主語がなくても言えますが、英語は It\'s sunny today. のように、主語 it を立てます。天気の文は、いつも It で始めます。',
    add: [bx(15, 20, 290, 36, '日本語：今日は 晴れだ。', C.gray, FILL.gray, 13), ar(160, 60, 160, 80, C.main), bx(15, 84, 290, 40, "English: It's sunny today.", C.green, FILL.green, 14), ...cap('天気の文の主語は いつも it')],
  },
  {
    note: '❓なぜ、天気の文には it が要るのでしょう。→ 英語の文には必ず主語が必要だからです。天気の話には「だれが・何が」がないので、形だけの主語 it を立てます。この it は前の文の何かを指しているわけではなく、「それ」とは訳しません。',
    add: fresh(bx(20, 24, 80, 40, 'It', C.red, FILL.red, 16), bx(110, 24, 80, 40, 'is', C.gray, FILL.gray, 16), bx(200, 24, 100, 40, 'sunny.', C.green, FILL.green, 16), lb(60, 84, '形だけの主語', 11, C.red, 'middle', true), lb(250, 84, '天気を表す形容詞', 11, C.green, 'middle', true), lb(160, 118, 'it は「それ」と訳さない', 12, C.ink, 'middle', true), ...cap('It is ＋ 天気の形容詞', C.main)),
  },
  {
    note: '天気を表す語は、どれも形容詞です。sunny（晴れの）、rainy（雨の）、cloudy（くもりの）、snowy（雪の）、windy（風が強い）。It\'s のあとに置けば天気の文ができあがります。',
    add: fresh(bx(10, 14, 148, 30, "It's sunny.（晴れ）", C.main, FILL.yellow, 12), bx(162, 14, 148, 30, "It's rainy.（雨）", C.blue, FILL.blue, 12), bx(10, 54, 148, 30, "It's cloudy.（くもり）", C.gray, FILL.gray, 12), bx(162, 54, 148, 30, "It's snowy.（雪）", C.blue, FILL.blue, 12), bx(10, 94, 300, 30, "It's windy.（風が強い）", C.green, FILL.green, 12), ...cap('どれも It\'s ＋ 形容詞', C.main)),
  },
  {
    note: '❓「今、雨が降っている」はどう言うのでしょう。→ rain（雨が降る）と snow（雪が降る）は動詞としても使えるので、進行形にできます。It\'s raining now.（今、雨が降っている）。It was snowing when I woke up.（起きたとき雪が降っていた）。',
    add: fresh(bx(15, 14, 290, 34, "It's raining now.（今、雨が降っている）", C.blue, FILL.blue, 12), bx(15, 56, 290, 34, "It was snowing when I woke up.", C.blue, FILL.blue, 12), lb(160, 106, 'rain・snow は動詞 → ing にできる', 11, C.ink, 'middle', true), bx(40, 116, 240, 26, "× It's sunnying.（sunny は形容詞）", C.red, FILL.red, 11), ...cap('動詞の rain・snow だけ 進行形')),
  },
  {
    note: '天気のたずね方は2通りです。How\'s the weather today?（今日の天気はどうですか）と、What\'s the weather like in Osaka?（大阪の天気はどんな感じですか）。答えは It\'s sunny and warm. のように it で答えます。',
    add: fresh(bx(10, 14, 300, 32, "How's the weather today?", C.blue, FILL.blue, 13), bx(10, 54, 300, 32, "What's the weather like in Osaka?", C.blue, FILL.blue, 12), ar(160, 90, 160, 104, C.main), bx(10, 106, 300, 32, "It's sunny and warm.", C.green, FILL.green, 13), ...cap('たずねる文も 答えの文も it')),
  },
  {
    note: '❓「天気」と「気温」は同じものでしょうか。→ ちがいます。sunny や rainy は空のようす（天気）。hot（暑い）、cold（寒い）、warm（暖かい）、cool（涼しい）は、体で感じる温度（気温）です。',
    add: fresh(bx(10, 14, 148, 28, '天気（空のようす）', C.blue, FILL.blue, 12), bx(162, 14, 148, 28, '気温（体で感じる温度）', C.red, FILL.red, 11), lb(84, 66, 'sunny / rainy', 12, C.ink, 'middle', true), lb(84, 86, 'cloudy / snowy', 12, C.ink, 'middle', true), lb(236, 66, 'hot / cold', 12, C.ink, 'middle', true), lb(236, 86, 'warm / cool', 12, C.ink, 'middle', true), bx(30, 104, 260, 32, "It's hot and sunny today.", C.green, FILL.green, 13), ...cap('and でつなげば 1文で言える', C.green)),
  },
  {
    note: '気温を数字で言うときは It\'s ＋ 数字 ＋ degrees です。It\'s 30 degrees today.（今日は30度だ）。氷点下なら It\'s below zero.。日本ではふつう Celsius（摂氏〈せっし〉）を使います。',
    add: fresh(bx(15, 14, 290, 34, "It's 30 degrees today.（30度）", C.red, FILL.red, 13), bx(15, 56, 290, 34, "It's below zero this morning.", C.blue, FILL.blue, 12), lb(160, 108, '単位は Celsius（日本）／Fahrenheit', 11, C.gray, 'middle'), ...cap('数字のときは degrees')),
  },
  {
    note: '❓気温をたずねるとき、What\'s the weather? でよいでしょうか。→ よくありません。気温は temperature（気温）という別の語でたずねます。What\'s the temperature there? に、It\'s about 15 degrees. と答えます。',
    add: fresh(bx(10, 14, 300, 30, "A: What's the temperature there?", C.blue, FILL.blue, 12), bx(10, 52, 300, 30, "B: It's about 15 degrees.", C.green, FILL.green, 12), bx(10, 94, 300, 30, "× What's the weather?（空のようすを聞く）", C.red, FILL.red, 11), ...cap('気温は temperature でたずねる', C.red)),
  },
  {
    note: 'まとめです。天気の文の主語は it、あとに sunny や rainy などの形容詞を置きます。気温は degrees か hot・cold で言い、気温をたずねるときは temperature を使います。',
    add: sum3('天気：It\'s ＋ sunny／rainy／cloudy…', '気温：It\'s 30 degrees／hot／cold', 'たずね：weather と temperature は別', '主語 it を忘れない'),
  },
], '天気・気温の it の文');

// ───────── new20_j1_eigo_05 数字の読み方①：基数と値段の言い方 ─────────
const e05: DiagramFigure = show([
  {
    note: '13（thirteen）と30（thirty）、14（fourteen）と40（forty）。つづりも音もよく似ているのに、意味は大きくちがいます。買い物や日付でまちがえると困るので、区別のしかたを根っこから整理します。',
    add: [bx(15, 20, 130, 40, '13 thirteen', C.blue, FILL.blue, 13), bx(175, 20, 130, 40, '30 thirty', C.red, FILL.red, 13), bx(15, 74, 130, 40, '14 fourteen', C.blue, FILL.blue, 13), bx(175, 74, 130, 40, '40 forty', C.red, FILL.red, 13), lb(160, 44, '↔', 16, C.gray, 'middle', true), lb(160, 98, '↔', 16, C.gray, 'middle', true), ...cap('よく似ているが 10倍ちがう')],
  },
  {
    note: '❓では、何で区別するのでしょう。→ 強く読む位置です。13〜19の -teen の仲間は、うしろの teen を強く長く読みます（thir-TEEN）。20・30…の -ty の仲間は、前を強く短く読みます（THIR-ty）。',
    add: fresh(bx(15, 14, 290, 44, 'thir-TEEN（13）　うしろを強く', C.blue, FILL.blue, 14), bx(15, 68, 290, 44, 'THIR-ty（30）　まえを強く', C.red, FILL.red, 14), lb(160, 128, '耳で聞き分けるときも アクセントが手がかり', 11, C.gray, 'middle'), ...cap('teen は うしろ、ty は まえ')),
  },
  {
    note: '13〜19は thirteen、fourteen、fifteen、sixteen、seventeen、eighteen、nineteen。20・30…は twenty、thirty、forty、fifty、sixty、seventy、eighty、ninety。40は fourty ではなく forty で、u が入りません。',
    add: fresh(lb(80, 10, '-teen（13〜19）', 11, C.blue, 'middle', true), lb(240, 10, '-ty（20〜90）', 11, C.red, 'middle', true), lb(80, 30, '13 thirteen', 10), lb(80, 46, '14 fourteen', 10), lb(80, 62, '15 fifteen', 10), lb(80, 78, '16 sixteen', 10), lb(80, 94, '17 seventeen', 10), lb(80, 110, '18 eighteen', 10), lb(80, 126, '19 nineteen', 10), lb(240, 28, '20 twenty', 10), lb(240, 42, '30 thirty', 10), lb(240, 56, '40 forty（fourty ×）', 10, C.red, 'middle', true), lb(240, 70, '50 fifty', 10), lb(240, 84, '60 sixty', 10), lb(240, 98, '70 seventy', 10), lb(240, 112, '80 eighty', 10), lb(240, 126, '90 ninety', 10), ...cap('40 は forty（u なし）', C.red)),
  },
  {
    note: '❓21以降はどう作るのでしょう。→ 十の位の -ty の数と、一の位の1〜9を、ハイフン（-）でつなぎます。twenty-one（21）、thirty-five（35）、forty-nine（49）、ninety-nine（99）。',
    add: fresh(bx(10, 16, 90, 32, 'twenty', C.red, FILL.red, 13), lb(110, 32, '＋', 16), bx(120, 16, 60, 32, 'one', C.blue, FILL.blue, 13), lb(194, 32, '→', 16), bx(210, 16, 100, 32, 'twenty-one', C.green, FILL.green, 12), lb(160, 78, 'thirty-five（35）　forty-nine（49）', 12, C.ink, 'middle', true), lb(160, 102, 'ninety-nine（99）', 12, C.ink, 'middle', true), ...cap('十の位 － 一の位 とつなぐ', C.green)),
  },
  {
    note: '❓100や1000はどう言うのでしょう。→ one hundred（100）、three hundred（300）、two thousand（2000）。数字が前に付くときは hundred・thousand に s を付けません。数字がすでに「いくつ分か」を表しているからです。',
    add: fresh(bx(15, 14, 290, 34, '○ three hundred（300）', C.green, FILL.green, 13), bx(15, 56, 290, 34, '○ two thousand（2000）', C.green, FILL.green, 13), bx(15, 98, 290, 34, '× three hundreds', C.red, FILL.red, 13), ...cap('数字 ＋ hundred／thousand は s なし', C.red, 11)),
  },
  {
    note: '端数が続くときは、百のあとに and を入れて言います。three hundred and fifty は350、five hundred and twenty-one は521。アメリカ式では and を省くこともあります。',
    add: fresh(bx(15, 20, 290, 36, '350 → three hundred and fifty', C.blue, FILL.blue, 13), bx(15, 66, 290, 36, '521 → five hundred and twenty-one', C.blue, FILL.blue, 12), lb(160, 122, 'and は アメリカ式では省くこともある', 11, C.gray), ...cap('百 ＋ and ＋ 端数', C.blue)),
  },
  {
    note: '❓では、hundreds と s を付けるのは、いつでしょう。→ 「何百もの」と、具体的な数ではなく「たくさん」を言うときです。hundreds of people（何百人もの人々）、thousands of stars（何千もの星）。このときは複数形に of が続きます。',
    add: fresh(bx(15, 14, 290, 34, 'hundreds of people ＝ 何百人もの人々', C.main, FILL.warm, 12), bx(15, 56, 290, 34, 'thousands of stars ＝ 何千もの星', C.main, FILL.warm, 12), lb(160, 112, '数字がない →「たくさん」→ 複数形 ＋ of', 12, C.ink, 'middle', true), ...cap('数字なし：hundreds of 〜')),
  },
  {
    note: '値段のたずね方です。How much is this bag?（このかばんはいくらですか）に、It\'s 3,000 yen. と答えます。1つのものは is、答えの主語は it です。',
    add: fresh(bx(15, 14, 290, 34, 'How much is this bag?', C.blue, FILL.blue, 13), ar(160, 52, 160, 68, C.main), bx(15, 72, 290, 34, "It's 3,000 yen.", C.green, FILL.green, 13), ...cap('1つのもの → is ／ it')),
  },
  {
    note: '❓靴の値段は is でしょうか。→ shoes は形が複数扱い（左右で1足）の名詞なので are です。How much are these shoes? に They\'re 8,000 yen. と答えます。glasses なども同じです。',
    add: fresh(bx(15, 14, 290, 34, 'How much are these shoes?', C.blue, FILL.blue, 13), ar(160, 52, 160, 68, C.main), bx(15, 72, 290, 34, "They're 8,000 yen.", C.green, FILL.green, 13), lb(160, 124, 'shoes・glasses は 複数あつかい → are／they', 11, C.ink, 'middle', true), ...cap('複数あつかい → are ／ they', C.green)),
  },
  {
    note: 'まとめです。-teen はうしろを強く、-ty は前を強く読みます。21以降はハイフン、数字付きの hundred は s なし、「何百もの」は hundreds of。値段は How much is／are 〜? です。',
    add: sum3('teen は うしろ強く、ty は まえ強く', '21以降はハイフン／three hundred は s なし', '値段：How much is／are 〜?', '数字の型がそろった'),
  },
], '数字の読み方：基数と値段');

// ───────── new20_j1_eigo_06 数字の読み方②：序数の形とつづり ─────────
const e06: DiagramFigure = show([
  {
    note: '「1番目」「2番目」を表す語を序数（じょすう）といいます。日付、階数、順位でよく使います。まず、1〜3番目だけは形が大きく変わります。one → first、two → second、three → third です。',
    add: [bx(10, 20, 90, 34, 'one', C.gray, FILL.gray, 13), ar(104, 37, 130, 37, C.main), bx(134, 20, 120, 34, 'first（1st）', C.red, FILL.red, 12), bx(10, 62, 90, 34, 'two', C.gray, FILL.gray, 13), ar(104, 79, 130, 79, C.main), bx(134, 62, 120, 34, 'second（2nd）', C.red, FILL.red, 12), bx(10, 104, 90, 34, 'three', C.gray, FILL.gray, 13), ar(104, 121, 130, 121, C.main), bx(134, 104, 120, 34, 'third（3rd）', C.red, FILL.red, 12), ...cap('1〜3番目は 特別な形')],
  },
  {
    note: '❓なぜ、first を one にくっつけて作れないのでしょうか。→ first・second・third は、one・two・three とは形がまったくちがうからです。作り方の決まりがないので、この3つは丸ごと覚えるしかありません。',
    add: fresh(bx(15, 16, 130, 36, 'one ＋ th？', C.gray, FILL.gray, 14), lb(160, 34, '×', 20, C.red, 'middle', true), bx(175, 16, 130, 36, 'oneth ✕', C.red, FILL.red, 14), lb(160, 82, 'first・second・third は別の語', 12, C.ink, 'middle', true), lb(160, 106, '決まりがない → 丸ごと覚える', 12, C.red, 'middle', true), ...cap('3つだけ 丸暗記', C.red)),
  },
  {
    note: '❓では4番目からは、どう作るのでしょう。→ 基数のうしろに th を付けるだけです。four → fourth、six → sixth、seven → seventh、ten → tenth、thirteen → thirteenth。',
    add: fresh(bx(15, 12, 135, 28, 'four → fourth', C.blue, FILL.blue, 12), bx(170, 12, 135, 28, 'six → sixth', C.blue, FILL.blue, 12), bx(15, 48, 135, 28, 'seven → seventh', C.blue, FILL.blue, 12), bx(170, 48, 135, 28, 'ten → tenth', C.blue, FILL.blue, 12), bx(15, 84, 290, 28, 'thirteen → thirteenth', C.blue, FILL.blue, 12), ...cap('4番目から：基数 ＋ th', C.blue)),
  },
  {
    note: '❓ただし、th を付けるだけではつづりが変わる語が4つあります。five は ve が f に変わって fifth、twelve も ve が f に変わって twelfth。eight は t を重ねずに eighth。nine は e が落ちて ninth です。',
    add: fresh(bx(10, 12, 140, 28, 'five → fifth', C.red, FILL.red, 12), bx(170, 12, 140, 28, 'twelve → twelfth', C.red, FILL.red, 12), lb(80, 52, 've が f に', 11, C.red, 'middle', true), lb(240, 52, 've が f に', 11, C.red, 'middle', true), bx(10, 70, 140, 28, 'eight → eighth', C.main, FILL.warm, 12), bx(170, 70, 140, 28, 'nine → ninth', C.main, FILL.warm, 12), lb(80, 110, 't は 1つだけ', 11, C.main, 'middle', true), lb(240, 110, 'e が落ちる', 11, C.main, 'middle', true), ...cap('例外は 5・8・9・12', C.red)),
  },
  {
    note: '❓20番目、30番目のように -ty で終わる数は、どうするのでしょう。→ y を i に変えて -eth を付けます。twenty → twentieth、thirty → thirtieth、forty → fortieth、fifty → fiftieth。happy → happier と同じ、y を i にするきまりです。',
    add: fresh(bx(10, 14, 145, 30, 'twenty → twentieth', C.green, FILL.green, 12), bx(165, 14, 145, 30, 'thirty → thirtieth', C.green, FILL.green, 12), bx(10, 54, 145, 30, 'forty → fortieth', C.green, FILL.green, 12), bx(165, 54, 145, 30, 'fifty → fiftieth', C.green, FILL.green, 12), lb(160, 104, 'y を i に変えて ＋ eth', 13, C.ink, 'middle', true), ...cap('-ty は y → i ＋ eth', C.green)),
  },
  {
    note: '❓21番目などの2語の数は、どこを序数にするのでしょう。→ 最後の一の位だけです。21番目は twenty-first。twenty はそのまま、first だけが序数の形です。32番目は thirty-second、43番目は forty-third、99番目は ninety-ninth。',
    add: fresh(bx(10, 14, 120, 30, 'twenty', C.gray, FILL.gray, 13), lb(138, 29, '-', 16), bx(148, 14, 100, 30, 'first', C.red, FILL.red, 13), lb(160, 62, '○ twenty-first（21番目）', 12, C.green, 'middle', true), lb(160, 82, '× twentieth-first', 12, C.red, 'middle', true), lb(160, 106, 'thirty-second（32）　forty-third（43）', 11, C.ink, 'middle', true), lb(160, 124, 'ninety-ninth（99）', 11, C.ink, 'middle', true), ...cap('十の位はそのまま、一の位だけ序数', C.main, 11)),
  },
  {
    note: '数字で書くときの略し方です。1・2・3番目は 1st・2nd・3rd と、st・nd・rd を付けます。4番目からは th です。21番目は 21st、32番目は 32nd、43番目は 43rd と、一の位で決まります。',
    add: fresh(bx(10, 16, 90, 34, '1st', C.red, FILL.red, 14), bx(115, 16, 90, 34, '2nd', C.red, FILL.red, 14), bx(220, 16, 90, 34, '3rd', C.red, FILL.red, 14), bx(10, 62, 90, 34, '4th', C.blue, FILL.blue, 14), bx(115, 62, 90, 34, '5th', C.blue, FILL.blue, 14), bx(220, 62, 90, 34, '9th', C.blue, FILL.blue, 14), lb(160, 118, '21st　32nd　43rd', 13, C.ink, 'middle', true), ...cap('1・2・3 だけ st／nd／rd')),
  },
  {
    note: '❓序数は、どんな場面で使うのでしょう。→ 日付（May 5th）、階数（the third floor）、順位（the first prize）、第何課（the fifth lesson）などです。順番を言いたいときは序数です。',
    add: fresh(bx(10, 14, 145, 30, 'May 5th（5月5日）', C.blue, FILL.blue, 12), bx(165, 14, 145, 30, 'the third floor', C.blue, FILL.blue, 12), bx(10, 54, 145, 30, 'the first prize', C.main, FILL.warm, 12), bx(165, 54, 145, 30, 'the fifth lesson', C.main, FILL.warm, 12), lb(160, 108, '日付・階・順位・課', 12, C.ink, 'middle', true), ...cap('「何番目」を言うとき序数')),
  },
  {
    note: '❓序数の前に the が付くのは、なぜでしょう。→ 序数は「決まった1つのもの」を指すことが多いからです。the first day of school（学校の初日）。ただし Ken finished first.（ケンは1着だった）のように、the を付けない場合もあります。',
    add: fresh(bx(15, 14, 290, 32, 'the first day of school', C.green, FILL.green, 13), bx(15, 54, 290, 32, 'Ken finished first.（the なし）', C.gray, FILL.gray, 12), bx(15, 94, 290, 32, 'my third time to visit Kyoto', C.green, FILL.green, 12), ...cap('決まった1つ → the が多い')),
  },
  {
    note: 'まとめです。1〜3番目は first・second・third を丸暗記。4番目からは th で、5・8・9・12は つづりが変わります。-ty は y を i にして eth、2語の数は最後だけ序数にします。',
    add: sum3('1〜3：first・second・third（丸暗記）', '4〜：th ／ 5・8・9・12 は変化', '-ty：ieth ／ 21番目：twenty-first', '序数がそろった'),
  },
], '序数の形とつづり');

// ───────── new20_j1_eigo_07 疑問詞 which ─────────
const e07: DiagramFigure = show([
  {
    note: '「コーヒーと紅茶、どちらがほしい？」と、決まった選択肢から選ばせるときは which を使います。Which do you want, coffee or tea?（どちらがほしいですか）。',
    add: [bx(15, 20, 290, 36, 'Which do you want, coffee or tea?', C.blue, FILL.blue, 13), bx(40, 74, 110, 34, 'coffee', C.main, FILL.warm, 13), bx(170, 74, 110, 34, 'tea', C.green, FILL.green, 13), lb(160, 126, '↑ 選択肢が目の前にある', 11, C.gray), ...cap('決まった中から「どれ・どちら」')],
  },
  {
    note: '❓what とは、どうちがうのでしょう。→ What do you want to drink? は選択肢を示さず、何と答えてもよい質問です。Which do you want, juice or water? は、示した2つから選ばせる質問です。',
    add: fresh(bx(10, 14, 145, 34, 'What …to drink?', C.red, FILL.red, 12), bx(165, 14, 145, 34, 'Which …, A or B?', C.blue, FILL.blue, 11), lb(82, 70, '答えは 自由（無数）', 11, C.red, 'middle', true), lb(238, 70, '答えは この2つから', 11, C.blue, 'middle', true), bx(40, 92, 85, 30, 'juice', C.blue, FILL.blue, 12), bx(195, 92, 85, 30, 'water', C.blue, FILL.blue, 12), ...cap('選択肢あり → which、なし → what', C.ink, 11)),
  },
  {
    note: '❓which は、1語だけで使えるのでしょうか。→ 使えます。which が「どれ・どちら」の意味の代名詞になり、あとに or で選択肢を並べます。Which is your bag, this one or that one?（このかばんとあのかばん、どちらがあなたのですか）。',
    add: fresh(bx(15, 14, 290, 34, 'Which is your bag,', C.blue, FILL.blue, 13), bx(40, 64, 100, 38, 'this one', C.main, FILL.warm, 12), lb(160, 83, 'or', 13, C.ink, 'middle', true), bx(180, 64, 100, 38, 'that one', C.main, FILL.warm, 12), lb(160, 126, 'このかばん？ あのかばん？', 11, C.gray), ...cap('Which ＋ be動詞 〜, A or B?')),
  },
  {
    note: '❓which のあとに名詞を置くとどうなるでしょう。→ 「どの〜」の意味になります。Which bag is yours?（どのかばんがあなたのですか）、Which train should I take?（どの電車に乗ればいいですか）。what ＋ 名詞と同じ形ですが、選択肢があるときは which を使います。',
    add: fresh(bx(15, 14, 290, 34, 'Which bag is yours?', C.blue, FILL.blue, 13), bx(15, 58, 290, 34, 'Which train should I take?', C.blue, FILL.blue, 13), lb(160, 112, 'which ＋ 名詞 ＝「どの〜」', 13, C.ink, 'middle', true), ...cap('which が名詞を説明する', C.blue)),
  },
  {
    note: '❓3つ以上の中から選ばせるときは、どう言うのでしょう。→ Which of the 〜? を使います。Which of the three bags is yours?（3つのかばんのうち、どれがあなたのですか）。of のあとには the、these、those ＋ 複数名詞が続きます。',
    add: fresh(bx(30, 14, 70, 40, 'bag', C.main, FILL.warm, 12), bx(125, 14, 70, 40, 'bag', C.main, FILL.warm, 12), bx(220, 14, 70, 40, 'bag', C.main, FILL.warm, 12), bx(15, 68, 290, 34, 'Which of the three bags is yours?', C.blue, FILL.blue, 12), lb(160, 122, 'of ＋ the／these／those ＋ 複数名詞', 11, C.ink, 'middle', true), ...cap('of のあとは 複数名詞', C.blue)),
  },
  {
    note: '答え方です。選んだものをそのまま言えば大丈夫です。Which do you like, this one or that one? — I like this one. Which of the three do you want? — I want the red one. one は、前に出た名詞（bag や pen）の代わりに使う語で、答えが短くなります。',
    add: fresh(bx(10, 12, 300, 30, 'Which do you like, this one or that one?', C.blue, FILL.blue, 11), bx(10, 48, 300, 28, '— I like this one.', C.green, FILL.green, 12), bx(10, 86, 300, 30, 'Which of the three do you want?', C.blue, FILL.blue, 12), bx(10, 122, 300, 26, '— I want the red one.', C.green, FILL.green, 12), cover(0, 150, 320, 90), lb(160, 190, 'one ＝ 前に出た名詞の代わり', 12, C.ink, 'middle', true)),
  },
  {
    note: '❓which を使うとき、気をつけることは何でしょう。→ 比べる相手をはっきりさせることです。選択肢を示さずに Which do you want? とだけ聞くと、相手は何から選べばよいのか迷います。A or B のように候補を示しましょう。',
    add: fresh(bx(15, 14, 290, 34, '△ Which do you want?（候補なし）', C.red, FILL.red, 12), bx(15, 62, 290, 34, '○ Which do you want, red or blue?', C.green, FILL.green, 12), lb(160, 118, '候補を示す', 12, C.ink, 'middle', true), ...cap('which には 比べる相手が必要', C.red)),
  },
  {
    note: 'まとめです。選択肢が決まっているときは which、自由に答えさせるときは what。which ＋ 名詞で「どの〜」、Which of the 〜 で「〜のうちのどれ」。答えは選んだものを言い、候補（A or B）を示してたずねます。',
    add: sum3('選択肢あり → which ／ なし → what', 'Which ＋ 名詞（どの〜）／ Which of the 〜', '答えは選んだものを言う（one で短く）', 'which の使い分けがわかった'),
  },
], '疑問詞 which');

// ───────── new20_j1_eigo_08 疑問詞 whose ─────────
const e08: DiagramFigure = show([
  {
    note: '落とし物のかさを見つけて「これはだれのかさ？」と聞きたいとき、英語では whose（だれの）を使います。Whose umbrella is this?（これはだれのかさですか）。',
    add: [bx(15, 20, 290, 36, 'Whose umbrella is this?', C.blue, FILL.blue, 13), ar(160, 60, 160, 78, C.main), bx(15, 82, 290, 36, "It's mine.（私のです）", C.green, FILL.green, 13), ...cap('whose ＝「だれの」')],
  },
  {
    note: '❓whose は、どこに置くのでしょう。→ 名詞の前です。Whose ＋ 名詞 ＋ be動詞 ＋ 主語? の順になります。Whose bag is this? に、It\'s Ken\'s.（ケンのです）と答えます。',
    add: fresh(bx(10, 20, 80, 38, 'Whose', C.red, FILL.red, 13), bx(98, 20, 60, 38, 'bag', C.main, FILL.warm, 13), bx(166, 20, 50, 38, 'is', C.gray, FILL.gray, 13), bx(224, 20, 86, 38, 'this?', C.blue, FILL.blue, 13), lb(50, 78, 'だれの', 11, C.red, 'middle', true), lb(128, 78, '名詞', 11, C.main, 'middle', true), bx(40, 98, 240, 34, "It's Ken's.（ケンのです）", C.green, FILL.green, 13), ...cap('Whose ＋ 名詞 ＋ is／are 〜?')),
  },
  {
    note: '❓名詞が複数のときは、どうなるでしょう。→ ふつうの be動詞の疑問文と同じで、is が are に変わります。Whose books are these?（これらはだれの本ですか）— They\'re Emi\'s.（エミのです）。',
    add: fresh(bx(15, 16, 290, 34, 'Whose books are these?', C.blue, FILL.blue, 13), bx(15, 62, 290, 34, "They're Emi's.", C.green, FILL.green, 13), lb(160, 116, 'books は複数 → are ／ they', 12, C.ink, 'middle', true), ...cap('単数 is ／ 複数 are')),
  },
  {
    note: '❓なにを指しているかが明らかなときは、どうするのでしょう。→ whose のあとの名詞は省けます。Whose is this?（これはだれのですか）。ペンを見つけて「だれのだろう」と言うときは Whose is it? です。このとき whose は「だれのもの」という意味になります。',
    add: fresh(bx(15, 14, 290, 34, 'A: I found a pen.', C.gray, FILL.gray, 12), bx(15, 56, 290, 34, 'B: Whose is it?（だれのもの？）', C.blue, FILL.blue, 12), lb(160, 112, '名詞（pen）は 言わなくても通じる', 11, C.ink, 'middle', true), ...cap('名詞を省くと「だれのもの」', C.blue)),
  },
  {
    note: '答え方は2通りです。①人名 ＋ \'s（Ken\'s）、②所有代名詞（mine、yours、his、hers、ours、theirs）。Whose pen is this? — It\'s hers.（彼女のです）。whose の疑問文には Yes や No では答えず、持ち主を答えます。',
    add: fresh(bx(10, 14, 145, 34, "① 人名＋'s：Ken's", C.main, FILL.warm, 12), bx(165, 14, 145, 34, '② mine／yours／his', C.main, FILL.warm, 12), lb(160, 68, 'hers ／ ours ／ theirs', 12, C.ink, 'middle', true), bx(15, 84, 290, 32, "Whose pen is this? — It's hers.", C.green, FILL.green, 12), ...cap('Yes／No ではなく 持ち主を答える', C.red, 11)),
  },
  {
    note: '❓whose と who\'s は、どうちがうのでしょう。→ 読み方（フーズ）は同じですが、別の語です。whose は「だれの」で、あとに名詞が続きます。who\'s は who is または who has の短縮形で、あとに名詞は続きません。',
    add: fresh(bx(10, 12, 145, 30, 'whose ＝ だれの', C.red, FILL.red, 13), bx(165, 12, 145, 30, "who's ＝ who is／has", C.blue, FILL.blue, 12), bx(10, 54, 145, 32, 'Whose phone is this?', C.red, FILL.red, 11), bx(165, 54, 145, 32, "Who's that boy?", C.blue, FILL.blue, 11), lb(82, 104, 'あとに名詞が続く', 11, C.red, 'middle', true), lb(238, 104, 'be動詞や過去分詞が続く', 11, C.blue, 'middle', true), ...cap('読み方は同じ、意味は別')),
  },
  {
    note: '❓どう見分ければよいでしょう。→ 省略をもとに戻して、意味が通るかを確かめます。Who\'s that boy? は Who is that boy? となり意味が通るので who\'s。Whose phone is this? を Who is phone is this? とすると意味が通らないので、whose が正しいのです。',
    add: fresh(bx(10, 14, 300, 32, "Who's that boy? → Who is that boy?", C.green, FILL.green, 11), lb(160, 60, '意味が通る → who\'s ○', 12, C.green, 'middle', true), bx(10, 76, 300, 32, 'Whose phone … → Who is phone …?', C.red, FILL.red, 11), lb(160, 122, '意味が通らない → whose ○', 12, C.red, 'middle', true), ...cap('もとに戻して、意味が通るかを確かめる', C.ink, 11)),
  },
  {
    note: '会話で確かめましょう。Whose turn is it?（だれの番ですか）の whose は、あとに名詞 turn が続くので「だれの」。Who\'s coming to the party?（だれがパーティーに来ますか）の who\'s は Who is の短縮形です。',
    add: fresh(bx(10, 16, 300, 34, 'Whose turn is it?', C.red, FILL.red, 13), lb(160, 66, '名詞 turn が続く →「だれの」', 11, C.red, 'middle', true), bx(10, 84, 300, 34, "Who's coming to the party?", C.blue, FILL.blue, 13), lb(160, 134, 'Who is coming →「だれが」', 11, C.blue, 'middle', true), ...cap('意味で判断する')),
  },
  {
    note: 'まとめです。whose は持ち主をたずねる「だれの」で、あとに名詞が続くか単独で使います。答えは Ken\'s や mine のように持ち主を言います。who\'s は who is／who has の短縮形で、名詞は続きません。',
    add: sum3('whose ＋ 名詞（または単独）＝ だれの', "答え：Ken's／mine（Yes・No は使わない）", "who's ＝ who is／who has（名詞は続かない）", '持ち主なら whose'),
  },
], '疑問詞 whose');

// ───────── new20_j1_eigo_09 疑問詞の総整理 ─────────
const e09: DiagramFigure = show([
  {
    note: 'who（だれ）、what（何）、which（どれ）、whose（だれの）。日本語にすると似た響きなので、英作文で迷いやすい4つです。この4つを見分ける軸を、根っこから整理します。',
    add: [bx(10, 16, 145, 34, 'who ＝ だれ', C.blue, FILL.blue, 13), bx(165, 16, 145, 34, 'what ＝ 何', C.red, FILL.red, 13), bx(10, 62, 145, 34, 'which ＝ どれ', C.green, FILL.green, 13), bx(165, 62, 145, 34, 'whose ＝ だれの', C.purple, FILL.purple, 13), lb(160, 122, 'どれを選べばよい？', 12, C.ink, 'middle', true), ...cap('似ている4つを見分ける')],
  },
  {
    note: '❓何で見分けるのでしょう。→ 3つの軸です。①人か、物か。②選択肢があるか、ないか。③持ち主をたずねているか。この3つを順に考えれば、4つのうちの1つに決まります。',
    add: fresh(bx(15, 14, 290, 34, '① 人か 物か', C.blue, FILL.blue, 13), bx(15, 56, 290, 34, '② 選択肢が あるか ないか', C.green, FILL.green, 13), bx(15, 98, 290, 34, '③ 持ち主を たずねているか', C.purple, FILL.purple, 13), ...cap('3つの軸で整理する')),
  },
  {
    note: 'who は人をたずねる「だれ」です。Who is that man?（あの男の人はだれですか）。主語をたずねるときは語順がそのままで、Who broke the window?（だれが窓を割りましたか）となります。who は人だけで、物には使いません。',
    add: fresh(bx(15, 14, 290, 34, 'Who is that man?', C.blue, FILL.blue, 13), bx(15, 56, 290, 34, 'Who broke the window?', C.blue, FILL.blue, 13), lb(160, 110, '主語をたずねる → 語順はそのまま', 12, C.ink, 'middle', true), ...cap('who ＝ 人だけ', C.blue)),
  },
  {
    note: 'what は、物やことがらを自由にたずねる「何」です。選択肢を示しません。What is this?（これは何ですか）。名詞の前に置くと「何の〜」になり、What sport do you like?（何のスポーツが好きですか）となります。',
    add: fresh(bx(15, 14, 290, 34, 'What is this?', C.red, FILL.red, 13), bx(15, 56, 290, 34, 'What sport do you like?', C.red, FILL.red, 13), lb(160, 110, '答えの範囲は 決まっていない', 12, C.ink, 'middle', true), ...cap('what ＝ 自由な答え', C.red)),
  },
  {
    note: 'which は、限られた選択肢から選ぶ「どれ・どちら」です。Which do you like, dogs or cats?（犬とねこ、どちらが好きですか）。Which bag is yours?（どのかばんがあなたのですか）。候補が頭にある、または or で示されているときに使います。',
    add: fresh(bx(15, 14, 290, 34, 'Which do you like, dogs or cats?', C.green, FILL.green, 12), bx(15, 56, 290, 34, 'Which bag is yours?', C.green, FILL.green, 13), lb(160, 110, '候補が決まっている', 12, C.ink, 'middle', true), ...cap('which ＝ 限られた中から', C.green)),
  },
  {
    note: 'whose は、持ち主をたずねる「だれの」です。Whose pen is this?（これはだれのペンですか）、Whose is this?（これはだれのですか）。持ち主という所有の関係をたずねるのは whose だけです。',
    add: fresh(bx(15, 14, 290, 34, 'Whose pen is this?', C.purple, FILL.purple, 13), bx(15, 56, 290, 34, 'Whose is this?', C.purple, FILL.purple, 13), lb(160, 110, '所有（持ち主）をたずねる', 12, C.ink, 'middle', true), ...cap('whose ＝ 持ち主', C.purple)),
  },
  {
    note: '❓英作文では、どの順に考えればよいでしょう。→ ①「だれの」と持ち主を聞くなら whose。②人そのものなら who。③選択肢があるなら which。④それ以外の自由な答えなら what。この順にチェックします。',
    add: fresh(bx(15, 8, 290, 28, '① 持ち主を聞く？ → whose', C.purple, FILL.purple, 12), bx(15, 40, 290, 28, '② 人そのもの？ → who', C.blue, FILL.blue, 12), bx(15, 72, 290, 28, '③ 選択肢がある？ → which', C.green, FILL.green, 12), bx(15, 104, 290, 28, '④ それ以外 → what', C.red, FILL.red, 12), ...cap('この順に 確かめる')),
  },
  {
    note: '練習です。「これはだれのくつですか」は持ち主なので Whose shoes are these?。「あなたのお姉さんはだれですか」は人なので Who is your sister?。「テニスとサッカー、どちらが好き」は2択なので Which do you like, tennis or soccer?。「休みの日は何をしますか」は自由な答えなので What do you do on your day off?。',
    add: fresh(bx(5, 8, 310, 28, 'Whose shoes are these?（持ち主）', C.purple, FILL.purple, 11), bx(5, 40, 310, 28, 'Who is your sister?（人）', C.blue, FILL.blue, 11), bx(5, 72, 310, 28, 'Which do you like, tennis or soccer?', C.green, FILL.green, 11), bx(5, 104, 310, 28, 'What do you do on your day off?', C.red, FILL.red, 11), ...cap('日本語から、疑問詞を選ぶ')),
  },
  {
    note: '❓4つに共通する決まりは何でしょう。→ ①疑問詞は文の先頭に置く。②主語をたずねる場合を除いて、疑問詞のあとは疑問文の語順。③Yes や No では答えず、聞かれた中身をそのまま答える。',
    add: fresh(bx(15, 14, 290, 34, '① 疑問詞は 文の先頭', C.blue, FILL.blue, 13), bx(15, 56, 290, 34, '② あとは 疑問文の語順', C.main, FILL.warm, 13), bx(15, 98, 290, 34, '③ Yes／No では答えない', C.red, FILL.red, 13), ...cap('どの疑問詞も同じ決まり', C.red)),
  },
  {
    note: 'まとめです。who は人、what は自由に答えさせる、which は選択肢から、whose は持ち主。名詞が付いているかではなく、「何をたずねているか」の意味で選びます。',
    add: sum3('who＝人 ／ what＝自由な答え', 'which＝選択肢から ／ whose＝持ち主', '名詞の有無ではなく、意味で選ぶ', '4つの疑問詞を使い分けられる'),
  },
], '疑問詞の総整理');

// ───────── new20_j1_eigo_10 場所の前置詞①：in・on・at ─────────
const e10: DiagramFigure = show([
  {
    note: '「箱の中」「机の上」「ドアのところ」。日本語ではどれも「〜に」ですが、英語は場所のとらえ方で前置詞を選びます。「空間」は in、「面」は on、「点」は at。この3つのイメージで根っこから整理します。',
    add: [bx(8, 30, 92, 64, undefined, C.gray, FILL.gray), ci(54, 62, 6, undefined, C.red, FILL.red), lb(54, 14, 'in the box', 11, C.blue, 'middle', true), ln(112, 90, 208, 90, C.gray, false, 3), bx(140, 66, 44, 24, 'book', C.main, FILL.warm, 10), lb(160, 14, 'on the desk', 11, C.blue, 'middle', true), ci(264, 62, 6, undefined, C.red, FILL.red), lb(264, 14, 'at the door', 11, C.blue, 'middle', true), lb(54, 112, '空間', 12, C.ink, 'middle', true), lb(160, 112, '面', 12, C.ink, 'middle', true), lb(264, 112, '点', 12, C.ink, 'middle', true), ...cap('空間は in、面は on、点は at')],
  },
  {
    note: '❓in は、どんなときに使うのでしょう。→ 周りを何かで囲まれている場所です。箱の中のペン（There is a pen in the box.）、台所にいる彼女（She is in the kitchen.）、かばんの中のかぎ（My key is in my bag.）。外側の枠があり、その中に入っている、と想像します。',
    add: fresh(bx(30, 14, 120, 76, undefined, C.gray, FILL.gray), ci(90, 52, 6, undefined, C.red, FILL.red), lb(90, 106, 'a pen in the box', 11, C.ink, 'middle', true), bx(180, 14, 120, 76, undefined, C.gray, FILL.gray), ci(240, 52, 6, undefined, C.red, FILL.red), lb(240, 106, 'in the kitchen', 11, C.ink, 'middle', true), ...cap('囲まれている → in', C.blue)),
  },
  {
    note: '❓広い国や都市にも in を使うのは、なぜでしょう。→ 広さは関係ないからです。国も市も、境界線で囲まれた空間として意識します。I live in Osaka. Tokyo is in Japan. 小さな箱にも大きな国にも、同じ in を使います。',
    add: fresh(bx(10, 6, 300, 140, undefined, C.gray, FILL.gray), lb(18, 18, 'Japan', 11, C.ink, 'start', true), bx(34, 30, 252, 106, undefined, C.blue, FILL.blue), lb(42, 42, 'Osaka', 11, C.ink, 'start', true), bx(60, 54, 200, 70, undefined, C.main, FILL.warm), lb(68, 66, 'this house', 11, C.ink, 'start', true), ci(180, 98, 6, undefined, C.red, FILL.red), ...cap('広さに関係なく 囲まれていれば in', C.blue, 11)),
  },
  {
    note: '次は on です。on は表面にくっついていることを表します。机の上の本（There is a book on the desk.）のように上に乗っているときも、壁の絵（There is a picture on the wall.）のように横向きの面にくっついているときも on です。',
    add: fresh(ln(20, 90, 140, 90, C.gray, false, 3), bx(50, 66, 50, 24, 'book', C.main, FILL.warm, 11), lb(80, 112, 'on the desk', 11, C.ink, 'middle', true), ln(220, 12, 220, 124, C.gray, false, 3), bx(224, 44, 44, 36, 'picture', C.main, FILL.warm, 10), lb(254, 112, 'on the wall', 11, C.ink, 'middle', true), ...cap('面にくっついている → on', C.blue)),
  },
  {
    note: '❓壁の絵は「壁の中」ではないのですか。→ ちがいます。絵は壁の中に入っているのではなく、壁の面にくっついているだけです。だから in ではなく on になります。芝生の上に座るのも、Don\'t sit on the grass. と on です。',
    add: fresh(bx(15, 16, 290, 34, '× a picture in the wall', C.red, FILL.red, 13), bx(15, 60, 290, 34, '○ a picture on the wall', C.green, FILL.green, 13), lb(160, 116, '中に入っていない → 面にくっつく', 12, C.ink, 'middle', true), ...cap('中ではなく 表面 → on', C.green)),
  },
  {
    note: '次は at です。at は場所を広がりではなく、地図の上の1つの点としてとらえます。Let\'s meet at the station.（駅で会いましょう）、Turn left at the corner.（角を左に曲がって）、I\'ll wait for you at the door.（ドアのところで待っています）。',
    add: fresh(ln(20, 74, 300, 74, C.gray, false, 2), ci(160, 74, 7, undefined, C.red, FILL.red), lb(160, 52, 'the station', 12, C.red, 'middle', true), lb(160, 98, 'Let\'s meet at the station.', 11, C.ink, 'middle', true), lb(160, 120, 'at the corner ／ at the door', 11, C.ink, 'middle', true), ...cap('1つの点 → at', C.red)),
  },
  {
    note: '❓school や home に at を使うのは、なぜでしょう。→ 建物そのものよりも、「そこで何をしているか」に気持ちが向くからです。I\'m at school now.（今、学校にいます）は授業中という状況まで含みます。She is at home today.（彼女は今日、家にいます）。',
    add: fresh(bx(15, 16, 290, 34, "I'm at school now.", C.blue, FILL.blue, 13), bx(15, 60, 290, 34, 'She is at home today.', C.blue, FILL.blue, 13), lb(160, 116, '建物ではなく「そこでの活動」に注目', 11, C.ink, 'middle', true), ...cap('school・home・work は at が多い', C.blue, 11)),
  },
  {
    note: '❓同じ公園でも in と at が使えるのは、なぜでしょう。→ 話し手のとらえ方が変わるからです。公園という広い空間の中にいると言いたいときは in the park。待ち合わせの1つの地点として言いたいときは at the park です。',
    add: fresh(bx(10, 12, 140, 84, undefined, C.gray, FILL.gray), ci(80, 56, 6, undefined, C.red, FILL.red), lb(80, 116, 'in the park（空間）', 11, C.blue, 'middle', true), ci(250, 56, 6, undefined, C.red, FILL.red), lb(250, 116, 'at the park（1つの点）', 11, C.red, 'middle', true), ...cap('とらえ方で前置詞が変わる', C.ink)),
  },
  {
    note: 'まとめです。in は囲まれた空間（広さは関係なし）、on は面にくっついている、at は地図の上の1点。同じ場所でも、話し手がどうとらえるかで前置詞が変わります。',
    add: sum3('in：囲まれた空間（箱・部屋・市・国）', 'on：面にくっついている（机・壁）', 'at：地図の上の1点（駅・角・ドア）', '空間・面・点で選ぶ'),
  },
], '場所の前置詞 in・on・at');

// ───────── new20_j1_eigo_11 場所の前置詞②：under・near・between ほか ─────────
const table = (x: number, y: number) => [ln(x, y, x + 100, y, C.gray, false, 4), ln(x + 8, y, x + 8, y + 50, C.gray, false, 3), ln(x + 92, y, x + 92, y + 50, C.gray, false, 3)];
const e11: DiagramFigure = show([
  {
    note: 'ねこがテーブルの下にいるのか、上なのか、となりなのか。位置関係を正確に伝えるには、in や on だけでは足りません。「下・近く・間・となり・前・後ろ」の言い方を、ペアにして整理します。まず under（〜の下に）です。',
    add: [...table(110, 50), bx(135, 78, 50, 22, 'cat', C.main, FILL.warm, 11), lb(160, 118, 'The cat is under the table.', 11, C.ink, 'middle', true), ...cap('under ＝ 〜の下に')],
  },
  {
    note: '❓under の反対は何でしょう。→ over（〜の真上に、〜を越えて）です。under は真下、または覆われた位置を表します。いすの下のボール（There is a ball under the chair.）のように使います。',
    add: fresh(...table(110, 60), bx(135, 88, 50, 22, 'ball', C.main, FILL.warm, 11), bx(135, 24, 50, 22, 'lamp', C.blue, FILL.blue, 11), lb(250, 34, 'over（上）', 12, C.blue, 'middle', true), lb(250, 100, 'under（下）', 12, C.main, 'middle', true), ...cap('under ⇔ over', C.ink)),
  },
  {
    note: '❓前と後ろは、どう言うのでしょう。→ in front of（〜の前に）と behind（〜の後ろに）の対です。There is a tree in front of the house.（家の前に木がある）、The park is behind the school.（公園は学校の後ろにある）。in front of は3語で1つの前置詞のように働きます。',
    add: fresh(bx(110, 30, 90, 56, 'house', C.gray, FILL.gray, 12), ar(200, 58, 238, 58, C.main), lb(262, 58, '正面', 11, C.main, 'middle', true), bx(244, 90, 56, 24, 'tree', C.green, FILL.green, 11), bx(10, 90, 90, 24, 'park', C.blue, FILL.blue, 11), lb(272, 128, 'in front of', 11, C.green, 'middle', true), lb(55, 128, 'behind', 11, C.blue, 'middle', true), ...cap('in front of ⇔ behind', C.ink)),
  },
  {
    note: '❓near と by のちがいは何でしょう。→ 距離です。near は「近い」という広めの距離、by はさらに近い「すぐそば」を表すことが多いです。I live near the station.（駅の近くに住んでいる）、She was sitting by the window.（彼女は窓のそばに座っていた）。',
    add: fresh(bx(10, 30, 60, 34, 'station', C.gray, FILL.gray, 10), bx(190, 30, 60, 34, 'me', C.main, FILL.warm, 11), ln(70, 47, 190, 47, C.blue, false, 2), lb(130, 28, 'near（近い）', 12, C.blue, 'middle', true), bx(10, 88, 60, 34, 'window', C.gray, FILL.gray, 10), bx(74, 88, 60, 34, 'she', C.main, FILL.warm, 11), lb(220, 105, 'by（すぐそば）', 12, C.red, 'middle', true), ...cap('near ⇒ by の順に近い', C.ink)),
  },
  {
    note: '❓2つのものにはさまれているときは、どう言うのでしょう。→ between A and B です。The bank is between the post office and the park.（銀行は郵便局と公園の間にある）。A と B の2つを名指しします。',
    add: fresh(bx(10, 40, 90, 44, 'post office', C.gray, FILL.gray, 11), bx(115, 40, 90, 44, 'bank', C.red, FILL.red, 12), bx(220, 40, 90, 44, 'park', C.gray, FILL.gray, 12), lb(160, 108, 'between the post office and the park', 11, C.ink, 'middle', true), ...cap('between A and B ＝ AとBの間に', C.red)),
  },
  {
    note: '❓では、3つ以上のときは何でしょう。→ among です。between はもともと「2つのものにはさまれて」という語で、語の中に tw（two と同じ「二」）が入っています。among は「多くのものの中に混じって」なので、Ken is among the students.（ケンは生徒たちの中にいる）のように3つ以上の集団に使います。',
    add: fresh(ci(110, 56, 10, undefined, C.gray, FILL.gray), ci(150, 40, 10, undefined, C.gray, FILL.gray), ci(190, 62, 10, undefined, C.gray, FILL.gray), ci(130, 90, 10, undefined, C.gray, FILL.gray), ci(172, 96, 10, undefined, C.gray, FILL.gray), ci(150, 68, 10, 'Ken', C.red, FILL.red, 8), lb(160, 126, 'among the students', 12, C.ink, 'middle', true), ...cap('between は2つ、among は3つ以上', C.red, 11)),
  },
  {
    note: '❓2つのグループのときは、数が多くても between でよいのでしょうか。→ はい。国と国、チームとチームのように、二つのグループにはさまれているなら between the two teams のように言います。まずは「2つなら between、3つ以上なら among」の基本を確実に。',
    add: fresh(bx(10, 20, 120, 50, 'team A（5人）', C.blue, FILL.blue, 11), bx(190, 20, 120, 50, 'team B（5人）', C.blue, FILL.blue, 11), lb(160, 46, '？', 18, C.red, 'middle', true), lb(160, 96, 'between the two teams', 12, C.ink, 'middle', true), lb(160, 118, '二つのグループ → 人数が多くても between', 10, C.gray), ...cap('二つのまとまり → between', C.blue)),
  },
  {
    note: 'となりは next to または beside です。ほぼ同じ意味です。My house is next to the library.（私の家は図書館のとなりにある）、Sit beside me.（私のとなりに座って）。',
    add: fresh(bx(40, 40, 110, 50, 'my house', C.main, FILL.warm, 12), bx(160, 40, 110, 50, 'library', C.gray, FILL.gray, 12), lb(160, 112, 'next to ＝ beside', 13, C.ink, 'middle', true), ...cap('next to／beside ＝ となりに')),
  },
  {
    note: '❓There is／are の文で、前置詞句が文の最後に来るのは、なぜでしょう。→ この文は、まず「〜がある」と存在を告げて、そのあとに場所を足す形だからです。There is a cat under the table. は、先に a cat、次に位置です。be動詞は、あとの名詞の数に合わせます。',
    add: fresh(bx(5, 24, 70, 40, 'There is', C.gray, FILL.gray, 11), bx(80, 24, 70, 40, 'a cat', C.red, FILL.red, 12), bx(155, 24, 160, 40, 'under the table.', C.blue, FILL.blue, 12), lb(40, 82, 'ある', 11, C.gray, 'middle', true), lb(115, 82, '① 存在', 11, C.red, 'middle', true), lb(235, 82, '② 場所をあとから足す', 11, C.blue, 'middle', true), lb(160, 116, 'There are some flowers between the two trees.', 10, C.ink, 'middle', true), ...cap('まず存在、次に場所')),
  },
  {
    note: 'まとめです。位置の語は対で覚えます。under ⇔ over、in front of ⇔ behind、near ⇔ by、between（2つ）⇔ among（3つ以上）、next to ＝ beside。There is の文は、存在を告げてから場所を足します。',
    add: fresh(bx(10, 12, 145, 30, 'under ⇔ over', C.blue, FILL.blue, 12), bx(165, 12, 145, 30, 'in front of ⇔ behind', C.blue, FILL.blue, 11), bx(10, 50, 145, 30, 'near ⇔ by', C.main, FILL.warm, 12), bx(165, 50, 145, 30, 'between ⇔ among', C.main, FILL.warm, 12), bx(10, 88, 300, 30, 'next to ＝ beside（となり）', C.green, FILL.green, 12), ...cap('対で覚える', C.green)),
  },
], '場所の前置詞②');

// ───────── new20_j1_eigo_12 時の前置詞：in・on・at ─────────
const e12: DiagramFigure = show([
  {
    note: '場所の in・on・at には「空間・面・点」のイメージがありました。時を表すときも同じ3つを、時間の幅の大きさで使い分けます。大きな期間は in、特定の1日は on、ピンポイントの時刻は at です。',
    add: [bx(10, 6, 300, 140, undefined, C.gray, FILL.gray), lb(18, 18, 'in：年・月・季節', 11, C.blue, 'start', true), bx(34, 34, 252, 100, undefined, C.blue, FILL.blue), lb(42, 46, 'on：特定の日', 11, C.main, 'start', true), bx(60, 58, 200, 66, undefined, C.main, FILL.warm), lb(68, 70, 'at：時刻', 11, C.red, 'start', true), ci(160, 100, 6, undefined, C.red, FILL.red), ...cap('範囲が狭いほど in → on → at')],
  },
  {
    note: '❓in は、どんな時に使うのでしょう。→ 年・月・季節・世紀のように、幅のある期間です。I was born in 2011. We have a school festival in October. It\'s very hot in summer. in the 20th century。どれも「その期間のどこかで」という意味です。',
    add: fresh(bx(10, 14, 145, 30, 'in 2011（年）', C.blue, FILL.blue, 12), bx(165, 14, 145, 30, 'in October（月）', C.blue, FILL.blue, 12), bx(10, 54, 145, 30, 'in summer（季節）', C.blue, FILL.blue, 12), bx(165, 54, 145, 30, 'in the 20th century', C.blue, FILL.blue, 10), lb(160, 108, '「その期間のどこかで」', 12, C.ink, 'middle', true), ...cap('大きな枠 → in', C.blue)),
  },
  {
    note: '❓on は、どんな時に使うのでしょう。→ 曜日や日付のように、特定の1日です。I have soccer practice on Monday.（月曜日に練習がある）、My birthday is on May 5th.（誕生日は5月5日）。on Sundays と複数形にすると「毎週日曜日は」という習慣の意味になることもあります。',
    add: fresh(bx(10, 14, 300, 30, 'on Monday（曜日）', C.main, FILL.warm, 12), bx(10, 52, 300, 30, 'on May 5th（日付）', C.main, FILL.warm, 12), bx(10, 90, 300, 30, 'on Sundays（毎週日曜日は）', C.main, FILL.warm, 12), ...cap('1日単位 → on', C.main)),
  },
  {
    note: '❓朝・午後・夕方には、どの前置詞を使うのでしょう。→ 単独なら in です。in the morning、in the afternoon、in the evening。ところが曜日がつくと on に変わります。on Monday morning（月曜日の朝に）。曜日で「特定の1日」が決まるので、1日単位の on になるのです。',
    add: fresh(bx(10, 14, 300, 32, 'in the morning／afternoon／evening', C.blue, FILL.blue, 12), lb(160, 66, '＋ 曜日がつくと…', 12, C.red, 'middle', true), bx(10, 80, 300, 32, 'on Monday morning', C.main, FILL.warm, 13), lb(160, 128, '特定の1日が決まる → on', 11, C.ink, 'middle', true), ...cap('曜日がつくと in → on', C.red)),
  },
  {
    note: '次は at です。at は時刻のように、1つの点の時を表します。School starts at eight thirty.（学校は8時30分に始まる）、I go to bed at eleven.（私は11時に寝る）。時計の針が指す1点として時刻をとらえるので at を使います。',
    add: fresh(...clock(70, 74, 52, 8, 30), bx(140, 30, 170, 36, 'at eight thirty', C.red, FILL.red, 13), bx(140, 80, 170, 36, 'at eleven', C.red, FILL.red, 13), ...cap('時計の1点 → at', C.red)),
  },
  {
    note: '❓night だけ、なぜ at なのでしょう。→ 朝・午後・夕方は幅のある時間帯なので in ですが、night は暗くなった1つの時点としてとらえる感覚があるためだと考えられます。It\'s very quiet at night. また、at noon（正午に）、at midnight（真夜中に）も一瞬の時点なので at です。',
    add: fresh(bx(10, 14, 300, 30, 'in the morning／afternoon／evening', C.blue, FILL.blue, 11), bx(10, 54, 300, 30, 'at night（例外）', C.red, FILL.red, 13), bx(10, 94, 145, 30, 'at noon', C.red, FILL.red, 12), bx(165, 94, 145, 30, 'at midnight', C.red, FILL.red, 12), ...cap('night は 決まった言い方', C.red)),
  },
  {
    note: '❓this・next・last・every のときは、前置詞を付けるのでしょうか。→ 付けません。next week、last summer、every morning。この4つはすでに「いつのことか」を決める働きがあるので、in・on・at は要りません。',
    add: fresh(bx(10, 14, 300, 28, '○ See you next week.', C.green, FILL.green, 12), bx(10, 48, 300, 28, '× See you in next week.', C.red, FILL.red, 12), bx(10, 82, 145, 28, 'last summer', C.green, FILL.green, 12), bx(165, 82, 145, 28, 'every morning', C.green, FILL.green, 12), ...cap('this・next・last・every は前置詞なし', C.red, 11)),
  },
  {
    note: 'まとめです。in は年・月・季節、on は曜日・日付、at は時刻。朝・午後・夕方は in、night は at、曜日つきの朝は on。this・next・last・every には前置詞を付けません。',
    add: sum3('in：年・月・季節・朝／午後／夕方', 'on：曜日・日付・曜日つきの朝', 'at：時刻・night・noon・midnight', 'this・next・last・every は前置詞なし'),
  },
], '時の前置詞 in・on・at');

// ───────── new20_j1_eigo_13 方向を表す前置詞 ─────────
const e13: DiagramFigure = show([
  {
    note: '「学校へ行く」「日本から来る」。日本語は動詞が方向まで表しますが、英語は前置詞の助けが必要です。まず基本の to（〜へ・〜まで）と from（〜から）です。to は「向かう先」、from は「出てきた場所」です。',
    add: [bx(10, 40, 90, 44, 'from\n出発点', C.blue, FILL.blue, 12), ar(104, 62, 214, 62, C.main), bx(218, 40, 92, 44, 'to\n行き先', C.red, FILL.red, 12), lb(160, 54, '矢印の向き', 11, C.gray, 'middle'), lb(160, 112, 'I go to school.　I come from Japan.', 11, C.ink, 'middle', true), ...cap('to ＝ 向かう先、from ＝ 出発点')],
  },
  {
    note: '❓from と to を組み合わせると、どうなるでしょう。→ from A to B で「AからBまで」になり、始まりと終わりをはっきり示せます。The store is open from nine to six.（9時から6時まで開いている）、We walked from the station to the park.（駅から公園まで歩いた）。',
    add: fresh(bx(10, 30, 70, 36, 'station', C.blue, FILL.blue, 11), ar(84, 48, 236, 48, C.main), bx(240, 30, 70, 36, 'park', C.red, FILL.red, 11), lb(160, 36, 'from … to …', 11, C.main, 'middle', true), lb(160, 96, 'open from nine to six', 12, C.ink, 'middle', true), ...cap('from A to B ＝ AからBまで')),
  },
  {
    note: '❓from は場所だけに使うのでしょうか。→ いいえ。人や時間の起点にも使います。This letter is from my grandmother.（この手紙は祖母からです）、The train from Osaka arrived late.（大阪からの電車は遅れて到着した）。I\'m from Japan. は I come from Japan. と同じ意味で、出身を表します。',
    add: fresh(bx(15, 14, 290, 30, 'This letter is from my grandmother.', C.blue, FILL.blue, 12), bx(15, 52, 290, 30, 'The train from Osaka arrived late.', C.blue, FILL.blue, 12), bx(15, 90, 290, 30, "I'm from Japan. ＝ I come from Japan.", C.main, FILL.warm, 11), ...cap('場所・人・出身の「出どころ」', C.blue)),
  },
  {
    note: '次は「中へ」と「外へ」です。into（〜の中へ）と out of（〜の外へ）。The cat jumped into the box.（ねこは箱の中に飛び込んだ）、She took her phone out of her bag.（彼女はかばんから携帯電話を取り出した）。',
    add: fresh(bx(110, 20, 100, 70, undefined, C.gray, FILL.gray), ar(30, 56, 112, 56, C.green), lb(50, 40, 'into', 12, C.green, 'middle', true), ar(208, 76, 290, 76, C.red), lb(270, 62, 'out of', 12, C.red, 'middle', true), lb(160, 106, 'The cat jumped into the box.', 11, C.ink, 'middle', true), ...cap('into ＝ 中へ、out of ＝ 外へ')),
  },
  {
    note: '❓in と into は、どうちがうのでしょう。→ in は「中にいる状態」、into は「中へ動いていく動き」です。He got into the car.（彼は車に乗り込んだ）は、外から中への動きまで含みます。',
    add: fresh(bx(10, 20, 140, 50, undefined, C.gray, FILL.gray), ci(80, 46, 7, undefined, C.red, FILL.red), lb(80, 92, 'in（いる状態）', 12, C.blue, 'middle', true), bx(170, 20, 140, 50, undefined, C.gray, FILL.gray), ci(190, 100, 7, undefined, C.red, FILL.red), ar(194, 94, 222, 56, C.green), lb(240, 92, 'into（動き）', 12, C.green, 'middle', true), ...cap('into は動きを含む', C.green)),
  },
  {
    note: '上と下は up と down です。We walked up the hill.（丘を上まで歩いた）、Go up the stairs and turn left.（階段を上がって左に曲がって）、The cat ran down the tree.（ねこは木を下りて走った）。',
    add: fresh(pg([[30, 120], [150, 30], [150, 120]], C.gray, FILL.gray), ar(46, 110, 120, 52, C.green), lb(66, 60, 'up', 13, C.green, 'middle', true), ar(184, 40, 270, 110, C.red), lb(260, 60, 'down', 13, C.red, 'middle', true), ...cap('up ＝ 上へ、down ＝ 下へ')),
  },
  {
    note: '道や川を横切るときは across（〜を横切って）です。They swam across the river.（彼らは川を泳いで渡った）。道を渡るなら cross the street という言い方もあります。',
    add: fresh(bx(10, 40, 300, 50, undefined, C.blue, FILL.blue), lb(70, 65, 'river', 12, C.blue, 'middle'), ar(160, 130, 160, 10, C.green), lb(230, 118, 'across', 13, C.green, 'middle', true), ...cap('across ＝ 横切って', C.green)),
  },
  {
    note: '❓乗り物に乗る・降りるは、どう言うのでしょう。→ 小さな乗り物の車やタクシーは get in（乗る）／get out of（降りる）。大きな乗り物のバスや電車は get on／get off です。Get in the car. Get out of the car. Get on the bus. Get off the train at the next stop.',
    add: fresh(bx(10, 16, 145, 40, 'car・taxi', C.blue, FILL.blue, 13), bx(165, 16, 145, 40, 'bus・train・plane', C.main, FILL.warm, 11), lb(82, 76, 'get in／get out of', 12, C.blue, 'middle', true), lb(238, 76, 'get on／get off', 12, C.main, 'middle', true), lb(160, 112, 'Get in the car.　Get on the bus.', 11, C.ink, 'middle', true), ...cap('乗り物の大きさで使い分け')),
  },
  {
    note: '❓どう見分ければよいのでしょう。→ 中で立って歩けるかどうかです。車のように狭く、座ったまま乗るものは in／out of。バスや電車のように中を歩けるものは on／off です。',
    add: fresh(bx(15, 14, 290, 34, '座ったまま乗る（せまい）→ in／out of', C.blue, FILL.blue, 12), bx(15, 56, 290, 34, '中を歩ける（広い）→ on／off', C.main, FILL.warm, 12), lb(160, 114, '歩けるか どうか で決める', 12, C.ink, 'middle', true), ...cap('立って歩ける？ で見分ける')),
  },
  {
    note: 'まとめです。to は向かう先、from は出発点、into・out of は中へ・外へ、up・down は上へ・下へ、across は横切る。乗り物は、車は in／out of、バスや電車は on／off です。',
    add: sum3('to（向かう先）／ from（出発点）', 'into・out of ／ up・down ／ across', '乗り物：車 in／out of、バス・電車 on／off', '動きの前置詞がそろった'),
  },
], '方向を表す前置詞');

// ───────── new20_j1_eigo_14 自己紹介の基本表現 ─────────
const e14: DiagramFigure = show([
  {
    note: '自己紹介は、英語を「本当に使う」いちばん早い場面です。名前を言う → あいさつ → 出身 → 好きなもの → 別れのあいさつ、という流れで話します。この流れの1つずつを、なぜそう言うのか確かめながら見ていきます。',
    add: [...flow(['名前', 'あいさつ', '出身', '好きな\nもの', '別れ'], 40, { h: 56, size: 10, gap: 10, pad: 6 }).flat(), ...cap('名前 → あいさつ → 出身 → 好きなもの → 別れ', C.ink, 11)],
  },
  {
    note: '名前の名乗り方は2通りです。I\'m Ken.（私はケンです）と、My name is Ken Tanaka.（私の名前は田中ケンです）。どちらも同じ意味ですが、My name is 〜 のほうがやや改まった場面、たとえばスピーチの最初でよく使われます。',
    add: fresh(bx(15, 14, 290, 36, "I'm Ken.", C.blue, FILL.blue, 14), bx(15, 62, 290, 36, 'My name is Ken Tanaka.', C.main, FILL.warm, 14), lb(160, 118, 'どちらも同じ意味（My name is はやや改まる）', 11, C.gray, 'middle'), ...cap('名乗る型は2つ')),
  },
  {
    note: '❓Nice to meet you. は、いつ使うのでしょう。→ 初めて会った人にだけ使います。2回目以降に会うときは Nice to see you again.（また会えてうれしい）と言います。',
    add: fresh(bx(15, 14, 290, 34, '1回目：Nice to meet you.（はじめまして）', C.green, FILL.green, 12), bx(15, 58, 290, 34, '2回目以降：Nice to see you again.', C.blue, FILL.blue, 12), lb(160, 114, '初対面のあいさつは 1回目だけ', 12, C.ink, 'middle', true), ...cap('はじめまして ＝ 初めてだけ', C.green)),
  },
  {
    note: '❓返すときは、そのまま Nice to meet you. でよいのでしょうか。→ too を付けて Nice to meet you, too.（こちらこそ、はじめまして）と返します。too は「〜も」の意味で、「私も同じ気持ちです」と伝えます。too がないと、同じあいさつを2回言っただけのようで不自然です。',
    add: fresh(bx(15, 14, 290, 34, "A: Nice to meet you.", C.blue, FILL.blue, 13), ar(160, 52, 160, 66, C.main), bx(15, 70, 290, 34, "B: Nice to meet you, too.", C.green, FILL.green, 13), lb(160, 126, 'too ＝「私も」', 12, C.red, 'middle', true), ...cap('too を付けて返す', C.red)),
  },
  {
    note: '相手の名前は What\'s your name?（お名前は何ですか）とたずねます。会話の流れはこうです。A: Hi! I\'m Ken. What\'s your name? B: Hi, Ken. I\'m Emi. Nice to meet you. A: Nice to meet you, too.',
    add: fresh(bx(10, 10, 300, 30, "A: Hi! I'm Ken. What's your name?", C.blue, FILL.blue, 11), bx(10, 46, 300, 30, "B: Hi, Ken. I'm Emi. Nice to meet you.", C.green, FILL.green, 11), bx(10, 82, 300, 30, 'A: Nice to meet you, too.', C.blue, FILL.blue, 12), ...cap('名乗る → たずねる → あいさつ')),
  },
  {
    note: '名前のあとは出身を言います。I\'m from Japan.（私は日本出身です）、I\'m from Osaka.（私は大阪出身です）。「〜出身」は be動詞と from で表します。くわしくは出身地の単元で学びます。',
    add: fresh(bx(15, 20, 290, 36, "I'm from Japan.", C.blue, FILL.blue, 14), bx(15, 66, 290, 36, "I'm from Osaka.", C.blue, FILL.blue, 14), lb(160, 122, 'be動詞（I\'m）＋ from ＋ 場所', 12, C.ink, 'middle', true), ...cap('出身 ＝ I\'m from 〜.')),
  },
  {
    note: '❓好きなものや持っているものは、どの動詞で言うのでしょう。→ 一般動詞です。「〜が好き」は I like 〜.、「〜を持っている」は I have 〜.。I\'m a student at Midori Junior High School. のような be動詞の文と組み合わせて、何文か続けるのが自己紹介の型です。',
    add: fresh(bx(10, 12, 145, 30, "I'm a student.", C.main, FILL.warm, 12), bx(165, 12, 145, 30, "I'm from Osaka.", C.main, FILL.warm, 12), bx(10, 52, 145, 30, 'I like soccer.', C.blue, FILL.blue, 12), bx(165, 52, 145, 30, 'I have one brother.', C.blue, FILL.blue, 11), lb(82, 100, 'be動詞の文', 11, C.main, 'middle', true), lb(238, 100, '一般動詞の文', 11, C.blue, 'middle', true), ...cap('be動詞と一般動詞を組み合わせる')),
  },
  {
    note: '最後は別れのあいさつです。See you.（またね）、See you later.（また後で）、Goodbye.／Bye.（さようなら）、Take care.（気をつけて）。',
    add: fresh(bx(10, 14, 145, 30, 'See you.（またね）', C.green, FILL.green, 12), bx(165, 14, 145, 30, 'See you later.（また後で）', C.green, FILL.green, 11), bx(10, 54, 145, 30, 'Goodbye.／Bye.', C.green, FILL.green, 12), bx(165, 54, 145, 30, 'Take care.（気をつけて）', C.green, FILL.green, 11), ...cap('別れのあいさつ')),
  },
  {
    note: '❓My name is Ken. のあとに、もう一度 I\'m Ken. と言ってもよいでしょうか。→ 必要ありません。同じ情報を2つの言い方で二重に言うと不自然です。名乗る文は、どちらか一方を選びます。',
    add: fresh(bx(15, 14, 290, 34, '× My name is Ken. I\'m Ken.', C.red, FILL.red, 13), bx(15, 58, 290, 34, "○ My name is Ken.", C.green, FILL.green, 13), lb(160, 116, '名前は 1回だけ', 12, C.ink, 'middle', true), ...cap('どちらか一方を選ぶ', C.red)),
  },
  {
    note: 'ミニスピーチです。Hello, everyone. I\'m Ken. I\'m from Osaka. I like soccer and music. I have one brother. Nice to meet you all! 名前、出身、好きなもの、家族、あいさつの順に並んでいます。',
    add: fresh(bx(15, 6, 290, 22, "Hello, everyone. I'm Ken.", C.blue, FILL.blue, 11), bx(15, 32, 290, 22, "I'm from Osaka.", C.blue, FILL.blue, 11), bx(15, 58, 290, 22, 'I like soccer and music.', C.blue, FILL.blue, 11), bx(15, 84, 290, 22, 'I have one brother.', C.blue, FILL.blue, 11), bx(15, 110, 290, 22, 'Nice to meet you all!', C.green, FILL.green, 11), ...cap('流れに沿って 文をつなぐ')),
  },
  {
    note: 'まとめです。名乗りは I\'m 〜. か My name is 〜.（どちらか一方）。はじめましては Nice to meet you. に too を付けて返します。出身・好きなもの・持ち物を続け、最後に別れのあいさつを添えます。',
    add: sum3("名乗る：I'm 〜.／My name is 〜.（片方だけ）", 'Nice to meet you. → ...too.', '出身・like・have → 別れのあいさつ', '自己紹介の型がそろった'),
  },
], '自己紹介の基本表現');

// ───────── new20_j1_eigo_15 家族を紹介する表現 ─────────
const e15: DiagramFigure = show([
  {
    note: '家族の写真を見せながら「これは私の父です」と紹介する場面です。This is my father.（こちらは私の父です）。まず、この型の根っこから確かめます。',
    add: [bx(100, 14, 120, 66, undefined, C.gray, FILL.gray), lb(160, 26, 'photo', 10, C.gray), ci(140, 56, 12, undefined, C.main, FILL.warm), ci(180, 56, 12, undefined, C.main, FILL.warm), bx(15, 92, 290, 34, 'This is my father.', C.blue, FILL.blue, 14), ...cap('写真の中の人を 指して紹介')],
  },
  {
    note: '❓なぜ This is を使うのでしょう。→ 目の前や写真の中の人を「この人は」と指し示すからです。複数の人を紹介するときは These are my grandparents.（こちらは私の祖父母です）のように These are を使います。',
    add: fresh(bx(15, 14, 290, 34, 'This is my father.（1人）', C.blue, FILL.blue, 13), bx(15, 58, 290, 34, 'These are my grandparents.（複数）', C.main, FILL.warm, 12), lb(160, 114, 'This is ／ These are ＝ 指し示す', 12, C.ink, 'middle', true), ...cap('1人は This is、複数は These are')),
  },
  {
    note: '❓紹介したあとは、どう説明を続けるのでしょう。→ he や she に切りかえます。This is my mother. She is a teacher.（こちらは私の母です。彼女は教師です）。my mother を何度もくり返すと不自然になるからです。',
    add: fresh(bx(15, 14, 290, 34, 'This is my mother.', C.blue, FILL.blue, 13), ar(160, 52, 160, 66, C.main), bx(15, 70, 290, 34, 'She is a teacher.', C.green, FILL.green, 13), lb(160, 126, 'my mother → she に切りかえ', 12, C.red, 'middle', true), ...cap('2文目からは he／she', C.red)),
  },
  {
    note: '❓兄と弟、姉と妹は、どう区別するのでしょう。→ 英語の brother と sister には、年上・年下の区別がありません。上下を言いたいときだけ older（年上の）、younger（年下の）を付けます。I have an older brother and a younger sister.（兄と妹がいます）。',
    add: fresh(bx(110, 10, 100, 30, 'older brother', C.blue, FILL.blue, 11), ar(160, 44, 160, 56, C.gray), bx(135, 58, 50, 26, 'I', C.main, FILL.warm, 13), ar(160, 88, 160, 100, C.gray), bx(110, 102, 100, 30, 'younger sister', C.green, FILL.green, 11), lb(250, 24, '兄', 14, C.blue, 'middle', true), lb(250, 116, '妹', 14, C.green, 'middle', true), ...cap('上下は older／younger を付ける')),
  },
  {
    note: '家族の語です。father（父）、mother（母）、parents（両親）、brother（兄・弟）、sister（姉・妹）、grandfather（祖父）、grandmother（祖母）、grandparents（祖父母）。parents や grandparents は、2人まとめて言う語です。',
    add: fresh(bx(8, 12, 98, 28, 'father', C.blue, FILL.blue, 11), bx(111, 12, 98, 28, 'mother', C.blue, FILL.blue, 11), bx(214, 12, 98, 28, 'parents（両親）', C.blue, FILL.blue, 10), bx(8, 48, 98, 28, 'brother', C.main, FILL.warm, 11), bx(111, 48, 98, 28, 'sister', C.main, FILL.warm, 11), bx(214, 48, 98, 28, 'grandparents', C.green, FILL.green, 10), bx(8, 84, 98, 28, 'grandfather', C.green, FILL.green, 11), bx(111, 84, 98, 28, 'grandmother', C.green, FILL.green, 11), ...cap('家族を表す基本の語')),
  },
  {
    note: '❓兄弟姉妹の人数は、なぜ be動詞ではなく have で言うのでしょう。→ I am a sister. では、be動詞が「私＝妹」というイコールを作ってしまうからです。「家族がいる」は「家族を持っている」と考え、I have a sister. と言います。日本語の「います」につられないようにします。',
    add: fresh(bx(15, 14, 290, 34, '× I am a sister.（私＝妹 になる）', C.red, FILL.red, 12), bx(15, 58, 290, 34, '○ I have a sister.（妹を持っている）', C.green, FILL.green, 12), lb(160, 116, 'be動詞はイコール、have は「持っている」', 11, C.ink, 'middle', true), ...cap('家族の存在は have で言う', C.green)),
  },
  {
    note: '❓人数が2人以上のとき、名詞はどうなるでしょう。→ 複数形にします。two のあとの名詞は必ず複数形です。I have one brother.（兄弟が1人）、I have two sisters.（姉妹が2人）。I have two brother. は誤りです。',
    add: fresh(bx(15, 14, 290, 30, 'I have one brother.', C.blue, FILL.blue, 13), bx(15, 52, 290, 30, 'I have two sisters.', C.blue, FILL.blue, 13), bx(15, 90, 290, 30, '× I have two brother.', C.red, FILL.red, 13), ...cap('two のあとは複数形', C.red)),
  },
  {
    note: '一人っ子の言い方は2つあります。I don\'t have any brothers or sisters.（兄弟姉妹がいません）と、I\'m an only child.（私は一人っ子です）。たずねるときは Do you have any brothers or sisters? です。any は疑問文や否定文で使う「いくらかの」という意味の語です。',
    add: fresh(bx(15, 10, 290, 30, 'Do you have any brothers or sisters?', C.blue, FILL.blue, 12), bx(15, 48, 290, 28, 'Yes, I have one brother.', C.green, FILL.green, 12), bx(15, 84, 290, 28, "No, I don't. I'm an only child.", C.main, FILL.warm, 12), ...cap('たずね方と 答え方')),
  },
  {
    note: 'まとめです。目の前の人の紹介は This is my 〜.（複数は These are）で、そのあとは he／she で続けます。家族の存在は have で言い、人数が2人以上なら名詞は複数形にします。上下は older／younger を付けます。',
    add: sum3('This is my 〜.／These are my 〜. → he／she', 'I have ＋数＋ brother(s)／sister(s).', 'two のあとは複数形／older・younger', '家族の紹介ができる'),
  },
], '家族を紹介する');

// ───────── new20_j1_eigo_16 出身地・国籍をたずねる表現 ─────────
const e16: DiagramFigure = show([
  {
    note: '国際交流会でいちばん先に聞かれるのが「どこの出身ですか」です。Where are you from? とたずね、I\'m from Japan. のように答えます。型を、根っこから確かめます。',
    add: [bx(15, 20, 290, 36, 'Where are you from?', C.blue, FILL.blue, 14), ar(160, 60, 160, 78, C.main), bx(15, 82, 290, 36, "I'm from Japan.", C.green, FILL.green, 14), ...cap('出身 ＝ Where are you from?')],
  },
  {
    note: '❓答えで from を忘れて I\'m Japan. と言うと、どうなるでしょう。→ be動詞はイコールなので、「私＝日本（という国）」になってしまいます。「〜出身」は from が必要です。',
    add: fresh(bx(15, 14, 290, 34, "× I'm Japan.（私＝日本？）", C.red, FILL.red, 13), bx(15, 58, 290, 34, "○ I'm from Japan.", C.green, FILL.green, 13), lb(160, 116, 'be動詞だけだと イコール', 12, C.ink, 'middle', true), ...cap('「出身」には from が必要', C.red)),
  },
  {
    note: '出身は come を使っても言えます。Where do you come from?（どこの出身ですか）— I come from Canada.（カナダ出身です）。come は一般動詞なので、I\'m come from 〜. のように be動詞と一般動詞を両方使ってはいけません。会話では be動詞のほうがよく使われます。',
    add: fresh(bx(15, 14, 290, 30, 'Where do you come from?', C.blue, FILL.blue, 12), bx(15, 50, 290, 30, 'I come from Canada.', C.green, FILL.green, 13), bx(15, 88, 290, 30, "× I'm come from Canada.", C.red, FILL.red, 13), ...cap('be動詞か come、どちらか1つ', C.red)),
  },
  {
    note: '❓都市と国を一緒に言うときの順番は、どうなるでしょう。→ 狭い場所の都市を先に、広い場所の国をあとに言います。I\'m from Kyoto, Japan.（私は日本の京都出身です）。',
    add: fresh(bx(10, 40, 130, 44, 'Kyoto（都市）', C.blue, FILL.blue, 13), lb(160, 62, ',', 20), bx(180, 40, 130, 44, 'Japan（国）', C.green, FILL.green, 13), lb(75, 104, '先（せまい）', 11, C.blue, 'middle', true), lb(245, 104, 'あと（ひろい）', 11, C.green, 'middle', true), ...cap("I'm from Kyoto, Japan.")),
  },
  {
    note: '❓国について話すときの3つの形は、どうちがうのでしょう。→ 国名は場所そのもの（Japan）、国籍の形容詞は「〜人の」（Japanese）、「〜語」を表す語です。たとえば America・American、China・Chinese のように、国名と国籍はつづりがちがいます。',
    add: fresh(lb(60, 12, '国名', 11, C.blue, 'middle', true), lb(160, 12, '国籍（〜人の）', 11, C.red, 'middle', true), lb(260, 12, '〜語', 11, C.green, 'middle', true), bx(10, 24, 100, 26, 'Japan', C.blue, FILL.blue, 12), bx(115, 24, 90, 26, 'Japanese', C.red, FILL.red, 12), bx(210, 24, 100, 26, 'Japanese', C.green, FILL.green, 12), bx(10, 58, 100, 26, 'America', C.blue, FILL.blue, 12), bx(115, 58, 90, 26, 'American', C.red, FILL.red, 12), bx(10, 92, 100, 26, 'China', C.blue, FILL.blue, 12), bx(115, 92, 90, 26, 'Chinese', C.red, FILL.red, 12), bx(210, 92, 100, 26, 'Chinese', C.green, FILL.green, 12), ...cap('国名と国籍は つづりがちがう')),
  },
  {
    note: '❓どこでどちらを使うのでしょう。→ from のあとは国名です（I\'m from Japan.）。be動詞のあとで「〜人だ」と言うときは国籍の形容詞です（I\'m Japanese. She is American.）。I\'m from Japanese. や I\'m Japan. は誤りです。',
    add: fresh(bx(10, 12, 300, 28, "○ I'm from Japan.（from のあとは国名）", C.green, FILL.green, 11), bx(10, 46, 300, 28, "○ I'm Japanese.（人 → 形容詞）", C.green, FILL.green, 11), bx(10, 80, 145, 28, "× I'm Japan.", C.red, FILL.red, 12), bx(165, 80, 145, 28, "× I'm from Japanese.", C.red, FILL.red, 11), ...cap('from のあと 国名、be動詞のあと 形容詞', C.ink, 11)),
  },
  {
    note: '「〜語」も多くは国籍の形容詞と同じ形です。I study Japanese and English.（日本語と英語を勉強する）、Do you speak Chinese?（中国語を話しますか）。He is a Chinese student.（彼は中国人の生徒です）のように、名詞の前にも置けます。',
    add: fresh(bx(15, 14, 290, 30, 'Do you speak Chinese?（中国語）', C.green, FILL.green, 12), bx(15, 52, 290, 30, 'He is a Chinese student.（中国人の）', C.red, FILL.red, 12), lb(160, 108, '同じ形で、使い方がちがう', 12, C.ink, 'middle', true), ...cap('形容詞と「〜語」は同じ形')),
  },
  {
    note: '❓国名や言語名は、文の途中でも大文字なのはなぜでしょう。→ 曜日や月と同じく固有名詞だからです。× i am japanese. ではなく ○ I am Japanese. と書きます。',
    add: fresh(bx(15, 14, 290, 34, '× i am japanese.', C.red, FILL.red, 14), bx(15, 58, 290, 34, '○ I am Japanese.', C.green, FILL.green, 14), lb(160, 116, '国名・国籍・言語は 大文字で始める', 12, C.ink, 'middle', true), ...cap('固有名詞は 大文字', C.green)),
  },
  {
    note: '会話の例です。A: Where are you from? B: I\'m from Sydney, Australia. How about you? A: I\'m from Osaka, Japan. 国籍は What\'s your nationality? でもたずねられます。',
    add: fresh(bx(10, 12, 300, 28, 'A: Where are you from?', C.blue, FILL.blue, 12), bx(10, 46, 300, 28, "B: I'm from Sydney, Australia. How about you?", C.green, FILL.green, 10), bx(10, 80, 300, 28, "A: I'm from Osaka, Japan.", C.blue, FILL.blue, 12), ...cap('How about you? でたずね返す')),
  },
  {
    note: 'まとめです。出身は Where are you from? ― I\'m from 〜.（from が必須）。from のあとは国名、be動詞のあとは国籍の形容詞。国名・国籍・言語は、いつも大文字で書き始めます。',
    add: sum3("出身：I'm from 〜.（from を忘れない）", 'from のあと 国名、be動詞のあと 国籍', '国名・国籍・言語は大文字で始める', '出身を答えられる'),
  },
], '出身地・国籍');

// ───────── new20_j1_eigo_17 学校生活の語彙と文 ─────────
const e17: DiagramFigure = show([
  {
    note: '学校生活は、いちばん身近な話題です。まず教科名です。math（数学）、English（英語）、Japanese（国語）、science（理科）、social studies（社会）、music（音楽）、art（美術）、P.E.（体育）。English と Japanese は大文字で書き始めます。',
    add: [bx(10, 12, 145, 28, 'math（数学）', C.blue, FILL.blue, 12), bx(165, 12, 145, 28, 'English（英語）', C.blue, FILL.blue, 12), bx(10, 46, 145, 28, 'Japanese（国語）', C.blue, FILL.blue, 12), bx(165, 46, 145, 28, 'science（理科）', C.main, FILL.warm, 12), bx(10, 80, 145, 28, 'social studies（社会）', C.main, FILL.warm, 11), bx(165, 80, 145, 28, 'music（音楽）', C.main, FILL.warm, 12), bx(10, 114, 145, 28, 'art（美術）', C.green, FILL.green, 12), bx(165, 114, 145, 28, 'P.E.（体育）', C.green, FILL.green, 12), ...cap('English・Japanese は大文字')],
  },
  {
    note: '好きな教科は What subject do you like?（好きな教科は何ですか）とたずね、I like math the best.（数学がいちばん好きです）と答えます。What\'s your favorite subject?（お気に入りの教科は？）― My favorite subject is science. という言い方もあります。',
    add: fresh(bx(10, 10, 300, 28, 'What subject do you like?', C.blue, FILL.blue, 12), bx(10, 42, 300, 28, 'I like math the best.', C.green, FILL.green, 12), bx(10, 78, 300, 28, "What's your favorite subject?", C.blue, FILL.blue, 12), bx(10, 110, 300, 28, 'My favorite subject is science.', C.green, FILL.green, 12), ...cap('どちらの聞き方も同じ意味')),
  },
  {
    note: '得意と苦手です。be good at 〜 は「〜が得意だ」、be poor at 〜 や not good at 〜 は「〜が苦手だ」。I\'m good at math.（数学が得意です）、I\'m not good at English.（英語が苦手です）。',
    add: fresh(bx(15, 14, 290, 34, "I'm good at math.（得意）", C.green, FILL.green, 13), bx(15, 58, 290, 34, "I'm not good at English.（苦手）", C.red, FILL.red, 13), lb(160, 116, 'be poor at 〜 も「苦手」', 12, C.gray, 'middle'), ...cap('good at ＝ 得意、not good at ＝ 苦手')),
  },
  {
    note: '❓at のあとに、動作は置けるのでしょうか。→ at は前置詞で、前置詞のあとには名詞（のなかま）しか置けません。そこで動作は -ing 形（動名詞）にして I\'m good at singing.（私は歌うのが得意です）と言います。at sing は誤りです。',
    add: fresh(bx(15, 14, 290, 34, "○ I'm good at math.（名詞）", C.green, FILL.green, 13), bx(15, 58, 290, 34, "○ I'm good at singing.（-ing）", C.green, FILL.green, 13), bx(15, 102, 290, 34, "× I'm good at sing.", C.red, FILL.red, 13), ...cap('前置詞 at のあとは名詞か -ing', C.red)),
  },
  {
    note: '❓「月曜日に数学がある」は、なぜ have で言うのでしょう。→ 時間割という自分の持ち物として、授業を持っていると考えるからです。I have math on Monday.（月曜日に数学がある）。曜日の前には on。We have five classes today.（今日は授業が5時間ある）。',
    add: fresh(bx(15, 14, 290, 34, 'I have math on Monday.', C.blue, FILL.blue, 14), lb(160, 70, '時間割 ＝ 自分が「持っている」', 12, C.ink, 'middle', true), bx(15, 84, 290, 34, 'We have five classes today.', C.blue, FILL.blue, 13), ...cap('授業は have で言う')),
  },
  {
    note: '「何時間目」は period を序数と組み合わせます。We have P.E. in the third period.（3時間目に体育がある）、Math is in the first period.（数学は1時間目だ）。period は時間割上の1コマです。',
    add: fresh(bx(10, 14, 70, 40, '1st\nperiod', C.gray, FILL.gray, 10), bx(88, 14, 70, 40, '2nd\nperiod', C.gray, FILL.gray, 10), bx(166, 14, 70, 40, '3rd\nperiod', C.red, FILL.red, 10), bx(244, 14, 66, 40, '4th\nperiod', C.gray, FILL.gray, 10), lb(160, 80, 'We have P.E. in the third period.', 12, C.red, 'middle', true), lb(160, 104, 'Math is in the first period.', 12, C.ink, 'middle', true), ...cap('period ＝ 時間割の1コマ')),
  },
  {
    note: '部活動は I\'m in the tennis club.（テニス部に入っています）と言い、I belong to the 〜 club. はややかたい言い方です。主な部は、baseball・soccer・basketball・tennis・brass band・art・drama の club です。',
    add: fresh(bx(15, 14, 290, 34, "I'm in the tennis club.", C.green, FILL.green, 13), bx(15, 58, 290, 34, 'I belong to the tennis club.（かたい）', C.main, FILL.warm, 12), lb(160, 114, 'soccer／brass band／drama … club', 11, C.gray), ...cap('部活 ＝ in the 〜 club')),
  },
  {
    note: '❓なぜ in を落としてはいけないのでしょう。→ 部を「グループという場所」ととらえ、その中にいる、と in で言うからです。in を落とした I am the tennis club. は「私はテニス部そのものだ」というイコールの文になってしまいます。',
    add: fresh(bx(15, 14, 290, 34, "× I am the tennis club.（私＝部？）", C.red, FILL.red, 12), bx(15, 58, 290, 34, "○ I'm in the tennis club.", C.green, FILL.green, 13), lb(160, 116, 'グループの「中にいる」→ in', 12, C.ink, 'middle', true), ...cap('in を入れて「中にいる」', C.green)),
  },
  {
    note: '部活のたずね方は What club are you in?（何部に入っていますか）と、How many times a week do you have practice?（週に何回練習がありますか）です。',
    add: fresh(bx(15, 14, 290, 34, 'What club are you in?', C.blue, FILL.blue, 13), bx(15, 58, 290, 34, 'How many times a week do you have practice?', C.blue, FILL.blue, 10), bx(15, 102, 290, 30, "I'm in the soccer club.", C.green, FILL.green, 12), ...cap('部活の質問')),
  },
  {
    note: 'まとめです。授業は持ち物として have、at のあとは名詞か -ing、部活は in the 〜 club。教科名の English・Japanese は大文字で始めます。',
    add: sum3('授業は have（曜日は on、時間は in the 〜 period）', 'be good at ＋ 名詞か -ing', '部活：I\'m in the 〜 club.', '学校の話ができる'),
  },
], '学校生活の英語');

// ───────── new20_j1_eigo_18 一日の生活を説明する表現 ─────────
const e18: DiagramFigure = show([
  {
    note: '「毎日何時に起きるの？」一日の生活を英語で話すには、現在形・時刻・時の前置詞を1つの文章にまとめます。朝から夜までの流れを、時刻つきで並べます。',
    add: [bx(8, 14, 98, 36, 'get up\n6:30', C.blue, FILL.blue, 11), bx(111, 14, 98, 36, 'breakfast\n7:00', C.blue, FILL.blue, 11), bx(214, 14, 98, 36, 'leave home\n8:00', C.blue, FILL.blue, 11), bx(8, 62, 98, 36, 'club\n〜 5:00', C.main, FILL.warm, 11), bx(111, 62, 98, 36, 'homework\n7:00-8:00', C.main, FILL.warm, 10), bx(214, 62, 98, 36, 'go to bed\n10:30', C.main, FILL.warm, 11), ...cap('朝 → 昼 → 夜の順に並べる')],
  },
  {
    note: '❓なぜ現在形で言うのでしょう。→ 毎日くり返す習慣だからです。習慣は今の事実なので現在形を使い、主語が I のときはそのままの形、he や she のときは三人称単数の -s を付けます。I get up. ／ He goes to bed.',
    add: fresh(bx(15, 14, 290, 34, 'I get up at six.', C.blue, FILL.blue, 14), bx(15, 58, 290, 34, 'He goes to bed at ten.', C.main, FILL.warm, 14), lb(160, 112, '主語が he／she なら -s（go → goes）', 12, C.ink, 'middle', true), ...cap('習慣 ＝ 現在形')),
  },
  {
    note: '時刻は、動詞のあとに at ＋ 時刻で言います。I get up at six thirty.（6時30分に起きる）、We have dinner at seven.（7時に夕食を食べる）。時計の針が指す1点なので at を使います。',
    add: fresh(...clock(70, 74, 52, 6, 30), bx(140, 30, 170, 36, 'I get up at six thirty.', C.blue, FILL.blue, 11), bx(140, 80, 170, 36, 'at ＋ 時刻', C.red, FILL.red, 13), ...cap('動詞のあとに at ＋ 時刻', C.blue)),
  },
  {
    note: '❓場所と時刻の両方があるときは、どちらを先に言うのでしょう。→ 場所を先に、時をあとに置きます。動詞 ＋ 場所 ＋ 時の順です。I go to school at eight. が正しく、I go at eight to school. は誤りです。',
    add: fresh(bx(5, 20, 70, 36, 'I go', C.gray, FILL.gray, 13), bx(80, 20, 120, 36, 'to school', C.green, FILL.green, 13), bx(205, 20, 110, 36, 'at eight.', C.red, FILL.red, 13), lb(140, 74, '① 場所', 12, C.green, 'middle', true), lb(260, 74, '② 時', 12, C.red, 'middle', true), bx(15, 92, 290, 34, '× I go at eight to school.', C.red, FILL.red, 12), ...cap('動詞 ＋ 場所 ＋ 時', C.ink)),
  },
  {
    note: '❓どのくらいの習慣かは、どう表すのでしょう。→ 頻度の副詞を動詞の前に置きます。always（いつも）、usually（たいてい）、often（よく）、sometimes（ときどき）。I usually get up at six.（私はたいてい6時に起きる）。',
    add: fresh(lb(160, 12, '多い → 少ない', 11, C.gray, 'middle', true), bx(10, 24, 72, 28, 'always', C.red, FILL.red, 11), bx(88, 24, 72, 28, 'usually', C.main, FILL.warm, 11), bx(166, 24, 72, 28, 'often', C.blue, FILL.blue, 11), bx(244, 24, 70, 28, 'sometimes', C.green, FILL.green, 10), bx(15, 76, 290, 34, 'I usually get up at six.', C.blue, FILL.blue, 13), lb(160, 126, '動詞の前に置く', 12, C.ink, 'middle', true), ...cap('頻度の副詞は 動詞の前')),
  },
  {
    note: '「〜時から〜時まで」は from ＋ 時刻 ＋ to ＋ 時刻です。I study from seven to eight every night.（毎晩7時から8時まで勉強する）、School is from eight thirty to three thirty.（学校は8時30分から3時30分まで）。',
    add: fresh(ln(30, 56, 290, 56, C.gray, false, 2), ci(60, 56, 5, undefined, C.blue, FILL.blue), ci(260, 56, 5, undefined, C.red, FILL.red), lb(60, 40, 'from seven', 11, C.blue, 'middle', true), lb(260, 40, 'to eight', 11, C.red, 'middle', true), ln(60, 56, 260, 56, C.main, false, 4), lb(160, 96, 'I study from seven to eight.', 12, C.ink, 'middle', true), lb(160, 120, 'School is from eight thirty to three thirty.', 10, C.gray), ...cap('from A to B ＝ AからBまで')),
  },
  {
    note: '一日の流れは、and（そして）、then（それから）、after that（そのあとで）でつなぎます。I get up at six, and then I wash my face. After that, I have breakfast at seven.',
    add: fresh(bx(10, 14, 300, 34, 'I get up at six,', C.blue, FILL.blue, 13), lb(160, 62, 'and then', 13, C.red, 'middle', true), bx(10, 76, 300, 34, 'I wash my face.', C.blue, FILL.blue, 13), lb(160, 122, 'After that, I have breakfast at seven.', 11, C.ink, 'middle', true), ...cap('and then ／ after that')),
  },
  {
    note: '❓途中で過去形が混ざってもよいでしょうか。→ よくありません。習慣を説明している間は、ずっと現在形で統一します。I usually get up at six. のあとで I went to school. と言うと、習慣の話がとぎれてしまいます。',
    add: fresh(bx(15, 14, 290, 34, 'I get up at six. I have breakfast at seven.', C.green, FILL.green, 11), bx(15, 58, 290, 34, 'I get up at six. I had breakfast … ×', C.red, FILL.red, 11), lb(160, 114, '習慣の説明は ずっと現在形', 12, C.ink, 'middle', true), ...cap('現在形で統一する', C.red)),
  },
  {
    note: 'まとめです。一日の行動は現在形で、時刻は at。場所のあとに時を置きます。頻度の副詞は動詞の前。「〜から〜まで」は from … to …。and then、after that でつなぎます。',
    add: sum3('現在形（he／she は -s）／ 時刻は at', '動詞 ＋ 場所 ＋ 時 ／ usually は動詞の前', 'from … to … ／ and then・after that', '日課を説明できる'),
  },
], '一日の生活を説明する');

// ───────── new20_j1_eigo_19 季節と学校行事の語彙 ─────────
const e19: DiagramFigure = show([
  {
    note: '運動会、文化祭、修学旅行。日本の学校行事を英語で説明するには、季節の名前と行事名が必要です。まず四季です。spring（春）、summer（夏）、fall（秋）、winter（冬）。',
    add: [bx(15, 14, 140, 44, 'spring（春）', C.green, FILL.green, 13), bx(165, 14, 140, 44, 'summer（夏）', C.red, FILL.red, 13), bx(15, 68, 140, 44, 'fall（秋）', C.main, FILL.warm, 13), bx(165, 68, 140, 44, 'winter（冬）', C.blue, FILL.blue, 13), lb(160, 128, '秋だけ もう1つの言い方がある', 11, C.gray), ...cap('四季の名前')],
  },
  {
    note: '❓秋に fall と autumn の2つがあるのは、なぜでしょう。→ 同じ意味で、fall は主にアメリカ英語、autumn は主にイギリス英語だからです。教科書では両方が紹介されます。どちらを使ってもかまいません。',
    add: fresh(bx(10, 24, 140, 44, 'fall', C.main, FILL.warm, 16), bx(170, 24, 140, 44, 'autumn', C.main, FILL.warm, 16), lb(80, 88, '主にアメリカ英語', 11, C.ink, 'middle', true), lb(240, 88, '主にイギリス英語', 11, C.ink, 'middle', true), lb(160, 118, '意味は同じ（秋）', 12, C.red, 'middle', true), ...cap('どちらも「秋」')),
  },
  {
    note: '❓「春に」は、どの前置詞を使うのでしょう。→ in です。季節は幅のある期間なので、時の前置詞で学んだ in をそのまま使います。Cherry blossoms bloom in spring.（桜は春に咲く）、We have a lot of rain in June.（6月には雨がたくさん降る）。',
    add: fresh(bx(15, 14, 290, 34, 'Cherry blossoms bloom in spring.', C.green, FILL.green, 12), bx(15, 58, 290, 34, 'We have a lot of rain in June.', C.blue, FILL.blue, 12), lb(160, 114, '幅のある期間 → in', 12, C.ink, 'middle', true), ...cap('季節・月 ＝ in', C.blue)),
  },
  {
    note: '好きな季節は What season do you like the best?（いちばん好きな季節は何ですか）とたずねます。答えは I like fall the best because the weather is nice.（天気がいいので秋がいちばん好きです）。because（〜なので）で理由を添えられます。',
    add: fresh(bx(10, 14, 300, 34, 'What season do you like the best?', C.blue, FILL.blue, 12), ar(160, 52, 160, 66, C.main), bx(10, 70, 300, 34, 'I like fall the best', C.green, FILL.green, 13), bx(10, 108, 300, 30, 'because the weather is nice.', C.red, FILL.red, 12), ...cap('because ＋ 理由')),
  },
  {
    note: '季節の話題に使う語です。cherry blossoms（桜）、rainy season（梅雨）、fireworks（花火）、leaves change color（紅葉する）、snow（雪）。これらを使うと、日本らしい季節を英語で説明できます。',
    add: fresh(bx(10, 14, 145, 30, 'cherry blossoms（桜）', C.green, FILL.green, 11), bx(165, 14, 145, 30, 'rainy season（梅雨）', C.blue, FILL.blue, 11), bx(10, 52, 145, 30, 'fireworks（花火）', C.red, FILL.red, 12), bx(165, 52, 145, 30, 'leaves change color', C.main, FILL.warm, 11), bx(10, 90, 300, 30, 'snow（雪）', C.blue, FILL.blue, 12), ...cap('季節の話題に使う語')),
  },
  {
    note: '学校行事の語です。sports day（運動会）、school trip（修学旅行）、school festival（文化祭）、chorus contest（合唱コンクール）、entrance ceremony（入学式）、graduation ceremony（卒業式）、summer vacation（夏休み）、winter vacation（冬休み）。',
    add: fresh(bx(5, 8, 150, 28, 'sports day（運動会）', C.main, FILL.warm, 10), bx(165, 8, 150, 28, 'school trip（修学旅行）', C.main, FILL.warm, 10), bx(5, 42, 150, 28, 'school festival（文化祭）', C.main, FILL.warm, 10), bx(165, 42, 150, 28, 'chorus contest（合唱）', C.main, FILL.warm, 10), bx(5, 76, 150, 28, 'entrance ceremony', C.blue, FILL.blue, 10), bx(165, 76, 150, 28, 'graduation ceremony', C.blue, FILL.blue, 10), bx(5, 110, 150, 28, 'summer vacation', C.green, FILL.green, 10), bx(165, 110, 150, 28, 'winter vacation', C.green, FILL.green, 10), ...cap('主な学校行事')),
  },
  {
    note: '❓「10月に運動会がある」は、どう言うのでしょう。→ We have sports day in October. です。月は幅のある期間なので in。行事を主語にして、Our school festival is in September.（文化祭は9月にある）と be動詞で言うこともできます。',
    add: fresh(bx(10, 14, 300, 34, 'We have sports day in October.', C.blue, FILL.blue, 13), bx(10, 58, 300, 34, 'Our school festival is in September.', C.blue, FILL.blue, 12), lb(160, 114, '月は in（We have 〜 ／ 〜 is の2通り）', 11, C.ink, 'middle', true), ...cap('行事 ＋ in ＋ 月')),
  },
  {
    note: '行事の感想も言えます。I\'m looking forward to the school trip.（修学旅行を楽しみにしている）、Sports day was a lot of fun.（運動会はとても楽しかった）。',
    add: fresh(bx(10, 20, 300, 36, "I'm looking forward to the school trip.", C.green, FILL.green, 11), bx(10, 68, 300, 36, 'Sports day was a lot of fun.', C.green, FILL.green, 12), ...cap('行事の感想')),
  },
  {
    note: '❓be looking forward to のあとに動詞を続けるときは、どうするのでしょう。→ -ing 形にします。この to は前置詞で、前置詞のあとには名詞か -ing 形しか置けないからです。I\'m looking forward to going. が正しく、to go は誤りです。',
    add: fresh(bx(15, 14, 290, 34, "○ looking forward to going", C.green, FILL.green, 13), bx(15, 58, 290, 34, '× looking forward to go', C.red, FILL.red, 13), lb(160, 114, 'この to は前置詞 → あとは名詞か -ing', 11, C.ink, 'middle', true), ...cap('前置詞のあとは -ing', C.red)),
  },
  {
    note: 'まとめです。四季は spring・summer・fall（autumn）・winter で、季節と月には in。行事は We have 〜 in 月. で言います。looking forward to のあとは名詞か -ing です。',
    add: sum3('spring・summer・fall／autumn・winter（季節は in）', 'We have sports day in October.', 'looking forward to ＋ 名詞か -ing', '季節と行事を話せる'),
  },
], '季節と学校行事');

// ───────── new20_j1_eigo_20 前置詞の総合演習 ─────────
const e20: DiagramFigure = show([
  {
    note: '場所の in・on・at と、時の in・on・at は、同じ物差しでつながっています。「範囲の広さ」です。広い枠は in、面は on、1つの点は at。場所と時を1つの表にまとめます。',
    add: [lb(90, 12, '場所', 12, C.ink, 'middle', true), lb(250, 12, '時', 12, C.ink, 'middle', true), bx(8, 24, 50, 30, 'in', C.blue, FILL.blue, 13), bx(64, 24, 120, 30, 'in Osaka', C.blue, FILL.blue, 11), bx(190, 24, 122, 30, 'in April', C.blue, FILL.blue, 11), bx(8, 62, 50, 30, 'on', C.main, FILL.warm, 13), bx(64, 62, 120, 30, 'on the desk', C.main, FILL.warm, 11), bx(190, 62, 122, 30, 'on Monday', C.main, FILL.warm, 11), bx(8, 100, 50, 30, 'at', C.red, FILL.red, 13), bx(64, 100, 120, 30, 'at the station', C.red, FILL.red, 11), bx(190, 100, 122, 30, 'at seven', C.red, FILL.red, 11), ...cap('空間・面・点 ＝ 場所も時も同じ')],
  },
  {
    note: '❓in は、場所でも時でも同じ考え方なのでしょうか。→ はい。場所の in Japan、in the box も、時の in 2026、in April、in summer も、「広がりのある枠の中」というイメージで共通しています。',
    add: fresh(bx(10, 10, 300, 140, undefined, C.gray, FILL.gray), bx(30, 30, 120, 90, undefined, C.blue, FILL.blue), lb(90, 74, '場所\nin the box', 11, C.blue, 'middle', true), bx(170, 30, 120, 90, undefined, C.blue, FILL.blue), lb(230, 74, '時\nin April', 11, C.blue, 'middle', true), ...cap('どちらも「枠の中」', C.blue)),
  },
  {
    note: '❓on は、時でも「面」なのでしょうか。→ カレンダーの1日を「日付という面」ととらえると、場所の on the desk と同じ発想でつながります。on the wall（壁の面）と on May 5th（5月5日という1マス）です。',
    add: fresh(ln(20, 80, 120, 80, C.gray, false, 3), bx(50, 56, 40, 24, 'book', C.main, FILL.warm, 10), lb(70, 100, 'on the desk', 11, C.ink, 'middle', true), bx(180, 36, 40, 28, 'Mon', C.gray, FILL.gray, 10), bx(224, 36, 40, 28, 'Tue', C.gray, FILL.gray, 10), bx(180, 68, 40, 28, '5', C.main, FILL.warm, 12), lb(222, 112, 'on May 5th（1マス）', 11, C.ink, 'middle', true), ...cap('面 ＝ 机の上／カレンダーの1マス', C.main)),
  },
  {
    note: '❓at は、時でも「点」なのでしょうか。→ はい。場所の at the station は地図の上の1点、時の at seven は時計の針が指す1点です。どちらも、これ以上分けられないピンポイントです。',
    add: fresh(ln(20, 60, 140, 60, C.gray, false, 2), ci(80, 60, 6, undefined, C.red, FILL.red), lb(80, 38, 'at the station', 11, C.red, 'middle', true), ...clock(240, 60, 36, 7, 0), lb(240, 112, 'at seven', 11, C.red, 'middle', true), ...cap('点 ＝ 地図の1点／時計の1点', C.red)),
  },
  {
    note: '❓同じ「角」でも、at と on で意味が変わるのは、なぜでしょう。→ at the corner は1つの地点として「角のところで」。on the corner は建物が角に接して建つ位置です。Turn left at the corner.（角を左に曲がって）、There is a bookstore on the corner.（角に本屋がある）。',
    add: fresh(ln(20, 80, 300, 80, C.gray, false, 3), ln(160, 20, 160, 140, C.gray, false, 3), ci(160, 80, 6, undefined, C.red, FILL.red), lb(100, 56, 'at the corner', 11, C.red, 'middle', true), bx(168, 88, 60, 30, 'bookstore', C.main, FILL.warm, 10), lb(200, 134, 'on the corner', 11, C.main, 'middle', true), ...cap('地点 ＝ at、接して建つ ＝ on')),
  },
  {
    note: '❓in bed と on the bed は、どうちがうのでしょう。→ in bed は、ベッドで寝ているという状態（就寝中）を表す決まった言い方です。on the bed は、物がベッドの上に置かれている状態です。My brother is still in bed. ／ There is a cat on the bed.',
    add: fresh(bx(15, 14, 290, 34, 'My brother is still in bed.（寝ている）', C.blue, FILL.blue, 11), bx(15, 58, 290, 34, 'There is a cat on the bed.（上にいる）', C.main, FILL.warm, 11), lb(160, 114, '状態の決まり文句 ／ 物の位置', 12, C.ink, 'middle', true), ...cap('in bed ＝ 寝ている状態')),
  },
  {
    note: '❓in time と on time は、どうちがうのでしょう。→ in time は「何かに間に合って」、on time は「時間どおりに」です。We got to the station in time for the train.（電車に間に合うように着いた）、The train arrived on time.（電車は時間どおりに着いた）。',
    add: fresh(bx(15, 14, 290, 34, 'in time ＝ 間に合って', C.blue, FILL.blue, 13), lb(160, 56, 'We got to the station in time for the train.', 10, C.gray), bx(15, 74, 290, 34, 'on time ＝ 時間どおりに', C.green, FILL.green, 13), lb(160, 116, 'The train arrived on time.', 11, C.gray), ...cap('セットで例文ごと覚える')),
  },
  {
    note: '前置詞を付けない場合のおさらいです。this、next、last、every が時の語の前に付くときは、in・on・at を付けません。this morning、next Sunday、last year、every day。',
    add: fresh(bx(10, 14, 145, 30, 'this morning', C.green, FILL.green, 12), bx(165, 14, 145, 30, 'next Sunday', C.green, FILL.green, 12), bx(10, 54, 145, 30, 'last year', C.green, FILL.green, 12), bx(165, 54, 145, 30, 'every day', C.green, FILL.green, 12), lb(160, 108, 'この4つの前には in／on／at なし', 12, C.red, 'middle', true), ...cap('this・next・last・every', C.red)),
  },
  {
    note: '問題を解くときは、3つを順に確かめます。①場所か時か。②広い範囲か、特定の1日か、1点か。③this・next・last・every が付いていないか。これでほとんど迷いません。',
    add: fresh(...stack(['① 場所か 時か', '② 範囲 ＝ 広い／1日／1点', '③ this・next・last・every は？'], 30, 260, 12, { h: 30, gap: 14, color: C.blue, fill: FILL.blue, size: 12 }).flat(), ...cap('3つを順に確かめる')),
  },
  {
    note: 'まとめです。in・on・at は、場所も時も「空間（広い枠）・面（1日）・点（1点）」の物差しで選びます。at the corner と on the corner、in bed と on the bed、in time と on time は、意味ごと覚えます。',
    add: sum3('in＝枠 ／ on＝面・1日 ／ at＝1点', 'at/on the corner、in bed/on the bed', 'in time/on time ／ this・next・last・every なし', '前置詞の総まとめ'),
  },
], '前置詞の総合まとめ');

// ───────── new20_j2_eigo_01 並べかえ①：過去進行形 ─────────
const e201: DiagramFigure = show([
  {
    note: '並べかえ問題です。（ I / was / studying / English ）at nine last night. 語がバラバラに出されます。いきなり動かさず、手順を決めて組み立てます。過去進行形の文は「まず be動詞を探す」のが出発点です。',
    add: [bx(10, 16, 60, 34, 'English', C.gray, FILL.gray, 11), bx(80, 16, 70, 34, 'studying', C.gray, FILL.gray, 11), bx(160, 16, 40, 34, 'I', C.gray, FILL.gray, 12), bx(210, 16, 50, 34, 'was', C.gray, FILL.gray, 12), lb(160, 76, '＋ at nine last night.', 12, C.ink, 'middle', true), lb(160, 104, '昨夜9時に英語を勉強していた', 11, C.gray), ...cap('バラバラの語を 文にする')],
  },
  {
    note: '❓なぜ、be動詞を最初に探すのでしょう。→ 過去進行形は〈主語 ＋ was／were ＋ 動詞の ing 形〉という骨組みで、be動詞がないと文として成り立たないからです。ing 形だけを見つけたら、「be動詞とセットか」を必ず確かめます。',
    add: fresh(bx(5, 20, 80, 38, '主語', C.blue, FILL.blue, 13), bx(92, 20, 90, 38, 'was／were', C.red, FILL.red, 12), bx(190, 20, 90, 38, '-ing 形', C.green, FILL.green, 13), lb(45, 78, 'I', 12, C.blue, 'middle', true), lb(137, 78, 'was', 12, C.red, 'middle', true), lb(235, 78, 'studying', 12, C.green, 'middle', true), ...cap('骨組み ＝ 主語 ＋ be動詞 ＋ -ing', C.red)),
  },
  {
    note: 'ステップ①は、主語を決めて文頭に置くことです。I、you、he、she、it、we、they、固有名詞の中から、日本語訳に合うものを選びます。この問題では「昨夜、私が」なので I です。',
    add: fresh(bx(10, 20, 40, 34, 'I', C.blue, FILL.blue, 14), bx(60, 20, 70, 34, '？', C.gray, FILL.gray, 14), bx(140, 20, 90, 34, '？', C.gray, FILL.gray, 14), lb(160, 84, '① 主語を文頭に', 14, C.blue, 'middle', true), ...cap('まず主語 I を置く', C.blue)),
  },
  {
    note: 'ステップ②は、主語に合う be動詞を選ぶことです。I は was、he・she・it や単数の名詞は was、you・we・they や複数の名詞は were。❓なぜ they は were なのでしょう。→ 複数の主語には複数用の were を使うからです。',
    add: fresh(bx(10, 14, 145, 34, 'I', C.blue, FILL.blue, 13), bx(165, 14, 145, 34, 'was', C.blue, FILL.blue, 13), bx(10, 54, 145, 34, 'he／she／it・単数名詞', C.blue, FILL.blue, 10), bx(165, 54, 145, 34, 'was', C.blue, FILL.blue, 13), bx(10, 94, 145, 34, 'you／we／they・複数', C.red, FILL.red, 11), bx(165, 94, 145, 34, 'were', C.red, FILL.red, 13), ...cap('主語に合わない方は 使わない')),
  },
  {
    note: 'ステップ③は、動詞を ing 形にして be動詞の直後に置くことです。They were playing soccer in the park then.（そのとき、彼らは公園でサッカーをしていた）。were と playing の順番を逆にするミスが多いので、be動詞は必ず ing 形の直前、と確かめます。',
    add: fresh(bx(5, 16, 60, 32, 'They', C.blue, FILL.blue, 12), bx(70, 16, 60, 32, 'were', C.red, FILL.red, 12), bx(135, 16, 90, 32, 'playing', C.green, FILL.green, 12), bx(230, 16, 85, 32, 'soccer …', C.gray, FILL.gray, 11), lb(100, 66, 'be動詞 → ing の順', 12, C.red, 'middle', true), bx(40, 86, 240, 30, '× They playing were …', C.red, FILL.red, 12), ...cap('be動詞は ing 形の直前')),
  },
  {
    note: '❓when を使う文では、どちらが過去進行形でしょうか。→ I was watching TV when my mother came home. 長く続いていた「背景」の動作が過去進行形、そこに割りこんだ一瞬の出来事が過去形です。テレビを見ていた間に、母が帰ってきたのです。',
    add: fresh(bx(20, 34, 220, 24, 'was watching TV（続いている）', C.blue, FILL.blue, 11), ln(200, 20, 200, 80, C.red, false, 3), lb(200, 94, 'my mother came home（一瞬）', 11, C.red, 'middle', true), lb(160, 122, '長い動作 ＝ 過去進行形、割りこみ ＝ 過去形', 11, C.ink, 'middle', true), ...cap('背景は -ing、割りこみは過去形')),
  },
  {
    note: 'while の文も同じです。While I was cooking dinner, the phone rang.（夕食を作っている間に、電話が鳴った）。while は「〜している間」なので、あとの節は必ず過去進行形です。while の節が文頭に来るときは、コンマを忘れずに付けます。',
    add: fresh(bx(5, 20, 190, 34, 'While I was cooking dinner,', C.blue, FILL.blue, 11), bx(200, 20, 115, 34, 'the phone rang.', C.red, FILL.red, 11), lb(100, 74, 'while のあと ＝ 過去進行形', 11, C.blue, 'middle', true), lb(257, 74, '過去形', 11, C.red, 'middle', true), lb(160, 108, '文頭の while 節のあとに「,」', 12, C.ink, 'middle', true), ...cap('while ＋ 過去進行形, 過去形')),
  },
  {
    note: '❓when のあとの節も過去進行形にしてよいでしょうか。→ いいえ。I was watching TV when my mother was coming home. は誤りです。割りこんだ一瞬の動作は過去形の came にします。例題の正しい文は It was raining when I left home. です。',
    add: fresh(bx(10, 14, 300, 30, '× … when my mother was coming home.', C.red, FILL.red, 11), bx(10, 52, 300, 30, '○ … when my mother came home.', C.green, FILL.green, 12), bx(10, 90, 300, 30, 'It was raining when I left home.', C.blue, FILL.blue, 12), ...cap('when の中は 過去形', C.red)),
  },
  {
    note: 'よくあるミスをまとめて確認します。①be動詞を忘れる（× I studying）。②was と were を主語に合わせない（× They was playing）。③when の中まで過去進行形にする。仕上げに、この3つを必ず見直します。',
    add: fresh(bx(10, 12, 300, 30, '① × I studying English.　→ I was studying', C.red, FILL.red, 10), bx(10, 48, 300, 30, '② × They was playing.　→ They were playing', C.red, FILL.red, 10), bx(10, 84, 300, 30, '③ × when … was coming　→ came', C.red, FILL.red, 11), ...cap('仕上げの3つのチェック', C.red)),
  },
  {
    note: 'まとめです。主語を決める → 合う was／were を選ぶ → ing 形を直後に置く、の3ステップ。when や while の文は、続いていた動作が過去進行形、割りこんだ出来事が過去形です。',
    add: sum3('① 主語 → ② was／were → ③ -ing 形', 'be動詞は ing 形の直前', '続く動作 -ing ／ 割りこみ 過去形', '過去進行形が組み立てられる'),
  },
], '並べかえ：過去進行形');

// ───────── new20_j2_eigo_02 並べかえ②：未来表現 ─────────
const e202: DiagramFigure = show([
  {
    note: '未来を表す言い方は、will と be going to の2種類です。並べかえでは、まず「どちらの形か」を選択肢から見抜きます。それぞれの骨組みを根っこから確かめます。',
    add: [bx(15, 20, 290, 38, 'will ：主語 ＋ will ＋ 動詞の原形', C.blue, FILL.blue, 12), bx(15, 68, 290, 38, 'be going to ：主語 ＋ be動詞 ＋ going to ＋ 原形', C.green, FILL.green, 11), ...cap('未来の言い方は2つ')],
  },
  {
    note: '❓will のあとは、なぜ必ず原形なのでしょう。→ will は助動詞で、助動詞のあとには動詞の原形を置くきまりだからです。I will help you.（手伝います）。helps や helping は使いません。',
    add: fresh(bx(10, 20, 60, 36, 'I', C.blue, FILL.blue, 13), bx(75, 20, 70, 36, 'will', C.red, FILL.red, 13), bx(150, 20, 70, 36, 'help', C.green, FILL.green, 13), bx(225, 20, 85, 36, 'you.', C.gray, FILL.gray, 13), lb(185, 76, '原形', 12, C.green, 'middle', true), bx(40, 96, 240, 30, '× I will helps ／ × I will helping', C.red, FILL.red, 11), ...cap('will のあとは 原形', C.red)),
  },
  {
    note: 'will の否定文は will not で、短くすると won\'t です。She will not come tomorrow. 疑問文は Will を文頭に出します。Will you help me? 答えにも will を使い、Yes, I will. ／ No, I won\'t. です。do や does は使いません。',
    add: fresh(bx(10, 12, 300, 30, 'She will not come tomorrow.（won\'t）', C.blue, FILL.blue, 11), bx(10, 48, 300, 30, 'Will you help me?', C.blue, FILL.blue, 13), bx(10, 84, 300, 30, "Yes, I will. ／ No, I won't.", C.green, FILL.green, 12), ...cap('疑問文は Will を文頭に')),
  },
  {
    note: '例題です。（ will / it / tomorrow / rain ）? 疑問文なので Will を文頭に出すだけで、あとの語順は肯定文と同じ〈主語 ＋ 動詞の原形〉です。Will it rain tomorrow?（明日は雨が降るでしょうか）。',
    add: fresh(bx(5, 20, 60, 34, 'Will', C.red, FILL.red, 13), bx(70, 20, 50, 34, 'it', C.blue, FILL.blue, 13), bx(125, 20, 60, 34, 'rain', C.green, FILL.green, 13), bx(190, 20, 100, 34, 'tomorrow?', C.gray, FILL.gray, 12), lb(160, 80, 'Will → 主語 → 原形', 13, C.ink, 'middle', true), ...cap('Will it rain tomorrow?')),
  },
  {
    note: 'be going to の文は、主語によって be動詞が変わります。I は am、he・she・it は is、you・we・they は are。We are going to visit Kyoto next month.（来月、京都を訪れる予定です）。主語が he や she のときに is にするのを忘れないようにします。',
    add: fresh(bx(10, 14, 145, 32, 'I → am', C.blue, FILL.blue, 13), bx(165, 14, 145, 32, 'he／she／it → is', C.blue, FILL.blue, 12), bx(10, 54, 300, 32, 'you／we／they → are', C.blue, FILL.blue, 13), lb(160, 108, 'We are going to visit Kyoto next month.', 11, C.ink, 'middle', true), ...cap('be動詞は 主語で決まる')),
  },
  {
    note: '❓going と to は、なぜ先にくっつけるのでしょう。→ going to は2語で1つの助動詞のようにはたらくかたまりだからです。（ is / going / she / to / buy ）a new bike. なら、まず going to をくっつけ、She is going to buy a new bike. と組み立てます。',
    add: fresh(bx(5, 14, 60, 32, 'She', C.blue, FILL.blue, 12), bx(70, 14, 50, 32, 'is', C.red, FILL.red, 12), bx(125, 14, 100, 32, 'going to', C.green, FILL.green, 12), bx(230, 14, 85, 32, 'buy', C.main, FILL.warm, 12), lb(175, 64, '2語で1かたまり', 11, C.green, 'middle', true), lb(160, 92, '… a new bike.', 12, C.ink, 'middle'), ...cap('going to は離さない', C.green)),
  },
  {
    note: 'be going to の否定文は、be動詞のあとに not を置きます。He is not going to join the club. 疑問文は be動詞を文頭に出します。Are you going to study abroad? 答えは Yes, I am. ／ No, I\'m not. です。be動詞を忘れて Going to you … とするのは誤りです。',
    add: fresh(bx(10, 12, 300, 30, 'He is not going to join the club.', C.blue, FILL.blue, 12), bx(10, 48, 300, 30, 'Are you going to study abroad?', C.blue, FILL.blue, 12), bx(10, 84, 300, 30, "Yes, I am. ／ No, I'm not.", C.green, FILL.green, 12), ...cap('疑問文は be動詞を文頭に')),
  },
  {
    note: '❓どんなときに will、どんなときに be going to を使うのでしょう。→ その場で決めた意志や単純な予測は will。電話が鳴って「私が出るよ」は I will answer it. 前もって決めていた予定や、目に見える根拠のある予測は be going to。雲を見て「雨が降りそう」は It is going to rain soon. です。',
    add: fresh(bx(10, 12, 145, 40, 'その場で決めた\nI will answer it.', C.blue, FILL.blue, 10), bx(165, 12, 145, 40, '前もっての予定・根拠\nI am going to visit Kyoto.', C.green, FILL.green, 9), lb(82, 70, 'will', 14, C.blue, 'middle', true), lb(238, 70, 'be going to', 14, C.green, 'middle', true), lb(160, 104, 'Look at those clouds! It is going to rain soon.', 10, C.ink, 'middle'), ...cap('その場 ＝ will、根拠 ＝ be going to', C.ink, 11)),
  },
  {
    note: '並べかえでの見分け方です。選択肢に going と to の両方があれば be going to の文、なければ will の文です。まずこの1点を確かめてから、残りの語を組み立てると最短です。',
    add: fresh(bx(15, 14, 290, 34, 'going と to がある → be going to', C.green, FILL.green, 13), bx(15, 58, 290, 34, 'ない → will の文', C.blue, FILL.blue, 13), lb(160, 114, '最初に この1点を確かめる', 12, C.ink, 'middle', true), ...cap('見分けてから 組み立てる')),
  },
  {
    note: 'まとめです。will の文は〈主語 ＋ will ＋ 原形〉、疑問文は Will を文頭に。be going to は〈主語 ＋ be動詞 ＋ going to ＋ 原形〉で、疑問文は be動詞を文頭に出します。going to は離しません。',
    add: sum3('will ＋ 原形／疑問 Will を文頭／否定 won\'t', 'be going to：am・is・are ＋ going to ＋ 原形', 'going と to は 1かたまり', '未来の並べかえができる'),
  },
], '並べかえ：未来表現');

// ───────── new20_j2_eigo_03 並べかえ③：助動詞 ─────────
const e203: DiagramFigure = show([
  {
    note: 'must、have to、should、may。4つとも、あとに動詞の原形を置く点は同じです。でも否定文の作り方や意味が違うので、並べかえでは違いを先につかんでおきます。',
    add: [bx(15, 14, 290, 34, '主語 ＋ 助動詞 ＋ 動詞の原形', C.blue, FILL.blue, 14), bx(10, 62, 70, 34, 'must', C.red, FILL.red, 12), bx(88, 62, 70, 34, 'have to', C.main, FILL.warm, 11), bx(166, 62, 70, 34, 'should', C.green, FILL.green, 12), bx(244, 62, 66, 34, 'may', C.purple, FILL.purple, 12), ...cap('4つとも あとは原形')],
  },
  {
    note: '❓must not と don\'t have to は、同じ意味でしょうか。→ まったく逆です。must not は「〜してはいけない」という禁止。don\'t have to は「〜する必要がない」という不必要です。You must not open the door.（開けてはいけない）、You don\'t have to hurry.（急がなくてよい）。',
    add: fresh(bx(10, 20, 145, 44, 'must not\n禁止', C.red, FILL.red, 12), bx(165, 20, 145, 44, "don't have to\n不必要", C.blue, FILL.blue, 12), lb(82, 84, 'してはいけない', 11, C.red, 'middle', true), lb(238, 84, 'しなくてよい', 11, C.blue, 'middle', true), lb(160, 114, '日本語訳を見て 先に選ぶ', 12, C.ink, 'middle', true), ...cap('意味が正反対', C.red)),
  },
  {
    note: '❓否定文の作り方が、なぜちがうのでしょう。→ must は助動詞のなかまなので、そのあとに not を付けます。have to は一般動詞のなかまなので、do／does を使って don\'t／doesn\'t have to とします。疑問文も同じで、Do you have to leave now? です。',
    add: fresh(bx(10, 14, 145, 34, 'must：助動詞のなかま', C.red, FILL.red, 11), bx(165, 14, 145, 34, 'have to：一般動詞のなかま', C.blue, FILL.blue, 10), bx(10, 56, 145, 34, 'must not ＋ 原形', C.red, FILL.red, 12), bx(165, 56, 145, 34, "don't have to ＋ 原形", C.blue, FILL.blue, 11), bx(10, 98, 300, 34, 'Do you have to leave now?', C.blue, FILL.blue, 12), ...cap('have to は do／does を使う')),
  },
  {
    note: '❓have to は、いつ has to になるのでしょう。→ 主語が3人称単数の he・she・it のときだけです。She has to get up early.（彼女は早く起きなければならない）。否定は She doesn\'t have to …、疑問は Does she have to …? です。',
    add: fresh(bx(15, 14, 290, 34, 'I／you／we／they → have to', C.blue, FILL.blue, 12), bx(15, 58, 290, 34, 'he／she／it → has to', C.red, FILL.red, 12), lb(160, 112, 'She has to get up early.', 12, C.ink, 'middle', true), ...cap('主語が3人称単数のとき has to', C.red)),
  },
  {
    note: '例題です。（ have / you / to / don\'t / go ）to school today. 日本語は「今日は学校に行く必要がない」なので、不必要の don\'t have to を選びます。You don\'t have to go to school today.',
    add: fresh(bx(5, 14, 60, 32, 'You', C.blue, FILL.blue, 12), bx(70, 14, 70, 32, "don't", C.red, FILL.red, 12), bx(145, 14, 60, 32, 'have', C.red, FILL.red, 12), bx(210, 14, 40, 32, 'to', C.red, FILL.red, 12), bx(255, 14, 55, 32, 'go', C.green, FILL.green, 12), lb(160, 66, '主語 ＋ don\'t have to ＋ 原形', 12, C.ink, 'middle', true), lb(160, 90, '… to school today.', 12, C.gray), ...cap('「必要がない」→ don\'t have to')),
  },
  {
    note: 'should は「〜したほうがよい」という助言です。You should see a doctor.（医者に診てもらったほうがよい）。否定は should not（shouldn\'t）で、You shouldn\'t eat too much.。疑問文は Should I call him now? のように Should を文頭に出します。',
    add: fresh(bx(10, 12, 300, 30, 'You should see a doctor.（助言）', C.green, FILL.green, 12), bx(10, 48, 300, 30, "You shouldn't eat too much.", C.green, FILL.green, 12), bx(10, 84, 300, 30, 'Should I call him now?', C.green, FILL.green, 12), ...cap('助言の should')),
  },
  {
    note: 'may は許可と推量の2つに使います。May I use your pen?（使ってもいいですか）は丁寧に許可を求める言い方で、答えは Yes, you may. ／ No, you may not. です。It may rain this afternoon. は「雨が降るかもしれない」という推量です。',
    add: fresh(bx(10, 12, 300, 30, 'May I use your pen?（許可を求める）', C.purple, FILL.purple, 12), bx(10, 48, 300, 30, 'Yes, you may. ／ No, you may not.', C.purple, FILL.purple, 12), bx(10, 84, 300, 30, 'It may rain this afternoon.（推量）', C.blue, FILL.blue, 12), ...cap('may ＝ 許可・推量')),
  },
  {
    note: '❓May で始まる疑問文は、どう組み立てるのでしょう。→ 「May I 〜?」の形がとても多いので、May と I がそろっていたら先に文頭へ置きます。（ I / may / open / the window ）? は May I open the window?（窓を開けてもいいですか）です。',
    add: fresh(bx(5, 20, 60, 34, 'May', C.purple, FILL.purple, 13), bx(70, 20, 40, 34, 'I', C.blue, FILL.blue, 13), bx(115, 20, 70, 34, 'open', C.green, FILL.green, 13), bx(190, 20, 120, 34, 'the window?', C.gray, FILL.gray, 12), lb(160, 80, 'May ＋ I ＋ 原形 …?', 13, C.ink, 'middle', true), ...cap('May と I を先に文頭へ', C.purple)),
  },
  {
    note: 'まとめです。must・should・may は〈助動詞 ＋ 原形〉。have to は一般動詞のなかまで do／does を使い、3人称単数は has to。must not は禁止、don\'t have to は不必要で、意味が正反対です。',
    add: sum3('must／should／may ＋ 原形', 'have to は do／does ・ he／she は has to', 'must not ＝ 禁止 ／ don\'t have to ＝ 不必要', '助動詞の並べかえができる'),
  },
], '並べかえ：助動詞');

export const XF_KEJ_FIGURES: Record<string, DiagramFigure> = {
  'xf_new20_j1_eigo_03': e03,
  'xf_new20_j1_eigo_04': e04,
  'xf_new20_j1_eigo_05': e05,
  'xf_new20_j1_eigo_06': e06,
  'xf_new20_j1_eigo_07': e07,
  'xf_new20_j1_eigo_08': e08,
  'xf_new20_j1_eigo_09': e09,
  'xf_new20_j1_eigo_10': e10,
  'xf_new20_j1_eigo_11': e11,
  'xf_new20_j1_eigo_12': e12,
  'xf_new20_j1_eigo_13': e13,
  'xf_new20_j1_eigo_14': e14,
  'xf_new20_j1_eigo_15': e15,
  'xf_new20_j1_eigo_16': e16,
  'xf_new20_j1_eigo_17': e17,
  'xf_new20_j1_eigo_18': e18,
  'xf_new20_j1_eigo_19': e19,
  'xf_new20_j1_eigo_20': e20,
  'xf_new20_j2_eigo_01': e201,
  'xf_new20_j2_eigo_02': e202,
  'xf_new20_j2_eigo_03': e203,
};

export const XF_KEJ_SECTIONS: Record<string, string> = {
  'new20_j1_eigo_03#0': 'xf_new20_j1_eigo_03',
  'new20_j1_eigo_04#0': 'xf_new20_j1_eigo_04',
  'new20_j1_eigo_05#0': 'xf_new20_j1_eigo_05',
  'new20_j1_eigo_06#0': 'xf_new20_j1_eigo_06',
  'new20_j1_eigo_07#0': 'xf_new20_j1_eigo_07',
  'new20_j1_eigo_08#0': 'xf_new20_j1_eigo_08',
  'new20_j1_eigo_09#0': 'xf_new20_j1_eigo_09',
  'new20_j1_eigo_10#0': 'xf_new20_j1_eigo_10',
  'new20_j1_eigo_11#0': 'xf_new20_j1_eigo_11',
  'new20_j1_eigo_12#0': 'xf_new20_j1_eigo_12',
  'new20_j1_eigo_13#0': 'xf_new20_j1_eigo_13',
  'new20_j1_eigo_14#0': 'xf_new20_j1_eigo_14',
  'new20_j1_eigo_15#0': 'xf_new20_j1_eigo_15',
  'new20_j1_eigo_16#0': 'xf_new20_j1_eigo_16',
  'new20_j1_eigo_17#0': 'xf_new20_j1_eigo_17',
  'new20_j1_eigo_18#0': 'xf_new20_j1_eigo_18',
  'new20_j1_eigo_19#0': 'xf_new20_j1_eigo_19',
  'new20_j1_eigo_20#0': 'xf_new20_j1_eigo_20',
  'new20_j2_eigo_01#0': 'xf_new20_j2_eigo_01',
  'new20_j2_eigo_02#0': 'xf_new20_j2_eigo_02',
  'new20_j2_eigo_03#0': 'xf_new20_j2_eigo_03',
};
