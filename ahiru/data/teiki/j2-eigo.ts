// 中2 英語（定期テスト向け・教科書の延長）。英文は半角、説明は日本語。
// 図解は 320×240。上半分（y<150）に図、下の帯にそのスライドのひとこと。
import type { TeikiUnit } from './types';
import type { DiagramElement } from '../figures';
import type { Slide } from '../diagram-kit';
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
    {
      heading: '具体例（例文・日本語訳・なぜその形か）',
      body:
        '①I like to read books.（私は本を読むことが好きです。）\n→ to read books は「本を読むこと」。like の目的語になる**名詞的用法**です。\n\n②My dream is to be a singer.（私の夢は歌手になることです。）\n→ 夢＝歌手になること。is のあとに来て補語になる名詞的用法です。\n\n③I went to the station to meet my friend.（私は友だちに会うために駅へ行きました。）\n→ 「なぜ行ったか」の目的を表す**副詞的用法**。\n\n④I was sad to hear the news.（私はその知らせを聞いて悲しかった。）\n→ sad の原因を表す副詞的用法で「〜して」と訳します。\n\n⑤I have something to tell you.（あなたに伝えたいことがあります。）\n→ something の後ろから「伝えるための」と説明する**形容詞的用法**。\n\n⑥She wants to visit Kyoto.（彼女は京都を訪れたがっています。）\n→ 主語が she なので wants ですが、to visit は原形のまま。',
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
      const r1 = row(12, [{ t: 'to', ...RD }, { t: 'play', ...BL }], 14, 6, 30);
      const r2 = row(86, [{ t: 'to', ...RD }, { t: 'read', ...BL }, { t: 'to', ...RD }, { t: 'eat', ...BL }, { t: 'to', ...RD }, { t: 'be', ...BL }], 13, 6, 28);
      return {
        note: '不定詞は「to＋動詞の原形」の形です。to のあとに、play, read, eat, be など好きな動詞の原形を置けます。まずはこの形をしっかり覚えましょう。',
        add: fresh(...r1.els, lb(160, 62, 'to ＋ 動詞の原形', 13, C.ink, 'middle', true), ...r2.els, lb(160, 132, 'いろいろな動詞が入る', 12, C.gray, 'middle'), ...cap('不定詞 ＝ to ＋ 動詞の原形')),
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
        add: fresh(...r1.els, ar(x1, 50, x2 + 4, 50, C.purple), ln(x1, 40, x1, 50, C.purple), lb(160, 70, '「読むための本」 to read が a book を説明', 11, C.purple, 'middle', true), ...r2.els, lb(160, 138, '名詞の後ろから説明する', 12, C.gray, 'middle'), ...cap('名詞を説明：〜するための', C.purple)),
      };
    })(),
    one(
      '名詞的用法のもう1つの例です。I want to be a teacher. は「私は先生になりたい」です。want to のあとの be は「〜である、〜になる」の動詞で、to be a teacher 全体が「先生になること」という名詞のかたまりです。',
      [wg('I'), wr('want to'), wb('be'), wg('a teacher.')],
      '私は先生になりたい',
      [['want to ＋ 動詞の原形 ＝ 〜したい'], ['be の原形は be（am や is にしない）']],
      'want to be 〜 ＝ 〜になりたい',
      C.blue,
    ),
    one(
      '否定文のときも不定詞の形は変わりません。I do not want to go there. は「私はそこへ行きたくない」です。not が入るのは want の前（do not want）で、to go の部分は原形のまま変えません。',
      [wg('I'), wr('do not'), wg('want'), wb('to go'), wg('there.')],
      '私はそこへ行きたくない',
      [['否定は want の前に do not'], ['to go はそのまま（to を落とさない）']],
      '否定は want の前、to＋原形はそのまま',
      C.red,
      11,
    ),
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

