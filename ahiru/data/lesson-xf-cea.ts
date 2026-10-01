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
        tag(4, 12 + i * 42, 40, t, 'm', 11), bx(48, 8 + i * 42, 142, 28, q, C.blue, FILL.blue, 10), ar(192, 22 + i * 42, 204, 22 + i * 42, C.main), bx(206, 8 + i * 42, 110, 28, a, C.green, FILL.green, 10),
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
      ...sent([['How much', 'r'], ['is this bag?', 'y']], 76, 28, 12, 6, 186), ar(190, 90, 200, 90, C.main), bx(202, 76, 112, 28, "It's 2,000 yen.", C.green, FILL.green, 12),
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
      ...rowb(['thirteen', 'fourteen', 'fifteen', 'sixteen'], 8, 26, 'b', 11, 8, 312, 4),
      ...rowb(['seventeen', 'eighteen', 'nineteen'], 38, 26, 'b', 11, 8, 312, 4),
      lb(160, 82, 'つづりが変わる特別な形', 12, C.red, 'middle', true),
      ...rowb(['thirteen\n× threeteen', 'fifteen\n× fiveteen', 'eighteen\n× eightteen'], 96, 40, 'r', 11, 8, 312, 4),
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
      bx(10, 70, 148, 40, 'We waited\nfor two hours.', C.blue, FILL.blue, 12), bx(162, 70, 148, 40, 'She fell asleep\nduring the movie.', C.green, FILL.green, 12),
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
      ...sent([['big', 'y'], ['→', 'm'], ['bigger', 'r'], ['→', 'm'], ['biggest', 'r']], 8, 30, 13, 10, 310),
      bx(14, 46, 144, 40, '× biger\ni が「アイ」になる', C.red, FILL.red, 11), bx(162, 46, 144, 40, '○ bigger\ni は短いまま', C.green, FILL.green, 11),
      ...sent([['hot', 'y'], ['→', 'm'], ['hotter', 'r'], ['→', 'm'], ['hottest', 'r']], 100, 30, 13, 10, 310),
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

// ───────── eigo_15_shinkoukei 現在進行形 ─────────
const arrowRow = (a: string, b: string, y: number, ka: Kd = 'y', kb: Kd = 'r', size = 13, x0 = 10, w1 = 120, x2 = 170, w2 = 140): E[] => [
  bx(x0, y, w1, 28, a, K[ka][0], K[ka][1], size), ar(x0 + w1 + 2, y + 14, x2 - 2, y + 14, C.main), bx(x2, y, w2, 28, b, K[kb][0], K[kb][1], size),
];
const u15: DiagramFigure = show([
  {
    note: '現在進行形（げんざいしんこうけい）は、「今まさに〜しているところだ」と、進んでいる最中の動作を表す形です。形は「am / is / are ＋ 動詞の -ing 形」。I am studying English now.（私は今、英語を勉強しているところだ）。',
    add: [
      ...sent([['I', 'b'], ['am', 'r'], ['studying', 'g'], ['English now.', 'y']], 20, 32, 14, 8, 312),
      ...rowb(['am', 'is', 'are'], 84, 26, 'r', 13, 40, 280, 10),
      lb(160, 132, '＋ 動詞の -ing 形', 13, C.green, 'middle', true),
      ...cap('am / is / are ＋ -ing ＝ 今している最中'),
    ],
  },
  {
    note: '❓なぜ be動詞（ビーどうし）と -ing の組み合わせなのでしょう。→ be動詞は「今そうである」ことを表し、-ing は「している最中」を表すので、合わせて「今、している最中だ」という意味になるからです。She is cooking dinner.（彼女は夕食を作っているところだ）。',
    add: fresh(
      bx(20, 16, 130, 40, 'is\n今そうである', C.red, FILL.red, 12), lb(160, 36, '＋', 18), bx(170, 16, 130, 40, 'cooking\nしている最中', C.green, FILL.green, 12),
      ar(160, 64, 160, 80, C.main),
      ...sent([['She', 'b'], ['is cooking', 'r'], ['dinner.', 'y']], 84, 32, 14, 20, 300),
      ...cap('今 ＋ している最中 ＝ 現在進行形', C.main),
    ),
  },
  {
    note: '❓ふつうの現在形（げんざいけい）と何がちがうのでしょう。→ 現在形はいつもすること（習慣（しゅうかん））、現在進行形は今ちょうどしていることです。I play tennis every Sunday.（毎週日曜にテニスをする）と I am playing tennis now.（今テニスをしている）。every Sunday や usually は現在形、now や right now は現在進行形の目印です。',
    add: fresh(
      bx(10, 10, 148, 56, '現在形：いつもする\nI play tennis\nevery Sunday.', C.blue, FILL.blue, 11), bx(162, 10, 148, 56, '進行形：今している\nI am playing tennis\nnow.', C.red, FILL.red, 11),
      ...rowb(['every day', 'usually'], 78, 24, 'b', 12, 14, 156, 6), ...rowb(['now', 'right now'], 78, 24, 'r', 12, 164, 306, 6),
      lb(160, 126, '時の言葉が目印になる', 13, C.ink, 'middle', true),
      ...cap('習慣は現在形、今は進行形', C.main),
    ),
  },
  {
    note: '-ing のつけ方は4つあります。①ふつうはそのまま：play → playing、study → studying、read → reading。②e で終わる語は e をとります：make → making、write → writing、come → coming。❓なぜ e をとるのでしょう。→ -ing は i から始まるので、e をとってつなぐのです。',
    add: fresh(
      bx(10, 8, 300, 20, '① そのまま -ing', C.blue, FILL.blue, 12),
      ...sent([['play → playing', 'y'], ['study → studying', 'y'], ['read → reading', 'y']], 32, 26, 11),
      bx(10, 70, 300, 20, '② e をとって -ing', C.red, FILL.red, 12),
      ...sent([['make → making', 'r'], ['write → writing', 'r'], ['come → coming', 'r']], 94, 26, 11),
      ...cap('e で終わる語は e をとる', C.red),
    ),
  },
  {
    note: '③「短い母音＋子音字」で終わる語は、子音字を重ねます：run → running、swim → swimming、sit → sitting、stop → stopping。❓なぜ重ねるのでしょう。→ 重ねないと runing となって、u が「ユー」と長く読まれてしまうからです。子音字を重ねて短い母音を守ります。',
    add: fresh(
      ...sent([['run → running', 'r'], ['swim → swimming', 'r']], 14, 28, 12, 10, 310),
      ...sent([['sit → sitting', 'r'], ['stop → stopping', 'r']], 50, 28, 12, 10, 310),
      bx(14, 96, 144, 36, '× runing\nu が長く読まれる', C.red, FILL.red, 11), bx(162, 96, 144, 36, '○ running\nu は短いまま', C.green, FILL.green, 11),
      ...cap('短い母音 ＋ 子音 → 子音を重ねる', C.red),
    ),
  },
  {
    note: '④ ie で終わる語は、ie を y に変えて -ing をつけます：die → dying、lie → lying、tie → tying。❓なぜ変えるのでしょう。→ die ＋ ing のまま dieing と書くと、i・e・i と母音字（ぼいんじ）が3つ並んで読みにくくなるので、ie を y にするきまりになっています。',
    add: fresh(
      ...[['die', 'dying'], ['lie', 'lying'], ['tie', 'tying']].flatMap(([a, b], i) => [
        bx(40, 14 + i * 38, 90, 28, a, C.gray, FILL.gray, 15), ar(132, 28 + i * 38, 170, 28 + i * 38, C.main), bx(172, 14 + i * 38, 100, 28, b, C.red, FILL.red, 15),
      ]),
      lb(160, 130, 'ie を y に変えて -ing', 13, C.red, 'middle', true),
      ...cap('ie → y ＋ ing', C.red),
    ),
  },
  {
    note: '疑問文（ぎもんぶん）は be動詞を前に出します。Is she watching TV?（彼女はテレビを見ているところですか）— Yes, she is. / No, she isn’t.。否定文（ひていぶん）は be動詞のうしろに not。I am not sleeping.（私は寝ていない）、They are not studying now.（彼らは今勉強していない）。',
    add: fresh(
      ...sent([['Is', 'r'], ['she', 'b'], ['watching TV?', 'g']], 12, 30, 14, 10, 310),
      bx(30, 56, 120, 26, 'Yes, she is.', C.green, FILL.green, 13), bx(170, 56, 120, 26, "No, she isn't.", C.red, FILL.red, 13),
      ...sent([['I', 'b'], ['am not', 'r'], ['sleeping.', 'g']], 98, 30, 14, 10, 310),
      ...cap('疑問は be を前へ、否定は be のあとに not', C.main),
    ),
  },
  {
    note: 'まとめです。現在進行形は am / is / are ＋ -ing で「今している最中」。習慣は現在形。-ing は、そのまま・e をとる・子音を重ねる・ie を y に、の4つ。つづりは語の終わりの形を見て決めます。',
    add: fresh(
      bx(15, 10, 290, 24, 'am / is / are ＋ -ing ＝ 今している最中', C.blue, FILL.blue, 12),
      bx(15, 38, 290, 24, 'そのまま／e をとる（make → making）', C.green, FILL.green, 12),
      bx(15, 66, 290, 24, '子音を重ねる（run → running）', C.red, FILL.red, 12),
      bx(15, 94, 290, 24, 'ie → y（die → dying）', C.purple, FILL.purple, 12),
      ...cap('語の終わりを見て、-ing の形を決める', C.main),
    ),
  },
], '現在進行形：be動詞 ＋ -ing の作り方');

