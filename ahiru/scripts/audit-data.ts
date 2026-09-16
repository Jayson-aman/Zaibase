// ahiru データ監査（実行時）
//
// 正規表現でソースを読むのではなく、実際にデータ層を読みこんで検査する。
// index への結線漏れや、spread の順番ちがいなど「ファイルは正しいのに
// アプリには出ていない」たぐいの失敗は、これでないと見つからない。
//
// 実行: npm run audit （scripts/audit.sh 経由）
//
// 終了コード: 問題が1件でもあれば 1。CIやコミット前チェックに使える。

import { allLessons, getLessonsBySubject } from '../data/lessons';
import { FORMULAS, SUBJECTS } from '../data/formulas';
import { getLessonFigure } from '../data/lesson-figures';
import { getMangaScript } from '../data/manga-scripts';
import { questions } from '../data/questions';
import { explanationText } from '../utils/explanation';
import { quickTricks } from '../data/quick-tricks';
import { figures as FIGS } from '../data/figures';
import { autoSteps } from '../data/auto-steps';

type Lesson = (typeof allLessons)[number] & Record<string, any>;
const L = allLessons as Lesson[];

let problems = 0;
function check(label: string, bad: unknown[], sample = 6) {
  const n = bad.length;
  if (n) problems += n;
  const mark = n ? '⚠' : '✓';
  const tail = n ? `  例) ${bad.slice(0, sample).join(' / ')}` : '';
  console.log(`${mark} ${label.padEnd(44)} ${String(n).padStart(5)}件${tail}`);
}

// 人が見て判断するしかない項目。正当なものが必ず混ざるので合否には数えず、
// 一覧だけ出す。件数が前回から増えていたら、増えた分だけを見ればよい。
function info(label: string, hits: unknown[], sample = 6) {
  const n = hits.length;
  const tail = n ? `  例) ${hits.slice(0, sample).join(' / ')}` : '';
  console.log(`${n ? 'ℹ' : '✓'} ${label.padEnd(44)} ${String(n).padStart(5)}件${tail}`);
}

const SUBJECT_KEYS = ['sansu', 'kokugo', 'rika', 'shakai', 'eigo'];
const EXAM_TYPES = ['chugaku', 'koko'];
const PERIODS = [
  '小4', '小5前半', '小5後半', '小6前半', '小6後半・直前',
  '中1', '中2', '中3前半', '中3夏', '中3秋〜直前',
];

const dupes = <T,>(a: T[]): T[] => {
  const m = new Map<T, number>();
  a.forEach((x) => m.set(x, (m.get(x) ?? 0) + 1));
  return [...m].filter(([, n]) => n > 1).map(([k]) => k);
};

const lessonText = (l: Lesson) =>
  [
    l.title, l.description, l.intro,
    ...(l.keyPoints ?? []),
    ...(l.sections ?? []).map((s: any) => `${s.heading}\n${s.body}`),
    ...(l.trapExamples ?? []).flatMap((t: any) => [
      t.question, t.wrongAnswer, t.trapExplanation, t.correctAnswer, t.correctExplanation,
    ]),
  ].filter(Boolean).join('\n');

// ── A. 失敗（データが画面に出ない・壊れている） ──────────────
console.log('\n=== A. 失敗 ===');
check('sectionsが空', L.filter((l) => !l.sections?.length).map((l) => l.id));
check('bodyが空', L.filter((l) => l.sections?.some((s: any) => !s.body?.trim())).map((l) => l.id));
check('titleが空', L.filter((l) => !l.title?.trim()).map((l) => l.id));
check('descriptionが空', L.filter((l) => !l.description?.trim()).map((l) => l.id));
check(
  '図解の参照切れ',
  L.flatMap((l) =>
    (l.sections ?? [])
      .filter((s: any) => s.figureId && !getLessonFigure(s.figureId))
      .map((s: any) => `${l.id}:${s.figureId}`),
  ),
);
// mangaId がレジストリに無いと、節にマンガのボタンが出ないまま黙って消える
check(
  'マンガの参照切れ',
  L.flatMap((l) =>
    (l.sections ?? [])
      .filter((s: any) => s.mangaId && !getMangaScript(s.mangaId))
      .map((s: any) => `${l.id}:${s.mangaId}`),
  ),
);
// 同じ台本を2か所から指していたら、どちらかが結線ミス
const mangaIds = L.flatMap((l) => (l.sections ?? []).map((s: any) => s.mangaId).filter(Boolean));
check('同じマンガを複数の節が参照', dupes(mangaIds as string[]));

// ── B. 矛盾（受験種別・学年・並び順の食いちがい） ─────────────
console.log('\n=== B. 矛盾 ===');
check('subjectが想定外', [...new Set(L.map((l) => l.subject))].filter((s) => !SUBJECT_KEYS.includes(s)));
check(
  'examTypeが想定外',
  [...new Set(L.map((l) => l.examType))].filter((e) => e !== undefined && !EXAM_TYPES.includes(e)),
);
check(
  'studyPeriodが想定外',
  [...new Set(L.map((l) => l.studyPeriod))].filter((s) => s !== undefined && !PERIODS.includes(s)),
);
// 中学受験なのに「中1」、高校受験なのに「小5」などの食いちがい
check(
  '受験種別と学年の食いちがい',
  L.filter((l) => {
    if (!l.studyPeriod) return false;
    return ((l.examType ?? 'chugaku') === 'koko') !== l.studyPeriod.startsWith('中');
  }).map((l) => `${l.id}(${l.examType ?? '-'}/${l.studyPeriod})`),
);
check(
  '誤答と正答が同じtrapExample',
  [...new Set(L.flatMap((l) =>
    (l.trapExamples ?? [])
      .filter((t: any) => t.wrongAnswer?.trim() === t.correctAnswer?.trim())
      .map(() => l.id),
  ))],
);
check(
  'trapExampleに空欄',
  [...new Set(L.flatMap((l) =>
    (l.trapExamples ?? [])
      .filter((t: any) => !t.question?.trim() || !t.correctAnswer?.trim() || !t.correctExplanation?.trim())
      .map(() => l.id),
  ))],
);

