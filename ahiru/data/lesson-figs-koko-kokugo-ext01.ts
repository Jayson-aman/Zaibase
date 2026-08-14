import type { Figure } from './figures';

// 高校受験 国語「漢字・語彙」拡張ユニット（koko_kokugo_s001〜koko_kokugo_s040）の教科書用図解。
// キーは lessons-koko-kokugo-ext01.ts の figureId と対応。
// 国語は図解が馴染みにくい教科なので、「分類の割合」「意味の広がり（二軸）」「年代」「数値」など
// 図にすることで本当に理解が進む箇所にだけ付けてある（40課中17課）。
export const lessonFigsKokoKokugoExt01: Record<string, Figure> = {
  // s001：入試の書き取りが対象とする漢字の総量（小学校1026＋中学校1110＝常用漢字2136）
  lf_kokokokugoext01_001: {
    kind: 'barChart',
    yLabel: '字数',
    yMax: 2300,
    bars: [
      { label: '小学校', value: 1026, color: '#0EA5E9' },
      { label: '中学校', value: 1110, color: '#0284C7' },
      { label: '常用漢字', value: 2136, color: '#0369A1' },
    ],
    caption:
      '入試の書き取りが対象とする範囲。小学校で習う1026字と中学校で習う1110字を合わせて、常用漢字2136字になる。範囲は有限なので、三年かけて確実につぶせる量である',
  },

  // s004：同音異義語「対象・対照・対称」の意味を二軸に配置する
  lf_kokokokugoext01_004: {
    kind: 'coordinate',
    xRange: [-5, 5],
    yRange: [-5, 5],
    points: [
      { x: -3, y: -3, label: '対象' },
      { x: 3, y: -2, label: '対照' },
      { x: 3, y: 3, label: '対称' },
    ],
    caption:
      '横軸は「一つのものを指す（左）／二つを並べて言う（右）」、縦軸は「人の行為・関心（下）／形やつりあい（上）」。対象＝はたらきかける相手、対照＝二つを比べる、対称＝形がつりあう',
  },

  // s005：同訓異字「おさめる」四字の使い分けを四象限に置く
  lf_kokokokugoext01_005: {
    kind: 'coordinate',
    xRange: [-5, 5],
    yRange: [-5, 5],
    points: [
      { x: -3, y: -3, label: '収める' },
      { x: 3, y: -3, label: '納める' },
      { x: 3, y: 3, label: '治める' },
      { x: -3, y: 3, label: '修める' },
    ],
    caption:
      '横軸は「自分の側（左）／相手・外の世界（右）」、縦軸は「もの・お金（下）／秩序・学問（上）」。収＝手に入れる、納＝相手に渡す、治＝乱れをしずめる、修＝身につける',
  },

  // s007：二字熟語の読み方（音訓の組み合わせ）のおおよその割合
  lf_kokokokugoext01_007: {
    kind: 'pieChart',
    slices: [
      { label: '音＋音', value: 68, color: '#0EA5E9' },
      { label: '訓＋訓', value: 20, color: '#0369A1' },
      { label: '重箱読み', value: 7, color: '#16A34A' },
      { label: '湯桶読み', value: 5, color: '#F59E0B' },
    ],
    caption:
      '二字熟語の読み方のおおよその内訳。音＋音が圧倒的に多く、重箱読み（音＋訓）と湯桶読み（訓＋音）は合わせても一割ほど。少数派だからこそ入試で問われる',
  },

  // s009：二字熟語の構成 五分類のおおよその割合
  lf_kokokokugoext01_009: {
    kind: 'pieChart',
    slices: [
      { label: '修飾', value: 35, color: '#0EA5E9' },
      { label: '似た意味', value: 30, color: '#0369A1' },
      { label: '目的・補語', value: 15, color: '#16A34A' },
      { label: '反対', value: 12, color: '#F59E0B' },
      { label: '主述', value: 8, color: '#64748B' },
    ],
    caption:
      '二字熟語の構成のおおよその内訳。修飾と似た意味の重ねで六割以上を占める。判定が最も速い「反対」から先に処理し、残りを返り読みで振り分けるのが手順',
  },

  // s012：三字熟語の構成タイプのおおよその割合
  lf_kokokokugoext01_012: {
    kind: 'pieChart',
    slices: [
      { label: '二字＋一字', value: 45, color: '#0EA5E9' },
      { label: '一字＋二字', value: 40, color: '#0369A1' },
      { label: '一字×3の並立', value: 8, color: '#16A34A' },
      { label: '三字で一語', value: 7, color: '#F59E0B' },
    ],
    caption:
      '三字熟語の構成のおおよその内訳。ほとんどが「二字＋一字（積極的・可能性）」か「一字＋二字（大自然・不本意）」なので、切れ目が上か下かを見きわめれば大半は判定できる',
  },

  // s015：数字を含む四字熟語を、含まれる数字の位置に置く
  lf_kokokokugoext01_015: {
    kind: 'numberLine',
    min: 1,
    max: 10,
    step: 1,
    points: [
      { x: 1, label: '一朝一夕' },
      { x: 4, label: '四面楚歌' },
      { x: 7, label: '七転八倒' },
      { x: 10, label: '十人十色' },
    ],
    caption:
      '数字を含む四字熟語を、その数字の位置に並べた図。数字入りの語は「一」を含むものが最も多い。数字は正確な数ではなく「わずか」「たくさん」を表すことが多い（千載一遇の千など）',
  },

  // s017：故事に由来する語の、もとになった時代（紀元前の年代）
  lf_kokokokugoext01_017: {
    kind: 'numberLine',
    min: -600,
    max: 0,
    step: 100,
    points: [
      { x: -550, label: '温故知新（論語）' },
      { x: -470, label: '臥薪嘗胆（呉越）' },
      { x: -300, label: '五十歩百歩（孟子）' },
      { x: -202, label: '四面楚歌（垓下）' },
    ],
    caption:
      '故事成語のもとになったおおよその年代（マイナスは紀元前）。春秋時代の論語から、戦国時代の孟子、そして漢が楚を破った垓下の戦いまで、五百年ほどの中国史の中で生まれている',
  },

  // s021：体の部分を使った慣用句は、部位によって数がちがう
  lf_kokokokugoext01_021: {
    kind: 'barChart',
    xLabel: '体の部分',
    yLabel: '慣用句の数（目安）',
    yMax: 45,
    bars: [
      { label: '目', value: 40, color: '#0EA5E9' },
      { label: '手', value: 38, color: '#0EA5E9' },
      { label: '口', value: 30, color: '#0284C7' },
      { label: '足', value: 28, color: '#0284C7' },
      { label: '頭', value: 22, color: '#0369A1' },
      { label: '耳', value: 18, color: '#0369A1' },
    ],
    caption:
      '体の部分を使った慣用句の数のおおよその目安。目と手が突出して多い。見ること（判断）と働くこと（行動）が、人の生活の中心だったからだと考えられる',
  },

  // s024：反対の教えを説くことわざを、行動の指針の軸に置く
  lf_kokokokugoext01_024: {
    kind: 'numberLine',
    min: -5,
    max: 5,
    step: 1,
    points: [
      { x: -4, label: '善は急げ' },
      { x: -2, label: '思い立ったが吉日' },
      { x: 2, label: '急がば回れ' },
      { x: 4, label: '待てば海路の日和あり' },
    ],
    caption:
      '左へ行くほど「すぐ動け」、右へ行くほど「あせらず待て」。正反対の教えが両方ことわざとして残っているのは、ことわざが絶対の真理ではなく、場面に応じて使い分ける知恵だからである',
  },

  // s027：代表的な故事成語の出典（どの古典から生まれたか）
  lf_kokokokugoext01_027: {
    kind: 'barChart',
    xLabel: '出典',
    yLabel: '語数（目安）',
    yMax: 14,
    bars: [
      { label: '史記', value: 12, color: '#0EA5E9' },
      { label: '韓非子', value: 8, color: '#0284C7' },
      { label: '戦国策', value: 7, color: '#0284C7' },
      { label: '論語', value: 6, color: '#0369A1' },
      { label: '孟子', value: 5, color: '#0369A1' },
      { label: '列子', value: 4, color: '#64748B' },
    ],
    caption:
      '代表的な故事成語およそ60語を出典別に数えた目安。歴史書である史記が最も多い（四面楚歌・背水の陣・完璧）。韓非子・戦国策・列子は寓話、論語・孟子は思想家の言葉が出典になる',
  },

  // s030：打消の接頭語 四種のおおよその使用割合
  lf_kokokokugoext01_030: {
    kind: 'pieChart',
    slices: [
      { label: '不', value: 55, color: '#0EA5E9' },
      { label: '無', value: 25, color: '#0369A1' },
      { label: '未', value: 12, color: '#16A34A' },
      { label: '非', value: 8, color: '#F59E0B' },
    ],
    caption:
      '打消の接頭語がつく語の内訳のおおよその目安。「不」が半分以上を占めるが、だからといって何にでも付けてよいわけではない。まず「まだ」が付くか（未）を試すのが判定の第一歩',
  },

  // s032：類義語「心配」のグループを、強さと場面の二軸に配置する
  lf_kokokokugoext01_032: {
    kind: 'coordinate',
    xRange: [-5, 5],
    yRange: [-5, 5],
    points: [
      { x: -4, y: -1, label: '気がかり' },
      { x: -3, y: -3, label: '不安' },
      { x: -1, y: 0, label: '心配' },
      { x: 3, y: 2, label: '懸念' },
      { x: 4, y: 4, label: '危惧' },
    ],
    caption:
      '横軸は「話し言葉・日常（左）／書き言葉・改まった場面（右）」、縦軸は「気持ちが弱い・漠然（下）／強い・特定の事柄について（上）」。同じ「心配」でも、文体に合う語は一つに決まる',
  },

  // s034：国語辞典の見出し語に占める語種のおおよその割合
  lf_kokokokugoext01_034: {
    kind: 'pieChart',
    slices: [
      { label: '漢語', value: 47, color: '#0EA5E9' },
      { label: '和語', value: 35, color: '#0369A1' },
      { label: '外来語', value: 10, color: '#16A34A' },
      { label: '混種語', value: 8, color: '#F59E0B' },
    ],
    caption:
      '国語辞典の見出し語に占める語種のおおよその割合。語の数では漢語が最も多い。ただし日常会話で実際に使う回数では和語のほうが多く、「数」と「使用頻度」は一致しない',
  },

  // s035：同じ「泊まる場所」を表す語を、硬さと意味の広さの二軸に置く
  lf_kokokokugoext01_035: {
    kind: 'coordinate',
    xRange: [-5, 5],
    yRange: [-5, 5],
    points: [
      { x: -3, y: -2, label: 'やど（和語）' },
      { x: 2, y: 2, label: '旅館（漢語）' },
      { x: 0, y: 3, label: 'ホテル（外来語）' },
      { x: 4, y: -1, label: '宿泊施設（漢語）' },
    ],
    caption:
      '横軸は「やわらかい（左）／かたい（右）」、縦軸は「意味が広い（下）／限定的（上）」。和語のやどは広くやわらかく、旅館は日本式、ホテルは洋式に限定される。硬さと広さは別の軸である',
  },

  // s038：評論の骨組みになる語を、具体⇔抽象・特殊⇔普遍の二軸に置く
  lf_kokokokugoext01_038: {
    kind: 'coordinate',
    xRange: [-5, 5],
    yRange: [-5, 5],
    points: [
      { x: -4, y: 0, label: '具体' },
      { x: 4, y: 0, label: '抽象' },
      { x: 0, y: -4, label: '特殊・個別' },
      { x: 0, y: 4, label: '普遍・一般' },
    ],
    caption:
      '評論文が動く二つの軸。横軸は具体⇔抽象、縦軸は特殊⇔普遍。多くの評論は左下（具体的なエピソード）から始まり、右上（すべてに当てはまる主張）へ進む。「たとえば」の後は左下、「つまり」の後は右上',
  },

  // s040：高校入試の語彙分野で、どの形式がどれだけ出るか
  lf_kokokokugoext01_040: {
    kind: 'barChart',
    xLabel: '出題形式',
    yLabel: '割合（％・目安）',
    yMax: 50,
    bars: [
      { label: '漢字読み書き', value: 45, color: '#0EA5E9' },
      { label: '語句の意味', value: 20, color: '#0284C7' },
      { label: '慣用句・ことわざ', value: 15, color: '#0369A1' },
      { label: '四字熟語', value: 10, color: '#16A34A' },
      { label: '熟語の構成', value: 10, color: '#64748B' },
    ],
    caption:
      '語彙分野の出題形式別のおおよその割合。半分近くが漢字の読み書きなので、同音異義語の判別と送りがなを固めるのが最も効率がよい。合計は100％になる',
  },
};
