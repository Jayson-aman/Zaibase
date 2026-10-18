// 高校受験 英語 追加分その2（formulas-eigo-koko-tsuika.ts）の 1番目〜12番目の動く図解スライド。
// キーは項目の label（買い切りの識別キーと同じ）。「なぜ？」の連鎖で、根っこまでたどる。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, show, fresh } from './diagram-kit';

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
const BL: Chip = ['', C.blue, FILL.blue];
void BL;
const B = (t: string, w?: number): Chip => [t, C.blue, FILL.blue, w];
const R = (t: string, w?: number): Chip => [t, C.red, FILL.red, w];
const G = (t: string, w?: number): Chip => [t, C.green, FILL.green, w];
const P = (t: string, w?: number): Chip => [t, C.purple, FILL.purple, w];
const Y = (t: string, w?: number): Chip => [t, C.main, FILL.yellow, w];
const K = (t: string, w?: number): Chip => [t, C.gray, FILL.gray, w];

// ══ 1 適語補充の考え方 ══
const tekigo: DiagramFigure = show([
  S('例題です。I have lived in Osaka ( ) 2015. の空所に入る語は？ ❓いきなり単語を思いつこうとすると迷います。では、何から見ればよいでしょう。答えは「空所の前後」です。ヒントは必ず空所のまわりにあります。',
    ...chips(34, [B('I have lived in Osaka', 3), R('( )', 1), G('2015', 1)], { h: 40, size: 13 }), hd('空所に入る語は？', 96), ar(160, 108, 160, 125, C.gray), cap('まず空所の前後を見る', C.blue, FILL.blue)),
  S('手がかり1は、空所の直前の語です。前が前置詞なら名詞か ing形、前が be動詞なら ing形か過去分詞が入ります。❓なぜそう決まるのでしょう。文には「名詞のかたまり」や「動詞のかたまり」という入れ場所があり、前の語がどの形を求めているかで入る形が決まるからです。',
    ...chips(24, [K('前置詞', 1), R('( )', 1), G('名詞・ing形', 2)], { h: 36 }), ...chips(74, [K('be動詞', 1), R('( )', 1), G('ing形・過去分詞', 2)], { h: 36 }), hd('前の語が「入る形」を決める', 132), cap('前 → 入る形の順に絞る', C.blue, FILL.blue)),
  S('例です。Thank you for ( ) me. の空所に help を入れます。for は前置詞です。❓なぜ helping になるのでしょう。前置詞のあとには名詞の働きをする形が必要で、動詞を名詞の働きにするのが ing形だからです。to不定詞は前置詞のあとに置けません。',
    ...chips(30, [B('Thank you', 2), K('for', 1), R('helping', 2), G('me.', 1)], { h: 36 }), lb(160, 88, 'for（前置詞）のあとだから', 12, C.gray, 'middle'), ar(160, 96, 160, 116, C.red), lb(160, 132, 'help → helping（名詞の働き）', 13, C.red, 'middle', true), cap('前置詞のあとの動詞は ing形', C.red, FILL.red)),
  S('手がかり2は、時を表す語です。My brother ( ) a book now. (read) では now があります。❓なぜ now で時制が決まるのでしょう。now は「今この瞬間」を表す語で、動作の最中を表す形が現在進行形だからです。ほかにも yesterday なら過去形、every day なら現在形です。',
    ...chips(24, [K('now', 1), Y('今している', 2), G('is reading', 2)], { h: 34 }), ...chips(70, [K('yesterday', 1), Y('過去', 2), G('read（過去形）', 2)], { h: 34 }), ...chips(116, [K('every day', 1), Y('習慣', 2), G('reads', 2)], { h: 34 }), cap('時を表す語で時制を決める', C.blue, FILL.blue, 13, 176)),
  S('手がかり3は、主語の人称と数です。My brother は三人称単数なので、be動詞は is になります。❓なぜ主語で be動詞が変わるのでしょう。英語では、主語が I なら am、you なら are、he や she なら is と、主語と動詞の形を合わせる約束があるからです。',
    ...chips(26, [B('I', 1), G('am', 1)], { h: 32 }), ...chips(66, [B('you', 1), G('are', 1)], { h: 32 }), ...chips(106, [B('My brother', 1), R('is', 1)], { h: 32 }), lb(160, 152, '主語と動詞の形を合わせる', 12, C.gray, 'middle'), cap('My brother is reading', C.red, FILL.red)),
  S('もう1問。I have known him ( ) ten years. の空所は for と since のどちらでしょう。ten years は「10年間」という長さです。❓なぜ長さなら for なのでしょう。for は「〜のあいだ」という期間の長さを表す語だからです。',
    ln(30, 70, 290, 70, C.gray, false, 2), ci(50, 70, 5, undefined, C.gray, FILL.gray), ci(270, 70, 5, undefined, C.main, FILL.warm), lb(50, 55, '10年前', 11, C.gray), lb(270, 55, '今', 11, C.main), ln(50, 88, 270, 88, C.blue, false, 3), lb(160, 104, '10 years ＝ 長さ', 12, C.blue, 'middle', true), cap('期間の長さ → for', C.blue, FILL.blue)),
  S('では、例題の 2015 はどうでしょう。2015 は「いつから」という起点の年です。❓なぜ起点なら since なのでしょう。since は「〜から今まで」と、始まりの時点を表す語だからです。だから I have lived in Osaka since 2015. が正解です。',
    ln(30, 70, 290, 70, C.gray, false, 2), ci(60, 70, 5, '', C.green, FILL.green), ci(270, 70, 5, undefined, C.main, FILL.warm), lb(60, 52, '2015', 12, C.green, 'middle', true), lb(270, 52, '今', 11, C.main), ar(64, 92, 262, 92, C.green), lb(160, 110, '起点から今まで続く', 12, C.green, 'middle', true), cap('起点の年・時刻 → since', C.green, FILL.green)),
  S('❓この2つを見分けるコツは？ 空所のあとに来る語が「長さ」か「起点」かを見ることです。ten years・two hours は長さなので for、2015・Monday・last year は起点なので since を使います。',
    ...chips(24, [K('for', 1), B('ten years', 2), B('two hours', 2)], { h: 32 }), ...chips(70, [K('since', 1), G('2015', 2), G('last year', 2)], { h: 32 }), lb(160, 128, '長さ → for ／ 起点 → since', 13, C.ink, 'middle', true), cap('あとの語で見分ける', C.blue, FILL.blue)),
  S('決まった組み合わせも覚えます。I look forward to ( ) you. のときは seeing です。❓なぜ ing形なのでしょう。この to は動詞につく to ではなく前置詞の to なので、あとには名詞の働きをする ing形が来るからです。ここでも最初の「前置詞のあとは ing形」の考え方が使えます。',
    ...chips(28, [B('I look forward', 3), K('to', 1), R('seeing', 2), G('you.', 1)], { h: 36 }), lb(160, 90, 'to は前置詞', 12, C.gray, 'middle'), ar(160, 98, 160, 118, C.red), cap('to のあとが ing形になる熟語がある', C.red, FILL.red)),
  S('最後に、入れた語で文全体を読み直します。I have known him for ten years. は「10年間彼を知っている」で意味が通ります。❓なぜ読み直すのでしょう。形が合っていても、意味が合っていなければ別の語が正解だからです。',
    ...chips(30, [B('I have known him', 3), G('for', 1), B('ten years.', 2)], { h: 36 }), lb(160, 92, '「10年間、彼を知っている」', 13, C.green, 'middle', true), lb(160, 116, '意味が通る ✔', 13, C.green, 'middle', true), cap('入れたら全文を読み直す', C.green, FILL.green)),
  S('まとめです。空所の前後の語 → 品詞 → 時を表す語で時制 → 主語との一致 → 熟語 → 全文の読み直し、の順で1つに絞ります。',
    ...[['①前後の語を見る', C.blue, FILL.blue], ['②品詞・時を表す語で時制', C.blue, FILL.blue], ['③主語に合わせる', C.blue, FILL.blue], ['④読み直す', C.green, FILL.green]].map((a, i) => bx(30, 12 + i * 52, 260, 40, a[0], a[1], a[2], 14))),
]);

