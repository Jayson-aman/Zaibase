// 中学受験 英語の単元に、動く図解スライドを1つずつ（TAG=cea）。
// 「なぜ？」の連鎖で7枚以上。上半分に図、下の帯（band）にそのスライドのひとこと。
import type { DiagramFigure, DiagramElement } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, show, flow, stack, band, fresh, cover } from './diagram-kit';

type E = DiagramElement;
const cap = (t: string, color: string = C.ink, size = 12) => band(150, lb(160, 190, t, size, color, 'middle', true));
const head = (t: string, color: string = C.ink) => lb(160, 14, t, 12, color, 'middle', true);

const K = {
  b: [C.blue, FILL.blue], r: [C.red, FILL.red], g: [C.green, FILL.green], p: [C.purple, FILL.purple],
  m: [C.main, FILL.warm], y: [C.gray, FILL.gray], l: [C.main, FILL.yellow],
} as const;
type Kd = keyof typeof K;
type Item = [string, Kd] | [string, Kd, string];
const un = (s: string) => [...s].reduce((u, ch) => u + (ch.charCodeAt(0) < 256 ? 0.55 : 1), 0);

/** 語を横に並べた箱（文字数に比例した幅）。3つ目の要素は箱の下に出す小さな注。 */
function sent(items: Item[], y: number, h = 30, size = 13, x0 = 10, x1 = 310, gap = 4): E[] {
  const ws = items.map((it) => Math.max(...it[0].split('\n').map(un)) * size + 14);
  const total = ws.reduce((a, b) => a + b, 0);
  const avail = x1 - x0 - gap * (items.length - 1);
  const s = Math.min(avail / total, 1.5);
  let x = x0 + (avail - total * s) / 2;
  const out: E[] = [];
  items.forEach((it, i) => {
    const w = ws[i] * s;
    out.push(bx(x, y, w, h, it[0], K[it[1]][0], K[it[1]][1], size));
    if (it[2]) out.push(lb(x + w / 2, y + h + 10, it[2], 10, K[it[1]][0], 'middle', true));
    x += w + gap;
  });
  return out;
}
/** 同じ幅で並べた箱 */
function rowb(texts: string[], y: number, h: number, k: Kd, size = 12, x0 = 10, x1 = 310, gap = 6): E[] {
  const n = texts.length;
  const w = (x1 - x0 - gap * (n - 1)) / n;
  return texts.map((t, i) => bx(x0 + i * (w + gap), y, w, h, t, K[k][0], K[k][1], size));
}
/** 表（行ごとに列の色を指定）。rows[0] は見出し。 */
function grid(rows: string[][], x0: number, y0: number, widths: number[], h: number, kinds: Kd[], size = 11, hdr = true): E[] {
  const out: E[] = [];
  rows.forEach((r, ri) => {
    let x = x0;
    r.forEach((t, ci2) => {
      const k: Kd = hdr && ri === 0 ? 'y' : kinds[ci2];
      out.push(bx(x, y0 + ri * (h + 2), widths[ci2], h, t, K[k][0], K[k][1], size));
      x += widths[ci2] + 2;
    });
  });
  return out;
}
const tag = (x: number, y: number, w: number, t: string, k: Kd, size = 11) => bx(x, y, w, 20, t, K[k][0], K[k][1], size);

// ───────── eigo_01_bunpo_kihon 5文型 ─────────
const u01: DiagramFigure = show([
  {
    note: '英語の文は、動詞（どうし）のうしろに何が来るかで、5つの文型（ぶんけい）に分けられます。上から順にSV・SVC・SVO・SVOO・SVOC。Sは主語（しゅご）、Vは動詞、Oは目的語（もくてきご）、Cは補語（ほご）です。',
    add: [
      ...[['SV', 'He runs.'], ['SVC', 'She is kind.'], ['SVO', 'I love you.'], ['SVOO', 'He gave me a book.'], ['SVOC', 'She made me happy.']].flatMap(([a], i) => [bx(10, 10 + i * 27, 56, 22, a, C.gray, FILL.gray, 12)]),
      ...sent([['He', 'b'], ['runs', 'r']], 10, 22, 12, 72, 310),
      ...sent([['She', 'b'], ['is', 'r'], ['kind', 'p']], 37, 22, 12, 72, 310),
      ...sent([['I', 'b'], ['love', 'r'], ['you', 'g']], 64, 22, 12, 72, 310),
      ...sent([['He', 'b'], ['gave', 'r'], ['me', 'g'], ['a book', 'p']], 91, 22, 12, 72, 310),
      ...sent([['She', 'b'], ['made', 'r'], ['me', 'g'], ['happy', 'p']], 118, 22, 12, 72, 310),
      ...cap('S＝主語　V＝動詞　O＝目的語　C＝補語'),
    ],
  },
  {
    note: '❓なぜ「動詞のうしろ」を見るのでしょう。→ 動詞が「どんな言葉をほしがるか」を決めているからです。runs（走る）は He runs. だけで意味が完結（かんけつ）します。でも love（愛する）は I love. だけだと「何を？」と聞きたくなります。',
    add: fresh(
      ...sent([['He', 'b'], ['runs', 'r']], 22, 32, 14, 30, 200), tag(214, 28, 86, '意味が完結', 'g', 11),
      ...sent([['I', 'b'], ['love', 'r'], ['？', 'y']], 80, 32, 14, 30, 200), tag(214, 86, 86, '何を？が足りない', 'r', 10),
      ...cap('うしろに何がほしいかは、動詞しだい'),
    ),
  },
  {
    note: '❓SVCの C（補語）とは何でしょう。→ 主語の様子や正体を説明する言葉で、S＝C（主語＝補語）の関係になります。She is kind.（彼女は親切だ）では she＝kind。He became a doctor.（彼は医者になった）では he＝a doctor です。',
    add: fresh(
      ...sent([['She', 'b'], ['is', 'r'], ['kind', 'p']], 16, 30, 14), lb(160, 62, 'She ＝ kind（彼女＝親切）', 12, C.purple, 'middle', true),
      ...sent([['He', 'b'], ['became', 'r'], ['a doctor', 'p']], 88, 30, 14), lb(160, 134, 'He ＝ a doctor（彼＝医者）', 12, C.purple, 'middle', true),
      ...cap('SVC は S＝C になる', C.purple),
    ),
  },
  {
    note: '❓では第3文型SVOの O（目的語）は、SVCの C とどうちがうのでしょう。→ O は動作を受ける相手で、主語とは別のものです。She reads books.（彼女は本を読む）では she ＝ books になりません。「＝」が成り立てば C、成り立たなければ O と見分けます。',
    add: fresh(
      bx(8, 10, 146, 22, 'She is kind.', C.purple, FILL.purple, 12), lb(81, 48, 'She ＝ kind', 12, C.green, 'middle', true), tag(18, 62, 126, '＝が成り立つ → C', 'g', 11), lb(81, 100, '第2文型 SVC', 12, C.ink, 'middle', true),
      bx(166, 10, 146, 22, 'She reads books.', C.green, FILL.green, 12), lb(239, 48, 'She ≠ books', 12, C.red, 'middle', true), tag(176, 62, 126, '＝が成り立たない → O', 'r', 11), lb(239, 100, '第3文型 SVO', 12, C.ink, 'middle', true),
      ...cap('「＝」で C と O を見分ける'),
    ),
  },
  {
    note: '❓第4文型SVOOには、なぜ目的語が2つ要るのでしょう。→ 「あげる」という動作には、あげる相手と、あげる物の両方が必要だからです。He gave me a book.（彼は私に本をくれた）は「人→もの」の順。このように使う動詞は give・show・teach・tell・buy・make・send などです。',
    add: fresh(
      ...sent([['He', 'b', 'だれが'], ['gave', 'r', 'あげた'], ['me', 'g', 'だれに'], ['a book', 'p', 'なにを']], 14, 30, 14),
      ...rowb(['give', 'show', 'teach', 'tell'], 76, 24, 'm', 12, 10, 310, 6),
      ...rowb(['buy', 'make', 'send'], 106, 24, 'm', 12, 50, 270, 6),
      ...cap('人 ＋ もの の順に並べる'),
    ),
  },
  {
    note: '❓SVOOとSVOCはどう見分けるのでしょう。→ 2つ目の言葉が1つ目の言葉と「＝」になるかどうかです。She made me happy.（彼女は私を幸せにした）は me ＝ happy なのでSVOC。He gave me a book. は me ≠ a book なのでSVOOです。',
    add: fresh(
      ...sent([['She', 'b'], ['made', 'r'], ['me', 'g'], ['happy', 'p']], 10, 28, 14), lb(160, 54, 'me ＝ happy（私＝うれしい）→ SVOC', 12, C.green, 'middle', true),
      ...sent([['He', 'b'], ['gave', 'r'], ['me', 'g'], ['a book', 'p']], 82, 28, 14), lb(160, 126, 'me ≠ a book（私≠本）→ SVOO', 12, C.red, 'middle', true),
      ...cap('O＝C なら SVOC、ちがえば SVOO'),
    ),
  },
  {
    note: '見分けの手順です。①動詞のうしろに何もない→SV。②形容詞（けいようし）か名詞（めいし）でS＝C→SVC。③名詞が1つ→SVO。④名詞が2つ（O≠O）→SVOO。⑤名詞のあとに、O＝Cになる言葉→SVOC。',
    add: fresh(
      ...[['動詞のうしろに何もない', 'SV'], ['形容詞か名詞で S＝C', 'SVC'], ['名詞がひとつ', 'SVO'], ['名詞＋名詞（O≠O）', 'SVOO'], ['名詞＋言葉で O＝C', 'SVOC']].flatMap(([a, b], i) => [
        bx(10, 8 + i * 28, 200, 22, a, C.blue, FILL.blue, 12), ar(212, 19 + i * 28, 240, 19 + i * 28, C.main), bx(242, 8 + i * 28, 66, 22, b, C.red, FILL.red, 13),
      ]),
      ...cap('3・4・5文型の区別が入試で一番問われる'),
    ),
  },
  {
    note: 'まとめです。文型は動詞のうしろで決まる。S＝C なら補語（C）。S≠O なら目的語（O）。目的語が2つならSVOO、O＝C ならSVOC。この順に見れば、どんな長い文も形が見えてきます。',
    add: fresh(
      bx(15, 14, 290, 30, '動詞のうしろを見る', C.blue, FILL.blue, 13),
      bx(15, 52, 290, 30, 'S＝C は SVC、S≠O は SVO', C.green, FILL.green, 13),
      bx(15, 90, 290, 30, '目的語が2つ＝SVOO、O＝C＝SVOC', C.red, FILL.red, 13),
      ...cap('文型は動詞のうしろで決まる', C.green),
    ),
  },
], '5文型：動詞のうしろで文の形が決まる');

