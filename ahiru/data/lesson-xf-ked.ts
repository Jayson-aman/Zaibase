// 高校受験 英語（助動詞・受動態・命令文など 30 単元）の「動く図解スライド」。
// 「なぜ？」の連鎖で、7枚以上。単元の節（section）ごとに 1 つの図解をひもづける。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, show, fresh, flow } from './diagram-kit';

type Col = [string, string];
const BLUE: Col = [C.blue, FILL.blue];
const GREEN: Col = [C.green, FILL.green];
const RED: Col = [C.red, FILL.red];
const MAIN: Col = [C.main, FILL.warm];
const PURPLE: Col = [C.purple, FILL.purple];
const GRAY: Col = [C.gray, FILL.gray];
const YELLOW: Col = [C.main, FILL.yellow];

// 下の帯（y=162 から）に、そのスライドのひとことを出す。\n で改行できる。
const cap = (t: string, c: Col = BLUE, size = 12): DiagramElement => {
  const n = t.split('\n').length;
  return bx(14, 162, 292, 14 + 15 * n, t, c[0], c[1], size);
};

// 1枚のスライド＝まっさらな図＋下の帯
const S = (note: string, top: DiagramElement[], capText: string, c: Col = BLUE, size = 12) => ({
  note,
  add: fresh(...top, cap(capText, c, size)),
});

// 「なぜ？」の問い → 答え、の1組
const qa = (q: string, a: string, c: Col = BLUE, aSize = 13): DiagramElement[] => [
  bx(12, 8, 296, 40, 'なぜ？ ' + q, PURPLE[0], PURPLE[1], 12),
  ar(160, 50, 160, 66, PURPLE[0]),
  bx(12, 68, 296, 80, a, c[0], c[1], aSize),
];

const uw = (s: string) => [...s].reduce((a, ch) => a + (ch.charCodeAt(0) < 256 ? 0.55 : 1), 0);

// 単語（かたまり）を横一列に並べた文。幅は文字数に合わせる。
const sent = (parts: [string, Col][], y: number, size = 12, h = 30, gap = 4): DiagramElement[] => {
  let ws = parts.map(([t]) => Math.max(24, Math.max(...t.split('\n').map(uw)) * size + 12));
  const total = ws.reduce((a, b) => a + b, 0) + gap * (parts.length - 1);
  const k = total > 308 ? 308 / total : 1;
  ws = ws.map((w) => w * k);
  const tot = ws.reduce((a, b) => a + b, 0) + gap * (parts.length - 1);
  let x = (320 - tot) / 2;
  return parts.map(([t, c], i) => {
    const e = bx(x, y, ws[i], h, t, c[0], c[1], size);
    x += ws[i] + gap;
    return e;
  });
};

// 表。rows[0] は見出し行。widths は列の幅。
const grid = (rows: string[][], y0: number, widths: number[], rh: number, hdr: Col = MAIN, body: Col = BLUE, size = 11): DiagramElement[] => {
  const tot = widths.reduce((a, b) => a + b, 0);
  const out: DiagramElement[] = [];
  rows.forEach((r, i) => {
    let x = (320 - tot) / 2;
    r.forEach((t, j) => {
      const c = i === 0 ? hdr : body;
      out.push(bx(x, y0 + i * rh, widths[j], rh, t, c[0], c[1], size));
      x += widths[j];
    });
  });
  return out;
};

// 横一列に箱を矢印でつなぐ
const row = (labels: string[], y: number, c: Col = MAIN, size = 12, h = 44): DiagramElement[] =>
  flow(labels, y, { h, color: c[0], fill: c[1], size, gap: 14 }).flat();

// 全体の大きな箱（中に文を入れる）
const big = (t: string, y: number, h: number, c: Col = BLUE, size = 13): DiagramElement =>
  bx(12, y, 296, h, t, c[0], c[1], size);

