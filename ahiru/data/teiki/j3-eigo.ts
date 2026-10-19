// 中3 英語（定期テスト向け・教科書の延長）。英文は半角、説明は日本語。
// 図解は 320×240。上半分（y<150）に図、下の帯にそのスライドのひとこと。
import type { TeikiUnit } from './types';
import type { DiagramElement } from '../figures';
import type { Slide } from '../diagram-kit';
import { C, FILL, bx, lb, ar, ln, show, band, fresh, stack } from '../diagram-kit';

// 語の箱を横一列に並べる（幅は文字数から見積もり、中央ぞろえ）。返り値は部品と各箱の中心x。
const cw = (c: string, s: number) => (/[\x20-\x7e]/.test(c) ? (c === ' ' ? 0.3 : /[0-9]/.test(c) ? 0.58 : /[A-Z]/.test(c) ? 0.66 : 0.52) * s : s);
const tw = (t: string, s: number) => [...t].reduce((a, c) => a + cw(c, s), 0);
type Wd = { t: string; c?: string; f?: string };
const row = (y: number, items: Wd[], size = 12, gap = 5, h = 26) => {
  const ws = items.map((i) => Math.ceil(tw(i.t, size)) + 12);
  const total = ws.reduce((a, b) => a + b, 0) + gap * (items.length - 1);
  if (total > 314) throw new Error('row too wide: ' + items.map((i) => i.t).join(' '));
  let x = (320 - total) / 2;
  const els: DiagramElement[] = [];
  const xs: number[] = [];
  items.forEach((it, i) => {
    els.push(bx(x, y, ws[i], h, it.t, it.c ?? C.ink, it.f ?? FILL.gray, size));
    xs.push(x + ws[i] / 2);
    x += ws[i] + gap;
  });
  return { els, xs };
};
const cap = (t: string, color: string = C.ink) => band(150, lb(160, 188, t, 12, color, 'middle', true));
const G = { c: C.gray, f: FILL.gray };
const BL = { c: C.blue, f: FILL.blue };
const RD = { c: C.red, f: FILL.red };
const GR = { c: C.green, f: FILL.green };
const PU = { c: C.purple, f: FILL.purple };
type Col = { c: string; f: string };
const wg = (t: string): Wd => ({ t, ...G });
const wb = (t: string): Wd => ({ t, ...BL });
const wr = (t: string): Wd => ({ t, ...RD });
const wn = (t: string): Wd => ({ t, ...GR });
const wp = (t: string): Wd => ({ t, ...PU });
// 1文を1行で見せ、日本語訳とひとこと(最大3行)を添える
const one = (note: string, items: Wd[], jp: string, lines: [string, string?][], capT: string, color: string = C.ink, size = 12): Slide => ({
  note,
  add: fresh(...row(16, items, size).els, lb(160, 62, jp, 12, color, 'middle', true), ...lines.map((l, i) => lb(160, 88 + i * 22, l[0], 11, l[1] ?? C.gray, 'middle')), ...cap(capT, color)),
});
// 2文を上下にならべて比べる
const two = (note: string, a: Wd[], b: Wd[], la: string, lb2: string, ex: string, capT: string, color: string = C.ink, size = 12): Slide => ({
  note,
  add: fresh(...row(10, a, size).els, lb(160, 54, la, 11, color, 'middle'), ...row(66, b, size).els, lb(160, 110, lb2, 11, color, 'middle', true), lb(160, 134, ex, 11, C.gray, 'middle'), ...cap(capT, color)),
});
// 3文を上下にならべる（肯定→否定→疑問など）
const three = (note: string, a: Wd[], b: Wd[], c: Wd[], ex: string, capT: string, color: string = C.ink, size = 11): Slide => ({
  note,
  add: fresh(...row(10, a, size).els, ...row(46, b, size).els, ...row(82, c, size).els, lb(160, 130, ex, 11, C.gray, 'middle'), ...cap(capT, color)),
});
// 箱の一覧（最大5行）
const lst = (note: string, texts: (string | [string, Col])[], capT: string, col: Col, size = 11): Slide => {
  const n = texts.length;
  const h = n > 4 ? 22 : 28;
  const g = n > 4 ? 4 : 8;
  return { note, add: fresh(...texts.map((t, i) => { const [s, k] = typeof t === 'string' ? [t, col] : t; return bx(10, 10 + i * (h + g), 300, h, s, k.c, k.f, size); }), ...cap(capT, col.c)) };
};

