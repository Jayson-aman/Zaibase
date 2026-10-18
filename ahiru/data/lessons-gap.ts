// 問題集に対して教科書の単元が足りない分野を補うために追加した単元（教科×受験種別ごとに1ファイル）。
import type { Lesson } from './lesson-types';
import { GAP_GCS_LESSONS } from './lessons-gap-gcs';
import { GAP_GCR_LESSONS } from './lessons-gap-gcr';
import { GAP_GCK_LESSONS } from './lessons-gap-gck';
import { GAP_GCH_LESSONS } from './lessons-gap-gch';
import { GAP_GCE_LESSONS } from './lessons-gap-gce';
import { GAP_GKS_LESSONS } from './lessons-gap-gks';
import { GAP_GKR_LESSONS } from './lessons-gap-gkr';
import { GAP_GKK_LESSONS } from './lessons-gap-gkk';
import { GAP_GKH_LESSONS } from './lessons-gap-gkh';
import { GAP_GKE_LESSONS } from './lessons-gap-gke';

export const gapLessons: Lesson[] = [
  ...GAP_GCS_LESSONS,
  ...GAP_GCR_LESSONS,
  ...GAP_GCK_LESSONS,
  ...GAP_GCH_LESSONS,
  ...GAP_GCE_LESSONS,
  ...GAP_GKS_LESSONS,
  ...GAP_GKR_LESSONS,
  ...GAP_GKK_LESSONS,
  ...GAP_GKH_LESSONS,
  ...GAP_GKE_LESSONS,
];
