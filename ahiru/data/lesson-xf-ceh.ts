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
    [hd('f を v に変えて -es'), ...tbl([['単数', '複数'], ['wolf', 'wolves'], ['leaf', 'leaves'], ['knife', 'knives'], ['life', 'lives']], 28, { h: 20, size: 13, hdr: true })],
    '-f / -fe → v ＋ es', GREEN),
  FS('❓-s の付け方のきまりを整理しましょう。fox（きつね）のように -x で終わる語は、foxs では言いにくいので -es を付けて foxes にします。-s、-sh、-ch で終わる語も同じで、box → boxes です。',
    [hd('-x・-s・-sh・-ch は -es'), ...tbl([['単数', '複数'], ['fox', 'foxes'], ['box', 'boxes'], ['dog', 'dogs'], ['horse', 'horses']], 28, { h: 20, size: 13, hdr: true, colors: [MAIN, GREEN] })],
    '言いにくい形は -es でつなぐ', GREEN),
  FS('y で終わる語は、前の文字で変わります。butterfly（ちょう）のように「子音字（しいんじ）＋ y」なら、y を i に変えて -es。butterfly → butterflies。子音字とは a・i・u・e・o 以外の文字です。',
    [hd('子音字 ＋ y → ies'), bx(8, 32, 148, 50, 'butterfly\n最後は l ＋ y\nl は子音字', C.blue, FILL.blue, 11), ar(156, 57, 164, 57, C.blue), bx(164, 32, 148, 50, 'butterflies\ny を i に変えて\n＋ es', C.blue, FILL.blue, 11), lb(160, 108, 'baby → babies も同じ', 13, C.gray)],
    '子音字 ＋ y ： y を i に → ies', BLUE),
  FS('❓monkey はどうなるでしょう。monkey の y の前は e で、母音字（ぼいんじ）です。母音字 ＋ y のときは y を変えず、そのまま -s を付けます。だから monkeys が正しく、monkies は誤りです。boy → boys も同じです。',
    [hd('母音字 ＋ y → そのまま -s'), ...vs('monkies', 'monkeys', 38, 44, 15), lb(160, 104, 'monkey の y の前は e（母音字）', 13, C.blue, 'middle', true), lb(160, 126, 'boy → boys ／ day → days', 13, C.gray)],
    '入試で必ず問われる monkeys', RED),
  FS('まとめです。①sheep・deer・fish は同じ形。②mouse → mice、goose → geese。③f → ves。④-x などは -es。⑤子音字 ＋ y は ies、母音字 ＋ y は ys。',
    [hd('まとめ'), ...grid([['① sheep deer fish\n形がそのまま', BLUE], ['② mice geese\n形が変わる', MAIN], ['③ wolf → wolves\nf → ves', GREEN], ['④ fox → foxes\n-x は -es', GREEN], ['⑤ butterflies\n子音字＋y → ies', RED], ['⑤ monkeys\n母音字＋y → ys', RED]], 28, 34, 11)],
    '動物の複数形は、パターンごとに覚える', MAIN),
], '動物の複数形のきまり');

// ── s351 植物と自然 ──
XF['xf_eigo_s351'] = show([
  FS('植物（しょくぶつ）の部分を英語で見ましょう。木は tree、えだは branch、みきは trunk、葉は leaf、根は root、花は flower、種は seed です。絵で位置を確かめます。',
    [hd('木のつくり'), ci(160, 56, 28, 'leaf', C.green, FILL.green, 12), lb(206, 50, 'branch（枝）', 11, C.main, 'start', true), ln(188, 52, 204, 50, C.main), bx(148, 86, 24, 30, 'trunk', C.main, FILL.warm, 8), lb(182, 100, 'trunk（みき）', 11, C.main, 'start', true), ln(120, 126, 160, 118, C.main), ln(200, 126, 160, 118, C.main), lb(160, 138, 'root（根）', 11, C.main, 'middle', true)],
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
    [hd('21以上はハイフン'), ...grid([['twenty-one\n21', BLUE], ['thirty-five\n35', BLUE], ['forty-eight\n48', GREEN], ['ninety-nine\n99', GREEN]], 28, 40, 13), lb(160, 134, '100 ＝ one hundred ／ 1,000 ＝ one thousand', 12, C.ink, 'middle', true)],
    '十の位 − 一の位', GREEN),
  FS('❓hundred には、なぜ -s を付けないのでしょう。three hundred の hundred は「百」という単位（たんい）の名前としてはたらくからです。単位は数えないので、three hundred students と書き、three hundreds students は誤りです。',
    [hd('hundred に -s は付けない'), ...vs('three hundreds\nstudents', 'three hundred\nstudents', 38, 50, 13), lb(160, 110, 'hundred ＝ 「百」という単位の名前', 13, C.blue, 'middle', true), lb(160, 130, 'thousand・million も同じ', 12, C.gray)],
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
  FS('❓5/5 のように数字だけで書くと、なぜ危険なのでしょう。3/4 は、アメリカ式なら「3月4日」（March 4）ですが、イギリス式なら「4月3日」（April 3）と読まれます。国によって読み方が逆になるからです。',
    [hd('3/4 は何月何日？'), bx(100, 26, 120, 32, '3 / 4', C.main, FILL.warm, 20), ar(130, 60, 80, 82, C.blue), ar(190, 60, 240, 82, C.green), bx(10, 82, 140, 52, 'アメリカ式\nMarch 4\n（3月4日）', C.blue, FILL.blue, 12), bx(170, 82, 140, 52, 'イギリス式\nApril 3\n（4月3日）', C.green, FILL.green, 12)],
    '数字だけだと、国によって意味が逆になる', RED),
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
    [hd('date と day'), bx(8, 28, 148, 70, 'What is the\ndate today?\n日付をたずねる\nIt is May 5.', C.blue, FILL.blue, 12), bx(164, 28, 148, 70, 'What day is\nit today?\n曜日をたずねる\nIt is Monday.', C.green, FILL.green, 12), lb(160, 118, 'date ＝ 日付 ／ day ＝ 曜日', 13, C.red, 'middle', true)],
    'date と day を混ぜない', RED),
  FS('月の名前のつづりにも気をつけましょう。February は r が二つ、August は gu の順、April は r と i を入れかえて Apirl としない。September〜December は -ber。月は文の途中でも大文字で始めます。',
    [hd('つづりの注意'), ...grid([['February\nr が二つ', RED], ['August\ngu の順', RED], ['April\n× Apirl', RED], ['September 〜 December\n-ber で終わる', MAIN]], 28, 40, 11), lb(160, 128, 'My birthday is in September.（× september）', 11, C.blue, 'middle', true)],
    '月は大文字で始める', RED),
  FS('まとめです。①アメリカ式は月→日、イギリス式は日→月。②数字だけで書かず、月は名前で。③読むときの日は序数。④月は in、日付は on。⑤date は日付、day は曜日。',
    [hd('まとめ'), ...grid([['① 月→日 ／ 日→月', BLUE], ['② 月は名前で書く', GREEN], ['③ May 5 ＝ May fifth', MAIN], ['④ in May\non May 5', RED]], 30, 40, 12), lb(160, 128, '⑤ date ＝ 日付 ／ day ＝ 曜日', 13, C.purple, 'middle', true)],
    '日付は「月・日の順」と「序数」で', MAIN),
], '月の名前と日付の言い方');

// ── s359 色の語順 ──
XF['xf_eigo_s359'] = show([
  FS('「赤い車」は英語で a red car です。red a car とは言いません。色を表す語は、かならず名詞（めいし）の前に置きます。日本語も「赤い車」と前に置くので同じですが、a の位置に気をつけます。',
    [hd('色は名詞の前'), ...vs('red a car', 'a red car', 38, 46, 15), ...chips([['a', 'S'], ['red', 'V'], ['car', 'O']], 100, 104, { size: 14, h: 30 })],
    'a ＋ 色 ＋ 名詞 の順', BLUE),
  FS('❓なぜ色は名詞の前に来るのでしょう。色は「どんな車か」を説明する形容詞（けいようし）で、形容詞は説明する名詞のすぐ前に置くきまりだからです。a の次に red、そのあとに car が来ます。',
    qa('色は、なぜ名詞の前？', '色は「どんな車か」を説明する形容詞。\n形容詞は、説明する名詞の\nすぐ前に置くきまり。\na ＋ red ＋ car', BLUE, 13),
    '形容詞 ＋ 名詞', PURPLE),
  FS('色の語はほかにもあります。red・blue・yellow・green・black・white・brown・pink・purple・orange。white shoes（白いくつ）のように、複数でも語順は同じです。',
    [hd('色の名前'), ...grid([['red\n赤', RED], ['blue\n青', BLUE], ['yellow\n黄', YELLOW], ['green\n緑', GREEN], ['black\n黒', GRAY], ['white\n白', GRAY], ['brown\n茶', MAIN], ['pink\nピンク', RED], ['purple\nむらさき', PURPLE]], 28, 34, 11, 3)],
    '例：white shoes ／ a blue bag', MAIN),
  FS('be動詞のあとに色を置く形もあります。This car is red.（この車は赤い）、My shoes are white.（わたしのくつは白い）。このとき名詞は付けません。This car is a red. は誤りです。',
    [hd('be動詞のあとは色だけ'), ...vs('This car is a red.', 'This car is red.', 38, 46, 13), lb(160, 104, 'My shoes are white.', 14, C.blue, 'middle', true)],
    'is / are のあとは色だけ', GREEN),
  FS('❓なぜ be動詞のあとには a を付けないのでしょう。a red は「赤い〜」と、名詞が続くのを待つ形だからです。This car is red. では、red がすでに car を説明しているので、名詞も a も要りません。',
    qa('is red に a を付けないのは？', 'a red は「赤い〜」と、名詞が来るのを\n待っている形。\nThis car is red. では red が\nすでに car を説明している。', GREEN, 13),
    '説明が終わっているから、a も名詞も不要', PURPLE),
  FS('色と大きさを並べるときは、大きさ → 色 → 名詞の順です。a big red ball（大きな赤いボール）。two big round black tables のように数・大きさ・形・色の順に並ぶ、というきまりもあります。',
    [hd('並べる順番'), ...chips([['a', 'S'], ['big', 'M'], ['red', 'V'], ['ball', 'O']], 40, 36, { size: 15, h: 32 }), lb(160, 98, '大きさ → 色 → 名詞', 14, C.red, 'middle', true), lb(160, 122, '（数 → 大きさ → 形 → 色 → 名詞）', 12, C.gray)],
    '中学受験は「大きさ → 色 → 名詞」まで', RED),
  FS('色をたずねる文です。What color is your bag?（かばんは何色ですか）— It is blue.（色だけ）または It\'s a blue bag.（名詞ごと）。どちらも正解です。What color do you like? — I like green (the) best.',
    [hd('色をたずねる'), bx(8, 28, 304, 32, 'What color is your bag?', C.purple, FILL.purple, 14), bx(8, 68, 148, 34, 'It is blue.', C.green, FILL.green, 13), bx(164, 68, 148, 34, "It's a blue bag.", C.green, FILL.green, 13), lb(160, 126, 'color はアメリカ英語（イギリスは colour）', 11, C.gray)],
    'どちらの答え方でもよい', GREEN),
  FS('色は名詞としても使えます。Red is my favorite color.（赤はわたしの好きな色です）。orange は「オレンジ色の」という形容詞にも「オレンジ（果物）」という名詞にもなるので、an orange bag と an orange を区別します。',
    [hd('色を名詞として使う'), bx(8, 28, 304, 32, 'Red is my favorite color.', C.red, FILL.red, 14), bx(8, 70, 148, 40, 'an orange bag\nオレンジ色のかばん', C.main, FILL.warm, 11), bx(164, 70, 148, 40, 'an orange\nオレンジ1個', C.main, FILL.warm, 11)],
    'はたらきで見分ける', MAIN),
  FS('まとめです。①色は名詞の前（a red car）。②be動詞のあとは色だけ（This car is red.）。③大きさ → 色 → 名詞。④What color …? には、色だけでも名詞ごとでも答えられる。',
    [hd('まとめ'), ...grid([['① a red car\n色は名詞の前', BLUE], ['② is red\n名詞は付けない', GREEN], ['③ a big red ball\n大きさ→色→名詞', MAIN], ['④ What color …?\nIt is blue.', PURPLE]], 30, 52, 11)],
    '色は形容詞：名詞の前か be動詞のあと', MAIN),
], '色の語順');

