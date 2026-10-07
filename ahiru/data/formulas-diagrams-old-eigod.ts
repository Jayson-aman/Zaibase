// 中学英語・共通（formulas-eigo-koko.ts）の以前からある項目10件の動く図解スライド。
// キーは項目の label（買い切りの識別キーと同じ）。「なぜ？」の連鎖で、根っこまでたどる。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, show, fresh } from './diagram-kit';

type Chip = [string, string, string, number?];
/** 横一列に並べた箱（幅は weight の比）。 */
const chips = (y: number, list: Chip[], o?: { h?: number; size?: number; gap?: number }): DiagramElement[] => {
  const h = o?.h ?? 34;
  const gap = o?.gap ?? 6;
  const total = list.reduce((s, c) => s + (c[3] ?? 1), 0);
  const avail = 304 - gap * (list.length - 1);
  let x = 8;
  return list.map((c) => {
    const w = (avail * (c[3] ?? 1)) / total;
    const el = bx(x, y, w, h, c[0], c[1], c[2], o?.size ?? 12);
    x += w + gap;
    return el;
  });
};
/** 下の帯の結論ボックス。 */
const cap = (text: string, color: string = C.green, fill: string = FILL.green, size = 13, y = 172): DiagramElement =>
  bx(14, y, 292, 40, text, color, fill, size);
const hd = (text: string, y = 18, color: string = C.ink, size = 13): DiagramElement => lb(160, y, text, size, color, 'middle', true);
const S = (note: string, ...els: DiagramElement[]) => ({ note, add: fresh(...els) });
const B = (t: string, w?: number): Chip => [t, C.blue, FILL.blue, w];
const R = (t: string, w?: number): Chip => [t, C.red, FILL.red, w];
const G = (t: string, w?: number): Chip => [t, C.green, FILL.green, w];
const P = (t: string, w?: number): Chip => [t, C.purple, FILL.purple, w];
const Y = (t: string, w?: number): Chip => [t, C.main, FILL.yellow, w];
const K = (t: string, w?: number): Chip => [t, C.gray, FILL.gray, w];
/** 背くらべの棒グラフ（底は y=146）。 */
const bars = (list: [string, number, string, string][], x0 = 40, w = 60, gap = 28): DiagramElement[] =>
  list.flatMap(([name, h, col, fl], i) => [bx(x0 + i * (w + gap), 146 - h, w, h, name, col, fl, 12)]);

// ══ 1 分詞の後置修飾と長い主語 ══
const bunshi: DiagramFigure = show([
  S('分詞は、名詞にくわしい説明を足す働きをします。❓では、その説明は名詞の前と後ろのどちらに置くのでしょう。まず1語だけのときを見ます。a running boy（走っている少年）のように、1語なら名詞の前です。',
    hd('分詞が1語のとき'), ...chips(44, [Y('a', 1), G('running', 2), B('boy', 2)], { h: 40, size: 14 }), ar(160, 90, 160, 110, C.gray), cap('1語なら名詞の前　a running boy', C.blue, FILL.blue)),
  S('次に、説明が2語以上のかたまりのとき。the boy running over there（あそこを走っている少年）のように、名詞の後ろに置きます。❓なぜ後ろなのでしょう。かたまりを前に置くと、名詞が出てくるまで長く待たされるからです。先に名詞を言い、あとから説明を足すほうが伝わりやすいのです。',
    hd('分詞が2語以上のとき'), ...chips(44, [B('the boy', 2), G('running over there', 4)], { h: 40, size: 14 }), ar(200, 90, 100, 110, C.green), lb(160, 132, '名詞を先に言い、説明はあとから足す', 12, C.gray, 'middle'), cap('2語以上なら名詞の後ろ', C.blue, FILL.blue)),
  S('分詞には2種類あります。❓どちらを使うかは何で決まるのでしょう。答えは「その名詞が動作をする側か、される側か」です。する側なら〜ing（現在分詞）、される側なら過去分詞を使います。',
    hd('使い分けのものさし'), ...chips(40, [G('する側', 1), G('〜ing', 1)], { h: 34, size: 14 }), ...chips(84, [R('される側', 1), R('過去分詞', 1)], { h: 34, size: 14 }), cap('する側は ing ／ される側は 過去分詞', C.purple, FILL.purple)),
  S('する側の例です。the boy running over there。❓走るのはだれ？→少年自身です。少年が自分で走るので「する側」、だから running。「少年が走る」と文にしても意味が通ることが目印です。',
    hd('する側 → ing'), ...chips(40, [B('the boy', 1), G('running', 1)], { h: 36, size: 14 }), ar(100, 80, 200, 80, C.green), lb(160, 104, '少年が走る', 12, C.green, 'middle'), cap('走るのは少年自身だから running', C.green, FILL.green)),
  S('される側の例です。the language spoken in Brazil。❓話すのはだれ？→人です。言語は話される側です。「言語が話す」とは言えないので、「話される」の意味の過去分詞 spoken を使います。訳は「ブラジルで話されている言語」です。',
    hd('される側 → 過去分詞'), ...chips(40, [B('the language', 2), R('spoken', 1), K('in Brazil', 1)], { h: 36, size: 13 }), lb(160, 100, '言語は「話される」側', 12, C.red, 'middle'), cap('ブラジルで話されている言語', C.red, FILL.red)),
  S('主語が長くなると、動詞がどこか見失いやすくなります。The boy running over there is Ken. ❓なぜ見失う？→ running が動詞のように見えるからです。文の動詞は is ですが、はじめの running につられてしまいます。',
    hd('長い主語の文'), ...chips(40, [B('The boy', 2), G('running over there', 4), R('is', 1), K('Ken.', 1)], { h: 38, size: 12 }), cap('動詞はどれ？ running ではなく is', C.red, FILL.red)),
  S('そこで、まず文全体の動詞を探します。❓どうやって見分ける？→ running の前には be動詞（is・are）がありません。be動詞なしの ing形は、動詞ではなく説明役の分詞です。だから、その後ろの is が本当の動詞だと決まります。',
    hd('動詞を見つける'), ...chips(40, [B('The boy', 2), G('running over there', 4), R('is', 1), K('Ken.', 1)], { h: 38, size: 12 }), lb(160, 100, 'be動詞なしの ing形 → 説明役', 12, C.green, 'middle'), ar(268, 92, 268, 80, C.red), cap('まず動詞 is を見つける', C.red, FILL.red)),
  S('動詞が見つかれば、その前までがまとめて主語です。❓なぜ？→文の主語は動詞の前にあるからです。The boy running over there が主語、is が動詞、Ken が補語、と3つに切れます。',
    hd('主語の範囲が決まる'), bx(8, 40, 200, 38, 'The boy running over there', C.blue, FILL.blue, 12), bx(214, 40, 40, 38, 'is', C.red, FILL.red, 13), bx(260, 40, 52, 38, 'Ken.', C.gray, FILL.gray, 13), lb(108, 96, '主語', 12, C.blue, 'middle', true), lb(234, 96, '動詞', 12, C.red, 'middle', true), cap('動詞の前まで ＝ 主語', C.blue, FILL.blue)),
  S('問題です。The girl ( ) the piano is my sister.（play）。❓まず動詞は？→ is です。だから ( ) には説明役の分詞が入ります。❓ ing と過去分詞のどちら？→弾くのは少女自身、つまり「する側」なので playing です。',
    hd('練習'), ...chips(40, [B('The girl', 2), R('( play )', 2), K('the piano', 2), G('is', 1), K('my sister.', 2)], { h: 36, size: 11 }), cap('少女が弾く（する側）だから playing', C.green, FILL.green)),
  S('まとめです。①1語なら前、2語以上なら後ろ。②する側は ing、される側は過去分詞。③長い主語は、まず動詞を探してから主語の範囲を決める。どれも「なぜ？」にもどれば思い出せます。',
    hd('まとめ'), ...chips(34, [G('前か後ろか', 1), G('ing か過去分詞か', 1), G('動詞を先に探す', 1)], { h: 46, size: 12 }), cap('前か後ろか・する側かされる側か', C.blue, FILL.blue)),
]);

