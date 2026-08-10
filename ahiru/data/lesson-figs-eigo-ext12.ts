import type { Figure } from './figures';

// 中学受験 英語「英作文・並べかえ・入試実戦演習」拡張ユニット（eigo_s426〜eigo_s450）の教科書用図解。
// キーは lessons-eigo-ext12.ts の figureId と対応。
// 英語は図解が馴染みにくい教科なので、「語順」「時間の幅」「割合」「配分」など
// 図にすることで本当に理解が進む箇所にだけ付けてある（25課中10課）。
export const lessonFigsEigoExt12: Record<string, Figure> = {
  // s426：英文の骨組み（だれが／どうする／何を／どこで・いつ）を四つの部屋に見立てる
  lf_eigoext12_426: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 12, y: 0 },
      { x: 12, y: 7 },
      { x: 0, y: 7 },
    ],
    sideLabels: [
      '① だれが（主語S）',
      '② どうする（動詞V）',
      '③ 何を・何だ（目的語O・補語C）',
      '④ どこで・いつ（修飾語M）',
    ],
    fill: true,
    caption:
      '英文の骨組みは四つの部屋でできている。和文英訳ではまず日本語を①〜④に振り分け、①→②→③→④の順に置き直す。日本語は④②の順（きのう公園で　遊んだ）だが、英語は必ず①②③④の順になる',
  },

  // s427：日本語の文末表現と英語の時制の対応を時間軸に置く
  lf_eigoext12_427: {
    kind: 'numberLine',
    min: 0,
    max: 10,
    step: 1,
    points: [
      { x: 2, label: '〜した→過去形' },
      { x: 5, label: '今〜している→be＋ing' },
      { x: 8, label: '〜するつもり→will' },
    ],
    caption:
      '日本語の文末を見て、時間軸のどこに置くかを決めてから動詞の形を選ぶ。「毎日〜します」のように習慣を表す文だけは時間軸の一点ではなく全体を指すので現在形にする',
  },

  // s431：並べかえの「語順のものさし」。場所→時の順を数直線の目盛りで示す
  lf_eigoext12_431: {
    kind: 'numberLine',
    min: 1,
    max: 5,
    step: 1,
    points: [
      { x: 1, label: 'だれが' },
      { x: 2, label: 'どうする' },
      { x: 3, label: '何を' },
      { x: 4, label: 'どこで' },
      { x: 5, label: 'いつ' },
    ],
    caption:
      '並べかえ問題の語順のものさし。I played soccer in the park yesterday. のように、文の後ろは「場所→時」の順に置く。日本語の「きのう公園で」とは逆になる点に注意する',
  },

  // s435：語数指定の英作文で数えまちがえやすい語の数え方
  lf_eigoext12_435: {
    kind: 'barChart',
    yLabel: '語数',
    yMax: 3,
    bars: [
      { label: "I'm", value: 1, color: '#0EA5E9' },
      { label: 'I am', value: 2, color: '#0369A1' },
      { label: "don't", value: 1, color: '#0EA5E9' },
      { label: 'do not', value: 2, color: '#0369A1' },
      { label: 'ice cream', value: 2, color: '#16A34A' },
      { label: 'e-mail', value: 1, color: '#F59E0B' },
    ],
    caption:
      '語数の数え方。短縮形（アポストロフィでつないだ形）とハイフンでつないだ語は1語、離して書く語は2語と数える。コンマやピリオドは語数に入れない',
  },

  // s437：自由英作文（40語程度）の語数配分の目安
  lf_eigoext12_437: {
    kind: 'pieChart',
    slices: [
      { label: '意見', value: 20, color: '#0EA5E9' },
      { label: '理由①', value: 30, color: '#0369A1' },
      { label: '理由②', value: 30, color: '#16A34A' },
      { label: 'まとめ', value: 20, color: '#F59E0B' },
    ],
    caption:
      '40語程度で書く自由英作文の語数配分の目安。意見とまとめは各8語ほどの短い文でよく、理由の二つに全体の6割を使う。理由が短すぎる答案は内容点で減点されやすい',
  },

  // s440：絵の描写問題を「だれが・何をしている・どこにいる」に分解した配置図
  lf_eigoext12_440: {
    kind: 'coordinate',
    xRange: [0, 10],
    yRange: [0, 8],
    points: [
      { x: 2, y: 6, label: 'a boy is running' },
      { x: 5, y: 4, label: 'two girls are talking' },
      { x: 8, y: 6, label: 'a dog is sleeping' },
      { x: 5, y: 1, label: 'a man is reading a book' },
    ],
    caption:
      '絵の描写問題の模式図。絵を見たら「だれが」「何をしている」を一組ずつ拾い、目立つものから順に一文ずつ書く。動作は現在進行形（be動詞＋ing）で表すのが基本',
  },

  // s441：位置を表す前置詞の関係を、箱を中心にした位置で示す
  lf_eigoext12_441: {
    kind: 'coordinate',
    xRange: [0, 10],
    yRange: [0, 8],
    polygon: [
      { x: 3, y: 2 },
      { x: 7, y: 2 },
      { x: 7, y: 4 },
      { x: 3, y: 4 },
    ],
    points: [
      { x: 5, y: 3, label: 'in（中）' },
      { x: 5, y: 4.4, label: 'on（接して上）' },
      { x: 5, y: 7, label: 'over / above（離れて上）' },
      { x: 5, y: 0.7, label: 'under（下）' },
      { x: 8.7, y: 3, label: 'by / near（そば）' },
    ],
    caption:
      '真ん中の四角を箱や机と考えたときの前置詞の位置関係。ふれていれば on、離れて上にあれば over や above を使う。壁にかかった絵も「壁にふれている」ので on the wall になる',
  },

  // s443：答案でよく見かける誤りの割合（採点でめだつ順の目安）
  lf_eigoext12_443: {
    kind: 'pieChart',
    slices: [
      { label: '三単現のs', value: 30, color: '#0EA5E9' },
      { label: '冠詞', value: 25, color: '#0369A1' },
      { label: '複数形のs', value: 20, color: '#16A34A' },
      { label: '時制', value: 15, color: '#F59E0B' },
      { label: '前置詞', value: 10, color: '#EF4444' },
    ],
    caption:
      '英作文の答案でめだつ誤りのおおよその割合（目安）。半分以上が三単現のsと冠詞であり、この二つを見直すだけで失点は大きく減る。内容を考え直すより先に、まずこの順で確かめる',
  },

  // s445：現在完了が表す「幅」と、過去形が表す「一点」のちがい
  lf_eigoext12_445: {
    kind: 'numberLine',
    min: 0,
    max: 10,
    step: 1,
    points: [
      { x: 3, label: '過去の一点（last year）' },
      { x: 9, label: '現在（now）' },
    ],
    segments: [{ from: 3, to: 9 }],
    caption:
      '現在完了は「過去のある時点から今まで」という幅を表す。だから yesterday や last year のような過去の一点だけを指す語といっしょには使えない。for（幅の長さ）と since（幅の始まり）はこの幅を説明する語',
  },

  // s450：試験時間50分の時間配分の目安
  lf_eigoext12_450: {
    kind: 'barChart',
    xLabel: '設問の種類',
    yLabel: '分',
    yMax: 22,
    bars: [
      { label: 'リスニング', value: 10, color: '#0EA5E9' },
      { label: '語彙・文法', value: 5, color: '#0369A1' },
      { label: '読解', value: 20, color: '#16A34A' },
      { label: '英作文', value: 10, color: '#F59E0B' },
      { label: '見直し', value: 5, color: '#EF4444' },
    ],
    caption:
      '試験時間50分の配分の目安。リスニングは放送の時間で決まってしまうので、自分で調整できるのは読解と英作文。英作文に10分、見直しに5分を必ず残す組み立てにする',
  },
};