// ── C. バグ（問題データ） ────────────────────────────
console.log('\n=== C. バグ ===');
const Q = questions as any[];
check('問題id重複', dupes(Q.map((q) => q.id)));
check('問題文が空', Q.filter((q) => !q.question?.trim()).map((q) => q.id));
check('答えが空', Q.filter((q) => !String(q.answer ?? '').trim()).map((q) => q.id));
check(
  '答えが選択肢にない',
  Q.filter((q) => Array.isArray(q.choices) && q.choices.length > 0 && !q.choices.includes(q.answer))
    .map((q) => q.id),
);
check(
  '選択肢が重複している問題',
  Q.filter((q) => Array.isArray(q.choices) && dupes(q.choices).length > 0).map((q) => q.id),
);

// 問題集の解説が、画面に出したときに短すぎないか。
//
// 長いあいだ、無料ユーザーには hint（中央値34字）だけが「📖 解説」という
// 見出しで出ていて、本当の解説（中央値167字）は Pro でしか読めなかった。
// さらにヒントの無い532問では explanation の1行目だけが出ていたため、
// そこが「【解説】」という見出しの文字しか無い問題では画面に
// 「【(1)の解説】」とだけ表示され、裏の1,000字超の解説が読めなかった。
// 2026/9/14に解説は無料で全文を出すよう変更し、あわせて式だけの26問も書き直した。
// ここは utils/explanation.ts の同じ関数を通して、画面に出る文そのものを測る。
check(
  '問題集の解説が画面上で短すぎる（20字以下）',
  Q.filter((q) => explanationText(q).length <= 20).map((q) => `${q.id}(${explanationText(q).length}字)`),
);

// 中学受験（小学生）の算数・理科に、中学以上でしか習わない内容が出ていないか。
//
// 平方根（√）は中学3年で習う。中学受験の算数でも使わない。
// ところが「1辺8cmの正方形の対角線は8√2cm」のように、小学生には出せない
// 答えの問題が42問あった。子どもが見る問題文・答えだけでなく、
// 解説・ヒント・覚え方・ひっかけ注意まで見ないと取りこぼす
// （実際、解説だけ直しても覚え方の欄に「√の整理」が残っていた）。
// 2026/9/15に全42問を、√を使わない設問・解き方に書き直して0件にした。
const SQRT = /√|平方根/;
const ELEM_FIELDS = ['question', 'answer', 'hint', 'explanation', 'memoryTip', 'pitfall', 'figureDescription'];
check(
  '小学生向けの問題に平方根が出ている',
  Q.filter((q) => (q.examType ?? 'chugaku') === 'chugaku' && !/^j/.test(String(q.grade ?? '')))
    .filter((q) => q.subject === 'sansu' || q.subject === 'rika')
    .filter((q) => ELEM_FIELDS.some((k) => SQRT.test(String(q[k] ?? ''))))
    .map((q) => q.id),
);

// 高校受験（中学生）向けの問題に、高校以上の内容が印なしで出ていないか。
//
// sin/cos/tan・微分積分・Σ・ベクトル・行列・log は高校の内容で、高校入試には出ない。
// ところが「sin 30°の値を答えなさい」のような問題が、高校受験の問題として
// 出ていた（54問）。うち51問は maxOnly（Maxプラン限定）だったが、
// maxOnly は課金の出し分けであって「先取り」という表示ではないので、
// 生徒は入試に出る内容だと思ってしまう。
// 2026/9/15に、全員に出る3問は中学範囲に書き直し、
// 残り51問は問題文の先頭に【高校先取り】を付け、
// ひっかけ注意の欄に「高校入試には出ない／中学ではこう解く」と明記した。
// 印のない高校内容が問題文・答えに出たら止める。
const HS_ONLY = /\bsin\b|\bcos\b|\btan\b|三角比|正弦定理|余弦定理|微分|導関数|∫|Σ|ベクトル|行列|\blog\b|対数|\b[nN]C[rk]\b|\b[nN]P[rk]\b/;
check(
  '中学生向けの問題に印なしで高校内容が出ている',
  Q.filter((q) => (q.subject === 'sansu' || q.subject === 'rika'))
    .filter((q) => (q.examType ?? 'chugaku') === 'koko' || /^j/.test(String(q.grade ?? '')))
    .filter((q) => !/【高校先取り】|先取り|高校範囲/.test(String(q.question ?? '')))
    .filter((q) => HS_ONLY.test(String(q.question ?? '')) || HS_ONLY.test(String(q.answer ?? '')))
    .map((q) => q.id),
);

