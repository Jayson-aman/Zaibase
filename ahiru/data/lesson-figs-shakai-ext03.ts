import type { Figure } from './figures';

// 中学受験社会 拡張ユニットIII「地理：工業・資源エネルギー」（shakai_s076〜s110）専用の図解データ。
// lessons-shakai-ext03.ts の各Lessonのsections[].figureId から参照される。
//
// 統計はいずれも「およその値（目安）」であり、年によって変動する。
// 中学入試では細かい数値そのものより「順位」「割合の大小」「特徴的に高い項目」を
// 読み取れることが問われるため、キャプションにもその読み方を書いている。
//
// japanMap の座標系は data/japanPrefectures.ts と同じ viewBox 0 0 300 420。
export const lessonFigsShakaiExt03: Record<string, Figure> = {
  // ============================================================
  // 1. 四大工業地帯（s076〜s081）
  // ============================================================

  // s076: 四大工業地帯の位置
  sext03_s076a: {
    kind: 'japanMap',
    markers: [
      { x: 185, y: 226, label: '京浜' },
      { x: 147, y: 234, label: '中京' },
      { x: 119, y: 241, label: '阪神' },
      { x: 55, y: 258, label: '北九州' },
    ],
    caption: '四大工業地帯はすべて海に面した位置にある。東から京浜・中京・阪神・北九州の順に並ぶ',
  },

  // s077: 中京工業地帯の業種別割合
  sext03_s077a: {
    kind: 'pieChart',
    slices: [
      { label: '機械 約69%', value: 69, color: '#0EA5E9' },
      { label: '金属 約9%', value: 9, color: '#64748B' },
      { label: '化学 約6%', value: 6, color: '#22C55E' },
      { label: '食料品 約5%', value: 5, color: '#F59E0B' },
      { label: 'せんい 約1%', value: 1, color: '#E11D48' },
      { label: 'その他 約10%', value: 10, color: '#94A3B8' },
    ],
    caption: '中京工業地帯の製造品出荷額の内訳（およその割合）。機械が約7割を占めるのは自動車工業のため',
  },

  // s078: 京浜工業地帯の業種別割合
  sext03_s078a: {
    kind: 'pieChart',
    slices: [
      { label: '機械 約49%', value: 49, color: '#0EA5E9' },
      { label: '化学 約18%', value: 18, color: '#22C55E' },
      { label: '食料品 約11%', value: 11, color: '#F59E0B' },
      { label: '金属 約9%', value: 9, color: '#64748B' },
      { label: 'その他 約13%', value: 13, color: '#94A3B8' },
    ],
    caption: '京浜工業地帯の内訳（およその割合）。大消費地をかかえるため食料品・印刷の割合が他より高い',
  },

  // s079: 阪神工業地帯の業種別割合
  sext03_s079a: {
    kind: 'pieChart',
    slices: [
      { label: '機械 約37%', value: 37, color: '#0EA5E9' },
      { label: '金属 約20%', value: 20, color: '#64748B' },
      { label: '化学 約17%', value: 17, color: '#22C55E' },
      { label: '食料品 約11%', value: 11, color: '#F59E0B' },
      { label: 'その他 約15%', value: 15, color: '#94A3B8' },
    ],
    caption: '阪神工業地帯の内訳（およその割合）。四大工業地帯の中で金属の割合がもっとも高いのが特徴',
  },

  // s080: 北九州工業地帯の業種別割合
  sext03_s080a: {
    kind: 'pieChart',
    slices: [
      { label: '機械 約46%', value: 46, color: '#0EA5E9' },
      { label: '食料品 約17%', value: 17, color: '#F59E0B' },
      { label: '金属 約16%', value: 16, color: '#64748B' },
      { label: '化学 約6%', value: 6, color: '#22C55E' },
      { label: 'その他 約15%', value: 15, color: '#94A3B8' },
    ],
    caption: '北九州工業地帯の内訳（およその割合）。かつての主役だった金属（鉄鋼）より機械の割合が大きくなっている',
  },

  // s081: 主な工業地帯・工業地域の製造品出荷額
  sext03_s081a: {
    kind: 'barChart',
    xLabel: '工業地帯・工業地域',
    yLabel: '出荷額（兆円）',
    bars: [
      { label: '中京', value: 59, color: '#E11D48' },
      { label: '阪神', value: 33 },
      { label: '瀬戸内', value: 31 },
      { label: '関東内陸', value: 29 },
      { label: '京浜', value: 25 },
      { label: '東海', value: 17 },
      { label: '京葉', value: 13 },
      { label: '北九州', value: 10 },
    ],
    caption: '製造品出荷額のおよその比較。1位は中京で、北九州は工業「地域」よりも下位に沈んでいる',
  },

  // ============================================================
  // 2. 太平洋ベルト・臨海立地（s082〜s085）
  // ============================================================

  // s082: 太平洋ベルト
  sext03_s082a: {
    kind: 'japanMap',
    markers: [
      { x: 185, y: 226, label: '京浜' },
      { x: 192, y: 232, label: '京葉' },
      { x: 168, y: 237, label: '東海' },
      { x: 147, y: 234, label: '中京' },
      { x: 119, y: 241, label: '阪神' },
      { x: 95, y: 245, label: '瀬戸内' },
      { x: 55, y: 258, label: '北九州' },
    ],
    caption: '関東南部から九州北部まで、帯（ベルト）のようにつながる工業地帯・工業地域＝太平洋ベルト',
  },

  // s083: 日本の輸入品の内訳
  sext03_s083a: {
    kind: 'pieChart',
    slices: [
      { label: '機械類 約26%', value: 26, color: '#0EA5E9' },
      { label: '原油 約11%', value: 11, color: '#334155' },
      { label: '液化天然ガス 約6%', value: 6, color: '#22C55E' },
      { label: '医薬品 約5%', value: 5, color: '#9333EA' },
      { label: '石炭 約4%', value: 4, color: '#64748B' },
      { label: 'その他 約48%', value: 48, color: '#94A3B8' },
    ],
    caption: '日本の輸入額の内訳（およその割合・年により変動）。原油・LNG・石炭など重くてかさばる資源は船で運ぶ',
  },

  // s084: 京葉工業地域の内訳
  sext03_s084a: {
    kind: 'pieChart',
    slices: [
      { label: '化学 約41%', value: 41, color: '#22C55E' },
      { label: '金属 約21%', value: 21, color: '#64748B' },
      { label: '食料品 約16%', value: 16, color: '#F59E0B' },
      { label: '機械 約13%', value: 13, color: '#0EA5E9' },
      { label: 'その他 約9%', value: 9, color: '#94A3B8' },
    ],
    caption: '京葉工業地域の内訳（およその割合）。日本でめずらしく「化学が機械より多い」のが最大の見分けポイント',
  },

  // s084b: 瀬戸内工業地域の内訳
  sext03_s084b: {
    kind: 'pieChart',
    slices: [
      { label: '機械 約35%', value: 35, color: '#0EA5E9' },
      { label: '化学 約22%', value: 22, color: '#22C55E' },
      { label: '金属 約18%', value: 18, color: '#64748B' },
      { label: '食料品 約8%', value: 8, color: '#F59E0B' },
      { label: 'その他 約17%', value: 17, color: '#94A3B8' },
    ],
    caption: '瀬戸内工業地域の内訳（およその割合）。化学の割合が全国平均より高いのは石油化学コンビナートがあるため',
  },

  // s085: 東海工業地域
  sext03_s085a: {
    kind: 'japanMap',
    markers: [
      { x: 161, y: 240, label: '浜松' },
      { x: 173, y: 231, label: '富士' },
    ],
    caption: '東海工業地域（静岡県）。浜松＝オートバイ・楽器、富士＝製紙・パルプ',
  },

  // ============================================================
  // 3. 内陸型工業・IC（s086〜s089）
  // ============================================================

  // s086: 関東内陸工業地域の県別出荷額
  sext03_s086a: {
    kind: 'barChart',
    xLabel: '県',
    yLabel: '出荷額（兆円）',
    bars: [
      { label: '埼玉', value: 14, color: '#0EA5E9' },
      { label: '群馬', value: 9, color: '#0EA5E9' },
      { label: '栃木', value: 9, color: '#0EA5E9' },
      { label: '（参考）京浜', value: 25, color: '#94A3B8' },
    ],
    caption: '関東内陸工業地域は埼玉・群馬・栃木の3県の合計で約29兆円となり、京浜工業地帯を上回る',
  },

  // s087: 内陸型工業地域の位置
  sext03_s087a: {
    kind: 'japanMap',
    markers: [
      { x: 181, y: 211, label: '関東内陸' },
      { x: 164, y: 218, label: '諏訪' },
      { x: 148, y: 203, label: '北陸' },
    ],
    caption: '海に面していない内陸でも、高速道路のインターチェンジ周辺には工業団地が広がっている',
  },

  // s088: IC工場の立地
  sext03_s088a: {
    kind: 'japanMap',
    markers: [
      { x: 240, y: 88, label: '千歳' },
      { x: 212, y: 152, label: '北上' },
      { x: 192, y: 171, label: '山形' },
      { x: 162, y: 215, label: '長野' },
      { x: 48, y: 282, label: '熊本' },
    ],
    caption: 'IC（集積回路）工場は空港や高速道路のインターチェンジの近くに多く、内陸にも立地する',
  },

  // s089: シリコンアイランドとシリコンロード
  sext03_s089a: {
    kind: 'japanMap',
    markers: [
      { x: 50, y: 280, label: '九州' },
      { x: 203, y: 158, label: '東北' },
    ],
    caption: '九州＝シリコンアイランド、東北自動車道沿い＝シリコンロード。どちらもIC工場の集まる地域',
  },

  // ============================================================
  // 4. 自動車工業（s090〜s093）
  // ============================================================

  // s090: 自動車の主な組立工場
  sext03_s090a: {
    kind: 'japanMap',
    markers: [
      { x: 150, y: 238, label: '豊田' },
      { x: 137, y: 245, label: '鈴鹿' },
      { x: 178, y: 208, label: '太田' },
      { x: 184, y: 227, label: '横浜' },
      { x: 82, y: 246, label: '広島' },
    ],
    caption: '自動車の組立工場の代表例。まわりに部品をつくる関連工場が集まっている',
  },

  // s091: 都道府県別の製造品出荷額
  sext03_s091a: {
    kind: 'barChart',
    xLabel: '都道府県',
    yLabel: '出荷額（兆円）',
    bars: [
      { label: '愛知', value: 48, color: '#E11D48' },
      { label: '神奈川', value: 18 },
      { label: '静岡', value: 17 },
      { label: '大阪', value: 17 },
      { label: '兵庫', value: 16 },
      { label: '埼玉', value: 14 },
      { label: '千葉', value: 13 },
    ],
    caption: '製造品出荷額は愛知県が全国1位で2位以下を大きく引き離す。その半分以上が自動車などの輸送用機械',
  },

  // s092: 世界の自動車生産台数
  sext03_s092a: {
    kind: 'barChart',
    xLabel: '国',
    yLabel: '生産台数（万台）',
    bars: [
      { label: '中国', value: 3000, color: '#E11D48' },
      { label: 'アメリカ', value: 1060 },
      { label: '日本', value: 900, color: '#0EA5E9' },
      { label: 'インド', value: 590 },
      { label: '韓国', value: 420 },
      { label: 'ドイツ', value: 410 },
    ],
    caption: '自動車生産台数のおよその比較。日本は世界有数だが1位ではなく、中国が圧倒的に多い',
  },

  // s093: 国内新車販売の内訳
  sext03_s093a: {
    kind: 'pieChart',
    slices: [
      { label: 'ハイブリッド車 約49%', value: 49, color: '#22C55E' },
      { label: 'ガソリン車など 約48%', value: 48, color: '#94A3B8' },
      { label: '電気自動車(EV) 約2%', value: 2, color: '#0EA5E9' },
      { label: 'プラグインHV 約1%', value: 1, color: '#9333EA' },
    ],
    caption: '日本国内の新車販売のおよその内訳。ハイブリッド車は多いが、EVの割合はまだ小さい',
  },

  // ============================================================
  // 5. 鉄鋼・石油化学（s094〜s097）
  // ============================================================

  // s094: 主な製鉄所（高炉のある地域）
  sext03_s094a: {
    kind: 'japanMap',
    markers: [
      { x: 199, y: 211, label: '鹿嶋' },
      { x: 193, y: 231, label: '君津' },
      { x: 148, y: 238, label: '東海' },
      { x: 98, y: 241, label: '倉敷' },
      { x: 55, y: 258, label: '八幡' },
      { x: 66, y: 272, label: '大分' },
    ],
    caption: '高炉のある製鉄所はすべて海ぞい。鉄鉱石・石炭を大型船で受け取るために臨海立地する',
  },

  // s095: 世界の粗鋼生産量
  sext03_s095a: {
    kind: 'barChart',
    xLabel: '国',
    yLabel: '粗鋼生産量（百万トン）',
    bars: [
      { label: '中国', value: 1019, color: '#E11D48' },
      { label: 'インド', value: 140 },
      { label: '日本', value: 87, color: '#0EA5E9' },
      { label: 'アメリカ', value: 81 },
      { label: 'ロシア', value: 76 },
    ],
    caption: '粗鋼生産量のおよその比較。中国だけで世界のおよそ半分を占め、日本は上位だが差は非常に大きい',
  },

  // s096: 石油化学コンビナート
  sext03_s096a: {
    kind: 'japanMap',
    markers: [
      { x: 199, y: 211, label: '鹿島' },
      { x: 191, y: 231, label: '市原' },
      { x: 137, y: 244, label: '四日市' },
      { x: 98, y: 241, label: '水島' },
      { x: 68, y: 251, label: '周南' },
    ],
    caption: '石油化学コンビナートも臨海立地。タンカーで運ばれた原油をその場で精製し、パイプで工場をつなぐ',
  },

  // s097: 四大公害病の発生地
  sext03_s097a: {
    kind: 'japanMap',
    markers: [
      { x: 174, y: 183, label: '新潟水俣病' },
      { x: 148, y: 203, label: 'イタイイタイ' },
      { x: 137, y: 244, label: '四日市' },
      { x: 46, y: 290, label: '水俣病' },
    ],
    caption: '四大公害病の発生地。四日市ぜんそくは石油化学コンビナートのけむり（亜硫酸ガス）が原因',
  },

  // ============================================================
  // 6. 中小企業・伝統工業（s098〜s100）
  // ============================================================

  // s098: 製造業に占める中小企業の割合
  sext03_s098a: {
    kind: 'barChart',
    xLabel: '項目',
    yLabel: '中小企業の割合（%）',
    yMax: 100,
    bars: [
      { label: '事業所数', value: 99, color: '#0EA5E9' },
      { label: '従業者数', value: 69, color: '#22C55E' },
      { label: '出荷額', value: 48, color: '#F59E0B' },
    ],
    caption: '製造業で中小企業がしめるおよその割合。数はほぼすべてだが、出荷額では約半分にとどまる',
  },

  // s099: 中小工場が集まる地域
  sext03_s099a: {
    kind: 'japanMap',
    markers: [
      { x: 187, y: 224, label: '大田区' },
      { x: 124, y: 243, label: '東大阪' },
      { x: 174, y: 185, label: '燕三条' },
      { x: 131, y: 222, label: '鯖江' },
    ],
    caption: '町工場の集まる代表的な地域。燕三条＝金属洋食器・刃物、鯖江＝めがねフレーム',
  },

  // s100: 伝統的工芸品
  sext03_s100a: {
    kind: 'japanMap',
    markers: [
      { x: 213, y: 151, label: '南部鉄器' },
      { x: 143, y: 193, label: '輪島塗' },
      { x: 122, y: 230, label: '西陣織' },
      { x: 42, y: 268, label: '有田焼' },
    ],
    caption: '伝統的工芸品の代表例。原料が地元でとれること・城下町で職人が育ったことが産地の条件になった',
  },

  // ============================================================
  // 7. エネルギー資源の輸入（s101〜s104）
  // ============================================================

  // s101: 主な国のエネルギー自給率
  sext03_s101a: {
    kind: 'barChart',
    xLabel: '国',
    yLabel: 'エネルギー自給率（%）',
    yMax: 200,
    bars: [
      { label: '日本', value: 13, color: '#E11D48' },
      { label: 'ドイツ', value: 35 },
      { label: 'フランス', value: 55 },
      { label: 'イギリス', value: 75 },
      { label: 'アメリカ', value: 106 },
      { label: 'カナダ', value: 179 },
    ],
    caption: '主な国のエネルギー自給率（およその値）。日本は1割あまりで、先進国の中でもきわめて低い',
  },

  // s102: 原油の輸入先
  sext03_s102a: {
    kind: 'pieChart',
    slices: [
      { label: 'サウジアラビア 約40%', value: 40, color: '#0EA5E9' },
      { label: 'アラブ首長国連邦 約38%', value: 38, color: '#22C55E' },
      { label: 'クウェート 約8%', value: 8, color: '#F59E0B' },
      { label: 'カタール 約5%', value: 5, color: '#9333EA' },
      { label: 'その他 約9%', value: 9, color: '#94A3B8' },
    ],
    caption: '原油の輸入先（およその割合）。上位はすべて中東の国で、中東への依存度は9割をこえる',
  },

  // s103: 液化天然ガス（LNG）の輸入先
  sext03_s103a: {
    kind: 'pieChart',
    slices: [
      { label: 'オーストラリア 約42%', value: 42, color: '#0EA5E9' },
      { label: 'マレーシア 約17%', value: 17, color: '#22C55E' },
      { label: 'ロシア 約9%', value: 9, color: '#E11D48' },
      { label: 'アメリカ 約8%', value: 8, color: '#9333EA' },
      { label: 'カタール 約6%', value: 6, color: '#F59E0B' },
      { label: 'その他 約18%', value: 18, color: '#94A3B8' },
    ],
    caption: 'LNGの輸入先（およその割合）。原油とちがい1位はオーストラリアで、輸入先が分散している',
  },

  // s103b: 石炭の輸入先
  sext03_s103b: {
    kind: 'pieChart',
    slices: [
      { label: 'オーストラリア 約65%', value: 65, color: '#0EA5E9' },
      { label: 'インドネシア 約12%', value: 12, color: '#22C55E' },
      { label: 'ロシア 約9%', value: 9, color: '#E11D48' },
      { label: 'アメリカ 約6%', value: 6, color: '#9333EA' },
      { label: 'カナダ 約5%', value: 5, color: '#F59E0B' },
      { label: 'その他 約3%', value: 3, color: '#94A3B8' },
    ],
    caption: '石炭の輸入先（およその割合）。オーストラリアが群をぬいて多い',
  },

  // s104: 鉄鉱石の輸入先
  sext03_s104a: {
    kind: 'pieChart',
    slices: [
      { label: 'オーストラリア 約58%', value: 58, color: '#0EA5E9' },
      { label: 'ブラジル 約27%', value: 27, color: '#22C55E' },
      { label: 'カナダ 約7%', value: 7, color: '#F59E0B' },
      { label: '南アフリカ 約3%', value: 3, color: '#9333EA' },
      { label: 'その他 約5%', value: 5, color: '#94A3B8' },
    ],
    caption: '鉄鉱石の輸入先（およその割合）。オーストラリアとブラジルの2か国で8割以上を占める',
  },

  // ============================================================
  // 8. 発電の種類（s105〜s108）
  // ============================================================

  // s105: 日本の発電電力量の内訳
  sext03_s105a: {
    kind: 'pieChart',
    slices: [
      { label: '火力 約72%', value: 72, color: '#E11D48' },
      { label: '太陽光 約9%', value: 9, color: '#F59E0B' },
      { label: '水力 約8%', value: 8, color: '#0EA5E9' },
      { label: '原子力 約6%', value: 6, color: '#9333EA' },
      { label: '風力・地熱など 約5%', value: 5, color: '#22C55E' },
    ],
    caption: '日本の発電電力量の内訳（およその割合）。火力が7割をこえ、再生可能エネルギーはまだ2割ほど',
  },

  // s106: 火力発電の燃料の内訳
  sext03_s106a: {
    kind: 'pieChart',
    slices: [
      { label: '液化天然ガス 約47%', value: 47, color: '#22C55E' },
      { label: '石炭 約43%', value: 43, color: '#334155' },
      { label: '石油など 約10%', value: 10, color: '#F59E0B' },
    ],
    caption: '火力発電の燃料のおよその内訳。かつて中心だった石油はへり、LNGと石炭が二本柱になっている',
  },

  // s107: 水力発電所・原子力発電所の位置
  sext03_s107a: {
    kind: 'japanMap',
    markers: [
      { x: 150, y: 203, label: '黒部ダム' },
      { x: 172, y: 182, label: '柏崎刈羽' },
      { x: 197, y: 188, label: '福島第一' },
      { x: 133, y: 220, label: '若狭湾' },
    ],
    caption: '水力発電所は山間部のダム、原子力発電所は冷却水の得やすい海ぞいで大都市から離れた場所に立地',
  },

  // s108: 発電構成の推移
  sext03_s108a: {
    kind: 'lineChart',
    xLabel: '年度',
    yLabel: '発電電力量にしめる割合（%）',
    xRange: [1990, 2022],
    yRange: [0, 100],
    series: [
      {
        label: '火力',
        color: '#E11D48',
        markers: true,
        points: [
          { x: 1990, y: 64 }, { x: 2010, y: 66 }, { x: 2013, y: 88 },
          { x: 2016, y: 83 }, { x: 2022, y: 72 },
        ],
      },
      {
        label: '原子力',
        color: '#9333EA',
        markers: true,
        points: [
          { x: 1990, y: 25 }, { x: 2010, y: 25 }, { x: 2013, y: 1 },
          { x: 2016, y: 2 }, { x: 2022, y: 6 },
        ],
      },
      {
        label: '水力',
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 1990, y: 10 }, { x: 2010, y: 8 }, { x: 2013, y: 8 },
          { x: 2016, y: 8 }, { x: 2022, y: 8 },
        ],
      },
      {
        label: '水力以外の再生可能エネルギー',
        color: '#22C55E',
        markers: true,
        points: [
          { x: 1990, y: 1 }, { x: 2010, y: 1 }, { x: 2013, y: 3 },
          { x: 2016, y: 7 }, { x: 2022, y: 14 },
        ],
      },
    ],
    caption: '発電構成の推移（およその値）。2011年の東日本大震災後に原子力が急減し、火力が急増した',
  },

  // s108b: 再生可能エネルギーの主な立地
  sext03_s108b: {
    kind: 'japanMap',
    markers: [
      { x: 197, y: 145, label: '風力(秋田)' },
      { x: 66, y: 272, label: '地熱(八丁原)' },
    ],
    caption: '風力は風の強い東北・北海道の日本海側、地熱は火山の多い九州・東北に多い',
  },

  // ============================================================
  // 9. 入試実戦（s109〜s110）
  // ============================================================

  // s109: 判別演習用のグラフ
  sext03_s109a: {
    kind: 'pieChart',
    slices: [
      { label: '化学 約41%', value: 41, color: '#22C55E' },
      { label: '金属 約21%', value: 21, color: '#64748B' },
      { label: '食料品 約16%', value: 16, color: '#F59E0B' },
      { label: '機械 約13%', value: 13, color: '#0EA5E9' },
      { label: 'その他 約9%', value: 9, color: '#94A3B8' },
    ],
    caption: '【資料A】ある工業地域の製造品出荷額の内訳。化学が最大という一点だけで産地を特定できる',
  },

  // s110: 総まとめ
  sext03_s110a: {
    kind: 'japanMap',
    markers: [
      { x: 185, y: 226, label: '京浜' },
      { x: 147, y: 234, label: '中京' },
      { x: 119, y: 241, label: '阪神' },
      { x: 95, y: 245, label: '瀬戸内' },
      { x: 181, y: 211, label: '関東内陸' },
      { x: 55, y: 258, label: '北九州' },
    ],
    caption: '総まとめ。臨海の四大工業地帯＋瀬戸内などの太平洋ベルトに、内陸型の関東内陸が加わる構図',
  },
};
