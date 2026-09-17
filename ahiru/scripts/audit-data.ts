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

// 教科書（単元）側も同じ検査をする。
// 問題集だけ見ていて単元を見ていなかったため、小4の「約数」の単元に
// 「もとの数の平方根を超えたら終了」、小6の「最短距離」に「斜辺＝√(6×6＋8×8)」など
// 14単元（30か所）が残っていた（2026/9/16）。同じ検査は問題集と単元の両方に必ず当てる。
// 書きかえの型は問題集と同じ：「同じ数を2回かけてもとの数になる数」と言う／3:4:5・5:12:13 の比で読む。
check(
  '【単元】小学生向けの単元に平方根が出ている',
  L.filter((l) => (l.examType ?? 'chugaku') === 'chugaku' && (l.subject === 'sansu' || l.subject === 'rika'))
    .filter((l) =>
      SQRT.test(
        [l.title, l.description, l.intro, ...((l.sections ?? []) as any[]).map((s) => s.body), ...((l.keyPoints ?? []) as string[]),
          ...((l.trapExamples ?? []) as any[]).flatMap((t) => [t.question, t.wrongAnswer, t.trapExplanation, t.correctAnswer, t.correctExplanation])]
          .map((x) => String(x ?? ''))
          .join('\n'),
      ),
    )
    .map((l) => l.id),
);

// 中学受験（小学生）向けの理科に、中学・高校の生物の用語が出ていないか。
//
// 平方根のときとまったく同じ種類の失敗の6回目。中学受験の理科に
// 「光補償点」「光飽和点」「原形質分離」「浸透圧」といった高校生物の用語や、
// メンデルの遺伝・染色体・DNA・減数分裂といった中3の内容が36問出ていた。
// 小学生はこれらの語をまったく習わないので、解説が解説として働いていなかった。
// 2026/9/16に、光合成のグラフは用語を使わず
// 「光合成で使う二酸化炭素の量と呼吸で出す量がつり合う明るさ」と言葉で書き直し、
// 遺伝など言いかえのきかない内容は中学受験範囲の生物の問題に差しかえて0件にした。
//
// ⚠️ 教科を rika にしぼること。国語の論説文は iPS細胞・再生医療を題材にすることがあり、
//   課題文そのものに「生殖細胞」が出てくるのは正当である（実際 kaimei_kokugo_1 が該当）。
// ⚠️ F₁・F₂ を検出語に入れてはいけない。力の合成の解説で
//   2つの力を F₁・F₂ と書くのは正当で、遺伝とは無関係である（re_118 が該当）。
// ⚠️ 受験種別が未設定の問題は中学受験側にも出るので、koko 以外はすべて見る。
// ⚠️ 「葉緑体」を検出語に入れてはいけない。中学受験の理科でも
//   「光合成は葉の葉緑体で行われる」と正面から教える語で、49問が正当に使っている。
//   いっぽう「ミトコンドリア」は中学2年の内容なので、こちらは弾く。
const CHUGAKU_NG =
  /光補償点|光飽和点|原形質分離|浸透圧|根圧|減数分裂|染色体|デオキシリボ|遺伝子|表現型|メンデル|顕性|潜性|優性の法則|分離の法則|独立の法則|検定交雑|検定交配|突然変異|自然選択|自然淘汰|半保存的複製|二重らせん|対立遺伝子|雑種第一代|陽生植物|陰生植物|カルビン回路|RuBisCO|明反応|暗反応|NADPH|細胞呼吸|塩基配列|体細胞分裂|生殖細胞|配偶子|ミトコンドリア|オルガネラ|細胞壁|細胞膜|液胞|DNA|クロロフィル|クロロプラスト|細胞小器官|酢酸カーミン|酢酸オルセイン|カリウムイオン|アブシシン酸|CAM植物|オーキシン|インスリン|グルカゴン|交感神経|副交感神経|反射弓|錐体細胞|桿体細胞|光周性|ホメオスタシス|C₆H₁₂O₆|C6H12O6|グルコース/;
check(
  '【問題集】中学受験の理科に、中学・高校でしか習わない生物の用語が出ている',
  (Q as any[])
    .filter((q) => q.subject === 'rika' && (q.examType ?? 'chugaku') !== 'koko')
    .filter((q) =>
      ELEM_FIELDS.some((k) => CHUGAKU_NG.test(String(q[k] ?? ''))) ||
      ((q.subQuestions ?? []) as any[]).some((s) =>
        ['question', 'answer', 'explanation'].some((k) => CHUGAKU_NG.test(String(s[k] ?? ''))),
      ),
    )
    .map((q) => q.id),
);

// 2026/9/17、上の検査を単元にも当てたところ、31単元が出た。問題集しか見ていなかった
// （「同じ種類の検査は問題集と単元の両方に当てる」の再発）。
// 小4の「植物の細胞のつくり①〜③」がまるごと中2の内容（細胞壁・細胞膜・液胞・DNA・酢酸カーミン）、
// 「光補償点」「光飽和点と陽生植物・陰生植物」が単元名ごと高校の用語、
// 気孔の開閉がカリウムイオン・アブシシン酸・CAM植物（高校）、
// 総まとめ単元（rika_01・rika_06）が光合成の化学式 6CO₂＋6H₂O→C₆H₁₂O₆＋6O₂・ミトコンドリア・
// オーキシン・メンデルの遺伝・反射弓・インスリンといった中2〜高校の内容で書かれていた。
// 単元は「けんび鏡で見る植物のからだ」「植物と動物のからだのちがい」「光合成を言葉の式で表す」
// 「ヒトとメダカのたんじょう」などの中学受験範囲の題材に差しかえ、化学式は言葉の式に直した。
// 検出語に 細胞壁・細胞膜・液胞・DNA・クロロフィル・細胞小器官・酢酸カーミン・カリウムイオン・
// アブシシン酸・オーキシン・インスリン・グルコース・C₆H₁₂O₆ を足し、遺伝子型→遺伝子 に広げた。
//
// ⚠️ 「細胞」「葉緑体」「葉緑素」「気孔」「孔辺細胞」「道管」「師管」「維管束」「さく状組織」
//   「成長点」「根冠」「胎盤」「へそのお」は中学受験で正面から教える語なので弾かない。
// ⚠️ 「遺伝的多様性」は生物多様性の3つのレベルとして環境の単元で正当に使う。
//   「遺伝子」だけを弾き、説明は「同じ種の中での性質のちがい」と書く。
// ⚠️ 「ブドウ糖」は中学受験の語、「グルコース」は高校の語。同じものなので機械的に置きかえてよい。
// ⚠️ trapExamples の wrongAnswer は誤答例なので見ないが、question・trapExplanation・
//   correctExplanation は生徒が読む文なので見る。
// ⚠️ 図解（caption・steps・軸ラベル）も見る。本文だけ直すと図だけ古い用語で残る
//   （実際、s011 の図の caption に「光補償点」が残っていた）。
check(
  '【単元】中学受験の理科に、中学・高校でしか習わない生物の用語が出ている',
  L.filter((l) => l.subject === 'rika' && (l.examType ?? 'chugaku') !== 'koko')
    .filter((l) => {
      const texts: unknown[] = [l.title, l.description, l.intro, ...(l.keyPoints ?? [])];
      for (const sec of (l.sections ?? []) as any[]) {
        texts.push(sec.heading, sec.body);
        const fig = sec.figureId ? getLessonFigure(sec.figureId) : null;
        if (fig) texts.push(JSON.stringify(fig));
      }
      for (const t of (l.trapExamples ?? []) as any[]) {
        texts.push(t.question, t.trapExplanation, t.correctAnswer, t.correctExplanation);
      }
      return texts.some((t) => CHUGAKU_NG.test(String(t ?? '')));
    })
    .map((l) => l.id),
);

