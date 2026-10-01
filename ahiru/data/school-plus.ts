// 学校別コースの問題の追加分（各校 100問以上にそろえるための追加）。
// 1ファイル＝1回の作業分。問題の id は <course>_plus_<教科>_NN。
import type { Question } from './questions';
import { SPLUS_SJ_A } from './splus-sj-a';
import { SPLUS_SJ_B } from './splus-sj-b';
import { SPLUS_ND_A } from './splus-nd-a';
import { SPLUS_ND_B } from './splus-nd-b';
import { SPLUS_SK_A } from './splus-sk-a';
import { SPLUS_SK_B } from './splus-sk-b';
import { SPLUS_SN_A } from './splus-sn-a';
import { SPLUS_SN_B } from './splus-sn-b';
import { SPLUS_TK_A } from './splus-tk-a';
import { SPLUS_TK_B } from './splus-tk-b';
import { SPLUS_KM_OS } from './splus-km-os';
import { SPLUS_SF_A } from './splus-sf-a';
import { SPLUS_SF_B } from './splus-sf-b';
import { SPLUS_KD } from './splus-kd';
import { SPLUS_KH_A } from './splus-kh-a';
import { SPLUS_KH_B } from './splus-kh-b';
import { SPLUS_MY_A } from './splus-my-a';
import { SPLUS_MY_B } from './splus-my-b';
import { SPLUS_TZ_A } from './splus-tz-a';
import { SPLUS_TZ_B } from './splus-tz-b';
import { SPLUS_KR_A } from './splus-kr-a';
import { SPLUS_KR_B } from './splus-kr-b';
import { SPLUS_OT_A } from './splus-ot-a';
import { SPLUS_OT_B } from './splus-ot-b';
import { SPLUS_TM_AO } from './splus-tm-ao';
import { SPLUS_TC_HO } from './splus-tc-ho';
import { SPLUS_TG } from './splus-tg';
import { SPLUS_NZ } from './splus-nz';
import { SPLUS_NT } from './splus-nt';
import { SPLUS_NG } from './splus-ng';
import { SPLUS_FK } from './splus-fk';
import { SPLUS_FS } from './splus-fs';
import { SPLUS_FO } from './splus-fo';

export const schoolPlusQuestions: Question[] = [
  ...SPLUS_SJ_A,
  ...SPLUS_SJ_B,
  ...SPLUS_ND_A,
  ...SPLUS_ND_B,
  ...SPLUS_SK_A,
  ...SPLUS_SK_B,
  ...SPLUS_SN_A,
  ...SPLUS_SN_B,
  ...SPLUS_TK_A,
  ...SPLUS_TK_B,
  ...SPLUS_KM_OS,
  ...SPLUS_SF_A,
  ...SPLUS_SF_B,
  ...SPLUS_KD,
  ...SPLUS_KH_A,
  ...SPLUS_KH_B,
  ...SPLUS_MY_A,
  ...SPLUS_MY_B,
  ...SPLUS_TZ_A,
  ...SPLUS_TZ_B,
  ...SPLUS_KR_A,
  ...SPLUS_KR_B,
  ...SPLUS_OT_A,
  ...SPLUS_OT_B,
  ...SPLUS_TM_AO,
  ...SPLUS_TC_HO,
  ...SPLUS_TG,
  ...SPLUS_NZ,
  ...SPLUS_NT,
  ...SPLUS_NG,
  ...SPLUS_FK,
  ...SPLUS_FS,
  ...SPLUS_FO,
];