const unit: TeikiUnit = {
  id: 'j3-eigo-03',
  grade: 'j3',
  subject: 'eigo',
  chapter: '関係代名詞',
  title: '関係代名詞（主格の who / which / that）',
  gist: '**関係代名詞**は、2つの文を1つにつなぎながら、前の名詞を後ろから説明する語です。人には **who**、物や動物には **which**、どちらにも **that** を使います。',
  sections: [
    {
      heading: '関係代名詞ってなに？',
      body:
        '日本語では「ピアノをひく友だち」のように、説明を名詞の前に置きます。英語は逆で、**説明を名詞の後ろ**に置きます。このとき名詞と説明をつなぐ語が関係代名詞です。\n\nI have a friend. He plays the piano. の2文は、I have a friend who plays the piano. 1文になります。説明される名詞（a friend）を**先行詞**といいます。',
    },
    {
      heading: 'who / which / that の使い分け',
      body:
        '関係代名詞は「つなぐ働き」と「代名詞（he, it など）の代わりの働き」を1つでこなします。だから元の文の He や It は消えます。\n\n先行詞が**人なら who**、**物・動物なら which**、**人にも物にも使えるのが that** です。ここで学ぶ形は、関係代名詞があとの文の主語の役をする「主格」です。',
    },
    {
      heading: '動詞の形と作り方',
      body:
        '関係代名詞のあとの動詞は、**先行詞に合わせます**。先行詞が a boy（3人称単数）なら plays、two boys（複数）なら play です。\n\n作り方は、①2文に共通する名詞を探す、②2文目の He / She / It などを who / which にかえる、③先行詞のすぐ後ろに置く、の3ステップ。who のあとにさらに he をつけないのが大切です。',
    },
    {
      heading: '具体例（例文・日本語訳・なぜその形か）',
      body:
        '①I have a friend who lives in Osaka.（私には大阪に住んでいる友だちがいます。）\n→ 先行詞 a friend は人なので **who**。3人称単数なので lives。\n\n②This is a dog which runs fast.（これは速く走る犬です。）\n→ 先行詞 a dog は動物なので **which**。\n\n③She is a teacher who teaches English.（彼女は英語を教える先生です。）\n→ a teacher は人なので who。teaches は3単現の es。\n\n④Tom has a cat that likes fish.（トムは魚が好きなネコを飼っています。）\n→ that は人にも物にも使えるので、動物にも **that** が使えます。\n\n⑤The boy who lives next door is kind.（隣に住んでいる男の子は親切です。）\n→ The boy who lives next door が主語のかたまり。be動詞は is。\n\n⑥I want a bike that is not expensive.（私は高くない自転車がほしいです。）\n→ a bike は物なので that（which でも可）。説明は後ろから。',
    },
  ],
  testPoints: [
    '先行詞が**人なら who、物・動物なら which**、どちらでも **that** が使える',
    '関係代名詞は先行詞の**すぐ後ろ**に置き、あとの文が先行詞を説明する',
    '関係代名詞のあとの動詞は**先行詞に合わせる**（a boy who plays / two boys who play）',
    '元の文の主語（he, she, it）は who / which に変わるので、**もう一度書かない**',
    'よくあるまちがい：× a friend who he plays the piano（he は不要）',
  ],
  figure: show([
    (() => {
      const r1 = row(12, [{ t: 'I have a friend.', ...G }]);
      const r2 = row(42, [{ t: 'He plays the piano.', ...G }]);
      const r3 = row(98, [{ t: 'I have', ...G }, { t: 'a friend', ...RD }, { t: 'who', ...BL }, { t: 'plays the piano.', ...G }]);
      return {
        note: '2つの文「I have a friend.（私には友だちがいる）」「He plays the piano.（彼はピアノを弾く）」を、1つの文にまとめてみます。結果は I have a friend who plays the piano. です。「ピアノを弾く友だちがいる」という意味になります。',
        add: fresh(...r1.els, ...r2.els, ar(160, 72, 160, 94, C.blue), ...r3.els, ...cap('2つの文を1つにつなぐ', C.blue)),
      };
    })(),
    (() => {
      const r = row(34, [{ t: 'I have', ...G }, { t: 'a friend', ...RD }, { t: 'who', ...BL }, { t: 'plays the piano.', ...BL }]);
      const x0 = r.xs[2] - 18;
      return {
        note: '❓なぜ a friend を「先行詞」と呼ぶのでしょう。→ 説明される名詞が、説明（who 以下）より先に出てくるからです。who plays the piano が、a friend を後ろから「ピアノを弾く友だち」と説明しています。',
        add: fresh(...r.els, lb(r.xs[1], 84, '先行詞', 12, C.red, 'middle', true), ln(x0, 70, 300, 70, C.blue, false, 2), lb((x0 + 300) / 2, 90, '先行詞を後ろから説明', 12, C.blue, 'middle', true), lb(160, 126, '日本語は前から、英語は後ろから説明', 11, C.gray, 'middle'), ...cap('説明される名詞が先行詞', C.red)),
      };
    })(),
    {
      note: '❓なぜ He が消えるのでしょう。→ 関係代名詞 who は、2つの文を「つなぐ働き」と、He の代わりの「代名詞の働き」の2つを一度にしているからです。He の仕事を who が引き受けるので、He は書きません。',
      add: fresh(
        bx(20, 14, 120, 40, 'つなぐ働き\n（接続詞）', C.blue, FILL.blue, 12),
        bx(180, 14, 120, 40, 'He の代わり\n（代名詞）', C.green, FILL.green, 12),
        ar(80, 56, 140, 88, C.ink),
        ar(240, 56, 180, 88, C.ink),
        bx(110, 88, 100, 36, 'who', C.red, FILL.red, 16),
        ...cap('who ＝ つなぐ ＋ He の代わり'),
      ),
    },
    (() => {
      const r = row(18, [{ t: 'I know', ...G }, { t: 'a girl', ...RD }, { t: 'who', ...BL }, { t: 'speaks English well.', ...G }]);
      return {
        note: '先行詞が「人」のときは who を使います。I know a girl who speaks English well. は「英語を上手に話す女の子を知っている」です。元の文 She speaks English well. の She が who に変わりました。',
        add: fresh(...r.els, lb(160, 64, '先行詞が人  →  who', 12, C.blue, 'middle', true), bx(40, 78, 130, 30, '先行詞が人', C.red, FILL.red, 12), ar(174, 93, 206, 93, C.ink), bx(210, 78, 70, 30, 'who', C.blue, FILL.blue, 14), lb(160, 134, 'She が who に変わった', 12, C.gray, 'middle'), ...cap('人には who', C.blue)),
      };
    })(),
    (() => {
      const r = row(18, [{ t: 'I have', ...G }, { t: 'a dog', ...RD }, { t: 'which', ...GR }, { t: 'runs fast.', ...G }]);
      return {
        note: '先行詞が物や動物のときは which を使います。I have a dog which runs fast. は「速く走る犬を飼っている」です。元の文 It runs fast. の It が which に変わっています。',
        add: fresh(...r.els, lb(160, 64, '先行詞が物・動物  →  which', 12, C.green, 'middle', true), bx(30, 78, 150, 30, '先行詞が物・動物', C.red, FILL.red, 12), ar(184, 93, 214, 93, C.ink), bx(218, 78, 72, 30, 'which', C.green, FILL.green, 14), lb(160, 134, 'It が which に変わった', 12, C.gray, 'middle'), ...cap('物・動物には which', C.green)),
      };
    })(),
    (() => {
      const r1 = row(16, [{ t: 'I know', ...G }, { t: 'a girl', ...RD }, { t: 'that', ...PU }, { t: 'speaks English well.', ...G }]);
      const r2 = row(58, [{ t: 'I have', ...G }, { t: 'a dog', ...RD }, { t: 'that', ...PU }, { t: 'runs fast.', ...G }]);
      return {
        note: '❓that はどんなときに使うのでしょう。→ that は who と which の両方の代わりができます。先行詞が人でも物でも使えます。a girl that speaks 〜 も、a dog that runs 〜 も正しい文です。',
        add: fresh(...r1.els, ...r2.els, lb(160, 108, 'that は 人にも 物にも使える', 13, C.purple, 'middle', true), lb(160, 132, 'who と which の両方の代わり', 12, C.gray, 'middle'), ...cap('that は人にも物にも', C.purple)),
      };
    })(),
    (() => {
      const r1 = row(12, [{ t: 'I know', ...G }, { t: 'a boy', ...RD }, { t: 'who', ...BL }, { t: 'plays soccer.', ...GR }]);
      const r2 = row(44, [{ t: 'I know', ...G }, { t: 'two boys', ...RD }, { t: 'who', ...BL }, { t: 'play soccer.', ...GR }]);
      return {
        note: '❓関係代名詞のあとの動詞の形はどう決まるのでしょう。→ who は先行詞の代わりなので、先行詞に合わせます。a boy は1人（3人称単数）なので plays と s がつき、two boys は複数なので play のままです。',
        add: fresh(...r1.els, ...r2.els, lb(160, 94, '動詞は先行詞に合わせる', 13, C.ink, 'middle', true), lb(160, 114, 'a boy は3人称単数  →  plays（s あり）', 11, C.green, 'middle'), lb(160, 134, 'two boys は複数  →  play（s なし）', 11, C.green, 'middle'), ...cap('動詞の s は先行詞しだい', C.green)),
      };
    })(),
    (() => {
      const s = stack(['①2文に共通する名詞（人・物）を探す', '②2文目の He / It を who / which に変える', '③先行詞のすぐ後ろに who〜を置く'], 14, 292, 12, { h: 28, gap: 14, color: C.blue, fill: FILL.blue, size: 11 });
      return {
        note: '関係代名詞の文の作り方は3ステップです。まず2つの文に共通して出てくる名詞を見つけます。次に2文目の代名詞を who か which にかえ、最後に先行詞のすぐ後ろへ移動させてつなぎます。',
        add: fresh(...s.flat(), ...cap('3ステップで1文にする', C.blue)),
      };
    })(),
    (() => {
      const r1 = row(8, [{ t: 'This is a book.', ...G }], 12, 5, 24);
      const r2 = row(38, [{ t: 'It is popular in Japan.', ...G }], 12, 5, 24);
      const r3 = row(98, [{ t: 'This is', ...G }, { t: 'a book', ...RD }, { t: 'which', ...GR }, { t: 'is popular in Japan.', ...G }], 11);
      return {
        note: '実際に作ってみます。「This is a book.」と「It is popular in Japan.」では、共通するのは a book と It（どちらも本）です。先行詞は物なので、It を which に変えて a book の後ろにつなぎます。',
        add: fresh(...r1.els, ...r2.els, lb(160, 76, 'a book ＝ It（物）  →  It を which に', 12, C.green, 'middle', true), ar(160, 80, 160, 94, C.green), ...r3.els, ...cap('It を which にかえて、後ろにつなぐ', C.green)),
      };
    })(),
    one(
      '先行詞が人で、説明が「どこに住んでいるか」の場合です。He has a sister who lives in Tokyo. は「彼には東京に住んでいる姉（妹）がいる」です。who の先行詞 a sister は3人称単数なので、動詞は lives と s がつきます。',
      [wg('He has'), wr('a sister'), wb('who'), wg('lives in Tokyo.')],
      '彼には東京に住んでいる姉がいる',
      [['a sister は3人称単数 → lives（s あり）'], ['who 以下が a sister を説明']],
      '先行詞が人 → who、動詞に s',
      C.blue,
    ),
    one(
      '関係代名詞のまとまりは、文の途中に入ることもあります。The book which is on the desk is mine. は「机の上にある本は私のものです」です。The book which is on the desk 全体が主語で、そのあとに is mine が続きます。',
      [wg('The book'), wb('which'), wg('is on the desk'), wg('is mine.')],
      '机の上にある本は私のものです',
      [['The book which is on the desk が主語のかたまり'], ['先行詞 the book は物 → which']],
      '主語を後ろから説明することもある',
      C.green,
      11,
    ),
    (() => {
      return {
        note: '最後に注意です。who はすでに he の仕事をしているので、そのあとにまた he を書くと主語が重なってしまいます。× a friend who he plays 〜 ではなく、○ a friend who plays 〜 と、who のすぐあとに動詞を置きます。',
        add: fresh(
          bx(10, 12, 300, 28, '×  I have a friend who he plays the piano.', C.red, FILL.red, 11),
          lb(160, 62, 'who が he の仕事をするので he は不要', 12, C.red, 'middle', true),
          bx(10, 76, 300, 28, '○  I have a friend who plays the piano.', C.blue, FILL.blue, 11),
          lb(160, 130, '人 → who　物 → which　どちらも → that', 12, C.ink, 'middle', true),
          ...cap('who のあとに主語は入れない', C.red),
        ),
      };
    })(),
  ], '関係代名詞（主格）'),
  checks: [
    { q: '（　）に入る語を答えなさい。I have a friend（　）lives in Osaka.', a: 'who', why: '先行詞 a friend は人です。人のときの関係代名詞は who。あとに主語はなく、who がそのまま lives の主語になっています。' },
    { q: '（　）に入る語を答えなさい。This is a car（　）is made in Japan.（2通り）', a: 'which（または that）', why: '先行詞 a car は物なので which を使います。that も物に使えるので、どちらでも正解です。' },
    { q: '正しい語を選びなさい。I know a girl who（　）English.（speak / speaks）', a: 'speaks', why: '関係代名詞のあとの動詞は先行詞に合わせます。a girl は3人称単数で現在の文なので、動詞に s をつけて speaks にします。' },
    { q: 'I have a dog. It runs fast. を、関係代名詞を使って1文にしなさい。', a: 'I have a dog which runs fast.', why: '共通する名詞は a dog と It。物（動物）なので It を which にかえ、a dog のすぐ後ろにつなぎます。that でも正解です。' },
  ],
};

