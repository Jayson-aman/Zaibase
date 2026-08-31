import type { CourseKey, ExamType } from './courses';
import { kankanQuestions, shitennojiQuestions, kokoGeneralQuestions } from './questions-courses';
import { kokoKankanQuestions, kokoTopQuestions } from './questions-koko';
import { kokoMaxSansu } from './koko_max_sansu';
import { kokoMaxKokugo } from './koko_max_kokugo';
import { kokoMaxRika } from './koko_max_rika';
import { kokoMaxEigo } from './koko_max_eigo';
import { kokoMaxShakai } from './koko_max_shakai';
import { kokoKisoSansu50 } from './koko_kiso_sansu_50';
import { kokoKisoSansu100 } from './koko_kiso_sansu_100';
import { kokoOyoSansu50 } from './koko_oyo_sansu_50';
import { kokoMoshiSansu50 } from './koko_moshi_sansu_50';
import { kokoKisoKokugo50 } from './koko_kiso_kokugo_50';
import { kokoMoshiKokugo50 } from './koko_moshi_kokugo_50';
import { kokoKisoRika50 } from './koko_kiso_rika_50';
import { kokoKisoEigo50 } from './koko_kiso_eigo_50';
import { kokoKisoShakai50 } from './koko_kiso_shakai_50';
import { kokoMoshiShakai50 } from './koko_moshi_shakai_50';
import { seikoQuestions, seifuNankaiQuestions, takatsukiQuestions } from './questions-schools-1';
import { kaimeiQuestions, toinQuestions, kindaiQuestions, kansaiHokuyoQuestions } from './questions-schools-2';
import { toinExamQuestions, kindaiExamQuestions, kaimeiExamQuestions, kansaiHokuyoExamQuestions, myojoExamQuestions, tezukayamaExamQuestions, kinrankaiExamQuestions, otaniExamQuestions, kankanExamQuestions, kankanMaxQuestions, tokyoMeidaiExamQuestions, tokyoAoyamaExamQuestions, tokyoChuoExamQuestions, tokyoHoseiExamQuestions, tokyoGakushiinExamQuestions, tokyoHibiyaExamQuestions, tokyoWasedaExamQuestions, tokyoMeidaiKokoExamQuestions, tokyoChugakuMaxQuestions, tokyoKokoMaxQuestions } from './questions-exam';
import { freeTeaserQuestions } from './questions-free-teaser';
// 記述式・複数小問の応用問題（暗記形式の一問一答とは別枠）
import { writtenChugakuRikeiQuestions } from './questions-written-chugaku-rikei';
import { writtenKokoQuestions } from './questions-written-koko';
import { writtenChugakuBunkeiQuestions } from './questions-written-chugaku-bunkei';
import { myojoQuestions, tezukayamaQuestions, kinrankaiQuestions, otaniQuestions } from './questions-schools-3';
import { kisoSansu } from './kiso_sansu';
import { sansuKiso } from './questions_sansu_kiso';
import { sansuExtra2 } from './questions_sansu_extra2';
import { sansuGeneralPlus } from './questions_sansu_general_plus';
import { oyoSansuPart1 } from './oyoSansuPart1';
import { oyoSansuPart2 } from './oyoSansuPart2';
import { oyoSansuPart3 } from './oyoSansuPart3';
import { kisoRika } from './kiso_rika';
import { rikaExtra } from './questions_rika_extra';
import { rikaExtra2 } from './questions_rika_extra2';
import { rikaGeneralPlus } from './questions_rika_general_plus';
import { kokugoGeneralPlus } from './questions_kokugo_general_plus';
import { kokugoExtra } from './questions_kokugo_extra';
import { kokugoExtra3 } from './questions_kokugo_extra3';
import { kokugoExtra2a } from './questions_kokugo_extra2a';
import { kokugoExtra2b } from './questions_kokugo_extra2b';
import { shakaiExtra } from './questions_shakai_extra';
import { kisoShakai } from './kiso-questions';
import { shakaiExtra2a } from './questions_shakai_extra2a';
import { shakaiExtra2b } from './questions_shakai_extra2b';
import { shakaiGeneralPlus } from './questions_shakai_general_plus';
import { eigoExtra } from './questions_eigo_extra';
import { eigoExtra2 } from './questions_eigo_extra2';
import { nichinokenSansu } from './nichinoken_sansu';
import { nichinokenKokugo } from './nichinoken_kokugo';
import { nichinokenRika } from './nichinoken_rika';
import { nichinokenShakai } from './nichinoken_shakai';
import { nichinokenEigo } from './nichinoken_eigo';
import { kokoNyushiRika50 } from './koko_nyushi_rika_50';
import { kokoNyushiSansu50 } from './koko_nyushi_sansu_50';
import { kokoNyushiEigo50 } from './koko_nyushi_eigo_50';
import { kokoNyushiEigo2 } from './koko_nyushi_eigo2';
import { kokoNyushiEigo3 } from './koko_nyushi_eigo3';
import { kokoNyushiEigo4 } from './koko_nyushi_eigo4';
import { kokoNyushiEigo5 } from './koko_nyushi_eigo5';
import { kokoNyushiEigo6 } from './koko_nyushi_eigo6';
import { kokoNyushiEigo7 } from './koko_nyushi_eigo7';
import { kokoNyushiEigo8 } from './koko_nyushi_eigo8';
import { kokoNyushiEigo9 } from './koko_nyushi_eigo9';
import { kokoNyushiEigo10 } from './koko_nyushi_eigo10';
import { kokoNyushiEigo11 } from './koko_nyushi_eigo11';
import { kokoNyushiShakai50 } from './koko_nyushi_shakai_50';
import { kokoNyushiKokugo50 } from './koko_nyushi_kokugo_50';
import { kokoKisoRika50b } from './koko_kiso_rika_50b';
import { kokoKisoShakai50b } from './koko_kiso_shakai_50b';
import { kokoKisoKokugo50b } from './koko_kiso_kokugo_50b';
import { kokoKisoSansu50b } from './koko_kiso_sansu_50b';
import { kokoKisoEigo50b } from './koko_kiso_eigo_50b';
import { kokoOyoRika50 } from './koko_oyo_rika_50';
import { kokoOyoKokugo50 } from './koko_oyo_kokugo_50';
import { kokoOyoShakai50 } from './koko_oyo_shakai_50';
import { kokoOyoEigo50 } from './koko_oyo_eigo_50';
import { kokoMoshiRika50 } from './koko_moshi_rika_50';
import { kokoMoshiEigo50 } from './koko_moshi_eigo_50';
import { moshi202609KokoKokugo } from './moshi_2026_09_koko_kokugo';
import { moshi202609KokoEigo } from './moshi_2026_09_koko_eigo';
import { moshi202609KokoShakai } from './moshi_2026_09_koko_shakai';
import { moshi202609KokoSansu } from './moshi_2026_09_koko_sansu';
import { moshi202609KokoRika } from './moshi_2026_09_koko_rika';
import { kokoKankanEigo20 } from './koko_kankan_eigo_20';
import { kokoKankanSansu20 } from './koko_kankan_sansu_20';
import { kokoKankanKokugo20 } from './koko_kankan_kokugo_20';
import { kokoKankanRika20 } from './koko_kankan_rika_20';
import { kokoKankanShakai20 } from './koko_kankan_shakai_20';
import { kokoKankanEigo30 } from './koko_kankan_eigo_30';
import { kokoKankanSansu30 } from './koko_kankan_sansu_30';
import { kokoKankanKokugo30 } from './koko_kankan_kokugo_30';
import { kokoKankanRika30 } from './koko_kankan_rika_30';
import { kokoKankanShakai30 } from './koko_kankan_shakai_30';
import { kokoKankanEigoC1 } from './koko_kankan_eigo_c1';
import { kokoKankanEigoC2 } from './koko_kankan_eigo_c2';
import { kokoKankanEigoC3 } from './koko_kankan_eigo_c3';
import { kokoKankanKokugoC1 } from './koko_kankan_kokugo_c1';
import { kokoKankanKokugoC2 } from './koko_kankan_kokugo_c2';
import { kokoKankanKokugoC3 } from './koko_kankan_kokugo_c3';
import { kokoKankanRikaC1 } from './koko_kankan_rika_c1';
import { kokoKankanRikaC2 } from './koko_kankan_rika_c2';
import { kokoKankanRikaC3 } from './koko_kankan_rika_c3';
import { kokoKankanShakaiC1 } from './koko_kankan_shakai_c1';
import { kokoKankanShakaiC2 } from './koko_kankan_shakai_c2';
import { kokoKankanShakaiC3 } from './koko_kankan_shakai_c3';
import { kokoKankanSansuC1 } from './koko_kankan_sansu_c1';
import { kokoKankanSansuC2 } from './koko_kankan_sansu_c2';
import { kokoKankanSansuC3 } from './koko_kankan_sansu_c3';
import { kokoKankanSansuC4 } from './koko_kankan_sansu_c4';
import { kokoKankanSansuC5 } from './koko_kankan_sansu_c5';
import { kokoSansuEx01 } from './koko_sansu_ex_01';
import { kokoSansuEx02 } from './koko_sansu_ex_02';
import { kokoSansuEx03 } from './koko_sansu_ex_03';
import { kokoSansuEx04 } from './koko_sansu_ex_04';
import { kokoSansuEx05 } from './koko_sansu_ex_05';
import { chugakuSansuEx01 } from './chugaku_sansu_ex_01';
import { kokoSansuEx09 } from './koko_sansu_ex_09';
import { kokoSansuEx06 } from './koko_sansu_ex_06';
import { kokoSansuEx07 } from './koko_sansu_ex_07';
import { kokoSansuEx17 } from './koko_sansu_ex_17';
import { kokoSansuEx08 } from './koko_sansu_ex_08';
import { kokoSansuEx10 } from './koko_sansu_ex_10';
import { kokoSansuEx11 } from './koko_sansu_ex_11';
import { kokoSansuEx12 } from './koko_sansu_ex_12';
import { kokoSansuEx13 } from './koko_sansu_ex_13';
import { kokoSansuEx15 } from './koko_sansu_ex_15';
import { kokoSansuEx16 } from './koko_sansu_ex_16';
import { chugakuSansuEx02 } from './chugaku_sansu_ex_02';
import { kokoSansuEx14 } from './koko_sansu_ex_14';
import { kokoEigoEx01 } from './kokoEigoEx01';
import { kokoKokugoEx01 } from './koko_kokugo_ex_01';
import { kokoRikaEx01 } from './koko_rika_ex_01';
import { kokoShakaiEx01 } from './kokoShakaiEx01';
import { nandaiChugakuEx01 } from './nandai_chugaku_ex_01';
import { kindaiExamV2 } from './kindai_exam_v2';
import { seifuExamV2 } from './seifu_exam_v2';
import { takatsukiExamV2 } from './takatsuki_exam_v2';
import { kaimeiExamV2 } from './kaimei_exam_v2';
import { toinExamV2 } from './toin_exam_v2';
import { toinExamTop } from './toin_exam_top';
import { josejogakuenExam } from './josejogakuen_exam';
import { naniwaExam } from './naniwa_exam';
import { otemonExam } from './otemon_exam';
import { pooleExam } from './poole_exam';
import { kenmeiExam } from './kenmei_exam';
import { kankanExamTop } from './kankan_exam_top';
import { tokyoMeidaiExam } from './tokyo_meidai_exam';
import { tokyoAoyamaExam } from './tokyo_aoyama_exam';
import { tokyoChuoExam } from './tokyo_chuo_exam';
import { tokyoHoseiExam } from './tokyo_hosei_exam';
import { tokyoGakushuinExam } from './tokyo_gakushuin_exam';
import { nagoyaNanzanExam } from './nagoya_nanzan_exam';
import { nagoyaTokaiExam } from './nagoya_tokai_exam';
import { nagoyaTakiExam } from './nagoya_taki_exam';
import { fukuokaKurumeExam } from './fukuoka_kurume_exam';
import { fukuokaSeinanExam } from './fukuoka_seinan_exam';
import { fukuokaOhoriExam } from './fukuoka_ohori_exam';

// ── 中学受験 標準レベル追加分（6000問化） ──────────────────────────
import { chugaku2026Sansu1 } from './chugaku2026_sansu_1';
import { chugaku2026Sansu2 } from './chugaku2026_sansu_2';
import { chugaku2026Kokugo1 } from './chugaku2026_kokugo_1';
import { chugaku2026Kokugo2 } from './chugaku2026_kokugo_2';
import { chugaku2026Rika1 } from './chugaku2026_rika_1';
import { chugaku2026Rika2 } from './chugaku2026_rika_2';
import { chugaku2026Shakai1 } from './chugaku2026_shakai_1';
import { chugaku2026Shakai2 } from './chugaku2026_shakai_2';
import { chugaku2026Eigo1 } from './chugaku2026_eigo_1';
import { chugaku2026Eigo2 } from './chugaku2026_eigo_2';

// ── 高校受験 関東・東京・関関同立 本試験レベル追加分（5000問化） ──────
import { kokoKanto2026Sansu } from './koko_kanto2026_sansu';
import { kokoKanto2026Kokugo } from './koko_kanto2026_kokugo';
import { kokoKanto2026Rika } from './koko_kanto2026_rika';
import { kokoKanto2026Shakai } from './koko_kanto2026_shakai';
import { kokoKanto2026Eigo } from './koko_kanto2026_eigo';

// ── 1学期期末テスト対策追加分 ──────────────────────────────────────
import { term1_2026ChugakuSansu } from './term1_2026_chugaku_sansu';
import { term1_2026ChugakuKokugo } from './term1_2026_chugaku_kokugo';
import { term1_2026ChugakuRika } from './term1_2026_chugaku_rika';
import { term1_2026ChugakuShakai } from './term1_2026_chugaku_shakai';
import { term1_2026ChugakuEigo } from './term1_2026_chugaku_eigo';
import { term1_2026KokoSansu } from './term1_2026_koko_sansu';
import { term1_2026KokoKokugo } from './term1_2026_koko_kokugo';
import { term1_2026KokoRika } from './term1_2026_koko_rika';
import { term1_2026KokoShakai } from './term1_2026_koko_shakai';
import { term1_2026KokoEigo } from './term1_2026_koko_eigo';

export type { Question, SubjectKey } from './questions-meta';
export { subjectInfo } from './questions-meta';
import type { Question } from './questions-meta';
import type { SubjectKey } from './questions-meta';
import { kokugoChoubunChugaku } from './kokugo_choubun_chugaku';
import { eigoChoubunChugaku } from './eigo_choubun_chugaku';
import { kokoRikaExpand1 } from './koko_rika_expand_1';
import { kokoShakaiExpand1 } from './koko_shakai_expand_1';
import { kokoKokugoExpand1 } from './koko_kokugo_expand_1';
import { sansuDataChugaku } from './sansu_data_chugaku';
import { kokugoChoubunKoko } from './kokugo_choubun_koko';
import { kokugoChoubunChugaku2 } from './kokugo_choubun_chugaku_2';
import { kokugoChoubunKoko2 } from './kokugo_choubun_koko_2';

// ── 学校別問題（40校以上に対応・図解付き） ────────────────────────────
import { schoolOsakaJogakuin } from './school_osaka_jogakuin';
import { schoolKokoAzabu } from './school_koko_azabu';
import { schoolKokoNanzan } from './school_koko_nanzan';
import { schoolKokoSeinan } from './school_koko_seinan';
import { schoolKokoTaki } from './school_koko_taki';
import { schoolKokoKurume } from './school_koko_kurume';
import { schoolKokoOhori } from './school_koko_ohori';
import { schoolKokoTokai } from './school_koko_tokai';
import { schoolKokoShitennoji } from './school_koko_shitennoji';
import { schoolKokoHibiyaWasedaFill } from './school_koko_hibiya_waseda_fill';
import { schoolKokoKaseiFill } from './school_koko_kasei_fill';
import { schoolKokoTodaijiFill } from './school_koko_todaiji_fill';
import { schoolKokoKoyoFill } from './school_koko_koyo_fill';
import { schoolKokoKeioFill } from './school_koko_keio_fill';
import { schoolKokoNadaFill } from './school_koko_nada_fill';
import { schoolKokoNishiyamatoFill } from './school_koko_nishiyamato_fill';
import { schoolKokoMeidaiFill } from './school_koko_meidai_fill';
import { gradeE5SansuQuestions } from './grade_e5_sansu';
import { gradeE4SansuQuestions } from './grade_e4_sansu';
import { gradeJ1SansuQuestions } from './grade_j1_sansu';
import { gradeE6SansuQuestions } from './grade_e6_sansu';
import { gradeJ2SansuQuestions } from './grade_j2_sansu';
import { gradeJ3SansuQuestions } from './grade_j3_sansu';
import { gradeE4KokugoQuestions } from './grade_e4_kokugo';
import { gradeE4EigoQuestions } from './grade_e4_eigo';
import { gradeE4RikaQuestions } from './grade_e4_rika';
import { gradeE4ShakaiQuestions } from './grade_e4_shakai';
import { gradeE5EigoQuestions } from './grade_e5_eigo';
import { gradeE5KokugoQuestions } from './grade_e5_kokugo';
import { gradeE5ShakaiQuestions } from './grade_e5_shakai';
import { gradeE6KokugoQuestions } from './grade_e6_kokugo';
import { gradeE6ShakaiQuestions } from './grade_e6_shakai';
import { gradeJ1ShakaiQuestions } from './grade_j1_shakai';
import { gradeJ3ShakaiQuestions } from './grade_j3_shakai';
import { gradeE5RikaQuestions } from './grade_e5_rika';
import { gradeE6RikaQuestions } from './grade_e6_rika';
import { gradeJ1RikaQuestions } from './grade_j1_rika';
import { gradeJ2RikaQuestions } from './grade_j2_rika';
import { gradeJ1KokugoQuestions } from './grade_j1_kokugo';
import { gradeJ2ShakaiQuestions } from './grade_j2_shakai';
import { gradeJ3RikaQuestions } from './grade_j3_rika';
import { gradeJ2KokugoQuestions } from './grade_j2_kokugo';
import { gradeJ3KokugoQuestions } from './grade_j3_kokugo';
import { gradeJ1EigoQuestions } from './grade_j1_eigo';
import { gradeJ2EigoQuestions } from './grade_j2_eigo';
import { gradeE6EigoQuestions } from './grade_e6_eigo';
import { gradeJ3EigoQuestions } from './grade_j3_eigo';
import { gradeKoushikiC1MensekiQuestions } from './grade_koushiki_c1menseki';
import { gradeKoushikiC2EnQuestions } from './grade_koushiki_c2en';
import { gradeKoushikiC3Tairyoku1Questions } from './grade_koushiki_c3tairyoku1';
import { gradeKoushikiC4Tairyoku2Questions } from './grade_koushiki_c4tairyoku2';
import { gradeKoushikiC6SojiQuestions } from './grade_koushiki_c6soji';
import { gradeKoushikiK2HeikouQuestions } from './grade_koushiki_k2heikou';
import { gradeKoushikiK4En1Questions } from './grade_koushiki_k4en1';
import { gradeKoushikiK5En2Questions } from './grade_koushiki_k5en2';
import { gradeKoushikiK1GodoQuestions } from './grade_koushiki_k1godo';
import { gradeKoushikiK3SoujiQuestions } from './grade_koushiki_k3souji';
import { gradeKoushikiK6SanpeiQuestions } from './grade_koushiki_k6sanpei';