// 2026/9/17、同じ種類の失敗の8回目。中学受験の理科に、中2〜高校の化学がそのまま出ていた
// （単元94・問題約90）。光合成の化学反応式 6CO₂＋6H₂O→C₆H₁₂O₆＋6O₂、中和の HCl＋NaOH→NaCl＋H₂O、
// 「化学反応式の係数をそろえる練習」という単元、イオン・電気分解・イオン化傾向・mol・周期表・
// 原子の構造・核融合を問う問題まであった。小学生は元素記号を習わないので、式が読めない。
// 化学式は「言葉の式」（二酸化炭素＋水→（光）→デンプン＋酸素）に、元素記号は物質名に直し、
// イオン・mol などは中学受験範囲の問題（金属と塩酸・備長炭電池・蒸発皿の残りもの・溶解度）に差しかえた。
// 「質量保存の法則」は「重さの保存（結びつく前後で全体の重さは変わらない）」と言いかえる。
//
// ⚠️ F₁・F₂（力の合成）・V₁（体積）のような「英字1文字＋下付き数字」は式ではないので、
//   化学式とみなすのは C・H・O・N・S で始まるもの（CO₂・H₂O・O₂・N₂・SO₂）と、
//   2文字の元素記号（Na・Cl・Ca・Fe・Cu・Zn・Mg …）＋下付き数字だけにする。
// ⚠️ 「原子力」は社会科でも使う正当な語なので「原子」の検出から外す。「ライオン」は「イオン」から外す。
// ⚠️ 「触媒」「密度」「溶解度」「濃度」「中和」「酸化」は中学受験でも使うので弾かない。
// ⚠️ 分数の「分子」（算数）があるので「分子」は弾かない。粒の意味なら「粒」と書く。
// ⚠️ pH は中3の内容。「pHとは何か」から「pHの計算」まで5単元が pH で書かれていたので、
//   「酸性・アルカリ性の強さ（ムラサキキャベツ液の色・金属との反応のはげしさ）」に書き直した。
//   pH の数値の棒グラフ・滴定曲線は、「性質の順に並べた数直線」「余っている酸・アルカリの量」の図に差しかえた。
const CHUGAKU_CHEM_NG =
  /[A-Z][a-z][₀-₉]|(?<![A-Za-z])[CHONS][₀-₉]|\b(?:CO2|H2O2?|O2|N2|H2|NaCl|NaOH|HCl|CaCO3|MgO|CuO|SO2|NH3|CH4|ZnCl2|CaCl2|BaSO4|Na2SO4|SiO2|C6H12O6)\b|化学反応式|化学式|元素記号|(?<!ラ)イオン|電気分解|\bmol\b|原子(?!力)|還元|質量保存|周期表|核分裂|核融合|半減期|定比例|活性化エネルギー|電離|電解質|イオン化傾向|pH|至適/;
check(
  '【単元】中学受験の理科に、中学・高校の化学の用語や化学式が出ている',
  L.filter((l) => l.subject === 'rika' && (l.examType ?? 'chugaku') !== 'koko')
    .filter((l) => {
      const texts: unknown[] = [l.title, l.description, l.intro, ...(l.keyPoints ?? [])];
      for (const sec of (l.sections ?? []) as any[]) {
        texts.push(sec.heading, sec.body);
        const fig = sec.figureId ? getLessonFigure(sec.figureId) : null;
        if (fig) texts.push(JSON.stringify(fig));
      }
      for (const t of (l.trapExamples ?? []) as any[]) texts.push(t.question, t.trapExplanation, t.correctAnswer, t.correctExplanation);
      return texts.some((t) => CHUGAKU_CHEM_NG.test(String(t ?? '')));
    })
    .map((l) => l.id),
);
check(
  '【問題集】中学受験の理科に、中学・高校の化学の用語や化学式が出ている',
  (Q as any[])
    .filter((q) => q.subject === 'rika' && (q.examType ?? 'chugaku') !== 'koko')
    .filter((q) =>
      [...ELEM_FIELDS, 'questionReading', 'answerReading'].some((k) => CHUGAKU_CHEM_NG.test(String(q[k] ?? ''))) ||
      ((q.choices ?? []) as unknown[]).some((c) => CHUGAKU_CHEM_NG.test(String(c))) ||
      ((q.subQuestions ?? []) as any[]).some((s) => ['question', 'answer', 'explanation'].some((k) => CHUGAKU_CHEM_NG.test(String(s[k] ?? '')))),
    )
    .map((q) => q.id),
);

// 中学受験（小学生）向けの理科に、中2〜高校の物理（電気・力学）がそのまま出ていないか（9回目の同種の失敗）。
//
// 中学受験の電気は「電池1個・豆電球1個の電流を①、豆電球1個分の抵抗を1」とし、
// 電流＝電池の数÷抵抗、発熱（明るさ）＝電流×電流×抵抗、で比で解く。
// 電圧（V）・Ω・オームの法則・電力（W）・ジュール・合成抵抗の逆数公式・電圧計は中2の内容。
// 磁界・右ねじの法則・フレミングの左手/右手・電磁誘導・誘導電流も中2。
//   → 磁力・磁力線、方位磁針のふれ方、右手の法則（コイル）、「磁石を動かしているあいだだけ電流」と言葉で書く。
// 力学の 加速度・ニュートンの運動の法則・慣性・等速直線運動・作用反作用・仕事率・エネルギー保存・Pa は中3〜高校。
//   → 中学受験の「斜面を転がる球と木片」「ふりこ」「動滑車・輪軸・斜面（力×長さは同じ）」「浮力＝おしのけた水の重さ」に差しかえる。
//
// ⚠️ 「電流」「抵抗」「アンペア（A・mA）」「電流計」は中学受験でも使う正当な語なので弾かない。
// ⚠️ 「電力会社」（社会）と hPa（気圧）は弾かない。数字＋V は「6V」のような電圧の表記だけを見る（V字谷は弾かない）。
// ⚠️ 「逆数」は小6算数で習うので弾かない。弾くのは「逆数公式」「逆数の和」だけ。
// ⚠️ 「斑状組織・等粒状組織」は中学受験でも火成岩のつくりとして教えるので弾かない。
const CHUGAKU_PHYS_NG =
  /Ω|オームの法則|(?<![A-Za-z0-9.])[0-9]+(?:\.[0-9]+)?\s?V\b|ボルト|ワット|ジュール|電力(?!会社)|電圧|合成抵抗|逆数公式|逆数の和|磁界|磁場|フレミング|電磁誘導|誘導電流|右ねじ|起電力|加速度|ニュートン|運動エネルギー|位置エネルギー|力学的エネルギー|仕事率|慣性|等速直線|作用・?反作用|(?<![A-Za-z])Pa\b|F＝ma|F=ma|レンツ|スネル|屈折率/;
