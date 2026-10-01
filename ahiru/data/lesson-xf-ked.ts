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
    [...grid([['気をつける動詞', '過去分詞'], ['write', 'written（t が2つ）'], ['forget', 'forgotten（t が2つ）'], ['know / grow', 'known / grown（n を落とさない）'], ['read', 'read（発音はレッド）']], 12, [100, 200], 26, MAIN, YELLOW, 12)],
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
    [...grid([['前置詞', '表すもの', '例'], ['by', '動作をした人・もの', 'written by Tom'], ['with', '使った道具', 'written with a pen']], 14, [46, 128, 126], 30, MAIN, BLUE, 11), lb(160, 118, 'by の後ろの代名詞は目的格（by him / by them）', 12, C.ink, 'middle'), lb(160, 138, '× This school was built by 1950（by 1950 は「〜までに」）', 11, C.red, 'middle')],
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
    [lb(160, 16, '目的語をとらない自動詞', 13, C.red, 'middle', true), ...grid([['起こる', '現れる・消える', '動く・住む'], ['happen\noccur', 'appear\ndisappear', 'arrive come go\nwalk run live'], ['rise（のぼる）', 'fall（落ちる）', 'die（死ぬ）']], 28, [90, 100, 100], 40, RED, RED, 11)],
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
    [lb(160, 14, '疑問詞 ＋ be動詞 ＋ 主語 ＋ 過去分詞', 12, C.purple, 'middle', true), ...grid([['疑問文', '答え'], ['When was this school built?', 'It was built in 1950.'], ['Where are these cars made?', 'They are made in Germany.']], 32, [150, 150], 34, PURPLE, PURPLE, 11)],
    '疑問詞を前に出して、残りは疑問文の語順', PURPLE),
  S('「だれによって」をたずねるときは、By whom was this picture painted? とかたく言うか、Who was this picture painted by? と会話ふうに言います。どちらも「この絵はだれによって描かれましたか」です。',
    [bx(12, 8, 296, 30, 'なぜ？ by が文の最後に残るの？', PURPLE[0], PURPLE[1], 12), big('By whom was this picture painted?（かたい言い方）', 46, 30, GRAY, 12), big('Who was this picture painted by?（会話でふつう）', 82, 30, BLUE, 12), lb(160, 130, '答え：It was painted by Picasso.', 12, C.ink, 'middle')],
    '「だれによって」＝ By whom / Who 〜 by', PURPLE),
  S('疑問詞そのものが主語のときは、語順を入れかえません。What language is spoken in Brazil?（ブラジルでは何語が話されていますか）、Who was invited to the party? がその例です。',
    [lb(160, 14, '疑問詞が主語のとき', 13, C.green, 'middle', true), ...sent([['What language', GREEN], ['is spoken', BLUE], ['in Brazil?', GRAY]], 34, 12, 34), ...sent([['Who', GREEN], ['was invited', BLUE], ['to the party?', GRAY]], 84, 12, 34), lb(160, 138, '疑問詞が主語 → 語順は入れかえない', 12, C.red, 'middle')],
    '疑問詞が主語なら、そのまま続ける', GREEN),
  S('まとめです。受動態の否定文は be＋not＋過去分詞、疑問文は be を主語の前に出す形。do・does・did は使いません。疑問詞は前に出し、主語をたずねるときは語順を変えません。',
    [...row(['否定文\nbe not 〜', '疑問文\nBe 主語 〜?', '疑問詞\n前に出す'], 14, MAIN, 12, 56), lb(160, 98, 'be動詞の時制と数は、いつも主語に合わせる', 12, C.ink, 'middle'), lb(160, 120, 'These cars → are　／　This car → is', 12, C.red, 'middle', true)],
    'be動詞を動かすだけ', MAIN),
], '受動態の否定文・疑問文');