// ───────── eigo_02_meishi_daimeishi 冠詞 ─────────
const u02: DiagramFigure = show([
  {
    note: '冠詞（かんし）は、名詞（めいし）の前につく小さな言葉です。a・an は「1つの」、the は「その」、そして何もつけない場合があります。どれを使うかは「相手がどれのことか分かるか」で決まります。',
    add: [
      bx(10, 14, 92, 56, 'a / an\n初めて話に\n出るもの', C.blue, FILL.blue, 12),
      bx(114, 14, 92, 56, 'the\nどれか決まって\nいるもの', C.red, FILL.red, 12),
      bx(218, 14, 92, 56, '何もなし\n名前・食事・\nスポーツなど', C.green, FILL.green, 12),
      lb(160, 100, '決め手は「相手がどれか分かるか」', 12, C.ink, 'middle', true),
      ...cap('3つの使い分けを順に見よう'),
    ],
  },
  {
    note: '❓なぜ初めて話に出るときは a なのでしょう。→ 聞いている人は、まだどの犬のことか知らないからです。I have a dog.（私は犬を飼っています）の dog は「どれか決まっていない、1匹の犬」です。',
    add: fresh(
      ...sent([['I', 'b'], ['have', 'r'], ['a dog.', 'g']], 22, 32, 15, 20, 300),
      bx(120, 78, 80, 36, '聞く人\n「どの犬？」', C.gray, FILL.gray, 11), ar(160, 76, 160, 58, C.gray, true),
      ...cap('まだ分からない → a', C.blue),
    ),
  },
  {
    note: '❓では2回目に出るときは、なぜ the なのでしょう。→ もう話に出たので、どの犬か二人とも分かっているからです。I have a dog. The dog is very cute.（その犬はとてもかわいい）。最初は a、2回目からは the に変わります。',
    add: fresh(
      ...sent([['I have a dog.', 'b']], 10, 30, 14, 30, 290), tag(30, 46, 100, '1回目 → a', 'b', 11),
      ...sent([['The dog is very cute.', 'r']], 86, 30, 14, 30, 290), tag(30, 122, 100, '2回目 → the', 'r', 11),
      ar(240, 48, 240, 84, C.main), lb(246, 66, 'もう分かる', 11, C.main, 'start', true),
      ...cap('同じ犬だから the', C.red),
    ),
  },
  {
    note: '❓では、なぜ an という形があるのでしょう。→ a のうしろに a・i・u・e・o の音が続くと、「ア アップル」のように言いにくいからです。間に n を入れて「アン アップル」と読みやすくしたのが an です。',
    add: fresh(
      bx(20, 20, 130, 36, 'a apple', C.red, FILL.red, 16), lb(85, 72, '言いにくい', 12, C.red, 'middle', true),
      bx(170, 20, 130, 36, 'an apple', C.green, FILL.green, 16), lb(235, 72, 'なめらか', 12, C.green, 'middle', true),
      ar(150, 38, 168, 38, C.main),
      lb(160, 106, '母音（ぼいん）の音の前では n を足す', 12, C.ink, 'middle', true),
      ...cap('読みやすくするための an', C.green),
    ),
  },
  {
    note: '❓a と an はつづりで決めるのでしょうか。→ いいえ、「発音」で決めます。university（ユニバーシティ）は u で始まりますが、最初の音は「ユ」で子音（しいん）なので a university。hour（アワー）は h で始まりますが、h を読まず母音なので an hour です。',
    add: fresh(
      ...grid([['語', '最初の音', '冠詞'], ['book', 'b（子音）', 'a book'], ['apple', 'a（母音）', 'an apple'], ['university', 'ユ（子音）', 'a university'], ['hour', 'ア（母音）', 'an hour']], 12, 8, [92, 100, 90], 22, ['m', 'y', 'g'], 12),
      ...cap('つづりでなく、発音で決める', C.green),
    ),
  },
  {
    note: '❓the はどんなときに使うのでしょう。→ 「どれのことか1つに決まる」ときです。the sun（太陽）やthe moon（月）は世界に1つ。Please close the door.（そのドアを閉めて）は、その場で分かるドア。play the piano（ピアノを弾く）の楽器と、the first（1番目）の順番も the を使います。',
    add: fresh(
      bx(10, 10, 148, 50, 'the sun / the moon\n世界に1つ', C.red, FILL.red, 12), bx(162, 10, 148, 50, 'close the door\nその場で分かる', C.red, FILL.red, 12),
      bx(10, 68, 148, 50, 'play the piano\n楽器をひく', C.red, FILL.red, 12), bx(162, 68, 148, 50, 'the first\n順番', C.red, FILL.red, 12),
      ...cap('どれか1つに決まるなら the', C.red),
    ),
  },
  {
    note: '❓では、冠詞をつけない場合は？→ Japan・Tokyo・Tom のような名前は、それだけで1つに決まっています。I play soccer.（サッカーをする）、We have lunch.（昼食をとる）、by bus（バスで）は「もの」ではなく「こと」を言うので、a も the もつけません。',
    add: fresh(
      bx(10, 10, 148, 50, 'Japan / Tokyo / Tom\n名前', C.green, FILL.green, 12), bx(162, 10, 148, 50, 'play soccer\nスポーツ', C.green, FILL.green, 12),
      bx(10, 68, 148, 50, 'have lunch\n食事', C.green, FILL.green, 12), bx(162, 68, 148, 50, 'by bus / by train\n乗り物の手段', C.green, FILL.green, 12),
      ...cap('× the Japan　× play the soccer', C.red),
    ),
  },
  {
    note: 'まとめです。初めて出てきたら a / an、2回目や1つに決まるときは the、名前・スポーツ・食事・手段には何もつけない。a か an かは発音で決める。この順に考えると迷いません。',
    add: fresh(
      ...flow(['初めて\na / an', '2回目・特定\nthe', '名前・食事\nなし'], 22, { h: 62, size: 12, color: C.blue, fill: FILL.blue }).flat(),
      lb(160, 118, 'a か an かは「発音」で決める', 12, C.ink, 'middle', true),
      ...cap('だれが聞いても分かるか、で決める', C.green),
    ),
  },
], '冠詞：a・an・the・なしの使い分け');

// ───────── eigo_03_dokkai 長文読解の基本戦略 ─────────
const para = (y: number, n: number, k: Kd = 'y') => bx(10, y, 54, 20, `第${n}段落`, K[k][0], K[k][1], 10);
const u03: DiagramFigure = show([
  {
    note: '長文読解（ちょうぶんどっかい）は、最初から読まず、先読みから始めます。①設問（せつもん）と選択肢（せんたくし）を全部読む。②答えがどこにありそうか予想する。③本文を読みながら答えを探す。この3つの順番です。',
    add: [
      ...flow(['① 先に設問と\n選択肢を読む', '② 答えの場所を\n予想する', '③ 本文で\n答えを探す'], 28, { h: 70, size: 11, color: C.blue, fill: FILL.blue }).flat(),
      ...cap('読む前に「探すもの」を決める'),
    ],
  },
  {
    note: '❓なぜ設問を先に読むのでしょう。→ 探すものが分かっていれば、読む場所をしぼれるからです。たとえば「第3段落（だんらく）の内容に合うものを選べ」なら、第3段落を重点的に読めばよいと分かります。',
    add: fresh(
      para(12, 1), bx(70, 12, 200, 20, '', C.gray, FILL.gray),
      para(38, 2), bx(70, 38, 200, 20, '', C.gray, FILL.gray),
      para(64, 3, 'r'), bx(70, 64, 200, 20, '← ここを重点的に', C.red, FILL.red, 11),
      para(90, 4), bx(70, 90, 200, 20, '', C.gray, FILL.gray),
      para(116, 5), bx(70, 116, 200, 20, '', C.gray, FILL.gray),
      ...cap('「第3段落の内容」→ 第3段落へ', C.red),
    ),
  },
  {
    note: '❓では、各段落でいちばん大事な文はどこでしょう。→ 多くの場合、段落の最初の文です。これを中心文（topic sentence）といい、その段落で何を言うかを予告します。真ん中は例や理由、最後はまとめやつなぎです。',
    add: fresh(
      bx(20, 12, 280, 30, '最初の文：topic sentence（予告）', C.red, FILL.red, 13),
      bx(20, 48, 280, 30, '中ごろの文：例・理由・補足', C.gray, FILL.gray, 13),
      bx(20, 84, 280, 30, '最後の文：まとめ・次へのつなぎ', C.blue, FILL.blue, 13),
      ar(10, 27, 18, 27, C.red),
      ...cap('最初の文を読めば内容が見えてくる', C.red),
    ),
  },
  {
    note: '❓時間が足りないときはどうするのでしょう。→ 各段落の topic sentence だけをつなげて読むと、文章全体の流れがつかめます。それで答えられる設問もあります。',
    add: fresh(
      ...[1, 2, 3].flatMap((n, i) => [para(14 + i * 34, n), bx(70, 14 + i * 34, 80, 20, 'topic', C.red, FILL.red, 11), bx(154, 14 + i * 34, 154, 20, '（くわしい説明）', C.gray, FILL.gray, 10)]),
      ar(100, 116, 100, 130, C.main), lb(190, 126, 'topicだけで流れが分かる', 11, C.main, 'middle', true),
      ...cap('ここだけつなげて読む手もある', C.main),
    ),
  },
  {
    note: '❓接続詞（せつぞくし）は、なぜ読むときの道しるべになるのでしょう。→ 次にどんな内容が来るかを教えてくれるからです。However（しかし）が来たら、前とは逆（ぎゃく）の内容です。I like cats. However, I am allergic to them.（猫は好きだ。しかし猫アレルギーだ）。',
    add: fresh(
      bx(10, 20, 140, 36, 'I like cats.', C.green, FILL.green, 14), bx(170, 20, 140, 36, "I'm allergic to them.", C.red, FILL.red, 12),
      bx(115, 62, 90, 26, 'However', C.main, FILL.yellow, 14), lb(160, 104, '逆の内容が来る！', 13, C.red, 'middle', true),
      ar(150, 38, 168, 38, C.red),
      ...cap('However を見たら立ち止まる', C.red),
    ),
  },
  {
    note: '❓ほかの接続詞は何を教えてくれるでしょう。→ Therefore・So は結論、For example は具体例（ぐたいれい）、In addition・Also・Furthermore は追加、Although・Though は「〜だけれども」という逆の内容を示します。',
    add: fresh(
      ...grid([['合図', '意味', 'このあとに'], ['However', 'しかし', '逆の話'], ['Therefore / So', 'だから', '結論'], ['For example', 'たとえば', '具体例'], ['In addition / Also', 'さらに', '同じ向きの追加']], 10, 10, [112, 74, 112], 22, ['r', 'y', 'g'], 11),
      ...cap('合図の言葉で、次の中身を予想する', C.main),
    ),
  },
  {
    note: '例を見ましょう。He studied hard. Therefore, he passed the exam.（彼は熱心に勉強した。だから試験に合格した）。Therefore の前が原因、うしろが結果です。Many animals hibernate. For example, bears sleep through winter.（多くの動物は冬眠する。たとえば、クマは冬のあいだ眠り続ける）では、うしろが具体例です。',
    add: fresh(
      bx(4, 12, 150, 30, 'He studied hard.', C.blue, FILL.blue, 12), ar(156, 27, 166, 27, C.main), bx(168, 12, 148, 30, 'he passed the exam.', C.green, FILL.green, 12), lb(160, 56, 'Therefore ＝ 原因 → 結果', 12, C.main, 'middle', true),
      bx(4, 78, 150, 30, 'Many animals hibernate.', C.blue, FILL.blue, 11), ar(156, 93, 166, 93, C.main), bx(168, 78, 148, 30, 'bears sleep through winter.', C.green, FILL.green, 11), lb(160, 122, 'For example ＝ 具体例', 12, C.main, 'middle', true),
      ...cap('合図の前後の関係を見る', C.main),
    ),
  },
  {
    note: 'まとめです。①先に設問を読む。②段落の最初の文（topic sentence）で内容をつかむ。③However など接続詞の合図で、次の中身を予想する。「筆者（ひっしゃ）の主張」を聞かれたら、However のあとに答えがあることが多いです。',
    add: fresh(
      bx(15, 12, 290, 30, '① 先に設問を読む', C.blue, FILL.blue, 13),
      bx(15, 48, 290, 30, '② 段落の最初の文で内容をつかむ', C.red, FILL.red, 13),
      bx(15, 84, 290, 30, '③ 接続詞の合図で次を予想する', C.green, FILL.green, 13),
      ...cap('However のあとに筆者の主張が出やすい', C.green),
    ),
  },
], '長文読解：先読みと接続詞の合図');

