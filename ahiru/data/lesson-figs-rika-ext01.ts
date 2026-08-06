import type { Figure } from './figures';

// 中学受験 理科「植物」拡張ユニット（rika_s001〜rika_s035）の教科書用図解。
// キーは lessons-rika-ext01.ts の figureId と対応。
export const lessonFigsRikaExt01: Record<string, Figure> = {
  // s002：葉緑体の分布（葉の断面：さく状組織・海綿状組織に緑の粒＝葉緑体が集中）
  lf_rikaext01_002: {
    kind: 'bioDiagram',
    template: 'leafCrossSection',
    caption:
      '葉緑体（緑の粒）はさく状組織・海綿状組織の細胞に多く集まる。緑色の茎や未熟な果実の皮にも葉緑体はあるが、光の届かない根には基本的にない',
  },

  // s004：光合成の全体像（葉の断面で気孔からCO2が入り、道管から水が届く）
  lf_rikaext01_004: {
    kind: 'bioDiagram',
    template: 'leafCrossSection',
    caption: '葉緑体で光・CO2・水からデンプン（グルコース）と酸素をつくる。CO2は気孔から、水は道管から届く',
  },

  // s005：光合成の化学反応式
  lf_rikaext01_005: {
    kind: 'chemEquation',
    equation: '6CO2 + 6H2O -> C6H12O6 + 6O2',
    caption: '二酸化炭素と水から、光エネルギーを使ってグルコースと酸素ができる。酸素は水が分解されて生じる',
  },

  // s006：光合成の材料・産物の出入り口（気孔＝CO2/O2、道管＝水、師管＝デンプン(糖)の輸送）
  lf_rikaext01_006: {
    kind: 'bioDiagram',
    template: 'leafCrossSection',
    caption: '材料：気孔から入るCO2・道管から届く水。産物：気孔から出るO2・師管で運ばれる糖(デンプンのもと)',
  },

  // s008：光合成産物の移動（師管＝糖の通り道）
  lf_rikaext01_008: {
    kind: 'bioDiagram',
    template: 'leafCrossSection',
    caption: '葉でつくられたデンプンは水に溶けやすい糖に変えられ、師管を通って茎・根・果実などへ運ばれる',
  },

  // s009：呼吸の化学反応式
  lf_rikaext01_009: {
    kind: 'chemEquation',
    equation: 'C6H12O6 + 6O2 -> 6CO2 + 6H2O',
    caption: 'グルコースと酸素からエネルギーを取り出し、二酸化炭素と水ができる。すべての生きた細胞で昼夜行われる',
  },

  // s010：見かけの光合成量（光の強さ0〜10の実験データ）
  lf_rikaext01_010: {
    kind: 'lineChart',
    xLabel: '光の強さ',
    yLabel: '見かけの光合成量(CO2 mg/時)',
    xRange: [0, 10],
    yRange: [-3, 6],
    series: [
      {
        label: '見かけの光合成量',
        markers: true,
        points: [
          { x: 0, y: -2.4 },
          { x: 1, y: -1.2 },
          { x: 2, y: 0 },
          { x: 3, y: 1.2 },
          { x: 4, y: 2.4 },
          { x: 5, y: 3.2 },
          { x: 6, y: 3.6 },
          { x: 7, y: 3.6 },
          { x: 8, y: 3.6 },
        ],
      },
    ],
    caption: '暗所(光0)ではCO2放出2.4mg/時＝呼吸量。真の光合成量＝見かけの光合成量＋2.4mg',
  },

  // s011：光補償点（見かけの光合成量が0になる点をピンポイントで示す）
  lf_rikaext01_011: {
    kind: 'lineChart',
    xLabel: '光の強さ(lux)',
    yLabel: '見かけの光合成量(CO2 mg/時)',
    xRange: [0, 3000],
    yRange: [-4, 3],
    series: [
      {
        label: '見かけの光合成量',
        markers: true,
        points: [
          { x: 0, y: -3.0 },
          { x: 1000, y: -1.5 },
          { x: 2000, y: 0 },
          { x: 3000, y: 1.5 },
        ],
      },
    ],
    caption: '2000luxで見かけの光合成量が0＝光補償点。呼吸量は3.0mg/時なので、この点でも真の光合成量は3.0mg/時',
  },

  // s012：陽生植物と陰生植物の比較（光補償点・光飽和点の違い）
  lf_rikaext01_012: {
    kind: 'lineChart',
    xLabel: '光の強さ',
    yLabel: '見かけの光合成量',
    xRange: [0, 10],
    yRange: [-2, 8],
    series: [
      {
        label: '陽生植物',
        markers: true,
        points: [
          { x: 0, y: -1.5 },
          { x: 2, y: -0.5 },
          { x: 3, y: 0 },
          { x: 5, y: 3 },
          { x: 7, y: 5.5 },
          { x: 9, y: 7 },
          { x: 10, y: 7 },
        ],
      },
      {
        label: '陰生植物',
        markers: true,
        color: '#16A34A',
        points: [
          { x: 0, y: -0.5 },
          { x: 1, y: 0 },
          { x: 3, y: 1.5 },
          { x: 5, y: 2 },
          { x: 7, y: 2 },
          { x: 10, y: 2 },
        ],
      },
    ],
    caption:
      '陽生植物は光補償点・光飽和点ともに高く強光下でよく育つ。陰生植物は光補償点が低く弱光でも生きられるが、光飽和点も低く強光下では陽生植物に及ばない',
  },

  // s013：気孔の構造（葉の断面で気孔・孔辺細胞の位置）
  lf_rikaext01_013: {
    kind: 'bioDiagram',
    template: 'leafCrossSection',
    caption: '気孔は表皮にあいた小さな穴で、三日月形の孔辺細胞2つに囲まれる。多くの植物で裏側に多い',
  },

  // s014：気孔の開閉のしくみ
  lf_rikaext01_014: {
    kind: 'bioDiagram',
    template: 'leafCrossSection',
    caption: '孔辺細胞にK+が流入→浸透圧上昇→水が入り膨らむ→気孔が開く。乾燥時はK+が流出して気孔が閉じる',
  },

  // s015：蒸散実験（基礎）ワセリンをぬる場所を変える。A何もなし・B表・C裏・D両面
  lf_rikaext01_015: {
    kind: 'barChart',
    yLabel: '水の減少量(mL)',
    bars: [
      { label: 'A なし', value: 8.0 },
      { label: 'B 表', value: 6.6 },
      { label: 'C 裏', value: 1.8 },
      { label: 'D 両面', value: 0.4 },
    ],
    caption: '表からの蒸散＝A−B＝1.4mL、裏からの蒸散＝A−C＝6.2mL、茎からの蒸散＝D＝0.4mL（合計8.0mL＝A）',
  },

  // s016：蒸散実験（応用）葉の有無で比較。A植物そのまま・B葉をすべて除去・C葉を除去し切り口にもワセリン
  lf_rikaext01_016: {
    kind: 'barChart',
    yLabel: '水の減少量(mL)',
    bars: [
      { label: 'A 葉あり', value: 9.0 },
      { label: 'B 葉なし', value: 1.2 },
      { label: 'C 葉なし+切り口封鎖', value: 0.3 },
    ],
    caption: '葉からの蒸散＝A−B＝7.8mL。茎の表面からの蒸散＝B−C＝0.9mL。Cの0.3mLは切り口周辺のわずかな蒸発',
  },

  // s017：茎の維管束（道管・師管の位置関係）
  lf_rikaext01_017: {
    kind: 'bioDiagram',
    template: 'leafCrossSection',
    caption: '道管(黄・内側)は水の通り道、師管(青・外側)は養分の通り道。葉の維管束でも道管が表側、師管が裏側に位置する',
  },

  // s023：花の基本構造（がく・花弁・おしべ・めしべ）
  lf_rikaext01_023: {
    kind: 'bioDiagram',
    template: 'flower',
    caption: '外側から　がく→花弁→おしべ(やく・花糸)→めしべ(柱頭・花柱・子房・胚珠)　の順に並ぶ',
  },

  // s024：おしべ・めしべの詳しいつくり
  lf_rikaext01_024: {
    kind: 'bioDiagram',
    template: 'flower',
    caption: 'おしべ＝やく(花粉をつくる)＋花糸。めしべ＝柱頭(花粉がつく)＋花柱＋子房(中に胚珠)',
  },

  // s026：受精と結実（子房→果実、胚珠→種子）
  lf_rikaext01_026: {
    kind: 'bioDiagram',
    template: 'flower',
    caption: '受粉後、花粉管が花柱を通って胚珠に達し受精する。胚珠は種子に、子房全体は果実になる',
  },

  // s027：種子のつくり（種皮・子葉・幼根・幼芽）
  lf_rikaext01_027: {
    kind: 'bioDiagram',
    template: 'seed',
    caption: '種皮の内側に子葉(無胚乳種子では栄養をたくわえる)・幼根・幼芽。有胚乳種子は子葉の外に胚乳をもつ',
  },

  // s028：発芽の3条件（対照実験の結果）
  lf_rikaext01_028: {
    kind: 'barChart',
    yLabel: '発芽率(%)',
    yMax: 100,
    bars: [
      { label: '水+空気+適温', value: 96 },
      { label: '空気+適温(水なし)', value: 0 },
      { label: '水+適温(空気なし)', value: 0 },
      { label: '水+空気(低温5℃)', value: 4 },
    ],
    caption: '水・空気・適当な温度の3条件がすべてそろって初めてよく発芽する。1つでも欠けるとほぼ発芽しない',
  },

  // s029：光発芽種子・暗発芽種子の発芽率比較
  lf_rikaext01_029: {
    kind: 'barChart',
    yLabel: '発芽率(%)',
    yMax: 100,
    bars: [
      { label: 'レタス・光あり', value: 92 },
      { label: 'レタス・暗所', value: 8 },
      { label: 'カボチャ・光あり', value: 15 },
      { label: 'カボチャ・暗所', value: 88 },
    ],
    caption: 'レタスは光発芽種子(光で発芽率アップ)、カボチャは暗発芽種子(光で発芽が抑えられる)',
  },

  // s030：対照実験のデザイン（変える条件は1つだけにする）
  lf_rikaext01_030: {
    kind: 'barChart',
    yLabel: '発芽率(%)',
    yMax: 100,
    bars: [
      { label: '標準(水20℃)', value: 90 },
      { label: '水の量だけ2倍', value: 88 },
      { label: '温度だけ5℃', value: 2 },
      { label: '容器だけ変更', value: 91 },
    ],
    caption: '調べたい条件（この場合は温度）だけを変え、それ以外は同じにする。容器を変えても結果はほぼ同じ＝影響なしと確認できる',
  },

  // s031：被子植物と裸子植物の種子の違い
  lf_rikaext01_031: {
    kind: 'bioDiagram',
    template: 'seed',
    caption:
      '被子植物の種子は子房(果実)に包まれて保護される。裸子植物(マツ・イチョウ・スギ)は子房がなく胚珠がむき出しで、果実はできない',
  },

  // s032：合弁花・離弁花（花弁のつながり方）
  lf_rikaext01_032: {
    kind: 'bioDiagram',
    template: 'flower',
    caption: '花弁が根元でくっついていれば合弁花(アサガオ・タンポポ)、1枚1枚離れていれば離弁花(アブラナ・サクラ)',
  },

  // s034：光合成・呼吸の入試計算演習（光の強さ2段階での測定）
  lf_rikaext01_034: {
    kind: 'lineChart',
    xLabel: '光の強さ',
    yLabel: 'CO2の出入り(mg/時、＋は吸収)',
    xRange: [0, 8],
    yRange: [-2, 8],
    series: [
      {
        label: '見かけの光合成量',
        markers: true,
        points: [
          { x: 0, y: -1.8 },
          { x: 2, y: 0.3 },
          { x: 4, y: 4.2 },
          { x: 6, y: 7.0 },
          { x: 7, y: 7.5 },
          { x: 8, y: 7.5 },
        ],
      },
    ],
    caption: '暗所での呼吸量は1.8mg/時。光の強さ7〜8で見かけの光合成量が7.5mg/時で一定＝光飽和点。真の光合成量＝7.5+1.8=9.3mg',
  },

  // s035：蒸散・維管束の入試計算総合演習
  lf_rikaext01_035: {
    kind: 'barChart',
    yLabel: '水の減少量(mL)',
    bars: [
      { label: 'A なし', value: 12.0 },
      { label: 'B 表', value: 9.4 },
      { label: 'C 裏', value: 3.2 },
      { label: 'D 両面', value: 0.6 },
    ],
    caption: '表からの蒸散＝A−B＝2.6mL、裏からの蒸散＝A−C＝8.8mL、茎からの蒸散＝D＝0.6mL（合計12.0mL＝A）',
  },
};
