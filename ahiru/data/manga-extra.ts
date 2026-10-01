// 教科書単元に「あとから」足すマンガ解説（討論・探求型）の入口。単元ファイルを書きかえずにマンガだけ足せる。
// 各バッチのファイル（manga-xm-*.ts）は、次の2つを export する：
//   XM_..._SCRIPTS  : Record<mangaId, MangaScript>
//   XM_..._SECTIONS : Record<'単元id#節の番号(元の単元ファイルの並びで0始まり)', mangaId>
// scripts は manga-scripts.ts のレジストリに加え、sections は lessons.ts が節に mangaId として取りつける。
// 節に元から mangaId がある場合は、元のものを優先する。
import type { MangaScript } from './manga-types';

export const EXTRA_MANGA_SCRIPTS: Record<string, MangaScript> = {
};

export const EXTRA_MANGA_SECTIONS: Record<string, string> = {
};