// ───────── eigo_16_eiken_hyogen 英検5級表現 ─────────
const u16: DiagramFigure = show([
  {
    note: '英検5級は英語の入り口で、日常生活の基本の表現が中心です。中学受験の英語入試でも、このレベルの表現は前提（ぜんてい）の知識として問われます。「聞かれたことに素直に答える」練習が大切です。話題は自己紹介・学校・買い物・天気などです。',
    add: [
      bx(10, 10, 148, 50, '自己紹介', C.blue, FILL.blue, 14), bx(162, 10, 148, 50, '学校生活', C.green, FILL.green, 14),
      bx(10, 68, 148, 50, '買い物', C.red, FILL.red, 14), bx(162, 68, 148, 50, '天気・季節', C.purple, FILL.purple, 14),
      ...cap('定番の質問と答えをセットで覚える'),
    ],
  },
  {
    note: '自己紹介（じこしょうかい）の質問と答えです。What’s your name? — My name is 〜.（お名前は？）。How old are you? — I’m 〜 years old.（何歳？）。Where are you from? — I’m from 〜.（出身は？）。What time is it? — It’s 〜 o’clock.（何時？）。',
    add: fresh(
      ...[['What\'s your name?', 'My name is ～.'], ['How old are you?', "I'm ～ years old."], ['Where are you from?', "I'm from ～."], ['What time is it?', "It's ～ o'clock."]].flatMap(([q, a], i) => [
        bx(8, 8 + i * 34, 148, 26, q, C.blue, FILL.blue, 12), ar(158, 21 + i * 34, 170, 21 + i * 34, C.main), bx(172, 8 + i * 34, 140, 26, a, C.green, FILL.green, 12),
      ]),
      ...cap('質問ごとに、答えの形が決まっている', C.blue),
    ),
  },
  {
    note: '❓なぜ質問と答えをセットで覚えるのでしょう。→ 質問のはじめの言葉（What・How old・Where）で、答えの形が決まるからです。What’s your name? には My name is、How old には I’m 〜 years old、Where には I’m from で答えます。',
    add: fresh(
      ...[['What\'s your name?', 'My name is', 'b'], ['How old ～?', "I'm ～ years old", 'r'], ['Where ～ from?', "I'm from", 'g']].flatMap(([q, a, k], i) => [
        bx(10, 14 + i * 40, 128, 30, q, K[k as Kd][0], K[k as Kd][1], 12), ar(140, 29 + i * 40, 170, 29 + i * 40, C.main), bx(172, 14 + i * 40, 138, 30, a, K[k as Kd][0], K[k as Kd][1], 12),
      ]),
      lb(160, 138, 'はじめの言葉が答えの形を決める', 12, C.ink, 'middle', true),
      ...cap('Yes / No でなく、中身で答える', C.main),
    ),
  },
  {
    note: '学校生活の表現です。What subject do you like? — I like 〜.（何の教科が好き？）。I have four classes today.（今日は4時間授業がある）。It’s time for lunch.（お昼の時間です）。subject は「教科」、class は「授業」の意味です。',
    add: fresh(
      bx(8, 8, 150, 28, 'What subject do you like?', C.blue, FILL.blue, 11), ar(160, 22, 170, 22, C.main), bx(172, 8, 140, 28, 'I like ～.', C.green, FILL.green, 13),
      bx(8, 48, 304, 28, 'I have four classes today.', C.green, FILL.green, 13),
      bx(8, 88, 304, 28, "It's time for lunch.", C.green, FILL.green, 13),
      ...cap('subject ＝ 教科、class ＝ 授業', C.green),
    ),
  },
  {
    note: '買い物の表現です。How much is this? — It’s 〜 yen.（これはいくら？）。I’ll take this one.（これをください）。Can I try this on?（試着してもいいですか）。この順に使うことが多く、値段をたずねてから、買う意思を伝えます。',
    add: fresh(
      ...flow(['How much\nis this?', "It's ～ yen.", "I'll take\nthis one."], 14, { h: 52, size: 11, color: C.red, fill: FILL.red, gap: 16 }).flat(),
      ar(160, 70, 160, 88, C.main),
      bx(40, 90, 240, 32, 'Can I try this on?（試着してもいいですか）', C.blue, FILL.blue, 12),
      ...cap('たずねる → 答える → 決める', C.red),
    ),
  },
  {
    note: '時間割（じかんわり）の表現です。What do you have on Mondays?（月曜日は何がありますか）のように、「on ＋ 曜日」で何があるかをたずねます。答えの例は We have P.E. on Tuesdays.（火曜日には体育がある）。P.E. は Physical Education（体育）の略です。',
    add: fresh(
      bx(10, 12, 300, 28, 'What do you have on Mondays?', C.blue, FILL.blue, 13),
      bx(10, 52, 300, 28, 'We have P.E. on Tuesdays.', C.green, FILL.green, 13),
      bx(60, 94, 200, 30, 'P.E. ＝ Physical Education', C.purple, FILL.purple, 12), lb(160, 138, '体育の略。教科にも略称がある', 11, C.purple, 'middle', true),
      ...cap('on ＋ 曜日 で「その曜日に」', C.main),
    ),
  },
  {
    note: '天気と季節の会話です。How’s the weather today? — It’s sunny (rainy / cloudy / snowy).（今日の天気は？）。What season do you like? — I like spring because I can see cherry blossoms.（どの季節が好き？—桜が見られるから春が好き）。❓because は何を表すのでしょう。→ 理由です。',
    add: fresh(
      bx(8, 8, 150, 28, "How's the weather today?", C.blue, FILL.blue, 11), ar(160, 22, 170, 22, C.main), bx(172, 8, 140, 28, "It's sunny.", C.green, FILL.green, 13),
      ...rowb(['sunny', 'rainy', 'cloudy', 'snowy'], 44, 22, 'm', 11, 10, 310, 6),
      ...sent([['I like spring', 'b'], ['because', 'r', '理由'], ['I can see cherry blossoms.', 'g']], 82, 32, 11, 6, 314),
      ...cap('because ＋ 理由', C.red),
    ),
  },
  {
    note: 'まとめです。自己紹介・学校・買い物・時間割・天気の定番の質問と答えを、声に出してセットで覚える。質問のはじめの言葉で答えの形が決まる。答えるときは「聞かれたこと」にまっすぐ答えます。',
    add: fresh(
      bx(15, 10, 290, 24, '自己紹介：name・old・from・time', C.blue, FILL.blue, 12),
      bx(15, 38, 290, 24, '学校：subject・classes・lunch', C.green, FILL.green, 12),
      bx(15, 66, 290, 24, '買い物：How much / take / try on', C.red, FILL.red, 12),
      bx(15, 94, 290, 24, '天気・季節：sunny / because', C.purple, FILL.purple, 12),
      ...cap('質問と答えを声に出してセットで', C.main),
    ),
  },
], '英検5級の表現：質問と答えのセット');

