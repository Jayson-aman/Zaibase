import type { Figure } from './figures';

// 理科：生物の構造図（bioDiagram）ギャップ埋め バッチ1
export const figuresBioGap1: Record<string, Figure> = {
  // デンプンを最初に分解する場所（口）を答える問題なので、口のラベルだけ隠す。
  chugaku2026_rika_067: {
    kind: 'bioDiagram',
    template: 'digestiveSystem',
    hideParts: ['kuchi'],
  },
  // 問4でブドウ糖が最初に到達する臓器（肝臓）の名前を問うので、肝臓のラベルだけ隠す。
  kaimei_rika_2: {
    kind: 'bioDiagram',
    template: 'digestiveSystem',
    hideParts: ['kanzou'],
  },
  // 問3で小腸吸収後に最初に運ばれる臓器（肝臓）を問うので、肝臓のラベルだけ隠す。
  kansai_hokuyo_rika_r02: {
    kind: 'bioDiagram',
    template: 'digestiveSystem',
    hideParts: ['kanzou'],
  },
  // 答えは「蒸散」という現象名で部位名ではないので、気孔の位置がわかるよう全ラベル表示。
  kiso_rika_003: {
    kind: 'bioDiagram',
    template: 'leafCrossSection',
  },
  // 「気体の出入りや蒸散が行われる穴」の名前（気孔）を直接問うので、気孔のラベルだけ隠す。
  kiso_rika_004: {
    kind: 'bioDiagram',
    template: 'leafCrossSection',
    hideParts: ['kikou'],
  },
  // 答えは分類名（双子葉類）で部位名そのものではないが、子葉の位置がわかる参考図として全ラベル表示。
  kiso_rika_008: {
    kind: 'bioDiagram',
    template: 'seed',
  },
  // 答えは分類名（単子葉類）。子葉が1枚であることをイメージしやすい参考図として全ラベル表示。
  kiso_rika_009: {
    kind: 'bioDiagram',
    template: 'seed',
  },
  // 柱頭という部位名は問題文中に既出で、答えは「受粉」という現象名なので全ラベル表示。
  kiso_rika_010: {
    kind: 'bioDiagram',
    template: 'flower',
  },
  // 子房という部位名は問題文中に既出で、答えは子房が成長した「実」なので全ラベル表示。
  kiso_rika_011: {
    kind: 'bioDiagram',
    template: 'flower',
  },
  // 気孔の開閉のしくみと蒸散が盛んになる条件を説明する問題。気孔の位置を確認できるよう全ラベル表示。
  koko_kankan_rika_b_28: {
    kind: 'bioDiagram',
    template: 'leafCrossSection',
  },
  // アミラーゼ・ペプシン・リパーゼ3種類の分泌場所をまとめて問うため、1部位に絞らず全ラベル表示。
  koko_kiso_rika_35: {
    kind: 'bioDiagram',
    template: 'digestiveSystem',
  },
  // 4つの部屋と肺静脈すべてについて動脈血か静脈血かを問うため、1部位に絞らず全ラベル表示。
  koko_kiso_rika_36: {
    kind: 'bioDiagram',
    template: 'heart',
  },
  // 蒸散が起こる部位・調節する構造・盛んになる条件を説明する問題。気孔の位置を確認できるよう全ラベル表示。
  koko_kiso_rika_b_36: {
    kind: 'bioDiagram',
    template: 'leafCrossSection',
  },
  // タンパク質・脂肪の消化に関わる複数の臓器（胃・すい臓・肝臓など）をまとめて問うため、全ラベル表示。
  koko_moshi_rika_31: {
    kind: 'bioDiagram',
    template: 'digestiveSystem',
  },
  // (1)で蒸散を行う穴の名前（気孔）を直接問うので、気孔のラベルだけ隠す。
  koko_moshi_rika_35: {
    kind: 'bioDiagram',
    template: 'leafCrossSection',
    hideParts: ['kikou'],
  },
  // 胚珠・子房という部位名は問題文中に既出で、それぞれが何に発達するかを問うため全ラベル表示。
  koko_moshi_rika_38: {
    kind: 'bioDiagram',
    template: 'flower',
  },
  // 気体の出入りと蒸散を行うすきまの名前（気孔）を直接問うので、気孔のラベルだけ隠す。
  koko_rika_ex1_083: {
    kind: 'bioDiagram',
    template: 'leafCrossSection',
    hideParts: ['kikou'],
  },
  // 気孔という部位名は問題文中に既出で、答えは「蒸散」という現象名なので全ラベル表示。
  koko_rika_ex1_084: {
    kind: 'bioDiagram',
    template: 'leafCrossSection',
  },
  // ワセリンを塗る実験から蒸散は葉の裏側（気孔）で盛んなことを読み取る問題。気孔の位置がわかるよう全ラベル表示。
  koko_gen_rika_08: {
    kind: 'bioDiagram',
    template: 'leafCrossSection',
  },
  // 被子植物と裸子植物の違い（子房の有無）を問う比較問題なので、子房・胚珠を含む全ラベル表示。
  teaser_rika_03: {
    kind: 'bioDiagram',
    template: 'flower',
  },
  // 蒸散の現象・部位・役割を説明する問題。気孔が葉の裏側にあることがわかるよう全ラベル表示。
  takatsuki_rika_05: {
    kind: 'bioDiagram',
    template: 'leafCrossSection',
  },
  // 気孔が葉の表・裏のどちらに多いかを問う問題。図の気孔の位置（下側）が参考になるよう全ラベル表示。
  rika_34: {
    kind: 'bioDiagram',
    template: 'leafCrossSection',
  },
};
