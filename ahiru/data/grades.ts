import type { StudyPeriod } from './lesson-types';

/** 学年区分（小学4年〜中学3年）。 */
export type GradeKey = 'e4' | 'e5' | 'e6' | 'j1' | 'j2' | 'j3';

export const GRADE_ORDER: GradeKey[] = ['e4', 'e5', 'e6', 'j1', 'j2', 'j3'];

export const GRADE_LABELS: Record<GradeKey, string> = {
  e4: '小学4年',
  e5: '小学5年',
  e6: '小学6年',
  j1: '中学1年',
  j2: '中学2年',
  j3: '中学3年',
};

export const GRADE_SHORT_LABELS: Record<GradeKey, string> = {
  e4: '小4',
  e5: '小5',
  e6: '小6',
  j1: '中1',
  j2: '中2',
  j3: '中3',
};

/** 学年から対応する受験種別（中学受験＝小学生／高校受験＝中学生）を返す。 */
export function examTypeOfGrade(grade: GradeKey): 'chugaku' | 'koko' {
  return grade === 'j1' || grade === 'j2' || grade === 'j3' ? 'koko' : 'chugaku';
}

/** 既存のLesson.studyPeriod（小5前半/中3夏 など）から、粗い学年区分を導出する。 */
export function gradeOfStudyPeriod(period: StudyPeriod | undefined): GradeKey | null {
  if (!period) return null;
  if (period.startsWith('小4')) return 'e4';
  if (period.startsWith('小5')) return 'e5';
  if (period.startsWith('小6')) return 'e6';
  if (period.startsWith('中1')) return 'j1';
  if (period.startsWith('中2')) return 'j2';
  if (period.startsWith('中3')) return 'j3';
  return null;
}
