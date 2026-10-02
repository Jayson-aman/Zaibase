// 中学英語（共通）（formulas-eigo-tsuika.ts の label 14番目〜26番目）の動く図解スライド。
// キーは項目の label（買い切りの識別キーと同じ）。「なぜ？」の連鎖で、各9枚以上。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, show, band, fresh } from './diagram-kit';

// 下の帯（y=148 から下）に、そのスライドの式・ひとことを出す。\n で改行できる。
const cap = (t: string, color: string = C.blue, fill: string = FILL.blue, size = 13) => {
  const n = t.split('\n').length;
  return band(148, bx(14, 158, 292, 26 + 15 * n, t, color, fill, size));
};

// 色の組
const K = {
  b: [C.blue, FILL.blue],
  g: [C.green, FILL.green],
  r: [C.red, FILL.red],
  p: [C.purple, FILL.purple],
  y: [C.main, FILL.yellow],
  n: [C.gray, FILL.gray],
} as const;
type Key = keyof typeof K;

// 語の箱を横に並べる（中央ぞろえ）。[文字, 色, 幅]
const row = (items: [string, Key, number][], y: number, h = 32, size = 13, gap = 6): DiagramElement[] => {
  const total = items.reduce((s, it) => s + it[2], 0) + gap * (items.length - 1);
  let x = (320 - total) / 2;
  const out: DiagramElement[] = [];
  for (const [t, k, w] of items) {
    out.push(bx(x, y, w, h, t, K[k][0], K[k][1], size));
    x += w + gap;
  }
  return out;
};

// 1つの箱
const B = (x: number, y: number, w: number, h: number, t: string, k: Key, size = 13) => bx(x, y, w, h, t, K[k][0], K[k][1], size);

// 例文を大きく出す（上の見出し用）
const title = (t: string, y = 20, k: Key = 'y') => B(14, y, 292, 34, t, k, 15);