// ── s362 職業をたずねる・答える ──
XF['xf_eigo_s362'] = show([
  FS('職業（しょくぎょう）のたずね方と答え方です。What do you do?（お仕事は何ですか）— I am a teacher.（教師です）。What do you do? は「あなたはふだん何をしていますか」＝「職業は何ですか」という決まった言い方です。',
    [hd('職業をたずねる'), bx(8, 30, 304, 34, 'What do you do?', C.purple, FILL.purple, 15), ar(160, 66, 160, 84, C.green), bx(8, 88, 304, 34, 'I am a teacher.', C.green, FILL.green, 15)],
    '職業は What do you do? でたずねる', BLUE),
  FS('❓答えのとき、なぜ teacher の前に a を付けるのでしょう。職業を言うときは、「先生という仲間のうちの一人」という意味で a を付けるからです。My father is a teacher. が正しく、My father is teacher. は誤りです。',
    [hd('職業には a を付ける'), ...vs('My father is\nteacher.', 'My father is\na teacher.', 38, 50, 13), lb(160, 114, '「先生という仲間の一人」→ a', 13, C.blue, 'middle', true)],
    '職業名には、かならず a / an', RED),
  FS('母音（ぼいん）の音で始まる職業名には an を付けます。an actor（俳優）、an engineer（技術者）、an artist（芸術家）、an office worker（会社員）。a doctor、a teacher は a です。',
    [hd('a か an か'), ...tbl([['a ＋', 'an ＋'], ['teacher', 'actor'], ['doctor', 'engineer'], ['nurse', 'artist'], ['pilot', 'office worker']], 28, { h: 22, size: 12, hdr: true, colors: [BLUE, GREEN] })],
    '母音で始まる → an', GREEN),
  FS('お父さんなど、ほかの人の職業をたずねるときは does を使います。What does your father do?（お父さんの仕事は何ですか）— He is a police officer.（警察官です）。三人称単数（さんにんしょうたんすう）の疑問文は does です。',
    [hd('ほかの人の職業'), bx(8, 28, 304, 34, 'What does your father do?', C.purple, FILL.purple, 14), ar(160, 64, 160, 82, C.green), bx(8, 86, 304, 34, 'He is a police officer.', C.green, FILL.green, 14), lb(160, 138, 'do ではなく does', 13, C.red, 'middle', true)],
    '主語が your father → does', PURPLE),
  FS('働く場所の言い方です。She works at a hospital.（彼女は病院で働いています）。My mother works for a bank.（母は銀行に勤めています）。場所には at、会社や組織の名前には for を使います。',
    [hd('働く場所'), bx(8, 30, 304, 34, 'She works at a hospital.', C.blue, FILL.blue, 14), bx(8, 72, 304, 34, 'My mother works for a bank.', C.green, FILL.green, 14), lb(160, 128, 'at ＝ 場所 ／ for ＝ 勤める先', 13, C.red, 'middle', true)],
    'works at ＋ 場所 ／ works for ＋ 勤め先', MAIN),
  FS('将来の夢は I want to be ... で言います。I want to be a doctor.（医者になりたい）、I want to be a soccer player in the future.（将来サッカー選手になりたい）。My dream is to be a pilot.（私の夢はパイロットになること）。',
    [hd('将来の夢'), bx(8, 30, 304, 34, 'I want to be a doctor.', C.blue, FILL.blue, 14), bx(8, 72, 304, 34, 'My dream is to be a pilot.', C.green, FILL.green, 14)],
    'want to ＋ be ＋ a 職業', BLUE),
  FS('❓want のあとは、なぜ to be なのでしょう。want の後ろは「to ＋ 動詞の原形（げんけい）」と決まっていて、be動詞の原形は be だからです。I want to am a doctor. や I want to is ... は誤りです。',
    qa('want to のあとは、なぜ be？', 'want の後ろは「to ＋ 動詞の原形」。\nbe動詞の原形は be。\nam / is / are は原形ではない。\nだから want to be ...', BLUE, 13),
    'to のあとは原形（be）', PURPLE),
  FS('理由を付けると、夢がよく伝わります。I want to be a nurse because I want to help sick people.（病気の人を助けたいから看護師になりたい）。because のあとには、理由になる文を続けます。',
    [hd('理由をそえる'), bx(8, 28, 304, 38, 'I want to be a nurse', C.blue, FILL.blue, 14), lb(160, 80, '＋ because ＋ 理由', 14, C.purple, 'middle', true), bx(8, 92, 304, 38, 'I want to help sick people.', C.green, FILL.green, 14)],
    'because ＋ 理由の文', GREEN),
  FS('まとめです。①職業は What do you do? ②答えには a / an。③人の職業は does。④at ＋ 場所、for ＋ 勤め先。⑤夢は I want to be ...。',
    [hd('まとめ'), ...grid([['① What do you do?', PURPLE], ['② a / an を付ける', BLUE], ['③ What does he do?', PURPLE], ['④ works at / for', GREEN]], 30, 36, 12), lb(160, 118, '⑤ I want to be a doctor.', 14, C.red, 'middle', true)],
    '職業の型は、この五つ', MAIN),
], '職業をたずねる・答える');

// ── s364 乗り物 ──
XF['xf_eigo_s364'] = show([
  FS('交通手段（こうつうしゅだん）は by ＋ 乗り物で表します。by bus（バスで）、by train（電車で）、by car（車で）、by bike（自転車で）。I go to school by bus. と、bus の前に a も the も付けません。',
    [hd('by ＋ 乗り物'), ...grid([['by bus\nバスで', BLUE], ['by train\n電車で', BLUE], ['by car\n車で', GREEN], ['by bike\n自転車で', GREEN]], 26, 34, 12), ...vs('by a bus', 'by bus', 106, 34, 14)],
    'by の後ろに a も the も付けない', BLUE),
  FS('❓なぜ冠詞（かんし：a・the）を付けないのでしょう。by bus の bus は、特定のバス（あのバス）ではなく「バスという手段」を表すからです。どのバスかは問題にしないので、a も the も要りません。',
    qa('by bus に冠詞がないのは？', 'bus は「あのバス」ではなく\n「バスという手段」を表している。\nどのバスかは問題にしないので\na も the も要らない。', BLUE, 13),
    '手段 ＝ 冠詞なし', PURPLE),
  FS('特定の乗り物の中にいると言うときは、冠詞を使い、in か on を付けます。I met him on the train.（電車の中で彼に会った）。She got in the car.（彼女は車に乗り込んだ）。「あの電車」が決まっているので the を使います。',
    [hd('特定の乗り物の中'), bx(8, 30, 304, 34, 'I met him on the train.', C.blue, FILL.blue, 14), bx(8, 72, 304, 34, 'She got in the car.', C.green, FILL.green, 14), lb(160, 128, 'あの電車・あの車 → the がつく', 13, C.red, 'middle', true)],
    '手段：by bus ／ 特定のもの：on the train', GREEN),
  FS('「歩いて」は by walk ではなく on foot です。I go to school on foot.（歩いて学校へ行きます）。I walk to school. と言いかえることもできます。foot は単数形のままで、on feet とは言いません。',
    [hd('歩いて ＝ on foot'), ...vs('by walk', 'on foot', 38, 40, 15), bx(8, 92, 304, 32, 'I go to school on foot. ＝ I walk to school.', C.blue, FILL.blue, 12)],
    '歩いて ＝ on foot', RED),
  FS('❓なぜ by walk と言えないのでしょう。walk は「歩く」という動詞で、乗り物の名前ではないからです。by のあとに置けるのは bus・train・car のような乗り物の名前だけ。足を使う手段は on foot という決まった形で言います。',
    qa('by walk がだめな理由は？', 'walk は動詞で、乗り物の名前ではない。\nby のあとに置けるのは乗り物の名前だけ。\n足を使うときは on foot という\n決まった形で言う。', RED, 13),
    'by ＋ 乗り物の名前だけ', PURPLE),
  FS('乗るときの動詞は、乗り物の大きさで使い分けます。バス・電車・自転車は get on（降りるときは get off）。車・タクシーは get in（降りるときは get out of）。',
    [hd('get on と get in'), bx(8, 28, 148, 56, 'get on / get off\nバス・電車\n自転車', C.blue, FILL.blue, 12), bx(164, 28, 148, 56, 'get in / get out of\n車・タクシー', C.green, FILL.green, 12), lb(160, 108, 'Get on the bus. ／ Get out of the car.', 12, C.ink, 'middle', true)],
    '乗り降りの動詞は対になる', BLUE),
  FS('❓なぜ on と in に分かれるのでしょう。バスや電車のように中で立てる乗り物と、自転車のようにまたがる乗り物には on。車やタクシーのように屋根のある小さな乗り物には in を使うからです。乗り物の大きさと形で決まります。',
    qa('on と in の分かれ目は？', '中で立てる乗り物（バス・電車）や\nまたがる乗り物（自転車）→ on\n屋根のある小さな乗り物\n（車・タクシー）→ in', GREEN, 13),
    '大きさと形で決まる', PURPLE),
  FS('かかる時間の言い方です。It takes twenty minutes by bike.（自転車で20分かかります）。How long does it take? とたずねます。この It は「それ」と訳さない主語です。',
    [hd('時間の言い方'), bx(8, 28, 304, 34, 'How long does it take?', C.purple, FILL.purple, 14), ar(160, 64, 160, 82, C.green), bx(8, 86, 304, 34, 'It takes twenty minutes by bike.', C.green, FILL.green, 13), lb(160, 138, 'It は訳さない主語', 12, C.gray)],
    'It takes ＋ 時間 ＋ by 乗り物', GREEN),
  FS('まとめです。①手段は by ＋ 乗り物（冠詞なし）。②特定の乗り物の中は on the train / in a taxi。③歩いては on foot。④乗り物の大きさで get on と get in を分ける。⑤時間は It takes ...。',
    [hd('まとめ'), ...grid([['① by bus\n冠詞なし', BLUE], ['② on the train\nin a taxi', GREEN], ['③ on foot', RED], ['④ get on / get in', MAIN]], 30, 40, 12), lb(160, 128, '⑤ It takes twenty minutes.', 13, C.purple, 'middle', true)],
    '交通手段のきまりは五つ', MAIN),
], 'by bus と on foot のわけ');

