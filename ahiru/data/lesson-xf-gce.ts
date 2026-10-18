// 中学受験 英語 ── 追加単元（gap_gce_01〜07）の「動く図解スライド」。
// 「なぜ？→答え→では、なぜ？→答え…」の連鎖で、各 7〜8 枚。単元の最初の節（#0）にひもづける。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, show, fresh, flow } from './diagram-kit';

type Col = [string, string];
const BLUE: Col = [C.blue, FILL.blue];
const GREEN: Col = [C.green, FILL.green];
const RED: Col = [C.red, FILL.red];
const MAIN: Col = [C.main, FILL.warm];
const PURPLE: Col = [C.purple, FILL.purple];
const GRAY: Col = [C.gray, FILL.gray];

// 下の帯（y=164 から）に、そのスライドのひとことを出す。\n で改行できる。
const cap = (t: string, c: Col = BLUE, size = 12): DiagramElement => {
  const n = t.split('\n').length;
  return bx(10, 164, 300, 14 + 15 * n, t, c[0], c[1], size);
};

// 1枚のスライド＝まっさらな図＋下の帯
const S = (note: string, top: DiagramElement[], capText: string, c: Col = BLUE, size = 12) => ({
  note,
  add: fresh(...top, cap(capText, c, size)),
});

// 「なぜ？」の問い → 答え
const Q = (note: string, q: string, a: string, capText: string, c: Col = BLUE, aSize = 13) =>
  S(note, [
    bx(10, 8, 300, 34, 'なぜ？ ' + q, PURPLE[0], PURPLE[1], 12),
    ar(160, 44, 160, 56, PURPLE[0]),
    bx(10, 58, 300, 92, a, c[0], c[1], aSize),
  ], capText, c);

// 横一列の箱（矢印つき）
const row = (labels: string[], y: number, c: Col = MAIN, size = 12, h = 44, gap = 14): DiagramElement[] =>
  flow(labels, y, { h, color: c[0], fill: c[1], size, gap }).flat();

// 矢印なしの横一列（列の数に応じて幅を割りふる）
const cells = (labels: string[], y: number, c: Col = MAIN, size = 12, h = 30, gap = 6, x0 = 10, total = 300): DiagramElement[] => {
  const n = labels.length;
  const w = (total - gap * (n - 1)) / n;
  return labels.map((t, i) => bx(x0 + i * (w + gap), y, w, h, t, c[0], c[1], size));
};

// 縦に並べた箱。各行は 文字列 か [文字列, 色]
const L = (rows: (string | [string, Col])[], y0 = 10, h = 26, gap = 6, size = 14, x = 10, w = 300): DiagramElement[] =>
  rows.map((r, i) => {
    const t = typeof r === 'string' ? r : r[0];
    const c = typeof r === 'string' ? MAIN : r[1];
    return bx(x, y0 + i * (h + gap), w, h, t, c[0], c[1], size);
  });

