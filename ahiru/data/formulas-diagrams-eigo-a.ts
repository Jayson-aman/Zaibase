// 英語（中学・共通）formulas-eigo-tsuika.ts の 1番目〜13番目の項目の動く図解スライド。
// キーは項目の label（買い切りの識別キーと同じ）。「なぜ？」の連鎖で、9枚以上。
// 各スライドは、まっさらな画面（fresh）に 図（上）＋ 下の帯 を描き直す作りにしてある。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, show, fresh } from './diagram-kit';

type Col = 'main' | 'blue' | 'green' | 'red' | 'purple' | 'gray';
const FL: Record<Col, string> = { main: FILL.warm, blue: FILL.blue, green: FILL.green, red: FILL.red, purple: FILL.purple, gray: FILL.gray };

/** 色つきの箱 */
const b = (x: number, y: number, w: number, h: number, t: string, col: Col = 'main', size = 12): DiagramElement => bx(x, y, w, h, t, C[col], FL[col], size);
/** 色つきの矢印 */
const a = (x1: number, y1: number, x2: number, y2: number, col: Col = 'main'): DiagramElement => ar(x1, y1, x2, y2, C[col]);
/** 文字 */
const t = (x: number, y: number, text: string, col: Col | 'ink' = 'ink', size = 12, anchor: 'start' | 'middle' | 'end' = 'middle', bold = false): DiagramElement =>
  lb(x, y, text, size, col === 'ink' ? C.ink : C[col], anchor, bold);
/** 変身：左の箱 → 右の箱 */
const row = (y: number, from: string, to: string, col: Col = 'main', h = 26): DiagramElement[] => [b(16, y, 122, h, from, 'gray', 13), a(140, y + h / 2, 178, y + h / 2, col), b(180, y, 124, h, to, col, 13)];
/** 横に並ぶ箱 n 個 */
const chips = (y: number, texts: string[], col: Col = 'main', h = 30, size = 12, colors?: Col[]): DiagramElement[] => {
  const n = texts.length;
  const gap = 6;
  const w = (300 - gap * (n - 1)) / n;
  return texts.map((s, i) => b(10 + i * (w + gap), y, w, h, s, colors?.[i] ?? col, size));
};
/** 下の帯：大きな一言（と、その下の小さな補足） */
const bt = (main: string, sub?: string, col: Col = 'green', size = 14): DiagramElement[] => [
  b(14, 160, 292, 36, main, col, size),
  ...(sub ? [t(160, 214, sub, 'gray', 11)] : []),
];
/** 1枚のスライド */
const sl = (note: string, top: DiagramElement[], bottom: DiagramElement[] = []) => ({ note, add: fresh(...top, ...bottom) });

// ── 時計（時刻の項目用）──
const clock = (h: number, m: number, cx = 160, cy = 72, r = 56): DiagramElement[] => {
  const ma = (m * 6 * Math.PI) / 180;
  const ha = (((h % 12) * 30 + m * 0.5) * Math.PI) / 180;
  return [
    ci(cx, cy, r, undefined, C.gray, FILL.warm),
    t(cx, cy - r + 9, '12', 'gray', 10),
    t(cx + r - 9, cy + 1, '3', 'gray', 10),
    t(cx, cy + r - 8, '6', 'gray', 10),
    t(cx - r + 9, cy + 1, '9', 'gray', 10),
    ln(cx, cy, cx + (r - 28) * Math.sin(ha), cy - (r - 28) * Math.cos(ha), C.ink, false, 3.5),
    ln(cx, cy, cx + (r - 20) * Math.sin(ma), cy - (r - 20) * Math.cos(ma), C.red, false, 2),
  ];
};

// ─────────────────────────────────────────────
// 1. 名詞の複数形のつくり方
// ─────────────────────────────────────────────
const fukusu: DiagramFigure = show([
  sl(
    '2つ以上のものを言うときは、名詞のおわりを変えます。❓どう変える？→ふつうは、おわりに s をつけるだけです。',
    [t(160, 24, '1つ', 'gray', 12), t(160, 96, '2つ以上', 'gray', 12), ...row(40, 'a book', 'books', 'blue'), ...row(110, 'a dog', 'dogs', 'blue')],
    bt('ふつうの名詞 → s をつける', 'book → books ／ dog → dogs', 'blue'),
  ),
  sl(
    '❓では bus はどうでしょう。s だけつけると「buss」となり、s が2つ続いて言いにくくなります。❓なぜ言いにくい？→s の音で終わる言葉に、また s の音をつけるからです。',
    [b(30, 34, 100, 36, 'bus', 'gray', 18), t(160, 54, '＋', 'ink', 20), b(190, 34, 100, 36, 's', 'red', 18), t(160, 100, 'busの s と つけた s が ぶつかる', 'red', 12, 'middle', true)],
    bt('s の音のあとに s は言いにくい', '「バスス」と読みにくい', 'red'),
  ),
  sl(
    '❓どうすれば言いやすい？→間に「イ」の音を入れます。つまり es をつけます。bus → buses。おわりが s・x・ch・sh のときは、みんな同じ理由で es です。',
    [...row(14, 'bus', 'buses', 'green'), ...row(46, 'box', 'boxes', 'green'), ...row(78, 'watch', 'watches', 'green'), ...row(110, 'dish', 'dishes', 'green')],
    bt('s・x・ch・sh で終わる → es', '間に「イ」の音が入って言いやすくなる', 'green'),
  ),
  sl(
    '❓city はどうする？→city のおわりは、子音字の t ＋ y です。この形のときは、y をとって i に変え、es をつけます。city → cities、baby → babies。',
    [...row(30, 'city', 'cities', 'purple'), ...row(72, 'baby', 'babies', 'purple'), t(160, 126, 'y をとる → i にする → es をつける', 'purple', 12, 'middle', true)],
    bt('子音字＋y → y を ies に', '（子音字＝ a・i・u・e・o 以外の文字）', 'purple'),
  ),
  sl(
    '❓では boy も boies になる？→なりません。boy は o ＋ y で、母音字（ぼいんじ：a・i・u・e・o）＋ y です。oy でひとまとまりの音（オイ）なので、そのまま s をつけて boys です。',
    [...row(30, 'boy', 'boys', 'blue'), ...row(72, 'day', 'days', 'blue'), t(160, 126, 'oy・ay は変えない', 'blue', 13, 'middle', true)],
    bt('母音字＋y → そのまま s', 'cities と boys のちがいは、y の前の文字', 'blue'),
  ),
  sl(
    '❓f や fe で終わる名詞は？→f・fe を ves に変えます。knife → knives、leaf → leaves。おわりの音が「フ」から「ヴ」に変わるので、つづりも変わります。',
    [...row(30, 'knife', 'knives', 'green'), ...row(72, 'leaf', 'leaves', 'green'), t(160, 126, 'f・fe → ves', 'green', 14, 'middle', true)],
    bt('f・fe で終わる → ves', 'knife → knives ／ leaf → leaves', 'green'),
  ),
  sl(
    '❓どの規則にもあてはまらないものは？→形そのものが変わる名詞があります。これは規則ではなく、形を丸ごと覚えます。',
    [...row(10, 'man', 'men', 'red', 22), ...row(38, 'woman', 'women', 'red', 22), ...row(66, 'child', 'children', 'red', 22), ...row(94, 'foot', 'feet', 'red', 22), ...row(122, 'tooth', 'teeth', 'red', 22)],
    bt('形が変わる名詞は、そのまま覚える', undefined, 'red'),
  ),
  sl(
    '❓逆に、形が変わらない名詞は？→sheep（ひつじ）と fish（さかな）は、1ひきでも2ひきでも同じ形です。',
    [...row(34, 'a sheep', 'two sheep', 'purple'), ...row(78, 'a fish', 'three fish', 'purple'), t(160, 128, 's をつけない', 'purple', 13, 'middle', true)],
    bt('sheep・fish は同じ形', 'sheeps・fishes とは書かない', 'purple'),
  ),
  sl(
    '❓発音は？→複数形の s は、3つの音に読み分けます。books は「ス」、dogs は「ズ」、buses は「イズ」。まず、おわりの文字を見て形を決めます。',
    [b(10, 14, 300, 26, 'おわりを見る', 'gray', 13), a(60, 42, 60, 56), a(160, 42, 160, 56), a(260, 42, 260, 56), b(10, 58, 100, 30, 's・x・ch・sh\n→ es', 'green', 11), b(120, 58, 100, 30, '子音字＋y\n→ ies', 'purple', 11), b(230, 58, 80, 30, 'ふつう → s', 'blue', 11), t(160, 116, 'books「ス」 dogs「ズ」 buses「イズ」', 'ink', 12)],
    bt('形を決める → 発音もいっしょに覚える', undefined, 'blue'),
  ),
]);

