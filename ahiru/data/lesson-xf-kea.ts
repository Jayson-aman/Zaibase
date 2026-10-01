// 高校受験 英語の単元に、動く図解スライドを1つずつ（TAG=kea）。
// 「なぜ？」の連鎖で7枚以上。上半分に図、下の帯（band）にそのスライドのひとこと。
import type { DiagramFigure } from './figures';
import type { DiagramElement } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, show, flow, band, fresh, cover } from './diagram-kit';

type E = DiagramElement;
const cap = (t: string, color: string = C.ink, size = 12) => band(150, lb(160, 190, t, size, color, 'middle', true));
const head = (t: string, color: string = C.ink) => lb(160, 16, t, 12, color, 'middle', true);
/** 横一列に等間隔の箱を並べる（矢印なし）。 */
const rowb = (texts: string[], y: number, h: number, color: string, fill: string, size = 12, x0 = 10, x1 = 310, gap = 6): E[] => {
  const n = texts.length;
  const w = (x1 - x0 - gap * (n - 1)) / n;
  return texts.map((t, i) => bx(x0 + i * (w + gap), y, w, h, t, color, fill, size));
};
/** 音節に区切って、強く読む音節だけを赤で目立たせる。 */
const syl = (parts: string[], strong: number, y: number, x0 = 10, x1 = 310, h = 34): E[] => {
  const n = parts.length;
  const gap = 4;
  const w = (x1 - x0 - gap * (n - 1)) / n;
  return parts.map((t, i) => bx(x0 + i * (w + gap), y + 6, w, h, t, i === strong ? C.red : C.gray, i === strong ? FILL.red : FILL.gray, i === strong ? 13 : 11));
};

// ───────── koko_eigo_s001 マジック e ─────────
const s001: DiagramFigure = show([
  {
    note: 'cap（帽子）と cape（岬）。うしろに e を一つ足しただけで、真ん中の a の読み方が変わります。cap は「キャップ」、cape は「ケイプ」です。',
    add: [bx(20, 30, 120, 70, 'cap\n帽子（ぼうし）', C.blue, FILL.blue, 15), bx(180, 30, 120, 70, 'cape\n岬（みさき）', C.red, FILL.red, 15), ar(142, 65, 178, 65, C.main), lb(160, 56, '+ e', 12, C.main, 'middle', true), ...cap('e を足すと a の音が変わる')],
  },
  {
    note: '❓なぜ cap の a は短いのでしょう。→ 「子音字＋母音字＋子音字」で終わる形（閉じた形）の語は、母音字が短い音になるからです。cap は c・a・p で、a が子音字にはさまれています。',
    add: fresh(head('cap ＝ 子音・母音・子音'), bx(70, 34, 50, 50, 'c', C.gray, FILL.gray, 20), bx(135, 34, 50, 50, 'a', C.red, FILL.red, 20), bx(200, 34, 50, 50, 'p', C.gray, FILL.gray, 20), lb(160, 108, '閉じた形 → a は短い音 [æ]', 12, C.red, 'middle', true), ...cap('キャップ（短い音）', C.blue)),
  },
  {
    note: 'そこへ e が付くと「母音字＋子音字＋e」の形になります。この語尾の e 自体は読みません（マジック e）。でも、前の a の読み方を変える合図になります。',
    add: fresh(head('cape ＝ 母音字 ＋ 子音字 ＋ e'), bx(40, 34, 50, 50, 'c', C.gray, FILL.gray, 20), bx(100, 34, 50, 50, 'a', C.red, FILL.red, 20), bx(160, 34, 50, 50, 'p', C.gray, FILL.gray, 20), bx(220, 34, 50, 50, 'e', C.gray, FILL.warm, 20), ar(245, 32, 130, 28, C.red, true), lb(250, 104, '読まない', 11, C.gray, 'middle'), lb(125, 104, '← 名前の音になる', 11, C.red, 'middle', true), ...cap('e は読まないが、a を変える', C.red)),
  },
  {
    note: '❓変わったあとの a は、どんな音でしょう。→ アルファベットを言うときの名前そのものです。a は「エイ」、e は「イー」、i は「アイ」、o は「オウ」、u は「ユー」です。これをアルファベット読みといいます。',
    add: fresh(head('母音字のアルファベット読み'), ...rowb(['a\nエイ', 'e\nイー', 'i\nアイ', 'o\nオウ', 'u\nユー'], 34, 56, C.red, FILL.red, 13), lb(160, 118, 'e の合図があると、この音で読む', 12, C.ink, 'middle', true), ...cap('マジック e ＝ 名前の音にする合図', C.red)),
  },
  {
    note: '例を見ましょう。hat→hate（憎む）、hop→hope（望む）、win→wine（ワイン）、cut→cute（かわいい）。e の有無だけで、意味も発音も変わります。',
    add: fresh(head('e の有無で、意味も音も変わる'), ...[['hat', 'hate'], ['hop', 'hope'], ['win', 'wine'], ['cut', 'cute']].flatMap(([a, b], i) => [bx(30, 28 + i * 30, 80, 24, a, C.blue, FILL.blue, 12), ar(114, 40 + i * 30, 196, 40 + i * 30, C.main), lb(155, 34 + i * 30, '+ e', 10, C.main, 'middle', true), bx(200, 28 + i * 30, 80, 24, b, C.red, FILL.red, 12)]), ...cap('hope は「ホウプ」、wine は「ワイン」')),
  },
  {
    note: '❓では have・give・live・come・some・love・none・done はなぜ読み方が変わらないのでしょう。→ これらは e で終わっても母音が短いままです。英語では語を v で終わらせない習慣があり、この e は意味のない飾りだからです。e が音を変えているわけではありません。',
    add: fresh(head('例外：e があっても短いまま', C.red), ...rowb(['have', 'give', 'live', 'love'], 30, 34, C.red, FILL.red, 13, 10, 310, 6), ...rowb(['come', 'some', 'none', 'done'], 72, 34, C.red, FILL.red, 13, 10, 310, 6), lb(160, 126, 'v で終わる語には、飾りの e を付ける', 11, C.gray, 'middle'), ...cap('love を「ロウヴ」と読まない', C.red)),
  },
  {
    note: '初めて見る単語は、この順で読み方を予想します。①最後が「母音字＋子音字＋e」か見る。②そうならアルファベット読み。③have・give・love などの例外でないか確かめる。',
    add: fresh(...flow(['母音字＋\n子音字＋e?', 'そうなら\n名前の音', '例外語か\n確かめる'], 24, { h: 56, size: 11, color: C.blue, fill: FILL.blue }).flat(), lb(160, 112, '例）make・these・time・home・use', 12, C.ink, 'middle', true), ...cap('読み方は予想できる', C.blue)),
  },
  {
    note: 'まとめです。母音字には短い音と名前の音がある。閉じた形は短い音。語尾に e が付くと名前の音になり、e は読まない。have・give・love などは例外。',
    add: fresh(bx(15, 14, 290, 30, '閉じた形（cap）→ 短い音', C.blue, FILL.blue, 12), bx(15, 52, 290, 30, '語尾の e（cape）→ 名前の音、e は読まない', C.red, FILL.red, 12), bx(15, 90, 290, 30, 'have・give・love は短いまま', C.gray, FILL.gray, 12), ...cap('e の有無で音を予想する', C.green)),
  },
], 'マジック e：語尾の e が母音字の読み方を変える');

// ───────── koko_eigo_s003 c と g ─────────
const s003: DiagramFigure = show([
  {
    note: 'city は「シティ」、cat は「キャット」。同じ c なのに [s] と [k] に分かれます。でたらめに見えて、実は決まりが一つあります。',
    add: [bx(30, 30, 110, 60, 'city\nシティ', C.red, FILL.red, 15), bx(180, 30, 110, 60, 'cat\nキャット', C.blue, FILL.blue, 15), lb(85, 108, 'c ＝ [s]', 12, C.red, 'middle', true), lb(235, 108, 'c ＝ [k]', 12, C.blue, 'middle', true), ...cap('同じ c なのに音がちがう')],
  },
  {
    note: '❓何で決まるのでしょう。→ c のすぐうしろの文字だけで決まります。うしろが e・i・y のときはやわらかい音の [s]、それ以外はかたい音の [k] です。',
    add: fresh(head('c のうしろを見る'), ci(50, 70, 24, 'c', C.main, FILL.warm, 20), ar(78, 60, 130, 40, C.red), ar(78, 80, 130, 100, C.blue), bx(134, 24, 90, 32, 'e ・ i ・ y', C.red, FILL.red, 13), bx(134, 84, 90, 32, 'それ以外', C.blue, FILL.blue, 13), ar(228, 40, 262, 40, C.red), ar(228, 100, 262, 100, C.blue), bx(264, 26, 48, 28, '[s]', C.red, FILL.red, 13), bx(264, 86, 48, 28, '[k]', C.blue, FILL.blue, 13), ...cap('e・i・y の前だけ [s]', C.red)),
  },
  {
    note: '例です。やわらかい音：city・cent・cycle・ice・nice。かたい音：cat・cup・cook・class・music。class は c のうしろが l なので、かたい [k] です。',
    add: fresh(lb(10, 18, '[s]（やわらかい）', 12, C.red, 'start', true), ...rowb(['city', 'cent', 'cycle', 'ice'], 28, 30, C.red, FILL.red, 12), lb(10, 80, '[k]（かたい）', 12, C.blue, 'start', true), ...rowb(['cat', 'cup', 'cook', 'class'], 90, 30, C.blue, FILL.blue, 12), ...cap('city の c のうしろは i')),
  },
  {
    note: '❓g も同じでしょうか。→ ほぼ同じです。g のうしろが e・i・y なら [dʒ]（ジ）、それ以外は [g]（グ）。page・gym・giant は「ジ」、game・go・big は「グ」です。',
    add: fresh(head('g も、うしろの文字で決まる'), lb(10, 40, '[dʒ] ジ', 12, C.red, 'start', true), ...rowb(['page', 'gym', 'giant', 'age'], 50, 30, C.red, FILL.red, 12), lb(10, 102, '[g] グ', 12, C.blue, 'start', true), ...rowb(['game', 'go', 'big', 'green'], 112, 30, C.blue, FILL.blue, 12), ...cap('e・i・y の前 → やわらかい音', C.red)),
  },
  {
    note: '❓決まりに合わない語はないのでしょうか。→ あります。get・give・girl・begin・gift・forget・together は、うしろが e や i なのに [g] と読みます。',
    add: fresh(head('g の例外：e・i の前でも [g]', C.red), ...rowb(['get', 'give', 'girl', 'begin'], 30, 32, C.red, FILL.red, 13), ...rowb(['gift', 'forget', 'together'], 74, 32, C.red, FILL.red, 13, 40, 280, 6), lb(160, 126, 'どれも [g] ＝ 「グ」', 12, C.ink, 'middle', true), ...cap('例外は丸ごと覚える', C.red)),
  },
  {
    note: '❓例外は覚えるしかないのでしょうか。→ はい。でも、これらはすべて日常でよく使う語で、入試にもよく出ます。数が少ないので、まとめて覚えれば十分です。',
    add: fresh(bx(20, 22, 130, 50, '規則\nうしろが e・i・y', C.blue, FILL.blue, 12), bx(170, 22, 130, 50, '例外\nget・give・girl\nbegin・gift…', C.red, FILL.red, 11), lb(85, 98, '大多数', 12, C.blue, 'middle', true), lb(235, 98, '少数だけ', 12, C.red, 'middle', true), ...cap('規則＋例外の少数で全部', C.ink)),
  },
  {
    note: '読み方を決める手順です。①c か g を見つける。②すぐうしろの文字を見る。③e・i・y なら [s]・[dʒ]、それ以外は [k]・[g]。④get や give など例外か確かめる。',
    add: fresh(...flow(['c・g を\n見つける', 'うしろの\n文字', 'e・i・y\nか?', '例外か\n確認'], 26, { h: 62, size: 11, color: C.blue, fill: FILL.blue, gap: 14 }).flat(), ...cap('うしろの 1 文字を見る', C.blue)),
  },
  {
    note: 'まとめです。c と g は、うしろが e・i・y のときだけやわらかい音（[s]・[dʒ]）。ほかはかたい音（[k]・[g]）。g には get・give・girl などの例外がある。',
    add: fresh(bx(15, 14, 290, 30, 'c：e・i・y の前 [s]、他は [k]', C.blue, FILL.blue, 12), bx(15, 52, 290, 30, 'g：e・i・y の前 [dʒ]、他は [g]', C.red, FILL.red, 12), bx(15, 90, 290, 30, '例外：get・give・girl・begin', C.gray, FILL.gray, 12), ...cap('うしろの文字が決め手', C.green)),
  },
], 'c と g の読み分け');

// ───────── koko_eigo_s004 黙字 ─────────
const s004: DiagramFigure = show([
  {
    note: '「知っている」は know。この k は読みません。昔は本当に「クノウ」と発音していて、音だけが先に消え、つづりが残りました。こういう読まない文字を黙字（もくじ）といいます。',
    add: [bx(60, 30, 200, 60, 'k n o w', C.ink, FILL.warm, 28), ...cap('know の k は読まない', C.red)],
  },
  {
    note: '❓どの文字が読まれないのでしょう。→ 実はでたらめではなく、位置ごとにパターンがあります。まず語の初めから。kn- の k、wr- の w、そして h です。',
    add: fresh(head('語の初めで読まない'), bx(10, 30, 96, 52, 'kn-\nknow・knife\nknee・knock', C.red, FILL.red, 10), bx(112, 30, 96, 52, 'wr-\nwrite・wrong\nwrap・wrist', C.red, FILL.red, 10), bx(214, 30, 96, 52, 'h\nhour・honest', C.red, FILL.red, 11), lb(160, 108, 'k・w・h が消える', 12, C.red, 'middle', true), ...cap('kn- と wr- は先頭が消える', C.red)),
  },
  {
    note: '次は語の終わり。-mb の b（climb・comb・lamb・thumb・bomb）、-mn の n（autumn）、-gn の g（sign・design）です。',
    add: fresh(head('語の終わりで読まない'), bx(10, 30, 96, 52, '-mb\nclimb・comb\nthumb・bomb', C.blue, FILL.blue, 10), bx(112, 30, 96, 52, '-mn\nautumn\ncolumn', C.blue, FILL.blue, 11), bx(214, 30, 96, 52, '-gn\nsign\ndesign', C.blue, FILL.blue, 11), lb(160, 108, 'b・n・g が消える', 12, C.blue, 'middle', true), ...cap('m や n の後ろの文字が消える', C.blue)),
  },
  {
    note: '語の途中にもあります。-stle の t（listen・castle）、-lk の l（walk・talk）、half・could・would・should の l、answer の w、Wednesday の d です。',
    add: fresh(head('語の途中で読まない'), bx(10, 28, 96, 52, '-stle の t\nlisten\ncastle', C.green, FILL.green, 11), bx(112, 28, 96, 52, '-lk の l\nwalk・talk\nchalk', C.green, FILL.green, 11), bx(214, 28, 96, 52, 'l\nhalf・could\nwould', C.green, FILL.green, 11), ...rowb(['answer の w', 'Wednesday の d', 'island の s'], 92, 30, C.green, FILL.green, 10), ...cap('途中の l・t・w・d・s も消える', C.green)),
  },
  {
    note: '❓黙字があると、どんなことが起こるでしょう。→ つづりがちがうのに発音が同じになる語が生まれます。knight（騎士）と night（夜）、write（書く）と right（正しい）。書き取りでは文脈で書き分けます。',
    add: fresh(head('黙字のせいで同じ発音になる'), bx(20, 30, 100, 28, 'knight 騎士', C.red, FILL.red, 12), bx(200, 30, 100, 28, 'night 夜', C.blue, FILL.blue, 12), ln(120, 44, 200, 44, C.gray, true), bx(20, 76, 100, 28, 'write 書く', C.red, FILL.red, 12), bx(200, 76, 100, 28, 'right 正しい', C.blue, FILL.blue, 12), ln(120, 90, 200, 90, C.gray, true), lb(160, 36, '同じ音', 10, C.gray, 'middle'), lb(160, 82, '同じ音', 10, C.gray, 'middle'), ...cap('文脈で書き分ける', C.red)),
  },
  {
    note: '❓黙字の h は、ほかにどんな影響があるでしょう。→ 冠詞の a と an の選び方です。a か an かは、つづりではなく発音が母音で始まるかで決まります。hour の h は読まないので an hour、honest も an honest man です。',
    add: fresh(head('a か an かは、発音で決まる'), bx(20, 30, 130, 36, 'an hour', C.red, FILL.red, 15), bx(170, 30, 130, 36, 'an honest man', C.red, FILL.red, 13), lb(160, 88, 'h を読まない → 母音で始まる音 → an', 12, C.ink, 'middle', true), lb(160, 112, 'a university（ユ の音で始まる）', 11, C.gray, 'middle'), ...cap('黙字の h は an が証拠', C.red)),
  },
  {
    note: '❓では、読まない文字は書かなくてよいのでしょうか。→ いいえ。音では消えても字では消えません。climb の b は読みませんが、過去形は climbed と書きます。書くときは必ず必要です。',
    add: fresh(head('書くときは必要！'), bx(30, 30, 110, 34, 'climb', C.gray, FILL.gray, 15), ar(144, 47, 176, 47, C.main), bx(180, 30, 110, 34, 'climbed', C.green, FILL.green, 15), lb(160, 92, '× climed（b を落とした誤り）', 12, C.red, 'middle', true), ...cap('音では消えても、字は消えない', C.red)),
  },
  {
    note: 'まとめです。黙字は位置ごとにパターンがある。語の初め（kn-・wr-・h）、終わり（-mb・-mn・-gn）、途中（-stle・-lk・half）。同じ音の語が生まれ、an hour のように冠詞にも関わる。書くときは落とさない。',
    add: fresh(bx(15, 12, 290, 28, '初め：kn-・wr-・h', C.red, FILL.red, 12), bx(15, 46, 290, 28, '終わり：-mb・-mn・-gn', C.blue, FILL.blue, 12), bx(15, 80, 290, 28, '途中：-stle・-lk・half・answer', C.green, FILL.green, 12), bx(15, 114, 290, 28, '書くときは落とさない', C.gray, FILL.gray, 12), ...cap('パターンで覚える', C.green)),
  },
], '黙字（読まない文字）のパターン');

// ───────── koko_eigo_s005 同つづり異発音 ─────────
const s005: DiagramFigure = show([
  {
    note: 'I read a book every day. と I read a book yesterday. は、字面がまったく同じなのに、read の読み方が変わります。現在形は [riːd]（リード）、過去形は [red]（レッド）です。',
    add: [bx(15, 20, 140, 54, 'read\n現在形', C.blue, FILL.blue, 14), bx(165, 20, 140, 54, 'read\n過去形', C.red, FILL.red, 14), lb(85, 92, '[riːd]  リード', 12, C.blue, 'middle', true), lb(235, 92, '[red]  レッド', 12, C.red, 'middle', true), ...cap('つづりは同じ、音がちがう')],
  },
  {
    note: '❓どう見分けるのでしょう。→ 文の中の手がかりを探します。every morning（毎朝）があれば現在形、last night（昨夜）があれば過去形です。',
    add: fresh(head('時を表す言葉が手がかり'), bx(15, 28, 290, 30, 'I read the news every morning.', C.blue, FILL.blue, 12), lb(160, 72, '→ 習慣だから 現在形 [riːd]', 12, C.blue, 'middle', true), bx(15, 88, 290, 30, 'I read the news last night.', C.red, FILL.red, 12), lb(160, 132, '→ 昨夜だから 過去形 [red]', 12, C.red, 'middle', true), ...cap('every morning か last night か')),
  },
  {
    note: '❓時制のほかにも、読み方が変わる場合はありますか。→ あります。品詞（ひんし）で変わる語です。live は動詞なら [lɪv]（住む）、形容詞なら [laɪv]（生の・生放送の）。',
    add: fresh(head('品詞で音が変わる：live'), bx(15, 28, 140, 60, 'live\n動詞 住む', C.blue, FILL.blue, 13), bx(165, 28, 140, 60, 'live\n形容詞 生の', C.red, FILL.red, 13), lb(85, 108, '[lɪv]  リヴ', 12, C.blue, 'middle', true), lb(235, 108, '[laɪv]  ライヴ', 12, C.red, 'middle', true), ...cap('They live in Osaka. / a live concert')),
  },
  {
    note: '❓ほかの語は? → use は動詞なら [juːz]（使う）、名詞なら [juːs]（使用）。close は動詞なら [kloʊz]（閉める）、形容詞なら [kloʊs]（近い）。',
    add: fresh(head('動詞と名詞・形容詞で音が変わる'), lb(15, 44, 'use', 14, C.ink, 'start', true), bx(70, 30, 110, 28, '動詞 [juːz]', C.blue, FILL.blue, 12), bx(190, 30, 110, 28, '名詞 [juːs]', C.red, FILL.red, 12), lb(15, 90, 'close', 14, C.ink, 'start', true), bx(70, 76, 110, 28, '動詞 [kloʊz]', C.blue, FILL.blue, 12), bx(190, 76, 110, 28, '形容詞 [kloʊs]', C.red, FILL.red, 11), ...cap('close the door / close to my house')),
  },
  {
    note: '❓動詞と名詞の音のちがいに、きまりはあるのでしょうか。→ 語尾が s の語では、動詞は有声の [z]、名詞は無声の [s] になる傾向があります。動詞のほうが濁る、と覚えましょう。use・excuse・house が同じ型です。',
    add: fresh(head('語尾の s：動詞は濁る'), bx(10, 28, 90, 28, 'use', C.gray, FILL.gray, 12), bx(110, 28, 90, 28, '動詞 [z]', C.blue, FILL.blue, 12), bx(210, 28, 90, 28, '名詞 [s]', C.red, FILL.red, 12), bx(10, 64, 90, 28, 'excuse', C.gray, FILL.gray, 12), bx(110, 64, 90, 28, '動詞 [z]', C.blue, FILL.blue, 12), bx(210, 64, 90, 28, '名詞 [s]', C.red, FILL.red, 12), bx(10, 100, 90, 28, 'house', C.gray, FILL.gray, 12), bx(110, 100, 90, 28, '動詞 [z]', C.blue, FILL.blue, 12), bx(210, 100, 90, 28, '名詞 [s]', C.red, FILL.red, 12), ...cap('動詞は [z]（濁る）', C.blue)),
  },
  {
    note: '名詞と動詞で変わる語はほかにもあります。wind は名詞 [wɪnd]（風）、動詞 [waɪnd]（巻く）。tear は名詞 [tɪər]（涙）、動詞 [teər]（引き裂く）。',
    add: fresh(head('もっと例'), lb(15, 46, 'wind', 14, C.ink, 'start', true), bx(75, 30, 110, 30, '名詞 [wɪnd] 風', C.red, FILL.red, 11), bx(195, 30, 115, 30, '動詞 [waɪnd] 巻く', C.blue, FILL.blue, 11), lb(15, 94, 'tear', 14, C.ink, 'start', true), bx(75, 78, 110, 30, '名詞 [tɪər] 涙', C.red, FILL.red, 11), bx(195, 78, 115, 30, '動詞 [teər] 引き裂く', C.blue, FILL.blue, 10), ...cap('品詞を見れば音が決まる', C.ink)),
  },
  {
    note: '読み方の決め方です。①つづりが同じで音が二つある語に出会う。②時制の手がかり（every day・last night）か、品詞（動詞・名詞・形容詞）を見る。③語尾が s なら、動詞は [z]。',
    add: fresh(...flow(['同じつづりで\n音が二つ', '時制・品詞を\n見る', '語尾 s は\n動詞が [z]'], 26, { h: 62, size: 11, color: C.blue, fill: FILL.blue }).flat(), ...cap('文の中の働きで決める', C.blue)),
  },
  {
    note: 'まとめです。同じつづりでも、時制や品詞がちがえば発音が変わる。read は every day か last night か。live・use・close は品詞で。語尾 s は、動詞が濁る。',
    add: fresh(bx(15, 14, 290, 30, 'read：現在 [riːd]、過去 [red]', C.blue, FILL.blue, 12), bx(15, 52, 290, 30, 'live・use・close：品詞で音が変わる', C.red, FILL.red, 12), bx(15, 90, 290, 30, '語尾 s：動詞は [z]、名詞は [s]', C.green, FILL.green, 12), ...cap('文の中の働きを見る', C.green)),
  },
], '同じつづりで、発音が変わる語');

