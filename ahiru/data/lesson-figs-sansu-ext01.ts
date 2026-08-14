import type { Figure } from './figures';

// 中学受験算数 拡張ユニットI「数の性質」（sansu_s001〜s040）専用の図解データ。
// lessons-sansu-ext01.ts の各Lessonのsections[].figureIdから参照される。
export const lessonFigsSansuExt01: Record<string, Figure> = {
  // s001: 位取り記数法（3247の各位の値）
  sext01_s001: {
    kind: 'barChart',
    xLabel: '位',
    yLabel: '値',
    bars: [
      { label: '千の位(3)', value: 3000 },
      { label: '百の位(2)', value: 200 },
      { label: '十の位(4)', value: 40 },
      { label: '一の位(7)', value: 7 },
    ],
    caption: '3247 = 3000 + 200 + 40 + 7',
  },

  // s003: 概数（四捨五入で500になる範囲）
  sext01_s003: {
    kind: 'numberLine',
    min: 400,
    max: 600,
    step: 50,
    segments: [{ from: 450, to: 550, fromOpen: false, toOpen: true }],
    points: [{ x: 500, label: '500' }],
    caption: '450以上550未満の整数は、百の位までの概数で500になる',
  },

  // s007: 3の倍数（3〜30）
  sext01_s007: {
    kind: 'numberLine',
    min: 0,
    max: 30,
    step: 5,
    points: [
      { x: 3, label: '3' },
      { x: 6, label: '6' },
      { x: 9, label: '9' },
      { x: 12, label: '12' },
      { x: 15, label: '15' },
      { x: 18, label: '18' },
      { x: 21, label: '21' },
      { x: 24, label: '24' },
      { x: 27, label: '27' },
      { x: 30, label: '30' },
    ],
    caption: '3の倍数（3ずつ増える）',
  },

  // s008: 4と6の公倍数（最小公倍数12の倍数）
  sext01_s008: {
    kind: 'numberLine',
    min: 0,
    max: 48,
    step: 6,
    points: [
      { x: 12, label: '12' },
      { x: 24, label: '24' },
      { x: 36, label: '36' },
      { x: 48, label: '48' },
    ],
    caption: '4と6の公倍数（最小公倍数12の倍数がすべて公倍数）',
  },

  // s013: 素因数分解から求めた約数の個数
  sext01_s013: {
    kind: 'barChart',
    xLabel: '数',
    yLabel: '約数の個数',
    bars: [
      { label: '12', value: 6 },
      { label: '16', value: 5 },
      { label: '24', value: 8 },
      { label: '36', value: 9 },
    ],
    caption: '素因数分解の指数から約数の個数を求める（例：24=2³×3→(3+1)×(1+1)=8個）',
  },

  // s014: 約数の総和
  sext01_s014: {
    kind: 'barChart',
    xLabel: '数',
    yLabel: '約数の総和',
    bars: [
      { label: '12', value: 28 },
      { label: '16', value: 31 },
      { label: '24', value: 60 },
      { label: '28', value: 56 },
    ],
    caption: '約数の総和（その数自身も含む）',
  },

  // s015: 1〜100の平方数
  sext01_s015: {
    kind: 'numberLine',
    min: 0,
    max: 100,
    step: 10,
    points: [
      { x: 1, label: '1' },
      { x: 4, label: '4' },
      { x: 9, label: '9' },
      { x: 16, label: '16' },
      { x: 25, label: '25' },
      { x: 36, label: '36' },
      { x: 49, label: '49' },
      { x: 64, label: '64' },
      { x: 81, label: '81' },
      { x: 100, label: '100' },
    ],
    caption: '1〜100の平方数（1²〜10²）',
  },

  // s016: 1を4等分した分数の目盛り
  sext01_s016: {
    kind: 'numberLine',
    min: 0,
    max: 1,
    step: 0.25,
    points: [
      { x: 0, label: '0' },
      { x: 0.25, label: '1/4' },
      { x: 0.5, label: '2/4' },
      { x: 0.75, label: '3/4' },
      { x: 1, label: '1' },
    ],
    caption: '1を4等分した分数の目盛り',
  },

  // s019: 分数の大小比較（数直線上の位置）
  sext01_s019: {
    kind: 'numberLine',
    min: 0,
    max: 1,
    step: 0.25,
    points: [
      { x: 0.5, label: '1/2' },
      { x: 0.667, label: '2/3' },
      { x: 0.75, label: '3/4' },
      { x: 0.833, label: '5/6' },
    ],
    caption: '分数の大きさを数直線上の位置で比較する',
  },

  // s020: 単位分数（1を5等分）
  sext01_s020: {
    kind: 'pieChart',
    slices: [
      { label: '1/5', value: 1 },
      { label: '1/5', value: 1 },
      { label: '1/5', value: 1 },
      { label: '1/5', value: 1 },
      { label: '1/5', value: 1 },
    ],
    caption: '1を5等分した単位分数 1/5 が5個で1になる',
  },

  // s021: 小数の位取り（3.247）
  sext01_s021: {
    kind: 'barChart',
    xLabel: '位',
    yLabel: '値',
    bars: [
      { label: '一の位(3)', value: 3 },
      { label: '第一位(0.2)', value: 0.2 },
      { label: '第二位(0.04)', value: 0.04 },
      { label: '第三位(0.007)', value: 0.007 },
    ],
    caption: '3.247 = 3 + 0.2 + 0.04 + 0.007',
  },

  // s026: 2進法の位の値
  sext01_s026: {
    kind: 'barChart',
    xLabel: '位',
    yLabel: '10進法での値',
    bars: [
      { label: '2³(8)', value: 8 },
      { label: '2²(4)', value: 4 },
      { label: '2¹(2)', value: 2 },
      { label: '2⁰(1)', value: 1 },
    ],
    caption: '2進法の各位が表す10進法の値',
  },

  // s027: 5進法の位の値
  sext01_s027: {
    kind: 'barChart',
    xLabel: '位',
    yLabel: '10進法での値',
    bars: [
      { label: '5³(125)', value: 125 },
      { label: '5²(25)', value: 25 },
      { label: '5¹(5)', value: 5 },
      { label: '5⁰(1)', value: 1 },
    ],
    caption: '5進法の各位が表す10進法の値',
  },

  // s028: 時計の文字盤（12進法の周期構造）
  sext01_s028: {
    kind: 'circle',
    showCenter: true,
    points: [
      { angle: 90, label: '12' },
      { angle: 60, label: '1' },
      { angle: 30, label: '2' },
      { angle: 0, label: '3' },
      { angle: 330, label: '4' },
      { angle: 300, label: '5' },
      { angle: 270, label: '6' },
      { angle: 240, label: '7' },
      { angle: 210, label: '8' },
      { angle: 180, label: '9' },
      { angle: 150, label: '10' },
      { angle: 120, label: '11' },
    ],
    caption: '時計の文字盤は12進法の周期構造',
  },

  // s029: 周期3のくり返し模様
  sext01_s029: {
    kind: 'barChart',
    xLabel: '番目',
    yLabel: '',
    bars: [
      { label: '1', value: 1, color: '#0EA5E9' },
      { label: '2', value: 2, color: '#E11D48' },
      { label: '3', value: 3, color: '#16A34A' },
      { label: '4', value: 1, color: '#0EA5E9' },
      { label: '5', value: 2, color: '#E11D48' },
      { label: '6', value: 3, color: '#16A34A' },
      { label: '7', value: 1, color: '#0EA5E9' },
      { label: '8', value: 2, color: '#E11D48' },
      { label: '9', value: 3, color: '#16A34A' },
    ],
    caption: '3個で1周期の模様（同じ色が3個ごとにくり返す）',
  },

  // s030: 曜日は7日で1周する周期
  sext01_s030: {
    kind: 'barChart',
    xLabel: '曜日',
    yLabel: '',
    bars: [
      { label: '日', value: 1 },
      { label: '月', value: 1 },
      { label: '火', value: 1 },
      { label: '水', value: 1 },
      { label: '木', value: 1 },
      { label: '金', value: 1 },
      { label: '土', value: 1 },
    ],
    caption: '曜日は7日で1周する周期',
  },

  // s031: 各月の日数（平年）
  sext01_s031: {
    kind: 'barChart',
    xLabel: '月',
    yLabel: '日数',
    bars: [
      { label: '1月', value: 31 },
      { label: '2月', value: 28 },
      { label: '3月', value: 31 },
      { label: '4月', value: 30 },
      { label: '5月', value: 31 },
      { label: '6月', value: 30 },
      { label: '7月', value: 31 },
      { label: '8月', value: 31 },
      { label: '9月', value: 30 },
      { label: '10月', value: 31 },
      { label: '11月', value: 30 },
      { label: '12月', value: 31 },
    ],
    caption: '各月の日数（平年・うるう年でない年）',
  },

  // s032: 7で割ると3余る数（周期7）
  sext01_s032: {
    kind: 'numberLine',
    min: 0,
    max: 30,
    step: 5,
    points: [
      { x: 2, label: '2' },
      { x: 7, label: '7' },
      { x: 12, label: '12' },
      { x: 17, label: '17' },
      { x: 22, label: '22' },
      { x: 27, label: '27' },
    ],
    caption: '5で割ると2余る数（周期5でくり返す）',
  },

  // s033: 周期4のくり返し模様
  sext01_s033: {
    kind: 'barChart',
    xLabel: '番目',
    yLabel: '',
    bars: [
      { label: '1', value: 1, color: '#0EA5E9' },
      { label: '2', value: 2, color: '#E11D48' },
      { label: '3', value: 3, color: '#16A34A' },
      { label: '4', value: 4, color: '#9333EA' },
      { label: '5', value: 1, color: '#0EA5E9' },
      { label: '6', value: 2, color: '#E11D48' },
      { label: '7', value: 3, color: '#16A34A' },
      { label: '8', value: 4, color: '#9333EA' },
      { label: '9', value: 1, color: '#0EA5E9' },
      { label: '10', value: 2, color: '#E11D48' },
      { label: '11', value: 3, color: '#16A34A' },
      { label: '12', value: 4, color: '#9333EA' },
    ],
    caption: '4個で1周期の模様が3回くり返す',
  },

  // s035: 入試レベルの数の約数の個数
  sext01_s035: {
    kind: 'barChart',
    xLabel: '数',
    yLabel: '約数の個数',
    bars: [
      { label: '48', value: 10 },
      { label: '60', value: 12 },
      { label: '72', value: 12 },
      { label: '90', value: 12 },
    ],
    caption: '入試レベルの数の約数の個数（素因数分解から計算）',
  },

  // s036: 8分ごと・12分ごとに鳴るベルが同時に鳴る時刻
  sext01_s036: {
    kind: 'numberLine',
    min: 0,
    max: 96,
    step: 12,
    points: [
      { x: 24, label: '24分' },
      { x: 48, label: '48分' },
      { x: 72, label: '72分' },
      { x: 96, label: '96分' },
    ],
    caption: '8分ごとと12分ごとに鳴るベルが同時に鳴る時刻（最小公倍数24分ごと）',
  },

  // s038: 3人の休みが重なる周期（LCM）
  sext01_s038: {
    kind: 'barChart',
    xLabel: '番目',
    yLabel: '',
    bars: [
      { label: '1', value: 1, color: '#0EA5E9' },
      { label: '2', value: 2, color: '#E11D48' },
      { label: '3', value: 3, color: '#16A34A' },
      { label: '4', value: 4, color: '#9333EA' },
      { label: '5', value: 5, color: '#F59E0B' },
      { label: '6', value: 6, color: '#0891B2' },
      { label: '7', value: 1, color: '#0EA5E9' },
      { label: '8', value: 2, color: '#E11D48' },
      { label: '9', value: 3, color: '#16A34A' },
      { label: '10', value: 4, color: '#9333EA' },
      { label: '11', value: 5, color: '#F59E0B' },
      { label: '12', value: 6, color: '#0891B2' },
    ],
    caption: '6個で1周期の模様が2回くり返す（周期算と規則性の融合）',
  },

  // s039: 3の倍数かつ4の倍数（＝12の倍数）
  sext01_s039: {
    kind: 'numberLine',
    min: 0,
    max: 60,
    step: 12,
    points: [
      { x: 12, label: '12' },
      { x: 24, label: '24' },
      { x: 36, label: '36' },
      { x: 48, label: '48' },
      { x: 60, label: '60' },
    ],
    caption: '3の倍数かつ4の倍数（＝12の倍数）',
  },

  // s040: 30までの素数（総まとめ）
  sext01_s040: {
    kind: 'numberLine',
    min: 0,
    max: 30,
    step: 5,
    points: [
      { x: 2, label: '2' },
      { x: 3, label: '3' },
      { x: 5, label: '5' },
      { x: 7, label: '7' },
      { x: 11, label: '11' },
      { x: 13, label: '13' },
      { x: 17, label: '17' },
      { x: 19, label: '19' },
      { x: 23, label: '23' },
      { x: 29, label: '29' },
    ],
    caption: '30までの素数（総まとめ）',
  },
};