// ── s365 町の紹介 ──
XF['xf_eigo_s365'] = show([
  FS('「あなたの町を紹介（しょうかい）しなさい」という自由英作文は、四つの順に書けばかならずまとまります。①どこにあるか ②何があるか ③何ができるか ④気持ち。',
    [hd('町の紹介：四つの順'), ...row(['① どこ', '② 何がある', '③ できる', '④ 気持ち'], 40, BLUE, 11, 54, 10), lb(160, 118, 'この順に1文ずつ書く', 13, C.gray)],
    '場所 → もの → できること → 気持ち', BLUE),
  FS('①どこにあるか。I live in Osaka.（大阪に住んでいます）、My town is near Tokyo.（私の町は東京の近くです）、It is a small town in Nara.（奈良にある小さな町です）。',
    [hd('① どこにあるか'), bx(8, 28, 304, 30, 'I live in Osaka.', C.blue, FILL.blue, 14), bx(8, 66, 304, 30, 'My town is near Tokyo.', C.blue, FILL.blue, 14), bx(8, 104, 304, 30, 'It is a small town in Nara.', C.blue, FILL.blue, 14)],
    'live in ／ near ／ in', BLUE),
  FS('②何があるか。There are two parks in my town.（町には公園が二つあります）。We have a big library near the station.（駅の近くに大きな図書館があります）。My town is famous for its old temple.（古いお寺で有名です）。',
    [hd('② 何があるか'), bx(8, 28, 304, 30, 'There are two parks in my town.', C.green, FILL.green, 13), bx(8, 66, 304, 30, 'We have a big library near the station.', C.green, FILL.green, 12), bx(8, 104, 304, 30, 'My town is famous for its old temple.', C.green, FILL.green, 12)],
    'There are ／ We have ／ famous for', GREEN),
  FS('③何ができるか。You can enjoy beautiful flowers in spring.（春には美しい花が楽しめます）。You can eat delicious noodles there.（そこでおいしいめん類が食べられます）。You can ... で「〜できます」と紹介します。',
    [hd('③ できること'), bx(8, 30, 304, 34, 'You can enjoy beautiful flowers in spring.', C.main, FILL.warm, 12), bx(8, 74, 304, 34, 'You can eat delicious noodles there.', C.main, FILL.warm, 13), lb(160, 130, 'You can ＋ 動詞の原形', 13, C.red, 'middle', true)],
    '紹介 ＝ You can ...', MAIN),
  FS('④気持ちとまとめ。I like my town very much.（私は自分の町がとても好きです）。Please come and visit us.（ぜひ来てください）。最後に気持ちを書くと、読む人に感じが伝わります。',
    [hd('④ 気持ち・まとめ'), bx(8, 30, 304, 34, 'I like my town very much.', C.red, FILL.red, 14), bx(8, 74, 304, 34, 'Please come and visit us.', C.red, FILL.red, 14)],
    '最後は気持ちでしめくくる', RED),
  FS('❓文をつなぐ語は、なぜ使うのでしょう。短い文を並べるだけより、読む人が「つながり」をつかみやすくなるからです。and（そして）、but（しかし）、so（だから）、because（なぜなら）。',
    [hd('つなぐ語'), ...grid([['and\nそして', BLUE], ['but\nしかし', RED], ['so\nだから', GREEN], ['because\nなぜなら', MAIN]], 28, 40, 12), lb(160, 134, 'My town is small, but it is very beautiful.', 12, C.blue, 'middle', true)],
    'つなぐ語で、流れが生まれる', PURPLE),
  FS('人・職業・場所を組み合わせた文も書けるようにします。A doctor works at a hospital.（医者は病院で働く）。A teacher works at a school. We can borrow books at the library.（図書館で本を借りられる）。',
    [hd('人と場所を組み合わせる'), ...tbl([['人', '働く場所'], ['A doctor', 'a hospital'], ['A teacher', 'a school'], ['A cook', 'a restaurant']], 28, { h: 24, size: 12, hdr: true }), lb(160, 148, 'works at ＋ 場所', 12, C.blue, 'middle', true)],
    '人 ＋ works at ＋ 場所', GREEN),
  FS('❓書き終わったら何を見直すのでしょう。主語が三人称単数（さんにんしょうたんすう）のときは、動詞に -s を付けます。A doctor works ...（○）、A doctor work ...（×）。複数なら Doctors work ...。いちばん多い減点だからです。',
    [hd('見直し：動詞の -s'), ...vs('A doctor work\nat a hospital.', 'A doctor works\nat a hospital.', 38, 50, 12), lb(160, 112, '複数なら Doctors work …', 13, C.blue, 'middle', true)],
    '三人称単数 → 動詞に -s', RED),
  FS('まとめです。町の紹介は ①どこ ②何がある ③できること ④気持ち。つなぐ語（and・but・so・because）で流れを作り、最後に動詞の -s を見直します。',
    [hd('まとめ'), ...grid([['① どこにある', BLUE], ['② 何がある', GREEN], ['③ できること', MAIN], ['④ 気持ち', RED]], 30, 32, 13), lb(160, 114, 'つなぐ語 ＋ 動詞の -s の見直し', 13, C.purple, 'middle', true)],
    '短い文を、順番に書く', MAIN),
], '自分の町を紹介する型');

// ── s366 get ──
XF['xf_eigo_s366'] = show([
  FS('get は「手に入れる」と覚えがちですが、get up も get to も get on も同じ get です。まず、get の三つの顔を見ましょう。①手に入れる ②たどりつく ③〜になる。',
    [hd('get の三つの顔'), ...grid([['① 手に入れる\nI got a bike.', BLUE], ['② たどりつく\nI get to school.', GREEN], ['③ 〜になる\nIt gets dark.', RED]], 30, 56, 11, 3)],
    '意味はばらばら？ でも中心は一つ', BLUE),
  FS('❓三つの意味に共通する中心は何でしょう。「ある場所や状態にたどりつく」という感じです。手に入れる＝ものが自分の手にたどりつく。着く＝場所にたどりつく。〜になる＝ある状態にたどりつく。',
    qa('三つに共通する中心は？', '中心は「たどりつく」。\nもの → 自分の手にたどりつく\n場所 → 学校にたどりつく\n状態 → 暗い状態にたどりつく', GREEN, 13),
    'get ＝ たどりつく', PURPLE),
  FS('①手に入れる。I got a new bike for my birthday.（誕生日に新しい自転車をもらった）。Where did you get that book?（その本はどこで手に入れたの）。get の過去形は got です。',
    [hd('① 手に入れる・もらう'), bx(8, 30, 304, 34, 'I got a new bike for my birthday.', C.blue, FILL.blue, 13), bx(8, 72, 304, 34, 'Where did you get that book?', C.blue, FILL.blue, 13), lb(160, 128, 'get の過去形 ＝ got', 13, C.red, 'middle', true)],
    '手にたどりつく ＝ 手に入れる', BLUE),
  FS('②たどりつく。I get to school at eight.（8時に学校に着く）。What time did you get home?（何時に家に着きましたか）。get to ＋ 場所の形です。home・there・here の前には to を付けません。',
    [hd('② 場所にたどりつく'), bx(8, 28, 304, 32, 'I get to school at eight.', C.green, FILL.green, 14), bx(8, 68, 304, 32, 'What time did you get home?', C.green, FILL.green, 13), lb(160, 122, 'get to ＋ 場所 ／ home・there・here には to なし', 11, C.red, 'middle', true)],
    'get to ＋ 場所', GREEN),
  FS('❓home に to を付けないのはなぜでしょう。home・there・here は「家に」「そこに」「ここに」という意味をすでに含んでいる語だからです。to を付けると「に」が二重になってしまいます。',
    qa('get home に to が要らないのは？', 'home は「家に」の意味をすでに含む。\nthere も here も同じ。\nto を付けると「に」が二重になる。\nget home ／ get there ／ get here', GREEN, 12),
    '× get to home', RED),
  FS('③状態になる。get ＋ 形容詞で「〜の状態になる」。It is getting dark.（暗くなってきた）。She got angry.（彼女は怒った）。I got tired.（つかれた）。My father got sick last week.（父は先週病気になった）。',
    [hd('③ 状態になる'), ...grid([['It is getting dark.\n暗くなってきた', RED], ['She got angry.\n彼女は怒った', RED], ['I got tired.\nつかれた', MAIN], ['My father got sick.\n父は病気になった', MAIN]], 28, 44, 11)],
    'get ＋ 形容詞 ＝ 〜になる', RED),
  FS('❓be動詞と get はどうちがうのでしょう。be動詞は「〜である」という今の状態、get は「〜になる」という変化を表します。He is angry.（怒っている）、He got angry.（怒った状態になった）。',
    [hd('状態と変化'), bx(8, 30, 148, 56, 'He is angry.\n怒っている\n（状態）', C.blue, FILL.blue, 13), bx(164, 30, 148, 56, 'He got angry.\n怒った\n（変化）', C.red, FILL.red, 13), ar(156, 58, 164, 58, C.main), lb(160, 110, 'be ＝ ある ／ get ＝ なる', 13, C.main, 'middle', true)],
    'be動詞 ＝ 状態 ／ get ＝ 変化', MAIN),
  FS('まとめです。①get の中心は「たどりつく」。②手に入れる／場所に着く／状態になる。③get to ＋ 場所（home・there・here には to なし）。④get ＋ 形容詞 ＝ 〜になる。⑤過去形は got。',
    [hd('まとめ'), ...grid([['① 中心は\nたどりつく', GREEN], ['② 手に入れる\n着く・なる', BLUE], ['③ get to ＋ 場所\nget home', MAIN], ['④ get ＋ 形容詞\n過去形 got', RED]], 30, 52, 11)],
    'get は一つのイメージから広がる', MAIN),
], 'get の中心の意味');

// ── s367 take ──
XF['xf_eigo_s367'] = show([
  FS('take a bath は「ふろに入る」、take a walk は「散歩する」、take a picture は「写真をとる」です。take は「手に取る」が中心の意味なのに、なぜ「する」と訳せるのでしょう。',
    [hd('take ＋ 名詞 ＝ 〜する'), ...grid([['take a bath\nふろに入る', BLUE], ['take a walk\n散歩する', GREEN], ['take a picture\n写真をとる', MAIN], ['take a rest\n休けいする', PURPLE]], 28, 44, 12)],
    '「取る」なのに「する」？', BLUE),
  FS('❓答えです。take は「手に取る」から、「機会や行動を取る」に広がりました。名詞（めいし）で表した行動を「取る」＝「する」と言えるようになったのです。bath（入浴）という行動を取れば、take a bath です。',
    qa('take が「する」になるわけは？', 'take ＝「手に取る」\n　↓ 広がって\n「行動を取る」＝「する」\n名詞で表した行動を、取ってする。', BLUE, 13),
    'take ＋ 行動を表す名詞', PURPLE),
  FS('同じように、take a bus は「バスという手段を取る」、take care of は「世話という役目を引き受ける」です。I take the train to school.（電車で通学しています）。I take care of my dog every day.（毎日犬の世話をします）。',
    [hd('取る ＝ 利用する・引き受ける'), bx(8, 30, 304, 34, 'I take the train to school.', C.blue, FILL.blue, 14), bx(8, 72, 304, 34, 'I take care of my dog every day.', C.green, FILL.green, 13), lb(160, 128, 'take care of ＝ look after', 12, C.gray)],
    '乗り物を取る／役目を取る', GREEN),
  FS('日本語の「する」から do を選ばないようにします。×do a bath ではなく take a bath。また「写真をとる」は take a picture、「絵をかく」は draw a picture と、動詞がちがいます。',
    [hd('動詞をまちがえない'), ...vs('do a bath', 'take a bath', 36, 40, 14), ...vs('take a picture\n（絵をかく）', 'draw a picture\n（絵をかく）', 88, 46, 11)],
    'take a picture ＝ 写真 ／ draw a picture ＝ 絵', RED),
  FS('時間がかかる文です。It takes ten minutes.（10分かかります）。It takes about an hour by train.（電車で1時間ほどかかります）。How long does it take? とたずねます。',
    [hd('時間がかかる'), bx(8, 30, 304, 34, 'It takes ten minutes.', C.blue, FILL.blue, 15), bx(8, 72, 304, 34, 'It takes about an hour by train.', C.blue, FILL.blue, 13), lb(160, 128, 'How long does it take?', 13, C.purple, 'middle', true)],
    'It takes ＋ 時間', BLUE),
  FS('❓なぜ主語が I ではなく It なのでしょう。時刻や天気と同じで「何が」にあたる語がないからです。時間を取るのは「私」ではなく状況です。人を入れたいときは It takes me twenty minutes to go to school. とします。',
    qa('主語がなぜ It？', '「何が時間を取る？」にあたる語がない。\n時刻や天気と同じ、It の文。\n人を入れるなら\nIt takes me twenty minutes to 〜', BLUE, 13),
    '× I take twenty minutes to school', PURPLE),
  FS('It takes ＋ 人 ＋ 時間 ＋ to ＋ 動詞の原形。It took him two hours to finish the work.（彼はその仕事を終えるのに2時間かかった）。過去の文では take が took に変わります。',
    [hd('人と時間と to'), ...chips([['It', 'S'], ['took', 'V'], ['him', 'O'], ['two hours', 'N'], ['to finish the work.', 'M']], 8, 40, { size: 12, h: 30 }), lb(160, 100, 'take → took → taken', 13, C.green, 'middle', true)],
    'It takes ＋ 人 ＋ 時間 ＋ to 原形', GREEN),
  FS('お金がかかるときは take ではなく cost を使います。It costs 500 yen.（500円かかります）。take off は「ぬぐ」と「離陸（りりく）する」の二つの意味があります。Take off your shoes.（くつをぬぎなさい）。',
    [hd('cost と take off'), bx(8, 30, 304, 30, 'It costs 500 yen.（お金は cost）', C.red, FILL.red, 13), bx(8, 68, 304, 30, 'Take off your shoes.（ぬぐ）', C.blue, FILL.blue, 13), bx(8, 106, 304, 30, 'The plane took off at nine.（離陸）', C.green, FILL.green, 13)],
    'お金 ＝ cost ／ ぬぐ・離陸 ＝ take off', MAIN),
  FS('まとめです。①take ＋ 名詞で「する」。②take care of ＝ look after。③時間がかかる文の主語は It。④お金は cost。⑤過去形は took、過去分詞は taken。',
    [hd('まとめ'), ...grid([['① take a bath\ntake a walk', BLUE], ['② take care of\n＝ look after', GREEN], ['③ It takes\n10 minutes', PURPLE], ['④ お金は cost', RED]], 30, 48, 12), lb(160, 144, '⑤ take - took - taken', 13, C.main, 'middle', true)],
    'take は「行動を取る」動詞', MAIN),
], 'take が「する」を表し、時間の主語が It のわけ');

