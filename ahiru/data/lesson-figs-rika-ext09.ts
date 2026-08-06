import type { Figure } from './figures';

// 中学受験理科 拡張ユニットIX「化学：ものの燃え方・気体の性質」（rika_s296〜rika_s335、40セッション）
// 専用の図解データ。lessons-rika-ext09.ts の各Lessonのsections[].figureIdから参照される。
export const lessonFigsRikaExt09: Record<string, Figure> = {
  // s296: 燃焼の3条件（燃える物・酸素・発火点以上の温度）
  r9_296: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: '燃える物' },
      { x: 10, y: 0, label: '酸素' },
      { x: 5, y: 9, label: '発火点以上の温度' },
    ],
    fill: true,
    caption: '燃焼の3条件（燃焼の三要素）：この3つがすべてそろって初めて燃え続ける。1つでも欠けると燃えない・消える。',
  },

  // s297: 発火点の比較（およその値）
  r9_297: {
    kind: 'barChart',
    xLabel: '物質',
    yLabel: '発火点（℃・およその値）',
    bars: [
      { label: 'ろう(パラフィン)', value: 245 },
      { label: 'ガソリン', value: 300 },
      { label: '紙', value: 450 },
      { label: '木材', value: 470 },
    ],
    caption: '発火点はマッチなどの炎を使わずに、その物質自身が燃え始める最低の温度（いずれもおよその値）',
  },

  // s298: 消火の3つの方法
  r9_298: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: '窒息消火（酸素を絶つ）' },
      { x: 10, y: 0, label: '冷却消火（発火点未満に冷やす）' },
      { x: 5, y: 9, label: '除去消火（燃える物を取り除く）' },
    ],
    fill: true,
    caption: '燃焼の3条件のうち、どれか1つでも取り除けば火は消える',
  },

  // s300: 鉄（スチールウール）を燃やす前後の質量変化
  r9_300: {
    kind: 'barChart',
    xLabel: '状態',
    yLabel: '質量（g）',
    bars: [
      { label: '燃焼前（鉄）', value: 1.68 },
      { label: '燃焼後（酸化鉄）', value: 2.32 },
    ],
    caption: '鉄1.68gを完全に酸化させると酸化鉄(Fe₃O₄)2.32gになる。増えた0.64gは結びついた酸素の重さ',
  },

  // s302: ろうそくの炎の各部分の温度
  r9_302: {
    kind: 'barChart',
    xLabel: '炎の部分',
    yLabel: '温度（℃・およその値）',
    bars: [
      { label: '炎心', value: 500 },
      { label: '内炎', value: 1200 },
      { label: '外炎', value: 1400 },
    ],
    caption: '最も明るいのは内炎（すすの発光）だが、最も温度が高いのは外炎（完全燃焼・酸素十分）',
  },

  // s303: ろうそくの燃焼（炭化水素の燃焼と同じしくみ）
  r9_303: {
    kind: 'chemEquation',
    equation: 'CH4 + 2O2 -> CO2 + 2H2O',
    caption: 'メタンの燃焼。ろう（炭素と水素からなる物質）が燃えるのも同じしくみ：炭素→二酸化炭素、水素→水になる',
  },

  // s305: 空気の組成
  r9_305: {
    kind: 'pieChart',
    slices: [
      { label: '窒素', value: 78 },
      { label: '酸素', value: 21 },
      { label: 'その他（アルゴンなど）', value: 1 },
    ],
    caption: '空気の組成（体積の割合）：窒素78%・酸素21%・その他（アルゴン・二酸化炭素など）1%',
  },

  // s306: 燃焼前後の空気の変化（気体検知管で測定）
  r9_306: {
    kind: 'barChart',
    xLabel: '気体（燃焼前後）',
    yLabel: '割合（%）',
    bars: [
      { label: '酸素（燃焼前）', value: 21 },
      { label: '酸素（燃焼後）', value: 17 },
      { label: '二酸化炭素（燃焼前）', value: 0.04 },
      { label: '二酸化炭素（燃焼後）', value: 3 },
    ],
    caption: 'びんの中でろうそくを燃やすと、酸素は21%→約17%に減り、二酸化炭素は0.04%→約3%に増える',
  },

  // s307: 石灰水と二酸化炭素の反応
  r9_307: {
    kind: 'chemEquation',
    equation: 'Ca(OH)2 + CO2 -> CaCO3 + H2O',
    caption: '石灰水が白くにごる反応。白い沈殿の正体は炭酸カルシウム(CaCO₃)',
  },

  // s308: 集気びんの中の酸素濃度の時間変化
  r9_308: {
    kind: 'lineChart',
    xLabel: '燃やし始めてからの時間（秒）',
    yLabel: '酸素濃度（%）',
    series: [
      {
        label: 'びんの中の酸素濃度',
        markers: true,
        points: [
          { x: 0, y: 21 },
          { x: 20, y: 19 },
          { x: 40, y: 17.5 },
          { x: 60, y: 17 },
        ],
      },
    ],
    caption: '酸素濃度が約17%まで下がった時点でろうそくの火が消える（0%になったわけではない）',
  },

  // s310: 空気と酸素の密度比較
  r9_310: {
    kind: 'barChart',
    xLabel: '気体',
    yLabel: '密度比（空気＝1.00）',
    bars: [
      { label: '空気', value: 1.00 },
      { label: '酸素', value: 1.11 },
    ],
    caption: '酸素は空気よりわずかに重い（密度比約1.11）',
  },

  // s311: 酸素の発生（過酸化水素水＋二酸化マンガン）
  r9_311: {
    kind: 'chemEquation',
    equation: '2H2O2 -> 2H2O + O2',
    caption: '過酸化水素水（うすいオキシドール）の分解。触媒：二酸化マンガン（反応前後で変化しない）',
  },

  // s312: 触媒（二酸化マンガン）の役割
  r9_312: {
    kind: 'lineChart',
    xLabel: '時間（秒）',
    yLabel: '発生した酸素の体積（mL）',
    series: [
      {
        label: '二酸化マンガンあり（触媒）',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 5, y: 140 },
          { x: 10, y: 150 },
          { x: 20, y: 150 },
        ],
      },
      {
        label: '二酸化マンガンなし',
        dashed: true,
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 10, y: 60 },
          { x: 20, y: 120 },
          { x: 30, y: 150 },
        ],
      },
    ],
    caption: '触媒は反応の速さを変えるだけ。最終的に発生する酸素の総量（150mL）はどちらも同じ',
  },

  // s314: 酸素中での鉄（スチールウール）の激しい燃焼
  r9_314: {
    kind: 'chemEquation',
    equation: '3Fe + 2O2 -> Fe3O4',
    caption: '純粋な酸素中では鉄（スチールウール）も火花を散らして激しく燃える',
  },

  // s315: 空気と二酸化炭素の密度比較
  r9_315: {
    kind: 'barChart',
    xLabel: '気体',
    yLabel: '密度比（空気＝1.00）',
    bars: [
      { label: '空気', value: 1.00 },
      { label: '二酸化炭素', value: 1.52 },
    ],
    caption: '二酸化炭素は空気よりかなり重い（密度比約1.52＝空気の約1.5倍）',
  },

  // s316: 二酸化炭素の発生（石灰石＋塩酸）
  r9_316: {
    kind: 'chemEquation',
    equation: 'CaCO3 + 2HCl -> CaCl2 + H2O + CO2',
    caption: '石灰石（炭酸カルシウム）にうすい塩酸を加えると二酸化炭素が発生する',
  },

  // s319: 大気中の二酸化炭素濃度の変化（およその値）
  r9_319: {
    kind: 'lineChart',
    xLabel: '西暦（年）',
    yLabel: '大気中の二酸化炭素濃度（ppm・およその値）',
    series: [
      {
        label: '大気中CO₂濃度',
        markers: true,
        points: [
          { x: 1960, y: 315 },
          { x: 1990, y: 355 },
          { x: 2020, y: 415 },
        ],
      },
    ],
    caption: '大気中の二酸化炭素濃度は年々上昇し続けている（数値はおよその値）',
  },

  // s320: 空気と水素の密度比較
  r9_320: {
    kind: 'barChart',
    xLabel: '気体',
    yLabel: '密度比（空気＝1.00）',
    bars: [
      { label: '空気', value: 1.00 },
      { label: '水素', value: 0.07 },
    ],
    caption: '水素はすべての気体の中で最も軽い（密度比約0.07＝空気の約1/14）',
  },

  // s321: 水素の発生（亜鉛＋塩酸）
  r9_321: {
    kind: 'chemEquation',
    equation: 'Zn + 2HCl -> ZnCl2 + H2',
    caption: '亜鉛にうすい塩酸を加えると水素が発生する',
  },

  // s322: 水素の燃焼（燃焼実験の確認反応）
  r9_322: {
    kind: 'chemEquation',
    equation: '2H2 + O2 -> 2H2O',
    caption: '水素が燃えると水ができる。火のついたマッチを近づけると「ポン」と音を立てて燃える',
  },

  // s324: 空気とアンモニアの密度比較
  r9_324: {
    kind: 'barChart',
    xLabel: '気体',
    yLabel: '密度比（空気＝1.00）',
    bars: [
      { label: '空気', value: 1.00 },
      { label: 'アンモニア', value: 0.60 },
    ],
    caption: 'アンモニアは空気より軽い（密度比約0.60）が、水に非常によく溶ける',
  },

  // s325: アンモニアの発生（塩化アンモニウム＋水酸化カルシウム）
  r9_325: {
    kind: 'chemEquation',
    equation: '2NH4Cl + Ca(OH)2 -> CaCl2 + 2H2O + 2NH3',
    caption: '塩化アンモニウムと水酸化カルシウムを混ぜて加熱すると発生する',
  },

  // s326: 塩化水素・二酸化硫黄の密度
  r9_326: {
    kind: 'barChart',
    xLabel: '気体',
    yLabel: '密度比（空気＝1.00）',
    bars: [
      { label: '空気', value: 1.00 },
      { label: '塩化水素', value: 1.26 },
      { label: '二酸化硫黄', value: 2.21 },
    ],
    caption: 'どちらも空気より重く、水によく溶けるため下方置換法で集める',
  },

  // s327: 気体の集め方まとめ（密度比一覧）
  r9_327: {
    kind: 'barChart',
    xLabel: '気体',
    yLabel: '密度比（空気＝1.00）',
    bars: [
      { label: '酸素', value: 1.11 },
      { label: '二酸化炭素', value: 1.52 },
      { label: '水素', value: 0.07 },
      { label: 'アンモニア', value: 0.60 },
      { label: '塩化水素', value: 1.26 },
      { label: '二酸化硫黄', value: 2.21 },
    ],
    caption: '密度（空気より重い・軽い）と水への溶けやすさの組み合わせで集め方（水上・上方・下方置換法）が決まる',
  },

  // s328: 石灰石の重さと発生する二酸化炭素の体積のグラフ①
  r9_328: {
    kind: 'lineChart',
    xLabel: '石灰石の重さ（g）',
    yLabel: '発生した二酸化炭素の体積（mL）',
    series: [
      {
        label: 'うすい塩酸50mL',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 1, y: 240 },
          { x: 2, y: 480 },
          { x: 3, y: 720 },
          { x: 4, y: 720 },
          { x: 5, y: 720 },
          { x: 6, y: 720 },
        ],
      },
    ],
    caption: '石灰石3gまでは比例して増えるが、塩酸50mLがすべて反応し切ると720mLで頭打ちになる（グラフが折れ曲がる）',
  },

  // s329: 塩酸の体積を2倍にした場合のグラフ（折れ曲がる位置の変化）
  r9_329: {
    kind: 'lineChart',
    xLabel: '石灰石の重さ（g）',
    yLabel: '発生した二酸化炭素の体積（mL）',
    series: [
      {
        label: 'うすい塩酸50mL',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 1, y: 240 },
          { x: 2, y: 480 },
          { x: 3, y: 720 },
          { x: 4, y: 720 },
          { x: 5, y: 720 },
          { x: 6, y: 720 },
        ],
      },
      {
        label: '同じ濃さの塩酸100mL',
        dashed: true,
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 1, y: 240 },
          { x: 2, y: 480 },
          { x: 3, y: 720 },
          { x: 4, y: 960 },
          { x: 5, y: 1200 },
          { x: 6, y: 1440 },
          { x: 7, y: 1440 },
          { x: 8, y: 1440 },
        ],
      },
    ],
    caption: '塩酸の量を2倍にすると、折れ曲がる位置（石灰石6g・1440mL）も2倍になる。ただし比例区間の傾き（240mL/g）は変わらない',
  },

  // s330: 塩酸の濃度を変えたグラフ問題（傾きは変わらない）
  r9_330: {
    kind: 'lineChart',
    xLabel: '石灰石の重さ（g）',
    yLabel: '発生した二酸化炭素の体積（mL）',
    series: [
      {
        label: 'うすい塩酸50mL',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 1, y: 240 },
          { x: 2, y: 480 },
          { x: 3, y: 720 },
          { x: 4, y: 720 },
          { x: 5, y: 720 },
        ],
      },
      {
        label: '濃さを2倍にした塩酸50mL',
        dashed: true,
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 1, y: 240 },
          { x: 2, y: 480 },
          { x: 3, y: 720 },
          { x: 4, y: 960 },
          { x: 5, y: 1200 },
          { x: 6, y: 1440 },
          { x: 7, y: 1440 },
        ],
      },
    ],
    caption: '濃度を2倍にしても比例区間の傾き（240mL/g）は変わらず、折れ曲がる位置（石灰石の量）だけが増える',
  },

  // s331: 亜鉛の重さと発生する水素の体積のグラフ問題
  r9_331: {
    kind: 'lineChart',
    xLabel: '亜鉛の重さ（g）',
    yLabel: '発生した水素の体積（mL）',
    series: [
      {
        label: 'うすい塩酸を使った実験',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 1, y: 300 },
          { x: 2, y: 600 },
          { x: 3, y: 900 },
          { x: 4, y: 900 },
          { x: 5, y: 900 },
        ],
      },
    ],
    caption: '亜鉛3gまでは比例して増えるが、塩酸がすべて反応し切ると900mLで頭打ちになる',
  },

  // s332: 入試実戦演習①（燃焼前後の空気の変化・別データ）
  r9_332: {
    kind: 'barChart',
    xLabel: '気体（燃焼前後）',
    yLabel: '割合（%）',
    bars: [
      { label: '酸素（燃焼前）', value: 21 },
      { label: '酸素（燃焼後）', value: 18 },
      { label: '二酸化炭素（燃焼前）', value: 0.04 },
      { label: '二酸化炭素（燃焼後）', value: 2 },
    ],
    caption: '燃やした時間が短いと、酸素の減り方・二酸化炭素の増え方も小さくなる',
  },

  // s333: 入試実戦演習②（密度から気体を識別する）
  r9_333: {
    kind: 'barChart',
    xLabel: '気体',
    yLabel: '密度比（空気＝1.00）',
    bars: [
      { label: '空気', value: 1.00 },
      { label: '気体X', value: 1.52 },
    ],
    caption: '気体Xは密度比1.52＝二酸化炭素と考えられる',
  },

  // s334: 入試実戦演習③（グラフ読み取りの応用：頭打ちを超えた比例延長のワナ）
  r9_334: {
    kind: 'lineChart',
    xLabel: '石灰石の重さ（g）',
    yLabel: '発生した二酸化炭素の体積（mL）',
    series: [
      {
        label: '実際のグラフ（塩酸100mL）',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 1, y: 240 },
          { x: 2, y: 480 },
          { x: 3, y: 720 },
          { x: 4, y: 960 },
          { x: 5, y: 1200 },
          { x: 6, y: 1440 },
          { x: 7, y: 1440 },
          { x: 8, y: 1440 },
          { x: 9, y: 1440 },
        ],
      },
      {
        label: 'ワナ：比例のまま延長した誤答',
        dashed: true,
        points: [
          { x: 0, y: 0 },
          { x: 9, y: 2160 },
        ],
      },
    ],
    caption: '石灰石6g（1440mL）で頭打ちになった後は、いくら石灰石を加えても体積は増えない',
  },

  // s335: 入試実戦演習④（4種の気体を密度で区別する）
  r9_335: {
    kind: 'barChart',
    xLabel: '気体',
    yLabel: '密度比（空気＝1.00）',
    bars: [
      { label: '気体A', value: 1.11 },
      { label: '気体B', value: 1.52 },
      { label: '気体C', value: 0.07 },
      { label: '気体D', value: 0.60 },
    ],
    caption: 'A＝酸素、B＝二酸化炭素、C＝水素、D＝アンモニアと考えられる（密度比とその他の性質から総合的に判断する）',
  },
};
