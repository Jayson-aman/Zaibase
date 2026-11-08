import type { DiagramElement, Figure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, show, band, fresh, cover } from './diagram-kit';

// 本試験対策 2027年2月号 理科・中学受験 後半（c26〜c50）の「動く図解」。キーは問題ID。座標は 320×240。
// 図は上（y＜165）に描き、下の帯（y≥170）に短い結論を出す。文字を持たない形は多角形（pg）で描く。

const m = (text: string, color: string = C.main, fill: string = FILL.warm): DiagramElement[] =>
  band(170, bx(20, 176, 280, 34, text, color, fill, 13));

const rect = (x: number, y: number, w: number, h: number, color?: string, fill?: string): DiagramElement =>
  pg([[x, y], [x + w, y], [x + w, y + h], [x, y + h]], color, fill);
const ell = (cx: number, cy: number, rx: number, ry: number, color?: string, fill?: string): DiagramElement =>
  pg(Array.from({ length: 32 }, (_, i) => [cx + rx * Math.cos((i / 32) * 2 * Math.PI), cy + ry * Math.sin((i / 32) * 2 * Math.PI)] as [number, number]), color, fill);
const disc = (cx: number, cy: number, r: number, color?: string, fill?: string): DiagramElement => ell(cx, cy, r, r, color, fill);

const cx4 = [44, 122, 200, 278];
/** 4つの名前の箱（上段） */
const names4 = (labels: string[], y = 24, h = 36, size = 12): DiagramElement[] =>
  labels.map((p, i) => bx(cx4[i] - 35, y, 70, h, p, C.main, FILL.warm, size));
/** 名前の下に付ける小さな札 */
const tag = (i: number, y: number, text: string, color: string, fill: string, h = 36, size = 10): DiagramElement => bx(cx4[i] - 33, y, 66, h, text, color, fill, size);
const mark = (i: number, y: number, ok: boolean): DiagramElement => ci(cx4[i], y, 12, ok ? '○' : '×', ok ? C.green : C.red, ok ? FILL.green : FILL.red, 14);

// ═════════ 生物 ═════════

// c26 風媒花
const c26 = show([
  { note: '4つの花のうち、花粉を風で運んでもらう花を選びます。', add: [...names4(['アブラナ', 'イネ', 'ヒマワリ', 'ツツジ']), ...m('風で運ばれる花は？')] },
  { note: '❓虫に運んでもらう花と、風に運んでもらう花では、何がちがうでしょう。虫を呼ぶ花は、目立つ花びらとみつを持ちます。風で運ぶ花は、虫を呼ぶ必要がないので、花びらが小さく、花粉が軽くて多いのです。', add: [bx(20, 62, 130, 34, '虫媒花\n大きな花びら・みつ', C.blue, FILL.blue, 10), bx(170, 62, 130, 34, '風媒花\n小さな花・軽い花粉', C.green, FILL.green, 10), ...m('目立つ花びら＝虫を呼ぶ', C.blue, FILL.blue)] },
  { note: 'アブラナは、黄色い大きな花びらがあり、みつを出します。ミツバチやチョウが来る、虫媒花です。', add: [tag(0, 130, '黄色い花びら\nみつ', C.blue, FILL.blue, 34), mark(0, 114, false), ...m('アブラナ：虫媒花', C.blue, FILL.blue)] },
  { note: 'ヒマワリは、大きな黄色い花びらが目立ち、ハチなどが来ます。虫媒花です。', add: [tag(2, 130, '大きな\n花びら', C.blue, FILL.blue, 34), mark(2, 114, false), ...m('ヒマワリ：虫媒花', C.blue, FILL.blue)] },
  { note: 'ツツジも、大きな花びらがあって、みつを出します。虫媒花です。', add: [tag(3, 130, '大きな\n花びら', C.blue, FILL.blue, 34), mark(3, 114, false), ...m('ツツジ：虫媒花', C.blue, FILL.blue)] },
  { note: '❓残ったイネは、どうでしょう。花びらがなく、小さな花がたくさんつきます。花粉が軽くて多く、風で運ばれます。風媒花です。', add: [tag(1, 130, '花びらなし\n軽い花粉', C.green, FILL.green, 34), mark(1, 114, true), ...m('イネ：風媒花', C.green, FILL.green)] },
  { note: '答え。イネです。確かめ：ほかの3つは、花びらが大きく目立ちます。目立つ花びらは虫を呼ぶ道具なので、風で運ぶ花にはありません。', add: m('答え：イネ', C.green, FILL.green) },
], '答え：イネ');

// c27 シダ・コケ
const c27 = show([
  { note: 'イヌワラビはシダ植物、ゼニゴケはコケ植物です。ふえ方とからだのつくりを比べます。', add: [bx(20, 22, 110, 40, 'イヌワラビ\n（シダ植物）', C.green, FILL.green, 12), bx(190, 22, 110, 40, 'ゼニゴケ\n（コケ植物）', C.blue, FILL.blue, 12), ...m('シダとコケの共通点は？')] },
  { note: '❓花はさくでしょうか。さきません。種子もつくりません。花がさいて種子ができるのは、種子植物（アブラナやイネなど）です。', add: [bx(40, 76, 240, 28, '花もさかず、種子もつくらない', C.red, FILL.red, 12), ...m('花なし・種子なし', C.red, FILL.red)] },
  { note: '❓では、どうやってふえるのでしょう。胞子（ほうし）という、とても小さな粒をつくり、風でとばしてふえます。2つとも同じです。', add: [bx(60, 112, 200, 28, '胞子（ほうし）でふえる', C.green, FILL.green, 12), ar(75, 64, 110, 110, C.green), ar(245, 64, 210, 110, C.green), ...m('どちらも胞子でふえる', C.green, FILL.green)] },
  { note: 'イヌワラビには、根・茎・葉の区別があります。この点は種子植物と同じです。', add: [lb(75, 158, '根・茎・葉の区別あり', 10, C.green, 'middle'), ...m('シダ：根・茎・葉がある', C.green, FILL.green)] },
  { note: '❓ゼニゴケは、どうでしょう。平たいからだが地面にはりつき、根・茎・葉の区別がはっきりしません。', add: [lb(245, 158, '平たくて区別なし', 10, C.blue, 'middle'), ...m('コケ：区別がはっきりしない', C.blue, FILL.blue)] },
  { note: '4つの文を見くらべます。「花がさく」「ゼニゴケは種子」「どちらも区別がある」は、どれも当てはまりません。', add: m('3つの文は誤り', C.red, FILL.red) },
  { note: '答え。「どちらも花はさかず、胞子でふえる」です。確かめ：花も種子もないのが、シダとコケに共通のしるしです。', add: m('答え：花なし・胞子でふえる', C.green, FILL.green) },
], '答え：どちらも花はさかず、胞子でふえる');

// c28 ジャガイモ
const c28 = show([
  { note: '種いもを植えたジャガイモです。地面の下に、いもがあります。', add: [ln(20, 90, 300, 90, C.gray, false, 2), lb(24, 84, '地面', 10, C.gray, 'start'), ln(160, 40, 160, 90, C.green, false, 3), ell(160, 135, 40, 18, C.main, FILL.yellow), lb(214, 140, 'いも', 11, C.main, 'start'), ...m('ジャガイモのいもは何？')] },
  { note: '❓いもは、どこから育つのでしょう。地上の茎から、地面の下に細い茎がのびて、その先がふくらんでいもになります。', add: [ln(160, 90, 160, 118, C.green, false, 3), lb(240, 108, '地下の茎', 10, C.green, 'start'), ...m('茎の先がふくらむ', C.green, FILL.green)] },
  { note: '❓いもの表面に、くぼみ（目）がありますね。ここには、芽のもとがあります。根はありません。', add: [ci(145, 132, 3, undefined, C.red, C.red), ci(170, 128, 3, undefined, C.red, C.red), ci(175, 142, 3, undefined, C.red, C.red), lb(70, 158, 'くぼみ（目）', 10, C.red, 'middle'), ar(104, 150, 138, 138, C.red), ...m('くぼみから芽が出る', C.red, FILL.red)] },
  { note: '種いもを土に植えると、目から芽が出て、新しい株になります。種子は使いません。', add: [ln(145, 129, 128, 100, C.green, false, 2), ...m('目から芽→新しい株', C.red, FILL.red)] },
  { note: '❓サツマイモは、どうでしょう。サツマイモのいもは、根がふくらんだものです。同じ「いも」でも、ジャガイモは茎、サツマイモは根です。', add: [lb(310, 60, 'サツマイモは根', 10, C.purple, 'end'), ...m('ジャガイモ＝茎・サツマイモ＝根', C.purple, FILL.purple)] },
  { note: '種子でも実でもありません。種子は、花がさいたあとにできる、別のものです。', add: m('種子でも実でもない', C.gray, FILL.gray) },
  { note: '答え。いもは、茎がふくらんだもので、くぼみから芽が出ます。確かめ：いもに根はなく、くぼみがあるので、茎です。', add: m('答え：茎がふくらんだもの', C.green, FILL.green) },
], '答え：いもは茎がふくらんだもの');