// ─────────────────────────────────────────────
// 2. some・any・many・much・a lot of
// ─────────────────────────────────────────────
const someAny: DiagramFigure = show([
  sl(
    '「たくさん」を表す言葉は、名詞によって使い分けます。❓なぜ使い分ける？→名詞には、1つ2つと数えられるものと、数えられないものがあるからです。まず、その2つを見分けます。',
    [b(20, 20, 130, 40, '数えられる\nbooks・friends', 'blue', 13), b(170, 20, 130, 40, '数えられない\nwater・time・money', 'red', 12), ...[0, 1, 2].map((i) => ci(50 + i * 34, 96, 11, `${i + 1}`, C.blue, FILL.blue)), t(235, 96, '～ 量ではかる', 'red', 12)],
    bt('まず、数えられるかどうか', undefined, 'gray'),
  ),
  sl(
    '❓many はどんなときに使う？→数えられる名詞の「数の多さ」です。1つ2つと数えられるので、あとは複数形（books）になります。many books。',
    [...[0, 1, 2, 3, 4, 5].map((i) => ci(40 + i * 48, 50, 14, undefined, C.blue, FILL.blue)), b(60, 90, 200, 34, 'many books', 'blue', 16)],
    bt('many ＋ 数えられる名詞（複数形）', 'many friends ／ many students', 'blue'),
  ),
  sl(
    '❓much はどんなときに使う？→数えられない名詞の「量の多さ」です。水は1つ2つと数えず、コップに何ぱい分という量ではかります。だから much water で、s はつけません。',
    [b(60, 26, 200, 60, '', 'red'), b(70, 34, 180, 44, 'water', 'red', 16), b(60, 100, 200, 34, 'much water', 'red', 16)],
    bt('much ＋ 数えられない名詞', 'much money ／ much time', 'red'),
  ),
  sl(
    '❓どちらを使うか、どう決める？→名詞を見て、数えられるなら many、数えられないなら much です。many book のように、単数形につけるのはまちがいです。',
    [b(90, 10, 140, 28, '名詞を見る', 'gray', 13), a(120, 40, 70, 60), a(200, 40, 250, 60), b(10, 62, 130, 30, '数えられる？ はい', 'blue', 11), b(180, 62, 130, 30, 'いいえ', 'red', 12), a(75, 94, 75, 112), a(245, 94, 245, 112), b(10, 114, 130, 30, 'many ＋ 複数形', 'blue', 12), b(180, 114, 130, 30, 'much ＋ そのまま', 'red', 12)],
    bt('たずねるのは「数えられる？」', undefined, 'gray'),
  ),
  sl(
    '❓some と any は何がちがう？→some は「いくつか（ある）」、any は「ひとつも（ない）」「いくらか（あるか）」です。肯定文（ふつうの文）は some、否定文・疑問文は any を使います。',
    [b(16, 20, 138, 40, '肯定文\nI have some books.', 'green', 11), b(166, 20, 138, 40, '否定文・疑問文\nany', 'purple', 11), b(16, 76, 138, 34, 'ある、というはなし', 'green', 11), b(166, 76, 138, 34, 'ひとつもない？\nあるか聞く？', 'purple', 11)],
    bt('肯定文 → some ／ 否定・疑問 → any', 'Do you have any questions?', 'purple'),
  ),
  sl(
    '❓なぜ否定・疑問は any？→「ひとつでもあるか」を聞いたり、「ひとつもない」と言うときは、「どれでもよい・ひとつも」の意味の any が合うからです。',
    [b(20, 24, 130, 34, 'I do not have any pens.', 'purple', 10), b(170, 24, 130, 34, 'Do you have any pens?', 'purple', 10), t(160, 90, 'ひとつもない ／ ひとつでもある？', 'purple', 13, 'middle', true)],
    bt('ひとつでも → any', undefined, 'purple'),
  ),
  sl(
    '❓疑問文なのに some を使うことはある？→あります。Would you like some tea? のように、ものをすすめるときです。❓なぜ？→相手が「はい、ほしい」と答えることを期待しているので、「ある」の some を使います。',
    [b(20, 20, 280, 34, 'Would you like some tea?', 'green', 14), a(160, 56, 160, 76), b(60, 78, 200, 34, '「はい」を期待している', 'green', 12)],
    bt('すすめる・お願いする疑問文 → some', undefined, 'green'),
  ),
  sl(
    '❓迷ったときは？→a lot of が便利です。a lot of は数えられる名詞にも、数えられない名詞にも使えます。a lot of books も a lot of water も正しい言い方です。',
    [b(30, 20, 260, 34, 'a lot of', 'main', 18), a(100, 56, 80, 80), a(220, 56, 240, 80), b(20, 82, 130, 32, 'a lot of books', 'blue', 12), b(170, 82, 130, 32, 'a lot of water', 'red', 12)],
    bt('a lot of は 数・量のどちらにも使える', undefined, 'main'),
  ),
  sl(
    '練習 (1)：I do not have ( ) money. ❓money は数えられる？→数えられません。だから much です。(2) I have ( ) friends in Osaka. ❓friends は？→数えられる複数形なので many です。',
    [b(16, 14, 288, 30, 'I do not have ( much ) money.', 'red', 12), t(160, 58, 'money は数えられない → much', 'red', 12), b(16, 80, 288, 30, 'I have ( many ) friends in Osaka.', 'blue', 12), t(160, 124, 'friends は数えられる複数形 → many', 'blue', 12)],
    bt('数えられる？ を先に見る', undefined, 'green'),
  ),
]);

// ─────────────────────────────────────────────
// 3. this・that・these・those
// ─────────────────────────────────────────────
const youNear = () => [ci(40, 70, 20, 'わたし', C.ink, FILL.gray, 9)];
const thisThat: DiagramFigure = show([
  sl(
    '自分から見て、指すものが「近く」にあるか「遠く」にあるかで、言葉を選びます。❓なぜ分ける？→話しているものがどこにあるか、相手に伝えるためです。',
    [...youNear(), b(90, 54, 70, 32, '近く', 'blue', 13), b(230, 54, 70, 32, '遠く', 'red', 13), ln(40, 100, 265, 100, C.gray, true), t(160, 120, '自分からの きょり', 'gray', 11)],
    bt('近く か 遠く か', undefined, 'gray'),
  ),
  sl(
    '❓1つのものだと？→近くなら this、遠くなら that です。This is a pen.（これはペンです）／ That is a pen.（あれはペンです）。',
    [...youNear(), b(84, 54, 80, 32, 'this pen', 'blue', 13), t(124, 104, '近く', 'blue', 12), b(220, 54, 80, 32, 'that pen', 'red', 13), t(260, 104, '遠く', 'red', 12)],
    bt('1つ：近く this ／ 遠く that', undefined, 'gray'),
  ),
  sl(
    '❓ものが2つ以上になると？→形が変わります。this は these、that は those です。2つ以上のものを指すので、複数形の目印のようなものです。',
    [b(16, 14, 122, 28, 'this', 'blue', 14), a(140, 28, 178, 28, 'blue'), b(180, 14, 124, 28, 'these', 'blue', 14), b(16, 56, 122, 28, 'that', 'red', 14), a(140, 70, 178, 70, 'red'), b(180, 56, 124, 28, 'those', 'red', 14)],
    bt('2つ以上：these ／ those', undefined, 'purple'),
  ),
  sl(
    '❓4つをまとめるとどうなる？→「近いか遠いか」と「1つか2つ以上か」の表になります。ここを見れば、すぐ選べます。',
    [t(120, 16, '1つ', 'ink', 12, 'middle', true), t(232, 16, '2つ以上', 'ink', 12, 'middle', true), t(34, 52, '近く', 'blue', 12, 'middle', true), t(34, 100, '遠く', 'red', 12, 'middle', true), b(64, 30, 112, 40, 'this', 'blue', 16), b(184, 30, 112, 40, 'these', 'blue', 16), b(64, 80, 112, 40, 'that', 'red', 16), b(184, 80, 112, 40, 'those', 'red', 16)],
    bt('この表を頭に入れる', undefined, 'gray'),
  ),
  sl(
    '❓あとに続く be動詞はどうなる？→ものが複数なら are にします。This is 〜 に対して、These are 〜 です。名詞も books のように複数形にします。',
    [b(16, 24, 288, 34, 'This is a book.', 'blue', 15), b(16, 74, 288, 34, 'These are books.', 'blue', 15), t(160, 128, 'is → are ／ book → books', 'purple', 12, 'middle', true)],
    bt('複数のときは are と複数形', undefined, 'purple'),
  ),
  sl(
    '❓答えるときは？→this や that はそのまま使わず、it に言いかえます。Is this your bag? ─ Yes, it is. 「this」と聞かれても「it」で答えるのが決まりです。',
    [b(14, 20, 292, 32, 'Is this your bag?', 'blue', 14), a(160, 54, 160, 72), b(14, 74, 292, 32, 'Yes, it is.', 'green', 14), t(160, 128, 'this・that → it', 'green', 13, 'middle', true)],
    bt('1つ → it で答える', undefined, 'green'),
  ),
  sl(
    '❓複数のときは？→these や those は they に言いかえます。Are these your books? ─ Yes, they are. 聞かれた be動詞（are）で、そのまま答えます。',
    [b(14, 20, 292, 32, 'Are these your books?', 'blue', 14), a(160, 54, 160, 72), b(14, 74, 292, 32, 'Yes, they are.', 'green', 14), t(160, 128, 'these・those → they', 'green', 13, 'middle', true)],
    bt('2つ以上 → they で答える', undefined, 'green'),
  ),
  sl(
    '❓That is を短くできる？→できます。That is は That\'s と書けます。この「\'」は、i を省いたしるしです。',
    [b(30, 34, 110, 36, 'That is', 'red', 16), a(146, 52, 174, 52, 'red'), b(180, 34, 110, 36, "That's", 'red', 16), t(160, 100, 'i がなくなって、「’」をつける', 'red', 12, 'middle', true)],
    bt("That is → That's", undefined, 'red'),
  ),
  sl(
    '練習：What are those? ─ ボールが遠くにあります。❓those は1つ？→2つ以上です。だから they で答え、名詞も balls と複数形にします。They are balls.',
    [b(14, 20, 292, 32, 'What are those?', 'red', 14), a(160, 54, 160, 72), b(14, 74, 292, 32, 'They are balls.', 'green', 14), t(160, 128, 'those → they ／ ball → balls', 'green', 12, 'middle', true)],
    bt('遠くの2つ以上 → They are 〜.', undefined, 'green'),
  ),
]);