// ───────── koko_eigo_s008 語尾自身を強く読む ─────────
const s008: DiagramFigure = show([
  {
    note: 'Japan は「ジャパン」で後ろが強いのに、Japanese になると最後の -ese がいちばん強くなります。強く読む場所が、語尾の付け方で動きます。',
    add: [lb(10, 20, 'Japan', 12, C.ink, 'start', true), ...syl(['ja', 'PAN'], 1, 26, 10, 150, 34), lb(10, 82, 'Japanese', 12, C.ink, 'start', true), ...syl(['jap', 'a', 'NESE'], 2, 88, 10, 230, 34), ...cap('赤い所が いちばん強く読む所', C.red)],
  },
  {
    note: '❓語尾自身を強く読むのは、どんな語尾でしょう。→ 数がごくわずかです。-ee、-eer、-ese、-oo・-oon、-self の五つ。ここを覚えれば、長い語でも位置が一瞬で決まります。',
    add: fresh(head('語尾が強いグループ'), ...rowb(['-ee', '-eer', '-ese'], 28, 34, C.red, FILL.red, 14), ...rowb(['-oo・-oon', '-self'], 74, 34, C.red, FILL.red, 14, 50, 270, 10), ...cap('この語尾の所を強く読む', C.red)),
  },
  {
    note: '-ee は「〜される人」を表します。employer（雇う側）は前の PLOY が強く、employee（雇われる側）は後ろの EE が強い。-er と -ee で強い場所が逆になります。',
    add: fresh(head('employer と employee'), lb(10, 36, 'employer', 11, C.ink, 'start', true), ...syl(['em', 'PLOY', 'er'], 1, 42, 10, 230, 32), lb(10, 96, 'employee', 11, C.ink, 'start', true), ...syl(['em', 'ploy', 'EE'], 2, 102, 10, 230, 32), ...cap('雇われる側は、語尾 -ee が強い', C.red)),
  },
  {
    note: '-eer は engineer（技師）、volunteer（ボランティア）、career（経歴）。volunteer は VOL- ではなく、第3音節の TEER が強く読まれます。',
    add: fresh(head('-eer：語尾が強い'), lb(10, 34, 'engineer', 11, C.ink, 'start', true), ...syl(['en', 'gi', 'NEER'], 2, 40, 10, 230, 30), lb(10, 82, 'volunteer', 11, C.ink, 'start', true), ...syl(['vol', 'un', 'TEER'], 2, 88, 10, 230, 30), lb(10, 130, 'career も 語尾の -eer が強い', 11, C.gray, 'start'), ...cap('volunteer は VOL ではない', C.red)),
  },
  {
    note: '-ese は国名から作る語です。China の CHI が、Chinese では NESE に移ります。Japan は ja-PAN の第2音節でしたが、Japanese は第3音節に動きます。',
    add: fresh(head('国名 → -ese で後ろへ'), lb(10, 34, 'China', 11, C.ink, 'start', true), ...syl(['CHI', 'na'], 0, 40, 10, 150, 30), lb(10, 84, 'Chinese', 11, C.ink, 'start', true), ...syl(['chi', 'NESE'], 1, 90, 10, 190, 30), ar(160, 56, 160, 88, C.main, true), ...cap('-ese が付くと語尾が強い', C.red)),
  },
  {
    note: '❓語尾が強くなると、前の音節はどうなるでしょう。→ 弱くあいまいな音 [ə] になります。Japanese は「ジャ・パ・ニーズ」と平らに読まず、最後だけが強く長く、前はさらっと弱く読みます。',
    add: fresh(head('強いのは 1 か所だけ'), bx(20, 40, 50, 30, 'jap', C.gray, FILL.gray, 10), bx(78, 40, 40, 30, 'a', C.gray, FILL.gray, 10), bx(126, 24, 100, 62, 'NESE', C.red, FILL.red, 20), lb(45, 90, '弱く', 11, C.gray, 'middle'), lb(98, 90, '弱く', 11, C.gray, 'middle'), lb(176, 104, '強く長く', 12, C.red, 'middle', true), ...cap('長い語ほど、強いのは 1 か所', C.red)),
  },
  {
    note: '❓語尾が -ee でも、強くならない語はないのでしょうか。→ あります。coffee は COF-fee、committee は com-MIT-tee で、語尾には来ません。「コーヒーと委員会は例外」と一組で覚えます。',
    add: fresh(head('例外：-ee でも語尾が強くない', C.red), lb(10, 36, 'coffee', 11, C.ink, 'start', true), ...syl(['COF', 'fee'], 0, 42, 10, 150, 30), lb(10, 88, 'committee', 11, C.ink, 'start', true), ...syl(['com', 'MIT', 'tee'], 1, 94, 10, 230, 30), ...cap('コーヒーと委員会は例外', C.red)),
  },
  {
    note: '-self も語尾が強い型です。myself は my-SELF、ourselves は our-SELVES。balloon（bal-LOON）や bamboo（bam-BOO）も同じ型です。',
    add: fresh(head('-self と -oo・-oon'), lb(10, 30, 'myself', 11, C.ink, 'start', true), ...syl(['my', 'SELF'], 1, 36, 10, 170, 28), lb(10, 76, 'ourselves', 11, C.ink, 'start', true), ...syl(['our', 'SELVES'], 1, 82, 10, 190, 28), lb(10, 122, 'bamboo は bam-BOO', 11, C.ink, 'start'), ...cap('強く読むのは -self のほう', C.red)),
  },
  {
    note: 'まとめです。語尾を強く読む型は -ee・-eer・-ese・-oo・-oon・-self。付くと、強い場所が後ろへ動く。例外は coffee と committee。-ing や -ed などは、強い場所を動かさない。',
    add: fresh(bx(15, 12, 290, 28, '-ee・-eer・-ese・-oo(n)・-self は語尾が強い', C.red, FILL.red, 11), bx(15, 46, 290, 28, '付くと、強い場所が後ろへ動く', C.blue, FILL.blue, 12), bx(15, 80, 290, 28, '例外：coffee・committee', C.gray, FILL.gray, 12), bx(15, 114, 290, 28, '-ing・-ed・-ly などは動かさない', C.green, FILL.green, 12), ...cap('強いのは 1 か所だけ', C.green)),
  },
], '語尾自身を強く読む型');

// ───────── koko_eigo_s012 発音問題の解き方 ─────────
const s012: DiagramFigure = show([
  {
    note: '発音問題は「下線部の発音が他の三つと異なるものを一つ選べ」という形が中心です。たとえば food・moon・room・book のうち、oo の音がちがうのはどれでしょう。',
    add: [head('oo の音がちがう語は？'), ...rowb(['food', 'moon', 'room', 'book'], 30, 40, C.blue, FILL.blue, 14), lb(160, 98, '三つが同じ音、一つだけちがう', 12, C.ink, 'middle', true), ...cap('答えを見つける問題')],
  },
  {
    note: '❓どこから考えればよいでしょう。→ 確実に知っている語から音を決めます。food・moon・room は長い [uː]（ウー）、book は短い [ʊ]（ウ）。だから答えは book です。',
    add: fresh(head('分かる語から音を決める'), ...rowb(['food\n[uː]', 'moon\n[uː]', 'room\n[uː]'], 28, 44, C.blue, FILL.blue, 13, 10, 230, 6), bx(240, 28, 70, 44, 'book\n[ʊ]', C.red, FILL.red, 13), lb(120, 94, '多数派（長い音）', 11, C.blue, 'middle'), lb(275, 94, '少数派 → 答え', 11, C.red, 'middle', true), ...cap('先に分かる語を分類する', C.blue)),
  },
  {
    note: '❓よく出る音は何でしょう。→ 実は数個のグループに限られます。まず [ʌ]（短い「ア」）。come・some・love・month・country・young は、つづりが o・ou でばらばらなのに音は同じです。',
    add: fresh(head('グループ① [ʌ] 短い「ア」'), ...rowb(['come', 'some', 'love'], 28, 34, C.red, FILL.red, 13, 10, 310, 8), ...rowb(['month', 'country', 'young'], 70, 34, C.red, FILL.red, 13, 10, 310, 8), lb(160, 126, 'つづりは o・ou・ove とばらばら、音は同じ', 11, C.gray, 'middle'), ...cap('つづりより音で覚える', C.red)),
  },
  {
    note: '次に oo のペア。[uː]（長い）は food・moon・school・room・soup。[ʊ]（短い）は book・good・look・foot・put・full・woman。could・would・should も [ʊ] です。',
    add: fresh(lb(10, 18, '[uː] 長い「ウー」', 12, C.blue, 'start', true), ...rowb(['food', 'moon', 'school', 'room', 'soup'], 26, 28, C.blue, FILL.blue, 11, 10, 310, 5), lb(10, 74, '[ʊ] 短い「ウ」', 12, C.red, 'start', true), ...rowb(['book', 'good', 'look', 'foot', 'put'], 82, 28, C.red, FILL.red, 11, 10, 310, 5), lb(160, 130, 'full・woman・could・would・should も [ʊ]', 11, C.gray, 'middle'), ...cap('oo でも 2 通りある', C.ink)),
  },
  {
    note: '[e] のグループは、つづりが広がります。head・bread・said・many・friend・ready・weather は ea・ai・a・ie ですが、どれも [e]。まとめて音で覚える価値が高いグループです。',
    add: fresh(head('グループ② [e]'), ...rowb(['head', 'bread', 'said', 'many'], 28, 32, C.red, FILL.red, 13), ...rowb(['friend', 'ready', 'weather'], 70, 32, C.red, FILL.red, 13, 30, 290, 8), lb(160, 124, 'つづり ea・ai・a・ie → 音は全部 [e]', 11, C.gray, 'middle'), ...cap('say の過去 said も [e]', C.red)),
  },
  {
    note: '❓ほかの母音グループは？ → [ɔː] は all・talk・water・daughter、[aɪ] は like・high・buy・eye・sky、[eɪ] は make・rain・eight・great、[ɜːr] は bird・girl・work・world・learn です。',
    add: fresh(head('ほかの頻出グループ'), bx(10, 28, 148, 44, '[ɔː]\nall・talk・water', C.blue, FILL.blue, 11), bx(162, 28, 148, 44, '[aɪ]\nlike・high・buy・eye', C.green, FILL.green, 11), bx(10, 78, 148, 44, '[eɪ]\nmake・rain・eight', C.purple, FILL.purple, 11), bx(162, 78, 148, 44, '[ɜːr]\nbird・girl・work', C.main, FILL.warm, 11), ...cap('代表語で音を覚える')),
  },
  {
    note: '❓なぜ出題されるのは「見た目が近い語」なのでしょう。→ 同じ語族なのに母音が変わる語は、もとの語の音を知っているぶん「同じだ」と決めつけやすいからです。woman [ʊ]→women [ɪ]、child [aɪ]→children [ɪ]、say→says・said [e]、break [eɪ]→breakfast [e]。',
    add: fresh(head('同じ語族でも音が変わる', C.red), ...[['woman [ʊ]', 'women [ɪ]'], ['child [aɪ]', 'children [ɪ]'], ['break [eɪ]', 'breakfast [e]'], ['say [eɪ]', 'said [e]']].flatMap(([a, b], i) => [bx(20, 26 + i * 28, 110, 22, a, C.blue, FILL.blue, 11), ar(134, 37 + i * 28, 176, 37 + i * 28, C.red), bx(180, 26 + i * 28, 120, 22, b, C.red, FILL.red, 11)]), ...cap('派生語は、もとの語と比べ直す', C.red)),
  },
  {
    note: '解く手順です。①下線部が -s や -ed なら、直前の音だけを見る。②母音なら、確実に分かる基本語から音を決める。③決めた音のグループに入るか調べる。④決まらなければ、多数派の三つを消して一つ残す。',
    add: fresh(...flow(['-s・-ed は\n直前の音', '基本語から\n音を決める', 'グループに\n分ける', '多数派を\n消す'], 24, { h: 62, size: 10, color: C.blue, fill: FILL.blue, gap: 14 }).flat(), ...cap('三つ同じ、一つちがう', C.blue)),
  },
  {
    note: 'まとめです。出る音は数個のグループ。つづりが同じで音がちがう組（good と food）と、つづりがちがって音が同じ組（head と said）の両方が出る。派生語は、もとの語と必ず比べ直す。',
    add: fresh(bx(15, 14, 290, 30, '出る音は数個のグループ', C.blue, FILL.blue, 12), bx(15, 52, 290, 30, 'good／food、head／said の両方', C.red, FILL.red, 12), bx(15, 90, 290, 30, '派生語は、もとの語と比べ直す', C.green, FILL.green, 12), ...cap('分かる語から決める', C.green)),
  },
], '発音問題：音のグループで解く');

// ───────── koko_eigo_s015 三人称単数現在形のつづり ─────────
const s015: DiagramFigure = show([
  {
    note: '主語が he や she になったとたん、動詞にだけ s が付きます。I play. は play のまま、He plays. は s が付く。この s は複数の s とは反対で、主語が「一人」のときに付くものです。',
    add: [bx(20, 24, 130, 40, 'I play.', C.blue, FILL.blue, 15), bx(170, 24, 130, 40, 'He plays.', C.red, FILL.red, 15), lb(85, 86, '主語が I', 11, C.gray, 'middle'), lb(235, 86, '主語が一人（三人称単数）', 11, C.red, 'middle', true), ...cap('主語が he・she・it なら s')],
  },
  {
    note: '❓三人称単数とは、だれのことでしょう。→ I と you 以外の「一人（一つ）」です。my brother・that boy・this book、それに everyone・everything もすべて三人称単数です。Everyone likes music. となります。',
    add: fresh(head('三人称単数 ＝ I と you 以外の一人（一つ）'), ...rowb(['he', 'she', 'it'], 26, 30, C.red, FILL.red, 14), ...rowb(['my brother', 'that boy', 'this book'], 66, 30, C.red, FILL.red, 11), ...rowb(['everyone', 'everything'], 106, 30, C.red, FILL.red, 12, 50, 270, 10), ...cap('everyone は「みんな」でも単数', C.red)),
  },
  {
    note: 'つくり方は四つです。①原則は -s：plays・likes・runs・works。',
    add: fresh(head('① 原則：そのまま s'), ...rowb(['play→plays', 'like→likes'], 30, 36, C.blue, FILL.blue, 13, 20, 300, 10), ...rowb(['run→runs', 'work→works'], 76, 36, C.blue, FILL.blue, 13, 20, 300, 10), ...cap('ふつうは s を足すだけ', C.blue)),
  },
  {
    note: '❓s・x・ch・sh・o で終わる語はどうでしょう。→ es を付けます。pass→passes、mix→mixes、teach→teaches、wash→washes、go→goes。発音は [ɪz] になる語が多く、-es と書く目印になります。',
    add: fresh(head('② s・x・ch・sh・o で終わる → es'), ...rowb(['pass→passes', 'mix→mixes'], 28, 32, C.red, FILL.red, 12, 20, 300, 10), ...rowb(['teach→teaches', 'wash→washes'], 68, 32, C.red, FILL.red, 12, 20, 300, 10), ...rowb(['go→goes', 'finish→finishes'], 108, 32, C.red, FILL.red, 12, 20, 300, 10), ...cap('es を付ける', C.red)),
  },
  {
    note: '③「子音字＋y」は y を i に変えて es。study→studies、try→tries、fly→flies。でも「母音字＋y」はそのまま。play→plays、say→says、buy→buys です。',
    add: fresh(head('③ y で終わる語'), lb(10, 36, '子音字＋y', 12, C.red, 'start', true), bx(90, 24, 100, 28, 'study', C.gray, FILL.gray, 12), ar(194, 38, 226, 38, C.red), bx(230, 24, 80, 28, 'studies', C.red, FILL.red, 12), lb(10, 84, '母音字＋y', 12, C.blue, 'start', true), bx(90, 72, 100, 28, 'play', C.gray, FILL.gray, 12), ar(194, 86, 226, 86, C.blue), bx(230, 72, 80, 28, 'plays', C.blue, FILL.blue, 12), lb(160, 124, 'try→tries、fly→flies、say→says、buy→buys', 11, C.gray, 'middle'), ...cap('y の前が子音字なら ies', C.red)),
  },
  {
    note: '④特別な形が四つあります。have→has（形が変わる）、do→does（発音は [dʌz]）、go→goes（発音は [goʊz]）、be→is。says だけは [sez] と特別に読みます。',
    add: fresh(head('④ 特別な形'), ...rowb(['have→has', 'do→does'], 28, 36, C.main, FILL.warm, 13, 20, 300, 10), ...rowb(['go→goes', 'be→is'], 74, 36, C.main, FILL.warm, 13, 20, 300, 10), lb(160, 126, 'does [dʌz]、goes [goʊz]、says [sez]', 11, C.gray, 'middle'), ...cap('この四つは暗記', C.main)),
  },
  {
    note: '❓疑問文や否定文では、s を残してよいのでしょうか。→ いけません。does がすでに「三人称単数・現在」を表しているので、動詞は原形に戻します。Does he play the guitar? が正しく、Does he plays は誤りです。',
    add: fresh(head('does があれば、動詞は原形'), bx(15, 28, 290, 30, 'Does he play the guitar?   ○', C.green, FILL.green, 12), bx(15, 66, 290, 30, 'Does he plays the guitar?   ×', C.red, FILL.red, 12), lb(160, 118, 'She doesn\'t like natto.（likes ではない）', 11, C.gray, 'middle'), ...cap('does・did・助動詞の後ろは原形', C.red)),
  },
  {
    note: '判断の手順です。①現在の文か（過去なら s は不要）。②主語は三人称単数か（I・you・複数なら不要）。③does・didn\'t・助動詞があるか（あれば原形）。この三つを順に見れば迷いません。',
    add: fresh(...flow(['現在の\n文か', '主語は\n三人称単数', 'does・助動詞\nなし?'], 26, { h: 62, size: 11, color: C.blue, fill: FILL.blue }).flat(), lb(160, 112, 'ぜんぶ YES のときだけ s を付ける', 12, C.ink, 'middle', true), ...cap('三つ確かめる', C.blue)),
  },
  {
    note: '❓主語が長いときの落とし穴は？ → 直前の名詞につられることです。The boy with two dogs runs fast. の主語は The boy（一人）なので runs。dogs（複数）に引かれて run としてはいけません。',
    add: fresh(head('主語はどれ？'), bx(10, 30, 70, 32, 'The boy', C.red, FILL.red, 13), bx(84, 30, 120, 32, 'with two dogs', C.gray, FILL.gray, 12), bx(208, 30, 100, 32, 'runs fast.', C.red, FILL.red, 13), lb(45, 80, '主語（一人）', 11, C.red, 'middle', true), lb(144, 80, 'ここにつられない', 11, C.gray, 'middle'), ...cap('主語の中心の名詞で決める', C.red)),
  },
  {
    note: 'まとめです。三単現の s は、原則 s、s・x・ch・sh・o は es、子音字＋y は ies、特別な形は has・does・goes。疑問文・否定文・助動詞のあとは原形に戻す。',
    add: fresh(bx(15, 12, 290, 28, 's／es／ies を付け分ける', C.blue, FILL.blue, 12), bx(15, 46, 290, 28, '特別：has・does・goes', C.main, FILL.warm, 12), bx(15, 80, 290, 28, 'does・did・助動詞の後ろは原形', C.red, FILL.red, 12), bx(15, 114, 290, 28, '長い主語は、中心の名詞を見る', C.green, FILL.green, 12), ...cap('s を付けるのは、現在・一人のとき', C.green)),
  },
], '三人称単数現在形のつづり');

// ───────── koko_eigo_s016 -ing と -ed のつづり ─────────
const lets = (word: string, kinds: string, x0: number, y: number, w = 40): E[] =>
  [...word].map((ch, i) => bx(x0 + i * (w + 6), y, w, w, ch, kinds[i] === 'v' ? C.red : C.blue, kinds[i] === 'v' ? FILL.red : FILL.blue, 18));
const s016: DiagramFigure = show([
  {
    note: 'run は running と n を重ねるのに、visit は visiting のまま。❓なぜ片方だけ重ねるのでしょう。ここには「短い母音」と「アクセントの位置」という条件があります。',
    add: [bx(15, 24, 140, 50, 'run → running\nn を重ねる', C.red, FILL.red, 13), bx(165, 24, 140, 50, 'visit → visiting\n重ねない', C.blue, FILL.blue, 13), ...cap('なぜ片方だけ重ねる？')],
  },
  {
    note: 'つくり方は三つです。①そのまま付ける（playing・played）。②語尾の e を取って付ける。③子音字を重ねて付ける。',
    add: fresh(head('-ing の三つのつくり方'), bx(15, 26, 290, 28, '① そのまま　play → playing', C.blue, FILL.blue, 12), bx(15, 60, 290, 28, '② e を取る　make → making', C.green, FILL.green, 12), bx(15, 94, 290, 28, '③ 重ねる　　run → running', C.red, FILL.red, 12), ...cap('条件で使い分ける')),
  },
  {
    note: '②は語尾が e の語です。make→making、come→coming、write→writing、use→using。-ed のほうは e が残るので、d を足すだけです（used・lived・danced）。',
    add: fresh(head('② 語尾の e を取って ing'), ...rowb(['make→making', 'come→coming'], 28, 32, C.green, FILL.green, 12, 20, 300, 10), ...rowb(['write→writing', 'use→using'], 68, 32, C.green, FILL.green, 12, 20, 300, 10), lb(160, 126, '-ed は e が残る：use→used、live→lived', 11, C.gray, 'middle'), ...cap('e を取って ing', C.green)),
  },
  {
    note: '❓③で重ねる条件は何でしょう。→ 「子音字・母音字・子音字」で終わることです。run は r・u・n。最後が子音字、その前が母音字1つ、その前が子音字。三つそろって初めて重ねます。',
    add: fresh(head('run ＝ 子音・母音・子音'), ...lets('run', 'cvc', 90, 28), lb(110, 84, '子音', 11, C.blue, 'middle', true), lb(160, 84, '母音', 11, C.red, 'middle', true), lb(210, 84, '子音', 11, C.blue, 'middle', true), lb(160, 112, '→ 最後の n を重ねて running', 12, C.red, 'middle', true), ...cap('子音・母音・子音なら重ねる', C.red)),
  },
  {
    note: 'rain は母音字が二つ（ai）なので raining。help は最後が子音字二つ（lp）なので helping。形がちがうので重ねません。',
    add: fresh(head('重ねない形'), ...lets('rain', 'cvvc', 14, 28, 30), lb(83, 86, '母音字が 2 つ → raining', 11, C.ink, 'middle', true), ...lets('help', 'cvcc', 176, 28, 28), lb(241, 86, '子音字が 2 つ → helping', 11, C.ink, 'middle', true), ...cap('形が合わなければ、そのまま ing', C.blue)),
  },
  {
    note: '❓なぜ子音字を重ねるのでしょう。→ 母音を短いままに保つためです。stop に ing をそのまま付けて stoping と書くと、マジック e と同じ形に見えて、o を長く読んでしまいます。p を重ねると、o は短いままだと伝わります。',
    add: fresh(head('重ねるのは、母音を短く保つため'), bx(20, 28, 130, 40, 'stoping', C.red, FILL.red, 16), lb(85, 84, 'o が長く読めてしまう', 11, C.red, 'middle', true), bx(170, 28, 130, 40, 'stopping', C.green, FILL.green, 16), lb(235, 84, 'o は短いまま', 11, C.green, 'middle', true), ...cap('つづりの規則には理由がある', C.green)),
  },
  {
    note: '❓2音節以上の語は、どう決めるのでしょう。→ アクセント（強く読む所）の位置で決まります。後ろにあれば重ねる（be-GIN→beginning、for-GET→forgetting）。前にあれば重ねません（VIS-it→visiting、OP-en→opening）。',
    add: fresh(lb(10, 18, 'アクセントが後ろ → 重ねる', 11, C.red, 'start', true), ...syl(['be', 'GIN'], 1, 20, 10, 150, 26), lb(160, 52, 'beginning', 12, C.red, 'start', true), lb(10, 84, 'アクセントが前 → 重ねない', 11, C.blue, 'start', true), ...syl(['VIS', 'it'], 0, 86, 10, 150, 26), lb(10, 124, 'visiting と書く（visitting ではない）', 11, C.blue, 'start', true), ...cap('強く読む音節の位置を見る', C.red)),
  },
  {
    note: '例外もあります。語尾が ee の語は e を取りません（see→seeing、agree→agreeing）。語尾が ie の語は ie を y に変えます（lie→lying、die→dying、tie→tying）。',
    add: fresh(head('-ing の例外'), ...rowb(['see→seeing', 'agree→agreeing'], 28, 32, C.main, FILL.warm, 12, 20, 300, 10), ...rowb(['lie→lying', 'die→dying', 'tie→tying'], 74, 32, C.main, FILL.warm, 12, 20, 300, 8), ...cap('ee はそのまま、ie は y', C.main)),
  },
  {
    note: '見分け方です。①語尾が e か。②子音・母音・子音か（2音節以上はアクセントが後ろか）。③ee や ie の例外ではないか。この順に確かめます。',
    add: fresh(...flow(['語尾が e\nなら取る', '子音・母音・\n子音なら重ねる', 'アクセント\nは後ろか', 'ee・ie の\n例外'], 24, { h: 66, size: 10, color: C.blue, fill: FILL.blue, gap: 12 }).flat(), ...cap('-ed も同じ規則（stopped）', C.blue)),
  },
  {
    note: 'まとめです。e で終われば e を取る。子音・母音・子音で終わり、アクセントが後ろなら重ねる。重ねるのは母音を短く保つため。ee はそのまま、ie は y に変える。',
    add: fresh(bx(15, 12, 290, 28, 'e で終わる → e を取る', C.green, FILL.green, 12), bx(15, 46, 290, 28, '子音・母音・子音（後ろ強）→ 重ねる', C.red, FILL.red, 12), bx(15, 80, 290, 28, '重ねる理由：母音を短く保つ', C.blue, FILL.blue, 12), bx(15, 114, 290, 28, 'ee はそのまま、ie は y', C.main, FILL.warm, 12), ...cap('-ed のつづりも同じ', C.green)),
  },
], '-ing と -ed のつづりの決まり');

