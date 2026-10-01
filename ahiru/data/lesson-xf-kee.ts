// 高校受験 英語（教科書単元 32 件）の「動く図解スライド」。
// 「なぜ？」の連鎖で7枚以上。単元の節（section）ごとに 1 枚の図解をひもづける。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, show, fresh, flow } from './diagram-kit';

type Col = [string, string];
const BLUE: Col = [C.blue, FILL.blue];
const GREEN: Col = [C.green, FILL.green];
const RED: Col = [C.red, FILL.red];
const MAIN: Col = [C.main, FILL.warm];
const PURPLE: Col = [C.purple, FILL.purple];
const GRAY: Col = [C.gray, FILL.gray];
const YELLOW: Col = [C.main, FILL.yellow];

// 下の帯（y=168 から）に、そのスライドのひとことを出す。\n で改行できる。
const cap = (t: string, c: Col = BLUE, size = 12): DiagramElement => {
  const n = t.split('\n').length;
  return bx(14, 168, 292, 14 + 15 * n, t, c[0], c[1], size);
};

// 1枚のスライド＝まっさらな図＋下の帯
const S = (note: string, top: DiagramElement[], capText: string, c: Col = BLUE, size = 12) => ({
  note,
  add: fresh(...top, cap(capText, c, size)),
});

// 色つきの箱
const w = (x: number, y: number, ww: number, h: number, t: string, c: Col = MAIN, size = 12): DiagramElement =>
  bx(x, y, ww, h, t, c[0], c[1], size);

// 「なぜ？」の問い → 答え、の1組
const qa = (q: string, a: string, c: Col = BLUE, aSize = 13): DiagramElement[] => [
  bx(12, 6, 296, 38, 'なぜ？ ' + q, PURPLE[0], PURPLE[1], 12),
  ar(160, 46, 160, 60, PURPLE[0]),
  bx(12, 62, 296, 94, a, c[0], c[1], aSize),
];

// 左の箱 → 右の箱（1行ぶん）
const pair = (a: string, b: string, y: number, ca: Col = BLUE, cb: Col = GREEN, h = 26, size = 12): DiagramElement[] => [
  w(10, y, 134, h, a, ca, size),
  ar(146, y + h / 2, 172, y + h / 2, C.main),
  w(174, y, 136, h, b, cb, size),
];

// 横一列に並べた箱
const row = (labels: string[], y: number, c: Col = MAIN, size = 12, h = 40, gap = 14): DiagramElement[] =>
  flow(labels, y, { h, color: c[0], fill: c[1], size, gap }).flat();

// 表（見出し行＋本文行）。cols は各列の幅。
const table = (head: string[], rows: string[][], x: number, y: number, cols: number[], rh = 24, size = 11, c: Col = BLUE): DiagramElement[] => {
  const out: DiagramElement[] = [];
  let cx = x;
  head.forEach((h, i) => { out.push(bx(cx, y, cols[i], rh, h, c[0], c[0] === C.blue ? '#BAE6FD' : FILL.yellow, size)); cx += cols[i]; });
  rows.forEach((r, j) => {
    let xx = x;
    r.forEach((t, i) => { out.push(bx(xx, y + rh * (j + 1), cols[i], rh, t, C.gray, '#FFFFFF', size)); xx += cols[i]; });
  });
  return out;
};

const xfFigures: Record<string, DiagramFigure> = {};
const xfSections: Record<string, string> = {};
const reg = (id: string, sec: number, fig: DiagramFigure) => { xfFigures['xf_' + id] = fig; xfSections[id + '#' + sec] = 'xf_' + id; };

// ── 感嘆文②：How の形と、What との使い分け（節1: What ⇄ How の書きかえ） ──
reg('koko_eigo_s178', 1, show([
  S('「なんて速いランナーなんだ」も「なんて速く走るんだ」も、驚いている内容は同じです。What a fast runner he is! と How fast he runs! は書きかえられます。名詞に目を向ければ What、形容詞や副詞に目を向ければ How です。',
    [w(10, 14, 300, 34, 'What a fast runner he is!', BLUE, 15), lb(160, 66, '＝（同じ意味）', 13, C.main, 'middle', true), w(10, 82, 300, 34, 'How fast he runs!', GREEN, 15),
     lb(160, 138, '名詞 runner に驚く　／　速さ fast に驚く', 12, C.ink, 'middle')],
    'What は名詞に、How は形容詞・副詞に驚く', MAIN),
  S('なぜ How のあとに a や名詞を置けないの？ → How は「どれほど〜か」と程度を取り出す語だからです。程度を表せるのは形容詞と副詞だけです。a flower のように名詞とセットの a は What の仲間です。',
    qa('How のあとに a や名詞を置けない？', '× How a beautiful flower this is!\n○ How beautiful this flower is!\n\nHow のうしろ ＝ 形容詞か副詞だけ\n名詞は主語の位置へ動かす', RED, 13),
    'How のうしろに a があったら、その時点で誤り', RED),
  S('では型①（be動詞の文）を見ましょう。What a beautiful flower this is! を How にすると、名詞 flower は主語の位置に移って this flower is となり、beautiful だけが How のうしろに残ります。',
    [w(8, 10, 56, 30, 'What a', BLUE, 12), w(68, 10, 84, 30, 'beautiful', BLUE, 12), w(156, 10, 60, 30, 'flower', RED, 12), w(220, 10, 90, 30, 'this is!', BLUE, 12),
     ar(110, 42, 96, 82, C.main), ar(186, 42, 196, 82, C.red), ar(265, 42, 276, 82, C.main),
     w(8, 84, 40, 30, 'How', GREEN, 12), w(52, 84, 84, 30, 'beautiful', GREEN, 12), w(140, 84, 112, 30, 'this flower', RED, 12), w(256, 84, 54, 30, 'is!', GREEN, 12),
     lb(160, 140, '名詞 flower は主語の位置へ', 12, C.red, 'middle', true)],
    'What a beautiful flower this is!\n＝ How beautiful this flower is!', GREEN),
  S('次は型②（一般動詞の文）です。What a fast runner he is! を How にするとき、名詞 runner は動詞 runs に変わります。「速いランナー」が「速く走る」になるわけです。',
    [...pair('What a fast runner\nhe is!', 'How fast\nhe runs!', 12, BLUE, GREEN, 44, 12),
     w(10, 66, 134, 28, '名詞 runner', RED, 12), ar(146, 80, 172, 80, C.red), w(174, 66, 136, 28, '動詞 runs', RED, 12),
     lb(160, 122, '名詞を動詞に直す（runner → runs）', 12, C.red, 'middle', true)],
    '名詞を動詞に直す　runner → runs', RED),
  S('なぜ fast は形容詞から副詞に変わるの？ → runs は動詞で、動詞を説明できるのは副詞だけだからです。形は同じ fast でも、働きが形容詞から副詞に変わっています。good → well のように形が変わる語もあります。',
    [bx(12, 6, 296, 30, 'なぜ？ 形容詞が副詞に変わる？', PURPLE[0], PURPLE[1], 12), ...table(['形容詞', '副詞'], [['good', 'well'], ['beautiful', 'beautifully'], ['careful', 'carefully'], ['fast', 'fast'], ['hard', 'hard']], 40, 42, [120, 120], 20, 11)],
    '動詞を修飾する語は副詞', GREEN),
  S('ここまでをまとめると、What の文を How の文に直す手順は三つです。①名詞を動詞に直す ②形容詞を副詞に直す ③主語＋動詞の語順はそのまま、です。',
    [w(20, 12, 280, 32, '① 名詞 → 動詞（runner → runs）', BLUE, 13), ar(160, 46, 160, 58, C.main), w(20, 60, 280, 32, '② 形容詞 → 副詞（good → well）', GREEN, 13), ar(160, 94, 160, 106, C.main), w(20, 108, 280, 32, '③ 主語＋動詞の順はそのまま', MAIN, 13)],
    'What a good tennis player she is!\n＝ How well she plays tennis!', YELLOW),
  S('では、主語が変わると動詞はどうなるの？ → 動詞に直すので、三単現の s を忘れずに合わせます。He is a fast runner. なら How fast he runs!、They are fast runners. なら How fast they run! です。',
    [w(10, 14, 300, 28, 'He is a fast runner.　→　How fast he runs!', BLUE, 13), w(10, 56, 300, 28, 'They are fast runners.　→　How fast they run!', GREEN, 13), lb(160, 112, '主語が3人称単数 → runs（s がつく）', 12, C.red, 'middle', true), lb(160, 134, '主語が複数 → run（s なし）', 12, C.ink, 'middle')],
    '動詞に直したら、主語との一致を確かめる', BLUE),
  S('最後に誤りの典型です。How good she plays tennis! は誤りです。plays は動詞なので、修飾する語は副詞 well でなければなりません。形容詞と副詞の区別が、この書きかえで必ず問われます。',
    [w(10, 14, 300, 32, '× How good she plays tennis!', RED, 14), ar(160, 48, 160, 66, C.main), w(10, 68, 300, 32, '○ How well she plays tennis!', GREEN, 14), lb(160, 126, 'plays（動詞）を飾る語 ＝ 副詞 well', 12, C.ink, 'middle', true)],
    '動詞を飾るのは副詞。good ではなく well', GREEN),
], 'What の文 ⇄ How の文：名詞を動詞に、形容詞を副詞に'));

// ── 可算名詞と不可算名詞②（節1: 不可算名詞を使うときの三つの手順） ──
reg('koko_eigo_s182', 1, show([
  S('日本語では「家具を3つ」と言えますが、英語で three furnitures と書くと誤りです。furniture は不可算名詞で、a も -s も付けられません。この単元は、不可算名詞を使う三つの手順を身につけます。',
    [w(10, 20, 134, 36, '家具を3つ', BLUE, 14), ar(146, 38, 172, 38, C.main), w(174, 20, 136, 36, '× three furnitures', RED, 13),
     w(40, 70, 240, 36, '○ three pieces of furniture', GREEN, 14), lb(160, 130, '数え方の感覚が日本語と英語でちがう', 12, C.ink, 'middle')],
    '日本語で数えたくなる語が、入試で狙われる', MAIN),
  S('なぜ furniture は数えられないの？ → desk や chair は輪郭があって1個2個と数えられますが、furniture はそれらをまとめた「ジャンル名」で、切って数える形がないからです。',
    [bx(12, 6, 296, 30, 'なぜ？ furniture は数えられない？', PURPLE[0], PURPLE[1], 12), w(30, 44, 260, 84, '', GRAY), lb(160, 56, 'furniture（ジャンル全体）', 12, C.gray, 'middle', true),
     w(44, 74, 68, 40, 'desk', BLUE, 13), w(126, 74, 68, 40, 'chair', BLUE, 13), w(208, 74, 68, 40, 'table', BLUE, 13), lb(160, 144, '中身は数えられるが、ジャンル全体は数えられない', 11, C.ink, 'middle')],
    'ジャンル全体の名前 ＝ 数えられない', GRAY),
  S('手順①は、a/an と -s を消すことです。I need an advice. は I need advice.、many homeworks は a lot of homework にします。',
    [w(10, 10, 134, 28, '× an advice', RED, 12), ar(146, 24, 172, 24, C.main), w(174, 10, 136, 28, '○ advice', GREEN, 12),
     w(10, 48, 134, 28, '× many homeworks', RED, 12), ar(146, 62, 172, 62, C.main), w(174, 48, 136, 28, '○ a lot of homework', GREEN, 11),
     w(10, 86, 134, 28, '× two furnitures', RED, 12), ar(146, 100, 172, 100, C.main), w(174, 86, 136, 28, '○ some furniture', GREEN, 12),
     lb(160, 138, 'a / an も -s も付けない', 12, C.ink, 'middle', true)],
    '手順①　a/an と -s を消す', BLUE),
  S('なぜ many ではなく much を使うの？ → many は「数えられるもの」用、much は「量」用だからです。不可算名詞は量でとらえるので、数量語を取りかえます。',
    [bx(12, 4, 296, 24, 'なぜ？ many ではなく much？', PURPLE[0], PURPLE[1], 12), ...table(['可算用', '不可算用'], [['many', 'much / a lot of'], ['a few', 'a little'], ['few', 'little'], ['How many', 'How much']], 40, 34, [120, 120], 24, 12)],
    '手順②　数量語を不可算用に取りかえる', GREEN),
  S('数を言いたいときはどうするの？ → 不可算名詞には区切りがないので、区切りを表す単位語を借ります。a piece of advice（助言1つ）、two pieces of information（情報2つ）、a glass of water（水1杯）です。',
    [bx(12, 6, 296, 30, 'なぜ？ 単位語を借りる？ → 区切りがないから', PURPLE[0], PURPLE[1], 12), w(10, 48, 96, 36, 'a piece of\nadvice', BLUE, 12), w(112, 48, 96, 36, 'two pieces of\ninformation', BLUE, 11), w(214, 48, 96, 36, 'a glass of\nwater', GREEN, 12), lb(160, 112, '切り分ける道具をつけて数える', 12, C.ink, 'middle')],
    '手順③　単位語を借りて数える', YELLOW),
  S('なぜ複数形になるのは piece のほうなの？ → 数えているのは「一片」という単位だからです。two pieces of advice は「助言の一片が2つ」であり、advice が2つあるわけではありません。',
    [w(10, 14, 300, 28, '○ two pieces of advice', GREEN, 14), w(10, 54, 300, 28, '× two pieces of advices', RED, 14), w(10, 94, 300, 28, '× two advices', RED, 14), lb(160, 142, '複数形にするのは数える単位だけ', 12, C.ink, 'middle', true)],
    '複数形になるのは単位語（pieces）だけ', RED),
  S('さらに、水のような液体は容器で数えるのが自然です。a glass of water、a cup of coffee のように、入れ物を単位にします。迷ったら万能の a piece of を思い出しましょう。',
    [w(10, 14, 300, 28, 'a glass of water（水1杯）', BLUE, 13), w(10, 50, 300, 28, 'a cup of coffee（コーヒー1杯）', BLUE, 13), w(10, 86, 300, 28, 'a piece of cake（ケーキ1切れ）', GREEN, 13), lb(160, 138, '液体 → 容器　／　それ以外 → a piece of', 12, C.ink, 'middle')],
    '液体は容器で数える', BLUE),
  S('まとめです。不可算名詞は、①a と -s を消す ②many を much などに取りかえる ③数えたいときだけ単位語を借りる、の三手順で使います。',
    [...row(['① a と -s\nを消す', '② much など\nに取りかえ', '③ 単位語を\n借りて数える'], 30, MAIN, 12, 56), lb(160, 118, 'advice・information・furniture・homework・news', 11, C.ink, 'middle'), lb(160, 138, 'は、どれもこの三手順で使う', 11, C.ink, 'middle')],
    '不可算名詞の三手順', YELLOW),
], '不可算名詞を使う三つの手順'));

