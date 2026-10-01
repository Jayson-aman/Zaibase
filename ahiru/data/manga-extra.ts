// 教科書単元に「あとから」足すマンガ解説（討論・探求型）の入口。単元ファイルを書きかえずにマンガだけ足せる。
// 各バッチのファイル（manga-xm-*.ts）は、次の2つを export する：
//   XM_..._SCRIPTS  : Record<mangaId, MangaScript>
//   XM_..._SECTIONS : Record<'単元id#節の番号(元の単元ファイルの並びで0始まり)', mangaId>
// scripts は manga-scripts.ts のレジストリに加え、sections は lessons.ts が節に mangaId として取りつける。
// 節に元から mangaId がある場合は、元のものを優先する。
import type { MangaScript } from './manga-types';
import { XM_CSX_SCRIPTS, XM_CSX_SECTIONS } from './manga-xm-csx';
import { XM_CSY_SCRIPTS, XM_CSY_SECTIONS } from './manga-xm-csy';
import { XM_CKX_SCRIPTS, XM_CKX_SECTIONS } from './manga-xm-ckx';
import { XM_CKY_SCRIPTS, XM_CKY_SECTIONS } from './manga-xm-cky';
import { XM_CRX_SCRIPTS, XM_CRX_SECTIONS } from './manga-xm-crx';
import { XM_CRY_SCRIPTS, XM_CRY_SECTIONS } from './manga-xm-cry';
import { XM_CHX_SCRIPTS, XM_CHX_SECTIONS } from './manga-xm-chx';
import { XM_CHY_SCRIPTS, XM_CHY_SECTIONS } from './manga-xm-chy';
import { XM_CEX_SCRIPTS, XM_CEX_SECTIONS } from './manga-xm-cex';
import { XM_CEY_SCRIPTS, XM_CEY_SECTIONS } from './manga-xm-cey';
import { XM_KSX_SCRIPTS, XM_KSX_SECTIONS } from './manga-xm-ksx';
import { XM_KSY_SCRIPTS, XM_KSY_SECTIONS } from './manga-xm-ksy';
import { XM_KRX_SCRIPTS, XM_KRX_SECTIONS } from './manga-xm-krx';
import { XM_KRY_SCRIPTS, XM_KRY_SECTIONS } from './manga-xm-kry';
import { XM_KKX_SCRIPTS, XM_KKX_SECTIONS } from './manga-xm-kkx';
import { XM_KKY_SCRIPTS, XM_KKY_SECTIONS } from './manga-xm-kky';
import { XM_KEX_SCRIPTS, XM_KEX_SECTIONS } from './manga-xm-kex';
import { XM_KEY_SCRIPTS, XM_KEY_SECTIONS } from './manga-xm-key';
import { XM_KHX_SCRIPTS, XM_KHX_SECTIONS } from './manga-xm-khx';
import { XM_KHY_SCRIPTS, XM_KHY_SECTIONS } from './manga-xm-khy';

export const EXTRA_MANGA_SCRIPTS: Record<string, MangaScript> = {
  ...XM_CSX_SCRIPTS,
  ...XM_CSY_SCRIPTS,
  ...XM_CKX_SCRIPTS,
  ...XM_CKY_SCRIPTS,
  ...XM_CRX_SCRIPTS,
  ...XM_CRY_SCRIPTS,
  ...XM_CHX_SCRIPTS,
  ...XM_CHY_SCRIPTS,
  ...XM_CEX_SCRIPTS,
  ...XM_CEY_SCRIPTS,
  ...XM_KSX_SCRIPTS,
  ...XM_KSY_SCRIPTS,
  ...XM_KRX_SCRIPTS,
  ...XM_KRY_SCRIPTS,
  ...XM_KKX_SCRIPTS,
  ...XM_KKY_SCRIPTS,
  ...XM_KEX_SCRIPTS,
  ...XM_KEY_SCRIPTS,
  ...XM_KHX_SCRIPTS,
  ...XM_KHY_SCRIPTS,
};

export const EXTRA_MANGA_SECTIONS: Record<string, string> = {
  ...XM_CSX_SECTIONS,
  ...XM_CSY_SECTIONS,
  ...XM_CKX_SECTIONS,
  ...XM_CKY_SECTIONS,
  ...XM_CRX_SECTIONS,
  ...XM_CRY_SECTIONS,
  ...XM_CHX_SECTIONS,
  ...XM_CHY_SECTIONS,
  ...XM_CEX_SECTIONS,
  ...XM_CEY_SECTIONS,
  ...XM_KSX_SECTIONS,
  ...XM_KSY_SECTIONS,
  ...XM_KRX_SECTIONS,
  ...XM_KRY_SECTIONS,
  ...XM_KKX_SECTIONS,
  ...XM_KKY_SECTIONS,
  ...XM_KEX_SECTIONS,
  ...XM_KEY_SECTIONS,
  ...XM_KHX_SECTIONS,
  ...XM_KHY_SECTIONS,
};
