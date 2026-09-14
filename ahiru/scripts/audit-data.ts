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
