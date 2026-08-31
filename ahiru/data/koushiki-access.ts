import type { GradeKey } from './grades';
import type { StudyPeriod } from './lesson-types';
import { lessonsKoushikiC1Menseki } from './lessons-koushiki-c1menseki';
import { lessonsKoushikiC2En } from './lessons-koushiki-c2en';
import { lessonsKoushikiC3Tairyoku1 } from './lessons-koushiki-c3tairyoku1';
import { lessonsKoushikiC4Tairyoku2 } from './lessons-koushiki-c4tairyoku2';
import { lessonsKoushikiC5Kakudo } from './lessons-koushiki-c5kakudo';
import { lessonsKoushikiC6Soji } from './lessons-koushiki-c6soji';
import { lessonsKoushikiK1Godo } from './lessons-koushiki-k1godo';
import { lessonsKoushikiK2Heikou } from './lessons-koushiki-k2heikou';
import { lessonsKoushikiK3Souji } from './lessons-koushiki-k3souji';
import { lessonsKoushikiK4En1 } from './lessons-koushiki-k4en1';
import { lessonsKoushikiK5En2 } from './lessons-koushiki-k5en2';
import { lessonsKoushikiK6Sanpei } from './lessons-koushiki-k6sanpei';

const ALL_KOUSHIKI_LESSONS = [
  ...lessonsKoushikiC1Menseki,
  ...lessonsKoushikiC2En,
  ...lessonsKoushikiC3Tairyoku1,
  ...lessonsKoushikiC4Tairyoku2,
  ...lessonsKoushikiC5Kakudo,
  ...lessonsKoushikiC6Soji,
  ...lessonsKoushikiK1Godo,
  ...lessonsKoushikiK2Heikou,
  ...lessonsKoushikiK3Souji,
  ...lessonsKoushikiK4En1,
  ...lessonsKoushikiK5En2,
  ...lessonsKoushikiK6Sanpei,
];

const STUDY_PERIOD_TO_GRADE: Partial<Record<StudyPeriod, GradeKey>> = {
  '小4': 'e4',
  '小5前半': 'e5',
  '小5後半': 'e5',
  '小6前半': 'e6',
  '小6後半・直前': 'e6',
  '中1': 'j1',
  '中2': 'j2',
  '中3前半': 'j3',
  '中3夏': 'j3',
  '中3秋〜直前': 'j3',
};

/** 学年ごとに、公式集の最初のこの件数までは無料で閲覧できる。 */
export const FREE_FORMULAS_PER_GRADE = 5;

export type KoushikiFormulaInfo = {
  figureId: string;
  heading: string;
  grade: GradeKey;
  /** その学年内での0始まりの通し番号（表示順） */
  indexInGrade: number;
  isFree: boolean;
};

function buildFormulaList(): KoushikiFormulaInfo[] {
  const sorted = [...ALL_KOUSHIKI_LESSONS].sort((a, b) => a.order - b.order);
  const perGradeCounter = new Map<GradeKey, number>();
  const list: KoushikiFormulaInfo[] = [];
  for (const lesson of sorted) {
    const grade = STUDY_PERIOD_TO_GRADE[lesson.studyPeriod as StudyPeriod] ?? 'e4';
    for (const section of lesson.sections) {
      if (section.figureId == null) continue;
      const idx = perGradeCounter.get(grade) ?? 0;
      list.push({
        figureId: section.figureId,
        heading: section.heading ?? '',
        grade,
        indexInGrade: idx,
        isFree: idx < FREE_FORMULAS_PER_GRADE,
      });
      perGradeCounter.set(grade, idx + 1);
    }
  }
  return list;
}

const FORMULA_LIST = buildFormulaList();
const FORMULA_BY_FIGURE_ID = new Map(FORMULA_LIST.map((f) => [f.figureId, f]));

export function getKoushikiFormulaInfo(figureId: string): KoushikiFormulaInfo | null {
  return FORMULA_BY_FIGURE_ID.get(figureId) ?? null;
}

/** 公式集の公式でないセクション（figureIdが公式集由来でない）は常にfreeとして扱う。 */
export function isKoushikiFormulaFree(figureId: string): boolean {
  return FORMULA_BY_FIGURE_ID.get(figureId)?.isFree ?? true;
}

export function getAllKoushikiFormulas(): KoushikiFormulaInfo[] {
  return FORMULA_LIST;
}
