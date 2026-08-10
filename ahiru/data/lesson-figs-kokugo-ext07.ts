import type { Figure } from './figures';

// 中学受験国語 拡張ユニットVII「物語文の読解」（kokugo_s226〜s270）専用の図解データ。
// lessons-kokugo-ext07.ts の各Lessonのsections[].figureIdから参照される。
// 数直線は「時間の流れに沿って心情がどう動いたか」を可視化するために使い、
// 折れ線グラフは心情の上下（プラス／マイナス）の動きを示すために使う。
// 図中の例文はすべて lessons-kokugo-ext07.ts と同じ自作の例文に対応している。
export const lessonFigsKokugoExt07: Record<string, Figure> = {
  // ============ 1. 場面と情景をつかむ ============
  // s227: 場面の切れ目（放課後の教室→真希が来る→翌朝の職員室前）
  k7f_s227: {
    kind: 'numberLine',
    min: 0,
    max: 4,
    step: 1,
    points: [
      { x: 1, label: '①教室に一人' },
      { x: 2, label: '②真希が来る' },
      { x: 3, label: '③翌朝の職員室' },
    ],
    caption: '時が動く・場所が変わる・人物が出入りする、の三つが場面の切れ目。ここでは切れ目が二か所あり、場面は三つに分かれる',
  },

  // ============ 3. 心情を読み取る技術 ============
  // s237: 心情語のプラス・マイナス（強さの目盛り）
  k7f_s237: {
    kind: 'numberLine',
    min: -2,
    max: 2,
    step: 1,
    points: [
      { x: -2, label: 'かなしみ' },
      { x: -1, label: 'ふあん' },
      { x: 0, label: 'ふつう' },
      { x: 1, label: 'あんしん' },
      { x: 2, label: 'よろこび' },
    ],
    caption: '心情はまずプラスかマイナスかを決め、それから強さと種類をしぼる。0より左がマイナス、右がプラス',
  },

  // s239: 同じ動作のくり返し（入学式→卒業式）
  k7f_s239: {
    kind: 'numberLine',
    min: 0,
    max: 4,
    step: 1,
    points: [
      { x: 1, label: '入学式・よけた' },
      { x: 3, label: '卒業式・動かず' },
    ],
    caption: '母が「えりを直す」という同じ動作が二度。ちがうのは「ぼく」の反応で、そのちがいが心情の変化を表す',
  },

  // s242: 同じ坂道の見え方の変化（情景と心情の呼応）
  k7f_s242: {
    kind: 'lineChart',
    xLabel: '場面の流れ（①行き　②話し合い　③帰り）',
    yLabel: '心情',
    xRange: [0, 4],
    yRange: [-3, 3],
    series: [
      {
        label: '坂道の見え方',
        markers: true,
        points: [
          { x: 1, y: -2 },
          { x: 2, y: -1 },
          { x: 3, y: 1 },
        ],
      },
    ],
    caption: '坂道は何も変わっていない。「長い・冷たい」から「温かい」へ変わったのは主人公の心のほう',
  },

  // s244: 根拠を積み上げて心情を確定させる
  k7f_s244: {
    kind: 'numberLine',
    min: 0,
    max: 5,
    step: 1,
    points: [
      { x: 1, label: '根拠①' },
      { x: 2, label: '根拠②' },
      { x: 3, label: '根拠③' },
      { x: 4, label: '根拠④' },
    ],
    caption: '根拠①手をあげない②昨日までは先頭③同じ楽器の陸④ケースをいじる。四つそろって「自信のなさ」と決まる',
  },

  // ============ 4. 心情の変化ときっかけ ============
  // s245: 前→きっかけ→後
  k7f_s245: {
    kind: 'numberLine',
    min: 0,
    max: 4,
    step: 1,
    points: [
      { x: 1, label: '①心細い' },
      { x: 2, label: '②話しかけ' },
      { x: 3, label: '③打ちとけ' },
    ],
    caption: '変化の設問は【変化前】【きっかけ】【変化後】の三つの箱に分けて書き出す',
  },

  // s246: きっかけと変化の距離（昼のひとこと→夜の気づき）
  k7f_s246: {
    kind: 'numberLine',
    min: 0,
    max: 4,
    step: 1,
    points: [
      { x: 1, label: '昼・ひとこと' },
      { x: 2, label: '帰宅' },
      { x: 3, label: '夜・気づく' },
    ],
    caption: 'きっかけ（昼のひとこと）と心情が変わった時点（夜）は離れていることがある。心情の中身とつながるほうがきっかけ',
  },

  // s247: 二段・三段の変化（喜び→うしろめたさ→素直な喜び）
  k7f_s247: {
    kind: 'lineChart',
    xLabel: '場面（①選ばれた　②千秋の言葉　③帰り道）',
    yLabel: '心情',
    xRange: [0, 4],
    yRange: [-3, 3],
    series: [
      {
        label: '「わたし」の心情',
        markers: true,
        points: [
          { x: 1, y: 2 },
          { x: 2, y: -1 },
          { x: 3, y: 2 },
        ],
      },
    ],
    caption: '同じ「喜び」でも①は自分が選ばれた喜び、③は相手の気持ちを知ったうえでの喜びで中身がちがう',
  },

  // s248: 一気に変わる型とじわじわ変わる型
  k7f_s248: {
    kind: 'lineChart',
    xLabel: '時間の流れ',
    yLabel: '心情',
    xRange: [0, 4],
    yRange: [-3, 3],
    series: [
      {
        label: '一気型',
        markers: true,
        points: [
          { x: 1, y: -2 },
          { x: 2, y: -2 },
          { x: 3, y: 2 },
        ],
      },
      {
        label: 'じわじわ型',
        dashed: true,
        markers: true,
        points: [
          { x: 1, y: -2 },
          { x: 2, y: -1 },
          { x: 3, y: 1 },
        ],
      },
    ],
    caption: '一気型は「〜をきっかけに」、じわじわ型は「〜をくり返すうちに」と書き分ける',
  },

  // s249: 表面の言動と本当の心情のずれ
  k7f_s249: {
    kind: 'numberLine',
    min: -3,
    max: 3,
    step: 1,
    points: [
      { x: 0, label: '口では平気' },
      { x: 2, label: '本心は喜び' },
    ],
    caption: '「別にほしくなかった」という言葉と、その場を離れない足・軽くなった足取りのずれ。体に近いほうが本心',
  },

  // s250: 記述の三要素の配分
  k7f_s250: {
    kind: 'numberLine',
    min: 0,
    max: 4,
    step: 1,
    points: [
      { x: 1, label: '変化前' },
      { x: 2, label: 'きっかけ' },
      { x: 3, label: '変化後' },
    ],
    caption: '字数が少ないときに削るのは【変化前】。配点の高い【きっかけ】は最優先で書く',
  },

  // s251: 変わったのはだれか（父の行動／ぼくの心）
  k7f_s251: {
    kind: 'lineChart',
    xLabel: '試合の前（1）と当日（2）',
    yLabel: '変化の大きさ',
    xRange: [0, 3],
    yRange: [0, 3],
    series: [
      {
        label: '父の行動',
        markers: true,
        points: [
          { x: 1, y: 0 },
          { x: 2, y: 2 },
        ],
      },
      {
        label: 'ぼくの心',
        dashed: true,
        markers: true,
        points: [
          { x: 1, y: 0 },
          { x: 2, y: 1 },
        ],
      },
    ],
    caption: '行動を変えたのは父（来なかった→見に来た）。「ぼく」は態度こそ変えていないが、心には小さな変化が起きている',
  },

  // ============ 5. 主題をつかむ ============
  // s252: 主題は心情の変化の行き着く先
  k7f_s252: {
    kind: 'numberLine',
    min: 0,
    max: 4,
    step: 1,
    points: [
      { x: 1, label: '①自信がない' },
      { x: 2, label: '②人に届いた' },
      { x: 3, label: '③続ける' },
    ],
    caption: '主題は変化の行き着いた先（③）にある。「結果ではなく、届いたことが続ける力になる」が主題',
  },

  // s255: くり返し出てくる物（方位磁針）の見え方の変化
  k7f_s255: {
    kind: 'numberLine',
    min: 0,
    max: 4,
    step: 1,
    points: [
      { x: 1, label: 'ずれた道具' },
      { x: 2, label: '心の支え' },
      { x: 3, label: '自分で決める' },
    ],
    caption: '同じ方位磁針が三度登場し、そのたびに見え方が変わる。この変化が主題を運んでいる',
  },

  // ============ 7. 選択肢問題の解き方 ============
  // s263: 選択肢を消す手順
  k7f_s263: {
    kind: 'numberLine',
    min: 0,
    max: 4,
    step: 1,
    points: [
      { x: 1, label: '自分の答え' },
      { x: 2, label: 'ずれを消す' },
      { x: 3, label: '残りを照合' },
    ],
    caption: '選択肢を読む前に自分なりの答えを一言で作る。それから、合わない部分に線を引いて消していく',
  },

  // s266: 選択肢の三か所チェック
  k7f_s266: {
    kind: 'numberLine',
    min: 0,
    max: 4,
    step: 1,
    points: [
      { x: 1, label: 'きっかけ' },
      { x: 2, label: '心情' },
      { x: 3, label: 'その後' },
    ],
    caption: '選択肢は【きっかけ】【心情】【その後の行動】の三か所を一つずつ本文と照らす。一つでも合わなければ消す',
  },
};
