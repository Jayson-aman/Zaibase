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
};

export function getMangaScript(id: string): MangaScript | undefined {
  return ALL_MANGA_SCRIPTS[id];
}