export const DIAGRAMS_EIGO_B: Record<string, DiagramFigure> = {
  // ─────────────────────────────────────────
  '場所を表す at・in・on・under・between など': show([
    {
      note: 'The cat is ( ) the desk.（ねこは机の下にいる）。かっこに入るのは前置詞です。❓前置詞って何？→「ものとものが、どんな位置関係にあるか」を言う短い語です。',
      add: [title('The cat is ( ) the desk.'), B(40, 80, 100, 40, 'the cat', 'g'), B(180, 80, 100, 40, 'the desk', 'y'), lb(160, 100, '？', 22, C.red, 'middle', true), ...cap('前置詞＝位置関係を表す語')],
    },
    {
      note: '❓なぜ前置詞を使い分けるの？→英語は「どこにいるか」を、前置詞1語で言い分けるからです。日本語の「に」は1つでも、英語は位置関係によって語がかわります。',
      add: [...fresh(lb(160, 30, '日本語：「机に」', 14, C.gray, 'middle', true), lb(160, 60, '英語：位置関係ごとに別の語', 14, C.main, 'middle', true), ...row([['in', 'b', 50], ['on', 'g', 50], ['at', 'r', 50], ['under', 'p', 70]], 90, 34, 14)), ...cap('見た目のイメージで選ぶ')],
    },
    {
      note: 'まず in です。❓in はどんなとき？→ものが「囲まれた中」にあるときです。❓なぜ「中」？→in は「内側」の意味の語なので、部屋・国・箱のように、まわりを囲まれた場所に使います。',
      add: [...fresh(bx(60, 22, 200, 100, undefined, C.blue, FILL.blue), ci(160, 80, 12, 'me', C.green, FILL.green, 10), lb(160, 36, 'the room', 13, C.blue, 'middle', true)), ...cap('in the room（部屋の中）\nin ＝ 囲まれた中', C.blue, FILL.blue)],
    },
    {
      note: '次は on です。❓on はどんなとき？→ものが表面に「ふれている」ときです。❓上だけ？→いいえ。「ふれている」ことが大事なので、机の上でも、かべにはってあるときでも on を使います。',
      add: [...fresh(ln(30, 90, 150, 90, C.ink, false, 3), ci(90, 78, 12, 'ball', C.green, FILL.green, 9), lb(90, 108, 'on the desk', 12, C.ink, 'middle', true), ln(220, 20, 220, 120, C.ink, false, 3), bx(222, 50, 34, 26, 'map', C.green, FILL.green, 10), lb(268, 108, 'on the wall', 12, C.ink, 'middle', true)), ...cap('on ＝ ふれている（上とはかぎらない）', C.green, FILL.green)],
    },
    {
      note: '次は at です。❓at はどんなとき？→場所を「1つの点」として見るときです。❓なぜ点？→at は「地点」を指す語だからです。駅は待ち合わせの1つの地点と考えるので at the station です。',
      add: [...fresh(ln(20, 80, 300, 80, C.gray, false, 2), ci(160, 80, 8, undefined, C.red, FILL.red), lb(160, 56, 'the station', 13, C.red, 'middle', true), ar(160, 66, 160, 74, C.red)), ...cap('at ＝ 地点（1つの点）\nWe met at the station.', C.red, FILL.red)],
    },
    {
      note: '❓同じ大阪でも in と at が出てくるのはなぜ？→話す人の「見方」がちがうからです。大阪という広がりの中に住むなら in、乗りかえの1地点として見るなら at です。',
      add: [...fresh(bx(20, 24, 130, 90, undefined, C.blue, FILL.blue), lb(85, 40, 'Osaka', 12, C.blue, 'middle', true), ci(85, 78, 10, 'I', C.green, FILL.green, 10), lb(85, 130, 'live in Osaka', 12, C.blue, 'middle', true), ln(170, 70, 305, 70, C.gray, false, 2), ci(238, 70, 8, undefined, C.red, FILL.red), lb(238, 50, 'the station', 12, C.red, 'middle', true), lb(238, 100, 'at the station', 12, C.red, 'middle', true)), ...cap('広がり → in　　1地点 → at', C.main, FILL.yellow)],
    },
    {
      note: '❓「下」は？→under です。ものの真下に入っているときに使います。The cat is under the desk. がこの問題の答えです。ほかに by・near は「近く」を表します。',
      add: [...fresh(ln(60, 60, 260, 60, C.ink, false, 4), ln(70, 60, 70, 100, C.ink, false, 3), ln(250, 60, 250, 100, C.ink, false, 3), ci(160, 88, 14, 'cat', C.green, FILL.green, 10), lb(160, 36, 'the desk', 13, C.ink, 'middle', true), lb(160, 126, 'under（下に）', 13, C.purple, 'middle', true), ci(292, 88, 12, 'me', C.blue, FILL.blue, 9), lb(292, 126, 'near', 12, C.blue, 'middle', true)), ...cap('The cat is under the desk.', C.purple, FILL.purple)],
    },
    {
      note: '次は between です。❓なぜ between A and B と、and が入るの？→between は「2つのあいだ」の意味なので、はさむものを2つ言う必要があります。その2つを and でつなぐのです。',
      add: [...fresh(...row([['Mika', 'g', 70], ['Ken', 'y', 70], ['Tom', 'g', 70]], 46, 40, 14), lb(160, 26, 'Ken is standing between Mika and Tom.', 11, C.ink, 'middle', true), ar(60, 100, 120, 100, C.green), ar(260, 100, 200, 100, C.green), lb(160, 118, 'between A and B', 13, C.main, 'middle', true)), ...cap('between ＝ 2つのあいだ\nA and B の2つがセット')],
    },
    {
      note: '❓前・後ろ・となりは？→in front of は「前に」、behind は「後ろに」、next to は「となりに」です。in front of は3語で1つの前置詞として覚えます。',
      add: [...fresh(...row([['behind\n（後ろ）', 'p', 84], ['the tree', 'g', 84], ['in front of\n（前）', 'b', 84]], 30, 44, 12), B(112, 92, 96, 30, 'next to（となり）', 'y', 12)), ...cap('in front of ／ behind ／ next to', C.purple, FILL.purple)],
    },
    {
      note: 'まとめて確かめます。❓「私は大阪に住んでいます」は？→広い場所なので I live in Osaka. ❓「ミカとトムのあいだ」は？→between。❓「駅で会った」は？→1地点なので at the station です。',
      add: [...fresh(...row([['広い場所', 'b', 88], ['→', 'n', 24], ['in Osaka', 'b', 88]], 20, 30), ...row([['1つの地点', 'r', 88], ['→', 'n', 24], ['at the station', 'r', 88]], 60, 30), ...row([['2つのあいだ', 'g', 88], ['→', 'n', 24], ['between A and B', 'g', 88]], 100, 30)), ...cap('in は中・at は地点・on はふれて上', C.main, FILL.yellow)],
    },
  ]),

  // ─────────────────────────────────────────
  'from・to・for・by・with の使い分け': show([
    {
      note: '「〜で」「〜へ」「〜のために」…日本語では1つの言い方でも、英語は前置詞を使い分けます。❓なぜ使い分けるの？→英語は「出発点」「手段」「道具」など、関係のちがいを前置詞で見せる言語だからです。',
      add: [title('from・to・for・by・with'), ...row([['from', 'b', 52], ['to', 'g', 52], ['for', 'r', 52], ['by', 'p', 52], ['with', 'y', 52]], 76, 34, 14), lb(160, 130, '5つの前置詞を役わりで分ける', 12, C.gray, 'middle', true), ...cap('日本語より細かく使い分ける')],
    },
    {
      note: 'from と to からです。❓from は何？→出発点です。❓to は？→到着点です。始まりと終わりをセットで言うので、from Tokyo to Osaka（東京から大阪まで）の形になります。',
      add: [...fresh(B(20, 50, 100, 44, 'Tokyo', 'b', 15), B(200, 50, 100, 44, 'Osaka', 'g', 15), ar(122, 72, 198, 72, C.main), lb(70, 34, 'from（出発点）', 11, C.blue, 'middle', true), lb(250, 34, 'to（到着点）', 11, C.green, 'middle', true)), ...cap('from Tokyo to Osaka', C.main, FILL.yellow)],
    },
    {
      note: '次は for です。❓for はどんなとき？→「〜のために」「〜あての」「〜行きの」と、向かう先や目的があるときです。❓なぜ to ではないの？→to は「着く点」、for は「その方へ向かう気持ちや目的」を表すからです。',
      add: [...fresh(B(20, 40, 90, 44, 'a present', 'r', 13), ar(112, 62, 178, 62, C.red), B(180, 40, 90, 44, 'you', 'g', 15), lb(65, 100, 'a present for you', 12, C.red, 'middle', true), B(20, 110, 130, 28, 'the train for Kyoto', 'r', 11)), ...cap('for ＝ 向かう先・〜のために', C.red, FILL.red)],
    },
    {
      note: '次は by です。❓乗り物の「〜で」は？→by bus のように by を使います。❓なぜ bus の前に a や the がつかないの？→ここでは「バス1台」ではなく、「バスという手段」を言っているからです。',
      add: [...fresh(B(30, 40, 120, 40, 'by bus', 'p', 16), B(170, 40, 120, 40, 'by train', 'p', 16), B(30, 96, 120, 34, '×by a bus', 'n', 13), B(170, 96, 120, 34, 'on foot（歩いて）', 'y', 12)), ...cap('by ＋ 乗り物（冠詞なし）', C.purple, FILL.purple)],
    },
    {
      note: '次は with です。❓with は何を表す？→「道具」や「いっしょに」です。❓なぜ with a pen と、a がつくの？→道具は目に見える1本のもの、つまり具体的なものだからです。手段の by とのちがいはここです。',
      add: [...fresh(B(10, 30, 96, 36, 'with a pen', 'y', 12), B(112, 30, 96, 36, 'with chopsticks', 'y', 11), B(214, 30, 96, 36, 'with my friends', 'y', 11), lb(58, 84, '道具', 12, C.main, 'middle', true), lb(160, 84, '道具', 12, C.main, 'middle', true), lb(262, 84, 'いっしょに', 12, C.main, 'middle', true)), ...cap('with ＝ 道具・いっしょに', C.main, FILL.yellow)],
    },
    {
      note: '❓by と with はどう見分ける？→「乗り物・連絡の手段」なら by、「手に持って使う道具」なら with です。❓なぜ分ける？→日本語はどちらも「〜で」ですが、英語は「手段」と「道具」を別の考えとして扱うからです。',
      add: [...fresh(B(20, 20, 130, 30, 'by（手段）', 'p', 14), B(170, 20, 130, 30, 'with（道具）', 'y', 14), lb(85, 72, 'bus / train / e-mail', 12, C.purple, 'middle'), lb(235, 72, 'pen / chopsticks', 12, C.main, 'middle'), lb(85, 100, '冠詞なし', 12, C.purple, 'middle', true), lb(235, 100, 'a などがつく\n（数えられる道具なら）', 12, C.main, 'middle', true)), ...cap('乗り物は by、道具は with', C.main, FILL.yellow)],
    },
    {
      note: 'by には「そばに」の意味もあります。sit by the window は「まどのそばにすわる」です。❓at や in とのちがいは？→by は「すぐ近く」を表す語です。sit by the window を、まるごと1つの言い方として覚えましょう。',
      add: [...fresh(bx(160, 30, 100, 70, undefined, C.gray, FILL.gray), lb(210, 65, 'window', 13, C.gray, 'middle', true), ci(120, 70, 14, 'me', C.green, FILL.green, 10), ar(140, 70, 158, 70, C.purple), lb(160, 126, 'sit by the window', 13, C.purple, 'middle', true)), ...cap('by ＝ そばに（sit by the window）', C.purple, FILL.purple)],
    },
    {
      note: '選ぶ手順です。❓まず何を見る？→日本語の「〜で」「〜から」の中身です。❓なぜ中身？→日本語の言い方だけでは、英語の語が決まらないからです。出発なら from、乗り物なら by、道具なら with と、順に考えます。',
      add: [...fresh(B(10, 14, 300, 24, '出発点・到着点？ → from / to', 'b', 12), B(10, 46, 300, 24, '向かう先・〜のため？ → for', 'r', 12), B(10, 78, 300, 24, '乗り物・手段？ → by ＋ 冠詞なし', 'p', 12), B(10, 110, 300, 24, '道具・いっしょに？ → with', 'y', 12)), ...cap('まず「何を表すか」を考える')],
    },
    {
      note: '例題です。(1) I go to school ( ) bus. →乗り物なので by。(2) I eat ( ) chopsticks. →はしは道具なので with。❓なぜ (2) は with？→はしは手に持って使う道具だからです。',
      add: [...fresh(lb(160, 24, '(1) I go to school ( ) bus.', 13, C.ink, 'middle', true), B(110, 40, 100, 30, 'by', 'p', 16), lb(160, 92, '(2) I eat ( ) chopsticks.', 13, C.ink, 'middle', true), B(110, 108, 100, 30, 'with', 'y', 16)), ...cap('(1) by（乗り物）　(2) with（道具）', C.main, FILL.yellow)],
    },
  ]),

  // ─────────────────────────────────────────
  '頻度の副詞の位置': show([
    {
      note: '「いつも」「ときどき」のように、どれくらいの回数かを表す副詞があります。❓何が「頻度」？→同じことを、どれくらいの割合でするかということです。always から never まで、5つを高い順に並べます。',
      add: [title('always ＞ usually ＞ often ＞ sometimes ＞ never', 22, 'y'), ...row([['always', 'g', 54], ['usually', 'g', 54], ['often', 'b', 54], ['some-\ntimes', 'y', 54], ['never', 'r', 54]], 70, 40, 11), ...cap('左ほど、よくする')],
    },
    {
      note: '棒の長さで見ましょう。❓always は？→毎回（ほぼ100%）です。❓never は？→1回もしません（0%）。sometimes はその中間で、半分くらいのイメージです。',
      add: [...fresh(lb(48, 26, 'always', 12, C.green, 'middle', true), B(80, 14, 200, 22, '毎回', 'g', 11), lb(48, 56, 'often', 12, C.blue, 'middle', true), B(80, 44, 140, 22, 'よく', 'b', 11), lb(48, 86, 'sometimes', 11, C.main, 'middle', true), B(80, 74, 100, 22, 'ときどき', 'y', 11), lb(48, 116, 'never', 12, C.red, 'middle', true), B(80, 104, 8, 22, '', 'r', 11), lb(200, 116, '0（1回もない）', 11, C.red, 'start')), ...cap('棒が長いほど、頻度が高い', C.green, FILL.green)],
    },
    {
      note: '❓この副詞は、どこに置くの？→動詞の近くです。❓なぜ動詞の近く？→頻度の副詞は「動詞をくわしくする語」なので、説明する動詞のすぐそばに置くと意味が伝わるからです。決まりは「be動詞のあと・一般動詞のまえ」です。',
      add: [...fresh(B(40, 40, 100, 40, '頻度の副詞', 'y', 13), B(180, 40, 100, 40, '動詞', 'b', 15), ar(142, 60, 178, 60, C.main), lb(160, 110, '動詞をくわしくする → 動詞のそば', 12, C.gray, 'middle', true)), ...cap('動詞のすぐ近くに置く')],
    },
    {
      note: 'be動詞の文です。He is always kind.（彼はいつも親切です）。❓なぜ is のあと？→be動詞の文は「主語＝どんなようす」の文で、be動詞の直後に「どれくらいの頻度で」を差しこむ形が決まりだからです。',
      add: [...fresh(...row([['He', 'g', 50], ['is', 'r', 44], ['always', 'y', 76], ['kind.', 'b', 64]], 36, 36, 14), ar(160, 84, 160, 100, C.main), lb(160, 116, 'be動詞のあと', 13, C.red, 'middle', true)), ...cap('He is always kind.', C.red, FILL.red)],
    },
    {
      note: '一般動詞の文です。I usually get up at six.（私はたいてい6時に起きます）。❓なぜ get up の前？→一般動詞の前に置くと「どれくらい起きるか」がはっきりするからです。be動詞は「あと」、一般動詞は「まえ」と、位置がちがうので注意します。',
      add: [...fresh(...row([['I', 'g', 30], ['usually', 'y', 70], ['get up', 'b', 70], ['at six.', 'n', 70]], 36, 36, 13), ar(160, 84, 160, 100, C.main), lb(160, 116, '一般動詞のまえ', 13, C.blue, 'middle', true)), ...cap('I usually get up at six.', C.blue, FILL.blue)],
    },
    {
      note: 'まちがいを直します。I go often to the library. ❓どこがおかしい？→often が go のうしろにあります。❓なぜだめ？→一般動詞の文では、頻度の副詞は動詞の前と決まっているからです。I often go to the library. にします。',
      add: [...fresh(...row([['I', 'n', 30], ['go', 'n', 44], ['often', 'r', 60], ['to the library.', 'n', 110]], 24, 34, 12), lb(160, 72, '×  動詞のうしろ', 12, C.red, 'middle', true), ...row([['I', 'g', 30], ['often', 'g', 60], ['go', 'g', 44], ['to the library.', 'g', 110]], 92, 34, 12), lb(160, 138, '○  動詞のまえ', 12, C.green, 'middle', true)), ...cap('I often go to the library.', C.green, FILL.green)],
    },
    {
      note: 'never だけは別です。I never eat meat.（私は一度も肉を食べません）。❓なぜ not を使わないの？→never の中に「〜ない」の意味がすでに入っているからです。not まで使うと、「ない」が2回になってしまいます。',
      add: [...fresh(...row([['I', 'g', 30], ['never', 'r', 64], ['eat', 'b', 44], ['meat.', 'n', 60]], 30, 36, 14), lb(160, 86, 'never ＝ 「〜ない」をふくむ', 13, C.red, 'middle', true), B(70, 104, 180, 30, '×  do not never eat', 'n', 13)), ...cap('never と not は一緒に使わない', C.red, FILL.red)],
    },
    {
      note: 'sometimes だけは、置く場所が自由です。Sometimes I walk.（ときどき歩く）のように、文の最初や最後にも置けます。❓なぜ sometimes だけ自由？→「ときどき」は文全体の頻度を言うのにも自然なため、文頭・文末でも意味が通るからです。',
      add: [...fresh(...row([['Sometimes', 'y', 84], ['I', 'g', 30], ['walk.', 'b', 56]], 14, 32, 13), ...row([['I', 'g', 30], ['sometimes', 'y', 84], ['walk.', 'b', 56]], 58, 32, 13), ...row([['I', 'g', 30], ['walk', 'b', 56], ['sometimes.', 'y', 88]], 102, 32, 13)), ...cap('sometimes は文頭・動詞のまえ・文末どこでもよい', C.main, FILL.yellow, 12)],
    },
    {
      note: '例題です。「私はたいてい6時に起きます」を英語にします。❓まず動詞は？→get up（一般動詞）です。❓では usually はどこ？→一般動詞のまえなので、I usually get up at six. になります。',
      add: [...fresh(lb(160, 24, '私はたいてい6時に起きます', 13, C.ink, 'middle', true), ...row([['I', 'g', 30], ['usually', 'y', 70], ['get up', 'b', 70], ['at six.', 'n', 70]], 56, 38, 13), lb(160, 116, '一般動詞 get up の前に usually', 12, C.gray, 'middle', true)), ...cap('I usually get up at six.', C.blue, FILL.blue)],
    },
  ]),

  // ─────────────────────────────────────────
  '-ing のつけ方（つづりの規則）': show([
    {
      note: '進行形や動名詞では、動詞に ing をつけます。❓なぜつづりが変わる動詞があるの？→ing をつけたあとも、もとの発音が読みまちがえられないように、つづりを調整するからです。',
      add: [title('play → playing　make → making　run → running'), ...row([['ふつう', 'b', 60], ['e で終わる', 'g', 80], ['短母音＋子音', 'r', 84], ['ie', 'p', 44]], 76, 36, 11), ...cap('4つのパターンで覚える')],
    },
    {
      note: '1つめ、ふつうの動詞です。play → playing、eat → eating。❓なぜそのままでいいの？→そのまま ing をつけても、読み方がかわらないからです。',
      add: [...fresh(B(30, 40, 100, 36, 'play', 'b', 15), ar(132, 58, 178, 58, C.main), B(180, 40, 110, 36, 'playing', 'b', 15), B(30, 94, 100, 36, 'eat', 'b', 15), ar(132, 112, 178, 112, C.main), B(180, 94, 110, 36, 'eating', 'b', 15)), ...cap('ふつう ＝ そのまま ing')],
    },
    {
      note: '2つめ、e で終わる動詞です。make → making。❓なぜ e をとるの？→make に ing をつけると makeing と、e と i が並んで読みにくいからです。❓e をとっても読める？→making は「メイキング」と読めるので、e をとっても読み方は変わりません。',
      add: [...fresh(B(20, 46, 80, 40, 'make', 'g', 16), ar(102, 66, 128, 66, C.main), B(130, 46, 90, 40, 'makeing', 'n', 14), lb(175, 36, '読みにくい', 11, C.red, 'middle', true), ar(222, 66, 244, 66, C.red), B(246, 46, 64, 40, 'making', 'g', 14), lb(160, 108, 'e をとって ing', 13, C.green, 'middle', true)), ...cap('e で終わる → e をとって ing\nmake → making　write → writing', C.green, FILL.green, 12)],
    },
    {
      note: '3つめ、run → running です。❓なぜ n を重ねるの？→runing と書くと、u が「ルー」と長く読まれてしまいそうだからです。❓n を2つ書くと？→短い u のまま「ラニング」と読むという目印になります。',
      add: [...fresh(B(20, 46, 76, 40, 'run', 'r', 16), ar(98, 66, 124, 66, C.main), B(126, 46, 84, 40, 'runing', 'n', 14), lb(168, 36, '長く読みそう', 11, C.red, 'middle', true), ar(212, 66, 232, 66, C.red), B(234, 46, 76, 40, 'running', 'r', 14), lb(160, 108, '子音を重ねて短い音を守る', 13, C.red, 'middle', true)), ...cap('短母音＋子音1つ → 子音を重ねて ing\nrun → running　swim → swimming', C.red, FILL.red, 12)],
    },
    {
      note: '❓どんなときに重ねるの？→「短く読む母音が1つ」＋「子音字が1つ」で終わるときです。run は r-u-n、swim は s-w-i-m、sit は s-i-t、stop は s-t-o-p で、どれも母音1つ・子音1つで終わっています。',
      add: [...fresh(...row([['r', 'n', 30], ['u', 'r', 30], ['n', 'b', 30]], 14, 30, 15), ...row([['s', 'n', 30], ['i', 'r', 30], ['t', 'b', 30]], 52, 30, 15), ...row([['s', 'n', 26], ['t', 'n', 26], ['o', 'r', 26], ['p', 'b', 26]], 90, 30, 15), lb(250, 30, '母音1つ', 11, C.red, 'start', true), lb(250, 68, '＋ 子音1つ', 11, C.blue, 'start', true)), ...cap('赤＝短母音　青＝おわりの子音\nこの形なら子音を重ねる', C.red, FILL.red, 12)],
    },
    {
      note: '❓eat はなぜ重ねないの？→eat は e-a-t で、母音が2つ（ea）続いているからです。母音が2つだと音は自然に長くなるので、重ねる必要はなく、eating です。',
      add: [...fresh(...row([['e', 'r', 30], ['a', 'r', 30], ['t', 'b', 30]], 26, 32, 15), lb(160, 76, '母音が2つ ＝ 短母音ではない', 12, C.red, 'middle', true), ar(160, 84, 160, 100, C.main), B(100, 102, 120, 32, 'eating', 'b', 15)), ...cap('母音2つのときは重ねない\neat → eating', C.blue, FILL.blue, 12)],
    },
    {
      note: '4つめ、ie で終わる動詞です。die → dying。❓なぜ ie を y にするの？→die に ing をつけると dieing と、i が2つ並んでしまうからです。i が2つ続くのを避けるため、y にかえます。',
      add: [...fresh(B(20, 46, 76, 40, 'die', 'p', 16), ar(98, 66, 124, 66, C.main), B(126, 46, 84, 40, 'dieing', 'n', 14), lb(168, 36, 'i が2つ', 11, C.red, 'middle', true), ar(212, 66, 232, 66, C.red), B(234, 46, 76, 40, 'dying', 'p', 14), lb(160, 108, 'ie → y にして ing（lie → lying）', 12, C.purple, 'middle', true)), ...cap('ie → y ＋ ing', C.purple, FILL.purple)],
    },
    {
      note: '例外です。see → seeing、be → being。❓なぜ e をとらないの？→see は e が2つ続いている語で、1つとってしまうと seing となり、see の読み方がこわれるからです。ee で終わる語は e を残します。be も e を残します（e を取ると b＋ing になってしまう）。',
      add: [...fresh(B(20, 40, 80, 36, 'see', 'y', 15), ar(102, 58, 128, 58, C.main), B(130, 40, 100, 36, 'seeing', 'y', 15), lb(270, 58, '○', 20, C.green, 'middle', true), B(20, 96, 80, 36, 'be', 'y', 15), ar(102, 114, 128, 114, C.main), B(130, 96, 100, 36, 'being', 'y', 15), lb(270, 114, '○', 20, C.green, 'middle', true)), ...cap('see・be は e を残す', C.main, FILL.yellow)],
    },
    {
      note: '例題です。(1) make → making（e をとる）(2) run → running（n を重ねる）(3) die → dying（ie を y に）。❓順にどう考える？→おわりの形を見る → 4つのパターンのどれかに当てはめる、です。',
      add: [...fresh(...row([['make', 'g', 60], ['→', 'n', 24], ['making', 'g', 72], ['e をとる', 'n', 84]], 16, 30, 12), ...row([['run', 'r', 60], ['→', 'n', 24], ['running', 'r', 72], ['n を重ねる', 'n', 84]], 60, 30, 12), ...row([['die', 'p', 60], ['→', 'n', 24], ['dying', 'p', 72], ['ie を y に', 'n', 84]], 104, 30, 12)), ...cap('おわりの形を見て、4パターンに当てはめる', C.main, FILL.yellow, 12)],
    },
  ]),

  // ─────────────────────────────────────────
  '過去形・過去分詞の ed のつけ方': show([
    {
      note: '規則動詞は、過去形も過去分詞も、原形に ed をつけて作ります。❓なぜ「同じ形」なの？→規則動詞は「ed をつける」ひとつの決まりだけで、過去形と過去分詞の両方が作れるからです。',
      add: [title('walk → walked → walked'), ...row([['原形\nwalk', 'b', 84], ['過去形\nwalked', 'g', 84], ['過去分詞\nwalked', 'g', 84]], 72, 44, 12), ...cap('規則動詞は 過去形＝過去分詞')],
    },
    {
      note: '1つめ、ふつうの動詞です。walk → walked、play → played。❓なぜそのまま ed？→ed をつけても、つづりが読みにくくならないからです。',
      add: [...fresh(B(30, 40, 100, 36, 'walk', 'b', 15), ar(132, 58, 178, 58, C.main), B(180, 40, 110, 36, 'walked', 'b', 15), lb(160, 110, 'ふつう ＝ ed をつけるだけ', 13, C.blue, 'middle', true)), ...cap('walk → walked')],
    },
    {
      note: '2つめ、e で終わる動詞です。like → liked。❓なぜ d だけ？→like にはすでに e があります。ed をつけると likeed と e が2つ並んでしまうので、d だけをつけます。',
      add: [...fresh(B(20, 46, 76, 40, 'like', 'g', 16), ar(98, 66, 124, 66, C.main), B(126, 46, 84, 40, 'likeed', 'n', 14), lb(168, 36, 'e が2つ', 11, C.red, 'middle', true), ar(212, 66, 232, 66, C.red), B(234, 46, 76, 40, 'liked', 'g', 14), lb(160, 108, 'e で終わる → d だけ', 13, C.green, 'middle', true)), ...cap('like → liked　use → used', C.green, FILL.green)],
    },
    {
      note: '3つめ、子音字＋y で終わる動詞です。study → studied。❓なぜ y を i にするの？→子音のあとの y は i にかえる決まりがあります。名詞の city → cities と同じです。❓y のままではだめ？→studyed と書くと、この決まりからはずれてしまいます。',
      add: [...fresh(B(20, 46, 84, 40, 'study', 'p', 16), ar(106, 66, 130, 66, C.main), B(132, 46, 86, 40, 'studyed', 'n', 14), lb(175, 36, '×', 16, C.red, 'middle', true), ar(220, 66, 236, 66, C.red), B(238, 46, 74, 40, 'studied', 'p', 14), lb(160, 108, '子音字(d)＋y → y を i にして ed', 12, C.purple, 'middle', true)), ...cap('study → studied　try → tried', C.purple, FILL.purple)],
    },
    {
      note: '❓play は y なのに、なぜ i にしないの？→play の y の前は母音字 a です。母音＋y の y は「ay」という母音の一部なので、i にすると音がこわれます。だから played と、そのまま ed です。',
      add: [...fresh(...row([['p', 'n', 30], ['l', 'n', 30], ['a', 'r', 30], ['y', 'r', 30]], 24, 30, 15), lb(160, 70, 'a は母音字 ＋ y', 12, C.red, 'middle', true), ar(160, 80, 160, 96, C.main), B(100, 100, 120, 32, 'played', 'b', 15)), ...cap('母音字＋y は y のまま ed\nplay → played　enjoy → enjoyed', C.blue, FILL.blue, 12)],
    },
    {
      note: '4つめ、短母音＋子音字1つで終わる動詞です。stop → stopped、plan → planned。❓なぜ p を重ねるの？→stoped だと o が長く読まれそうだからです。ing のときと同じ考え方です。',
      add: [...fresh(B(20, 46, 76, 40, 'stop', 'r', 16), ar(98, 66, 124, 66, C.main), B(126, 46, 84, 40, 'stoped', 'n', 14), lb(168, 36, '長く読みそう', 11, C.red, 'middle', true), ar(212, 66, 232, 66, C.red), B(234, 46, 76, 40, 'stopped', 'r', 14), lb(160, 108, '短母音＋子音1つ → 子音を重ねる', 12, C.red, 'middle', true)), ...cap('stop → stopped　plan → planned', C.red, FILL.red)],
    },
    {
      note: '❓4つをどうやって見分ける？→動詞のおわりの形を見ます。e で終わる？子音字＋y？短母音＋子音1つ？どれでもなければ、ふつうに ed です。',
      add: [...fresh(B(10, 14, 300, 24, 'おわりが e → d だけ（liked）', 'g', 12), B(10, 46, 300, 24, '子音字＋y → y を i にして ed（studied）', 'p', 12), B(10, 78, 300, 24, '短母音＋子音1つ → 子音を重ねて ed（stopped）', 'r', 12), B(10, 110, 300, 24, 'それ以外（母音＋y も）→ ed（played）', 'b', 12)), ...cap('おわりの形を見て、上から順に考える')],
    },
    {
      note: '❓ed をつけるのは何のため？→過去の出来事を言う「過去形」と、現在完了や受け身で使う「過去分詞」を作るためです。規則動詞は2つとも同じ形ですが、不規則動詞は別に覚える必要があります。',
      add: [...fresh(...row([['walk', 'n', 70], ['walked', 'g', 70], ['walked', 'g', 70]], 30, 34, 13), ...row([['go', 'n', 70], ['went', 'r', 70], ['gone', 'r', 70]], 84, 34, 13), lb(160, 20, '規則動詞', 11, C.green, 'middle', true), lb(160, 74, '不規則動詞', 11, C.red, 'middle', true)), ...cap('規則動詞は過去形＝過去分詞', C.green, FILL.green)],
    },
    {
      note: '例題です。(1) like → liked（e で終わる）(2) study → studied（子音字＋y）(3) stop → stopped（短母音＋子音）。❓ちがいは？→おわりの形を見て、決まりの通りに直すだけです。',
      add: [...fresh(...row([['like', 'g', 60], ['→', 'n', 24], ['liked', 'g', 72], ['d だけ', 'n', 84]], 16, 30, 12), ...row([['study', 'p', 60], ['→', 'n', 24], ['studied', 'p', 72], ['y → i', 'n', 84]], 60, 30, 12), ...row([['stop', 'r', 60], ['→', 'n', 24], ['stopped', 'r', 72], ['p を重ねる', 'n', 84]], 104, 30, 12)), ...cap('liked ／ studied ／ stopped', C.main, FILL.yellow)],
    },
  ]),

  // ─────────────────────────────────────────
  '不規則動詞の4パターン（AAA・ABA・ABB・ABC）': show([
    {
      note: '不規則動詞は「原形・過去形・過去分詞」の3つを覚える必要があります。❓なぜ数が多くて大変？→ed をつけるという1つの決まりでは作れず、動詞ごとに形がちがうからです。',
      add: [title('原形 － 過去形 － 過去分詞'), ...row([['原形', 'b', 80], ['過去形', 'g', 80], ['過去分詞', 'r', 80]], 76, 36, 13), ...cap('3つ セットで覚える')],
    },
    {
      note: '❓大量の動詞をどう覚える？→3つの形を A・B・C の記号にして、パターンでグループ分けします。同じ形は同じ文字、ちがう形はちがう文字です。パターンは4つになります。',
      add: [...fresh(B(10, 14, 300, 26, 'AAA　3つとも同じ', 'b', 13), B(10, 46, 300, 26, 'ABA　原形＝過去分詞', 'g', 13), B(10, 78, 300, 26, 'ABB　過去形＝過去分詞', 'y', 13), B(10, 110, 300, 26, 'ABC　3つとも別', 'r', 13)), ...cap('パターンで分ければ覚えやすい')],
    },
    {
      note: 'AAA型です。cut - cut - cut、put - put - put、hit - hit - hit、let - let - let。❓覚えることは？→形が変わらないので、「3つとも同じ」と覚えれば1語ですみます。read だけは、つづりは同じで発音が変わります（リード → レッド → レッド）。',
      add: [...fresh(...row([['cut', 'b', 70], ['cut', 'b', 70], ['cut', 'b', 70]], 20, 30, 14), ...row([['put', 'b', 70], ['put', 'b', 70], ['put', 'b', 70]], 56, 30, 14), ...row([['hit', 'b', 70], ['hit', 'b', 70], ['hit', 'b', 70]], 92, 30, 14), lb(160, 136, 'let も同じ。read はつづりが同じで発音が変わる', 10, C.gray, 'middle', true)), ...cap('AAA ＝ 3つとも同じ', C.blue, FILL.blue)],
    },
    {
      note: 'ABA型です。come - came - come、run - ran - run、become - became - become。❓覚え方は？→過去形だけがちがって、原形と過去分詞は同じ形に戻ります。「真ん中だけ変わる」と覚えます。',
      add: [...fresh(...row([['come', 'g', 70], ['came', 'r', 70], ['come', 'g', 70]], 20, 30, 14), ...row([['run', 'g', 70], ['ran', 'r', 70], ['run', 'g', 70]], 56, 30, 14), ...row([['become', 'g', 70], ['became', 'r', 70], ['become', 'g', 70]], 92, 30, 14)), ...cap('ABA ＝ 真ん中だけ変わる', C.green, FILL.green)],
    },
    {
      note: 'ABB型です。buy - bought - bought、think - thought - thought、make - made - made、have - had - had。❓覚え方は？→過去形を覚えれば、過去分詞も同じ形なので、覚える数が半分になります。',
      add: [...fresh(...row([['buy', 'y', 70], ['bought', 'r', 70], ['bought', 'r', 70]], 14, 28, 13), ...row([['think', 'y', 70], ['thought', 'r', 70], ['thought', 'r', 70]], 48, 28, 13), ...row([['make', 'y', 70], ['made', 'r', 70], ['made', 'r', 70]], 82, 28, 13), ...row([['have', 'y', 70], ['had', 'r', 70], ['had', 'r', 70]], 116, 28, 13)), ...cap('ABB ＝ あとの2つが同じ', C.main, FILL.yellow)],
    },
    {
      note: 'ABC型です。go - went - gone、see - saw - seen、eat - ate - eaten、write - wrote - written。❓なぜ大変？→3つとも形がちがうので、1つずつ覚えるしかないからです。ただ、数は多いので、よく使う動詞から1つずつ声に出して慣れましょう。',
      add: [...fresh(...row([['go', 'b', 70], ['went', 'g', 70], ['gone', 'r', 70]], 14, 28, 13), ...row([['see', 'b', 70], ['saw', 'g', 70], ['seen', 'r', 70]], 48, 28, 13), ...row([['eat', 'b', 70], ['ate', 'g', 70], ['eaten', 'r', 70]], 82, 28, 13), ...row([['write', 'b', 70], ['wrote', 'g', 70], ['written', 'r', 70]], 116, 28, 13)), ...cap('ABC ＝ 3つとも別の形', C.red, FILL.red)],
    },
    {
      note: '❓パターンをどうやって見分ける？→3つを並べて、同じ形がどこにあるかを見ます。すべて同じ → AAA、1つめと3つめが同じ → ABA、2つめと3つめが同じ → ABB、同じものがない → ABC です。',
      add: [...fresh(...row([['A', 'b', 34], ['A', 'b', 34], ['A', 'b', 34]], 14, 28, 14), lb(220, 28, '全部同じ', 12, C.blue, 'start', true), ...row([['A', 'g', 34], ['B', 'r', 34], ['A', 'g', 34]], 48, 28, 14), lb(220, 62, '1つめ＝3つめ', 12, C.green, 'start', true), ...row([['A', 'y', 34], ['B', 'r', 34], ['B', 'r', 34]], 82, 28, 14), lb(220, 96, '2つめ＝3つめ', 12, C.main, 'start', true), ...row([['A', 'b', 34], ['B', 'g', 34], ['C', 'r', 34]], 116, 28, 14), lb(220, 130, '全部ちがう', 12, C.red, 'start', true)), ...cap('同じ文字が同じ形')],
    },
    {
      note: '❓なぜ過去分詞まで覚えるの？→現在完了（have ＋ 過去分詞）と受け身（be ＋ 過去分詞）で使うからです。過去形だけ覚えていても、これらの文が作れないので、3つセットで覚えます。',
      add: [...fresh(B(20, 20, 130, 34, 'have ＋ 過去分詞', 'g', 13), lb(85, 72, '現在完了', 12, C.green, 'middle', true), B(170, 20, 130, 34, 'be ＋ 過去分詞', 'b', 13), lb(235, 72, '受け身', 12, C.blue, 'middle', true), ar(85, 84, 85, 108, C.main), ar(235, 84, 235, 108, C.main), B(20, 110, 280, 28, 'どちらも 過去分詞 が必要', 'y', 13)), ...cap('過去分詞は3つ目の形')],
    },
    {
      note: '例題です。see の過去形と過去分詞は？→see - saw - seen（ABC）。buy の過去形は bought（ABB）、put は put（AAA）、write の過去分詞は written（ABC）です。❓まちがえたら？→3つを声に出して覚えなおします。',
      add: [...fresh(...row([['see', 'b', 60], ['saw', 'g', 60], ['seen', 'r', 60]], 14, 28, 13), lb(292, 28, 'ABC', 11, C.red, 'middle', true), ...row([['buy', 'b', 60], ['bought', 'g', 60], ['bought', 'g', 60]], 48, 28, 13), lb(292, 62, 'ABB', 11, C.main, 'middle', true), ...row([['put', 'b', 60], ['put', 'b', 60], ['put', 'b', 60]], 82, 28, 13), lb(292, 96, 'AAA', 11, C.blue, 'middle', true), ...row([['write', 'b', 60], ['wrote', 'g', 60], ['written', 'r', 60]], 116, 28, 13), lb(292, 130, 'ABC', 11, C.red, 'middle', true)), ...cap('saw・seen ／ bought ／ put ／ written', C.main, FILL.yellow)],
    },
  ]),

  // ─────────────────────────────────────────
  '形容詞と副詞のちがい': show([
    {
      note: 'She sings ( ).（good / well）。かっこに入るのは形容詞か副詞か。❓どうやって決める？→その語が「何を説明するか」を見ます。',
      add: [title('She sings ( ).　good / well'), B(40, 76, 100, 40, 'good', 'n', 15), B(180, 76, 100, 40, 'well', 'n', 15), lb(160, 98, '？', 22, C.red, 'middle', true), ...cap('何を説明する語か、で決める')],
    },
    {
      note: '形容詞は「名詞」を説明します。a quick boy（すばやい少年）。❓なぜ名詞？→形容詞は「どんな〜か」を答える語で、「〜」にあたるのが名詞だからです。',
      add: [...fresh(...row([['a', 'n', 30], ['quick', 'b', 70], ['boy', 'g', 60]], 40, 38, 15), ar(140, 34, 172, 34, C.blue), lb(160, 100, '形容詞 → 名詞を説明', 13, C.blue, 'middle', true)), ...cap('形容詞 ＝ 名詞のようすを説明')],
    },
    {
      note: '副詞は「動詞」を説明します。run quickly（すばやく走る）。❓なぜ動詞？→副詞は「どんなふうに〜するか」を答える語で、「〜する」にあたるのが動詞だからです。',
      add: [...fresh(...row([['run', 'g', 60], ['quickly', 'r', 86]], 40, 38, 15), ar(200, 34, 130, 34, C.red), lb(160, 100, '副詞 → 動詞を説明', 13, C.red, 'middle', true)), ...cap('副詞 ＝ 動詞のようすを説明', C.red, FILL.red)],
    },
    {
      note: '❓be動詞のあとにくる語は？→He is kind. のように、be動詞のあとは「主語がどんなか」を言う形容詞です。❓なぜ副詞ではないの？→ここで説明されるのは動作ではなく「彼」自身のようすだからです。',
      add: [...fresh(...row([['He', 'g', 50], ['is', 'y', 44], ['kind.', 'b', 64]], 40, 38, 15), ar(200, 36, 60, 36, C.blue, true), lb(160, 100, '主語(He)のようすを説明する語 → 形容詞', 12, C.blue, 'middle', true)), ...cap('be動詞のあと ＝ 形容詞')],
    },
    {
      note: '副詞の多くは、形容詞に ly をつけて作ります。slow → slowly、careful → carefully。❓なぜ ly？→ly は「〜のように」という意味の語尾で、動詞を説明する形に変える印だからです。',
      add: [...fresh(B(20, 30, 100, 34, 'slow', 'b', 15), ar(122, 47, 176, 47, C.main), B(178, 30, 120, 34, 'slowly', 'r', 15), B(20, 84, 100, 34, 'careful', 'b', 15), ar(122, 101, 176, 101, C.main), B(178, 84, 120, 34, 'carefully', 'r', 15), lb(149, 24, '＋ ly', 11, C.main, 'middle', true)), ...cap('形容詞 ＋ ly ＝ 副詞', C.red, FILL.red)],
    },
    {
      note: '❓子音字＋y の形容詞は？→happy → happily と、y を i にして ly をつけます。❓なぜ？→ed のときと同じ、子音のあとの y は i にかえるきまりだからです。',
      add: [...fresh(B(20, 46, 84, 40, 'happy', 'p', 16), ar(106, 66, 130, 66, C.main), B(132, 46, 86, 40, 'happyly', 'n', 14), lb(175, 36, '×', 16, C.red, 'middle', true), ar(220, 66, 236, 66, C.red), B(238, 46, 74, 40, 'happily', 'p', 14), lb(160, 108, 'y → i ＋ ly', 13, C.purple, 'middle', true)), ...cap('happy → happily', C.purple, FILL.purple)],
    },
    {
      note: 'ly をつけない副詞もあります。fast（速い・速く）、early（早い・早く）、hard（かたい・熱心に）。❓なぜ形が同じ？→これらは形容詞と副詞が同じ形の語だからです。fastly という語はありません。',
      add: [...fresh(B(20, 24, 84, 34, 'fast', 'y', 15), B(120, 24, 84, 34, 'early', 'y', 15), B(220, 24, 84, 34, 'hard', 'y', 15), lb(62, 76, '速い／速く', 11, C.main, 'middle'), lb(162, 76, '早い／早く', 11, C.main, 'middle'), lb(262, 76, 'かたい／熱心に', 11, C.main, 'middle'), B(90, 96, 140, 30, '×fastly', 'n', 14)), ...cap('形が同じ語は、そのまま使う', C.main, FILL.yellow)],
    },
    {
      note: 'good だけは特別です。good の副詞は well（上手に）。❓なぜ goodly ではないの？→good の副詞は昔から別の形の well として使われていて、goodly という語は使わないからです。',
      add: [...fresh(B(20, 40, 100, 36, 'good', 'b', 16), ar(122, 58, 176, 58, C.main), B(178, 40, 110, 36, 'well', 'r', 16), lb(160, 30, '副詞にすると', 11, C.main, 'middle', true), B(70, 100, 180, 30, '×goodly', 'n', 14)), ...cap('good の副詞は well', C.red, FILL.red)],
    },
    {
      note: '例題です。She sings ( ). →sings という動詞を説明するので副詞の well です。Please speak slowly.（slow の副詞は slowly）、My father runs fast.（fast は形が同じ）。',
      add: [...fresh(...row([['She', 'g', 50], ['sings', 'b', 64], ['well.', 'r', 64]], 16, 32, 14), ...row([['speak', 'b', 64], ['slowly.', 'r', 76]], 62, 32, 14), ...row([['runs', 'b', 64], ['fast.', 'r', 64]], 108, 32, 14)), ...cap('well ／ slowly ／ fast\n動詞を説明するので副詞', C.main, FILL.yellow, 12)],
    },
  ]),

  // ─────────────────────────────────────────
  '命令文と and・or': show([
    {
      note: '命令文は、主語を言わず、動詞の原形から始める文です。Study hard.（一生けん命に勉強しなさい）。❓なぜ主語がいらない？→命令する相手は目の前の「あなた」と決まっているからです。',
      add: [title('Study hard.（勉強しなさい）'), ...row([['(You)', 'n', 60], ['Study', 'b', 80], ['hard.', 'n', 70]], 76, 34, 14), lb(160, 128, '主語は言わない・動詞の原形から', 12, C.gray, 'middle', true), ...cap('命令文 ＝ 動詞の原形で始める')],
    },
    {
      note: '命令文のあとに、コンマと and をつなげます。Study hard, and you will pass the exam.（勉強しなさい、そうすれば試験に合格します）。❓なぜ and？→and は「そして」の意味で、前の文に「良いこと」を足してつなげるからです。',
      add: [...fresh(B(10, 30, 96, 44, 'Study hard,', 'b', 13), B(114, 30, 44, 44, 'and', 'g', 14), B(166, 30, 144, 44, 'you will pass the exam.', 'g', 12), lb(60, 94, '命令文', 12, C.blue, 'middle', true), lb(236, 94, '良い結果', 12, C.green, 'middle', true)), ...cap('命令文, and 〜.\n＝ 〜しなさい、そうすれば〜', C.green, FILL.green, 12)],
    },
    {
      note: '命令文のあとに、コンマと or をつなげます。Hurry up, or you will be late.（急ぎなさい、さもないとおくれます）。❓なぜ or？→or は「または」で、「そうしないなら、こちら」という別の道を示し、悪い結果につなぐからです。',
      add: [...fresh(B(10, 30, 96, 44, 'Hurry up,', 'b', 13), B(114, 30, 44, 44, 'or', 'r', 14), B(166, 30, 144, 44, 'you will be late.', 'r', 12), lb(60, 94, '命令文', 12, C.blue, 'middle', true), lb(236, 94, '悪い結果', 12, C.red, 'middle', true)), ...cap('命令文, or 〜.\n＝ 〜しなさい、さもないと〜', C.red, FILL.red, 12)],
    },
    {
      note: '❓and と or はどうやって選ぶ？→道が2つに分かれるイメージです。命令に従えば良い結果（and）、従わなければ悪い結果（or）です。',
      add: [...fresh(B(100, 14, 120, 30, '命令文', 'b', 14), ar(140, 46, 70, 74, C.green), ar(180, 46, 250, 74, C.red), B(20, 78, 100, 30, 'and → 良い結果', 'g', 12), B(200, 78, 100, 30, 'or → 悪い結果', 'r', 12), lb(70, 126, '従えば', 11, C.green, 'middle', true), lb(250, 126, '従わないと', 11, C.red, 'middle', true)), ...cap('うしろの文が良いか悪いかで選ぶ')],
    },
    {
      note: '例で確かめます。Study hard, ( ) you will pass the exam. ❓「合格する」は良い？悪い？→良い結果です。❓だから？→and が入ります。',
      add: [...fresh(lb(160, 26, 'Study hard, ( ) you will pass the exam.', 12, C.ink, 'middle', true), B(100, 48, 120, 34, '「合格」＝良い', 'g', 13), ar(160, 84, 160, 100, C.green), B(120, 102, 80, 30, 'and', 'g', 16)), ...cap('良い結果 → and', C.green, FILL.green)],
    },
    {
      note: '❓なぜあとの文に will を使うの？→命令に従ったあとの結果は、これから先に起こることだからです。だから未来を表す will を使います。',
      add: [...fresh(B(10, 40, 90, 40, 'Study hard,', 'b', 12), ar(102, 60, 128, 60, C.main), B(130, 40, 180, 40, 'and you will pass.', 'g', 13), lb(160, 110, '結果は「これから」→ will', 13, C.green, 'middle', true)), ...cap('結果は未来 → will')],
    },
    {
      note: '❓or の文は、別の言い方でも書ける？→書けます。Hurry up, or you will be late. ＝ If you do not hurry up, you will be late.。❓なぜ同じ意味？→「さもないと」は「もし〜しなければ」と同じ意味だからです。',
      add: [...fresh(B(14, 20, 292, 34, 'Hurry up, or you will be late.', 'r', 13), lb(160, 76, '＝', 22, C.main, 'middle', true), B(14, 96, 292, 34, 'If you do not hurry up, you will be late.', 'r', 12)), ...cap('or ＝ If you do not 〜（もし〜しなければ）', C.red, FILL.red, 12)],
    },
    {
      note: '❓コンマはなぜ入れるの？→命令文と、その結果の文の間で、いったん切って読むための印だからです。and・or の前にコンマを置きます。',
      add: [...fresh(...row([['Get up now', 'b', 96], [',', 'y', 20], ['or', 'r', 30], ['you will be late.', 'r', 120]], 40, 38, 12), lb(160, 100, 'コンマで切って、or/and でつなぐ', 12, C.gray, 'middle', true)), ...cap('命令文 , and/or 〜')],
    },
    {
      note: '例題です。Hurry up, or you will miss the train.（急ぎなさい、さもないと電車に乗りおくれますよ）。❓「乗りおくれる」は良い？悪い？→悪い結果なので or です。',
      add: [...fresh(B(14, 24, 292, 34, 'Hurry up, or you will miss the train.', 'r', 13), lb(160, 88, '急ぎなさい、さもないと', 13, C.red, 'middle', true), lb(160, 114, '電車に乗りおくれますよ', 13, C.ink, 'middle', true)), ...cap('悪い結果 → or', C.red, FILL.red)],
    },
  ]),

  // ─────────────────────────────────────────
  '感嘆文（What と How）': show([
    {
      note: '「なんて〜なのでしょう」と、おどろきや感動を言う文が感嘆文です。❓形は？→What で始めるか、How で始めます。どちらを使うかがポイントです。',
      add: [title('なんて〜なのでしょう！'), ...row([['What ＋ …', 'g', 120], ['How ＋ …', 'b', 120]], 76, 40, 15), ...cap('What か How で始める')],
    },
    {
      note: '❓What と How は何で選ぶ？→おどろいた部分に「名詞」があるかどうかです。名詞があれば What、名詞がなく形容詞・副詞だけなら How です。',
      add: [...fresh(B(80, 14, 160, 30, '名詞がある？', 'y', 14), ar(140, 46, 70, 76, C.green), ar(180, 46, 250, 76, C.blue), B(10, 80, 130, 30, 'ある → What', 'g', 14), B(180, 80, 130, 30, 'ない → How', 'b', 14)), ...cap('名詞があるかどうかで決める')],
    },
    {
      note: 'What a big dog it is!（なんて大きい犬でしょう）。❓なぜ What？→おどろきの中心は「大きい犬」で、dog という名詞があるからです。❓なぜ a？→dog は数えられる単数の名詞だからです。',
      add: [...fresh(...row([['What', 'g', 56], ['a', 'y', 30], ['big', 'b', 50], ['dog', 'r', 50], ['it is!', 'n', 64]], 36, 36, 14), lb(85, 90, 'a ＋ 形容詞 ＋ 名詞', 12, C.green, 'middle', true), ar(160, 84, 160, 98, C.green), lb(160, 118, '名詞があるので What', 13, C.green, 'middle', true)), ...cap('What ＋ a ＋ 形容詞 ＋ 名詞', C.green, FILL.green)],
    },
    {
      note: 'How tall he is!（彼はなんて背が高いのでしょう）。❓なぜ How？→tall は形容詞だけで、名詞が続いていないからです。How のあとは、形容詞か副詞だけを置きます。',
      add: [...fresh(...row([['How', 'b', 56], ['tall', 'b', 60], ['he is!', 'n', 76]], 36, 36, 14), lb(160, 90, '形容詞だけ（名詞なし）', 12, C.blue, 'middle', true), ar(160, 98, 160, 110, C.blue), lb(160, 126, '名詞がないので How', 13, C.blue, 'middle', true)), ...cap('How ＋ 形容詞・副詞', C.blue, FILL.blue)],
    },
    {
      note: '見分けの練習です。( ) a nice bag! →bag という名詞があるので What。( ) tall he is! →名詞がないので How。❓ポイントは？→かっこのあとに「名詞」が出てくるかを、目で追うことです。',
      add: [...fresh(...row([['( )', 'r', 40], ['a', 'n', 24], ['nice', 'n', 50], ['bag!', 'y', 56]], 26, 34, 14), lb(160, 76, '名詞 bag あり → What', 12, C.green, 'middle', true), ...row([['( )', 'r', 40], ['tall', 'n', 56], ['he is!', 'n', 70]], 94, 34, 14), lb(160, 142, '名詞なし → How', 12, C.blue, 'middle', true)), ...cap('What a nice bag! ／ How tall he is!', C.main, FILL.yellow, 12)],
    },
    {
      note: '「なんて美しい花でしょう」は2通りに書けます。What a beautiful flower this is! と How beautiful this flower is! です。❓どちらも同じ意味？→同じです。名詞 flower を中心に言うか、beautiful だけを強調するかのちがいです。',
      add: [...fresh(B(6, 26, 308, 40, 'What a beautiful flower this is!', 'g', 14), lb(160, 88, '＝', 20, C.main, 'middle', true), B(6, 104, 308, 40, 'How beautiful this flower is!', 'b', 14)), ...cap('名詞を言えば What、言わなければ How', C.main, FILL.yellow, 12)],
    },
    {
      note: '主語と動詞は、よく省略されます。What a big dog!、How tall! のように、What や How のあとの形だけでも意味が通じるからです。❓なぜ省略できる？→話し手も聞き手も、何のことかわかっているからです。',
      add: [...fresh(B(14, 20, 292, 34, 'What a big dog it is!', 'g', 14), ar(160, 58, 160, 80, C.main), lb(210, 70, '省略', 11, C.main, 'start', true), B(14, 84, 292, 34, 'What a big dog!', 'g', 14)), ...cap('主語と動詞は省略できる', C.green, FILL.green)],
    },
    {
      note: '❓名詞が複数のときは？→What nice bags!（なんてすてきなかばんでしょう）と、a をつけません。❓なぜ？→a は「1つの」という意味なので、複数の名詞にはつけないからです。',
      add: [...fresh(...row([['What', 'g', 56], ['a', 'y', 30], ['nice', 'b', 50], ['bag!', 'r', 50]], 20, 34, 14), lb(160, 66, '1つ → a あり', 12, C.green, 'middle', true), ...row([['What', 'g', 56], ['nice', 'b', 50], ['bags!', 'r', 60]], 88, 34, 14), lb(160, 134, '2つ以上 → a なし', 12, C.red, 'middle', true)), ...cap('a は単数の名詞だけ', C.green, FILL.green)],
    },
    {
      note: 'まとめです。「なんて大きい犬でしょう」→ What a big dog it is!。「なんて背が高いのでしょう」→ How tall he is!。❓迷ったら？→名詞があれば What、なければ How です。感嘆文の終わりには ! をつけます。',
      add: [...fresh(...row([['名詞あり', 'g', 92], ['→', 'n', 24], ['What a ＋ 形 ＋ 名', 'g', 130]], 24, 34, 12), ...row([['名詞なし', 'b', 92], ['→', 'n', 24], ['How ＋ 形容詞', 'b', 130]], 74, 34, 12), lb(160, 128, '終わりは ! をつける', 12, C.gray, 'middle', true)), ...cap('名詞があれば What、なければ How', C.main, FILL.yellow, 12)],
    },
  ]),

  // ─────────────────────────────────────────
  '動詞＋前置詞の熟語（look at・look for など）': show([
    {
      note: '「〜を待つ」「〜を聞く」のように、日本語では「〜を」となる動詞でも、英語では前置詞が必要なことがあります。❓なぜ？→英語の動詞のなかには、前置詞をつけて1つの意味になる動詞があるからです。',
      add: [title('wait for　listen to　look at'), ...row([['wait', 'g', 46], ['for', 'r', 36], ['listen', 'g', 56], ['to', 'r', 32], ['look', 'g', 44], ['at', 'r', 32]], 76, 34, 12, 4), ...cap('動詞と前置詞は 1セット')],
    },
    {
      note: 'look の3つです。look at ＝ 見る、look for ＝ さがす、look after ＝ 世話をする。❓なぜ意味が変わる？→look は「目を向ける」の意味で、前置詞が「どこへ」「なんのために」を決めるからです。at は1点、for は求める、after はあとについていく、と考えます。',
      add: [...fresh(B(10, 20, 96, 36, 'look at', 'b', 14), B(112, 20, 96, 36, 'look for', 'g', 14), B(214, 20, 96, 36, 'look after', 'y', 14), lb(58, 76, '見る', 13, C.blue, 'middle', true), lb(160, 76, 'さがす', 13, C.green, 'middle', true), lb(262, 76, '世話をする', 13, C.main, 'middle', true), lb(160, 118, '前置詞が意味を決める', 12, C.gray, 'middle', true)), ...cap('look ＋ at・for・after')],
    },
    {
      note: 'listen to です。Listen to me.（私の言うことを聞いて）。❓なぜ to が必要？→「聞く」は音のほうへ耳を向けることで、向かう先を示す to が要るからです。listen だけで「〜を」はつけられません。',
      add: [...fresh(B(20, 40, 76, 36, 'listen', 'g', 14), ar(98, 58, 132, 58, C.main), lb(115, 44, 'to', 12, C.red, 'middle', true), B(134, 40, 76, 36, 'me', 'b', 14), ci(272, 58, 14, 'ear', C.green, FILL.green, 9), ar(256, 58, 214, 58, C.green), lb(160, 110, '音のほうへ耳を向ける → to', 12, C.gray, 'middle', true)), ...cap('listen to 〜（〜を聞く）', C.green, FILL.green)],
    },
    {
      note: 'wait for です。I am waiting for the bus.（私はバスを待っています）。❓なぜ for？→「待つ」は、来るものを求める気持ちで待つので、目的を表す for がつくからです。',
      add: [...fresh(...row([['I am waiting', 'g', 100], ['for', 'r', 40], ['the bus.', 'b', 80]], 40, 38, 13), lb(160, 100, '来るのを求めて待つ → for', 12, C.gray, 'middle', true)), ...cap('wait for 〜（〜を待つ）', C.red, FILL.red)],
    },
    {
      note: 'そのほかの熟語です。talk to（〜と話す）、think about（〜について考える）、laugh at（〜を笑う）、ask for（〜を求める）。❓覚え方は？→動詞と前置詞を1つの語のように、声に出して覚えます。',
      add: [...fresh(...row([['talk', 'g', 56], ['to', 'r', 34], ['話す', 'n', 64]], 8, 26, 13), ...row([['think', 'g', 56], ['about', 'r', 50], ['考える', 'n', 64]], 42, 26, 13), ...row([['laugh', 'g', 56], ['at', 'r', 34], ['笑う', 'n', 64]], 76, 26, 13), ...row([['ask', 'g', 56], ['for', 'r', 34], ['求める', 'n', 64]], 110, 26, 13)), ...cap('動詞＋前置詞を セットで覚える', C.main, FILL.yellow)],
    },
    {
      note: 'まちがいやすい形です。×listen music、×wait the bus。❓なぜまちがい？→日本語の「〜を」につられて、前置詞をぬかしているからです。英語では前置詞が必要なので、listen to music、wait for the bus と直します。',
      add: [...fresh(B(30, 22, 260, 30, '×  I listen music.', 'n', 14), B(30, 60, 260, 30, '○  I listen to music.', 'g', 14), B(30, 100, 260, 30, '×  wait the bus  →  ○  wait for the bus', 'r', 12)), ...cap('前置詞をぬかさない', C.red, FILL.red)],
    },
    {
      note: 'She looks after her dog.（彼女は犬の世話をします）。❓なぜ looks に s？→主語が she で、現在の文だからです。熟語のときも、s は動詞の look につけて、前置詞にはつけません。',
      add: [...fresh(...row([['She', 'g', 50], ['looks', 'b', 60], ['after', 'r', 56], ['her dog.', 'n', 76]], 40, 38, 13), ar(100, 36, 100, 20, C.blue), lb(100, 14, 's は動詞に', 11, C.blue, 'middle', true), lb(160, 100, '前置詞に s はつけない', 12, C.gray, 'middle', true)), ...cap('looks after（3人称単数の s は動詞に）', C.main, FILL.yellow)],
    },
    {
      note: '例題です。「私はバスを待っています」→ I am waiting for the bus.。❓「待つ」の熟語は？→wait for です。❓では I am looking ( ) my key.（かぎをさがしている）は？→さがすは look for なので for が入ります。',
      add: [...fresh(...row([['I am waiting', 'g', 100], ['for', 'r', 40], ['the bus.', 'b', 80]], 20, 34, 13), ...row([['I am looking', 'g', 100], ['for', 'r', 40], ['my key.', 'b', 80]], 76, 34, 13), lb(160, 130, 'さがす ＝ look for', 12, C.gray, 'middle', true)), ...cap('wait for ／ look for', C.main, FILL.yellow)],
    },
    {
      note: 'まとめです。look at（見る）・look for（さがす）・look after（世話をする）、listen to（聞く）、wait for（待つ）。❓忘れたら？→「日本語の〜を」が英語では前置詞つきになる、と思い出しましょう。',
      add: [...fresh(B(10, 14, 300, 24, 'look at 見る ／ look for さがす ／ look after 世話', 'b', 11), B(10, 46, 300, 24, 'listen to 聞く', 'g', 12), B(10, 78, 300, 24, 'wait for 待つ', 'g', 12), B(10, 110, 300, 24, 'talk to ／ think about ／ laugh at ／ ask for', 'y', 11)), ...cap('前置詞つきで 1つの動詞')],
    },
  ]),

  // ─────────────────────────────────────────
  '形容詞＋前置詞の組み合わせ': show([
    {
      note: '「be動詞 ＋ 形容詞 ＋ 前置詞」で1つのまとまりの表現があります。❓なぜ前置詞が決まっているの？→形容詞は、あとにくる語との関係で、使う前置詞がきまっているからです。セットで覚えるのが近道です。',
      add: [title('be ＋ 形容詞 ＋ 前置詞'), ...row([['be', 'n', 44], ['interested', 'g', 90], ['in', 'r', 44]], 76, 36, 13), ...cap('形容詞と前置詞は セット')],
    },
    {
      note: 'be interested in（〜に興味がある）。I am interested in science.（私は理科に興味があります）。❓なぜ in？→興味が「心の中に入りこんでいる」ようなイメージで、in（中に）と結びつけて覚えます。',
      add: [...fresh(...row([['I am', 'n', 50], ['interested', 'g', 90], ['in', 'r', 36], ['science.', 'b', 70]], 30, 36, 12), ci(160, 100, 22, 'me', C.green, FILL.green, 11), lb(230, 100, '心の中へ → in', 12, C.gray, 'start', true)), ...cap('be interested in 〜（〜に興味がある）', C.green, FILL.green)],
    },
    {
      note: 'be afraid of（〜をこわがる）と be proud of（〜を誇りに思う）。❓なぜ of？→of は「〜について、〜のこと」という関係を表し、こわい・誇らしいと感じる「そのもの」を示すからです。',
      add: [...fresh(...row([['afraid', 'r', 64], ['of', 'y', 34], ['dogs', 'n', 56]], 30, 36, 14), lb(160, 76, 'こわい対象を of で示す', 12, C.red, 'middle', true), ...row([['proud', 'g', 64], ['of', 'y', 34], ['my team', 'n', 76]], 96, 36, 14), lb(160, 142, '誇らしい対象を of で示す', 12, C.green, 'middle', true)), ...cap('be afraid of ／ be proud of', C.main, FILL.yellow)],
    },
    {
      note: 'be full of（〜でいっぱい）と be famous for（〜で有名）。❓full のあとはなぜ of？→中身を示すときに of を使います。❓famous のあとはなぜ for？→「その理由で有名」と、理由を示す for を使います。',
      add: [...fresh(B(60, 16, 90, 50, 'toys', 'y', 12), lb(105, 82, 'The box is full of toys.', 11, C.main, 'middle', true), B(180, 16, 90, 50, 'sushi', 'y', 12), lb(225, 82, 'famous for sushi', 11, C.main, 'middle', true), lb(105, 108, 'full ＋ of（中身）', 12, C.gray, 'middle', true), lb(225, 108, 'famous ＋ for（理由）', 12, C.gray, 'middle', true)), ...cap('be full of ／ be famous for', C.main, FILL.yellow)],
    },
    {
      note: 'be kind to（〜に親切だ）と be different from（〜とちがう）。❓なぜ to と from？→親切は相手に向かうので to、ちがいは「はなれている」ので from です。意味のイメージで覚えます。',
      add: [...fresh(B(20, 26, 80, 34, 'kind', 'g', 14), ar(102, 43, 152, 43, C.green), B(154, 26, 80, 34, 'me', 'n', 14), lb(128, 30, 'to', 12, C.green, 'middle', true), B(20, 92, 80, 34, 'different', 'p', 12), ar(152, 109, 102, 109, C.purple), B(154, 92, 80, 34, 'that', 'n', 14), lb(128, 96, 'from', 12, C.purple, 'middle', true)), ...cap('be kind to ／ be different from', C.green, FILL.green)],
    },
    {
      note: 'be late for（〜におくれる）と be ready for（〜の準備ができている）。❓なぜ for？→「〜に向けて」という目的や時を表す for が使われるからです。late for school、ready for the test のように使います。',
      add: [...fresh(...row([['late', 'r', 60], ['for', 'y', 40], ['school', 'n', 70]], 30, 36, 14), ...row([['ready', 'g', 60], ['for', 'y', 40], ['the test', 'n', 70]], 90, 36, 14)), ...cap('be late for ／ be ready for', C.main, FILL.yellow)],
    },
    {
      note: '前置詞のあとに動詞を置くときは、ing の形にします。I am interested in playing.（私は演奏することに興味があります）。❓なぜ ing？→前置詞のあとは名詞の場所で、動詞は ing をつけると「〜すること」という名詞のように使えるからです。',
      add: [...fresh(...row([['interested', 'g', 84], ['in', 'r', 34], ['play', 'n', 56]], 30, 36, 13), ar(160, 70, 160, 86, C.main), ...row([['interested', 'g', 84], ['in', 'r', 34], ['playing', 'b', 76]], 92, 36, 13), lb(160, 138, '前置詞のあと → 名詞か ing', 12, C.gray, 'middle', true)), ...cap('前置詞のあとの動詞は ing', C.blue, FILL.blue)],
    },
    {
      note: '例題です。Japan is famous ( ) sushi. →for。She is interested ( ) music. →in。The box is full ( ) toys. →of。❓かんたんな覚え方は？→形容詞と前置詞を、1つの語のように声に出すことです。',
      add: [...fresh(...row([['famous', 'g', 80], ['for', 'r', 40]], 16, 30, 14), ...row([['interested', 'g', 80], ['in', 'r', 40]], 62, 30, 14), ...row([['full', 'g', 80], ['of', 'r', 40]], 108, 30, 14)), ...cap('famous for ／ interested in ／ full of', C.main, FILL.yellow)],
    },
    {
      note: 'まとめです。be good at 〜 ing（〜が得意）もセットで覚えます。❓迷ったら？→よく使う表現を、まるごと声に出して覚えることです。interested in ／ afraid of ／ proud of ／ full of ／ famous for ／ kind to ／ late for。',
      add: [...fresh(B(10, 14, 300, 24, 'interested in ／ good at 〜ing', 'b', 12), B(10, 46, 300, 24, 'afraid of ／ proud of ／ full of', 'r', 12), B(10, 78, 300, 24, 'famous for ／ late for ／ ready for', 'g', 12), B(10, 110, 300, 24, 'kind to ／ different from', 'p', 12)), ...cap('まるごとセットで覚える')],
    },
  ]),

  // ─────────────────────────────────────────
  '付加疑問文の作り方': show([
    {
      note: 'You like cats, don\'t you?（ねこが好きですよね）。文のおわりに短い疑問をつけて、「〜ですよね」と相手に確かめる形です。❓この短い疑問の作り方は？→次のスライドから順に見ます。',
      add: [title('You like cats, don\'t you?'), ...row([['ふつうの文', 'b', 120], ['付加疑問', 'r', 120]], 76, 36, 14), ...cap('「〜ですよね？」と確かめる')],
    },
    {
      note: '❓付加疑問は、前の文とどんな形にする？→反対にします。肯定文のあとは否定、否定文のあとは肯定です。❓なぜ反対？→「本当にそうですか？」と、答えがはっきり返ってくるようにするためです。',
      add: [...fresh(B(20, 26, 110, 34, '肯定文', 'g', 14), ar(132, 43, 176, 43, C.main), B(178, 26, 122, 34, '否定の付加疑問', 'r', 12), B(20, 86, 110, 34, '否定文', 'r', 14), ar(132, 103, 176, 103, C.main), B(178, 86, 122, 34, '肯定の付加疑問', 'g', 12)), ...cap('前の文と反対の形にする')],
    },
    {
      note: 'be動詞の文です。You are a student, aren\'t you?（あなたは学生ですよね）。❓何を使う？→前の文と同じ be動詞を使い、否定の形にします。❓なぜ同じ be動詞？→「are のことを確かめる」ので、その are をくり返して聞くからです。',
      add: [...fresh(...row([['You are a student,', 'g', 170], ['aren\'t you?', 'r', 100]], 40, 38, 13), ar(100, 82, 240, 82, C.main, true), lb(160, 108, '同じ be動詞 ＋ 反対の形', 12, C.gray, 'middle', true)), ...cap('are → aren\'t you?', C.green, FILL.green)],
    },
    {
      note: '一般動詞の文です。Ken plays tennis, doesn\'t he?（ケンはテニスをしますよね）。❓なぜ does？→plays には3人称単数の s がついていて、これを do の形にすると does になるからです。❓主語は？→Ken を he に言いかえます。',
      add: [...fresh(...row([['Ken plays tennis,', 'g', 160], ['doesn\'t he?', 'r', 100]], 40, 38, 13), lb(160, 96, 'plays（三単現）→ does', 12, C.gray, 'middle', true), lb(160, 116, 'Ken → he', 12, C.blue, 'middle', true)), ...cap('一般動詞は do・does・did を使う', C.main, FILL.yellow, 12)],
    },
    {
      note: '過去の文は did です。You liked it, didn\'t you?（それが好きでしたよね）。❓なぜ did？→過去の一般動詞の文では、do の過去の形 did を使うからです。',
      add: [...fresh(...row([['You liked it,', 'g', 130], ['didn\'t you?', 'r', 110]], 40, 38, 13), lb(160, 100, '過去の一般動詞 → did', 12, C.gray, 'middle', true)), ...cap('liked → didn\'t you?', C.green, FILL.green)],
    },
    {
      note: '助動詞の文です。She cannot swim, can she?（彼女は泳げませんよね）。❓なぜ can？→助動詞の文は、同じ助動詞をくり返して聞くからです。前の文は否定なので、付加部分は肯定の can she になります。',
      add: [...fresh(...row([['She cannot swim,', 'r', 150], ['can she?', 'g', 90]], 40, 38, 13), ar(100, 82, 240, 82, C.main, true), lb(160, 108, '同じ助動詞 ＋ 反対の形', 12, C.gray, 'middle', true)), ...cap('cannot → can she?', C.red, FILL.red)],
    },
    {
      note: '主語は代名詞にして、くり返します。Ken → he、the boys → they。❓なぜ代名詞？→名前をもう一度言うと長くなるので、短い代名詞にかえるのがふつうだからです。',
      add: [...fresh(B(20, 30, 90, 30, 'Ken', 'g', 14), ar(112, 45, 158, 45, C.main), B(160, 30, 90, 30, 'he', 'b', 14), B(20, 86, 90, 30, 'the boys', 'g', 13), ar(112, 101, 158, 101, C.main), B(160, 86, 90, 30, 'they', 'b', 14)), ...cap('主語は代名詞にする')],
    },
    {
      note: '特別な形が2つあります。Let\'s 〜, shall we?（〜しましょうね）。命令文, will you?（〜してくださいね）。❓なぜ shall we？→Let\'s は「いっしょにしよう」という誘いなので、「〜しましょうか」を意味する shall we で確かめます。',
      add: [...fresh(B(14, 24, 292, 34, 'Let\'s go, shall we?', 'p', 14), lb(160, 76, 'いっしょにしよう → しましょうか', 12, C.gray, 'middle', true), B(14, 92, 292, 34, 'Open the door, will you?', 'p', 14)), ...cap('Let\'s 〜, shall we?　命令文, will you?', C.purple, FILL.purple, 12)],
    },
    {
      note: '例題です。You like cats, ( ) ( )? →肯定なので否定、一般動詞なので don\'t you。Ken is not busy, ( ) ( )? →否定なので肯定、be動詞なので is he。❓最初に何を見る？→前の文が肯定か否定か、です。',
      add: [...fresh(...row([['You like cats,', 'g', 130], ['don\'t you?', 'r', 100]], 20, 34, 13), ...row([['Ken is not busy,', 'r', 150], ['is he?', 'g', 80]], 76, 34, 13), lb(160, 128, '前の文が肯定か否定かを、まず見る', 12, C.gray, 'middle', true)), ...cap('don\'t you ／ is he', C.main, FILL.yellow)],
    },
  ]),

  // ─────────────────────────────────────────
  '時を表す接続詞（before・after・while・until）': show([
    {
      note: 'before・after・while・until は、2つの出来事の「時の関係」を表す接続詞です。❓何をつなぐ？→「主語 ＋ 動詞」の文と文です。まず出来事の順番を考えます。',
      add: [title('before・after・while・until'), ...row([['before', 'b', 60], ['after', 'g', 60], ['while', 'y', 60], ['until', 'r', 60]], 76, 34, 13), ...cap('時の関係を表す')],
    },
    {
      note: 'before は「〜する前に」です。Wash your hands before you eat.（食べる前に手をあらいなさい）。❓どちらが先？→手をあらうことが先で、食べることがあとです。before のあとが「あとの出来事」です。',
      add: [...fresh(B(20, 40, 110, 40, 'Wash your hands', 'b', 12), ar(132, 60, 178, 60, C.main), B(180, 40, 120, 40, 'you eat', 'g', 13), lb(75, 100, '先', 12, C.blue, 'middle', true), lb(240, 100, 'あと', 12, C.green, 'middle', true), lb(160, 126, 'before ＋ あとの出来事', 12, C.gray, 'middle', true)), ...cap('before ＝ 〜する前に', C.blue, FILL.blue)],
    },
    {
      note: 'after は「〜したあとに」です。I will call you after I get home.（家に着いたあとで電話します）。❓どちらが先？→家に着くことが先で、電話はそのあとです。after のあとが「先の出来事」です。',
      add: [...fresh(B(20, 40, 110, 40, 'I get home', 'g', 13), ar(132, 60, 178, 60, C.main), B(180, 40, 120, 40, 'I call you', 'b', 13), lb(75, 100, '先', 12, C.green, 'middle', true), lb(240, 100, 'あと', 12, C.blue, 'middle', true), lb(160, 126, 'after ＋ 先の出来事', 12, C.gray, 'middle', true)), ...cap('after ＝ 〜したあとに', C.green, FILL.green)],
    },
    {
      note: 'while は「〜している間に」です。I watched TV while my mother was cooking.（母が料理している間にテレビを見ていた）。❓なぜ while？→2つの動作が、同じ時間に並んで続いているからです。',
      add: [...fresh(lb(44, 30, 'TVを見る', 11, C.main, 'middle', true), B(84, 20, 206, 20, '', 'y', 10), lb(44, 66, '母が料理', 11, C.main, 'middle', true), B(84, 56, 206, 20, '', 'y', 10), ar(84, 100, 290, 100, C.gray), lb(180, 120, '同じ時間に続く', 12, C.gray, 'middle', true)), ...cap('while ＝ 〜している間に', C.main, FILL.yellow)],
    },
    {
      note: 'until は「〜するまで」です。I will wait here until you come back.（あなたがもどるまでここで待ちます）。❓while とのちがいは？→until は、ある時点までずっと続いて、その時点で終わることを表します。',
      add: [...fresh(B(20, 40, 200, 26, 'I wait here ……', 'r', 13), ln(220, 30, 220, 76, C.red, true, 2), lb(220, 90, 'you come back', 12, C.red, 'middle', true), ar(20, 108, 220, 108, C.gray), lb(120, 126, 'ここまで続く', 12, C.gray, 'middle', true)), ...cap('until ＝ 〜するまで（ずっと）', C.red, FILL.red)],
    },
    {
      note: '❓これらの接続詞のあとには何を置く？→「主語 ＋ 動詞」です。before you eat、after I get home のように、文の形を続けます。前置詞ならあとは名詞ですが、接続詞は文につながります。',
      add: [...fresh(...row([['before', 'b', 64], ['you', 'g', 44], ['eat', 'g', 44]], 30, 34, 14), lb(160, 76, '接続詞 ＋ 主語 ＋ 動詞', 12, C.blue, 'middle', true), ...row([['before', 'n', 64], ['dinner', 'y', 70]], 96, 34, 14), lb(160, 142, '前置詞なら あとは名詞', 12, C.gray, 'middle', true)), ...cap('接続詞のあと ＝ 主語 ＋ 動詞')],
    },
    {
      note: 'I will call you after I get home. ❓なぜ will get ではなく get？→時を表す接続詞のあとは、未来のことでも現在形にする決まりだからです。❓なぜ？→will call ですでに未来を言っているので、時の部分は現在形にして、未来を二重に言わないためです。',
      add: [...fresh(B(6, 26, 150, 36, 'I will call you', 'g', 13), B(162, 26, 152, 36, 'after I get home.', 'b', 13), lb(80, 80, '未来 → will', 12, C.green, 'middle', true), lb(238, 80, '現在形 get', 12, C.blue, 'middle', true), B(160, 100, 148, 30, '×  after I will get', 'n', 12)), ...cap('時を表す接続詞のあとは現在形', C.blue, FILL.blue)],
    },
    {
      note: '選び方です。❓while と until はどうちがう？→while は「その間ずっと同時に」、until は「ある時点まで続いて終わる」です。問題文を読んで、動作が並んでいるか、ある時点で終わるかを考えます。',
      add: [...fresh(B(14, 20, 140, 30, 'while', 'y', 14), B(166, 20, 140, 30, 'until', 'r', 14), lb(84, 72, '同時に続く', 12, C.main, 'middle', true), lb(236, 72, 'ある時点まで', 12, C.red, 'middle', true), lb(84, 100, '母が料理している間', 11, C.gray, 'middle'), lb(236, 100, 'あなたがもどるまで', 11, C.gray, 'middle')), ...cap('間 → while　　まで → until', C.main, FILL.yellow)],
    },
    {
      note: '例題です。I watched TV ( ) my mother was cooking. →間なので while。I will wait here ( ) you come back. →もどるまでなので until。I will call you after I ( ) home. →現在形の get です。',
      add: [...fresh(...row([['間', 'y', 40], ['→', 'n', 24], ['while', 'y', 70]], 16, 30, 13), ...row([['〜まで', 'r', 50], ['→', 'n', 24], ['until', 'r', 70]], 60, 30, 13), ...row([['after のあと', 'b', 84], ['→', 'n', 24], ['get（現在形）', 'b', 100]], 104, 30, 12)), ...cap('while ／ until ／ get', C.main, FILL.yellow)],
    },
  ]),
};