// ─────────────────────────────────────────────
// 4. 三人称単数現在形の s と es
// ─────────────────────────────────────────────
const sanjo: DiagramFigure = show([
  sl(
    '今のことを言う文で、動詞のおわりに s をつける場合があります。❓いつつける？→主語が he・she・it・単数の名詞（3人称単数）のときだけです。',
    [...chips(20, ['I', 'you', 'we', 'they'], 'gray', 30, 13), ...chips(70, ['he', 'she', 'it', 'Tom'], 'red', 30, 13), t(160, 122, '上の段は s なし ／ 下の段は s あり', 'ink', 12, 'middle', true)],
    bt('he・she・it・単数 → s をつける', undefined, 'red'),
  ),
  sl(
    '❓3人称単数とは？→「話している自分」と「聞いている相手」以外の、1人・1つのことです。Tom も my sister も this book も、これにあたります。',
    [b(20, 20, 130, 34, '1人称：I', 'gray', 12), b(170, 20, 130, 34, '2人称：you', 'gray', 12), b(20, 68, 280, 40, '3人称単数：he・she・it・\nTom・my sister', 'red', 12)],
    bt('自分・相手以外の1人（1つ）', undefined, 'gray'),
  ),
  sl(
    '❓どう変える？→ふつうの動詞は、そのまま s をつけます。like → likes、play → plays。この s は「主語が3人称単数だよ」というしるしです。',
    [...row(30, 'I like tennis.', 'He likes tennis.', 'blue'), ...row(76, 'You play golf.', 'She plays golf.', 'blue')],
    bt('ふつうの動詞 → s', 'like → likes ／ play → plays', 'blue'),
  ),
  sl(
    '❓wash に s だけだと？→washs では言いにくいので、es をつけます。おわりが s・x・ch・sh・o のときは es です。go → goes、do → does も同じです。',
    [...row(10, 'wash', 'washes', 'green', 22), ...row(38, 'teach', 'teaches', 'green', 22), ...row(66, 'go', 'goes', 'green', 22), ...row(94, 'do', 'does', 'green', 22)],
    bt('s・x・ch・sh・o で終わる → es', undefined, 'green'),
  ),
  sl(
    '❓study はどうする？→子音字（しいんじ）＋ y なので、y を i に変えて es をつけます。study → studies、try → tries。名詞の複数形と同じ規則です。',
    [...row(30, 'study', 'studies', 'purple'), ...row(72, 'try', 'tries', 'purple'), t(160, 126, 'y をとって i にして es', 'purple', 12, 'middle', true)],
    bt('子音字＋y → ies', undefined, 'purple'),
  ),
  sl(
    '❓母音字＋y のときは？→play の y は a と組んでいるので、そのまま s だけです。play → plays。studies と plays のちがいは、y の前の文字です。',
    [...row(30, 'play', 'plays', 'blue'), ...row(72, 'say', 'says', 'blue'), t(160, 126, 'ay・oy・ey は変えない', 'blue', 12, 'middle', true)],
    bt('母音字＋y → そのまま s', undefined, 'blue'),
  ),
  sl(
    '❓have だけは？→haves ではなく、has という特別な形になります。規則にあてはまらないので、そのまま覚えます。',
    [...row(34, 'I have a dog.', 'She has a dog.', 'red'), t(160, 86, 'haves ×', 'red', 14, 'middle', true), t(160, 108, 'has ○', 'green', 14, 'middle', true)],
    bt('have → has（特別）', undefined, 'red'),
  ),
  sl(
    '❓否定文や疑問文ではどうなる？→does が s の役目を引き受けます。だから、あとの動詞は s のない原形（play）にもどします。Ken does not play soccer.',
    [b(14, 16, 292, 30, 'Ken plays soccer.', 'gray', 13), a(160, 48, 160, 64), b(14, 66, 292, 30, 'Ken does not play soccer.', 'green', 13), t(160, 118, 'does が s を持っていった', 'green', 12, 'middle', true)],
    bt('does not のあとは原形', undefined, 'green'),
  ),
  sl(
    '❓では Ken does not plays soccer. は？→まちがいです。does がすでに s の役目をしているので、play にもどします。練習：My sister ( study ) English every day. → 主語は3人称単数なので studies です。',
    [b(14, 16, 292, 30, 'Ken does not plays soccer.', 'red', 12), t(160, 58, '×  plays は s が二重になる', 'red', 12), b(14, 78, 292, 30, 'My sister studies English every day.', 'green', 11), t(160, 122, '○  子音字＋y → ies', 'green', 12)],
    bt('does のあとに s をつけない', undefined, 'red'),
  ),
]);

// ─────────────────────────────────────────────
// 5. 「〜の」を表す 's のつけ方
// ─────────────────────────────────────────────
const possess: DiagramFigure = show([
  sl(
    '日本語では「トムの自転車」のように「の」で持ち主を表します。❓英語ではどうする？→持ち主の名前のうしろに \'s をつけます。',
    [b(16, 30, 140, 36, 'トムの 自転車', 'gray', 14), a(158, 48, 172, 48), b(174, 30, 132, 36, "Tom's bike", 'main', 14), t(160, 100, "持ち主 ＋ 's ＋ 持ち物", 'main', 14, 'middle', true)],
    bt("持ち主 ＋ 's ＋ 持ち物", undefined, 'main'),
  ),
  sl(
    "❓なぜ 's で持ち主がわかる？→日本語の「の」と同じ役目を、英語では名詞のうしろにくっつけた 's が果たしているからです。順番は、持ち主が先、持ち物があとです。",
    [b(16, 30, 80, 36, "Tom", 'blue', 14), t(112, 50, "'s", 'red', 20, 'middle', true), b(128, 30, 90, 36, 'bike', 'green', 14), t(56, 88, '持ち主', 'blue', 12), t(173, 88, '持ち物', 'green', 12)],
    bt('持ち主が先、持ち物があと', undefined, 'main'),
  ),
  sl(
    "❓持ち主がふつうの単数のときは？→そのまま 's です。my sister's bike（私の姉の自転車）。",
    [b(20, 30, 110, 36, 'my sister', 'blue', 14), t(160, 50, "＋ 's", 'red', 16, 'middle', true), b(190, 30, 110, 36, 'bike', 'green', 14), t(160, 100, "my sister's bike", 'main', 16, 'middle', true)],
    bt("単数 → 's", "my sister's bike", 'blue'),
  ),
  sl(
    "❓持ち主が2人以上で、もう s がついているときは？→students に 's をつけると students's になり、s が3つ続いて言いにくくなります。そこで、' だけをつけます。the students' room。",
    [b(20, 24, 110, 36, 'the students', 'blue', 13), t(160, 44, "＋ '", 'red', 18, 'middle', true), b(190, 24, 110, 36, 'room', 'green', 14), t(160, 92, "students's ×", 'red', 13, 'middle', true), t(160, 114, "students' ○", 'green', 14, 'middle', true)],
    bt("s で終わる複数 → ' だけ", "the students' classroom", 'green'),
  ),
  sl(
    "❓children は？→children は s で終わっていない複数形です。だから、ふつうの名詞と同じように 's をつけて children's toys になります。",
    [b(20, 24, 110, 36, 'children', 'purple', 14), t(160, 44, "＋ 's", 'red', 16, 'middle', true), b(190, 24, 110, 36, 'toys', 'green', 14), t(160, 96, "children' ×", 'red', 13, 'middle', true), t(160, 118, "children's ○", 'green', 14, 'middle', true)],
    bt("s で終わらない複数 → 's", "children's toys", 'purple'),
  ),
  sl(
    "❓3つの見分け方は？→持ち主のおわりの文字を見ます。単数は 's、s で終わる複数は '、s で終わらない複数は 's です。",
    [b(10, 14, 300, 26, 'おわりを見る', 'gray', 12), b(10, 52, 96, 44, "単数\nboy's", 'blue', 12), b(112, 52, 96, 44, "s で終わる複数\nboys'", 'green', 10), b(214, 52, 96, 44, "s なしの複数\nmen's", 'purple', 11)],
    bt("形は 's か ' の2つだけ", undefined, 'gray'),
  ),
  sl(
    "❓持ち物は、いつも書く？→持ち物が何かわかっているときは、はぶけます。This bag is Tom's. のように、Tom's だけで「トムのもの」の意味になります。",
    [b(16, 20, 288, 32, "This bag is Tom's bag.", 'gray', 13), a(160, 54, 160, 70), b(16, 72, 288, 32, "This bag is Tom's.", 'green', 14), t(160, 124, 'ダブる bag をはぶく', 'green', 12, 'middle', true)],
    bt("Tom's だけでも「トムのもの」", undefined, 'green'),
  ),
  sl(
    "❓「だれの」とたずねたいときは？→whose を使います。whose のすぐあとに持ち物の名詞を置きます。Whose umbrella is this?（これはだれのかさですか）",
    [b(16, 20, 288, 34, 'Whose umbrella is this?', 'red', 14), a(160, 56, 160, 74), b(16, 76, 288, 34, "It is Tom's.", 'green', 14)],
    bt('Whose ＋ 持ち物 ＋ be動詞 ＋ 主語？', undefined, 'red'),
  ),
  sl(
    "練習：「生徒たちの教室」は？❓students は s で終わる複数なので ' だけ。the students' classroom。「子どもたちのおもちゃ」は？❓children は s で終わらないので children's toys。",
    [b(16, 20, 288, 34, "the students' classroom", 'green', 14), t(160, 66, 's で終わる複数 → \'', 'green', 12), b(16, 84, 288, 34, "children's toys", 'purple', 14), t(160, 130, 's で終わらない複数 → \'s', 'purple', 12)],
    bt('おわりの文字で決まる', undefined, 'gray'),
  ),
]);