// 問題集15,199問そのものの健全さ。
//
// ⚠️これまでの監査は、公式集1,770問ばかりを見ていた。
// 子どもが毎日解くのは問題集のほうで、そちらは「20字以下」という
// 弱い検査しか当てていなかった。2026/9/15に全問を測り直した結果：
//   ・計算のまちがい … 実質0（scripts/verify-arithmetic.ts で1,874式を検算）
//   ・解説が理由まで書けていない … 8,374問（55%）← いちばん大きい残債
//   ・解説が60字以下 … 926問
//   ・問題文も答えも同じ重複 … 2組4問
// **「0件・すべて通過」と言えるのは、ここの数字も見たときだけ。**
const Q_WHY = /なぜ|だから|ので|ため|理由|わけ|から。|からで|という意味|つまり|もともと|考える/;
const qThin: string[] = [];
const qShort: string[] = [];
for (const q of Q) {
  const e = explanationText(q);
  const words = e.replace(/[0-9０-９＋－×÷＝=()（）。、,.\s+\-*/^²³°%a-zA-Z]/g, '');
  // ⚠️記述式は「模範解答」そのものが解説にあたり、小問には小問ごとの解説がある。
  //   解説の欄だけを測ると、実際は十分に説明されている問題まで薄いと数えてしまう。
  //   画面に出る文章の総量（解説＋長い模範解答＋小問の解説）で測る。
  const answerLen = String(q.answer ?? '').length;
  const subLen = ((q.subQuestions ?? []) as any[]).reduce(
    (a, sub) => a + String(sub.explanation ?? '').length, 0);
  const shown = e.length + (answerLen > 60 ? answerLen : 0) + subLen;
  if (shown <= 80) qShort.push(`${q.id}(${shown}字)`);
  if (!Q_WHY.test(e) || words.length < 12) qThin.push(`${q.subject}/${q.id}`);
}
// ヒントが答えそのものになっていないか。
// これがあると、考える前に答えが見えてしまい、ヒントの意味がなくなる。
// 2026/9/15にユーザーの指摘で2問見つかった（漢字の読み・対義語）。
const qn = (x: any) => String(x ?? '').replace(/\s+/g, '').replace(/[。、．，]/g, '');
check(
  '【問題集】ヒントが答えそのもの',
  Q.filter((q) => qn(q.answer) && qn(q.hint) && qn(q.answer) === qn(q.hint)).map((q) => q.id),
);
// 画面に出る文に、よその国の文字がまぎれこんでいないか。
//
// 一括置換用の下書きを書いているとき、ロシア語（замен・высокий）が2度まぎれこんだ。
// 「日本語の中に英単語が挟まっている」の検査はラテン文字しか見ないので、
// キリル文字・ハングル・アラビア文字などは素通りしてしまう。
// 数学のギリシャ文字（α・π・θ）や上付き数字（²・³）は正当に使うので、
// 「許す文字を並べる」のではなく「受験教材にまず出てこない文字体系」を名指しで弾く。
const ALIEN_SCRIPT =
  /[\u0400-\u04ff\u0500-\u052f\u0530-\u058f\u0590-\u05ff\u0600-\u06ff\u0700-\u074f\u0900-\u097f\u0e00-\u0e7f\u1100-\u11ff\u10a0-\u10ff\uac00-\ud7af]/;
const alienBad: string[] = [];
for (const q of Q as any[]) {
  const fields: Array<[string, unknown]> = [
    ['問題文', q.question], ['答え', q.answer], ['ヒント', q.hint],
    ['解説', q.explanation], ['覚え方', q.memoryTip], ['ひっかけ', q.pitfall],
    ['課題文', q.passage],
  ];
  for (const [name, v] of fields) {
    const alien = [...String(v ?? '')].filter((c) => ALIEN_SCRIPT.test(c));
    if (alien.length) alienBad.push(`${q.id}(${name}:${[...new Set(alien)].join('')})`);
  }
  for (const sub of (q.subQuestions ?? []) as any[]) {
    const t = `${sub.prompt ?? ''}${sub.answer ?? ''}${sub.explanation ?? ''}`;
    const alien = [...t].filter((c) => ALIEN_SCRIPT.test(c));
    if (alien.length) alienBad.push(`${q.id}:${sub.label}(${[...new Set(alien)].join('')})`);
  }
}
check('【問題集】画面に出る文によその国の文字がまぎれている', alienBad);

// 画面に出る文にマークダウン記法が混ざっていないか。
//
// 解説・ヒント・問題文・答えはすべて素の <Text> で描いているので、
// マークダウンは解釈されず ** がそのまま画面に出る。
// 2026/9/15、解説を書き直したときに強調のつもりで ** を書いてしまい、
// 11行に混入した（figure の steps では以前にも同じ失敗をしている）。
const mdBad: string[] = [];
for (const q of Q as any[]) {
  const fields: Array<[string, unknown]> = [
    ['問題文', q.question], ['答え', q.answer], ['ヒント', q.hint],
    ['解説', q.explanation], ['覚え方', q.memoryTip], ['ひっかけ', q.pitfall],
  ];
  for (const [name, v] of fields) if (String(v ?? '').includes('**')) mdBad.push(`${q.id}(${name})`);
  for (const sub of (q.subQuestions ?? []) as any[]) {
    if (`${sub.prompt ?? ''}${sub.answer ?? ''}${sub.explanation ?? ''}`.includes('**')) {
      mdBad.push(`${q.id}:${sub.label}`);
    }
  }
}
check('【問題集】画面に出る文にマークダウンの ** が混ざっている', mdBad);

// 中学受験（小学生）向けの問題に、高校で習う記号が出ていないか。
//
// 2026/9/16、場合の数の問題34問に C(9,3)・₇C₂・8C3・5!・P(9,3)・nCr といった
// 高校の記号が使われていた。小学生はこの記号を習わないので、
// 式の意味が読み取れず、解説が解説として働いていなかった。
// 平方根のときと同じ種類の失敗（小学生向けに中学以上の内容が出ていた）である。
// 書きかえの型：まず順番を考えてかけ算し、選んだ個数の並べ方でわって重なりを消す、
// と言葉で書く。階乗は 5×4×3×2×1 とそのまま並べる。
//
// ⚠️ 座標の点（A(0,4)・C(6,4)）と、図形の頂点（A2B2C2）は正当なので弾かない。
//   ・C(…) は後ろに = か 通り が続くときだけ組み合わせとみなす
//   ・2C2 のように前が英字のものは頂点の名前なので見ない
const HIGH_SCHOOL_NOTATION: Array<[string, RegExp]> = [
  ['階乗', /\d\s*!/],
  ['組み合わせ', /(?<![A-Za-z])[0-9n]\s*C\s*[0-9r]/],
  ['順列', /(?<![A-Za-z])[0-9n]\s*P\s*[0-9r]/],
  ['添字つき', /[₀-₉][CP][₀-₉]/],
  ['組み合わせ記号', /[CP]\(\d+\s*,\s*\d+\)\s*(?:[=＝]|通り)/],
];
const hsBad: string[] = [];
for (const q of Q as any[]) {
  if (q.examType !== 'chugaku') continue;
  const fields: Array<[string, unknown]> = [
    ['問題文', q.question], ['答え', q.answer], ['ヒント', q.hint],
    ['解説', q.explanation], ['覚え方', q.memoryTip], ['ひっかけ', q.pitfall],
  ];
  for (const [name, v] of fields) {
    const s = String(v ?? '');
    for (const [kind, re] of HIGH_SCHOOL_NOTATION) {
      if (re.test(s)) { hsBad.push(`${q.id}(${name}:${kind})`); break; }
    }
  }
}
check('【問題集】中学受験の問題に高校で習う記号が出ている', hsBad);

