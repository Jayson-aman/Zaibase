import type { CourseKey, ExamType } from './courses';
import type { GradeKey } from './grades';

/** 複数の小問がある問題の、各小問（問1・問2…）。 */
export type QuestionSubItem = {
  /** 「問1」「(1)」などのラベル */
  label: string;
  prompt: string;
  answer: string;
  explanation?: string;
};

export type Question = {
  id: string;
  subject: 'sansu' | 'kokugo' | 'rika' | 'shakai' | 'eigo';
  question: string;
  answer: string;
  hint?: string;
  explanation?: string;
  difficulty: 'basic' | 'standard' | 'advanced';
  course?: CourseKey;
  figureDescription?: string;
  passage?: string;
  examType?: ExamType;
  /** 学年区分（小4〜中3）。未指定の問題は学年フィルターの対象外＝全学年扱い。 */
  grade?: GradeKey;
  questionReading?: string;
  answerReading?: string;
  maxOnly?: boolean;
  choices?: string[];
  examFrequency?: 'high' | 'medium' | 'very-high';
  memoryTip?: string;
  pitfall?: string;
  videoUrl?: string;
  /** 複数の小問に分かれた応用問題。question/passageを共通の設問文・資料として使う。 */
  subQuestions?: QuestionSubItem[];
  /** 記述式（自由記述）問題。answerには模範解答を入れる。 */
  isWritten?: boolean;
  /** 記述式問題の自己採点チェックリスト（模範解答にどんな要素が入っているべきか） */
  rubricPoints?: string[];
};

export type SubjectKey = 'sansu' | 'kokugo' | 'rika' | 'shakai' | 'eigo';

export const subjectInfo: Record<
  SubjectKey,
  { name: string; emoji: string; color: string }
> = {
  sansu: { name: '算数', emoji: '📐', color: '#4A90D9' },
  kokugo: { name: '国語', emoji: '📖', color: '#E74C3C' },
  rika: { name: '理科', emoji: '🔬', color: '#27AE60' },
  shakai: { name: '社会', emoji: '🌍', color: '#F39C12' },
  eigo: { name: '英語', emoji: '🔤', color: '#9B59B6' },
};
