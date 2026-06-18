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
import { kansaiHokuyoMaxQuestions, myojoMaxQuestions, tezukayamaMaxQuestions } from './kansaihokuyo_myojo_tezukayama_max';
import { kankanExamQuestions, kankanMaxQuestions } from './kankan_exam';
import { tokyoMeidaiSansu, tokyoMeidaiKokugo, tokyoMeidaiRika, tokyoMeidaiShakai, tokyoMeidaiEigo, tokyoAoyamaSansu, tokyoAoyamaKokugo, tokyoAoyamaRika, tokyoAoyamaShakai, tokyoAoyamaEigo, tokyoChuoSansu, tokyoChuoKokugo, tokyoChuoRika, tokyoChuoShakai, tokyoChuoEigo, tokyoHoseiSansu, tokyoHoseiKokugo, tokyoHoseiRika, tokyoHoseiShakai, tokyoHoseiEigo, tokyoGakushiinSansu, tokyoGakushiinKokugo, tokyoGakushiinRika, tokyoGakushiinShakai, tokyoGakushiinEigo } from './tokyo_chugaku_exam';
import { tokyoHibiyaSansu, tokyoHibiyaKokugo, tokyoHibiyaRika, tokyoHibiyaShakai, tokyoHibiyaEigo, tokyoWasedaSansu, tokyoWasedaKokugo, tokyoWasedaRika, tokyoWasedaShakai, tokyoWasedaEigo, tokyoMeidaiKokoSansu, tokyoMeidaiKokoKokugo, tokyoMeidaiKokoRika, tokyoMeidaiKokoShakai, tokyoMeidaiKokoEigo } from './tokyo_koko_exam';
import { tokyoChugakuMaxQuestions, tokyoKokoMaxQuestions } from './tokyo_max';

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
  ...kansaiHokuyoMaxQuestions,
];

// 明星中学校 — 入試形式 大問（偏差値56-62）
export const myojoExamQuestions: Question[] = [
  ...myojoSansu,
  ...myojoKokugo,
  ...myojoRika,
  ...myojoShakai,
  ...myojoEigo,
  ...myojoMaxQuestions,
];

// 帝塚山学院中学校 — 入試形式 大問（偏差値55-60）
export const tezukayamaExamQuestions: Question[] = [
  ...tezukayamaSansu,
  ...tezukayamaKokugo,
  ...tezukayamaRika,
  ...tezukayamaShakai,
  ...tezukayamaEigo,
  ...tezukayamaMaxQuestions,
];

// 関関同立附属中学校 — 入試形式 大問（偏差値58-68）
export { kankanExamQuestions, kankanMaxQuestions };

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

// 東京 中学受験 — 明大明治中（偏差値60-64）
export const tokyoMeidaiExamQuestions: Question[] = [
  ...tokyoMeidaiSansu,
  ...tokyoMeidaiKokugo,
  ...tokyoMeidaiRika,
  ...tokyoMeidaiShakai,
  ...tokyoMeidaiEigo,
];

// 東京 中学受験 — 青山学院中等部（偏差値62-66）
export const tokyoAoyamaExamQuestions: Question[] = [
  ...tokyoAoyamaSansu,
  ...tokyoAoyamaKokugo,
  ...tokyoAoyamaRika,
  ...tokyoAoyamaShakai,
  ...tokyoAoyamaEigo,
];

// 東京 中学受験 — 中央大学附属中（偏差値60-64）
export const tokyoChuoExamQuestions: Question[] = [
  ...tokyoChuoSansu,
  ...tokyoChuoKokugo,
  ...tokyoChuoRika,
  ...tokyoChuoShakai,
  ...tokyoChuoEigo,
];

// 東京 中学受験 — 法政第二中（偏差値58-62）
export const tokyoHoseiExamQuestions: Question[] = [
  ...tokyoHoseiSansu,
  ...tokyoHoseiKokugo,
  ...tokyoHoseiRika,
  ...tokyoHoseiShakai,
  ...tokyoHoseiEigo,
];

// 東京 中学受験 — 学習院中等科（偏差値56-62）
export const tokyoGakushiinExamQuestions: Question[] = [
  ...tokyoGakushiinSansu,
  ...tokyoGakushiinKokugo,
  ...tokyoGakushiinRika,
  ...tokyoGakushiinShakai,
  ...tokyoGakushiinEigo,
];

// 東京 高校受験 — 都立日比谷・西レベル（偏差値70-73）MAX限定
export const tokyoHibiyaExamQuestions: Question[] = [
  ...tokyoHibiyaSansu,
  ...tokyoHibiyaKokugo,
  ...tokyoHibiyaRika,
  ...tokyoHibiyaShakai,
  ...tokyoHibiyaEigo,
];

// 東京 高校受験 — 早稲田附属・慶應・開成レベル（偏差値72-75）MAX限定
export const tokyoWasedaExamQuestions: Question[] = [
  ...tokyoWasedaSansu,
  ...tokyoWasedaKokugo,
  ...tokyoWasedaRika,
  ...tokyoWasedaShakai,
  ...tokyoWasedaEigo,
];

// 東京 高校受験 — 明大明治高・法政・中大附属（偏差値64-68）
export const tokyoMeidaiKokoExamQuestions: Question[] = [
  ...tokyoMeidaiKokoSansu,
  ...tokyoMeidaiKokoKokugo,
  ...tokyoMeidaiKokoRika,
  ...tokyoMeidaiKokoShakai,
  ...tokyoMeidaiKokoEigo,
];

export { tokyoChugakuMaxQuestions, tokyoKokoMaxQuestions };
