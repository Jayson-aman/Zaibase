// 教科書単元に「あとから」動く図解を足すための入口。単元ファイルを書きかえずに図解だけ足せる。
// 各バッチのファイル（lesson-xf-*.ts）は、次の2つを export する：
//   XF_..._FIGURES  : Record<figureId, DiagramFigure>
//   XF_..._SECTIONS : Record<'単元id#節の番号(0始まり)', figureId>
// ここで束ねて、lesson-figures.ts（図解の本体）と lessons.ts（節への取りつけ）が読む。
// 節に元から figureId がある場合は、元のものを優先する（lessons.ts 側で判定）。
import type { Figure } from './figures';
import { XF_CEA_FIGURES, XF_CEA_SECTIONS } from './lesson-xf-cea';
import { XF_CEB_FIGURES, XF_CEB_SECTIONS } from './lesson-xf-ceb';
import { XF_CEC_FIGURES, XF_CEC_SECTIONS } from './lesson-xf-cec';
import { XF_CED_FIGURES, XF_CED_SECTIONS } from './lesson-xf-ced';
import { XF_CEE_FIGURES, XF_CEE_SECTIONS } from './lesson-xf-cee';
import { XF_CEF_FIGURES, XF_CEF_SECTIONS } from './lesson-xf-cef';
import { XF_CEG_FIGURES, XF_CEG_SECTIONS } from './lesson-xf-ceg';
import { XF_CEH_FIGURES, XF_CEH_SECTIONS } from './lesson-xf-ceh';
import { XF_CEI_FIGURES, XF_CEI_SECTIONS } from './lesson-xf-cei';
import { XF_CEJ_FIGURES, XF_CEJ_SECTIONS } from './lesson-xf-cej';
import { XF_CEK_FIGURES, XF_CEK_SECTIONS } from './lesson-xf-cek';
import { XF_CEL_FIGURES, XF_CEL_SECTIONS } from './lesson-xf-cel';
import { XF_CKA_FIGURES, XF_CKA_SECTIONS } from './lesson-xf-cka';
import { XF_CKB_FIGURES, XF_CKB_SECTIONS } from './lesson-xf-ckb';
import { XF_CKC_FIGURES, XF_CKC_SECTIONS } from './lesson-xf-ckc';
import { XF_CKD_FIGURES, XF_CKD_SECTIONS } from './lesson-xf-ckd';
import { XF_CKE_FIGURES, XF_CKE_SECTIONS } from './lesson-xf-cke';
import { XF_CKF_FIGURES, XF_CKF_SECTIONS } from './lesson-xf-ckf';
import { XF_CKG_FIGURES, XF_CKG_SECTIONS } from './lesson-xf-ckg';
import { XF_CKH_FIGURES, XF_CKH_SECTIONS } from './lesson-xf-ckh';
import { XF_CKI_FIGURES, XF_CKI_SECTIONS } from './lesson-xf-cki';
import { XF_CKJ_FIGURES, XF_CKJ_SECTIONS } from './lesson-xf-ckj';
import { XF_CKK_FIGURES, XF_CKK_SECTIONS } from './lesson-xf-ckk';
import { XF_CKL_FIGURES, XF_CKL_SECTIONS } from './lesson-xf-ckl';
import { XF_CKM_FIGURES, XF_CKM_SECTIONS } from './lesson-xf-ckm';
import { XF_GCE_FIGURES, XF_GCE_SECTIONS } from './lesson-xf-gce';
import { XF_GCH_FIGURES, XF_GCH_SECTIONS } from './lesson-xf-gch';
import { XF_GCK_FIGURES, XF_GCK_SECTIONS } from './lesson-xf-gck';
import { XF_GCR_FIGURES, XF_GCR_SECTIONS } from './lesson-xf-gcr';
import { XF_GCS_FIGURES, XF_GCS_SECTIONS } from './lesson-xf-gcs';
import { XF_GKE_FIGURES, XF_GKE_SECTIONS } from './lesson-xf-gke';
import { XF_GKH_FIGURES, XF_GKH_SECTIONS } from './lesson-xf-gkh';
import { XF_GKK_FIGURES, XF_GKK_SECTIONS } from './lesson-xf-gkk';
import { XF_GKR_FIGURES, XF_GKR_SECTIONS } from './lesson-xf-gkr';
import { XF_GKS_FIGURES, XF_GKS_SECTIONS } from './lesson-xf-gks';
import { XF_HA_FIGURES, XF_HA_SECTIONS } from './lesson-xf-ha';
import { XF_HB_FIGURES, XF_HB_SECTIONS } from './lesson-xf-hb';
import { XF_HC_FIGURES, XF_HC_SECTIONS } from './lesson-xf-hc';
import { XF_HD_FIGURES, XF_HD_SECTIONS } from './lesson-xf-hd';
import { XF_HE_FIGURES, XF_HE_SECTIONS } from './lesson-xf-he';
import { XF_HF_FIGURES, XF_HF_SECTIONS } from './lesson-xf-hf';
import { XF_HG_FIGURES, XF_HG_SECTIONS } from './lesson-xf-hg';
import { XF_HH_FIGURES, XF_HH_SECTIONS } from './lesson-xf-hh';
import { XF_HI_FIGURES, XF_HI_SECTIONS } from './lesson-xf-hi';
import { XF_HJ_FIGURES, XF_HJ_SECTIONS } from './lesson-xf-hj';
import { XF_KEA_FIGURES, XF_KEA_SECTIONS } from './lesson-xf-kea';
import { XF_KEB_FIGURES, XF_KEB_SECTIONS } from './lesson-xf-keb';
import { XF_KEC_FIGURES, XF_KEC_SECTIONS } from './lesson-xf-kec';
import { XF_KED_FIGURES, XF_KED_SECTIONS } from './lesson-xf-ked';
import { XF_KEE_FIGURES, XF_KEE_SECTIONS } from './lesson-xf-kee';
import { XF_KEF_FIGURES, XF_KEF_SECTIONS } from './lesson-xf-kef';
import { XF_KEG_FIGURES, XF_KEG_SECTIONS } from './lesson-xf-keg';
import { XF_KEH_FIGURES, XF_KEH_SECTIONS } from './lesson-xf-keh';
import { XF_KEI_FIGURES, XF_KEI_SECTIONS } from './lesson-xf-kei';
import { XF_KEJ_FIGURES, XF_KEJ_SECTIONS } from './lesson-xf-kej';
import { XF_KEK_FIGURES, XF_KEK_SECTIONS } from './lesson-xf-kek';
import { XF_KHA_FIGURES, XF_KHA_SECTIONS } from './lesson-xf-kha';
import { XF_KHB_FIGURES, XF_KHB_SECTIONS } from './lesson-xf-khb';
import { XF_KHC_FIGURES, XF_KHC_SECTIONS } from './lesson-xf-khc';
import { XF_KHD_FIGURES, XF_KHD_SECTIONS } from './lesson-xf-khd';
import { XF_KHE_FIGURES, XF_KHE_SECTIONS } from './lesson-xf-khe';
import { XF_KHF_FIGURES, XF_KHF_SECTIONS } from './lesson-xf-khf';
import { XF_KHG_FIGURES, XF_KHG_SECTIONS } from './lesson-xf-khg';
import { XF_KHH_FIGURES, XF_KHH_SECTIONS } from './lesson-xf-khh';
import { XF_KHI_FIGURES, XF_KHI_SECTIONS } from './lesson-xf-khi';
import { XF_KHJ_FIGURES, XF_KHJ_SECTIONS } from './lesson-xf-khj';
import { XF_KHK_FIGURES, XF_KHK_SECTIONS } from './lesson-xf-khk';
import { XF_KHL_FIGURES, XF_KHL_SECTIONS } from './lesson-xf-khl';
import { XF_KKA_FIGURES, XF_KKA_SECTIONS } from './lesson-xf-kka';
import { XF_KKB_FIGURES, XF_KKB_SECTIONS } from './lesson-xf-kkb';
import { XF_KKC_FIGURES, XF_KKC_SECTIONS } from './lesson-xf-kkc';
import { XF_KKD_FIGURES, XF_KKD_SECTIONS } from './lesson-xf-kkd';
import { XF_KKE_FIGURES, XF_KKE_SECTIONS } from './lesson-xf-kke';
import { XF_KKF_FIGURES, XF_KKF_SECTIONS } from './lesson-xf-kkf';
import { XF_KKG_FIGURES, XF_KKG_SECTIONS } from './lesson-xf-kkg';
import { XF_KKH_FIGURES, XF_KKH_SECTIONS } from './lesson-xf-kkh';
import { XF_KKI_FIGURES, XF_KKI_SECTIONS } from './lesson-xf-kki';
import { XF_KKJ_FIGURES, XF_KKJ_SECTIONS } from './lesson-xf-kkj';
import { XF_KKK_FIGURES, XF_KKK_SECTIONS } from './lesson-xf-kkk';
import { XF_KKL_FIGURES, XF_KKL_SECTIONS } from './lesson-xf-kkl';
import { XF_KRA_FIGURES, XF_KRA_SECTIONS } from './lesson-xf-kra';
import { XF_KRB_FIGURES, XF_KRB_SECTIONS } from './lesson-xf-krb';
import { XF_KRC_FIGURES, XF_KRC_SECTIONS } from './lesson-xf-krc';
import { XF_KRD_FIGURES, XF_KRD_SECTIONS } from './lesson-xf-krd';
import { XF_KRE_FIGURES, XF_KRE_SECTIONS } from './lesson-xf-kre';
import { XF_KRF_FIGURES, XF_KRF_SECTIONS } from './lesson-xf-krf';
import { XF_KRG_FIGURES, XF_KRG_SECTIONS } from './lesson-xf-krg';
import { XF_KRH_FIGURES, XF_KRH_SECTIONS } from './lesson-xf-krh';
import { XF_KRI_FIGURES, XF_KRI_SECTIONS } from './lesson-xf-kri';
import { XF_KRJ_FIGURES, XF_KRJ_SECTIONS } from './lesson-xf-krj';
import { XF_KSA_FIGURES, XF_KSA_SECTIONS } from './lesson-xf-ksa';
import { XF_KSB_FIGURES, XF_KSB_SECTIONS } from './lesson-xf-ksb';
import { XF_KSC_FIGURES, XF_KSC_SECTIONS } from './lesson-xf-ksc';
import { XF_KSD_FIGURES, XF_KSD_SECTIONS } from './lesson-xf-ksd';
import { XF_KSE_FIGURES, XF_KSE_SECTIONS } from './lesson-xf-kse';
import { XF_KSF_FIGURES, XF_KSF_SECTIONS } from './lesson-xf-ksf';
import { XF_KSG_FIGURES, XF_KSG_SECTIONS } from './lesson-xf-ksg';
import { XF_KSH_FIGURES, XF_KSH_SECTIONS } from './lesson-xf-ksh';
import { XF_KSI_FIGURES, XF_KSI_SECTIONS } from './lesson-xf-ksi';
import { XF_RA_FIGURES, XF_RA_SECTIONS } from './lesson-xf-ra';
import { XF_RB_FIGURES, XF_RB_SECTIONS } from './lesson-xf-rb';
import { XF_RC_FIGURES, XF_RC_SECTIONS } from './lesson-xf-rc';
import { XF_RD_FIGURES, XF_RD_SECTIONS } from './lesson-xf-rd';
import { XF_RE_FIGURES, XF_RE_SECTIONS } from './lesson-xf-re';
import { XF_RF_FIGURES, XF_RF_SECTIONS } from './lesson-xf-rf';
import { XF_RG_FIGURES, XF_RG_SECTIONS } from './lesson-xf-rg';
import { XF_RH_FIGURES, XF_RH_SECTIONS } from './lesson-xf-rh';
import { XF_RI_FIGURES, XF_RI_SECTIONS } from './lesson-xf-ri';
import { XF_SA_FIGURES, XF_SA_SECTIONS } from './lesson-xf-sa';
import { XF_SB_FIGURES, XF_SB_SECTIONS } from './lesson-xf-sb';
import { XF_SC_FIGURES, XF_SC_SECTIONS } from './lesson-xf-sc';

