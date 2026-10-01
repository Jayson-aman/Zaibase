// 中学受験 英語（小4〜小6）38単元のうち30単元の「動く図解スライド」。
// 「なぜ？」の連鎖で、7枚以上。単元の節（section）ごとに 1 枚の図解をひもづける。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, show, fresh, cover, flow } from './diagram-kit';

type Col = [string, string];
const BLUE: Col = [C.blue, FILL.blue];
const GREEN: Col = [C.green, FILL.green];
const RED: Col = [C.red, FILL.red];
const MAIN: Col = [C.main, FILL.warm];
const PURPLE: Col = [C.purple, FILL.purple];
const GRAY: Col = [C.gray, FILL.gray];
const YELLOW: Col = [C.main, FILL.yellow];

// 文の部品の色：S 主語（青）／V 動詞（赤）／O 目的語など（緑）／M 説明（灰）／X まちがい（黄）／P 紫／N 茶
const K: Record<string, Col> = { S: BLUE, V: RED, O: GREEN, M: GRAY, X: YELLOW, P: PURPLE, N: MAIN };

const units = (t: string) => [...t].reduce((u, ch) => u + (ch.charCodeAt(0) < 256 ? 0.55 : 1), 0);

// 語（かたまり）を小さな箱にして横に並べる。はみ出したら次の行へ。
const chips = (items: [string, string][], x0: number, y0: number, o?: { size?: number; h?: number; gap?: number; maxX?: number }): DiagramElement[] => {
  const size = o?.size ?? 11;
  const h = o?.h ?? 22;
  const gap = o?.gap ?? 4;
  const maxX = o?.maxX ?? 312;
  let x = x0;
  let y = y0;
  const out: DiagramElement[] = [];
  for (const [t, k] of items) {
    const w = Math.max(18, Math.ceil(units(t) * size * 0.92 + 9));
    if (x + w > maxX && x > x0) {
      x = x0;
      y += h + gap;
    }
    const c = K[k] ?? GRAY;
    out.push(bx(x, y, w, h, t, c[0], c[1], size));
    x += w + gap;
  }
  return out;
};

const cap = (t: string, c: Col = BLUE, size = 12): DiagramElement => {
  const n = t.split('\n').length;
  return bx(14, 162, 292, 14 + 15 * n, t, c[0], c[1], size);
};

// 1枚のスライド＝まっさらな図＋下の帯
const FS = (note: string, top: DiagramElement[], capText: string, c: Col = BLUE, size = 12) => ({
  note,
  add: fresh(...top, cap(capText, c, size)),
});
// 前のスライドの図を残したまま、下の帯だけ書きかえる
const AS = (note: string, add: DiagramElement[], capText: string, c: Col = BLUE, size = 12) => ({
  note,
  add: [cover(0, 160, 320, 80), ...add, cap(capText, c, size)],
});

// 「なぜ？」の問い → 答え、の1組
const qa = (q: string, a: string, c: Col = BLUE, aSize = 13): DiagramElement[] => [
  bx(12, 8, 296, 40, '❓ ' + q, PURPLE[0], PURPLE[1], 12),
  ar(160, 50, 160, 66, PURPLE[0]),
  bx(12, 68, 296, 76, a, c[0], c[1], aSize),
];

// 上の見出し
const hd = (t: string, size = 13, color: string = C.ink): DiagramElement => lb(160, 16, t, size, color, 'middle', true);

// 横一列の箱（矢印つき）
const row = (labels: string[], y: number, c: Col = MAIN, size = 12, h = 44, gap = 14): DiagramElement[] =>
  flow(labels, y, { h, color: c[0], fill: c[1], size, gap }).flat();

// 2列×n行の箱
const grid = (cells: [string, Col][], y0: number, h = 34, size = 11, cols = 2): DiagramElement[] => {
  const w = (304 - 8 * (cols - 1)) / cols;
  return cells.map(([t, c], i) => bx(8 + (i % cols) * (w + 8), y0 + Math.floor(i / cols) * (h + 6), w, h, t, c[0], c[1], size));
};

// 左右に「まちがい／正しい」を並べる
const vs = (bad: string, good: string, y = 40, h = 50, size = 11): DiagramElement[] => [
  bx(8, y, 148, h, '✕ ' + bad, C.red, FILL.red, size),
  bx(164, y, 148, h, '◯ ' + good, C.green, FILL.green, size),
];

const XF: Record<string, DiagramFigure> = {};

// 表（行ごとに、同じ幅の箱を並べる）。先頭行を見出しにできる。
const tbl = (rows: string[][], y0: number, o?: { h?: number; size?: number; hdr?: boolean; x0?: number; w?: number; colors?: Col[] }): DiagramElement[] => {
  const h = o?.h ?? 22;
  const size = o?.size ?? 11;
  const x0 = o?.x0 ?? 8;
  const total = o?.w ?? 304;
  const out: DiagramElement[] = [];
  rows.forEach((r, i) => {
    const gap = 4;
    const w = (total - gap * (r.length - 1)) / r.length;
    r.forEach((t, j) => {
      const isH = o?.hdr && i === 0;
      const c = isH ? GRAY : (o?.colors?.[j] ?? MAIN);
      out.push(bx(x0 + j * (w + gap), y0 + i * (h + 4), w, h, t, c[0], c[1], size));
    });
  });
  return out;
};

// ── s336 関係詞の総合 ──
XF['xf_eigo_s336'] = show([
  FS('空所（くうしょ）の問題です。I have a friend (　) can play the guitar. who・which・where・when のどれを入れるでしょう。当てずっぽうではなく、順番に調べれば、かならず一つに決まります。',
    [hd('どれを入れる？'), ...chips([['I have a friend', 'S'], ['(　)', 'X'], ['can play the guitar.', 'M']], 8, 36, { size: 12, h: 28 }), ...row(['who', 'which', 'where', 'when'], 94, MAIN, 14, 36, 12)],
    '前の名詞 → あとの文、の順に調べる', BLUE),
  FS('❓まず、who のあとの文は、なぜ「主語がない」形になるのでしょう。もとは二つの文だったからです。I have a friend.（わたしには友だちがいる）と She can play the guitar.（その子はギターをひける）。',
    [hd('もとは二つの文'), bx(8, 34, 304, 34, 'I have a friend.', C.blue, FILL.blue, 14), bx(8, 80, 304, 34, 'She can play the guitar.', C.green, FILL.green, 14), lb(160, 132, 'She ＝ 前の a friend のこと', 12, C.gray)],
    '二つの文に、同じ人が出てくる', BLUE),
  FS('答えです。二つめの文の She（主語）を who に変えて、前の文にくっつけます。She の場所は who が受けもつので、あとの文には主語がなくなります。can play the guitar からはじまるのは、そのためです。',
    [hd('She が who に変身する'), bx(8, 30, 304, 30, 'I have a friend.  She can play the guitar.', C.gray, FILL.gray, 12), ar(160, 62, 160, 82, C.red), ...chips([['I have a friend', 'S'], ['who', 'V'], ['can play the guitar.', 'M']], 8, 88, { size: 12, h: 28 }), lb(160, 136, 'who の後ろに主語がない', 12, C.red, 'middle', true)],
    '主語だった語を who にかえた → 主語が欠ける', RED),
  FS('目的語（もくてきご：「〜を」にあたる語）の場合も同じです。This is the camera. My father bought it last year. の it（目的語）を which にして前に出すと、bought のあとに目的語がなくなります。',
    [hd('it が which に変身する'), bx(8, 28, 304, 30, 'This is the camera.  My father bought it last year.', C.gray, FILL.gray, 11), ar(160, 60, 160, 78, C.red), ...chips([['the camera', 'S'], ['which', 'V'], ['my father bought', 'M'], ['last year.', 'M']], 8, 84, { size: 12, h: 28 }), lb(160, 134, 'bought の後ろに「〜を」がない', 12, C.red, 'middle', true)],
    '目的語だった語を which にかえた → 目的語が欠ける', RED),
  FS('❓では、where のあとの文は、なぜ「そろっている」のでしょう。I visited the city. My aunt lives there. の there は「そこに」という副詞（ふくし）で、主語でも目的語でもないからです。',
    [hd('there は主語でも目的語でもない'), bx(8, 28, 304, 30, 'I visited the city.  My aunt lives there.', C.gray, FILL.gray, 12), ar(160, 60, 160, 78, C.green), ...chips([['the city', 'S'], ['where', 'V'], ['my aunt lives.', 'M']], 40, 84, { size: 13, h: 30 }), lb(160, 136, 'my aunt（主語）＋ lives（動詞）がそろっている', 11, C.green, 'middle', true)],
    '副詞を where にかえた → あとの文は完全', GREEN),
  FS('これで見分けられます。「あとの文に欠けているところがあるか」を見ます。(　) can play ... は主語がない → who。(　) I bought ... は目的語がない → which。(　) we have lunch は欠けていない → where。',
    [hd('あとの文を見る'), ...tbl([['あとの文', '欠けているもの', '入れる語'], ['(　) can play…', '主語がない', 'who'], ['(　) I bought…', '目的語がない', 'which'], ['(　) we have…', 'なにも欠けない', 'where']], 30, { h: 26, size: 11, hdr: true })],
    '欠けている ＝ 関係代名詞 ／ 欠けない ＝ 関係副詞', MAIN),
  FS('❓二つの文を一つにするとき、もとの語（She・it・there）をなぜ消すのでしょう。関係詞がその語の代わりをしているからです。消さないと同じ意味の語が二つになってしまいます。',
    [hd('消し忘れに注意'), ...vs('the camera which\nmy father bought it', 'the camera which\nmy father bought', 40, 56, 12), lb(160, 118, 'which が it の代わり。it は消す', 12, C.red, 'middle', true)],
    '置きかえた語は、かならず消す', RED),
  FS('前置詞（ぜんちし）が残るときもあります。This is the park. I often play in it. は which を使うと in が文の最後に残ります。in it をまとめて where にすれば This is the park where I often play. となります。',
    [hd('in it は where にまとめられる'), bx(8, 28, 304, 30, 'This is the park.  I often play in it.', C.gray, FILL.gray, 12), bx(8, 70, 304, 30, 'This is the park which I often play in.', C.blue, FILL.blue, 12), bx(8, 108, 304, 30, 'This is the park where I often play.', C.green, FILL.green, 12)],
    'in it ＝ where （どちらも正しい）', GREEN),
  FS('練習です。I remember the day (　) I first met her. あとの文 I first met her は主語も目的語もそろっています。完全なので関係代名詞ではありません。先行詞（せんこうし）が the day（時）なので when を入れます。',
    [hd('練習'), ...chips([['I remember the day', 'S'], ['(　)', 'X'], ['I first met her.', 'M']], 8, 34, { size: 12, h: 28 }), ar(160, 66, 160, 84, C.green), bx(30, 88, 260, 46, 'あとが完全 ＋ the day（時）\n→ when', C.green, FILL.green, 14)],
    'あとの文が完全 → 関係副詞 when', GREEN),
  FS('まとめです。①前の名詞が人・もの・場所・時のどれかを見る。②あとの文が欠けているか見る。③欠けていれば who・which、欠けていなければ where・when。④置きかえた語は消す。',
    [hd('まとめ'), ...grid([['① 前の名詞は\n人・もの・場所・時？', BLUE], ['② あとの文は\n欠けている？', GREEN], ['③ 欠ける→who/which\n完全→where/when', RED], ['④ 置きかえた語は\nかならず消す', MAIN]], 30, 52, 11)],
    '前の名詞 → あとの文 の順で、かならず決まる', MAIN),
], '関係詞は「前の名詞 → あとの文」で決める');

