import type { StudyPeriod } from './lesson-types';

/** 学年区分（小学1年〜中学3年）。 */
export type GradeKey = 'e1' | 'e2' | 'e3' | 'e4' | 'e5' | 'e6' | 'j1' | 'j2' | 'j3';

export const GRADE_ORDER: GradeKey[] = ['e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'j1', 'j2', 'j3'];

export const GRADE_LABELS: Record<GradeKey, string> = {
  e1: '小学1年',
  e2: '小学2年',
  e3: '小学3年',
  e4: '小学4年',
  e5: '小学5年',
  e6: '小学6年',
  j1: '中学1年',
  j2: '中学2年',
  j3: '中学3年',
};

export const GRADE_SHORT_LABELS: Record<GradeKey, string> = {
  e1: '小1',
  e2: '小2',
  e3: '小3',
  e4: '小4',
  e5: '小5',
  e6: '小6',
  j1: '中1',
  j2: '中2',
  j3: '中3',
};

/** 小1〜小3（低学年）。学年を選ばない出題（ふつうの練習・模試など）には混ぜない。 */
export function isLowGrade(grade: GradeKey | undefined): boolean {
  return grade === 'e1' || grade === 'e2' || grade === 'e3';
}

/** 学年の絞り込み：小4以上を選んだときは、その学年と学年なしの問題。小1〜小3を選んだときは、その学年だけ。選ばないときは、低学年の問題を除く。 */
export function inGradeFilter(grade: GradeKey | undefined, filter: GradeKey | null): boolean {
  if (filter && isLowGrade(filter)) return grade === filter; // 低学年は、その学年の問題だけ（学年なしの問題は小4以上の内容）
  return filter ? !grade || grade === filter : !isLowGrade(grade);
}

/** 学年から対応する受験種別（中学受験＝小学生／高校受験＝中学生）を返す。 */
export function examTypeOfGrade(grade: GradeKey): 'chugaku' | 'koko' {
  return grade === 'j1' || grade === 'j2' || grade === 'j3' ? 'koko' : 'chugaku';
}

/** 既存のLesson.studyPeriod（小5前半/中3夏 など）から、粗い学年区分を導出する。 */
export function gradeOfStudyPeriod(period: StudyPeriod | undefined): GradeKey | null {
  if (!period) return null;
  if (period.startsWith('小1')) return 'e1';
  if (period.startsWith('小2')) return 'e2';
  if (period.startsWith('小3')) return 'e3';
  if (period.startsWith('小4')) return 'e4';
  if (period.startsWith('小5')) return 'e5';
  if (period.startsWith('小6')) return 'e6';
  if (period.startsWith('中1')) return 'j1';
  if (period.startsWith('中2')) return 'j2';
  if (period.startsWith('中3')) return 'j3';
  return null;
}