const unit2: TeikiUnit = {
  id: 'j3-eigo-01',
  grade: 'j3',
  subject: 'eigo',
  chapter: '受け身',
  title: '受け身（be動詞＋過去分詞）',
  gist: '「〜される」「〜されている」と言うときは、**be動詞＋過去分詞**の受け身の形を使います。「だれによって」は **by 〜** で表します。',
  sections: [
    {
      heading: '受け身とは',
      body:
        '「Many people love this song.（多くの人がこの歌を愛している）」のように、動作をする人が主語の文を能動態といいます。これに対し、動作を受けるものを主語にして「この歌は多くの人に愛されている」と言う形が**受け身**です。\n\n形は **主語＋be動詞＋過去分詞＋(by 〜)**。be動詞は主語と時（現在か過去か）に合わせて is / are / was / were を選びます。',
    },
    {
      heading: '過去分詞と否定・疑問',
      body:
        '過去分詞は、規則動詞なら過去形と同じ ed の形（use→used, love→loved）です。不規則動詞は write→wrote→**written**, speak→spoke→**spoken**, make→made→made, build→built→built のように変わります。\n\n否定は be動詞のあとに not（English is not spoken here.）、疑問は be動詞を主語の前に出します（Is English spoken in Canada?）。by 〜 は、動作をする人が分かりきっているときや言う必要がないときは省略できます。',
    },
    {
      heading: '具体例（例文・日本語訳・なぜその形か）',
      body:
        '①This song is loved by many people.（この歌は多くの人に愛されています。）\n→ 歌は愛される側なので **is loved**、する側は by 〜。\n\n②English is spoken in many countries.（英語は多くの国で話されています。）\n→ speak の過去分詞は spoken。だれが話すかは言わなくてよいので by 〜 を省略。\n\n③This book was written by Natsume Soseki.（この本は夏目漱石によって書かれました。）\n→ 過去の受け身なので **was written**。write の過去分詞は written。\n\n④These cars are made in Japan.（これらの車は日本で作られています。）\n→ cars は複数なので **are**。make の過去分詞は made。\n\n⑤English is not spoken in this town.（この町では英語は話されていません。）\n→ 否定は be動詞のあとに not。\n\n⑥Is English spoken in Canada?（カナダでは英語が話されていますか。）— Yes, it is.\n→ 疑問は be動詞を前に出す。答えにも be動詞を使います。',
    },
  ],
  testPoints: [
    '受け身の形は **be動詞＋過去分詞**。「〜される」「〜されている」',
    '動作をする人は **by 〜**。分かりきっているときは省略できる',
    'be動詞は主語と時で選ぶ（is / are / was / were）',
    '不規則動詞の過去分詞：write→**written**、speak→**spoken**、make→made、eat→**eaten**',
    'よくあるまちがい：× This car is make in Japan.（過去分詞 made にする）',
  ],
  figure: show([
    two(
      '受け身は、同じことを2つの見方で言う形です。上の文は「多くの人がこの歌を愛している」とする側が主語、下の文は「この歌は多くの人に愛されている」と受ける側が主語です。受ける側を主語にすると受け身になります。',
      [wg('Many people'), wg('love'), wg('this song.')],
      [wg('This song'), wr('is loved'), wb('by many people.')],
      '能動態：する人が主語',
      '受け身：受ける物が主語',
      '同じ出来事を、見る方向を変えて言う',
      'する側から、される側へ',
      C.blue,
      11,
    ),
    one(
      '❓受け身はどんな形でしょう。→ be動詞＋過去分詞が中心です。「愛されている」は be動詞 is と、love の過去分詞 loved を並べた is loved。だれによってかを言いたいときは、さらに by 〜 を後ろに足します。',
      [wg('主語'), wr('be動詞'), wr('過去分詞'), wb('by 〜')],
      '主語 ＋ be動詞 ＋ 過去分詞 ＋ by 〜',
      [['is / are / was / were + 過去分詞'], ['by 〜 は「〜によって」']],
      '受け身 ＝ be ＋ 過去分詞',
      C.red,
    ),
    lst(
      '過去分詞は、動詞ごとに決まった形です。規則動詞は過去形と同じ ed の形（use→used、love→loved）。不規則動詞は write→written、speak→spoken、eat→eaten のように形が変わります。',
      ['use → used → used（規則）', 'make → made → made', ['write → wrote → written', RD], ['speak → spoke → spoken', RD], ['eat → ate → eaten', RD]],
      '原形・過去形・過去分詞',
      BL,
    ),
    two(
      'be動詞は、主語と時で使い分けます。主語が単数なら is、複数なら are、過去なら was / were です。This car is made in Japan. と These cars are made in Japan. は、主語の単数・複数で be動詞だけが変わります。',
      [wg('This car'), wr('is'), wg('made'), wg('in Japan.')],
      [wg('These cars'), wr('are'), wg('made'), wg('in Japan.')],
      '主語が単数 → is',
      '主語が複数 → are',
      '過去分詞 made はそのまま',
      'be動詞は主語に合わせる',
      C.red,
    ),
    one(
      '過去のことを言うときは、be動詞を過去形にします。This book was written by Natsume Soseki. は「この本は夏目漱石によって書かれた」です。write の過去分詞は written で、wrote ではありません。',
      [wg('This book'), wr('was written'), wb('by'), wg('Natsume Soseki.')],
      'この本は夏目漱石によって書かれました',
      [['was ＋ written（過去の受け身）'], ['wrote ではなく written（過去分詞）']],
      '過去の受け身は was / were ＋ 過去分詞',
      C.red,
      11,
    ),
    one(
      '❓by 〜 はなぜ省略できるのでしょう。→ だれがしたかが分かりきっている、または重要でないからです。English is spoken in many countries. では「だれが話すか」は人々だと分かるので、by people を言わずに文を完成させます。',
      [wg('English'), wr('is spoken'), wg('in many countries.')],
      '英語は多くの国で話されています',
      [['by people を省略（言わなくても分かる）'], ['in 〜 は場所を表す']],
      'by 〜 は省略できる',
      C.green,
    ),
    two(
      '能動態を受け身に書きかえる手順です。Tom opened the door. の目的語 the door を主語にし、動詞を was opened に変え、Tom は by Tom として最後に置きます。時制は過去のままなので was です。',
      [wg('Tom'), wg('opened'), wr('the door.')],
      [wr('The door'), wr('was opened'), wb('by Tom.')],
      '目的語を主語にする',
      '動詞を be ＋ 過去分詞に、主語を by 〜に',
      '過去の文 → was / were',
      '目的語が主語に変わる',
      C.red,
    ),
    lst(
      '書きかえは3ステップです。①能動態の目的語を主語にする。②動詞を be動詞＋過去分詞にする（be動詞は新しい主語と時に合わせる）。③もとの主語を by 〜にして後ろに置く（省略可）。',
      ['①目的語（〜を）を主語にする', '②動詞を be動詞＋過去分詞にする', '③もとの主語を by 〜 にして後ろへ', ['※ be動詞は新しい主語と時に合わせる', RD]],
      '受け身への書きかえ3ステップ',
      BL,
      12,
    ),
    three(
      '受け身の肯定・否定・疑問です。否定は be動詞のあとに not を置きます（English is not spoken here.）。疑問は be動詞を主語の前に出します（Is English spoken here?）。答えにも be動詞を使います。',
      [wg('English'), wb('is'), wg('spoken here.')],
      [wg('English'), wb('is'), wr('not'), wg('spoken here.')],
      [wr('Is'), wg('English'), wg('spoken here?')],
      'Yes, it is. / No, it is not.',
      '受け身：肯定→否定→疑問',
      C.blue,
    ),
    one(
      '受け身の否定文です。English is not spoken in this town. は「この町では英語は話されていません」です。is not のあとに過去分詞 spoken が続きます。is not は isn\'t、are not は aren\'t と短くできます。',
      [wg('English'), wb('is'), wr('not'), wg('spoken'), wg('in this town.')],
      'この町では英語は話されていません',
      [["is not = isn't"], ['not は be動詞のすぐあと']],
      'be動詞のあとに not',
      C.red,
      11,
    ),
    one(
      '受け身の疑問文です。Is English spoken in Canada? は「カナダでは英語が話されていますか」です。be動詞 Is を主語 English の前に出します。答えは Yes, it is. のように be動詞を使います。',
      [wr('Is'), wg('English'), wg('spoken'), wg('in Canada?')],
      'カナダでは英語が話されていますか',
      [['Yes, it is.（はい、話されています）'], ['No, it is not.（いいえ）']],
      'be動詞を前に出す',
      C.red,
    ),
    one(
      '疑問詞を使った受け身の疑問文もあります。What language is spoken in Brazil? は「ブラジルでは何語が話されていますか」です。What language が主語のかたまりで、そのあとに is spoken が続きます。答えは Portuguese is spoken. です。',
      [wr('What language'), wg('is spoken'), wg('in Brazil?')],
      'ブラジルでは何語が話されていますか',
      [['Portuguese is spoken.（ポルトガル語です）'], ['What language が主語']],
      '疑問詞 ＋ be ＋ 過去分詞',
      C.purple,
      11,
    ),
    two(
      'よくあるまちがいです。This car is make in Japan. のように、過去分詞のところを原形のままにするのは誤りです。また be動詞を忘れて This car made in Japan. とするのも誤りです。必ず be動詞＋過去分詞の2つがそろっている必要があります。',
      [wr('×'), wg('is make'), wr('×'), wg('car made')],
      [wb('○'), wg('is made'), wb('○'), wg('car is made')],
      '過去分詞になっていない／be動詞がない',
      'be動詞 ＋ 過去分詞 の2つがそろう',
      'make → made（過去分詞）',
      'be動詞と過去分詞をセットで',
      C.red,
      11,
    ),
  ], '受け身'),
  checks: [
    { q: '（　）の語を正しい形にしなさい。This book was（　）by Soseki.（write）', a: 'written', why: '受け身は be動詞＋過去分詞。write の過去分詞は written です。過去形の wrote とは別の形なので注意します。' },
    { q: '（　）に入る語を答えなさい。These cars（　）made in Japan.', a: 'are', why: '主語 These cars は複数で、現在の受け身なので are。単数なら is、過去なら was / were を使います。' },
    { q: 'English is spoken here. を否定文にしなさい。', a: 'English is not spoken here.', why: '受け身の否定は be動詞のあとに not を置きます。過去分詞 spoken はそのまま変えません。' },
    { q: 'Tom opened the door. を受け身の文にしなさい。', a: 'The door was opened by Tom.', why: '目的語 the door を主語にし、動詞を was opened に変え、Tom を by Tom として後ろに置きます。' },
  ],
};