// ───────── koko_eigo_01_tense 時制の形がこう決まるわけ ─────────
const timeline = (y = 62): E[] => [ln(20, y, 300, y, C.gray), ar(290, y, 304, y, C.gray), lb(300, y + 14, '時間', 10, C.gray, 'end'), ci(240, y, 7, undefined, C.red, FILL.red), lb(240, y + 18, '今', 11, C.red, 'middle', true)];
const e01: DiagramFigure = show([
  {
    note: '時制（じせい）の形には、すべて理由があります。この図解では三つの「なぜ」を解きます。①なぜ when・if の節は未来でも現在形か。②なぜ現在完了は yesterday と使えないか。③なぜ must not と don\'t have to は正反対か。',
    add: [head('三つの「なぜ」'), bx(15, 28, 290, 28, '① なぜ if の節は、未来でも現在形？', C.blue, FILL.blue, 12), bx(15, 62, 290, 28, '② なぜ現在完了は yesterday と使えない？', C.green, FILL.green, 12), bx(15, 96, 290, 28, '③ なぜ must not と don\'t have to は逆？', C.red, FILL.red, 12), ...cap('理由が分かれば暗記が減る')],
  },
  {
    note: '❓まず、過去形は何を表す形でしょう。→ 「今と切れた過去の一点」です。I visited Kyoto last year. は、去年の一点に起きたことで、今とはつながっていません。',
    add: fresh(head('過去形 ＝ 今と切れた一点'), ...timeline(), ci(90, 62, 7, undefined, C.blue, FILL.blue), lb(90, 44, 'last year', 11, C.blue, 'middle', true), ln(98, 62, 232, 62, C.gray, true), lb(165, 86, '切れている', 11, C.gray, 'middle'), bx(40, 108, 240, 28, 'I visited Kyoto last year.', C.blue, FILL.blue, 12), ...cap('過去形：今とは関係なし', C.blue)),
  },
  {
    note: '❓では現在完了は？ → 「過去の出来事が今とつながっている」ことを表す形です。have lived here for 5 years は、5年前から今までずっとつながっています。',
    add: fresh(head('現在完了 ＝ 今とつながる'), ...timeline(), ci(110, 62, 7, undefined, C.green, FILL.green), ln(117, 62, 233, 62, C.green, false, 5), lb(110, 44, '5年前', 11, C.green, 'middle', true), lb(175, 86, 'つながっている', 11, C.green, 'middle', true), bx(30, 108, 260, 28, 'I have lived here for 5 years.', C.green, FILL.green, 12), ...cap('現在完了：今につながる', C.green)),
  },
  {
    note: '❓だから yesterday・last year・in 2020 のような「過去の一点を指す語」は、過去形とだけ組みます。現在完了とは組めません。× I have visited Kyoto last year. ○ I visited Kyoto last year.',
    add: fresh(head('過去の一点を指す語は、過去形と'), bx(15, 28, 290, 30, '× I have visited Kyoto last year.', C.red, FILL.red, 12), bx(15, 66, 290, 30, '○ I visited Kyoto last year.', C.green, FILL.green, 12), lb(160, 118, 'last year は「切れた一点」だから', 12, C.ink, 'middle', true), ...cap('一点を指す語 ＝ 過去形', C.green)),
  },
  {
    note: '❓have been to と have gone to のちがいも、同じ理由です。「今どうなっているか」を表すのが現在完了だからです。She has been to Paris. は今ここにいる。She has gone to Paris. は今はここにいません。',
    add: fresh(head('今どこにいるか？'), bx(15, 28, 140, 44, 'has been to Paris\n行ったことがある', C.green, FILL.green, 10), bx(165, 28, 140, 44, 'has gone to Paris\n行ってしまった', C.red, FILL.red, 10), lb(85, 92, '今はここにいる', 12, C.green, 'middle', true), lb(235, 92, '今はここにいない', 12, C.red, 'middle', true), ...cap('現在完了は、今の状態を表す')),
  },
  {
    note: '❓次に、なぜ when・if・after・before・until が導く節は、未来でも現在形なのでしょう。If it rains tomorrow, I will stay home. では、予測しているのは主節の will です。条件の側にまで will を付けると、予測の意味が重なります。',
    add: fresh(head('will は 1 回あれば足りる'), bx(15, 28, 130, 36, 'If it rains\ntomorrow,', C.blue, FILL.blue, 12), bx(165, 28, 140, 36, 'I will stay\nhome.', C.red, FILL.red, 12), lb(80, 82, '条件を置くだけ → 現在形', 11, C.blue, 'middle', true), lb(235, 82, '予測は ここで → will', 11, C.red, 'middle', true), lb(160, 112, '× If it will rain …', 12, C.red, 'middle', true), ...cap('条件の節には will を付けない', C.blue)),
  },
  {
    note: '❓最後に、must not と don\'t have to はなぜ正反対なのでしょう。→ not が打ち消す相手がちがうからです。must not は「するな」（動作を打ち消す＝禁止）。don\'t have to は have to（義務）を打ち消すので「しなくてよい」（不要）です。',
    add: fresh(head('not が何を打ち消すか'), bx(15, 26, 290, 40, 'You must [ not enter ]\n→ 入ってはいけない（禁止）', C.red, FILL.red, 11), bx(15, 74, 290, 40, 'You [ don\'t have to ] enter\n→ 入らなくてもよい（不要）', C.blue, FILL.blue, 11), ...cap('正反対の意味になる', C.red)),
  },
  {
    note: '助動詞＋have＋過去分詞は、「過去のことを今推測する」形です。must have been（〜だったに違いない）、should have studied（〜すべきだったのに）、can\'t have said（〜したはずがない）。助動詞の意味を過去に向けたものです。',
    add: fresh(head('助動詞 ＋ have ＋ 過去分詞'), bx(15, 26, 290, 28, 'must have been 〜　〜だったに違いない', C.blue, FILL.blue, 11), bx(15, 60, 290, 28, 'should have studied　勉強すべきだったのに', C.green, FILL.green, 11), bx(15, 94, 290, 28, 'can\'t have said　言ったはずがない', C.red, FILL.red, 11), ...cap('過去への推測・後悔', C.ink)),
  },
  {
    note: '確かめのしかたです。①時を表す語で時制を決める（yesterday は過去形、just・already・for・since は現在完了、when・if の節は現在形）。②助動詞や did のあとは原形、have のあとは過去分詞。③must not と don\'t have to を訳で読み返す。',
    add: fresh(...flow(['時を表す語で\n時制を決める', '原形か\n過去分詞か', '訳で読み\n返す'], 26, { h: 62, size: 11, color: C.blue, fill: FILL.blue }).flat(), lb(160, 112, '× can plays　× Did you played　× have saw', 11, C.red, 'middle', true), ...cap('3 つの確かめ', C.blue)),
  },
  {
    note: 'まとめです。時制は「今とのつながり」で決まる。過去形は切れた一点、現在完了は今につながる。if・when の節は条件を置くだけなので現在形。not が打ち消す相手で、must not と don\'t have to を分ける。',
    add: fresh(bx(15, 14, 290, 30, '過去形＝切れた一点、現在完了＝つながる', C.blue, FILL.blue, 12), bx(15, 52, 290, 30, 'if・when の節＝条件を置くだけ → 現在形', C.green, FILL.green, 12), bx(15, 90, 290, 30, 'not の打ち消す相手で意味が逆になる', C.red, FILL.red, 12), ...cap('理由から覚える', C.green)),
  },
], '時制の形が決まるわけ');

// ───────── koko_eigo_02_comparison 比較・関係詞のなぜ ─────────
const bar = (x: number, h: number, name: string, color: string, fill: string, w = 40, base = 124): E[] => [bx(x, base - h, w, h, undefined, color, fill), lb(x + w / 2, base + 12, name, 10, C.ink, 'middle', true)];
const e02: DiagramFigure = show([
  {
    note: '比較の三つの形は「何と比べるか」のちがいです。原級（as ～ as）は同じ程度、比較級（-er than）は二つの差、最上級（the -est）は三つ以上の中の一番です。',
    add: [head('比べ方は 3 つ'), bx(10, 28, 96, 56, '原級\nas tall as\n同じ程度', C.blue, FILL.blue, 11), bx(112, 28, 96, 56, '比較級\ntaller than\n二つの差', C.green, FILL.green, 11), bx(214, 28, 96, 56, '最上級\nthe tallest\n三つ以上で一番', C.red, FILL.red, 11), ...cap('何と比べるかで形が決まる')],
  },
  {
    note: '❓最上級を、別の言い方で表せるでしょうか。→ 「富士山は日本で一番高い」は、比べ方を変えれば同じ内容を言えます。まず、富士山と他の山の高さを並べてみましょう。富士山だけが飛びぬけて高いとします。',
    add: fresh(head('Mt. Fuji はほかの山より高い'), ...bar(50, 84, 'Mt. Fuji', C.red, FILL.red, 50), ...bar(125, 56, 'A', C.gray, FILL.gray), ...bar(190, 44, 'B', C.gray, FILL.gray), ...bar(255, 34, 'C', C.gray, FILL.gray), ...cap('富士山が一番高い')),
  },
  {
    note: '言いかえ①：比較級を使います。Mt. Fuji is higher than any other mountain. 他のどの山よりも高い、という意味です。言いかえ②：No other mountain is as high as Mt. Fuji. 他のどの山も富士山ほど高くない。三つの文は同じ内容です。',
    add: fresh(head('同じ内容の 3 つの言い方'), bx(10, 24, 300, 28, 'Mt. Fuji is the highest mountain.', C.red, FILL.red, 11), bx(10, 58, 300, 28, 'Mt. Fuji is higher than any other mountain.', C.green, FILL.green, 11), bx(10, 92, 300, 28, 'No other mountain is as high as Mt. Fuji.', C.blue, FILL.blue, 11), ...cap('比べ方を変えると言いかえられる', C.green)),
  },
  {
    note: '❓なぜ any other や no other のあとは単数名詞なのでしょう。→ 「他の山を一つ一つ取り出して、富士山と比べている」からです。A と比べ、B と比べ、C と比べる。どれと比べても富士山が上、という意味なので mountain は単数です。',
    add: fresh(head('一つ一つと比べている'), ...bar(40, 84, 'Fuji', C.red, FILL.red, 44), ...bar(120, 56, 'A', C.gray, FILL.gray), ...bar(180, 44, 'B', C.gray, FILL.gray), ...bar(240, 34, 'C', C.gray, FILL.gray), ar(70, 36, 135, 66, C.red), ar(70, 36, 195, 80, C.red), ar(70, 36, 255, 90, C.red), ...cap('any other mountain（単数）', C.red)),
  },
  {
    note: '❓not as ～ as は、どう言いかえられるのでしょう。→ 「同じ程度に達していない」という意味です。Ken is not as tall as Mike. は、マイクのほうが高いので、Mike is taller than Ken. と言いかえられます。as のあとに来るのが「上の人」です。',
    add: fresh(head('not as ～ as ＝ 達していない'), ...bar(80, 60, 'Ken', C.blue, FILL.blue), ...bar(200, 82, 'Mike', C.red, FILL.red), ln(110, 62, 240, 62, C.gray, true), lb(160, 52, '届かない', 10, C.gray, 'middle'), ...cap('Mike is taller than Ken.', C.red)),
  },
  {
    note: '次は関係代名詞です。❓なぜ who・whom・whose のように形が分かれるのでしょう。→ 関係代名詞は、もとの文で主語・目的語・所有をしていた名詞の「代わり」だからです。もとの文での働きによって、形が決まります。',
    add: fresh(head('もとの文での働きで形が決まる'), bx(10, 26, 300, 28, 'The boy is Ken.　+　He is playing soccer.', C.gray, FILL.gray, 11), ar(160, 56, 160, 76, C.main), lb(190, 66, 'He → who', 11, C.main, 'start', true), bx(10, 80, 300, 28, 'The boy who is playing soccer is Ken.', C.blue, FILL.blue, 11), ...cap('名詞の代わりになる', C.blue)),
  },
  {
    note: '主語の代わりは who・which（主格）、目的語の代わりは who(m)・which・that（目的格）、「～の」の代わりは whose（所有格）。目的格は、節の中に主語が別にあるので、省略できます。The book (which) I bought is interesting.',
    add: fresh(head('3 つの格'), bx(10, 26, 300, 30, '主格　who／which　The boy who is …', C.blue, FILL.blue, 11), bx(10, 62, 300, 30, '目的格　whom／which／that（省略可）', C.green, FILL.green, 11), bx(10, 98, 300, 30, '所有格　whose　a girl whose father …', C.red, FILL.red, 11), ...cap('目的格は省略できる', C.green)),
  },
  {
    note: '❓なぜ先行詞によっては that しか使えないのでしょう。→ 先行詞が最上級・序数・all／every／no・something などのとき、先行詞がすでに「唯一・全部・不特定」と強く限定されています。限定を受ける語の that が合います。',
    add: fresh(head('that だけを使う先行詞', C.red), ...rowb(['最上級・序数', 'all・every・no', 'something\nanything'], 26, 44, C.red, FILL.red, 11), lb(160, 92, 'This is the best movie that I have ever seen.', 11, C.ink, 'middle', true), lb(160, 114, 'Everything that he says is true.', 11, C.ink, 'middle', true), ...cap('強く限定された先行詞 → that', C.red)),
  },
  {
    note: '❓コンマ付きの非制限用法（、which）で that が使えないのはなぜ? → that は限定専用の語で、補足説明には向かないからです。He passed the exam, which made his mother happy. が正しく、, that は使えません。',
    add: fresh(head('コンマあり ＝ 補足説明'), bx(10, 28, 300, 30, 'He passed the exam, which made his mother happy.', C.green, FILL.green, 11), bx(10, 70, 300, 30, '× …the exam, that made his mother happy.', C.red, FILL.red, 11), lb(160, 122, 'that は限定専用。補足には which／who', 11, C.ink, 'middle', true), ...cap('コンマの後ろに that は使えない', C.red)),
  },
  {
    note: '❓what はなぜ先行詞を持たないのでしょう。→ what 自体が「～こと・もの」という先行詞を中に含んでいるからです。What he said surprised me. は The thing that he said … と同じ。× the thing what は誤りです。',
    add: fresh(head('what ＝ the thing that'), bx(10, 28, 300, 30, 'What he said surprised me.', C.green, FILL.green, 12), lb(160, 76, '＝', 14, C.main, 'middle', true), bx(10, 88, 300, 30, 'The thing that he said surprised me.', C.blue, FILL.blue, 12), ...cap('× the thing what', C.red)),
  },
  {
    note: '関係詞を選ぶ手順です。①先行詞の種類（人か物か、最上級か）を見る。②あとの文が完全か不完全かを見る。完全な文なら関係副詞（where・when・why・how）、不完全なら関係代名詞。the way how は誤りです。',
    add: fresh(...flow(['先行詞は\n何か', 'あとの文は\n完全？不完全？', '完全→副詞\n不完全→代名詞'], 26, { h: 66, size: 10, color: C.blue, fill: FILL.blue }).flat(), lb(160, 118, '最上級・序数・all などの先行詞なら that', 11, C.ink, 'middle', true), ...cap('先行詞→あとの文の順に見る', C.blue)),
  },
  {
    note: 'まとめです。比較は何と比べるかで三つの形に分かれ、最上級は「他のどの一つも及ばない」と言いかえられる。関係代名詞は、もとの文での名詞の働きで格が決まる。強く限定された先行詞は that、補足（コンマ）は which・who。',
    add: fresh(bx(15, 14, 290, 30, '最上級 ＝ 他のどれにも負けない', C.red, FILL.red, 12), bx(15, 52, 290, 30, '関係代名詞 ＝ もとの名詞の代わり', C.blue, FILL.blue, 12), bx(15, 90, 290, 30, '限定が強ければ that、補足なら which', C.green, FILL.green, 12), ...cap('理由から覚える', C.green)),
  },
], '比較と関係詞の「なぜ」');

// ───────── koko_eigo_03_infinitive 分詞構文 ─────────
/** 英語のことばを 1 語ずつ箱にして横に並べる。x と幅を返すので、あとで打ち消し線を引ける。 */
const chips = (words: string[], y: number, color: string, fill: string, x0 = 6, size = 10, h = 26) => {
  const ws = words.map((w) => Math.max(20, w.length * 5.6 + 10));
  const xs: number[] = [];
  let x = x0;
  ws.forEach((w) => { xs.push(x); x += w + 5; });
  const els: E[] = words.map((w, i) => bx(xs[i], y, ws[i], h, w, color, fill, size));
  return { els, xs, ws };
};
const strike = (c: { xs: number[]; ws: number[] }, i: number, y: number, h = 26): E => ln(c.xs[i] - 1, y + h / 2, c.xs[i] + c.ws[i] + 1, y + h / 2, C.red, false, 3);
const r1 = chips(['Because', 'I', 'was', 'tired,', 'I', 'went to bed early.'], 30, C.blue, FILL.blue);
const r2 = chips(['Being', 'tired,', 'I', 'went to bed early.'], 92, C.green, FILL.green);
const e03: DiagramFigure = show([
  {
    note: '分詞構文（ぶんしこうぶん）は、「Because I was tired」のような副詞節（接続詞を含む節）を、分詞を使って短くした表現です。主に書き言葉で使います。',
    add: [head('接続詞のある節を、短くする'), ...r1.els, ...cap('長い文を、すっきり短くする')],
  },
  {
    note: 'ステップ①：接続詞を省略します。Because を消します。理由を表す接続詞がなくなっても、文の意味から「疲れていたので」と読み取れます。',
    add: [strike(r1, 0, 30), ...band(150, lb(160, 190, '① 接続詞 Because を消す', 12, C.red, 'middle', true))],
  },
  {
    note: '❓ステップ②：なぜ主語 I を省略できるのでしょう。→ 副詞節の主語（I）が、主節の主語（I）と同じだからです。同じ人のことだと分かるので、一方を省いてよいのです。',
    add: [strike(r1, 1, 30), ar(r1.xs[1] + 10, 58, r1.xs[4] + 10, 58, C.red, true), lb(160, 76, '同じ I だから、前の I は省ける', 11, C.red, 'middle', true), ...band(150, lb(160, 190, '② 主節と同じ主語は省く', 12, C.red, 'middle', true))],
  },
  {
    note: 'ステップ③：動詞を -ing 形にします。was は be 動詞なので Being になります。Being tired, I went to bed early. 「疲れていたので、早く寝た」の意味です。',
    add: [cover(0, 46, 320, 104), ...r2.els, ar(r1.xs[2] + 14, 58, r2.xs[0] + 22, 90, C.green), lb(250, 78, 'was → Being', 11, C.green, 'middle', true), ...band(150, lb(160, 190, '③ 動詞を -ing 形にする', 12, C.green, 'middle', true))],
  },
  {
    note: '❓Being は必ず必要でしょうか。→ いいえ。Being は省略できます。すると Tired, I went to bed early. になります。Being は「～であること」という意味が薄い語なので、省いても意味は変わりません。',
    add: [strike(r2, 0, 92), ...band(150, lb(160, 175, 'Tired, I went to bed early.', 14, C.green, 'middle', true), lb(160, 205, 'Being は省いてもよい', 11, C.gray, 'middle'))],
  },
  {
    note: '❓分詞構文は、どんな意味になるのでしょう。→ 接続詞を消してしまったので、意味は文脈で決まります。時（～のとき）、条件（もし～なら）、理由（～なので）の三つが代表です。',
    add: fresh(head('意味は文脈で決まる'), bx(10, 26, 300, 30, 'Walking along the street, I met Tom.  → 時', C.blue, FILL.blue, 10), bx(10, 62, 300, 30, 'Turning to the right, you will see it.  → 条件', C.green, FILL.green, 10), bx(10, 98, 300, 30, 'Being sick, she didn\'t go to school.  → 理由', C.red, FILL.red, 10), ...cap('when／if／because のどれかを文脈で選ぶ')),
  },
  {
    note: '否定のときは、Not を -ing の前に置きます。たとえば「答えを知らなかったので、彼は黙っていた」は、Not knowing the answer, he kept silent. となります。',
    add: fresh(head('否定は Not を -ing の前に'), bx(10, 30, 300, 30, 'Not knowing the answer, he kept silent.', C.red, FILL.red, 11), lb(160, 82, '× Knowing not the answer, …', 12, C.red, 'middle', true), ...cap('Not は -ing の前', C.red)),
  },
  {
    note: '❓出来事の順番がちがうときは？ → 主節の動詞より前に起きたことは、Having＋過去分詞で表します。Having finished my homework, I watched TV. 先に宿題を終え、そのあとテレビを見ました。',
    add: fresh(head('先に起きたこと ＝ Having ＋ 過去分詞'), ln(30, 62, 290, 62, C.gray), ci(90, 62, 6, undefined, C.blue, FILL.blue), ci(230, 62, 6, undefined, C.red, FILL.red), lb(90, 44, 'finished', 11, C.blue, 'middle', true), lb(230, 44, 'watched', 11, C.red, 'middle', true), ar(100, 62, 220, 62, C.main), lb(160, 82, '先', 11, C.gray, 'middle'), bx(10, 100, 300, 30, 'Having finished my homework, I watched TV.', C.blue, FILL.blue, 10), ...cap('主節より前の出来事')),
  },
  {
    note: '❓受け身の意味のときは? → 分詞を過去分詞にします。Seen from the top of the mountain, the city looked beautiful.（山の頂上から見ると、その街は美しく見えた）。街は「見られる」側なので Seen です。× Seeing ではありません。',
    add: fresh(head('受け身なら、過去分詞から始める'), bx(10, 28, 300, 30, 'Seen from the top of the mountain, the city looked beautiful.', C.green, FILL.green, 9), lb(160, 82, 'the city は「見られる」側 → Seen', 12, C.green, 'middle', true), lb(160, 108, '× Seeing from the top …', 12, C.red, 'middle', true), ...cap('する側なら -ing、される側なら Seen', C.green)),
  },
  {
    note: 'まとめです。分詞構文は、①接続詞を消す ②同じ主語を消す ③動詞を -ing にする、の順で作る。意味は文脈で決める。否定は Not を前に、先の出来事は Having＋過去分詞、受け身は過去分詞。',
    add: fresh(bx(15, 12, 290, 28, '① 接続詞 ② 同じ主語 を消す ③ -ing にする', C.blue, FILL.blue, 11), bx(15, 46, 290, 28, '意味は文脈（時・条件・理由）', C.green, FILL.green, 12), bx(15, 80, 290, 28, '否定：Not ＋ -ing、先の出来事：Having ＋ 過去分詞', C.red, FILL.red, 10), bx(15, 114, 290, 28, '受け身：Seen の形', C.main, FILL.warm, 12), ...cap('4 ステップで作る', C.green)),
  },
], '分詞構文の作り方');