// ══ 2 並べかえ問題の手順 ══
const narabe: DiagramFigure = show([
  S('例題です。This / the / is / book / I / bought / yesterday を並べかえて「これは私が昨日買った本です」にします。❓頭から順に並べようとするとどうなるでしょう。どの語が先か迷って、時間をむだにします。そこで手順を決めます。',
    ...chips(22, [K('This'), K('the'), K('is'), K('book')], { h: 32 }), ...chips(62, [K('I'), K('bought'), K('yesterday')], { h: 32 }), hd('順番に並べようとすると迷う…', 118), cap('手順を決めて解く', C.blue, FILL.blue)),
  S('手順1は、日本文を読んで文の種類を決めることです。「これは〜です」は肯定文です。疑問詞があれば先頭、疑問文なら疑問文の語順になります。❓なぜ最初に種類を決めるのでしょう。文の種類で語順が変わるからです。',
    ...chips(24, [G('肯定文', 1), K('This is 〜.', 2)], { h: 34 }), ...chips(68, [Y('疑問文', 1), K('Do you 〜?', 2)], { h: 34 }), ...chips(112, [P('命令文', 1), K('Open 〜.', 2)], { h: 34 }), cap('文の種類 → 語順が決まる', C.blue, FILL.blue)),
  S('手順2は、主語と動詞を先に置くことです。This が主語、is が動詞なので「This is」から始めます。❓なぜ主語と動詞から置くのでしょう。この2つが文の骨組みで、残りの語は説明を付け足すだけだからです。',
    ...chips(40, [B('This'), R('is'), K('？？？', 4)], { h: 40, size: 14 }), lb(78, 96, '主語', 12, C.blue, 'middle', true), lb(140, 96, '動詞', 12, C.red, 'middle', true), cap('骨組み ＝ 主語 ＋ 動詞', C.red, FILL.red)),
  S('手順3は、かたまりを作ることです。the book は「冠詞＋名詞」、I bought yesterday は「だれが・どうした・いつ」で1つのかたまりです。❓なぜかたまりにするのでしょう。1語ずつ並べると組み合わせが多すぎるので、かたまりにすれば並べる数が減るからです。',
    ...chips(30, [G('the book', 1), P('I bought yesterday', 2)], { h: 40, size: 13 }), lb(160, 96, '7語 → 4つのかたまり', 13, C.ink, 'middle', true), ...chips(116, [B('This'), R('is'), G('the book'), P('I bought yesterday', 2)], { h: 34, size: 11 }), cap('かたまりを作ってから並べる', C.green, FILL.green, 13, 176)),
  S('❓では I bought yesterday はどこに置くのでしょう。book のあとです。日本語では「私が昨日買った本」と前から説明しますが、英語では説明したい名詞の後ろに置きます。だから the book I bought yesterday になります。',
    ...chips(34, [G('the book', 1), P('I bought yesterday', 2)], { h: 40, size: 13 }), ar(230, 88, 100, 76, C.purple), lb(160, 110, '後ろから book を説明', 13, C.purple, 'middle', true), cap('説明は名詞のあとに置く', C.purple, FILL.purple)),
  S('完成です。This is the book I bought yesterday. 「これは私が昨日買った本です」と意味が合います。',
    ...chips(34, [B('This'), R('is'), G('the book'), P('I bought yesterday', 2)], { h: 44, size: 12 }), lb(160, 100, '「これは / 本です / 私が昨日買った」', 12, C.gray, 'middle'), cap('This is the book I bought yesterday.', C.green, FILL.green, 13)),
  S('疑問詞の文でも同じです。「あなたは何を食べたいですか」 (want / you / do / what / to / eat)。疑問詞 what が先頭に来ます。❓なぜ先頭なのでしょう。いちばん知りたい内容を最初に言うのが英語の決まりだからです。そのあとは do you 〜 の疑問文の語順になります。',
    ...chips(32, [Y('What'), B('do you'), R('want to'), G('eat?')], { h: 40, size: 13 }), lb(160, 96, '疑問詞 ＋ do you ＋ 動詞', 13, C.ink, 'middle', true), cap('What do you want to eat?', C.green, FILL.green)),
  S('1語不要な問題です。「私はおばを訪ねるつもりです」 (going / I / am / to / visit / will) my aunt. 余る語は？ am going to visit で未来の意味がすでに作れます。',
    ...chips(28, [B('I'), R('am going to'), G('visit')], { h: 38, size: 13 }), ...chips(84, [K('will', 1), K('（余り）', 2)], { h: 34 }), lb(160, 138, 'これで文は完成', 12, C.gray, 'middle'), cap('will は使われない', C.red, FILL.red)),
  S('❓なぜ will が余るのでしょう。be going to と will はどちらも未来を表す語なので、並べると未来の意味が2重になってしまうからです。1語不要の問題では、先に「余る語」を見つけると迷いません。',
    bx(20, 20, 130, 44, 'am going to', C.blue, FILL.blue, 13), bx(170, 20, 130, 44, 'will', C.blue, FILL.blue, 14), lb(160, 42, '＋', 18, C.red, 'middle', true), hd('未来が2回 → 使えない', 100, C.red), ln(160, 20, 160, 64, C.red, false, 2), cap('未来を表す語は1つだけ', C.red, FILL.red)),
  S('最後に、完成した文を日本文と見くらべます。I am going to visit my aunt. は「私は / おばを / 訪ねるつもり」と1つずつ対応しています。❓なぜ見くらべるのでしょう。語順が正しくても、意味がちがう文になっていることがあるからです。',
    ...chips(24, [B('I'), R('am going to visit'), G('my aunt.', 1)], { h: 36, size: 11 }), ...chips(84, [B('私は'), R('訪ねるつもり'), G('おばを')], { h: 36 }), ar(160, 62, 160, 82, C.gray), cap('意味が合っているか確かめる', C.green, FILL.green)),
  S('まとめです。①文の種類 ②主語と動詞 ③かたまり ④余る語 ⑤日本文と見くらべる、の順です。',
    ...[['①文の種類を決める', C.blue, FILL.blue], ['②主語と動詞を先に置く', C.blue, FILL.blue], ['③かたまりを作り、余る語を探す', C.blue, FILL.blue], ['④日本文と見くらべる', C.green, FILL.green]].map((a, i) => bx(30, 12 + i * 52, 260, 40, a[0], a[1], a[2], 13))),
]);

// ══ 3 下線部和訳の手順 ══
const wayaku: DiagramFigure = show([
  S('例題です。The book I bought yesterday was very interesting. を日本語にします。❓英語の順に単語をつなぐと、どうなるでしょう。「その本 私 買った 昨日 でした とても おもしろい」となり、日本語になりません。まず文の骨組みをつかみます。',
    ...chips(30, [B('The book'), P('I bought yesterday', 2), R('was'), G('very interesting', 2)], { h: 40, size: 11 }), hd('順につなぐだけでは点にならない', 100), cap('骨組みをつかむ', C.blue, FILL.blue)),
  S('手順1は、主語と動詞を探すことです。I bought は動詞に見えますが、動詞は was です。主語は The book です。❓なぜ bought が動詞ではないと分かるのでしょう。bought yesterday は The book に説明を足すかたまりで、was と並んで文を終わらせる動詞は was だけだからです。',
    ...chips(34, [B('The book'), K('I bought yesterday', 2), R('was'), K('very interesting', 2)], { h: 40, size: 11 }), lb(52, 92, '主語', 12, C.blue, 'middle', true), lb(210, 92, '動詞', 12, C.red, 'middle', true), cap('文全体の主語 ＝ The book、動詞 ＝ was', C.red, FILL.red, 12)),
  S('手順2は、後ろから説明するかたまりを見つけることです。I bought yesterday が book を後ろから説明しています。「私が昨日買った」という意味です。',
    ...chips(34, [G('The book'), P('I bought yesterday', 2)], { h: 40 }), ar(215, 88, 100, 78, C.purple), lb(160, 110, '本 ← 私が昨日買った', 13, C.purple, 'middle', true), cap('後ろのかたまりは名詞を説明する', C.purple, FILL.purple)),
  S('❓では、日本語ではどこに置くのでしょう。名詞の前です。日本語は「私が昨日買った本」のように、説明を先に言って名詞をあとに言う言葉だからです。英語と日本語で、説明が置かれる位置が逆になります。',
    ...chips(24, [G('a book'), P('I bought yesterday', 2)], { h: 34, size: 12 }), ar(160, 66, 160, 84, C.gray), ...chips(92, [P('私が昨日買った', 2), G('本')], { h: 34 }), cap('日本語では説明が名詞の前', C.purple, FILL.purple)),
  S('できあがった訳は「私が昨日買った本はとてもおもしろかった」です。was は過去形なので「おもしろかった」と過去にします。',
    ...chips(28, [P('私が昨日買った', 2), G('本は'), G('とても'), R('おもしろかった', 2)], { h: 40, size: 11 }), lb(160, 96, '過去形 was → 「〜かった」', 13, C.red, 'middle', true), cap('私が昨日買った本はとてもおもしろかった。', C.green, FILL.green, 12)),
  S('分詞でも同じです。She knows the girl playing the piano. の playing the piano は girl を後ろから説明します。「ピアノをひいている」と訳して「少女」の前に置きます。❓なぜ「ひいている」なのでしょう。playing は ing形で、「〜している」という意味を表すからです。',
    ...chips(26, [B('She knows'), G('the girl'), P('playing the piano', 2)], { h: 36, size: 11 }), ar(230, 78, 140, 70, C.purple), ...chips(96, [B('彼女は'), P('ピアノをひいている', 2), G('少女を')], { h: 34, size: 11 }), cap('彼女はピアノをひいている少女を知っている。', C.green, FILL.green, 11)),
  S('手順3は、this や it が指す内容を確かめることです。He passed the exam. This made me happy. の This は「彼が試験に合格したこと」です。❓なぜ具体的にするのでしょう。「これ」だけでは何のことか分からず、答案で内容が伝わらないからです。',
    bx(14, 16, 292, 30, 'He passed the exam.', C.blue, FILL.blue, 13), bx(14, 60, 292, 30, 'This made me happy.', C.red, FILL.red, 13), ar(60, 60, 60, 47, C.purple), lb(200, 110, 'This ＝ 彼が試験に合格したこと', 12, C.purple, 'middle', true), cap('指す内容を前の文からさがす', C.purple, FILL.purple)),
  S('手順4は、否定の意味を落とさないことです。I was too tired to walk. には not がありませんが、too 〜 to は「〜すぎてできない」という否定の意味です。❓なぜ否定になるのでしょう。too は「ちょうどよい量をこえている」という意味で、こえすぎるので「できない」になるからです。',
    ...chips(28, [B('I was'), Y('too tired', 2), G('to walk')], { h: 38, size: 12 }), ...chips(84, [B('私は'), Y('疲れすぎて', 2), R('歩けなかった', 2)], { h: 34, size: 12 }), lb(160, 138, 'not が無くても否定', 12, C.red, 'middle', true), cap('too 〜 to ＝ 〜すぎてできない', C.red, FILL.red)),
  S('最後は声に出して、日本語として自然か確かめます。「私は疲れていたので歩ける」のように意味が反対になっていないか、語順が不自然でないかを見ます。❓なぜ最後に確かめるのでしょう。訳が英語のままの語順だと、意味が伝わらず点にならないからです。',
    bx(20, 20, 130, 44, '私は歩けた疲れていた', C.red, FILL.red, 11), bx(170, 20, 130, 44, '私は疲れすぎて\n歩けなかった', C.green, FILL.green, 12), lb(85, 84, '×', 22, C.red, 'middle', true), lb(235, 84, '○', 22, C.green, 'middle', true), cap('声に出して自然か確かめる', C.green, FILL.green)),
  S('まとめです。①主語と動詞 ②後ろから説明するかたまり ③this・it の中身 ④too 〜 to などの否定 ⑤自然な日本語かを確認します。',
    ...[['①主語と動詞を探す', C.blue, FILL.blue], ['②後ろの説明は名詞の前に訳す', C.purple, FILL.purple], ['③this・it の指す内容を具体的に', C.purple, FILL.purple], ['④否定の意味を落とさない', C.red, FILL.red]].map((a, i) => bx(30, 12 + i * 52, 260, 40, a[0], a[1], a[2], 13))),
]);

