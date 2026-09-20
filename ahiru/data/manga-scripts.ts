// 公式集の討論・探求型マンガのレジストリ。LessonSection.mangaId → MangaScript を解決する。
import type { MangaScript } from './manga-types';
import { mangaScriptsKoushikiK3Souji } from './manga-scripts-koushiki-k3souji';
import { mangaScriptsKoushikiK4En1 } from './manga-scripts-koushiki-k4en1';
import { mangaScriptsKoushikiK5En2 } from './manga-scripts-koushiki-k5en2';
import { mangaScriptsKoushikiK6Sanpei } from './manga-scripts-koushiki-k6sanpei';
import { mangaScriptsKoushikiChugaku } from './manga-scripts-koushiki-chugaku';
import { mangaScriptsKoushikiKoko2 } from './manga-scripts-koushiki-koko2';
import { mangaScriptsTokushuzan } from './manga-scripts-tokushuzan';

const ALL_MANGA_SCRIPTS: Record<string, MangaScript> = {
  ...mangaScriptsKoushikiK3Souji,
  ...mangaScriptsKoushikiK4En1,
  ...mangaScriptsKoushikiK5En2,
  ...mangaScriptsKoushikiK6Sanpei,
  ...mangaScriptsKoushikiChugaku,
  ...mangaScriptsKoushikiKoko2,
  ...mangaScriptsTokushuzan,
};

export function getMangaScript(id: string): MangaScript | undefined {
  return ALL_MANGA_SCRIPTS[id];
}