// ══ 2 間接疑問文の語順 ══
const kansetsu: DiagramFigure = show([
  S('2つの文を1文にします。Do you know? と Where does he live? ❓どうすれば1つにできるのでしょう。',
    hd('2つの文'), ...chips(44, [B('Do you know?', 1)], { h: 34, size: 14 }), ...chips(92, [G('Where does he live?', 1)], { h: 34, size: 14 }), cap('これを1文にしたい', C.gray, FILL.gray)),
  S('❓なぜ1文にできる？→ Where does he live? は「彼がどこに住んでいるか」という1つのかたまりの内容だからです。それが know の目的語（知っていることの中身）になります。文の中に入った疑問文なので「間接疑問文」と呼びます。',
    hd('know の中身になる'), ...chips(44, [B('Do you know', 2), G('where he lives', 3), K('?', 0.4)], { h: 38, size: 13 }), lb(190, 96, '知っていることの中身', 12, C.green, 'middle'), cap('疑問文が名詞のかたまりになる', C.green, FILL.green)),
  S('もとの疑問文を見ます。Where does he live? ❓なぜ does が前に出ている？→疑問文は「疑問詞 ＋ do/does ＋ 主語 ＋ 動詞」の順にして、「これは質問です」と知らせる決まりだからです。',
    hd('もとの疑問文'), ...chips(44, [G('Where', 1), R('does', 1), B('he', 1), Y('live', 1)], { h: 38, size: 14 }), cap('does は「質問です」の合図', C.red, FILL.red)),
  S('❓では、文の中に入ると？→もう質問ではなく、ただの内容です。合図の does はいりません。does を消し、疑問詞のあとを「主語 ＋ 動詞」の順にします。',
    hd('does を消す'), ...chips(44, [G('where', 1), B('he', 1), Y('live', 1)], { h: 38, size: 14 }), lb(160, 100, 'does を使わない', 12, C.red, 'middle', true), cap('疑問詞 ＋ 主語 ＋ 動詞', C.green, FILL.green)),
  S('❓ live がなぜ lives になるの？→ does が三人称単数の s を引き受けていたからです。does が消えると、その s は動詞にもどります。よって Do you know where he lives? が完成です。',
    hd('s は動詞にもどる'), ...chips(44, [B('Do you know', 2), G('where', 1), B('he', 1), Y('lives', 1)], { h: 38, size: 12 }), ar(190, 100, 245, 84, C.red), lb(160, 116, 'does の s が lives にもどった', 12, C.red, 'middle'), cap('Do you know where he lives?', C.green, FILL.green)),
  S('be動詞の文も同じです。What is this? ❓なぜ this is に直す？→ is も、疑問文のために主語の前に出ていただけだからです。文の中では主語の後ろにもどします。I do not know what this is. 「what is this」のままにしてはいけません。',
    hd('be動詞のとき'), ...chips(36, [G('What', 1), R('is', 1), B('this', 1), K('?', 0.3)], { h: 34, size: 13 }), ar(160, 76, 160, 92, C.gray), ...chips(98, [K('I do not know', 3), G('what', 1), B('this', 1), R('is.', 1)], { h: 34, size: 12 }), cap('is は主語のあとにもどる', C.red, FILL.red)),
  S('疑問詞が主語のときは、語順が変わりません。Who came here? ❓なぜ？→ who がすでに主語なので、「主語 ＋ 動詞」の形ができているからです。Tell me who came here yesterday. does や did は、もともと使っていません。',
    hd('疑問詞が主語'), ...chips(44, [G('who', 1), Y('came', 1), K('here yesterday', 2)], { h: 38, size: 13 }), lb(160, 100, 'who ＝ 主語　そのまま', 12, C.green, 'middle'), cap('Tell me who came here yesterday.', C.green, FILL.green, 12)),
  S('時制にも気をつけます。I knew where he lived.（彼がどこに住んでいるか知っていた）。❓なぜ lived と過去形？→「知っていた」時点の話なので、その時点で住んでいた、と時をそろえるからです。これを時制の一致と言います。',
    hd('時制の一致'), ...chips(44, [Y('I knew', 2), G('where he lived.', 3)], { h: 38, size: 13 }), lb(160, 100, '主節が過去 → 中も過去', 12, C.red, 'middle', true), cap('主節が過去なら、中の動詞も過去にする', C.red, FILL.red)),
  S('最後の書き方です。文全体が質問のときだけ、最後を ? にします。Do you know where he lives? は質問。I know where he lives. は言い切りなので ピリオドです。❓なぜ？→ 文全体が問いかけかどうかは、いちばん外側の文で決まるからです。',
    hd('文末の記号'), ...chips(36, [B('Do you know where he lives?', 1)], { h: 34, size: 13 }), ...chips(84, [G('I know where he lives.', 1)], { h: 34, size: 13 }), cap('外側の文が質問なら ?', C.blue, FILL.blue)),
  S('まとめです。疑問詞 ＋ 主語 ＋ 動詞。do・does・did は使わない。疑問詞が主語ならそのまま。主節が過去なら中も過去。「質問の合図が消える」と考えれば、全部つながります。',
    hd('まとめ'), ...chips(34, [G('疑問詞', 1), B('主語', 1), Y('動詞', 1)], { h: 46, size: 15 }), cap('do・does・did は使わない', C.red, FILL.red)),
]);