// ══ 4 対話文の空所補充の手順 ══
const taiwa: DiagramFigure = show([
  S('例題です。A: Would you like some tea? B: ( ). I am thirsty. の空所に入る返事は？ 対話文の空所は、前の人の発言への「返事」か、後ろの発言を引き出す「問いかけ」です。❓何を手がかりにするのでしょう。前後の発言の型です。',
    bx(14, 14, 292, 34, 'A: Would you like some tea?', C.blue, FILL.blue, 13), bx(14, 60, 292, 34, 'B: (         ). I am thirsty.', C.red, FILL.red, 13), ar(160, 48, 160, 60, C.gray), hd('前後の発言を見る', 120), cap('空所の前後の発言が手がかり', C.blue, FILL.blue)),
  S('手順1は、直前の発言が質問・依頼・さそい・感想のどれかを見ることです。Would you like 〜? は「〜はいかがですか」というすすめ、つまり申し出です。❓なぜ型を見るのでしょう。型ごとに返事の言い方が決まっているからです。',
    ...chips(22, [B('質問', 1), K('→ 答える', 2)], { h: 30 }), ...chips(58, [B('依頼', 1), K('→ 承知 / ことわる', 2)], { h: 30 }), ...chips(94, [B('さそい・申し出', 1), K('→ 受ける / ことわる', 2)], { h: 30 }), lb(160, 144, 'Would you like 〜? ＝ 申し出', 12, C.red, 'middle', true), cap('質問の型で返事が決まる', C.blue, FILL.blue)),
  S('手順2は、直後の発言を見ることです。I am thirsty.（のどがかわいている）は、申し出を受ける理由になっています。❓なぜ理由が手がかりになるのでしょう。ことわるなら「いりません、おなかがいっぱいです」のような理由が来るはずで、のどがかわいているなら受け入れるからです。',
    bx(14, 14, 292, 30, 'Would you like some tea?', C.blue, FILL.blue, 13), bx(14, 56, 292, 30, '（  ）  I am thirsty.', C.red, FILL.red, 13), lb(160, 108, 'のどがかわいている → 受ける理由', 12, C.green, 'middle', true), cap('あとの発言が理由のヒント', C.green, FILL.green)),
  S('答えは Yes, please. です。「はい、お願いします」と申し出を受ける言葉です。No, thank you. だと、直後の I am thirsty. とつながりません。',
    bx(14, 14, 292, 30, 'A: Would you like some tea?', C.blue, FILL.blue, 13), bx(14, 56, 292, 30, 'B: Yes, please. I am thirsty.', C.green, FILL.green, 13), bx(14, 98, 292, 30, 'B: No, thank you. I am thirsty.  ✕', C.red, FILL.red, 12), cap('つながる返事を選ぶ', C.green, FILL.green)),
  S('次の型です。A: How was your trip? B: ( ). How や What で始まる質問には Yes・No で答えません。❓なぜでしょう。How was 〜? は「どうだったか」と様子をたずねる質問で、Yes か No かをたずねていないからです。返事は It was great. のように様子を述べる文です。',
    bx(14, 14, 292, 30, 'A: How was your trip?', C.blue, FILL.blue, 13), bx(14, 56, 130, 34, 'Yes. / No.  ✕', C.red, FILL.red, 13), bx(160, 56, 146, 34, 'It was great.  ○', C.green, FILL.green, 13), cap('How・What には様子や内容を答える', C.green, FILL.green)),
  S('依頼の型です。A: Can I use your pen? B: ( ), here you are. here you are は物を手わたすときの言葉です。❓なぜ Sure が入るのでしょう。手わたすのは、依頼を「いいですよ」と引き受けたからです。ことわるなら物は渡しません。',
    bx(14, 14, 292, 30, 'A: Can I use your pen?', C.blue, FILL.blue, 13), bx(14, 58, 292, 30, 'B: (       ), here you are.', C.red, FILL.red, 13), ar(160, 90, 160, 110, C.green), lb(160, 124, 'Sure. ＝ いいですよ', 14, C.green, 'middle', true), cap('あとの here you are ＝ 承知した証拠', C.green, FILL.green)),
  S('お礼・あやまり・さそいには、決まった返事があります。Thank you. には You are welcome.、さそいには Yes, please. や Sure.、あやまりには That is all right. です。❓なぜ Yes や Sorry ではだめでしょう。相手の気持ちを受けとめる返事にならず、会話がつながらないからです。',
    ...chips(20, [B('お礼', 1), G('You are welcome.', 2)], { h: 30 }), ...chips(58, [B('さそい', 1), G('Yes, please. / Sure.', 2)], { h: 30 }), ...chips(96, [B('あやまり', 1), G('That is all right.', 2)], { h: 30 }), cap('決まった返事は丸ごと覚える', C.green, FILL.green)),
  S('手順3は、選択肢を入れて会話として読み直すことです。❓なぜ読み直すのでしょう。1つの発言だけ見て選ぶと、単語は正しくても前後とつながらない選択肢を選んでしまうからです。',
    bx(14, 14, 292, 28, 'A: Thank you for your help.', C.blue, FILL.blue, 13), bx(14, 52, 292, 28, 'B: You are welcome.  ○', C.green, FILL.green, 13), bx(14, 90, 292, 28, 'B: Yes, I do.  ✕（つながらない）', C.red, FILL.red, 12), cap('A と B の会話として読み直す', C.blue, FILL.blue)),
  S('手順4は、話し手が入れかわっていることを確かめることです。A の質問に B が答え、次にまた A が話します。❓なぜ大事なのでしょう。同じ人が続けて話す文だと思うと、空所に「返事」を入れるべきか「問いかけ」を入れるべきかを取りちがえるからです。',
    ...[0, 1, 2].map((i) => bx(i % 2 === 0 ? 14 : 130, 14 + i * 46, 176, 34, i % 2 === 0 ? 'A の発言' : 'B の発言', i % 2 === 0 ? C.blue : C.red, i % 2 === 0 ? FILL.blue : FILL.red, 13)), cap('A → B → A と交代する', C.blue, FILL.blue)),
  S('まとめです。①直前の発言の型 ②直後の発言のヒント ③How・What には Yes・No で答えない ④決まった返事 ⑤会話として読み直す、の順です。',
    ...[['①直前の発言の型を見る', C.blue, FILL.blue], ['②直後の発言をヒントにする', C.blue, FILL.blue], ['③How・What に Yes・No は不可', C.red, FILL.red], ['④会話として読み直す', C.green, FILL.green]].map((a, i) => bx(30, 12 + i * 52, 260, 40, a[0], a[1], a[2], 13))),
]);

