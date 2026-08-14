import type { Figure } from './figures';

// 中学受験理科 拡張ユニットVI「物理：光と音」（rika_s176〜rika_s210）専用の図解データ。
// lessons-rika-ext06.ts の各Lessonのsections[].figureIdから参照される。
//
// このFigure型には光線の反射・屈折角度を正確に描く専用の図形（光路図）が
// 存在しないため、角度そのものが主題のセクション（反射の法則・屈折の向き・
// レンズの光線作図など）には図解を付けていない。ここに登録した図解はすべて
// 「数値の関係」（距離・時間・速さ・振動数など）を正確にプロットしたもの。
export const lessonFigsRikaExt06: Record<string, Figure> = {
  // s178: 鏡から1.5m離れた人と、鏡の奥1.5mにできる像の位置関係（1次元の距離）
  rext06_s178: {
    kind: 'numberLine',
    min: -3.5,
    max: 3.5,
    step: 0.5,
    points: [
      { x: -1.5, label: '人' },
      { x: 0, label: '鏡' },
      { x: 1.5, label: '像(鏡の奥)' },
    ],
    caption: '人から鏡までの距離(1.5m)＝鏡から像までの距離(1.5m)。人から像までは合計3m',
  },

  // s182: 見かけの深さ＝実際の深さ×3/4（比例関係）
  rext06_s182: {
    kind: 'lineChart',
    xLabel: '実際の深さ(cm)',
    yLabel: '見かけの深さ(cm)',
    series: [
      {
        label: '見かけの深さ = 実際の深さ×3/4',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 40, y: 30 },
          { x: 80, y: 60 },
        ],
      },
    ],
    caption: '深さ40cmのプールの底は、見かけの深さ30cmに見える(40×3/4＝30)',
  },

  // s186: 焦点距離10cmの凸レンズ。レンズの両側に焦点がある(焦点間の距離は20cm)
  rext06_s186: {
    kind: 'numberLine',
    min: -25,
    max: 25,
    step: 5,
    points: [
      { x: -10, label: '焦点F' },
      { x: 0, label: 'レンズ' },
      { x: 10, label: '焦点F' },
    ],
    caption: '焦点距離10cmのレンズは両側に焦点をもつ(焦点間の距離は10+10＝20cm)',
  },

  // s187: 焦点距離10cmのレンズにおける、物体距離aと実像距離bの関係(1/a+1/b=1/10)
  rext06_s187: {
    kind: 'lineChart',
    xLabel: '物体距離a(cm)',
    yLabel: '実像距離b(cm)',
    xRange: [0, 65],
    yRange: [0, 65],
    series: [
      {
        label: 'f=10cmのとき',
        markers: true,
        points: [
          { x: 12, y: 60 },
          { x: 15, y: 30 },
          { x: 20, y: 20 },
          { x: 30, y: 15 },
          { x: 40, y: 13.33 },
          { x: 60, y: 12 },
        ],
      },
    ],
    caption: '1/a+1/b=1/10の関係(例：a=30cmのときb=15cm)。aが大きいほどbはfの10cmに近づく',
  },

  // s188: a=2f=20cmのとき、b=2f=20cm(等倍の実像)。f=10cmと2f=20cmの位置を示す
  rext06_s188: {
    kind: 'numberLine',
    min: 0,
    max: 25,
    step: 5,
    points: [
      { x: 10, label: 'f(焦点距離)' },
      { x: 20, label: '2f(物体・像とも20cm)' },
    ],
    caption: '焦点距離10cmのレンズで、物体をa=2f=20cmに置くと、像もb=2f=20cmにでき、倍率は1倍になる',
  },

  // s190: 焦点距離10cmのレンズで、物体が焦点の内側(a=6cm)にあるときの虚像(15cm、物体と同じ側)
  rext06_s190: {
    kind: 'numberLine',
    min: -20,
    max: 20,
    step: 5,
    points: [
      { x: -10, label: '焦点F' },
      { x: -6, label: '物体(a=6cm)' },
      { x: 0, label: 'レンズ' },
      { x: 10, label: '焦点F' },
      { x: -15, label: '虚像(15cm)' },
    ],
    caption: 'a=6cm(焦点10cmより内側)のとき、虚像は物体と同じ側の15cmの位置に見える(倍率2.5倍)',
  },

  // s192: 凸レンズがつくる像の倍率のまとめ(カメラ・等倍・拡大実像・虫めがね)
  rext06_s192: {
    kind: 'barChart',
    xLabel: 'レンズの使われ方',
    yLabel: '倍率(倍)',
    bars: [
      { label: 'カメラ(a=50,f=5)', value: 0.11 },
      { label: '等倍(a=2f)', value: 1 },
      { label: '拡大実像(a=18,f=12)', value: 2 },
      { label: '虫めがね(a=6,f=10)', value: 2.5 },
    ],
    caption: '物体の位置(aとfの関係)によって、できる像の倍率が大きく変わる',
  },

  // s194: 空気中の音速(秒速340m)での、時間と距離の関係(雷までの距離の計算)
  rext06_s194: {
    kind: 'lineChart',
    xLabel: '時間(秒)',
    yLabel: '距離(m)',
    series: [
      {
        label: '距離 = 340×時間',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 5, y: 1700 },
          { x: 10, y: 3400 },
        ],
      },
    ],
    caption: '音の速さ秒速340mのとき、5秒で1700m進む(雷までの距離の計算に使う)',
  },

  // s195: 気体・液体・固体での音速の比較(空気340, 水1500, 鉄5000)
  rext06_s195: {
    kind: 'barChart',
    xLabel: '媒質',
    yLabel: '音の速さ(m/秒)',
    bars: [
      { label: '空気(気体)', value: 340 },
      { label: '水(液体)', value: 1500 },
      { label: '鉄(固体)', value: 5000 },
    ],
    caption: '音の伝わる速さは、固体＞液体＞気体の順に速い(直感とは逆になりやすい点に注意)',
  },

  // s196: 同じ距離(1500m)を音が伝わるのにかかる時間の比較(水中1秒、空気中約4.4秒)
  rext06_s196: {
    kind: 'barChart',
    xLabel: '媒質',
    yLabel: '1500m伝わるのにかかる時間(秒)',
    bars: [
      { label: '水中(1500m/秒)', value: 1 },
      { label: '空気中(340m/秒)', value: 4.41 },
    ],
    caption: '同じ1500mでも、水中は1秒、空気中は約4.4秒かかる(水中の方が先に届く)',
  },

  // s197: 水中100m→空気中340mと、区間ごとに音速が変わる場合の距離と時間の関係
  rext06_s197: {
    kind: 'lineChart',
    xLabel: '距離(m)',
    yLabel: '経過時間(秒)',
    series: [
      {
        label: '水中→空気中',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 100, y: 0.067 },
          { x: 440, y: 1.067 },
        ],
      },
    ],
    caption: '水中100m(0.067秒)を通過後、空気中340m(1秒)を伝わり、合計約1.07秒で届く',
  },

  // s198: 同じ振動数(周期)で振幅だけが異なる2つの波形(音の大きさのちがいを表す模式図)
  rext06_s198: {
    kind: 'lineChart',
    xLabel: '時間(模式的な単位)',
    yLabel: '振れ幅',
    series: [
      {
        label: '振幅小(音が小さい)',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 1, y: 2 },
          { x: 2, y: 0 },
          { x: 3, y: -2 },
          { x: 4, y: 0 },
          { x: 5, y: 2 },
          { x: 6, y: 0 },
          { x: 7, y: -2 },
          { x: 8, y: 0 },
        ],
      },
      {
        label: '振幅大(音が大きい)',
        dashed: true,
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 1, y: 4 },
          { x: 2, y: 0 },
          { x: 3, y: -4 },
          { x: 4, y: 0 },
          { x: 5, y: 4 },
          { x: 6, y: 0 },
          { x: 7, y: -4 },
          { x: 8, y: 0 },
        ],
      },
    ],
    caption: '同じ振動数(高さ)でも、振幅(音の大きさ)が異なる2つの音の波形(模式図)',
  },

  // s200: オクターブの関係(262Hzのドと、その1オクターブ上524Hzのドの比較)
  rext06_s200: {
    kind: 'barChart',
    xLabel: '音',
    yLabel: '振動数(Hz)',
    bars: [
      { label: '低いド', value: 262 },
      { label: '1オクターブ高いド', value: 524 },
    ],
    caption: '1オクターブ高い音は、振動数がちょうど2倍になる(262×2＝524)',
  },

  // s201: 弦の長さと振動数の反比例関係(全長200Hz、半分の長さで400Hz)
  rext06_s201: {
    kind: 'barChart',
    xLabel: '弦の長さ',
    yLabel: '振動数(Hz)',
    bars: [
      { label: '弦の全長', value: 200 },
      { label: '弦の半分の長さ', value: 400 },
    ],
    caption: '弦の長さを半分にすると、振動数はちょうど2倍になる(200×2＝400)',
  },

  // s202: 周期0.005秒(振動数200Hz)の波形の1サイクル分
  rext06_s202: {
    kind: 'lineChart',
    xLabel: '時間(秒)',
    yLabel: '振れ幅',
    series: [
      {
        label: '周期0.005秒(振動数200Hz)',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 0.00125, y: 1 },
          { x: 0.0025, y: 0 },
          { x: 0.00375, y: -1 },
          { x: 0.005, y: 0 },
          { x: 0.00625, y: 1 },
          { x: 0.0075, y: 0 },
          { x: 0.00875, y: -1 },
          { x: 0.01, y: 0 },
        ],
      },
    ],
    caption: '周期0.005秒(1回振動するのにかかる時間)の波形。振動数＝1÷0.005＝200Hz',
  },

  // s204: やまびこの往復時間(叫んでから2秒後にやまびこが聞こえる)のタイムライン
  rext06_s204: {
    kind: 'numberLine',
    min: 0,
    max: 3,
    step: 1,
    points: [
      { x: 0, label: '声を出す(0秒)' },
      { x: 2, label: 'やまびこが聞こえる(2秒)' },
    ],
    caption: '0秒〜2秒が、音が山まで往復(山まで＋山から)するのにかかった時間。山までの距離は340×2÷2＝340m',
  },

  // s205: やまびこが返ってくるまでの時間と距離の関係(往復距離÷音速)
  rext06_s205: {
    kind: 'lineChart',
    xLabel: '崖までの距離(m)',
    yLabel: 'やまびこが聞こえるまでの時間(秒)',
    series: [
      {
        label: '時間 = 距離×2÷340',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 170, y: 1 },
          { x: 340, y: 2 },
          { x: 510, y: 3 },
          { x: 680, y: 4 },
        ],
      },
    ],
    caption: '崖までの距離が510mのとき、やまびこは3秒後に聞こえる(510×2÷340＝3)',
  },

  // s206: 崖A(340m,2秒)と崖B(510m,3秒)、それぞれのやまびこが聞こえるタイミング
  rext06_s206: {
    kind: 'numberLine',
    min: 0,
    max: 4,
    step: 1,
    points: [
      { x: 2, label: '崖Aのやまびこ(340m)' },
      { x: 3, label: '崖Bのやまびこ(510m)' },
    ],
    caption: '崖Aと崖Bからのやまびこが聞こえる時間差は1秒(3秒－2秒)',
  },

  // s209: 崖までの距離255mのやまびこ(往復510m÷340＝1.5秒)のタイムライン
  rext06_s209: {
    kind: 'numberLine',
    min: 0,
    max: 2,
    step: 0.5,
    points: [
      { x: 0, label: '音を出す(0秒)' },
      { x: 1.5, label: 'やまびこ(1.5秒後)' },
    ],
    caption: '崖までの距離255mのとき、往復距離510mを音速340m/秒で伝わるのにかかる時間は1.5秒',
  },
};
