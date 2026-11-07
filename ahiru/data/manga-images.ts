// マンガ解説のコマに添える、AI（Google Gemini）で作ったイラストの対応表。
// マンガID → コマの番号（0始まり）→ 画像ファイル名。画像は public/manga/ に置く（webp・512px）。
// 台本（data/manga-scripts*.ts）は変えない。画像が無いコマは、これまでどおり文字だけで出る。
// このファイルは scripts/gen-manga-images.mjs が、作業用の manifest から書き出す。手で直さない。
export const MANGA_IMAGES: Record<string, Record<number, string>> = {
  "rika_01_shokubutsu_manga": { 1: "rika_01_shokubutsu_manga_1.webp", 3: "rika_01_shokubutsu_manga_3.webp", 6: "rika_01_shokubutsu_manga_6.webp" },
  "rika_04_tenmon_manga": { 2: "rika_04_tenmon_manga_2.webp", 5: "rika_04_tenmon_manga_5.webp", 6: "rika_04_tenmon_manga_6.webp" },
  "rika_07_hikari_oto_netsu_manga": { 0: "rika_07_hikari_oto_netsu_manga_0.webp", 5: "rika_07_hikari_oto_netsu_manga_5.webp", 7: "rika_07_hikari_oto_netsu_manga_7.webp" },
  "rika_10_jishaku_denryu_manga": { 0: "rika_10_jishaku_denryu_manga_0.webp", 3: "rika_10_jishaku_denryu_manga_3.webp", 5: "rika_10_jishaku_denryu_manga_5.webp" },
  "rika_11_tenki_kisho_manga": { 2: "rika_11_tenki_kisho_manga_2.webp", 3: "rika_11_tenki_kisho_manga_3.webp", 5: "rika_11_tenki_kisho_manga_5.webp" },
  "rika_12_mono_no_moekata_manga": { 0: "rika_12_mono_no_moekata_manga_0.webp", 1: "rika_12_mono_no_moekata_manga_1.webp", 3: "rika_12_mono_no_moekata_manga_3.webp" },
  "rika_15_konchu_kisetsu_manga": { 1: "rika_15_konchu_kisetsu_manga_1.webp", 3: "rika_15_konchu_kisetsu_manga_3.webp", 7: "rika_15_konchu_kisetsu_manga_7.webp" },
  "rika_16_hana_no_tsukuri_manga": { 1: "rika_16_hana_no_tsukuri_manga_1.webp", 4: "rika_16_hana_no_tsukuri_manga_4.webp", 7: "rika_16_hana_no_tsukuri_manga_7.webp" },
  "rika_18_ryusui_chisou_manga": { 0: "rika_18_ryusui_chisou_manga_0.webp", 3: "rika_18_ryusui_chisou_manga_3.webp", 7: "rika_18_ryusui_chisou_manga_7.webp" },
  "rika_22_kazan_koubutsu_manga": { 3: "rika_22_kazan_koubutsu_manga_3.webp", 5: "rika_22_kazan_koubutsu_manga_5.webp", 7: "rika_22_kazan_koubutsu_manga_7.webp" },
  "shakai_01_nihonchiri_manga": { 1: "shakai_01_nihonchiri_manga_1.webp", 4: "shakai_01_nihonchiri_manga_4.webp", 6: "shakai_01_nihonchiri_manga_6.webp", 7: "shakai_01_nihonchiri_manga_7.webp" },
  "shakai_03_nihonshi_manga": { 2: "shakai_03_nihonshi_manga_2.webp", 4: "shakai_03_nihonshi_manga_4.webp", 7: "shakai_03_nihonshi_manga_7.webp" },
  "shakai_04_kinsei_manga": { 0: "shakai_04_kinsei_manga_0.webp", 2: "shakai_04_kinsei_manga_2.webp", 6: "shakai_04_kinsei_manga_6.webp" },
  "shakai_05_seiji_manga": { 0: "shakai_05_seiji_manga_0.webp", 2: "shakai_05_seiji_manga_2.webp", 5: "shakai_05_seiji_manga_5.webp", 6: "shakai_05_seiji_manga_6.webp" },
  "shakai_09_bunkashi_manga1": { 2: "shakai_09_bunkashi_manga1_2.webp", 4: "shakai_09_bunkashi_manga1_4.webp", 6: "shakai_09_bunkashi_manga1_6.webp" },
  "shakai_12_norinsuisan_xm": { 3: "shakai_12_norinsuisan_xm_3.webp", 5: "shakai_12_norinsuisan_xm_5.webp", 8: "shakai_12_norinsuisan_xm_8.webp", 9: "shakai_12_norinsuisan_xm_9.webp" },
  "shakai_13_kougyo_boueki_xm": { 4: "shakai_13_kougyo_boueki_xm_4.webp", 7: "shakai_13_kougyo_boueki_xm_7.webp", 8: "shakai_13_kougyo_boueki_xm_8.webp", 9: "shakai_13_kougyo_boueki_xm_9.webp" },
  "shakai_15_sanken_hatten_xm": { 0: "shakai_15_sanken_hatten_xm_0.webp", 3: "shakai_15_sanken_hatten_xm_3.webp", 6: "shakai_15_sanken_hatten_xm_6.webp", 7: "shakai_15_sanken_hatten_xm_7.webp" },
  "shakai_19_sekaiisan_dentou_xm": { 0: "shakai_19_sekaiisan_dentou_xm_0.webp", 1: "shakai_19_sekaiisan_dentou_xm_1.webp", 4: "shakai_19_sekaiisan_dentou_xm_4.webp" },
  "shakai_20_saigai_bousai_manga": { 1: "shakai_20_saigai_bousai_manga_1.webp", 4: "shakai_20_saigai_bousai_manga_4.webp", 6: "shakai_20_saigai_bousai_manga_6.webp" },
};

/** 画像の置き場（Web は同じサイトの /manga/、アプリは本番サイトから取る） */
export function mangaImageUrl(file: string, isWeb: boolean): string {
  return isWeb ? `/manga/${file}` : `https://exam.zaibase.group/manga/${file}`;
}
