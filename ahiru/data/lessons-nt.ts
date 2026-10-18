// 時代に合わせた新傾向の単元（教科×受験種別ごとに1ファイル）。
import type { Lesson } from './lesson-types';
import { NT_NTCS_LESSONS } from './lessons-nt-ntcs';
import { NT_NTCR_LESSONS } from './lessons-nt-ntcr';
import { NT_NTCK_LESSONS } from './lessons-nt-ntck';
import { NT_NTCH_LESSONS } from './lessons-nt-ntch';
import { NT_NTCE_LESSONS } from './lessons-nt-ntce';
import { NT_NTKS_LESSONS } from './lessons-nt-ntks';
import { NT_NTKR_LESSONS } from './lessons-nt-ntkr';
import { NT_NTKK_LESSONS } from './lessons-nt-ntkk';
import { NT_NTKH_LESSONS } from './lessons-nt-ntkh';
import { NT_NTKE_LESSONS } from './lessons-nt-ntke';

export const ntLessons: Lesson[] = [
  ...NT_NTCS_LESSONS,
  ...NT_NTCR_LESSONS,
  ...NT_NTCK_LESSONS,
  ...NT_NTCH_LESSONS,
  ...NT_NTCE_LESSONS,
  ...NT_NTKS_LESSONS,
  ...NT_NTKR_LESSONS,
  ...NT_NTKK_LESSONS,
  ...NT_NTKH_LESSONS,
  ...NT_NTKE_LESSONS,
];
