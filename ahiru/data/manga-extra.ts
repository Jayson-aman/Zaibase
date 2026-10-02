// 教科書単元に「あとから」足すマンガ解説（討論・探求型）の入口。単元ファイルを書きかえずにマンガだけ足せる。
// 各バッチのファイル（manga-xm-*.ts）は、次の2つを export する：
//   XM_..._SCRIPTS  : Record<mangaId, MangaScript>
//   XM_..._SECTIONS : Record<'単元id#節の番号(元の単元ファイルの並びで0始まり)', mangaId>
// scripts は manga-scripts.ts のレジストリに加え、sections は lessons.ts が節に mangaId として取りつける。
// 節に元から mangaId がある場合は、元のものを優先する。
import type { MangaScript } from './manga-types';
import { XM_CE03_SCRIPTS, XM_CE03_SECTIONS } from './manga-xm-ce03';
import { XM_CE04_SCRIPTS, XM_CE04_SECTIONS } from './manga-xm-ce04';
import { XM_CE05_SCRIPTS, XM_CE05_SECTIONS } from './manga-xm-ce05';
import { XM_CE06_SCRIPTS, XM_CE06_SECTIONS } from './manga-xm-ce06';
import { XM_CE07_SCRIPTS, XM_CE07_SECTIONS } from './manga-xm-ce07';
import { XM_CE08_SCRIPTS, XM_CE08_SECTIONS } from './manga-xm-ce08';
import { XM_CE09_SCRIPTS, XM_CE09_SECTIONS } from './manga-xm-ce09';
import { XM_CE10_SCRIPTS, XM_CE10_SECTIONS } from './manga-xm-ce10';
import { XM_CE11_SCRIPTS, XM_CE11_SECTIONS } from './manga-xm-ce11';
import { XM_CE12_SCRIPTS, XM_CE12_SECTIONS } from './manga-xm-ce12';
import { XM_CEX_SCRIPTS, XM_CEX_SECTIONS } from './manga-xm-cex';
import { XM_CEY_SCRIPTS, XM_CEY_SECTIONS } from './manga-xm-cey';
import { XM_CH03_SCRIPTS, XM_CH03_SECTIONS } from './manga-xm-ch03';
import { XM_CH04_SCRIPTS, XM_CH04_SECTIONS } from './manga-xm-ch04';
import { XM_CH05_SCRIPTS, XM_CH05_SECTIONS } from './manga-xm-ch05';
import { XM_CH06_SCRIPTS, XM_CH06_SECTIONS } from './manga-xm-ch06';
import { XM_CH07_SCRIPTS, XM_CH07_SECTIONS } from './manga-xm-ch07';
import { XM_CH08_SCRIPTS, XM_CH08_SECTIONS } from './manga-xm-ch08';
import { XM_CH09_SCRIPTS, XM_CH09_SECTIONS } from './manga-xm-ch09';
import { XM_CH10_SCRIPTS, XM_CH10_SECTIONS } from './manga-xm-ch10';
import { XM_CH12_SCRIPTS, XM_CH12_SECTIONS } from './manga-xm-ch12';
import { XM_CHX_SCRIPTS, XM_CHX_SECTIONS } from './manga-xm-chx';
import { XM_CHY_SCRIPTS, XM_CHY_SECTIONS } from './manga-xm-chy';
import { XM_CK03_SCRIPTS, XM_CK03_SECTIONS } from './manga-xm-ck03';
import { XM_CK04_SCRIPTS, XM_CK04_SECTIONS } from './manga-xm-ck04';
import { XM_CK05_SCRIPTS, XM_CK05_SECTIONS } from './manga-xm-ck05';
import { XM_CK06_SCRIPTS, XM_CK06_SECTIONS } from './manga-xm-ck06';
import { XM_CK07_SCRIPTS, XM_CK07_SECTIONS } from './manga-xm-ck07';
import { XM_CK08_SCRIPTS, XM_CK08_SECTIONS } from './manga-xm-ck08';
import { XM_CK09_SCRIPTS, XM_CK09_SECTIONS } from './manga-xm-ck09';
import { XM_CK10_SCRIPTS, XM_CK10_SECTIONS } from './manga-xm-ck10';
import { XM_CK11_SCRIPTS, XM_CK11_SECTIONS } from './manga-xm-ck11';
import { XM_CK12_SCRIPTS, XM_CK12_SECTIONS } from './manga-xm-ck12';
import { XM_CK13_SCRIPTS, XM_CK13_SECTIONS } from './manga-xm-ck13';
import { XM_CKX_SCRIPTS, XM_CKX_SECTIONS } from './manga-xm-ckx';
import { XM_CKY_SCRIPTS, XM_CKY_SECTIONS } from './manga-xm-cky';
import { XM_CR03_SCRIPTS, XM_CR03_SECTIONS } from './manga-xm-cr03';
import { XM_CR04_SCRIPTS, XM_CR04_SECTIONS } from './manga-xm-cr04';
import { XM_CR05_SCRIPTS, XM_CR05_SECTIONS } from './manga-xm-cr05';
import { XM_CR06_SCRIPTS, XM_CR06_SECTIONS } from './manga-xm-cr06';
import { XM_CR07_SCRIPTS, XM_CR07_SECTIONS } from './manga-xm-cr07';
import { XM_CR08_SCRIPTS, XM_CR08_SECTIONS } from './manga-xm-cr08';
import { XM_CR09_SCRIPTS, XM_CR09_SECTIONS } from './manga-xm-cr09';
import { XM_CR10_SCRIPTS, XM_CR10_SECTIONS } from './manga-xm-cr10';
import { XM_CR11_SCRIPTS, XM_CR11_SECTIONS } from './manga-xm-cr11';
import { XM_CR12_SCRIPTS, XM_CR12_SECTIONS } from './manga-xm-cr12';
import { XM_CRX_SCRIPTS, XM_CRX_SECTIONS } from './manga-xm-crx';
import { XM_CRY_SCRIPTS, XM_CRY_SECTIONS } from './manga-xm-cry';
import { XM_CS03_SCRIPTS, XM_CS03_SECTIONS } from './manga-xm-cs03';
import { XM_CS04_SCRIPTS, XM_CS04_SECTIONS } from './manga-xm-cs04';
import { XM_CS05_SCRIPTS, XM_CS05_SECTIONS } from './manga-xm-cs05';
import { XM_CS06_SCRIPTS, XM_CS06_SECTIONS } from './manga-xm-cs06';
import { XM_CS07_SCRIPTS, XM_CS07_SECTIONS } from './manga-xm-cs07';
import { XM_CS08_SCRIPTS, XM_CS08_SECTIONS } from './manga-xm-cs08';
import { XM_CS09_SCRIPTS, XM_CS09_SECTIONS } from './manga-xm-cs09';
import { XM_CS10_SCRIPTS, XM_CS10_SECTIONS } from './manga-xm-cs10';
import { XM_CS11_SCRIPTS, XM_CS11_SECTIONS } from './manga-xm-cs11';
import { XM_CSX_SCRIPTS, XM_CSX_SECTIONS } from './manga-xm-csx';
import { XM_CSY_SCRIPTS, XM_CSY_SECTIONS } from './manga-xm-csy';
import { XM_KE03_SCRIPTS, XM_KE03_SECTIONS } from './manga-xm-ke03';
import { XM_KE04_SCRIPTS, XM_KE04_SECTIONS } from './manga-xm-ke04';
import { XM_KE05_SCRIPTS, XM_KE05_SECTIONS } from './manga-xm-ke05';
import { XM_KE06_SCRIPTS, XM_KE06_SECTIONS } from './manga-xm-ke06';
import { XM_KE07_SCRIPTS, XM_KE07_SECTIONS } from './manga-xm-ke07';
import { XM_KE08_SCRIPTS, XM_KE08_SECTIONS } from './manga-xm-ke08';
import { XM_KE09_SCRIPTS, XM_KE09_SECTIONS } from './manga-xm-ke09';
import { XM_KE10_SCRIPTS, XM_KE10_SECTIONS } from './manga-xm-ke10';
import { XM_KEX_SCRIPTS, XM_KEX_SECTIONS } from './manga-xm-kex';
import { XM_KEY_SCRIPTS, XM_KEY_SECTIONS } from './manga-xm-key';
import { XM_KH03_SCRIPTS, XM_KH03_SECTIONS } from './manga-xm-kh03';
import { XM_KH04_SCRIPTS, XM_KH04_SECTIONS } from './manga-xm-kh04';
import { XM_KH05_SCRIPTS, XM_KH05_SECTIONS } from './manga-xm-kh05';
import { XM_KH06_SCRIPTS, XM_KH06_SECTIONS } from './manga-xm-kh06';
import { XM_KH07_SCRIPTS, XM_KH07_SECTIONS } from './manga-xm-kh07';
import { XM_KH08_SCRIPTS, XM_KH08_SECTIONS } from './manga-xm-kh08';
import { XM_KH09_SCRIPTS, XM_KH09_SECTIONS } from './manga-xm-kh09';
import { XM_KHX_SCRIPTS, XM_KHX_SECTIONS } from './manga-xm-khx';
import { XM_KHY_SCRIPTS, XM_KHY_SECTIONS } from './manga-xm-khy';
import { XM_KK03_SCRIPTS, XM_KK03_SECTIONS } from './manga-xm-kk03';
import { XM_KK04_SCRIPTS, XM_KK04_SECTIONS } from './manga-xm-kk04';
import { XM_KK05_SCRIPTS, XM_KK05_SECTIONS } from './manga-xm-kk05';
import { XM_KK06_SCRIPTS, XM_KK06_SECTIONS } from './manga-xm-kk06';
import { XM_KK07_SCRIPTS, XM_KK07_SECTIONS } from './manga-xm-kk07';
import { XM_KK08_SCRIPTS, XM_KK08_SECTIONS } from './manga-xm-kk08';
import { XM_KK09_SCRIPTS, XM_KK09_SECTIONS } from './manga-xm-kk09';
import { XM_KK10_SCRIPTS, XM_KK10_SECTIONS } from './manga-xm-kk10';
import { XM_KK12_SCRIPTS, XM_KK12_SECTIONS } from './manga-xm-kk12';
import { XM_KKX_SCRIPTS, XM_KKX_SECTIONS } from './manga-xm-kkx';
import { XM_KKY_SCRIPTS, XM_KKY_SECTIONS } from './manga-xm-kky';
import { XM_KR03_SCRIPTS, XM_KR03_SECTIONS } from './manga-xm-kr03';
import { XM_KR04_SCRIPTS, XM_KR04_SECTIONS } from './manga-xm-kr04';
import { XM_KR05_SCRIPTS, XM_KR05_SECTIONS } from './manga-xm-kr05';
import { XM_KR06_SCRIPTS, XM_KR06_SECTIONS } from './manga-xm-kr06';
import { XM_KR07_SCRIPTS, XM_KR07_SECTIONS } from './manga-xm-kr07';
import { XM_KR08_SCRIPTS, XM_KR08_SECTIONS } from './manga-xm-kr08';
import { XM_KRX_SCRIPTS, XM_KRX_SECTIONS } from './manga-xm-krx';
import { XM_KRY_SCRIPTS, XM_KRY_SECTIONS } from './manga-xm-kry';
import { XM_KS03_SCRIPTS, XM_KS03_SECTIONS } from './manga-xm-ks03';
import { XM_KS04_SCRIPTS, XM_KS04_SECTIONS } from './manga-xm-ks04';
import { XM_KS05_SCRIPTS, XM_KS05_SECTIONS } from './manga-xm-ks05';
import { XM_KS06_SCRIPTS, XM_KS06_SECTIONS } from './manga-xm-ks06';
import { XM_KS07_SCRIPTS, XM_KS07_SECTIONS } from './manga-xm-ks07';
import { XM_KS08_SCRIPTS, XM_KS08_SECTIONS } from './manga-xm-ks08';
import { XM_KS09_SCRIPTS, XM_KS09_SECTIONS } from './manga-xm-ks09';
import { XM_KS10_SCRIPTS, XM_KS10_SECTIONS } from './manga-xm-ks10';
import { XM_KSX_SCRIPTS, XM_KSX_SECTIONS } from './manga-xm-ksx';
import { XM_KSY_SCRIPTS, XM_KSY_SECTIONS } from './manga-xm-ksy';