// ── s140 受動態⑨：助動詞のある受動態 ──
const u140 = show([
  S('「ここから富士山が見える」は Mt. Fuji can be seen from here. と言います。助動詞（can）のあとに be、そのあとに過去分詞（seen）が続く、3語で1セットの形です。',
    [lb(160, 16, 'Mt. Fuji can be seen from here.', 13, C.ink, 'middle', true), ...sent([['can', RED], ['be', BLUE], ['seen', GREEN]], 36, 16, 40), lb(76, 92, '助動詞', 11, C.red, 'middle'), lb(160, 92, '原形 be', 11, C.blue, 'middle'), lb(244, 92, '過去分詞', 11, C.green, 'middle'), lb(160, 122, '助動詞 ＋ be ＋ 過去分詞', 14, C.main, 'middle', true)],
    '助動詞のある受動態 ＝ 3語で1セット', MAIN),
  S('なぜ、be動詞が is や are ではなく be になるのでしょう。助動詞のあとには、必ず動詞の原形が来る決まりだからです。受動態の be動詞も動詞なので、原形の be になります。',
    qa('助動詞のあとは be になるの？', '助動詞（can / must / will…）のうしろ ＝ 動詞の原形\nbe動詞の原形 ＝ be\nam・is・are は主語に合わせた形なので使えない', BLUE, 12),
    'am / is / are の原形は be', BLUE),
  S('助動詞ごとに意味が変わります。can be seen は「見られうる」、must be finished は「終えられねばならない」、should be sent は「送られるべきだ」、will be closed は「閉じられるだろう」です。',
    [...grid([['助動詞＋be＋過去分詞', '意味'], ['can be seen', '〜されうる・〜できる'], ['must be finished', '〜されなければならない'], ['should be sent', '〜されるべきだ'], ['may be read', '〜されるかもしれない'], ['will be closed', '〜されるだろう']], 12, [150, 150], 24, MAIN, BLUE, 12)],
    '意味は、助動詞の意味が決める', BLUE),
  S('では、be を落として × This book can read. のように書くとどうなるでしょう。助動詞の直後に過去分詞が直接来てしまい、文として成り立ちません。be を落とさないことが大切です。',
    qa('be を落とすとなぜ×？', '× Mt. Fuji can seen from here.\n○ Mt. Fuji can be seen from here.\n助動詞のあとに過去分詞が直接来る形は、英語にない', RED),
    '× can seen → ○ can be seen', RED),
  S('否定文は、助動詞のあとに not を置きます。This flower cannot be seen in winter. / The rule must not be broken. 疑問文は助動詞を主語の前に出します。Can this word be used here?',
    [lb(160, 14, '否定文：助動詞 ＋ not ＋ be ＋ 過去分詞', 12, C.red, 'middle', true), big('This flower cannot be seen in winter.', 26, 30, RED, 12), big('The rule must not be broken.', 60, 30, RED, 12), lb(160, 108, '疑問文：助動詞を主語の前へ', 12, C.blue, 'middle', true), big('Can this word be used here? — Yes, it can.', 120, 30, BLUE, 12)],
    '否定は not、疑問は助動詞を前へ', BLUE),
  S('なぜ「見える」という日本語が受動態になるのでしょう。英語では「富士山が（人に）見られうる」と、見られる側を主語にして状況を説明するほうが自然だからです。I can see Mt. Fuji. も誤りではありませんが、案内や看板では受動態がよく使われます。',
    [bx(12, 8, 296, 32, 'なぜ？ 「見える」が受動態になるの？', PURPLE[0], PURPLE[1], 12), big('Mt. Fuji can be seen from my house.\n見られる側（富士山）を主語にした状況説明', 48, 44, GREEN, 12), big('I can see Mt. Fuji. も誤りではない', 100, 28, GRAY, 12), lb(160, 144, 'The music could be heard from far away.', 11, C.gray, 'middle')],
    '状況説明は、見られる側を主語にする', GREEN),
  S('受動態を能動態に戻すときは、by の後ろを主語にします。助動詞のあとは原形です。This song can be sung by children. は Children can sing this song. となります。by がないときは we・people などを補います。',
    [...sent([['This song', GREEN], ['can be sung', BLUE], ['by children.', RED]], 14, 12, 30), ar(160, 48, 160, 66, C.main), ...sent([['Children', RED], ['can sing', BLUE], ['this song.', GREEN]], 70, 12, 30), lb(160, 118, 'This word is not used now.', 12, C.ink, 'middle'), lb(160, 138, '→ We do not use this word now.', 12, C.ink, 'middle')],
    '能動態に戻す：by の後ろが主語、動詞は原形', MAIN),
  S('進行形の受動態は be being ＋過去分詞で、「今〜されているところだ」を表します。The house is being built now.（家は今建てられているところ）。being を落として is built と書くと、「建てられる」という習慣の意味になり、進行の意味が消えます。',
    [big('The house is being built now.\n（今 建てられているところだ）', 14, 46, BLUE, 12), big('The house is built now.\n（進行の意味が消えてしまう）', 70, 46, RED, 12), lb(160, 134, 'being を落とさない', 12, C.red, 'middle', true)],
    '進行形の受動態は be being ＋ 過去分詞', BLUE),
  S('まとめです。助動詞のあとは原形の be、完了形なら been、進行形なら being と、be の形だけが変わります。どの形でも核は「be ＋ 過去分詞」です。',
    [...grid([['形', 'be の形', '例'], ['助動詞', 'be', 'can be seen'], ['進行形', 'being', 'is being built'], ['完了形', 'been', 'has been built'], ['ふつう', 'is / was', 'is spoken']], 12, [70, 80, 150], 26, MAIN, BLUE, 12)],
    '核は、いつも be ＋ 過去分詞', MAIN),
], '助動詞 ＋ be ＋ 過去分詞');