// ───────── koko_eigo_04_reading スキミングとスキャニング ─────────
const para = (x: number, y: number, w: number, hi = true): E[] => [0, 1, 2, 3, 4].map((i) => bx(x, y + i * 12, i === 4 ? w * 0.6 : w, 7, undefined, hi && (i === 0 || i === 4) ? C.red : C.gray, hi && (i === 0 || i === 4) ? FILL.red : FILL.gray));
const e04: DiagramFigure = show([
  {
    note: '長文は、いきなり頭から読み始めません。①スキミングで全体の「地図」をつくる。②設問を先に見る。③スキャニングで答えの根拠を探す。この順番で読むと、時間内に正確に答えられます。',
    add: [head('長文を読む順番'), ...flow(['① スキミング\n全体をつかむ', '② 設問を\n先読み', '③ スキャニング\n根拠を探す'], 28, { h: 62, size: 11, color: C.blue, fill: FILL.blue }).flat(), ...cap('どれか一つではなく、組み合わせる')],
  },
  {
    note: 'スキミングは、文章全体をすばやく読んで「テーマと流れ」をつかむ技術です。タイトル・小見出し、各段落の第1文、各段落の最終文を読みます。',
    add: fresh(head('スキミング：段落の最初と最後を読む'), ...para(12, 30, 90), ...para(116, 30, 90), ...para(220, 30, 90), lb(57, 98, '段落 1', 10, C.gray, 'middle'), lb(161, 98, '段落 2', 10, C.gray, 'middle'), lb(265, 98, '段落 3', 10, C.gray, 'middle'), lb(160, 122, '赤い所（第1文・最終文）を読む', 12, C.red, 'middle', true), ...cap('題名・小見出し → 各段落の最初と最後', C.red)),
  },
  {
    note: '❓なぜ段落の最初と最後を読むのでしょう。→ 要点が詰まっているからです。最初の文は話題（トピックセンテンス）、最後の文はまとめや話の転換になることが多く、真ん中の文は根拠・例・説明であることが多いからです。',
    add: fresh(head('段落の中身'), bx(20, 26, 280, 24, '最初の文 ＝ 話題（何の話か）', C.red, FILL.red, 12), bx(20, 56, 280, 24, '真ん中 ＝ 根拠・例・説明', C.gray, FILL.gray, 12), bx(20, 86, 280, 24, '最後の文 ＝ まとめ・転換', C.red, FILL.red, 12), ...cap('要点は最初と最後に集まる', C.red)),
  },
  {
    note: 'スキャニングは、必要な情報（数字・固有名詞・年代）をすばやく探し出す技術です。「いつ・どこで・だれが・どのくらい」を聞かれたときに使います。大文字で始まる語や数字は目立つので見つけやすいです。',
    add: fresh(head('スキャニング：キーワードだけを探す'), bx(20, 26, 280, 26, 'Why did Tom leave the room?', C.blue, FILL.blue, 12), lb(160, 66, '↓ Tom と left だけを探す', 11, C.blue, 'middle', true), bx(20, 78, 280, 8, undefined, C.gray, FILL.gray), bx(20, 92, 280, 20, 'Tom left the room because …', C.red, FILL.red, 11), bx(20, 118, 200, 8, undefined, C.gray, FILL.gray), ...cap('そこだけを重点的に読む', C.red)),
  },
  {
    note: '❓なぜ設問を先に読むのでしょう。→ 何が問われているかが分かってから読むと、答えの根拠になる場所を重点的に読めるからです。Why did Tom leave the room? と分かっていれば、Tom left the room because … の部分が目に飛びこんできます。',
    add: fresh(head('設問が先 → 読む場所が絞れる'), bx(15, 28, 130, 36, '設問を知らずに読む', C.gray, FILL.gray, 11), bx(175, 28, 130, 36, '設問を知って読む', C.green, FILL.green, 11), ...para(30, 78, 100, false), ...para(190, 78, 100, true), lb(80, 142, '全部を同じ力で読む', 10, C.gray, 'middle'), lb(240, 142, '根拠の所を重点的に', 10, C.green, 'middle', true), ...band(150, lb(160, 190, '時間を大きく節約できる', 12, C.green, 'middle', true))),
  },
  {
    note: '❓設問の選択肢も全部読んでおくべきでしょうか。→ 読みすぎは時間の無駄になることがあります。設問のキーワードだけを抜き出し、「何が問われているか」だけをつかんでおけば十分です。',
    add: fresh(head('先に読むのは「キーワード」だけ'), bx(20, 26, 280, 26, 'Why did Tom leave the room?', C.blue, FILL.blue, 12), ar(160, 54, 160, 74, C.main), bx(60, 78, 200, 28, 'Tom ／ leave ／ Why（理由）', C.green, FILL.green, 12), lb(160, 126, '選択肢は、本文を読んでから確かめる', 11, C.gray, 'middle'), ...cap('キーワードを 2 つ 3 つ覚える', C.green)),
  },
  {
    note: '手順のまとめです。まずスキミングで全体をつかむ。次に設問を確認してキーワードを決める。最後にスキャニングで根拠の箇所を探し、そこを精読します。どれか一つだけではなく、組み合わせて使います。',
    add: fresh(...flow(['スキミング', '設問の\nキーワード', 'スキャニング', '根拠を\n精読'], 26, { h: 66, size: 11, color: C.blue, fill: FILL.blue, gap: 12 }).flat(), lb(160, 120, '全体 → 設問 → 根拠', 12, C.ink, 'middle', true), ...cap('地図を持ってから探しに行く', C.blue)),
  },
  {
    note: 'まとめです。スキミングは段落の最初と最後で全体をつかむ。スキャニングはキーワードで根拠を探す。設問を先に読むと、読む場所が絞れる。組み合わせて使うことが大切です。',
    add: fresh(bx(15, 14, 290, 30, 'スキミング ＝ 最初と最後で全体をつかむ', C.red, FILL.red, 12), bx(15, 52, 290, 30, 'スキャニング ＝ キーワードで根拠を探す', C.blue, FILL.blue, 12), bx(15, 90, 290, 30, '設問を先に読むと、読む場所が絞れる', C.green, FILL.green, 12), ...cap('組み合わせて使う', C.green)),
  },
], 'スキミングとスキャニング');

// ───────── koko_eigo_05_writing 5文型 ─────────
const ROLE: Record<string, [string, string]> = { S: [C.blue, FILL.blue], V: [C.red, FILL.red], O: [C.green, FILL.green], C: [C.purple, FILL.purple], M: [C.gray, FILL.gray] };
/** 文の部品を、役割（S・V・O・C）ごとに色分けして並べる。役割の文字は箱の下に出す。 */
const sent = (parts: [string, string][], y: number, x0 = 10, size = 12): E[] => {
  const ws = parts.map(([t]) => Math.max(34, t.length * 6.6 + 16));
  let x = x0;
  const out: E[] = [];
  parts.forEach(([t, k], i) => {
    const [c, f] = ROLE[k];
    out.push(bx(x, y, ws[i], 28, t, c, f, size));
    if (k !== 'M') out.push(lb(x + ws[i] / 2, y + 40, k, 12, c, 'middle', true));
    x += ws[i] + 6;
  });
  return out;
};
const e05: DiagramFigure = show([
  {
    note: '英語のすべての文は、五つの型（文型）のどれかに当てはまります。S は主語、V は動詞、O は目的語、C は補語です。この五つが英作文の土台になります。',
    add: [head('5 つの文型'), bx(10, 24, 300, 20, 'SV　　　Birds fly.', C.blue, FILL.blue, 11), bx(10, 48, 300, 20, 'SVC　　He is kind.', C.purple, FILL.purple, 11), bx(10, 72, 300, 20, 'SVO　　I like music.', C.green, FILL.green, 11), bx(10, 96, 300, 20, 'SVOO　He gave me a book.', C.red, FILL.red, 11), bx(10, 120, 300, 20, 'SVOC　They call him Ken.', C.main, FILL.warm, 11), ...cap('すべてこの 5 つのどれか', C.ink, 12)],
  },
  {
    note: 'いちばん短いのが SV です。Birds fly.（鳥は飛ぶ）。主語と動詞だけで文が完成します。',
    add: fresh(head('SV：主語 ＋ 動詞'), ...sent([['Birds', 'S'], ['fly.', 'V']], 40, 90, 14), ...cap('これだけで一つの文')),
  },
  {
    note: '❓SVC の C（補語）は、何を表すのでしょう。→ 主語の性質や状態です。He is kind. では He ＝ kind の関係。S ＝ C が成り立つのが SVC の目印です。She became a teacher. も、She ＝ a teacher です。',
    add: fresh(head('SVC：S ＝ C'), ...sent([['He', 'S'], ['is', 'V'], ['kind.', 'C']], 34, 70, 14), lb(160, 104, 'He ＝ kind（同じ人の状態）', 12, C.purple, 'middle', true), ...cap('S ＝ C なら SVC', C.purple)),
  },
  {
    note: 'SVO は「〜を」にあたる目的語（O）を取ります。I like music.（私は音楽が好き）。SVOO は目的語を二つ取り、「人に物を渡す」形です。He gave me a book.（彼は私に本をくれた）。',
    add: fresh(head('SVO と SVOO'), ...sent([['I', 'S'], ['like', 'V'], ['music.', 'O']], 24, 70, 13), ...sent([['He', 'S'], ['gave', 'V'], ['me', 'O'], ['a book.', 'O']], 88, 40, 13), lb(160, 144, '人に　物を', 11, C.gray, 'middle'), ...cap('SVOO ＝ 〜に …を', C.green)),
  },
  {
    note: '❓SVOC の C は？ → 目的語の状態や名前です。They call him Ken. では him ＝ Ken が成り立ちます。SVC は S ＝ C、SVOC は O ＝ C が目印です。',
    add: fresh(head('SVOC：O ＝ C'), ...sent([['They', 'S'], ['call', 'V'], ['him', 'O'], ['Ken.', 'C']], 34, 50, 14), lb(160, 104, 'him ＝ Ken（O ＝ C）', 12, C.purple, 'middle', true), ...cap('O ＝ C なら SVOC', C.purple)),
  },
  {
    note: '次は日本語を英語にする練習です。❓なぜ語順を入れかえるのでしょう。→ 日本語は動詞が最後ですが、英語は動詞が主語のすぐ後ろに来るからです。「私は毎日図書館で本を読む」は、I read books in the library every day. の順になります。',
    add: fresh(head('動詞は主語のすぐ後ろ'), lb(10, 28, '日本語', 11, C.gray, 'start', true), ...rowb(['私は', '毎日', '図書館で', '本を', '読む'], 38, 24, C.gray, FILL.gray, 10, 10, 310, 4), lb(10, 82, '英語', 11, C.red, 'start', true), ...chips(['I', 'read', 'books', 'in the library', 'every day'], 92, C.red, FILL.red, 10, 10, 24).els, ar(280, 64, 80, 90, C.main, true), ...cap('読む（V）を主語の後ろへ', C.red)),
  },
  {
    note: '❓日本語で主語が省かれているときは? → 英語では必ず主語を補います。「今日は雨が降っています」は、天気を表す It を主語にして It is raining today. と書きます。',
    add: fresh(head('主語を補う'), bx(15, 28, 290, 30, '今日は雨が降っています。（主語がない）', C.gray, FILL.gray, 12), ar(160, 60, 160, 78, C.main), ...sent([['It', 'S'], ['is raining', 'V'], ['today.', 'M']], 86, 40, 13), ...cap('天気は It が主語', C.blue)),
  },
  {
    note: 'よく使う基本の構文があります。There is／are 〜（〜がある）、It takes 〜 to …（…するのに〜かかる）、It is … to 〜（〜することは…だ）、I want you to 〜（あなたに〜してほしい）。どれも英作文でそのまま使える型です。',
    add: fresh(head('英作文で使える型'), bx(10, 28, 300, 26, 'There is a cat on the roof.', C.blue, FILL.blue, 11), bx(10, 58, 300, 26, 'It takes 30 minutes to walk to school.', C.green, FILL.green, 11), bx(10, 88, 300, 26, 'It is important to study every day.', C.red, FILL.red, 11), bx(10, 118, 300, 26, 'I want you to come with me.', C.purple, FILL.purple, 11), ...cap('型ごと覚えて使う')),
  },
  {
    note: 'まとめです。英語の文は五つの型のどれか。SVC は S＝C、SVOC は O＝C。日本語を英語にするときは、①主語を補う ②時制を決める ③動詞を主語のすぐ後ろに置く、の順に考えます。',
    add: fresh(bx(15, 14, 290, 30, '5 文型：SV・SVC・SVO・SVOO・SVOC', C.blue, FILL.blue, 12), bx(15, 52, 290, 30, 'SVC は S ＝ C、SVOC は O ＝ C', C.purple, FILL.purple, 12), bx(15, 90, 290, 30, '主語を補う → 時制 → 動詞は主語の後ろ', C.green, FILL.green, 12), ...cap('型に当てはめて書く', C.green)),
  },
], '英語の基本文型（5文型）');

// ───────── koko_eigo_06_vocab 前置詞のイメージ ─────────
const e06: DiagramFigure = show([
  {
    note: '❓前置詞は、なぜ一つずつ暗記せずに「イメージ」で覚えるのでしょう。→ in・on・at は、場所でも時でも同じ核のイメージを持っているからです。at は「一点」、on は「面に接している」、in は「囲まれた中」です。',
    add: [head('前置詞の核のイメージ'), ci(55, 56, 5, undefined, C.red, FILL.red), lb(55, 90, 'at ＝ 一点', 11, C.red, 'middle', true), ln(125, 70, 195, 70, C.gray, false, 3), ci(160, 60, 10, undefined, C.blue, FILL.blue), lb(160, 90, 'on ＝ 面に接する', 11, C.blue, 'middle', true), bx(225, 36, 70, 44, undefined, C.green, FILL.green), ci(260, 58, 6, undefined, C.green, '#FFFFFF'), lb(266, 90, 'in ＝ 囲まれた中', 11, C.green, 'middle', true), ...cap('場所にも時にも使える核', C.ink)],
  },
  {
    note: 'at は「一点」です。at the station（駅に）、at noon（正午に）、at 3 o\'clock（3時に）。場所でも時刻でも、ぴたりと一点を指します。',
    add: fresh(head('at ＝ 一点'), ci(160, 62, 6, undefined, C.red, FILL.red), bx(20, 90, 130, 30, 'at the station', C.red, FILL.red, 12), bx(170, 90, 130, 30, 'at noon', C.red, FILL.red, 12), lb(85, 132, '場所の一点', 11, C.gray, 'middle'), lb(235, 132, '時刻の一点', 11, C.gray, 'middle'), ...cap('一点で見る', C.red)),
  },
  {
    note: 'on は「面に接している」です。on the table（テーブルの上）、on the wall（壁に）。時間では、on Monday や on my birthday のように、特定の日に接している感じになります。',
    add: fresh(head('on ＝ 面に接する'), ln(60, 70, 260, 70, C.gray, false, 3), ci(160, 60, 10, undefined, C.blue, FILL.blue), bx(15, 92, 94, 28, 'on the table', C.blue, FILL.blue, 11), bx(113, 92, 94, 28, 'on Monday', C.blue, FILL.blue, 11), bx(211, 92, 98, 28, 'on my birthday', C.blue, FILL.blue, 10), ...cap('その面（その日）に接している', C.blue)),
  },
  {
    note: 'in は「囲まれた中」です。in the room（部屋の中）、in July（7月という期間の中）、in trouble（困りごとの中）、in English（英語という枠の中）。初めて見る熟語も、核が分かれば意味の見当がつきます。',
    add: fresh(head('in ＝ 囲まれた中'), bx(110, 26, 100, 56, undefined, C.green, FILL.green), ci(160, 54, 6, undefined, C.green, '#FFFFFF'), ...rowb(['in the room', 'in July', 'in trouble', 'in English'], 96, 28, C.green, FILL.green, 10, 10, 310, 6), ...cap('空間・期間・状態・言語の「中」', C.green)),
  },
  {
    note: '❓by と until のちがいは? → by は「期限の点」、until は「続く線」のイメージです。I will finish it by Monday. は月曜までに終える（期限）。I studied until midnight. は夜中までずっと勉強した（継続）。',
    add: fresh(head('by ＝ 点、until ＝ 線'), ln(30, 52, 290, 52, C.gray), ci(250, 52, 6, undefined, C.red, FILL.red), lb(250, 36, '月曜', 11, C.red, 'middle', true), ln(40, 76, 250, 76, C.blue, false, 5), lb(145, 94, 'until：ずっと続ける', 11, C.blue, 'middle', true), ci(250, 116, 6, undefined, C.red, FILL.red), lb(150, 118, 'by：その前に終える', 11, C.red, 'middle', true), ...cap('by は期限、until は継続')),
  },
  {
    note: '次は熟語です。❓look forward to のあとが -ing なのはなぜでしょう。→ この to は不定詞の to ではなく前置詞だからです。前置詞のあとには名詞が来ます。動詞を続けたいときは、名詞の形の動名詞（-ing）にします。',
    add: fresh(head('この to は前置詞！', C.red), ...rowb(['look forward', 'to', 'seeing you'], 30, 36, C.blue, FILL.blue, 12, 20, 300, 8), lb(160, 82, '前置詞のあとは名詞の形', 12, C.ink, 'middle', true), lb(160, 106, '○ I look forward to seeing you.', 12, C.green, 'middle', true), lb(160, 128, '× I look forward to see you.', 12, C.red, 'middle', true), ...cap('to のあとは -ing', C.red)),
  },
  {
    note: 'to を見ると、原形を続けたくなります。でも be used to -ing（〜するのに慣れている）も、同じ前置詞の to です。「to のあとに -ing が来る熟語」としてまとめて覚えておきましょう。',
    add: fresh(head('to のあとが -ing になる熟語'), bx(15, 28, 290, 30, 'look forward to -ing　〜を楽しみにする', C.red, FILL.red, 12), bx(15, 66, 290, 30, 'be used to -ing　〜に慣れている', C.red, FILL.red, 12), lb(160, 118, '不定詞の to なら、原形が続く', 11, C.gray, 'middle'), ...cap('前置詞の to は -ing', C.red)),
  },
  {
    note: '❓なぜ語形変化を 4 形セットで覚えるのでしょう。→ 一つの語幹から名詞・形容詞・副詞が作れるうえ、入試の変形問題は「文の中でどの品詞が要るか」を問うからです。nation→national→nationally→nationality。',
    add: fresh(head('4 形セットで覚える'), ci(160, 62, 26, 'nation', C.main, FILL.warm, 11), bx(10, 28, 90, 26, 'national 形容詞', C.blue, FILL.blue, 10), bx(220, 28, 90, 26, 'nationally 副詞', C.green, FILL.green, 10), bx(110, 104, 100, 26, 'nationality 名詞', C.red, FILL.red, 10), ln(100, 44, 136, 54, C.gray), ln(220, 44, 184, 54, C.gray), ln(160, 88, 160, 104, C.gray), ...cap('品詞を見分けて選ぶ', C.ink)),
  },
  {
    note: '確かめのしかたです。①前置詞は核のイメージで説明できるか。②時は at（時刻）・on（曜日・日付）・in（月・年・季節）・by（期限）・until（継続）。③to のあとが -ing になる熟語を確かめる。④語形変化は文中の品詞から選ぶ。',
    add: fresh(bx(15, 12, 290, 28, '① 核：at 点・on 接触・in 中', C.blue, FILL.blue, 12), bx(15, 46, 290, 28, '② 時：at 時刻・on 日・in 月年季節', C.green, FILL.green, 12), bx(15, 80, 290, 28, '③ look forward to -ing', C.red, FILL.red, 12), bx(15, 114, 290, 28, '④ 語形変化は 4 形セット', C.purple, FILL.purple, 12), ...cap('イメージで覚えると、初めての熟語も読める', C.green)),
  },
], '前置詞の核のイメージと熟語');