// ── s338 受動態②：過去分詞 ──
XF['xf_eigo_s338'] = show([
  FS('受動態（じゅどうたい：「〜される」の言い方）は be動詞＋過去分詞（かこぶんし）で作ります。This letter was written by Aya.（この手紙はアヤによって書かれた）の written が過去分詞です。',
    [hd('be動詞 ＋ 過去分詞'), ...chips([['This letter', 'S'], ['was', 'V'], ['written', 'O'], ['by Aya.', 'M']], 12, 40, { size: 13, h: 30 }), lb(160, 98, '「〜される」の形', 13, C.gray), lb(160, 120, 'write → wrote → written', 14, C.green, 'middle', true)],
    '受動態 ＝ be動詞 ＋ 過去分詞', BLUE),
  FS('❓なぜ過去分詞を正確に覚えなければならないのでしょう。be動詞のあとには、かならず過去分詞を置くからです。過去形を置くと誤りです。This letter was wrote. ではなく was written です。',
    [hd('過去形を置くと誤り'), ...vs('was wrote', 'was written', 40, 50, 14), lb(160, 114, 'be動詞のあとは、かならず過去分詞', 13, C.red, 'middle', true)],
    '受動態の文で過去形を書くミスがいちばん多い', RED),
  FS('規則動詞（きそくどうし）は、過去形と過去分詞が同じ形です。-ed を付けるだけなので、覚えるのは楽です。play-played-played、use-used-used、clean-cleaned-cleaned、visit-visited-visited。',
    [hd('規則動詞は二つめと三つめが同じ'), ...tbl([['原形', '過去形', '過去分詞'], ['play', 'played', 'played'], ['use', 'used', 'used'], ['clean', 'cleaned', 'cleaned'], ['visit', 'visited', 'visited']], 28, { h: 20, size: 12, hdr: true })],
    '-ed を付ける仲間は、三つめも -ed', GREEN),
  FS('❓では、なぜ不規則動詞（ふきそくどうし）は一つずつ覚えるのでしょう。-ed をつけるきまりに従わず、形が変わる動詞だからです。まず三つとも形がちがうものから。write-wrote-written、speak-spoke-spoken、break-broke-broken。',
    [hd('三つとも形がちがう（1）'), ...tbl([['原形', '過去形', '過去分詞'], ['write', 'wrote', 'written'], ['speak', 'spoke', 'spoken'], ['break', 'broke', 'broken'], ['take', 'took', 'taken']], 28, { h: 20, size: 12, hdr: true, colors: [GRAY, MAIN, RED] })],
    '三つめは、二つめとちがう形', RED),
  FS('同じ仲間のつづきです。give-gave-given（あたえる）、know-knew-known（知っている）、see-saw-seen（見る）。三つめの形で、受動態の文を作ります。',
    [hd('三つとも形がちがう（2）'), ...tbl([['原形', '過去形', '過去分詞'], ['give', 'gave', 'given'], ['know', 'knew', 'known'], ['see', 'saw', 'seen']], 28, { h: 24, size: 12, hdr: true, colors: [GRAY, MAIN, RED] })],
    '例：The song was sung. ／ The car was driven.', RED),
  FS('まだあります。eat-ate-eaten（食べる）、sing-sang-sung（歌う）、drive-drove-driven（運転する）。English is spoken. や This cake was eaten. のように、三つめを使います。',
    [hd('三つとも形がちがう（3）'), ...tbl([['原形', '過去形', '過去分詞'], ['eat', 'ate', 'eaten'], ['sing', 'sang', 'sung'], ['drive', 'drove', 'driven']], 28, { h: 24, size: 12, hdr: true, colors: [GRAY, MAIN, RED] })],
    'ate と eaten、sang と sung をまちがえない', RED),
  FS('❓二つめと三つめが同じ仲間は、なぜ別にするのでしょう。こちらは三つのうち二つを覚えればいいので、少し楽だからです。build-built-built（建てる）、make-made-made（作る）、teach-taught-taught（教える）。',
    [hd('二つめと三つめが同じ（1）'), ...tbl([['原形', '過去形', '過去分詞'], ['build', 'built', 'built'], ['make', 'made', 'made'], ['teach', 'taught', 'taught']], 28, { h: 24, size: 12, hdr: true, colors: [GRAY, GREEN, GREEN] })],
    '過去形を覚えれば、過去分詞も同じ', GREEN),
  FS('こちらも同じ仲間です。buy-bought-bought（買う）、find-found-found（見つける）、send-sent-sent（送る）。This house was built by my uncle. のように、受動態でそのまま使えます。',
    [hd('二つめと三つめが同じ（2）'), ...tbl([['原形', '過去形', '過去分詞'], ['buy', 'bought', 'bought'], ['find', 'found', 'found'], ['send', 'sent', 'sent']], 28, { h: 24, size: 12, hdr: true, colors: [GRAY, GREEN, GREEN] })],
    '二つめと三つめは同じ形', GREEN),
  FS('三つとも同じ形の動詞もあります。put-put-put、cut-cut-cut、read-read-read。read だけは、つづりが同じでも発音がちがいます。原形は「リード」、過去形と過去分詞は「レッド」です。',
    [hd('三つとも同じ形'), ...tbl([['原形', '過去形', '過去分詞'], ['put', 'put', 'put'], ['cut', 'cut', 'cut'], ['read', 'read', 'read']], 28, { h: 22, size: 13, hdr: true, colors: [GRAY, BLUE, BLUE] }), lb(160, 138, 'read ＝ 原形は「リード」／あとの二つは「レッド」', 11, C.main, 'middle', true)],
    '形がかわらない仲間', BLUE),
  FS('確かめです。English is ( speak / spoken ) in many countries. be動詞 is のあとなので過去分詞の spoken。English is spoken in many countries.（英語は多くの国で話されている）。「be動詞のあとは過去分詞」と唱えます。',
    [hd('確かめ'), bx(8, 34, 304, 34, 'English is ( speak / spoken ) in many countries.', C.gray, FILL.gray, 12), ar(160, 70, 160, 88, C.green), bx(30, 92, 260, 40, 'English is spoken in many countries.', C.green, FILL.green, 13)],
    'be動詞のあとは、かならず過去分詞', GREEN),
], '受動態は be動詞 ＋ 過去分詞');