// ───────── eigo_04_eibun 並び替え問題 ─────────
const u04: DiagramFigure = show([
  {
    note: '並び替え問題は、正しい語順（ごじゅん）を知っているかを問う問題です。手順は4つ。①動詞（どうし）を探す。②その動詞に合う主語（しゅご）を決める。③目的語（もくてきご）や修飾語（しゅうしょくご）を置く。④読み直して意味が通るか確かめる。',
    add: [
      ...flow(['① 動詞を\n探す', '② 主語を\n決める', '③ 残りを\n置く', '④ 読み直す'], 28, { h: 70, size: 11, color: C.blue, fill: FILL.blue, gap: 12 }).flat(),
      ...cap('手順どおりなら、ほぼ確実に解ける'),
    ],
  },
  {
    note: '例題です。(you / do / music / like) を並べて文にします。まず動詞を探すと like。do もありますが、これは疑問文を作る言葉です。ばらばらのカードを見てみましょう。',
    add: [
      ...fresh(
        head('並べかえよう：(you / do / music / like)'),
        bx(20, 40, 56, 30, 'music', C.gray, FILL.gray, 14), bx(86, 55, 56, 30, 'do', C.gray, FILL.gray, 14), bx(152, 36, 56, 30, 'like', C.red, FILL.red, 14), bx(218, 58, 56, 30, 'you', C.gray, FILL.gray, 14),
        lb(180, 110, '↑ 動詞はこれ', 11, C.red, 'middle', true),
        ...cap('まず動詞 like を見つける', C.red),
      ),
    ],
  },
  {
    note: '❓なぜ do が文の先頭に来るのでしょう。→ 一般動詞（いっぱんどうし）の疑問文（ぎもんぶん）は、do を主語の前に出すというきまりだからです。Do ＋ 主語 ＋ 動詞の原形（げんけい）＋ 〜? の順で、Do you like music? が完成します。',
    add: fresh(
      ...sent([['Do', 'b'], ['you', 'g'], ['like', 'r'], ['music', 'p'], ['?', 'y']], 30, 34, 15),
      lb(160, 90, 'Do ＋ 主語 ＋ 動詞のもとの形 ＋ 〜 ?', 12, C.ink, 'middle', true),
      ...cap('Do you like music?　（音楽は好きですか）', C.blue),
    ),
  },
  {
    note: '疑問詞（ぎもんし）を使う場合も考え方は同じです。(does / where / she / live) を並べます。❓なぜ where が最初なのでしょう。→ いちばん知りたいことを先に言うので、疑問詞が文の先頭に来るからです。そのあとは、ふつうの疑問文の順 does she live です。',
    add: fresh(
      ...sent([['Where', 'm', '疑問詞'], ['does', 'b'], ['she', 'g'], ['live', 'r'], ['?', 'y']], 30, 34, 15),
      lb(160, 98, '疑問詞 ＋ does ＋ 主語 ＋ 動詞のもとの形', 12, C.ink, 'middle', true),
      ...cap('Where does she live?　（彼女はどこに住んでいますか）', C.main, 11),
    ),
  },
  {
    note: 'be動詞（ビーどうし）の文はもっと簡単です。(is / who / that / man) なら、疑問詞のあとに is と主語を置いて Who is that man? になります。do や does は使いません。',
    add: fresh(
      ...sent([['Who', 'm'], ['is', 'b'], ['that man', 'g'], ['?', 'y']], 30, 34, 15),
      lb(160, 98, '疑問詞 ＋ be動詞 ＋ 主語', 12, C.ink, 'middle', true),
      ...cap('Who is that man?　（あの男の人はだれですか）', C.main, 11),
    ),
  },
  {
    note: '❓疑問文が別の文の中に入ると、語順（ごじゅん）はどうなるでしょう。→ ふつうの文の順に戻ります。Where does she live? は I don’t know where she lives. になり、does がなくなって live が lives に変わります。',
    add: fresh(
      ...sent([['Where', 'm'], ['does', 'b'], ['she', 'g'], ['live', 'r'], ['?', 'y']], 14, 28, 13),
      ar(160, 48, 160, 66, C.main),
      ...sent([['I don’t know', 'y'], ['where', 'm'], ['she', 'g'], ['lives', 'r'], ['.', 'y']], 72, 28, 13),
      lb(160, 118, 'does は消え、live → lives', 12, C.red, 'middle', true),
      ...cap('文の中では、ふつうの語順', C.red),
    ),
  },
  {
    note: '❓なぜ文の中では疑問文の語順にしないのでしょう。→ 全体は I don’t know（私は知らない）という、ふつうの文だからです。where she lives は「彼女がどこに住んでいるか」という名詞のかたまりで、質問しているわけではありません。Do you know what time it is?（今何時か知っていますか）も、what time it is の部分はふつうの順です。',
    add: fresh(
      bx(10, 16, 112, 34, 'I don’t know', C.blue, FILL.blue, 13), bx(126, 16, 184, 34, 'where she lives', C.green, FILL.green, 13),
      lb(66, 66, 'ふつうの文', 11, C.blue, 'middle', true), lb(218, 66, '名詞のかたまり（質問ではない）', 11, C.green, 'middle', true),
      ...sent([['Do you know', 'b'], ['what time it is', 'g'], ['?', 'y']], 88, 30, 12),
      ...cap('かたまりの中は、ふつうの語順', C.green),
    ),
  },
  {
    note: 'よく出るパターンは、かたまりで覚えます。There are many students in the classroom.（教室にたくさんの生徒がいる）、It takes an hour to go to school by bus.（バスで学校に行くのに1時間かかる）、It is important for us to study English.（私たちが英語を勉強するのは大切だ）。',
    add: fresh(
      bx(10, 10, 300, 32, 'There are 〜 in ...（〜が…にいる）', C.blue, FILL.blue, 12),
      bx(10, 50, 300, 32, 'It takes 〜 to ...（…するのに〜かかる）', C.red, FILL.red, 12),
      bx(10, 90, 300, 32, 'It is 〜 for 人 to ...（人が…するのは〜だ）', C.green, FILL.green, 12),
      ...cap('かたまりで覚えると並べ替えが楽', C.main),
    ),
  },
  {
    note: 'まとめです。①動詞を探す。②疑問文は「(疑問詞)＋do/does/is＋主語＋動詞」の順。③文の中に入った疑問文はふつうの語順。この3つで、並び替えの多くが解けます。',
    add: fresh(
      bx(15, 12, 290, 30, '① まず動詞を探す', C.blue, FILL.blue, 13),
      bx(15, 48, 290, 30, '② 疑問詞 ＋ do / does / is ＋ 主語', C.red, FILL.red, 13),
      bx(15, 84, 290, 30, '③ 文の中の疑問文はふつうの順', C.green, FILL.green, 13),
      ...cap('間接疑問が一番の落とし穴', C.red),
    ),
  },
], '並び替え：動詞から決めて語順を組み立てる');

// ───────── eigo_05_bunpo_oyo 不定詞の3用法 ─────────
const u05: DiagramFigure = show([
  {
    note: '不定詞（ふていし）は「to ＋ 動詞のもとの形」です。使い方は3つあります。「〜すること」（名詞的用法）、「〜するための」（形容詞的用法）、「〜するために・〜して」（副詞的用法）。名詞（めいし）・形容詞（けいようし）・副詞（ふくし）のどれと同じ働きかで分かれます。',
    add: [
      bx(10, 8, 300, 38, '① 名詞的：〜すること\nI want to become a doctor.', C.blue, FILL.blue, 12),
      bx(10, 52, 300, 38, '② 形容詞的：〜するための\nI need a book to read.', C.green, FILL.green, 12),
      bx(10, 96, 300, 38, '③ 副詞的：〜するために・〜して\nI go to school to study.', C.red, FILL.red, 12),
      ...cap('to ＋ 動詞のもとの形 の3つの顔'),
    ],
  },
  {
    note: '❓なぜ「名詞的」と呼ぶのでしょう。→ to study English のかたまり全体が「英語を勉強すること」という名詞と同じ働きをして、主語（しゅご）・目的語（もくてきご）・補語（ほご）になれるからです。',
    add: fresh(
      ...sent([['To study English', 'b', '主語（〜することは）'], ['is', 'y'], ['important.', 'y']], 6, 26, 12, 10, 310),
      ...sent([['I want', 'y'], ['to become a doctor.', 'b', '目的語（〜することを）']], 52, 26, 12, 10, 310),
      ...sent([['My dream is', 'y'], ['to travel the world.', 'b', '補語（〜すること）']], 98, 26, 12, 10, 310),
      ...cap('かたまり全体が名詞のはたらき', C.blue),
    ),
  },
  {
    note: '❓「形容詞的」はなぜ「〜するための」なのでしょう。→ 名詞のうしろにくっついて、その名詞をくわしく説明するからです。I need a book to read. の to read は a book を説明して「読むための本」。something to eat なら「食べるための何か」です。',
    add: fresh(
      ...sent([['I need', 'y'], ['a book', 'g'], ['to read.', 'g']], 20, 32, 14, 20, 300),
      ar(250, 58, 150, 58, C.green), lb(200, 76, '前の名詞を説明', 11, C.green, 'middle', true),
      ...sent([['Give me', 'y'], ['something', 'g'], ['to eat.', 'g']], 98, 32, 14, 20, 300),
      ...cap('名詞 ＋ to ＋ 動詞：うしろから説明', C.green),
    ),
  },
  {
    note: '❓「副詞的」は、何を説明するのでしょう。→ 動詞や形容詞です。I go to school to study. は「なぜ行くか」の目的（勉強するために）。I am happy to see you. は「なぜうれしいか」の原因（会えて）。どちらも to ＋ 動詞が、動詞や形容詞を説明しています。',
    add: fresh(
      ...sent([['I go to school', 'y'], ['to study.', 'r']], 14, 30, 13, 10, 310), lb(160, 60, '目的：勉強するために', 11, C.red, 'middle', true),
      ...sent([['I am happy', 'y'], ['to see you.', 'r']], 84, 30, 13, 10, 310), lb(160, 130, '原因：会えて（うれしい）', 11, C.red, 'middle', true),
      ...cap('動詞・形容詞を説明する to', C.red),
    ),
  },
  {
    note: '3つの見分け方です。①文の主語・目的語・補語になっていれば名詞的。②すぐ前の名詞を説明していれば形容詞的。③動詞や形容詞を説明している（目的・原因）なら副詞的です。It is fun to play tennis.（テニスをするのは楽しい）の to play は「〜すること」で名詞的です。',
    add: fresh(
      ...[['主語・目的語・補語になっている？', '名詞的', 'b'], ['前の名詞を説明している？', '形容詞的', 'g'], ['動詞・形容詞を説明している？', '副詞的', 'r']].flatMap(([q, a, k], i) => [
        bx(10, 12 + i * 40, 200, 30, q, K[k as Kd][0], K[k as Kd][1], 11), ar(212, 27 + i * 40, 238, 27 + i * 40, C.main), bx(240, 12 + i * 40, 70, 30, a, K[k as Kd][0], K[k as Kd][1], 12),
      ]),
      ...cap('上から順にたずねて見分ける'),
    ),
  },
  {
    note: '❓too 〜 to ... はなぜ「〜すぎて…できない」なのでしょう。→ too は「ちょうどよい限度を過ぎている」という意味だからです。This box is too heavy to carry. は、重さが運べる限度を過ぎているので「運べない」。He is too young to drive a car. も同じで、若さが運転できる年れいに届いていません。',
    add: fresh(
      bx(20, 30, 250, 26, 'heavy（重い）', C.red, FILL.red, 12), ln(190, 20, 190, 70, C.gray, true, 2), lb(190, 84, '運べる限度', 11, C.gray, 'middle', true),
      lb(240, 68, '↑ 限度をこえた', 10, C.red, 'middle', true),
      ...sent([['This box is', 'y'], ['too heavy', 'r'], ['to carry.', 'y']], 100, 28, 12, 10, 310),
      ...cap('too 〜 to ... ＝ 〜すぎて…できない', C.red),
    ),
  },
  {
    note: '❓enough to はどんな意味でしょう。→ enough は「足りるだけ十分」という意味です。She is tall enough to reach the shelf.（彼女は棚に届くほど背が高い）は、背の高さが棚の高さに足りていることを表します。too 〜 to の反対のイメージです。',
    add: fresh(
      bx(20, 36, 230, 26, 'tall（背が高い）', C.green, FILL.green, 12), ln(190, 26, 190, 76, C.gray, true, 2), lb(190, 90, '棚の高さ', 11, C.gray, 'middle', true),
      ...sent([['She is', 'y'], ['tall enough', 'g'], ['to reach the shelf.', 'y']], 106, 28, 12, 8, 312),
      ...cap('enough to ＝ 〜するのに十分', C.green),
    ),
  },
  {
    note: 'まとめです。to ＋ 動詞のもとの形には、「〜すること」「〜するための」「〜するために・〜して」の3つの顔がある。名詞なら主語・目的語・補語、名詞のうしろなら形容詞的、動詞・形容詞を説明するなら副詞的。too 〜 to は「できない」、enough to は「十分できる」です。',
    add: fresh(
      bx(15, 12, 290, 28, '名詞的：〜すること', C.blue, FILL.blue, 13),
      bx(15, 46, 290, 28, '形容詞的：名詞のうしろで「〜するための」', C.green, FILL.green, 12),
      bx(15, 80, 290, 28, '副詞的：目的・原因（〜するために・〜して）', C.red, FILL.red, 12),
      lb(160, 128, 'too 〜 to … できない　／　〜 enough to … 十分できる', 11, C.ink, 'middle', true),
      ...cap('3つの顔を見分けよう', C.main),
    ),
  },
], '不定詞：to ＋ 動詞の3つの用法');