// ── 可算名詞と不可算名詞④（節0: 意味で可算・不可算が入れかわる名詞） ──
reg('koko_eigo_s184', 0, show([
  S('There is no room in this box. を「この箱には部屋がない」と訳すと変ですね。この room は「空間・余地」の意味で、a も -s も付かない形です。同じ単語でも意味が変わると、数えられるかどうかまで変わる名詞があります。',
    [w(30, 18, 260, 36, 'There is no room in this box.', MAIN, 14), w(30, 70, 120, 34, '× 部屋がない', RED, 13), w(170, 70, 120, 34, '○ 余地がない', GREEN, 13), lb(160, 130, 'room に a も -s も付いていない → 余地', 12, C.ink, 'middle', true)],
    '同じつづりでも、意味で数え方が変わる', MAIN),
  S('なぜ同じ単語で数えられたり数えられなかったりするの？ → 材質や概念のままとらえれば形がないので不可算、製品・具体物・回数として輪郭を持てば可算になるからです。',
    qa('数えられたり数えられなかったり？', '材質・概念のまま\n　＝ 形がない ＝ 不可算\n\n製品・具体物・回数\n　＝ 輪郭がある ＝ 可算', BLUE, 13),
    '材質・概念 ＝ 不可算　具体物・回数 ＝ 可算', BLUE),
  S('paper の例です。材質の「紙」は不可算で some paper。新聞や論文・答案になると輪郭ができて、a paper、papers と数えられます。',
    [bx(12, 6, 296, 24, 'paper', PURPLE[0], PURPLE[1], 13), w(10, 40, 134, 40, '不可算\nI need some paper.', BLUE, 11), ar(146, 60, 172, 60, C.main), w(174, 40, 136, 40, '紙（材質）', BLUE, 12),
     w(10, 92, 134, 40, '可算\nHe is reading a paper.', GREEN, 11), ar(146, 112, 172, 112, C.main), w(174, 92, 136, 40, '新聞・論文・答案', GREEN, 12)],
    'paper ＝ 紙　a paper ＝ 新聞　papers ＝ 答案', BLUE),
  S('glass は、ガラスという材質なら不可算、コップなら a glass、めがねなら複数形の glasses です。二つで一組のものは複数形で使います。',
    [bx(12, 6, 296, 24, 'glass', PURPLE[0], PURPLE[1], 13), w(10, 40, 96, 54, 'glass\nガラス\n（不可算）', BLUE, 12), w(112, 40, 96, 54, 'a glass\nコップ\n（可算）', GREEN, 12), w(214, 40, 96, 54, 'glasses\nめがね\n（複数形）', RED, 12), lb(160, 118, 'a glass of water ＝ 水1杯', 12, C.ink, 'middle'), lb(160, 138, 'He wears glasses. ＝ めがねをかけている', 11, C.ink, 'middle')],
    'glass　ガラス → コップ → めがね', GREEN),
  S('room・work・time も同じ仲間です。room は余地と部屋、work は仕事と作品（works）、time は時間と回数・時代（three times）に分かれます。',
    [...table(['単語', '不可算', '可算'], [['room', '空間・余地', '部屋 (rooms)'], ['work', '仕事', '作品 (works)'], ['time', '時間', '回 (three times)']], 20, 14, [70, 110, 110], 30, 12)],
    '概念のとき不可算、具体になると可算', BLUE),
  S('なぜ a や -s が見分けのヒントになるの？ → a や -s が付くのは、輪郭のあるモノとして数えている印だからです。a fire は火事、fire は火。a chicken はニワトリ、chicken は鶏肉です。',
    [bx(12, 6, 296, 26, 'なぜ？ a や -s が意味のヒント？', PURPLE[0], PURPLE[1], 12), ...table(['a が付く', '付かない'], [['a fire：火事', 'fire：火'], ['a chicken：ニワトリ', 'chicken：鶏肉'], ['an iron：アイロン', 'iron：鉄'], ['a hair：髪1本', 'hair：髪全体']], 24, 40, [136, 136], 24, 11)],
    'a／-s が付く ＝ 数えられる意味', YELLOW),
  S('読み取りのコツです。訳して意味が通らないときは、もう一方の意味を当てはめます。「紙が3枚」は three papers ではなく three sheets of paper です。three papers だと「3つの答案」になってしまいます。',
    [w(10, 14, 300, 30, '紙が3枚', BLUE, 14), w(10, 58, 300, 28, '× three papers（答案が3つ）', RED, 13), w(10, 98, 300, 28, '○ three sheets of paper', GREEN, 13), lb(160, 144, '材質の紙は単位語で数える', 12, C.ink, 'middle')],
    '意味が通らなければ、別の意味を試す', RED),
  S('まとめです。材質・概念のまま ＝ 不可算、製品・具体物・回数 ＝ 可算。冠詞や -s を手がかりに、room・paper・glass などの意味を見分けましょう。',
    [w(14, 14, 130, 60, '材質・概念\n不可算\n（a も -s もなし）', BLUE, 12), w(176, 14, 130, 60, '具体物・回数\n可算\n（a や -s あり）', GREEN, 12), ar(148, 44, 172, 44, C.main), ar(172, 44, 148, 44, C.main), lb(160, 104, 'room / paper / glass / work / time', 12, C.ink, 'middle', true)],
    '意味と数え方はセットで決まる', YELLOW),
], '意味によって可算・不可算が入れかわる名詞'));

// ── 可算名詞と不可算名詞⑤（節0: 複数形を作る規則） ──
reg('koko_eigo_s185', 0, show([
  S('複数形の作り方は、語の終わり方で決まります。原則は -s を付けるだけです。book → books、dog → dogs、car → cars。例外にだけ注意すれば大丈夫です。',
    [...table(['単数', '複数'], [['book', 'books'], ['dog', 'dogs'], ['car', 'cars']], 40, 14, [120, 120], 28, 14, GREEN), lb(160, 144, '原則 ＝ そのまま -s', 13, C.main, 'middle', true)],
    '原則：語の終わりに -s', GREEN),
  S('なぜ bus は buses のように -es になるの？ → s, x, ch, sh で終わる語に s だけ足すと発音しにくいので、es を足して「バスィズ」のように読めるようにするからです。',
    [bx(12, 4, 296, 24, 'なぜ？ bus → buses？', PURPLE[0], PURPLE[1], 12), ...table(['語尾', '単数', '複数'], [['s', 'bus', 'buses'], ['x', 'box', 'boxes'], ['ch', 'watch', 'watches'], ['sh', 'dish', 'dishes']], 30, 34, [60, 100, 100], 24, 12)],
    's, x, ch, sh で終わる → -es', BLUE),
  S('o で終わる語は、potato → potatoes、tomato → tomatoes のように -es が付きます。ただし piano → pianos、photo → photos は -s だけです。食べ物は -es、外来語は -s と覚えると整理しやすくなります。',
    [w(10, 20, 134, 34, 'potato → potatoes', GREEN, 12), w(176, 20, 134, 34, 'tomato → tomatoes', GREEN, 12), w(10, 70, 134, 34, 'piano → pianos', BLUE, 12), w(176, 70, 134, 34, 'photo → photos', BLUE, 12), lb(160, 128, '食べ物は -es　／　外来語は -s', 12, C.ink, 'middle', true)],
    'o で終わる語：食べ物は -es', GREEN),
  S('なぜ city は cities になるの？ → 子音字＋y の語は、y を i に変えて -es を付けます。cities は「シティーズ」と読み、i の音に合わせてつづりが変わります。母音字＋y の boy・day はそのまま -s です。',
    [bx(12, 4, 296, 24, 'なぜ？ city → cities？', PURPLE[0], PURPLE[1], 12), w(10, 36, 148, 60, '子音字＋y\ncity → cities\nstory → stories', RED, 12), w(162, 36, 148, 60, '母音字＋y\nboy → boys\nday → days', BLUE, 12), lb(160, 118, 'y を i に変えるのは、直前が子音字のときだけ', 12, C.ink, 'middle', true)],
    '子音字＋y ＝ y を i に変えて -es', RED),
  S('f や fe で終わる語は、f を v に変えて -es を付けます。leaf → leaves、knife → knives、wife → wives は、声に出すと「リーヴズ」と v の音になるからです。ただし roof → roofs、chief → chiefs、safe → safes は例外です。',
    [w(10, 14, 148, 56, 'f / fe → ves\nleaf → leaves\nknife → knives', GREEN, 12), w(162, 14, 148, 56, '例外：そのまま -s\nroof → roofs\nchief → chiefs', RED, 12), lb(160, 98, 'wife → wives　life → lives', 12, C.ink, 'middle'), lb(160, 120, 'shelf → shelves　thief → thieves', 12, C.ink, 'middle')],
    'f / fe → ves（例外：roofs など）', GREEN),
  S('不規則変化は形ごと覚えます。man → men、woman → women、child → children、foot → feet、tooth → teeth、mouse → mice。women は発音も「ウィミン」と変わります。',
    [...table(['単数', '複数', '単数', '複数'], [['man', 'men', 'foot', 'feet'], ['woman', 'women', 'tooth', 'teeth'], ['child', 'children', 'mouse', 'mice']], 14, 14, [68, 78, 68, 78], 30, 12, MAIN)],
    '不規則変化は、まるごと覚える', MAIN),
  S('見分ける順番をまとめます。まず語尾を見て、s・x・ch・sh・o なら -es。子音字＋y なら ies。f・fe なら ves。それ以外は -s。当てはまらなければ不規則変化です。',
    [...row(['語尾を\n見る', 'es / ies\nves か判定', '例外・不規則\nを確認'], 24, MAIN, 12, 56), lb(160, 110, 'bus → buses　city → cities　leaf → leaves', 12, C.ink, 'middle'), lb(160, 132, 'book → books　man → men', 12, C.ink, 'middle')],
    '語尾 → 規則 → 例外の順にチェック', YELLOW),
  S('まとめです。-s が原則で、s・x・ch・sh・o は -es、子音字＋y は ies、f・fe は ves。例外は roofs などと不規則変化だけです。理由のある規則と、覚える例外を分けましょう。',
    [w(14, 12, 292, 30, '原則　-s', GREEN, 13), w(14, 48, 292, 30, 's x ch sh o　→　-es', BLUE, 13), w(14, 84, 292, 30, '子音字＋y → ies　／　f, fe → ves', RED, 13), w(14, 120, 292, 30, '例外：roofs, chiefs, safes と不規則変化', MAIN, 12)],
    '規則と例外を分けて覚える', YELLOW),
], '複数形を作る規則'));