// c29 池の小さな生き物
const c29 = show([
  { note: '池の水を顕微鏡で見ると、小さな生き物がいます。4つのうち、動物はどれでしょう。', add: [...names4(['ミカヅキモ', 'ゾウリムシ', 'アオミドロ', 'ケイソウ']), ...m('動物のなかまはどれ？')] },
  { note: '❓養分のとり方は、2通りです。光合成で自分でつくる生き物と、ほかの生き物を食べる生き物です。後者が、動物のなかまです。', add: [bx(20, 64, 130, 28, '自分でつくる（光合成）', C.green, FILL.green, 11), bx(170, 64, 130, 28, '食べて養分をとる', C.red, FILL.red, 11), ...m('養分のとり方で分ける', C.main, FILL.warm)] },
  { note: 'ミカヅキモは三日月の形で緑色、アオミドロは緑色のひも状です。どちらも光合成をします。', add: [tag(0, 126, '緑色\n光合成', C.green, FILL.green), tag(2, 126, '緑色\n光合成', C.green, FILL.green), mark(0, 110, false), mark(2, 110, false), ...m('緑色＝光合成をする', C.green, FILL.green)] },
  { note: 'ケイソウは、黄色っぽい茶色で、かたい殻を持ちます。これも光合成をします。', add: [tag(3, 126, '茶色\n光合成', C.green, FILL.green), mark(3, 110, false), ...m('ケイソウも光合成', C.green, FILL.green)] },
  { note: '❓残ったゾウリムシは、どうでしょう。ほとんど無色で、毛を動かして泳ぎ、細菌などを食べて生活しています。', add: [tag(1, 126, '無色\n食べる', C.red, FILL.red), mark(1, 110, true), ...m('ゾウリムシ：食べる動物', C.red, FILL.red)] },
  { note: '動くかどうかでは分けません。ミカヅキモなども動きますが、養分は光合成でつくります。', add: m('動くかどうかでは分けない', C.gray, FILL.gray) },
  { note: '答え。ゾウリムシです。確かめ：ほかの3つは色がついていて、光合成をします。色がほとんどなく、食べて養分をとるのはゾウリムシだけです。', add: m('答え：ゾウリムシ', C.green, FILL.green) },
], '答え：ゾウリムシ');

// c30 目のつき方
const c30 = show([
  { note: '肉食動物のライオンと、草食動物のシマウマを、上から見ます。目のつき方をくらべましょう。', add: [lb(80, 18, 'ライオン（肉食）', 11, C.red, 'middle', true), lb(240, 18, 'シマウマ（草食）', 11, C.blue, 'middle', true), ...m('目のつき方のちがい')] },
  { note: '❓ライオンの目は、どこについているでしょう。顔の前に、2つ並んでいます。', add: [ell(80, 90, 32, 30, C.red, FILL.red), disc(68, 76, 4, C.ink, C.ink), disc(92, 76, 4, C.ink, C.ink), lb(80, 140, '目は顔の前', 11, C.red, 'middle')] },
  { note: '❓前に並んだ2つの目で、同じものを見ると、どうなるでしょう。両目で見える範囲が重なり、えものまでの距離をつかみやすくなります。', add: [ar(68, 70, 48, 32, C.red), ar(92, 70, 112, 32, C.red), ...m('前向き＝距離をつかむ', C.red, FILL.red)] },
  { note: '❓シマウマの目は、どこでしょう。顔の横についています。', add: [ell(240, 90, 22, 34, C.blue, FILL.blue), disc(216, 86, 4, C.ink, C.ink), disc(264, 86, 4, C.ink, C.ink), lb(240, 140, '目は顔の横', 11, C.blue, 'middle')] },
  { note: '❓横についた目では、どう見えるでしょう。ほぼまわり全体、後ろまで見わたせます。敵をいち早く見つけて、にげられます。', add: [ar(214, 90, 180, 118, C.blue), ar(266, 90, 300, 118, C.blue), ar(214, 82, 180, 54, C.blue), ar(266, 82, 300, 54, C.blue), ...m('横向き＝広く見わたす', C.blue, FILL.blue)] },
  { note: '4つの文を見くらべます。「肉食＝前」「草食＝横」の対応が合っている文は1つだけです。', add: m('肉食＝前・草食＝横', C.main, FILL.warm) },
  { note: '答え。「ライオンは目が顔の前にあり、距離をつかみやすい」です。確かめ：ほかの3つは、前と横が入れかわっています。', add: m('答え：肉食＝目は前', C.green, FILL.green) },
], '答え：肉食動物は目が顔の前にあり、距離をつかみやすい');

// c31 骨のはたらき
const body = (): DiagramElement[] => [disc(160, 36, 18, C.gray, '#FFFFFF'), rect(135, 58, 50, 66, C.gray, '#FFFFFF')];
const c31 = show([
  { note: 'ヒトの骨には、からだを支えるほかに、大切な臓器を守るはたらきもあります。', add: [...body(), ...m('3つの骨の名前と役割')] },
  { note: '❓脳を守っている骨は、どれでしょう。頭をぐるりとつつむ、おわん形の骨で、頭がい骨といいます。', add: [disc(160, 36, 18, C.blue, FILL.blue), lb(190, 40, '(1) 頭がい骨', 11, C.blue, 'start', true), ...m('(1) 脳を守る＝頭がい骨', C.blue, FILL.blue)] },
  { note: '❓心臓や肺は、何で守られているでしょう。胸のまわりに、かごのようにならんだ細い骨、ろっ骨です。', add: [ln(140, 76, 180, 76, C.red, false, 2), ln(138, 86, 182, 86, C.red, false, 2), ln(138, 96, 182, 96, C.red, false, 2), lb(192, 92, '(2) ろっ骨', 11, C.red, 'start', true), ...m('(2) 心臓・肺＝ろっ骨', C.red, FILL.red)] },
  { note: '❓からだの中心を、頭から腰まで通る骨は何でしょう。小さな骨がつながった、背骨（せぼね）です。曲げたりのばしたりできます。', add: [ln(160, 58, 160, 124, C.purple, false, 4), lb(124, 124, '(3) 背骨', 11, C.purple, 'end', true), ...m('(3) 支える中心＝背骨', C.purple, FILL.purple)] },
  { note: '骨のはたらきは3つです。からだを支える、臓器を守る、筋肉といっしょにからだを動かす、です。', add: [bx(14, 138, 88, 26, '支える', C.main, FILL.warm, 12), bx(116, 138, 88, 26, '守る', C.main, FILL.warm, 12), bx(218, 138, 88, 26, '動かす', C.main, FILL.warm, 12), ...m('骨の3つのはたらき')] },
  { note: '確かめます。「頭＝脳」「胸＝心臓と肺」「背中＝支える中心」と、場所と守るものを対にすると、まちがえません。', add: m('場所と守るものを対にする', C.green, FILL.green) },
  { note: '答え。(1) 頭がい骨、(2) ろっ骨、(3) 背骨です。', add: m('頭がい骨・ろっ骨・背骨', C.green, FILL.green) },
], '答え：(1)頭がい骨 (2)ろっ骨 (3)背骨');

