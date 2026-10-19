// 中3 英語（定期テスト向け・教科書の延長）。英文は半角、説明は日本語。
// 図解は 320×240。上半分（y<150）に図、下の帯にそのスライドのひとこと。
import type { TeikiUnit } from './types';
import type { DiagramElement } from '../figures';
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

const unit: TeikiUnit = {
  id: 'j3-eigo-01',
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

export const TEIKI_J3_EIGO: TeikiUnit[] = [unit];