// ── s133 受動態②：書きかえ手順 ──
const u133 = show([
  S('受動態への書きかえは、手順が決まっている作業です。例として Many people love this song.（多くの人がこの歌を愛している）を、受動態にしてみましょう。まず文を主語・動詞・目的語に分けます。',
    [lb(160, 18, '能動態（のうどうたい）', 12, C.gray, 'middle'), ...sent([['Many people', BLUE], ['love', RED], ['this song.', GREEN]], 34, 15, 40), lb(70, 90, '主語（する人）', 11, C.blue, 'middle'), lb(160, 90, '動詞', 11, C.red, 'middle'), lb(252, 90, '目的語（される物）', 11, C.green, 'middle'), lb(160, 122, '手順は①②③の3つだけ', 13, C.ink, 'middle', true)],
    '受動態は 3 手順で作れる', MAIN),
  S('なぜ、目的語を主語にするのでしょう。受動態は「される側」を主役にする文だからです。愛されているのは this song なので、this song を文の先頭に出します。',
    qa('目的語を主語にするの？', '受動態 ＝「される側」が主役の文\n愛される（される側）＝ this song\n→ This song を文の先頭に出す', GREEN),
    '手順① 目的語 → 主語', GREEN),
  S('手順①の結果です。目的語だった this song が、新しい主語になりました。文頭なので大文字で書き始めます。',
    [lb(160, 18, '手順①', 13, C.green, 'middle', true), ...sent([['This song', GREEN], ['＿＿＿', GRAY], ['＿＿＿', GRAY]], 40, 15, 40), lb(160, 104, '目的語 this song を主語の位置へ', 12, C.ink, 'middle')],
    'This song ＿＿＿ ＿＿＿ .', GREEN),
  S('なぜ、動詞は be動詞＋過去分詞（かこぶんし）になるのでしょう。受動態は「〜される」という状態を表す形で、それを be＋過去分詞で作る決まりだからです。love は loved にして、be動詞を前に置きます。',
    qa('動詞を be＋過去分詞に変えるの？', '「〜される」という状態を表す形が\nbe動詞 ＋ 過去分詞\nlove（愛する）→ is loved（愛される）', BLUE),
    '手順② 動詞 → be ＋ 過去分詞', BLUE),
  S('では、be動詞は am・is・are・was・were のどれでしょう。時制は元の文と同じ、数は新しい主語に合わせます。元の文は現在で、新しい主語 this song は単数なので is です。過去の文なら was か were になります。',
    [...grid([['時制', '主語が単数', '主語が複数'], ['現在', 'is（I は am）', 'are'], ['過去', 'was', 'were']], 14, [70, 120, 100], 28, MAIN, BLUE, 12), lb(160, 118, 'This song（単数・現在）→ is loved', 14, C.red, 'middle', true)],
    'be動詞は「時制は元の文」「数は新しい主語」', BLUE),
  S('手順③です。もとの主語 Many people は、by の後ろに移します。「だれによって愛されるか」を表す部分です。これで完成です。',
    [lb(160, 18, '手順③ もとの主語を by の後ろへ', 12, C.red, 'middle', true), ...sent([['This song', GREEN], ['is loved', BLUE], ['by many people.', RED]], 40, 14, 40), lb(160, 104, '完成', 13, C.main, 'middle', true), ar(160, 108, 160, 124, C.main)],
    'This song is loved by many people.', RED),
  S('では、なぜ by の後ろの代名詞は him・them のような形になるのでしょう。by は前置詞で、前置詞の後ろには目的格を置く決まりだからです。He wrote this letter. は This letter was written by him. になります。by he は誤りです。',
    [bx(12, 8, 296, 32, 'なぜ？ by の後ろは目的格にするの？', PURPLE[0], PURPLE[1], 12), ...grid([['I', 'we', 'he', 'she', 'they'], ['me', 'us', 'him', 'her', 'them']], 50, [56, 56, 56, 56, 56], 26, MAIN, RED, 13), lb(160, 118, 'This letter was written by him.', 13, C.ink, 'middle', true), lb(160, 138, '× by he は誤り（by は前置詞）', 12, C.red, 'middle')],
    '前置詞 by のあとは目的格', RED),
  S('まとめです。①目的語を主語に、②動詞を be＋過去分詞に（時制は元の文、数は新しい主語）、③主語を by の後ろに（代名詞は目的格）。この順に書けば失点しません。',
    [...row(['① 目的語を\n主語に', '② be＋\n過去分詞', '③ by＋\nもとの主語'], 16, MAIN, 12, 52), lb(160, 98, 'Ken made these cakes.', 13, C.ink, 'middle'), lb(160, 118, '→ These cakes were made by Ken.', 13, C.red, 'middle', true), lb(160, 140, '（these cakes は複数・過去 → were）', 11, C.gray, 'middle')],
    '主語・動詞・by の順に確かめる', MAIN),
], '受動態への書きかえの手順');

