// 教科書（レッスン）用の動く図解 — 特殊算 後半バッチ（平均算・ニュートン算・仕事算・
// 植木算・方陣算・濃度算・売買損益応用／sansu_s346〜sansu_s390 対応）。
// data/lesson-figures.ts に他の agent 用ファイルと合わせて登録される想定。

import type { Figure } from './figures';

export const lessonFigsSansuExt10: Record<string, Figure> = {
  // ===== sansu_s346 平均算の基本 =====
  lf_ext10_01: {
    kind: 'barChart',
    yLabel: '点数',
    bars: [
      { label: '1回目', value: 82 },
      { label: '2回目', value: 90 },
      { label: '3回目', value: 75 },
      { label: '4回目', value: 88 },
      { label: '5回目', value: 95 },
    ],
    caption: '合計430点（82+90+75+88+95）÷5回＝平均86点',
  },

  // ===== sansu_s348 目標平均にするための逆算 =====
  lf_ext10_02: {
    kind: 'barChart',
    yLabel: '点数',
    bars: [
      { label: '1〜4回目 平均', value: 72 },
      { label: '5回目に必要', value: 87 },
      { label: '5回 目標平均', value: 75, color: '#16A34A' },
    ],
    caption: '4回の合計288点＋5回目87点＝375点、375÷5＝目標の75点',
  },

  // ===== sansu_s349 グループ全体の平均の合成 =====
  lf_ext10_03: {
    kind: 'barChart',
    yLabel: '平均点',
    bars: [
      { label: 'Aグループ20人', value: 75 },
      { label: 'Bグループ30人', value: 80 },
      { label: '全体50人', value: 78, color: '#16A34A' },
    ],
    caption: '合計3,900点÷50人＝78点。単純平均(75+80)÷2＝77.5点ではない',
  },

  // ===== sansu_s350 平均とてんびん法（面積図） =====
  lf_ext10_04: {
    kind: 'numberLine',
    min: 64,
    max: 84,
    points: [
      { x: 70, label: '男20人 70点' },
      { x: 76, label: '全体 76点' },
      { x: 80, label: '女30人 80点' },
    ],
    segments: [
      { from: 70, to: 76 },
      { from: 76, to: 80 },
    ],
    caption: '腕の比（70↔76:76↔80＝6:4＝3:2）は人数の比（20:30＝2:3）の逆比。人数の多い女子側に平均が近づく',
  },

  // ===== sansu_s351 ニュートン算の基本（牧場の草） =====
  lf_ext10_05: {
    kind: 'lineChart',
    xLabel: '日数（日）',
    yLabel: '牛が食べる量（延べ頭数）',
    xRange: [0, 12],
    series: [
      { label: '12頭で6日', color: '#0EA5E9', markers: true, points: [{ x: 0, y: 0 }, { x: 6, y: 72 }] },
      { label: '8頭で10日', color: '#E11D48', markers: true, points: [{ x: 0, y: 0 }, { x: 10, y: 80 }] },
      { label: '草の量(初め60＋毎日2ずつ増加)', color: '#16A34A', dashed: true, points: [{ x: 0, y: 60 }, { x: 10, y: 80 }] },
    ],
    caption: '2つの直線（消費量）が「初め60＋毎日2ずつ増える草の量」の直線と交わる点が食べつくす日',
  },

  // ===== sansu_s352 窓口・行列のニュートン算 =====
  lf_ext10_06: {
    kind: 'lineChart',
    xLabel: '時間（分）',
    yLabel: '行列の人数',
    xRange: [0, 15],
    series: [
      { label: '窓口2つ', color: '#0EA5E9', markers: true, points: [{ x: 0, y: 30 }, { x: 15, y: 0 }] },
      { label: '窓口3つ', color: '#16A34A', markers: true, points: [{ x: 0, y: 30 }, { x: 5, y: 0 }] },
      { label: '窓口1つ（追いつけない）', color: '#E11D48', dashed: true, points: [{ x: 0, y: 30 }, { x: 15, y: 60 }] },
    ],
    caption: '窓口1つ（毎分4人処理）は新規到着（毎分6人）に追いつけず、行列が伸び続ける',
  },

  // ===== sansu_s353 水そう＋排水のニュートン算 =====
  lf_ext10_07: {
    kind: 'lineChart',
    xLabel: '時間（分）',
    yLabel: '井戸の残り水量（L）',
    xRange: [0, 10],
    yRange: [0, 200],
    series: [
      { label: 'ポンプ2台', color: '#0EA5E9', markers: true, points: [{ x: 0, y: 200 }, { x: 10, y: 0 }] },
      { label: 'ポンプ3台', color: '#16A34A', markers: true, points: [{ x: 0, y: 200 }, { x: 4, y: 0 }] },
      { label: 'ポンプ4台', color: '#9333EA', markers: true, points: [{ x: 0, y: 200 }, { x: 2.5, y: 0 }] },
    ],
    caption: '毎分40Lわき出る井戸を、毎分30Lくみ出すポンプでくみ出す。台数が増えるほど早く空になる',
  },

  // ===== sansu_s355 増加・減少が同時に起こるニュートン算の応用 =====
  lf_ext10_08: {
    kind: 'lineChart',
    xLabel: '時間（分）',
    yLabel: '水そうの水位（満水を1とする）',
    xRange: [0, 60],
    yRange: [0, 1],
    series: [
      { label: '空から開始', color: '#0EA5E9', markers: true, points: [{ x: 0, y: 0 }, { x: 60, y: 1 }] },
      { label: '半分から開始', color: '#16A34A', markers: true, points: [{ x: 0, y: 0.5 }, { x: 30, y: 1 }] },
    ],
    caption: '正味の増加速度は毎分1/60（A管1/20−B管1/30）。開始時の水位によって満水までの時間が変わる',
  },

  // ===== sansu_s356 ニュートン算の発展・入試レベル総合 =====
  lf_ext10_09: {
    kind: 'lineChart',
    xLabel: '時間（分）',
    yLabel: '行列の人数',
    xRange: [0, 8],
    series: [
      { label: 'ゲート4→6つに増加', color: '#0EA5E9', markers: true, points: [{ x: 0, y: 200 }, { x: 5, y: 100 }, { x: 7.5, y: 0 }] },
    ],
    caption: '5分後にゲートを4つから6つに増やすと、傾き（減り方）が急になる（折れ線の折れ目に注目）',
  },

  // ===== sansu_s357 仕事算の基本 =====
  lf_ext10_10: {
    kind: 'barChart',
    yLabel: '1日の仕事量（全体を1とした割合）',
    bars: [
      { label: 'Aさん(6日で完成)', value: 1 / 6 },
      { label: 'Bさん(12日で完成)', value: 1 / 12 },
      { label: '2人合計', value: 1 / 6 + 1 / 12, color: '#16A34A' },
    ],
    caption: '1日の仕事量を足すと1/6＋1/12＝1/4。2人だと1÷(1/4)＝4日で終わる',
  },

  // ===== sansu_s359 2人以上が一緒に働く仕事算 =====
  lf_ext10_11: {
    kind: 'barChart',
    yLabel: '1日の仕事量（全体を30とした場合）',
    bars: [
      { label: 'Aさん(15日)', value: 2 },
      { label: 'Bさん(10日)', value: 3 },
      { label: 'Cさん(30日)', value: 1 },
      { label: '3人合計', value: 6, color: '#16A34A' },
    ],
    caption: '全体を30(15,10,30の最小公倍数)とおくと、3人合計は1日6。30÷6＝5日で終わる',
  },

  // ===== sansu_s360 何人かで始めて途中で人数が変わる仕事算 =====
  lf_ext10_12: {
    kind: 'lineChart',
    xLabel: '日数（日）',
    yLabel: '終わった仕事量（人日）',
    xRange: [0, 8],
    series: [
      { label: '仕事の進み方', color: '#0EA5E9', markers: true, points: [{ x: 0, y: 0 }, { x: 3, y: 15 }, { x: 8, y: 80 }] },
    ],
    caption: '5人で3日働いて15人日、その後13人に増やして5日で残り65人日を終える（傾きが3日目で急になる）',
  },

  // ===== sansu_s363 一部の人数で行う仕事算（遅れて加わる） =====
  lf_ext10_13: {
    kind: 'lineChart',
    xLabel: '日数（日）',
    yLabel: '終わった仕事量（人日）',
    xRange: [0, 13],
    series: [
      { label: '仕事の進み方', color: '#0EA5E9', markers: true, points: [{ x: 0, y: 0 }, { x: 3, y: 12 }, { x: 13, y: 72 }] },
    ],
    caption: '4人で3日→12人日。4日目から6人になり、残り60人日を10日で終える。合計13日（予定の12日より遅れる）',
  },

  // ===== sansu_s364 水そうの水入れ・水抜き（複数の管） =====
  lf_ext10_14: {
    kind: 'lineChart',
    xLabel: '時間（時間）',
    yLabel: '水そうの水位（満水を1とする）',
    xRange: [0, 8],
    yRange: [0, 1],
    series: [
      { label: 'A・B・C（排水管あり）同時', color: '#0EA5E9', markers: true, points: [{ x: 0, y: 0 }, { x: 8, y: 1 }] },
    ],
    caption: '給水A(1/6)＋給水B(1/12)−排水C(1/8)＝正味1/8。満水まで8時間',
  },

  // ===== sansu_s365 水そうと同時注水の応用 =====
  lf_ext10_15: {
    kind: 'lineChart',
    xLabel: '時間（時間）',
    yLabel: '水そうの水位（満水を1とする）',
    xRange: [0, 6],
    yRange: [0, 1],
    series: [
      { label: '水位の変化', color: '#0EA5E9', markers: true, points: [{ x: 0, y: 0 }, { x: 3, y: 0.25 }, { x: 6, y: 1 }] },
    ],
    caption: 'A管だけで3時間(1/4まで)、その後B管も加えて2管で残り3/4を3時間で満水にする',
  },

  // ===== sansu_s368 植木算の基本（両端に植える） =====
  lf_ext10_16: {
    kind: 'numberLine',
    min: 0,
    max: 84,
    step: 6,
    points: [
      { x: 0, label: '木①(端)' },
      { x: 84, label: '木⑮(端)' },
    ],
    caption: '84m÷6m＝14の間隔。両端にも木を植えるので、本数＝14＋1＝15本',
  },

  // ===== sansu_s369 植木算（片端のみ・両端に植えない） =====
  lf_ext10_17: {
    kind: 'numberLine',
    min: 0,
    max: 60,
    step: 6,
    points: [
      { x: 0, label: '(植えない)' },
      { x: 60, label: '(植えない)' },
    ],
    caption: '60m÷6m＝10の間隔。両端には木を植えないので、本数＝10−1＝9本',
  },

  // ===== sansu_s370 植木算（円周上に木を植える） =====
  lf_ext10_18: {
    kind: 'circle',
    showCenter: false,
    points: [
      { angle: 0, label: '木' },
      { angle: 45 },
      { angle: 90 },
      { angle: 135 },
      { angle: 180 },
      { angle: 225 },
      { angle: 270 },
      { angle: 315 },
    ],
    caption: '円周は輪になっているので+1は不要（本数＝間隔の数）。実際の問題(1周360m・8mおき)では45本になる（図は本数を8本に簡略化した模式図）',
  },

  // ===== sansu_s371 植木算の応用（長方形の周に立てる） =====
  lf_ext10_19: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 12, y: 0, label: 'B' },
      { x: 12, y: 8, label: 'C' },
      { x: 0, y: 8, label: 'D' },
    ],
    sideLabels: ['12m', '8m', '12m', '8m'],
    caption: '周の長さ40m、2mおきに杭を立てると間隔は20。周は輪になっているので杭は20本（すみの杭も含む）',
  },

  // ===== sansu_s373 方陣算の基本（中実方陣） =====
  lf_ext10_20: {
    kind: 'barChart',
    yLabel: '総人数',
    bars: [
      { label: '1辺14人', value: 196 },
      { label: '1辺16人', value: 256, color: '#16A34A' },
    ],
    caption: '14×14＝196人、16×16＝256人。増える人数は256−196＝60人（帯56人＋すみの重なり4人）',
  },

  // ===== sansu_s374 方陣算（中空方陣） =====
  lf_ext10_21: {
    kind: 'barChart',
    yLabel: '総人数（1辺10人の場合）',
    bars: [
      { label: '中実方陣', value: 100 },
      { label: '中空方陣', value: 36, color: '#E11D48' },
    ],
    caption: '中実は10×10＝100人。中空は外側だけなので100−8×8(内側)＝36人。4×10−4＝36人でも確認できる',
  },

  // ===== sansu_s376 方陣算：長方形状の配置 =====
  lf_ext10_22: {
    kind: 'barChart',
    yLabel: '総人数（縦8人×横15人）',
    bars: [
      { label: '中実（すきまなく）', value: 120 },
      { label: '中空（周りだけ）', value: 42, color: '#E11D48' },
    ],
    caption: '中実は8×15＝120人。中空は周の人数＝2×(8+15)−4＝42人（正方形の公式4n−4はそのまま使えない）',
  },

  // ===== sansu_s378 濃度の基本公式 =====
  lf_ext10_23: {
    kind: 'barChart',
    yLabel: '重さ（g）',
    bars: [
      { label: '水', value: 170 },
      { label: '食塩', value: 30 },
      { label: '食塩水全体', value: 200, color: '#16A34A' },
    ],
    caption: '濃度＝食塩30g÷食塩水全体200g×100＝15%。分母は「水」ではなく「食塩水全体」',
  },

  // ===== sansu_s379 2種類の食塩水を混ぜる =====
  lf_ext10_24: {
    kind: 'barChart',
    yLabel: '食塩の重さ（g）',
    bars: [
      { label: '5%×300g', value: 15 },
      { label: '15%×200g', value: 30 },
      { label: '混合後(9%×500g)', value: 45, color: '#16A34A' },
    ],
    caption: '食塩の量は15＋30＝45g。混合後の濃度＝45÷500×100＝9%（(5+15)÷2=10%ではない）',
  },

  // ===== sansu_s380 水を加える・蒸発させる =====
  lf_ext10_25: {
    kind: 'barChart',
    yLabel: '重さ（g）',
    bars: [
      { label: '蒸発前 500g(8%)', value: 500 },
      { label: '蒸発後 400g(10%)', value: 400, color: '#E11D48' },
    ],
    caption: '食塩40gはそのまま。全体は500g→400gに減るので、濃度は8%→10%に濃くなる',
  },

  // ===== sansu_s382 一部を取り出して入れ替える =====
  lf_ext10_26: {
    kind: 'barChart',
    yLabel: '食塩の重さ（g）',
    bars: [
      { label: 'もとの食塩 80g', value: 80 },
      { label: '100g取り出すと−20g', value: 20, color: '#E11D48' },
      { label: '残りの食塩 60g', value: 60, color: '#16A34A' },
    ],
    caption: '取り出した100gにも食塩20g(100×0.2)が含まれている。水を足しても食塩は増えず60gのまま、全体400gで15%',
  },

  // ===== sansu_s384 天びん法の考え方 =====
  lf_ext10_27: {
    kind: 'numberLine',
    min: 2,
    max: 12,
    points: [
      { x: 4, label: '4%(300g)' },
      { x: 6.4, label: '混合 6.4%' },
      { x: 10, label: '10%(200g)' },
    ],
    segments: [
      { from: 4, to: 6.4 },
      { from: 6.4, to: 10 },
    ],
    caption: '腕の比（2.4:3.6＝2:3）は重さの比（300:200＝3:2）の逆比',
  },

  // ===== sansu_s385 天びん法で混ぜる比を求める =====
  lf_ext10_28: {
    kind: 'numberLine',
    min: 1,
    max: 20,
    points: [
      { x: 3, label: '3%' },
      { x: 10, label: '目標 10%' },
      { x: 18, label: '18%' },
    ],
    segments: [
      { from: 3, to: 10 },
      { from: 10, to: 18 },
    ],
    caption: '腕の比は3%側7、18%側8。重さの比はこの逆比で3%:18%＝8:7＝400g:350g',
  },

  // ===== sansu_s386 天びん法で目標濃度になる量を求める =====
  lf_ext10_29: {
    kind: 'numberLine',
    min: 0,
    max: 25,
    points: [
      { x: 5, label: '5%(500g)' },
      { x: 8, label: '目標 8%' },
      { x: 20, label: '20%' },
    ],
    segments: [
      { from: 5, to: 8 },
      { from: 8, to: 20 },
    ],
    caption: '腕の比は5%側3、20%側12。重さの比はこの逆比で5%:20%＝12:3＝4:1＝500g:125g',
  },

  // ===== sansu_s388 定価と利益の基本の複合 =====
  lf_ext10_30: {
    kind: 'barChart',
    yLabel: '金額（円）',
    bars: [
      { label: '原価', value: 800 },
      { label: '定価(3割増)', value: 1040 },
      { label: '売価(定価の2割引)', value: 832, color: '#16A34A' },
    ],
    caption: '利益＝売価832円−原価800円＝32円（3割−2割＝1割の80円ではない）',
  },

  // ===== sansu_s390 仕入れ・利益の総合問題 =====
  lf_ext10_31: {
    kind: 'barChart',
    yLabel: '金額（円）',
    bars: [
      { label: '仕入れ総額', value: 60000 },
      { label: '売上合計', value: 70200, color: '#0EA5E9' },
      { label: '利益', value: 10200, color: '#16A34A' },
    ],
    caption: '120個は定価520円、残り30個は半額260円(定価の半分)で売り切り、利益は10,200円',
  },
};