// ───────── eigo_06_listening_speaking 会話の決まり文句 ─────────
const bub = (x: number, y: number, w: number, who: string, t: string, k: Kd) => [bx(x, y, w, 28, t, K[k][0], K[k][1], 11), lb(x + 4, y - 5, who, 9, K[k][0], 'start', true)];
const u06: DiagramFigure = show([
  {
    note: '会話の問題では、場面ごとの決まり文句（もんく）を知っているかで差がつきます。場面は、申し出（もうしで）・依頼（いらい）・提案（ていあん）・断り（ことわり）。それぞれの言い方と返事をセットで覚えましょう。',
    add: [
      bx(10, 10, 148, 52, '申し出\nShall I ～?', C.blue, FILL.blue, 13), bx(162, 10, 148, 52, '依頼\nCould you ～?', C.green, FILL.green, 13),
      bx(10, 70, 148, 52, '提案\nWhy don’t we ～?', C.purple, FILL.purple, 12), bx(162, 70, 148, 52, '断り\nI’m sorry, but ～', C.red, FILL.red, 12),
      ...cap('場面 → 決まり文句 → 返事 の3点セット'),
    ],
  },
  {
    note: '申し出は「〜しましょうか」と、自分がしてあげる言い方です。A: Shall I carry your bag?（バッグを持ちましょうか）。返事は、お願いするなら Yes, please.（はい、お願いします）。いらないなら No, thank you. I’m fine.（結構です）。',
    add: fresh(
      ...bub(10, 22, 190, 'A', 'Shall I carry your bag?', 'b'),
      ...bub(120, 62, 190, 'B', 'Yes, please.　（お願いします）', 'g'),
      ...bub(120, 102, 190, 'B', "No, thank you. I'm fine.", 'r'),
      ...cap('Shall I ～? ＝ 私が～しましょうか', C.blue),
    ),
  },
  {
    note: '❓Shall I 〜? と Could you 〜? は何がちがうのでしょう。→ だれがするかです。Shall I help you? は「私が手伝いましょうか」、Could you help me? は「あなたが手伝ってもらえますか」。するのが自分か相手かが逆（ぎゃく）になります。',
    add: fresh(
      bx(10, 14, 148, 36, 'Shall I help you?', C.blue, FILL.blue, 12), bx(162, 14, 148, 36, 'Could you help me?', C.green, FILL.green, 12),
      lb(84, 70, '私が手伝う', 12, C.blue, 'middle', true), lb(236, 70, 'あなたが手伝う', 12, C.green, 'middle', true),
      ar(84, 84, 84, 112, C.blue), ar(236, 112, 236, 84, C.green),
      lb(84, 124, '自分 → 相手', 11, C.blue, 'middle', true), lb(236, 124, '相手 → 自分', 11, C.green, 'middle', true),
      ...cap('するのはだれ？で使い分ける', C.main),
    ),
  },
  {
    note: '❓Would you mind closing the window? は、なぜまちがえやすいのでしょう。→ mind は「いやだと思う」という意味だからです。「窓を閉めるのは、いやですか？」とたずねているのです。窓を閉めてもいいなら、「いやではありません」と答えます。',
    add: fresh(
      ...sent([['Would you mind', 'y'], ['closing the window?', 'b']], 14, 30, 13, 10, 310),
      lb(160, 62, 'mind ＝ いやだと思う', 12, C.red, 'middle', true),
      bx(40, 80, 240, 34, '「窓を閉めるのは いやですか？」', C.red, FILL.red, 13),
      ...cap('mind は「いや」と聞いている', C.red),
    ),
  },
  {
    note: '❓では「いいですよ」は、どう答えるのでしょう。→ 「いやではない」と、否定（ひてい）の形で答えます。Of course not.（もちろんいやではありません）、Not at all.（ぜんぜん）、Certainly.（もちろん）が「いいですよ」。ことわるときは I’m sorry, but I’m busy now.（すみません、いま忙しいです）です。',
    add: fresh(
      ...bub(10, 22, 220, 'A', 'Would you mind closing the window?', 'b'),
      bx(20, 62, 280, 38, 'いいよ → Of course not.\nNot at all. / Certainly.', C.green, FILL.green, 12),
      bx(20, 106, 280, 38, "ことわる → I'm sorry, but\nI'm busy now.", C.red, FILL.red, 12),
      ...cap('「いいよ」は not で答える！', C.green),
    ),
  },
  {
    note: '提案（ていあん）は「〜しませんか」と誘う言い方です。Why don’t we go to the library?（図書館に行きませんか）、How about eating out tonight?（今夜、外食しませんか）、Let’s play tennis after school.（放課後テニスをしよう）。返事は Sounds good.（いいですね）、That’s a great idea.（すてきな考えですね）。',
    add: fresh(
      bx(10, 10, 300, 24, 'Why don’t we go to the library?', C.purple, FILL.purple, 12),
      bx(10, 38, 300, 24, 'How about eating out tonight?', C.purple, FILL.purple, 12),
      bx(10, 66, 300, 24, 'Let’s play tennis after school.', C.purple, FILL.purple, 12),
      ar(160, 94, 160, 108, C.main),
      bx(40, 110, 240, 24, 'Sounds good. / That’s a great idea.', C.green, FILL.green, 12),
      ...cap('さそわれたら、前向きに返事', C.purple),
    ),
  },
  {
    note: 'お礼とおわびの返事もセットです。Thank you.（ありがとう）には You’re welcome. / Not at all. / My pleasure.、I’m sorry.（ごめんなさい）には That’s okay. / Don’t worry about it. / No problem. と答えます。ことわるときの I’d love to, but ～（行きたいけれど〜）や Maybe next time.（また今度）も覚えましょう。',
    add: fresh(
      bx(10, 12, 130, 28, 'Thank you.', C.blue, FILL.blue, 13), ar(142, 26, 168, 26, C.main), bx(170, 12, 140, 28, "You're welcome.", C.green, FILL.green, 12),
      bx(10, 50, 130, 28, "I'm sorry.", C.blue, FILL.blue, 13), ar(142, 64, 168, 64, C.main), bx(170, 50, 140, 28, "That's okay.", C.green, FILL.green, 12),
      bx(10, 88, 130, 28, "I'd love to, but ～", C.red, FILL.red, 11), ar(142, 102, 168, 102, C.main), bx(170, 88, 140, 28, 'Maybe next time.', C.green, FILL.green, 12),
      ...cap('言葉と返事を、いつもペアで', C.main),
    ),
  },
  {
    note: '道を聞くときは Excuse me. Could you tell me the way to the station?（駅への道を教えてもらえますか）。答えは Go straight and turn left at the first corner.（まっすぐ行って、最初の角を左に曲がる）、It’s on your right.（右手にあります）の流れです。',
    add: fresh(
      bx(10, 10, 300, 28, "Could you tell me the way to the station?", C.green, FILL.green, 11),
      ...stack(['Go straight.（まっすぐ）', 'Turn left at the first corner.（最初の角を左）', "It's on your right.（右手にあります）"], 20, 280, 46, { h: 26, gap: 12, size: 12, color: C.blue, fill: FILL.blue }).flat(),
      ...cap('道案内は 3つの動きを順に', C.blue),
    ),
  },
  {
    note: 'まとめです。申し出は Shall I 〜? で返事は Yes, please. / No, thank you.。依頼は Could you 〜? 。Would you mind -ing? には「いいよ」なら Of course not. と否定で答える。提案は Why don’t we 〜? / How about 〜? / Let’s 〜.。場面と返事をセットで覚えます。',
    add: fresh(
      bx(15, 10, 290, 26, '申し出 Shall I ～? → Yes, please.', C.blue, FILL.blue, 12),
      bx(15, 42, 290, 26, '依頼 Would you mind -ing? → Of course not.', C.green, FILL.green, 11),
      bx(15, 74, 290, 26, '提案 Why don’t we ～? → Sounds good.', C.purple, FILL.purple, 12),
      bx(15, 106, 290, 26, '断り I’m sorry, but ～ / Maybe next time.', C.red, FILL.red, 12),
      ...cap('決まり文句は返事までセット', C.main),
    ),
  },
], '会話表現：場面ごとの決まり文句と返事');

// ───────── eigo_07_alphabet_phonics フォニックス ─────────
const u07: DiagramFigure = show([
  {
    note: 'フォニックスは、文字と音の関係のきまりです。アルファベットには「名前」と、単語の中で出す「音」の2つがあります。たとえば b の名前は「ビー」ですが、単語の中では「ブ」と読みます。c は名前「シー」、音は「ク」です。',
    add: [
      ...grid([['文字', '名前', '単語の中の音'], ['b', 'ビー', 'ブ'], ['c', 'シー', 'ク'], ['d', 'ディー', 'ドゥ'], ['f', 'エフ', 'フ']], 40, 6, [60, 80, 110], 22, ['m', 'y', 'r'], 13),
      ...cap('単語を読むときは「音」のほうを使う'),
    ],
  },
  {
    note: '❓なぜ「音」を使うのでしょう。→ 単語は、1文字ずつの音をなめらかにつなげて読むからです。c は「ク」、a は「ア」、t は「トゥ」。ク・ア・トゥとつなげると cat（ねこ）になります。名前（シー・エー・ティー）でつなぐと cat になりません。',
    add: fresh(
      bx(40, 14, 60, 36, 'c', C.blue, FILL.blue, 20), bx(130, 14, 60, 36, 'a', C.red, FILL.red, 20), bx(220, 14, 60, 36, 't', C.green, FILL.green, 20),
      lb(70, 66, 'ク', 14, C.blue, 'middle', true), lb(160, 66, 'ア', 14, C.red, 'middle', true), lb(250, 66, 'トゥ', 14, C.green, 'middle', true),
      ar(160, 78, 160, 96, C.main), bx(110, 98, 100, 32, 'cat（ねこ）', C.main, FILL.yellow, 15),
      ...cap('音をつなげると、単語になる', C.main),
    ),
  },
  {
    note: '母音（ぼいん）の短い音を覚えます。a は「ア」（cat）、i は「イ」（sit）、u は「ア」（cup）、e は「エ」（pen）、o は「オ」（box）。ここまでで、3文字の単語がたくさん読めるようになります。',
    add: fresh(
      ...[['a', 'ア', 'cat'], ['i', 'イ', 'sit'], ['u', 'ア', 'cup'], ['e', 'エ', 'pen'], ['o', 'オ', 'box']].flatMap(([a, b, c], i) => [
        bx(10 + i * 61, 20, 56, 40, a, C.red, FILL.red, 20), lb(38 + i * 61, 78, b, 14, C.red, 'middle', true), bx(10 + i * 61, 92, 56, 26, c, C.gray, FILL.gray, 13),
      ]),
      ...cap('短い母音は 5つ', C.red),
    ),
  },
  {
    note: '3文字の単語を読んでみましょう。d-o-g は ドゥ・オ・グ で dog（いぬ）。b-i-g は ブ・イ・グ で big（大きい）。r-u-n は ゥル・ア・ンヌ で run（走る）。1文字ずつの音を、なめらかにつなげます。',
    add: fresh(
      ...[['d', 'o', 'g', 'ドゥ・オ・グ', 'dog（いぬ）'], ['b', 'i', 'g', 'ブ・イ・グ', 'big（大きい）'], ['r', 'u', 'n', 'ゥル・ア・ンヌ', 'run（走る）']].flatMap(([a, b, c, s, w], i) => [
        bx(10, 12 + i * 40, 28, 30, a, C.blue, FILL.blue, 15), bx(40, 12 + i * 40, 28, 30, b, C.red, FILL.red, 15), bx(70, 12 + i * 40, 28, 30, c, C.green, FILL.green, 15),
        lb(160, 27 + i * 40, s, 11, C.ink, 'middle', true), ar(212, 27 + i * 40, 232, 27 + i * 40, C.main), bx(234, 12 + i * 40, 78, 30, w, C.main, FILL.yellow, 11),
      ]),
      ...cap('音をつなげて読む練習', C.blue),
    ),
  },
  {
    note: '❓単語の最後に e がつくと、なぜ読み方が変わるのでしょう。→ 最後の e は読みませんが、「前の母音をアルファベットの名前で読みなさい」という合図になるからです。これを「マジック e」と呼びます。',
    add: fresh(
      ...[['cap', 'cape', 'a が「エイ」'], ['kit', 'kite', 'i が「アイ」'], ['not', 'note', 'o が「オウ」'], ['cut', 'cute', 'u が「ユー」']].flatMap(([a, b, c], i) => [
        bx(10, 10 + i * 31, 70, 24, a, C.gray, FILL.gray, 13), ar(82, 22 + i * 31, 108, 22 + i * 31, C.main), bx(110, 10 + i * 31, 70, 24, b, C.red, FILL.red, 13), lb(250, 22 + i * 31, c, 12, C.red, 'middle', true),
      ]),
      ...cap('最後の e は読まない。合図の e', C.red),
    ),
  },
  {
    note: '2文字で1つの音になる組み合わせもあります。sh は「シュ」（ship 船）、ch は「チ」（chair いす）、th は「ス／ズ」（think 考える、this これ）、ph は「フ」（phone 電話）、ck は「ク」（duck あひる）。',
    add: fresh(
      ...[['sh', 'シュ', 'ship'], ['ch', 'チ', 'chair'], ['th', 'ス／ズ', 'think / this'], ['ph', 'フ', 'phone'], ['ck', 'ク', 'duck']].flatMap(([a, b, c], i) => [
        bx(10, 8 + i * 26, 50, 22, a, C.purple, FILL.purple, 14), bx(66, 8 + i * 26, 90, 22, b, C.gray, FILL.gray, 12), bx(162, 8 + i * 26, 148, 22, c, C.green, FILL.green, 12),
      ]),
      ...cap('2文字で1つの音', C.purple),
    ),
  },
  {
    note: 'この2文字の音を使って読んでみましょう。ship は sh ＋ i ＋ p。シュ・イ・プとつなげて「シップ」と読みます。sh を s と h の2つに分けず、ひとかたまりで読むのがコツです。',
    add: fresh(
      bx(40, 16, 80, 40, 'sh', C.purple, FILL.purple, 22), bx(124, 16, 50, 40, 'i', C.red, FILL.red, 22), bx(178, 16, 50, 40, 'p', C.green, FILL.green, 22),
      lb(80, 74, 'シュ', 14, C.purple, 'middle', true), lb(149, 74, 'イ', 14, C.red, 'middle', true), lb(203, 74, 'プ', 14, C.green, 'middle', true),
      ar(160, 86, 160, 102, C.main), bx(100, 104, 120, 32, 'ship（船）', C.main, FILL.yellow, 15),
      ...cap('sh はひとかたまり', C.purple),
    ),
  },
  {
    note: 'まとめです。文字には名前と音がある。単語は音をつなげて読む。短い母音は5つ。最後の e は読まず、前の母音を名前の音にする。sh・ch・th などは2文字で1つの音。このきまりで、はじめて見る単語も読めるようになります。',
    add: fresh(
      bx(15, 10, 290, 26, '名前と音はちがう（b：ビー／ブ）', C.blue, FILL.blue, 12),
      bx(15, 40, 290, 26, '音をつなげて読む（c-a-t → cat）', C.green, FILL.green, 12),
      bx(15, 70, 290, 26, '最後の e → 前の母音は名前の音', C.red, FILL.red, 12),
      bx(15, 100, 290, 26, 'sh・ch・th は2文字で1つの音', C.purple, FILL.purple, 12),
      ...cap('音のきまりを知れば、読める！', C.main),
    ),
  },
], 'フォニックス：文字と音のきまり');

