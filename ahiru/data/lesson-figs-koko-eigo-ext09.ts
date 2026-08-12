import type { Figure } from './figures';

// 高校受験 英語「関係代名詞・接続詞・間接疑問」拡張ユニット（koko_eigo_s296〜s335）の図解。
// キーは lessons-koko-eigo-ext09.ts の figureId と完全一致させてある（40課中18課＝45%）。
// 英語は「語順」と「どこからどこまでが一かたまりか」が命なので、
//   polygon … 語順ボックス（○の語順／×の語順、2文がつながるしくみ）
//   numberLine … 語を左から順に並べた線。太線＝修飾のおよぶ範囲（関係詞節・間接疑問のかたまり）
// の2種類だけを使い、英文はスペル・冠詞・三単現・時制を本文と一致させてある。
export const lessonFigsKokoEigoExt09: Record<string, Figure> = {
  // s296：2文が関係代名詞で1文になるしくみ（L字の2本の腕＝2つの文、角＝接続点）
  lf_kokoeigoext09_296: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 18, y: 0 },
      { x: 18, y: 5 },
      { x: 7, y: 5 },
      { x: 7, y: 12 },
      { x: 0, y: 12 },
    ],
    sideLabels: ['文① I know the girl.', '接続点＝who', null, null, '文② She plays the piano.', '共通の語 the girl＝she'],
    fill: true,
    caption:
      '2つの文が関係代名詞でつながるしくみ。文②の主語 she を who に変え、文①の the girl（先行詞）のすぐ後ろに差しこむと I know the girl who plays the piano. になる。she が who に姿を変えたのだから she は消える（× the girl who she plays）',
  },

  // s297：関係詞節がどこからどこまでかを一本の線で示す（主格 who）
  lf_kokoeigoext09_297: {
    kind: 'numberLine',
    min: 0,
    max: 6,
    step: 1,
    points: [
      { x: 0, label: 'I' },
      { x: 1, label: 'have' },
      { x: 2, label: 'a friend' },
      { x: 3, label: 'who' },
      { x: 4, label: 'lives' },
      { x: 5, label: 'in' },
      { x: 6, label: 'Canada' },
    ],
    segments: [{ from: 3, to: 6 }],
    caption:
      'I have a friend who lives in Canada.（私にはカナダに住んでいる友達がいます）太線の who lives in Canada が先行詞 a friend を説明する関係詞節で、who から文末までがひとかたまり。日本語には後ろから前へ戻して訳す',
  },

  // s301：目的格の関係詞節。動詞のあとに目的語がない「欠け」を示す
  lf_kokoeigoext09_301: {
    kind: 'numberLine',
    min: 0,
    max: 6,
    step: 1,
    points: [
      { x: 0, label: 'This' },
      { x: 1, label: 'is' },
      { x: 2, label: 'the book' },
      { x: 3, label: 'which' },
      { x: 4, label: 'I' },
      { x: 5, label: 'bought' },
      { x: 6, label: 'yesterday' },
    ],
    segments: [{ from: 3, to: 6 }],
    caption:
      'This is the book which I bought yesterday.（これは私が昨日買った本です）which の直後が I bought と〈主語＋動詞〉で、bought の目的語が抜けている（もとは I bought the book）。この「欠け」を先行詞 the book が埋めるのが目的格。主格は who の直後がいきなり動詞になる点がちがう',
  },

  // s302：主格か目的格かは「関係代名詞の直後の形」だけで決まる、という語順ボックス
  lf_kokoeigoext09_302: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 20, y: 0 },
      { x: 20, y: 6 },
      { x: 0, y: 6 },
    ],
    sideLabels: ['目的格：関係代名詞＋主語＋動詞（目的語が欠ける）', '省略できる', '主格：関係代名詞＋動詞（主語が欠ける）', '省略できない'],
    fill: true,
    caption:
      '関係代名詞のすぐ後ろを見るだけで主格か目的格かが決まる。直後が動詞なら主格、直後が〈主語＋動詞〉なら目的格。例）the man who helped me（主格・省略不可）／the man (whom) I helped（目的格・省略可）',
  },

  // s307：that の三つの働きは「後ろの形」で見分ける
  lf_kokoeigoext09_307: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 16, y: 0 },
      { x: 8, y: 11 },
    ],
    sideLabels: ['関係代名詞：後ろが不完全（動詞 or 主語＋動詞）', '接続詞：後ろが完全な文', '指示語：後ろに名詞、または単独'],
    fill: true,
    caption:
      'that の識別は後ろの形で決まる。I know that he is kind.（後ろが完全な文＝接続詞）／This is the book that I bought.（bought の目的語が欠ける＝関係代名詞）／That book is mine.（後ろに名詞＝指示語）',
  },

  // s308：省略できるのは目的格。白丸が省略できる位置
  lf_kokoeigoext09_308: {
    kind: 'numberLine',
    min: 0,
    max: 6,
    step: 1,
    points: [
      { x: 0, label: 'The movie' },
      { x: 1, label: '(which)', open: true },
      { x: 2, label: 'we' },
      { x: 3, label: 'saw' },
      { x: 4, label: 'last night' },
      { x: 5, label: 'was' },
      { x: 6, label: 'exciting' },
    ],
    segments: [{ from: 1, to: 4 }],
    caption:
      'The movie (which) we saw last night was exciting.（私たちが昨夜見た映画はわくわくした）白丸の which は目的格なので省略できる。省略すると〈名詞 The movie＋主語 we＋動詞 saw〉と名詞のすぐ後ろに主語が並ぶ形になる。文全体の動詞は太線の外にある was',
  },

  // s309：主格は省略できない（○×の語順ボックス）
  lf_kokoeigoext09_309: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 20, y: 0 },
      { x: 20, y: 6 },
      { x: 0, y: 6 },
    ],
    sideLabels: ['○ I have a friend who lives in Osaka.', '主格', '× I have a friend lives in Osaka.', '省略不可'],
    fill: true,
    caption:
      '主格の関係代名詞は省略できない。省略すると a friend lives と〈名詞＋動詞〉が並び、1つの文に have と lives の2つの動詞がある壊れた文になる。省略してよいのは目的格だけ',
  },

  // s310：〈名詞＋主語＋動詞〉が並んだら関係代名詞の省略の合図
  lf_kokoeigoext09_310: {
    kind: 'numberLine',
    min: 0,
    max: 4,
    step: 1,
    points: [
      { x: 0, label: 'The cake' },
      { x: 1, label: 'my mother' },
      { x: 2, label: 'made' },
      { x: 3, label: 'was' },
      { x: 4, label: 'delicious' },
    ],
    segments: [{ from: 1, to: 2 }],
    caption:
      'The cake my mother made was delicious.（母が作ったケーキはおいしかった）名詞 The cake のすぐ後ろに〈主語 my mother＋動詞 made〉が来たら、目的格の関係代名詞が省略されている合図。太線が関係詞節で、文全体の動詞はその外の was',
  },

  // s312：主格の関係代名詞＋be動詞 は現在分詞の後置修飾に書きかえられる
  lf_kokoeigoext09_312: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 20, y: 0 },
      { x: 20, y: 6 },
      { x: 0, y: 6 },
    ],
    sideLabels: ['the boy running over there', '同じ意味', 'the boy who is running over there', 'who is をまとめて消す'],
    fill: true,
    caption:
      '主格の関係代名詞＋be動詞は、まとめて消して現在分詞だけを残せる。the boy who is running over there ＝ the boy running over there（あそこで走っている少年）。who だけを消して the boy is running とするのは誤り',
  },

  // s317：命令文, or 〜 と If you don't 〜 の対応
  lf_kokoeigoext09_317: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 22, y: 0 },
      { x: 22, y: 6 },
      { x: 0, y: 6 },
    ],
    sideLabels: [
      'If you do not hurry up, you will miss the bus.',
      'or＝そうしないと',
      'Hurry up, or you will miss the bus.',
      '命令文＋or',
    ],
    fill: true,
    caption:
      '「命令文, or 〜」は〈If you do not 〜, you will 〜〉と同じ内容になる。Hurry up, or you will miss the bus.（急ぎなさい、そうしないとバスに乗り遅れますよ）。and なら「そうすれば」で、If you hurry up, 〜 と肯定の if に書きかえる',
  },

  // s319：時・条件を表す副詞節の中は未来でも現在形
  lf_kokoeigoext09_319: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 22, y: 0 },
      { x: 22, y: 6 },
      { x: 0, y: 6 },
    ],
    sideLabels: [
      '○ I will call you when I get home.',
      '主節は will のまま',
      '× I will call you when I will get home.',
      '時・条件の副詞節は現在形',
    ],
    fill: true,
    caption:
      '時（when・before・after・until）や条件（if・unless）を表す副詞節の中では、未来のことでも現在形で表す。主節の will はそのまま残す。× when I will get home は高校入試で最も多い誤りの一つ',
  },

  // s324：時制の一致を時間の線で見る
  lf_kokoeigoext09_324: {
    kind: 'numberLine',
    min: 0,
    max: 4,
    step: 1,
    points: [
      { x: 1, label: '過去：said＝was busy' },
      { x: 3, label: '現在：says＝is busy' },
    ],
    segments: [{ from: 0.5, to: 1.5 }],
    caption:
      '時制の一致。He says that he is busy. の says を said にすると、that節の内容も同じ「過去の時点」の話になるので is → was に変わる（He said that he was busy.）。日本語では「忙しいと言った」と現在のように訳すが、英語では過去形にそろえる',
  },

  // s327：間接疑問の語順ボックス（○の語順と×の語順）
  lf_kokoeigoext09_327: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 22, y: 0 },
      { x: 22, y: 6 },
      { x: 0, y: 6 },
    ],
    sideLabels: [
      '○ Do you know where he lives?',
      '文中では平叙文の語順',
      '× Do you know where does he live?',
      'もとの疑問文 Where does he live?',
    ],
    fill: true,
    caption:
      '疑問文が別の文の中に入ると、〈疑問詞＋主語＋動詞〉という平叙文の語順に戻る。Where does he live? → Do you know where he lives? となり、does が消えて live に三単現の s が戻る。疑問文の語順のまま入れるのが最頻出の誤り',
  },

  // s328：間接疑問を作る三つの手順
  lf_kokoeigoext09_328: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 18, y: 0 },
      { x: 9, y: 11 },
    ],
    sideLabels: ['① do/does/did を消す', '② 疑問詞＋主語＋動詞の順にする', '③ 消した does/did の分を動詞に戻す'],
    fill: true,
    caption:
      '間接疑問を作る三つの手順。What did she buy? → I know what she bought.（did を消し、buy を過去形 bought に戻す）／What does he want? → I know what he wants.（does を消し、want に三単現の s を戻す）',
  },

  // s330：疑問詞そのものが主語のときは語順が変わらない
  lf_kokoeigoext09_330: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 22, y: 0 },
      { x: 22, y: 6 },
      { x: 0, y: 6 },
    ],
    sideLabels: [
      'Do you know who broke the window?',
      '語順はそのまま',
      'Who broke the window?（who が主語）',
      'すでに主語＋動詞の順',
    ],
    fill: true,
    caption:
      '疑問詞そのものが主語のときは、もともと〈主語（疑問詞）＋動詞〉の語順なので、間接疑問にしても形が変わらない。Who broke the window? → Do you know who broke the window? 疑問詞の主語は三人称単数扱いで、現在なら who breaks となる',
  },

  // s331：間接疑問のかたまり全体が目的語になる
  lf_kokoeigoext09_331: {
    kind: 'numberLine',
    min: 0,
    max: 5,
    step: 1,
    points: [
      { x: 0, label: 'Please' },
      { x: 1, label: 'tell' },
      { x: 2, label: 'me' },
      { x: 3, label: 'what' },
      { x: 4, label: 'he' },
      { x: 5, label: 'said' },
    ],
    segments: [{ from: 3, to: 5 }],
    caption:
      'Please tell me what he said.（彼が何と言ったのか教えてください）太線の what he said が〈疑問詞＋主語＋動詞〉のかたまりで、これ全体が tell の二つ目の目的語になっている。かたまりの中は平叙文の語順、文末は主節が命令文なので「?」ではなく「.」',
  },

  // s333：either/neither の動詞の一致は「近い方」
  lf_kokoeigoext09_333: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 22, y: 0 },
      { x: 22, y: 6 },
      { x: 0, y: 6 },
    ],
    sideLabels: [
      'Neither Tom nor his friends were there.',
      '近い方 his friends に一致',
      'Either you or I am wrong.',
      '近い方 I に一致',
    ],
    fill: true,
    caption:
      'either A or B / neither A nor B が主語のとき、動詞は動詞に近い B のほうに一致させる。Either you or I am wrong.／Neither Tom nor his friends were there. 一方 both A and B は必ず複数扱い（Both Tom and Ken are kind.）',
  },

  // s335：節をつなぐ三つの道具の見分け（総まとめ）
  lf_kokoeigoext09_335: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 22, y: 0 },
      { x: 22, y: 6 },
      { x: 0, y: 6 },
    ],
    sideLabels: [
      '関係代名詞：直後が動詞＝主格／主語＋動詞＝目的格',
      '省略可は目的格だけ',
      '間接疑問：疑問詞＋主語＋動詞に戻す',
      '接続詞 that：後ろは完全な文',
    ],
    fill: true,
    caption:
      '節をつなぐ三つの道具の見分け方。①関係代名詞＝直後が不完全で、前の名詞（先行詞）を説明する ②接続詞 that＝直後が完全な文で、think・know の目的語になる ③間接疑問＝疑問詞のあとが〈主語＋動詞〉。迷ったら「その語の直後の形」を見る',
  },
};