// c32 肥料と日光の実験
const hts = [24, 15, 20, 20];
const barTop = (i: number) => 150 - hts[i] * 3;
const c32Names = (): DiagramElement[] => ['ア 日光○\n肥料○', 'イ 日光○\n肥料×', 'ウ 日光×\n肥料○', 'エ 日光×\n肥料×'].map((t, i) => bx(cx4[i] - 35, 14, 70, 34, t, C.main, FILL.warm, 10));
const c32Bars = (): DiagramElement[] => hts.flatMap((v, i) => [
  rect(cx4[i] - 15, barTop(i), 30, v * 3, i < 2 ? C.green : C.gray, i < 2 ? FILL.green : FILL.gray),
  lb(cx4[i], barTop(i) - 4, `${v}cm`, 11, C.ink, 'middle', true),
]);
const c32 = show([
  { note: '同じ苗を4つ用意し、日光と肥料の条件だけを変えて10日間育てました。', add: [...c32Names(), ln(20, 150, 300, 150, C.ink, false, 2), ...m('4つの条件と結果')] },
  { note: '10日後の草たけです。アは24cm、イは15cm、ウとエはどちらも20cmです。', add: [...c32Bars(), ...m('草たけ：24・15・20・20')] },
  { note: '❓ある条件の効果を調べるには、どうすればよいでしょう。調べたい条件だけを変えて、ほかの条件は同じにして、くらべます。', add: m('調べたい条件だけ変える', C.blue, FILL.blue) },
  { note: '(1) 日光の効果を調べます。肥料は同じ（あり）で、日光だけがちがうのは、アとウです。', add: [ln(44, 160, 200, 160, C.red, false, 3), ln(44, 154, 44, 160, C.red, false, 3), ln(200, 154, 200, 160, C.red, false, 3), ...m('(1) 日光だけちがう：アとウ', C.red, FILL.red)] },
  { note: '(2) 肥料の効果です。日光に当てたアとイは、24−15＝9cmの差があります。日光に当てないウとエは、20−20＝0cmで差がありません。', add: [lb(83, 92, '差9cm', 10, C.red, 'middle', true), lb(239, 92, '差0cm', 10, C.gray, 'middle', true), ...m('光あり→差9／光なし→差0', C.red, FILL.red)] },
  { note: '❓(3) 日光に当てないと、なぜ枯れるのでしょう。光合成ができず、養分をつくれないからです。草たけがのびたのは、たねの養分を使ったためです。', add: m('光合成できず養分なし', C.blue, FILL.blue) },
  { note: '答え。(1) アとウ、(2) 日光に当てたとき、(3) 光合成ができず、養分をつくれないから、です。', add: m('アとウ・光ありのとき', C.green, FILL.green) },
], '答え：(1)アとウ (2)日光に当てたとき (3)光合成ができない');

// c33 鳥のくちばしと足
const c33 = show([
  { note: '4つの鳥の、くちばしや足、目のつくりとくらしを、1つずつ確かめます。', add: [...names4(['タカ・ワシ', 'カモ', 'キツツキ', 'フクロウ']), ...m('からだとくらしの組み合わせ')] },
  { note: '❓肉を食べる鳥には、どんな形のくちばしと足が合うでしょう。肉をさく、先の曲がったくちばしと、えものをつかむかぎづめです。', add: [tag(0, 72, 'するどい\nくちばし', C.green, FILL.green), mark(0, 130, true), ...m('タカ・ワシ：肉をさく', C.green, FILL.green)] },
  { note: '❓カモの水かきは、何のためでしょう。水をかいて泳ぐためです。木の枝をつかむためではありません。', add: [tag(1, 72, '足に\n水かき', C.red, FILL.red), mark(1, 130, false), ...m('水かき＝泳ぐための足', C.red, FILL.red)] },
  { note: '❓キツツキのくちばしは、どんな形でしょう。かたくてとがっていて、木にあなをあけて、中の虫を食べます。花のみつをすうのではありません。', add: [tag(2, 72, 'かたい\nくちばし', C.red, FILL.red), mark(2, 130, false), ...m('木をつつく：かたい', C.red, FILL.red)] },
  { note: '❓フクロウは、夜に活動します。暗い所でよく見えるように、目は大きいのです。小さい目ではありません。', add: [tag(3, 72, '夜は\n目が大きい', C.red, FILL.red), mark(3, 130, false), ...m('夜の鳥は目が大きい', C.red, FILL.red)] },
  { note: '正しいのは、1つだけです。ほかの3つは、足・くちばし・目のどれかが、実際のくらしと合っていません。', add: m('正しい文は1つだけ', C.main, FILL.warm) },
  { note: '答え。「タカやワシは、曲がったくちばしとかぎづめで、肉をさいて食べる」です。', add: m('答え：タカ・ワシの文', C.green, FILL.green) },
], '答え：タカやワシは、曲がったくちばしとかぎづめで肉をさく');

// c34 ニワトリの卵
const egg = (): DiagramElement => ell(60, 90, 34, 44, C.gray, '#FFFFFF');
const c34 = show([
  { note: '受精したニワトリの卵を、あたためると、ひなが育ちます。卵の中を見てみましょう。', add: [egg(), ...m('ニワトリの卵（受精卵）')] },
  { note: '❓卵の中の黄身を、何というでしょう。卵黄です。', add: [disc(60, 96, 16, C.main, FILL.yellow), lb(110, 112, '卵黄（黄身）', 11, C.main, 'start'), ar(108, 108, 78, 100, C.main), ...m('黄色い部分＝卵黄')] },
  { note: '❓卵黄の上に、小さな白い点があります。これは何でしょう。ひなのからだになる、もとです。', add: [disc(60, 84, 3, C.red, C.red), lb(110, 70, '白い点＝ひなのもと', 11, C.red, 'start'), ar(108, 72, 64, 82, C.red), ...m('白い点がひなに育つ', C.red, FILL.red)] },
  { note: '❓では、卵黄は何に使われるのでしょう。ひなが育つための養分です。卵白が、からだになるのではありません。', add: [bx(190, 128, 110, 30, '卵黄 → 養分', C.main, FILL.warm, 12), ...m('卵黄＝育つための養分', C.main, FILL.warm)] },
  { note: '❓ひなは、育つあいだ、息をしているでしょうか。しています。からには目に見えない小さなあながあり、空気が通ります。', add: [lb(310, 40, 'からの小さなあな＝空気', 10, C.blue, 'end'), ar(200, 44, 88, 62, C.blue), ...m('からは空気を通す', C.blue, FILL.blue)] },
  { note: '受精していない卵は、あたためても、ひなは育ちません。スーパーの卵は、受精していません。', add: m('受精しない卵は育たない', C.gray, FILL.gray) },
  { note: '答え。「卵黄の上の白い点がひなに育ち、卵黄は養分として使われる」です。', add: m('答え：白い点→ひな　卵黄→養分', C.green, FILL.green) },
], '答え：卵黄の上の白い点がひなになり、卵黄は養分');

// c35 こん虫の育ち方
const c35Pos = (i: number): [number, number] => (i < 4 ? [cx4[i], 18] : [[83, 160, 237][i - 4], 50]);
const c35Names = ['モンシロチョウ', 'トンボ', 'カブトムシ', 'バッタ', 'ミツバチ', 'セミ', 'ハエ'];
const c35Box = (i: number, color: string, fill: string): DiagramElement => {
  const [x, y] = c35Pos(i); return bx(x - 35, y, 70, 26, c35Names[i], color, fill, 9);
};
const c35Re = (i: number, color: string, fill: string): DiagramElement[] => {
  const [x, y] = c35Pos(i); return [cover(x - 35, y, 70, 26), c35Box(i, color, fill)];
};
const c35 = show([
  { note: '7種類のこん虫のうち、さなぎの時期があるものを選びます。', add: [...c35Names.map((_, i) => c35Box(i, C.gray, FILL.gray)), ...m('さなぎのある虫はどれ？')] },
  { note: '❓育ち方は、2通りです。幼虫と成虫がまったく別のすがたで、さなぎになるものと、幼虫が成虫に似ていて、さなぎにならないものです。', add: [bx(10, 92, 145, 34, 'さなぎあり\n（幼虫と成虫が別すがた）', C.green, FILL.green, 10), bx(165, 92, 145, 34, 'さなぎなし\n（幼虫が成虫に似る）', C.red, FILL.red, 10), ...m('2つの育ち方')] },
  { note: 'モンシロチョウ、カブトムシ、ミツバチ、ハエは、幼虫がイモムシやウジのすがたで、さなぎになります。', add: [0, 2, 4, 6].flatMap((i) => c35Re(i, C.green, FILL.green)).concat(m('さなぎあり：4種類', C.green, FILL.green)) },
  { note: 'トンボ、バッタ、セミは、幼虫が成虫に似ています。さなぎにならずに、成虫になります。', add: [1, 3, 5].flatMap((i) => c35Re(i, C.red, FILL.red)).concat(m('さなぎなし：3種類', C.red, FILL.red)) },
  { note: '❓(2) さなぎのない育ち方では、成長のたびに、かたい外側の皮をぬぎます。これを、だっぴといいます。', add: [bx(60, 134, 200, 28, '外側の皮をぬぐ＝だっぴ', C.purple, FILL.purple, 12), ...m('(2) だっぴ', C.purple, FILL.purple)] },
  { note: '(3) トンボは、水辺に卵をうみます。幼虫のヤゴは、水の中で生活し、大きくなると水から出て、成虫になります。', add: [...band(130, bx(60, 134, 200, 28, 'トンボの幼虫ヤゴ＝水の中', C.blue, FILL.blue, 12), bx(20, 176, 280, 34, '(3) 水の中', C.blue, FILL.blue, 13))] },
  { note: '答え。(1) ア・ウ・オ・キ、(2) だっぴ、(3) 水の中です。確かめ：(1) の4つは、幼虫が成虫と別のすがたです。', add: m('チョウ・カブトムシ・ハチ・ハエ', C.green, FILL.green) },
], '答え：(1)チョウ・カブトムシ・ミツバチ・ハエ (2)だっぴ (3)水の中');

