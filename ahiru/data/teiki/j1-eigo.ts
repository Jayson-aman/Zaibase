// 中1 英語（定期テスト向け・教科書の延長）。英文は半角、説明は日本語。
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
  id: 'j1-eigo-01',
  grade: 'j1',
  subject: 'eigo',
  chapter: 'be動詞と一般動詞',
  title: 'be動詞と一般動詞の使い分け',
  gist: '英語の文には動詞が必ず1つ必要です。「AはBだ」と状態を言うときは**be動詞（am / is / are）**、「Aは〜する」と動作を言うときは**一般動詞（play, like など）**を使います。',
  sections: [
    {
      heading: '2種類の動詞のちがい',
      body:
        '英語は「だれが＋どうする（どうだ）」の順に言います。このとき、「私は生徒です」のように**主語＝何か**を言いたいときは be動詞、「私はテニスをします」のように**動作**を言いたいときは一般動詞を使います。\n\nbe動詞は「＝（イコール）」のはたらきをする動詞です。I am a student. は「私＝生徒」だと言っています。',
    },
    {
      heading: 'be動詞の文（肯定・否定・疑問）',
      body:
        'be動詞は主語によって形が決まります。**I は am、he / she / it や1人の人（Tom など）は is、you と2人以上（we, they）は are** です。\n\n否定文は be動詞のあとに not を置き（She is not a teacher.）、疑問文は主語と be動詞を入れかえます（Is she a teacher?）。答えるときも be動詞を使い、Yes, she is. / No, she is not. となります。',
    },
    {
      heading: '一般動詞の文（3単現の s と do / does）',
      body:
        '一般動詞は、主語が I, you, we, they なら**そのままの形（原形）**です。主語が he, she, it, Tom など1人（1つ）のときだけ、動詞に s（es）をつけます。これを**3人称単数現在**、略して3単現といいます。\n\n否定文・疑問文では do / does という助けの動詞を使います。**does は s の役目を引き受けるので、あとの動詞は原形**にもどします（He does not play tennis. / Does he play tennis?）。',
    },
    {
      heading: '具体例（例文・日本語訳・なぜその形か）',
      body:
        '①I am a student.（私は生徒です。）\n→ 主語が I なので be動詞は am。「私＝生徒」を表します。\n\n②Tom is my friend.（トムは私の友だちです。）\n→ Tom は1人の人（3人称単数）なので is。\n\n③They are in the park.（彼らは公園にいます。）\n→ they は2人以上なので are。be動詞は「いる」という意味にもなります。\n\n④She likes dogs.（彼女は犬が好きです。）\n→ like は一般動詞。主語 she は3単現なので **likes** と s がつきます。\n\n⑤Do you play soccer?（あなたはサッカーをしますか。）\n→ 一般動詞の疑問文は文のはじめに Do。you のときは Do で、動詞 play は原形です。\n\n⑥He does not study English.（彼は英語を勉強しません。）\n→ 否定は does not＋原形。s は does が引き受けるので study は **原形のまま**です。',
    },
  ],
  testPoints: [
    '主語と be動詞の組：**I は am、you / we / they は are、he / she / it は is**',
    'be動詞の否定は be のあとに **not**、疑問は **主語と be を入れかえる**',
    '一般動詞は主語が **he / she / it（3人称単数）** のとき s・es をつける（go→goes, study→studies, have→has）',
    '否定・疑問の **does のあとは原形**。× He does not plays tennis. はよくあるまちがい',
    '**be動詞と一般動詞を1つの文に並べない**（× I am play tennis.）',
  ],
  figure: show([
    {
      note: '英語の動詞は大きく2種類に分かれます。「AはBだ」と状態を言う be動詞（am, is, are）と、「Aは〜する」と動作を言う 一般動詞（play, like, study など）です。まずはこの2つを区別することが出発点です。',
      add: fresh(
        bx(15, 24, 140, 60, 'be動詞\nam / is / are', C.blue, FILL.blue, 13),
        bx(165, 24, 140, 60, '一般動詞\nplay / like / study', C.green, FILL.green, 12),
        lb(85, 108, '＝ の関係・状態', 12, C.blue, 'middle', true),
        lb(235, 108, '動作を表す', 12, C.green, 'middle', true),
        ...cap('be動詞は状態、一般動詞は動作'),
      ),
    },
    (() => {
      const r1 = row(22, [{ t: 'I', ...G }, { t: 'am', ...BL }, { t: 'a student.', ...G }]);
      const r2 = row(84, [{ t: 'I', ...G }, { t: 'play', ...GR }, { t: 'tennis.', ...G }]);
      return {
        note: '❓なぜ2種類も必要なのでしょう。→ 言いたいことが2通りあるからです。「私＝生徒」と言いたいなら be動詞の am、「私はテニスをする」と動作を言いたいなら一般動詞の play。どちらの文にも、動詞は必ず1つ入ります。',
        add: fresh(...r1.els, lb(160, 70, '「私＝生徒」だと言っている', 12, C.blue, 'middle'), ...r2.els, lb(160, 132, '「テニスをする」という動作', 12, C.green, 'middle'), ...cap('文には動詞が必ず1つ入る')),
      };
    })(),
    (() => {
      const mk = (y: number, a: string, b: string, k: typeof BL) => [bx(20, y, 150, 26, a, C.ink, FILL.gray, 12), ar(176, y + 13, 206, y + 13, k.c), bx(210, y, 80, 26, b, k.c, k.f, 13)];
      return {
        note: '❓be動詞はなぜ3つあるのでしょう。→ be動詞は主語に合わせて形を変えるからです。I のときだけ am、you と2人以上（we, they）は are、1人の人やもの（he, she, it, Tom）は is を使います。',
        add: fresh(...mk(12, 'I', 'am', BL), ...mk(42, 'He / She / It / Tom', 'is', BL), ...mk(72, 'You / We / They', 'are', BL), ...mk(102, 'Tom and Ken（2人）', 'are', BL), ...cap('主語で am / is / are が決まる', C.blue)),
      };
    })(),
    (() => {
      const r1 = row(18, [{ t: 'I', ...G }, { t: 'am', ...BL }, { t: 'a student.', ...G }]);
      const r2 = row(78, [{ t: 'She', ...G }, { t: 'is', ...BL }, { t: 'a teacher.', ...G }]);
      return {
        note: 'be動詞の文は「主語＝あとの語」を表します。I am a student. は「私＝生徒」、She is a teacher. は「彼女＝先生」です。be動詞が主語とあとの語を、イコールでつなぐ役をしています。',
        add: fresh(...r1.els, lb(160, 64, '私 ＝ 生徒', 12, C.blue, 'middle', true), ...r2.els, lb(160, 124, '彼女 ＝ 先生', 12, C.blue, 'middle', true), ...cap('be動詞は「＝」でつなぐ', C.blue)),
      };
    })(),
    (() => {
      const r1 = row(18, [{ t: 'She', ...G }, { t: 'is', ...BL }, { t: 'not', ...RD }, { t: 'a teacher.', ...G }]);
      const r2 = row(78, [{ t: 'You', ...G }, { t: 'are', ...BL }, { t: 'not', ...RD }, { t: 'a student.', ...G }]);
      return {
        note: '❓否定文はどう作るのでしょう。→ be動詞のすぐあとに not を置くだけです。動詞はそのまま1つで、「〜ではない」の意味になります。is not は isn\'t、are not は aren\'t と短くできます。',
        add: fresh(...r1.els, lb(160, 64, '「彼女は先生ではない」', 12, C.red, 'middle'), ...r2.els, lb(160, 124, "is not = isn't　are not = aren't", 12, C.gray, 'middle'), ...cap('be動詞のすぐあとに not', C.red)),
      };
    })(),
    (() => {
      const r1 = row(14, [{ t: 'You', ...G }, { t: 'are', ...BL }, { t: 'a student.', ...G }]);
      const r2 = row(62, [{ t: 'Are', ...RD }, { t: 'you', ...G }, { t: 'a student?', ...G }]);
      return {
        note: '❓疑問文はどう作るのでしょう。→ 主語と be動詞の順番を入れかえ、文の最後を「?」にします。You are 〜. が Are you 〜? になります。答えにも be動詞を使い、Yes, I am. / No, I am not. と言います。',
        add: fresh(...r1.els, ar(160, 44, 160, 58, C.red), ...r2.els, lb(160, 108, '主語と be動詞を入れかえる', 12, C.red, 'middle', true), lb(160, 130, 'Yes, I am. / No, I am not.', 12, C.ink, 'middle'), ...cap('疑問文は be動詞が文のはじめ', C.red)),
      };
    })(),
    (() => {
      const r1 = row(12, [{ t: 'I', ...G }, { t: 'play', ...GR }, { t: 'tennis.', ...G }]);
      const r2 = row(66, [{ t: 'He', ...G }, { t: 'plays', ...GR }, { t: 'tennis.', ...G }]);
      return {
        note: '一般動詞は、主語が I, you, we, they なら原形のまま。主語が he, she, it, Tom など1人（1つ）のときだけ、動詞に s をつけます。これが3人称単数現在、略して3単現のルールです。go は goes、study は studies、have は has になります。',
        add: fresh(...r1.els, lb(160, 56, 'I / you / we / they は 原形のまま', 11, C.green, 'middle'), ...r2.els, lb(160, 110, 'he / she / it / Tom は s・es をつける', 11, C.red, 'middle', true), lb(160, 132, 'go→goes　study→studies　have→has', 11, C.gray, 'middle'), ...cap('he / she / it のとき動詞に s', C.green)),
      };
    })(),
    (() => {
      const r1 = row(12, [{ t: 'I', ...G }, { t: 'do not', ...RD }, { t: 'play', ...GR }, { t: 'tennis.', ...G }]);
      const r2 = row(66, [{ t: 'He', ...G }, { t: 'does not', ...RD }, { t: 'play', ...GR }, { t: 'tennis.', ...G }]);
      return {
        note: '❓一般動詞の否定文はどう作るのでしょう。→ 動詞の前に do not（主語が3単現なら does not）を置きます。このとき s は does が引き受けるので、あとの動詞は plays ではなく原形の playにもどします。',
        add: fresh(...r1.els, lb(160, 56, "do not = don't", 12, C.gray, 'middle'), ...r2.els, lb(160, 110, '3単現の s は does に移る', 12, C.red, 'middle', true), lb(160, 132, 'does not = doesn\'t　動詞は原形', 11, C.gray, 'middle'), ...cap('否定文は do not / does not', C.red)),
      };
    })(),
    (() => {
      const r1 = row(12, [{ t: 'Do', ...RD }, { t: 'you', ...G }, { t: 'play', ...GR }, { t: 'tennis?', ...G }]);
      const r2 = row(66, [{ t: 'Does', ...RD }, { t: 'he', ...G }, { t: 'play', ...GR }, { t: 'tennis?', ...G }]);
      return {
        note: '一般動詞の疑問文は、文のはじめに Do（主語が3単現なら Does）を置き、動詞は原形にします。答えも do / does で言います。Yes, I do. / No, I do not. / Yes, he does. / No, he does not. です。',
        add: fresh(...r1.els, lb(160, 56, 'Yes, I do. / No, I do not.', 12, C.ink, 'middle'), ...r2.els, lb(160, 110, 'Yes, he does. / No, he does not.', 12, C.ink, 'middle'), lb(160, 132, 'Does のあとも動詞は原形', 12, C.red, 'middle', true), ...cap('疑問文は Do / Does が文のはじめ', C.red)),
      };
    })(),
    three(
      'be動詞の文の作り替えを、1つの文でまとめて見ます。肯定文はそのまま、否定文は be動詞のあとに not、疑問文は be動詞を主語の前に出して最後を「?」にします。動詞を足したり変えたりはしません。',
      [wg('Tom'), wb('is'), wg('a student.')],
      [wg('Tom'), wb('is'), wr('not'), wg('a student.')],
      [wr('Is'), wg('Tom'), wg('a student?')],
      'ふつうの文 → not を足す → be を前に出す',
      'be動詞：肯定→否定→疑問',
      C.blue,
    ),
    three(
      '一般動詞の文の作り替えです。肯定文 She likes music. を否定文にするには、does not を動詞の前に置き、likes を原形の like にもどします。疑問文は Does を文のはじめに出し、動詞は同じく原形です。',
      [wg('She'), wn('likes'), wg('music.')],
      [wg('She'), wr('does not'), wn('like'), wg('music.')],
      [wr('Does'), wg('she'), wn('like'), wg('music?')],
      'does が s の役目を引き受けるので likes → like',
      '一般動詞：肯定→否定→疑問',
      C.green,
    ),
    {
      note: 'まとめです。動作を表す語（play, like など）があるなら一般動詞の文、「＝」の関係を言うならbe動詞の文です。be動詞と一般動詞を1つの文に並べると、動詞が2つになってしまうので、× I am play tennis. はまちがいです。',
      add: fresh(
        bx(20, 12, 280, 28, '×  I am play tennis.', C.red, FILL.red, 13),
        lb(160, 62, 'be動詞と一般動詞は1つの文に並べない', 12, C.red, 'middle', true),
        bx(12, 78, 144, 46, '動作を表す語がある\n→ 一般動詞（do / does）', C.green, FILL.green, 11),
        bx(164, 78, 144, 46, '「＝」の関係を言う\n→ be動詞（am/is/are）', C.blue, FILL.blue, 11),
        ...cap('動作ならば一般動詞、＝ならば be動詞'),
      ),
    },
  ], 'be動詞と一般動詞の使い分け'),
  checks: [
    { q: '（　）に入る語を選びなさい。Ken（　）a student.（am / is / are）', a: 'is', why: 'Ken は1人の人（3人称単数）なので be動詞は is。I のときだけ am、you と2人以上のときは are です。' },
    { q: '（　）に入る語を選びなさい。She（　）tennis every day.（play / plays）', a: 'plays', why: 'tennis を「する」という動作なので一般動詞。主語 She は3人称単数で現在の文なので、動詞に s をつけて plays にします。' },
    { q: 'He plays the guitar. を否定文に書きかえなさい。', a: 'He does not play the guitar.', why: '否定文は動詞の前に does not を置きます。s は does が引き受けるので、plays は原形の play にもどします。' },
    { q: 'You are a teacher. を疑問文に書きかえなさい。', a: 'Are you a teacher?', why: 'be動詞の疑問文は、主語 You と be動詞 are を入れかえて、文の最後を「?」にします。do は使いません。' },
  ],
};

