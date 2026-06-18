import type { Question } from './questions';
import { toinSansu, toinKokugo } from './toin_sansu_kokugo';
import { toinRika, toinShakai, toinEigo } from './toin_rika_shakai_eigo';
import { kindaiSansu, kindaiKokugo } from './kindai_sansu_kokugo';
import { kindaiRika, kindaiShakai, kindaiEigo } from './kindai_rika_shakai_eigo';
import { kaimeiSansu, kaimeiKokugo, kaimeiRika } from './kaimei_sansu_kokugo_rika';
import { kaimeiShakai, kaimeiEigo } from './kaimei_shakai_eigo';
import { kansaiHokuyoSansu, kansaiHokuyoKokugo, kansaiHokuyoRika, kansaiHokuyoShakai, kansaiHokuyoEigo } from './kansai_hokuyo_exam';
import { myojoSansu, myojoKokugo, myojoRika, myojoShakai, myojoEigo } from './myojo_exam';
import { tezukayamaSansu, tezukayamaKokugo, tezukayamaRika, tezukayamaShakai, tezukayamaEigo } from './tezukayama_exam';
import { kinrankaiSansu, kinrankaiKokugo, kinrankaiRika, kinrankaiShakai, kinrankaiEigo } from './kinrankai_exam';
import { otaniSansu, otaniKokugo, otaniRika, otaniShakai, otaniEigo } from './otani_exam';
import { toinMaxQuestions, kindaiMaxQuestions, kaimeiMaxQuestions } from './toin_kindai_kaimei_max';
import { kinrankaiMaxQuestions, otaniMaxQuestions } from './kinrankai_otani_max';

// 大阪桐蔭中学校 — 入試形式 大問（偏差値57-62）
export const toinExamQuestions: Question[] = [
  ...toinSansu,
  ...toinKokugo,
  ...toinRika,
  ...toinShakai,
  ...toinEigo,
  ...toinMaxQuestions,
];

// 近畿大学附属中学校 — 入試形式 大問（偏差値55-60）
export const kindaiExamQuestions: Question[] = [
  ...kindaiSansu,
  ...kindaiKokugo,
  ...kindaiRika,
  ...kindaiShakai,
  ...kindaiEigo,
  ...kindaiMaxQuestions,
];

// 開明中学校 — 入試形式 大問（偏差値58-62）
export const kaimeiExamQuestions: Question[] = [
  ...kaimeiSansu,
  ...kaimeiKokugo,
  ...kaimeiRika,
  ...kaimeiShakai,
  ...kaimeiEigo,
  ...kaimeiMaxQuestions,
];

// 関西大学北陽中学校 — 入試形式 大問（偏差値54-58）
export const kansaiHokuyoExamQuestions: Question[] = [
  ...kansaiHokuyoSansu,
  ...kansaiHokuyoKokugo,
  ...kansaiHokuyoRika,
  ...kansaiHokuyoShakai,
  ...kansaiHokuyoEigo,
];

// 明星中学校 — 入試形式 大問（偏差値56-62）
export const myojoExamQuestions: Question[] = [
  ...myojoSansu,
  ...myojoKokugo,
  ...myojoRika,
  ...myojoShakai,
  ...myojoEigo,
];

// 帝塚山学院中学校 — 入試形式 大問（偏差値55-60）
export const tezukayamaExamQuestions: Question[] = [
  ...tezukayamaSansu,
  ...tezukayamaKokugo,
  ...tezukayamaRika,
  ...tezukayamaShakai,
  ...tezukayamaEigo,
];

// 金蘭会中学校 — 入試形式 大問（偏差値50-56）
export const kinrankaiExamQuestions: Question[] = [
  ...kinrankaiSansu,
  ...kinrankaiKokugo,
  ...kinrankaiRika,
  ...kinrankaiShakai,
  ...kinrankaiEigo,
  ...kinrankaiMaxQuestions,
];

// 大谷中学校 — 入試形式 大問（偏差値46-52）
export const otaniExamQuestions: Question[] = [
  ...otaniSansu,
  ...otaniKokugo,
  ...otaniRika,
  ...otaniShakai,
  ...otaniEigo,
  ...otaniMaxQuestions,
];
