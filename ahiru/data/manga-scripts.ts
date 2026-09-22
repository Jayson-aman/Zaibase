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
import { mangaScriptsKokoShakaiKomin2 } from './manga-scripts-koko-shakai-komin2';
import { mangaScriptsKokoRikaKagaku2 } from './manga-scripts-koko-rika-kagaku2';
import { mangaScriptsSansuChugaku3 } from './manga-scripts-sansu-chugaku3';
import { mangaScriptsRikaChugaku3 } from './manga-scripts-rika-chugaku3';
import { mangaScriptsShakaiChugaku3 } from './manga-scripts-shakai-chugaku3';
import { mangaScriptsKokugoChugaku3 } from './manga-scripts-kokugo-chugaku3';
import { mangaScriptsEigoChugaku3 } from './manga-scripts-eigo-chugaku3';
import { mangaScriptsKokoKokugo3 } from './manga-scripts-koko-kokugo3';
import { mangaScriptsKokoEigo3 } from './manga-scripts-koko-eigo3';
import { mangaScriptsKokoRikaButsuriSeibutsu3 } from './manga-scripts-koko-rika-butsuri-seibutsu3';
import { mangaScriptsKokoShakaiChirishi3 } from './manga-scripts-koko-shakai-chirishi3';
import { mangaScriptsKokoShakaiKomin3 } from './manga-scripts-koko-shakai-komin3';
import { mangaScriptsKokoRikaKagaku3 } from './manga-scripts-koko-rika-kagaku3';
import { mangaScriptsSansuChugaku4 } from './manga-scripts-sansu-chugaku4';
import { mangaScriptsRikaChugaku4 } from './manga-scripts-rika-chugaku4';

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
  ...mangaScriptsKokoShakaiKomin2,
  ...mangaScriptsKokoRikaKagaku2,
  ...mangaScriptsSansuChugaku3,
  ...mangaScriptsRikaChugaku3,
  ...mangaScriptsShakaiChugaku3,
  ...mangaScriptsKokugoChugaku3,
  ...mangaScriptsEigoChugaku3,
  ...mangaScriptsKokoKokugo3,
  ...mangaScriptsKokoEigo3,
  ...mangaScriptsKokoRikaButsuriSeibutsu3,
  ...mangaScriptsKokoShakaiChirishi3,
  ...mangaScriptsKokoShakaiKomin3,
  ...mangaScriptsKokoRikaKagaku3,
  ...mangaScriptsSansuChugaku4,
  ...mangaScriptsRikaChugaku4,
};

export function getMangaScript(id: string): MangaScript | undefined {
  return ALL_MANGA_SCRIPTS[id];
}