// ── ① 同音異義語（gap_gce_01） ──
const f_gce_01 = show([
  S('I can see the sea.（私は海が見える）。see（見る）と sea（海）は、読み方がどちらも「スィー」でまったく同じです。それなのに、つづりも意味もちがいます。このような語を同音異義語（どうおんいぎご）といいます。',
    [
      bx(20, 14, 110, 66, 'see\n（見る）', C.blue, FILL.blue, 18),
      lb(160, 47, '＝', 26, C.main, 'middle', true),
      bx(190, 14, 110, 66, 'sea\n（海）', C.green, FILL.green, 18),
      lb(160, 102, '読み方は どちらも「スィー」', 14, C.ink, 'middle', true),
      lb(160, 132, 'I can see the sea.', 17, C.main, 'middle', true),
    ],
    '同じ音でも、つづりと意味がちがう', MAIN),
  Q('では、なぜ同じ音なのに、ちがうつづりがあるのでしょう。→ 英語のつづりは昔の発音をもとに決まりました。know の k のように、昔は読んでいた文字が、いまは読まれなくなっても、つづりだけが残っています。',
    '同じ音なのに、ちがうつづりがあるのは？',
    '考え方：つづりは昔の発音を残している\nknow の k は、昔は読まれていた\n音だけが変わって、つづりが残った\nそのため、同じ音でつづりがちがう語が生まれた',
    '音が変わっても、つづりは残った', BLUE, 13),
  Q('では、つづりがちがうままで、こまらないのでしょうか。→ むしろ役に立ちます。see と sea が同じつづりだったら、I can see the sea. は読みにくくなります。つづりがちがうから、目で意味を見分けられます。',
    'つづりがちがっていて、こまらないの？',
    'see と sea が同じつづりだったら\nI can see the sea. は読みにくい\nつづりがちがえば、目で意味が見分けられる\nつづりは意味の目印でもある',
    'つづりのちがいは、意味を見分ける目印', GREEN, 13),
  Q('では、書くときはどうやって正しいほうを選ぶのでしょう。→ 音からは決められません。空所のまわりの語と、その場所に入る語の役割（動作か、ものの名前か、数か）で決めます。',
    '書くときは、どうやって選ぶの？',
    '音では決められない\n空所のまわりの語を見て\nその場所に入る語の役割（はたらき）で決める\n動作？　ものの名前？　数？　持ち主？',
    '音ではなく、役割で選ぶ', PURPLE, 13),
  S('I can ( ) the ( ). の空所を考えます。can のあとには動作を表す語が来るので see（見る）。the のあとにはものの名前が来るので sea（海）。役割から決めると、音に迷いません。',
    [
      bx(10, 12, 300, 36, 'I can ( ① ) the ( ② ).', C.main, FILL.warm, 17),
      bx(10, 62, 300, 38, '① can のあと → 動作の語 → see', C.blue, FILL.blue, 14),
      bx(10, 108, 300, 38, '② the のあと → ものの名前 → sea', C.green, FILL.green, 14),
    ],
    '空所の前の語が、いちばんのヒント', MAIN),
  S('there・their・they\'re は、まちがえやすい3つ組です。there は「そこに」で There is の形。their は「彼らの」で、あとに名詞が続きます。they\'re は they are の短縮形です。',
    [
      bx(10, 10, 96, 112, 'there\n「そこに」\nThere is ～.\n場所を表す', C.blue, FILL.blue, 12),
      bx(112, 10, 96, 112, 'their\n「彼らの」\nあとに名詞\nTheir house', C.green, FILL.green, 12),
      bx(214, 10, 96, 112, 'they\'re\nthey are の\n短縮形\n置きかえできる', C.red, FILL.red, 12),
      lb(160, 142, 'they are → they\'re／名詞が続く → their／他は there', 11, C.ink, 'middle', true),
    ],
    'they are に置きかえて、意味が通れば they\'re', BLUE),
  S('to・too・two も同じです。two は数の 2、too は「〜も」「〜すぎる」、to は「〜へ」「〜すること」です。数ならtwo、「〜も・〜すぎる」ならtoo、ほかはto と決めます。',
    [
      bx(10, 10, 96, 112, 'to\n〜へ\n〜すること\nto school\nto play', C.blue, FILL.blue, 12),
      bx(112, 10, 96, 112, 'too\n〜も\n〜すぎる\nMe, too.\ntoo heavy', C.green, FILL.green, 12),
      bx(214, 10, 96, 112, 'two\n数の 2\ntwo books\ntwo brothers', C.red, FILL.red, 12),
      lb(160, 142, '数なら two／「〜も・〜すぎる」なら too／ほかは to', 12, C.ink, 'middle', true),
    ],
    '意味から 3つを 見分ける', GREEN),
  S('最後に、確かめの3ステップです。①空所の役割を決める。②候補を置きかえて意味を確かめる。③つづりを1字ずつ見る。この順番を守れば、音に迷わずに書けます。',
    row(['① 空所の\n役割を決める', '② 置きかえて\n意味を確かめる', '③ つづりを\n1字ずつ見る'], 30, MAIN, 12, 90, 16),
    '役割 → 置きかえ → つづり', MAIN),
], '同音異義語は、音ではなく役割で選ぶ');