// ── 不可算名詞の数え方②（節2: なぜ形で単位語が決まり、なぜ複数形にするのは単位語だけなのか） ──
reg('koko_eigo_s187', 2, show([
  S('紙・パン・助言のような不可算名詞は、そのままでは「1つ、2つ」と区切れません。そこで区切りの役をする単位語を借りて数えます。a sheet of paper、a slice of bread、a piece of advice がその例です。',
    [w(20, 16, 120, 44, 'paper', GRAY, 15), lb(160, 38, '＋', 18, C.main, 'middle', true), w(180, 16, 120, 44, 'a sheet of', BLUE, 14), ar(160, 66, 160, 90, C.main), w(40, 92, 240, 40, 'a sheet of paper（紙1枚）', GREEN, 14)],
    '区切りがない名詞は、単位語で区切る', MAIN),
  S('では、どの単位語を選ぶの？ → 名詞の形と切り方で決まります。薄く平らなら sheet、薄く切ったら slice、焼いたかたまりなら loaf、棒状なら bar、二つで一組なら pair、それ以外は piece です。',
    [...table(['形・切り方', '単位語'], [['薄く平ら', 'sheet'], ['薄く切った', 'slice'], ['パンのかたまり', 'loaf'], ['棒状', 'bar'], ['二つで一組', 'pair'], ['それ以外', 'piece']], 40, 4, [120, 120], 21, 11)],
    '形から単位語が決まる', BLUE),
  S('なぜ sheet と slice を分けるの？ → sheet は平らな「1枚」、slice は包丁で「切り取ったひと切れ」だからです。紙やガラスは sheet、パン・チーズ・ハムは slice を使います。',
    [bx(12, 6, 296, 26, 'なぜ？ sheet と slice は別の語？', PURPLE[0], PURPLE[1], 12), w(10, 42, 148, 50, 'a sheet of paper\ntwo sheets of glass', BLUE, 12), w(162, 42, 148, 50, 'a slice of bread\nthree slices of cheese', GREEN, 12), lb(84, 112, '平らな1枚', 12, C.blue, 'middle', true), lb(236, 112, '切り取ったひと切れ', 12, C.green, 'middle', true)],
    '平ら ＝ sheet　切り取り ＝ slice', GREEN),
  S('loaf は焼いたパンのかたまり、bar は棒状のかたまりです。a loaf of bread（食パン1斤）、a bar of chocolate（板チョコ1枚）。loaf の複数形は loaves で、f → v の規則変化です。',
    [w(10, 20, 148, 44, 'a loaf of bread\ntwo loaves of bread', MAIN, 12), w(162, 20, 148, 44, 'a bar of chocolate\na bar of soap', MAIN, 12), lb(160, 98, 'loaf の複数形は loaves（f → v）', 12, C.red, 'middle', true), lb(160, 124, '切っていない、丸ごとのかたまり', 12, C.ink, 'middle')],
    'かたまりは loaf と bar', YELLOW),
  S('pair は二つで一組のものに使います。a pair of shoes（靴1足）、two pairs of glasses（めがね2つ）、a pair of scissors（はさみ1丁）。shoes や glasses は、もともと複数形で使う名詞です。',
    [w(10, 20, 96, 44, 'a pair of\nshoes', BLUE, 12), w(112, 20, 96, 44, 'two pairs of\nglasses', BLUE, 12), w(214, 20, 96, 44, 'a pair of\nscissors', BLUE, 12), lb(160, 98, '二つで一組 → pair', 13, C.ink, 'middle', true), lb(160, 122, '複数にするのは pair（pairs）', 12, C.red, 'middle')],
    '二つで一組 ＝ pair', BLUE),
  S('なぜ複数形になるのは単位語だけなの？ → 数えているのは「一片」という単位だからです。two pieces of advice は「助言の一片が2つ」で、advice そのものを数えてはいません。',
    qa('複数形は単位語だけ？', '○ two pieces of advice\n× two pieces of advices\n× two piece of advice\n数えているのは「piece（一片）」\nだから pieces だけに -s', RED, 12),
    '数えるのは単位 → 単位語だけ複数形', RED),
  S('抽象名詞は piece と組みます。advice・information・news・work、そして furniture・baggage もそうです。a news や an information とは言えず、「ニュース1本」は a piece of news です。',
    [...table(['不可算', '1つ分'], [['advice', 'a piece of advice'], ['information', 'a piece of information'], ['news', 'a piece of news'], ['furniture', 'a piece of furniture']], 20, 10, [100, 180], 24, 12, GREEN), lb(160, 148, '× a news　× an information', 12, C.red, 'middle', true)],
    '抽象名詞・家具は piece で数える', GREEN),
  S('単位語が思い出せないときの逃げ道です。可算名詞に言いかえます。advice → suggestion、work → job、furniture → desk や chair など具体的な名前にすれば、そのまま数えられます。',
    [...pair('a piece of advice', 'a suggestion', 10, BLUE, GREEN, 28, 12), ...pair('a piece of work', 'a job', 48, BLUE, GREEN, 28, 12), ...pair('a piece of furniture', 'a desk / a chair', 86, BLUE, GREEN, 28, 12), lb(160, 138, '減点を防ぐ逃げ道を持っておく', 12, C.ink, 'middle', true)],
    '思い出せないときは、可算名詞に言いかえる', YELLOW),
], '形と切り方で単位語を選び、複数形にするのは単位語だけ'));

// ── 不可算名詞の数え方④（節1: 数量表現が主語のときの動詞） ──
reg('koko_eigo_s189', 1, show([
  S('A lot of students ___ waiting. の空所に is と are のどちらを入れますか。a lot of は「かたまり」に見えて単数だと感じやすいのですが、動詞を決めるのは別の場所です。',
    [w(14, 24, 292, 40, 'A lot of students ( is / are ) waiting.', MAIN, 14), lb(160, 96, 'どちらを入れる？', 14, C.red, 'middle', true), lb(160, 126, '動詞はどこを見て決めるのか', 12, C.ink, 'middle')],
    '数量表現が主語のとき、どこを見る？', MAIN),
  S('なぜ a lot of の部分では決まらないの？ → a lot of は「たくさんの」という量の飾りで、主役は of の後ろの名詞だからです。だから動詞は of の後ろの名詞に合わせます。',
    [bx(12, 6, 296, 26, 'なぜ？ 動詞は of のうしろを見る', PURPLE[0], PURPLE[1], 12), w(10, 42, 80, 36, 'A lot of', GRAY, 12), w(94, 42, 90, 36, 'students', RED, 12), w(188, 42, 60, 36, 'are', GREEN, 13), w(10, 92, 80, 36, 'A lot of', GRAY, 12), w(94, 92, 90, 36, 'water', RED, 12), w(188, 92, 60, 36, 'is', GREEN, 13), lb(280, 60, '複数', 12, C.ink, 'middle'), lb(280, 110, '不可算', 12, C.ink, 'middle')],
    '主役 ＝ of のうしろの名詞', GREEN),
  S('some・any・all・most も同じです。Most of the class was absent. は class が単数なので was。Most of the students were absent. なら students が複数なので were になります。',
    [w(10, 14, 300, 30, 'Most of the class was absent.', BLUE, 13), lb(160, 56, 'class は単数 → was', 12, C.ink, 'middle'), w(10, 74, 300, 30, 'Most of the students were absent.', GREEN, 13), lb(160, 116, 'students は複数 → were', 12, C.ink, 'middle')],
    'some / all / most も、of のうしろで決まる', BLUE),
  S('a number of と the number of は対比で出ます。A number of students were absent.（多くの生徒が欠席）は複数扱い、The number of students is increasing.（生徒の数が増えている）は単数扱いです。',
    [w(10, 14, 300, 32, 'A number of students were absent.', GREEN, 13), lb(160, 58, 'a number of ＝ 多くの → 複数扱い', 12, C.ink, 'middle'), w(10, 78, 300, 32, 'The number of students is increasing.', RED, 13), lb(160, 122, 'the number of ＝ 数そのもの → 単数扱い', 12, C.ink, 'middle')],
    'a なら多く（複数）、the なら数そのもの（単数）', YELLOW),
  S('なぜ the number of だけ単数なの？ → the number が「数」という一つのものを指し、主役が students ではなく number だからです。a number of は「多くの」という飾りなので、主役は students に戻ります。',
    qa('the number of は単数扱い？', 'The number of students is 40.\n　　↑ 主役は「数」＝ 1つ → is\n\nA number of students are late.\n　　↑ 「多くの」は飾り、主役は students → are', RED, 12),
    '主役がどれかを見る', RED),
  S('each と every は必ず単数名詞とセットで、動詞も単数です。Each student has a tablet. Every room was clean. 一つずつ見ていく語なので、単数で受けます。',
    [w(10, 20, 300, 32, 'Each student has a tablet.', BLUE, 14), w(10, 66, 300, 32, 'Every room was clean.', BLUE, 14), lb(160, 122, '一つずつ → 単数名詞＋単数の動詞', 12, C.ink, 'middle', true)],
    'each / every ＋ 単数名詞 ＋ 単数の動詞', BLUE),
  S('数をたずねる文も同じ考え方です。How many のあとは可算名詞の複数形、How much のあとは不可算名詞です。How many books do you have? / How much money do you need?',
    [w(10, 16, 300, 32, 'How many books do you have?', GREEN, 14), lb(160, 62, '数えられる名詞の複数形', 12, C.ink, 'middle'), w(10, 82, 300, 32, 'How much money do you need?', BLUE, 14), lb(160, 128, '数えられない名詞（量）', 12, C.ink, 'middle')],
    'many ＋ 複数形　／　much ＋ 不可算', GREEN),
  S('まとめです。主語が長いときは of の直前で切り、of のうしろの名詞を見ます。ただし a number of は複数、the number of は単数、each と every は単数です。',
    [...table(['主語', '動詞'], [['a lot of / most of ＋ 名詞', '名詞に合わせる'], ['a number of ＋ 複数名詞', '複数'], ['the number of ＋ 複数名詞', '単数'], ['each / every ＋ 単数名詞', '単数']], 8, 14, [168, 128], 28, 11, MAIN)],
    'of の前で切って、うしろの名詞を見る', YELLOW),
], '数量表現が主語のとき、動詞は何に合わせるか'));

// ── the の基本（節0: the が付く三つの場面） ──
reg('koko_eigo_s191', 0, show([
  S('「昨日、犬を見た。その犬は白かった。」日本語の「その」にあたるのが the です。the は「あなたもどれのことかわかりますよね」という合図です。付けるかどうかは、相手の頭に同じものが浮かぶかで決まります。',
    [w(10, 20, 300, 32, 'I saw a dog.', BLUE, 14), ar(160, 54, 160, 68, C.main), w(10, 70, 300, 32, 'The dog was white.', GREEN, 14), lb(160, 128, 'a dog → the dog（その犬）', 13, C.main, 'middle', true)],
    'the ＝ どれのことか、聞き手にもわかる', MAIN),
  S('なぜ二度目は the になるの？ → 一度目の a dog で、その犬が相手の頭に入ったからです。初めてなら「どれか」は相手にわからないので a、二度目は「あの犬」とわかるので the です。',
    qa('二度目は the になる？', '1回目：相手は知らない → a dog\n　　　　↓ 話に出た\n2回目：相手も知っている → the dog', BLUE, 13),
    '場面①　二度目に指すとき', BLUE),
  S('場面②は、その場の状況で一つに決まるときです。教室で Please close the door. と言えば、どのドアかは言わなくてもわかります。the sun や the moon も、世界に一つなので the です。',
    [w(10, 16, 300, 30, 'Please close the door.', GREEN, 14), lb(160, 62, '教室なら「あのドア」と決まる', 12, C.ink, 'middle'), ...[['the sun', 14], ['the moon', 114], ['the earth', 214]].map(([t, x]) => w(x as number, 86, 92, 30, t as string, BLUE, 13)), lb(160, 138, '世界に一つしかない', 12, C.ink, 'middle')],
    '場面②　状況で一つに決まるとき', GREEN),
  S('なぜ the sun に a は付かないの？ → 太陽は一つしかなく、「どの太陽か」と迷う余地がないからです。どれかを選ぶ必要がないものには、a ではなく the を付けます。',
    qa('the sun に a は付けない？', 'a sun だと「いくつかある太陽のうちの1つ」\nthe sun は「みんなが知っている、あの1つ」\n\n迷う余地がない → the', RED, 13),
    '唯一のもの ＝ the', RED),
  S('場面③は、うしろから限定されるときです。the book on the desk（机の上の本）、the girl who is playing the piano、the capital of Japan のように、うしろの語句で「どれか」がはっきりします。',
    [w(10, 14, 300, 28, 'the book on the desk', BLUE, 13), w(10, 50, 300, 28, 'the girl who is playing the piano', BLUE, 12), w(10, 86, 300, 28, 'the capital of Japan', BLUE, 13), lb(160, 136, '「どの〜？」→「机の上の」で決まる', 12, C.ink, 'middle', true)],
    '場面③　うしろから限定されるとき', BLUE),
  S('ただし of 句があれば必ず the とは限りません。a friend of mine（私の友人の一人）、a member of the team（チームの一員）は「そのうちの一人」なので a を使います。of 句で一つに決まるかを確かめます。',
    [w(10, 16, 300, 30, '○ a friend of mine', GREEN, 14), w(10, 56, 300, 30, '○ a member of the team', GREEN, 14), lb(160, 110, '「そのうちの一人」＝ 1つに決まらない → a', 12, C.red, 'middle', true), lb(160, 132, '× the friend of mine（意味が変わる）', 11, C.ink, 'middle')],
    'of 句があっても、1つに決まらなければ a', YELLOW),
  S('the は可算・不可算、単数・複数のどれにも付けられます。the students（その生徒たち）、the water（その水）。冠詞なしの Students や Water は「一般」を表します。',
    [w(10, 18, 148, 30, 'Students are kind.', GRAY, 12), w(162, 18, 148, 30, 'The students are kind.', BLUE, 12), lb(84, 62, '生徒というもの一般', 12, C.ink, 'middle'), lb(236, 62, '特定のあの生徒たち', 12, C.blue, 'middle', true), w(10, 84, 148, 30, 'Water is important.', GRAY, 12), w(162, 84, 148, 30, 'The water is cold.', BLUE, 12), lb(84, 128, '水一般', 12, C.ink, 'middle'), lb(236, 128, '目の前の水', 12, C.blue, 'middle', true)],
    'the は、特定のものなら何にでも付く', BLUE),
  S('発音も確認します。the は子音の前では「ザ」、母音の前では「ジ」です。the book（ザ）、the apple（ジ）、the hour（ジ）。つづりではなく音で決まります。',
    [w(10, 20, 148, 40, 'the book\nザ', BLUE, 13), w(162, 20, 148, 40, 'the apple\nジ', GREEN, 13), w(10, 74, 148, 40, 'the university\nザ', BLUE, 13), w(162, 74, 148, 40, 'the hour\nジ', GREEN, 13), lb(160, 138, 'a / an と同じで、つづりではなく音', 12, C.ink, 'middle')],
    '子音の前はザ、母音の前はジ', BLUE),
], 'the が付く三つの場面：二度目・状況で決まる・うしろから限定'));