export const EXTRA_LESSON_FIGURES: Record<string, Figure> = {
  ...XF_CEA_FIGURES,
  ...XF_CEB_FIGURES,
  ...XF_CEC_FIGURES,
  ...XF_CED_FIGURES,
  ...XF_CEE_FIGURES,
  ...XF_CEF_FIGURES,
  ...XF_CEG_FIGURES,
  ...XF_CEH_FIGURES,
  ...XF_CEI_FIGURES,
  ...XF_CEJ_FIGURES,
  ...XF_CEK_FIGURES,
  ...XF_CEL_FIGURES,
  ...XF_CKA_FIGURES,
  ...XF_CKB_FIGURES,
  ...XF_CKC_FIGURES,
  ...XF_CKD_FIGURES,
  ...XF_CKE_FIGURES,
  ...XF_CKF_FIGURES,
  ...XF_CKG_FIGURES,
  ...XF_CKH_FIGURES,
  ...XF_CKI_FIGURES,
  ...XF_CKJ_FIGURES,
  ...XF_CKK_FIGURES,
  ...XF_CKL_FIGURES,
  ...XF_CKM_FIGURES,
  ...XF_GCE_FIGURES,
  ...XF_GCH_FIGURES,
  ...XF_GCK_FIGURES,
  ...XF_GCR_FIGURES,
  ...XF_GCS_FIGURES,
  ...XF_GKE_FIGURES,
  ...XF_GKH_FIGURES,
  ...XF_GKK_FIGURES,
  ...XF_GKR_FIGURES,
  ...XF_GKS_FIGURES,
  ...XF_HA_FIGURES,
  ...XF_HB_FIGURES,
  ...XF_HC_FIGURES,
  ...XF_HD_FIGURES,
  ...XF_HE_FIGURES,
  ...XF_HF_FIGURES,
  ...XF_HG_FIGURES,
  ...XF_HH_FIGURES,
  ...XF_HI_FIGURES,
  ...XF_HJ_FIGURES,
  ...XF_KEA_FIGURES,
  ...XF_KEB_FIGURES,
  ...XF_KEC_FIGURES,
  ...XF_KED_FIGURES,
  ...XF_KEE_FIGURES,
  ...XF_KEF_FIGURES,
  ...XF_KEG_FIGURES,
  ...XF_KEH_FIGURES,
  ...XF_KEI_FIGURES,
  ...XF_KEJ_FIGURES,
  ...XF_KEK_FIGURES,
  ...XF_KHA_FIGURES,
  ...XF_KHB_FIGURES,
  ...XF_KHC_FIGURES,
  ...XF_KHD_FIGURES,
  ...XF_KHE_FIGURES,
  ...XF_KHF_FIGURES,
  ...XF_KHG_FIGURES,
  ...XF_KHH_FIGURES,
  ...XF_KHI_FIGURES,
  ...XF_KHJ_FIGURES,
  ...XF_KHK_FIGURES,
  ...XF_KHL_FIGURES,
  ...XF_KKA_FIGURES,
  ...XF_KKB_FIGURES,
  ...XF_KKC_FIGURES,
  ...XF_KKD_FIGURES,
  ...XF_KKE_FIGURES,
  ...XF_KKF_FIGURES,
  ...XF_KKG_FIGURES,
  ...XF_KKH_FIGURES,
  ...XF_KKI_FIGURES,
  ...XF_KKJ_FIGURES,
  ...XF_KKK_FIGURES,
  ...XF_KKL_FIGURES,
  ...XF_KRA_FIGURES,
  ...XF_KRB_FIGURES,
  ...XF_KRC_FIGURES,
  ...XF_KRD_FIGURES,
  ...XF_KRE_FIGURES,
  ...XF_KRF_FIGURES,
  ...XF_KRG_FIGURES,
  ...XF_KRH_FIGURES,
  ...XF_KRI_FIGURES,
  ...XF_KRJ_FIGURES,
  ...XF_KSA_FIGURES,
  ...XF_KSB_FIGURES,
  ...XF_KSC_FIGURES,
  ...XF_KSD_FIGURES,
  ...XF_KSE_FIGURES,
  ...XF_KSF_FIGURES,
  ...XF_KSG_FIGURES,
  ...XF_KSH_FIGURES,
  ...XF_KSI_FIGURES,
  ...XF_RA_FIGURES,
  ...XF_RB_FIGURES,
  ...XF_RC_FIGURES,
  ...XF_RD_FIGURES,
  ...XF_RE_FIGURES,
  ...XF_RF_FIGURES,
  ...XF_RG_FIGURES,
  ...XF_RH_FIGURES,
  ...XF_RI_FIGURES,
  ...XF_SA_FIGURES,
  ...XF_SB_FIGURES,
  ...XF_SC_FIGURES,
};

