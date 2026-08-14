import type { Figure } from './figures';

// 高校受験 国語「記述問題の書き方」拡張ユニット（koko_kokugo_s336〜koko_kokugo_s375）の教科書用図解。
// キーは lessons-koko-kokugo-ext10.ts の figureId と対応。
// 本ユニットの肝は「どの要素に何点が付くか」なので、
// 配点の内訳（pieChart）・字数や優先順位の大小（barChart）・字数の安全圏（numberLine）に絞って付けてある（40課中18課）。
// 各図の数値は本文中の採点基準・字数と一致させてある。
export const lessonFigsKokoKokugoExt10: Record<string, Figure> = {
  // s336：6点の理由記述の配点内訳（本文の採点基準と一致：2+2+1+1＝6）
  lf_kokokokugoext10_336: {
    kind: 'pieChart',
    slices: [
      { label: '選択肢が増える 2点', value: 2, color: '#0EA5E9' },
      { label: '比較に疲れる 2点', value: 2, color: '#0369A1' },
      { label: '選ぶのをやめる 1点', value: 1, color: '#16A34A' },
      { label: '語尾「〜から。」1点', value: 1, color: '#F59E0B' },
    ],
    caption: '6点の理由記述の配点内訳。合計6点。内容が3項目・語尾が1項目に分かれており、語尾は内容と独立して取れる。「なんとなく七割」ではなく、項目ごとの加点で決まる',
  },

  // s338：記述問題の四大タイプ別のおおよその出題割合
  lf_kokokokugoext10_338: {
    kind: 'pieChart',
    slices: [
      { label: '理由「なぜか」', value: 35, color: '#0EA5E9' },
      { label: '内容説明「どういうことか」', value: 30, color: '#0369A1' },
      { label: '心情「どんな気持ちか」', value: 25, color: '#16A34A' },
      { label: '要約・その他', value: 10, color: '#F59E0B' },
    ],
    caption: '高校入試の記述問題を四大タイプで分けたときのおおよその出題割合。理由と内容説明で約65%を占める。タイプが決まれば語尾と骨組みが自動的に決まる',
  },

  // s341：8点の理由記述の配点内訳（本文の採点基準と一致：2+2+3+1＝8）
  lf_kokokokugoext10_341: {
    kind: 'barChart',
    xLabel: '要素',
    yLabel: '配点（点）',
    yMax: 4,
    bars: [
      { label: '身体の進化ではない', value: 2, color: '#0EA5E9' },
      { label: '用具・練習法・栄養', value: 2, color: '#0369A1' },
      { label: '社会全体の蓄積', value: 3, color: '#DC2626' },
      { label: '語尾', value: 1, color: '#F59E0B' },
    ],
    caption: '8点の理由記述の配点。核となる「社会全体の蓄積」に3点が集中しており、ここを落とすと上限5点になる。具体例（用具・練習法・栄養）は三つ挙げてもまとめて2点',
  },

  // s342：指定字数と、そこに入る要素数の対応（字数÷18＝要素数）
  lf_kokokokugoext10_342: {
    kind: 'barChart',
    xLabel: '指定字数',
    yLabel: '入れるべき要素数',
    yMax: 6,
    bars: [
      { label: '20字', value: 1, color: '#0EA5E9' },
      { label: '40字', value: 2, color: '#0369A1' },
      { label: '60字', value: 3, color: '#0284C7' },
      { label: '80字', value: 4, color: '#16A34A' },
      { label: '100字', value: 5, color: '#F59E0B' },
    ],
    caption: '指定字数から逆算した必要要素数。一要素はおよそ15〜20字なので、字数÷18が目安になる。字数制限は制限ではなく「要素をいくつ入れよ」という設計図である',
  },

  // s343：60字答案の字数配分（17+17+17+5＝56字、60字以内の約93%）
  lf_kokokokugoext10_343: {
    kind: 'barChart',
    xLabel: '答案の部分',
    yLabel: '使う字数',
    yMax: 20,
    bars: [
      { label: '前提・状況', value: 17, color: '#0EA5E9' },
      { label: '直接の原因', value: 17, color: '#0369A1' },
      { label: '核となる内容', value: 17, color: '#DC2626' },
      { label: '語尾', value: 5, color: '#F59E0B' },
    ],
    caption: '六十字型（要素3つ）の字数配分。17×3＋語尾5＝56字で、指定60字の約93%に収まる。語尾が5字を占めることを設計の段階で差し引いておく',
  },

  // s344：字数条件ごとの許容範囲（60字指定の場合）。狙いは51〜57字あたり
  lf_kokokokugoext10_344: {
    kind: 'numberLine',
    min: 30,
    max: 70,
    step: 5,
    segments: [
      { from: 51, to: 60 },
      { from: 54, to: 66 },
    ],
    points: [
      { x: 51, label: '85%' },
      { x: 60, label: '60字' },
      { x: 66, label: '程度の上限' },
    ],
    caption: '「六十字」の指定に対する安全圏。上の帯＝「60字以内」で狙う51〜60字、下の帯＝「60字程度」の許容54〜66字。どちらの形式でも51〜60字に収めれば違反にならない',
  },

  // s346：字数がオーバーしたときに削る優先順位（数字が大きいほど先に削る）
  lf_kokokokugoext10_346: {
    kind: 'barChart',
    xLabel: '削る対象',
    yLabel: '削る優先度（高いほど先に削る）',
    yMax: 5,
    bars: [
      { label: '冗長表現', value: 5, color: '#0EA5E9' },
      { label: '程度副詞', value: 4, color: '#0369A1' },
      { label: '具体例', value: 3, color: '#0284C7' },
      { label: '対比の片側', value: 2, color: '#F59E0B' },
      { label: '核の要素', value: 0, color: '#DC2626' },
    ],
    caption: '字数超過時に削る順序。冗長表現から削れば要素を失わずに二〜三割減らせる。核の要素と語尾は優先度0＝絶対に削らない。末尾から機械的に消すと核と語尾を同時に失う',
  },

  // s348：8点の採点基準表の配点内訳（2+3+2+1＝8）
  lf_kokokokugoext10_348: {
    kind: 'pieChart',
    slices: [
      { label: '情報量が増加 2点', value: 2, color: '#0EA5E9' },
      { label: '比較・選択の負担 3点', value: 3, color: '#DC2626' },
      { label: '選ぶのをやめる 2点', value: 2, color: '#0369A1' },
      { label: '語尾 1点', value: 1, color: '#F59E0B' },
    ],
    caption: '実際の採点基準表を円グラフにしたもの。合計8点。要素を一つ書けば必ずその分が加点される（減点法ではない）ので、白紙は必ず0点、一要素書けば2〜3点になる',
  },

  // s350：必須要素と加点要素の配点差（8点問題の場合）
  lf_kokokokugoext10_350: {
    kind: 'barChart',
    xLabel: '要素の種類',
    yLabel: '配点（点）',
    yMax: 4,
    bars: [
      { label: '必須（抽象語の言いかえ）', value: 3, color: '#DC2626' },
      { label: '必須（否定・対比）', value: 2, color: '#0369A1' },
      { label: '加点（具体例）', value: 1, color: '#0EA5E9' },
      { label: '加点（きっかけ）', value: 1, color: '#16A34A' },
      { label: '語尾', value: 1, color: '#F59E0B' },
    ],
    caption: '8点問題における必須要素と加点要素の配点差。書きやすい具体例は1点、書きにくい抽象語の言いかえが3点。字数を具体例に使うと点が伸びない理由がここにある',
  },

  // s351：配点別の標準構成（核の要素が満点に占める割合）
  lf_kokokokugoext10_351: {
    kind: 'pieChart',
    slices: [
      { label: '核の要素 3点', value: 3, color: '#DC2626' },
      { label: '補助の要素 2点', value: 2, color: '#0369A1' },
      { label: '補助の要素 2点', value: 2, color: '#0EA5E9' },
      { label: '語尾 1点', value: 1, color: '#F59E0B' },
    ],
    caption: '8点問題の標準構成。核が満点の約38%を占めるので、核を落とすと上限は5点になる。逆に「核＋語尾」だけの短い答案でも4点は確保できる',
  },

  // s353：自己採点の実例（模範解答8点に対し、答案は1+0+2+1＝4点）
  lf_kokokokugoext10_353: {
    kind: 'barChart',
    xLabel: '採点項目',
    yLabel: '点（左＝配点／得点）',
    yMax: 5,
    bars: [
      { label: '①便利な道具 配点1', value: 1, color: '#0369A1' },
      { label: '①得点', value: 1, color: '#16A34A' },
      { label: '②能力を失う 配点4', value: 4, color: '#0369A1' },
      { label: '②得点', value: 0, color: '#DC2626' },
      { label: '③自覚がない 配点2', value: 2, color: '#0369A1' },
      { label: '③得点', value: 2, color: '#16A34A' },
    ],
    caption: '自己採点の実例。配点（濃い青）と自分の得点を項目ごとに並べる。②だけが0点＝比喩「支払い」を「損」と置きかえて中身を書かなかったことが特定できる。8点満点中4点',
  },

  // s355：橋渡しを含む理由記述の配点（2+3+2+1＝8）
  lf_kokokokugoext10_355: {
    kind: 'pieChart',
    slices: [
      { label: '標準語は背景を隠す 2点', value: 2, color: '#0EA5E9' },
      { label: '方言＝出身を開く 3点', value: 3, color: '#DC2626' },
      { label: '親しみでなく自己開示 2点', value: 2, color: '#0369A1' },
      { label: '語尾 1点', value: 1, color: '#F59E0B' },
    ],
    caption: '理由記述の配点。直接の原因（標準語が背景を隠す）は2点だが、橋渡しにあたる「方言を話すこと＝出身を開くこと」が3点で最も重い。直接の原因だけでは半分に届かない',
  },

  // s357：説明文と小説で、理由記述の配点がどう変わるか
  lf_kokokokugoext10_357: {
    kind: 'barChart',
    xLabel: '答案に入れる要素',
    yLabel: '配点（点）',
    yMax: 4,
    bars: [
      { label: '説明文：対比', value: 2, color: '#0EA5E9' },
      { label: '説明文：論理の核', value: 3, color: '#0369A1' },
      { label: '説明文：主張', value: 2, color: '#0284C7' },
      { label: '小説：出来事', value: 2, color: '#16A34A' },
      { label: '小説：手がかり', value: 2, color: '#22C55E' },
      { label: '小説：心情', value: 3, color: '#DC2626' },
    ],
    caption: '同じ8点の理由記述でも、説明文は論理の核に3点、小説は心情に3点が置かれる。説明文で心情語を使い、小説で心情語を落とすと、どちらも核の3点を失う',
  },

  // s359：長い傍線部の部品ごとの配点（10点問題：2+3+3+1+1＝10）
  lf_kokokokugoext10_359: {
    kind: 'barChart',
    xLabel: '傍線部の部品',
    yLabel: '配点（点）',
    yMax: 4,
    bars: [
      { label: '①変えないことではない', value: 2, color: '#0369A1' },
      { label: '②何を変えてはならないか', value: 3, color: '#0EA5E9' },
      { label: '③毎回選び直す', value: 3, color: '#DC2626' },
      { label: '④営みである', value: 1, color: '#16A34A' },
      { label: '語尾', value: 1, color: '#F59E0B' },
    ],
    caption: '長い傍線部を部品に分けたときの配点（合計10点）。副詞「毎回」が示す継続性③にも3点が置かれている。部品を一つ落とすと2〜3点が丸ごと消えるので、切ってから訳す',
  },

  // s362：心情記述の配点内訳（2+2+3+1＝8）
  lf_kokokokugoext10_362: {
    kind: 'pieChart',
    slices: [
      { label: '孤独だった（対比）2点', value: 2, color: '#0EA5E9' },
      { label: 'ノートを渡された 2点', value: 2, color: '#0369A1' },
      { label: '心情語 3点', value: 3, color: '#DC2626' },
      { label: '語尾「〜気持ち。」1点', value: 1, color: '#F59E0B' },
    ],
    caption: '心情記述8点の配点。きっかけ（出来事）で4点、心情そのもので3点。片方だけでは半分になる。心情語が一語も入っていなければ、3点が丸ごと付かない',
  },

  // s364：心情変化を書くときの字数配分（70字の場合：18+21+26+5＝70）
  lf_kokokokugoext10_364: {
    kind: 'barChart',
    xLabel: '答案の部分',
    yLabel: '使う字数',
    yMax: 30,
    bars: [
      { label: '前の心情', value: 18, color: '#0EA5E9' },
      { label: 'きっかけ', value: 21, color: '#0369A1' },
      { label: '後の心情', value: 26, color: '#DC2626' },
      { label: '語尾', value: 5, color: '#F59E0B' },
    ],
    caption: '七十字で心情変化を書くときの字数配分（18＋21＋26＋5＝70字）。後の心情を最も厚くする。三要素はほぼ均等配点なので、一つ落とすと得点は三分の二になる',
  },

  // s371：抜き出しの字数条件と、探すべき長さの単位
  lf_kokokokugoext10_371: {
    kind: 'numberLine',
    min: 0,
    max: 40,
    step: 5,
    segments: [
      { from: 0, to: 5 },
      { from: 8, to: 12 },
      { from: 18, to: 22 },
      { from: 25, to: 30 },
    ],
    points: [
      { x: 3, label: '一語' },
      { x: 10, label: '一〜二文節' },
      { x: 20, label: '主語＋述語' },
      { x: 28, label: '一文の一部' },
    ],
    caption: '抜き出しの指定字数から逆算する「探すべき長さの単位」。五字以内なら一語、十字前後なら一〜二文節、二十字前後なら主語＋述語のかたまり、二十五字以上なら一文の一部を切り取る',
  },

  // s373：記述で実際に引かれる減点の内訳（表現面の減点を10としたときの割合）
  lf_kokokokugoext10_373: {
    kind: 'pieChart',
    slices: [
      { label: '主述のねじれ', value: 35, color: '#DC2626' },
      { label: '指示語を残す', value: 25, color: '#0369A1' },
      { label: '冗長・重複', value: 20, color: '#0EA5E9' },
      { label: '語尾の不一致', value: 15, color: '#F59E0B' },
      { label: '誤字', value: 5, color: '#64748B' },
    ],
    caption: '記述で表現面の減点を受ける原因のおおよその割合。最多は主述のねじれで、六十字を超える答案で起きやすい。いずれも書いた直後の十五秒チェックで防げるものばかりである',
  },
};