// ── s368 make ──
XF['xf_eigo_s368'] = show([
  FS('make の中心の意味は「何かを作り出す」です。My mother makes breakfast every morning.（母は毎朝、朝食を作る）。I made a birthday card for my friend.（友だちに誕生日カードを作った）。過去形は made です。',
    [hd('make ＝ 作る'), bx(8, 30, 304, 34, 'My mother makes breakfast every morning.', C.blue, FILL.blue, 12), bx(8, 72, 304, 34, 'I made a birthday card for my friend.', C.blue, FILL.blue, 12), lb(160, 128, 'make - made - made', 13, C.red, 'middle', true)],
    '作り出す ＝ make', BLUE),
  FS('❓ところが、The news made me happy. を「そのニュースは私を幸せに作った」と訳すと変です。make には、もう一つの使い方があります。それは何でしょう。',
    [hd('The news made me happy.'), bx(8, 30, 304, 34, '× 私を幸せに「作った」？', C.red, FILL.red, 14), ar(160, 66, 160, 84, C.purple), bx(8, 88, 304, 34, '◯ 私を幸せな状態に「した」', C.green, FILL.green, 14)],
    'make には「〜にする」の使い方もある', PURPLE),
  FS('答えです。make ＋ 人（物）＋ 形容詞で「〜を…にする」。The news made me happy. は「その知らせは私をうれしくした」＝「それを聞いてうれしかった」。Music makes us happy. も同じ形です。',
    [hd('make ＋ 人 ＋ 形容詞'), ...chips([['The news', 'S'], ['made', 'V'], ['me', 'O'], ['happy.', 'N']], 8, 40, { size: 14, h: 32 }), lb(160, 98, '人を、ある状態にする', 13, C.red, 'middle', true), lb(160, 122, 'Music makes us happy.  This makes me sad.', 12, C.blue, 'middle', true)],
    'make ＋ 人 ＋ 形容詞 ＝ 人を〜にする', RED),
  FS('熟語（じゅくご）を見ましょう。make friends with（〜と友だちになる）、make a mistake（まちがえる）、make a speech（スピーチをする）、make a plan（計画を立てる）、make a noise（音を立てる）、make up one\'s mind（決心する）。',
    [hd('make の熟語'), ...grid([['make friends with\n〜と友だちになる', BLUE], ['make a mistake\nまちがえる', RED], ['make a speech\nスピーチをする', GREEN], ['make a plan\n計画を立てる', MAIN], ['make a noise\n音を立てる', PURPLE], ['make up one\'s mind\n決心する', PURPLE]], 28, 34, 11)],
    'make ＋ 名詞 の熟語', MAIN),
  FS('❓make friends では、なぜ friends と複数形（ふくすうけい）になるのでしょう。友だちになるのは自分と相手の二人以上の関係だからです。I made friends with a girl from Canada.（カナダから来た女の子と友だちになった）。',
    qa('make friends が複数形なのは？', '友だちになるのは、自分と相手の\n二人以上の関係。\nだから friends と複数形にする。\nmake friends with 〜', GREEN, 13),
    '× make a friend with', PURPLE),
  FS('材料を言うときも make を使います。be made of（見て材料がわかる）、be made from（形が変わっていてわからない）、be made in（〜製）。This desk is made of wood.、Cheese is made from milk.、This car was made in Japan.',
    [hd('材料と産地'), ...tbl([['言い方', '意味', '例'], ['made of', '見てわかる', 'desk … wood'], ['made from', '形が変わる', 'cheese … milk'], ['made in', '〜製', 'car … Japan']], 28, { h: 24, size: 11, hdr: true })],
    'of と from は「見てわかるか」で決める', GREEN),
  FS('まとめです。①make ＝ 作る（過去形 made）。②make ＋ 人 ＋ 形容詞 ＝ 人を〜にする。③make friends with は friends と複数形。④材料は of・from、産地は in。',
    [hd('まとめ'), ...grid([['① 作る\nmake - made', BLUE], ['② make me happy\n人を〜にする', RED], ['③ make friends\nwith 〜', GREEN], ['④ made of / from\nmade in', MAIN]], 30, 52, 11)],
    'make は「作る」と「〜にする」', MAIN),
], 'make の使い方');

// ── s369 look ──
XF['xf_eigo_s369'] = show([
  FS('look は、あとに続く前置詞（ぜんちし）で意味がまるでちがいます。look at は「見る」、look for は「さがす」、look after は「世話をする」、look out は「気をつける」。まず四つを並べます。',
    [hd('look ＋ 前置詞'), ...grid([['look at\n見る', BLUE], ['look for\nさがす', GREEN], ['look after\n世話をする', MAIN], ['look out\n気をつける', RED]], 28, 44, 13)],
    '前置詞が変わると意味が変わる', BLUE),
  FS('❓なぜ前置詞で意味が変わるのでしょう。前置詞にはそれぞれイメージがあるからです。at は「一点」、for は「求めて」、after は「あとについて」。このイメージを look に足すと、意味が見えてきます。',
    qa('前置詞のイメージは？', 'at ＝ 一点（そこを見つめる）\nfor ＝ 求めて（ほしいものを追う）\nafter ＝ あとについて（ずっとそばに）\nlook にこのイメージが足される', BLUE, 13),
    'at＝一点 ／ for＝求めて ／ after＝あとに', PURPLE),
  FS('look at は一点を見つめます。Look at the blackboard.（黒板を見なさい）。Look at that beautiful bird.（あのきれいな鳥を見て）。見るものが何か、はっきり決まっています。',
    [hd('look at ＝ 一点を見る'), ci(60, 66, 22, '目', C.blue, FILL.blue, 15), ar(84, 66, 196, 66, C.blue), bx(200, 40, 104, 52, 'blackboard\n（黒板）', C.main, FILL.warm, 12), bx(8, 104, 304, 32, 'Look at the blackboard.', C.blue, FILL.blue, 14)],
    'at ＝ 一点を見つめる', BLUE),
  FS('look for は求めてさがします。I am looking for my key.（かぎをさがしています）。What are you looking for?（何をさがしているのですか）。見つかったかどうかは問わず、「さがしている最中」を表します。',
    [hd('look for ＝ さがす'), bx(8, 30, 304, 34, 'I am looking for my key.', C.green, FILL.green, 14), bx(8, 72, 304, 34, 'What are you looking for?', C.green, FILL.green, 14), lb(160, 128, '「さがしている最中」を表す', 13, C.red, 'middle', true)],
    'for ＝ 求めて', GREEN),
  FS('look after は、あとについて世話をします。She looks after her little brother.（彼女は弟の世話をする）。She takes care of her little brother. と同じ意味です。look out は Look out! A car is coming.（危ない！ 車が来る）と注意を呼びかけます。',
    [hd('look after ・ look out'), bx(8, 30, 304, 34, 'She looks after her little brother.', C.main, FILL.warm, 13), lb(160, 82, '＝ She takes care of her little brother.', 12, C.gray), bx(8, 98, 304, 34, 'Look out! A car is coming.', C.red, FILL.red, 14)],
    'after ＝ 世話 ／ out ＝ 危ない！', MAIN),
  FS('「〜に見える」の look もあります。look ＋ 形容詞は like なしです。You look happy today.（今日はうれしそうだね）。She looks tired.（つかれているようだ）。look ＋ 名詞だと like が必要です。',
    [hd('look ＋ 形容詞'), bx(8, 30, 304, 34, 'You look happy today.', C.blue, FILL.blue, 15), bx(8, 72, 304, 34, 'She looks tired.', C.blue, FILL.blue, 15), lb(160, 128, '形容詞のときは like を付けない', 13, C.red, 'middle', true)],
    '後ろが形容詞 → like なし', BLUE),
  FS('❓では like はいつ必要でしょう。後ろが名詞（めいし）のときです。He looks like his father.（彼は父親に似ている）、That cloud looks like a rabbit.（あの雲はうさぎのように見える）。He looks a teacher. は誤りです。',
    qa('like が必要なのは？', '後ろが形容詞 → look happy（like なし）\n後ろが名詞 → look like a teacher\n（like あり）\n× He looks a teacher.', RED, 13),
    '名詞なら like を付ける', PURPLE),
  FS('まとめです。①look at ＝ 見る ②look for ＝ さがす ③look after ＝ 世話をする ④look out ＝ 気をつける ⑤look ＋ 形容詞 ／ look like ＋ 名詞。look forward to は -ing を続けます。',
    [hd('まとめ'), ...grid([['look at\n見る', BLUE], ['look for\nさがす', GREEN], ['look after\n世話をする', MAIN], ['look out\n気をつける', RED]], 26, 36, 12), lb(160, 118, 'look ＋ 形容詞 ／ look like ＋ 名詞', 13, C.ink, 'middle', true), lb(160, 140, 'look forward to seeing you（-ing）', 12, C.gray)],
    '前置詞まで含めて一つの語', MAIN),
], 'look ＋ 前置詞のイメージ');