// ── s134 受動態③：過去分詞 ──
const u134 = show([
  S('受動態の文は be動詞＋過去分詞で作ります。手順を知っていても、過去分詞が出てこなければ文が書けません。This bridge was ( build ) fifty years ago. の空所に入るのはどれでしょう。',
    [...sent([['This bridge', GREEN], ['was', BLUE], ['？？？', RED], ['fifty years ago.', GRAY]], 30, 13, 36), lb(160, 90, '空所に入るのは be動詞のあと＝過去分詞', 12, C.ink, 'middle', true), lb(160, 116, '失敗のほとんどは文法でなく単語（過去分詞）', 12, C.red, 'middle')],
    '受動態でつまずく原因は過去分詞', MAIN),
  S('なぜ、型で覚えるのでしょう。不規則動詞は数が多いですが、変わり方は4つの型だけだからです。型でまとめると、一つの動詞から同じ型の仲間が引き出せます。',
    [...grid([['型', '原形', '過去形', '過去分詞'], ['A-A-A', 'put', 'put', 'put'], ['A-B-B', 'make', 'made', 'made'], ['A-B-C', 'write', 'wrote', 'written'], ['A-B-A', 'come', 'came', 'come']], 10, [66, 76, 76, 76], 26, MAIN, BLUE, 13)],
    '不規則動詞は4つの型にまとまる', BLUE),
  S('A-B-B 型は、過去形と過去分詞が同じ形です。build-built-built が代表で、buy・teach・catch・find・send・sell・tell・hold も同じ仲間です。',
    [lb(160, 16, 'A-B-B 型（過去形 ＝ 過去分詞）', 12, C.green, 'middle', true), ...grid([['原形', '過去形', '過去分詞'], ['build', 'built', 'built'], ['buy', 'bought', 'bought'], ['teach', 'taught', 'taught'], ['catch', 'caught', 'caught']], 28, [90, 90, 90], 24, GREEN, GREEN, 13)],
    'This house was built in 1980.', GREEN),
  S('A-B-C 型は3つとも違う形です。受動態では特に -en で終わる過去分詞が頻出です。written・spoken・broken・taken・given・eaten は、そのまま文で使えるようにしておきましょう。',
    [lb(160, 16, 'A-B-C 型（3つとも違う）', 12, C.red, 'middle', true), ...grid([['原形', '過去形', '過去分詞'], ['write', 'wrote', 'written'], ['speak', 'spoke', 'spoken'], ['break', 'broke', 'broken'], ['take', 'took', 'taken'], ['give', 'gave', 'given']], 26, [90, 90, 90], 20, RED, RED, 12)],
    'My bike was stolen last night.', RED),
  S('なぜ builded は誤りなのでしょう。-ed をつける規則変化は規則動詞のものだからです。build は不規則動詞なので、過去分詞は built になります。',
    qa('builded はまちがい？', 'build は不規則動詞\n× This bridge was builded\n○ This bridge was built', RED),
    '不規則動詞に -ed はつけない', RED),
  S('では、なぜ The window was ( break ) by the strong wind. で broke と書いてしまうのでしょう。break-broke-broken の2番目で止まり、3番目まで確かめていないからです。was の後ろは過去分詞なので broken です。',
    [bx(12, 8, 296, 36, 'なぜ？ was のあとに broke と書いてしまうのは？', PURPLE[0], PURPLE[1], 12), ...row(['break\n原形', 'broke\n過去形', 'broken\n過去分詞'], 58, GRAY, 12, 44), lb(160, 128, '2番目で止まらず 3番目まで言う', 12, C.red, 'middle', true)],
    'was の後ろは 3番目の欄', RED),
  S('つづりにも注意です。written と forgotten は t が2つ、known と grown は n を落とさないこと。read は3つとも同じつづりで、発音だけ リード・レッド・レッド と変わります。',
    [...grid([['気をつける動詞', '過去分詞'], ['write', 'written（t が2つ）'], ['forget', 'forgotten（t が2つ）'], ['know / grow', 'known / grown（n を落とさない）'], ['read', 'read（発音はレッド）']], 12, [110, 180], 26, MAIN, YELLOW, 12)],
    'つづりで落としやすい過去分詞', MAIN),
  S('まとめです。受動態の空所に入るのは、ほぼ必ず過去分詞です。be動詞の後ろにあったら、3番目の欄を思い出しましょう。原形と過去分詞を対にして声に出すと定着が速くなります。',
    [...row(['be動詞\nis / was', '3番目の欄\n過去分詞'], 14, MAIN, 12, 48), lb(160, 82, 'was built／was written／is spoken', 12, C.ink, 'middle', true), lb(160, 104, 'was taken／was broken／is known', 12, C.ink, 'middle', true), lb(160, 128, 'were held／was stolen', 12, C.ink, 'middle', true)],
    '受動態の頻出 = 過去分詞で決まる', MAIN),
], '過去分詞の不規則変化');

