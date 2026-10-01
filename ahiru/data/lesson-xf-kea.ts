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
    add: [...r2.els, ar(r1.xs[2] + 14, 58, r2.xs[0] + 22, 90, C.green), lb(250, 78, 'was → Being', 11, C.green, 'middle', true), ...band(150, lb(160, 190, '③ 動詞を -ing 形にする', 12, C.green, 'middle', true))],
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
    add: fresh(head('動詞は主語のすぐ後ろ'), lb(10, 30, '日本語', 11, C.gray, 'start', true), ...rowb(['私は', '毎日', '図書館で', '本を', '読む'], 36, 24, C.gray, FILL.gray, 10, 10, 310, 4), lb(10, 82, '英語', 11, C.red, 'start', true), ...rowb(['I', 'read', 'books', 'in the library', 'every day'], 88, 24, C.red, FILL.red, 9, 10, 310, 4), ar(260, 62, 100, 86, C.main, true), ...cap('読む（V）を主語の後ろへ', C.red)),
  },
  {
    note: '❓日本語で主語が省かれているときは? → 英語では必ず主語を補います。「今日は雨が降っています」は、天気を表す It を主語にして It is raining today. と書きます。',
    add: fresh(head('主語を補う'), bx(15, 28, 290, 30, '今日は雨が降っています。（主語がない）', C.gray, FILL.gray, 12), ar(160, 60, 160, 78, C.main), ...sent([['It', 'S'], ['is raining', 'V'], ['today.', 'M']], 86, 40, 13), ...cap('天気は It が主語', C.blue)),
  },
  {
    note: 'よく使う基本の構文があります。There is／are 〜（〜がある）、It takes 〜 to …（…するのに〜かかる）、It is … to 〜（〜することは…だ）、I want you to 〜（あなたに〜してほしい）。どれも英作文でそのまま使える型です。',
    add: fresh(head('英作文で使える型'), bx(10, 22, 300, 26, 'There is a cat on the roof.', C.blue, FILL.blue, 11), bx(10, 52, 300, 26, 'It takes 30 minutes to walk to school.', C.green, FILL.green, 11), bx(10, 82, 300, 26, 'It is important to study every day.', C.red, FILL.red, 11), bx(10, 112, 300, 26, 'I want you to come with me.', C.purple, FILL.purple, 11), ...cap('型ごと覚えて使う')),
  },
  {
    note: 'まとめです。英語の文は五つの型のどれか。SVC は S＝C、SVOC は O＝C。日本語を英語にするときは、①主語を補う ②時制を決める ③動詞を主語のすぐ後ろに置く、の順に考えます。',
    add: fresh(bx(15, 14, 290, 30, '5 文型：SV・SVC・SVO・SVOO・SVOC', C.blue, FILL.blue, 12), bx(15, 52, 290, 30, 'SVC は S ＝ C、SVOC は O ＝ C', C.purple, FILL.purple, 12), bx(15, 90, 290, 30, '主語を補う → 時制 → 動詞は主語の後ろ', C.green, FILL.green, 12), ...cap('型に当てはめて書く', C.green)),
  },
], '英語の基本文型（5文型）');

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
};
