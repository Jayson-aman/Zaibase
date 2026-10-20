// 教科書（約5,300単元・JSでは約40MB）を、「教科×受験種別」の10個のファイルに書き出す生成器。
//
// なぜ必要か：単元は約250ファイルに分かれていて、そのまま import() すると、
// 教科書の一覧を開いただけで全単元（約40MB）を落としてしまう。
// 一覧は「選んだ教科×受験種別」の1つ（約4MB）、単元ページは「その単元がある1つ」だけで済むようにする。
//
// 元のデータ（data/lessons-*.ts）は今までどおりここで直す。直したら `npm run gen:lessons` で作り直す。
// 作り直し忘れは `npm run audit` が見つける（gen:lessons:check）。
import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';
import { allLessons } from '../data/lessons';

const SUBJECTS = ['sansu', 'kokugo', 'rika', 'shakai', 'eigo'] as const;
const EXAMS = ['chugaku', 'koko'] as const;

type L = (typeof allLessons)[number];
const examOf = (l: L) => (l.examType ?? 'chugaku') as 'chugaku' | 'koko';
const chunkOf = (subject: string, exam: string) => `${subject}-${exam}`;

function lessonsOf(subject: string, exam: string): L[] {
  // getLessonsBySubject と同じ並び（order の昇順。同じ order は元の順）
  return allLessons.filter((l) => l.subject === subject && examOf(l) === exam).sort((a, b) => a.order - b.order);
}

function genChunk(subject: string, exam: string): string {
  const rows = lessonsOf(subject, exam).map((l) => JSON.stringify(JSON.stringify(l)));
  return `// scripts/gen-lessons.ts が自動生成する。手で直さない（元は data/lessons-*.ts。直したら npm run gen:lessons）。
import type { Lesson } from '../lesson-types';

const rows: string[] = [
${rows.join(',\n')}
];

export const lessons: Lesson[] = rows.map((r) => JSON.parse(r) as Lesson);
`;
}

function genIndex(): string {
  const chunk: string[] = [];
  const counts: string[] = [];
  for (const s of SUBJECTS) for (const e of EXAMS) {
    const ls = lessonsOf(s, e);
    counts.push(`  ${JSON.stringify(`${s}|${e}`)}: ${ls.length},`);
    for (const l of ls) chunk.push(`  ${JSON.stringify(l.id)}: ${JSON.stringify(chunkOf(s, e))},`);
  }
  return `// scripts/gen-lessons.ts が自動生成する。手で直さない（npm run gen:lessons で作り直す）。
// 単元ID → その単元が入っているファイル（教科-受験種別）と、教科×受験種別ごとの単元数。
// 単元の本体（約40MB）を読まずに、どのファイルを開けばよいか・一覧に何件出るかが分かるようにしてある。
export const LESSON_CHUNK: Record<string, string> = {
${chunk.join('\n')}
};

export const LESSON_COUNTS: Record<string, number> = {
${counts.join('\n')}
};
`;
}

const check = process.argv.includes('--check');
mkdirSync(resolve(process.cwd(), 'data/lessons-gen'), { recursive: true });
const targets: Array<[string, string]> = [['data/lesson-index.generated.ts', genIndex()]];
for (const s of SUBJECTS) for (const e of EXAMS) targets.push([`data/lessons-gen/${chunkOf(s, e)}.ts`, genChunk(s, e)]);

// 全単元がどこかのファイルに入ったことを確かめる
const total = SUBJECTS.flatMap((s) => EXAMS.map((e) => lessonsOf(s, e).length)).reduce((a, b) => a + b, 0);
if (total !== allLessons.length) { console.error(`⚠ 教科・受験種別に当てはまらない単元がある（${total} / ${allLessons.length}）`); process.exit(1); }

let dirty = 0;
for (const [rel, body] of targets) {
  const path = resolve(process.cwd(), rel);
  const prev = existsSync(path) ? readFileSync(path, 'utf8') : '';
  if (prev === body) continue;
  dirty++;
  if (check) console.log(`⚠ 生成ファイルが古い: ${rel}`);
  else { writeFileSync(path, body); console.log(`✎ 書き出し: ${rel}`); }
}
if (check) {
  if (dirty === 0) console.log('✓ 教科書の教科別ファイルは最新');
  else console.log('  → データ（data/lessons-*.ts）を直したら npm run gen:lessons で作り直す');
  process.exit(dirty === 0 ? 0 : 1);
}