// ─────────────────────────────────────────────
// 6. who・what・which・whose の使い分け
// ─────────────────────────────────────────────
const whoWhat: DiagramFigure = show([
  sl(
    '疑問詞は、「答えにほしいもの」で選びます。❓何を基準にする？→答えが人か、ものか、選ぶのか、持ち主か、です。',
    [b(10, 20, 68, 44, 'who\nだれ', 'blue', 12), b(84, 20, 68, 44, 'what\n何', 'green', 12), b(158, 20, 74, 44, 'which\nどちら', 'purple', 12), b(238, 20, 72, 44, 'whose\nだれの', 'red', 12), t(44, 84, 'Who is he?', 'blue', 10), t(118, 84, 'What is it?', 'green', 10), t(195, 84, 'Which one?', 'purple', 10), t(274, 84, 'Whose bag?', 'red', 10)],
    bt('答えの内容で選ぶ', undefined, 'gray'),
  ),
  sl(
    '❓who はいつ使う？→答えが「人」のときです。Who is that boy? ─ He is my brother. 答えが人の説明なので、who です。',
    [b(16, 20, 288, 32, 'Who is that boy?', 'blue', 14), a(160, 54, 160, 72), b(16, 74, 288, 32, 'He is my brother.', 'blue', 14), t(160, 124, '答えは「人」', 'blue', 13, 'middle', true)],
    bt('人 → who', undefined, 'blue'),
  ),
  sl(
    '❓what はいつ使う？→答えが「もの・こと」のときで、選ぶはんいが決まっていないときです。What do you like? ─ I like tennis.',
    [b(16, 20, 288, 32, 'What do you like?', 'green', 14), a(160, 54, 160, 72), b(16, 74, 288, 32, 'I like tennis.', 'green', 14), t(160, 124, '答えは「もの・こと」', 'green', 13, 'middle', true)],
    bt('もの・こと → what', undefined, 'green'),
  ),
  sl(
    '❓which はいつ使う？→「AとBのどちら」のように、選ぶはんいが決まっているときです。Which do you like, tea or coffee? ❓なぜ what ではだめ？→はんいが決まっているときは「どちら」と聞くほうが自然だからです。',
    [b(50, 18, 100, 34, 'tea', 'purple', 14), b(170, 18, 100, 34, 'coffee', 'purple', 14), t(160, 76, 'この中から選ぶ', 'purple', 12, 'middle', true), b(16, 94, 288, 32, 'Which do you like, tea or coffee?', 'purple', 12)],
    bt('選ぶはんいがある → which', undefined, 'purple'),
  ),
  sl(
    '❓whose はいつ使う？→持ち主をたずねるときです。whose のあとに持ち物の名詞を続けます。Whose pen is this?（これはだれのペンですか）',
    [b(16, 20, 288, 32, 'Whose pen is this?', 'red', 14), a(160, 54, 160, 72), b(16, 74, 288, 32, "It is Ken's.", 'red', 14), t(160, 124, '答えは「持ち主」', 'red', 13, 'middle', true)],
    bt('持ち主 → whose ＋ 名詞', undefined, 'red'),
  ),
  sl(
    '❓疑問詞は文のどこに置く？→いつも文のいちばん先頭です。そのあとは、ふつうの疑問文の語順（do ＋ 主語 ＋ 動詞）で続けます。',
    [b(10, 36, 70, 36, 'What', 'green', 14), b(86, 36, 44, 36, 'do', 'gray', 14), b(136, 36, 54, 36, 'you', 'gray', 14), b(196, 36, 60, 36, 'like', 'gray', 14), t(160, 100, '先頭 → 疑問文の語順', 'ink', 12, 'middle', true)],
    bt('疑問詞は先頭、あとは疑問文の語順', undefined, 'gray'),
  ),
  sl(
    '❓迷ったら？→答えを思い浮かべます。「人」なら who、「持ち主」なら whose、「選ぶ」なら which、それ以外の「もの・こと」なら what です。',
    [b(80, 8, 160, 26, '答えは？', 'gray', 13), a(50, 36, 50, 56), a(120, 36, 120, 56), a(200, 36, 200, 56), a(270, 36, 270, 56), b(10, 58, 80, 34, '人', 'blue', 12), b(90, 58, 60, 34, 'もの・こと', 'green', 9), b(160, 58, 80, 34, '選ぶ', 'purple', 12), b(240, 58, 70, 34, '持ち主', 'red', 12), a(50, 94, 50, 110), a(120, 94, 120, 110), a(200, 94, 200, 110), a(270, 94, 270, 110), b(10, 112, 80, 28, 'who', 'blue', 13), b(90, 112, 60, 28, 'what', 'green', 13), b(160, 112, 80, 28, 'which', 'purple', 13), b(240, 112, 70, 28, 'whose', 'red', 13)],
    bt('答えを思い浮かべて選ぶ', undefined, 'gray'),
  ),
  sl(
    '練習 (1)：( ) is that boy? ─ He is my brother. ❓答えは人？→はい。だから Who です。',
    [b(16, 30, 288, 34, '( Who ) is that boy?', 'blue', 15), a(160, 66, 160, 84), b(16, 86, 288, 34, 'He is my brother.', 'blue', 14)],
    bt('答えは人 → Who', undefined, 'blue'),
  ),
  sl(
    '練習 (2)：「これはだれのペンですか」→ ❓持ち主？→はい。だから Whose pen is this? です。(3)：( ) do you like, tea or coffee? →選ぶので Which です。',
    [b(16, 20, 288, 32, 'Whose pen is this?', 'red', 14), t(160, 64, '持ち主 → whose ＋ pen', 'red', 12), b(16, 84, 288, 32, '( Which ) do you like, tea or coffee?', 'purple', 12), t(160, 128, '選ぶはんいがある → which', 'purple', 12)],
    bt('4つの使い分けをたしかめよう', undefined, 'green'),
  ),
]);