// ───────── koko_eigo_07_subjunctive 仮定法過去 ─────────
const e07: DiagramFigure = show([
  {
    note: '「もし〜だったら…なのに」と、現実と反対のことや、実現しそうにないことを言う言い方が仮定法（かていほう）です。ふつうの条件文との見分けが、いちばん大切です。',
    add: [head('ふつうの条件 と 仮定法'), bx(10, 28, 145, 62, 'If it rains tomorrow,\nI will stay home.\n（あり得る）', C.blue, FILL.blue, 10), bx(165, 28, 145, 62, 'If I were a bird,\nI would fly to you.\n（あり得ない）', C.red, FILL.red, 10), lb(82, 108, '動詞は現在形', 11, C.blue, 'middle', true), lb(237, 108, '動詞は過去形', 11, C.red, 'middle', true), ...cap('実現できるか、事実に反するか')],
  },
  {
    note: '❓仮定法なのに、なぜ動詞が過去形になるのでしょう。→ 過去形には「今から遠い」だけでなく、「現実から遠い」という感じもあるからです。事実に反する仮定は現実から離れた話なので、動詞を一つ前の時制にずらします。形は過去形でも、意味は現在のことです。',
    add: fresh(head('一歩ずらして「現実から遠ざける」'), bx(15, 28, 130, 36, '現在形\nあり得る・現実に近い', C.blue, FILL.blue, 10), bx(175, 28, 130, 36, '過去形\n現実から遠い', C.red, FILL.red, 10), ar(148, 46, 172, 46, C.main), lb(160, 80, '形は過去形、意味は「今」のこと', 12, C.red, 'middle', true), ...cap('時制を一つ前にずらす', C.red)),
  },
  {
    note: '仮定法過去の形です。if の節は〈過去形〉、主節は〈would／could／might＋動詞の原形〉。If I had enough money, I would buy a new bike.（お金が十分あれば、新しい自転車を買うのに）。',
    add: fresh(head('仮定法過去の形'), bx(10, 28, 140, 36, 'If I had enough\nmoney,', C.blue, FILL.blue, 11), bx(160, 28, 150, 36, 'I would buy a\nnew bike.', C.red, FILL.red, 11), lb(80, 78, 'if ＋ 過去形', 11, C.blue, 'middle', true), lb(235, 78, 'would ＋ 原形', 11, C.red, 'middle', true), ...cap('過去形 ／ would＋原形')),
  },
  {
    note: '❓その文は、現実ではどうなのでしょう。→ 現実は「お金がないから、買えない」です。仮定法は、現実と反対のことを言うので、本当の意味は「でも、実際は買えない」とセットで考えます。',
    add: fresh(head('現実とセットで読む'), bx(15, 28, 290, 30, 'If I had enough money, I would buy a bike.', C.red, FILL.red, 11), ar(160, 60, 160, 80, C.main), bx(15, 84, 290, 30, '現実：お金がない　→　買えない', C.gray, FILL.gray, 12), ...cap('仮定法は現実と反対', C.red)),
  },
  {
    note: 'be動詞は、主語が I・he・she・it でも were を使うのが原則です。If I were you, I would study harder.（私があなたなら、もっと勉強するのに）。「私だったら〜する」とアドバイスするときの定番です。',
    add: fresh(head('be 動詞は were'), bx(15, 28, 290, 30, 'If I were you, I would study harder.', C.red, FILL.red, 12), lb(160, 80, 'I でも he でも were', 12, C.ink, 'middle', true), lb(160, 104, '（会話では was を使うこともある）', 11, C.gray, 'middle'), ...cap('アドバイスの定番表現', C.red)),
  },
  {
    note: '主節の助動詞は意味で使い分けます。would は「〜だろうに」、could は「〜できるのに」、might は「〜かもしれないのに」。If it were sunny, we could play outside.（晴れていたら、外で遊べるのに）。',
    add: fresh(head('would・could・might'), bx(10, 28, 96, 40, 'would\n〜だろうに', C.blue, FILL.blue, 12), bx(112, 28, 96, 40, 'could\n〜できるのに', C.green, FILL.green, 11), bx(214, 28, 96, 40, 'might\n〜かもしれない', C.purple, FILL.purple, 10), lb(160, 98, 'If it were sunny, we could play outside.', 11, C.ink, 'middle', true), ...cap('意味で選ぶ')),
  },
  {
    note: '❓過去の事実に反するときは? → さらに一歩、過去へずらします。仮定法過去完了です。If I had studied harder, I would have passed the exam.（もっと勉強していたら、合格していたのに）。形は、if の節が〈had＋過去分詞〉、主節が〈would have＋過去分詞〉です。',
    add: fresh(head('過去の事実に反する → もう一歩ずらす'), bx(10, 26, 300, 26, '仮定法過去　：過去形 ／ would＋原形', C.blue, FILL.blue, 11), bx(10, 58, 300, 26, '仮定法過去完了：had＋過去分詞 ／ would have＋過去分詞', C.red, FILL.red, 10), lb(160, 108, 'If I had studied harder, I would have passed.', 11, C.ink, 'middle', true), ...cap('現在は過去形、過去は過去完了', C.red)),
  },
  {
    note: '見分ける手順です。①実現できる話か、事実に反する話か。②実現できるなら直説法（現在形）、反するなら仮定法（過去形）。③いつの話か。今なら過去形、過去なら had＋過去分詞。When・if の時の副詞節の現在形と混同しないでください。',
    add: fresh(...flow(['実現できる?\n事実に反する?', '反する →\n仮定法', '今なら過去形\n過去なら had＋pp'], 26, { h: 66, size: 10, color: C.blue, fill: FILL.blue }).flat(), ...cap('「実現可能か」で見分ける', C.blue)),
  },
  {
    note: 'まとめです。仮定法は現実と反対のことを言う。時制を一つ前にずらすので、形は過去形でも意味は現在。過去のことなら had＋過去分詞と would have＋過去分詞。be動詞は were。',
    add: fresh(bx(15, 14, 290, 30, '事実に反する仮定 → 時制を一歩ずらす', C.red, FILL.red, 12), bx(15, 52, 290, 30, '今：過去形・were ／ would＋原形', C.blue, FILL.blue, 12), bx(15, 90, 290, 30, '過去：had＋過去分詞 ／ would have＋pp', C.green, FILL.green, 12), ...cap('現実と反対の話', C.green)),
  },
], '仮定法過去と過去完了');

// ───────── koko_eigo_08_conjunction 文の構造 ─────────
const lrow = (label: string, text: string, y: number, color: string, fill: string, size = 11): E[] => [lb(12, y + 14, label, 11, color, 'start', true), bx(78, y, 232, 28, text, color, fill, size)];
const e08: DiagramFigure = show([
  {
    note: '文の構造は三つに分けられます。単文は「主語＋動詞」の組が一つ。重文は and・but・or・so で対等な節を並べた文。複文は、when・that・who などで主節に従属節をつけた文です。',
    add: [head('単文・重文・複文'), bx(10, 26, 300, 26, '単文　I like music.', C.blue, FILL.blue, 11), bx(10, 58, 300, 26, '重文　I like music, and my sister likes sports.', C.green, FILL.green, 10), bx(10, 90, 300, 26, '複文　I know that he is honest.', C.red, FILL.red, 11), ...cap('主語＋動詞の組が、いくつ・どうつながるか')],
  },
  {
    note: '❓なぜ文の構造を調べるのでしょう。→ 長い文でも、従属節をかっこでくくれば、残った部分が主節になり、文の骨格（だれがどうした）が見えてくるからです。長文読解の正確さが上がります。',
    add: fresh(head('かっこでくくって骨格を出す'), bx(10, 24, 300, 40, '[When I was walking in the park,]\nI saw a dog [which was very big.]', C.gray, FILL.gray, 11), ar(160, 62, 160, 84, C.main), bx(70, 88, 180, 30, 'I saw a dog', C.red, FILL.red, 14), ...cap('骨格 ＝ 私は犬を見た', C.red)),
  },
  {
    note: '例を分けて見ましょう。When I was walking in the park（公園を歩いていたとき）は「いつ」を補足する従属節。I saw a dog が主節で、文の骨格。which was very big（とても大きい）は「どんな犬か」を補足する従属節です。',
    add: fresh(head('主節を先に、従属節で補足'), ...lrow('いつ', '[When I was walking in the park,]', 26, C.gray, FILL.gray, 10), ...lrow('骨格', 'I saw a dog', 62, C.red, FILL.red, 13), ...lrow('どんな犬', '[which was very big.]', 98, C.gray, FILL.gray, 11), ...cap('主節の意味 → 従属節で補足', C.red)),
  },
  {
    note: '構造分析の手順です。①接続詞・関係詞（that・when・because・who・which）に印をつける。②その節がどこで終わるかを見極める。③従属節を［　］でくくり、主節の S と V を決める。④主節の意味を先に、従属節で補足する。',
    add: fresh(bx(10, 22, 300, 24, '① 接続詞・関係詞に印をつける', C.blue, FILL.blue, 11), bx(10, 50, 300, 24, '② その節の終わりを探す', C.blue, FILL.blue, 11), bx(10, 78, 300, 24, '③ [ ]でくくり、主節の S・V を決める', C.blue, FILL.blue, 11), bx(10, 106, 300, 24, '④ 主節を先に、従属節で補足する', C.blue, FILL.blue, 11), ...cap('主節の S・V を確定する', C.blue)),
  },
  {
    note: '❓接続詞と前置詞は、なぜまちがえやすいのでしょう。→ 意味がほとんど同じ組があるからです。because と because of、though と in spite of、while と during。見分けは、うしろに何が来るかです。',
    add: fresh(head('意味が同じ組'), bx(10, 28, 145, 26, 'because', C.blue, FILL.blue, 12), bx(165, 28, 145, 26, 'because of', C.green, FILL.green, 12), bx(10, 60, 145, 26, 'though', C.blue, FILL.blue, 12), bx(165, 60, 145, 26, 'in spite of', C.green, FILL.green, 12), bx(10, 92, 145, 26, 'while', C.blue, FILL.blue, 12), bx(165, 92, 145, 26, 'during', C.green, FILL.green, 12), lb(82, 136, '接続詞', 11, C.blue, 'middle', true), lb(237, 136, '前置詞', 11, C.green, 'middle', true), ...band(150, lb(160, 190, '意味は近いが、うしろの形がちがう', 12, C.ink, 'middle', true))),
  },
  {
    note: '見分け方は一つです。接続詞のうしろは〈主語＋動詞〉、前置詞のうしろは〈名詞・動名詞〉。because it was cold は主語と動詞が続くので接続詞。because of the cold は名詞が続くので前置詞です。',
    add: fresh(head('うしろの形で見分ける'), bx(10, 28, 300, 30, '接続詞 ＋ 主語 ＋ 動詞　because it was cold', C.blue, FILL.blue, 11), bx(10, 66, 300, 30, '前置詞 ＋ 名詞　because of the cold', C.green, FILL.green, 11), lb(160, 118, '× because of it was cold', 12, C.red, 'middle', true), ...cap('接続詞：S＋V、前置詞：名詞', C.ink)),
  },
  {
    note: '入試の書きかえで確かめましょう。We stayed home because it was very cold. を because of で書きかえると、うしろを名詞にします。→ We stayed home because of the very cold weather.',
    add: fresh(head('because → because of'), bx(10, 24, 300, 30, 'We stayed home\n[because it was very cold].', C.blue, FILL.blue, 11), ar(160, 60, 160, 78, C.main), bx(10, 82, 300, 34, 'We stayed home\n[because of the very cold weather].', C.green, FILL.green, 11), lb(160, 128, 'S＋V（it was very cold）→ 名詞（the very cold weather）', 10, C.gray, 'middle'), ...cap('うしろを名詞に直す', C.green)),
  },
  {
    note: 'まとめです。文は単文・重文・複文に分けられる。従属節を［　］でくくると主節の骨格が見える。接続詞のうしろは主語＋動詞、前置詞のうしろは名詞。',
    add: fresh(bx(15, 14, 290, 30, '単文・重文・複文を見分ける', C.blue, FILL.blue, 12), bx(15, 52, 290, 30, '[従属節] をくくって主節を見つける', C.red, FILL.red, 12), bx(15, 90, 290, 30, '接続詞 ＋ S・V ／ 前置詞 ＋ 名詞', C.green, FILL.green, 12), ...cap('骨格から読む', C.green)),
  },
], '文の構造と、接続詞・前置詞');

// ───────── koko_eigo_09_noun_article 可算名詞・不可算名詞 ─────────
const e09: DiagramFigure = show([
  {
    note: '名詞には、数えられる名詞（可算名詞）と、数えられない名詞（不可算名詞）があります。book は1冊、2冊と数えられますが、water は水というひとかたまりで、1つ、2つと区切れません。',
    add: [head('名詞は 2 種類'), bx(10, 26, 145, 28, '可算名詞（かさんめいし）', C.blue, FILL.blue, 11), bx(165, 26, 145, 28, '不可算名詞', C.red, FILL.red, 11), ...[0, 1, 2].map((i) => bx(30 + i * 36, 66, 28, 36, 'book', C.blue, FILL.blue, 8)), bx(180, 66, 110, 36, 'water', C.red, FILL.red, 12), lb(82, 122, '1冊、2冊と数える', 11, C.blue, 'middle'), lb(235, 122, 'ひとかたまり', 11, C.red, 'middle'), ...cap('数えられるか、数えられないか')],
  },
  {
    note: '数えられる名詞は a や複数形が付きます。a book、two books。数えられない名詞は、a も付かず複数形にもなりません。動詞は単数扱いで is を使います。',
    add: fresh(head('a と複数形が付くか'), bx(10, 26, 300, 30, '○ a book　　○ two books', C.blue, FILL.blue, 13), bx(10, 64, 300, 30, '× an information　× two advices', C.red, FILL.red, 13), lb(160, 116, '× many homeworks', 12, C.red, 'middle', true), ...cap('不可算名詞は a も複数形も付けない', C.red)),
  },
  {
    note: '❓どんな名詞が数えられないのでしょう。→ 液体・物質（water・milk・paper・money）、抽象的なもの（information・advice・homework・music・news）、集合（furniture・baggage）です。形がなく区切れないものが中心です。',
    add: fresh(head('主な不可算名詞'), bx(10, 26, 300, 26, '液体・物質　water ／ milk ／ paper ／ money', C.blue, FILL.blue, 11), bx(10, 58, 300, 26, '抽象　information ／ advice ／ homework', C.green, FILL.green, 11), bx(10, 90, 300, 26, '集合　furniture ／ baggage ／ news', C.purple, FILL.purple, 11), ...cap('入試で狙われる語', C.ink)),
  },
  {
    note: '❓では、不可算名詞を数えたいときはどうするのでしょう。→ 「単位」を使います。a glass of water（コップ1杯の水）、a piece of paper（1枚の紙）、a slice of bread（1切れのパン）。複数のときは、単位の語を複数形にします。two glasses of milk。',
    add: fresh(head('単位で数える'), bx(10, 26, 145, 28, 'a glass of water', C.blue, FILL.blue, 11), bx(165, 26, 145, 28, 'a piece of paper', C.green, FILL.green, 11), bx(10, 62, 145, 28, 'a slice of bread', C.red, FILL.red, 11), bx(165, 62, 145, 28, 'two glasses of milk', C.purple, FILL.purple, 10), lb(160, 112, '複数にするのは glass（単位）。milk は変えない', 11, C.ink, 'middle', true), ...cap('単位語を複数形にする', C.purple)),
  },
  {
    note: '❓「たくさん」「少し」は、可算と不可算でどう変わるのでしょう。→ 数えられる名詞には many と a few、数えられない名詞には much と a little を使います。many books、much water、a few friends、a little time です。',
    add: fresh(head('数える名詞 と 数えない名詞'), lb(80, 38, '可算（数える）', 11, C.blue, 'middle', true), lb(240, 38, '不可算', 11, C.red, 'middle', true), bx(10, 46, 140, 26, 'many books', C.blue, FILL.blue, 12), bx(170, 46, 140, 26, 'much water', C.red, FILL.red, 12), bx(10, 80, 140, 26, 'a few friends', C.blue, FILL.blue, 12), bx(170, 80, 140, 26, 'a little time', C.red, FILL.red, 12), lb(160, 124, 'much は疑問文・否定文でよく使う', 11, C.gray, 'middle'), ...cap('名詞に合わせて選ぶ')),
  },
  {
    note: '❓a few と few は、どうちがうのでしょう。→ a が付くと「少しはある」（肯定的）、付かないと「ほとんどない」（否定的）です。I have a few friends. は友達が数人いる、I have few friends. は友達がほとんどいません。little も同じです。',
    add: fresh(head('a が付くか付かないか'), bx(10, 26, 145, 34, 'a few ／ a little\n少しはある', C.green, FILL.green, 11), bx(165, 26, 145, 34, 'few ／ little\nほとんどない', C.red, FILL.red, 11), bx(10, 76, 145, 30, 'I have a few friends.', C.green, FILL.green, 10), bx(165, 76, 145, 30, 'I have few friends.', C.red, FILL.red, 10), lb(82, 124, '友達が数人いる', 11, C.green, 'middle', true), lb(237, 124, '友達がほとんどいない', 11, C.red, 'middle', true), ...cap('a の有無で意味が逆になる', C.ink)),
  },
  {
    note: '❓どちらにも使える言い方はないのでしょうか。→ あります。a lot of（lots of）は、数えられる名詞にも数えられない名詞にも使えます。肯定文の「たくさん」は、a lot of にすれば迷いません。a lot of books、a lot of homework。',
    add: fresh(head('a lot of は万能'), bx(40, 28, 110, 30, 'a lot of books', C.blue, FILL.blue, 12), bx(170, 28, 110, 30, 'a lot of homework', C.red, FILL.red, 11), lb(95, 76, '可算', 11, C.blue, 'middle'), lb(225, 76, '不可算', 11, C.red, 'middle'), lb(160, 108, '肯定文の「たくさん」は a lot of', 12, C.ink, 'middle', true), ...cap('迷ったら a lot of', C.green)),
  },
  {
    note: 'まとめです。名詞はまず、数えられるかどうかを見る。数えられない名詞には a も複数形も付けない。数えたいときは a piece of のような単位を使う。many と much、a few と a little は名詞に合わせて選び、a の有無で意味が逆になる。',
    add: fresh(bx(15, 12, 290, 28, '数えられるか？ → a・複数形が付くか決まる', C.blue, FILL.blue, 11), bx(15, 46, 290, 28, '不可算は a piece of などの単位で数える', C.red, FILL.red, 11), bx(15, 80, 290, 28, 'many／a few ＝ 可算、much／a little ＝ 不可算', C.green, FILL.green, 10), bx(15, 114, 290, 28, 'a few は肯定、few は否定', C.purple, FILL.purple, 12), ...cap('まず「数えられるか」', C.green)),
  },
], '可算名詞と不可算名詞');

// ───────── koko_eigo_10_sentence_types 付加疑問文・否定疑問文 ─────────
const e10: DiagramFigure = show([
  {
    note: '付加疑問文（ふかぎもんぶん）は、文の終わりに短い疑問をつけて「〜ですよね？」と確認や同意を求める文です。肯定文には否定の付加、否定文には肯定の付加をつけます。',
    add: [head('付加疑問文：逆の形をつける'), bx(10, 28, 300, 30, '肯定文 ＋ 否定の付加　You are a student, aren\'t you?', C.blue, FILL.blue, 10), bx(10, 66, 300, 30, '否定文 ＋ 肯定の付加　He can\'t swim, can he?', C.red, FILL.red, 10), ...cap('「〜ですよね？」と確かめる')],
  },
  {
    note: '作り方は 3 ステップです。①もとの文の（助）動詞を使う（be動詞は be動詞、一般動詞は do／does／did、助動詞はその助動詞）。②肯定と否定を逆にする。③主語を代名詞にする（Tom→he、the books→they）。',
    add: fresh(head('作り方の 3 ステップ'), bx(10, 26, 300, 28, '① もとの動詞に合わせる（be／do／助動詞）', C.blue, FILL.blue, 11), bx(10, 60, 300, 28, '② 肯定 ⇔ 否定 を逆にする', C.red, FILL.red, 11), bx(10, 94, 300, 28, '③ 主語を代名詞にする（Tom → he）', C.green, FILL.green, 11), ...cap('この順に作る')),
  },
  {
    note: '例で確かめましょう。Tom went home, ＿＿＿? ①一般動詞の過去（went）なので did を使う。②もとの文は肯定だから否定にして didn\'t。③Tom は he にする。答えは Tom went home, didn\'t he?',
    add: fresh(head('Tom went home, ＿＿?'), bx(10, 26, 300, 24, 'Tom went home,', C.gray, FILL.gray, 12), lb(160, 66, '① went → did　② 否定にして didn\'t　③ Tom → he', 11, C.ink, 'middle', true), ar(160, 78, 160, 94, C.main), bx(10, 98, 300, 28, 'Tom went home, didn\'t he?', C.green, FILL.green, 13), ...cap('didn\'t he?', C.green)),
  },
  {
    note: '特別な形もあります。命令文のあとは will you?（〜してくれる？）、Let\'s のあとは shall we?（〜しましょうよ）。Open the window, will you? Let\'s go, shall we?',
    add: fresh(head('特別な付加疑問'), bx(10, 28, 300, 30, 'Open the window, will you?', C.blue, FILL.blue, 12), bx(10, 66, 300, 30, 'Let\'s go, shall we?', C.green, FILL.green, 12), lb(160, 116, '命令文 → will you?　Let\'s → shall we?', 11, C.ink, 'middle', true), ...cap('この 2 つは暗記')),
  },
  {
    note: '次は否定疑問文です。Don\'t you like it?（それが好きじゃないの？）、Aren\'t you tired?（疲れていないの？）のように、否定の短縮形で始めて、驚きや確認の気持ちを表します。',
    add: fresh(head('否定疑問文：否定の形で始める'), bx(10, 28, 300, 30, 'Don\'t you like coffee?', C.blue, FILL.blue, 13), bx(10, 66, 300, 30, 'Aren\'t you tired?', C.blue, FILL.blue, 13), lb(160, 116, '驚き・確認のニュアンス', 11, C.gray, 'middle'), ...cap('Don\'t／Aren\'t で始める')),
  },
  {
    note: '❓Yes と No は、どう答えるのでしょう。→ 日本語と逆になるので要注意です。英語は、質問の形に関係なく、答えの中身が肯定なら Yes、否定なら No。コーヒーが好きなら Yes, I do.（日本語では「いいえ、好きです」）。好きでないなら No, I don\'t.',
    add: fresh(head('Don\'t you like coffee?'), bx(10, 28, 145, 46, '好きな人\nYes, I do.', C.green, FILL.green, 12), bx(165, 28, 145, 46, '好きでない人\nNo, I don\'t.', C.red, FILL.red, 12), lb(82, 94, '日本語では「いいえ、好きです」', 10, C.gray, 'middle'), lb(237, 94, '日本語では「はい、好きではない」', 10, C.gray, 'middle'), lb(160, 122, '中身が肯定 → Yes、否定 → No', 12, C.ink, 'middle', true), ...cap('質問の形は関係ない', C.red)),
  },
  {
    note: '選択疑問文は、or で選択肢を示す疑問文です。Yes／No では答えず、選んだものを答えます。Which do you like, tea or coffee? ― I like tea. 文末は下げ調子で読みます。',
    add: fresh(head('選択疑問文：Yes／No では答えない'), bx(10, 28, 300, 30, 'Which do you like, tea or coffee?', C.blue, FILL.blue, 12), ar(160, 60, 160, 78, C.main), bx(10, 82, 300, 30, '― I like tea.', C.green, FILL.green, 13), ...cap('選んだものを答える', C.green)),
  },
  {
    note: 'まとめです。付加疑問文は、逆の形を、もとの動詞に合わせてつける。命令文は will you、Let\'s は shall we。否定疑問文への答えは、中身が肯定なら Yes、否定なら No。選択疑問文は Yes／No で答えない。',
    add: fresh(bx(15, 12, 290, 28, '付加疑問：逆の形・同じ動詞・代名詞', C.blue, FILL.blue, 12), bx(15, 46, 290, 28, '命令文 → will you? ／ Let\'s → shall we?', C.green, FILL.green, 11), bx(15, 80, 290, 28, '否定疑問：中身が肯定 → Yes、否定 → No', C.red, FILL.red, 11), bx(15, 114, 290, 28, '選択疑問：Yes／No で答えない', C.purple, FILL.purple, 12), ...cap('答えの中身で Yes か No', C.green)),
  },
], '付加疑問文・否定疑問文・選択疑問文');