// ── ② 反意語（gap_gce_02） ──
const pairRow = (y: number, l: string, r: string, c: Col): DiagramElement[] => [
  bx(14, y, 120, 34, l, c[0], c[1], 16),
  lb(160, y + 17, '⇔', 18, C.main, 'middle', true),
  bx(186, y, 120, 34, r, c[0], c[1], 16),
];

const f_gce_02 = show([
  S('hot の反対は cold、big の反対は small、early の反対は late。反対の意味の語（反意語（はんいご））は、中学入試の英語によく出ます。まずはペアで覚えます。',
    [...pairRow(12, 'hot', 'cold', RED), ...pairRow(58, 'big', 'small', BLUE), ...pairRow(104, 'early', 'late', GREEN)],
    '反対の意味の語は、ペアで覚える', MAIN),
  Q('では、hot の反対が cold とわかるのは、なぜでしょう。→ どちらも「温度」という同じものさしの両はしにあるからです。反意語は、同じものさしの はしと はし です。',
    'hot の反対が cold だとわかるのは？',
    'どちらも「温度」という\n同じものさしの、両はしにあるから\nhot ←→ cold\n反意語は ものさしの はしと はし',
    '反意語は、同じものさしの両はし', RED, 13),
  S('温度のものさしです。左から cold（つめたい）、cool（すずしい）、warm（あたたかい）、hot（あつい）。両はしの cold と hot が反意語で、まんなかの cool と warm は反意語ではありません。',
    [
      lb(160, 22, 'ものさし ＝ 温度', 15, C.ink, 'middle', true),
      bx(10, 44, 66, 40, 'cold', C.blue, FILL.blue, 14),
      bx(82, 44, 66, 40, 'cool', C.gray, FILL.gray, 14),
      bx(154, 44, 66, 40, 'warm', C.gray, FILL.gray, 14),
      bx(226, 44, 66, 40, 'hot', C.red, FILL.red, 14),
      lb(160, 112, '両はし ＝ 反意語', 14, C.main, 'middle', true),
      lb(160, 136, 'まんなか（cool・warm）は 反意語ではない', 13, C.ink, 'middle', true),
    ],
    'cool や warm を、反対の語として書かない', BLUE),
  Q('では、not hot（あつくない）は cold と同じ意味でしょうか。→ ちがいます。あつくない温度には、warm や cool もあります。not をつけた形は、反意語ではありません。',
    'not hot は cold と同じ意味なの？',
    'ちがう！\nnot hot は warm や cool かもしれない\nはしまで行ってはじめて、反意語\nnot ＋ 語は 反意語にならない',
    'not ＋ 語は、反意語とはかぎらない', PURPLE, 13),
  S('short には、反対の語が2つあります。長さのものさしなら long、背の高さのものさしなら tall です。ものさしが変わると、相手も変わります。',
    [
      bx(110, 10, 100, 36, 'short', C.main, FILL.warm, 18),
      ar(135, 48, 85, 88, C.blue),
      ar(185, 48, 235, 88, C.green),
      bx(10, 92, 140, 44, 'long\n（長さのものさし）', C.blue, FILL.blue, 13),
      bx(170, 92, 140, 44, 'tall\n（背の高さ）', C.green, FILL.green, 13),
    ],
    'ものさしが変わると、反対の語も変わる', MAIN),
  Q('では、ほかにも、ものさしで相手が変わる語はあるでしょうか。→ あります。old・light・right も、使い方によって反対の語がちがいます。',
    'ほかにも、相手が変わる語は？',
    'old：物 → new　／　人 → young\nlight：重さ → heavy　／　明るさ → dark\nright：正しい → wrong　／　右 → left\n何について言っているかで決める',
    '問題文から、ものさしを決める', GREEN, 13),
  S('動詞にも反意語があります。open ⇔ close、come ⇔ go、buy ⇔ sell、borrow ⇔ lend、win ⇔ lose、start ⇔ finish。動詞には動詞を、品詞をそろえて答えます。',
    [
      bx(10, 8, 145, 34, 'open ⇔ close', C.blue, FILL.blue, 14),
      bx(165, 8, 145, 34, 'come ⇔ go', C.blue, FILL.blue, 14),
      bx(10, 50, 145, 34, 'buy ⇔ sell', C.green, FILL.green, 14),
      bx(165, 50, 145, 34, 'borrow ⇔ lend', C.green, FILL.green, 14),
      bx(10, 92, 145, 34, 'win ⇔ lose', C.red, FILL.red, 14),
      bx(165, 92, 145, 34, 'start ⇔ finish', C.red, FILL.red, 14),
    ],
    '動詞には動詞を、品詞をそろえて答える', BLUE),
  S('答えるときの3ステップです。①ものさしを考える。②同じ品詞で答える。③文に入れて、前後が対比になっているか読む。My bag is new, but his bag is old. のように but でつながる文なら、対比です。',
    row(['① ものさしを\n考える', '② 同じ品詞で\n答える', '③ 文に入れて\n読む'], 30, MAIN, 12, 90, 16),
    'ものさし → 品詞 → 文', MAIN),
], '反意語は、同じものさしの両はし');