// ── s135 受動態④：by の省略 ──
const u135 = show([
  S('教科書の受動態には、by〜がある文とない文があります。This novel was written by Natsume Soseki. と English is spoken in many countries. を比べてみましょう。',
    [big('This novel was written by Natsume Soseki.', 16, 34, BLUE, 13), big('English is spoken in many countries.', 60, 34, GREEN, 13), lb(160, 118, '実際の英文では by がない受動態が多数派', 12, C.red, 'middle', true), lb(160, 138, '「受動態 ＝ by がある文」と思いこまない', 12, C.ink, 'middle')],
    'by 〜 は、いつも必要なわけではない', MAIN),
  S('なぜ by を省略することが多いのでしょう。受動態を使う動機の一つが、だれがしたかを言わずにすませたいからです。だから by がないのは自然なことです。',
    qa('by を省略する文が多いの？', '受動態を使う理由の一つ\n＝「だれがしたか」を言わなくてよい\nだから by 〜 が無いのは自然', PURPLE),
    '毎回「by が必要か」を考える', PURPLE),
  S('by を書くのは、動作をした人が特定の人や団体で、その情報に意味があるときです。だれが書いたか、だれがこわしたかが大切な文では書きます。',
    [lb(160, 16, 'by を書く場合', 13, C.blue, 'middle', true), big('This novel was written by Natsume Soseki.\n（だれが書いたかが重要）', 30, 44, BLUE, 12), big('The window was broken by my brother.\n（だれがこわしたかが問題）', 82, 44, BLUE, 12)],
    '特定の人で、伝える価値がある → by を書く', BLUE),
  S('1つ目の省略パターンは、動作主がわからないときです。バッグを盗んだ人はわからないので、My bag was stolen on the train. と by 〜 を書きません。',
    [lb(160, 16, '書かない① 動作主がわからない', 13, C.red, 'middle', true), big('My bag was stolen on the train.', 34, 40, RED, 14), lb(160, 98, 'だれが盗んだのか不明 → by 〜 は書けない', 12, C.ink, 'middle'), lb(160, 122, '（書くとしたら by someone だが不自然）', 11, C.gray, 'middle')],
    '不明なら、by 〜 は書かない', RED),
  S('2つ目は、動作主が人々一般のときです。English is spoken in many countries. の「by people」は言うまでもありません。This flower is called a sunflower. も by us は不要です。',
    [lb(160, 16, '書かない② 動作主が一般の人々', 13, C.green, 'middle', true), big('English is spoken in many countries.', 32, 38, GREEN, 13), big('This flower is called a sunflower.', 78, 38, GREEN, 13), lb(160, 134, '× by people ／ × by us は不要', 12, C.red, 'middle')],
    '一般の人々 → by 〜 は省略', GREEN),
  S('3つ目は、動作主が明らかなときです。手紙を届けるのは郵便配達員、病院へ運ぶのは救急隊や周りの人に決まっているので、言う必要がありません。',
    [lb(160, 16, '書かない③ 言うまでもない', 13, C.purple, 'middle', true), big('The letter was delivered this morning.\n（配達員に決まっている）', 30, 44, PURPLE, 12), big('He was taken to the hospital.\n（救急隊や周りの人に決まっている）', 82, 44, PURPLE, 12)],
    '明らかなら、by 〜 は書かない', PURPLE),
  S('では、They speak Spanish in Mexico. を書きかえるとき、by them を残してよいでしょうか。この They は「メキシコの人々一般」なので、残すと「その人たちによって」と限定された意味になり不自然です。',
    qa('by them を残さないの？', 'They speak Spanish in Mexico.\n○ Spanish is spoken in Mexico.\n× Spanish is spoken by them in Mexico.', RED, 12),
    'they / people / we は、by を書かない', RED),
  S('by のまちがえやすい点です。by は「動作をした人・もの」、with は「使った道具」です。The letter was written by Tom.（トムが書いた）と The letter was written with a pen.（ペンで書かれた）は意味がちがいます。',
    [...grid([['前置詞', '表すもの', '例'], ['by', '動作をした人・もの', 'written by Tom'], ['with', '使った道具', 'written with a pen']], 14, [60, 110, 130], 30, MAIN, BLUE, 12), lb(160, 118, 'by の後ろの代名詞は目的格（by him / by them）', 12, C.ink, 'middle'), lb(160, 138, '× This school was built by 1950（by 1950 は「〜までに」）', 11, C.red, 'middle')],
    'by ＝ した人、with ＝ 道具', BLUE),
  S('まとめです。動作主が特定で重要なら by を書き、不明・一般・言うまでもない場合は省略します。能動態から書きかえる問題で they / people / we が主語なら、by は書かなくてよいと覚えましょう。',
    [bx(16, 12, 130, 44, '特定で重要', C.blue, FILL.blue, 13), ar(150, 34, 170, 34, C.main), bx(174, 12, 130, 44, 'by 〜 を書く', C.blue, FILL.blue, 13), bx(16, 70, 130, 56, '不明\n一般の人々\n言うまでもない', C.red, FILL.red, 12), ar(150, 98, 170, 98, C.main), bx(174, 70, 130, 56, 'by 〜 を省略', C.red, FILL.red, 13)],
    'by は「書くかどうか」を毎回考える', MAIN),
], 'by 〜 を書く場合・書かない場合');