// ───────── eigo_17_gojun_ouyou 強調構文 ─────────
const u17: DiagramFigure = show([
  {
    note: '強調構文（きょうちょうこうぶん）は、文の中の言葉を強く伝えたいときに使う形です。形は It is（was）＋ 強調したい語句 ＋ that ＋ 残りの部分。まず、もとの文を3つの部分に分けて見ましょう。Tom broke the window yesterday.（トムが昨日窓を割った）。',
    add: [
      ...sent([['Tom', 'b', '①だれが'], ['broke the window', 'y'], ['yesterday.', 'g', '③いつ']], 20, 32, 13, 6, 314),
      lb(160, 82, '②何を：the window', 12, C.purple, 'middle', true),
      lb(160, 124, '3つのどれでも強調できる', 13, C.ink, 'middle', true),
      ...cap('強調したい部分を選ぶ'),
    ],
  },
  {
    note: '①「Tom」を強調します。It was の次に Tom を置き、that のあとに残りを続けます。It was Tom that broke the window yesterday.（窓を割ったのはトムだった）。Tom が元の位置から消えて、文の前に出ています。',
    add: fresh(
      ...sent([['It was', 'y'], ['Tom', 'b'], ['that', 'm'], ['broke the window yesterday.', 'y']], 20, 32, 12, 6, 314),
      lb(160, 74, 'Tom を強調', 13, C.blue, 'middle', true),
      lb(160, 108, '窓を割ったのはトムだった', 13, C.ink, 'middle', true),
      ...cap('It was ＋ 強調 ＋ that ＋ 残り', C.blue),
    ),
  },
  {
    note: '②「the window」を強調します。It was the window that Tom broke yesterday.（トムが昨日割ったのは窓だった）。強調したい語句が、It was と that のあいだに入ります。',
    add: fresh(
      ...sent([['It was', 'y'], ['the window', 'p'], ['that', 'm'], ['Tom broke yesterday.', 'y']], 20, 32, 12, 6, 314),
      lb(160, 74, 'the window を強調', 13, C.purple, 'middle', true),
      lb(160, 108, 'トムが昨日割ったのは窓だった', 13, C.ink, 'middle', true),
      ...cap('強調する語句を It was と that のあいだへ', C.purple),
    ),
  },
  {
    note: '③「yesterday」を強調します。It was yesterday that Tom broke the window.（トムが窓を割ったのは昨日だった）。時や場所を表す言葉も強調できます。',
    add: fresh(
      ...sent([['It was', 'y'], ['yesterday', 'g'], ['that', 'm'], ['Tom broke the window.', 'y']], 20, 32, 12, 6, 314),
      lb(160, 74, 'yesterday を強調', 13, C.green, 'middle', true),
      lb(160, 108, 'トムが窓を割ったのは昨日だった', 13, C.ink, 'middle', true),
      ...cap('時・場所も強調できる', C.green),
    ),
  },
  {
    note: '❓なぜ It is ではなく It was なのでしょう。→ もとの文が過去（broke）だからです。強調構文でも時制は元の文に合わせます。現在の文なら It is、過去の文なら It was です。',
    add: fresh(
      bx(10, 16, 140, 30, 'Tom broke ～.（過去）', C.blue, FILL.blue, 12), ar(80, 48, 80, 66, C.main), bx(30, 68, 100, 28, 'It was ～ that', C.red, FILL.red, 13),
      bx(170, 16, 140, 30, 'Tom breaks ～.（現在）', C.green, FILL.green, 11), ar(240, 48, 240, 66, C.main), bx(190, 68, 100, 28, 'It is ～ that', C.green, FILL.green, 13),
      lb(160, 124, '時制は元の文に合わせる', 13, C.ink, 'middle', true),
      ...cap('過去なら was、現在なら is', C.red),
    ),
  },
  {
    note: '人を強調するときは、that のかわりに who も使えます。It was Ken who（that）called me last night.（昨夜私に電話したのはケンだった）。who のほうがはっきり「人」だと分かります。',
    add: fresh(
      ...sent([['It was', 'y'], ['Ken', 'b'], ['who', 'r'], ['called me last night.', 'y']], 20, 32, 12, 6, 314),
      lb(160, 74, '人 → that のかわりに who も使える', 12, C.red, 'middle', true),
      lb(160, 108, '電話したのはケンだった', 13, C.ink, 'middle', true),
      ...cap('人なら who もOK', C.red),
    ),
  },
  {
    note: '❓強調構文の It と、It is important to study. のような形式主語（けいしきしゅご）の It はどう見分けるのでしょう。→ 「It is 〜 that」の「〜」の部分を消しても、のこりが意味の通る完全な文になれば強調構文です。It was Tom that broke the window. は Tom broke the window. になります。',
    add: fresh(
      bx(10, 10, 300, 28, 'It was Tom that broke the window.', C.blue, FILL.blue, 13), ar(160, 40, 160, 54, C.main),
      bx(30, 56, 260, 26, 'Tom broke the window.（完全な文）', C.green, FILL.green, 12), lb(160, 96, '○ 強調構文', 13, C.green, 'middle', true),
      bx(10, 106, 300, 26, 'It is important to study English.', C.red, FILL.red, 12), lb(160, 144, '× 消すと文がこわれる → 形式主語', 11, C.red, 'middle', true),
      ...cap('〜を消して、完全な文なら強調構文', C.blue),
    ),
  },
  {
    note: 'まとめです。It is（was）＋ 強調したい語句 ＋ that ＋ 残り、が強調構文の形。時制は元の文に合わせ、人なら who も使える。動詞そのものは強調構文では強調できず、かわりに do / does / did を使います（I did finish my homework.）。',
    add: fresh(
      bx(15, 10, 290, 26, 'It is（was）＋ 強調語句 ＋ that ＋ 残り', C.blue, FILL.blue, 12),
      bx(15, 40, 290, 26, '時制は元の文に合わせる／人なら who', C.green, FILL.green, 12),
      bx(15, 70, 290, 26, '動詞の強調は do / does / did', C.red, FILL.red, 12),
      lb(160, 118, 'I did finish my homework.', 13, C.red, 'middle', true),
      ...cap('強調したい語句を It is と that ではさむ', C.main),
    ),
  },
], '強調構文：It is ～ that ... の作り方');