export const questions: Question[] = [
  ...gradeKoushikiC1MensekiQuestions,
  ...gradeKoushikiC2EnQuestions,
  ...gradeKoushikiC3Tairyoku1Questions,
  ...gradeKoushikiC4Tairyoku2Questions,
  ...gradeKoushikiC6SojiQuestions,
  ...gradeKoushikiK2HeikouQuestions,
  ...gradeKoushikiK4En1Questions,
  ...gradeKoushikiK5En2Questions,
  ...gradeKoushikiK1GodoQuestions,
  ...gradeKoushikiK3SoujiQuestions,
  ...gradeKoushikiK6SanpeiQuestions,
  // ============================================================
  // 算数 (sansu) - 50問
  // ============================================================

  // --- basic (20問) ---
  {
    id: 'sansu_01',
    subject: 'sansu',
    question: '1から100までの整数の和は？',
    answer: '5050',
    hint: '等差数列の公式: n(n+1)/2 を使う',
    explanation: '1から100までを、はしからペアにして考える。\n1+100＝101、2+99＝101…と、101になるペアが50組できるので 101×50＝5050。\n公式にすると n×(n+1)÷2 で、100×101÷2＝5050。',
    difficulty: 'basic',
  },
  {
    id: 'sansu_02',
    subject: 'sansu',
    question: '24と36の最大公約数は？',
    answer: '12',
    explanation: '24と36をそれぞれ素因数分解する。24＝2×2×2×3、36＝2×2×3×3。\n両方に共通しているのは 2×2×3＝12。\n約数を全部書き出して、共通するいちばん大きい数をさがしてもよい。',
    difficulty: 'basic',
  },
  {
    id: 'sansu_03',
    subject: 'sansu',
    question: '半径5cmの円の面積は？（円周率は3.14）',
    answer: '78.5㎠',
    hint: '面積 = 半径 × 半径 × 3.14',
    explanation: '円の面積＝半径×半径×円周率。\n5×5×3.14＝25×3.14＝78.5 なので 78.5㎠。',
    difficulty: 'basic',
  },
  {
    id: 'sansu_04',
    subject: 'sansu',
    question: '鶴と亀が合わせて10匹、足の合計が28本。鶴は何羽？',
    answer: '6羽',
    hint: '全部亀と仮定すると40本。40-28=12本多い。鶴1羽に換えるたびに2本減るので12÷2=6羽',
    explanation: 'つるかめ算。まず全部が亀だと仮定すると足は 4×10＝40本。\n実際は28本なので 40−28＝12本 多い。\n亀1匹を鶴1羽にかえるごとに足は 4−2＝2本 へるので 12÷2＝6。\nよって鶴は6羽（亀は4匹。2×6+4×4＝28本で確かめられる）。',
    difficulty: 'basic',
  },
  {
    id: 'sansu_05',
    subject: 'sansu',
    question: '時速60kmで2時間30分走ると何km？',
    answer: '150km',
    hint: '2時間30分 = 2.5時間',
    explanation: '30分は 30÷60＝0.5時間 なので、2時間30分＝2.5時間。\n距離＝速さ×時間 なので 60×2.5＝150km。',
    difficulty: 'basic',
  },
  {
    id: 'sansu_06',
    subject: 'sansu',
    question: '3/4 + 5/6 = ？',
    answer: '19/12（1と7/12）',
    hint: '通分: 12が共通分母',
    explanation: '分母4と6の最小公倍数12で通分する。\n3/4＝9/12、5/6＝10/12。\n9/12+10/12＝19/12。仮分数を帯分数になおすと 1と7/12。',
    difficulty: 'basic',
  },
  {
    id: 'sansu_07',
    subject: 'sansu',
    question: '1辺が8cmの正方形の対角線の長さは？',
    answer: '8√2 cm ≈ 11.31cm',
    hint: 'ピタゴラスの定理: a² + b² = c²',
    explanation: '正方形を対角線で切ると、直角をはさむ2辺が8cmの直角二等辺三角形になる。\n三平方の定理より 対角線×対角線＝8×8+8×8＝128。\n128＝64×2 なので 対角線＝8√2cm。\n8×1.414＝約11.31cm。',
    difficulty: 'basic',
  },
  {
    id: 'sansu_08',
    subject: 'sansu',
    question: '整数の中で、1と自分自身しか約数を持たない数を何という？',
    answer: '素数',
    explanation: '約数が1と自分自身の2個しかない整数を素数という（2, 3, 5, 7, 11, 13…）。\n1は約数が1個しかないので素数にふくめない。4は約数が1・2・4の3個あるので素数ではない（合成数）。\n偶数の素数は2だけ、という点もよく問われる。',
    difficulty: 'basic',
  },
  {
    id: 'sansu_09',
    subject: 'sansu',
    question: '12%の食塩水200gに含まれる食塩の量は？',
    answer: '24g',
    hint: '200 × 0.12 = 24',
    explanation: '食塩の重さ＝食塩水の重さ×濃度。\n200×0.12＝24 なので24g。\n残りの 200−24＝176g が水。',
    difficulty: 'basic',
  },
  {
    id: 'sansu_10',
    subject: 'sansu',
    question: '90を素因数分解すると？',
    answer: '2 × 3² × 5',
    explanation: '小さい素数から順に割っていく。\n90÷2＝45、45÷3＝15、15÷3＝5、5÷5＝1。\n使った素数をならべて 2×3×3×5、指数を使って 2×3²×5。',
    difficulty: 'basic',
  },
  {
    id: 'sansu_11',
    subject: 'sansu',
    question: '三角形の内角の和は何度？',
    answer: '180度',
    explanation: '三角形の3つの角を切りとって1点にならべると、ちょうど一直線になる。\n一直線は180度なので、どんな形の三角形でも内角の和は180度。\n四角形は三角形2つ分で360度、n角形は (n−2)×180度。',
    difficulty: 'basic',
  },
  {
    id: 'sansu_12',
    subject: 'sansu',
    question: '100円の品物を30%引きで買うといくら？',
    answer: '70円',
    hint: '100 × (1 - 0.3) = 70',
    explanation: '30%引きとは、もとのねだんの 100−30＝70% で買えるということ。\n100×0.7＝70 なので70円。\n（100×0.3＝30円 引く、と考えても同じ。）',
    difficulty: 'basic',
  },
  {
    id: 'sansu_13',
    subject: 'sansu',
    question: '1辺10cmの立方体の体積は？',
    answer: '1000cm³',
    hint: '体積 = 辺 × 辺 × 辺',
    explanation: '立方体の体積＝1辺×1辺×1辺。\n10×10×10＝1000 なので 1000cm³。\nちなみに 1000cm³＝1L。',
    difficulty: 'basic',
  },
  {
    id: 'sansu_14',
    subject: 'sansu',
    question: '速さ・時間・距離の関係式は？',
    answer: '距離 = 速さ × 時間',
    explanation: '「みはじ」の図で覚える。距離（み）＝速さ（は）×時間（じ）。\n同じ図から 速さ＝距離÷時間、時間＝距離÷速さ も出せる。\n時速なら時間、分速なら分と、単位をそろえてから計算するのが大切。',
    difficulty: 'basic',
  },
  {
    id: 'sansu_15',
    subject: 'sansu',
    question: '2けたの整数で、十の位と一の位の数字の和が9になるものは何個？',
    answer: '9個（18, 27, 36, 45, 54, 63, 72, 81, 90）',
    explanation: '十の位は1〜9（0は使えない）。十の位が決まれば一の位は 9−十の位 と自動的に決まる。\n十の位が1→18、2→27、3→36…9→90。\nよって9個。',
    difficulty: 'basic',
  },
  {
    id: 'sansu_16',
    subject: 'sansu',
    question: '0.75を分数で表すと？',
    answer: '3/4',
    hint: '0.75 = 75/100 = 3/4',
    explanation: '小数第2位までの小数は、分母を100にして分数にできる。\n0.75＝75/100。\n分子と分母を25で割って 3/4。',
    difficulty: 'basic',
  },
  {
    id: 'sansu_17',
    subject: 'sansu',
    question: '1km = 何m？',
    answer: '1000m',
    explanation: 'k（キロ）は1000倍を表す記号なので 1km＝1000m。\n同じように 1kg＝1000g、1kL＝1000L。\n逆に m（ミリ）は1000分の1で、1mm＝0.001m。',
    difficulty: 'basic',
  },
  {
    id: 'sansu_18',
    subject: 'sansu',
    question: '底辺12cm、高さ8cmの三角形の面積は？',
    answer: '48㎠',
    hint: '面積 = 底辺 × 高さ ÷ 2',
    explanation: '三角形の面積＝底辺×高さ÷2。\n12×8÷2＝96÷2＝48 なので48㎠。',
    difficulty: 'basic',
  },
  {
    id: 'sansu_19',
    subject: 'sansu',
    question: '240の約数の個数は？',
    answer: '20個',
    hint: '240 = 2⁴ × 3 × 5。約数の個数 = (4+1)(1+1)(1+1) = 20',
    explanation: 'まず素因数分解する。240＝2×2×2×2×3×5＝2⁴×3×5。\n約数の個数は、それぞれの指数に1をたしてかけ算する。\n(4+1)×(1+1)×(1+1)＝5×2×2＝20個。',
    difficulty: 'basic',
  },
  {
    id: 'sansu_20',
    subject: 'sansu',
    question: '1時間20分 = 何分？',
    answer: '80分',
    explanation: '1時間＝60分なので 60+20＝80分。\n逆に分から時間になおすときは60で割る（80分＝80÷60＝1と1/3時間）。',
    difficulty: 'basic',
  },

  // --- standard (20問) ---
  {
    id: 'sansu_21',
    subject: 'sansu',
    question: 'A, B, Cの3人がある仕事をすると、AとBで6日、BとCで4日、AとCで12日かかる。3人一緒だと何日かかるか？',
    answer: '4日',
    hint: '1日の仕事量: A+B=1/6, B+C=1/4, A+C=1/12。合計÷2でA+B+C=1/4',
    explanation: '仕事全体を1として、1日にできる仕事量で考える。\nA+B＝1/6、B+C＝1/4、A+C＝1/12。\n3つをたすと (A+B+C) が2回分になるので 1/6+1/4+1/12＝2/12+3/12+1/12＝6/12＝1/2。\nA+B+C＝1/2÷2＝1/4。\n1÷(1/4)＝4 なので4日。',
    difficulty: 'standard',
  },
  {
    id: 'sansu_22',
    subject: 'sansu',
    question: '兄と弟が家から公園まで歩く。兄は分速80m、弟は分速60mで、兄が出発して5分後に弟が出発した。弟が出発してから何分後に兄と弟の差が500mになるか？',
    answer: '5分後',
    hint: '弟が出発した時点で兄は80×5=400m先にいる。その後1分ごとに差は80-60=20mずつ広がるので、差＝20t+400。500=20t+400を解く。',
    explanation: '弟が出発した時点で、兄はすでに 80×5＝400m 先にいる。\nそのあとは1分ごとに 80−60＝20m ずつ差が開く。\n差が500mになるのは、あと 500−400＝100m 開いたとき。\n100÷20＝5 なので5分後。',
    difficulty: 'standard',
  },
  {
    id: 'sansu_23',
    subject: 'sansu',
    question: '池の周りに木を植える。周囲が120mの池に8m間隔で植えると何本必要か？',
    answer: '15本',
    hint: '池の周り（円形）は植木算で 120 ÷ 8 = 15本',
    explanation: '池の周りのように輪になっている場合は、木の本数と間の数が同じになる（植木算）。\n120÷8＝15 なので15本。\nまっすぐな道で両はしにも植えるときだけ +1本 必要になるので区別する。',
    difficulty: 'standard',
  },
  {
    id: 'sansu_24',
    subject: 'sansu',
    question: '定価の2割引きで売っても、原価の2割増しの利益がある。定価は原価の何倍か？',
    answer: '1.5倍',
    hint: '定価×0.8 = 原価×1.2 より 定価 = 原価×1.5',
    explanation: '原価を1として考える。定価を□とすると、2割引きで売った値段は □×0.8。\nそれが原価の2割増し 1×1.2 と等しいので □×0.8＝1.2。\n□＝1.2÷0.8＝1.5 なので、定価は原価の1.5倍。',
    difficulty: 'standard',
  },
  {
    id: 'sansu_25',
    subject: 'sansu',
    question: '男子と女子の比が3:2のクラスで、全員が40人のとき男子は何人？',
    answer: '24人',
    hint: '40 × 3/5 = 24',
    explanation: '男子:女子＝3:2 なので、クラス全体は 3+2＝5 の割合。\n男子は全体の 3/5 にあたるので 40×3/5＝24人。\n女子は 40×2/5＝16人 で、合計40人になる。',
    difficulty: 'standard',
  },
  {
    id: 'sansu_26',
    subject: 'sansu',
    question: '底面が半径3cm、高さ10cmの円柱の体積は？（π = 3.14）',
    answer: '282.6cm³',
    hint: '体積 = π × r² × h = 3.14 × 9 × 10',
    explanation: '円柱の体積＝底面積×高さ。\n底面積＝3×3×3.14＝28.26㎠。\n28.26×10＝282.6 なので 282.6cm³。',
    difficulty: 'standard',
  },
  {
    id: 'sansu_27',
    subject: 'sansu',
    question: '1, 3, 6, 10, 15, … の数列の第10項は？',
    answer: '55',
    hint: '三角数: 第n項 = n(n+1)/2。第10項 = 10×11/2',
    explanation: '1, 3, 6, 10, 15…は 1、1+2、1+2+3、1+2+3+4…とたしていく数（三角数）。\n第n項＝n×(n+1)÷2。\n第10項＝10×11÷2＝55。',
    difficulty: 'standard',
  },
  {
    id: 'sansu_28',
    subject: 'sansu',
    question: '5人から3人を選ぶ組み合わせは何通り？',
    answer: '10通り',
    hint: '₅C₃ = 5×4×3 ÷ (3×2×1) = 10',
    explanation: '5人から3人を選ぶだけで、選ぶ順番は関係ない（組み合わせ）。\nまず順番をつけて選ぶと 5×4×3＝60通り。\n同じ3人でも並べ方が 3×2×1＝6通りあり重複しているので 60÷6＝10通り。',
    difficulty: 'standard',
    answerReading: '10通り。5コンビネーション3は、5かける4かける3を、3かける2かける1で割って10通り',
  },
  {
    id: 'sansu_29',
    subject: 'sansu',
    question: '濃度8%の食塩水200gと濃度12%の食塩水300gを混ぜると、何%の食塩水になるか？',
    answer: '10.4%',
    hint: '食塩量: 16g + 36g = 52g。合計: 500g。52÷500 = 0.104',
    explanation: 'まず食塩の重さを求める。200×0.08＝16g、300×0.12＝36g。\n食塩は合わせて 16+36＝52g、食塩水は 200+300＝500g。\n52÷500＝0.104 なので 10.4%。',
    difficulty: 'standard',
  },
  {
    id: 'sansu_30',
    subject: 'sansu',
    question: '時速72kmは秒速何m？',
    answer: '秒速20m',
    hint: '72 × 1000 ÷ 3600 = 20',
    explanation: '時速72kmは、1時間（3600秒）に72000m進むということ。\n72000÷3600＝20 なので秒速20m。\n時速から秒速へは ÷3.6、秒速から時速へは ×3.6 と覚えてもよい。',
    difficulty: 'standard',
  },
  {
    id: 'sansu_31',
    subject: 'sansu',
    question: '家から学校まで時速4kmで歩くと10分遅れ、時速6kmで走ると5分早く着く。家から学校までの距離は？',
    answer: '3km',
    hint: '距離 = 速さ × 時間。t を正確な時間として 4(t+10/60) = 6(t-5/60)を解く',
    explanation: 'ちょうど間に合う時間をt時間とする。\n時速4kmだと10分（1/6時間）よけいにかかるので 距離＝4×(t+1/6)。\n時速6kmだと5分（1/12時間）早く着くので 距離＝6×(t−1/12)。\n4t+2/3＝6t−1/2 → 2t＝7/6 → t＝7/12時間。\n距離＝4×(7/12+2/12)＝4×9/12＝3km。',
    difficulty: 'standard',
  },
  {
    id: 'sansu_32',
    subject: 'sansu',
    question: '正六角形の内角の大きさは？',
    answer: '120度',
    hint: '多角形の内角の和 = (n-2)×180。n=6: 720度 ÷ 6 = 120度',
    explanation: 'n角形の内角の和＝(n−2)×180度。\n六角形は (6−2)×180＝720度。\n正六角形は6つの角がすべて等しいので 720÷6＝120度。',
    difficulty: 'standard',
  },
  {
    id: 'sansu_33',
    subject: 'sansu',
    question: 'A君は毎分50枚、B君は毎分30枚のチラシを配る。2人合わせて1600枚を配り終えるのに何分かかるか？',
    answer: '20分',
    hint: '1分間に合計80枚。1600 ÷ 80 = 20分',
    explanation: '2人合わせると1分間に 50+30＝80枚 配れる。\n1600÷80＝20 なので20分。',
    difficulty: 'standard',
  },
  {
    id: 'sansu_34',
    subject: 'sansu',
    question: '1辺6cmの正方形の面積と等しい円の半径は？（π = 3.14、小数第2位まで）',
    answer: '約3.39cm',
    hint: '3.14 × r² = 36 → r² ≈ 11.46 → r ≈ 3.39',
    explanation: '正方形の面積は 6×6＝36㎠。\n円の面積＝半径×半径×3.14 なので 3.14×r×r＝36。\nr×r＝36÷3.14＝約11.4650。\n3.38×3.38＝11.4244、3.39×3.39＝11.4921 なので、半径は 3.38と3.39のあいだ。\nくわしく計算すると 3.3860… なので、小数第2位まで四捨五入して 約3.39cm。',
    difficulty: 'standard',
  },
  {
    id: 'sansu_35',
    subject: 'sansu',
    question: '赤球3個、白球2個の計5個から2個取り出すとき、2個とも赤球である確率は？',
    answer: '3/10',
    hint: '₅C₂ = 10通り、赤2個の選び方 ₃C₂ = 3通り',
    explanation: '5個から2個取り出す取り出し方は 5×4÷2＝10通り。\nそのうち赤3個から2個を選ぶのは 3×2÷2＝3通り。\n3÷10＝3/10。',
    difficulty: 'standard',
    answerReading: '10分の3。5コンビネーション2は10通り、赤2個の選び方は3コンビネーション2の3通りなので、10分の3になる',
  },
  {
    id: 'sansu_36',
    subject: 'sansu',
    question: '長さ200mの列車が時速90kmで走っている。1000mのトンネルを完全に通過するのに何秒かかるか？',
    answer: '48秒',
    hint: '秒速25m。通過距離 = 1000 + 200 = 1200m。1200 ÷ 25 = 48秒',
    explanation: 'まず速さを秒速になおす。90×1000÷3600＝25 なので秒速25m。\n「完全に通過する」とは、先頭が入り口に入ってから最後尾が出口を出るまでなので、進む距離はトンネル＋列車の長さ。\n1000+200＝1200m。\n1200÷25＝48 なので48秒。',
    difficulty: 'standard',
  },
  {
    id: 'sansu_37',
    subject: 'sansu',
    question: '3%の食塩水が200gある。これを煮詰めて5%にするには、何gの水を蒸発させればよいか？',
    answer: '80g',
    hint: '食塩量 = 200×0.03 = 6g。5%にするには 6÷0.05 = 120g必要。200-120 = 80g蒸発',
    explanation: '水を蒸発させても食塩の重さは変わらない、というのがポイント。\n食塩＝200×0.03＝6g。\nこの6gが5%にあたるような食塩水の重さは 6÷0.05＝120g。\n200−120＝80 なので、80gの水を蒸発させればよい。',
    difficulty: 'standard',
  },
  {
    id: 'sansu_38',
    subject: 'sansu',
    question: '0, 1, 2, 3の4枚の数字カードから3枚を選んで3桁の整数を作るとき、何通りできるか？',
    answer: '18通り',
    hint: '百の位は0以外の3通り。残り3枚から2枚並べる: 3×3×2=18',
    explanation: '3桁の数なので、百の位に0は使えない。百の位は1・2・3の3通り。\n十の位は残った3枚から3通り、一の位は残った2枚から2通り。\n3×3×2＝18通り。',
    difficulty: 'standard',
  },
  {
    id: 'sansu_39',
    subject: 'sansu',
    question: '2辺が6cmと8cm、その間の角が90°の三角形の面積は？',
    answer: '24㎠',
    hint: '直角三角形の面積 = 6 × 8 ÷ 2',
    explanation: 'はさむ角が90度なので、6cmと8cmの辺がそのまま底辺と高さになる。\n6×8÷2＝24 なので24㎠。',
    difficulty: 'standard',
  },
  {
    id: 'sansu_40',
    subject: 'sansu',
    question: '兄は2段ずつ、弟は3段ずつ階段を上る。二人が同時に同じ段に立つ最初の段は何段目か？（1段から始まる）',
    answer: '6段目',
    hint: '2と3の最小公倍数 = 6',
    explanation: '兄がふむのは2の倍数の段、弟がふむのは3の倍数の段。\n2人が同じ段に立つのは2と3の公倍数の段。\nいちばん小さい公倍数（最小公倍数）は6なので6段目。',
    difficulty: 'standard',
  },

  // --- advanced (10問) ---
  {
    id: 'sansu_41',
    subject: 'sansu',
    question: '半径10cmの円に内接する正三角形の面積は？（√3 ≈ 1.732）',
    answer: '約129.9㎠（75√3㎠）',
    hint: '外接円半径R=10cm、正三角形の辺a = R√3。面積 = (√3/4)a²',
    explanation: '正三角形の中心から頂点までの長さが外接円の半径で10cm。\n1辺aと外接円の半径Rには a＝R×√3 の関係があるので a＝10√3cm。\n正三角形の面積＝(√3/4)×a×a＝(√3/4)×300＝75√3。\n75×1.732＝約129.9㎠。',
    difficulty: 'advanced',
  },
  {
    id: 'sansu_42',
    subject: 'sansu',
    question: '1辺6cmの正四面体の体積は？（√2 ≈ 1.414）',
    answer: '18√2 cm³ ≈ 25.5cm³',
    hint: '正四面体の体積 = (√2/12) × a³',
    explanation: '正四面体の体積の公式は (√2/12)×(1辺)×(1辺)×(1辺)。\n6×6×6＝216 なので 216×√2÷12＝18√2。\n18×1.414＝約25.5cm³。',
    difficulty: 'advanced',
  },
  {
    id: 'sansu_43',
    subject: 'sansu',
    question: 'ある池に鯉がいる。最初に全体の1/3の鯉を捕まえて逃がし、次に残りの1/4を捕まえて逃がした。さらに残りの1/5を捕まえて逃がしたとき、まだ捕まえていない鯉は最初の何分の何か？',
    answer: '最初の2/5',
    hint: '(1-1/3)×(1-1/4)×(1-1/5) = 2/3×3/4×4/5 = 24/60 = 2/5',
    explanation: '「まだ捕まえていない鯉」の割合をかけ算でつないでいく。\n1回目のあと 1−1/3＝2/3 が残り、2回目のあとさらに 1−1/4＝3/4、3回目のあとさらに 1−1/5＝4/5 が残る。\n2/3×3/4×4/5＝24/60＝2/5。\nとなり合う分母と分子が次々に約分できるのがポイント。',
    difficulty: 'advanced',
  },
  {
    id: 'sansu_44',
    subject: 'sansu',
    question: '等差数列 2, 5, 8, 11, … の第100項と、第1項から第100項までの和は？',
    answer: '第100項: 299、和: 15050',
    hint: '第n項 = 2 + (n-1)×3 = 3n-1。和 = n(a₁+aₙ)/2 = 100×(2+299)/2',
    explanation: '初めの数が2で、3ずつふえる等差数列。\n第n項＝2+(n−1)×3＝3n−1 なので 第100項＝3×100−1＝299。\n和＝(初めの数+終わりの数)×個数÷2＝(2+299)×100÷2＝301×50＝15050。',
    difficulty: 'advanced',
  },
  {
    id: 'sansu_45',
    subject: 'sansu',
    question: '水槽に水を入れるのにAの管で12分、Bの管で18分かかる。排水管Cで満水の水槽を空にするのに9分かかる。A, B, C同時に動かすと、空の水槽が満水になるまで何分かかるか？',
    answer: '36分',
    hint: '1分あたり: A=1/12, B=1/18, C=-1/9。合計 = 1/12+1/18-1/9 = 3/36+2/36-4/36 = 1/36',
    explanation: '水そう全体を1として、1分あたりに増える量で考える。\nAは +1/12、Bは +1/18、Cは出す方なので −1/9。\n分母を36にそろえて 3/36+2/36−4/36＝1/36。\n1分で1/36ずつたまるので 1÷(1/36)＝36分。',
    difficulty: 'advanced',
  },
  {
    id: 'sansu_46',
    subject: 'sansu',
    question: '1辺10cmの正方形ABCDがある。辺BC上の点EをBE:EC=2:3となるようにとる。AEの延長とDCの延長の交点をFとする。△DEFの面積は？',
    answer: '75㎠',
    hint: 'BE=4cm, EC=6cm。△ABEと△FECの相似を利用する',
    explanation: '1辺10cm、BE:EC＝2:3 なので BE＝4cm、EC＝6cm。\n直線AEと辺DCの延長が交わる点をFとすると、△ABEと△FCEは相似で、相似比は EB:EC＝4:6＝2:3。\nよって CF＝AB×3/2＝15cm。\n底辺 DF＝DC+CF＝10+15＝25cm、高さは EからDCまでの 10−4＝6cm なので 25×6÷2＝75㎠。\n★注意：F は直線AE上にとった点なので、A・E・F は一直線に並ぶ。したがって「△AEF」は三角形にならない。面積を考えられるのは △DEF である。',
    difficulty: 'advanced',
  },
  {
    id: 'sansu_47',
    subject: 'sansu',
    question: '牧場に牛がいて、牧草を食べている。最初10頭の牛が20日で草を食べ尽くし、15頭では12日で食べ尽くす。25頭では何日で食べ尽くすか？（ニュートン算）',
    answer: '20/3日（6と2/3日＝6日と16時間）',
    hint: '1日の草の増加量をr, 最初の草をS。S + 20r = 10×20, S + 12r = 15×12 → 8r = 20 より r = 2.5, S = 150。150 + 2.5x = 25x → x = 20/3',
    explanation: 'ニュートン算。牛1頭が1日に食べる草の量を1として、最初にある草をS、1日にはえる草をrとする。\n10頭20日: S+20r＝10×20＝200。\n15頭12日: S+12r＝15×12＝180。\n引き算して 8r＝20 → r＝2.5、S＝200−20×2.5＝150。\n25頭でx日かかるとすると 150+2.5x＝25x → 22.5x＝150 → x＝20/3＝6と2/3日（約6.7日）。\n★ニュートン算は答えが分数になることも多い。割り切れないからといって計算ミスとは限らない。',
    difficulty: 'advanced',
  },
  {
    id: 'sansu_48',
    subject: 'sansu',
    question: '半径6cmの円と半径4cmの円が外接している。この2つの円に外接する直線（共通外接線）の長さは？',
    answer: '4√6 cm ≈ 9.8cm',
    hint: '中心間距離 = 10cm。直線の長さ = √(d²-(r₁-r₂)²) = √(100-4) = √96 = 4√6',
    explanation: '2つの円は外接しているので、中心と中心のきょりは 6+4＝10cm。\n共通外接線の長さ＝√(中心間のきょり²−(半径の差)²)。\n半径の差は 6−4＝2 なので √(10×10−2×2)＝√96＝4√6。\n4×2.449＝約9.8cm。',
    difficulty: 'advanced',
  },
  {
    id: 'sansu_49',
    subject: 'sansu',
    question: '整数1から200までの中で、3でも5でも割り切れない整数は何個？',
    answer: '107個',
    hint: '3の倍数: 66個、5の倍数: 40個、15の倍数: 13個。200-(66+40-13)=107',
    explanation: '「3でも5でも割り切れない」＝全体から、3の倍数と5の倍数をのぞく。\n3の倍数は 200÷3＝66個、5の倍数は 200÷5＝40個、両方にあたる15の倍数は 200÷15＝13個。\n3か5で割り切れる数は、二重に数えた15の倍数を1回引いて 66+40−13＝93個。\n200−93＝107個。',
    difficulty: 'advanced',
  },
  {
    id: 'sansu_50',
    subject: 'sansu',
    question: '正方形の各辺の中点を結んで正方形を作り、さらにその正方形の各辺の中点を結んで正方形を作る。この操作を繰り返す。元の正方形の面積が64㎠のとき、6番目にできる正方形の面積は？（元の正方形の次にできたものを1番目とする）',
    answer: '1㎠',
    hint: '各回で面積は1/2になる。元の正方形の次にできたものを1番目と数えると 64→32→16→8→4→2→1',
    explanation: '各辺の中点を結んでできる正方形の面積は、もとの正方形のちょうど半分になる。\n64→32→16→8→4→2→1 と半分ずつ小さくなる。\n元の正方形の次にできたものを1番目と数えると、6番目は 64÷2÷2÷2÷2÷2÷2＝1㎠。',
    difficulty: 'advanced',
  },

  // ============================================================
  // 国語 (kokugo) - 50問
  // ============================================================

  // --- basic (20問) ---
  {
    id: 'kokugo_01',
    subject: 'kokugo',
    question: '「以心伝心」の意味は？',
    answer: '言葉を使わなくても、心と心が通じ合うこと',
    explanation: '「心を以（もっ）て心に伝う」と読み下す。もとは仏教の言葉で、さとりを言葉ではなく師から弟子の心へ直接伝えることを表した。\nそこから、言葉にしなくてもたがいの気持ちが通じ合うことをいう。\n「以心伝心でパスが通った」のように、仲のよい人どうしの通じ合いに使う。',
    difficulty: 'basic',
  },
  {
    id: 'kokugo_02',
    subject: 'kokugo',
    question: '「光陰矢の如し」の意味は？',
    answer: '時間は矢のように速く過ぎ去るということ',
    explanation: '「光」は日（昼）、「陰」は月（夜）を表し、合わせて「光陰」で年月・時間のこと。\nその時間が矢のように速く飛び去る、つまり月日はあっという間に過ぎるという意味。\n「少年老い易く学成り難し」とセットで、時間を大切にせよという教えに使われる。',
    difficulty: 'basic',
  },
  {
    id: 'kokugo_03',
    subject: 'kokugo',
    question: '「七転び八起き」の意味は？',
    answer: '何度失敗してもあきらめずに立ち上がること',
    explanation: '七回ころんでも八回起き上がる、という数の対比で「何度失敗してもあきらめない」ことを表す。\n起きる回数が1回多いのは、最後には必ず立ち上がることを示すため。\n似た意味の四字熟語に「不撓不屈（ふとうふくつ）」がある。',
    difficulty: 'basic',
  },
  {
    id: 'kokugo_04',
    subject: 'kokugo',
    question: '「一石二鳥」の意味は？',
    answer: '一つの行動で二つの利益を得ること',
    explanation: '一つの石を投げて二羽の鳥を落とす、という英語のことわざ（kill two birds with one stone）からきた言葉。\n一つの行いで二つの得をすることをいう。\n似た意味は「一挙両得」、反対の意味は「虻蜂取らず（あぶはちとらず）」。',
    difficulty: 'basic',
  },
  {
    id: 'kokugo_05',
    subject: 'kokugo',
    question: '「温故知新」の意味は？',
    answer: '古いことを学び直し、新しい知識を得ること',
    explanation: '「故（ふる）きを温（たず）ねて新しきを知る」と読み下す。出典は論語。\n「温」はここでは「くり返し学ぶ」という意味で、昔のことをよく学び直すと新しい知識や考えが見つかるということ。\n歴史や古典を学ぶ理由としてよく引用される。',
    difficulty: 'basic',
  },
  {
    id: 'kokugo_06',
    subject: 'kokugo',
    question: '「花鳥風月」の意味は？',
    answer: '自然の美しい景色・風雅なこと',
    explanation: '花・鳥・風・月という、自然を代表する四つのものを並べた言葉。\n自然の美しい景色や、それを味わう風流な心を表す。\n「花鳥風月を楽しむ」のように使い、和歌や俳句の題材そのものをさすこともある。',
    difficulty: 'basic',
  },
  {
    id: 'kokugo_07',
    subject: 'kokugo',
    question: '「付和雷同」の意味は？',
    answer: '自分の意見を持たず、むやみに他人に同調すること',
    explanation: '「付和」は考えもなく人に合わせること、「雷同」は雷が鳴るとまわりの物が一斉に響くように他人につられること。\n合わせて、自分の意見を持たずすぐ人に同調することをいい、よくない意味で使う。\n反対の意味は「独立独歩」「自主自立」。',
    difficulty: 'basic',
  },
  {
    id: 'kokugo_08',
    subject: 'kokugo',
    question: '「急がば回れ」の意味は？',
    answer: '急ぐときほど、安全な方法を選んだほうが結局早い',
    explanation: 'もとは琵琶湖を渡るとき、舟で近道をすると強い風で危ないので、遠回りでも陸の瀬田の橋を回れ、という歌からきた言葉。\n急ぐときほど、危険な近道より確実で安全な方法を選んだ方が結局は早い、という教え。\n「せいては事を仕損じる」も似た意味。',
    difficulty: 'basic',
  },
  {
    id: 'kokugo_09',
    subject: 'kokugo',
    question: '「五里霧中」の意味は？',
    answer: '物事の見通しが全くつかず、どうすればよいか分からない状態',
    explanation: '「五里（約20km）にわたる霧の中」という意味。「五里夢中」と書くのは誤り。\n深い霧の中にいるように、どちらへ進めばよいか見当がまったくつかない状態をいう。\n似た意味の「暗中模索」は、手さぐりであれこれ試す点がちがう。',
    difficulty: 'basic',
  },
  {
    id: 'kokugo_10',
    subject: 'kokugo',
    question: '「起承転結」の意味は？',
    answer: '文章や話の構成：起こし・受けて・転じて・まとめる',
    explanation: '漢詩（絶句）の組み立て方からきた言葉。\n起＝話をおこす、承＝それを受けて続ける、転＝話をがらりと変える、結＝全体をまとめる。\n作文や物語の組み立てを考えるときの型として使える。',
    difficulty: 'basic',
  },
  {
    id: 'kokugo_11',
    subject: 'kokugo',
    question: '「縦」の反対語は？',
    answer: '横',
    explanation: '「縦（たて）」は上下の方向、「横（よこ）」は左右の方向で、たがいに直角に交わる関係にある。\nそこから「縦書きと横書き」「縦社会と横のつながり」のように対で使われる。',
    difficulty: 'basic',
  },
  {
    id: 'kokugo_12',
    subject: 'kokugo',
    question: '「喜怒哀楽」の意味は？',
    answer: '喜び・怒り・悲しみ・楽しみの4つの感情',
    explanation: '喜（よろこび）・怒（いかり）・哀（かなしみ）・楽（たのしみ）の四つの漢字が、そのまま代表的な感情を表している。\n人間のさまざまな感情をまとめていう言葉で、「喜怒哀楽が激しい」のように使う。',
    difficulty: 'basic',
  },
  {
    id: 'kokugo_13',
    subject: 'kokugo',
    question: '「臨機応変」の意味は？',
    answer: '状況に応じて、その場で適切な対応をすること',
    explanation: '「機に臨（のぞ）んで変に応ず」と読み下す。「機」はその場のようす、「変」は変化のこと。\n決まったやり方にこだわらず、その場に合わせてちょうどよい行動をすること。\n反対に、決まり通りにしかできないことを「杓子定規（しゃくしじょうぎ）」という。',
    difficulty: 'basic',
  },
  {
    id: 'kokugo_14',
    subject: 'kokugo',
    question: '「切磋琢磨」の意味は？',
    answer: '友人同士で競い合い、互いに励まし向上すること',
    explanation: '「切」「磋」「琢」「磨」はどれも骨・角・玉・石をみがく作業を表す漢字で、出典は詩経。\nもとは学問や人格をみがくことで、そこから仲間どうしがきそい合って高め合う意味になった。\n「ライバルと切磋琢磨する」のように使う。',
    difficulty: 'basic',
  },
  {
    id: 'kokugo_15',
    subject: 'kokugo',
    question: '「自画自賛」の意味は？',
    answer: '自分で自分のことを褒めること',
    explanation: '自分でかいた絵（自画）に、自分でほめる言葉（賛）を書きそえたことから。\n「賛」は絵にそえる詩や文のことで、本来は他人が書くもの。\nそこから、自分で自分をほめることをいい、少し照れやからかいをふくんで使う。',
    difficulty: 'basic',
  },
  {
    id: 'kokugo_16',
    subject: 'kokugo',
    question: '「猿も木から落ちる」の意味は？',
    answer: 'その道の名人・達人でも失敗することがある',
    explanation: '木登りの名人である猿でも、木から落ちることがあるというたとえ。\nその道の達人でも失敗することがある、という意味。\n同じ意味に「弘法にも筆の誤り」「河童の川流れ」がある。',
    difficulty: 'basic',
  },
  {
    id: 'kokugo_17',
    subject: 'kokugo',
    question: '「明るい」の反対語は？',
    answer: '暗い',
    explanation: '「明るい」は光が多くてよく見えるようす、「暗い」は光が少ないようすで、正反対の対義語。\n性格についても「明るい人」「暗い人」と対で使う。\n漢字の「明」は日と月を合わせて光を表す会意文字。',
    difficulty: 'basic',
  },
  {
    id: 'kokugo_18',
    subject: 'kokugo',
    question: '「一長一短」の意味は？',
    answer: '長所もあれば短所もあること',
    explanation: '「長」は長所（よいところ）、「短」は短所（悪いところ）。\n一つ長所があれば一つ短所もある、つまり完全なものはないという意味。\n「どちらの案も一長一短だ」のように、比べて決めにくいときに使う。',
    difficulty: 'basic',
  },
  {
    id: 'kokugo_19',
    subject: 'kokugo',
    question: '「雨降って地固まる」の意味は？',
    answer: 'もめごとや困難があっても、その後かえって物事がうまくおさまる',
    explanation: '雨が降ったあとは土がしまって、かえって地面がしっかりする、というたとえ。\nもめごとや困ったことがあっても、そのあとかえって前よりよい状態に落ち着くという意味。\nけんかのあとに仲直りしたときなどに使う。',
    difficulty: 'basic',
  },
  {
    id: 'kokugo_20',
    subject: 'kokugo',
    question: '「木を見て森を見ず」の意味は？',
    answer: '細かいことにこだわって、全体を見失うこと',
    explanation: '一本一本の木ばかり見ていると、森全体のようすが分からない、というたとえ。\n細かい部分にこだわりすぎて、全体や本当に大切なことを見失うことをいう。\n算数の見直しや文章の読み取りでも、全体を見る大切さを表す言葉として使える。',
    difficulty: 'basic',
  },

  // --- standard (20問) ---
  {
    id: 'kokugo_21',
    subject: 'kokugo',
    question: '「羊頭狗肉」の意味は？',
    answer: '見かけと実質が違うこと。外見は立派に見えても、中身が伴わないこと',
    explanation: '「羊頭を懸（か）けて狗肉（くにく）を売る」の略。店先に羊の頭をかざりながら、実際は犬の肉を売ったことから。\n看板や見かけは立派なのに、中身がともなわないことをいう。\n「見かけだおし」と同じ意味で、悪い意味で使う。',
    difficulty: 'standard',
  },
  {
    id: 'kokugo_22',
    subject: 'kokugo',
    question: '「朝三暮四」の意味は？',
    answer: '目先のことにとらわれて、結果が同じであることに気づかないこと',
    explanation: '猿にトチの実を「朝に三つ、暮れに四つ」やると言ったら怒り、「朝に四つ、暮れに三つ」と言いかえたら喜んだ、という荘子の話から。\n合計は同じなのに、目先のちがいにとらわれて気づかないことをいう。\nうまい言葉で人をだます、という意味で使うこともある。',
    difficulty: 'standard',
  },
  {
    id: 'kokugo_23',
    subject: 'kokugo',
    question: '「先生に質問する」を丁寧な敬語（謙譲語）で言い換えると？',
    answer: '先生にお伺いする／先生に質問いたす',
    explanation: '謙譲語は、自分（や身内）の動作をへりくだって言うことで、相手を高める言い方。\n「質問する」のは自分なので、「伺う」「お尋ねする」「質問いたす」と直す。\n「お〜する」「〜いたす」「伺う」が謙譲語の代表的な形。逆に先生の動作なら「ご質問になる」と尊敬語にする。',
    difficulty: 'standard',
  },
  {
    id: 'kokugo_24',
    subject: 'kokugo',
    question: '「お客様がいらっしゃいました」の「いらっしゃる」は何語？',
    answer: '尊敬語（「来る・いる・行く」の尊敬語）',
    explanation: '「いらっしゃる」は「来る・行く・いる」の尊敬語で、相手（お客様）の動作を高める言い方。\n同じ内容を自分の動作で言うときは、謙譲語の「参る」「伺う」「おる」を使う。\nだから「お客様が参りました」は誤りで、「いらっしゃいました」が正しい。',
    difficulty: 'standard',
  },
  {
    id: 'kokugo_25',
    subject: 'kokugo',
    question: '「春はあけぼの。やうやう白くなりゆく山ぎは、少し明かりて…」は誰の作品か？',
    answer: '清少納言（枕草子）',
    explanation: '「春はあけぼの」で始まるのは清少納言の随筆「枕草子」。平安時代中期、一条天皇の中宮定子に仕えた女性が書いた。\n「あけぼの」は夜明けのことで、春は夜明けがいちばんよい、という書き出し。\n「をかし（趣がある）」の文学と呼ばれ、「もののあはれ」の源氏物語と対比して覚えるとよい。',
    difficulty: 'standard',
    questionReading: '春はあけぼの。ようよう白くなりゆく山ぎわ、少し明かりて、は誰の作品か？',
    answerReading: '清少納言。まくらのそうし',
  },
  {
    id: 'kokugo_26',
    subject: 'kokugo',
    question: '「いづれの御時にか、女御・更衣あまた侍ひ給ひける中に…」は何という作品の冒頭か？',
    answer: '源氏物語（紫式部）',
    explanation: '「いづれの御時にか（どの帝の御代のことであったか）」で始まるのは紫式部の「源氏物語」。\n平安時代（11世紀初め）に書かれた全五十四帖の長編物語で、主人公は光源氏。\n作者の紫式部は中宮彰子に仕え、同じ時代に中宮定子に仕えた清少納言とよく比べられる。',
    difficulty: 'standard',
    questionReading: 'いずれの御時にか、女御・更衣あまた仕えたてまつりたまいける中に、は何という作品の冒頭か？',
    answerReading: 'げんじものがたり。むらさきしきぶ',
  },
  {
    id: 'kokugo_27',
    subject: 'kokugo',
    question: '文「美しい花が咲いた」の主語と述語は？',
    answer: '主語: 花が、述語: 咲いた',
    explanation: '述語は「どうする・どんなだ・何だ」にあたる言葉なので、まず文の終わりを見て「咲いた」を見つける。\n次に「何が咲いたのか」と問い返すと「花が」となり、これが主語。\n「美しい」は「花」をくわしくする修飾語で、主語ではない点に注意。',
    difficulty: 'standard',
  },
  {
    id: 'kokugo_28',
    subject: 'kokugo',
    question: '「鼻が高い」（慣用句）の意味は？',
    answer: '自慢に思っている・誇らしい気持ちでいること',
    explanation: '得意になると顔（鼻）を上に向けるようすから生まれた慣用句で、誇らしく思うこと。\n「弟が優勝して家族は鼻が高い」のように使う。\n似た形の「鼻にかける」は自慢していやみに見せる意味なので、悪い意味になる点がちがう。',
    difficulty: 'standard',
  },
  {
    id: 'kokugo_29',
    subject: 'kokugo',
    question: '「骨を折る」（慣用句）の意味は？',
    answer: '苦労する・一生懸命努力する',
    explanation: '実際に骨を折るのではなく、骨身をけずるほど力をつくすという意味の慣用句。\n苦労する・一生けんめい努力する、特に人のために力をつくすときに使う（「友人のために骨を折る」）。\n「骨が折れる」は「それをするのが大変だ」という意味で、主語がちがうので使い分ける。',
    difficulty: 'standard',
  },
  {
    id: 'kokugo_30',
    subject: 'kokugo',
    question: '「一日千秋」の意味は？',
    answer: '一日が千年のように感じるほど、ひたすら待ち遠しく思うこと',
    explanation: '「千秋」は千回の秋、つまり千年のこと。一日が千年に感じられるほど待ち遠しいという意味。\n「一日千秋の思いで待つ」の形でよく使う。\n読みは「いちじつせんしゅう」「いちにちせんしゅう」のどちらもある。',
    difficulty: 'standard',
  },
  {
    id: 'kokugo_31',
    subject: 'kokugo',
    question: '「換骨奪胎」の意味は？',
    answer: '他人のアイデアや作品をもとにして、自分のものに作り直すこと',
    explanation: 'もとは道教の言葉で、骨を取りかえ胎（母のたい内）を取りかえて生まれ変わる、という意味。\n詩や文章の世界で、古い作品の発想や表現をもとにして、自分の作品として作りかえることをいう。\nそのまままねる「盗作」とはちがい、作りかえて新しくする点がポイント。',
    difficulty: 'standard',
  },
  {
    id: 'kokugo_32',
    subject: 'kokugo',
    question: '次の文の敬語の誤りを直せ：「先生、私のお母さんが参ります」',
    answer: '「私のお母さん」→「私の母」（先生、私の母が参ります）',
    hint: '身内を敬語で表現するのは誤り。身内の動作には謙譲語を使う',
    explanation: '先生に対して自分の母のことを話す場面なので、身内である母を高めてはいけない。\nしたがって謙譲語の「参ります」は正しい。直すべきは「私のお母さん」で、身内は「母」と言う。\n正解は「先生、私の母が参ります」。\n★「参ります」を「いらっしゃいます」に直すと、身内に尊敬語を使うことになり、かえって誤りになる。',
    difficulty: 'standard',
  },
  {
    id: 'kokugo_33',
    subject: 'kokugo',
    question: '「奥山に　もみぢ踏みわけ　鳴く鹿の　声きく時ぞ　秋は悲しき」の作者は？',
    answer: '猿丸大夫（百人一首第5番）',
    explanation: '「奥山に紅葉踏み分け鳴く鹿の声きく時ぞ秋は悲しき」は百人一首の5番、猿丸大夫の歌。\n山おくで落ち葉をふみわけて鳴く鹿の声を聞くと、秋のさびしさがいっそう身にしみる、という意味。\nもとは古今和歌集に「よみ人しらず」として入っている歌で、鹿は秋を表す。',
    difficulty: 'standard',
    answerReading: '猿丸大夫（さるまるだゆう）、百人一首第5番',
  },
  {
    id: 'kokugo_34',
    subject: 'kokugo',
    question: '「旧」の反対語（対義語）は？',
    answer: '新',
    explanation: '「旧」は古い、「新」は新しいで、意味が正反対の対義語。\n「新旧」「旧式と新式」「旧暦と新暦」のように、二字を組み合わせても使う。\n対義語は、二字を並べた熟語（新旧・大小・強弱）にできるかで確かめられることが多い。',
    difficulty: 'standard',
  },
  {
    id: 'kokugo_35',
    subject: 'kokugo',
    question: '「機転が利く」の「機転」の意味は？',
    answer: 'その場の状況に応じて素早く適切な判断や行動ができること',
    explanation: '「機」はきっかけ・その場のようす、「転」は素早く向きを変えること。\n合わせて、その場の状況に応じてすぐに適切な考えや行動ができることをいう。\n「機転が利く」の形で使い、四字熟語の「臨機応変」とほぼ同じ意味。',
    difficulty: 'standard',
  },
  {
    id: 'kokugo_36',
    subject: 'kokugo',
    question: '「同音異義語」：「かんしん」を漢字で2種類書け（意味も示すこと）',
    answer: '感心（感動して心を動かされること）・関心（興味や注意を向けること）など',
    explanation: '同音異義語は、読みが同じで漢字と意味がちがう言葉。「かんしん」には 感心・関心・寒心・歓心 などがある。\n感心＝りっぱだと心を動かされる（努力に感心する）。関心＝興味を向ける（政治に関心がある）。\n「感」は感じる、「関」は関わる、という漢字の意味から使い分けると間違えにくい。',
    difficulty: 'standard',
  },
  {
    id: 'kokugo_37',
    subject: 'kokugo',
    question: '「枕草子」「方丈記」「徒然草」は合わせて何と呼ばれるか？',
    answer: '日本三大随筆',
    explanation: '随筆は、見聞きしたことや感じたことを自由に書きつづった文章のこと。\n枕草子（清少納言・平安）、方丈記（鴨長明・鎌倉）、徒然草（兼好法師・鎌倉末期）を日本三大随筆という。\n「せい（清少納言）・かも（鴨長明）・けん（兼好）」と作者を続けて覚えるとよい。',
    difficulty: 'standard',
  },
  {
    id: 'kokugo_38',
    subject: 'kokugo',
    question: '「弘法にも筆の誤り」のような意味を持つ英語のことわざは？',
    answer: 'Even Homer sometimes nods.（ホーマーでも居眠りする）',
    hint: '日本語での類義語「猿も木から落ちる」と同意',
    explanation: '「弘法にも筆の誤り」は、書の名人である弘法大師（空海）でも書きまちがえることがある、という意味。\n英語では Even Homer sometimes nods.（古代ギリシアの大詩人ホメロスでもうたた寝する）が同じ意味を表す。\n日本語の類義語は「猿も木から落ちる」「河童の川流れ」。',
    difficulty: 'standard',
  },
  {
    id: 'kokugo_39',
    subject: 'kokugo',
    question: '「転石苔を生やさず」のことわざの意味は？',
    answer: '一か所に落ち着かず転々とする人は、財産や知識・信用などが身につかないこと',
    explanation: '英語の A rolling stone gathers no moss. を訳したことわざ。\n転がり続ける石に苔（こけ）が生えないように、住む場所や仕事を次々に変える人には、財産も信用も技術も身につかない、という意味。\nイギリスではこの意味だが、アメリカでは「活動的な人はさびつかない」というよい意味で使うこともある。',
    difficulty: 'standard',
  },
  {
    id: 'kokugo_40',
    subject: 'kokugo',
    question: '「ロミオとジュリエット」の作者は？',
    answer: 'ウィリアム・シェイクスピア',
    explanation: 'ウィリアム・シェイクスピアは16〜17世紀イギリスの劇作家・詩人。\n「ロミオとジュリエット」は、敵対する二つの家に生まれた若い二人の悲恋を描いた悲劇。\n四大悲劇「ハムレット」「マクベス」「オセロ」「リア王」もあわせて覚えておきたい。',
    difficulty: 'standard',
  },

  // --- advanced (10問) ---
  {
    id: 'kokugo_41',
    subject: 'kokugo',
    question: '「春の海　終日（ひねもす）のたり　のたりかな」の作者と、この俳句が表す情景を説明せよ。',
    answer: '与謝蕪村。春の穏やかな一日、波が静かにゆったりとうねり続けている海の情景',
    explanation: '作者は江戸時代の俳人・画家の与謝蕪村。季語は「春の海」で季節は春。\n「終日（ひねもす）」は一日中、「のたりのたり」は波がゆっくり大きくうねるようすを表す言葉。\n同じ音をくり返すことで、まるで絵のように、おだやかで眠くなるような春の海の一日が浮かんでくる。',
    difficulty: 'advanced',
    questionReading: '春の海、ひねもすのたり、のたりかな、の作者と、この俳句が表す情景を説明せよ。',
    answerReading: '与謝蕪村（よさぶそん）。春の穏やかな一日、波が静かにゆったりとうねり続けている海の情景',
  },
  {
    id: 'kokugo_42',
    subject: 'kokugo',
    question: '「徒然草」の作者と書かれた時代（時代区分）は？',
    answer: '兼好法師（吉田兼好）、鎌倉時代末期',
    explanation: '作者は兼好法師（吉田兼好）。書かれたのは鎌倉時代の末（14世紀前半）。\n「つれづれなるままに、日暮らし硯にむかひて…」という書き出しで、することもなく心にうかぶことを書きつけた、という意味。\n枕草子・方丈記とあわせて日本三大随筆。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_43',
    subject: 'kokugo',
    question: '「吾輩は猫である」の作者と、主人公（語り手）の名前は？',
    answer: '夏目漱石。語り手は名前のない猫（「名前はまだない」）',
    explanation: '夏目漱石が1905年に発表した最初の小説で、俳句雑誌「ホトトギス」に連載された。\n語り手は中学教師 苦沙弥（くしゃみ）先生の家に住みついた猫で、作品の最初に「名前はまだ無い」と書かれている通り名前がない。\n猫の目から人間の世界を皮肉に見つめるところがおもしろさ。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_44',
    subject: 'kokugo',
    question: '「東海道中膝栗毛」の作者と、主人公の名前2人を答えよ。',
    answer: '十返舎一九。弥次郎兵衛（やじろべえ）と北八（きたはち）',
    explanation: '作者は江戸時代後期の十返舎一九。「膝栗毛」は、栗毛の馬の代わりに自分のひざ（＝徒歩）で旅をするという意味。\n主人公は弥次郎兵衛と北八（喜多八）の二人組で、江戸から京・大坂へ東海道を旅しながら失敗をくり返す滑稽本。\n「弥次喜多道中」という言葉はこの作品から生まれた。',
    difficulty: 'advanced',
    answerReading: '十返舎一九（じっぺんしゃいっく）。弥次郎兵衛（やじろべえ）と北八（きたはち）',
  },
  {
    id: 'kokugo_45',
    subject: 'kokugo',
    question: '「夏草や　兵どもが　夢の跡」の作者と、詠まれた場所はどこか？',
    answer: '松尾芭蕉。平泉（岩手県）の衣川・高館（奥州藤原氏の栄華の跡地）',
    explanation: '作者は松尾芭蕉で、紀行文「おくのほそ道」におさめられた句。季語は「夏草」で季節は夏。\n詠まれたのは岩手県平泉の高館（衣川のほとり）。奥州藤原氏が栄え、源義経が最期をむかえた場所。\n今は夏草がしげるばかりで、武士たちの栄えも戦いも夢のあとにすぎない、というはかなさを詠んでいる。',
    difficulty: 'advanced',
    answerReading: '松尾芭蕉（まつおばしょう）。平泉（ひらいずみ）、岩手県の衣川と高館、奥州藤原氏の栄華の跡地',
  },
  {
    id: 'kokugo_46',
    subject: 'kokugo',
    question: '「罪と罰」「カラマーゾフの兄弟」の作者は誰か？また国籍も答えよ。',
    answer: 'フョードル・ドストエフスキー、ロシア人',
    explanation: '作者は19世紀ロシアの作家フョードル・ドストエフスキー。\n「罪と罰」は、貧しい学生ラスコーリニコフが高利貸しの老婆を殺し、罪の意識に苦しんで自首するまでを描く。\n「カラマーゾフの兄弟」は父親殺しをめぐる兄弟の物語で、どちらも人間の心の奥を追究した代表作。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_47',
    subject: 'kokugo',
    question: '「青は藍より出でて藍よりも青し」の意味と、元の出典を答えよ。',
    answer: '弟子が師匠を超えること。出典: 荀子（中国の儒家の書）',
    explanation: '出典は中国の思想家 荀子の「勧学篇」で、原文は「青は之を藍より取りて藍よりも青し」。\n青い染料はもともと藍という草から取るのに、もとの藍より青くなる、というたとえ。\nそこから、弟子が師匠を追いこすことをいい、「出藍の誉れ（しゅつらんのほまれ）」ともいう。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_48',
    subject: 'kokugo',
    question: '宮沢賢治の詩「雨ニモマケズ」に出てくる「サウイウモノニ　ワタシハナリタイ」という詩句は何を表しているか？',
    answer: '理想の人間像（苦しむ人を助け、欲がなく、怒らず、いつも静かに笑っている人）への憧れ',
    explanation: '宮沢賢治が手帳に書きつけた詩で、雨風や暑さ寒さに負けず、欲がなく、決して怒らず、いつも静かに笑っている人の姿が並べられている。\n最後の「サウイウモノニ ワタシハナリタイ」は、そういう人になりたいという願い・決意を表す。\n自分がそうであるという自慢ではなく、理想へのあこがれを述べている点が大切。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_49',
    subject: 'kokugo',
    question: '「方丈記」の冒頭「ゆく河の流れは絶えずして、しかも、もとの水にあらず」が表す思想を何というか？',
    answer: '無常観（万物はつねに移り変わり、永遠不変のものは何もないという仏教的な世界観）',
    explanation: '鴨長明「方丈記」の冒頭。流れる川の水は絶えることがないが、そこにある水はもとの水ではない、という意味。\nこのように、すべてのものは移り変わり、永遠に変わらないものはないという仏教的な考えを無常観という。\n平家物語の「諸行無常の響きあり」も同じ無常観を表している。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_50',
    subject: 'kokugo',
    question: '「荘子」に出てくる「胡蝶の夢」の話の意味を説明せよ。',
    answer: '荘子が蝶になった夢を見て、「自分が蝶になる夢を見たのか、蝶が荘子になる夢を見ているのか」と問い、現実と夢・自己と他者の境界を問いかける、物我一体を説く寓話',
    explanation: '荘子が蝶になって飛びまわる夢を見て、目がさめたときに「自分が蝶になる夢を見たのか、蝶が自分になる夢を見ているのか」と分からなくなった、という話。\n夢と現実、自分と他のもののさかいは絶対のものではない、という荘子の考え（物我一体）を表す寓話。\nそこから「人生ははかない夢のようだ」というたとえにも使われる。',
    difficulty: 'advanced',
  },

  // ============================================================
  // 理科 (rika) - 50問
  // ============================================================

  // --- basic (20問) ---
  {
    id: 'rika_01',
    subject: 'rika',
    question: '光合成に必要な3つのものは？',
    answer: '水・二酸化炭素・光（日光）',
    explanation: '光合成は、植物が自分で養分（デンプン）をつくるはたらき。\n材料になるのは、根から吸い上げた「水」と、葉の気孔から取り入れた「二酸化炭素」の2つ。\nこの2つを結びつけるエネルギーが「光（日光）」で、葉緑体の中のクロロフィルが光を受け取る。\n3つのうち1つでも欠けると光合成は止まる。できるのはデンプンと酸素。',
    difficulty: 'basic',
  },
  {
    id: 'rika_02',
    subject: 'rika',
    question: 'アンモニアの化学式は？',
    answer: 'NH₃',
    explanation: 'アンモニアは、窒素の原子1個と水素の原子3個が結びついた物質なので NH₃ と書く。\nNは窒素、Hは水素の記号で、右下の小さい3は「水素が3個」という意味。\nつんとした刺激臭があり、水に非常によくとけてアルカリ性を示す。\n空気より軽いので上方置換法で集める。',
    difficulty: 'basic',
  },
  {
    id: 'rika_03',
    subject: 'rika',
    question: '月が地球の周りを一周するのにかかる日数は？',
    answer: '約27.3日',
    explanation: '月が地球のまわりを1周（公転）するのにかかる時間は約27.3日で、これを公転周期という。\n満月から次の満月までの約29.5日とはちがうので注意。\n月が回っている間に地球も太陽のまわりを進むため、同じ形に見えるまでには2日ほど余分にかかる。\nまた月の自転周期も約27.3日で公転周期と同じなので、地球からはいつも月の同じ面しか見えない。',
    difficulty: 'basic',
  },
  {
    id: 'rika_04',
    subject: 'rika',
    question: '水が沸騰する温度は（標準気圧で）？',
    answer: '100℃',
    explanation: '標準の気圧（1気圧）では、水は100℃で沸騰する。\n沸騰している間は熱を加え続けても温度は100℃のまま上がらず、加えた熱はすべて水を水蒸気に変えるために使われる。\n山の上のように気圧が低い所では100℃より低い温度で沸騰し（富士山頂で約88℃）、圧力なべのように気圧を高くすると100℃より高くなる。',
    difficulty: 'basic',
  },
  {
    id: 'rika_05',
    subject: 'rika',
    question: '食塩の化学式は？',
    answer: 'NaCl（塩化ナトリウム）',
    explanation: '食塩の正式な名前は塩化ナトリウムで、化学式は NaCl。\nNa（ナトリウム）と Cl（塩素）が1個ずつ結びついている。\nどちらも単体では危険な物質だが、結びつくと食べられる食塩になる。\n水にとけると電気を通す（電解質）。',
    difficulty: 'basic',
  },
  {
    id: 'rika_06',
    subject: 'rika',
    question: 'ヒトの心臓は部屋がいくつ？',
    answer: '4つ（右心房・右心室・左心房・左心室）',
    explanation: 'ヒトの心臓は、右心房・右心室・左心房・左心室の4つの部屋に分かれている（2心房2心室）。\n心房は血液を受け取る部屋、心室は血液を送り出す部屋。\n右心室は肺へ、左心室は全身へ血液を送るので、左心室のかべがいちばん厚い。\n図では自分から見て左右が逆になる（向かい合った相手の左手が自分の右側に見えるのと同じ）ので注意。',
    difficulty: 'basic',
  },
  {
    id: 'rika_07',
    subject: 'rika',
    question: '地球の表面の約何%が海？',
    answer: '約70%',
    explanation: '地球の表面は海が約70%、陸地が約30%で、「7対3」と覚える。\nそのため地球は「水の惑星」と呼ばれる。\n水の約97%は海水で、飲める真水はごくわずか。\n陸地は北半球に多く、南半球は海の割合がさらに大きい。',
    difficulty: 'basic',
  },
  {
    id: 'rika_08',
    subject: 'rika',
    question: '花粉をめしべへ運ぶ生き物を何という？',
    answer: '送粉者（花粉媒介者）、代表例はミツバチ',
    explanation: '花粉をめしべへ運ぶ生き物を送粉者（花粉媒介者）といい、代表はミツバチ。\n虫に花粉を運んでもらう花を虫媒花といい、あまいみつやよい香り、目立つ花びらで虫をよびよせる（アブラナ・ヒマワリなど）。\n風で花粉を運ぶ花は風媒花（マツ・イネ・スギ）で、花びらが目立たず、軽い花粉を大量につくる。\nどちらも受粉のためのくふうであることが大切。',
    difficulty: 'basic',
  },
  {
    id: 'rika_09',
    subject: 'rika',
    question: '音が空気中を伝わる速さは約何m/s？',
    answer: '約340m/s',
    explanation: '空気中を音が伝わる速さは約340m/秒（気温15℃のとき）。\n光の速さ（秒速約30万km）に比べるとずっとおそいので、かみなりは光ってから音が遅れて聞こえる。\n3秒後に聞こえたら 340×3＝1020m 先で光ったことになる。\n気温が高いほど音は速く伝わり、空気のない真空では音は伝わらない。',
    difficulty: 'basic',
  },
  {
    id: 'rika_10',
    subject: 'rika',
    question: '太陽系で最も大きな惑星は？',
    answer: '木星',
    explanation: '太陽系でいちばん大きい惑星は木星で、直径は地球の約11倍、重さは約318倍。\nおもに水素とヘリウムからできたガスの惑星で、大赤斑という巨大なうずがある。\n2番目に大きいのは土星（環が有名）。\n水星・金星・地球・火星は岩石でできた小さい地球型惑星で、大きさがまるでちがう。',
    difficulty: 'basic',
  },
  {
    id: 'rika_11',
    subject: 'rika',
    question: '植物の根から水を吸い上げる力を何という？',
    answer: '毛細管現象・蒸散による吸引',
    explanation: '植物は葉の気孔から水を水蒸気として出しており、これを蒸散という。\n蒸散で水が出ていくと、その分だけ道管の中の水が上へ引き上げられる（蒸散による吸引）。\n細い管を水が上がろうとする毛細管現象や、根が水をおし上げる根圧もはたらく。\n中でもいちばん大きな力は蒸散で、晴れて風のある日ほど水の吸い上げがさかんになる。',
    difficulty: 'basic',
  },
  {
    id: 'rika_12',
    subject: 'rika',
    question: '電流の単位は？',
    answer: 'アンペア（A）',
    explanation: '電流の強さを表す単位はアンペア（記号A）。\n電流は導線を流れる電気の量を表し、電流計は回路に直列につないではかる。\nあわせて、電圧の単位はボルト（V）で電圧計は並列につなぐこと、抵抗の単位はオーム（Ω）であることも覚えておく。',
    difficulty: 'basic',
  },
  {
    id: 'rika_13',
    subject: 'rika',
    question: 'リトマス試験紙：アルカリ性では何色に変わる？',
    answer: '赤→青に変わる',
    explanation: 'リトマス試験紙は、色の変化で酸性かアルカリ性かを見分ける紙。\nアルカリ性では赤色リトマス紙が青色に変わる（青い紙はそのまま）。\n逆に酸性では青色リトマス紙が赤色に変わる。\n中性ではどちらの紙も色が変わらない。「アルカリは赤→青」「酸は青→赤」とセットで覚える。',
    difficulty: 'basic',
  },
  {
    id: 'rika_14',
    subject: 'rika',
    question: 'ダイヤモンドの主成分は？',
    answer: '炭素（C）',
    explanation: 'ダイヤモンドは炭素（C）だけからできている。\n同じ炭素でできた黒鉛（えんぴつのしん）とは原子のつながり方だけがちがい、こうした関係を同素体という。\nダイヤモンドは原子ががんじょうに結びついているため、天然の物質でいちばんかたい。\n炭素でできているので、強く熱すると燃えて二酸化炭素になる。',
    difficulty: 'basic',
  },
  {
    id: 'rika_15',
    subject: 'rika',
    question: '日食が起こるのはなぜ？',
    answer: '月が太陽と地球の間に入り、太陽が隠れるため',
    explanation: '日食は、太陽・月・地球がこの順に一直線に並び、月が太陽の光をさえぎることで起こる。\n月が太陽をかくすので、地球から見ると太陽が欠けて見える。\nこのとき月は新月。全部かくれるのが皆既日食、一部が欠けるのが部分日食。\n月食は満月のときに、太陽・地球・月の順に並んで月が地球の影に入る現象で、並ぶ順番がちがう。',
    difficulty: 'basic',
  },
  {
    id: 'rika_16',
    subject: 'rika',
    question: '水の固体（氷）・液体（水）・気体（水蒸気）の3つの状態変化をまとめて何というか？',
    answer: '物質の三態（状態変化）',
    explanation: '物質は温度によって固体・液体・気体とすがたを変える。これを物質の三態（状態変化）という。\n氷→水は融解、水→水蒸気は蒸発（沸騰）、水蒸気→水は凝結、水→氷は凝固という。\nすがたが変わっても物質そのものと重さは変わらず、変わるのは体積と粒のならび方。\n水は例外で、氷になると体積がふえて軽くなるため、氷は水にうかぶ。',
    difficulty: 'basic',
  },
  {
    id: 'rika_17',
    subject: 'rika',
    question: '磁石のN極とN極を近づけると？',
    answer: '反発する（退け合う）',
    explanation: '磁石の同じ極どうし（N極とN極、S極とS極）を近づけると反発し合う（しりぞけ合う）。\nちがう極どうし（N極とS極）は引き合う。\n磁石を2つに割っても、それぞれがN極とS極を持つ磁石になり、N極だけの磁石はつくれない。\n方位磁針のN極が北をさすのは、地球の北極側がS極のようにはたらいているため。',
    difficulty: 'basic',
  },
  {
    id: 'rika_18',
    subject: 'rika',
    question: '晴れた日の昼間、積乱雲（入道雲）が発達しやすい天気の変化は？',
    answer: '夕立（急な雷雨）になりやすい',
    explanation: '晴れて気温が上がった昼間は、地面が強くあたためられて空気が軽くなり、強い上昇気流が起こる。\n上昇した空気が上空で冷えると水てきになり、たてに高く発達した積乱雲（入道雲）ができる。\n積乱雲は短い時間に激しい雨をふらせるので、夕方に急な雷雨（夕立）になりやすい。\nかみなり・突風・ひょうをともなうこともあるので注意が必要。',
    difficulty: 'basic',
  },
  {
    id: 'rika_19',
    subject: 'rika',
    question: 'カエルのように水中と陸上の両方で生活できる動物を何類というか？',
    answer: '両生類',
    explanation: 'カエルのように、子（オタマジャクシ）のときは水中でえら呼吸し、親になると陸上で肺と皮ふで呼吸する動物を両生類という。\nイモリやサンショウウオも両生類。\nまわりの温度で体温が変わる変温動物で、卵は殻がなく水中にうむ。\nよく似た名前のヤモリはは虫類なので区別する（イモリは井戸を守る両生類、ヤモリは家を守るは虫類）。',
    difficulty: 'basic',
  },
  {
    id: 'rika_20',
    subject: 'rika',
    question: '植物が光合成でつくり出すものは？',
    answer: 'ブドウ糖（デンプン）と酸素',
    explanation: '光合成では、二酸化炭素と水を材料に、光のエネルギーを使って養分（ブドウ糖）と酸素ができる。\nブドウ糖はすぐにデンプンに変えられ、葉にたくわえられる。\nデンプンができたかどうかはヨウ素液で調べ、青むらさき色になれば光合成が行われた証拠になる。\nできた酸素は気孔から空気中へ出ていく。',
    difficulty: 'basic',
  },

  // --- standard (20問) ---
  {
    id: 'rika_21',
    subject: 'rika',
    question: '消化酵素「アミラーゼ」はどの消化液に含まれ、何を消化するか？',
    answer: '唾液に含まれ、デンプンをマルトース（麦芽糖）に分解する',
    explanation: 'アミラーゼは、口の中に出るだ液（唾液）にふくまれる消化酵素。\nごはんやパンにふくまれるデンプンを、麦芽糖（マルトース）に分解する。\nごはんをかんでいるとあまくなるのはこのため。\nはたらくのは体温くらい（約40℃）のときで、熱すぎたり冷たすぎたりするとはたらかない。\nデンプンは最後にブドウ糖まで分解されて小腸で吸収される。',
    difficulty: 'standard',
  },
  {
    id: 'rika_22',
    subject: 'rika',
    question: '被子植物と裸子植物の違いを説明せよ。',
    answer: '被子植物: 種子が果実（子房）に包まれている。裸子植物: 種子がむき出し（子房がない）',
    hint: 'イネ・サクラは被子植物。マツ・スギは裸子植物',
    explanation: '種子をつくる植物は、胚珠のようすで2つに分けられる。\n被子植物は胚珠が子房に包まれていて、受粉後に子房が実（果実）になり、種はその中にできる。サクラ・イネ・アブラナなど。\n裸子植物は子房がなく胚珠がむき出しなので、実ができず種もむき出しでつく。マツ・スギ・イチョウなど。\n「被＝おおう」「裸＝むき出し」と漢字の意味で覚えるとまちがえにくい。',
    difficulty: 'standard',
  },
  {
    id: 'rika_23',
    subject: 'rika',
    question: '塩酸と水酸化ナトリウム水溶液を混ぜる反応（中和）で生成するものは？',
    answer: '塩化ナトリウム（食塩）と水',
    explanation: '塩酸（HCl）は酸性、水酸化ナトリウム水溶液（NaOH）はアルカリ性。\n混ぜると、酸の水素イオンとアルカリの水酸化物イオンが結びついて水ができ、たがいの性質を打ち消し合う。これが中和。\n残ったナトリウムと塩素が結びついて塩化ナトリウム（食塩）ができる。\nHCl + NaOH → NaCl + H₂O。\nちょうど中和した液を蒸発させると、食塩の結晶が残る。',
    difficulty: 'standard',
  },
  {
    id: 'rika_24',
    subject: 'rika',
    question: '直列回路に3Ωと6Ωの抵抗を接続したとき、全体の抵抗は？',
    answer: '9Ω（直列回路は抵抗の和）',
    explanation: '直列つなぎでは電流の通り道が1本しかないので、抵抗はそのまま足し算になる。\n3+6＝9Ω。\n直列では電流の大きさはどこでも同じで、電圧が抵抗の大きさに比例して分かれる。\n抵抗をふやすほど全体の抵抗は大きくなり、流れる電流は小さくなる。',
    difficulty: 'standard',
  },
  {
    id: 'rika_25',
    subject: 'rika',
    question: '並列回路に3Ωと6Ωの抵抗を接続したとき、全体の抵抗は？',
    answer: '2Ω（1/R = 1/3 + 1/6 = 1/2 より R = 2Ω）',
    hint: '並列の合成抵抗: 1/R = 1/R₁ + 1/R₂',
    explanation: '並列つなぎでは電流の通り道が枝分かれするので、全体の抵抗は1本のときより小さくなる。\n1/R＝1/3+1/6＝2/6+1/6＝3/6＝1/2 なので R＝2Ω。\n2つだけなら「和分の積」を使い、(3×6)÷(3+6)＝18÷9＝2Ω と求めてもよい。\n答えの2Ωが、いちばん小さい抵抗3Ωよりさらに小さくなっていることを確かめよう。',
    difficulty: 'standard',
  },
  {
    id: 'rika_26',
    subject: 'rika',
    question: '地層の中に見られる過去の生物の遺骸や痕跡を何というか？また、地層の年代推定に使われる化石を何というか？',
    answer: '化石。年代推定に使われるものは示準化石',
    explanation: '地層の中に残った大昔の生物の体や、足あと・巣穴などの生活のあとを化石という。\nそのうち、短い期間だけ広い範囲にすんでいた生物の化石は、地層ができた時代を知る手がかりになる。これを示準化石という（サンヨウチュウ＝古生代、アンモナイト＝中生代、ナウマンゾウ＝新生代）。\nこれに対し、地層ができた当時の環境がわかる化石は示相化石という（サンゴ＝あたたかく浅い海、シジミ＝河口や湖）。\n「準＝時代の基準」「相＝ようす」と結びつけて覚える。',
    difficulty: 'standard',
  },
  {
    id: 'rika_27',
    subject: 'rika',
    question: '人体で血液中の不要な物質（尿素など）をろ過する器官は？',
    answer: '腎臓',
    explanation: '腎臓は、血液の中の不要な物や余分な水分・塩分をこしとって尿をつくる器官。\n背中側の腰のあたりに、そら豆の形をしたものが左右1つずつ、合わせて2つある。\nタンパク質が分解されるとアンモニアができるが、これは有害なので肝臓で害の少ない尿素に変えられ、腎臓でこしとられる。\nできた尿は輸尿管を通ってぼうこうにためられ、体外へ出される。',
    difficulty: 'standard',
  },
  {
    id: 'rika_28',
    subject: 'rika',
    question: '地震の「震度」と「マグニチュード」の違いを説明せよ。',
    answer: '震度: ある地点での揺れの強さ（0〜7の10段階）。マグニチュード: 地震そのもののエネルギーの大きさ',
    explanation: '震度は「その場所がどれくらいゆれたか」を表すので、観測地点ごとにちがい、震源に近いほど大きくなる。\nマグニチュード（M）は「地震そのものの規模（エネルギーの大きさ）」を表すので、1つの地震について1つの値しかない。\nMが1大きくなるとエネルギーは約32倍、2大きくなると約1000倍になる。\n震度は 0・1・2・3・4・5弱・5強・6弱・6強・7 の10段階に分けられている。',
    difficulty: 'standard',
  },
  {
    id: 'rika_29',
    subject: 'rika',
    question: '光が水中からガラスを通ったとき、屈折する。空気より密度の高い媒質に入るとき、光は境界面に対してどのように曲がるか？',
    answer: '境界面の法線に近づく方向に曲がる（入射角 > 屈折角）',
    explanation: '光が種類のちがう物質へななめに進むとき、境目で折れ曲がる。これが屈折。\n空気→水やガラスのように、光が進みにくい（密度の高い）物質に入るときは、境目に立てた垂線（法線）に近づくように曲がるので 入射角＞屈折角 となる。\n逆に水やガラス→空気へ出るときは法線から遠ざかり、入射角＜屈折角 となる。\n水中のものが浮き上がって見えたり、水にさしたストローが折れて見えたりするのはこのため。',
    difficulty: 'standard',
  },
  {
    id: 'rika_30',
    subject: 'rika',
    question: '月の形が満月から次の満月になるまでの周期（朔望月）は約何日？',
    answer: '約29.5日',
    hint: '公転周期（27.3日）と異なるのは地球も太陽の周りを公転しているから',
    explanation: '満月から次の満月までの周期を朔望月といい、約29.5日。\n月が地球を1周する公転周期は約27.3日だが、その間に地球も太陽のまわりを約27度進んでしまう。\nそのため、太陽・地球・月の位置関係がもとにもどる（同じ形の月になる）には、さらに約2.2日多く回る必要がある。\n27.3＋2.2≒29.5日。ひと月がおよそ30日なのはこのため。',
    difficulty: 'standard',
  },
  {
    id: 'rika_31',
    subject: 'rika',
    question: '食物連鎖で、植物→草食動物→肉食動物と並ぶとき、エネルギーは上位に行くほどどうなるか？',
    answer: '少なくなる（各段階で約90%が失われ、次の段階に移るのは約10%）',
    explanation: '食べられる側から食べる側へエネルギーが移るとき、その多くは呼吸で使われたり熱として出ていったりして、体に残るのは約10%だけ。\nそのため上位の動物ほど、利用できるエネルギーは少なくなる。\n結果として、生き物の数や量は植物がいちばん多く、上にいくほど少なくなり、図にすると三角形（生態ピラミッド）になる。\nライオンのような大型の肉食動物の数が少ないのは、このしくみのため。',
    difficulty: 'standard',
  },
  {
    id: 'rika_32',
    subject: 'rika',
    question: '岩石の種類：火山活動でできた岩石を火成岩という。火成岩のうち、地表近くで急速に冷えたものと、地下深くでゆっくり冷えたものをそれぞれ何というか？',
    answer: '急速に冷えたもの: 火山岩（例: 玄武岩・流紋岩）。ゆっくり冷えたもの: 深成岩（例: 花こう岩）',
    explanation: 'マグマが冷えて固まった岩石を火成岩といい、冷え方のちがいで石のつくりが変わる。\n地表や地表近くで急に冷えると、結晶が大きく育つひまがなく、細かい粒（石基）の中に大きな結晶（斑晶）が散らばる斑状組織になる。これが火山岩で、玄武岩・安山岩・流紋岩など。\n地下深くでゆっくり冷えると、どの結晶も大きく育ってほぼ同じ大きさの粒がすきまなく並ぶ等粒状組織になる。これが深成岩で、斑れい岩・せん緑岩・花こう岩など。\n「急に冷える＝結晶が育たない」というつながりで覚える。',
    difficulty: 'standard',
  },
  {
    id: 'rika_33',
    subject: 'rika',
    question: 'BTB溶液（ブロモチモールブルー）：酸性・中性・アルカリ性でそれぞれ何色になるか？',
    answer: '酸性: 黄色。中性: 緑色。アルカリ性: 青色',
    explanation: 'BTB溶液は、液性によって色が変わる指示薬。\n酸性＝黄色、中性＝緑色、アルカリ性＝青色。「黄・緑・青」の順に覚える。\nもとの液に息（二酸化炭素）をふきこむと、水にとけて酸性になるため黄色に変わる。\nフェノールフタレイン液はアルカリ性のときだけ赤（うすい赤むらさき）になる、と合わせて覚えるとよい。',
    difficulty: 'standard',
  },
  {
    id: 'rika_34',
    subject: 'rika',
    question: '植物の葉の気孔は主に葉のどちらの面に多く存在するか？',
    answer: '裏面（下面）に多い',
    explanation: '気孔は、葉の表面にある三日月形の孔辺細胞にはさまれた小さなあなで、水蒸気や酸素・二酸化炭素の出入り口。\n多くの植物では葉の裏（下面）に多い。\n直射日光の当たる表側に多いと、水がどんどん蒸発して失われてしまうため、裏側に多いほうが水を守るのに都合がよい。\n水にうくスイレンのように、葉の表にしか気孔がない植物もある。',
    difficulty: 'standard',
  },
  {
    id: 'rika_35',
    subject: 'rika',
    question: '電力（W）の求め方の式は？',
    answer: '電力(W) = 電圧(V) × 電流(A)',
    explanation: '電力（W＝ワット）は、1秒あたりに使われる電気のはたらきの大きさを表す。\n電力(W)＝電圧(V)×電流(A)。\n例えば100Vで2A流れる器具の電力は 100×2＝200W。\nさらに、電力に時間をかけると熱量や電力量になる。熱量(J)＝電力(W)×時間(秒)。',
    difficulty: 'standard',
  },
  {
    id: 'rika_36',
    subject: 'rika',
    question: '台風の中心（台風の目）の気圧と天気はどのような状態か？',
    answer: '気圧が非常に低く、風が弱くて晴れていることが多い',
    explanation: '台風は中心ほど気圧が低く、中心気圧が低いほど強い台風になる。\n風は気圧の低い中心へ向かってふきこむが、中心のすぐ内側では強い上昇気流が壁のようにとりまき、その内側の「目」では逆に下降気流になる。\nそのため台風の目では風が弱まり、雲が消えて青空が見えることもある。\nただし目が通り過ぎると、反対向きの猛烈な暴風雨がふたたび始まるので油断は禁物。\n北半球では、風は反時計回りにふきこむ。',
    difficulty: 'standard',
  },
  {
    id: 'rika_37',
    subject: 'rika',
    question: '赤血球・白血球・血小板のうち、酸素を運ぶ役割を持つのはどれか？またヘモグロビンに含まれる元素は？',
    answer: '赤血球。ヘモグロビンには鉄（Fe）が含まれる',
    explanation: '酸素を運ぶのは赤血球。中にふくまれるヘモグロビンという赤い色素が酸素と結びつく。\nヘモグロビンには鉄（Fe）がふくまれていて、血が赤いのはこのため。\nヘモグロビンは、酸素の多い肺では酸素と結びつき、酸素の少ない体の各部ではなす、という性質を持つ。\n白血球は細菌をとらえて体を守り、血小板は出血を止め、液体の血しょうは養分や不要物を運ぶ。',
    difficulty: 'standard',
  },
  {
    id: 'rika_38',
    subject: 'rika',
    question: '「てこ」の原理で、支点から30cmの点に60gのおもりをつるした。支点から反対側20cmの点に何gの力を加えれば水平に保てるか？',
    answer: '90g',
    hint: '60 × 30 = F × 20 → F = 90g',
    explanation: 'てこは「おもりの重さ×支点からの距離」が左右で等しいときにつり合う。\n左は 60×30＝1800。\n右は支点から20cmなので F×20＝1800。\nF＝1800÷20＝90g。\n支点に近い位置ほど大きな力が必要になる（重さと距離は反比例する）と覚えておこう。',
    difficulty: 'standard',
  },
  {
    id: 'rika_39',
    subject: 'rika',
    question: '太陽系の8つの惑星を太陽に近い順に答えよ。',
    answer: '水星・金星・地球・火星・木星・土星・天王星・海王星',
    explanation: '太陽に近い順に、水星・金星・地球・火星・木星・土星・天王星・海王星の8個。\n「水金地火木土天海（すいきんちかもくどってんかい）」と唱えて覚える。\n内側の4つ（水星〜火星）は岩石でできた小さく重い地球型惑星、外側の4つは大きくて軽いガスや氷の木星型惑星。\nかつて惑星とされた冥王星は、2006年に準惑星に分類が変わり、惑星は9個から8個になった。',
    difficulty: 'standard',
  },
  {
    id: 'rika_40',
    subject: 'rika',
    question: '双子葉類と単子葉類の違いを葉脈と根の形で説明せよ。',
    answer: '双子葉類: 葉脈が網状脈、根は主根と側根。単子葉類: 葉脈が平行脈、根はひげ根',
    explanation: '被子植物は、芽ばえのときの子葉の枚数で2つに分けられる。\n双子葉類は子葉が2枚で、葉脈は網の目のような網状脈、根は太い主根とそこから出る側根、茎の維管束は輪のように並ぶ。アサガオ・ヒマワリ・ホウセンカなど。\n単子葉類は子葉が1枚で、葉脈は平行にならぶ平行脈、根はひげ根、維管束はばらばらに散らばる。イネ・トウモロコシ・ユリなど。\n「2枚→網目・主根」「1枚→平行・ひげ根」とセットで覚える。',
    difficulty: 'standard',
  },

  // --- advanced (10問) ---
  {
    id: 'rika_41',
    subject: 'rika',
    question: '炭酸水素ナトリウム（重曹）を加熱すると何が生成するか？化学反応式で答えよ。',
    answer: '2NaHCO₃ → Na₂CO₃ + H₂O + CO₂（炭酸ナトリウム・水・二酸化炭素）',
    explanation: '炭酸水素ナトリウム（重曹）を加熱すると、3つの物質に分かれる（熱分解）。\n2NaHCO₃ → Na₂CO₃ + H₂O + CO₂。\nできるのは、炭酸ナトリウム（白い固体として試験管に残る）、水（試験管の口の方に水てきがつく）、二酸化炭素（石灰水を白くにごらせる）の3つ。\n実験では試験管の口を少し下げて加熱する。できた水が加熱部分に流れて、試験管が割れるのを防ぐため。\nホットケーキがふくらむのは、このとき出る二酸化炭素のはたらき。',
    difficulty: 'advanced',
    answerReading: '炭酸水素ナトリウム2つから、炭酸ナトリウムと水と二酸化炭素が生成する',
  },
  {
    id: 'rika_42',
    subject: 'rika',
    question: 'エンドウ豆の遺伝実験（メンデルの法則）：丸い種（優性）×しわのある種（劣性）のF2世代における丸：しわの比は？',
    answer: '3:1',
    hint: 'F1はすべて丸（Aa）。F2はAA:Aa:aa = 1:2:1、表現型は丸:しわ = 3:1',
    explanation: '丸（A）がしわ（a）に対して優性（顕性）。\n親は 丸AA×しわaa なので、子（F1）はすべて Aa となり全部丸くなる。\nF1どうし（Aa×Aa）をかけ合わせると、孫（F2）は AA:Aa:aa＝1:2:1 の割合で生まれる。\nAA と Aa はどちらも丸く見えるので、見た目の比は 丸:しわ＝(1+2):1＝3:1。',
    difficulty: 'advanced',
    answerReading: '3対1。F1はすべて丸、F2の表現型は丸対しわが3対1になる',
  },
  {
    id: 'rika_43',
    subject: 'rika',
    question: '天体の年周運動：同じ時刻に星座を観察すると、1か月でどれだけ移動して見えるか？また1年で元の位置に戻るのはなぜか？',
    answer: '約30度西に移動して見える。地球が太陽の周りを公転（365日で360度）するため、1か月で約30度公転する',
    explanation: '地球は365日で太陽のまわりを1周（360度）するので、1日に約1度、1か月では 360÷12＝約30度 公転する。\nそのため同じ時刻に空を見ると、星座は1か月に約30度ずつ西へずれて見える。これを年周運動という。\n1年たつと 30×12＝360度 でちょうど1周し、もとの位置にもどる。\n星が同じ位置に来る時刻は1日に約4分ずつ早くなり、1か月で約2時間早くなる。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_44',
    subject: 'rika',
    question: 'てこの問題：長さ120cmの棒の左端から30cmの点に支点を置く。左端に100gのおもり、右端に何gのおもりを置けばつりあうか？',
    answer: '約33g',
    hint: '100×30 = F×90 → F = 100×30/90 ≈ 33.3g',
    explanation: '支点から左端までは30cm、右端までは 120−30＝90cm。\nてこは「重さ×支点からの距離」が左右で等しいときつり合う。\n100×30＝F×90。\nF＝3000÷90＝33.3…≒33g。\n支点から遠いほど小さい力でつり合うので、答えが100gより軽くなるのは自然なこと。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_45',
    subject: 'rika',
    question: '光合成の反応：葉緑体で行われる明反応と暗反応（カルビン回路）について、それぞれで何が起こるか説明せよ。',
    answer: '明反応: 光エネルギーで水を分解しATPとNADPHを生成、酸素を放出。暗反応: ATPとNADPHを使ってCO₂を固定しグルコースを合成',
    explanation: '光合成は葉緑体で2段階に分かれて進む。\n明反応（光が必要な反応）…光のエネルギーで水を分解し、酸素を空気中に出しながら、ATPとNADPHというエネルギーの運び手をつくる。\n暗反応（カルビン回路。光が直接は必要ない反応）…明反応でできたATPとNADPHを使って、取り入れた二酸化炭素からブドウ糖（グルコース）をつくる。\nつまり、水は明反応で使われて酸素になり、二酸化炭素は暗反応で養分に変わる。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_46',
    subject: 'rika',
    question: '複雑な食物連鎖：植物→バッタ→カエル→ヘビ→タカという食物連鎖で、植物が100kgあったとき、タカが獲得できるエネルギー量は理論上何kg？',
    answer: '0.01kg（10g）',
    hint: '各段階で10%しか移行しない。100 × 0.1 × 0.1 × 0.1 × 0.1 = 0.01kg',
    explanation: '1段階上がるごとに、次に伝わるエネルギーは10分の1になる。\n植物100kg → バッタ 100×0.1＝10kg → カエル 1kg → ヘビ 0.1kg → タカ 0.01kg。\nまとめて計算すると 100×0.1×0.1×0.1×0.1＝0.01kg（10g）。\n段階が多いほど利用できる量は急激に減るので、食物連鎖の上位の動物ほど数が少なくなる。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_47',
    subject: 'rika',
    question: '血液循環：肺循環と体循環の経路をそれぞれ答えよ。動脈血・静脈血はどこを流れるか？',
    answer: '肺循環: 右心室→肺動脈→肺→肺静脈→左心房（肺動脈に静脈血、肺静脈に動脈血）。体循環: 左心室→大動脈→全身→大静脈→右心房',
    explanation: '肺循環は、右心室→肺動脈→肺→肺静脈→左心房。肺で二酸化炭素をすてて酸素を受け取る短い旅。\n体循環は、左心室→大動脈→全身→大静脈→右心房。全身に酸素と養分を配る長い旅。\n血管の名前は「心臓から出る＝動脈、心臓へもどる＝静脈」で決まり、流れる血液の種類とは関係ない。\nそのため、肺動脈には酸素の少ない静脈血、肺静脈には酸素の多い動脈血が流れるという逆転が起こる。ここが入試の定番。',
    difficulty: 'advanced',
    answerReading: '肺循環: 右心室から肺動脈を通って肺へ、肺静脈を通って左心房へ。肺動脈には静脈血、肺静脈には動脈血が流れる。体循環: 左心室から大動脈で全身へ、大静脈で右心房へ戻る',
  },
  {
    id: 'rika_48',
    subject: 'rika',
    question: '電気分解：塩化銅水溶液（CuCl₂）を電気分解すると、陽極と陰極に何が生成するか？',
    answer: '陽極: 塩素（Cl₂）が発生。陰極: 銅（Cu）が析出する',
    explanation: '塩化銅（CuCl₂）は水にとけると、＋の電気を持つ銅と −の電気を持つ塩素に分かれる。\n電気は反対の極に引かれるので、＋の銅は −極である陰極に集まり、赤茶色の銅が付着する（析出）。\n−の塩素は ＋極である陽極に集まり、黄緑色でプールの消毒のようなにおいのする塩素の気体が発生する。\nCuCl₂ → Cu + Cl₂。\n銅が取り出されていくので、青色の水溶液の色はだんだんうすくなる。',
    difficulty: 'advanced',
    questionReading: '電気分解: 塩化銅水溶液を電気分解すると、陽極と陰極に何が生成するか？',
    answerReading: '陽極: 塩素が発生。陰極: 銅が析出する',
  },
  {
    id: 'rika_49',
    subject: 'rika',
    question: '皆既月食が起こる条件と、なぜ月が赤く見えるかを説明せよ。',
    answer: '条件: 満月のとき、月が地球の本影に完全に入ること。赤く見える理由: 地球の大気で散乱された赤い光のみが月面に届き反射されるため',
    explanation: '月食は、太陽・地球・月の順に一直線に並び、月が地球の影に入る現象なので、必ず満月のときに起こる。\n月が地球の本影にすっぽり入ると皆既月食になる。\n真っ暗にならず赤黒く見えるのは、太陽の光が地球の大気を通るとき、青い光は散らばって失われ、散らばりにくい赤い光だけが大気で曲げられて月まで届くから。\n夕焼けが赤いのと同じ理由で、このときの月は赤銅色（しゃくどういろ）の月と呼ばれる。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_50',
    subject: 'rika',
    question: 'フレミングの左手の法則において、親指・人差し指・中指が示すものをそれぞれ答えよ。',
    answer: '親指: 力（運動）の向き。人差し指: 磁界の向き。中指: 電流の向き',
    explanation: '磁界の中にある導線に電流を流すと、導線に力がはたらく。その向きは左手の3本の指で表せる。\n中指＝電流の向き、人差し指＝磁界の向き、親指＝力（動く）の向き。\n3本の指をたがいに直角に開いて使う。\n「電・磁・力」を中指・人差し指・親指の順に当てはめると覚えやすい。モーターが回るのは、この力を利用している。',
    difficulty: 'advanced',
  },

  // ============================================================
  // 社会 (shakai) - 50問
  // ============================================================

  // --- basic (20問) ---
  {
    id: 'shakai_01',
    subject: 'shakai',
    question: '日本で最も長い川は？',
    answer: '信濃川（全長367km）',
    explanation: '日本一長い川は信濃川で、全長367km。\n長野県内では千曲川と呼ばれ、新潟県に入ってから信濃川という名になる。\n越後平野（新潟平野）をうるおして日本海に注ぎ、流域は日本一の米どころになっている。\n流域面積が日本一の川は利根川（坂東太郎）で、長さ日本一とは別なので区別する。長さの2位は利根川322km、3位は石狩川268km。',
    difficulty: 'basic',
  },
  {
    id: 'shakai_02',
    subject: 'shakai',
    question: '聖徳太子が十七条憲法を制定したのは何年？',
    answer: '604年',
    explanation: '604年、推古天皇の摂政だった聖徳太子（厩戸皇子）が十七条憲法を定めた。\n「和をもって貴しとなす」で始まり、役人としての心構えや天皇への服従、仏教をうやまうことを説いたもので、豪族を天皇中心の政治にまとめるねらいがあった。\n前年の603年には、家がらではなく能力で人を役人に取り立てる冠位十二階を定めている。「群れ（603）なす冠位、むれよ（604）役人」のように603→604の順で覚える。\n607年には小野妹子を遣隋使として送り、対等な立場での外交をめざした。',
    difficulty: 'basic',
  },
  {
    id: 'shakai_03',
    subject: 'shakai',
    question: '日本の標準時子午線は東経何度？',
    answer: '東経135度（兵庫県明石市）',
    explanation: '日本の時刻の基準となる標準時子午線は東経135度で、兵庫県明石市を通る。\nイギリスのロンドン（旧グリニッジ天文台）を通る0度の本初子午線から、東へ135度の位置。\n地球は24時間で360度回るので、経度15度で1時間の時差が生まれる。135÷15＝9 となり、日本の時刻はイギリスより9時間進んでいる。\n135度が選ばれたのは、15でわり切れてちょうど9時間差になる、きりのよい経度だから。',
    difficulty: 'basic',
  },
  {
    id: 'shakai_04',
    subject: 'shakai',
    question: '日本国憲法が公布されたのは何年何月何日？',
    answer: '1946年11月3日',
    explanation: '日本国憲法は1946年11月3日に公布（国民に広く知らせること）され、半年後の1947年5月3日から施行（実際に効力を持つこと）された。\n公布日の11月3日は文化の日、施行日の5月3日は憲法記念日という祝日になっている。\n第二次世界大戦の敗戦後、GHQ（連合国軍総司令部）の示した案をもとに、大日本帝国憲法を改正する形でつくられた。\n「公布」と「施行」は意味も日付もちがうので、区別して覚えることが大切。',
    difficulty: 'basic',
  },
  {
    id: 'shakai_05',
    subject: 'shakai',
    question: '世界で最も面積が大きい国は？',
    answer: 'ロシア',
    explanation: '世界でいちばん面積が大きい国はロシアで、約1710万km²。\n日本（約38万km²）の約45倍で、地球の陸地の約8分の1をしめる。\nヨーロッパからアジアにまたがって東西に長いため、国内に11もの時間帯がある。\n面積の順は ロシア→カナダ→アメリカ→中国→ブラジル。\n人口がいちばん多い国はインド（近年、中国を追いこした）で、面積の順位とはちがうので区別する。',
    difficulty: 'basic',
  },
  {
    id: 'shakai_06',
    subject: 'shakai',
    question: '参議院議員の任期は何年？',
    answer: '6年（3年ごとに半数改選）',
    explanation: '参議院議員の任期は6年で、3年ごとに半数ずつ選び直す（半数改選）。解散はない。\nこれは、議員が一度に全部入れかわらないようにして政治を安定させ、じっくり話し合う「良識の府」とするため。\n一方、衆議院は任期4年で解散があるため、そのときどきの国民の意思をより新しく反映できる。\nそのため、予算の議決・条約の承認・内閣総理大臣の指名などで衆議院の優越が認められている。\n立候補できる年齢（被選挙権）は参議院が30歳以上、衆議院が25歳以上。',
    difficulty: 'basic',
  },
  {
    id: 'shakai_07',
    subject: 'shakai',
    question: '江戸幕府を開いたのは誰？',
    answer: '徳川家康',
    explanation: '江戸幕府を開いたのは徳川家康。\n1600年の関ヶ原の戦いで石田三成らの西軍を破って全国の実権をにぎり、1603年に朝廷から征夷大将軍に任命されて江戸（今の東京）に幕府を開いた。\n「ヒーロー・オー・サン（1603）」などの語呂で1603年と覚える。\n家康はわずか2年で将軍の位を子の秀忠にゆずり、徳川家が代々将軍になることを世に示した。\n幕府は15代慶喜が1867年に大政奉還するまで、約260年続いた。',
    difficulty: 'basic',
  },
  {
    id: 'shakai_08',
    subject: 'shakai',
    question: '日本の国会は衆議院と何院からなる？',
    answer: '参議院',
    explanation: '日本の国会は衆議院と参議院の2つの議院からなる。これを二院制（両院制）という。\n2つあるのは、審議を慎重に行い、一方の行きすぎをもう一方がチェックできるようにするため。\n衆議院は任期4年・解散あり・定数465人、参議院は任期6年・解散なし・定数248人。\n国会は憲法で「国権の最高機関であって、国の唯一の立法機関」と定められており、法律をつくれるのは国会だけ。',
    difficulty: 'basic',
  },
  {
    id: 'shakai_09',
    subject: 'shakai',
    question: '縄文時代の次の時代は？',
    answer: '弥生時代',
    explanation: '縄文時代の次は弥生時代（およそ紀元前4世紀ごろ〜紀元3世紀ごろ）。\n名前は、東京都の弥生町で見つかった土器に由来する。\n大陸から稲作と金属器（青銅器・鉄器）が伝わり、人々は米をたくわえるようになった。たくわえの差から貧富の差と身分が生まれ、水や土地をめぐる争いから「むら」が「くに」へまとまっていった。\n弥生土器は縄文土器よりうすくてかたく、模様が少ない。代表的な遺跡は佐賀県の吉野ヶ里遺跡、静岡県の登呂遺跡。\n時代の順は 旧石器→縄文→弥生→古墳。',
    difficulty: 'basic',
  },
  {
    id: 'shakai_10',
    subject: 'shakai',
    question: '日本最大の湖は？',
    answer: '琵琶湖（滋賀県）',
    explanation: '日本最大の湖は滋賀県の琵琶湖で、面積は約670km²。滋賀県の面積の約6分の1をしめる。\n瀬田川→宇治川→淀川と名を変えて流れ出し、京都・大阪の人々の飲み水になっているので「近畿の水がめ」と呼ばれる。\n面積の2位は茨城県の霞ヶ浦、3位は北海道のサロマ湖。\nいちばん深い湖は秋田県の田沢湖（423m）で、広さの順位とはちがうので区別する。',
    difficulty: 'basic',
  },
  {
    id: 'shakai_11',
    subject: 'shakai',
    question: '関ヶ原の戦いが起きた年は？',
    answer: '1600年',
    explanation: '1600年、豊臣秀吉の死後の主導権をめぐって、徳川家康の東軍と石田三成らの西軍が岐阜県の関ヶ原で戦い、東軍が勝った。\n「天下分け目の戦い」と呼ばれ、これによって家康が全国の大名をしたがえる立場になった。\n「ヒーロー（1600）現る関ヶ原」などの語呂で覚える。3年後の1603年に家康は江戸幕府を開く。\nこの戦いのあと徳川家にしたがった大名は外様大名とされ、江戸から遠い場所に配置された。',
    difficulty: 'basic',
  },
  {
    id: 'shakai_12',
    subject: 'shakai',
    question: 'アメリカ合衆国の首都は？',
    answer: 'ワシントンD.C.',
    explanation: 'アメリカ合衆国の首都はワシントンD.C.。\nD.C.は「コロンビア特別区」の略で、どの州にも属さない特別な地区。政治の中心となる都市として計画的につくられた。\nホワイトハウス（大統領官邸）や連邦議会議事堂がある。\n人口がいちばん多い都市はニューヨークだが首都ではなく、ここには国連本部がある。\n首都と最大都市がちがう国はほかに、オーストラリア（首都キャンベラ・最大都市シドニー）、ブラジル（首都ブラジリア）などがある。',
    difficulty: 'basic',
  },
  {
    id: 'shakai_13',
    subject: 'shakai',
    question: '日本で最も高い山は？',
    answer: '富士山（3776m）',
    explanation: '日本一高い山は、静岡県と山梨県にまたがる富士山で、標高3776m。\n「みなろう（3776）富士山」と覚える。\n何度も噴火をくり返してできた美しい円すい形の成層火山で、今も活火山。最後の噴火は1707年の宝永噴火。\n2013年に「富士山—信仰の対象と芸術の源泉」として世界文化遺産に登録された（自然遺産ではない点に注意）。\n2位は山梨県の北岳（3193m）、3位は奥穂高岳と間ノ岳（3190m）。',
    difficulty: 'basic',
  },
  {
    id: 'shakai_14',
    subject: 'shakai',
    question: '明治維新が始まった年は？',
    answer: '1868年',
    explanation: '明治維新は1868年に始まった。\n前年の1867年、15代将軍徳川慶喜が政権を朝廷に返し（大政奉還）、天皇中心の新政府ができた。\n1868年、新政府は政治の方針を示す五箇条の御誓文を出し、江戸を東京と改め、元号を明治とした。\n「一つやろう（1868）明治維新」などの語呂で覚える。\nその後、版籍奉還（1869年）・廃藩置県（1871年）・学制（1872年）・徴兵令と地租改正（1873年）と改革が続き、富国強兵をめざした。',
    difficulty: 'basic',
  },
  {
    id: 'shakai_15',
    subject: 'shakai',
    question: '国連（国際連合）の本部はどこ？',
    answer: 'ニューヨーク（アメリカ）',
    explanation: '国際連合（国連）の本部は、アメリカのニューヨークにある。\n国連は第二次世界大戦の反省から、世界の平和と安全を守るために1945年に発足し、日本は1956年に加盟した。\n前身の国際連盟の本部はスイスのジュネーブなので、まちがえないよう注意。\n国連の主な機関には総会・安全保障理事会・国際司法裁判所（オランダのハーグ）などがある。\n公用語は英語・フランス語・中国語・ロシア語・スペイン語・アラビア語の6つ。',
    difficulty: 'basic',
  },
  {
    id: 'shakai_16',
    subject: 'shakai',
    question: '日本の都道府県は全部でいくつ？',
    answer: '47都道府県',
    explanation: '日本の都道府県は全部で47。内わけは1都（東京都）・1道（北海道）・2府（大阪府・京都府）・43県。\n1871年の廃藩置県で藩を廃止して府県を置き、その後まとめられて現在の形になった。\n面積が最大なのは北海道、最小は香川県。人口が最多なのは東京都、最少は鳥取県。\n海に面していない内陸県は、栃木・群馬・埼玉・山梨・長野・岐阜・滋賀・奈良の8県。',
    difficulty: 'basic',
  },
  {
    id: 'shakai_17',
    subject: 'shakai',
    question: '日本最南端の都道府県は？',
    answer: '沖縄県',
    explanation: '都道府県の中でいちばん南にあるのは沖縄県で、県庁所在地は那覇市。\n亜熱帯の気候で1年中あたたかく、さとうきび・パイナップル・きくの栽培や観光がさかん。台風の通り道になりやすい。\n1972年にアメリカから日本に返還されたが、今も日本にあるアメリカ軍施設の多くが集まっている。\nなお、日本の国土全体の最南端は沖ノ鳥島で、これは東京都に属する。「最南端の都道府県＝沖縄県」「最南端の島＝沖ノ鳥島（東京都）」と分けて覚える。',
    difficulty: 'basic',
  },
  {
    id: 'shakai_18',
    subject: 'shakai',
    question: '坂本龍馬は何時代の人物か？また出身地（藩）はどこか？',
    answer: '幕末（江戸時代末期）、土佐藩（高知県）出身',
    explanation: '坂本龍馬は、江戸時代の終わり（幕末）に活やくした土佐藩（今の高知県）出身の武士。\n1866年、仲の悪かった薩摩藩（西郷隆盛ら）と長州藩（木戸孝允ら）を引き合わせて薩長同盟を成立させ、倒幕への流れをつくった。\n日本初の商社ともいわれる亀山社中（のちの海援隊）をつくり、新しい国のあり方をまとめた船中八策を示した。\n1867年、大政奉還が実現した直後に京都の近江屋で暗殺され、33歳で亡くなった。明治維新の実現を見ることはなかった。',
    difficulty: 'basic',
  },
  {
    id: 'shakai_19',
    subject: 'shakai',
    question: '中国の首都は？',
    answer: '北京',
    explanation: '中国（中華人民共和国）の首都は北京（ペキン）。\n政治の中心で、天安門広場や故宮（紫禁城）があり、2008年の夏季オリンピックと2022年の冬季オリンピックが開かれた。\n経済・商業の中心で人口がいちばん多い都市は上海（シャンハイ）だが、首都ではない。\n中国は人口約14億人で、面積は世界4位。日本にとって最大級の貿易相手国でもある。',
    difficulty: 'basic',
  },
  {
    id: 'shakai_20',
    subject: 'shakai',
    question: '衆議院議員の任期は何年か？また解散はあるか？',
    answer: '4年。ただし解散がある（任期前に解散されることがある）',
    explanation: '衆議院議員の任期は4年。ただし解散があり、解散されると任期の途中でも議員の資格を失って、選挙をやり直す。\n解散があるのは、そのときどきの国民の意思をすばやく政治に反映させるため。実際には4年間つとめきることは少ない。\n参議院は任期6年で解散がなく、3年ごとに半数を改選する。\nこうした理由から、法律案・予算・条約の承認・内閣総理大臣の指名などで衆議院の優越が認められている。',
    difficulty: 'basic',
  },

  // --- standard (20問) ---
  {
    id: 'shakai_21',
    subject: 'shakai',
    question: '日本の気候区分：太平洋側の気候の特徴は？（夏・冬の降水量について）',
    answer: '夏に降水量が多く（南東の季節風の影響）、冬は乾燥して晴れることが多い',
    explanation: '日本の季節風（モンスーン）は、夏は南東から、冬は北西からふく。\n夏は太平洋からしめった南東の季節風がふきこみ、山地にぶつかって太平洋側に多くの雨をふらせる。梅雨や台風も重なるため、夏の降水量が多くなる。\n冬は大陸からの北西の季節風が日本海の上で水蒸気をふくみ、山地を越えるときに日本海側へ大雪をふらせる。山を越えた風は水分を失って乾いた風になるため、太平洋側は晴れて乾燥した日が続く（からっ風）。\n雨温図では、夏に降水量の山が1つある形が太平洋側、冬に山がある形が日本海側と見分けられる。',
    difficulty: 'standard',
  },
  {
    id: 'shakai_22',
    subject: 'shakai',
    question: '稲作が最も盛んな東北地方の平野を答えよ。また日本最大の稲作地帯はどこか？',
    answer: '庄内平野（山形県）が有名。日本最大の稲作地帯は越後平野（新潟県）',
    explanation: '東北地方で稲作がさかんな平野といえば、山形県の庄内平野（最上川の下流）。ほかに秋田平野、宮城県の仙台平野も米どころ。\n都道府県別の米の収穫量がいちばん多いのは新潟県で、その中心が越後平野（新潟平野）。信濃川と阿賀野川が運んだ土がつもってできた平野で、水はけの悪い湿地を排水して大水田地帯に変えた。\n新潟のコシヒカリ、山形のはえぬき・つや姫など、銘柄米の産地としても有名。\n東北地方と北陸地方を合わせて「日本の穀倉地帯」と呼ぶ。',
    difficulty: 'standard',
  },
  {
    id: 'shakai_23',
    subject: 'shakai',
    question: '大化の改新（645年）で廃止されたものと、その後の政治改革の方向性を答えよ。',
    answer: '豪族による土地・人民の私有（私地私民）を廃止し、公地公民制へ移行する改革',
    explanation: '645年、中大兄皇子（のちの天智天皇）と中臣鎌足（のちの藤原鎌足）が、天皇をしのぐ力を持っていた蘇我蝦夷・入鹿の親子をたおした（乙巳の変）。\nここから始まった政治改革が大化の改新で、「大化」は日本で最初の元号。「むしご（645）ろし大化の改新」と覚える。\n改革では、豪族が土地と人民を勝手に支配する私地私民をやめ、すべての土地と人民は国（天皇）のものとする公地公民の方針が示された。\nその上で戸籍をつくって人々に口分田をあたえ、税を取る班田収授の制度が整えられ、701年の大宝律令による律令国家へとつながっていく。',
    difficulty: 'standard',
  },
  {
    id: 'shakai_24',
    subject: 'shakai',
    question: '国際連合の安全保障理事会の常任理事国5か国を答えよ。',
    answer: 'アメリカ・イギリス・フランス・ロシア・中国（P5）',
    explanation: '国際連合の安全保障理事会は、世界の平和と安全に主な責任を持つ機関。\n常任理事国はアメリカ・イギリス・フランス・ロシア・中国の5か国（P5）で、任期がなくずっと理事国をつとめる。第二次世界大戦の戦勝国が中心になっている。\nこの5か国には拒否権があり、1か国でも反対すると重要な決議は成立しない。そのため大国どうしが対立すると、安保理が機能しなくなるという問題がある。\nほかに任期2年の非常任理事国が10か国あり、日本もこれまでに何度も選ばれている。',
    difficulty: 'standard',
  },
  {
    id: 'shakai_25',
    subject: 'shakai',
    question: '日本の三大工業地帯を答えよ。（生産額が多い順）',
    answer: '中京工業地帯（愛知）・阪神工業地帯（大阪・兵庫）・京浜工業地帯（東京・神奈川）',
    explanation: '生産額の多い順に、中京工業地帯（愛知県・三重県北部）→阪神工業地帯（大阪府・兵庫県）→京浜工業地帯（東京都・神奈川県）。\n中京は豊田市の自動車工業を中心に、日本最大の生産額をほこる。\n阪神は鉄鋼・化学など金属工業の割合が高く、中小工場が多いのが特ちょう。\n京浜はかつて日本一だったが、地価の高さや用地不足で工場が地方へ移り生産額が減った。首都にあるため印刷業の割合が高い。\nこれらは原料の輸入や製品の輸出に便利な臨海部に発達し、帯のようにつながる太平洋ベルトの一部をなす。',
    difficulty: 'standard',
  },
  {
    id: 'shakai_26',
    subject: 'shakai',
    question: '鎌倉幕府を開いた源頼朝が征夷大将軍に任命されたのは何年か？また鎌倉幕府が滅んだのは何年か？',
    answer: '1192年に征夷大将軍就任。1333年に滅亡（後醍醐天皇・新田義貞らによる）',
    explanation: '源頼朝は1185年に壇ノ浦の戦いで平氏をほろぼし、全国に守護・地頭を置く権利を得た。そして1192年に征夷大将軍に任命された。\n「いい国（1192）つくろう鎌倉幕府」の語呂が有名だが、実質的な成立を1185年（いい箱つくろう）とする考え方もある。\n1333年、後醍醐天皇の呼びかけに足利尊氏や新田義貞が応じて鎌倉をせめ、執権北条氏の鎌倉幕府はほろびた。約150年続いたことになる。\nその後の後醍醐天皇による建武の新政は2年ほどで失敗し、足利尊氏の室町幕府へ移っていく。',
    difficulty: 'standard',
  },
  {
    id: 'shakai_27',
    subject: 'shakai',
    question: '日本国憲法の三大原則を答えよ。',
    answer: '国民主権・基本的人権の尊重・平和主義（戦争放棄）',
    explanation: '日本国憲法の三大原則は、国民主権・基本的人権の尊重・平和主義。\n国民主権…国の政治のあり方を最終的に決める力は国民にある。天皇は政治の権限を持たない「日本国および日本国民統合の象徴」とされる。\n基本的人権の尊重…人が生まれながらに持つ権利（平等権・自由権・社会権など）は、「侵すことのできない永久の権利」として保障される。\n平和主義…第9条で、戦争の放棄・戦力の不保持・交戦権の否認を定めている。\n戦争への深い反省から生まれた憲法であることが、この3つによく表れている。',
    difficulty: 'standard',
  },
  {
    id: 'shakai_28',
    subject: 'shakai',
    question: '日本の農業における食料自給率（カロリーベース）は現在約何%か？',
    answer: '約38%（近年の数値）',
    hint: '先進国の中で最低レベルにあり、食料安全保障の課題となっている',
    explanation: '日本の食料自給率はカロリーベースで約38%。つまり、食べているエネルギーの6割以上を輸入にたよっている。\n米はほぼ100%自給できるが、小麦・大豆・とうもろこし（家畜のえさ）などの大半を輸入している。畜産物も、えさが輸入なら自給としては数えられにくい。\n食生活が米中心からパン・肉・油の多い洋風に変わったことや、農家の高齢化・農地の減少が主な原因。\n先進国の中でも低い水準で、戦争や不作で輸入が止まると食料が不足する心配がある（食料安全保障の問題）。\n生産額ベースで計算すると約6割となり、数え方によって数値が変わる点にも注意。',
    difficulty: 'standard',
  },
  {
    id: 'shakai_29',
    subject: 'shakai',
    question: '江戸時代の「参勤交代」制度の目的と、大名への経済的影響を説明せよ。',
    answer: '目的: 大名が幕府に反乱しないよう人質として妻子を江戸に置き、大名を定期的に江戸と藩に往来させ監視。影響: 莫大な費用がかかり大名の財力を消耗させた',
    explanation: '参勤交代は1635年、3代将軍徳川家光が武家諸法度に定めた制度。\n大名は原則1年おきに江戸と自分の領地を行き来し、妻子は人質として江戸に住まわせられた。これによって幕府は大名を監視し、反乱をふせいだ。\n大名行列の費用や江戸屋敷の維持費はすべて大名の負担で、収入の多くが消えたため大名の財力は弱まり、幕府に反抗する力を失った。\n一方で、五街道が整備されて宿場町がにぎわい、江戸の文化や物資が全国へ広まるという効果もあった。',
    difficulty: 'standard',
  },
  {
    id: 'shakai_30',
    subject: 'shakai',
    question: '日本の地形：フォッサマグナとは何か？また東北日本と西南日本の境界はどこか？',
    answer: 'フォッサマグナは本州中央部を南北に走る大地溝帯（大断裂）。東西日本の地質的境界で、西縁は糸魚川—静岡構造線',
    explanation: 'フォッサマグナはラテン語で「大きなみぞ」という意味で、本州の中央部を南北に走る、地下深くまで新しい地層がつまった大地溝帯。\nここを境に、東北日本と西南日本では地質のつくりが大きくちがう。\n西のふちは糸魚川（新潟県）—静岡（静岡県）構造線という断層線ではっきりしているが、東のふちははっきりしていない。\n付近には浅間山・八ヶ岳・富士山など火山が並び、本州が「くの字」に折れ曲がって見えるのもこの構造によるもの。',
    difficulty: 'standard',
  },
  {
    id: 'shakai_31',
    subject: 'shakai',
    question: 'PKO（国連平和維持活動）とは何か？日本は初めてどの国に自衛隊を派遣したか？',
    answer: '国連が紛争地域に送る平和維持のための活動。日本はカンボジア（1992年）に初派遣',
    explanation: 'PKO（国連平和維持活動）は、紛争が起きた地域や停戦後の地域に国連が部隊や監視団を送り、停戦の監視・選挙の支援・道路や橋の復旧などを行って平和を保つ活動。\n日本は1992年にPKO協力法（国際平和協力法）を成立させ、同じ年にカンボジアへ初めて自衛隊を派遣した。\nその後、モザンビーク・ゴラン高原・東ティモール・南スーダンなどにも派遣されている。\n憲法第9条との関係から、停戦の合意があること、武力行使をしないことなど、参加5原則が定められている。',
    difficulty: 'standard',
  },
  {
    id: 'shakai_32',
    subject: 'shakai',
    question: '江戸時代に「鎖国」が続いていた中で、貿易を続けていた国・地域を2つ答えよ。',
    answer: 'オランダと中国（清）※長崎の出島でオランダ、長崎唐人屋敷で中国',
    explanation: '江戸幕府は、キリスト教が広まるのをふせぎ、貿易の利益を独占するために、外国との行き来をきびしく制限した。これを鎖国という（1639年、ポルトガル船の来航禁止で完成）。\nそれでも貿易を続けたのはオランダと中国（清）の2か国。オランダはキリスト教の布教をしなかったため許され、長崎の出島でだけ取引した。中国船は長崎の唐人屋敷で取引した。\nこのほか、朝鮮とは対馬藩を通じて（朝鮮通信使が来日）、琉球王国とは薩摩藩を通じて、アイヌの人々とは松前藩を通じて交流があり、「四つの窓口」と呼ばれる。\nオランダを通して伝わった学問が蘭学で、杉田玄白らの「解体新書」が有名。',
    difficulty: 'standard',
  },
  {
    id: 'shakai_33',
    subject: 'shakai',
    question: '日本の「四大公害病」を答えよ。',
    answer: '水俣病（熊本）・新潟水俣病（第二水俣病）・イタイイタイ病（富山）・四日市ぜんそく（三重）',
    explanation: '高度経済成長期、工場が排水や排煙の対策をおろそかにしたため、各地で公害が発生した。\n水俣病（熊本県・八代海沿岸）…工場排水にふくまれた有機水銀（メチル水銀）が魚にたまり、それを食べた人の手足がしびれ、目や耳が不自由になった。\n新潟水俣病（第二水俣病）…新潟県の阿賀野川流域で、同じく有機水銀が原因で起こった。\nイタイイタイ病（富山県・神通川流域）…鉱山から流れ出たカドミウムが原因で、骨がもろくなり、「イタイイタイ」とさけぶほどの痛みに苦しんだ。\n四日市ぜんそく（三重県）…石油化学コンビナートから出た亜硫酸ガス（硫黄酸化物）で、激しいぜんそくが起こった。\nいずれの裁判でも被害者側が勝訴し、1967年の公害対策基本法、1971年の環境庁（現在の環境省）設置につながった。',
    difficulty: 'standard',
  },
  {
    id: 'shakai_34',
    subject: 'shakai',
    question: '「南蛮貿易」で日本に最初にキリスト教を伝えたのは誰か？また何年か？',
    answer: 'フランシスコ・ザビエル（イエズス会）、1549年に鹿児島に上陸',
    explanation: '1549年、イエズス会の宣教師フランシスコ・ザビエルが鹿児島に上陸し、日本に初めてキリスト教を伝えた。\n「以後よく（1549）広まるキリスト教」と覚える。\n宣教師はポルトガル・スペインの商人とともに来日し、この貿易を南蛮貿易という。鉄砲・火薬・生糸・時計などがもたらされ、日本からはおもに銀が輸出された。\n鉄砲はその6年前の1543年に、種子島に流れ着いたポルトガル人によって伝えられている（「以後よさん（1543）鉄砲」）。\n貿易の利益をのぞむ大名の中には、自ら洗礼を受けるキリシタン大名も現れた。',
    difficulty: 'standard',
  },
  {
    id: 'shakai_35',
    subject: 'shakai',
    question: 'EU（欧州連合）の共通通貨は何か？またEUに加盟しているが共通通貨を使用していない国を1つ答えよ。',
    answer: 'ユーロ（€）。使用していない国の例: スウェーデン、デンマーク、ポーランド、チェコ、ハンガリーなど',
    explanation: 'EU（欧州連合）の共通通貨はユーロ（€）。同じお金を使うことで両替の手間や損がなくなり、貿易や旅行がしやすくなった。\nただしEU加盟国すべてが使っているわけではなく、スウェーデン・デンマーク・ポーランド・チェコ・ハンガリーなどは今も自国の通貨を使っている。\n共通通貨を使う国の集まりをユーロ圏という。\nなお、イギリスはEUに加盟していたときもユーロを使わずポンドのままで、2020年にEUを脱退した（ブレグジット）。今は加盟国ではないので、答えるときは注意する。',
    difficulty: 'standard',
  },
  {
    id: 'shakai_36',
    subject: 'shakai',
    question: '「天保の改革」「寛政の改革」「享保の改革」をそれぞれの中心人物と順番（古い順）に答えよ。',
    answer: '享保の改革（徳川吉宗）→寛政の改革（松平定信）→天保の改革（水野忠邦）',
    explanation: '江戸時代の三大改革を古い順に並べると、享保の改革→寛政の改革→天保の改革。\n享保の改革（1716年〜、8代将軍徳川吉宗）…目安箱の設置、上げ米の制、公事方御定書、新田開発などで幕府の財政を立て直した。\n寛政の改革（1787年〜、老中松平定信）…ききんに備えた囲い米、旗本や御家人の借金帳消し、朱子学以外の学問を禁止する寛政異学の禁など。きびしすぎて不評だった。\n天保の改革（1841年〜、老中水野忠邦）…物価を下げるための株仲間の解散、江戸に出てきた農民を村に帰す人返しの法など。反発が強く、2年ほどで失敗した。\n「享・寛・天」の順、または吉宗→定信→忠邦の順で覚える。',
    difficulty: 'standard',
  },
  {
    id: 'shakai_37',
    subject: 'shakai',
    question: 'カカオの主要産地であるガーナやコートジボワールがある大陸はどこか？また植民地支配からの独立が相次いだ1960年を何と呼ぶか？',
    answer: 'アフリカ大陸。1960年は「アフリカの年」（17か国が独立）',
    explanation: 'カカオの生産量が世界1位・2位のコートジボワールとガーナは、どちらもアフリカ大陸のギニア湾に面した国。\nアフリカの多くの国はかつてヨーロッパの植民地で、決められた作物だけをつくらされた（プランテーション農業）。そのため今も特定の作物や鉱産物の輸出にたよるモノカルチャー経済の国が多く、価格の変動で経済が不安定になりやすい。\n第二次世界大戦後に独立の動きが高まり、1960年には一挙に17か国が独立した。この年を「アフリカの年」という。\n現在はアフリカの55の国・地域がアフリカ連合（AU）をつくっている。',
    difficulty: 'standard',
  },
  {
    id: 'shakai_38',
    subject: 'shakai',
    question: '日本の三権分立について、立法・行政・司法をそれぞれ担う機関を答えよ。',
    answer: '立法: 国会。行政: 内閣。司法: 裁判所',
    explanation: '立法は国会、行政は内閣、司法は裁判所が担当する。\nこれは、権力が1か所に集まると使い方をあやまり、国民の自由がおびやかされるため、3つに分けてたがいにチェックさせるしくみで、フランスのモンテスキューが「法の精神」で唱えた。\n国会は内閣不信任決議、内閣は衆議院の解散、裁判所は法律や政治が憲法に違反していないかを調べる違憲審査権を持つ。\n国民は、選挙で国会を、世論で内閣を、国民審査で最高裁判所裁判官をチェックする立場にある。',
    difficulty: 'standard',
  },
  {
    id: 'shakai_39',
    subject: 'shakai',
    question: '「白河の関」「勿来の関」「念珠の関」は何に関係する地名か？また現代の何県にあるか？',
    answer: '古代の関所（陸奥国への入り口）。白河の関・勿来の関は福島県、念珠の関は山形県にある',
    explanation: '白河の関・勿来の関・念珠の関は、古代の朝廷が東北地方（陸奥・出羽）への出入り口に設けた関所で、「奥州三関」と呼ばれる。\n人や物の出入りを調べるとともに、蝦夷と呼ばれた東北の人々への備えでもあった。\n現在の場所は、白河の関と勿来の関が福島県、念珠の関（鼠ヶ関）が山形県。\n白河の関は和歌に多くよまれた歌枕としても有名で、松尾芭蕉も「おくのほそ道」の旅でこの関をこえて東北へ向かった。',
    difficulty: 'standard',
  },
  {
    id: 'shakai_40',
    subject: 'shakai',
    question: '豊臣秀吉が行った「刀狩り」の目的は何か？',
    answer: '農民から武器を取り上げ、武士と農民の身分を明確に区別する（兵農分離）とともに一揆を防ぐため',
    explanation: '1588年、豊臣秀吉は刀狩令を出して、農民から刀・弓・やり・鉄砲などの武器を取り上げた。\n表向きは「集めた金属で大仏をつくるため」と説明したが、本当のねらいは一揆をふせぎ、農民を田畑の耕作に専念させることだった。\nこれと太閤検地（田畑の広さや収穫量を調べ、耕す人を検地帳に登録した）を合わせて、武士と農民の身分をはっきり分ける兵農分離が進み、江戸時代の身分制度の土台になった。\n「以（1）ちば（58）ん刀狩り」などの語呂で1588年と覚える。',
    difficulty: 'standard',
  },

  // --- advanced (10問) ---
  {
    id: 'shakai_41',
    subject: 'shakai',
    question: '「価格の自動調節機能」とは何か？需要と供給の関係で説明せよ。',
    answer: '価格が上がると供給が増え需要が減り、価格が下がると需要が増え供給が減る。この働きにより市場では均衡価格が自動的に決まる（見えざる手）',
    explanation: 'ものの値段（価格）は、買いたい量（需要）と売りたい量（供給）の関係で決まる。\n品不足で買いたい人が多いと価格は上がる。価格が上がると、売ればもうかるので作る人がふえて供給が増え、一方で高いから買わない人が出て需要は減る。\n逆に売れ残って価格が下がると、安いから買う人がふえて需要が増え、もうけが減るので供給は減る。\nこうして需要量と供給量が等しくなるところに価格が落ち着く。その価格を均衡価格といい、この働きをアダム・スミスは「見えざる手」と呼んだ。\nただし電気・水道・鉄道など競争が働きにくいものは、公共料金として国や地方公共団体が決めている。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_42',
    subject: 'shakai',
    question: '「アヘン戦争」（1840〜42年）の背景・経緯・結果を説明し、日本への影響を答えよ。',
    answer: '背景: イギリスが清への輸出不振を補うためインドからアヘンを密輸。清が禁止するとイギリスが開戦。結果: 清が敗北し南京条約で香港割譲・開港。日本への影響: 欧米列強の脅威を認識し、攘夷運動が高まった',
    explanation: '背景…イギリスは中国（清）から茶を大量に買っていたが、自国の綿織物は売れず、代金の銀が流出して困っていた。そこで植民地インドでつくったアヘン（麻薬）を清へ密輸し、その代金で銀を取りもどす三角貿易を行った。\n経緯…アヘンによって人々の健康と社会が乱れた清は、林則徐を送ってアヘンを没収・処分させた。これに対してイギリスが1840年に軍艦を送って開戦し、近代兵器の前に清は敗れた。\n結果…1842年の南京条約で、香港をイギリスにゆずり、上海など5港を開き、多額の賠償金を払わされた。清は不平等条約におし込まれ、以後、列強の進出を許すことになった。\n日本への影響…大国の清が敗れたことは大きな衝撃で、幕府は1825年の異国船打払令をゆるめ、1842年に薪水給与令を出した。同時に欧米への警戒が強まり、のちの尊王攘夷運動につながった。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_43',
    subject: 'shakai',
    question: '日本の少子高齢化が進む中で、社会保障費が増大する一方、労働力不足が深刻化している。この問題に対する政策的対応策を3つ挙げよ。',
    answer: '例: 女性・高齢者の労働参加促進、外国人労働者・移民の受け入れ拡大、AI・ロボットによる自動化推進、育児支援・保育所整備、年金・医療制度の改革など（3つ）',
    explanation: '少子高齢化が進むと、支えられる高齢者がふえる一方で支える現役世代が減るため、年金・医療・介護などの社会保障費がふくらみ、働き手も足りなくなる。\n対策の例…①女性や高齢者が働き続けられる環境づくり（保育所の整備、育児・介護休業制度、定年の延長）②外国人労働者の受け入れ拡大 ③AI・ロボット・自動化による省人化と生産性の向上。\nほかにも、子育て世帯への経済的支援で出生率を上げる、負担と給付のつり合いを見直す社会保障制度の改革などが挙げられる。\n答えるときは、「働く人をふやす」「1人あたりの生産を高める」「将来の子どもをふやす」という3つの方向から、理由とセットで書けるようにしておくとよい。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_44',
    subject: 'shakai',
    question: '「壬申の乱」（672年）の背景と勝者、その後の政治的意義を答えよ。',
    answer: '天智天皇の死後、皇位継承をめぐる内乱。大海人皇子（後の天武天皇）が大友皇子を倒して勝利。天皇の権威が強化され、律令国家建設が加速した',
    explanation: '668年に即位した天智天皇（中大兄皇子）が671年に亡くなると、あとつぎをめぐって、天皇の弟の大海人皇子と、子の大友皇子が対立した。\n672年、大海人皇子が吉野で兵をあげ、東国の豪族の支持を得て大友皇子を破った。これが壬申の乱で、古代最大の内乱といわれる。\n勝った大海人皇子は翌年、飛鳥浄御原宮で即位して天武天皇となった。\n意義…敗れた側についた有力豪族がおとろえ、天皇の権力がとびぬけて強まった。天武天皇は八色の姓で豪族を天皇中心に位置づけ、律令や歴史書の編さんを進めた。これが大宝律令（701年）や日本書紀へとつながり、天皇中心の律令国家が完成していく。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_45',
    subject: 'shakai',
    question: '「ブレトンウッズ体制」とは何か？また崩壊した年と原因を説明せよ。',
    answer: '第二次大戦後に確立されたドル=金本位制と固定為替相場制度（1944年〜）。1971年のニクソン・ショック（ドルと金の兌換停止）により崩壊し、変動相場制へ移行',
    explanation: 'ブレトンウッズ体制は、1944年にアメリカのブレトンウッズで結ばれた協定にもとづく、第二次世界大戦後の国際的なお金のしくみ。\n金1オンス＝35ドルと決め、各国の通貨はドルとの交換比率を固定した（日本は1ドル＝360円）。これによってドルが世界の基軸通貨となり、貿易がしやすくなった。IMF（国際通貨基金）と世界銀行もこのときつくられた。\nしかしアメリカはベトナム戦争などで支出がふくらみ、持っている金の量に比べてドルを出しすぎた。ドルへの信用が下がり、金と交換したいという要求がふえた。\n1971年、ニクソン大統領がドルと金の交換停止を発表（ニクソン・ショック）して体制はくずれ、1973年から主要国は変動相場制に移った。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_46',
    subject: 'shakai',
    question: '日本の高度経済成長期（1955〜73年頃）における平均経済成長率と、成長を終わらせた出来事は何か？',
    answer: '年平均約10%の実質成長率。1973年の石油危機（オイルショック）により終焉',
    explanation: '1955年ごろから1973年ごろまで、日本経済は年平均約10%という高い実質成長を続けた。これを高度経済成長という。\n技術革新と積極的な設備投資、安い石油、安定した政治、質の高い労働力などが背景にある。1968年には国民総生産（GNP）が、資本主義国でアメリカに次ぐ第2位になった。\n生活も変わり、白黒テレビ・洗濯機・冷蔵庫の「三種の神器」、次いでカー・クーラー・カラーテレビの「3C」が広まった。1964年には東京オリンピックと東海道新幹線。\n一方で、公害や都市の過密・農村の過疎などの問題も生んだ。\n1973年、第四次中東戦争をきっかけに原油価格が急上昇した石油危機（オイルショック）が起こり、物価が急に上がって成長は終わった。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_47',
    subject: 'shakai',
    question: '「緯度1度の距離」は約何kmか？また日本の最東端・最西端・最北端・最南端をそれぞれ答えよ。',
    answer: '約111km。最東端: 南鳥島（東京都）、最西端: 与那国島（沖縄県）、最北端: 択捉島（北海道）、最南端: 沖ノ鳥島（東京都）',
    explanation: '地球の一周は約4万km。緯度は南北方向を360度で表すので、緯度1度分の距離は 40000÷360＝約111km。\n日本の東西南北の端は、最東端が南鳥島（東京都）、最西端が与那国島（沖縄県）、最北端が択捉島（北海道）、最南端が沖ノ鳥島（東京都）。\n南鳥島と沖ノ鳥島はどちらも東京都に属する。沖ノ鳥島は波にけずられて水没しないよう護岸工事がされているが、これは島を失うと広大な排他的経済水域（EEZ）を失ってしまうため。\n択捉島は北方領土の一つで、現在はロシアが実効支配している。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_48',
    subject: 'shakai',
    question: '「モンスーン（季節風）」が東アジアの農業に与える影響を、稲作と麦作の観点から説明せよ。',
    answer: '夏のモンスーンは高温多雨をもたらし稲作に適する。冬のモンスーンは寒冷乾燥で麦作に向く。モンスーンアジアは世界最大の稲作地帯を形成している',
    explanation: 'モンスーン（季節風）は、季節によって向きが逆になる風で、大陸と海のあたたまりやすさのちがいから生まれる。\n夏は大陸があたたまって気圧が下がり、海から大陸へしめった風がふく。高温多雨になるため、たくさんの水を必要とする稲作に適する。\n冬は大陸が冷えて気圧が高くなり、大陸から海へ乾いた冷たい風がふく。寒く乾いた気候は、水が少なくても育つ麦の栽培に向く。\nそのため中国では、降水量の多い南部（長江流域）が稲作、少ない北部（黄河流域）が畑作・麦作という区分ができた（南稲北麦）。\n東アジア・東南アジア・南アジアはモンスーンアジアと呼ばれ、世界の米の約9割を生産する大稲作地帯になっている。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_49',
    subject: 'shakai',
    question: '「西南戦争」（1877年）の原因・経緯・歴史的意義を答えよ。',
    answer: '原因: 明治政府の士族解体・廃刀令など士族の不満が高まり、西郷隆盛が決起。経緯: 西郷率いる薩摩士族軍vs政府の徴兵軍、熊本城攻防戦など。意義: 士族最後の武力反乱で鎮圧後、以後の反政府運動は自由民権運動という言論闘争に移行',
    explanation: '原因…明治政府の改革によって、士族は俸禄（給料）を失い、廃刀令で刀を差すことも禁じられ、徴兵令によって軍人としての役目も失った。特権をうばわれた士族の不満が各地で爆発し、鹿児島では、征韓論をめぐる対立で政府を去っていた西郷隆盛をかつぐ形で高まった。\n経緯…1877年、鹿児島の私学校の生徒らが挙兵し、西郷が総大将となった。熊本城を包囲したが落とせず、田原坂などの激戦で敗れ、約半年で鎮圧された。西郷は鹿児島の城山で自ら命を絶った。\n意義…徴兵制でつくられた近代的な政府軍が、士族の軍を破ったことで、武力による反政府運動は不可能だと示された。以後、政府への反対運動は、板垣退助らの自由民権運動という言論による闘いへ移っていった。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_50',
    subject: 'shakai',
    question: '「比較優位」の原理をリカードの例（イギリスとポルトガルの布・ワイン）を用いて説明し、自由貿易の利点を述べよ。',
    answer: '比較優位: 絶対的に生産性が低い国でも、相対的に得意な財に特化して貿易すれば双方が利益を得られる。例: ポルトガルが両財で優位でも、ワインに特化しイギリスが布に特化すれば総生産量が増える。自由貿易の利点: 各国が比較優位品目に特化することで世界全体の効率が上がる',
    explanation: '比較優位とは、他国と比べて「より得意な方」に力を集中するという考え方で、イギリスの経済学者リカードが唱えた。\n例…ポルトガルが布もワインもイギリスより少ない労働でつくれる（両方で絶対優位を持つ）としても、ポルトガルにとってはワインの方が相対的に得意、イギリスにとっては布の方が相対的にましである。\nそこでポルトガルはワインだけ、イギリスは布だけをつくって交換すると、両国を合わせた生産量はふえ、どちらも前より多く手に入れられる。\n利点…各国が得意分野に特化することで世界全体の生産が効率よくふえ、消費者は安く多くの品を手に入れられる。\n一方で、特定の産業にかたよると不作や価格変動に弱くなる、国内の弱い産業が打撃を受けるといった課題もある。',
    difficulty: 'advanced',
  },

  // ============================================================
  // 英語 (eigo) - 50問
  // ============================================================

  // --- basic (20問) ---
  {
    id: 'eigo_01',
    subject: 'eigo',
    question: '「apple」「dog」「school」「book」「water」の日本語は？',
    answer: 'apple=りんご、dog=犬、school=学校、book=本、water=水',
    explanation: 'apple＝りんご、dog＝犬、school＝学校、book＝本、water＝水。\nつづりのポイントは、apple の p が2つ重なること、school の ch を「チ」ではなく「ク」と読むこと。\nwater は数えられない名詞なので a water とは言わず、量を表すときは a glass of water（コップ1杯の水）のように言う。\napple は母音の音で始まるので an apple、dog・school・book には a をつける。',
    difficulty: 'basic',
  },
  {
    id: 'eigo_02',
    subject: 'eigo',
    question: '英語で1から10まで数えると？',
    answer: 'one, two, three, four, five, six, seven, eight, nine, ten',
    explanation: 'one, two, three, four, five, six, seven, eight, nine, ten。\nつづりでまちがえやすいのは two（w を書き忘れない）、four（u を入れる）、eight（gh を書く）。\nfour は4だが、仲間の forty（40）は u が消えるので注意。\n数を表す語には、個数を表すこの形（基数）と、順番を表す first, second, third…（序数）の2種類がある。',
    difficulty: 'basic',
  },
  {
    id: 'eigo_03',
    subject: 'eigo',
    question: '「おはようございます」「こんにちは」「こんばんは」「おやすみなさい」を英語で言うと？',
    answer: 'Good morning. / Good afternoon. / Good evening. / Good night.',
    explanation: 'Good morning.（朝から正午ごろ）／Good afternoon.（正午から夕方）／Good evening.（夕方以降、人に会ったときのあいさつ）／Good night.（夜に別れるとき・ねる前）。\n気をつけたいのは Good evening と Good night のちがい。夜に会ったときは Good evening、別れるときや寝る前は Good night を使う。\nどれも good（よい）＋時間帯を表す語からできていて、「よい朝を」という意味がもとになっている。\n返すときは同じ言葉をそのままくり返せばよい。',
    difficulty: 'basic',
  },
  {
    id: 'eigo_04',
    subject: 'eigo',
    question: '「ありがとう」「どういたしまして」「ごめんなさい」を英語で言うと？',
    answer: 'Thank you. / You\'re welcome. / I\'m sorry.',
    explanation: 'Thank you.（ありがとう）／You\'re welcome.（どういたしまして）／I\'m sorry.（ごめんなさい）。\nThank you very much. とすると「本当にありがとう」と気持ちが強くなる。\nYou\'re は You are の、I\'m は I am の短縮形なので、アポストロフィ（\')の位置に注意する。\nお礼への返事には Thanks. や No problem. も使える。\nあやまるときの sorry は、人に呼びかけるときの Excuse me. とは使い分ける。',
    difficulty: 'basic',
  },
  {
    id: 'eigo_05',
    subject: 'eigo',
    question: '色：red・blue・green・yellow・white・black・pink・orange をそれぞれ日本語で言うと？',
    answer: '赤・青・緑・黄色・白・黒・ピンク・オレンジ',
    explanation: 'red＝赤、blue＝青、green＝緑、yellow＝黄色、white＝白、black＝黒、pink＝ピンク（桃色）、orange＝オレンジ（だいだい色）。\n色を表す語は形容詞なので、名詞の前に置く（a red apple＝赤いりんご）。\n「何色ですか」は What color is it? とたずね、It is blue. のように答える。\norange は母音の音で始まるので、1個を表すときは an orange となる。',
    difficulty: 'basic',
  },
  {
    id: 'eigo_06',
    subject: 'eigo',
    question: '曜日を英語で月曜日から日曜日まで言うと？',
    answer: 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday',
    explanation: 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday。\n曜日はいつも大文字で書き始めるのがルール。\nつづりの難所は Wednesday（d を忘れやすいので「ウェド・ネス・デイ」と区切って覚える）と Thursday（Tuesday と混同しやすい）。\n「〜曜日に」は on を使い、on Monday（月曜日に）と言う。\n英語のカレンダーでは日曜日（Sunday）から週が始まることが多い。',
    difficulty: 'basic',
  },
  {
    id: 'eigo_07',
    subject: 'eigo',
    question: '月を英語で1月から12月まで言うと？',
    answer: 'January, February, March, April, May, June, July, August, September, October, November, December',
    explanation: 'January, February, March, April, May, June, July, August, September, October, November, December。\n月の名前も必ず大文字で書き始める。\nつづりの難所は February（r が2つ）、August（gu）、September から December までの語尾 -ber。\n「〜月に」は in を使って in April（4月に）、「〜月〜日に」は on を使って on May 5（5月5日に）と言う。\n日付は序数で読む（May 5 は May fifth と読む）。',
    difficulty: 'basic',
  },
  {
    id: 'eigo_08',
    subject: 'eigo',
    question: '「I」「you」「he」「she」「we」「they」「it」を日本語で言うと？',
    answer: '私・あなた・彼・彼女・私たち・彼ら（彼女ら）・それ（物や動物）',
    explanation: 'I＝私、you＝あなた（あなたたち）、he＝彼、she＝彼女、we＝私たち、they＝彼ら・彼女ら・それら、it＝それ（物や動物）。\nこれらは名前のかわりに使う語で、人称代名詞の主格（「〜は・〜が」の形）という。\nyou は「あなた」も「あなたたち」も同じ形。they は人にも物にも使える。\n大切なのは主語によって be動詞が変わること。I→am、he / she / it→is、you / we / they→are と覚える。',
    difficulty: 'basic',
  },
  {
    id: 'eigo_09',
    subject: 'eigo',
    question: '「What is your name?」の意味と答え方は？',
    answer: '「お名前は何ですか？」My name is ○○. または I am ○○. と答える',
    explanation: 'What is your name? は「あなたの名前は何ですか」という意味。What（何）＋is（です）＋your name（あなたの名前）の順に並んでいる。\n答えは My name is Ken. または I\'m Ken. でよい。\n会話では What\'s your name? と短縮することが多い。\nていねいにたずねるときは May I have your name, please? と言う。\n名前を言い合ったあとに Nice to meet you.（はじめまして）と続けるのが自然。',
    difficulty: 'basic',
  },
  {
    id: 'eigo_10',
    subject: 'eigo',
    question: '「How are you?」の意味と一般的な答えは？',
    answer: '「お元気ですか？」I\'m fine, thank you. / I\'m good. などと答える',
    explanation: 'How are you? は「調子はどうですか（お元気ですか）」という意味。How（どのように）＋are you（あなたはある）という形。\n答えは I\'m fine, thank you. And you?（元気です、ありがとう。あなたは？）が定番。ほかに I\'m good. / Pretty good. / Not so good.（あまりよくない）など。\n最後に And you? と聞き返すと会話が続く。\n初対面のかたいあいさつには How do you do? を使うこともある。',
    difficulty: 'basic',
  },
  {
    id: 'eigo_11',
    subject: 'eigo',
    question: '家族を表す英語：「父・母・兄弟・姉妹・祖父・祖母」は？',
    answer: 'father / mother / brother / sister / grandfather / grandmother',
    explanation: 'father＝父、mother＝母、brother＝兄弟、sister＝姉妹、grandfather＝祖父、grandmother＝祖母。\n英語の brother には「兄」と「弟」の区別がないので、はっきりさせたいときは my older brother（兄）、my younger brother（弟）と言う。sister も同じ。\ngrand- は「1つ上の世代」を表し、grandfather＝祖父、great-grandfather＝曽祖父となる。\n親しみをこめた言い方は dad（お父さん）・mom（お母さん）・grandpa・grandma。両親をまとめて parents という。',
    difficulty: 'basic',
  },
  {
    id: 'eigo_12',
    subject: 'eigo',
    question: '動物の英語：「猫・馬・象・うさぎ・牛・羊」は？',
    answer: 'cat / horse / elephant / rabbit / cow / sheep',
    explanation: 'cat＝猫、horse＝馬、elephant＝象、rabbit＝うさぎ、cow＝牛、sheep＝羊。\nつづりの注意は rabbit（b が2つ）と elephant（ph を「フ」と読む）。\nsheep は単数も複数も同じ形で、one sheep / ten sheep と数える（s をつけない）。同じ仲間に fish・deer がある。\ncow はめす牛のことで、おす牛は bull、牛肉は beef と別の語になる。\nelephant は母音の音で始まるので an elephant。',
    difficulty: 'basic',
  },
  {
    id: 'eigo_13',
    subject: 'eigo',
    question: '「Where are you from?」の意味と「日本出身です」という答えは？',
    answer: '「どこの出身ですか？」I am from Japan. と答える',
    explanation: 'Where are you from? は「あなたはどこの出身ですか」という意味。where（どこ）＋be動詞＋主語＋from（〜から）の形。\n答えは I am from Japan.（私は日本出身です）。短くして I\'m from Japan. でもよい。\n国名は必ず大文字で書き始める（Japan, America, China）。\n同じ意味で Where do you come from? とも言える。\n「日本のどこ出身？」とくわしく聞くときは Where in Japan are you from? と言う。',
    difficulty: 'basic',
  },
  {
    id: 'eigo_14',
    subject: 'eigo',
    question: '季節を英語で言うと（春・夏・秋・冬）？',
    answer: 'spring（春）・summer（夏）・autumn / fall（秋）・winter（冬）',
    explanation: 'spring＝春、summer＝夏、autumn または fall＝秋、winter＝冬。\nポイントは秋の言い方が2つあること。イギリス英語では autumn、アメリカ英語では fall を使う。fall には「落ちる」という意味があり、葉が落ちる季節からきている。\n季節名はふつう小文字で書き、「〜に」は in を使う（in summer＝夏に）。\n「いちばん好きな季節は何ですか」は What season do you like the best? とたずねる。',
    difficulty: 'basic',
  },
  {
    id: 'eigo_15',
    subject: 'eigo',
    question: '「big」「small」「fast」「slow」「hot」「cold」「new」「old」の日本語は？',
    answer: '大きい・小さい・速い・遅い・熱い/暑い・冷たい/寒い・新しい・古い/年老いた',
    explanation: 'big＝大きい、small＝小さい、fast＝速い、slow＝遅い、hot＝熱い・暑い、cold＝冷たい・寒い、new＝新しい、old＝古い・年老いた。\nどれも反対の意味のペアになっているので、2つずつ組にして覚えると効率がよい。\nold は物なら「古い」、人なら「年をとった」の意味になり、new の反対にも young の反対にもなる。\nまた fast は速さ（スピード）が「はやい」、early は時刻が「はやい」で、日本語では同じ「はやい」でも英語では別の語になるので注意。',
    difficulty: 'basic',
  },
  {
    id: 'eigo_16',
    subject: 'eigo',
    question: '英語で11〜20を言うと？',
    answer: 'eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty',
    explanation: 'eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty。\n13から19までは「数＋teen」で作るのがルール。ただし three→thirteen、five→fifteen、eight→eighteen はつづりが少し変わる。\n11（eleven）と12（twelve）だけは特別な形なので、そのまま覚えるしかない。\n-teen（13〜19）と -ty（20, 30…）は発音が似ていて聞き分けにくいので、fourteen（14）と forty（40）のちがいに注意。40 は u が入らない。',
    difficulty: 'basic',
  },
  {
    id: 'eigo_17',
    subject: 'eigo',
    question: '「right」「left」「up」「down」「in」「out」の意味は？',
    answer: '右・左・上・下・中に/の中で・外に/の外で',
    explanation: 'right＝右、left＝左、up＝上へ、down＝下へ、in＝中に、out＝外に。\n道案内でよく使う語で、Turn right.（右に曲がって）、Go up the stairs.（階段を上って）のように使う。\nright には「正しい」という意味もあり、That\'s right.（その通り）のようにも使う。どちらの意味かは文の中で判断する。\n位置を表す on（〜の上に接して）・under（〜の下に）とセットで覚えるとよい。',
    difficulty: 'basic',
  },
  {
    id: 'eigo_18',
    subject: 'eigo',
    question: '「Please」「Sorry」「Excuse me」「Yes」「No」「OK」の意味は？',
    answer: 'お願い/どうぞ・ごめんなさい・すみません（呼びかけ）・はい・いいえ・大丈夫/了解',
    explanation: 'Please＝どうぞ・〜してください、Sorry＝ごめんなさい、Excuse me＝すみません（呼びかけ・軽い断り）、Yes＝はい、No＝いいえ、OK＝いいですよ・了解。\n大事なのは Sorry と Excuse me の使い分け。あやまるときは Sorry、人に話しかけたり前を通ったりするときは Excuse me を使う。\nPlease は文の最初か最後につけると、命令文がていねいなお願いになる（Open the door, please.）。\nお礼を言われたら You\'re welcome. と返す。',
    difficulty: 'basic',
  },
  {
    id: 'eigo_19',
    subject: 'eigo',
    question: '「私は学生です」「彼は先生です」「彼女は日本人です」を英語で言うと？',
    answer: 'I am a student. / He is a teacher. / She is Japanese.',
    explanation: 'I am a student.／He is a teacher.／She is Japanese.\n「〜です」を表す be動詞は主語によって形が変わる。I→am、He / She / It→is、You / We / They→are。\n職業を表すときは a をつけて a student, a teacher と言う。数えられる名詞が1つのときは a が必要だから。\n一方 Japanese は「日本人の」という形容詞としても使えるので a はつけない。国名は Japan、「日本人・日本語」は Japanese と使い分ける。\n短縮すると I\'m a student. / He\'s a teacher. / She\'s Japanese. となる。',
    difficulty: 'basic',
  },
  {
    id: 'eigo_20',
    subject: 'eigo',
    question: '体の部位：「頭・目・鼻・口・耳・手・足」を英語で言うと？',
    answer: 'head / eye / nose / mouth / ear / hand / foot (leg)',
    explanation: 'head＝頭、eye＝目、nose＝鼻、mouth＝口、ear＝耳、hand＝手、foot＝足（くるぶしから下）。\nもも から 足首 までをふくむ足全体は leg というので、「足」の言い方は2つあることになる。\n目や耳、手足は2つあるので、ふつうは複数形にして my eyes, my ears, my hands と言う。\n複数形が特別なのは foot→feet、tooth→teeth。\n体の部分を言うときは my, your などをつけるのが英語らしい言い方（Wash your hands.＝手を洗いなさい）。',
    difficulty: 'basic',
  },

  // --- standard (20問) ---
  {
    id: 'eigo_21',
    subject: 'eigo',
    question: '「I play soccer every day.」を日本語に訳すと？',
    answer: '私は毎日サッカーをします。',
    explanation: 'I（私は）＋play（〜をする）＋soccer（サッカーを）＋every day（毎日）で、「私は毎日サッカーをします」。\n英語は「主語→動詞→目的語」の順、日本語は「主語→目的語→動詞」の順なので、うしろから訳し上げると自然な日本語になる。\nevery day（毎日）というくり返しを表す語があるので、習慣を表す現在形が使われている。\n主語が He になると、He plays soccer every day. と動詞に s がつく。',
    difficulty: 'standard',
  },
  {
    id: 'eigo_22',
    subject: 'eigo',
    question: '「Does she like music?」に Yes で答えると？また No の場合は？',
    answer: 'Yes, she does. / No, she doesn\'t.',
    explanation: 'Does she like music? には、Yes, she does. / No, she doesn\'t. と答える。\n疑問文を Does で始めたら答えも does を使う、というのが答え方のルール（Do で聞かれたら do、Is で聞かれたら is）。\n名前をくり返さず she を使うのは、答えでは代名詞にするから。\ndoesn\'t は does not の短縮形。\n×Yes, she likes. とは言わないので注意する。',
    difficulty: 'standard',
  },
  {
    id: 'eigo_23',
    subject: 'eigo',
    question: '「I don\'t have a pen.」を日本語に訳すと？また肯定文に直すと？',
    answer: '私はペンを持っていません。肯定文: I have a pen.',
    explanation: 'I don\'t have a pen. は「私はペンを持っていません」。\ndon\'t は do not の短縮形で、一般動詞の否定文は〈主語＋don\'t[doesn\'t]＋動詞の原形〉で作る。\n否定を表す語を取れば肯定文になるので、I have a pen.（私はペンを持っています）。\n主語が三人称単数（he, she, Ken など）なら doesn\'t を使って He doesn\'t have a pen. となる。このとき動詞は原形の have のままで、has にはしない。',
    difficulty: 'standard',
  },
  {
    id: 'eigo_24',
    subject: 'eigo',
    question: '「a」と「an」の使い分けのルールは？例を2つずつ挙げよ。',
    answer: '次の語の発音が母音（a/e/i/o/u の音）で始まるとき「an」。例: an apple, an egg / a cat, a book',
    explanation: '次に来る語が母音の「音」で始まるときは an、子音の音で始まるときは a を使う。母音とは a, e, i, o, u の音のこと。\n例…an apple（りんご）、an egg（卵）、an hour（1時間）／a cat（ねこ）、a book（本）、a university（大学）。\n大切なのは、つづりではなく発音で決まること。hour は h を読まずに「アワー」と発音するので an、university は「ユ」と読むので a になる。\na / an は「1つの」という意味で、数えられる名詞が1つのときにつける。',
    difficulty: 'standard',
  },
  {
    id: 'eigo_25',
    subject: 'eigo',
    question: '「apple」「child」「man」「woman」「tooth」「foot」の複数形は？',
    answer: 'apples / children / men / women / teeth / feet',
    explanation: 'apples／children／men／women／teeth／feet。\napple は最後に s をつけるだけの規則変化。\nほかの5つは形そのものが変わる不規則変化で、child→children、man→men、woman→women、tooth→teeth、foot→feet となる。\nwomen はつづりの変化が小さいのに、発音が「ウィミン」と大きく変わるので要注意。\nほかに mouse→mice、sheep→sheep（変化なし）も覚えておこう。',
    difficulty: 'standard',
  },
  {
    id: 'eigo_26',
    subject: 'eigo',
    question: '「She is taller than her sister.」を日本語に訳すと？また「the tallest」を使った文に直すと？',
    answer: '彼女は姉（妹）より背が高い。She is the tallest in her family. など',
    explanation: 'She is taller than her sister. は「彼女は姉（妹）より背が高い」。\ntall（高い）に -er をつけると比較級「より高い」になり、than（〜よりも）で比べる相手を示す。\n3つ以上の中でいちばんを表すときは最上級を使い、〈the＋形容詞＋-est〉の形にする。\n例：She is the tallest in her family.（彼女は家族の中でいちばん背が高い）。\n範囲を表すには、場所や集団には in、複数のものには of を使う（the tallest of the three）。最上級には the をつけるのを忘れないこと。',
    difficulty: 'standard',
  },
  {
    id: 'eigo_27',
    subject: 'eigo',
    question: '「I went to Tokyo yesterday.」の went の原形は？また「明日行く」という文に直すと？',
    answer: '原形は go。I will go to Tokyo tomorrow.',
    explanation: 'went は go（行く）の過去形なので、原形は go。go - went - gone と変化する不規則動詞。\n未来のことは〈will＋動詞の原形〉または〈be going to＋動詞の原形〉で表す。\nI will go to Tokyo tomorrow.（私は明日東京へ行きます）。\n時を表す語も yesterday（昨日）から tomorrow（明日）に変えるのがポイント。\nwill を使うときは、主語が何であっても動詞は原形のまま。',
    difficulty: 'standard',
  },
  {
    id: 'eigo_28',
    subject: 'eigo',
    question: '「Can you swim?」に Yes/No で答えると？また Can を使った文の意味は？',
    answer: 'Yes, I can. / No, I can\'t.（cannot）。Can ～ ? は「～できますか？」という能力・許可を尋ねる',
    explanation: 'Can you swim? には Yes, I can. / No, I can\'t. と答える。can で聞かれたら can で答えるのがルール。\ncan\'t は cannot の短縮形で、cannot は1語で書くのがふつう。\ncan は「〜できる」という能力のほかに、Can I use this?（使ってもいいですか）のような許可、Can you help me?（手伝ってくれますか）のような依頼も表す。\ncan のあとの動詞は必ず原形で、主語が三人称単数でも s はつかない（He can swim.）。\nていねいに言うときは Could you 〜? を使う。',
    difficulty: 'standard',
  },
  {
    id: 'eigo_29',
    subject: 'eigo',
    question: '現在進行形（～しています）の作り方は？「She sings a song.」を現在進行形に変えると？',
    answer: 'be動詞（am/is/are）＋動詞のing形。She is singing a song.',
    explanation: '現在進行形は「今〜している最中だ」という意味を表し、〈be動詞（am / is / are）＋動詞のing形〉で作る。\nShe sings a song.（彼女は歌を歌います）→ She is singing a song.（彼女は歌を歌っています）。\n主語が She なので be動詞は is、sing に ing をつけて singing とする。\ning のつけ方には注意が必要で、make→making（e をとる）、run→running（子音を重ねる）、study→studying（そのまま）。\nlike や know のような状態を表す動詞は、ふつう進行形にしない。',
    difficulty: 'standard',
  },
  {
    id: 'eigo_30',
    subject: 'eigo',
    question: '「There are many students in the classroom.」を日本語に訳すと？また「There is」との使い分けは？',
    answer: '教室にはたくさんの生徒がいます。There is は単数、There are は複数のときに使う',
    explanation: 'There are many students in the classroom. は「教室にはたくさんの生徒がいます」。\nThere is / There are 〜 は「〜がある・いる」という存在を表す言い方で、There は「そこに」とは訳さない。\nうしろに来る名詞が単数なら There is、複数なら There are を使う。ここは many students（複数）なので are。\n過去のことなら There was / There were になる。\n疑問文は Are there any students in the classroom? のように be動詞を前に出す。',
    difficulty: 'standard',
  },
  {
    id: 'eigo_31',
    subject: 'eigo',
    question: '「What time is it?」に「3時15分」と答えると？',
    answer: 'It\'s three fifteen. / It\'s a quarter past three.',
    explanation: 'What time is it? は「何時ですか」。答えは It\'s で始めるのがきまりで、この it は「それ」と訳さない。\n3時15分は、数字をそのまま読んで It\'s three fifteen. と言うのがいちばん簡単。\nもう一つの言い方が It\'s a quarter past three.。quarter は「4分の1時間＝15分」、past は「〜を過ぎて」という意味。\n30分なら half past three（3時半）、45分なら a quarter to four（4時15分前）となる。to は「〜前」を表す。',
    difficulty: 'standard',
  },
  {
    id: 'eigo_32',
    subject: 'eigo',
    question: '「How many」と「How much」の使い分けは？例文を1つずつ書け。',
    answer: 'How many: 数えられる名詞（複数形）。How many books do you have? / How much: 数えられない名詞・値段。How much is this bag?',
    explanation: 'How many は数えられる名詞（可算名詞）の複数形の前に置き、「いくつ」と数をたずねる。例：How many books do you have?（何冊本を持っていますか）。\nHow much は数えられない名詞（水・お金・時間など）の量や、値段をたずねる。例：How much is this bag?（このかばんはいくらですか）／How much water do you need?\n見分け方は「1つ、2つと数えられるか」。water, money, milk, sugar などは数えられないので much を使う。\nHow many のあとの名詞は必ず複数形にする、というのもよく問われる。',
    difficulty: 'standard',
  },
  {
    id: 'eigo_33',
    subject: 'eigo',
    question: '「I like cats better than dogs.」を日本語に訳すと？また「最も好きな動物」を表す文に直すと？',
    answer: '私は犬より猫の方が好きです。I like cats the best of all animals.',
    explanation: 'I like cats better than dogs. は「私は犬より猫の方が好きです」。\nlike A better than B で「BよりAの方が好き」という意味になる。better は well / much の比較級。\n「いちばん好き」と言うときは like 〜 the best を使う。\nI like cats the best of all animals.（すべての動物の中で猫がいちばん好きです）。\n範囲を表すとき、all animals のように複数のものには of、in Japan のような場所や集団には in を使う。',
    difficulty: 'standard',
  },
  {
    id: 'eigo_34',
    subject: 'eigo',
    question: '序数詞（順序数）：1st〜5th をフルスペルで言うと？',
    answer: 'first, second, third, fourth, fifth',
    explanation: 'first（1st）, second（2nd）, third（3rd）, fourth（4th）, fifth（5th）。\n順番を表す語を序数といい、4番目からは基本的に「基数＋th」で作る（four→fourth, six→sixth）。\n1〜3は形が大きく変わるので、そのまま覚える。\nつづりが変わるものに注意する。five→fifth（ve が f に変わる）、nine→ninth（e が消える）、twelve→twelfth、twenty→twentieth（y を ie に変える）。\n日付や「〜階」「〜番目」を表すときに使い、ふつう the をつける（the third floor＝3階）。',
    difficulty: 'standard',
  },
  {
    id: 'eigo_35',
    subject: 'eigo',
    question: '「It is raining now.」を日本語に訳すと？また「昨日雨が降っていた」は？',
    answer: '今、雨が降っています。It was raining yesterday.',
    explanation: 'It is raining now. は「今、雨が降っています」。天気を表す it は「それ」と訳さない（時刻・曜日・気温を言うときにも使う）。\nis raining は現在進行形で、今まさに降っている最中であることを表す。\n過去に進行中だったことは be動詞を過去形にして〈was / were＋ing形〉にする。\nIt was raining yesterday.（昨日は雨が降っていました）。\n「雨が降る」は rain 一語で表せるので、It rains a lot in June. のようにも使える。',
    difficulty: 'standard',
  },
  {
    id: 'eigo_36',
    subject: 'eigo',
    question: '「I have been to Kyoto.」を日本語に訳すと？（現在完了形の用法も答えよ）',
    answer: '私は京都に行ったことがあります。（現在完了形の「経験」用法: have/has + 過去分詞）',
    explanation: 'I have been to Kyoto. は「私は京都に行ったことがあります」。\n現在完了形は〈have[has]＋過去分詞〉の形で、過去のできごとが今とつながっていることを表す。ここでは「経験」の用法。\nhave been to 〜 は「〜へ行ったことがある」、have gone to 〜 は「行ってしまって今ここにいない」という意味になるので区別する。\n経験を強調するときは once（1度）、twice（2度）、three times、ever（今までに）、never（1度も〜ない）を使う。\n現在完了形は、yesterday や last year のようなはっきりした過去を表す語といっしょには使えない。',
    difficulty: 'standard',
  },
  {
    id: 'eigo_37',
    subject: 'eigo',
    question: '「She doesn\'t know the answer.」と「Does she know the answer?」の語順のルールを説明せよ。',
    answer: '否定文: does not（doesn\'t）を主語の後・動詞の前に置き、動詞は原形。疑問文: Does を文頭に、主語・動詞の原形の順に並べる',
    explanation: '否定文…〈主語＋do[does] not＋動詞の原形〉で作る。主語が三人称単数（she, he, Ken など）で現在のことなら does not（doesn\'t）を使い、動詞は原形にもどす。She doesn\'t know the answer.（knows ではない）。\n疑問文…〈Does＋主語＋動詞の原形 〜?〉と、does を文の先頭に出す。Does she know the answer?\nどちらも「三人称単数の s は does が引き受けるので、動詞にはつけない」と覚えるとまちがえにくい。\n答えは Yes, she does. / No, she doesn\'t.。\n主語が I, you, we, they なら do / don\'t を使う。',
    difficulty: 'standard',
  },
  {
    id: 'eigo_38',
    subject: 'eigo',
    question: '前置詞：「on（〜の上に）」「in（〜の中に）」「under（〜の下に）」「near（〜の近くに）」「between（〜の間に）」を使った例文を1つずつ書け。',
    answer: 'The book is on the desk. / The cat is in the box. / The ball is under the chair. / The park is near my house. / The bank is between the post office and the school.',
    explanation: '前置詞は名詞の前に置いて、場所や時などを表す語。\non＝接して上に：The book is on the desk.（本は机の上にある）。かべや天井でも、接していれば on を使う。\nin＝囲まれた中に：The cat is in the box.（ねこは箱の中にいる）。\nunder＝真下に：The ball is under the chair.（ボールはいすの下にある）。\nnear＝近くに：The park is near my house.（公園は私の家の近くにある）。\nbetween＝2つの間に：The bank is between the post office and the school.（銀行は郵便局と学校の間にある）。between A and B の形で使い、3つ以上に囲まれた「間」には among を使う。',
    difficulty: 'standard',
  },
  {
    id: 'eigo_39',
    subject: 'eigo',
    question: '「go - went - gone」「eat - ate - eaten」「see - saw - seen」「write - wrote - written」の形の名前と意味は？',
    answer: '不規則動詞の「原形 - 過去形 - 過去分詞形」。行く/食べる/見る/書く',
    explanation: 'これらは動詞の「原形 - 過去形 - 過去分詞」という3つの形の変化を並べたもので、-ed をつけない不規則動詞という。\ngo（行く）- went - gone、eat（食べる）- ate - eaten、see（見る・会う）- saw - seen、write（書く）- wrote - written。\n過去形は過去の文に使い、過去分詞は現在完了形〈have＋過去分詞〉や受動態〈be動詞＋過去分詞〉に使う。\n規則動詞なら play - played - played のように、過去形と過去分詞が同じ形になる。\n不規則動詞は数が多いので、声に出して3つセットで覚えるのが近道。',
    difficulty: 'standard',
  },
  {
    id: 'eigo_40',
    subject: 'eigo',
    question: '「He goes to school by bus.」を日本語に訳すと？また「彼女は自転車で学校に行く」は？',
    answer: '彼はバスで学校に行きます。She goes to school by bike.',
    explanation: 'He goes to school by bus. は「彼はバスで学校に行きます」。\n主語が He（三人称単数）で現在の習慣を表すので、go に es がついて goes になっている。\n交通手段は〈by＋乗り物〉で表し、乗り物には a や the をつけない（by bus, by train, by car, by bike）。\n「歩いて」だけは by を使わず on foot、または walk to school と言う。\n「彼女は自転車で学校に行く」は She goes to school by bike.（by bicycle でもよい）。',
    difficulty: 'standard',
  },

  // --- advanced (10問) ---
  {
    id: 'eigo_41',
    subject: 'eigo',
    question: '次の英文を読み、質問に答えよ。「Tom gets up at seven every morning. He eats breakfast and then walks to school. He studies hard and plays soccer after school.」Tomはどのような1日を過ごしているか日本語で説明せよ。',
    answer: 'トムは毎朝7時に起きて朝食を食べ、歩いて学校に行きます。一生懸命勉強し、放課後はサッカーをしています。',
    explanation: '1文ずつ意味をとると、Tom gets up at seven every morning.（トムは毎朝7時に起きる）、He eats breakfast and then walks to school.（朝食を食べ、それから歩いて学校へ行く）、He studies hard and plays soccer after school.（一生けんめい勉強し、放課後にサッカーをする）。\nまとめると「トムは毎朝7時に起き、朝食をとってから歩いて登校し、しっかり勉強して、放課後はサッカーをして過ごしている」となる。\n読み取りのポイントは、gets, eats, walks, studies, plays と動詞がすべて s のついた現在形であること。これは「毎日くり返している習慣」を表す。\nand then は「そしてそれから」と順序を、after school は「放課後」を表す。',
    difficulty: 'advanced',
  },
  {
    id: 'eigo_42',
    subject: 'eigo',
    question: '受動態（受け身）の作り方を説明し、「Ken wrote this letter.」を受動態に変えよ。',
    answer: '受動態: be動詞＋過去分詞（by ～ で行為者を示す）。This letter was written by Ken.',
    explanation: '受動態（受け身）は「〜される」という意味を表し、〈be動詞＋過去分詞〉で作る。行った人をはっきり示したいときは by 〜 を続ける。\n作り方の手順は、①もとの文の目的語を主語にする ②動詞を〈be動詞＋過去分詞〉にする（be動詞の時制はもとの文に合わせる）③もとの主語を by のあとに置く。\nKen wrote this letter.（ケンがこの手紙を書いた）→ 目的語 this letter を主語にし、過去形 wrote を was written に、Ken を by Ken にする。\nThis letter was written by Ken.\n主語 this letter は単数で過去のことなので be動詞は was。write の過去分詞が written であることもポイント。',
    difficulty: 'advanced',
  },
  {
    id: 'eigo_43',
    subject: 'eigo',
    question: '不定詞（to + 動詞の原形）の3用法（名詞的・副詞的・形容詞的）を説明し、例文を1つずつ挙げよ。',
    answer: '名詞的（〜すること）: I want to play soccer. / 副詞的（〜するために）: I study to pass the exam. / 形容詞的（〜するための）: I have a lot of homework to do.',
    explanation: '不定詞は〈to＋動詞の原形〉の形で、文の中での働きによって3つの用法に分かれる。\n名詞的用法…「〜すること」。主語や目的語になる。I want to play soccer.（サッカーをすることを望む＝したい）。\n副詞的用法…「〜するために」（目的）や「〜して」（原因）。動詞を説明する。I study to pass the exam.（試験に合格するために勉強する）。\n形容詞的用法…「〜するための・〜すべき」。前の名詞をうしろから説明する。I have a lot of homework to do.（するべき宿題がたくさんある）。\n見分け方は、直前に名詞があってそれを説明していれば形容詞的用法、「〜すること」と置きかえられれば名詞的用法、「〜するために」と訳せれば副詞的用法。\nto のあとは必ず動詞の原形にする。',
    difficulty: 'advanced',
  },
  {
    id: 'eigo_44',
    subject: 'eigo',
    question: '次の3文を日本語に訳せ。①「I think that she is kind.」②「It is important to study English.」③「When I was young, I lived in Osaka.」',
    answer: '①私は彼女が優しいと思います。②英語を勉強することは大切です。③若い頃、私は大阪に住んでいました。',
    explanation: '①I think that she is kind.＝「私は彼女が優しいと思います」。この that は「〜ということ」を表す接続詞で、省略することもできる（I think she is kind.）。\n②It is important to study English.＝「英語を勉強することは大切です」。この It は形式的な主語（形式主語）で「それ」とは訳さず、本当の主語は to study English。\n③When I was young, I lived in Osaka.＝「若い頃、私は大阪に住んでいました」。When 〜 は「〜のとき」を表す接続詞で、文の前に置くときはコンマで区切る。\n3つとも、2つの文（節）をつなぐ語の働きを見ぬくことがポイント。',
    difficulty: 'advanced',
  },
  {
    id: 'eigo_45',
    subject: 'eigo',
    question: '関係代名詞 who, which, that の使い分けを説明し、それぞれ例文を書け。',
    answer: 'who: 先行詞が人。The girl who lives next door is kind. / which: 先行詞が物・動物。I have a dog which is very cute. / that: 人・物どちらにも使える。The book that I read was interesting.',
    explanation: '関係代名詞は、2つの文をつなぎ、前の名詞（先行詞）をうしろから説明する働きをする。\nwho…先行詞が人のとき。The girl who lives next door is kind.（となりに住んでいるその女の子は親切だ）。\nwhich…先行詞が物や動物のとき。I have a dog which is very cute.（私はとてもかわいい犬を飼っている）。\nthat…人にも物にも使える万能型。The book that I read was interesting.（私が読んだその本はおもしろかった）。\nうしろに動詞が続けば主格、〈主語＋動詞〉が続けば目的格。目的格の関係代名詞は省略できる（The book I read was interesting.）。\n日本語とちがい、説明が名詞のうしろに来るのが英語の特ちょう。',
    difficulty: 'advanced',
  },
  {
    id: 'eigo_46',
    subject: 'eigo',
    question: '次の英文の誤りを見つけて正しく直せ。①「She don\'t like coffee.」②「He goed to the park yesterday.」③「I have saw this movie before.」',
    answer: '①She doesn\'t like coffee.（三人称単数現在: does not）②He went to the park yesterday.（go の不規則過去形）③I have seen this movie before.（see の過去分詞は seen）',
    explanation: '①She don\'t like coffee. → She doesn\'t like coffee.\n主語 She は三人称単数なので、現在の否定文では do not ではなく does not（doesn\'t）を使う。\n②He goed to the park yesterday. → He went to the park yesterday.\ngo は不規則動詞なので、過去形は goed ではなく went。-ed をつけて過去形にできるのは規則動詞だけ。\n③I have saw this movie before. → I have seen this movie before.\n現在完了形は〈have＋過去分詞〉。see の変化は see - saw - seen なので、過去形の saw ではなく過去分詞の seen を使う。\n3問とも「主語に合った形か」「動詞の変化形が正しいか」を確かめる問題。',
    difficulty: 'advanced',
  },
  {
    id: 'eigo_47',
    subject: 'eigo',
    question: '比較変化の不規則形：good / bad / many（much）/ little の比較級・最上級を答えよ。',
    answer: 'good → better → best / bad → worse → worst / many(much) → more → most / little → less → least',
    explanation: 'good（よい）→ better → best。well（じょうずに・元気で）も同じく better - best と変化する。\nbad（悪い）→ worse → worst。\nmany（数が多い）／much（量が多い）→ more → most。数と量で使い分けるが、比較級・最上級は共通。\nlittle（量が少ない）→ less → least。\nどれも -er / -est をつけない不規則変化なので、そのまま覚えるしかない。最上級には the をつける（the best, the worst）。\n注意…「小さい」の small は規則変化（smaller - smallest）で、little の不規則変化とは別のもの。',
    difficulty: 'advanced',
  },
  {
    id: 'eigo_48',
    subject: 'eigo',
    question: '「What do you want to be in the future?」（将来何になりたいですか）に対し、英語3文以上で答えよ。（解答例）',
    answer: '（例）I want to be a doctor. I want to help sick people and make them healthy. I will study hard every day to achieve my dream.',
    explanation: '質問は「あなたは将来何になりたいですか」という意味。答え方の型は〈I want to be a ＋職業.〉。\n解答例…I want to be a doctor.（医者になりたい）／I want to help sick people and make them healthy.（病気の人を助け、健康にしてあげたい）／I will study hard every day to achieve my dream.（夢をかなえるために毎日一生けんめい勉強します）。\n書き方のコツは、①なりたいもの ②その理由 ③そのために何をするか、の3文構成にすること。\n職業名には a をつけるのを忘れないこと（a doctor, a teacher, an engineer）。理由をつなぐときは because を使ってもよい。',
    difficulty: 'advanced',
  },
  {
    id: 'eigo_49',
    subject: 'eigo',
    question: '仮定法過去（If ＋ 過去形、would ＋ 動詞の原形）を説明し、「もし私が鳥だったら、空を飛べるのに」を英語で言え。',
    answer: '仮定法過去: 現実とは違う仮定を表す。If I were a bird, I could fly in the sky.（were は仮定法では主語にかかわらず were を使う）',
    explanation: '仮定法過去は「もし〜だったら…なのに」と、現実とはちがうことを想像して言う表現。\n形は〈If＋主語＋動詞の過去形, 主語＋would / could / might＋動詞の原形〉。\n現実ではないことを表すために、あえて過去形を使うのが特ちょうで、時間が過去という意味ではない。\nIf I were a bird, I could fly in the sky.（もし私が鳥だったら、空を飛べるのに）。\n最大のポイントは be動詞で、仮定法では主語が I や he でも was ではなく were を使うのが原則。\n「〜できるのに」という意味なので、ここでは would ではなく could を使っている。\nなお、実際に起こりうる話（もし明日雨なら）は仮定法ではなく、If it rains tomorrow, I will stay home. のように現在形で表す。',
    difficulty: 'advanced',
  },
  {
    id: 'eigo_50',
    subject: 'eigo',
    question: '次の会話文の空欄を埋めよ。A: "Excuse me, could you tell me ( ) to get to the station?" B: "Sure! Go straight and ( ) left at the traffic light. It\'s ( ) your right."',
    answer: 'how / turn / on（Excuse me, could you tell me how to get to the station? / Go straight and turn left at the traffic light. It\'s on your right.）',
    explanation: '会話の意味…A「すみません、駅への行き方を教えていただけますか」B「いいですよ。まっすぐ行って、信号を左に曲がってください。右側にありますよ」。\n1つ目…tell me ( ) to get to the station。〈疑問詞＋to＋動詞の原形〉の形で、「〜への行き方」は how to get to 〜 なので how が入る。\n2つ目…Go straight and ( ) left. は道案内の命令文。「左に曲がる」は turn left なので turn。and の前が Go（原形）なので、あとも原形でそろえる。\n3つ目…It\'s ( ) your right.「あなたの右側に」は on your right という決まった言い方なので on。左側なら on your left。\n道案内では Go straight（まっすぐ行く）、turn right / left（右・左に曲がる）、on your right / left（右手・左手に）をセットで覚えておくとよい。',
    difficulty: 'advanced',
  },

  // ============================================================
  // 四谷大塚・日能研レベル 最難関問題（各科目10問）
  // ============================================================

  // ── 算数 最難関10問 ──
  {
    id: 'sansu_yotsuya_01',
    subject: 'sansu',
    question: 'A君は家から学校まで分速70mで歩き、B君は分速90mで歩く。二人が同時に出発したところ、B君が学校についた3分後にA君が到着した。学校までの道のりは何mか？',
    answer: '945m',
    hint: 'A君の時間をt分とすると B君は(t-3)分。70t = 90(t-3) → 20t = 270 → t = 13.5分。70×13.5 = 945m',
    explanation: '分速90mのB君の方が速いので、同じ道のりなら先に着くのはB君で、かかる時間は3分短い。\nA君の時間をt分とすると、道のりは同じなので 70×t＝90×(t−3)。\n70t＝90t−270 → 20t＝270 → t＝13.5分。\n道のり＝70×13.5＝945m。\n★どちらが先に着くかを最初に見きわめるのがコツ。速い方が先に着くので、おそいA君の時間の方が3分長い。',
    difficulty: 'advanced',
  },
  {
    id: 'sansu_yotsuya_02',
    subject: 'sansu',
    question: '1辺12cmの正方形の紙を、図のように縦横3等分して9つの小正方形に分ける。四隅の4つと中央の1つの小正方形を切り取ったとき、残った図形の周りの長さは何cmか？',
    figureDescription: '1辺12cmの正方形を縦横それぞれ3等分し、1辺4cmの小正方形9個に区切った図。四隅の4個と中央の1個（合計5個）に切り取りを表す斜線が入り、残るのは十字形（プラス形）に並ぶ4個の小正方形。',
    answer: '64cm',
    hint: '元の正方形の周=48cm。切り取った5つの正方形(各4cm角)のうち、隅4つは各2辺が外周、内側の切り口が新たに加わる。1つ切り取るごとに+4cm×2辺−4cm=+4cm増える×4隅+中央切り抜き4辺×4=48+16=64cm',
    explanation: '小正方形の1辺は 12÷3＝4cm。\n四すみ4個と中央1個を切りとると、残るのは上・下・左・右の4個で、たがいに角でふれるだけなのでバラバラの4枚になる。\n小正方形1個の周りの長さは 4×4＝16cm。\n16×4＝64cm。',
    difficulty: 'advanced',
  },
  {
    id: 'sansu_yotsuya_03',
    subject: 'sansu',
    question: '食塩水Aは濃度8%で200g、食塩水Bは濃度12%で300gある。AとBを全部混ぜた後、水を100g蒸発させると何%の食塩水になるか？',
    answer: '13%',
    hint: '食塩: 200×0.08 + 300×0.12 = 16 + 36 = 52g。合計500g-100g = 400g。濃度 = 52/400 = 0.13 = 13%',
    explanation: '食塩の重さは 200×0.08＝16g と 300×0.12＝36g で、合わせて52g。\n混ぜた食塩水は 200+300＝500g。水を100g蒸発させると 500−100＝400g（食塩は減らない）。\n52÷400＝0.13 なので13%。',
    difficulty: 'advanced',
  },
  {
    id: 'sansu_yotsuya_04',
    subject: 'sansu',
    question: '3けたの整数のうち、各位の数の和が12になるものは何個あるか？',
    answer: '66個',
    hint: '百の位1〜9、十の位0〜9、一の位0〜9で和が12。組み合わせを地道に数えるか、母関数・星と棒（修正版）で解く。',
    explanation: '百の位a（1〜9）、十の位b、一の位c（0〜9）で a+b+c＝12。百の位で場合分けする。\na＝1: b+c＝11 → (2,9)〜(9,2)の8通り。a＝2: b+c＝10 → 9通り。a＝3: b+c＝9 → 10通り。\na＝4以降は 9, 8, 7, 6, 5, 4通り。\n8+9+10+9+8+7+6+5+4＝66個。',
    difficulty: 'advanced',
  },
  {
    id: 'sansu_yotsuya_05',
    subject: 'sansu',
    question: '周囲の長さが36cmの長方形の面積が最大になるときの縦と横の長さを求めよ。',
    answer: '縦9cm・横9cm（正方形）、面積81㎠',
    hint: '縦をx、横を18−xとすると面積 = x(18-x)。頂点(-b/2a)より x = 9 のとき最大',
    explanation: 'まわりが36cmなので たて＋よこ＝36÷2＝18cm。\nたてをxとすると よこは 18−x、面積は x×(18−x)。\n1×17＝17、5×13＝65、8×10＝80、9×9＝81、10×8＝80 と調べると、たてとよこが等しいときが最大。\nまわりの長さが同じなら正方形のときに面積が最大になり、9cm×9cm で81㎠。',
    difficulty: 'advanced',
  },
  {
    id: 'sansu_yotsuya_06',
    subject: 'sansu',
    question: '1, 2, 3, 4, 5の5枚のカードから3枚選んで3桁の整数を作る。400より大きい整数は何個か？',
    answer: '24個',
    hint: '400より大きいので百の位は4か5。百の位=4のとき: 残り{1,2,3,5}から2枚並べる=4×3=12通り。百の位=5のとき: 残り{1,2,3,4}から2枚=4×3=12通り。合計24個',
    explanation: '400より大きくなるのは、百の位が4か5のとき。\n百の位が4のとき、十の位は残り4枚から4通り、一の位は残り3枚から3通りで 4×3＝12通り。\n百の位が5のときも同じく12通り。\n12+12＝24個。',
    difficulty: 'advanced',
  },
  {
    id: 'sansu_yotsuya_07',
    subject: 'sansu',
    question: '底辺8cm、高さ6cmの三角形ABCがある。辺ABの中点をM、辺ACの中点をNとする。台形MBCNの面積は三角形ABCの面積の何分の何か？',
    answer: '3/4',
    hint: '中点連結定理より△AMN∽△ABCで相似比1:2、面積比1:4。△AMNは△ABCの1/4。台形MBCN = △ABC - △AMN = 1 - 1/4 = 3/4',
    explanation: 'MとNは辺の中点なので、中点連結定理より MN∥BC、MN＝BC÷2。\n△AMNと△ABCは相似で相似比1:2、面積比は 1×1:2×2＝1:4。\nつまり△AMNは△ABCの1/4。\n台形MBCN＝△ABC−△AMN＝1−1/4＝3/4。',
    difficulty: 'advanced',
  },
  {
    id: 'sansu_yotsuya_08',
    subject: 'sansu',
    question: 'ある仕事を終えるのにAは6日、Bは12日かかる。最初2人で一緒に作業し、途中からAが休んでBだけで続けた。全部で8日かかった。Aは何日働いたか？',
    answer: '2日',
    hint: 'A+Bで1日 = 1/6+1/12 = 3/12 = 1/4。Aがx日働いたとき x/4 + (8-x)/12 = 1。3x/12+(8-x)/12=1 → (2x+8)/12=1 → 2x=4 → x=2日',
    explanation: '仕事全体を1とすると、1日にできる量はAが1/6、Bが1/12。\nBは8日間ずっと働いたので 8×1/12＝2/3 を終わらせた。\n残りの 1−2/3＝1/3 をAがやったので、Aが働いた日数は (1/3)÷(1/6)＝2日。',
    difficulty: 'advanced',
  },
  {
    id: 'sansu_yotsuya_09',
    subject: 'sansu',
    question: '正六角形の面積が54√3 ㎠のとき、1辺の長さは何cmか？',
    answer: '6cm',
    hint: '正六角形は正三角形6個。1辺aの正三角形面積=(√3/4)a²。54√3=(√3/4)a²×6 → a² = 54√3×4/(6√3) = 36 → a = 6',
    explanation: '正六角形は、1辺の長さが等しい正三角形6個に分けられる。\n1辺aの正三角形の面積は (√3/4)×a×a なので、正六角形は 6×(√3/4)a²＝(3√3/2)a²。\n(3√3/2)a²＝54√3 → a²＝54×2÷3＝36 → a＝6cm。',
    difficulty: 'advanced',
  },
  {
    id: 'sansu_yotsuya_10',
    subject: 'sansu',
    question: '2桁の整数で、十の位と一の位を入れ替えると元の数より27大きくなる。このような整数を全て答えよ。',
    answer: '14, 25, 36, 47, 58, 69（十の位より一の位が3大きい数）',
    hint: '元の数: 10a+b、入れ替え後: 10b+a。10b+a-(10a+b)=9(b-a)=27 → b-a=3。十の位a=1〜6、一の位b=a+3',
    explanation: '十の位をa、一の位をbとすると、元の数は 10a+b、入れかえた数は 10b+a。\n(10b+a)−(10a+b)＝9×(b−a)＝27 → b−a＝3。\nつまり一の位が十の位より3大きい2桁の数。\nbは9以下なのでaは6まで。14, 25, 36, 47, 58, 69 の6個。',
    difficulty: 'advanced',
  },

  // ── 理科 最難関10問 ──
  {
    id: 'rika_yotsuya_01',
    subject: 'rika',
    question: '光合成の化学反応式を言葉で表せ。また光合成に必要な光エネルギーを吸収する色素の名前を答えよ。',
    answer: '二酸化炭素 + 水 → 有機物（デンプン等）+ 酸素。色素: クロロフィル（葉緑体に含まれる）',
    hint: '植物は葉緑体でCO₂とH₂Oを材料に、光を使ってC₆H₁₂O₆（グルコース）とO₂を作る',
    explanation: '光合成は、二酸化炭素＋水 →（光エネルギー）→ 有機物（デンプンなどの養分）＋酸素、と言葉で表せる。\n式で書くと 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂。\n光を受け取るのは、葉緑体の中にある緑色の色素クロロフィル（葉緑素）で、葉が緑に見えるのはこの色素のため。\nクロロフィルは赤や青の光をよく吸収し、緑の光は吸収せずにはね返すので緑色に見える。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_yotsuya_02',
    subject: 'rika',
    question: '重さ200gのおもりをバネにつるしたとき4cm伸びた。同じバネに500gのおもりをつるすと何cm伸びるか？（フックの法則）',
    answer: '10cm',
    hint: 'フックの法則: 伸びはおもりの重さに比例。200g→4cm、500g→4×(500/200)=10cm',
    explanation: 'フックの法則より、ばねののびはつるしたおもりの重さに比例する。\n200gで4cmのびるので、1gあたりののびは 4÷200＝0.02cm。\n500gでは 0.02×500＝10cm。\n比を使うなら 4×(500÷200)＝4×2.5＝10cm。\n（この比例が成り立つのは、ばねが伸びきらない範囲まで。）',
    difficulty: 'advanced',
  },
  {
    id: 'rika_yotsuya_03',
    subject: 'rika',
    question: '塩酸に亜鉛を入れたとき発生する気体の名前と、その気体の性質を3つ答えよ。',
    answer: '水素（H₂）。①最も軽い気体 ②燃える（可燃性） ③水に溶けにくい',
    hint: 'Zn + 2HCl → ZnCl₂ + H₂↑。水素は水にとけにくいので水上置換法で集める',
    explanation: '塩酸に亜鉛（鉄やアルミニウムでもよい）を入れると水素が発生する。Zn + 2HCl → ZnCl₂ + H₂。\n水素の性質は、①すべての気体の中でいちばん軽い ②火を近づけるとポンと音を立てて燃え、燃えると水ができる ③水にとけにくく、色もにおいもない。\n水にとけにくいので、ふつうは水上置換法で集める（非常に軽いため上方置換法でも集められる）。\n酸素は「ものが燃えるのを助けるが、自分は燃えない」ので、水素とのちがいに注意。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_yotsuya_04',
    subject: 'rika',
    question: '電熱線に6Vの電圧をかけると2Aの電流が流れた。この電熱線の抵抗は何Ωか。また5分間に発生する熱量は何Jか。',
    answer: '抵抗: 3Ω。熱量: 6V×2A×300秒 = 3600J',
    hint: 'オームの法則: R=V/I=6/2=3Ω。電力P=VI=12W。熱量Q=Pt=12×300=3600J',
    explanation: 'オームの法則 抵抗R＝電圧V÷電流I より、R＝6÷2＝3Ω。\n電力P＝電圧×電流＝6×2＝12W。\n5分＝5×60＝300秒。\n熱量Q＝電力×時間＝12×300＝3600J。\n時間を必ず「秒」に直してから計算するのが最大のポイント。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_yotsuya_05',
    subject: 'rika',
    question: '地球が太陽の周りを公転する周期は約365日。地球から見て太陽が星座の間を移動する（黄道上を動く）経路を何というか？またその移動は東向きか西向きか？',
    answer: '黄道（こうどう）。移動の向きは東向き（西から東へ）',
    hint: '地球が太陽の周りを西から東へ公転するため、地球から見ると太陽は星座の間を西から東へ（順行方向に）動いて見える',
    explanation: '地球は太陽のまわりを西から東へ公転している。\nそのため地球から見ると、太陽は星座の間を1年かけて1周するように見え、その通り道を黄道という。\n動く向きは星座に対して西から東（東向き）で、1日に約1度ずつ進む。\n黄道の上に並ぶ12の星座が黄道十二星座。\n太陽が毎日東から西へ動いて見えるのは地球の自転による日周運動で、これとは別のものなので混同しないこと。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_yotsuya_06',
    subject: 'rika',
    question: '物体を水中に沈めたとき、物体にはたらく浮力は何によって決まるか？また100cm³の物体を水中に完全に沈めたとき、浮力は何gf（グラムフォース）か？',
    answer: '物体が押しのけた液体の体積（と液体の密度）によって決まる（アルキメデスの原理）。100cm³の水の重さ = 100g分の浮力 = 100gf',
    hint: '水の密度1g/cm³。100cm³の水の重さ=100g。浮力=押しのけた水の重さ',
    explanation: '浮力は「その物体が押しのけた液体の重さ」と同じ大きさになる（アルキメデスの原理）。\nつまり、物体そのものの重さではなく、液体の中に入っている部分の体積と液体の密度で決まる。\n水の密度は1cm³あたり1gなので、100cm³の物体を完全にしずめると、押しのけた水は 100×1＝100g。\nよって浮力は100gf。\n完全にしずんでいるかぎり、深さを変えても浮力は変わらない。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_yotsuya_07',
    subject: 'rika',
    question: '食塩水を蒸発させると食塩が残る。この操作を何というか？また砂と食塩の混合物から食塩だけを取り出す手順を2ステップで答えよ。',
    answer: '蒸発（じょうはつ）。手順: ①水に溶かしてから砂をろ過で除く ②ろ液を蒸発皿で加熱・蒸発させる',
    hint: '食塩は水に溶けるが砂は溶けない。ろ過→蒸発の2ステップ',
    explanation: '水にとけているものを、水を蒸発させて取り出す操作を蒸発（蒸発乾固）という。\n食塩は水にとけるが、砂はとけない。この性質のちがいを利用する。\n①混合物を水に入れてよくかき混ぜ、食塩だけをとかしてから、ろ紙でろ過して砂を取り除く。\n②ろ液（食塩水）を蒸発皿に入れて弱火で加熱し、水を蒸発させると食塩が残る。\nろ過するときは、液をガラス棒に伝わらせて注ぎ、ろうとの先はビーカーの内側につけるのがきまり。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_yotsuya_08',
    subject: 'rika',
    question: 'ヒトの血液の循環経路で「肺循環」と「体循環」の違いを説明し、静脈血が流れる血管を全て答えよ。',
    answer: '肺循環:右心室→肺動脈→肺→肺静脈→左心房（肺でガス交換）。体循環:左心室→大動脈→全身→大静脈→右心房。静脈血が流れるのは: 肺動脈（右心室→肺）と大静脈（全身→右心房）',
    hint: '静脈血=CO₂が多い血液。肺動脈は心臓から肺へ向かうが静脈血を運ぶ（名前に注意）',
    explanation: '肺循環は 右心室→肺動脈→肺→肺静脈→左心房 で、肺で二酸化炭素を出して酸素を取り入れる短い経路。\n体循環は 左心室→大動脈→全身→大静脈→右心房 で、全身に酸素と養分を届ける長い経路。\n静脈血とは、二酸化炭素が多く酸素が少ない血液のことで、血管の名前ではなく中身で決まる。\n静脈血が流れるのは、大静脈（全身→右心房）、右心房・右心室、そして肺動脈（右心室→肺）。\n肺動脈は「動脈」という名前なのに静脈血が流れる、というところが入試のねらい目。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_yotsuya_09',
    subject: 'rika',
    question: '断層と褶曲（しゅうきょく）の違いを説明し、それぞれが生じる原因を答えよ。',
    answer: '断層: 地層が力を受けてずれる（割れる）こと。褶曲: 地層が力を受けて波状に曲がること。どちらも地下の巨大な力（プレートの動き）が原因',
    hint: '断層→割れてずれる、褶曲→曲がる。日本列島は複数のプレートが重なる地震多発地帯',
    explanation: 'どちらも地層が大きな力を受けて変形したもの。\n断層は、地層が力にたえきれずに割れて、その面に沿って上下や左右にずれたもの。急にずれ動くと地震が起こる。\n褶曲は、地層が長い時間をかけておし曲げられ、波のようにうねったもの。\n原因はどちらも、プレートの動きによって生まれる地下の巨大な力。\n冷たくてかたい岩は割れて断層になり、地下深くで高温になった岩はゆっくり曲がって褶曲になりやすい。今後も動く可能性のある断層を活断層という。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_yotsuya_10',
    subject: 'rika',
    question: 'レンズを通過した光の屈折について、凸レンズに平行光線を当てたとき光が集まる点を何というか？また焦点距離10cmの凸レンズの30cm前に物体を置くと像は何cm後ろにできるか？',
    answer: '焦点（しょうてん）。レンズの公式: 1/v - 1/u = 1/f（または1/a+1/b=1/f）。1/b = 1/10 - 1/30 = 2/30 → b = 15cm後ろ',
    hint: '1/像距離 = 1/焦点距離 - 1/物体距離。1/b=1/10-1/30=3/30-1/30=2/30。b=15cm',
    explanation: '凸レンズの軸に平行な光を当てると、屈折して1点に集まる。この点を焦点といい、レンズの中心から焦点までの距離を焦点距離という。\n像のできる位置はレンズの式 1/a + 1/b＝1/f（a＝物体までの距離、b＝像までの距離、f＝焦点距離）で求める。\n1/b＝1/10 − 1/30＝3/30 − 1/30＝2/30＝1/15。\nb＝15cm。\n物体が焦点距離の2倍（20cm）より遠くにあるので、像はレンズの反対側に、上下左右が逆で実物より小さい実像としてできる。',
    difficulty: 'advanced',
  },

  // ── 社会 最難関10問 ──
  {
    id: 'shakai_yotsuya_01',
    subject: 'shakai',
    question: '日本国憲法の三大原則を答え、それぞれの意味を簡潔に説明せよ。',
    answer: '①国民主権（政治の主役は国民）②基本的人権の尊重（人が生まれながらに持つ権利を守る）③平和主義（戦争を放棄し軍隊を持たない）',
    explanation: '日本国憲法の三大原則は、国民主権・基本的人権の尊重・平和主義。\n①国民主権…国の政治を最終的に決める力（主権）は国民にある。国民は選挙で代表を選び、憲法改正には国民投票が必要。天皇は政治の権限を持たない象徴とされる。\n②基本的人権の尊重…すべての人が生まれながらに持つ権利（平等権・自由権・社会権・参政権・請求権）は、侵すことのできない永久の権利として保障される。\n③平和主義…第9条で、戦争の放棄・戦力の不保持・交戦権の否認を定めている。前文にも平和のうちに生きる権利がうたわれている。\n第二次世界大戦の深い反省から生まれた憲法であることを押さえておこう。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_yotsuya_02',
    subject: 'shakai',
    question: '江戸幕府の三代将軍は誰か？また彼が行った「参勤交代」の制度を説明せよ。',
    answer: '徳川家光（とくがわいえみつ）。参勤交代: 大名が1年おきに江戸と自国を行き来する制度。費用がかかるため大名を経済的に弱体化させ、反乱を防ぐ効果があった',
    explanation: '江戸幕府の3代将軍は徳川家光。家康の孫にあたり、「生まれながらの将軍」と自ら名のった。\n家光は1635年に武家諸法度を改め、参勤交代を制度として定めた。大名は原則1年おきに江戸と領地を行き来し、妻子は江戸に住まわせられた。\n大名行列の旅費や江戸屋敷の費用はすべて大名の負担で、莫大な出費となり、大名は幕府に反抗する力を失った。妻子が江戸にいることは人質の意味も持った。\n家光はほかにも、島原・天草一揆（1637年）ののちに鎖国を完成させ（1639年ポルトガル船来航禁止、1641年オランダ商館を出島へ移す）、幕府の支配を固めた。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_yotsuya_03',
    subject: 'shakai',
    question: '日本の輸出品の変化：明治時代初期の主要輸出品と現代（2020年代）の主要輸出品を比較して答えよ。',
    answer: '明治初期: 生糸（きいと）・お茶が中心（農産物・繊維製品）。現代: 自動車・半導体・機械類が中心（工業製品）',
    hint: '日本の産業構造は農業中心→軽工業→重化学工業→先端技術産業へと変化',
    explanation: '明治時代初期の日本の主な輸出品は生糸と茶。特に生糸は輸出額の3割以上をしめ、外貨をかせぐ柱だった。政府は1872年に群馬県の富岡製糸場をつくって技術を広めた。輸入はおもに綿織物や機械などの工業製品だった。\n現代（2020年代）の主な輸出品は、自動車・半導体等電子部品・鉄鋼・自動車部品・半導体製造装置など、機械類が中心。\nつまり日本は「原料や軽工業品を売って工業製品を買う国」から、「原料や燃料を買って高い技術の工業製品を売る国」へ変わった。これを加工貿易という。\n流れは 農産物・繊維（明治）→軽工業→重化学工業（高度経済成長期）→機械・電子・先端技術（現在）。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_yotsuya_04',
    subject: 'shakai',
    question: '日本で選挙権（投票できる権利）が20歳以上から18歳以上に引き下げられた年はいつか？また衆議院と参議院の定数をそれぞれ答えよ。',
    answer: '2016年（平成28年）。衆議院: 465人、参議院: 248人',
    explanation: '選挙権が20歳以上から18歳以上に引き下げられたのは2016年（改正公職選挙法が同年6月に施行され、7月の参議院議員選挙から適用された）。若い世代の意見を政治に反映させることがねらいだった。\n約70年ぶりの引き下げで、これに合わせて2022年には成年年齢も18歳に引き下げられた。\n定数は、衆議院が465人（小選挙区289人＋比例代表176人）、参議院が248人（選挙区148人＋比例代表100人）。\n立候補できる年齢（被選挙権）は衆議院が25歳以上、参議院が30歳以上で、こちらは18歳ではない点に注意する。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_yotsuya_05',
    subject: 'shakai',
    question: '地図上で等高線が密集している場所と等高線の間隔が広い場所では、それぞれ何を意味するか？また扇状地と三角州の違いを説明せよ。',
    answer: '等高線が密=急斜面、間隔広=緩やかな斜面。扇状地: 川が山から平野に出る所に堆積する扇形の地形（礫・砂が多い）。三角州: 川が海や湖に注ぐ河口付近に堆積する三角形の地形（泥・砂が多い）',
    explanation: '等高線は同じ高さの地点を結んだ線。となり合う線の高さの差は決まっているので、線の間かくがせまい（密集している）ほど、短い水平距離で高さが大きく変わる、つまり急な斜面になる。間かくが広いほどゆるやかな斜面になる。\n扇状地…川が山地から平地に出るところで流れが急にゆるやかになり、運んできた大きめの石や砂がたまってできる扇形の地形。水はけがよいので、果樹園（ぶどう・もも）や畑に利用される。山梨県の甲府盆地が代表例。\n三角州…川が海や湖に注ぐ河口付近で、細かい砂や泥がたまってできる低くて平らな地形。水もちがよいので水田や都市に利用されるが、土地が低いため洪水や高潮に弱い。広島市の太田川河口が代表例。\n「山のふもと＝扇状地・粗い土・果樹園」「河口＝三角州・細かい土・水田や都市」と対にして覚える。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_yotsuya_06',
    subject: 'shakai',
    question: '日本のエネルギー問題について。2011年の東日本大震災以前と以後で、日本のエネルギー政策がどのように変わったか説明せよ。',
    answer: '震災前: 原子力発電を積極推進（低コスト・CO₂少）。震災後: 東京電力福島第一原発事故を受け多くの原発が停止→火力発電に依存、電力不足・電気代上昇。再生可能エネルギー（太陽光・風力）の普及を推進',
    explanation: '震災前…日本は資源が少ないため、発電時に二酸化炭素を出さず発電費用も安いとして、原子力発電を推進していた。電力の約3割を原子力がまかない、さらにふやす計画だった。\n2011年3月の東日本大震災で、東京電力福島第一原子力発電所が津波によって事故を起こした。これを受けて全国の原発が点検・停止し、安全基準が大はばにきびしくなった。\n震災後…不足分を火力発電で補ったため、燃料の輸入がふえて電気代が上がり、二酸化炭素の排出も増加した。\nそこで太陽光・風力などの再生可能エネルギーの導入が進められ（固定価格買取制度）、省エネルギーも重視されるようになった。\n現在は、安全が確認された原発の一部再稼働と、2050年カーボンニュートラルの目標との両立が課題になっている。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_yotsuya_07',
    subject: 'shakai',
    question: '室町時代に応仁の乱（1467年）が起きた原因を説明し、この乱が日本にもたらした最大の影響を答えよ。',
    answer: '原因: 足利将軍家の後継者争い＋有力守護大名（細川氏vs山名氏）の対立が重なった。影響: 約11年の戦乱で京都が荒廃、室町幕府の権力が弱まり戦国時代が始まる',
    explanation: '原因…8代将軍足利義政に子がなく、弟の義視をあとつぎに決めた直後に子の義尚が生まれ、あとつぎ争いが起こった。そこへ、幕府の実力者である細川勝元と山名持豊（宗全）の勢力争い、さらに畠山氏・斯波氏など有力守護大名の家督争いが重なった。\n経緯…1467年、京都を舞台に東軍（細川方）と西軍（山名方）に分かれて戦い、全国の守護大名が加わって約11年続いた。\n影響…京都の町は焼け野原となり、多くの文化財が失われた。将軍と幕府の権威は地に落ち、地方では守護大名にかわって実力ある家臣が主君をたおす下剋上が広まった。ここから約100年続く戦国時代が始まる。\n一方で、戦火をのがれた公家や僧が地方へ移ったことで、京都の文化が全国に広まるという面もあった。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_yotsuya_08',
    subject: 'shakai',
    question: '国連（国際連合）の主要機関を5つ答え、安全保障理事会の常任理事国（5か国）を答えよ。',
    answer: '主要機関: ①総会 ②安全保障理事会 ③経済社会理事会 ④信託統治理事会 ⑤国際司法裁判所（＋事務局）。常任理事国: アメリカ・イギリス・フランス・ロシア・中国（P5）',
    explanation: '国連の主要機関は6つある。\n①総会…全加盟国が1国1票で参加する話し合いの場。\n②安全保障理事会…世界の平和と安全に責任を持ち、制裁や部隊の派遣を決められる。\n③経済社会理事会…経済・社会・文化・保健などの問題をあつかい、専門機関と協力する。\n④信託統治理事会…独立前の地域を管理した機関で、現在は活動を停止している。\n⑤国際司法裁判所…オランダのハーグにあり、国どうしの争いを裁く。\n⑥事務局…事務総長が率いる実務の機関。\n安全保障理事会の常任理事国はアメリカ・イギリス・フランス・ロシア・中国の5か国（P5）で、拒否権を持つ。非常任理事国は総会で選ばれる10か国、任期は2年。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_yotsuya_09',
    subject: 'shakai',
    question: '日本の農業の課題として「食料自給率の低下」がある。日本のカロリーベース食料自給率はおよそ何%か（2020年代）？また自給率が低い主な理由を2つ答えよ。',
    answer: '約38%（カロリーベース）。理由: ①小麦・大豆・飼料穀物の大半を輸入に依存 ②農業従事者の高齢化・農地の減少',
    explanation: '日本のカロリーベースの食料自給率は約38%。\n理由①…主食の米はほぼ自給できるが、小麦・大豆・とうもろこしなどは大部分を輸入している。特に牛・豚・鶏のえさ（飼料）はほとんどが輸入なので、国内で育てた肉や卵・牛乳も自給として計算されにくい。食生活が洋風になり、パン・肉・油の消費がふえたことが背景にある。\n理由②…農業で働く人の高齢化と減少、あとつぎ不足によって耕作放棄地がふえ、農地そのものが減っている。安い輸入品との競争も、国内生産をおさえている。\n食料を安定して確保する（食料安全保障）ため、自給率を上げることが国の目標になっている。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_yotsuya_10',
    subject: 'shakai',
    question: '北方領土について。日本が返還を求めている4つの島の名前と、現在実効支配している国名を答えよ。',
    answer: '4島: 択捉島（エトロフ）・国後島（クナシリ）・色丹島（シコタン）・歯舞群島（ハボマイ）。現在の実効支配国: ロシア連邦（第二次世界大戦終結直前にソ連が占領）',
    explanation: '北方領土は、択捉島・国後島・色丹島・歯舞群島の4島で、北海道の東に位置する。\n日本は、これらは一度も外国の領土になったことがない日本固有の領土だと主張している。\n1945年8月、第二次世界大戦の終戦前後に、ソ連が日ソ中立条約を破って侵攻し占領した。ソ連解体後はロシア連邦が実効支配を続けている。\n1956年の日ソ共同宣言で国交は回復したが、平和条約は今も結ばれておらず、返還交渉が続いている。\nほかに、韓国が不法に占拠している竹島（島根県）、中国が領有を主張している尖閣諸島（沖縄県。日本が有効に支配しており、解決すべき領有権の問題は存在しないというのが日本の立場）と区別して覚える。',
    difficulty: 'advanced',
  },

  // ── 国語 最難関10問 ──
  {
    id: 'kokugo_yotsuya_01',
    subject: 'kokugo',
    question: '次の文の敬語の間違いを直せ。「先生が教室に来られました。私は先生に資料を差し上げ、先生は喜んでいただきました。」',
    answer: '「先生は喜んでいただきました」→「先生はお喜びになりました」。（いただく=謙譲語なので先生に使うのは誤り）',
    explanation: '敬語は「だれの動作か」で決める。\n「先生は喜んで」は先生の動作なので尊敬語にしなければならない。「いただく」は「もらう」の謙譲語で、自分がへりくだる言い方なので先生には使えない。\nそこで「お喜びになりました」（お〜になる＝尊敬語）に直す。\n「来られました」は尊敬語、「差し上げ」は自分の動作なので謙譲語で、どちらも正しい。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_yotsuya_02',
    subject: 'kokugo',
    question: '「起承転結」とは何か説明し、俳句・短歌・詩・小説のうち「起承転結」の構成が最も使われるのはどれか答えよ。',
    answer: '起承転結: 文章・話の構成法。起=話題を起こす、承=発展させる、転=話題を変える・展開する、結=まとめる。最も使われるのは小説（物語）や漢詩',
    explanation: '起承転結は漢詩（絶句）の組み立てからきた四段構成。\n起＝話題を出す、承＝それを受けて広げる、転＝視点や話題を変える、結＝全体をしめくくる。\n俳句や短歌は短すぎてこの四段には分けにくく、まとまった長さの物語（小説）や漢詩で最もよく使われる。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_yotsuya_03',
    subject: 'kokugo',
    question: '夏目漱石の「坊っちゃん」の主人公の特徴を述べ、作品の舞台となった都市はどこか。また漱石の代表作をさらに2作品答えよ。',
    answer: '主人公: 正直で短気、曲がったことが嫌い。舞台: 松山（愛媛県）。代表作: 「吾輩は猫である」「こころ」（他に「三四郎」「それから」など）',
    explanation: '「坊っちゃん」の主人公は、正直で正義感が強く、曲がったことが大きらいな短気な青年。\n数学教師として赴任した先は四国の松山（愛媛県）の中学校で、漱石自身が松山で英語を教えた経験がもとになっている。\n夏目漱石の代表作は「吾輩は猫である」「こころ」のほか、「三四郎」「それから」「門」（前期三部作）など。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_yotsuya_04',
    subject: 'kokugo',
    question: '「推敲（すいこう）」という言葉の由来となった故事を説明せよ。また「蛍雪の功（けいせつのこう）」の意味も答えよ。',
    answer: '推敲: 唐の詩人賈島（かとう）が「僧は推す月下の門」か「僧は敲く月下の門」か迷い、韓愈に相談。転じて文章を何度も練り直すこと。蛍雪の功: 苦労して勉学に励むこと（蛍の光・雪明かりで勉強した故事から）',
    explanation: '唐の詩人 賈島が「僧は推す月下の門」の「推す」を「敲く」にしようか迷い、韓愈に相談して「敲く」に決めた、という故事から。\nそこから、文章の言葉を何度も練り直すことを「推敲する」という。\n「蛍雪の功」は、貧しくて灯油が買えず、蛍の光や雪明かりで勉強して出世したという中国の故事から、苦労して勉学にはげむこと。卒業式の歌「蛍の光」もここから。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_yotsuya_05',
    subject: 'kokugo',
    question: '次の漢字の部首名と、その部首を持つ別の漢字を1つずつ答えよ。①「頭」②「能」③「然」',
    answer: '①頭: 部首「頁（おおがい）」、例: 顔・頂・額など ②能: 部首「月（にくづき）」、例: 脳・肺・腸など ③然: 部首「火（れっか・れんが）」、例: 燃・烈・黒など',
    explanation: '①「頭」の部首は頁（おおがい）で、頭や顔に関係する漢字につく。例：顔・頂・額・題。\n②「能」の部首は月（にくづき）で、体に関係する漢字につくことが多い。例：脳・肺・腸。\n③「然」の部首は灬（れっか・れんが）で、火を表す。例：燃・烈・熱。\n部首の意味が分かると、知らない漢字でも意味を推測しやすくなる。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_yotsuya_06',
    subject: 'kokugo',
    question: '「五七五七七」の形式を持つ詩を何というか？また「五七五」の形式の詩と比べて違う点を2つ述べよ。',
    answer: '短歌（和歌）。俳句との違い: ①文字数（短歌31字、俳句17字） ②俳句には季語が必須だが短歌にはない（必要ない）',
    explanation: '五・七・五・七・七の三十一音（みそひともじ）の形式は短歌（和歌）。五・七・五の十七音は俳句。\nちがいの一つは音数で、短歌31音に対し俳句は17音と短い。\nもう一つは季語で、俳句には季語と切れ字を入れるきまりがあるが、短歌には季語のきまりがない。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_yotsuya_07',
    subject: 'kokugo',
    question: '「喉元過ぎれば熱さを忘れる」「情けは人のためならず」のそれぞれの正しい意味を答えよ。',
    answer: '①喉元過ぎれば熱さを忘れる: 苦しいことも過ぎてしまえばすぐに忘れてしまう。②情けは人のためならず: 人に情けをかけることは、その人のためになるだけでなく、巡り巡って自分の利益になる（人に親切にすれば自分に返ってくる）',
    explanation: '①「喉元過ぎれば熱さを忘れる」…熱いものも飲みこんでしまえば熱さを忘れるように、苦しかったことも過ぎてしまえばけろりと忘れてしまう、という意味。\n②「情けは人のためならず」…「その人のためにならない」という意味ではなく、人にかけた情けはめぐりめぐって自分に返ってくる、という意味。取りちがえやすい代表例なので注意。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_yotsuya_08',
    subject: 'kokugo',
    question: '次の文を文節に区切り、文節の数を答えよ。「私は毎朝6時に起きて学校へ行きます。」',
    answer: '私は／毎朝／6時に／起きて／学校へ／行きます。→ 6文節',
    hint: '「ネ」を入れられるところが文節の区切り。「私はネ、毎朝ネ、6時にネ、起きてネ、学校へネ、行きますネ」',
    explanation: '文節は、意味がこわれない範囲で文をできるだけ短く区切ったまとまり。区切りに「ネ」を入れて自然かどうかで確かめられる。\n私は／毎朝／6時に／起きて／学校へ／行きます。→ 6文節。\n「起きて」を「起き／て」と切らないよう注意（「て」だけでは意味をなさない）。単語に分けると「私・は・毎朝…」となり、文節より細かくなる。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_yotsuya_09',
    subject: 'kokugo',
    question: '「いづれの御時にか、女御・更衣あまたさぶらひ給ひける中に…」これは何という作品の書き出しか？作者と成立時代も答えよ。',
    answer: '「源氏物語（げんじものがたり）」の書き出し。作者: 紫式部（むらさきしきぶ）。成立時代: 平安時代（11世紀初め）',
    explanation: '「いづれの御時にか…」は「源氏物語」の書き出しで、「どの帝の御代のことであったか」という意味。\n作者は紫式部、成立は平安時代（11世紀初め）。\n中宮彰子に仕えた紫式部が書いた全五十四帖の長編物語で、主人公は光源氏。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_yotsuya_10',
    subject: 'kokugo',
    question: '「四面楚歌（しめんそか）」「背水の陣（はいすいのじん）」「臥薪嘗胆（がしんしょうたん）」の意味をそれぞれ答えよ。',
    answer: '四面楚歌: まわりが全て敵で孤立無援の状態。背水の陣: 川を背に陣を張り逃げ場をなくして決死の覚悟で戦うこと。臥薪嘗胆: 敵に敗れた恥を忘れないよう苦労に耐え、復讐の機会を待つこと',
    explanation: '①四面楚歌…漢軍に囲まれた項羽が、四方から故郷 楚の歌が聞こえてきて味方がいないと悟った故事から、まわりが敵ばかりで孤立すること。\n②背水の陣…韓信が川を背に陣をしき、逃げ場をなくして味方を必死に戦わせ勝った故事から、決死の覚悟でのぞむこと。\n③臥薪嘗胆…かたいたきぎの上に寝（臥薪）、苦い肝をなめて（嘗胆）恨みを忘れないようにした呉と越の故事から、目的のために苦労にたえること。',
    difficulty: 'advanced',
  },

  // ============================================================
  // 各科目 追加10問（計30問体制・日替わりMAX問題用）
  // ============================================================

  // ── 算数 追加10問 ──
  {
    id: 'sansu_ex_01',
    subject: 'sansu',
    question: 'A・B二人が同じ地点から反対方向に出発し、池の周り2400mを歩く。Aは分速80m、Bは分速40m。二人が最初に出会うのは何分後か？',
    answer: '20分後（2400÷(80+40)=20分）',
    hint: '向かい合って歩く→相対速度=80+40=120m/分。一周分2400mを相対速度で割る',
    explanation: '反対方向に進むので、2人の間は1分間に 80+40＝120m ずつちぢまる（相対速度）。\n1周分の2400mだけちぢまれば出会うので 2400÷120＝20。\nよって20分後。',
    difficulty: 'advanced',
  },
  {
    id: 'sansu_ex_02',
    subject: 'sansu',
    question: '100円硬貨と500円硬貨が合わせて20枚あり、合計4400円。500円硬貨は何枚か？',
    answer: '6枚（全部100円なら2000円。4400-2000=2400円の差を400円/枚で割ると6枚）',
    hint: '全部100円と仮定→差額÷一枚換算差が枚数',
    explanation: 'つるかめ算。全部100円玉だと仮定すると 100×20＝2000円。\n実際は4400円なので 4400−2000＝2400円 たりない。\n100円玉1枚を500円玉にかえるごとに 500−100＝400円 ふえるので 2400÷400＝6枚。\n500円6枚＝3000円、100円14枚＝1400円 で合計4400円と確かめられる。',
    difficulty: 'advanced',
  },
  {
    id: 'sansu_ex_03',
    subject: 'sansu',
    question: '縦100m・横150mの長方形の土地を同じ大きさの正方形で余りなく分割する。最大の正方形の1辺は何mか？またその正方形は何個できるか？',
    answer: '1辺50m・6個（GCD(100,150)=50。15000÷2500=6個）',
    hint: '最大辺=最大公約数',
    explanation: 'たてもよこもぴったり分けられる正方形の1辺の長さは、100と150の公約数。\nいちばん大きいのは最大公約数の50なので1辺50m。\nたては 100÷50＝2列、よこは 150÷50＝3列 なので 2×3＝6個。',
    difficulty: 'advanced',
  },
  {
    id: 'sansu_ex_04',
    subject: 'sansu',
    question: 'ある数を4で割ると3余り、5で割ると4余る。最小の正の整数を求めよ。',
    answer: '19（4で割ると3余る→その数+1が4の倍数。5で割ると4余る→その数+1が5の倍数。LCM(4,5)=20。20-1=19）',
    hint: 'その数に1を足すと4と5両方の倍数になる',
    explanation: '4で割ると3余る＝あと1あれば4の倍数。5で割ると4余る＝あと1あれば5の倍数。\nつまり「その数+1」が4と5の公倍数になる。\n最小公倍数は20なので その数+1＝20 → その数＝19。\n19÷4＝4余り3、19÷5＝3余り4 で確かめられる。',
    difficulty: 'advanced',
  },
  {
    id: 'sansu_ex_05',
    subject: 'sansu',
    question: '直角三角形の斜辺が13cm・1辺が5cm。残りの辺の長さと面積を求めよ。',
    answer: '残辺12cm（13²-5²=144=12²）・面積30㎠（5×12÷2）',
    hint: '5-12-13はピタゴラス数',
    explanation: '三平方の定理 a²+b²＝c²（cは斜辺）を使う。\n13×13−5×5＝169−25＝144＝12×12 なので、残りの辺は12cm。\n直角をはさむ2辺が5cmと12cmなので 面積＝5×12÷2＝30㎠。\n3:4:5 や 5:12:13 は覚えておくと速い。',
    difficulty: 'advanced',
  },
  {
    id: 'sansu_ex_06',
    subject: 'sansu',
    question: '1から200までの整数のうち3でも5でも割り切れない整数は何個か？',
    answer: '107個（3の倍数66個＋5の倍数40個－15の倍数13個=93個。200-93=107個）',
    hint: '包除原理を使う',
    explanation: '3の倍数は 200÷3＝66個、5の倍数は 200÷5＝40個。\n両方に数えている15の倍数は 200÷15＝13個。\n3か5で割り切れる数は 66+40−13＝93個（包除原理）。\n200−93＝107個。',
    difficulty: 'advanced',
  },
  {
    id: 'sansu_ex_07',
    subject: 'sansu',
    question: '正六角形の面積が54√3㎠のとき、1辺の長さは何cmか？',
    answer: '6cm（正六角形=正三角形6個。1辺aの正三角形面積=√3/4×a²。54√3=6×√3/4×a² → a²=36 → a=6）',
    hint: '正六角形を正三角形6個に分解する',
    explanation: '正六角形は1辺の等しい正三角形6個に分けられる。\n1辺aの正三角形の面積は (√3/4)×a×a なので 6×(√3/4)a²＝(3√3/2)a²。\n(3√3/2)a²＝54√3 → a²＝36 → a＝6cm。',
    difficulty: 'advanced',
  },
  {
    id: 'sansu_ex_08',
    subject: 'sansu',
    question: '上り坂を時速3km・下り坂を時速5kmで歩く。A地点からB地点へ行くのに2時間12分、帰りは2時間36分かかった。行きの上り坂と下り坂はそれぞれ何kmか？',
    answer: '上り3km・下り6km',
    hint: '行きと帰りで上り下りが入れかわる。行き x/3+y/5＝11/5、帰り y/3+x/5＝13/5',
    explanation: '行きの上りをxkm、下りをykmとすると、帰りは上りと下りが入れかわる。\n行き: x/3+y/5＝11/5（2時間12分＝2.2時間）。\n帰り: y/3+x/5＝13/5（2時間36分＝2.6時間）。\n両方を15倍して 5x+3y＝33、3x+5y＝39。\n2式をたすと 8(x+y)＝72 より x+y＝9、引くと 2(x−y)＝−6 より y−x＝3。\nよって x＝3km、y＝6km。\n検算：行き 3÷3+6÷5＝1+1.2＝2.2時間＝2時間12分、帰り 6÷3+3÷5＝2+0.6＝2.6時間＝2時間36分。',
    difficulty: 'advanced',
  },
  {
    id: 'sansu_ex_09',
    subject: 'sansu',
    question: '食塩水A（8%・200g）とB（12%・300g）を混ぜ、100g蒸発させた。濃度は何%か？',
    answer: '13%（食塩52g÷水400g=0.13）',
    hint: '食塩量は変わらない。溶液だけ蒸発',
    explanation: '食塩の重さは 200×0.08＝16g、300×0.12＝36g で合計52g。\n水を蒸発させても食塩は減らず、食塩水だけ 500−100＝400g になる。\n52÷400＝0.13 なので13%。',
    difficulty: 'advanced',
  },
  {
    id: 'sansu_ex_10',
    subject: 'sansu',
    question: '1・2・3・4・5の5枚から3枚選び3桁の整数を作る。400より大きい整数は何個か？',
    answer: '24個（百の位が4→12個・百の位が5→12個）',
    hint: '百の位が4か5のとき400以上になる',
    explanation: '400より大きくなるのは百の位が4か5のとき。\n百の位が4なら、十の位は残り4枚で4通り、一の位は残り3枚で3通り＝12通り。\n百の位が5のときも12通り。\n12+12＝24個。',
    difficulty: 'advanced',
  },

  // ── 理科 追加10問 ──
  {
    id: 'rika_ex_01',
    subject: 'rika',
    question: 'てこの原理。支点から左30cmに200g、右側に300gをつるしてつり合わせる。300gは支点から何cmの位置か？',
    answer: '20cm（200×30=300×x → x=20cm）',
    hint: 'てこの原理: 力×距離（左）=力×距離（右）',
    explanation: 'てこのつり合いは「おもりの重さ×支点からの距離」が左右で等しくなること。\n左は 200×30＝6000。\n右は 300×x＝6000。\nx＝6000÷300＝20cm。\nおもりが重いほど支点に近い位置でつり合う（重さと距離は反比例する）。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_ex_02',
    subject: 'rika',
    question: '動滑車1個で100kgの荷物を持ち上げる。引く力は何kgか？引く距離は荷物の何倍か？',
    answer: '引く力50kg・距離2倍（動滑車は力1/2・距離2倍。仕事量は変わらない）',
    hint: '動滑車は力を半分にするが距離は2倍になる',
    explanation: '動滑車は荷物といっしょに動く滑車で、荷物を2本のひもで支えるため、必要な力は半分になる。\n100÷2＝50kg分の力で引けばよい。\nそのかわり、荷物を1m持ち上げるにはひもを2m引かなければならず、引く距離は2倍になる。\n力×距離（＝仕事）は変わらないので、道具を使っても得はしない。これを仕事の原理という。\n定滑車は力の向きを変えるだけで、力の大きさも距離も変わらない。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_ex_03',
    subject: 'rika',
    question: '直列回路で3Ωと6Ωに12Vをかけた。回路全体の電流と各抵抗の電圧を求めよ。',
    answer: '合成9Ω・電流4/3A≒1.33A。3Ω→4V・6Ω→8V',
    hint: '直列合成抵抗=R1+R2。各電圧V=IR',
    explanation: '直列つなぎなので、合成抵抗は 3+6＝9Ω。\n回路全体を流れる電流はオームの法則より I＝V÷R＝12÷9＝4/3A≒1.33A。\n直列では電流はどこでも同じなので、それぞれの抵抗にも4/3Aが流れる。\n3Ωにかかる電圧は 3×4/3＝4V、6Ωにかかる電圧は 6×4/3＝8V。\n4+8＝12V となり電源の電圧と一致するので、計算が正しいと確かめられる。抵抗が大きいほど大きな電圧がかかる。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_ex_04',
    subject: 'rika',
    question: '被子植物と裸子植物の違いを2点、単子葉類と双子葉類の違いを2点挙げよ。',
    answer: '被子/裸子: ①種子が子房に包まれる（裸子は露出）②花弁がある（裸子はない）。単子/双子: ①葉脈（単子=平行・双子=網目）②根の形（単子=ひげ根・双子=主根＋側根）',
    explanation: '被子植物と裸子植物のちがい…①被子植物は胚珠が子房に包まれ、受粉後に子房が果実になる。裸子植物は子房がなく胚珠がむき出しなので果実ができない。②被子植物には花弁やがくのある目立つ花がさくが、裸子植物にはなく地味な花（マツの花など）になる。\n単子葉類と双子葉類のちがい…①葉脈は単子葉類が平行脈、双子葉類が網状脈。②根は単子葉類がひげ根、双子葉類が主根と側根。\n名前の由来は、芽ばえのときの子葉が1枚か2枚か。\n茎の維管束も、単子葉類は散らばり、双子葉類は輪のように並ぶ。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_ex_05',
    subject: 'rika',
    question: '消化液とその働き。だ液・胃液・すい液・胆汁が分解する栄養素を答えよ。',
    answer: 'だ液: デンプン（アミラーゼ）。胃液: タンパク質（ペプシン）。すい液: デンプン・タンパク質・脂肪すべて。胆汁: 脂肪を乳化（酵素なし）',
    explanation: 'だ液…アミラーゼがデンプンを麦芽糖に分解する。\n胃液…ペプシンが（強い酸性の中で）タンパク質を分解する。\nすい液…アミラーゼ・トリプシン・リパーゼをふくみ、デンプン・タンパク質・脂肪という三大栄養素のすべてを分解できる万能の消化液。\n胆汁…肝臓でつくられ胆のうにたくわえられる。消化酵素はふくまないが、脂肪を細かい粒にする（乳化する）ことでリパーゼがはたらきやすくする。\n最終的に、デンプンはブドウ糖、タンパク質はアミノ酸、脂肪は脂肪酸とモノグリセリドになり、小腸の柔毛から吸収される。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_ex_06',
    subject: 'rika',
    question: '酸・アルカリ指示薬の変色。リトマス紙・BTB液・フェノールフタレインをそれぞれ答えよ。',
    answer: 'リトマス: 酸→青が赤、アルカリ→赤が青。BTB: 酸→黄・中→緑・アルカリ→青。フェノールフタレイン: アルカリのみ赤紫（他は無色）',
    explanation: 'リトマス紙…酸性では青色リトマス紙が赤に変わり、アルカリ性では赤色リトマス紙が青に変わる。中性では変化しない。\nBTB溶液…酸性で黄色、中性で緑色、アルカリ性で青色。\nフェノールフタレイン溶液…アルカリ性のときだけ赤（赤むらさき）色になり、酸性・中性では無色のまま。\nつまり、3つの液性を1本で見分けたいときはBTB、アルカリ性だけを確かめたいときはフェノールフタレインが便利。\nムラサキキャベツ液は、酸性で赤、中性でむらさき、アルカリ性で緑〜黄色に変化する。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_ex_07',
    subject: 'rika',
    question: '低気圧と高気圧の空気の流れを説明し、日本付近で低気圧が近づくと天気がどう変わるか答えよ。',
    answer: '低気圧: 中心へ風が吹き込み上昇気流→雲・雨。高気圧: 中心から外へ吹き出し下降気流→晴れ。低気圧が近づくと雲がふえて雨になり、温暖前線通過で弱い雨が長く続いて気温上昇、寒冷前線通過で強いにわか雨がふり気温が急降下。通過後は高気圧におおわれて晴れる',
    explanation: '低気圧はまわりより気圧が低いので、風が中心へ向かってふきこみ（北半球では反時計回り）、行き場をなくした空気が上へ動いて上昇気流になる。\n上昇した空気は冷えて水蒸気が水てきに変わるため、雲ができて雨がふりやすい。\n高気圧は中心から外へ風がふき出し（北半球では時計回り）、上から下への下降気流が起こる。空気は下りるとあたたまって雲が消えるので晴れる。\n日本付近では上空の偏西風のため、天気は西から東へ移り変わる。\n低気圧が近づくと、まず雲がふえて雨になる。温暖前線が通ると弱い雨が長く続いて気温が上がり、寒冷前線が通ると短時間に強いにわか雨がふって気温が急に下がり、風向きも変わる。低気圧が通り過ぎると高気圧におおわれて晴れる。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_ex_08',
    subject: 'rika',
    question: '地球の自転によって起こる現象を2つ、地軸の傾きによって起こる現象を1つ答えよ。',
    answer: '自転: ①昼と夜の繰り返し②太陽・星が東から西へ動く（日周運動）。傾き: 季節の変化（夏冬の気温差・昼夜の長さの変化）',
    explanation: '自転は、地球が1日に1回、西から東へ自分で回ること。そのため①昼と夜がくり返される ②太陽・月・星が東からのぼって西へしずむように見える（日周運動）。ほかに、地域ごとに時差が生まれるのも自転による。\n地軸は、公転面に立てた垂線に対して約23.4度かたむいている。このかたむきによって、季節ごとに太陽の高さと昼の長さが変わり、四季（気温の変化）が生まれる。\nもし地軸がかたむいていなければ、公転していても季節の変化は起こらない。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_ex_09',
    subject: 'rika',
    question: '音の速さは空気中で約何m/sか？雷の光から3秒後に音が聞こえた場合の距離を答えよ。また音が「高い」「大きい」とは波形でどう変化するか？',
    answer: '約340m/s。距離=340×3=1020m。高い音=振動数が多い（波長が短い）。大きい音=振幅が大きい',
    explanation: '音が空気中を伝わる速さは約340m/秒。\nかみなりは、光は一瞬で届くのに音は遅れて届くので、光ってから音が聞こえるまでの時間で距離がわかる。\n340×3＝1020m 先。\n音の高さは1秒間に振動する回数（振動数）で決まり、振動数が多い（波の間かくがせまい）ほど高い音になる。\n音の大きさは振動のはば（振幅）で決まり、振幅が大きいほど大きい音になる。\n弦は「細い・短い・強く張る」ほど高い音が出る。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_ex_10',
    subject: 'rika',
    question: '水100gに砂糖20gを溶かした砂糖水の濃度は何%か？また50℃で砂糖が260g溶ける飽和水溶液の濃度は？',
    answer: '20/(100+20)×100≒16.7%。飽和: 260/(100+260)×100≒72.2%',
    hint: '濃度(%)=溶質÷(溶質+溶媒)×100',
    explanation: '濃度(%)＝とけているものの重さ÷水溶液全体の重さ×100。\n水100g＋砂糖20g なので、水溶液全体は120g。\n20÷120×100＝16.66…≒16.7%。\n飽和水溶液は 水100g＋砂糖260g＝360g なので、260÷360×100＝72.22…≒72.2%。\n分母を「水の重さ」ではなく「水＋とかしたものの重さ」にするのが、まちがえやすい最大のポイント。',
    difficulty: 'advanced',
  },

  // ── 社会 追加10問 ──
  {
    id: 'shakai_ex_01',
    subject: 'shakai',
    question: '明治維新の三大改革を答えよ。また「版籍奉還」と「廃藩置県」それぞれの意味を説明せよ。',
    answer: '三大改革: ①学制②徴兵令③地租改正。版籍奉還: 藩主が土地と人民を天皇に返上。廃藩置県: 藩を廃止し県を置いて中央集権化',
    explanation: '明治政府は富国強兵をめざし、三大改革を行った。\n①学制（1872年）…6歳以上の男女すべてを小学校に通わせる制度。国民の教育水準を上げるためだったが、授業料の負担や働き手をとられることから反対一揆も起きた。\n②徴兵令（1873年）…満20歳以上の男子に兵役を義務づけ、武士だけの軍隊から国民の軍隊へ変えた。\n③地租改正（1873年）…土地の所有者に地券を発行し、地価の3%を現金で納めさせた。米の出来高に左右されない安定した税収を得るためで、反対一揆が起きたのち2.5%に引き下げられた。\n版籍奉還（1869年）…大名（藩主）が土地（版）と人民（籍）を天皇に返した。ただし元の藩主がそのまま知藩事になったため、実質はあまり変わらなかった。\n廃藩置県（1871年）…藩そのものを廃止して県を置き、政府が任命した県令（知事）を送った。これによって中央集権が実現した。\n「まず名目だけ返させ（版籍奉還）、次に藩そのものをなくした（廃藩置県）」という順番が大切。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_ex_02',
    subject: 'shakai',
    question: '日本の面積最大・最小の都道府県と人口最多・最少の都道府県を答えよ。',
    answer: '面積最大: 北海道・最小: 香川県。人口最多: 東京都・最少: 鳥取県',
    explanation: '面積が最大なのは北海道（約8.3万km²）で、日本の国土の約2割をしめる。最小は香川県（約1877km²）。\n人口が最も多いのは東京都（約1400万人）で、政治・経済・文化が集中している。最も少ないのは鳥取県（約54万人）。\n人口密度が最も高いのも東京都、最も低いのは北海道。\n人口の2位以下は神奈川県・大阪府・愛知県と続き、大都市圏に人口が集中する一方、地方では過疎化が進んでいる。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_ex_03',
    subject: 'shakai',
    question: '三権分立の仕組みを説明し、立法・行政・司法それぞれの相互チェック機能を具体的に答えよ。',
    answer: '立法(国会)・行政(内閣)・司法(裁判所)が互いを抑制。国会→内閣不信任決議。内閣→衆議院解散。裁判所→違憲立法審査権',
    explanation: '三権分立は、国の権力を立法（国会）・行政（内閣）・司法（裁判所）の3つに分け、たがいに行きすぎをおさえ合うしくみ。権力の集中による独裁をふせぎ、国民の自由と権利を守るのが目的で、モンテスキューが唱えた。\n国会→内閣…内閣不信任決議を出せる。内閣総理大臣を指名する。\n内閣→国会…衆議院を解散できる。\n裁判所→国会・内閣…法律や政治の行いが憲法に違反していないかを判断する違憲審査権を持つ（最高裁判所は「憲法の番人」と呼ばれる）。\n内閣→裁判所…最高裁判所長官を指名し、その他の裁判官を任命する。\n国会→裁判所…ふさわしくない裁判官をやめさせるかどうかを決める弾劾裁判所を設ける。\n国民は、選挙（国会）・世論（内閣）・国民審査（最高裁判所裁判官）を通して三権に関わる。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_ex_04',
    subject: 'shakai',
    question: '日本の四大工業地帯・地域を挙げ、それぞれの主要産業を答えよ。',
    answer: '①京浜(東京・横浜): 印刷・機械②中京(名古屋): 自動車・日本最大の生産額③阪神(大阪・神戸): 鉄鋼・化学④北九州: 鉄鋼・化学（官営八幡製鉄所発祥）',
    explanation: '①京浜工業地帯（東京都・神奈川県）…情報が集まる首都にあるため出版・印刷業の割合が高く、機械工業もさかん。かつて生産額日本一だったが、地価の高さや用地不足で工場が地方へ移り、現在は順位を下げた。\n②中京工業地帯（愛知県・三重県北部）…豊田市の自動車工業を中心に機械工業の割合が約7割と高く、生産額は日本最大。四日市には石油化学コンビナートがある。\n③阪神工業地帯（大阪府・兵庫県）…鉄鋼・石油化学など金属・化学工業の割合が高く、中小工場が多いのが特ちょう。\n④北九州工業地域（福岡県）…1901年に操業を始めた官営八幡製鉄所が出発点。近くの筑豊炭田の石炭と中国からの鉄鉱石を利用して鉄鋼業が発達したが、エネルギーが石炭から石油に変わったこと（エネルギー革命）などで地位が低下し、現在は「地帯」ではなく「地域」と呼ばれることが多い。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_ex_05',
    subject: 'shakai',
    question: '江戸時代の身分制度（士農工商）について、各身分の役割と人口比率を答えよ。',
    answer: '士(武士)約7%: 行政・軍事。農(農民)約80%: 年貢・主要身分。工(職人): 製品製造。商(商人): 物品売買。穢多・非人という差別身分も存在',
    explanation: '江戸時代は身分が固定され、武士・百姓・町人（職人・商人）に大きく分けられた。\n武士（約7%）…名字を名のり刀を差すことを許された支配身分で、政治や軍事を担当し、年貢によって生活した。\n百姓（約80%以上）…人口の大部分をしめ、米などの年貢を納めて幕府や藩の財政を支えた。五人組をつくらせ、年貢の納入や犯罪防止に連帯責任を負わせた。\n職人…大工や鍛冶屋など、ものをつくる仕事をした人々。\n商人…物を売り買いする仕事をした人々。年貢の負担がなく、経済力をつけていった。\nこのほか、えた・ひにんと呼ばれてきびしく差別された身分の人々がいた。住む場所や仕事、服装まで制限されたが、皮革業や芸能など社会に必要な仕事を担っていた。1871年の解放令で身分としては廃止されたが差別は長く残り、現在も部落差別の問題として人権教育の課題になっている。\nなお「士農工商」は身分の上下の順を表すものではない、というのが近年の研究の考え方。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_ex_06',
    subject: 'shakai',
    question: '日本の6つの気候区分を全て挙げ、それぞれの特色を答えよ。',
    answer: '①北海道型: 冷帯・梅雨なし②日本海側: 冬大雪・夏晴れ③太平洋側: 夏多雨・冬乾燥④内陸(中央高地): 寒暖差大・少雨⑤瀬戸内: 温暖・少雨⑥南西諸島: 亜熱帯・多雨',
    explanation: '日本は南北に長く、背骨のように山地が連なるため、気候が地域によって大きく異なる。\n①北海道の気候…冷帯（亜寒帯）で冬の寒さがきびしく、梅雨がなく台風の影響も小さい。年間降水量は少なめ。\n②日本海側の気候…冬に北西の季節風が日本海の水蒸気をふくんで山地にぶつかり、大雪をふらせる。冬の降水量が多い。\n③太平洋側の気候…夏に南東の季節風と梅雨・台風の影響で雨が多く、冬は乾いた晴れの日が続く。\n④内陸（中央高地）の気候…海から遠いため、夏と冬・昼と夜の気温差が大きい。1年を通して降水量が少ない。\n⑤瀬戸内の気候…中国山地と四国山地に季節風がさえぎられ、1年中降水量が少なく温暖。水不足に備えてため池（香川県の満濃池など）が多い。\n⑥南西諸島の気候…亜熱帯で1年中あたたかく降水量が多い。台風の通り道になりやすい。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_ex_07',
    subject: 'shakai',
    question: '国連の主な専門機関5つを挙げ、各役割を答えよ。',
    answer: '①WHO(保健)②UNESCO(教育・文化)③UNICEF(子ども)④ILO(労働)⑤FAO(食糧農業)',
    explanation: '国連には、専門の分野を受け持つ機関が置かれている。\n①WHO（世界保健機関）…感染症対策や医療水準の向上など、世界の人々の健康を守る。本部はジュネーブ。\n②UNESCO（国連教育科学文化機関）…教育・科学・文化を通じて平和をきずく。世界遺産の登録を行う。本部はパリ。\n③UNICEF（国連児童基金）…発展途上国の子どもたちに食料・医薬品・教育を届ける。\n④ILO（国際労働機関）…働く人の権利や労働条件の改善を進める。\n⑤FAO（国連食糧農業機関）…食料生産や農業の改善を進め、飢餓をなくすことをめざす。\nほかにIMF（国際通貨基金）やUNHCR（国連難民高等弁務官事務所）なども重要。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_ex_08',
    subject: 'shakai',
    question: '日本の少子高齢化について。2020年代の合計特殊出生率は？高齢化が社会保障費と現役世代に与える影響は？',
    answer: '出生率約1.2〜1.3。影響: 年金・医療・介護費が増大し現役世代1人あたりの負担増。2050年頃に高齢者1人を約1.2人の現役世代が支える試算',
    explanation: '合計特殊出生率は、1人の女性が一生の間に産む子どもの数の平均。近年の日本は約1.2〜1.3で、人口を保つのに必要な約2.07を大きく下回っている。\n未婚化・晩婚化、子育てや教育にかかる費用の高さ、仕事と育児の両立のむずかしさなどが背景にある。\n一方で平均寿命がのび、65歳以上の高齢者の割合は約29%に達し、世界でも高い水準の超高齢社会になっている。\n影響…年金・医療・介護といった社会保障の給付がふえる一方、保険料や税を負担する現役世代（15〜64歳）は減るので、1人あたりの負担が重くなる。かつて大勢で1人を支える胴上げ型だった支え方は騎馬戦型を経て、2050年ごろには高齢者1人を現役世代約1.2人で支える肩車型になると試算されている。\n労働力不足による経済の縮小も心配され、働き方改革・外国人材の受け入れ・AIの活用などが進められている。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_ex_09',
    subject: 'shakai',
    question: '第二次世界大戦終結後の日本の主要な出来事を時系列で5つ挙げよ。',
    answer: '①1945年終戦・GHQ占領②1951年サンフランシスコ講和条約（独立回復）③1956年国連加盟④1964年東京オリンピック・東海道新幹線⑤1972年沖縄返還',
    explanation: '①1945年…8月にポツダム宣言を受け入れて終戦。GHQ（連合国軍総司令部・マッカーサー）の占領下で、財閥解体・農地改革・女性の参政権など民主化が進められた。\n②1951年…サンフランシスコ平和条約を結び、翌1952年に独立を回復した。同時に日米安全保障条約も結んだ。\n③1956年…日ソ共同宣言でソ連と国交を回復し、ソ連の反対がなくなったことで国際連合に加盟できた。\n④1964年…東京オリンピックが開かれ、開幕に合わせて東海道新幹線（東京—新大阪）が開通した。高度経済成長の象徴となった。\n⑤1972年…沖縄がアメリカから返還された。同じ年、日中共同声明によって中国との国交も正常化した。\n「占領→独立→国際社会への復帰→経済成長→領土の回復」という流れで押さえるとよい。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_ex_10',
    subject: 'shakai',
    question: '現在の日本のエネルギー問題。2011年以降のエネルギー政策の変化と課題を説明せよ。',
    answer: '2011年福島第一原発事故を受け多くの原発停止→火力発電依存・CO2増加・電気代上昇。再生可能エネルギー普及を推進中。エネルギー安全保障とカーボンニュートラルの両立が課題',
    explanation: '2011年3月の東日本大震災による福島第一原子力発電所の事故を受け、全国の原発が停止し、新しい規制基準のもとできびしい安全審査が行われるようになった。\n変化…不足した電力を火力発電で補ったため、化石燃料（液化天然ガス・石炭・石油）の輸入がふえ、燃料費の高騰で電気料金が上がり、二酸化炭素の排出も増加した。同時に、固定価格買取制度によって太陽光を中心に再生可能エネルギーが急速に広まった。\n課題…①エネルギー安全保障…日本のエネルギー自給率は1割ほどしかなく、輸入が止まると危険。輸入先も中東にかたよっている。②地球温暖化対策…2050年カーボンニュートラル（温室効果ガスの排出を実質ゼロにする目標）を達成するには、火力への依存を減らす必要がある。③再生可能エネルギーは天候に左右されて発電量が不安定で、コストや送電網の整備も課題。④原子力は安全性の確保と、使用済み核燃料の処分方法という問題が残る。\n安定供給・経済性・環境・安全の4つをどう両立させるかが問われている。',
    difficulty: 'advanced',
  },

  // ── 国語 追加10問 ──
  {
    id: 'kokugo_ex_01',
    subject: 'kokugo',
    question: '次の慣用句の意味を答えよ。①目から鱗が落ちる②耳を傾ける③口が軽い④鼻が高い⑤腹を割る',
    answer: '①突然真実を理解できる②熱心に聞く③秘密をすぐしゃべる④自慢に思う⑤本音で話す',
    explanation: 'どれも体の一部を使った慣用句。\n①目から鱗が落ちる…見えていなかったことが急に分かる（新約聖書に由来）。②耳を傾ける…注意して熱心に聞く。\n③口が軽い…すぐしゃべってしまう（反対は「口が堅い」）。④鼻が高い…誇らしい。⑤腹を割る…かくさず本音で話す。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_ex_02',
    subject: 'kokugo',
    question: '漢字の成り立ち4種類（象形・指事・会意・形声）を説明し例を1つずつ挙げよ。',
    answer: '①象形: 物の形をかたどる（山・川）②指事: 概念を記号で（上・下）③会意: 複数の漢字を組合せ（森=木+木+木）④形声: 音と意味（語=言+吾）',
    explanation: '①象形…目に見える物の形をかたどった字（山・川・日・月）。\n②指事…形にできない事がらを印で表した字（上・下・一・本）。\n③会意…意味を持つ字を組み合わせた字（森＝木3つ、明＝日+月）。\n④形声…意味を表す部分と音を表す部分の組み合わせ（語＝言（意味）+吾（ゴという音））。漢字の8割以上が形声文字。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_ex_03',
    subject: 'kokugo',
    question: '三大随筆の作者・時代・冒頭の一文をそれぞれ答えよ（枕草子・方丈記・徒然草）。',
    answer: '枕草子: 清少納言・平安・「春はあけぼの」。方丈記: 鴨長明・鎌倉・「ゆく河の流れは絶えずして」。徒然草: 吉田兼好・鎌倉〜南北朝・「つれづれなるままに」',
    explanation: '枕草子…清少納言・平安時代・「春はあけぼの」。\n方丈記…鴨長明・鎌倉時代・「ゆく河の流れは絶えずして」。\n徒然草…兼好法師・鎌倉時代末〜南北朝・「つれづれなるままに」。\n書き出しの一文と、作者・時代をセットで覚えると入試で強い。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_ex_04',
    subject: 'kokugo',
    question: '芥川龍之介「羅生門」のあらすじと主題を答えよ。また芥川が残した「ぼんやりした不安」とは何を指すか。',
    answer: 'あらすじ: 仕事を失った下人が羅生門で老婆に出会い、生きるための悪事を正当化し老婆の着物を奪う。主題: 人間のエゴイズム。「ぼんやりした不安」は自殺遺書で記した近代社会への不安',
    explanation: '芥川龍之介「羅生門」は、今昔物語集の話を題材にした短編。\n職を失った下人が羅生門の楼上で、死人の髪を抜く老婆に出会う。「生きるためだ」という老婆の言い訳を聞いた下人は、同じ理屈で老婆の着物をはぎ取って去っていく。\n主題は、追いつめられた人間のエゴイズム（利己心）。\n「ぼんやりした不安」は芥川が自殺の際に残した言葉で、自分の将来や時代に対するはっきりしない不安を指す。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_ex_05',
    subject: 'kokugo',
    question: '修辞技法の名前を答えよ。①「人生は旅だ」②「花が笑っている」③「赤い赤い夕焼け」④「春よ来い、早く来い」',
    answer: '①暗喩（隠喩）②擬人法③反復（繰り返し）④呼びかけ・反復',
    explanation: '①「人生は旅だ」…「〜のようだ」を使わず直接たとえているので暗喩（隠喩）。「〜のようだ」を使えば直喩。\n②「花が笑っている」…人でないものを人のように表すので擬人法。\n③「赤い赤い夕焼け」…同じ言葉をくり返す反復。\n④「春よ来い、早く来い」…人でないものへの呼びかけであり、「来い」のくり返し（反復）でもある。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_ex_06',
    subject: 'kokugo',
    question: '「平家物語」の冒頭を現代語訳し、作品の主題と伝承方法を答えよ。',
    answer: '「祇園精舎の鐘の声、諸行無常の響きあり」=祇園精舎の鐘の音はすべてが移り変わるという無常の響きだ。主題: 平家の栄枯盛衰・無常観。琵琶法師が語り伝えた軍記物語',
    explanation: '冒頭「祇園精舎の鐘の声、諸行無常の響きあり」は、祇園精舎の鐘の音は、すべては移り変わるという無常の響きを持っている、という意味。\n主題は、平家一門の栄えとほろび（栄枯盛衰）と、そこににじむ無常観。\n鎌倉時代の軍記物語で、琵琶法師が琵琶を弾きながら語り伝えた（平曲）。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_ex_07',
    subject: 'kokugo',
    question: '次の敬語の誤りを訂正せよ。①「お客様が参りました」②「先生はご飯を召し上がっていただきました」',
    answer: '①「参る」は謙譲語→「いらっしゃいました」②「いただく」は謙譲語→「先生はお食事を召し上がりました」',
    explanation: '①「参る」は「行く・来る」の謙譲語で自分側に使う言葉。お客様の動作なので、尊敬語の「いらっしゃいました」「おいでになりました」に直す。\n②「いただく」は「食べる・もらう」の謙譲語。先生の動作なので尊敬語の「召し上がりました」に直す。\n「召し上がっていただく」は尊敬語と謙譲語が混ざった二重の誤りになっている。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_ex_08',
    subject: 'kokugo',
    question: '接続詞の種類を答えよ。①「勉強した。しかし点数が悪かった」②「雨が降った。だから試合が中止」③「彼は優しい。つまり人気者だ」',
    answer: '①逆接②順接③換言・要約',
    explanation: '前後の関係を見て種類を決める。\n①勉強した→点数が悪かった：予想と逆の結果が続くので逆接（しかし・でも・ところが）。\n②雨が降った→中止：前が原因で後が結果なので順接（だから・したがって）。\n③優しい→つまり人気者：前の内容を言いかえてまとめているので換言・要約（つまり・すなわち）。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_ex_09',
    subject: 'kokugo',
    question: '「百聞は一見に如かず」「七転び八起き」「石の上にも三年」「一期一会」の意味をそれぞれ答えよ。',
    answer: '百聞: 何度聞くより実際に見る方が確か。七転び: 何度失敗しても諦めない。石の上: 辛くても続ければ成果が出る。一期一会: 一生に一度の出会いを大切に',
    explanation: '①百聞は一見に如かず…百回聞くより、一度自分の目で見る方が確かだということ。\n②七転び八起き…何度失敗しても立ち上がる、あきらめない心。\n③石の上にも三年…冷たい石でも三年すわり続ければ温まるように、つらくても続ければ実を結ぶ。\n④一期一会…茶の湯の心得からきた言葉で、その出会いは一生に一度と思って大切にすること。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_ex_10',
    subject: 'kokugo',
    question: '「源氏物語」の書き出しを言い、作者・成立時代・主人公を答えよ。また日本最古の物語とされる作品名も答えよ。',
    answer: '「いづれの御時にか…」。作者: 紫式部・平安時代・光源氏。日本最古の物語: 「竹取物語」（かぐや姫）',
    explanation: '「源氏物語」の書き出しは「いづれの御時にか、女御・更衣あまたさぶらひ給ひける中に…」。\n作者は紫式部、成立は平安時代（11世紀初め）、主人公は光源氏。\n一方、日本最古の物語とされるのは平安時代初期の「竹取物語」（かぐや姫の話）で、源氏物語の中でも「物語の出で来はじめの祖（おや）」と書かれている。',
    difficulty: 'advanced',
  },

  // ── 英語 追加10問 ──
  {
    id: 'eigo_ex_01',
    subject: 'eigo',
    question: '現在完了形と過去形の違いを説明し、「私は3回東京に行ったことがある」「彼は昨日東京へ行った」を英語にせよ。',
    answer: '現在完了: 過去が現在に影響/継続。過去: 特定の過去の時点。①I have been to Tokyo three times. ②He went to Tokyo yesterday.',
    explanation: '現在完了形〈have[has]＋過去分詞〉は、過去のできごとが今とつながっていることを表す（経験・完了・継続）。\n過去形は、過去の一時点で起こって今とは切りはなされたことを表し、yesterday, last week, 〜 ago などの語といっしょに使う。\n①「3回東京に行ったことがある」は今までの経験なので現在完了形。I have been to Tokyo three times.\nhave been to 〜 は「〜へ行ったことがある」。have gone to 〜 にすると「行ってしまって今ここにいない」の意味になってしまう。\n②「彼は昨日東京へ行った」は yesterday というはっきりした過去の時があるので過去形。He went to Tokyo yesterday.\n現在完了形は yesterday などと同時には使えない、というのが最大のポイント。',
    difficulty: 'advanced',
  },
  {
    id: 'eigo_ex_02',
    subject: 'eigo',
    question: '受動態に書き換えよ。①Tom wrote this letter. ②They are building a new bridge.',
    answer: '①This letter was written by Tom. ②A new bridge is being built (by them).',
    explanation: '受動態は〈be動詞＋過去分詞〉。もとの文の目的語を主語にし、動詞を受け身の形に変え、もとの主語を by 〜 で表す。\n①Tom wrote this letter.（過去形）→ This letter was written by Tom.\n主語 this letter は単数で過去のことなので be動詞は was、write の過去分詞は written。\n②They are building a new bridge.（現在進行形）→ A new bridge is being built (by them).\n進行形の受動態は〈be動詞＋being＋過去分詞〉という形になる。build の過去分詞は built。\nthey が「だれと特定できない一般の人々」を指すときは、by them を省略するのがふつう。',
    difficulty: 'advanced',
  },
  {
    id: 'eigo_ex_03',
    subject: 'eigo',
    question: '不定詞の3用法（名詞的・形容詞的・副詞的）の例文を1つずつ作れ。',
    answer: '①名詞的: I want to study math. ②形容詞的: I have a book to read. ③副詞的: I study hard to pass the exam.',
    explanation: '不定詞〈to＋動詞の原形〉の3用法。\n①名詞的用法…「〜すること」。動詞の目的語や主語になる。I want to study math.（数学を勉強したい）。\n②形容詞的用法…「〜するための・〜すべき」。前の名詞をうしろから説明する。I have a book to read.（読むべき本がある。to read が book を説明している）。\n③副詞的用法…「〜するために」。目的を表し、動詞を説明する。I study hard to pass the exam.（試験に合格するために一生けんめい勉強する）。\n見分けるコツは、すぐ前に説明される名詞があるかどうか。名詞のすぐあとにあれば形容詞的用法。\nto のあとは必ず原形にする。',
    difficulty: 'advanced',
  },
  {
    id: 'eigo_ex_04',
    subject: 'eigo',
    question: 'SVOC文型の例文を作り、S・V・O・Cを特定せよ。',
    answer: '"The news made her happy." S=The news, V=made, O=her, C=happy',
    explanation: '英語の文は5つの型（文型）に分けられ、SVOCは第5文型。S＝主語、V＝動詞、O＝目的語、C＝補語。\n例文 The news made her happy.（その知らせは彼女を幸せにした）。\nS＝The news（その知らせが）、V＝made（〜にした）、O＝her（彼女を）、C＝happy（幸せな状態に）。\nSVOCの見分け方は「O＝C」の関係が成り立つこと。ここでは「her＝happy（彼女が幸せである）」が成り立つ。\n同じ形の例に We call him Ken.（him＝Ken）、I found the book interesting. などがある。\nSVOO（例：He gave me a book.）は「me＝a book」が成り立たないので、別の文型だと見分けられる。',
    difficulty: 'advanced',
  },
  {
    id: 'eigo_ex_05',
    subject: 'eigo',
    question: '次の文法誤りを訂正せよ。①She don\'t like coffee. ②I have went to Kyoto. ③This is the most beautifulest flower.',
    answer: '①don\'t→doesn\'t（三人称単数）②have went→have gone（過去分詞）③most beautifulest→most beautiful（二重比較）',
    explanation: '①She don\'t like coffee. → doesn\'t。主語 She は三人称単数なので、現在の否定文では does not（doesn\'t）を使う。このとき動詞は原形 like のまま。\n②I have went to Kyoto. → have gone。現在完了形は〈have＋過去分詞〉。go の変化は go - went - gone なので、過去形の went ではなく過去分詞の gone を使う（「行ったことがある」という経験を表すなら have been to Kyoto が自然）。\n③This is the most beautifulest flower. → the most beautiful。最上級は「-est をつける」か「most を前に置く」かのどちらか一方だけ。両方使うのは二重比較といって誤り。\nbeautiful のような長い語は most beautiful、short のような短い語は shortest とする。',
    difficulty: 'advanced',
  },
  {
    id: 'eigo_ex_06',
    subject: 'eigo',
    question: '間接疑問文に書き換えよ。"Where does she live?" → "I don\'t know ___."',
    answer: 'I don\'t know where she lives.（間接疑問文は語順が平叙文=主語＋動詞）',
    explanation: '疑問文が別の文の一部（動詞の目的語など）に組みこまれたものを間接疑問文という。\nいちばんのポイントは語順で、疑問文の語順（Does she live 〜?）ではなく、ふつうの文の語順〈疑問詞＋主語＋動詞〉にもどすこと。\nWhere does she live? → I don\'t know where she lives.\ndoes が消えるかわりに、その s が動詞にもどって live→lives になることに注意。\n過去のことなら I didn\'t know where she lived. のように時制も合わせる。\n文全体は疑問文ではないので、最後はピリオド（.）で終わる。',
    difficulty: 'advanced',
  },
  {
    id: 'eigo_ex_07',
    subject: 'eigo',
    question: '関係代名詞 who / which / that の使い分けを説明し、例文を1つ作れ。',
    answer: 'who=人・which=物や動物・that=どちらにも使える。例: The boy who is playing soccer is my friend.',
    explanation: '関係代名詞は、代名詞と接続詞の2つの働きを兼ねる語で、前の名詞（先行詞）をうしろから説明する。\nwho…先行詞が人のとき。which…先行詞が物や動物のとき。that…人にも物にも使える。\n例：The boy who is playing soccer is my friend.（サッカーをしているその男の子は私の友達です）。\nこの文では The boy が先行詞で、who is playing soccer が The boy を説明している。\n文の骨組みは The boy is my friend. で、その間に説明が割りこんだ形になっている。\n先行詞に the only や最上級、all などがつくときは that が好まれる。目的格の関係代名詞は省略できる。',
    difficulty: 'advanced',
  },
  {
    id: 'eigo_ex_08',
    subject: 'eigo',
    question: '比較表現で英語にせよ。①富士山は日本で最も高い山。②彼は彼女と同じくらい速く走れる。③私は犬より猫が好き。',
    answer: '①Mt. Fuji is the highest mountain in Japan. ②He can run as fast as she can. ③I like cats better than dogs.',
    explanation: '①Mt. Fuji is the highest mountain in Japan.\n最上級は〈the＋形容詞の-est〉。high→highest。範囲が Japan という場所なので in を使う。the を忘れないこと。\n②He can run as fast as she can.\n「同じくらい〜」は〈as＋原級（変化させない形）＋as〉。比較級の faster にせず fast のままにするのがポイント。最後の can は省略できる。\n③I like cats better than dogs.\n「BよりAが好き」は like A better than B。better は well の比較級。\nI prefer cats to dogs. と言いかえてもよい。prefer は than ではなく to を使う点に注意。',
    difficulty: 'advanced',
  },
  {
    id: 'eigo_ex_09',
    subject: 'eigo',
    question: '次を英語にせよ。①「彼女は医者になるために毎日10時間勉強している。」②「もし明日雨なら家にいます。」',
    answer: '①She studies ten hours every day to become a doctor. ②If it rains tomorrow, I will stay home.',
    explanation: '①She studies ten hours every day to become a doctor.\nevery day があり習慣を表すので現在形。主語が She なので study→studies（〈子音字＋y〉なので y を i に変えて es）。\n「医者になるために」は目的を表す不定詞の副詞的用法 to become a doctor（in order to become でもよい）。職業名には a をつける。\n②If it rains tomorrow, I will stay home.\n「もし明日雨なら」は実際に起こりうる条件なので、if のあとは未来のことでも現在形で表す（×If it will rain）。天気を表す主語は it で、三人称単数なので rain→rains。\n主節は未来のことなので will stay とする。「家にいる」は stay home または stay at home。',
    difficulty: 'advanced',
  },
  {
    id: 'eigo_ex_10',
    subject: 'eigo',
    question: '次の英文を日本語に訳せ。"Having finished his homework, he went out to play. Despite being tired, he ran for two more kilometers."',
    answer: '宿題を終えて（終えてから）、彼は外へ遊びに出かけた。疲れていたにもかかわらず、彼はさらに2キロ走った。',
    explanation: '1文目 Having finished his homework, he went out to play.\nHaving finished は分詞構文の完了形で、主節よりも前に起きたことを表す。「宿題を終えてから、彼は遊びに出かけた」。接続詞を使えば After he had finished his homework, 〜 と書きかえられる。\nwent out to play の to play は「遊ぶために」という目的を表す不定詞。\n2文目 Despite being tired, he ran for two more kilometers.\nDespite は「〜にもかかわらず」という前置詞なので、うしろには名詞か動名詞（〜ing）が来る。ここでは being tired（疲れていること）。接続詞を使えば Although he was tired, 〜 と同じ意味になる。\ntwo more kilometers は「さらに2キロ」。\n全体の訳は「宿題を終えて、彼は外へ遊びに出かけた。疲れていたにもかかわらず、彼はさらに2キロ走った」。',
    difficulty: 'advanced',
  },

  // ── 英語 最難関10問 ──
  {
    id: 'eigo_yotsuya_01',
    subject: 'eigo',
    question: '現在完了形と過去形の違いを説明し、次の日本語を英語にせよ。「私は3回東京に行ったことがある。」「彼は昨日東京に行った。」',
    answer: '現在完了形は過去の出来事が現在に影響/つながりがある時に使う。過去形は過去の特定の時点を表す。①I have been to Tokyo three times. ②He went to Tokyo yesterday.',
    explanation: '現在完了形は〈have[has]＋過去分詞〉で、過去のできごとが現在とつながっている（経験・完了・継続）ことを表す。\n過去形は、過去のある時点で起きて今とは切りはなされたことを表す。\n①「3回東京に行ったことがある」は今までの経験なので現在完了形。I have been to Tokyo three times.\n回数は three times（3回）で表す。1回は once、2回は twice を使う。\nhave been to は「行ったことがある」、have gone to は「行ってしまって今ここにいない」という意味になるので区別する。\n②「彼は昨日東京に行った」は yesterday という過去の時点が示されているので過去形。He went to Tokyo yesterday.\n現在完了形は yesterday, last year, 〜 ago といっしょには使えない、というのが最重要ポイント。',
    difficulty: 'advanced',
  },
  {
    id: 'eigo_yotsuya_02',
    subject: 'eigo',
    question: '次の文を受動態に書き換えよ。①"Tom wrote this letter." ②"They are building a new bridge."',
    answer: '①This letter was written by Tom. ②A new bridge is being built (by them).',
    explanation: '受動態は「〜される」という意味を表し、〈be動詞＋過去分詞〉で作る。\n①Tom wrote this letter. → This letter was written by Tom.\n目的語 this letter を主語にし、過去形 wrote を〈was＋過去分詞 written〉に変え、もとの主語を by Tom とする。主語が単数で過去のことなので be動詞は was。\n②They are building a new bridge. → A new bridge is being built (by them).\nもとの文が現在進行形なので、受動態も進行形にして〈is being＋過去分詞〉とする。build の過去分詞は built。\nthey が「一般の人々」を指す場合、by them は省略するのがふつう。',
    difficulty: 'advanced',
  },
  {
    id: 'eigo_yotsuya_03',
    subject: 'eigo',
    question: '不定詞の3用法（名詞的・形容詞的・副詞的）それぞれの例文を作れ。',
    answer: '①名詞的: I want to study math.（数学を勉強したい）②形容詞的: I have a book to read.（読む本がある）③副詞的: I study hard to pass the exam.（試験に合格するために勉強する）',
    explanation: '不定詞は〈to＋動詞の原形〉で、働きによって3つの用法に分かれる。\n①名詞的用法「〜すること」…I want to study math.（私は数学を勉強したい＝勉強することを望む）。to study が want の目的語になっている。\n②形容詞的用法「〜するための」…I have a book to read.（私には読む本がある）。to read が前の名詞 a book を説明している。\n③副詞的用法「〜するために」…I study hard to pass the exam.（試験に合格するために一生けんめい勉強する）。目的を表し、動詞 study を説明している。\n見分けるコツは、すぐ前に説明される名詞があれば形容詞的用法、「〜すること」と置きかえられれば名詞的用法、「〜するために」と訳せれば副詞的用法。',
    difficulty: 'advanced',
  },
  {
    id: 'eigo_yotsuya_04',
    subject: 'eigo',
    question: 'SVOC文型の文を1つ作り、S・V・O・Cを特定せよ。',
    answer: '例: "The news made her happy." S=The news, V=made, O=her, C=happy（その知らせは彼女を幸せにした）。またはWe call him Ken. S=We, V=call, O=him, C=Ken',
    explanation: 'SVOCは第5文型で、S＝主語、V＝動詞、O＝目的語、C＝補語（Oの状態や正体を説明する語）。\nThe news made her happy.（その知らせは彼女を幸せにした）。S＝The news、V＝made、O＝her、C＝happy。\nWe call him Ken.（私たちは彼をケンと呼ぶ）。S＝We、V＝call、O＝him、C＝Ken。\n見分け方は「O＝C」の関係が成り立つかどうか。her＝happy、him＝Ken が成り立つのでSVOCだとわかる。\nSVOCをとる代表的な動詞は make（〜を…にする）、call（〜を…と呼ぶ）、name（名づける）、find（〜が…だとわかる）、keep（〜を…に保つ）。\nSVOO（He gave me a book.）では me＝a book が成り立たないので、区別できる。',
    difficulty: 'advanced',
  },
  {
    id: 'eigo_yotsuya_05',
    subject: 'eigo',
    question: '次の英文の下線部の文法的誤りを訂正せよ。①"She don\'t like coffee." ②"I have went to Kyoto." ③"This is the most beautifulest flower."',
    answer: '①don\'t → doesn\'t（三人称単数）②have went → have gone（過去分詞）③most beautifulest → most beautiful（二重比較）',
    explanation: '①She don\'t like coffee. → doesn\'t。主語 She は三人称単数なので、現在の否定文では doesn\'t を使う。このとき動詞は原形 like のまま。\n②I have went to Kyoto. → have gone。現在完了形は〈have＋過去分詞〉で、go の過去分詞は gone（went は過去形）。「行ったことがある」という経験を表すなら have been to Kyoto が正しい言い方になる。\n③This is the most beautifulest flower. → the most beautiful。最上級は -est をつけるか most を前に置くかのどちらか一方だけで、両方使う「二重比較」は誤り。beautiful のような長い語には most を使う。',
    difficulty: 'advanced',
  },
  {
    id: 'eigo_yotsuya_06',
    subject: 'eigo',
    question: '次の日本語を英語に訳せ。「彼女は医者になるために毎日10時間勉強している。」「もし明日雨が降れば、私はうちにいます。」',
    answer: '①She studies ten hours every day (in order) to become a doctor. ②If it rains tomorrow, I will stay home.',
    explanation: '①She studies ten hours every day (in order) to become a doctor.\nevery day があるので習慣を表す現在形にする。主語 She は三人称単数なので study→studies（〈子音字＋y〉は y を i に変えて es）。\n「〜になるために」は目的を表す不定詞の副詞的用法。目的をはっきり示したいときは in order to をつけてもよい。\n②If it rains tomorrow, I will stay home.\n「もし〜なら」の if のあとでは、未来のことでも will を使わず現在形で表すのがルール。主語は天気を表す it で、三人称単数なので rain→rains。\n主節は未来のことなので will stay。「家にいる」は stay home / stay at home。',
    difficulty: 'advanced',
  },
  {
    id: 'eigo_yotsuya_07',
    subject: 'eigo',
    question: '「関係代名詞」とは何か説明し、who, which, thatの使い分けを答えよ。また例文を1つ作れ。',
    answer: '関係代名詞: 二つの文をつなぎ、名詞を修飾する代名詞。who=人に使う、which=物・動物に使う、that=どちらにも使える。例: The boy who is playing soccer is my friend.',
    explanation: '関係代名詞は、2つの文をつなぐ接続詞の働きと、名詞のかわりをする代名詞の働きを合わせ持つ語。前にある名詞（先行詞）をうしろから説明する。\nwho…先行詞が人のとき。which…先行詞が物・動物のとき。that…人にも物にも使える。\n例：The boy who is playing soccer is my friend.（サッカーをしているその男の子は私の友達です）。\nもとは The boy is my friend. と He is playing soccer. の2文。2つ目の He を who に変えて、先行詞 The boy のうしろにつなげた形になっている。\nうしろに動詞が続けば主格、〈主語＋動詞〉が続けば目的格。目的格の関係代名詞は省略できる。',
    difficulty: 'advanced',
  },
  {
    id: 'eigo_yotsuya_08',
    subject: 'eigo',
    question: 'この英文の間接疑問文に書き換えよ。"Where does she live?" → "I don\'t know ___."',
    answer: 'I don\'t know where she lives.（間接疑問文では疑問詞の後は平叙文の語順：主語＋動詞）',
    explanation: '間接疑問文は、疑問文が別の文の中に組みこまれた形。\n最大のポイントは語順で、〈疑問詞＋主語＋動詞〉というふつうの文の順にもどすこと。\nWhere does she live? → I don\'t know where she lives.\n助動詞 does が消え、そのかわりに s が動詞にもどって live→lives になる。\n文全体は疑問文ではないので、最後はピリオド（.）で終わる。\n主節が過去形なら、I didn\'t know where she lived. のように中の動詞も過去形にそろえる（時制の一致）。',
    difficulty: 'advanced',
  },
  {
    id: 'eigo_yotsuya_09',
    subject: 'eigo',
    question: '比較表現を使って次の日本語を英語にせよ。①「富士山は日本で最も高い山だ。」②「彼は彼女と同じくらい速く走れる。」③「私は犬より猫の方が好きだ。」',
    answer: '①Mt. Fuji is the highest mountain in Japan. ②He can run as fast as she (can). ③I like cats better than dogs. / I prefer cats to dogs.',
    explanation: '①Mt. Fuji is the highest mountain in Japan.\n最上級は〈the＋-est〉の形。high→highest。範囲が場所（日本）なので in を使う。the を忘れないこと。\n②He can run as fast as she (can).\n「同じくらい〜」は〈as＋原級＋as〉。比較級の faster にせず、変化させない形 fast のまま使うのがポイント。最後の can は省略できる。\n③I like cats better than dogs.\n「BよりAが好き」は like A better than B。better は well の比較級。\nI prefer cats to dogs. と言いかえてもよいが、prefer は than ではなく to を使う点に注意。',
    difficulty: 'advanced',
  },
  {
    id: 'eigo_yotsuya_10',
    subject: 'eigo',
    question: '次の英文を日本語に訳せ。"Having finished his homework, he went out to play. Despite being tired, he ran for two more kilometers."',
    answer: '宿題を終えて（終えてから）、彼は外へ遊びに出かけた。疲れていたにもかかわらず、彼はさらに2キロ走った。',
    hint: 'Having finished = 分詞構文（完了形）。Despite being = 前置詞＋動名詞',
    explanation: '1文目 Having finished his homework, he went out to play.\nHaving finished 〜 は分詞構文の完了形で、主節よりも前に終わったことを表す。「宿題を終えてから」という意味。接続詞を使えば After he had finished his homework, 〜 となる。\nwent out to play の to play は「遊ぶために」という目的を表す不定詞。\n2文目 Despite being tired, he ran for two more kilometers.\nDespite は「〜にもかかわらず」を表す前置詞なので、うしろには名詞か動名詞が来る。ここでは being tired。接続詞の although を使えば Although he was tired, 〜 となる。\nfor two more kilometers は「さらに2キロにわたって」。\n全体の訳は「宿題を終えて、彼は外へ遊びに出かけた。疲れていたにもかかわらず、彼はさらに2キロ走った」。',
    difficulty: 'advanced',
  },
  ...freeTeaserQuestions,
  ...writtenChugakuRikeiQuestions,
  ...writtenKokoQuestions,
  ...writtenChugakuBunkeiQuestions,
  ...kankanQuestions,
  ...kankanExamQuestions,
  ...kankanMaxQuestions,
  ...shitennojiQuestions,
  ...kokoGeneralQuestions,
  ...kokoKankanQuestions,
  ...kokoTopQuestions,
  ...kokoMaxSansu,
  ...kokoMaxKokugo,
  ...kokoMaxRika,
  ...kokoMaxEigo,
  ...kokoMaxShakai,
  ...kokoKisoSansu50,
  ...kokoKisoSansu100,
  ...kokoOyoSansu50,
  ...kokoMoshiSansu50,
  ...kokoKisoKokugo50,
  ...kokoMoshiKokugo50,
  ...kokoKisoRika50,
  ...kokoNyushiRika50,
  ...kokoNyushiSansu50,
  ...kokoNyushiEigo50,
  ...kokoNyushiEigo2,
  ...kokoNyushiEigo3,
  ...kokoNyushiEigo4,
  ...kokoNyushiEigo5,
  ...kokoNyushiEigo6,
  ...kokoNyushiEigo7,
  ...kokoNyushiEigo8,
  ...kokoNyushiEigo9,
  ...kokoNyushiEigo10,
  ...kokoNyushiEigo11,
  ...kokoNyushiShakai50,
  ...kokoNyushiKokugo50,
  ...kokoKisoEigo50,
  ...kokoKisoShakai50,
  ...kokoMoshiShakai50,
  ...kokoKisoRika50b,
  ...kokoKisoShakai50b,
  ...kokoKisoKokugo50b,
  ...kokoKisoSansu50b,
  ...kokoKisoEigo50b,
  ...kokoOyoRika50,
  ...kokoOyoKokugo50,
  ...kokoOyoShakai50,
  ...kokoOyoEigo50,
  ...kokoMoshiRika50,
  ...kokoMoshiEigo50,
  ...moshi202609KokoKokugo,
  ...moshi202609KokoEigo,
  ...moshi202609KokoShakai,
  ...moshi202609KokoSansu,
  ...moshi202609KokoRika,
  // ── 学校別問題（大阪私学 最難関） ──
  ...seikoQuestions,
  ...seifuNankaiQuestions,
  ...takatsukiQuestions,
  // ── 学校別問題（大阪私学 難関） ──
  ...kaimeiQuestions,
  ...kaimeiExamQuestions,
  ...toinQuestions,
  ...toinExamQuestions,
  ...kindaiQuestions,
  ...kindaiExamQuestions,
  ...kansaiHokuyoQuestions,
  ...kansaiHokuyoExamQuestions,
  ...myojoQuestions,
  ...myojoExamQuestions,
  ...tezukayamaQuestions,
  ...tezukayamaExamQuestions,
  // ── 学校別問題（大阪私学 準難関） ──
  ...kinrankaiQuestions,
  ...kinrankaiExamQuestions,
  ...otaniQuestions,
  ...otaniExamQuestions,
  // ── 東京 中学受験 ──
  ...tokyoMeidaiExamQuestions,
  ...tokyoAoyamaExamQuestions,
  ...tokyoChuoExamQuestions,
  ...tokyoHoseiExamQuestions,
  ...tokyoGakushiinExamQuestions,
  ...tokyoChugakuMaxQuestions,
  // ── 東京 高校受験 ──
  ...tokyoHibiyaExamQuestions,
  ...tokyoWasedaExamQuestions,
  ...tokyoMeidaiKokoExamQuestions,
  ...tokyoKokoMaxQuestions,
  // ── 大量補強問題（基礎・応用・理科・国語・社会・英語）──────
  ...kisoSansu,
  ...sansuKiso,
  ...sansuExtra2,
  ...sansuGeneralPlus,
  ...oyoSansuPart1,
  ...oyoSansuPart2,
  ...oyoSansuPart3,
  ...kisoRika,
  ...rikaExtra,
  ...rikaExtra2,
  ...rikaGeneralPlus,
  ...kokugoGeneralPlus,
  ...kokugoExtra,
  ...kokugoExtra3,
  ...kokugoExtra2a,
  ...kokugoExtra2b,
  ...shakaiExtra,
  ...kisoShakai,
  ...shakaiExtra2a,
  ...shakaiExtra2b,
  ...shakaiGeneralPlus,
  ...eigoExtra,
  ...eigoExtra2,
  ...nichinokenSansu,
  ...nichinokenKokugo,
  ...nichinokenRika,
  ...nichinokenShakai,
  ...nichinokenEigo,
  ...kokoKankanEigo20,
  ...kokoKankanSansu20,
  ...kokoKankanKokugo20,
  ...kokoKankanRika20,
  ...kokoKankanShakai20,
  ...kokoKankanEigo30,
  ...kokoKankanSansu30,
  ...kokoKankanKokugo30,
  ...kokoKankanRika30,
  ...kokoKankanShakai30,
  ...kokoKankanEigoC1,
  ...kokoKankanEigoC2,
  ...kokoKankanEigoC3,
  ...kokoKankanKokugoC1,
  ...kokoKankanKokugoC2,
  ...kokoKankanKokugoC3,
  ...kokoKankanRikaC1,
  ...kokoKankanRikaC2,
  ...kokoKankanRikaC3,
  ...kokoKankanShakaiC1,
  ...kokoKankanShakaiC2,
  ...kokoKankanShakaiC3,
  ...kokoKankanSansuC1,
  ...kokoKankanSansuC2,
  ...kokoKankanSansuC3,
  ...kokoKankanSansuC4,
  ...kokoKankanSansuC5,
  ...kokoSansuEx01,
  ...kokoSansuEx02,
  ...kokoSansuEx03,
  ...kokoSansuEx04,
  ...kokoSansuEx05,
  ...chugakuSansuEx01,
  ...kokoSansuEx09,
  ...kokoSansuEx06,
  ...kokoSansuEx07,
  ...kokoSansuEx08,
  ...kokoSansuEx17,
  ...kokoSansuEx10,
  ...kokoSansuEx11,
  ...kokoSansuEx12,
  ...kokoSansuEx13,
  ...kokoSansuEx15,
  ...kokoSansuEx16,
  ...chugakuSansuEx02,
  ...kokoSansuEx14,
  ...kokoEigoEx01,
  ...kokoKokugoEx01,
  ...kokoRikaEx01,
  ...kokoShakaiEx01,
  ...nandaiChugakuEx01,
  // ============================================================
  // 学校別 本試験レベル v2（4択形式）
  // ============================================================
  ...kindaiExamV2,
  ...seifuExamV2,
  ...takatsukiExamV2,
  ...kaimeiExamV2,
  ...toinExamV2,
  ...toinExamTop,
  ...josejogakuenExam,
  ...naniwaExam,
  ...otemonExam,
  ...pooleExam,
  ...kenmeiExam,
  ...kankanExamTop,
  ...tokyoMeidaiExam,
  ...tokyoAoyamaExam,
  ...tokyoChuoExam,
  ...tokyoHoseiExam,
  ...tokyoGakushuinExam,
  ...nagoyaNanzanExam,
  ...nagoyaTokaiExam,
  ...nagoyaTakiExam,
  ...fukuokaKurumeExam,
  ...fukuokaSeinanExam,
  ...fukuokaOhoriExam,
  ...chugaku2026Sansu1,
  ...chugaku2026Sansu2,
  ...chugaku2026Kokugo1,
  ...chugaku2026Kokugo2,
  ...chugaku2026Rika1,
  ...chugaku2026Rika2,
  ...chugaku2026Shakai1,
  ...chugaku2026Shakai2,
  ...chugaku2026Eigo1,
  ...chugaku2026Eigo2,
  ...kokoKanto2026Sansu,
  ...kokoKanto2026Kokugo,
  ...kokoKanto2026Rika,
  ...kokoKanto2026Shakai,
  ...kokoKanto2026Eigo,
  ...term1_2026ChugakuSansu,
  ...term1_2026ChugakuKokugo,
  ...term1_2026ChugakuRika,
  ...term1_2026ChugakuShakai,
  ...term1_2026ChugakuEigo,
  ...term1_2026KokoSansu,
  ...term1_2026KokoKokugo,
  ...term1_2026KokoRika,
  ...term1_2026KokoShakai,
  ...term1_2026KokoEigo,
  ...kokugoChoubunChugaku,
  ...eigoChoubunChugaku,
  ...kokoRikaExpand1,
  ...kokoShakaiExpand1,
  ...kokoKokugoExpand1,
  ...sansuDataChugaku,
  ...kokugoChoubunKoko,
  ...kokugoChoubunChugaku2,
  ...kokugoChoubunKoko2,
  ...schoolOsakaJogakuin,
  ...schoolKokoAzabu,
  ...schoolKokoNanzan,
  ...schoolKokoSeinan,
  ...schoolKokoTaki,
  ...schoolKokoKurume,
  ...schoolKokoOhori,
  ...schoolKokoTokai,
  ...schoolKokoShitennoji,
  ...schoolKokoHibiyaWasedaFill,
  ...schoolKokoKaseiFill,
  ...schoolKokoTodaijiFill,
  ...schoolKokoKoyoFill,
  ...schoolKokoKeioFill,
  ...schoolKokoNadaFill,
  ...schoolKokoNishiyamatoFill,
  ...schoolKokoMeidaiFill,
  ...gradeE5SansuQuestions,
  ...gradeE4SansuQuestions,
  ...gradeJ1SansuQuestions,
  ...gradeE6SansuQuestions,
  ...gradeJ2SansuQuestions,
  ...gradeJ3SansuQuestions,
  ...gradeE4KokugoQuestions,
  ...gradeE4EigoQuestions,
  ...gradeE4RikaQuestions,
  ...gradeE4ShakaiQuestions,
  ...gradeE5EigoQuestions,
  ...gradeE5KokugoQuestions,
  ...gradeE5ShakaiQuestions,
  ...gradeE6KokugoQuestions,
  ...gradeE6ShakaiQuestions,
  ...gradeJ1ShakaiQuestions,
  ...gradeJ3ShakaiQuestions,
  ...gradeE5RikaQuestions,
  ...gradeE6RikaQuestions,
  ...gradeJ1RikaQuestions,
  ...gradeJ2RikaQuestions,
  ...gradeJ1KokugoQuestions,
  ...gradeJ2ShakaiQuestions,
  ...gradeJ3RikaQuestions,
  ...gradeJ2KokugoQuestions,
  ...gradeJ3KokugoQuestions,
  ...gradeJ1EigoQuestions,
  ...gradeJ2EigoQuestions,
  ...gradeE6EigoQuestions,
  ...gradeJ3EigoQuestions,
];

export const questionsBySubject: Record<SubjectKey, Question[]> = {
  sansu: questions.filter((q) => q.subject === 'sansu'),
  kokugo: questions.filter((q) => q.subject === 'kokugo'),
  rika: questions.filter((q) => q.subject === 'rika'),
  shakai: questions.filter((q) => q.subject === 'shakai'),
  eigo: questions.filter((q) => q.subject === 'eigo'),
};


export const questionsByDifficulty: Record<string, Question[]> = {
  basic: questions.filter((q) => q.difficulty === 'basic'),
  standard: questions.filter((q) => q.difficulty === 'standard'),
  advanced: questions.filter((q) => q.difficulty === 'advanced'),
};
