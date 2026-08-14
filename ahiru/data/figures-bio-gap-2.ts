import type { Figure } from './figures';

// 理科：生物の構造図（bioDiagram）ギャップ埋め バッチ2
export const figuresBioGap2: Record<string, Figure> = {
  // 消化系。だ液・胃液・すい液・胆汁の4つの分解対象を問う設問で単一部位の名前当てではないため、全ラベル表示の参考図。
  rika_ex_05: {
    kind: 'bioDiagram',
    template: 'digestiveSystem',
  },
  // 葉の断面。気孔を囲む孔辺細胞とそのはたらきを問う設問で、気孔の位置を確認する参考図として全ラベル表示。
  re_005: {
    kind: 'bioDiagram',
    template: 'leafCrossSection',
  },
  // 消化系。胆汁を生産する器官名（肝臓）を答えさせる設問なので、肝臓のラベルだけ隠す。
  re_011: {
    kind: 'bioDiagram',
    template: 'digestiveSystem',
    hideParts: ['kanzou'],
  },
  // 花のつくり。子房・胚珠が「何になるか」を問う設問で部位名自体は既出のため、全ラベル表示の参考図。
  re_028: {
    kind: 'bioDiagram',
    template: 'flower',
  },
  // 葉の断面。気温が高く乾燥した時に気孔を閉じる理由（利点・欠点）を問う設問なので、気孔の位置確認用に全ラベル表示。
  re_050: {
    kind: 'bioDiagram',
    template: 'leafCrossSection',
  },
  // 消化系。肝臓のはたらき（胆汁生成・解毒・貯蔵）を問う設問で、肝臓の名前自体は既出のため全ラベル表示の参考図。
  re_056: {
    kind: 'bioDiagram',
    template: 'digestiveSystem',
  },
  // 消化系。でんぷんを分解する消化液・酵素の組み合わせを複数答えさせる設問なので、全ラベル表示の参考図。
  re_057: {
    kind: 'bioDiagram',
    template: 'digestiveSystem',
  },
  // 葉の断面。蒸散が最も盛んな部位（気孔）を答えさせる設問なので、気孔のラベルだけ隠す。
  re_065: {
    kind: 'bioDiagram',
    template: 'leafCrossSection',
    hideParts: ['kikou'],
  },
  // 花のつくり。おしべ・めしべ・花弁・がくすべてを説明させ受粉の定義も問う設問なので、全ラベル表示の参考図。
  re_067: {
    kind: 'bioDiagram',
    template: 'flower',
  },
  // 花のつくり。がく→花弁→おしべ→めしべの並び順を問う設問（元の推定templateはseedだったがflowerが正しい）で、複数部位を問うため全ラベル表示。
  re_070: {
    kind: 'bioDiagram',
    template: 'flower',
    hideParts: ['gaku', 'kaben', 'yaku', 'kashi', 'chuto', 'kachu'],
  },
  // 心臓。4つの部屋すべてと体循環・肺循環の流れを説明させる設問なので、全ラベル表示の参考図。
  re_075: {
    kind: 'bioDiagram',
    template: 'heart',
  },
  // 消化系。肝臓のはたらきを3つ答えさせる設問で、肝臓の名前自体は既出のため全ラベル表示の参考図。
  re_077: {
    kind: 'bioDiagram',
    template: 'digestiveSystem',
  },
  // 消化系。口から始まる消化管の通過順序をすべて答えさせる設問なので、全ラベル表示の参考図。
  rx2_028: {
    kind: 'bioDiagram',
    template: 'digestiveSystem',
    hideParts: ['kuchi', 'shokudou', 'i', 'shouchou', 'daichou', 'koumon'],
  },
  // 消化系。でんぷんを消化する消化液を2つ答えさせる設問なので、全ラベル表示の参考図。
  rika_gp_24: {
    kind: 'bioDiagram',
    template: 'digestiveSystem',
  },
  // 心臓。左心室から右心房に戻るまでの体循環の経路をすべて説明させる設問なので、全ラベル表示の参考図。
  kurume_rika_12: {
    kind: 'bioDiagram',
    template: 'heart',
  },
  // 心臓。右心室から肺を経て左心房・左心室へ至る経路をすべて説明させる設問なので、全ラベル表示の参考図。
  nada_rika_14: {
    kind: 'bioDiagram',
    template: 'heart',
  },
  // 葉の断面。光合成・呼吸で気孔から放出される気体を問う設問で、気孔の位置確認用に全ラベル表示。
  seinan_rika_08: {
    kind: 'bioDiagram',
    template: 'leafCrossSection',
  },
  // 消化系。口から始まる消化管を4つ以上答えさせる設問なので、全ラベル表示の参考図。
  term1_2026_chugaku_rika_027: {
    kind: 'bioDiagram',
    template: 'digestiveSystem',
    hideParts: ['kuchi', 'shokudou', 'i', 'shouchou', 'daichou', 'koumon'],
  },
  // 種子のつくり。子葉にたくわえられたでんぷんが使われて減る理由を問う設問で、子葉の位置確認用に全ラベル表示。
  term1_2026_chugaku_rika_043: {
    kind: 'bioDiagram',
    template: 'seed',
  },
  // 消化系。でんぷんが口・胃・小腸を通る間の変化を説明させる設問なので、全ラベル表示の参考図。
  term1_2026_chugaku_rika_046: {
    kind: 'bioDiagram',
    template: 'digestiveSystem',
  },
  // 消化系。問1で口から肛門までの消化管の順番を答えさせる部分が中心のため、全ラベル表示の参考図。
  tokyo_gakushuin_rika_02: {
    kind: 'bioDiagram',
    template: 'digestiveSystem',
    hideParts: ['kuchi', 'shokudou', 'i', 'shouchou', 'daichou', 'koumon'],
  },
  // 消化系。問2で小腸吸収後まず運ばれる器官（肝臓）を答えさせるので、肝臓のラベルだけ隠す。
  koko_meidai_rika_03: {
    kind: 'bioDiagram',
    template: 'digestiveSystem',
    hideParts: ['kanzou'],
  },
};
