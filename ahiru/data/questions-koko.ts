import type { Question } from './questions';
import { kkSansu, ktSansu } from './koko_sansu';
import { kkKokugo, ktKokugo } from './koko_kokugo';
import { kkRika, ktRika } from './koko_rika';
import { kkShakai, ktShakai } from './koko_shakai';
import { kkEigo, ktEigo } from './koko_eigo';

// 高校受験 関関同立附属高校レベル（難関・偏差値60〜68）
export const kokoKankanQuestions: Question[] = [
  ...kkSansu,
  ...kkKokugo,
  ...kkRika,
  ...kkShakai,
  ...kkEigo,
];

// 高校受験 最難関公立（天王寺・北野・堀川レベル・偏差値68〜72）
export const kokoTopQuestions: Question[] = [
  ...ktSansu,
  ...ktKokugo,
  ...ktRika,
  ...ktShakai,
  ...ktEigo,
];