const unit3: TeikiUnit = {
  id: 'j3-eigo-02',
  grade: 'j3',
  subject: 'eigo',
  chapter: '現在完了',
  title: '現在完了（have / has＋過去分詞）',
  gist: '**have / has＋過去分詞**は、過去のできごとが**今につながっている**ことを表します。「〜したところだ」（完了）、「〜したことがある」（経験）、「ずっと〜している」（継続）の3つの意味があります。',
  sections: [
    {
      heading: '現在完了の形と考え方',
      body:
        '形は **have（has）＋過去分詞**。主語が he / she / it のとき（3人称単数）は has を使います。過去形は「昔のこと」だけを言いますが、現在完了は「過去から今まで」の結びつきを言います。\n\n3つの意味は、一緒に使う語でほぼ決まります。**完了**は just / already / yet、**経験**は ever / never / before / once / twice、**継続**は for（期間）/ since（起点）です。',
    },
    {
      heading: '否定・疑問と答え方',
      body:
        '否定は have のあとに not（I have not finished yet.）。have not は haven\'t、has not は hasn\'t と短くできます。疑問は have を主語の前に出し（Have you finished your homework yet?）、Yes, I have. / No, I have not. と答えます。\n\n「どのくらいの期間」をたずねるときは **How long have you lived here?** のように How long を使い、for 〜 や since 〜 で答えます。',
    },
    {
      heading: '具体例（例文・日本語訳・なぜその形か）',
      body:
        '①I have just finished my homework.（私はちょうど宿題を終えたところです。）\n→ 宿題が終わった結果が今ある。just は**完了**でよく使う語。\n\n②I have already eaten lunch.（私はもう昼食を食べました。）\n→ already（もう）も完了。eat の過去分詞は eaten。\n\n③I have visited Kyoto twice.（私は京都を2回訪れたことがあります。）\n→ twice（2回）があるので**経験**。\n\n④Have you ever seen a lion?（ライオンを見たことがありますか。）— Yes, I have.\n→ ever（今までに）は経験の疑問文。see の過去分詞は seen。\n\n⑤I have lived in Osaka for ten years.（私は10年間ずっと大阪に住んでいます。）\n→ 今も住んでいるので**継続**。for＋期間。\n\n⑥She has been sick since last week.（彼女は先週からずっと病気です。）\n→ 主語が she なので has。since＋起点で、be の過去分詞は been。',
    },
  ],
  testPoints: [
    '形は **have / has＋過去分詞**（he・she・it は has）',
    '完了：**just / already / yet**、経験：**ever / never / once / twice**、継続：**for / since**',
    '過去形（昔だけ）と現在完了（今につながる）のちがい。yesterday など過去を表す語とは使えない',
    '否定は **have not**、疑問は **Have 〜?**。答えも have を使う',
    'よくあるまちがい：× I have visited Kyoto yesterday.（yesterday とは使えない）',
  ],
  figure: show([
    (() => {
      return {
        note: '現在完了は、過去から今までを矢印でつなぐイメージです。過去のできごとが、そのまま今にも関係しているときに使います。「昔のことだけ」を言う過去形とは、この点がちがいます。',
        add: fresh(
          ln(30, 70, 290, 70, C.ink, false, 2),
          lb(40, 100, '過去', 12, C.gray, 'middle', true),
          lb(260, 100, '今', 12, C.red, 'middle', true),
          ar(50, 56, 250, 56, C.blue),
          lb(150, 40, 'つながっている', 12, C.blue, 'middle', true),
          bx(60, 106, 200, 28, 'have / has ＋ 過去分詞', C.red, FILL.red, 12),
          ...cap('過去から今までをつなぐ', C.blue),
        ),
      };
    })(),
    one(
      '現在完了の形です。have のあとに過去分詞を置きます。I have finished my homework. のように、主語が I / you / we / they なら have、he / she / it なら has を使います。has のあとも過去分詞です。',
      [wg('I'), wr('have'), wb('finished'), wg('my homework.')],
      '私は宿題を終えました',
      [['主語が he / she / it → has'], ['have / has ＋ 過去分詞']],
      '形は have ＋ 過去分詞',
      C.red,
    ),
    two(
      '❓過去形と現在完了は何がちがうのでしょう。→ 過去形は「過去にしたこと」だけを言い、今のことは言いません。現在完了は「過去から今までつづくこと」や「今にも結果が残っていること」を言います。I lived は「昔住んでいた」というだけですが、I have lived は「今も住んでいる」ことまで表します。',
      [wg('I'), wg('lived'), wg('in Osaka'), wg('ten years ago.')],
      [wg('I'), wr('have lived'), wg('in Osaka'), wg('for ten years.')],
      '過去形：昔のこと',
      '現在完了：今までずっと',
      '過去を表す語（ago, yesterday）とは使えない',
      '過去形は昔、現在完了は今につながる',
      C.red,
      11,
    ),
    one(
      '完了の用法です。I have just finished my homework. は「ちょうど宿題を終えたところだ」です。just は「ちょうど」で、宿題が終わった結果が今ある、という意味を表します。have と過去分詞の間に just を置きます。',
      [wg('I'), wr('have'), wb('just'), wg('finished'), wg('my homework.')],
      '私はちょうど宿題を終えたところです',
      [['完了：just（ちょうど）／already（もう）／yet（まだ）'], ['have と過去分詞の間に just']],
      '完了：〜したところだ',
      C.green,
      11,
    ),
    one(
      'already も完了でよく使います。I have already eaten lunch. は「私はもう昼食を食べました」です。already は肯定文で「もう」、yet は否定文で「まだ」、疑問文で「もう」の意味になります。',
      [wg('I'), wr('have'), wb('already'), wg('eaten'), wg('lunch.')],
      '私はもう昼食を食べました',
      [['eat → ate → eaten（過去分詞）'], ['already ＝ もう（肯定文）']],
      '完了：already（もう）',
      C.green,
      11,
    ),
    one(
      '経験の用法です。I have visited Kyoto twice. は「私は京都を2回訪れたことがあります」です。twice（2回）、once（1回）、three times（3回）のように回数を表す語を使います。',
      [wg('I'), wr('have'), wg('visited'), wg('Kyoto'), wb('twice.')],
      '私は京都を2回訪れたことがあります',
      [['経験：once / twice / three times'], ['〜したことがある']],
      '経験：〜したことがある',
      C.purple,
      11,
    ),
    two(
      '経験の疑問文には ever（今までに）を、否定文には never（一度も〜ない）を使います。Have you ever seen a lion? に対して、I have never seen a lion. のように答えられます。never は have のあとに置きます。',
      [wr('Have'), wg('you'), wb('ever'), wg('seen a lion?')],
      [wg('I'), wr('have'), wb('never'), wg('seen a lion.')],
      'ライオンを見たことがありますか',
      '私は一度も見たことがありません',
      'see → saw → seen（過去分詞）',
      '経験：ever と never',
      C.purple,
    ),
    one(
      '継続の用法です。I have lived in Osaka for ten years. は「私は10年間ずっと大阪に住んでいる」です。過去から今まで同じ状態が続いていることを表します。for のあとには期間（ten years）が来ます。',
      [wg('I'), wr('have lived'), wg('in Osaka'), wb('for ten years.')],
      '私は10年間ずっと大阪に住んでいます',
      [['継続：for ＋ 期間（ten years）'], ['live・know・be など状態を表す動詞']],
      '継続：ずっと〜している',
      C.blue,
      11,
    ),
    two(
      '❓for と since のちがいは何でしょう。→ for のあとには「期間の長さ」（for ten years）、since のあとには「始まった時点」（since last week）を置きます。どちらも継続の文で使い、いつからいつまでかを説明します。',
      [wg('She'), wr('has been'), wg('sick'), wb('for three days.')],
      [wg('She'), wr('has been'), wg('sick'), wb('since last week.')],
      'for ＋ 期間の長さ',
      'since ＋ 始まった時点',
      'be の過去分詞は been',
      'for は期間、since は起点',
      C.blue,
    ),
    two(
      '否定文は have のあとに not を置きます。I have not finished my homework yet. は「私はまだ宿題を終えていません」です。yet は否定文で「まだ」の意味です。have not は haven\'t、has not は hasn\'t と短くできます。',
      [wg('I'), wb('have'), wg('finished'), wg('my homework.')],
      [wg('I'), wb('have'), wr('not'), wg('finished'), wg('it yet.')],
      '肯定文',
      '否定文：have のあとに not',
      "have not = haven't　has not = hasn't",
      '否定は have のあとに not',
      C.red,
    ),
    two(
      '疑問文は have（has）を主語の前に出します。Have you finished your homework yet? は「もう宿題を終えましたか」です。答えは Yes, I have. または No, I have not. で、have を使って答えます。',
      [wg('You'), wb('have'), wg('finished'), wg('your homework.')],
      [wr('Have'), wg('you'), wg('finished'), wg('your homework yet?')],
      '肯定文',
      '疑問文：have を前に出す',
      'Yes, I have. / No, I have not.',
      '疑問は have を前に出す',
      C.red,
      11,
    ),
    one(
      '期間をたずねるときは How long を使います。How long have you lived here? は「ここにどのくらい住んでいますか」です。答えは For two years.（2年間です）や Since 2020. のように、for や since で答えます。',
      [wr('How long'), wb('have'), wg('you'), wg('lived here?')],
      'ここにどのくらい住んでいますか',
      [['For two years.（2年間です）'], ['Since last year.（昨年からです）']],
      'How long ＋ have ＋ 主語 ＋ 過去分詞',
      C.purple,
    ),
    lst(
      '現在完了の3つの用法をまとめます。完了は just / already / yet と使い「〜したところだ」、経験は ever / never / once / twice と使い「〜したことがある」、継続は for / since と使い「ずっと〜している」です。',
      [['完了：just / already / yet', GR], ['経験：ever / never / once / twice', PU], ['継続：for / since', BL], ['形：have / has ＋ 過去分詞', RD]],
      '現在完了の3つの意味',
      BL,
      12,
    ),
  ], '現在完了'),
  checks: [
    { q: '（　）に入る語を答えなさい。She（　）lived here for five years.', a: 'has', why: '主語 She は3人称単数なので have ではなく has。for five years は「ずっと」を表す継続の語です。' },
    { q: '「私は一度も京都に行ったことがありません。」の（　）に入る語を答えなさい。I have（　）been to Kyoto.', a: 'never', why: '「一度も〜ない」は never。経験の否定文では not の代わりによく never を使い、have のあとに置きます。' },
    { q: 'Have you finished your homework yet? に「いいえ」で答えなさい。', a: 'No, I have not.', why: '現在完了の疑問文には、have を使って答えます。No, I did not. のように did は使いません。' },
    { q: '× I have visited Kyoto yesterday. のまちがいを説明しなさい。', a: 'yesterday は過去だけを表す語なので、現在完了と一緒に使えない', why: '現在完了は「今につながる」ことを表すので、yesterday のように過去の一点を表す語とは使えません。I visited Kyoto yesterday. が正しい文です。' },
  ],
};


export const TEIKI_J3_EIGO: TeikiUnit[] = [unit2, unit3, unit];
