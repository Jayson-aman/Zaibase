import type { Figure } from './figures';

// 高校受験 英語「be動詞・一般動詞と5文型」拡張ユニット（koko_eigo_s036〜koko_eigo_s070）の教科書用図解。
// キーは lessons-koko-eigo-ext02.ts の figureId と対応。
// この単元の図解の主役は「語順」。長方形を縦線で区切った“語順ボックス”をつくり、
// 上の辺に実際の英語、下の辺に S / V / O / C の役割を並べて、
// 語のならびと文型の対応が一目で分かるようにしてある（35課中16課）。
export const lessonFigsKokoEigoExt02: Record<string, Figure> = {
  // s036：be動詞の文の骨組み（S＝C）
  lf_kokoeigoext02_036: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 3, y: 0 },
      { x: 6, y: 0 },
      { x: 9, y: 0 },
      { x: 9, y: 3 },
      { x: 6, y: 3 },
      { x: 3, y: 3 },
      { x: 0, y: 3 },
    ],
    sideLabels: ['S 主語', 'V be動詞', 'C 補語', null, 'a student', 'am', 'I', null],
    diagonals: [
      [1, 6],
      [2, 5],
    ],
    fill: true,
    caption: 'be動詞の文の語順ボックス。上の辺が実際の英語、下の辺がその役割。I am a student. は「I ＝ a student」という関係を表し、be動詞は動作ではなくイコールをつくる働きをしている',
  },

  // s041：be動詞の否定文は not が be動詞の直後
  lf_kokoeigoext02_041: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 2.5, y: 0 },
      { x: 5, y: 0 },
      { x: 7.5, y: 0 },
      { x: 10, y: 0 },
      { x: 10, y: 3 },
      { x: 7.5, y: 3 },
      { x: 5, y: 3 },
      { x: 2.5, y: 3 },
      { x: 0, y: 3 },
    ],
    sideLabels: ['S 主語', 'V be動詞', 'not', 'C 形容詞', null, 'busy', 'not', 'am', 'I', null],
    diagonals: [
      [1, 8],
      [2, 7],
      [3, 6],
    ],
    fill: true,
    caption: "be動詞の否定文は not を be動詞のすぐ後ろに入れるだけ。I am not busy.（× I not am busy. / × I don't busy.）",
  },

  // s043：一般動詞の否定文は does not のうしろが原形
  lf_kokoeigoext02_043: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 2.2, y: 0 },
      { x: 5.2, y: 0 },
      { x: 7.6, y: 0 },
      { x: 10.4, y: 0 },
      { x: 10.4, y: 3 },
      { x: 7.6, y: 3 },
      { x: 5.2, y: 3 },
      { x: 2.2, y: 3 },
      { x: 0, y: 3 },
    ],
    sideLabels: ['S 主語', 'does not', 'V 原形', 'O 目的語', null, 'tennis', 'play', 'does not', 'He', null],
    diagonals: [
      [1, 8],
      [2, 7],
      [3, 6],
    ],
    fill: true,
    caption: "一般動詞の否定文は S のうしろに don't / doesn't を差しこみ、動詞は必ず原形にもどす。He does not play tennis.（× He doesn't plays tennis.）",
  },

  // s045：疑問詞のある疑問文の語順
  lf_kokoeigoext02_045: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 2.8, y: 0 },
      { x: 5.2, y: 0 },
      { x: 7.4, y: 0 },
      { x: 10, y: 0 },
      { x: 10, y: 3 },
      { x: 7.4, y: 3 },
      { x: 5.2, y: 3 },
      { x: 2.8, y: 3 },
      { x: 0, y: 3 },
    ],
    sideLabels: ['疑問詞', 'does', 'S 主語', 'V 原形', null, 'live', 'he', 'does', 'Where', null],
    diagonals: [
      [1, 8],
      [2, 7],
      [3, 6],
    ],
    fill: true,
    caption: '疑問詞のある疑問文は「疑問詞 ＋ 疑問文の語順」。Where does he live? のように does を主語の前に出し、そのうしろの動詞は原形にする',
  },

  // s047：文の骨組みになる4つの要素
  lf_kokoeigoext02_047: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 2.5, y: 0 },
      { x: 5, y: 0 },
      { x: 7.5, y: 0 },
      { x: 10, y: 0 },
      { x: 10, y: 3 },
      { x: 7.5, y: 3 },
      { x: 5, y: 3 },
      { x: 2.5, y: 3 },
      { x: 0, y: 3 },
    ],
    sideLabels: ['S 主語', 'V 動詞', 'O 目的語', 'C 補語', null, 'O を説明', '〜を・〜に', '述語の動詞', '〜は・〜が', null],
    diagonals: [
      [1, 8],
      [2, 7],
      [3, 6],
    ],
    fill: true,
    caption: '文型を決めるのはこの4つの要素だけ。これ以外の語句（場所・時・様子を表す語句）はすべて修飾語Mで、文型を数えるときには入れない',
  },

  // s048：第1文型 SV ＋ 修飾語M
  lf_kokoeigoext02_048: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 3, y: 0 },
      { x: 6, y: 0 },
      { x: 14, y: 0 },
      { x: 14, y: 3 },
      { x: 6, y: 3 },
      { x: 3, y: 3 },
      { x: 0, y: 3 },
    ],
    sideLabels: ['S 主語', 'V 動詞', 'M 修飾語（数えない）', null, 'to the park', 'walks', 'My father', null],
    diagonals: [
      [1, 6],
      [2, 5],
    ],
    fill: true,
    caption: '第1文型 SV。My father walks to the park. の to the park は場所を表す修飾語Mなので、骨組みは My father walks の2つだけになる',
  },

  // s049：第2文型 SVC（S ＝ C）
  lf_kokoeigoext02_049: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 3.5, y: 0 },
      { x: 6, y: 0 },
      { x: 10, y: 0 },
      { x: 10, y: 3 },
      { x: 6, y: 3 },
      { x: 3.5, y: 3 },
      { x: 0, y: 3 },
    ],
    sideLabels: ['S 主語', 'V be動詞', 'C 補語', null, 'interesting', 'is', 'The book', null],
    diagonals: [
      [1, 6],
      [2, 5],
    ],
    equalSides: [[0, 2]],
    fill: true,
    caption: '第2文型 SVC。The book is interesting. は「本 ＝ おもしろい」。同じ印を付けた S と C は同じものを指しており、C には名詞か形容詞が入る',
  },

  // s052：第3文型 SVO（S ≠ O）
  lf_kokoeigoext02_052: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 3, y: 0 },
      { x: 6, y: 0 },
      { x: 10, y: 0 },
      { x: 10, y: 3 },
      { x: 6, y: 3 },
      { x: 3, y: 3 },
      { x: 0, y: 3 },
    ],
    sideLabels: ['S 主語', 'V 他動詞', 'O 目的語', null, 'the guitar', 'plays', 'Ken', null],
    diagonals: [
      [1, 6],
      [2, 5],
    ],
    fill: true,
    caption: '第3文型 SVO。Ken plays the guitar. の Ken と the guitar は別のもの（S ≠ O）。ここが S ＝ C になる第2文型との分かれ目',
  },

  // s054：他動詞のうしろに前置詞は入らない
  lf_kokoeigoext02_054: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 2.5, y: 0 },
      { x: 5.5, y: 0 },
      { x: 8, y: 0 },
      { x: 11, y: 0 },
      { x: 11, y: 3 },
      { x: 8, y: 3 },
      { x: 5.5, y: 3 },
      { x: 2.5, y: 3 },
      { x: 0, y: 3 },
    ],
    sideLabels: ['S 主語', 'V 他動詞', '前置詞は不要', 'O 目的語', null, 'the plan', '× about', 'discussed', 'We', null],
    diagonals: [
      [1, 8],
      [2, 7],
      [3, 6],
    ],
    fill: true,
    caption: 'discuss は他動詞なので目的語を直接置く。We discussed the plan.（× We discussed about the plan.）。日本語の「〜について話し合う」の「について」に引きずられて about を入れない',
  },

  // s056：第4文型 SVOO（人 → 物 の順）
  lf_kokoeigoext02_056: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 2.8, y: 0 },
      { x: 5, y: 0 },
      { x: 7.4, y: 0 },
      { x: 10.2, y: 0 },
      { x: 10.2, y: 3 },
      { x: 7.4, y: 3 },
      { x: 5, y: 3 },
      { x: 2.8, y: 3 },
      { x: 0, y: 3 },
    ],
    sideLabels: ['S 主語', 'V 動詞', 'O1 人（〜に）', 'O2 物（〜を）', null, 'a watch', 'me', 'gave', 'My father', null],
    diagonals: [
      [1, 8],
      [2, 7],
      [3, 6],
    ],
    fill: true,
    caption: '第4文型 SVOO。My father gave me a watch. は「人 → 物」の順に並べる。me（人）と a watch（物）は別のものなので、O が2つ続く',
  },

  // s057：SVOO → SVO ＋ to の書きかえ
  lf_kokoeigoext02_057: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 2.2, y: 0 },
      { x: 4.6, y: 0 },
      { x: 8, y: 0 },
      { x: 10.4, y: 0 },
      { x: 10.4, y: 3 },
      { x: 8, y: 3 },
      { x: 4.6, y: 3 },
      { x: 2.2, y: 3 },
      { x: 0, y: 3 },
    ],
    sideLabels: ['S 主語', 'V 動詞', 'O 物（〜を）', 'to ＋ 人', null, 'to me', 'the picture', 'showed', 'He', null],
    diagonals: [
      [1, 8],
      [2, 7],
      [3, 6],
    ],
    fill: true,
    caption: 'SVOO → SVO ＋ to の書きかえ。He showed me the picture. ＝ He showed the picture to me. 相手に直接とどける show・give・teach・send は to をとる',
  },

  // s058：SVOO → SVO ＋ for の書きかえ
  lf_kokoeigoext02_058: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 2.2, y: 0 },
      { x: 4.4, y: 0 },
      { x: 7.4, y: 0 },
      { x: 10, y: 0 },
      { x: 10, y: 3 },
      { x: 7.4, y: 3 },
      { x: 4.4, y: 3 },
      { x: 2.2, y: 3 },
      { x: 0, y: 3 },
    ],
    sideLabels: ['S 主語', 'V 動詞', 'O 物（〜を）', 'for ＋ 人', null, 'for me', 'a cake', 'made', 'She', null],
    diagonals: [
      [1, 8],
      [2, 7],
      [3, 6],
    ],
    fill: true,
    caption: 'SVOO → SVO ＋ for の書きかえ。She made me a cake. ＝ She made a cake for me. 相手のために作る・買う make・buy・cook・get は for をとる',
  },

  // s061：第5文型 SVOC（O ＝ C）
  lf_kokoeigoext02_061: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 2.5, y: 0 },
      { x: 5, y: 0 },
      { x: 7.5, y: 0 },
      { x: 10, y: 0 },
      { x: 10, y: 3 },
      { x: 7.5, y: 3 },
      { x: 5, y: 3 },
      { x: 2.5, y: 3 },
      { x: 0, y: 3 },
    ],
    sideLabels: ['S 主語', 'V 動詞', 'O 目的語', 'C 補語', null, 'Ken', 'him', 'call', 'We', null],
    diagonals: [
      [1, 8],
      [2, 7],
      [3, 6],
    ],
    equalSides: [[2, 3]],
    fill: true,
    caption: '第5文型 SVOC。We call him Ken. の him と Ken は同じ人（O ＝ C）。同じ印を付けた2か所がイコールで結ばれるのが第5文型の目印',
  },

  // s063：SVOC の C に形容詞が入る形
  lf_kokoeigoext02_063: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 3, y: 0 },
      { x: 5.4, y: 0 },
      { x: 7.6, y: 0 },
      { x: 10.4, y: 0 },
      { x: 10.4, y: 3 },
      { x: 7.6, y: 3 },
      { x: 5.4, y: 3 },
      { x: 3, y: 3 },
      { x: 0, y: 3 },
    ],
    sideLabels: ['S 主語', 'V 動詞', 'O 目的語', 'C 形容詞', null, 'happy', 'us', 'made', 'The news', null],
    diagonals: [
      [1, 8],
      [2, 7],
      [3, 6],
    ],
    equalSides: [[2, 3]],
    fill: true,
    caption: 'The news made us happy. は「私たち ＝ 幸せ」という関係をつくる第5文型。C の位置に入るのは形容詞 happy であって、副詞 happily は入れない',
  },

  // s066：There is / are の語順
  lf_kokoeigoext02_066: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 2.6, y: 0 },
      { x: 4.6, y: 0 },
      { x: 7, y: 0 },
      { x: 12, y: 0 },
      { x: 12, y: 3 },
      { x: 7, y: 3 },
      { x: 4.6, y: 3 },
      { x: 2.6, y: 3 },
      { x: 0, y: 3 },
    ],
    sideLabels: ['形の上の主語', 'V be動詞', '本当の主語', 'M 場所', null, 'under the table', 'a cat', 'is', 'There', null],
    diagonals: [
      [1, 8],
      [2, 7],
      [3, 6],
    ],
    fill: true,
    caption: 'There is a cat under the table. の There に「そこに」という意味はない。be動詞は、うしろに来る本当の主語（a cat）の数に合わせて is / are を選ぶ',
  },

  // s069：自動詞 arrive は前置詞が必要
  lf_kokoeigoext02_069: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 2.4, y: 0 },
      { x: 5.4, y: 0 },
      { x: 7.6, y: 0 },
      { x: 11, y: 0 },
      { x: 11, y: 3 },
      { x: 7.6, y: 3 },
      { x: 5.4, y: 3 },
      { x: 2.4, y: 3 },
      { x: 0, y: 3 },
    ],
    sideLabels: ['S 主語', 'V 自動詞', '前置詞が必要', '名詞', null, 'the station', 'at', 'arrived', 'We', null],
    diagonals: [
      [1, 8],
      [2, 7],
      [3, 6],
    ],
    fill: true,
    caption: 'arrive は自動詞なので、うしろに名詞を続けるには at / in が要る。We arrived at the station. ＝ We reached the station.（reach は他動詞なので前置詞を入れない）',
  },
};