// c36 標識再捕法
const c36 = show([
  { note: '池全体のフナの数を、ふつうにはかぞえられません。印をつける方法で、およその数を求めます。', add: [bx(20, 30, 280, 26, '池全体 ？ひき', C.gray, '#FFFFFF', 11), ...m('印をつけて数を調べる')] },
  { note: '2回目に、60ひきをつかまえました。これも、横に長い帯で表します。', add: [bx(20, 100, 280, 26, 'つかまえた60ひき', C.gray, '#FFFFFF', 11), ...m('2回目：60ひきを捕獲')] },
  { note: '❓60ひきのうち、印のあるフナは12ひきでした。割合は 12÷60＝1/5です。帯の1/5が、印ありです。', add: [bx(20, 100, 56, 26, '12', C.red, FILL.red, 11), lb(48, 142, '印あり', 10, C.red, 'middle'), ...m('12÷60＝1/5が印あり', C.red, FILL.red)] },
  { note: '❓池全体でも、印のあるフナの割合は、同じ1/5のはずです。印をつけたのは80ひきなので、80ひきが全体の1/5にあたります。', add: [bx(20, 30, 56, 26, '80', C.red, FILL.red, 11), lb(48, 72, '印80', 10, C.red, 'middle'), ...m('印80ひき＝全体の1/5', C.red, FILL.red)] },
  { note: '全体は、80×5＝400ひきです。(1) の答えは400ひきです。', add: [lb(188, 84, '80×5＝400ひき', 12, C.green, 'middle', true), ...m('(1) 400ひき', C.green, FILL.green)] },
  { note: '❓(2) 印のあるフナが、つかまりにくくなると、どうなるでしょう。2回目に入る印の数が減り、割合が小さくなります。すると、全体を実際より多く見積もってしまいます。', add: m('(2) 印が減る→多くなる', C.purple, FILL.purple) },
  { note: '(3) 4÷50＝2/25なので、100ひきが2/25にあたります。全体は 100×25÷2＝1250ひきです。', add: m('(3) 100×25÷2＝1250', C.blue, FILL.blue) },
  { note: '答え。(1) 400ひき、(2) 多くなる、(3) 1250ひきです。確かめ：400ひきのうち80ひきは1/5で、60ひきの1/5は12ひき。問題と合います。', add: m('400ひき・多く・1250ひき', C.green, FILL.green) },
], '答え：(1)400ひき (2)多くなる (3)1250ひき');

// c37 光の向きと茎
const pot = (cx: number): DiagramElement => rect(cx - 18, 120, 36, 24, C.gray, FILL.gray);
const c37 = show([
  { note: 'アサガオの苗を3つ用意し、光の当て方をかえて、1週間育てます。', add: [bx(14, 12, 92, 24, 'ア 右から光', C.main, FILL.warm, 10), bx(114, 12, 92, 24, 'イ 真上から光', C.main, FILL.warm, 10), bx(214, 12, 92, 24, 'ウ 光なし', C.main, FILL.warm, 10), pot(60), pot(160), pot(260), ...m('光の当たり方を変える')] },
  { note: '❓アの茎は、どちらに曲がるでしょう。光が来る右のほうへ曲がって、のびます。', add: [ar(125, 80, 90, 80, C.main), lb(127, 76, '光', 11, C.main, 'start'), ln(60, 120, 60, 98, C.green, false, 3), ln(60, 98, 80, 74, C.green, false, 3), ...m('(1) 光の来る向きへ曲がる', C.green, FILL.green)] },
  { note: 'イは、真上から光が当たります。茎はまっすぐのび、葉は緑色になります。', add: [ar(160, 44, 160, 68, C.main), lb(170, 56, '光', 11, C.main, 'start'), ln(160, 120, 160, 80, C.green, false, 3), ...m('イ：まっすぐ育つ', C.green, FILL.green)] },
  { note: '❓ウは、光がまったく当たりません。茎は光をさがして、細長くひょろひょろとのびますが、色は黄白色です。', add: [rect(232, 52, 56, 70, C.gray, FILL.gray), ln(260, 120, 260, 58, C.gray, false, 2), ...m('(2) 細長く、黄白色', C.red, FILL.red)] },
  { note: '❓なぜ、光がないと黄白色なのでしょう。光合成ができず、緑の色素もできないからです。', add: m('光がない＝光合成できない', C.red, FILL.red) },
  { note: '(3) アの茎が光のほうへ曲がると、葉に日光がよく当たります。光合成で、養分をたくさんつくれます。', add: m('(3) 光合成で養分をつくる', C.blue, FILL.blue) },
  { note: '答え。(1) 光の来る向き、(2) 細長くひょろひょろで黄白色、(3) 光合成で養分をつくりやすくなる、です。', add: m('光のほうへ曲がる', C.green, FILL.green) },
], '答え：茎は光のほうへ曲がる。光がないとひょろひょろで黄白色');

// c38 魚と酸素
const dotPos: [number, number][] = [[50, 60], [90, 80], [70, 120], [180, 70], [210, 115], [250, 70], [270, 120], [230, 95]];
const waterScene = (n: number): DiagramElement[] => [
  rect(20, 40, 280, 100, C.blue, FILL.blue),
  ell(130, 100, 24, 11, C.main, FILL.yellow), pg([[154, 100], [170, 90], [170, 110]], C.main, FILL.yellow),
  ...dotPos.slice(0, n).map(([x, y]) => ci(x, y, 4, undefined, C.blue, '#FFFFFF')),
];
const c38 = show([
  { note: '夏の暑い日の午後、池のコイが、水面近くで口をパクパクさせています。', add: [...waterScene(0), lb(26, 34, '水面', 10, C.gray, 'start'), ...m('なぜ口をパクパク？')] },
  { note: '❓魚は、何を使って息をしているでしょう。水にとけている酸素を、えらでとりこんでいます。丸い点が、とけた酸素です。', add: [...waterScene(8), lb(26, 156, '○ 水にとけた酸素', 10, C.blue, 'start'), ...m('えらで水中の酸素をとる', C.blue, FILL.blue)] },
  { note: '❓暑い夏は、水の温度はどうなるでしょう。上がります。', add: [bx(210, 8, 100, 24, '水温が上がる', C.red, FILL.red, 11), ...m('夏は水温が上がる', C.red, FILL.red)] },
  { note: '❓水温が上がると、とけている酸素はどうなるでしょう。気体は、温度が高いほど水にとけにくいので、減ります。', add: [...fresh(...waterScene(3)), lb(26, 156, '○ 水にとけた酸素（減った）', 10, C.blue, 'start'), ...m('酸素が減る', C.red, FILL.red)] },
  { note: '❓酸素が足りなくなった魚は、どうするでしょう。空気とふれる水面近くに集まって、酸素の多い水をとりこもうとします。', add: [ar(130, 88, 130, 46, C.red), lb(190, 60, '酸素をもとめて水面へ', 10, C.red, 'start'), ...m('水面で口をパクパク', C.red, FILL.red)] },
  { note: '確かめます。冬の池は、水温が低くて酸素がよくとけているので、魚が口をパクパクさせることはありません。', add: m('冷たい水は酸素が多い', C.green, FILL.green) },
  { note: '答え。「水温が上がって、水にとけている酸素の量が減ったから」です。', add: m('答え：水の酸素が減った', C.green, FILL.green) },
], '答え：水温が上がり、水にとけている酸素が減ったから');

// ═════════ 地学 ═════════

