import type { Figure } from './figures';

// 中学受験国語 拡張ユニットXII「入試実戦演習・総合」（kokugo_s421〜kokugo_s450）専用の図解データ。
// 数値はすべて lessons-kokugo-ext12.ts の本文中の記述と一致させてある。
// 時間配分は学校によって試験時間・大問構成が異なるため、本文・キャプションとも
// 「50分・大問4つ」というモデルケースの目安であることを明記している。
export const lessonFigsKokugoExt12: Record<string, Figure> = {
  // ===== 421. 50分の大問別・時間配分のモデル =====
  lf_kokugo_ext12_421: {
    kind: 'barChart',
    xLabel: '大問',
    yLabel: 'かける時間(分)',
    yMax: 20,
    bars: [
      { label: '漢字・語句', value: 5, color: '#0EA5E9' },
      { label: '物語文', value: 18, color: '#0369A1' },
      { label: '説明文', value: 18, color: '#0284C7' },
      { label: '見直し', value: 9, color: '#64748B' },
    ],
    caption: '試験時間50分・大問4つのモデルケースでの時間配分の目安。5＋18＋18＋9＝50分。見直しの9分をはじめから予算に組みこんでおくのがコツ',
  },

  // ===== 423. 50分のタイムライン（残り時間の関門） =====
  lf_kokugo_ext12_423: {
    kind: 'numberLine',
    min: 0,
    max: 50,
    step: 5,
    points: [
      { x: 5, label: '漢字終了' },
      { x: 23, label: '物語文終了' },
      { x: 41, label: '説明文終了' },
      { x: 50, label: '終了' },
    ],
    segments: [
      { from: 0, to: 5 },
      { from: 5, to: 23 },
      { from: 23, to: 41 },
      { from: 41, to: 50 },
    ],
    caption: '50分のタイムライン。「5分・23分・41分」を関門（チェックポイント）として時計で確認し、過ぎていたら次の大問へ進む',
  },

  // ===== 424. 最後の9分の使い方 =====
  lf_kokugo_ext12_424: {
    kind: 'barChart',
    xLabel: '見直しの項目',
    yLabel: 'かける時間(分)',
    yMax: 6,
    bars: [
      { label: '空欄をうめる', value: 4, color: '#E11D48' },
      { label: '記述の字数', value: 2, color: '#0369A1' },
      { label: '記号の書き写し', value: 2, color: '#0284C7' },
      { label: '漢字のとめはね', value: 1, color: '#64748B' },
    ],
    caption: '最後の9分の使い方の目安。空欄をうめる作業が最優先で、0点を確実に1点以上に変える。とめはねの確認は最後でよい',
  },

  // ===== 425. 傍線部から前後何行を読むか =====
  lf_kokugo_ext12_425: {
    kind: 'numberLine',
    min: -5,
    max: 5,
    step: 1,
    points: [
      { x: 0, label: '傍線部' },
      { x: -3, label: '前3行' },
      { x: 3, label: '後3行' },
    ],
    segments: [{ from: -3, to: 3 }],
    caption: '傍線部問題で最初に読み直す範囲。傍線部を0行目として前3行・後3行、合わせて約7行の中に根拠がある場合がほとんど。ここになければ段落全体へ範囲を広げる',
  },

  // ===== 427. 設問を解く5ステップ =====
  lf_kokugo_ext12_427: {
    kind: 'numberLine',
    min: 1,
    max: 5,
    step: 1,
    points: [
      { x: 1, label: '条件に印' },
      { x: 2, label: '問いの型' },
      { x: 3, label: '前後を読む' },
      { x: 4, label: '答えを作る' },
      { x: 5, label: '条件を再確認' },
    ],
    segments: [{ from: 1, to: 5 }],
    caption: '設問を解く5ステップ。①条件（字数・答え方）に印→②問いの型を判定→③傍線部の前後を読む→④答えを作る→⑤①の条件を満たしているか再確認。⑤を省くと条件ミスで失点する',
  },

  // ===== 429. 消去法で残る選択肢の数 =====
  lf_kokugo_ext12_429: {
    kind: 'barChart',
    xLabel: '消去の段階',
    yLabel: '残っている選択肢の数',
    yMax: 4,
    bars: [
      { label: '読む前', value: 4, color: '#64748B' },
      { label: '本文にない', value: 3, color: '#0284C7' },
      { label: '言い過ぎ', value: 2, color: '#0369A1' },
      { label: '一部が違う', value: 1, color: '#0EA5E9' },
    ],
    caption: '消去法は「4→3→2→1」と段階的に減らす作業。①本文に書かれていない内容を消す→②言い過ぎ・断定を消す→③一部だけ違う選択肢を消す。一気に正解を当てにいかない',
  },

  // ===== 434. 抜き出し候補の字数くらべ =====
  lf_kokugo_ext12_434: {
    kind: 'barChart',
    xLabel: '抜き出しの候補',
    yLabel: '字数',
    yMax: 16,
    bars: [
      { label: '素直に認める勇気', value: 8, color: '#64748B' },
      { label: '弱さを素直に〜勇気', value: 11, color: '#E11D48' },
      { label: '自分の弱さを〜勇気', value: 14, color: '#0EA5E9' },
    ],
    caption: '「十四字で抜き出しなさい」という条件のとき、候補の字数を数えてくらべた図。意味が合っていても8字・11字は不正解で、14字ちょうどの「自分の弱さを素直に認める勇気」だけが正解になる',
  },

  // ===== 437. 抜き出しの探す範囲 =====
  lf_kokugo_ext12_437: {
    kind: 'numberLine',
    min: -10,
    max: 10,
    step: 2,
    points: [
      { x: 0, label: '傍線部' },
      { x: -2, label: '第1候補' },
      { x: 6, label: '第2候補' },
    ],
    segments: [
      { from: -2, to: 0 },
      { from: 0, to: 6 },
    ],
    caption: '抜き出しの探す順番。まず傍線部の直前（第1候補・約2行前まで）、次に傍線部より後ろ（第2候補・約6行後まで）へ広げる。指示語の指す内容はほぼ直前にある',
  },

  // ===== 438. 物語文の大問・設問別の配点イメージ =====
  lf_kokugo_ext12_438: {
    kind: 'barChart',
    xLabel: '設問の種類',
    yLabel: '配点(点)',
    yMax: 14,
    bars: [
      { label: '記号選択', value: 4, color: '#0284C7' },
      { label: '抜き出し', value: 4, color: '#0EA5E9' },
      { label: '短い記述', value: 6, color: '#0369A1' },
      { label: '長い記述', value: 12, color: '#E11D48' },
    ],
    caption: '物語文の大問（30点満点）における設問別の配点イメージ。長い記述1問が記号選択3問分にあたることも多く、「記述を空欄にしない」ことが最優先になる',
  },

  // ===== 443. 説明文の大問・設問別の目安時間 =====
  lf_kokugo_ext12_443: {
    kind: 'barChart',
    xLabel: '作業',
    yLabel: 'かける時間(分)',
    yMax: 8,
    bars: [
      { label: '通読・段落番号', value: 6, color: '#64748B' },
      { label: '記号・抜き出し', value: 5, color: '#0284C7' },
      { label: '指示語・接続語', value: 2, color: '#0EA5E9' },
      { label: '要旨の記述', value: 5, color: '#E11D48' },
    ],
    caption: '説明文の大問（18分）の中での時間配分の目安。6＋5＋2＋5＝18分。通読に6分かけても、構造がつかめていれば残りの設問がはやく解ける',
  },

  // ===== 448. 直前1週間・1日の国語の学習配分 =====
  lf_kokugo_ext12_448: {
    kind: 'barChart',
    xLabel: '学習内容',
    yLabel: '1日にかける時間(分)',
    yMax: 40,
    bars: [
      { label: '漢字', value: 20, color: '#0EA5E9' },
      { label: '語句・慣用句', value: 10, color: '#0284C7' },
      { label: '読解1題', value: 30, color: '#0369A1' },
      { label: '記述の直し', value: 20, color: '#E11D48' },
    ],
    caption: '直前1週間の国語・1日80分のモデル配分。新しい問題集に手を出さず、確実に点になる漢字・語句と、解いた1題の直しに時間を使う',
  },
};