// ───────── eigo_08_be_ippan_doushi 三単現の s ─────────
const u08: DiagramFigure = show([
  {
    note: 'be動詞（ビーどうし）以外の動詞は、すべて一般動詞（いっぱんどうし）です。play・like・go・study などがそうです。主語（しゅご）が I や you のときは、そのままの形で使います。I play soccer.（私はサッカーをする）。',
    add: [
      ...sent([['I', 'b'], ['play', 'r'], ['soccer.', 'g']], 14, 32, 15, 20, 300),
      ...rowb(['play', 'like', 'go', 'study', 'eat'], 74, 26, 'm', 12, 10, 310, 6),
      lb(160, 124, 'am / is / are 以外は、ぜんぶ一般動詞', 12, C.ink, 'middle', true),
      ...cap('主語が I のときは、そのままの形'),
    ],
  },
  {
    note: '❓どんなときに動詞に s をつけるのでしょう。→ 主語が「三人称（さんにんしょう）単数（たんすう）」のときです。I と we は一人称、you は二人称、それ以外はすべて三人称。三人称で1人・1つなら三人称単数で、he・she・it・Tom・my mother・the cat などです。',
    add: fresh(
      bx(10, 10, 96, 48, '一人称\nI / we', C.gray, FILL.gray, 12), bx(112, 10, 96, 48, '二人称\nyou', C.gray, FILL.gray, 12), bx(214, 10, 96, 48, '三人称\nそれ以外', C.red, FILL.red, 12),
      lb(160, 78, '三人称で「1人・1つ」＝ 三人称単数', 12, C.red, 'middle', true),
      ...rowb(['he', 'she', 'it', 'Tom', 'my mother'], 94, 28, 'r', 11, 10, 310, 5),
      ...cap('「私」でも「あなた」でもない1人・1つ', C.red),
    ),
  },
  {
    note: '❓三人称単数の主語のとき、動詞はどうなるのでしょう。→ 動詞のうしろに s がつきます。I play tennis. は He plays tennis. になり、They like dogs. は She likes dogs. になります。主語が三人称単数だと動詞が変わる、というのが英語のきまりです。',
    add: fresh(
      ...sent([['I', 'b'], ['play', 'y'], ['tennis.', 'g']], 14, 30, 14, 20, 300),
      ar(160, 48, 160, 66, C.main),
      ...sent([['He', 'r'], ['plays', 'r'], ['tennis.', 'g']], 70, 30, 14, 20, 300), lb(160, 118, 'play ＋ s', 13, C.red, 'middle', true),
      ...cap('He / She / It のときは、動詞に s', C.red),
    ),
  },
  {
    note: 'つけ方は3通りあります。ふつうは s だけ。play→plays、like→likes、run→runs。s・o・x・ch・sh で終わる語は es をつけます。go→goes、watch→watches、wash→washes。',
    add: fresh(
      bx(10, 10, 300, 22, 'ふつう：s だけ', C.blue, FILL.blue, 12),
      ...sent([['play → plays', 'y'], ['like → likes', 'y'], ['run → runs', 'y']], 36, 24, 12),
      bx(10, 72, 300, 22, 's・o・x・ch・sh で終わる：es', C.red, FILL.red, 12),
      ...sent([['go → goes', 'r'], ['watch → watches', 'r'], ['wash → washes', 'r']], 98, 24, 12),
      ...cap('終わりの文字を見て s か es か決める', C.red),
    ),
  },
  {
    note: '❓「子音（しいん）＋y」で終わる語はどうなるでしょう。→ y を i に変えて es をつけます。study→studies、cry→cries。y の前が子音（s や r）の語だけです。play のように y の前が母音（a）なら、そのまま plays です。',
    add: fresh(
      ...sent([['study', 'y'], ['→', 'm'], ['studies', 'r']], 16, 30, 14, 10, 310), lb(160, 62, 'y を i に変えて es', 12, C.red, 'middle', true),
      ...sent([['cry', 'y'], ['→', 'm'], ['cries', 'r']], 78, 30, 14, 10, 310),
      lb(160, 128, 'play（y の前が母音）→ plays：そのまま s', 12, C.blue, 'middle', true),
      ...cap('子音 ＋ y のときだけ y を i に', C.red),
    ),
  },
  {
    note: '特別な形が1つあります。have は has になります。Tom has a dog.（トムは犬を飼っている）。My father goes to work by train.（父は電車で仕事に行く）。She studies math every day.（彼女は毎日数学を勉強する）。',
    add: fresh(
      ...sent([['have', 'y'], ['→', 'm'], ['has', 'r']], 14, 30, 15, 60, 260),
      ...sent([['Tom', 'b'], ['has', 'r'], ['a dog.', 'g']], 62, 30, 14, 20, 300),
      ...sent([['She', 'b'], ['studies', 'r'], ['math', 'g'], ['every day.', 'y']], 108, 28, 12, 10, 310),
      ...cap('have だけは has（haves ではない）', C.red),
    ),
  },
  {
    note: '❓主語が複数のときはどうでしょう。→ 三人称単数ではないので、s をつけません。They like soccer.（彼らはサッカーが好きだ）が正しく、They likes soccer. はまちがいです。we・you・they・my parents のときは、動詞はもとの形のままです。',
    add: fresh(
      bx(10, 20, 140, 34, 'They like soccer.', C.green, FILL.green, 13), lb(80, 70, '○ 複数 → s なし', 12, C.green, 'middle', true),
      bx(170, 20, 140, 34, 'They likes soccer.', C.red, FILL.red, 13), lb(240, 70, '× 複数に s は不要', 12, C.red, 'middle', true),
      lb(160, 112, 'we・you・they・my parents → もとの形', 12, C.ink, 'middle', true),
      ...cap('s がつくのは三人称「単数」だけ', C.green),
    ),
  },
  {
    note: 'まとめです。主語が三人称単数（he・she・it・Tom など）なら、一般動詞に s か es をつける。ふつうは s、s・o・x・ch・sh は es、子音＋y は ies、have は has。複数や I・you のときは、もとの形のままです。',
    add: fresh(
      bx(15, 10, 290, 24, '三人称単数 → 動詞に s', C.red, FILL.red, 13),
      bx(15, 40, 290, 24, 'go → goes　watch → watches', C.blue, FILL.blue, 12),
      bx(15, 70, 290, 24, 'study → studies　have → has', C.purple, FILL.purple, 12),
      bx(15, 100, 290, 24, '複数・I・you → もとの形', C.green, FILL.green, 12),
      ...cap('主語を見て、動詞の形を決める', C.main),
    ),
  },
], '一般動詞：三人称単数の s');

// ───────── eigo_09_gimonshi how の使い方 ─────────
const u09: DiagramFigure = show([
  {
    note: 'how は「どうやって」だけでなく、うしろに形容詞（けいようし）や副詞（ふくし）をつけて「どのくらい〜？」とたずねる便利な疑問詞（ぎもんし）です。how 単独、how many、how much、how old、how long など、順に見ていきましょう。',
    add: [
      bx(10, 10, 300, 28, 'how ＝ どうやって（方法・様子）', C.blue, FILL.blue, 13),
      bx(10, 46, 300, 28, 'how ＋ 形容詞 ＝ どのくらい〜？（程度）', C.red, FILL.red, 13),
      ...rowb(['how many', 'how much', 'how old', 'how long'], 84, 30, 'm', 11, 10, 310, 5),
      ...cap('うしろの言葉しだいで、たずねる中身が変わる'),
    ],
  },
  {
    note: 'まず how 単独です。方法は How do you go to school?（どうやって学校へ行きますか）— By bus.。状態は How are you?（元気ですか）— I’m fine, thank you.。様子は How is the weather?（天気はどうですか）— It’s sunny.。',
    add: fresh(
      ...[['How do you go to school?', 'By bus.', '方法'], ['How are you?', "I'm fine, thank you.", '状態'], ['How is the weather?', "It's sunny.", '様子']].flatMap(([q, a, t], i) => [
        tag(8, 12 + i * 42, 44, t, 'm', 11), bx(56, 8 + i * 42, 140, 28, q, C.blue, FILL.blue, 11), ar(198, 22 + i * 42, 214, 22 + i * 42, C.main), bx(216, 8 + i * 42, 96, 28, a, C.green, FILL.green, 10),
      ]),
      ...cap('how 単独は「どうやって・どんな具合」', C.blue),
    ),
  },
  {
    note: '❓how many のうしろの名詞は、なぜ複数形（ふくすうけい）なのでしょう。→ many は「たくさんの」という意味で、2つ以上の数えられるものに使うからです。How many books do you have?（本を何冊持っていますか）— I have ten.。books のように s がつきます。',
    add: fresh(
      ...sent([['How many', 'r'], ['books', 'b'], ['do you have?', 'y']], 14, 30, 14, 10, 310),
      ...Array.from({ length: 10 }, (_, i) => bx(30 + i * 26, 76, 20, 26, '', C.blue, FILL.blue)),
      lb(160, 120, 'I have ten.（10冊）', 13, C.green, 'middle', true),
      ...cap('数えられる名詞の複数形 → many', C.red),
    ),
  },
  {
    note: '❓では how much はいつ使うのでしょう。→ 数えられないもの（水・お金など）の量をたずねるときと、値段をたずねるときです。How much water do you need?（水はどれくらい必要ですか）。How much is this bag?（このかばんはいくらですか）— It’s 2,000 yen.。数えられるなら many、数えられないなら much です。',
    add: fresh(
      bx(10, 10, 148, 50, 'How many ＋ 複数形\n数えられる（本・人）', C.blue, FILL.blue, 11), bx(162, 10, 148, 50, 'How much ＋ 名詞\n数えられない（水・お金）', C.red, FILL.red, 11),
      ...sent([['How much', 'r'], ['is this bag?', 'y']], 76, 28, 13, 10, 200), ar(204, 90, 220, 90, C.main), bx(222, 76, 88, 28, "It's 2,000 yen.", C.green, FILL.green, 10),
      lb(160, 128, '値段もたずねられる', 12, C.red, 'middle', true),
      ...cap('数えられる → many、数えられない → much', C.red),
    ),
  },
  {
    note: '年れいは How old are you?（何歳ですか）— I’m twelve (years old).。物の古さにも使えて、How old is this temple?（この寺はできて何年ですか）とたずねられます。old は「年をとった」ではなく、ここでは「どのくらいの年れいか」の程度（ていど）を表します。',
    add: fresh(
      ...sent([['How old', 'r'], ['are you?', 'y']], 14, 30, 14, 10, 200), ar(204, 29, 220, 29, C.main), bx(222, 14, 88, 30, "I'm twelve.", C.green, FILL.green, 12),
      ...sent([['How old', 'r'], ['is this temple?', 'y']], 70, 30, 14, 10, 230), lb(160, 118, 'どのくらい古いか（年れい）をたずねる', 12, C.ink, 'middle', true),
      ...cap('how old ＝ 年れい・古さ', C.red),
    ),
  },
  {
    note: '❓ほかの how ＋ 形容詞は、どうなるのでしょう。→ すべて同じ作りで、形容詞の「どのくらい」をたずねます。how long（長さ・期間）、how tall（身長）、how far（距離（きょり））、how often（回数・頻度（ひんど））。How often do you play tennis? — Twice a week.（週に2回）。',
    add: fresh(
      ...grid([['how ＋ ', 'たずねること', '答えの例'], ['long', '長さ・期間', 'Two weeks.'], ['tall', '身長', "I'm 150 cm."], ['far', '距離', 'About 1 km.'], ['often', '頻度', 'Twice a week.']], 10, 8, [60, 100, 130], 24, ['r', 'y', 'g'], 12),
      ...cap('「how ＋ 形容詞」＝ どのくらい〜？', C.red),
    ),
  },
  {
    note: '共通のルールをまとめると、how のあとに知りたい言葉（形容詞・副詞）を置けば、その「どのくらい」をたずねる文になります。そのあとはふつうの疑問文の順（do you 〜 / are you 〜 / is it 〜）です。',
    add: fresh(
      bx(20, 14, 80, 36, 'How', C.blue, FILL.blue, 16), lb(110, 32, '＋', 16, C.ink), bx(124, 14, 100, 36, '形容詞・副詞', C.red, FILL.red, 13), lb(234, 32, '＋', 16, C.ink), bx(246, 14, 64, 36, 'ふつうの\n疑問文', C.green, FILL.green, 10),
      ...sent([['How', 'b'], ['tall', 'r'], ['are you?', 'g']], 82, 30, 14, 20, 300), lb(160, 128, 'どのくらい 背が高い あなたは？ → 身長をたずねる', 11, C.ink, 'middle', true),
      ...cap('知りたい言葉を how のうしろに置く', C.main),
    ),
  },
  {
    note: 'まとめです。方法・様子は how だけ。数えられるものの数は how many、数えられない量と値段は how much。年れいは how old。長さ・身長・距離・頻度は how long / tall / far / often。「how ＋ 形容詞で、どのくらい〜？」と覚えます。',
    add: fresh(
      bx(15, 10, 290, 24, 'how ＝ どうやって・どんな具合', C.blue, FILL.blue, 12),
      bx(15, 38, 290, 24, 'how many ＋ 複数形 ／ how much ＋ 数えられない・値段', C.red, FILL.red, 11),
      bx(15, 66, 290, 24, 'how old（年れい）', C.green, FILL.green, 12),
      bx(15, 94, 290, 24, 'how long・tall・far・often（長さ・身長・距離・頻度）', C.purple, FILL.purple, 11),
      ...cap('how ＋ 形容詞 ＝ どのくらい〜？', C.main),
    ),
  },
], 'how：うしろの言葉で「どのくらい」をたずねる');