// ── s141 受動態⑩：be known to / for / as ──
const u141 = show([
  S('known は「知られている」ですが、後ろの前置詞で何を言っているかが変わります。He is known ___ a great writer. の空所は to・for・as のどれでしょう。',
    [...sent([['His name', GREEN], ['is known', BLUE], ['to', RED]], 24, 14, 36), ...sent([['This town', GREEN], ['is known', BLUE], ['for', RED]], 66, 14, 36), ...sent([['He', GREEN], ['is known', BLUE], ['as', RED]], 108, 14, 36)],
    'known のあとの前置詞が意味を決める', MAIN),
  S('be known to 〜 は「〜に知られている」です。to の後ろには「知っている人・範囲」が来ます。His name is known to everyone in this town.（彼の名前はこの町のみんなに知られている）',
    [lb(160, 14, 'be known to 〜', 14, C.blue, 'middle', true), big('His name is known to everyone in this town.', 28, 34, BLUE, 12), big('This fact is known to few people.', 70, 34, BLUE, 12), lb(160, 126, '後ろが「人・範囲」→ to', 13, C.blue, 'middle', true)],
    '〜に知られている ＝ to ＋ 知っている人', BLUE),
  S('なぜ to を使うのでしょう。「だれに知られているか」は、知っている相手に向かう方向を表すからです。by ではなく to を使うので、His name is known by everyone. はことわざ以外では不自然です。',
    qa('「〜に知られている」は to？', '知っている相手（人・範囲）に向かう to\n○ His name is known to everyone.\n× His name is known by everyone.', BLUE, 12),
    '知っている相手には to を使う', BLUE),
  S('be known for 〜 は「〜で有名だ」です。for の後ろには、有名になっている理由・特徴が来ます。This town is known for its hot springs.（この町は温泉で有名だ）。be famous for 〜 と同じ意味です。',
    [lb(160, 14, 'be known for 〜', 14, C.green, 'middle', true), big('This town is known for its hot springs.', 28, 34, GREEN, 12), big('Kyoto is known for its old temples.', 70, 34, GREEN, 12), lb(160, 126, '＝ be famous for 〜', 13, C.green, 'middle', true)],
    '〜で有名だ ＝ for ＋ 理由・特徴', GREEN),
  S('be known as 〜 は「〜として知られている」です。as の後ろには、肩書き・呼び名・立場が来ます。He is known as a great writer.（彼は偉大な作家として知られている）',
    [lb(160, 14, 'be known as 〜', 14, C.red, 'middle', true), big('He is known as a great writer.', 28, 34, RED, 13), big('This area is known as the Kitchen of Japan.', 70, 34, RED, 12), lb(160, 126, 'as の後ろ ＝ 肩書き・呼び名', 13, C.red, 'middle', true)],
    '〜として知られている ＝ as ＋ 肩書き', RED),
  S('では、for と as はどう見分けるのでしょう。その名詞が主語そのものを言いかえているかで決まります。「彼＝作家」なら as、「彼≠小説（小説は彼の作品・特徴）」なら for です。',
    [bx(12, 8, 296, 30, 'なぜ？ for と as はどう見分ける？', PURPLE[0], PURPLE[1], 12), big('He is known as a writer.\n彼 ＝ 作家（主語を言いかえている）', 46, 44, RED, 12), big('He is known for his novels.\n彼 ≠ 小説（理由・特徴）', 98, 44, GREEN, 12)],
    '主語 ＝ 名詞 なら as、そうでなければ for', PURPLE),
  S('見分けの目安をまとめます。後ろが「人」なら to、「特徴・理由」なら for、「呼び名・肩書き」なら as です。この対応を覚えておけば、空所補充で迷いません。',
    [...grid([['前置詞', '後ろに来るもの', '例'], ['to', '知っている人・範囲', 'known to everyone'], ['for', '有名な理由・特徴', 'known for its beaches'], ['as', '呼び名・肩書き', 'known as Mika']], 12, [50, 120, 130], 30, MAIN, BLUE, 11)],
    'to ＝ 人、for ＝ 理由、as ＝ 呼び名', MAIN),
  S('例外です。be known by 〜 は「〜によって判断される」という特別な用法で、ことわざに出てきます。A man is known by the company he keeps.（人は付き合う仲間で判断される）。ふつうの「知られている」には使いません。',
    [lb(160, 14, '特別な用法：be known by', 13, C.purple, 'middle', true), big('A man is known by the company he keeps.\n人は付き合う仲間で判断される', 28, 50, PURPLE, 12), big('× His name is known by everyone.\n○ His name is known to everyone.', 88, 50, GRAY, 12)],
    'by はことわざだけ。ふつうは to', PURPLE),
], 'be known の使い分け');