const unit2: TeikiUnit = {
  id: 'j1-eigo-02',
  grade: 'j1',
  subject: 'eigo',
  chapter: '名詞',
  title: '名詞の複数形と a / an',
  gist: '数えられる名詞は、1つなら **a / an**、2つ以上なら語の終わりに **s や es** をつけた複数形にします。つけ方には決まりがあり、少数の名詞だけ形が不規則に変わります。',
  sections: [
    {
      heading: '1つのとき：a と an',
      body:
        '数えられる名詞が1つのときは、名詞の前に **a か an** を置きます。決め手は**つづりではなく、次の語のはじめの音**です。ア・イ・ウ・エ・オに近い音で始まるときは an、それ以外は a を使います。\n\nan apple, an egg, an orange のほか、hour は h を読まず「アワー」で始まるので an hour になります。2つ以上のときは a / an をつけません。',
    },
    {
      heading: '2つ以上のとき：複数形のつくり方',
      body:
        'ふつうは語のおわりに **s** をつけます（book→books）。s, x, ch, sh で終わる語は **es**（bus→buses, box→boxes, watch→watches, dish→dishes）。\n\n「子音字＋y」は y を i にして **ies**（city→cities, baby→babies）。母音字＋y はそのまま s（boy→boys）。f / fe は **ves**（knife→knives, leaf→leaves）。man→men, woman→women, child→children, foot→feet は不規則に変わり、fish や sheep は形が変わりません。',
    },
    {
      heading: '具体例（例文・日本語訳・なぜその形か）',
      body:
        '①I have a book.（私は本を1冊持っています。）\n→ book は子音の音で始まるので a。\n\n②She eats an apple.（彼女はリンゴを1個食べます。）\n→ apple は「ア」の音で始まるので **an**。\n\n③There are two boxes on the table.（テーブルの上に箱が2つあります。）\n→ box は x で終わるので **es**。2つ以上なので are です。\n\n④I know three babies.（私は赤ちゃんを3人知っています。）\n→ baby は「子音字＋y」なので y を i にして ies。\n\n⑤Four children are in the room.（4人の子どもが部屋にいます。）\n→ child の複数形は不規則で **children**。childs とは書きません。\n\n⑥How many pens do you have?（ペンを何本持っていますか。）\n→ 数をたずねるので、many のあとの名詞は複数形 pens にします。',
    },
  ],
  testPoints: [
    'a / an は**つづりではなく音**で決める（an hour, a university）',
    's, x, ch, sh で終わる語は **es**、「子音字＋y」は **ies**',
    '不規則：man→men, woman→women, **child→children**, foot→feet。fish, sheep は同じ形',
    '複数のときは a / an をつけない。数えるときは **How many＋複数形**',
    'よくあるまちがい：× two book、× a books、× childs',
  ],
  figure: show([
    lst(
      '英語の名詞は、数えられるものと数えられないものに分かれます。book や dog や apple は1つ、2つと数えられるので、1つか2つ以上かを必ず形で区別します。water や music は数えられないので、形を変えません。',
      [['数えられる名詞：book, dog, apple', BL], ['数えられない名詞：water, music', G], ['数えられる名詞は「1つか、2つ以上か」を区別', RD]],
      '数えられる名詞は数で形が変わる',
      BL,
    ),
    two(
      '1つのときは名詞の前に a を置きます。a book（1冊の本）、a dog（1ぴきの犬）のように、book や dog は子音の音で始まる語です。a は「1つの」という意味で、あとの語を数える合図になります。',
      [wb('a'), wg('book')],
      [wb('a'), wg('dog')],
      '1冊の本',
      '1ぴきの犬',
      '子音の音で始まる語の前は a',
      'ふつうは a',
      C.blue,
    ),
    two(
      '❓なぜ an という形があるのでしょう。→ a のあとに apple のようなア・イ・ウ・エ・オの音が続くと、a apple では発音しにくいからです。そこで間に n を入れた an を使います。an apple、an egg のようになります。',
      [wr('an'), wg('apple')],
      [wr('an'), wg('egg')],
      '1個のリンゴ',
      '1個のたまご',
      'ア・イ・ウ・エ・オの音で始まる語の前は an',
      '母音の音の前は an',
      C.red,
    ),
    two(
      'an を使うかどうかは、つづりではなく音で決めます。orange は o で始まり「オ」の音なので an orange。hour は h で始まりますが h を読まず「アワー」と始まるので an hour です。',
      [wr('an'), wg('orange')],
      [wr('an'), wg('hour')],
      '1個のオレンジ',
      '1時間（h を読まない）',
      'つづりの文字ではなく、はじめの音で決める',
      '決め手は最初の音',
      C.red,
    ),
    two(
      '2つ以上のときは、名詞のおわりに s をつけて複数形にします。two books、three dogs のように、数を表す語のあとの名詞は複数形です。このとき a / an は使いません。',
      [wg('two'), wb('books')],
      [wg('three'), wb('dogs')],
      '2冊の本',
      '3びきの犬',
      'ふつうは語のおわりに s をつける',
      '2つ以上は s',
      C.blue,
    ),
    lst(
      '❓なぜ es をつけるのでしょう。→ bus に s だけをつけても発音しにくいからです。s, x, ch, sh で終わる語は es をつけて、bus→buses、box→boxes、watch→watches、dish→dishes のようにします。',
      ['bus  →  buses', 'box  →  boxes', 'watch  →  watches', 'dish  →  dishes'],
      's, x, ch, sh で終わる語は es',
      RD,
      12,
    ),
    lst(
      '「子音字＋y」で終わる語は、y を i にかえて es をつけます。city→cities、baby→babies です。ただし boy や day のように「母音字（a, i, u, e, o）＋y」の語は、そのまま s をつけて boys、days となります。',
      ['city  →  cities（y を i にして es）', 'baby  →  babies（y を i にして es）', ['boy  →  boys（母音字＋y は s だけ）', GR], ['day  →  days（母音字＋y は s だけ）', GR]],
      '子音字＋y は ies、母音字＋y は s',
      PU,
    ),
    lst(
      'f や fe で終わる語の多くは、f（fe）を v にかえて es をつけます。knife→knives、leaf→leaves です。また tomato→tomatoes、potato→potatoes のように o で終わる一部の語は es、piano→pianos、photo→photos は s だけです。',
      ['knife  →  knives', 'leaf  →  leaves', 'tomato  →  tomatoes', ['piano  →  pianos（s だけ）', GR]],
      'f / fe は ves、o は語によって es',
      BL,
      12,
    ),
    lst(
      '少数ですが、形が不規則に変わる複数形があります。男の人 man は men、女の人 woman は women、子ども child は children、足 foot は feet です。これは1つずつ覚えるしかありません。',
      ['man  →  men', 'woman  →  women', 'child  →  children', 'foot  →  feet'],
      '不規則に変わる複数形',
      RD,
      12,
    ),
    lst(
      '単数と複数で形がまったく変わらない名詞もあります。fish は1ぴきでも2ひきでも fish、sheep も同じです。Japanese も形が変わりません。two fish のように、数を表す語や文の意味から複数だと判断します。',
      ['fish  →  fish（one fish / two fish）', 'sheep  →  sheep（one sheep / two sheep）', 'Japanese  →  Japanese'],
      '形が変わらない複数形',
      GR,
      12,
    ),
    one(
      '❓数をたずねるにはどうするのでしょう。→ How many のあとに名詞の複数形を置き、疑問文の形を続けます。数を聞くので「いくつもある」前提となり、複数形 pens を使います。答えは I have five pens. のように数を言います。',
      [wr('How many'), wb('pens'), wg('do you have?')],
      'ペンを何本持っていますか',
      [['I have five pens.（5本持っています）', C.ink], ['How many のあとの名詞は複数形']],
      'How many ＋ 複数形 ＋ 疑問文',
      C.red,
      11,
    ),
    two(
      '数えられる名詞の「ある」を表す There is / There are では、あとの名詞が1つなら is、2つ以上なら are を使います。There is a book on the desk. と There are two books on the desk. を比べてみましょう。',
      [wg('There'), wb('is'), wg('a book'), wg('on the desk.')],
      [wg('There'), wr('are'), wg('two books'), wg('on the desk.')],
      '机の上に本が1冊あります',
      '机の上に本が2冊あります',
      '名詞が1つなら is、2つ以上なら are',
      'あとの名詞に be動詞を合わせる',
      C.ink,
      11,
    ),
    two(
      'よくあるまちがいです。two book のように、数が2つ以上なのに名詞が単数のままではいけません。また a books のように、a と複数形を一緒に使うこともできません。a は「1つの」、複数形は「2つ以上」で意味がぶつかるからです。',
      [wr('×'), wg('two book'), wr('×'), wg('a books')],
      [wb('○'), wg('two books'), wb('○'), wg('a book')],
      '数と名詞の形が合っていない',
      '数と名詞の形がそろっている',
      '数が2つ以上なら複数形、1つなら a / an',
      '数と形をそろえる',
      C.red,
    ),
    lst(
      'まとめです。ふつうは s。s, x, ch, sh は es。子音字＋y は ies。f / fe は ves。不規則は覚える。これらのうち、どれにあてはまるかを語のおわりの文字で判断します。1つのときは a / an を忘れずにつけましょう。',
      ['ふつう：book→books', 's, x, ch, sh：box→boxes', '子音字＋y：city→cities', 'f / fe：leaf→leaves', ['不規則：child→children', RD]],
      '語のおわりを見て複数形を作る',
      BL,
    ),
  ], '名詞の複数形と a / an'),
  checks: [
    { q: '（　）に a か an を入れなさい。（　）egg', a: 'an', why: 'egg は「エ」の音で始まるので an を使います。つづりではなく、はじめの音がア・イ・ウ・エ・オに近いかで決めます。' },
    { q: 'city の複数形を答えなさい。', a: 'cities', why: 'city は「子音字(t)＋y」で終わるので、y を i にかえて es をつけます。母音字＋y なら s だけです。' },
    { q: 'watch の複数形を答えなさい。', a: 'watches', why: 'watch は ch で終わるので es をつけます。s だけだと発音しにくいため、es を足して発音しやすくしています。' },
    { q: '「4人の子どもたち」を英語で書きなさい。', a: 'four children', why: 'child の複数形は不規則で children。数を表す four があるので複数形を使い、a / an はつけません。' },
  ],
};