export const EXTRA_MANGA_SCRIPTS: Record<string, MangaScript> = {
  ...XM_CE03_SCRIPTS,
  ...XM_CE04_SCRIPTS,
  ...XM_CE05_SCRIPTS,
  ...XM_CE06_SCRIPTS,
  ...XM_CE07_SCRIPTS,
  ...XM_CE08_SCRIPTS,
  ...XM_CE09_SCRIPTS,
  ...XM_CE10_SCRIPTS,
  ...XM_CE11_SCRIPTS,
  ...XM_CE12_SCRIPTS,
  ...XM_CEX_SCRIPTS,
  ...XM_CEY_SCRIPTS,
  ...XM_CH03_SCRIPTS,
  ...XM_CH04_SCRIPTS,
  ...XM_CH05_SCRIPTS,
  ...XM_CH06_SCRIPTS,
  ...XM_CH07_SCRIPTS,
  ...XM_CH08_SCRIPTS,
  ...XM_CH09_SCRIPTS,
  ...XM_CH10_SCRIPTS,
  ...XM_CH12_SCRIPTS,
  ...XM_CHX_SCRIPTS,
  ...XM_CHY_SCRIPTS,
  ...XM_CK03_SCRIPTS,
  ...XM_CK04_SCRIPTS,
  ...XM_CK05_SCRIPTS,
  ...XM_CK06_SCRIPTS,
  ...XM_CK07_SCRIPTS,
  ...XM_CK08_SCRIPTS,
  ...XM_CK09_SCRIPTS,
  ...XM_CK10_SCRIPTS,
  ...XM_CK11_SCRIPTS,
  ...XM_CK12_SCRIPTS,
  ...XM_CK13_SCRIPTS,
  ...XM_CKX_SCRIPTS,
  ...XM_CKY_SCRIPTS,
  ...XM_CR03_SCRIPTS,
  ...XM_CR04_SCRIPTS,
  ...XM_CR05_SCRIPTS,
  ...XM_CR06_SCRIPTS,
  ...XM_CR07_SCRIPTS,
  ...XM_CR08_SCRIPTS,
  ...XM_CR09_SCRIPTS,
  ...XM_CR10_SCRIPTS,
  ...XM_CR11_SCRIPTS,
  ...XM_CR12_SCRIPTS,
  ...XM_CRX_SCRIPTS,
  ...XM_CRY_SCRIPTS,
  ...XM_CS03_SCRIPTS,
  ...XM_CS04_SCRIPTS,
  ...XM_CS05_SCRIPTS,
  ...XM_CS06_SCRIPTS,
  ...XM_CS07_SCRIPTS,
  ...XM_CS08_SCRIPTS,
  ...XM_CS09_SCRIPTS,
  ...XM_CS10_SCRIPTS,
  ...XM_CS11_SCRIPTS,
  ...XM_CSX_SCRIPTS,
  ...XM_CSY_SCRIPTS,
  ...XM_KE03_SCRIPTS,
  ...XM_KE04_SCRIPTS,
  ...XM_KE05_SCRIPTS,
  ...XM_KE06_SCRIPTS,
  ...XM_KE07_SCRIPTS,
  ...XM_KE08_SCRIPTS,
  ...XM_KE09_SCRIPTS,
  ...XM_KE10_SCRIPTS,
  ...XM_KEX_SCRIPTS,
  ...XM_KEY_SCRIPTS,
  ...XM_KH03_SCRIPTS,
  ...XM_KH04_SCRIPTS,
  ...XM_KH05_SCRIPTS,
  ...XM_KH06_SCRIPTS,
  ...XM_KH07_SCRIPTS,
  ...XM_KH08_SCRIPTS,
  ...XM_KH09_SCRIPTS,
  ...XM_KHX_SCRIPTS,
  ...XM_KHY_SCRIPTS,
  ...XM_KK03_SCRIPTS,
  ...XM_KK04_SCRIPTS,
  ...XM_KK05_SCRIPTS,
  ...XM_KK06_SCRIPTS,
  ...XM_KK07_SCRIPTS,
  ...XM_KK08_SCRIPTS,
  ...XM_KK09_SCRIPTS,
  ...XM_KK10_SCRIPTS,
  ...XM_KK12_SCRIPTS,
  ...XM_KKX_SCRIPTS,
  ...XM_KKY_SCRIPTS,
  ...XM_KR03_SCRIPTS,
  ...XM_KR04_SCRIPTS,
  ...XM_KR05_SCRIPTS,
  ...XM_KR06_SCRIPTS,
  ...XM_KR07_SCRIPTS,
  ...XM_KR08_SCRIPTS,
  ...XM_KRX_SCRIPTS,
  ...XM_KRY_SCRIPTS,
  ...XM_KS03_SCRIPTS,
  ...XM_KS04_SCRIPTS,
  ...XM_KS05_SCRIPTS,
  ...XM_KS06_SCRIPTS,
  ...XM_KS07_SCRIPTS,
  ...XM_KS08_SCRIPTS,
  ...XM_KS09_SCRIPTS,
  ...XM_KS10_SCRIPTS,
  ...XM_KSX_SCRIPTS,
  ...XM_KSY_SCRIPTS,
};