// ══ 5 グラフ・表・メールの読み取り ══
const bars = (): DiagramElement[] => {
  const d: [string, number][] = [['Soccer', 16], ['Baseball', 10], ['Tennis', 8], ['Swimming', 6]];
  const out: DiagramElement[] = [ln(30, 128, 300, 128, C.gray, false, 2)];
  d.forEach((a, i) => {
    const h = a[1] * 5;
    const x = 44 + i * 64;
    out.push(bx(x, 128 - h, 40, h, String(a[1]), C.blue, FILL.blue, 12), lb(x + 20, 140, a[0], 10, C.ink, 'middle'));
  });
  return out;
};
const graph: DiagramFigure = show([
  S('資料の問題は、英文が短くても数字の読みちがいで失点します。例題は「40人のクラスで好きなスポーツを調べた」グラフです。❓最初に何を見るのでしょう。タイトルと単位です。',
    hd('好きなスポーツ（人）', 14, C.ink, 13), ...bars(), cap('まずタイトルと単位を見る', C.blue, FILL.blue)),
  S('❓なぜ最初にタイトルと単位なのでしょう。同じ「12」でも、12人と12％ではまったくちがう量だからです。単位を見落とすと、ぜんぶの数字の意味を取りちがえます。',
    bx(20, 20, 130, 44, '12人', C.blue, FILL.blue, 18), bx(170, 20, 130, 44, '12％', C.red, FILL.red, 18), lb(160, 42, '≠', 20, C.ink, 'middle', true), lb(85, 84, '人数そのもの', 12, C.blue, 'middle'), lb(235, 84, '全体の割合', 12, C.red, 'middle'), cap('単位で数字の意味が変わる', C.red, FILL.red)),
  S('次に、いちばん多い数と少ない数に印をつけます。サッカーが16人で最多、水泳が6人で最少です。❓なぜ印をつけるのでしょう。most（いちばん多い）や least のような最上級の設問に、すぐ答えられるからです。',
    hd('好きなスポーツ（人）', 14, C.ink, 13), ...bars(), bx(40, 44, 48, 20, '最多', C.red, FILL.red, 11), bx(232, 70, 48, 20, '最少', C.gray, FILL.gray, 11), cap('最多 ＝ サッカー、最少 ＝ 水泳', C.red, FILL.red)),
  S('倍の計算をします。サッカー16人はテニス8人の何倍か。16 ÷ 8 ＝ 2 で2倍です。❓なぜわり算なのでしょう。「何倍」は、ある数がもう1つの数のいくつ分かを聞いているので、わり算で求めるからです。',
    bx(20, 20, 120, 40, 'サッカー 16', C.blue, FILL.blue, 14), bx(180, 20, 120, 40, 'テニス 8', C.blue, FILL.blue, 14), lb(160, 42, '÷', 18, C.ink, 'middle', true), lb(160, 92, '16 ÷ 8 ＝ 2', 20, C.red, 'middle', true), cap('2倍', C.red, FILL.red, 16)),
  S('英語にすると Soccer is twice as popular as tennis. です。「〜倍」は as 〜 as の前に twice や three times を置きます。❓なぜ前に置くのでしょう。twice が「as popular as」全体を「2倍」と説明する語で、説明する語は説明される語の前に置くからです。',
    ...chips(28, [B('Soccer is'), R('twice', 1), Y('as popular as', 2), G('tennis.', 1)], { h: 40, size: 11 }), ar(100, 76, 150, 76, C.red), lb(160, 100, '倍数は as 〜 as の前', 13, C.red, 'middle', true), cap('twice ＝ 2倍、three times ＝ 3倍', C.red, FILL.red)),
  S('確認問題です。歩いて通学する生徒が12人、バスの生徒が6人。Walking is ( ) as popular as the bus. の空所は？ 12 ÷ 6 ＝ 2 なので twice です。3倍なら three times が入ります。',
    bx(20, 20, 120, 40, '歩き 12人', C.blue, FILL.blue, 14), bx(180, 20, 120, 40, 'バス 6人', C.blue, FILL.blue, 14), lb(160, 42, '÷', 18, C.ink, 'middle', true), lb(160, 92, '12 ÷ 6 ＝ 2 → twice', 17, C.red, 'middle', true), cap('Walking is twice as popular as the bus.', C.green, FILL.green, 12)),
  S('メールの問題に切りかえます。最初に読むのは、差出人・あて先・日付・件名です。❓なぜ最初に読むのでしょう。だれがだれに何の用件で送ったかが分かれば、本文の流れがつかめて、細かい設問にも答えやすくなるからです。',
    bx(14, 12, 292, 26, 'From: Ken    To: Mike', C.blue, FILL.blue, 13), bx(14, 44, 292, 26, 'Date: June 3', C.blue, FILL.blue, 13), bx(14, 76, 292, 26, 'Subject: Party on Sunday', C.red, FILL.red, 13), lb(160, 122, 'だれが → だれに → 何の用件', 12, C.ink, 'middle', true), cap('メールは差出人・用件から読む', C.blue, FILL.blue)),
  S('用件が分かったら、設問に合わせて本文から答えを探します。「いつ集まるか」なら時刻と曜日の語を探します。We will meet at 10 a.m. on Sunday. なら Sunday の 10時です。❓なぜ設問を先に見るのでしょう。探す語がはっきりして、読む時間がへるからです。',
    bx(14, 14, 292, 30, 'Q: When will they meet?', C.red, FILL.red, 13), bx(14, 56, 292, 30, 'We will meet at 10 a.m. on Sunday.', C.blue, FILL.blue, 12), ar(160, 46, 160, 56, C.gray), lb(160, 108, '答え ＝ 日曜日の午前10時', 13, C.green, 'middle', true), cap('設問の語を本文で探す', C.green, FILL.green)),
  S('選択肢は、資料の数字と1つずつ照らして消していきます。A: Soccer is the most popular. は16人で最多なので正しい。B: Tennis is more popular than baseball. はテニス8人、野球10人なので誤り。C: Swimming is twice as popular as tennis. は水泳6人、テニス8人で2倍ではないので誤りです。❓なぜ1つずつ消すのでしょう。それらしく聞こえる選択肢に引っかからないためです。',
    bx(14, 14, 292, 30, 'A: Soccer is the most popular.  ○', C.green, FILL.green, 12), bx(14, 52, 292, 30, 'B: Tennis is more popular than baseball.  ✕', C.red, FILL.red, 11), bx(14, 90, 292, 30, 'C: Swimming is twice as popular as tennis.  ✕', C.red, FILL.red, 11), cap('数字と照らして消す', C.blue, FILL.blue)),
  S('まとめです。①タイトルと単位 ②最多・最少に印 ③倍・差の計算 ④twice as 〜 as ⑤メールは差出人と用件から ⑥選択肢を数字と照らす、の順です。',
    ...[['①タイトルと単位を見る', C.blue, FILL.blue], ['②数を比べて計算する', C.blue, FILL.blue], ['③「〜倍」は twice as 〜 as', C.red, FILL.red], ['④選択肢を1つずつ消す', C.green, FILL.green]].map((a, i) => bx(30, 12 + i * 52, 260, 40, a[0], a[1], a[2], 13))),
]);

// ══ 6 one・it・that の使い分け ══
const oneItThat: DiagramFigure = show([
  S('例題です。I lost my pen, so I will buy a new ( ). の空所は it と one のどちらでしょう。❓考えるポイントは、前に出た名詞が「その物そのもの」か「同じ種類の別の物」かです。',
    ...chips(30, [B('I lost my pen,', 2), K('so I will buy a new', 3), R('( )', 1)], { h: 40, size: 11 }), hd('it ？  one ？', 100), cap('そのもの or 別の物？', C.blue, FILL.blue)),
  S('it は、前の名詞そのものを指します。I have a dog. It is very big. の It は、いま話している犬自身です。❓なぜ it なのでしょう。同じ犬について話し続けているので、ひとつのものを指す代名詞を使うからです。',
    bx(14, 20, 130, 40, 'a dog', C.blue, FILL.blue, 15), bx(176, 20, 130, 40, 'It', C.red, FILL.red, 15), ar(146, 40, 174, 40, C.red), lb(160, 92, '同じ犬', 14, C.red, 'middle', true), cap('it ＝ その物そのもの', C.red, FILL.red)),
  S('one は、同じ種類の別の物を指します。なくした my pen と、これから買う新しいペンは別の物ですが、種類は同じ「ペン」です。',
    bx(14, 20, 130, 40, 'my pen（なくした）', C.gray, FILL.gray, 12), bx(176, 20, 130, 40, 'a new one（買う）', C.blue, FILL.blue, 12), lb(160, 40, '≠', 22, C.red, 'middle', true), lb(160, 92, '別の物・同じ種類', 14, C.blue, 'middle', true), cap('one ＝ 同じ種類の別の物', C.blue, FILL.blue)),
  S('答えは one です。I lost my pen, so I will buy a new one. ❓なぜ it ではだめなのでしょう。it にすると「なくしたペンそのもの」を買う意味になってしまうからです。なくした物は買えません。',
    ...chips(30, [B('I will buy a new'), G('one.', 1)], { h: 40, size: 13 }), ...chips(84, [R('it  ✕', 1), K('＝ なくしたペン自身', 2)], { h: 34 }), cap('I will buy a new one.', C.green, FILL.green)),
  S('形容詞がつくときも one を使います。I do not like this bag. Please show me a bigger one. ❓なぜ one なのでしょう。show me a bigger bag と同じ名詞をくり返す代わりに、名詞の代わりをする one を使うからです。it は形容詞をつけられません。',
    bx(14, 20, 292, 30, 'a bigger bag', C.gray, FILL.gray, 14), ar(160, 52, 160, 70, C.blue), bx(14, 76, 292, 30, 'a bigger one', C.blue, FILL.blue, 14), lb(160, 126, 'bag → one（同じ種類）', 12, C.blue, 'middle', true), cap('形容詞つき ＝ a bigger one', C.blue, FILL.blue)),
  S('複数の名詞のときは、one は ones、it は they・them になります。「そのものたち」は they、「同じ種類の別の物たち」は ones です。',
    ...chips(24, [K('単数', 1), R('it', 1), B('one', 1)], { h: 34 }), ...chips(70, [K('複数', 1), R('they・them', 1), B('ones', 1)], { h: 34 }), lb(160, 128, '赤 ＝ そのもの、青 ＝ 別の物', 12, C.gray, 'middle'), cap('複数は ones・they', C.blue, FILL.blue)),
  S('比べる文では that を使います。The climate of Japan is warmer than ( ) of Canada. の空所には that が入ります。❓なぜ「気候」をくり返さないのでしょう。The climate of Japan と the climate of Canada の2つの気候を比べる文で、the climate を2回言うと長くなるからです。',
    bx(14, 14, 292, 34, 'The climate of Japan is warmer than ( ) of Canada.', C.blue, FILL.blue, 12), bx(14, 76, 130, 32, 'the climate', C.gray, FILL.gray, 12), ar(146, 92, 176, 92, C.red), bx(178, 76, 128, 32, 'that', C.red, FILL.red, 14), cap('the ＋ 名詞 の代わりが that', C.red, FILL.red)),
  S('❓なぜ「日本」と「カナダ」を直接比べてはいけないのでしょう。The climate of Japan is warmer than Canada. とすると、「気候」と「国」という別の種類の物を比べることになるからです。比べる物どうしをそろえるために that of 〜 を使います。',
    bx(14, 20, 130, 34, 'climate', C.blue, FILL.blue, 13), bx(176, 20, 130, 34, 'Canada（国）', C.red, FILL.red, 13), lb(160, 38, '×', 20, C.red, 'middle', true), bx(14, 76, 130, 34, 'climate', C.blue, FILL.blue, 13), bx(176, 76, 130, 34, 'that of Canada', C.green, FILL.green, 12), lb(160, 94, '○', 20, C.green, 'middle', true), cap('比べる物の種類をそろえる', C.green, FILL.green)),
  S('複数の名詞をくり返すときは those にします。The cities of Japan are bigger than those of Korea. のように、those of 〜 の形です。❓なぜ those なのでしょう。that は単数の名詞の代わり、those は複数の名詞の代わりで、数を合わせる決まりだからです。',
    ...chips(24, [K('単数', 1), R('that of 〜', 2)], { h: 34 }), ...chips(70, [K('複数', 1), R('those of 〜', 2)], { h: 34 }), lb(160, 128, 'the climate → that ／ the cities → those', 12, C.ink, 'middle', true), cap('名詞の数に合わせる', C.red, FILL.red)),
  S('まとめです。そのもの → it、同じ種類の別の物 → one（形容詞がつくときも one）、比べる文で the ＋ 名詞をくり返さない → that of・those of です。',
    ...[['そのもの → it', C.red, FILL.red], ['同じ種類の別の物 → one / ones', C.blue, FILL.blue], ['形容詞がつく → a bigger one', C.blue, FILL.blue], ['比べる文 → that of / those of', C.green, FILL.green]].map((a, i) => bx(30, 12 + i * 52, 260, 40, a[0], a[1], a[2], 13))),
]);

