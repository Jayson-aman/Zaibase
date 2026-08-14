import type { Figure } from './figures';

// 中学受験 算数「IX. 文章題・応用問題」40セッション（sansu_s391〜sansu_s430）専用の図解データ。
// 線分図／逆算・還元算／過不足算・分配算／いろいろな文章題／論理パズル／入試実戦演習／総合演習。

export const lessonFigsSansuExt11: Record<string, Figure> = {
  // ===== sansu_s391 線分図の基本ルール =====
  lf_sansu_ext11_391: {
    kind: 'coordinate',
    xRange: [-20, 270],
    yRange: [-1, 2],
    segments: [
      [{ x: 0, y: 1 }, { x: 250, y: 1 }],
      [{ x: 0, y: 0 }, { x: 90, y: 0 }],
    ],
    points: [
      { x: 0, y: 1, label: '0' },
      { x: 250, y: 1, label: '全体250ページ' },
      { x: 90, y: 0, label: '読んだ90ページ' },
    ],
    caption: '上の線分が本全体の250ページ、下の線分が読んだ90ページ。残りは250－90＝160ページ',
  },

  // ===== sansu_s392 線分図で「差」を表す =====
  lf_sansu_ext11_392: {
    kind: 'coordinate',
    xRange: [-2, 22],
    yRange: [-1, 2],
    segments: [
      [{ x: 0, y: 0 }, { x: 12, y: 0 }],
      [{ x: 0, y: 1 }, { x: 19, y: 1 }],
    ],
    points: [
      { x: 12, y: 0, label: '弟12個' },
      { x: 19, y: 1, label: '姉19個' },
    ],
    caption: '弟の線分(12)より、姉の線分は7だけ長い（12＋7＝19）。差の7個分だけ線分がはみ出す',
  },

  // ===== sansu_s394 線分図と和差算 =====
  lf_sansu_ext11_394: {
    kind: 'coordinate',
    xRange: [-100, 2300],
    yRange: [-1, 2],
    segments: [
      [{ x: 0, y: 0 }, { x: 1500, y: 0 }],
      [{ x: 0, y: 1 }, { x: 2100, y: 1 }],
    ],
    points: [
      { x: 1500, y: 0, label: '妹1,500円' },
      { x: 2100, y: 1, label: '姉2,100円' },
    ],
    caption: '妹の線分に600円分足すと姉の線分になる。姉＋妹＝3,600円、姉－妹＝600円より、姉＝2,100円・妹＝1,500円',
  },

  // ===== sansu_s396 線分図の応用：やりとり算の基礎 =====
  lf_sansu_ext11_396: {
    kind: 'barChart',
    yLabel: '所持金（円）',
    bars: [
      { label: '兄(渡す前)', value: 1200 },
      { label: '弟(もらう前)', value: 600 },
      { label: '兄(渡した後)', value: 900, color: '#0EA5E9' },
      { label: '弟(もらった後)', value: 900, color: '#0EA5E9' },
    ],
    caption: '兄が弟に300円渡すと、2人とも900円になる（合計1,800円の半分ずつ）',
  },

  // ===== sansu_s398 還元算①（一連の操作を逆にたどる） =====
  lf_sansu_ext11_398: {
    kind: 'numberLine',
    min: 0,
    max: 20,
    step: 2,
    points: [
      { x: 7, label: '元の数7' },
      { x: 14, label: '2倍して14' },
      { x: 17, label: '+3して17' },
    ],
    segments: [
      { from: 7, to: 14 },
      { from: 14, to: 17 },
    ],
    caption: '7を2倍して14、さらに3を足して17。逆にたどるときは17－3＝14、14÷2＝7の順で戻す',
  },

  // ===== sansu_s400 還元算③（複数人でのやりとりを逆にたどる） =====
  lf_sansu_ext11_400: {
    kind: 'barChart',
    yLabel: '所持金（円）',
    bars: [
      { label: 'A(はじめ)', value: 550 },
      { label: 'B(はじめ)', value: 350 },
      { label: 'C(はじめ)', value: 300 },
      { label: '3人とも(最後)', value: 400, color: '#0EA5E9' },
    ],
    caption: '合計1,200円は最後まで変わらない。最後の(400,400,400)から1歩ずつ逆算すると、はじめは(550,350,300)',
  },

  // ===== sansu_s403 過不足算の基礎 =====
  lf_sansu_ext11_403: {
    kind: 'numberLine',
    min: 30,
    max: 45,
    step: 5,
    points: [
      { x: 35, label: '5個×7人' },
      { x: 38, label: '実際のあめ38個' },
      { x: 42, label: '6個×7人' },
    ],
    segments: [
      { from: 35, to: 38 },
      { from: 38, to: 42 },
    ],
    caption: '5個ずつでは38－35＝3個あまり、6個ずつでは42－38＝4個不足する（差の合計7÷1人あたりの差1＝7人）',
  },

  // ===== sansu_s405 分配算の基礎 =====
  lf_sansu_ext11_405: {
    kind: 'barChart',
    yLabel: '金額（円）',
    bars: [
      { label: '妹①', value: 450 },
      { label: '姉②＋150円', value: 1050 },
    ],
    caption: '妹を①とすると姉は②＋150円。合計は③＋150円＝1,500円なので③＝1,350円、①＝450円',
  },

  // ===== sansu_s406 過不足算と分配算の複合問題 =====
  lf_sansu_ext11_406: {
    kind: 'numberLine',
    min: 3800,
    max: 5800,
    step: 200,
    points: [
      { x: 4000, label: '500円×8人' },
      { x: 5400, label: '総額5,400円' },
      { x: 5600, label: '700円×8人' },
    ],
    segments: [
      { from: 4000, to: 5400 },
      { from: 5400, to: 5600 },
    ],
    caption: '500円ずつでは5,400－4,000＝1,400円あまり、700円ずつでは5,600－5,400＝200円不足（差の合計1,600÷1人あたりの差200＝8人）',
  },

  // ===== sansu_s408 水そう・水量の文章題 =====
  lf_sansu_ext11_408: {
    kind: 'lineChart',
    xLabel: '時間（分）',
    yLabel: '水の量（水そう全体＝36）',
    xRange: [0, 36],
    yRange: [0, 36],
    series: [
      { label: 'AとBを同時に使ったとき', points: [{ x: 0, y: 0 }, { x: 36, y: 36 }], markers: true },
    ],
    caption: 'A管は毎分3、B管は毎分2排水するので、差し引き毎分1ずつたまる。36÷1＝36分で満水になる',
  },

  // ===== sansu_s409 貯金・買い物のやりとり算 =====
  lf_sansu_ext11_409: {
    kind: 'lineChart',
    xLabel: '週',
    yLabel: '貯金額（円）',
    xRange: [0, 20],
    yRange: [0, 10000],
    series: [
      { label: '太郎（4,000円＋毎週300円）', points: [{ x: 0, y: 4000 }, { x: 20, y: 10000 }] },
      { label: '次郎（0円＋毎週500円）', points: [{ x: 0, y: 0 }, { x: 20, y: 10000 }] },
    ],
    caption: '2本の直線の交点（20週後、10,000円）で次郎が太郎に追いつく',
  },

  // ===== sansu_s410 個数と代金のつるかめ算応用（3種類以上） =====
  lf_sansu_ext11_410: {
    kind: 'barChart',
    yLabel: '個数',
    bars: [
      { label: '60円', value: 5 },
      { label: '90円', value: 15 },
      { label: '150円', value: 5 },
    ],
    caption: '150円を5個(750円)先に除いた残り20個・1,650円を、60円と90円のつるかめ算で解く：全部60円なら1,200円、差450円÷差30円＝15個が90円',
  },

  // ===== sansu_s411 平均算の応用 =====
  lf_sansu_ext11_411: {
    kind: 'barChart',
    yLabel: '合計点',
    bars: [
      { label: '国算理(3科・平均78)', value: 234 },
      { label: '社英(2科・平均85)', value: 170 },
      { label: '5科合計', value: 404, color: '#0EA5E9' },
    ],
    caption: '234＋170＝404点、404÷5＝80.8点が5教科の平均点',
  },

  // ===== sansu_s413 割合と文章題の複合（値上げ・値下げ） =====
  lf_sansu_ext11_413: {
    kind: 'barChart',
    yLabel: '金額（円）',
    bars: [
      { label: '原価2,000円', value: 2000 },
      { label: '定価(3割増)2,600円', value: 2600 },
      { label: '売価(2割引)2,080円', value: 2080 },
    ],
    caption: '定価＝2,000×1.3＝2,600円、売価＝2,600×0.8＝2,080円。利益＝2,080－2,000＝80円',
  },

  // ===== sansu_s417 順位を当てる問題 =====
  lf_sansu_ext11_417: {
    kind: 'numberLine',
    min: 1,
    max: 5,
    step: 1,
    points: [
      { x: 1, label: '1位A' },
      { x: 2, label: '2位E' },
      { x: 3, label: '3位C' },
      { x: 4, label: '4位D' },
      { x: 5, label: '5位B' },
    ],
    caption: 'A＜E＜C＜Dの鎖状の順序が確定し、「Dは最下位ではない」ためBが最後尾に入る',
  },

  // ===== sansu_s422 入試実戦①（速さ×割合の複合） =====
  lf_sansu_ext11_422: {
    kind: 'lineChart',
    xLabel: '時間（分）',
    yLabel: '進んだ距離（m）',
    xRange: [0, 24],
    yRange: [0, 1440],
    series: [
      { label: '予定(分速60m)', points: [{ x: 0, y: 0 }, { x: 24, y: 1440 }] },
      { label: '実際(分速72m)', points: [{ x: 0, y: 0 }, { x: 20, y: 1440 }] },
    ],
    caption: '同じ1,440mの道のりを、予定より4分早い20分で着いた。実際の速さは60×1.2＝72m/分',
  },

  // ===== sansu_s423 入試実戦②（食塩水×つるかめ算の複合） =====
  lf_sansu_ext11_423: {
    kind: 'barChart',
    yLabel: '食塩の重さ（g）',
    bars: [
      { label: '10%×200g', value: 20 },
      { label: '4%×100g', value: 4 },
      { label: '混合300g(8%)', value: 24, color: '#0EA5E9' },
    ],
    caption: '食塩の量で式を立てる：0.10x＋0.04(300－x)＝24 → x＝200g',
  },

  // ===== sansu_s424 入試実戦③（線分図×還元算の複合） =====
  lf_sansu_ext11_424: {
    kind: 'coordinate',
    xRange: [-100, 2500],
    yRange: [-1, 3],
    segments: [
      [{ x: 0, y: 2 }, { x: 2400, y: 2 }],
      [{ x: 0, y: 1 }, { x: 1200, y: 1 }],
      [{ x: 0, y: 0 }, { x: 800, y: 0 }],
    ],
    points: [
      { x: 2400, y: 2, label: '最初2,400円' },
      { x: 1200, y: 1, label: '本を買った後1,200円' },
      { x: 800, y: 0, label: '文房具を買った後800円' },
    ],
    caption: '2,400円→半分使って1,200円→残りの1/3を使って800円。逆算：800÷(2/3)＝1,200、1,200÷(1/2)＝2,400',
  },
};