// ── s370 put ──
XF['xf_eigo_s370'] = show([
  FS('「コートを着なさい」は Put on your coat. でも Put your coat on. でもかまいません。名詞（めいし）のときは、on の前でも後ろでも置けます。',
    [hd('名詞のとき：どちらでもよい'), bx(8, 30, 304, 34, 'Put on your coat.', C.green, FILL.green, 15), bx(8, 72, 304, 34, 'Put your coat on.', C.green, FILL.green, 15), lb(160, 128, 'どちらも正しい', 13, C.green, 'middle', true)],
    '名詞（your coat）は前でも後ろでも', GREEN),
  FS('❓では「それを着なさい」はどうでしょう。it に変えると Put it on. になります。Put on it. は誤りです。代名詞（だいめいし）の it・them・him・her は、かならず put と on のあいだに入ります。',
    [hd('代名詞のときは真ん中'), ...vs('Put on it.', 'Put it on.', 38, 44, 16), lb(160, 104, '代名詞はまんなか', 14, C.red, 'middle', true), lb(160, 126, 'Take them off. ◯ ／ Take off them. ×', 12, C.gray)],
    '代名詞 ＝ 動詞と on のあいだ', RED),
  FS('❓なぜ代名詞は真ん中に入るのでしょう。it や them は短くて軽い語なので、文の最後に置かず、動詞のすぐ後ろに置くきまりになっているからです。重い名詞は後ろでもよく、軽い代名詞は間にはさむのです。',
    qa('代名詞が真ん中に来るわけは？', 'it・them は短くて軽い語。\n文の最後ではなく、\n動詞のすぐ後ろに置くきまり。\n重い名詞は後ろでもよい。', BLUE, 13),
    '軽い語は動詞の近くに', PURPLE),
  FS('同じきまりが働く熟語（じゅくご）があります。turn on / turn off（つける・消す）、pick up（拾う）、try on（試着する）、look up（調べる）。Turn it on.、Pick it up.、Can I try it on?、Look it up.',
    [hd('同じきまりの熟語'), ...tbl([['熟語', '代名詞のとき'], ['turn on / off', 'Turn it on.'], ['pick up', 'Pick it up.'], ['try on', 'Try it on.'], ['look up', 'Look it up.']], 28, { h: 22, size: 12, hdr: true })],
    '動詞 ＋ 副詞：代名詞は間にはさむ', GREEN),
  FS('ちがうきまりの熟語もあります。look at・look for・listen to のように「動詞 ＋ 前置詞」の熟語では、代名詞も後ろに置きます。Look at it.（○）、Look it at.（×）、Listen to me.（○）。',
    [hd('動詞 ＋ 前置詞は後ろ'), ...vs('Look it at.', 'Look at it.', 38, 44, 15), lb(160, 104, 'Listen to me. ◯', 14, C.blue, 'middle', true)],
    '前置詞の熟語は、代名詞も最後に置く', BLUE),
  FS('❓どうやって見分けるのでしょう。on・off・up・down は、名詞なしでも意味を持つ副詞（ふくし）です。at・to・for は、かならず名詞を必要とする前置詞です。副詞なら間、前置詞なら最後と覚えます。',
    [hd('副詞と前置詞'), bx(8, 30, 148, 56, 'on / off / up / down\n単独でも意味あり\n（副詞）', C.green, FILL.green, 11), bx(164, 30, 148, 56, 'at / to / for\n名詞が必要\n（前置詞）', C.blue, FILL.blue, 11), lb(80, 106, '代名詞は間', 13, C.green, 'middle', true), lb(240, 106, '代名詞は最後', 13, C.blue, 'middle', true)],
    '副詞 → 間 ／ 前置詞 → 最後', MAIN),
  FS('並べかえの練習です。「それをかたづけなさい」は put away を使って Put it away.。「それらをぬぎなさい」は Take them off.。代名詞を真ん中に入れれば正解です。',
    [hd('練習'), bx(8, 30, 304, 34, 'かたづけなさい（それを） → Put it away.', C.green, FILL.green, 13), bx(8, 72, 304, 34, 'ぬぎなさい（それらを） → Take them off.', C.green, FILL.green, 13), lb(160, 128, '間にはさめば正解', 13, C.red, 'middle', true)],
    '代名詞は、動詞と副詞のあいだ', GREEN),
  FS('まとめです。①名詞は前でも後ろでもよい。②代名詞（it・them）は put と on の間。③turn on・pick up・try on・look up も同じ。④look at・listen to のような前置詞の熟語は、代名詞も最後。',
    [hd('まとめ'), ...grid([['① Put on your coat.\nPut your coat on.', BLUE], ['② Put it on.', RED], ['③ Turn it on.\nPick it up.', GREEN], ['④ Look at it.', MAIN]], 30, 48, 11)],
    '代名詞は「副詞なら真ん中」', MAIN),
], 'put の熟語と代名詞の位置');

// ── s372 be動詞＋形容詞＋前置詞 ──
XF['xf_eigo_s372'] = show([
  FS('「サッカーが得意だ」の「が」は、英語では at になります。be good at soccer。なぜ at なのかを考えても答えは出ません。形容詞（けいようし）ごとに、組む前置詞（ぜんちし）が決まっているからです。',
    [hd('形容詞ごとに前置詞が決まる'), ...chips([['I', 'S'], ['am', 'V'], ['good', 'O'], ['at', 'X'], ['soccer.', 'M']], 20, 40, { size: 15, h: 34 }), lb(160, 100, '「が」→ at ？', 14, C.red, 'middle', true), lb(160, 122, 'good と at は、いつもセット', 12, C.gray)],
    'be good at ＝ 〜が得意だ', BLUE),
  FS('❓なぜ at なのか、考えても意味がないのはなぜでしょう。形容詞ごとに、組む前置詞が決まっていて、ひとまとまりの言い方として使われるからです。理由を探すより、セットで覚えるほうが速く確実です。',
    qa('なぜ at か、考えなくてよい？', '形容詞ごとに、組む前置詞が決まっている。\nひとまとまりの言い方として使う。\n理由を探すより、セットで覚える。\ngood at / interested in / famous for', BLUE, 12),
    'セットで声に出して覚える', PURPLE),
  FS('at をとる組です。be good at（〜が得意だ）、be poor at / be bad at（〜が苦手だ）、be surprised at（〜に驚く）。She is good at swimming.（彼女は泳ぐのが得意だ）。I was surprised at the news.（その知らせに驚いた）。',
    [hd('at をとる'), ...grid([['be good at\n得意だ', BLUE], ['be poor at\n苦手だ', BLUE], ['be surprised at\n驚く', BLUE]], 28, 44, 12, 3), bx(8, 84, 304, 28, 'She is good at swimming.', C.green, FILL.green, 13), bx(8, 116, 304, 28, 'I was surprised at the news.', C.green, FILL.green, 13)],
    'good at ／ poor at ／ surprised at', BLUE),
  FS('in と for をとる組です。be interested in（〜に興味がある）。be famous for（〜で有名だ）、be late for（〜におくれる）、be ready for（〜の準備ができている）。Kyoto is famous for its old temples.',
    [hd('in と for'), bx(8, 28, 304, 30, 'be interested in （〜に興味がある）', C.green, FILL.green, 13), ...grid([['be famous for\n有名だ', RED], ['be late for\nおくれる', RED], ['be ready for\n準備ができた', RED]], 66, 40, 11, 3), lb(160, 122, 'Kyoto is famous for its old temples.', 12, C.blue, 'middle', true)],
    'interested in ／ famous for', GREEN),
  FS('of をとる組です。be afraid of（〜をこわがる）、be full of（〜でいっぱいだ）、be proud of（〜を誇りに思う）、be fond of（〜が好きだ）。My sister is afraid of dogs.（姉は犬をこわがる）。The box is full of books.',
    [hd('of をとる'), ...grid([['be afraid of\nこわがる', MAIN], ['be full of\nいっぱいだ', MAIN], ['be proud of\n誇りに思う', MAIN], ['be fond of\n好きだ', MAIN]], 28, 40, 12), lb(160, 134, 'My sister is afraid of dogs.', 13, C.blue, 'middle', true)],
    'afraid of ／ full of ／ proud of ／ fond of', MAIN),
  FS('from と to をとる組です。be different from（〜とちがう）、be kind to（〜に親切だ）。My idea is different from yours.（私の考えはあなたのとちがう）。He is kind to everyone.（彼はだれにでも親切だ）。',
    [hd('from と to'), ...grid([['be different from\n〜とちがう', PURPLE], ['be kind to\n〜に親切だ', PURPLE]], 28, 44, 13), bx(8, 84, 304, 30, 'He is kind to everyone.', C.blue, FILL.blue, 14)],
    'different from ／ kind to', PURPLE),
  FS('famous for と famous as のちがいです。for は有名な理由、as は「〜として」の立場を表します。Kyoto is famous for its old temples.（古い寺で有名）。He is famous as a singer.（歌手として有名）。',
    [hd('famous for と famous as'), bx(8, 30, 148, 56, 'for ＝ 理由\nfamous for\nits old temples', C.blue, FILL.blue, 12), bx(164, 30, 148, 56, 'as ＝ 〜として\nfamous as\na singer', C.green, FILL.green, 12), lb(160, 110, '有名な理由 ／ 有名な立場', 13, C.red, 'middle', true)],
    'for ＝ 理由 ／ as ＝ 立場', RED),
  FS('❓前置詞のあとに動詞を置くときは、どうするのでしょう。かならず -ing の形（動名詞〈どうめいし〉）にします。I am good at playing tennis. は正しく、good at play tennis と good at to play tennis は誤りです。',
    [hd('前置詞の後ろは名詞か -ing'), ...vs('good at play\ngood at to play', 'good at playing\ntennis', 36, 54, 12), lb(160, 112, 'interested in learning ／ afraid of making', 12, C.blue, 'middle', true)],
    '前置詞 ＋ -ing', RED),
  FS('まとめです。①形容詞と前置詞はセット。②at・in・for・of・from・to を覚える。③famous for ＝ 理由、famous as ＝ 立場。④前置詞のあとに動詞を置くなら -ing。⑤interested は人、interesting は物。',
    [hd('まとめ'), ...grid([['① セットで覚える', BLUE], ['② at in for of\nfrom to', GREEN], ['③ famous for / as', MAIN], ['④ 前置詞 ＋ -ing', RED]], 30, 40, 12), lb(160, 128, '⑤ I am interested（人）／ This is interesting（物）', 11, C.purple, 'middle', true)],
    '前置詞は形容詞ごとに決まっている', MAIN),
], 'be動詞 ＋ 形容詞 ＋ 前置詞');

// ── s375 動詞＋前置詞 ──
XF['xf_eigo_s375'] = show([
  FS('「音楽を聞く」は listen music ではなく listen to music です。日本語で「〜を」と言っても、英語では前置詞（ぜんちし）が要る動詞があります。まず形を見ましょう。',
    [hd('日本語の「を」につられない'), ...vs('listen music', 'listen to music', 38, 44, 15), bx(8, 96, 304, 32, 'I listen to the radio every night.', C.blue, FILL.blue, 13)],
    'listen ＋ to ＋ 名詞', RED),
  FS('❓なぜ listen には to が要るのでしょう。listen は「耳をかたむける」という動作で、音のほうへ意識を向ける動詞だからです。向かう先を示すのが to です。look が at を取るのと同じ考え方です。',
    qa('listen に to が要るわけは？', 'listen ＝ 耳をかたむける動作。\n音のほうへ意識を向けるので、\n向かう先を示す to が必要。\n（look at と同じ考え方）', BLUE, 13),
    '動作の向かう先 ＝ 前置詞', PURPLE),
  FS('to をとる動詞です。listen to（聞く）、talk to（話す）、speak to（話しかける）、belong to（所属する）、say to（〜に言う）。I belong to the tennis club.（テニス部に入っています）。',
    [hd('to をとる'), ...grid([['listen to\n〜を聞く', BLUE], ['talk to\n〜と話す', BLUE], ['speak to\n〜に話しかける', BLUE], ['belong to\n〜に所属する', BLUE]], 28, 42, 12), lb(160, 138, 'I belong to the tennis club.', 13, C.green, 'middle', true)],
    '向かう先に to', BLUE),
  FS('for をとる動詞です。wait for（待つ）、look for（さがす）、ask for（求める）、leave for（〜に向けて出発する）。I waited for the bus for ten minutes.（10分間バスを待った）。Thank you for your help.',
    [hd('for をとる'), ...grid([['wait for\n〜を待つ', GREEN], ['look for\n〜をさがす', GREEN], ['ask for\n〜を求める', GREEN], ['leave for\n〜に向けて出発', GREEN]], 28, 42, 12), lb(160, 138, 'I waited for the bus for ten minutes.', 12, C.blue, 'middle', true)],
    '求めるものに for', GREEN),
  FS('at・of・on・with をとる動詞です。look at・arrive at・laugh at。take care of・think of・hear of。depend on。agree with。help ～ with。Can you help me with my homework?（宿題を手伝ってくれますか）。',
    [hd('そのほかの前置詞'), ...tbl([['前置詞', '動詞の例'], ['at', 'look at / arrive at / laugh at'], ['of', 'take care of / think of'], ['on', 'depend on'], ['with', 'agree with / help ～ with']], 28, { h: 22, size: 11, hdr: true })],
    '動詞ごとに前置詞が決まっている', MAIN),
  FS('日本語の「〜を」につられて前置詞を落とす誤りが多いです。listen the radio も wait the bus も誤りです。listen to the radio、wait for the bus と書きます。',
    [hd('前置詞を落とさない'), ...vs('listen the radio\nwait the bus', 'listen to the radio\nwait for the bus', 36, 56, 12), lb(160, 118, '「〜を」でも前置詞が要る動詞', 13, C.red, 'middle', true)],
    '日本語の「を」を信じない', RED),
  FS('逆に、日本語では「〜に」と言うのに前置詞がいらない動詞もあります。reach（着く）、enter（入る）、visit（訪れる）、discuss（話し合う）、marry（結婚する）、answer（答える）。We reached the station.（駅に着いた）。',
    [hd('前置詞がいらない動詞'), ...grid([['reach the station\n駅に着く', GREEN], ['enter the room\n部屋に入る', GREEN], ['visit my uncle\nおじを訪れる', GREEN], ['discuss the problem\n問題を話し合う', GREEN], ['marry him\n彼と結婚する', GREEN], ['answer the question\n質問に答える', GREEN]], 28, 34, 11)],
    '× reached at ／ × entered into ／ × visited to', RED),
  FS('「着く」の三つの言い方も整理します。arrive at ＋ せまい場所（arrive at the station）、arrive in ＋ 広い場所（arrive in Japan）、get to ＋ 場所、reach ＋ 場所（前置詞なし）。We arrived at the airport at ten.',
    [hd('「着く」の言い方'), ...tbl([['言い方', '使い方'], ['arrive at', 'せまい場所（駅・空港）'], ['arrive in', '広い場所（国・都市）'], ['get to', '場所（to あり）'], ['reach', '場所（前置詞なし）']], 28, { h: 22, size: 11, hdr: true })],
    '同じ意味でも、前置詞のつき方がちがう', MAIN),
  FS('まとめです。①to・for・at・of・on・with は動詞ごとに決まる。②日本語の「を」につられて前置詞を落とさない。③reach・enter・visit・discuss・marry・answer は前置詞なし。④着くは arrive at / in、get to、reach。',
    [hd('まとめ'), ...grid([['① 動詞ごとに\n前置詞が決まる', BLUE], ['② 「を」でも\n前置詞が要る', RED], ['③ reach enter visit\n前置詞なし', GREEN], ['④ arrive at / in\nget to / reach', MAIN]], 30, 52, 11)],
    '前置詞まで含めて一つの動詞', MAIN),
], '動詞と前置詞のかたまり');

