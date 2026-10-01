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
     w(174, 70, 136, 36, '○ three pieces of furniture', GREEN, 11), lb(160, 130, '数え方の感覚が日本語と英語でちがう', 12, C.ink, 'middle')],
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
    [...table(['単数', '複数'], [['book', 'books'], ['dog', 'dogs'], ['car', 'cars']], 40, 20, [120, 120], 30, 14, GREEN), lb(160, 138, '原則 ＝ そのまま -s', 13, C.main, 'middle', true)],
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
    [...table(['単数', '複数', '単数', '複数'], [['man', 'men', 'foot', 'feet'], ['woman', 'women', 'tooth', 'teeth'], ['child', 'children', 'mouse', 'mice']], 20, 14, [70, 80, 70, 80], 30, 12, MAIN)],
    '不規則変化は、まるごと覚える', MAIN),
  S('見分ける順番をまとめます。まず語尾を見て、s・x・ch・sh・o なら -es。子音字＋y なら ies。f・fe なら ves。それ以外は -s。当てはまらなければ不規則変化です。',
    [...row(['語尾を\n見る', 'es / ies\nves か判定', '例外・不規則\nを確認'], 24, MAIN, 12, 56), lb(160, 110, 'bus → buses　city → cities　leaf → leaves', 12, C.ink, 'middle'), lb(160, 132, 'book → books　man → men', 12, C.ink, 'middle')],
    '語尾 → 規則 → 例外の順にチェック', YELLOW),
  S('まとめです。-s が原則で、s・x・ch・sh・o は -es、子音字＋y は ies、f・fe は ves。例外は roofs などと不規則変化だけです。理由のある規則と、覚える例外を分けましょう。',
    [w(14, 12, 292, 30, '原則　-s', GREEN, 13), w(14, 48, 292, 30, 's x ch sh o　→　-es', BLUE, 13), w(14, 84, 292, 30, '子音字＋y → ies　／　f, fe → ves', RED, 13), w(14, 120, 292, 30, '例外：roofs, chiefs, safes と不規則変化', MAIN, 12)],
    '規則と例外を分けて覚える', YELLOW),
], '複数形を作る規則'));

export const XF_KEE_FIGURES: Record<string, DiagramFigure> = xfFigures;
export const XF_KEE_SECTIONS: Record<string, string> = xfSections;