// ══ 3 比較の3つの言いかえ ══
const hikaku3: DiagramFigure = show([
  S('3人の背の高さです。ケンがクラスでいちばん高いとします。この事実を、3通りの英語で言えます。❓なぜ形がちがっても同じ内容になるのでしょう。図を見ながら順に確かめます。',
    hd('ケンがいちばん高い'), ...bars([['Ken', 100, C.green, FILL.green], ['Ann', 82, C.blue, FILL.blue], ['Tom', 70, C.blue, FILL.blue]]), cap('この事実を3通りで言う', C.gray, FILL.gray)),
  S('1つ目は最上級。He is the tallest in his class.❓なぜ the がつく？→ いちばんは1人しかいないので、「それだ」と決まる語 the をつけるからです。',
    hd('型1　最上級'), ...bars([['Ken', 100, C.green, FILL.green], ['Ann', 82, C.blue, FILL.blue], ['Tom', 70, C.blue, FILL.blue]]), cap('He is the tallest in his class.', C.green, FILL.green)),
  S('2つ目は比較級。He is taller than any other student in his class.❓なぜこれで「いちばん」？→ ほかのどの1人と比べても、彼のほうが高いからです。1人ずつ比べて、全員に勝てば、それがいちばんです。',
    hd('型2　比較級 ＋ than any other'), ...bars([['Ken', 100, C.green, FILL.green], ['Ann', 82, C.blue, FILL.blue], ['Tom', 70, C.blue, FILL.blue]]), ar(70, 40, 158, 60, C.green), ar(70, 40, 248, 80, C.green), cap('He is taller than any other student in his class.', C.green, FILL.green, 11)),
  S('❓なぜ other がいるの？→ any student だけだと、ケン自身もふくまれます。ケンがケンより高い、では変ですね。other をつけて、自分をのぞいた「ほかの人」にします。❓なぜ student は単数？→ 1人ずつ取り出して比べる言い方だからです。',
    hd('other と単数形の理由'), ...chips(40, [G('Ken', 1), K('vs', 0.6), B('any other student', 3)], { h: 38, size: 13 }), lb(160, 100, 'other ＝ 自分をのぞく　student ＝ 1人ずつ', 12, C.gray, 'middle'), cap('than any other ＋ 単数形', C.blue, FILL.blue)),
  S('3つ目は否定の形。No other student in his class is as tall as he is.（ほかのだれも彼ほど高くない）。❓なぜこれでも同じ？→ だれも彼に届かないなら、彼がいちばんだからです。as tall as は「同じくらい高い」なので、その否定は「届かない」です。',
    hd('型3　No other 〜 as 〜 as'), ...bars([['Ken', 100, C.green, FILL.green], ['Ann', 82, C.gray, FILL.gray], ['Tom', 70, C.gray, FILL.gray]]), ln(40, 46, 300, 46, C.red, true, 1.5), lb(300, 40, '届かない', 10, C.red, 'end'), cap('No other student … is as tall as he is.', C.red, FILL.red, 12)),
  S('型3の仲間もあります。No other student in his class is taller than he is.（彼より高い人はいない）。❓なぜ同じ内容？→ 彼より高い人がいないなら、彼がいちばんだからです。否定に「as 原級 as」も「比較級 than」も使えます。',
    hd('型3の仲間'), ...chips(40, [R('No other student', 2), K('is', 0.6), B('taller than', 2), G('he is', 1)], { h: 38, size: 12 }), cap('「彼より高い人はいない」＝ いちばん', C.red, FILL.red)),
  S('4つの形を並べます。どれも「いちばん高いのはケン」を言っています。❓では、どうすれば書きかえられる？→ 「いちばんの人」を主語にするか、「ほかの人」を主語にするかの2通りを意識すると、形を行き来できます。',
    hd('4つは同じ内容'), ...chips(30, [G('the tallest', 1)], { h: 28 }), ...chips(64, [G('taller than any other', 1)], { h: 28 }), ...chips(98, [R('No other … as tall as', 1)], { h: 28 }), ...chips(132, [R('No other … taller than', 1)], { h: 28 }), cap('いちばんを主語 or ほかを主語', C.purple, FILL.purple)),
  S('in と of の使い分けです。in his class・in Japan のように、「範囲」を1つのまとまりとして示すときは in。of the four のように、数えられるものを並べて言うときは of。❓なぜ？→ in は「中に入っている」という意味で、場所や集団に合うからです。',
    hd('in と of'), ...chips(40, [B('in', 1), K('his class / Japan', 3)], { h: 34, size: 13 }), ...chips(86, [G('of', 1), K('the four / all the students', 3)], { h: 34, size: 13 }), cap('in ＝ 範囲・集団　of ＝ 数の集まり', C.blue, FILL.blue)),
  S('練習です。Mt. Fuji is the highest mountain in Japan. を比較級にすると、Mt. Fuji is higher than any other mountain in Japan. mountain は単数のままです。',
    hd('練習1'), ...chips(30, [G('the highest mountain in Japan', 1)], { h: 34, size: 13 }), ar(160, 68, 160, 84, C.gray), ...chips(90, [B('higher than any other mountain', 1)], { h: 34, size: 13 }), cap('Mt. Fuji is higher than any other mountain in Japan.', C.green, FILL.green, 11)),
  S('練習2。No other boy in this class is as tall as Ken. を最上級にすると、Ken is the tallest boy in this class. ❓なぜ？→ ほかのだれも届かないケンが、いちばん高い人だからです。',
    hd('練習2'), ...chips(30, [R('No other boy … as tall as Ken', 1)], { h: 34, size: 13 }), ar(160, 68, 160, 84, C.gray), ...chips(90, [G('Ken is the tallest boy', 1)], { h: 34, size: 13 }), cap('Ken is the tallest boy in this class.', C.green, FILL.green)),
]);