// ── s136 受動態⑤：受動態にできない動詞 ──
const u136 = show([
  S('「事故が起きた」を A big accident was happened. と書く人が毎年たくさんいます。この文のどこがまちがいなのでしょう。実は happen は受動態にできない動詞です。',
    [big('× The accident was happened yesterday.', 18, 40, RED, 14), big('○ The accident happened yesterday.', 70, 40, GREEN, 14), lb(160, 134, 'was ＋ 過去分詞の形でも、文として成り立たない', 12, C.ink, 'middle')],
    'happen は受動態にできない', RED),
  S('なぜ受動態にできないのでしょう。受動態は、能動態の目的語を主語にして作ります。目的語がなければ、主語に持ってくるものがないからです。',
    [bx(12, 8, 296, 32, 'なぜ？ 受動態にできない動詞があるの？', PURPLE[0], PURPLE[1], 12), lb(160, 56, '能動態：S ＋ V ＋ O → 受動態：O ＋ be ＋ 過去分詞', 12, C.ink, 'middle', true), ...sent([['He', BLUE], ['ate', RED], ['an apple.', GREEN]], 72, 13, 32), lb(160, 118, 'O がある → 受動態にできる', 12, C.green, 'middle', true), ...sent([['The accident', BLUE], ['happened.', RED]], 130, 13, 28)],
    '目的語がない → 主語にするものがない', BLUE),
  S('目的語をとらない動詞を自動詞（じどうし）といいます。happen・occur（起こる）、appear（現れる）、arrive（到着する）、come・go、die（死ぬ）、rise（のぼる）などは受動態にできません。',
    [lb(160, 16, '目的語をとらない自動詞', 13, C.red, 'middle', true), ...grid([['起こる', '現れる・消える', '動く・住む'], ['happen\noccur', 'appear\ndisappear', 'arrive come go\nwalk run live sleep'], ['rise（のぼる）', 'fall（落ちる）', 'die（死ぬ）']], 28, [90, 100, 100], 40, RED, RED, 11)],
    '受動態の禁止リスト', RED),
  S('例を見ましょう。He was died two years ago. は誤りで、He died two years ago. が正しい文です。The sun is risen in the east. も誤りで、The sun rises in the east. と書きます。',
    [big('× He was died two years ago.', 12, 30, RED, 13), big('○ He died two years ago.', 46, 30, GREEN, 13), big('× The sun is risen in the east.', 88, 30, RED, 13), big('○ The sun rises in the east.', 122, 30, GREEN, 13)],
    '自動詞は、そのまま能動態で書く', RED),
  S('状態を表す一部の他動詞も、受動態にしません。have（持っている）・resemble（似ている）・suit（似合う）・cost・lack などです。A car is had by him. ではなく He has a car. と書きます。',
    [lb(160, 16, '状態を表す動詞', 13, C.main, 'middle', true), big('× A car is had by him.\n○ He has a car.', 30, 46, MAIN, 13), big('× She is resembled by her mother.\n○ She resembles her mother.', 84, 52, MAIN, 12)],
    'have / resemble / suit も受動態にしない', MAIN),
  S('belong to（属する）も受動態にしません。This bag is belonged to me. は誤りで、This bag belongs to me. が正しい文です。',
    [bx(12, 8, 296, 32, 'なぜ？ belong to も受動態にしないの？', PURPLE[0], PURPLE[1], 12), big('属する ＝ 「所有している状態」を表す動詞\n（動作を受けるわけではない）', 52, 44, BLUE, 12), big('× This bag is belonged to me.\n○ This bag belongs to me.', 102, 50, GREEN, 13)],
    'belong to は、そのまま現在形', BLUE),
  S('なぜ、日本語の感覚で書くとまちがえるのでしょう。日本語では「起こる」を「起こされた」とは言いません。英語にするときだけ受動態にしてしまうのが原因です。日本語で受け身に言えるかを確かめるのが有効なチェックです。',
    qa('受動態にしてしまうの？', '日本語：起こる（「起こされた」とは言わない）\n日本語：似ている（「似られている」とは言わない）\n→ 日本語で受け身にできるか確かめる', PURPLE, 12),
    '日本語でも受け身にならない動詞は注意', PURPLE),
  S('まとめです。受動態を書く前に「この動詞の後ろに目的語（名詞）が置けるか」を確かめます。置けなければ自動詞なので、受動態は作れません。happen・die・arrive・belong は、そのまま能動態で書きます。',
    [bx(10, 14, 130, 50, '動詞の後ろに\n目的語を置ける？', C.main, FILL.warm, 12), ar(142, 30, 168, 22, C.green), bx(170, 8, 140, 34, 'YES → 受動態OK', C.green, FILL.green, 12), ar(142, 50, 168, 66, C.red), bx(170, 52, 140, 34, 'NO → 受動態NG', C.red, FILL.red, 12), lb(160, 118, 'happen / die / arrive / appear / belong to', 12, C.ink, 'middle'), lb(160, 138, 'は能動態のまま使う', 12, C.ink, 'middle')],
    '目的語が置けるか確認してから書く', MAIN),
], '受動態にできない動詞');