// c39 流れる水の地形
const c39 = show([
  { note: '川は、山から海へ流れるあいだに、流れる場所によって、できる地形がちがいます。', add: [bx(10, 20, 92, 40, '山地\n流れが急', C.blue, FILL.blue, 11), bx(114, 20, 92, 40, '山のふもと\n流れがゆるむ', C.green, FILL.green, 10), bx(218, 20, 92, 40, '河口\nいちばんゆるい', C.purple, FILL.purple, 10), ...m('流れる場所と地形')] },
  { note: '❓(1) 流れの急な山地では、水は谷底をどうするでしょう。深くけずります。谷の断面が「V」の字になるので、V字谷です。', add: [pg([[20, 90], [56, 138], [92, 90]], C.main, FILL.warm), lb(56, 156, 'V字谷', 11, C.main, 'middle', true), ...m('(1) 急流→V字谷', C.blue, FILL.blue)] },
  { note: '❓(2) 山から平地に出ると、流れがゆるくなります。運んできた大きな石や土砂が、ふもとにたまって、扇のような形になります。扇状地です。', add: [pg([[160, 88], [122, 136], [140, 144], [160, 147], [180, 144], [198, 136]], C.main, FILL.warm), ar(94, 115, 118, 115, C.gray), lb(160, 160, '扇状地', 11, C.main, 'middle', true), ...m('(2) ふもと→扇状地', C.green, FILL.green)] },
  { note: '❓(3) 河口は、流れがもっともゆるやかです。細かい砂やどろがたまって、三角形の低い土地になります。三角州です。', add: [pg([[264, 90], [230, 138], [298, 138]], C.main, FILL.warm), ar(200, 115, 226, 115, C.gray), lb(264, 156, '三角州', 11, C.main, 'middle', true), ...m('(3) 河口→三角州', C.purple, FILL.purple)] },
  { note: '3つの地形は、上流から下流へ、「けずる」→「大きい土砂がたまる」→「細かい土砂がたまる」と、はたらきが変わっていくことを表しています。', add: m('けずる→大きい土砂→細かい土砂') },
  { note: '確かめます。扇状地は、山のふもとで、大きな石がたまります。三角州は海の入り口で、細かい砂やどろがたまります。反対にしないようにしましょう。', add: m('ふもと＝扇状地・河口＝三角州', C.green, FILL.green) },
  { note: '答え。(1) V字谷、(2) 扇状地、(3) 三角州です。', add: m('V字谷・扇状地・三角州', C.green, FILL.green) },
], '答え：(1)V字谷 (2)扇状地 (3)三角州');

// c40 透明半球
const hemiPt = (h: number, r = 130): [number, number] => {
  const a = Math.PI - (Math.PI / 12) * (h - 6);
  return [160 + r * Math.cos(a), 145 - r * Math.sin(a)];
};
const hemiArc = (): DiagramElement[] => Array.from({ length: 36 }, (_, i) => {
  const a = Math.PI - (i / 36) * Math.PI, b = Math.PI - ((i + 1) / 36) * Math.PI;
  return ln(160 + 130 * Math.cos(a), 145 - 130 * Math.sin(a), 160 + 130 * Math.cos(b), 145 - 130 * Math.sin(b), C.gray, false, 1.5);
});
const hemiDots = (hs: number[], color: string, fill: string): DiagramElement[] => hs.map((h) => { const [x, y] = hemiPt(h); return ci(x, y, 4, undefined, color, fill); });
const hemiLab = (h: number, text: string, color: string): DiagramElement => { const [x, y] = hemiPt(h, 104); return lb(x, y + 4, text, 10, color, 'middle', true); };
const c40 = show([
  { note: '透明な半球に、1時間ごとに太陽の位置の印をつけます。', add: [...hemiArc(), ln(30, 145, 290, 145, C.ink, false, 2), ...m('透明半球の印')] },
  { note: '❓印のあいだの長さは、どこも同じです。太陽は、ほぼ同じ速さで動いて見えるので、時間が同じなら、長さも同じ3.0cmになります。', add: [...hemiDots([6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], C.blue, FILL.blue), ...m('1時間＝3.0cm（長さは時間に比例）', C.blue, FILL.blue)] },
  { note: '日の出の印から9時の印までは、9.0cmです。時間にすると、9.0÷3.0＝3時間です。', add: [...hemiDots([6, 9], C.red, FILL.red), hemiLab(6, '日の出', C.red), hemiLab(9, '9時', C.red), ...m('9.0÷3.0＝3時間', C.red, FILL.red)] },
  { note: '(1) 日の出は、9時の3時間前なので、午前6時です。', add: m('(1) 9時−3時間＝6時', C.red, FILL.red) },
  { note: '❓(2) 日の出から日の入りまでの長さは、36.0cmです。時間にすると、36.0÷3.0＝12時間です。日の入りは、6時の12時間後、午後6時です。', add: [...hemiDots([18], C.purple, FILL.purple), hemiLab(18, '日の入り', C.purple), ...m('(2) 36.0÷3.0＝12時間→18時', C.purple, FILL.purple)] },
  { note: '❓(3) 太陽が最も高くなり、真南にくる南中は、いつでしょう。日の出と日の入りの、ちょうど真ん中です。昼の12時間の半分、6時間後の正午です。', add: [...hemiDots([12], C.green, FILL.green), hemiLab(12, '南中', C.green), ...m('(3) 真ん中＝正午', C.green, FILL.green)] },
  { note: '答え。(1) 午前6時、(2) 午後6時、(3) 正午です。確かめ：春分の日は昼が約12時間で、日の出6時、日の入り6時と合います。', add: m('6時・18時・正午', C.green, FILL.green) },
], '答え：(1)午前6時 (2)午後6時 (3)正午');

// c41 経度と南中時刻
const lon = (d: number) => 40 + (d - 130) * 16;
const lonAxis = (): DiagramElement[] => [
  ln(20, 90, 300, 90, C.ink, false, 2),
  ...[130, 135, 140].flatMap((d) => [ln(lon(d), 84, lon(d), 96, C.ink, false, 2), lb(lon(d), 110, `${d}度`, 10, C.gray, 'middle')]),
];
const timeBox = (x: number, y: number, t: string, color: string, fill: string): DiagramElement => bx(x - 28, y, 56, 24, t, color, fill, 11);
const c41 = show([
  { note: '東経135度の地点では、太陽は正午に南中します。ここを基準にして、ほかの地点を考えます。', add: [...lonAxis(), timeBox(lon(135), 40, '12:00', C.main, FILL.warm), ...m('東経135度で正午に南中')] },
  { note: '❓経度1度で、南中時刻は何分ちがうでしょう。地球は24時間で360度回るので、1時間で15度、1度では4分です。', add: [bx(10, 134, 160, 26, '15度で1時間→1度で4分', C.red, FILL.red, 12), ...m('1度＝4分')] },
  { note: '❓(1) 東経140度は、135度より5度東です。東の地点は先に南中するので、5×4＝20分早く、午前11時40分です。', add: [timeBox(lon(140), 40, '11:40', C.blue, FILL.blue), ar(lon(135) + 18, 52, lon(140) - 30, 52, C.blue), ...m('(1) 5度東→20分早い', C.blue, FILL.blue)] },
  { note: '❓(2) 東経130度は、135度より5度西です。西の地点は遅く南中するので、20分遅く、午後0時20分です。', add: [timeBox(lon(130), 40, '12:20', C.purple, FILL.purple), ar(lon(135) - 30, 52, lon(130) + 30, 52, C.purple), ...m('(2) 5度西→20分遅い', C.purple, FILL.purple)] },
  { note: '❓(3) 午前11時36分は、正午の24分前です。24÷4＝6度、東にあるので、東経135＋6＝141度です。', add: [ln(lon(141), 90, lon(141), 118, C.red, false, 2), lb(lon(141), 130, '141度', 10, C.red, 'middle', true), timeBox(lon(141), 138, '11:36', C.red, FILL.red), ...m('(3) 24÷4＝6度東→141度', C.red, FILL.red)] },
  { note: '確かめます。東経141度は、135度より6度東なので、6×4＝24分早く、正午−24分＝11時36分です。', add: m('6×4＝24分 → 11:36', C.green, FILL.green) },
  { note: '答え。(1) 午前11時40分、(2) 午後0時20分、(3) 東経141度です。', add: m('11:40・12:20・141度', C.green, FILL.green) },
], '答え：(1)午前11時40分 (2)午後0時20分 (3)東経141度');