// ─────────────────────────────────────────────
// 7. when・where・why・how の使い分け
// ─────────────────────────────────────────────
const whenWhere: DiagramFigure = show([
  sl(
    '疑問詞は、知りたいことで選びます。❓4つの疑問詞は、それぞれ何を聞く？→when は時、where は場所、why は理由、how は方法や様子です。',
    [b(10, 20, 68, 44, 'when\nいつ', 'blue', 12), b(84, 20, 68, 44, 'where\nどこ', 'green', 12), b(158, 20, 68, 44, 'why\nなぜ', 'red', 12), b(232, 20, 78, 44, 'how\nどのように', 'purple', 11)],
    bt('答えの内容で選ぶ', undefined, 'gray'),
  ),
  sl(
    '❓when はどんなとき？→答えが「時」のときです。When is your birthday? ─ It is May 3. 答えが日付なので when です。',
    [b(16, 20, 288, 32, 'When is your birthday?', 'blue', 14), a(160, 54, 160, 72), b(16, 74, 288, 32, 'It is May 3.', 'blue', 14), t(160, 124, '答えは「時」', 'blue', 13, 'middle', true)],
    bt('時 → when', undefined, 'blue'),
  ),
  sl(
    '❓where はどんなとき？→答えが「場所」のときです。Where do you live? ─ In Kyoto. 答えの In Kyoto は場所なので where です。',
    [b(16, 20, 288, 32, 'Where do you live?', 'green', 14), a(160, 54, 160, 72), b(16, 74, 288, 32, 'In Kyoto.', 'green', 14), t(160, 124, '答えは「場所」', 'green', 13, 'middle', true)],
    bt('場所 → where', undefined, 'green'),
  ),
  sl(
    '❓why はどんなとき？→答えが「理由」のときです。Why are you late? ─ Because I missed the bus. ❓なぜ Because で答える？→「なぜなら〜だから」と理由を言う決まった言い方だからです。',
    [b(16, 20, 288, 32, 'Why are you late?', 'red', 14), a(160, 54, 160, 72), b(16, 74, 288, 32, 'Because I missed the bus.', 'red', 12), t(160, 124, '答えは「理由」', 'red', 13, 'middle', true)],
    bt('理由 → why （答えは Because 〜.）', undefined, 'red'),
  ),
  sl(
    '❓how はどんなとき？→答えが「方法・手段」のときです。How do you go to school? ─ I go to school by bus. 「どうやって行くか」を聞いています。',
    [b(16, 20, 288, 32, 'How do you go to school?', 'purple', 13), a(160, 54, 160, 72), b(16, 74, 288, 32, 'I go to school by bus.', 'purple', 13), t(160, 124, '答えは「方法」', 'purple', 13, 'middle', true)],
    bt('方法・手段 → how', undefined, 'purple'),
  ),
  sl(
    '❓how には、ほかの意味もある？→あります。How are you? は方法ではなく、「調子はどうですか」と様子をたずねています。だから I am fine. のように様子を答えます。',
    [b(16, 20, 288, 32, 'How are you?', 'purple', 14), a(160, 54, 160, 72), b(16, 74, 288, 32, 'I am fine, thank you.', 'purple', 13), t(160, 124, '答えは「様子」', 'purple', 13, 'middle', true)],
    bt('how ＝ 方法 と 様子 の2つ', undefined, 'purple'),
  ),
  sl(
    '❓how が方法か様子か、どう見分ける？→答えを見ます。by bus のような手段なら方法、fine のような調子なら様子です。',
    [b(80, 8, 160, 26, 'how の答えは？', 'gray', 13), a(100, 36, 70, 58), a(220, 36, 250, 58), b(10, 60, 140, 32, 'by bus・on foot', 'purple', 12), b(170, 60, 140, 32, 'fine・good', 'purple', 12), a(80, 94, 80, 110), a(240, 94, 240, 110), b(10, 112, 140, 28, '方法', 'blue', 13), b(170, 112, 140, 28, '様子', 'green', 13)],
    bt('答えを見て、意味を決める', undefined, 'gray'),
  ),
  sl(
    '❓疑問詞のあとの語順は？→どの疑問詞も、文のいちばん先頭に置いて、そのあとは疑問文の語順です。Where do you live? ／ Why are you late?',
    [b(16, 24, 288, 34, 'Where do you live?', 'green', 14), b(16, 74, 288, 34, 'Why are you late?', 'red', 14), t(160, 128, '疑問詞 ＋ do（are）＋ 主語 ＋ …', 'ink', 12, 'middle', true)],
    bt('疑問詞 ＋ 疑問文の語順', undefined, 'gray'),
  ),
  sl(
    'まとめ：答えの言葉から、疑問詞がわかります。「In Kyoto」→ where、「Because 〜」→ why、「by bus」→ how、「May 3」→ when です。',
    [b(10, 14, 140, 26, 'In Kyoto → where', 'green', 12), b(170, 14, 140, 26, 'Because 〜 → why', 'red', 12), b(10, 52, 140, 26, 'by bus → how', 'purple', 12), b(170, 52, 140, 26, 'May 3 → when', 'blue', 12), t(160, 108, '答えから疑問詞をたしかめる', 'ink', 13, 'middle', true)],
    bt('答え → 疑問詞', undefined, 'green'),
  ),
]);

// ─────────────────────────────────────────────
// 8. how ＋ 形容詞
// ─────────────────────────────────────────────
const howAdj: DiagramFigure = show([
  sl(
    'how のあとに形容詞や副詞をつけると、「どれくらい〜」と程度をたずねられます。❓なぜ形容詞を足す？→たずねたい内容（数・ねだん・長さなど）を、そのあとの言葉で決めるからです。',
    [b(20, 30, 70, 36, 'How', 'purple', 16), t(100, 48, '＋', 'ink', 18), b(114, 30, 100, 36, '形容詞', 'blue', 14), a(220, 48, 240, 48), b(244, 30, 66, 36, 'どれくらい', 'green', 11)],
    bt('How ＋ 形容詞（副詞）', undefined, 'purple'),
  ),
  sl(
    '❓数をたずねるには？→How many です。How many books do you have?（本を何冊持っていますか）。many は「数の多さ」なので、答えは数です。',
    [...[0, 1, 2, 3, 4].map((i) => b(20 + i * 58, 24, 50, 36, 'book', 'blue', 11)), b(16, 84, 288, 34, 'How many books do you have?', 'blue', 13)],
    bt('数 → How many', undefined, 'blue'),
  ),
  sl(
    '❓なぜ How many のあとは複数形？→数をたずねるので、答えは2つ以上を想定しているからです。How many book は誤りで、How many books です。',
    [b(16, 24, 288, 34, 'How many book ×', 'red', 14), b(16, 74, 288, 34, 'How many books ○', 'green', 14)],
    bt('How many ＋ 名詞の複数形', undefined, 'green'),
  ),
  sl(
    '❓量やねだんは？→How much です。How much is this book?（この本はいくらですか）。much は「量の多さ」で、ねだんも「お金の量」だから much を使います。',
    [b(16, 24, 288, 34, 'How much is this book?', 'red', 14), a(160, 60, 160, 78), b(16, 80, 288, 34, 'It is 800 yen.', 'red', 14)],
    bt('量・ねだん → How much', undefined, 'red'),
  ),
  sl(
    '❓ほかにもある？→長さ・期間は How long、年れいは How old、高さ・身長は How tall です。たずねたいものに合う形容詞を、how のあとに置きます。',
    [b(10, 20, 96, 34, 'How long\n長さ・期間', 'green', 11), b(112, 20, 96, 34, 'How old\n年れい', 'blue', 11), b(214, 20, 96, 34, 'How tall\n高さ・身長', 'purple', 11), t(160, 90, 'long ／ old ／ tall は、そのまま形容詞', 'ink', 12, 'middle', true)],
    bt('形容詞の意味 ＝ たずねる内容', undefined, 'gray'),
  ),
  sl(
    '❓距離をたずねるには？→How far です。How far is it to the station? ❓この it は何？→「それ」ではなく、距離や時を言うときの決まった主語です。日本語にはしません。答えも It is 2 km. と it で始めます。',
    [b(16, 20, 288, 32, 'How far is it to the station?', 'main', 12), a(160, 54, 160, 72), b(16, 74, 288, 32, 'It is 2 km.', 'main', 14), t(160, 124, 'it は日本語にしない主語', 'gray', 12)],
    bt('距離 → How far', undefined, 'main'),
  ),
  sl(
    '❓回数（どれくらいの頻度）は？→How often です。How often do you play tennis? ─ Twice a week. often は「しばしば」なので、その程度をたずねます。',
    [b(16, 20, 288, 32, 'How often do you play tennis?', 'purple', 12), a(160, 54, 160, 72), b(16, 74, 288, 32, 'Twice a week.', 'purple', 14)],
    bt('回数・頻度 → How often', undefined, 'purple'),
  ),
  sl(
    '❓どう選ぶ？→「答えに、どんな単位がほしいか」を考えます。数（個・人）なら many、ねだんや量なら much、長さは long、年れいは old、距離は far、回数は often です。',
    [b(10, 12, 96, 28, '個・人 → many', 'blue', 11), b(112, 12, 96, 28, '円・量 → much', 'red', 11), b(214, 12, 96, 28, '長さ → long', 'green', 11), b(10, 50, 96, 28, '年れい → old', 'blue', 11), b(112, 50, 96, 28, '距離 → far', 'main', 11), b(214, 50, 96, 28, '回数 → often', 'purple', 11), t(160, 106, '単位を考える', 'ink', 13, 'middle', true)],
    bt('答えの単位で選ぶ', undefined, 'gray'),
  ),
  sl(
    '❓そのあとの語順は？→ふつうの疑問文と同じです。How many books do you have? ／ How much is this pen? 練習：「この本はいくらですか」→ How much is this book? です。',
    [b(16, 20, 288, 32, 'How many books do you have?', 'blue', 13), b(16, 66, 288, 32, 'How much is this book?', 'red', 13), t(160, 122, 'How ＋ 形容詞 ＋ 疑問文の語順', 'ink', 12, 'middle', true)],
    bt('先頭に How ＋ 形容詞、あとは疑問文', undefined, 'green'),
  ),
]);

