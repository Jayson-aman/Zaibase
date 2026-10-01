// 高校受験 英語の単元に、動く図解スライドを1つずつ（TAG=kea）。
// 「なぜ？」の連鎖で7枚以上。上半分に図、下の帯（band）にそのスライドのひとこと。
import type { DiagramFigure } from './figures';
import type { DiagramElement } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, show, flow, band, fresh } from './diagram-kit';

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

export const XF_KEA_FIGURES: Record<string, DiagramFigure> = {
  'xf_koko_eigo_s001': s001,
  'xf_koko_eigo_s003': s003,
  'xf_koko_eigo_s004': s004,
  'xf_koko_eigo_s005': s005,
  'xf_koko_eigo_s008': s008,
};

export const XF_KEA_SECTIONS: Record<string, string> = {
  'koko_eigo_s001#1': 'xf_koko_eigo_s001',
  'koko_eigo_s003#0': 'xf_koko_eigo_s003',
  'koko_eigo_s004#0': 'xf_koko_eigo_s004',
  'koko_eigo_s005#0': 'xf_koko_eigo_s005',
  'koko_eigo_s008#0': 'xf_koko_eigo_s008',
};