// c42 星の色と温度
const cs5 = [38, 99, 160, 221, 282];
const scale = (): DiagramElement[] => [
  ['青白', '#DCEBFF', C.blue], ['白', '#FFFFFF', C.gray], ['黄', '#FEF9C3', C.main], ['だいだい', '#FFE8CC', C.main], ['赤', FILL.red, C.red],
].map(([t, f, c], i) => bx(cs5[i] - 28, 30, 56, 30, t, c, f, 11));
const c42 = show([
  { note: '星の色は、星の表面の温度で決まります。色を、青白から赤へならべます。', add: [...scale(), ...m('星の色は表面の温度で決まる')] },
  { note: '❓どちらが高温でしょう。ガスの青い炎は、ろうそくの赤っぽい炎より高温です。青白い星ほど高温で、赤い星ほど低温です。', add: [lb(20, 18, '← 高温', 11, C.blue, 'start', true), lb(300, 18, '低温 →', 11, C.red, 'end', true), ...m('青白ほど高温・赤ほど低温', C.blue, FILL.blue)] },
  { note: 'リゲルは青白い星です。いちばん高温なので、1番目です。', add: [lb(cs5[0], 88, 'リゲル', 11, C.blue, 'middle', true), ci(cs5[0], 120, 11, '1', C.blue, FILL.blue, 12), ...m('リゲル：青白＝1番目', C.blue, FILL.blue)] },
  { note: 'ベガは白い星です。リゲルの次に高温なので、2番目です。', add: [lb(cs5[1], 88, 'ベガ', 11, C.gray, 'middle', true), ci(cs5[1], 120, 11, '2', C.gray, FILL.gray, 12), ...m('ベガ：白＝2番目', C.gray, FILL.gray)] },
  { note: 'カペラは黄色い星です。太陽と同じ黄色なので、ベガより低温で、3番目です。', add: [lb(cs5[2], 88, 'カペラ', 11, C.main, 'middle', true), ci(cs5[2], 120, 11, '3', C.main, FILL.warm, 12), ...m('カペラ：黄＝3番目', C.main, FILL.warm)] },
  { note: '❓アンタレスは、赤い星です。赤は低温の色なので、4番目、いちばん低温です。', add: [lb(cs5[4], 88, 'アンタレス', 11, C.red, 'middle', true), ci(cs5[4], 120, 11, '4', C.red, FILL.red, 12), ...m('アンタレス：赤＝4番目', C.red, FILL.red)] },
  { note: '答え。リゲル → ベガ → カペラ → アンタレスです。確かめ：色の並び（青白→白→黄→赤）と、温度の並びが一致します。', add: m('リゲル→ベガ→カペラ→アンタレス', C.green, FILL.green) },
], '答え：リゲル → ベガ → カペラ → アンタレス');

// c43 南半球の季節
const c43Sun = (): DiagramElement[] => [disc(40, 80, 26, C.main, FILL.yellow), lb(40, 124, '太陽', 11, C.main, 'middle', true)];
const c43Earth = (): DiagramElement[] => [
  disc(200, 80, 24, C.blue, FILL.blue),
  ln(184.9, 45.1, 215.1, 114.9, C.ink, false, 2), ln(172.5, 91.9, 227.5, 68.1, C.gray, true, 1.5),
  lb(178, 40, '北', 11, C.red, 'end', true), lb(222, 128, '南', 11, C.blue, 'start', true),
];
const c43 = show([
  { note: '6月ごろの、太陽と地球です。地球は、地軸をかたむけたまま、太陽のまわりを回っています。', add: [...c43Sun(), ...c43Earth(), ...m('6月：北極側が太陽のほうへ')] },
  { note: '❓この季節の太陽は、赤道より北と南のどちらにあるでしょう。北極側が太陽のほうにかたむいているので、太陽は、赤道より北の空高くにあります。', add: [ar(70, 60, 170, 60, C.main), ar(70, 80, 172, 80, C.main), ar(70, 100, 170, 100, C.main), ...m('太陽は赤道より北', C.main, FILL.warm)] },
  { note: '❓季節はどうなるでしょう。太陽のほうにかたむいた北半球は夏、南半球は冬です。南半球は、季節が北半球と反対になります。', add: [bx(236, 30, 76, 28, '北半球：夏', C.red, FILL.red, 11), bx(236, 104, 76, 28, '南半球：冬', C.blue, FILL.blue, 11), ...m('南半球は季節が反対', C.blue, FILL.blue)] },
  { note: '❓南緯35度から見ると、太陽は、どちらの空を通るでしょう。太陽は赤道より北にあるので、正午に北の空に見えます。', add: [bx(10, 138, 150, 26, '南半球から見ると太陽は北', C.green, FILL.green, 11), ...m('南半球：太陽は北の空', C.green, FILL.green)] },
  { note: '❓南中高度は、いくらでしょう。太陽は赤道から北へ23.4度のところ。南緯35度からは 35＋23.4＝58.4度ずれるので、90−58.4＝31.6度です。', add: m('90−(35＋23.4)＝31.6度', C.purple, FILL.purple) },
  { note: '確かめます。北緯35度の冬至の南中高度も31.6度です。南半球の6月は、北半球の冬と同じ値になります。', add: m('北緯35度の冬至と同じ', C.green, FILL.green) },
  { note: '答え。「季節は冬で、太陽は北の空にあり、南中高度は約31.6度」です。', add: m('答え：冬・北の空・31.6度', C.green, FILL.green) },
], '答え：季節は冬で、太陽は北の空にあり、南中高度は約31.6度');

// c44 雲のでき方の実験
const bottle = (): DiagramElement[] => [rect(110, 30, 100, 110, C.gray, '#FFFFFF'), rect(150, 18, 20, 12, C.gray, FILL.gray), lb(160, 128, '水＋けむり', 10, C.gray, 'middle')];
const c44 = show([
  { note: '空のペットボトルに、少量の水と、線香のけむりを入れて、ふたをします。', add: [...bottle(), ...m('ボトルに水とけむりを入れる')] },
  { note: '❓ボトルを強くおすと、中の空気はどうなるでしょう。ちぢんで、温度が少し上がります。このときは、くもりません。', add: [ar(100, 80, 130, 80, C.red), ar(220, 80, 190, 80, C.red), lb(160, 64, 'おす', 11, C.red, 'middle', true), ...m('おす→ちぢむ→温度↑', C.red, FILL.red)] },
  { note: '❓急に手をはなすと、どうなるでしょう。空気が急にふくらみます。', add: [ar(132, 104, 100, 104, C.blue), ar(188, 104, 220, 104, C.blue), lb(160, 100, 'ふくらむ', 10, C.blue, 'middle', true), ...m('はなす→ふくらむ', C.blue, FILL.blue)] },
  { note: '(1) ふくらんだ空気は、温度が下がります。答えは「下がる」です。', add: [bx(224, 40, 86, 30, '温度が下がる', C.blue, FILL.blue, 11), ...m('(1) ふくらむと冷える', C.blue, FILL.blue)] },
  { note: '❓冷えると、空気中の水蒸気はどうなるでしょう。水てきに変わって、ボトルの中が白くくもります。これが、雲のもとです。', add: [ci(135, 52, 4, undefined, C.blue, FILL.blue), ci(170, 62, 4, undefined, C.blue, FILL.blue), ci(150, 88, 4, undefined, C.blue, FILL.blue), ci(185, 100, 4, undefined, C.blue, FILL.blue), ...m('水蒸気→水てき＝くもり', C.blue, FILL.blue)] },
  { note: '❓(2) 線香のけむりを入れるのは、なぜでしょう。水蒸気が水てきになるとき、まわりに小さなつぶがあると、水てきができやすいからです。けむりが、そのつぶ（核）になります。', add: [bx(10, 40, 90, 34, 'けむり＝\n水てきの核', C.purple, FILL.purple, 10), ...m('(2) けむりは水てきの核', C.purple, FILL.purple)] },
  { note: '❓(3) 実際の空で、同じことが起こるのは、空気がどう動くときでしょう。上へのぼって、ふくらみ、冷えるときです。これを上昇気流といいます。', add: [ar(268, 134, 268, 98, C.green), lb(268, 150, '上昇気流', 10, C.green, 'middle', true), ...m('(3) 上へのぼる空気＝雲', C.green, FILL.green)] },
  { note: '答え。(1) 下がる、(2) 水てきの核になるから、(3) 上昇気流です。確かめ：「ふくらむ→冷える→雲」の順です。', add: m('下がる・核・上昇気流', C.green, FILL.green) },
], '答え：(1)下がる (2)水てきの核 (3)上昇気流');

