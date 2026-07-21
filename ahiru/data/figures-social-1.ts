import type { Figure } from './figures';

// 新図形種別（回路図・曲線グラフ・棒/円グラフ・展開図・柱状図）のバッチ。
export const figuresSocial1: Record<string, Figure> = {
  // 雨温図（模式）：月別降水量。答え（気候区分名）は図に出さない。
  'shakai-003': {
    kind: 'barChart',
    yLabel: '降水量(mm)',
    bars: [
      { label: '1月', value: 40 },
      { label: '4月', value: 100 },
      { label: '7月', value: 200 },
      { label: '10月', value: 120 },
    ],
    caption: '月別降水量（雨温図の降水量）',
  },
  // 資料B：2023年度予算 歳出の内訳（総額114兆円）。問題文で与えられた数値のみ。
  'koko_kankan_shakai_20': {
    kind: 'pieChart',
    slices: [
      { label: '社会保障費', value: 37 },
      { label: '国債費', value: 25 },
      { label: 'その他', value: 52 },
    ],
    caption: '2023年度予算 歳出の内訳（兆円・総額114兆円）',
  },
  // 工業地帯・工業地域別の工業出荷額比較（概数・兆円）。中京工業地帯がトップという解答は示さない。
  'koko_meidai_shakai_01': {
    kind: 'barChart',
    xLabel: '工業地帯・工業地域',
    yLabel: '工業出荷額（兆円）',
    bars: [
      { label: '中京', value: 58 },
      { label: '阪神', value: 31 },
      { label: '関東内陸', value: 30 },
      { label: '瀬戸内', value: 28 },
      { label: '京浜', value: 24 },
    ],
    caption: '工業地帯・工業地域別の工業出荷額（概数）',
  },
};