const unit2: TeikiUnit = {
  id: 'j2-eigo-02',
  grade: 'j2',
  subject: 'eigo',
  chapter: '過去形',
  title: '過去の文（過去形・was / were・did）',
  gist: '過去のことは、動詞を**過去形**にして表します。一般動詞は ed をつけるか不規則に変わり、be動詞は **was / were** になります。否定・疑問では **did** を使い、動詞は原形にもどします。',
  sections: [
    {
      heading: '過去形のつくり方',
      body:
        '一般動詞の過去形は、規則動詞なら語尾に **ed**（play→played）、e で終わる語は d だけ（like→liked）、「子音字＋y」は y を i にして ed（study→studied）、短い語は最後の子音を重ねて ed（stop→stopped）です。\n\ngo→went, see→saw, eat→ate, have→had, make→made, buy→bought, come→came のような不規則動詞は、1つずつ覚えます。**過去形は主語が何でも同じ形**で、現在の s はつきません。',
    },
    {
      heading: 'be動詞の過去・否定・疑問',
      body:
        'be動詞の過去形は、am と is が **was**、are が **were** です（I was, He was, You were, They were）。否定は was not / were not（wasn\'t / weren\'t）、疑問は主語の前に出して Was he 〜? とします。\n\n一般動詞の否定は **did not＋原形**、疑問は **Did＋主語＋原形** です。過去の意味は did が引き受けるので、あとの動詞は原形（go）にします。',
    },
    {
      heading: '具体例（例文・日本語訳・なぜその形か）',
      body:
        '①I played tennis yesterday.（私はきのうテニスをしました。）\n→ yesterday があるので過去。play に ed。\n\n②She went to Kyoto last summer.（彼女は去年の夏に京都へ行きました。）\n→ go は不規則で **went**。last summer は過去を表す語。\n\n③He was tired.（彼は疲れていました。）\n→ be動詞の過去。主語 He なので was。\n\n④They did not watch TV.（彼らはテレビを見ませんでした。）\n→ 否定は did not＋**原形** watch。watched にはしません。\n\n⑤Did you eat lunch?（あなたは昼食を食べましたか。）— Yes, I did.\n→ 疑問は Did で始め、動詞 eat は原形。答えにも did を使います。\n\n⑥What did you buy?（あなたは何を買いましたか。）— I bought a bag.\n→ 疑問詞＋did＋主語＋原形。答えの buy は不規則で bought。',
    },
  ],
  testPoints: [
    '規則動詞は **ed**：play→played、like→liked、study→studied、stop→stopped',
    '不規則動詞：go→went, see→saw, eat→ate, have→had, make→made, buy→bought',
    'be動詞の過去は **was / were**（I・he・she・it は was、you・we・they は were）',
    '否定・疑問の **did のあとは原形**（× Did you went?）',
    '過去を表す語：yesterday, last 〜, 〜 ago',
  ],
  figure: show([
    lst(
      '過去の文では、いつのことかを示す語がよく使われます。yesterday（きのう）、last week（先週）、two days ago（2日前）などです。これらの語があれば、動詞は過去形にします。',
      ['yesterday：きのう', 'last week：先週　last year：昨年', 'two days ago：2日前', 'in 2020：2020年に'],
      '過去を表す語があれば過去形',
      BL,
      12,
    ),
    two(
      '一般動詞の過去形は、ふつう語尾に ed をつけます。play→played、walk→walked のように、現在形に ed を足すだけです。ed をつけた形は、主語が何でも同じ形になります。',
      [wg('I'), wb('play'), wg('tennis.')],
      [wg('I'), wr('played'), wg('tennis'), wg('yesterday.')],
      '現在形（いつも）',
      '過去形（きのう）',
      'play → played（ed をつける）',
      '規則動詞は ed',
      C.red,
    ),
    lst(
      'ed のつけ方には3つの例外があります。e で終わる語は d だけ（like→liked）、子音字＋y は y を i にして ed（study→studied）、短い語は最後の子音を重ねて ed（stop→stopped）です。',
      ['like → liked（e で終わる語は d だけ）', 'study → studied（y を i にして ed）', 'stop → stopped（子音を重ねて ed）', ['play → played（母音字＋y はそのまま ed）', GR]],
      'ed のつけ方の例外',
      PU,
    ),
    lst(
      '不規則動詞は、ed をつけずに形がかわります。go→went、see→saw、eat→ate、have→had などは、まとめて覚えるしかありません。テストでよく問われるので、現在形とセットで書けるようにしましょう。',
      ['go → went（行く）', 'see → saw（見る）', 'eat → ate（食べる）', 'have → had（持つ）'],
      '不規則動詞は形ごと覚える',
      RD,
      12,
    ),
    lst(
      'さらに make→made（作る）、buy→bought（買う）、come→came（来る）も大切な不規則動詞です。get→got、write→wrote、take→took、read→read（つづりは同じで発音がかわる）などもあります。',
      ['make → made（作る）', 'buy → bought（買う）', 'come → came（来る）', 'take → took（とる）'],
      '不規則動詞その2',
      RD,
      12,
    ),
    three(
      '❓過去形には s がつかないのでしょうか。→ はい。現在形では主語が3単現のときだけ s をつけますが、過去形は主語が何でも同じ形です。I played、He played、They played と、すべて played です。',
      [wg('I'), wr('played'), wg('tennis.')],
      [wg('He'), wr('played'), wg('tennis.')],
      [wg('They'), wr('played'), wg('tennis.')],
      '過去形には 3単現の s がない',
      '主語が何でも同じ形',
      C.red,
      12,
    ),
    lst(
      'be動詞の過去形は2つだけです。am と is が was、are が were になります。I was, He was, She was, It was は was。You were, We were, They were は were を使います。',
      ['I am → I was', 'He / She / It is → was', ['You / We / They are → were', BL]],
      'be動詞の過去は was / were',
      BL,
      12,
    ),
    three(
      'be動詞の過去の文を、肯定→否定→疑問に作り替えます。否定は was のあとに not、疑問は was を主語の前に出します。was not は wasn\'t と短くできます。',
      [wg('He'), wb('was'), wg('tired.')],
      [wg('He'), wb('was'), wr('not'), wg('tired.')],
      [wr('Was'), wg('he'), wg('tired?')],
      'Yes, he was. / No, he was not.',
      'was / were の肯定→否定→疑問',
      C.blue,
      12,
    ),
    two(
      '❓一般動詞の過去の否定文で、なぜ動詞が原形にもどるのでしょう。→ 過去の意味を did が引き受けるからです。did not のあとの動詞 play は原形のまま。played のように過去形にすると、過去が二重になってしまいます。',
      [wg('I'), wg('played'), wg('tennis.')],
      [wg('I'), wr('did not'), wb('play'), wg('tennis.')],
      '肯定文：過去形 played',
      '否定文：did not ＋ 原形 play',
      "did not = didn't",
      'did not のあとは原形',
      C.red,
    ),
    two(
      '一般動詞の過去の疑問文は、文のはじめに Did を出し、動詞は原形にします。Did you play tennis yesterday? に対して、Yes, I did. または No, I did not. と答えます。疑問文でも動詞は played ではなく play です。',
      [wg('You'), wg('played'), wg('tennis.')],
      [wr('Did'), wg('you'), wb('play'), wg('tennis?')],
      '肯定文：過去形 played',
      '疑問文：Did ＋ 主語 ＋ 原形',
      'Yes, I did. / No, I did not.',
      'Did で始め、動詞は原形',
      C.red,
    ),
    two(
      'go のような不規則動詞でも、Did の疑問文では原形にもどします。He went to the park. は Did he go to the park? になります。went のまま残すと、過去が二重になってしまうので誤りです。',
      [wg('He'), wg('went'), wg('to the park.')],
      [wr('Did'), wg('he'), wb('go'), wg('to the park?')],
      '肯定文：went（go の過去形）',
      '疑問文：go（原形にもどる）',
      'Yes, he did. / No, he did not.',
      '不規則動詞も Did のあとは原形',
      C.red,
    ),
    two(
      '疑問詞が入った過去の疑問文は、疑問詞のあとに Did を続けます。What did you eat? は「何を食べましたか」、Where did you go? は「どこへ行きましたか」です。答えは過去形で I ate pizza. のように言います。',
      [wr('What'), wb('did'), wg('you'), wg('eat?')],
      [wr('Where'), wb('did'), wg('you'), wg('go?')],
      'I ate pizza.（ピザを食べました）',
      'I went to Kyoto.（京都へ行きました）',
      '疑問詞 ＋ did ＋ 主語 ＋ 原形',
      '疑問詞のあとに did',
      C.purple,
    ),
    two(
      'よくあるまちがいです。Did you went? のように、Did と過去形を重ねるのは誤りです。また、I did not played のように did not のあとを過去形にするのも誤りです。did を使うときは動詞を必ず原形にします。',
      [wr('×'), wg('Did you went?'), wr('×'), wg('did not played')],
      [wb('○'), wg('Did you go?'), wb('○'), wg('did not play')],
      '過去が二重になっている',
      '過去の意味は did だけが持つ',
      'did を使うときは動詞は原形',
      '過去を二重にしない',
      C.red,
      11,
    ),
    lst(
      'まとめです。肯定文は過去形、否定文は did not＋原形、疑問文は Did＋主語＋原形です。be動詞の場合は was / were を使い、did は使いません。一般動詞か be動詞かを最初に見分けて、形を選びましょう。',
      ['肯定：I played tennis.', '否定：I did not play tennis.', '疑問：Did you play tennis?', ['be動詞：He was tired. / Was he tired?', BL]],
      '一般動詞は did、be動詞は was / were',
      GR,
      12,
    ),
  ], '過去の文'),
  checks: [
    { q: '（　）の語を正しい形にしなさい。She（　）to the park yesterday.（go）', a: 'went', why: 'yesterday があるので過去。go は不規則動詞で、過去形は went です。ed をつけて goed とは書きません。' },
    { q: 'I played tennis. を否定文にしなさい。', a: 'I did not play tennis.', why: '過去の否定文は did not＋原形。過去の意味は did が引き受けるので、played は原形 play にもどします。' },
    { q: 'He went to Kyoto. を疑問文にしなさい。', a: 'Did he go to Kyoto?', why: '疑問文は Did を文のはじめに置き、動詞は原形にします。went のままにしないのが重要です。' },
    { q: '（　）に入る語を選びなさい。They（　）in the park.（was / were）', a: 'were', why: '主語 They は複数なので be動詞の過去は were。was は I, he, she, it のときだけ使います。' },
  ],
};