// ══ 7 some・any・no と someone・something ══
const someAny: DiagramFigure = show([
  S('some は「いくつかの」、any は「少しも」「いくらか」の意味です。基本は、肯定文は some、否定文と疑問文は any です。❓なぜ使い分けるのでしょう。「ある」と言うのか「あるかどうか分からない・ゼロ」と言うのかで、語を分けているからです。',
    ...chips(24, [G('肯定文', 1), Y('some', 1)], { h: 34 }), ...chips(70, [R('否定文', 1), Y('any', 1)], { h: 34 }), ...chips(116, [B('疑問文', 1), Y('any', 1)], { h: 34 }), cap('基本の使い分け', C.blue, FILL.blue, 13, 176)),
  S('例題です。I do not have ( ) time. の空所は any です。❓なぜ否定文で any なのでしょう。any は「どんなものでも1つでも」という意味で、それを not で打ち消すと「少しもない」になるからです。',
    ...chips(30, [B('I do not have', 2), R('any', 1), G('time.', 1)], { h: 38, size: 13 }), lb(160, 92, 'not ＋ any ＝ 少しも〜ない', 14, C.red, 'middle', true), cap('否定文の「少しも」は any', C.red, FILL.red)),
  S('some は「あることがはっきりしている」ときの語です。I have some friends. は「友だちが何人かいる」と、いることを言っています。❓なぜ否定文で some を使えないのでしょう。「何人かいない」では意味がはっきりしないからです。',
    bx(14, 20, 292, 34, 'I have some friends.  ○', C.green, FILL.green, 14), bx(14, 66, 292, 34, 'I do not have some friends.  ✕', C.red, FILL.red, 13), lb(160, 122, '「何人かいない」？ 意味がぼやける', 12, C.gray, 'middle'), cap('some ＝ ある・いる', C.green, FILL.green)),
  S('ただし例外があります。Would you like ( ) tea? のように、人にすすめたりたのんだりする疑問文では some を使います。❓なぜ疑問文なのに some なのでしょう。すすめるときは、相手が Yes と答えて「ある」ことを期待しているからです。',
    ...chips(28, [B('Would you like', 2), R('some', 1), G('tea?', 1)], { h: 38, size: 13 }), lb(160, 92, 'すすめる・たのむ ＝ Yes を期待', 13, C.red, 'middle', true), cap('すすめる疑問文は some', C.red, FILL.red)),
  S('no は not any と同じ意味です。I do not have any friends here. ＝ I have no friends here. ❓なぜ動詞を肯定の形にもどすのでしょう。no にすでに否定の意味があるので、not まで入れると否定が二重になるからです。',
    bx(14, 20, 292, 30, 'I do not have any friends here.', C.blue, FILL.blue, 13), ar(160, 52, 160, 72, C.red), bx(14, 78, 292, 30, 'I have no friends here.', C.green, FILL.green, 13), cap('no ＝ not any（動詞は肯定の形）', C.green, FILL.green)),
  S('someone・anyone・something・anything なども、some と any の使い分けは同じです。これらは単数扱いなので、動詞に s がつきます。Someone is here. のようになります。❓なぜ単数扱いなのでしょう。「1人の人」「1つの物」を表す語だからです。',
    ...chips(24, [G('肯定', 1), Y('someone / something', 2)], { h: 34 }), ...chips(70, [R('否定・疑問', 1), Y('anyone / anything', 2)], { h: 34 }), lb(160, 130, 'どれも単数扱い → 動詞に s', 13, C.red, 'middle', true), cap('Someone is here.', C.red, FILL.red)),
  S('something に形容詞をつけるときは、後ろに置きます。「何か冷たいもの」は something cold です。❓なぜ後ろなのでしょう。something は1つの語でひとまとまりなので、形容詞が間に入れず、うしろから説明する形になるからです。',
    ...chips(30, [G('something', 2), P('cold', 1)], { h: 40, size: 14 }), ar(240, 84, 130, 76, C.purple), bx(14, 100, 130, 30, 'cold something  ✕', C.red, FILL.red, 12), cap('-thing・-one のあとに形容詞', C.purple, FILL.purple)),
  S('「〜するための」は to不定詞を後ろに置きます。something to drink は「飲むための何か」です。❓なぜ to drink が後ろなのでしょう。something を後ろから説明するかたまりだからです。形容詞と to不定詞をどちらもつけるときは、something cold to drink の順です。',
    ...chips(28, [G('something', 2), P('cold', 1), P('to drink', 2)], { h: 40, size: 13 }), lb(160, 92, '何か ＋ 冷たい ＋ 飲むための', 12, C.gray, 'middle'), cap('something cold to drink', C.purple, FILL.purple)),
  S('確認問題です。「何か冷たい飲み物がほしい」I want ( ) ( ) to drink. の空所は something cold です。cold something とは言いません。',
    ...chips(30, [B('I want', 1), R('something cold', 2), G('to drink.', 1)], { h: 40, size: 13 }), lb(160, 94, 'cold something は ✕', 12, C.red, 'middle', true), cap('something cold to drink', C.green, FILL.green)),
  S('まとめです。肯定は some、否定・疑問は any、すすめる疑問は some、no ＝ not any、-thing・-one は単数扱いで形容詞はうしろ、の5つです。',
    ...[['肯定 some ／ 否定・疑問 any', C.blue, FILL.blue], ['すすめる・たのむ → some', C.red, FILL.red], ['no ＝ not any', C.green, FILL.green], ['something cold ／ to drink', C.purple, FILL.purple]].map((a, i) => bx(30, 12 + i * 52, 260, 40, a[0], a[1], a[2], 13))),
]);

// ══ 8 another・the other・others ══
const dots3 = (xs: number[], y: number, cols: [string, string][]): DiagramElement[] =>
  xs.map((x, i) => ci(x, y, 16, undefined, cols[i][0], cols[i][1]));