// ───────── eigo_10_can_meirei can ─────────
const u10: DiagramFigure = show([
  {
    note: 'can は「〜できる」という意味で、動詞（どうし）を助ける言葉なので助動詞（じょどうし）といいます。形は「主語（しゅご）＋ can ＋ 動詞のもとの形」です。I can swim.（私は泳げる）、Birds can fly.（鳥は飛べる）。',
    add: [
      ...sent([['I', 'b'], ['can', 'r'], ['swim.', 'g']], 20, 32, 15, 20, 300),
      ...sent([['Birds', 'b'], ['can', 'r'], ['fly.', 'g']], 76, 32, 15, 20, 300),
      lb(160, 128, '主語 ＋ can ＋ 動詞のもとの形', 13, C.ink, 'middle', true),
      ...cap('can ＝ 〜できる'),
    ],
  },
  {
    note: '❓she が主語でも、なぜ can のあとの動詞に s をつけないのでしょう。→ 人や時を表す役目は can が引き受けているので、あとの動詞は変化しなくてよいからです。She speaks English. は、can が入ると She can speak English. になり、speaks の s は消えます。',
    add: fresh(
      ...sent([['She', 'b'], ['speaks', 'y'], ['English.', 'g']], 14, 30, 14, 10, 310),
      ar(160, 48, 160, 66, C.main),
      ...sent([['She', 'b'], ['can', 'r'], ['speak', 'y'], ['English.', 'g']], 70, 30, 14, 10, 310),
      lb(160, 118, 'can があると s は不要', 13, C.red, 'middle', true),
      ...cap('× She can speaks　○ She can speak', C.red),
    ),
  },
  {
    note: '否定文（ひていぶん）は can のあとに not をつけます。can not は1語にして cannot、短くすると can’t です。I can’t ride a bike.（私は自転車に乗れない）。He can’t cook.（彼は料理ができない）。ここでもあとの動詞はもとの形です。',
    add: fresh(
      ...sent([['I', 'b'], ['can’t', 'r'], ['ride', 'y'], ['a bike.', 'g']], 20, 32, 14, 10, 310),
      lb(160, 74, 'can ＋ not ＝ cannot ＝ can’t', 13, C.red, 'middle', true),
      ...sent([['He', 'b'], ['can’t', 'r'], ['cook.', 'y']], 98, 32, 14, 20, 300),
      ...cap('ないときは not を can のうしろに', C.red),
    ),
  },
  {
    note: '疑問文（ぎもんぶん）は can を文の最初に出します。Can you swim?（泳げますか）。答えは Yes, I can. か No, I can’t.。Can you play the guitar? も同じ形で、答えにも can を使います。',
    add: fresh(
      ...sent([['Can', 'r'], ['you', 'b'], ['swim?', 'g']], 14, 32, 15, 20, 300),
      ar(160, 52, 160, 68, C.main),
      bx(30, 70, 120, 30, 'Yes, I can.', C.green, FILL.green, 14), bx(170, 70, 120, 30, "No, I can't.", C.red, FILL.red, 14),
      lb(160, 124, 'can を前に出す → 答えも can で', 12, C.ink, 'middle', true),
      ...cap('Can ＋ 主語 ＋ 動詞のもとの形 ?', C.blue),
    ),
  },
  {
    note: 'can はほかの言い方もあります。be able to（〜することができる）です。I can swim. = I am able to swim. と同じ意味です。形は be動詞 ＋ able to ＋ 動詞のもとの形です。',
    add: fresh(
      ...sent([['I', 'b'], ['can', 'r'], ['swim.', 'g']], 20, 30, 14, 10, 310),
      lb(160, 66, '＝（同じ意味）', 13, C.main, 'middle', true),
      ...sent([['I', 'b'], ['am able to', 'r'], ['swim.', 'g']], 82, 30, 14, 10, 310),
      ...cap('can ＝ be able to', C.main),
    ),
  },
  {
    note: '❓では、未来のことを言うとき、なぜ will can ではなく will be able to なのでしょう。→ 助動詞は2つ並べられないからです。will も can も助動詞なので、can のかわりに be able to を使い、あとは be のもとの形にします。I will be able to swim soon.（もうすぐ泳げるようになる）。',
    add: fresh(
      bx(20, 16, 130, 30, 'will can swim', C.red, FILL.red, 14), lb(85, 60, '× 助動詞が2つ', 12, C.red, 'middle', true),
      ...sent([['I', 'b'], ['will', 'r'], ['be able to', 'g'], ['swim soon.', 'y']], 86, 32, 13, 10, 310),
      lb(160, 138, '○ will ＋ be able to ＋ 動詞のもとの形', 12, C.green, 'middle', true),
      ...cap('助動詞は2つ並べられない', C.red),
    ),
  },
  {
    note: 'will・must・should・may も、can と同じ仲間（助動詞）です。きまりは3つ。①あとの動詞はいつももとの形。②助動詞は2つ並べない。③否定は助動詞のうしろに not、疑問は助動詞を前に出す。You must do your homework.（宿題をしなければならない）。',
    add: fresh(
      ...rowb(['can', 'will', 'must', 'should', 'may'], 10, 28, 'r', 12, 10, 310, 6),
      bx(15, 54, 290, 24, '① あとの動詞はもとの形（s なし）', C.blue, FILL.blue, 12),
      bx(15, 82, 290, 24, '② 助動詞は2つ並べない', C.green, FILL.green, 12),
      bx(15, 110, 290, 24, '③ 否定は not、疑問は前に出す', C.purple, FILL.purple, 12),
      ...cap('助動詞の3つのきまり', C.main),
    ),
  },
  {
    note: 'まとめです。can ＝ 〜できる。あとの動詞はもとの形で s なし。否定は can’t（cannot）、疑問は Can you 〜?。未来や完了では be able to を使う。助動詞は2つ並べられない、というきまりが一番のポイントです。',
    add: fresh(
      bx(15, 10, 290, 26, 'I can swim.（主語 ＋ can ＋ 原形）', C.blue, FILL.blue, 12),
      bx(15, 40, 290, 26, "否定：can't　疑問：Can you ～?", C.red, FILL.red, 12),
      bx(15, 70, 290, 26, 'be able to で言いかえられる', C.green, FILL.green, 12),
      bx(15, 100, 290, 26, 'will can ではなく will be able to', C.purple, FILL.purple, 12),
      ...cap('あとの動詞は、いつももとの形', C.main),
    ),
  },
], 'can：助動詞のあとは、動詞のもとの形');

// ───────── eigo_11_aisatsu_kaiwa 数の言い方 ─────────
const u11: DiagramFigure = show([
  {
    note: '数には2種類あります。ものの数を表す基数（きすう）は one, two, three…。順番を表す序数（じょすう）は first, second, third…。日付・時間・値段・電話番号など、あらゆる場面で使うので、セットで覚えましょう。',
    add: [
      bx(10, 14, 148, 54, '基数（きすう）\none, two, three…\nものの数', C.blue, FILL.blue, 12), bx(162, 14, 148, 54, '序数（じょすう）\nfirst, second, third…\n順番', C.red, FILL.red, 12),
      ...rowb(['3つ', '3番目'], 84, 24, 'y', 12, 40, 280, 40),
      lb(160, 124, 'three（3つ）　third（3番目）', 12, C.ink, 'middle', true),
      ...cap('数 と 順番 はペアで覚える'),
    ],
  },
  {
    note: '1〜12は一つずつ覚えます。13〜19は -teen がつきます：thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen。❓ふつうの形と何がちがうのでしょう。→ thirteen・fifteen・eighteen は three・five・eight と少しつづりが変わる特別な形なので、気をつけます。',
    add: fresh(
      ...rowb(['thirteen', 'fourteen', 'fifteen', 'sixteen'], 12, 28, 'b', 11, 8, 312, 4),
      ...rowb(['seventeen', 'eighteen', 'nineteen'], 46, 28, 'b', 11, 8, 312, 4),
      lb(160, 92, 'つづりが変わる特別な形', 12, C.red, 'middle', true),
      ...rowb(['thirteen（three でない）', 'fifteen（five でない）', 'eighteen（eight でない）'], 106, 28, 'r', 9, 8, 312, 4),
      ...cap('13〜19は -teen、3つは特別', C.red),
    ),
  },
  {
    note: '何十は twenty(20)、thirty(30)、forty(40)、fifty(50)、sixty(60)、seventy(70)、eighty(80)、ninety(90)。❓forty のつづりで気をつけることは？→ four の u がなくなり、fourty ではなく forty と書きます。',
    add: fresh(
      ...rowb(['twenty', 'thirty', 'forty', 'fifty'], 10, 28, 'b', 12, 10, 310, 5),
      ...rowb(['sixty', 'seventy', 'eighty', 'ninety'], 44, 28, 'b', 12, 10, 310, 5),
      bx(100, 92, 120, 30, 'forty（40）', C.red, FILL.red, 15), lb(160, 140, 'u がなくなる（× fourty）', 12, C.red, 'middle', true),
      ...cap('40 は forty、u なし', C.red),
    ),
  },
  {
    note: '21以上はハイフンでつなぎます。21は twenty-one、35は thirty-five。100は one hundred、1,000は one thousand、235は two hundred (and) thirty-five。❓hundred は複数でも s をつけない？→ そうです。two hundred が正しく、two hundreds は×です。',
    add: fresh(
      ...[['21', 'twenty-one'], ['35', 'thirty-five'], ['100', 'one hundred'], ['235', 'two hundred thirty-five']].flatMap(([n, w], i) => [
        bx(10, 8 + i * 30, 50, 24, n, C.gray, FILL.gray, 13), ar(62, 20 + i * 30, 80, 20 + i * 30, C.main), bx(82, 8 + i * 30, 226, 24, w, C.blue, FILL.blue, 13),
      ]),
      lb(160, 134, '○ two hundred　× two hundreds', 12, C.red, 'middle', true),
      ...cap('21〜99 はハイフン。hundred に s なし', C.blue),
    ),
  },
  {
    note: '序数は first(1st)、second(2nd)、third(3rd)が特別で、そのあとは fourth(4th)、fifth(5th)と -th がつくのが基本です。❓1st・2nd・3rd はなぜ特別といわれるのでしょう。→ one・two・three とは別の言葉を使うからです。それ以外は基数に -th をつけます。',
    add: fresh(
      ...grid([['基数', '序数', '略'], ['one', 'first', '1st'], ['two', 'second', '2nd'], ['three', 'third', '3rd'], ['four', 'fourth', '4th'], ['five', 'fifth', '5th']], 30, 6, [90, 110, 60], 20, ['b', 'r', 'g'], 12),
      ...cap('1・2・3番目は特別な形', C.red),
    ),
  },
  {
    note: '❓序数のつづりで、まちがえやすいところは？→ 5番目は fifth（five の ve が f に）、9番目は ninth（nine の e がなくなる）、12番目は twelfth（twelve の ve が f に）。20番目は twentieth、21番目は twenty-first です。',
    add: fresh(
      ...grid([['数', '序数', 'ポイント'], ['5', 'fifth', 've → f'], ['9', 'ninth', 'e がなくなる'], ['12', 'twelfth', 've → f'], ['20', 'twentieth', 'y → ieth'], ['21', 'twenty-first', 'first をつける']], 14, 6, [50, 110, 130], 20, ['y', 'r', 'g'], 12),
      ...cap('fifth・ninth・twelfth に注意', C.red),
    ),
  },
  {
    note: '序数は、日付・順番・回数に使います。May 5th（5月5日）、the third of April（4月3日）、the first floor（1階）、the second question（2問目）、the first time（初めて）。「〜番目の」には the がつくのがふつうです。',
    add: fresh(
      ...[['日付', 'May 5th / the third of April'], ['階・順番', 'the first floor / the second question'], ['回数', 'the first time（初めて）']].flatMap(([a, b], i) => [
        tag(10, 18 + i * 40, 56, a, 'm', 11), bx(70, 14 + i * 40, 240, 28, b, C.red, FILL.red, 12),
      ]),
      ...cap('序数には the をつけて使うことが多い', C.red),
    ),
  },
  {
    note: '電話番号と年号の読み方です。電話番号は数字を1つずつ読みます（0はゼロまたはオー）。年号は2けたずつ読み、1999は nineteen ninety-nine、2026は twenty twenty-six です。',
    add: fresh(
      bx(10, 12, 300, 28, '090 → zero nine zero（1つずつ）', C.blue, FILL.blue, 13),
      bx(10, 52, 300, 28, '1999 → nineteen ninety-nine（19｜99）', C.green, FILL.green, 12),
      bx(10, 92, 300, 28, '2026 → twenty twenty-six（20｜26）', C.green, FILL.green, 12),
      ...cap('電話は1つずつ、年は2けたずつ', C.main),
    ),
  },
  {
    note: 'まとめです。13〜19は -teen、40は forty、21以上はハイフン、hundred に s なし。序数は first・second・third が特別で、あとは -th。fifth・ninth・twelfth のつづりに注意します。電話は1つずつ、年は2けたずつ読みます。',
    add: fresh(
      bx(15, 10, 290, 26, '基数：-teen、forty、twenty-one（ハイフン）', C.blue, FILL.blue, 12),
      bx(15, 40, 290, 26, '序数：first・second・third、あとは -th', C.red, FILL.red, 12),
      bx(15, 70, 290, 26, 'つづり注意：fifth・ninth・twelfth', C.purple, FILL.purple, 12),
      bx(15, 100, 290, 26, '電話は1つずつ、年は2けたずつ', C.green, FILL.green, 12),
      ...cap('数は つづりと読み方をセットで', C.main),
    ),
  },
], '数の言い方：基数と序数');