// ── s142 受動態⑪：with をとる受動態・感情 ──
const u142 = show([
  S('受動態の後ろは、いつも by とは限りません。The mountain is covered ___ snow. の空所は by でしょうか、with でしょうか。「何でおおわれているか」を言うときは with を使います。',
    [big('The mountain is covered ___ snow.', 20, 38, BLUE, 14), ...sent([['by（動作をした人）', GRAY], ['with（中身・材料・道具）', GREEN]], 76, 12, 40), lb(160, 138, '雪は動作主ではなく「おおっているもの」', 12, C.ink, 'middle')],
    '山を「おおっているもの」は with', BLUE),
  S('なぜ by ではなく with なのでしょう。by は「動作をした人・もの」専用で、with は「中身・材料・道具」を表すからです。雪はだれかが山にしたのではなく、山をおおっているものなので with になります。',
    qa('by でなく with なの？', 'by ＝ 動作をした人・もの（動作主）\nwith ＝ 中身・材料・道具\n雪は「おおっているもの」→ with', GREEN),
    'with は「中身・材料・道具」', GREEN),
  S('be covered with 〜 は「〜でおおわれている」です。The mountain is covered with snow. / The table was covered with a white cloth. / The ground was covered with fallen leaves.',
    [lb(160, 14, 'be covered with 〜', 14, C.blue, 'middle', true), big('The mountain is covered with snow.', 28, 30, BLUE, 12), big('The table was covered with a white cloth.', 64, 30, BLUE, 12), big('The ground was covered with fallen leaves.', 100, 30, BLUE, 12)],
    '〜でおおわれている', BLUE),
  S('be filled with 〜 は「〜でいっぱいだ」で、be full of 〜 と同じ意味です。The box was filled with old books. = The box was full of old books.',
    [lb(160, 14, 'be filled with 〜 ＝ be full of 〜', 14, C.green, 'middle', true), big('The box was filled with old books.', 30, 32, GREEN, 13), lb(160, 80, '＝', 16, C.main, 'middle', true), big('The box was full of old books.', 92, 32, GREEN, 13)],
    '〜でいっぱいだ', GREEN),
  S('with のグループは他にもあります。be pleased with 〜（〜を喜ぶ・気に入る）、be satisfied with 〜（〜に満足する）、be crowded with 〜（〜で混雑している）。また be caught in 〜 は「〜にあう」で、in を使います。',
    [...grid([['表現', '意味', '例'], ['pleased with', '〜を喜ぶ', 'pleased with the present'], ['satisfied with', '〜に満足する', 'satisfied with his job'], ['crowded with', '〜で混雑している', 'crowded with people'], ['caught in', '〜にあう', 'caught in a shower']], 12, [76, 94, 130], 28, MAIN, BLUE, 11)],
    'with ＝ 中身・材料、caught は in', MAIN),
  S('感情を表す受動態もあります。be surprised at 〜（〜に驚く）、be excited about 〜（〜に興奮する）、be interested in 〜（〜に興味がある）、be worried about 〜（〜を心配する）。I was surprised at the news.',
    [...grid([['表現', '意味'], ['surprised at', '〜に驚く'], ['excited about', '〜に興奮する'], ['interested in', '〜に興味がある'], ['worried about', '〜を心配する']], 12, [130, 150], 26, PURPLE, PURPLE, 12)],
    'I was surprised at the news.', PURPLE),
  S('なぜ「驚かされた」ではなく「驚いた」と訳すのでしょう。これらは be動詞＋過去分詞の形をしていますが、過去分詞が形容詞のように働いているからです。「〜される」と訳すと不自然になるので、能動的に「驚く」「興味がある」と訳します。',
    qa('「驚かされた」と訳さないの？', '過去分詞 surprised / interested が\n形容詞のように働いている\n→「驚く」「興味がある」と能動的に訳す', PURPLE, 12),
    '感情は、日本語では能動的に訳す', PURPLE),
  S('もう一つ、be born（生まれる）も受動態の形で覚えます。I was born in Osaka in 2010. × I born や × I am born in 2010 は誤りです。前置詞ごとにグループで覚えましょう。',
    [big('I was born in Osaka in 2010.', 10, 28, BLUE, 13), ...grid([['前置詞', '表現'], ['with', 'covered・filled・pleased・satisfied・crowded'], ['at', 'surprised'], ['in', 'interested・caught'], ['about', 'excited・worried']], 46, [60, 240], 22, MAIN, YELLOW, 11)],
    '前置詞ごとにグループで覚える', MAIN),
], 'with をとるグループと感情の受動態');