// 書いた本人が答えを出しきれていない解説が、そのまま出荷されていないか。
//
// 2026/9/16、解説の中に「…の計算過程を再確認すると」「本問の設定で解答欄を384で示す」
// 「厳密には168通りは再確認が必要です」「条件再確認が必要だが」という文が残った問題が
// 5問あり、そのすべてで答えか問題文がまちがっていた（灘07・灘10・明星max01・
// 東京法政max01・関関同立r01・中学受験ex_01_023）。
// 逃げ道を書いた時点で、書き手は導けていない。**それは必ず中身のまちがいとして残る。**
//
// ⚠️ 「前後で」「後で」「厳密には」「矛盾」は正当な言い回し（質量保存の法則・
//   古文の「やがて」・選択肢が本文と矛盾する説明）なので入れない。誤検出が数百件出る。
const UNFINISHED: Array<[string, RegExp]> = [
  ['再確認', /再確認すると|再確認が必要|再確認する必要/],
  ['修正メモ', /これを修正|の修正：|実際の正解|実際の正答|正答は/],
  ['出題の不備', /出題ミス|別解が生じ|解答欄を/],
  ['書きかけ', /TODO|FIXME|とりあえず|仮に答え/],
];
const unfinished: string[] = [];
for (const q of Q as any[]) {
  const fields: Array<[string, unknown]> = [
    ['問題文', q.question], ['答え', q.answer], ['ヒント', q.hint],
    ['解説', q.explanation], ['覚え方', q.memoryTip], ['ひっかけ', q.pitfall],
  ];
  for (const [name, v] of fields) {
    const s = String(v ?? '');
    for (const [kind, re] of UNFINISHED) {
      if (re.test(s)) { unfinished.push(`${q.id}(${name}:${kind})`); break; }
    }
  }
}
check('【問題集】答えを出しきれていない解説が残っている', unfinished);

// 小問（subQuestions）が画面に出ているか。
//
// 89問（小問353問）が subQuestions を持つのに、QuizCard が描いていなかった。
// そのため「1辺が6cmの立方体の容器があります。1L＝1000cm³とします。」だけが
// 問題として表示され、**何を聞かれているのかが画面のどこにも無かった**。
// 答えの側には「問1 216cm³ / 問2 216cm² …」と出るので、
// 見えない設問への答えだけが並んでいた。2026/9/15に QuizCard で描くようにした。
// ここでは、小問に prompt・answer・explanation がそろっているかを見る。
const subBad: string[] = [];
for (const q of Q) {
  for (const sub of (q.subQuestions ?? []) as any[]) {
    if (!String(sub.prompt ?? '').trim()) subBad.push(`${q.id}:${sub.label}(設問なし)`);
    else if (!String(sub.answer ?? '').trim()) subBad.push(`${q.id}:${sub.label}(答えなし)`);
    else if (!String(sub.explanation ?? '').trim()) subBad.push(`${q.id}:${sub.label}(解説なし)`);
  }
}
check('【問題集】小問に設問・答え・解説のどれかが無い', subBad);

info('【問題集】解説が理由まで書けていない（減らしていく数字）', qThin, 3);
info('【問題集】画面に出る説明が80字以下（減らしていく数字）', qShort, 3);
const qnorm = (x: string) => String(x ?? '').replace(/\s+/g, '').replace(/[。、．，]/g, '');
const qdup = new Map<string, string[]>();
for (const q of Q) {
  if (qnorm(q.question).length < 12) continue;
  // ⚠️長文問題は設問文（「（ ）に入る接続語を選びなさい」など）が同じでも、
  //   本文がちがえば別の問題。passage を入れないと誤検出する。
  const k = qnorm(q.passage) + '||' + qnorm(q.question) + '||' + qnorm(q.answer);
  qdup.set(k, [...(qdup.get(k) ?? []), q.id]);
}
check('【問題集】問題文も答えも同じ重複', [...qdup.values()].filter((v) => v.length > 1).map((v) => v.join('/')));

// 「⚡ はやく解くコツ」の参照切れと、いまの本数。
// コツは問題idで引くので、問題を消したり id を変えたりすると黙って出なくなる。
check(
  'はやく解くコツの参照切れ',
  Object.keys(quickTricks).filter((id) => !Q.some((q) => q.id === id)),
);
info('はやく解くコツが付いている問題（増やしていく数字）', Object.keys(quickTricks), 3);

// 問題集の図に、動く図解の説明文がついているか。
//
// 図1,320枚のうち798枚（60%）は steps を持たず、画面では線がすうっと
// 現れて終わりだった。何の図なのか、どの数がどこの長さなのかが、
// 文字では一切示されていなかった。
// 2026/9/15に data/auto-steps.ts を入れ、steps が無い図には
// **図形データそのものから**説明文を組み立てるようにした
// （figure の中にある値しか読まないので、図と文章が食いちがわない）。
// 手書きの steps があれば必ずそちらが優先される。
// ここでは「手書きも自動生成も無く、説明が1文字も出ない図」を数える。
const figEntries = Object.entries(FIGS as Record<string, any>);
const qById = new Map(Q.map((q) => [q.id, q]));
const silentFigs = figEntries
  .filter(([id, f]) => !f?.steps?.length && !autoSteps(f, qById.get(id)))
  .map(([id, f]) => `${id}(${f?.kind})`);
const autoFigs = figEntries.filter(([id, f]) => !f?.steps?.length && autoSteps(f, qById.get(id)));
const handFigs = figEntries.filter(([, f]) => f?.steps?.length);
info(
  `図解の説明（手書き${handFigs.length}・自動${autoFigs.length}）／説明が出ない図`,
  silentFigs,
  4,
);