// ───────── eigo_12_zenchishi 時を表す前置詞 ─────────
const u12: DiagramFigure = show([
  {
    note: '前置詞（ぜんちし）は、名詞（めいし）の前に置いて、場所や時を表す小さな言葉です。時を表す at・on・in は、時の「広さ」で使い分けます。せまい順に at（時刻）、on（曜日・日付）、in（月・季節・年）です。',
    add: [
      bx(10, 8, 300, 132, '', C.blue, FILL.blue),
      lb(160, 22, 'in：月・季節・年（広い）', 12, C.blue, 'middle', true),
      bx(30, 34, 260, 98, '', C.green, FILL.green), lb(160, 48, 'on：曜日・日付（ふつう）', 12, C.green, 'middle', true),
      bx(50, 60, 220, 62, '', C.red, FILL.red), lb(160, 80, 'at：時刻（せまい一点）', 12, C.red, 'middle', true), lb(160, 102, 'at seven', 13, C.red, 'middle', true),
      ...cap('時の広さ：at ＜ on ＜ in'),
    ],
  },
  {
    note: '❓なぜ時刻は at なのでしょう。→ at は地図上の「一点」を指すイメージの言葉で、7時のようなぴったりの一点の時にぴったりだからです。at seven（7時に）、at noon（正午に）、at night（夜に）。',
    add: fresh(
      ln(20, 70, 300, 70, C.gray, false, 2), ci(160, 70, 8, '', C.red, FILL.red),
      lb(160, 46, 'at seven　（7時の一点）', 14, C.red, 'middle', true), lb(160, 98, '時刻・時の一点 → at', 13, C.red, 'middle', true),
      ...rowb(['at seven', 'at noon', 'at night'], 114, 24, 'r', 12, 20, 300, 8),
      ...cap('一点の時 → at', C.red),
    ),
  },
  {
    note: '❓on は何に使うのでしょう。→ 曜日や日付のように「その日」という、一日ぶんの広さのときです。on Monday（月曜日に）、on May 5th（5月5日に）、on my birthday（誕生日に）。at より広く、in より狭い中間です。',
    add: fresh(
      bx(20, 20, 280, 40, '', C.green, FILL.green), lb(160, 40, '一日ぶんの広さ', 13, C.green, 'middle', true),
      ...rowb(['on Monday', 'on May 5th', 'on my birthday'], 84, 28, 'g', 11, 10, 310, 6),
      ...cap('曜日・日付 → on', C.green),
    ),
  },
  {
    note: '❓in は何に使うのでしょう。→ 月・季節・年のような、広い期間に使います。in April（4月に）、in summer（夏に）、in 2026（2026年に）。at → on → in と、せまい時から広い時へ広がっていくと覚えます。',
    add: fresh(
      bx(10, 12, 300, 36, '', C.blue, FILL.blue), lb(160, 30, '月・季節・年の広さ', 13, C.blue, 'middle', true),
      ...rowb(['in April', 'in summer', 'in 2026'], 64, 28, 'b', 12, 10, 310, 6),
      ...flow(['at', 'on', 'in'], 106, { h: 28, size: 14, color: C.main, fill: FILL.yellow, gap: 40 }).flat(),
      ...cap('せまい → 広い：at → on → in', C.blue),
    ),
  },
  {
    note: '期間（きかん）を表す for と during です。for のうしろには「10年」「2時間」のような数字をふくむ長さが来ます。I have lived here for ten years.（10年間ここに住んでいる）。during のうしろには「夏休み」「映画」のような特定の期間を表す名詞が来ます。',
    add: fresh(
      bx(10, 10, 148, 40, 'for ＋ 数字の長さ\nfor ten years', C.blue, FILL.blue, 12), bx(162, 10, 148, 40, 'during ＋ 名詞\nduring the summer vacation', C.green, FILL.green, 10),
      ...sent([['We waited', 'y'], ['for two hours.', 'b']], 70, 28, 12, 8, 156), ...sent([['She fell asleep', 'y'], ['during the movie.', 'g']], 70, 28, 11, 162, 314),
      ...cap('数 → for、名詞 → during', C.main),
    ),
  },
  {
    note: '❓during two hours はなぜだめなのでしょう。→ during は「いつの期間か」を名詞で言う言葉で、「どれだけの長さか」を数で言うのは for の仕事だからです。2時間なら for two hours が正しい形です。',
    add: fresh(
      bx(20, 16, 130, 30, 'during two hours', C.red, FILL.red, 13), lb(85, 60, '× 数の長さに during', 12, C.red, 'middle', true),
      bx(170, 16, 130, 30, 'for two hours', C.green, FILL.green, 13), lb(235, 60, '○ 数の長さは for', 12, C.green, 'middle', true),
      lb(160, 106, '数字が入っていれば for', 13, C.ink, 'middle', true),
      ...cap('during のあとは数字でなく名詞', C.red),
    ),
  },
  {
    note: '期限（きげん）を表す by と until です。by は「〜までに」で、その時までに動作が終わること。Please finish this work by Friday.（金曜日までにこの仕事を終えて）。until は「〜まで（ずっと）」で、その時まで状態が続くこと。I will wait here until five.（5時までここで待つ）。',
    add: fresh(
      ln(20, 44, 300, 44, C.gray, false, 2), lb(290, 30, '金曜', 11, C.ink, 'middle', true), ln(290, 38, 290, 50, C.ink, false, 2),
      ar(150, 62, 290, 62, C.red), ci(150, 62, 5, '', C.red, FILL.red), lb(80, 76, '終わる（完了）', 11, C.red, 'middle', true), lb(220, 76, 'by Friday', 13, C.red, 'middle', true),
      ln(20, 108, 300, 108, C.gray, false, 2), lb(290, 94, '5時', 11, C.ink, 'middle', true), ln(290, 102, 290, 114, C.ink, false, 2),
      bx(40, 120, 250, 12, '', C.green, FILL.green), lb(80, 142, 'ずっと待つ（継続）', 11, C.green, 'middle', true), lb(220, 142, 'until five', 13, C.green, 'middle', true),
      ...cap('by ＝ 完了　until ＝ 継続', C.main),
    ),
  },
  {
    note: '見分け方は動詞です。finish・return・submit のように「終わる動作」なら by、wait・stay・sleep のように「続く状態」なら until。Submit your homework by Monday.（月曜までに提出）／She stayed at her aunt’s house until Monday.（月曜まで滞在した）。',
    add: fresh(
      bx(10, 12, 148, 32, '終わる動作\nfinish・return・submit', C.red, FILL.red, 11), ar(84, 46, 84, 62, C.red), bx(36, 64, 96, 26, 'by', C.red, FILL.red, 16),
      bx(162, 12, 148, 32, '続く状態\nwait・stay・sleep', C.green, FILL.green, 11), ar(236, 46, 236, 62, C.green), bx(188, 64, 96, 26, 'until', C.green, FILL.green, 16),
      lb(160, 116, 'Submit your homework by Monday.', 11, C.red, 'middle', true), lb(160, 134, 'She stayed there until Monday.', 11, C.green, 'middle', true),
      ...cap('動詞を見れば、by か until か分かる', C.main),
    ),
  },
  {
    note: 'まとめです。時刻は at、曜日・日付は on、月・季節・年は in。数字の長さは for、名詞の期間は during。完了する動作の期限は by、続く状態の期限は until。そのほか since（〜から）、within（〜以内に）もあります。',
    add: fresh(
      bx(15, 10, 290, 24, 'at 時刻　on 曜日・日付　in 月・季節・年', C.blue, FILL.blue, 12),
      bx(15, 40, 290, 24, 'for ＋ 数字の長さ　during ＋ 名詞', C.green, FILL.green, 12),
      bx(15, 70, 290, 24, 'by ＝ 完了　until ＝ 継続', C.red, FILL.red, 12),
      bx(15, 100, 290, 24, 'since ＝ 〜から　within ＝ 〜以内に', C.purple, FILL.purple, 12),
      ...cap('時の前置詞は広さと動詞で選ぶ', C.main),
    ),
  },
], '時の前置詞：at・on・in と for・during・by・until');

