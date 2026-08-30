import type { Figure } from './figures';

// 小学6年生 理科(grade_e6_rika_01..50)の図解。
// 燃焼・気体の質量比、消化器官・心臓のつくり、葉の断面(気孔・維管束)、
// 生態ピラミッド、地層の柱状図、てこのモーメント計算、酸性〜アルカリ性の目安、
// 回路(電気の利用)など、図があると理解が深まる問題に付与。
// 純粋な用語の暗記・記述問題(01〜04, 07〜08, 10, 12〜14, 17〜19, 21〜22, 24〜28,
// 33〜34, 37, 40, 42〜49)には、図で理解が深まらないため付けていない。
export const figuresGradeE6Rika: Record<string, Figure> = {
  // スチールウール(鉄)の加熱前後の重さ比較。結びついた酸素の重さ=4.0-2.8=1.2g。
  grade_e6_rika_05: {
    kind: 'barChart',
    yLabel: '重さ(g)',
    bars: [
      { label: '加熱前', value: 2.8 },
      { label: '加熱後', value: 4.0 },
    ],
    caption: '結びついた酸素の重さ = 4.0 − 2.8 = 1.2g',
    steps: [
      '加熱前のスチールウールの重さ = 2.8g',
      '加熱後(酸化鉄になったあと)の重さ = 4.0g',
      '結びついた酸素の重さ = 4.0 − 2.8 = 1.2g',
    ],
  },

  // 炭素の燃焼(C + O2 -> CO2)。3g:11g の比を使って9gのときを求める。
  grade_e6_rika_06: {
    kind: 'chemEquation',
    equation: 'C + O2 -> CO2',
    caption: '炭素3gが燃焼すると二酸化炭素11g。9gなら3倍で33g',
    steps: [
      '炭素3g→二酸化炭素11gの割合が分かっている',
      '炭素9gは3gの3倍(9÷3=3)',
      'できる二酸化炭素も3倍 → 11×3=33g',
    ],
  },

  // 小腸で吸収された養分が最初に運ばれる臓器(肝臓)を問うので、肝臓のラベルだけ隠す。
  grade_e6_rika_09: {
    kind: 'bioDiagram',
    template: 'digestiveSystem',
    hideParts: ['kanzou'],
  },

  // 全身から戻った血液が最初に入る部屋(右心房)を問うので、右心房のラベルだけ隠す。
  grade_e6_rika_11: {
    kind: 'bioDiagram',
    template: 'heart',
    hideParts: ['usinbou'],
  },

  // 蒸散が行われる小さな穴(気孔)の名前を直接問うので、気孔のラベルだけ隠す。
  grade_e6_rika_15: {
    kind: 'bioDiagram',
    template: 'leafCrossSection',
    hideParts: ['kikou'],
  },

  // 道管・師管(維管束)の位置関係を確認する問題。全体像が分かるよう全ラベル表示。
  grade_e6_rika_16: {
    kind: 'bioDiagram',
    template: 'leafCrossSection',
  },

  // ワセリン蒸散実験。A(10cm3)とB(4cm3)の差から葉の裏からの蒸散量6cm3を求める。
  grade_e6_rika_20: {
    kind: 'barChart',
    yLabel: '水の減少量(cm3)',
    bars: [
      { label: 'A(何もぬらない)', value: 10 },
      { label: 'B(裏にワセリン)', value: 4 },
    ],
    caption: '葉の裏からの蒸散量 = A − B = 10 − 4 = 6cm3',
    steps: [
      'Aは葉の表・裏・茎すべてからの蒸散の合計 = 10cm3',
      'Bは裏の気孔をワセリンでふさいだので、表と茎からの蒸散のみ = 4cm3',
      '裏からの蒸散量 = A − B = 10 − 4 = 6cm3',
    ],
  },

  // 生態ピラミッド：植物100→草食昆虫10(1/10)→小鳥1(さらに1/10)。
  grade_e6_rika_23: {
    kind: 'barChart',
    yLabel: '個体数(相対値)',
    bars: [
      { label: '植物', value: 100 },
      { label: '草食昆虫', value: 10 },
      { label: '小鳥', value: 1 },
    ],
    caption: '小鳥の数は植物の数の1/100(100→10→1と2段階で1/10ずつ)',
    steps: [
      '植物の数を100とすると、草食昆虫はその1/10 → 100×1/10=10',
      '小鳥は草食昆虫のさらに1/10 → 10×1/10=1',
      '小鳥の数は植物の数の1/100',
    ],
  },

  // 地層累重の法則：下から上へ古い→新しい。
  grade_e6_rika_29: {
    kind: 'stratum',
    columns: [
      {
        layers: [
          { name: 'E(古い)', thickness: 2, pattern: 'mud' },
          { name: 'D', thickness: 2, pattern: 'sand' },
          { name: 'C', thickness: 2, pattern: 'gravel' },
          { name: 'B', thickness: 2, pattern: 'ash' },
          { name: 'A(新しい)', thickness: 2, pattern: 'plain' },
        ],
      },
    ],
    caption: '下の層ほど古く、上の層ほど新しい(地層累重の法則)',
    steps: [
      '地層は下から上へ順に積み重なってできる',
      'したがって、ふつうは下の層ほど古く、上の層ほど新しい',
      '大きな地殻変動で上下が逆転していない限り、この順序が成り立つ',
    ],
  },

  // かぎ層(火山灰)による2地点の地層対比。
  grade_e6_rika_30: {
    kind: 'stratum',
    columns: [
      {
        label: 'A地点',
        layers: [
          { name: '表土', thickness: 1, pattern: 'plain' },
          { name: '火山灰(かぎ層)', thickness: 1, pattern: 'ash' },
          { name: '泥岩', thickness: 2, pattern: 'mud' },
          { name: '砂岩', thickness: 2, pattern: 'sand' },
        ],
      },
      {
        label: 'B地点',
        layers: [
          { name: '表土', thickness: 2, pattern: 'plain' },
          { name: '火山灰(かぎ層)', thickness: 1, pattern: 'ash' },
          { name: '泥岩', thickness: 2, pattern: 'mud' },
          { name: '砂岩', thickness: 2, pattern: 'sand' },
        ],
      },
    ],
    caption: '同じ火山灰の層(かぎ層)を手がかりに2地点の地層を対比する',
  },

  // 3地点A・B・Cでかぎ層までの深さが2m→5m→8mと深くなる=地層の傾斜。
  grade_e6_rika_31: {
    kind: 'stratum',
    columns: [
      {
        label: 'A(2m)',
        layers: [
          { name: '表土など', thickness: 2, pattern: 'plain' },
          { name: '火山灰(かぎ層)', thickness: 1, pattern: 'ash' },
          { name: '泥岩', thickness: 2, pattern: 'mud' },
        ],
      },
      {
        label: 'B(5m)',
        layers: [
          { name: '表土など', thickness: 5, pattern: 'plain' },
          { name: '火山灰(かぎ層)', thickness: 1, pattern: 'ash' },
          { name: '泥岩', thickness: 2, pattern: 'mud' },
        ],
      },
      {
        label: 'C(8m)',
        layers: [
          { name: '表土など', thickness: 8, pattern: 'plain' },
          { name: '火山灰(かぎ層)', thickness: 1, pattern: 'ash' },
          { name: '泥岩', thickness: 2, pattern: 'mud' },
        ],
      },
    ],
    caption: 'かぎ層までの深さがA→Cへ2m→5m→8mと深くなる = 地層が一方向にかたむいている',
    steps: [
      '地層が水平なら、かぎ層までの深さはどの地点でもほぼ同じになるはず',
      'A→B→Cの方向にかぎ層までの深さがだんだん深くなっている',
      'したがって、地層はA→Cの方向にかたむいている(傾斜している)と考えられる',
    ],
  },

  // P波・S波の到達時間グラフ。90km地点で初期微動継続時間=30-15=15秒。
  grade_e6_rika_32: {
    kind: 'lineChart',
    xLabel: '震源からの距離(km)',
    yLabel: '到達時間(秒)',
    xRange: [0, 100],
    yRange: [0, 35],
    series: [
      { label: 'P波(6km/秒)', markers: true, points: [{ x: 0, y: 0 }, { x: 90, y: 15 }] },
      { label: 'S波(3km/秒)', dashed: true, markers: true, points: [{ x: 0, y: 0 }, { x: 90, y: 30 }] },
    ],
    caption: '90km地点の初期微動継続時間 = 30秒 − 15秒 = 15秒',
    steps: [
      'P波が90kmに届く時間 = 90 ÷ 6 = 15秒',
      'S波が90kmに届く時間 = 90 ÷ 3 = 30秒',
      '初期微動継続時間 = 30 − 15 = 15秒',
    ],
  },

  // てこのモーメント計算1：30g×20cm=600、右15cmで600÷15=40g。
  grade_e6_rika_35: {
    kind: 'coordinate',
    xRange: [-30, 20],
    yRange: [-6, 4],
    points: [
      { x: 0, y: 0, label: '支点' },
      { x: -20, y: 0, label: '30g' },
      { x: 15, y: 0, label: '40g' },
    ],
    segments: [
      [{ x: -20, y: 0 }, { x: 15, y: 0 }],
      [{ x: -20, y: 0 }, { x: -20, y: -3 }],
      [{ x: 15, y: 0 }, { x: 15, y: -3 }],
    ],
    caption: 'てこのつりあい：30×20 = F×15 → F=40g',
    steps: [
      '左側のモーメント = 30g × 20cm = 600',
      '右側は F × 15 = 600 とおく',
      'F = 600 ÷ 15 = 40g',
    ],
  },

  // てこのモーメント計算2：60g×15cm=900、右20cmで900÷20=45g。
  grade_e6_rika_36: {
    kind: 'coordinate',
    xRange: [-25, 25],
    yRange: [-6, 4],
    points: [
      { x: 0, y: 0, label: '支点' },
      { x: -15, y: 0, label: '60g' },
      { x: 20, y: 0, label: '45g' },
    ],
    segments: [
      [{ x: -15, y: 0 }, { x: 20, y: 0 }],
      [{ x: -15, y: 0 }, { x: -15, y: -3 }],
      [{ x: 20, y: 0 }, { x: 20, y: -3 }],
    ],
    caption: 'てこのつりあい：60×15 = F×20 → F=45g',
    steps: [
      '左側のモーメント = 60g × 15cm = 900',
      '右側は F × 20 = 900 とおく',
      'F = 900 ÷ 20 = 45g',
    ],
  },

  // てこのモーメント計算3(左に2つのおもり)：合計1000、右50cmで1000÷50=20g。
  grade_e6_rika_38: {
    kind: 'coordinate',
    xRange: [-35, 55],
    yRange: [-6, 4],
    points: [
      { x: 0, y: 0, label: '支点' },
      { x: -10, y: 0, label: '40g' },
      { x: -30, y: 0, label: '20g' },
      { x: 50, y: 0, label: '20g' },
    ],
    segments: [
      [{ x: -30, y: 0 }, { x: 50, y: 0 }],
      [{ x: -10, y: 0 }, { x: -10, y: -3 }],
      [{ x: -30, y: 0 }, { x: -30, y: -3 }],
      [{ x: 50, y: 0 }, { x: 50, y: -3 }],
    ],
    caption: '左側のモーメントの合計 = 400+600=1000 → F×50=1000 → F=20g',
    steps: [
      '40g×10cm=400、20g×30cm=600',
      '左側のモーメントの合計 = 400 + 600 = 1000',
      '右側は F × 50 = 1000 とおく → F = 1000 ÷ 50 = 20g',
    ],
  },

  // 棒自身の重さを考えるてこ：重心(100g)は支点から右20cmの位置。右はし(50cm)で40g。
  grade_e6_rika_39: {
    kind: 'coordinate',
    xRange: [-15, 55],
    yRange: [-6, 4],
    points: [
      { x: 0, y: 0, label: '支点' },
      { x: 20, y: 0, label: '棒の重心100g' },
      { x: 50, y: 0, label: '40g' },
    ],
    segments: [
      [{ x: -10, y: 0 }, { x: 50, y: 0 }],
      [{ x: 20, y: 0 }, { x: 20, y: -3 }],
      [{ x: 50, y: 0 }, { x: 50, y: -3 }],
    ],
    caption: '棒の重心(支点から20cm)にかかる100g：100×20=2000 → F×50=2000 → F=40g',
    steps: [
      '棒の重心(真ん中)は支点から20cmの位置',
      '棒の重さによるモーメント = 100g × 20cm = 2000',
      '右はし(支点から50cm)のおもり：F × 50 = 2000 → F = 40g',
    ],
  },

  // 酸性〜アルカリ性の目安の上に代表的な水溶液を並べる(塩酸=酸性、食塩水=中性、アンモニア水=アルカリ性)。
  grade_e6_rika_41: {
    kind: 'numberLine',
    min: 0,
    max: 14,
    step: 7,
    points: [
      { x: 2, label: '塩酸(酸性)' },
      { x: 7, label: '食塩水(中性)' },
      { x: 11, label: 'アンモニア水(アルカリ性)' },
    ],
    caption: '酸性 ← (0〜14の目安) → アルカリ性。7が中性の目安',
  },

  // LED回路：電池・スイッチ・LED(豆電球型で表示しラベルをLEDに)の簡単な直列回路。
  grade_e6_rika_50: {
    kind: 'circuit',
    layout: 'series',
    series: [
      { type: 'switch', label: 'スイッチ' },
      { type: 'bulb', label: 'LED' },
    ],
    battery: { label: '電池', cells: 1 },
    caption: 'LEDは電気を光に変える効率が高く、同じ電気でも豆電球より長く光る',
  },
};