export const EXTRA_MANGA_SECTIONS: Record<string, string> = {
  ...XM_CE03_SECTIONS,
  ...XM_CE04_SECTIONS,
  ...XM_CE05_SECTIONS,
  ...XM_CE06_SECTIONS,
  ...XM_CE07_SECTIONS,
  ...XM_CE08_SECTIONS,
  ...XM_CE09_SECTIONS,
  ...XM_CE10_SECTIONS,
  ...XM_CE11_SECTIONS,
  ...XM_CE12_SECTIONS,
  ...XM_CEX_SECTIONS,
  ...XM_CEY_SECTIONS,
  ...XM_CH03_SECTIONS,
  ...XM_CH04_SECTIONS,
  ...XM_CH05_SECTIONS,
  ...XM_CH06_SECTIONS,
  ...XM_CH07_SECTIONS,
  ...XM_CH08_SECTIONS,
  ...XM_CH09_SECTIONS,
  ...XM_CH10_SECTIONS,
  ...XM_CH12_SECTIONS,
  ...XM_CHX_SECTIONS,
  ...XM_CHY_SECTIONS,
  ...XM_CK03_SECTIONS,
  ...XM_CK04_SECTIONS,
  ...XM_CK05_SECTIONS,
  ...XM_CK06_SECTIONS,
  ...XM_CK07_SECTIONS,
  ...XM_CK08_SECTIONS,
  ...XM_CK09_SECTIONS,
  ...XM_CK10_SECTIONS,
  ...XM_CK11_SECTIONS,
  ...XM_CK12_SECTIONS,
  ...XM_CK13_SECTIONS,
  ...XM_CKX_SECTIONS,
  ...XM_CKY_SECTIONS,
  ...XM_CR03_SECTIONS,
  ...XM_CR04_SECTIONS,
  ...XM_CR05_SECTIONS,
  ...XM_CR06_SECTIONS,
  ...XM_CR07_SECTIONS,
  ...XM_CR08_SECTIONS,
  ...XM_CR09_SECTIONS,
  ...XM_CR10_SECTIONS,
  ...XM_CR11_SECTIONS,
  ...XM_CR12_SECTIONS,
  ...XM_CRX_SECTIONS,
  ...XM_CRY_SECTIONS,
  ...XM_CS03_SECTIONS,
  ...XM_CS04_SECTIONS,
  ...XM_CS05_SECTIONS,
  ...XM_CS06_SECTIONS,
  ...XM_CS07_SECTIONS,
  ...XM_CS08_SECTIONS,
  ...XM_CS09_SECTIONS,
  ...XM_CS10_SECTIONS,
  ...XM_CS11_SECTIONS,
  ...XM_CSX_SECTIONS,
  ...XM_CSY_SECTIONS,
  ...XM_KE03_SECTIONS,
  ...XM_KE04_SECTIONS,
  ...XM_KE05_SECTIONS,
  ...XM_KE06_SECTIONS,
  ...XM_KE07_SECTIONS,
  ...XM_KE08_SECTIONS,
  ...XM_KE09_SECTIONS,
  ...XM_KE10_SECTIONS,
  ...XM_KEX_SECTIONS,
  ...XM_KEY_SECTIONS,
  ...XM_KH03_SECTIONS,
  ...XM_KH04_SECTIONS,
  ...XM_KH05_SECTIONS,
  ...XM_KH06_SECTIONS,
  ...XM_KH07_SECTIONS,
  ...XM_KH08_SECTIONS,
  ...XM_KH09_SECTIONS,
  ...XM_KHX_SECTIONS,
  ...XM_KHY_SECTIONS,
  ...XM_KK03_SECTIONS,
  ...XM_KK04_SECTIONS,
  ...XM_KK05_SECTIONS,
  ...XM_KK06_SECTIONS,
  ...XM_KK07_SECTIONS,
  ...XM_KK08_SECTIONS,
  ...XM_KK09_SECTIONS,
  ...XM_KK10_SECTIONS,
  ...XM_KK12_SECTIONS,
  ...XM_KKX_SECTIONS,
  ...XM_KKY_SECTIONS,
  ...XM_KR03_SECTIONS,
  ...XM_KR04_SECTIONS,
  ...XM_KR05_SECTIONS,
  ...XM_KR06_SECTIONS,
  ...XM_KR07_SECTIONS,
  ...XM_KR08_SECTIONS,
  ...XM_KRX_SECTIONS,
  ...XM_KRY_SECTIONS,
  ...XM_KS03_SECTIONS,
  ...XM_KS04_SECTIONS,
  ...XM_KS05_SECTIONS,
  ...XM_KS06_SECTIONS,
  ...XM_KS07_SECTIONS,
  ...XM_KS08_SECTIONS,
  ...XM_KS09_SECTIONS,
  ...XM_KS10_SECTIONS,
  ...XM_KSX_SECTIONS,
  ...XM_KSY_SECTIONS,
};