const unit3: TeikiUnit = {
  id: 'j1-eigo-03',
  grade: 'j1',
  subject: 'eigo',
  chapter: '疑問詞',
  title: '疑問詞（What / Where / Who / When / Why / How）',
  gist: '「何」「どこ」「だれ」などをたずねるときは、**疑問詞を文のはじめ**に置き、そのあとに疑問文の語順を続けます。答えは Yes / No ではなく、たずねられた内容を言います。',
  sections: [
    {
      heading: '疑問詞の意味と作り方',
      body:
        'What（何）、Where（どこ）、Who（だれ）、When（いつ）、Why（なぜ）、How（どう、どのように）が疑問詞です。\n\n作り方は、まず Yes / No でたずねる疑問文を考え、**聞きたい部分を疑問詞にして文のはじめに出す**だけです。Do you like cats? なら、「何が好きか」を聞きたいので What do you like? になります。',
    },
    {
      heading: '答え方と語順',
      body:
        '疑問詞の疑問文には **Yes / No で答えません**。What is this? には It is a pen.、Where do you live? には I live in Osaka. のように、聞かれた内容を文で答えます。\n\n疑問詞のあとの語順は ふつうの疑問文と同じです。be動詞なら What **is** this?、一般動詞なら What **do** you eat?（主語が3単現なら does）となります。',
    },
    {
      heading: '具体例（例文・日本語訳・なぜその形か）',
      body:
        '①What is this?（これは何ですか。）— It is a pen.（それはペンです。）\n→ be動詞の疑問文なので What のあとに is＋主語。\n\n②What do you eat for breakfast?（朝食に何を食べますか。）— I eat bread.（パンを食べます。）\n→ 一般動詞なので do you eat。eat のあとに目的語 bread が入る分、疑問詞が出ています。\n\n③Where do you live?（あなたはどこに住んでいますか。）— I live in Osaka.\n→ 場所をたずねるので Where。\n\n④Who is that boy?（あの男の子はだれですか。）— He is my brother.\n→ 人をたずねるので Who。\n\n⑤Why do you like English?（なぜ英語が好きですか。）— Because it is fun.\n→ 理由をたずねるので Why、答えは **Because** で始めます。\n\n⑥How do you go to school?（どうやって学校へ行きますか。）— I go by bike.\n→ 方法をたずねるので How。',
    },
  ],
  testPoints: [
    '疑問詞は**文のはじめ**に置き、そのあとは疑問文の語順（is / do / does）',
    '意味：What 何／Where どこ／Who だれ／When いつ／Why なぜ／How どう',
    '疑問詞の疑問文には **Yes / No で答えない**',
    'Why の答えは **Because 〜.**（〜だから）で始める',
    'よくあるまちがい：× What you like?（do が抜けている）',
  ],
  figure: show([
    lst(
      '疑問詞は、知りたいことの種類を表す言葉です。What は「何」、Where は「どこ」、Who は「だれ」。この3つは物・場所・人をたずねるときに使います。まず意味を結びつけて覚えましょう。',
      [['What：何（もの）', BL], ['Where：どこ（場所）', GR], ['Who：だれ（人）', RD]],
      '物・場所・人をたずねる',
      BL,
      13,
    ),
    lst(
      '残りの3つです。When は「いつ」と時をたずね、Why は「なぜ」と理由をたずね、How は「どう」「どのように」と方法や様子をたずねます。6つの疑問詞はすべて wh〜 か how で始まります。',
      [['When：いつ（時）', BL], ['Why：なぜ（理由）', GR], ['How：どう・どのように（方法・様子）', RD]],
      '時・理由・方法をたずねる',
      BL,
      13,
    ),
    two(
      '❓疑問詞の疑問文は、どう作るのでしょう。→ もとの Do you like cats?（猫が好きですか）で、知りたい部分「何」を What にして文のはじめに出します。cats は聞きたい部分なので消え、What do you like? になります。',
      [wg('Do'), wg('you'), wg('like'), wg('cats?')],
      [wr('What'), wg('do'), wg('you'), wg('like?')],
      'Yes / No でたずねる文',
      '聞きたい部分を疑問詞にして文のはじめへ',
      'あとは ふつうの疑問文の語順',
      '疑問詞を文のはじめに',
      C.red,
    ),
    one(
      'What is this? は「これは何ですか」です。this（これ）が主語で be動詞の is が使われているので、What のあとに is this と be動詞の疑問文の語順を続けます。答えは It is a pen. のように It で受けて言います。',
      [wr('What'), wb('is'), wg('this?')],
      'これは何ですか',
      [['It is a pen.（それはペンです）', C.ink], ['答えは Yes / No ではなく内容を言う']],
      'What ＋ be動詞 ＋ 主語',
      C.red,
    ),
    one(
      'What do you eat for breakfast? は「朝食に何を食べますか」です。eat は一般動詞なので、疑問文の形 do you eat を What のあとに続けます。答えは I eat bread. のように、聞かれた「何を」の部分に当たる語を入れます。',
      [wr('What'), wb('do'), wg('you'), wg('eat'), wg('for breakfast?')],
      '朝食に何を食べますか',
      [['I eat bread.（パンを食べます）', C.ink], ['主語が he / she なら does を使う']],
      'What ＋ do / does ＋ 主語 ＋ 動詞',
      C.red,
      11,
    ),
    one(
      'What time is it? は「何時ですか」で、時刻をたずねる決まった言い方です。What time の2語で「何時」という意味になります。答えは It is ten o\'clock.（10時です）のように、It を主語にして言います。',
      [wr('What time'), wb('is'), wg('it?')],
      '何時ですか',
      [["It is ten o'clock.（10時です）", C.ink], ['What time で「何時」のかたまり']],
      'What time is it?',
      C.red,
    ),
    one(
      'Where is my bag? は「私のかばんはどこにありますか」です。物がある場所をたずねるので Where、be動詞が使われているので Where is の形になります。答えは It is on the desk.（机の上です）のように場所を言います。',
      [wr('Where'), wb('is'), wg('my bag?')],
      '私のかばんはどこにありますか',
      [['It is on the desk.（机の上です）', C.ink], ['場所を答える（on / in / under など）']],
      'Where ＋ be動詞 ＋ 主語',
      C.green,
    ),
    one(
      'Where do you live? は「あなたはどこに住んでいますか」です。live は一般動詞なので Where のあとに do you live を続けます。答えは I live in Osaka. のように、in ＋ 場所で答えます。',
      [wr('Where'), wb('do'), wg('you'), wg('live?')],
      'あなたはどこに住んでいますか',
      [['I live in Osaka.（大阪に住んでいます）', C.ink], ['主語が she なら Where does she live?']],
      'Where ＋ do / does ＋ 主語 ＋ 動詞',
      C.green,
    ),
    one(
      'Who is that boy? は「あの男の子はだれですか」です。人をたずねるので Who を使い、be動詞の is が続きます。答えは He is my brother. のように、人を表す代名詞（he / she）で受けて答えます。',
      [wr('Who'), wb('is'), wg('that boy?')],
      'あの男の子はだれですか',
      [['He is my brother.（私の兄です）', C.ink], ['男の子は he、女の子は she で受ける']],
      'Who ＋ be動詞 ＋ 主語',
      C.red,
    ),
    one(
      'When do you get up? は「あなたはいつ起きますか」です。時をたずねるので When、一般動詞 get up があるので do you get up を続けます。答えは I get up at six.（6時に起きます）のように時を言います。',
      [wr('When'), wb('do'), wg('you'), wg('get up?')],
      'あなたはいつ起きますか',
      [['I get up at six.（6時に起きます）', C.ink], ['時刻には at、曜日には on を使う']],
      'When ＋ do / does ＋ 主語 ＋ 動詞',
      C.blue,
    ),
    one(
      '❓Why の答えはなぜ Because で始めるのでしょう。→ Why は理由をたずねるので、答えは「〜だから」と理由を言う文になるからです。Because は「なぜなら」の意味で、Because it is fun.（楽しいから）のように続けます。',
      [wr('Why'), wb('do'), wg('you'), wg('like'), wg('English?')],
      'なぜ英語が好きですか',
      [['Because it is fun.（楽しいからです）', C.ink], ['理由は Because ＋ 文 で答える']],
      'Why → Because 〜',
      C.purple,
      11,
    ),
    one(
      'How do you go to school? は「あなたはどうやって学校へ行きますか」です。方法をたずねるので How を使います。答えは I go by bike.（自転車で行きます）のように、by ＋ 乗りもので手段を言います。',
      [wr('How'), wb('do'), wg('you'), wg('go'), wg('to school?')],
      'どうやって学校へ行きますか',
      [['I go by bike.（自転車で行きます）', C.ink], ['by ＋ 乗りもの（by bus, by train）']],
      'How ＋ do / does ＋ 主語 ＋ 動詞',
      C.green,
      11,
    ),
    one(
      'How are you? は「お元気ですか」と様子をたずねる決まった言い方です。この How は「どんなようすか」を聞いています。答えは I am fine, thank you.（元気です、ありがとう）のようにします。',
      [wr('How'), wb('are'), wg('you?')],
      'お元気ですか',
      [['I am fine, thank you.（元気です）', C.ink], ['様子をたずねる How']],
      'How ＋ be動詞 ＋ 主語',
      C.green,
    ),
    two(
      'Yes / No で答える疑問文と、疑問詞の疑問文では、答え方がちがいます。Is this a pen? には Yes, it is. と答えますが、What is this? には内容そのものを答えます。疑問詞の疑問文に Yes / No は使いません。',
      [wg('Is'), wg('this'), wg('a pen?')],
      [wr('What'), wb('is'), wg('this?')],
      'Yes, it is. / No, it is not.',
      'It is a pen. （内容を答える）',
      '疑問詞がある文には Yes / No で答えない',
      '疑問詞の文は内容で答える',
      C.red,
    ),
    lst(
      'まとめです。疑問詞は文のはじめに置く。そのあとは be動詞か do / does の疑問文の語順にする。答えは Yes / No ではなく、たずねられた内容を言う。この3つを守れば、どの疑問詞でも同じ作り方でできます。',
      ['①疑問詞を文のはじめに置く', '②あとは be動詞 / do / does の疑問文の語順', ['③Yes / No ではなく内容を答える', RD], ['④Why には Because で答える', PU]],
      '疑問詞の疑問文の作り方',
      BL,
      12,
    ),
  ], '疑問詞の疑問文'),
  checks: [
    { q: '（　）に入る語を答えなさい。（　）is that girl?  — She is my sister.', a: 'Who', why: '答えが人（my sister）なので「だれ」をたずねる Who。物なら What、場所なら Where です。' },
    { q: 'You live in Osaka. の Osaka をたずねる疑問文を書きなさい。', a: 'Where do you live?', why: '場所をたずねるので Where。あとに一般動詞の疑問文の形 do you live を続けます。' },
    { q: 'Why do you like English? に英語で答えなさい（楽しいから）。', a: 'Because it is fun.', why: 'Why の答えは理由なので Because で始めます。Yes / No では答えません。' },
    { q: '× What you eat? を正しい文に直しなさい。', a: 'What do you eat?', why: '疑問詞のあとは疑問文の語順です。一般動詞の疑問文なので do が必要で、do you eat となります。' },
  ],
};


export const TEIKI_J1_EIGO: TeikiUnit[] = [unit, unit2, unit3];