// c45 梅雨前線
const c45 = show([
  { note: '6月から7月ごろ、日本付近に雨が長く続きます。これは、梅雨前線のためです。', add: [bx(20, 62, 90, 40, '日本付近', C.gray, FILL.gray, 12), ...m('梅雨前線ができるわけ')] },
  { note: '❓北東の海の上には、どんな空気のかたまり（気団）があるでしょう。冷たくしめった、オホーツク海気団です。', add: [bx(170, 12, 140, 42, 'オホーツク海気団\n冷たくしめった', C.blue, FILL.blue, 11), ar(240, 56, 240, 76, C.blue), ...m('北東：冷たい気団', C.blue, FILL.blue)] },
  { note: '❓南東の海の上には、どんな気団があるでしょう。あたたかくしめった、小笠原気団です。', add: [bx(170, 112, 140, 42, '小笠原気団\nあたたかくしめった', C.red, FILL.red, 11), ar(240, 110, 240, 90, C.red), ...m('南東：あたたかい気団', C.red, FILL.red)] },
  { note: '2つの気団が、日本付近でぶつかります。その境目が、梅雨前線です。', add: [ln(120, 82, 300, 82, C.purple, false, 4), lb(210, 74, '梅雨前線', 11, C.purple, 'middle', true), ...m('2つの気団の境目', C.purple, FILL.purple)] },
  { note: '❓なぜ長く雨が続くのでしょう。2つの気団の勢いが同じくらいで、押し合って、前線が動かないからです。', add: m('勢いが同じ→動かない', C.main, FILL.warm) },
  { note: '冬の日本にやってくるシベリア気団は、冷たくかわいた気団です。梅雨には関係しません。', add: [bx(10, 124, 150, 30, 'シベリア気団は冬の気団', C.gray, FILL.gray, 11), ...m('冬のシベリア気団は無関係', C.gray, FILL.gray)] },
  { note: '答え。「オホーツク海気団と小笠原気団」です。', add: m('答え：オホーツク海と小笠原', C.green, FILL.green) },
], '答え：オホーツク海気団と小笠原気団');

// c46 断層
const layersBase = (): DiagramElement[] => [
  pg([[40, 30], [240, 30], [240, 66], [140, 66], [140, 56], [40, 56]], C.gray, FILL.blue),
  pg([[40, 56], [140, 56], [140, 78], [40, 78]], C.gray, FILL.yellow), pg([[140, 66], [240, 66], [240, 88], [140, 88]], C.gray, FILL.yellow),
  pg([[40, 78], [140, 78], [140, 100], [40, 100]], C.gray, FILL.green), pg([[140, 88], [240, 88], [240, 110], [140, 110]], C.gray, FILL.green),
  pg([[40, 100], [140, 100], [140, 122], [40, 122]], C.gray, FILL.purple), pg([[140, 110], [240, 110], [240, 132], [140, 132]], C.gray, FILL.purple),
  lb(34, 46, 'エ', 12, C.ink, 'end', true), lb(34, 71, 'ウ', 12, C.ink, 'end', true), lb(34, 93, 'イ', 12, C.ink, 'end', true), lb(34, 115, 'ア', 12, C.ink, 'end', true),
];
const c46 = show([
  { note: 'あるがけの地層です。下から、ア・イ・ウ・エの順に、かさなっています。', add: [...layersBase(), ...m('ア〜エの層と断層')] },
  { note: '❓断層とは、何でしょう。すでにできていた地層が、割れて、ずれたあとです。赤い線が、断層です。', add: [ln(140, 56, 140, 134, C.red, false, 3), lb(140, 24, '断層', 11, C.red, 'middle', true), ...m('断層＝割れてずれたあと', C.red, FILL.red)] },
  { note: '❓ア・イ・ウは、断層で切られて、ずれています。ずれたということは、断層ができる前に、すでにできていた層です。', add: [lb(250, 95, '切られた', 10, C.red, 'start', true), ...m('切られた層＝断層より前', C.red, FILL.red)] },
  { note: '❓エは、断層で切られていません。ということは、断層ができたあとに、たい積した層です。', add: [lb(250, 43, '切られない', 10, C.blue, 'start', true), ...m('切られない層＝断層より後', C.blue, FILL.blue)] },
  { note: '2つをあわせます。断層ができたのは、ウができたあと、エができる前のあいだです。', add: [bx(60, 140, 200, 24, 'ウができた後〜エができる前', C.green, FILL.green, 11), ...m('2つの層のあいだ', C.green, FILL.green)] },
  { note: '確かめます。「エができたあと」ならエも切られるはず、「アより前」ならアも切られないはずで、問題の条件に合いません。', add: m('ほかの選択肢は条件に合わない', C.main, FILL.warm) },
  { note: '答え。「ウの層がたい積したあと、エの層がたい積するまでのあいだ」です。', add: m('答え：ウのあと・エの前', C.green, FILL.green) },
], '答え：ウの層のあと、エの層ができる前');

// c47 火山灰の降り方
const asBox = (x: number, y: number, w: number, t: string, color: string, fill: string, h = 24): DiagramElement => bx(x, y, w, h, t, color, fill, 11);
const c47Sites = (eColor: string, eFill: string): DiagramElement[] => [
  pg([[148, 95], [160, 72], [172, 95]], C.main, FILL.warm), lb(160, 108, '火山', 10, C.main, 'middle'),
  asBox(125, 20, 70, '北 1.5cm', C.gray, FILL.gray), asBox(125, 124, 70, '南 2cm', C.gray, FILL.gray),
  asBox(22, 73, 76, '西 0.5cm', C.gray, FILL.gray), asBox(222, 73, 76, '東 8cm', eColor, eFill),
];
const c47 = show([
  { note: '火山から10km離れた、東西南北の4地点で、火山灰のつもった厚さを調べました。', add: [...c47Sites(C.gray, FILL.gray), ...m('4地点の灰の厚さ')] },
  { note: '厚さをくらべます。東が8cmで、いちばん厚く、西が0.5cmで、いちばんうすいです。', add: [cover(222, 73, 76, 24), asBox(222, 73, 76, '東 8cm', C.red, FILL.red), ...m('東がいちばん厚い：8cm', C.red, FILL.red)] },
  { note: '❓なぜ東に厚いのでしょう。ふき上げられた灰が、上空の風に流されて、風下に降るからです。', add: [ar(50, 60, 280, 60, C.purple), lb(165, 53, '上空の風', 10, C.purple, 'middle'), ...m('灰は風に流される', C.purple, FILL.purple)] },
  { note: '(1) 風は東へふいていました。風の向きは「ふいてくる方位」で言うので、西からです。', add: m('(1) 西からふく風', C.blue, FILL.blue) },
  { note: '❓(2) 日本付近の上空で、年中、西から東へふいている強い風は何でしょう。偏西風です。', add: m('(2) 偏西風：西→東', C.green, FILL.green) },
  { note: '(3) 遠くへ行くほど、重い粒から先に落ち、灰の量は減ります。東20kmは、東10kmの8cmより、うすいです。', add: [asBox(222, 106, 88, '東20km\nもっと薄い', C.gray, FILL.gray, 30), ...m('(3) 遠いほどうすい', C.gray, FILL.gray)] },
  { note: '答え。(1) 西、(2) 偏西風、(3) うすい、です。確かめ：西が薄いのは、風上で灰がほとんど流れてこないからです。', add: m('西・偏西風・うすい', C.green, FILL.green) },
], '答え：(1)西 (2)偏西風 (3)うすい');

