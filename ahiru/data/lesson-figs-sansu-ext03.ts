import type { Figure } from './figures';

// 中学受験 算数「III. 速さ」拡張ユニット（sansu_s086〜sansu_s125）の図解バッチ。
// キーは lessons-sansu-ext03.ts の figureId と対応。他ユニットと衝突しないよう
// 接頭辞 lf_hayasa_ + セッション番号（3桁）で統一する。
export const lessonFigsSansuExt03: Record<string, Figure> = {
  // s087: 単位換算①（秒速15m＝時速54kmの直線）
  lf_hayasa_087: {
    kind: 'lineChart',
    xLabel: '時間(秒)',
    yLabel: '道のり(m)',
    xRange: [0, 5],
    yRange: [0, 80],
    series: [{ markers: true, points: [{ x: 0, y: 0 }, { x: 5, y: 75 }] }],
    caption: '秒速15mで進む道のり。この直線の傾きは「秒速15m＝時速54km(15×3.6)」と同じ速さを表す',
  },

  // s089: 平均の速さ（往復）
  lf_hayasa_089: {
    kind: 'lineChart',
    xLabel: '時間(時間)',
    yLabel: '道のり(km)',
    xRange: [0, 4.5],
    yRange: [0, 10],
    series: [{ markers: true, points: [{ x: 0, y: 0 }, { x: 2.5, y: 10 }, { x: 4.1667, y: 0 }] }],
    caption: '行き(時速4km・2.5時間)と帰り(時速6km・約1.67時間)。平均の速さは20km÷約4.17時間＝4.8km/hで、速さの単純平均5km/hにはならない',
  },

  // s091: 旅人算①出会い算
  lf_hayasa_091: {
    kind: 'lineChart',
    xLabel: '時間(分)',
    yLabel: '道のり(m)',
    xRange: [0, 150],
    yRange: [0, 21000],
    series: [
      { label: 'A', markers: true, points: [{ x: 0, y: 0 }, { x: 140, y: 9800 }] },
      { label: 'B', markers: true, points: [{ x: 0, y: 21000 }, { x: 140, y: 9800 }] },
    ],
    caption: '21km離れた2地点から向かい合って出発。交点(140分後・9800m地点)が出会う瞬間',
  },

  // s092: 旅人算②追いつき算
  lf_hayasa_092: {
    kind: 'lineChart',
    xLabel: '時間(分)',
    yLabel: '道のり(m)',
    xRange: [0, 110],
    yRange: [0, 9500],
    series: [
      { label: 'A', markers: true, points: [{ x: 0, y: 0 }, { x: 100, y: 9000 }] },
      { label: 'B', markers: true, points: [{ x: 0, y: 3000 }, { x: 100, y: 9000 }] },
    ],
    caption: 'Bの3000m後方からAが追いかける。交点(100分後・9000m地点)が追いつく瞬間。速さの差(30m/分)で近づく',
  },

  // s093: 旅人算③線分図・ダイヤグラムの書き方
  lf_hayasa_093: {
    kind: 'lineChart',
    xLabel: '時間(時間)',
    yLabel: '道のり(km)',
    xRange: [0, 1],
    yRange: [0, 12],
    series: [
      { label: 'P', markers: true, points: [{ x: 0, y: 0 }, { x: 1, y: 4 }] },
      { label: 'Q', markers: true, points: [{ x: 0, y: 12 }, { x: 1, y: 4 }] },
    ],
    caption: '12km離れたP,Qから時速4km・8kmで向かい合う。出会うのは1時間後、Pから4km地点(真ん中の6kmではない)',
  },

  // s095: 旅人算⑤時間差スタート
  lf_hayasa_095: {
    kind: 'lineChart',
    xLabel: '9時からの経過分',
    yLabel: '道のり(m)',
    xRange: [0, 40],
    yRange: [0, 2400],
    series: [
      { label: 'A', markers: true, points: [{ x: 0, y: 0 }, { x: 36, y: 2160 }] },
      { label: 'B', markers: true, points: [{ x: 12, y: 0 }, { x: 36, y: 2160 }] },
    ],
    caption: 'Aは9時、Bは9時12分に出発。交点(9時36分・2160m地点)がBの追いつく瞬間',
  },

  // s097: 旅人算応用①3人の旅人算
  lf_hayasa_097: {
    kind: 'lineChart',
    xLabel: '時間(分)',
    yLabel: 'Pからの東向き距離(m)',
    xRange: [0, 25],
    yRange: [-1600, 3100],
    series: [
      { label: 'A', markers: true, points: [{ x: 0, y: 0 }, { x: 25, y: 2000 }] },
      { label: 'B', markers: true, points: [{ x: 0, y: 0 }, { x: 25, y: -1500 }] },
      { label: 'C', markers: true, points: [{ x: 0, y: 3000 }, { x: 25, y: 2000 }] },
    ],
    caption: 'AとCだけが近づき合う。AとCの交点(25分後・2000m地点)が出会う瞬間。Bの速さは無関係',
  },

  // s098: 旅人算応用②往復して複数回出会う
  lf_hayasa_098: {
    kind: 'lineChart',
    xLabel: '時間(分)',
    yLabel: '道のり(m)',
    xRange: [0, 24],
    yRange: [0, 1200],
    series: [
      { label: 'A', markers: true, points: [{ x: 0, y: 0 }, { x: 12, y: 1200 }, { x: 24, y: 0 }] },
      { label: 'B', markers: true, points: [{ x: 0, y: 1200 }, { x: 24, y: 0 }] },
    ],
    caption: '1回目の出会いは8分後・800m地点、2回目は24分後・P地点(0m)。2回目は2人の合計移動距離が3D(3600m)になる時',
  },

  // s099: 旅人算応用③池の周りの旅人算
  lf_hayasa_099: {
    kind: 'circle',
    points: [
      { angle: 90, label: 'スタート地点' },
      { angle: 234, label: '出会う地点(Aが360m進んだ位置)' },
    ],
    showCenter: true,
    sector: { from: 90, to: 234, label: '360m' },
    caption: '周囲900mの池をA(分速60m)とB(分速90m)が反対向きに進む。出会うまでにAとB合わせてちょうど1周(900m)。時間は900÷(60+90)＝6分',
  },

  // s100: 旅人算応用④グラフ(ダイヤグラム)で解く
  lf_hayasa_100: {
    kind: 'lineChart',
    xLabel: '時間(分)',
    yLabel: '道のり(m)',
    xRange: [0, 20],
    yRange: [0, 1800],
    series: [
      { label: 'P', markers: true, points: [{ x: 0, y: 0 }, { x: 20, y: 1200 }] },
      { label: 'Q', markers: true, points: [{ x: 0, y: 1800 }, { x: 20, y: 0 }] },
    ],
    caption: '交点は(12分,720m)。x座標が時間、y座標が道のり。読み違えて「12m地点」などとしないこと',
  },

  // s102: 旅人算応用⑥入試総合問題
  lf_hayasa_102: {
    kind: 'lineChart',
    xLabel: '9時からの経過分',
    yLabel: 'Pからの道のり(m)',
    xRange: [0, 45],
    yRange: [0, 3600],
    series: [
      { label: 'A', markers: true, points: [{ x: 0, y: 0 }, { x: 45, y: 3600 }] },
      { label: 'B', markers: true, points: [{ x: 6, y: 0 }, { x: 30, y: 2400 }] },
    ],
    caption: 'Bは6分遅れで出発。交点(9時30分・2400m地点)がBがAに追いつく瞬間',
  },

  // s103: 通過算①基本(電柱・トンネル)
  lf_hayasa_103: {
    kind: 'numberLine',
    min: 0,
    max: 750,
    step: 150,
    segments: [{ from: 0, to: 750 }],
    points: [
      { x: 0, label: 'トンネル入口' },
      { x: 150, label: '列車の長さ150m' },
      { x: 750, label: '移動距離750m' },
    ],
    caption: '移動距離＝列車の長さ150m＋トンネルの長さ600m＝750m。時間＝750÷秒速25m＝30秒',
  },

  // s104: 通過算②すれ違い
  lf_hayasa_104: {
    kind: 'lineChart',
    xLabel: '時間(秒)',
    yLabel: '道のり(m)',
    xRange: [0, 9],
    yRange: [0, 400],
    series: [
      { label: 'A', markers: true, points: [{ x: 0, y: 0 }, { x: 8, y: 160 }] },
      { label: 'B', markers: true, points: [{ x: 0, y: 400 }, { x: 8, y: 160 }] },
    ],
    caption: '長さの和400mを速さの和50m/秒で詰める。すれ違いにかかる時間は400÷50＝8秒',
  },

  // s105: 通過算③追い越し
  lf_hayasa_105: {
    kind: 'lineChart',
    xLabel: '時間(秒)',
    yLabel: '道のり(m)',
    xRange: [0, 32],
    yRange: [0, 900],
    series: [
      { label: '快速', markers: true, points: [{ x: 0, y: 0 }, { x: 30, y: 840 }] },
      { label: '各駅停車(基準点)', markers: true, points: [{ x: 0, y: 300 }, { x: 30, y: 840 }] },
    ],
    caption: '長さの和300mを速さの差10m/秒で詰める。追い越しにかかる時間は300÷10＝30秒',
  },

  // s106: 通過算④トンネル内で完全に隠れる
  lf_hayasa_106: {
    kind: 'numberLine',
    min: 0,
    max: 480,
    step: 120,
    segments: [{ from: 0, to: 480 }],
    points: [
      { x: 0, label: '列車が完全に隠れた瞬間' },
      { x: 480, label: '先頭が出口に着く瞬間' },
    ],
    caption: '隠れている間に進む距離＝トンネル600m−列車120m＝480m。時間＝480÷秒速15m＝32秒(600+120で計算する通過算①の公式と混同しない)',
  },

  // s108: 流水算①基本公式
  lf_hayasa_108: {
    kind: 'lineChart',
    xLabel: '時間(時間)',
    yLabel: '道のり(km)',
    xRange: [0, 2],
    yRange: [0, 36],
    series: [
      { label: '下り(18km/h)', markers: true, points: [{ x: 0, y: 0 }, { x: 2, y: 36 }] },
      { label: '上り(12km/h)', markers: true, points: [{ x: 0, y: 0 }, { x: 2, y: 24 }] },
    ],
    caption: '静水時15km/h、流れ3km/hの船。下り＝15+3＝18km/h、上り＝15−3＝12km/h。下りの方が傾きが急',
  },

  // s110: 流水算③往復にかかる時間
  lf_hayasa_110: {
    kind: 'lineChart',
    xLabel: '時間(時間)',
    yLabel: '道のり(km)',
    xRange: [0, 7.5],
    yRange: [0, 54],
    series: [{ markers: true, points: [{ x: 0, y: 0 }, { x: 3, y: 54 }, { x: 7.5, y: 0 }] }],
    caption: '下り3時間(時速18km)、上り4.5時間(時速12km)で合計7.5時間。往復距離108kmを静水時の速さ15km/hで割った7.2時間は誤り',
  },

  // s111: 流水算④2そうの船の追いつき
  lf_hayasa_111: {
    kind: 'lineChart',
    xLabel: 'Pが出発してからの時間(時間)',
    yLabel: 'Aからの道のり(km)',
    xRange: [0, 7],
    yRange: [0, 150],
    series: [
      { label: 'P(下り22km/h)', markers: true, points: [{ x: 0, y: 0 }, { x: 6.5, y: 143 }] },
      { label: 'Q(下り26km/h)', markers: true, points: [{ x: 1, y: 0 }, { x: 6.5, y: 143 }] },
    ],
    caption: 'Qが1時間遅れで出発。Pの1時間の頭差は必ずPの実際の下りの速さ(22km/h)で計算する(静水時の18km/hではない)。追いつくのはQの出発から5.5時間後',
  },

  // s113: 時計算①長針・短針の速さ
  lf_hayasa_113: {
    kind: 'circle',
    points: [
      { angle: -30, label: '長針(20分→120°)' },
      { angle: -10, label: '短針(3時20分→100°)' },
    ],
    showCenter: true,
    sector: { from: -30, to: -10, label: '20°' },
    caption: '長針は1分6°、短針は1分0.5°進む。3時20分の短針は90°+20×0.5°＝100°。差は120°−100°＝20°',
  },

  // s114: 時計算②長針と短針が重なる時刻
  lf_hayasa_114: {
    kind: 'circle',
    points: [
      { angle: 90, label: '4:00 長針(0°)' },
      { angle: -30, label: '4:00 短針(120°)' },
      { angle: -40.9, label: '重なる瞬間(約130.9°)' },
    ],
    showCenter: true,
    caption: '長針は1分6°、短針は1分0.5°で、差5.5°/分ずつ縮まる。120°÷5.5＝21 9/11分後に重なる(4時21 9/11分)',
  },

  // s115: 時計算③長針と短針が直角になる時刻
  lf_hayasa_115: {
    kind: 'circle',
    points: [
      { angle: 24.55, label: '長針(約65.5°)' },
      { angle: -65.45, label: '短針(約155.5°)' },
    ],
    showCenter: true,
    sector: { from: -65.45, to: 24.55, label: '90°' },
    caption: '5時0分の差150°から5.5°/分で縮まり、(150−90)÷5.5＝10 10/11分後に初めて直角(90°)になる(5時10 10/11分)',
  },

  // s117: 時計算⑤入試総合(一直線180°)
  lf_hayasa_117: {
    kind: 'circle',
    points: [
      { angle: 57.27, label: '長針(約32.7°)' },
      { angle: -122.73, label: '短針(約212.7°)' },
    ],
    showCenter: true,
    sector: { from: 57.27, to: -122.73, label: '180°(一直線)' },
    caption: '7時0分の差210°から5.5°/分で縮まり、(210−180)÷5.5＝5 5/11分後に一直線(180°)になる(7時5 5/11分)',
  },

  // s120: 速さと比③旅人算との融合
  lf_hayasa_120: {
    kind: 'lineChart',
    xLabel: '時間(分)',
    yLabel: '道のり(m)（正負で反対方向を表す）',
    xRange: [0, 80],
    yRange: [-2300, 1700],
    series: [
      { label: 'A(20m/分)', markers: true, points: [{ x: 0, y: 0 }, { x: 80, y: 1600 }] },
      { label: 'B(28m/分)', markers: true, points: [{ x: 0, y: 0 }, { x: 80, y: -2240 }] },
    ],
    caption: '速さの比5:7を12等分し、合計48m/分を5:7に配分してA=20,B=28(m/分)。80分後の2人の間の距離は1600+2240＝3840m',
  },

  // s122: ダイヤグラム①基本の読み取り方
  lf_hayasa_122: {
    kind: 'lineChart',
    xLabel: '時間(分)',
    yLabel: '道のり(m)',
    xRange: [0, 10],
    yRange: [0, 800],
    series: [{ markers: true, points: [{ x: 0, y: 0 }, { x: 10, y: 800 }] }],
    caption: '速さ＝グラフの傾き＝道のり÷時間＝800÷10＝80m/分。時間÷道のりと逆にしない',
  },

  // s123: ダイヤグラム②交点の意味
  lf_hayasa_123: {
    kind: 'lineChart',
    xLabel: '時間(分)',
    yLabel: '道のり(m)',
    xRange: [0, 25],
    yRange: [0, 2000],
    series: [
      { label: 'P', markers: true, points: [{ x: 0, y: 0 }, { x: 20, y: 1600 }] },
      { label: 'Q', markers: true, points: [{ x: 0, y: 2000 }, { x: 25, y: 0 }] },
    ],
    caption: '2本の直線の交点(12.5分,1000m)が出会う瞬間。Qのグラフが0になる25分は「Qが到着した時刻」であって出会う時刻ではない',
  },

  // s124: ダイヤグラム③グラフから速さ・道のりを求める
  lf_hayasa_124: {
    kind: 'lineChart',
    xLabel: '時間(分)',
    yLabel: '道のり(m)',
    xRange: [0, 35],
    yRange: [0, 900],
    series: [{ markers: true, points: [{ x: 0, y: 0 }, { x: 15, y: 900 }, { x: 20, y: 900 }, { x: 35, y: 0 }] }],
    caption: '0〜15分は分速60m、15〜20分は静止、20〜35分(15分間で900m戻る)も分速60m。戻りの時間は35分ではなく15分(35−20)を使う',
  },

  // s125: ダイヤグラム④入試総合問題
  lf_hayasa_125: {
    kind: 'lineChart',
    xLabel: '9時からの経過分',
    yLabel: '家からの道のり(m)',
    xRange: [0, 37.5],
    yRange: [0, 3000],
    series: [
      { label: '姉', markers: true, points: [{ x: 0, y: 0 }, { x: 15, y: 3000 }, { x: 20, y: 3000 }, { x: 35, y: 0 }] },
      { label: '妹', markers: true, points: [{ x: 0, y: 0 }, { x: 37.5, y: 3000 }] },
    ],
    caption: '交点(25分後,2000m地点)ですれ違う。姉の休憩5分を考えないと誤った時刻になる',
  },
};