// ══ 4 as 〜 as を使った表現 ══
const asas: DiagramFigure = show([
  S('2人の背が同じ高さです。このとき Ken is as tall as Tom. と言います。❓なぜ tall は tallest や taller ではなく、そのままの形？→ 差がなく「同じ」なので、「もっと」を表す -er や -est をつける理由がないからです。',
    hd('as tall as ＝ 同じくらい'), ...bars([['Ken', 90, C.green, FILL.green], ['Tom', 90, C.blue, FILL.blue]], 70, 70, 50), cap('Ken is as tall as Tom.', C.green, FILL.green)),
  S('❓なぜ as が2つ？→ 前の as は「同じくらい」、後ろの as は「〜と比べて」と、くらべる相手を出す合図です。間にはさまれた tall は、ふつうの形のままです。',
    hd('as が2つの理由'), ...chips(44, [G('as', 1), B('tall', 1), G('as', 1), Y('Tom', 1)], { h: 40, size: 14 }), lb(46, 100, '同じくらい', 11, C.green, 'middle'), lb(182, 100, '〜と比べて', 11, C.green, 'middle'), cap('as ＋ 元の形 ＋ as', C.blue, FILL.blue)),
  S('否定にします。Ken is not as tall as Tom.（ケンはトムほど高くない）。❓なぜその意味？→ as tall as は「同じ高さ」。それを否定すると「同じ高さまで届かない」になるからです。',
    hd('not as tall as'), ...bars([['Ken', 70, C.gray, FILL.gray], ['Tom', 90, C.blue, FILL.blue]], 70, 70, 50), cap('Ken is not as tall as Tom.', C.red, FILL.red)),
  S('比較級で書きかえます。Tom is taller than Ken. ❓なぜ主語が入れかわる？→ 比較級は「高いほうを先に言う」形だからです。トムのほうが高いので、トムを主語にします。例: I am not as old as my brother. ＝ My brother is older than I am.',
    hd('主語が入れかわる'), ...chips(36, [K('A is not as 〜 as B', 1)], { h: 34 }), ar(160, 74, 160, 92, C.gray), ...chips(98, [G('B is 〜er than A', 1)], { h: 34 }), cap('高いほうを主語に立てなおす', C.red, FILL.red)),
  S('次は倍数です。This box is twice as large as that one.（あの箱の2倍の大きさ）。❓なぜ as large as の前に twice？→ as large as が「同じ大きさ」で、それをまるごと2倍にするので、かたまりの前に置くからです。',
    hd('倍数は as 〜 as の前'), bx(40, 60, 60, 50, 'that', C.gray, FILL.gray, 13), bx(130, 60, 120, 50, 'this', C.blue, FILL.blue, 14), lb(190, 122, 'twice as large as that one', 12, C.blue, 'middle'), cap('twice ＋ as large as', C.blue, FILL.blue)),
  S('3倍以上は three times as large as のように times（回）を使います。❓なぜ twice だけちがう？→ twice は「2回」を表す特別な1語で、3回目からは three times と数えるからです。半分は half as large as です。',
    hd('2倍・3倍・半分'), ...chips(36, [B('twice', 1), K('2倍', 1)], { h: 30 }), ...chips(72, [B('three times', 1), K('3倍', 1)], { h: 30 }), ...chips(108, [B('half', 1), K('半分', 1)], { h: 30 }), cap('倍数 ＋ as 〜 as', C.purple, FILL.purple)),
  S('できるだけ、の言い方です。as soon as possible（できるだけ早く）。❓なぜその意味？→ possible は「できる」。「できるかぎり早く」を、as ○ as possible の形で言っているからです。',
    hd('as 〜 as possible'), ...chips(44, [G('as', 1), B('soon', 1), G('as', 1), Y('possible', 2)], { h: 40, size: 13 }), cap('できるだけ早く', C.green, FILL.green)),
  S('言いかえもできます。as soon as he can。❓なぜ can？→ possible の代わりに「主語 ＋ can」（その人ができる）と言えるからです。主語に合わせるので、I なら as soon as I can、過去なら could になります。',
    hd('as 〜 as ＋ 主語 can'), ...chips(44, [G('as soon as', 2), B('he', 1), Y('can', 1)], { h: 40, size: 13 }), lb(160, 100, 'possible ＝ 主語 ＋ can', 12, C.gray, 'middle'), cap('as soon as possible ＝ as soon as he can', C.green, FILL.green, 12)),
  S('注意です。as soon as には「〜するとすぐに」という接続詞の使い方もあります。❓どう見分ける？→ 後ろが possible なら「できるだけ」、後ろが「主語 ＋ 動詞」の文なら「〜するとすぐに」です。',
    hd('見分け方'), ...chips(36, [G('as soon as possible', 1)], { h: 34 }), lb(160, 88, 'できるだけ早く', 12, C.green, 'middle'), ...chips(104, [B('as soon as he came', 1)], { h: 34 }), lb(160, 156, '彼が来るとすぐに', 12, C.blue, 'middle'), cap('後ろが possible か、文か', C.blue, FILL.blue, 13, 178)),
  S('まとめです。not as 〜 as を比較級にすると主語が入れかわる。倍数は as の前。as 〜 as possible はできるだけ。それぞれに理由があるので、丸暗記より意味から思い出しましょう。',
    hd('まとめ'), ...chips(34, [R('not as 〜 as', 1), B('倍数は前', 1), G('possible', 1)], { h: 46, size: 12 }), cap('not as → 比較級は主語が入れかわる', C.red, FILL.red)),
]);

// ══ 5 頻出の書きかえパターン ══
const kakikae: DiagramFigure = show([
  S('書きかえとは、同じ内容を別の形で言うことです。❓なぜ形が変わっても意味は同じ？→ 語がひとつ消えたら、別の語が同じ意味をうけもつからです。どの語が消えて、何が増えるかを見ていきます。',
    hd('書きかえのしくみ'), ...chips(40, [K('形A', 1), G('＝', 0.4), K('形B', 1)], { h: 40, size: 15 }), cap('消える語と増える語をたしかめる', C.gray, FILL.gray)),
  S('too 〜 to は「〜すぎて…できない」。He is too young to drive. ❓なぜ「できない」の意味？→ too は「多すぎる」、つまり「ちょうどよい」を通りこしているので、そのあとの to drive はできないことになるからです。',
    hd('too 〜 to'), ...chips(44, [B('He is', 1), R('too young', 2), Y('to drive.', 2)], { h: 38, size: 13 }), lb(160, 100, '若すぎて、運転できない', 12, C.red, 'middle', true), cap('too ＝ 多すぎる ＝ できない', C.red, FILL.red)),
  S('so 〜 that で言いかえます。He is so young that he cannot drive. ❓なぜ cannot？→ too にふくまれていた「できない」の意味を、言葉で表に出すからです。❓なぜ he が増える？→ that のあとは文なので、主語が必要だからです。',
    hd('too 〜 to → so 〜 that'), ...chips(36, [B('He is', 1), R('too young', 2), Y('to drive.', 2)], { h: 34, size: 12 }), ar(160, 74, 160, 92, C.gray), ...chips(98, [B('He is', 1), R('so young', 2), G('that he cannot drive.', 3)], { h: 34, size: 11 }), cap('できない（cannot）と主語 he を書き足す', C.red, FILL.red, 12)),
  S('enough は反対の意味です。This book is so easy that I can read it. ＝ This book is easy enough for me to read. ❓なぜ can に対応する？→ enough は「〜できるほど十分」を表すからです。too が「できない」なら、enough は「できる」です。',
    hd('enough ＝ できるほど十分'), ...chips(36, [G('so easy that I can read it', 1)], { h: 34, size: 13 }), ar(160, 74, 160, 92, C.gray), ...chips(98, [G('easy enough for me to read', 1)], { h: 34, size: 13 }), cap('so 〜 that … can ＝ 〜 enough to', C.green, FILL.green)),
  S('enough の場所に注意。easy enough のように、形容詞の後ろに置きます。❓なぜ後ろ？→ enough は「どれくらい easy か」を後ろから説明する語だからです。名詞につけるときは enough books のように前に置きます。',
    hd('enough の位置'), ...chips(36, [B('easy', 1), G('enough', 1)], { h: 34, size: 14 }), lb(160, 84, '形容詞 → 後ろ', 12, C.blue, 'middle'), ...chips(100, [G('enough', 1), B('books', 1)], { h: 34, size: 14 }), lb(160, 148, '名詞 → 前', 12, C.green, 'middle'), cap('形容詞のあと・名詞のまえ', C.blue, FILL.blue, 13, 178)),
  S('It is 〜 for A to do では、for A が「だれにとって」を表します。It is easy for me to read this book. ❓なぜ for me？→ to read（読むこと）をするのがだれかを、for で示すからです。',
    hd('for A to do'), ...chips(40, [K('It is easy', 2), B('for me', 1), G('to read this book.', 3)], { h: 38, size: 12 }), lb(112, 96, 'だれにとって', 11, C.blue, 'middle'), lb(230, 96, 'すること', 11, C.green, 'middle'), cap('to read するのは me', C.blue, FILL.blue)),
  S('さそいの言い方は3つとも同じ意味です。Shall we go? ＝ Let us go. ＝ Why do not we go? ❓なぜ形がちがっても同じ？→ どれも「いっしょに行こう」と相手をさそう決まった言い方だからです。',
    hd('さそう言い方'), ...chips(30, [G('Shall we go?', 1)], { h: 30 }), ...chips(68, [G('Let us go.', 1)], { h: 30 }), ...chips(106, [G('Why do not we go?', 1)], { h: 30 }), cap('どれも「行こう」', C.green, FILL.green)),
  S('申し出の言い方です。Shall I open the window? ＝ Do you want me to open the window?（窓を開けましょうか）。❓なぜ me？→ 開けるのは私で、あなたは私にしてほしいかを聞いているからです。',
    hd('Shall I 〜?'), ...chips(36, [G('Shall I open the window?', 1)], { h: 34, size: 13 }), ar(160, 74, 160, 92, C.gray), ...chips(98, [G('Do you want me to open the window?', 1)], { h: 34, size: 11 }), cap('「私が〜しましょうか」', C.green, FILL.green)),
  S('いちばん注意したいのは must と have to の否定です。must not は「〜してはいけない」（禁止）。do not have to は「〜しなくてよい」（不要）。❓なぜ意味がちがう？→ must not は「するな」と止める言葉、do not have to は「する必要がない」と楽にする言葉だからです。',
    hd('must not と do not have to'), ...chips(36, [R('must not', 1), R('してはいけない', 2)], { h: 34, size: 13 }), ...chips(84, [G('do not have to', 1), G('しなくてよい', 2)], { h: 34, size: 13 }), cap('意味はほぼ反対', C.red, FILL.red)),
  S('まとめです。too 〜 to ＝ so 〜 that … cannot。〜 enough to ＝ so 〜 that … can。enough は形容詞の後ろ。must not と do not have to はちがう。どれも「消える語・増える語」を見れば作れます。',
    hd('まとめ'), ...chips(34, [R('too → cannot', 1), G('enough → can', 1)], { h: 46, size: 13 }), cap('enough は形容詞の後ろ', C.blue, FILL.blue)),
]);