// ── s339 受動態③：助動詞 ──
XF['xf_eigo_s339'] = show([
  FS('助動詞（じょどうし：will・can・must など）といっしょに受動態（じゅどうたい）を作るときは「助動詞 ＋ be ＋ 過去分詞」の形になります。This song will be sung at the concert.（この歌はコンサートで歌われるでしょう）。',
    [hd('助動詞 ＋ be ＋ 過去分詞'), ...chips([['This song', 'S'], ['will', 'P'], ['be', 'V'], ['sung', 'O'], ['at the concert.', 'M']], 8, 42, { size: 12, h: 30 }), lb(160, 100, 'will＋be＋sung', 14, C.red, 'middle', true)],
    '助動詞のあとは「be ＋ 過去分詞」', BLUE),
  FS('❓なぜ is ではなく be なのでしょう。助動詞のあとの動詞は、かならず原形（げんけい：もとの形）だからです。be動詞の原形は be です。is や are や was は原形ではありません。',
    qa('助動詞のあとは、なぜ be？', '助動詞のあとの動詞は、かならず原形。\nbe動詞の原形は be。\nam / is / are / was は原形ではない。\nだから will be ... となる。', BLUE, 13),
    'be動詞の原形 ＝ be', PURPLE),
  FS('まちがいを見ましょう。This book will is sold. のように、助動詞のあとに is を置くのは誤りです。will be sold が正しい形です。can is seen も同じで、can be seen と書きます。',
    [hd('助動詞のあとに is は置けない'), ...vs('will is sold\ncan is seen', 'will be sold\ncan be seen', 40, 60, 13), lb(160, 122, '助動詞のあとは be', 13, C.red, 'middle', true)],
    '助動詞のあと ＝ 原形の be', RED),
  FS('can の例です。Mt. Fuji can be seen from here.（ここから富士山が見える）。can は「できる」で、ここでは「見られる」という受け身の意味になります。can ＋ be ＋ seen の順です。',
    [hd('can ＋ be ＋ 過去分詞'), ...chips([['Mt. Fuji', 'S'], ['can', 'P'], ['be', 'V'], ['seen', 'O'], ['from here.', 'M']], 8, 42, { size: 12, h: 30 }), lb(160, 100, 'see → saw → seen', 13, C.green, 'middle', true)],
    '「ここから見られる」＝ 見える', GREEN),
  FS('must と should の例です。The homework must be finished by tomorrow.（宿題は明日までに終えなければならない）。This room should be cleaned every day.（この部屋は毎日そうじされるべきだ）。形はどれも同じです。',
    [hd('must / should も同じ形'), bx(8, 30, 304, 38, 'The homework must be finished\nby tomorrow.', C.blue, FILL.blue, 12), bx(8, 76, 304, 38, 'This room should be cleaned\nevery day.', C.green, FILL.green, 12), lb(160, 134, '助動詞 ＋ be ＋ 過去分詞', 13, C.red, 'middle', true)],
    'どの助動詞でも「be ＋ 過去分詞」', BLUE),
  FS('否定文（ひていぶん）は、助動詞のあとに not を置きます。This song will not be sung at the concert.（この歌はコンサートで歌われないでしょう）。not は will のすぐ後ろ、be の前です。',
    [hd('否定文：助動詞のあとに not'), ...chips([['This song', 'S'], ['will', 'P'], ['not', 'X'], ['be', 'V'], ['sung', 'O'], ['at the concert.', 'M']], 6, 42, { size: 11, h: 30 }), lb(160, 102, 'not は will と be のあいだ', 13, C.red, 'middle', true)],
    '助動詞 ＋ not ＋ be ＋ 過去分詞', RED),
  FS('疑問文（ぎもんぶん）は、助動詞を主語の前に出します。Can Mt. Fuji be seen from here?（ここから富士山は見えますか）。答えは Yes, it can. または No, it can\'t. です。',
    [hd('疑問文：助動詞を前に出す'), bx(8, 30, 304, 34, 'Mt. Fuji can be seen from here.', C.gray, FILL.gray, 12), ar(160, 66, 160, 84, C.purple), bx(8, 88, 304, 34, 'Can Mt. Fuji be seen from here?', C.purple, FILL.purple, 13), lb(160, 138, 'Yes, it can. ／ No, it can\'t.', 13, C.green, 'middle', true)],
    'can を主語の前へ ── do は使わない', PURPLE),
  FS('形だけ知っておく言い方もあります。This book has been read by many people.（この本は多くの人に読まれてきた）。has ＋ been ＋ 過去分詞の形です。上位校の長文で出ることがあります。',
    [hd('形だけ知っておこう'), ...chips([['This book', 'S'], ['has', 'P'], ['been', 'V'], ['read', 'O'], ['by many people.', 'M']], 6, 42, { size: 11, h: 30 }), lb(160, 102, 'has ＋ been ＋ 過去分詞', 13, C.main, 'middle', true), lb(160, 124, '（is being built は中学受験では覚えなくてよい）', 11, C.gray)],
    '「〜されてきた」という意味', MAIN),
], '助動詞のある受動態は「助動詞 ＋ be ＋ 過去分詞」');

// ── s340 受動態④：made of / from ──
XF['xf_eigo_s340'] = show([
  FS('「〜で作られている」は be made ... で表しますが、あとに続く前置詞（ぜんちし）が of・from・into・in と変わります。This desk is made of wood. と Paper is made from wood. では、同じ wood なのに of と from でちがいます。',
    [hd('同じ wood なのに…'), bx(8, 30, 304, 34, 'This desk is made of wood.', C.blue, FILL.blue, 13), bx(8, 72, 304, 34, 'Paper is made from wood.', C.green, FILL.green, 13), lb(160, 130, 'of と from のちがいは？', 13, C.red, 'middle', true)],
    '同じ木でも、of と from を使い分ける', BLUE),
  FS('❓なぜ使い分けるのでしょう。材料の形が見てわかるかどうかのちがいです。机（つくえ）は見れば木だとわかります。材料の形が残っているので of を使います。',
    [hd('見てわかる ＝ of'), bx(24, 34, 100, 60, 'wood\n（木）', C.main, FILL.warm, 14), ar(126, 64, 190, 64, C.blue), bx(194, 34, 100, 60, 'desk\n（つくえ）', C.blue, FILL.blue, 14), lb(160, 118, '見ても「木だ」とわかる → be made of', 13, C.blue, 'middle', true)],
    '材料の形が残っている → of', BLUE),
  FS('❓では、紙（かみ）はなぜ from なのでしょう。紙は木を細かくくだいて作るので、見ても木だとわかりません。材料の形が変わっているときは from を使います。Paper is made from wood.',
    [hd('見てもわからない ＝ from'), bx(24, 34, 100, 60, 'wood\n（木）', C.main, FILL.warm, 14), ar(126, 64, 190, 64, C.green), bx(194, 34, 100, 60, 'paper\n（紙）', C.green, FILL.green, 14), lb(160, 118, '見ても木とはわからない → be made from', 13, C.green, 'middle', true)],
    '材料の形が変わっている → from', GREEN),
  FS('もう一つ。Cheese is made from milk.（チーズは牛乳から作られる）、Wine is made from grapes.（ワインはぶどうから作られる）。牛乳もぶどうも、できあがりを見ても元の形はわかりません。だから from です。',
    [hd('from の例'), bx(8, 30, 304, 34, 'Cheese is made from milk.', C.green, FILL.green, 13), bx(8, 72, 304, 34, 'Wine is made from grapes.', C.green, FILL.green, 13), lb(160, 128, '形が変わって、元がわからない', 12, C.gray)],
    '見てもわからない材料 ＝ from', GREEN),
  FS('判定ゲームです。The bag is made ( ) leather.（革のかばん）は見れば革とわかるので of。Wine は from。Paper は from。This table is made ( ) wood. は of。形が残っているかを考えます。',
    [hd('of か from か'), ...tbl([['文', '見てわかる？', '答え'], ['bag … leather', 'わかる', 'of'], ['wine … grapes', 'わからない', 'from'], ['table … wood', 'わかる', 'of'], ['paper … wood', 'わからない', 'from']], 28, { h: 22, size: 11, hdr: true })],
    '「見てわかるか」だけで決める', MAIN),
  FS('❓材料を主語にしたいときは？ 「材料 → 製品」の向きで言うときは into を使います。Grapes are made into wine.（ぶどうはワインに加工される）。主語がぶどう（材料）になっていることがポイントです。',
    [hd('材料が主語 ＝ into'), bx(8, 36, 100, 44, 'Grapes\n（材料）', C.main, FILL.warm, 13), ar(110, 58, 198, 58, C.purple), bx(202, 36, 100, 44, 'wine\n（製品）', C.purple, FILL.purple, 13), lb(160, 104, 'Grapes are made into wine.', 14, C.purple, 'middle', true), lb(160, 126, '材料 → 製品の向き', 12, C.gray)],
    '材料が主語 → into', PURPLE),
  FS('場所を言うときは in です。This car was made in Japan.（この車は日本で作られた）。in のあとには、国や町などの場所が来ます。材料ではなく「どこで作ったか」を言う文です。',
    [hd('作られた場所 ＝ in'), bx(8, 32, 304, 38, 'This car was made in Japan.', C.blue, FILL.blue, 14), lb(160, 98, 'in のあとは場所（国・町）', 13, C.blue, 'middle', true), lb(160, 122, 'made in Japan ＝ 日本製', 13, C.gray)],
    '場所 ＝ in', BLUE),
  FS('まとめです。見てわかる材料は of、形が変わった材料は from、材料が主語なら into、場所なら in。四つとも入試に出るので、この整理で覚えます。',
    [hd('まとめ'), ...grid([['of\n見てわかる材料', BLUE], ['from\n形が変わった材料', GREEN], ['into\n材料が主語', PURPLE], ['in\n作った場所', MAIN]], 30, 52, 12)],
    'of・from・into・in：四つの使い分け', MAIN),
], 'be made of / from / into / in の使い分け');

