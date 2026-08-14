import type { Figure } from './figures';

// 中学受験 国語「語彙・類義語対義語・多義語」35セッション分の図解バッチ。
// キーは lessons-kokugo-ext04.ts の figureId と対応する。
// 語彙は本来「図で解く」単元ではないため、意味の強弱・対立関係・意味の広がりが
// 目で見て整理できる箇所だけに限定して図をつけている（35セッション中14セッション）。
export const lessonFigsKokugoExt04: Record<string, Figure> = {
  // ── 類義語：意味の強さの目盛り ──────────────
  kv_117: {
    kind: 'numberLine',
    min: 0,
    max: 5,
    step: 1,
    points: [
      { x: 1, label: 'あった方がよい' },
      { x: 2.5, label: '必要' },
      { x: 4.3, label: '不可欠' },
    ],
    caption: '数字は「なくては困る度合い」の目安。必要＜必須・不可欠。「必須」「不可欠」はそれがないと成り立たないときだけ使う',
  },
  kv_119: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: '保証（大丈夫と請け合う）' },
      { x: 4, y: 0, label: '保障（守る）' },
      { x: 2, y: 3, label: '補償（つぐなう）' },
    ],
    sideLabels: ['ホショウ（同音）', 'ホショウ（同音）', 'ホショウ（同音）'],
    caption: '同じ「ホショウ」でも役割が違う。品質を保証／安全を保障／損害を補償',
  },
  kv_120: {
    kind: 'numberLine',
    min: -3,
    max: 3,
    step: 1,
    points: [
      { x: -2, label: '末路' },
      { x: 0, label: '結果' },
      { x: 2, label: '成果' },
    ],
    caption: 'マイナス評価←→プラス評価。「結果」は中立、「成果」はよい結果だけ、「末路」は落ちぶれた最後にしか使えない',
  },

  // ── 対義語：対立の軸 ────────────────────
  kv_123: {
    kind: 'numberLine',
    min: -3,
    max: 3,
    step: 1,
    points: [
      { x: -2, label: '減少' },
      { x: 0, label: '現状維持' },
      { x: 2, label: '増加' },
    ],
    caption: '対義語は「同じ一本の軸の両はし」。増加⇔減少は「量」という一本の軸の上で反対を向いている',
  },
  kv_124: {
    kind: 'polygon',
    points: [
      { x: 0, y: 2, label: '原因' },
      { x: 3, y: 2, label: '結果' },
      { x: 3, y: 0, label: '供給' },
      { x: 0, y: 0, label: '需要' },
    ],
    sideLabels: ['⇔（時間の前後）', null, '⇔（売り手と買い手）', null],
    caption: '漢字が一字ずつ対応しなくても対義語になる組。原因⇔結果、需要⇔供給は熟語全体で反対の意味',
  },
  kv_125: {
    kind: 'polygon',
    points: [
      { x: 0, y: 2, label: '権利' },
      { x: 3, y: 2, label: '義務' },
      { x: 3, y: 0, label: '消費' },
      { x: 0, y: 0, label: '生産' },
    ],
    sideLabels: ['⇔', null, '⇔', null],
    caption: '説明文・社会科と共通する対義語。権利⇔義務、生産⇔消費はセットで覚える',
  },
  kv_126: {
    kind: 'numberLine',
    min: -3,
    max: 3,
    step: 1,
    points: [
      { x: -2, label: '薄い' },
      { x: 0, label: 'ふつう' },
      { x: 2, label: '厚い／濃い' },
    ],
    caption: '「薄い」は〈厚い〉の反対にも〈濃い〉の反対にもなる。和語の対義語は文脈を見てから決める',
  },

  // ── 多義語：意味の広がり ──────────────────
  kv_128: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: '取る（手に持つ）' },
      { x: 4, y: 0, label: '採る（採用する）' },
      { x: 5, y: 3, label: '捕る（つかまえる）' },
      { x: 2, y: 5, label: '撮る（写真を）' },
      { x: -1, y: 3, label: '執る（事務を）' },
    ],
    caption: '多義語は中心の意味（手でつかむ）から意味が外へ広がる。漢字はその広がった先を書き分けたもの',
  },
  kv_129: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: '当たる（命中）' },
      { x: 4, y: 0, label: '当たる（的中）' },
      { x: 4, y: 3, label: '当たる（担当・相当）' },
      { x: 0, y: 3, label: 'あたる（害を受ける）' },
    ],
    caption: '「あたる」は一語で四方向に意味が広がる。文中でどの方向かは、主語と目的語を見て決める',
  },

  // ── 抽象語：具体⇔抽象・主観⇔客観 ─────────────
  kv_133: {
    kind: 'numberLine',
    min: 0,
    max: 4,
    step: 1,
    points: [
      { x: 0, label: '柴犬のハチ' },
      { x: 1.3, label: '犬' },
      { x: 2.6, label: '動物' },
      { x: 3.9, label: '生物' },
    ],
    caption: '右へ行くほど抽象的（共通点だけを取り出す）、左へ行くほど具体的。説明文は右の語で主張し、左の語で例を示す',
  },
  kv_134: {
    kind: 'numberLine',
    min: -3,
    max: 3,
    step: 1,
    points: [
      { x: -2, label: '主観' },
      { x: 0, label: '感想＋根拠' },
      { x: 2, label: '客観' },
    ],
    caption: '主観＝自分だけの見方（私はこう感じる）／客観＝だれが見てもそう言える見方（測った数値・事実）',
  },
  kv_135: {
    kind: 'polygon',
    points: [
      { x: 0, y: 2, label: '普遍（すべてに共通）' },
      { x: 4, y: 2, label: '特殊（一部だけ）' },
      { x: 4, y: 0, label: '相対（比べて決まる）' },
      { x: 0, y: 0, label: '絶対（比べようがない）' },
    ],
    sideLabels: ['⇔', null, '⇔', null],
    caption: '「普遍」は〈広がりの問題〉、「絶対」は〈比較の問題〉。「不変（変わらない）」とは別の語なので混同しない',
  },
  kv_140: {
    kind: 'polygon',
    points: [
      { x: 0, y: 2, label: '自然' },
      { x: 4, y: 2, label: '人工' },
      { x: 4, y: 0, label: '効率' },
      { x: 0, y: 0, label: 'ゆとり' },
    ],
    sideLabels: ['⇔', null, '⇔', null],
    caption: '説明文は「二項対立」で書かれることが多い。対立する二語を見つけたら、筆者がどちら側に立つかを確かめる',
  },

  // ── カタカナ語 ──────────────────────────
  kv_142: {
    kind: 'numberLine',
    min: -3,
    max: 3,
    step: 1,
    points: [
      { x: -2, label: 'ローカル（地域）' },
      { x: 0, label: '国・地方' },
      { x: 2, label: 'グローバル（地球規模）' },
    ],
    caption: 'グローバル⇔ローカルは「広さ」の軸。近年はその両方を同時に見る「グローカル」という言い方もある',
  },
};
