// ───────────────────────────────────────────────────────────────
// 単語カードに「📌 ここが大切（用法・差がつく）」「🔗 セットで暗記」を
// 補うオリジナルの使い分けノート。市販単語集の文面・例文は一切引用せず、
// 標準的な文法知識を自分の言葉で書いている。
// キーは見出し語（小文字）。カード側で card.keyPoint / card.setNote が
// 無いときのフォールバックとして使う。
// ───────────────────────────────────────────────────────────────

export type UsageNote = { keyPoint?: string; setNote?: string };

export const vocabUsageNotes: Record<string, UsageNote> = {
  // ── 「言う・話す」系の使い分け ──────────────────────────
  speak: {
    keyPoint: 'say / tell / speak / talk の違い：say は「言葉（内容）を言う」、tell は「人に伝える（tell + 人 + 内容）」、speak は「(一方的に)話す・言語を話す」、talk は「(対話して)話す」。',
    setNote: 'speak to +人 で「〜に話しかける」。speak English のように言語を目的語に取れる。',
  },
  say: {
    keyPoint: 'say は「〜と言う」で内容を言う動詞。say to +人 の形で相手を示す（say +人 とは言えない）。tell は tell +人 +内容 の語順。',
  },
  tell: {
    keyPoint: 'tell +人 +内容 の語順が基本（例：「彼に真実を伝える」）。道案内・区別の意味もある。say は内容だけ、tell は相手が必要。',
  },
  talk: {
    keyPoint: 'talk は「対話する」。talk with / to +人、talk about +話題。一方的な speak と対比で覚える。',
  },

  // ── 「見る・聞く」系 ──────────────────────────────────
  see: {
    keyPoint: 'see / look / watch の違い：see は「自然に目に入る・見える」、look (at) は「意識して視線を向ける」、watch は「動くものをじっと見る」。',
  },
  look: {
    keyPoint: 'look は自動詞。「〜を見る」は look at +目的語。look for「探す」、look after「世話をする」も頻出。',
  },
  watch: {
    keyPoint: 'watch は「動くもの・変化するものをじっと見る」（テレビ・試合・様子）。静止画や景色は see / look を使う。',
  },
  hear: {
    keyPoint: 'hear / listen の違い：hear は「自然に聞こえる」、listen (to) は「意識して耳を傾ける」。listen は自動詞で to が必要。',
  },
  listen: {
    keyPoint: 'listen は自動詞。「〜を聞く」は listen to +目的語。無意識の hear と対比で覚える。',
  },

  // ── 貸し借り・行き来 ──────────────────────────────────
  borrow: {
    keyPoint: 'borrow / lend の違い：borrow は「(自分が)借りる」、lend は「(相手に)貸す」。borrow ... from ~ / lend +人 +物。',
  },
  lend: {
    keyPoint: 'lend +人 +物 で「(人)に(物)を貸す」。無料で貸すのが lend、有料は rent。borrow(借りる)と方向が逆。',
  },
  bring: {
    keyPoint: 'bring / take の違い：bring は「話し手の方へ持ってくる」、take は「話し手から離れた所へ持っていく」。come / go と同じ方向の感覚。',
    setNote: 'bring-brought-brought（A-B-B型）。過去形・過去分詞が同じ。',
  },
  come: {
    keyPoint: 'come は「話し手・聞き手の方へ向かう」、go は「そこから離れていく」。日本語の「行く/来る」と一致しない場合がある（例：「今行くよ」は I\'m coming.）。',
  },

  // ── 数量・比較 ────────────────────────────────────────
  many: {
    keyPoint: 'many は数えられる名詞（複数形）に、much は数えられない名詞に使う。「たくさんの」は a lot of / lots of なら両方に使える。',
  },
  few: {
    keyPoint: 'few / little は「ほとんど〜ない」（否定的）、a few / a little は「少しはある」（肯定的）。few＝数、little＝量。',
  },
  another: {
    keyPoint: 'another は「もう一つ(別の)」＝ an + other で必ず単数。the other は「(2つのうち)残りの一方」、others は「他のいくつか」。',
  },

  // ── 到着・所要 ────────────────────────────────────────
  reach: {
    keyPoint: 'reach は他動詞で前置詞不要（reach the station）。arrive は at/in が必要（arrive at）、get は get to を使う。',
  },
  arrive: {
    keyPoint: '狭い場所は arrive at、広い場所(都市・国)は arrive in。reach は前置詞なしで直接目的語を取る。',
  },

  // ── 時間・お金 ────────────────────────────────────────
  spend: {
    keyPoint: 'spend +時間/お金 + on〜 / (in) 〜ing。「(人)が費やす」。take は「(事が主語で)時間がかかる」、cost は「(物が)お金がかかる」。',
  },
  during: {
    keyPoint: 'during +名詞（during summer）、for +期間の長さ（for two hours）、while +文（while I was out）。後ろに来る形で区別する。',
  },

  // ── 不規則動詞の活用（リズムで覚える） ────────────────
  go:   { setNote: 'go-went-gone（A-B-C型）。過去形 went は原形と全く違う形なので要注意。' },
  eat:  { setNote: 'eat-ate-eaten（A-B-C型）。ate の発音は「エイト」。' },
  take: { setNote: 'take-took-taken（A-B-C型）。take/took/taken と3つ続けてリズムで覚える。' },
  give: { setNote: 'give-gave-given（A-B-C型）。give +人 +物 の二重目的語も頻出。' },
  write:{ setNote: 'write-wrote-written（A-B-C型）。派生語 writer(作家)・writing(書くこと)。' },
  buy:  { setNote: 'buy-bought-bought（A-B-B型）。過去形と過去分詞が同じ形。' },
  catch:{ setNote: 'catch-caught-caught（A-B-B型）。teach-taught と同じパターン。' },
  feel: { setNote: 'feel-felt-felt（A-B-B型）。過去形と過去分詞が同じ felt。' },
  get:  { setNote: 'get-got-gotten[got]（A-B-C型）。アメリカ英語では過去分詞に gotten を使う。' },

  // ── 前置詞の使い分け ──────────────────────────────────
  between: {
    keyPoint: 'between は基本「2つの間」だが、3つ以上でも「それぞれ2つずつ取り上げて」の意味なら between を使う。among は「(まとまった3つ以上の)集団の中で」。',
  },
  among: {
    keyPoint: 'among は「3つ以上のまとまり・集団の中で」。個々を区別しないときに使う。2者間・個別比較は between。',
  },
  near: {
    keyPoint: 'by / beside / near：by と beside は「すぐそば」（beside は横に並ぶ感じ）、near は「近く」だが by/beside ほど接していない。',
  },
};
