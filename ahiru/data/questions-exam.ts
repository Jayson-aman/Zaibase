import type { Question } from './questions';
import { toinSansu, toinKokugo } from './toin_sansu_kokugo';
import { toinRika, toinShakai, toinEigo } from './toin_rika_shakai_eigo';
import { kindaiSansu, kindaiKokugo } from './kindai_sansu_kokugo';
import { kindaiRika, kindaiShakai, kindaiEigo } from './kindai_rika_shakai_eigo';
import { kaimeiSansu, kaimeiKokugo, kaimeiRika } from './kaimei_sansu_kokugo_rika';
import { kaimeiShakai, kaimeiEigo } from './kaimei_shakai_eigo';

// 大阪桐蔭中学校 — 入試形式 大問（偏差値57-62）
export const toinExamQuestions: Question[] = [
  ...toinSansu,
  ...toinKokugo,
  ...toinRika,
  ...toinShakai,
  ...toinEigo,
];

// 近畿大学附属中学校 — 入試形式 大問（偏差値55-60）
export const kindaiExamQuestions: Question[] = [
  ...kindaiSansu,
  ...kindaiKokugo,
  ...kindaiRika,
  ...kindaiShakai,
  ...kindaiEigo,
];

// 開明中学校 — 入試形式 大問（偏差値58-62）
export const kaimeiExamQuestions: Question[] = [
  ...kaimeiSansu,
  ...kaimeiKokugo,
  ...kaimeiRika,
  ...kaimeiShakai,
  ...kaimeiEigo,
];