// ───────── eigo_18_e_nikki_sakubun 時系列の絵日記 ─────────
const panel = (x: number, n: string, t: string, k: Kd, y = 12, h = 70) => [bx(x, y, 70, h, `${n}\n${t}`, K[k][0], K[k][1], 11)];
const u18: DiagramFigure = show([
  {
    note: '入試の英作文では、3〜4コマの絵を順番に説明させる問題がよく出ます。大切なのは、出来事を時間の順番にならべることです。ここでは「朝おきる→朝食→学校へ→友達と勉強」の4コマを使って考えます。',
    add: [
      ...panel(8, '①', '朝起きる', 'b'), ...panel(86, '②', '朝食を食べる', 'g'), ...panel(164, '③', '学校へ行く', 'r'), ...panel(242, '④', '友達と勉強', 'p'),
      ar(80, 47, 86, 47, C.main), ar(158, 47, 164, 47, C.main), ar(236, 47, 242, 47, C.main),
      lb(160, 112, '4コマの絵を、順番に英語で説明する', 12, C.ink, 'middle', true),
      ...cap('時間の順にならべる'),
    ],
  },
  {
    note: '❓どうすれば順番が伝わるのでしょう。→ 時間の順序（じゅんじょ）を示す言葉を使います。First（まず）、Then（それから）、After that（その後）、Finally（最後に）。この4つをこの順に使うと、絵を見なくても順番が分かる文章になります。',
    add: fresh(
      ...[['First,', 'まず', 'b'], ['Then,', 'それから', 'g'], ['After that,', 'その後', 'r'], ['Finally,', '最後に', 'p']].flatMap(([a, b, k], i) => [
        bx(30, 8 + i * 34, 120, 26, a, K[k as Kd][0], K[k as Kd][1], 14), lb(200, 21 + i * 34, b, 13, K[k as Kd][0], 'middle', true),
      ]),
      ...[0, 1, 2].map((i) => ar(90, 35 + i * 34, 90, 41 + i * 34, C.main)),
      ...cap('順序の言葉が道しるべ', C.main),
    ),
  },
  {
    note: '1コマ目は、First, I woke up at seven.（まず、私は7時に起きた）。❓なぜ過去形（かこけい）の woke なのでしょう。→ 絵日記は、もう終わったことを書くので過去形にするからです。wake の過去形は woke です。',
    add: fresh(
      ...panel(8, '①', '朝起きる', 'b'),
      bx(88, 16, 224, 60, 'First, I woke up\nat seven.', C.blue, FILL.blue, 15),
      ...sent([['wake', 'y'], ['→', 'm'], ['woke', 'r']], 96, 28, 14, 80, 240),
      ...cap('終わったことは過去形で書く', C.blue),
    ),
  },
  {
    note: '2コマ目は Then, I had breakfast with my family.（それから、家族と朝食を食べた）。3コマ目は After that, I went to school by bike.（その後、自転車で学校へ行った）。have の過去形は had、go の過去形は went です。',
    add: fresh(
      ...panel(8, '②', '朝食', 'g', 8, 56), bx(88, 18, 224, 36, 'Then, I had breakfast\nwith my family.', C.green, FILL.green, 12),
      ...panel(8, '③', '学校へ', 'r', 76, 56), bx(88, 86, 224, 36, 'After that, I went to school\nby bike.', C.red, FILL.red, 12),
      lb(160, 140, 'have → had　　go → went', 12, C.ink, 'middle', true),
      ...cap('had・went は過去形', C.main),
    ),
  },
  {
    note: '4コマ目は Finally, I studied math with my friends.（最後に、友達と数学を勉強した）。study の過去形は studied（y を i に変えて ed）です。4つの文をつなげると、1日の流れがひと目で分かる文章になります。',
    add: fresh(
      bx(10, 8, 300, 22, 'First, I woke up at seven.', C.blue, FILL.blue, 12),
      bx(10, 34, 300, 22, 'Then, I had breakfast with my family.', C.green, FILL.green, 11),
      bx(10, 60, 300, 22, 'After that, I went to school by bike.', C.red, FILL.red, 11),
      bx(10, 86, 300, 22, 'Finally, I studied math with my friends.', C.purple, FILL.purple, 11),
      lb(160, 128, 'study → studied', 12, C.purple, 'middle', true),
      ...cap('4コマ ＝ 4つの文', C.purple),
    ),
  },
  {
    note: '場面に登場人物が何人かいて、それぞれ別の動作をしているときは、主語ごとに文を分けます。男の子はサッカー、女の子は読書なら、One boy is playing soccer. A girl is reading a book near him. となります。今まさにしている動作を描くときは現在進行形を使います。',
    add: fresh(
      bx(10, 10, 140, 40, '男の子\nサッカー', C.blue, FILL.blue, 12), bx(170, 10, 140, 40, '女の子\n本を読む', C.red, FILL.red, 12),
      bx(8, 66, 148, 46, 'One boy is playing\nsoccer.', C.blue, FILL.blue, 12), bx(164, 66, 148, 46, 'A girl is reading a book\nnear him.', C.red, FILL.red, 12),
      lb(160, 128, '主語ごとに文を分ける', 12, C.ink, 'middle', true),
      ...cap('人が違えば、文も別', C.main),
    ),
  },
  {
    note: '吹き出し（ふきだし）のせりふは、2通りに書けます。He said, “I’m hungry.”（彼は「お腹がすいた」と言った）。または He said that he was hungry.。❓なぜ am が was に変わるのでしょう。→ said と過去の話になったので、あとの動詞も過去にそろえる（時制の一致（いっち））からです。',
    add: fresh(
      bx(10, 12, 300, 30, 'He said, "I\'m hungry."', C.blue, FILL.blue, 14), ar(160, 44, 160, 62, C.main),
      ...sent([['He said that', 'y'], ['he was', 'r'], ['hungry.', 'g']], 64, 30, 14, 10, 310),
      lb(160, 118, 'am → was（said と時をそろえる）', 12, C.red, 'middle', true),
      ...cap('ひとりごとは時制の一致に注意', C.red),
    ),
  },
  {
    note: 'まとめです。複数コマの絵は、First・Then・After that・Finally の順序の言葉でつなぐ。出来事は過去形で書く。登場人物が違えば主語ごとに文を分ける。せりふは直接引用か、時制をそろえて書きます。',
    add: fresh(
      bx(15, 10, 290, 24, 'First → Then → After that → Finally', C.blue, FILL.blue, 12),
      bx(15, 38, 290, 24, '出来事は過去形（woke・had・went）', C.green, FILL.green, 12),
      bx(15, 66, 290, 24, '人が違えば主語ごとに文を分ける', C.red, FILL.red, 12),
      bx(15, 94, 290, 24, 'せりふ：He said, "…" ／ said that …', C.purple, FILL.purple, 12),
      ...cap('順番・時制・主語を整えて書く', C.main),
    ),
  },
], '絵日記：順序の言葉で出来事をつなぐ');

