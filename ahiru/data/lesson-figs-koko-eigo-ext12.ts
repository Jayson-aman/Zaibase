import type { Figure } from './figures';

// 高校受験 英語「入試実戦演習・得点戦略」拡張ユニット（koko_eigo_s416〜koko_eigo_s450）の図解。
// キーは lessons-koko-eigo-ext12.ts の figureId と一対一で対応する。
// 配点・時間・失点の内訳など「数で見ると戦略が決まる」箇所と、
// 英作文の骨組み（polygon）に限って図解を付けてある（35課中17課）。
// すべての数値は本文の記述と一致させ、合計が合うよう検算済み。
export const lessonFigsKokoEigoExt12: Record<string, Figure> = {
  // s416：公立入試（100点満点）の大問別配点
  lf_kokoeigoext12_416: {
    kind: 'barChart',
    xLabel: '大問',
    yLabel: '配点（点）',
    yMax: 30,
    bars: [
      { label: '1 リスニング', value: 24, color: '#0EA5E9' },
      { label: '2 語形・適語', value: 16, color: '#38BDF8' },
      { label: '3 会話文', value: 20, color: '#0284C7' },
      { label: '4 長文', value: 28, color: '#0369A1' },
      { label: '5 英作文', value: 12, color: '#7DD3FC' },
    ],
    caption:
      '公立入試の標準的な配点モデル（100点満点）。24＋16＋20＋28＋12＝100点。読解系（大問3・4）だけで48点、リスニングと合わせると72点を占める',
  },

  // s417：50分の時間配分モデル
  lf_kokoeigoext12_417: {
    kind: 'barChart',
    xLabel: '作業',
    yLabel: '時間（分）',
    yMax: 15,
    bars: [
      { label: 'リスニング', value: 12, color: '#0EA5E9' },
      { label: '大問2', value: 5, color: '#38BDF8' },
      { label: '大問3', value: 8, color: '#0284C7' },
      { label: '大問4', value: 13, color: '#0369A1' },
      { label: '大問5', value: 7, color: '#7DD3FC' },
      { label: '見直し', value: 5, color: '#94A3B8' },
    ],
    caption:
      '試験時間50分の配分モデル。12＋5＋8＋13＋7＋5＝50分。リスニングは放送時間で固定なので、実際に自分で調整できるのは残りの38分である',
  },

  // s419：70点の受験生が落としている30点の内訳
  lf_kokoeigoext12_419: {
    kind: 'pieChart',
    slices: [
      { label: '長文の内容一致 10点', value: 10, color: '#0369A1' },
      { label: '英作文 8点', value: 8, color: '#0EA5E9' },
      { label: '文法・語形変化 5点', value: 5, color: '#38BDF8' },
      { label: 'リスニング 4点', value: 4, color: '#7DD3FC' },
      { label: 'つづり・記号ミス 3点', value: 3, color: '#94A3B8' },
    ],
    caption:
      '100点満点で70点だった受験生の失点30点の内訳（模試の典型例）。10＋8＋5＋4＋3＝30点。長文と英作文だけで18点、失点の6割を占める',
  },

  // s421：難関私立の配点構成
  lf_kokoeigoext12_421: {
    kind: 'barChart',
    xLabel: '大問',
    yLabel: '配点（点）',
    yMax: 32,
    bars: [
      { label: '長文A', value: 30, color: '#0369A1' },
      { label: '長文B', value: 25, color: '#0284C7' },
      { label: '文法・語法', value: 15, color: '#0EA5E9' },
      { label: '語彙・熟語', value: 10, color: '#38BDF8' },
      { label: '整序英作文', value: 12, color: '#7DD3FC' },
      { label: '和文英訳', value: 8, color: '#94A3B8' },
    ],
    caption:
      '難関私立の配点モデル（100点満点）。30＋25＋15＋10＋12＋8＝100点。長文2題で55点と、公立（28点）の約2倍を占めるのが最大の違い',
  },

  // s423：難関私立の長文に出る語のレベル別割合
  lf_kokoeigoext12_423: {
    kind: 'pieChart',
    slices: [
      { label: '中学教科書内 60%', value: 60, color: '#0EA5E9' },
      { label: '高校基礎レベル 25%', value: 25, color: '#0284C7' },
      { label: '文脈推測前提の難語 10%', value: 10, color: '#0369A1' },
      { label: '注釈付き固有名詞 5%', value: 5, color: '#94A3B8' },
    ],
    caption:
      '難関私立の長文に現れる語のレベル別割合。60＋25＋10＋5＝100%。教科書内の語が6割を占めるので、まず教科書語彙を完成させることが最短ルートになる',
  },

  // s425：文法・語法問題の出題形式の割合
  lf_kokoeigoext12_425: {
    kind: 'pieChart',
    slices: [
      { label: '適語選択 35%', value: 35, color: '#0EA5E9' },
      { label: '語形変化 25%', value: 25, color: '#0284C7' },
      { label: '整序英作文 25%', value: 25, color: '#0369A1' },
      { label: '誤文訂正 15%', value: 15, color: '#7DD3FC' },
    ],
    caption:
      '公立・私立をならした文法問題の出題形式の割合。35＋25＋25＋15＝100%。形式ごとに解く手順が違うので、形式別に練習すると効率がよい',
  },

  // s427：語形変化でつまずきやすい項目の正答率
  lf_kokoeigoext12_427: {
    kind: 'barChart',
    xLabel: '出題項目',
    yLabel: '正答率（%）',
    yMax: 100,
    bars: [
      { label: '三単現', value: 82, color: '#0EA5E9' },
      { label: '過去分詞', value: 68, color: '#38BDF8' },
      { label: '比較級', value: 74, color: '#7DD3FC' },
      { label: '現在分詞の後置', value: 48, color: '#0369A1' },
      { label: '動名詞', value: 57, color: '#0284C7' },
    ],
    caption:
      '語形変化問題の項目別正答率（中3模試の目安）。三単現は8割が正解できるが、現在分詞の後置修飾は5割を切る。落ちている項目から順に埋めるのが得点効率がよい',
  },

  // s430：出題レベル別の長文語数
  lf_kokoeigoext12_430: {
    kind: 'barChart',
    xLabel: '出題レベル',
    yLabel: '語数（語）',
    yMax: 1200,
    bars: [
      { label: '公立 会話文', value: 300, color: '#7DD3FC' },
      { label: '公立 長文', value: 500, color: '#0EA5E9' },
      { label: '自校作成校', value: 800, color: '#0284C7' },
      { label: '難関私立', value: 1100, color: '#0369A1' },
    ],
    caption:
      '出題レベル別の長文語数の目安。毎分100語で読めれば、公立の長文500語は5分、難関私立の1100語は11分で通読できる計算になる',
  },

  // s432：長文1題（設問8問）の設問がどの段落から出るか
  lf_kokoeigoext12_432: {
    kind: 'barChart',
    xLabel: '根拠のある場所',
    yLabel: '設問数（問）',
    yMax: 3,
    bars: [
      { label: '第1段落', value: 1, color: '#7DD3FC' },
      { label: '第2段落', value: 2, color: '#0EA5E9' },
      { label: '第3段落', value: 2, color: '#0284C7' },
      { label: '第4段落', value: 1, color: '#38BDF8' },
      { label: '全体（内容一致）', value: 2, color: '#0369A1' },
    ],
    caption:
      '5段落・設問8問の長文で、各設問の根拠がある場所の分布。1＋2＋2＋1＋2＝8問。設問6問は特定の段落に根拠があり、その段落だけ精読すれば答えが出る',
  },

  // s434：長文（大問4）に使う13分の内訳
  lf_kokoeigoext12_434: {
    kind: 'barChart',
    xLabel: '作業',
    yLabel: '時間（分）',
    yMax: 7,
    bars: [
      { label: '設問の先読み', value: 1, color: '#7DD3FC' },
      { label: '本文の通読', value: 6, color: '#0369A1' },
      { label: '設問の処理', value: 5, color: '#0284C7' },
      { label: '内容一致の確認', value: 1, color: '#0EA5E9' },
    ],
    caption:
      '大問4（長文28点）に配分した13分の内訳。1＋6＋5＋1＝13分。通読に6分しか使えないので、知らない語で止まらないことが時間を守る鍵になる',
  },

  // s435：自由英作文の4文の骨組み
  lf_kokoeigoext12_435: {
    kind: 'polygon',
    points: [
      { x: 0, y: 9 },
      { x: 12, y: 9 },
      { x: 12, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: [
      '①主張 I think 〜 .',
      '②理由の予告 I have two reasons.',
      '③理由と例 First, 〜 . Second, 〜 .',
      '④まとめ That is why I think 〜 .',
    ],
    fill: true,
    caption:
      '自由英作文（40語程度）の骨組み。上辺①から時計回りに②③④の順に書く。この4ブロックを埋めるだけで文章の形が整い、構成点が確保できる',
  },

  // s436：英作文12点の採点内訳
  lf_kokoeigoext12_436: {
    kind: 'barChart',
    xLabel: '採点の観点',
    yLabel: '配点（点）',
    yMax: 6,
    bars: [
      { label: '内容（条件充足）', value: 5, color: '#0369A1' },
      { label: '構成（理由・例）', value: 3, color: '#0284C7' },
      { label: '文法の正確さ', value: 3, color: '#0EA5E9' },
      { label: 'つづり・語法', value: 1, color: '#7DD3FC' },
    ],
    caption:
      '英作文12点の採点内訳モデル。5＋3＋3＋1＝12点。文法が完璧でも内容が条件を外せば5点を失う。逆に多少の文法ミスがあっても、条件と構成を守れば8点は残る',
  },

  // s438：条件英作文の骨組み
  lf_kokoeigoext12_438: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 12, y: 0 },
      { x: 6, y: 9 },
    ],
    sideLabels: [
      '①場面の確認（誰に・何のために）',
      '②中心の1文（依頼・提案・感想）',
      '③理由や補足を1〜2文',
    ],
    fill: true,
    caption:
      '条件英作文の骨組み。底辺①で場面を確認してから、②中心の1文を決め、③理由を足して上へ積み上げる。②が条件とずれていると、③をいくら書いても点にならない',
  },

  // s440：誤文訂正100問に含まれる誤りの型
  lf_kokoeigoext12_440: {
    kind: 'pieChart',
    slices: [
      { label: '動詞の形 32問', value: 32, color: '#0369A1' },
      { label: '前置詞の過不足 24問', value: 24, color: '#0284C7' },
      { label: '冠詞・名詞の数 20問', value: 20, color: '#0EA5E9' },
      { label: '語順 14問', value: 14, color: '#38BDF8' },
      { label: '品詞の混同 10問', value: 10, color: '#7DD3FC' },
    ],
    caption:
      '誤文訂正100問の誤りの型の内訳。32＋24＋20＋14＋10＝100問。動詞の形と前置詞だけで56問、半分以上を占める',
  },

  // s443：冠詞・名詞の数の誤り50個の内訳
  lf_kokoeigoext12_443: {
    kind: 'pieChart',
    slices: [
      { label: '単数可算名詞に a/an がない 18', value: 18, color: '#0369A1' },
      { label: '複数形の -s 落ち 15', value: 15, color: '#0284C7' },
      { label: '不可算名詞に a/-s を付けた 9', value: 9, color: '#0EA5E9' },
      { label: 'the の要不要 8', value: 8, color: '#7DD3FC' },
    ],
    caption:
      '冠詞・名詞の数の誤り50個の内訳。18＋15＋9＋8＝50個。「a を付け忘れる」「-s を落とす」の2つで33個、3分の2を占める',
  },

  // s444：最後の5分の見直しで拾える点数
  lf_kokoeigoext12_444: {
    kind: 'barChart',
    xLabel: '点検項目',
    yLabel: '平均回復点（点）',
    yMax: 3,
    bars: [
      { label: '名詞の複数形 -s', value: 2, color: '#0EA5E9' },
      { label: '三単現の -s', value: 2, color: '#0284C7' },
      { label: 'つづり', value: 1, color: '#7DD3FC' },
      { label: '冠詞の抜け', value: 1, color: '#38BDF8' },
      { label: '空欄・記号もれ', value: 2, color: '#0369A1' },
    ],
    caption:
      '最後の5分の見直しで平均的に回復できる点数。2＋2＋1＋1＋2＝8点。新しい問題を1問解くより、この8点を取り戻すほうが確実性が高い',
  },

  // s448：直前14日間の1日90分の配分
  lf_kokoeigoext12_448: {
    kind: 'barChart',
    xLabel: '学習内容',
    yLabel: '1日あたりの時間（分）',
    yMax: 45,
    bars: [
      { label: '過去問演習', value: 40, color: '#0369A1' },
      { label: '誤答ノート', value: 20, color: '#0284C7' },
      { label: '単語・熟語', value: 15, color: '#0EA5E9' },
      { label: 'リスニング', value: 10, color: '#38BDF8' },
      { label: '英作文の型の音読', value: 5, color: '#7DD3FC' },
    ],
    caption:
      '直前14日間の1日90分の配分モデル。40＋20＋15＋10＋5＝90分。新しい教材ではなく、すでに解いた問題の復習に60分（過去問＋誤答ノート）を充てるのが直前期の原則',
  },
};