// ─────────────────────────────────────────────
// 9. 疑問詞が主語になる疑問文
// ─────────────────────────────────────────────
const whoSubj: DiagramFigure = show([
  sl(
    'Who plays tennis? と Who do you like? は、どちらも who で始まりますが、作り方がちがいます。❓何がちがう？→who が主語かどうかです。',
    [b(16, 24, 288, 34, 'Who plays tennis?', 'green', 14), b(16, 74, 288, 34, 'Who do you like?', 'blue', 14), t(160, 128, '2つの作り方がある', 'ink', 12, 'middle', true)],
    bt('who が主語か、どうか', undefined, 'gray'),
  ),
  sl(
    '❓まず、ふつうの文を見ます。Ken plays tennis.（ケンはテニスをします）。この文で主語は Ken、動詞は plays です。',
    [b(16, 40, 90, 36, 'Ken', 'blue', 15), b(112, 40, 90, 36, 'plays', 'gray', 15), b(208, 40, 96, 36, 'tennis.', 'gray', 15), t(61, 96, '主語', 'blue', 12, 'middle', true), t(157, 96, '動詞', 'gray', 12)],
    bt('主語 ＋ 動詞 ＋ …', undefined, 'gray'),
  ),
  sl(
    '❓「だれがテニスをしますか」と聞くには？→主語の Ken を who に入れかえるだけです。語順はそのままで、Who plays tennis? になります。',
    [b(16, 30, 90, 36, 'Ken', 'blue', 15), b(112, 30, 90, 36, 'plays', 'gray', 15), b(208, 30, 96, 36, 'tennis.', 'gray', 15), a(61, 68, 61, 86), b(16, 88, 90, 36, 'Who', 'green', 15), b(112, 88, 90, 36, 'plays', 'gray', 15), b(208, 88, 96, 36, 'tennis?', 'gray', 15)],
    bt('主語を who に入れかえる', undefined, 'green'),
  ),
  sl(
    '❓なぜ do や does を使わない？→do は、主語が別にあるときに、疑問文の語順を作るために使います。who は主語そのものなので、語順を入れかえる必要がないからです。',
    [b(16, 24, 288, 34, 'Who does play tennis? ×', 'red', 13), b(16, 74, 288, 34, 'Who plays tennis? ○', 'green', 14), t(160, 128, 'do・does・did は使わない', 'red', 12, 'middle', true)],
    bt('疑問詞が主語 → do・does・did なし', undefined, 'red'),
  ),
  sl(
    '❓plays の s は？→who は3人称単数として扱うので、現在の動詞には s をつけます。Who plays tennis? の s は、そのためです。Who uses this room?（だれがこの部屋を使いますか）。',
    [b(16, 24, 120, 34, 'Who', 'green', 15), a(140, 41, 168, 41), b(172, 24, 132, 34, '3人称単数', 'red', 13), b(16, 76, 288, 34, 'Who uses this room?', 'green', 14), t(160, 128, 'use → uses', 'green', 12)],
    bt('who ＋ 動詞（s つき）', undefined, 'green'),
  ),
  sl(
    '❓過去の文は？→動詞を過去形にします。did は使いません。Who broke this window?（だれがこの窓をわりましたか）。break の過去形は broke です。',
    [b(16, 24, 288, 34, 'Who broke this window?', 'green', 14), a(160, 60, 160, 78), b(16, 80, 288, 34, 'Ken broke it.', 'green', 14), t(160, 132, 'break → broke', 'gray', 12)],
    bt('過去のことなら、動詞を過去形に', undefined, 'green'),
  ),
  sl(
    '❓では Who do you like? は？→この who は「好きな相手」で、目的語です。主語は別に you があります。主語が別にあるので、do ＋ you ＋ like の疑問文の語順にします。',
    [b(16, 30, 60, 34, 'Who', 'blue', 14), b(82, 30, 50, 34, 'do', 'gray', 14), b(138, 30, 64, 34, 'you', 'blue', 14), b(208, 30, 96, 34, 'like?', 'gray', 14), t(170, 84, '主語は you', 'blue', 13, 'middle', true), a(50, 66, 50, 82), t(50, 96, '好きな相手', 'blue', 11)],
    bt('主語が別にある → do を使う', undefined, 'blue'),
  ),
  sl(
    '❓見分け方は？→who のすぐあとを見ます。動詞が来れば who が主語（do なし）、you などの主語が来れば do を使う形です。',
    [b(70, 8, 180, 26, 'who のすぐあとは？', 'gray', 13), a(110, 36, 80, 58), a(210, 36, 240, 58), b(10, 60, 140, 32, '動詞（plays）', 'green', 12), b(170, 60, 140, 32, '主語（you）', 'blue', 12), a(80, 94, 80, 110), a(240, 94, 240, 110), b(10, 112, 140, 28, 'do を使わない', 'green', 12), b(170, 112, 140, 28, 'do を使う', 'blue', 12)],
    bt('who のあとを見て、決める', undefined, 'gray'),
  ),
  sl(
    '練習：Who does play tennis? →誤りです。❓なぜ？→who が主語なのに does を入れているからです。does をとって Who plays tennis? に直します。',
    [b(16, 24, 288, 34, 'Who does play tennis?', 'red', 14), a(160, 60, 160, 78), b(16, 80, 288, 34, 'Who plays tennis?', 'green', 14), t(160, 132, 'does をとって、play → plays', 'green', 12)],
    bt('does をとり、動詞に s', undefined, 'green'),
  ),
]);

// ─────────────────────────────────────────────
// 10. 選択疑問文の作り方と答え方
// ─────────────────────────────────────────────
const sentaku: DiagramFigure = show([
  sl(
    '「AとBのどちらですか」とたずねる文を、選択疑問文といいます。❓どうやって作る？→まず、ふつうの疑問文を用意します。Do you like tea?',
    [b(16, 40, 288, 40, 'Do you like tea?', 'gray', 16), t(160, 110, 'まず、ふつうの疑問文', 'ink', 13, 'middle', true)],
    bt('① ふつうの疑問文を作る', undefined, 'gray'),
  ),
  sl(
    '❓次はどうする？→うしろに「A or B」の形で、選ぶものを足します。tea のあとに or coffee を足して、Do you like tea or coffee? になります。',
    [b(12, 30, 136, 40, 'Do you like tea', 'gray', 13), t(162, 50, 'or', 'red', 18, 'middle', true), b(178, 30, 128, 40, 'coffee?', 'blue', 15), t(160, 96, 'or B を足す', 'red', 13, 'middle', true)],
    bt('② うしろに or B を足す', undefined, 'blue'),
  ),
  sl(
    '❓この文に Yes と答えたらどうなる？→Yes, I do. では、tea と coffee のどちらが好きかわかりません。❓なぜ？→聞かれているのは「はい・いいえ」ではなく「どちらか」だからです。',
    [b(16, 20, 288, 32, 'Do you like tea or coffee?', 'blue', 14), a(160, 54, 160, 72), b(16, 74, 288, 32, 'Yes, I do.  ×', 'red', 14), t(160, 124, 'どちらか、わからない', 'red', 12, 'middle', true)],
    bt('Yes・No では答えない', undefined, 'red'),
  ),
  sl(
    '❓どう答える？→選んだほうを、文の形で答えます。I like tea.（お茶が好きです）。これで、どちらを選んだかがはっきり伝わります。',
    [b(16, 20, 288, 32, 'Do you like tea or coffee?', 'blue', 14), a(160, 54, 160, 72), b(16, 74, 288, 32, 'I like tea.  ○', 'green', 14), t(160, 124, '選んだほうを言う', 'green', 13, 'middle', true)],
    bt('選んだほうを、文で答える', undefined, 'green'),
  ),
  sl(
    '❓be動詞の文でも同じ？→同じです。Is he a teacher or a doctor? に Yes, he is. と答えてもだめです。He is a doctor. のように、どちらかを選んで言います。',
    [b(16, 20, 288, 32, 'Is he a teacher or a doctor?', 'blue', 13), b(16, 66, 140, 30, 'Yes, he is. ×', 'red', 12), b(164, 66, 140, 30, 'He is a doctor. ○', 'green', 12)],
    bt('be動詞の文も、選んで答える', undefined, 'green'),
  ),
  sl(
    '❓もっと自然に聞く方法は？→Which を使います。Which do you like, tea or coffee? ❓なぜ which？→選ぶはんいが tea と coffee に決まっているので、「どちら」の which が合います。',
    [b(16, 20, 288, 34, 'Which do you like, tea or coffee?', 'purple', 13), a(160, 56, 160, 74), b(16, 76, 288, 34, 'I like tea.', 'green', 14)],
    bt('Which ＋ 疑問文、A or B', undefined, 'purple'),
  ),
  sl(
    '❓選ぶものが3つ以上のときは？→A, B, or C のように、あいだをコンマで区切り、最後の前だけに or を置きます。Do you like tea, coffee, or milk?',
    [b(20, 30, 70, 36, 'tea', 'blue', 14), t(98, 52, ',', 'ink', 18), b(108, 30, 84, 36, 'coffee', 'blue', 14), t(212, 52, ', or', 'red', 14, 'middle', true), b(234, 30, 70, 36, 'milk', 'blue', 14), t(160, 100, 'A, B, or C', 'ink', 14, 'middle', true)],
    bt('3つ以上 → A, B, or C', undefined, 'blue'),
  ),
  sl(
    '練習：「お茶とコーヒーではどちらが好きですか」→ Which do you like, tea or coffee? ❓「Do you go to school by bus or by train?」に「電車です」は？→ I go to school by train. と選んで答えます。',
    [b(16, 20, 288, 32, 'Which do you like, tea or coffee?', 'purple', 12), b(16, 66, 288, 32, 'I go to school by train.', 'green', 13), t(160, 122, 'Yes・No を使わない', 'red', 12)],
    bt('どちらかを、文で答える', undefined, 'green'),
  ),
  sl(
    '❓最後に、Which と ( ) do you like better, summer or winter? のかっこには何が入る？→summer か winter かの選ぶはんいがあるので、Which です。選択疑問文は「A or B」と「Yes・No で答えない」の2つが決まりです。',
    [b(16, 20, 288, 32, '( Which ) do you like better, summer or winter?', 'purple', 11), a(160, 54, 160, 72), b(16, 74, 288, 32, 'I like summer better.', 'green', 13)],
    bt('A or B ＋ 選んで答える', undefined, 'gray'),
  ),
]);