// ── the が付く決まった表現（節2: なぜ最上級や序数に the が付き、なぜ the young は複数なのか） ──
reg('koko_eigo_s193', 2, show([
  S('the は「どれか一つに決まる」ことを示す語です。唯一のもの（the sun）、いちばん〜（the highest）、〇番目（the first）、方角（the north）は、言った瞬間に一つに決まるので、文脈を考えなくても the が付きます。',
    [...[['the sun', 'the highest', 'the first', 'the north']].flatMap(([a, b, c, d]) => [w(10, 20, 72, 36, a, BLUE, 12), w(86, 20, 72, 36, b, BLUE, 12), w(162, 20, 72, 36, c, BLUE, 12), w(238, 20, 72, 36, d, BLUE, 12)]),
     lb(46, 72, '唯一', 11, C.ink, 'middle'), lb(122, 72, '最上級', 11, C.ink, 'middle'), lb(198, 72, '序数', 11, C.ink, 'middle'), lb(274, 72, '方角', 11, C.ink, 'middle'), lb(160, 116, 'どれも「言った瞬間に一つに決まる」', 13, C.red, 'middle', true)],
    '一つに決まる ＝ the', MAIN),
  S('なぜ最上級に the が付くの？ → 「いちばん高い山」は日本に一つしかなく、聞き手も迷わないからです。Mt. Fuji is the highest mountain in Japan.',
    qa('最上級に the？', 'the highest mountain in Japan\n\n「いちばん」は 1つだけ\n→ どれか迷わない → the', BLUE, 13),
    '最上級 ＝ 1つに決まる ＝ the', BLUE),
  S('序数も同じです。the first train（始発電車）、the second question、the last bus。「2番目」は一つに決まります。方角も同じで、in the north of the city のように the を付けます。',
    [w(10, 16, 300, 26, 'Take the first train.', GREEN, 13), w(10, 50, 300, 26, 'Please answer the second question.', GREEN, 12), w(10, 84, 300, 26, 'The station is in the north of the city.', GREEN, 12), lb(160, 132, '何番目か ／ どの方角か → 一つに決まる', 12, C.ink, 'middle')],
    '序数・方角も、一つに決まる', GREEN),
  S('ただし副詞の最上級では the を省くこともあります。He runs (the) fastest in his class. 副詞の最上級は「何と比べているか」が前面に出て、the が必須とは限りません。',
    [w(10, 20, 300, 32, 'He runs (the) fastest in his class.', BLUE, 14), lb(160, 76, '副詞の最上級 ＝ the を省いてもよい', 13, C.red, 'middle', true), lb(160, 102, '形容詞の最上級は the が付く', 12, C.ink, 'middle')],
    '副詞の最上級は the を省ける', YELLOW),
  S('なぜ the young は複数扱いなの？ → the young は「若い人たち全体」というまとまりを指すからです。形は単数に見えても意味は複数なので、The young are 〜 となります。一人なら a young person です。',
    qa('the young は複数扱い？', 'the ＋ 形容詞 ＝ 「〜な人々」\n\nThe young are strong.（○）\nThe young is strong.（×）\n\nthe rich / the poor / the old も同じ', RED, 12),
    'the ＋ 形容詞 ＝ 人々（複数扱い）', RED),
  S('なぜ体の部位に所有格ではなく the を使うの？ → He caught me by the arm. は、誰の腕かが me で決まっているからです。部位は「どこをつかんだか」を示すだけなので、人＋前置詞＋the＋部位の形にします。',
    [w(10, 20, 300, 32, 'He caught me by the arm.', GREEN, 14), lb(160, 72, '誰の腕？ → me（私）の腕とわかる', 12, C.ink, 'middle'), w(10, 90, 300, 32, '× He caught me by my arm.', RED, 13), lb(160, 138, '人＋前置詞＋the＋部位', 12, C.red, 'middle', true)],
    '体の部位 ＝ 人＋前置詞＋the＋部位', GREEN),
  S('決まった形はほかにもあります。the same class、the only student、the very book。そして The more you practice, the better you will become.（練習すればするほど上達する）も the が決まった形です。',
    [w(10, 14, 300, 26, 'We are in the same class.', BLUE, 13), w(10, 46, 300, 26, 'He is the only student who can answer it.', BLUE, 11), w(10, 78, 300, 26, 'The more you practice, the better you will become.', GREEN, 11), lb(160, 126, 'the 比較級, the 比較級 ＝ 〜すればするほど…', 12, C.ink, 'middle', true)],
    'same / only / very、the 比較級 は決まった形', BLUE),
  S('まとめです。the は「どれか一つに決まる」印。唯一・最上級・序数・方角は自動的に the。the＋形容詞は人々で複数扱い。体の部位は人＋前置詞＋the＋部位です。',
    [w(14, 12, 292, 30, 'どれか一つに決まる → the', BLUE, 13), w(14, 48, 292, 30, 'the young ＝ 若い人々（複数扱い）', RED, 13), w(14, 84, 292, 30, 'caught me by the arm（人＋前置詞＋the＋部位）', GREEN, 12), w(14, 120, 292, 30, 'The more 〜, the better 〜（決まった形）', MAIN, 12)],
    'the の決まりは、理由とセットで覚える', YELLOW),
], 'なぜ最上級や序数に the が付き、なぜ the young は複数扱いなのか'));

// ── 冠詞と語順（節0: 冠詞の位置が動く形） ──
reg('koko_eigo_s194', 0, show([
  S('冠詞の基本の位置は、限定語（a・the・my）→ 形容詞 → 名詞です。a kind person、the tall boy、my new bike。ところが、冠詞の位置が動く形があります。',
    [w(10, 20, 300, 30, 'a　kind　person', BLUE, 15), lb(160, 72, '限定語 → 形容詞 → 名詞', 13, C.main, 'middle', true), w(10, 92, 300, 30, 'the　tall　boy', BLUE, 15), lb(160, 144, '基本の語順', 12, C.ink, 'middle')],
    '基本：限定語 → 形容詞 → 名詞', MAIN),
  S('such と what のあとは、a が形容詞より前に来ます。He is such a kind person. / What a beautiful flower this is! a は名詞のかたまりの先頭に付いたままです。',
    [w(10, 14, 300, 30, 'such　a　kind　person', GREEN, 14), w(10, 56, 300, 30, 'What　a　beautiful　flower　this is!', GREEN, 13), lb(160, 110, 'such / what ＋ a ＋ 形容詞 ＋ 名詞', 13, C.red, 'middle', true)],
    'such・what は a が先', GREEN),
  S('so・too・how・as のあとは、a が形容詞のうしろに回ります。He is so kind a person. / This is too big a hat for me. / How tall a boy he is!',
    [w(10, 14, 300, 28, 'so　kind　a　person', BLUE, 14), w(10, 50, 300, 28, 'too　big　a　hat', BLUE, 14), w(10, 86, 300, 28, 'How　tall　a　boy　he is!', BLUE, 14), lb(160, 134, 'so / too / how / as ＋ 形容詞 ＋ a ＋ 名詞', 13, C.red, 'middle', true)],
    'so・too・how・as は a が後', BLUE),
  S('なぜ語順が変わるの？ → so・too・how・as は直後の形容詞にかかって「どれくらい」を表すので、形容詞のすぐ前に置かれます。その結果 a は形容詞のうしろに回ります。such・what は a kind person というかたまり全体にかかるので、a が先に来ます。',
    [bx(12, 6, 296, 26, 'なぜ？ 語順が変わる？', PURPLE[0], PURPLE[1], 12), w(10, 42, 300, 36, 'so ＋ [ kind ] ＋ a person\n（so は kind にかかる）', BLUE, 12), w(10, 88, 300, 36, 'such ＋ [ a kind person ]\n（such は全体にかかる）', GREEN, 12)],
    'so は形容詞に、such は名詞のかたまりにかかる', PURPLE),
  S('複数形や不可算名詞には a が付きません。They are such kind people. What beautiful flowers! のように、a がないぶん語順の問題も起きません。',
    [w(10, 20, 300, 30, 'They are such kind people.', GREEN, 14), w(10, 62, 300, 30, 'What beautiful flowers!', GREEN, 14), lb(160, 116, '複数形・不可算名詞には a が付かない', 12, C.red, 'middle', true)],
    '複数形・不可算名詞は a なし', GREEN),
  S('書きかえでは、このペアが問われます。It was such a hot day that we stayed home. ＝ It was so hot a day that we stayed home.（とても暑い日だったので家にいた）',
    [w(10, 14, 300, 32, 'such a hot day', GREEN, 14), lb(160, 62, '＝', 16, C.main, 'middle', true), w(10, 78, 300, 32, 'so hot a day', BLUE, 14), lb(160, 130, 'such a ＋ 形容詞 ＝ so ＋ 形容詞 ＋ a', 12, C.ink, 'middle', true)],
    'such a 形 名 ＝ so 形 a 名', YELLOW),
  S('まとめです。such・what は a が先、so・too・how・as は a が後。並べかえでは、まずどちらの語があるかを見て a の位置を決めます。',
    [w(14, 20, 140, 60, 'such\nwhat\n→ a が先', GREEN, 13), w(166, 20, 140, 60, 'so・too\nhow・as\n→ a が後', BLUE, 13), lb(160, 110, 'such a kind person', 12, C.green, 'middle'), lb(160, 130, 'so kind a person', 12, C.blue, 'middle')],
    '見る順番：such・what か、so・too・how・as か', YELLOW),
], '冠詞の位置が動く形：such a と so 〜 a'));