// ── ③ 使役・知覚の動詞（gap_gce_03） ──
const f_gce_03 = show([
  S('My mother made me wash the dishes.（母は私に皿を洗わせた）。made のあとに me（人）、そのあとに wash（動詞の原形）が続いています。wash に to がついていないことに注目します。',
    [
      bx(6, 18, 64, 44, 'My\nmother', C.main, FILL.warm, 12),
      bx(76, 18, 52, 44, 'made', C.red, FILL.red, 14),
      bx(134, 18, 40, 44, 'me', C.blue, FILL.blue, 14),
      bx(180, 18, 52, 44, 'wash', C.green, FILL.green, 14),
      bx(238, 18, 76, 44, 'the\ndishes', C.main, FILL.warm, 12),
      lb(160, 90, '〈make ＋ 人 ＋ 動詞の原形〉', 15, C.main, 'middle', true),
      lb(160, 118, '「母は私に皿を洗わせた」', 14, C.ink, 'middle', true),
    ],
    '「人に〜させる」は 人のあとに原形', MAIN),
  Q('では、なぜ wash に to がつかないのでしょう。→ to は「これから向かう」しるしです。させる・見るの場面では、動作が目の前で同時に起こるので、to を置きません。覚えやすくするための考え方です。',
    'なぜ wash に to がつかないの？',
    '考え方：to は「これから向かう」しるし\n（want to go ＝ これから行きたい）\nさせる・見る場面では、動作が\n目の前で同時に起こるので to は置かない',
    'to は「これから」のしるし', BLUE, 12),
  S('使役（しえき）の動詞は3つです。make は無理にでもさせる（強制（きょうせい））、let は許す（許可（きょか））、have はたのんでしてもらう。どれも〈人 ＋ 原形〉の形です。',
    [
      bx(10, 6, 300, 46, 'make ＝ 無理にでもさせる（強制）\nMy mother made me wash the dishes.', C.red, FILL.red, 12),
      bx(10, 56, 300, 46, 'let ＝ してもいいと許す（許可）\nMy father let me use his computer.', C.green, FILL.green, 12),
      bx(10, 106, 300, 46, 'have ＝ たのんで してもらう\nI had my brother carry my bag.', C.blue, FILL.blue, 12),
    ],
    'make は強制、let は許可、have はたのんで', MAIN),
  Q('では、see や hear も同じ形なのでしょうか。→ 同じです。見る・聞く・感じる動詞（知覚（ちかく）の動詞）も〈人 ＋ 原形〉になります。',
    'see や hear も同じ形なの？',
    '同じ！ 〈see／hear／watch／feel ＋ 人 ＋ 原形〉\nI saw him cross the street.\n（彼が道を渡るのを見た）\nI heard her sing.（彼女が歌うのが聞こえた）',
    '見る・聞くも、人のあとは原形', GREEN, 13),
  S('知覚の動詞のあとは、原形のほかに〜ing も使えます。原形は最初から最後まで、〜ing は「している最中」を表します。',
    [
      bx(10, 12, 140, 98, 'cross（原形）\n\n渡りはじめから\n渡りおわるまで\n全部を見た', C.blue, FILL.blue, 13),
      bx(170, 12, 140, 98, 'crossing（〜ing）\n\n渡っている\n最中を見た', C.green, FILL.green, 13),
      lb(160, 134, 'I saw him ( ) the street.', 14, C.main, 'middle', true),
    ],
    '原形は 最初から最後まで、〜ing は 最中', GREEN),
  Q('では、want・tell・ask のあととは、どうちがうのでしょう。→ want・tell・ask は、あとでする動作をあとに続けるので to がいります。make・let・have・see・hear は to がいりません。',
    'want・tell・ask とは、どうちがうの？',
    'want／tell／ask ＋ 人 ＋ to ＋ 原形\n（望む・言う・たのむ → to がいる）\nmake／let／have／see／hear ＋ 人 ＋ 原形\n（させる・許す・見る・聞く → to なし）',
    'to がいるか、いらないかで見分ける', PURPLE, 12),
  S('よくあるまちがいです。My father made me to wash his car. の to は、いりません。make のあとは〈人 ＋ 原形〉なので、to をとって made me wash にします。',
    [
      bx(10, 14, 300, 40, 'My father made me to wash his car.', C.red, FILL.red, 14),
      ar(160, 56, 160, 80, C.main),
      bx(10, 84, 300, 40, 'My father made me wash his car.', C.green, FILL.green, 14),
      lb(160, 144, 'to を とる', 14, C.red, 'middle', true),
    ],
    'make のあとの to は、消す', RED),
  S('確かめの3ステップです。①動詞は make・let・have・see・hear のどれか。②人のあとの動詞は原形か（to・s・ed・ing はないか）。③意味（強制・許可・たのむ）が合っているか。',
    row(['① 動詞の\n種類を見る', '② 人のあとは\n原形か', '③ 意味を\n確かめる'], 30, MAIN, 12, 90, 16),
    '種類 → 原形 → 意味', MAIN),
], '〈make／let／have／see／hear ＋ 人 ＋ 原形〉');