// ══ 6 長文の解き方の手順 ══
const chobun: DiagramFigure = show([
  S('長文を、いきなり全部読むとどうなるでしょう。❓読み終えてから設問を見ると、答えを探しに本文へもどることになり、時間がかかります。そこで、決まった手順で読みます。',
    hd('長文の手順'), ...chips(30, [B('①設問', 1), B('②メモ', 1), B('③段落', 1)], { h: 34, size: 11 }), ...chips(74, [B('④線', 1), B('⑤消去法', 1)], { h: 34, size: 12 }), cap('5つの手順で読む', C.blue, FILL.blue)),
  S('手順① 設問を先に読みます。❓なぜ先？→ 何を探すかが先に決まるからです。探すものが分かって読むと、必要な部分がすぐ目に入ります。',
    hd('① 設問を先に'), ...chips(36, [G('設問', 1), K('→', 0.3), B('探しながら読む', 2)], { h: 40, size: 13 }), cap('探すものを決めてから読む', C.green, FILL.green)),
  S('❓選択肢まで読まなくてよいのは、なぜ？→ 選択肢を先に読むと、「これが答えかも」と思いこみが生まれ、本文をゆがめて読むおそれがあるからです。時間の節約にもなります。',
    hd('選択肢は先に読まない'), ...chips(36, [G('設問文', 1)], { h: 34 }), ...chips(84, [R('選択肢', 1)], { h: 34 }), lb(160, 130, '× 先入観のもと', 12, C.red, 'middle', true), cap('設問は読む・選択肢はまだ', C.blue, FILL.blue)),
  S('手順② 段落ごとに、何の話かを一言メモします。❓なぜ？→ あとで答えの場所を探すとき、メモを見ればどの段落かすぐ分かるからです。長く書かず、一言だけにします。',
    hd('② 段落のメモ'), bx(20, 30, 180, 26, '第1段落', C.gray, FILL.gray, 12), bx(210, 30, 92, 26, '筆者の体験', C.green, FILL.green, 11), bx(20, 62, 180, 26, '第2段落', C.gray, FILL.gray, 12), bx(210, 62, 92, 26, '反対意見', C.green, FILL.green, 11), bx(20, 94, 180, 26, '第3段落', C.gray, FILL.gray, 12), bx(210, 94, 92, 26, '筆者の考え', C.green, FILL.green, 11), cap('一言だけメモ', C.green, FILL.green)),
  S('手順③ 設問に関係する段落を決めます。設問が「筆者はどう考えているか」なら、メモを見て第3段落だと分かります。❓なぜ全部探さない？→ 関係する段落だけを読めば、時間を大きく減らせるからです。',
    hd('③ 段落を特定'), bx(20, 30, 180, 26, '第1段落', C.gray, FILL.gray, 12), bx(210, 30, 92, 26, '筆者の体験', C.gray, FILL.gray, 11), bx(20, 62, 180, 26, '第2段落', C.gray, FILL.gray, 12), bx(210, 62, 92, 26, '反対意見', C.gray, FILL.gray, 11), bx(20, 94, 180, 26, '第3段落', C.blue, FILL.blue, 12), bx(210, 94, 92, 26, '筆者の考え', C.blue, FILL.blue, 11), cap('答えは第3段落に', C.blue, FILL.blue)),
  S('手順④ 根拠になる文に線を引きます。❓なぜ線を引く？→ 「本文のここに書いてある」と示せない答えは、思いこみかもしれないからです。線を引いて、答えと本文を対応させます。',
    hd('④ 根拠に線'), ...chips(36, [K('本文', 1)], { h: 30 }), ln(24, 58, 296, 58, C.red, false, 2.5), ...chips(84, [G('答え', 1)], { h: 30 }), ar(160, 74, 160, 84, C.red), cap('本文の線と答えを対応させる', C.red, FILL.red)),
  S('手順⑤ 選択肢は消去法でしぼります。❓なぜ消す？→ 正しいものを1つ選ぼうとすると、どれももっともらしく見えます。でも、まちがいには「本文にない」「言いすぎ」「本文と逆」の理由がはっきりあるからです。',
    hd('⑤ 消去法'), ...chips(36, [R('本文にない', 1)], { h: 28 }), ...chips(70, [R('言いすぎ（always・all）', 1)], { h: 28 }), ...chips(104, [R('本文と逆', 1)], { h: 28 }), cap('この3つを消して、残りを選ぶ', C.red, FILL.red)),
  S('知らない単語が出たらどうするか。❓なぜ止まらず進む？→ 1語で止まると時間が足りなくなり、しかもその語が設問に関係しないことも多いからです。前後の文から、プラスの意味かマイナスの意味かだけでも見当をつけて進みます。',
    hd('知らない単語'), ...chips(40, [K('前の文', 1), R('?', 0.5), K('後の文', 1)], { h: 40, size: 14 }), ar(160, 90, 160, 110, C.green), lb(160, 128, '前後から推測して先へ', 12, C.green, 'middle'), cap('止まらずに読み進める', C.green, FILL.green, 13, 178)),
  S('まとめです。設問を先に→段落ごとにメモ→関係する段落を決める→根拠に線→消去法。どの手順にも「探す時間を減らす」「思いこみを防ぐ」という理由があります。',
    hd('まとめ'), ...chips(34, [G('設問先', 1), G('メモ', 1), G('段落', 1), G('線', 1), G('消去', 1)], { h: 46, size: 11, gap: 4 }), cap('探す時間を減らし、思いこみを防ぐ', C.blue, FILL.blue)),
]);

