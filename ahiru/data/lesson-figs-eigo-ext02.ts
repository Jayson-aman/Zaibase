import type { Figure } from './figures';

// 中学受験 英語「be動詞・一般動詞と基本文型」拡張ユニット（eigo_s041〜eigo_s080）の教科書用図解。
// キーは lessons-eigo-ext02.ts の figureId と対応。
// 英語は図にしにくい教科なので、「語順を四角の枠に見立てる」「2軸で使い分けを整理する」
// 「分類の割合」など、図にすることで本当に理解が進む箇所にだけ付けてある（40課中17課）。
// 語順の図は、四角形の辺を①→②→③→④の順にたどると英語の並びになるようにしてある。
export const lessonFigsEigoExt02: Record<string, Figure> = {
  // s042：am / is / are を「人称（横軸）×単数複数（縦軸）」の2軸に配置する
  lf_eigoext02_042: {
    kind: 'coordinate',
    xRange: [0, 4],
    yRange: [0, 3],
    points: [
      { x: 1, y: 1, label: 'I → am' },
      { x: 1, y: 2, label: 'we → are' },
      { x: 2, y: 1, label: 'you → are' },
      { x: 2, y: 2, label: 'you → are' },
      { x: 3, y: 1, label: 'he/she/it → is' },
      { x: 3, y: 2, label: 'they → are' },
    ],
    caption: '横軸は人称（1＝一人称、2＝二人称、3＝三人称）、縦軸は数（1＝単数、2＝複数）。am が入るのは左下の一か所（主語が I）だけ、is が入るのは右下の一か所（三人称単数）だけで、残りはすべて are になる',
  },

  // s046：be動詞の否定文の語順
  lf_eigoext02_046: {
    kind: 'polygon',
    points: [
      { x: 0, y: 10 },
      { x: 10, y: 10 },
      { x: 10, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['①主語', '②be動詞', '③not', '④つづき（名詞・形容詞・場所）'],
    fill: true,
    caption: 'be動詞の否定文の語順。左上から時計回りに①→②→③→④とたどる。not は必ず be動詞のすぐうしろに入り、don\'t / doesn\'t は使わない',
  },

  // s047：be動詞の疑問文の語順（主語と入れかえる）
  lf_eigoext02_047: {
    kind: 'polygon',
    points: [
      { x: 0, y: 10 },
      { x: 10, y: 10 },
      { x: 10, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['①be動詞', '②主語', '③つづき', '④?'],
    fill: true,
    caption: 'be動詞の疑問文の語順。①と②が肯定文と入れかわっているのがポイント。Do / Does は使わず、be動詞そのものが主語の前に出る',
  },

  // s049：疑問詞つき疑問文（be動詞）の語順
  lf_eigoext02_049: {
    kind: 'polygon',
    points: [
      { x: 0, y: 10 },
      { x: 10, y: 10 },
      { x: 10, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['①疑問詞（What/Who/Where…）', '②be動詞', '③主語', '④?'],
    fill: true,
    caption: '疑問詞つきの疑問文の語順。疑問詞を先頭に置いても、そのうしろは②be動詞→③主語という疑問文の並びのまま。答えは Yes / No ではなく中身を言う',
  },

  // s051：一般動詞の肯定文の語順（S・V・O と修飾語の位置）
  lf_eigoext02_051: {
    kind: 'polygon',
    points: [
      { x: 0, y: 10 },
      { x: 10, y: 10 },
      { x: 10, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['①主語 S（だれが）', '②動詞 V（どうする）', '③目的語 O（何を）', '④修飾語 M（どこで→いつ）'],
    fill: true,
    caption: '一般動詞の文の語順。②動詞と③目的語の間に他の語をはさまないのがきまりで、「いつ・どこで」は④としていちばんうしろに置く。修飾語が二つ以上なら〈場所→時〉の順',
  },

  // s053：三単現の -s の付け方（語尾のタイプ別のおおよその割合）
  lf_eigoext02_053: {
    kind: 'pieChart',
    slices: [
      { label: 'そのまま -s', value: 85, color: '#0EA5E9' },
      { label: '-es（s,x,ch,sh,o）', value: 10, color: '#0369A1' },
      { label: 'y→ies', value: 5, color: '#16A34A' },
    ],
    caption: '三単現の形の作り方の内わけの目安。大部分はそのまま -s を付けるだけで、-es や y→ies になるのはごく一部（goes・does・watches・teaches・washes・studies など）。例外のほうを数少ないものとして覚えるのが効率がよい',
  },

  // s056：一般動詞の否定文の語順
  lf_eigoext02_056: {
    kind: 'polygon',
    points: [
      { x: 0, y: 10 },
      { x: 10, y: 10 },
      { x: 10, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['①主語', '②don\'t / doesn\'t', '③動詞の原形', '④目的語など'],
    fill: true,
    caption: '一般動詞の否定文の語順。②は動詞の前に置く（うしろではない）。doesn\'t を使ったら③の動詞から -s を取って原形に戻すこと',
  },

  // s058：一般動詞の疑問文の語順
  lf_eigoext02_058: {
    kind: 'polygon',
    points: [
      { x: 0, y: 10 },
      { x: 10, y: 10 },
      { x: 10, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['①Do / Does', '②主語', '③動詞の原形', '④?'],
    fill: true,
    caption: '一般動詞の疑問文の語順。①の Do / Does は動詞の数に数えない「質問の合図」で、③はいつでも原形。答えも Yes, I do. / No, he doesn\'t. と do でそろえる',
  },

  // s060：疑問詞＋do / does の語順
  lf_eigoext02_060: {
    kind: 'polygon',
    points: [
      { x: 0, y: 10 },
      { x: 10, y: 10 },
      { x: 10, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['①疑問詞', '②do / does', '③主語', '④動詞の原形'],
    fill: true,
    caption: '疑問詞＋一般動詞の疑問文の語順。ただし疑問詞そのものが主語のとき（Who plays the piano?）は②と③がなくなり、①疑問詞＋動詞（-s 付き）となる',
  },

  // s064：be動詞／一般動詞 × 否定／疑問 の四つの型を2軸に配置
  lf_eigoext02_064: {
    kind: 'coordinate',
    xRange: [0, 3],
    yRange: [0, 3],
    points: [
      { x: 1, y: 1, label: 'isn\'t / aren\'t' },
      { x: 2, y: 1, label: 'don\'t / doesn\'t' },
      { x: 1, y: 2, label: 'Is he 〜? / Are you 〜?' },
      { x: 2, y: 2, label: 'Does he 〜? / Do you 〜?' },
    ],
    caption: '横軸は使う動詞（1＝be動詞の文、2＝一般動詞の文）、縦軸は文の種類（1＝否定文、2＝疑問文）。左の列は not を足すか be動詞を前に出すだけ、右の列は do / does を借りてきて動詞は原形にする',
  },

  // s065：五つの文型の出てくる割合の目安
  lf_eigoext02_065: {
    kind: 'pieChart',
    slices: [
      { label: '第3文型 SVO', value: 50, color: '#0EA5E9' },
      { label: '第1文型 SV', value: 20, color: '#0369A1' },
      { label: '第2文型 SVC', value: 20, color: '#16A34A' },
      { label: '第5文型 SVOC', value: 7, color: '#F59E0B' },
      { label: '第4文型 SVOO', value: 3, color: '#EF4444' },
    ],
    caption: '英文にあらわれる文型のおおよその割合の目安。SVO・SV・SVC の三つでほとんどを占める。SVOO と SVOC は使える動詞が give・buy・call・make などに限られるため数は少ないが、入試では書きかえ問題として集中的に問われる',
  },

  // s067：第2文型 SVC（S＝C）。等しいしるしの付いた二辺がイコールの関係を表す
  lf_eigoext02_067: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 8, y: 0 },
      { x: 4, y: 7 },
    ],
    sideLabels: ['S（主語）', 'V（動詞）', 'C（補語）'],
    equalSides: [[0, 2]],
    fill: true,
    caption: '第2文型 SVC。同じしるしの付いた二辺（S と C）がイコールの関係にあることを表す。He is a doctor. なら He ＝ a doctor。C になれるのは名詞と形容詞で、副詞は入れない',
  },

  // s069：第3文型 SVO（S≠O）。s067 の図と見くらべる
  lf_eigoext02_069: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 8, y: 0 },
      { x: 4, y: 7 },
    ],
    sideLabels: ['S（主語）', 'V（動詞）', 'O（目的語）'],
    fill: true,
    caption: '第3文型 SVO。第2文型の図とちがって等しいしるしが付いていない。I like dogs. で I ≠ dogs であるように、S と O はイコールにならない。ここが SVC との唯一の見分け方になる',
  },

  // s073：第4文型 SVOO の語順（人が先・ものがあと）
  lf_eigoext02_073: {
    kind: 'polygon',
    points: [
      { x: 0, y: 10 },
      { x: 10, y: 10 },
      { x: 10, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['①S 主語', '②V 動詞', '③O1 人（〜に）', '④O2 もの（〜を）'],
    fill: true,
    caption: '第4文型 SVOO の語順。③人→④ものの順で、入れかえられない（× He gave a book me.）。③と④はイコールにならないので、O＝C になる第5文型と区別できる',
  },

  // s074：SVOO → SVO＋to＋人 への書きかえ
  lf_eigoext02_074: {
    kind: 'polygon',
    points: [
      { x: 0, y: 10 },
      { x: 10, y: 10 },
      { x: 10, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['①S 主語', '②V 動詞', '③O もの（〜を）', '④to＋人（〜に）'],
    fill: true,
    caption: '書きかえた形（第3文型）。人とものの順が入れかわり、人の前に to が付く。to をとるのは give・send・show・teach・tell・lend・pass など「相手にわたす・届ける」仲間',
  },

  // s075：SVOO → SVO＋for＋人 への書きかえ（s074 と対で見る）
  lf_eigoext02_075: {
    kind: 'polygon',
    points: [
      { x: 0, y: 10 },
      { x: 10, y: 10 },
      { x: 10, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['①S 主語', '②V 動詞', '③O もの（〜を）', '④for＋人（〜のために）'],
    fill: true,
    caption: '同じ書きかえでも、前置詞が for になる型。for をとるのは buy・make・cook・get・find など「相手のために作る・手に入れる」仲間で数が少ないので、こちらを丸ごと覚えて残りは to とする',
  },

  // s077：第5文型 SVOC（O＝C）
  lf_eigoext02_077: {
    kind: 'polygon',
    points: [
      { x: 0, y: 10 },
      { x: 10, y: 10 },
      { x: 10, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['①S 主語', '②V 動詞', '③O 目的語', '④C 補語'],
    equalSides: [[2, 3]],
    fill: true,
    caption: '第5文型 SVOC の語順。同じしるしの付いた③と④がイコールの関係にある（We call him Ken. なら him ＝ Ken）。第4文型では③と④がイコールにならないので、「＝」を書いて確かめれば必ず区別できる',
  },
};