// ── s377 自己紹介 ──
XF['xf_eigo_s377'] = show([
  FS('自己紹介（じこしょうかい）の型は、①名前 ②出身 ③学年・年齢 ④好きなこと ⑤家族 ⑥しめくくりの順です。この順に一文ずつ書くだけで、かならず書けます。',
    [hd('自己紹介の型'), ...grid([['① 名前', BLUE], ['② 出身', GREEN], ['③ 学年・年齢', MAIN], ['④ 好きなこと', RED], ['⑤ 家族', PURPLE], ['⑥ しめくくり', BLUE]], 28, 38, 12, 3)],
    '短い文を、順に並べる', BLUE),
  FS('①名前。Hello. My name is Ken Sato. または I\'m Ken. ケンと呼んでほしいときは Please call me Ken. です。',
    [hd('① 名前'), bx(8, 30, 304, 32, 'Hello. My name is Ken Sato.', C.blue, FILL.blue, 14), bx(8, 70, 304, 32, 'Please call me Ken.', C.blue, FILL.blue, 14), lb(160, 122, 'My name is ＋ 名 ＋ 姓', 13, C.red, 'middle', true)],
    '名前 ＝ My name is …', BLUE),
  FS('❓日本語では姓から言うのに、英語はなぜ名前（名）が先なのでしょう。英語では「Ken（名）→ Sato（姓）」の順に言うきまりだからです。姓から言うと、相手には Sato が名前だと思われて、まぎらわしくなります。',
    qa('英語は名が先？', '英語では、名（Ken）→ 姓（Sato）の順。\nこれが英語の名前の言い方。\n姓から言うと、Sato が名前だと\n思われて相手が混乱する。', BLUE, 13),
    'Ken Sato ＝ 名 ＋ 姓', PURPLE),
  FS('②出身と住んでいる場所。I\'m from Osaka. ＝ I come from Osaka.（大阪出身です）。I live in Nara with my family.（家族と奈良に住んでいます）。from は出身、live in は住んでいる場所です。',
    [hd('② 出身と住んでいる場所'), bx(8, 30, 304, 32, "I'm from Osaka.", C.green, FILL.green, 14), bx(8, 70, 304, 32, 'I live in Nara with my family.', C.green, FILL.green, 13), lb(160, 122, 'from ＝ 出身 ／ live in ＝ 住んでいる', 13, C.red, 'middle', true)],
    'from と live in を使い分ける', GREEN),
  FS('③学年・年齢。I\'m twelve years old.（12歳です）。I\'m a sixth grader. または I\'m in the sixth grade.（6年生です）。「年齢」は years old で、twelve のあとは years と複数形にします。',
    [hd('③ 年齢と学年'), bx(8, 30, 304, 32, "I'm twelve years old.", C.main, FILL.warm, 14), bx(8, 70, 304, 32, "I'm in the sixth grade.", C.main, FILL.warm, 14), lb(160, 122, 'twelve years（複数形）／ one year old だけ単数', 12, C.red, 'middle', true)],
    '年齢 ＝ 数 ＋ years old', MAIN),
  FS('④好きなこと・得意なこと。I like soccer very much.（サッカーが大好き）。My favorite subject is science.（好きな教科は理科）。I\'m good at swimming.（泳ぐのが得意）。I play the piano every day.（毎日ピアノを弾く）。',
    [hd('④ 好きなこと'), bx(8, 28, 304, 28, 'I like soccer very much.', C.red, FILL.red, 13), bx(8, 62, 304, 28, "I'm good at swimming.", C.red, FILL.red, 13), bx(8, 96, 304, 28, 'I play the piano every day.', C.red, FILL.red, 13), lb(160, 140, '楽器の前には the', 12, C.red, 'middle', true)],
    '好き ／ 得意 ／ 楽器には the', RED),
  FS('⑤家族とペット。I have a brother and a dog.（兄弟が一人と犬がいます）。⑥しめくくり。Thank you. または Nice to meet you.（はじめまして）で終わります。',
    [hd('⑤ 家族 ・ ⑥ しめくくり'), bx(8, 30, 304, 32, 'I have a brother and a dog.', C.purple, FILL.purple, 14), bx(8, 70, 304, 32, 'Thank you. ／ Nice to meet you.', C.blue, FILL.blue, 14)],
    '最後は、あいさつで終える', PURPLE),
  FS('まとめです。①My name is 名＋姓。②from と live in。③years old は複数形。④好きなこと・得意なこと。⑤一文を短く、主語と動詞をはっきり。長い文は誤りが増えます。',
    [hd('まとめ'), ...grid([['① My name is\n名 ＋ 姓', BLUE], ['② I\'m from …\nI live in …', GREEN], ['③ twelve\nyears old', MAIN], ['④ I like … ／\nI\'m good at …', RED]], 30, 52, 11)],
    '短く、主語と動詞をはっきり書く', MAIN),
], '自己紹介の型');

// ── s378 電話 ──
XF['xf_eigo_s378'] = show([
  FS('電話で名乗るとき、I am Ken. とは言いません。This is Ken. と言います。まず、電話の基本の流れを見ましょう。受ける → 名乗る → 相手を確かめる → 取り次ぐ。',
    [hd('電話の流れ'), ...row(['受ける', '名乗る', '確かめる', '取り次ぐ'], 40, BLUE, 12, 50, 12), lb(160, 118, 'Hello. This is Ken (speaking).', 14, C.blue, 'middle', true)],
    '電話には専用の言い方がある', BLUE),
  FS('❓なぜ I am ではなく This is なのでしょう。電話では相手に姿が見えず、声しか伝わりません。そこで自分を「この声の人」として示す This を使うのです。Is this Aya?（アヤさんですか）のように、相手も this で呼びます。',
    qa('なぜ This is？', '電話では相手に姿が見えない。\n自分を「この声の人」として示す\nために This を使う。\nIs this Aya?（そちらはアヤさん？）', BLUE, 13),
    'This is 〜 ＝ 電話の名乗り', PURPLE),
  FS('話したい相手を伝える言い方です。May I speak to Aya, please?（アヤさんをお願いします）。Can I talk to Mr. Brown?。speak to・talk to を使います。ていねいな言い方は May I ...? です。',
    [hd('話したい相手を伝える'), bx(8, 30, 304, 34, 'May I speak to Aya, please?', C.green, FILL.green, 14), bx(8, 72, 304, 34, 'Can I talk to Mr. Brown?', C.green, FILL.green, 14), lb(160, 128, 'speak to ／ talk to', 13, C.red, 'middle', true)],
    '～をお願いします ＝ May I speak to ～?', GREEN),
  FS('取り次ぎと返事です。Just a moment, please.／Hold on, please.（少々お待ちください）。本人が出たときは Speaking. または This is she.（私です）。Yes, I am. とは言いません。',
    [hd('取り次ぎと本人の返事'), bx(8, 28, 304, 30, 'Just a moment, please.', C.blue, FILL.blue, 14), bx(8, 66, 148, 30, 'Speaking.', C.green, FILL.green, 14), bx(164, 66, 148, 30, 'This is she.', C.green, FILL.green, 14), lb(160, 122, '× Yes, I am.', 14, C.red, 'middle', true)],
    '本人 ＝ Speaking. ／ This is she.', GREEN),
  FS('相手がいないときの言い方です。I\'m sorry, but he is not here now.（あいにく彼は今おりません）。She is out now.（今、外出しています）。He will be back at six.（6時にもどります）。',
    [hd('不在を伝える'), bx(8, 28, 304, 30, "I'm sorry, but he is not here now.", C.main, FILL.warm, 12), bx(8, 66, 304, 30, 'She is out now.', C.main, FILL.warm, 14), bx(8, 104, 304, 30, 'He will be back at six.', C.main, FILL.warm, 14)],
    'not here ／ out ／ be back', MAIN),
  FS('伝言（でんごん）です。受ける側は Can I take a message?（伝言をうかがいましょうか）。かける側は Can I leave a message?（伝言をお願いできますか）。take は受け取る、leave は残すです。',
    [hd('take a message と leave a message'), bx(8, 30, 148, 56, 'take a message\n伝言を受ける\n（受ける側）', C.blue, FILL.blue, 12), bx(164, 30, 148, 56, 'leave a message\n伝言を残す\n（かける側）', C.green, FILL.green, 12), lb(160, 108, 'Please tell him to call me back.', 12, C.ink, 'middle', true)],
    '立場がちがうと動詞が変わる', BLUE),
  FS('❓take と leave は、なぜ立場で使い分けるのでしょう。メモのやり取りで、受け取る人は take（手に取る）、置いていく人は leave（残す）という動きになるからです。borrow と lend の関係に似ています。',
    qa('take と leave の使い分けは？', '伝言を受け取る人 → take\n伝言を置いていく人 → leave\n同じ伝言を、どちらの立場から見るか\nで動詞が変わる（borrow と lend と同じ）', MAIN, 12),
    '立場で動詞が決まる', PURPLE),
  FS('かけ直しと、かけまちがいです。I\'ll call back later.（あとでかけ直します）。I think you have the wrong number.（番号がちがうようです）。よく聞こえないときは I can\'t hear you well. と言います。',
    [hd('かけ直し・かけまちがい'), bx(8, 28, 304, 30, "I'll call back later.", C.blue, FILL.blue, 14), bx(8, 66, 304, 30, 'I think you have the wrong number.', C.red, FILL.red, 12), bx(8, 104, 304, 30, "I can't hear you well.", C.green, FILL.green, 14)],
    'call back ／ wrong number ／ hear', GREEN),
  FS('まとめです。①名乗りは This is 〜。②相手は May I speak to 〜? ③本人は Speaking. ④伝言は take / leave a message。⑤かけ直しは I\'ll call back later.',
    [hd('まとめ'), ...grid([['① This is Ken.', BLUE], ['② May I speak to 〜?', GREEN], ['③ Speaking.', MAIN], ['④ take / leave\na message', RED]], 30, 40, 12), lb(160, 128, "⑤ I'll call back later.", 13, C.purple, 'middle', true)],
    '電話の言い方は、決まった型', MAIN),
], '電話での言い方');

