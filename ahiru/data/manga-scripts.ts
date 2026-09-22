// 公式集の討論・探求型マンガのレジストリ。LessonSection.mangaId → MangaScript を解決する。
import type { MangaScript } from './manga-types';
import { mangaScriptsKoushikiK3Souji } from './manga-scripts-koushiki-k3souji';
import { mangaScriptsKoushikiK4En1 } from './manga-scripts-koushiki-k4en1';
import { mangaScriptsKoushikiK5En2 } from './manga-scripts-koushiki-k5en2';
import { mangaScriptsKoushikiK6Sanpei } from './manga-scripts-koushiki-k6sanpei';
import { mangaScriptsKoushikiChugaku } from './manga-scripts-koushiki-chugaku';
import { mangaScriptsKoushikiKoko2 } from './manga-scripts-koushiki-koko2';
import { mangaScriptsTokushuzan } from './manga-scripts-tokushuzan';
import { mangaScriptsWariai } from './manga-scripts-wariai';
import { mangaScriptsZukeiHayasa } from './manga-scripts-zukei-hayasa';
import { mangaScriptsKazuIdou } from './manga-scripts-kazu-idou';
import { mangaScriptsKokoMath1 } from './manga-scripts-koko-math1';
import { mangaScriptsKokoMath2 } from './manga-scripts-koko-math2';
import { mangaScriptsChu2_1 } from './manga-scripts-chu2-1';
import { mangaScriptsChu23_2 } from './manga-scripts-chu23-2';
import { mangaScriptsChu3_1 } from './manga-scripts-chu3-1';
import { mangaScriptsKokoRikaKagaku1 } from './manga-scripts-koko-rika-kagaku1';
import { mangaScriptsKokoShakaiKomin1 } from './manga-scripts-koko-shakai-komin1';
import { mangaScriptsKokoKokugo1 } from './manga-scripts-koko-kokugo1';
import { mangaScriptsKokoEigo1 } from './manga-scripts-koko-eigo1';
import { mangaScriptsSansuChugaku1 } from './manga-scripts-sansu-chugaku1';
import { mangaScriptsRikaChugaku1 } from './manga-scripts-rika-chugaku1';
import { mangaScriptsShakaiChugaku1 } from './manga-scripts-shakai-chugaku1';
import { mangaScriptsKokugoChugaku1 } from './manga-scripts-kokugo-chugaku1';
import { mangaScriptsEigoChugaku1 } from './manga-scripts-eigo-chugaku1';
import { mangaScriptsKokoRikaButsuriSeibutsu1 } from './manga-scripts-koko-rika-butsuri-seibutsu1';
import { mangaScriptsKokoShakaiChirishi1 } from './manga-scripts-koko-shakai-chirishi1';
import { mangaScriptsSansuChugaku2 } from './manga-scripts-sansu-chugaku2';
import { mangaScriptsRikaChugaku2 } from './manga-scripts-rika-chugaku2';
import { mangaScriptsShakaiChugaku2 } from './manga-scripts-shakai-chugaku2';
import { mangaScriptsKokugoChugaku2 } from './manga-scripts-kokugo-chugaku2';
import { mangaScriptsEigoChugaku2 } from './manga-scripts-eigo-chugaku2';
import { mangaScriptsKokoMath3 } from './manga-scripts-koko-math3';
import { mangaScriptsKokoRikaButsuriSeibutsu2 } from './manga-scripts-koko-rika-butsuri-seibutsu2';
import { mangaScriptsKokoShakaiChirishi2 } from './manga-scripts-koko-shakai-chirishi2';
import { mangaScriptsKokoKokugo2 } from './manga-scripts-koko-kokugo2';
import { mangaScriptsKokoEigo2 } from './manga-scripts-koko-eigo2';
import { mangaScriptsKokoMath4 } from './manga-scripts-koko-math4';
import { mangaScriptsKokoMath5 } from './manga-scripts-koko-math5';
import { mangaScriptsKokoMath6 } from './manga-scripts-koko-math6';
import { mangaScriptsKokoMath7 } from './manga-scripts-koko-math7';
import { mangaScriptsKokoMath8 } from './manga-scripts-koko-math8';
import { mangaScriptsKokoShakaiKomin2 } from './manga-scripts-koko-shakai-komin2';
import { mangaScriptsKokoRikaKagaku2 } from './manga-scripts-koko-rika-kagaku2';
import { mangaScriptsSansuChugaku3 } from './manga-scripts-sansu-chugaku3';
import { mangaScriptsRikaChugaku3 } from './manga-scripts-rika-chugaku3';
import { mangaScriptsShakaiChugaku3 } from './manga-scripts-shakai-chugaku3';
import { mangaScriptsKokugoChugaku3 } from './manga-scripts-kokugo-chugaku3';
import { mangaScriptsEigoChugaku3 } from './manga-scripts-eigo-chugaku3';
import { mangaScriptsKokoKokugo3 } from './manga-scripts-koko-kokugo3';
import { mangaScriptsKokoKokugo4 } from './manga-scripts-koko-kokugo4';
import { mangaScriptsKokoKokugo5 } from './manga-scripts-koko-kokugo5';
import { mangaScriptsKokoKokugo6 } from './manga-scripts-koko-kokugo6';
import { mangaScriptsKokoKokugo7 } from './manga-scripts-koko-kokugo7';
import { mangaScriptsKokoKokugo8 } from './manga-scripts-koko-kokugo8';
import { mangaScriptsKokoEigo3 } from './manga-scripts-koko-eigo3';
import { mangaScriptsKokoEigo4 } from './manga-scripts-koko-eigo4';
import { mangaScriptsKokoEigo5 } from './manga-scripts-koko-eigo5';
import { mangaScriptsKokoEigo6 } from './manga-scripts-koko-eigo6';
import { mangaScriptsKokoEigo7 } from './manga-scripts-koko-eigo7';
import { mangaScriptsKokoEigo8 } from './manga-scripts-koko-eigo8';
import { mangaScriptsKokoRikaButsuriSeibutsu3 } from './manga-scripts-koko-rika-butsuri-seibutsu3';
import { mangaScriptsKokoRikaButsuriSeibutsu4 } from './manga-scripts-koko-rika-butsuri-seibutsu4';
import { mangaScriptsKokoRikaButsuriSeibutsu5 } from './manga-scripts-koko-rika-butsuri-seibutsu5';
import { mangaScriptsKokoRikaButsuriSeibutsu6 } from './manga-scripts-koko-rika-butsuri-seibutsu6';
import { mangaScriptsKokoRikaButsuriSeibutsu7 } from './manga-scripts-koko-rika-butsuri-seibutsu7';
import { mangaScriptsKokoRikaButsuriSeibutsu8 } from './manga-scripts-koko-rika-butsuri-seibutsu8';
import { mangaScriptsKokoShakaiChirishi3 } from './manga-scripts-koko-shakai-chirishi3';
import { mangaScriptsKokoShakaiChirishi4 } from './manga-scripts-koko-shakai-chirishi4';
import { mangaScriptsKokoShakaiChirishi5 } from './manga-scripts-koko-shakai-chirishi5';
import { mangaScriptsKokoShakaiChirishi6 } from './manga-scripts-koko-shakai-chirishi6';
import { mangaScriptsKokoShakaiChirishi7 } from './manga-scripts-koko-shakai-chirishi7';
import { mangaScriptsKokoShakaiChirishi8 } from './manga-scripts-koko-shakai-chirishi8';
import { mangaScriptsKokoShakaiKomin3 } from './manga-scripts-koko-shakai-komin3';
import { mangaScriptsKokoShakaiKomin4 } from './manga-scripts-koko-shakai-komin4';
import { mangaScriptsKokoShakaiKomin5 } from './manga-scripts-koko-shakai-komin5';
import { mangaScriptsKokoShakaiKomin6 } from './manga-scripts-koko-shakai-komin6';
import { mangaScriptsKokoShakaiKomin7 } from './manga-scripts-koko-shakai-komin7';
import { mangaScriptsKokoShakaiKomin8 } from './manga-scripts-koko-shakai-komin8';
import { mangaScriptsKokoRikaKagaku3 } from './manga-scripts-koko-rika-kagaku3';
import { mangaScriptsKokoRikaKagaku4 } from './manga-scripts-koko-rika-kagaku4';
import { mangaScriptsKokoRikaKagaku5 } from './manga-scripts-koko-rika-kagaku5';
import { mangaScriptsKokoRikaKagaku6 } from './manga-scripts-koko-rika-kagaku6';
import { mangaScriptsKokoRikaKagaku7 } from './manga-scripts-koko-rika-kagaku7';
import { mangaScriptsKokoRikaKagaku8 } from './manga-scripts-koko-rika-kagaku8';
import { mangaScriptsSansuChugaku4 } from './manga-scripts-sansu-chugaku4';
import { mangaScriptsSansuChugaku5 } from './manga-scripts-sansu-chugaku5';
import { mangaScriptsSansuChugaku6 } from './manga-scripts-sansu-chugaku6';
import { mangaScriptsSansuChugaku7 } from './manga-scripts-sansu-chugaku7';
import { mangaScriptsSansuChugaku8 } from './manga-scripts-sansu-chugaku8';
import { mangaScriptsSansuChugaku9 } from './manga-scripts-sansu-chugaku9';
import { mangaScriptsRikaChugaku4 } from './manga-scripts-rika-chugaku4';
import { mangaScriptsRikaChugaku5 } from './manga-scripts-rika-chugaku5';
import { mangaScriptsRikaChugaku6 } from './manga-scripts-rika-chugaku6';
import { mangaScriptsRikaChugaku7 } from './manga-scripts-rika-chugaku7';
import { mangaScriptsRikaChugaku8 } from './manga-scripts-rika-chugaku8';
import { mangaScriptsRikaChugaku9 } from './manga-scripts-rika-chugaku9';
import { mangaScriptsShakaiChugaku4 } from './manga-scripts-shakai-chugaku4';
import { mangaScriptsShakaiChugaku5 } from './manga-scripts-shakai-chugaku5';
import { mangaScriptsShakaiChugaku6 } from './manga-scripts-shakai-chugaku6';
import { mangaScriptsShakaiChugaku7 } from './manga-scripts-shakai-chugaku7';
import { mangaScriptsShakaiChugaku8 } from './manga-scripts-shakai-chugaku8';
import { mangaScriptsShakaiChugaku9 } from './manga-scripts-shakai-chugaku9';
import { mangaScriptsKokugoChugaku4 } from './manga-scripts-kokugo-chugaku4';
import { mangaScriptsKokugoChugaku5 } from './manga-scripts-kokugo-chugaku5';
import { mangaScriptsKokugoChugaku6 } from './manga-scripts-kokugo-chugaku6';
import { mangaScriptsKokugoChugaku7 } from './manga-scripts-kokugo-chugaku7';
import { mangaScriptsKokugoChugaku8 } from './manga-scripts-kokugo-chugaku8';
import { mangaScriptsKokugoChugaku9 } from './manga-scripts-kokugo-chugaku9';
import { mangaScriptsEigoChugaku4 } from './manga-scripts-eigo-chugaku4';
import { mangaScriptsEigoChugaku5 } from './manga-scripts-eigo-chugaku5';
import { mangaScriptsEigoChugaku6 } from './manga-scripts-eigo-chugaku6';
import { mangaScriptsEigoChugaku7 } from './manga-scripts-eigo-chugaku7';
import { mangaScriptsEigoChugaku8 } from './manga-scripts-eigo-chugaku8';
import { mangaScriptsEigoChugaku9 } from './manga-scripts-eigo-chugaku9';

