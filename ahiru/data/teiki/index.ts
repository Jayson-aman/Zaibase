// 定期テスト向け「教科書の延長」。教科・学年ごとのファイルを束ねる。
// 新しいファイルを足したら、ここに import と spread を足すこと。
import type { TeikiUnit } from './types';
import { TEIKI_J1_SANSU } from './j1-sansu';
import { TEIKI_J1_KOKUGO } from './j1-kokugo';
import { TEIKI_J1_RIKA } from './j1-rika';
import { TEIKI_J1_SHAKAI } from './j1-shakai';
import { TEIKI_J1_EIGO } from './j1-eigo';
import { TEIKI_J2_SANSU } from './j2-sansu';
import { TEIKI_J2_KOKUGO } from './j2-kokugo';
import { TEIKI_J2_RIKA } from './j2-rika';
import { TEIKI_J2_SHAKAI } from './j2-shakai';
import { TEIKI_J2_EIGO } from './j2-eigo';
import { TEIKI_J3_SANSU } from './j3-sansu';
import { TEIKI_J3_KOKUGO } from './j3-kokugo';
import { TEIKI_J3_RIKA } from './j3-rika';
import { TEIKI_J3_SHAKAI } from './j3-shakai';
import { TEIKI_J3_EIGO } from './j3-eigo';

export const TEIKI_UNITS: TeikiUnit[] = [
  ...TEIKI_J1_SANSU,
  ...TEIKI_J1_KOKUGO,
  ...TEIKI_J1_RIKA,
  ...TEIKI_J1_SHAKAI,
  ...TEIKI_J1_EIGO,
  ...TEIKI_J2_SANSU,
  ...TEIKI_J2_KOKUGO,
  ...TEIKI_J2_RIKA,
  ...TEIKI_J2_SHAKAI,
  ...TEIKI_J2_EIGO,
  ...TEIKI_J3_SANSU,
  ...TEIKI_J3_KOKUGO,
  ...TEIKI_J3_RIKA,
  ...TEIKI_J3_SHAKAI,
  ...TEIKI_J3_EIGO,
];
