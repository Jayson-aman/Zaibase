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
const WHY_WORD = /なぜ|だから|ので|ため|理由|わけ|から。|からで|という意味|つまり|もともと|考える|くらべ|比べ/;
const thinQuiz: string[] = [];
for (const [subj, secs] of Object.entries(FORMULAS))
  for (const sec of secs)
    for (const it of sec.items ?? [])
      for (const z of it.quiz ?? []) {
        const e = String(z.explanation ?? '');
        const words = e.replace(/[0-9０-９＋－×÷＝=()（）。、,.\s+\-*/^²³°%a-zA-Z]/g, '');
        if (!e || !WHY_WORD.test(e) || words.length < 12)
          thinQuiz.push(`${subj} / ${it.label} / ${z.q.slice(0, 20)}…`);
      }
info('一問一答の解説が式だけで理由が書いていない（減らしていく数字）', thinQuiz, 3);

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
