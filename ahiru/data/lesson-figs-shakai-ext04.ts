import type { Figure } from './figures';

// 中学受験 社会「地理：貿易・交通・都道府県」拡張ユニット（shakai_s111〜shakai_s150）の
// 教科書用図解。キーは lessons-shakai-ext04.ts の figureId と対応する。
// japanMap の座標は data/japanPrefectures.ts と同じ viewBox 0 0 300 420。
// 統計はいずれも「近年の代表的な数値（おおよそ）」。年によって順位・割合は動くため、
// キャプションで「年による変動」を必ず補っている。
export const lessonFigsShakaiExt04: Record<string, Figure> = {
  // s111：貿易相手国（輸出＋輸入の合計に占める割合）
  lf_shakaiext04_111: {
    kind: 'pieChart',
    slices: [
      { label: '中国 20%', value: 20 },
      { label: 'アメリカ 15%', value: 15 },
      { label: 'オーストラリア 5%', value: 5 },
      { label: '韓国 5%', value: 5 },
      { label: '台湾 5%', value: 5 },
      { label: 'その他 50%', value: 50 },
    ],
    caption: '輸出額と輸入額を合わせた「貿易総額」で見ると、日本の最大の貿易相手国は中国、2位はアメリカ（近年のおおよその割合）',
  },
  lf_shakaiext04_111b: {
    kind: 'barChart',
    yLabel: '兆円',
    bars: [
      { label: '中国', value: 24.4 },
      { label: 'アメリカ', value: 11.5 },
      { label: 'オーストラリア', value: 9.4 },
      { label: 'アラブ首長国', value: 5.0 },
      { label: 'サウジ', value: 4.6 },
      { label: '台湾', value: 4.3 },
    ],
    caption: '日本の輸入相手国（近年の年間輸入額・兆円）。輸入では中国が断然の1位で、資源を売ってくれる国が上位に入る',
  },

  // s112：地域別に見た日本の輸出先
  lf_shakaiext04_112: {
    kind: 'pieChart',
    slices: [
      { label: 'アジア 55%', value: 55 },
      { label: '北アメリカ 23%', value: 23 },
      { label: 'ヨーロッパ 12%', value: 12 },
      { label: 'その他 10%', value: 10 },
    ],
    caption: '日本の輸出先を地域別に見ると、半分以上がアジア。「アメリカが最大の相手」という印象より、まずアジア全体が大きいことをおさえる',
  },

  // s113：日本の輸出品目
  lf_shakaiext04_113: {
    kind: 'pieChart',
    slices: [
      { label: '機械類 37%', value: 37 },
      { label: '自動車 16%', value: 16 },
      { label: '鉄鋼 4%', value: 4 },
      { label: '自動車部品 4%', value: 4 },
      { label: 'プラスチック 3%', value: 3 },
      { label: 'その他 36%', value: 36 },
    ],
    caption: '日本の輸出品目（近年のおおよその割合）。機械類と自動車で半分以上をしめる。機械類には半導体等製造装置・電気機器などが含まれる',
  },

  // s114：日本の輸入品目
  lf_shakaiext04_114: {
    kind: 'pieChart',
    slices: [
      { label: '機械類 25%', value: 25 },
      { label: '原油 10%', value: 10 },
      { label: '液化天然ガス 6%', value: 6 },
      { label: '石炭 5%', value: 5 },
      { label: '医薬品 4%', value: 4 },
      { label: '衣類 3%', value: 3 },
      { label: 'その他 47%', value: 47 },
    ],
    caption: '日本の輸入品目（近年のおおよその割合）。1位は原油ではなく機械類。原油・液化天然ガス・石炭の割合は原油価格で大きく上下する',
  },

  // s115：原油と液化天然ガスの輸入相手国
  lf_shakaiext04_115: {
    kind: 'barChart',
    yLabel: '%',
    bars: [
      { label: 'サウジ', value: 40 },
      { label: 'アラブ首長国', value: 38 },
      { label: 'クウェート', value: 8 },
      { label: 'カタール', value: 7 },
      { label: 'その他', value: 7 },
    ],
    caption: '原油の輸入相手国。上位はすべて中東（西アジア）の国で、中東への依存度は約95%にのぼる',
  },
  lf_shakaiext04_115b: {
    kind: 'barChart',
    yLabel: '%',
    bars: [
      { label: 'オーストラリア', value: 42 },
      { label: 'マレーシア', value: 16 },
      { label: 'ロシア', value: 9 },
      { label: 'アメリカ', value: 8 },
      { label: 'カタール', value: 5 },
      { label: 'その他', value: 20 },
    ],
    caption: '液化天然ガス（LNG）の輸入相手国。原油とちがい1位はオーストラリアで、中東依存度は低い。石炭・鉄鉱石もオーストラリアが1位',
  },

  // s116：食料自給率と小麦の輸入先
  lf_shakaiext04_116: {
    kind: 'barChart',
    yLabel: '%',
    bars: [
      { label: '米', value: 98 },
      { label: '野菜', value: 80 },
      { label: '肉類', value: 53 },
      { label: '果実', value: 39 },
      { label: '小麦', value: 15 },
      { label: '大豆', value: 6 },
    ],
    caption: '品目別の食料自給率。米はほぼ自給できるが小麦・大豆は大部分を輸入。カロリーベースの総合食料自給率は約38%',
  },
  lf_shakaiext04_116b: {
    kind: 'barChart',
    yLabel: '%',
    bars: [
      { label: 'アメリカ', value: 45 },
      { label: 'カナダ', value: 35 },
      { label: 'オーストラリア', value: 20 },
    ],
    caption: '小麦の輸入先はアメリカ・カナダ・オーストラリアの3か国でほぼ100%。大豆・とうもろこしもアメリカが最大の相手国',
  },

  // s117：加工貿易の変化（輸入にしめる工業製品の割合）
  lf_shakaiext04_117: {
    kind: 'barChart',
    xLabel: '年',
    yLabel: '%',
    bars: [
      { label: '1960', value: 23 },
      { label: '1980', value: 23 },
      { label: '1990', value: 50 },
      { label: '2000', value: 61 },
      { label: '2020', value: 62 },
    ],
    caption: '日本の輸入額にしめる工業製品の割合。昔は2割ほどだったが、今では6割をこえる。「原料を輸入して製品を輸出する」加工貿易の形がくずれてきた',
  },

  // s118：製造業の海外生産比率
  lf_shakaiext04_118: {
    kind: 'barChart',
    xLabel: '年度',
    yLabel: '%',
    bars: [
      { label: '1990', value: 6 },
      { label: '2000', value: 12 },
      { label: '2010', value: 18 },
      { label: '2020', value: 23 },
      { label: '2022', value: 26 },
    ],
    caption: '日本の製造業が海外の工場でつくる割合（海外生産比率）。年々上がっており、国内の工場や雇用が減る「産業の空洞化」につながった',
  },

  // s119：アメリカ向け輸出品の内訳
  lf_shakaiext04_119: {
    kind: 'pieChart',
    slices: [
      { label: '自動車 35%', value: 35 },
      { label: '原動機 5%', value: 5 },
      { label: '建設用機械 4%', value: 4 },
      { label: '自動車部品 4%', value: 4 },
      { label: 'その他 52%', value: 52 },
    ],
    caption: 'アメリカ向け輸出の3分の1以上が自動車。1980年代の日米貿易摩擦の中心も自動車で、日本は輸出の自主規制と現地生産で対応した',
  },

  // s120：為替レートの移り変わり
  lf_shakaiext04_120: {
    kind: 'lineChart',
    xLabel: '年',
    yLabel: '円／1ドル',
    xRange: [1970, 2025],
    yRange: [0, 380],
    series: [
      {
        label: '1ドル＝何円',
        markers: true,
        points: [
          { x: 1970, y: 360 },
          { x: 1975, y: 297 },
          { x: 1985, y: 239 },
          { x: 1990, y: 145 },
          { x: 1995, y: 94 },
          { x: 2000, y: 108 },
          { x: 2011, y: 80 },
          { x: 2015, y: 121 },
          { x: 2022, y: 131 },
          { x: 2024, y: 151 },
        ],
      },
    ],
    caption: '1ドル＝何円かの移り変わり。グラフが下がる＝円高（輸入に有利）、上がる＝円安（輸出に有利）。1973年に変動相場制へ、1985年のプラザ合意で急な円高になった',
  },

  // s121：航空輸送と海上輸送の比べ方
  lf_shakaiext04_121: {
    kind: 'barChart',
    yLabel: '%',
    bars: [
      { label: '船・金額', value: 79 },
      { label: '船・重量', value: 99 },
      { label: '航空・金額', value: 21 },
      { label: '航空・重量', value: 1 },
    ],
    caption: '日本の貿易を「金額」と「重さ」で分けたようす。飛行機は重さではごくわずかなのに、金額では2割前後をしめる＝軽くて高価なものを運んでいる',
  },

  // s122：輸出額の多い港・空港
  lf_shakaiext04_122: {
    kind: 'barChart',
    yLabel: '兆円',
    bars: [
      { label: '名古屋港', value: 12.9 },
      { label: '成田空港', value: 12.8 },
      { label: '横浜港', value: 7.2 },
      { label: '東京港', value: 6.6 },
      { label: '神戸港', value: 6.5 },
      { label: '関西空港', value: 5.9 },
    ],
    caption: '輸出額の多い港・空港（近年の年間輸出額・兆円）。1位は自動車を積み出す名古屋港。成田国際空港がすぐ後ろにせまる',
  },

  // s123：輸入額・貿易額合計の多い港・空港
  lf_shakaiext04_123: {
    kind: 'barChart',
    yLabel: '兆円',
    bars: [
      { label: '成田空港', value: 20.2 },
      { label: '東京港', value: 14.6 },
      { label: '名古屋港', value: 8.4 },
      { label: '大阪港', value: 6.6 },
      { label: '横浜港', value: 5.7 },
      { label: '千葉港', value: 5.4 },
    ],
    caption: '輸入額の多い港・空港（近年の年間輸入額・兆円）。1位は成田国際空港。医薬品・通信機・集積回路など軽くて高価な品が集まる',
  },
  lf_shakaiext04_123b: {
    kind: 'barChart',
    yLabel: '兆円',
    bars: [
      { label: '成田空港', value: 33.0 },
      { label: '名古屋港', value: 21.3 },
      { label: '東京港', value: 21.2 },
      { label: '横浜港', value: 12.9 },
      { label: '大阪港', value: 11.6 },
      { label: '神戸港', value: 11.0 },
    ],
    caption: '輸出額＋輸入額（貿易額合計）で見ると1位は成田国際空港。「日本最大の貿易港」と問われたら空港が答えになることがある',
  },

  // s124：主な貿易港・空港の位置
  lf_shakaiext04_124: {
    kind: 'japanMap',
    markers: [
      { x: 194, y: 222, label: '成田' },
      { x: 186, y: 246, label: '東京' },
      { x: 184, y: 232, label: '横浜' },
      { x: 148, y: 239, label: '名古屋' },
      { x: 114, y: 238, label: '神戸' },
      { x: 124, y: 249, label: '関西' },
      { x: 49, y: 262, label: '博多' },
    ],
    caption: '主な貿易港・空港の位置。太平洋ベルトの工業地帯に沿って並んでいることを地図で確かめる',
  },

  // s125：東海道新幹線
  lf_shakaiext04_125: {
    kind: 'japanMap',
    markers: [
      { x: 187, y: 247, label: '東京' },
      { x: 168, y: 236, label: '静岡' },
      { x: 148, y: 237, label: '名古屋' },
      { x: 122, y: 243, label: '新大阪' },
    ],
    caption: '1964年開業の東海道新幹線（東京〜新大阪 約515km）。人口の多い太平洋ベルトを結び、日本の大動脈となった',
  },

  // s126：全国の新幹線網
  lf_shakaiext04_126: {
    kind: 'japanMap',
    markers: [
      { x: 197, y: 110, label: '新函館北斗' },
      { x: 203, y: 122, label: '新青森' },
      { x: 187, y: 247, label: '東京' },
      { x: 144, y: 199, label: '金沢' },
      { x: 122, y: 243, label: '新大阪' },
      { x: 50, y: 262, label: '博多' },
      { x: 44, y: 320, label: '鹿児島中央' },
    ],
    caption: '新幹線は北は新函館北斗、南は鹿児島中央まで。四国には新幹線が1本も通っていない点が入試でねらわれる',
  },

  // s127：貨物輸送の分担率とCO2
  lf_shakaiext04_127: {
    kind: 'barChart',
    yLabel: '%',
    bars: [
      { label: '自動車', value: 55 },
      { label: '内航海運', value: 40 },
      { label: '鉄道', value: 5 },
      { label: '航空', value: 0.2 },
    ],
    caption: '国内の貨物輸送の分担率（トンキロ）。トラックが半分以上、船が約4割で、鉄道は5%ほどしかない',
  },
  lf_shakaiext04_127b: {
    kind: 'barChart',
    yLabel: 'g',
    bars: [
      { label: 'トラック', value: 216 },
      { label: '船', value: 43 },
      { label: '鉄道', value: 20 },
    ],
    caption: '1トンの荷物を1km運ぶときに出る二酸化炭素の量（g）。鉄道・船に切りかえる「モーダルシフト」が進められている理由',
  },

  // s128：リニア中央新幹線
  lf_shakaiext04_128: {
    kind: 'japanMap',
    markers: [
      { x: 187, y: 247, label: '品川' },
      { x: 170, y: 226, label: '山梨' },
      { x: 168, y: 232, label: '静岡' },
      { x: 148, y: 237, label: '名古屋' },
    ],
    caption: 'リニア中央新幹線（品川〜名古屋）の予定ルート。南アルプスをトンネルでぬけるため、静岡県では大井川の水量への影響が問題になった',
  },

  // s129：高速道路網
  lf_shakaiext04_129: {
    kind: 'japanMap',
    markers: [
      { x: 203, y: 125, label: '青森' },
      { x: 187, y: 247, label: '東京' },
      { x: 148, y: 237, label: '小牧' },
      { x: 114, y: 238, label: '西宮' },
      { x: 44, y: 320, label: '鹿児島' },
    ],
    caption: '高速道路網の骨組み。名神（小牧〜西宮）・東名（東京〜小牧）が最初につくられ、その後、東北自動車道や九州自動車道が南北にのびた',
  },

  // s130：本州四国連絡橋・海底トンネル
  lf_shakaiext04_130: {
    kind: 'japanMap',
    markers: [
      { x: 200, y: 116, label: '青函' },
      { x: 114, y: 242, label: '明石' },
      { x: 100, y: 245, label: '瀬戸大橋' },
      { x: 87, y: 254, label: 'しまなみ' },
      { x: 58, y: 257, label: '関門' },
    ],
    caption: '本州と北海道は青函トンネル、本州と四国は3ルート、本州と九州は関門トンネル・関門橋で結ばれている',
  },

  // s131：宅配便の増加
  lf_shakaiext04_131: {
    kind: 'barChart',
    xLabel: '年度',
    yLabel: '億個',
    bars: [
      { label: '2010', value: 32.2 },
      { label: '2015', value: 37.5 },
      { label: '2019', value: 43.2 },
      { label: '2021', value: 49.5 },
      { label: '2022', value: 50.1 },
    ],
    caption: '宅配便の取扱個数の変化。インターネット通信販売の広がりで年間50億個をこえた。再配達とドライバー不足が大きな課題',
  },

  // s132：8地方区分
  lf_shakaiext04_132: {
    kind: 'japanMap',
    markers: [
      { x: 240, y: 80, label: '北海道' },
      { x: 200, y: 150, label: '東北' },
      { x: 192, y: 214, label: '関東' },
      { x: 155, y: 212, label: '中部' },
      { x: 126, y: 240, label: '近畿' },
      { x: 84, y: 234, label: '中国' },
      { x: 95, y: 264, label: '四国' },
      { x: 48, y: 278, label: '九州' },
    ],
    caption: '8地方区分。北海道1・東北6・関東7・中部9・近畿7・中国5・四国4・九州8で合計47',
  },

  // s133：北海道地方と東北地方
  lf_shakaiext04_133: {
    kind: 'japanMap',
    markers: [
      { x: 240, y: 78, label: '札幌' },
      { x: 203, y: 125, label: '青森' },
      { x: 197, y: 145, label: '秋田' },
      { x: 216, y: 151, label: '盛岡' },
      { x: 191, y: 172, label: '山形' },
      { x: 210, y: 169, label: '仙台' },
      { x: 193, y: 192, label: '福島' },
    ],
    caption: '北海道地方と東北地方の県庁所在地。岩手→盛岡市、宮城→仙台市、北海道→札幌市の3つは名前がちがうので要注意',
  },

  // s134：関東地方
  lf_shakaiext04_134: {
    kind: 'japanMap',
    markers: [
      { x: 197, y: 208, label: '水戸' },
      { x: 188, y: 203, label: '宇都宮' },
      { x: 175, y: 207, label: '前橋' },
      { x: 179, y: 218, label: 'さいたま' },
      { x: 193, y: 228, label: '千葉' },
      { x: 188, y: 247, label: '東京' },
      { x: 182, y: 232, label: '横浜' },
    ],
    caption: '関東地方は1都6県。7つのうち5つ（茨城・栃木・群馬・埼玉・神奈川）で県名と県庁所在地名がちがう',
  },

  // s135：中部地方（北陸）
  lf_shakaiext04_135: {
    kind: 'japanMap',
    markers: [
      { x: 173, y: 187, label: '新潟' },
      { x: 149, y: 205, label: '富山' },
      { x: 143, y: 198, label: '金沢' },
      { x: 131, y: 222, label: '福井' },
    ],
    caption: '北陸は新潟・富山・石川・福井の4県。県名と県庁所在地名がちがうのは石川県（金沢市）だけ',
  },

  // s136：中部地方（中央高地・東海）
  lf_shakaiext04_136: {
    kind: 'japanMap',
    markers: [
      { x: 162, y: 214, label: '長野' },
      { x: 170, y: 224, label: '甲府' },
      { x: 146, y: 221, label: '岐阜' },
      { x: 168, y: 237, label: '静岡' },
      { x: 148, y: 238, label: '名古屋' },
    ],
    caption: '中央高地は長野・山梨・岐阜、東海は静岡・愛知・岐阜南部。山梨→甲府市、愛知→名古屋市の2つが名前のちがう県',
  },

  // s137：近畿地方
  lf_shakaiext04_137: {
    kind: 'japanMap',
    markers: [
      { x: 139, y: 248, label: '津' },
      { x: 133, y: 231, label: '大津' },
      { x: 122, y: 229, label: '京都' },
      { x: 122, y: 244, label: '大阪' },
      { x: 113, y: 236, label: '神戸' },
      { x: 130, y: 250, label: '奈良' },
      { x: 124, y: 258, label: '和歌山' },
    ],
    caption: '近畿地方は2府5県。三重→津市、滋賀→大津市、兵庫→神戸市の3つが県名とちがう県庁所在地',
  },

  // s138：中国地方
  lf_shakaiext04_138: {
    kind: 'japanMap',
    markers: [
      { x: 98, y: 228, label: '鳥取' },
      { x: 81, y: 227, label: '松江' },
      { x: 99, y: 240, label: '岡山' },
      { x: 82, y: 247, label: '広島' },
      { x: 66, y: 252, label: '山口' },
    ],
    caption: '中国地方は5県。日本海側が山陰（鳥取・島根）、瀬戸内海側が山陽（岡山・広島・山口）。島根→松江市だけが名前のちがう県',
  },

  // s139：四国地方
  lf_shakaiext04_139: {
    kind: 'japanMap',
    markers: [
      { x: 106, y: 256, label: '徳島' },
      { x: 101, y: 248, label: '高松' },
      { x: 82, y: 263, label: '松山' },
      { x: 90, y: 270, label: '高知' },
    ],
    caption: '四国地方は4県。香川→高松市、愛媛→松山市の2つが名前のちがう県。香川県は日本で最も面積が小さい県',
  },

  // s140：九州地方
  lf_shakaiext04_140: {
    kind: 'japanMap',
    markers: [
      { x: 50, y: 262, label: '福岡' },
      { x: 41, y: 268, label: '佐賀' },
      { x: 33, y: 265, label: '長崎' },
      { x: 48, y: 283, label: '熊本' },
      { x: 65, y: 270, label: '大分' },
      { x: 62, y: 289, label: '宮崎' },
      { x: 44, y: 323, label: '鹿児島' },
      { x: 43, y: 379, label: '那覇' },
    ],
    caption: '九州地方は8県（沖縄をふくむ）。名前がちがうのは沖縄県（那覇市）だけ。福岡県の県庁所在地は北九州市ではなく福岡市',
  },

  // s141：内陸8県
  lf_shakaiext04_141: {
    kind: 'japanMap',
    markers: [
      { x: 188, y: 203, label: '栃木' },
      { x: 175, y: 207, label: '群馬' },
      { x: 180, y: 218, label: '埼玉' },
      { x: 170, y: 225, label: '山梨' },
      { x: 162, y: 214, label: '長野' },
      { x: 146, y: 221, label: '岐阜' },
      { x: 133, y: 232, label: '滋賀' },
      { x: 129, y: 250, label: '奈良' },
    ],
    caption: '海に面していない内陸県は8つ（栃木・群馬・埼玉・山梨・長野・岐阜・滋賀・奈良）。茨城県は太平洋に面するので内陸県ではない',
  },

  // s142：県名と県庁所在地名がちがう県（東日本）
  lf_shakaiext04_142: {
    kind: 'japanMap',
    markers: [
      { x: 240, y: 78, label: '札幌' },
      { x: 216, y: 151, label: '盛岡' },
      { x: 210, y: 169, label: '仙台' },
      { x: 197, y: 208, label: '水戸' },
      { x: 188, y: 203, label: '宇都宮' },
      { x: 175, y: 207, label: '前橋' },
      { x: 179, y: 218, label: 'さいたま' },
      { x: 182, y: 232, label: '横浜' },
      { x: 170, y: 225, label: '甲府' },
    ],
    caption: '東日本で県名と県庁所在地名がちがうところ（北海道・岩手・宮城・茨城・栃木・群馬・埼玉・神奈川・山梨）',
  },
  lf_shakaiext04_142b: {
    kind: 'japanMap',
    markers: [
      { x: 143, y: 198, label: '金沢' },
      { x: 148, y: 238, label: '名古屋' },
      { x: 139, y: 248, label: '津' },
      { x: 133, y: 231, label: '大津' },
      { x: 113, y: 236, label: '神戸' },
      { x: 81, y: 227, label: '松江' },
      { x: 101, y: 248, label: '高松' },
      { x: 82, y: 263, label: '松山' },
      { x: 43, y: 379, label: '那覇' },
    ],
    caption: '西日本で県名と県庁所在地名がちがうところ（石川・愛知・三重・滋賀・兵庫・島根・香川・愛媛・沖縄）',
  },

  // s143：面積の大きい都道府県・小さい都道府県
  lf_shakaiext04_143: {
    kind: 'japanMap',
    markers: [
      { x: 240, y: 78, label: '北海道' },
      { x: 216, y: 151, label: '岩手' },
      { x: 193, y: 192, label: '福島' },
      { x: 162, y: 214, label: '長野' },
      { x: 173, y: 187, label: '新潟' },
      { x: 101, y: 248, label: '香川' },
    ],
    caption: '面積の大きい上位5位（北海道・岩手・福島・長野・新潟）と、最も小さい香川県',
  },
  lf_shakaiext04_143b: {
    kind: 'barChart',
    yLabel: '万km2',
    bars: [
      { label: '北海道', value: 8.3 },
      { label: '岩手', value: 1.53 },
      { label: '福島', value: 1.38 },
      { label: '長野', value: 1.36 },
      { label: '新潟', value: 1.26 },
      { label: '香川', value: 0.19 },
    ],
    caption: '北海道だけがけたちがいに広く、日本の国土の約2割をしめる。2位の岩手県でも北海道の5分の1以下',
  },

  // s144：となり合う県・三県境・飛び地
  lf_shakaiext04_144: {
    kind: 'japanMap',
    markers: [
      { x: 162, y: 214, label: '長野' },
      { x: 184, y: 211, label: '三県境' },
      { x: 128, y: 254, label: '北山村' },
    ],
    caption: '長野県は8つの県ととなり合い日本一。栃木・群馬・埼玉の三県境は平地にある珍しい地点。和歌山県北山村は奈良・三重に囲まれた飛び地',
  },

  // s145：島と海岸線
  lf_shakaiext04_145: {
    kind: 'japanMap',
    markers: [
      { x: 240, y: 78, label: '北海道' },
      { x: 33, y: 265, label: '長崎' },
      { x: 44, y: 323, label: '鹿児島' },
      { x: 43, y: 379, label: '沖縄' },
      { x: 197, y: 262, label: '小笠原' },
    ],
    caption: '島の数は長崎県が全国1位、次いで北海道。海岸線の長さは北海道が1位で長崎県が2位。小笠原諸島は東京都に属する',
  },

  // s146：入試実戦（輸入相手国の判別）
  lf_shakaiext04_146: {
    kind: 'barChart',
    yLabel: '兆円',
    bars: [
      { label: 'A国', value: 24.4 },
      { label: 'B国', value: 11.5 },
      { label: 'C国', value: 9.4 },
      { label: 'D国', value: 4.6 },
    ],
    caption: '日本の輸入相手国上位4か国（国名をかくしたもの）。主な輸入品のヒントとあわせて国名を当てる練習に使う',
  },

  // s147：入試実戦（成田国際空港の輸出品）
  lf_shakaiext04_147: {
    kind: 'pieChart',
    slices: [
      { label: '半導体等製造装置 9%', value: 9 },
      { label: '科学光学機器 6%', value: 6 },
      { label: '金（非貨幣用） 5%', value: 5 },
      { label: '集積回路 4%', value: 4 },
      { label: 'その他 76%', value: 76 },
    ],
    caption: '成田国際空港の輸出品。自動車が出てこず、小さくて高価な精密機械・集積回路が並ぶのが空港の特徴',
  },

  // s148：東京〜新大阪の所要時間の短縮
  lf_shakaiext04_148: {
    kind: 'barChart',
    xLabel: '年',
    yLabel: '分',
    bars: [
      { label: '1964', value: 240 },
      { label: '1965', value: 190 },
      { label: '1992', value: 150 },
      { label: '現在', value: 141 },
    ],
    caption: '東京〜新大阪の所要時間。開業時は4時間かかったが、「のぞみ」の登場などで2時間半を切るまで短くなった',
  },

  // s149：都道府県あてクイズ
  lf_shakaiext04_149: {
    kind: 'japanMap',
    markers: [
      { x: 203, y: 125, label: 'A' },
      { x: 173, y: 187, label: 'B' },
      { x: 99, y: 240, label: 'C' },
      { x: 44, y: 323, label: 'D' },
    ],
    caption: 'A〜Dの都道府県名と県庁所在地名を答える練習。ヒント（産業・地形・貿易港）と地図上の位置を結びつける',
  },

  // s150：総合演習
  lf_shakaiext04_150: {
    kind: 'japanMap',
    markers: [
      { x: 194, y: 222, label: '成田' },
      { x: 148, y: 239, label: '名古屋' },
      { x: 114, y: 238, label: '神戸' },
      { x: 50, y: 262, label: '博多' },
      { x: 100, y: 245, label: '瀬戸大橋' },
    ],
    caption: '貿易・交通・都道府県を1枚の地図でつなぐ総合演習用。港・空港・橋の位置と、それぞれが属する都道府県をセットで確認する',
  },
};