// 「区別すべき2語」が、公式集で並べて説明されているか。
//
// 同じ言葉づかいでまとめてしまうと、子どもは区別できないまま覚える。
// 実際に「氷がとける（融解）」と「食塩がとける（溶解）」が区別されておらず、
// 公式集に「融解」が1件も無かった。ほかにも 蒸発／沸騰、領海／排他的経済水域、
// 体積／容積 が抜けていた（2026/9/15にすべて追加）。
//
// **問題集には出ているのに公式集で並べて説明していない対**を拾う。
// 正当なもの（別の単元で扱うのが自然な対）も混ざるので ℹ 扱い。
const CONFUSABLE: [string, string][] = [
  // ⚠️ 受験範囲外の語、対比する関係にない語は入れないこと。
  //    入れると毎回 ℹ に出続けて、本当の見落としが埋もれる。
  //    2026/9/15に外したもの：加速度・定義域/値域・独立/排反（高校範囲）、
  //    関係副詞（中3の範囲外で、公式集から意図的に除いてある）、恒等式、
  //    書き下し文/訓読（ほぼ同義）、国事行為/内閣・貿易摩擦/産業の空洞化（対ではない）。
  ['融解', '溶解'], ['蒸発', '沸騰'], ['溶質', '溶媒'],
  ['有機物', '無機物'], ['状態変化', '化学変化'], ['質量', '重力'],
  ['仕事', '仕事率'], ['電力', '電力量'], ['示相化石', '示準化石'],
  ['火山岩', '深成岩'], ['公転', '自転'], ['恒星', '惑星'],
  ['単体', '化合物'], ['純粋な物質', '混合物'], ['原子', '分子'],
  ['原子', 'イオン'], ['酸化', '還元'], ['中和', '中性'],
  ['溶解度', '濃度'], ['飽和水蒸気量', '湿度'], ['道管', '師管'],
  ['動脈', '静脈'], ['動脈血', '静脈血'], ['蒸散', '呼吸'],
  ['光合成', '呼吸'], ['消費者', '分解者'], ['体細胞分裂', '減数分裂'],
  ['遺伝子', '染色体'], ['優性', '劣性'], ['直列', '並列'],
  ['電流', '電圧'], ['抵抗', '電流'], ['磁界', '磁力線'],
  ['力', '圧力'], ['重さ', '質量'], ['震度', 'マグニチュード'],
  ['初期微動', '主要動'], ['P波', 'S波'], ['寒冷前線', '温暖前線'],
  ['高気圧', '低気圧'], ['年周運動', '日周運動'], ['凝結', '凝固'],
  ['沈降', '隆起'], ['しん食', '堆積'], ['風化', 'しん食'],
  ['乱層雲', '積乱雲'], ['恒温動物', '変温動物'], ['セキツイ動物', '無セキツイ動物'],
  ['被子植物', '裸子植物'], ['単子葉類', '双子葉類'], ['有性生殖', '無性生殖'],
  ['被告', '被告人'], ['控訴', '上告'], ['国庫支出金', '地方交付税'],
  ['歳入', '歳出'], ['扇状地', '三角州'], ['促成栽培', '抑制栽培'],
  ['過疎', '過密'], ['領海', '排他的経済水域'], ['直接税', '間接税'],
  ['条例', '法律'], ['尊敬', '謙譲'], ['衆議院', '参議院'],
  ['選挙権', '被選挙権'], ['弾劾裁判', '国民審査'], ['民事裁判', '刑事裁判'],
  ['原告', '検察官'], ['違憲審査権', '最高裁判所'], ['公布', '施行'],
  ['自由権', '社会権'], ['参政権', '請求権'], ['社会保険', '公的扶助'],
  ['累進課税', '逆進性'], ['円高', '円安'], ['インフレ', 'デフレ'],
  ['需要', '供給'], ['金融政策', '財政政策'], ['GDP', '経済成長率'],
  ['ODA', 'NGO'], ['PKO', 'NGO'], ['総会', '安全保障理事会'],
  ['常任理事国', '非常任理事国'], ['本初子午線', '日付変更線'], ['緯度', '経度'],
  ['等高線', '縮尺'], ['主曲線', '計曲線'], ['季節風', '偏西風'],
  ['暖流', '寒流'], ['第一次産業', '第三次産業'], ['太平洋ベルト', '工業地帯'],
  ['地産地消', 'モーダルシフト'], ['摂政', '関白'], ['守護', '地頭'],
  ['御成敗式目', '武家諸法度'], ['班田収授法', '墾田永年私財法'], ['元禄文化', '化政文化'],
  ['寝殿造', '書院造'], ['遣唐使', '勘合貿易'], ['日米和親条約', '日米修好通商条約'],
  ['領事裁判権', '関税自主権'], ['下関条約', 'ポーツマス条約'], ['大日本帝国憲法', '日本国憲法'],
  ['地租改正', '廃藩置県'], ['財閥解体', '農地改革'], ['国風文化', '天平文化'],
  ['体積', '容積'], ['合同', '相似'], ['順列', '組み合わせ'],
  ['比例', '反比例'], ['平均値', '中央値'], ['中央値', '最頻値'],
  ['度数', '相対度数'], ['面積', '表面積'], ['底面積', '表面積'],
  ['円周', '円の面積'], ['約数', '倍数'], ['最大公約数', '最小公倍数'],
  ['素数', '素因数分解'], ['分母', '分子'], ['通分', '約分'],
  ['割合', '比'], ['百分率', '歩合'], ['もとにする量', 'くらべる量'],
  ['原価', '定価'], ['定価', '売価'], ['利益', '利益率'],
  ['内角', '外角'], ['中心角', '円周角'], ['弧', '弦'],
  ['錯角', '同位角'], ['対頂角', '同位角'], ['垂直二等分線', '角の二等分線'],
  ['一次関数', '比例'], ['変化の割合', '傾き'], ['解', '因数'],
  ['展開', '因数分解'], ['平方根', '2乗'], ['有理数', '無理数'],
  ['絶対値', '符号'], ['確率', '場合の数'], ['尊敬語', '謙譲語'],
  ['謙譲語', '丁寧語'], ['直喩', '隠喩'], ['擬人法', '隠喩'],
  ['倒置', '体言止め'], ['形容詞', '形容動詞'], ['副詞', '連体詞'],
  ['助詞', '助動詞'], ['文節', '単語'], ['自立語', '付属語'],
  ['主語', '述語'], ['主題', 'あらすじ'], ['形式段落', '意味段落'],
  ['頭括型', '尾括型'], ['指示語', '接続語'], ['逆接', '順接'],
  ['対義語', '類義語'], ['音読み', '訓読み'], ['送りがな', '歴史的かなづかい'],
  ['係り結び', '已然形'], ['連体形', '終止形'], ['返り点', '置き字'],
  ['短歌', '俳句'], ['季語', '切れ字'], ['随筆', '説明文'],
  ['事実', '意見'], ['具体', '抽象'], ['現在完了', '過去形'],
  ['不定詞', '動名詞'], ['受動態', '能動態'], ['形容詞', '副詞'],
  ['比較級', '最上級'], ['原級', '比較級'], ['主格', '目的格'],
  ['可算名詞', '不可算名詞'], ['現在分詞', '過去分詞'], ['助動詞', '一般動詞'],
];
// SUBJECTS は { key, emoji, color } の配列なので、そのまま添字にはできない。
// ほかの検査と同じく Object.entries(FORMULAS) で回す。
const itemBlobs = Object.entries(FORMULAS).flatMap(([, secs]) =>
  (secs as any[]).flatMap((sec: any) =>
    (sec.items ?? []).map((it: any) => ({
      label: it.label as string,
      text: [it.formula, it.explanation, ...(it.steps ?? []), ...(it.checkpoints ?? []),
             ...(it.quiz ?? []).flatMap((z: any) => [z.q, z.a, z.explanation])].filter(Boolean).join('\n'),
    })),
  ),
);
const qBlob = Q.map((q) => `${q.question}\n${q.answer}\n${q.explanation ?? ''}`).join('\n');
const notPaired = CONFUSABLE.filter(([a, b]) => {
  if (!qBlob.includes(a) || !qBlob.includes(b)) return false; // 扱っていない対は見ない
  return !itemBlobs.some((x) => x.text.includes(a) && x.text.includes(b));
}).map(([a, b]) => `${a}／${b}`);
info('区別すべき2語を、公式集で並べて説明していない（要目視）', notPaired, 6);

