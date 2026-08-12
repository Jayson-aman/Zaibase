import type { Figure } from './figures';

// 高校受験 社会「日本の諸地域・地形図の読み取り」拡張ユニット
// （koko_shakai_s111〜koko_shakai_s150）の図解。
// キーは lessons-koko-shakai-ext04.ts の figureId と対応。
// japanMap の座標は data/japanPrefectures.ts と同じ viewBox 0 0 300 420。
// 統計値は農林水産省・経済産業省・国土交通省・総務省・気象庁の公表資料をもとにした概数。
export const lessonFigsKokoShakaiExt04: Record<string, Figure> = {
  // s111：九州の主な火山とシラス台地
  lf_kokoshakaiext04_111: {
    kind: 'japanMap',
    markers: [
      { x: 37, y: 275, label: '雲仙岳' },
      { x: 53, y: 279, label: '阿蘇山' },
      { x: 53, y: 296, label: '霧島山' },
      { x: 46, y: 301, label: '桜島' },
      { x: 47, y: 311, label: 'シラス台地' },
    ],
    caption: '九州には日本の活火山の約3分の1が集まる。阿蘇山には世界最大級のカルデラ（南北約25km・東西約18km）があり、南部にはシラス台地が広がる',
  },

  // s112：鹿児島県の農業産出額の内訳（畜産の割合の高さ）
  lf_kokoshakaiext04_112: {
    kind: 'pieChart',
    slices: [
      { label: '畜産 65%', value: 65, color: '#0369A1' },
      { label: '野菜 13%', value: 13, color: '#0EA5E9' },
      { label: 'いも類・工芸農作物 11%', value: 11, color: '#38BDF8' },
      { label: '米 4%', value: 4, color: '#7DD3FC' },
      { label: 'その他 7%', value: 7, color: '#CBD5E1' },
    ],
    caption: '鹿児島県の農業産出額の約3分の2は畜産（豚・肉用牛・ブロイラー）。全国平均の畜産の割合は4割弱で、シラス台地の水はけのよさが畜産中心の農業を生んだ',
  },

  // s114：南西諸島（約1,200kmにわたって連なる島々）
  lf_kokoshakaiext04_114: {
    kind: 'japanMap',
    markers: [
      { x: 48, y: 313, label: '屋久島' },
      { x: 44, y: 346, label: '奄美大島' },
      { x: 46, y: 376, label: '沖縄島' },
      { x: 18, y: 391, label: '石垣島・与那国島' },
    ],
    caption: '南西諸島は九州の南から台湾の近くまで約1,200kmにわたって連なる。地図では沖縄が左下のインセットに描かれるため、位置はおおよそのもの',
  },

  // s116：中国四国の三地域の年降水量（気象庁平年値の概数）
  lf_kokoshakaiext04_116: {
    kind: 'barChart',
    yLabel: '年降水量(mm)',
    yMax: 3000,
    bars: [
      { label: '鳥取(山陰)', value: 1930, color: '#0369A1' },
      { label: '高松(瀬戸内)', value: 1150, color: '#7DD3FC' },
      { label: '高知(南四国)', value: 2670, color: '#0284C7' },
    ],
    caption: '瀬戸内の高松は、冬の北西季節風を中国山地に、夏の南東季節風を四国山地にさえぎられるため、山陰・南四国より降水量が大幅に少ない',
  },

  // s119：本州四国連絡橋の三ルート
  lf_kokoshakaiext04_119: {
    kind: 'japanMap',
    markers: [
      { x: 83, y: 255, label: '尾道—今治' },
      { x: 100, y: 244, label: '児島—坂出' },
      { x: 110, y: 246, label: '神戸—鳴門' },
    ],
    caption: '西から順に、尾道—今治（しまなみ海道・1999年）、児島—坂出（瀬戸大橋・1988年・唯一の鉄道併用橋）、神戸—鳴門（明石海峡大橋・1998年）',
  },

  // s121：近畿地方の主な地形
  lf_kokoshakaiext04_121: {
    kind: 'japanMap',
    markers: [
      { x: 128, y: 215, label: '若狭湾' },
      { x: 134, y: 230, label: '琵琶湖' },
      { x: 119, y: 243, label: '大阪平野' },
      { x: 143, y: 250, label: '志摩半島' },
      { x: 128, y: 257, label: '紀伊山地' },
    ],
    caption: '琵琶湖の水は瀬田川→宇治川→淀川と流れ、大阪平野をうるおす。若狭湾と志摩半島はリアス海岸、紀伊山地は年降水量4,000mm級の多雨地域',
  },

  // s123：阪神工業地帯の業種別出荷額の割合
  lf_kokoshakaiext04_123: {
    kind: 'pieChart',
    slices: [
      { label: '機械 37%', value: 37, color: '#0369A1' },
      { label: '金属 21%', value: 21, color: '#0EA5E9' },
      { label: '化学 17%', value: 17, color: '#38BDF8' },
      { label: '食料品 11%', value: 11, color: '#7DD3FC' },
      { label: 'せんい 1%', value: 1, color: '#BAE6FD' },
      { label: 'その他 13%', value: 13, color: '#CBD5E1' },
    ],
    caption: '阪神工業地帯は他の工業地帯にくらべ金属の割合が高く、せんいの割合もわずかに残る。中小工場の多さも特徴',
  },

  // s126：中部地方の三つの地域
  lf_kokoshakaiext04_126: {
    kind: 'japanMap',
    markers: [
      { x: 150, y: 199, label: '北陸(豪雪)' },
      { x: 162, y: 215, label: '中央高地(内陸性)' },
      { x: 158, y: 235, label: '東海(太平洋側)' },
    ],
    caption: '中部地方は日本アルプスを境に三つに分かれる。北陸は冬に大雪、中央高地は降水量が少なく気温差が大きい、東海は夏に多雨で冬は乾いた晴天',
  },

  // s127：主な工業地帯・地域の製造品出荷額
  lf_kokoshakaiext04_127: {
    kind: 'barChart',
    yLabel: '製造品出荷額(兆円)',
    yMax: 70,
    bars: [
      { label: '中京', value: 60, color: '#0369A1' },
      { label: '阪神', value: 33, color: '#0284C7' },
      { label: '瀬戸内', value: 30, color: '#0EA5E9' },
      { label: '京浜', value: 26, color: '#38BDF8' },
      { label: '京葉', value: 13, color: '#7DD3FC' },
    ],
    caption: '中京工業地帯は製造品出荷額が全国第1位で、第2位の阪神の2倍近い。自動車を中心とする機械工業が出荷額の半分以上を占める（金額は概数）',
  },

  // s129：レタスの月別出荷量（長野と茨城の対比）
  lf_kokoshakaiext04_129: {
    kind: 'lineChart',
    xLabel: '月',
    yLabel: '出荷量(千t)',
    xRange: [1, 12],
    yRange: [0, 35],
    series: [
      {
        label: '長野県(高原の抑制栽培)',
        color: '#0369A1',
        markers: true,
        points: [
          { x: 1, y: 0 },
          { x: 2, y: 0 },
          { x: 3, y: 0 },
          { x: 4, y: 2 },
          { x: 5, y: 20 },
          { x: 6, y: 29 },
          { x: 7, y: 33 },
          { x: 8, y: 32 },
          { x: 9, y: 26 },
          { x: 10, y: 16 },
          { x: 11, y: 2 },
          { x: 12, y: 0 },
        ],
      },
      {
        label: '茨城県(平地の産地)',
        color: '#F59E0B',
        markers: true,
        points: [
          { x: 1, y: 8 },
          { x: 2, y: 6 },
          { x: 3, y: 8 },
          { x: 4, y: 14 },
          { x: 5, y: 10 },
          { x: 6, y: 1 },
          { x: 7, y: 0 },
          { x: 8, y: 0 },
          { x: 9, y: 1 },
          { x: 10, y: 8 },
          { x: 11, y: 18 },
          { x: 12, y: 16 },
        ],
      },
    ],
    caption: '暑さに弱いレタスは、夏は平地でつくれない。標高1,000m級の長野の高原が6〜9月を、茨城など平地の産地が春と秋〜冬を担い、産地が交代する（数値は概数）',
  },

  // s131：関東平野と利根川
  lf_kokoshakaiext04_131: {
    kind: 'japanMap',
    markers: [
      { x: 183, y: 210, label: '関東平野' },
      { x: 200, y: 219, label: '利根川河口(銚子)' },
      { x: 186, y: 222, label: '東京' },
      { x: 193, y: 233, label: '房総半島' },
    ],
    caption: '関東平野は面積約17,000km²で日本最大。利根川は流域面積約16,840km²で日本一だが、長さは信濃川に次ぐ第2位。江戸時代の東遷工事で河口が銚子になった',
  },

  // s132：昼夜間人口比率（2020年国勢調査の概数）
  lf_kokoshakaiext04_132: {
    kind: 'barChart',
    yLabel: '昼夜間人口比率(%)',
    yMax: 130,
    bars: [
      { label: '東京都', value: 119, color: '#0369A1' },
      { label: '大阪府', value: 104, color: '#0284C7' },
      { label: '神奈川県', value: 90, color: '#7DD3FC' },
      { label: '千葉県', value: 90, color: '#7DD3FC' },
      { label: '埼玉県', value: 88, color: '#7DD3FC' },
    ],
    caption: '100をこえると通勤・通学で流入する人が多い（東京都・大阪府）。100を下回る埼玉・千葉・神奈川は、東京へ通う人が多い住宅地としての性格が強い',
  },

  // s133：京葉工業地域の業種別出荷額の割合
  lf_kokoshakaiext04_133: {
    kind: 'pieChart',
    slices: [
      { label: '化学 40%', value: 40, color: '#0369A1' },
      { label: '金属 21%', value: 21, color: '#0EA5E9' },
      { label: '食料品 15%', value: 15, color: '#38BDF8' },
      { label: '機械 13%', value: 13, color: '#7DD3FC' },
      { label: 'その他 11%', value: 11, color: '#CBD5E1' },
    ],
    caption: '京葉工業地域は化学が約4割で、全国の工業地域の中でもきわだって高い。市原市の石油化学コンビナートと君津市の製鉄所が中心（数値は概数）',
  },

  // s136：東北地方の自然（やませ・奥羽山脈・三陸海岸）
  lf_kokoshakaiext04_136: {
    kind: 'japanMap',
    markers: [
      { x: 224, y: 137, label: 'やませ(北東風)' },
      { x: 199, y: 155, label: '奥羽山脈' },
      { x: 220, y: 160, label: '三陸海岸(リアス)' },
      { x: 186, y: 168, label: '庄内平野' },
    ],
    caption: 'やませは夏に北東から吹きこむ冷たく湿った風で、奥羽山脈にさえぎられて太平洋側にだけ冷害をもたらす。日本海側の庄内平野は安定した米どころ',
  },

  // s137：米の収穫量上位県
  lf_kokoshakaiext04_137: {
    kind: 'barChart',
    yLabel: '米の収穫量(万t)',
    yMax: 70,
    bars: [
      { label: '新潟', value: 63, color: '#0369A1' },
      { label: '北海道', value: 57, color: '#0284C7' },
      { label: '秋田', value: 46, color: '#0EA5E9' },
      { label: '山形', value: 37, color: '#38BDF8' },
      { label: '宮城', value: 33, color: '#7DD3FC' },
    ],
    caption: '上位5位のうち3県が東北地方。東北6県で全国の米の産出額のおよそ4分の1を占める。北海道は客土と寒さに強い品種の開発で第2位に（数値は概数）',
  },

  // s140：北海道の主な農業地域
  lf_kokoshakaiext04_140: {
    kind: 'japanMap',
    markers: [
      { x: 227, y: 86, label: '石狩平野(稲作)' },
      { x: 250, y: 91, label: '十勝平野(畑作)' },
      { x: 264, y: 80, label: '根釧台地(酪農)' },
      { x: 269, y: 60, label: '知床半島' },
    ],
    caption: '石狩平野は泥炭地を客土で改良した稲作地帯、十勝平野は輪作による大規模畑作、根釧台地は海霧で気温が上がらず酪農。知床は2005年に世界自然遺産に登録',
  },

  // s141：農家1戸あたりの耕地面積
  lf_kokoshakaiext04_141: {
    kind: 'barChart',
    yLabel: '1戸あたりの耕地面積(ha)',
    yMax: 35,
    bars: [
      { label: '北海道', value: 30, color: '#0369A1' },
      { label: '全国平均', value: 3.3, color: '#38BDF8' },
      { label: '都府県', value: 2.3, color: '#7DD3FC' },
    ],
    caption: '北海道の農家1戸あたりの耕地面積は約30haで、都府県平均（約2.3ha）の10倍以上。開拓期に大きな区画で土地が割り当てられたことが背景にある（数値は概数）',
  },

  // s145：同じ図上4cmが、縮尺によって実際は何mになるか
  lf_kokoshakaiext04_145: {
    kind: 'barChart',
    yLabel: '実際の距離(m)',
    yMax: 4500,
    bars: [
      { label: '2万5千分の1', value: 1000, color: '#0369A1' },
      { label: '5万分の1', value: 2000, color: '#0284C7' },
      { label: '10万分の1', value: 4000, color: '#0EA5E9' },
    ],
    caption: '図上4cm × 縮尺の分母 で実際の距離が求まる。4×25,000＝100,000cm＝1,000m、4×50,000＝200,000cm＝2,000m、4×100,000＝400,000cm＝4,000m',
  },

  // s146：等高線の間隔（縮尺ごと）
  lf_kokoshakaiext04_146: {
    kind: 'barChart',
    yLabel: '等高線の間隔(m)',
    yMax: 120,
    bars: [
      { label: '2.5万・主曲線', value: 10, color: '#0EA5E9' },
      { label: '2.5万・計曲線', value: 50, color: '#0369A1' },
      { label: '5万・主曲線', value: 20, color: '#38BDF8' },
      { label: '5万・計曲線', value: 100, color: '#0284C7' },
    ],
    caption: '2万5千分の1は主曲線10m・計曲線50m、5万分の1は主曲線20m・計曲線100m。どちらも計曲線は主曲線5本ごと（10×5＝50、20×5＝100）',
  },

  // s147：断面図（2万5千分の1で図上4cm＝実際1,000m の区間）
  lf_kokoshakaiext04_147: {
    kind: 'lineChart',
    xLabel: '水平距離(m)',
    yLabel: '標高(m)',
    xRange: [0, 1000],
    yRange: [0, 160],
    series: [
      {
        label: 'A—B間の断面',
        color: '#0369A1',
        markers: true,
        points: [
          { x: 0, y: 20 },
          { x: 100, y: 40 },
          { x: 200, y: 70 },
          { x: 300, y: 100 },
          { x: 400, y: 130 },
          { x: 500, y: 150 },
          { x: 600, y: 140 },
          { x: 700, y: 110 },
          { x: 800, y: 80 },
          { x: 900, y: 60 },
          { x: 1000, y: 50 },
        ],
      },
    ],
    caption: '2万5千分の1の地形図で図上4cm（＝実際1,000m）の断面。A(20m)から500m進んで頂上150m、B(50m)へ下る。縦軸を強調して描いているので、実際よりも急に見える（垂直誇張）',
  },
};
