import type { Figure } from './figures';

// 中学受験理科 拡張ユニットII「生物：動物・こん虫・人体」（rika_s036〜s075）専用の図解データ。
// lessons-rika-ext02.ts の各Lessonのsections[].figureIdから参照される。
// bioDiagramのtemplateはFigureView.tsxで実装済みの固定テンプレートのみ使用
// （insectBody / heart / digestiveSystem / eye / ear）。
export const lessonFigsRikaExt02: Record<string, Figure> = {
  // s036: こん虫のからだの基本構造（頭部・胸部・腹部）。全体像を示すため全ラベル表示。
  rext02_036: {
    kind: 'bioDiagram',
    template: 'insectBody',
    caption: 'こん虫のからだは頭部・胸部・腹部の3つに分かれる',
  },

  // s037: あしがすべて胸部から生えることを問うので、胸部のラベルを隠す。
  rext02_037: {
    kind: 'bioDiagram',
    template: 'insectBody',
    hideParts: ['kyoubu'],
    caption: 'あし6本（3対）は、どの部分から生えているか',
  },

  // s038: はねの枚数の比較（多くのこん虫は4枚、ハエ・カは後ろばねが退化し2枚）。
  rext02_038: {
    kind: 'barChart',
    xLabel: 'こん虫の種類',
    yLabel: 'はねの数（枚）',
    yMax: 5,
    bars: [
      { label: 'チョウ', value: 4 },
      { label: 'カブトムシ', value: 4 },
      { label: 'ハエ', value: 2 },
      { label: 'カ', value: 2 },
    ],
    caption: 'ハエ・カ（ハエのなかま）は後ろばねが「平均こん」に変化し、はねは2枚のみ',
  },

  // s039: 複眼の位置・数を問うので、複眼のラベルを隠す。
  rext02_039: {
    kind: 'bioDiagram',
    template: 'insectBody',
    hideParts: ['fukugan'],
    caption: '複眼は頭部の左右に1つずつ（合計2つ）ある',
  },

  // s040: 気門の位置・はたらきを問うので、気門のラベルを隠す。
  rext02_040: {
    kind: 'bioDiagram',
    template: 'insectBody',
    hideParts: ['kimon'],
    caption: '気門から空気を直接取り入れ、気管を通して全身に届ける',
  },

  // s041: 完全変態（4段階）と不完全変態（3段階、次レッスンで対比）の段階数を比較。
  rext02_041: {
    kind: 'barChart',
    xLabel: '変態のタイプ',
    yLabel: '育ち方の段階数',
    yMax: 5,
    bars: [
      { label: '完全変態\n(卵→幼虫→さなぎ→成虫)', value: 4 },
      { label: '不完全変態\n(卵→幼虫→成虫)', value: 3 },
    ],
    caption: '完全変態にはさなぎの段階があるため、段階数が1つ多い',
  },

  // s043: モンシロチョウの一生。こん虫のからだの基本を振り返る参考図として全ラベル表示。
  rext02_043: {
    kind: 'bioDiagram',
    template: 'insectBody',
    caption: '成虫になるとからだは頭部・胸部・腹部の3部分にはっきり分かれる',
  },

  // s044: バッタ・トンボ・セミの共通点（成虫のからだのつくり）を振り返る参考図。
  rext02_044: {
    kind: 'bioDiagram',
    template: 'insectBody',
    caption: '不完全変態のこん虫も、成虫になれば頭部・胸部・腹部の3部分を持つ',
  },

  // s045: こん虫ごとの冬ごしの姿（卵・幼虫・さなぎ・成虫）を代表例の数でまとめた参考図。
  rext02_045: {
    kind: 'barChart',
    xLabel: '冬ごしの姿',
    yLabel: '代表例の数（このレッスンで扱った種）',
    yMax: 3,
    bars: [
      { label: '卵', value: 2 },
      { label: '幼虫', value: 1 },
      { label: 'さなぎ', value: 2 },
      { label: '成虫', value: 1 },
    ],
    caption: '冬ごしの姿は種類によって決まっている（例：カマキリ＝卵、カブトムシ＝幼虫）',
  },

  // s046: セキツイ動物5類の総論。こん虫との対比で、あしの数などは扱わないため参考図としてこん虫を示さず割愛する構成だが、
  // ここでは心臓（脊椎動物に共通する内部構造の代表）を全ラベル表示で参考として示す。
  rext02_046: {
    kind: 'bioDiagram',
    template: 'heart',
    caption: 'セキツイ動物は背骨のほか、心臓など体の内部のつくりでも分類できる',
  },

  // s047: 魚類の心臓循環（単純な1心房1心室だが、テンプレートは共通のためヒトの心臓図を参考として示す）。
  rext02_047: {
    kind: 'barChart',
    xLabel: '動物',
    yLabel: '体温調節（0=変温, 1=恒温）',
    yMax: 1,
    bars: [
      { label: 'マグロ(魚類)', value: 0 },
      { label: 'カエル(両生類)', value: 0 },
      { label: 'ペンギン(鳥類)', value: 1 },
    ],
    caption: '魚類は活発に泳いでも変温動物。恒温動物は鳥類とほ乳類のみ',
  },

  // s048: カエルの幼生（オタマジャクシ）と成体で呼吸器官が変わることを示す。
  rext02_048: {
    kind: 'barChart',
    xLabel: 'カエルの成長段階',
    yLabel: '主な呼吸器官の数（えら・肺・皮膚のうち使う数）',
    yMax: 3,
    bars: [
      { label: '幼生(オタマジャクシ)\nえら＋皮膚', value: 2 },
      { label: '成体(カエル)\n肺＋皮膚', value: 2 },
    ],
    caption: '幼生はえらと皮膚、成体は肺と皮膚で呼吸する（呼吸器官の組み合わせが変わる）',
  },

  // s049: は虫類・鳥類の卵の殻の有無を魚類と比較。
  rext02_049: {
    kind: 'barChart',
    xLabel: '動物のグループ',
    yLabel: '卵に殻がある(1)/ない(0)',
    yMax: 1,
    bars: [
      { label: '魚類', value: 0 },
      { label: '両生類', value: 0 },
      { label: 'は虫類', value: 1 },
      { label: '鳥類', value: 1 },
    ],
    caption: '卵に殻があるのはは虫類・鳥類のみ。殻があることで陸上に産卵できる',
  },

  // s050: ほ乳類の条件（胎生か卵生か）とカモノハシの例外を示す。
  rext02_050: {
    kind: 'pieChart',
    slices: [
      { label: '胎生のほ乳類（多数派）', value: 95 },
      { label: 'カモノハシなど卵生のほ乳類（例外）', value: 5 },
    ],
    caption: 'ほ乳類のほとんどは胎生だが、カモノハシのように卵生の例外もいる（イメージ図・実際の比率ではない）',
  },

  // s051: あしの数比較（昆虫類6・クモ類8・甲殻類10）。
  rext02_051: {
    kind: 'barChart',
    xLabel: 'グループ',
    yLabel: 'あしの数（本）',
    yMax: 12,
    bars: [
      { label: '昆虫類', value: 6 },
      { label: 'クモ類', value: 8 },
      { label: '甲殻類', value: 10 },
    ],
    caption: 'あしの数のちがいで、こん虫・クモ類・甲殻類を見分けられる',
  },

  // s052: 消化管全体の道すじ（口→こう門）を確認する参考図。全ラベル表示。
  rext02_052: {
    kind: 'bioDiagram',
    template: 'digestiveSystem',
    caption: '消化管：口→食道→胃→十二指腸→小腸→大腸→こう門',
  },

  // s053: アミラーゼの分泌場所（口＝だ液腺）を問うので、口のラベルを隠す。
  rext02_053: {
    kind: 'bioDiagram',
    template: 'digestiveSystem',
    hideParts: ['kuchi'],
    caption: 'だ液のアミラーゼが最初にデンプンを分解する場所はどこか',
  },

  // s054: ペプシンの分泌場所（胃）を問うので、胃のラベルを隠す。
  rext02_054: {
    kind: 'bioDiagram',
    template: 'digestiveSystem',
    hideParts: ['i'],
    caption: 'ペプシンがタンパク質を分解する場所はどこか',
  },

  // s055: すい液（すい臓）と胆汁（肝臓）の両方を扱うので、両方のラベルを隠す。
  rext02_055: {
    kind: 'bioDiagram',
    template: 'digestiveSystem',
    hideParts: ['suizou', 'kanzou'],
    caption: 'すい液をつくる臓器と、胆汁をつくる臓器はそれぞれどこか',
  },

  // s056: 小腸（柔毛の場所）を問うので、小腸のラベルを隠す。
  rext02_056: {
    kind: 'bioDiagram',
    template: 'digestiveSystem',
    hideParts: ['shouchou'],
    caption: '柔毛が無数にあり、養分を吸収する場所はどこか',
  },

  // s057: 消化酵素まとめと肝臓のはたらきを問うので、肝臓のラベルを隠す。
  rext02_057: {
    kind: 'bioDiagram',
    template: 'digestiveSystem',
    hideParts: ['kanzou'],
    caption: '門脈を通ってブドウ糖・アミノ酸が最初に運ばれる臓器はどこか',
  },

  // s058: 呼吸数の変化（安静時と運動後）の具体例。肺自体には固定テンプレートがないためbarChartで示す。
  rext02_058: {
    kind: 'barChart',
    xLabel: '状態',
    yLabel: '呼吸数（回/分）',
    yMax: 40,
    bars: [
      { label: '安静時', value: 18 },
      { label: '運動直後', value: 32 },
    ],
    caption: '運動をすると筋肉が多くの酸素を必要とするため呼吸数が増える',
  },

  // s059: 肺胞の表面積拡大の考え方を示すイメージ図（肺胞1個 vs 肺胞多数での表面積のイメージ）。
  rext02_059: {
    kind: 'barChart',
    xLabel: '肺のつくり（イメージ）',
    yLabel: '表面積の相対的な大きさ',
    yMax: 10,
    bars: [
      { label: '大きな袋が1つの場合', value: 1 },
      { label: '肺胞（小さな袋が無数）の場合', value: 9 },
    ],
    caption: '同じ体積でも小さな袋に分けるほど表面積が大きくなる（イメージ図）',
  },

  // s060: えらのつくり（水中の酸素を取り込むしくみ）。魚のえら専用テンプレートはないため参考として心臓図の血液の流れの理解に絡めず、
  // ここでは酸素濃度差のイメージをbarChartで示す。
  rext02_060: {
    kind: 'barChart',
    xLabel: '場所',
    yLabel: '酸素の量（イメージ）',
    yMax: 10,
    bars: [
      { label: 'えらに入る前の水', value: 8 },
      { label: 'えらを通った後の水', value: 3 },
    ],
    caption: '水がえらを通る間に、水に溶けていた酸素の多くが血液側に取り込まれる（イメージ図）',
  },

  // s061: 動物ごとの呼吸器官の比較（肺を持つグループ・持たないグループ）。
  rext02_061: {
    kind: 'barChart',
    xLabel: '動物のグループ',
    yLabel: '肺を持つ(1)/持たない(0)',
    yMax: 1,
    bars: [
      { label: '魚類', value: 0 },
      { label: 'こん虫', value: 0 },
      { label: 'は虫類・鳥類・ほ乳類', value: 1 },
    ],
    caption: '魚類はえら、こん虫は気門・気管で呼吸し、肺を持たない',
  },

  // s062: 心臓の4つの部屋（2心房2心室）を確認する参考図。全ラベル表示。
  rext02_062: {
    kind: 'bioDiagram',
    template: 'heart',
    caption: '心臓は右心房・右心室・左心房・左心室の4つの部屋からなる',
  },

  // s063: 血管の種類（動脈・静脈）の理解を助ける参考図として心臓の全体像を示す。
  rext02_063: {
    kind: 'bioDiagram',
    template: 'heart',
    caption: '心臓につながる血管にも、心臓から出る血管（動脈）と心臓に戻る血管（静脈）がある',
  },

  // s064: 肺循環で右心室から肺動脈が出ることを問うので、右心室のラベルを隠す。
  rext02_064: {
    kind: 'bioDiagram',
    template: 'heart',
    hideParts: ['usinshitsu'],
    caption: '肺へ血液を送り出す部屋（右心室）はどこか',
  },

  // s065: 体循環で左心室から大動脈が出ることを問うので、左心室のラベルを隠す。
  rext02_065: {
    kind: 'bioDiagram',
    template: 'heart',
    hideParts: ['sasinshitsu'],
    caption: '全身へ血液を送り出す部屋（左心室）はどこか',
  },

  // s066: 血液成分の体積の割合（血しょう・赤血球・白血球や血小板）をおおまかな目安で示す。
  rext02_066: {
    kind: 'pieChart',
    slices: [
      { label: '血しょう', value: 55 },
      { label: '赤血球', value: 44 },
      { label: '白血球・血小板', value: 1 },
    ],
    caption: '血液の体積の割合の目安（成人の場合、赤血球はおよそ4〜5割程度を占める）',
  },

  // s067: 脈拍の測定値（15秒間）から1分間あたりへ換算する例。
  rext02_067: {
    kind: 'barChart',
    xLabel: '測定・換算',
    yLabel: '回数',
    yMax: 80,
    bars: [
      { label: '15秒間の測定値', value: 18 },
      { label: '1分間に換算した値', value: 72 },
    ],
    caption: '15秒間の回数を1分あたりに直すには×4（60÷15）する',
  },

  // s068: 水晶体のピント調節のはたらきを問うので、水晶体のラベルを隠す。
  rext02_068: {
    kind: 'bioDiagram',
    template: 'eye',
    hideParts: ['suishoutai'],
    caption: '厚さを変えてピントを調節する部分はどこか',
  },

  // s069: うずまき管（聞こえに関わる部分）のはたらきを問うので、うずまき管のラベルを隠す。
  rext02_069: {
    kind: 'bioDiagram',
    template: 'ear',
    hideParts: ['uzumakikan'],
    caption: '振動を電気信号に変えて「聞こえ」を生み出す部分はどこか',
  },

  // s071: 対光反射（ひとみが小さくなる反射）の例として、目の全体構造を参考図として示す。
  rext02_071: {
    kind: 'bioDiagram',
    template: 'eye',
    caption: '明るい光が目に入るとひとみが小さくなる（対光反射）のも反射の一種',
  },

  // s072: 動物分類の総合演習。あしの数のまとめ（バッタ・クモ・ダンゴムシ・カニ）。
  rext02_072: {
    kind: 'barChart',
    xLabel: '生き物',
    yLabel: 'あしの数（本）',
    yMax: 16,
    bars: [
      { label: 'バッタ', value: 6 },
      { label: 'クモ', value: 8 },
      { label: 'ダンゴムシ', value: 14 },
      { label: 'カニ', value: 10 },
    ],
    caption: 'あしの数のまとめ：昆虫類6本・クモ類8本・甲殻類10本前後（ダンゴムシは14本）',
  },

  // s073: 消化・吸収の総合演習。消化管全体を確認する参考図として全ラベル表示。
  rext02_073: {
    kind: 'bioDiagram',
    template: 'digestiveSystem',
    caption: '消化・吸収に関わる器官の総復習',
  },

  // s074: 血液循環の総合演習。心臓の全体構造を確認する参考図として全ラベル表示。
  rext02_074: {
    kind: 'bioDiagram',
    template: 'heart',
    caption: '心臓・血液循環に関わるつくりの総復習',
  },

  // s075: 動物総合演習。呼吸数の変化（安静時→運動後）を別の数値例でまとめて示す。
  rext02_075: {
    kind: 'barChart',
    xLabel: '状態',
    yLabel: '呼吸数（回/分）',
    yMax: 40,
    bars: [
      { label: '安静時', value: 16 },
      { label: '運動後', value: 30 },
    ],
    caption: '運動によって呼吸数・心拍数がともに増加する（総復習）',
  },
};
