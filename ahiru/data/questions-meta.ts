import type { CourseKey, ExamType } from './courses';

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
  questionReading?: string;
  answerReading?: string;
  maxOnly?: boolean;
  choices?: string[];
  examFrequency?: 'high' | 'medium' | 'very-high';
  memoryTip?: string;
  pitfall?: string;
  videoUrl?: string;
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