// ───────── eigo_13_hikaku 比較級・最上級の作り方 ─────────
const u13: DiagramFigure = show([
  {
    note: '比較（ひかく）の表現は、形容詞（けいようし）や副詞（ふくし）の形を変えて作ります。もとの形（原級）、2つを比べる比較級（ひかくきゅう）、3つ以上でいちばんの最上級（さいじょうきゅう）です。tall（背が高い）なら tall → taller → tallest。',
    add: [
      ...flow(['tall\nもとの形', 'taller\nより高い', 'tallest\nいちばん高い'], 28, { h: 70, size: 13, color: C.blue, fill: FILL.blue, gap: 16 }).flat(),
      ...cap('原級 → 比較級（-er）→ 最上級（-est）'),
    ],
  },
  {
    note: '短い語（1音節（おんせつ））は、そのまま -er / -est をつけます。tall → taller → tallest、small → smaller → smallest、long → longer → longest。いちばん基本の形です。',
    add: fresh(
      ...[['tall', 'taller', 'tallest'], ['small', 'smaller', 'smallest'], ['long', 'longer', 'longest']].flatMap(([a, b, c], i) => [
        bx(10, 14 + i * 38, 90, 28, a, C.gray, FILL.gray, 14), ar(102, 28 + i * 38, 114, 28 + i * 38, C.main), bx(116, 14 + i * 38, 90, 28, b, C.blue, FILL.blue, 14), ar(208, 28 + i * 38, 220, 28 + i * 38, C.main), bx(222, 14 + i * 38, 88, 28, c, C.red, FILL.red, 13),
      ]),
      ...cap('そのまま -er / -est', C.blue),
    ),
  },
  {
    note: '❓e で終わる語は、なぜ -r / -st だけなのでしょう。→ すでに e があるので、-er をそのままつけると e が2つ重なってしまうからです。e は1つにして、large → larger → largest、nice → nicer → nicest となります。',
    add: fresh(
      ...sent([['large', 'y'], ['＋ er', 'b'], ['→', 'm'], ['larger', 'r']], 16, 30, 14, 10, 310), lb(160, 62, 'large＋er で e が重なる → e は1つ', 12, C.red, 'middle', true),
      ...[['large', 'larger', 'largest'], ['nice', 'nicer', 'nicest']].flatMap(([a, b, c], i) => [
        bx(20, 84 + i * 32, 80, 24, a, C.gray, FILL.gray, 13), ar(102, 96 + i * 32, 114, 96 + i * 32, C.main), bx(116, 84 + i * 32, 80, 24, b, C.blue, FILL.blue, 13), ar(198, 96 + i * 32, 210, 96 + i * 32, C.main), bx(212, 84 + i * 32, 88, 24, c, C.red, FILL.red, 13),
      ]),
      ...cap('e で終わる → -r / -st', C.red),
    ),
  },
  {
    note: '❓big は、なぜ biger ではなく bigger なのでしょう。→ 「短い母音＋子音字」で終わる語は、最後の子音字を重ねます。子音字を重ねないと、前の i が「アイ」と読まれてしまうので、短い音のまま保つために g を重ねるのです。big → bigger → biggest、hot → hotter → hottest。',
    add: fresh(
      ...sent([['big', 'y'], ['→', 'm'], ['bigger', 'r'], ['→', 'm'], ['biggest', 'r']], 14, 30, 13, 10, 310),
      bx(30, 62, 120, 24, '× biger（i が「アイ」になる）', C.red, FILL.red, 9), bx(170, 62, 120, 24, '○ bigger（i は短いまま）', C.green, FILL.green, 10),
      ...sent([['hot', 'y'], ['→', 'm'], ['hotter', 'r'], ['→', 'm'], ['hottest', 'r']], 106, 30, 13, 10, 310),
      ...cap('短い母音 ＋ 子音 → 子音を重ねる', C.red),
    ),
  },
  {
    note: '「子音字＋y」で終わる語は、y を i に変えます。easy → easier → easiest、happy → happier → happiest。三単現（さんたんげん）の s のときと同じ考え方です（study → studies）。',
    add: fresh(
      ...[['easy', 'easier', 'easiest'], ['happy', 'happier', 'happiest']].flatMap(([a, b, c], i) => [
        bx(10, 22 + i * 44, 90, 30, a, C.gray, FILL.gray, 14), ar(102, 37 + i * 44, 114, 37 + i * 44, C.main), bx(116, 22 + i * 44, 90, 30, b, C.blue, FILL.blue, 14), ar(208, 37 + i * 44, 220, 37 + i * 44, C.main), bx(222, 22 + i * 44, 88, 30, c, C.red, FILL.red, 13),
      ]),
      lb(160, 118, 'y を i に変えて -er / -est', 13, C.red, 'middle', true),
      ...cap('子音 ＋ y → y を i に', C.red),
    ),
  },
  {
    note: '❓長い語はどうするのでしょう。→ -er をつけると言いにくいので、前に more / most を置きます。beautiful → more beautiful → most beautiful（美しい）。目安は、母音のかたまりが3つ以上の語です。famous・difficult・important なども同じです。',
    add: fresh(
      ...sent([['beautiful', 'y'], ['more beautiful', 'b'], ['most beautiful', 'r']], 16, 32, 12, 8, 312),
      lb(160, 68, '前に more / most を置く', 13, C.red, 'middle', true),
      ...rowb(['famous', 'difficult', 'important'], 90, 26, 'm', 12, 20, 300, 8),
      lb(160, 134, 'どれも more ○○ ／ most ○○', 12, C.ink, 'middle', true),
      ...cap('長い語は more / most', C.red),
    ),
  },
  {
    note: '形が全く変わる不規則（ふきそく）な語は暗記が必要です。good / well → better → best。bad → worse → worst。many / much → more → most。little → less → least。good と well はどちらも better・best になります。',
    add: fresh(
      ...grid([['原級', '比較級', '最上級'], ['good / well', 'better', 'best'], ['bad', 'worse', 'worst'], ['many / much', 'more', 'most'], ['little', 'less', 'least']], 14, 8, [100, 90, 90], 24, ['y', 'b', 'r'], 12),
      ...cap('形が変わる語は丸暗記', C.main),
    ),
  },
  {
    note: 'まとめです。ふつうの短い語は -er / -est。e で終わるなら -r / -st。短い母音＋子音は子音を重ねる。子音＋y は y を i に。長い語は more / most。good・bad・many・little は不規則。語の形を見て、順に当てはめます。',
    add: fresh(
      bx(15, 8, 290, 22, 'ふつう：-er / -est　e終わり：-r / -st', C.blue, FILL.blue, 12),
      bx(15, 34, 290, 22, '短母音＋子音：重ねる（big → bigger）', C.red, FILL.red, 12),
      bx(15, 60, 290, 22, '子音＋y：y → i（easy → easier）', C.purple, FILL.purple, 12),
      bx(15, 86, 290, 22, '長い語：more / most', C.green, FILL.green, 12),
      bx(15, 112, 290, 22, '不規則：good → better → best など', C.main, FILL.warm, 12),
      ...cap('語の形を見て、順に当てはめる', C.main),
    ),
  },
], '比較級・最上級：語の形で作り方が決まる');

// ───────── eigo_14_there_is_are ─────────
const u14: DiagramFigure = show([
  {
    note: '「〜がある」「〜がいる」と、ものの存在（そんざい）を伝える形が There is / There are です。あとに来る名詞が1つなら There is、2つ以上なら There are を使います。There is a cat on the sofa.（ソファの上に猫が1匹いる）。',
    add: [
      ...sent([['There is', 'r'], ['a cat', 'b'], ['on the sofa.', 'g']], 20, 32, 14, 10, 310),
      ...sent([['There are', 'r'], ['three books', 'b'], ['on the desk.', 'g']], 76, 32, 14, 10, 310),
      lb(160, 132, '1つ → is　　2つ以上 → are', 13, C.ink, 'middle', true),
      ...cap('There is ＋ 単数　／　There are ＋ 複数'),
    ],
  },
  {
    note: '❓文の最初の There は「そこに」という意味でしょうか。→ いいえ。There は形だけの主語で、日本語には訳しません。本当の主語は、is / are のあとの名詞です。実際の場所は、文の最後（on the sofa）に書かれています。',
    add: fresh(
      ...sent([['There', 'y', '訳さない'], ['is', 'r'], ['a cat', 'b', '本当の主語'], ['on the sofa.', 'g', '場所']], 20, 32, 13, 6, 314),
      lb(160, 100, '場所は文の最後！', 13, C.green, 'middle', true),
      ...cap('There は形だけの主語', C.red),
    ),
  },
  {
    note: '❓では、is と are は何で決まるのでしょう。→ あとに来る名詞が1つか2つ以上かです。a cat は1匹なので is、three books は3冊なので are。There があるからではなく、本当の主語に合わせます。',
    add: fresh(
      bx(10, 14, 140, 30, 'a cat（1匹）', C.blue, FILL.blue, 14), ar(80, 46, 80, 62, C.main), bx(40, 64, 80, 28, 'is', C.red, FILL.red, 16),
      bx(170, 14, 140, 30, 'three books（3冊）', C.blue, FILL.blue, 13), ar(240, 46, 240, 62, C.main), bx(200, 64, 80, 28, 'are', C.red, FILL.red, 16),
      lb(160, 120, 'あとの名詞の数に合わせる', 13, C.ink, 'middle', true),
      ...cap('is / are は本当の主語で決まる', C.red),
    ),
  },
  {
    note: '❓名詞が2つ並ぶときは？→ いちばん近い名詞に合わせるのが基本です。There is a pen and two notebooks on the desk. は、近い a pen が1つなので is。There are two notebooks and a pen on the desk. は、近い two notebooks が複数なので are です。',
    add: fresh(
      ...sent([['There is', 'r'], ['a pen', 'b'], ['and two notebooks', 'y']], 14, 30, 12, 6, 314), lb(80, 58, '近い a pen は1つ → is', 11, C.red, 'middle', true),
      ...sent([['There are', 'r'], ['two notebooks', 'b'], ['and a pen', 'y']], 84, 30, 12, 6, 314), lb(100, 128, '近い two notebooks は複数 → are', 11, C.red, 'middle', true),
      ...cap('いちばん近い名詞に合わせる', C.red),
    ),
  },
  {
    note: '数えられない名詞（水など）にも使えます。There is some water in the bottle.（ボトルに水がある）。水は1つ、2つと数えないので単数あつかいで is です。数が多いときは a lot of を使い、There are a lot of students in the gym.（体育館にたくさんの生徒がいる）となります。',
    add: fresh(
      bx(10, 10, 148, 50, 'some water\n数えられない → is', C.blue, FILL.blue, 12), bx(162, 10, 148, 50, 'a lot of students\n複数 → are', C.green, FILL.green, 12),
      ...sent([['There is', 'r'], ['some water', 'b'], ['in the bottle.', 'g']], 76, 28, 12, 6, 314),
      ...sent([['There are', 'r'], ['a lot of students', 'b'], ['in the gym.', 'g']], 112, 28, 11, 6, 314),
      ...cap('水は is、たくさんの生徒は are', C.main),
    ),
  },
  {
    note: '日本語から作るときの手順です。「ソファの上に猫が1匹いる」。①There is / are で始める。②あとの名詞を決める：a cat（1匹なので is）。③最後に場所を置く：on the sofa。これで There is a cat on the sofa. が完成します。',
    add: fresh(
      ...flow(['① There\nis / are', '② 名詞\na cat', '③ 場所\non the sofa'], 14, { h: 46, size: 11, color: C.blue, fill: FILL.blue, gap: 16 }).flat(),
      ar(160, 64, 160, 80, C.main),
      ...sent([['There is', 'r'], ['a cat', 'b'], ['on the sofa.', 'g']], 84, 32, 14, 10, 310),
      ...cap('手順どおりに組み立てる', C.main),
    ),
  },
  {
    note: '❓There is の cat は「どの猫」でもよいのでしょうか。→ はい。この形は、初めて話に出す、どれと決まっていないものに使うからです。a cat や some water、a lot of students がその例です。',
    add: fresh(
      bx(10, 14, 148, 42, '○ a cat / some water\nどれと決まっていない', C.green, FILL.green, 11), bx(162, 14, 148, 42, '× the cat / my cat\n決まっているもの', C.red, FILL.red, 11),
      lb(160, 80, 'There is / are に向くのは 初めて話に出すもの', 12, C.ink, 'middle', true),
      ...cap('決まっていないものの存在を言う形', C.main),
    ),
  },
  {
    note: 'まとめです。There is ＋ 単数、There are ＋ 複数。There は訳さない形だけの主語で、本当の主語はあとの名詞。2つ並ぶときは近い名詞に合わせる。場所は文の最後に置きます。',
    add: fresh(
      bx(15, 10, 290, 26, 'There is ＋ 単数／There are ＋ 複数', C.blue, FILL.blue, 12),
      bx(15, 40, 290, 26, 'There は訳さない。主語はあとの名詞', C.red, FILL.red, 12),
      bx(15, 70, 290, 26, '2つ並ぶときは、近い名詞に合わせる', C.green, FILL.green, 12),
      bx(15, 100, 290, 26, '場所は文の最後に置く', C.purple, FILL.purple, 12),
      ...cap('主語はあとの名詞、が合言葉', C.main),
    ),
  },
], 'There is / are：あとの名詞に合わせる');

export const XF_CEA_FIGURES: Record<string, DiagramFigure> = {
  'xf_eigo_01_bunpo_kihon': u01,
  'xf_eigo_02_meishi_daimeishi': u02,
  'xf_eigo_03_dokkai': u03,
  'xf_eigo_04_eibun': u04,
  'xf_eigo_05_bunpo_oyo': u05,
  'xf_eigo_06_listening_speaking': u06,
  'xf_eigo_07_alphabet_phonics': u07,
  'xf_eigo_08_be_ippan_doushi': u08,
  'xf_eigo_09_gimonshi': u09,
  'xf_eigo_10_can_meirei': u10,
  'xf_eigo_11_aisatsu_kaiwa': u11,
  'xf_eigo_12_zenchishi': u12,
  'xf_eigo_13_hikaku': u13,
  'xf_eigo_14_there_is_are': u14,
};
export const XF_CEA_SECTIONS: Record<string, string> = {
  'eigo_01_bunpo_kihon#0': 'xf_eigo_01_bunpo_kihon',
  'eigo_02_meishi_daimeishi#1': 'xf_eigo_02_meishi_daimeishi',
  'eigo_03_dokkai#0': 'xf_eigo_03_dokkai',
  'eigo_04_eibun#1': 'xf_eigo_04_eibun',
  'eigo_05_bunpo_oyo#0': 'xf_eigo_05_bunpo_oyo',
  'eigo_06_listening_speaking#1': 'xf_eigo_06_listening_speaking',
  'eigo_07_alphabet_phonics#1': 'xf_eigo_07_alphabet_phonics',
  'eigo_08_be_ippan_doushi#1': 'xf_eigo_08_be_ippan_doushi',
  'eigo_09_gimonshi#2': 'xf_eigo_09_gimonshi',
  'eigo_10_can_meirei#0': 'xf_eigo_10_can_meirei',
  'eigo_11_aisatsu_kaiwa#2': 'xf_eigo_11_aisatsu_kaiwa',
  'eigo_12_zenchishi#1': 'xf_eigo_12_zenchishi',
  'eigo_13_hikaku#0': 'xf_eigo_13_hikaku',
  'eigo_14_there_is_are#0': 'xf_eigo_14_there_is_are',
};
