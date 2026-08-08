import type { Figure } from './figures';

// 中学受験社会 拡張ユニットXII「公民：経済・財政・国際社会」（shakai_s411〜shakai_s450）
// 専用の図解データ。数値はすべて lessons-shakai-ext12.ts 本文中の記述と一致させてある。
// 年度によって変動する統計は「おおよその割合」としてキャプションに明記している。
export const lessonFigsShakaiExt12: Record<string, Figure> = {
  // ===== 411. 経済の三主体 =====
  lf_shakai_ext12_411: {
    kind: 'polygon',
    points: [
      { x: 0, y: 2, label: '家計' },
      { x: 4, y: 2, label: '企業' },
      { x: 2, y: 0, label: '政府' },
    ],
    sideLabels: ['労働力／代金', '税金／補助金', '税金／公共サービス'],
    fill: true,
    caption: '経済の三主体。家計は企業に労働力を提供して賃金を受け取り、企業は家計に商品を売る。家計・企業はともに政府へ税金を納め、政府は公共サービスを提供する',
  },

  // ===== 412. 家計の消費支出の内訳 =====
  lf_shakai_ext12_412: {
    kind: 'pieChart',
    slices: [
      { label: '食料', value: 27 },
      { label: '交通・通信', value: 14 },
      { label: '教養娯楽', value: 9 },
      { label: '光熱・水道', value: 8 },
      { label: '住居', value: 6 },
      { label: 'その他', value: 36 },
    ],
    caption: '家計の消費支出の内訳（おおよその目安）。支出全体に占める食料費の割合をエンゲル係数といい、生活水準が高いほど下がる傾向がある',
  },

  // ===== 413. 大企業と中小企業 =====
  lf_shakai_ext12_413: {
    kind: 'barChart',
    yLabel: '中小企業がしめる割合(%)',
    yMax: 100,
    bars: [
      { label: '企業数', value: 99.7 },
      { label: '働く人の数', value: 70 },
      { label: '製造業出荷額', value: 48 },
    ],
    caption: '日本の企業のうち中小企業がしめる割合（おおよその目安）。数のうえでは99％以上が中小企業だが、出荷額では約半分にとどまる',
  },

  // ===== 414. 労働三権 =====
  lf_shakai_ext12_414: {
    kind: 'polygon',
    points: [
      { x: 2, y: 3, label: '団結権' },
      { x: 0, y: 0, label: '団体交渉権' },
      { x: 4, y: 0, label: '団体行動権' },
    ],
    fill: true,
    caption: '日本国憲法第28条が労働者に保障する労働三権。団体行動権は争議権（ストライキを行う権利）ともいう',
  },

  // ===== 415. クーリング・オフの期間 =====
  lf_shakai_ext12_415: {
    kind: 'barChart',
    yLabel: 'クーリング・オフできる日数',
    bars: [
      { label: '訪問販売', value: 8 },
      { label: '電話勧誘', value: 8 },
      { label: '連鎖販売', value: 20 },
      { label: '業務提供', value: 20 },
    ],
    caption: 'クーリング・オフができる期間。訪問販売・電話勧誘販売は契約書面を受け取った日から8日間、マルチ商法（連鎖販売取引）・業務提供誘引販売取引は20日間',
  },

  // ===== 417. 需要曲線と供給曲線・均衡価格 =====
  lf_shakai_ext12_417: {
    kind: 'coordinate',
    xRange: [0, 10],
    yRange: [0, 12],
    lines: [
      { a: -1, b: 10, label: '需要曲線', color: '#E11D48' },
      { a: 1, b: 2, label: '供給曲線', color: '#0EA5E9' },
    ],
    points: [{ x: 4, y: 6, label: '均衡点' }],
    caption: '横軸が数量、縦軸が価格。需要曲線は右下がり（値段が下がるほど買いたい量が増える）、供給曲線は右上がり（値段が上がるほど売りたい量が増える）。2本が交わる点で決まる価格が均衡価格',
  },

  // ===== 418. 需要が増えたときの価格の動き =====
  lf_shakai_ext12_418: {
    kind: 'coordinate',
    xRange: [0, 12],
    yRange: [0, 14],
    lines: [
      { a: -1, b: 10, label: 'もとの需要', color: '#E11D48' },
      { a: -1, b: 14, label: '需要増加後', color: '#9333EA' },
      { a: 1, b: 2, label: '供給曲線', color: '#0EA5E9' },
    ],
    points: [
      { x: 4, y: 6, label: 'もとの均衡' },
      { x: 6, y: 8, label: '新しい均衡' },
    ],
    caption: '流行などで需要が増えると需要曲線は右へ動き、均衡点は右上へ移る。つまり価格も取引量も上がる',
  },

  // ===== 419. 寡占市場の模式図 =====
  lf_shakai_ext12_419: {
    kind: 'barChart',
    yLabel: '市場でしめる割合(%)',
    yMax: 100,
    bars: [
      { label: 'A社', value: 40 },
      { label: 'B社', value: 30 },
      { label: 'C社', value: 20 },
      { label: 'その他', value: 10 },
    ],
    caption: '寡占市場の模式図。少数の大企業が市場の大半をしめると価格競争が働きにくくなり、価格が下がりにくい管理価格が生まれやすい',
  },

  // ===== 420. インフレーションとデフレーション =====
  lf_shakai_ext12_420: {
    kind: 'lineChart',
    xLabel: '時間の経過',
    yLabel: '物価の水準（指数）',
    yRange: [80, 130],
    series: [
      {
        label: 'インフレ',
        color: '#E11D48',
        markers: true,
        points: [
          { x: 0, y: 100 },
          { x: 1, y: 105 },
          { x: 2, y: 112 },
          { x: 3, y: 120 },
        ],
      },
      {
        label: 'デフレ',
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 0, y: 100 },
          { x: 1, y: 96 },
          { x: 2, y: 92 },
          { x: 3, y: 88 },
        ],
      },
    ],
    caption: '物価の動きの模式図。物価が上がり続けお金の価値が下がるのがインフレーション、物価が下がり続けお金の価値が上がるのがデフレーション',
  },

  // ===== 421. 国の税収の内訳 =====
  lf_shakai_ext12_421: {
    kind: 'pieChart',
    slices: [
      { label: '消費税', value: 33 },
      { label: '所得税', value: 30 },
      { label: '法人税', value: 19 },
      { label: 'その他の国税', value: 18 },
    ],
    caption: '国の税収にしめる主な税のおおよその割合。所得税・法人税・消費税を基幹三税といい、あわせて8割ほどをしめる（年度により変動する）',
  },

  // ===== 422. 所得税の累進課税 =====
  lf_shakai_ext12_422: {
    kind: 'barChart',
    yLabel: '所得税の税率(%)',
    yMax: 50,
    bars: [
      { label: '195万以下', value: 5 },
      { label: '695万以下', value: 20 },
      { label: '1800万以下', value: 33 },
      { label: '4000万超', value: 45 },
    ],
    caption: '所得税は課税所得が多いほど税率が高くなる累進課税（5％〜45％の7段階）。所得の格差を小さくする「所得の再分配」のはたらきをもつ',
  },

  // ===== 423. 消費税率の移り変わり =====
  lf_shakai_ext12_423: {
    kind: 'barChart',
    yLabel: '消費税率(%)',
    yMax: 12,
    bars: [
      { label: '1989年', value: 3 },
      { label: '1997年', value: 5 },
      { label: '2014年', value: 8 },
      { label: '2019年', value: 10 },
    ],
    caption: '消費税率の移り変わり。1989年に3％で導入され、2019年に10％となった（飲食料品などには軽減税率8％が適用される）',
  },

  // ===== 424. 地方公共団体の歳入の内訳 =====
  lf_shakai_ext12_424: {
    kind: 'pieChart',
    slices: [
      { label: '地方税', value: 40 },
      { label: '地方交付税', value: 17 },
      { label: '国庫支出金', value: 16 },
      { label: '地方債', value: 10 },
      { label: 'その他', value: 17 },
    ],
    caption: '地方公共団体の歳入のおおよその内訳。自分で集める地方税は約4割にとどまり、国から配られる地方交付税交付金・国庫支出金への依存が大きい',
  },

  // ===== 425. 直間比率 =====
  lf_shakai_ext12_425: {
    kind: 'barChart',
    yLabel: '国税にしめる割合(%)',
    yMax: 100,
    bars: [
      { label: '直接税', value: 60 },
      { label: '間接税', value: 40 },
    ],
    caption: '日本の国税の直間比率はおよそ6対4。かつては7対3と直接税の比率がもっと高かったが、消費税の導入・税率引き上げで間接税の割合が高まった',
  },

  // ===== 426. 財政の三つのはたらき =====
  lf_shakai_ext12_426: {
    kind: 'polygon',
    points: [
      { x: 2, y: 3, label: '資源配分' },
      { x: 0, y: 0, label: '所得の再分配' },
      { x: 4, y: 0, label: '景気の安定化' },
    ],
    fill: true,
    caption: '財政の三つのはたらき。公共施設などを提供する資源配分、累進課税や社会保障で格差を縮める所得の再分配、増減税や公共事業で景気を調整する景気の安定化',
  },

  // ===== 427. 国の歳入の内訳 =====
  lf_shakai_ext12_427: {
    kind: 'pieChart',
    slices: [
      { label: '消費税', value: 20 },
      { label: '所得税', value: 19 },
      { label: '法人税', value: 12 },
      { label: 'その他の税', value: 9 },
      { label: '公債金', value: 31 },
      { label: 'その他収入', value: 9 },
    ],
    caption: '国の一般会計歳入のおおよその内訳。税収がおよそ6割、借金である公債金がおよそ3割をしめる（年度により変動する）',
  },

  // ===== 428. 国の歳出の内訳 =====
  lf_shakai_ext12_428: {
    kind: 'pieChart',
    slices: [
      { label: '社会保障関係費', value: 33 },
      { label: '国債費', value: 23 },
      { label: '地方交付税等', value: 15 },
      { label: '公共事業費', value: 6 },
      { label: '文教・科学', value: 5 },
      { label: 'その他', value: 18 },
    ],
    caption: '国の一般会計歳出のおおよその内訳。社会保障関係費が最大でおよそ3分の1、借金の返済にあたる国債費が2番目でおよそ4分の1をしめる（年度により変動する）',
  },

  // ===== 429. 国債残高の増加 =====
  lf_shakai_ext12_429: {
    kind: 'lineChart',
    xLabel: '年（年度末）',
    yLabel: '普通国債残高（兆円）',
    xRange: [1990, 2020],
    series: [
      {
        label: '国債残高',
        color: '#E11D48',
        markers: true,
        points: [
          { x: 1990, y: 170 },
          { x: 2000, y: 370 },
          { x: 2010, y: 640 },
          { x: 2020, y: 950 },
        ],
      },
    ],
    caption: '国の借金（普通国債残高）のおおよその推移。1990年度末の約170兆円から2020年度末には約950兆円へふくらんだ',
  },

  // ===== 431. 社会保障の4本柱 =====
  lf_shakai_ext12_431: {
    kind: 'polygon',
    points: [
      { x: 0, y: 3, label: '社会保険' },
      { x: 4, y: 3, label: '公的扶助' },
      { x: 4, y: 0, label: '社会福祉' },
      { x: 0, y: 0, label: '公衆衛生' },
    ],
    fill: true,
    caption: '日本の社会保障制度の4本柱。憲法第25条の生存権（健康で文化的な最低限度の生活を営む権利）を実現するしくみ',
  },

  // ===== 432. 医療保険の自己負担割合 =====
  lf_shakai_ext12_432: {
    kind: 'barChart',
    yLabel: '窓口での自己負担(%)',
    yMax: 40,
    bars: [
      { label: '就学前', value: 20 },
      { label: '小〜69歳', value: 30 },
      { label: '70〜74歳', value: 20 },
      { label: '75歳〜', value: 10 },
    ],
    caption: '医療保険（健康保険）の窓口自己負担の原則。残りは保険料と税金でまかなわれる（所得が高い高齢者は割合が引き上げられる）',
  },

  // ===== 434. 平均寿命ののび =====
  lf_shakai_ext12_434: {
    kind: 'lineChart',
    xLabel: '年',
    yLabel: '平均寿命（歳）',
    xRange: [1950, 2020],
    yRange: [50, 95],
    series: [
      {
        label: '女性',
        color: '#E11D48',
        markers: true,
        points: [
          { x: 1950, y: 61.5 },
          { x: 1980, y: 78.8 },
          { x: 2020, y: 87.7 },
        ],
      },
      {
        label: '男性',
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 1950, y: 58.0 },
          { x: 1980, y: 73.4 },
          { x: 2020, y: 81.6 },
        ],
      },
    ],
    caption: '日本人の平均寿命ののび。上下水道の整備・予防接種・医療の進歩など公衆衛生と医療保険の成果が大きい',
  },

  // ===== 435. 社会保障給付費の内訳 =====
  lf_shakai_ext12_435: {
    kind: 'pieChart',
    slices: [
      { label: '年金', value: 42 },
      { label: '医療', value: 31 },
      { label: '福祉その他（介護など）', value: 27 },
    ],
    caption: '社会保障給付費のおおよその内訳。年金と医療で7割以上をしめ、高齢化にともなって総額はふえ続けている',
  },

  // ===== 436. 合計特殊出生率の低下 =====
  lf_shakai_ext12_436: {
    kind: 'lineChart',
    xLabel: '年',
    yLabel: '合計特殊出生率',
    xRange: [1950, 2020],
    yRange: [0, 4],
    series: [
      {
        label: '出生率',
        color: '#E11D48',
        markers: true,
        points: [
          { x: 1950, y: 3.65 },
          { x: 1970, y: 2.13 },
          { x: 1990, y: 1.54 },
          { x: 2005, y: 1.26 },
          { x: 2020, y: 1.33 },
        ],
      },
    ],
    caption: '合計特殊出生率（1人の女性が一生に産む子どもの平均人数）の推移。人口を保つには約2.07必要とされるが、1970年代半ば以降それを下回り続けている',
  },

  // ===== 437. 高齢化率の上昇 =====
  lf_shakai_ext12_437: {
    kind: 'lineChart',
    xLabel: '年',
    yLabel: '65歳以上の割合(%)',
    xRange: [1950, 2020],
    yRange: [0, 35],
    series: [
      {
        label: '高齢化率',
        color: '#9333EA',
        markers: true,
        points: [
          { x: 1950, y: 4.9 },
          { x: 1970, y: 7.1 },
          { x: 1994, y: 14.1 },
          { x: 2007, y: 21.5 },
          { x: 2020, y: 28.6 },
        ],
      },
    ],
    caption: '高齢化率の推移。7％をこえると高齢化社会（1970年）、14％をこえると高齢社会（1994年）、21％をこえると超高齢社会（2007年）とよばれる',
  },

  // ===== 438. 人口ピラミッドの型の変化 =====
  lf_shakai_ext12_438: {
    kind: 'lineChart',
    xLabel: '年齢（歳）',
    yLabel: '各年代の人口（万人・概数）',
    xRange: [0, 80],
    series: [
      {
        label: '1950年ごろ',
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 0, y: 1100 },
          { x: 10, y: 950 },
          { x: 20, y: 850 },
          { x: 30, y: 700 },
          { x: 40, y: 550 },
          { x: 50, y: 400 },
          { x: 60, y: 250 },
          { x: 70, y: 130 },
          { x: 80, y: 40 },
        ],
      },
      {
        label: '2020年ごろ',
        color: '#E11D48',
        markers: true,
        points: [
          { x: 0, y: 900 },
          { x: 10, y: 1050 },
          { x: 20, y: 1250 },
          { x: 30, y: 1400 },
          { x: 40, y: 1850 },
          { x: 50, y: 1650 },
          { x: 60, y: 1500 },
          { x: 70, y: 1650 },
          { x: 80, y: 1100 },
        ],
      },
    ],
    caption: '年代ごとの人口の模式図（概数）。1950年ごろは若い世代ほど多い富士山型、現在は若い世代が少なく中高年がふくらむつぼ型になっている',
  },

  // ===== 439. 年齢三区分別人口の割合 =====
  lf_shakai_ext12_439: {
    kind: 'pieChart',
    slices: [
      { label: '年少人口(0〜14歳)', value: 12 },
      { label: '生産年齢人口(15〜64歳)', value: 59 },
      { label: '老年人口(65歳以上)', value: 29 },
    ],
    caption: '現在の日本の年齢三区分別人口のおおよその割合。1950年ごろは年少人口が約35％、老年人口が約5％で、今とはまったく逆の形だった',
  },

  // ===== 440. 国際連合の加盟国数の推移 =====
  lf_shakai_ext12_440: {
    kind: 'barChart',
    yLabel: '加盟国数（か国）',
    yMax: 220,
    bars: [
      { label: '1945年', value: 51 },
      { label: '1960年', value: 99 },
      { label: '1970年', value: 127 },
      { label: '1992年', value: 179 },
      { label: '現在', value: 193 },
    ],
    caption: '国際連合の加盟国数の推移。1960年は「アフリカの年」で17か国が独立して一気に加盟し、現在は193か国。日本の加盟は1956年',
  },

  // ===== 441. 国連の主要6機関 =====
  lf_shakai_ext12_441: {
    kind: 'polygon',
    points: [
      { x: 2, y: 4, label: '総会' },
      { x: 4, y: 3, label: '安全保障理事会' },
      { x: 4, y: 1, label: '経済社会理事会' },
      { x: 2, y: 0, label: '信託統治理事会' },
      { x: 0, y: 1, label: '国際司法裁判所' },
      { x: 0, y: 3, label: '事務局' },
    ],
    fill: true,
    caption: '国際連合の主要6機関。本部はアメリカのニューヨーク、国際司法裁判所だけはオランダのハーグに置かれている',
  },

  // ===== 442. 安全保障理事会の常任理事国 =====
  lf_shakai_ext12_442: {
    kind: 'polygon',
    points: [
      { x: 2, y: 4, label: 'アメリカ' },
      { x: 4, y: 2.5, label: 'イギリス' },
      { x: 3, y: 0, label: 'フランス' },
      { x: 1, y: 0, label: 'ロシア' },
      { x: 0, y: 2.5, label: '中国' },
    ],
    fill: true,
    caption: '安全保障理事会の常任理事国5か国。5か国だけが拒否権をもち、1か国でも反対すると重要な議決は成立しない。日本は常任理事国ではない',
  },

  // ===== 445. 国連分担金の割合 =====
  lf_shakai_ext12_445: {
    kind: 'barChart',
    yLabel: '通常予算の分担率(%)',
    yMax: 25,
    bars: [
      { label: 'アメリカ', value: 22.0 },
      { label: '中国', value: 20.0 },
      { label: '日本', value: 6.9 },
      { label: 'ドイツ', value: 6.0 },
      { label: 'イギリス', value: 4.0 },
    ],
    caption: '国連通常予算の分担率のおおよその割合。各国の経済力に応じて3年ごとに決められる。日本は長く2位だったが、中国の経済成長により順位が入れかわった',
  },

  // ===== 446. 大気中の二酸化炭素濃度 =====
  lf_shakai_ext12_446: {
    kind: 'lineChart',
    xLabel: '年',
    yLabel: 'CO₂濃度（ppm）',
    xRange: [1960, 2020],
    yRange: [300, 430],
    series: [
      {
        label: 'CO₂濃度',
        color: '#E11D48',
        markers: true,
        points: [
          { x: 1960, y: 317 },
          { x: 1980, y: 339 },
          { x: 2000, y: 369 },
          { x: 2020, y: 414 },
        ],
      },
    ],
    caption: '大気中の二酸化炭素濃度の上昇。化石燃料の大量消費と森林の減少により増え続け、地球温暖化の最大の原因とされている',
  },

  // ===== 447. 世界の森林面積の減少 =====
  lf_shakai_ext12_447: {
    kind: 'lineChart',
    xLabel: '年',
    yLabel: '世界の森林面積（億ha）',
    xRange: [1990, 2020],
    yRange: [39, 43],
    series: [
      {
        label: '森林面積',
        color: '#16A34A',
        markers: true,
        points: [
          { x: 1990, y: 42.4 },
          { x: 2000, y: 41.6 },
          { x: 2010, y: 41.1 },
          { x: 2020, y: 40.6 },
        ],
      },
    ],
    caption: '世界の森林面積の減少（おおよその値）。特に熱帯林の減少が大きく、焼畑・農地開発・過度な伐採が原因。森林の減少は温暖化と砂漠化の両方を進める',
  },

  // ===== 448. 二酸化炭素排出量の国別割合 =====
  lf_shakai_ext12_448: {
    kind: 'barChart',
    yLabel: '世界の排出量にしめる割合(%)',
    yMax: 40,
    bars: [
      { label: '中国', value: 32 },
      { label: 'アメリカ', value: 13 },
      { label: 'インド', value: 7 },
      { label: 'ロシア', value: 5 },
      { label: '日本', value: 3 },
    ],
    caption: '二酸化炭素排出量の国別割合（おおよその目安）。京都議定書では先進国だけに削減義務があったが、パリ協定では途上国をふくむすべての参加国が目標をかかげる',
  },

  // ===== 449. 日本の発電電力量の内訳 =====
  lf_shakai_ext12_449: {
    kind: 'pieChart',
    slices: [
      { label: '火力', value: 72 },
      { label: '再生可能エネルギー', value: 22 },
      { label: '原子力', value: 6 },
    ],
    caption: '日本の発電電力量のおおよその内訳。火力が7割をこえ、その燃料の大部分を輸入に頼っている。再生可能エネルギー（水力・太陽光・風力など）の拡大が課題',
  },

  // ===== 450. 世界の人口の地域別割合 =====
  lf_shakai_ext12_450: {
    kind: 'pieChart',
    slices: [
      { label: 'アジア', value: 59 },
      { label: 'アフリカ', value: 18 },
      { label: 'ヨーロッパ', value: 9 },
      { label: '中南アメリカ', value: 8 },
      { label: '北アメリカ', value: 5 },
      { label: 'オセアニア', value: 1 },
    ],
    caption: '世界の人口の地域別割合（おおよその目安）。人口の多くは発展途上国が集中するアジア・アフリカにあり、南北問題の背景となっている',
  },
};
