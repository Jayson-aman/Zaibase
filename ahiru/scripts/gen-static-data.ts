// 重いデータから「軽い一覧」を前もって作っておく生成器。
//
// なぜ必要か：学校別タブの「全◯問」は全15,000問（約50MB）を読まないと数えられず、new20 単元の
// 無料／ロック判定は30ファイル（約3.7MB）の単元データを読まないと決められなかった。どちらもホームという
// 「最初に開く画面」で使うため、Web版は起動時に全データを落としていた。数と ID だけを先に書き出しておく。
//
// 使い方（npm run audit が --check で毎回照合する。問題や単元を足したら、--check なしで作り直す）：
//   npm run gen:static        # 書き出す
//   npm run gen:static:check  # 最新か確かめる（古ければ終了コード 1）
import { writeFileSync, readFileSync, existsSync } from 'fs';
import { resolve } from 'path';
import { questions } from '../data/questions';
import { EXTRA_SECTION_FIGURES } from '../data/lesson-extra-figures';
import { EXTRA_MANGA_SECTIONS } from '../data/manga-extra';
import { lessonsNew20E4Eigo } from '../data/lessons-new20-e4-eigo';
import { lessonsNew20E4Kokugo } from '../data/lessons-new20-e4-kokugo';
import { lessonsNew20E4Rika } from '../data/lessons-new20-e4-rika';
import { lessonsNew20E4Sansu } from '../data/lessons-new20-e4-sansu';
import { lessonsNew20E4Shakai } from '../data/lessons-new20-e4-shakai';
import { lessonsNew20E5Eigo } from '../data/lessons-new20-e5-eigo';
import { lessonsNew20E5Kokugo } from '../data/lessons-new20-e5-kokugo';
import { lessonsNew20E5Rika } from '../data/lessons-new20-e5-rika';
import { lessonsNew20E5Sansu } from '../data/lessons-new20-e5-sansu';
import { lessonsNew20E5Shakai } from '../data/lessons-new20-e5-shakai';
import { lessonsNew20E6Eigo } from '../data/lessons-new20-e6-eigo';
import { lessonsNew20E6Kokugo } from '../data/lessons-new20-e6-kokugo';
import { lessonsNew20E6Rika } from '../data/lessons-new20-e6-rika';
import { lessonsNew20E6Sansu } from '../data/lessons-new20-e6-sansu';
import { lessonsNew20E6Shakai } from '../data/lessons-new20-e6-shakai';
import { lessonsNew20J1Eigo } from '../data/lessons-new20-j1-eigo';
import { lessonsNew20J1Kokugo } from '../data/lessons-new20-j1-kokugo';
import { lessonsNew20J1Rika } from '../data/lessons-new20-j1-rika';
import { lessonsNew20J1Sansu } from '../data/lessons-new20-j1-sansu';
import { lessonsNew20J1Shakai } from '../data/lessons-new20-j1-shakai';
import { lessonsNew20J2Eigo } from '../data/lessons-new20-j2-eigo';
import { lessonsNew20J2Kokugo } from '../data/lessons-new20-j2-kokugo';
import { lessonsNew20J2Rika } from '../data/lessons-new20-j2-rika';
import { lessonsNew20J2Sansu } from '../data/lessons-new20-j2-sansu';
import { lessonsNew20J2Shakai } from '../data/lessons-new20-j2-shakai';
import { lessonsNew20J3Eigo } from '../data/lessons-new20-j3-eigo';
import { lessonsNew20J3Kokugo } from '../data/lessons-new20-j3-kokugo';
import { lessonsNew20J3Rika } from '../data/lessons-new20-j3-rika';
import { lessonsNew20J3Sansu } from '../data/lessons-new20-j3-sansu';
import { lessonsNew20J3Shakai } from '../data/lessons-new20-j3-shakai';

const FREE_UNITS_PER_CLUSTER = 5;
const CLUSTERS = [
  lessonsNew20E4Eigo,
  lessonsNew20E4Kokugo,
  lessonsNew20E4Rika,
  lessonsNew20E4Sansu,
  lessonsNew20E4Shakai,
  lessonsNew20E5Eigo,
  lessonsNew20E5Kokugo,
  lessonsNew20E5Rika,
  lessonsNew20E5Sansu,
  lessonsNew20E5Shakai,
  lessonsNew20E6Eigo,
  lessonsNew20E6Kokugo,
  lessonsNew20E6Rika,
  lessonsNew20E6Sansu,
  lessonsNew20E6Shakai,
  lessonsNew20J1Eigo,
  lessonsNew20J1Kokugo,
  lessonsNew20J1Rika,
  lessonsNew20J1Sansu,
  lessonsNew20J1Shakai,
  lessonsNew20J2Eigo,
  lessonsNew20J2Kokugo,
  lessonsNew20J2Rika,
  lessonsNew20J2Sansu,
  lessonsNew20J2Shakai,
  lessonsNew20J3Eigo,
  lessonsNew20J3Kokugo,
  lessonsNew20J3Rika,
  lessonsNew20J3Sansu,
  lessonsNew20J3Shakai,
];