// ── s143 受動態⑫：be made of / from / into ──
const u143 = show([
  S('「この机は木でできている」と「ワインはぶどうから作られる」。日本語ではどちらも「〜でできている」ですが、英語では made の後ろの前置詞が of と from に分かれます。',
    [big('This desk is made ___ wood.', 14, 34, BLUE, 14), big('Wine is made ___ grapes.', 56, 34, RED, 14), lb(160, 118, 'of か from か → 材料が見てわかるかで決まる', 12, C.ink, 'middle', true)],
    'made のあとの前置詞は、材料しだい', MAIN),
  S('be made of 〜 は、材料が見てわかるときに使います。形が変わっていないので、できあがったものを見て材料を当てられます。desk は wood、bridge は stone、cups は glass、bag は leather です。',
    [lb(160, 14, 'be made of 〜（材料が見てわかる）', 13, C.blue, 'middle', true), ...grid([['できあがったもの', '材料'], ['This desk', 'wood（木）'], ['The bridge', 'stone（石）'], ['These cups', 'glass（ガラス）'], ['This bag', 'leather（革）']], 28, [150, 140], 24, BLUE, BLUE, 12)],
    '形が残る → of', BLUE),
  S('be made from 〜 は、材料が見てもわからないときに使います。Wine is made from grapes. / Butter is made from milk. / Paper is made from wood. / Cheese is made from milk.',
    [lb(160, 14, 'be made from 〜（材料が見てわからない）', 13, C.red, 'middle', true), ...grid([['できあがったもの', '材料'], ['Wine', 'grapes（ぶどう）'], ['Butter', 'milk（牛乳）'], ['Paper', 'wood（木）'], ['Cheese', 'milk（牛乳）']], 28, [150, 140], 24, RED, RED, 12)],
    '形が消える → from', RED),
  S('なぜ、of と from を分けるのでしょう。木の机は物理的な変化だけなので見れば木とわかりますが、ワインは化学的に変化して、見ても元がぶどうとはわからないからです。判定は「できあがったものを見て、材料が当てられるか」です。',
    qa('of と from を分けるの？', '木の机 → 見れば木とわかる → of\nワイン → 液体を見てもぶどうとわからない → from\n「見て材料を当てられるか」で判定', PURPLE, 12),
    '見て当てられる → of／当てられない → from', PURPLE),
  S('紙と木の関係はどうでしょう。紙を見ても木とはわからないので、Paper is made from wood. と from を使います。木をけずって作る机は of、木が別の物に変わる紙は from です。',
    [...sent([['wood', GREEN], ['→', GRAY], ['desk', BLUE]], 18, 14, 34), lb(160, 66, '形が残る → made of', 12, C.blue, 'middle', true), ...sent([['wood', GREEN], ['→', GRAY], ['paper', RED]], 90, 14, 34), lb(160, 138, '元が見えなくなる → made from', 12, C.red, 'middle', true)],
    '同じ wood でも、of と from に分かれる', MAIN),
  S('be made into 〜 は「〜に作りかえられる」です。材料のほうを主語にするので into になります。Grapes are made into wine. / Milk is made into butter and cheese. of / from の文をひっくり返した形です。',
    [...sent([['Wine', RED], ['is made from', BLUE], ['grapes.', GREEN]], 14, 12, 32), ar(160, 50, 160, 68, C.main), ...sent([['Grapes', GREEN], ['are made into', BLUE], ['wine.', RED]], 72, 12, 32), lb(160, 126, '材料が主語 ＝ into', 13, C.main, 'middle', true)],
    '材料が主語のとき ＝ made into', MAIN),
  S('made には材料以外の使い方もあります。be made in 〜（産地）：This car is made in Japan. be made by 〜（作った人）：This cake was made by my sister. be made up of 〜（成り立っている）：Water is made up of hydrogen and oxygen.',
    [...grid([['表現', '後ろに来るもの', '例'], ['in', '国・地域', 'made in Japan'], ['by', '作った人', 'made by my sister'], ['up of', '構成要素', 'made up of 30 students']], 12, [56, 90, 154], 30, MAIN, BLUE, 11), lb(160, 138, '× made in wood ／ × made of Japan', 12, C.red, 'middle')],
    '後ろが材料か、場所か、人かで決める', BLUE),
  S('注意です。consist of 〜（〜から成る）は made up of 〜 とほぼ同じ意味ですが、consist は自動詞なので受動態にしません。Our class consists of thirty students. が正しく、× is consisted of は誤りです。',
    [big('○ Our class consists of thirty students.', 18, 34, GREEN, 13), big('× Our class is consisted of thirty students.', 64, 34, RED, 13), lb(160, 122, 'consist は自動詞 → 受動態にしない', 12, C.red, 'middle', true)],
    'consist of は、受動態にしない', RED),
  S('まとめです。of は形が残る材料、from は形が消える材料、into は材料が主語、in は産地、by は作った人、up of は構成要素です。代表例の「木の机は of、ワインは from、日本製は in、作った人は by」を丸ごと覚えるのが確実です。',
    [...grid([['前置詞', '意味'], ['of', '材料（見てわかる）'], ['from', '材料（見てわからない）'], ['into', '材料が主語 → 〜に作りかえられる'], ['in / by / up of', '産地 / 作った人 / 構成要素']], 12, [100, 200], 26, MAIN, YELLOW, 12)],
    '4つの代表例を丸ごと覚える', MAIN),
], 'be made of / from / into');