// ── s379 買い物 ──
XF['xf_eigo_s379'] = show([
  FS('買い物の会話で、同じ名詞をくり返さないために one を使います。I like this bag, but I don\'t like that one.（このかばんは好きだが、あれは好きではない）。この one は bag の代わりです。',
    [hd('one ＝ 前に出た名詞の代わり'), bx(8, 30, 304, 34, "I like this bag, but I don't like that one.", C.blue, FILL.blue, 12), ar(262, 66, 262, 88, C.red), bx(190, 90, 120, 30, 'one ＝ bag', C.red, FILL.red, 14)],
    'one ＝ 前に出た名詞', BLUE),
  FS('❓なぜ one を使うのでしょう。同じ名詞を何度も言うと、文が長くてぎこちなくなるからです。Do you have a smaller one?（もっと小さいのはありますか）の one も、bag などの名詞の代わりをしています。',
    qa('なぜ one を使う？', '同じ名詞をくり返すと、\n文が長くてぎこちなくなる。\none が前の名詞の代わりをする。\nDo you have a smaller one?', BLUE, 13),
    'くり返しをさける', PURPLE),
  FS('複数の名詞の代わりには ones を使います。I like the red ones.（赤いのが好きです）。This one is nice.（これがいいですね）。one は数えられる名詞の代わりです。',
    [hd('one と ones'), bx(8, 30, 148, 50, 'This one is nice.\n（1つ）', C.blue, FILL.blue, 12), bx(164, 30, 148, 50, 'I like the red ones.\n（2つ以上）', C.green, FILL.green, 12), lb(160, 104, '1つ → one ／ 複数 → ones', 13, C.red, 'middle', true)],
    'one ／ ones を使い分ける', BLUE),
  FS('it と one のちがいです。it は「まったく同じそのもの」、one は「同じ種類の別のもの」。I lost my pen, so I bought a new one.（ペンをなくしたので新しいのを買った）は別のペン。I like this pen. I\'ll take it.（これをください）は、そのペンです。',
    [hd('it と one'), bx(8, 30, 148, 56, 'it\nそのもの', C.blue, FILL.blue, 13), bx(164, 30, 148, 56, 'one\n同じ種類の別のもの', C.green, FILL.green, 12), lb(160, 108, 'I lost my pen, so I bought a new one.', 11, C.green, 'middle', true), lb(160, 128, "I like this pen. I'll take it.", 11, C.blue, 'middle', true)],
    'it ＝ 同じもの ／ one ＝ 別のもの', MAIN),
  FS('値段の言い方です。It\'s 500 yen.（500円です）。yen は複数形にしません（× 500 yens）。It\'s three dollars.（3ドルです）のように dollar は複数形になります。How much is it? とたずねます。',
    [hd('値段の言い方'), bx(8, 30, 304, 32, 'How much is it? — It\'s 500 yen.', C.purple, FILL.purple, 14), ...vs('500 yens', '500 yen', 72, 40, 14), lb(160, 128, "It's three dollars.（dollar は複数形になる）", 12, C.blue, 'middle', true)],
    'yen は複数形にしない', RED),
  FS('数量の言い方です。a bottle of juice（ジュース1本）、two kilos of meat（肉2キロ）、a dozen eggs（卵1ダース）。注文は I\'d like two hamburgers, please.（ハンバーガーを2つください）と言います。',
    [hd('数量と注文'), ...tbl([['a bottle of juice', 'ジュース1本'], ['two kilos of meat', '肉2キロ'], ['a dozen eggs', '卵1ダース']], 28, { h: 22, size: 12 }), bx(8, 112, 304, 32, "I'd like two hamburgers, please.", C.red, FILL.red, 13)],
    '注文：I\'d like …, please.', GREEN),
  FS('❓I want ... ではなく I\'d like ... を使うのはなぜでしょう。I\'d like は I would like の短縮形で、I want よりていねいだからです。買うと決めたときも I\'ll take it. が自然で、I want it. は子どもっぽく聞こえます。',
    qa('I\'d like がよいわけは？', 'I\'d like ＝ I would like。\nI want よりていねいな言い方。\n店では I\'d like …, please. が安全。\n買うと決めたら I\'ll take it.', RED, 13),
    'ていねいな言い方を選ぶ', PURPLE),
  FS('まとめです。①one は前に出た名詞の代わり、複数は ones。②it はそのもの、one は別のもの。③yen は複数形にしない。④注文は I\'d like …, please.',
    [hd('まとめ'), ...grid([['① one / ones\n名詞の代わり', BLUE], ['② it ＝ 同じもの\none ＝ 別のもの', GREEN], ['③ 500 yen\n（-s なし）', MAIN], ['④ I\'d like …,\nplease.', RED]], 30, 52, 11)],
    '買い物の言い方は、決まった型', MAIN),
], 'one の使い方と値段・注文の言い方');

// ── s381 依頼・許可 ──
XF['xf_eigo_s381'] = show([
  FS('Can you open the window? と Can I open the window? は、たった一語のちがいで意味が正反対になります。前者は相手にお願いする文、後者は自分がしてよいかをたずねる文です。',
    [hd('一語で意味が逆になる'), bx(8, 30, 304, 34, 'Can you open the window?', C.blue, FILL.blue, 14), bx(8, 72, 304, 34, 'Can I open the window?', C.green, FILL.green, 14), lb(160, 128, 'you と I で、だれが開けるかが逆', 13, C.red, 'middle', true)],
    'you ／ I の一語で意味が変わる', BLUE),
  FS('❓だれが動くのでしょう。Can you ...? は、窓を開けるのが「あなた」。つまり相手にお願い（依頼）です。Can I ...? は、開けるのが「私」。自分がしてよいかをたずねる許可です。',
    [hd('窓を開けるのはだれ？'), ci(60, 56, 24, 'you', C.blue, FILL.blue, 13), bx(100, 42, 200, 28, 'Can you open …?  ＝ 依頼', C.blue, FILL.blue, 12), ci(60, 112, 24, 'I', C.green, FILL.green, 14), bx(100, 98, 200, 28, 'Can I open …?  ＝ 許可', C.green, FILL.green, 12)],
    'あなたが開ける ＝ 依頼 ／ 私が開ける ＝ 許可', BLUE),
  FS('依頼の言い方です。Can you ...?、Will you ...? に、よりていねいな Could you help me?（手伝っていただけますか）、Would you say that again? があります。返事は Sure.／All right.／I\'m sorry, I can\'t.',
    [hd('依頼（相手にしてもらう）'), ...grid([['Can you …?\n（ふつう）', BLUE], ['Could you …?\n（ていねい）', BLUE], ['Will you …?', BLUE], ['Would you …?\n（ていねい）', BLUE]], 28, 40, 12), lb(160, 132, 'Sure. ／ All right. ／ I\'m sorry, I can\'t.', 12, C.green, 'middle', true)],
    '主語は you', BLUE),
  FS('許可の言い方です。Can I use your pen?（ペンを使ってもいいですか）。May I come in?（入ってもいいですか）はよりていねいです。返事は Sure. ／ Of course. ／ Go ahead.（どうぞ）／ I\'m sorry, you can\'t.',
    [hd('許可（自分がする）'), ...grid([['Can I …?\n（ふつう）', GREEN], ['May I …?\n（ていねい）', GREEN]], 28, 40, 13), lb(160, 100, 'Sure. ／ Of course. ／ Go ahead.', 13, C.green, 'middle', true), lb(160, 122, "I'm sorry, you can't.", 13, C.red, 'middle', true)],
    '主語は I', GREEN),
  FS('❓Could / Would / May は、なぜていねいなのでしょう。Can / Will より一歩ひかえめに聞こえる形だからです。目上の人や知らない人には、Could you ...? や May I ...? を使うと失礼になりません。',
    qa('Could・May がていねいなのは？', 'Can・Will をひかえめにした形。\n「〜していただけますか」の感じ。\n目上の人や知らない人には\nCould you …? ／ May I …? を使う。', MAIN, 13),
    'ていねいさで形を選ぶ', PURPLE),
  FS('自分がしてあげる申し出（もうしで）には Shall I ...? を使います。Shall I open the window?（窓を開けましょうか）。Shall I carry your bag?。答えは Yes, please. または No, thank you. です。',
    [hd('申し出：Shall I …?'), bx(8, 30, 304, 32, 'Shall I open the window?', C.purple, FILL.purple, 14), bx(8, 70, 304, 32, 'Shall I carry your bag?', C.purple, FILL.purple, 14), lb(160, 122, 'Yes, please. ／ No, thank you.', 13, C.green, 'middle', true)],
    '自分がしてあげる ＝ Shall I …?', PURPLE),
  FS('練習です。「手伝ってくれますか」→ Can you help me?（you）。「入ってもいいですか」→ May I come in?（I）。「かばんを持ちましょうか」→ Shall I carry your bag?。主語を見て動作をするのがだれかを確かめます。',
    [hd('練習'), ...tbl([['日本語', '英語'], ['手伝ってくれますか', 'Can you help me?（you）'], ['入ってもいいですか', 'May I come in?（I）'], ['かばんを持ちましょうか', 'Shall I carry your bag?（I）']], 28, { h: 26, size: 11, hdr: true })],
    '動作をするのはだれ？', GREEN),
  FS('まとめです。①Can you ...? ＝ 依頼（相手がする）。②Can I ...? ＝ 許可（自分がする）。③Could / Would / May はていねい。④Shall I ...? ＝ してあげましょうか。',
    [hd('まとめ'), ...grid([['① Can you …?\n依頼', BLUE], ['② Can I …?\n許可', GREEN], ['③ Could / May\nていねい', MAIN], ['④ Shall I …?\n申し出', PURPLE]], 30, 52, 11)],
    '主語を見て、動作をするのがだれかを確かめる', MAIN),
], '依頼と許可を区別する');

// ── s383 hear / listen to ──
XF['xf_eigo_s383'] = show([
  FS('「聞く」にも、動詞が二つあります。hear は自然に耳に入る、listen (to) は意識して耳をかたむける。I can hear a bird singing.（鳥が鳴いているのが聞こえる）と、I listen to music every night.（毎晩音楽を聞く）。',
    [hd('hear と listen'), bx(8, 30, 148, 56, 'hear\n自然に耳に入る\n（聞こえる）', C.blue, FILL.blue, 12), bx(164, 30, 148, 56, 'listen to\n意識して聞く\n（耳をかたむける）', C.green, FILL.green, 12), lb(160, 110, 'I can hear a bird singing.', 12, C.blue, 'middle', true), lb(160, 130, 'I listen to music every night.', 12, C.green, 'middle', true)],
    '聞こえる ＝ hear ／ 聞く ＝ listen to', BLUE),
  FS('❓どうやって使い分けるのでしょう。耳に自然に入ってくる音なら hear、自分から耳を向けて聞くなら listen です。Did you hear that noise?（あの音が聞こえましたか）は、聞こえたかどうかを聞いています。',
    qa('hear と listen の分かれ目は？', '自然に耳に入ってくる → hear\n自分から耳を向けて聞く → listen\nDid you hear that noise?\n（聞こえましたか）', BLUE, 13),
    '意識するかどうか', PURPLE),
  FS('見る場合も同じ関係です。自然に目に入る see に対して、意識して目を向ける look at。「見える」と「見る」、「聞こえる」と「聞く」は、同じ二つの組になっています。',
    [hd('見る・聞くの二つの組'), ...tbl([['自然に入る', '意識して向ける'], ['see（見える）', 'look at（見る）'], ['hear（聞こえる）', 'listen to（聞く）']], 30, { h: 30, size: 13, hdr: true, colors: [BLUE, GREEN] }), lb(160, 128, '前置詞なし ／ 前置詞あり', 13, C.red, 'middle', true)],
    'see ⇔ look at ／ hear ⇔ listen to', GREEN),
  FS('❓なぜ listen だけ to が付くのでしょう。意識して「音のほうへ」向けるので、向かう先を示す to が必要だからです。look に at が付くのと同じです。聞く対象を言わないときは Listen! だけでよいです。',
    qa('listen に to が付くわけは？', '意識して音のほうへ向ける動作。\n向かう先を示す to が必要。\n（look に at が付くのと同じ）\n対象を言わなければ Listen! だけ。', GREEN, 13),
    '× listen music', RED),
  FS('hear や see は、ふつう進行形（〜している）にしません。I can hear you.（あなたの声が聞こえます）は正しく、I am hearing you. は誤りです。「聞こえる」「見える」は、そのとき起きている状態を表すからです。',
    [hd('hear・see は進行形にしない'), ...vs('I am hearing you.', 'I can hear you.', 38, 44, 13), lb(160, 104, '「聞こえる」は状態を表す', 13, C.blue, 'middle', true), lb(160, 126, 'I can see the sea from here.', 12, C.gray)],
    'hear・see ＝ 状態 ／ 進行形にしない', RED),
  FS('listen・look・watch は動作なので、進行形にできます。He is listening to the radio.（彼はラジオを聞いている）。可能の can を使って、I can see the sea from here.（ここから海が見えます）と言うこともできます。',
    [hd('動作は進行形にできる'), bx(8, 30, 304, 34, 'He is listening to the radio.', C.green, FILL.green, 14), bx(8, 72, 304, 34, 'I can see the sea from here.', C.blue, FILL.blue, 14), lb(160, 128, 'can は「できる」と強く訳さなくてよい', 12, C.gray)],
    'listen ＝ 動作 → 進行形OK', GREEN),
  FS('まとめです。①hear ＝ 自然に聞こえる（前置詞なし）。②listen to ＝ 意識して聞く。③see と look at も同じ組。④hear・see は進行形にしない。',
    [hd('まとめ'), ...grid([['① hear\n聞こえる', BLUE], ['② listen to\n聞く', GREEN], ['③ see ⇔ look at\nも同じ組', MAIN], ['④ hear・see は\n進行形にしない', RED]], 30, 52, 12)],
    '意識して向ける動作には前置詞', MAIN),
], 'hear と listen to');