function genNew20Ids(): string {
  const free: string[] = [];
  const locked: string[] = [];
  for (const cluster of CLUSTERS) {
    const sorted = [...cluster].sort((a, b) => a.order - b.order);
    sorted.forEach((lesson, idx) => (idx < FREE_UNITS_PER_CLUSTER ? free : locked).push(lesson.id));
  }
  const list = (arr: string[]) => arr.map((id) => `  '${id}',`).join('\n');
  return `// scripts/gen-static-data.ts が自動生成する。手で直さない（npm run gen:static で作り直す）。
// new20 単元のうち、学年×科目クラスターごとに先頭 ${FREE_UNITS_PER_CLUSTER} 件（無料）と、それ以降（¥150買い切り）の ID。
// 単元データ本体（約3.7MB）を読まずに判定できるよう、ID だけを前もって書き出してある。
export const FREE_UNITS_PER_CLUSTER = ${FREE_UNITS_PER_CLUSTER};

export const NEW20_FREE_IDS: string[] = [
${list(free)}
];

export const NEW20_LOCKED_IDS: string[] = [
${list(locked)}
];
`;
}

function genQuestionCounts(): string {
  // ホームの「◯問」表示用。キーは app/(tabs)/index.tsx の buildCountIndex と同じ形。
  const counts = new Map<string, number>();
  const general = new Map<string, number>();
  const bump = (m: Map<string, number>, k: string) => m.set(k, (m.get(k) ?? 0) + 1);
  for (const q of questions) {
    const examType = q.examType ?? 'chugaku';
    const generalKey = examType === 'koko' ? 'koko-general' : 'general';
    if (!q.course || q.course === generalKey) {
      bump(general, `${q.subject}|${examType}|all`);
      bump(general, `${q.subject}|${examType}|${q.difficulty}`);
    } else {
      bump(counts, `${q.subject}|${examType}|${q.course}|all`);
      bump(counts, `${q.subject}|${examType}|${q.course}|${q.difficulty}`);
    }
  }
  const obj = (m: Map<string, number>) => [...m.keys()].sort().map((k) => `  ${JSON.stringify(k)}: ${m.get(k)},`).join('\n');
  return `// scripts/gen-static-data.ts が自動生成する。手で直さない（npm run gen:static で作り直す）。
// ホームに出す問題数の集計表。全問題（約14MB）を読まずに数えられるよう、前もって書き出してある。
export const COUNTS_BY_COURSE: Record<string, number> = {
${obj(counts)}
};

export const COUNTS_GENERAL: Record<string, number> = {
${obj(general)}
};
`;
}

function genSchoolCounts(): string {
  const m = new Map<string, { total: number; subjects: Set<string> }>();
  for (const q of questions) {
    const c = q.course;
    if (!c || c === 'general') continue;
    const cur = m.get(c) ?? { total: 0, subjects: new Set<string>() };
    cur.total += 1;
    cur.subjects.add(q.subject);
    m.set(c, cur);
  }
  const lines = [...m.keys()].sort().map((k) => `  '${k}': { total: ${m.get(k)!.total}, subjects: ${m.get(k)!.subjects.size} },`).join('\n');
  return `// scripts/gen-static-data.ts が自動生成する。手で直さない（npm run gen:static で作り直す）。
// 学校別コースごとの専用問題の数と、問題がある教科の数。全問題（約50MB）を読まずに「全◯問」と出すため。
export const SCHOOL_COUNTS: Record<string, { total: number; subjects: number }> = {
${lines}
};
`;
}

function genExtraSectionMaps(): string {
  const entries = (o: Record<string, string>) =>
    Object.keys(o).sort().map((k) => `  ${JSON.stringify(k)}: ${JSON.stringify(o[k])},`).join('\n');
  return `// scripts/gen-static-data.ts が自動生成する。手で直さない（npm run gen:static で作り直す）。
// 単元の節（「単元ID#節の番号」）に取りつける、動く図解・マンガの ID の対応表。
// 図解・マンガの本体（合わせて約30MB）を読まずに単元を組み立てられるよう、対応表だけを前もって書き出してある。
export const EXTRA_SECTION_FIGURES: Record<string, string> = {
${entries(EXTRA_SECTION_FIGURES)}
};

export const EXTRA_MANGA_SECTIONS: Record<string, string> = {
${entries(EXTRA_MANGA_SECTIONS)}
};
`;
}

const targets: Array<[string, string]> = [
  ['data/question-counts.generated.ts', genQuestionCounts()],
  ['data/extra-section-maps.generated.ts', genExtraSectionMaps()],
  ['data/new20-ids.generated.ts', genNew20Ids()],
  ['data/school-counts.generated.ts', genSchoolCounts()],
];

const check = process.argv.includes('--check');
let dirty = 0;
for (const [rel, body] of targets) {
  const path = resolve(process.cwd(), rel);
  const prev = existsSync(path) ? readFileSync(path, 'utf8') : '';
  if (prev === body) continue;
  dirty++;
  if (check) console.log(`⚠ 生成ファイルが古い: ${rel}（npm run gen:static で作り直す）`);
  else { writeFileSync(path, body); console.log(`✎ 書き出し: ${rel}`); }
}
if (check) {
  if (dirty === 0) console.log('✓ 生成ファイル（学校別の問題数・new20のID）は最新');
  process.exit(dirty === 0 ? 0 : 1);
}