const unit3: TeikiUnit = {
  id: 'j2-eigo-03',
  grade: 'j2',
  subject: 'eigo',
  chapter: '比較',
  title: '比較（-er / -est、more / most、as 〜 as）',
  gist: '2つを比べるときは**比較級（-er / more）＋ than**、3つ以上の中で一番のときは **the＋最上級（-est / most）**、同じ程度のときは **as 〜 as** を使います。',
  sections: [
    {
      heading: '比較級と最上級のつくり方',
      body:
        '短い語は語尾に **er / est** をつけます（tall→taller→tallest）。e で終わる語は r / st だけ（large→larger→largest）、最後の子音を重ねる語（big→bigger→biggest）、y を i にする語（early→earlier→earliest）もあります。\n\nbeautiful, popular, difficult, interesting のように長い語は、前に **more / most** を置きます。good→better→best、many（much）→more→most は不規則に変わります。',
    },
    {
      heading: '文の形と使い分け',
      body:
        '2つを比べる文は **比較級＋than**（Tom is taller than Ken.）。3つ以上のなかで一番なら **the＋最上級＋in / of 〜**（Tom is the tallest in my class.）で、範囲が場所や集団なら in、複数の人やものなら of を使います。\n\n同じ程度は **as＋原級＋as**、同じ程度でないときは not as 〜 as「…ほど〜ではない」です。as 〜 as の間は原形のまま（as tall as）で、er はつけません。',
    },
    {
      heading: '具体例（例文・日本語訳・なぜその形か）',
      body:
        '①Tom is taller than Ken.（トムはケンより背が高い。）\n→ 2人を比べるので **taller＋than**。\n\n②Tom is the tallest in my class.（トムは私のクラスで一番背が高い。）\n→ 3人以上のなかの一番なので the tallest。クラスは範囲なので in。\n\n③This book is more interesting than that one.（この本はあの本よりおもしろい。）\n→ interesting は長い語なので **more**＋原級。interestinger とはしません。\n\n④She can run the fastest of the five.（彼女は5人の中で一番速く走れる。）\n→ 5人は複数なので of。副詞 fast の最上級でも the は省略できます。\n\n⑤I like soccer better than baseball.（私は野球よりサッカーが好きです。）\n→ like の比較は well の比較級と同じ **better**。\n\n⑥Ken is as tall as Tom.（ケンはトムと同じくらい背が高い。）\n→ 同じ程度なので as と as ではさむ。間は原級 tall です。',
    },
  ],
  testPoints: [
    '2つを比べる：**比較級＋than**。3つ以上で一番：**the＋最上級**',
    '短い語は **-er / -est**、長い語は **more / most**（big→bigger、beautiful→more beautiful）',
    '不規則：good(well)→**better**→**best**、many(much)→more→most',
    '最上級の範囲：場所・集団は **in**（in my class）、複数の人やものは **of**（of the three）',
    'よくあるまちがい：× more taller、× the most tallest（二重にしない）',
  ],
  figure: show([
    lst(
      '比べる英語には3つの形があります。ふつうの形の原級、2つを比べる比較級、3つ以上の中で一番を表す最上級です。tall なら tall（高い）→ taller（より高い）→ tallest（一番高い）と変わります。',
      [['原級：tall（背が高い）', G], ['比較級：taller（より背が高い）', BL], ['最上級：tallest（一番背が高い）', RD]],
      '原級・比較級・最上級',
      BL,
      13,
    ),
    one(
      '2つを比べるときは、比較級のあとに than（〜より）を置きます。Tom is taller than Ken. は「トムはケンより背が高い」です。than の前が比べる中心、後ろが比べる相手です。',
      [wg('Tom'), wg('is'), wr('taller'), wb('than'), wg('Ken.')],
      'トムはケンより背が高い',
      [['2人（2つ）を比べる文'], ['比較級 ＋ than ＋ 比べる相手']],
      '比較級 ＋ than',
      C.red,
    ),
    one(
      '3人以上の中で一番のときは、最上級の前に the をつけます。Tom is the tallest in my class. は「トムは私のクラスで一番背が高い」です。「一番」はクラスの中で1つしかないので、the をつけます。',
      [wg('Tom'), wg('is'), wr('the tallest'), wb('in my class.')],
      'トムは私のクラスで一番背が高い',
      [['3つ以上の中で一番'], ['the ＋ 最上級 ＋ in / of 〜']],
      'the ＋ 最上級',
      C.red,
    ),
    lst(
      '❓er / est のつけ方は、語によってどう変わるのでしょう。→ 発音しやすくなるよう、つづりを少し変えます。large は e で終わるので r / st だけ、big は子音を重ねて bigger / biggest、early は y を i にして earlier / earliest。',
      ['tall → taller → tallest', 'large → larger → largest（r, st だけ）', 'big → bigger → biggest（子音を重ねる）', 'early → earlier → earliest（y を i に）'],
      '-er / -est のつけ方',
      PU,
    ),
    one(
      '❓長い語はなぜ more / most を使うのでしょう。→ beautifulier のように er をつけると、とても発音しにくくなるからです。beautiful, popular, difficult, interesting のような長い語は、前に more / most を置いて作ります。',
      [wg('She'), wg('is'), wr('more beautiful'), wb('than'), wg('Ann.')],
      '彼女はアンより美しい',
      [['beautiful → more beautiful → most beautiful'], ['長い語は er ではなく more / most']],
      '長い語は more / most',
      C.purple,
      11,
    ),
    one(
      'もの同士を比べる文でも、長い語は more を使います。This book is more interesting than that one. は「この本はあの本よりおもしろい」です。that one の one は、book をくり返さないための代わりの語です。',
      [wg('This book'), wg('is'), wr('more interesting'), wb('than'), wg('that one.')],
      'この本はあの本よりおもしろい',
      [['interesting → more interesting'], ['one は book の代わり']],
      'more ＋ 原級 ＋ than',
      C.purple,
      10,
    ),
    two(
      '最上級のあとの範囲は、in と of を使い分けます。クラスや日本のような場所・集団には in、three や the five のような複数の人やものには of を使います。同じ最上級でも、あとに続く語で決まります。',
      [wg('He'), wg('is'), wr('the tallest'), wb('in'), wg('my class.')],
      [wg('He'), wg('is'), wr('the tallest'), wb('of'), wg('the three.')],
      '範囲が場所・集団 → in',
      '範囲が複数の人・もの → of',
      'in Japan / in my family / of all / of the five',
      'in か of かは範囲で決まる',
      C.blue,
      11,
    ),
    lst(
      'good（よい）と well（上手に）は、どちらも比較級が better、最上級が best です。many と much は、比較級が more、最上級が most です。不規則なので、まとめて覚えましょう。',
      ['good / well → better → best', 'many / much → more → most', ['bad → worse → worst', GR]],
      '不規則に変わる比較',
      RD,
      12,
    ),
    one(
      'like の比較は、well の比較級と同じ better を使い、I like soccer better than baseball. となります。like 〜 the best なら「〜が一番好き」です。どちらも「好き」の程度を比べる言い方です。',
      [wg('I'), wg('like'), wg('soccer'), wr('better'), wb('than'), wg('baseball.')],
      '私は野球よりサッカーが好きです',
      [['I like soccer the best.（サッカーが一番好き）'], ['like の比較は better / the best']],
      'like better than ＝ 〜より…が好き',
      C.red,
      11,
    ),
    one(
      '同じ程度のときは、as と as ではさみます。Ken is as tall as Tom. は「ケンはトムと同じくらい背が高い」です。まん中は原級の tall のまま。er をつけないのは、「同じ」なので比べて差がないからです。',
      [wg('Ken'), wg('is'), wb('as'), wr('tall'), wb('as'), wg('Tom.')],
      'ケンはトムと同じくらい背が高い',
      [['as ＋ 原級 ＋ as'], ['まん中は原級のまま（taller にしない）']],
      'as 〜 as ＝ 同じくらい',
      C.blue,
    ),
    one(
      '同じ程度でないときは、否定文にします。I am not as tall as Tom. は「私はトムほど背が高くない」です。「トムのほうが高い」という意味になり、I am shorter than Tom. とほぼ同じ内容です。',
      [wg('I'), wg('am'), wr('not'), wb('as tall as'), wg('Tom.')],
      '私はトムほど背が高くない',
      [['not as 〜 as ＝ …ほど〜ではない'], ['Tom のほうが高いという意味']],
      'not as 〜 as',
      C.red,
    ),
    two(
      '比べる疑問文もよく出ます。「どちらがより〜か」は Which is taller, A or B? とたずね、「だれが一番〜か」は Who is the tallest in your class? とたずねます。答えは Tom is. のように答えます。',
      [wr('Which'), wb('is'), wg('taller,'), wg('Tom or Ken?')],
      [wr('Who'), wb('is'), wg('the tallest'), wg('in your class?')],
      '2人のうち、どちらが高いか',
      'クラスで一番高いのはだれか',
      'Tom is. / Ken is. のように答える',
      '比べる疑問文',
      C.purple,
      11,
    ),
    two(
      'よくあるまちがいです。more と er を一緒に使う more taller や、the most と est を一緒に使う the most tallest は誤りです。比較を表す仕組みは er / more のどちらか1つだけを使い、二重にしません。',
      [wr('×'), wg('more taller'), wr('×'), wg('the most tallest')],
      [wb('○'), wg('taller'), wb('○'), wg('the tallest')],
      '比較を表す語が二重になっている',
      'er / est か more / most のどちらか一つ',
      '短い語は er / est、長い語は more / most',
      '比較は二重にしない',
      C.red,
      11,
    ),
    lst(
      'まとめです。2つを比べるなら比較級＋than、3つ以上で一番ならthe＋最上級＋in / of、同じ程度ならas〜as、同じでないならnot as〜as。語が短いか長いかで、er / est と more / most を使い分けます。',
      ['2つを比べる：taller than 〜', '一番：the tallest in / of 〜', '同じくらい：as tall as 〜', ['不規則：good → better → best', RD]],
      '比較の形のまとめ',
      GR,
      12,
    ),
  ], '比較'),
  checks: [
    { q: '（　）の語を適切な形にしなさい。Tom is（　）than Ken.（tall）', a: 'taller', why: 'than があるので2つを比べる文。tall は短い語なので語尾に er をつけて比較級 taller にします。' },
    { q: '（　）に入る語を答えなさい。This is the（　）book of the three.（interesting）', a: 'most interesting', why: '「3つのうちで一番」なので最上級。interesting は長い語なので most を前に置きます。the interestingest とは言いません。' },
    { q: '「ケンはトムと同じくらい背が高い」を英語にしなさい。', a: 'Ken is as tall as Tom.', why: '同じ程度は as 〜 as。まん中の tall は原級のままで、er をつけません。' },
    { q: '（　）に入る語を答えなさい。I like soccer（　）than baseball.', a: 'better', why: 'like の比較級は well の比較級と同じ better。「〜より…が好き」は like 〜 better than … で表します。' },
  ],
};


export const TEIKI_J2_EIGO: TeikiUnit[] = [unit, unit2, unit3];