// ── s343 衣服と身につけるもの ──
XF['xf_eigo_s343'] = show([
  FS('My shoes are new.（わたしのくつは新しい）。くつは一足でも shoes と複数形（ふくすうけい）で書きます。is ではなく are を使うのも大きな特ちょうです。まずこの形を目で見てみましょう。',
    [hd('くつは「二つで一組」'), ci(110, 62, 24, '左', C.main, FILL.warm, 16), ci(180, 62, 24, '右', C.main, FILL.warm, 16), lb(145, 104, 'shoes（一足）', 14, C.main, 'middle', true), bx(40, 116, 240, 26, 'My shoes are new.', C.blue, FILL.blue, 13)],
    'くつ ＝ shoes（複数形） ＋ are', BLUE),
  FS('❓なぜ一足なのに複数形なのでしょう。くつは左と右の二つで一組だからです。英語では、二つで一組になっているものは、一つの品物でも複数形にします。ズボンは足を通す筒（つつ）が二本、はさみは刃が二枚あるからです。',
    qa('一足なのに、なぜ複数形？', '二つで一組になっているものは、\n一つの品物でも複数形にする。\nくつ ＝ 左右の二つ\nズボン ＝ 筒が二本／はさみ ＝ 刃が二枚', BLUE, 13),
    '二つで一組 → 複数形', PURPLE),
  FS('いつも複数形で使う語を覚えましょう。shoes（くつ）、socks（くつした）、pants（ズボン）、jeans（ジーンズ）、shorts（半ズボン）、glasses（めがね）、gloves（手ぶくろ）、scissors（はさみ）、chopsticks（はし）。',
    [hd('いつも複数形の語'), ...grid([['shoes\nくつ', MAIN], ['socks\nくつした', MAIN], ['pants\nズボン', BLUE], ['jeans\nジーンズ', BLUE], ['shorts\n半ズボン', BLUE], ['glasses\nめがね', GREEN], ['gloves\n手ぶくろ', GREEN], ['scissors\nはさみ', RED], ['chopsticks\nはし', RED]], 28, 34, 12, 3)],
    'どれも「二つで一組」', MAIN),
  FS('動詞（どうし）も複数に合わせます。My shoes are new. が正しく、My shoes is new. は誤りです。glasses や pants が主語のときも are を使います。My glasses are on the desk.（めがねは机の上にある）。',
    [hd('主語が複数なら are'), ...vs('My shoes is new.', 'My shoes are new.', 38, 46, 12), lb(160, 108, 'My glasses are on the desk.', 13, C.blue, 'middle', true), lb(160, 130, 'pants / jeans / gloves も are', 12, C.gray)],
    '主語が複数 → are', GREEN),
  FS('❓では、これらを数えるときはどうするのでしょう。「くつ二つ」と言うと左右ばらばらの意味になってしまいます。そこで、一組を表す a pair of（対〈つい〉）を使います。a pair of shoes ＝ くつ一足、two pairs of socks ＝ くつした二足。',
    [hd('数えるときは a pair of'), ...tbl([['数', '言い方', '意味'], ['1', 'a pair of shoes', 'くつ一足'], ['2', 'two pairs of socks', 'くつした二足'], ['1', 'a pair of glasses', 'めがね一つ']], 28, { h: 24, size: 11, hdr: true })],
    '数えるとき ＝ a pair of ＋ 複数形', RED),
  FS('❓2足のとき、s は shoes と pair のどちらに付けるのでしょう。数えているのは「組」なので、pair に -s を付けて pairs にします。two pairs of shoes。two pair of shoes は誤りです。I bought two pairs of shoes.（くつを2足買った）。',
    [hd('-s を付けるのは pair'), ...vs('two pair of shoes', 'two pairs of shoes', 40, 46, 12), lb(160, 108, 'I bought two pairs of shoes.', 13, C.blue, 'middle', true)],
    '数えているのは「組」→ pairs', RED),
  FS('主語が a pair of shoes のときの動詞は、pair に合わせて単数（たんすう）になります。A pair of shoes is on the floor.（くつが一足、ゆかにある）。迷ったら「一つのまとまり」と考えます。',
    [hd('A pair of … は一つのまとまり'), ...chips([['A pair of shoes', 'S'], ['is', 'V'], ['on the floor.', 'M']], 20, 44, { size: 13, h: 30 }), ar(86, 78, 86, 100, C.main), lb(160, 114, '主役は pair（一組）→ is', 13, C.main, 'middle', true)],
    'a pair of 〜 が主語 → is', MAIN),
  FS('二つで一組ではない服は、ふつうに数えます。a shirt、two shirts。skirt（スカート）、sweater（セーター）、cap（ふちのない帽子〈ぼうし〉）、bag（かばん）も同じです。cap と hat は、ふちの有無で使い分けます。',
    [hd('ふつうに数えるもの'), ...grid([['a shirt\ntwo shirts', BLUE], ['a skirt\ntwo skirts', BLUE], ['a cap\n（ふちなし）', GREEN], ['a hat\n（ふちあり）', GREEN]], 28, 44, 12), lb(160, 136, 'pants は「パンツ（下着）」ではなく ズボン', 11, C.gray)],
    '二つで一組でない → a / two ＋ -s', GREEN),
  FS('まとめです。①二つで一組の服は shoes のように複数形。②動詞は are。③数えるときは a pair of ／ two pairs of。④a pair of が主語なら is。',
    [hd('まとめ'), ...grid([['① 二つで一組\n→ 複数形', BLUE], ['② 動詞は are', GREEN], ['③ a pair of\ntwo pairs of', RED], ['④ A pair of 〜\nが主語 → is', MAIN]], 30, 52, 12)],
    'shoes・socks・pants・glasses・scissors', MAIN),
], 'a pair of と複数形のきまり');

// ── s346 学校① 教科名 ──
XF['xf_eigo_s346'] = show([
  FS('教科名（きょうかめい）の英語を見ましょう。Japanese（国語）、English（英語）、math（算数）、science（理科）、social studies（社会）、music（音楽）、art（図工）、P.E.（体育）。',
    [hd('教科の名前'), ...grid([['Japanese（国語）', RED], ['English（英語）', RED], ['math（算数）', BLUE], ['science（理科）', GREEN], ['social studies（社会）', MAIN], ['music（音楽）', PURPLE], ['art（図工）', PURPLE], ['P.E.（体育）', GREEN]], 26, 26, 11, 2)],
    'つづりと大文字に気をつける', BLUE),
  FS('❓Japanese や English は、なぜ文の途中でも大文字で始めるのでしょう。国や民族の名前からできた語だからです。Japan（日本）→ Japanese、England → English。I like English. と書き、english は誤りです。',
    qa('English は、なぜ大文字？', '国や民族の名前からできた語だから、\n文の途中でも大文字で始める。\nJapan → Japanese ／ China → Chinese\nFrance → French', RED, 13),
    'Japanese・English・Chinese・French は大文字', PURPLE),
  FS('math と P.E. は、長い語を短くした形です。math ＝ mathematics（数学・算数）、P.E. ＝ physical education（体育）。P.E. は頭文字（かしらもじ）をとって、ピリオドを付けます。',
    [hd('短くした形'), bx(8, 30, 148, 50, 'mathematics\n↓\nmath', C.blue, FILL.blue, 13), bx(164, 30, 148, 50, 'physical education\n↓\nP.E.', C.green, FILL.green, 12), lb(160, 104, 'P.E. はピリオドを付ける', 13, C.green, 'middle', true), lb(160, 126, '（イギリスでは maths と書く）', 12, C.gray)],
    'math ＝ mathematics ／ P.E. ＝ physical education', BLUE),
  FS('social studies は二語で一つの教科名です。studies と複数形の形ですが、教科名なので単数あつかいにします。だから Social studies is my favorite subject. と、is を使います。',
    [hd('社会は二語で一つ'), ...chips([['Social studies', 'S'], ['is', 'V'], ['my favorite subject.', 'O']], 8, 44, { size: 13, h: 30 }), lb(160, 100, 'studies でも is（単数あつかい）', 13, C.red, 'middle', true), lb(160, 122, '× Social studies are …', 12, C.gray)],
    '教科名 ＝ 単数あつかい', RED),
  FS('❓教科名には、なぜ a / an / the も -s も付けないのでしょう。教科名は一つ二つと数えるものではなく、学問の名前だからです。I like science. が正しく、I like a science. や I like sciences. は誤りです。',
    [hd('教科名は数えない'), ...vs('I like a science.\nI like sciences.', 'I like science.', 38, 54, 12), lb(160, 116, '学問の名前 → a も the も -s も付けない', 12, C.red, 'middle', true)],
    '教科名 ＝ 冠詞（かんし）なし・-s なし', RED),
  FS('曜日（ようび）の前には on を付けます。I have math on Monday.（月曜日に算数があります）。時間割（じかんわり）の説明では、We have four classes in the morning.（午前中に4時間授業があります）も使います。',
    [hd('時間割の文'), bx(8, 30, 304, 34, 'I have math on Monday.', C.blue, FILL.blue, 14), bx(8, 74, 304, 34, 'We have four classes in the morning.', C.green, FILL.green, 12), lb(160, 128, '曜日の前は on', 13, C.red, 'middle', true)],
    'have ＋ 教科 ＋ on ＋ 曜日', GREEN),
  FS('好きな教科を答える言い方です。I like English (the) best.（英語がいちばん好きです）。My favorite subject is science.（好きな教科は理科です）。favorite に「いちばん好きな」の意味が入っているので、most を重ねません。',
    [hd('好きな教科'), bx(8, 30, 304, 34, 'What is your favorite subject?', C.purple, FILL.purple, 13), bx(8, 72, 304, 34, 'My favorite subject is science.', C.green, FILL.green, 13), lb(160, 126, '✕ most favorite（most は重ねない）', 12, C.red, 'middle', true)],
    'favorite ＝ いちばん好きな', GREEN),
  FS('まとめです。①Japanese・English は大文字で始める。②math ＝ mathematics、P.E. は頭文字。③social studies は単数あつかい。④教科名に a・the・-s は付けない。',
    [hd('まとめ'), ...grid([['① Japanese・English\nは大文字', RED], ['② math / P.E.\n短くした形', BLUE], ['③ social studies\nは単数あつかい', MAIN], ['④ a・the・-s\nは付けない', GREEN]], 30, 52, 11)],
    'I like science. ── 教科名はそのまま', MAIN),
], '教科名の書き方のきまり');