export const EXTRA_SECTION_FIGURES: Record<string, string> = {
  ...XF_CEA_SECTIONS,
  ...XF_CEB_SECTIONS,
  ...XF_CEC_SECTIONS,
  ...XF_CED_SECTIONS,
  ...XF_CEE_SECTIONS,
  ...XF_CEF_SECTIONS,
  ...XF_CEG_SECTIONS,
  ...XF_CEH_SECTIONS,
  ...XF_CEI_SECTIONS,
  ...XF_CEJ_SECTIONS,
  ...XF_CEK_SECTIONS,
  ...XF_CEL_SECTIONS,
  ...XF_CKA_SECTIONS,
  ...XF_CKB_SECTIONS,
  ...XF_CKC_SECTIONS,
  ...XF_CKD_SECTIONS,
  ...XF_CKE_SECTIONS,
  ...XF_CKF_SECTIONS,
  ...XF_CKG_SECTIONS,
  ...XF_CKH_SECTIONS,
  ...XF_CKI_SECTIONS,
  ...XF_CKJ_SECTIONS,
  ...XF_CKK_SECTIONS,
  ...XF_CKL_SECTIONS,
  ...XF_CKM_SECTIONS,
  ...XF_GCE_SECTIONS,
  ...XF_GCH_SECTIONS,
  ...XF_GCK_SECTIONS,
  ...XF_GCR_SECTIONS,
  ...XF_GCS_SECTIONS,
  ...XF_GKE_SECTIONS,
  ...XF_GKH_SECTIONS,
  ...XF_GKK_SECTIONS,
  ...XF_GKR_SECTIONS,
  ...XF_GKS_SECTIONS,
  ...XF_HA_SECTIONS,
  ...XF_HB_SECTIONS,
  ...XF_HC_SECTIONS,
  ...XF_HD_SECTIONS,
  ...XF_HE_SECTIONS,
  ...XF_HF_SECTIONS,
  ...XF_HG_SECTIONS,
  ...XF_HH_SECTIONS,
  ...XF_HI_SECTIONS,
  ...XF_HJ_SECTIONS,
  ...XF_KEA_SECTIONS,
  ...XF_KEB_SECTIONS,
  ...XF_KEC_SECTIONS,
  ...XF_KED_SECTIONS,
  ...XF_KEE_SECTIONS,
  ...XF_KEF_SECTIONS,
  ...XF_KEG_SECTIONS,
  ...XF_KEH_SECTIONS,
  ...XF_KEI_SECTIONS,
  ...XF_KEJ_SECTIONS,
  ...XF_KEK_SECTIONS,
  ...XF_KHA_SECTIONS,
  ...XF_KHB_SECTIONS,
  ...XF_KHC_SECTIONS,
  ...XF_KHD_SECTIONS,
  ...XF_KHE_SECTIONS,
  ...XF_KHF_SECTIONS,
  ...XF_KHG_SECTIONS,
  ...XF_KHH_SECTIONS,
  ...XF_KHI_SECTIONS,
  ...XF_KHJ_SECTIONS,
  ...XF_KHK_SECTIONS,
  ...XF_KHL_SECTIONS,
  ...XF_KKA_SECTIONS,
  ...XF_KKB_SECTIONS,
  ...XF_KKC_SECTIONS,
  ...XF_KKD_SECTIONS,
  ...XF_KKE_SECTIONS,
  ...XF_KKF_SECTIONS,
  ...XF_KKG_SECTIONS,
  ...XF_KKH_SECTIONS,
  ...XF_KKI_SECTIONS,
  ...XF_KKJ_SECTIONS,
  ...XF_KKK_SECTIONS,
  ...XF_KKL_SECTIONS,
  ...XF_KRA_SECTIONS,
  ...XF_KRB_SECTIONS,
  ...XF_KRC_SECTIONS,
  ...XF_KRD_SECTIONS,
  ...XF_KRE_SECTIONS,
  ...XF_KRF_SECTIONS,
  ...XF_KRG_SECTIONS,
  ...XF_KRH_SECTIONS,
  ...XF_KRI_SECTIONS,
  ...XF_KRJ_SECTIONS,
  ...XF_KSA_SECTIONS,
  ...XF_KSB_SECTIONS,
  ...XF_KSC_SECTIONS,
  ...XF_KSD_SECTIONS,
  ...XF_KSE_SECTIONS,
  ...XF_KSF_SECTIONS,
  ...XF_KSG_SECTIONS,
  ...XF_KSH_SECTIONS,
  ...XF_KSI_SECTIONS,
  ...XF_RA_SECTIONS,
  ...XF_RB_SECTIONS,
  ...XF_RC_SECTIONS,
  ...XF_RD_SECTIONS,
  ...XF_RE_SECTIONS,
  ...XF_RF_SECTIONS,
  ...XF_RG_SECTIONS,
  ...XF_RH_SECTIONS,
  ...XF_RI_SECTIONS,
  ...XF_SA_SECTIONS,
  ...XF_SB_SECTIONS,
  ...XF_SC_SECTIONS,
};