// ─────────────────────────────────────────────
// 11. 時刻・曜日・月・日付の言い方
// ─────────────────────────────────────────────
const jikoku: DiagramFigure = show([
  sl(
    '時刻・曜日・日付をたずねる文は、3種類あります。❓どれも主語は何？→どれも it です。まず、たずね方を3つ並べます。',
    [b(16, 14, 288, 30, 'What time is it?　→　時刻', 'blue', 13), b(16, 54, 288, 30, 'What day is it today?　→　曜日', 'green', 12), b(16, 94, 288, 30, 'What is the date today?　→　日付', 'purple', 12)],
    bt('たずねる内容で、言い方を分ける', undefined, 'gray'),
  ),
  sl(
    '❓この it は「それ」という意味？→ちがいます。時や日を言うときの決まった主語で、日本語にはしません。「今、7時です」の「今」のようなものです。',
    [b(16, 30, 288, 34, 'It is seven thirty.', 'blue', 15), a(80, 66, 80, 86), t(80, 100, 'it ＝ それ ではない', 'red', 12, 'middle', true), t(230, 84, '日本語にしない', 'gray', 12)],
    bt('時・日の文の主語は it', undefined, 'blue'),
  ),
  sl(
    '❓時刻はどう言う？→What time is it? と聞かれたら、It is seven thirty. のように、「時」「分」の順に数を2つ続けて読みます。この時計は 7:30 です。',
    [...clock(7, 30), t(260, 40, '7:30', 'blue', 16, 'middle', true), t(260, 66, 'seven', 'ink', 12), t(260, 84, 'thirty', 'ink', 12)],
    bt('It is seven thirty.', '時 → 分 の順に読む', 'blue'),
  ),
  sl(
    '❓ちょうどのときは？→「〜時ちょうど」は o\'clock をつけます。It is seven o\'clock. また、15分すぎは a quarter past、30分は half past と言うこともできます。',
    [...clock(7, 0, 80, 72, 50), b(150, 24, 160, 28, "seven o'clock", 'blue', 13), b(150, 58, 160, 28, 'a quarter past（15分）', 'green', 11), b(150, 92, 160, 28, 'half past（30分）', 'purple', 12)],
    bt("〜時ちょうど → o'clock", undefined, 'blue'),
  ),
  sl(
    '❓6時45分は？→「6」と「45」を続けて、six forty-five と読みます。It is six forty-five. 数字を2つ続けるのが決まりです。',
    [...clock(6, 45), t(260, 40, '6:45', 'blue', 16, 'middle', true), t(260, 66, 'six', 'ink', 12), t(260, 84, 'forty-five', 'ink', 12)],
    bt('It is six forty-five.', undefined, 'blue'),
  ),
  sl(
    '❓曜日はどう聞く？→What day is it today? と聞き、It is Monday. のように答えます。日付をたずねる What is the date? と区別するため、曜日は day と覚えます。',
    [...['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d, i) => b(8 + i * 43, 24, 40, 32, d, i === 1 ? 'green' : 'gray', 11)), b(16, 76, 288, 32, 'What day is it today?', 'green', 14), b(16, 116, 288, 30, 'It is Monday.', 'green', 14)],
    bt('曜日 → What day', undefined, 'green'),
  ),
  sl(
    '❓日付は？→What is the date today? と聞き、It is May third. のように答えます。❓なぜ three ではなく third？→日付は「3番目の日」と考えるので、序数（じょすう）で読むからです。',
    [b(16, 20, 288, 30, 'What is the date today?', 'purple', 14), b(16, 60, 130, 34, 'May 3', 'gray', 16), a(150, 77, 170, 77), b(174, 60, 130, 34, 'May third', 'purple', 15), t(160, 118, '3 → three ではなく third', 'purple', 12, 'middle', true)],
    bt('日付 → 序数で読む', undefined, 'purple'),
  ),
  sl(
    '❓3つをまとめると？→時刻は What time、曜日は What day、日付は What is the date。どれも答えは It is 〜. で始めます。',
    [b(10, 14, 94, 34, 'What time\n時刻', 'blue', 11), b(112, 14, 94, 34, 'What day\n曜日', 'green', 11), b(214, 14, 96, 34, 'What is the date\n日付', 'purple', 10), a(57, 50, 57, 68), a(159, 50, 159, 68), a(262, 50, 262, 68), b(10, 70, 94, 30, 'It is 7:30.', 'blue', 11), b(112, 70, 94, 30, 'It is Monday.', 'green', 11), b(214, 70, 96, 30, 'It is May third.', 'purple', 10)],
    bt('答えはどれも It is 〜.', undefined, 'gray'),
  ),
  sl(
    '練習：「4月1日です」→ It is April first. ❓1は one ではなく？→日付は序数なので first です。「今日は何曜日ですか」→ What day is it today? です。',
    [b(16, 20, 288, 32, 'It is April first.', 'purple', 14), t(160, 66, '1 → first（序数）', 'purple', 12), b(16, 84, 288, 32, 'What day is it today?', 'green', 14), t(160, 130, '曜日 → What day', 'green', 12)],
    bt('日付は序数、曜日は What day', undefined, 'green'),
  ),
]);

// ─────────────────────────────────────────────
// 12. 序数のつくり方
// ─────────────────────────────────────────────
const josu: DiagramFigure = show([
  sl(
    '「1つ、2つ」は数（かず）ですが、「1番目、2番目」は順番を表す言葉で、序数（じょすう）といいます。❓どう作る？→数の形を、順番の形に変えます。',
    [...row(20, 'one（1つ）', 'first（1番目）', 'blue'), ...row(60, 'two（2つ）', 'second（2番目）', 'blue'), ...row(100, 'three（3つ）', 'third（3番目）', 'blue')],
    bt('数 → 順番の言葉', undefined, 'gray'),
  ),
  sl(
    '❓1〜3はどう変わる？→first・second・third と、形がまったく変わります。one に th をつけても first にはなりません。ここは規則ではなく、形を覚えます。',
    [b(16, 30, 90, 36, 'first', 'red', 16), b(112, 30, 90, 36, 'second', 'red', 15), b(208, 30, 96, 36, 'third', 'red', 16), t(61, 86, '1番目', 'gray', 12), t(157, 86, '2番目', 'gray', 12), t(256, 86, '3番目', 'gray', 12)],
    bt('1〜3 は形を丸ごと覚える', undefined, 'red'),
  ),
  sl(
    '❓4番目からは？→数字のおわりに th をつけるだけです。four → fourth、six → sixth、seven → seventh、ten → tenth。',
    [...row(10, 'four', 'fourth', 'green', 22), ...row(38, 'six', 'sixth', 'green', 22), ...row(66, 'seven', 'seventh', 'green', 22), ...row(94, 'ten', 'tenth', 'green', 22)],
    bt('4以上 → th をつける', undefined, 'green'),
  ),
  sl(
    '❓five はどうなる？→five に th をつけると fiveth ですが、実際は ve が f に変わって fifth になります。「ヴ」の音が「フ」に近い音に変わるので、つづりも変わります。',
    [b(16, 30, 100, 36, 'five', 'gray', 16), t(160, 50, '＋ th', 'ink', 14), b(200, 30, 104, 36, 'fifth', 'red', 16), t(160, 100, 've → f', 'red', 15, 'middle', true), t(160, 122, 'fiveth ×  ／  fifth ○', 'ink', 12)],
    bt('five → fifth（ve → f）', undefined, 'red'),
  ),
  sl(
    '❓twelve も同じ？→同じです。twelve の ve が f に変わって twelfth になります。five と同じ規則なので、いっしょに覚えるとまちがえません。',
    [b(16, 30, 100, 36, 'twelve', 'gray', 16), t(160, 50, '＋ th', 'ink', 14), b(200, 30, 104, 36, 'twelfth', 'red', 15), t(160, 100, 've → f', 'red', 15, 'middle', true), t(160, 122, 'twelveth ×  ／  twelfth ○', 'ink', 12)],
    bt('twelve → twelfth（ve → f）', undefined, 'red'),
  ),
  sl(
    '❓nine はどうなる？→nine の e が消えて ninth になります。nineth と書くのはまちがいです。同じように eight は t が1つだけになって eighth と書きます。',
    [b(16, 20, 100, 30, 'nine', 'gray', 15), t(160, 36, '＋ th', 'ink', 14), b(200, 20, 104, 30, 'ninth', 'red', 15), t(160, 66, 'e が消える', 'red', 13, 'middle', true), b(16, 90, 100, 30, 'eight', 'gray', 15), t(160, 106, '＋ h', 'ink', 14), b(200, 90, 104, 30, 'eighth', 'red', 15), t(160, 136, 't は1つだけ', 'red', 13, 'middle', true)],
    bt('ninth・eighth に注意', undefined, 'red'),
  ),
  sl(
    '❓twenty のように、おわりが y の数は？→y を ie に変えて th をつけます。twenty → twentieth、thirty → thirtieth。',
    [...row(30, 'twenty', 'twentieth', 'purple'), ...row(72, 'thirty', 'thirtieth', 'purple'), t(160, 126, 'y → ie ＋ th', 'purple', 14, 'middle', true)],
    bt('おわりが y → ie ＋ th', undefined, 'purple'),
  ),
  sl(
    '❓21番目以上は？→一の位のところだけを序数にします。twenty-one → twenty-first、twenty-two → twenty-second。十の位の twenty はそのままです。',
    [b(16, 20, 288, 30, 'twenty-one', 'gray', 14), a(160, 52, 160, 68), b(16, 70, 288, 30, 'twenty-first', 'green', 15), t(160, 124, '一の位だけを first に', 'green', 12, 'middle', true)],
    bt('一の位だけを序数にする', 'twenty-first ／ twenty-second', 'green'),
  ),
  sl(
    '❓序数はどこで使う？→日付です。5月2日は May second、3月1日は March first。「2日」は「2番目の日」と考えるので、two ではなく second です。',
    [b(16, 20, 140, 34, '5月2日', 'gray', 14), a(158, 37, 174, 37), b(176, 20, 128, 34, 'May second', 'green', 13), b(16, 70, 140, 34, '3月1日', 'gray', 14), a(158, 87, 174, 87), b(176, 70, 128, 34, 'March first', 'green', 13), t(160, 128, '日付は序数で読む', 'ink', 12, 'middle', true)],
    bt('日付 → 序数', undefined, 'green'),
  ),
]);

// ─────────────────────────────────────────────
// 13. 時を表す at・on・in
// ─────────────────────────────────────────────
const atOnIn: DiagramFigure = show([
  sl(
    '時を表す at・on・in は、時間の「長さ」のイメージで選びます。❓なぜ3つに分かれる？→時間には、1点のようにせまいものと、1日ぶん、もっと長い期間があるからです。',
    [ci(50, 60, 6, undefined, C.blue, FILL.blue), t(50, 90, 'at：1点', 'blue', 12, 'middle', true), b(110, 52, 80, 16, '', 'green'), t(150, 90, 'on：1日', 'green', 12, 'middle', true), b(220, 46, 90, 28, '', 'purple'), t(265, 90, 'in：長い期間', 'purple', 12, 'middle', true)],
    bt('せまい → at ／ 1日 → on ／ 長い → in', undefined, 'gray'),
  ),
  sl(
    '❓at はどんなとき？→時刻のように、せまい1点のときです。at 6:30、at noon（正午）、at night（夜）。',
    [ci(160, 40, 8, undefined, C.blue, FILL.blue), b(20, 66, 130, 30, 'at 6:30', 'blue', 14), b(170, 66, 130, 30, 'at noon', 'blue', 14), b(90, 106, 140, 30, 'at night', 'blue', 14)],
    bt('時刻・1点 → at', undefined, 'blue'),
  ),
  sl(
    '❓on はどんなとき？→曜日や特定の日のときです。on Sunday、on May 3、on my birthday。❓なぜ？→曜日や日付は、1日ぶんの長さだからです。',
    [b(50, 24, 220, 16, '', 'green'), b(20, 60, 130, 30, 'on Sunday', 'green', 14), b(170, 60, 130, 30, 'on May 3', 'green', 14), b(60, 102, 200, 30, 'on my birthday', 'green', 14)],
    bt('曜日・日付・特定の日 → on', undefined, 'green'),
  ),
  sl(
    '❓in はどんなとき？→月・季節・年のような、長い期間です。in April、in summer、in 2025。1日よりずっと長いので、「その中で」という意味の in を使います。',
    [b(20, 20, 280, 30, '', 'purple'), b(20, 66, 90, 30, 'in April', 'purple', 12), b(115, 66, 90, 30, 'in summer', 'purple', 12), b(210, 66, 90, 30, 'in 2025', 'purple', 12)],
    bt('月・季節・年 → in', undefined, 'purple'),
  ),
  sl(
    '❓朝・午後・夕方（ゆうがた）は？→in をつけます。in the morning、in the afternoon、in the evening。❓なぜ？→朝や午後は、数時間の長さがある期間だからです。',
    [b(20, 24, 280, 30, 'in the morning', 'purple', 14), b(20, 64, 280, 30, 'in the afternoon', 'purple', 14), b(20, 104, 280, 30, 'in the evening', 'purple', 14)],
    bt('朝・午後・晩 → in', undefined, 'purple'),
  ),
  sl(
    '❓では、日曜日の朝は？→on Sunday morning になります。❓なぜ on？→「日曜日」という特定の日がはっきり決まっているので、その日の中のことは on で表すからです。',
    [b(20, 30, 130, 30, 'in the morning', 'purple', 12), b(170, 30, 130, 30, 'on Sunday morning', 'green', 11), t(160, 90, '曜日がつくと on', 'green', 13, 'middle', true)],
    bt('曜日 ＋ 朝・昼・晩 → on', undefined, 'green'),
  ),
  sl(
    '❓3つの関係を1枚にすると？→at は小さな点、on はそれより大きな1日、in はいちばん大きな期間です。in ⊃ on ⊃ at と、包みこむ関係で覚えられます。',
    [b(20, 10, 280, 130, '', 'purple'), t(160, 26, 'in（月・季節・年・朝）', 'purple', 12, 'middle', true), b(60, 42, 200, 84, '', 'green'), t(160, 58, 'on（曜日・日付）', 'green', 12, 'middle', true), b(110, 74, 100, 40, 'at（時刻）', 'blue', 12)],
    bt('大きい順：in ＞ on ＞ at', undefined, 'gray'),
  ),
  sl(
    '練習 (1)：I get up ( ) six in the morning. ❓six は時刻？→はい、1点です。だから at です。',
    [b(16, 30, 288, 34, 'I get up ( at ) six.', 'blue', 15), a(160, 66, 160, 84), b(60, 86, 200, 34, '時刻 → 1点 → at', 'blue', 14)],
    bt('時刻 → at', undefined, 'blue'),
  ),
  sl(
    '練習 (2)：We have a party ( ) Saturday. ❓曜日？→はい、1日ぶんなので on。(3)：It is very hot ( ) summer. ❓季節？→はい、長い期間なので in です。',
    [b(16, 20, 288, 32, 'We have a party ( on ) Saturday.', 'green', 12), t(160, 64, '曜日 → on', 'green', 12), b(16, 84, 288, 32, 'It is very hot ( in ) summer.', 'purple', 12), t(160, 128, '季節 → in', 'purple', 12)],
    bt('at・on・in は長さで決まる', undefined, 'green'),
  ),
]);

export const DIAGRAMS_EIGO_A: Record<string, DiagramFigure> = {
  '名詞の複数形のつくり方': fukusu,
  'some・any・many・much・a lot of の使い分け': someAny,
  'this・that・these・those': thisThat,
  '三人称単数現在形の s と es': sanjo,
  "「〜の」を表す 's のつけ方": possess,
  'who・what・which・whose の使い分け': whoWhat,
  'when・where・why・how の使い分け': whenWhere,
  'how ＋ 形容詞（How many・How much・How long など）': howAdj,
  '疑問詞が主語になる疑問文': whoSubj,
  '選択疑問文の作り方と答え方': sentaku,
  '時刻・曜日・月・日付の言い方': jikoku,
  '序数のつくり方（first・second・third など）': josu,
  '時を表す at・on・in': atOnIn,
};