// ── s347 学校② 文房具と持ち物 ──
XF['xf_eigo_s347'] = show([
  FS('持ち物をたずねる文です。Do you have a pencil?（えんぴつを持っていますか）— Yes, I do. / No, I don\'t. です。Do you have an eraser? では、eraser（消しゴム）の前は a ではなく an になります。',
    [hd('持っているか、たずねる'), bx(8, 30, 304, 32, 'Do you have a pencil?', C.purple, FILL.purple, 14), bx(8, 70, 148, 30, 'Yes, I do.', C.green, FILL.green, 13), bx(164, 70, 148, 30, "No, I don't.", C.red, FILL.red, 13), bx(8, 110, 304, 30, 'Do you have an eraser?', C.blue, FILL.blue, 14)],
    'pencil → a ／ eraser → an', BLUE),
  FS('❓なぜ eraser の前は an なのでしょう。eraser は「イ」のような母音（ぼいん）の音で始まる語だからです。母音で始まる語の前では a ではなく an を使います。an eraser、an apple。pencil は子音で始まるので a pencil。',
    qa('eraser は、なぜ an？', '母音の音で始まる語の前は an。\neraser は「イ」の音で始まる → an eraser\npencil は「ペ」で始まる → a pencil', BLUE, 13),
    '母音で始まる → an ／ それ以外 → a', PURPLE),
  FS('借りるときは borrow を使います。Can I borrow your eraser?（消しゴムを借りてもいいですか）— Sure. Here you are.（いいよ。はい、どうぞ）。物が相手から自分の方へ動くので borrow です。',
    [hd('borrow ＝ 借りる'), ci(60, 64, 24, '相手', C.main, FILL.warm, 12), ar(88, 64, 224, 64, C.blue), ci(260, 64, 24, '自分', C.blue, FILL.blue, 12), lb(160, 52, '消しゴム', 12, C.main, 'middle', true), bx(8, 104, 304, 32, 'Can I borrow your eraser?', C.blue, FILL.blue, 14)],
    '物が自分の方へ来る ＝ borrow', BLUE),
  FS('貸すときは lend です。Can you lend me your ruler?（定規〈じょうぎ〉を貸してくれますか）。物が自分から相手の方へ動くので lend です。物が動く向きがちがうだけで、どちらも同じ貸し借りを表しています。',
    [hd('lend ＝ 貸す'), ci(60, 64, 24, '自分', C.blue, FILL.blue, 12), ar(88, 64, 224, 64, C.green), ci(260, 64, 24, '相手', C.main, FILL.warm, 12), lb(160, 52, '定規', 12, C.main, 'middle', true), bx(8, 104, 304, 32, 'Can you lend me your ruler?', C.green, FILL.green, 14)],
    '物が相手の方へ行く ＝ lend', GREEN),
  FS('❓borrow と lend は、なぜ主語（しゅご）の立場で使い分けるのでしょう。同じ一つの出来事を、借りる人から見るか、貸す人から見るかのちがいだからです。「借りる人が I」なら borrow、「貸す人が you」なら lend です。',
    qa('borrow と lend の使い分けは？', '同じ貸し借りを、どちらから見るかのちがい。\n借りる人が主語（I）→ borrow\n貸す人が主語（you）→ lend', MAIN, 13),
    '主語がどちらの立場か、で決める', PURPLE),
  FS('だれのものかたずねる文です。Whose notebook is this?（これはだれのノートですか）— It\'s mine. / It\'s Ken\'s.（私のです／ケンのです）。Whose are these pencils?（これらのえんぴつはだれのですか）— They are hers.',
    [hd('だれのもの？'), bx(8, 28, 304, 32, 'Whose notebook is this?', C.purple, FILL.purple, 14), bx(8, 68, 148, 30, "It's mine.", C.green, FILL.green, 13), bx(164, 68, 148, 30, "It's Ken's.", C.green, FILL.green, 13), bx(8, 108, 304, 30, 'Whose are these pencils? — They are hers.', C.blue, FILL.blue, 11)],
    'Whose ＝ だれの', PURPLE),
  FS('mine・yours・his・hers・ours・theirs は「〜のもの」を一語で表す語（所有代名詞〈しょゆうだいめいし〉）です。my notebook を mine と言いかえられます。It\'s my notebook. ＝ It\'s mine.',
    [hd('「〜のもの」を一語で'), ...tbl([['〜の', '〜のもの'], ['my', 'mine'], ['your', 'yours'], ['his / her', 'his / hers'], ['our / their', 'ours / theirs']], 28, { h: 20, size: 12, hdr: true })],
    'my notebook ＝ mine', GREEN),
  FS('Whose と Who\'s は発音が同じですが、つづりと意味がちがいます。Whose notebook is this?（だれのノート）。Who\'s that boy?（あの男の子はだれ）の Who\'s は Who is の短縮形（たんしゅくけい）です。書き取りで区別します。',
    [hd('Whose と Who\'s'), bx(8, 30, 148, 56, "Whose\nだれの\nWhose notebook", C.purple, FILL.purple, 12), bx(164, 30, 148, 56, "Who's\n＝ Who is\nWho's that boy?", C.blue, FILL.blue, 12), lb(160, 110, '発音は同じ。つづりで区別する', 13, C.red, 'middle', true)],
    '発音は同じ ／ 意味がちがう', RED),
  FS('まとめです。①母音で始まる語は an。②借りる ＝ borrow、貸す ＝ lend。③Whose はだれの。④mine などは「〜のもの」。⑤Whose と Who\'s は書き分ける。',
    [hd('まとめ'), ...grid([['① an eraser\n（母音の前は an）', BLUE], ['② borrow ＝ 借りる\nlend ＝ 貸す', GREEN], ['③ Whose ＝ だれの\nmine ＝ 私のもの', PURPLE], ['④ Whose と\nWho\'s は別', RED]], 30, 52, 11)],
    '教室の会話は、この型で答えられる', MAIN),
], '持ち物のやりとりの型');

