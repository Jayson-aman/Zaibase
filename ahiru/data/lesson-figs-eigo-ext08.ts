import type { Figure } from './figures';

// 中学受験 英語「前置詞・接続詞」拡張ユニット（eigo_s261〜eigo_s295）の教科書用図解。
// キーは lessons-eigo-ext08.ts の figureId と対応。
// 前置詞は「位置関係」「時間の幅」がすべてなので、言葉で説明するより図で示したほうが
// 理解が早い箇所（at/on/in の入れ子、under/over/above/below、between/among、
// for と during の幅、until と by、命令文の分岐）にだけ付けてある（35課中16課）。
export const lessonFigsEigoExt08: Record<string, Figure> = {
  // s261：時の at / on / in を、七月のカレンダーを数直線に見立てて幅で比べる
  lf_eigoext08_261: {
    kind: 'numberLine',
    min: 1,
    max: 31,
    step: 5,
    points: [{ x: 15, label: 'at 7:00（時刻＝点）' }],
    segments: [
      { from: 15, to: 16 },
      { from: 1, to: 31 },
    ],
    caption:
      '七月の一か月を数直線にした図。at は時刻という一点（at 7:00）、on は十五日という一日ぶんの幅（on July 15）、in は七月ぜんたいという広い幅（in July）を表す。at ＜ on ＜ in の順に時間の幅が大きくなる',
  },

  // s263：一日二十四時間のどこで in と at が入れかわるか
  lf_eigoext08_263: {
    kind: 'numberLine',
    min: 0,
    max: 24,
    step: 3,
    points: [
      { x: 12, label: 'at noon' },
      { x: 24, label: 'at midnight' },
    ],
    segments: [
      { from: 6, to: 12 },
      { from: 12, to: 18 },
      { from: 18, to: 22 },
    ],
    caption:
      '一日を時刻の数直線で表した図。三本の帯は左から in the morning（朝）・in the afternoon（午後）・in the evening（夕方）で、いずれも the が必要。正午と真夜中は一点なので at noon・at midnight となり、夜は例外的に at night と表す',
  },

  // s265：場所の at（点）・on（接している面）・in（内部）を箱で示す
  lf_eigoext08_265: {
    kind: 'coordinate',
    xRange: [0, 10],
    yRange: [0, 8],
    polygon: [
      { x: 2, y: 1 },
      { x: 7, y: 1 },
      { x: 7, y: 5 },
      { x: 2, y: 5 },
    ],
    points: [
      { x: 4.5, y: 3, label: 'in the box' },
      { x: 4.5, y: 5, label: 'on the box' },
      { x: 8.5, y: 1, label: 'at the door' },
    ],
    caption:
      '場所の前置詞の元のイメージ。in は囲まれた内部、on は面に接しているところ、at は大きさを考えない一点。on は「上」ではなく「接している」が本当の意味なので、かべや天井でも on を使う',
  },

  // s267：on は接触。かべ・ゆか・天井は上下に関係なく on
  lf_eigoext08_267: {
    kind: 'coordinate',
    xRange: [0, 10],
    yRange: [0, 8],
    segments: [
      [
        { x: 1, y: 0 },
        { x: 1, y: 6 },
      ],
      [
        { x: 1, y: 0 },
        { x: 9, y: 0 },
      ],
      [
        { x: 1, y: 6 },
        { x: 9, y: 6 },
      ],
    ],
    points: [
      { x: 1, y: 4, label: 'on the wall' },
      { x: 5, y: 0, label: 'on the floor' },
      { x: 5, y: 6, label: 'on the ceiling' },
      { x: 5, y: 3, label: 'in the room' },
    ],
    caption:
      '部屋を横から見た図。かべ・ゆか・天井はどれも面に接しているので、上下の向きに関係なくすべて on を使う。囲まれた空間の内部にいるときだけ in the room となる',
  },

  // s268：住所は at（番地）→ on（通り）→ in（市）の三重の入れ子
  lf_eigoext08_268: {
    kind: 'coordinate',
    xRange: [0, 10],
    yRange: [0, 7],
    polygon: [
      { x: 0.5, y: 0.5 },
      { x: 9.5, y: 0.5 },
      { x: 9.5, y: 6.5 },
      { x: 0.5, y: 6.5 },
    ],
    segments: [
      [
        { x: 1, y: 3 },
        { x: 9, y: 3 },
      ],
    ],
    points: [
      { x: 5, y: 3, label: 'at 3-2-1（番地）' },
      { x: 8, y: 3.6, label: 'on Main Street（通り）' },
      { x: 2, y: 5.5, label: 'in Osaka（市）' },
    ],
    caption:
      '住所の三重の入れ子。番地は地図上の一点なので at、通りは線なので on、市や国は広がりのある空間なので in。英語の住所はせまい方から広い方へ Umeda, Osaka, Japan の順に並べる（日本語と逆）',
  },

  // s269：under / over / above / below の位置関係
  lf_eigoext08_269: {
    kind: 'coordinate',
    xRange: [0, 10],
    yRange: [0, 8],
    polygon: [
      { x: 3, y: 3 },
      { x: 8, y: 3 },
      { x: 8, y: 4 },
      { x: 3, y: 4 },
    ],
    points: [
      { x: 5.5, y: 1.5, label: 'under（真下）' },
      { x: 5.5, y: 6, label: 'over（真上・おおう）' },
      { x: 1, y: 7, label: 'above（より上）' },
      { x: 1, y: 0.7, label: 'below（より下）' },
    ],
    caption:
      '真ん中の帯を机やへいと考えた図。over と under は真上・真下にあり、おおう／おおわれる関係になる。above と below は真上でなくてよく、ただ高さを比べているだけ。接していれば on、はなれて真上なら over',
  },

  // s270：between（二つの間）と among（三つ以上の中）
  lf_eigoext08_270: {
    kind: 'coordinate',
    xRange: [0, 10],
    yRange: [0, 8],
    points: [
      { x: 1.5, y: 2, label: 'A' },
      { x: 5, y: 2, label: 'between A and B' },
      { x: 8.5, y: 2, label: 'B' },
      { x: 3, y: 6 },
      { x: 5, y: 7 },
      { x: 7, y: 6 },
      { x: 5, y: 5.5, label: 'among（三つ以上の中）' },
    ],
    caption:
      '下の列は二つのものにはさまれた between A and B、上の集まりは三つ以上の中にある among。between は二つ、among は三つ以上と数で使い分ける。どちらも前置詞なので、後ろの代名詞は目的格（between you and me）',
  },

  // s271：in front of / behind / next to の位置関係
  lf_eigoext08_271: {
    kind: 'coordinate',
    xRange: [0, 11],
    yRange: [0, 9],
    polygon: [
      { x: 4, y: 3 },
      { x: 7, y: 3 },
      { x: 7, y: 6 },
      { x: 4, y: 6 },
    ],
    points: [
      { x: 5.5, y: 1.5, label: 'in front of（前）' },
      { x: 5.5, y: 7.5, label: 'behind（後ろ）' },
      { x: 2, y: 4.5, label: 'next to（となり）' },
      { x: 9.5, y: 4.5, label: 'beside（となり）' },
      { x: 5.5, y: 4.5, label: 'in the front of は中の前部' },
    ],
    caption:
      '真ん中の四角を家やバスと考えた図。外側の正面は in front of、後ろは behind、横は next to ＝ beside ＝ by。the が入った in the front of は「そのものの中の前の方」を指すので、外か中かがまるごと入れかわる',
  },

  // s273：絵の描写問題でよく出る位置関係を一枚にまとめたもの
  lf_eigoext08_273: {
    kind: 'coordinate',
    xRange: [0, 11],
    yRange: [0, 9],
    polygon: [
      { x: 3, y: 4 },
      { x: 8, y: 4 },
      { x: 8, y: 4.8 },
      { x: 3, y: 4.8 },
    ],
    points: [
      { x: 5.5, y: 5.6, label: 'a bag on the desk' },
      { x: 5.5, y: 2, label: 'a cat under the desk' },
      { x: 1, y: 7, label: 'a clock on the wall' },
      { x: 9.5, y: 6.5, label: 'a boy by the window' },
    ],
    caption:
      '絵の描写問題の典型的な場面。There is ＋ 単数名詞、There are ＋ 複数名詞のあとに場所を表す語句を置く。前置詞句を重ねるときは近い場所から並べ、in the bag on the desk（机の上のかばんの中に）のように日本語とは逆の順になる',
  },

  // s274：to（到達点）と for（向かう方向）のちがい
  lf_eigoext08_274: {
    kind: 'coordinate',
    xRange: [0, 10],
    yRange: [0, 7],
    segments: [
      [
        { x: 1, y: 1 },
        { x: 9, y: 5 },
      ],
    ],
    points: [
      { x: 1, y: 1, label: '出発地' },
      { x: 5, y: 3, label: 'for Osaka（向かっている）' },
      { x: 9, y: 5, label: 'to Osaka（着いた）' },
    ],
    caption:
      'to は矢印が到達点まで届いていることを表し（go to Osaka）、for は向きだけを表して着いたかどうかは言わない（leave for Osaka）。leave Osaka は「大阪を出る」、leave for Osaka は「大阪へ向かう」と、for 一語で出発地が目的地に変わる',
  },

  // s276：through / across / along / over の進み方のちがい
  lf_eigoext08_276: {
    kind: 'coordinate',
    xRange: [0, 10],
    yRange: [0, 8],
    polygon: [
      { x: 0, y: 3 },
      { x: 10, y: 3 },
      { x: 10, y: 4.5 },
      { x: 0, y: 4.5 },
    ],
    segments: [
      [
        { x: 5, y: 1 },
        { x: 5, y: 6.5 },
      ],
      [
        { x: 0.5, y: 6.5 },
        { x: 9.5, y: 6.5 },
      ],
    ],
    points: [
      { x: 5, y: 1, label: 'across（横切る）' },
      { x: 8.5, y: 7, label: 'along（沿って）' },
      { x: 2, y: 3.7, label: 'through（中を通る）' },
    ],
    caption:
      '帯を川や森と考えた図。中を通り抜けるのが through、横に切って向こう側へわたるのが across、同じ向きにそって進むのが along。上を飛びこえるのが over。日本語ではどれも「〜を」と言うので、矢印の形で覚える',
  },

  // s278：for（長さ）と during（特定の期間の名前）の比較
  lf_eigoext08_278: {
    kind: 'numberLine',
    min: 0,
    max: 10,
    step: 1,
    points: [
      { x: 1.5, label: 'for three hours' },
      { x: 7.5, label: 'during the vacation' },
    ],
    segments: [
      { from: 0, to: 3 },
      { from: 5, to: 10 },
    ],
    caption:
      '左の帯は「三時間」という長さそのもの（for three hours）、右の帯は「夏休み」という名前のついた期間（during the vacation）。後ろに数字が来たら for、the ＋ 行事や季節の名前が来たら during と、後ろの語で決められる',
  },

  // s279：since（起点）と for（長さ）は同じことを別の言い方で表す
  lf_eigoext08_279: {
    kind: 'numberLine',
    min: 2020,
    max: 2026,
    step: 1,
    points: [
      { x: 2020, label: 'since 2020（起点）' },
      { x: 2026, label: 'now' },
    ],
    segments: [{ from: 2020, to: 2026 }],
    caption:
      '現在完了の文で使う since と for。since は始まった一点（since 2020）、for はその一点から今までの長さ（for six years）を表し、同じことを二通りに言える。since が見えたら動詞が have ＋ 過去分詞になっているかを確かめる',
  },

  // s280：until（続く線の終わり）と by（締め切りの点）
  lf_eigoext08_280: {
    kind: 'numberLine',
    min: 1,
    max: 9,
    step: 1,
    points: [{ x: 5, label: 'five o\'clock' }],
    segments: [{ from: 1, to: 5 }],
    caption:
      '五時を境にした図。until five は帯のように五時まで動作が続くことを表し（wait, stay, sleep）、by five は五時という点までに一度すればよい期限を表す（come, finish, return）。日本語の「まで」と「までに」の一字のちがいがこの差になる',
  },

  // s286：命令文, and 〜 ／ 命令文, or 〜 の二本の分かれ道
  lf_eigoext08_286: {
    kind: 'coordinate',
    xRange: [0, 10],
    yRange: [0, 8],
    segments: [
      [
        { x: 2, y: 4 },
        { x: 9, y: 7 },
      ],
      [
        { x: 2, y: 4 },
        { x: 9, y: 1 },
      ],
    ],
    points: [
      { x: 2, y: 4, label: 'Hurry up,（命令）' },
      { x: 9, y: 7, label: 'and → catch the bus' },
      { x: 9, y: 1, label: 'or → miss the bus' },
    ],
    caption:
      '一つの命令から分かれる二本の道。命令に従った先が and（そうすれば・良い結果）、従わなかった先が or（そうしないと・悪い結果）。どちらも結果の文には will を使う。or は If you do not ... に書きかえられる',
  },

  // s288：時・条件の副詞節では未来のことも現在形で書く
  lf_eigoext08_288: {
    kind: 'numberLine',
    min: 0,
    max: 10,
    step: 1,
    points: [
      { x: 3, label: 'now' },
      { x: 7, label: '彼が来る（未来）' },
    ],
    segments: [{ from: 3, to: 7 }],
    caption:
      '「彼が来たら伝えます」は未来の話だが、時を表す接続詞の節の中では will を使わず現在形で書く（When he comes, I will tell him.）。主となる文だけが will になる。if・before・after・until・as soon as も同じ規則',
  },
};