const otherFig: DiagramFigure = show([
  S('例題です。I have two brothers. One is a student, and ( ) is a teacher. の空所は the other です。まず、兄弟は「2人」と数が決まっています。',
    ...dots3([110, 210], 50, [[C.blue, FILL.blue], [C.gray, FILL.gray]]), lb(110, 84, 'One', 13, C.blue, 'middle', true), lb(210, 84, '?', 13, C.gray, 'middle', true), cap('全部で2人と決まっている', C.blue, FILL.blue)),
  S('❓なぜ the がつくのでしょう。2人のうち1人を言ったら、残りは1人に決まるからです。「どれか分かる1つ」なので the をつけて the other にします。',
    ...dots3([110, 210], 50, [[C.blue, FILL.blue], [C.red, FILL.red]]), lb(110, 84, 'One', 13, C.blue, 'middle', true), lb(210, 84, 'the other', 13, C.red, 'middle', true), cap('残りの1つが決まる → the other', C.red, FILL.red)),
  S('3つ以上のときは、1つ目を one、次の1つを another、最後の1つを the other と言います。ここで、another は an と other が合わさった語で「もう1つ別の」という意味です。',
    ...dots3([80, 160, 240], 50, [[C.blue, FILL.blue], [C.purple, FILL.purple], [C.red, FILL.red]]), lb(80, 84, 'one', 13, C.blue, 'middle', true), lb(160, 84, 'another', 13, C.purple, 'middle', true), lb(240, 84, 'the other', 13, C.red, 'middle', true), cap('one → another → the other', C.purple, FILL.purple)),
  S('❓なぜ3つのとき、最後の1つは the other になるのでしょう。1つ目と2つ目を言った時点で、残りは1つに決まるからです。「どれか分かる1つ」には the がつきます。2つのときの the other と考え方は同じです。',
    ...dots3([80, 160, 240], 50, [[C.gray, FILL.gray], [C.gray, FILL.gray], [C.red, FILL.red]]), lb(120, 84, 'one と another を言った', 12, C.gray, 'middle'), lb(240, 84, 'the other', 13, C.red, 'middle', true), ln(66, 74, 174, 74, C.gray, false, 2), cap('残りが1つに決まる → the', C.red, FILL.red)),
  S('another の使い方です。This cup is dirty. Please give me ( ) one. の空所は another です。❓なぜ another なのでしょう。another は an がもとで単数の名詞につき、「数が決まっていない、別の1つ」を表すからです。cup は1つを求めているので単数です。',
    bx(14, 20, 130, 40, 'This cup（汚れた）', C.gray, FILL.gray, 12), bx(176, 20, 130, 40, 'another one', C.purple, FILL.purple, 14), ar(146, 40, 174, 40, C.purple), cap('another ＝ もう1つ別の（単数）', C.purple, FILL.purple)),
  S('次はりんごです。There are three apples. One is red, and ( ) are green. 3つのうち赤い1つを除いた残りは、2つとも green です。❓なぜ複数の the others なのでしょう。残りが複数で、しかも「残り全部」と決まっているからです。are を使っていることからも複数だと分かります。',
    ...dots3([80, 160, 240], 50, [[C.red, FILL.red], [C.green, FILL.green], [C.green, FILL.green]]), lb(80, 84, 'One', 13, C.red, 'middle', true), lb(200, 84, 'the others', 13, C.green, 'middle', true), ln(146, 74, 254, 74, C.green, false, 2), cap('残り全部 ＝ the others', C.green, FILL.green)),
  S('決まっていない残りもあります。Some students like music, and ( ) like sports. の空所は others です。❓なぜ the がつかないのでしょう。音楽が好きな人以外の「全員」とは限らず、残りの人数が決まっていないからです。',
    ...dots3([50, 110, 170, 230, 290], 44, [[C.blue, FILL.blue], [C.blue, FILL.blue], [C.green, FILL.green], [C.green, FILL.green], [C.gray, FILL.gray]]).map((e) => ({ ...e, r: 12 }) as DiagramElement), lb(80, 78, 'Some', 13, C.blue, 'middle', true), lb(200, 78, 'others', 13, C.green, 'middle', true), lb(290, 78, '…', 13, C.gray, 'middle'), cap('決まっていない残り ＝ others', C.green, FILL.green)),
  S('❓the others と others のちがいは？ 数が決まっているかどうかです。3つのうち残りが2つと決まっていれば the others、いろいろな人がいて残りがはっきりしなければ others です。',
    ...chips(24, [K('決まっている残り', 2), R('the others', 1)], { h: 34 }), ...chips(70, [K('決まっていない残り', 2), G('others', 1)], { h: 34 }), lb(160, 130, 'the があるかどうかで見分ける', 12, C.ink, 'middle', true), cap('数が決まっていれば the', C.blue, FILL.blue)),
  S('other だけのときは、名詞の前につきます。other students（ほかの生徒たち）のようになります。❓others には名詞がないのはなぜでしょう。others は「other ＋ 名詞（複数）」をひとまとめにした代名詞で、名詞の代わりをしているからです。',
    ...chips(24, [G('other'), B('students', 1)], { h: 36, size: 13 }), ar(160, 66, 160, 84, C.gray), bx(110, 90, 100, 34, 'others', C.green, FILL.green, 14), cap('other ＋ 名詞 ＝ others', C.green, FILL.green)),
  S('見分け方のまとめです。2つ → one と the other。3つ以上 → one、another、the other。残り全部 → the others。決まっていない残り → others です。',
    ...[['2つ：one → the other', C.red, FILL.red], ['3つ以上：one → another → the other', C.purple, FILL.purple], ['残り全部：the others', C.green, FILL.green], ['決まっていない残り：others', C.blue, FILL.blue]].map((a, i) => bx(30, 12 + i * 52, 260, 40, a[0], a[1], a[2], 13))),
]);

// ══ 9 every・each・all・both・either・neither ══
const everyFig: DiagramFigure = show([
  S('例題です。Every student ( ) a uniform. (wear) の空所は wears です。❓every は「みんな」の意味なのに、なぜ三単現の s がつくのでしょう。答えを順に見ていきます。',
    ...chips(30, [B('Every student', 2), R('wears', 1), G('a uniform.', 2)], { h: 40, size: 13 }), hd('「みんな」なのに wears？', 100), cap('s がつく理由は？', C.blue, FILL.blue)),
  S('every は「1人1人をすべて見る」語です。形は every ＋ 単数名詞になります。❓なぜ単数なのでしょう。みんなをひとまとめに見るのではなく、1人ずつ順に見るから、学生1人の形が続くからです。',
    ...[50, 110, 170, 230].map((x) => ci(x, 44, 14, undefined, C.blue, FILL.blue)), ...[50, 110, 170, 230].map((x) => ar(x, 64, x, 82, C.blue)), lb(160, 100, 'どの1人も wears', 13, C.blue, 'middle', true), cap('every ＋ 単数名詞 ＝ 単数扱い', C.blue, FILL.blue)),
  S('確認します。Every boy in my class ( ) soccer. (like) の空所は likes です。主語は boy（単数）なので、動詞に s がつきます。',
    ...chips(30, [B('Every boy in my class', 3), R('likes', 1), G('soccer.', 1)], { h: 40, size: 12 }), lb(160, 94, 'every boy ＝ 三人称単数', 13, C.red, 'middle', true), cap('動詞に s がつく', C.red, FILL.red)),
  S('each も同じです。each ＋ 単数名詞は単数扱いで、動詞に s がつきます。Each student has a desk. ❓every とのちがいは？ every は「全員」に、each は「1人1人別々に」に重点があります。形と扱いは同じです。',
    ...chips(30, [B('Each student', 2), R('has', 1), G('a desk.', 1)], { h: 40, size: 13 }), lb(160, 94, 'each ＝ 1つ1つ別々に', 13, C.blue, 'middle', true), cap('each ＋ 単数名詞 ＝ 単数扱い', C.blue, FILL.blue)),
  S('all は3つ以上のすべてで、複数名詞につきます。All the students wear uniforms. ❓every との形のちがいは？ every は単数名詞、all は複数名詞につくので、動詞の形も変わります。',
    ...chips(24, [K('every', 1), B('student', 1), R('wears', 1)], { h: 34 }), ...chips(70, [K('all', 1), B('students', 1), R('wear', 1)], { h: 34 }), lb(160, 126, '単数 → s あり ／ 複数 → s なし', 12, C.ink, 'middle', true), cap('all ＋ 複数名詞（3つ以上）', C.blue, FILL.blue)),
  S('2つを対象にするときは both・either・neither を使います。Both of my sisters live in Tokyo.（私の姉は2人とも東京に住んでいる）。❓なぜ live に s がないのでしょう。both は「2つとも」で、2つ以上なので複数扱いだからです。',
    ...[110, 210].map((x) => ci(x, 44, 16, undefined, C.green, FILL.green)), lb(160, 82, 'Both ＝ 2人とも', 13, C.green, 'middle', true), ...chips(102, [G('Both of my sisters', 3), R('live', 1), K('in Tokyo.', 2)], { h: 30, size: 11 }), cap('both ＝ 2つとも（複数扱い）', C.green, FILL.green)),
  S('either は「2つのうちどちらか」、neither は「どちらも〜ない」です。❓either と neither はどうちがうのでしょう。either は2つのうちの1つを選ぶ語、neither は2つとも打ち消す語です。',
    ...[110, 210].map((x, i) => ci(x, 44, 16, undefined, i === 0 ? C.blue : C.gray, i === 0 ? FILL.blue : FILL.gray)), lb(160, 82, 'either ＝ どちらか1つ', 13, C.blue, 'middle', true), ...[110, 210].map((x) => ln(x - 14, 30, x + 14, 58, C.red, false, 2)), lb(160, 106, 'neither ＝ どちらも〜ない', 13, C.red, 'middle', true), cap('either ＝ どちらか ／ neither ＝ どちらも〜ない', C.blue, FILL.blue, 11)),
  S('neither はそれ自体が否定の語なので、not と重ねません。I do not like neither of the bags. は誤りです。❓なぜ重ねられないのでしょう。否定が二重になり、打ち消し合って肯定の意味になってしまうからです。',
    bx(14, 20, 292, 34, 'I do not like neither of them.  ✕', C.red, FILL.red, 13), bx(14, 66, 292, 34, 'I like neither of them.  ○', C.green, FILL.green, 13), lb(160, 122, '否定は1回だけ', 13, C.gray, 'middle', true), cap('neither と not は重ねない', C.red, FILL.red)),
  S('not と使うなら either です。I do not like ( ) of the two bags. の空所は either です。not ＋ either ＝ neither と書きかえられます。',
    bx(14, 20, 292, 34, 'I do not like either of the two bags.', C.blue, FILL.blue, 13), ar(160, 56, 160, 74, C.gray), bx(14, 80, 292, 34, 'I like neither of them.', C.green, FILL.green, 13), cap('not ＋ either ＝ neither', C.green, FILL.green)),
  S('まとめです。every・each は単数扱い（s あり）、all は3つ以上、both は2つとも（複数扱い）、either・neither は2つのうち、neither は not と重ねません。',
    ...[['every・each ＋ 単数名詞 ＋ s', C.blue, FILL.blue], ['all ＋ 複数名詞（3つ以上）', C.green, FILL.green], ['both・either・neither ＝ 2つ', C.purple, FILL.purple], ['neither は not と重ねない', C.red, FILL.red]].map((a, i) => bx(30, 12 + i * 52, 260, 40, a[0], a[1], a[2], 13))),
]);