const ALL_MANGA_SCRIPTS: Record<string, MangaScript> = {
  ...mangaScriptsKoushikiK3Souji,
  ...mangaScriptsKoushikiK4En1,
  ...mangaScriptsKoushikiK5En2,
  ...mangaScriptsKoushikiK6Sanpei,
  ...mangaScriptsKoushikiChugaku,
  ...mangaScriptsKoushikiKoko2,
  ...mangaScriptsTokushuzan,
  ...mangaScriptsWariai,
  ...mangaScriptsZukeiHayasa,
  ...mangaScriptsKazuIdou,
  ...mangaScriptsKokoMath1,
  ...mangaScriptsKokoMath2,
  ...mangaScriptsChu2_1,
  ...mangaScriptsChu23_2,
  ...mangaScriptsChu3_1,
  ...mangaScriptsKokoRikaKagaku1,
  ...mangaScriptsKokoShakaiKomin1,
  ...mangaScriptsKokoKokugo1,
  ...mangaScriptsKokoEigo1,
  ...mangaScriptsSansuChugaku1,
  ...mangaScriptsRikaChugaku1,
  ...mangaScriptsShakaiChugaku1,
  ...mangaScriptsKokugoChugaku1,
  ...mangaScriptsEigoChugaku1,
  ...mangaScriptsKokoRikaButsuriSeibutsu1,
  ...mangaScriptsKokoShakaiChirishi1,
  ...mangaScriptsSansuChugaku2,
  ...mangaScriptsRikaChugaku2,
  ...mangaScriptsShakaiChugaku2,
  ...mangaScriptsKokugoChugaku2,
  ...mangaScriptsEigoChugaku2,
  ...mangaScriptsKokoMath3,
  ...mangaScriptsKokoRikaButsuriSeibutsu2,
  ...mangaScriptsKokoShakaiChirishi2,
  ...mangaScriptsKokoKokugo2,
  ...mangaScriptsKokoEigo2,
  ...mangaScriptsKokoMath4,
  ...mangaScriptsKokoMath5,
  ...mangaScriptsKokoMath6,
  ...mangaScriptsKokoMath7,
  ...mangaScriptsKokoMath8,
  ...mangaScriptsKokoShakaiKomin2,
  ...mangaScriptsKokoRikaKagaku2,
  ...mangaScriptsSansuChugaku3,
  ...mangaScriptsRikaChugaku3,
  ...mangaScriptsShakaiChugaku3,
  ...mangaScriptsKokugoChugaku3,
  ...mangaScriptsEigoChugaku3,
  ...mangaScriptsKokoKokugo3,
  ...mangaScriptsKokoKokugo4,
  ...mangaScriptsKokoKokugo5,
  ...mangaScriptsKokoKokugo6,
  ...mangaScriptsKokoKokugo7,
  ...mangaScriptsKokoKokugo8,
  ...mangaScriptsKokoEigo3,
  ...mangaScriptsKokoEigo4,
  ...mangaScriptsKokoEigo5,
  ...mangaScriptsKokoEigo6,
  ...mangaScriptsKokoEigo7,
  ...mangaScriptsKokoEigo8,
  ...mangaScriptsKokoRikaButsuriSeibutsu3,
  ...mangaScriptsKokoRikaButsuriSeibutsu4,
  ...mangaScriptsKokoRikaButsuriSeibutsu5,
  ...mangaScriptsKokoRikaButsuriSeibutsu6,
  ...mangaScriptsKokoRikaButsuriSeibutsu7,
  ...mangaScriptsKokoRikaButsuriSeibutsu8,
  ...mangaScriptsKokoShakaiChirishi3,
  ...mangaScriptsKokoShakaiChirishi4,
  ...mangaScriptsKokoShakaiChirishi5,
  ...mangaScriptsKokoShakaiChirishi6,
  ...mangaScriptsKokoShakaiChirishi7,
  ...mangaScriptsKokoShakaiChirishi8,
  ...mangaScriptsKokoShakaiKomin3,
  ...mangaScriptsKokoShakaiKomin4,
  ...mangaScriptsKokoShakaiKomin5,
  ...mangaScriptsKokoShakaiKomin6,
  ...mangaScriptsKokoShakaiKomin7,
  ...mangaScriptsKokoShakaiKomin8,
  ...mangaScriptsKokoRikaKagaku3,
  ...mangaScriptsKokoRikaKagaku4,
  ...mangaScriptsKokoRikaKagaku5,
  ...mangaScriptsKokoRikaKagaku6,
  ...mangaScriptsKokoRikaKagaku7,
  ...mangaScriptsKokoRikaKagaku8,
  ...mangaScriptsSansuChugaku4,
  ...mangaScriptsSansuChugaku5,
  ...mangaScriptsSansuChugaku6,
  ...mangaScriptsSansuChugaku7,
  ...mangaScriptsSansuChugaku8,
  ...mangaScriptsSansuChugaku9,
  ...mangaScriptsRikaChugaku4,
  ...mangaScriptsRikaChugaku5,
  ...mangaScriptsRikaChugaku6,
  ...mangaScriptsRikaChugaku7,
  ...mangaScriptsRikaChugaku8,
  ...mangaScriptsRikaChugaku9,
  ...mangaScriptsShakaiChugaku4,
  ...mangaScriptsShakaiChugaku5,
  ...mangaScriptsShakaiChugaku6,
  ...mangaScriptsShakaiChugaku7,
  ...mangaScriptsShakaiChugaku8,
  ...mangaScriptsShakaiChugaku9,
  ...mangaScriptsKokugoChugaku4,
  ...mangaScriptsKokugoChugaku5,
  ...mangaScriptsKokugoChugaku6,
  ...mangaScriptsKokugoChugaku7,
  ...mangaScriptsKokugoChugaku8,
  ...mangaScriptsKokugoChugaku9,
  ...mangaScriptsEigoChugaku4,
  ...mangaScriptsEigoChugaku5,
  ...mangaScriptsEigoChugaku6,
  ...mangaScriptsEigoChugaku7,
  ...mangaScriptsEigoChugaku8,
  ...mangaScriptsEigoChugaku9,
};

export function getMangaScript(id: string): MangaScript | undefined {
  return ALL_MANGA_SCRIPTS[id];
}
