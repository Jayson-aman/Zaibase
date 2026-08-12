import type { Figure } from './figures';

// 高校受験 英語「会話文・リスニング・英作文」拡張ユニット
// （koko_eigo_s376〜koko_eigo_s415）の教科書用図解。
// キーは lessons-koko-eigo-ext11.ts の figureId と対応（40課中19課に付与）。
// このユニットは「語順」「道順」「時刻」「語数」という、図にすると一目でわかる要素が多いので、
//   coordinate … 道案内・リスニングの地図（通りを線分、建物を点で表す）
//   numberLine … 時刻・順序・丁寧さの段階
//   barChart   … 英作文の語数配分（本文の模範解答と語数を完全に一致させてある）
//   polygon    … 英作文・会話文の「骨組み」（四角形の辺を時計回りにたどると英語の並びになる）
// に絞って作図した。polygon の sideLabels は points[i]–points[i+1] の順、すなわち
// 下辺 → 右辺 → 上辺 → 左辺 の順に並ぶので、上→右→下→左（時計回り）に読ませたい場合は
// 配列を ['③下', '②右', '①上', '④左'] の順に書いてある。
// barChart の各棒の合計は、本文に載せた模範解答の語数を実際に数えた値と一致している。
export const lessonFigsKokoEigoExt11: Record<string, Figure> = {
  // s376：会話文を読む前に確認する4点（場所・人物・目的・設問）
  lf_kokoeigoext11_376: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 10, y: 10 },
      { x: 0, y: 10 },
    ],
    sideLabels: ['③何のために（目的）', '②だれとだれ（人物）', '①どこで（場所）', '④設問は何を聞いているか'],
    fill: true,
    caption: '会話文を読む前の30秒でそろえる4点。上（①場所）→右（②人物）→下（③目的）→左（④設問）と時計回りに確認する。①〜③は冒頭の数行、④は設問文だけで分かるので、本文を精読する前に終えられる',
  },

  // s379：道案内の基本（2区画直進 → 2つ目の角を右折 → 左手に郵便局）
  lf_kokoeigoext11_379: {
    kind: 'coordinate',
    xRange: [0, 5],
    yRange: [0, 4],
    segments: [
      [
        { x: 1, y: 0 },
        { x: 1, y: 4 },
      ],
      [
        { x: 0, y: 1 },
        { x: 5, y: 1 },
      ],
      [
        { x: 0, y: 2 },
        { x: 5, y: 2 },
      ],
      [
        { x: 0, y: 3 },
        { x: 5, y: 3 },
      ],
    ],
    points: [
      { x: 1, y: 0, label: '現在地' },
      { x: 1, y: 2, label: '2つ目の角' },
      { x: 3, y: 2.5, label: '郵便局' },
      { x: 4, y: 2.5, label: '銀行' },
    ],
    caption: 'Go straight for two blocks and turn right at the second corner. The post office is on your left. It is next to the bank. 現在地から北へ進み、交差点を2つ数えて右折（東へ）。東を向くと左手は北側なので、郵便局は通りの北側にある',
  },

  // s380：目印と所要時間（信号を右折 → 図書館は公園の向かい）
  lf_kokoeigoext11_380: {
    kind: 'coordinate',
    xRange: [0, 5],
    yRange: [0, 4],
    segments: [
      [
        { x: 0, y: 0 },
        { x: 0, y: 4 },
      ],
      [
        { x: 0, y: 3 },
        { x: 5, y: 3 },
      ],
      [
        { x: 0, y: 0 },
        { x: 5, y: 0 },
      ],
    ],
    points: [
      { x: 0, y: 0, label: '現在地' },
      { x: 0, y: 3, label: '信号' },
      { x: 3, y: 3.4, label: '図書館' },
      { x: 3, y: 2.6, label: '公園' },
    ],
    caption: 'Go straight to the traffic light and turn right. The library is across from the park. It takes about ten minutes on foot. 図書館と公園は通り（y＝3の道）をはさんで向かい合っているので across from を使う。同じ側の正面なら in front of になる',
  },

  // s381：レストランの会話の四段階
  lf_kokoeigoext11_381: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 10, y: 10 },
      { x: 0, y: 10 },
    ],
    sideLabels: ['③食事中 How is everything?', '②注文 May I take your order?', '①入店 How many people?', '④会計 Check, please.'],
    fill: true,
    caption: 'レストランの会話は上（①入店）→右（②注文）→下（③食事中）→左（④会計）の順に時計回りに進む。空所がどの段階にあるかが分かれば、入る文はほぼ一つに決まる',
  },

  // s382：学校の一日（時刻）
  lf_kokoeigoext11_382: {
    kind: 'numberLine',
    min: 8,
    max: 17,
    step: 1,
    points: [
      { x: 8, label: 'homeroom 8:30' },
      { x: 9, label: 'first period' },
      { x: 12, label: 'lunch' },
      { x: 15, label: 'school is over' },
      { x: 16, label: 'club activities' },
    ],
    caption: '学校を舞台にした会話に出る時刻の目安。時刻は「時＋分」を続けて読む（eight thirty＝8時30分）。half past eight も8時30分、a quarter to nine は9時15分前＝8時45分',
  },

  // s385：依頼の丁寧さの段階
  lf_kokoeigoext11_385: {
    kind: 'numberLine',
    min: 0,
    max: 5,
    step: 1,
    points: [
      { x: 1, label: 'Can you ~?' },
      { x: 2, label: 'Will you ~?' },
      { x: 3, label: 'Could you ~?' },
      { x: 4, label: 'Would you ~?' },
    ],
    caption: '依頼表現の丁寧さの段階（右へ行くほど丁寧）。助動詞を過去形（could・would）にすると一段丁寧になるが、過去の意味は持たない。許可を求めるときは主語を I にして Can I ＜ Could I ＜ May I の順になる',
  },

  // s389：空所補充で使う手がかりの優先順位
  lf_kokoeigoext11_389: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 10, y: 10 },
      { x: 0, y: 10 },
    ],
    sideLabels: ['③場面（店・道案内・電話）', '②直前の文', '①直後の応答（最優先）', '④話し手はどちらか'],
    fill: true,
    caption: '会話文の空所補充で使う手がかりを、強い順に上（①直後）→右（②直前）→下（③場面）→左（④話し手）と時計回りに並べたもの。①直後の返事（Yes, I did. / Because ~. / Sure.）だけで決まる問題が最も多い',
  },

  // s393：リスニングの先読み四手順
  lf_kokoeigoext11_393: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 10, y: 10 },
      { x: 0, y: 10 },
    ],
    sideLabels: ['③数字・固有名詞に印', '②選択肢のちがう部分に印', '①設問文を読む', '④聞きながらメモ・矢印'],
    fill: true,
    caption: '放送前の先読みは上（①設問文）→右（②選択肢の相違点）→下（③数字と固有名詞）→左（④メモの準備）の順。共通している語は聞く必要がなく、ちがっている部分だけが答えを分ける',
  },

  // s394：予定の時刻と、20分遅れた実際の時刻
  lf_kokoeigoext11_394: {
    kind: 'numberLine',
    min: 0,
    max: 60,
    step: 10,
    points: [
      { x: 15, label: '予定 7:15' },
      { x: 35, label: '実際 7:35' },
    ],
    caption: '7時台の分を数直線にしたもの。The train was going to leave at seven fifteen, but it was twenty minutes late. 予定の7:15に20分を足して、実際の出発は7:35。聞こえた数字がそのまま答えになるとはかぎらない',
  },

  // s395：リスニングの地図問題（2つ目の角を左折）
  lf_kokoeigoext11_395: {
    kind: 'coordinate',
    xRange: [0, 4],
    yRange: [0, 3],
    segments: [
      [
        { x: 2, y: 0 },
        { x: 2, y: 3 },
      ],
      [
        { x: 0, y: 1 },
        { x: 4, y: 1 },
      ],
      [
        { x: 0, y: 2 },
        { x: 4, y: 2 },
      ],
    ],
    points: [
      { x: 2, y: 0, label: '現在地' },
      { x: 2, y: 1, label: '1つ目の角' },
      { x: 2, y: 2, label: '2つ目の角' },
      { x: 0.6, y: 2, label: 'B（正解）' },
      { x: 0.6, y: 1, label: 'A（誤答）' },
    ],
    caption: 'Go straight and turn left at the second corner. 現在地から北へ進み、交差点を2つ数えて左折すると西へ向かうので、目的地はBの側にある。1つ目の角で曲がるとAに行き着く。first と second の数えまちがいが最大の失点原因',
  },

  // s397：待ち合わせ時刻の変更（10:00 → 9:30）
  lf_kokoeigoext11_397: {
    kind: 'numberLine',
    min: 9,
    max: 12,
    step: 1,
    points: [
      { x: 9.5, label: '新 9:30' },
      { x: 10, label: '元 10:00' },
      { x: 11, label: '映画 11:00' },
    ],
    caption: '長い対話では最初の予定が変更される。Can we make it thirty minutes earlier? なら10:00から30分引いて9:30。earlier は引き算、later は足し算。メモは上書きせず矢印でつなぐと最終形が一目でわかる',
  },

  // s398：和文英訳の骨組み S V O M
  lf_kokoeigoext11_398: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 10, y: 10 },
      { x: 0, y: 10 },
    ],
    sideLabels: ['③O 何を', '②V どうする', '①S だれが', '④M いつ・どこで'],
    fill: true,
    caption: '英語の骨組み。上（①S だれが）→右（②V どうする）→下（③O 何を）→左（④M いつ・どこで）と時計回りにたどると英語の語順になる。日本語は「いつ・どこで」が先に来るので、この逆転が和文英訳の要',
  },

  // s400：動詞のあとの並び（O → 場所 → 時）
  lf_kokoeigoext11_400: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 10, y: 10 },
      { x: 0, y: 10 },
    ],
    sideLabels: ['③場所 どこで', '②O 何を', '①V どうする', '④時 いつ'],
    fill: true,
    caption: '動詞から後ろの並び。上（①V）→右（②O）→下（③場所）→左（④時）と時計回りにたどる。例）I played soccer in the park yesterday. 場所と時が両方あるときは必ず場所が先',
  },

  // s402：第4文型（V＋人＋物）の並び
  lf_kokoeigoext11_402: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 10, y: 10 },
      { x: 0, y: 10 },
    ],
    sideLabels: ['③物 何を', '②人 だれに', '①V give・show・tell・make', '④M いつ・どこで'],
    fill: true,
    caption: '第4文型の並べかた。上（①V）→右（②人）→下（③物）→左（④M）の順。例）He gave me a nice present yesterday. 物 → 人 の順にしたいときは前置詞が必要で、give・show・tell・send は to、buy・make・cook は for を使う',
  },

  // s403：疑問文の語順
  lf_kokoeigoext11_403: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 10, y: 10 },
      { x: 0, y: 10 },
    ],
    sideLabels: ['③S 主語', '②do・does・did・be・助動詞', '①疑問詞 What・When・Where', '④動詞（原形）＋α'],
    fill: true,
    caption: '疑問文の四つの箱。上（①疑問詞）→右（②助動詞）→下（③主語）→左（④動詞）の順に埋める。例）What did you do last Sunday? 一方、文中に組みこまれた間接疑問では②が消え、疑問詞＋主語＋動詞の平叙文の語順に戻る（Do you know where he lives?）',
  },

  // s406：条件英作文28語の配分（模範解答と一致）
  lf_kokoeigoext11_406: {
    kind: 'barChart',
    xLabel: '文',
    yLabel: '語数',
    yMax: 12,
    bars: [
      { label: '1文目', value: 9, color: '#0EA5E9' },
      { label: '2文目', value: 10, color: '#0284C7' },
      { label: '3文目', value: 9, color: '#0369A1' },
    ],
    caption: '「25語以上30語以内」の条件英作文の設計図。本文の模範解答 My town has a big park near the station.（9語）／Many people run there or walk their dogs every morning.（10語）／I like the park because it is always quiet.（9語）で合計28語になり、条件を満たす',
  },

  // s411：自由英作文の四文の型
  lf_kokoeigoext11_411: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 10, y: 10 },
      { x: 0, y: 10 },
    ],
    sideLabels: ['③理由② Second, ~', '②理由① First, ~', '①意見 I think (that) ~', '④まとめ So ~ / For these reasons, ~'],
    fill: true,
    caption: '自由英作文の四文の型。上（①意見）→右（②理由①）→下（③理由②）→左（④まとめ）と時計回りに進む。テーマが変わっても型は変わらないので、First, Second, So の三語を先に書いてしまえば、あとは空欄をうめるだけになる',
  },

  // s412：30語の配分（模範解答と一致）
  lf_kokoeigoext11_412: {
    kind: 'barChart',
    xLabel: '文の役割',
    yLabel: '語数',
    yMax: 12,
    bars: [
      { label: '意見', value: 8, color: '#0EA5E9' },
      { label: '理由①', value: 8, color: '#0284C7' },
      { label: '理由②', value: 8, color: '#0369A1' },
      { label: 'まとめ', value: 6, color: '#64748B' },
    ],
    caption: '「30語程度」の自由英作文の配分。本文の模範解答 I think students should study English every day.（8語）／First, we can learn new words more easily.（8語）／Second, English is useful when we travel abroad.（8語）／So I study English every day.（6語）で合計30語ちょうどになる',
  },

  // s415：50語の配分（模範解答と一致）
  lf_kokoeigoext11_415: {
    kind: 'barChart',
    xLabel: '文の役割',
    yLabel: '語数',
    yMax: 16,
    bars: [
      { label: '意見', value: 10, color: '#0EA5E9' },
      { label: '理由①', value: 13, color: '#0284C7' },
      { label: '理由②', value: 14, color: '#0369A1' },
      { label: 'まとめ', value: 13, color: '#64748B' },
    ],
    caption: '「50語程度」の自由英作文の配分。本文の模範解答 I agree that all students should wear a school uniform.（10語）／First, we do not have to think about what to wear every morning.（13語）／Second, a uniform makes us feel that we are members of the same school.（14語）／For these two reasons, I think a school uniform is a good idea.（13語）で合計50語ちょうど',
  },
};