// ───────── eigo_19_kaiwabun_dokkai 電話の会話文 ─────────
const u19: DiagramFigure = show([
  {
    note: '電話の会話には、決まった流れと決まり文句があります。知っていると、場面がすぐにイメージできます。流れは、①電話を受ける、②取り次ぎをたのむ、③本人が出る、④不在を伝える、⑤伝言、⑥かけ直し、の6つです。',
    add: [
      ...[['① 受ける', 'Hello, this is ～ speaking.', 'b'], ['② たのむ', 'May I speak to ～?', 'b'], ['③ 本人が出る', 'Speaking.', 'b'], ['④ 不在', "I'm sorry, he is out now.", 'r'], ['⑤ 伝言', 'Can I take a message?', 'r'], ['⑥ かけ直し', 'Could you ask him to call me back?', 'r']].map(([a, t, k], i) =>
        bx(i < 3 ? 6 : 164, 8 + (i % 3) * 46, 150, 38, `${a}\n${t}`, K[k as Kd][0], K[k as Kd][1], 10)),
      ...cap('電話の6つの流れ'),
    ],
  },
  {
    note: 'はじめの2つです。電話を受けた人は Hello, this is 〜 speaking.（もしもし、〜です）と名のります。かけた人は May I speak to Mr. Green, please?（グリーン先生をお願いできますか）と取り次ぎをたのみます。本人が出たら Speaking.（私です）と答えます。',
    add: fresh(
      tag(4, 16, 58, 'かける人', 'b', 10), bx(66, 10, 248, 32, 'May I speak to Mr. Green, please?', C.blue, FILL.blue, 12),
      tag(4, 62, 58, '受ける人', 'g', 10), bx(66, 56, 248, 32, 'Hello, this is ～ speaking.', C.green, FILL.green, 12),
      tag(4, 108, 58, '本人が出る', 'r', 10), bx(66, 102, 248, 32, 'Speaking.', C.red, FILL.red, 14),
      ...cap('取り次ぎ → 本人は Speaking.', C.main),
    ),
  },
  {
    note: '❓本人がいないときは、どう伝えるのでしょう。→ I’m sorry, he is out now.（すみません、今外出しています）と不在（ふざい）を伝え、Can I take a message?（伝言を承りましょうか）とたずねます。かける側は Could you ask him to call me back?（折り返し電話するよう伝えていただけますか）と頼みます。',
    add: fresh(
      bx(10, 10, 300, 28, "I'm sorry, he is out now.（不在）", C.red, FILL.red, 12),
      bx(10, 46, 300, 28, 'Can I take a message?（伝言を承りましょうか）', C.green, FILL.green, 11),
      bx(10, 82, 300, 28, 'Could you ask him to call me back?', C.blue, FILL.blue, 12),
      lb(160, 128, '折り返し電話するように伝えてほしい', 11, C.blue, 'middle', true),
      ...cap('不在 → 伝言 → かけ直し', C.red),
    ),
  },
  {
    note: '会話文を読んでみましょう。Tom: Hello, this is Tom. May I speak to Emma? / Mother: I’m sorry, Tom. She’s not home now. She’s at the library. / Tom: I see. Could you tell her to call me when she gets home? / Mother: Sure, I will.',
    add: fresh(
      bx(4, 4, 236, 30, 'Tom: Hello, this is Tom.\nMay I speak to Emma?', C.blue, FILL.blue, 10),
      bx(80, 38, 236, 30, "Mother: I'm sorry, Tom. She's not home now.\nShe's at the library.", C.green, FILL.green, 10),
      bx(4, 72, 236, 30, 'Tom: I see. Could you tell her to call me\nwhen she gets home?', C.blue, FILL.blue, 10),
      bx(80, 106, 236, 28, 'Mother: Sure, I will.', C.green, FILL.green, 11),
      ...cap('トムが エマ に電話した場面'),
    ),
  },
  {
    note: '❓Why isn’t Emma at home?（なぜエマは家にいないのですか）の答えはどこにあるでしょう。→ 母親の言葉の中です。She’s at the library.（図書館にいます）。不在の理由は、必ず本文の中にはっきり書かれています。会話の流れの中で自然に答えが出てきます。',
    add: fresh(
      bx(30, 8, 260, 40, "Mother: I'm sorry, Tom. She's not home now.\nShe's at the library.", C.green, FILL.green, 11),
      ar(160, 78, 160, 52, C.red), bx(90, 80, 140, 30, 'She is at the library.', C.red, FILL.red, 13),
      lb(160, 128, '理由は本文にそのまま書いてある', 12, C.ink, 'middle', true),
      ...cap('答えは本文の中から探す', C.red),
    ),
  },
  {
    note: '電話の会話では、よく出る設問がいくつかあります。待ち合わせの時間・場所（What time will they meet? / Where will they meet?）、伝言の内容（What does Tom want Emma to do?）、電話の目的（Why did Tom call Emma?）です。',
    add: fresh(
      ...[['時間・場所', 'What time / Where will they meet?', 'b'], ['伝言の内容', 'What does Tom want Emma to do?', 'g'], ['電話の目的', 'Why did Tom call Emma?', 'r']].flatMap(([a, b, k], i) => [
        tag(8, 16 + i * 40, 76, a, k as Kd, 11), bx(88, 12 + i * 40, 224, 28, b, K[k as Kd][0], K[k as Kd][1], 10),
      ]),
      ...cap('設問のパターンを知っておく', C.main),
    ),
  },
  {
    note: '❓どう読めば答えやすいでしょうか。→ 読みながら「相手が今どこにいるか」「何を頼まれたか」にマークをつけます。電話の会話では、この2つの情報が設問の中心になることが多いからです。この文では、Emma はどこにいる？→ the library、頼まれたことは→ call Tom back です。',
    add: fresh(
      bx(10, 12, 148, 40, '相手は今どこ？\n→ the library', C.blue, FILL.blue, 12), bx(162, 12, 148, 40, '何を頼まれた？\n→ call Tom back', C.red, FILL.red, 12),
      lb(160, 76, '2つにマークをつけて読む', 13, C.ink, 'middle', true),
      ...cap('居場所と頼まれたこと', C.main),
    ),
  },
  {
    note: 'まとめです。電話の会話は決まった流れで進む。決まり文句を覚えておく。不在の理由は本文に必ず書いてある。居場所と頼まれたことにマークをつけて読むと、設問に答えやすくなります。',
    add: fresh(
      bx(15, 10, 290, 24, '流れ：受ける → 取り次ぎ → 不在 → 伝言', C.blue, FILL.blue, 12),
      bx(15, 38, 290, 24, '決まり文句：Speaking. / call me back', C.green, FILL.green, 12),
      bx(15, 66, 290, 24, '理由は本文にそのまま書いてある', C.red, FILL.red, 12),
      bx(15, 94, 290, 24, '居場所・頼まれたことにマーク', C.purple, FILL.purple, 12),
      ...cap('流れを知れば、場面が見える', C.main),
    ),
  },
], '電話の会話文：流れと決まり文句');

