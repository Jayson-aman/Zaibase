import type { Figure } from './figures';

// 中学受験 国語「漢字の読み書き」拡張ユニット（kokugo_s001〜kokugo_s040）の教科書用図解。
// キーは lessons-kokugo-ext01.ts の figureId と対応。
// 国語は図解が馴染みにくい教科なので、「位置関係」「分類の割合」「時期」「数値」など
// 図にすることで本当に理解が進む箇所にだけ付けてある（40課中8課）。
export const lessonFigsKokugoExt01: Record<string, Figure> = {
  // s006：部首の位置（へん・かんむり・つくり・あし）を漢字一字の枠に見立てて示す
  lf_kokugoext01_006: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 10, y: 10 },
      { x: 0, y: 10 },
    ],
    sideLabels: ['あし(下)', 'つくり(右)', 'かんむり(上)', 'へん(左)'],
    fill: true,
    caption: '漢字一字を四角の枠に見立てた図。左＝へん、右＝つくり、上＝かんむり、下＝あし。残る三つ（たれ・にょう・かまえ）は枠の二辺以上にまたがる',
  },

  // s008：にょう（辶など）は「左から下へ」L字形に回りこむ、という形の特徴
  lf_kokugoext01_008: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 10, y: 3 },
      { x: 3, y: 3 },
      { x: 3, y: 10 },
      { x: 0, y: 10 },
    ],
    fill: true,
    caption: 'にょう（辶・廴・走）が占める位置。左側から始まって下側まで回りこむL字形になる。上だけの「かんむり」、上から左下までの「たれ」との形のちがいに注目する',
  },

  // s009：漢字の成り立ちの割合（形声文字が大多数）
  lf_kokugoext01_009: {
    kind: 'pieChart',
    slices: [
      { label: '形声', value: 80, color: '#0EA5E9' },
      { label: '会意', value: 12, color: '#0369A1' },
      { label: '象形', value: 6, color: '#16A34A' },
      { label: '指事', value: 2, color: '#F59E0B' },
    ],
    caption: '漢字の成り立ちのおおよその割合。形声文字が約8割を占めるので、知らない漢字の読みは音を表す部分（つくり）から推測できることが多い',
  },

  // s012：「対称」＝つりあった形。左右対称の図形で語の意味そのものを示す
  lf_kokugoext01_012: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 8, y: 0 },
      { x: 4, y: 7 },
    ],
    equalSides: [[1, 2]],
    fill: true,
    caption: '「対称」は左右がつりあった形のこと（算数の線対称と同じ）。「対象＝はたらきかける相手」「対照＝比べてちがいが際立つこと」とは別の語',
  },

  // s027：日付の特別な読み（熟字訓）を1日〜20日の数直線上に置く
  lf_kokugoext01_027: {
    kind: 'numberLine',
    min: 1,
    max: 20,
    step: 1,
    points: [
      { x: 1, label: 'ついたち' },
      { x: 4, label: 'よっか' },
      { x: 8, label: 'ようか' },
      { x: 14, label: 'じゅうよっか' },
      { x: 20, label: 'はつか' },
    ],
    caption: '日付の特別な読み。とくに「四日（よっか）」と「八日（ようか）」、「二十日（はつか）」はまちがえやすい',
  },

  // s028：旧暦の月の異名（十二か月のうち代表的なものを数直線に置く）
  lf_kokugoext01_028: {
    kind: 'numberLine',
    min: 1,
    max: 12,
    step: 1,
    points: [
      { x: 1, label: '睦月' },
      { x: 3, label: '弥生' },
      { x: 6, label: '水無月' },
      { x: 9, label: '長月' },
      { x: 12, label: '師走' },
    ],
    caption: '旧暦の月の異名（代表例）。旧暦は今の暦よりおよそ一か月おそいので、旧暦五月の「五月雨」は今の六月ごろの長雨（梅雨）を指す',
  },

  // s035：まちがえやすい漢字の総画数
  lf_kokugoext01_035: {
    kind: 'barChart',
    yLabel: '画数',
    yMax: 14,
    bars: [
      { label: '必', value: 5, color: '#0EA5E9' },
      { label: '右', value: 5, color: '#0EA5E9' },
      { label: '成', value: 6, color: '#0369A1' },
      { label: '飛', value: 9, color: '#0369A1' },
      { label: '無', value: 12, color: '#16A34A' },
    ],
    caption: '数えまちがえやすい漢字の総画数。「無」の下の灬（れっか）は4画、しんにょう・くさかんむりは3画で数える',
  },

  // s039：学年別漢字配当表の字数（合計1026字）
  lf_kokugoext01_039: {
    kind: 'barChart',
    xLabel: '学年',
    yLabel: '字数',
    yMax: 220,
    bars: [
      { label: '1年', value: 80, color: '#0EA5E9' },
      { label: '2年', value: 160, color: '#0EA5E9' },
      { label: '3年', value: 200, color: '#0369A1' },
      { label: '4年', value: 202, color: '#0369A1' },
      { label: '5年', value: 193, color: '#16A34A' },
      { label: '6年', value: 191, color: '#16A34A' },
    ],
    caption: '学年別漢字配当表の字数。合計1026字で、これが中学入試の書き取りの中心範囲（常用漢字は全部で2136字）',
  },
};