// ── 冠詞の総合演習（節1: 英作文での見直し三手順） ──
reg('koko_eigo_s195', 1, show([
  S('書き終えた英文は、意味を読み返さず、形を指さして確かめます。意味を追うと書いたときと同じ考え方をなぞってしまい、ミスが見えないからです。見直しの手順は三つです。',
    [...row(['手順①\n可算名詞', '手順②\n不可算名詞', '手順③\n二度目の名詞'], 36, MAIN, 12, 60), lb(160, 126, '冠詞のミスは1か所ごとに減点されやすい', 12, C.red, 'middle', true)],
    '見直しは、形を指さして確認する', MAIN),
  S('手順①は、可算名詞の単数形を探すことです。I bought book at store. には a が必要で、I bought a book at a store. が正しい文です。He is teacher. も He is a teacher. に直します。',
    [w(10, 14, 300, 28, '× I bought book at store.', RED, 13), ar(160, 44, 160, 56, C.main), w(10, 58, 300, 28, '○ I bought a book at a store.', GREEN, 13), w(10, 98, 300, 28, '× He is teacher.　○ He is a teacher.', BLUE, 12)],
    '手順①　単数の可算名詞に a / the / my を', BLUE),
  S('なぜ単数の可算名詞には冠詞が要るの？ → book だけでは「本というもの」なのか「1冊」なのか決まらないからです。a book なら1冊、the book ならあの本と、数と特定を示す必要があります。',
    qa('単数の可算名詞に冠詞が要る？', 'book ＝ 1冊なのか、本というものか不明\na book ＝ 1冊\nthe book ＝ あの本\nmy book ＝ 私の本\n\n単数なら必ず何か付ける', BLUE, 12),
    '数や特定を示す印が必要', BLUE),
  S('手順②は、不可算名詞に -s や a が付いていないかの確認です。information・advice・furniture・homework・news・work・money・water・time（時間）を重点的に見ます。',
    [...pair('× many informations', '○ a lot of information', 14, RED, GREEN, 28, 11), ...pair('× a advice', '○ a piece of advice', 54, RED, GREEN, 28, 11), lb(160, 110, 'information / advice / furniture / homework', 11, C.ink, 'middle'), lb(160, 128, 'news / work / money / water / time', 11, C.ink, 'middle')],
    '手順②　不可算名詞に -s と a を付けない', GREEN),
  S('手順③は、二度目に出た名詞が the になっているかの確認です。I have a dog. A dog is white. ではなく、I have a dog. The dog is white. にします。二度目は相手も知っているからです。',
    [w(10, 14, 300, 28, '× I have a dog. A dog is white.', RED, 13), ar(160, 44, 160, 56, C.main), w(10, 58, 300, 28, '○ I have a dog. The dog is white.', GREEN, 13), lb(160, 112, '二度目 ＝ the か所有格（my / its）', 12, C.ink, 'middle', true)],
    '手順③　二度目は the', GREEN),
  S('迷ったときの安全策です。一般論なら無冠詞の複数形（I like dogs.）、特定するか曖昧なら my・this・our などの限定語、不可算名詞の単位語が出ないなら可算名詞への言いかえ（advice → suggestion）です。',
    [w(10, 14, 300, 28, '一般論 → 無冠詞の複数形（I like dogs.）', BLUE, 12), w(10, 48, 300, 28, '曖昧 → my / this / our で特定する', BLUE, 12), w(10, 82, 300, 28, '単位語が出ない → 可算名詞に言いかえ', BLUE, 12), lb(160, 130, 'advice → suggestion', 12, C.ink, 'middle')],
    '迷ったら、冠詞が要らない形に逃げる', YELLOW),
  S('まとめです。①可算名詞の単数に限定語があるか ②不可算名詞に -s と a がないか ③二度目の名詞が the になっているか。この三つを指さして確認します。',
    [w(14, 16, 292, 34, '① 単数の可算名詞 → a / the / my があるか', BLUE, 12), w(14, 58, 292, 34, '② 不可算名詞 → -s と a がないか', GREEN, 12), w(14, 100, 292, 34, '③ 二度目の名詞 → the になっているか', RED, 12)],
    '冠詞の見直し三手順', YELLOW),
], '英作文での冠詞の見直し三手順'));

// ── 無冠詞になる場合①（節1: 同じ語でも冠詞が付く場合） ──
reg('koko_eigo_s196', 1, show([
  S('play soccer、study math、have breakfast、speak English、in April。スポーツ・教科・食事・言語・月には、ふつう冠詞を付けません。ところが、同じ語に冠詞が付く場面もあります。',
    [w(10, 14, 148, 28, 'play soccer', BLUE, 13), w(162, 14, 148, 28, 'study math', BLUE, 13), w(10, 50, 148, 28, 'have breakfast', BLUE, 13), w(162, 50, 148, 28, 'speak English', BLUE, 13), w(10, 86, 148, 28, 'in April', BLUE, 13), lb(236, 100, '→ どれも冠詞なし', 13, C.red, 'middle', true)],
    'ふだんは無冠詞のグループ', MAIN),
  S('なぜこれらは無冠詞なの？ → 無冠詞のとき、その名詞は「モノ」ではなく「活動・種類・状態」を表しているからです。soccer は「サッカーをする活動」であって、数えられる1つのモノではありません。',
    qa('無冠詞になる？', 'soccer ＝ サッカーという活動\nmath ＝ 数学という学問\nbreakfast ＝ 朝食をとること\nモノではなく、活動・種類・状態\n→ a も the も付けない', BLUE, 12),
    '無冠詞 ＝ 活動・種類・状態', BLUE),
  S('スポーツでも、試合という具体的な一回を指すと冠詞が付きます。We play baseball after school. は活動ですが、We watched a baseball game on TV. は1つの試合、The soccer game was exciting. は特定の試合です。',
    [w(10, 14, 300, 28, 'We play baseball after school.', GRAY, 12), lb(160, 52, '活動 → 無冠詞', 12, C.ink, 'middle'), w(10, 70, 300, 28, 'We watched a baseball game on TV.', GREEN, 12), w(10, 104, 300, 28, 'The soccer game was exciting.', GREEN, 12), lb(160, 150, '試合 ＝ 具体的な一回 → 冠詞あり', 12, C.red, 'middle', true)],
    'スポーツ → 試合になると冠詞あり', GREEN),
  S('教科も、授業やテストを指すと冠詞が付きます。I like English. は教科そのもの、We have an English class today. は今日の1コマ、I passed the math test. は特定のテストです。',
    [w(10, 14, 300, 28, 'I like English.', GRAY, 13), w(10, 50, 300, 28, 'We have an English class today.', GREEN, 12), w(10, 86, 300, 28, 'I passed the math test.', GREEN, 13), lb(160, 138, '教科そのもの → 無冠詞　／　授業・テスト → 冠詞あり', 11, C.ink, 'middle', true)],
    '教科 → 授業・テストになると冠詞あり', GREEN),
  S('食事は、形容詞が付くか特定の一回を指すと冠詞が付きます。We had dinner at six. は無冠詞、We had a nice dinner at that restaurant. は a、The dinner she cooked was delicious. は the です。',
    [w(10, 14, 300, 28, 'We had dinner at six.', GRAY, 13), w(10, 50, 300, 28, 'We had a nice dinner at that restaurant.', GREEN, 11), w(10, 86, 300, 28, 'The dinner she cooked was delicious.', GREEN, 12), lb(160, 138, '形容詞が付く／特定の一回 → 冠詞あり', 12, C.red, 'middle', true)],
    '食事 → どんな食事か言うと冠詞あり', GREEN),
  S('言語は、language を付けると the が必要です。He teaches French. は言語そのもの、He teaches the French language. は「フランス語という言語」を特定した言い方です。',
    [w(10, 20, 300, 30, 'He teaches French.', GRAY, 14), w(10, 62, 300, 30, 'He teaches the French language.', GREEN, 13), lb(160, 116, 'language を付ける → the', 13, C.red, 'middle', true)],
    '言語 → language が付くと the', GREEN),
  S('なぜスポーツは無冠詞なのに、楽器には the が付くの？ → 楽器は具体的な道具で、スポーツは活動だからです。play tennis（活動）と play the piano（道具）を見比べましょう。',
    [bx(12, 6, 296, 26, 'なぜ？ スポーツは無冠詞、楽器は the？', PURPLE[0], PURPLE[1], 12), w(10, 44, 148, 50, 'play tennis\n活動 → 無冠詞', BLUE, 13), w(162, 44, 148, 50, 'play the piano\n道具 → the', GREEN, 13), lb(160, 118, '活動か、具体的なモノか', 13, C.ink, 'middle', true)],
    'スポーツ ＝ 活動、楽器 ＝ 道具', PURPLE),
  S('まとめです。「活動そのもの」なら無冠詞、「具体的な一回・特定のモノ」なら冠詞あり。この対比で覚えると、両方の形を自分で作れます。',
    [w(14, 16, 140, 70, '活動・種類\n無冠詞\nplay soccer', GRAY, 13), w(166, 16, 140, 70, '具体的な一回\n冠詞あり\na baseball game', GREEN, 13), lb(160, 118, 'スポーツ・教科・食事・言語に共通', 12, C.ink, 'middle', true)],
    '活動 → 無冠詞　具体物 → 冠詞あり', YELLOW),
], '無冠詞のグループでも、具体的なモノには冠詞が付く'));

// ── 無冠詞になる場合③（節0: 総称と役職の無冠詞） ──
reg('koko_eigo_s198', 0, show([
  S('Dogs are friendly animals.（犬は人なつこい動物だ）や Water is necessary for life.（水は生命に必要だ）のように、一般論には冠詞を付けません。可算名詞は無冠詞の複数形、不可算名詞は無冠詞の単数形にします。',
    [w(10, 20, 300, 30, 'Dogs are friendly animals.', BLUE, 14), w(10, 62, 300, 30, 'Water is necessary for life.', BLUE, 14), lb(160, 116, '〜というもの一般 → 無冠詞', 13, C.red, 'middle', true)],
    '一般論は、無冠詞の複数形／不可算', BLUE),
  S('なぜ一般論は無冠詞なの？ → 特定の犬を指すのではなく、犬という種類全体を言っているからです。the dogs とすると「その犬たち」になり、一般論ではなくなります。',
    qa('一般論は無冠詞？', 'Dogs are friendly.\n　→ 犬というもの全体（一般論）\n\nThe dogs are friendly.\n　→ その犬たち（特定）', RED, 13),
    '特定するなら the、一般なら無冠詞', RED),
  S('Time is money.（時は金なり）や Books give us a lot of knowledge. も同じです。時間も本も「一般」を言っているので、冠詞を付けません。',
    [w(10, 20, 300, 30, 'Time is money.', GREEN, 15), w(10, 62, 300, 30, 'Books give us a lot of knowledge.', GREEN, 13), lb(160, 116, '時間・本という一般的なもの', 12, C.ink, 'middle')],
    '不可算名詞・複数形の一般論', GREEN),
  S('次に役職です。He was elected president of the club.（彼はクラブの会長に選ばれた）の president には冠詞が付きません。補語や同格になる一人だけの地位は、無冠詞にします。',
    [w(10, 20, 300, 30, 'He was elected president of the club.', BLUE, 13), w(10, 62, 300, 30, 'She became captain of the team.', BLUE, 13), lb(160, 116, '一人しかいない地位 → 無冠詞', 13, C.red, 'middle', true)],
    '一人だけの役職は無冠詞', BLUE),
  S('なぜ役職は無冠詞なの？ → 一人しかいない地位は、肩書きとして名前のように使われるからです。ふつうの職業は何人もいるので、He is a teacher. のように a が必要です。',
    qa('役職は無冠詞？', 'president of the club\n　→ クラブに1人だけ → 肩書き\n\na teacher\n　→ 何人もいる職業 → a が必要', BLUE, 13),
    '見分け方：その組織で一人だけか', BLUE),
  S('呼びかけや家族の呼び名も無冠詞です。Waiter, could I have the menu? / Doctor, I have a headache. / Mother is cooking in the kitchen. 名前のように使うので、冠詞は付きません。',
    [w(10, 14, 300, 28, 'Waiter, could I have the menu?', GREEN, 13), w(10, 48, 300, 28, 'Doctor, I have a headache.', GREEN, 13), w(10, 82, 300, 28, 'Mother is cooking in the kitchen.', GREEN, 13), lb(160, 134, '名前のように使う → 無冠詞（大文字で始める）', 12, C.ink, 'middle', true)],
    '呼びかけ・家族の呼び名は無冠詞', GREEN),
  S('まとめです。無冠詞になる理由は三つ。一般論だから、肩書きだから、名前として使っているから。理由を言えるようにしておくと応用がききます。',
    [...row(['一般論\nDogs are ~', '肩書き\npresident', '名前代わり\nMother'], 30, MAIN, 12, 60), lb(160, 120, '三つの理由を言えるようにしておく', 13, C.red, 'middle', true)],
    '無冠詞の三つの理由', YELLOW),
], '総称・役職・呼びかけが無冠詞になる理由'));

