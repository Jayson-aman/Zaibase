// 定期テストの基本問題（学年×教科ごと50問）。新しいファイルを足したらここに結線する。
import type { TeikiQuestion } from './types';
import { LEVELS_SANSU } from './levels-sansu';
import { LEVELS_KOKUGO } from './levels-kokugo';
import { LEVELS_RIKA } from './levels-rika';
import { LEVELS_SHAKAI } from './levels-shakai';
import { LEVELS_EIGO } from './levels-eigo';
import { TEIKI_Q_J1_SANSU } from './j1-sansu';
import { TEIKI_Q_J1_KOKUGO } from './j1-kokugo';
import { TEIKI_Q_J1_RIKA } from './j1-rika';
import { TEIKI_Q_J1_SHAKAI } from './j1-shakai';
import { TEIKI_Q_J1_EIGO } from './j1-eigo';
import { TEIKI_Q_J2_SANSU } from './j2-sansu';
import { TEIKI_Q_J2_KOKUGO } from './j2-kokugo';
import { TEIKI_Q_J2_RIKA } from './j2-rika';
import { TEIKI_Q_J2_SHAKAI } from './j2-shakai';
import { TEIKI_Q_J2_EIGO } from './j2-eigo';
import { TEIKI_Q_J3_SANSU } from './j3-sansu';
import { TEIKI_Q_J3_KOKUGO } from './j3-kokugo';
import { TEIKI_Q_J3_RIKA } from './j3-rika';
import { TEIKI_Q_J3_SHAKAI } from './j3-shakai';
import { TEIKI_Q_J3_EIGO } from './j3-eigo';

export const TEIKI_QUESTIONS: TeikiQuestion[] = [
  ...TEIKI_Q_J1_SANSU,
  ...TEIKI_Q_J1_KOKUGO,
  ...TEIKI_Q_J1_RIKA,
  ...TEIKI_Q_J1_SHAKAI,
  ...TEIKI_Q_J1_EIGO,
  ...TEIKI_Q_J2_SANSU,
  ...TEIKI_Q_J2_KOKUGO,
  ...TEIKI_Q_J2_RIKA,
  ...TEIKI_Q_J2_SHAKAI,
  ...TEIKI_Q_J2_EIGO,
  ...TEIKI_Q_J3_SANSU,
  ...TEIKI_Q_J3_KOKUGO,
  ...TEIKI_Q_J3_RIKA,
  ...TEIKI_Q_J3_SHAKAI,
  ...TEIKI_Q_J3_EIGO,
];

// やさしさのステップ（1=ウォームアップ 2=基本 3=テスト基本）。教科ごとの levels-*.ts を束ねる。
export const TEIKI_LEVELS: Record<string, 1 | 2 | 3> = {
  ...LEVELS_SANSU,
  ...LEVELS_KOKUGO,
  ...LEVELS_RIKA,
  ...LEVELS_SHAKAI,
  ...LEVELS_EIGO,
};
/** 問題のステップ。付いていない問題は「基本（2）」として扱う */
export function levelOf(id: string): 1 | 2 | 3 {
  return TEIKI_LEVELS[id] ?? 2;
}