// ══ 7 指示語と代名詞が指すもの ══
const shiji: DiagramFigure = show([
  S('例です。Ken bought a new bike. It is red. 下線部の It は何を指すでしょう。❓そもそも、なぜ英語には it や they があるのでしょう。',
    hd('It は何を指す？'), ...chips(40, [B('Ken bought a new bike.', 3), R('It is red.', 2)], { h: 40, size: 12 }), cap('It ＝ ?', C.gray, FILL.gray)),
  S('❓なぜ代名詞を使う？→ 同じ語をくり返すと長くなるので、いま話した内容を短く言いかえるためです。だから、指すものはたいてい直前にあります。it は a new bike を指します。',
    hd('直前の名詞を指す'), ...chips(40, [B('a new bike', 2), R('It', 1)], { h: 40, size: 14 }), ar(210, 82, 100, 82, C.red), cap('It ＝ a new bike', C.green, FILL.green)),
  S('候補が複数あるときは、数でしぼります。I have two dogs. They are big. ❓なぜ They は dogs？→ they は複数を受ける語なので、単数の名詞は候補から外れるからです。it なら単数、they なら複数、と覚えます。',
    hd('数でしぼる'), ...chips(36, [B('I have two dogs.', 2), R('They are big.', 2)], { h: 38, size: 12 }), ...chips(90, [G('it ＝ 単数', 1), G('they ＝ 複数', 1)], { h: 34, size: 13 }), cap('数の合わない名詞は候補から外す', C.blue, FILL.blue)),
  S('人か物かでもしぼれます。he・she は人、it は物です。Ken has a dog. He likes it. ❓なぜ He は Ken？→ 人を表す he は、人の Ken にしか合わないからです。it は物の dog を指します。',
    hd('人か物か'), ...chips(36, [B('Ken', 1), K('has', 0.6), B('a dog.', 1)], { h: 34, size: 13 }), ...chips(82, [G('He', 1), K('likes', 0.8), G('it.', 1)], { h: 34, size: 13 }), ar(60, 82, 60, 72, C.green), ar(266, 82, 266, 72, C.green), cap('He ＝ Ken ／ it ＝ a dog', C.green, FILL.green)),
  S('this や that は、名詞だけでなく文全体を指すこともあります。He failed the test. This made him sad. ❓なぜ This は文全体？→ this には、いま述べたことをまるごと受ける働きがあるからです。「テストに落ちたこと」全体が原因になっています。',
    hd('文全体を指す this'), ...chips(36, [B('He failed the test.', 1)], { h: 34, size: 13 }), ...chips(84, [R('This made him sad.', 1)], { h: 34, size: 13 }), ar(160, 84, 160, 72, C.red), cap('This ＝ テストに落ちたこと', C.red, FILL.red)),
  S('名詞だけを探して見つからないときは、前の文の内容そのものを疑います。❓なぜ？→ this や that は名詞に限らず、出来事や考えをまとめて指せるからです。',
    hd('名詞が見つからないとき'), ...chips(44, [K('名詞を探す', 1), R('見つからない', 1), G('前の文全体', 1)], { h: 40, size: 12 }), cap('文全体を指すかも', C.purple, FILL.purple)),
  S('見つけたら、下線部に入れかえて読みます。This（＝テストに落ちたこと）made him sad. ❓なぜ確かめる？→ 意味が通れば正しく、通らなければ別の候補だからです。',
    hd('入れかえて確かめる'), ...chips(36, [R('This', 1), K('→', 0.3), G('He failed the test', 3)], { h: 36, size: 12 }), ...chips(84, [G('He failed the test', 2), K('made him sad.', 2)], { h: 36, size: 12 }), cap('意味が通れば正解', C.green, FILL.green)),
  S('日本語で答える問題では、「それ」とは書きません。❓なぜ？→ 何を指すのかを聞かれているので、「それ」では答えになっていないからです。「彼がテストに落ちたこと」のように、本文の英語をやくして具体的に書きます。',
    hd('答え方'), ...chips(36, [R('それ', 1), K('×', 0.4)], { h: 34, size: 14 }), ...chips(82, [G('彼がテストに落ちたこと', 1)], { h: 34, size: 13 }), cap('指す内容を具体的に書く', C.green, FILL.green)),
  S('まとめです。①直前の名詞や文を探す。②数と人・物でしぼる。③入れかえて意味が通るか確かめる。④答えは具体的に書く。代名詞は「同じ語を短く言いかえたもの」と考えると、すぐ前を探せます。',
    hd('まとめ'), ...chips(34, [G('直前を探す', 1), G('数・人・物', 1), G('入れかえる', 1)], { h: 46, size: 12 }), cap('見つけたら必ず入れかえて確認', C.blue, FILL.blue)),
]);