// c48 プレートと地震
const plates = (): DiagramElement[] => [
  rect(10, 70, 120, 30, C.blue, FILL.blue),
  pg([[130, 100], [250, 150], [310, 150], [310, 70], [130, 70]], C.main, FILL.warm),
  pg([[10, 100], [130, 100], [250, 150], [240, 162], [130, 112], [10, 112]], C.blue, FILL.blue),
  lb(65, 134, '海のプレート', 11, C.blue, 'middle', true), lb(240, 100, '陸のプレート', 11, C.main, 'middle', true),
];
const c48 = show([
  { note: '日本付近の、海のプレートと陸のプレートの断面です。', add: [...plates(), ...m('海と陸のプレート')] },
  { note: '❓海のプレートは、どう動くでしょう。1年に数cmずつ、陸のプレートの下へ、しずみこんでいきます。', add: [ar(30, 86, 90, 86, C.blue), lb(110, 154, 'しずみこむ', 10, C.blue, 'start'), ...m('海のプレートがしずむ', C.blue, FILL.blue)] },
  { note: '❓そのとき、陸のプレートはどうなるでしょう。先のほうが、いっしょにひきずりこまれて、ひずんでいきます。', add: [ar(135, 80, 170, 112, C.red), lb(190, 62, 'ひきずられてひずむ', 10, C.red, 'middle'), ...m('陸のプレートがひずむ', C.red, FILL.red)] },
  { note: 'ひずみは、少しずつたまっていきます。がまんできなくなる限度まで、たまり続けます。', add: m('ひずみがたまっていく', C.gray, FILL.gray) },
  { note: '❓限度をこえると、どうなるでしょう。陸のプレートが、はねかえるように、もとにもどります。このとき、大きな地震が起こります。', add: [ar(285, 112, 285, 82, C.green), ...m('はねかえる→大きな地震', C.green, FILL.green)] },
  { note: '❓海底がはねかえると、海の水も大きく動きます。これが津波です。強い風が原因ではありません。', add: [ar(60, 98, 60, 76, C.purple), lb(60, 64, '津波', 11, C.purple, 'middle', true), ...m('海底が動く→津波', C.purple, FILL.purple)] },
  { note: '答え。「海のプレートがしずみこみ、陸のプレートがひきずりこまれてひずみ、もとにもどるときに地震が起こる」です。', add: m('答え：しずみこむ→ひずむ→もどる', C.green, FILL.green) },
], '答え：陸のプレートのひずみがもどるときに地震が起こる');

// c49 太陽光パネルのかたむき
const P: [number, number] = [150, 140];
const panelScene = (H: number, color: string): { els: DiagramElement[]; tilt: number } => {
  const r = (H * Math.PI) / 180;
  const sx = P[0] - 110 * Math.cos(r), sy = P[1] - 110 * Math.sin(r);
  const ex = P[0] + 45 * Math.sin(r), ey = P[1] - 45 * Math.cos(r);
  const tilt = Math.round((90 - H) * 10) / 10;
  return {
    tilt,
    els: [
      ln(20, 140, 300, 140, C.ink, false, 2),
      ar(sx, sy, P[0] - 4 * Math.cos(r), P[1] - 4 * Math.sin(r), color),
      ln(P[0], P[1], ex, ey, C.main, false, 5),
      lb(Math.max(8, sx + 6), sy - 4, `南中高度${H}度`, 10, color, 'start', true),
      lb(P[0] + 62, P[1] - 6, `かたむき${tilt}度`, 11, C.red, 'start', true),
    ],
  };
};
const c49 = show([
  { note: '太陽光パネルは、光が面に垂直に当たるときに、いちばん多く発電します。パネルの面と光が、直角になる向きにします。', add: fresh(...panelScene(55, C.blue).els, ...m('光が垂直に当たると最大', C.blue, FILL.blue)) },
  { note: '❓パネルを、水平な面から何度かたむければよいでしょう。光と地面の角が南中高度なので、パネルのかたむきは、90度−南中高度です。', add: m('かたむき＝90度−南中高度') },
  { note: '(1) 夏至の南中高度は78.4度です。太陽が高いので、パネルはほぼ水平で、90−78.4＝11.6度です。', add: fresh(...panelScene(78.4, C.red).els, ...m('(1) 90−78.4＝11.6度', C.red, FILL.red)) },
  { note: '(2) 冬至の南中高度は31.6度です。太陽が低いので、パネルを大きく起こして、90−31.6＝58.4度です。', add: fresh(...panelScene(31.6, C.purple).els, ...m('(2) 90−31.6＝58.4度', C.purple, FILL.purple)) },
  { note: '(3) 春分・秋分の南中高度は55度です。かたむきは、90−55＝35度です。', add: fresh(...panelScene(55, C.green).els, ...m('(3) 90−55＝35度', C.green, FILL.green)) },
  { note: '確かめます。夏至の11.6度と、冬至の58.4度の、ちょうど真ん中は、(11.6＋58.4)÷2＝35度で、(3) と一致します。', add: m('真ん中は35度で一致', C.green, FILL.green) },
  { note: '答え。(1) 11.6度、(2) 58.4度、(3) 35度です。', add: m('11.6度・58.4度・35度', C.green, FILL.green) },
], '答え：(1)11.6度 (2)58.4度 (3)35度');

// c50 潮の満ち引き
const tcx = [38, 99, 160, 221, 282];
const tbox = (i: number, t: string, color: string, fill: string): DiagramElement => bx(tcx[i] - 28, 40, 56, 36, t, color, fill, 10);
const c50 = show([
  { note: 'ある日の午前6時に、満潮でした。ここから、次の満潮や干潮の時刻を考えます。', add: [tbox(0, '満潮\n6:00', C.blue, FILL.blue), ...m('午前6時が満潮')] },
  { note: '❓(1) 満潮から次の満潮まで、約12時間25分です。午前6時の12時間25分後は、午後6時25分です。', add: [tbox(2, '満潮\n18:25', C.blue, FILL.blue), ar(38, 84, 160, 84, C.red), lb(99, 100, '＋12時間25分', 10, C.red, 'middle'), ...m('(1) 午後6時25分', C.blue, FILL.blue)] },
  { note: '❓(2) 干潮は、2つの満潮の真ん中です。12時間25分の半分は6時間12分30秒なので、午後0時12分ごろです。', add: [tbox(1, '干潮\n12:12', C.purple, FILL.purple), lb(160, 126, 'まん中＝6時間12分30秒後', 10, C.purple, 'middle'), ...m('(2) 午後0時12分ごろ', C.purple, FILL.purple)] },
  { note: '❓(3) 満潮の時刻は、毎日約50分ずつ遅くなります。月が南中する時刻が、毎日約50分遅くなるからです。翌日の最初の満潮は、午前6時50分です。', add: [tbox(3, '干潮\n0:37', C.gray, FILL.gray), tbox(4, '満潮\n6:50', C.green, FILL.green), lb(160, 150, '1日で約50分おくれる', 10, C.green, 'middle'), ...m('(3) 翌日の午前6時50分', C.green, FILL.green)] },
  { note: '❓(4) 満ち引きの差が大きい大潮は、太陽・月・地球が一直線になるとき、つまり、新月と満月のときです。', add: [cover(0, 104, 320, 64), bx(20, 116, 120, 38, '新月', C.purple, FILL.purple, 14), bx(180, 116, 120, 38, '満月', C.purple, FILL.purple, 14), lb(160, 140, 'と', 13, C.ink, 'middle', true), ...m('(4) 大潮＝新月と満月', C.purple, FILL.purple)] },
  { note: '確かめます。(3) は、毎日50分ずつおくれることと一致します。半月のころは、差が小さい小潮です。', add: m('毎日50分おくれと一致', C.green, FILL.green) },
  { note: '答え。(1) 午後6時25分ごろ、(2) 午後0時12分ごろ、(3) 翌日の午前6時50分ごろ、(4) 新月と満月です。', add: m('6:25PM・0:12PM・6:50AM', C.green, FILL.green) },
], '答え：(1)午後6時25分 (2)午後0時12分 (3)午前6時50分 (4)新月と満月');

export const figuresHonshiken202702RikaChugaku2: Record<string, Figure> = {
  honshiken_2027_02_rika_c26: c26,
  honshiken_2027_02_rika_c27: c27,
  honshiken_2027_02_rika_c28: c28,
  honshiken_2027_02_rika_c29: c29,
  honshiken_2027_02_rika_c30: c30,
  honshiken_2027_02_rika_c31: c31,
  honshiken_2027_02_rika_c32: c32,
  honshiken_2027_02_rika_c33: c33,
  honshiken_2027_02_rika_c34: c34,
  honshiken_2027_02_rika_c35: c35,
  honshiken_2027_02_rika_c36: c36,
  honshiken_2027_02_rika_c37: c37,
  honshiken_2027_02_rika_c38: c38,
  honshiken_2027_02_rika_c39: c39,
  honshiken_2027_02_rika_c40: c40,
  honshiken_2027_02_rika_c41: c41,
  honshiken_2027_02_rika_c42: c42,
  honshiken_2027_02_rika_c43: c43,
  honshiken_2027_02_rika_c44: c44,
  honshiken_2027_02_rika_c45: c45,
  honshiken_2027_02_rika_c46: c46,
  honshiken_2027_02_rika_c47: c47,
  honshiken_2027_02_rika_c48: c48,
  honshiken_2027_02_rika_c49: c49,
  honshiken_2027_02_rika_c50: c50,
};
