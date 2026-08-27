import type { Figure } from './figures';

// 小学6年生 算数(grade_e6_sansu_01..50)の図解。
// 対称な図形・拡大図縮図・円/立体・比例反比例のグラフ・データの調べ方など、
// 図があると分かりやすい問題に付与。純粋な文字式の計算(05,07,08)、
// 分数だけの四則計算(09,10)、比・縮尺の単純計算(12,13,17,19)、
// 樹形図が必要な場合の数(35〜38)には、図で理解が深まらないため付けていない。
export const figuresGradeE6Sansu: Record<string, Figure> = {
  // 正方形の対称の軸(たて・よこ・対角線2本=4本)。
  grade_e6_sansu_01: {
    kind: 'polygon',
    points: [
      { x: 0, y: 8, label: 'A' },
      { x: 8, y: 8, label: 'B' },
      { x: 8, y: 0, label: 'C' },
      { x: 0, y: 0, label: 'D' },
    ],
    rightAngles: [0, 1, 2, 3],
    equalSides: [[0, 1, 2, 3]],
    diagonals: [
      [0, 2],
      [1, 3],
    ],
    caption: '正方形の対称の軸は4本(たて・よこ・対角線2本)',
  },

  // 点対称の中心Oをはさんで対応する点A・B。OA=OB。
  grade_e6_sansu_02: {
    kind: 'coordinate',
    xRange: [-10, 10],
    yRange: [-2, 2],
    points: [
      { x: -9, y: 0, label: 'A' },
      { x: 0, y: 0, label: 'O' },
      { x: 9, y: 0, label: 'B' },
    ],
    segments: [
      [
        { x: -9, y: 0 },
        { x: 0, y: 0 },
      ],
      [
        { x: 0, y: 0 },
        { x: 9, y: 0 },
      ],
    ],
    caption: '対称の中心OからOA=OB=9cm',
  },

  // 対称の軸ADを持つ線対称な六角形ABCDEF。
  grade_e6_sansu_03: {
    kind: 'polygon',
    points: [
      { x: 0, y: 10, label: 'A' },
      { x: 6, y: 5, label: 'B' },
      { x: 6, y: -5, label: 'C' },
      { x: 0, y: -10, label: 'D' },
      { x: -6, y: -5, label: 'E' },
      { x: -6, y: 5, label: 'F' },
    ],
    rightAngles: [0, 3],
    equalAngles: [
      [1, 5],
      [2, 4],
    ],
    diagonals: [[0, 3]],
    caption: '対称の軸ADにより角B=角F=130度、角C=角E=140度',
    steps: [
      '角F=角B=130度(対応する角は等しい)',
      '角C+角E=720−(90+90+130+130)=280度',
      '角Cと角Eは対応するので等しい → 280÷2=140度',
    ],
  },

  // 点対称の中心O(4,3)を通る線分AC。Aから中点公式でCを求める。
  grade_e6_sansu_04: {
    kind: 'coordinate',
    xRange: [0, 8],
    yRange: [0, 8],
    points: [
      { x: 2, y: 5, label: 'A' },
      { x: 4, y: 3, label: 'O' },
      { x: 6, y: 1, label: 'C' },
    ],
    segments: [
      [
        { x: 2, y: 5 },
        { x: 4, y: 3 },
      ],
      [
        { x: 4, y: 3 },
        { x: 6, y: 1 },
      ],
    ],
    caption: '対称の中心O(4,3)は線分ACの中点 → C(6,1)',
    steps: ['対称の中心Oは線分ACの中点になる', 'Cのx座標=4×2−2=6', 'Cのy座標=3×2−5=1'],
  },

  // たてxcm・よこ(x+3)cmの長方形。まわり=4x+6。
  grade_e6_sansu_06: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 8, y: 0, label: 'B' },
      { x: 8, y: 5, label: 'C' },
      { x: 0, y: 5, label: 'D' },
    ],
    sideLabels: ['(x+3)cm', 'xcm', null, null],
    rightAngles: [0, 1, 2, 3],
    caption: 'たてxcm・よこ(x+3)cmの長方形 → まわり=4×x+6(cm)',
  },

  // 1mの棒のうち2/3mの部分の重さを求める(数直線・帯モデル)。
  grade_e6_sansu_11: {
    kind: 'numberLine',
    min: 0,
    max: 1,
    step: 1,
    points: [
      { x: 0, label: '0m' },
      { x: 0.333, label: '1/3m' },
      { x: 0.667, label: '2/3m' },
      { x: 1, label: '1m(3/4kg)' },
    ],
    segments: [{ from: 0, to: 0.667 }],
    caption: '1mで3/4kgの棒のうち2/3m分の重さ=3/4×2/3=1/2kg',
  },

  // 赤リボン12cmと青リボンの長さの比較(比3:5)。
  grade_e6_sansu_14: {
    kind: 'barChart',
    yLabel: 'cm',
    yMax: 24,
    bars: [
      { label: '赤リボン', value: 12 },
      { label: '青リボン', value: 20 },
    ],
    caption: '赤:青=3:5、赤12cmのとき青20cm',
    steps: ['比の1にあたる長さ=12÷3=4cm', '青の長さ=4×5=20cm'],
  },

  // みかん18個をA:B=2:1で分ける割合。
  grade_e6_sansu_15: {
    kind: 'pieChart',
    slices: [
      { label: 'Aさん 12個', value: 12 },
      { label: 'Bさん 6個', value: 6 },
    ],
    caption: 'A:B=2:1、全18個 → Aさん12個',
    steps: ['比の合計=2+1=3', '比の1にあたる個数=18÷3=6個', 'Aさんの個数=6×2=12個'],
  },

  // 450gの食塩水の中の食塩と水の割合(比2:13)。
  grade_e6_sansu_16: {
    kind: 'barChart',
    yLabel: 'g',
    yMax: 450,
    bars: [
      { label: '食塩', value: 60 },
      { label: '水', value: 390 },
    ],
    caption: '食塩:水=2:13、食塩水450g → 食塩60g',
    steps: ['比の合計=2+13=15', '比の1にあたる重さ=450÷15=30g', '食塩の重さ=30×2=60g'],
  },

  // 兄が弟に1300円あげた後の金額(比3:4)。
  grade_e6_sansu_18: {
    kind: 'barChart',
    yLabel: '円',
    yMax: 5000,
    bars: [
      { label: '兄(あげた後)', value: 3600 },
      { label: '弟(あげた後)', value: 4800 },
    ],
    caption: 'あげた後の比3:4(兄3600円・弟4800円)。はじめの兄は4900円',
    steps: [
      'はじめの比を7k:5kとおく(合計12k、やり取りしても合計は変わらない)',
      'あげた後 4×(7k−1300)=3×(5k+1300) を解くとk=700',
      'はじめの兄の金額=7×700=4900円',
    ],
  },

  // 三角形ABC(5,7,9cm)を2倍に拡大した三角形DEF。
  grade_e6_sansu_20: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'D' },
      { x: 14, y: 0, label: 'E' },
      { x: 5, y: 9, label: 'F' },
    ],
    sideLabels: ['14cm', '18cm', '10cm'],
    caption: 'ABC(5,7,9cm)を2倍に拡大したDEF(10,14,18cm)',
    steps: ['DE=AB×2=5×2=10cm', 'EF=BC×2=7×2=14cm', 'DF=AC×2=9×2=18cm'],
  },

  // 相似な三角形(相似比3:5、面積比9:25)。
  grade_e6_sansu_21: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'D' },
      { x: 10, y: 0, label: 'E' },
      { x: 4, y: 8, label: 'F' },
    ],
    caption: '相似比3:5 → 面積比9:25、ABC27㎠のときDEF75㎠',
    steps: ['面積比=3×3:5×5=9:25', '比の1にあたる面積=27÷9=3㎠', 'DEFの面積=3×25=75㎠'],
  },

  // 棒(高さ1.5m・影2m)と相似な関係にある建物(影12m)。
  grade_e6_sansu_22: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: '棒の根元' },
      { x: 2, y: 0, label: '影のはし' },
      { x: 0, y: 1.5, label: '棒の先' },
    ],
    sideLabels: ['2m', null, '1.5m'],
    rightAngles: [0],
    caption: '棒:高さ1.5m・影2m → 建物:影12m・高さ9m(相似)',
    steps: ['棒の高さ:影=1.5:2', '建物の高さ=12×1.5÷2=9m'],
  },

  // 半径7cmの円。
  grade_e6_sansu_23: {
    kind: 'circle',
    radiusLabel: '7cm',
    showCenter: true,
    caption: '面積=7×7×3.14=153.86㎠',
  },

  // 直径20cm(半径10cm)の円。
  grade_e6_sansu_24: {
    kind: 'circle',
    radiusLabel: '10cm',
    showCenter: true,
    caption: '直径20cm(半径10cm) → 面積=10×10×3.14=314㎠',
    steps: ['半径=直径÷2=20÷2=10cm', '面積=10×10×3.14=314㎠'],
  },

  // 半径6cm・中心角90度のおうぎ形。
  grade_e6_sansu_25: {
    kind: 'circle',
    radiusLabel: '6cm',
    sector: { from: 0, to: 90, label: '90°' },
    showCenter: true,
    caption: '半径6cm・中心角90度のおうぎ形 → 面積28.26㎠',
    steps: ['円全体の面積=6×6×3.14=113.04㎠', 'おうぎ形の面積=113.04×90/360=28.26㎠'],
  },

  // 1辺10cmの正方形に内接する円(半径5cm)。
  grade_e6_sansu_26: {
    kind: 'circle',
    radiusLabel: '5cm',
    showCenter: true,
    caption: '1辺10cmの正方形に内接する円。かどの部分の面積合計=100−78.5=21.5㎠',
    steps: [
      '正方形の面積=10×10=100㎠',
      '円の半径=10÷2=5cm、円の面積=5×5×3.14=78.5㎠',
      'かどの部分の合計=100−78.5=21.5㎠',
    ],
  },

  // 底面6cm四方・高さ9cmの四角柱。
  grade_e6_sansu_27: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '6cm', depth: '6cm', height: '9cm' },
    caption: '底面6cm四方・高さ9cmの四角柱 → 体積324cm³',
  },

  // 底面半径4cm・高さ15cmの円柱。
  grade_e6_sansu_28: {
    kind: 'solid',
    shape: 'cylinder',
    labels: { radius: '4cm', height: '15cm' },
    caption: '底面半径4cm・高さ15cmの円柱 → 体積753.6cm³',
    steps: ['底面積=4×4×3.14=50.24㎠', '体積=50.24×15=753.6cm³'],
  },

  // 底面が直角三角形(8cm,5cm)、柱の長さ12cmの三角柱。
  grade_e6_sansu_29: {
    kind: 'solid',
    shape: 'triangularPrism',
    labels: { width: '8cm', height: '5cm', depth: '12cm' },
    caption: '底面積20㎠(8×5÷2)・柱の長さ12cm → 体積240cm³',
    steps: ['底面の三角形の面積=8×5÷2=20㎠', '体積=20×12=240cm³'],
  },

  // 底面半径5cm・高さ10cmの円柱に入った水。
  grade_e6_sansu_30: {
    kind: 'solid',
    shape: 'cylinder',
    labels: { radius: '5cm', height: '10cm' },
    caption: '円柱の水785cm³を1辺10cmの正方形の容器に移すと深さ7.85cm',
    steps: [
      '円柱の水の体積=5×5×3.14×10=785cm³',
      '四角柱の底面積=10×10=100㎠',
      '水の深さ=785÷100=7.85cm',
    ],
  },

  // 比例のグラフ y=5×x。
  grade_e6_sansu_31: {
    kind: 'coordinate',
    xRange: [0, 8],
    yRange: [0, 40],
    lines: [{ a: 5, b: 0, label: 'y=5×x' }],
    points: [
      { x: 4, y: 20, label: '(4,20)' },
      { x: 7, y: 35, label: '(7,35)' },
    ],
    caption: 'y=5×x、x=7のときy=35',
    steps: ['決まった数=20÷4=5', 'x=7のとき y=5×7=35'],
  },

  // 反比例のグラフ x×y=36。
  grade_e6_sansu_32: {
    kind: 'coordinate',
    xRange: [0, 12],
    yRange: [0, 15],
    hyperbolas: [{ k: 36, label: 'x×y=36' }],
    points: [
      { x: 3, y: 12, label: '(3,12)' },
      { x: 6, y: 6, label: '(6,6)' },
    ],
    caption: 'x×y=36、x=6のときy=6',
    steps: ['決まった数=3×12=36', 'x=6のとき y=36÷6=6'],
  },

  // 比例のグラフ y=5×x と 点(28分,140L)。
  grade_e6_sansu_33: {
    kind: 'coordinate',
    xRange: [0, 30],
    yRange: [0, 150],
    lines: [{ a: 5, b: 0, label: 'y=5×x' }],
    points: [{ x: 28, y: 140, label: '(28分,140L)' }],
    caption: '毎分5L → 28分後に140L',
    steps: ['式はy=5×x', '140=5×xより x=140÷5=28分後'],
  },

  // 反比例のグラフ x×y=24。
  grade_e6_sansu_34: {
    kind: 'coordinate',
    xRange: [0, 10],
    yRange: [0, 10],
    hyperbolas: [{ k: 24, label: 'x×y=24' }],
    points: [
      { x: 3, y: 8, label: '(3,8)' },
      { x: 8, y: 3, label: '(8,3)' },
    ],
    caption: 'x×y=24、たて3cmならよこ8cm、たて8cmならよこ3cm',
    steps: ['たて3cmのとき よこ=24÷3=8cm', 'たて8cmのとき よこ=24÷8=3cm'],
  },

  // 5人のテストの点数の棒グラフ。
  grade_e6_sansu_39: {
    kind: 'barChart',
    yLabel: '点',
    yMax: 100,
    bars: [
      { label: 'Aさん', value: 72 },
      { label: 'Bさん', value: 85 },
      { label: 'Cさん', value: 90 },
      { label: 'Dさん', value: 68 },
      { label: 'Eさん', value: 80 },
    ],
    caption: '5人の平均=395÷5=79点',
  },

  // 小さい順にならべた9人の記録(中央値・最頻値)。
  grade_e6_sansu_40: {
    kind: 'barChart',
    yLabel: 'm',
    yMax: 30,
    bars: [
      { label: '17m', value: 17 },
      { label: '18m', value: 18 },
      { label: '19m', value: 19 },
      { label: '20m', value: 20 },
      { label: '22m①', value: 22 },
      { label: '22m②', value: 22 },
      { label: '22m③', value: 22 },
      { label: '24m', value: 24 },
      { label: '25m', value: 25 },
    ],
    caption: '小さい順にならべると中央値(5番目)は22m、最頻値も22m',
    steps: [
      '小さい順にならべる:17,18,19,20,22,22,22,24,25',
      '中央値=5番目の値=22m',
      '最も多く出る値(最頻値)=22m(3回)',
    ],
  },

  // 算数のテストの得点の度数分布(柱状グラフ)。
  grade_e6_sansu_41: {
    kind: 'barChart',
    xLabel: '得点(点)',
    yLabel: '人数',
    yMax: 12,
    histogram: true,
    bars: [
      { label: '60〜70', value: 6 },
      { label: '70〜80', value: 9 },
      { label: '80〜90', value: 10 },
      { label: '90〜100', value: 5 },
    ],
    caption: '80点以上=10+5=15人 → 30人の50%',
    steps: ['80点以上の人数=10+5=15人', '割合=15÷30=0.5', '百分率になおすと 0.5×100=50%'],
  },

  // 男子・女子・クラス全体の平均点の比較。
  grade_e6_sansu_42: {
    kind: 'barChart',
    yLabel: '点',
    yMax: 90,
    bars: [
      { label: '男子(25人)', value: 72 },
      { label: '女子(15人)', value: 80 },
      { label: 'クラス全体(40人)', value: 75 },
    ],
    caption: '男子72点・女子80点 → クラス全体の平均75点',
    steps: ['男子の合計=72×25=1800点', '女子の合計=80×15=1200点', 'クラス全体の平均=(1800+1200)÷40=75点'],
  },

  // つる8羽・かめ7匹(合わせて15匹・足44本)。
  grade_e6_sansu_43: {
    kind: 'barChart',
    yLabel: '匹(羽)',
    yMax: 16,
    bars: [
      { label: 'つる(8羽)', value: 8 },
      { label: 'かめ(7匹)', value: 7 },
    ],
    caption: '合わせて15匹・足44本 → つる8羽・かめ7匹',
    steps: ['全部つると仮定:足=2×15=30本', '実際との差=44−30=14本', 'かめの数=14÷2=7匹、つるの数=15−7=8羽'],
  },

  // りんご10個・みかん10個(合わせて20個・代金2000円)。
  grade_e6_sansu_44: {
    kind: 'barChart',
    yLabel: '個',
    yMax: 20,
    bars: [
      { label: 'りんご(10個)', value: 10 },
      { label: 'みかん(10個)', value: 10 },
    ],
    caption: '合わせて20個・代金2000円 → りんご10個・みかん10個',
    steps: [
      '全部みかんと仮定:代金=80×20=1600円',
      '実際との差=2000−1600=400円',
      'りんごの個数=400÷40=10個',
    ],
  },

  // 1500m離れたA・B地点から向かい合って進み出会う地点。
  grade_e6_sansu_45: {
    kind: 'numberLine',
    min: 0,
    max: 1500,
    step: 500,
    points: [
      { x: 0, label: 'A' },
      { x: 800, label: '出会う地点' },
      { x: 1500, label: 'B' },
    ],
    segments: [
      { from: 0, to: 800 },
      { from: 800, to: 1500 },
    ],
    caption: 'A・Bが向かい合って出発、10分後に出会う(Aは800m進む)',
    steps: ['近づく速さ=80+70=150m/分', '出会うまでの時間=1500÷150=10分'],
  },

  // 兄が出発する時点で弟がすでに進んでいた480mの差。
  grade_e6_sansu_46: {
    kind: 'numberLine',
    min: 0,
    max: 480,
    step: 120,
    points: [
      { x: 0, label: '兄の出発地点' },
      { x: 480, label: '弟の位置(8分後)' },
    ],
    segments: [{ from: 0, to: 480 }],
    caption: '兄が出発した時点で弟は480m先。1分で40mずつ縮まる→12分後に追いつく',
    steps: ['兄が出発する時点で弟は60×8=480m先', '1分あたり縮まる差=100−60=40m', '追いつくまでの時間=480÷40=12分'],
  },

  // 180mの道に15mおきに植えた13本の木(両はし含む)。
  grade_e6_sansu_47: {
    kind: 'numberLine',
    min: 0,
    max: 180,
    step: 15,
    points: [
      { x: 0 },
      { x: 15 },
      { x: 30 },
      { x: 45 },
      { x: 60 },
      { x: 75 },
      { x: 90 },
      { x: 105 },
      { x: 120 },
      { x: 135 },
      { x: 150 },
      { x: 165 },
      { x: 180 },
    ],
    caption: '180mを15mおきに区切ると13本(両はし含む)',
    steps: ['間の数=180÷15=12か所', '両はしにも植えるので木の本数=12+1=13本'],
  },

  // 仕事全体を36としたときのAさん・Bさん・2人合計の1日分の量。
  grade_e6_sansu_48: {
    kind: 'barChart',
    yLabel: '1日分の仕事量',
    yMax: 6,
    bars: [
      { label: 'Aさん(1日3)', value: 3 },
      { label: 'Bさん(1日2)', value: 2 },
      { label: '2人合計(1日5)', value: 5 },
    ],
    caption: '仕事全体を36とすると、2人で1日5ずつ→36÷5=7.2日',
    steps: ['仕事全体を12と18の最小公倍数36とおく', 'Aさんは1日3、Bさんは1日2進む→2人で1日5', '仕事を終える日数=36÷5=7.2日'],
  },

  // 15頭×10日と10頭×20日で食べた草の量の比較。
  grade_e6_sansu_49: {
    kind: 'barChart',
    yLabel: '食べた草の量',
    yMax: 220,
    bars: [
      { label: '15頭×10日', value: 150 },
      { label: '10頭×20日', value: 200 },
    ],
    caption: '牛が食べた草の量の合計。差50を10日分の伸びとみて、生える速さb=5を求める',
    steps: [
      '15頭×10日=150、10頭×20日=200 の式を作る',
      '2式の差から 1日に生える草の量 b=5、はじめの草の量 A=100',
      '牛6頭では1日に6−5=1ずつ減るので、100÷1=100日',
    ],
  },

  // あめ86個を12人に6個ずつ配ると14個余る様子。
  grade_e6_sansu_50: {
    kind: 'barChart',
    yLabel: '個',
    yMax: 90,
    bars: [
      { label: 'あめの数(86個)', value: 86 },
      { label: '6個ずつ配った分(72個)', value: 72 },
      { label: '余り(14個)', value: 14 },
    ],
    caption: '子ども12人、あめ86個(6個ずつで14個余り、8個ずつで10個不足)',
    steps: ['1人あたりの差=8−6=2個', '余りと不足の合計=14+10=24個', '子どもの人数=24÷2=12人、あめの数=6×12+14=86個'],
  },
};