// ══ 8 条件英作文の書き方 ══
const joken: DiagramFigure = show([
  S('条件英作文には、たとえば「20語以上・2文で」のような条件がつきます。❓内容がよければ十分ではないのでしょうか。まず条件を見つけて、線を引きます。',
    hd('条件に線を引く'), ...chips(36, [B('20語以上', 1), B('2文', 1), B('使う語', 1)], { h: 40, size: 13 }), cap('条件を最初に見つける', C.blue, FILL.blue)),
  S('❓なぜ最初に条件？→ 採点は内容だけでなく、条件を守れているかも見るからです。語数や文数が足りないと、内容がよくても減点や0点になることがあります。',
    hd('条件を落とすと'), ...chips(36, [G('内容 ◎', 1), R('語数 ×', 1)], { h: 40, size: 14 }), ar(160, 84, 160, 104, C.red), lb(160, 122, '減点', 14, C.red, 'middle', true), cap('条件は最優先', C.red, FILL.red)),
  S('難しい日本語が出たら、言いかえます。「私は感動しました」をそのまま訳そうとすると止まってしまいます。❓どうする？→ 自分が書ける、かんたんな日本語にします。「とてもうれしかった」なら I was very happy. と書けます。',
    hd('やさしい日本語に'), ...chips(30, [R('私は感動しました', 1)], { h: 32, size: 13 }), ar(160, 66, 160, 82, C.gray), ...chips(88, [G('とてもうれしかった', 1)], { h: 32, size: 13 }), ar(160, 124, 160, 138, C.gray), ...chips(142, [G('I was very happy.', 1)], { h: 30, size: 13 }), cap('書ける形に言いかえる', C.green, FILL.green, 13, 184)),
  S('❓なぜ言いかえてよいの？→ 大切なのは、正しい英語で内容を伝えることで、難しい単語を使うことではないからです。手が止まって時間がなくなるほうが損です。',
    hd('伝わることが大切'), ...chips(44, [K('むずかしい語', 1), R('手が止まる', 1)], { h: 40, size: 13 }), ...chips(96, [G('かんたんな語', 1), G('最後まで書ける', 1)], { h: 40, size: 13 }), cap('内容が伝われば得点になる', C.green, FILL.green)),
  S('単語が書けないときも同じです。「祖父」が出てこなければ my father\'s father と言いかえます。❓なぜこれで通じる？→ 「父の父」は祖父と同じ人を指すからです。書けない語にこだわらず、知っている語でまわりくどく言えばよいのです。',
    hd('単語が出ないとき'), ...chips(36, [R('祖父（書けない）', 1)], { h: 34, size: 13 }), ar(160, 74, 160, 92, C.gray), ...chips(98, [G('my father\'s father', 1)], { h: 34, size: 14 }), cap('知っている語で言いかえる', C.green, FILL.green)),
  S('書くときは、主語と動詞をはっきりさせます。I ／ was ／ happy。❓なぜ？→ 英語の文は、「だれが」と「どうする」がないと成り立たないからです。日本語では省ける主語も、英語では書き忘れないようにします。',
    hd('主語と動詞'), ...chips(44, [B('I', 1), R('was', 1), G('happy', 1)], { h: 40, size: 15 }), lb(60, 100, '主語', 12, C.blue, 'middle'), lb(160, 100, '動詞', 12, C.red, 'middle'), cap('主語を書き忘れない', C.blue, FILL.blue)),
  S('時制と三単現の s を確かめます。yesterday があれば過去形。Ken は三人称単数なので Ken plays。❓なぜミスしやすい？→ 日本語にはこの区別がないので、意識しないと抜けるからです。',
    hd('時制と三単現の s'), ...chips(36, [K('yesterday', 1), R('was', 1)], { h: 34, size: 13 }), ...chips(84, [B('Ken', 1), R('plays', 1)], { h: 34, size: 13 }), cap('過去の話か、主語は Ken などか', C.red, FILL.red)),
  S('語数は、実際に数えます。I was very happy yesterday. は、I・was・very・happy・yesterday で5語です。❓なぜ数える？→ 「20語以上」の条件なのに15語だと、条件を満たさず減点になるからです。',
    hd('語数を数える'), ...chips(40, [G('I', 1), G('was', 1), G('very', 1), G('happy', 1), G('yesterday', 1.6)], { h: 34, size: 11, gap: 4 }), lb(160, 96, '1　2　3　4　5 → 5語', 13, C.green, 'middle', true), cap('条件の語数に足りるか数える', C.green, FILL.green)),
  S('最後に、文の最初は大文字・終わりはピリオドを確かめます。❓なぜ最後に？→ 書いている間は内容に集中するので、こまかい点は見直しでしか気づけないからです。',
    hd('大文字とピリオド'), ...chips(44, [R('i was happy', 1), K('→', 0.3), G('I was happy.', 1)], { h: 40, size: 13 }), cap('最初は大文字・最後はピリオド', C.blue, FILL.blue)),
  S('まとめです。条件を守る。書ける英語に言いかえる。主語と動詞。時制と三単現の s。大文字とピリオド。この順で見直せば、ミスで失点しにくくなります。',
    hd('まとめ'), ...chips(34, [G('条件', 1), G('言いかえ', 1), G('S と V', 1), G('見直し', 1)], { h: 46, size: 12 }), cap('条件を落とすと内容がよくても減点', C.red, FILL.red)),
]);

// ══ 9 リスニングで問われる型 ══
const listening: DiagramFigure = show([
  S('リスニングでは、放送が始まる前にすることがあります。❓それは何でしょう。答えは「選択肢や図に目を通す」ことです。',
    hd('放送の前に'), ...chips(36, [B('3:00', 1), B('3:30', 1), B('4:00', 1), B('4:30', 1)], { h: 40, size: 14 }), cap('選択肢を先に見る', C.blue, FILL.blue)),
  S('❓なぜ先に見る？→ 何を聞き取ればいいかが決まるからです。たとえば選択肢がぜんぶ時刻なら、「時刻を聞き取る」と決められます。',
    hd('聞くことが決まる'), ...chips(36, [B('3:00', 1), B('3:30', 1), B('4:00', 1), B('4:30', 1)], { h: 34, size: 13 }), ar(160, 74, 160, 94, C.green), lb(160, 114, '→ 時刻を聞き取ろう', 14, C.green, 'middle', true), cap('聞くポイントをしぼる', C.green, FILL.green)),
  S('❓選択肢のどこを見る？→ ちがっているところです。選択肢がちがう部分こそが、放送で問われる部分だからです。',
    hd('ちがいを見る'), ...chips(36, [K('meet at', 1), R('3:00', 1), K('the station', 1.4)], { h: 34, size: 11 }), ...chips(80, [K('meet at', 1), R('4:00', 1), K('the station', 1.4)], { h: 34, size: 11 }), cap('同じところは問われない', C.red, FILL.red)),
  S('放送中は、数字・時刻・曜日・場所を聞いた瞬間にメモします。❓なぜ？→ この3つは問われやすいのに、覚えておくのがむずかしく、選択肢を見ている間に忘れるからです。',
    hd('メモするもの'), ...chips(40, [G('数字', 1), G('時刻・曜日', 1.4), G('場所', 1)], { h: 40, size: 13 }), cap('聞いたらすぐ書く', C.green, FILL.green)),
  S('数字が2つ出たときは、何の数字かも添えます。「3:00 映画」「4:00 集合」のように。❓なぜ？→ 数字だけだと、どちらがどちらだったか混ざってしまうからです。',
    hd('何の数字か添える'), ...chips(36, [K('3:00', 1), K('映画', 1)], { h: 34, size: 14 }), ...chips(84, [K('4:00', 1), K('集合', 1)], { h: 34, size: 14 }), cap('数字だけ書かない', C.blue, FILL.blue)),
  S('2回読まれるときは、役割を分けます。1回目は大まかに、2回目は細かいところを確かめます。❓なぜ？→ 1回目で全体の流れが分かっていれば、2回目に集中して聞く場所が決まるからです。',
    hd('1回目と2回目'), ...chips(40, [B('1回目', 1), B('大まかに', 2)], { h: 34, size: 13 }), ...chips(84, [G('2回目', 1), G('細かいところを確認', 2)], { h: 34, size: 13 }), cap('役割を分ける', C.blue, FILL.blue)),
  S('聞き取れなかったら、どうするか。❓止まってはいけません。なぜ？→ 音声は待ってくれないので、1か所にこだわると、そのあとが全部聞けなくなるからです。聞き取れない部分も、流れから見当がつくことが多いです。',
    hd('止まらない'), ...chips(40, [K('聞こえた', 1), R('？？？', 1), G('次を聞く', 1)], { h: 40, size: 13 }), ar(160, 90, 250, 90, C.green), cap('切りかえて次に集中', C.green, FILL.green)),
  S('答えは、会話の最後の発言に出ることが多いです。A: How about 3:00? B: I have club then. How about 4:00? A: OK. ❓なぜ最後？→ 予定や結論は、やりとりのあとで決まるからです。途中に出る 3:00 は、いったん出て変更された時刻です。',
    hd('最後で決まる'), ...chips(30, [K('A: How about 3:00?', 1)], { h: 26, size: 12 }), ...chips(62, [K('B: I have club then.', 1)], { h: 26, size: 12 }), ...chips(94, [K('B: How about 4:00?', 1)], { h: 26, size: 12 }), ...chips(126, [G('A: OK.', 1)], { h: 26, size: 12 }), cap('決まった時刻は 4:00', C.green, FILL.green, 13, 178)),
  S('まとめです。放送前に選択肢を見る。数字・時刻・曜日・場所はメモ。1回目は大まかに、2回目は細かく。聞き逃しても止まらない。答えは最後の発言。',
    hd('まとめ'), ...chips(34, [G('先に選択肢', 1), G('メモ', 1), G('止まらない', 1)], { h: 46, size: 12 }), cap('答えは最後の発言に多い', C.blue, FILL.blue)),
]);

