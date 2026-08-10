import type { Figure } from './figures';

// 中学受験 英語「語彙・熟語・会話表現（英検5級〜3級）」拡張ユニット（eigo_s341〜eigo_s385）の教科書用図解。
// キーは lessons-eigo-ext10.ts の figureId と対応（45課中21課）。
// 語彙の教科なので、「位置関係」「時間の幅」「分類の割合」「語順」「向き」など、
// 図にすることで日本語との差がはっきり見える箇所にだけ付けてある。
export const lessonFigsEigoExt10: Record<string, Figure> = {
  // s341：家系図。英語の brother / sister が世代の同じ横一列にまとめられることを示す
  lf_eigoext10_341: {
    kind: 'coordinate',
    xRange: [-4, 4],
    yRange: [0, 4],
    points: [
      { x: -1.5, y: 3, label: 'grandfather' },
      { x: 1.5, y: 3, label: 'grandmother' },
      { x: -3, y: 2, label: 'uncle' },
      { x: -1, y: 2, label: 'father' },
      { x: 1, y: 2, label: 'mother' },
      { x: 3, y: 2, label: 'aunt' },
      { x: -3, y: 1, label: 'cousin' },
      { x: -1, y: 1, label: 'brother' },
      { x: 0, y: 1, label: 'I' },
      { x: 1, y: 1, label: 'sister' },
    ],
    segments: [
      [
        { x: -1.5, y: 3 },
        { x: 1.5, y: 3 },
      ],
      [
        { x: 0, y: 3 },
        { x: 0, y: 2.2 },
      ],
      [
        { x: -1, y: 2 },
        { x: 1, y: 2 },
      ],
      [
        { x: 0, y: 2 },
        { x: 0, y: 1.2 },
      ],
      [
        { x: -1, y: 1 },
        { x: 1, y: 1 },
      ],
    ],
    caption: '家族を表す語を世代ごとに並べた図。英語の brother・sister は自分と同じ横一列にまとめられ、年上か年下かは区別しない。区別したいときだけ older / younger を付ける',
  },

  // s342：体の部分を人の形の位置に置いて示す
  lf_eigoext10_342: {
    kind: 'coordinate',
    xRange: [-4, 4],
    yRange: [0, 11],
    points: [
      { x: 0, y: 10.4, label: 'head' },
      { x: -0.9, y: 9.9, label: 'eye' },
      { x: 1.2, y: 9.9, label: 'ear' },
      { x: 0, y: 9.3, label: 'mouth' },
      { x: 0, y: 8.4, label: 'neck' },
      { x: -1.8, y: 7.8, label: 'shoulder' },
      { x: -2.6, y: 6.4, label: 'arm' },
      { x: -3, y: 5, label: 'hand' },
      { x: 0, y: 6.5, label: 'stomach' },
      { x: -0.9, y: 3.5, label: 'knee' },
      { x: 0.9, y: 3.5, label: 'leg' },
      { x: 0.9, y: 1, label: 'foot' },
    ],
    caption: '体の部分を表す語の位置。日本語の「あし」は、ももからくるぶしまでが leg、くるぶしから先が foot と二つに分かれる。tooth → teeth、foot → feet は不規則な複数形',
  },

  // s344：食べ物の語を「数えられる／数えられない」で分類した割合
  lf_eigoext10_344: {
    kind: 'pieChart',
    slices: [
      { label: '数えられる', value: 45, color: '#0EA5E9' },
      { label: '数えられない', value: 40, color: '#0369A1' },
      { label: '両方あり', value: 15, color: '#16A34A' },
    ],
    caption: '食べ物を表す語の分類。apple・egg など形のはっきりしたものは数えられ、water・bread・rice など材料や液体は数えられない。chicken（とり肉／にわとり）のように両方の使い方を持つ語もある',
  },

  // s345：家の間取り。部屋の名前と位置関係を示す
  lf_eigoext10_345: {
    kind: 'coordinate',
    xRange: [0, 10],
    yRange: [0, 8],
    polygon: [
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 10, y: 7 },
      { x: 0, y: 7 },
    ],
    segments: [
      [
        { x: 5, y: 0 },
        { x: 5, y: 7 },
      ],
      [
        { x: 0, y: 3.5 },
        { x: 10, y: 3.5 },
      ],
    ],
    points: [
      { x: 2.5, y: 5.2, label: 'kitchen' },
      { x: 7.5, y: 5.2, label: 'living room' },
      { x: 2.5, y: 1.7, label: 'bathroom' },
      { x: 7.5, y: 1.7, label: 'bedroom' },
    ],
    caption: '家の中の部屋を表す語。位置を説明するには in（部屋の中に）・next to（となりに）・between A and B（AとBの間に）を使う。「〜がある」は There is / There are で始める',
  },

  // s348：一年の学校行事を月の数直線に置く
  lf_eigoext10_348: {
    kind: 'numberLine',
    min: 1,
    max: 12,
    step: 1,
    points: [
      { x: 4, label: 'entrance ceremony' },
      { x: 7, label: 'summer vacation' },
      { x: 10, label: 'sports day' },
      { x: 11, label: 'school festival' },
      { x: 3, label: 'graduation ceremony' },
    ],
    caption: '学校行事と月の対応（数字は月）。行事の時期を言うときは in April のように月には in、on April 8 のように日付には on を使う',
  },

  // s352：月ごとの雨の日数。天気を話題にする練習と barChart の読み取り
  lf_eigoext10_352: {
    kind: 'barChart',
    xLabel: '月',
    yLabel: '雨の日数',
    yMax: 20,
    bars: [
      { label: 'Jan.', value: 5, color: '#0EA5E9' },
      { label: 'Apr.', value: 9, color: '#0EA5E9' },
      { label: 'Jun.', value: 16, color: '#0369A1' },
      { label: 'Aug.', value: 11, color: '#0369A1' },
      { label: 'Oct.', value: 10, color: '#16A34A' },
      { label: 'Dec.', value: 4, color: '#16A34A' },
    ],
    caption: '日本のある都市の月ごとの雨の日数（例）。6月は梅雨（the rainy season）で最も多い。「6月は雨が多い」は We have a lot of rain in June. または It rains a lot in June. と表す',
  },

  // s353：四季と月の対応
  lf_eigoext10_353: {
    kind: 'numberLine',
    min: 1,
    max: 12,
    step: 1,
    points: [
      { x: 4, label: 'spring' },
      { x: 7, label: 'summer' },
      { x: 10, label: 'fall / autumn' },
      { x: 1, label: 'winter' },
    ],
    caption: '四季と月の対応（数字は月）。春は3〜5月、夏は6〜8月、秋は9〜11月、冬は12〜2月とするのがふつう。季節の前には in を使う（in spring）。秋は fall（アメリカ英語）と autumn（イギリス英語）の両方が正しい',
  },

  // s355：序数を数直線に置き、つづりが変わるものを目立たせる
  lf_eigoext10_355: {
    kind: 'numberLine',
    min: 1,
    max: 12,
    step: 1,
    points: [
      { x: 1, label: 'first' },
      { x: 2, label: 'second' },
      { x: 3, label: 'third' },
      { x: 5, label: 'fifth' },
      { x: 8, label: 'eighth' },
      { x: 9, label: 'ninth' },
      { x: 12, label: 'twelfth' },
    ],
    caption: '序数のうち、つづりに注意が必要なもの。first・second・third は特別な形、fifth（ve→f）・ninth（e が消える）・twelfth（ve→f）・eighth（t を重ねない）は形が変わる。ほかは -th を付けるだけ',
  },

  // s356：一週間を円に見立て、曜日の並びを示す
  lf_eigoext10_356: {
    kind: 'circle',
    showCenter: false,
    points: [
      { angle: 90, label: 'Sunday' },
      { angle: 38, label: 'Monday' },
      { angle: -13, label: 'Tuesday' },
      { angle: -64, label: 'Wednesday' },
      { angle: -116, label: 'Thursday' },
      { angle: -167, label: 'Friday' },
      { angle: 141, label: 'Saturday' },
    ],
    caption: '一週間の曜日の並び（時計回り）。英語のカレンダーは日曜日から始まる。曜日の名前は必ず大文字で書き始め、前に on を付ける（on Monday）。Wednesday の発音しない d に注意',
  },

  // s358：時計に見立てた円で past と to の境目を示す
  lf_eigoext10_358: {
    kind: 'circle',
    showCenter: true,
    points: [
      { angle: 90, label: "o'clock" },
      { angle: 30, label: 'ten past' },
      { angle: 0, label: 'a quarter past' },
      { angle: -90, label: 'half past' },
      { angle: 180, label: 'a quarter to' },
      { angle: 150, label: 'ten to' },
    ],
    caption: '時計の文字ばんで見る時刻の言い方。右半分（0〜30分）は past（〜時を過ぎ）、左半分（30〜60分）は to（次の〜時まであと）を使う。to のときは後ろに「次の時刻」を置くので、7:50 は ten to eight となる',
  },

  // s360：図形の名前を四角形の図で示す
  lf_eigoext10_360: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 10, y: 6 },
      { x: 0, y: 6 },
    ],
    sideLabels: ['long side', 'short side', 'long side', 'short side'],
    fill: true,
    rightAngles: [0, 1, 2, 3],
    caption: '4つの角がすべて直角で、たてと横の長さがちがう四角形が rectangle（長方形）。すべての辺が同じ長さなら square（正方形）。ほかに circle（円）・triangle（三角形）・oval（だ円）がある',
  },

  // s361：数量を表す語の「多い⇔少ない」の度合い
  lf_eigoext10_361: {
    kind: 'barChart',
    yLabel: '量・数の多さ',
    yMax: 100,
    bars: [
      { label: 'a lot of', value: 90, color: '#0EA5E9' },
      { label: 'many / much', value: 80, color: '#0EA5E9' },
      { label: 'some', value: 50, color: '#0369A1' },
      { label: 'a few / a little', value: 25, color: '#16A34A' },
      { label: 'few / little', value: 8, color: '#F59E0B' },
      { label: 'no / not any', value: 0, color: '#DC2626' },
    ],
    caption: '数量を表す語の度合い。a few / a little は「少しはある」、a のない few / little は「ほとんどない」で意味が正反対になる。数えられる名詞には many・a few・few、数えられない名詞には much・a little・little を使う',
  },

  // s363：町の地図。建物の位置関係を表す語を確認する
  lf_eigoext10_363: {
    kind: 'coordinate',
    xRange: [0, 10],
    yRange: [0, 8],
    segments: [
      [
        { x: 0, y: 4 },
        { x: 10, y: 4 },
      ],
      [
        { x: 5, y: 0 },
        { x: 5, y: 8 },
      ],
    ],
    points: [
      { x: 2, y: 6, label: 'station' },
      { x: 7.5, y: 6, label: 'bank' },
      { x: 2, y: 2, label: 'library' },
      { x: 7.5, y: 2, label: 'post office' },
      { x: 5, y: 4, label: 'corner' },
    ],
    caption: '町の地図で使う位置の表し方。図書館は駅の向かい（across from the station）、郵便局は銀行の下＝道をはさんだ向かい。二つの建物の間なら between A and B、となりなら next to を使う',
  },

  // s371：come と go の向き。話し手を基準に方向が決まる
  lf_eigoext10_371: {
    kind: 'coordinate',
    xRange: [-6, 6],
    yRange: [-1, 4],
    points: [
      { x: -4, y: 1, label: 'you (相手)' },
      { x: 0, y: 1, label: 'I (話し手)' },
      { x: 4, y: 1, label: 'other place' },
    ],
    segments: [
      [
        { x: 0.6, y: 2 },
        { x: 3.4, y: 2 },
      ],
      [
        { x: -0.6, y: 0 },
        { x: -3.4, y: 0 },
      ],
    ],
    caption: 'come と go の向き。上の矢印のように話し手から遠ざかるのが go、下のように相手や話し手のいるほうへ近づくのが come。呼ばれて相手のところへ行くときは、日本語が「行く」でも I am coming. と言う。bring / take も同じ向きで決まる',
  },

  // s373：場所を表す前置詞の位置関係
  lf_eigoext10_373: {
    kind: 'coordinate',
    xRange: [-6, 6],
    yRange: [-3, 6],
    polygon: [
      { x: -2, y: 0 },
      { x: 2, y: 0 },
      { x: 2, y: 3 },
      { x: -2, y: 3 },
    ],
    points: [
      { x: 0, y: 1.5, label: 'in the box' },
      { x: 0, y: 3.8, label: 'on the box' },
      { x: 0, y: -1.5, label: 'under the box' },
      { x: -4, y: 1.5, label: 'by / near' },
      { x: 4, y: 1.5, label: 'next to' },
      { x: 0, y: 5.3, label: 'over / above' },
    ],
    caption: '箱を中心にした場所の前置詞。in は囲まれた中、on は面に接している状態（かべの絵も on the wall）、under は真下、over / above は接していない上方、by / near / next to はそば。at は「駅で」のように場所を一点として見るときに使う',
  },

  // s374：時を表す前置詞の「幅」
  lf_eigoext10_374: {
    kind: 'numberLine',
    min: 0,
    max: 10,
    step: 1,
    segments: [
      { from: 0, to: 8 },
      { from: 3, to: 5 },
    ],
    points: [
      { x: 4, label: 'in 2026 / in May（広い）' },
      { x: 9, label: 'at seven（一点）' },
    ],
    caption: '時を表す前置詞は時間の幅で決まる。いちばん長い帯が in（年・月・季節・午前午後）、短い帯が on（日付・曜日）、点が at（時刻）。in → on → at と幅がせまくなる。night だけは at night と at を使う',
  },

  // s376：時間帯とあいさつの対応（0〜24時）
  lf_eigoext10_376: {
    kind: 'numberLine',
    min: 0,
    max: 24,
    step: 2,
    points: [
      { x: 8, label: 'Good morning.' },
      { x: 14, label: 'Good afternoon.' },
      { x: 19, label: 'Good evening.' },
      { x: 23, label: 'Good night.（別れ）' },
    ],
    caption: '一日の時間帯とあいさつ（数字は時刻）。朝〜正午が Good morning.、正午〜夕方が Good afternoon.、夕方以降に会ったときが Good evening.。Good night. は「おやすみなさい」で、会ったときではなく別れるときに使う',
  },

  // s380：道案内の地図。序数と right / left の読み取り
  lf_eigoext10_380: {
    kind: 'coordinate',
    xRange: [0, 10],
    yRange: [0, 10],
    segments: [
      [
        { x: 5, y: 0 },
        { x: 5, y: 10 },
      ],
      [
        { x: 0, y: 3 },
        { x: 10, y: 3 },
      ],
      [
        { x: 0, y: 7 },
        { x: 10, y: 7 },
      ],
    ],
    points: [
      { x: 5, y: 0.5, label: 'You are here.' },
      { x: 5, y: 3, label: 'first corner' },
      { x: 5, y: 7, label: 'second corner' },
      { x: 8, y: 8, label: 'library' },
      { x: 2, y: 8, label: 'park' },
    ],
    caption: '道案内の地図。出発点から上へ進むとき、1つ目の交差点が the first corner、2つ目が the second corner。Go straight and turn right at the second corner. You will see the library on your left. のように、序数と right / left で場所が決まる',
  },

  // s382：see / look at / watch を「意識の強さ」×「対象が動くか」で配置
  lf_eigoext10_382: {
    kind: 'coordinate',
    xRange: [0, 10],
    yRange: [0, 10],
    points: [
      { x: 2, y: 2, label: 'see（目に入る）' },
      { x: 7, y: 3, label: 'look at（視線を向ける）' },
      { x: 8.5, y: 8.5, label: 'watch（動きを追う）' },
    ],
    caption: '「見る」の三つの動詞を、横じくに意識の強さ（右ほど意識して見る）、たてじくに対象の動き（上ほど動くもの）で配置した図。自然に目に入るのが see、止まっているものへ視線を向けるのが look at、動くものを見続けるのが watch',
  },

  // s384：say と tell の語順ボックス
  lf_eigoext10_384: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 12, y: 0 },
      { x: 12, y: 4 },
      { x: 0, y: 4 },
    ],
    sideLabels: ['tell ＋ 人 ＋ 内容', 'say は人を直接置けない', 'say ＋ 内容（人は to ＋ 人）', 'talk with 人 / about 話題'],
    fill: true,
    caption: '「言う・話す」の四つの動詞の語順。say の後ろには内容だけを置き、人を入れるときは said to me とする。tell は tell me the story のように「人→内容」の順。speak は言語（speak English）、talk は会話（talk with Ken / talk about it）に使う',
  },

  // s385：borrow / lend と bring / take の向き
  lf_eigoext10_385: {
    kind: 'coordinate',
    xRange: [-6, 6],
    yRange: [-2, 5],
    points: [
      { x: -4, y: 1.5, label: 'the other person' },
      { x: 4, y: 1.5, label: 'me' },
    ],
    segments: [
      [
        { x: -3, y: 3 },
        { x: 3, y: 3 },
      ],
      [
        { x: 3, y: 0 },
        { x: -3, y: 0 },
      ],
    ],
    caption: 'ものが動く向きで決まる動詞。上の矢印のように相手から自分へ来るのが borrow（借りる）と bring（持ってくる）、下のように自分から相手・他の場所へ出ていくのが lend（貸す）と take（持っていく）。相手のいる場所へ向かうときは bring を使う',
  },
};