// 画面に出ないまま残っている「予備データ」が無いか。
//
// data/explanations_*.ts（5教科・計313件）は、問題側に解説が無いときの
// フォールバックとして配線されていたが、**実際に出るものが1件も無かった**。
// それだけなら無害だが、中身が問題の書きかえに追随しておらず、
// sansu_42 は「36√2 ≈ 50.9cm³」という誤った値のまま残っていた
// （正しくは18√2 ≈ 25.5cm³。ちょうど2倍）。問題側の解説が1件でも消えれば、
// この古い値が画面に出る。2026/9/15に配線ごと削除した。
// **使われていない予備データは、正しさを保てないので持たない。**
// ここでは「二度と生えていないこと」を見張る。
import { existsSync } from 'fs';
import { join } from 'path';
const deadFiles = ['sansu', 'kokugo', 'rika', 'shakai', 'eigo']
  .map((s) => `data/explanations_${s}.ts`)
  .filter((f) => existsSync(join(__dirname, '..', f)));
check('削除したはずの予備の解説ファイルが復活している', deadFiles);

// ── D. 重複 ───────────────────────────────────
console.log('\n=== D. 重複 ===');
check('レッスンid重複', dupes(L.map((l) => l.id)));

// order は「教科＋受験種別」ごとに一意であればよい。
// 画面は 教科でfilter → orderでsort → 受験種別でfilter の順に処理するため、
// 中学受験と高校受験が同じorder番号を持っていても表示順は乱れない。
const orderDup: string[] = [];
for (const sub of SUBJECT_KEYS)
  for (const et of EXAM_TYPES) {
    const ls = getLessonsBySubject(sub).filter((l: any) => (l.examType ?? 'chugaku') === et);
    dupes(ls.map((l: any) => l.order)).forEach((o) => orderDup.push(`${sub}/${et}:${o}`));
  }
check('教科×受験種別内のorder重複', orderDup);

// 同じセル（受験種別×学年×教科）に同じタイトルの単元があると、
// 一覧で見分けがつかず、内容も重複している可能性が高い。
const cellKey = (l: Lesson) => `${l.examType ?? 'chugaku'}|${l.studyPeriod}|${l.subject}`;
const byCell = new Map<string, Lesson[]>();
L.forEach((l) => byCell.set(cellKey(l), [...(byCell.get(cellKey(l)) ?? []), l]));
const cellDup: string[] = [];
for (const [k, ls] of byCell) {
  const m = new Map<string, string[]>();
  ls.forEach((l) => m.set(l.title, [...(m.get(l.title) ?? []), l.id]));
  for (const [t, ids] of m) if (ids.length > 1) cellDup.push(`${k}「${t}」${ids.join(',')}`);
}
check('同一セル内のタイトル重複', cellDup);

// 公式集の label は¥50買い切りの識別キーなので、全教科を通して一意でなければならない
const labels: string[] = [];
for (const { key } of SUBJECTS) FORMULAS[key].forEach((s) => s.items.forEach((i) => labels.push(i.label)));
check('公式集label重複（買い切りキー）', dupes(labels));
check(
  '公式集セクションに学年がない',
  SUBJECTS.flatMap(({ key }) =>
    FORMULAS[key].filter((s) => !s.studyPeriod).map((s) => `${key}/${s.title}`),
  ),
);

// 公式集から教科書単元へのリンク。参照切れだと、押しても何も起きない。
// 受験種別がちがうと、中学受験の生徒を中3の単元に飛ばしてしまう。
const lessonById = new Map(L.map((l) => [l.id, l]));
const relBroken: string[] = [];
const relMismatch: string[] = [];
for (const { key } of SUBJECTS)
  for (const sec of FORMULAS[key])
    for (const rl of sec.relatedLessons ?? []) {
      const les = lessonById.get(rl.id);
      if (!les) { relBroken.push(`${key}/${sec.title} → ${rl.id}`); continue; }
      if ((sec.examType ?? 'chugaku') !== (les.examType ?? 'chugaku'))
        relMismatch.push(`${key}/${sec.title} → ${rl.id}`);
    }
check('公式集→教科書リンクの参照切れ', relBroken);
check('公式集→教科書リンクの受験種別ちがい', relMismatch);

