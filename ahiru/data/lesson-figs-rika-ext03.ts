import type { Figure } from './figures';

// 中学受験理科 拡張ユニットIII「生態系・環境」（rika_s076〜s100）専用の図解データ。
// lessons-rika-ext03.ts の各Lessonのsections[].figureIdから参照される。
export const lessonFigsRikaExt03: Record<string, Figure> = {
  // s076: エネルギーの流れ（生産者→一次消費者→二次消費者の個体数の目安）
  rext03_s076b: {
    kind: 'barChart',
    xLabel: '栄養段階',
    yLabel: '個体数の目安',
    bars: [
      { label: '生産者(草)', value: 100000 },
      { label: '一次消費者(バッタ)', value: 10000 },
      { label: '二次消費者(カエル)', value: 1000 },
    ],
    caption: '食べる・食べられるの関係で上位に移るほど個体数は少なくなる（模式的な例）',
  },

  // s077: 陸上食物連鎖の個体数の目安
  rext03_s077a: {
    kind: 'barChart',
    xLabel: '生物',
    yLabel: '個体数の目安',
    bars: [
      { label: 'イネ', value: 100000 },
      { label: 'バッタ', value: 10000 },
      { label: 'カエル', value: 1000 },
      { label: 'ヘビ', value: 100 },
      { label: 'タカ', value: 10 },
    ],
    caption: 'イネ→バッタ→カエル→ヘビ→タカの食物連鎖における個体数の目安（実際の数値は生態系によって異なる）',
  },

  // s078: 水中食物連鎖の個体数の目安
  rext03_s078a: {
    kind: 'barChart',
    xLabel: '生物',
    yLabel: '個体数の目安',
    bars: [
      { label: '植物プランクトン', value: 1000000 },
      { label: '動物プランクトン(ミジンコ)', value: 100000 },
      { label: 'メダカ', value: 5000 },
      { label: 'ザリガニ', value: 200 },
    ],
    caption: '水中の食物連鎖における個体数の目安（実際の数値は生態系によって異なる）',
  },

  // s081: 生産者・消費者・分解者の判別演習まとめ（10種の分類）
  rext03_s081a: {
    kind: 'pieChart',
    slices: [
      { label: '生産者(イネ・ワカメ・コケ)', value: 3, color: '#22C55E' },
      { label: '消費者(バッタ・カエル・ヘビ・ミジンコ・ゾウリムシ)', value: 5, color: '#0EA5E9' },
      { label: '分解者(シイタケ・乳酸菌)', value: 2, color: '#B45309' },
    ],
    caption: '10種類の生物を生産者・消費者・分解者に分類した演習のまとめ',
  },

  // s082: 個体数のピラミッド
  rext03_s082a: {
    kind: 'barChart',
    xLabel: '栄養段階',
    yLabel: '個体数',
    bars: [
      { label: '生産者(草)', value: 100000 },
      { label: '一次消費者(バッタ)', value: 10000 },
      { label: '二次消費者(カエル)', value: 1000 },
      { label: '三次消費者(ヘビ)', value: 100 },
      { label: '高次消費者(タカ)', value: 10 },
    ],
    caption: '個体数のピラミッド（模式的な例。実際の比率は生態系ごとに異なる）',
  },

  // s082: 生物量のピラミッド（重さ）
  rext03_s082b: {
    kind: 'barChart',
    xLabel: '栄養段階',
    yLabel: '生物量(kg)',
    bars: [
      { label: '生産者', value: 500 },
      { label: '一次消費者', value: 80 },
      { label: '二次消費者', value: 15 },
      { label: '三次消費者', value: 3 },
    ],
    caption: '生物量（重さの合計）で見たピラミッドの例',
  },

  // s083: 被食者と捕食者の周期的な個体数変動（模式的）
  rext03_s083a: {
    kind: 'lineChart',
    xLabel: '時間の経過',
    yLabel: '個体数の目安',
    series: [
      {
        label: 'バッタ(被食者)',
        color: '#22C55E',
        markers: true,
        points: [
          { x: 0, y: 20 }, { x: 1, y: 60 }, { x: 2, y: 90 }, { x: 3, y: 50 },
          { x: 4, y: 20 }, { x: 5, y: 55 }, { x: 6, y: 85 },
        ],
      },
      {
        label: 'カエル(捕食者)',
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 0, y: 10 }, { x: 1, y: 15 }, { x: 2, y: 35 }, { x: 3, y: 55 },
          { x: 4, y: 30 }, { x: 5, y: 15 }, { x: 6, y: 25 },
        ],
      },
    ],
    caption: '被食者(バッタ)が増えたあと、少し遅れて捕食者(カエル)が増える周期的な変動（模式的なグラフ）',
  },

  // s084: イエローストーンのオオカミとシカ(エルク)の個体数指数（模式的）
  rext03_s084a: {
    kind: 'lineChart',
    xLabel: '年',
    yLabel: '個体数指数(目安)',
    series: [
      {
        label: 'シカ(エルク)',
        color: '#B45309',
        markers: true,
        points: [
          { x: 1900, y: 100 }, { x: 1926, y: 180 }, { x: 1960, y: 220 },
          { x: 1995, y: 190 }, { x: 2010, y: 110 },
        ],
      },
      {
        label: 'オオカミ',
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 1900, y: 40 }, { x: 1926, y: 0 }, { x: 1960, y: 0 },
          { x: 1995, y: 5 }, { x: 2010, y: 20 },
        ],
      },
    ],
    caption: '数値は状況をわかりやすくするための目安（指数）。1926年ごろのオオカミ根絶と、1995年の再導入という史実にもとづく模式的なグラフ',
  },

  // s085: 害虫の大発生と防除による被害の変化（模式的な例）
  rext03_s085a: {
    kind: 'lineChart',
    xLabel: '年',
    yLabel: '被害の大きさ(目安)',
    series: [
      {
        color: '#EF4444',
        markers: true,
        points: [
          { x: 0, y: 10 }, { x: 5, y: 30 }, { x: 10, y: 80 }, { x: 12, y: 90 },
          { x: 15, y: 50 }, { x: 20, y: 20 }, { x: 25, y: 10 },
        ],
      },
    ],
    caption: '模式的な例：ある地域で害虫が大発生し、その後の防除・管理によって被害が減少していく様子を表した概念図（数値は仮のもの）',
  },

  // s086: ピラミッド計算演習（例題の数値）
  rext03_s086a: {
    kind: 'barChart',
    xLabel: '栄養段階',
    yLabel: '個体数',
    bars: [
      { label: '生産者(植物プランクトン)', value: 1000000 },
      { label: '一次消費者(ミジンコ)', value: 50000 },
      { label: '二次消費者(小魚)', value: 2000 },
      { label: '三次消費者(大きな魚)', value: 80 },
    ],
    caption: '例題：ある池の生態系の個体数（段階ごとの比は一定ではない）',
  },

  // s088: 空気の組成（体積の割合）
  rext03_s088a: {
    kind: 'pieChart',
    slices: [
      { label: '窒素(N₂) 約78%', value: 78, color: '#0EA5E9' },
      { label: '酸素(O₂) 約21%', value: 21, color: '#22C55E' },
      { label: 'その他(アルゴン・CO₂など) 約1%', value: 1, color: '#94A3B8' },
    ],
    caption: '空気の組成（体積の割合、およその値）。二酸化炭素は「その他」の中の約0.04%とごくわずか',
  },

  // s089: 大気中CO2濃度の変化（キーリング曲線・長期傾向のみ）
  rext03_s089a: {
    kind: 'lineChart',
    xLabel: '年',
    yLabel: 'CO₂濃度(ppm)',
    series: [
      {
        color: '#EF4444',
        markers: true,
        points: [
          { x: 1958, y: 315 }, { x: 1970, y: 325 }, { x: 1985, y: 345 },
          { x: 2000, y: 370 }, { x: 2013, y: 400 }, { x: 2023, y: 420 },
        ],
      },
    ],
    caption: '大気中の二酸化炭素濃度(ppm)の変化の概略（マウナロア観測所のデータをもとにした長期傾向。季節変動は省略）',
  },

  // s092: 外来種侵入後の在来魚種数の変化（模式的）
  rext03_s092a: {
    kind: 'lineChart',
    xLabel: '年',
    yLabel: '在来魚の種類数(目安)',
    series: [
      {
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 1920, y: 8 }, { x: 1930, y: 8 }, { x: 1950, y: 7 },
          { x: 1980, y: 5 }, { x: 2000, y: 3 }, { x: 2020, y: 2 },
        ],
      },
    ],
    caption: 'ある湖にオオクチバスが侵入した後の在来魚の種類数の変化（模式的なイメージ）',
  },

  // s093: 世界の平均気温の上昇（産業革命前との差、目安）
  rext03_s093a: {
    kind: 'lineChart',
    xLabel: '年',
    yLabel: '気温の上昇(℃・目安)',
    series: [
      {
        color: '#EF4444',
        markers: true,
        points: [
          { x: 1900, y: 0.0 }, { x: 1950, y: 0.2 }, { x: 1980, y: 0.4 },
          { x: 2000, y: 0.6 }, { x: 2020, y: 1.1 }, { x: 2023, y: 1.2 },
        ],
      },
    ],
    caption: '産業革命前(1850〜1900年ごろ)と比べた世界の平均気温の上昇の目安（IPCC等の報告に基づくおおよその値）',
  },

  // s094: 富栄養化によるプランクトン量の変化（模式的）
  rext03_s094a: {
    kind: 'lineChart',
    xLabel: '日数',
    yLabel: 'プランクトン量(目安)',
    series: [
      {
        color: '#22C55E',
        markers: true,
        points: [
          { x: 0, y: 10 }, { x: 5, y: 15 }, { x: 10, y: 80 },
          { x: 15, y: 90 }, { x: 20, y: 20 },
        ],
      },
    ],
    caption: '生活排水の流入をきっかけに植物プランクトンが異常増殖し（赤潮・アオコ）、その後死滅していく様子の模式図',
  },

  // s095: 森林の階層構造（高さの目安）
  rext03_s095a: {
    kind: 'barChart',
    xLabel: '階層',
    yLabel: '高さ(m)の目安',
    bars: [
      { label: '高木層', value: 20 },
      { label: '亜高木層', value: 10 },
      { label: '低木層', value: 3 },
      { label: '草本層', value: 0.5 },
      { label: '地表層', value: 0.1 },
    ],
    caption: '森林の階層構造とおおよその高さの目安',
  },

  // s096: 里山・原生林・都市部の生物種数比較（模式的なイメージ）
  rext03_s096a: {
    kind: 'barChart',
    xLabel: '環境',
    yLabel: '生物の種類数(目安)',
    bars: [
      { label: '里山', value: 40 },
      { label: '原生林', value: 25 },
      { label: '都市部', value: 10 },
    ],
    caption: '人の適度な管理が入る里山は、原生林や都市部と比べて多様な環境がそろい、生物の種類が豊富になりやすいと言われる（模式的なイメージ）',
  },

  // s098: 総合演習① 草原の生態系のピラミッド（例題の数値）
  rext03_s098a: {
    kind: 'barChart',
    xLabel: '栄養段階',
    yLabel: '個体数',
    bars: [
      { label: '生産者(牧草)', value: 800000 },
      { label: '一次消費者(ウサギ)', value: 40000 },
      { label: '二次消費者(キツネ)', value: 800 },
      { label: '三次消費者(ワシ)', value: 20 },
    ],
    caption: '例題：ある草原の生態系の個体数',
  },

  // s099: 総合演習② 日本のCO2排出量の部門別内訳（概略）
  rext03_s099a: {
    kind: 'pieChart',
    slices: [
      { label: 'エネルギー転換部門', value: 40, color: '#EF4444' },
      { label: '産業部門', value: 25, color: '#0EA5E9' },
      { label: '運輸部門', value: 17, color: '#F59E0B' },
      { label: '業務・家庭部門', value: 12, color: '#22C55E' },
      { label: 'その他', value: 6, color: '#94A3B8' },
    ],
    caption: '日本の二酸化炭素排出量の部門別内訳（環境省資料をもとにしたおおよその割合）',
  },

  // s100: 総合演習③ シマウマとライオンの個体数変化（模式的）
  rext03_s100a: {
    kind: 'lineChart',
    xLabel: '年',
    yLabel: '個体数の目安',
    series: [
      {
        label: 'シマウマ(被食者)',
        color: '#F59E0B',
        markers: true,
        points: [
          { x: 0, y: 500 }, { x: 5, y: 800 }, { x: 10, y: 400 },
          { x: 15, y: 600 }, { x: 20, y: 350 },
        ],
      },
      {
        label: 'ライオン(捕食者)',
        color: '#EF4444',
        markers: true,
        points: [
          { x: 0, y: 50 }, { x: 5, y: 60 }, { x: 10, y: 90 },
          { x: 15, y: 70 }, { x: 20, y: 55 },
        ],
      },
    ],
    caption: 'サバンナにおけるシマウマとライオンの個体数変化（模式的なグラフ）。捕食者の山は被食者の山より少し遅れて現れる',
  },
};