// ── s144 受動態⑬：SVOO の受動態 ──
const u144 = show([
  S('My teacher gave me a book.（先生は私に本をくれた）の文は、動詞 gave のあとに me（人）と a book（物）の2つの目的語が並びます。この形を SVOO といいます。',
    [...sent([['My teacher', BLUE], ['gave', RED], ['me', GREEN], ['a book.', YELLOW]], 28, 14, 38), lb(60, 86, '主語 S', 11, C.blue, 'middle'), lb(152, 86, '動詞 V', 11, C.red, 'middle'), lb(218, 86, '目的語 O', 11, C.green, 'middle'), lb(276, 86, '目的語 O', 11, C.main, 'middle'), lb(160, 122, 'O が2つある文の受動態は…', 13, C.ink, 'middle', true)],
    'SVOO ＝ 目的語が2つある文', MAIN),
  S('なぜ、受動態が2通り作れるのでしょう。受動態は目的語を主語にして作りますが、SVOO には目的語が2つあり、どちらも主語にできるからです。',
    qa('受動態が2通りできるの？', '目的語が2つ（me と a book）\n→ どちらを主語にしてもよい\n① 人を主語 ／ ② 物を主語', BLUE),
    '目的語が2つ → 主語の選び方も2通り', BLUE),
  S('①人を主語にする形です。I was given a book by my teacher.（私は先生から本を与えられた）。残った目的語 a book は、そのまま be動詞＋過去分詞の後ろに置きます。',
    [lb(160, 14, '① 人を主語に', 14, C.blue, 'middle', true), ...sent([['I', BLUE], ['was given', RED], ['a book', YELLOW], ['by my teacher.', GRAY]], 34, 12, 34), lb(160, 92, '残った a book は、そのまま後ろへ', 12, C.ink, 'middle'), lb(160, 118, 'He showed us some pictures.', 12, C.gray, 'middle'), lb(160, 138, '→ We were shown some pictures by him.', 12, C.ink, 'middle')],
    '人が主語 → 物はそのまま', BLUE),
  S('②物を主語にする形です。A book was given to me by my teacher.（1冊の本が先生から私に与えられた）。残った目的語 me には前置詞 to を付けます。ここを忘れる誤りが多い点です。',
    [lb(160, 14, '② 物を主語に', 14, C.green, 'middle', true), ...sent([['A book', YELLOW], ['was given', RED], ['to me', GREEN], ['by my teacher.', GRAY]], 34, 12, 34), lb(160, 92, '残った me には to を付ける', 12, C.red, 'middle', true), lb(160, 118, 'They sent him a letter.', 12, C.gray, 'middle'), lb(160, 138, '→ A letter was sent to him.', 12, C.ink, 'middle')],
    '物が主語 → 人に to を付ける', GREEN),
  S('なぜ to が必要なのでしょう。もとの文は He gave a book to me. とも言えるからです。物を主語にした受動態は、この「物 ＋ 前置詞 ＋ 人」の形から作るので、残った人に前置詞が付きます。',
    qa('残った人に to を付けるの？', 'gave me a book ＝ gave a book to me\n物を主語にすると「物 ＋ to ＋ 人」の形\n→ A book was given to me.', GREEN, 12),
    '物 ＋ to ＋ 人 の形から作る', GREEN),
  S('この前置詞は to か for か、動詞ごとに決まっています。相手に届く動作の give・send・show・teach・tell・lend は to、相手のためにする動作の buy・make・cook・find・get は for です。',
    [...grid([['to をとる動詞', 'for をとる動詞'], ['give（与える）', 'buy（買う）'], ['send（送る）', 'make（作る）'], ['show（見せる）', 'cook（料理する）'], ['teach / tell / lend', 'find / get / choose']], 12, [150, 150], 26, MAIN, BLUE, 12)],
    '相手に届く動作 → to／相手のため → for', BLUE),
  S('for 型の動詞では、人を主語にした受動態は、ふつう作りません。× I was bought a bike by my father. は不自然で、A bike was bought for me by my father. と言います。',
    qa('buy・make 型は人を主語にしないの？', 'for は「〜のために」の意味\n相手が直接その動作を受けているわけではない\n→ A bike was bought for me by my father.', RED, 12),
    'for 型は、物を主語にして作る', RED),
  S('まとめです。SVOO の受動態は、①どちらを主語にするか、②物を主語にしたとき残った人に to か for を付けるか、の2段階です。動詞のグループ分けを先に覚えるのが近道です。',
    [bx(10, 12, 140, 40, '人が主語\nI was given a book.', C.blue, FILL.blue, 11), bx(170, 12, 140, 40, '物が主語\nA book was given to me.', C.green, FILL.green, 11), lb(160, 76, '① give / send / show / teach / tell / lend → どちらも可（to）', 11, C.ink, 'middle'), lb(160, 100, '② buy / make / cook / find / get → 物が主語（for）', 11, C.ink, 'middle'), lb(160, 128, '× A book was given me.（to を落とさない）', 12, C.red, 'middle', true)],
    '主語の選び方 → to か for か', MAIN),
], 'SVOO の受動態は 2 通り');

