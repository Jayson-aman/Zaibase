// 中1 英語（定期テスト向け・教科書の延長）。英文は半角、説明は日本語。
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

export const TEIKI_J1_EIGO: TeikiUnit[] = [unit];