// ── s349 教室で使う英語 ──
XF['xf_eigo_s349'] = show([
  FS('先生の指示（しじ）の英語を見ましょう。Stand up.（立ちなさい）、Sit down.（すわりなさい）、Open your textbook.（教科書を開きなさい）、Look at the blackboard.（黒板を見なさい）。どれも動詞で始まっています。',
    [hd('先生が使う英語'), ...grid([['Stand up.\n立ちなさい', BLUE], ['Sit down.\nすわりなさい', BLUE], ['Open your textbook.\n教科書を開きなさい', GREEN], ['Look at the blackboard.\n黒板を見なさい', GREEN]], 28, 52, 11)],
    'どの文も「動詞」で始まる', BLUE),
  FS('❓なぜ主語（しゅご）がないのでしょう。指示する相手が目の前の「あなた」と決まっているからです。You を言わなくてもわかるので、省略（しょうりゃく）します。この形を命令文（めいれいぶん）といいます。',
    [hd('主語 You は言わない'), ...chips([['(You)', 'X'], ['stand up.', 'V']], 60, 40, { size: 15, h: 34 }), ar(160, 80, 160, 100, C.purple), bx(40, 104, 240, 34, '相手は目の前の「あなた」だから\nYou は言わなくてもわかる', C.purple, FILL.purple, 12)],
    '命令文 ＝ 動詞で始める', PURPLE),
  FS('be動詞の命令文は Be で始めます。Be quiet.（静かにしなさい）、Be careful.（気をつけて）、Be kind to your friends.（友だちに親切にしなさい）。',
    [hd('be動詞の命令文'), ...grid([['Be quiet.\n静かにしなさい', MAIN], ['Be careful.\n気をつけて', MAIN]], 34, 50, 13), bx(8, 96, 304, 34, 'Be kind to your friends.', C.green, FILL.green, 13)],
    'be動詞の命令 → Be で始める', MAIN),
  FS('❓なぜ Are quiet. や Is quiet. ではなく Be なのでしょう。命令文は動詞の原形（げんけい：もとの形）で始めるきまりで、be動詞の原形は be だからです。am・is・are は原形ではありません。',
    qa('なぜ Be で始めるの？', '命令文は、動詞の原形で始めるきまり。\nbe動詞の原形は be。\nam / is / are は原形ではないので\n命令文の最初には使えない。', RED, 13),
    'be動詞の原形 ＝ be', RED),
  FS('ていねいに言うときは please を付けます。Please stand up. または Stand up, please.。文の終わりに置くときは、please の前にコンマを打ちます。',
    [hd('please を付けるとていねい'), bx(8, 32, 304, 34, 'Please stand up.', C.green, FILL.green, 14), bx(8, 74, 304, 34, 'Stand up, please.', C.green, FILL.green, 14), lb(160, 130, '終わりに置くときはコンマ（,）を打つ', 12, C.red, 'middle', true)],
    'Please ＋ 命令文／命令文 , please', GREEN),
  FS('「〜してはいけません」は Don\'t を前に付けます。Don\'t run in the hallway.（ろうかを走ってはいけません）。Don\'t be late.（おくれないように）、Don\'t forget your homework.（宿題を忘れないで）。',
    [hd('禁止（きんし）の命令文'), ...tbl([['Don\'t ＋ 動詞の原形', '意味'], ['Don\'t run …', '走ってはいけません'], ['Don\'t be late.', 'おくれないように'], ['Don\'t forget …', '忘れないで']], 28, { h: 24, size: 11, hdr: true })],
    'Don\'t ＋ 原形', RED),
  FS('Let\'s は「〜しましょう」で、形が命令文に似ていますが、意味がちがいます。Let\'s begin.（始めましょう）は、話す人もいっしょに行います。Begin. は相手だけに「始めなさい」という命令です。',
    [hd('Let\'s ＝ いっしょに'), bx(8, 30, 148, 56, "Begin.\n（あなたが）\n始めなさい", C.blue, FILL.blue, 12), bx(164, 30, 148, 56, "Let's begin.\n（みんなで）\n始めましょう", C.green, FILL.green, 12), lb(160, 110, 'Let\'s は自分もいっしょに行う', 13, C.green, 'middle', true)],
    '命令文 ＝ 相手だけ ／ Let\'s ＝ いっしょ', GREEN),
  FS('まとめです。①先生の指示は動詞で始める（主語 You なし）。②be動詞は Be。③ていねいに言うなら please。④禁止は Don\'t ＋ 原形。⑤いっしょにするなら Let\'s。',
    [hd('まとめ'), ...grid([['① 動詞で始める\nStand up.', BLUE], ['② Be quiet.', MAIN], ['③ Please …', GREEN], ['④ Don\'t run …', RED]], 30, 40, 12), lb(160, 128, "⑤ いっしょに → Let's begin.", 13, C.purple, 'middle', true)],
    '教室英語は「動詞で始まる」', MAIN),
], '教室で使う英語は命令文');

// ── s350 動物の複数形 ──
XF['xf_eigo_s350'] = show([
  FS('動物の語は複数形（ふくすうけい）にひみつがあります。sheep（ひつじ）は一ぴきでも十ぴきでも sheep のまま。There are ten sheep in the field.（野原にひつじが10頭いる）。-s は付きません。',
    [hd('形が変わらない複数形'), ...grid([['sheep → sheep\nひつじ', BLUE], ['deer → deer\nしか', GREEN], ['fish → fish\n魚', MAIN]], 28, 40, 12, 3), lb(160, 92, 'There are ten sheep in the field.', 13, C.blue, 'middle', true), lb(160, 114, '数を表す ten と are で、複数だとわかる', 12, C.gray)],
    'sheep・deer・fish は形が同じ', BLUE),
  FS('❓-s がないと、一ぴきか何びきかわからなくなりませんか。ふつうは文の中の ten や There are、a や many などの語でわかります。ですから sheep・deer・fish は、数が変わっても同じ形のまま使うきまりなのです。',
    qa('-s がなくて困らないの？', '数を表す語（ten・many）や、\nare / is などの動詞で、\n一ぴきか何びきかがわかる。\nだから形が同じでも困らない。', BLUE, 13),
    '数は、まわりの語で見分ける', PURPLE),
  FS('形が大きく変わる複数形もあります。mouse → mice（ねずみ）、goose → geese（がちょう）。これらは -s を付けるのではなく、中の母音（ぼいん）の部分が変わります。一つずつ覚えます。',
    [hd('中身の形が変わる'), bx(8, 30, 148, 56, 'mouse\n↓\nmice', C.main, FILL.warm, 15), bx(164, 30, 148, 56, 'goose\n↓\ngeese', C.main, FILL.warm, 15), lb(160, 112, 'one mouse ／ two mice', 13, C.main, 'middle', true)],
    'mouse → mice ／ goose → geese', MAIN),
  FS('-f で終わる語は f を v に変えて -es を付けます。wolf → wolves（おおかみ）、leaf → leaves（葉）。-fe で終わる knife → knives、life → lives も同じ仲間です。',
    [hd('f を v に変えて -es'), ...tbl([['単数', '複数'], ['wolf', 'wolves'], ['leaf', 'leaves'], ['knife', 'knives'], ['life', 'lives']], 28, { h: 22, size: 13, hdr: true })],
    '-f / -fe → v ＋ es', GREEN),
  FS('❓-s の付け方のきまりを整理しましょう。fox（きつね）のように -x で終わる語は、foxs では言いにくいので -es を付けて foxes にします。-s、-sh、-ch で終わる語も同じで、box → boxes です。',
    [hd('-x・-s・-sh・-ch は -es'), ...tbl([['単数', '複数'], ['fox', 'foxes'], ['box', 'boxes'], ['dog', 'dogs'], ['horse', 'horses']], 28, { h: 22, size: 13, hdr: true, colors: [MAIN, GREEN] }), lb(160, 150, 'dog・cat は ふつうに -s', 11, C.gray)],
    '言いにくい形は -es でつなぐ', GREEN),
  FS('y で終わる語は、前の文字で変わります。butterfly（ちょう）のように「子音字（しいんじ）＋ y」なら、y を i に変えて -es。butterfly → butterflies。子音字とは a・i・u・e・o 以外の文字です。',
    [hd('子音字 ＋ y → ies'), bx(8, 32, 148, 50, 'butterfly\n（r の次に fly の l）\nl は子音字', C.blue, FILL.blue, 11), ar(156, 57, 164, 57, C.blue), bx(164, 32, 148, 50, 'butterflies\ny を i に変えて\n＋ es', C.blue, FILL.blue, 11), lb(160, 108, 'baby → babies も同じ', 13, C.gray)],
    '子音字 ＋ y ： y を i に → ies', BLUE),
  FS('❓monkey はどうなるでしょう。monkey の y の前は e で、母音字（ぼいんじ）です。母音字 ＋ y のときは y を変えず、そのまま -s を付けます。だから monkeys が正しく、monkies は誤りです。boy → boys も同じです。',
    [hd('母音字 ＋ y → そのまま -s'), ...vs('monkies', 'monkeys', 38, 44, 15), lb(160, 104, 'monkey の y の前は e（母音字）', 13, C.blue, 'middle', true), lb(160, 126, 'boy → boys ／ day → days', 13, C.gray)],
    '入試で必ず問われる monkeys', RED),
  FS('まとめです。①sheep・deer・fish は同じ形。②mouse → mice、goose → geese。③f → ves。④-x などは -es。⑤子音字 ＋ y は ies、母音字 ＋ y は ys。',
    [hd('まとめ'), ...grid([['① sheep deer fish\n形がそのまま', BLUE], ['② mice geese\n形が変わる', MAIN], ['③ wolf → wolves\nf → ves', GREEN], ['④ fox → foxes\n-x は -es', GREEN], ['⑤ butterflies\n子音字＋y → ies', RED], ['⑤ monkeys\n母音字＋y → ys', RED]], 28, 40, 11)],
    '動物の複数形は、パターンごとに覚える', MAIN),
], '動物の複数形のきまり');