// ── ⑤ 比較の書きかえ（gap_gce_05） ──
const f_gce_05 = show([
  S('Lake Biwa is the largest lake in Japan.（琵琶湖は日本でいちばん大きい湖だ）。この文は、than any other や No other を使って、同じ意味の別の文に書きかえられます。',
    [
      bx(10, 6, 300, 40, 'Lake Biwa is the largest\nlake in Japan.', C.blue, FILL.blue, 13),
      bx(10, 50, 300, 40, 'Lake Biwa is larger than\nany other lake in Japan.', C.green, FILL.green, 13),
      bx(10, 94, 300, 40, 'No other lake in Japan is\nas large as Lake Biwa.', C.main, FILL.warm, 13),
    ],
    '三つの言い方は、同じ意味', MAIN),
  Q('では、なぜ any のあとに other が必要なのでしょう。→ other がないと、日本の湖の中に琵琶湖自身もふくまれて、琵琶湖が琵琶湖より大きいことになってしまうからです。',
    'なぜ any other の other が必要なの？',
    'other がないと「日本のどの湖」の中に\n琵琶湖自身もふくまれてしまう\n→ 琵琶湖は琵琶湖より大きい？\n琵琶湖をのぞくために other を入れる',
    'other は「自分をのぞく」ための語', BLUE, 13),
  Q('では、なぜ any other lake と単数形になるのでしょう。→ any は「どれか 1 つを取り出しても」の意味です。ほかの湖を 1 つずつ取り出して比べるので、名詞は単数形になります。',
    'なぜ lake は単数形なの？',
    'any ＝「どれか 1 つを取り出しても」\nほかの湖を 1 つずつ取り出して比べる\nだから あとの名詞は単数形\nany other lake ○　／　lakes ×',
    'any のあとは 単数形', GREEN, 13),
  S('3人の身長で確かめます。Ken 160cm、Tom 150cm、Sam 140cm。棒の高さがそのまま身長です。いちばん高いのは Ken、いちばん低いのは Sam です。',
    [
      bx(30, 46, 70, 84, 'Ken\n160cm', C.green, FILL.green, 13),
      bx(125, 60, 70, 70, 'Tom\n150cm', C.blue, FILL.blue, 13),
      bx(220, 74, 70, 56, 'Sam\n140cm', C.red, FILL.red, 13),
      lb(160, 148, 'ものさし ＝ 身長', 14, C.ink, 'middle', true),
    ],
    '数字で順位を決めてから、文にする', GREEN),
  Q('では、低い Tom を主語にして比べるときは、どう言うのでしょう。→ as ～ as は「同じくらい」の形です。not をつけると「同じくらいではない」となり、ケンのほうが高いことを表せます。',
    '低いほうを主語にするときは？',
    'Tom は Ken より低い\n→ Tom is not as tall as Ken.\nas ～ as ＝「同じくらい」\nnot をつけて「同じくらいではない」',
    '低いほうが主語なら、not as ～ as', PURPLE, 13),
  S('上と下を入れかえて、同じ意味を3通りに言えます。Ken is taller than Tom. ＝ Tom is not as tall as Ken. ＝ Tom is shorter than Ken.',
    [
      bx(10, 10, 300, 36, 'Ken is taller than Tom.', C.green, FILL.green, 15),
      bx(10, 54, 300, 36, '＝ Tom is not as tall as Ken.', C.blue, FILL.blue, 15),
      bx(10, 98, 300, 36, '＝ Tom is shorter than Ken.', C.main, FILL.warm, 15),
    ],
    '上と下を入れかえると、言い方が変わる', MAIN),
  S('同じ程度を言う形もあります。Aya is as old as Mika. は、アヤとミカが同じ年ということで、Aya and Mika are the same age. と言いかえられます。as ～ as の間は原級（もとの形）です。',
    [
      bx(10, 14, 300, 40, 'Aya is as old as Mika.', C.blue, FILL.blue, 16),
      lb(160, 74, '＝', 22, C.main, 'middle', true),
      bx(10, 90, 300, 40, 'Aya and Mika are the same age.', C.green, FILL.green, 15),
    ],
    'as ～ as は 同じ程度（間は原級）', BLUE),
  S('確かめの3ステップです。①数字を入れて、順位が変わらないか読む。②other と単数形、as ～ as の間が原級かを見る。③反対の意味の語（shorter）でも言いかえられるか確かめる。',
    row(['① 数字で\n順位を読む', '② other・単数\n・原級を見る', '③ 反対の語で\n言いかえる'], 30, MAIN, 12, 90, 16),
    '順位 → 形のきまり → 言いかえ', MAIN),
], '最上級は、any other か No other で言いかえる');

