// 時代に合わせた新傾向の問題（教科×受験種別ごとに1ファイル）。
import type { Question } from './questions-meta';
import { NT_NTCS_QUESTIONS } from './questions-nt-ntcs';
import { NT_NTCR_QUESTIONS } from './questions-nt-ntcr';
import { NT_NTCK_QUESTIONS } from './questions-nt-ntck';
import { NT_NTCH_QUESTIONS } from './questions-nt-ntch';
import { NT_NTCE_QUESTIONS } from './questions-nt-ntce';
import { NT_NTKS_QUESTIONS } from './questions-nt-ntks';
import { NT_NTKR_QUESTIONS } from './questions-nt-ntkr';
import { NT_NTKK_QUESTIONS } from './questions-nt-ntkk';
import { NT_NTKH_QUESTIONS } from './questions-nt-ntkh';
import { NT_NTKE_QUESTIONS } from './questions-nt-ntke';

export const ntQuestions: Question[] = [
  ...NT_NTCS_QUESTIONS,
  ...NT_NTCR_QUESTIONS,
  ...NT_NTCK_QUESTIONS,
  ...NT_NTCH_QUESTIONS,
  ...NT_NTCE_QUESTIONS,
  ...NT_NTKS_QUESTIONS,
  ...NT_NTKR_QUESTIONS,
  ...NT_NTKK_QUESTIONS,
  ...NT_NTKH_QUESTIONS,
  ...NT_NTKE_QUESTIONS,
];