// ══ 10 知覚動詞のあとの原形と ing形 ══
const bar = (x1: number, x2: number, y: number, col: string): DiagramElement => ln(x1, y, x2, y, col, false, 6);
const chikaku: DiagramFigure = show([
  S('see・hear・feel・watch のような感覚の動詞のあとには、「人が〜するのを」という形が続きます。形は 知覚動詞 ＋ 人・物 ＋ 動詞 です。例は I saw him enter the room.（彼が部屋に入るのを見た）です。',
    ...chips(28, [B('I'), R('saw'), G('him'), P('enter')], { h: 38, size: 13 }), lb(160, 92, '知覚動詞 ＋ 人 ＋ 動詞', 13, C.ink, 'middle', true), cap('「人が〜するのを見る」', C.blue, FILL.blue)),
  S('原形は「動作の全体」を見聞きしたときに使います。彼がドアを開け、入って、部屋に入りきるまでを最初から最後まで見たなら enter です。❓なぜ原形が全体なのでしょう。原形は動作をひとまとまりで言い切る形で、途中で切れていないからです。',
    ln(30, 70, 290, 70, C.gray, false, 2), bar(50, 270, 70, C.green), lb(50, 54, '始め', 11, C.gray), lb(270, 54, '終わり', 11, C.gray), lb(160, 100, '始めから終わりまで', 13, C.green, 'middle', true), cap('saw him enter ＝ 全体を見た', C.green, FILL.green)),
  S('ing形は「動作の最中」を見聞きしたときに使います。彼が部屋に入っている途中を見たなら entering です。❓なぜ ing形が最中なのでしょう。ing形は「〜している」という、動作が続いている状態を表す形だからです。',
    ln(30, 70, 290, 70, C.gray, false, 2), bar(110, 200, 70, C.purple), lb(50, 54, '始め', 11, C.gray), lb(270, 54, '終わり', 11, C.gray), lb(155, 100, '途中だけ', 13, C.purple, 'middle', true), cap('saw him entering ＝ 最中を見た', C.purple, FILL.purple)),
  S('2つを並べます。原形は全体、ing形は最中です。どちらも「見た」ことは同じですが、どこまで見たかがちがいます。',
    ln(30, 40, 290, 40, C.gray, false, 2), bar(50, 270, 40, C.green), lb(160, 24, 'enter ＝ 始めから終わりまで', 12, C.green, 'middle', true), ln(30, 96, 290, 96, C.gray, false, 2), bar(110, 200, 96, C.purple), lb(160, 80, 'entering ＝ 途中', 12, C.purple, 'middle', true), cap('全体 → 原形 ／ 最中 → ing形', C.blue, FILL.blue)),
  S('確認1です。I heard the girl ( ) in the next room. (sing) は「歌っている最中の声を聞いた」ので singing です。❓歌い終わるまで聞いたなら？ 全部を聞いたことになるので原形の sing になります。',
    ...chips(28, [B('I heard'), G('the girl'), P('singing', 1)], { h: 38, size: 12 }), ln(30, 96, 290, 96, C.gray, false, 2), bar(100, 200, 96, C.purple), lb(160, 118, '途中を聞いた', 12, C.purple, 'middle', true), cap('I heard the girl singing.', C.purple, FILL.purple)),
  S('確認2です。I saw him ( ) the street. (cross) は「渡りきるところを見た」ので cross です。❓なぜ原形なのでしょう。道を渡り始めてから渡りきるまでの全体を見たからです。',
    ...chips(28, [B('I saw'), G('him'), P('cross', 1), K('the street.', 2)], { h: 38, size: 12 }), ln(30, 96, 290, 96, C.gray, false, 2), bar(50, 270, 96, C.green), lb(160, 118, '渡りきるまで全部', 12, C.green, 'middle', true), cap('I saw him cross the street.', C.green, FILL.green)),
  S('知覚動詞のあとの動詞の前に to はつけません。I saw him to run. は誤りで、I saw him run. が正しい形です。❓なぜ to がつかないのでしょう。ここに来る原形は、to のつかない原形（原形不定詞）と決まっているからです。',
    bx(14, 20, 292, 34, 'I saw him to run.  ✕', C.red, FILL.red, 14), bx(14, 66, 292, 34, 'I saw him run.  ○', C.green, FILL.green, 14), cap('to は入れない', C.red, FILL.red)),
  S('知覚動詞は see・watch・hear・feel・notice などです。「感覚で気づく」動詞と覚えます。どれも 動詞 ＋ 人 ＋ 動詞 の同じ形を使います。',
    ...chips(24, [B('see'), B('watch'), B('hear')], { h: 34 }), ...chips(70, [B('feel'), B('notice')], { h: 34 }), lb(160, 126, '目・耳・肌などで気づく動詞', 12, C.gray, 'middle', true), cap('形はすべて同じ', C.blue, FILL.blue)),
  S('見分け方の順序です。①知覚動詞があるか ②動作を始めから終わりまで見聞きしたか、途中か ③全体なら原形、途中なら ing形、と決めます。❓迷ったらどうするのでしょう。日本文に「〜しているところを」とあれば ing形、「〜するのを」だけなら原形と考えます。',
    ...[['①知覚動詞があるか', C.blue, FILL.blue], ['②全体か、途中か', C.blue, FILL.blue], ['全体 → 原形　／　途中 → ing形', C.green, FILL.green]].map((a, i) => bx(30, 14 + i * 50, 260, 40, a[0], a[1], a[2], 13)), cap('「〜しているところを」→ ing形', C.purple, FILL.purple, 12, 172)),
  S('まとめです。知覚動詞 ＋ 人 ＋ 原形（全体）／ ing形（最中）。どちらも to は入りません。',
    ...[['see・hear・feel・watch ＋ 人', C.blue, FILL.blue], ['全体を見聞き → 原形', C.green, FILL.green], ['最中を見聞き → ing形', C.purple, FILL.purple], ['動詞の前に to は入れない', C.red, FILL.red]].map((a, i) => bx(30, 12 + i * 52, 260, 40, a[0], a[1], a[2], 13))),
]);

// ══ 11 助動詞のあとの be と受け身 ══
const meter = (): DiagramElement[] => [
  bx(20, 40, 90, 30, 'cannot be', C.red, FILL.red, 12), bx(115, 40, 90, 30, 'may be', C.main, FILL.yellow, 12), bx(210, 40, 90, 30, 'must be', C.green, FILL.green, 12),
  lb(65, 88, 'のはずがない', 11, C.red, 'middle', true), lb(160, 88, 'かもしれない', 11, C.main, 'middle', true), lb(255, 88, 'にちがいない', 11, C.green, 'middle', true),
  ln(20, 108, 300, 108, C.gray, false, 2), lb(30, 124, '0％', 11, C.gray, 'start'), lb(160, 124, '50％', 11, C.gray, 'middle'), lb(290, 124, '100％', 11, C.gray, 'end'),
];
const joDoushi: DiagramFigure = show([
  S('助動詞（can・will・must など）のあとの動詞は、必ず原形です。can go、will play のように、主語が何でも形は変わりません。❓なぜ原形なのでしょう。助動詞が「できる」「するだろう」などの意味を足すので、動詞自身は変化せず、もとの形で置くからです。',
    ...chips(26, [B('He'), Y('can'), G('go')], { h: 38, size: 14 }), ...chips(74, [B('She'), Y('will'), G('play')], { h: 38, size: 14 }), lb(160, 130, 'あとは原形', 13, C.red, 'middle', true), cap('助動詞 ＋ 原形', C.blue, FILL.blue)),
  S('受け身は be ＋ 過去分詞で作ります。The room is cleaned.（部屋はそうじされる）。❓なぜ be ＋ 過去分詞なのでしょう。過去分詞は「〜された」という状態を表す形で、be は「〜である」と、そのままの状態にあることを表すからです。「そうじされた状態である」という意味になります。',
    ...chips(28, [B('The room'), R('is'), G('cleaned.', 1)], { h: 38, size: 13 }), lb(160, 88, 'be ＋ 過去分詞 ＝ 〜される', 13, C.ink, 'middle', true), cap('受け身 ＝ be ＋ 過去分詞', C.blue, FILL.blue)),
  S('この2つが合わさります。Stars can ( ) at night. 「星は夜に見られる」の空所は be seen です。❓なぜ is ではなく be なのでしょう。助動詞のあとは必ず原形で、is の原形は be だからです。だから 助動詞 ＋ be ＋ 過去分詞 になります。',
    ...chips(28, [B('Stars'), Y('can'), R('be'), G('seen')], { h: 38, size: 13 }), lb(160, 88, 'is → be（原形）', 13, C.red, 'middle', true), cap('can ＋ be ＋ 過去分詞', C.red, FILL.red)),
  S('未来の受け身も同じです。The game will be held next week.（試合は来週開かれる）は will ＋ be ＋ held の形です。❓will の代わりに is を使わないのはなぜでしょう。will のあとも原形と決まっているからです。',
    ...chips(28, [B('The game'), Y('will'), R('be'), G('held')], { h: 38, size: 13 }), lb(160, 88, 'will のあとも原形 be', 13, C.red, 'middle', true), cap('will be held ＝ 開かれる', C.red, FILL.red)),
  S('must ＋ be ＋ 過去分詞は「〜されなければならない」です。This room must be cleaned every day. は「この部屋は毎日そうじされなければならない」です。❓なぜ「されなければ」なのでしょう。must が「〜しなければならない」、be cleaned が「そうじされる」で、2つの意味が合わさるからです。',
    ...chips(24, [B('This room'), Y('must'), R('be'), G('cleaned')], { h: 38, size: 12 }), bx(14, 84, 292, 30, 'そうじ されなければ ならない', C.green, FILL.green, 13), cap('must ＋ be ＋ 過去分詞', C.green, FILL.green)),
  S('must be には別の意味もあります。He worked all night. He ( ) be tired. の空所は must で「疲れているにちがいない」です。❓なぜ「ちがいない」なのでしょう。一晩中働いたという理由があるので、「疲れている」と強く確信できるからです。',
    bx(14, 16, 292, 28, 'He worked all night.', C.blue, FILL.blue, 13), ...chips(56, [B('He'), Y('must'), R('be'), G('tired.')], { h: 36, size: 13 }), lb(160, 116, '理由がある → 強い推量', 13, C.green, 'middle', true), cap('must be ＝ にちがいない', C.green, FILL.green)),
  S('cannot be は「〜のはずがない」です。That story cannot be true.（その話が本当のはずがない）。❓なぜ「できない」ではないのでしょう。ここでの cannot は能力ではなく「そんなことは考えられない」という判断を表すからです。must be の反対の意味になります。',
    ...chips(30, [B('That story'), Y('cannot'), R('be'), G('true.')], { h: 38, size: 12 }), lb(160, 94, '本当のはずがない', 14, C.red, 'middle', true), cap('cannot be ＝ のはずがない', C.red, FILL.red)),
  S('may be は「〜かもしれない」で、確信の強さは中くらいです。強い順に並べると、must be（ほぼ確実）→ may be（半々）→ cannot be（ほぼありえない）となります。❓なぜ3つ並べるのでしょう。日本語訳を覚えるより、確信の強さで並べたほうが取りちがえにくいからです。',
    ...meter(), cap('確信の強さで覚える', C.blue, FILL.blue)),
  S('受け身かどうかは、主語が「される側」かで決めます。The room must be cleaned. は部屋が「そうじされる」側なので受け身。He must be tired. は疲れているのは彼自身なので、be ＋ 形容詞（受け身ではない）です。',
    ...chips(24, [B('The room'), R('must be cleaned', 2), K('される側 → 受け身', 2)], { h: 36, size: 10 }), ...chips(74, [B('He'), R('must be tired', 2), K('彼自身の状態', 2)], { h: 36, size: 10 }), cap('主語が「される側」なら受け身', C.blue, FILL.blue)),
  S('まとめです。助動詞のあとは原形、受け身は 助動詞 ＋ be ＋ 過去分詞。must be はにちがいない、cannot be はのはずがない、may be はかもしれない。',
    ...[['助動詞 ＋ 原形', C.blue, FILL.blue], ['助動詞 ＋ be ＋ 過去分詞 ＝ 〜される', C.red, FILL.red], ['must be ＝ にちがいない', C.green, FILL.green], ['cannot be ＝ のはずがない', C.red, FILL.red]].map((a, i) => bx(30, 12 + i * 52, 260, 40, a[0], a[1], a[2], 13))),
]);