// ── s145 受動態⑭：SVOC の受動態 ──
const u145 = show([
  S('They call the dog Pochi.（彼らはその犬をポチと呼ぶ）。目的語（O）のあとに補語（C）が付く形を SVOC といいます。補語は、目的語がどんなものか、何と呼ばれるかを説明する語です。',
    [...sent([['They', BLUE], ['call', RED], ['the dog', GREEN], ['Pochi.', YELLOW]], 28, 14, 38), lb(66, 86, '主語 S', 11, C.blue, 'middle'), lb(124, 86, '動詞 V', 11, C.red, 'middle'), lb(200, 86, '目的語 O', 11, C.green, 'middle'), lb(272, 86, '補語 C', 11, C.main, 'middle'), lb(160, 122, 'the dog ＝ Pochi（O と C は＝の関係）', 12, C.ink, 'middle', true)],
    'SVOC ＝ 目的語 ＋ 補語', MAIN),
  S('受動態にすると、目的語だけが主語になり、補語はその場に残ります。The dog is called Pochi.（その犬はポチと呼ばれている）。Pochi は動かしません。',
    [...sent([['They call', GRAY], ['the dog', GREEN], ['Pochi.', YELLOW]], 20, 13, 34), ar(160, 58, 160, 78, C.main), ...sent([['The dog', GREEN], ['is called', RED], ['Pochi.', YELLOW]], 82, 14, 36), lb(160, 134, '目的語だけが前に出る', 12, C.green, 'middle', true)],
    '目的語は主語へ、補語は残る', GREEN),
  S('なぜ補語を動かさないのでしょう。補語は、主語になった目的語の名前・状態を説明する語だからです。the dog が主語になっても、Pochi は「その犬の名前」を説明し続けます。補語を主語にして × Pochi is called the dog. とするのは誤りです。',
    qa('補語を動かさないの？', '補語 ＝ 目的語の名前・状態を説明する語\nthe dog ＝ Pochi の関係は変わらない\n× Pochi is called the dog.', RED, 12),
    '補語を主語にしてはいけない', RED),
  S('name・elect でも同じです。We named the baby Kate. は The baby was named Kate.、They elected him captain.（彼らは彼をキャプテンに選んだ）は He was elected captain. になります。',
    [big('We named the baby Kate.\n→ The baby was named Kate.', 14, 46, BLUE, 13), big('They elected him captain.\n→ He was elected captain.', 70, 46, GREEN, 13), lb(160, 134, '補語（Kate / captain）はそのまま', 12, C.ink, 'middle')],
    'name・elect も、補語は残す', BLUE),
  S('make（〜を…にする）と keep（〜を…のままにしておく）の補語は形容詞です。The news made me happy. は I was made happy by the news.、We must keep the room clean. は The room must be kept clean. となります。',
    [big('The news made me happy.\n→ I was made happy by the news.', 14, 46, MAIN, 12), big('We must keep the room clean.\n→ The room must be kept clean.', 70, 46, MAIN, 12), lb(160, 134, '補語は形容詞でも名詞でもよい', 12, C.ink, 'middle')],
    '補語は形容詞でもそのまま', MAIN),
  S('入試の最頻出は What is this called in English?（これは英語で何と呼ばれますか）です。答えは It is called a compass. 能動態の What do you call this in English? — We call it a compass. とセットで覚えます。',
    [big('What is this called in English?\n— It is called a compass.', 12, 46, BLUE, 12), big('What do you call this in English?\n— We call it a compass.', 68, 46, GRAY, 12), lb(160, 130, '受動態と能動態の2通りをセットで', 12, C.main, 'middle', true)],
    'What is this called in English?', BLUE),
  S('使役の make は、原形が to 不定詞になります。He made me clean the room. は I was made to clean the room by him. 能動態の原形が、受動態では to ＋ 原形になる決まりです。see・hear も同じです。',
    [...sent([['He made me', GRAY], ['clean', RED], ['the room.', GRAY]], 14, 12, 30), ar(160, 48, 160, 64, C.main), ...sent([['I was made', GRAY], ['to clean', RED], ['the room by him.', GRAY]], 68, 12, 30), lb(160, 118, 'I saw him enter the room.', 12, C.gray, 'middle'), lb(160, 138, '→ He was seen to enter the room.', 12, C.ink, 'middle')],
    '原形が to ＋ 原形 に変わる', RED),
  S('let は受動態にしません。let ＋ O ＋ 原形（〜させてやる）は be allowed to 〜 で言いかえます。They let me go out. は I was allowed to go out. となります。× I was made clean the room. も誤りです。',
    [big('They let me go out.\n→ I was allowed to go out.', 14, 46, GREEN, 13), big('× I was made clean the room.\n○ I was made to clean the room.', 70, 46, RED, 12), lb(160, 134, 'let の受動態 ＝ be allowed to', 12, C.green, 'middle', true)],
    'let は、be allowed to で言いかえる', GREEN),
  S('まとめです。SVOC の受動態は「目的語だけが前に出て、補語は取り残される」と覚えます。make などの使役では、原形が to 不定詞になる点が最大のポイントです。',
    [...row(['目的語\nが主語に', 'be ＋ 過去分詞', '補語は\nそのまま'], 16, MAIN, 12, 52), lb(160, 98, 'The dog is called Pochi.', 13, C.ink, 'middle', true), lb(160, 120, 'I was made to clean the room.', 13, C.ink, 'middle', true)],
    '補語は動かさない、原形は to ＋ 原形', MAIN),
], 'SVOC の受動態');