// ───────── koko_eigo_11_pronunciation 音の変化 ─────────
const e11: DiagramFigure = show([
  {
    note: '❓単語は知っているのに、なぜ文になると聞き取れないのでしょう。→ 文の中では、音がつながったり、消えたり、変わったりするからです。この「音の変化」を知ることが、聞き取りの第一歩です。',
    add: [head('音は文の中で変わる'), ...rowb(['つながる\n連結', '消える\n脱落', '変わる\n同化', '弱くなる\n弱形'], 30, 56, C.blue, FILL.blue, 11, 10, 310, 6), ...cap('4 つの変化を知る')],
  },
  {
    note: '連結（れんけつ）は、前の語の終わりの子音と、次の語の頭の母音がつながる変化です。an apple は「アン アップル」ではなく「ア・ナップル」。Stand up. は「スタン・ダップ」と聞こえます。',
    add: fresh(head('連結：子音 ＋ 母音がつながる'), bx(30, 28, 50, 28, 'an', C.blue, FILL.blue, 13), bx(90, 28, 80, 28, 'apple', C.blue, FILL.blue, 13), ar(130, 58, 130, 76, C.main), bx(90, 80, 140, 28, 'ア・ナップル', C.red, FILL.red, 13), lb(160, 128, 'Stand up. → スタン・ダップ', 12, C.ink, 'middle', true), ...cap('n が次の語につく', C.red)),
  },
  {
    note: '脱落（だつらく）は、音が消えたり弱まったりする変化です。語尾の t・d・p・k などは、次が子音だと聞こえにくくなります。good boy は「グッ（ド）ボーイ」、next time は「ネクス（ト）タイム」。Tell him. の h も落ちて「テリム」に聞こえます。',
    add: fresh(head('脱落：音が消える'), bx(10, 28, 145, 30, 'good boy', C.blue, FILL.blue, 13), bx(165, 28, 145, 30, 'next time', C.blue, FILL.blue, 13), lb(82, 76, 'グッ（ド）ボーイ', 12, C.red, 'middle', true), lb(237, 76, 'ネクス（ト）タイム', 12, C.red, 'middle', true), lb(160, 110, 'Tell him. → テリム（h が落ちる）', 12, C.ink, 'middle', true), ...cap('語尾の破裂音は聞こえにくい', C.red)),
  },
  {
    note: '同化（どうか）は、隣り合う音が影響し合って、別の音になる変化です。Did you は「ディジュー」、Would you は「ウジュー」、meet you は「ミーチュー」。d や t のあとに you が来ると、「ジュ」「チュ」の音になります。',
    add: fresh(head('同化：隣の音と混ざる'), bx(10, 28, 145, 28, 'Did you ～?', C.blue, FILL.blue, 12), bx(165, 28, 145, 28, 'meet you', C.blue, FILL.blue, 12), lb(82, 74, 'ディジュー', 13, C.red, 'middle', true), lb(237, 74, 'ミーチュー', 13, C.red, 'middle', true), lb(160, 112, 'd＋y → ジュ　　t＋y → チュ', 12, C.ink, 'middle', true), ...cap('Would you → ウジュー', C.red)),
  },
  {
    note: '弱形（じゃっけい）は、機能語（前置詞・冠詞・助動詞）が弱く速く読まれる変化です。can・at・for・to・and・of・a・the などです。a cup of tea は、of が「ア」に弱まって「ア カッパ ティー」に聞こえます。',
    add: fresh(head('弱形：機能語は弱く読む'), ...rowb(['a', 'cup', 'of', 'tea'], 28, 34, C.gray, FILL.gray, 14, 20, 300, 10), lb(60, 78, '弱', 11, C.gray, 'middle'), lb(135, 78, '強', 11, C.red, 'middle', true), lb(215, 78, '弱', 11, C.gray, 'middle'), lb(275, 78, '強', 11, C.red, 'middle', true), lb(160, 110, 'of は「ア」のように弱まる', 12, C.ink, 'middle', true), ...cap('ア カッパ ティー', C.red)),
  },
  {
    note: '❓弱い語も、ぜんぶ聞き取らないといけないのでしょうか。→ いいえ。強く読まれる内容語（名詞・動詞・形容詞）に集中すれば、文の意味がつかめます。弱い機能語まで聞き取ろうとしなくて大丈夫です。',
    add: fresh(head('内容語に集中'), bx(15, 28, 135, 36, '内容語\n名詞・動詞・形容詞', C.red, FILL.red, 11), bx(170, 28, 135, 36, '機能語\n前置詞・冠詞・助動詞', C.gray, FILL.gray, 11), lb(82, 84, '強く、はっきり', 12, C.red, 'middle', true), lb(237, 84, '弱く、速く', 12, C.gray, 'middle'), lb(160, 114, '意味は内容語で決まる', 12, C.ink, 'middle', true), ...cap('聞き取りは内容語から', C.red)),
  },
  {
    note: '数字の聞き分けも大切です。thirteen（13）と thirty（30）。-teen は後ろの teen を強く、はっきり「ティーン」と読み、-ty は前を強く読んで語尾は弱くなります。fifteen と fifty、nineteen と ninety も同じです。',
    add: fresh(head('-teen と -ty'), lb(10, 36, 'thirteen 13', 12, C.ink, 'start', true), ...syl(['thir', 'TEEN'], 1, 40, 10, 170, 28), lb(10, 90, 'thirty 30', 12, C.ink, 'start', true), ...syl(['THIR', 'ty'], 0, 94, 10, 170, 28), lb(190, 66, '← 後ろが強い', 11, C.red, 'start', true), lb(190, 124, '← 前が強い', 11, C.red, 'start', true), ...cap('強い所と、語尾の音で聞き分ける', C.red)),
  },
  {
    note: 'まとめです。リスニングでは、連結・脱落・同化・弱形の四つの変化が起こる。内容語を中心に聞く。-teen は後ろが強く、-ty は前が強い。毎日少しずつ英語の音に触れて、耳を慣らすことが最大の対策です。',
    add: fresh(bx(15, 12, 290, 28, '連結：an apple → ア・ナップル', C.blue, FILL.blue, 11), bx(15, 46, 290, 28, '脱落・同化・弱形：消える・変わる・弱くなる', C.green, FILL.green, 11), bx(15, 80, 290, 28, '内容語（名詞・動詞・形容詞）を中心に聞く', C.red, FILL.red, 11), bx(15, 114, 290, 28, '-teen は後ろ、-ty は前が強い', C.purple, FILL.purple, 11), ...cap('毎日少しずつ英語の音に触れる', C.green)),
  },
], '音の変化とリスニング');

// ───────── koko_eigo_12_perfect_advanced 過去完了（大過去） ─────────
const tl = (y: number): E[] => [ln(14, y, 296, y, C.gray), ar(286, y, 306, y, C.gray)];
const pt = (x: number, y: number, top: string, bottom: string, color: string, fill: string): E[] => [ci(x, y, 6, undefined, color, fill), lb(x, y - 14, top, 11, color, 'middle', true), lb(x, y + 20, bottom, 10, C.ink, 'middle')];
const e12: DiagramFigure = show([
  {
    note: '過去完了形（had＋過去分詞）は、「過去のある時点より、さらに前に起きたこと」を表します。これを大過去（だいかこ）といいます。基準になる過去の時点が一つあって、それより前の出来事に使います。',
    add: [head('過去完了 ＝ さらに前のこと'), ...tl(72), ...pt(70, 72, '電車が出発', 'had left', C.blue, FILL.blue), ...pt(170, 72, '私が到着', 'arrived', C.red, FILL.red), ...pt(262, 72, '今', '', C.gray, FILL.gray), ...cap('When I arrived, the train had already left.', C.ink, 10)],
  },
  {
    note: '電車の例です。When I arrived at the station, the train had already left.（私が駅に着いたとき、電車はすでに出発していた）。基準点は「私が着いた」こと。それより前の「電車が出た」ことを、had left と過去完了で表します。',
    add: fresh(head('基準点と、それより前'), ...tl(70), ...pt(80, 70, '出発', 'had left（先）', C.blue, FILL.blue), ln(86, 70, 164, 70, C.blue, false, 5), ...pt(170, 70, '到着', 'arrived（基準）', C.red, FILL.red), bx(10, 106, 300, 28, 'the train had already left', C.blue, FILL.blue, 12), ...cap('基準点より前 → had ＋ 過去分詞', C.blue)),
  },
  {
    note: '❓なぜ、現在完了ではなく過去完了なのでしょう。→ 基準点がちがうからです。現在完了の基準点は「今」で、「今までに」を表します。過去完了の基準点は「過去のある時点」で、「その時までに」を表します。',
    add: fresh(head('基準点のちがい'), lb(10, 30, '現在完了', 11, C.blue, 'start', true), ...tl(48), ci(262, 48, 6, undefined, C.blue, FILL.blue), lb(262, 66, '今（基準）', 10, C.blue, 'middle', true), lb(10, 96, '過去完了', 11, C.red, 'start', true), ...tl(114), ci(170, 114, 6, undefined, C.red, FILL.red), lb(170, 132, '過去のある時点（基準）', 10, C.red, 'middle', true), ...cap('今までに／その時までに')),
  },
  {
    note: '過去完了にも三つの用法があります。完了・結果（The train had already left.）、経験（I had never seen snow before I visited Hokkaido.）、継続（She had lived in Osaka for ten years before she moved to Tokyo.）。現在完了と同じ枠組みです。',
    add: fresh(head('3 つの用法'), bx(10, 26, 300, 28, '完了：The train had already left.', C.blue, FILL.blue, 11), bx(10, 60, 300, 28, '経験：I had never seen snow before …', C.green, FILL.green, 11), bx(10, 94, 300, 28, '継続：She had lived in Osaka for ten years …', C.red, FILL.red, 10), ...cap('現在完了と同じ 3 つ')),
  },
  {
    note: '基準点を示す言葉と、過去完了は相性がよいです。before（〜する前に）、after（〜した後に）、by the time（〜するまでには）、when（〜したとき）。By the time he came, we had eaten all the cake.',
    add: fresh(head('基準点を示す言葉'), ...rowb(['before', 'after', 'by the time', 'when'], 28, 30, C.blue, FILL.blue, 11), lb(160, 86, 'By the time he came, we had eaten all the cake.', 11, C.ink, 'middle', true), lb(160, 110, '（彼が来るまでには、ケーキを全部食べていた）', 10, C.gray, 'middle'), ...cap('時の基準点を探す')),
  },
  {
    note: '❓二つの過去の出来事が出てきたら、どちらを過去完了にするのでしょう。→ 時間的に先に起きたほうを過去完了、後に起きたほうを過去形にします。I lost the ticket that I had bought yesterday. 買った（先）が had bought、なくした（後）が lost です。',
    add: fresh(head('先に起きたほうが過去完了'), ...tl(66), ...pt(90, 66, '買った', 'had bought', C.blue, FILL.blue), ...pt(200, 66, 'なくした', 'lost', C.red, FILL.red), bx(10, 108, 300, 28, 'I lost the ticket that I had bought.', C.ink, FILL.warm, 11), ...cap('先 ＝ 過去完了、後 ＝ 過去形')),
  },
  {
    note: '❓いつも過去完了にするのでしょうか。→ いいえ。前後関係がなく、動作がほぼ同時に続くときは、どちらも過去形で構いません。I opened the door and turned on the light. 無理に過去完了にしないことが大切です。',
    add: fresh(head('同時の連続動作は過去形でよい'), bx(10, 28, 300, 30, 'I opened the door and turned on the light.', C.green, FILL.green, 11), lb(160, 82, '前後の関係をはっきり言う必要がない', 12, C.ink, 'middle', true), lb(160, 108, '→ どちらも過去形', 12, C.green, 'middle', true), ...cap('無理に過去完了にしない', C.green)),
  },
  {
    note: 'まとめです。過去完了は、過去のある時点より前に起きたこと。現在完了は「今」、過去完了は「過去のある時点」が基準点。二つの過去の出来事は、先が過去完了、後が過去形。同時の動作は、どちらも過去形でよい。',
    add: fresh(bx(15, 12, 290, 28, '過去完了 ＝ had ＋ 過去分詞（さらに前）', C.blue, FILL.blue, 12), bx(15, 46, 290, 28, '現在完了の基準は「今」、過去完了は「過去の時点」', C.green, FILL.green, 10), bx(15, 80, 290, 28, '先に起きたほうが過去完了', C.red, FILL.red, 12), bx(15, 114, 290, 28, '同時の動作は、どちらも過去形', C.purple, FILL.purple, 12), ...cap('時間の順番を見る', C.green)),
  },
], '過去完了形（大過去）の考え方');

// ───────── koko_eigo_13_participial_advanced 独立分詞構文・with ＋名詞＋分詞 ─────────
const q1 = chips(['As', 'the sun', 'had set,', 'we went back to the hotel.'], 36, C.blue, FILL.blue);
const q2 = chips(['The sun', 'having set,', 'we went back to the hotel.'], 100, C.green, FILL.green);
const e13: DiagramFigure = show([
  {
    note: '復習です。分詞構文は、接続詞と、主節と同じ主語を省いて、動詞を -ing 形にした表現でした。Not knowing the way, she asked a police officer.（道を知らなかったので、彼女は警察官に尋ねた）。',
    add: [head('復習：主語が同じなら省く'), bx(10, 28, 300, 26, 'Because she didn\'t know the way, she asked …', C.blue, FILL.blue, 10), ar(160, 56, 160, 72, C.main), bx(10, 76, 300, 26, 'Not knowing the way, she asked …', C.green, FILL.green, 11), ...cap('同じ she だから、省ける')],
  },
  {
    note: '❓では、従属節と主節の主語がちがうときは、どうなるでしょう。→ 主語を省くと、だれのことか分からなくなるので、分詞の前に主語を残します。これを独立分詞構文といいます。',
    add: fresh(head('主語がちがう → 主語を残す'), bx(10, 26, 145, 36, '従属節の主語\nthe sun', C.blue, FILL.blue, 11), bx(165, 26, 145, 36, '主節の主語\nwe', C.red, FILL.red, 11), lb(160, 44, '≠', 18, C.red, 'middle', true), lb(160, 90, '主語がちがう → 省けない', 13, C.ink, 'middle', true), ...cap('主語を分詞の前に残す', C.red)),
  },
  {
    note: '例で見ましょう。As the sun had set, we went back to the hotel. As を消し、the sun は残し、had set を having set にします。→ The sun having set, we went back to the hotel.（日が沈んだので、私たちはホテルに戻った）。',
    add: fresh(head('接続詞を消し、主語は残す'), ...q1.els, strike(q1, 0, 36), ar(160, 66, 160, 96, C.main), ...q2.els, ...band(150, lb(160, 190, 'The sun having set, …', 13, C.green, 'middle', true))),
  },
  {
    note: '独立分詞構文は、硬い書き言葉に多く、会話ではあまり使いません。入試では、書くよりも、読解で出会うことのほうが多い形です。形を見て意味が分かれば十分です。',
    add: fresh(head('どこで出会う？'), bx(15, 28, 135, 40, '書き言葉\nよく出る', C.blue, FILL.blue, 12), bx(170, 28, 135, 40, '会話\nほぼ使わない', C.gray, FILL.gray, 12), lb(160, 98, '入試では「読んで分かる」ことが中心', 12, C.ink, 'middle', true), ...cap('形に気づけば十分', C.blue)),
  },
  {
    note: '次は with＋名詞＋分詞（付帯状況）です。「〜を…した状態で」「〜が…しながら」の意味。He was standing with his arms crossed.（腕を組んだ状態で立っていた）。独立分詞構文に近い、大切な構文です。',
    add: fresh(head('with ＋ 名詞 ＋ 分詞'), ...chips(['He was standing', 'with', 'his arms', 'crossed.'], 30, C.blue, FILL.blue, 10, 11, 34).els, lb(160, 86, '〜を…した状態で', 12, C.ink, 'middle', true), lb(160, 110, '腕を組んだ状態で立っていた', 12, C.blue, 'middle', true), ...cap('付帯状況（ふたいじょうきょう）')),
  },
  {
    note: '❓分詞は -ing か過去分詞か、どう決めるのでしょう。→ 名詞と分詞の間に、「主語と動詞」の関係があるかを見ます。名詞が「〜される」側なら過去分詞、「〜する」側なら現在分詞です。',
    add: fresh(head('名詞と分詞の関係で決める'), bx(10, 26, 145, 32, 'his arms crossed', C.red, FILL.red, 12), bx(165, 26, 145, 32, 'his dog running', C.blue, FILL.blue, 12), lb(82, 76, '腕は「組まれる」', 11, C.red, 'middle'), lb(237, 76, '犬は「走っている」', 11, C.blue, 'middle'), lb(82, 98, '受け身 → 過去分詞', 12, C.red, 'middle', true), lb(237, 98, '能動 → 現在分詞', 12, C.blue, 'middle', true), ...cap('する側か、される側か')),
  },
  {
    note: 'ほかの例です。with his eyes closed（目を閉じた状態で）は、目は閉じられるので過去分詞。with his dog running beside him（犬が横を走っている状態で）は、犬は走るので現在分詞。Don\'t speak with your mouth full.（口をいっぱいにしたまま話さないで）。',
    add: fresh(head('例'), bx(10, 28, 300, 26, 'with his eyes closed　目を閉じて', C.red, FILL.red, 11), bx(10, 60, 300, 26, 'with his dog running beside him', C.blue, FILL.blue, 11), bx(10, 92, 300, 26, 'Don\'t speak with your mouth full.', C.green, FILL.green, 11), ...cap('with ＋ 名詞 ＋ 分詞（形容詞）')),
  },
  {
    note: 'まとめです。主語が主節とちがうときは、分詞の前に主語を残す（独立分詞構文）。with＋名詞＋分詞は「〜を…した状態で」。名詞が「される」側なら過去分詞、「する」側なら現在分詞。',
    add: fresh(bx(15, 14, 290, 30, '主語がちがう → 主語を残す', C.blue, FILL.blue, 12), bx(15, 52, 290, 30, 'with ＋ 名詞 ＋ 分詞 ＝ 〜を…した状態で', C.green, FILL.green, 12), bx(15, 90, 290, 30, '名詞が「される」→ 過去分詞、「する」→ -ing', C.red, FILL.red, 11), ...cap('名詞との関係で決める', C.green)),
  },
], '独立分詞構文と with ＋名詞＋分詞');

// ───────── koko_eigo_14_indirect_question_advanced know型とthink型 ─────────
const t1 = chips(['Do you think', 'where', 'he lives?'], 34, C.blue, FILL.blue, 10, 11, 28);
const t2 = chips(['Where', 'do you think', 'he lives?'], 96, C.green, FILL.green, 10, 11, 28);
const e14: DiagramFigure = show([
  {
    note: '間接疑問文には二つのタイプがあります。know 型（Do you know where he lives?）と、think 型（Where do you think he lives?）です。疑問詞の位置が、まったくちがいます。',
    add: [head('疑問詞の位置がちがう'), bx(10, 28, 300, 30, 'know 型　Do you know where he lives?', C.blue, FILL.blue, 11), bx(10, 66, 300, 30, 'think 型　Where do you think he lives?', C.green, FILL.green, 11), ...cap('どちらを使うかは、動詞で決まる')],
  },
  {
    note: 'know 型は、ふつうの間接疑問文です。疑問詞のあとは〈主語＋動詞〉の肯定文の語順に戻ります。Do you know where he lives? の where he lives は肯定文の語順です。× where does he live とは言いません。',
    add: fresh(head('know 型：疑問詞のあとは肯定文の語順'), ...rowb(['Do you know', 'where', 'he lives?'], 30, 34, C.blue, FILL.blue, 12, 10, 310, 6), lb(160, 86, '疑問詞は文の途中のまま', 12, C.ink, 'middle', true), lb(160, 112, '× Do you know where does he live?', 12, C.red, 'middle', true), ...cap('疑問詞 ＋ 主語 ＋ 動詞', C.blue)),
  },
  {
    note: '❓think 型では、なぜ疑問詞が文の最初に出るのでしょう。→ 「あなたは知っていますか」には Yes か No で答えられますが、「あなたは〜と思いますか」は Yes／No では答えにくく、聞きたい中心は where の内容だからです。聞きたい疑問詞を、文の頭に出して強調します。',
    add: fresh(head('聞きたいことを、文の頭へ'), bx(10, 26, 145, 46, 'Do you know…?\nYes, I do. ○', C.blue, FILL.blue, 11), bx(165, 22, 145, 56, 'Do you think…?\nYes／No では\n答えにくい', C.red, FILL.red, 11), lb(160, 100, '聞きたい中心は where の内容', 12, C.ink, 'middle', true), lb(160, 122, '→ where を文の頭に出す', 12, C.green, 'middle', true), ...cap('think 型は疑問詞が文頭', C.green)),
  },
  {
    note: '組み立ての手順です。もとの文 Do you think where he lives? の where を、文の最初に出します。すると Where do you think he lives? になります。do you think のあとは〈主語＋動詞〉の肯定文の語順です。',
    add: fresh(head('疑問詞を文頭に出す'), ...t1.els, ar(t1.xs[1] + t1.ws[1] / 2, 64, t2.xs[0] + t2.ws[0] / 2, 94, C.main), ...t2.els, ...band(150, lb(160, 190, 'Where do you think he lives?', 13, C.green, 'middle', true))),
  },
  {
    note: '他の think 型の動詞は believe・guess・suppose・imagine です。Who do you suppose will win the game?（だれが勝つと思いますか）、How long do you think the trip will take?（旅行はどのくらいかかると思いますか）。',
    add: fresh(head('think 型の仲間'), ...rowb(['think', 'believe', 'guess', 'suppose', 'imagine'], 26, 28, C.green, FILL.green, 10, 10, 310, 4), bx(10, 66, 300, 28, 'Who do you suppose will win the game?', C.green, FILL.green, 11), bx(10, 100, 300, 28, 'How long do you think the trip will take?', C.green, FILL.green, 11), ...cap('疑問詞 ＋ do you 〇〇 ＋ 肯定文')),
  },
  {
    note: '疑問詞が主語のときは、do you think のあとに、すぐ動詞が続きます。Who do you think will win? の will win は、Who が主語の動詞です。does などは入れません。',
    add: fresh(head('疑問詞が主語のとき'), ...rowb(['Who', 'do you think', 'will win?'], 30, 34, C.green, FILL.green, 12, 10, 310, 6), lb(160, 86, 'Who が will win の主語', 12, C.ink, 'middle', true), ar(262, 68, 60, 68, C.main, true), lb(160, 114, '動詞がすぐ続く（Who will win?）', 11, C.gray, 'middle'), ...cap('do you think のあとに動詞', C.green)),
  },
  {
    note: '見分け方です。その動詞が「Yes／No で答えられる」ものなら know 型（疑問詞は途中）。Yes／No では答えにくく、疑問詞の内容を聞きたい think 型なら、疑問詞を文頭に出します。',
    add: fresh(...flow(['動詞は?', 'Yes／No で\n答えられる', 'know 型'], 22, { h: 50, size: 11, color: C.blue, fill: FILL.blue }).flat(), ...flow(['動詞は?', 'Yes／No で\n答えにくい', 'think 型'], 86, { h: 50, size: 11, color: C.green, fill: FILL.green }).flat(), ...cap('know、tell、ask は know 型')),
  },
  {
    note: 'まとめです。know 型は疑問詞が途中で、あとは肯定文の語順。think 型は疑問詞を文頭に出し、do you think のあとは肯定文の語順。think・believe・guess・suppose・imagine が think 型です。',
    add: fresh(bx(15, 14, 290, 30, 'know 型：Do you know where he lives?', C.blue, FILL.blue, 12), bx(15, 52, 290, 30, 'think 型：Where do you think he lives?', C.green, FILL.green, 12), bx(15, 90, 290, 30, 'どちらも、あとは肯定文の語順', C.red, FILL.red, 12), ...cap('疑問詞の位置を決める', C.green)),
  },
], 'think 型の間接疑問文');