// ══ 12 時制の一致 ══
const jisei: DiagramFigure = show([
  S('「〜と言った」「〜と思った」のように、主になる文の動詞が過去形のとき、あとの節の動詞も過去の形にそろえます。I think he is kind. を I thought で始めると I thought he was kind. になります。',
    bx(14, 20, 292, 30, 'I think he is kind.', C.blue, FILL.blue, 14), ar(160, 52, 160, 72, C.red), bx(14, 78, 292, 30, 'I thought he was kind.', C.green, FILL.green, 14), cap('is → was', C.red, FILL.red)),
  S('❓なぜ is を was に変えるのでしょう。thought は過去に考えたことを表すので、「そのとき彼は親切だった」と、そのときの様子を過去から見て言うからです。話す時点ではなく、考えたときが基準になります。',
    ln(30, 70, 290, 70, C.gray, false, 2), ci(90, 70, 6, undefined, C.red, FILL.red), ci(250, 70, 6, undefined, C.gray, FILL.gray), lb(90, 50, 'thought', 12, C.red, 'middle', true), lb(250, 50, '今', 12, C.gray, 'middle'), ar(90, 88, 90, 108, C.red), lb(90, 122, 'he was kind', 12, C.red, 'middle', true), cap('考えたときが基準', C.red, FILL.red)),
  S('動詞ごとの変わり方です。am・is → was、are → were、do・does → did、have・has → had。これらは過去形の形そのものです。',
    ...chips(20, [K('am / is'), R('→ was')], { h: 28 }), ...chips(54, [K('are'), R('→ were')], { h: 28 }), ...chips(88, [K('do / does'), R('→ did')], { h: 28 }), ...chips(122, [K('have / has'), R('→ had')], { h: 28 }), cap('現在形 → 過去形', C.blue, FILL.blue, 13, 176)),
  S('助動詞も変わります。She said that she ( ) come. 元の言葉は I will come. なので、will は would になります。❓なぜ would なのでしょう。will は「これから」を表す語で、過去から見た「これから」は would で表すからです。',
    bx(14, 16, 292, 28, '元の言葉： I will come.', C.gray, FILL.gray, 13), ...chips(56, [B('She said that she', 2), R('would', 1), G('come.')], { h: 38, size: 12 }), lb(160, 116, '過去から見た未来 ＝ would', 13, C.red, 'middle', true), cap('will → would', C.red, FILL.red)),
  S('can は could に、may は might に変わります。He said that he could swim.（泳げると言った）。❓なぜ過去の形にするのでしょう。will と同じで、「言ったとき」から見た能力や可能性だからです。',
    ...chips(24, [K('can'), R('→ could')], { h: 34 }), ...chips(70, [K('may'), R('→ might')], { h: 34 }), lb(160, 126, 'He said that he could swim.', 13, C.ink, 'middle', true), cap('助動詞も過去形にそろえる', C.blue, FILL.blue)),
  S('確認です。I knew that he ( ) my brother. (is / was) の空所は was です。knew が過去形なので、that 節の is を was に変えます。',
    ...chips(28, [B('I knew that he', 3), R('was', 1), G('my brother.', 2)], { h: 40, size: 13 }), lb(160, 94, 'knew（過去）→ was', 13, C.red, 'middle', true), cap('主節が過去 → that 節も過去形', C.red, FILL.red)),
  S('主節が現在形のときは、that 節は変えません。I think that he is kind. ❓なぜ変えないのでしょう。今考えていることなので、そのときの基準が今のままだからです。基準がずれないので、形をそろえる必要がありません。',
    ...chips(28, [B('I think that he', 2), R('is', 1), G('kind.')], { h: 40, size: 13 }), lb(160, 94, '今の話 → そのまま', 13, C.green, 'middle', true), cap('主節が現在 → 変えない', C.green, FILL.green)),
  S('例外です。Our teacher said that the earth ( ) around the sun. の空所は goes（現在形）のままです。主節の said が過去でも、変えません。❓なぜでしょう。地球が太陽のまわりを回ることは、昔も今もこれからも変わらない事実だからです。過去のことだけに限られないので、現在形で表します。',
    ln(30, 44, 290, 44, C.gray, false, 2), bar(30, 290, 44, C.green), lb(160, 28, '昔も今もこれからも', 12, C.green, 'middle', true), bx(14, 66, 292, 30, 'Our teacher said that the earth ( ) around the sun.', C.blue, FILL.blue, 12), ar(160, 98, 160, 114, C.red), bx(110, 118, 100, 32, 'goes', C.red, FILL.red, 14), cap('変わらない事実は現在形のまま', C.green, FILL.green)),
  S('見分け方の順序です。①主節の動詞が過去か ②変わらない事実か ③過去なら that 節も過去形、事実なら現在形のまま、と考えます。',
    ...[['①主節が過去か？ → No なら変えない', C.blue, FILL.blue], ['②変わらない事実か？ → Yes なら現在形', C.green, FILL.green], ['③ほかは that 節も過去形にする', C.red, FILL.red]].map((a, i) => bx(20, 14 + i * 50, 280, 40, a[0], a[1], a[2], 12)), cap('will → would ／ can → could ／ is → was', C.red, FILL.red, 12, 172)),
  S('まとめです。主節が過去 → that 節も過去形（is → was、will → would、can → could）。変わらない事実は現在形のまま。主節が現在のときは変えません。',
    ...[['主節が過去 → that 節も過去形', C.red, FILL.red], ['will → would ／ can → could', C.red, FILL.red], ['変わらない事実 → 現在形のまま', C.green, FILL.green], ['主節が現在 → 変えない', C.blue, FILL.blue]].map((a, i) => bx(30, 12 + i * 52, 260, 40, a[0], a[1], a[2], 13))),
]);

export const DIAGRAMS_EIGO_KOKO_A: Record<string, DiagramFigure> = {
  '適語補充の考え方': tekigo,
  '並べかえ問題の手順': narabe,
  '下線部和訳の手順': wayaku,
  '対話文の空所補充の手順': taiwa,
  'グラフ・表・メールの読み取り': graph,
  'one・it・that の使い分け': oneItThat,
  'some・any・no と someone・something': someAny,
  'another・the other・others の使い分け': otherFig,
  'every・each・all・both・either・neither': everyFig,
  '知覚動詞のあとの原形と ing形': chikaku,
  '助動詞のあとの be と受け身': joDoushi,
  '時制の一致': jisei,
};