// ── s351 植物と自然 ──
XF['xf_eigo_s351'] = show([
  FS('植物（しょくぶつ）の部分を英語で見ましょう。木は tree、えだは branch、みきは trunk、葉は leaf、根は root、花は flower、種は seed です。絵で位置を確かめます。',
    [hd('木のつくり'), ci(160, 44, 32, 'leaf', C.green, FILL.green, 12), lb(222, 36, 'branch（枝）', 11, C.main, 'start', true), ln(194, 40, 220, 40, C.main), bx(148, 76, 24, 38, 'trunk', C.main, FILL.warm, 8), lb(190, 100, 'trunk（みき）', 11, C.main, 'start', true), ln(120, 120, 160, 128, C.main), ln(200, 120, 160, 128, C.main), lb(160, 142, 'root（根）', 11, C.main, 'middle', true)],
    'tree・leaf・branch・trunk・root', GREEN),
  FS('❓leaf の複数形は、なぜ leafs ではなく leaves なのでしょう。-f で終わる語は、f を v に変えてから -es を付けるきまりだからです。leaf の f → v、そして -es で leaves となります。',
    qa('leaf の複数形は？', '-f で終わる語は、f を v に変えて -es。\nleaf → leaves\n（× leafs は誤り）\none leaf ／ many leaves', GREEN, 13),
    'leaf → leaves（f → v ＋ es）', PURPLE),
  FS('同じ仲間はほかにもあります。wolf → wolves（おおかみ）、knife → knives（ナイフ）、life → lives（命）。leaf と同じように、f（fe）が v に変わります。',
    [hd('f が v に変わる仲間'), ...tbl([['単数', '複数', '意味'], ['leaf', 'leaves', '葉'], ['wolf', 'wolves', 'おおかみ'], ['knife', 'knives', 'ナイフ'], ['life', 'lives', '命']], 28, { h: 22, size: 12, hdr: true, colors: [MAIN, GREEN, GRAY] })],
    'leaf・wolf・knife・life は f → v', GREEN),
  FS('植物の動作を表す動詞（どうし）です。grow（育つ）、plant（植える）、water（水をやる）、bloom（花がさく）、pick（つむ）。I water the flowers every morning.（毎朝、花に水をやります）。',
    [hd('植物の動詞'), ...grid([['grow\n育つ・育てる', GREEN], ['plant\n植える', GREEN], ['water\n水をやる', BLUE], ['bloom\n花がさく', RED], ['pick\nつむ', MAIN]], 28, 34, 11, 3), lb(160, 118, 'I water the flowers every morning.', 13, C.blue, 'middle', true)],
    '花は bloom ／ 水をやるのは water', BLUE),
  FS('❓water は「水」ではなかったでしょうか。water は「水」という名詞（めいし）と「水をやる」という動詞の両方に使える語です。文の中でどんなはたらきをしているかで見分けます。',
    [hd('water は二つの顔をもつ'), bx(8, 30, 148, 52, 'water（名詞）\n水', C.blue, FILL.blue, 13), bx(164, 30, 148, 52, 'water（動詞）\n水をやる', C.green, FILL.green, 13), lb(160, 104, 'I drink water. ／ I water the flowers.', 12, C.ink, 'middle', true)],
    '文の中のはたらきで見分ける', BLUE),
  FS('つづりに気をつける組があります。grass（草）と glass（コップ・ガラス）は、r と l が一文字ちがうだけです。grass は数えられない名詞なので、a grass とは言いません。',
    [hd('grass と glass'), bx(8, 30, 148, 56, 'grass\n草\n（数えない）', C.green, FILL.green, 13), bx(164, 30, 148, 56, 'glass\nコップ・ガラス\n（数える）', C.blue, FILL.blue, 13), lb(160, 110, 'r と l の一文字ちがい', 13, C.red, 'middle', true)],
    '書き分けること', RED),
  FS('花の名前です。cherry blossom（さくら）、rose（ばら）、tulip（チューリップ）、sunflower（ひまわり）、morning glory（あさがお）、lily（ゆり）。The cherry blossoms are beautiful in spring.（春はさくらの花が美しい）。',
    [hd('花の名前'), ...grid([['cherry blossom\nさくら', RED], ['rose\nばら', RED], ['tulip\nチューリップ', MAIN], ['sunflower\nひまわり', MAIN], ['morning glory\nあさがお', PURPLE], ['lily\nゆり', GREEN]], 28, 34, 11, 3), lb(160, 128, 'The cherry blossoms are beautiful in spring.', 11, C.blue, 'middle', true)],
    '春のさくら ＝ cherry blossoms', MAIN),
  FS('まとめです。①leaf の複数形は leaves（f → ves）。②water は名詞にも動詞にもなる。③grass と glass はつづりがちがう。④植物の動詞は grow・plant・water・bloom・pick。',
    [hd('まとめ'), ...grid([['① leaf → leaves\nf → v ＋ es', GREEN], ['② water は\n名詞・動詞の両方', BLUE], ['③ grass ≠ glass', RED], ['④ grow plant\nwater bloom pick', MAIN]], 30, 52, 11)],
    '植物の語は、複数形とセットで覚える', MAIN),
], '植物の語と複数形');

// ── s354 数①：なぜ forty に u がないか ──
XF['xf_eigo_s354'] = show([
  FS('数の語尾（ごび）には二種類あります。13〜19 は -teen（「10と〜」）、20〜90 は -ty（「〜十」）。thirteen（13）と thirty（30）、fourteen（14）と forty（40）は、見た目も音もよく似ています。',
    [hd('-teen と -ty'), bx(8, 30, 148, 50, '-teen\n13〜19\n「10と〜」', C.blue, FILL.blue, 13), bx(164, 30, 148, 50, '-ty\n20〜90\n「〜十」', C.green, FILL.green, 13), lb(160, 104, 'thirteen ≠ thirty', 14, C.red, 'middle', true), lb(160, 126, 'fourteen ≠ forty', 14, C.red, 'middle', true)],
    '13〜19 は -teen ／ 20〜90 は -ty', BLUE),
  FS('❓four は、なぜ forty では u が消えるのでしょう。four に -teen が付くと fourteen と u が残りますが、-ty が付くときは発音が変わって「フォーティ」となり、つづりからも u が消えたのです。音が変わった語は、つづりも変わります。',
    [hd('four の変身'), bx(116, 28, 88, 32, 'four（4）', C.main, FILL.warm, 14), ar(130, 62, 80, 82, C.blue), ar(190, 62, 240, 82, C.green), bx(10, 86, 140, 36, 'fourteen\nu あり', C.blue, FILL.blue, 13), bx(170, 86, 140, 36, 'forty\nu なし！', C.green, FILL.green, 13)],
    'four → fourteen（u あり）／ forty（u なし）', GREEN),
  FS('音が変わる語はほかにもあります。three → thirteen / thirty（形が大きく変わる）。five → fifteen / fifty（ve が f に変わる）。eight → eighteen / eighty（t が重なるので一つ）。',
    [hd('変わる語を名指しで'), ...tbl([['もと', '-teen', '-ty'], ['three', 'thirteen', 'thirty'], ['five', 'fifteen', 'fifty'], ['eight', 'eighteen', 'eighty']], 28, { h: 24, size: 12, hdr: true, colors: [MAIN, BLUE, GREEN] })],
    'three・five・eight も形が変わる', MAIN),
  FS('❓では nine も変わるでしょうか。変わりません。nine は nineteen でも ninety でも、e が残ります。e が消えるのは ninth（9番め）のときだけです。変わる語だけを名指しで覚えます。',
    [hd('nine は e が残る'), bx(110, 28, 100, 32, 'nine（9）', C.main, FILL.warm, 14), ar(130, 62, 80, 82, C.blue), ar(190, 62, 240, 82, C.green), bx(10, 86, 140, 36, 'nineteen\ne あり', C.blue, FILL.blue, 13), bx(170, 86, 140, 36, 'ninety\ne あり', C.green, FILL.green, 13), lb(160, 142, 'e が消えるのは ninth だけ', 12, C.red, 'middle', true)],
    'nineteen・ninety は e が残る', RED),
  FS('聞き取りのコツです。thirteen と thirty を聞き分けるには、強く読む場所を見ます。-teen は後ろの teen を強く、-ty は前の部分を強く読みます。thirTEEN（13）と THIRty（30）です。',
    [hd('強く読む場所がちがう'), bx(8, 30, 148, 56, 'thirTEEN\n（後ろを強く）\n13', C.blue, FILL.blue, 13), bx(164, 30, 148, 56, 'THIRty\n（前を強く）\n30', C.green, FILL.green, 13), lb(160, 110, 'fourTEEN（14）／ FORty（40）', 13, C.ink, 'middle', true)],
    '-teen は後ろを強く、-ty は前を強く', BLUE),
  FS('21以上は十の位と一の位をハイフンでつなぎます。twenty-one（21）、thirty-five（35）、forty-eight（48）、ninety-nine（99）。100 は one hundred、1,000 は one thousand です。',
    [hd('21以上はハイフン'), ...grid([['twenty-one\n21', BLUE], ['thirty-five\n35', BLUE], ['forty-eight\n48', GREEN], ['ninety-nine\n99', GREEN]], 28, 40, 13), lb(160, 118, '100 ＝ one hundred ／ 1,000 ＝ one thousand', 12, C.ink, 'middle', true)],
    '十の位 − 一の位', GREEN),
  FS('❓hundred には、なぜ -s を付けないのでしょう。three hundred の hundred は「百」という単位（たんい）の名前としてはたらくからです。単位は数えないので、three hundred students と書き、three hundreds students は誤りです。',
    [hd('hundred に -s は付けない'), ...vs('three hundreds students', 'three hundred students', 38, 50, 11), lb(160, 110, 'hundred ＝ 「百」という単位の名前', 13, C.blue, 'middle', true), lb(160, 130, 'thousand・million も同じ', 12, C.gray)],
    '数 ＋ hundred / thousand / million に -s なし', RED),
  FS('「何百もの」と漠然（ばくぜん）と言うときだけ、hundreds of people のように -s と of が付きます。ちがいは次の通りです。three hundred people（ちょうど三百人）、hundreds of people（何百人もの人々）。数のあとの名詞は複数形にします。',
    [hd('ちょうどの数と、何百も'), bx(8, 30, 148, 56, 'three hundred\npeople\n（ちょうど300人）', C.blue, FILL.blue, 12), bx(164, 30, 148, 56, 'hundreds of\npeople\n（何百人も）', C.green, FILL.green, 12), lb(160, 110, '数のあとの名詞は複数形：three books', 12, C.ink, 'middle', true)],
    '漠然と言うときだけ hundreds of', GREEN),
  FS('まとめです。①-teen は後ろ、-ty は前を強く読む。②four→forty（u なし）、five→fifty、three→thirty、eight→eighty。③nine は e が残る。④hundred に -s なし。',
    [hd('まとめ'), ...grid([['① -teen 後ろ強く\n-ty 前強く', BLUE], ['② forty fifty\nthirty eighty', GREEN], ['③ nineteen ninety\ne が残る', RED], ['④ three hundred\n-s なし', MAIN]], 30, 52, 11)],
    '変わる語だけを名指しで覚える', MAIN),
], 'forty に u がなく、hundred に -s がないわけ');