// ───────── eigo_20_tansuu_fukusuu 複数形の作り方 ─────────
const u20: DiagramFigure = show([
  {
    note: '名詞（めいし）を複数形（ふくすうけい）にするときの、つづりの変え方は5つあります。そのまま s、es をつける、y を i に変えて es、f を v に変えて es、そして形が変わる不規則なもの。語の終わりを見て、どれに当てはまるか決めます。',
    add: [
      ...[['そのまま s', 'book → books', 'b'], ['s・x・ch・sh・o → es', 'box → boxes', 'g'], ['子音＋y → ies', 'city → cities', 'r'], ['f・fe → ves', 'leaf → leaves', 'p']].flatMap(([a, b, k], i) => [
        bx(10, 10 + i * 33, 150, 26, a, K[k as Kd][0], K[k as Kd][1], 12), bx(168, 10 + i * 33, 142, 26, b, K[k as Kd][0], K[k as Kd][1], 12),
      ]),
      ...cap('語の終わりを見て作り方を決める'),
    ],
  },
  {
    note: 'いちばん基本は、そのまま s をつける形です。book → books、pen → pens、dog → dogs、apple → apples。ほとんどの名詞はこれで作れます。',
    add: fresh(
      ...rowb(['book → books', 'pen → pens'], 20, 36, 'b', 14, 10, 310, 8),
      ...rowb(['dog → dogs', 'apple → apples'], 70, 36, 'b', 14, 10, 310, 8),
      lb(160, 128, 'ふつうは s だけ', 13, C.ink, 'middle', true),
      ...cap('基本は そのまま s', C.blue),
    ),
  },
  {
    note: '❓s・x・ch・sh・o で終わる語は、なぜ es なのでしょう。→ s だけを足すと発音しにくいからです。es をつけると「イズ」と読めて、はっきり複数だと分かります。bus → buses、box → boxes、watch → watches、dish → dishes、tomato → tomatoes。',
    add: fresh(
      ...rowb(['bus → buses', 'box → boxes'], 10, 28, 'g', 12, 10, 310, 8),
      ...rowb(['watch → watches', 'dish → dishes'], 44, 28, 'g', 12, 10, 310, 8),
      bx(60, 80, 200, 26, 'tomato → tomatoes', C.green, FILL.green, 13),
      lb(160, 126, '× ピアノ類は例外：pianos・photos・radios', 11, C.red, 'middle', true),
      ...cap('言いにくい語尾には es を足す', C.green),
    ),
  },
  {
    note: '❓「子音（しいん）＋y」はどうなるでしょう。→ y を i に変えて es をつけます。city → cities、story → stories、baby → babies、country → countries。ただし「母音（ぼいん）＋y」はそのまま s：boy → boys、day → days、toy → toys。y の前が母音かどうかで決まります。',
    add: fresh(
      ...rowb(['city → cities', 'baby → babies'], 10, 28, 'r', 12, 10, 310, 8),
      lb(160, 52, 'y の前が子音 → y を i に変えて es', 12, C.red, 'middle', true),
      ...rowb(['boy → boys', 'day → days'], 72, 28, 'b', 12, 10, 310, 8),
      lb(160, 114, 'y の前が母音 → そのまま s', 12, C.blue, 'middle', true),
      ...cap('y の前の文字を見る', C.red),
    ),
  },
  {
    note: 'f や fe で終わる語は、f を v に変えて es をつけます。leaf → leaves、knife → knives、life → lives、wife → wives、shelf → shelves。ただし例外もあり、roof → roofs、belief → beliefs はそのまま s です。',
    add: fresh(
      ...rowb(['leaf → leaves', 'knife → knives', 'life → lives'], 10, 30, 'p', 11, 8, 312, 6),
      ...rowb(['wife → wives', 'shelf → shelves'], 48, 30, 'p', 11, 8, 312, 6),
      lb(160, 100, '例外：そのまま s', 12, C.red, 'middle', true),
      ...rowb(['roof → roofs', 'belief → beliefs'], 112, 26, 'r', 12, 40, 280, 8),
      ...cap('f・fe → ves、例外は暗記', C.purple),
    ),
  },
  {
    note: '❓s のつづりは同じなのに、読み方はなぜ変わるのでしょう。→ 直前の音で決まるからです。p・t・k・f のような息だけの音のあとは「ス」（cats・books）、声のある音や母音のあとは「ズ」（dogs・pens）、s・x・ch・sh・z のあとは「イズ」（buses・watches）です。',
    add: fresh(
      bx(8, 10, 98, 64, 'ス [s]\ncats\nbooks', C.blue, FILL.blue, 12), bx(111, 10, 98, 64, 'ズ [z]\ndogs\npens', C.green, FILL.green, 12), bx(214, 10, 98, 64, 'イズ [iz]\nbuses\nwatches', C.red, FILL.red, 12),
      lb(57, 88, '息だけの音のあと', 10, C.blue, 'middle', true), lb(160, 88, '声のある音・母音のあと', 10, C.green, 'middle', true), lb(263, 88, 's・x・ch・sh のあと', 10, C.red, 'middle', true),
      ...cap('直前の音で s の読み方が決まる', C.main),
    ),
  },
  {
    note: 'まとめです。語の終わりを見て、①ふつうは s、②s・x・ch・sh・o は es、③子音＋y は ies、④f・fe は ves、と作り方を選びます。s の読み方は、直前の音で「ス・ズ・イズ」と変わります。',
    add: fresh(
      bx(15, 8, 290, 22, 'ふつう：s（books）', C.blue, FILL.blue, 12),
      bx(15, 34, 290, 22, 's・x・ch・sh・o：es（boxes）', C.green, FILL.green, 12),
      bx(15, 60, 290, 22, '子音＋y：ies（cities）', C.red, FILL.red, 12),
      bx(15, 86, 290, 22, 'f・fe：ves（leaves）', C.purple, FILL.purple, 12),
      bx(15, 112, 290, 22, '読み方：ス・ズ・イズ', C.main, FILL.warm, 12),
      ...cap('終わり方を見て選ぶ', C.main),
    ),
  },
], '複数形：語の終わりで作り方が決まる');

