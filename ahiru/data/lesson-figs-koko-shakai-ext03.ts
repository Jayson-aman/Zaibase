import type { Figure } from './figures';

// 高校受験 社会「日本の産業・貿易・交通」拡張ユニット（koko_shakai_s076〜s110）の図解。
// キーは lessons-koko-shakai-ext03.ts の figureId と対応（lf_kokoshakaiext03_XXX）。
// japanMap の座標系は data/japanPrefectures.ts と同じ viewBox 0 0 300 420。
// 数値はすべてキャプションに年次を明記した概数（農林水産省・経済産業省・財務省貿易統計・総務省国勢調査）。
export const lessonFigsKokoShakaiExt03: Record<string, Figure> = {
  // s077：米の収穫量が多い都道府県（2023年産）
  lf_kokoshakaiext03_077: {
    kind: 'barChart',
    yLabel: '収穫量(万t)',
    yMax: 70,
    bars: [
      { label: '新潟', value: 59, color: '#0EA5E9' },
      { label: '北海道', value: 54, color: '#0369A1' },
      { label: '秋田', value: 46, color: '#0284C7' },
      { label: '山形', value: 37, color: '#64748B' },
      { label: '宮城', value: 33, color: '#94A3B8' },
    ],
    caption: '2023年産の水稲収穫量（概数）。1位新潟・2位北海道・3位秋田で、上位は東北と北陸に集中する',
  },

  // s078：1人1年あたりの米の消費量の推移
  lf_kokoshakaiext03_078: {
    kind: 'lineChart',
    xLabel: '年度',
    yLabel: '1人1年あたり(kg)',
    xRange: [1960, 2025],
    yRange: [0, 130],
    series: [
      {
        label: '米の消費量',
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 1962, y: 118 },
          { x: 1970, y: 95 },
          { x: 1980, y: 78 },
          { x: 1990, y: 70 },
          { x: 2000, y: 65 },
          { x: 2010, y: 59 },
          { x: 2022, y: 51 },
        ],
      },
    ],
    caption: '1人1年あたりの米の消費量（食料需給表・概数）。1962年度の約118kgをピークに、2022年度には約51kgと半分以下になった',
  },

  // s079：主な果樹の産地
  lf_kokoshakaiext03_079: {
    kind: 'japanMap',
    markers: [
      { x: 203, y: 124, label: '青森 りんご1位' },
      { x: 192, y: 170, label: '山形 さくらんぼ' },
      { x: 162, y: 210, label: '長野 りんご2位' },
      { x: 170, y: 226, label: '山梨 ぶどう・もも1位' },
      { x: 124, y: 257, label: '和歌山 みかん' },
      { x: 82, y: 263, label: '愛媛 みかん' },
      { x: 167, y: 238, label: '静岡 茶' },
      { x: 47, y: 302, label: '鹿児島 茶' },
    ],
    caption: '主な果樹と茶の産地。冷涼な北にりんご・さくらんぼ、温暖な西日本の海沿いにみかん、扇状地の甲府盆地にぶどう・ももが並ぶ（2023年産）',
  },

  // s081：促成栽培の産地
  lf_kokoshakaiext03_081: {
    kind: 'japanMap',
    markers: [
      { x: 90, y: 269, label: '高知平野 なす1位' },
      { x: 65, y: 290, label: '宮崎平野 きゅうり' },
      { x: 152, y: 272, label: '黒潮(暖流)' },
    ],
    caption: '促成栽培の二大産地。黒潮（日本海流）の影響で冬も温暖なため、ビニールハウスの暖房費を抑えて夏野菜を冬春に早出しできる',
  },

  // s082：レタスの収穫量が多い都道府県（2023年産）
  lf_kokoshakaiext03_082: {
    kind: 'barChart',
    yLabel: '収穫量(万t)',
    yMax: 20,
    bars: [
      { label: '長野', value: 18, color: '#22C55E' },
      { label: '茨城', value: 9, color: '#0EA5E9' },
      { label: '群馬', value: 5, color: '#0369A1' },
      { label: '長崎', value: 4, color: '#64748B' },
      { label: '兵庫', value: 3, color: '#94A3B8' },
    ],
    caption: '2023年産のレタスの収穫量（概数）。長野が全国の約3割を占めて1位。標高1,000m前後の高原で夏に出荷する抑制栽培による',
  },

  // s084：生乳生産量に占める都道府県の割合（2023年）
  lf_kokoshakaiext03_084: {
    kind: 'pieChart',
    slices: [
      { label: '北海道 約56%', value: 56, color: '#0369A1' },
      { label: '栃木 約5%', value: 5, color: '#0EA5E9' },
      { label: '熊本 約4%', value: 4, color: '#22C55E' },
      { label: '岩手 約3%', value: 3, color: '#F59E0B' },
      { label: '群馬 約3%', value: 3, color: '#E11D48' },
      { label: 'その他 約29%', value: 29, color: '#94A3B8' },
    ],
    caption: '2023年の生乳生産量に占める割合（概数）。全国約740万tのうち北海道が5割台後半を占め、次いで関東・東北・九州の近郊酪農地帯が続く',
  },

  // s085：漁業種類別の生産量の推移
  lf_kokoshakaiext03_085: {
    kind: 'lineChart',
    xLabel: '年',
    yLabel: '生産量(万t)',
    xRange: [1965, 2025],
    yRange: [0, 700],
    series: [
      {
        label: '遠洋漁業',
        color: '#E11D48',
        markers: true,
        points: [
          { x: 1965, y: 200 },
          { x: 1973, y: 399 },
          { x: 1980, y: 217 },
          { x: 1990, y: 150 },
          { x: 2000, y: 86 },
          { x: 2010, y: 48 },
          { x: 2022, y: 27 },
        ],
      },
      {
        label: '沖合漁業',
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 1965, y: 245 },
          { x: 1973, y: 313 },
          { x: 1980, y: 456 },
          { x: 1990, y: 610 },
          { x: 2000, y: 259 },
          { x: 2010, y: 236 },
          { x: 2022, y: 194 },
        ],
      },
      {
        label: '沿岸漁業',
        color: '#22C55E',
        markers: true,
        points: [
          { x: 1965, y: 191 },
          { x: 1973, y: 197 },
          { x: 1980, y: 202 },
          { x: 1990, y: 199 },
          { x: 2000, y: 158 },
          { x: 2010, y: 129 },
          { x: 2022, y: 87 },
        ],
      },
    ],
    caption: '漁業種類別の生産量の推移（概数）。遠洋漁業は1973年ごろをピークに、200海里水域の設定と石油危機で急落。沖合漁業も1990年前後をピークに減少した',
  },

  // s088：食料自給率の推移
  lf_kokoshakaiext03_088: {
    kind: 'lineChart',
    xLabel: '年度',
    yLabel: '自給率(%)',
    xRange: [1960, 2025],
    yRange: [0, 100],
    series: [
      {
        label: 'カロリーベース',
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 1965, y: 73 },
          { x: 1975, y: 54 },
          { x: 1985, y: 53 },
          { x: 1995, y: 43 },
          { x: 2005, y: 40 },
          { x: 2015, y: 39 },
          { x: 2023, y: 38 },
        ],
      },
      {
        label: '生産額ベース',
        color: '#22C55E',
        dashed: true,
        markers: true,
        points: [
          { x: 1965, y: 86 },
          { x: 1975, y: 83 },
          { x: 1985, y: 82 },
          { x: 1995, y: 74 },
          { x: 2005, y: 69 },
          { x: 2015, y: 66 },
          { x: 2023, y: 61 },
        ],
      },
    ],
    caption: '食料自給率の推移（概数）。カロリーベースは1965年度の73%から2023年度の38%へ低下。金額で計算する生産額ベースは2023年度で61%と高く出る',
  },

  // s089：品目別の食料自給率（2022年度・重量ベース）
  lf_kokoshakaiext03_089: {
    kind: 'barChart',
    yLabel: '自給率(%)',
    yMax: 100,
    bars: [
      { label: '米', value: 99, color: '#0369A1' },
      { label: '野菜', value: 79, color: '#22C55E' },
      { label: '魚介類', value: 54, color: '#0EA5E9' },
      { label: '肉類', value: 53, color: '#F59E0B' },
      { label: '果実', value: 39, color: '#E11D48' },
      { label: '小麦', value: 15, color: '#64748B' },
      { label: '大豆', value: 6, color: '#94A3B8' },
    ],
    caption: '2022年度の品目別自給率（重量ベース・概数）。米と野菜は高く、小麦と大豆は極めて低い。肉類は53%だが飼料自給率を考慮すると1割に満たない',
  },

  // s092：太平洋ベルト
  lf_kokoshakaiext03_092: {
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
    caption: '関東南部から九州北部まで帯状に連なる太平洋ベルト。原料・燃料の輸入と製品の輸送に船を使うため、工業は港に近い臨海部に集中した',
  },

  // s093：中京工業地帯の業種別割合（2019年）
  lf_kokoshakaiext03_093: {
    kind: 'pieChart',
    slices: [
      { label: '機械 約69%', value: 69, color: '#0EA5E9' },
      { label: '金属 約9%', value: 9, color: '#64748B' },
      { label: '化学 約6%', value: 6, color: '#22C55E' },
      { label: '食料品 約5%', value: 5, color: '#F59E0B' },
      { label: 'せんい 約1%', value: 1, color: '#E11D48' },
      { label: 'その他 約10%', value: 10, color: '#94A3B8' },
    ],
    caption: '2019年の中京工業地帯の業種別割合（概数）。機械が約69%で、全国平均の約46%を大きく上回る。自動車工業への集中が理由',
  },

  // s096：瀬戸内工業地域と北九州工業地帯
  lf_kokoshakaiext03_096: {
    kind: 'japanMap',
    markers: [
      { x: 98, y: 241, label: '倉敷(水島) 石油化学' },
      { x: 82, y: 246, label: '広島 自動車' },
      { x: 68, y: 251, label: '周南 石油化学' },
      { x: 101, y: 248, label: '坂出 造船' },
      { x: 78, y: 264, label: '新居浜 化学' },
      { x: 55, y: 258, label: '八幡 製鉄' },
    ],
    caption: '瀬戸内工業地域と北九州工業地帯。塩田や軍用地の跡地・埋め立て地が工場用地となり、波の静かな瀬戸内海が大型船の航行を支えた',
  },

  // s097：東海・関東内陸・北陸・中央高地の工業
  lf_kokoshakaiext03_097: {
    kind: 'japanMap',
    markers: [
      { x: 178, y: 208, label: '太田 自動車' },
      { x: 188, y: 203, label: '宇都宮 機械' },
      { x: 161, y: 240, label: '浜松 楽器・二輪' },
      { x: 173, y: 231, label: '富士 製紙' },
      { x: 164, y: 218, label: '諏訪 精密機械' },
      { x: 131, y: 222, label: '鯖江 眼鏡枠' },
      { x: 174, y: 185, label: '燕三条 金属洋食器' },
      { x: 143, y: 193, label: '輪島塗' },
    ],
    caption: '内陸と地方の工業。関東内陸は高速道路ぞいの機械工業、北陸は雪深い冬の副業から発達した地場産業、中央高地は精密機械から電子部品へ移った',
  },

  // s102：産業別就業者割合の変化
  lf_kokoshakaiext03_102: {
    kind: 'barChart',
    yLabel: '就業者割合(%)',
    yMax: 80,
    bars: [
      { label: '1次1950', value: 48, color: '#22C55E' },
      { label: '1次2020', value: 3, color: '#86EFAC' },
      { label: '2次1950', value: 22, color: '#0369A1' },
      { label: '2次2020', value: 23, color: '#7DD3FC' },
      { label: '3次1950', value: 30, color: '#F59E0B' },
      { label: '3次2020', value: 73, color: '#FCD34D' },
    ],
    caption: '産業別就業者割合の変化（国勢調査・概数）。第一次は約48%から約3%へ激減、第三次は約30%から約73%へ拡大。第二次はほぼ横ばい',
  },

  // s107：日本の輸出品の内訳（2021年）
  lf_kokoshakaiext03_107: {
    kind: 'pieChart',
    slices: [
      { label: '機械類 約38%', value: 38, color: '#0EA5E9' },
      { label: '自動車 約13%', value: 13, color: '#0369A1' },
      { label: '鉄鋼 約5%', value: 5, color: '#64748B' },
      { label: '自動車部品 約4%', value: 4, color: '#22C55E' },
      { label: 'プラスチック 約4%', value: 4, color: '#F59E0B' },
      { label: 'その他 約36%', value: 36, color: '#94A3B8' },
    ],
    caption: '2021年の日本の輸出品の内訳（概数）。機械類と自動車で半分を占める。1960年に約3割を占めたせんい品は、現在は1%程度にすぎない',
  },

  // s108：日本の輸入品の内訳（2021年）
  lf_kokoshakaiext03_108: {
    kind: 'pieChart',
    slices: [
      { label: '機械類 約26%', value: 26, color: '#0EA5E9' },
      { label: '原油 約8%', value: 8, color: '#334155' },
      { label: '液化天然ガス 約5%', value: 5, color: '#22C55E' },
      { label: '医薬品 約5%', value: 5, color: '#9333EA' },
      { label: '衣類 約3%', value: 3, color: '#E11D48' },
      { label: '石炭 約3%', value: 3, color: '#64748B' },
      { label: 'その他 約50%', value: 50, color: '#94A3B8' },
    ],
    caption: '2021年の日本の輸入品の内訳（概数）。第1位は原料ではなく機械類。海外生産の逆輸入とアジアの工業化で、加工貿易の型は崩れている',
  },

  // s109：主な貿易港
  lf_kokoshakaiext03_109: {
    kind: 'japanMap',
    markers: [
      { x: 194, y: 222, label: '成田空港(貿易額1位)' },
      { x: 148, y: 238, label: '名古屋港(自動車)' },
      { x: 188, y: 247, label: '東京港(輸入)' },
      { x: 184, y: 232, label: '横浜港(自動車)' },
      { x: 191, y: 231, label: '千葉港(原油)' },
      { x: 124, y: 249, label: '関西空港' },
    ],
    caption: '主な貿易港。貿易額1位は成田国際空港で、軽くて高価な半導体等電子部品・医薬品を扱う。名古屋港は自動車の輸出で大幅な輸出超過となる',
  },
};
