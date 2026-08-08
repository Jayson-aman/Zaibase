import type { Figure } from './figures';

// 社会 拡張バッチ05：地理「世界地理の基礎」（shakai_s151〜shakai_s180）の図解。
// キーは lessons-shakai-ext05.ts の figureId と 1 対 1 で対応する。
// ※ 世界地図を描く Figure 種別は存在しないため、面積・人口・気温・降水量・
//   経度／緯度のものさし（数直線）で「数の関係」を可視化する方針にしている。
export const lessonFigsShakaiExt05: Record<string, Figure> = {
  // ===== shakai_s151 六大陸の名前と広さ =====
  lf_sh05_151: {
    kind: 'pieChart',
    slices: [
      { label: 'ユーラシア', value: 5490 },
      { label: 'アフリカ', value: 3020 },
      { label: '北米', value: 2450 },
      { label: '南米', value: 1780 },
      { label: '南極', value: 1360 },
      { label: '豪州', value: 770 },
    ],
    caption:
      '六大陸の面積（万km²）。ユーラシア5490／アフリカ3020／北米（北アメリカ）2450／南米（南アメリカ）1780／南極1360／豪州（オーストラリア）770。合計＝陸地全体 約1億4900万km²',
  },

  // ===== shakai_s152 三大洋 =====
  lf_sh05_152: {
    kind: 'barChart',
    yLabel: '面積（万km²）',
    bars: [
      { label: '太平洋', value: 16600 },
      { label: '大西洋', value: 8700 },
      { label: 'インド洋', value: 7300 },
      { label: '北極海', value: 1400 },
    ],
    caption:
      '海の面積（万km²）。三大洋は太平洋・大西洋・インド洋の3つで、北極海は入らない。太平洋だけで陸地全体（約1億4900万km²）より広い',
  },

  // ===== shakai_s153 六大州 =====
  lf_sh05_153: {
    kind: 'barChart',
    yLabel: '人口（億人）',
    bars: [
      { label: 'アジア', value: 47.6 },
      { label: 'アフリカ', value: 14.6 },
      { label: '欧州', value: 7.4 },
      { label: '北米', value: 6.0 },
      { label: '南米', value: 4.4 },
      { label: '大洋州', value: 0.45 },
    ],
    caption:
      '六大州の人口（億人・およその値）。欧州＝ヨーロッパ州、北米＝北アメリカ州、南米＝南アメリカ州、大洋州＝オセアニア州。合計およそ80億人で、アジア州だけで約6割',
  },

  // ===== shakai_s154 陸と海の割合 =====
  lf_sh05_154: {
    kind: 'pieChart',
    slices: [
      { label: '海', value: 71 },
      { label: '陸', value: 29 },
    ],
    caption:
      '地球の表面積 約5億1000万km²の内わけ。海が約71％、陸が約29％で、およそ7：3。「水の惑星」とよばれる理由',
  },

  // ===== shakai_s155 気候帯5つ =====
  lf_sh05_155: {
    kind: 'pieChart',
    slices: [
      { label: '乾燥帯', value: 26.3 },
      { label: '冷帯', value: 21.3 },
      { label: '熱帯', value: 19.9 },
      { label: '寒帯', value: 17.1 },
      { label: '温帯', value: 13.4 },
      { label: '高山', value: 2.0 },
    ],
    caption:
      '陸地に占める気候帯の割合（％）。いちばん広いのは乾燥帯（約26％）で、熱帯より広い。温帯は約13％しかない',
  },

  // ===== shakai_s156 熱帯 =====
  lf_sh05_156: {
    kind: 'lineChart',
    xLabel: '月',
    yLabel: '気温（℃）',
    xRange: [1, 12],
    series: [
      {
        label: 'シンガポール',
        markers: true,
        points: [
          { x: 1, y: 26.6 }, { x: 2, y: 27.2 }, { x: 3, y: 27.6 }, { x: 4, y: 28.0 },
          { x: 5, y: 28.4 }, { x: 6, y: 28.3 }, { x: 7, y: 27.9 }, { x: 8, y: 27.8 },
          { x: 9, y: 27.7 }, { x: 10, y: 27.6 }, { x: 11, y: 27.0 }, { x: 12, y: 26.6 },
        ],
      },
      {
        label: '東京',
        markers: true,
        points: [
          { x: 1, y: 5.4 }, { x: 2, y: 6.1 }, { x: 3, y: 9.4 }, { x: 4, y: 14.3 },
          { x: 5, y: 18.8 }, { x: 6, y: 21.9 }, { x: 7, y: 25.7 }, { x: 8, y: 26.9 },
          { x: 9, y: 23.3 }, { x: 10, y: 18.0 }, { x: 11, y: 12.5 }, { x: 12, y: 7.7 },
        ],
      },
    ],
    caption:
      '月別平均気温。シンガポール（熱帯雨林気候）は26.6〜28.4℃で年較差が約2℃しかない。東京は5.4〜26.9℃で年較差が約21℃',
  },

  // ===== shakai_s157 乾燥帯 =====
  lf_sh05_157: {
    kind: 'barChart',
    yLabel: '年降水量（mm）',
    bars: [
      { label: 'カイロ', value: 25 },
      { label: 'テヘラン', value: 230 },
      { label: 'ローマ', value: 800 },
      { label: '東京', value: 1600 },
    ],
    caption:
      '年降水量の比較（mm）。カイロ（砂漠気候）は約25mmで東京の約64分の1。テヘランはステップ気候で約230mm',
  },

  // ===== shakai_s158 温帯3タイプ =====
  lf_sh05_158: {
    kind: 'lineChart',
    xLabel: '月',
    yLabel: '降水量（mm）',
    xRange: [1, 12],
    series: [
      {
        label: '東京',
        markers: true,
        points: [
          { x: 1, y: 60 }, { x: 2, y: 57 }, { x: 3, y: 116 }, { x: 4, y: 134 },
          { x: 5, y: 140 }, { x: 6, y: 168 }, { x: 7, y: 156 }, { x: 8, y: 155 },
          { x: 9, y: 225 }, { x: 10, y: 235 }, { x: 11, y: 96 }, { x: 12, y: 58 },
        ],
      },
      {
        label: 'ローマ',
        markers: true,
        points: [
          { x: 1, y: 67 }, { x: 2, y: 73 }, { x: 3, y: 58 }, { x: 4, y: 81 },
          { x: 5, y: 53 }, { x: 6, y: 34 }, { x: 7, y: 19 }, { x: 8, y: 37 },
          { x: 9, y: 73 }, { x: 10, y: 113 }, { x: 11, y: 115 }, { x: 12, y: 97 },
        ],
      },
      {
        label: 'ロンドン',
        markers: true,
        points: [
          { x: 1, y: 55 }, { x: 2, y: 41 }, { x: 3, y: 42 }, { x: 4, y: 44 },
          { x: 5, y: 49 }, { x: 6, y: 45 }, { x: 7, y: 45 }, { x: 8, y: 50 },
          { x: 9, y: 49 }, { x: 10, y: 69 }, { x: 11, y: 59 }, { x: 12, y: 55 },
        ],
      },
    ],
    caption:
      '温帯3タイプの月別降水量。東京（温暖湿潤）は夏〜秋に多雨、ローマ（地中海性）は7月が約19mmで夏に乾燥、ロンドン（西岸海洋性）は年間を通じて40〜70mmで平均している',
  },

  // ===== shakai_s159 冷帯 =====
  lf_sh05_159: {
    kind: 'lineChart',
    xLabel: '月',
    yLabel: '気温（℃）',
    xRange: [1, 12],
    series: [
      {
        label: 'イルクーツク',
        markers: true,
        points: [
          { x: 1, y: -18 }, { x: 2, y: -15 }, { x: 3, y: -6 }, { x: 4, y: 3 },
          { x: 5, y: 10 }, { x: 6, y: 16 }, { x: 7, y: 18 }, { x: 8, y: 16 },
          { x: 9, y: 9 }, { x: 10, y: 1 }, { x: 11, y: -9 }, { x: 12, y: -16 },
        ],
      },
      {
        label: '札幌',
        markers: true,
        points: [
          { x: 1, y: -3.2 }, { x: 2, y: -2.7 }, { x: 3, y: 1.1 }, { x: 4, y: 7.3 },
          { x: 5, y: 13.0 }, { x: 6, y: 17.0 }, { x: 7, y: 21.1 }, { x: 8, y: 22.3 },
          { x: 9, y: 18.6 }, { x: 10, y: 12.1 }, { x: 11, y: 5.2 }, { x: 12, y: -0.9 },
        ],
      },
    ],
    caption:
      '冷帯（亜寒帯）の月別平均気温。イルクーツク（シベリア）は1月−18℃・7月18℃で年較差が約36℃。札幌も冷帯だが海に近く、年較差は約25℃',
  },

  // ===== shakai_s160 寒帯・高山気候 =====
  lf_sh05_160: {
    kind: 'lineChart',
    xLabel: '月',
    yLabel: '気温（℃）',
    xRange: [1, 12],
    series: [
      {
        label: 'ツンドラ',
        markers: true,
        points: [
          { x: 1, y: -25 }, { x: 2, y: -27 }, { x: 3, y: -25 }, { x: 4, y: -17 },
          { x: 5, y: -6 }, { x: 6, y: 1 }, { x: 7, y: 5 }, { x: 8, y: 4 },
          { x: 9, y: 0 }, { x: 10, y: -9 }, { x: 11, y: -17 }, { x: 12, y: -22 },
        ],
      },
      {
        label: '昭和基地',
        markers: true,
        points: [
          { x: 1, y: -1 }, { x: 2, y: -3 }, { x: 3, y: -7 }, { x: 4, y: -10 },
          { x: 5, y: -12 }, { x: 6, y: -15 }, { x: 7, y: -17 }, { x: 8, y: -18 },
          { x: 9, y: -16 }, { x: 10, y: -12 }, { x: 11, y: -6 }, { x: 12, y: -1 },
        ],
      },
    ],
    caption:
      '寒帯の月別平均気温。北極海沿岸のツンドラ気候は7月でも約5℃。南極の昭和基地は南半球なので12〜1月がいちばん暖かく、7〜8月がいちばん寒い（季節が逆）',
  },

  // ===== shakai_s161 アメリカ合衆国 =====
  lf_sh05_161: {
    kind: 'barChart',
    yLabel: '輸出額（兆円）',
    bars: [
      { label: 'アメリカ', value: 20.3 },
      { label: '中国', value: 17.8 },
      { label: '韓国', value: 6.1 },
      { label: '台湾', value: 5.7 },
      { label: '香港', value: 3.7 },
    ],
    caption:
      '日本の輸出相手（近年・兆円）。アメリカと中国の2つで日本の輸出の約4割を占める',
  },

  // ===== shakai_s162 中国 =====
  lf_sh05_162: {
    kind: 'pieChart',
    slices: [
      { label: 'その他', value: 50 },
      { label: '中国', value: 22 },
      { label: 'アメリカ', value: 10 },
      { label: '豪州', value: 9 },
      { label: 'UAE', value: 5 },
      { label: 'サウジ', value: 4 },
    ],
    caption:
      '日本の輸入相手国の割合（近年・％）。1位は中国で約2割。豪州＝オーストラリア、UAE＝アラブ首長国連邦、サウジ＝サウジアラビア',
  },

  // ===== shakai_s163 韓国と東アジア =====
  lf_sh05_163: {
    kind: 'barChart',
    yLabel: '人口（億人）',
    bars: [
      { label: '中国', value: 14.1 },
      { label: '日本', value: 1.24 },
      { label: '韓国', value: 0.51 },
      { label: '北朝鮮', value: 0.26 },
      { label: '台湾', value: 0.23 },
    ],
    caption:
      '東アジアのおもな国・地域の人口（億人）。中国が飛びぬけて多く、韓国は約5100万人で日本の半分以下',
  },

  // ===== shakai_s164 サウジアラビアと西アジア =====
  lf_sh05_164: {
    kind: 'pieChart',
    slices: [
      { label: 'サウジ', value: 40 },
      { label: 'UAE', value: 38 },
      { label: 'クウェート', value: 8 },
      { label: 'カタール', value: 7 },
      { label: 'その他', value: 7 },
    ],
    caption:
      '日本の原油の輸入先（近年・％）。1位サウジアラビア、2位アラブ首長国連邦（UAE）。上位はすべて中東の国で、中東依存度は9割を超える',
  },

  // ===== shakai_s165 オーストラリア =====
  lf_sh05_165: {
    kind: 'pieChart',
    slices: [
      { label: '豪州', value: 56 },
      { label: 'ブラジル', value: 27 },
      { label: 'カナダ', value: 7 },
      { label: '南ア', value: 4 },
      { label: 'その他', value: 6 },
    ],
    caption:
      '日本の鉄鉱石の輸入先（近年・％）。豪州（オーストラリア）が約6割、ブラジルが約3割で、この2国だけで8割を超える。南ア＝南アフリカ共和国',
  },

  // ===== shakai_s166 ブラジル =====
  lf_sh05_166: {
    kind: 'barChart',
    yLabel: '生産量（万t）',
    bars: [
      { label: 'ブラジル', value: 317 },
      { label: 'ベトナム', value: 195 },
      { label: 'コロンビア', value: 68 },
      { label: 'エチオピア', value: 50 },
    ],
    caption:
      'コーヒー豆の生産量（万t・近年）。ブラジルが世界1位で世界のおよそ3割を占め、2位はベトナム',
  },

  // ===== shakai_s167 世界人口の推移 =====
  lf_sh05_167: {
    kind: 'lineChart',
    xLabel: '年',
    yLabel: '世界人口（億人）',
    series: [
      {
        label: '実績',
        markers: true,
        points: [
          { x: 1950, y: 25 }, { x: 1960, y: 30 }, { x: 1970, y: 37 }, { x: 1980, y: 45 },
          { x: 1990, y: 53 }, { x: 2000, y: 61 }, { x: 2010, y: 69 }, { x: 2022, y: 80 },
        ],
      },
      {
        label: '予測',
        dashed: true,
        markers: true,
        points: [
          { x: 2022, y: 80 }, { x: 2030, y: 85 }, { x: 2040, y: 92 }, { x: 2050, y: 97 },
        ],
      },
    ],
    caption:
      '世界人口の推移（億人）。1950年の約25億人から2022年に80億人を突破し、約70年で3倍以上。2050年には約97億人と予測されている',
  },

  // ===== shakai_s168 人口の多い国 =====
  lf_sh05_168: {
    kind: 'barChart',
    yLabel: '人口（億人）',
    bars: [
      { label: 'インド', value: 14.3 },
      { label: '中国', value: 14.1 },
      { label: 'アメリカ', value: 3.4 },
      { label: 'インドネシア', value: 2.8 },
      { label: 'パキスタン', value: 2.4 },
    ],
    caption:
      '人口の多い国ベスト5（億人・近年）。2023年にインドが中国を抜いて世界1位になった。上位5か国のうち4か国がアジアの国',
  },

  // ===== shakai_s169 面積の大きい国 =====
  lf_sh05_169: {
    kind: 'barChart',
    yLabel: '面積（万km²）',
    bars: [
      { label: 'ロシア', value: 1710 },
      { label: 'カナダ', value: 999 },
      { label: 'アメリカ', value: 983 },
      { label: '中国', value: 960 },
      { label: 'ブラジル', value: 852 },
      { label: '日本', value: 38 },
    ],
    caption:
      '面積の大きい国ベスト5と日本（万km²）。1位ロシアは2位カナダの約1.7倍。日本の約38万km²はロシアの約45分の1',
  },

  // ===== shakai_s170 人口密度 =====
  lf_sh05_170: {
    kind: 'barChart',
    yLabel: '人口密度（人/km²）',
    bars: [
      { label: 'バングラ', value: 1170 },
      { label: '韓国', value: 517 },
      { label: '日本', value: 330 },
      { label: '中国', value: 147 },
      { label: 'アメリカ', value: 35 },
      { label: '豪州', value: 3 },
    ],
    caption:
      '人口密度（人/km²）。バングラ＝バングラデシュ、豪州＝オーストラリア。人口世界2位の中国は約147人/km²で、日本（約330）より低い',
  },

  // ===== shakai_s171 経度のものさし =====
  lf_sh05_171: {
    kind: 'numberLine',
    min: -180,
    max: 180,
    step: 60,
    points: [
      { x: -120, label: '西経120°' },
      { x: 0, label: '本初子午線' },
      { x: 135, label: '東経135°' },
    ],
    caption:
      '経度のものさし。0度の経線（本初子午線）はイギリスのロンドンを通り、そこから東へ180度が東経、西へ180度が西経。日本の標準時子午線は東経135度（兵庫県明石市）',
  },

  // ===== shakai_s172 緯度のものさし =====
  lf_sh05_172: {
    kind: 'numberLine',
    min: -90,
    max: 90,
    step: 30,
    points: [
      { x: -23.4, label: '南回帰線' },
      { x: 0, label: '赤道' },
      { x: 23.4, label: '北回帰線' },
      { x: 66.6, label: '北極圏' },
    ],
    caption:
      '緯度のものさし。赤道が0度、北極点が北緯90度、南極点が南緯90度。北回帰線は北緯約23.4度、北極圏は北緯約66.6度。緯度1度はおよそ111km',
  },

  // ===== shakai_s173 15度＝1時間 =====
  lf_sh05_173: {
    kind: 'numberLine',
    min: 0,
    max: 180,
    step: 15,
    points: [
      { x: 15, label: '1時間' },
      { x: 90, label: '6時間' },
      { x: 135, label: '9時間' },
      { x: 180, label: '12時間' },
    ],
    caption:
      '経度差（度）と時差（時間）の関係。360度÷24時間＝15度で1時間。経度差135度なら135÷15＝9時間、経度差180度なら180÷15＝12時間',
  },

  // ===== shakai_s174 都市の経度 =====
  lf_sh05_174: {
    kind: 'numberLine',
    min: -180,
    max: 180,
    step: 60,
    points: [
      { x: -75, label: 'ニューヨーク' },
      { x: 0, label: 'ロンドン' },
      { x: 135, label: '東京' },
    ],
    caption:
      '3都市の経度。ロンドン0度、東京は東経135度、ニューヨークは西経75度。東京とニューヨークの経度差は135＋75＝210度なので、210÷15＝14時間の時差',
  },

  // ===== shakai_s175 世界標準時とのずれ =====
  lf_sh05_175: {
    kind: 'numberLine',
    min: -12,
    max: 12,
    step: 6,
    points: [
      { x: -5, label: 'ニューヨーク' },
      { x: 0, label: 'ロンドン' },
      { x: 9, label: '東京' },
    ],
    caption:
      'ロンドン（世界標準時）とのずれ（時間）。＋は時刻が進んでいる、−はおくれている。東経側は＋、西経側は−になる。両はしの±12時間のあたりに日付変更線がある',
  },

  // ===== shakai_s176 雨温図の実戦 =====
  lf_sh05_176: {
    kind: 'lineChart',
    xLabel: '月',
    yLabel: '気温（℃）',
    xRange: [1, 12],
    series: [
      {
        label: 'シンガポール',
        markers: true,
        points: [
          { x: 1, y: 26.6 }, { x: 2, y: 27.2 }, { x: 3, y: 27.6 }, { x: 4, y: 28.0 },
          { x: 5, y: 28.4 }, { x: 6, y: 28.3 }, { x: 7, y: 27.9 }, { x: 8, y: 27.8 },
          { x: 9, y: 27.7 }, { x: 10, y: 27.6 }, { x: 11, y: 27.0 }, { x: 12, y: 26.6 },
        ],
      },
      {
        label: 'シドニー',
        markers: true,
        points: [
          { x: 1, y: 23.6 }, { x: 2, y: 23.5 }, { x: 3, y: 22.2 }, { x: 4, y: 19.5 },
          { x: 5, y: 16.5 }, { x: 6, y: 14.0 }, { x: 7, y: 13.0 }, { x: 8, y: 14.3 },
          { x: 9, y: 17.0 }, { x: 10, y: 19.0 }, { x: 11, y: 20.8 }, { x: 12, y: 22.5 },
        ],
      },
      {
        label: '東京',
        markers: true,
        points: [
          { x: 1, y: 5.4 }, { x: 2, y: 6.1 }, { x: 3, y: 9.4 }, { x: 4, y: 14.3 },
          { x: 5, y: 18.8 }, { x: 6, y: 21.9 }, { x: 7, y: 25.7 }, { x: 8, y: 26.9 },
          { x: 9, y: 23.3 }, { x: 10, y: 18.0 }, { x: 11, y: 12.5 }, { x: 12, y: 7.7 },
        ],
      },
    ],
    caption:
      '3都市の月別平均気温。シンガポールは年較差約2℃（熱帯）、東京は7〜8月が山（北半球の温帯）、シドニーは1月が山で7月が谷（南半球の温帯）',
  },

  // ===== shakai_s177 小麦の統計 =====
  lf_sh05_177: {
    kind: 'barChart',
    yLabel: '生産量（万t）',
    bars: [
      { label: '中国', value: 13700 },
      { label: 'インド', value: 11000 },
      { label: 'ロシア', value: 9000 },
      { label: 'アメリカ', value: 4500 },
      { label: 'フランス', value: 3400 },
    ],
    caption:
      '小麦の生産量（万t・近年のおよその値）。1位中国・2位インドだが、この2国は人口が多く国内で消費するため輸出は多くない。輸出の中心はロシア・アメリカ・カナダなど',
  },

  // ===== shakai_s178 飛行機と時差 =====
  lf_sh05_178: {
    kind: 'numberLine',
    min: 0,
    max: 24,
    step: 3,
    segments: [{ from: 11, to: 23 }],
    points: [
      { x: 11, label: '出発11時' },
      { x: 23, label: '到着23時' },
    ],
    caption:
      '日本時間の目もり（時）。成田を1月1日午前11時に出発し12時間飛ぶと、日本時間では1月1日午後11時に到着。シカゴ（西経90度）との時差は（135＋90）÷15＝15時間なので、23時−15時間＝1月1日午前8時が現地時刻',
  },

  // ===== shakai_s179 森林の割合 =====
  lf_sh05_179: {
    kind: 'barChart',
    yLabel: '森林の割合（％）',
    bars: [
      { label: '日本', value: 68 },
      { label: 'ブラジル', value: 59 },
      { label: 'アメリカ', value: 34 },
      { label: '中国', value: 23 },
      { label: '豪州', value: 17 },
    ],
    caption:
      '国土に占める森林の割合（％）。日本は約68％で世界的にも高い。ただし国土がせまいため森林「面積」ではロシア・ブラジル・カナダなどに遠くおよばない',
  },

  // ===== shakai_s180 日本との時差の早見表 =====
  lf_sh05_180: {
    kind: 'numberLine',
    min: 0,
    max: 18,
    step: 3,
    points: [
      { x: 1, label: 'ペキン' },
      { x: 9, label: 'ロンドン' },
      { x: 14, label: 'ニューヨーク' },
      { x: 17, label: 'ロス' },
    ],
    caption:
      '日本より何時間おくれているか（時間）。ペキン（東経120度）1時間、ロンドン（0度）9時間、ニューヨーク（西経75度）14時間、ロス＝ロサンゼルス（西経120度）17時間',
  },
};