// ── s139 受動態⑧：否定文と疑問文 ──
const u139 = show([
  S('受動態は be動詞の文です。だから否定文・疑問文の作り方も、be動詞の文と同じです。まずは元の肯定文 This book is read by many people. を確認します。',
    [lb(160, 16, '肯定文', 12, C.gray, 'middle'), ...sent([['This book', GREEN], ['is read', BLUE], ['by many people.', GRAY]], 32, 13, 36), lb(160, 96, '受動態 ＝ be動詞 ＋ 過去分詞', 13, C.ink, 'middle', true), lb(160, 120, 'be動詞のはたらきがすべて', 12, C.main, 'middle')],
    '受動態の否定・疑問は be動詞が決め手', MAIN),
  S('否定文は、be動詞の直後に not を置きます。This book is not read by young people. となります。短縮形は isn\'t・aren\'t・wasn\'t・weren\'t です。',
    [lb(160, 16, '否定文', 13, C.red, 'middle', true), ...sent([['This book', GREEN], ['is', BLUE], ['not', RED], ['read', BLUE], ['by young people.', GRAY]], 34, 13, 36), lb(160, 96, 'The window was not broken by Tom.', 12, C.ink, 'middle'), lb(160, 116, 'These cars are not made in Japan.', 12, C.ink, 'middle'), lb(160, 140, 'is not → isn\'t　was not → wasn\'t', 12, C.gray, 'middle')],
    'be動詞 ＋ not ＋ 過去分詞', RED),
  S('なぜ do や did を使わないのでしょう。do・does・did は一般動詞の文で使うものだからです。受動態は be動詞の文なので、be動詞を動かすだけで否定文・疑問文が作れます。',
    qa('受動態の否定に do を使わないの？', 'do / does / did は一般動詞の文の助け役\n受動態は be動詞の文\n→ be動詞を動かすだけでよい', BLUE),
    '受動態に do / does / did は使わない', BLUE),
  S('疑問文は、be動詞を主語の前に出します。Is this book read by many people? Was the window broken by Tom? Are these cars made in Japan? のようになります。',
    [lb(160, 14, '疑問文：be動詞を主語の前へ', 13, C.blue, 'middle', true), ...sent([['This book', GREEN], ['is', BLUE], ['read by many people.', GRAY]], 32, 12, 30), ar(160, 66, 160, 84, C.main), ...sent([['Is', BLUE], ['this book', GREEN], ['read by many people?', GRAY]], 88, 12, 30), lb(160, 138, 'Was the window broken by Tom?', 12, C.ink, 'middle')],
    'be動詞 ＋ 主語 ＋ 過去分詞 ?', BLUE),
  S('答え方です。疑問文の先頭にある be動詞で答えます。Yes, it is. / No, it is not. のようにします。Yes, it does. や Yes, it did. は誤りです。',
    [big('Is this book read by many people?', 12, 32, BLUE, 13), ...grid([['答え方', '例'], ['○', 'Yes, it is. / No, it is not.'], ['○', 'Yes, they are. / No, they are not.'], ['×', 'Yes, it does. / Yes, it did.']], 54, [60, 230], 24, MAIN, GREEN, 12)],
    '答えも be動詞を使う', GREEN),
  S('疑問詞のある疑問文は、疑問詞を前に出して、残りを疑問文の語順にします。When was this school built? — It was built in 1950. / Where are these cars made? — They are made in Germany.',
    [lb(160, 14, '疑問詞 ＋ be動詞 ＋ 主語 ＋ 過去分詞', 12, C.purple, 'middle', true), ...grid([['疑問文', '答え'], ['When was this school built?', 'It was built in 1950.'], ['Where are these cars made?', 'They are made in Germany.']], 32, [160, 140], 34, PURPLE, PURPLE, 11)],
    '疑問詞を前に出して、残りは疑問文の語順', PURPLE),
  S('「だれによって」をたずねるときは、By whom was this picture painted? とかたく言うか、Who was this picture painted by? と会話ふうに言います。どちらも「この絵はだれによって描かれましたか」です。',
    [bx(12, 8, 296, 30, 'なぜ？ by が文の最後に残るの？', PURPLE[0], PURPLE[1], 12), big('By whom was this picture painted?（かたい言い方）', 46, 30, GRAY, 12), big('Who was this picture painted by?（会話でふつう）', 82, 30, BLUE, 12), lb(160, 130, '答え：It was painted by Picasso.', 12, C.ink, 'middle')],
    '「だれによって」＝ By whom / Who 〜 by', PURPLE),
  S('疑問詞そのものが主語のときは、語順を入れかえません。What language is spoken in Brazil?（ブラジルでは何語が話されていますか）、Who was invited to the party? がその例です。',
    [lb(160, 14, '疑問詞が主語のとき', 13, C.green, 'middle', true), ...sent([['What language', GREEN], ['is spoken', BLUE], ['in Brazil?', GRAY]], 34, 12, 34), ...sent([['Who', GREEN], ['was invited', BLUE], ['to the party?', GRAY]], 84, 12, 34), lb(160, 138, '疑問詞が主語 → 語順は入れかえない', 12, C.red, 'middle')],
    '疑問詞が主語なら、そのまま続ける', GREEN),
  S('まとめです。受動態の否定文は be＋not＋過去分詞、疑問文は be を主語の前に出す形。do・does・did は使いません。疑問詞は前に出し、主語をたずねるときは語順を変えません。',
    [...row(['否定\nbe not ＋過去分詞', '疑問\nBe ＋主語＋過去分詞?', '疑問詞\n前に出す'], 14, MAIN, 11, 56), lb(160, 98, 'be動詞の時制と数は、いつも主語に合わせる', 12, C.ink, 'middle'), lb(160, 120, 'These cars → are　／　This car → is', 12, C.red, 'middle', true)],
    'be動詞を動かすだけ', MAIN),
], '受動態の否定文・疑問文');

export const XF_KED_FIGURES: Record<string, DiagramFigure> = {
  'xf_koko_eigo_s133': u133,
  'xf_koko_eigo_s134': u134,
  'xf_koko_eigo_s135': u135,
  'xf_koko_eigo_s136': u136,
  'xf_koko_eigo_s139': u139,
};

export const XF_KED_SECTIONS: Record<string, string> = {
  'koko_eigo_s133#0': 'xf_koko_eigo_s133',
  'koko_eigo_s134#0': 'xf_koko_eigo_s134',
  'koko_eigo_s135#0': 'xf_koko_eigo_s135',
  'koko_eigo_s136#0': 'xf_koko_eigo_s136',
  'koko_eigo_s139#0': 'xf_koko_eigo_s139',
};
