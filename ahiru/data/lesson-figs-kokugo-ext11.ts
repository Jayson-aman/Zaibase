import type { Figure } from './figures';

// 中学受験国語 拡張ユニットXI「古文・漢文の基礎」（30セッション）の図解バッチ。
// キーは lessons-kokugo-ext11.ts の figureId と対応（kokugo_s391〜kokugo_s420）。
// 歴史的仮名遣いの「直し方の対応表」は polygon（頂点ラベル）で、
// 返り点の「読む順番」は numberLine（1・2・3…の目盛り）で示している。
export const lessonFigsKokugoExt11: Record<string, Figure> = {
  // ── 1. 歴史的仮名遣い ─────────────────────────
  // 語中・語尾のハ行 → ワ行。五角形の頂点に5つの対応を並べる。
  kf11_s391: {
    kind: 'polygon',
    points: [
      { x: 0, y: 100, label: 'は→わ' },
      { x: -95, y: 31, label: 'ひ→い' },
      { x: -59, y: -81, label: 'ふ→う' },
      { x: 59, y: -81, label: 'へ→え' },
      { x: 95, y: 31, label: 'ほ→お' },
    ],
    fill: true,
    caption: '語の中・語の終わりにある「は・ひ・ふ・へ・ほ」だけが「わ・い・う・え・お」に変わる。語の先頭のハ行はそのまま',
  },
  // ゐ・ゑ・を・ぢ・づ の直し方。
  kf11_s392: {
    kind: 'polygon',
    points: [
      { x: 0, y: 100, label: 'ゐ→い' },
      { x: -95, y: 31, label: 'ゑ→え' },
      { x: -59, y: -81, label: 'を→お' },
      { x: 59, y: -81, label: 'ぢ→じ' },
      { x: 95, y: 31, label: 'づ→ず' },
    ],
    fill: true,
    caption: 'ワ行の「ゐ・ゑ・を」は「い・え・お」に、「ぢ・づ」は「じ・ず」に直す。ただし助詞の「を」は「を」のまま書く',
  },
  // 母音が連続したときの直し方（三角形の3頂点）。
  kf11_s393: {
    kind: 'polygon',
    points: [
      { x: 0, y: 100, label: 'au→オー' },
      { x: -90, y: -60, label: 'iu→ユー' },
      { x: 90, y: -60, label: 'eu→ヨー' },
    ],
    fill: true,
    caption: 'やう→よう（yau→yô）／しう→しゅう（siu→syû）／けふ→きょう（kefu→keu→kyô）。ハ行を直してから母音の連続を直す',
  },
  // 評価をあらわす4語の順序（よい ←→ わるい）。
  kf11_s398: {
    kind: 'numberLine',
    min: 0,
    max: 5,
    step: 1,
    segments: [{ from: 1, to: 4 }],
    points: [
      { x: 1, label: 'あし' },
      { x: 2, label: 'わろし' },
      { x: 3, label: 'よろし' },
      { x: 4, label: 'よし' },
    ],
    caption: '右へ行くほどよい評価。よし（すばらしい）＞よろし（悪くない）＞わろし（よくない）＞あし（悪い）',
  },
  // 古文の一日の時間帯（0時〜24時）。
  kf11_s399: {
    kind: 'numberLine',
    min: 0,
    max: 24,
    step: 6,
    points: [
      { x: 4, label: 'あかつき' },
      { x: 6, label: 'あけぼの' },
      { x: 8, label: 'つとめて' },
      { x: 12, label: 'ひる' },
      { x: 18, label: 'ゆふぐれ' },
      { x: 21, label: 'よひ' },
    ],
    caption: 'あかつき（まだ暗い夜明け前）→あけぼの（空が白みはじめるころ）→つとめて・あした（早朝）→ひる→ゆふぐれ→よひ（日が暮れて間もないころ）',
  },
  // 有名な古典作品の成立年（およそ）。
  kf11_s406: {
    kind: 'numberLine',
    min: 850,
    max: 1750,
    step: 150,
    points: [
      { x: 900, label: '竹取物語' },
      { x: 1000, label: '枕草子' },
      { x: 1212, label: '方丈記' },
      { x: 1331, label: '徒然草' },
      { x: 1702, label: '奥の細道' },
    ],
    caption: '竹取物語・枕草子は平安時代、方丈記・平家物語（1240年ごろ）・徒然草は鎌倉時代、奥の細道は江戸時代の作品',
  },
  // ── 5. 漢文の訓読 ────────────────────────────
  // 白文→訓読文→書き下し文の三段階。
  kf11_s411: {
    kind: 'numberLine',
    min: 0,
    max: 4,
    step: 1,
    segments: [{ from: 1, to: 3 }],
    points: [
      { x: 1, label: '白文' },
      { x: 2, label: '訓読文' },
      { x: 3, label: '書き下し文' },
    ],
    caption: '漢字だけの白文に訓点（返り点・送りがな・句読点）を付けたものが訓読文、それを日本語の文に書き改めたものが書き下し文',
  },
  // レ点の読む順番：「有レ備無レ患」＝備へ有れば患ひ無し。
  kf11_s412: {
    kind: 'numberLine',
    min: 0,
    max: 5,
    step: 1,
    points: [
      { x: 1, label: '備' },
      { x: 2, label: '有' },
      { x: 3, label: '患' },
      { x: 4, label: '無' },
    ],
    caption: '「有レ備無レ患」の読む順番。レ点は下の一字を先に読んでから、すぐ上の一字に返る。書き下し文は「備へ有れば患ひ無し」',
  },
  // 一二点の読む順番：「百聞不レ如二一見一」＝百聞は一見に如かず。
  kf11_s413: {
    kind: 'numberLine',
    min: 0,
    max: 7,
    step: 1,
    points: [
      { x: 1, label: '百' },
      { x: 2, label: '聞' },
      { x: 3, label: '一' },
      { x: 4, label: '見' },
      { x: 5, label: '如' },
      { x: 6, label: '不' },
    ],
    caption: '「百聞不レ如二一見一」の読む順番。一点の付いた「見」まで読んだら二点の「如」へ返り、最後にレ点の「不」を読む',
  },
  // 上中下点の読む順番：「宋人有下耕二田一者上」＝宋人に田を耕す者有り。
  kf11_s414: {
    kind: 'numberLine',
    min: 0,
    max: 7,
    step: 1,
    points: [
      { x: 1, label: '宋' },
      { x: 2, label: '人' },
      { x: 3, label: '田' },
      { x: 4, label: '耕' },
      { x: 5, label: '者' },
      { x: 6, label: '有' },
    ],
    caption: '「宋人有下耕二田一者上」の読む順番。まず一二点を片づけ、上点の「者」を読んでから下点の「有」に返る（韓非子・守株）',
  },
  // ── 6. 漢詩 ─────────────────────────────────
  // 漢詩の形式ごとの字数。
  kf11_s417: {
    kind: 'barChart',
    yLabel: '詩全体の字数（字）',
    bars: [
      { label: '五言絶句', value: 20 },
      { label: '七言絶句', value: 28 },
      { label: '五言律詩', value: 40 },
      { label: '七言律詩', value: 56 },
    ],
    caption: '絶句は4句、律詩は8句。五言は1句5字、七言は1句7字。孟浩然「春暁」は4句×5字＝20字の五言絶句',
  },
};