// ───────── koko_eigo_15_free_writing 採点基準 ─────────
const e15: DiagramFigure = show([
  {
    note: '自由英作文（あるテーマについて意見や体験を英語で書く問題）は、主に三つの観点で採点されます。①内容（設問に正しく答えているか）、②構成（論理的に組み立てられているか）、③語彙・文法の正確さです。',
    add: [head('採点の 3 つの観点'), ...rowb(['① 内容\n設問に答える', '② 構成\n筋道が通る', '③ 正確さ\n語彙・文法'], 28, 62, C.blue, FILL.blue, 12), ...cap('この 3 つを意識して書く')],
  },
  {
    note: '①内容は、設問で聞かれたことに的確に答えているかです。たとえば「賛成か反対か」を聞かれているのに、理由を書かないと、大きく減点されます。',
    add: fresh(head('① 内容：聞かれたことに答える'), bx(15, 28, 290, 28, '設問：賛成？反対？理由は？', C.gray, FILL.gray, 12), bx(15, 66, 135, 40, '○ 意見＋理由を書く', C.green, FILL.green, 11), bx(170, 66, 135, 40, '× 理由がない', C.red, FILL.red, 11), ...cap('設問への的確な答え', C.green)),
  },
  {
    note: '②構成は、「意見→理由→具体例→まとめ」の流れがあるかです。この順に書くと、読む人に筋道が伝わります。',
    add: fresh(head('② 構成：筋道を立てる'), ...flow(['意見', '理由', '具体例', 'まとめ'], 30, { h: 44, size: 12, color: C.blue, fill: FILL.blue, gap: 14 }).flat(), lb(160, 98, 'I think … ／ First, … ／ For example, … ／ For these reasons, …', 10, C.ink, 'middle', true), ...cap('この順で書く', C.blue)),
  },
  {
    note: '❓③の語彙・文法は、どう採点されるのでしょう。→ 減点方式のことが多く、スペルミス・文法ミス・時制の誤りが、1つずつ引かれていきます。ミスが多いほど、点が下がります。',
    add: fresh(head('③ 正確さ：減点方式'), bx(20, 30, 280, 24, '最初は満点', C.green, FILL.green, 12), bx(20, 60, 240, 24, 'ミス 1 つ：−', C.main, FILL.warm, 12), bx(20, 90, 190, 24, 'ミス 2 つ：−−', C.red, FILL.red, 12), bx(20, 120, 140, 24, 'ミスが増えると下がる', C.red, FILL.red, 10), ...cap('ミスは 1 つずつ引かれる', C.red)),
  },
  {
    note: '❓では、難しい表現を使ったほうが得点が高いのでしょうか。→ いいえ。「難しい表現を使って1つ間違える」より、「簡単な表現で全部正確に書く」ほうが、高得点になりやすいです。内容が独創的でも、文法ミスが多ければ点は伸びません。',
    add: fresh(head('難しい表現 と 簡単で正確'), bx(30, 36, 80, 90, undefined, C.red, FILL.red), bx(190, 22, 80, 104, undefined, C.green, FILL.green), lb(70, 82, '難しい\nミスあり', 11, C.red, 'middle', true), lb(230, 76, '簡単\n全部正確', 11, C.green, 'middle', true), lb(70, 140, '点が伸びない', 10, C.red, 'middle'), lb(230, 140, '高得点', 10, C.green, 'middle', true), ...band(150, lb(160, 190, '正確さを最優先にする', 12, C.green, 'middle', true))),
  },
  {
    note: '満点を狙うより、「大きく減点されない」ことを優先します。①分からない単語は、知っている単語で言いかえる。②自信のない文法（仮定法・分詞構文など）は使わない。③1文を長くしすぎない。',
    add: fresh(head('大きく減点されないために'), bx(10, 26, 300, 28, '① 知らない単語は、知っている単語で言いかえる', C.blue, FILL.blue, 11), bx(10, 60, 300, 28, '② 自信のない文法は使わない', C.green, FILL.green, 11), bx(10, 94, 300, 28, '③ 1 文を長くしすぎない', C.red, FILL.red, 11), ...cap('主語と動詞がずれやすくなるから', C.red)),
  },
  {
    note: 'まとめです。自由英作文は、内容・構成・正確さの三つで採点される。正確さは減点方式なので、簡単な表現で全部正確に書くのが近道。分からない単語や自信のない文法は避ける。',
    add: fresh(bx(15, 14, 290, 30, '内容・構成・正確さ の 3 観点', C.blue, FILL.blue, 12), bx(15, 52, 290, 30, '正確さは減点方式 → 簡単で正確に', C.green, FILL.green, 12), bx(15, 90, 290, 30, '自信のない表現は使わない', C.red, FILL.red, 12), ...cap('大きく減点されない書き方', C.green)),
  },
], '自由英作文の採点基準');

// ───────── koko_eigo_16_functional_scenes 道案内 ─────────
const mapBase: E[] = [
  bx(0, 78, 320, 22, undefined, '#D6D3CD', '#EEECE7'),
  bx(160, 26, 22, 122, undefined, '#D6D3CD', '#EEECE7'),
  bx(128, 2, 84, 22, 'station', C.main, FILL.warm, 11),
  bx(20, 36, 88, 38, 'bank', C.gray, FILL.gray, 12),
  bx(20, 106, 88, 38, 'library', C.gray, FILL.gray, 12),
  bx(190, 36, 40, 38, 'flower\nshop', C.gray, FILL.gray, 9),
  bx(234, 36, 40, 38, 'museum', C.gray, FILL.gray, 9),
  bx(278, 36, 36, 38, 'bakery', C.gray, FILL.gray, 9),
  bx(190, 106, 124, 38, 'post office', C.gray, FILL.gray, 12),
  ci(22, 89, 8, 'You', C.blue, FILL.blue, 7),
];
const e16: DiagramFigure = show([
  {
    note: '道を尋ねるときの表現です。Excuse me. How can I get to the station?（すみません、駅へはどう行けばいいですか）。Could you tell me the way to the museum? とも言えます。',
    add: [head('道を尋ねる'), bx(10, 26, 300, 30, 'Excuse me. How can I get to the station?', C.blue, FILL.blue, 12), bx(10, 64, 300, 30, 'Could you tell me the way to the museum?', C.blue, FILL.blue, 12), bx(10, 102, 300, 30, 'Is there a post office near here?', C.blue, FILL.blue, 12), ...cap('まず Excuse me. で声をかける')],
  },
  {
    note: 'この地図で道案内を聞きましょう。あなた（You）は左はしにいて、駅（station）を探しています。道は、横にのびる大通りと、駅へ向かう縦の道があります。',
    add: fresh(...mapBase, ...cap('地図を見ながら聞く', C.ink)),
  },
  {
    note: 'まず、Go straight along this street.（この道をまっすぐ行ってください）。矢印のように、大通りを進みます。Go straight for two blocks. なら、2区画分です。',
    add: [ar(32, 89, 156, 89, C.blue), ...band(150, lb(160, 190, 'Go straight along this street.', 12, C.blue, 'middle', true))],
  },
  {
    note: '次に、Turn left at the corner.（角を左に曲がってください）。進む向きから見て左に曲がると、駅へ向かう縦の道に入ります。動作の指示は、動詞 turn を使います。',
    add: [ar(171, 89, 171, 30, C.red), ...band(150, lb(160, 190, 'Turn left at the corner.', 12, C.red, 'middle', true))],
  },
  {
    note: '❓場所はどう説明するのでしょう。→ It\'s on your left.（あなたの左手にあります）。進む向きから見て左側の位置を言います。この地図では、歩いている間、bank は左手（上側）にあります。',
    add: fresh(...mapBase, ar(32, 89, 156, 89, C.blue), ln(60, 76, 60, 76, C.red), bx(20, 36, 88, 38, 'bank', C.red, FILL.red, 12), ...band(150, lb(160, 175, 'The bank is on your left.', 12, C.red, 'middle', true), lb(160, 205, '進む向きから見た左側', 11, C.gray, 'middle'))),
  },
  {
    note: '位置を表す言葉は、ほかにもあります。It\'s next to the bank.（銀行の隣）、It\'s across from the library.（図書館の向かい）。bank の向かい側（道をはさんだ反対側）に library があります。',
    add: fresh(...mapBase, bx(20, 36, 88, 38, 'bank', C.green, FILL.green, 12), bx(20, 106, 88, 38, 'library', C.red, FILL.red, 12), ar(64, 78, 64, 104, C.red, true), ...band(150, lb(160, 175, 'The library is across from the bank.', 12, C.red, 'middle', true), lb(160, 205, 'across from ＝ 道をはさんで向かい', 11, C.gray, 'middle'))),
  },
  {
    note: 'It\'s between the flower shop and the bakery.（花屋とパン屋の間にあります）。museum は、二つの店にはさまれています。It\'s around the corner.（角を曲がったところにあります）という言い方もよく使います。',
    add: fresh(...mapBase, bx(190, 36, 40, 38, 'flower\nshop', C.green, FILL.green, 9), bx(278, 36, 36, 38, 'bakery', C.green, FILL.green, 9), bx(234, 36, 40, 38, 'museum', C.red, FILL.red, 9), ...band(150, lb(160, 175, 'The museum is between the flower shop', 11, C.red, 'middle', true), lb(160, 200, 'and the bakery.', 11, C.red, 'middle', true))),
  },
  {
    note: '❓turn left と on your left は、どうちがうのでしょう。→ turn left は「左に曲がる」という動作、on your left は「左手にある」という位置です。混同しないようにしましょう。You can\'t miss it.（すぐに分かりますよ）は、目印になるから見逃さない、という意味です。',
    add: fresh(head('動作 と 位置'), bx(10, 28, 145, 50, 'Turn left.\n左に曲がる', C.red, FILL.red, 12), bx(165, 28, 145, 50, 'on your left\n左手にある', C.blue, FILL.blue, 12), lb(82, 96, '動作（動詞）', 11, C.red, 'middle', true), lb(237, 96, '位置（場所）', 11, C.blue, 'middle', true), lb(160, 124, 'You can\'t miss it. ＝ すぐ分かるよ', 11, C.gray, 'middle'), ...cap('動作と位置を分けて聞く')),
  },
  {
    note: 'まとめです。道案内の会話は、地図を見て答える形式が多いです。放送を聞きながら、地図に矢印や印をつけると正解しやすくなります。動作（Go straight・Turn left）と位置（on your left・next to・across from・between）を分けて聞きましょう。',
    add: fresh(bx(15, 14, 290, 30, '動作：Go straight ／ Turn left ／ Cross', C.red, FILL.red, 12), bx(15, 52, 290, 30, '位置：on your left ／ next to ／ across from', C.blue, FILL.blue, 11), bx(15, 90, 290, 30, '聞きながら地図に矢印をかく', C.green, FILL.green, 12), ...cap('動作と位置を分けて聞く', C.green)),
  },
], '道案内の表現');

// ───────── koko_eigo_17_eiken_expressions used to ─────────
const e17: DiagramFigure = show([
  {
    note: 'used to の形は三つあり、形が似ているので、入試でよく混同を狙われます。①used to＋原形、②be used to＋-ing／名詞、③get used to＋-ing／名詞。意味はまったくちがいます。',
    add: [head('似ているけれど、意味はちがう'), bx(10, 26, 300, 28, '① used to ＋ 原形', C.blue, FILL.blue, 12), bx(10, 60, 300, 28, '② be used to ＋ -ing／名詞', C.green, FILL.green, 12), bx(10, 94, 300, 28, '③ get used to ＋ -ing／名詞', C.red, FILL.red, 12), ...cap('to のあとが、見分けの決め手')],
  },
  {
    note: '①used to＋原形は、「以前は〜だった」「〜したものだ」と、過去の習慣や状態を表します。今はもう、ちがいます。I used to play soccer every day. は、以前は毎日サッカーをしていたが、今はしていない、という意味です。',
    add: fresh(head('① used to ＋ 原形：以前は〜だった'), ln(20, 70, 300, 70, C.gray), ar(290, 70, 306, 70, C.gray), ln(30, 70, 150, 70, C.blue, false, 6), lb(90, 52, '以前は毎日サッカー', 11, C.blue, 'middle', true), ci(240, 70, 6, undefined, C.red, FILL.red), lb(240, 52, '今は…', 11, C.red, 'middle', true), lb(240, 90, 'していない', 11, C.red, 'middle'), bx(40, 108, 240, 28, 'I used to play soccer every day.', C.blue, FILL.blue, 12), ...cap('今は違う、という対比がある', C.blue)),
  },
  {
    note: '❓would でも過去の習慣を表せるのに、なぜ used to を使うのでしょう。→ would は動作の繰り返しにしか使えず、状態には使えないからです。I would visit my grandmother every summer.（動作）は OK。I used to be a shy boy.（状態）は used to を使います。',
    add: fresh(head('would は動作だけ、used to は状態もOK'), bx(10, 28, 300, 28, '○ I would visit my grandmother every summer.', C.green, FILL.green, 10), bx(10, 62, 300, 28, '× I would be a shy boy.（状態）', C.red, FILL.red, 11), bx(10, 96, 300, 28, '○ I used to be a shy boy.', C.green, FILL.green, 12), ...cap('状態には used to', C.green)),
  },
  {
    note: '②be used to＋-ing／名詞は、「〜に慣れている」という今の状態です。He is used to living in Japan.（彼は日本に住むことに慣れている）。この used は「慣れている」という意味の形容詞で、あとには -ing か名詞が来ます。',
    add: fresh(head('② be used to ＋ -ing：慣れている'), ...rowb(['He', 'is used to', 'living in Japan.'], 30, 34, C.green, FILL.green, 12, 10, 310, 6), lb(160, 86, '今、慣れている（状態）', 12, C.green, 'middle', true), lb(160, 110, 'to のあとは -ing か名詞（原形ではない）', 11, C.ink, 'middle'), ...cap('慣れている ＝ be used to', C.green)),
  },
  {
    note: '③get used to＋-ing／名詞は、「〜に慣れる」という変化です。I will get used to this new school soon.（すぐにこの新しい学校に慣れるだろう）。慣れていない状態から、慣れている状態へ変わる動きを表します。',
    add: fresh(head('③ get used to ＋ 名詞：慣れる'), bx(15, 28, 120, 36, 'まだ慣れていない', C.gray, FILL.gray, 11), ar(138, 46, 182, 46, C.red), lb(160, 36, 'get', 12, C.red, 'middle', true), bx(185, 28, 120, 36, '慣れている\n(be used to)', C.green, FILL.green, 10), lb(160, 92, 'I will get used to this new school soon.', 11, C.ink, 'middle', true), ...cap('慣れる ＝ get used to', C.red)),
  },
  {
    note: '❓見分けるには、どうすればよいでしょう。→ to のあとを見ます。原形が来たら①used to（以前は〜だった）。-ing か名詞が来たら、be／get used to（慣れている／慣れる）です。be か get かは、状態か変化かで決まります。',
    add: fresh(...flow(['to の\nあとは?', '原形', 'used to\n以前は〜'], 22, { h: 50, size: 11, color: C.blue, fill: FILL.blue }).flat(), ...flow(['to の\nあとは?', '-ing／名詞', 'be／get\nused to'], 86, { h: 50, size: 11, color: C.green, fill: FILL.green }).flat(), ...cap('to の後ろを必ず確かめる')),
  },
  {
    note: '三つを並べてまとめます。He used to live in Osaka.（以前は大阪に住んでいた）、He is used to living in Osaka.（大阪に住むことに慣れている）、He got used to living in Osaka.（大阪に住むことに慣れた）。動詞の形がちがうだけで、意味が大きく変わります。',
    add: fresh(head('三つを比べる'), bx(10, 26, 300, 28, 'He used to live in Osaka.　以前は住んでいた', C.blue, FILL.blue, 10), bx(10, 60, 300, 28, 'He is used to living in Osaka.　慣れている', C.green, FILL.green, 10), bx(10, 94, 300, 28, 'He got used to living in Osaka.　慣れた', C.red, FILL.red, 10), ...cap('live ／ living で見分ける')),
  },
  {
    note: 'まとめです。used to＋原形は「以前は〜だった」。be used to＋-ing／名詞は「慣れている」。get used to＋-ing／名詞は「慣れる」。to のあとが原形か、-ing・名詞かを、必ず確かめましょう。',
    add: fresh(bx(15, 14, 290, 30, 'used to ＋ 原形 ＝ 以前は〜だった', C.blue, FILL.blue, 12), bx(15, 52, 290, 30, 'be used to ＋ -ing ＝ 慣れている', C.green, FILL.green, 12), bx(15, 90, 290, 30, 'get used to ＋ -ing ＝ 慣れる', C.red, FILL.red, 12), ...cap('to のあとを確かめる', C.green)),
  },
], 'used to ・ be used to ・ get used to');

// ───────── koko_eigo_18_question_types 内容一致のひっかけ ─────────
const pairRow = (y: number, left: string, right: string, lc: string = C.blue, rc: string = C.red): E[] => [bx(10, y, 142, 34, left, lc, FILL.blue, 10), lb(160, y + 17, '→', 14, C.main, 'middle', true), bx(168, y, 142, 34, right, rc, FILL.red, 10)];
const e18: DiagramFigure = show([
  {
    note: '内容一致問題の選択肢は、本文と一見似ているのに、微妙にちがうものが並びます。代表的な「ひっかけ」の型を知っておくと、選ぶ速さと正しさが上がります。',
    add: [head('内容一致のひっかけ 5 型'), ...rowb(['① 数値', '② 因果'], 26, 26, C.red, FILL.red, 12, 10, 310, 6), ...rowb(['③ 一部だけ', '④ 言い過ぎ', '⑤ 書いてない'], 58, 26, C.red, FILL.red, 11, 10, 310, 6), ...cap('本文と照らして見破る')],
  },
  {
    note: '①数値のすり替え。本文が「about 30% of students」なのに、選択肢が「40% of students」になっている型です。数字や割合は、本文と一字ずつ照らし合わせましょう。',
    add: fresh(head('① 数値のすり替え'), ...pairRow(28, '本文\nabout 30% of students', '選択肢\n40% of students'), lb(160, 90, '数字が本文とちがう → ×', 12, C.red, 'middle', true), ...cap('数字は本文で確かめる', C.red)),
  },
  {
    note: '②因果関係の逆転。本文が「A because of B」（Bが原因、Aが結果）なのに、選択肢が「B because of A」と、原因と結果を入れかえている型です。どちらが原因かを確かめます。',
    add: fresh(head('② 因果関係の逆転'), ...pairRow(28, '本文\nA because of B', '選択肢\nB because of A'), ...[ar(40, 74, 100, 74, C.blue), lb(70, 90, '原因 ← B', 10, C.blue, 'middle')], lb(160, 118, '原因と結果が逆 → ×', 12, C.red, 'middle', true), ...cap('何が原因かを確かめる', C.red)),
  },
  {
    note: '③部分的真実と、④言い過ぎ。本文の一部分だけを取り出して、全体としては誤りにした選択肢が③。本文の「some students think」を「all students think」と断定しすぎたのが④です。',
    add: fresh(head('③ 一部だけ正しい ／ ④ 言い過ぎ'), ...pairRow(26, '本文\nsome students think', '選択肢\nall students think'), bx(10, 76, 300, 34, '本文の一部だけを取り出して、全体を言いきる → ×', C.red, FILL.red, 11), ...cap('範囲がずれていないか見る', C.red)),
  },
  {
    note: '⑤Not mentioned（本文に書かれていない）。もっともらしく作られていても、本文に書いていない情報は不正解です。「本文のどこにも根拠がない」ときは、そこで×にします。',
    add: fresh(head('⑤ 本文に書かれていない'), bx(15, 28, 290, 34, '選択肢：もっともらしい内容', C.gray, FILL.gray, 12), ar(160, 64, 160, 84, C.main), bx(15, 88, 290, 34, '本文のどこにも根拠がない → ×', C.red, FILL.red, 12), ...cap('根拠が本文にあるか', C.red)),
  },
  {
    note: '❓どんな語に気をつけるとよいでしょうか。→ all・always・never・only・every のような「極端な語」を含む選択肢です。本文の実際のニュアンスとずれていることが多いので、特に念入りに照合します。',
    add: fresh(head('極端な語に注意', C.red), ...rowb(['all', 'always', 'never', 'only', 'every'], 28, 34, C.red, FILL.red, 12, 10, 310, 5), lb(160, 86, 'この語があったら、本文と念入りに照合', 12, C.ink, 'middle', true), lb(160, 110, 'some → all、often → always はずれやすい', 11, C.gray, 'middle'), ...cap('言い過ぎのサイン', C.red)),
  },
  {
    note: '❓選択肢の語が本文と同じなら、正解でしょうか。→ いいえ。選択肢は本文の言葉をそのまま使わず、同じ意味の別の言葉で書かれることが多いです。surprised at が unexpected に、many people が a lot of people に変わる例を見ましょう。',
    add: fresh(head('言いかえ（パラフレーズ）を見抜く'), bx(10, 26, 300, 30, '本文　Many people were surprised at the result.', C.blue, FILL.blue, 10), ar(160, 58, 160, 74, C.main), bx(10, 78, 300, 30, '選択肢　The result was unexpected for a lot of people.', C.green, FILL.green, 10), lb(160, 128, 'surprised at ＝ unexpected、many ＝ a lot of', 11, C.ink, 'middle', true), ...cap('語ではなく「意味」が一致しているか', C.green)),
  },
  {
    note: '消去法で選びます。①本文に明確に反する選択肢を消す。②本文に書かれていない選択肢を消す。③一部だけ正しい・言い過ぎの選択肢を消す。④最後に残ったものを本文と照合して確定する。明らかにおかしいものから素早く消していくのがコツです。',
    add: fresh(bx(10, 22, 300, 24, '① 本文に反するものを消す', C.blue, FILL.blue, 11), bx(10, 50, 300, 24, '② 本文に書かれていないものを消す', C.blue, FILL.blue, 11), bx(10, 78, 300, 24, '③ 一部だけ・言い過ぎを消す', C.blue, FILL.blue, 11), bx(10, 106, 300, 24, '④ 残った 1 つを本文と照合する', C.green, FILL.green, 11), ...cap('引き算で選ぶ', C.blue)),
  },
  {
    note: 'まとめです。ひっかけは、数値・因果・一部だけ・言い過ぎ・書いていない、の五型。all などの極端な語に注意。言いかえは、語ではなく意味で判断する。消去法で、明らかにおかしいものから消していく。',
    add: fresh(bx(15, 14, 290, 30, '5 型：数値・因果・一部・言い過ぎ・なし', C.red, FILL.red, 12), bx(15, 52, 290, 30, '言いかえは「意味」で判断する', C.blue, FILL.blue, 12), bx(15, 90, 290, 30, '明らかにおかしい選択肢から消す', C.green, FILL.green, 12), ...cap('本文と照らして選ぶ', C.green)),
  },
], '内容一致問題のひっかけ');

// ───────── koko_eigo_19_dialogue_reading 発言選択型 ─────────
const bubA = (y: number, t: string, color: string = C.blue, fill: string = FILL.blue, size = 10): E[] => [lb(8, y + 14, 'A', 12, C.blue, 'start', true), bx(24, y, 230, 28, t, color, fill, size)];
const bubB = (y: number, t: string, color: string = C.green, fill: string = FILL.green, size = 10): E[] => [bx(66, y, 230, 28, t, color, fill, size), lb(306, y + 14, 'B', 12, C.green, 'end', true)];
const e19: DiagramFigure = show([
  {
    note: '対話文の空所補充は、「次の発言」から逆算するのがいちばん効果的です。空所の前だけでなく、直後の発言がどう応じているかを手がかりにします。',
    add: [head('空所の「あと」を見る'), ...bubA(24, 'Would you like some more coffee?'), ...bubB(60, '（　　空所　　）', C.red, FILL.red, 12), ...bubA(96, 'OK, I\'ll bring you some tea instead.'), ...cap('直後の発言から逆算する')],
  },
  {
    note: '解く手順です。①空所の直前の発言を確認する。②空所の直後の発言を確認する（それにどう応じているか）。③直後と自然につながる内容を選ぶ。④選択肢の文末（疑問文・提案・断りなど）が、直後と矛盾しないか確かめる。',
    add: fresh(head('解く手順'), bx(10, 24, 300, 24, '① 直前の発言を確認する', C.blue, FILL.blue, 11), bx(10, 52, 300, 24, '② 直後の発言を確認する', C.red, FILL.red, 11), bx(10, 80, 300, 24, '③ 直後と自然につながるものを選ぶ', C.green, FILL.green, 11), bx(10, 108, 300, 24, '④ 文末が直後と矛盾しないか確かめる', C.purple, FILL.purple, 11), ...cap('「直後」が決め手', C.red)),
  },
  {
    note: '❓直後の発言から、何が分かるでしょう。→ A は「代わりに紅茶を持ってきます」と言っています。「代わりに」ということは、B はコーヒーを断ったのです。',
    add: fresh(...bubA(14, 'Would you like some more coffee?'), ...bubB(48, '（　　空所　　）', C.red, FILL.red, 12), ...bubA(82, 'OK, I\'ll bring you some tea instead.', C.red, FILL.red), ar(160, 80, 160, 78, C.red), lb(160, 128, '「代わりに紅茶」＝ コーヒーは断った', 12, C.red, 'middle', true), ...cap('instead がヒント', C.red)),
  },
  {
    note: '答えは No, thank you. I don\'t really like coffee. です。断る言葉が入ると、直後の「代わりに紅茶を持ってきます」と自然につながります。',
    add: fresh(...bubA(14, 'Would you like some more coffee?'), ...bubB(48, 'No, thank you. I don\'t really like coffee.', C.green, FILL.green, 10), ...bubA(82, 'OK, I\'ll bring you some tea instead.'), lb(160, 130, '断る → 代わりを出す、で話がつながる', 12, C.green, 'middle', true), ...cap('直後と矛盾しない選択肢', C.green)),
  },
  {
    note: '❓Yes, please. では、なぜだめなのでしょう。→ 選択肢だけを見ると自然な返事でも、直後が「代わりに紅茶を持ってきます」だと話がつながらないからです。選択肢が単独で正しくても、前後と合わなければ不正解です。',
    add: fresh(...bubA(14, 'Would you like some more coffee?'), ...bubB(48, 'Yes, please.', C.red, FILL.red, 12), ...bubA(82, 'OK, I\'ll bring you some tea instead.'), lb(160, 128, '× 「紅茶に変える」理由がない', 12, C.red, 'middle', true), ...cap('単独で自然でも、つながらなければ×', C.red)),
  },
  {
    note: '選択肢が全部 Yes／No で始まるときは、先に質問の種類を確認します。疑問詞のついた疑問文には、Yes／No で答える選択肢は基本的に不正解です。Where did you buy that bag? に No, I didn\'t. は成り立ちません。',
    add: fresh(head('質問の種類を先に確認'), bx(15, 26, 290, 28, 'Where did you buy that bag?', C.blue, FILL.blue, 12), bx(15, 62, 290, 28, '× No, I didn\'t.', C.red, FILL.red, 12), bx(15, 98, 290, 28, '○ At a shop near the station.', C.green, FILL.green, 12), ...cap('疑問詞の質問には、具体的に答える', C.green)),
  },
  {
    note: 'まとめです。対話文の空所は、直後の発言から逆算する。選択肢は、直後と矛盾しないかを確かめる。疑問詞のついた質問には、Yes／No で答える選択肢は選ばない。',
    add: fresh(bx(15, 14, 290, 30, '空所の直後の発言から逆算する', C.red, FILL.red, 12), bx(15, 52, 290, 30, '直後と矛盾しないかを確かめる', C.green, FILL.green, 12), bx(15, 90, 290, 30, '疑問詞の質問には Yes／No で答えない', C.blue, FILL.blue, 12), ...cap('前後の流れを大事に', C.green)),
  },
], '対話文の空所補充（発言選択型）');