// ───────── eigo_21_setsuzokushi 相関接続詞 ─────────
const u21: DiagramFigure = show([
  {
    note: '相関接続詞（そうかんせつぞくし）は、2つの語句をペアで使う接続詞（せつぞくし）です。意味と動詞のそろえ方が、それぞれちがいます。both A and B、either A or B、neither A nor B、not only A but also B の4つを順に見ます。',
    add: [
      ...[['both A and B', 'AとBの両方'], ['either A or B', 'AかBのどちらか'], ['neither A nor B', 'AもBも〜ない'], ['not only A but also B', 'AだけでなくBも']].flatMap(([a, b], i) => [
        bx(10, 10 + i * 33, 160, 26, a, C.blue, FILL.blue, 12), bx(176, 10 + i * 33, 134, 26, b, C.green, FILL.green, 12),
      ]),
      ...cap('ペアで使う接続詞'),
    ],
  },
  {
    note: 'both A and B は「AとBの両方」。Both Tom and Ken are good at math.（トムもケンも数学が得意だ）。❓なぜ are なのでしょう。→ トムとケンの2人を合わせるので、動詞はいつも複数あつかいだからです。',
    add: fresh(
      ...sent([['Both', 'r'], ['Tom', 'b'], ['and', 'r'], ['Ken', 'b'], ['are', 'g'], ['good at math.', 'y']], 16, 32, 12, 4, 316),
      bx(70, 70, 70, 30, 'Tom', C.blue, FILL.blue, 13), lb(160, 86, '＋', 16), bx(180, 70, 70, 30, 'Ken', C.blue, FILL.blue, 13),
      lb(160, 120, '2人 → 複数 → are', 13, C.green, 'middle', true),
      ...cap('both A and B ＝ いつも複数あつかい', C.green),
    ),
  },
  {
    note: 'either A or B は「AかBのどちらか」。Either you or I am wrong.（あなたか私のどちらかが間違っている）。❓動詞はなぜ am なのでしょう。→ 動詞は、近いほうのB（I）に合わせるからです。これを近接一致（きんせついっち）といいます。',
    add: fresh(
      ...sent([['Either', 'r'], ['you', 'b'], ['or', 'r'], ['I', 'g'], ['am', 'g'], ['wrong.', 'y']], 16, 32, 13, 6, 314),
      bx(110, 78, 100, 28, 'B に合わせる', C.red, FILL.red, 12), ar(185, 76, 185, 56, C.red),
      lb(160, 124, 'I に合わせて am', 13, C.red, 'middle', true),
      ...cap('either A or B ＝ B に動詞を合わせる', C.red),
    ),
  },
  {
    note: 'neither A nor B は「AもBも〜ない」。Neither Tom nor Ken likes vegetables.（トムもケンも野菜が好きではない）。動詞はB（Ken）に合わせるので likes。❓なぜ doesn’t をつけないのでしょう。→ neither がすでに否定の意味を持つので、さらに否定すると二重否定になるからです。',
    add: fresh(
      ...sent([['Neither', 'r'], ['Tom', 'b'], ['nor', 'r'], ['Ken', 'g'], ['likes', 'g'], ['vegetables.', 'y']], 14, 32, 12, 4, 316),
      bx(14, 66, 144, 44, '○ likes\nneither で否定済み', C.green, FILL.green, 12), bx(162, 66, 144, 44, '× doesn\'t like\n二重否定になる', C.red, FILL.red, 12),
      ...cap('neither のあとは、動詞を否定しない', C.red),
    ),
  },
  {
    note: 'not only A but also B は「AだけでなくBも」。Not only Tom but also his sisters are coming.（トムだけでなく彼の姉妹たちも来る）。B（his sisters）を特に強調します。動詞はBに合わせて、複数の are です。',
    add: fresh(
      ...sent([['Not only', 'r'], ['Tom', 'b'], ['but also', 'r'], ['his sisters', 'g'], ['are', 'g'], ['coming.', 'y']], 16, 32, 12, 4, 316),
      lb(160, 74, 'いちばん言いたいのは B', 13, C.green, 'middle', true),
      bx(90, 90, 140, 28, 'B に合わせて are', C.red, FILL.red, 13),
      ...cap('not only A but also B ＝ B を強調', C.green),
    ),
  },
  {
    note: '❓B as well as A は、動詞を何に合わせるのでしょう。→ 先に書いてある B に合わせます。His sisters as well as Tom are coming. は、His sisters が主語の中心なので are です。not only A but also B と同じ意味ですが、語の順がちがいます。',
    add: fresh(
      ...sent([['His sisters', 'g'], ['as well as', 'r'], ['Tom', 'b'], ['are', 'g'], ['coming.', 'y']], 16, 32, 12, 6, 314),
      lb(160, 74, '先に書いてある B に合わせる', 13, C.red, 'middle', true),
      bx(40, 92, 240, 30, '＝ Not only Tom but also his sisters …', C.main, FILL.yellow, 11),
      ...cap('B as well as A ＝ 先頭の B に合わせる', C.red),
    ),
  },
  {
    note: 'まとめです。both A and B は常に複数、either A or B と neither A nor B と not only A but also B は動詞をBに合わせる。neither は動詞を否定しない。B as well as A は先頭のBに合わせます。',
    add: fresh(
      ...grid([['形', '意味', '動詞'], ['both A and B', '両方', '複数'], ['either A or B', 'どちらか', 'B に合わせる'], ['neither A nor B', 'どちらも〜ない', 'B に合わせる'], ['not only A but also B', 'AだけでなくBも', 'B に合わせる']], 8, 6, [124, 94, 88], 24, ['b', 'g', 'r'], 10),
      ...cap('動詞の合わせ方がちがう', C.main),
    ),
  },
], '相関接続詞：動詞をそろえる相手');