export const XF_KED_FIGURES: Record<string, DiagramFigure> = {
  'xf_koko_eigo_s133': u133,
  'xf_koko_eigo_s134': u134,
  'xf_koko_eigo_s135': u135,
  'xf_koko_eigo_s136': u136,
  'xf_koko_eigo_s139': u139,
  'xf_koko_eigo_s140': u140,
  'xf_koko_eigo_s141': u141,
  'xf_koko_eigo_s142': u142,
  'xf_koko_eigo_s143': u143,
  'xf_koko_eigo_s144': u144,
  'xf_koko_eigo_s145': u145,
};

export const XF_KED_SECTIONS: Record<string, string> = {
  'koko_eigo_s133#0': 'xf_koko_eigo_s133',
  'koko_eigo_s134#0': 'xf_koko_eigo_s134',
  'koko_eigo_s135#0': 'xf_koko_eigo_s135',
  'koko_eigo_s136#0': 'xf_koko_eigo_s136',
  'koko_eigo_s139#0': 'xf_koko_eigo_s139',
  'koko_eigo_s140#0': 'xf_koko_eigo_s140',
  'koko_eigo_s141#0': 'xf_koko_eigo_s141',
  'koko_eigo_s142#0': 'xf_koko_eigo_s142',
  'koko_eigo_s143#0': 'xf_koko_eigo_s143',
  'koko_eigo_s144#0': 'xf_koko_eigo_s144',
  'koko_eigo_s145#0': 'xf_koko_eigo_s145',
};
