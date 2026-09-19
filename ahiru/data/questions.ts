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
import { gradeKoushikiC5KakudoQuestions } from './grade_koushiki_c5kakudo';
import { gradeKoushikiK2HeikouQuestions } from './grade_koushiki_k2heikou';
import { gradeKoushikiK4En1Questions } from './grade_koushiki_k4en1';
import { gradeKoushikiK5En2Questions } from './grade_koushiki_k5en2';
import { gradeKoushikiK1GodoQuestions } from './grade_koushiki_k1godo';
import { gradeKoushikiK3SoujiQuestions } from './grade_koushiki_k3souji';
import { gradeKoushikiK6SanpeiQuestions } from './grade_koushiki_k6sanpei';
import { gradeKoushikiOyoC3Tairyoku1Questions } from './grade_koushiki_oyo_c3tairyoku1';
import { gradeKoushikiOyoC4Tairyoku2Questions } from './grade_koushiki_oyo_c4tairyoku2';
import { gradeKoushikiOyoC6SojiQuestions } from './grade_koushiki_oyo_c6soji';
import { gradeKoushikiOyoK4En1Questions } from './grade_koushiki_oyo_k4en1';
import { gradeKoushikiOyoC2EnQuestions } from './grade_koushiki_oyo_c2en';
import { gradeKoushikiOyoK6SanpeiQuestions } from './grade_koushiki_oyo_k6sanpei';
import { gradeKoushikiOyoK5En2Questions } from './grade_koushiki_oyo_k5en2';
import { gradeKoushikiOyoC1MensekiQuestions } from './grade_koushiki_oyo_c1menseki';
import { gradeKoushikiOyoK3SoujiQuestions } from './grade_koushiki_oyo_k3souji';
import { gradeKoushikiOyoK2HeikouQuestions } from './grade_koushiki_oyo_k2heikou';
import { gradeKoushikiOyoK1GodoQuestions } from './grade_koushiki_oyo_k1godo';
import { gradeKoushikiOyoC5KakudoQuestions } from './grade_koushiki_oyo_c5kakudo';

export const questions: Question[] = [
  ...gradeKoushikiOyoC3Tairyoku1Questions,
  ...gradeKoushikiOyoC4Tairyoku2Questions,
  ...gradeKoushikiOyoC6SojiQuestions,
  ...gradeKoushikiOyoK4En1Questions,
  ...gradeKoushikiOyoC2EnQuestions,
  ...gradeKoushikiOyoK6SanpeiQuestions,
  ...gradeKoushikiOyoK5En2Questions,
  ...gradeKoushikiOyoC1MensekiQuestions,
  ...gradeKoushikiOyoK3SoujiQuestions,
  ...gradeKoushikiOyoK2HeikouQuestions,
  ...gradeKoushikiOyoK1GodoQuestions,
  ...gradeKoushikiOyoC5KakudoQuestions,
  ...gradeKoushikiC1MensekiQuestions,
  ...gradeKoushikiC2EnQuestions,
  ...gradeKoushikiC3Tairyoku1Questions,
  ...gradeKoushikiC4Tairyoku2Questions,
  ...gradeKoushikiC6SojiQuestions,
  ...gradeKoushikiC5KakudoQuestions,
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
    explanation:
      '【何を聞かれているか】1から100までの整数をすべて足した値を求める。\n【なぜその式なのか】1と100、2と99のように、両端から順にペアを作ると、どのペアも和が同じ（101）になる。ペアの数だけこの和をかければ、全部の合計が求まる。\n【ステップ1】1と100、2と99、3と98、…のようにペアを作ると、どのペアも和は101になる。\n【ステップ2】1から100までの数は全部で100個あるので、ペアは100÷2＝50組できる。\n【ステップ3】合計は101×50＝5050。\n【答え】5050\n【確かめ】「(1+n)×n÷2」の公式にn=100を当てはめても100×101÷2=5050と同じ答えになる。\n【よくあるまちがい】ペアの数を100組と数えてしまい、答えを2倍の値にしてしまう。\n【ここが絶対】1からnまでの和は「(1+n)×n÷2」の公式で素早く計算できる。',
    difficulty: 'basic',
  },
  {
    id: 'sansu_02',
    subject: 'sansu',
    question: '24と36の最大公約数は？',
    answer: '12',
    explanation:
      '【何を聞かれているか】24と36の最大公約数（両方をわり切れる整数のうち、いちばん大きい数）。\n【なぜその式なのか】ある数をわり切れる数は、その数を素数のかけ算に分けたときの「部品」の組み合わせでできている。24＝2×2×2×3、36＝2×2×3×3 なので、**両方に共通する部品**をすべてかけ合わせたものが、両方をわり切れる最大の数になる。\n【ステップ1】24＝2×2×2×3、36＝2×2×3×3 と分ける。\n【ステップ2】共通している部品は 2が2個と3が1個。\n【ステップ3】2×2×3＝12。\n【答え】12\n【確かめ】24÷12＝2、36÷12＝3 でどちらもわり切れる。しかも2と3にはもう共通の約数がない（1以外）ので、12より大きい公約数はない。\n【よくあるまちがい】共通の部品を「2×3＝6」のように1個ずつしか数えない。2は**両方に2個ずつ**あるので2回かける。すだれ算（2でわる→2でわる→3でわる）で左に並ぶ数をかけても同じ12になる。',
    difficulty: 'basic',
  },
  {
    id: 'sansu_03',
    subject: 'sansu',
    question: '半径5cmの円の面積は？（円周率は3.14）',
    answer: '78.5cm²',
    hint: '面積 = 半径 × 半径 × 3.14',
    explanation:
      '【何を聞かれているか】円の中がどれだけの広さかを求める。\n\n【まず形をイメージする】円を細かく切ってならべかえると、だんだん長方形に近づく。そのときのたては半径、よこは円周の半分になる。だから面積は「半径 × 半径 × 円周率」で求まる。\n\n【ステップ1】半径をそのまま2回かける。\n　5 × 5 ＝ 25\n\n【ステップ2】円周率3.14をかける。\n　25 × 3.14 ＝ 78.5\n\n【答え】78.5cm²\n\n【よくあるまちがい】\n・直径の10を使って 10 × 10 × 3.14 ＝ 314 としてしまう。使うのは半径。問題に直径が書いてあるときは、まず半分にしてから計算する。\n・まわりの長さ（円周）と混同する。円周は 直径 × 3.14 で、2回かけない。「面積は2回かける、まわりは1回」と覚える。\n・単位を cm と書いてしまう。面積なので cm²。',
    difficulty: 'basic',
  },
  {
    id: 'sansu_04',
    subject: 'sansu',
    question: '鶴と亀が合わせて10匹、足の合計が28本。鶴は何羽？',
    answer: '6羽',
    hint: '全部亀と仮定すると40本。40-28=12本多い。鶴1羽に換えるたびに2本減るので12÷2=6羽',
    explanation:
      '【何を聞かれているか】鶴と亀が合わせて10匹いて、足の合計が28本のとき、鶴の数を求める。\n【なぜその式なのか】10匹すべてが亀だったと仮定して足の数を計算し、実際との差を求める。この差は、亀を鶴に置きかえるたびに減る足の数（差）で割り切れるはずなので、置きかえた数（鶴の数）がわかる。\n【ステップ1】10匹すべてが亀（足4本）だったと仮定した足の数を求める。4×10＝40本。\n【ステップ2】実際の足の数との差を求める。40−28＝12本。\n【ステップ3】亀1匹を鶴1羽に置きかえるたびに足の数は4−2＝2本ずつ減る。12÷2＝6。鶴は6羽。\n【答え】6羽\n【確かめ】亀は4匹となり、2×6+4×4=12+16=28本で条件と一致する。\n【よくあるまちがい】鶴と亀の足の数の差（4本と2本）を逆にして計算してしまう。\n【ここが絶対】つるかめ算は「全部一方だったと仮定する→実際との差を求める→1匹あたりの差で割る」という手順で解く。',
    difficulty: 'basic',
  },
  {
    id: 'sansu_05',
    subject: 'sansu',
    question: '時速60kmで2時間30分走ると何km？',
    answer: '150km',
    hint: '2時間30分 = 2.5時間',
    explanation:
      '【何を聞かれているか】時速60kmで2時間30分走ったときに進む道のり。\n\n【まずそろえる】時速は「1時間あたりに進む道のり」なので、かける相手も時間の単位でないとかみ合わない。2時間30分のまま60にかけてはいけない。\n\n【ステップ1】30分を時間に直す。1時間は60分なので\n　30 ÷ 60 ＝ 0.5時間\n　よって 2時間30分 ＝ 2.5時間\n\n【ステップ2】道のり ＝ 速さ × 時間\n　60 × 2.5 ＝ 150\n\n【答え】150km\n\n【確かめ】2時間で120km、残り30分は1時間の半分なので30km。合わせて150kmで合う。\n\n【よくあるまちがい】\n・2時間30分を 2.3時間 としてしまう。時間は60進法なので、30分は0.3ではなく0.5。15分なら0.25、45分なら0.75。\n・そのまま 60 × 2.5 の代わりに 60 × 230 のように分で計算してしまう。単位をそろえるのを先にやる。',
    difficulty: 'basic',
  },
  {
    id: 'sansu_06',
    subject: 'sansu',
    question: '3/4 + 5/6 = ？',
    answer: '19/12（1と7/12）',
    hint: '通分: 12が共通分母',
    explanation:
      '【何を聞かれているか】分母のちがう分数のたし算。\n\n【なぜ通分するのか】3/4 は「4等分したうちの3つ」、5/6 は「6等分したうちの5つ」。1つぶんの大きさがちがうので、そのままでは足せない。同じ大きさにそろえてから足す。これが通分。\n\n【ステップ1】分母4と6の最小公倍数をさがす。4の倍数は4・8・12…、6の倍数は6・12…なので12。\n\n【ステップ2】どちらも分母12に直す。\n　3/4 ＝ 9/12（分母分子を3倍）\n　5/6 ＝ 10/12（分母分子を2倍）\n\n【ステップ3】分子どうしを足す。分母はそのまま。\n　9/12 ＋ 10/12 ＝ 19/12\n\n【答え】19/12（帯分数なら 1と7/12）\n\n【よくあるまちがい】\n・分母どうしも足して 8/10 としてしまう。足すのは分子だけ。分母は「1つぶんの大きさ」を表しているので変えない。\n・分母を 4 × 6 ＝ 24 にしてもまちがいではないが（18/24 ＋ 20/24 ＝ 38/24）、最後に約分が必要になる。最小公倍数を使うほうが楽。\n・答えが仮分数のままでよいか、帯分数に直すかは問題の指示にしたがう。',
    difficulty: 'basic',
  },
  {
    id: 'sansu_07',
    subject: 'sansu',
    question: '1辺が8cmの正方形に、2本の対角線を引きました。正方形は4つの合同な三角形に分かれます。その三角形1個の面積は何cm²ですか。',
    answer: '16cm²',
    hint: 'まず正方形全体の面積を出して、4等分する。',
    explanation:
      '【何を聞かれているか】1辺8cmの正方形に2本の対角線を引いてできる4つの合同な三角形1個の面積を求める。\n【なぜその式なのか】正方形の2本の対角線は、長さが等しく直角に交わり、たがいをまん中で2等分する。この性質から正方形は合同な三角形4つにきっちり分かれるので、正方形全体の面積を4等分すればよい。\n【ステップ1】正方形全体の面積を求める。8×8＝64cm²。\n【ステップ2】対角線の性質から、正方形は合同な三角形4つに分かれるので、64÷4＝16cm²。\n【ステップ3】別の見方でも確認する。三角形1個は、底辺が正方形の1辺8cm、高さがその半分の4cm（対角線の交点は正方形の中心にあるため）。8×4÷2＝16cm²で一致する。\n【答え】16cm²\n【確かめ】2つの求め方（全体を4等分する方法と、底辺×高さ÷2の方法）で同じ16cm²になることを確認する。\n【よくあるまちがい】三角形の高さを、正方形の1辺（8cm）のままにしてしまい、半分の4cmにすることを忘れる。\n【ここが絶対】対角線そのものの長さを求める必要はなく、「対角線×対角線÷2」で正方形の面積を求める方法や、対角線の交点が正方形の中心にあることを利用すれば、小学校の範囲でも面積が求められる。',
    difficulty: 'basic',
  },
  {
    id: 'sansu_08',
    subject: 'sansu',
    question: '整数の中で、1と自分自身しか約数を持たない数を何という？',
    answer: '素数',
    explanation:
      '【何を聞かれているか】整数の中で、1と自分自身しか約数を持たない数を何というかを答える。\n【なぜその式なのか】約数の個数によって、整数は「素数」「合成数」「1」の3種類に分けられる。約数がちょうど2個（1と自分自身）だけの整数を素数という。\n【ステップ1】約数が1と自分自身の2個しかない整数を考える。例えば2の約数は1と2の2個だけ、3の約数は1と3の2個だけ。\n【ステップ2】このような整数を素数という（2,3,5,7,11,13,…）。\n【ステップ3】1は約数が1個しかない（1のみ）ので素数にはふくめない。4は約数が1,2,4の3個あるので素数ではなく合成数という。\n【答え】素数\n【確かめ】4は1,2,4の3つの約数を持つので合成数であり、2は1,2の2つの約数しか持たないので素数であることを見比べて確認する。\n【よくあるまちがい】1を素数にふくめてしまう（1は約数が1個しかないので素数ではない）。\n【ここが絶対】偶数の素数は2だけで、それ以外の素数はすべて奇数であることも覚えておく。',
    difficulty: 'basic',
  },
  {
    id: 'sansu_09',
    subject: 'sansu',
    question: '12%の食塩水200gに含まれる食塩の量は？',
    answer: '24g',
    hint: '200 × 0.12 = 24',
    explanation:
      '【何を聞かれているか】食塩水の中に、食塩が何g入っているか。\n\n【まず意味をつかむ】12%とは「食塩水100gのうち12gが食塩」という意味。だから食塩水が200gなら、その2倍で24gになる、と見当がつく。\n\n【ステップ1】%を小数に直す。\n　12% ＝ 0.12（100で割る）\n\n【ステップ2】食塩水全体の重さに、割合をかける。\n　200 × 0.12 ＝ 24\n\n【答え】24g\n\n【残りは水】200 − 24 ＝ 176g が水。食塩水＝水＋食塩なので、この2つを足すともとにもどる。\n\n【よくあるまちがい】\n・%のまま 200 × 12 ＝ 2400 としてしまう。100倍ずれるので、必ず小数に直してからかける。\n・分母を水の重さにしてしまう。濃度の基準は「食塩水全体」で、水だけではない。',
    difficulty: 'basic',
  },
  {
    id: 'sansu_10',
    subject: 'sansu',
    question: '90を素因数分解すると？',
    answer: '2 × 3² × 5',
    explanation:
      '【何を聞かれているか】90を、素数のかけ算だけの形に分ける。\n\n【素因数分解とは】どんな整数も、素数（1とその数自身でしか割れない数）のかけ算でただ1通りに表せる。その形を見つける作業。\n\n【ステップ1】小さい素数から順に割っていく。\n　90 ÷ 2 ＝ 45\n　45 ÷ 3 ＝ 15\n　15 ÷ 3 ＝ 5\n　5 ÷ 5 ＝ 1\n\n【ステップ2】使った素数をすべてかけ算の形に並べる。\n　90 ＝ 2 × 3 × 3 × 5\n　同じ数が2回出てくるので、指数を使って 2 × 3の2乗 × 5 とも書ける。\n\n【答え】2 × 3 × 3 × 5\n\n【確かめ】2 × 3 ＝ 6、6 × 3 ＝ 18、18 × 5 ＝ 90 でもとにもどる。\n\n【何の役に立つか】\n・約数の個数がすぐ出る。指数に1を足してかけると（1＋1）×（2＋1）×（1＋1）＝12個。\n・最大公約数・最小公倍数も、素因数を見くらべるだけで求まる。\n\n【よくあるまちがい】\n・途中でやめて 90 ＝ 9 × 10 とする。9も10も素数ではないので、まだ分けられる。1になるまで割り切る。\n・割る順番を変えても、出てくる素数の組み合わせは必ず同じになる。',
    difficulty: 'basic',
  },
  {
    id: 'sansu_11',
    subject: 'sansu',
    question: '三角形の内角の和は何度？',
    answer: '180度',
    explanation:
      '【何を聞かれているか】三角形の内角の和が何度かを答える。\n【なぜその式なのか】三角形の3つの角を切り取って1つの点にならべると、ちょうど一直線になる。一直線は180度なので、どんな形の三角形でも内角の和は180度になる。\n【ステップ1】三角形の3つの角を切り取って、1点にすき間なくならべることを考える。\n【ステップ2】ならべると、ちょうど一直線（180度）になる。\n【ステップ3】これはどんな形の三角形でも成り立つので、三角形の内角の和はつねに180度。\n【答え】180度\n【確かめ】四角形は三角形2つ分に分けられるので360度、n角形は(n-2)×180度になることも、この性質から導ける。\n【よくあるまちがい】三角形の内角の和を、四角形の内角の和（360度）と混同してしまう。\n【ここが絶対】三角形の内角の和は必ず180度であることを、図形の問題を解く最初の一手として確認する。',
    difficulty: 'basic',
  },
  {
    id: 'sansu_12',
    subject: 'sansu',
    question: '100円の品物を30%引きで買うといくら？',
    answer: '70円',
    hint: '100 × (1 - 0.3) = 70',
    explanation:
      '【何を聞かれているか】100円の品物を30%引きで買うといくらになるかを求める。\n【なぜその式なのか】30%引きとは、もとの値段から30%を引いて買うことなので、支払う金額はもとの値段の残り70%にあたる。もとの値段に(1−割引率)をかけると一度に計算できる。\n【ステップ1】30%引きなので、支払う金額はもとの値段の100%−30%＝70%にあたる。\n【ステップ2】100円の70%を計算する。100×0.7。\n【ステップ3】計算すると100×0.7＝70。70円。\n【答え】70円\n【確かめ】100×0.3=30円(引かれる額)を100から引いても100-30=70円と同じ答えになる。\n【よくあるまちがい】引かれる金額（30円）自体を答えにしてしまう。\n【ここが絶対】「○%引き」の値段は、もとの値段に(1−割引率)をかけると一度に計算できる。',
    difficulty: 'basic',
  },
  {
    id: 'sansu_13',
    subject: 'sansu',
    question: '1辺10cmの立方体の体積は？',
    answer: '1000cm³',
    hint: '体積 = 辺 × 辺 × 辺',
    explanation:
      '【何を聞かれているか】立方体の中に、1辺1cmの小さな立方体が何個つまるか。\n\n【まず形をイメージする】1辺10cmの立方体に、1cmのサイコロをつめていく。よこに10個ならび、それがおくに10列、さらに10段つみ重なる。だから 10 × 10 × 10 で個数が出る。これが体積の意味。\n\n【ステップ1】まず1段ぶん（底面）を数える。\n　10 × 10 ＝ 100個\n\n【ステップ2】それが10段つみ重なる。\n　100 × 10 ＝ 1000個\n\n【答え】1000cm³\n\n【覚えておくと便利】1000cm³ ＝ 1L。だから1辺10cmの立方体は、ちょうど牛乳パック1本ぶんの大きさ。1cm³ ＝ 1mL でもある。\n\n【よくあるまちがい】\n・10 × 10 ＝ 100 で止めてしまう。それは底面積で、まだ高さをかけていない。\n・単位を cm² と書いてしまう。体積なので cm³。',
    difficulty: 'basic',
  },
  {
    id: 'sansu_14',
    subject: 'sansu',
    question: '速さ・時間・距離の関係式は？',
    answer: '距離 = 速さ × 時間',
    explanation:
      '【何を聞かれているか】速さ・時間・距離の3つの関係を表す式。\n【なぜその式なのか】速さとは「**1時間（1分）あたりに進む距離**」のこと。時速60kmなら1時間に60km進むので、2時間なら60×2＝120km進む。つまり 距離＝速さ×時間 は、「1時間ぶんの距離を、時間の数だけ集める」というかけ算である。\n【ステップ1】距離＝速さ×時間。\n【ステップ2】この式を逆算すると、速さ＝距離÷時間（何時間で何km進んだかから1時間ぶんを出す）、時間＝距離÷速さ（1時間ぶんが何回入るか）も出る。\n【答え】距離＝速さ×時間（速さ＝距離÷時間、時間＝距離÷速さ）\n【確かめ】時速60kmで2時間なら距離120km。120÷2＝60（速さ）、120÷60＝2（時間）と、どの式でも同じ数にもどる。\n【よくあるまちがい】単位をそろえずに計算する。分速で時間が「時間」で与えられたら、先に分に直す（1時間＝60分）。「みはじ」の図は便利だが、**速さ＝1時間あたりの距離**という意味を覚えておくと、図を忘れても式を作れる。',
    difficulty: 'basic',
  },
  {
    id: 'sansu_15',
    subject: 'sansu',
    question: '2けたの整数で、十の位と一の位の数字の和が9になるものは何個？',
    answer: '9個（18, 27, 36, 45, 54, 63, 72, 81, 90）',
    explanation:
      '【何を聞かれているか】2けたの整数のうち、十の位と一の位の数字をたすと9になるものの個数。\n【なぜその式なのか】十の位を1つ決めると、一の位は「9−十の位」と**自動的に1つに決まる**。だから、個数は「十の位に使える数字が何通りあるか」と同じになる。十の位は0にできない（0だと1けたになる）ので1〜9の9通り。\n【ステップ1】十の位が1なら一の位は8 → 18。十の位が2なら7 → 27。\n【ステップ2】同じように 36、45、54、63、72、81、90 と続く。\n【ステップ3】十の位1〜9で1つずつなので9個。\n【答え】9個（18, 27, 36, 45, 54, 63, 72, 81, 90）\n【確かめ】並べた9個はどれも数字の和が9で、9ずつ増えている（18、27、36…）。9の倍数のうち2けたで、99（和が18）を除いたものと一致する。\n【よくあるまちがい】「09」を数えて10個にしてしまう。09は2けたの整数ではない。逆に90（一の位が0）を見落として8個にするのもよくある。',
    difficulty: 'basic',
  },
  {
    id: 'sansu_16',
    subject: 'sansu',
    question: '0.75を分数で表すと？',
    answer: '3/4',
    hint: '0.75 = 75/100 = 3/4',
    explanation:
      '【何を聞かれているか】0.75 という小数を、分数の形で表す。\n\n【なぜ分母が100なのか】小数第1位は10分の1の位、小数第2位は100分の1の位。0.75 は小数第2位まであるので、100等分したうちの75個ぶん、という意味になる。\n\n【ステップ1】そのまま分数にする。\n　0.75 ＝ 75/100\n\n【ステップ2】約分する。分母と分子を同じ数で割っても大きさは変わらない。75と100の最大公約数は25。\n　75 ÷ 25 ＝ 3\n　100 ÷ 25 ＝ 4\n　よって 3/4\n\n【答え】3/4\n\n【確かめ方】3 ÷ 4 ＝ 0.75 でもとにもどる。分数を小数に直すときは、分子を分母で割る。\n\n【よくあるまちがい】\n・約分し忘れて 75/100 のままにする。分数は、これ以上約分できない形にして答える。\n・小数第1位までなら分母は10（0.7＝7/10）、第3位までなら分母は1000（0.125＝125/1000＝1/8）。位の数と0の数が同じになる。',
    difficulty: 'basic',
  },
  {
    id: 'sansu_17',
    subject: 'sansu',
    question: '1km = 何m？',
    answer: '1000m',
    explanation:
      '【何を聞かれているか】1kmが何mにあたるかを答える。\n【なぜその式なのか】k（キロ）は1000倍を表す記号なので、1kmは1mの1000倍、つまり1000mにあたる。\n【ステップ1】k（キロ）という記号が「1000倍」を表すことを確認する。\n【ステップ2】1km＝1×1000m。\n【ステップ3】よって1km＝1000m。\n【答え】1000m\n【確かめ】同じように1kg＝1000g、1kL＝1000Lになることも、kが1000倍を表す記号だと確認できる。\n【よくあるまちがい】kmとmの関係を、100倍や10000倍のように勘違いしてしまう。\n【ここが絶対】k（キロ）は1000倍、m（ミリ）は1000分の1を表す記号であることを覚えておく。',
    difficulty: 'basic',
  },
  {
    id: 'sansu_18',
    subject: 'sansu',
    question: '底辺12cm、高さ8cmの三角形の面積は？',
    answer: '48cm²',
    hint: '面積 = 底辺 × 高さ ÷ 2',
    explanation:
      '【何を聞かれているか】三角形の面積。\n\n【なぜ÷2をするのか】同じ三角形をもう1つ用意して、さかさまにしてくっつけると、平行四辺形ができる。その平行四辺形の面積は 底辺 × 高さ。三角形はそのちょうど半分なので、最後に2で割る。\n\n【ステップ1】まず平行四辺形（三角形2つぶん）の面積を出す。\n　12 × 8 ＝ 96\n\n【ステップ2】三角形はその半分。\n　96 ÷ 2 ＝ 48\n\n【答え】48cm²\n\n【よくあるまちがい】\n・÷2 を忘れて96と答えてしまう。いちばん多いまちがい。「三角形を見たら、まず2つくっつける」と思い出す。\n・高さに、ななめの辺の長さを使ってしまう。高さは必ず底辺と垂直な長さ。図にかかれた垂直の印（小さな四角）をさがす。\n・底辺と高さは、垂直になっている組であればどこを選んでもよい。同じ三角形なら、どの組で計算しても答えは同じになる。',
    difficulty: 'basic',
  },
  {
    id: 'sansu_19',
    subject: 'sansu',
    question: '240の約数の個数は？',
    answer: '20個',
    hint: '240 = 2⁴ × 3 × 5。約数の個数 = (4+1)(1+1)(1+1) = 20',
    explanation:
      '【何を聞かれているか】240の約数（240をわり切れる整数）が全部で何個あるか。\n【なぜその式なのか】約数は、240を素数のかけ算に分けたときの部品を「何個使うか」の組み合わせでできる。240＝2×2×2×2×3×5 なので、2は0〜4個（5通り）、3は0〜1個（2通り）、5は0〜1個（2通り）の選び方があり、その**組み合わせの数**が約数の個数になる。「0個使う」も1通りに数えるので、それぞれ（個数＋1）通りになる。\n【ステップ1】240を素数に分ける。240＝2×2×2×2×3×5（2が4個、3が1個、5が1個）。\n【ステップ2】それぞれの選び方は（4＋1）通り、（1＋1）通り、（1＋1）通り。\n【ステップ3】（4＋1）×（1＋1）×（1＋1）＝5×2×2＝20。\n【答え】20個\n【確かめ】小さい順に書き出すと 1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 16, 20, 24, 30, 40, 48, 60, 80, 120, 240 で20個。\n【よくあるまちがい】「＋1」を忘れて 4×1×1＝4 としてしまう。「使わない（0個）」という選び方があるので、必ず**個数＋1**をかける。',
    difficulty: 'basic',
  },
  {
    id: 'sansu_20',
    subject: 'sansu',
    question: '1時間20分 = 何分？',
    answer: '80分',
    explanation:
      '【何を聞かれているか】1時間20分を、分だけで表す。\n\n【なぜそうなるか】時間は10ずつではなく60ずつくり上がる（60進法）。だから1時間は60分で、100分ではない。\n\n【ステップ1】1時間を分に直す。\n　1時間 ＝ 60分\n\n【ステップ2】残りの20分を足す。\n　60 ＋ 20 ＝ 80分\n\n【答え】80分\n\n【逆向きも覚えておく】分から時間にもどすときは60で割る。\n　80 ÷ 60 ＝ 1あまり20 → 1時間20分\n\n【よくあるまちがい】\n・1時間20分を120分としてしまう（1時間を100分と数えた）。時計は60でくり上がる。\n・速さの問題で「時速」と「分」が混ざったまま計算してしまう。時速なら時間に、分速なら分にそろえてから式に入れる。',
    difficulty: 'basic',
  },

  // --- standard (20問) ---
  {
    id: 'sansu_21',
    subject: 'sansu',
    question: 'A, B, Cの3人がある仕事をすると、AとBで6日、BとCで4日、AとCで12日かかる。3人一緒だと何日かかるか？',
    answer: '4日',
    hint: '1日の仕事量: A+B=1/6, B+C=1/4, A+C=1/12。合計÷2でA+B+C=1/4',
    explanation:
      '【何を聞かれているか】A,B,Cの3人が仕事をすると、AとBで6日、BとCで4日、AとCで12日かかるとき、3人一緒だと何日かかるかを求める。\n【なぜその式なのか】仕事全体を1として、それぞれのペアの1日の仕事量を分数で表す。3つのペアの仕事量をすべて足すと、A・B・Cそれぞれの仕事量をちょうど2回ずつ数えたことになるので、2で割れば3人合計の1日の仕事量がわかる。\n【ステップ1】1日の仕事量は、A+B＝1/6、B+C＝1/4、A+C＝1/12。\n【ステップ2】この3つをすべてたす。通分すると1/6+1/4+1/12＝2/12+3/12+1/12＝6/12＝1/2。これはA+B+Cの2つ分にあたるので、A+B+C＝1/2÷2＝1/4。\n【ステップ3】1÷(1/4)＝4なので、3人一緒だと4日で終わる。\n【答え】4日\n【確かめ】A+B=1/6、B+C=1/4、A+C=1/12という3つの条件から、A+B+C=1/4が求まることを確認する。\n【よくあるまちがい】3つのペアの仕事量をたした合計を、そのままA+B+Cの仕事量だと考えてしまう（実際には2倍になっているので2で割る必要がある）。\n【ここが絶対】2人ずつの組み合わせがすべて与えられている問題では、3つの式をすべてたすと、各人の仕事量がちょうど2回ずつ数えられることを利用する。',
    difficulty: 'standard',
  },
  {
    id: 'sansu_22',
    subject: 'sansu',
    question: '兄と弟が家から公園まで歩く。兄は分速80m、弟は分速60mで、兄が出発して5分後に弟が出発した。弟が出発してから何分後に兄と弟の差が500mになるか？',
    answer: '5分後',
    hint: '弟が出発した時点で兄は80×5=400m先にいる。その後1分ごとに差は80-60=20mずつ広がるので、差＝20t+400。500=20t+400を解く。',
    explanation:
      '【何を聞かれているか】兄（分速80m）が出発して5分後に弟（分速60m）が出発したとき、弟が出発してから何分後に2人の差が500mになるかを求める。\n【なぜその式なのか】弟が出発した時点で、兄はすでに先に進んでいる。同じ方向に進む2人の間の差は、1分ごとに速さの差だけ広がっていくので、目標の差になるまでの時間が求まる。\n【ステップ1】弟が出発した時点で、兄はすでに80×5＝400m先にいる。\n【ステップ2】そのあとは1分ごとに80−60＝20mずつ差が開く。\n【ステップ3】差が500mになるのは、あと500−400＝100m開いたとき。100÷20＝5なので5分後。\n【答え】5分後\n【確かめ】弟が出発してから5分後、兄は出発から10分で800m、弟は5分で300m進んでおり、差は800-300=500mと一致する。\n【よくあるまちがい】弟が出発した時点ですでに開いている400mの差を考えずに、500÷20=25分のように計算してしまう。\n【ここが絶対】あとから出発した人を基準に考えるときは、先に出発した人がすでに進んでいる分の差を最初に求めてから、残りの差を速さの差で割る。',
    difficulty: 'standard',
  },
  {
    id: 'sansu_23',
    subject: 'sansu',
    question: '池の周りに木を植える。周囲が120mの池に8m間隔で植えると何本必要か？',
    answer: '15本',
    hint: '池の周り（円形）は植木算で 120 ÷ 8 = 15本',
    explanation:
      '【何を聞かれているか】周囲120mの池のまわりに8m間隔で木を植えるとき、必要な本数を求める。\n【なぜその式なのか】池のまわりのように輪になっている（閉じた）図形の場合は、木の本数と間の数がちょうど同じになる（輪になっているので、最後の木と最初の木がつながるため）。\n【ステップ1】池のまわりの長さ120mを、木の間隔8mで割って間の数を求める。120÷8＝15（間）。\n【ステップ2】輪になっている場合は、木の本数＝間の数になる。\n【ステップ3】よって木の本数は15本。\n【答え】15本\n【確かめ】まっすぐな道で両はしにも木を植える場合は、間の数より1本多くなる（このちがいを区別する）。\n【よくあるまちがい】まっすぐな道の場合と同じように考えて、間の数に1を足してしまう。\n【ここが絶対】池や正方形のまわりのように輪になった（閉じた）図形に等間隔で並べる場合、本数は間の数とちょうど同じになる。',
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
    explanation:
      '【何を聞かれているか】円柱の体積。\n\n【なぜ底面積×高さなのか】円柱は、底面の円をそのまま真上に積み上げた形。だから1段ぶんの広さ（底面積）に、何段ぶん積んだか（高さ）をかければ体積になる。角柱でも同じ式が使える。\n\n【ステップ1】底面の円の面積を出す。半径 × 半径 × 円周率。\n　3 × 3 ＝ 9\n　9 × 3.14 ＝ 28.26cm2\n\n【ステップ2】高さをかける。\n　28.26 × 10 ＝ 282.6\n\n【答え】282.6cm3\n\n【計算を楽にするこつ】3.14は最後に1回だけかける。\n　3 × 3 × 10 ＝ 90 を先に出して、90 × 3.14 ＝ 282.6 としても同じ。こちらのほうが小数のかけ算が1回ですむ。\n\n【よくあるまちがい】\n・直径を半径として使ってしまう。問題に直径が書いてあるときは、まず半分にする。\n・単位を cm2 と書いてしまう。体積なので cm3。\n・円すいと混同して3で割ってしまう。3で割るのは とがった立体（すい）のほうだけ。',
    difficulty: 'standard',
  },
  {
    id: 'sansu_27',
    subject: 'sansu',
    question: '1, 3, 6, 10, 15, … の数列の第10項は？',
    answer: '55',
    hint: '三角数: 第n項 = n(n+1)/2。第10項 = 10×11/2',
    explanation:
      '【何を聞かれているか】1, 3, 6, 10, 15, … と続く数列の10番目の数。\n【なぜその式なのか】この数列は 1、1＋2、1＋2＋3、1＋2＋3＋4、… と、**1から順にたした合計**になっている（三角数）。□番目の数は 1＋2＋…＋□ で、この和は「1から□までを2組並べると（□＋1）が□個できる」ことから □×（□＋1）÷2 で求められる。\n【ステップ1】10番目は 1＋2＋3＋…＋10。\n【ステップ2】10×（10＋1）÷2＝10×11÷2。\n【ステップ3】110÷2＝55。\n【答え】55\n【確かめ】差が2, 3, 4, …と1ずつ増えるので、15のあとは 21, 28, 36, 45, 55 と続き、10番目は55で一致する。\n【よくあるまちがい】差が一定だと思って「15＋5×5」のように等差で計算してしまう。**差そのものが1ずつ増えている**数列なので、差の変化を先に確かめること。',
    difficulty: 'standard',
  },
  {
    id: 'sansu_28',
    subject: 'sansu',
    question: '5人から3人を選ぶ組み合わせは何通り？',
    answer: '10通り',
    hint: '5×4×3 ÷ (3×2×1) = 10（並べ方÷選んだ3人の並べ方）',
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
    explanation:
      '【何を聞かれているか】正六角形の1つの内角の大きさ。\n\n【なぜその式になるのか】六角形は、1つの頂点から対角線を引くと三角形4つに分けられる。三角形の内角の和は180度なので、六角形の内角の和は 180 × 4 ＝ 720度。一般に n角形なら三角形が（n−2）個できるので、内角の和は（n−2）× 180度。\n\n【ステップ1】内角の和を出す。\n　（6 − 2）× 180 ＝ 4 × 180 ＝ 720度\n\n【ステップ2】正六角形は6つの角がすべて等しいので、6で割る。\n　720 ÷ 6 ＝ 120度\n\n【答え】120度\n\n【外角から出すともっと速い】多角形の外角の和は、何角形でも必ず360度。だから1つの外角は 360 ÷ 6 ＝ 60度、内角はそのとなりで 180 − 60 ＝ 120度。角の数が多い正多角形ほど、この方法が速い。\n\n【よくあるまちがい】\n・内角の和720度をそのまま答えてしまう。聞かれているのは1つぶん。\n・（n−2）ではなく n をそのままかけてしまう。三角形に分けた図を思いうかべると、なぜ2を引くのか見える。\n・この式が使えるのは「正」多角形のときだけ（角がすべて等しいから割れる）。',
    difficulty: 'standard',
  },
  {
    id: 'sansu_33',
    subject: 'sansu',
    question: 'A君は毎分50枚、B君は毎分30枚のチラシを配る。2人合わせて1600枚を配り終えるのに何分かかるか？',
    answer: '20分',
    hint: '1分間に合計80枚。1600 ÷ 80 = 20分',
    explanation:
      '【何を聞かれているか】2人で協力したとき、1600枚を配り終えるまでの時間。\n\n【まず考え方】2人が同時に配るので、1分間に配れる枚数は2人ぶんを足したものになる。これを「合わせた速さ」と考えると、あとはわり算1回で終わる。\n\n【ステップ1】1分間に2人で何枚配れるかを出す。\n　50 ＋ 30 ＝ 80枚／分\n\n【ステップ2】1600枚の中に、80枚が何回分あるかを数える。\n　1600 ÷ 80 ＝ 20\n\n【答え】20分\n\n【確かめ方】20分でA君は 50 × 20 ＝ 1000枚、B君は 30 × 20 ＝ 600枚。合わせて1600枚でちょうど配り終える。\n\n【よくあるまちがい】\n・時間どうしを足したり平均したりする。足せるのは「1分あたりにできる量」のほうで、時間ではない。ここは仕事算でも同じ考え方を使う。\n・1人分で計算してしまう（1600÷50＝32分）。2人でやるのだから、それより短くなるはず、と答えの見当をつけておくと気づける。',
    difficulty: 'standard',
  },
  {
    id: 'sansu_34',
    subject: 'sansu',
    question: '1辺6cmの正方形の面積と等しい円の半径は？（π = 3.14、小数第2位まで）',
    answer: '約3.39cm',
    hint: '3.14 × r² = 36 → r² ≈ 11.46 → r ≈ 3.39',
    explanation: '正方形の面積は 6×6＝36cm²。\n円の面積＝半径×半径×3.14 なので 3.14×r×r＝36。\nr×r＝36÷3.14＝約11.4650。\n3.38×3.38＝11.4244、3.39×3.39＝11.4921 なので、半径は 3.38と3.39のあいだ。\nくわしく計算すると 3.3860… なので、小数第2位まで四捨五入して 約3.39cm。',
    difficulty: 'standard',
  },
  {
    id: 'sansu_35',
    subject: 'sansu',
    question: '赤球3個、白球2個の計5個から2個取り出すとき、2個とも赤球である確率は？',
    answer: '3/10',
    hint: '5個から2個の選び方は 5×4÷2＝10通り、赤2個の選び方は 3×2÷2＝3通り',
    explanation:
      '【何を聞かれているか】5個の球から2個取り出したとき、2個とも赤である確率。\n\n【確率の考え方】確率は「当てはまる取り出し方 ÷ 全部の取り出し方」。どの球も同じくらい取り出されやすい、という前提で数える。\n\n【ステップ1】全部の取り出し方を数える。5個から2個を選ぶので\n　5 × 4 ÷ 2 ＝ 10通り\n　÷2 をするのは、同じ2個の組を（A,B）と（B,A）で二重に数えているから。\n\n【ステップ2】2個とも赤になる取り出し方を数える。赤は3個あるので、その3個から2個を選ぶ。\n　3 × 2 ÷ 2 ＝ 3通り\n\n【ステップ3】割り算する。\n　3 ÷ 10 ＝ 3/10\n\n【答え】3/10\n\n【よくあるまちがい】\n・同じ色の球を区別せずに数えてしまう。赤が3個あるなら、赤1・赤2・赤3と区別して数えないと「どれも同じくらい起こりやすい」という前提がくずれ、確率がずれる。\n・÷2 を忘れて20通りとしてしまう。取り出す順番は関係ないので、必ず2で割る。\n・答えが1をこえたら、必ずどこかで数えまちがえている。',
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
    explanation:
      '【何を聞かれているか】0・1・2・3の4枚から3枚を選んで3けたの整数を作る方法の数。\n\n【ここが仕掛け】0を百の位に置くと3けたにならない（012は12になってしまう）。だから条件のついている百の位から先に決める。\n\n【ステップ1】百の位を決める。0は使えないので 1・2・3 の3通り。\n\n【ステップ2】十の位を決める。百の位で1枚使ったので、残りは3枚。ここでは0も使えるので3通り。\n\n【ステップ3】一の位を決める。残り2枚なので2通り。\n\n【ステップ4】それぞれ枝分かれするのでかけ算。\n　3 × 3 × 2 ＝ 18\n\n【答え】18通り\n\n【なぜかけ算なのか】百の位を1つ決めるたびに、そのそれぞれについて十の位が3通りずつ枝分かれする。足し算ではなくかけ算になるのはこのため。\n\n【よくあるまちがい】\n・0を気にせず 4 × 3 × 2 ＝ 24通り としてしまう。そのうち百の位が0のものが6通りあり、それを引くと18通りになる（24 − 6 ＝ 18）。どちらの数え方でも同じ答えになる。\n・条件のついた位をあとまわしにすると、場合分けが増えて混乱する。制限のある位から決めるのが鉄則。',
    difficulty: 'standard',
  },
  {
    id: 'sansu_39',
    subject: 'sansu',
    question: '2辺が6cmと8cm、その間の角が90°の三角形の面積は？',
    answer: '24cm²',
    hint: '直角三角形の面積 = 6 × 8 ÷ 2',
    explanation:
      '【何を聞かれているか】2辺とその間の角が90度と分かっている三角形の面積。\n\n【ここが仕掛け】ふつう三角形の面積には「底辺」と、それに垂直な「高さ」が必要で、高さは図から読み取らないといけない。ところが間の角が90度なら、その2辺はすでに垂直に交わっているので、片方を底辺、もう片方をそのまま高さとして使える。高さをさがす手間がまるごと省ける。\n\n【ステップ1】6cmを底辺、8cmを高さとして、三角形2つぶんを出す。\n　6 × 8 ＝ 48\n\n【ステップ2】三角形はその半分。\n　48 ÷ 2 ＝ 24\n\n【答え】24cm²\n\n【よくあるまちがい】\n・斜辺（いちばん長い辺）を使ってしまう。使うのは直角をはさむ2辺で、斜辺は面積には関係しない。\n・÷2 を忘れる。直角三角形は長方形を半分に切った形だと考えると、÷2 の意味が見える。',
    difficulty: 'standard',
  },
  {
    id: 'sansu_40',
    subject: 'sansu',
    question: '兄は2段ずつ、弟は3段ずつ階段を上る。二人が同時に同じ段に立つ最初の段は何段目か？（1段から始まる）',
    answer: '6段目',
    hint: '2と3の最小公倍数 = 6',
    explanation:
      '【何を聞かれているか】2段ずつ上る兄と、3段ずつ上る弟が、初めて同じ段に立つのは何段目か。\n\n【まず整理する】兄がふむのは 2・4・6・8… と2の倍数の段。弟がふむのは 3・6・9… と3の倍数の段。2人が同じ段に立つのは、どちらの倍数にもなっている段、つまり公倍数の段。\n\n【ステップ1】初めて重なるのは、いちばん小さい公倍数（最小公倍数）。\n　2の倍数：2、4、6、8、10、12…\n　3の倍数：3、6、9、12…\n　初めて共通するのは6\n\n【答え】6段目\n\n【確かめ】兄は3歩で 2 × 3 ＝ 6段目、弟は2歩で 3 × 2 ＝ 6段目。たしかに同じ段に立つ。\n\n【次に重なるのは】6の倍数の段なので、12段目・18段目…と6段おきに重なる。\n\n【よくあるまちがい】\n・2 × 3 ＝ 6 と計算して正解するが、たまたま合っているだけ。2と3のように公約数が1しかない組（互いに素）のときだけ、かけ算が最小公倍数になる。4と6なら 4 × 6 ＝ 24 ではなく12が正解。\n・最大公約数と取りちがえる。「初めて重なる」「同時にそろう」は公倍数、「等分に分ける」「あまりなく切り分ける」は公約数。',
    difficulty: 'standard',
  },

  // --- advanced (10問) ---
  {
    id: 'sansu_41',
    subject: 'sansu',
    question: '半径10cmの円に内接する正六角形があります。この正六角形は1辺10cmの正三角形6個に分けられ、正三角形1個の面積は43.3cm²です。正六角形の面積は何cm²ですか。',
    answer: '259.8cm²',
    hint: '円に内接する正六角形は、1辺が円の半径と同じ長さになる。',
    explanation: '【解説】\n円の中心から正六角形の6つの頂点へ線を引くと、三角形が6個できる。\n中心から頂点までは円の半径なのでどれも10cm。中心のまわりの角は 360÷6＝60°、残り2つの角も (180−60)÷2＝60° なので、3辺が10cmの正三角形になる。\nつまり「円に内接する正六角形の1辺は、円の半径と同じ」。\n正三角形1個が43.3cm²なので 43.3 × 6 ＝ 259.8cm²。\n【こつ】円と正六角形が出てきたら、まず中心から頂点へ線を引く。半径＝1辺 という関係が見えて、あとは正三角形6個ぶんで片づく。',
    difficulty: 'advanced',
  },
  {
    id: 'sansu_42',
    subject: 'sansu',
    question: '1辺6cmの正四面体があります。展開図は1辺6cmの正三角形4枚になります。正三角形1枚の面積が15.59cm²のとき、正四面体の表面積は何cm²ですか。',
    answer: '約62.36cm²',
    hint: '正四面体は合同な正三角形4枚で囲まれている。',
    explanation: '【解説】\n正四面体は、合同な正三角形4枚で囲まれた立体。だから表面積は正三角形4枚ぶん。\n15.59 × 4 ＝ 62.36cm²\n【展開図との関係】展開図は正三角形4枚がつながった形なので、展開図の面積と表面積は同じ値になる。表面積を聞かれたら「開いて平らにしたときの面積」と考えればよい。\n【注意】正四面体の体積を求めるには中学以上の内容が必要になる。表面積なら、面の枚数を数えるだけで出せる。',
    difficulty: 'advanced',
  },
  {
    id: 'sansu_43',
    subject: 'sansu',
    question: 'ある池に鯉がいる。最初に全体の1/3の鯉を捕まえて逃がし、次に残りの1/4を捕まえて逃がした。さらに残りの1/5を捕まえて逃がしたとき、まだ捕まえていない鯉は最初の何分の何か？',
    answer: '最初の2/5',
    hint: '(1-1/3)×(1-1/4)×(1-1/5) = 2/3×3/4×4/5 = 24/60 = 2/5',
    explanation:
      '【何を聞かれているか】3回続けて「残りの一部」を捕まえたあと、まだ捕まえていない鯉が最初の何分の何か。\n【なぜその式なのか】「残りの1/4を捕まえる」は、そのときの残りの 1−1/4＝3/4 が残ることと同じ。もとにする量が「最初の全体」ではなく「**そのときの残り**」に変わるので、割合はたし算ではなく**かけ算でつなぐ**。\n【ステップ1】1回目のあと残るのは 1−1/3＝2/3（最初の）。\n【ステップ2】2回目のあと残るのは、その 3/4 なので 2/3×3/4。\n【ステップ3】3回目のあと残るのは、さらに 4/5 なので 2/3×3/4×4/5＝24/60＝2/5。となり合う分母と分子（3と3、4と4）が約分できるので、実際には 2/5 とすぐに出る。\n【答え】最初の2/5\n【確かめ】最初を60匹とすると、1回目で20匹捕まえて残り40匹、2回目で10匹捕まえて残り30匹、3回目で6匹捕まえて残り24匹。24÷60＝2/5 で一致する。\n【よくあるまちがい】1/3＋1/4＋1/5 をたして「捕まえた割合」とし、1から引いてしまう。2回目以降の分数は**最初の全体に対する割合ではない**ので、たしてはいけない。',
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
    hint: '1分あたり: Aは1/12ふえる、Bは1/18ふえる、Cは1/9へる。3/36＋2/36 から 4/36 を引いて 1/36',
    explanation: '水そう全体を1として、1分あたりに増える量で考える。\nAは1分に1/12ふやし、Bは1/18ふやし、Cは出す方なので1/9へらす。\n分母を36にそろえて、ふえる分 3/36＋2/36＝5/36 から、へる分 4/36 を引いて 1/36。\n1分で1/36ずつたまるので 1÷(1/36)＝36分。',
    difficulty: 'advanced',
  },
  {
    id: 'sansu_46',
    subject: 'sansu',
    question: '1辺10cmの正方形ABCDがある。辺BC上の点EをBE:EC=2:3となるようにとる。AEの延長とDCの延長の交点をFとする。△DEFの面積は？',
    answer: '75cm²',
    hint: 'BE=4cm, EC=6cm。△ABEと△FECの相似を利用する',
    explanation: '1辺10cm、BE:EC＝2:3 なので BE＝4cm、EC＝6cm。\n直線AEと辺DCの延長が交わる点をFとすると、△ABEと△FCEは相似で、相似比は EB:EC＝4:6＝2:3。\nよって CF＝AB×3/2＝15cm。\n底辺 DF＝DC+CF＝10+15＝25cm、高さは EからDCまでの 10−4＝6cm なので 25×6÷2＝75cm²。\n★注意：F は直線AE上にとった点なので、A・E・F は一直線に並ぶ。したがって「△AEF」は三角形にならない。面積を考えられるのは △DEF である。',
    difficulty: 'advanced',
  },
  {
    id: 'sansu_47',
    subject: 'sansu',
    question: '牧場に牛がいて、牧草を食べている。最初10頭の牛が20日で草を食べ尽くし、15頭では12日で食べ尽くす。25頭では何日で食べ尽くすか？（ニュートン算）',
    answer: '20/3日（6と2/3日＝6日と16時間）',
    hint:
      '牛1頭が1日に食べる量を①とする。10頭20日と15頭12日で食べた量の差（200−180）は、日数の差8日にはえた草の量。ここから1日にはえる量と最初の草の量を出し、25頭では「1日に減る量＝25−はえる量」でわる。',
    explanation:
      '【何を聞かれているか】草が毎日はえ続ける牧場で、25頭の牛が草を食べ尽くすまでの日数（ニュートン算）。\n【なぜその式なのか】草は「最初からある分」と「毎日はえる分」の2つからできている。牛が食べた量は、その両方の合計に等しい。2つの条件（10頭で20日、15頭で12日）を比べると、**日数のちがい（8日）のぶんだけ、はえた草の量がちがう**。ここから1日にはえる量が分かり、最初の草の量も分かる。牛1頭が1日に食べる量を①と決めて計算する。\n【ステップ1】10頭×20日＝200（食べた量）。15頭×12日＝180。\n【ステップ2】差の20は、20日と12日の差＝8日ぶんにはえた草。1日にはえる草は 20÷8＝2.5。\n【ステップ3】最初の草は、200から20日ぶんのはえた草を引いて 200−2.5×20＝150。\n【ステップ4】25頭なら、1日に食べる25から、はえる2.5を引いた 25−2.5＝22.5 ずつ最初の草が減る。150÷22.5＝20/3＝6と2/3日。\n【答え】20/3日（6と2/3日＝6日と16時間）\n【確かめ】6と2/3日で牛が食べる量は 25×20/3＝500/3、草は 150＋2.5×20/3＝150＋50/3＝500/3 で一致する。\n【よくあるまちがい】はえる草を考えずに「200÷25＝8日」としてしまう。答えが分数（6と2/3日）になっても計算ミスとは限らないので、上のように検算で確かめる。',
    difficulty: 'advanced',
  },
  {
    id: 'sansu_48',
    subject: 'sansu',
    question: '半径6cmの円と半径4cmの円が外接しています。2つの円の中心を結んだ長さは何cmですか。また、2つの円の面積の比を最も簡単な整数の比で答えなさい。',
    answer: '中心間10cm、面積の比 9:4',
    hint: '外接するとき、中心と接点は一直線にならぶ。面積の比は半径の比を2回かける。',
    explanation: '【解説】\n（中心を結んだ長さ）2つの円が外側で接するとき、接点は2つの中心を結ぶ線の上にある。中心から接点までがそれぞれの半径なので、中心間の長さは 6 ＋ 4 ＝ 10cm。\n（面積の比）円の面積は 半径×半径×円周率。円周率はどちらも同じなので、面積の比は「半径×半径」の比になる。\n6×6 : 4×4 ＝ 36 : 16 ＝ 9 : 4\n【こつ】相似な図形では、長さの比が a:b なら面積の比は a×a : b×b。円はどれも相似なので、半径の比をそのまま2回かければよい。',
    difficulty: 'advanced',
  },
  {
    id: 'sansu_49',
    subject: 'sansu',
    question: '整数1から200までの中で、3でも5でも割り切れない整数は何個？',
    answer: '107個',
    hint: '3の倍数: 66個、5の倍数: 40個、15の倍数: 13個。200-(66+40-13)=107',
    explanation:
      '【何を聞かれているか】1から200までのうち、3でも5でもわり切れない整数の個数。\n【なぜその式なのか】「どちらでもわり切れない」数を直接数えるのは大変なので、**全体から「3か5でわり切れる数」を引く**。ただし、3の倍数と5の倍数をそのままたすと、15の倍数（3でも5でもわり切れる数）を2回数えてしまうので、1回ぶん引いてもどす。\n【ステップ1】3の倍数は 200÷3＝66あまり2 → 66個。5の倍数は 200÷5＝40個。\n【ステップ2】両方に入っている15の倍数は 200÷15＝13あまり5 → 13個。\n【ステップ3】3か5でわり切れる数は 66＋40−13＝93個。\n【ステップ4】200−93＝107個。\n【答え】107個\n【確かめ】1〜15の中で3でも5でもわり切れない数は 1, 2, 4, 7, 8, 11, 13, 14 の8個。200÷15＝13あまり5 なので、13周期で 8×13＝104個、残りの196〜200のうち該当は 196, 197, 199 の3個で 104＋3＝107 と一致する。\n【よくあるまちがい】15の倍数を引き忘れて 200−（66＋40）＝94 としてしまう。2つの仲間に**両方入っている数**は必ず1回ぶんもどす。',
    difficulty: 'advanced',
  },
  {
    id: 'sansu_50',
    subject: 'sansu',
    question: '正方形の各辺の中点を結んで正方形を作り、さらにその正方形の各辺の中点を結んで正方形を作る。この操作を繰り返す。元の正方形の面積が64cm²のとき、6番目にできる正方形の面積は？（元の正方形の次にできたものを1番目とする）',
    answer: '1cm²',
    hint: '各回で面積は1/2になる。元の正方形の次にできたものを1番目と数えると 64→32→16→8→4→2→1',
    explanation:
      '【何を聞かれているか】各辺の中点を結んで正方形を作る操作を6回くり返したとき、6番目にできる正方形の面積。\n【なぜその式なのか】各辺の中点を結んでできる正方形は、もとの正方形の4つのすみにできる直角三角形を切り落とした形で、この4つの三角形を集めると、ちょうど**内側の正方形と同じ面積**になる。つまり、1回操作するごとに面積は半分になる。\n【ステップ1】64→32（1番目）→16（2番目）→8（3番目）。\n【ステップ2】→4（4番目）→2（5番目）→1（6番目）。\n【答え】1cm²\n【確かめ】半分にする操作を6回なので 64÷2÷2÷2÷2÷2÷2＝64÷64＝1。2を6回かけると64なので、ちょうど1になる。\n【よくあるまちがい】もとの正方形を1番目と数えて、5回しか半分にせず2cm²と答える。「元の正方形の次にできたものを1番目」という問題の数え方を先に確かめること。また、辺が半分になると思って面積を1/4にしてしまうのもよくある（辺は半分にはならない）。',
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
    explanation:
      '【何を聞かれているか】\n「以心伝心」の意味を答える力が問われている。\n\n【なぜそうなるのか】\n「心を以て心に伝う」と読み下し、もとは仏教でさとりを言葉ではなく師から弟子の心へ直接伝えることを表した。\n\n【ステップ1】\n言葉にしなくてもたがいの気持ちが通じ合うという意味の広がりを確認する。\n\n【ステップ2】\n「以心伝心でパスが通った」という使い方を確認する。\n\n【答え】\n言葉を使わなくても、心と心が通じ合うこと\n\n【確かめ】\nもとは仏教用語だったことも再確認する。\n\n【よくあるまちがい】\n単なる偶然の一致だと誤解しないこと。\n\n【ここが絶対】\n仲のよい人どうしの通じ合いに使うことを押さえる。',
    difficulty: 'basic',
  },
  {
    id: 'kokugo_02',
    subject: 'kokugo',
    question: '「光陰矢の如し」の意味は？',
    answer: '時間は矢のように速く過ぎ去るということ',
    explanation:
      '【何を聞かれているか】\n「光陰矢の如し」の意味を答える力が問われている。\n\n【なぜそうなるのか】\n「光」（昼）「陰」（夜）を合わせた「光陰」が年月・時間を表し、その時間が矢のように速く飛び去るという意味である。\n\n【ステップ1】\n「光陰」が時間を表す語であることを確認する。\n\n【ステップ2】\n「少年老い易く学成り難し」とセットで使われることを確認する。\n\n【答え】\n時間は矢のように速く過ぎ去るということ\n\n【確かめ】\n時間を大切にせよという教えであることも再確認する。\n\n【よくあるまちがい】\n「光陰」を単なる光と影の意味だと誤解しないこと。\n\n【ここが絶対】\n月日はあっという間に過ぎるという意味を押さえる。',
    difficulty: 'basic',
  },
  {
    id: 'kokugo_03',
    subject: 'kokugo',
    question: '「七転び八起き」の意味は？',
    answer: '何度失敗してもあきらめずに立ち上がること',
    explanation:
      '【何を聞かれているか】\n「七転び八起き」の意味を答える力が問われている。\n\n【なぜそうなるのか】\n七回ころんでも八回起き上がるという数の対比で、何度失敗してもあきらめないことを表す。\n\n【ステップ1】\n起きる回数が1回多いのは最後には必ず立ち上がることを示すためであることを確認する。\n\n【ステップ2】\n似た意味の四字熟語「不撓不屈」も確認する。\n\n【答え】\n何度失敗してもあきらめずに立ち上がること\n\n【確かめ】\n転んだ回数より起きた回数が多いという形にこのことわざの意味があることも再確認する。\n\n【よくあるまちがい】\n「七」「八」を正確な回数として考えすぎないこと。\n\n【ここが絶対】\n最後は必ず立ち上がっているところに意味があることを押さえる。',
    difficulty: 'basic',
  },
  {
    id: 'kokugo_04',
    subject: 'kokugo',
    question: '「一石二鳥」の意味は？',
    answer: '一つの行動で二つの利益を得ること',
    explanation:
      '【何を聞かれているか】\n「一石二鳥」の意味を答える力が問われている。\n\n【なぜそうなるのか】\n一つの石を投げて二羽の鳥を落とすという英語のことわざから来た言葉で、一つの行いで二つの得をすることをいう。\n\n【ステップ1】\n似た意味の「一挙両得」を確認する。\n\n【ステップ2】\n反対の意味の「虻蜂取らず」を確認する。\n\n【答え】\n一つの行動で二つの利益を得ること\n\n【確かめ】\n英語の「kill two birds with one stone」と同じ発想であることも再確認する。\n\n【よくあるまちがい】\n「虻蜂取らず」（反対の意味）と混同しないこと。\n\n【ここが絶対】\n一つの行動で二つの利益を得ることを押さえる。',
    difficulty: 'basic',
  },
  {
    id: 'kokugo_05',
    subject: 'kokugo',
    question: '「温故知新」の意味は？',
    answer: '古いことを学び直し、新しい知識を得ること',
    explanation:
      '【何を聞かれているか】\n「温故知新」の意味を答える力が問われている。\n\n【なぜそうなるのか】\n「故きを温ねて新しきを知る」と読み下し、昔のことをよく学び直すと新しい知識や考えが見つかるということを表す。\n\n【ステップ1】\n出典が『論語』であることを確認する。\n\n【ステップ2】\n「温」がここでは「くり返し学ぶ」という意味であることを確認する。\n\n【答え】\n古いことを学び直し、新しい知識を得ること\n\n【確かめ】\n歴史や古典を学ぶ理由としてよく引用されることも再確認する。\n\n【よくあるまちがい】\n「温」を「あたためる」という文字通りの意味で読まないこと。\n\n【ここが絶対】\n昔のことを学ぶことが新しい発見につながるという教えを押さえる。',
    difficulty: 'basic',
  },
  {
    id: 'kokugo_06',
    subject: 'kokugo',
    question: '「花鳥風月」の意味は？',
    answer: '自然の美しい景色・風雅なこと',
    explanation:
      '【何を聞かれているか】\n「花鳥風月」の意味を答える力が問われている。\n\n【なぜそうなるのか】\n花・鳥・風・月という自然を代表する四つのものを並べた言葉で、自然の美しい景色や風流な心を表す。\n\n【ステップ1】\n「花鳥風月を楽しむ」という使い方を確認する。\n\n【ステップ2】\n和歌や俳句の題材そのものをさすこともあることを確認する。\n\n【答え】\n自然の美しい景色・風雅なこと\n\n【確かめ】\n四つの漢字がそれぞれ自然の代表的なものを表すことも再確認する。\n\n【よくあるまちがい】\n単に4つの言葉を並べただけだと軽く扱わないこと。\n\n【ここが絶対】\n自然の美しさとそれを味わう風流な心を表すことを押さえる。',
    difficulty: 'basic',
  },
  {
    id: 'kokugo_07',
    subject: 'kokugo',
    question: '「付和雷同」の意味は？',
    answer: '自分の意見を持たず、むやみに他人に同調すること',
    explanation:
      '【何を聞かれているか】\n「付和雷同」の意味を答える力が問われている。\n\n【なぜそうなるのか】\n「付和」（考えもなく人に合わせる）と「雷同」（雷が鳴るとまわりの物が一斉に響くように他人につられる）が合わさり、自分の意見を持たずすぐ人に同調することを表す。\n\n【ステップ1】\nよくない意味で使われることを確認する。\n\n【ステップ2】\n反対の意味の「独立独歩」「自主自立」を確認する。\n\n【答え】\n自分の意見を持たず、むやみに他人に同調すること\n\n【確かめ】\n「付和」を「不和」と書きまちがえないことも再確認する。\n\n【よくあるまちがい】\n「独立独歩」（反対の意味）と混同しないこと。\n\n【ここが絶対】\n自分の意見を持たずに同調することが悪い意味で使われることを押さえる。',
    difficulty: 'basic',
  },
  {
    id: 'kokugo_08',
    subject: 'kokugo',
    question: '「急がば回れ」の意味は？',
    answer: '急ぐときほど、安全な方法を選んだほうが結局早い',
    explanation:
      '【何を聞かれているか】\n「急がば回れ」の意味を答える力が問われている。\n\n【なぜそうなるのか】\n琵琶湖を渡るとき舟の近道は強い風で危ないため遠回りでも陸の橋を回れという歌から、急ぐときほど安全な方法を選んだほうが結局早いという教えを表す。\n\n【ステップ1】\n由来（琵琶湖の渡り方）を確認する。\n\n【ステップ2】\n「せいては事を仕損じる」という似た意味の言葉も確認する。\n\n【答え】\n急ぐときほど、安全な方法を選んだほうが結局早い\n\n【確かめ】\n一見矛盾しているが真理を含む逆説の一例であることも再確認する。\n\n【よくあるまちがい】\n「急ぐ」のに「回れ」という表現を単純に矛盾だと考えないこと。\n\n【ここが絶対】\n危険な近道より確実で安全な方法を選ぶことの大切さを押さえる。',
    difficulty: 'basic',
  },
  {
    id: 'kokugo_09',
    subject: 'kokugo',
    question: '「五里霧中」の意味は？',
    answer: '物事の見通しが全くつかず、どうすればよいか分からない状態',
    explanation:
      '【何を聞かれているか】\n「五里霧中」の意味を答える力が問われている。\n\n【なぜそうなるのか】\n「五里（約20km）にわたる霧の中」という意味で、深い霧の中にいるように見通しが全くつかない状態を表す。\n\n【ステップ1】\n「五里夢中」と書くのは誤りであることを確認する。\n\n【ステップ2】\n似た意味の「暗中模索」（手さぐりであれこれ試す点が違う）と区別する。\n\n【答え】\n物事の見通しが全くつかず、どうすればよいか分からない状態\n\n【確かめ】\n「夢」ではなく「霧」であることも再確認する。\n\n【よくあるまちがい】\n「五里夢中」と書きまちがえないこと。\n\n【ここが絶対】\n霧の中にいれば進む方向が分からないという由来から意味を思い出すことを押さえる。',
    difficulty: 'basic',
  },
  {
    id: 'kokugo_10',
    subject: 'kokugo',
    question: '「起承転結」の意味は？',
    answer: '文章や話の構成：起こし・受けて・転じて・まとめる',
    explanation:
      '【何を聞かれているか】\n「起承転結」の意味を答える力が問われている。\n\n【なぜそうなるのか】\n漢詩（絶句）の組み立て方からきた言葉で、起＝話をおこす、承＝それを受けて続ける、転＝話をがらりと変える、結＝全体をまとめるという構成を表す。\n\n【ステップ1】\n4つの段階それぞれの役割を確認する。\n\n【ステップ2】\n作文や物語の組み立てを考えるときの型として使えることを確認する。\n\n【答え】\n文章や話の構成：起こし・受けて・転じて・まとめる\n\n【確かめ】\n漢詩（絶句）の組み立て方が由来であることも再確認する。\n\n【よくあるまちがい】\n4つの段階の順番を入れかえないこと。\n\n【ここが絶対】\n「転」で話をがらりと変えることが特徴であることを押さえる。',
    difficulty: 'basic',
  },
  {
    id: 'kokugo_11',
    subject: 'kokugo',
    question: '「縦」の反対語は？',
    answer: '横',
    explanation:
      '【何を聞かれているか】\n「縦」の反対語を答える力が問われている。\n\n【なぜそうなるのか】\n「縦（たて）」は上下の方向、「横（よこ）」は左右の方向で、たがいに直角に交わる関係にある。\n\n【ステップ1】\n「縦書きと横書き」という対の使い方を確認する。\n\n【ステップ2】\n「縦社会と横のつながり」という比喩的な使い方も確認する。\n\n【答え】\n横\n\n【確かめ】\n「明」が日と月を合わせた会意文字であるような漢字の成り立ちの話とは別であることも再確認する。\n\n【よくあるまちがい】\n方向の対を漢字の意味だけで判断しないこと。\n\n【ここが絶対】\n上下と左右という直角に交わる方向を表すことを押さえる。',
    difficulty: 'basic',
  },
  {
    id: 'kokugo_12',
    subject: 'kokugo',
    question: '「喜怒哀楽」の意味は？',
    answer: '喜び・怒り・悲しみ・楽しみの4つの感情',
    explanation:
      '【何を聞かれているか】\n「喜怒哀楽」の意味を答える力が問われている。\n\n【なぜそうなるのか】\n喜（よろこび）・怒（いかり）・哀（かなしみ）・楽（たのしみ）の四つの漢字がそのまま代表的な感情を表している。\n\n【ステップ1】\n4つの漢字それぞれの意味を確認する。\n\n【ステップ2】\n「喜怒哀楽が激しい」という使い方を確認する。\n\n【答え】\n喜び・怒り・悲しみ・楽しみの4つの感情\n\n【確かめ】\n人間のさまざまな感情をまとめていう言葉であることも再確認する。\n\n【よくあるまちがい】\n4つのうちどれか一つだけの意味だと考えないこと。\n\n【ここが絶対】\n漢字がそのまま感情を表していることを押さえる。',
    difficulty: 'basic',
  },
  {
    id: 'kokugo_13',
    subject: 'kokugo',
    question: '「臨機応変」の意味は？',
    answer: '状況に応じて、その場で適切な対応をすること',
    explanation:
      '【何を聞かれているか】\n「臨機応変」の意味を答える力が問われている。\n\n【なぜそうなるのか】\n「機に臨んで変に応ず」と読み下し、決まったやり方にこだわらずその場に合わせてちょうどよい行動をすることを表す。\n\n【ステップ1】\n「機」（その場のようす）「変」（変化のこと）の意味を確認する。\n\n【ステップ2】\n反対の意味「杓子定規」（決まり通りにしかできないこと）を確認する。\n\n【答え】\n状況に応じて、その場で適切な対応をすること\n\n【確かめ】\n「杓子定規」との対比も再確認する。\n\n【よくあるまちがい】\n決まったやり方を守ることだと誤解しないこと。\n\n【ここが絶対】\nその場に合わせて柔軟に対応することを押さえる。',
    difficulty: 'basic',
  },
  {
    id: 'kokugo_14',
    subject: 'kokugo',
    question: '「切磋琢磨」の意味は？',
    answer: '友人同士で競い合い、互いに励まし向上すること',
    explanation:
      '【何を聞かれているか】\n「切磋琢磨」の意味を答える力が問われている。\n\n【なぜそうなるのか】\n「切」「磋」「琢」「磨」はどれも骨・角・玉・石をみがく作業を表す漢字（出典は『詩経』）で、もとは学問や人格をみがくことから仲間どうしがきそい合って高め合う意味になった。\n\n【ステップ1】\n4つの漢字がすべて「みがく」意味であることを確認する。\n\n【ステップ2】\n「ライバルと切磋琢磨する」という使い方を確認する。\n\n【答え】\n友人同士で競い合い、互いに励まし向上すること\n\n【確かめ】\nもとは学問や人格をみがくという意味だったことも再確認する。\n\n【よくあるまちがい】\n単なる競争心の意味だけで捉えないこと。\n\n【ここが絶対】\n仲間どうしがきそい合って高め合う意味を押さえる。',
    difficulty: 'basic',
  },
  {
    id: 'kokugo_15',
    subject: 'kokugo',
    question: '「自画自賛」の意味は？',
    answer: '自分で自分のことを褒めること',
    explanation:
      '【何を聞かれているか】\n「自画自賛」の意味を答える力が問われている。\n\n【なぜそうなるのか】\n自分でかいた絵（自画）に自分でほめる言葉（賛）を書きそえたことから、自分で自分をほめることを表す。\n\n【ステップ1】\n「賛」が絵にそえる詩や文で本来は他人が書くものであることを確認する。\n\n【ステップ2】\n少し照れやからかいをふくんで使われることを確認する。\n\n【答え】\n自分で自分のことを褒めること\n\n【確かめ】\n本来は他人が書くものだったという由来も再確認する。\n\n【よくあるまちがい】\n純粋にほめる言葉だけの意味だと考えないこと。\n\n【ここが絶対】\n自分で自分をほめる様子を表すことを押さえる。',
    difficulty: 'basic',
  },
  {
    id: 'kokugo_16',
    subject: 'kokugo',
    question: '「猿も木から落ちる」の意味は？',
    answer: 'その道の名人・達人でも失敗することがある',
    explanation:
      '【何を聞かれているか】\n「猿も木から落ちる」の意味を答える力が問われている。\n\n【なぜそうなるのか】\n木登りの名人である猿でも木から落ちることがあるというたとえから、その道の達人でも失敗することがあるという意味を表す。\n\n【ステップ1】\n猿が木登りの名人であることを確認する。\n\n【ステップ2】\n同じ意味の「弘法にも筆の誤り」「河童の川流れ」を確認する。\n\n【答え】\nその道の名人・達人でも失敗することがある\n\n【確かめ】\n同じ構造のことわざが複数あることも再確認する。\n\n【よくあるまちがい】\n猿の生態の話だと表面的に捉えないこと。\n\n【ここが絶対】\nその道の第一人者でも失敗することがあるという教えを押さえる。',
    difficulty: 'basic',
  },
  {
    id: 'kokugo_17',
    subject: 'kokugo',
    question: '「明るい」の反対語は？',
    answer: '暗い',
    explanation:
      '【何を聞かれているか】\n「明るい」の反対語を答える力が問われている。\n\n【なぜそうなるのか】\n「明るい」は光が多くてよく見えるようす、「暗い」は光が少ないようすで正反対の対義語である。\n\n【ステップ1】\n性格についても「明るい人」「暗い人」と対で使うことを確認する。\n\n【ステップ2】\n漢字の「明」が日と月を合わせて光を表す会意文字であることを確認する。\n\n【答え】\n暗い\n\n【確かめ】\n光の量による対比であることも再確認する。\n\n【よくあるまちがい】\n性格の意味だけで対義語を考えないこと。\n\n【ここが絶対】\n光の多さによる正反対の意味であることを押さえる。',
    difficulty: 'basic',
  },
  {
    id: 'kokugo_18',
    subject: 'kokugo',
    question: '「一長一短」の意味は？',
    answer: '長所もあれば短所もあること',
    explanation:
      '【何を聞かれているか】\n「一長一短」の意味を答える力が問われている。\n\n【なぜそうなるのか】\n「長」（長所）と「短」（短所）が合わさり、一つ長所があれば一つ短所もある、つまり完全なものはないという意味を表す。\n\n【ステップ1】\n「長」と「短」の意味をそれぞれ確認する。\n\n【ステップ2】\n「どちらの案も一長一短だ」という使い方を確認する。\n\n【答え】\n長所もあれば短所もあること\n\n【確かめ】\n比べて決めにくいときに使われることも再確認する。\n\n【よくあるまちがい】\nどちらか一方だけが優れているという意味だと誤解しないこと。\n\n【ここが絶対】\n完全なものはないという意味を押さえる。',
    difficulty: 'basic',
  },
  {
    id: 'kokugo_19',
    subject: 'kokugo',
    question: '「雨降って地固まる」の意味は？',
    answer: 'もめごとや困難があっても、その後かえって物事がうまくおさまる',
    explanation:
      '【何を聞かれているか】\n「雨降って地固まる」の意味を答える力が問われている。\n\n【なぜそうなるのか】\n雨が降ったあとは土がしまってかえって地面がしっかりするというたとえから、もめごとがあってもそのあとかえって前よりよい状態に落ち着くという意味を表す。\n\n【ステップ1】\n土がしまるという由来を確認する。\n\n【ステップ2】\nけんかのあとに仲直りしたときなどに使われることを確認する。\n\n【答え】\nもめごとや困難があっても、その後かえって物事がうまくおさまる\n\n【確かめ】\n対句の対句法とは異なる別の由来を持つことも再確認する。\n\n【よくあるまちがい】\n雨が降ることが単に悪いことだけを表すと考えないこと。\n\n【ここが絶対】\n困難のあとにかえって良い状態になることを押さえる。',
    difficulty: 'basic',
  },
  {
    id: 'kokugo_20',
    subject: 'kokugo',
    question: '「木を見て森を見ず」の意味は？',
    answer: '細かいことにこだわって、全体を見失うこと',
    explanation:
      '【何を聞かれているか】\n「木を見て森を見ず」の意味を答える力が問われている。\n\n【なぜそうなるのか】\n一本一本の木ばかり見ていると森全体のようすが分からないというたとえから、細かい部分にこだわりすぎて全体や大切なことを見失うことを表す。\n\n【ステップ1】\n木と森の対比を確認する。\n\n【ステップ2】\n算数の見直しや文章の読み取りでも使える言葉であることを確認する。\n\n【答え】\n細かいことにこだわって、全体を見失うこと\n\n【確かめ】\n全体を見る大切さを表す言葉であることも再確認する。\n\n【よくあるまちがい】\n木や森という言葉から自然の話だけだと考えないこと。\n\n【ここが絶対】\n細部にこだわりすぎて全体を見失うという教えを押さえる。',
    difficulty: 'basic',
  },

  // --- standard (20問) ---
  {
    id: 'kokugo_21',
    subject: 'kokugo',
    question: '「羊頭狗肉」の意味は？',
    answer: '見かけと実質が違うこと。外見は立派に見えても、中身が伴わないこと',
    explanation:
      '【何を聞かれているか】\n「羊頭狗肉」の意味を答える力が問われている。\n\n【なぜそうなるのか】\n「羊頭を懸けて狗肉を売る」の略で、店先に羊の頭をかざりながら実際は犬の肉を売ったことから、見かけと実質が違うことを表す。\n\n【ステップ1】\n店先の看板（羊頭）と実際の商品（狗肉）の食い違いを確認する。\n\n【ステップ2】\n「見かけだおし」と同じ意味であることを確認する。\n\n【答え】\n見かけと実質が違うこと。外見は立派に見えても、中身が伴わないこと\n\n【確かめ】\n悪い意味で使われることも再確認する。\n\n【よくあるまちがい】\n単に羊と犬の話だと文字通り読まないこと。\n\n【ここが絶対】\n看板と中身が一致しない様子を表すことを押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'kokugo_22',
    subject: 'kokugo',
    question: '「朝三暮四」の意味は？',
    answer: '目先のことにとらわれて、結果が同じであることに気づかないこと',
    explanation:
      '【何を聞かれているか】\n「朝三暮四」の意味を答える力が問われている。\n\n【なぜそうなるのか】\n猿にえさを「朝3つ夕方4つ」と言うと怒り「朝4つ夕方3つ」と言うと喜んだが合計は同じという荘子の話から、目先のちがいにとらわれて結果が同じであることに気づかないことを表す。\n\n【ステップ1】\n合計が同じであることを確認する。\n\n【ステップ2】\nうまい言葉で人をだますという意味でも使われることを確認する。\n\n【答え】\n目先のことにとらわれて、結果が同じであることに気づかないこと\n\n【確かめ】\n出典が『荘子』であることも再確認する。\n\n【よくあるまちがい】\n「朝令暮改」（方針がころころ変わる、別の意味）と混同しないこと。\n\n【ここが絶対】\n中身は同じなのに見せ方でだます話であることを押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'kokugo_23',
    subject: 'kokugo',
    question: '「先生に質問する」を丁寧な敬語（謙譲語）で言い換えると？',
    answer: '先生にお伺いする／先生に質問いたす',
    explanation:
      '【何を聞かれているか】\n「先生に質問する」を謙譲語で言い換える力が問われている。\n\n【なぜそうなるのか】\n謙譲語は自分（や身内）の動作をへりくだって言うことで相手を高める言い方であり、質問するのは自分なので「伺う」「お尋ねする」「質問いたす」に直す。\n\n【ステップ1】\n「お〜する」「〜いたす」「伺う」が謙譲語の代表的な形であることを確認する。\n\n【ステップ2】\n先生の動作なら「ご質問になる」という尊敬語にすることを確認する。\n\n【答え】\n先生にお伺いする／先生に質問いたす\n\n【確かめ】\n自分の動作か相手の動作かで敬語の種類が変わることも再確認する。\n\n【よくあるまちがい】\n先生の動作に謙譲語を使わないこと。\n\n【ここが絶対】\n質問するのが自分であることを確認して謙譲語を選ぶことを押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'kokugo_24',
    subject: 'kokugo',
    question: '「お客様がいらっしゃいました」の「いらっしゃる」は何語？',
    answer: '尊敬語（「来る・いる・行く」の尊敬語）',
    explanation:
      '【何を聞かれているか】\n「お客様がいらっしゃいました」の「いらっしゃる」が何語かを答える力が問われている。\n\n【なぜそうなるのか】\n「いらっしゃる」は「来る・行く・いる」の尊敬語で、相手（お客様）の動作を高める言い方である。\n\n【ステップ1】\n自分の動作なら謙譲語「参る」「伺う」「おる」を使うことを確認する。\n\n【ステップ2】\n「お客様が参りました」が誤りであることを確認する。\n\n【答え】\n尊敬語（「来る・いる・行く」の尊敬語）\n\n【確かめ】\n「いらっしゃいました」が正しい表現であることも再確認する。\n\n【よくあるまちがい】\n「お客様が参りました」のように謙譲語を相手の動作に使わないこと。\n\n【ここが絶対】\n動作の主体がだれかを確認して敬語を選ぶことを押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'kokugo_25',
    subject: 'kokugo',
    question: '「春はあけぼの。やうやう白くなりゆく山ぎは、少し明かりて…」は誰の作品か？',
    answer: '清少納言（枕草子）',
    explanation:
      '【何を聞かれているか】\n「春はあけぼの。やうやう白くなりゆく山ぎは、少し明かりて…」が誰の作品かを答える力が問われている。\n\n【なぜそうなるのか】\nこれは平安時代中期に一条天皇の中宮定子に仕えた清少納言の随筆『枕草子』の書き出しである。\n\n【ステップ1】\n「あけぼの」が夜明けを表し、春は夜明けがいちばんよいという書き出しであることを確認する。\n\n【ステップ2】\n「をかし」の文学と呼ばれることを確認する。\n\n【答え】\n清少納言（枕草子）\n\n【確かめ】\n「もののあはれ」の『源氏物語』との対比も再確認する。\n\n【よくあるまちがい】\n『源氏物語』と混同しないこと。\n\n【ここが絶対】\n「をかし」の文学であることを押さえる。',
    difficulty: 'standard',
    questionReading: '春はあけぼの。ようよう白くなりゆく山ぎわ、少し明かりて、は誰の作品か？',
    answerReading: '清少納言。まくらのそうし',
  },
  {
    id: 'kokugo_26',
    subject: 'kokugo',
    question: '「いづれの御時にか、女御・更衣あまた侍ひ給ひける中に…」は何という作品の冒頭か？',
    answer: '源氏物語（紫式部）',
    explanation:
      '【何を聞かれているか】\n「いづれの御時にか、女御・更衣あまた侍ひ給ひける中に…」が何という作品の冒頭かを答える力が問われている。\n\n【なぜそうなるのか】\nこれは平安時代（11世紀初め）に紫式部が書いた全五十四帖の長編物語『源氏物語』の冒頭である。\n\n【ステップ1】\n「いづれの御時にか」がどの帝の御代のことかという意味であることを確認する。\n\n【ステップ2】\n主人公が光源氏であることを確認する。\n\n【答え】\n源氏物語（紫式部）\n\n【確かめ】\n紫式部が中宮彰子に、清少納言が中宮定子に仕えていたという対比も再確認する。\n\n【よくあるまちがい】\n『枕草子』と混同しないこと。\n\n【ここが絶対】\n「あはれ」の文学であることを押さえる。',
    difficulty: 'standard',
    questionReading: 'いずれの御時にか、女御・更衣あまた仕えたてまつりたまいける中に、は何という作品の冒頭か？',
    answerReading: 'げんじものがたり。むらさきしきぶ',
  },
  {
    id: 'kokugo_27',
    subject: 'kokugo',
    question: '文「美しい花が咲いた」の主語と述語は？',
    answer: '主語: 花が、述語: 咲いた',
    explanation:
      '【何を聞かれているか】\n「美しい花が咲いた」の主語と述語を答える力が問われている。\n\n【なぜそうなるのか】\n述語は「どうする・どんなだ・何だ」にあたる言葉なので文の終わりの「咲いた」が述語となり、「何が咲いたのか」と問い返すと「花が」が主語となる。\n\n【ステップ1】\n文の終わりを見て述語を見つける。\n\n【ステップ2】\n「美しい」が「花」をくわしくする修飾語であり主語ではないことを確認する。\n\n【答え】\n主語: 花が、述語: 咲いた\n\n【確かめ】\n修飾語と主語を混同しないことも再確認する。\n\n【よくあるまちがい】\n「美しい」を主語だと考えないこと。\n\n【ここが絶対】\n述語から先に見つけて主語を問い返す手順を押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'kokugo_28',
    subject: 'kokugo',
    question: '「鼻が高い」（慣用句）の意味は？',
    answer: '自慢に思っている・誇らしい気持ちでいること',
    explanation:
      '【何を聞かれているか】\n「鼻が高い」（慣用句）の意味を答える力が問われている。\n\n【なぜそうなるのか】\n得意になると顔（鼻）を上に向けるようすから生まれた慣用句で、誇らしく思うことを表す。\n\n【ステップ1】\n「弟が優勝して家族は鼻が高い」という使い方を確認する。\n\n【ステップ2】\n「鼻にかける」（自慢していやみに見せる、悪い意味）と区別する。\n\n【答え】\n自慢に思っている・誇らしい気持ちでいること\n\n【確かめ】\n「鼻にかける」との違いも再確認する。\n\n【よくあるまちがい】\n「鼻にかける」と同じ意味だと混同しないこと。\n\n【ここが絶対】\n誇らしく思う気持ちを表すことを押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'kokugo_29',
    subject: 'kokugo',
    question: '「骨を折る」（慣用句）の意味は？',
    answer: '苦労する・一生懸命努力する',
    explanation:
      '【何を聞かれているか】\n「骨を折る」（慣用句）の意味を答える力が問われている。\n\n【なぜそうなるのか】\n実際に骨を折るのではなく、骨身をけずるほど力をつくすという意味の慣用句で、苦労する・一生懸命努力することを表す。\n\n【ステップ1】\n「友人のために骨を折る」という使い方を確認する。\n\n【ステップ2】\n「骨が折れる」（それをするのが大変だ、主語がちがう）と区別する。\n\n【答え】\n苦労する・一生懸命努力する\n\n【確かめ】\n特に人のために力をつくすときに使われることも再確認する。\n\n【よくあるまちがい】\n「骨が折れる」と使い分けを混同しないこと。\n\n【ここが絶対】\n文字通りの骨折ではないことを押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'kokugo_30',
    subject: 'kokugo',
    question: '「一日千秋」の意味は？',
    answer: '一日が千年のように感じるほど、ひたすら待ち遠しく思うこと',
    explanation:
      '【何を聞かれているか】\n「一日千秋」の意味を答える力が問われている。\n\n【なぜそうなるのか】\n「千秋」は千回の秋、つまり千年のことで、一日が千年に感じられるほど待ち遠しいという意味である。\n\n【ステップ1】\n「一日千秋の思いで待つ」という使い方を確認する。\n\n【ステップ2】\n読みが「いちじつせんしゅう」「いちにちせんしゅう」のどちらもあることを確認する。\n\n【答え】\n一日が千年のように感じるほど、ひたすら待ち遠しく思うこと\n\n【確かめ】\n「秋」が季節ではなく年月を表す言葉として使われていることも再確認する。\n\n【よくあるまちがい】\n「秋」を季節の意味だけで捉えないこと。\n\n【ここが絶対】\n待ち遠しさの程度を大げさに表す言葉であることを押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'kokugo_31',
    subject: 'kokugo',
    question: '「換骨奪胎」の意味は？',
    answer: '他人のアイデアや作品をもとにして、自分のものに作り直すこと',
    explanation:
      '【何を聞かれているか】\n「換骨奪胎」の意味を答える力が問われている。\n\n【なぜそうなるのか】\nもとは道教の言葉で骨を取りかえ胎を取りかえて生まれ変わるという意味から、古い作品の発想や表現をもとにして自分の作品として作りかえることを表す。\n\n【ステップ1】\n道教由来の語源を確認する。\n\n【ステップ2】\nそのまままねる「盗作」とは違うことを確認する。\n\n【答え】\n他人のアイデアや作品をもとにして、自分のものに作り直すこと\n\n【確かめ】\n詩や文章の世界で使われる言葉であることも再確認する。\n\n【よくあるまちがい】\n「盗作」と同じ意味だと誤解しないこと。\n\n【ここが絶対】\n作りかえて新しくする点がポイントであることを押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'kokugo_32',
    subject: 'kokugo',
    question: '次の文の敬語の誤りを直せ：「先生、私のお母さんが参ります」',
    answer: '「私のお母さん」→「私の母」（先生、私の母が参ります）',
    hint: '身内を敬語で表現するのは誤り。身内の動作には謙譲語を使う',
    explanation:
      '【何を聞かれているか】\n「先生、私のお母さんが参ります」の敬語の誤りを直す力が問われている。\n\n【なぜそうなるのか】\n先生に対して自分の母のことを話す場面なので身内である母を高めてはいけず、「私のお母さん」を「私の母」に直す必要がある。\n\n【ステップ1】\n謙譲語の「参ります」は正しいことを確認する。\n\n【ステップ2】\n「参ります」を「いらっしゃいます」に直すと身内に尊敬語を使うことになりかえって誤りになることを確認する。\n\n【答え】\n「私のお母さん」→「私の母」（先生、私の母が参ります）\n\n【確かめ】\n身内の動作には謙譲語を使うという決まりも再確認する。\n\n【よくあるまちがい】\n「参ります」を尊敬語に直さないこと。\n\n【ここが絶対】\n身内を敬語で表現するのは誤りであることを押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'kokugo_33',
    subject: 'kokugo',
    question: '「奥山に　もみぢ踏みわけ　鳴く鹿の　声きく時ぞ　秋は悲しき」の作者は？',
    answer: '猿丸大夫（百人一首第5番）',
    explanation:
      '【何を聞かれているか】\n「奥山に　もみぢ踏みわけ　鳴く鹿の　声きく時ぞ　秋は悲しき」の作者を答える力が問われている。\n\n【なぜそうなるのか】\nこれは百人一首の5番、猿丸大夫の歌で、山おくで落ち葉をふみわけて鳴く鹿の声を聞くと秋のさびしさがいっそう身にしみるという意味である。\n\n【ステップ1】\n鹿が秋を表す題材であることを確認する。\n\n【ステップ2】\nもとは『古今和歌集』に「よみ人しらず」として入っていることを確認する。\n\n【答え】\n猿丸大夫（百人一首第5番）\n\n【確かめ】\n百人一首の何番かもあわせて覚えることも再確認する。\n\n【よくあるまちがい】\n別の歌人と混同しないこと。\n\n【ここが絶対】\n鹿の声が秋のさびしさを強めることを押さえる。',
    difficulty: 'standard',
    answerReading: '猿丸大夫（さるまるだゆう）、百人一首第5番',
  },
  {
    id: 'kokugo_34',
    subject: 'kokugo',
    question: '「旧」の反対語（対義語）は？',
    answer: '新',
    explanation:
      '【何を聞かれているか】\n「旧」の反対語（対義語）を答える力が問われている。\n\n【なぜそうなるのか】\n「旧」は古い、「新」は新しいで、意味が正反対の対義語である。\n\n【ステップ1】\n「新旧」「旧式と新式」「旧暦と新暦」という組み合わせを確認する。\n\n【ステップ2】\n対義語は二字を並べた熟語（新旧・大小・強弱）にできるかで確かめられることを確認する。\n\n【答え】\n新\n\n【確かめ】\n二字を組み合わせても使えることも再確認する。\n\n【よくあるまちがい】\n意味の近い言葉と対義語を混同しないこと。\n\n【ここが絶対】\n正反対の意味を持つ言葉を選ぶことを押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'kokugo_35',
    subject: 'kokugo',
    question: '「機転が利く」の「機転」の意味は？',
    answer: 'その場の状況に応じて素早く適切な判断や行動ができること',
    explanation:
      '【何を聞かれているか】\n「機転が利く」の「機転」の意味を答える力が問われている。\n\n【なぜそうなるのか】\n「機」（きっかけ・その場のようす）＋「転」（素早く向きを変えること）が合わさり、その場の状況に応じてすぐに適切な考えや行動ができることを表す。\n\n【ステップ1】\n「機転が利く」の形で使われることを確認する。\n\n【ステップ2】\n四字熟語の「臨機応変」とほぼ同じ意味であることを確認する。\n\n【答え】\nその場の状況に応じて素早く適切な判断や行動ができること\n\n【確かめ】\n「臨機応変」との類似も再確認する。\n\n【よくあるまちがい】\n単なる頭の回転の速さだけの意味だと限定しないこと。\n\n【ここが絶対】\nその場に応じた適切な判断・行動を表すことを押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'kokugo_36',
    subject: 'kokugo',
    question: '「同音異義語」：「かんしん」を漢字で2種類書け（意味も示すこと）',
    answer: '感心（感動して心を動かされること）・関心（興味や注意を向けること）など',
    explanation:
      '【何を聞かれているか】\n「かんしん」を漢字で2種類書き、意味も示す力が問われている。\n\n【なぜそうなるのか】\n同音異義語で読みが同じで漢字と意味がちがう言葉であり、「感心」（りっぱだと心を動かされる）「関心」（興味を向ける）などがある。\n\n【ステップ1】\n「感」が感じる、「関」が関わるという漢字の意味を確認する。\n\n【ステップ2】\n「寒心」「歓心」という他の同音異義語もあることを確認する。\n\n【答え】\n感心（感動して心を動かされること）・関心（興味や注意を向けること）など\n\n【確かめ】\n「政治に関心がある」「努力に感心する」という使い分けの例も再確認する。\n\n【よくあるまちがい】\n「感心」と「関心」を混同しないこと。\n\n【ここが絶対】\n漢字の意味から使い分けることを押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'kokugo_37',
    subject: 'kokugo',
    question: '「枕草子」「方丈記」「徒然草」は合わせて何と呼ばれるか？',
    answer: '日本三大随筆',
    explanation:
      '【何を聞かれているか】\n「枕草子」「方丈記」「徒然草」が合わせて何と呼ばれるかを答える力が問われている。\n\n【なぜそうなるのか】\n見聞きしたことや感じたことを自由に書きつづった文章を随筆といい、この3作品を「日本三大随筆」という。\n\n【ステップ1】\n枕草子（清少納言・平安）、方丈記（鴨長明・鎌倉）、徒然草（兼好法師・鎌倉末期）という組を確認する。\n\n【ステップ2】\n「せい（清少納言）・かも（鴨長明）・けん（兼好）」という覚え方も確認する。\n\n【答え】\n日本三大随筆\n\n【確かめ】\nそれぞれの作者と時代の組もあわせて再確認する。\n\n【よくあるまちがい】\n作者と作品を取り違えないこと。\n\n【ここが絶対】\n3作品がすべて随筆というジャンルであることを押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'kokugo_38',
    subject: 'kokugo',
    question: '「弘法にも筆の誤り」のような意味を持つ英語のことわざは？',
    answer: 'Even Homer sometimes nods.（ホーマーでも居眠りする）',
    hint: '日本語での類義語「猿も木から落ちる」と同意',
    explanation:
      '【何を聞かれているか】\n「弘法にも筆の誤り」のような意味を持つ英語のことわざを答える力が問われている。\n\n【なぜそうなるのか】\n書の名人である弘法大師でも書きまちがえることがあるという意味に対応する英語のことわざは、古代ギリシアの大詩人ホメロスでもうたた寝するという「Even Homer sometimes nods.」である。\n\n【ステップ1】\n「弘法にも筆の誤り」の意味（名人でも失敗することがある）を確認する。\n\n【ステップ2】\n日本語の類義語「猿も木から落ちる」「河童の川流れ」も確認する。\n\n【答え】\nEven Homer sometimes nods.（ホーマーでも居眠りする）\n\n【確かめ】\n「猿も木から落ちる」との対応も再確認する。\n\n【よくあるまちがい】\n異なる意味の英語のことわざと混同しないこと。\n\n【ここが絶対】\nどんな名人でも失敗することがあるという共通の教えを押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'kokugo_39',
    subject: 'kokugo',
    question: '「転石苔を生やさず」のことわざの意味は？',
    answer: '一か所に落ち着かず転々とする人は、財産や知識・信用などが身につかないこと',
    explanation:
      '【何を聞かれているか】\n「転石苔を生やさず」のことわざの意味を答える力が問われている。\n\n【なぜそうなるのか】\n英語の「A rolling stone gathers no moss.」を訳したことわざで、転がり続ける石に苔が生えないように住む場所や仕事を次々に変える人には財産も信用も技術も身につかないという意味である。\n\n【ステップ1】\n石が転がり続けると苔が生えないという由来を確認する。\n\n【ステップ2】\nイギリスとアメリカで意味の受け取られ方が異なることを確認する。\n\n【答え】\n一か所に落ち着かず転々とする人は、財産や知識・信用などが身につかないこと\n\n【確かめ】\nアメリカでは「活動的な人はさびつかない」という良い意味でも使われることも再確認する。\n\n【よくあるまちがい】\nイギリス・アメリカでニュアンスが異なることを見落とさないこと。\n\n【ここが絶対】\n落ち着かないことのマイナス面を表す意味を押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'kokugo_40',
    subject: 'kokugo',
    question: '「ロミオとジュリエット」の作者は？',
    answer: 'ウィリアム・シェイクスピア',
    explanation:
      '【何を聞かれているか】\n「ロミオとジュリエット」の作者を答える力が問われている。\n\n【なぜそうなるのか】\n16〜17世紀イギリスの劇作家・詩人ウィリアム・シェイクスピアの作品で、敵対する二つの家に生まれた若い二人の悲恋を描いた悲劇である。\n\n【ステップ1】\nシェイクスピアがイギリスの劇作家であることを確認する。\n\n【ステップ2】\n四大悲劇「ハムレット」「マクベス」「オセロ」「リア王」も確認する。\n\n【答え】\nウィリアム・シェイクスピア\n\n【確かめ】\n四大悲劇のタイトルもあわせて覚えることも再確認する。\n\n【よくあるまちがい】\n四大悲劇と「ロミオとジュリエット」を混同しないこと。\n\n【ここが絶対】\nシェイクスピアがイギリスの劇作家であることを押さえる。',
    difficulty: 'standard',
  },

  // --- advanced (10問) ---
  {
    id: 'kokugo_41',
    subject: 'kokugo',
    question: '「春の海　終日（ひねもす）のたり　のたりかな」の作者と、この俳句が表す情景を説明せよ。',
    answer: '与謝蕪村。春の穏やかな一日、波が静かにゆったりとうねり続けている海の情景',
    explanation:
      '【何を聞かれているか】\n「春の海　終日（ひねもす）のたり　のたりかな」の作者と情景を説明する力が問われている。\n\n【なぜそうなるのか】\n作者は江戸時代の俳人・画家の与謝蕪村で、季語「春の海」（季節は春）と「のたりのたり」（波がゆっくり大きくうねるようす）から、春の穏やかな一日の海の情景を表している。\n\n【ステップ1】\n「終日（ひねもす）」が一日中という意味であることを確認する。\n\n【ステップ2】\n同じ音をくり返す効果を確認する。\n\n【答え】\n与謝蕪村。春の穏やかな一日、波が静かにゆったりとうねり続けている海の情景\n\n【確かめ】\n与謝蕪村が江戸時代の俳人・画家であることも再確認する。\n\n【よくあるまちがい】\n季語を「海」だけで捉えないこと（「春の海」で春の季語）。\n\n【ここが絶対】\n音のくり返しがおだやかな情景を生んでいることを押さえる。',
    difficulty: 'advanced',
    questionReading: '春の海、ひねもすのたり、のたりかな、の作者と、この俳句が表す情景を説明せよ。',
    answerReading: '与謝蕪村（よさぶそん）。春の穏やかな一日、波が静かにゆったりとうねり続けている海の情景',
  },
  {
    id: 'kokugo_42',
    subject: 'kokugo',
    question: '「徒然草」の作者と書かれた時代（時代区分）は？',
    answer: '兼好法師（吉田兼好）、鎌倉時代末期',
    explanation:
      '【何を聞かれているか】\n「徒然草」の作者と書かれた時代を答える力が問われている。\n\n【なぜそうなるのか】\n作者は兼好法師（吉田兼好）で、鎌倉時代の末（14世紀前半）に書かれた。\n\n【ステップ1】\n「つれづれなるままに」で始まる冒頭を確認する。\n\n【ステップ2】\n枕草子・方丈記とあわせて日本三大随筆であることを確認する。\n\n【答え】\n兼好法師（吉田兼好）、鎌倉時代末期\n\n【確かめ】\n「つれづれ」が「することもなく手持ちぶさたなこと」を表すことも再確認する。\n\n【よくあるまちがい】\n方丈記（鴨長明）と作者を混同しないこと。\n\n【ここが絶対】\n鎌倉時代末期に書かれたことを押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_43',
    subject: 'kokugo',
    question: '「吾輩は猫である」の作者と、主人公（語り手）の名前は？',
    answer: '夏目漱石。語り手は名前のない猫（「名前はまだない」）',
    explanation:
      '【何を聞かれているか】\n「吾輩は猫である」の作者と主人公（語り手）の名前を答える力が問われている。\n\n【なぜそうなるのか】\n夏目漱石が1905年に発表した最初の小説で、語り手は中学教師苦沙弥先生の家に住みついた猫であり、作品の最初に「名前はまだ無い」と書かれている。\n\n【ステップ1】\n俳句雑誌「ホトトギス」に連載されたことを確認する。\n\n【ステップ2】\n猫の目から人間の世界を皮肉に見つめる点がおもしろさであることを確認する。\n\n【答え】\n夏目漱石。語り手は名前のない猫（「名前はまだない」）\n\n【確かめ】\n苦沙弥先生という登場人物も再確認する。\n\n【よくあるまちがい】\n猫に名前があると誤解しないこと。\n\n【ここが絶対】\n夏目漱石の最初の小説であることを押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_44',
    subject: 'kokugo',
    question: '「東海道中膝栗毛」の作者と、主人公の名前2人を答えよ。',
    answer: '十返舎一九。弥次郎兵衛（やじろべえ）と北八（きたはち）',
    explanation:
      '【何を聞かれているか】\n「東海道中膝栗毛」の作者と主人公の名前2人を答える力が問われている。\n\n【なぜそうなるのか】\n作者は江戸時代後期の十返舎一九で、「膝栗毛」は栗毛の馬の代わりに自分のひざ（＝徒歩）で旅をするという意味、主人公は弥次郎兵衛と北八（喜多八）の二人組である。\n\n【ステップ1】\n江戸から京・大坂へ東海道を旅する滑稽本であることを確認する。\n\n【ステップ2】\n「弥次喜多道中」という言葉がこの作品から生まれたことを確認する。\n\n【答え】\n十返舎一九。弥次郎兵衛（やじろべえ）と北八（きたはち）\n\n【確かめ】\n「膝栗毛」の意味（自分のひざで旅をする）も再確認する。\n\n【よくあるまちがい】\n主人公の名前を1人だけで答えないこと。\n\n【ここが絶対】\n2人組の失敗をくり返す滑稽本であることを押さえる。',
    difficulty: 'advanced',
    answerReading: '十返舎一九（じっぺんしゃいっく）。弥次郎兵衛（やじろべえ）と北八（きたはち）',
  },
  {
    id: 'kokugo_45',
    subject: 'kokugo',
    question: '「夏草や　兵どもが　夢の跡」の作者と、詠まれた場所はどこか？',
    answer: '松尾芭蕉。平泉（岩手県）の衣川・高館（奥州藤原氏の栄華の跡地）',
    explanation:
      '【何を聞かれているか】\n「夏草や　兵どもが　夢の跡」の作者と詠まれた場所を答える力が問われている。\n\n【なぜそうなるのか】\n作者は松尾芭蕉で、紀行文『おくのほそ道』におさめられた句であり、詠まれたのは岩手県平泉の高館（衣川のほとり）、奥州藤原氏が栄え源義経が最期をむかえた場所である。\n\n【ステップ1】\n季語「夏草」（季節は夏）を確認する。\n\n【ステップ2】\n武士たちの栄えも戦いも夢のあとにすぎないというはかなさを確認する。\n\n【答え】\n松尾芭蕉。平泉（岩手県）の衣川・高館（奥州藤原氏の栄華の跡地）\n\n【確かめ】\n『おくのほそ道』におさめられた句であることも再確認する。\n\n【よくあるまちがい】\n詠まれた場所を別の地名と混同しないこと。\n\n【ここが絶対】\n栄枯盛衰・無常の感慨を詠んだ句であることを押さえる。',
    difficulty: 'advanced',
    answerReading: '松尾芭蕉（まつおばしょう）。平泉（ひらいずみ）、岩手県の衣川と高館、奥州藤原氏の栄華の跡地',
  },
  {
    id: 'kokugo_46',
    subject: 'kokugo',
    question: '「罪と罰」「カラマーゾフの兄弟」の作者は誰か？また国籍も答えよ。',
    answer: 'フョードル・ドストエフスキー、ロシア人',
    explanation:
      '【何を聞かれているか】\n「罪と罰」「カラマーゾフの兄弟」の作者と国籍を答える力が問われている。\n\n【なぜそうなるのか】\n作者は19世紀ロシアの作家フョードル・ドストエフスキーで、「罪と罰」は貧しい学生ラスコーリニコフが高利貸しの老婆を殺し罪の意識に苦しんで自首するまでを描く。\n\n【ステップ1】\n「カラマーゾフの兄弟」が父親殺しをめぐる兄弟の物語であることを確認する。\n\n【ステップ2】\nどちらも人間の心の奥を追究した代表作であることを確認する。\n\n【答え】\nフョードル・ドストエフスキー、ロシア人\n\n【確かめ】\n19世紀のロシアの作家であることも再確認する。\n\n【よくあるまちがい】\n他のロシア文学の作家と混同しないこと。\n\n【ここが絶対】\n人間の心の奥を追究した代表作であることを押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_47',
    subject: 'kokugo',
    question: '「青は藍より出でて藍よりも青し」の意味と、元の出典を答えよ。',
    answer: '弟子が師匠を超えること。出典: 荀子（中国の儒家の書）',
    explanation:
      '【何を聞かれているか】\n「青は藍より出でて藍よりも青し」の意味と出典を答える力が問われている。\n\n【なぜそうなるのか】\n出典は中国の思想家荀子の「勧学篇」で、青い染料はもともと藍という草から取るのにもとの藍より青くなるというたとえから、弟子が師匠を追いこすことを表す。\n\n【ステップ1】\n原文「青は之を藍より取りて藍よりも青し」を確認する。\n\n【ステップ2】\n「出藍の誉れ」という別の言い方も確認する。\n\n【答え】\n弟子が師匠を超えること。出典: 荀子（中国の儒家の書）\n\n【確かめ】\n染料の話がたとえであることも再確認する。\n\n【よくあるまちがい】\n文字通り染料の話だと表面的に捉えないこと。\n\n【ここが絶対】\n弟子が師匠を超えることを表すたとえであることを押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_48',
    subject: 'kokugo',
    question: '宮沢賢治の詩「雨ニモマケズ」に出てくる「サウイウモノニ　ワタシハナリタイ」という詩句は何を表しているか？',
    answer: '理想の人間像（苦しむ人を助け、欲がなく、怒らず、いつも静かに笑っている人）への憧れ',
    explanation:
      '【何を聞かれているか】\n宮沢賢治の詩「雨ニモマケズ」の「サウイウモノニ　ワタシハナリタイ」という詩句が何を表しているかを答える力が問われている。\n\n【なぜそうなるのか】\n苦しむ人を助け、欲がなく、決して怒らず、いつも静かに笑っている人の姿が並べられ、最後の一文はそういう人になりたいという願い・決意を表している。\n\n【ステップ1】\n詩に並べられた理想の人物像を確認する。\n\n【ステップ2】\n自分がそうであるという自慢ではなく理想へのあこがれであることを確認する。\n\n【答え】\n理想の人間像（苦しむ人を助け、欲がなく、怒らず、いつも静かに笑っている人）への憧れ\n\n【確かめ】\n宮沢賢治が手帳に書きつけた詩であることも再確認する。\n\n【よくあるまちがい】\n自慢の言葉だと誤解しないこと。\n\n【ここが絶対】\n理想へのあこがれを述べていることを押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_49',
    subject: 'kokugo',
    question: '「方丈記」の冒頭「ゆく河の流れは絶えずして、しかも、もとの水にあらず」が表す思想を何というか？',
    answer: '無常観（万物はつねに移り変わり、永遠不変のものは何もないという仏教的な世界観）',
    explanation:
      '【何を聞かれているか】\n「方丈記」の冒頭「ゆく河の流れは絶えずして、しかも、もとの水にあらず」が表す思想を答える力が問われている。\n\n【なぜそうなるのか】\n流れる川の水は絶えることがないがそこにある水はもとの水ではないという意味から、すべてのものは移り変わり永遠に変わらないものはないという仏教的な考え（無常観）を表している。\n\n【ステップ1】\n鴨長明『方丈記』の冒頭であることを確認する。\n\n【ステップ2】\n『平家物語』の「諸行無常の響きあり」も同じ無常観を表すことを確認する。\n\n【答え】\n無常観（万物はつねに移り変わり、永遠不変のものは何もないという仏教的な世界観）\n\n【確かめ】\n川の水のたとえの意味も再確認する。\n\n【よくあるまちがい】\n単なる自然描写だと表面的に読まないこと。\n\n【ここが絶対】\n仏教的な世界観であることを押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_50',
    subject: 'kokugo',
    question: '「荘子」に出てくる「胡蝶の夢」の話の意味を説明せよ。',
    answer: '荘子が蝶になった夢を見て、「自分が蝶になる夢を見たのか、蝶が荘子になる夢を見ているのか」と問い、現実と夢・自己と他者の境界を問いかける、物我一体を説く寓話',
    explanation:
      '【何を聞かれているか】\n『荘子』に出てくる「胡蝶の夢」の話の意味を説明する力が問われている。\n\n【なぜそうなるのか】\n荘子が蝶になって飛びまわる夢を見て目がさめたときに「自分が蝶になる夢を見たのか、蝶が自分になる夢を見ているのか」分からなくなったという話で、夢と現実、自分と他のもののさかいは絶対のものではないという物我一体の考えを表す。\n\n【ステップ1】\n夢と現実の境界があいまいになる話の内容を確認する。\n\n【ステップ2】\n「人生ははかない夢のようだ」というたとえにも使われることを確認する。\n\n【答え】\n荘子が蝶になった夢を見て、「自分が蝶になる夢を見たのか、蝶が荘子になる夢を見ているのか」と問い、現実と夢・自己と他者の境界を問いかける、物我一体を説く寓話\n\n【確かめ】\n出典が『荘子』であることも再確認する。\n\n【よくあるまちがい】\n単なる不思議な夢の話だと軽く扱わないこと。\n\n【ここが絶対】\n現実と夢の境界を問いかける寓話であることを押さえる。',
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
    explanation:
      '【何を聞かれているか】光合成に必要な3つのもの。\n【なぜその式なのか】光合成は植物が**自分で養分（デンプン）をつくる**はたらき。材料が2つ（**水**は根から、**二酸化炭素**は葉の気孔から）、それを結びつけるエネルギーが**光**。葉緑体の緑色の色素が光を受け取る。\n【ステップ1】材料：水・二酸化炭素。\n【ステップ2】エネルギー：光（日光）。\n【答え】水・二酸化炭素・光（日光）\n【確かめ】1つでも欠けるとデンプンはできない（ふ入りの葉・アルミはくでおおった葉・二酸化炭素をぬいた葉で確かめる実験）。できるのはデンプンと酸素。\n【よくあるまちがい】「酸素」を材料に入れる。**酸素はできるもの**。',
    difficulty: 'basic',
  },
  {
    id: 'rika_02',
    subject: 'rika',
    question: 'アンモニアが水にとけた水溶液（アンモニア水）は何性か。また、アンモニアの集め方を答えなさい。',
    answer: 'アルカリ性。上方置換法',
    explanation: '【何を聞かれているか】\nアンモニア水の性質と、アンモニアの気体の集め方です。\n\n【性質】\nアンモニアはつんとした刺激臭のある気体で、水に非常によくとける。とけた水溶液（アンモニア水）はアルカリ性で、赤色リトマス紙を青に変え、BTB液を青色にする。\n\n【集め方】\n水にとけやすいので水上置換法は使えない。空気より軽いので、口を下に向けた容器に下から送りこむ上方置換法で集める。\n\n【答え】アルカリ性。上方置換法。\n\n【まちがえやすいところ】\n「水にとけやすい気体」でも、空気より重い塩化水素は下方置換法。軽いか重いかで上か下かが決まる。',
    difficulty: 'basic',
  },
  {
    id: 'rika_03',
    subject: 'rika',
    question: '月が地球の周りを一周するのにかかる日数は？',
    answer: '約27.3日',
    explanation:
      '【何を聞かれているか】\n月が地球のまわりを一周するのにかかる日数(公転周期)を答える力が問われている。\n\n【なぜそうなるのか】\n月が地球のまわりを1周する時間を公転周期と呼び、これは満ち欠けの周期(約29.5日)とは異なる。\n\n【ステップ1】\n公転周期(約27.3日)を確認する。\n\n【ステップ2】\n満ち欠けの周期(約29.5日)との違いを確認する。\n\n【答え】\n約27.3日\n\n【確かめ】\n自転周期も約27.3日で公転周期と同じため、地球からはいつも月の同じ面しか見えないことも再確認する。\n\n【よくあるまちがい】\n公転周期と満ち欠けの周期を同じ日数と考えないこと。\n\n【ここが絶対】\n地球も動くため満ち欠けの周期の方が長くなることを押さえる。',
    difficulty: 'basic',
  },
  {
    id: 'rika_04',
    subject: 'rika',
    question: '水が沸騰する温度は（標準気圧で）？',
    answer: '100℃',
    explanation:
      '【何を聞かれているか】\n標準気圧で水が沸騰する温度を答える力が問われている。\n\n【なぜそうなるのか】\n1気圧では水は100℃で沸騰し、沸騰中は加えた熱がすべて水を水蒸気に変えるために使われるため温度は上がらない。\n\n【ステップ1】\n沸騰中は温度が一定であることを確認する。\n\n【ステップ2】\n気圧が変わると沸点も変わることを確認する。\n\n【答え】\n100℃\n\n【確かめ】\n富士山頂では約88℃で沸騰することも再確認する。\n\n【よくあるまちがい】\n沸騰中も温度が上がり続けると考えないこと。\n\n【ここが絶対】\n気圧を高くすると沸点も高くなることを押さえる。',
    difficulty: 'basic',
  },
  {
    id: 'rika_05',
    subject: 'rika',
    question: '食塩水を蒸発皿に入れて加熱し、水を蒸発させると何が残るか。また、食塩水は電気を通すか。',
    answer: '白い固体（食塩）が残る。電気を通す。',
    explanation: '【何を聞かれているか】\n食塩水から水を蒸発させたときに残るものと、電気を通すかどうかです。\n\n【なぜ固体が残るのか】\n食塩水は固体の食塩（塩化ナトリウム）が水にとけたもの。加熱すると水だけが水蒸気になって出ていき、とけていた食塩が白い結晶として残る。塩酸や炭酸水のように気体がとけた水溶液では、気体もいっしょに出ていくので何も残らない。\n\n【電気】\n食塩水は電気を通す。砂糖水は通さない。中性かどうかとは関係がない。\n\n【答え】白い固体（食塩）が残る。電気を通す。\n\n【まちがえやすいところ】\n「中性だから電気を通さない」と考えてしまう。食塩水は中性だが電気を通す。',
    difficulty: 'basic',
  },
  {
    id: 'rika_06',
    subject: 'rika',
    question: 'ヒトの心臓は部屋がいくつ？',
    answer: '4つ（右心房・右心室・左心房・左心室）',
    explanation:
      '【何を聞かれているか】\nヒトの心臓が何部屋に分かれているかを答える力が問われている。\n\n【なぜそうなるのか】\n心臓は血液を受け取る心房と送り出す心室が左右にあり、右心房・右心室・左心房・左心室の4つに分かれる。\n\n【ステップ1】\n心房(受け取る)と心室(送り出す)の役割を確認する。\n\n【ステップ2】\n左心室が全身に血液を送るため壁が最も厚いことを確認する。\n\n【答え】\n4つ(右心房・右心室・左心房・左心室)\n\n【確かめ】\n図では自分から見て左右が逆になることも再確認する。\n\n【よくあるまちがい】\n右心室が全身に血液を送ると考えないこと。\n\n【ここが絶対】\n右心室は肺へ、左心室は全身へ血液を送ることを押さえる。',
    difficulty: 'basic',
  },
  {
    id: 'rika_07',
    subject: 'rika',
    question: '地球の表面の約何%が海？',
    answer: '約70%',
    explanation:
      '【何を聞かれているか】\n地球の表面の約何%が海かを答える力が問われている。\n\n【なぜそうなるのか】\n地球の表面は海が約70%、陸地が約30%であり「7対3」と覚える。\n\n【ステップ1】\n海と陸地の割合(7:3)を確認する。\n\n【ステップ2】\n地球が水の惑星と呼ばれる理由を確認する。\n\n【答え】\n約70%\n\n【確かめ】\n水の約97%が海水で飲める真水はごくわずかであることも再確認する。\n\n【よくあるまちがい】\n海と陸の割合を逆にしないこと。\n\n【ここが絶対】\n南半球の方が海の割合がさらに大きいことを押さえる。',
    difficulty: 'basic',
  },
  {
    id: 'rika_08',
    subject: 'rika',
    question: '花粉をめしべへ運ぶ生き物を何という？',
    answer: '送粉者（花粉媒介者）、代表例はミツバチ',
    explanation:
      '【何を聞かれているか】\n花粉をめしべへ運ぶ生き物を答える力が問われている。\n\n【なぜそうなるのか】\n花粉を運ぶ生き物を送粉者(花粉媒介者)と呼び、代表例はミツバチである。\n\n【ステップ1】\n虫媒花(あまいみつ・よい香り・目立つ花びらで虫を呼ぶ)を確認する。\n\n【ステップ2】\n風媒花(マツ・イネ・スギ、軽い花粉を大量につくる)との違いを確認する。\n\n【答え】\n送粉者(花粉媒介者)、代表例はミツバチ\n\n【確かめ】\nどちらも受粉のためのくふうであることも再確認する。\n\n【よくあるまちがい】\nすべての花が虫に花粉を運ばせると考えないこと。\n\n【ここが絶対】\n風媒花は花びらが目立たないことを押さえる。',
    difficulty: 'basic',
  },
  {
    id: 'rika_09',
    subject: 'rika',
    question: '音が空気中を伝わる速さは約何m/s？',
    answer: '約340m/s',
    explanation:
      '【何を聞かれているか】\n音が空気中を伝わる速さを答える力が問われている。\n\n【なぜそうなるのか】\n音は光よりずっとおそく伝わるため、雷が光ってから音が遅れて聞こえる。\n\n【ステップ1】\n音の速さ(約340m/s)を確認する。\n\n【ステップ2】\n光の速さがけた違いに速いことを確認する。\n\n【答え】\n約340m/s\n\n【確かめ】\n3秒後に聞こえたら340×3=1020m先で光ったことになることも再確認する。\n\n【よくあるまちがい】\n光の速さで計算しようとしないこと。\n\n【ここが絶対】\n気温が高いほど音は速く伝わることを押さえる。',
    difficulty: 'basic',
  },
  {
    id: 'rika_10',
    subject: 'rika',
    question: '太陽系で最も大きな惑星は？',
    answer: '木星',
    explanation:
      '【何を聞かれているか】\n太陽系で最も大きな惑星を答える力が問われている。\n\n【なぜそうなるのか】\n木星は直径が地球の約11倍、重さが約318倍で太陽系最大の惑星である。\n\n【ステップ1】\n木星がガスの惑星であることを確認する。\n\n【ステップ2】\n2番目に大きい土星との違いを確認する。\n\n【答え】\n木星\n\n【確かめ】\n大赤斑という巨大なうずがあることも再確認する。\n\n【よくあるまちがい】\n土星が最大だと考えないこと。\n\n【ここが絶対】\n水星・金星・地球・火星は岩石でできた小さい地球型惑星であることを押さえる。',
    difficulty: 'basic',
  },
  {
    id: 'rika_11',
    subject: 'rika',
    question:
      '植物が根から水を吸い上げ、高い葉まで届けられるのは、おもに何のはたらきによりますか。',
    answer:
      'おもに蒸散のはたらきによる。葉から水が水蒸気となって出ていくと、その分だけ管の中の水が上へ引き上げられ、続けて根から新しい水が吸い上げられる。',
    explanation:
      '【何を聞かれているか】\n植物にはポンプがないのに、なぜ水が高い葉まで上がっていけるのか、その主役は何かです。\n\n【まず、水の通り道】\n根から吸った水は、根・くき・葉とつながった細い管（道管）の中を通ります。この管の中で、水は上から下までとぎれずにつながっています。\n\n【主役は蒸散】\n葉の裏にある気孔から、水が水蒸気となって空気中へ出ていきます。これを蒸散といいます。\n水はとぎれずにつながっているので、いちばん上でへると、その分だけ下の水が引き上げられます。ストローで上から吸うと、コップの底の飲み物まで上がってくるのと同じです。押し上げているのではなく、上から引かれている、と考えるのがこの問題のポイントです。\n\n【ほかにはたらいている力】\n・細い管を水が自然に上がろうとする力（毛細管現象）。ティッシュペーパーのはしを水につけると、水がしみ上がっていくのと同じはたらきです。\n・根のほうから水をおし上げる力。切った草のくきから水がにじみ出てくることがあるのは、この力によります。\nただし、いちばん大きいのは蒸散です。\n\n【答え】\nおもに蒸散のはたらき。葉から水が出ていった分だけ、管の中の水が引き上げられ、根から新しい水が吸い上げられる。\n\n【確かめ】\n葉のついた枝と、葉を全部取った枝を、それぞれ色水にさしてくらべます。葉のついたほうが色水をずっと速く吸い上げます。また、晴れて風のある日ほど蒸散がさかんになるので、水の減り方も大きくなります。\n\n【よくあるまちがい】\n「根が水をおし上げている」とだけ書いてしまう人が多いですが、それだけでは高い木のてっぺんまで届きません。主役は葉の蒸散です。また、気孔は葉の表より裏に多いことも合わせて覚えておきましょう。',
    difficulty: 'basic',
  },
  {
    id: 'rika_12',
    subject: 'rika',
    question: '電流の単位は？',
    answer: 'アンペア（A）',
    explanation:
      '【何を聞かれているか】\n電流の単位を答える力が問われている。\n\n【なぜそうなるのか】\n導線を流れる電気の量を表す単位をアンペア(記号A)と呼ぶ。\n\n【ステップ1】\n1A=1000mAの関係を確認する。\n\n【ステップ2】\n電流計を回路に直列につなぐことを確認する。\n\n【答え】\nアンペア(A)\n\n【確かめ】\n5A・500mA・50mAの端子を大きい方から使うことも再確認する。\n\n【よくあるまちがい】\n電流計を並列につなげないこと。\n\n【ここが絶対】\n電池1個・豆電球1個の電流を①として比で考えることを押さえる。',
    difficulty: 'basic',
  },
  {
    id: 'rika_13',
    subject: 'rika',
    question: 'リトマス試験紙：アルカリ性では何色に変わる？',
    answer: '赤→青に変わる',
    explanation:
      '【何を聞かれているか】アルカリ性のときのリトマス紙の変化。\n【なぜその式なのか】リトマス紙は**色の変化で酸性・アルカリ性を見分ける**。アルカリ性は赤い紙を青に、酸性は青い紙を赤に変える。中性はどちらも変わらない。\n【ステップ1】アルカリ性→赤色リトマス紙が青に。青い紙はそのまま。\n【答え】赤→青に変わる\n【確かめ】石灰水・アンモニア水・水酸化ナトリウム水溶液で赤→青。\n【よくあるまちがい】「青→赤」と逆にする。**アルカリは赤→青、酸は青→赤**。',
    difficulty: 'basic',
  },
  {
    id: 'rika_14',
    subject: 'rika',
    question: 'ダイヤモンドの主成分は？',
    answer: '炭素',
    explanation:
      '【何を聞かれているか】\nダイヤモンドの主成分を答える力が問われている。\n\n【なぜそうなるのか】\nダイヤモンドは炭素の粒がすき間なくがんじょうに結びついてできている。\n\n【ステップ1】\n炭素だけからできていることを確認する。\n\n【ステップ2】\n同じ炭素でできた黒鉛との違い(粒のつながり方)を確認する。\n\n【答え】\n炭素\n\n【確かめ】\n強く熱すると燃えて二酸化炭素になることも再確認する。\n\n【よくあるまちがい】\n黒鉛と別の物質だと考えないこと。\n\n【ここが絶対】\n天然の物質でいちばんかたいことを押さえる。',
    difficulty: 'basic',
  },
  {
    id: 'rika_15',
    subject: 'rika',
    question: '日食が起こるのはなぜ？',
    answer: '月が太陽と地球の間に入り、太陽が隠れるため',
    explanation:
      '【何を聞かれているか】\n日食が起こる理由を答える力が問われている。\n\n【なぜそうなるのか】\n太陽・月・地球がこの順に一直線に並び、月が太陽の光をさえぎるため太陽が欠けて見える。\n\n【ステップ1】\n新月のときに起こることを確認する。\n\n【ステップ2】\n皆既日食(全部かくれる)と部分日食(一部が欠ける)の違いを確認する。\n\n【答え】\n月が太陽と地球の間に入り、太陽が隠れるため\n\n【確かめ】\n月食は満月のときに太陽・地球・月の順に並ぶことも再確認する。\n\n【よくあるまちがい】\n日食と月食の並ぶ順番を混同しないこと。\n\n【ここが絶対】\n日食は月が太陽をかくす現象であることを押さえる。',
    difficulty: 'basic',
  },
  {
    id: 'rika_16',
    subject: 'rika',
    question: '水の固体（氷）・液体（水）・気体（水蒸気）の3つの状態変化をまとめて何というか？',
    answer: '物質の三態（状態変化）',
    explanation:
      '【何を聞かれているか】\n氷・水・水蒸気の3つの状態変化をまとめて何と呼ぶかを答える力が問われている。\n\n【なぜそうなるのか】\n物質は温度によって固体・液体・気体とすがたを変え、これを物質の三態と呼ぶ。\n\n【ステップ1】\n氷→水(融解)、水→水蒸気(蒸発)を確認する。\n\n【ステップ2】\nすがたが変わっても物質そのものと重さは変わらないことを確認する。\n\n【答え】\n物質の三態(状態変化)\n\n【確かめ】\n氷は水より体積が増えて軽くなるため浮くことも再確認する。\n\n【よくあるまちがい】\nすがたが変わると重さも変わると考えないこと。\n\n【ここが絶対】\n変わるのは体積と粒のならび方であることを押さえる。',
    difficulty: 'basic',
  },
  {
    id: 'rika_17',
    subject: 'rika',
    question: '磁石のN極とN極を近づけると？',
    answer: '反発する（退け合う）',
    explanation:
      '【何を聞かれているか】\n磁石のN極とN極を近づけたときどうなるかを答える力が問われている。\n\n【なぜそうなるのか】\n磁石の同じ極どうしは反発し、ちがう極どうしは引き合う。\n\n【ステップ1】\nN極とN極(同じ極)の関係を確認する。\n\n【ステップ2】\nN極とS極(ちがう極)との違いを確認する。\n\n【答え】\n反発する(退け合う)\n\n【確かめ】\n磁石を2つに割ってもN極だけの磁石はできないことも再確認する。\n\n【よくあるまちがい】\n同じ極どうしが引き合うと考えないこと。\n\n【ここが絶対】\n方位磁針のN極が北をさすのは地球の北極側がS極のようにはたらくためであることを押さえる。',
    difficulty: 'basic',
  },
  {
    id: 'rika_18',
    subject: 'rika',
    question: '晴れた日の昼間、積乱雲（入道雲）が発達しやすい天気の変化は？',
    answer: '夕立（急な雷雨）になりやすい',
    explanation:
      '【何を聞かれているか】\n晴れた日の昼間に積乱雲が発達しやすいときの天気の変化を答える力が問われている。\n\n【なぜそうなるのか】\n地面が強くあたためられて強い上昇気流が起こり、たてに高く発達した積乱雲ができるため夕方に急な雷雨になりやすい。\n\n【ステップ1】\n上昇気流が積乱雲をつくることを確認する。\n\n【ステップ2】\n積乱雲が短時間に激しい雨をふらせることを確認する。\n\n【答え】\n夕立(急な雷雨)になりやすい\n\n【確かめ】\nかみなり・突風・ひょうをともなうこともあることも再確認する。\n\n【よくあるまちがい】\n積乱雲が穏やかな雨をもたらすと考えないこと。\n\n【ここが絶対】\n積乱雲はたてに高く発達した雲であることを押さえる。',
    difficulty: 'basic',
  },
  {
    id: 'rika_19',
    subject: 'rika',
    question: 'カエルのように水中と陸上の両方で生活できる動物を何類というか？',
    answer: '両生類',
    explanation:
      '【何を聞かれているか】\nカエルのように水中と陸上の両方で生活できる動物のなかまを答える力が問われている。\n\n【なぜそうなるのか】\n子(オタマジャクシ)のときは水中でえら呼吸し、親になると陸上で肺と皮ふで呼吸する動物を両生類と呼ぶ。\n\n【ステップ1】\n幼生と成体で呼吸方法が変わることを確認する。\n\n【ステップ2】\n変温動物で殻のない卵を水中にうむことを確認する。\n\n【答え】\n両生類\n\n【確かめ】\nイモリやサンショウウオも両生類であることも再確認する。\n\n【よくあるまちがい】\nヤモリを両生類と考えないこと。\n\n【ここが絶対】\nヤモリはは虫類であることを押さえる。',
    difficulty: 'basic',
  },
  {
    id: 'rika_20',
    subject: 'rika',
    question: '植物が光合成でつくり出すものは？',
    answer: 'ブドウ糖（デンプン）と酸素',
    explanation:
      '【何を聞かれているか】光合成でできるもの。\n【なぜその式なのか】二酸化炭素＋水→（光）→**養分＋酸素**。できた養分はすぐデンプンに変えて葉にたくわえ、酸素は気孔から出す。\n【ステップ1】養分（ブドウ糖→デンプン）。\n【ステップ2】酸素。\n【答え】ブドウ糖（デンプン）と酸素\n【確かめ】日光に当てた葉はヨウ素液で青むらさき色になる（デンプンの証拠）。\n【よくあるまちがい】二酸化炭素ができるとする。**二酸化炭素は材料**。',
    difficulty: 'basic',
  },

  // --- standard (20問) ---
  {
    id: 'rika_21',
    subject: 'rika',
    question: '消化酵素「アミラーゼ」はどの消化液に含まれ、何を消化するか？',
    answer: '唾液に含まれ、デンプンをマルトース（麦芽糖）に分解する',
    explanation:
      '【何を聞かれているか】\n消化酵素アミラーゼがどの消化液に含まれ何を消化するかを答える力が問われている。\n\n【なぜそうなるのか】\nだ液に含まれるアミラーゼがでんぷんを麦芽糖(マルトース)に分解する。\n\n【ステップ1】\nアミラーゼがだ液に含まれることを確認する。\n\n【ステップ2】\n体温くらい(約40℃)でよくはたらくことを確認する。\n\n【答え】\n唾液に含まれ、デンプンをマルトース(麦芽糖)に分解する\n\n【確かめ】\n最後にブドウ糖まで分解されて小腸で吸収されることも再確認する。\n\n【よくあるまちがい】\nごはんの甘さをでんぷんそのものの味と考えないこと。\n\n【ここが絶対】\n熱すぎたり冷たすぎたりするとはたらかないことを押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'rika_22',
    subject: 'rika',
    question: '被子植物と裸子植物の違いを説明せよ。',
    answer: '被子植物: 種子が果実（子房）に包まれている。裸子植物: 種子がむき出し（子房がない）',
    hint: 'イネ・サクラは被子植物。マツ・スギは裸子植物',
    explanation:
      '【何を聞かれているか】\n被子植物と裸子植物の違いを答える力が問われている。\n\n【なぜそうなるのか】\n被子植物は胚珠が子房に包まれているが、裸子植物は子房がなく胚珠がむき出しである。\n\n【ステップ1】\n被子植物(サクラ・イネ・アブラナ)を確認する。\n\n【ステップ2】\n裸子植物(マツ・スギ・イチョウ)を確認する。\n\n【答え】\n被子植物:種子が果実(子房)に包まれている。裸子植物:種子がむき出し(子房がない)\n\n【確かめ】\n被子植物は受粉後に子房が実になることも再確認する。\n\n【よくあるまちがい】\n裸子植物にも実ができると考えないこと。\n\n【ここが絶対】\n「被=おおう」「裸=むき出し」と漢字の意味で覚えることを押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'rika_23',
    subject: 'rika',
    question: '塩酸と水酸化ナトリウム水溶液を混ぜる反応（中和）で生成するものは？',
    answer: '塩化ナトリウム（食塩）と水',
    explanation:
      '【何を聞かれているか】塩酸と水酸化ナトリウム水溶液を混ぜたときにできるもの。\n【なぜその式なのか】酸性とアルカリ性を混ぜると、**酸の性質のもととアルカリの性質のもとが結びついて水になり**、たがいの性質を打ち消す（中和）。残った部分が結びついて塩化ナトリウム（食塩）。\n【ステップ1】塩酸＋水酸化ナトリウム→塩化ナトリウム＋水。\n【答え】塩化ナトリウム（食塩）と水\n【確かめ】ちょうど中和した液を蒸発させると立方体の食塩の結晶が残る。BTB液は緑。\n【よくあるまちがい】中和で気体が出ると思う。**この中和では気体は出ない**（塩酸＋石灰石などは別）。',
    difficulty: 'standard',
  },
  {
    id: 'rika_24',
    subject: 'rika',
    question: '抵抗3（豆電球3個分）の電熱線と抵抗6（豆電球6個分）の電熱線を直列につないだとき、全体の抵抗はいくつか。',
    answer: '9（直列は抵抗の足し算）',
    explanation:
      '【何を聞かれているか】\n抵抗3と抵抗6の電熱線を直列につないだときの全体の抵抗を求める力が問われている。\n\n【なぜそうなるのか】\n直列つなぎでは電流の通り道が1本なので抵抗はそのまま足し算になる。\n\n【ステップ1】\n直列であることを確認する。\n\n【ステップ2】\n3+6=9を計算する。\n\n【答え】\n9(直列は抵抗の足し算)\n\n【確かめ】\n発熱(明るさ)が抵抗の比3:6=1:2で分かれることも再確認する。\n\n【よくあるまちがい】\n直列でも抵抗が変わらないと考えないこと。\n\n【ここが絶対】\n抵抗をふやすほど流れる電流は小さくなることを押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'rika_25',
    subject: 'rika',
    question: '抵抗3（豆電球3個分）の電熱線と抵抗6（豆電球6個分）の電熱線を並列につないだとき、全体の抵抗はいくつか。',
    answer: '2（電池1個なら電流は1/3＋1/6＝1/2、抵抗＝1÷1/2＝2）',
    hint: '並列は、枝ごとの電流を足してから「電池の数÷全体の電流」でもどす',
    explanation:
      '【何を聞かれているか】\n抵抗3と抵抗6の電熱線を並列につないだときの全体の抵抗を求める力が問われている。\n\n【なぜそうなるのか】\n並列つなぎでは電流の通り道が枝分かれするため、全体の抵抗は1本のときより小さくなる。\n\n【ステップ1】\n各枝の電流1/3・1/6を確認する。\n\n【ステップ2】\n1/3+1/6=1/2から1÷1/2=2を計算する。\n\n【答え】\n2(電池1個なら電流は1/3+1/6=1/2、抵抗=1÷1/2=2)\n\n【確かめ】\n答えの2がいちばん小さい抵抗3よりさらに小さいことも再確認する。\n\n【よくあるまちがい】\n並列の全体の抵抗を足し算しないこと。\n\n【ここが絶対】\n並列の全体の抵抗はどの枝よりも小さくなることを押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'rika_26',
    subject: 'rika',
    question: '地層の中に見られる過去の生物の遺骸や痕跡を何というか？また、地層の年代推定に使われる化石を何というか？',
    answer: '化石。年代推定に使われるものは示準化石',
    explanation:
      '【何を聞かれているか】地層の中の大昔の生物のあとの名前と、時代を知るのに使う化石の名前。\n【なぜその式なのか】生物の体・足あと・巣穴などが地層に残ったものが**化石**。そのうち**短い期間だけ広い範囲にすんでいた生物**の化石は、その地層ができた時代を教えてくれる（**示準化石**）。\n【ステップ1】化石。\n【ステップ2】示準化石（サンヨウチュウ＝古生代、アンモナイト＝中生代、ナウマンゾウ＝新生代）。\n【答え】化石。年代推定に使われるものは示準化石\n【確かめ】環境がわかるのは示相化石（サンゴ＝あたたかく浅い海、シジミ＝河口や湖）。\n【よくあるまちがい】示準と示相を逆にする。**準＝時代の基準、相＝ようす**。',
    difficulty: 'standard',
  },
  {
    id: 'rika_27',
    subject: 'rika',
    question: '人体で血液中の不要な物質（尿素など）をろ過する器官は？',
    answer: '腎臓',
    explanation:
      '【何を聞かれているか】\n血液中の不要な物質をろ過する器官を答える力が問われている。\n\n【なぜそうなるのか】\n血液中の不要な物や余分な水分・塩分をこしとって尿をつくる器官を腎臓と呼ぶ。\n\n【ステップ1】\n腎臓が背中側の腰に左右1つずつあることを確認する。\n\n【ステップ2】\nアンモニアが肝臓で尿素に変えられることを確認する。\n\n【答え】\n腎臓\n\n【確かめ】\nできた尿が輸尿管を通ってぼうこうにためられることも再確認する。\n\n【よくあるまちがい】\n尿素をつくる臓器を腎臓と考えないこと。\n\n【ここが絶対】\n腎臓はこしとる役割、肝臓は尿素をつくる役割であることを押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'rika_28',
    subject: 'rika',
    question: '地震の「震度」と「マグニチュード」の違いを説明せよ。',
    answer: '震度: ある地点での揺れの強さ（0〜7の10段階）。マグニチュード: 地震そのもののエネルギーの大きさ',
    explanation:
      '【何を聞かれているか】\n震度とマグニチュードの違いを答える力が問われている。\n\n【なぜそうなるのか】\n震度はある地点でのゆれの強さを表し観測地点ごとに異なるが、マグニチュードは地震そのものの規模を表し1つの地震に1つの値しかない。\n\n【ステップ1】\n震度が震源に近いほど大きくなることを確認する。\n\n【ステップ2】\nマグニチュードが1大きいと約32倍のエネルギーになることを確認する。\n\n【答え】\n震度:ある地点での揺れの強さ(0~7の10段階)。マグニチュード:地震そのもののエネルギーの大きさ\n\n【確かめ】\n震度が0・1・2・3・4・5弱・5強・6弱・6強・7の10段階であることも再確認する。\n\n【よくあるまちがい】\n震度とマグニチュードを同じ意味と考えないこと。\n\n【ここが絶対】\nマグニチュードが2大きいとエネルギーは約1000倍になることを押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'rika_29',
    subject: 'rika',
    question: '光が水中からガラスを通ったとき、屈折する。空気より密度の高い媒質に入るとき、光は境界面に対してどのように曲がるか？',
    answer: '境界面の法線に近づく方向に曲がる（入射角 > 屈折角）',
    explanation:
      '【何を聞かれているか】\n光が空気からガラスのような密度の高い物質に入るときどのように曲がるかを答える力が問われている。\n\n【なぜそうなるのか】\n進みにくい物質に入るときは境目に立てた法線に近づくように曲がるため入射角>屈折角になる。\n\n【ステップ1】\n光が境目で折れ曲がる屈折を確認する。\n\n【ステップ2】\n逆にガラスから空気に出るときは法線から遠ざかることを確認する。\n\n【答え】\n境界面の法線に近づく方向に曲がる(入射角>屈折角)\n\n【確かめ】\n水中のストローが折れて見える理由も同じであることを再確認する。\n\n【よくあるまちがい】\n密度の高い方に入るとき法線から遠ざかると考えないこと。\n\n【ここが絶対】\n出るときと入るときで曲がる向きが逆であることを押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'rika_30',
    subject: 'rika',
    question: '月の形が満月から次の満月になるまでの周期（朔望月）は約何日？',
    answer: '約29.5日',
    hint: '公転周期（27.3日）と異なるのは地球も太陽の周りを公転しているから',
    explanation:
      '【何を聞かれているか】\n満月から次の満月になるまでの周期(朔望月)を求める力が問われている。\n\n【なぜそうなるのか】\n月が地球を1周する時間は約27.3日だが、その間に地球も太陽のまわりを進むため同じ形にもどるにはさらに日数がかかる。\n\n【ステップ1】\n公転周期(約27.3日)を確認する。\n\n【ステップ2】\n地球が動く分の日数(約2.2日)を足すことを確認する。\n\n【答え】\n約29.5日\n\n【確かめ】\n27.3+2.2≒29.5で計算して確かめる。\n\n【よくあるまちがい】\n公転周期と満ち欠けの周期を同じ日数と考えないこと。\n\n【ここが絶対】\nひと月がおよそ30日なのはこの周期に由来することを押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'rika_31',
    subject: 'rika',
    question: '食物連鎖で、植物→草食動物→肉食動物と並ぶとき、エネルギーは上位に行くほどどうなるか？',
    answer: '少なくなる（各段階で約90%が失われ、次の段階に移るのは約10%）',
    explanation:
      '【何を聞かれているか】\n食物連鎖で上位に行くほどエネルギーがどうなるかを答える力が問われている。\n\n【なぜそうなるのか】\n食べられる側から食べる側へエネルギーが移るとき多くが失われ、体に残るのは約10%だけであるため上位ほど少なくなる。\n\n【ステップ1】\n各段階で約90%が失われることを確認する。\n\n【ステップ2】\n生き物の数や量が三角形(生態ピラミッド)になることを確認する。\n\n【答え】\n少なくなる(各段階で約90%が失われ、次の段階に移るのは約10%)\n\n【確かめ】\n植物が最も多く上にいくほど少なくなることも再確認する。\n\n【よくあるまちがい】\n上位に行くほどエネルギーが増えると考えないこと。\n\n【ここが絶対】\n大型の肉食動物の数が少ないのはこのしくみによることを押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'rika_32',
    subject: 'rika',
    question: '岩石の種類：火山活動でできた岩石を火成岩という。火成岩のうち、地表近くで急速に冷えたものと、地下深くでゆっくり冷えたものをそれぞれ何というか？',
    answer: '急速に冷えたもの: 火山岩（例: 玄武岩・流紋岩）。ゆっくり冷えたもの: 深成岩（例: 花こう岩）',
    explanation:
      '【何を聞かれているか】火成岩のうち、急に冷えたものと、ゆっくり冷えたものの名前。\n【なぜその式なのか】**冷え方で結晶の育ち方が変わる**。急に冷えると結晶が大きく育てず、細かい粒の中に大きな結晶が散らばる（斑状組織）。ゆっくり冷えると全部の結晶が大きくそろう（等粒状組織）。\n【ステップ1】急に冷えた＝火山岩（玄武岩・安山岩・流紋岩）。\n【ステップ2】ゆっくり冷えた＝深成岩（斑れい岩・せん緑岩・花こう岩）。\n【答え】急速に冷えたもの：火山岩（玄武岩・流紋岩など）。ゆっくり冷えたもの：深成岩（花こう岩など）\n【確かめ】ミョウバンの水溶液を急に冷やすと小さな結晶、ゆっくり冷やすと大きな結晶になるのと同じ。\n【よくあるまちがい】火山岩と深成岩を逆にする。**地表近く＝急＝火山岩**。',
    difficulty: 'standard',
  },
  {
    id: 'rika_33',
    subject: 'rika',
    question: 'BTB溶液（ブロモチモールブルー）：酸性・中性・アルカリ性でそれぞれ何色になるか？',
    answer: '酸性: 黄色。中性: 緑色。アルカリ性: 青色',
    explanation:
      '【何を聞かれているか】\nBTB溶液が酸性・中性・アルカリ性でそれぞれ何色になるかを答える力が問われている。\n\n【なぜそうなるのか】\nBTB溶液は液性によって色が変わる指示薬で、酸性は黄色、中性は緑色、アルカリ性は青色を示す。\n\n【ステップ1】\n「黄・緑・青」の順を確認する。\n\n【ステップ2】\n息(二酸化炭素)をふきこむと酸性になり黄色に変わることを確認する。\n\n【答え】\n酸性:黄色。中性:緑色。アルカリ性:青色\n\n【確かめ】\nフェノールフタレイン液がアルカリ性のときだけ赤くなることも再確認する。\n\n【よくあるまちがい】\n色の順を逆に覚えないこと。\n\n【ここが絶対】\nBTB溶液は3色で液性を判断できることを押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'rika_34',
    subject: 'rika',
    question: '植物の葉の気孔は主に葉のどちらの面に多く存在するか？',
    answer: '裏面（下面）に多い',
    explanation:
      '【何を聞かれているか】\n植物の葉の気孔が主にどちらの面に多いかを答える力が問われている。\n\n【なぜそうなるのか】\n直射日光の当たる表側に気孔が多いと水が蒸発して失われやすいため、裏側に多い方が水を守るのに都合がよい。\n\n【ステップ1】\n気孔が孔辺細胞にはさまれた穴であることを確認する。\n\n【ステップ2】\n裏面に多い理由(水分を守るため)を確認する。\n\n【答え】\n裏面(下面)に多い\n\n【確かめ】\nスイレンのように表にしか気孔がない植物もあることも再確認する。\n\n【よくあるまちがい】\nすべての植物で気孔の位置が同じと考えないこと。\n\n【ここが絶対】\n気孔は水蒸気や酸素・二酸化炭素の出入り口であることを押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'rika_35',
    subject: 'rika',
    question: '電熱線の発熱の大きさは、何に比例するか。',
    answer: '電流×電流×抵抗（と、流した時間）に比例する',
    explanation:
      '【何を聞かれているか】\n電熱線の発熱の大きさが何に比例するかを答える力が問われている。\n\n【なぜそうなるのか】\n発熱は流れる電流の大きさと電気を押す力のかけ算で決まり、電流×電流×抵抗に比例する。\n\n【ステップ1】\n電流を2倍にすると発熱が2×2=4倍になることを確認する。\n\n【ステップ2】\n時間にも比例することを確認する。\n\n【答え】\n電流×電流×抵抗(と、流した時間)に比例する\n\n【確かめ】\n電池を2個直列にすると電流が2倍になり発熱は4倍になることも再確認する。\n\n【よくあるまちがい】\n「電池2個で発熱2倍」と考えないこと。\n\n【ここが絶対】\n発熱は電流の2乗に比例することを押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'rika_36',
    subject: 'rika',
    question: '台風の中心（台風の目）の気圧と天気はどのような状態か？',
    answer: '気圧が非常に低く、風が弱くて晴れていることが多い',
    explanation:
      '【何を聞かれているか】\n台風の中心(台風の目)の気圧と天気を答える力が問われている。\n\n【なぜそうなるのか】\n台風の目のすぐ内側は強い上昇気流が壁のようにとりまき、その内側では逆に下降気流になるため風が弱まり晴れることがある。\n\n【ステップ1】\n中心ほど気圧が低いことを確認する。\n\n【ステップ2】\n目の中が下降気流であることを確認する。\n\n【答え】\n気圧が非常に低く、風が弱くて晴れていることが多い\n\n【確かめ】\n目が通り過ぎると再び暴風雨が始まることも再確認する。\n\n【よくあるまちがい】\n台風の目の中心が最も風雨が強いと考えないこと。\n\n【ここが絶対】\n北半球では風は反時計回りにふきこむことを押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'rika_37',
    subject: 'rika',
    question: '赤血球・白血球・血小板のうち、酸素を運ぶ役割を持つのはどれか？またヘモグロビンに含まれる元素は？',
    answer: '赤血球。ヘモグロビンには鉄が含まれる',
    explanation:
      '【何を聞かれているか】\n赤血球・白血球・血小板のうち酸素を運ぶものと、ヘモグロビンに含まれる元素を答える力が問われている。\n\n【なぜそうなるのか】\n赤血球に含まれるヘモグロビンが酸素と結びついて運び、ヘモグロビンには鉄が含まれる。\n\n【ステップ1】\nヘモグロビンが酸素の多い肺で結びつくことを確認する。\n\n【ステップ2】\n酸素の少ない体の各部で酸素をはなすことを確認する。\n\n【答え】\n赤血球。ヘモグロビンには鉄が含まれる\n\n【確かめ】\n血が赤いのは鉄を含むためであることも再確認する。\n\n【よくあるまちがい】\n白血球が酸素を運ぶと考えないこと。\n\n【ここが絶対】\n白血球は細菌をとらえ、血小板は出血を止める役割であることを押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'rika_38',
    subject: 'rika',
    question: '「てこ」の原理で、支点から30cmの点に60gのおもりをつるした。支点から反対側20cmの点に何gの力を加えれば水平に保てるか？',
    answer: '90g',
    hint: '60 × 30 = F × 20 → F = 90g',
    explanation:
      '【何を聞かれているか】\n支点から30cmに60gのおもりがあるてこで、支点から反対側20cmに加える力を求める力が問われている。\n\n【なぜそうなるのか】\nてこはおもりの重さ×支点からの距離が左右で等しいときつり合う。\n\n【ステップ1】\n60×30=1800を計算する。\n\n【ステップ2】\n1800÷20=90を計算する。\n\n【答え】\n90g\n\n【確かめ】\n支点に近い位置ほど大きな力が必要になることも再確認する。\n\n【よくあるまちがい】\n距離を無視して重さだけで比べないこと。\n\n【ここが絶対】\n重さと距離は反比例することを押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'rika_39',
    subject: 'rika',
    question: '太陽系の8つの惑星を太陽に近い順に答えよ。',
    answer: '水星・金星・地球・火星・木星・土星・天王星・海王星',
    explanation:
      '【何を聞かれているか】太陽系の8つの惑星を太陽に近い順に。\n【なぜその式なのか】「**水金地火木土天海**（すいきんちかもくどってんかい）」の順。内側4つは岩石でできた小さく重い惑星、外側4つはガスや氷の大きく軽い惑星。\n【ステップ1】水星・金星・地球・火星。\n【ステップ2】木星・土星・天王星・海王星。\n【答え】水星・金星・地球・火星・木星・土星・天王星・海王星\n【確かめ】いちばん大きいのは木星、環が目立つのは土星。\n【よくあるまちがい】冥王星を入れる。**2006年に準惑星になり、惑星は8個**。',
    difficulty: 'standard',
  },
  {
    id: 'rika_40',
    subject: 'rika',
    question: '双子葉類と単子葉類の違いを葉脈と根の形で説明せよ。',
    answer: '双子葉類: 葉脈が網状脈、根は主根と側根。単子葉類: 葉脈が平行脈、根はひげ根',
    explanation:
      '【何を聞かれているか】双子葉類と単子葉類のちがいを葉脈と根で。\n【なぜその式なのか】被子植物は**子葉の枚数**で2つに分かれ、葉脈と根の形もセットでちがう。\n【ステップ1】双子葉類（子葉2枚）：網状脈、主根と側根。アサガオ・ヒマワリ・ホウセンカ。\n【ステップ2】単子葉類（子葉1枚）：平行脈、ひげ根。イネ・トウモロコシ・ユリ。\n【答え】双子葉類：網状脈・主根と側根　単子葉類：平行脈・ひげ根\n【確かめ】茎の中の水の通り道も、双子葉類は輪のように、単子葉類はばらばらに並ぶ。\n【よくあるまちがい】単子葉類を網状脈とする。**1枚→平行・ひげ根**。',
    difficulty: 'standard',
  },

  // --- advanced (10問) ---
  {
    id: 'rika_41',
    subject: 'rika',
    question: 'ホットケーキをふくらませるもとになる炭酸水素ナトリウム（重そう）を加熱すると、3つの物質に分かれる。3つの物質の名前を答えよ。',
    answer: '炭酸ナトリウム・水・二酸化炭素',
    explanation:
      '【何を聞かれているか】\n炭酸水素ナトリウム(重そう)を加熱してできる3つの物質を答える力が問われている。\n\n【なぜそうなるのか】\n炭酸水素ナトリウムを加熱すると分解して炭酸ナトリウム・水・二酸化炭素の3つの物質に分かれる。\n\n【ステップ1】\n試験管に残る白い固体(炭酸ナトリウム)を確認する。\n\n【ステップ2】\n試験管の口につく水と、石灰水を白くにごらせる二酸化炭素を確認する。\n\n【答え】\n炭酸ナトリウム・水・二酸化炭素\n\n【確かめ】\n試験管の口を少し下げて加熱する理由(水が加熱部に流れて割れるのを防ぐ)も再確認する。\n\n【よくあるまちがい】\nできる物質を1つだけと考えないこと。\n\n【ここが絶対】\nホットケーキがふくらむのは発生する二酸化炭素のはたらきであることを押さえる。',
    difficulty: 'advanced',
    answerReading: '炭酸水素ナトリウム2つから、炭酸ナトリウムと水と二酸化炭素が生成する',
  },
  {
    id: 'rika_42',
    subject: 'rika',
    question:
      'こん虫は種類によって、冬をこすときのすがたがちがいます。カマキリはどのようなすがたで冬をこしますか。',
    answer:
      'たまご',
    hint:
      '秋に、木のえだや草のくきに、あわのかたまりのようなものがついているのを見たことはありませんか。あの中身が答えです。',
    explanation:
      '【何を聞かれているか】\nカマキリが、冬のあいだをどのすがた（たまご・幼虫・さなぎ・成虫）で過ごすかです。\n\n【なぜ、こん虫は冬のすがたがちがうのか】\nこん虫は自分で体温をつくれないので、寒くなると動けなくなります。だから、冬はえさをとらずにじっとしていられるすがたで過ごします。どのすがたがいちばん寒さに強いかが種類によってちがうので、冬ごしのすがたも分かれます。\n\n【ステップ1】カマキリの1年を追う\n・秋　…… おとなのカマキリが、木のえだや草のくきに、あわのようなかたまりを産みつけます。これが卵のう（らんのう）で、中に数百個のたまごが入っています。\n・冬　…… 親のカマキリは死んでしまい、たまごだけがこの卵のうの中で冬をこします。\n・春　…… あたたかくなると、中から小さな幼虫がいっせいに出てきます。\n\n【ステップ2】なぜたまごで冬をこせるのか\n卵のうのあわはかわくとスポンジのようになり、中に空気をたくさんふくみます。この空気が布団のはたらきをして、外の冷たさが中まで届きにくくなります。だから、えさを食べないたまごのままでも冬をこせるのです。\n\n【答え】\nたまご\n\n【確かめ】\n冬に公園の草むらを見ると、親のカマキリはいませんが、かれたくきに茶色いあわのかたまりが残っています。親がいないのに次の春に幼虫が出てくることが、たまごで冬をこしている証拠です。\n\n【よくあるまちがい】\n「成虫のまま冬をこす」と答えてしまう人が多いですが、カマキリの成虫は冬をこせません。ほかのこん虫もあわせて覚えておきましょう。\n・たまご　…… カマキリ、コオロギ、バッタ\n・幼虫　…… カブトムシ、トンボ（ヤゴ）、セミ\n・さなぎ　…… モンシロチョウ、アゲハ\n・成虫　…… テントウムシ、アリ、ミツバチ',
    difficulty: 'advanced',
    answerReading: 'たまご',
  },
  {
    id: 'rika_43',
    subject: 'rika',
    question: '天体の年周運動：同じ時刻に星座を観察すると、1か月でどれだけ移動して見えるか？また1年で元の位置に戻るのはなぜか？',
    answer: '約30度西に移動して見える。地球が太陽の周りを公転（365日で360度）するため、1か月で約30度公転する',
    explanation:
      '【何を聞かれているか】\n同じ時刻に観察した星座が1か月でどれだけ移動して見えるか、1年で元にもどる理由を答える力が問われている。\n\n【なぜそうなるのか】\n地球は365日で360度公転するため、1か月では360÷12=約30度公転し、星座はその分だけ西へずれて見える。\n\n【ステップ1】\n地球の公転(365日で360度)を確認する。\n\n【ステップ2】\n1年で30×12=360度となり元の位置にもどることを確認する。\n\n【答え】\n約30度西に移動して見える。地球が太陽の周りを公転(365日で360度)するため、1か月で約30度公転する\n\n【確かめ】\n星が同じ位置に来る時刻が1か月で約2時間早くなることも再確認する。\n\n【よくあるまちがい】\n星座自体が動いていると考えないこと。\n\n【ここが絶対】\nこの見かけの動きを年周運動と呼ぶことを押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_44',
    subject: 'rika',
    question: 'てこの問題：長さ120cmの棒の左端から30cmの点に支点を置く。左端に100gのおもり、右端に何gのおもりを置けばつりあうか？',
    answer: '約33g',
    hint: '100×30 = F×90 → F = 100×30/90 ≈ 33.3g',
    explanation:
      '【何を聞かれているか】\n長さ120cmの棒の左端から30cmに支点を置き、左端に100gのおもりがあるとき右端につるすとつり合うおもりの重さを求める力が問われている。\n\n【なぜそうなるのか】\nてこは重さ×支点からの距離が左右で等しいときつり合う。\n\n【ステップ1】\n支点から左端30cm、右端120-30=90cmを確認する。\n\n【ステップ2】\n100×30=3000、3000÷90=33.3を計算する。\n\n【答え】\n約33g\n\n【確かめ】\n支点から遠いほど小さい力でつり合うことも再確認する。\n\n【よくあるまちがい】\n右端までの距離を棒全体の長さのまま使わないこと。\n\n【ここが絶対】\n支点からの距離で計算することを押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_45',
    subject: 'rika',
    question:
      '植物の光合成には二酸化炭素が必要であることを確かめるには、どのような実験をすればよいですか。くらべ方もふくめて説明しなさい。',
    answer:
      '同じ植物の葉を2つのふくろに入れ、一方には息をふきこんで二酸化炭素を多くした空気を、もう一方には二酸化炭素を取りのぞいた空気（石灰水やアルカリの液を入れて二酸化炭素を吸わせた空気）を入れる。ほかの条件はすべて同じにして、両方を同じように日光に当てる。その後、それぞれの葉をエタノールで脱色してヨウ素液にひたすと、二酸化炭素のあるほうの葉だけが青むらさき色に変わる。これで、光合成には二酸化炭素が必要だと分かる。',
    hint:
      '調べたいのは二酸化炭素だけ。だから、二酸化炭素があるかないかだけを変えて、日光・温度・葉の種類などほかの条件は全部そろえる。',
    explanation:
      '【何を聞かれているか】\n「光合成に二酸化炭素が必要だ」ということを、実験でどう示すかです。\n\n【まず、実験のいちばん大事な決まり】\n調べたいこと以外の条件は、すべて同じにそろえます。変えるのは二酸化炭素があるかないかの1つだけです。こうしてはじめて、差が出たときに「原因は二酸化炭素だ」と言いきれます。これを対照実験といいます。\nもし日光の当たり方まで変えてしまったら、差が出ても、二酸化炭素のせいなのか日光のせいなのか分からなくなってしまいます。\n\n【ステップ1】前の日に暗いところに置く\n葉の中にもともとデンプンが残っていると、実験でできたものかどうか分かりません。1日暗いところに置いて、葉の中のデンプンをなくしておきます。\n\n【ステップ2】2つの条件をつくる\n同じ植物の同じくらいの葉を2枚選び、それぞれとうめいなふくろに入れます。\n・ふくろA …… ストローで息をふきこむ。はく息には二酸化炭素が多くふくまれている。\n・ふくろB …… 二酸化炭素を吸い取る液（石灰水など）をいっしょに入れて、ふくろの中の二酸化炭素を取りのぞく。\nどちらも口をしっかりとじます。\n\n【ステップ3】同じ条件で日光に当てる\n2つのふくろを、同じ場所に、同じ時間、同じように日光に当てます。温度も同じにします。\n\n【ステップ4】デンプンができたかを調べる\n葉を取り出し、湯にひたしてやわらかくし、あたためたエタノールにつけて緑色をぬきます。水で洗ってからヨウ素液にひたします。\n\n【結果】\n・ふくろA（二酸化炭素あり）の葉 …… 青むらさき色に変わる → デンプンができた\n・ふくろB（二酸化炭素なし）の葉 …… 変わらない → デンプンができなかった\n日光も温度も同じだったのに差が出たのですから、原因は二酸化炭素のちがいしかありません。よって、光合成には二酸化炭素が必要だといえます。\n\n【答え】\n二酸化炭素のあるふくろとないふくろを用意し、ほかの条件をすべて同じにして日光に当てる。そのあとヨウ素液で調べると、二酸化炭素のあるほうの葉だけが青むらさき色になる。\n\n【確かめ】\n同じ考え方で、日光が必要なことも確かめられます。その場合は、二酸化炭素の条件をそろえたうえで、一方だけをアルミはくでおおって日光を当てないようにします。変える条件を1つにする、という形は同じです。\n\n【よくあるまちがい】\n・ふくろBを用意せず、二酸化炭素を入れたほうだけで実験してしまう。くらべる相手がないと、何も結論できません。\n・前の日に暗いところに置く操作をとばしてしまう。もとからあったデンプンと区別できなくなります。\n・エタノールを直接火にかけてしまう。燃えやすいので、必ず湯につけた入れ物の中であたためます。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_46',
    subject: 'rika',
    question: '複雑な食物連鎖：植物→バッタ→カエル→ヘビ→タカという食物連鎖で、植物が100kgあったとき、タカが獲得できるエネルギー量は理論上何kg？',
    answer: '0.01kg（10g）',
    hint: '各段階で10%しか移行しない。100 × 0.1 × 0.1 × 0.1 × 0.1 = 0.01kg',
    explanation:
      '【何を聞かれているか】\n植物→バッタ→カエル→ヘビ→タカの食物連鎖で植物100kgからタカが得られるエネルギー量を求める力が問われている。\n\n【なぜそうなるのか】\n1段階上がるごとに伝わるエネルギーは10分の1になるため、4段階を経ると0.1を4回かける。\n\n【ステップ1】\n各段階で10%しか移行しないことを確認する。\n\n【ステップ2】\n100×0.1×0.1×0.1×0.1=0.01を計算する。\n\n【答え】\n0.01kg(10g)\n\n【確かめ】\nバッタ10kg→カエル1kg→ヘビ0.1kg→タカ0.01kgと段階ごとに計算して確かめる。\n\n【よくあるまちがい】\n段階を経ても量が変わらないと考えないこと。\n\n【ここが絶対】\n食物連鎖の上位ほど数が少なくなることを押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_47',
    subject: 'rika',
    question: '血液循環：肺循環と体循環の経路をそれぞれ答えよ。動脈血・静脈血はどこを流れるか？',
    answer: '肺循環: 右心室→肺動脈→肺→肺静脈→左心房（肺動脈に静脈血、肺静脈に動脈血）。体循環: 左心室→大動脈→全身→大静脈→右心房',
    explanation:
      '【何を聞かれているか】\n肺循環と体循環の経路、動脈血・静脈血がどこを流れるかを答える力が問われている。\n\n【なぜそうなるのか】\n血管の名前は心臓から出るか心臓へもどるかで決まるため、肺動脈には静脈血、肺静脈には動脈血が流れるという逆転が起こる。\n\n【ステップ1】\n肺循環(右心室→肺動脈→肺→肺静脈→左心房)を確認する。\n\n【ステップ2】\n体循環(左心室→大動脈→全身→大静脈→右心房)を確認する。\n\n【答え】\n肺循環:右心室→肺動脈→肺→肺静脈→左心房(肺動脈に静脈血、肺静脈に動脈血)。体循環:左心室→大動脈→全身→大静脈→右心房\n\n【確かめ】\n血管の名前と流れる血液の種類は関係ないことも再確認する。\n\n【よくあるまちがい】\n肺動脈に動脈血が流れると考えないこと。\n\n【ここが絶対】\n動脈・静脈は心臓から出るか戻るかで決まることを押さえる。',
    difficulty: 'advanced',
    answerReading: '肺循環: 右心室から肺動脈を通って肺へ、肺静脈を通って左心房へ。肺動脈には静脈血、肺静脈には動脈血が流れる。体循環: 左心室から大動脈で全身へ、大静脈で右心房へ戻る',
  },
  {
    id: 'rika_48',
    subject: 'rika',
    question: '鉄・亜鉛・銅・マグネシウムをそれぞれうすい塩酸に入れた。気体が発生しない金属はどれか。',
    answer: '銅',
    explanation: '【何を聞かれているか】\nうすい塩酸に入れても気体が出ない金属はどれかです。\n\n【塩酸と金属】\n鉄・亜鉛・マグネシウム・アルミニウムをうすい塩酸に入れると、金属がとけて水素の泡が出る。マグネシウムがいちばん激しく、鉄はゆっくり。\n\n【銅はとけない】\n銅は塩酸にとけにくい金属なので、入れても泡は出ず、変化しない。金・銀と同じ「とけにくいなかま」。\n\n【答え】銅\n\n【まちがえやすいところ】\n「金属ならどれも塩酸にとける」と考えてしまう。銅は例外として必ず覚える。',
    difficulty: 'advanced',
    questionReading: '鉄・亜鉛・銅・マグネシウムをそれぞれうすい塩酸に入れた。気体が発生しない金属はどれか。',
    answerReading: '銅',
  },
  {
    id: 'rika_49',
    subject: 'rika',
    question: '皆既月食が起こる条件と、なぜ月が赤く見えるかを説明せよ。',
    answer: '条件: 満月のとき、月が地球の本影に完全に入ること。赤く見える理由: 地球の大気で散乱された赤い光のみが月面に届き反射されるため',
    explanation:
      '【何を聞かれているか】\n皆既月食が起こる条件と月が赤く見える理由を答える力が問われている。\n\n【なぜそうなるのか】\n満月のとき月が地球の本影にすっぽり入ると皆既月食になり、地球の大気で青い光が散らばり赤い光だけが月に届くため赤く見える。\n\n【ステップ1】\n太陽・地球・月が一直線に並ぶ条件(満月)を確認する。\n\n【ステップ2】\n赤い光が届く理由(青い光が大気で散らばる)を確認する。\n\n【答え】\n条件:満月のとき、月が地球の本影に完全に入ること。赤く見える理由:地球の大気で散乱された赤い光のみが月面に届き反射されるため\n\n【確かめ】\n夕焼けが赤いのと同じ理由であることも再確認する。\n\n【よくあるまちがい】\n月食で月が真っ暗になると考えないこと。\n\n【ここが絶対】\nこの赤い月を赤銅色の月と呼ぶことを押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_50',
    subject: 'rika',
    question: '電磁石を使ったモーターで、回る向きを逆にする方法を2つ答えよ。また、電池の向きと磁石の向きの両方を逆にすると、回る向きはどうなるか。',
    answer: '①電池の＋極と−極を逆にする（電流の向きを逆にする）②磁石のN極とS極を入れかえる。両方を逆にすると、逆の逆でもとと同じ向きに回る',
    explanation: '【何を聞かれているか】\nモーターの回る向きが何で決まるかを問う問題。\n\n【モーターが回るしくみ】\nコイルに電流を流すとコイルは電磁石になり、N極・S極ができる。まわりの磁石とN−Sで引き合い、N−Nでしりぞけ合う力で回る。\n\n【向きを逆にする2つの方法】\n①電池の向きを逆にする → コイルに流れる電流の向きが逆 → コイルのN極とS極が入れかわる → 引き合う相手・しりぞけ合う相手が入れかわり、逆に回る。\n②磁石のN極とS極を入れかえる → コイルの極はそのままでも、相手の極が逆になるので逆に回る。\n\n【両方を逆にすると】\n逆にする操作を2回すると、もとにもどる。コイルの極も相手の極も入れかわっているので、引き合う組み合わせは最初と同じ。よって同じ向きに回る。\n\n【確かめ】\n「逆にした回数」を数える。奇数回なら逆回転、偶数回なら同じ向き。\n\n【よくあるまちがい】\n「2つとも逆にしたのだから逆になる」と考えるミス。逆の逆はもとどおり。また、電池を並列にふやしても向きも速さも変わらない（直列にふやすと速く回る）。',
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
    explanation:
      '【何を聞かれているか】日本で最も長い川である。\n\n【なぜそうなるのか】川の長さは源流から河口までの距離で決まる。信濃川は長野県内の山あいを通って新潟県の越後平野を横切り、遠回りして日本海に注ぐため、ほかの川より長くなる。\n\n【ステップ1】全長367km。長野県内では千曲川、新潟県に入ると信濃川と呼び名が変わる。\n\n【ステップ2】越後平野（新潟平野）をうるおして日本海に注ぎ、流域は日本一の米どころになっている。\n\n【答え】信濃川（全長367km）\n\n【確かめ】長さの順位は1位信濃川367km、2位利根川322km、3位石狩川268km。流域面積が日本一なのは利根川で、長さ日本一とは別の指標である。\n\n【よくあるまちがい】「日本一の川」と聞いて流域面積1位の利根川と答えてしまう。長さと流域面積は別の1位である。\n\n【ここが絶対】「長さ日本一＝信濃川（367km）、流域面積日本一＝利根川」の区別は地理の最頻出事項。',
    difficulty: 'basic',
  },
  {
    id: 'shakai_02',
    subject: 'shakai',
    question: '聖徳太子が十七条憲法を制定したのは何年？',
    answer: '604年',
    explanation:
      '【何を聞かれているか】聖徳太子が十七条憲法を制定した年である。\n\n【なぜそうなるのか】豪族がばらばらに力を持つ状態をやめ、天皇を中心とした政治にまとめるため、役人としての心構えを示す法を必要とした。\n\n【ステップ1】604年、推古天皇の摂政だった聖徳太子（厩戸皇子）が十七条憲法を定めた。\n\n【ステップ2】「和をもって貴しとなす」で始まり、役人の心構えや天皇への服従、仏教をうやまうことを説いた。\n\n【答え】604年\n\n【確かめ】前年の603年には、家がらではなく能力で人を役人に取り立てる冠位十二階を定めている。607年には小野妹子を遣隋使として送り、対等な立場での外交をめざした。\n\n【よくあるまちがい】冠位十二階（603年）と十七条憲法（604年）の順番を逆にする。冠位十二階が先である。\n\n【ここが絶対】「603年冠位十二階→604年十七条の憲法→607年遣隋使（小野妹子）」の年号の順番は歴史の最頻出事項。',
    difficulty: 'basic',
  },
  {
    id: 'shakai_03',
    subject: 'shakai',
    question: '日本の標準時子午線は東経何度？',
    answer: '東経135度（兵庫県明石市）',
    explanation:
      '【何を聞かれているか】日本の標準時の基準となる子午線の経度である。\n\n【なぜそうなるのか】地球は24時間で360度回るため、経度15度ごとに1時間の時差が生まれる。135は15でわり切れて9時間差というきりのよい数になるため、この経度が選ばれた。\n\n【ステップ1】東経135度、兵庫県明石市を通る。\n\n【ステップ2】イギリスのロンドン（旧グリニッジ天文台）を通る経度0度の本初子午線から東へ135度。135÷15＝9で、日本はイギリスより9時間進んでいる。\n\n【答え】東経135度（兵庫県明石市）\n\n【確かめ】経度0度の基準は本初子午線（イギリス）、緯度0度の基準は赤道であり、混同しないようにする。\n\n【よくあるまちがい】標準時子午線を大阪や神戸を通ると思ってしまう。通るのは兵庫県明石市である。\n\n【ここが絶対】「日本の標準時子午線＝東経135度（明石市）、イギリスとの時差は9時間」は地理の最頻出事項。',
    difficulty: 'basic',
  },
  {
    id: 'shakai_04',
    subject: 'shakai',
    question: '日本国憲法が公布されたのは何年何月何日？',
    answer: '1946年11月3日',
    explanation:
      '【何を聞かれているか】日本国憲法が公布された年月日である。\n\n【なぜそうなるのか】GHQの示した案をもとに大日本帝国憲法を改正する形でつくられ、まず国民に広く知らせる（公布）、そのあと実際に効力を持たせる（施行）という2段階の手続きを経た。\n\n【ステップ1】1946年11月3日に公布。\n\n【ステップ2】半年後の1947年5月3日から施行された。\n\n【答え】1946年11月3日\n\n【確かめ】公布日の11月3日は文化の日、施行日の5月3日は憲法記念日という祝日になっている。\n\n【よくあるまちがい】公布と施行の日付を混同する。「公布」は知らせた日、「施行」は効力を持ち始めた日で意味も日付もちがう。\n\n【ここが絶対】「公布1946年11月3日（文化の日）→施行1947年5月3日（憲法記念日）」の日付と祝日の対応は歴史・公民の最頻出事項。',
    difficulty: 'basic',
  },
  {
    id: 'shakai_05',
    subject: 'shakai',
    question: '世界で最も面積が大きい国は？',
    answer: 'ロシア',
    explanation:
      '【何を聞かれているか】世界でいちばん面積が大きい国である。\n\n【なぜそうなるのか】ユーラシア大陸北部を東西に広く占める国が、面積で世界一になる。\n\n【ステップ1】ロシア。面積は約1710万km²で、日本（約38万km²）の約45倍。\n\n【ステップ2】東西に長いため国内に11もの時間帯がある。\n\n【答え】ロシア\n\n【確かめ】面積の順は1位ロシア、2位カナダ、3位アメリカ、4位中国、5位ブラジル。\n\n【よくあるまちがい】面積最大の国と人口最多の国を混同する。人口最多はインド（近年、中国を追いこした）で、面積の順位とはちがう。\n\n【ここが絶対】「面積世界一＝ロシア（約1710万km²）、人口世界一＝インド」の区別は地理の最頻出事項。',
    difficulty: 'basic',
  },
  {
    id: 'shakai_06',
    subject: 'shakai',
    question: '参議院議員の任期は何年？',
    answer: '6年（3年ごとに半数改選）',
    explanation:
      '【何を聞かれているか】参議院議員の任期である。\n\n【なぜそうなるのか】議員が一度に全部入れかわらないようにして政治を安定させ、じっくり話し合う「良識の府」とするため、任期を長くし半数改選のしくみにしている。\n\n【ステップ1】任期6年、3年ごとに半数ずつ選び直す（半数改選）。解散はない。\n\n【ステップ2】衆議院は任期4年で解散がある。そのため予算の議決・条約の承認・内閣総理大臣の指名などで衆議院の優越が認められている。\n\n【答え】6年（3年ごとに半数改選）\n\n【確かめ】被選挙権は参議院が30歳以上、衆議院が25歳以上である。\n\n【よくあるまちがい】参議院を「6年で全員改選」と考えてしまう。3年ごとに半数ずつである。\n\n【ここが絶対】「参議院＝任期6年・半数改選・解散なし、衆議院＝任期4年・解散あり」の対比は公民の最頻出事項。',
    difficulty: 'basic',
  },
  {
    id: 'shakai_07',
    subject: 'shakai',
    question: '江戸幕府を開いたのは誰？',
    answer: '徳川家康',
    explanation:
      '【何を聞かれているか】江戸幕府を開いた人物。\n【なぜそうなるのか】1600年の**関ヶ原の戦い**で石田三成らを破って全国の実権をにぎった徳川家康が、**1603年に征夷大将軍に任命**されて江戸に幕府を開いた。\n【ステップ1】徳川家康。\n【答え】徳川家康\n【確かめ】「ヒーロー・オー・サン（1603）」。家康は2年で将軍職を子の秀忠にゆずり、徳川家が代々将軍になることを示した。幕府は1867年の大政奉還まで約260年。\n【よくあるまちがい】豊臣秀吉と混ぜる。**秀吉は幕府を開いていない**（関白）。\n【ここが絶対】「1600年関ヶ原→1603年征夷大将軍」の年号の組み合わせは超頻出。江戸幕府を開いたのは家康、秀吉との混同は絶対に避ける。',
    difficulty: 'basic',
  },
  {
    id: 'shakai_08',
    subject: 'shakai',
    question: '日本の国会は衆議院と何院からなる？',
    answer: '参議院',
    explanation:
      '【何を聞かれているか】日本の国会が衆議院と何院からなるかである。\n\n【なぜそうなるのか】審議を慎重に行い、一方の行きすぎをもう一方がチェックできるようにするため、2つの議院を置いている。\n\n【ステップ1】衆議院と参議院の2つの議院からなる。これを二院制（両院制）という。\n\n【ステップ2】衆議院は任期4年・解散あり・定数465人、参議院は任期6年・解散なし・定数248人。\n\n【答え】参議院\n\n【確かめ】国会は憲法で「国権の最高機関であって、国の唯一の立法機関」と定められており、法律をつくれるのは国会だけである。\n\n【よくあるまちがい】参議院にも解散があると考えてしまう。解散があるのは衆議院だけである。\n\n【ここが絶対】「日本の国会＝二院制（衆議院・参議院）」と両院の任期・定数のちがいは公民の最頻出事項。',
    difficulty: 'basic',
  },
  {
    id: 'shakai_09',
    subject: 'shakai',
    question: '縄文時代の次の時代は？',
    answer: '弥生時代',
    explanation:
      '【何を聞かれているか】縄文時代の次の時代。\n【なぜそうなるのか】大陸から**稲作と金属器**が伝わり、米をたくわえることで貧富の差や身分が生まれ、むらがくにへまとまっていった。この時代が弥生時代。\n【ステップ1】弥生時代（紀元前4世紀ごろ〜3世紀ごろ）。\n【答え】弥生時代\n【確かめ】名前は東京都の弥生町で見つかった土器から。弥生土器は縄文土器よりうすくかたい。吉野ヶ里遺跡（佐賀）・登呂遺跡（静岡）。順は 旧石器→縄文→弥生→古墳。\n【よくあるまちがい】古墳時代を次にする。**縄文→弥生→古墳**。\n【ここが絶対】「稲作＋金属器＝弥生時代」は最頻出パターン。時代の並び「旧石器→縄文→弥生→古墳」は丸ごと暗記すること。',
    difficulty: 'basic',
  },
  {
    id: 'shakai_10',
    subject: 'shakai',
    question: '日本最大の湖は？',
    answer: '琵琶湖（滋賀県）',
    explanation:
      '【何を聞かれているか】日本最大の湖である。\n\n【なぜそうなるのか】滋賀県の中央にある大きなくぼ地に水がたまってできたため、日本でいちばん大きな湖になっている。\n\n【ステップ1】琵琶湖（滋賀県）。面積は約670km²で、滋賀県の面積の約6分の1をしめる。\n\n【ステップ2】瀬田川→宇治川→淀川と名を変えて流れ出し、京都・大阪の人々の飲み水になっているので「近畿の水がめ」と呼ばれる。\n\n【答え】琵琶湖（滋賀県）\n\n【確かめ】面積の2位は茨城県の霞ヶ浦、3位は北海道のサロマ湖。いちばん深い湖は秋田県の田沢湖（423m）。\n\n【よくあるまちがい】「日本一深い湖」を琵琶湖だと思ってしまう。深さ1位は田沢湖で、広さの順位とはちがう。\n\n【ここが絶対】「面積日本一の湖＝琵琶湖（滋賀県）、深さ日本一＝田沢湖」の区別は地理の最頻出事項。',
    difficulty: 'basic',
  },
  {
    id: 'shakai_11',
    subject: 'shakai',
    question: '関ヶ原の戦いが起きた年は？',
    answer: '1600年',
    explanation:
      '【何を聞かれているか】関ヶ原の戦いの年。\n【なぜそうなるのか】豊臣秀吉の死後、**徳川家康の東軍と石田三成らの西軍**が岐阜県の関ヶ原で戦い、東軍が勝った。「天下分け目の戦い」。\n【ステップ1】1600年。\n【答え】1600年\n【確かめ】「ヒーロー（1600）現る関ヶ原」。3年後の1603年に江戸幕府。このあとしたがった大名は外様大名として遠くに配置。\n【よくあるまちがい】1603年と混ぜる。**戦いが1600、幕府が1603**。\n【ここが絶対】「関ヶ原1600年・江戸幕府1603年」は年号のセットで超頻出。この3年のずれを狙ったひっかけ問題が非常に多い。',
    difficulty: 'basic',
  },
  {
    id: 'shakai_12',
    subject: 'shakai',
    question: 'アメリカ合衆国の首都は？',
    answer: 'ワシントンD.C.',
    explanation:
      '【何を聞かれているか】アメリカ合衆国の首都。\n【なぜそうなるのか】首都はワシントンD.C.。**どの州にも属さない特別区**として計画的につくられた政治の中心で、ホワイトハウスと連邦議会がある。\n【ステップ1】ワシントンD.C.。\n【答え】ワシントンD.C.\n【確かめ】人口最大の都市はニューヨーク（国連本部）で首都ではない。首都と最大都市がちがう国：オーストラリア（キャンベラ／シドニー）、ブラジル（ブラジリア）。\n【よくあるまちがい】ニューヨークを首都にする。**首都はワシントン**。\n【ここが絶対】「首都と最大都市が違う国」は地理の頻出テーマ。アメリカ＝ワシントンD.C.（首都）とニューヨーク（最大都市）は必ずセットで覚える。',
    difficulty: 'basic',
  },
  {
    id: 'shakai_13',
    subject: 'shakai',
    question: '日本で最も高い山は？',
    answer: '富士山（3776m）',
    explanation:
      '【何を聞かれているか】日本でいちばん高い山。\n【なぜそうなるのか】静岡県と山梨県にまたがる**富士山 3776m**。何度もふん火してできた円すい形の成層火山で、今も活火山。\n【ステップ1】富士山（3776m）。\n【答え】富士山（3776m）\n【確かめ】「みなろう（3776）」。2位は北岳（3193m）、3位は奥穂高岳・間ノ岳（3190m）。2013年に世界文化遺産（自然遺産ではない）。\n【よくあるまちがい】世界自然遺産と書く。**文化遺産**。\n【ここが絶対】「富士山3776m」「世界文化遺産（自然遺産ではない）」の2点は毎年のように出る最頻出事項。',
    difficulty: 'basic',
  },
  {
    id: 'shakai_14',
    subject: 'shakai',
    question: '明治維新が始まった年は？',
    answer: '1868年',
    explanation:
      '【何を聞かれているか】明治維新が始まった年。\n【なぜそうなるのか】1867年の**大政奉還**で政権が朝廷にもどり、**1868年**に新政府が五箇条の御誓文を出し、江戸を東京と改め、元号を明治とした。\n【ステップ1】1868年。\n【答え】1868年\n【確かめ】「一つやろう（1868）」。続いて版籍奉還1869・廃藩置県1871・学制1872・徴兵令と地租改正1873。\n【よくあるまちがい】大政奉還の1867年と混ぜる。**明治は1868**。\n【ここが絶対】「大政奉還1867年→明治1868年」の1年のずれは超頻出のひっかけ。年号の並び順（1869版籍奉還→1871廃藩置県→1872学制→1873徴兵令・地租改正）も丸ごと覚える。',
    difficulty: 'basic',
  },
  {
    id: 'shakai_15',
    subject: 'shakai',
    question: '国連（国際連合）の本部はどこ？',
    answer: 'ニューヨーク（アメリカ）',
    explanation:
      '【何を聞かれているか】国際連合（国連）の本部が置かれている都市である。\n\n【なぜそうなるのか】1945年の国連発足時にアメリカのニューヨークに本部を置くことが決められた。\n\n【ステップ1】ニューヨーク（アメリカ）。\n\n【ステップ2】国連は第二次世界大戦の反省から世界の平和と安全を守るために発足し、日本は1956年に加盟した。\n\n【答え】ニューヨーク（アメリカ）\n\n【確かめ】前身の国際連盟の本部はスイスのジュネーブである。国連の主な機関には総会・安全保障理事会・国際司法裁判所（オランダのハーグ）などがある。\n\n【よくあるまちがい】国連の本部をジュネーブだと思ってしまう。ジュネーブは国際連盟の本部で、国連の本部はニューヨークである。\n\n【ここが絶対】「国連本部＝ニューヨーク、国際連盟本部＝ジュネーブ」の区別は歴史・公民の最頻出事項。',
    difficulty: 'basic',
  },
  {
    id: 'shakai_16',
    subject: 'shakai',
    question: '日本の都道府県は全部でいくつ？',
    answer: '47都道府県',
    explanation:
      '【何を聞かれているか】日本の都道府県の数である。\n\n【なぜそうなるのか】1871年の廃藩置県で藩を廃止して府県を置き、その後まとめられて現在の47の形になった。\n\n【ステップ1】47都道府県。内わけは1都（東京都）・1道（北海道）・2府（大阪府・京都府）・43県。\n\n【ステップ2】面積が最大なのは北海道、最小は香川県。人口が最多なのは東京都、最少は鳥取県。\n\n【答え】47都道府県\n\n【確かめ】海に面していない内陸県は、栃木・群馬・埼玉・山梨・長野・岐阜・滋賀・奈良の8県。\n\n【よくあるまちがい】府を3つ（東京もふくめて）と数えてしまう。東京は「都」であって「府」ではない。\n\n【ここが絶対】「1都・1道・2府（大阪・京都）・43県＝47」の内わけは地理の最頻出事項。',
    difficulty: 'basic',
  },
  {
    id: 'shakai_17',
    subject: 'shakai',
    question: '日本最南端の都道府県は？',
    answer: '沖縄県',
    explanation:
      '【何を聞かれているか】いちばん南の都道府県。\n【なぜそうなるのか】都道府県でいちばん南は**沖縄県**（県庁所在地は那覇市）。亜熱帯で、さとうきび・パイナップル・きく、観光がさかん。1972年にアメリカから返還。\n【ステップ1】沖縄県。\n【答え】沖縄県\n【確かめ】日本の国土全体の最南端の島は**沖ノ鳥島（東京都）**。最東端は南鳥島（東京都）、最西端は与那国島（沖縄県）、最北端は択捉島（北海道）。\n【よくあるまちがい】「最南端」と聞いて沖ノ鳥島＝沖縄と思う。**沖ノ鳥島は東京都**。\n【ここが絶対】「沖縄県＝最南端の都道府県」と「沖ノ鳥島＝日本の最南端の地点（東京都）」を混同させる問題は超頻出。東西南北端点は必ずセットで覚える。',
    difficulty: 'basic',
  },
  {
    id: 'shakai_18',
    subject: 'shakai',
    question: '坂本龍馬は何時代の人物か？また出身地（藩）はどこか？',
    answer: '幕末（江戸時代末期）、土佐藩（高知県）出身',
    explanation:
      '【何を聞かれているか】坂本龍馬の時代と出身藩。\n【なぜそうなるのか】龍馬は**江戸時代の終わり（幕末）**に活やくした**土佐藩（高知県）**の武士。1866年に対立していた薩摩藩と長州藩を結びつけ（薩長同盟）、倒幕への流れをつくった。\n【ステップ1】幕末、土佐藩。\n【答え】幕末（江戸時代末期）、土佐藩（高知県）\n【確かめ】亀山社中（海援隊）・船中八策。1867年に京都の近江屋で暗殺され、明治維新を見ていない。\n【よくあるまちがい】明治時代の人と思う。**明治になる直前に亡くなった**。\n【ここが絶対】「薩長同盟1866年」「龍馬は明治を見ずに暗殺された」は幕末史の頻出ポイント。',
    difficulty: 'basic',
  },
  {
    id: 'shakai_19',
    subject: 'shakai',
    question: '中国の首都は？',
    answer: '北京',
    explanation:
      '【何を聞かれているか】中国の首都。\n【なぜそうなるのか】中華人民共和国の首都は**北京**。政治の中心で天安門広場・故宮がある。\n【ステップ1】北京。\n【答え】北京\n【確かめ】人口最大・経済の中心は上海だが首都ではない。中国は人口約14億人、面積世界4位。\n【よくあるまちがい】上海を首都にする。**首都は北京**。\n【ここが絶対】「首都と経済の中心が違う国」の定番パターン。中国＝北京（首都）と上海（経済の中心）は必ずセットで覚える。',
    difficulty: 'basic',
  },
  {
    id: 'shakai_20',
    subject: 'shakai',
    question: '衆議院議員の任期は何年か？また解散はあるか？',
    answer: '4年。ただし解散がある（任期前に解散されることがある）',
    explanation:
      '【何を聞かれているか】衆議院議員の任期と解散の有無である。\n\n【なぜそうなるのか】そのときどきの国民の意思をすばやく政治に反映させるため、任期の途中でも解散して選挙をやり直せるしくみになっている。\n\n【ステップ1】任期は4年。ただし解散があり、解散されると任期の途中でも議員の資格を失って選挙をやり直す。\n\n【ステップ2】参議院は任期6年で解散がなく、3年ごとに半数を改選する。\n\n【答え】4年。ただし解散がある（任期前に解散されることがある）\n\n【確かめ】こうした理由から、法律案・予算・条約の承認・内閣総理大臣の指名などで衆議院の優越が認められている。\n\n【よくあるまちがい】衆議院が必ず4年間つとめきると思ってしまう。解散によって実際には4年間つとめきることは少ない。\n\n【ここが絶対】「衆議院＝任期4年・解散あり」により最近の民意を反映しやすく、それゆえ衆議院の優越が認められる点は公民の最頻出事項。',
    difficulty: 'basic',
  },

  // --- standard (20問) ---
  {
    id: 'shakai_21',
    subject: 'shakai',
    question: '日本の気候区分：太平洋側の気候の特徴は？（夏・冬の降水量について）',
    answer: '夏に降水量が多く（南東の季節風の影響）、冬は乾燥して晴れることが多い',
    explanation:
      '【何を聞かれているか】日本の気候区分のうち、太平洋側の気候の特徴（夏・冬の降水量）である。\n\n【なぜそうなるのか】夏は南東の季節風が太平洋からしめった空気を運んで山地にぶつかり雨を降らせるが、冬は北西の季節風が日本海側に雪を降らせたあとの乾いた風になって太平洋側に届くため。\n\n【ステップ1】夏は太平洋からしめった南東の季節風がふきこみ、山地にぶつかって太平洋側に多くの雨をふらせる。梅雨や台風も重なるため、夏の降水量が多くなる。\n\n【ステップ2】冬は大陸からの北西の季節風が日本海の上で水蒸気をふくみ、山地を越えるときに日本海側へ大雪をふらせる。山を越えた風は水分を失って乾いた風になるため、太平洋側は晴れて乾燥した日が続く（からっ風）。\n\n【答え】夏に降水量が多く（南東の季節風の影響）、冬は乾燥して晴れることが多い\n\n【確かめ】雨温図では、夏に降水量の山が1つある形が太平洋側、冬に山がある形が日本海側と見分けられる。\n\n【よくあるまちがい】冬に日本海側で雪が降る理由を理解しないまま覚える。冷たい季節風が日本海で水分をふくむためである。\n\n【ここが絶対】「太平洋側＝夏に多雨・冬に乾燥、日本海側＝冬に多雪」の対比は地理の最頻出事項。',
    difficulty: 'standard',
  },
  {
    id: 'shakai_22',
    subject: 'shakai',
    question: '稲作が最も盛んな東北地方の平野を答えよ。また日本最大の稲作地帯はどこか？',
    answer: '庄内平野（山形県）が有名。日本最大の稲作地帯は越後平野（新潟県）',
    explanation:
      '【何を聞かれているか】東北で稲作がさかんな平野と、日本最大の稲作地帯。\n【なぜそうなるのか】東北の米どころは**山形県の庄内平野**（最上川下流）。都道府県別の収穫量1位は新潟県で、その中心が**越後平野**（信濃川・阿賀野川）。\n【ステップ1】庄内平野（ほかに秋田平野・仙台平野）。\n【ステップ2】越後平野（新潟平野）。\n【答え】庄内平野（山形県）。日本最大の稲作地帯は越後平野（新潟県）\n【確かめ】新潟のコシヒカリ、山形のつや姫。東北と北陸を合わせて「日本の穀倉地帯」。\n【よくあるまちがい】越後平野を東北と思う。**新潟は中部（北陸）**。\n【ここが絶対】「東北＝庄内平野」「日本一＝越後平野（新潟＝中部地方）」という地域の分類を混同させるひっかけが頻出。',
    difficulty: 'standard',
  },
  {
    id: 'shakai_23',
    subject: 'shakai',
    question: '大化の改新（645年）で廃止されたものと、その後の政治改革の方向性を答えよ。',
    answer: '豪族による土地・人民の私有（私地私民）を廃止し、公地公民制へ移行する改革',
    explanation:
      '【何を聞かれているか】大化の改新で廃止されたものと、その後の方向。\n【なぜそうなるのか】645年、中大兄皇子と中臣鎌足が蘇我氏をたおし（乙巳の変）、改革を始めた。豪族が土地と人民を勝手に支配する**私地私民をやめ、すべて国のものとする公地公民**へ。\n【ステップ1】廃止：私地私民。\n【ステップ2】方向：公地公民→班田収授→律令国家（701年大宝律令）。\n【答え】豪族による土地・人民の私有（私地私民）を廃止し、公地公民へ\n【確かめ】「むしご（645）ろし」。「大化」は日本最初の元号。\n【よくあるまちがい】大化の改新で律令が完成したと思う。**完成は701年**。\n【ここが絶対】「645年大化の改新（公地公民へ）」と「701年大宝律令（完成）」は別の年号としてセットで覚える。',
    difficulty: 'standard',
  },
  {
    id: 'shakai_24',
    subject: 'shakai',
    question: '国際連合の安全保障理事会の常任理事国5か国を答えよ。',
    answer: 'アメリカ・イギリス・フランス・ロシア・中国（P5）',
    explanation:
      '【何を聞かれているか】国際連合の安全保障理事会の常任理事国5か国である。\n\n【なぜそうなるのか】重要な決定は5大国の一致が必要という考え方から、第二次世界大戦の戦勝国を中心とした常任理事国に拒否権があたえられている。\n\n【ステップ1】アメリカ・イギリス・フランス・ロシア・中国の5か国（P5）で、任期がなくずっと理事国をつとめる。\n\n【ステップ2】この5か国には拒否権があり、1か国でも反対すると重要な決議は成立しない。\n\n【答え】アメリカ・イギリス・フランス・ロシア・中国（P5）\n\n【確かめ】ほかに任期2年の非常任理事国が10か国あり、日本もこれまでに何度も選ばれている。\n\n【よくあるまちがい】非常任理事国にも拒否権があると思ってしまう。拒否権は常任理事国だけの特権である。\n\n【ここが絶対】「安保理常任理事国5か国（米・英・仏・露・中＝P5）と拒否権」は公民の最頻出事項。',
    difficulty: 'standard',
  },
  {
    id: 'shakai_25',
    subject: 'shakai',
    question: '日本の三大工業地帯を答えよ。（生産額が多い順）',
    answer: '中京工業地帯（愛知）・阪神工業地帯（大阪・兵庫）・京浜工業地帯（東京・神奈川）',
    explanation:
      '【何を聞かれているか】日本の三大工業地帯を生産額が多い順に答える。\n\n【なぜそうなるのか】自動車という単価の高い製品を大量に生産する中京工業地帯が出荷額でぬきんでており、京浜は地価の高さや用地不足で工場が地方へ移り生産額が下がった。\n\n【ステップ1】中京工業地帯（愛知県・三重県北部）→阪神工業地帯（大阪府・兵庫県）→京浜工業地帯（東京都・神奈川県）の順。\n\n【ステップ2】中京は豊田市の自動車工業を中心に日本最大の生産額をほこる。阪神は鉄鋼・化学など金属工業の割合が高く中小工場が多い。京浜はかつて日本一だったが工場が地方へ移り生産額が減った。\n\n【答え】中京工業地帯（愛知）・阪神工業地帯（大阪・兵庫）・京浜工業地帯（東京・神奈川）\n\n【確かめ】これらは原料の輸入や製品の輸出に便利な臨海部に発達し、帯のようにつながる太平洋ベルトの一部をなす。\n\n【よくあるまちがい】京浜工業地帯が今も出荷額日本一だと思ってしまう。現在の出荷額日本一は中京工業地帯である。\n\n【ここが絶対】「現在の出荷額日本一＝中京工業地帯（自動車中心）、かつては京浜が1位だった」は地理の最頻出事項。',
    difficulty: 'standard',
  },
  {
    id: 'shakai_26',
    subject: 'shakai',
    question: '鎌倉幕府を開いた源頼朝が征夷大将軍に任命されたのは何年か？また鎌倉幕府が滅んだのは何年か？',
    answer: '1192年に征夷大将軍就任。1333年に滅亡（後醍醐天皇・新田義貞らによる）',
    explanation:
      '【何を聞かれているか】頼朝の征夷大将軍就任の年と、鎌倉幕府がほろんだ年。\n【なぜそうなるのか】1185年に壇ノ浦で平氏をほろぼし守護・地頭を置く権利を得て、**1192年に征夷大将軍**。1333年に後醍醐天皇の呼びかけで足利尊氏・新田義貞が動き、**北条氏の幕府がほろんだ**。\n【ステップ1】1192年。\n【ステップ2】1333年。\n【答え】1192年に征夷大将軍。1333年に滅亡\n【確かめ】「いい国（1192）」。成立を1185年とする考えもある。約150年続いた。そのあと建武の新政→室町幕府。\n【よくあるまちがい】ほろぼしたのを足利尊氏だけとする。**後醍醐天皇の呼びかけ、新田義貞が鎌倉をせめた**。\n【ここが絶対】「1192年征夷大将軍・1333年滅亡」はどちらも超頻出。近年は成立年を1185年とする説も併記されるので両方おさえる。',
    difficulty: 'standard',
  },
  {
    id: 'shakai_27',
    subject: 'shakai',
    question: '日本国憲法の三大原則を答えよ。',
    answer: '国民主権・基本的人権の尊重・平和主義（戦争放棄）',
    explanation:
      '【何を聞かれているか】日本国憲法の三大原則である。\n\n【なぜそうなるのか】戦争への深い反省から、政治の主権を国民に置き、人権を保障し、二度と戦争をしないという決意を憲法に刻んだ。\n\n【ステップ1】国民主権…国の政治のあり方を最終的に決める力は国民にある。天皇は政治の権限を持たない「日本国および日本国民統合の象徴」とされる。\n\n【ステップ2】基本的人権の尊重…人が生まれながらに持つ権利は「侵すことのできない永久の権利」として保障される。平和主義…第9条で戦争の放棄・戦力の不保持・交戦権の否認を定めている。\n\n【答え】国民主権・基本的人権の尊重・平和主義（戦争放棄）\n\n【確かめ】大日本帝国憲法では主権者は天皇だったが、日本国憲法では国民主権に変わった点を対比して確認する。\n\n【よくあるまちがい】天皇を主権者だと思ってしまう。主権者は国民、天皇は象徴である。\n\n【ここが絶対】「日本国憲法の三大原則＝国民主権・基本的人権の尊重・平和主義」は公民の最頻出事項。',
    difficulty: 'standard',
  },
  {
    id: 'shakai_28',
    subject: 'shakai',
    question: '日本の農業における食料自給率（カロリーベース）は現在約何%か？',
    answer: '約38%（近年の数値）',
    hint:
      '先進国の中で最低レベルにあり、食料安全保障の課題となっている',
    explanation:
      '【何を聞かれているか】日本の食料自給率（カロリーベース）の現在のおよその数値である。\n\n【なぜそうなるのか】米はほぼ自給できるが、小麦・大豆・とうもろこし（家畜のえさ）などの多くを輸入に頼っているため、全体の自給率は低くなる。\n\n【ステップ1】カロリーベースで約38%。食べているエネルギーの6割以上を輸入にたよっている。\n\n【ステップ2】食生活が米中心からパン・肉・油の多い洋風に変わったことや、農家の高齢化・農地の減少が主な原因。\n\n【答え】約38%（近年の数値）\n\n【確かめ】生産額ベースで計算すると約6割となり、数え方によって数値が変わる点にも注意する。\n\n【よくあるまちがい】日本の米が足りていないと考えてしまう。米はほぼ自給できており、足りないのは小麦・大豆・飼料用の穀物である。\n\n【ここが絶対】「食料自給率（カロリーベース）＝約38%、先進国の中でも低い水準」は地理・公民の最頻出事項。',
    difficulty: 'standard',
  },
  {
    id: 'shakai_29',
    subject: 'shakai',
    question: '江戸時代の「参勤交代」制度の目的と、大名への経済的影響を説明せよ。',
    answer: '目的: 大名が幕府に反乱しないよう人質として妻子を江戸に置き、大名を定期的に江戸と藩に往来させ監視。影響: 莫大な費用がかかり大名の財力を消耗させた',
    explanation:
      '【何を聞かれているか】江戸時代の参勤交代制度の目的と、大名への経済的影響である。\n\n【なぜそうなるのか】大名に往復や江戸滞在の費用を負担させることで経済力を弱め、妻子を人質として江戸に置くことで反乱を防ぐねらいがあった。\n\n【ステップ1】1635年、3代将軍徳川家光が武家諸法度に定めた制度。大名は原則1年おきに江戸と自分の領地を行き来し、妻子は人質として江戸に住まわせられた。\n\n【ステップ2】大名行列の費用や江戸屋敷の維持費はすべて大名の負担で、収入の多くが消えたため大名の財力は弱まり、幕府に反抗する力を失った。\n\n【答え】目的: 大名が幕府に反乱しないよう人質として妻子を江戸に置き、大名を定期的に江戸と藩に往来させ監視。影響: 莫大な費用がかかり大名の財力を消耗させた\n\n【確かめ】五街道が整備されて宿場町がにぎわい、江戸の文化や物資が全国へ広まるという効果もあった。\n\n【よくあるまちがい】参勤交代を徳川家康が始めたと思ってしまう。制度化したのは3代将軍徳川家光（1635年）である。\n\n【ここが絶対】「参勤交代を制度化したのは3代将軍徳川家光（1635年、武家諸法度）」は歴史の最頻出事項。',
    difficulty: 'standard',
  },
  {
    id: 'shakai_30',
    subject: 'shakai',
    question: '日本の地形：フォッサマグナとは何か？また東北日本と西南日本の境界はどこか？',
    answer: 'フォッサマグナは本州中央部を南北に走る大地溝帯（大断裂）。東西日本の地質的境界で、西縁は糸魚川—静岡構造線',
    explanation:
      '【何を聞かれているか】フォッサマグナとは何か、また東北日本と西南日本の境界はどこかである。\n\n【なぜそうなるのか】本州の中央部にできた大きな溝状の地帯が、日本列島を地質的に東と西に分ける境目になっている。\n\n【ステップ1】フォッサマグナはラテン語で「大きなみぞ」という意味で、本州の中央部を南北に走る、地下深くまで新しい地層がつまった大地溝帯。\n\n【ステップ2】西のふちは糸魚川（新潟県）—静岡（静岡県）構造線という断層線ではっきりしているが、東のふちははっきりしていない。\n\n【答え】フォッサマグナは本州中央部を南北に走る大地溝帯（大断裂）。東西日本の地質的境界で、西縁は糸魚川—静岡構造線\n\n【確かめ】付近には浅間山・八ヶ岳・富士山など火山が並び、本州が「くの字」に折れ曲がって見えるのもこの構造による。\n\n【よくあるまちがい】糸魚川—静岡構造線とフォッサマグナ全体を同じだと思ってしまう。構造線はフォッサマグナの西縁にすぎない。\n\n【ここが絶対】「フォッサマグナ（大地溝帯）の西縁＝糸魚川－静岡構造線」の区別は地理の最頻出事項。',
    difficulty: 'standard',
  },
  {
    id: 'shakai_31',
    subject: 'shakai',
    question: 'PKO（国連平和維持活動）とは何か？日本は初めてどの国に自衛隊を派遣したか？',
    answer: '国連が紛争地域に送る平和維持のための活動。日本はカンボジア（1992年）に初派遣',
    explanation:
      '【何を聞かれているか】PKOとは何か、日本の初派遣先。\n【なぜそうなるのか】PKO（国連平和維持活動）は、国連が紛争地域に部隊や監視団を送り、**停戦の監視・選挙の支援・復旧**で平和を保つ活動。日本は1992年にPKO協力法をつくり、同年**カンボジア**に自衛隊を初派遣。\n【ステップ1】国連が紛争地域で平和を保つ活動。\n【ステップ2】カンボジア（1992年）。\n【答え】国連が紛争地域に送る平和維持の活動。カンボジア（1992年）\n【確かめ】憲法9条との関係で、停戦合意・武力行使をしないなどの参加5原則がある。その後モザンビーク・東ティモール・南スーダンなど。\n【よくあるまちがい】PKOを戦争に参加する活動と思う。**平和を保つ**。\n【ここが絶対】「PKO協力法1992年・初派遣はカンボジア」の組み合わせは公民の最頻出問題。',
    difficulty: 'standard',
  },
  {
    id: 'shakai_32',
    subject: 'shakai',
    question: '江戸時代に「鎖国」が続いていた中で、貿易を続けていた国・地域を2つ答えよ。',
    answer: 'オランダと中国（清）※長崎の出島でオランダ、長崎唐人屋敷で中国',
    explanation:
      '【何を聞かれているか】江戸時代の鎖国下でも貿易を続けていた国・地域を2つ答える。\n\n【なぜそうなるのか】オランダはキリスト教の布教をせず貿易だけを望んだため、幕府は信仰の広がりを心配せず利益と情報だけを得られる相手として貿易を許した。\n\n【ステップ1】江戸幕府は、キリスト教が広まるのをふせぎ、貿易の利益を独占するために、外国との行き来をきびしく制限した（1639年、ポルトガル船の来航禁止で完成）。\n\n【ステップ2】それでも貿易を続けたのはオランダと中国（清）。オランダは長崎の出島、中国船は長崎の唐人屋敷で取引した。\n\n【答え】オランダと中国（清）※長崎の出島でオランダ、長崎唐人屋敷で中国\n\n【確かめ】このほか、朝鮮とは対馬藩を通じて（朝鮮通信使が来日）、琉球王国とは薩摩藩を通じて、アイヌの人々とは松前藩を通じて交流があり、「四つの窓口」と呼ばれる。\n\n【よくあるまちがい】鎖国を完全な国交断絶だと思ってしまう。四つの窓口が開いていた。\n\n【ここが絶対】「鎖国＝完全な孤立ではなく長崎・対馬・薩摩・松前の四つの窓口による管理された交流」は歴史の最頻出事項。',
    difficulty: 'standard',
  },
  {
    id: 'shakai_33',
    subject: 'shakai',
    question: '日本の「四大公害病」を答えよ。',
    answer: '水俣病（熊本）・新潟水俣病（第二水俣病）・イタイイタイ病（富山）・四日市ぜんそく（三重）',
    explanation:
      '【何を聞かれているか】日本の四大公害病である。\n\n【なぜそうなるのか】高度経済成長期、工場が排水や排煙の対策をおろそかにしたため、各地で深刻な健康被害が発生した。\n\n【ステップ1】水俣病（熊本県、有機水銀）と新潟水俣病（新潟県、有機水銀）はどちらも同じ原因物質だが発生地・原因企業がちがう別の事件。\n\n【ステップ2】イタイイタイ病（富山県、カドミウム）は骨がもろくなる病気。四日市ぜんそく（三重県、亜硫酸ガス）は石油化学コンビナートの大気汚染による。\n\n【答え】水俣病（熊本）・新潟水俣病（第二水俣病）・イタイイタイ病（富山）・四日市ぜんそく（三重）\n\n【確かめ】いずれの裁判でも被害者側が勝訴し、1967年の公害対策基本法、1971年の環境庁（現在の環境省）設置につながった。\n\n【よくあるまちがい】水俣病と新潟水俣病を同じ事件だと思ってしまう。原因企業も発生地もちがう別々の事件である。\n\n【ここが絶対】「四大公害病＝水俣病・新潟水俣病（水銀）、イタイイタイ病（カドミウム）、四日市ぜんそく（大気汚染）」の物質と地域の対応は歴史・公民の最頻出事項。',
    difficulty: 'standard',
  },
  {
    id: 'shakai_34',
    subject: 'shakai',
    question: '「南蛮貿易」で日本に最初にキリスト教を伝えたのは誰か？また何年か？',
    answer: 'フランシスコ・ザビエル（イエズス会）、1549年に鹿児島に上陸',
    explanation:
      '【何を聞かれているか】キリスト教を最初に伝えた人と年。\n【なぜそうなるのか】1549年、イエズス会の**フランシスコ・ザビエル**が鹿児島に上陸して伝えた。宣教師はポルトガル・スペインの商人とともに来て、この貿易が南蛮貿易。\n【ステップ1】ザビエル。\n【ステップ2】1549年。\n【答え】フランシスコ・ザビエル、1549年\n【確かめ】「以後よく（1549）広まる」。鉄砲は6年前の1543年に種子島（「以後よさん」）。キリシタン大名も現れた。\n【よくあるまちがい】鉄砲とキリスト教の年を入れかえる。**鉄砲1543、キリスト教1549**。\n【ここが絶対】「鉄砲1543年・キリスト教1549年」の年号の対比は超頻出。6年差で必ずセットで覚える。',
    difficulty: 'standard',
  },
  {
    id: 'shakai_35',
    subject: 'shakai',
    question: 'EU（欧州連合）の共通通貨は何か？またEUに加盟しているが共通通貨を使用していない国を1つ答えよ。',
    answer: 'ユーロ（€）。使用していない国の例: スウェーデン、デンマーク、ポーランド、チェコ、ハンガリーなど',
    explanation:
      '【何を聞かれているか】EU（欧州連合）の共通通貨と、共通通貨を使用していない加盟国である。\n\n【なぜそうなるのか】通貨を統一すれば両替の手間や損がなくなり貿易や旅行がしやすくなるが、各国の経済状況にちがいがあるため、自国通貨を維持する国も残っている。\n\n【ステップ1】EUの共通通貨はユーロ（€）。共通通貨を使う国の集まりをユーロ圏という。\n\n【ステップ2】スウェーデン・デンマーク・ポーランド・チェコ・ハンガリーなどは今も自国の通貨を使っている。\n\n【答え】ユーロ（€）。使用していない国の例: スウェーデン、デンマーク、ポーランド、チェコ、ハンガリーなど\n\n【確かめ】イギリスはEUに加盟していたときもユーロを使わずポンドのままで、2020年にEUを脱退した（ブレグジット）。今は加盟国ではない。\n\n【よくあるまちがい】EU加盟国すべてがユーロを使うと思ってしまう。一部の国は自国通貨を維持している。\n\n【ここが絶対】「EUの共通通貨＝ユーロ（全加盟国が導入しているわけではない）、2020年イギリス離脱」は地理・公民の最頻出事項。',
    difficulty: 'standard',
  },
  {
    id: 'shakai_36',
    subject: 'shakai',
    question: '「天保の改革」「寛政の改革」「享保の改革」をそれぞれの中心人物と順番（古い順）に答えよ。',
    answer: '享保の改革（徳川吉宗）→寛政の改革（松平定信）→天保の改革（水野忠邦）',
    explanation:
      '【何を聞かれているか】天保の改革・寛政の改革・享保の改革を中心人物と古い順に答える。\n\n【なぜそうなるのか】幕府の財政悪化に対応するため、時代ごとにちがう老中・将軍がそれぞれのやり方で改革を行った。\n\n【ステップ1】享保の改革（1716年〜、8代将軍徳川吉宗）…目安箱の設置、上げ米の制、公事方御定書、新田開発などで幕府の財政を立て直した。\n\n【ステップ2】寛政の改革（1787年〜、老中松平定信）…囲い米、旗本や御家人の借金帳消し、寛政異学の禁など。天保の改革（1841年〜、老中水野忠邦）…株仲間の解散、人返しの法など。反発が強く2年ほどで失敗した。\n\n【答え】享保の改革（徳川吉宗）→寛政の改革（松平定信）→天保の改革（水野忠邦）\n\n【確かめ】「享・寛・天」の順、または吉宗→定信→忠邦の順で覚える。\n\n【よくあるまちがい】3つの改革の政策を混同する。享保＝目安箱、寛政＝囲い米、天保＝株仲間解散である。\n\n【ここが絶対】「江戸の三大改革（享保・寛政・天保）」の中心人物と順番、内容の対応は歴史の最頻出事項。',
    difficulty: 'standard',
  },
  {
    id: 'shakai_37',
    subject: 'shakai',
    question: 'カカオの主要産地であるガーナやコートジボワールがある大陸はどこか？また植民地支配からの独立が相次いだ1960年を何と呼ぶか？',
    answer: 'アフリカ大陸。1960年は「アフリカの年」（17か国が独立）',
    explanation:
      '【何を聞かれているか】カカオの主要産地であるガーナやコートジボワールがある大陸、および1960年に独立が相次いだことを何と呼ぶかである。\n\n【なぜそうなるのか】アフリカの多くの国はかつてヨーロッパの植民地で、決められた作物だけをつくらされたため、独立後もモノカルチャー経済から抜け出せない国が多い。\n\n【ステップ1】カカオの生産量が世界1位・2位のコートジボワールとガーナは、どちらもアフリカ大陸のギニア湾に面した国。\n\n【ステップ2】第二次世界大戦後に独立の動きが高まり、1960年には一挙に17か国が独立した。\n\n【答え】アフリカ大陸。1960年は「アフリカの年」（17か国が独立）\n\n【確かめ】現在はアフリカの55の国・地域がアフリカ連合（AU）をつくっている。\n\n【よくあるまちがい】アフリカの国々が最初から特定の作物に特化していたと考えてしまう。植民地時代に宗主国の都合で作らされたのが始まりである。\n\n【ここが絶対】「1960年『アフリカの年』（17か国独立）」と、モノカルチャー経済の背景は世界地理・歴史の最頻出事項。',
    difficulty: 'standard',
  },
  {
    id: 'shakai_38',
    subject: 'shakai',
    question: '日本の三権分立について、立法・行政・司法をそれぞれ担う機関を答えよ。',
    answer: '立法: 国会。行政: 内閣。司法: 裁判所',
    explanation:
      '【何を聞かれているか】日本の三権分立で立法・行政・司法をそれぞれ担う機関である。\n\n【なぜそうなるのか】権力が1か所に集まると使い方をあやまり国民の自由がおびやかされるため、3つに分けてたがいにチェックさせるしくみになっている（フランスのモンテスキューが「法の精神」で提唱）。\n\n【ステップ1】立法は国会、行政は内閣、司法は裁判所が担当する。\n\n【ステップ2】国会は内閣不信任決議、内閣は衆議院の解散、裁判所は違憲審査権を持ち、たがいに抑制し合う。\n\n【答え】立法: 国会。行政: 内閣。司法: 裁判所\n\n【確かめ】国民は、選挙で国会を、世論で内閣を、国民審査で最高裁判所裁判官をチェックする立場にある。\n\n【よくあるまちがい】三権分立を提唱した人物と、実際に憲法に取り入れた国を混同する。モンテスキューは理論を唱えた人で、実際に取り入れたのはアメリカなど各国である。\n\n【ここが絶対】「立法＝国会、行政＝内閣、司法＝裁判所」の三権分立の枠組みは公民の最頻出事項。',
    difficulty: 'standard',
  },
  {
    id: 'shakai_39',
    subject: 'shakai',
    question: '「白河の関」「勿来の関」「念珠の関」は何に関係する地名か？また現代の何県にあるか？',
    answer: '古代の関所（陸奥国への入り口）。白河の関・勿来の関は福島県、念珠の関は山形県にある',
    explanation:
      '【何を聞かれているか】白河・勿来・念珠の関は何か、今の県。\n【なぜそうなるのか】古代の朝廷が**東北地方への出入り口に設けた関所**で「奥州三関」。蝦夷への備えでもあった。\n【ステップ1】古代の関所。\n【ステップ2】白河・勿来＝福島県、念珠（鼠ヶ関）＝山形県。\n【答え】古代の関所。白河の関・勿来の関は福島県、念珠の関は山形県\n【確かめ】白河の関は歌枕として有名で、松尾芭蕉も「おくのほそ道」でこえた。\n【よくあるまちがい】江戸時代の関所（箱根など）と混ぜる。**古代**。\n【ここが絶対】マイナーな用語だが「白河の関＝古代の関所（福島県）」と江戸時代の関所（箱根など）を区別させる問題として出る。',
    difficulty: 'standard',
  },
  {
    id: 'shakai_40',
    subject: 'shakai',
    question: '豊臣秀吉が行った「刀狩り」の目的は何か？',
    answer: '農民から武器を取り上げ、武士と農民の身分を明確に区別する（兵農分離）とともに一揆を防ぐため',
    explanation:
      '【何を聞かれているか】豊臣秀吉が行った「刀狩り」の目的である。\n\n【なぜそうなるのか】農民から武器を取り上げれば一揆を防げるうえ、武士と農民の身分をはっきり分けて農民を耕作に専念させられる。\n\n【ステップ1】1588年、豊臣秀吉は刀狩令を出して、農民から刀・弓・やり・鉄砲などの武器を取り上げた。表向きは「集めた金属で大仏をつくるため」と説明した。\n\n【ステップ2】太閤検地（田畑の広さや収穫量を調べ、耕す人を検地帳に登録した）と合わせて、武士と農民の身分をはっきり分ける兵農分離が進み、江戸時代の身分制度の土台になった。\n\n【答え】農民から武器を取り上げ、武士と農民の身分を明確に区別する（兵農分離）とともに一揆を防ぐため\n\n【確かめ】「以（1）ちば（58）ん刀狩り」などの語呂で1588年と覚える。\n\n【よくあるまちがい】刀狩りの目的を「大仏をつくるため」だけだと思ってしまう。それは表向きの理由で、真のねらいは一揆の防止と兵農分離である。\n\n【ここが絶対】「刀狩り（1588年）＋太閤検地＝兵農分離」の組み合わせは歴史の最頻出事項。',
    difficulty: 'standard',
  },

  // --- advanced (10問) ---
  {
    id: 'shakai_41',
    subject: 'shakai',
    question: '「価格の自動調節機能」とは何か？需要と供給の関係で説明せよ。',
    answer: '価格が上がると供給が増え需要が減り、価格が下がると需要が増え供給が減る。この働きにより市場では均衡価格が自動的に決まる（見えざる手）',
    explanation:
      '【何を聞かれているか】「価格の自動調節機能」とは何か、需要と供給の関係で説明する。\n\n【なぜそうなるのか】買いたい人が多いと価格は上がり、供給が増え需要が減る方向に動く。売れ残ると価格は下がり、需要が増え供給が減る方向に動く。この2つの動きがつり合う所に価格が落ち着く。\n\n【ステップ1】品不足で買いたい人が多いと価格は上がる。価格が上がると、売ればもうかるので供給が増え、高いから買わない人が出て需要は減る。\n\n【ステップ2】逆に売れ残って価格が下がると、安いから買う人がふえて需要が増え、もうけが減るので供給は減る。こうして需要量と供給量が等しくなる均衡価格に落ち着く。\n\n【答え】価格が上がると供給が増え需要が減り、価格が下がると需要が増え供給が減る。この働きにより市場では均衡価格が自動的に決まる（見えざる手）\n\n【確かめ】この働きをアダム・スミスは「見えざる手」と呼んだ。ただし電気・水道・鉄道など競争が働きにくいものは、公共料金として国や地方公共団体が決めている。\n\n【よくあるまちがい】価格の自動調節をすべての商品・サービスに当てはまると考えてしまう。公共料金は例外である。\n\n【ここが絶対】「均衡価格＝需要量と供給量が一致する点、価格の自動調節（見えざる手）」は経済分野の最頻出事項。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_42',
    subject: 'shakai',
    question: '「アヘン戦争」（1840〜42年）の背景・経緯・結果を説明し、日本への影響を答えよ。',
    answer: '背景: イギリスが清への輸出不振を補うためインドからアヘンを密輸。清が禁止するとイギリスが開戦。結果: 清が敗北し南京条約で香港割譲・開港。日本への影響: 欧米列強の脅威を認識し、攘夷運動が高まった',
    explanation:
      '【何を聞かれているか】アヘン戦争（1840〜42年）の背景・経緯・結果と、日本への影響である。\n\n【なぜそうなるのか】イギリスは清との貿易で銀が流出していたため、インド産のアヘンを清に密輸して銀を取りもどす三角貿易を行い、清がこれを取り締まると開戦した。\n\n【ステップ1】背景…イギリスは清から茶を大量に買っていたが綿織物は売れず、代金の銀が流出して困っていた。そこで植民地インドでつくったアヘンを清へ密輸する三角貿易を行った。\n\n【ステップ2】経緯…清が林則徐を送りアヘンを没収・処分させると、イギリスが1840年に開戦し、近代兵器の前に清は敗れた。結果…1842年の南京条約で香港をイギリスにゆずり、上海など5港を開き、賠償金を払わされた。\n\n【答え】背景: イギリスが清への輸出不振を補うためインドからアヘンを密輸。清が禁止するとイギリスが開戦。結果: 清が敗北し南京条約で香港割譲・開港。日本への影響: 欧米列強の脅威を認識し、攘夷運動が高まった\n\n【確かめ】大国の清が敗れたことに衝撃を受けた幕府は、1825年の異国船打払令をゆるめ、1842年に薪水給与令を出した。\n\n【よくあるまちがい】アヘン戦争を清と日本の戦争だと勘違いする。清とイギリスの戦争であり、日本は直接戦っていない。\n\n【ここが絶対】「アヘン戦争（1840〜42年）→南京条約→日本は薪水給与令へ方針転換（1842年）」の因果関係は歴史の最頻出事項。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_43',
    subject: 'shakai',
    question: '日本の少子高齢化が進む中で、社会保障費が増大する一方、労働力不足が深刻化している。この問題に対する政策的対応策を3つ挙げよ。',
    answer: '例: 女性・高齢者の労働参加促進、外国人労働者・移民の受け入れ拡大、AI・ロボットによる自動化推進、育児支援・保育所整備、年金・医療制度の改革など（3つ）',
    explanation:
      '【何を聞かれているか】少子高齢化で社会保障費が増大し労働力不足が深刻化する問題への政策的対応策を3つ挙げる。\n\n【なぜそうなるのか】支えられる高齢者がふえる一方で支える現役世代が減るため、「働く人をふやす」「1人あたりの生産を高める」「将来の子どもをふやす」という3つの方向から対策を考える必要がある。\n\n【ステップ1】女性や高齢者が働き続けられる環境づくり（保育所の整備、育児・介護休業制度、定年の延長）。\n\n【ステップ2】外国人労働者の受け入れ拡大、AI・ロボット・自動化による省人化と生産性の向上。\n\n【答え】例: 女性・高齢者の労働参加促進、外国人労働者・移民の受け入れ拡大、AI・ロボットによる自動化推進、育児支援・保育所整備、年金・医療制度の改革など（3つ）\n\n【確かめ】子育て世帯への経済的支援で出生率を上げる、負担と給付のつり合いを見直す社会保障制度の改革なども挙げられる。\n\n【よくあるまちがい】対策を1つの方向だけで考えてしまう。「働く人をふやす」「生産を高める」「子どもをふやす」の複数の方向を組み合わせて答える。\n\n【ここが絶対】少子高齢化対策は「働き手を増やす・生産性を高める・出生率を上げる」の3方向で整理する点が公民の最頻出テーマ。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_44',
    subject: 'shakai',
    question: '「壬申の乱」（672年）の背景と勝者、その後の政治的意義を答えよ。',
    answer: '天智天皇の死後、皇位継承をめぐる内乱。大海人皇子（後の天武天皇）が大友皇子を倒して勝利。天皇の権威が強化され、律令国家建設が加速した',
    explanation:
      '【何を聞かれているか】壬申の乱の背景・勝者・意義。\n【なぜそうなるのか】天智天皇の死後、**弟の大海人皇子と子の大友皇子**があとつぎを争い、672年に大海人皇子が勝った。勝った側についた豪族が力をもち、負けた側の豪族がおとろえたので**天皇の力がとびぬけて強くなった**。\n【ステップ1】背景：天智天皇の死後の皇位争い。\n【ステップ2】勝者：大海人皇子→天武天皇。\n【ステップ3】意義：天皇の権威が強まり、律令や歴史書づくりが進んで律令国家へ。\n【答え】天智天皇の死後の皇位争い。大海人皇子（天武天皇）が勝ち、天皇の権力が強まって律令国家づくりが進んだ\n【確かめ】古代最大の内乱。大宝律令（701年）・日本書紀へつながる。\n【よくあるまちがい】大友皇子が勝ったとする。**大海人皇子**。\n【ここが絶対】「壬申の乱→大海人皇子が勝利→天武天皇」という流れは頻出。大友皇子との取り違えに注意。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_45',
    subject: 'shakai',
    question:
      '「円高」とはどのような状態か。また、円高になると日本の輸出と輸入にはそれぞれどのような影響があるか答えよ。',
    answer:
      '円高＝外国のお金に対して円の価値が上がること（例：1ドル＝120円→100円）。円高になると、日本の製品が外国では高くなるので輸出には不利、外国の品物が安く買えるので輸入には有利になる。',
    explanation:
      '【何を聞かれているか】円高とは何か、輸出・輸入への影響。\n【なぜそうなるのか】円高は**円の価値が上がる**こと（1ドル＝120円→100円。同じ1ドルを少ない円で買える）。日本の100円の品は外国から見ると高くなるので**輸出に不利**、外国の1ドルの品は日本から見ると安くなるので**輸入に有利**。\n【ステップ1】円高＝1ドルあたりの円が少なくなる。\n【ステップ2】輸出：不利（売れにくい）。輸入：有利（安く買える）。\n【答え】円の価値が上がること。輸出に不利、輸入に有利\n【確かめ】円安は逆で、輸出に有利、輸入に不利。海外旅行は円高のときが得。\n【よくあるまちがい】「1ドル＝100円→120円」を円高と思う。**円の数が減るほうが円高**。\n【ここが絶対】「円高＝円の数字が減る」という感覚とのズレを突く問題が最頻出。輸出に不利・輸入に有利は丸暗記必須。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_46',
    subject: 'shakai',
    question: '日本の高度経済成長期（1955〜73年頃）における平均経済成長率と、成長を終わらせた出来事は何か？',
    answer: '年平均約10%の実質成長率。1973年の石油危機（オイルショック）により終焉',
    explanation:
      '【何を聞かれているか】高度経済成長期の成長率と、終わらせた出来事。\n【なぜそうなるのか】1955〜1973年ごろ、技術革新・設備投資・安い石油・質の高い労働力で**年平均約10%**の成長が続いた。1973年の**石油危機**で原油が急に上がり、物価が急上昇して終わった。\n【ステップ1】年平均約10%。\n【ステップ2】1973年の石油危機（オイルショック）。\n【答え】年平均約10%。1973年の石油危機\n【確かめ】1968年にGNPが資本主義国で2位。三種の神器→3C。1964年東京オリンピック・東海道新幹線。公害・過密過疎も生んだ。\n【よくあるまちがい】バブル崩壊で終わったとする。**それは1991年ごろ**。\n【ここが絶対】「高度経済成長は1973年の石油危機で終わった」は超頻出。バブル崩壊（1991年ごろ）との混同に注意。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_47',
    subject: 'shakai',
    question: '「緯度1度の距離」は約何kmか？また日本の最東端・最西端・最北端・最南端をそれぞれ答えよ。',
    answer: '約111km。最東端: 南鳥島（東京都）、最西端: 与那国島（沖縄県）、最北端: 択捉島（北海道）、最南端: 沖ノ鳥島（東京都）',
    explanation:
      '【何を聞かれているか】緯度1度の距離のおよその長さと、日本の東西南北の端である。\n\n【なぜそうなるのか】地球一周は約4万kmで、緯度は南北方向を360度で表すので、緯度1度分の距離は4万km÷360で求められる。\n\n【ステップ1】40000÷360＝約111km。\n\n【ステップ2】日本の東西南北の端は、最東端が南鳥島（東京都）、最西端が与那国島（沖縄県）、最北端が択捉島（北海道）、最南端が沖ノ鳥島（東京都）。\n\n【答え】約111km。最東端: 南鳥島（東京都）、最西端: 与那国島（沖縄県）、最北端: 択捉島（北海道）、最南端: 沖ノ鳥島（東京都）\n\n【確かめ】南鳥島と沖ノ鳥島はどちらも東京都に属する。沖ノ鳥島は島を失うと広大な排他的経済水域（EEZ）を失うため護岸工事がされている。択捉島は北方領土の一つで現在ロシアが実効支配している。\n\n【よくあるまちがい】東のはしを北海道と考えてしまう。東のはしは南鳥島（東京都）である。\n\n【ここが絶対】「日本の東西南北端（最北＝択捉島、最東＝南鳥島、最南＝沖ノ鳥島、最西＝与那国島）」の組み合わせは地理の最頻出事項。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_48',
    subject: 'shakai',
    question: '「モンスーン（季節風）」が東アジアの農業に与える影響を、稲作と麦作の観点から説明せよ。',
    answer: '夏のモンスーンは高温多雨をもたらし稲作に適する。冬のモンスーンは寒冷乾燥で麦作に向く。モンスーンアジアは世界最大の稲作地帯を形成している',
    explanation:
      '【何を聞かれているか】モンスーン（季節風）が東アジアの農業に与える影響を、稲作と麦作の観点から説明する。\n\n【なぜそうなるのか】大陸と海のあたたまりやすさのちがいから、夏は海から大陸へしめった風が、冬は大陸から海へ乾いた風がふき、それぞれちがう作物に適した気候を生む。\n\n【ステップ1】夏は大陸があたたまって気圧が下がり、海から大陸へしめった風がふく。高温多雨になるため、たくさんの水を必要とする稲作に適する。\n\n【ステップ2】冬は大陸が冷えて気圧が高くなり、大陸から海へ乾いた冷たい風がふく。寒く乾いた気候は、水が少なくても育つ麦の栽培に向く。\n\n【答え】夏のモンスーンは高温多雨をもたらし稲作に適する。冬のモンスーンは寒冷乾燥で麦作に向く。モンスーンアジアは世界最大の稲作地帯を形成している\n\n【確かめ】中国では降水量の多い南部（長江流域）が稲作、少ない北部（黄河流域）が畑作・麦作という区分ができた（南稲北麦）。\n\n【よくあるまちがい】モンスーンの向きを一年中同じだと思ってしまう。夏は海から大陸へ、冬は大陸から海へと季節で逆になる。\n\n【ここが絶対】「モンスーンアジア＝世界の米の約9割を生産する大稲作地帯、南稲北麦」は地理の最頻出事項。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_49',
    subject: 'shakai',
    question: '「西南戦争」（1877年）の原因・経緯・歴史的意義を答えよ。',
    answer: '原因: 明治政府の士族解体・廃刀令など士族の不満が高まり、西郷隆盛が決起。経緯: 西郷率いる薩摩士族軍vs政府の徴兵軍、熊本城攻防戦など。意義: 士族最後の武力反乱で鎮圧後、以後の反政府運動は自由民権運動という言論闘争に移行',
    explanation:
      '【何を聞かれているか】西南戦争の原因・経緯・意義。\n【なぜそうなるのか】明治政府の改革で士族は**給料（俸禄）・刀（廃刀令）・軍人の役目（徴兵令）を失い**不満が高まった。1877年、鹿児島の士族が西郷隆盛をかついで挙兵。徴兵制の政府軍が鎮圧した。\n【ステップ1】原因：士族の特権がうばわれた不満。\n【ステップ2】経緯：熊本城を包囲したが落とせず、田原坂で敗れ、西郷は城山で自害。\n【ステップ3】意義：武力での反政府運動は不可能とわかり、以後は自由民権運動（言論）へ。\n【答え】原因：士族の不満。経緯：西郷隆盛率いる士族軍が政府軍に敗れた。意義：士族最後の反乱で、以後は自由民権運動へ\n【確かめ】西郷は征韓論で政府を去っていた。板垣退助も同じく去り、民権運動を始めた。\n【よくあるまちがい】西郷が政府側と思う。**反乱側**。\n【ここが絶対】「西南戦争は士族最後の反乱で、以後は自由民権運動へ」という流れは頻出。西郷隆盛が反乱側である点も必ず問われる。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_50',
    subject: 'shakai',
    question:
      '日本が行ってきた「加工貿易」とはどのような貿易か。また、日本の主な輸入品と輸出品をそれぞれ2つ答えよ。',
    answer:
      '加工貿易＝原料や燃料を輸入し、工業製品に加工して輸出する貿易。輸入品：石油・液化天然ガス・鉄鉱石・石炭など。輸出品：自動車・機械類（半導体・電子部品など）。',
    explanation:
      '【何を聞かれているか】加工貿易とは何か、日本の輸入品・輸出品。\n【なぜそうなるのか】日本は**資源が少ない**ので、原料や燃料を輸入し、技術で製品にして輸出してきた。これが加工貿易。\n【ステップ1】加工貿易＝原料を輸入→加工→製品を輸出。\n【ステップ2】輸入：石油・液化天然ガス・鉄鉱石・石炭（・衣類・食料）。輸出：自動車・機械類・鉄鋼。\n【答え】原料を輸入して製品を輸出する貿易。輸入：石油・鉄鉱石など。輸出：自動車・機械類など\n【確かめ】石油は西アジア（サウジアラビアなど）、鉄鉱石・石炭はオーストラリアから。最大の貿易相手は中国・アメリカ。近年は工場が海外に移り、機械類の輸入も増えている。\n【よくあるまちがい】日本の輸出品を「原料」とする。**日本は製品を輸出**。\n【ここが絶対】「加工貿易＝原料輸入・製品輸出」の定義と、日本の輸出入品目の組み合わせは公民・地理の最頻出テーマ。',
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
    hint:
      '百の位は1〜9、十の位と一の位は0〜9。百の位を1つ決めると「残り2つの和」が決まるので、百の位で場合分けして数える。',
    explanation:
      '【何を聞かれているか】3けたの整数のうち、3つの位の数字をたすと12になるものの個数。\n【なぜその式なのか】百の位を1つ決めると、十の位と一の位の和が「12−百の位」に決まる。あとは**2つの数字（0〜9）で決まった和を作る組が何通りあるか**を数えればよい。百の位は1〜9（0は使えない）、十の位と一の位は0〜9なので、和が9以下なら（和＋1）通り、和が10以上なら9や0を超える分がけずれて減る。\n【ステップ1】百の位1：残りの和11。（2,9）（3,8）…（9,2）の8通り。\n【ステップ2】百の位2：残りの和10。（1,9）〜（9,1）の9通り。百の位3：残りの和9。（0,9）〜（9,0）の10通り。\n【ステップ3】百の位4以降：残りの和が8, 7, 6, 5, 4, 3 なので、順に 9, 8, 7, 6, 5, 4通り。\n【ステップ4】8＋9＋10＋9＋8＋7＋6＋5＋4＝66。\n【答え】66個\n【確かめ】百の位3（残りの和9）のときが最も多い10通りで、そこから左右に1つずつ減っていく形（8, 9, 10, 9, 8, 7, 6, 5, 4）になっているのは、和が9を超えると9より大きい数字が使えなくなるからで、つじつまが合う。\n【よくあるまちがい】百の位1のときに（1,10）や（0,11）を数えてしまう。数字は0〜9しか使えないので、和が10以上のときは組が減る。',
    difficulty: 'advanced',
  },
  {
    id: 'sansu_yotsuya_05',
    subject: 'sansu',
    question: '周囲の長さが36cmの長方形の面積が最大になるときの縦と横の長さを求めよ。',
    answer: '縦9cm・横9cm（正方形）、面積81cm²',
    hint: '縦をx、横を18−xとすると面積 = x(18-x)。頂点(-b/2a)より x = 9 のとき最大',
    explanation: 'まわりが36cmなので たて＋よこ＝36÷2＝18cm。\nたてをxとすると よこは 18−x、面積は x×(18−x)。\n1×17＝17、5×13＝65、8×10＝80、9×9＝81、10×8＝80 と調べると、たてとよこが等しいときが最大。\nまわりの長さが同じなら正方形のときに面積が最大になり、9cm×9cm で81cm²。',
    difficulty: 'advanced',
  },
  {
    id: 'sansu_yotsuya_06',
    subject: 'sansu',
    question: '1, 2, 3, 4, 5の5枚のカードから3枚選んで3桁の整数を作る。400より大きい整数は何個か？',
    answer: '24個',
    hint: '400より大きいので百の位は4か5。百の位=4のとき: 残り{1,2,3,5}から2枚並べる=4×3=12通り。百の位=5のとき: 残り{1,2,3,4}から2枚=4×3=12通り。合計24個',
    explanation:
      '【何を聞かれているか】1〜5のカード3枚で作る3けたの整数のうち、400より大きいものの個数。\n【なぜその式なのか】3けたの整数が400より大きいかどうかは、**百の位だけで決まる**（百の位が4か5なら、残りが何でも400より大きい）。だから百の位で場合分けし、それぞれ残りの2枚の並べ方を数える。並べ方は「十の位に何を置くか×一の位に何を置くか」のかけ算で求まる。\n【ステップ1】百の位が4のとき、十の位は残り4枚のどれか（4通り）、一の位はさらに残り3枚のどれか（3通り）で 4×3＝12個。\n【ステップ2】百の位が5のときも同じく12個。\n【ステップ3】12＋12＝24。\n【答え】24個\n【確かめ】3けたの整数は全部で 5×4×3＝60個できる。百の位は1〜5が同じ数ずつ（12個ずつ）なので、4と5の分は 12×2＝24 で一致する。\n【よくあるまちがい】百の位が4のとき「400ちょうど」を気にして1つ引いてしまう。0のカードがないので400は作れず、百の位が4なら必ず400より大きい。同じカードを2回使えないことも忘れない（十の位は4通り、一の位は3通り）。',
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
    question: '1辺6cmの正六角形を、中心から6つの合同な正三角形に分けました。正三角形1個の面積が15.6cm²のとき、正六角形の面積は何cm²ですか。',
    answer: '93.6cm²',
    hint: '正六角形は正三角形6個ぶん。',
    explanation: '【解説】\n正六角形の中心から6つの頂点へ線を引くと、合同な三角形が6個できる。\n中心から頂点までの長さは正六角形の1辺と等しいので、どれも3辺が6cmの正三角形になる。\n15.6 × 6 ＝ 93.6cm²\n【なぜ中心からの長さが1辺と同じ？】正六角形の1つの内角は120°で、中心のまわりの角は 360÷6＝60°。三角形の残り2つの角も (180−60)÷2＝60° になるので、3つの角がすべて60°、つまり正三角形になる。',
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
    question: '光合成のはたらきを言葉の式で表せ。また光合成に必要な光を受け取る、葉緑体の中の緑色の色素の名前を答えよ。',
    answer: '二酸化炭素 + 水 →（光）→ デンプン（養分）+ 酸素。色素: 葉緑素（葉緑体にふくまれる）',
    hint: '植物は葉緑体で二酸化炭素と水を材料に、光を使ってデンプンと酸素をつくる',
    explanation:
      '【何を聞かれているか】\n光合成のはたらきを言葉の式で表し、光を受け取る色素の名前を答える力が問われている。\n\n【なぜそうなるのか】\n葉緑体の中の葉緑素という緑色の色素が光を受け取り、二酸化炭素と水からデンプンと酸素をつくる。\n\n【ステップ1】\n光合成の材料(二酸化炭素・水)と生成物(デンプン・酸素)を確認する。\n\n【ステップ2】\n葉緑素が赤や青の光を吸収し緑の光をはね返すことを確認する。\n\n【答え】\n二酸化炭素+水→(光)→デンプン(養分)+酸素。色素:葉緑素(葉緑体にふくまれる)\n\n【確かめ】\n葉が緑に見える理由も再確認する。\n\n【よくあるまちがい】\n光合成の生成物に酸素が含まれないと考えないこと。\n\n【ここが絶対】\n葉緑素は葉緑体の中にある色素であることを押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_yotsuya_02',
    subject: 'rika',
    question: '重さ200gのおもりをバネにつるしたとき4cm伸びた。同じバネに500gのおもりをつるすと何cm伸びるか？（フックの法則）',
    answer: '10cm',
    hint: 'フックの法則: 伸びはおもりの重さに比例。200g→4cm、500g→4×(500/200)=10cm',
    explanation:
      '【何を聞かれているか】\n200gで4cmのびるばねに500gのおもりをつるしたときののびを求める力が問われている。\n\n【なぜそうなるのか】\nフックの法則によりばねののびは重さに比例する。\n\n【ステップ1】\n500gは200gの2.5倍であることを確認する。\n\n【ステップ2】\n4×2.5=10を計算する。\n\n【答え】\n10cm\n\n【確かめ】\n1gあたりののび4÷200=0.02cmから0.02×500=10cmでも求められることを確かめる。\n\n【よくあるまちがい】\n比例が成り立つのはばねが伸びきらない範囲までであることを見落とさないこと。\n\n【ここが絶対】\nのびは重さに比例することを押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_yotsuya_03',
    subject: 'rika',
    question: '塩酸に亜鉛を入れたとき発生する気体の名前と、その気体の性質を3つ答えよ。',
    answer: '水素。①最も軽い気体 ②燃える（可燃性） ③水に溶けにくい',
    hint: '亜鉛 ＋ 塩酸 → 塩化亜鉛 ＋ 水素。水素は水にとけにくいので水上置換法で集める',
    explanation:
      '【何を聞かれているか】\n塩酸に亜鉛を入れたときに発生する気体の名前とその性質を3つ答える力が問われている。\n\n【なぜそうなるのか】\n金属が酸と反応すると水素が発生し、水素は最も軽く燃える性質をもつ。\n\n【ステップ1】\n亜鉛と塩酸が反応して水素が発生することを確認する。\n\n【ステップ2】\n水素の性質(最も軽い・燃える・水にとけにくい)を確認する。\n\n【答え】\n水素。①最も軽い気体 ②燃える(可燃性) ③水に溶けにくい\n\n【確かめ】\n水上置換法で集めることも再確認する。\n\n【よくあるまちがい】\n酸素と水素の性質を混同しないこと。\n\n【ここが絶対】\n酸素はものが燃えるのを助けるが自分は燃えないことを押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_yotsuya_04',
    subject: 'rika',
    question: '電池3個を直列につないで電熱線をつなぐと、電流計は①を示した（電池1個・豆電球1個の電流を①とする）。この電熱線の抵抗は豆電球何個分か。また、電池1個・豆電球1個（抵抗1）で水100gを5分あたためると1℃上がるとして、この電熱線で水100gを5分あたためると何℃上がるか。',
    answer: '抵抗：3（豆電球3個分）。上昇温度：1×1×3＝3℃',
    hint: '抵抗＝電池の数÷電流＝3÷1＝3。発熱は電流×電流×抵抗＝1×1×3＝3倍',
    explanation: '【何を聞かれているか】電流計の値から抵抗を逆算し、その電熱線の発熱を求める問題。\n【ステップ1】抵抗＝電池の数÷電流＝3÷1＝3（豆電球3個分）。\n【ステップ2】発熱は電流×電流×抵抗に比例する。1×1×3＝3。基準（電池1個・豆電球1個、1×1×1＝1）の3倍。\n【ステップ3】基準で5分1℃なので、5分で3℃。\n【確かめ】抵抗3の電熱線を電池3個につなぐと 3÷3＝① で、電流計の値と合う。\n【よくあるまちがい】「電流が①だから発熱も基準と同じ1℃」とするミス。抵抗が3倍なので、同じ電流でも発熱は3倍（押す力が電池3個分かかっている）。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_yotsuya_05',
    subject: 'rika',
    question: '地球が太陽の周りを公転する周期は約365日。地球から見て太陽が星座の間を移動する（黄道上を動く）経路を何というか？またその移動は東向きか西向きか？',
    answer: '黄道（こうどう）。移動の向きは東向き（西から東へ）',
    hint: '地球が太陽の周りを西から東へ公転するため、地球から見ると太陽は星座の間を西から東へ（順行方向に）動いて見える',
    explanation:
      '【何を聞かれているか】\n地球から見て太陽が星座の間を移動する経路の名前と移動の向きを答える力が問われている。\n\n【なぜそうなるのか】\n地球が太陽のまわりを西から東へ公転するため、太陽は星座の間を西から東へ動いて見え、その通り道を黄道と呼ぶ。\n\n【ステップ1】\n太陽が1年かけて星座の間を1周することを確認する。\n\n【ステップ2】\n1日に約1度ずつ進むことを確認する。\n\n【答え】\n黄道(こうどう)。移動の向きは東向き(西から東へ)\n\n【確かめ】\n黄道上に並ぶ12の星座が黄道十二星座であることも再確認する。\n\n【よくあるまちがい】\n太陽の日周運動(東から西)と混同しないこと。\n\n【ここが絶対】\n日周運動は地球の自転による別の現象であることを押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_yotsuya_06',
    subject: 'rika',
    question: '物体を水中に沈めたとき、物体にはたらく浮力は何によって決まるか？また100cm³の物体を水中に完全に沈めたとき、浮力は何gf（グラムフォース）か？',
    answer: '物体が押しのけた液体の体積（と液体の密度）によって決まる（アルキメデスの原理）。100cm³の水の重さ = 100g分の浮力 = 100gf',
    hint: '水の密度1g/cm³。100cm³の水の重さ=100g。浮力=押しのけた水の重さ',
    explanation:
      '【何を聞かれているか】\n物体にはたらく浮力が何で決まるかと、100cm³の物体を完全に沈めたときの浮力を求める力が問われている。\n\n【なぜそうなるのか】\n浮力は物体が押しのけた液体の重さと同じ大きさになる。\n\n【ステップ1】\n水の密度(1cm³あたり1g)を確認する。\n\n【ステップ2】\n100×1=100を計算する。\n\n【答え】\n物体が押しのけた液体の体積(と液体の密度)によって決まる(アルキメデスの原理)。100cm³の水の重さ=100g分の浮力=100gf\n\n【確かめ】\n完全に沈んでいれば深さを変えても浮力は変わらないことも再確認する。\n\n【よくあるまちがい】\n浮力を物体そのものの重さで決まると考えないこと。\n\n【ここが絶対】\n浮力は押しのけた液体の体積と密度で決まることを押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_yotsuya_07',
    subject: 'rika',
    question: '食塩水を蒸発させると食塩が残る。この操作を何というか？また砂と食塩の混合物から食塩だけを取り出す手順を2ステップで答えよ。',
    answer: '蒸発（じょうはつ）。手順: ①水に溶かしてから砂をろ過で除く ②ろ液を蒸発皿で加熱・蒸発させる',
    hint: '食塩は水に溶けるが砂は溶けない。ろ過→蒸発の2ステップ',
    explanation:
      '【何を聞かれているか】食塩水から食塩を取り出す操作の名前と、砂と食塩の混合物から食塩だけを取り出す手順。\n【なぜその式なのか】**食塩は水にとけ、砂はとけない**。このちがいで分ける。とけたものは水を蒸発させて取り出す。\n【ステップ1】操作の名前：蒸発（蒸発乾固）。\n【ステップ2】①混合物を水に入れてよく混ぜ、食塩だけをとかしてから、ろ紙でろ過して砂を取り除く。\n【ステップ3】②ろ液を蒸発皿で加熱して水を蒸発させると食塩が残る。\n【答え】蒸発。手順：①水にとかして砂をろ過で取り除く ②ろ液を蒸発皿で加熱して蒸発させる\n【確かめ】ろ過は液をガラス棒に伝わらせて注ぎ、ろうとの先はビーカーの内側につける。\n【よくあるまちがい】ろ過だけで食塩が取れると思う。**ろ過では食塩水は通りぬける**。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_yotsuya_08',
    subject: 'rika',
    question: 'ヒトの血液の循環経路で「肺循環」と「体循環」の違いを説明し、静脈血が流れる血管を全て答えよ。',
    answer: '肺循環:右心室→肺動脈→肺→肺静脈→左心房（肺でガス交換）。体循環:左心室→大動脈→全身→大静脈→右心房。静脈血が流れるのは: 肺動脈（右心室→肺）と大静脈（全身→右心房）',
    hint: '静脈血=二酸化炭素が多い血液。肺動脈は心臓から肺へ向かうが静脈血を運ぶ（名前に注意）',
    explanation:
      '【何を聞かれているか】肺循環と体循環のちがいと、静脈血が流れる血管。\n【なぜその式なのか】肺循環は**肺で二酸化炭素を出し酸素を受け取る短い道**、体循環は**全身に酸素と養分を届ける長い道**。静脈血は「二酸化炭素が多い血液」のことで、**血管の名前ではなく中身**で決まる。\n【ステップ1】肺循環：右心室→肺動脈→肺→肺静脈→左心房。\n【ステップ2】体循環：左心室→大動脈→全身→大静脈→右心房。\n【ステップ3】静脈血が流れるのは、全身からもどる大静脈と、肺へ向かう肺動脈。\n【答え】肺循環：右心室→肺動脈→肺→肺静脈→左心房。体循環：左心室→大動脈→全身→大静脈→右心房。静脈血：肺動脈と大静脈\n【確かめ】肺静脈には酸素の多い動脈血が流れる。\n【よくあるまちがい】「動脈＝動脈血」と思う。**肺動脈は静脈血**が入試のねらい目。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_yotsuya_09',
    subject: 'rika',
    question: '断層と褶曲（しゅうきょく）の違いを説明し、それぞれが生じる原因を答えよ。',
    answer: '断層: 地層が力を受けてずれる（割れる）こと。褶曲: 地層が力を受けて波状に曲がること。どちらも地下の巨大な力（プレートの動き）が原因',
    hint: '断層→割れてずれる、褶曲→曲がる。日本列島は複数のプレートが重なる地震多発地帯',
    explanation:
      '【何を聞かれているか】断層と褶曲のちがいと原因。\n【なぜその式なのか】どちらも地層が**大きな力を受けて変形**したもの。**割れてずれたのが断層、曲がったのが褶曲**。\n【ステップ1】断層：力にたえきれず割れて、その面にそって上下・左右にずれる。急にずれると地震。\n【ステップ2】褶曲：長い時間をかけておし曲げられ、波のようにうねる。\n【ステップ3】原因：どちらもプレートの動きで生まれる地下の大きな力。\n【答え】断層：地層が割れてずれる。褶曲：地層が波のように曲がる。原因はどちらもプレートの動きによる地下の大きな力\n【確かめ】冷たくかたい岩は割れて断層、地下深くの高温の岩はゆっくり曲がって褶曲になりやすい。\n【よくあるまちがい】褶曲を「割れる」と書く。**曲がる**。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_yotsuya_10',
    subject: 'rika',
    question: 'レンズを通過した光の屈折について、凸レンズに平行光線を当てたとき光が集まる点を何というか？また焦点距離10cmの凸レンズの30cm前に物体を置くと像は何cm後ろにできるか？',
    answer: '焦点（しょうてん）。レンズの公式: 1/v - 1/u = 1/f（または1/a+1/b=1/f）。1/b = 1/10 - 1/30 = 2/30 → b = 15cm後ろ',
    hint: '1/像距離 = 1/焦点距離 - 1/物体距離。1/b=1/10-1/30=3/30-1/30=2/30。b=15cm',
    explanation:
      '【何を聞かれているか】\n凸レンズで平行光線が集まる点の名前と、焦点距離10cmのレンズの30cm前に物体を置いたときの像の位置を求める力が問われている。\n\n【なぜそうなるのか】\nレンズの軸に平行な光は屈折して1点に集まり、この点を焦点と呼ぶ。像の位置はレンズの式1/a+1/b=1/fで求める。\n\n【ステップ1】\n焦点の定義を確認する。\n\n【ステップ2】\n1/b=1/10-1/30=2/30=1/15からb=15を計算する。\n\n【答え】\n焦点(しょうてん)。レンズの公式:1/v-1/u=1/f(または1/a+1/b=1/f)。1/b=1/10-1/30=2/30→b=15cm後ろ\n\n【確かめ】\n物体が焦点距離の2倍(20cm)より遠いため縮小した実像になることも再確認する。\n\n【よくあるまちがい】\n焦点距離と物体までの距離を取り違えないこと。\n\n【ここが絶対】\n実像は上下左右が逆になることを押さえる。',
    difficulty: 'advanced',
  },

  // ── 社会 最難関10問 ──
  {
    id: 'shakai_yotsuya_01',
    subject: 'shakai',
    question: '日本国憲法の三大原則を答え、それぞれの意味を簡潔に説明せよ。',
    answer: '①国民主権（政治の主役は国民）②基本的人権の尊重（人が生まれながらに持つ権利を守る）③平和主義（戦争を放棄し軍隊を持たない）',
    explanation:
      '【何を聞かれているか】日本国憲法の三大原則とそれぞれの意味である。\n\n【なぜそうなるのか】第二次世界大戦の深い反省から、政治の主役を国民に置き、人権を保障し、二度と戦争をしないという決意を憲法に刻んだ。\n\n【ステップ1】国民主権…国の政治を最終的に決める力は国民にある。国民は選挙で代表を選び、憲法改正には国民投票が必要。天皇は政治の権限を持たない象徴とされる。\n\n【ステップ2】基本的人権の尊重…生まれながらに持つ権利（平等権・自由権・社会権・参政権・請求権）は侵すことのできない永久の権利として保障される。平和主義…第9条で戦争の放棄・戦力の不保持・交戦権の否認を定めている。\n\n【答え】①国民主権（政治の主役は国民）②基本的人権の尊重（人が生まれながらに持つ権利を守る）③平和主義（戦争を放棄し軍隊を持たない）\n\n【確かめ】前文にも平和のうちに生きる権利がうたわれている。\n\n【よくあるまちがい】天皇を主権者だと思ってしまう。主権者は国民、天皇は象徴である。\n\n【ここが絶対】「日本国憲法の三大原則＝国民主権・基本的人権の尊重・平和主義」は公民の最頻出事項。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_yotsuya_02',
    subject: 'shakai',
    question: '江戸幕府の三代将軍は誰か？また彼が行った「参勤交代」の制度を説明せよ。',
    answer: '徳川家光（とくがわいえみつ）。参勤交代: 大名が1年おきに江戸と自国を行き来する制度。費用がかかるため大名を経済的に弱体化させ、反乱を防ぐ効果があった',
    explanation:
      '【何を聞かれているか】江戸幕府の三代将軍は誰か、また参勤交代の制度内容である。\n\n【なぜそうなるのか】大名に往復や江戸滞在の費用を負担させることで経済力を弱め、妻子を人質として江戸に置くことで反乱を防ぐねらいがあった。\n\n【ステップ1】3代将軍は徳川家光。家康の孫にあたり「生まれながらの将軍」と自ら名のった。1635年に武家諸法度を改め、参勤交代を制度として定めた。\n\n【ステップ2】大名は原則1年おきに江戸と領地を行き来し、妻子は江戸に住まわせられた。大名行列の旅費や江戸屋敷の費用はすべて大名の負担で、幕府に反抗する力を失わせた。\n\n【答え】徳川家光（とくがわいえみつ）。参勤交代: 大名が1年おきに江戸と自国を行き来する制度。費用がかかるため大名を経済的に弱体化させ、反乱を防ぐ効果があった\n\n【確かめ】家光はほかにも、島原・天草一揆（1637年）ののちに鎖国を完成させた（1639年ポルトガル船来航禁止、1641年オランダ商館を出島へ移す）。\n\n【よくあるまちがい】参勤交代を家康が始めたと思ってしまう。制度化したのは3代将軍家光（1635年）である。\n\n【ここが絶対】「参勤交代を制度化したのは3代将軍徳川家光（1635年、武家諸法度）」は歴史の最頻出事項。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_yotsuya_03',
    subject: 'shakai',
    question: '日本の輸出品の変化：明治時代初期の主要輸出品と現代（2020年代）の主要輸出品を比較して答えよ。',
    answer: '明治初期: 生糸（きいと）・お茶が中心（農産物・繊維製品）。現代: 自動車・半導体・機械類が中心（工業製品）',
    hint:
      '日本の産業構造は農業中心→軽工業→重化学工業→先端技術産業へと変化',
    explanation:
      '【何を聞かれているか】明治時代初期の主要輸出品と現代の主要輸出品の比較である。\n\n【なぜそうなるのか】日本は資源が乏しいため、原料や軽工業品を売る国から、原料や燃料を買って高い技術の工業製品を売る国（加工貿易）へと産業構造を変化させてきた。\n\n【ステップ1】明治初期は生糸と茶が中心。生糸は輸出額の3割以上をしめ、政府は1872年に群馬県の富岡製糸場をつくって技術を広めた。\n\n【ステップ2】現代は自動車・半導体等電子部品・鉄鋼・自動車部品・半導体製造装置など、機械類が中心。\n\n【答え】明治初期: 生糸（きいと）・お茶が中心（農産物・繊維製品）。現代: 自動車・半導体・機械類が中心（工業製品）\n\n【確かめ】流れは 農産物・繊維（明治）→軽工業→重化学工業（高度経済成長期）→機械・電子・先端技術（現在）。\n\n【よくあるまちがい】明治初期の輸入品を工業製品ではなく原料だと思ってしまう。当時の日本はまだ工業化が進んでおらず、綿織物や機械など工業製品を輸入していた。\n\n【ここが絶対】「日本の産業構造は農業・繊維（明治）→軽工業→重化学工業→先端技術（現在）」と変化してきた流れは歴史・地理の最頻出事項。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_yotsuya_04',
    subject: 'shakai',
    question: '日本で選挙権（投票できる権利）が20歳以上から18歳以上に引き下げられた年はいつか？また衆議院と参議院の定数をそれぞれ答えよ。',
    answer: '2016年（平成28年）。衆議院: 465人、参議院: 248人',
    explanation:
      '【何を聞かれているか】選挙権が18歳になった年、衆議院・参議院の定数。\n【なぜそうなるのか】若い世代の意見を政治に反映させるため、**2016年**に改正公職選挙法が施行され、その年の参議院選挙から18歳以上が投票できるようになった。\n【ステップ1】2016年。\n【ステップ2】衆議院465人（小選挙区289＋比例176）、参議院248人（選挙区148＋比例100）。\n【答え】2016年。衆議院465人、参議院248人\n【確かめ】約70年ぶりの引き下げ。2022年には成年年齢も18歳に。被選挙権は衆議院25歳・参議院30歳のまま。\n【よくあるまちがい】立候補も18歳からと思う。**被選挙権は25・30歳**。\n【ここが絶対】「選挙権18歳（2016年）・被選挙権25歳/30歳」の年齢の使い分けは公民の頻出問題。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_yotsuya_05',
    subject: 'shakai',
    question: '地図上で等高線が密集している場所と等高線の間隔が広い場所では、それぞれ何を意味するか？また扇状地と三角州の違いを説明せよ。',
    answer: '等高線が密=急斜面、間隔広=緩やかな斜面。扇状地: 川が山から平野に出る所に堆積する扇形の地形（礫・砂が多い）。三角州: 川が海や湖に注ぐ河口付近に堆積する三角形の地形（泥・砂が多い）',
    explanation:
      '【何を聞かれているか】等高線の間隔と斜面の急・緩の関係、および扇状地と三角州のちがいである。\n\n【なぜそうなるのか】となり合う等高線の高さの差は決まっているので、線の間かくがせまいほど短い水平距離で高さが大きく変わり急な斜面になる。\n\n【ステップ1】等高線が密集している場所は急斜面、間隔が広い場所はゆるやかな斜面を表す。\n\n【ステップ2】扇状地は川が山地から平地に出るところで大きめの石や砂がたまってできる扇形の地形（水はけがよく果樹園に利用）。三角州は川が海や湖に注ぐ河口付近で細かい砂や泥がたまってできる低くて平らな地形（水もちがよく水田や都市に利用）。\n\n【答え】等高線が密=急斜面、間隔広=緩やかな斜面。扇状地: 川が山から平野に出る所に堆積する扇形の地形（礫・砂が多い）。三角州: 川が海や湖に注ぐ河口付近に堆積する三角形の地形（泥・砂が多い）\n\n【確かめ】扇状地の代表例は山梨県の甲府盆地、三角州の代表例は広島市の太田川河口である。\n\n【よくあるまちがい】扇状地と三角州の土地利用を逆に覚える。「山のふもと＝扇状地・粗い土・果樹園」「河口＝三角州・細かい土・水田や都市」と対で覚える。\n\n【ここが絶対】「扇状地（水はけよい・果樹園）と三角州（水もちよい・水田や都市）」の対比は地理の最頻出事項。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_yotsuya_06',
    subject: 'shakai',
    question: '日本のエネルギー問題について。2011年の東日本大震災以前と以後で、日本のエネルギー政策がどのように変わったか説明せよ。',
    answer: '震災前: 原子力発電を積極推進（低コスト・CO₂少）。震災後: 東京電力福島第一原発事故を受け多くの原発が停止→火力発電に依存、電力不足・電気代上昇。再生可能エネルギー（太陽光・風力）の普及を推進',
    explanation:
      '【何を聞かれているか】2011年の東日本大震災の前後で日本のエネルギー政策がどう変わったかである。\n\n【なぜそうなるのか】福島第一原発事故を受けて全国の原発が停止し、不足分を火力発電で補ったため燃料の輸入が増え、再生可能エネルギーの導入が進められるようになった。\n\n【ステップ1】震災前は、二酸化炭素を出さず費用も安いとして原子力発電を推進し、電力の約3割を原子力がまかなっていた。\n\n【ステップ2】震災後は原発が停止し火力発電に依存、電気代の上昇とCO₂排出の増加を招いた。固定価格買取制度で太陽光などの再生可能エネルギーの導入が進められた。\n\n【答え】震災前: 原子力発電を積極推進（低コスト・CO₂少）。震災後: 東京電力福島第一原発事故を受け多くの原発が停止→火力発電に依存、電力不足・電気代上昇。再生可能エネルギー（太陽光・風力）の普及を推進\n\n【確かめ】現在は、安全が確認された原発の一部再稼働と、2050年カーボンニュートラルの目標との両立が課題になっている。\n\n【よくあるまちがい】震災後すぐに再生可能エネルギーが電力の中心になったと思ってしまう。実際は火力発電への依存が高まったのが直後の変化である。\n\n【ここが絶対】「2011年福島第一原発事故→原発停止→火力依存増加→再生可能エネルギー導入」の因果関係は公民・地理の最頻出事項。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_yotsuya_07',
    subject: 'shakai',
    question: '室町時代に応仁の乱（1467年）が起きた原因を説明し、この乱が日本にもたらした最大の影響を答えよ。',
    answer: '原因: 足利将軍家の後継者争い＋有力守護大名（細川氏vs山名氏）の対立が重なった。影響: 約11年の戦乱で京都が荒廃、室町幕府の権力が弱まり戦国時代が始まる',
    explanation:
      '【何を聞かれているか】応仁の乱の原因と最大の影響。\n【なぜそうなるのか】8代将軍足利義政の**あとつぎ争い**（弟の義視と子の義尚）に、**細川勝元と山名持豊の勢力争い**が重なり、1467年から京都で約11年戦った。\n【ステップ1】原因：将軍家のあとつぎ争い＋細川・山名の対立。\n【ステップ2】影響：京都が焼け野原、幕府の権威が落ち、下剋上が広まって戦国時代へ。\n【答え】原因：将軍のあとつぎ争いに有力守護大名の対立が重なった。影響：幕府の力が弱まり戦国時代が始まった\n【確かめ】「人の世むなし（1467）」。公家や僧が地方へのがれ、京都の文化が地方に広まった面もある。\n【よくあるまちがい】応仁の乱で室町幕府がほろんだと思う。**幕府自体は1573年まで続く**。\n【ここが絶対】「応仁の乱→下剋上→戦国時代」の流れは頻出。幕府自体は1573年まで続く点も要注意。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_yotsuya_08',
    subject: 'shakai',
    question: '国連（国際連合）の主要機関を5つ答え、安全保障理事会の常任理事国（5か国）を答えよ。',
    answer: '主要機関: ①総会 ②安全保障理事会 ③経済社会理事会 ④信託統治理事会 ⑤国際司法裁判所（＋事務局）。常任理事国: アメリカ・イギリス・フランス・ロシア・中国（P5）',
    explanation:
      '【何を聞かれているか】国連の主要機関と、安全保障理事会の常任理事国。\n【なぜそうなるのか】国連には**総会・安全保障理事会・経済社会理事会・信託統治理事会・国際司法裁判所・事務局**の6つの主要機関がある。安保理は平和と安全に責任をもち、**常任理事国5か国は拒否権**をもつ。\n【ステップ1】主要機関：総会・安保理・経済社会理事会・信託統治理事会（活動停止中）・国際司法裁判所（ハーグ）・事務局。\n【ステップ2】常任理事国：アメリカ・イギリス・フランス・ロシア・中国。\n【答え】総会・安全保障理事会・経済社会理事会・信託統治理事会・国際司法裁判所（＋事務局）。常任理事国：アメリカ・イギリス・フランス・ロシア・中国\n【確かめ】非常任理事国は10か国で任期2年。日本は非常任理事国に最も多く選ばれている。\n【よくあるまちがい】日本を常任理事国に入れる。**日本は非常任**。\n【ここが絶対】「安保理常任理事国5か国（米英仏露中）と拒否権」は公民の最頻出テーマ。日本は非常任理事国である点も必ず問われる。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_yotsuya_09',
    subject: 'shakai',
    question: '日本の農業の課題として「食料自給率の低下」がある。日本のカロリーベース食料自給率はおよそ何%か（2020年代）？また自給率が低い主な理由を2つ答えよ。',
    answer: '約38%（カロリーベース）。理由: ①小麦・大豆・飼料穀物の大半を輸入に依存 ②農業従事者の高齢化・農地の減少',
    explanation:
      '【何を聞かれているか】日本のカロリーベース食料自給率のおよその数値と、自給率が低い理由を2つ答える。\n\n【なぜそうなるのか】米はほぼ自給できるが小麦・大豆・飼料穀物の大半を輸入に依存しており、さらに農業従事者の高齢化・農地の減少で国内生産力そのものが下がっている。\n\n【ステップ1】カロリーベースで約38%。米はほぼ自給できるが、小麦・大豆・とうもろこしなどは大部分を輸入しており、飼料もほとんどが輸入である。\n\n【ステップ2】農業で働く人の高齢化と減少、あとつぎ不足による耕作放棄地の増加、安い輸入品との競争が国内生産をおさえている。\n\n【答え】約38%（カロリーベース）。理由: ①小麦・大豆・飼料穀物の大半を輸入に依存 ②農業従事者の高齢化・農地の減少\n\n【確かめ】食料を安定して確保する（食料安全保障）ため、自給率を上げることが国の目標になっている。\n\n【よくあるまちがい】国産の肉や卵ならすべて自給に数えられると思ってしまう。えさが輸入なら、その分は自給率の計算から差し引かれる。\n\n【ここが絶対】「食料自給率（カロリーベース）＝約38%、小麦・大豆・飼料の輸入依存が主因」は地理・公民の最頻出事項。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_yotsuya_10',
    subject: 'shakai',
    question: '北方領土について。日本が返還を求めている4つの島の名前と、現在実効支配している国名を答えよ。',
    answer: '4島: 択捉島（エトロフ）・国後島（クナシリ）・色丹島（シコタン）・歯舞群島（ハボマイ）。現在の実効支配国: ロシア連邦（第二次世界大戦終結直前にソ連が占領）',
    explanation:
      '【何を聞かれているか】北方領土の4島と、実効支配している国。\n【なぜそうなるのか】北方領土は北海道の東の**択捉島・国後島・色丹島・歯舞群島**。1945年の終戦前後に**ソ連が占領**し、今はロシアが支配している。日本は固有の領土として返還を求めている。\n【ステップ1】4島：択捉・国後・色丹・歯舞。\n【ステップ2】ロシア連邦。\n【答え】択捉島・国後島・色丹島・歯舞群島。ロシア\n【確かめ】1956年の日ソ共同宣言で国交回復したが平和条約はまだ。竹島（島根県）は韓国が不法占拠、尖閣諸島（沖縄県）は日本が有効に支配していて領土問題は存在しないのが日本の立場。\n【よくあるまちがい】北方領土を「北海道の北」と思う。**東**。\n【ここが絶対】「北方領土4島の名前とロシアが実効支配」「竹島は韓国、尖閣諸島は日本が支配」という3つの領土問題の対比は超頻出。',
    difficulty: 'advanced',
  },

  // ── 国語 最難関10問 ──
  {
    id: 'kokugo_yotsuya_01',
    subject: 'kokugo',
    question: '次の文の敬語の間違いを直せ。「先生が教室に来られました。私は先生に資料を差し上げ、先生は喜んでいただきました。」',
    answer: '「先生は喜んでいただきました」→「先生はお喜びになりました」。（いただく=謙譲語なので先生に使うのは誤り）',
    explanation:
      '【何を聞かれているか】\n「先生が教室に来られました。私は先生に資料を差し上げ、先生は喜んでいただきました。」の敬語の間違いを直す力が問われている。\n\n【なぜそうなるのか】\n「先生は喜んで」は先生の動作なので尊敬語にする必要があるが、「いただく」は「もらう」の謙譲語で自分がへりくだる言い方なので先生には使えない。\n\n【ステップ1】\n「来られました」（尊敬語）「差し上げ」（自分の動作の謙譲語）が正しいことを確認する。\n\n【ステップ2】\n「お喜びになりました」に直す必要があることを確認する。\n\n【答え】\n「先生は喜んでいただきました」→「先生はお喜びになりました」。（いただく=謙譲語なので先生に使うのは誤り）\n\n【確かめ】\n「お〜になる」が尊敬語をつくる形であることも再確認する。\n\n【よくあるまちがい】\n謙譲語「いただく」を先生の動作に使わないこと。\n\n【ここが絶対】\n敬語は「だれの動作か」で決めることを押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_yotsuya_02',
    subject: 'kokugo',
    question: '「起承転結」とは何か説明し、俳句・短歌・詩・小説のうち「起承転結」の構成が最も使われるのはどれか答えよ。',
    answer: '起承転結: 文章・話の構成法。起=話題を起こす、承=発展させる、転=話題を変える・展開する、結=まとめる。最も使われるのは小説（物語）や漢詩',
    explanation:
      '【何を聞かれているか】\n「起承転結」とは何かを説明し、俳句・短歌・詩・小説のうちどれに最も使われるかを答える力が問われている。\n\n【なぜそうなるのか】\n起承転結は漢詩（絶句）の組み立てからきた四段構成で、俳句や短歌は短すぎてこの四段には分けにくく、まとまった長さの物語（小説）や漢詩で最もよく使われる。\n\n【ステップ1】\n起＝話題を出す、承＝それを受けて広げる、転＝視点や話題を変える、結＝全体をしめくくるという4段階を確認する。\n\n【ステップ2】\n俳句・短歌が短すぎて分けにくいことを確認する。\n\n【答え】\n起承転結: 文章・話の構成法。起=話題を起こす、承=発展させる、転=話題を変える・展開する、結=まとめる。最も使われるのは小説（物語）や漢詩\n\n【確かめ】\n漢詩（絶句）の組み立てが由来であることも再確認する。\n\n【よくあるまちがい】\n俳句・短歌に最もよく使われると答えないこと。\n\n【ここが絶対】\nまとまった長さの文章で使われることを押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_yotsuya_03',
    subject: 'kokugo',
    question: '夏目漱石の「坊っちゃん」の主人公の特徴を述べ、作品の舞台となった都市はどこか。また漱石の代表作をさらに2作品答えよ。',
    answer: '主人公: 正直で短気、曲がったことが嫌い。舞台: 松山（愛媛県）。代表作: 「吾輩は猫である」「こころ」（他に「三四郎」「それから」など）',
    explanation:
      '【何を聞かれているか】\n夏目漱石「坊っちゃん」の主人公の特徴、舞台となった都市、漱石の代表作をさらに2作品答える力が問われている。\n\n【なぜそうなるのか】\n主人公は正直で正義感が強く曲がったことが大きらいな短気な青年で、舞台は四国の松山（愛媛県）、漱石自身が松山で英語を教えた経験がもとになっている。\n\n【ステップ1】\n主人公の性格を確認する。\n\n【ステップ2】\n「吾輩は猫である」「こころ」以外に「三四郎」「それから」「門」という前期三部作も確認する。\n\n【答え】\n主人公: 正直で短気、曲がったことが嫌い。舞台: 松山（愛媛県）。代表作: 「吾輩は猫である」「こころ」（他に「三四郎」「それから」など）\n\n【確かめ】\n漱石自身の松山での経験がもとになっていることも再確認する。\n\n【よくあるまちがい】\n舞台の都市を東京など別の場所と混同しないこと。\n\n【ここが絶対】\n主人公の性格と舞台をセットで覚えることを押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_yotsuya_04',
    subject: 'kokugo',
    question: '「推敲（すいこう）」という言葉の由来となった故事を説明せよ。また「蛍雪の功（けいせつのこう）」の意味も答えよ。',
    answer: '推敲: 唐の詩人賈島（かとう）が「僧は推す月下の門」か「僧は敲く月下の門」か迷い、韓愈に相談。転じて文章を何度も練り直すこと。蛍雪の功: 苦労して勉学に励むこと（蛍の光・雪明かりで勉強した故事から）',
    explanation:
      '【何を聞かれているか】\n「推敲」という言葉の由来となった故事と「蛍雪の功」の意味を答える力が問われている。\n\n【なぜそうなるのか】\n「推敲」は唐の詩人賈島が「僧は推す月下の門」か「僧は敲く月下の門」か迷い韓愈に相談した故事から、文章を何度も練り直すことを表す。「蛍雪の功」は貧しくて灯油が買えず蛍の光や雪明かりで勉強した故事から苦労して勉学に励むことを表す。\n\n【ステップ1】\n賈島と韓愈の故事の内容を確認する。\n\n【ステップ2】\n卒業式の歌「蛍の光」がこの故事に由来することを確認する。\n\n【答え】\n推敲: 唐の詩人賈島（かとう）が「僧は推す月下の門」か「僧は敲く月下の門」か迷い、韓愈に相談。転じて文章を何度も練り直すこと。蛍雪の功: 苦労して勉学に励むこと（蛍の光・雪明かりで勉強した故事から）\n\n【確かめ】\n「推す」と「敲く」のどちらの文字を選ぶか迷った話であることも再確認する。\n\n【よくあるまちがい】\n2つの故事を混同しないこと。\n\n【ここが絶対】\n「推敲」が文章を練り直すこと、「蛍雪の功」が苦労して勉学に励むことという別々の意味であることを押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_yotsuya_05',
    subject: 'kokugo',
    question: '次の漢字の部首名と、その部首を持つ別の漢字を1つずつ答えよ。①「頭」②「能」③「然」',
    answer: '①頭: 部首「頁（おおがい）」、例: 顔・頂・額など ②能: 部首「月（にくづき）」、例: 脳・肺・腸など ③然: 部首「火（れっか・れんが）」、例: 燃・烈・黒など',
    explanation:
      '【何を聞かれているか】\n「頭」「能」「然」の部首名と、その部首を持つ別の漢字を答える力が問われている。\n\n【なぜそうなるのか】\n「頭」の部首は「頁（おおがい）」で頭や顔に関係する漢字につき、「能」の部首は「月（にくづき）」で体に関係する漢字につき、「然」の部首は「灬（れっか・れんが）」で火を表す。\n\n【ステップ1】\nそれぞれの部首の意味を確認する。\n\n【ステップ2】\n同じ部首を持つ他の漢字（顔・頂・額、脳・肺・腸、燃・烈・熱）を確認する。\n\n【答え】\n①頭: 部首「頁（おおがい）」、例: 顔・頂・額など ②能: 部首「月（にくづき）」、例: 脳・肺・腸など ③然: 部首「火（れっか・れんが）」、例: 燃・烈・黒など\n\n【確かめ】\n部首の意味が分かると知らない漢字でも意味を推測しやすくなることも再確認する。\n\n【よくあるまちがい】\n「月（にくづき）」を「月」（つき）の意味だと誤解しないこと。\n\n【ここが絶対】\n部首がその漢字の意味の手がかりになることを押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_yotsuya_06',
    subject: 'kokugo',
    question: '「五七五七七」の形式を持つ詩を何というか？また「五七五」の形式の詩と比べて違う点を2つ述べよ。',
    answer: '短歌（和歌）。俳句との違い: ①文字数（短歌31字、俳句17字） ②俳句には季語が必須だが短歌にはない（必要ない）',
    explanation:
      '【何を聞かれているか】\n「五七五七七」の形式を持つ詩の名前と、「五七五」の形式の詩と比べた違いを2つ答える力が問われている。\n\n【なぜそうなるのか】\n五・七・五・七・七の三十一音の形式は短歌（和歌）であり、俳句（五・七・五の十七音）とは音数と季語の有無の点で異なる。\n\n【ステップ1】\n音数の違い（短歌31音、俳句17音）を確認する。\n\n【ステップ2】\n俳句には季語と切れ字を入れるきまりがあるが短歌にはないことを確認する。\n\n【答え】\n短歌（和歌）。俳句との違い: ①文字数（短歌31字、俳句17字） ②俳句には季語が必須だが短歌にはない（必要ない）\n\n【確かめ】\n「みそひともじ」という短歌の別名も再確認する。\n\n【よくあるまちがい】\n俳句と短歌の音数を逆にしないこと。\n\n【ここが絶対】\n音数と季語の有無という2つの違いを押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_yotsuya_07',
    subject: 'kokugo',
    question: '「喉元過ぎれば熱さを忘れる」「情けは人のためならず」のそれぞれの正しい意味を答えよ。',
    answer: '①喉元過ぎれば熱さを忘れる: 苦しいことも過ぎてしまえばすぐに忘れてしまう。②情けは人のためならず: 人に情けをかけることは、その人のためになるだけでなく、巡り巡って自分の利益になる（人に親切にすれば自分に返ってくる）',
    explanation:
      '【何を聞かれているか】\n「喉元過ぎれば熱さを忘れる」「情けは人のためならず」のそれぞれの正しい意味を答える力が問われている。\n\n【なぜそうなるのか】\n①は熱いものも飲みこんでしまえば熱さを忘れるように苦しかったことも過ぎてしまえば忘れてしまうこと、②は人にかけた情けはめぐりめぐって自分に返ってくるということを表す。\n\n【ステップ1】\n②が「その人のためにならない」という意味ではないことを確認する。\n\n【ステップ2】\n①の由来（熱いものを飲みこむ様子）を確認する。\n\n【答え】\n①喉元過ぎれば熱さを忘れる: 苦しいことも過ぎてしまえばすぐに忘れてしまう。②情けは人のためならず: 人に情けをかけることは、その人のためになるだけでなく、巡り巡って自分の利益になる（人に親切にすれば自分に返ってくる）\n\n【確かめ】\n②が取りちがえやすい代表例であることも再確認する。\n\n【よくあるまちがい】\n②を「情けをかけるとその人のためにならない」という誤用で覚えないこと。\n\n【ここが絶対】\n②の「為ならず」が「自分にも返ってくる」という意味であることを押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_yotsuya_08',
    subject: 'kokugo',
    question: '次の文を文節に区切り、文節の数を答えよ。「私は毎朝6時に起きて学校へ行きます。」',
    answer: '私は／毎朝／6時に／起きて／学校へ／行きます。→ 6文節',
    hint: '「ネ」を入れられるところが文節の区切り。「私はネ、毎朝ネ、6時にネ、起きてネ、学校へネ、行きますネ」',
    explanation:
      '【何を聞かれているか】\n「私は毎朝6時に起きて学校へ行きます。」を文節に区切り文節の数を答える力が問われている。\n\n【なぜそうなるのか】\n文節は意味がこわれない範囲で文をできるだけ短く区切ったまとまりで、区切りに「ネ」を入れて自然かどうかで確かめられる。\n\n【ステップ1】\n「私はネ、毎朝ネ、6時にネ、起きてネ、学校へネ、行きますネ」と区切ってみる。\n\n【ステップ2】\n「起きて」を「起き／て」と切らないことを確認する（「て」だけでは意味をなさない）。\n\n【答え】\n私は／毎朝／6時に／起きて／学校へ／行きます。→ 6文節\n\n【確かめ】\n単語に分けると文節よりさらに細かくなることも再確認する。\n\n【よくあるまちがい】\n「起きて」を「起き／て」と切らないこと。\n\n【ここが絶対】\n「ネ」を入れて自然かどうかで文節の区切りを確かめることを押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_yotsuya_09',
    subject: 'kokugo',
    question: '「いづれの御時にか、女御・更衣あまたさぶらひ給ひける中に…」これは何という作品の書き出しか？作者と成立時代も答えよ。',
    answer: '「源氏物語（げんじものがたり）」の書き出し。作者: 紫式部（むらさきしきぶ）。成立時代: 平安時代（11世紀初め）',
    explanation:
      '【何を聞かれているか】\n「いづれの御時にか、女御・更衣あまたさぶらひ給ひける中に…」が何という作品の書き出しかを答え、作者と成立時代も答える力が問われている。\n\n【なぜそうなるのか】\nこれは『源氏物語』の書き出しで、「どの帝の御代のことであったか」という意味であり、作者は紫式部、成立は平安時代（11世紀初め）である。\n\n【ステップ1】\n中宮彰子に仕えた紫式部が書いたことを確認する。\n\n【ステップ2】\n主人公が光源氏であることを確認する。\n\n【答え】\n「源氏物語（げんじものがたり）」の書き出し。作者: 紫式部（むらさきしきぶ）。成立時代: 平安時代（11世紀初め）\n\n【確かめ】\n全五十四帖の長編物語であることも再確認する。\n\n【よくあるまちがい】\n『枕草子』の書き出しと混同しないこと。\n\n【ここが絶対】\n作者・成立時代・主人公をセットで覚えることを押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_yotsuya_10',
    subject: 'kokugo',
    question: '「四面楚歌（しめんそか）」「背水の陣（はいすいのじん）」「臥薪嘗胆（がしんしょうたん）」の意味をそれぞれ答えよ。',
    answer: '四面楚歌: まわりが全て敵で孤立無援の状態。背水の陣: 川を背に陣を張り逃げ場をなくして決死の覚悟で戦うこと。臥薪嘗胆: 敵に敗れた恥を忘れないよう苦労に耐え、復讐の機会を待つこと',
    explanation:
      '【何を聞かれているか】\n「四面楚歌」「背水の陣」「臥薪嘗胆」の意味をそれぞれ答える力が問われている。\n\n【なぜそうなるのか】\n①は漢軍に囲まれた項羽が四方から故郷楚の歌が聞こえて味方がいないと悟った故事から孤立無援の状態、②は韓信が川を背に陣をしき逃げ場をなくして必死に戦わせ勝った故事から決死の覚悟、③は呉と越の故事から目的のために苦労にたえることを表す。\n\n【ステップ1】\nそれぞれの故事の内容を確認する。\n\n【ステップ2】\n③が薪の上に寝て苦い肝をなめるという2つの行為から成ることを確認する。\n\n【答え】\n四面楚歌: まわりが全て敵で孤立無援の状態。背水の陣: 川を背に陣を張り逃げ場をなくして決死の覚悟で戦うこと。臥薪嘗胆: 敵に敗れた恥を忘れないよう苦労に耐え、復讐の機会を待つこと\n\n【確かめ】\nこれらがすべて中国の故事に由来する語であることも再確認する。\n\n【よくあるまちがい】\n3つの故事を混同しないこと。\n\n【ここが絶対】\nそれぞれ異なる場面・意味を持つことを押さえる。',
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
    answer: '残辺12cm（13²-5²=144=12²）・面積30cm²（5×12÷2）',
    hint: '5-12-13はピタゴラス数',
    explanation: '三平方の定理 a²+b²＝c²（cは斜辺）を使う。\n13×13−5×5＝169−25＝144＝12×12 なので、残りの辺は12cm。\n直角をはさむ2辺が5cmと12cmなので 面積＝5×12÷2＝30cm²。\n3:4:5 や 5:12:13 は覚えておくと速い。',
    difficulty: 'advanced',
  },
  {
    id: 'sansu_ex_06',
    subject: 'sansu',
    question: '1から200までの整数のうち3でも5でも割り切れない整数は何個か？',
    answer: '107個（3の倍数66個＋5の倍数40個－15の倍数13個=93個。200-93=107個）',
    hint:
      '全体から「3か5でわり切れる数」を引く。3の倍数と5の倍数をたすと、15の倍数を2回数えているので1回ぶん引く。',
    explanation:
      '【何を聞かれているか】1から200までのうち、3でも5でもわり切れない整数の個数。\n【なぜその式なのか】「どちらでもわり切れない」を直接数えるより、**全体から「3か5でわり切れる数」を引く**ほうが楽。3の倍数と5の倍数をそのままたすと、15の倍数（3でも5でもわり切れる）を2回数えてしまうので、1回ぶん引いてもどす。\n【ステップ1】3の倍数：200÷3＝66あまり2 → 66個。5の倍数：200÷5＝40個。\n【ステップ2】15の倍数：200÷15＝13あまり5 → 13個。\n【ステップ3】3か5でわり切れる数は 66＋40−13＝93個。\n【ステップ4】200−93＝107個。\n【答え】107個\n【確かめ】1〜15の中で該当する数は 1, 2, 4, 7, 8, 11, 13, 14 の8個。15ごとに同じ並びなので 8×13＝104個、残り196〜200では 196, 197, 199 の3個。104＋3＝107 で一致する。\n【よくあるまちがい】15の倍数を引き忘れて94個にする。3の倍数の個数を「200÷3＝66.6…」から67個としてしまうのもよくある。あまりは切り捨てる。',
    difficulty: 'advanced',
  },
  {
    id: 'sansu_ex_07',
    subject: 'sansu',
    question: 'ある正六角形の面積は93.6cm²です。この正六角形を中心から6つの合同な正三角形に分けたとき、正三角形1個の面積は何cm²ですか。',
    answer: '15.6cm²',
    hint: '6個に分けるので、全体を6でわる。',
    explanation: '【解説】\n正六角形は、中心から6つの頂点へ線を引くと合同な正三角形6個に分けられる。\n6個で93.6cm²なので、1個は 93.6 ÷ 6 ＝ 15.6cm²。\n【こつ】正六角形の問題は「正三角形6個ぶん」と置きかえると、かけ算とわり算だけで行き来できる。面積から1個ぶんを出すときは6でわり、1個ぶんから全体を出すときは6をかける。',
    difficulty: 'advanced',
  },
  {
    id: 'sansu_ex_08',
    subject: 'sansu',
    question: '上り坂を時速3km・下り坂を時速5kmで歩く。A地点からB地点へ行くのに2時間12分、帰りは2時間36分かかった。行きの上り坂と下り坂はそれぞれ何kmか？',
    answer: '上り3km・下り6km',
    hint: '行きと帰りで上り坂と下り坂が入れかわる。行きと帰りを合わせると「全体の道のりを時速3kmで1回、時速5kmで1回」進んだことになる。',
    explanation: '【何を聞かれているか】\n行きと帰りで上り・下りが入れかわることを使って、上り坂と下り坂の長さを求める問題です。\n\n【ステップ1】行きと帰りを合わせて考える\n行きの上り坂は帰りの下り坂、行きの下り坂は帰りの上り坂。だから往復では、A〜Bの道のり全体を「時速3kmで1回」「時速5kmで1回」進んだことになる。\n往復の時間 ＝ 2時間12分 ＋ 2時間36分 ＝ 4時間48分 ＝ 4.8時間\n道のり全体を□kmとすると、□÷3 ＋ □÷5 ＝ 4.8。1kmあたり 1/3＋1/5＝8/15 時間かかるので、□ ＝ 4.8 ÷ 8/15 ＝ 9km\n\n【ステップ2】行きと帰りの時間の差から、上りと下りの差を出す\n帰りは行きより 2時間36分 − 2時間12分 ＝ 24分 ＝ 0.4時間 長い。\n行きの上り（□km）と下り（△km）が、帰りでは入れかわる。同じ道のりを時速3kmと時速5kmで歩くと、1kmあたりの時間の差は 1/3−1/5 ＝ 2/15 時間。帰りのほうが長いのは、帰りに時速3kmで歩く道のり（行きの下り△）のほうが、行きに時速3kmで歩く道のり（上り□）より長いから。\n（△−□）× 2/15 ＝ 0.4 → △−□ ＝ 0.4 ÷ 2/15 ＝ 3km\n\n【ステップ3】和差算\n和が9km、差が3km → 上り□ ＝ (9−3)÷2 ＝ 3km、下り△ ＝ 6km\n\n【答え】上り3km・下り6km\n\n【確かめ】行き 3÷3＋6÷5＝1＋1.2＝2.2時間＝2時間12分 ✓、帰り 6÷3＋3÷5＝2＋0.6＝2.6時間＝2時間36分 ✓\n\n【よくあるまちがい】\n行きと帰りの平均の速さを (3＋5)÷2＝4 として道のりを出すミス。上りと下りの長さがちがうので、時間の合計から考える。',
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
    explanation:
      '【何を聞かれているか】1〜5のカード3枚で作る3けたの整数のうち、400より大きいものの個数。\n【なぜその式なのか】400より大きいかどうかは**百の位だけで決まる**。百の位が4か5なら、十の位・一の位が何でも400より大きい。だから百の位で場合分けし、残り2枚の並べ方を「十の位の選び方×一の位の選び方」で数える。\n【ステップ1】百の位が4：十の位は残り4枚から4通り、一の位は残り3枚から3通りで 4×3＝12個。\n【ステップ2】百の位が5：同じく12個。\n【ステップ3】12＋12＝24。\n【答え】24個\n【確かめ】できる3けたの整数は全部で 5×4×3＝60個。百の位が1〜5のどれになるかは同じ12個ずつなので、4と5の分は 12×2＝24 で合う。\n【よくあるまちがい】同じカードを2回使えると思って 5×5＝25 ずつ数える。カードは1枚ずつしかないので、使った分だけ選べる枚数が減る。',
    difficulty: 'advanced',
  },

  // ── 理科 追加10問 ──
  {
    id: 'rika_ex_01',
    subject: 'rika',
    question: 'てこの原理。支点から左30cmに200g、右側に300gをつるしてつり合わせる。300gは支点から何cmの位置か？',
    answer: '20cm（200×30=300×x → x=20cm）',
    hint: 'てこの原理: 力×距離（左）=力×距離（右）',
    explanation:
      '【何を聞かれているか】左30cmに200g、右に300gでつり合う位置。\n【なぜその式なのか】てこは**重さ×支点からの距離**が左右で等しいときつり合う。\n【ステップ1】左：200×30＝6000。\n【ステップ2】右：300×□＝6000 → □＝6000÷300＝20cm。\n【答え】20cm\n【確かめ】300×20＝6000。重さの比 200：300＝2：3 なので距離は逆比 3：2 → 30：20。\n【よくあるまちがい】重いほうを遠くにする。**重いほど支点に近い**。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_ex_02',
    subject: 'rika',
    question: '動滑車1個で100kgの荷物を持ち上げる。引く力は何kgか？引く距離は荷物の何倍か？',
    answer: '引く力50kg・距離2倍（動滑車は力1/2・距離2倍。仕事量は変わらない）',
    hint: '動滑車は力を半分にするが距離は2倍になる',
    explanation:
      '【何を聞かれているか】\n動滑車1個で100kgの荷物を持ち上げるときの引く力と引く距離を求める力が問われている。\n\n【なぜそうなるのか】\n動滑車は荷物を2本のひもで支えるため必要な力は半分になるが、引く距離は2倍になる。\n\n【ステップ1】\n100÷2=50を計算する。\n\n【ステップ2】\n引く距離が2倍になることを確認する。\n\n【答え】\n引く力50kg・距離2倍(動滑車は力1/2・距離2倍。仕事量は変わらない)\n\n【確かめ】\n力×距離が変わらないことを再確認する。\n\n【よくあるまちがい】\n道具を使うと得をすると考えないこと。\n\n【ここが絶対】\n定滑車は力の向きを変えるだけで大きさは変わらないことを押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_ex_03',
    subject: 'rika',
    question: '抵抗3の電熱線と抵抗6の電熱線を直列につなぎ、電池3個を直列にした。回路全体の電流と、2本の電熱線の発熱の比を求めよ。電池1個・豆電球1個の回路に流れる電流を①、豆電球1個分の抵抗を1とする。',
    answer: '全体の抵抗9・電流1/3。発熱の比 3：6＝1：2',
    hint: '直列の抵抗は足し算。電流＝電池の数÷抵抗。発熱は抵抗の比',
    explanation:
      '【何を聞かれているか】\n抵抗3と抵抗6の電熱線を直列につなぎ電池3個をつないだときの全体の電流と発熱の比を求める力が問われている。\n\n【なぜそうなるのか】\n直列では抵抗を足し算し電流=電池の数÷抵抗で求める。発熱は電流が同じなら抵抗の比で決まる。\n\n【ステップ1】\n全体の抵抗3+6=9、電流3÷9=1/3を計算する。\n\n【ステップ2】\n発熱の比が抵抗の比3:6=1:2になることを確認する。\n\n【答え】\n全体の抵抗9・電流1/3。発熱の比3:6=1:2\n\n【確かめ】\n1/3×1/3×3+1/3×1/3×6=1/3+2/3=1と全体の発熱が一致することも確かめる。\n\n【よくあるまちがい】\n発熱を電流だけで比べないこと。\n\n【ここが絶対】\n抵抗が大きい方が発熱も大きいことを押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_ex_04',
    subject: 'rika',
    question: '被子植物と裸子植物の違いを2点、単子葉類と双子葉類の違いを2点挙げよ。',
    answer: '被子/裸子: ①種子が子房に包まれる（裸子は露出）②花弁がある（裸子はない）。単子/双子: ①葉脈（単子=平行・双子=網目）②根の形（単子=ひげ根・双子=主根＋側根）',
    explanation:
      '【何を聞かれているか】\n被子植物と裸子植物の違いを2点、単子葉類と双子葉類の違いを2点答える力が問われている。\n\n【なぜそうなるのか】\n被子植物は胚珠が子房に包まれ花弁があるが、裸子植物は子房がなく花も地味である。単子葉類と双子葉類は葉脈や根の形が異なる。\n\n【ステップ1】\n被子植物・裸子植物の子房の有無を確認する。\n\n【ステップ2】\n単子葉類(平行脈・ひげ根)と双子葉類(網状脈・主根と側根)を確認する。\n\n【答え】\n被子/裸子:①種子が子房に包まれる(裸子は露出)②花弁がある(裸子はない)。単子/双子:①葉脈(単子=平行・双子=網目)②根の形(単子=ひげ根・双子=主根+側根)\n\n【確かめ】\n子葉の枚数(1枚か2枚か)が名前の由来であることも再確認する。\n\n【よくあるまちがい】\n裸子植物にも花弁があると考えないこと。\n\n【ここが絶対】\n茎の維管束の並び方も単子葉類と双子葉類で異なることを押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_ex_05',
    subject: 'rika',
    question: '消化液とその働き。だ液・胃液・すい液・胆汁が分解する栄養素を答えよ。',
    answer: 'だ液: デンプン（アミラーゼ）。胃液: タンパク質（ペプシン）。すい液: デンプン・タンパク質・脂肪すべて。胆汁: 脂肪を乳化（酵素なし）',
    explanation:
      '【何を聞かれているか】だ液・胃液・すい液・胆汁がそれぞれ何を分解するか。\n【なぜその式なのか】消化液にはそれぞれ**決まった栄養素にだけはたらく消化酵素**が入っている。すい液だけは3つ全部にはたらく。胆汁は酵素がなく、脂肪を細かくして助ける。\n【ステップ1】だ液：デンプン（アミラーゼ）。\n【ステップ2】胃液：タンパク質（ペプシン、強い酸性の中で）。\n【ステップ3】すい液：デンプン・タンパク質・脂肪のすべて。\n【ステップ4】胆汁：肝臓でつくられ胆のうにたくわえられる。脂肪を細かい粒にする。\n【答え】だ液：デンプン　胃液：タンパク質　すい液：3つすべて　胆汁：脂肪を細かくする（酵素なし）\n【確かめ】最後にデンプンはブドウ糖、タンパク質はアミノ酸、脂肪は脂肪酸などになり、小腸の柔毛から吸収される。\n【よくあるまちがい】胆汁が脂肪を「分解する」と書く。**分解はしない、細かくするだけ**。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_ex_06',
    subject: 'rika',
    question: '酸・アルカリ指示薬の変色。リトマス紙・BTB液・フェノールフタレインをそれぞれ答えよ。',
    answer: 'リトマス: 酸→青が赤、アルカリ→赤が青。BTB: 酸→黄・中→緑・アルカリ→青。フェノールフタレイン: アルカリのみ赤紫（他は無色）',
    explanation:
      '【何を聞かれているか】\nリトマス紙・BTB液・フェノールフタレインの酸・アルカリでの変色を答える力が問われている。\n\n【なぜそうなるのか】\nそれぞれの指示薬が酸性・中性・アルカリ性で異なる色を示すため、これらを使い分けて液性を調べる。\n\n【ステップ1】\nリトマス紙(酸で青→赤、アルカリで赤→青)を確認する。\n\n【ステップ2】\nBTB液(黄・緑・青)とフェノールフタレイン(アルカリのみ赤紫)を確認する。\n\n【答え】\nリトマス:酸→青が赤、アルカリ→赤が青。BTB:酸→黄・中→緑・アルカリ→青。フェノールフタレイン:アルカリのみ赤紫(他は無色)\n\n【確かめ】\nムラサキキャベツ液の変化(酸で赤・中性でむらさき・アルカリで緑~黄色)も再確認する。\n\n【よくあるまちがい】\nフェノールフタレインが酸性でも色づくと考えないこと。\n\n【ここが絶対】\nアルカリ性だけを確かめたいときはフェノールフタレインが便利であることを押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_ex_07',
    subject: 'rika',
    question: '低気圧と高気圧の空気の流れを説明し、日本付近で低気圧が近づくと天気がどう変わるか答えよ。',
    answer: '低気圧: 中心へ風が吹き込み上昇気流→雲・雨。高気圧: 中心から外へ吹き出し下降気流→晴れ。低気圧が近づくと雲がふえて雨になり、温暖前線通過で弱い雨が長く続いて気温上昇、寒冷前線通過で強いにわか雨がふり気温が急降下。通過後は高気圧におおわれて晴れる',
    explanation:
      '【何を聞かれているか】\n低気圧と高気圧の空気の流れと、低気圧が近づくと天気がどう変わるかを答える力が問われている。\n\n【なぜそうなるのか】\n低気圧は中心へ風がふきこみ上昇気流で雲や雨をもたらし、高気圧は中心から外へ吹き出し下降気流で晴れをもたらす。\n\n【ステップ1】\n低気圧(上昇気流・雨)と高気圧(下降気流・晴れ)を確認する。\n\n【ステップ2】\n温暖前線・寒冷前線通過時の天気の変化を確認する。\n\n【答え】\n低気圧:中心へ風が吹き込み上昇気流→雲・雨。高気圧:中心から外へ吹き出し下降気流→晴れ。低気圧が近づくと雲がふえて雨になり、温暖前線通過で弱い雨が長く続いて気温上昇、寒冷前線通過で強いにわか雨がふり気温が急降下。通過後は高気圧におおわれて晴れる\n\n【確かめ】\n上空の偏西風で天気が西から東へ移り変わることも再確認する。\n\n【よくあるまちがい】\n温暖前線と寒冷前線の天気の変化を逆にしないこと。\n\n【ここが絶対】\n低気圧が通り過ぎると高気圧におおわれて晴れることを押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_ex_08',
    subject: 'rika',
    question: '地球の自転によって起こる現象を2つ、地軸の傾きによって起こる現象を1つ答えよ。',
    answer: '自転: ①昼と夜の繰り返し②太陽・星が東から西へ動く（日周運動）。傾き: 季節の変化（夏冬の気温差・昼夜の長さの変化）',
    explanation:
      '【何を聞かれているか】\n地球の自転で起こる現象を2つ、地軸の傾きで起こる現象を1つ答える力が問われている。\n\n【なぜそうなるのか】\n自転により昼夜がくり返され太陽・星が東から西へ動いて見え、地軸の傾きにより季節ごとに太陽の高さと昼の長さが変わる。\n\n【ステップ1】\n自転による昼夜のくり返しと日周運動を確認する。\n\n【ステップ2】\n地軸の傾き(約23.4度)による季節の変化を確認する。\n\n【答え】\n自転:①昼と夜の繰り返し②太陽・星が東から西へ動く(日周運動)。傾き:季節の変化(夏冬の気温差・昼夜の長さの変化)\n\n【確かめ】\n地域ごとの時差も自転によることを再確認する。\n\n【よくあるまちがい】\n季節の変化を公転だけで起こると考えないこと。\n\n【ここが絶対】\n地軸が傾いていなければ季節の変化は起こらないことを押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_ex_09',
    subject: 'rika',
    question: '音の速さは空気中で約何m/sか？雷の光から3秒後に音が聞こえた場合の距離を答えよ。また音が「高い」「大きい」とは波形でどう変化するか？',
    answer: '約340m/s。距離=340×3=1020m。高い音=振動数が多い（波長が短い）。大きい音=振幅が大きい',
    explanation:
      '【何を聞かれているか】\n音の速さと雷までの距離、音の高さ・大きさが波形でどう変化するかを答える力が問われている。\n\n【なぜそうなるのか】\n音は約340m/sで伝わり、光ってから音が聞こえるまでの時間で距離が求まる。音の高さは振動数、大きさは振幅で決まる。\n\n【ステップ1】\n340×3=1020を計算する。\n\n【ステップ2】\n振動数(高さ)と振幅(大きさ)の違いを確認する。\n\n【答え】\n約340m/s。距離=340×3=1020m。高い音=振動数が多い(波長が短い)。大きい音=振幅が大きい\n\n【確かめ】\n弦は細い・短い・強く張るほど高い音が出ることも再確認する。\n\n【よくあるまちがい】\n音の高さを振幅で決めると考えないこと。\n\n【ここが絶対】\n光は一瞬で届くため音の速さで距離を求めることを押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'rika_ex_10',
    subject: 'rika',
    question: '水100gに砂糖20gを溶かした砂糖水の濃度は何%か？また50℃で砂糖が260g溶ける飽和水溶液の濃度は？',
    answer: '20/(100+20)×100≒16.7%。飽和: 260/(100+260)×100≒72.2%',
    hint: '濃度(%)=溶質÷(溶質+溶媒)×100',
    explanation:
      '【何を聞かれているか】\n水100gに砂糖20gを溶かした濃度と、50℃で砂糖260gが溶ける飽和水溶液の濃度を求める力が問われている。\n\n【なぜそうなるのか】\n濃度はとけているものの重さを水溶液全体の重さで割って求める。\n\n【ステップ1】\n20÷(100+20)×100≈16.7%を計算する。\n\n【ステップ2】\n260÷(100+260)×100≈72.2%を計算する。\n\n【答え】\n20/(100+20)×100≒16.7%。飽和:260/(100+260)×100≒72.2%\n\n【確かめ】\n分母を水の重さだけにしないことを確かめる。\n\n【よくあるまちがい】\n分母を水の重さだけにしないこと。\n\n【ここが絶対】\n濃度の分母は水溶液全体(水+とけたもの)であることを押さえる。',
    difficulty: 'advanced',
  },

  // ── 社会 追加10問 ──
  {
    id: 'shakai_ex_01',
    subject: 'shakai',
    question: '明治維新の三大改革を答えよ。また「版籍奉還」と「廃藩置県」それぞれの意味を説明せよ。',
    answer: '三大改革: ①学制②徴兵令③地租改正。版籍奉還: 藩主が土地と人民を天皇に返上。廃藩置県: 藩を廃止し県を置いて中央集権化',
    explanation:
      '【何を聞かれているか】明治維新の三大改革と、版籍奉還・廃藩置県それぞれの意味である。\n\n【なぜそうなるのか】富国強兵をめざす明治政府は、教育・軍事・税制の3つを近代化する改革を行い、あわせて大名の力を段階的に取りのぞいて中央集権を実現した。\n\n【ステップ1】学制（1872年）…6歳以上の男女すべてを小学校に通わせる制度。徴兵令（1873年）…満20歳以上の男子に兵役を義務づけ、武士だけの軍隊から国民の軍隊へ変えた。地租改正（1873年）…地価の3%を現金で納めさせ安定した税収を得た（反対一揆で2.5%に引き下げ）。\n\n【ステップ2】版籍奉還（1869年）…大名（藩主）が土地（版）と人民（籍）を天皇に返した。ただし元の藩主がそのまま知藩事になったため実質はあまり変わらなかった。廃藩置県（1871年）…藩そのものを廃止して県を置き、政府が任命した県令（知事）を送った。\n\n【答え】三大改革: ①学制②徴兵令③地租改正。版籍奉還: 藩主が土地と人民を天皇に返上。廃藩置県: 藩を廃止し県を置いて中央集権化\n\n【確かめ】「まず名目だけ返させ（版籍奉還）、次に藩そのものをなくした（廃藩置県）」という順番が大切。\n\n【よくあるまちがい】版籍奉還で中央集権が実現したと思ってしまう。実質的な中央集権が実現したのは廃藩置県（1871年）である。\n\n【ここが絶対】「版籍奉還（1869年、名目のみ）→廃藩置県（1871年、実質的な中央集権）」の順序は歴史の最頻出事項。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_ex_02',
    subject: 'shakai',
    question: '日本の面積最大・最小の都道府県と人口最多・最少の都道府県を答えよ。',
    answer: '面積最大: 北海道・最小: 香川県。人口最多: 東京都・最少: 鳥取県',
    explanation:
      '【何を聞かれているか】面積最大・最小、人口最多・最少の都道府県。\n【なぜそうなるのか】面積は**北海道が国土の約2割**で最大、**香川県**が最小。人口は政治・経済が集中する**東京都**が最多、**鳥取県**が最少。\n【ステップ1】面積：北海道（約8.3万km²）／香川県（約1877km²）。\n【ステップ2】人口：東京都（約1400万人）／鳥取県（約54万人）。\n【答え】面積最大：北海道、最小：香川県。人口最多：東京都、最少：鳥取県\n【確かめ】人口密度は最高が東京都、最低が北海道。人口2位以下は神奈川・大阪・愛知。\n【よくあるまちがい】面積最小を大阪府とする。**大阪は2番目に小さい**。\n【ここが絶対】面積・人口の「日本一・最少」は超頻出。北海道（面積最大）と東京都（人口最多）を混同せずセットで覚える。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_ex_03',
    subject: 'shakai',
    question: '三権分立の仕組みを説明し、立法・行政・司法それぞれの相互チェック機能を具体的に答えよ。',
    answer: '立法(国会)・行政(内閣)・司法(裁判所)が互いを抑制。国会→内閣不信任決議。内閣→衆議院解散。裁判所→違憲立法審査権',
    explanation:
      '【何を聞かれているか】三権分立のしくみと、たがいのチェック。\n【なぜそうなるのか】権力を**立法（国会）・行政（内閣）・司法（裁判所）**に分け、たがいに行きすぎをおさえ合うことで独裁をふせぎ、国民の権利を守る（モンテスキュー）。\n【ステップ1】国会→内閣：内閣不信任決議・首相の指名。内閣→国会：衆議院の解散。\n【ステップ2】裁判所→国会・内閣：違憲審査権（憲法の番人）。\n【ステップ3】内閣→裁判所：最高裁長官の指名・裁判官の任命。国会→裁判所：弾劾裁判所。\n【答え】国会→内閣不信任決議、内閣→衆議院解散、裁判所→違憲審査権\n【確かめ】国民は選挙（国会）・世論（内閣）・国民審査（最高裁裁判官）で三権に関わる。\n【よくあるまちがい】内閣が国会を「解散」できるのは参議院もと思う。**解散は衆議院だけ**。\n【ここが絶対】三権の相互チェック（不信任決議⇄解散、違憲審査権）の組み合わせは公民の最頻出テーマ。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_ex_04',
    subject: 'shakai',
    question: '日本の四大工業地帯・地域を挙げ、それぞれの主要産業を答えよ。',
    answer: '①京浜(東京・横浜): 印刷・機械②中京(名古屋): 自動車・日本最大の生産額③阪神(大阪・神戸): 鉄鋼・化学④北九州: 鉄鋼・化学（官営八幡製鉄所発祥）',
    explanation:
      '【何を聞かれているか】日本の四大工業地帯・地域とそれぞれの主要産業である。\n\n【なぜそうなるのか】原料の輸入や製品の輸出に便利な臨海部に工業地帯が発達し、地域ごとに歴史的経緯や立地条件から得意とする産業がちがう。\n\n【ステップ1】京浜工業地帯（東京都・神奈川県）…情報が集まる首都にあるため出版・印刷業の割合が高い。中京工業地帯（愛知県・三重県北部）…自動車工業を中心に生産額は日本最大。\n\n【ステップ2】阪神工業地帯（大阪府・兵庫県）…鉄鋼・石油化学など金属・化学工業の割合が高く中小工場が多い。北九州工業地域（福岡県）…1901年操業開始の官営八幡製鉄所が出発点だが、エネルギー革命などで地位が低下した。\n\n【答え】①京浜(東京・横浜): 印刷・機械②中京(名古屋): 自動車・日本最大の生産額③阪神(大阪・神戸): 鉄鋼・化学④北九州: 鉄鋼・化学（官営八幡製鉄所発祥）\n\n【確かめ】北九州は現在「地帯」ではなく「地域」と呼ばれることが多い。\n\n【よくあるまちがい】京浜工業地帯が今も出荷額日本一だと思ってしまう。現在の出荷額日本一は中京工業地帯である。\n\n【ここが絶対】「四大工業地帯（京浜・中京・阪神・北九州）と現在の出荷額日本一＝中京」は地理の最頻出事項。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_ex_05',
    subject: 'shakai',
    question: '江戸時代の身分制度（士農工商）について、各身分の役割と人口比率を答えよ。',
    answer: '士(武士)約7%: 行政・軍事。農(農民)約80%: 年貢・主要身分。工(職人): 製品製造。商(商人): 物品売買。穢多・非人という差別身分も存在',
    explanation:
      '【何を聞かれているか】江戸時代の身分制度（士農工商）における各身分の役割と人口比率である。\n\n【なぜそうなるのか】幕府は身分を固定し、武士が支配し百姓が年貢を納め、職人・商人がものづくりと売買を担う社会を作ることで統治を安定させようとした。\n\n【ステップ1】武士（約7%）…名字を名のり刀を差すことを許された支配身分で、政治や軍事を担当し年貢によって生活した。百姓（約80%以上）…人口の大部分をしめ、米などの年貢を納めた。五人組をつくらせ連帯責任を負わせた。\n\n【ステップ2】職人…ものをつくる仕事をした人々。商人…物を売り買いする仕事をした人々。このほか、えた・ひにんと呼ばれてきびしく差別された身分の人々がいた。\n\n【答え】士(武士)約7%: 行政・軍事。農(農民)約80%: 年貢・主要身分。工(職人): 製品製造。商(商人): 物品売買。穢多・非人という差別身分も存在\n\n【確かめ】1871年の解放令で身分としては廃止されたが差別は長く残り、現在も部落差別の問題として人権教育の課題になっている。\n\n【よくあるまちがい】「士農工商」を身分の上下の順を表すものだと思ってしまう。近年の研究ではそのような序列を表すものではないと考えられている。\n\n【ここが絶対】「江戸時代の身分＝武士約7%・百姓約80%、士農工商は序列を表す語ではない」は歴史の最頻出事項。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_ex_06',
    subject: 'shakai',
    question: '日本の6つの気候区分を全て挙げ、それぞれの特色を答えよ。',
    answer: '①北海道型: 冷帯・梅雨なし②日本海側: 冬大雪・夏晴れ③太平洋側: 夏多雨・冬乾燥④内陸(中央高地): 寒暖差大・少雨⑤瀬戸内: 温暖・少雨⑥南西諸島: 亜熱帯・多雨',
    explanation:
      '【何を聞かれているか】日本の6つの気候区分とそれぞれの特色である。\n\n【なぜそうなるのか】日本は南北に長く背骨のように山地が連なるため、季節風や海流の影響の受け方が地域ごとにちがい、気候が大きく異なる。\n\n【ステップ1】北海道の気候…冷帯で冬の寒さがきびしく梅雨がない。日本海側の気候…冬に北西の季節風が日本海の水蒸気をふくんで山地にぶつかり大雪をふらせる。太平洋側の気候…夏に雨が多く冬は乾いた晴れの日が続く。\n\n【ステップ2】内陸（中央高地）の気候…海から遠く気温差が大きく1年を通して降水量が少ない。瀬戸内の気候…季節風が山地にさえぎられ1年中降水量が少なく温暖。南西諸島の気候…亜熱帯で1年中あたたかく降水量が多い。\n\n【答え】①北海道型: 冷帯・梅雨なし②日本海側: 冬大雪・夏晴れ③太平洋側: 夏多雨・冬乾燥④内陸(中央高地): 寒暖差大・少雨⑤瀬戸内: 温暖・少雨⑥南西諸島: 亜熱帯・多雨\n\n【確かめ】瀬戸内では水不足に備えてため池（香川県の満濃池など）が多い。\n\n【よくあるまちがい】太平洋側と日本海側の降水パターンを逆に覚える。太平洋側は夏に多雨・冬に乾燥、日本海側は冬に多雪である。\n\n【ここが絶対】日本の6気候区分（北海道・日本海側・太平洋側・内陸・瀬戸内・南西諸島）の特色は地理の最頻出事項。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_ex_07',
    subject: 'shakai',
    question: '国連の主な専門機関5つを挙げ、各役割を答えよ。',
    answer: '①WHO(保健)②UNESCO(教育・文化)③UNICEF(子ども)④ILO(労働)⑤FAO(食糧農業)',
    explanation:
      '【何を聞かれているか】国連の専門機関5つと役割。\n【なぜそうなるのか】国連は分野ごとに専門の機関を置いて、**健康・教育文化・子ども・労働・食料**などの問題に取り組む。\n【ステップ1】WHO（世界保健機関）：健康・感染症対策。\n【ステップ2】UNESCO：教育・科学・文化、世界遺産。\n【ステップ3】UNICEF：子どもへの支援。ILO：労働条件。FAO：食料と農業。\n【答え】WHO（保健）・UNESCO（教育文化）・UNICEF（子ども）・ILO（労働）・FAO（食料農業）\n【確かめ】ほかにIMF（通貨）・UNHCR（難民）。UNICEFは正確には専門機関ではなく国連の補助機関だが、入試ではまとめてよく問われる。\n【よくあるまちがい】UNESCOとUNICEFを混ぜる。**世界遺産＝UNESCO、子ども＝UNICEF**。\n【ここが絶対】UNESCOとUNICEFの役割の取り違えは超頻出のひっかけ。世界遺産＝UNESCO、子ども＝UNICEFを絶対に覚える。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_ex_08',
    subject: 'shakai',
    question: '日本の少子高齢化について。2020年代の合計特殊出生率は？高齢化が社会保障費と現役世代に与える影響は？',
    answer: '出生率約1.2〜1.3。影響: 年金・医療・介護費が増大し現役世代1人あたりの負担増。2050年頃に高齢者1人を約1.2人の現役世代が支える試算',
    explanation:
      '【何を聞かれているか】2020年代の日本の合計特殊出生率と、高齢化が社会保障費・現役世代に与える影響である。\n\n【なぜそうなるのか】未婚化・晩婚化や子育て費用の高さで出生率が下がる一方、平均寿命がのびて高齢者の割合が高まるため、年金・医療・介護の給付が増え現役世代の負担が重くなる。\n\n【ステップ1】合計特殊出生率は近年の日本で約1.2〜1.3。人口を保つのに必要な約2.07を大きく下回っている。\n\n【ステップ2】65歳以上の高齢者の割合は約29%に達し超高齢社会になっている。かつて大勢で1人を支える胴上げ型だった支え方は、2050年ごろには高齢者1人を現役世代約1.2人で支える肩車型になると試算されている。\n\n【答え】出生率約1.2〜1.3。影響: 年金・医療・介護費が増大し現役世代1人あたりの負担増。2050年頃に高齢者1人を約1.2人の現役世代が支える試算\n\n【確かめ】労働力不足による経済の縮小も心配され、働き方改革・外国人材の受け入れ・AIの活用などが進められている。\n\n【よくあるまちがい】合計特殊出生率を「子どもの総数」だと勘違いする。1人の女性が一生の間に産む子どもの数の平均を表す指標である。\n\n【ここが絶対】「合計特殊出生率＝約1.2〜1.3（人口維持に必要な約2.07を下回る）、支え方は胴上げ型→肩車型へ」は公民の最頻出事項。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_ex_09',
    subject: 'shakai',
    question: '第二次世界大戦終結後の日本の主要な出来事を時系列で5つ挙げよ。',
    answer: '①1945年終戦・GHQ占領②1951年サンフランシスコ講和条約（独立回復）③1956年国連加盟④1964年東京オリンピック・東海道新幹線⑤1972年沖縄返還',
    explanation:
      '【何を聞かれているか】戦後の主な出来事5つを順に。\n【なぜそうなるのか】流れは**占領→独立→国際社会復帰→経済成長→領土の回復**。\n【ステップ1】1945年 終戦・GHQ占領（財閥解体・農地改革・女性参政権）。\n【ステップ2】1951年 サンフランシスコ平和条約（1952年独立回復、同時に日米安全保障条約）。\n【ステップ3】1956年 日ソ共同宣言→国連加盟。1964年 東京オリンピック・東海道新幹線。1972年 沖縄返還・日中国交正常化。\n【答え】①1945年終戦・占領 ②1951年サンフランシスコ平和条約 ③1956年国連加盟 ④1964年東京オリンピック ⑤1972年沖縄返還\n【確かめ】国連加盟はソ連の反対がなくなったから。\n【よくあるまちがい】沖縄返還を1952年とする。**1972年**。\n【ここが絶対】戦後史の年号（1951年講和条約→1956年国連加盟→1972年沖縄返還）の並びは超頻出。丸ごと年表として覚える。',
    difficulty: 'advanced',
  },
  {
    id: 'shakai_ex_10',
    subject: 'shakai',
    question: '現在の日本のエネルギー問題。2011年以降のエネルギー政策の変化と課題を説明せよ。',
    answer: '2011年福島第一原発事故を受け多くの原発停止→火力発電依存・CO2増加・電気代上昇。再生可能エネルギー普及を推進中。エネルギー安全保障とカーボンニュートラルの両立が課題',
    explanation:
      '【何を聞かれているか】2011年以降の日本のエネルギー政策の変化と課題である。\n\n【なぜそうなるのか】福島第一原発事故で原発が停止し、不足分を火力発電で補ったため燃料輸入・電気代・CO₂排出が増加し、再生可能エネルギーの導入とカーボンニュートラルの両立が課題になっている。\n\n【ステップ1】2011年3月の東日本大震災で福島第一原子力発電所が事故を起こし、全国の原発が停止、きびしい安全審査が行われるようになった。\n\n【ステップ2】不足した電力を火力発電で補ったため燃料の輸入がふえ電気料金が上がりCO₂排出も増加した。固定価格買取制度によって太陽光を中心に再生可能エネルギーが急速に広まった。\n\n【答え】2011年福島第一原発事故を受け多くの原発停止→火力発電依存・CO2増加・電気代上昇。再生可能エネルギー普及を推進中。エネルギー安全保障とカーボンニュートラルの両立が課題\n\n【確かめ】日本のエネルギー自給率は1割ほどしかなく、輸入先も中東にかたよっている点も安全保障上の課題である。\n\n【よくあるまちがい】再生可能エネルギーだけですぐに電力をまかなえると考えてしまう。天候に左右され発電量が不安定という課題がある。\n\n【ここが絶対】「2011年福島第一原発事故→火力依存増加→再生可能エネルギー導入とカーボンニュートラルの両立」の流れは公民の最頻出事項。',
    difficulty: 'advanced',
  },

  // ── 国語 追加10問 ──
  {
    id: 'kokugo_ex_01',
    subject: 'kokugo',
    question: '次の慣用句の意味を答えよ。①目から鱗が落ちる②耳を傾ける③口が軽い④鼻が高い⑤腹を割る',
    answer: '①突然真実を理解できる②熱心に聞く③秘密をすぐしゃべる④自慢に思う⑤本音で話す',
    explanation:
      '【何を聞かれているか】\n「目から鱗が落ちる」「耳を傾ける」「口が軽い」「鼻が高い」「腹を割る」の意味を答える力が問われている。\n\n【なぜそうなるのか】\nどれも体の一部を使った慣用句で、①は見えていなかったことが急に分かる（新約聖書に由来）、②は注意して熱心に聞く、③はすぐしゃべってしまう、④は誇らしい、⑤はかくさず本音で話すことを表す。\n\n【ステップ1】\nそれぞれの体の部位（目・耳・口・鼻・腹）を確認する。\n\n【ステップ2】\n③の反対「口が堅い」も確認する。\n\n【答え】\n①突然真実を理解できる②熱心に聞く③秘密をすぐしゃべる④自慢に思う⑤本音で話す\n\n【確かめ】\n①が新約聖書由来であることも再確認する。\n\n【よくあるまちがい】\n③と反対の「口が堅い」を混同しないこと。\n\n【ここが絶対】\n体の一部を使った慣用句をまとめて覚えることを押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_ex_02',
    subject: 'kokugo',
    question: '漢字の成り立ち4種類（象形・指事・会意・形声）を説明し例を1つずつ挙げよ。',
    answer: '①象形: 物の形をかたどる（山・川）②指事: 概念を記号で（上・下）③会意: 複数の漢字を組合せ（森=木+木+木）④形声: 音と意味（語=言+吾）',
    explanation:
      '【何を聞かれているか】\n漢字の成り立ち4種類（象形・指事・会意・形声）を説明し例を答える力が問われている。\n\n【なぜそうなるのか】\n象形は物の形をかたどる（山・川）、指事は概念を記号で表す（上・下）、会意は複数の漢字を組み合わせる（森＝木＋木＋木）、形声は音と意味を組み合わせる（語＝言＋吾）。\n\n【ステップ1】\nそれぞれの成り立ちの特徴を確認する。\n\n【ステップ2】\n漢字の8割以上が形声文字であることを確認する。\n\n【答え】\n①象形: 物の形をかたどる（山・川）②指事: 概念を記号で（上・下）③会意: 複数の漢字を組合せ（森=木+木+木）④形声: 音と意味（語=言+吾）\n\n【確かめ】\n形声文字が最も多いことも再確認する。\n\n【よくあるまちがい】\n4種類を混同しないこと。\n\n【ここが絶対】\nそれぞれの成り立ちの違いを押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_ex_03',
    subject: 'kokugo',
    question: '三大随筆の作者・時代・冒頭の一文をそれぞれ答えよ（枕草子・方丈記・徒然草）。',
    answer: '枕草子: 清少納言・平安・「春はあけぼの」。方丈記: 鴨長明・鎌倉・「ゆく河の流れは絶えずして」。徒然草: 吉田兼好・鎌倉〜南北朝・「つれづれなるままに」',
    explanation:
      '【何を聞かれているか】\n三大随筆（枕草子・方丈記・徒然草）の作者・時代・冒頭の一文をそれぞれ答える力が問われている。\n\n【なぜそうなるのか】\n枕草子は清少納言・平安・「春はあけぼの」、方丈記は鴨長明・鎌倉・「ゆく河の流れは絶えずして」、徒然草は吉田兼好・鎌倉〜南北朝・「つれづれなるままに」である。\n\n【ステップ1】\n3作品それぞれの作者を確認する。\n\n【ステップ2】\nそれぞれの冒頭の一文を確認する。\n\n【答え】\n枕草子: 清少納言・平安・「春はあけぼの」。方丈記: 鴨長明・鎌倉・「ゆく河の流れは絶えずして」。徒然草: 吉田兼好・鎌倉〜南北朝・「つれづれなるままに」\n\n【確かめ】\n書き出しの一文と作者・時代をセットで覚えることも再確認する。\n\n【よくあるまちがい】\n3作品の作者を取り違えないこと。\n\n【ここが絶対】\n3つとも日本三大随筆であることを押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_ex_04',
    subject: 'kokugo',
    question: '芥川龍之介「羅生門」のあらすじと主題を答えよ。また芥川が残した「ぼんやりした不安」とは何を指すか。',
    answer: 'あらすじ: 仕事を失った下人が羅生門で老婆に出会い、生きるための悪事を正当化し老婆の着物を奪う。主題: 人間のエゴイズム。「ぼんやりした不安」は自殺遺書で記した近代社会への不安',
    explanation:
      '【何を聞かれているか】\n芥川龍之介「羅生門」のあらすじと主題、および芥川が残した「ぼんやりした不安」が何を指すかを答える力が問われている。\n\n【なぜそうなるのか】\n職を失った下人が羅生門で死人の髪を抜く老婆に出会い、「生きるためだ」という言い訳を聞いた下人が同じ理屈で老婆の着物をはぎ取って去るという話で、主題は人間のエゴイズムであり、「ぼんやりした不安」は芥川が自殺の際に残した近代社会への不安を指す。\n\n【ステップ1】\n下人と老婆のやりとりの内容を確認する。\n\n【ステップ2】\n題材が『今昔物語集』であることを確認する。\n\n【答え】\nあらすじ: 仕事を失った下人が羅生門で老婆に出会い、生きるための悪事を正当化し老婆の着物を奪う。主題: 人間のエゴイズム。「ぼんやりした不安」は自殺遺書で記した近代社会への不安\n\n【確かめ】\n「ぼんやりした不安」が自殺の際の言葉であることも再確認する。\n\n【よくあるまちがい】\n主題を単なる貧困の話だと単純化しないこと。\n\n【ここが絶対】\n追いつめられた人間のエゴイズムを描いていることを押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_ex_05',
    subject: 'kokugo',
    question: '修辞技法の名前を答えよ。①「人生は旅だ」②「花が笑っている」③「赤い赤い夕焼け」④「春よ来い、早く来い」',
    answer: '①暗喩（隠喩）②擬人法③反復（繰り返し）④呼びかけ・反復',
    explanation:
      '【何を聞かれているか】\n「人生は旅だ」「花が笑っている」「赤い赤い夕焼け」「春よ来い、早く来い」の修辞技法の名前を答える力が問われている。\n\n【なぜそうなるのか】\n①は「〜のようだ」を使わず直接たとえる暗喩（隠喩）、②は人でないものを人のように表す擬人法、③は同じ言葉をくり返す反復、④は呼びかけと反復の組み合わせである。\n\n【ステップ1】\n①が直喩ではなく暗喩であることを確認する（「〜のようだ」を使えば直喩）。\n\n【ステップ2】\n④が呼びかけと反復の両方の性質を持つことを確認する。\n\n【答え】\n①暗喩（隠喩）②擬人法③反復（繰り返し）④呼びかけ・反復\n\n【確かめ】\nそれぞれの技法の見分け方も再確認する。\n\n【よくあるまちがい】\n①を直喩と混同しないこと。\n\n【ここが絶対】\n「〜のようだ」の有無で直喩と暗喩を見分けることを押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_ex_06',
    subject: 'kokugo',
    question: '「平家物語」の冒頭を現代語訳し、作品の主題と伝承方法を答えよ。',
    answer: '「祇園精舎の鐘の声、諸行無常の響きあり」=祇園精舎の鐘の音はすべてが移り変わるという無常の響きだ。主題: 平家の栄枯盛衰・無常観。琵琶法師が語り伝えた軍記物語',
    explanation:
      '【何を聞かれているか】\n「平家物語」の冒頭を現代語訳し、作品の主題と伝承方法を答える力が問われている。\n\n【なぜそうなるのか】\n「祇園精舎の鐘の声、諸行無常の響きあり」は祇園精舎の鐘の音はすべてが移り変わるという無常の響きだという意味で、主題は平家の栄枯盛衰・無常観、鎌倉時代の軍記物語で琵琶法師が語り伝えた（平曲）。\n\n【ステップ1】\n冒頭の現代語訳を確認する。\n\n【ステップ2】\n琵琶法師が語り伝えたことを確認する。\n\n【答え】\n「祇園精舎の鐘の声、諸行無常の響きあり」=祇園精舎の鐘の音はすべてが移り変わるという無常の響きだ。主題: 平家の栄枯盛衰・無常観。琵琶法師が語り伝えた軍記物語\n\n【確かめ】\n「平曲」という語もあわせて再確認する。\n\n【よくあるまちがい】\n伝承方法を書物での伝承だけだと考えないこと。\n\n【ここが絶対】\n栄枯盛衰と無常観が主題であることを押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_ex_07',
    subject: 'kokugo',
    question: '次の敬語の誤りを訂正せよ。①「お客様が参りました」②「先生はご飯を召し上がっていただきました」',
    answer: '①「参る」は謙譲語→「いらっしゃいました」②「いただく」は謙譲語→「先生はお食事を召し上がりました」',
    explanation:
      '【何を聞かれているか】\n「お客様が参りました」「先生はご飯を召し上がっていただきました」の敬語の誤りを訂正する力が問われている。\n\n【なぜそうなるのか】\n①「参る」は「行く・来る」の謙譲語で自分側に使う言葉なのでお客様の動作には尊敬語「いらっしゃいました」を使う。②「いただく」は謙譲語なので先生の動作には尊敬語「召し上がりました」を使う。\n\n【ステップ1】\n①の「参る」が謙譲語であることを確認する。\n\n【ステップ2】\n②が尊敬語と謙譲語が混ざった二重の誤りであることを確認する。\n\n【答え】\n①「参る」は謙譲語→「いらっしゃいました」②「いただく」は謙譲語→「先生はお食事を召し上がりました」\n\n【確かめ】\n「召し上がっていただく」が二重の誤りであることも再確認する。\n\n【よくあるまちがい】\n謙譲語をお客様や先生の動作に使わないこと。\n\n【ここが絶対】\n動作の主体を確認して敬語を選ぶことを押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_ex_08',
    subject: 'kokugo',
    question: '接続詞の種類を答えよ。①「勉強した。しかし点数が悪かった」②「雨が降った。だから試合が中止」③「彼は優しい。つまり人気者だ」',
    answer: '①逆接②順接③換言・要約',
    explanation:
      '【何を聞かれているか】\n「勉強した。しかし点数が悪かった」「雨が降った。だから試合が中止」「彼は優しい。つまり人気者だ」の接続詞の種類を答える力が問われている。\n\n【なぜそうなるのか】\n①は予想と逆の結果が続くので逆接、②は前が原因で後が結果なので順接、③は前の内容を言いかえてまとめているので換言・要約である。\n\n【ステップ1】\n前後の関係を見て種類を決める。\n\n【ステップ2】\nそれぞれの代表的な接続詞（しかし、だから、つまり）を確認する。\n\n【答え】\n①逆接②順接③換言・要約\n\n【確かめ】\nそれぞれの接続詞のグループも再確認する。\n\n【よくあるまちがい】\n前後の関係を確認せずに種類を決めないこと。\n\n【ここが絶対】\n前後の内容の関係から接続詞の種類を判断することを押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_ex_09',
    subject: 'kokugo',
    question: '「百聞は一見に如かず」「七転び八起き」「石の上にも三年」「一期一会」の意味をそれぞれ答えよ。',
    answer: '百聞: 何度聞くより実際に見る方が確か。七転び: 何度失敗しても諦めない。石の上: 辛くても続ければ成果が出る。一期一会: 一生に一度の出会いを大切に',
    explanation:
      '【何を聞かれているか】\n「百聞は一見に如かず」「七転び八起き」「石の上にも三年」「一期一会」の意味をそれぞれ答える力が問われている。\n\n【なぜそうなるのか】\n①は百回聞くより一度自分の目で見る方が確かだということ、②は何度失敗しても立ち上がりあきらめない心、③は冷たい石でも三年すわり続ければ温まるようにつらくても続ければ実を結ぶこと、④は茶の湯の心得からきた言葉でその出会いは一生に一度と思って大切にすることを表す。\n\n【ステップ1】\nそれぞれのことわざの由来を確認する。\n\n【ステップ2】\n④が茶の湯の心得に由来することを確認する。\n\n【答え】\n百聞: 何度聞くより実際に見る方が確か。七転び: 何度失敗しても諦めない。石の上: 辛くても続ければ成果が出る。一期一会: 一生に一度の出会いを大切に\n\n【確かめ】\nそれぞれのことわざの由来も再確認する。\n\n【よくあるまちがい】\n4つのことわざを混同しないこと。\n\n【ここが絶対】\nそれぞれ異なる教えを表すことを押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'kokugo_ex_10',
    subject: 'kokugo',
    question: '「源氏物語」の書き出しを言い、作者・成立時代・主人公を答えよ。また日本最古の物語とされる作品名も答えよ。',
    answer: '「いづれの御時にか…」。作者: 紫式部・平安時代・光源氏。日本最古の物語: 「竹取物語」（かぐや姫）',
    explanation:
      '【何を聞かれているか】\n「源氏物語」の書き出しを言い、作者・成立時代・主人公を答え、日本最古の物語とされる作品名も答える力が問われている。\n\n【なぜそうなるのか】\n「源氏物語」の書き出しは「いづれの御時にか、女御・更衣あまたさぶらひ給ひける中に…」で、作者は紫式部、成立は平安時代（11世紀初め）、主人公は光源氏である。日本最古の物語は平安時代初期の「竹取物語」（かぐや姫の話）である。\n\n【ステップ1】\n「源氏物語」の書き出し・作者・主人公を確認する。\n\n【ステップ2】\n『源氏物語』の中で「竹取物語」が「物語の出で来はじめの祖」と書かれていることを確認する。\n\n【答え】\n「いづれの御時にか…」。作者: 紫式部・平安時代・光源氏。日本最古の物語: 「竹取物語」（かぐや姫）\n\n【確かめ】\n「竹取物語」がかぐや姫の話であることも再確認する。\n\n【よくあるまちがい】\n「源氏物語」と「竹取物語」を混同しないこと。\n\n【ここが絶対】\n「竹取物語」が日本最古の物語とされることを押さえる。',
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