// ───────── eigo_22_kantanbun 付加疑問文 ─────────
const u22: DiagramFigure = show([
  {
    note: '付加疑問文（ふかぎもんぶん）は、文の最後に短い疑問をつけて、「〜だよね？」と相手に確認する表現です。会話でよく使われ、リスニングや会話文の問題にも出ます。You are a student, aren’t you?（あなたは生徒ですよね？）。',
    add: [
      ...sent([['You are a student,', 'b'], ["aren't you?", 'r']], 24, 34, 14, 10, 310),
      lb(160, 82, '文の最後に、短い疑問をつける', 13, C.ink, 'middle', true),
      lb(160, 106, '「〜ですよね？」と確認する', 13, C.red, 'middle', true),
      ...cap('文末に短い疑問をつけて確認'),
    ],
  },
  {
    note: '❓どう作るのでしょう。→ 前の文が肯定（こうてい）文なら、つける疑問は否定形。前の文が否定文なら、つける疑問は肯定形にします。You are a student, aren’t you? は肯定→否定。She isn’t busy, is she? は否定→肯定です。',
    add: fresh(
      bx(10, 12, 140, 36, '肯定文\nYou are a student,', C.blue, FILL.blue, 11), ar(152, 30, 168, 30, C.main), bx(170, 12, 140, 36, "否定形\naren't you?", C.red, FILL.red, 12),
      bx(10, 66, 140, 36, '否定文\nShe isn\'t busy,', C.red, FILL.red, 11), ar(152, 84, 168, 84, C.main), bx(170, 66, 140, 36, '肯定形\nis she?', C.blue, FILL.blue, 12),
      lb(160, 126, '反対の形で たずね返す', 13, C.ink, 'middle', true),
      ...cap('肯定 → 否定、否定 → 肯定', C.main),
    ),
  },
  {
    note: '❓なぜ反対の形にするのでしょう。→ 「そうですよね？」と確認するために、反対側から軽くたずね返す形になっているからです。be動詞の例：You are a student, aren’t you? / She isn’t busy, is she? / It was cold yesterday, wasn’t it?',
    add: fresh(
      ...[['You are a student,', "aren't you?"], ['She isn\'t busy,', 'is she?'], ['It was cold yesterday,', "wasn't it?"]].flatMap(([a, b], i) => [
        bx(8, 12 + i * 40, 190, 28, a, C.blue, FILL.blue, 12), bx(204, 12 + i * 40, 108, 28, b, C.red, FILL.red, 12),
      ]),
      ...cap('be動詞は be動詞で たずね返す', C.main),
    ),
  },
  {
    note: '一般動詞（いっぱんどうし）の文では、do / does / did を使います。He plays soccer, doesn’t he?（彼はサッカーをしますよね？）。They don’t like natto, do they?（彼らは納豆が好きではないですよね？）。You went to the party, didn’t you?（パーティーに行きましたよね？）。❓なぜ do 系なのでしょう。→ 前の文の動詞の形と時に合わせるからです。',
    add: fresh(
      ...[['He plays soccer,', "doesn't he?"], ["They don't like natto,", 'do they?'], ['You went to the party,', "didn't you?"]].flatMap(([a, b], i) => [
        bx(8, 12 + i * 40, 190, 28, a, C.blue, FILL.blue, 11), bx(204, 12 + i * 40, 108, 28, b, C.red, FILL.red, 12),
      ]),
      ...cap('plays → does、went → did', C.main),
    ),
  },
  {
    note: '助動詞（じょどうし）の文では、その助動詞をくり返します。She can swim, can’t she?（彼女は泳げますよね？）、You will come, won’t you?（来ますよね？）、We should hurry, shouldn’t we?（急いだほうがいいですよね？）。won’t は will not を短くした形です。',
    add: fresh(
      ...[['She can swim,', "can't she?"], ['You will come,', "won't you?"], ['We should hurry,', "shouldn't we?"]].flatMap(([a, b], i) => [
        bx(8, 12 + i * 40, 190, 28, a, C.blue, FILL.blue, 12), bx(204, 12 + i * 40, 108, 28, b, C.red, FILL.red, 12),
      ]),
      ...cap('助動詞はそのままくり返す', C.main),
    ),
  },
  {
    note: '❓主語は、疑問の部分でどうなるでしょう。→ 必ず代名詞（だいめいし）になります。the boy は he に、my mother は she に、these books は they に変わります。The boy is tall, isn’t he?（その男の子は背が高いですよね？）。',
    add: fresh(
      ...[['the boy', 'he'], ['my mother', 'she'], ['these books', 'they']].flatMap(([a, b], i) => [
        bx(30, 12 + i * 32, 110, 24, a, C.blue, FILL.blue, 13), ar(142, 24 + i * 32, 170, 24 + i * 32, C.main), bx(172, 12 + i * 32, 70, 24, b, C.red, FILL.red, 13),
      ]),
      ...sent([['The boy is tall,', 'b'], ["isn't he?", 'r']], 112, 28, 13, 20, 300),
      ...cap('主語は代名詞にする', C.red),
    ),
  },
  {
    note: '形が変わる特別な付加疑問もあります。I am 〜 は aren’t I?（I’m right, aren’t I?）。Let’s 〜 は shall we?（Let’s go, shall we?）。命令文は will you?（Open the door, will you?）。am not の短い形を aren’t とするのは決まりです。',
    add: fresh(
      ...[["I'm right,", "aren't I?", 'I am ～'], ["Let's go,", 'shall we?', "Let's ～"], ['Open the door,', 'will you?', '命令文']].flatMap(([a, b, c], i) => [
        tag(6, 16 + i * 40, 62, c, 'm', 10), bx(72, 12 + i * 40, 130, 28, a, C.blue, FILL.blue, 12), bx(208, 12 + i * 40, 104, 28, b, C.red, FILL.red, 12),
      ]),
      ...cap('特別な形は丸ごと覚える', C.red),
    ),
  },
  {
    note: '❓付加疑問に答えるときは、どうするのでしょう。→ 事実に合わせて答えます。You don’t like coffee, do you? — No, I don’t.（好きではない）。好きなら Yes, I do.（いいえ、好きです）。日本語の「はい・いいえ」につられず、好きなら Yes、きらいなら No と判断します。',
    add: fresh(
      bx(10, 10, 300, 28, "You don't like coffee, do you?", C.blue, FILL.blue, 13),
      bx(14, 56, 144, 40, '好きではない\nNo, I don\'t.', C.red, FILL.red, 12), bx(162, 56, 144, 40, '好き\nYes, I do.', C.green, FILL.green, 12),
      lb(160, 118, '日本語の「はい・いいえ」ではなく、事実で決める', 11, C.ink, 'middle', true),
      ...cap('好き → Yes、きらい → No', C.main),
    ),
  },
  {
    note: 'まとめです。肯定文には否定の疑問、否定文には肯定の疑問をつける。動詞は前の文に合わせ（be動詞・do系・助動詞）、主語は代名詞。I am は aren’t I?、Let’s は shall we?、命令文は will you? になる。答えは事実に合わせます。',
    add: fresh(
      bx(15, 8, 290, 22, '肯定 → 否定　否定 → 肯定', C.blue, FILL.blue, 12),
      bx(15, 34, 290, 22, '動詞は前の文に合わせる／主語は代名詞', C.green, FILL.green, 12),
      bx(15, 60, 290, 22, "I am → aren't I?　Let's → shall we?", C.red, FILL.red, 12),
      bx(15, 86, 290, 22, '命令文 → will you?', C.purple, FILL.purple, 12),
      bx(15, 112, 290, 22, '答えは事実で Yes / No', C.main, FILL.warm, 12),
      ...cap('反対の形でたずね返す', C.main),
    ),
  },
], '付加疑問文：反対の形でたずね返す');

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
  'xf_eigo_15_shinkoukei': u15,
  'xf_eigo_16_eiken_hyogen': u16,
  'xf_eigo_17_gojun_ouyou': u17,
  'xf_eigo_18_e_nikki_sakubun': u18,
  'xf_eigo_19_kaiwabun_dokkai': u19,
  'xf_eigo_20_tansuu_fukusuu': u20,
  'xf_eigo_21_setsuzokushi': u21,
  'xf_eigo_22_kantanbun': u22,
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
  'eigo_15_shinkoukei#0': 'xf_eigo_15_shinkoukei',
  'eigo_16_eiken_hyogen#0': 'xf_eigo_16_eiken_hyogen',
  'eigo_17_gojun_ouyou#0': 'xf_eigo_17_gojun_ouyou',
  'eigo_18_e_nikki_sakubun#1': 'xf_eigo_18_e_nikki_sakubun',
  'eigo_19_kaiwabun_dokkai#1': 'xf_eigo_19_kaiwabun_dokkai',
  'eigo_20_tansuu_fukusuu#0': 'xf_eigo_20_tansuu_fukusuu',
  'eigo_21_setsuzokushi#1': 'xf_eigo_21_setsuzokushi',
  'eigo_22_kantanbun#2': 'xf_eigo_22_kantanbun',
};