// 図解の段階説明が、実際の描画より先走っていないかを見る。
//
// 図の部品は決まった順に描かれるので、説明の文が「いまから〜を引く」と
// 言っていても、その部品がすでに出ていることがある。
// （台形で「対角線ACを1本引く」と2枚目に書いたが、対角線は描画順の
//   2番目なので1枚目からすでに見えていた）
// これから現れるかのような言い方を拾い、目視の手がかりにする。
// 図の部品の名前を名指しして「引く」と言っている短い文だけを見る。
// 「三角定規で垂線を引くときは…」のような描き方の手順や、
// 「要素を足す」のような図と無関係な文まで拾うと、正当なものばかりが
// 並んで検査の意味がなくなる（実際にそれで6件すべて誤検出になった）。
// 対象は polygon の対角線だけ。ここは PolygonFig の描画順が
// 「円 → 部分塗り → 本体 → 補助線 → 対角線 → 高さ → 辺ラベル → 頂点ラベル」と
// 分かっているので、対角線が何枚目のスライドで現れるかを計算できる。
// （他の図形は並び順を追えていないので見ていない。検査の範囲はここまで）
// 直角マーク・等辺ティックは部品数に入れていない。入れないと nParts が
// 少なめに出て「まだ描かれていない」寄りに判定されるので、誤検出は増えない。
// 逆に、対角線より前に来る円・補助線・部分塗りは必ず数える（数え落とすと
// 対角線の位置が早すぎることになり、正当な文を誤って拾ってしまう）。
const DIAG = /対角線[^。]{0,12}引く。?$/;
const stepLate: string[] = [];
for (const l of L)
  for (const s of l.sections ?? []) {
    const fig = (s.figureId ? getLessonFigure(s.figureId) : null) as {
      kind?: string; steps?: string[]; buildSteps?: number;
      points?: unknown[]; diagonals?: unknown[]; heights?: unknown[]; sideLabels?: unknown[];
      circles?: { label?: string }[]; segments?: { label?: string }[]; regions?: unknown[];
    } | null;
    if (fig?.kind !== 'polygon' || !fig.steps || !(fig.diagonals?.length)) continue;
    const st = fig.steps;
    const build = fig.buildSteps ?? Math.max(1, st.length - 1);
    const withLabel = (a: { label?: string }[] | undefined) =>
      (a ?? []).reduce((n, x) => n + (x.label ? 2 : 1), 0);
    // 対角線より前に描かれる部品の数
    const before = withLabel(fig.circles) + (fig.regions?.length ?? 0) + 1 + withLabel(fig.segments);
    // 部品の総数と、対角線が何番目か（0始まり）
    const nParts =
      before + fig.diagonals.length + (fig.heights?.length ?? 0) * 2 +
      (fig.sideLabels ?? []).filter(Boolean).length +
      (fig.points ?? []).filter((p) => (p as { label?: string }).label).length;
    const diagIdx = before; // 本体・補助線のすぐあと
    // その対角線が最初に出そろうスライド（FigureView の opacityOf と同じ式）
    let appearAt = st.length;
    for (let sl = 0; sl < st.length; sl++) {
      const pos = Math.min(1, (sl + 1) / build) * nParts;
      if ((pos - diagIdx) / 0.75 >= 1) { appearAt = sl + 1; break; }
    }
    st.forEach((t, i) => {
      if (DIAG.test(String(t)) && i + 1 > appearAt)
        stepLate.push(`${s.figureId}：${i + 1}枚目で「引く」と書いてあるが、${appearAt}枚目でもう出ている`);
    });
  }
info('図解の説明が、すでに描かれた線を「引く」と言っている（要目視）', stepLate, 4);

// 一括置換を失敗すると、別の文がまるごと文の途中に差しこまれて本文が壊れる。
// （「二つの円の位置関係」で、③の一文が④と⑤の途中に入りこみ、
//   「④d= … r₁−r₂はr₁−r₂／<d<r₁+r₂のとき:2つの円は2点で交わる。…は(r₁≠r₂)のとき:」
//   という読めない文になっていた。tsc も expo export も通ってしまう）
// 文の切れ目に関係なく「同じ本文の中に40字以上そっくり同じ並びが2回出る」を見る。
// 文単位の突き合わせでは、差しこまれた側の前後がくっついて別の文になるため
// 捕まえられなかった（実際に試して0件だった）。
// 正当な繰り返し（例文の再掲・同じ課題文を二度出す国語の演習）も拾うので ℹ 扱い。
// 件数が増えたときだけ中身を見ればよい。
const KANA_ANY = /[ぁ-んァ-ヶ一-龥]/;
const SPLICE_W = 40;
const spliced: string[] = [];
for (const l of L)
  for (const s of l.sections ?? []) {
    const b = String(s.body ?? '').replace(/\s+/g, ' ');
    if (b.length < SPLICE_W * 2) continue;
    const at = new Map<string, number>();
    for (let i = 0; i + SPLICE_W <= b.length; i++) {
      const w = b.slice(i, i + SPLICE_W);
      if (!KANA_ANY.test(w)) continue;
      if (/^[+\-|＋－｜=＝*・…\s]+$/.test(w)) continue;
      const prev = at.get(w);
      if (prev === undefined) at.set(w, i);
      else if (i - prev >= SPLICE_W) {
        spliced.push(`${l.id} / ${s.heading ?? ''}：「${w.slice(0, 30)}…」が本文内で2回以上`);
        i = b.length;
      }
    }
  }
info('同じ本文の中で40字以上がそっくり繰り返されている（要目視）', spliced, 4);

