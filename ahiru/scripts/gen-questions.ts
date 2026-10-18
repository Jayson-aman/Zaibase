// 問題集（約17,000問）を、教科ごとのファイルに書き出す生成器。
//
// なぜ必要か：問題データは約150ファイルに分かれていて、1つのファイルに複数の教科が混ざっている。
// そのまま import() すると、教科にかかわらず全問題（約14MB・JSでは約29MB）を落としてしまう。
// 完成した問題を教科ごとに書き出しておけば、算数を開いたときは算数だけ（約3MB）で済む。
//
// 元のデータ（data/*.ts）は今までどおりここで直す。直したら `npm run gen:questions` で作り直す。
// 作り直し忘れは `npm run audit` が見つける（gen:questions:check）。
// 作り直しで内容は変わらない（JSON で書き出し、読み戻して元と完全に一致することを確かめてある）。
import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';
import { questionsBySubject } from '../data/questions';

const SUBJECTS = ['sansu', 'kokugo', 'rika', 'shakai', 'eigo'] as const;

function gen(subject: (typeof SUBJECTS)[number]): string {
  // 1問1行の JSON 文字列にしておく。配列リテラルのまま書くと、型推論が巨大な union を作って tsc が止まる。
  const rows = questionsBySubject[subject].map((q) => JSON.stringify(JSON.stringify(q)));
  return `// scripts/gen-questions.ts が自動生成する。手で直さない（元は data/*.ts。直したら npm run gen:questions）。
import type { Question } from '../questions-meta';

const rows: string[] = [
${rows.join(',\n')}
];

export const questions: Question[] = rows.map((r) => JSON.parse(r) as Question);
`;
}

const check = process.argv.includes('--check');
mkdirSync(resolve(process.cwd(), 'data/questions-gen'), { recursive: true });
let dirty = 0;
for (const s of SUBJECTS) {
  const rel = `data/questions-gen/${s}.ts`;
  const path = resolve(process.cwd(), rel);
  const body = gen(s);
  const prev = existsSync(path) ? readFileSync(path, 'utf8') : '';
  if (prev === body) continue;
  dirty++;
  if (check) console.log(`⚠ 生成ファイルが古い: ${rel}`);
  else { writeFileSync(path, body); console.log(`✎ 書き出し: ${rel}`); }
}
if (check) {
  if (dirty === 0) console.log('✓ 問題集の教科別ファイルは最新');
  else console.log('  → データ（data/*.ts）を直したら npm run gen:questions で作り直す');
  process.exit(dirty === 0 ? 0 : 1);
}
