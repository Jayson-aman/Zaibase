import type { Figure } from './figures';

// 高校受験 国語「入試実戦演習・得点戦略」拡張ユニット（koko_kokugo_s411〜koko_kokugo_s450）の図解。
// キーは lessons-koko-kokugo-ext12.ts の figureId と対応（40課中20課＝50%）。
// 国語は図にしにくい教科なので、「配点」「時間配分」「解答用紙の枠」「記述の骨組み」など
// 数値と構造で理解が進む箇所にだけ付けてある。すべての数値は本文と一致するよう検算済み。
export const lessonFigsKokoKokugoExt12: Record<string, Figure> = {
  // s411：公立入試 国語100点の大問別配点（20+30+25+15+10=100）
  lf_kokokokugoext12_411: {
    kind: 'pieChart',
    slices: [
      { label: '説明的文章 30点', value: 30, color: '#0EA5E9' },
      { label: '文学的文章 25点', value: 25, color: '#0369A1' },
      { label: '漢字・語句 20点', value: 20, color: '#16A34A' },
      { label: '古文 15点', value: 15, color: '#F59E0B' },
      { label: '作文 10点', value: 10, color: '#DC2626' },
    ],
    caption:
      '公立高校入試 国語の標準的な大問別配点（合計100点）。読解二題で55点＝全体の半分以上を占める。漢字・語句の20点は本文を読まずに取れる得点源',
  },

  // s412：50分の時間配分（5+13+12+8+9+3=50）
  lf_kokokokugoext12_412: {
    kind: 'barChart',
    xLabel: '大問',
    yLabel: '時間（分）',
    yMax: 15,
    bars: [
      { label: '漢字', value: 5, color: '#16A34A' },
      { label: '説明文', value: 13, color: '#0EA5E9' },
      { label: '小説', value: 12, color: '#0369A1' },
      { label: '古文', value: 8, color: '#F59E0B' },
      { label: '作文', value: 9, color: '#DC2626' },
      { label: '見直し', value: 3, color: '#64748B' },
    ],
    caption:
      '公立入試50分の標準的な時間配分。5+13+12+8+9+3＝50分でちょうど収まる。見直しの3分は必ず残す',
  },

  // s413：解答用紙の構造を四角の枠に見立てた図
  lf_kokokokugoext12_413: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 12, y: 0 },
      { x: 12, y: 9 },
      { x: 0, y: 9 },
    ],
    sideLabels: ['下：作文欄（150〜200字）', '右：記述解答欄（40〜60字マス）', '上：受験番号・氏名', '左：記号・漢字の解答欄'],
    fill: true,
    caption:
      '解答用紙を一枚の枠に見立てた図。試験開始直後の30秒でこの四辺を観察し、記述欄の数と字数・作文欄の行数を確かめてから解き始める',
  },

  // s415：設問形式別の配点（38+22+18+12+10=100）
  lf_kokokokugoext12_415: {
    kind: 'barChart',
    xLabel: '設問の形式',
    yLabel: '配点',
    yMax: 40,
    bars: [
      { label: '記号選択', value: 38, color: '#0EA5E9' },
      { label: '記述', value: 22, color: '#0369A1' },
      { label: '漢字・知識', value: 18, color: '#16A34A' },
      { label: '抜き出し', value: 12, color: '#F59E0B' },
      { label: '作文', value: 10, color: '#DC2626' },
    ],
    caption:
      '大問別とは別の切り口で見た、設問形式別の配点（合計100点）。記号選択が38点で最大。模試の答案はこの形式別に自己採点する',
  },

  // s416：目標70点の大問別内訳（18+20+17+9+6=70）
  lf_kokokokugoext12_416: {
    kind: 'pieChart',
    slices: [
      { label: '説明文 20点', value: 20, color: '#0EA5E9' },
      { label: '漢字・語句 18点', value: 18, color: '#16A34A' },
      { label: '小説 17点', value: 17, color: '#0369A1' },
      { label: '古文 9点', value: 9, color: '#F59E0B' },
      { label: '作文 6点', value: 6, color: '#DC2626' },
    ],
    caption:
      '目標70点を大問別に割り振った例（18+20+17+9+6＝70点）。満点100点との差30点が「落としてよい点」で、漢字は2点しか落とせない',
  },

  // s417：難関私立の大問別配点（45+35+12+8=100）
  lf_kokokokugoext12_417: {
    kind: 'barChart',
    xLabel: '大問',
    yLabel: '配点',
    yMax: 50,
    bars: [
      { label: '論説文', value: 45, color: '#0EA5E9' },
      { label: '小説', value: 35, color: '#0369A1' },
      { label: '古文', value: 12, color: '#F59E0B' },
      { label: '漢字・知識', value: 8, color: '#16A34A' },
    ],
    caption:
      '難関私立の標準的な配点（合計100点・60分）。読解二題で80点を占め、漢字・知識は8点しかない。公立の「知識で稼ぐ」戦略が通用しない',
  },

  // s418：難関私立60分の時間配分（3+24+20+8+5=60）
  lf_kokokokugoext12_418: {
    kind: 'barChart',
    xLabel: '大問（解く順）',
    yLabel: '時間（分）',
    yMax: 26,
    bars: [
      { label: '漢字', value: 3, color: '#16A34A' },
      { label: '論説', value: 24, color: '#0EA5E9' },
      { label: '小説', value: 20, color: '#0369A1' },
      { label: '古文', value: 8, color: '#F59E0B' },
      { label: '見直し', value: 5, color: '#64748B' },
    ],
    caption:
      '難関私立60分の時間配分。3+24+20+8+5＝60分。論説24分の内訳は通読9分＋設問15分で、読み返しを前提にしない',
  },

  // s420：難関私立で出題される本文のジャンル比率（25+20+20+15+10+10=100）
  lf_kokokokugoext12_420: {
    kind: 'pieChart',
    slices: [
      { label: '言語・文化論 25%', value: 25, color: '#0EA5E9' },
      { label: '科学・環境論 20%', value: 20, color: '#0369A1' },
      { label: '小説 20%', value: 20, color: '#DC2626' },
      { label: '哲学・思想 15%', value: 15, color: '#7C3AED' },
      { label: '芸術論 10%', value: 10, color: '#F59E0B' },
      { label: '随筆 10%', value: 10, color: '#16A34A' },
    ],
    caption:
      '難関私立で出題される本文のジャンル比率（合計100%）。最頻出は言語・文化論。ただしテーマ知識は読む速度を上げるためのもので、解答の根拠にはしない',
  },

  // s422：4択で1回目の吟味に消せる選択肢の数の分布（8+22+46+24=100）
  lf_kokokokugoext12_422: {
    kind: 'barChart',
    xLabel: '1回目の吟味で消せた選択肢の数',
    yLabel: '割合（%）',
    yMax: 50,
    bars: [
      { label: '0個', value: 8, color: '#DC2626' },
      { label: '1個', value: 22, color: '#F59E0B' },
      { label: '2個', value: 46, color: '#0EA5E9' },
      { label: '3個（＝正解確定）', value: 24, color: '#16A34A' },
    ],
    caption:
      '4択問題で1回目の吟味に消せる選択肢の数の分布（合計100%）。標準は2個消して二択に絞る状態。0個のときは設問の要求か根拠の範囲を取り違えている',
  },

  // s423：誤答選択肢の「誤りが仕込まれている位置」（12+22+34+32=100）
  lf_kokokokugoext12_423: {
    kind: 'barChart',
    xLabel: '選択肢の中で誤りがある位置',
    yLabel: '割合（%）',
    yMax: 40,
    bars: [
      { label: '前半', value: 12, color: '#16A34A' },
      { label: '中盤', value: 22, color: '#F59E0B' },
      { label: '後半', value: 34, color: '#0EA5E9' },
      { label: '文末の判断', value: 32, color: '#DC2626' },
    ],
    caption:
      '誤答選択肢の中で、誤りが置かれている位置の分布（合計100%）。3分の2は後半と文末にある。前半だけ読んで「合っている」と判断すると必ず外す',
  },

  // s424：傍線部を0行としたときの根拠の位置（理由設問）
  lf_kokokokugoext12_424: {
    kind: 'numberLine',
    min: -6,
    max: 6,
    step: 1,
    points: [
      { x: -3, label: '理由' },
      { x: -2, label: '理由' },
      { x: -1, label: '理由(最多)' },
      { x: 0, label: '傍線部' },
      { x: 1, label: '言いかえ' },
      { x: 2, label: '言いかえ' },
      { x: 4, label: '段落末のまとめ' },
    ],
    caption:
      '傍線部を0行目としたときの根拠の位置。理由は前（−3〜−1行）、内容の言いかえは後ろ（+1〜+2行）に置かれるのが日本語の自然な順序',
  },

  // s428：誤答選択肢の四つの型の割合（30+28+22+20=100）
  lf_kokokokugoext12_428: {
    kind: 'pieChart',
    slices: [
      { label: '①言い過ぎ 30%', value: 30, color: '#DC2626' },
      { label: '②本文にない情報 28%', value: 28, color: '#0EA5E9' },
      { label: '③部分的に正しい 22%', value: 22, color: '#F59E0B' },
      { label: '④因果・主体の入れかえ 20%', value: 20, color: '#0369A1' },
    ],
    caption:
      '誤答選択肢の四つの型の割合（合計100%）。消すときは必ずこの四つのどれかに当てはめる。当てはめられない選択肢はまだ消してはいけない',
  },

  // s430：誤答選択肢100個に含まれる「言い過ぎ語」の延べ出現回数（24+21+16+14+9+8=92）
  lf_kokokokugoext12_430: {
    kind: 'barChart',
    xLabel: '言い過ぎ語の種類',
    yLabel: '延べ出現回数',
    yMax: 26,
    bars: [
      { label: 'すべて・必ず', value: 24, color: '#DC2626' },
      { label: '完全に・まったく', value: 21, color: '#0EA5E9' },
      { label: '最も', value: 16, color: '#0369A1' },
      { label: 'だけ・のみ', value: 14, color: '#F59E0B' },
      { label: '決して', value: 9, color: '#7C3AED' },
      { label: 'つねに', value: 8, color: '#16A34A' },
    ],
    caption:
      '誤答選択肢100個を調べたときの「言い過ぎ語」の延べ出現回数（合計92回。一つの選択肢に複数含まれる場合がある）。この6種類を目で拾えるようにする',
  },

  // s434：1点を取るのにかかる時間（秒/点）
  lf_kokokokugoext12_434: {
    kind: 'barChart',
    xLabel: '大問',
    yLabel: '1点あたりの秒数',
    yMax: 60,
    bars: [
      { label: '漢字 15.0', value: 15.0, color: '#16A34A' },
      { label: '説明文 26.0', value: 26.0, color: '#0EA5E9' },
      { label: '小説 28.8', value: 28.8, color: '#0369A1' },
      { label: '古文 32.0', value: 32.0, color: '#F59E0B' },
      { label: '作文 54.0', value: 54.0, color: '#DC2626' },
    ],
    caption:
      '標準配分での1点あたりの所要時間。300秒÷20点＝15.0／780÷30＝26.0／720÷25＝28.8／480÷15＝32.0／540÷10＝54.0（秒/点）。漢字は作文の約3.6倍の効率',
  },

  // s435：50分の通過時刻（関門）
  lf_kokokokugoext12_435: {
    kind: 'numberLine',
    min: 0,
    max: 50,
    step: 5,
    points: [
      { x: 0, label: '開始' },
      { x: 5, label: '漢字終了' },
      { x: 18, label: '説明文終了' },
      { x: 30, label: '小説終了' },
      { x: 38, label: '古文終了' },
      { x: 47, label: '作文終了' },
      { x: 50, label: '終了' },
    ],
    caption:
      '50分を五つの関門で区切った時間軸。5→18（+13）→30（+12）→38（+8）→47（+9）→50（+3）。時計を見るのはこの五点だけにする',
  },

  // s438：知識問題18点の内訳（6+4+4+4=18）
  lf_kokokokugoext12_438: {
    kind: 'pieChart',
    slices: [
      { label: '漢字の書き 6点', value: 6, color: '#0EA5E9' },
      { label: '漢字の読み 4点', value: 4, color: '#0369A1' },
      { label: '熟語・語句 4点', value: 4, color: '#16A34A' },
      { label: '文法 4点', value: 4, color: '#F59E0B' },
    ],
    caption:
      '公立入試の知識問題18点の内訳（6+4+4+4＝18点）。ここに行書・筆順など2点を加えて大問1の20点になる県が多い。覚えれば確実に取れる範囲',
  },

  // s442：記述の骨組み（三角形の三辺＝三つの部品）
  lf_kokokokugoext12_442: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 5, y: 8 },
    ],
    sideLabels: ['①主語（誰が・何が）', '②中核（本文のキーワード2語）', '③文末（〜から。／〜ということ。）'],
    fill: true,
    caption:
      '記述解答の骨組み。三辺のどれが欠けても形にならない。書き始める前にこの三つを余白にメモしてから清書する',
  },

  // s443：10点の記述の部分点内訳（2+4+2+2=10）
  lf_kokokokugoext12_443: {
    kind: 'barChart',
    xLabel: '採点の要素',
    yLabel: '配点',
    yMax: 5,
    bars: [
      { label: '主体の明示', value: 2, color: '#16A34A' },
      { label: '理由の中核', value: 4, color: '#0EA5E9' },
      { label: '本文語句の言いかえ', value: 2, color: '#F59E0B' },
      { label: '設問に合った文末', value: 2, color: '#0369A1' },
    ],
    caption:
      '10点の記述の部分点の内訳（2+4+2+2＝10点）。最重要は理由の中核4点。主体と文末の計4点は内容の理解と関係なく手続きだけで取れる',
  },

  // s446：見直し3分＝180秒の使い方（10+40+30+60+40=180）
  lf_kokokokugoext12_446: {
    kind: 'barChart',
    xLabel: '点検項目',
    yLabel: '時間（秒）',
    yMax: 65,
    bars: [
      { label: '受験番号・氏名', value: 10, color: '#DC2626' },
      { label: '未記入の空欄', value: 40, color: '#0EA5E9' },
      { label: '記号のずれ', value: 30, color: '#0369A1' },
      { label: '記述の文末と字数', value: 60, color: '#F59E0B' },
      { label: '漢字の字形', value: 40, color: '#16A34A' },
    ],
    caption:
      '見直し3分（180秒）の配分。10+40+30+60+40＝180秒。解き直しではなく点検に徹する。ここで守れる点は平均3〜5点',
  },

  // s449：直前1か月の学習配分（40+20+15+15+10=100）
  lf_kokokokugoext12_449: {
    kind: 'pieChart',
    slices: [
      { label: '過去問演習 40%', value: 40, color: '#0EA5E9' },
      { label: '漢字・語句の反復 20%', value: 20, color: '#16A34A' },
      { label: '古文単語・文法 15%', value: 15, color: '#F59E0B' },
      { label: '記述の書き直し 15%', value: 15, color: '#0369A1' },
      { label: '品詞の識別 10%', value: 10, color: '#7C3AED' },
    ],
    caption:
      '直前1か月の学習時間の配分（合計100%）。新しい教材は増やさず、過去問の解き直しと既習事項の確認に4割以上を充てる',
  },
};
