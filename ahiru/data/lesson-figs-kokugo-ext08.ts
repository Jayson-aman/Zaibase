import type { Figure } from './figures';

// 中学受験 国語「説明文・論説文の読解」（kokugo_s271〜kokugo_s315）用の図解。
// キーは lessons-kokugo-ext08.ts の figureId と対応する。
// polygon は「文章構成図」として使う（頂点＝役割、辺のラベル＝つながり方）。
// numberLine は「文番号・段落番号の並び」を軸にして、文章のどこに何があるかを示す。
export const lessonFigsKokugoExt08: Record<string, Figure> = {
  // ── 1. 指示語の指す内容（s271〜s276） ─────────────────────
  // s271: 指示語は前を指す（文の並びの上で確認する）
  lf_kkext08_271: {
    kind: 'numberLine',
    min: 1,
    max: 3,
    step: 1,
    points: [
      { x: 1, label: '指す内容' },
      { x: 2, label: 'それ' },
    ],
    caption: '軸の目盛りは文の番号。説明文の指示語はほとんどが前を指すので、第2文の「それ」を見たら第1文へもどって探す',
  },
  // s272: 指す範囲は「一語→一文→段落全体」の順に広げる
  lf_kkext08_272: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: '一語' },
      { x: 4, y: 0, label: '一文' },
      { x: 2, y: 3, label: '段落全体' },
    ],
    sideLabels: ['通らなければ広げる', 'まだ通らなければ広げる', '広げすぎたら もどす'],
    caption: 'あてはめて意味が通らなければ次の段階へ広げ、通るうちで一番せまい範囲を答えにする',
  },
  // s273: 「こうした」は並んだ例をまとめて指す
  lf_kkext08_273: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: '例1' },
      { x: 2, y: 0, label: '例2' },
      { x: 4, y: 0, label: '例3' },
      { x: 2, y: 3, label: 'こうした〜' },
    ],
    sideLabels: [null, null, 'まとめて受ける', 'まとめて受ける'],
    caption: '「こうした」「このような」は直前の一つではなく、並んだ例の全部をまとめて指す。共通点を一言でくくって答える',
  },
  // s275: 後ろを指す指示語
  lf_kkext08_275: {
    kind: 'numberLine',
    min: 1,
    max: 3,
    step: 1,
    points: [
      { x: 1, label: '次のような' },
      { x: 2, label: '指す内容' },
    ],
    caption: '「次のようなことだ」「それは〜からである」は例外で、指す内容が後ろにある。前を探して見つからないときは後ろを疑う',
  },

  // ── 2. 接続語の働きと空欄補充（s277〜s283） ───────────────
  // s277: 接続語の六つの働き
  lf_kkext08_277: {
    kind: 'polygon',
    points: [
      { x: 2, y: 4, label: '順接' },
      { x: 4, y: 3, label: '逆接' },
      { x: 4, y: 1, label: '添加' },
      { x: 2, y: 0, label: '説明' },
      { x: 0, y: 1, label: '対比' },
      { x: 0, y: 3, label: '転換' },
    ],
    caption: '接続語は六つの働きに整理する。順接（だから）／逆接（しかし）／添加（また）／説明・言いかえ（つまり）／対比（一方）／転換（ところで）',
  },
  // s278: 順接は原因から結果へ
  lf_kkext08_278: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: '原因' },
      { x: 4, y: 0, label: '結果' },
      { x: 2, y: 2.5, label: 'だから' },
    ],
    sideLabels: ['原因 → 結果', null, null],
    caption: '順接は「前＝原因、後ろ＝結果」。理由をきかれたら「だから」の前を答える',
  },
  // s279: 一般論 → しかし → 主張
  lf_kkext08_279: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: '一般論' },
      { x: 4, y: 0, label: 'しかし' },
      { x: 2, y: 2.5, label: '筆者の主張' },
    ],
    sideLabels: ['〜と思われがちだ', 'ここから主張', null],
    caption: '説明文で最も多い型。「〜と言われる」「たしかに」で始まる一般論を、逆接で打ち消して主張へ進む',
  },
  // s280: 「つまり」は長い説明を短い一文へ
  lf_kkext08_280: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: '長い説明' },
      { x: 4, y: 0, label: 'つまり' },
      { x: 2, y: 2.5, label: '要点の一文' },
    ],
    sideLabels: ['同じ内容', '短く抽象的に', null],
    caption: '「つまり・すなわち・要するに」の後ろは、前の内容を短くまとめ直した一文。要旨問題の答えの中心になる',
  },
  // s281: 主張 → たとえば → 具体例 → このように → 主張
  lf_kkext08_281: {
    kind: 'polygon',
    points: [
      { x: 0, y: 2.5, label: '主張' },
      { x: 4, y: 2.5, label: 'たとえば' },
      { x: 4, y: 0, label: '具体例' },
      { x: 0, y: 0, label: 'このように' },
    ],
    sideLabels: ['例へ下りる', null, '主張へもどる', null],
    caption: '具体例は主張にはさまれている。「たとえば」から「このように」までをかっこでくくると、外側に主張が残る',
  },
  // s282: 対比は観点をそろえて二列に
  lf_kkext08_282: {
    kind: 'polygon',
    points: [
      { x: 0, y: 2.5, label: 'A' },
      { x: 4, y: 2.5, label: 'B' },
      { x: 4, y: 0, label: 'Bの特徴' },
      { x: 0, y: 0, label: 'Aの特徴' },
    ],
    sideLabels: ['← 対比 →', null, '同じ観点で比べる', null],
    caption: '「一方」「それに対して」が出たら二列の表にする。上に比べるもの、下に同じ観点でそろえた特徴を書く',
  },

  // ── 3. 段落の要点をつかむ（s284〜s289） ───────────────────
  // s284: 形式段落を意味段落へまとめる
  lf_kkext08_284: {
    kind: 'numberLine',
    min: 1,
    max: 7,
    step: 1,
    segments: [
      { from: 2, to: 4 },
      { from: 6, to: 7 },
    ],
    points: [
      { x: 1, label: '話題' },
      { x: 3, label: '説明' },
      { x: 6.5, label: '結論' },
    ],
    caption: '軸の目盛りは形式段落の番号。改行の数ではなく内容のまとまりで区切り、意味段落にまとめる',
  },
  // s285: 中心文とそれを支える文
  lf_kkext08_285: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: '具体例' },
      { x: 4, y: 0, label: '補足説明' },
      { x: 2, y: 3, label: '中心文' },
    ],
    sideLabels: [null, '支える', '支える'],
    caption: '段落は中心文と、それを支える文でできている。中心文は「この一文だけ残して意味が通るか」で見つける',
  },
  // s289: 意味段落に小見出しをつける
  lf_kkext08_289: {
    kind: 'numberLine',
    min: 1,
    max: 4,
    step: 1,
    points: [
      { x: 1, label: '事実' },
      { x: 2, label: '利点' },
      { x: 3, label: '問題点' },
      { x: 4, label: '提案' },
    ],
    caption: '軸の目盛りは意味段落の番号。十字前後の名詞で見出しをつけて並べると、そのまま文章の流れになる',
  },

  // ── 4. 段落どうしの関係・文章構成（s290〜s296） ───────────
  // s290: 段落の役割の並び
  lf_kkext08_290: {
    kind: 'numberLine',
    min: 1,
    max: 6,
    step: 1,
    points: [
      { x: 1, label: '話題' },
      { x: 2, label: '問題提起' },
      { x: 4, label: '根拠' },
      { x: 6, label: 'まとめ' },
    ],
    caption: '軸の目盛りは段落番号。段落の一文目だけを拾い読みすると、役割の並びが見えてくる',
  },
  // s291: 序論・本論・結論
  lf_kkext08_291: {
    kind: 'polygon',
    points: [
      { x: 0, y: 3, label: '序論' },
      { x: 4, y: 3, label: '本論' },
      { x: 2, y: 0, label: '結論' },
    ],
    sideLabels: ['問いを立てる', '問いに答える', '主張が対応'],
    caption: '序論で立てた問いに、結論が答える。本論はその答えを支える説明と具体例。序論と結論は必ず対応している',
  },
  // s292: 頭括型
  lf_kkext08_292: {
    kind: 'numberLine',
    min: 1,
    max: 4,
    step: 1,
    segments: [{ from: 2, to: 4 }],
    points: [{ x: 1, label: '主張' }],
    caption: '頭括型。目盛りは段落番号で、最初に主張を置き、そのあとに理由と具体例が続く。理由は後ろにある',
  },
  // s293: 尾括型
  lf_kkext08_293: {
    kind: 'numberLine',
    min: 1,
    max: 4,
    step: 1,
    segments: [{ from: 1, to: 3 }],
    points: [{ x: 4, label: '主張' }],
    caption: '尾括型。説明と具体例を積み上げ、最後に主張を述べる。中学入試で最も多い型で、最終段落を精読する',
  },
  // s294: 双括型
  lf_kkext08_294: {
    kind: 'numberLine',
    min: 1,
    max: 4,
    step: 1,
    segments: [{ from: 2, to: 3 }],
    points: [
      { x: 1, label: '主張' },
      { x: 4, label: '主張' },
    ],
    caption: '双括型。最初と最後の二か所に主張がある。後ろの主張のほうが一歩深まっているので、比べて増えた言葉に注目する',
  },
  // s295: 段落どうしの関係の四つの型
  lf_kkext08_295: {
    kind: 'polygon',
    points: [
      { x: 0, y: 3, label: '並列' },
      { x: 4, y: 3, label: '対比' },
      { x: 4, y: 0, label: '因果' },
      { x: 0, y: 0, label: '言いかえ' },
    ],
    caption: '段落と段落は、並列（また）／対比（一方）／因果（そのため）／言いかえ（つまり・たとえば）のどれかでつながっている',
  },
  // s296: 文章構成図の型
  lf_kkext08_296: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: '要点' },
      { x: 4, y: 0, label: '関係の記号' },
      { x: 2, y: 3, label: '段落番号' },
    ],
    sideLabels: ['＝ ⇔ → ＋ 例', null, null],
    caption: '構成図は「段落番号＋十字以内の要点＋関係の記号」の三つだけ。主張の段落は二重丸、具体例はかっこで囲む',
  },

  // ── 5. 筆者の主張を見つける（s297〜s302） ─────────────────
  // s298: 問題提起と答えの対応
  lf_kkext08_298: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: '問題提起' },
      { x: 4, y: 0, label: '説明・例' },
      { x: 2, y: 2.5, label: '答え＝主張' },
    ],
    sideLabels: ['〜だろうか', '答えへ', '問いと対応'],
    caption: '「〜だろうか」で立てた問いには必ず答えがある。問いと答えを矢印で結ぶと、設問の中心が決まる',
  },
  // s300: くり返される内容が主張
  lf_kkext08_300: {
    kind: 'numberLine',
    min: 1,
    max: 4,
    step: 1,
    points: [
      { x: 1, label: 'くり返し' },
      { x: 3, label: 'くり返し' },
      { x: 4, label: 'くり返し' },
    ],
    caption: '軸の目盛りは文（段落）の番号。同じ内容が三か所以上、言い方を変えてくり返されていれば、それが主張',
  },

  // ── 6. 具体と抽象の関係（s303〜s308） ─────────────────────
  // s303: 言葉の階段（抽象と具体）
  lf_kkext08_303: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: '具体' },
      { x: 4, y: 0, label: '具体' },
      { x: 2, y: 3, label: '抽象' },
    ],
    sideLabels: [null, 'まとめると上へ', '例をあげると下へ'],
    caption: '上へ行くほどあてはまる範囲が広く、下へ行くほど場面がはっきりする。説明文の主張は必ず上（抽象）の側にある',
  },
  // s304: 具体例が主張を支える
  lf_kkext08_304: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: '例1' },
      { x: 2, y: 0, label: '例2' },
      { x: 4, y: 0, label: '例3' },
      { x: 2, y: 3, label: '主張' },
    ],
    sideLabels: [null, null, '支える', '支える'],
    caption: '複数の具体例は、同じ一つの主張を支えている。例が二つ以上あるときは、両方をふくむ共通点が主張になる',
  },
  // s305: 具体例の範囲（どこからどこまで）
  lf_kkext08_305: {
    kind: 'numberLine',
    min: 1,
    max: 4,
    step: 1,
    segments: [{ from: 2, to: 3 }],
    points: [
      { x: 2, label: 'たとえば' },
      { x: 4, label: 'このように' },
    ],
    caption: '軸の目盛りは文の番号。太い線の部分が具体例。ここをかっこでくくると、外側の第1文と第4文に主張が残る',
  },

  // ── 7. 対比・因果関係の読み取り（s309〜s315） ─────────────
  // s309: 二項対立の整理
  lf_kkext08_309: {
    kind: 'polygon',
    points: [
      { x: 0, y: 2.5, label: 'A' },
      { x: 4, y: 2.5, label: 'B' },
      { x: 4, y: 0, label: 'Bの説明' },
      { x: 0, y: 0, label: 'Aの説明' },
    ],
    sideLabels: ['何と何か', null, '観点をそろえる', null],
    caption: '対比が出たら、まず「何と何を比べているか」を二つ書き出し、同じ観点で下に説明をそろえる',
  },
  // s312: 因果は矢印でつなぐ
  lf_kkext08_312: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: '原因' },
      { x: 2, y: 0, label: '途中' },
      { x: 4, y: 0, label: '結果' },
      { x: 2, y: 2.5, label: '〜から。' },
    ],
    sideLabels: ['→', '→', '答えの形', null],
    caption: '原因から結果までを矢印で一本につなぐ。理由を答えるときは、途中の段階もふくめて「〜から。」で結ぶ',
  },
  // s314: 前後関係と因果関係のちがい
  lf_kkext08_314: {
    kind: 'numberLine',
    min: 1,
    max: 3,
    step: 1,
    points: [
      { x: 1, label: 'できごとA' },
      { x: 3, label: 'できごとB' },
    ],
    caption: '軸の目盛りは時間の順。AのあとにBが起きただけでは因果とは言えない。「Aだから B」と入れて意味が通るかで確かめる',
  },
  // s315: 対比＋因果＋主張の総合構成図
  lf_kkext08_315: {
    kind: 'polygon',
    points: [
      { x: 0, y: 3, label: '昔（A）' },
      { x: 4, y: 3, label: '今（B）' },
      { x: 4, y: 1.5, label: 'その結果' },
      { x: 2, y: 0, label: '主張' },
    ],
    sideLabels: ['⇔ 対比', '→ 因果', '◎ ここが答え', null],
    caption: '入試の説明文は、対比（⇔）と因果（→）が組み合わさって主張（◎）へ向かう。三つの記号を書き入れれば骨組みが完成する',
  },
};