// ── s386 設問を先に読む ──
XF['xf_eigo_s386'] = show([
  FS('長文問題で時間が足りなくなる人は、本文を最初から最後まで読んでから設問（せつもん）を見ています。この順で解くと、何が問われるか分からないまま読むことになります。',
    [hd('よくある解き方'), ...row(['本文を\n全部読む', '設問を\n見る', '本文を\nさがす'], 36, RED, 12, 52, 14), lb(160, 112, '本文を2回読むことになる', 13, C.red, 'middle', true)],
    '読み終わってから設問を見る…', RED),
  FS('❓なぜ時間が足りなくなるのでしょう。読んでいる間じゅう、何を探すのか分からないので、全部を同じ強さで読んでしまいます。そして設問を見て「どこに書いてあった？」となり、もう一度本文をさがすからです。',
    qa('なぜ時間が足りなくなる？', '何が問われるか分からず、\n全部を同じ強さで読む。\n設問を見て、「どこだっけ」と\nもう一度さがす → 2回読み。', RED, 13),
    '本文を2回読むと時間が倍かかる', PURPLE),
  FS('正しい手順は四つです。①設問文だけを読む（選択肢は読まない）。②何を探すのかをメモする。③本文を頭から1回読み、探すものが出たら線を引く。④設問にもどって答える。',
    [hd('正しい手順'), ...grid([['① 設問文だけ読む', BLUE], ['② 探すものをメモ', GREEN], ['③ 本文を1回読む\n線を引く', MAIN], ['④ 設問にもどって\n答える', RED]], 28, 48, 12)],
    '設問 → 探し物 → 本文 → 答え', GREEN),
  FS('例です。設問が What time does Ken leave home?（ケンは何時に家を出ますか）なら、探すのは「時刻」です。本文を読みながら、数字と at seven、before breakfast のような時刻の言い方にだけ印をつけます。',
    [hd('探し物を決める'), bx(8, 28, 304, 34, 'What time does Ken leave home?', C.purple, FILL.purple, 14), ar(160, 64, 160, 82, C.green), bx(8, 86, 304, 34, '探すのは「時刻」', C.green, FILL.green, 15), lb(160, 138, '数字・at seven・before breakfast に印', 12, C.blue, 'middle', true)],
    '疑問詞を見て、探し物を決める', GREEN),
  FS('設問の先読みは30秒以内で終えます。設問文を丁寧に和訳していたら本末転倒です。疑問詞（What・When・Why など）と固有名詞だけを拾えば十分です。',
    [hd('先読みは30秒以内'), ...chips([['What', 'S'], ['time', 'M'], ['does', 'M'], ['Ken', 'V'], ['leave', 'M'], ['home?', 'M']], 8, 40, { size: 14, h: 30 }), lb(160, 98, '疑問詞（What）と 固有名詞（Ken）だけ拾う', 13, C.red, 'middle', true), lb(160, 122, '丁寧に和訳しない', 12, C.gray)],
    '拾うのは 疑問詞 と 固有名詞', RED),
  FS('❓先読みをすると、なぜ速く読めるのでしょう。探し物が決まっている人は、全部を読む必要がなく、目をはたらかせる場所が決まるからです。決まっていない人の半分の時間で見つけられます。',
    qa('先読みで速くなるわけは？', '探し物が決まると、目をはたらかせる\n場所が決まる。\n全部を同じ強さで読まなくてよい。\n探し物がある人は、半分の時間で見つかる。', GREEN, 13),
    '目的があると、目の使い方が変わる', PURPLE),
  FS('先読みは、答えを先に知るためのものではありません。本文を読むときの「目のはたらかせ方」を変えるためです。設問を読んでから本文に入ると、印をつける場所がはっきりします。',
    [hd('先読みの目的'), bx(8, 30, 148, 56, '× 答えを先に\n知るため', C.red, FILL.red, 13), bx(164, 30, 148, 56, '◯ 目のはたらかせ方\nを変えるため', C.green, FILL.green, 13), lb(160, 110, '印をつける場所がはっきりする', 13, C.blue, 'middle', true)],
    '読み方を変える練習', BLUE),
  FS('まとめです。①設問文を先に読む（30秒以内）。②疑問詞と固有名詞を拾い、探し物を決める。③本文を1回読み、線を引く。④設問にもどって確かめる。',
    [hd('まとめ'), ...grid([['① 設問を先に\n30秒', BLUE], ['② 探し物を\n決める', GREEN], ['③ 本文を\n1回読む', MAIN], ['④ もどって\n答える', RED]], 30, 52, 12)],
    '設問 → 本文 → 設問の順', MAIN),
], '設問を先に読む');

// ── s387 返り読みをしない ──
XF['xf_eigo_s387'] = show([
  FS('The boy who is playing the guitar under the big tree in the park is my brother. この英文を、日本語の順に直して読んでいませんか。「公園の／大きな木の下で／ギターを弾いている／少年は／私の兄です」。',
    [hd('返り読み'), bx(8, 28, 304, 44, 'The boy who is playing the guitar\nunder the big tree in the park is my brother.', C.gray, FILL.gray, 12), lb(160, 92, '「公園の／大きな木の下で／ギターを弾いている／少年は…」', 11, C.red, 'middle', true), lb(160, 112, '右端から左へ何度も戻っている', 12, C.red)],
    '後ろから前へ戻る読み方', RED),
  FS('前から読むと、情報が出た順に足していくだけで済みます。The boy ／ who is playing the guitar ／ under the big tree ／ in the park ／ is my brother. 「その少年は → ギターを弾いている → 大きな木の下で → 公園の中の → 私の兄だ」。',
    [hd('チャンクで前から読む'), ...chips([['The boy', 'S'], ['who is playing the guitar', 'M'], ['under the big tree', 'M'], ['in the park', 'M'], ['is my brother.', 'V']], 6, 34, { size: 11, h: 26 }), lb(160, 124, '少年は → 弾いている → 木の下で → 公園の → 兄だ', 11, C.blue, 'middle', true)],
    '戻らない：出た順に足す', BLUE),
  FS('❓なぜ前から読めるのでしょう。英語は「中心の語を先に言い、説明をあとから足す」ことばだからです。The boy（少年は）と先に言い、who is playing ...（弾いている）、under ...（木の下で）と説明が足されていきます。',
    qa('なぜ前から読める？', '英語は、中心の語を先に言って、\n説明をあとから足していく言葉。\nThe boy → who is playing → under …\n出てきた順につなげばよい。', BLUE, 13),
    '中心の語 → あとから説明', PURPLE),
  FS('返り読みは時間が二倍かかるうえ、戻っている間に前の内容を忘れて迷子になります。1文でこれをやると、20文の長文では往復が数百回になります。前から読めば、往復はゼロです。',
    [hd('往復の回数'), bx(8, 30, 148, 56, '返り読み\n1文で何度も往復\n20文で数百回', C.red, FILL.red, 12), bx(164, 30, 148, 56, '前から読む\n往復なし\n（ゼロ）', C.green, FILL.green, 12), lb(160, 110, '迷子にならず、速く読める', 13, C.blue, 'middle', true)],
    '戻る回数が、読む速さを決める', RED),
  FS('切れ目は、ほとんど次の四か所です。①前置詞の前（under・in）。②関係代名詞の前（who・which・that）。③接続詞の前（when・because・if）。④カンマの所。ここにスラッシュ（／）を入れます。',
    [hd('切れ目は四か所'), ...grid([['① 前置詞の前\nunder・in', BLUE], ['② 関係代名詞の前\nwho・which・that', GREEN], ['③ 接続詞の前\nwhen・because・if', MAIN], ['④ カンマの所', RED]], 28, 44, 11)],
    '切れ目 ＝ 前置詞・関係代名詞・接続詞・カンマ', GREEN),
  FS('❓なぜこの四つが切れ目の合図なのでしょう。これらの語は「ここから説明を足します」という合図だからです。前置詞は場所や時の説明、関係代名詞は名詞の説明、接続詞は新しい文の始まりを知らせます。',
    qa('なぜ切れ目の合図？', '前置詞 → 場所や時の説明が始まる\n関係代名詞 → 名詞の説明が始まる\n接続詞 → 新しい文が始まる\nカンマ → 意味のひと区切り', GREEN, 13),
    '「ここから説明」の合図', PURPLE),
  FS('that を見たら、そこから新しい文が始まる合図です。My father told me ／ that his grandmother lived in a house ／ like that. told の主語は My father、lived の主語は his grandmother と分けます。',
    [hd('that のあとに主語と動詞'), ...chips([['My father', 'S'], ['told', 'V'], ['me', 'O']], 8, 30, { size: 13, h: 28 }), bx(8, 66, 304, 34, 'that his grandmother lived in a house', C.green, FILL.green, 12), lb(160, 118, 'lived の主語は his grandmother', 12, C.red, 'middle', true), lb(160, 138, '切れ目は ／ で入れる', 12, C.gray)],
    'that のあとに S ＋ V がもう一組', GREEN),
  FS('区切りすぎもよくありません。a small restaurant を a ／ small ／ restaurant と切ると、かえって意味がつながりません。「ひとつのまとまった意味」になる長さで切ります。',
    [hd('区切りすぎない'), ...vs('a ／ small ／ restaurant', 'a small restaurant', 38, 44, 12), lb(160, 104, 'ひとつのまとまりで切る', 13, C.blue, 'middle', true)],
    '意味のまとまりで切る', RED),
  FS('まとめです。①英語は出た順に足せば意味がつながる。②切れ目は前置詞・関係代名詞・接続詞・カンマ。③that のあとは主語と動詞をもう一組数える。④切りすぎない。',
    [hd('まとめ'), ...grid([['① 前から読む\n戻らない', BLUE], ['② 四つの切れ目\nを見つける', GREEN], ['③ that の後に\nS ＋ V', MAIN], ['④ 切りすぎ\nない', RED]], 30, 52, 12)],
    '前から読んで、意味のかたまりで切る', MAIN),
], '返り読みをしない：前から読む');

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
  'eigo_s359#1': 'xf_eigo_s359',
  'eigo_s362#1': 'xf_eigo_s362',
  'eigo_s364#2': 'xf_eigo_s364',
  'eigo_s365#0': 'xf_eigo_s365',
  'eigo_s366#0': 'xf_eigo_s366',
  'eigo_s367#2': 'xf_eigo_s367',
  'eigo_s368#0': 'xf_eigo_s368',
  'eigo_s369#0': 'xf_eigo_s369',
  'eigo_s370#1': 'xf_eigo_s370',
  'eigo_s372#0': 'xf_eigo_s372',
  'eigo_s375#0': 'xf_eigo_s375',
  'eigo_s377#0': 'xf_eigo_s377',
  'eigo_s378#0': 'xf_eigo_s378',
  'eigo_s379#1': 'xf_eigo_s379',
  'eigo_s381#0': 'xf_eigo_s381',
  'eigo_s383#0': 'xf_eigo_s383',
  'eigo_s386#0': 'xf_eigo_s386',
  'eigo_s387#2': 'xf_eigo_s387',
};