// ── s357 月の名前と日付 ──
XF['xf_eigo_s357'] = show([
  FS('日付（ひづけ）の書き方は二通りあります。アメリカ式は「月→日→年」で May 5, 2026。イギリス式は「日→月→年」で 5 May 2026。中学受験ではアメリカ式で覚えてかまいません。',
    [hd('日付の書き方'), bx(8, 30, 304, 40, 'アメリカ式（月→日→年）\nMay 5, 2026', C.blue, FILL.blue, 13), bx(8, 80, 304, 40, 'イギリス式（日→月→年）\n5 May 2026', C.green, FILL.green, 13)],
    '月 → 日 ／ 日 → 月', BLUE),
  FS('❓5/5 のように数字だけで書くと、なぜ危険なのでしょう。3/4 は、アメリカ式では「3月4日」、イギリス式では「4月3日」と、国によって読み方がちがうからです。月は名前で書くと安心です。',
    [hd('3/4 は何月何日？'), bx(100, 28, 120, 34, '3 / 4', C.main, FILL.warm, 20), ar(130, 64, 80, 86, C.blue), ar(190, 64, 240, 86, C.green), bx(10, 90, 140, 36, 'アメリカ式\nMarch 4（3月4日）', C.blue, FILL.blue, 12), bx(170, 90, 140, 36, 'イギリス式\n4 March（3月4日）\n×', C.green, FILL.green, 10)],
    '数字だけだと、国によって意味がちがう', RED),
  FS('訂正します。イギリス式の 3/4 は「3日、4月」で April 3 です。図のとおり、同じ 3/4 がアメリカ式なら March 4、イギリス式なら April 3 になります。だから月は名前で書きます。',
    [hd('同じ 3/4 でも…'), bx(100, 28, 120, 34, '3 / 4', C.main, FILL.warm, 20), ar(130, 64, 80, 86, C.blue), ar(190, 64, 240, 86, C.green), bx(10, 90, 140, 36, 'アメリカ式\nMarch 4', C.blue, FILL.blue, 13), bx(170, 90, 140, 36, 'イギリス式\nApril 3', C.green, FILL.green, 13)],
    '3月4日 と 4月3日：まぎらわしい', RED),
  FS('読むときは、日を序数（じょすう：1番め、2番め…）で読みます。May 5 は May fifth、July 20 は July twentieth。書くときは 5 と数字でよいですが、読むときは fifth となります。',
    [hd('日は序数で読む'), ...tbl([['書く', '読む'], ['May 5', 'May fifth'], ['May 1', 'May first'], ['May 3', 'May third'], ['July 20', 'July twentieth']], 28, { h: 22, size: 13, hdr: true })],
    '書く：5 ／ 読む：fifth', GREEN),
  FS('❓月と日付の前には、なぜ in と on を使い分けるのでしょう。きまりは、月・年・季節は in、日付・曜日は on、時刻は at です。I was born in May.（5月生まれ）、I was born on May 5.（5月5日生まれ）。',
    [hd('in ・ on ・ at'), ...tbl([['前置詞', 'あとに来る語', '例'], ['in', '月・年・季節', 'in May'], ['on', '日付・曜日', 'on May 5'], ['at', '時刻', 'at seven']], 28, { h: 24, size: 12, hdr: true, colors: [RED, MAIN, BLUE] })],
    '月だけなら in、日付まで言うなら on', PURPLE),
  FS('誕生日（たんじょうび）の会話です。When is your birthday?（誕生日はいつですか）— It is April 8.（4月8日です）。How old are you?（何歳ですか）— I\'m twelve (years old).',
    [hd('誕生日の会話'), bx(8, 30, 304, 32, 'When is your birthday?', C.purple, FILL.purple, 14), bx(8, 68, 304, 32, "It is April 8.", C.green, FILL.green, 14), bx(8, 106, 304, 32, "How old are you? — I'm twelve.", C.blue, FILL.blue, 13)],
    '日付は May 5 の形で答える', BLUE),
  FS('日付をたずねる文にも注意が必要です。What is the date today?（今日は何日ですか）と What day is it today?（今日は何曜日ですか）はちがう質問です。date は日付、day は曜日です。',
    [hd('date と day'), bx(8, 30, 148, 56, 'What is the date today?\n日付をたずねる\nIt is May 5.', C.blue, FILL.blue, 10), bx(164, 30, 148, 56, 'What day is it today?\n曜日をたずねる\nIt is Monday.', C.green, FILL.green, 10), lb(160, 110, 'date ＝ 日付 ／ day ＝ 曜日', 13, C.red, 'middle', true)],
    'date と day を混ぜない', RED),
  FS('月の名前のつづりにも気をつけましょう。February は r が二つ、August は gu の順、April は r と i を入れかえて Apirl としない。September〜December は -ber。月は文の途中でも大文字で始めます。',
    [hd('つづりの注意'), ...grid([['February\nr が二つ', RED], ['August\ngu の順', RED], ['April\n× Apirl', RED], ['September 〜 December\n-ber で終わる', MAIN]], 28, 40, 11), lb(160, 128, 'My birthday is in September.（× september）', 11, C.blue, 'middle', true)],
    '月は大文字で始める', RED),
  FS('まとめです。①アメリカ式は月→日、イギリス式は日→月。②数字だけで書かず、月は名前で。③読むときの日は序数。④月は in、日付は on。⑤date は日付、day は曜日。',
    [hd('まとめ'), ...grid([['① 月→日 ／ 日→月', BLUE], ['② 月は名前で書く', GREEN], ['③ May 5 ＝ May fifth', MAIN], ['④ in May\non May 5', RED]], 30, 40, 12), lb(160, 128, '⑤ date ＝ 日付 ／ day ＝ 曜日', 13, C.purple, 'middle', true)],
    '日付は「月・日の順」と「序数」で', MAIN),
], '月の名前と日付の言い方');

export const XF_CEH_FIGURES: Record<string, DiagramFigure> = XF;

export const XF_CEH_SECTIONS: Record<string, string> = {
  'eigo_s336#2': 'xf_eigo_s336',
  'eigo_s338#1': 'xf_eigo_s338',
  'eigo_s339#1': 'xf_eigo_s339',
  'eigo_s340#1': 'xf_eigo_s340',
  'eigo_s343#1': 'xf_eigo_s343',
  'eigo_s346#0': 'xf_eigo_s346',
  'eigo_s347#1': 'xf_eigo_s347',
  'eigo_s349#0': 'xf_eigo_s349',
  'eigo_s350#1': 'xf_eigo_s350',
  'eigo_s351#0': 'xf_eigo_s351',
  'eigo_s354#2': 'xf_eigo_s354',
  'eigo_s357#1': 'xf_eigo_s357',
};
