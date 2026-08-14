import type { Figure } from './figures';

// 高校受験 国語「漢文」拡張ユニット（koko_kokugo_s306〜koko_kokugo_s335）の図解。
// キーは lessons-koko-kokugo-ext09.ts の figureId と対応（30課中13課）。
// 漢文は「白文の字の並び」と「読む順」がずれることが最大のつまずきなので、
// 数直線の目盛りを「白文で上から何字目か」、点のラベルを「その字＋読む順の丸数字」として、
// 返り点による読む順の飛び方を目で追えるようにしてある。
// 白抜きの点（open: true）は置き字＝読まない字。
export const lessonFigsKokoKokugoExt09: Record<string, Figure> = {
  // s307：語順のちがい。不入虎穴 → 虎穴に入らずんば
  lf_kokokokugoext09_307: {
    kind: 'numberLine',
    min: 1,
    max: 4,
    step: 1,
    points: [
      { x: 1, label: '不④' },
      { x: 2, label: '入③' },
      { x: 3, label: '虎①' },
      { x: 4, label: '穴②' },
    ],
    caption:
      '白文「不入虎穴」（虎穴に入らずんば／後漢書）。下の目盛りは白文で上から何字目か、点のラベルの丸数字が読む順。三字目→四字目→二字目→一字目と戻るので、返り点が必要になる',
  },

  // s309：置き字。學而時習之 → 学びて時に之を習ふ
  lf_kokokokugoext09_309: {
    kind: 'numberLine',
    min: 1,
    max: 5,
    step: 1,
    points: [
      { x: 1, label: '學①' },
      { x: 2, label: '而×', open: true },
      { x: 3, label: '時②' },
      { x: 4, label: '習④' },
      { x: 5, label: '之③' },
    ],
    caption:
      '白文「學而時習之」（学びて時に之を習ふ／論語・学而）。白抜きの「而」は置き字で読まない。ただし意味は消えず、送りがなの「て」に姿を変えている。返り点の距離を数えるときは一字として数える',
  },

  // s312：レ点。溫故而知新 → 故きを温めて新しきを知る
  lf_kokokokugoext09_312: {
    kind: 'numberLine',
    min: 1,
    max: 5,
    step: 1,
    points: [
      { x: 1, label: '溫②' },
      { x: 2, label: '故①' },
      { x: 3, label: '而×', open: true },
      { x: 4, label: '知④' },
      { x: 5, label: '新③' },
    ],
    caption:
      '訓読文「溫レ故而知レ新」（故きを温めて新しきを知る／論語・為政）。レ点は「すぐ下の一字を読んでから戻れ」の印。故→温、新→知と一字ずつ返る。「而」は置き字',
  },

  // s313：一二点。有朋自遠方來 → 朋有り遠方より来る
  lf_kokokokugoext09_313: {
    kind: 'numberLine',
    min: 1,
    max: 6,
    step: 1,
    points: [
      { x: 1, label: '有②' },
      { x: 2, label: '朋①' },
      { x: 3, label: '自⑤' },
      { x: 4, label: '遠③' },
      { x: 5, label: '方④' },
      { x: 6, label: '來⑥' },
    ],
    caption:
      '訓読文「有レ朋自二遠方一來」（朋有り遠方より来る／論語・学而）。一二点は二字以上へだてて返る印。三字目の「自」が五番目に読まれるのが山場。「有」はレ点で一字だけ返る',
  },

  // s314：上中下点。楚人有鬻盾與矛者 → 楚人に盾と矛とを鬻ぐ者有り
  lf_kokokokugoext09_314: {
    kind: 'numberLine',
    min: 1,
    max: 8,
    step: 1,
    points: [
      { x: 1, label: '楚①' },
      { x: 2, label: '人②' },
      { x: 3, label: '有⑧' },
      { x: 4, label: '鬻⑥' },
      { x: 5, label: '盾③' },
      { x: 6, label: '與④' },
      { x: 7, label: '矛⑤' },
      { x: 8, label: '者⑦' },
    ],
    caption:
      '訓読文「楚人有下鬻二盾與矛一者上」（楚人に盾と矛とを鬻ぐ者有り／韓非子・矛盾）。内側の一二点（鬻←矛）を読み終えてから、外側の下点「有」へ返る。「有」は最後の八番目',
  },

  // s315：一レ点。後則爲人所制 → 後るれば則ち人の制する所と為る
  lf_kokokokugoext09_315: {
    kind: 'numberLine',
    min: 1,
    max: 6,
    step: 1,
    points: [
      { x: 1, label: '後①' },
      { x: 2, label: '則②' },
      { x: 3, label: '爲⑥' },
      { x: 4, label: '人③' },
      { x: 5, label: '所⑤' },
      { x: 6, label: '制④' },
    ],
    caption:
      '訓読文「後則爲二人所一レ制」（後るれば則ち人の制する所と為る／史記・項羽本紀）。「所」の一レ点は「まず下の制、次に所、そのあと二点の爲へ返れ」の合図。レが先、一があと',
  },

  // s317：一二点が二組。以五十歩笑百歩 → 五十歩を以て百歩を笑ふ
  lf_kokokokugoext09_317: {
    kind: 'numberLine',
    min: 1,
    max: 7,
    step: 1,
    points: [
      { x: 1, label: '以④' },
      { x: 2, label: '五①' },
      { x: 3, label: '十②' },
      { x: 4, label: '歩③' },
      { x: 5, label: '笑⑦' },
      { x: 6, label: '百⑤' },
      { x: 7, label: '歩⑥' },
    ],
    caption:
      '訓読文「以二五十歩一笑二百歩一」（五十歩を以て百歩を笑ふ／孟子・梁恵王上）。一二点が二組あるが入れ子ではないので、前の組を読み切ってから次の組へ進む',
  },

  // s320：再読文字は二度読む。趙且伐燕 → 趙且に燕を伐たんとす
  lf_kokokokugoext09_320: {
    kind: 'numberLine',
    min: 1,
    max: 4,
    step: 1,
    points: [
      { x: 1, label: '趙①' },
      { x: 2, label: '且②⑤' },
      { x: 3, label: '伐④' },
      { x: 4, label: '燕③' },
    ],
    caption:
      '「趙且に燕を伐たんとす」（戦国策・燕策）。再読文字「且」だけが二番目と五番目の二回読まれる。一度目は副詞「まさニ」（漢字）、二度目は返ってきて「ントす」（ひらがな）',
  },

  // s323：再読文字「未」。吾未見剛者 → 吾未だ剛者を見ず
  lf_kokokokugoext09_323: {
    kind: 'numberLine',
    min: 1,
    max: 5,
    step: 1,
    points: [
      { x: 1, label: '吾①' },
      { x: 2, label: '未②⑥' },
      { x: 3, label: '見⑤' },
      { x: 4, label: '剛③' },
      { x: 5, label: '者④' },
    ],
    caption:
      '訓読文「吾未レ見二剛者一」（吾未だ剛者を見ず／論語・公冶長）。「未」は二番目に「いまダ」、六番目に返って「ず」と読む。二度目を落とすと意味が正反対になる',
  },

  // s326：二重否定。於物無不陷也 → 物に於いて陥さざる無きなり
  lf_kokokokugoext09_326: {
    kind: 'numberLine',
    min: 1,
    max: 6,
    step: 1,
    points: [
      { x: 1, label: '於×', open: true },
      { x: 2, label: '物①' },
      { x: 3, label: '無④' },
      { x: 4, label: '不③' },
      { x: 5, label: '陷②' },
      { x: 6, label: '也⑤' },
    ],
    caption:
      '訓読文「於レ物無二不一レ陷也」（物に於いて陥さざる無きなり／韓非子・矛盾）。二重否定「無不」は「〜しないものはない＝すべて〜する」という強い肯定。白抜きの「於」は置き字',
  },

  // s329：使役。令趙王鼓瑟 → 趙王をして瑟を鼓せしむ
  lf_kokokokugoext09_329: {
    kind: 'numberLine',
    min: 1,
    max: 5,
    step: 1,
    points: [
      { x: 1, label: '令⑤' },
      { x: 2, label: '趙①' },
      { x: 3, label: '王②' },
      { x: 4, label: '鼓④' },
      { x: 5, label: '瑟③' },
    ],
    caption:
      '訓読文「令二趙王鼓一レ瑟」（趙王をして瑟を鼓せしむ／史記・廉頗藺相如列伝）。使役の「令」は日本語では助動詞「しむ」になるので、いちばん最後に読む',
  },

  // s330：受身。勞力者治於人 → 力を労する者は人に治めらる
  lf_kokokokugoext09_330: {
    kind: 'numberLine',
    min: 1,
    max: 6,
    step: 1,
    points: [
      { x: 1, label: '勞②' },
      { x: 2, label: '力①' },
      { x: 3, label: '者③' },
      { x: 4, label: '治⑤' },
      { x: 5, label: '於×', open: true },
      { x: 6, label: '人④' },
    ],
    caption:
      '訓読文「勞レ力者治二於人一」（力を労する者は人に治めらる／孟子・滕文公上）。受身の「於」は白抜き＝読まないが、「〜に…らる」と受身に読むための目印。前半の「治レ人（人を治む）」と対になる',
  },

  // s331：一二点が二組（矛盾）。以子之矛陷子之盾
  lf_kokokokugoext09_331: {
    kind: 'numberLine',
    min: 1,
    max: 8,
    step: 1,
    points: [
      { x: 1, label: '以④' },
      { x: 2, label: '子①' },
      { x: 3, label: '之②' },
      { x: 4, label: '矛③' },
      { x: 5, label: '陷⑧' },
      { x: 6, label: '子⑤' },
      { x: 7, label: '之⑥' },
      { x: 8, label: '盾⑦' },
    ],
    caption:
      '訓読文「以二子之矛一陷二子之盾一」（子の矛を以て子の盾を陥さば／韓非子・矛盾）。客が商人に投げかけた問い。一二点が二組で、前の組を読み切ってから次の組へ進む',
  },
};
