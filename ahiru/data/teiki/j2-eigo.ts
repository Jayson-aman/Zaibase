// 中2 英語（定期テスト向け・教科書の延長）。英文は半角、説明は日本語。
// 図解は 320×240。上半分（y<150）に図、下の帯にそのスライドのひとこと。
import type { TeikiUnit } from './types';
import type { DiagramElement } from '../figures';
import { C, FILL, bx, lb, ar, ln, show, band, fresh } from '../diagram-kit';

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

const unit: TeikiUnit = {
  id: 'j2-eigo-01',
  grade: 'j2',
  subject: 'eigo',
  chapter: '不定詞',
  title: '不定詞（to＋動詞の原形）の3用法',
  gist: '**to＋動詞の原形**を不定詞といいます。「〜すること」（名詞的）、「〜するために・〜して」（副詞的）、「〜するための」（形容詞的）の3つのはたらきがあります。',
  sections: [
    {
      heading: '不定詞のつくりと意味',
      body:
        '不定詞は **to の後ろに動詞の原形**を置いた形です（to play, to read, to be など）。主語が I でも he でも、to のあとの動詞は変わりません。主語や人数で形が限定されないので「不定」詞と呼ばれます。\n\n不定詞は、まとまりで**名詞・副詞・形容詞のどれかのはたらき**をします。どのはたらきかで日本語の訳し方が変わります。',
    },
    {
      heading: '名詞的用法（〜すること）',
      body:
        '名詞は「〜が」「〜を」「〜は」の形で文に入る語です。to＋動詞も「〜すること」という名詞のはたらきをして、動詞の目的語（I like to play tennis.）や補語（My dream is to be a doctor.）になります。\n\nwant to 〜（〜したい）、like to 〜（〜することが好きだ）、try to 〜（〜しようとする）はセットで覚えておきましょう。**want のあとは動詞の原形ではなく to＋動詞**です。',
    },
    {
      heading: '副詞的用法と形容詞的用法',
      body:
        '**副詞的用法**は動詞や形容詞を説明します。動作の目的は「〜するために」（I went to the park to play soccer.）、感情の原因は「〜して」（I was happy to see you.）と訳します。\n\n**形容詞的用法**は直前の名詞を説明して「〜するための、〜すべき」と訳します（I have a book to read.）。日本語と違って、説明する不定詞は**名詞の後ろ**に置くのが特徴です。',
    },
  ],
  testPoints: [
    '不定詞は **to＋動詞の原形**。主語が3単現でも、to のあとに s をつけない',
    '名詞的用法は「**〜すること**」。want to 〜「〜したい」はとくに頻出',
    '副詞的用法は「**〜するために**（目的）」と「**〜して**（感情の原因）」の2つ',
    '形容詞的用法は「**〜するための**」。something to drink のように名詞の後ろに置く',
    'よくあるまちがい：× He wants to plays tennis.（正しくは He wants to play tennis.）',
  ],
  figure: show([
    (() => {
      const r1 = row(24, [{ t: 'to', ...RD }, { t: 'play', ...BL }], 14, 6, 30);
      const r2 = row(78, [{ t: 'to', ...RD }, { t: 'read', ...BL }, { t: 'to', ...RD }, { t: 'eat', ...BL }, { t: 'to', ...RD }, { t: 'be', ...BL }], 13, 6, 28);
      return {
        note: '不定詞は「to＋動詞の原形」の形です。to のあとに、play, read, eat, be など好きな動詞の原形を置けます。まずはこの形をしっかり覚えましょう。',
        add: fresh(...r1.els, lb(160, 70, 'to ＋ 動詞の原形', 13, C.ink, 'middle', true), ...r2.els, lb(160, 128, 'いろいろな動詞が入る', 12, C.gray, 'middle'), ...cap('不定詞 ＝ to ＋ 動詞の原形')),
      };
    })(),
    (() => {
      const r1 = row(14, [{ t: 'I', ...G }, { t: 'want', ...G }, { t: 'to play.', ...BL }]);
      const r2 = row(46, [{ t: 'He', ...G }, { t: 'wants', ...RD }, { t: 'to play.', ...BL }]);
      const r3 = row(78, [{ t: 'They', ...G }, { t: 'want', ...G }, { t: 'to play.', ...BL }]);
      return {
        note: '❓なぜ「不定」詞というのでしょう。→ 主語が I でも He でも They でも、to play の形は変わらないからです。変わるのは wants の s だけ。このように人数や主語で形が限定されないので「不定」詞と呼びます。',
        add: fresh(...r1.els, ...r2.els, ...r3.els, lb(160, 126, 'want は主語で変わるが to play は変わらない', 11, C.gray, 'middle'), ...cap('to のあとはいつも原形', C.blue)),
      };
    })(),
    {
      note: '不定詞には3つのはたらきがあります。名詞のはたらきの「〜すること」、副詞のはたらきの「〜するために・〜して」、形容詞のはたらきの「〜するための」です。これから1つずつ、例文で見ていきましょう。',
      add: fresh(
        bx(10, 12, 300, 34, '名詞的用法：〜すること', C.blue, FILL.blue, 13),
        bx(10, 56, 300, 34, '副詞的用法：〜するために・〜して', C.green, FILL.green, 13),
        bx(10, 100, 300, 34, '形容詞的用法：〜するための', C.purple, FILL.purple, 13),
        ...cap('不定詞の3つのはたらき'),
      ),
    },
    (() => {
      const r1 = row(18, [{ t: 'I', ...G }, { t: 'like', ...G }, { t: 'to play tennis.', ...BL }]);
      const r2 = row(82, [{ t: 'I', ...G }, { t: 'like', ...G }, { t: 'tennis.', ...BL }]);
      return {
        note: '❓なぜ名詞的用法というのでしょう。→ like のあとには「好きなもの」という名詞が入ります。tennis の代わりに to play tennis（テニスをすること）を入れられるので、名詞のはたらきだとわかります。',
        add: fresh(...r1.els, lb(160, 62, '「テニスをすることが好きだ」', 12, C.blue, 'middle', true), ...r2.els, lb(160, 126, 'tennis（名詞）と同じ位置に入る', 12, C.gray, 'middle'), ...cap('to＋動詞が名詞のはたらき', C.blue)),
      };
    })(),
    (() => {
      const r1 = row(14, [{ t: 'My dream', ...G }, { t: 'is', ...G }, { t: 'to be a doctor.', ...BL }]);
      const r2 = row(78, [{ t: 'I', ...G }, { t: 'want to', ...RD }, { t: 'see', ...BL }, { t: 'you.', ...G }]);
      return {
        note: '名詞的用法は be動詞のあとにも来ます。My dream is to be a doctor. は「私の夢は医者になることです」で、夢＝医者になること、という関係です。また I want to see you.（会いたい）のように、want to は「〜したい」の決まった形です。',
        add: fresh(...r1.els, lb(160, 60, '夢 ＝ 医者になること', 12, C.blue, 'middle', true), ...r2.els, lb(160, 124, 'want to ＋ 動詞の原形 ＝ 〜したい', 12, C.red, 'middle', true), ...cap('is のあとや want のあとにも使う', C.blue)),
      };
    })(),
    (() => {
      const r1 = row(14, [{ t: 'I', ...G }, { t: 'went', ...G }, { t: 'to the park', ...G }, { t: 'to play soccer.', ...GR }]);
      return {
        note: '❓なぜこれが「〜するために」の副詞的用法とわかるのでしょう。→ 動詞 went（行った）に「何のために？」とたずねると、答えが to play soccer（サッカーをするため）になるからです。動作の目的を説明しています。',
        add: fresh(...r1.els, lb(160, 62, '公園に行った  →  サッカーをするために', 12, C.green, 'middle', true), lb(160, 98, 'Why did you go to the park?', 12, C.ink, 'middle', true), lb(160, 122, '→ To play soccer.（サッカーをするため）', 12, C.green, 'middle'), ...cap('目的：〜するために', C.green)),
      };
    })(),
    (() => {
      const r1 = row(14, [{ t: 'I', ...G }, { t: 'was', ...G }, { t: 'happy', ...G }, { t: 'to see you.', ...GR }]);
      const r2 = row(72, [{ t: 'I', ...G }, { t: 'was', ...G }, { t: 'surprised', ...G }, { t: 'to hear the news.', ...GR }]);
      return {
        note: '副詞的用法には、うれしい・おどろいたなど感情を表す語のあとに来て、その原因を表す使い方もあります。I was happy to see you. は「あなたに会えてうれしかった」、to hear the news は「その知らせを聞いておどろいた」です。この場合は「〜して」と訳します。',
        add: fresh(...r1.els, lb(160, 58, '「あなたに会えて」うれしかった', 12, C.green, 'middle'), ...r2.els, lb(160, 116, '「その知らせを聞いて」おどろいた', 12, C.green, 'middle'), lb(160, 138, 'happy / glad / sad / surprised のあと', 11, C.gray, 'middle'), ...cap('感情の原因：〜して', C.green)),
      };
    })(),
    (() => {
      const r1 = row(14, [{ t: 'I', ...G }, { t: 'have', ...G }, { t: 'a book', ...RD }, { t: 'to read.', ...BL }]);
      const r2 = row(92, [{ t: 'I', ...G }, { t: 'want', ...G }, { t: 'something', ...RD }, { t: 'to drink.', ...BL }]);
      const x1 = r1.xs[3], x2 = r1.xs[2];
      return {
        note: '❓なぜ形容詞的用法というのでしょう。→ 形容詞は名詞を説明する語です。a book のすぐ後ろの to read が「どんな本か」を説明して、「読むための本」という意味になります。something to drink（飲むための何か＝飲み物）も同じ形です。',
        add: fresh(...r1.els, ar(x1, 42, x2 + 4, 42, C.purple), ln(x1, 40, x1, 42, C.purple), lb(160, 66, '「読むための本」 to read が a book を説明', 11, C.purple, 'middle', true), ...r2.els, lb(160, 138, '名詞の後ろから説明する', 12, C.gray, 'middle'), ...cap('名詞を説明：〜するための', C.purple)),
      };
    })(),
    {
      note: '見分け方をまとめます。①to〜を「〜こと」に言いかえられるなら名詞的、②動作の目的や感情の原因を表すなら副詞的、③直前の名詞を説明しているなら形容詞的です。訳してみて、どれがいちばん自然かで判断します。',
      add: fresh(
        bx(10, 12, 300, 36, 'to〜が「〜こと」と言いかえられる → 名詞的', C.blue, FILL.blue, 11),
        bx(10, 56, 300, 36, '目的「〜するために」・原因「〜して」→ 副詞的', C.green, FILL.green, 11),
        bx(10, 100, 300, 36, '名詞のすぐ後ろで「〜するための」→ 形容詞的', C.purple, FILL.purple, 11),
        ...cap('訳してみて見分ける'),
      ),
    },
    {
      note: '最後に注意です。to のあとの動詞は、主語が he や she でも原形のままです。He wants to plays tennis. のように plays にするのは誤りです。s は wants のほうにだけつきます。',
      add: fresh(
        bx(20, 12, 280, 28, '×  He wants to plays tennis.', C.red, FILL.red, 13),
        bx(20, 62, 280, 28, '○  He wants to play tennis.', C.blue, FILL.blue, 13),
        lb(160, 116, 'wants の s は want に。to play は変えない', 12, C.ink, 'middle', true),
        ...cap('to のあとは主語に関係なく原形', C.red),
      ),
    },
  ], '不定詞の3用法'),
  checks: [
    { q: '次の下線部（to drink water）の用法は、名詞的・副詞的・形容詞的のどれですか。I want to drink water.', a: '名詞的用法（水を飲みたい）', why: 'want のあとの to drink water は「水を飲むこと」という名詞のはたらきで、want の目的語です。want to 〜 は「〜したい」の形で覚えます。' },
    { q: 'She went to the library to study. の to study の用法と意味を答えなさい。', a: '副詞的用法（勉強するために）', why: '「なぜ図書館に行ったの？」の答えが to study です。動作の目的を表す副詞的用法で「〜するために」と訳します。' },
    { q: 'I have a lot of homework to do. の to do の用法と意味を答えなさい。', a: '形容詞的用法（するべき宿題）', why: 'to do が直前の名詞 homework を後ろから説明しています。「〜するための、〜すべき」と訳す形容詞的用法です。' },
    { q: 'I was glad to meet you. の to meet you の用法と意味を答えなさい。', a: '副詞的用法（あなたに会えて）', why: 'glad（うれしい）という感情の原因を表しているので副詞的用法です。この場合は「〜して」と訳します。' },
  ],
};

export const TEIKI_J2_EIGO: TeikiUnit[] = [unit];