// ───────── koko_eigo_20_translation_patterns 使役 ─────────
const caus = (s: string, o: string, mark: string, color: string, fill: string, ex: string, y = 28): E[] => [bx(10, y, 80, 40, s, color, fill, 11), ar(94, y + 20, 214, y + 20, color), lb(154, y + 8, mark, 11, color, 'middle', true), bx(218, y, 92, 40, o, C.gray, FILL.gray, 11), lb(160, y + 62, ex, 11, C.ink, 'middle', true)];
const e20: DiagramFigure = show([
  {
    note: '日本語の「〜させる」「〜してもらう」は、場面によって英語では動詞が変わります。make・have・let・get の四つです。ちがいは、「どんな気持ちで、相手にさせるか」です。',
    add: [head('「〜させる」の 4 つの動詞'), ...rowb(['make\n強制', 'have\n当然・依頼', 'let\n許可', 'get\n説得'], 26, 60, C.blue, FILL.blue, 11, 10, 310, 6), ...cap('日本語の文脈で見分ける')],
  },
  {
    note: 'make＋O＋原形は、「（強制的に）〜させる」です。My mother made me clean my room.（母は私に部屋を掃除させた）。いやでも、させる感じがあります。',
    add: fresh(head('make：強制的にさせる'), ...caus('My mother', 'me', 'made', C.red, FILL.red, 'My mother made me clean my room.'), ...cap('make ＋ O ＋ 原形', C.red)),
  },
  {
    note: 'have＋O＋原形は、「（当然のこととして）〜してもらう・させる」です。I had my brother carry the bag.（弟に鞄を運んでもらった）。頼んで当たり前、という感じです。',
    add: fresh(head('have：当然のこととして頼む'), ...caus('I', 'my brother', 'had', C.blue, FILL.blue, 'I had my brother carry the bag.'), ...cap('have ＋ O ＋ 原形', C.blue)),
  },
  {
    note: 'let＋O＋原形は、「許可して〜させてあげる」です。My father let me use his car.（父は私に車を使わせてくれた）。相手がしたいことを、認めるのが let です。',
    add: fresh(head('let：許可してやらせる'), ...caus('My father', 'me', 'let', C.green, FILL.green, 'My father let me use his car.'), ...cap('let ＋ O ＋ 原形', C.green)),
  },
  {
    note: '❓get だけ、形がちがうのはなぜでしょう。→ get は「説得してさせる」ので、相手が動くまでに働きかけが必要で、to 不定詞（to＋動詞）を使います。She got her son to clean his room.（彼女は息子を説得して部屋を掃除させた）。',
    add: fresh(head('get：説得して、to ＋ 動詞'), ...caus('She', 'her son', 'got', C.purple, FILL.purple, 'She got her son to clean his room.'), lb(160, 128, 'to が必要！　make・have・let は to なし', 11, C.red, 'middle', true), ...cap('get ＋ O ＋ to 不定詞', C.purple)),
  },
  {
    note: '形をまとめると、make・have・let のあとは原形、get のあとは to 不定詞です。To をつけまちがえないようにしましょう。',
    add: fresh(head('形のちがい'), bx(10, 26, 300, 28, 'make／have／let ＋ O ＋ 原形', C.blue, FILL.blue, 12), bx(10, 60, 300, 28, 'get ＋ O ＋ to 不定詞', C.purple, FILL.purple, 12), lb(160, 112, '× My mother made me to clean my room.', 12, C.red, 'middle', true), ...cap('to の有無で見分ける')),
  },
  {
    note: '❓「髪を切ってもらう」「バッグを盗まれる」は、どう言うのでしょう。→ have／get＋O＋過去分詞です。I had my hair cut yesterday.（昨日髪を切ってもらった）、She had her bag stolen.（バッグを盗まれた）。',
    add: fresh(head('have／get ＋ O ＋ 過去分詞'), bx(10, 26, 300, 28, 'I had my hair cut yesterday.　切ってもらった', C.blue, FILL.blue, 10), bx(10, 60, 300, 28, 'I got my bike fixed at the shop.　直してもらった', C.green, FILL.green, 10), bx(10, 94, 300, 28, 'She had her bag stolen on the train.　盗まれた', C.red, FILL.red, 10), ...cap('してもらう・被害', C.ink)),
  },
  {
    note: '❓原形か、過去分詞か、どう決めるのでしょう。→ O と動詞の関係で決めます。my brother は「運ぶ」側なので原形（能動）。my hair は「切られる」側なので過去分詞（受動）。自分でするのか、される側なのかを見ます。',
    add: fresh(head('O と動詞の関係'), bx(10, 26, 145, 34, 'my brother carry', C.blue, FILL.blue, 12), bx(165, 26, 145, 34, 'my hair cut', C.red, FILL.red, 12), lb(82, 78, '弟が運ぶ（能動）', 12, C.blue, 'middle', true), lb(237, 78, '髪は切られる（受動）', 12, C.red, 'middle', true), lb(82, 102, '→ 原形', 13, C.blue, 'middle', true), lb(237, 102, '→ 過去分詞', 13, C.red, 'middle', true), ...cap('する側か、される側か')),
  },
  {
    note: 'まとめです。強制は make、当然は have、許可は let、説得は get。make・have・let のあとは原形、get は to 不定詞。してもらう・被害は have／get＋O＋過去分詞。O が「する」側なら原形、「される」側なら過去分詞。',
    add: fresh(bx(15, 12, 290, 28, 'make 強制 ／ have 当然 ／ let 許可 ／ get 説得', C.blue, FILL.blue, 10), bx(15, 46, 290, 28, 'make・have・let ＋ 原形、get ＋ to', C.green, FILL.green, 11), bx(15, 80, 290, 28, 'してもらう・被害 ＝ have／get ＋ O ＋ 過去分詞', C.red, FILL.red, 10), bx(15, 114, 290, 28, 'O が「する」→ 原形、「される」→ 過去分詞', C.purple, FILL.purple, 10), ...cap('日本語の気持ちで選ぶ', C.green)),
  },
], '「〜させる」「〜してもらう」の訳し分け');

// ───────── koko_eigo_21_passive_advanced 原形不定詞の受動態 ─────────
const a1 = chips(['I', 'saw', 'him', 'enter', 'the room.'], 30, C.blue, FILL.blue, 10, 12, 28);
const p1 = chips(['He', 'was seen', 'to', 'enter', 'the room.'], 96, C.green, FILL.green, 10, 12, 28);
const e21: DiagramFigure = show([
  {
    note: '知覚動詞（see・hear・feel）の文を受動態にすると、能動態にはなかった to が現れます。入試で最重要の変化点です。まず、能動態を確認しましょう。I saw him enter the room.（彼が部屋に入るのを見た）。enter は原形です。',
    add: [head('能動態：動詞の原形'), ...a1.els, lb(160, 76, 'saw ＋ him ＋ 原形（enter）', 12, C.blue, 'middle', true), ...cap('see ＋ O ＋ 原形')],
  },
  {
    note: '受動態にします。①目的語 him を主語 He にする。②saw を was seen にする。③原形 enter の前に to をつける。→ He was seen to enter the room.（彼は部屋に入るのを見られた）。',
    add: fresh(head('能動態 → 受動態'), ...a1.els, ar(160, 62, 160, 92, C.main), ...p1.els, bx(p1.xs[2] - 2, 94, p1.ws[2] + 4, 32, undefined, C.red, FILL.red), lb(p1.xs[2] + p1.ws[2] / 2, 112, 'to', 13, C.red, 'middle', true), ...band(150, lb(160, 175, 'He was seen to enter the room.', 13, C.green, 'middle', true), lb(160, 205, '原形 enter の前に to が出る', 11, C.red, 'middle', true))),
  },
  {
    note: '❓なぜ to が出るのでしょう。→ 能動態では、see などの直後に置く形のときだけ to を落とす決まりです。受動態では動詞が was seen と形を変えるので、ふつうの to 不定詞の形にもどる、と覚えておきましょう。「能動は原形、受動は to＋動詞」と、セットで暗記します。',
    add: fresh(head('能動と受動でセットで覚える'), bx(15, 28, 135, 40, '能動態\nsaw him enter', C.blue, FILL.blue, 12), bx(170, 28, 135, 40, '受動態\nwas seen to enter', C.green, FILL.green, 11), ar(152, 48, 168, 48, C.main), lb(160, 96, '能動は原形、受動は to ＋ 動詞', 13, C.red, 'middle', true), ...cap('to が「出現」する', C.red)),
  },
  {
    note: 'hear でも同じです。They heard her sing a song. → She was heard to sing a song.（彼女は歌を歌うのを聞かれた）。see・hear・feel などの知覚動詞は、みんな同じ型です。',
    add: fresh(head('hear も同じ型'), bx(10, 28, 300, 30, 'They heard her sing a song.', C.blue, FILL.blue, 12), ar(160, 60, 160, 78, C.main), bx(10, 82, 300, 30, 'She was heard to sing a song.', C.green, FILL.green, 12), ...cap('see・hear・feel は同じ型', C.green)),
  },
  {
    note: '❓-ing の形のときは、どうなるのでしょう。→ 進行中の動作を表す -ing 形は、そのまま使います。I saw him crossing the street. → He was seen crossing the street. to が必要なのは、原形の場合だけです。',
    add: fresh(head('-ing なら to はいらない'), bx(10, 28, 300, 30, 'I saw him crossing the street.', C.blue, FILL.blue, 12), ar(160, 60, 160, 78, C.main), bx(10, 82, 300, 30, 'He was seen crossing the street.', C.green, FILL.green, 12), lb(160, 128, 'to が必要なのは、原形のときだけ', 12, C.red, 'middle', true), ...cap('-ing はそのまま')),
  },
  {
    note: '使役動詞の make も同じです。His mother made him clean his room. → He was made to clean his room.（彼は部屋を掃除させられた）。make＋O＋原形が、be made to＋原形になります。',
    add: fresh(head('make も to が出る'), bx(10, 28, 300, 30, 'His mother made him clean his room.', C.blue, FILL.blue, 12), ar(160, 60, 160, 78, C.main), bx(10, 82, 300, 30, 'He was made to clean his room.', C.green, FILL.green, 12), lb(160, 128, 'be made to ＋ 原形', 13, C.red, 'middle', true), ...cap('make ＋ O ＋ 原形 → be made to', C.green)),
  },
  {
    note: '❓have と let は、受動態にしないのでしょうか。→ ほとんど使いません。let の受動態は英語として不自然になるので、入試では出ません。「許可された」は、He was allowed to use the computer. のように allow で言いかえます。',
    add: fresh(head('have・let は受動態にしない'), bx(15, 28, 135, 34, 'have ／ let の受動態', C.gray, FILL.gray, 11), bx(170, 28, 135, 34, 'ほとんど使わない', C.red, FILL.red, 12), ar(160, 66, 160, 84, C.main), bx(15, 88, 290, 30, 'He was allowed to use the computer.', C.green, FILL.green, 11), ...cap('let は allow で言いかえる', C.green)),
  },
  {
    note: 'まとめです。知覚動詞と make の SVOC は、受動態にすると原形に to がつく。-ing 形はそのまま。have・let は受動態にせず、allow などで言いかえる。「能動は原形、受動は to＋動詞」とセットで覚えましょう。',
    add: fresh(bx(15, 14, 290, 30, '知覚動詞・make：受動態で to が出る', C.red, FILL.red, 12), bx(15, 52, 290, 30, '-ing 形は、そのまま', C.blue, FILL.blue, 12), bx(15, 90, 290, 30, 'have・let は受動態にしない（allow）', C.green, FILL.green, 12), ...cap('能動は原形、受動は to ＋ 動詞', C.green)),
  },
], '知覚動詞・使役動詞の受動態');

// ───────── koko_eigo_22_verb_patterns SVOO と SVO＋to/for ─────────
const v1 = chips(['He', 'gave', 'me', 'a present.'], 30, C.blue, FILL.blue, 10, 13, 30);
const v2 = chips(['He', 'gave', 'a present', 'to', 'me.'], 96, C.green, FILL.green, 10, 13, 30);
const e22: DiagramFigure = show([
  {
    note: '「人に物を〜する」という SVOO の文は、物を先に出して、前置詞（to か for）を使った SVO の形に書きかえられます。He gave me a present. = He gave a present to me.',
    add: [head('SVOO ⇔ SVO ＋ to／for'), ...v1.els, lb(160, 80, '人（me）→ 物（a present）の順', 12, C.blue, 'middle', true), ...cap('He gave me a present.')],
  },
  {
    note: '書きかえの手順です。①物（a present）を前に出す。②人（me）をうしろに回す。③人の前に前置詞（to）を置く。これで SVO＋to の形になります。',
    add: fresh(head('人と物を入れかえ、前置詞をつける'), ...v1.els, ar(160, 64, 160, 92, C.main), ...v2.els, bx(v2.xs[3] - 1, 94, v2.ws[3] + 2, 34, undefined, C.red, FILL.red), lb(v2.xs[3] + v2.ws[3] / 2, 111, 'to', 14, C.red, 'middle', true), ...band(150, lb(160, 175, 'He gave a present to me.', 13, C.green, 'middle', true), lb(160, 205, '人の前に to を置く', 11, C.red, 'middle', true))),
  },
  {
    note: '❓to と for は、どう使い分けるのでしょう。→ 動詞のイメージで決まります。物が実際に相手に届く・伝わる動詞は to。相手のために（代わりに）何かをする動詞は for です。',
    add: fresh(head('to と for のイメージ'), bx(10, 26, 145, 56, 'to\n物が相手に\n届く・伝わる', C.blue, FILL.blue, 12), bx(165, 26, 145, 56, 'for\n相手のために\nしてあげる', C.green, FILL.green, 12), lb(82, 102, '渡す・伝える', 11, C.blue, 'middle'), lb(237, 102, '買う・作る', 11, C.green, 'middle'), ...cap('動詞のイメージで選ぶ')),
  },
  {
    note: 'to を使う動詞は、give・show・teach・tell・send・lend・pass・write です。She teaches us English. → She teaches English to us.（私たちに英語を教える）。I\'ll send you the photos. → I\'ll send the photos to you.',
    add: fresh(head('to のグループ'), ...rowb(['give', 'show', 'teach', 'tell'], 26, 28, C.blue, FILL.blue, 12, 10, 310, 6), ...rowb(['send', 'lend', 'pass', 'write'], 58, 28, C.blue, FILL.blue, 12, 10, 310, 6), lb(160, 110, 'She teaches English to us.', 12, C.ink, 'middle', true), lb(160, 132, 'I\'ll send the photos to you.', 12, C.ink, 'middle', true), ...cap('届く・伝わる動詞は to', C.blue)),
  },
  {
    note: 'for を使う動詞は、buy・make・cook・get・find・choose です。My father bought me a bike. → My father bought a bike for me.（私のために自転車を買った）。She made him a cake. → She made a cake for him.',
    add: fresh(head('for のグループ'), ...rowb(['buy', 'make', 'cook'], 26, 28, C.green, FILL.green, 12, 10, 310, 6), ...rowb(['get', 'find', 'choose'], 58, 28, C.green, FILL.green, 12, 10, 310, 6), lb(160, 110, 'My father bought a bike for me.', 12, C.ink, 'middle', true), lb(160, 132, 'She made a cake for him.', 12, C.ink, 'middle', true), ...cap('相手のために行う動詞は for', C.green)),
  },
  {
    note: 'ask だけは特別で、to でも for でもなく of を使います。I asked him a favor. → I asked a favor of him.（彼にお願いをした）。「お願い（物・こと）を、彼に求める」という意味の動詞なので、to・for とはちがう of になります。',
    add: fresh(head('ask は of'), bx(10, 28, 300, 30, 'I asked him a favor.', C.blue, FILL.blue, 13), ar(160, 60, 160, 78, C.main), bx(10, 82, 300, 30, 'I asked a favor of him.', C.red, FILL.red, 13), ...cap('ask だけは of', C.red)),
  },
  {
    note: '❓代名詞のときは、どうなるのでしょう。→ 物が代名詞（it・them）のときは、SVO＋前置詞の形にします。× Give me it. ではなく、Give it to me. が正しい形です。',
    add: fresh(head('物が it・them のとき'), bx(10, 28, 300, 30, '× Give me it.', C.red, FILL.red, 14), bx(10, 66, 300, 30, '○ Give it to me.', C.green, FILL.green, 14), lb(160, 118, '物が代名詞 → SVO ＋ to／for の形', 12, C.ink, 'middle', true), ...cap('Give it to me.', C.green)),
  },
  {
    note: 'まとめです。SVOO は SVO＋to／for に書きかえられる。届く・伝わる動詞は to、相手のためにする動詞は for、ask は of。物が代名詞のときは、前置詞の形にする。',
    add: fresh(bx(15, 14, 290, 30, 'SVOO ⇔ SVO ＋ to／for（人は後ろへ）', C.blue, FILL.blue, 12), bx(15, 52, 290, 30, 'give 型は to、buy 型は for、ask は of', C.green, FILL.green, 12), bx(15, 90, 290, 30, '物が代名詞 → Give it to me.', C.red, FILL.red, 12), ...cap('動詞のイメージで選ぶ', C.green)),
  },
], 'SVOO と SVO ＋ to／for の書きかえ');

export const XF_KEA_FIGURES: Record<string, DiagramFigure> = {
  'xf_koko_eigo_s001': s001,
  'xf_koko_eigo_s003': s003,
  'xf_koko_eigo_s004': s004,
  'xf_koko_eigo_s005': s005,
  'xf_koko_eigo_s008': s008,
  'xf_koko_eigo_s012': s012,
  'xf_koko_eigo_s015': s015,
  'xf_koko_eigo_s016': s016,
  'xf_koko_eigo_01_tense': e01,
  'xf_koko_eigo_02_comparison': e02,
  'xf_koko_eigo_03_infinitive': e03,
  'xf_koko_eigo_04_reading': e04,
  'xf_koko_eigo_05_writing': e05,
  'xf_koko_eigo_06_vocab': e06,
  'xf_koko_eigo_07_subjunctive': e07,
  'xf_koko_eigo_08_conjunction': e08,
  'xf_koko_eigo_09_noun_article': e09,
  'xf_koko_eigo_10_sentence_types': e10,
  'xf_koko_eigo_11_pronunciation': e11,
  'xf_koko_eigo_12_perfect_advanced': e12,
  'xf_koko_eigo_13_participial_advanced': e13,
  'xf_koko_eigo_14_indirect_question_advanced': e14,
  'xf_koko_eigo_15_free_writing': e15,
  'xf_koko_eigo_16_functional_scenes': e16,
  'xf_koko_eigo_17_eiken_expressions': e17,
  'xf_koko_eigo_18_question_types': e18,
  'xf_koko_eigo_19_dialogue_reading': e19,
  'xf_koko_eigo_20_translation_patterns': e20,
  'xf_koko_eigo_21_passive_advanced': e21,
  'xf_koko_eigo_22_verb_patterns': e22,
};

export const XF_KEA_SECTIONS: Record<string, string> = {
  'koko_eigo_s001#1': 'xf_koko_eigo_s001',
  'koko_eigo_s003#0': 'xf_koko_eigo_s003',
  'koko_eigo_s004#0': 'xf_koko_eigo_s004',
  'koko_eigo_s005#0': 'xf_koko_eigo_s005',
  'koko_eigo_s008#0': 'xf_koko_eigo_s008',
  'koko_eigo_s012#0': 'xf_koko_eigo_s012',
  'koko_eigo_s015#0': 'xf_koko_eigo_s015',
  'koko_eigo_s016#0': 'xf_koko_eigo_s016',
  'koko_eigo_01_tense#4': 'xf_koko_eigo_01_tense',
  'koko_eigo_02_comparison#4': 'xf_koko_eigo_02_comparison',
  'koko_eigo_03_infinitive#3': 'xf_koko_eigo_03_infinitive',
  'koko_eigo_04_reading#0': 'xf_koko_eigo_04_reading',
  'koko_eigo_05_writing#0': 'xf_koko_eigo_05_writing',
  'koko_eigo_06_vocab#4': 'xf_koko_eigo_06_vocab',
  'koko_eigo_07_subjunctive#0': 'xf_koko_eigo_07_subjunctive',
  'koko_eigo_08_conjunction#3': 'xf_koko_eigo_08_conjunction',
  'koko_eigo_09_noun_article#0': 'xf_koko_eigo_09_noun_article',
  'koko_eigo_10_sentence_types#2': 'xf_koko_eigo_10_sentence_types',
  'koko_eigo_11_pronunciation#2': 'xf_koko_eigo_11_pronunciation',
  'koko_eigo_12_perfect_advanced#0': 'xf_koko_eigo_12_perfect_advanced',
  'koko_eigo_13_participial_advanced#2': 'xf_koko_eigo_13_participial_advanced',
  'koko_eigo_14_indirect_question_advanced#0': 'xf_koko_eigo_14_indirect_question_advanced',
  'koko_eigo_15_free_writing#0': 'xf_koko_eigo_15_free_writing',
  'koko_eigo_16_functional_scenes#0': 'xf_koko_eigo_16_functional_scenes',
  'koko_eigo_17_eiken_expressions#0': 'xf_koko_eigo_17_eiken_expressions',
  'koko_eigo_18_question_types#0': 'xf_koko_eigo_18_question_types',
  'koko_eigo_19_dialogue_reading#2': 'xf_koko_eigo_19_dialogue_reading',
  'koko_eigo_20_translation_patterns#2': 'xf_koko_eigo_20_translation_patterns',
  'koko_eigo_21_passive_advanced#2': 'xf_koko_eigo_21_passive_advanced',
  'koko_eigo_22_verb_patterns#2': 'xf_koko_eigo_22_verb_patterns',
};
