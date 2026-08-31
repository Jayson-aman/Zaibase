import { lessonsNew20E4Eigo } from './lessons-new20-e4-eigo';
import { lessonsNew20E4Kokugo } from './lessons-new20-e4-kokugo';
import { lessonsNew20E4Rika } from './lessons-new20-e4-rika';
import { lessonsNew20E4Sansu } from './lessons-new20-e4-sansu';
import { lessonsNew20E4Shakai } from './lessons-new20-e4-shakai';
import { lessonsNew20E5Eigo } from './lessons-new20-e5-eigo';
import { lessonsNew20E5Kokugo } from './lessons-new20-e5-kokugo';
import { lessonsNew20E5Rika } from './lessons-new20-e5-rika';
import { lessonsNew20E5Sansu } from './lessons-new20-e5-sansu';
import { lessonsNew20E5Shakai } from './lessons-new20-e5-shakai';
import { lessonsNew20E6Eigo } from './lessons-new20-e6-eigo';
import { lessonsNew20E6Kokugo } from './lessons-new20-e6-kokugo';
import { lessonsNew20E6Rika } from './lessons-new20-e6-rika';
import { lessonsNew20E6Sansu } from './lessons-new20-e6-sansu';
import { lessonsNew20E6Shakai } from './lessons-new20-e6-shakai';
import { lessonsNew20J1Eigo } from './lessons-new20-j1-eigo';
import { lessonsNew20J1Kokugo } from './lessons-new20-j1-kokugo';
import { lessonsNew20J1Rika } from './lessons-new20-j1-rika';
import { lessonsNew20J1Sansu } from './lessons-new20-j1-sansu';
import { lessonsNew20J1Shakai } from './lessons-new20-j1-shakai';
import { lessonsNew20J2Eigo } from './lessons-new20-j2-eigo';
import { lessonsNew20J2Kokugo } from './lessons-new20-j2-kokugo';
import { lessonsNew20J2Rika } from './lessons-new20-j2-rika';
import { lessonsNew20J2Sansu } from './lessons-new20-j2-sansu';
import { lessonsNew20J2Shakai } from './lessons-new20-j2-shakai';
import { lessonsNew20J3Eigo } from './lessons-new20-j3-eigo';
import { lessonsNew20J3Kokugo } from './lessons-new20-j3-kokugo';
import { lessonsNew20J3Rika } from './lessons-new20-j3-rika';
import { lessonsNew20J3Sansu } from './lessons-new20-j3-sansu';
import { lessonsNew20J3Shakai } from './lessons-new20-j3-shakai';

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

/** 学年×科目クラスターごとに、最初のこの件数までは無料で閲覧できる。 */
export const FREE_UNITS_PER_CLUSTER = 5;

const FREE_UNIT_IDS = new Set<string>();
const LOCKED_UNIT_IDS = new Set<string>();
for (const cluster of CLUSTERS) {
  const sorted = [...cluster].sort((a, b) => a.order - b.order);
  sorted.forEach((lesson, idx) => {
    if (idx < FREE_UNITS_PER_CLUSTER) {
      FREE_UNIT_IDS.add(lesson.id);
    } else {
      LOCKED_UNIT_IDS.add(lesson.id);
    }
  });
}

/** この単元が「学年×科目20単元追加」バッチ由来かどうか */
export function isNew20Unit(lessonId: string): boolean {
  return lessonId.startsWith('new20_');
}

/** new20由来でない単元は常にtrue（このロックの対象外）を返す */
export function isNew20UnitFree(lessonId: string): boolean {
  if (!isNew20Unit(lessonId)) return true;
  return FREE_UNIT_IDS.has(lessonId);
}