// ══ 10 会話文でよく出る応答 ══
const kaiwa: DiagramFigure = show([
  S('会話文の空所補充では、決まった応答が答えになります。❓なぜ決まっている？→ あいさつやお店での言葉のように、場面ごとに自然な言い方がだいたい1つに決まっているからです。だから質問と応答をセットで覚えます。',
    hd('質問と応答はセット'), ...chips(40, [B('質問', 1), G('応答', 1)], { h: 40, size: 15 }), cap('場面とセットで覚える', C.blue, FILL.blue)),
  S('お店です。店員が May I help you?（何かおさがしですか）と言います。見ているだけなら I am just looking, thank you. 探しているなら I am looking for 〜. ❓なぜ just？→ 「ただ見ているだけ」と、軽く断る意味の語だからです。',
    hd('お店'), ...chips(30, [B('May I help you?', 1)], { h: 32, size: 13 }), ...chips(84, [G('I am just looking.', 1)], { h: 30, size: 12 }), ...chips(122, [G('I am looking for 〜.', 1)], { h: 30, size: 12 }), cap('見るだけ／さがしている', C.green, FILL.green)),
  S('提案です。How about 〜? や Why do not we 〜? には、That sounds good. と答えます。❓なぜ sounds？→ sound は「〜に聞こえる」。相手の提案が「よく聞こえる」＝「いいね」という感想だからです。That は三人称単数なので s がつきます。',
    hd('提案'), ...chips(30, [B('How about going?', 1)], { h: 32, size: 13 }), ...chips(84, [G('That sounds good.', 1)], { h: 32, size: 13 }), cap('That ＋ sounds（s を落とさない）', C.green, FILL.green)),
  S('提案をことわるときは、Sorry, I cannot. のように言います。❓なぜ Sorry を先に？→ 相手のさそいをことわるので、まず気づかいの言葉を言うのが自然だからです。',
    hd('ことわる'), ...chips(30, [B('How about going?', 1)], { h: 32, size: 13 }), ...chips(84, [R('Sorry, I cannot.', 1)], { h: 32, size: 13 }), cap('先に Sorry', C.red, FILL.red)),
  S('お礼には You are welcome.（どういたしまして）。Thank you. と対にして覚えます。❓なぜ welcome？→ 「どうぞ受けとって」とかんげいする気持ちの言葉だからです。',
    hd('お礼'), ...chips(30, [B('Thank you.', 1)], { h: 32, size: 13 }), ...chips(84, [G('You are welcome.', 1)], { h: 32, size: 13 }), cap('お礼 → You are welcome.', C.green, FILL.green)),
  S('あやまるときです。I am sorry.（ごめんなさい）には、That is all right.（大丈夫です）か No problem.（問題ありません）で答えます。❓なぜ？→ 相手の気持ちを軽くする言葉だからです。',
    hd('おわび'), ...chips(30, [B('I am sorry.', 1)], { h: 32, size: 13 }), ...chips(84, [G('That is all right.', 1)], { h: 30, size: 12 }), ...chips(122, [G('No problem.', 1)], { h: 30, size: 12 }), cap('気にしないでね', C.green, FILL.green)),
  S('電話です。May I speak to Ken?（ケンをお願いします）。自分は This is Ken speaking. ❓なぜ I am Ken. ではない？→ 電話では相手の姿が見えないので、「こちらは〜です」と名乗り、「〜と話してもよいですか」とたずねるのが決まった言い方だからです。',
    hd('電話'), ...chips(30, [B('May I speak to Ken?', 1)], { h: 32, size: 13 }), ...chips(84, [G('This is Ken speaking.', 1)], { h: 32, size: 13 }), cap('電話は姿が見えない', C.blue, FILL.blue)),
  S('道案内です。Turn left at the second corner.（2つ目の角を左に曲がってください）。❓なぜ at？→ 角は道の上の「1つの地点」なので、点を表す at を使うからです。序数の前には the をつけます。',
    hd('道案内'), ln(20, 100, 300, 100, C.gray, false, 3), ln(140, 40, 140, 100, C.gray, false, 3), ln(230, 40, 230, 100, C.gray, false, 3), lb(140, 118, '1つ目', 11, C.blue, 'middle'), lb(230, 118, '2つ目', 11, C.red, 'middle', true), ar(230, 100, 230, 60, C.red), cap('Turn left at the second corner.', C.red, FILL.red, 12)),
  S('空所補充の解き方です。A: How about going to the movies? B: ( ) ❓何を見る？→ 直前の発言です。提案だから、対になる That sounds good. を選びます。選択肢を読む前に、自分で「対の応答」を思いうかべるのがコツです。',
    hd('直前の発言を見る'), ...chips(30, [B('A: How about going to the movies?', 1)], { h: 34, size: 11 }), ...chips(80, [R('B: ( )', 1), G('That sounds good.', 2)], { h: 34, size: 12 }), cap('前の発言と対になる応答を選ぶ', C.green, FILL.green)),
  S('まとめです。場面と応答をセットにする。電話では This is 〜 speaking. 道案内では at the ○ corner。なぜそう言うのかを知っていれば、決まり文句も忘れにくくなります。',
    hd('まとめ'), ...chips(34, [G('場面と対', 1), G('電話', 1), G('道案内', 1)], { h: 46, size: 13 }), cap('質問と応答をセットで', C.blue, FILL.blue)),
]);

export const DIAGRAMS_OLD_EIGOD: Record<string, DiagramFigure> = {
  '分詞の後置修飾と長い主語': bunshi,
  '間接疑問文の語順': kansetsu,
  '比較の3つの言いかえ': hikaku3,
  'as 〜 as を使った表現': asas,
  '頻出の書きかえパターン': kakikae,
  '長文の解き方の手順': chobun,
  '指示語と代名詞が指すもの': shiji,
  '条件英作文の書き方': joken,
  'リスニングで問われる型': listening,
  '会話文でよく出る応答': kaiwa,
};