// ── 人称代名詞③（節1: 形式主語・形式目的語の it） ──
reg('koko_eigo_s201', 1, show([
  S('To read many books is important. は、主語が長くて頭でっかちです。そこで仮の主語 it を先に置き、本当の主語を後ろに回します。It is important to read many books.（多くの本を読むことは大切だ）',
    [w(10, 14, 300, 30, 'To read many books is important.', GRAY, 13), ar(160, 46, 160, 62, C.main), w(10, 64, 300, 30, 'It is important to read many books.', GREEN, 13), lb(160, 120, 'it ＝ 仮の主語　to 〜 ＝ 本当の主語', 13, C.red, 'middle', true)],
    '形式主語 it：本当の主語は後ろ', GREEN),
  S('なぜ it を置くの？ → 英語は主語が長いと読みにくいので、短い it を先に置いて、重い to 不定詞を文の後ろに回すからです。it は日本語に訳さず、後ろの to 〜 の内容を指します。',
    qa('仮の主語 it を置く？', '長い主語は文の頭が重くなる\n→ 短い it を先に置く\n→ 重い to 〜 を後ろに回す\n\nit 自体は訳さない', BLUE, 13),
    '重いものは後ろに回す', BLUE),
  S('「だれが」するのかを示すときは、ふつう for＋人です。It is easy for him to solve the problem. ところが、人の性質を表す形容詞のときは of＋人になります。It is kind of you to help me.',
    [w(10, 16, 300, 30, 'It is easy for him to solve the problem.', BLUE, 12), w(10, 60, 300, 30, 'It is kind of you to help me.', GREEN, 13), lb(160, 114, 'ふつう → for ＋人　／　性質の形容詞 → of ＋人', 12, C.red, 'middle', true)],
    'for と of の使い分け', BLUE),
  S('なぜ of になるの？ → kind は人の性格を表すので、You are kind. と言えるからです。easy は You are easy. とは言えません。「人 is 形容詞」と言えれば of、言えなければ for です。',
    [bx(12, 6, 296, 26, 'なぜ？ kind のときは of？', PURPLE[0], PURPLE[1], 12), w(10, 42, 148, 50, 'You are kind.\n言える → of', GREEN, 13), w(162, 42, 148, 50, 'I am easy.\n言えない → for', RED, 13), lb(160, 118, '判別法：「人 is 形容詞」と言えるか', 13, C.ink, 'middle', true)],
    'kind, nice, careless, foolish, polite → of', GREEN),
  S('形式目的語の it もあります。find・think・make などの後ろに it を置き、本当の目的語（to 〜）を後ろに回します。I found it difficult to answer the question.（その質問に答えるのは難しいとわかった）',
    [w(10, 14, 300, 30, 'I found it difficult to answer the question.', GREEN, 12), lb(160, 62, 'it ＝ 仮の目的語　to 〜 ＝ 本当の目的語', 12, C.ink, 'middle'), w(10, 82, 300, 30, '× I found difficult to answer 〜', RED, 13), lb(160, 130, 'it を落とす誤りが非常に多い', 12, C.red, 'middle', true)],
    '形式目的語 it：find / think / make', GREEN),
  S('なぜ it を落とせないの？ → find の後ろには「何を」にあたる目的語が必要だからです。difficult は形容詞で目的語になれないので、仮の it が目的語の席を埋めます。',
    qa('it を落とせない？', 'find ＋ 目的語 ＋ 補語（形容詞）\n\nfound [ it ] [ difficult ] [ to answer ]\n　　　目的語　　補語　　　本当の目的語\n\nit がないと目的語の席が空になる', RED, 12),
    'find ＋ it ＋ 形容詞 ＋ to 〜', RED),
  S('It takes も同じ仲間です。It takes me twenty minutes to walk to school.（学校まで歩いて20分かかる）、It costs 500 yen to enter the museum.（博物館に入るのに500円かかる）。',
    [w(10, 20, 300, 32, 'It takes me twenty minutes to walk to school.', BLUE, 12), w(10, 66, 300, 32, 'It costs 500 yen to enter the museum.', BLUE, 12), lb(160, 122, 'it ＝ to 〜 すること（訳さない）', 12, C.ink, 'middle', true)],
    'It takes ＋人＋時間＋to 〜', BLUE),
  S('まとめです。形式の it を見たら、後ろに to 不定詞か that 節があります。本当の主語や目的語を探して読むのがコツです。for と of は「人 is 形容詞」と言えるかで選びます。',
    [w(14, 12, 292, 30, 'It is 形容詞 to 〜（形式主語）', GREEN, 13), w(14, 48, 292, 30, 'find / think / make it 形容詞 to 〜（形式目的語）', BLUE, 12), w(14, 84, 292, 30, '人の性質 → of ＋人　／　それ以外 → for ＋人', RED, 12)],
    '後ろの to 〜 / that 〜 が本当の主役', YELLOW),
], '形式主語・形式目的語の it'));

// ── 再帰代名詞②（節0: 会話で使う慣用表現） ──
reg('koko_eigo_s204', 0, show([
  S('食事の場面で Help yourself to the salad.（サラダをどうぞ召し上がれ）と言われたら、どうしますか。自分で取って食べてよい、という合図です。会話の慣用表現を、場面と結びつけて覚えましょう。',
    [w(10, 20, 300, 32, '"Help yourself to the salad."', BLUE, 14), w(10, 66, 300, 32, '"Thank you."', GREEN, 14), lb(160, 122, '場面：食卓 → 「自分で取ってね」', 13, C.red, 'middle', true)],
    'Help yourself ＝ ご自由にどうぞ', BLUE),
  S('なぜ yourself が付くの？ → 「あなた自身で自分を助けて」つまり「ご自由にどうぞ」という意味で、動作が相手自身に戻るからです。Make yourself at home. も「自分を家にいる状態にして」＝くつろいでください、です。',
    qa('yourself が付く？', 'Help yourself.\n　あなた自身を助ける ＝ ご自由に\n\nMake yourself at home.\n　自分を家にいる状態にする ＝ くつろいで', BLUE, 13),
    '動作が自分に戻る ＝ 再帰代名詞', BLUE),
  S('楽しむときは enjoy oneself、つまり have a good time です。Did you enjoy yourself at the concert? ＝ Did you have a good time at the concert? 別れ際は Take care of yourself.（体に気をつけて）です。',
    [w(10, 14, 300, 30, 'Did you enjoy yourself at the concert?', GREEN, 12), lb(160, 56, '＝', 14, C.main, 'middle', true), w(10, 68, 300, 30, 'Did you have a good time at the concert?', GREEN, 12), w(10, 112, 300, 28, 'Take care of yourself.（体に気をつけて）', BLUE, 12)],
    'enjoy oneself ＝ have a good time', GREEN),
  S('自己紹介は introduce oneself です。Let me introduce myself. My name is Kenta.（自己紹介させてください。健太といいます）。自分を相手に紹介するので、myself になります。',
    [w(10, 20, 300, 32, 'Let me introduce myself.', BLUE, 14), w(10, 64, 300, 32, 'My name is Kenta.', GREEN, 14), lb(160, 120, '紹介する人 ＝ 紹介される人 ＝ 自分', 13, C.ink, 'middle', true)],
    'introduce oneself ＝ 自己紹介する', BLUE),
  S('ひとりで・独力でを表す形が三つあります。by oneself（ひとりで）、for oneself（自分のために・自力で）、on one\'s own（自分の力で）。使い分けは意味です。',
    [...table(['表現', '意味'], [['by himself', 'ひとりで（他に人がいない）'], ['for yourself', '人に頼らず自分で'], ['on my own', '自分の力で']], 14, 14, [110, 182], 28, 12, BLUE), lb(160, 150, 'My grandfather lives by himself.', 12, C.ink, 'middle')],
    'by / for oneself の使い分け', BLUE),
  S('なぜ oneself を主語に合わせて変えるの？ → 動作が主語自身に戻るので、主語が変われば形も変わるからです。I enjoyed myself. / You enjoyed yourself. / They enjoyed themselves.',
    [bx(12, 6, 296, 26, 'なぜ？ 主語に合わせて形が変わる？', PURPLE[0], PURPLE[1], 12), ...table(['主語', '形'], [['I', 'myself'], ['You', 'yourself'], ['He', 'himself'], ['They', 'themselves']], 40, 42, [100, 140], 24, 12, GREEN)],
    'oneself は辞書の形。実際の文では主語に合わせる', GREEN),
  S('まとめです。会話の慣用表現は場面とセットで覚えます。食卓なら Help yourself、訪問なら Make yourself at home、別れ際なら Take care of yourself。そして最後に主語に合わせます。',
    [w(14, 12, 292, 30, '食卓 → Help yourself (to 〜).', BLUE, 13), w(14, 48, 292, 30, '訪問 → Make yourself at home.', GREEN, 13), w(14, 84, 292, 30, '別れ際 → Take care of yourself.', MAIN, 13), w(14, 120, 292, 28, '最後に主語を確認：myself / themselves', RED, 12)],
    '場面 ＋ 主語の確認', YELLOW),
], '会話で使う再帰代名詞の慣用表現'));

// ── 不定代名詞①（節0: some と any の基本） ──
reg('koko_eigo_s206', 0, show([
  S('some は肯定文で「いくつかの・いくらかの」、any は否定文で「少しも〜ない」、疑問文で「いくつか」を表します。I have some questions. / I don\'t have any brothers. / Do you have any questions?',
    [w(10, 14, 300, 28, 'I have some questions.', GREEN, 13), w(10, 48, 300, 28, "I don't have any brothers.", RED, 13), w(10, 82, 300, 28, 'Do you have any questions?', BLUE, 13), lb(160, 134, '肯定 → some　否定・疑問 → any', 13, C.main, 'middle', true)],
    'some と any の基本', MAIN),
  S('なぜ疑問文と否定文では any なの？ → 「あるかどうか分からない」「ないと言いたい」ときは、ある前提の some ではなく any を使うからです。肯定文は「ある」と言い切るので some です。',
    qa('疑問・否定は any？', '肯定：ある と言い切る → some\n疑問：あるかどうか分からない → any\n否定：ない と言う → any', BLUE, 13),
    '「ある」と言い切れるか', BLUE),
  S('では、疑問文なのに some を使うのはなぜ？ → Would you like some tea? のような勧誘や依頼では、相手に「はい」と言ってほしい、つまりあることを前提にしているからです。',
    [w(10, 14, 300, 28, 'Would you like some cake?', GREEN, 13), w(10, 48, 300, 28, 'Can I have some water?', GREEN, 13), w(10, 82, 300, 28, 'Shall I make some tea for you?', GREEN, 13), lb(160, 134, '勧誘・依頼 → 「はい」と答えてほしい → some', 12, C.red, 'middle', true)],
    '勧誘・依頼の疑問文では some', GREEN),
  S('肯定文の any は意味が変わります。「どんな〜でも」です。Any student can use this room.（どの生徒でもこの部屋を使える）、Come at any time.（いつでも来てください）。',
    [w(10, 20, 300, 30, 'Any student can use this room.', BLUE, 13), w(10, 62, 300, 30, 'Come at any time.', BLUE, 13), lb(160, 116, '肯定文の any ＝ どんな〜でも', 13, C.red, 'middle', true)],
    '肯定文の any ＝ どんな〜でも', BLUE),
  S('否定には not 〜 any のほかに no があります。I don\'t have any money. ＝ I have no money. no はそれ自体が否定なので、動詞を否定形にしません。× I don\'t have no money.',
    [w(10, 14, 300, 28, "I don't have any money.", BLUE, 13), lb(160, 54, '＝', 14, C.main, 'middle', true), w(10, 66, 300, 28, 'I have no money.', GREEN, 13), w(10, 106, 300, 28, "× I don't have no money.", RED, 13)],
    'no ＝ not any（二重否定にしない）', RED),
  S('-thing、-one、-body の形にも同じ使い分けが働きます。something は肯定、anything は否定・疑問、nothing は否定です。勧誘のときは疑問文でも something を使います。',
    [...table(['肯定', '否定・疑問', '「ない」'], [['something', 'anything', 'nothing'], ['someone', 'anyone', 'no one'], ['somewhere', 'anywhere', 'nowhere']], 20, 10, [90, 100, 90], 24, 12, BLUE), lb(160, 124, 'Would you like something hot to drink?', 12, C.green, 'middle', true), lb(160, 146, '→ 勧誘なので something', 11, C.ink, 'middle')],
    '一つの規則で6語がまかなえる', BLUE),
  S('まとめです。肯定は some、否定・疑問は any、勧誘・依頼は some、肯定文の any は「どんな〜でも」。選ぶ基準は「ある前提かどうか」です。',
    [w(14, 12, 292, 30, '肯定文 → some', GREEN, 13), w(14, 48, 292, 30, '否定文・ふつうの疑問文 → any', BLUE, 13), w(14, 84, 292, 30, '勧誘・依頼の疑問文 → some', GREEN, 13), w(14, 120, 292, 30, '肯定文の any ＝ どんな〜でも', RED, 13)],
    '基準：ある前提かどうか', YELLOW),
], 'some と any：ある前提かどうかで選ぶ'));