// 一問一答の解説が、式と答えをなぞるだけで「なぜそうなるか」を言っていないもの。
// （「頂角が40度の二等辺三角形の底角は」に対して「底角は2つとも等しいので
//   (180−40)÷2＝70度」とだけ書いてあり、なぜ底角が等しいのかも、
//   140度が2つぶんの合計だという肝心なところも書いていなかった）
// これは壊れているわけではないので件数が0になることはないが、
// **減らしていく数字**として出す。増えたら書き方が後戻りしている。
// ⚠️「くらべ」「比べ」は検出語から外した。割合の「くらべる量」や「柱状図を比べる」のように
//   **名詞・ふつうの動詞**として出てくるため、式だけの解説が理由ありと誤判定されて通っていた
//   （2026/9/15に9件見つかり、すべて理由を書き足した）。検出語は「理由を述べる言い回し」に限る。
const WHY_WORD = /なぜ|だから|ので|ため|理由|わけ|から。|からで|という意味|つまり|もともと|考える/;
// 「解説そのものが無い」は不具合なので check（0にできる）。
// 「理由が書いていない」は書き方の質なので info（0にはならない）。
// ── 検出語で見ているので、歴史のように出来事をそのまま述べる文は
//    理由が書けていても拾われる。社会は構造的に残る件数が多い。
//    増えたら後戻り、減れば前進、という目安として見ること。
const noExpQuiz: string[] = [];
const thinQuiz: string[] = [];
for (const [subj, secs] of Object.entries(FORMULAS))
  for (const sec of secs)
    for (const it of sec.items ?? [])
      for (const z of it.quiz ?? []) {
        const e = String(z.explanation ?? '').trim();
        if (!e) { noExpQuiz.push(`${subj} / ${it.label} / ${z.q.slice(0, 20)}…`); continue; }
        const words = e.replace(/[0-9０-９＋－×÷＝=()（）。、,.\s+\-*/^²³°%a-zA-Z]/g, '');
        if (!WHY_WORD.test(e) || words.length < 12)
          thinQuiz.push(`${subj} / ${it.label} / ${z.q.slice(0, 20)}…`);
      }
// 2026/9/15に残債0件を達成したので、info から check に変えた。
// 以後は1件でも出たらコミットが止まる。**解説を書かずに一問一答を足さないこと。**
check('一問一答に解説がない', noExpQuiz, 3);
// 2026/9/15に全1,770問を書き終えて0件になったので、こちらも check に変えた。
// ただし判定は検出語（なぜ・ので・ため…）によるので、理由が書けていても
// 言い回しによっては拾われることがある。止まったら、まず本当に理由が
// 書いてあるかを読んで確かめ、書けているのに引っかかるなら言い回しを直す。
// **検出語を足して通すのは本末転倒なので、WHY_WORD は安易に広げないこと。**
check('一問一答の解説が理由まで書けていない', thinQuiz, 3);

// 公式集の一問一答そのものの品質。
// 「答えが自分自身を打ち消している」「答えが説明文になっている」といった、
// 書いた本人には気づきにくい欠陥を拾う。
// （正四角錐の高さの問題で、解説が正しい√7を出しながら「ではなく」と否定して
//   側面の三角形の高さ4cmを答えにしていた事故があったため）
const quizBad: string[] = [];
for (const { key } of SUBJECTS)
  for (const sec of FORMULAS[key])
    for (const it of sec.items)
      for (const qz of it.quiz ?? []) {
        const at = String(qz.a ?? '');
        const where = `${key}/${it.label}`;
        if (!at.trim()) quizBad.push(`${where}（答えが空）`);
        else if (at.length > 60) quizBad.push(`${where}（答えが長すぎる）`);
        else if (/…/.test(at)) quizBad.push(`${where}（答えに省略記号）`);
        if (qz.q?.trim() === at.trim()) quizBad.push(`${where}（問いと答えが同じ）`);
      }
check('公式集の一問一答の欠陥', quizBad);

// ── E. 表示（等幅の箱・記号） ──────────────────────────
console.log('\n=== E. 表示 ===');
// LessonRenderer.isArtLine と同じ判定。罫線を含み、小文字2つ以上も日本語も
// 無い行が2行続くと、本文が等幅の箱に入って読めなくなる。
const BOX = /[─━│┃┌┐└┘├┤┬┴┼╭╮╯╰▁▔|/\\]/;
const isArtLine = (line: string) => {
  const t = line.replace(/[　\s]/g, '');
  if (!t || !BOX.test(t)) return false;
  if (/[a-z]{2,}/.test(t)) return false;
  if (/[ぁ-んァ-ヶ一-龥]/.test(t)) return false;
  if (/[=＝]/.test(t) && /[0-9０-９]/.test(t)) return false; // 計算式は図ではない
  return true;
};
const boxed: string[] = [];
for (const l of L)
  for (const s of l.sections ?? []) {
    let run = 0;
    for (const line of String(s.body ?? '').split('\n')) {
      run = isArtLine(line) ? run + 1 : 0;
      if (run === 2) { boxed.push(l.id); break; }
    }
  }
info('意図せず等幅の箱になる本文（要目視）', [...new Set(boxed)]);

// 書きかけの英単語が本文に残る事故が実際に何度かあった
// （「technique は使わない。ここでは」「short く書きとめる」など）。
// 拾いたいのは小文字のふつうの英単語だけ。
// 大文字だけの並びは、図形の頂点（三角形ABC・四角形ABCD）と
// 略語（PKO・GDP・DNA・GHQ・EEZ）で、どちらも正当なので除く。
// 単位（km・mL・pH …）も除く。
const LEAK = /[ぁ-んァ-ヶ一-龥][ 　]?([A-Za-z]{3,})[ 　]?[ぁ-んァ-ヶ一-龥]/g;
const UNITS = /^(?:km|cm|mm|kg|mg|mL|dL|kL|ha|cc|pH|ppm|kWh)$/i;
const latin = L.filter((l) => {
  if (l.subject === 'eigo') return false;
  for (const m of lessonText(l).matchAll(LEAK)) {
    const w = m[1];
    if (w === w.toUpperCase()) continue; // ABCD・PKO などは正当
    if (UNITS.test(w)) continue;
    return true;
  }
  return false;
}).map((l) => l.id);
info('日本語の中に英単語が挟まっている（要目視）', latin, 8);

console.log(`\n合計 ${problems} 件`);
console.log(
  problems === 0
    ? '構造的な問題なし。ℹ の項目は人の目で確認すること（正当なものが混ざる）。'
    : '⚠ 上の ⚠ を確認すること。',
);
process.exit(problems === 0 ? 0 : 1);