// ── ⑥ 語形を直す問題（gap_gce_06） ──
const f_gce_06 = show([
  S('I (go) to the library yesterday. （　）の go を、文に合う形に直します。yesterday（きのう）という合図があるので、過去形の went にします。',
    [
      bx(10, 14, 300, 40, 'I ( go ) to the library yesterday.', C.main, FILL.warm, 15),
      lb(160, 74, '合図：yesterday ＝ 過去の話', 14, C.red, 'middle', true),
      ar(160, 86, 160, 104, C.main),
      bx(110, 106, 100, 38, 'went', C.green, FILL.green, 20),
    ],
    '形は、合図で決まる', MAIN),
  Q('では、なぜ go のままではだめなのでしょう。→ 英語の動詞は、時・主語・前の語によって形が変わります。辞書にのっている形（原形）だけでは、文の中で使えないことが多いからです。',
    'なぜ go のままではだめなの？',
    '英語の動詞は、時・主語・前の語で形が変わる\n辞書の形（原形）のままでは\n文の中で使えないことが多い\nだから、合図を見つけて形を決める',
    '原形のままでは使えない', BLUE, 13),
  S('合図は3つです。①時の語（yesterday なら過去形）②直前の語（to なら原形、enjoy なら〜ing）③主語の数（he・she なら s をつける）。',
    L([
      ['① 時の語：yesterday → 過去形', BLUE],
      ['② 直前の語：to → 原形 ／ enjoy → 〜ing', GREEN],
      ['③ 主語の数：he・she・it → s をつける', RED],
    ], 10, 40, 8, 13),
    '合図は、時・直前の語・主語の数', MAIN),
  Q('では、to のあとと enjoy のあとで、形がちがうのはなぜでしょう。→ to は「これから向かう」ので、これからする動作は原形。enjoy や finish は、すでにしていることなので〜ing です。',
    'to と enjoy で形がちがうのは？',
    'to ＋ 原形：これからすること\nwant to be（なりたい）\nenjoy ＋ 〜ing：すでにしていること\nenjoy talking（話して楽しむ）',
    'これから → to、すでに → 〜ing', PURPLE, 13),
  S('そのほかの合図です。have・has のあとは過去分詞（has finished）。am・is・are のあとは〜ing（している）か過去分詞（される）。than があれば比較級、the ... of があれば最上級です。',
    L([
      ['have・has のあと → 過去分詞（has finished）', BLUE],
      ['am・is・are のあと → 〜ing か 過去分詞', GREEN],
      ['than → 比較級　／　the ... of → 最上級', RED],
    ], 10, 40, 8, 13),
    'ほかの合図も、前後の語を見る', BLUE),
  Q('では、数や比べる文の合図は、どう見つけるのでしょう。→ two・three・many のあとは複数形、than のある文は比較級、the ... of や in のある文は最上級です。2語の答えになることもあります。',
    '数や比べる文の合図は？',
    'two・three・many のあと → 複数形\n（women・children・boxes）\nthan → 比較級（bigger）\nthe ... of → 最上級（most interesting は2語）',
    '数・than・the ... of も、合図になる', GREEN, 13),
  S('形を決めたら、つづりを変えます。study は studies・studied（y を i に）、big は bigger・biggest（g を重ねる）、write は writing（e をとる）、child は children。',
    [
      bx(10, 10, 140, 26, 'もとの形', C.blue, FILL.blue, 13),
      bx(150, 10, 160, 26, '変えた形', C.blue, FILL.blue, 13),
      bx(10, 36, 140, 26, 'study', C.main, FILL.warm, 13),
      bx(150, 36, 160, 26, 'studies / studied', C.main, FILL.warm, 13),
      bx(10, 62, 140, 26, 'big', C.main, FILL.warm, 13),
      bx(150, 62, 160, 26, 'bigger / biggest', C.main, FILL.warm, 13),
      bx(10, 88, 140, 26, 'write', C.main, FILL.warm, 13),
      bx(150, 88, 160, 26, 'writing', C.main, FILL.warm, 13),
      bx(10, 114, 140, 26, 'child', C.main, FILL.warm, 13),
      bx(150, 114, 160, 26, 'children', C.main, FILL.warm, 13),
    ],
    'つづりは、1字ずつ確かめる', MAIN),
  S('確かめの3ステップです。①直した文を声に出して読む。②日本語に訳して意味が合うか見る。③合図を言えるか（yesterday があるから過去形、など）とつづりを確かめる。',
    row(['① 文を声に\n出して読む', '② 訳して\n意味を見る', '③ 合図を言って\nつづりを見る'], 30, MAIN, 12, 90, 16),
    '読む → 訳す → 合図とつづり', MAIN),
], '形は、合図で決める（時・直前の語・主語の数）');