// ── 不定代名詞③（節0: 残りがあるか、これで最後か） ──
reg('koko_eigo_s208', 0, show([
  S('another と the other の分かれ目は、「残りがまだあるか、これで最後か」です。頭の中で集合の絵を描き、残りを数えると確実に選べます。',
    [w(10, 20, 148, 56, 'another\n残りがまだある\n（不特定のもう一つ）', BLUE, 12), w(162, 20, 148, 56, 'the other\nこれで最後\n（残りの一つ）', GREEN, 12), lb(160, 110, '残りがあるか、これで最後か', 13, C.red, 'middle', true)],
    '残りがまだある → another　最後 → the other', MAIN),
  S('another は an＋other が語源で、残りがたくさんある場面の「もう一つ」です。Can I have another?（もう一つもらえる？）、Let\'s meet another day.（また別の日に会おう）。',
    [w(10, 14, 300, 28, 'This cake is delicious. Can I have another?', BLUE, 12), w(10, 50, 300, 28, 'Please show me another one.', BLUE, 13), w(10, 86, 300, 28, "Let's meet another day.", BLUE, 13), lb(160, 134, 'どれでもよい「別の一つ」', 12, C.ink, 'middle', true)],
    'another ＝ 不特定のもう一つ', BLUE),
  S('なぜ2つのときは the other なの？ → 2つのうち一方を言えば、残りは必ず1つに決まるからです。I have two hands. One is right and the other is left.',
    qa('2つのときは the other？', 'two hands\n　One is right　… 1つ目\n　the other is left　… 残りは1つに決まる\n\n特定できるから the が付く', GREEN, 13),
    '残りが1つに決まる ＝ the other', GREEN),
  S('3つなら流れが one → another → the other です。I have three pens. One is red, another is blue, and the other is black.',
    [ci(70, 40, 20, 'red', C.red, FILL.red, 11), ci(160, 40, 20, 'blue', C.blue, FILL.blue, 11), ci(250, 40, 20, 'black', C.gray, FILL.gray, 11),
     lb(70, 80, 'One', 13, C.red, 'middle', true), lb(160, 80, 'another', 13, C.blue, 'middle', true), lb(250, 80, 'the other', 13, C.ink, 'middle', true),
     lb(160, 116, '残りが2つ → another　残りが1つ → the other', 12, C.ink, 'middle')],
    'one → another → the other', YELLOW),
  S('another は数詞と組み合わせると複数名詞が続きます。I need another two days to finish it.（あと2日必要だ）は two more days と同じです。Wait another five minutes.（あと5分待って）。',
    [w(10, 20, 300, 30, 'I need another two days to finish it.', BLUE, 13), lb(160, 66, '＝ two more days', 13, C.main, 'middle', true), w(10, 86, 300, 30, 'Wait another five minutes.', BLUE, 13), lb(160, 132, 'another ＋ 数詞 ＋ 複数名詞 ＝ あと〜', 12, C.ink, 'middle')],
    'another ＋ 数詞 ＝ もう〜ぶん', BLUE),
  S('慣用表現は丸ごと覚えます。one after another（次々に）、in other words（言いかえれば）、on the other hand（他方では）、the other day（先日）、every other day（一日おきに）。',
    [...table(['表現', '意味'], [['one after another', '次々に'], ['in other words', '言いかえれば'], ['on the other hand', '他方では'], ['the other day', '先日'], ['every other day', '一日おきに']], 30, 6, [140, 120], 24, 12, GREEN)],
    'the other day は「先日」。字面から推測しない', GREEN),
  S('each other と one another は代名詞なので、目的語の位置に置きます。They looked at each other.（互いに見つめ合った）。× They looked each other. は at が足りません。所有格は each other\'s です。',
    [w(10, 14, 300, 28, 'They looked at each other.', GREEN, 13), w(10, 50, 300, 28, '× They looked each other.', RED, 13), w(10, 86, 300, 28, "We know each other's names.", BLUE, 13), lb(160, 134, 'each other ＝ 代名詞（主語にはならない）', 12, C.ink, 'middle', true)],
    'each other は前置詞のあとに置く', GREEN),
  S('まとめです。残りがまだある → another、これで最後 → the other。3つなら one → another → the other。the other day などの熟語はそのまま覚えます。',
    [w(14, 12, 292, 30, '残りがまだある → another', BLUE, 13), w(14, 48, 292, 30, 'これで最後 → the other', GREEN, 13), w(14, 84, 292, 30, '3つ → one → another → the other', MAIN, 13), w(14, 120, 292, 28, 'the other day ＝ 先日（熟語）', YELLOW, 12)],
    '集合の絵を描いて、残りを数える', YELLOW),
], 'another と the other：残りがあるか、これで最後か'));

// ── 不定代名詞⑤（節0: each・every・all の使い分け） ──
reg('koko_eigo_s210', 0, show([
  S('3人に賞を渡す場面で考えます。each は一人ひとりに個別に注目、every は3人とも例外なく全体を確認、all は3人をひとまとまりとして見ています。',
    [ci(60, 40, 18, 'A', C.blue, FILL.blue, 13), ci(160, 40, 18, 'B', C.blue, FILL.blue, 13), ci(260, 40, 18, 'C', C.blue, FILL.blue, 13),
     w(10, 78, 96, 34, 'each\n一人ずつ', BLUE, 12), w(112, 78, 96, 34, 'every\n例外なく全員', GREEN, 11), w(214, 78, 96, 34, 'all\nひとまとまり', MAIN, 12), lb(160, 138, '見ているものがちがう', 12, C.ink, 'middle')],
    'each・every・all は見る角度がちがう', MAIN),
  S('なぜ each と every は単数扱いなの？ → どちらも一人ひとり、一つずつ見ていく語なので、後ろの名詞も動詞も単数になるからです。Each student has a locker. Every room has a bath.',
    qa('each と every は単数扱い？', 'Each student has a locker.\nEvery room has a bath.\n\n一人ずつ、一つずつ見る\n→ 名詞は単数、動詞も単数', BLUE, 13),
    'each / every ＋ 単数名詞 ＋ 単数の動詞', BLUE),
  S('all はちがいます。複数名詞なら複数扱い、不可算名詞なら単数扱いで、後ろの名詞しだいです。All the students were present. / All the water was gone.',
    [w(10, 16, 300, 30, 'All the students were present.', GREEN, 13), lb(160, 60, 'students は複数 → were', 12, C.ink, 'middle'), w(10, 80, 300, 30, 'All the water was gone.', GREEN, 13), lb(160, 124, 'water は不可算 → was', 12, C.ink, 'middle')],
    'all は、後ろの名詞に合わせる', GREEN),
  S('なぜ all は名詞しだいなの？ → all は「全部」という量を表すだけで、数えるかどうかは名詞が決めるからです。each と every は「一つずつ」という数え方そのものを含むので、単数に決まっています。',
    qa('all は名詞しだい？', 'all ＝ 全部（量を表すだけ）\n　→ 数えるかは名詞が決める\n\neach / every ＝ 一つずつ（数え方を含む）\n　→ 単数に決まっている', RED, 12),
    '数え方を含むか、含まないか', RED),
  S('every は形容詞だけで、代名詞としては使えません。× Every of them は誤りで、Each of them か All of them にします。everyone・everybody・everything は代名詞で、単数扱いです。',
    [w(10, 14, 300, 28, '× Every of them', RED, 14), ar(160, 44, 160, 56, C.main), w(10, 58, 148, 28, '○ Each of them', GREEN, 13), w(162, 58, 148, 28, '○ All of them', GREEN, 13), w(10, 100, 300, 28, 'Everyone in the class was surprised.', BLUE, 12), lb(160, 144, 'everyone は単数扱い（was）', 12, C.ink, 'middle')],
    'every は代名詞にならない', RED),
  S('each には文中・文末に置く用法もあります。They each have a bike. / They have a bike each.（それぞれ自転車を持っている）。代名詞としては Each of us has a different opinion.',
    [w(10, 20, 300, 28, 'They each have a bike.', BLUE, 13), w(10, 56, 300, 28, 'They have a bike each.', BLUE, 13), w(10, 92, 300, 28, 'Each of us has a different opinion.', GREEN, 12), lb(160, 138, 'each of ＋ 複数代名詞 ＋ 単数の動詞', 12, C.ink, 'middle')],
    'each はいろいろな位置に置ける', BLUE),
  S('まとめです。each と every は単数、all は後ろの名詞しだい。動詞の形を問う問題は、この一行で解けます。',
    [...table(['語', '後ろの名詞', '動詞'], [['each', '単数名詞', '単数'], ['every', '単数名詞', '単数'], ['all', '複数／不可算', '名詞に合わせる']], 14, 20, [70, 110, 108], 30, 12, BLUE)],
    'each・every は単数、all は名詞しだい', YELLOW),
], 'each・every・all：数え方で動詞が決まる'));

// ── 不定代名詞⑥（節0: both・either・neither の使い分け） ──
reg('koko_eigo_s211', 0, show([
  S('二つのものについて、both は「二つとも」、either は「どちらか一方」、neither は「どちらも〜ない」です。三つ以上なら none を使います。数の扱いまでセットで覚えます。',
    [ci(90, 44, 24, 'A', C.blue, FILL.blue, 14), ci(230, 44, 24, 'B', C.blue, FILL.blue, 14),
     w(10, 86, 96, 40, 'both\n二つとも', GREEN, 12), w(112, 86, 96, 40, 'either\nどちらか一方', BLUE, 11), w(214, 86, 96, 40, 'neither\nどちらも〜ない', RED, 11), lb(160, 148, '二つのもの A と B について', 12, C.ink, 'middle')],
    '二つのものについて：both / either / neither', MAIN),
  S('なぜ both は複数扱いなの？ → 二つとも、つまり二つぶんを指すからです。Both books are interesting. Both of my parents are teachers. both は the や my の前に置きます。',
    qa('both は複数扱い？', 'both ＝ 2つ ＝ 複数\n\nBoth books are interesting.\nBoth of my parents are teachers.\n× the both books　○ both the books', GREEN, 13),
    'both ＝ 複数扱い', GREEN),
  S('either は「二つのうちのどちらか一つ」なので単数扱いです。Either of the answers is correct.（どちらの答えも正しい）。否定文では I don\'t like either of them.（どちらも好きではない）の意味になります。',
    [w(10, 16, 300, 30, 'Either of the answers is correct.', BLUE, 13), lb(160, 62, 'どちらか一つ → 単数 → is', 12, C.ink, 'middle'), w(10, 82, 300, 30, "I don't like either of them.", BLUE, 13), lb(160, 128, '否定文の either ＝ どちらも〜ない', 12, C.red, 'middle', true)],
    'either ＝ 単数扱い', BLUE),
  S('neither はそれ自体が否定なので、動詞は肯定形のままです。Neither of them is right.（どちらも正しくない）。× Neither of them isn\'t right. のように否定を重ねません。',
    [w(10, 16, 300, 30, 'Neither of them is right.', GREEN, 14), w(10, 62, 300, 30, "× Neither of them isn't right.", RED, 13), lb(160, 116, 'neither ＝ 「どちらも〜ない」（それ自体が否定）', 12, C.ink, 'middle'), lb(160, 136, '＝ Both answers were wrong.', 12, C.main, 'middle')],
    'neither は動詞を否定形にしない', RED),
  S('なぜ三つ以上では none を使うの？ → neither は「二つのうちどちらも」と二つに限った語だからです。三つ以上のどれも〜ない場合は none を使います。None of the students knew the answer.',
    [bx(12, 6, 296, 26, 'なぜ？ 二つなら neither、三つ以上なら none？', PURPLE[0], PURPLE[1], 12), w(10, 44, 148, 50, '二つ\nneither', RED, 14), w(162, 44, 148, 50, '三つ以上\nnone', BLUE, 14), lb(160, 120, 'None of the students knew the answer.', 12, C.ink, 'middle', true)],
    '二つ → neither　三つ以上 → none', PURPLE),
  S('各語の数の扱いを整理します。both は複数、either・neither は単数。動詞が is か are かを問われたら、まずこの表を思い出します。',
    [...table(['語', '意味', '扱い'], [['both', '二つとも', '複数'], ['either', 'どちらか一方', '単数'], ['neither', 'どちらも〜ない', '単数'], ['none', '三つ以上どれも〜ない', '単数・複数どちらも可']], 8, 12, [56, 140, 96], 28, 11, GREEN)],
    '数の扱いまでセットで覚える', GREEN),
  S('まとめです。both は二つとも（複数）、either はどちらか一方（単数）、neither はどちらも〜ない（単数・否定を重ねない）、none は三つ以上のどれも〜ない。',
    [w(14, 12, 292, 30, 'both ＝ 二つとも（複数扱い）', GREEN, 13), w(14, 48, 292, 30, 'either ＝ どちらか一方（単数扱い）', BLUE, 13), w(14, 84, 292, 30, 'neither ＝ どちらも〜ない（否定を重ねない）', RED, 12), w(14, 120, 292, 28, 'none ＝ 三つ以上のどれも〜ない', MAIN, 13)],
    '二つか、三つ以上かを先に見る', YELLOW),
], 'both・either・neither・none の使い分け'));