check(
  '【単元】中学受験の理科に、中2〜高校の物理（電圧・Ω・オームの法則・磁界・フレミング・電磁誘導・加速度・エネルギー）が出ている',
  L.filter((l) => l.subject === 'rika' && (l.examType ?? 'chugaku') !== 'koko')
    .filter((l) => {
      const texts: unknown[] = [l.title, l.description, l.intro, ...(l.keyPoints ?? [])];
      for (const sec of (l.sections ?? []) as any[]) {
        texts.push(sec.heading, sec.body);
        const fig = sec.figureId ? getLessonFigure(sec.figureId) : null;
        if (fig) texts.push(JSON.stringify(fig));
      }
      for (const t of (l.trapExamples ?? []) as any[]) texts.push(t.question, t.trapExplanation, t.correctAnswer, t.correctExplanation);
      return texts.some((t) => CHUGAKU_PHYS_NG.test(String(t ?? '')));
    })
    .map((l) => l.id),
);
check(
  '【問題集】中学受験の理科に、中2〜高校の物理（電圧・Ω・オームの法則・磁界・フレミング・電磁誘導・加速度・エネルギー）が出ている',
  (Q as any[])
    .filter((q) => q.subject === 'rika' && (q.examType ?? 'chugaku') !== 'koko')
    .filter((q) =>
      [...ELEM_FIELDS, 'questionReading', 'answerReading'].some((k) => CHUGAKU_PHYS_NG.test(String(q[k] ?? ''))) ||
      ((q.choices ?? []) as unknown[]).some((c) => CHUGAKU_PHYS_NG.test(String(c))) ||
      ((q.subQuestions ?? []) as any[]).some((s) => ['question', 'answer', 'explanation'].some((k) => CHUGAKU_PHYS_NG.test(String(s[k] ?? '')))),
    )
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

// 上の検査は問題文と答えしか見ていなかったので、
// 「問題文は中学範囲なのに、解説だけが高校の記号」という抜けがあった。
//
// 2026/9/16、ユーザーの「記号の違いも確認して」という指摘で調べたところ113問見つかった。
// たとえば「赤玉4個・白玉3個から2個取り出す確率」という中学範囲の問題の解説に
// 「7C2 = (7×6)/(2×1) = 21」とだけ書いてあり、中学生には式が読めなかった。
// 20問は全員に出ていたので中学範囲の書き方（順番をつけてかけ算し、
// 選んだ個数の並べ方でわる）に書き直し、93問は maxOnly なので
// 問題文に【高校先取り】を付け、ひっかけ注意に「高校入試には出ない」と明記した。
//
// ⚠️ この検査は解説・ヒント・覚え方・ひっかけまで全部の欄を見る。
//   平方根のときと同じで、問題文と答えだけ見ても取りこぼす。
// ⚠️ ただし sin/cos などを全部の欄に広げてはいけない。
//   「中学では三平方で解くが、高校ではsinを使うと一発」というコツの欄が118件あり、
//   これは誤りではなくむしろ良い説明なので拾ってはいけない。
//   全部の欄を見てよいのは、下の「中学ではまず使わない書き方」だけに限る。
// ⚠️ 座標の点 C(5,14) と化学反応式の 2Cu・2Cl を拾わないための決まり：
//   C(…) はうしろに ＝ か 通り が続くときだけ組み合わせとみなし、
//   nCr 型は「数字 C 数字」に限る（C のうしろが英字なら化学式）。
const HS_NOTATION =
  /(?<![A-Za-z])C\(\s*[0-9]+\s*,\s*[0-9]+\s*\)\s*(?:[=＝]|通り)|(?<![A-Za-z])[0-9]+C[0-9]|\bmod\s*[0-9]|≡[^\n]{0,12}\(\s*mod|合成関数|数学的帰納法|フェルマーの小定理|中国剰余定理|二項定理/;
check(
  '中学生向けの問題の解説に、印なしで高校の記号が出ている',
  (Q as any[])
    .filter((q) => q.subject === 'sansu' || q.subject === 'rika')
    .filter((q) => (q.examType ?? 'chugaku') === 'koko' || /^j/.test(String(q.grade ?? '')))
    .filter((q) => !/【高校先取り】|先取り|高校範囲/.test(String(q.question ?? '')))
    .filter((q) =>
      HS_NOTATION.test(
        [q.question, q.answer, q.hint, q.explanation, q.memoryTip, q.pitfall]
          .map((x) => String(x ?? '')).join('\n')))
    .map((q) => q.id),
);

// 「解くのに高校の知識が要る」のに印がついていないか。
//
// 2026/9/16、ユーザーの「学年間違いも洗い出して」という指摘で調べたところ97問見つかった。
// 上の2つの検査では、①問題文と答えしか見ない ②見る記号が限られている、という
// 2つの穴があり、等差数列・積分・三角比・判別式・微分・Σ・ベクトルが素通りしていた。
// うち11問は maxOnly ですらなく、全員に出ていた。
//
// ⚠️ 見る欄は「解くのに必要な欄」＝問題文・答え・ヒントだけに限る。
//   解説やコツの欄まで広げると87問出るが、その大半は
//   「中学では三平方で解くが、高校ではsinを使うと一発」という**正当な紹介**である。
//   これは誤りではなくむしろ良い説明なので、拾ってはいけない。
const HS_SOLVE =
  /Σ\s*[[(_a-zA-Z]|∫|等比数列|等差数列|漸化式|\bsin\b|\bcos\b|\btan\b|正弦定理|余弦定理|微分|導関数|増減表|極大値|極小値|判別式|(?<![a-z])log\b|ベクトル|行列/;
check(
  '中学生向けの問題で、解くのに高校の知識が要るのに印がない',
  (Q as any[])
    .filter((q) => q.subject === 'sansu' || q.subject === 'rika')
    .filter((q) => (q.examType ?? 'chugaku') === 'koko' || /^[ej]/.test(String(q.grade ?? '')))
    .filter((q) => !/【高校先取り】|先取り|高校範囲/.test(String(q.question ?? '')))
    .filter((q) => HS_SOLVE.test([q.question, q.answer, q.hint].map((x) => String(x ?? '')).join('\n')))
    .map((q) => q.id),
);

// 高校受験の数学に、高校で習う統計・確率の用語が印なしで出ていないか。
//
// 同じ種類の失敗の7回目（小学生に√、中学生にsin/cos、中学受験にnCr、
// 解説だけ高校記号、等差数列・積分、中学受験の理科に高校生物、そして今回）。
// 期待値・分散・標準偏差・相関係数・正規分布・二項分布は高校数学の内容で、
// 高校入試には出ない。ところが15問に印がなく、うち3問は
// 課金に関係なく全員に出ていた。
// 2026/9/16に、全員に出る3問は中学範囲（平均値・中央値・範囲・四分位範囲）へ
// 書き直し、Maxプラン限定の12問には【高校先取り】を付けて0件にした。
//
// ⚠️ 教科を sansu にしぼること。「分散」は理科では光の分散（プリズム）として、
//   社会では工場の分散として正当に使われる。教科をしぼらないと33件出て、
//   そのうち本物は15件だった。
// ⚠️ 見る欄は問題文・答え・ヒントに限らず、覚え方・ひっかけ注意まで見る。
//   実際、問題文を書き直したあとに覚え方の欄へ「期待値は金額×確率」が残っていた。
const HS_STAT = /期待値|標準偏差|分散|相関係数|正規分布|二項分布/;
check(
  '【問題集】高校受験の数学に、高校で習う統計の用語が印なしで出ている',
  (Q as any[])
    .filter((q) => q.subject === 'sansu')
    .filter((q) => (q.examType ?? 'chugaku') === 'koko' || /^j/.test(String(q.grade ?? '')))
    .filter((q) => !/【高校先取り】|先取り|高校範囲/.test(String(q.question ?? '')))
    .filter((q) =>
      HS_STAT.test(
        [q.question, q.answer, q.hint, q.explanation, q.memoryTip, q.pitfall]
          .map((x) => String(x ?? ''))
          .join('\n'),
      ),
    )
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
  // ⚠️記述式は「模範解答」そのものが解説にあたり、小問には小問ごとの解説がある。
  //   解説の欄だけを測ると、実際は十分に説明されている問題まで薄いと数えてしまう。
  //   画面に出る文章の総量（解説＋長い模範解答＋小問の解説）で測る。
  //
  // ⚠️2026/9/16：この直し方は「80字以下」の検査だけに入っていて、
  //   「理由まで書けていない」のほうは解説の欄しか見ていなかった。
  //   そのため、問題文が「なぜ〜か説明しなさい」で**答えの欄に理由が全部書いてある**
  //   記述問題（wcr_002 など）まで「理由が書けていない」と数えていた。
  //   同じ直しは、同じ材料を測るすべての検査に当てること。
  const answer = String(q.answer ?? '');
  const subText = ((q.subQuestions ?? []) as any[])
    .map((sub) => String(sub.explanation ?? '')).join('\n');
  const shownText = `${e}\n${answer.length > 60 ? answer : ''}\n${subText}`;
  const shown = e.length + (answer.length > 60 ? answer.length : 0) + subText.length;
  const words = shownText.replace(/[0-9０-９＋－×÷＝=()（）。、,.\s+\-*/^²³°%a-zA-Z]/g, '');
  if (shown <= 80) qShort.push(`${q.id}(${shown}字)`);
  if (!Q_WHY.test(shownText) || words.length < 12) qThin.push(`${q.subject}/${q.id}`);
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

// ⚠️ 上の検査は問題集（Q）しか見ていなかったため、単元（L）の本文に入りこんだ
//   ハングル「친しい友人」（正しくは「親しい」）を何度も素通りしていた。
//   2026/9/16にユーザーの指摘で発覚。単元側も同じ目で見る。
const alienLesson: string[] = [];
for (const l of L) {
  const alien = [...lessonText(l)].filter((c) => ALIEN_SCRIPT.test(c));
  if (alien.length) alienLesson.push(`${l.id}(${[...new Set(alien)].join('')})`);
}
check('【単元】本文によその国の文字がまぎれている', alienLesson);

// 中国の簡体字がまぎれこんでいないか。
//
// 2026/9/16、画面に「発音记号」（正しくは記号）「燃焼时に」（正しくは時に）と
// 中国語の簡体字が出ていた。日本語と同じ漢字を使う言語なので、
// 「よその国の文字」の検査（文字体系で弾く方式）ではまったく引っかからない。
//
// ⚠️ 日本語にもある漢字を1つでも入れると、正しい本文が大量に誤検出される。
//   最初のリストには 与（1618回）・写（1158回）・随（406回）・儿（ひとあし。部首名として正当）が
//   まじっていて使い物にならなかった。
//   **リストを足したら、必ずデータ全体での出現回数を数えて確かめること。**
//   何百回も出てくる字は、まちがいなく正しい日本語である。
const CHINESE_ONLY = new Set(
  ('汉语说话讲词谁请读课谢试认论议评计记讨训译诗谈调证识该详讯许设访诉谓谋谱谅' +
   '们从众亿仅优传价债伤仓侨俭这进过远还达迁违运选递' +
   '东车马鸟鱼见贝页门问间闻开关闭长张帐账时实习' +
   '热爱头际农业产权义资费贵买卖钱银铁钢级纪经济营养卫药师纸红绿蓝样标备战线终续绝练' +
   '击图馆员团园边么怎虽为给应发变对难观现场电龙岁风飞乐专术无' +
   '铜镜锅钟铃锦钉钩键锻链镇钥锁饭饮饱饲馒' +
   '纲纯纷纹组细织绍络统绕绣继绩维绪轮软转轻载较辆输铺锐错' +
   '妈爷奶爸闹阅阔队阴阳阶陆陈险隐乡丛丝').split(''),
);
const chineseBad: string[] = [];
const chineseIn = (t: string) => [...new Set([...t].filter((c) => CHINESE_ONLY.has(c)))];
for (const q of Q as any[]) {
  const fields: Array<[string, unknown]> = [
    ['問題文', q.question], ['答え', q.answer], ['ヒント', q.hint],
    ['解説', q.explanation], ['覚え方', q.memoryTip], ['ひっかけ', q.pitfall],
    ['課題文', q.passage],
  ];
  for (const [name, v] of fields) {
    const hit = chineseIn(String(v ?? ''));
    if (hit.length) chineseBad.push(`${q.id}(${name}:${hit.join('')})`);
  }
  for (const sub of (q.subQuestions ?? []) as any[]) {
    const hit = chineseIn(`${sub.prompt ?? ''}${sub.answer ?? ''}${sub.explanation ?? ''}`);
    if (hit.length) chineseBad.push(`${q.id}:${sub.label}(${hit.join('')})`);
  }
}
for (const l of L) {
  const hit = chineseIn(lessonText(l));
  if (hit.length) chineseBad.push(`${l.id}(${hit.join('')})`);
}
check('【問題集・単元】中国語の簡体字がまぎれている', chineseBad);

// 日本語そのものが壊れていないか。
//
// 2026/9/16、ユーザーの「日本語も合ってるか確認して」という指摘で全数を調べた。
//   ・文字化け1件 … 「相当範(U+FFFD)囲」。範囲の字がこわれて画面に出ていた
//   ・半角カタカナ1件 … 理科の表で「えら･皮膚」の中点が半角だった
//   ・かぎかっこの数が合わない3件 … ee2_133 の問題文に余分な「、
//     koko_kiso_shakai_b_35 の覚え方に閉じ忘れ、rika_s430 に余分な】
// どれも tsc も expo export も通るので、型検査では絶対に見つからない。
const MOJIBAKE = new RegExp(String.fromCharCode(0xfffd));
const HANKAKU_KANA = /[\uff61-\uff9f]/;
const jpBroken: string[] = [];
const jpKana: string[] = [];
const jpQuote: string[] = [];
const cnt = (t: string, c: string) => t.split(c).length - 1;
const jpItems: Array<[string, string]> = [];
for (const q of Q as any[]) {
  const fields: Array<[string, unknown]> = [
    ['問題文', q.question], ['答え', q.answer], ['ヒント', q.hint],
    ['解説', q.explanation], ['覚え方', q.memoryTip], ['ひっかけ', q.pitfall], ['課題文', q.passage],
  ];
  for (const [name, v] of fields) if (v) jpItems.push([`${q.id}(${name})`, String(v)]);
  for (const sub of (q.subQuestions ?? []) as any[])
    jpItems.push([`${q.id}:${sub.label}`, `${sub.prompt ?? ''}\n${sub.answer ?? ''}\n${sub.explanation ?? ''}`]);
}
for (const l of L) jpItems.push([`${l.id}(単元)`, lessonText(l)]);
for (const [id, t] of jpItems) {
  if (MOJIBAKE.test(t)) jpBroken.push(id);
  if (HANKAKU_KANA.test(t)) jpKana.push(id);
  // ⚠️ 原稿用紙・作文・漢文の単元は、かぎかっこそのものを説明するので数が合わない。
  //   これは正当なので、合否には数えず一覧だけ出す。
  for (const [o, c] of [['【', '】'], ['「', '」'], ['『', '』']])
    if (cnt(t, o) !== cnt(t, c)) { jpQuote.push(`${id} ${o}${cnt(t, o)} ${c}${cnt(t, c)}`); break; }
}
check('【問題集・単元】文字化けした文字が画面に出ている', jpBroken);
check('【問題集・単元】半角カタカナが画面に出ている', jpKana);
info('かぎかっこ・すみつきかっこの数が合わない（要目視）', jpQuote);

// 化学式・単位に全角の数字を使っていないか。
//
// 2026/9/16、ユーザーの「記号の違いも確認して」という指摘で調べた。
// イオンの単元（lessons-koko-rika-ext08）が化学式の数字をぜんぶ全角で書いており、
// 全角数字は右上も右下も同じ高さに出るため、画面では
//   SO４２− が「SO42−」としか読めず、4が原子の数で2が価数だと区別できなかった。
// しかもこの単元は自分で「2の位置が前か右下かで意味がまったく変わる」と教えている。
// 教えている区別を、表記そのものが表せていないという失敗である。
// 体積の単位も cm３（正しくは cm³）が125か所あった。
//
// 直し方：原子の数は下付き（H₂O・SO₄）、価数は上付き（Cu²⁺・SO₄²⁻）、
// 単位の3乗・2乗も上付き（cm³）。理科の他の12ファイルは元からこの書き方なので、
// 外れていた2ファイルを本来の書き方にそろえた形になる。
//
// ⚠️ 数字が符号の直前にあっても「原子の数」のことがある（Cl₂⁻・H₂⁺・NH₄⁺・NO₃⁻）。
//   機械で上付きに寄せると意味が変わるので、必ず原文を読んでから決めること。
// ⚠️ 「誤り：Na¹⁺、Mg⁺²」のように、わざと誤った書き方を見せている本文がある。
//   そこは誤ったまま残すのが正しい（上付き・下付きに直すのは形だけ）。
const ZENKAKU_FORMULA = /[A-Za-z)][０-９]/g;
const zenFormula: string[] = [];
for (const [id, t] of jpItems)
  for (const m of t.matchAll(ZENKAKU_FORMULA)) zenFormula.push(`${id}「${m[0]}」`);
for (const l of L) {
  for (const s of ((l as any).sections ?? []) as any[]) {
    const f = s.figureId ? getLessonFigure(s.figureId) : null;
    if (!f) continue;
    for (const m of JSON.stringify(f).matchAll(ZENKAKU_FORMULA))
      zenFormula.push(`${l.id}:${s.figureId}「${m[0]}」`);
  }
}
check('【問題集・単元】化学式や単位に全角の数字を使っている', zenFormula);

// 面積・体積の単位に「組文字」（㎠ ㎤ ㎡ ㎢）を使っていないか。
//
// 2026/9/16、ユーザーの「重複・矛盾も確認して」という指摘で調べていて見つかった。
// 同じ問題が小5と小6の両方にあったのに重複検査を素通りしていて、原因が
// 答えの書き方のちがいだった（小5は「314cm²」、小6は「314㎠」）。
// 組文字は1文字の中に2〜3文字を押しこんだ互換用の文字で、端末やフォントに
// よっては小さくつぶれて読めない。しかも機械での突き合わせが効かなくなる。
// 全体では cm² が4,067件、㎠ が177件で、多数派は明らかに cm² のほうだった。
// 291件を cm²・cm³・m²・km² に直した。
const KUMIMOJI = /[㎠㎤㎡㎥㎢㎟㎜㎝㎞㎏㎎㎖㎗㏄]/g;
const kumi: string[] = [];
for (const [id, t] of jpItems)
  for (const m of t.matchAll(KUMIMOJI)) kumi.push(`${id}「${m[0]}」`);
check('【問題集・単元】単位に組文字（㎠など）を使っている', kumi);

// 数式の書き方（LaTeX）が、画面にそのまま出ていないか。
//
// 2026/9/16に見つかった。画面は素の文字として描くので、
// `Σ_{k=1}^{n}k` は「Σ_{k=1}^{n}k」としか出ず、生徒には何のことか分からない。
// 115か所あり、`Σ[k=1〜n]`・`∫[a,b]`・`2^(n-1)`・`F(k+1)` という、
// コーパスの他の場所ですでに使っている書き方にそろえた。
// マークダウンの ** で同じ失敗をしているので、これは3回目である。
const LATEX = /[\^_]\{[^}]{1,14}\}|\\(?:frac|sqrt|times|div|cdot|left|right|begin|end|mathrm)\b|\$[^$\n]{1,40}\$/g;
const latexBad: string[] = [];
for (const [id, t] of jpItems)
  for (const m of t.matchAll(LATEX)) latexBad.push(`${id}「${m[0]}」`);
check('【問題集】画面に出る文に数式の書き方（LaTeX）が残っている', latexBad);

// 自社のサービス名や、よそのプロダクトの話が教材にまぎれていないか。
//
// 2026/9/16、ユーザーから「これは中学高校受験のためのものなので、
// 建設や官公庁の話とは切り離してほしい」と言われて調べた。
// 国語の敬語の単元に「Zaibase の山田と申します。」という例文があり、
// **受験教材の中に自社サービス名が出ていた**。
// 敬語の例文に会社名を出す必要はまったくなく、学校名で十分である。
//
// ahiru は中学受験・高校受験の教材であって、Zaibase建設や法律相談とは別のもの。
// 教材の中に自社名・決済サービス名・他プロダクトの話を書かないこと。
//
// ⚠️ 「建設」「工事」という語そのものは弾かない。社会科では建設業が
//   第二次産業の例として正当に出てくる（産業別人口の問題など）。
//   弾くのは固有名詞だけにする。
const OWN_BRAND = /Zaibase|ザイベース|zaisai|ahiru（|RevenueCat|Stripe|Firebase|Vercel|zaibase\.group/gi;
const brandBad: string[] = [];
for (const [id, t] of jpItems)
  for (const m of t.matchAll(OWN_BRAND)) brandBad.push(`${id}「${m[0]}」`);
check('【問題集・単元】教材に自社サービス名が出ている', brandBad);


// 学年別の問題セットに、その学年より上で習う内容が入っていないか。
//
// 2026/9/16、ユーザーの「中学高校の学年などの間違いも確認して」という指摘で見つかった。
// 小5の `grade_e5_sansu_47` が「直径20cmの円の面積」を出していたが、
// 円の面積は小6の内容である。しかも小6の `grade_e6_sansu_24` に
// まったく同じ問題（同じ数値・同じ答え）がすでにあった。
// 学年ちがいと重複が同時に起きていたことになる。
//
// ⚠️ この検査は `grade_e*` の学年別セットだけに当てる。
//   公式集（koushiki_*）は中学受験の発展内容を意図して先取りしているので、
//   同じものさしで測ると正当な教材を大量に誤検出する（円の面積だけで20件出た）。
const GRADE_TOPIC: Array<[string, RegExp, string[]]> = [
  ['円の面積（小6）', /円の面積|半径\s*×\s*半径\s*×\s*円周率/, ['e1', 'e2', 'e3', 'e4', 'e5']],
  ['拡大図・縮図（小6）', /拡大図|縮図/, ['e1', 'e2', 'e3', 'e4', 'e5']],
  ['比例・反比例（小6）', /反比例/, ['e1', 'e2', 'e3', 'e4', 'e5']],
  ['分数のかけ算・わり算（小6）', /分数のかけ算|分数のわり算/, ['e1', 'e2', 'e3', 'e4', 'e5']],
  ['対称な図形（小6）', /線対称|点対称/, ['e1', 'e2', 'e3', 'e4', 'e5']],
  // ⚠️ 相似は、中学受験では小6で正面から教える（拡大図・縮図の発展として扱う）。
  //   だから e6 は対象にしない。小5以下に出てきたら本物のまちがい。
  ['相似（中3。中学受験でも小6から）', /相似/, ['e1', 'e2', 'e3', 'e4', 'e5']],
  ['三平方の定理（中3）', /三平方の定理/, ['e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'j1', 'j2']],
];
const gradeOver: string[] = [];
for (const q of Q as any[]) {
  // ⚠️ 算数の単元表なので算数だけに当てる。国語の対義語「拡大 ⇔ 縮小」の解説が
  //   他教科とのつながりを紹介するのは正当なので、拾ってはいけない。
  if (!/^grade_[ej]\d_/.test(String(q.id)) || q.subject !== 'sansu') continue;
  const t = [q.question, q.answer, q.hint, q.explanation, q.memoryTip, q.pitfall]
    .map((x) => String(x ?? '')).join('\n');
  for (const [name, re, grades] of GRADE_TOPIC)
    if (grades.includes(String(q.grade ?? '')) && re.test(t)) gradeOver.push(`${q.id}(${q.grade}) ${name}`);
}
check('【問題集】学年別の問題に、その学年より上で習う内容が出ている', gradeOver);

// 歴史の年号が、出来事と食いちがっていないか。
//
// 2026/9/16、ユーザーの「数字も確認してください」という指摘で調べた。
// `koko_shakai_04_history_modern` に「サンフランシスコ平和条約＝1952年独立回復」とあり、
// 同じ単元の別の場所では「1951年署名」と書かれていて食いちがっていた。
// 条約は1951年に署名し、1952年に発効して独立を回復した、と書き分けるのが正しい。
//
// ⚠️ 判定は「出来事の直後に、間に何も入れずに年号が書かれている形」だけに限る。
//   「794年に都を平城京から平安京に移した」のように年号が別の語にかかっている文まで
//   拾うと、正しい本文が大量に誤検出される（実際にゆるい条件では242件出た）。
const YEAR_FACTS: Array<[string, string[]]> = [
  ['大化の改新', ['645']], ['平城京', ['710']], ['平安京', ['794']],
  ['遣唐使の停止', ['894']], ['遣唐使の廃止', ['894']],
  ['大宝律令', ['701']], ['墾田永年私財法', ['743']],
  ['文永の役', ['1274']], ['弘安の役', ['1281']], ['承久の乱', ['1221']],
  ['建武の新政', ['1333', '1334']], ['応仁の乱', ['1467']],
  ['桶狭間の戦い', ['1560']], ['本能寺の変', ['1582']], ['関ヶ原の戦い', ['1600']],
  ['島原・天草一揆', ['1637']], ['島原の乱', ['1637']],
  ['日米和親条約', ['1854']], ['日米修好通商条約', ['1858']], ['大政奉還', ['1867']],
  ['大日本帝国憲法', ['1889']], ['日清戦争', ['1894', '1895']], ['日露戦争', ['1904', '1905']],
  ['関東大震災', ['1923']], ['満州事変', ['1931']], ['日中戦争', ['1937']],
  ['サンフランシスコ平和条約', ['1951', '1952']],
  ['東京オリンピック', ['1964', '2021']],
];
// ⚠️ 単元の trapExamples は「わざと誤った答え」を見せて教える欄なので、
//   年号の検査からは必ず外す（実際に「大化の改新（701年）」という誤答例を拾った）。
const yearItems: Array<[string, string]> = jpItems.filter(([id]) => !id.endsWith('(単元)'));
for (const l of L) {
  const t = [l.title, l.description, l.intro, ...(l.keyPoints ?? []),
    ...(l.sections ?? []).map((sec: any) => `${sec.heading}\n${sec.body}`)].filter(Boolean).join('\n');
  yearItems.push([`${l.id}(単元)`, t]);
}
const yearBad: string[] = [];
for (const [ev, ok] of YEAR_FACTS) {
  for (const [id, t] of yearItems) {
    const pats = [
      new RegExp(`${ev}\\s*[（(]\\s*(?<![0-9])([0-9]{3,4})\\s*年`, 'g'),
      new RegExp(`${ev}(?:は|が|＝|:|：)\\s*(?<![0-9])([0-9]{3,4})年`, 'g'),
    ];
    for (const re of pats)
      for (const m of t.matchAll(re))
        if (!ok.includes(m[1])) yearBad.push(`${id} ${ev}=${m[1]}年(正:${ok.join('・')})`);
  }
}
check('【問題集・単元】歴史の年号が出来事と食いちがう', yearBad);

// 全教科の「決まった事実」が、本文と食いちがっていないか。
//
// 2026/9/16、ユーザーの「他の科目、全科目に間違いがあるかないか確認を」という
// 指摘で、教科ごとに正解表を作って全20,863か所を照合した。結果は0件だったが、
// 同じ検査を残しておけば、これから足す問題で取りちがえたときに止められる。
//
// ⚠️ 判定は「すぐ隣に書かれた組」だけを見る。離れた語まで拾うと、
//   正しい本文が大量に誤検出される（ゆるい条件では340件出て、本物は0件だった）。
type FactRule = { label: string; table: Record<string, string[]>; pats: (k: string) => RegExp[] };
const FACT_RULES: FactRule[] = [
  {
    label: '社会：県庁所在地',
    table: {
      北海道: ['札幌'], 岩手県: ['盛岡'], 宮城県: ['仙台'], 茨城県: ['水戸'], 栃木県: ['宇都宮'],
      群馬県: ['前橋'], 埼玉県: ['さいたま'], 神奈川県: ['横浜'], 石川県: ['金沢'], 山梨県: ['甲府'],
      愛知県: ['名古屋'], 三重県: ['津'], 滋賀県: ['大津'], 兵庫県: ['神戸'], 島根県: ['松江'],
      香川県: ['高松'], 愛媛県: ['松山'], 沖縄県: ['那覇'],
    },
    // 「？」や「」がまじる問いかけの文は見ない
    pats: (k) => [new RegExp(`${k}(?:の県庁所在地|の道庁所在地)(?:は|＝|:|：)\\s*([一-龥ぁ-んァ-ヶ]{2,6}?)市`, 'g')],
  },
  {
    label: '理科：元素記号',
    table: {
      水素: ['H'], 酸素: ['O'], 窒素: ['N'], 炭素: ['C'], 硫黄: ['S'], ナトリウム: ['Na'],
      塩素: ['Cl'], カルシウム: ['Ca'], 鉄: ['Fe'], 銅: ['Cu'], アルミニウム: ['Al'],
      亜鉛: ['Zn'], マグネシウム: ['Mg'], 銀: ['Ag'], 金: ['Au'], カリウム: ['K'], 鉛: ['Pb'],
    },
    // ⚠️「二酸化炭素（X）」の中の「炭素」、「亜鉛（Zn）」の中の「鉛」を拾わないよう、
    //   直前が漢字・カタカナでないことを条件にする。X・Y・Z は穴うめなので除く。
    pats: (k) => [
      new RegExp(`(?<![一-龥ァ-ヶー])${k}(?:の元素記号|の記号)(?:は|＝|:|：)\\s*(?![XYZ][^a-z])([A-Z][a-z]?)`, 'g'),
      new RegExp(`(?<![一-龥ァ-ヶー])${k}\\s*[（(]\\s*(?![XYZ][)）])([A-Z][a-z]?)\\s*[)）]`, 'g'),
    ],
  },
  {
    label: '理科：化学式',
    table: {
      水: ['H2O', 'H₂O'], 二酸化炭素: ['CO2', 'CO₂'], 塩化ナトリウム: ['NaCl'],
      アンモニア: ['NH3', 'NH₃'], 塩酸: ['HCl'], 硫酸: ['H2SO4', 'H₂SO₄'],
      水酸化ナトリウム: ['NaOH'], 酸化銅: ['CuO'], 酸化マグネシウム: ['MgO'],
    },
    pats: (k) => [new RegExp(`${k}(?:の化学式|の分子式)(?:は|＝|:|：)\\s*([A-Za-z0-9₀-₉]{2,8})`, 'g')],
  },
  {
    label: '英語：不規則動詞',
    table: {
      go: ['went'], come: ['came'], see: ['saw'], eat: ['ate'], take: ['took'], give: ['gave'],
      write: ['wrote'], speak: ['spoke'], break: ['broke'], buy: ['bought'], bring: ['brought'],
      teach: ['taught'], catch: ['caught'], think: ['thought'], make: ['made'], find: ['found'],
      run: ['ran'], swim: ['swam'], sing: ['sang'], drink: ['drank'], begin: ['began'],
      know: ['knew'], grow: ['grew'], throw: ['threw'], leave: ['left'], keep: ['kept'],
      sleep: ['slept'], feel: ['felt'], meet: ['met'],
    },
    // ⚠️ 活用表（go - went - gone）の形だけを見る。区切りの前後に空白を必ず求めると、
    //   "take-make-waste" のような英語のひとかたまりの語を拾わずにすむ。
    pats: (k) => [new RegExp(`\\b${k}\\s+[-–—→⇒]\\s+([a-z]+)\\s+[-–—→⇒]\\s+[a-z]+`, 'g')],
  },
  {
    label: '英語：不規則な複数形',
    table: {
      man: ['men'], woman: ['women'], child: ['children'], foot: ['feet'], tooth: ['teeth'],
      mouse: ['mice'], leaf: ['leaves'], knife: ['knives'], life: ['lives'], wife: ['wives'],
      city: ['cities'], country: ['countries'], baby: ['babies'], potato: ['potatoes'],
    },
    pats: (k) => [new RegExp(`\\b${k}\\s*[-–—→⇒]\\s*([a-z]+)`, 'g')],
  },
  {
    label: '社会：世界の首都',
    table: {
      アメリカ: ['ワシントン', 'ワシントンD.C.', 'ワシントンDC'], イギリス: ['ロンドン'],
      フランス: ['パリ'], ドイツ: ['ベルリン'], イタリア: ['ローマ'], ロシア: ['モスクワ'],
      中国: ['ペキン', '北京'], 韓国: ['ソウル'], ブラジル: ['ブラジリア'],
      オーストラリア: ['キャンベラ'], エジプト: ['カイロ'], カナダ: ['オタワ'], タイ: ['バンコク'],
    },
    pats: (k) => [new RegExp(`${k}の首都(?:は|＝|:|：)\\s*(?!どこ|なに|何|どちら)([^\\s。、（(]{2,10}?)(?:です|である|。|、)`, 'g')],
  },
];
const factBad: string[] = [];
for (const rule of FACT_RULES)
  for (const [key, ok] of Object.entries(rule.table))
    for (const re of rule.pats(key))
      for (const [id, t] of yearItems)
        for (const m of t.matchAll(re)) {
          const got = (m[1] ?? '').trim();
          const i = m.index ?? 0;
          const around = t.slice(Math.max(0, i - 45), i + 55);
          // まちがいを「まちがい」として教えている本文は見ない
          if (!got || ok.includes(got) || /誤り|まちが|間違|ではない|×|✗/.test(around)) continue;
          factBad.push(`${id} ${rule.label} ${key}→${got}(正:${ok.join('・')})`);
        }
check('【問題集・単元】教科の決まった事実と食いちがう', factBad);

// 問題集の日本語の中に、書きかけの英単語が残っていないか。
//
// 単元（L）側には前から同じ検査があったが、問題集（Q）側には無かった。
// 2026/9/16にユーザーの指摘で全数を見たところ、残っていたのは
// SDGs・NIEs・mRNA・iPS・Brexit・hPa・RuBisCO のような略語と、
// mod・gcd・arcsin・xmol のような数学・化学の記号だけだった。
//
// ⚠️ 弾きすぎないための決まり：
//   ・大文字を1つでも含む語は、略語・化学式・図形の頂点なので見ない
//     （SDGs・NaOH・AaBb・cosA・AMa など）
//   ・3文字以下も見ない（mod・gcd・abc・xcm のような記号）
//   ・数学の関数名は許す
//   こうすると、本物の事故（「technique は使わない」「short く書きとめる」
//   「health を損なう」）だけが残る。
const Q_LEAK = /[ぁ-んァ-ヶ一-龥][ 　]?([a-z]{4,})[ 　]?[ぁ-んァ-ヶ一-龥]/g;
const Q_LEAK_OK = /^(?:arcsin|arccos|arctan|sinh|cosh|tanh|xmol|ymol|zmol|aabb|food)$/;
const qLeak: string[] = [];
for (const q of Q as any[]) {
  if (q.subject === 'eigo') continue;
  const fields: Array<[string, unknown]> = [
    ['問題文', q.question], ['答え', q.answer], ['ヒント', q.hint],
    ['解説', q.explanation], ['覚え方', q.memoryTip], ['ひっかけ', q.pitfall], ['課題文', q.passage],
  ];
  for (const [name, v] of fields) {
    for (const m of String(v ?? '').matchAll(Q_LEAK)) {
      if (Q_LEAK_OK.test(m[1])) continue;
      qLeak.push(`${q.id}(${name}:${m[1]})`);
      break;
    }
  }
}
info('【問題集】日本語の中に英単語が挟まっている（要目視）', qLeak);

// 画面に出る文にマークダウン記法が混ざっていないか。
//
// 解説・ヒント・問題文・答えはすべて素の <Text> で描いているので、
// マークダウンは解釈されず ** がそのまま画面に出る。
// 2026/9/15、解説を書き直したときに強調のつもりで ** を書いてしまい、
// 11行に混入した（figure の steps では以前にも同じ失敗をしている）。
//
// 2026/9/16に方針が変わった。ユーザーから「大切なところ・テストによく出るところは
// 太字か赤字に」と指示され、components/RichText.tsx を作って **強調** を太字の赤で描くようにした。
// 解説・ヒント・覚え方・ひっかけ・小問の解説・単元本文・要点・ひっかけ例題は rich() を通る。
// だからこれらの欄では ** を使ってよい。見張るのは「閉じ忘れ（** の数が奇数）」だけになった。
//
// ⚠️ 問題文・答え・小問の設問と答えは rich() を通らない。答えは採点（utils/grading.ts）の
//    照合にそのまま使われるので、** が入ると正解が × になる。ここは今までどおり1つでも出たら止める。
const odd = (s: unknown) => String(s ?? '').split('**').length % 2 === 0;
const has = (s: unknown) => String(s ?? '').includes('**');
const mdBad: string[] = [];
for (const q of Q as any[]) {
  if (has(q.question)) mdBad.push(`${q.id}(問題文)`);
  if (has(q.answer)) mdBad.push(`${q.id}(答え)`);
  const richFields: Array<[string, unknown]> = [
    ['ヒント', q.hint], ['解説', q.explanation], ['覚え方', q.memoryTip], ['ひっかけ', q.pitfall],
  ];
  for (const [name, v] of richFields) if (odd(v)) mdBad.push(`${q.id}(${name}:閉じ忘れ)`);
  for (const sub of (q.subQuestions ?? []) as any[]) {
    if (has(sub.prompt) || has(sub.answer)) mdBad.push(`${q.id}:${sub.label}(設問か答え)`);
    if (odd(sub.explanation)) mdBad.push(`${q.id}:${sub.label}(解説:閉じ忘れ)`);
  }
}
check('【問題集】採点や問題文に ** が入っている／強調の ** が閉じていない', mdBad);

const mdLessonBad: string[] = [];
for (const l of L) {
  if (has(l.title) || has(l.description) || has(l.intro)) mdLessonBad.push(`${l.id}(題名・説明・導入)`);
  for (const s of (l.sections ?? []) as any[]) if (odd(s.body) || has(s.heading)) mdLessonBad.push(`${l.id}(本文)`);
  for (const k of (l.keyPoints ?? []) as string[]) if (odd(k)) mdLessonBad.push(`${l.id}(要点)`);
  for (const t of (l.trapExamples ?? []) as any[]) {
    if (has(t.wrongAnswer) || has(t.correctAnswer)) mdLessonBad.push(`${l.id}(ひっかけの答え)`);
    if (odd(t.question) || odd(t.trapExplanation) || odd(t.correctExplanation)) mdLessonBad.push(`${l.id}(ひっかけ:閉じ忘れ)`);
  }
}
check('【単元】強調の ** が閉じていない／描けない欄に ** が入っている', [...new Set(mdLessonBad)]);

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
  ['出題の不備', /出題ミス|別解が生じ|解答欄を|とあるのは誤り/],
  ['書きかけ', /TODO|FIXME|とりあえず|仮に答え/],
  // 「問題のヒント答え11は間違い、正しくは13」のように、
  // 答えの欄が誤っていると本文で認めながら、欄を直していない書き置き。
  ['答えの欄への言い訳', /問題のヒント|ヒント答え|ヒントが.{1,15}としていたが/],
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

// 答えの欄と、解説の結びの数が食いちがっていないか。
//
// 2026/9/16、解説は正しく導いているのに答えの欄だけ古い値のまま、という問題が
// 5問見つかった（koko_moshi_sansu_09 2√10→4√5、同10 a=1/2→3/2、同41 2500→3000円、
// 同46 11→13、term1_2026_chugaku_sansu_048 3:7→5:11、koko_oyo_sansu_42 24→18cm³）。
// 画面には答えの欄が出るので、子どもは正しい解説を読んだうえで「答えが合わない」
// という一番こわい状態になる。
//
// 誤検出を避けるため、対象は「答えが1つの数だけ」の問題にしぼり、
// 解説の結び（【答え】…／答え：…）に その数が1つも出てこないときだけ拾う。
// 答えを2つ以上並べた問題は、解説が1つ目だけを言うのがふつうなので見ない。
const z2h = (s: string) => s.replace(/[０-９]/g, (c) => '0123456789'['０１２３４５６７８９'.indexOf(c)]);
const numsOf = (s: string) => (z2h(s).match(/\d+(?:\.\d+)?/g) ?? []).filter((x) => x !== '0');
const answerGap: string[] = [];
for (const q of Q as any[]) {
  const raw = String(q.answer ?? '').trim();
  if (/[\n、，：:／]|および|また|または/.test(raw)) continue;
  const an = numsOf(raw);
  if (an.length !== 1 || raw.length > 14) continue;
  const exp = z2h(explanationText(q));
  const ms = [...exp.matchAll(/【答え】\s*([^\n]{1,40})|(?:^|\n)答え\s*[：:]\s*([^\n]{1,40})/g)];
  if (ms.length !== 1) continue;
  const said = numsOf(ms[0][1] ?? ms[0][2] ?? '');
  if (!said.length || said.includes(an[0])) continue;
  answerGap.push(`${q.id}(欄:${raw})`);
}
check('【問題集】答えの欄と解説の結びが食いちがう', answerGap);

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

// 教科書（単元）の本文が、手順と例をなぞるだけで「なぜそのきまりなのか」を言っていないもの。
// 問題集の解説と同じ基準で測る。ユーザーから「問題を濃く書くなら教科書も同様で、
// 同等以上の品質にすべき」と指示された（2026/9/16）。
// 「四則計算はかけ算が先」と手順だけ書いてあり、なぜ先なのか（かけ算はまとまりを表すから）が
// 書かれていない単元が、5,664件中1,328件あった。
// 壊れているわけではないので0にはならないが、**減らしていく数字**として出す。増えたら後戻り。
// ⚠️ 本文の長さは intro を含めない。intro は「つかみ」であって説明ではない。
// ⚠️ 600字は「短いから薄い」の目安であって、長ければ濃いわけではない。理由の語も同時に見る。
const LESSON_WHY = /なぜ|理由|ので|ため|から(?:です|である|だ|。)|わけ|しくみ|仕組み|よって|したがって|だから|つまり|すなわち|ゆえに/;
const lessonThin = L.filter((l) => {
  const body = ((l.sections ?? []) as any[]).map((s) => String(s.body ?? '')).join('\n');
  return body.length <= 600 || !LESSON_WHY.test(body);
}).map((l) => `${l.subject}/${l.id}`);
info('【単元】本文が理由まで書けていない（減らしていく数字）', lessonThin, 3);
// ⚠️ 2026/9/16まで「？」と「！」を落としていなかったため、
//   「100以下の3の倍数は何個ありますか？」と「〜ありますか。」が
//   別の問題として数えられ、まったく同じ問題が3組すり抜けていた。
const qnorm = (x: string) => String(x ?? '').replace(/\s+|　/g, '').replace(/[。、．，！？!?・]/g, '');
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
// ⚠️ 2026/9/16に判定をしぼった。大文字を含む語（SDGs・hPa・RrYy・BtoC・AMa）と
//   3文字以下（xcm・mol）は、略語・記号・文字式で正当なので見ない。
//   小文字4文字以上だけを見ると、本物の事故（「満water になる」「both使われる」
//   「practiceする」「north 側」「競争relationshipにある」＝2026/9/16に5件発見）
//   だけが残る。外来語・ローマ字を教える単元は、英語を出すのが目的なので除く。
const LEAK = /[ぁ-んァ-ヶ一-龥][ 　]?([a-z]{4,})[ 　]?[ぁ-んァ-ヶ一-龥]/g;
const UNITS = /^(?:km|cm|mm|kg|mg|mL|dL|kL|ha|cc|pH|ppm|kWh)$/i;
const LEAK_LESSON_OK = /外来語|和製英語|ローマ字|カタカナ語/;
const latin = L.filter((l) => {
  if (l.subject === 'eigo') return false;
  if (LEAK_LESSON_OK.test(lessonText(l))) return false;
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