// ── ⑦ used to（gap_gce_07） ──
const f_gce_07 = show([
  S('I used to play soccer, but now I play tennis.（以前はサッカーをしていたが、今はテニスをしている）。used to は、「以前はそうだった、でも今はちがう」を表します。',
    [
      bx(10, 14, 130, 54, '以前（むかし）\nサッカーをした', C.blue, FILL.blue, 13),
      ar(142, 41, 178, 41, C.main),
      bx(180, 14, 130, 54, '今\nテニスをしている', C.green, FILL.green, 13),
      lb(160, 100, 'I used to play soccer, but now I play tennis.', 12, C.ink, 'middle', true),
      lb(160, 126, '〈used to ＋ 動詞の原形〉', 15, C.main, 'middle', true),
    ],
    '以前はそうだった、でも今はちがう', MAIN),
  Q('では、なぜ過去形の played ではだめなのでしょう。→ played は「過去にした」ことだけを言います。used to は、今はしていない、という今との対比まで伝えます。',
    'なぜ played ではだめなの？',
    'played は「過去にした」だけを言う\n今もしているのか、やめたのかは不明\nused to は「以前は〜、今は〜ない」と\n今との対比まで伝える',
    '今とのちがいまで伝えるのが used to', BLUE, 13),
  S('used to は、習慣にも状態にも使えます。I used to play soccer.（習慣）、There used to be a shop.（以前は店があった）、He used to be shy.（以前はおとなしかった）。',
    L([
      ['I used to play soccer.（習慣（しゅうかん））', BLUE],
      ['There used to be a shop.（状態（じょうたい））', GREEN],
      ['He used to be shy.（状態）', RED],
    ], 10, 40, 8, 14),
    '習慣にも、状態にも使える', MAIN),
  Q('では、would とはどうちがうのでしょう。→ would も「以前は〜したものだ」を表しますが、動作のくり返しだけです。be や live のような状態には使えません。',
    'would とは、どうちがうの？',
    'would は 動作のくり返しだけ\n状態（be・live・like）には使えない\n× I would be shy.\n○ I used to be shy.',
    '状態は used to だけ', PURPLE, 13),
  S('否定文と疑問文では did を使い、used は use にもどります。I didn\'t use to like fish.（以前は魚が好きではなかった）、Did you use to walk to school?（以前は歩いて通学していましたか）。',
    L([
      ['否定：I didn\'t use to like fish.', BLUE],
      ['疑問：Did you use to walk to school?', GREEN],
      ['答え：Yes, I did.　／　No, I didn\'t.', RED],
    ], 10, 40, 8, 14),
    'did があると、used は use にもどる', BLUE),
  Q('では、be used to も同じ意味なのでしょうか。→ ちがいます。〈be動詞 ＋ used to ＋ 〜ing〉は「〜に慣れている」です。I am used to getting up early.（早起きに慣れている）。',
    'be used to も同じ意味なの？',
    'ちがう！\n〈be動詞 ＋ used to ＋ 〜ing〉＝ 〜に慣れている\nI am used to getting up early.\n（早起きに慣れている）',
    'be動詞があれば、意味がちがう', GREEN, 13),
  S('3つを並べます。used to ＋ 原形は「以前は〜した」。be used to ＋ 〜ing は「〜に慣れている」。be used to ＋ 原形は「〜するために使われる」。be動詞があるか、あとが原形か〜ing かで見分けます。',
    [
      bx(10, 10, 96, 112, 'used to\n＋ 原形\n以前は\n〜した', C.blue, FILL.blue, 12),
      bx(112, 10, 96, 112, 'be used to\n＋ 〜ing\n〜に\n慣れている', C.green, FILL.green, 12),
      bx(214, 10, 96, 112, 'be used to\n＋ 原形\n〜するために\n使われる', C.red, FILL.red, 12),
      lb(160, 142, 'be動詞があるか・あとが原形か〜ingか', 12, C.ink, 'middle', true),
    ],
    '3つの意味を、見分ける', MAIN),
  S('確かめの3ステップです。①今とはちがう話か。②used の前に be動詞があるか。③to のあとは原形か〜ing か。疑問文・否定文では did を使って use to になっているかも見ます。',
    row(['① 今とは\nちがう話？', '② be動詞は\nあるか', '③ to のあとは\n原形か〜ing'], 30, MAIN, 12, 90, 16),
    '今 → be動詞 → to のあと', MAIN),
], 'used to：以前は〜、今は〜ない');

export const XF_GCE_FIGURES: Record<string, DiagramFigure> = {
  'xf_gap_gce_01': f_gce_01,
  'xf_gap_gce_02': f_gce_02,
  'xf_gap_gce_03': f_gce_03,
  'xf_gap_gce_05': f_gce_05,
  'xf_gap_gce_06': f_gce_06,
  'xf_gap_gce_07': f_gce_07,
};

export const XF_GCE_SECTIONS: Record<string, string> = {
  'gap_gce_01#0': 'xf_gap_gce_01',
  'gap_gce_02#0': 'xf_gap_gce_02',
  'gap_gce_03#0': 'xf_gap_gce_03',
  'gap_gce_05#0': 'xf_gap_gce_05',
  'gap_gce_06#0': 'xf_gap_gce_06',
  'gap_gce_07#0': 'xf_gap_gce_07',
};