// ── 形容詞①（節0: 二つの用法） ──
reg('koko_eigo_s212', 0, show([
  S('形容詞には二つの使い方があります。名詞の前に置いて直接説明する限定用法（a tall boy）と、be動詞などのうしろで主語を説明する叙述用法（The boy is tall.）です。',
    [w(10, 20, 148, 50, '限定用法\na tall boy', BLUE, 13), w(162, 20, 148, 50, '叙述用法\nThe boy is tall.', GREEN, 13), lb(160, 104, '同じ tall でも、置く場所がちがう', 13, C.red, 'middle', true)],
    '限定用法と叙述用法', MAIN),
  S('限定用法は、名詞の前に置いて「どんな〜か」を示し、どの名詞かを絞りこみます。a tall boy、an interesting book、my new bike。限定語→形容詞→名詞の順です。',
    [w(10, 20, 300, 28, 'a　tall　boy', BLUE, 14), w(10, 58, 300, 28, 'an　interesting　book', BLUE, 14), w(10, 96, 300, 28, 'my　new　bike', BLUE, 14), lb(160, 144, '限定語 → 形容詞 → 名詞', 12, C.red, 'middle', true)],
    '限定用法 ＝ 名詞のかたまりの一部', BLUE),
  S('叙述用法は、be動詞や look・seem・taste・become などのうしろに置きます。The boy is tall. She looks happy. The soup tastes good. 主語がどんな状態かを述べます。',
    [w(10, 14, 300, 28, 'The boy is tall.', GREEN, 13), w(10, 48, 300, 28, 'She looks happy.', GREEN, 13), w(10, 82, 300, 28, 'The soup tastes good.', GREEN, 13), lb(160, 134, 'be / look / seem / feel / taste / become + 形容詞', 11, C.ink, 'middle', true)],
    '叙述用法 ＝ 動詞のうしろで主語を説明', GREEN),
  S('第5文型の補語も叙述用法です。The news made me happy. Please keep the room clean. I found the book difficult. 目的語がどんな状態かを説明しています。',
    [w(10, 14, 300, 28, 'The news made me happy.', GREEN, 13), w(10, 48, 300, 28, 'Please keep the room clean.', GREEN, 13), w(10, 82, 300, 28, 'I found the book difficult.', GREEN, 13), lb(160, 134, '目的語（me / the room / the book）の状態', 12, C.ink, 'middle', true)],
    '第5文型：目的語の状態を説明', GREEN),
  S('同じ形容詞で比べます。I bought an expensive camera.（限定：高価なカメラ）と This camera is expensive.（叙述：このカメラは高価だ）。限定は名詞を絞り、叙述は文の内容そのものになります。',
    [w(10, 14, 300, 30, 'I bought an expensive camera.', BLUE, 13), lb(160, 58, '限定：どのカメラか、を絞る', 12, C.blue, 'middle', true), w(10, 78, 300, 30, 'This camera is expensive.', GREEN, 13), lb(160, 122, '叙述：カメラについて述べる', 12, C.green, 'middle', true)],
    '限定 ＝ 絞る　叙述 ＝ 述べる', YELLOW),
  S('なぜ The boy tall. は誤りなの？ → 叙述用法は文の骨組みの一部で、主語と形容詞をつなぐ動詞が必要だからです。限定用法ならば a tall boy のように名詞を直接飾れるので be動詞はいりません。',
    qa('The boy tall は誤り？', '○ The boy is tall.　… 叙述：be動詞が必要\n× The boy tall.　… 動詞がない\n○ a tall boy　… 限定：名詞を直接飾る', RED, 13),
    '叙述用法には be動詞が必要', RED),
  S('まとめです。名詞の前なら限定用法、動詞のうしろなら叙述用法。限定用法は名詞のかたまりの一部、叙述用法は文の骨組みの一部と意識すると、be動詞を落とすミスが減ります。',
    [w(14, 20, 140, 60, '名詞の前\n限定用法\na tall boy', BLUE, 13), w(166, 20, 140, 60, '動詞のうしろ\n叙述用法\nis tall', GREEN, 13), lb(160, 116, 'be動詞を落とさない', 13, C.red, 'middle', true)],
    '位置で用法を見分ける', YELLOW),
], '形容詞の二つの用法：限定と叙述'));

// ── 形容詞③（節1: -ing と -ed の分詞形容詞） ──
reg('koko_eigo_s214', 1, show([
  S('The movie was interesting.（その映画はおもしろかった）と I was interested in the movie.（私は映画に興味をもった）。同じ動詞から作られた形容詞でも、-ing と -ed では意味が逆になります。',
    [w(10, 20, 300, 32, 'The movie was interesting.', BLUE, 14), w(10, 66, 300, 32, 'I was interested in the movie.', GREEN, 14), lb(160, 122, 'interesting と interested', 13, C.red, 'middle', true)],
    '-ing と -ed は、意味が逆になる', MAIN),
  S('なぜ -ing と -ed で意味が逆になるの？ → -ing は「〜させる」性質で、周りに働きかける側です。-ed は「〜させられた」状態で、感情を受けた側だからです。',
    [bx(12, 6, 296, 26, 'なぜ？ -ing と -ed は逆の意味？', PURPLE[0], PURPLE[1], 12), w(10, 44, 148, 56, '-ing\n〜させる性質\n（働きかける側）', BLUE, 12), w(162, 44, 148, 56, '-ed\n〜させられた状態\n（受けた側）', GREEN, 12), ar(158, 70, 162, 70, C.main), lb(160, 126, 'movie が興味を引き起こす → interesting', 11, C.ink, 'middle'), lb(160, 144, '私が興味をもつ → interested', 11, C.ink, 'middle')],
    '-ing ＝ 働きかける　-ed ＝ 受ける', PURPLE),
  S('よく出る組み合わせです。interesting と interested、exciting と excited、surprising と surprised、boring と bored、tiring と tired、shocking と shocked。',
    [...table(['-ing（させる）', '-ed（感じた）'], [['interesting', 'interested'], ['exciting', 'excited'], ['surprising', 'surprised'], ['boring', 'bored'], ['tiring', 'tired']], 30, 8, [130, 130], 24, 12, BLUE)],
    '-ing ＝ 性質　-ed ＝ 気持ち', BLUE),
  S('判断のしかたです。「その人・物が周りにどう働きかけるか」なら -ing、「その人がどう感じたか」なら -ed。The news was surprising. は知らせが驚かせる。I was surprised at the news. は私が驚いた。',
    [w(10, 14, 300, 30, 'The news was surprising.', BLUE, 13), lb(160, 56, '知らせが驚かせる（-ing）', 12, C.blue, 'middle', true), w(10, 78, 300, 30, 'I was surprised at the news.', GREEN, 13), lb(160, 120, '私が驚いた（-ed）', 12, C.green, 'middle', true)],
    '働きかける → -ing　感じた → -ed', YELLOW),
  S('人が主語でも -ing になることがあります。He is boring.（彼は退屈な人だ＝周りを退屈させる）と He is bored.（彼は退屈している）は意味がまったくちがいます。',
    [w(10, 20, 300, 30, 'He is boring.', RED, 14), lb(160, 62, '彼は退屈な人だ（周りを退屈させる）', 12, C.red, 'middle', true), w(10, 84, 300, 30, 'He is bored.', GREEN, 14), lb(160, 126, '彼は退屈している（本人の気持ち）', 12, C.green, 'middle', true)],
    '主語が人でも、意味で判断する', RED),
  S('前置詞とのセットも大切です。be interested in 〜、be excited about 〜、be surprised at 〜、be tired of 〜（〜にあきる）、be tired from 〜（〜で疲れる）、be satisfied with 〜。',
    [...table(['-ed の形容詞', '前置詞'], [['interested', 'in'], ['excited', 'about'], ['surprised', 'at'], ['satisfied', 'with'], ['tired（あきる）', 'of'], ['tired（疲れる）', 'from']], 40, 4, [120, 120], 22, 11, GREEN)],
    '-ed の形容詞は前置詞とセット', GREEN),
  S('まとめです。-ing は周りに働きかける性質、-ed は感情を受けた状態。日本語で「〜している」と訳せても、感情なら -ed になることが多いので、意味で判断します。',
    [w(14, 20, 140, 60, '-ing\n性質・働きかけ\nexciting', BLUE, 13), w(166, 20, 140, 60, '-ed\n感じた気持ち\nexcited', GREEN, 13), lb(160, 118, '日本語の「〜している」にだまされない', 12, C.red, 'middle', true)],
    '意味で -ing / -ed を選ぶ', YELLOW),
], '-ing と -ed の分詞形容詞：働きかけるか、感じたか'));

// ── 副詞①（節0: 副詞は何を修飾するか） ──
reg('koko_eigo_s216', 0, show([
  S('副詞は名詞以外のものを説明する語です。動詞・形容詞・ほかの副詞、そして文全体を修飾します。名詞を修飾するのは形容詞の仕事なので、品詞の判別で迷ったらこの区別に戻ります。',
    [w(10, 14, 148, 30, '動詞を修飾', BLUE, 12), w(162, 14, 148, 30, '形容詞を修飾', GREEN, 12), w(10, 54, 148, 30, '他の副詞を修飾', MAIN, 12), w(162, 54, 148, 30, '文全体を修飾', RED, 12), lb(160, 110, '名詞を修飾するのは形容詞', 13, C.red, 'middle', true)],
    '副詞は名詞以外を説明する', MAIN),
  S('動詞を修飾するのがいちばん多い使い方です。He runs fast. She sings beautifully. Please speak slowly. 原則として動詞のうしろに置きます。',
    [w(10, 14, 300, 28, 'He runs fast.', BLUE, 13), w(10, 48, 300, 28, 'She sings beautifully.', BLUE, 13), w(10, 82, 300, 28, 'Please speak slowly.', BLUE, 13), lb(160, 134, '動詞の「どのように」を説明する', 12, C.ink, 'middle', true)],
    '動詞を修飾：どのように？', BLUE),
  S('なぜ動詞と目的語の間に副詞を入れないの？ → 動詞と目的語は強く結びついたひとまとまりだからです。He speaks English well. が正しく、× He speaks well English. は日本人がもっとも多く犯す語順ミスです。',
    qa('動詞と目的語の間に入れない？', '○ He speaks English well.\n× He speaks well English.\n\n動詞＋目的語は切れない\n副詞はそのうしろへ', RED, 13),
    '目的語があれば、そのうしろに副詞', RED),
  S('形容詞や他の副詞も修飾できます。very kind、too small（形容詞を修飾）。very well、much faster（副詞を修飾）。どちらも修飾する語の直前に置きます。',
    [w(10, 14, 148, 28, 'very kind', GREEN, 13), w(162, 14, 148, 28, 'too small', GREEN, 13), lb(160, 56, '形容詞を修飾（直前に置く）', 12, C.ink, 'middle'), w(10, 74, 148, 28, 'very well', BLUE, 13), w(162, 74, 148, 28, 'much faster', BLUE, 13), lb(160, 116, '他の副詞を修飾', 12, C.ink, 'middle')],
    '形容詞・副詞の修飾は直前に', GREEN),
  S('文全体を修飾する副詞は、文頭に置いてコンマで区切ることが多いです。Fortunately, he passed the exam.（幸運にも合格した）、Perhaps she is right.（おそらく彼女は正しい）。',
    [w(10, 20, 300, 30, 'Fortunately, he passed the exam.', RED, 13), w(10, 62, 300, 30, 'Perhaps she is right.', RED, 13), lb(160, 116, '話し手の気持ち・判断を文全体に添える', 12, C.ink, 'middle', true)],
    '文全体を修飾する副詞', RED),
  S('副詞の作り方は、形容詞＋-ly が基本です。careful → carefully、quick → quickly。ただし easy → easily（y を i に）、true → truly（e が落ちる）、gentle → gently（le が ly に）。',
    [...table(['形容詞', '副詞'], [['careful', 'carefully'], ['easy', 'easily'], ['true', 'truly'], ['gentle', 'gently']], 40, 12, [120, 120], 22, 13, GREEN), lb(160, 146, '-ly が基本。y → i、e が落ちる、le → ly', 11, C.ink, 'middle')],
    '副詞 ＝ 形容詞 ＋ -ly（変化に注意）', GREEN),
  S('-ly で終わっても形容詞の語があります。friendly、lovely、lonely、likely。She is a friendly person. が正しく、× She smiled friendly. は誤りです。',
    [w(10, 16, 300, 28, 'She is a friendly person.', GREEN, 13), w(10, 52, 300, 28, '× She smiled friendly.', RED, 13), lb(160, 104, 'friendly / lovely / lonely / likely は形容詞', 12, C.red, 'middle', true), lb(160, 126, '-ly だからといって副詞とは限らない', 12, C.ink, 'middle')],
    '-ly で終わる形容詞に注意', YELLOW),
  S('まとめです。副詞は動詞・形容詞・副詞・文全体を修飾し、名詞は修飾しない。動詞と目的語の間に入れず、-ly は形容詞のこともあります。',
    [w(14, 12, 292, 30, '動詞・形容詞・副詞・文全体を修飾', BLUE, 13), w(14, 48, 292, 30, '名詞は修飾しない（それは形容詞）', RED, 13), w(14, 84, 292, 30, '動詞と目的語の間に入れない', GREEN, 13), w(14, 120, 292, 28, 'friendly は形容詞', YELLOW, 13)],
    '副詞の働きと位置', YELLOW),
], '副詞は何を修飾するか'));

export const XF_KEE_FIGURES: Record<string, DiagramFigure> = xfFigures;
export const XF_KEE_SECTIONS: Record<string, string> = xfSections;
