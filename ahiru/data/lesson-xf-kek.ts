// 高校受験 英語（中2 誤文訂正・書きかえ／中3 仮定法・話法）32 単元の「動く図解スライド」。
// 「なぜ？」の連鎖で、1 単元 7 枚以上。単元の節（section）に 1 枚の図解をひもづける。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, show, fresh } from './diagram-kit';

type Col = [string, string];
const B: Col = [C.blue, FILL.blue];
const G: Col = [C.green, FILL.green];
const R: Col = [C.red, FILL.red];
const M: Col = [C.main, FILL.warm];
const P: Col = [C.purple, FILL.purple];
const Y: Col = [C.main, FILL.yellow];
const Gy: Col = [C.gray, FILL.gray];

const units = (s: string) => [...s].reduce((u, ch) => u + (ch.charCodeAt(0) < 256 ? 0.55 : 1), 0);

// 下の帯（y=176 から）にそのスライドのひとこと。\n で改行。
const cap = (t: string, c: Col = B, size = 12): DiagramElement => {
  const n = t.split('\n').length;
  return bx(10, 176, 300, 16 + 15 * n, t, c[0], c[1], size);
};
// 1枚＝まっさらな図＋下の帯
const S = (note: string, top: DiagramElement[], capText: string, c: Col = B, size = 12) => ({
  note,
  add: fresh(...top, cap(capText, c, size)),
});
// 「なぜ？」の問い
const Q = (t: string, again = false): DiagramElement =>
  bx(10, 6, 300, 34, (again ? 'では、なぜ？ ' : 'なぜ？ ') + t, P[0], P[1], 12);

// 横一列の語の箱（自然な幅。はみ出すときだけ縮める）
const W = (items: (string | [string, Col])[], y: number, h = 30, size = 12, x0 = 6, x1 = 314, gap = 4): DiagramElement[] => {
  const its = items.map((i) => (typeof i === 'string' ? ([i, M] as [string, Col]) : i));
  const nat = its.map(([t]) => Math.max(...t.split('\n').map(units)) * size + 12);
  const avail = x1 - x0 - gap * (its.length - 1);
  const sum = nat.reduce((a, b) => a + b, 0);
  const k = sum > avail ? avail / sum : 1;
  const total = sum * k + gap * (its.length - 1);
  let x = x0 + (x1 - x0 - total) / 2;
  return its.map(([t, c], i) => {
    const w = nat[i] * k;
    const e = bx(x, y, w, h, t, c[0], c[1], size);
    x += w + gap;
    return e;
  });
};

// 矢印でつないだ同じ幅の箱（流れ図）
const F = (items: [string, Col][], y: number, h = 50, size = 12, x0 = 8, x1 = 312, gap = 18): DiagramElement[] => {
  const n = items.length;
  const w = (x1 - x0 - gap * (n - 1)) / n;
  const out: DiagramElement[] = [];
  items.forEach(([t, c], i) => {
    const x = x0 + i * (w + gap);
    if (i > 0) out.push(ar(x - gap + 1, y + h / 2, x - 1, y + h / 2, C.main));
    out.push(bx(x, y, w, h, t, c[0], c[1], size));
  });
  return out;
};

// 表。rows[0] は見出し。ws は列の幅。rc は行ごとの色。
const T = (rows: string[][], y: number, ws: number[], c: Col = M, h = 24, size = 11, rc?: Col[]): DiagramElement[] => {
  const tot = ws.reduce((a, b) => a + b, 0);
  const x0 = (320 - tot) / 2;
  const out: DiagramElement[] = [];
  rows.forEach((r, ri) => {
    let x = x0;
    r.forEach((t, ci2) => {
      const col = ri === 0 ? c : rc?.[ri] ?? Gy;
      out.push(bx(x, y + ri * h, ws[ci2], h, t, col[0], col[1], size));
      x += ws[ci2];
    });
  });
  return out;
};

const figs: Record<string, DiagramFigure> = {};

// ── 誤文訂正③：不定詞と動名詞（j2_13・節0）──
figs['xf_new20_j2_eigo_13'] = show([
  S('誤文訂正の最初の例です。He enjoys to play soccer. は、enjoys のあとに〈to＋原形〉を置いていて誤りです。動詞のあとが〈to＋原形〉か〈-ing〉かは、動詞ごとに決まっています。',
    [...W([['He', M], ['enjoys', M], ['to play', R], ['soccer.', M]], 40, 34, 15), lb(160, 98, '× enjoys のあとに to play は置けない', 13, C.red, 'middle', true), ar(160, 112, 160, 130, C.main), ...W([['He', M], ['enjoys', M], ['playing', G], ['soccer.', M]], 132, 34, 15)],
    '正しくは enjoys playing soccer', R),
  S('動名詞（-ing）だけをとる動詞は enjoy・finish・stop・mind・avoid・give up、to不定詞だけをとる動詞は want・hope・decide・plan・promise・wish です。この2グループに分けて覚えます。',
    [bx(10, 10, 143, 140, '動名詞だけ\n\nenjoy / finish\nstop / mind\navoid / give up\n\n→ playing', C.blue, FILL.blue, 13), bx(167, 10, 143, 140, 'to不定詞だけ\n\nwant / hope\ndecide / plan\npromise / wish\n\n→ to play', C.green, FILL.green, 13)],
    '動詞ごとに、どちらの形かが決まっている', B),
  S('なぜ動詞ごとに形がちがうの？→ 傾向として、「楽しむ・終える・やめる」のようにいま（または、すでに）している動作の動詞は -ing、「望む・決める・約束する」のようにこれから先のことを表す動詞は to になります。',
    [Q('動詞ごとに形がちがうのは？'), ln(20, 100, 300, 100, C.gray, false, 2), ln(160, 86, 160, 114, C.main, false, 2), lb(160, 76, 'いま', 12, C.main, 'middle', true), bx(14, 112, 140, 50, 'すでにしている動作\nenjoy / finish / stop', C.blue, FILL.blue, 11), bx(166, 112, 140, 50, 'これから先のこと\nwant / hope / decide', C.green, FILL.green, 11), lb(84, 56, '→ -ing', 14, C.blue, 'middle', true), lb(236, 56, '→ to＋原形', 14, C.green, 'middle', true)],
    '「いまの動作」は -ing、「これから」は to（傾向）', P),
  S('では、なぜこれからのことに to を使うの？→ to はもともと「〜へ向かう」という意味の語で、まだ届いていない動作に気持ちが向かっていることを表すからです。want は「手に入れたい」ので、動作に向かう to がつきます。',
    [Q('これからのことに to を使うのは？', true), bx(14, 60, 80, 40, 'want', C.main, FILL.warm, 16), ar(98, 80, 160, 80, C.green), bx(164, 60, 140, 40, 'to play', C.green, FILL.green, 16), lb(160, 118, 'to ＝「〜へ向かう」', 14, C.green, 'middle', true), lb(160, 142, 'まだ届いていない動作に気持ちが向かう', 11, C.gray, 'middle')],
    'to ＝ 動作に向かう気持ち', G),
  S('もう1つの例。I want playing the guitar. は、want のあとを -ing にしているので誤りです。want は to不定詞だけなので、I want to play the guitar. に直します。',
    [...W([['I', M], ['want', M], ['playing', R], ['the guitar.', M]], 30, 34, 14), lb(160, 82, '× want は to不定詞だけ', 13, C.red, 'middle', true), ar(160, 96, 160, 114, C.main), ...W([['I', M], ['want', M], ['to play', G], ['the guitar.', M]], 118, 34, 14)],
    'want ＋ to play', G),
  S('誤文を見つけるコツは3段階です。①動詞の直後に to か -ing があるのを見る。②その動詞が動名詞グループか不定詞グループかを思い出す。③ちがっていれば直す。',
    [...F([['① 動詞の直後\nを見る', B], ['② どちらの\nグループ？', P], ['③ 形を直す', G]], 40, 54, 12), lb(160, 120, '例: He finished to write. → finished writing.', 12, C.ink, 'middle', true)],
    '直後を見る → グループを思い出す → 直す', M),
  S('前置詞のあとも注意です。She is interested in to learn Chinese. は誤りで、in のあとは learning にします。なぜ？→ 前置詞のあとには名詞が来るきまりで、-ing は動詞を名詞のはたらきにした形（動名詞）だからです。',
    [...W([['She is', M], ['interested', M], ['in', B], ['to learn', R], ['Chinese.', M]], 22, 30, 12), lb(160, 66, '× 前置詞 in のあとは to learn にできない', 12, C.red, 'middle', true), ar(160, 78, 160, 94, C.main), ...W([['She is', M], ['interested', M], ['in', B], ['learning', G], ['Chinese.', M]], 98, 30, 12), lb(160, 144, '前置詞のあと ＝ 名詞のはたらき ＝ -ing', 12, C.blue, 'middle', true)],
    '前置詞のあとは必ず -ing（動名詞）', B),
  S('look forward to の to も同じです。I\'m looking forward to see you. の to は不定詞ではなく前置詞なので、あとは seeing になります。I\'m looking forward to seeing you. が正しい形です。',
    [...W([['I\'m looking forward', M], ['to', B], ['see', R], ['you.', M]], 22, 30, 12), lb(160, 64, '× このtoは前置詞。原形 see は置けない', 12, C.red, 'middle', true), ar(160, 76, 160, 94, C.main), ...W([['I\'m looking forward', M], ['to', B], ['seeing', G], ['you.', M]], 98, 30, 12), lb(160, 144, 'to のあとに原形が来るとは限らない', 12, C.gray, 'middle')],
    'look forward to ＋ -ing', B),
  S('まとめです。動詞が動名詞グループか不定詞グループかを思い出し、前置詞（look forward to の to も）のあとは必ず -ing にします。',
    [bx(10, 14, 300, 40, 'enjoy / finish / stop … → -ing', C.blue, FILL.blue, 14), bx(10, 62, 300, 40, 'want / hope / decide … → to＋原形', C.green, FILL.green, 14), bx(10, 110, 300, 40, '前置詞のあと（in / look forward to）→ -ing', C.purple, FILL.purple, 13)],
    '動詞のグループと前置詞のあと、の2つを確認', M),
], '不定詞と動名詞の使い分け');

// ── 誤文訂正④：SVOOとSVOC（j2_14・節1）──
figs['xf_new20_j2_eigo_14'] = show([
  S('動詞のあとに2つの語句が続く文には、〈動詞＋人＋物〉のSVOOと、〈動詞＋O＋C〉のSVOCがあります。まず、後ろの2つが別々のもの（O＋O）か、イコールの関係（O＝C）かを見分けます。',
    [bx(10, 14, 300, 56, 'SVOO: gave me a camera\n（人）と（物）は別のもの', C.blue, FILL.blue, 13), bx(10, 84, 300, 56, 'SVOC: made her happy\nher ＝ happy（イコールの関係）', C.green, FILL.green, 13)],
    '2つの語句が「別のもの」か「イコール」かを見る', M),
  S('SVOOでは、人と物の順序を逆にする誤りが最も多いです。My uncle gave a camera me. は誤りで、My uncle gave me a camera. が正しい語順です。',
    [...W([['My uncle', M], ['gave', M], ['a camera', R], ['me.', R]], 30, 34, 13), lb(160, 82, '× 物が先になっている', 13, C.red, 'middle', true), ar(160, 96, 160, 112, C.main), ...W([['My uncle', M], ['gave', M], ['me', G], ['a camera.', G]], 116, 34, 13)],
    '〈動詞＋人＋物〉の順', B),
  S('なぜ人が先なの？→ SVOOは「だれに」「何を」の順で、渡す相手を先に言う型だからです。物を先に言いたいときは、gave a camera to me のように前置詞 to を使って言い直します。',
    [Q('人が先で、物があとなのは？'), bx(14, 56, 292, 40, 'gave ＋ me（だれに）＋ a camera（何を）', C.blue, FILL.blue, 13), bx(14, 108, 292, 40, '物を先にするなら to が必要\ngave a camera to me', C.main, FILL.warm, 12)],
    '人を先に、または 物＋to＋人 の形', P),
  S('物が it や them のような代名詞のときは、Please give me it. だと不自然です。Please give it to me. のように、〈SVO＋to／for＋人〉の形にします。',
    [...W([['Please give', M], ['me', R], ['it.', R]], 30, 34, 13), lb(160, 80, '△ 代名詞の物は、人のあとに置くと不自然', 12, C.red, 'middle', true), ar(160, 94, 160, 112, C.main), ...W([['Please give', M], ['it', G], ['to me.', G]], 116, 34, 13)],
    '代名詞の物は SVO＋to／for の形', G),
  S('to と for の使い分けです。give・show・teach・tell は相手に直接渡すので to、make・buy・cook は相手のためにしてあげるので for を使います。She made a cake to me. は誤りで、for me が正しいです。',
    [bx(10, 14, 143, 70, 'to のグループ\ngive / show\nteach / tell', C.blue, FILL.blue, 13), bx(167, 14, 143, 70, 'for のグループ\nmake / buy\ncook', C.green, FILL.green, 13), ...W([['She made', M], ['a cake', M], ['to me', R]], 100, 30, 13), lb(160, 144, '× → for me', 14, C.red, 'middle', true)],
    '渡す・伝える → to、してあげる → for', B),
  S('SVOCの誤りです。This news made happy her. は誤りで、This news made her happy. が正しい語順です。なぜ O が先？→ her = happy（彼女が幸せ）という関係を、〈O＋C〉の順で並べるからです。',
    [...W([['This news', M], ['made', M], ['happy', R], ['her.', R]], 22, 34, 13), ar(160, 62, 160, 78, C.main), ...W([['This news', M], ['made', M], ['her', G], ['happy.', G]], 82, 34, 13), ln(172, 120, 232, 120, C.green, false, 2), lb(202, 134, 'her ＝ happy', 13, C.green, 'middle', true)],
    '〈動詞＋O＋C〉で O＝C', G),
  S('補語の位置に副詞を置くのも誤りです。Keep the room cleanly. ではなく Keep the room clean. にします。なぜ？→ 補語は「部屋がどんな状態か」を表すので、名詞の様子を表す形容詞 clean を使うからです。',
    [...W([['Keep', M], ['the room', M], ['cleanly.', R]], 22, 34, 14), lb(160, 72, '× 副詞は補語にならない', 13, C.red, 'middle', true), ar(160, 86, 160, 102, C.main), ...W([['Keep', M], ['the room', M], ['clean.', G]], 106, 34, 14), lb(160, 154, 'the room ＝ clean（部屋の状態）', 12, C.green, 'middle', true)],
    'make / keep / find のあとは形容詞', G),
  S('call の例です。We call Ken him. は誤りで、We call him Ken. が正しいです。呼ばれる人（O）が先、呼び名（C）があとで、him = Ken の関係です。give のような SVOO の語順（人が先）と混同しないようにします。',
    [...W([['We call', M], ['Ken', R], ['him.', R]], 30, 34, 14), ar(160, 72, 160, 90, C.main), ...W([['We call', M], ['him', G], ['Ken.', G]], 94, 34, 14), lb(160, 150, '呼ばれる人（O）が先 → 呼び名（C）', 12, C.green, 'middle', true)],
    'call ＋ 人 ＋ 呼び名', G),
  S('まとめです。動詞のあとの2つが O＋O か O＋C かをまず判定し、どちらも〈動詞＋O＋…〉の順で並べます。物が代名詞なら to／for、補語には形容詞を使います。',
    [bx(10, 14, 300, 40, 'O＋O（別のもの）→ 人 → 物', C.blue, FILL.blue, 14), bx(10, 62, 300, 40, 'O＋C（イコール）→ O → C（形容詞）', C.green, FILL.green, 14), bx(10, 110, 300, 40, '物が it / them → SVO ＋ to / for', C.purple, FILL.purple, 14)],
    'まず O＋O か O＋C かを判定', M),
], 'SVOOとSVOCの語順');

// ── 誤文訂正⑤：There is/are と受動態（j2_15・節2）──
figs['xf_new20_j2_eigo_15'] = show([
  S('There is／are の文と受動態の文は、どちらも be動詞の選び方でまちがえやすい文です。この2つは、同じ手順で確かめることができます。',
    [bx(10, 18, 300, 50, 'There is／are ＋ 名詞 …', C.blue, FILL.blue, 15), bx(10, 84, 300, 50, '主語 ＋ be動詞 ＋ 過去分詞 …（受動態）', C.green, FILL.green, 14)],
    'どちらも be動詞の選び方がミスのもと', M),
  S('There is many students in the gym. は誤りで、There are many students. が正しいです。be動詞は There ではなく、あとの名詞 many students（複数）に合わせます。',
    [...W([['There', Gy], ['is', R], ['many students', B], ['in the gym.', M]], 28, 34, 13), lb(160, 80, '× is は many students（複数）に合わない', 12, C.red, 'middle', true), ar(160, 94, 160, 110, C.main), ...W([['There', Gy], ['are', G], ['many students', B], ['in the gym.', M]], 114, 34, 13)],
    'be動詞は あとの名詞の数に合わせる', B),
  S('なぜ There ではなく、あとの名詞に合わせるの？→ There は主語ではなく「〜がある」と知らせる合図で、本当の主語はあとの名詞だからです。',
    [Q('be動詞を あとの名詞に合わせるのは？'), bx(14, 56, 100, 40, 'There\n（合図）', C.gray, FILL.gray, 13), bx(150, 56, 156, 40, 'many students\n＝ 本当の主語', C.blue, FILL.blue, 13), ar(150, 76, 118, 76, C.blue), lb(160, 122, 'There are many students.', 15, C.blue, 'middle', true)],
    '本当の主語 ＝ あとの名詞', P),
  S('受動態でも同じです。These bags was made in Japan. は誤りで、were にします。受動態の be動詞は、文頭の主語 These bags（複数）と時制に合わせます。',
    [...W([['These bags', B], ['was', R], ['made', M], ['in Japan.', M]], 28, 34, 13), ar(160, 74, 160, 90, C.main), ...W([['These bags', B], ['were', G], ['made', M], ['in Japan.', M]], 94, 34, 13), lb(160, 144, '主語の数と時制に合わせる', 12, C.blue, 'middle', true)],
    '受動態は 文頭の主語に合わせる', G),
  S('受動態は〈be動詞＋過去分詞〉です。This room is clean by my sister. は誤りで、cleaned にします。なぜ？→ clean のままだと「部屋はきれいだ」という意味になり、「そうじされる」という受け身にならないからです。',
    [...W([['This room', M], ['is', B], ['clean', R], ['by my sister.', M]], 24, 34, 12), lb(160, 74, '× 原形では 受け身にならない', 12, C.red, 'middle', true), ar(160, 88, 160, 104, C.main), ...W([['This room', M], ['is', B], ['cleaned', G], ['by my sister.', M]], 108, 34, 12)],
    'be動詞 ＋ 過去分詞', G),
  S('では、the cat のように特定できる名詞は？→ There is／are は相手の知らないものを新しく持ち出す文なので、the・my・this の付いた名詞には使いません。The cat is on the sofa. のように、その名詞を主語にします。',
    [Q('特定できる名詞には使えないのは？', true), ...W([['There is', R], ['the cat', R], ['on the sofa.', M]], 56, 32, 13), lb(160, 102, '×', 16, C.red, 'middle', true), ...W([['The cat', G], ['is', G], ['on the sofa.', M]], 112, 32, 13)],
    '特定できるものは その名詞が主語', P),
  S('not の位置です。This song is sung not in Japan. は誤りで、This song is not sung in Japan. です。否定の not は be動詞の直後、過去分詞の前に置きます。疑問文は be動詞を前に出します（Is there a bank near here?）。',
    [...W([['This song', M], ['is', B], ['sung', M], ['not', R], ['in Japan.', M]], 22, 32, 12), ar(160, 62, 160, 78, C.main), ...W([['This song', M], ['is', B], ['not', G], ['sung', M], ['in Japan.', M]], 82, 32, 12), lb(160, 134, '疑問文: Is there a bank near here?', 12, C.blue, 'middle', true)],
    'not は be動詞のすぐあと', B),
  S('確かめの手順をまとめます。①本当の主語を見つける。②その数に be動詞を合わせる。③受動態なら過去分詞か確かめる。④1文に誤りが2つあることもあるので、最後まで読みます。',
    [...F([['① 本当の\n主語は？', B], ['② be動詞を\n数に合わせる', G], ['③ 過去分詞？', P]], 24, 56, 12), lb(160, 110, '④ 最後まで読む', 14, C.main, 'middle', true), lb(160, 138, 'There is a lot of books, they was … → 2か所', 10, C.red, 'middle')],
    '「本当の主語」を見つけて数を合わせる', M),
], 'There is/are と受動態');

// ── 誤文訂正⑥：接続詞（j2_16・節0）──
figs['xf_new20_j2_eigo_16'] = show([
  S('接続詞の誤りは、節の中の動詞の形で起こることが多いです。中でも、if や when の節の中で will を使ってしまう誤りは、いちばんよく出ます。',
    [bx(10, 20, 300, 50, 'If it will be sunny tomorrow,\nwe will go on a picnic.', C.red, FILL.red, 14), lb(160, 100, '× if節の中に will', 14, C.red, 'middle', true), lb(160, 128, '正しくは If it is sunny tomorrow, …', 13, C.green, 'middle', true)],
    'if 節の中の will は誤り', R),
  S('正しい文では、if節の中は現在形で、主節だけが will です。If it is sunny tomorrow, we will go on a picnic. 明日のことでも、if節の中の動詞は現在形にします。',
    [...W([['If it is sunny tomorrow,', G]], 26, 34, 14), ln(160, 62, 160, 76, C.main), lb(160, 88, '現在形', 12, C.green, 'middle', true), ...W([['we will go on a picnic.', B]], 106, 34, 14), lb(160, 154, '主節だけが未来の will', 12, C.blue, 'middle', true)],
    'if節 ＝ 現在形、主節 ＝ will', G),
  S('なぜ未来のことなのに現在形なの？→ if や when の節は「〜したら」という条件・時の設定を表す部分で、未来の予言ではなく「そういう場面を決める」働きなので、現在形で「その時になったら」と言うのがきまりだからです。',
    [Q('未来のことなのに現在形なのは？'), bx(14, 56, 292, 44, '時・条件を表す副詞節\n（if / when の節）= 場面の設定', C.blue, FILL.blue, 13), bx(14, 110, 292, 44, '節の中は現在形、\n結果を言う主節だけ will', C.green, FILL.green, 13)],
    '時・条件の節は 現在形で言うきまり', P),
  S('when でも同じです。When he will arrive, please call me. は誤りで、When he arrives, please call me. にします。arrive は主語が he なので、3人称単数の s も付け忘れないようにします。',
    [...W([['When he', M], ['will arrive,', R], ['please call me.', M]], 30, 34, 13), ar(160, 74, 160, 90, C.main), ...W([['When he', M], ['arrives,', G], ['please call me.', M]], 94, 34, 13), lb(160, 148, 'he ＋ arrives（s を忘れない）', 12, C.green, 'middle', true)],
    'when 節も 現在形（s にも注意）', G),
  S('because の誤りです。I stayed home because the rain. は誤りです。because のあとには〈主語＋動詞〉の節が続きます。名詞だけを続けたいときは because of を使います。',
    [...W([['I stayed home', M], ['because', B], ['the rain.', R]], 22, 34, 13), ar(160, 62, 80, 94, C.main), ar(160, 62, 240, 94, C.main), bx(10, 96, 148, 52, 'because\nit was raining.', C.green, FILL.green, 12), bx(162, 96, 148, 52, 'because of\nthe rain.', C.green, FILL.green, 12)],
    'because ＋ 節 ／ because of ＋ 名詞', B),
  S('Because it was raining, so I stayed home. は誤りです。because（理由）と so（結果）を1つの文で一緒に使うことはできません。どちらか一方にします。',
    [...W([['Because it was raining,', R], ['so', R], ['I stayed home.', M]], 22, 34, 12), lb(160, 72, '× 理由と結果の接続詞を 両方使っている', 12, C.red, 'middle', true), bx(10, 90, 148, 52, 'Because it was raining,\nI stayed home.', C.green, FILL.green, 11), bx(162, 90, 148, 52, 'It was raining,\nso I stayed home.', C.green, FILL.green, 11)],
    'because か so、どちらか1つ', G),
  S('なぜ両方使えないの？→ because も so も、2つの文を「つなぐ」働きの語で、1つの文に2つ入れると、つなぎ目が二重になってしまうからです。日本語の「〜だから、だから」と同じで、1回で十分です。',
    [Q('両方使えないのは？'), bx(10, 56, 120, 44, 'Because A,\nB.', C.green, FILL.green, 13), bx(190, 56, 120, 44, 'A, so B.', C.green, FILL.green, 13), lb(160, 78, 'または', 12, C.gray, 'middle'), lb(160, 124, 'つなぎ目は1か所だけ', 14, C.main, 'middle', true)],
    '2つの文をつなぐ語は 1か所に1つ', P),
  S('that も重ねません。I know that that he is honest. は誤りで、I know that he is honest. です。接続詞の that は1つの節につき1回だけです。',
    [...W([['I know', M], ['that', B], ['that', R], ['he is honest.', M]], 30, 34, 13), ar(160, 74, 160, 90, C.main), ...W([['I know', M], ['that', B], ['he is honest.', M]], 94, 34, 13)],
    '接続詞 that は 1回だけ', B),
  S('まとめです。if・when の節は未来でも現在形、because のあとは節（名詞なら because of）、because と so は一緒に使わない、that は重ねない。見つけたら、まず節の中の will を探します。',
    [bx(10, 8, 300, 34, 'if / when の節の中 → 現在形（will なし）', C.green, FILL.green, 13), bx(10, 48, 300, 34, 'because ＋ 節 ／ because of ＋ 名詞', C.blue, FILL.blue, 13), bx(10, 88, 300, 34, 'because と so は 一緒に使わない', C.red, FILL.red, 13), bx(10, 128, 300, 34, 'that は 1回だけ', C.purple, FILL.purple, 13)],
    '4つのチェック', M),
], '接続詞の誤り');

// ── 書きかえ①：能動態⇔受動態（j2_17・節0）──
figs['xf_new20_j2_eigo_17'] = show([
  S('能動態を受動態に書きかえる例です。A famous artist painted this picture.（有名な画家がこの絵をかいた）を、This picture was painted by a famous artist. にします。4つのステップで進めます。',
    [...W([['A famous artist', B], ['painted', M], ['this picture.', G]], 26, 34, 13), lb(160, 76, '能動態', 12, C.gray, 'middle'), ar(160, 86, 160, 104, C.main), ...W([['This picture', G], ['was painted', M], ['by a famous artist.', B]], 108, 34, 13), lb(160, 158, '受動態', 12, C.gray, 'middle')],
    '同じ出来事を 受け身で言いかえる', M),
  S('ステップ①：能動態の目的語を主語にします。this picture が新しい主語 This picture になります。なぜ？→ 受動態は「される側」を主役にして話す文だからです。',
    [Q('目的語を主語にするのは？'), bx(14, 56, 130, 40, 'A famous artist\n（する人）', C.blue, FILL.blue, 12), bx(176, 56, 130, 40, 'this picture\n（される物）', C.green, FILL.green, 12), ar(240, 100, 240, 124, C.green), bx(176, 126, 130, 36, 'This picture ＝ 主語', C.green, FILL.green, 13)],
    'される側（目的語）が 主語になる', G),
  S('ステップ②：be動詞を、新しい主語ともとの時制に合わせます。もとの文は過去形（painted）なので be動詞も過去、this picture は単数なので was にします。',
    [...W([['This picture', G], ['was', R], ['… ?', Gy]], 26, 38, 15), bx(14, 84, 140, 40, 'もとの時制\n＝ 過去（painted）', C.main, FILL.warm, 12), bx(166, 84, 140, 40, '主語 ＝ 単数\n（this picture）', C.main, FILL.warm, 12), ar(84, 126, 140, 146, C.red), ar(236, 126, 180, 146, C.red), bx(120, 142, 80, 28, 'was', C.red, FILL.red, 14)],
    'be動詞 ＝ 時制 ＋ 主語の数', R),
  S('なぜ be動詞を合わせるの？→ 受動態は〈be動詞＋過去分詞〉で、過去分詞のほうは時制を表さないので、「いつの話か」と「主語の数」は be動詞が受け持つからです。',
    [Q('be動詞を時制と数に合わせるのは？'), bx(14, 56, 140, 56, 'be動詞\n（was / were / is）\n時制と数を表す', C.red, FILL.red, 12), bx(166, 56, 140, 56, '過去分詞\n（painted）\n時制は表さない', C.gray, FILL.gray, 12), lb(160, 138, 'だから be動詞で時制を決める', 13, C.red, 'middle', true)],
    '時制の役は be動詞が担当', P),
  S('ステップ③：動詞を過去分詞にします。paint は painted で形は同じですが、不規則動詞（たとえば write → written）はここで形が変わります。〈was＋過去分詞〉がそろいました。',
    [...W([['This picture', G], ['was', R], ['painted', B]], 30, 38, 15), lb(160, 86, 'paint → painted（形は同じ）', 12, C.ink, 'middle'), lb(160, 112, 'write → written（形が変わる）', 12, C.ink, 'middle'), lb(160, 138, 'ここまでで「この絵はかかれた」', 12, C.blue, 'middle', true)],
    'be動詞 ＋ 過去分詞', B),
  S('ステップ④：能動態の主語を by＋人 の形にして文末に置きます。A famous artist → by a famous artist。完成した文は This picture was painted by a famous artist. です。',
    [...W([['This picture', G], ['was', R], ['painted', B], ['by a famous artist.', M]], 30, 38, 12), ar(160, 76, 160, 96, C.main), bx(40, 98, 240, 40, '「だれによって」を by で後ろに足す', C.main, FILL.warm, 13), lb(160, 154, '完成', 14, C.green, 'middle', true)],
    '動作をした人は by ＋ 人', M),
  S('by 〜 は省略できることがあります。People speak English in many countries. は English is spoken in many countries. です。なぜ省略していいの？→ we・they・people・someone のような「一般の人」は、わざわざ言わなくても分かるからです。',
    [Q('by people を省略できるのは？'), ...W([['People', Gy], ['speak', M], ['English', G], ['in many countries.', M]], 52, 30, 11), ar(160, 86, 160, 102, C.main), ...W([['English', G], ['is spoken', M], ['in many countries.', M]], 106, 30, 12), lb(160, 154, '一般の人 → by people は言わなくても分かる', 12, C.gray, 'middle')],
    '一般の人（people など）の by は省ける', P),
  S('まとめです。①目的語を主語に ②be動詞を時制と数に合わせる ③動詞を過去分詞に ④主語を by＋人 にして文末へ。この順番で必ず書きかえられます。',
    [...F([['① 目的語\nを主語に', B], ['② be動詞\n時制と数', R], ['③ 過去分詞', G], ['④ by＋人\nを文末へ', M]], 36, 66, 11, 6, 314, 14), lb(160, 130, 'artist painted picture', 12, C.gray, 'middle'), lb(160, 150, '→ This picture was painted by a famous artist.', 12, C.green, 'middle', true)],
    '4ステップを順番に', M),
], '能動態から受動態への書きかえ');

// ── 書きかえ②：SVOO⇔SVO＋to/for（j2_18・節0）──
figs['xf_new20_j2_eigo_18'] = show([
  S('SVOOの文は、〈SVO＋to／for＋人〉に書きかえられます。I gave him a present. は I gave a present to him. になります。人を後ろに回すとき、to か for のどちらを付けるかがポイントです。',
    [...W([['I gave', M], ['him', B], ['a present.', G]], 28, 36, 14), ar(160, 74, 160, 92, C.main), ...W([['I gave', M], ['a present', G], ['to him.', B]], 96, 36, 14), lb(160, 154, '人を後ろへ回して to を付ける', 12, C.gray, 'middle')],
    'SVOO ⇔ SVO ＋ to ／ for ＋ 人', M),
  S('to を使う動詞は give・show・teach・tell・send・lend・write・pass、for を使う動詞は make・buy・cook・get・find・choose です。動詞がどちらのグループかで決まります。',
    [bx(10, 10, 143, 150, 'to のグループ\n\ngive\nshow / teach\ntell / send\nlend / write\npass', C.blue, FILL.blue, 13), bx(167, 10, 143, 150, 'for のグループ\n\nmake\nbuy / cook\nget / find\nchoose', C.green, FILL.green, 13)],
    'どちらのグループかを まず判断', B),
  S('なぜ to と for に分かれるの？→ give などは「人に向かって物や情報が移る」動作なので to（向かう先）、make などは「動作そのものは人がいなくてもできるが、相手のためにしてあげる」動作なので for（〜のために）を使います。',
    [Q('to と for に分かれるのは？'), bx(10, 52, 143, 50, 'give a present\n人に向かって物が移る', C.blue, FILL.blue, 11), bx(167, 52, 143, 50, 'make a cake\nケーキ作りは1人でもできる', C.green, FILL.green, 11), lb(81, 120, 'to ＝ 向かう先', 14, C.blue, 'middle', true), lb(239, 120, 'for ＝ 〜のために', 14, C.green, 'middle', true)],
    '渡す・伝える → to　してあげる → for', P),
  S('書きかえの手順は3つです。①動詞のあとの「人」と「物」を確かめる。②動詞が to と for のどちらのグループかを判断する。③〈主語＋動詞＋物＋to／for＋人〉に並べかえる。',
    [...F([['① 人と物を\n確かめる', B], ['② to か for\nを判断', P], ['③ 物＋to/for\n＋人に並べる', G]], 40, 64, 11), lb(160, 130, '順番どおりに進めればまちがえない', 13, C.main, 'middle', true)],
    '3ステップ', M),
  S('例題 She showed me her new bike. です。show は to のグループなので、She showed her new bike to me. に書きかえます。',
    [...W([['She showed', M], ['me', B], ['her new bike.', G]], 28, 36, 13), lb(160, 78, 'show ＝ to のグループ', 13, C.blue, 'middle', true), ar(160, 90, 160, 108, C.main), ...W([['She showed', M], ['her new bike', G], ['to me.', B]], 112, 36, 13)],
    'show → to', B),
  S('もう1つ。My mother made me a cake. です。make は for のグループなので、My mother made a cake for me. になります。to me にすると誤りです。',
    [...W([['My mother made', M], ['me', B], ['a cake.', G]], 28, 36, 13), lb(160, 78, 'make ＝ for のグループ', 13, C.green, 'middle', true), ar(160, 90, 160, 108, C.main), ...W([['My mother made', M], ['a cake', G], ['for me.', B]], 112, 36, 13)],
    'make → for（to me は誤り）', G),
  S('例外が1つあります。ask は to でも for でもなく of を使います。Can I ask you a favor? は Can I ask a favor of you? に書きかえます。',
    [bx(10, 6, 300, 34, 'ask だけは of を使う（例外）', P[0], P[1], 13), ...W([['Can I ask', M], ['you', B], ['a favor?', G]], 56, 34, 13), ar(160, 96, 160, 112, C.main), ...W([['Can I ask', M], ['a favor', G], ['of you?', B]], 116, 34, 13)],
    'ask ＋ 物 ＋ of ＋ 人（例外）', P),
  S('物が it や them のときは、Give me it. だと不自然なので、Give it to me. のように to／for の形にするのがふつうです。explain・introduce・suggest は、もともと SVOO の形がなく、Please explain this word to me. としか言えません。',
    [...W([['△ Give', Gy], ['me', B], ['it.', R]], 24, 32, 13), ar(160, 62, 160, 78, C.main), ...W([['○ Give', Gy], ['it', G], ['to me.', B]], 82, 32, 13), bx(10, 126, 300, 36, '× explain me this word → ○ explain this word to me', C.red, FILL.red, 12)],
    '代名詞の物 → to／for の形が自然', G),
  S('まとめです。人と物を確かめ、動詞が to か for かを決めて並べかえます。ask は of、explain などは最初から to／for の形です。',
    [bx(10, 12, 300, 36, 'give / show / teach / tell … ＋ to', C.blue, FILL.blue, 13), bx(10, 54, 300, 36, 'make / buy / cook / get … ＋ for', C.green, FILL.green, 13), bx(10, 96, 300, 36, 'ask ＋ of ／ explain などは to の形のみ', C.purple, FILL.purple, 13)],
    'to ／ for ／ of の使い分け', M),
], 'SVOOとSVO＋to/forの書きかえ');

// ── 書きかえ③：比較表現（j2_19・節2）──
figs['xf_new20_j2_eigo_19'] = show([
  S('同じ事実を3通りに言いかえる練習です。Tom is taller than Ken. は、Ken is not as tall as Tom. とも言えます。上のほうを主語にするか、下のほうを主語にするかのちがいです。',
    [...W([['Tom', G], ['is taller than', M], ['Ken.', B]], 30, 36, 14), lb(160, 80, 'トムのほうが背が高い', 12, C.gray, 'middle'), ar(160, 90, 160, 108, C.main), ...W([['Ken', B], ['is not as tall as', M], ['Tom.', G]], 112, 36, 14), lb(160, 160, '主語が入れかわる', 12, C.red, 'middle', true)],
    '比較級 ⇔ not as 〜 as', M),
  S('書きかえの手順は、①どちらが上かを確かめる ②下のほう（than のあとにあった語）を新しい主語にする ③形容詞を原級 tall に戻し not as 〜 as ではさむ ④上だった語を as のあとに置く、です。',
    [bx(10, 10, 300, 32, 'Tom is taller than Ken.', C.green, FILL.green, 14), ar(160, 44, 160, 62, C.main), bx(10, 64, 300, 32, 'Ken is not as tall as Tom.', C.blue, FILL.blue, 14), lb(160, 116, 'Tom と Ken を入れかえる', 13, C.red, 'middle', true), lb(160, 140, 'taller → tall（原級にもどす）', 13, C.main, 'middle', true), lb(160, 160, 'than のあとの Ken が 新しい主語', 11, C.gray, 'middle')],
    '下を主語に ／ 原級 tall ／ 上は as のあと', B),
  S('なぜ主語が入れかわるの？→ 比較級は「上のほう」を主語にして言う形、not as 〜 as は「下のほう」を主語にして「〜ほどではない」と言う形で、同じ事実を別の側から言うからです。',
    [Q('書きかえると主語が入れかわるのは？'), bx(60, 54, 24, 70, '', C.green, FILL.green), bx(100, 84, 24, 40, '', C.blue, FILL.blue), lb(72, 138, 'Tom', 12, C.green, 'middle', true), lb(112, 138, 'Ken', 12, C.blue, 'middle', true), lb(220, 74, '上を主語 → taller than', 12, C.green, 'middle', true), lb(220, 104, '下を主語 → not as tall as', 12, C.blue, 'middle', true)],
    '同じ事実を 上から言うか 下から言うか', P),
  S('最上級からの書きかえです。Ken is the tallest boy in his class. は、Ken is taller than any other boy in his class. になります。〈比較級＋than any other＋単数名詞〉の形です。',
    [...W([['Ken is', B], ['the tallest', G], ['boy in his class.', M]], 30, 36, 12), ar(160, 76, 160, 94, C.main), ...W([['Ken is', B], ['taller than', G], ['any other boy', R], ['in his class.', M]], 98, 36, 11)],
    '最上級 ⇔ 比較級 ＋ than any other ＋ 単数', B),
  S('なぜ any other のあとは単数名詞なの？→ any は「他のどの一つをとっても」という意味で、他の少年を一人ずつ Ken と比べているからです。boys と複数にすると、この意味が出ません。',
    [Q('any other のあとが単数なのは？', true), ci(40, 94, 14, 'Ken', C.blue, FILL.blue, 11), ci(120, 70, 12, 'A', C.gray, FILL.gray, 11), ci(120, 100, 12, 'B', C.gray, FILL.gray, 11), ci(120, 130, 12, 'C', C.gray, FILL.gray, 11), ar(56, 90, 106, 72, C.green), ar(56, 94, 106, 100, C.green), ar(56, 100, 106, 126, C.green), lb(224, 84, '他のどの一人と比べても', 12, C.green, 'middle', true), lb(224, 108, 'Ken のほうが高い', 12, C.green, 'middle', true), lb(224, 134, '× boys（複数）', 12, C.red, 'middle', true)],
    'any ＝ 他の どの一つ（一人）', P),
  S('もう1つの形が No other 〜 です。No other boy in his class is taller than Ken. 主語を No other＋単数名詞にして、いちばんだった Ken を than のあとに置きます。',
    [...W([['No other boy', R], ['in his class', M], ['is taller than', G], ['Ken.', B]], 40, 40, 11), lb(160, 98, 'クラスの他のどの少年も Ken より高くない', 12, C.gray, 'middle'), lb(160, 126, 'No other ＋ 単数名詞', 14, C.red, 'middle', true)],
    'No other ＋ 単数 ＋ is 比較級 than 〜', R),
  S('3つの形は同じ事実を言っています。the tallest boy／taller than any other boy／No other boy is taller than Ken。書きかえの前に、いちばん（上）がだれかをまず確かめます。',
    [bx(10, 12, 300, 36, 'Ken is the tallest boy in his class.', C.green, FILL.green, 12), bx(10, 54, 300, 36, 'Ken is taller than any other boy in his class.', C.blue, FILL.blue, 11), bx(10, 96, 300, 36, 'No other boy in his class is taller than Ken.', C.red, FILL.red, 11), lb(160, 150, '= すべて同じ意味', 13, C.main, 'middle', true)],
    '3通りで同じ事実', M),
  S('まとめです。比較級は上が主語、not as 〜 as は下が主語。最上級との書きかえでは any other や no other のあとの名詞を単数にします。',
    [bx(10, 14, 300, 44, '比較級 → 上が主語　not as 〜 as → 下が主語', C.green, FILL.green, 12), bx(10, 66, 300, 44, 'any other ／ No other のあとの名詞は 単数', C.red, FILL.red, 13), bx(10, 118, 300, 44, '書きかえの前に「どちらが上か」を確かめる', C.blue, FILL.blue, 12)],
    '上下の関係を変えない', M),
], '比較表現の書きかえ');

// ── 空所補充：中2文法総合ドリル（j2_20・節0）──
figs['xf_new20_j2_eigo_20'] = show([
  S('空所補充は、3つの手順で解きます。①空所の前後の語を見る ②文中の「時」を表す語を探す ③日本語に直して確かめる。この順番に進めば、形の迷いが大きく減ります。',
    [...F([['① 前後の語', B], ['② 時を表す語', G], ['③ 日本語で\n確認', P]], 40, 64, 12), lb(160, 128, '例: I ( ) tennis when it started to rain.', 12, C.ink, 'middle', true)],
    '3つの手順', M),
  S('手順①：空所の前後の語から、入る形をしぼれます。助動詞（must・should・will）のあとは動詞の原形、be動詞のあとは -ing か過去分詞、前置詞のあとは動名詞です。',
    [...T([['空所の前', '入る形'], ['助動詞 must / should / will', '動詞の原形'], ['be動詞 is / was / were', '-ing か 過去分詞'], ['前置詞 in / at / of / for', '動名詞（-ing）']], 20, [160, 130], B, 30, 11, [B, Gy, Gy, Gy])],
    '周りの語が 形を決める', B),
  S('なぜ前後の語で形がしぼれるの？→ 助動詞や前置詞は「次にどんな形が来るか」が英語のきまりとして決まっているからです。きまりを思い出せば、選択肢の多くを消せます。',
    [Q('前後の語で形がしぼれるのは？'), bx(14, 56, 130, 50, 'must / should / will', C.blue, FILL.blue, 12), ar(148, 81, 172, 81, C.main), bx(176, 56, 130, 50, '次は原形\nmust go / will go', C.green, FILL.green, 12), lb(160, 132, 'きまりを思い出して 選択肢を消す', 13, C.main, 'middle', true)],
    '語ごとの「次に来る形」のきまり', P),
  S('手順②：時を表す語を探します。yesterday・last night は過去形か過去進行形、tomorrow・next week は will か be going to、every day・always は現在形です。',
    [...T([['手がかりの語', '使う形'], ['yesterday / last night', '過去形・過去進行形'], ['tomorrow / next week', 'will / be going to'], ['every day / always', '現在形']], 20, [150, 140], G, 30, 11, [G, Gy, Gy, Gy])],
    '時の語 ＝ 時制の手がかり', G),
  S('なぜ時の語で時制が決まるの？→ 時を表す語は「出来事がいつか」を示していて、動詞の形はその「いつ」に合わせて変えるからです。yesterday と現在形を一緒には使えません。',
    [Q('時の語で時制が決まるのは？'), ar(30, 100, 290, 100, C.gray), ln(160, 88, 160, 112, C.main, false, 2), lb(160, 76, 'いま', 12, C.main, 'middle', true), lb(80, 124, 'yesterday → 過去形', 12, C.blue, 'middle', true), lb(240, 124, 'tomorrow → will', 12, C.green, 'middle', true), lb(160, 150, '「いつ」に動詞の形を合わせる', 12, C.ink, 'middle')],
    '「いつ」に動詞を合わせる', P),
  S('手順③：入れたあとで、文全体を日本語に直して自然な意味か確かめます。形だけで選ぶと、意味の通らない選択をしてしまうことがあるからです。',
    [bx(14, 20, 292, 40, 'I ( ) tennis when it started to rain.', C.main, FILL.warm, 13), ar(160, 64, 160, 84, C.main), bx(14, 88, 292, 40, '雨がふり出したとき、テニスを……', C.purple, FILL.purple, 13), lb(160, 150, '日本語にして 意味が通るか確認', 13, C.purple, 'middle', true)],
    '最後は意味で確認', P),
  S('例題を解きます。選択肢は ① play ② played ③ was playing ④ am playing。when it started to rain の started は過去形なので、現在の ① と ④ は合いません。',
    [bx(10, 14, 300, 30, 'I ( ) tennis when it started to rain.', C.main, FILL.warm, 12), ...W([['① play', R], ['② played', M], ['③ was playing', M], ['④ am playing', R]], 60, 32, 12), lb(160, 112, '① ④ は現在 → started（過去）と合わない', 12, C.red, 'middle', true), lb(160, 138, '残るのは ② と ③', 13, C.ink, 'middle')],
    'まず現在の形を消す', R),
  S('では ② と ③ のどちらか。雨がふり出したとき、テニスはもう始まって続いていました。「続いている動作」を表すのは過去進行形なので、答えは ③ was playing です。',
    [ar(20, 100, 300, 100, C.gray), bx(30, 70, 140, 28, 'was playing（続いている）', C.green, FILL.green, 11), ln(190, 60, 190, 112, C.red, false, 2), lb(190, 126, 'started to rain', 12, C.red, 'middle', true), lb(100, 126, 'テニス中', 12, C.green, 'middle', true), lb(160, 152, '続いている動作に 割りこむ出来事 ＝ 過去進行形', 11, C.ink, 'middle')],
    '答え: ③ was playing', G),
  S('まとめです。①前後の語で形をしぼる ②時の語で時制を決める ③日本語にして確かめる。この順番で、空所補充はほとんど解けます。',
    [bx(10, 14, 300, 40, '① 前後の語 → 形をしぼる', C.blue, FILL.blue, 14), bx(10, 62, 300, 40, '② 時の語 → 時制を決める', C.green, FILL.green, 14), bx(10, 110, 300, 40, '③ 日本語にして → 意味で確認', C.purple, FILL.purple, 14)],
    '手順を言葉にして確かめる', M),
], '空所補充の3つの手順');

// ── 仮定法①：直説法とのちがい（j3_01・節0）──
figs['xf_new20_j3_eigo_01'] = show([
  S('if 節には2種類あります。If it rains tomorrow, I will stay home.（明日雨が降ったら家にいる）は、実際にありうる話。If I were a bird, I would fly to you.（鳥だったら飛んでいくのに）は、ありえない話です。',
    [bx(10, 12, 300, 62, 'If it rains tomorrow,\nI will stay home.\n→ ありうる（直説法）', C.blue, FILL.blue, 13), bx(10, 86, 300, 62, 'If I were a bird,\nI would fly to you.\n→ ありえない（仮定法）', C.purple, FILL.purple, 13)],
    '性質のちがう2つの if', M),
  S('見分ける問いは1つです。「その条件は、実際に起こる可能性があるか？」。可能性があれば直説法、可能性がない・現実に反するなら仮定法です。',
    [bx(70, 10, 180, 36, '条件は起こりうる？', C.main, FILL.warm, 14), ar(130, 48, 80, 80, C.blue), ar(190, 48, 240, 80, C.purple), bx(10, 84, 140, 60, 'ある\n→ 直説法\n現在形・未来形のまま', C.blue, FILL.blue, 12), bx(170, 84, 140, 60, 'ない・現実に反する\n→ 仮定法\n時制を1つ過去へ', C.purple, FILL.purple, 12)],
    '起こりうるか、現実に反するか', M),
  S('直説法の文です。If it rains tomorrow, I will stay home. if節は現在形（rains）、主節は will。なぜ明日のことなのに現在形？→ if の節は「条件の設定」で、時・条件を表す節の中は未来でも現在形にするきまりだからです。',
    [...W([['If it rains tomorrow,', B], ['I will stay home.', B]], 30, 36, 13), lb(160, 82, '↑ 現在形（rains）　　　↑ will', 12, C.blue, 'middle', true), bx(20, 104, 280, 50, 'この if は「実際にあるかもしれない」条件。\n時・条件の節は未来でも現在形。', C.blue, FILL.blue, 12)],
    '直説法 ＝ 現実にありうる条件', B),
  S('仮定法の文です。If I were a bird, I would fly to you. if節の動詞は過去形 were ですが、話しているのは「今」のことです。なぜ過去形？→ 現実から一歩はなれた話だと知らせる合図として、わざと時制を1つ過去にずらしているのです。',
    [Q('今のことなのに過去形なのは？'), ...W([['If I were a bird,', P], ['I would fly to you.', P]], 56, 36, 13), bx(20, 106, 280, 48, '過去形は「昔の話」ではなく\n「現実からはなれている」という合図', C.purple, FILL.purple, 12)],
    '時制を1つ過去へ ＝ 現実ではない合図', P),
  S('形と意味がずれる、ということです。形は過去形、意味は現在。時制の目盛りで見ると、「現在」の話を1つ後ろの「過去形」で言うことで、現実から距離を取っています。',
    [ar(30, 90, 290, 90, C.gray), lb(70, 74, '過去の形', 12, C.purple, 'middle', true), lb(250, 74, '現在', 12, C.main, 'middle', true), ln(250, 82, 250, 98, C.main, false, 2), ln(70, 82, 70, 98, C.purple, false, 2), ar(246, 118, 76, 118, C.purple), lb(160, 140, '1つ後ろの形で言う → 現実と距離をおく', 12, C.purple, 'middle', true)],
    '形は過去・意味は現在', P),
  S('では、過去のことを現実と反対に言うときは？→ さらにもう1つ過去にずらして had＋過去分詞（過去完了）にします。これが仮定法の2つ目の基本形です。',
    [Q('過去の事実に反するときは？', true), bx(10, 52, 300, 40, '今の事実に反する → 過去形', C.purple, FILL.purple, 13), bx(10, 100, 300, 40, '過去の事実に反する → had＋過去分詞', C.purple, FILL.purple, 13)],
    '1段ずつ過去へずらす', P),
  S('全体地図です。仮定法過去は If＋過去形, would／could／might＋原形（今の事実に反する）、仮定法過去完了は If＋had＋過去分詞, would／could／might＋have＋過去分詞（過去の事実に反する）です。',
    [...T([['種類', 'if節', '主節'], ['仮定法過去', '過去形\n（be は were）', 'would 等\n＋原形'], ['仮定法過去完了', 'had\n＋過去分詞', 'would 等＋have\n＋過去分詞']], 14, [92, 100, 124], P, 38, 11, [P, Gy, Gy]), lb(160, 152, '今 → 過去形　／　過去 → 過去完了形', 12, C.purple, 'middle', true)],
    '2つの基本形の全体地図', P),
  S('まとめです。仮定法は特別なルールではなく、「現実ではない話をしているよ」という合図として、時制をわざと過去にずらすものです。まず「起こりうるか」を自分に問います。',
    [bx(10, 14, 300, 40, '起こりうる → 現在形・未来形のまま', C.blue, FILL.blue, 14), bx(10, 62, 300, 40, '現実に反する → 時制を1つ過去へ', C.purple, FILL.purple, 14), bx(10, 110, 300, 40, '形は過去、意味は現在', C.main, FILL.warm, 14)],
    'if の2種類を見分ける', M),
], '直説法と仮定法のちがい');

// ── 仮定法過去①：基本形（j3_02・節0）──
figs['xf_new20_j3_eigo_02'] = show([
  S('仮定法過去の形です。If＋主語＋過去形（be動詞は were）, 主語＋would／could／might＋原形。今の事実に反する仮定を表します。',
    [...F([['If ＋ 主語 ＋\n過去形', P], ['主語 ＋ would /\ncould / might', P], ['＋ 動詞の\n原形', P]], 30, 64, 12, 6, 314, 12), lb(160, 118, '今の事実に反する仮定', 14, C.purple, 'middle', true), lb(160, 144, '形は過去、意味は現在', 12, C.gray, 'middle')],
    'If ＋ 過去形, would ＋ 原形', P),
  S('例です。If I had enough money, I would buy a new bike.（十分なお金があれば、新しい自転車を買うのに）。現実は、お金が足りないので買えません。',
    [...W([['If I had enough money,', P], ['I would buy a new bike.', P]], 24, 36, 12), ar(160, 66, 160, 84, C.main), bx(30, 88, 260, 36, '現実: お金が足りない → 買えない', C.red, FILL.red, 13), lb(160, 144, '仮定法で「もし〜なら…するのに」', 12, C.gray, 'middle')],
    '今の事実の反対を言う', P),
  S('なぜ had という過去形？→ 今お金がないのに「あれば」と言うのは現実から離れた話なので、時制を1つ過去にずらして、現実ではないという合図にしているからです。',
    [Q('if節が過去形になるのは？'), bx(10, 52, 140, 44, '現実\nお金が足りない', C.red, FILL.red, 12), ar(154, 74, 172, 74, C.main), bx(176, 52, 134, 44, 'had enough money\n（過去形で離す）', C.purple, FILL.purple, 12), lb(160, 124, '過去形 ＝ 現実から離れた話の合図', 13, C.purple, 'middle', true)],
    '過去形は 現実と距離をおく形', P),
  S('では、なぜ主節は would なの？→ will を過去形にした would にして、同じように現実から離しているからです。主節も if 節も、時制を1つずらしてそろえます。',
    [Q('主節が would なのは？', true), bx(14, 52, 120, 40, 'will\n（ふつうの未来）', C.blue, FILL.blue, 12), ar(138, 72, 176, 72, C.main), bx(180, 52, 126, 40, 'would\n（現実と離す）', C.purple, FILL.purple, 12), lb(160, 118, 'can → could　　may → might', 13, C.purple, 'middle', true), lb(160, 142, 'どれも過去形にして 現実から離す', 12, C.gray, 'middle')],
    '助動詞も 過去形にそろえる', P),
  S('could の例です。If she knew his phone number, she could call him.（彼の電話番号を知っていれば、電話できるのに）。現実は、電話番号を知らないので電話できません。一般動詞の knew は、見た目はふつうの過去形です。',
    [...W([['If she knew his phone number,', P], ['she could call him.', P]], 24, 36, 11), ar(160, 66, 160, 84, C.main), bx(30, 88, 260, 36, '現実: 番号を知らない → 電話できない', C.red, FILL.red, 12), lb(160, 144, '主節に could があるのが 見分けるカギ', 12, C.gray, 'middle')],
    '一般動詞は ふつうの過去形と同じ形', P),
  S('if節と主節は入れかえられます。I would buy a new bike if I had enough money. 主節を先にするときは、コンマは不要です。意味と考え方は同じです。',
    [...W([['If I had enough money,', P], ['I would buy a new bike.', P]], 28, 34, 12), ar(160, 68, 160, 86, C.main), ...W([['I would buy a new bike', P], ['if I had enough money.', P]], 90, 34, 12), lb(160, 144, 'if が後ろに来るとコンマは不要', 12, C.gray, 'middle')],
    '順序が変わっても 意味は同じ', P),
  S('よくあるミスは、if節を現在形のままにすることです。× If I have enough money, I would buy a new bike. ○ If I had enough money, … 主節に would があるのに if節が現在形なら、まず誤りを疑います。',
    [...W([['If I', M], ['have', R], ['enough money,', M], ['I would buy …', P]], 28, 34, 12), lb(160, 76, '× 主節が would なのに if節が現在形', 12, C.red, 'middle', true), ar(160, 88, 160, 106, C.main), ...W([['If I', M], ['had', G], ['enough money,', M], ['I would buy …', P]], 110, 34, 12)],
    'would があれば if節は過去形', R),
  S('まとめです。仮定法過去は If＋過去形, would／could／might＋原形。形は過去、意味は今の事実の反対です。',
    [bx(10, 14, 300, 40, 'If ＋ 過去形（be は were）', C.purple, FILL.purple, 14), bx(10, 62, 300, 40, '主語 ＋ would / could / might ＋ 原形', C.purple, FILL.purple, 14), bx(10, 110, 300, 40, '意味は「今の事実の反対」', C.main, FILL.warm, 14)],
    '仮定法過去の形', P),
], '仮定法過去の基本形');

// ── 仮定法過去②：were（j3_03・節0）──
figs['xf_new20_j3_eigo_03'] = show([
  S('仮定法過去の be動詞は、主語が I や he でも were を使います。If I were rich, I would travel around the world.（お金持ちなら世界中を旅行するのに）。',
    [...W([['If I', M], ['were', G], ['rich,', M], ['I would travel around the world.', P]], 36, 38, 12), lb(160, 98, 'I でも were を使う', 14, C.green, 'middle', true), lb(160, 126, '× If I was rich …（入試では were）', 12, C.gray, 'middle')],
    '仮定法の be動詞は were', G),
  S('ふつうの過去形と並べます。ふつうの過去形では I was、he was。仮定法過去では I were、he were。主語がいくら単数でも were で統一します。',
    [...T([['', 'ふつうの過去', '仮定法過去'], ['I', 'I was', 'I were'], ['he / she / it', 'he was', 'he were'], ['you / we', 'you were', 'you were']], 24, [90, 100, 100], G, 30, 12, [G, Gy, Gy, Gy])],
    '単数でも were で統一', G),
  S('なぜ was ではなく were なの？→ were は本来は複数や you に使う形です。事実に反することを話している合図として、あえて was とは別の形にそろえ、ふつうの過去形と区別するのです。',
    [Q('I でも were を使うのは？'), bx(14, 54, 130, 44, 'I was\nふつうの過去', C.gray, FILL.gray, 13), bx(176, 54, 130, 44, 'I were\n現実ではない合図', C.green, FILL.green, 13), lb(160, 124, 'was とはっきり区別するための形', 13, C.green, 'middle', true), lb(160, 148, '（くだけた会話では was もあるが、入試では were）', 10, C.gray, 'middle')],
    'were ＝ 仮定法の目印', P),
  S('you や we、複数の主語は、もともと were を使うので、仮定法でも形は変わりません。If you were free, we could go shopping together.（あなたが暇なら、一緒に買い物に行けるのに）。',
    [...W([['If you were free,', P], ['we could go shopping together.', P]], 36, 38, 12), lb(160, 98, 'you は もともと were', 13, C.green, 'middle', true), lb(160, 126, '形は変わらず、主節の could が目印', 12, C.gray, 'middle')],
    'you / we は 元から were', G),
  S('定番のアドバイス表現です。If I were you, I would apologize to her right away.（もし私があなたなら、すぐに彼女に謝る）。なぜ仮定法？→ 私があなたになることは現実にはありえないので、事実に反する仮定だからです。',
    [Q('If I were you が仮定法なのは？'), ...W([['If I were you,', P], ['I would apologize to her right away.', P]], 56, 36, 12), bx(30, 104, 260, 44, '私があなたになることはありえない\n→ 事実に反する → 仮定法', C.purple, FILL.purple, 12)],
    'If I were you, I would 〜. ＝ アドバイス', P),
  S('同じ形で、アドバイスを求める言い方もできます。What would you do if you were me?（もしあなたが私だったら、どうする？）。「あなたの立場なら」は In your place, I would 〜. でもほぼ同じ意味です。',
    [bx(10, 14, 300, 44, 'What would you do if you were me?', C.purple, FILL.purple, 14), lb(160, 82, '（もしあなたが私だったら、どうする？）', 12, C.gray, 'middle'), bx(10, 106, 300, 44, 'In your place, I would 〜.', C.purple, FILL.purple, 14)],
    '似た言い方も覚える', P),
  S('覚え方です。If I were you は、were を was にしないよう、セットで丸ごと覚えるのがいちばん確実です。',
    [bx(30, 20, 260, 60, 'If I were you, I would …', C.green, FILL.green, 20), lb(160, 108, '× If I was you　→　○ If I were you', 14, C.red, 'middle', true), lb(160, 136, 'セットで暗記', 14, C.main, 'middle', true)],
    '最頻出フレーズ', G),
  S('まとめです。仮定法過去の be動詞は主語に関係なく were。ふつうの過去形（was）と区別するための合図で、アドバイスの If I were you, … が最頻出です。',
    [bx(10, 14, 300, 40, '仮定法過去の be動詞 ＝ were', C.green, FILL.green, 14), bx(10, 62, 300, 40, '理由: 事実に反する合図（was と区別）', C.purple, FILL.purple, 13), bx(10, 110, 300, 40, 'If I were you, I would 〜.', C.main, FILL.warm, 14)],
    'were の3つのポイント', G),
], 'were を使う理由');

// ── 仮定法過去③：would・could・might（j3_04・節2）──
figs['xf_new20_j3_eigo_04'] = show([
  S('If it were sunny, … の主節で、3つの助動詞を比べます。I would go for a walk.（散歩に行くのに）、we could play outside.（外で遊べるのに）、we might have a picnic.（ピクニックをするかもしれないのに）。',
    [bx(10, 10, 300, 40, 'would: I would go for a walk.', C.blue, FILL.blue, 13), bx(10, 56, 300, 40, 'could: we could play outside.', C.green, FILL.green, 13), bx(10, 102, 300, 40, 'might: we might have a picnic.', C.red, FILL.red, 13)],
    '形は同じ、意味のニュアンスがちがう', M),
  S('なぜ意味がちがうの？→ 3つとも、もとの助動詞を過去形にしたもので、意味はもとの助動詞を引きついでいるからです。would←will、could←can、might←may です。',
    [Q('意味がちがうのは？'), ...F([['will\n（意志・推量）', B], ['can\n（できる）', G], ['may\n（かもしれない）', R]], 52, 52, 12, 10, 310, 18), ar(80, 108, 80, 128, C.main), ar(160, 108, 160, 128, C.main), ar(240, 108, 240, 128, C.main), lb(80, 142, 'would', 15, C.blue, 'middle', true), lb(160, 142, 'could', 15, C.green, 'middle', true), lb(240, 142, 'might', 15, C.red, 'middle', true)],
    '過去形になっても 意味は引きつぐ', P),
  S('確信の強さで並べると、would はふつう、could は「できる」ことに焦点、might は確信がいちばん弱い言い方です。形は同じで、ちがうのは話し手の確信の強さだけです。',
    [ln(40, 70, 280, 70, C.gray, false, 3), bx(30, 56, 56, 28, 'might', C.red, FILL.red, 13), bx(130, 56, 60, 28, 'could', C.green, FILL.green, 13), bx(232, 56, 60, 28, 'would', C.blue, FILL.blue, 13), lb(58, 104, '弱い', 12, C.red, 'middle', true), lb(260, 104, 'ふつう', 12, C.blue, 'middle', true), lb(160, 130, '確信の強さのちがい（形はどれも同じ）', 12, C.ink, 'middle')],
    '確信の強さ: might < could・would', B),
  S('日本語のヒントで選びます。「〜できるのに」なら could、「〜かもしれないのに」なら might、それ以外は would が基本です。ただし絶対ではなく、文全体の意味を優先します。',
    [...T([['日本語', '助動詞', '例'], ['〜できるのに', 'could', 'I could look up the word.'], ['〜かもしれないのに', 'might', 'she might know it.'], ['それ以外', 'would', 'he would help us.']], 24, [100, 60, 150], B, 30, 10, [B, Gy, Gy, Gy])],
    '日本語の手がかりで選ぶ', B),
  S('例題です。「もし辞書があれば、この単語の意味を調べられるのに」。「調べられる」＝能力なので could：If I had a dictionary, I could look up the meaning of this word.',
    [bx(10, 22, 300, 30, 'If I had a dictionary,', C.purple, FILL.purple, 13), bx(10, 56, 300, 30, 'I could look up the meaning of this word.', C.green, FILL.green, 12), lb(160, 108, '「調べられる」＝ できる → could', 13, C.green, 'middle', true), lb(160, 134, '（日本語の手がかり）', 12, C.gray, 'middle')],
    'できる → could', G),
  S('否定形も同じ規則です。wouldn\'t（would not）、couldn\'t（could not）、might not。If I were free, I wouldn\'t stay home.（暇なら、家にはいないだろうに）。',
    [...W([['If I were free,', P], ['I wouldn\'t stay home.', R]], 40, 38, 13), lb(160, 98, 'would ＋ not ＝ wouldn\'t', 13, C.red, 'middle', true), lb(160, 124, 'could ＋ not ＝ couldn\'t　　might not', 12, C.gray, 'middle')],
    '否定形も 同じ規則', R),
  S('確かめのしかたです。①主節の助動詞をもとの助動詞に戻して意味を確かめる ②日本語のヒントを見る ③if節は過去形、主節は助動詞の過去形＋原形になっているか。',
    [bx(10, 14, 300, 40, '① もとの助動詞に戻す（would→will など）', C.blue, FILL.blue, 12), bx(10, 62, 300, 40, '② 日本語のヒントを見る', C.green, FILL.green, 13), bx(10, 110, 300, 40, '③ if節: 過去形　主節: 助動詞の過去形＋原形', C.purple, FILL.purple, 11)],
    '3つの確かめ', M),
  S('まとめです。would・could・might は、もとの助動詞（will・can・may）の意味を引きついだ過去形です。意志・能力・弱い可能性で使い分けます。',
    [bx(10, 14, 300, 40, 'would ← will ＝ 意志・推量', C.blue, FILL.blue, 14), bx(10, 62, 300, 40, 'could ← can ＝ 能力・できる', C.green, FILL.green, 14), bx(10, 110, 300, 40, 'might ← may ＝ 弱い可能性', C.red, FILL.red, 14)],
    '意味はもとの助動詞から', M),
], 'would・could・might のちがい');

// ── 仮定法過去④：直説法との見分け方（j3_05・節0）──
figs['xf_new20_j3_eigo_05'] = show([
  S('見た目が似た2つの文です。If it rains tomorrow, I will stay home.（直説法）と If I were a bird, I would fly to you.（仮定法過去）。どちらも「もし〜なら」ですが、中身は別物です。',
    [bx(10, 14, 300, 56, 'If it rains tomorrow,\nI will stay home.', C.blue, FILL.blue, 14), bx(10, 84, 300, 56, 'If I were a bird,\nI would fly to you.', C.purple, FILL.purple, 14), lb(160, 158, '日本語の「もし〜なら」だけでは判断できない', 11, C.red, 'middle', true)],
    '見た目が似た2つの if', M),
  S('見分けの手順①：if節の動詞の形を見ます。rains のような現在形なら直説法の可能性、were や had のような過去形なら仮定法過去の可能性があります。',
    [...W([['If it', M], ['rains', B], ['tomorrow, …', M]], 26, 34, 14), lb(160, 76, '現在形 → 直説法', 13, C.blue, 'middle', true), ...W([['If I', M], ['were', P], ['a bird, …', M]], 100, 34, 14), lb(160, 150, '過去形 → 仮定法過去', 13, C.purple, 'middle', true)],
    '① if節の動詞は 現在形か過去形か', B),
  S('手順②：主節を見ます。will／can／may なら直説法、would／could／might なら仮定法過去です。なぜ主節でも分かるの？→ if節が過去形にずらされると、主節の助動詞もセットで過去形にずらされるからです。',
    [Q('主節の助動詞でも見分けられるのは？'), bx(14, 52, 140, 44, 'will / can / may\n→ 直説法', C.blue, FILL.blue, 13), bx(166, 52, 140, 44, 'would / could / might\n→ 仮定法過去', C.purple, FILL.purple, 12), lb(160, 122, 'if節と主節は セットで時制がずれる', 13, C.main, 'middle', true)],
    '② 主節の助動詞を見る', P),
  S('手順③：内容が現実にありうるかを考えます。「私が鳥になる」「人間に翼がある」はありえない話なので仮定法。「相手が暇かどうか」は現実にありうる話なので直説法です。',
    [bx(10, 14, 300, 52, 'If you are free, let\'s go shopping.\n相手が暇かは現実にありうる → 直説法', C.blue, FILL.blue, 12), bx(10, 78, 300, 52, 'If I had wings, I could fly.\n人間に翼はない → 仮定法過去', C.purple, FILL.purple, 12)],
    '③ 内容は 現実にありうるか', M),
  S('4つの文を表にします。rains／will で可能性あり、were／would で鳥はありえない、are／let\'s で相手は暇かもしれない、had／could で翼はない、です。',
    [...T([['if節', '主節', '判定'], ['rains', 'will stay', '直説法'], ['were a bird', 'would fly', '仮定法過去'], ['are free', 'let\'s go', '直説法'], ['had wings', 'could fly', '仮定法過去']], 14, [100, 110, 100], P, 28, 11, [P, B, P, B, P])],
    '3つ（動詞・主節・内容）をセットで', P),
  S('まぎらわしい例です。When he comes back, I will tell him the news. これは仮定法ではありません。時・条件を表す節は未来でも現在形を使うきまりで、主節に will があり、内容も現実的だからです。',
    [bx(10, 18, 300, 40, 'When he comes back, I will tell him the news.', C.blue, FILL.blue, 11), lb(160, 82, '→ 仮定法ではない（直説法）', 14, C.blue, 'middle', true), bx(20, 100, 280, 50, '・主節に will　・内容は現実的\n・時を表す節は 未来でも現在形', C.blue, FILL.blue, 12)],
    '時の節の現在形は 仮定法ではない', B),
  S('識別の質問は3つです。①if節の動詞は現在形か過去形か ②主節は will／can か would／could／might か ③内容は現実にありうることか空想か。この3つをセットで確認します。',
    [bx(10, 14, 300, 40, '① if節の動詞は 現在形？過去形？', C.blue, FILL.blue, 13), bx(10, 62, 300, 40, '② 主節は will / can ？ would / could / might ？', C.green, FILL.green, 12), bx(10, 110, 300, 40, '③ 内容は 現実にありうる？空想？', C.purple, FILL.purple, 13)],
    '3つをセットで確認', M),
  S('まとめです。日本語訳の「もし〜なら」だけでは見分けられません。必ず動詞の形と現実性の両方をチェックします。',
    [bx(10, 14, 300, 50, 'ありうる条件\n現在形 ＋ will → 直説法', C.blue, FILL.blue, 14), bx(10, 76, 300, 50, '現実に反する仮定\n過去形 ＋ would → 仮定法過去', C.purple, FILL.purple, 14)],
    '形と現実性の両方を見る', M),
], '直説法と仮定法過去の見分け方');

// ── I wish①：仮定法過去（j3_06・節2）──
figs['xf_new20_j3_eigo_06'] = show([
  S('I wish は「現実にはそうではないけれど、そうだったらなあ」という願いを表します。I wish I were taller.（背が高ければなあ）は、現実では背が高くない、ということです。',
    [bx(10, 18, 300, 40, 'I wish I were taller.', C.purple, FILL.purple, 18), ar(160, 62, 160, 82, C.main), bx(10, 86, 300, 40, '現実: 背が高くない', C.red, FILL.red, 15), lb(160, 148, '「今〜であればなあ」', 13, C.gray, 'middle', true)],
    '現実に反する願望 ＝ I wish', P),
  S('形は I wish＋主語＋過去形（be動詞は were）です。I wish I had a smartphone.（スマホを持っていたらなあ）、I wish I could speak English well.（英語が上手に話せたらなあ）。',
    [...W([['I wish', P], ['主語', M], ['過去形 / were / could / would', G]], 24, 36, 12), bx(10, 74, 300, 36, 'I wish I had a smartphone. → 現実は持っていない', C.purple, FILL.purple, 11), bx(10, 118, 300, 36, 'I wish I could speak English well. → 話せない', C.purple, FILL.purple, 11)],
    'I wish ＋ 過去形', P),
  S('なぜ今のことなのに過去形なの？→ 現実から離れた話は、時制を1つ過去にずらして示すからです。if の仮定法過去とまったく同じ考え方で、can は could、will は would になります。',
    [Q('今の願いなのに過去形なのは？'), ...F([['can\n→ could', G], ['will\n→ would', G], ['am / is\n→ were', G]], 54, 50, 12, 10, 310, 16), lb(160, 126, '現実から離れているしるしに 過去形にする', 13, C.purple, 'middle', true)],
    '時制を1つ過去にずらして 現実と距離をおく', P),
  S('I hope と比べます。I hope you will pass the exam.（合格するといいね）は、実現の可能性がある願い。あとは現在形や will をそのまま使います。I wish は実現しない・かなわない願いで、あとは過去形です。',
    [...T([['', 'I hope', 'I wish'], ['願いの中身', '実現しうる', '実現しない・反する'], ['あとの動詞', '現在形 / will', '過去形（were など）'], ['例', 'you will pass', 'I were a doctor']], 20, [70, 110, 130], P, 30, 11, [P, Gy, Gy, Gy])],
    'hope と wish の使い分け', P),
  S('では、なぜ hope は現在形でいいの？→ 実現する可能性がある願いなので、現実から離れる必要がなく、時制をずらさなくてもよいからです。「実現できそうか、できなさそうか」で hope と wish を選びます。',
    [Q('hope は時制をずらさないのは？', true), bx(14, 54, 140, 50, '合格するといいね\n実現しうる\n→ そのまま', C.blue, FILL.blue, 12), bx(166, 54, 140, 50, '医者だったらなあ\n実現しない\n→ 過去形でずらす', C.purple, FILL.purple, 12), lb(160, 128, 'I hope のあとに 過去形は使わない', 13, C.red, 'middle', true)],
    '可能性があるか、ないか', B),
  S('よくある誤りは I wish のあとを現在形にすることです。× I wish I can swim well. ○ I wish I could swim well. 現在形のままだと「現実から離れている」しるしがなくなってしまいます。',
    [...W([['I wish I', M], ['can', R], ['swim well.', M]], 28, 34, 14), ar(160, 70, 160, 88, C.main), ...W([['I wish I', M], ['could', G], ['swim well.', M]], 92, 34, 14), lb(160, 150, 'I wish I am … → I wish I were …', 12, C.gray, 'middle')],
    'I wish のあとは 過去形', R),
  S('もう1つ。I wish it would stop raining.（雨がやんでくれたらなあ）では will が would になります。確かめのしかたは、①あとが過去形か ②現実に反しているか ③実現しうるなら hope にする、の3つです。',
    [...W([['I wish it', M], ['would', G], ['stop raining.', M]], 24, 34, 14), lb(160, 70, 'will → would', 13, C.green, 'middle', true), ...F([['① あとが\n過去形？', B], ['② 現実に\n反する？', P], ['③ 可能なら\nhope', G]], 92, 52, 11)],
    '確かめの3つ', M),
  S('まとめです。I wish は現実に反する願望なので、時制を1つ過去にずらして were・could・would にします。実現しうる願いは I hope＋現在形です。',
    [bx(10, 14, 300, 44, 'I wish ＋ 過去形（were / could / would）', C.purple, FILL.purple, 13), bx(10, 66, 300, 44, '実現しうる願い → I hope ＋ 現在形 / will', C.blue, FILL.blue, 13), bx(10, 118, 300, 36, '現実から離れたら 時制をずらす', C.main, FILL.warm, 13)],
    'wish は 現実に反する願い', P),
], 'I wish と仮定法過去');

// ── I wish②：仮定法過去完了（j3_07・節2）──
figs['xf_new20_j3_eigo_07'] = show([
  S('I wish＋過去形は「今」の願いでした。「あの時」の後悔を言うには形がちがいます。今: I wish I were rich.（お金持ちならなあ）、あの時: I wish I had been rich then.（あの時お金持ちだったらなあ）。',
    [bx(10, 16, 300, 50, '今の願い\nI wish I were rich.', C.purple, FILL.purple, 14), bx(10, 78, 300, 50, 'あの時の後悔\nI wish I had been rich then.', C.red, FILL.red, 13), lb(160, 150, '「今」か「あの時」かで形が変わる', 12, C.gray, 'middle')],
    '今 → 過去形　あの時 → had＋過去分詞', P),
  S('形は I wish＋主語＋had＋過去分詞です。I wish I had studied harder for the test.（もっと勉強していればなあ）→ 現実は、あまり勉強しなかった。I wish I hadn\'t said such a thing to her. は「あんなことを言わなければよかった」です。',
    [...W([['I wish', P], ['I', M], ['had studied', G], ['harder.', M]], 22, 34, 14), bx(10, 66, 300, 34, '現実: あまり勉強しなかった', C.red, FILL.red, 13), bx(10, 108, 300, 40, 'I wish I hadn\'t said such a thing.\n→ 現実: 言ってしまった', C.purple, FILL.purple, 11)],
    'I wish ＋ had ＋ 過去分詞', P),
  S('なぜ had＋過去分詞なの？→ 今の願いは過去形で「1つ」ずらしました。あの時の後悔は、そこからさらに「もう1段階」過去にずらす必要があり、過去形の一つ前の形が had＋過去分詞（過去完了）だからです。',
    [Q('過去の後悔は had＋過去分詞なのは？'), ar(30, 96, 290, 96, C.gray), ln(240, 84, 240, 108, C.main, false, 2), lb(240, 72, '今', 12, C.main, 'middle', true), ln(150, 84, 150, 108, C.purple, false, 2), lb(150, 72, '過去形', 12, C.purple, 'middle', true), ln(60, 84, 60, 108, C.red, false, 2), lb(60, 72, 'had＋過去分詞', 11, C.red, 'middle', true), ar(236, 126, 156, 126, C.purple), ar(146, 126, 66, 126, C.red), lb(160, 148, '1段ずつ 過去へずらす', 12, C.ink, 'middle', true)],
    '2段階ずらすと had＋過去分詞', P),
  S('日本語のヒントです。「もっと〜していれば」「〜だったらなあ」のように過去を振り返っているなら had＋過去分詞。I wish のあとに had＋過去分詞を見たら、すぐに過去への後悔だと判断します。',
    [...T([['日本語', '形'], ['今、〜ならなあ', 'I wish ＋ 過去形'], ['あの時、〜していればなあ', 'I wish ＋ had＋過去分詞']], 30, [140, 160], P, 34, 12, [P, Gy, Gy]), lb(160, 150, '過去を振り返る言い方かどうか', 12, C.gray, 'middle')],
    '今か あの時か', P),
  S('では、なぜ would have は使わないの？→ would have＋過去分詞は、仮定法過去完了の「主節」の形だからです。I wish のあとに来るのは if節にあたる「事実に反する内容」なので、if節の形（had＋過去分詞）を使います。',
    [Q('I wish のあとに would have は使わないのは？', true), ...W([['If I had studied,', P], ['I would have passed.', R]], 54, 32, 12), lb(160, 98, 'would have ＝ 主節の形', 12, C.red, 'middle', true), ...W([['I wish', P], ['I had studied harder.', G]], 112, 32, 12), lb(160, 156, 'I wish のあと ＝ if節にあたる内容', 12, C.green, 'middle', true)],
    '× I wish I would have studied', R),
  S('if only は I wish より感情の強い言い方で、同じ規則です。If only I had listened to my teacher!（先生の言うことを聞いていさえすればなあ）。感嘆符で終わることが多いです。',
    [bx(10, 18, 300, 44, 'If only I had listened to my teacher!', C.purple, FILL.purple, 14), lb(160, 86, '＝ I wish より 強い後悔', 13, C.red, 'middle', true), bx(10, 106, 300, 44, 'If only I were more confident!', C.purple, FILL.purple, 14), lb(160, 160, '（今の願いなら 過去形）', 11, C.gray, 'middle')],
    'If only ＋ 同じ形', P),
  S('確かめのしかたです。①「今」なら過去形、「あの時」なら had＋過去分詞 ②× would have は使わない ③否定は hadn\'t＋過去分詞 ④if only も同じ形。',
    [bx(10, 8, 300, 34, '① 今 → 過去形　あの時 → had＋過去分詞', C.purple, FILL.purple, 12), bx(10, 48, 300, 34, '② I wish のあとに would have は使わない', C.red, FILL.red, 12), bx(10, 88, 300, 34, '③ 否定 → hadn\'t ＋ 過去分詞', C.blue, FILL.blue, 12), bx(10, 128, 300, 34, '④ If only も同じ形', C.green, FILL.green, 12)],
    '4つの確かめ', M),
  S('まとめです。過去の後悔は、もう1段階過去にずらして had＋過去分詞。I wish のあとは if節にあたる内容なので、主節の形 would have は使いません。',
    [bx(10, 14, 300, 44, 'あの時の後悔 → I wish ＋ had ＋ 過去分詞', C.purple, FILL.purple, 13), bx(10, 66, 300, 44, '× would have は使わない', C.red, FILL.red, 14), bx(10, 118, 300, 36, '理由: if節にあたる内容だから', C.main, FILL.warm, 13)],
    'had＋過去分詞で 過去を振り返る', P),
], 'I wish と仮定法過去完了');

// ── as if / as though（j3_08・節2）──
figs['xf_new20_j3_eigo_08'] = show([
  S('as if（as though）は「まるで〜であるかのように」。He talks as if he knew everything. は「彼はまるで何でも知っているかのように話す」で、実際は知らない、という意味です。',
    [bx(10, 16, 300, 40, 'He talks as if he knew everything.', C.purple, FILL.purple, 14), ar(160, 60, 160, 78, C.main), bx(10, 82, 300, 40, '実際は 何でも知っているわけではない', C.red, FILL.red, 13), lb(160, 146, '見かけと現実のずれを言う表現', 12, C.gray, 'middle')],
    'まるで〜かのように（実際はちがう）', P),
  S('なぜ仮定法なの？→ as if の中身は実際にはそうではないことなので、現実に反する内容になり、if節や I wish と同じく時制を1つ過去にずらすからです。',
    [Q('as if のあとが仮定法になるのは？'), bx(14, 54, 130, 50, '実際は知らない\n（現実に反する）', C.red, FILL.red, 12), ar(148, 79, 172, 79, C.main), bx(176, 54, 130, 50, '時制を1つ\n過去へずらす', C.purple, FILL.purple, 12), lb(160, 128, 'if節・I wish と同じ発想', 13, C.purple, 'middle', true)],
    '現実に反する → 時制をずらす', P),
  S('主節と同じ時点の様子なら過去形です。He acts as if he were the boss.（まるでボスであるかのようにふるまう）。be動詞は were が原則で、実際はボスではありません。',
    [...W([['He acts', M], ['as if', B], ['he were', G], ['the boss.', M]], 28, 34, 14), lb(160, 76, '同じ時点 → 過去形（be は were）', 13, C.green, 'middle', true), ar(30, 112, 290, 112, C.gray), ln(160, 100, 160, 124, C.main, false, 2), lb(160, 140, 'acts と were は同じ時点', 12, C.ink, 'middle')],
    'as if ＋ 過去形 ＝ 同時の様子', G),
  S('主節より前の時点の出来事なら had＋過去分詞です。She looked as if she had seen a ghost.（まるで幽霊を見たかのような顔をしていた）。顔を見た時点より前に「見た」かのようだ、という意味です。',
    [...W([['She looked', M], ['as if', B], ['she had seen', R], ['a ghost.', M]], 28, 34, 13), lb(160, 76, 'さらに前の時点 → had＋過去分詞', 13, C.red, 'middle', true), ar(30, 112, 290, 112, C.gray), ln(210, 100, 210, 124, C.main, false, 2), lb(210, 140, 'looked', 12, C.main, 'middle', true), ln(100, 100, 100, 124, C.red, false, 2), lb(100, 140, 'seen', 12, C.red, 'middle', true)],
    'as if ＋ had＋過去分詞 ＝ それ以前', R),
  S('なぜ過去形と had＋過去分詞を分けるの？→ ずらす段数が、主節との時点の前後を表すからです。同時なら1段ずらして過去形、主節より前なら2段ずらして had＋過去分詞です。',
    [Q('過去形と had＋過去分詞を分けるのは？', true), ...T([['時点', '形', '例'], ['主節と同時', '過去形', 'talks as if he knew'], ['主節より前', 'had＋過去分詞', 'looked as if she had seen']], 54, [66, 84, 170], P, 30, 10, [P, Gy, Gy]), lb(160, 160, '段数 ＝ 時点の前後', 12, C.main, 'middle', true)],
    '1段 ＝ 同時　2段 ＝ それ以前', P),
  S('では、なぜ look・sound・feel・talk・act のあとによく使うの？→ これらは「様子・印象」を表す動詞で、見た目や印象と現実のずれを言いたいときに as if がぴったりだからです。',
    [Q('様子の動詞のあとに多いのは？', true), ...W([['look', B], ['sound', B], ['feel', B], ['talk', B], ['act', B]], 56, 32, 14), lb(160, 110, '見た目・印象 ＋ as if ＋ 現実とのずれ', 13, C.purple, 'middle', true), lb(160, 138, 'She looks as if she were sick.', 13, C.ink, 'middle')],
    '見た目と現実のずれ', P),
  S('as if と as though は、ほぼ同じ意味で置きかえられます。He speaks as if he were a native speaker. ＝ He speaks as though he were a native speaker.（まるでネイティブスピーカーのように話す）。',
    [bx(10, 20, 300, 40, 'He speaks as if he were a native speaker.', C.blue, FILL.blue, 12), lb(160, 82, '＝', 18, C.main, 'middle', true), bx(10, 100, 300, 40, 'He speaks as though he were a native speaker.', C.blue, FILL.blue, 12)],
    'as if ＝ as though', B),
  S('まとめです。as if は現実に反する様子なので仮定法。主節と同時なら過去形、主節より前なら had＋過去分詞とずらす段数で時点の前後を表します。',
    [bx(10, 14, 300, 44, 'as if ＋ 過去形 ＝ 主節と同時', C.green, FILL.green, 14), bx(10, 66, 300, 44, 'as if ＋ had＋過去分詞 ＝ 主節より前', C.red, FILL.red, 13), bx(10, 118, 300, 36, 'ずらす段数が 時点の前後を表す', C.main, FILL.warm, 13)],
    'as if は 時点の前後を見る', P),
], 'as if / as though');

// ── 仮定法過去完了①：基本形（j3_09・節0）──
figs['xf_new20_j3_eigo_09'] = show([
  S('仮定法過去完了の形です。If＋主語＋had＋過去分詞, 主語＋would／could／might＋have＋過去分詞。「（あの時）もし〜だったら、…だっただろうに」と、過去の事実と反対のことを述べます。',
    [...F([['If ＋ 主語 ＋\nhad ＋ 過去分詞', P], ['主語 ＋ would /\ncould / might', P], ['＋ have ＋\n過去分詞', P]], 28, 62, 11, 6, 314, 12), lb(160, 118, '過去の事実に反する仮定', 14, C.purple, 'middle', true), lb(160, 144, '「あの時〜していたら、…していたのに」', 12, C.gray, 'middle')],
    'If ＋ had ＋ 過去分詞, would have ＋ 過去分詞', P),
  S('例です。If I had studied harder, I would have passed the exam.（もっと勉強していたら、試験に合格していたのに）。現実は、勉強しなかった、そして合格しなかった、です。',
    [bx(10, 14, 300, 32, 'If I had studied harder,', C.purple, FILL.purple, 14), bx(10, 50, 300, 32, 'I would have passed the exam.', C.purple, FILL.purple, 14), ar(160, 86, 160, 102, C.main), bx(10, 106, 300, 44, '現実: 勉強しなかった → 合格しなかった', C.red, FILL.red, 13)],
    '過去の事実の反対', P),
  S('なぜ if節は had＋過去分詞なの？→ 仮定法過去（今の話）は過去形で1段ずらしました。「あの時」の話は、そこからさらに1段、過去のさらに前を表す過去完了（had＋過去分詞）にずらすからです。',
    [Q('if節が had＋過去分詞になるのは？'), ...T([['話す時点', 'if節の形'], ['今の事実の反対', '過去形（1段）'], ['あの時の事実の反対', 'had＋過去分詞（2段）']], 52, [140, 170], P, 32, 12, [P, Gy, Gy]), lb(160, 160, '時点が1つ前になるごとに 1段ずつずらす', 12, C.main, 'middle', true)],
    '今 → 過去形　あの時 → 過去完了', P),
  S('では、なぜ主節は would have＋過去分詞なの？→ would は現実から離すための形、have＋過去分詞は「その結果が過去に起こった」ことを表すからです。「合格していた（はずなのに）」と過去の結果を言っています。',
    [Q('主節が would have＋過去分詞なのは？', true), ...W([['would', P], ['have + 過去分詞', G]], 54, 34, 13), bx(14, 100, 140, 52, 'would\n現実から離す', C.purple, FILL.purple, 12), bx(166, 100, 140, 52, 'have＋過去分詞\n過去の結果', C.green, FILL.green, 12)],
    'would（離す）＋ have 過去分詞（過去の結果）', P),
  S('be動詞の過去分詞は been です。If it had been sunny, we would have had a picnic.（晴れていたら、ピクニックをしていたのに）。have の過去分詞は had なので、have が動詞の場合は had had という形になります。',
    [bx(10, 14, 300, 32, 'If it had been sunny,', C.purple, FILL.purple, 14), bx(10, 50, 300, 32, 'we would have had a picnic.', C.purple, FILL.purple, 14), bx(10, 96, 300, 54, 'be の過去分詞 ＝ been\nhave の過去分詞 ＝ had\n（If I had had more money, …）', C.blue, FILL.blue, 12)],
    'been / had had に注意', B),
  S('ミス①：主節の have の忘れ。× I would passed the exam. ○ I would have passed the exam. would のあとには必ず have を入れて、過去分詞を続けます。',
    [...W([['I would', M], ['passed', R], ['the exam.', M]], 26, 34, 14), lb(160, 72, '× have がない', 13, C.red, 'middle', true), ar(160, 84, 160, 102, C.main), ...W([['I would', M], ['have', G], ['passed', M], ['the exam.', M]], 106, 34, 14)],
    'would ＋ have ＋ 過去分詞', R),
  S('ミス②③：if節の had の忘れと、過去分詞の形です。× If I studied harder, … だと基本の形としては誤りで、○ If I had studied harder, … です。過去分詞は catch→caught、buy→bought、see→seen、go→gone、write→written と、正確に覚えます。',
    [...W([['If I', M], ['studied', R], ['harder, …', M]], 24, 32, 13), lb(160, 66, '× had がない', 12, C.red, 'middle', true), ...W([['If I', M], ['had studied', G], ['harder, …', M]], 80, 32, 13), bx(10, 122, 300, 38, 'catch→caught　buy→bought　see→seen\ngo→gone　write→written', C.blue, FILL.blue, 11)],
    'had を忘れない／過去分詞を正しく', R),
  S('つづりのミスも多いです。would of と書くのは、would\'ve の発音につられたつづりミス。正しくは would have です。',
    [bx(10, 20, 300, 40, '× would of　→　○ would have', C.red, FILL.red, 16), lb(160, 90, 'would\'ve の発音は 「ウドブ」に聞こえる', 12, C.gray, 'middle'), lb(160, 118, 'だから of と書いてしまう', 12, C.gray, 'middle'), lb(160, 146, '→ have を意識する', 14, C.main, 'middle', true)],
    '発音につられない', R),
  S('まとめです。仮定法過去完了は If＋had＋過去分詞, would／could／might＋have＋過去分詞。今なら仮定法過去、過去なら仮定法過去完了で、1段階さらに過去にずれた形です。',
    [bx(10, 14, 300, 40, 'If ＋ had ＋ 過去分詞,', C.purple, FILL.purple, 14), bx(10, 62, 300, 40, 'would / could / might ＋ have ＋ 過去分詞', C.purple, FILL.purple, 13), bx(10, 110, 300, 40, '今 → 仮定法過去　過去 → 仮定法過去完了', C.main, FILL.warm, 12)],
    '過去の事実の反対', P),
], '仮定法過去完了の基本形');

// ── 仮定法過去完了②：識別と混合型（j3_10・節1）──
figs['xf_new20_j3_eigo_10'] = show([
  S('2つの形を並べます。仮定法過去は if節が過去形、主節が would＋原形。仮定法過去完了は if節が had＋過去分詞、主節が would have＋過去分詞です。',
    [...T([['種類', 'if節', '主節'], ['仮定法過去', '過去形', 'would＋原形'], ['仮定法過去完了', 'had＋過去分詞', 'would have＋過去分詞']], 24, [90, 100, 130], P, 36, 11, [P, Gy, Gy]), lb(160, 144, '今 ／ あの時 で形が変わる', 13, C.main, 'middle', true)],
    '仮定法過去 と 仮定法過去完了', P),
  S('意味でも対比します。If I had more money, I would buy it.（今お金があれば買うのに）と、If I had had more money, I would have bought it.（あの時お金があったら買っていたのに）。',
    [bx(10, 14, 300, 52, '今: If I had more money,\nI would buy it.', C.blue, FILL.blue, 13), bx(10, 76, 300, 52, 'あの時: If I had had more money,\nI would have bought it.', C.red, FILL.red, 13), lb(160, 150, '「あの時」「そのとき」→ 過去完了の合図', 12, C.red, 'middle', true)],
    '今か あの時か', M),
  S('識別の手順は3つです。①主節に have があるか ②if節が had＋過去分詞か、単純な過去形か ③now・then・at that time などの語から時点を確かめる。',
    [...F([['① 主節に\nhave？', B], ['② if節は\nhad＋過去分詞？', P], ['③ now / then\nで時点確認', G]], 36, 60, 11), lb(160, 122, 'have があれば仮定法過去完了の可能性が高い', 12, C.red, 'middle', true)],
    '3つで識別', M),
  S('混合型です。過去に起きなかったことが今の状態にまで影響しているときは、if節は過去のことなので had＋過去分詞、主節は今のことなので would＋原形にします。If I had studied medicine, I would be a doctor now.',
    [...W([['If I had studied medicine,', P], ['I would be a doctor now.', B]], 26, 36, 11), ar(30, 100, 290, 100, C.gray), ln(240, 88, 240, 112, C.main, false, 2), lb(240, 76, '今', 12, C.main, 'middle', true), ln(80, 88, 80, 112, C.purple, false, 2), lb(80, 76, 'あの時', 12, C.purple, 'middle', true), ar(84, 130, 236, 130, C.green), lb(160, 150, '過去の原因 → 今の結果', 13, C.green, 'middle', true)],
    'if節: 過去 ／ 主節: 今', G),
  S('なぜ組み合わせを変えるの？→ 原因は「あの時」の出来事で、結果は「今」の状態だからです。If she hadn\'t missed the train, she would be here now.（電車に乗り遅れていなければ、今ここにいるのに）も同じ型です。',
    [Q('if節と主節の形がちがうのは？'), bx(14, 54, 140, 50, 'if節\n原因は あの時\n→ had＋過去分詞', C.purple, FILL.purple, 11), bx(166, 54, 140, 50, '主節\n結果は 今\n→ would＋原形', C.blue, FILL.blue, 11), lb(160, 128, 'If she hadn\'t missed the train,', 12, C.ink, 'middle'), lb(160, 148, 'she would be here now.', 12, C.ink, 'middle')],
    '時点ごとに形を選ぶ', P),
  S('では、逆のパターンは？→ 「今のこと」が原因で「過去のこと」が結果になる、という組み合わせは意味の上でほとんど起こらないので、入試では扱われません。原因は結果より先に起こるからです。',
    [Q('逆の混合は出てこないのは？', true), ar(30, 96, 290, 96, C.gray), lb(70, 78, '原因', 12, C.purple, 'middle', true), lb(250, 78, '結果', 12, C.blue, 'middle', true), ar(80, 118, 230, 118, C.green), lb(160, 142, '原因が先、結果があと', 13, C.green, 'middle', true)],
    '過去の原因 → 今の結果 の1パターンだけ', P),
  S('見分けの手がかりをまとめます。now があれば主節は今、then・at that time があれば主節も過去です。混合型は難関校の発展知識なので、まず基本の2つを固めてから取り組みます。',
    [bx(10, 14, 300, 40, '主節に now → would ＋ 原形（今の結果）', C.blue, FILL.blue, 13), bx(10, 62, 300, 40, '主節に then → would have ＋ 過去分詞', C.red, FILL.red, 13), bx(10, 110, 300, 40, '混合型は 発展。まず基本の2つを固める', C.main, FILL.warm, 12)],
    '時を表す語が手がかり', M),
  S('まとめです。仮定法過去は今、仮定法過去完了はあの時。混合型は if節が過去完了、主節が仮定法過去で、過去の原因が今の結果を生んでいる文に使います。',
    [bx(10, 14, 300, 40, '今の話 → 仮定法過去', C.blue, FILL.blue, 14), bx(10, 62, 300, 40, 'あの時の話 → 仮定法過去完了', C.red, FILL.red, 14), bx(10, 110, 300, 40, '過去の原因 → 今の結果 ＝ 混合型', C.green, FILL.green, 14)],
    '時点で形を選ぶ', M),
], '仮定法過去完了との識別と混合型');

// ── 仮定法の倒置（j3_11・節0）──
figs['xf_new20_j3_eigo_11'] = show([
  S('仮定法では、if を省略して、be動詞や had を主語の前に出す形があります。If I were you, I would accept the offer. は、Were I you, I would accept the offer. になります。',
    [bx(10, 14, 300, 36, 'If I were you, I would accept the offer.', C.purple, FILL.purple, 13), ar(160, 54, 160, 72, C.main), bx(10, 76, 300, 36, 'Were I you, I would accept the offer.', C.green, FILL.green, 13), lb(160, 138, 'if を消して were を前に出す', 13, C.green, 'middle', true)],
    'If を省略して 倒置する', G),
  S('仮定法過去完了も同じです。If I had known the truth, I would have told you. は、Had I known the truth, I would have told you. になります。had を主語の前に出します。',
    [bx(10, 14, 300, 36, 'If I had known the truth, …', C.purple, FILL.purple, 13), ar(160, 54, 160, 72, C.main), bx(10, 76, 300, 36, 'Had I known the truth, …', C.green, FILL.green, 13), lb(160, 138, 'if を消して had を前に出す', 13, C.green, 'middle', true)],
    'Had ＋ 主語 ＋ 過去分詞', G),
  S('なぜ if を省略できるの？→ were や had が主語の前に出ると、その語順（疑問文のような順序）そのものが「もし〜なら」という仮定の合図になるので、if がなくても意味が伝わるからです。',
    [Q('if がなくても通じるのは？'), bx(14, 54, 130, 44, 'If I were you,', C.gray, FILL.gray, 13), ar(148, 76, 172, 76, C.main), bx(176, 54, 130, 44, 'Were I you,', C.green, FILL.green, 13), lb(160, 124, '語順が変わる ＝ 仮定の合図', 13, C.green, 'middle', true), lb(160, 148, '（硬い書き言葉・スピーチで使う）', 11, C.gray, 'middle')],
    '語順の入れかえが if の代わり', P),
  S('倒置できるのは、if節の動詞が were か had のときだけです。一般動詞の過去形（If he studied など）は倒置できません。',
    [...T([['if節の動詞', '倒置'], ['were', 'Were I 〜 ○'], ['had ＋ 過去分詞', 'Had I 〜 ○'], ['一般動詞の過去形', '倒置できない ×']], 26, [150, 150], G, 30, 12, [G, Gy, Gy, R])],
    'were と had だけ', G),
  S('倒置文の否定は短縮形を使いません。If I were not busy, … は Were I not busy, … に、If I had not known, … は Had I not known, … になります。Weren\'t I や Hadn\'t I とは言いません。',
    [...W([['Were I', G], ['not', R], ['busy, …', M]], 24, 34, 15), lb(160, 72, '○ not を後ろに置く', 12, C.green, 'middle', true), ...W([['Had I', G], ['not', R], ['known, …', M]], 94, 34, 15), lb(160, 142, '× Weren\'t I … / Hadn\'t I …', 13, C.red, 'middle', true)],
    '否定は not を後ろに', R),
  S('should を使う仮定もあります。If it should rain tomorrow, the game will be canceled.（万が一明日雨が降ったら、試合は中止）は、Should it rain tomorrow, … と倒置します。',
    [bx(10, 14, 300, 36, 'If it should rain tomorrow, …', C.purple, FILL.purple, 13), ar(160, 54, 160, 72, C.main), bx(10, 76, 300, 36, 'Should it rain tomorrow, …', C.green, FILL.green, 13), lb(160, 138, '万が一（可能性が低い未来）', 13, C.red, 'middle', true)],
    'Should ＋ 主語 ＋ 原形', G),
  S('では、なぜ「万が一」の意味になるの？→ should はふだんは「〜すべき」ですが、ここでは「ありえないとは言えないが、可能性はかなり低い」未来を仮定する使い方で、ほぼ起こらないことをあえて仮定する形だからです。',
    [Q('should が「万が一」になるのは？', true), bx(14, 56, 292, 44, '未来に起こる可能性がとても低いことを\nあえて仮定する言い方', C.purple, FILL.purple, 13), lb(160, 124, '主節は will でも would でもよい', 13, C.ink, 'middle'), lb(160, 148, '（可能性の低さの度合いによる）', 11, C.gray, 'middle')],
    '可能性が低い未来の仮定', P),
  S('まとめです。倒置形は3つ。If I were〜 → Were I〜、If I had 過去分詞〜 → Had I 過去分詞〜、If it should〜 → Should it〜。硬い書き言葉で、読解や並べ替えで見た瞬間に仮定法と気づけるかがポイントです。',
    [...T([['もとの if節', '倒置した形'], ['If I were 〜', 'Were I 〜'], ['If I had 過去分詞 〜', 'Had I 過去分詞 〜'], ['If it should 〜', 'Should it 〜']], 20, [150, 150], P, 30, 12, [P, Gy, Gy, Gy]), lb(160, 150, '見た瞬間に 仮定法と気づく', 13, C.main, 'middle', true)],
    '倒置形のまとめ', M),
], '仮定法の倒置');

// ── ifを使わない仮定表現（j3_12・節0）──
figs['xf_new20_j3_eigo_12'] = show([
  S('if を使わなくても、前置詞 Without のあとに名詞を置くだけで、仮定の意味を表せます。Without your help, I couldn\'t finish this project.（あなたの助けがなければ、このプロジェクトを終えられないだろう）。',
    [bx(10, 14, 300, 44, 'Without your help,\nI couldn\'t finish this project.', C.purple, FILL.purple, 13), lb(160, 84, '＝ 助けがなければ（if を使わない）', 13, C.gray, 'middle'), bx(10, 106, 300, 46, 'Without ＋ 名詞 ＝ 〜がなければ', C.green, FILL.green, 14)],
    'Without ＋ 名詞 ＝ 〜がなければ', G),
  S('if を使う元の形です。Without your help は If it were not for your help と同じ意味です。If it were not for your help, I couldn\'t finish this project.（今の話）',
    [bx(10, 14, 300, 36, 'Without your help, I couldn\'t finish …', C.green, FILL.green, 12), lb(160, 66, '＝', 16, C.main, 'middle', true), bx(10, 80, 300, 44, 'If it were not for your help,\nI couldn\'t finish …', C.purple, FILL.purple, 12), lb(160, 144, '今の話 → 仮定法過去', 13, C.blue, 'middle', true)],
    'Without ＝ If it were not for', G),
  S('過去の話では、Without your help, I couldn\'t have finished this project. が If it had not been for your help, … と同じ意味になります。主節が couldn\'t have finished（have＋過去分詞）です。',
    [bx(10, 14, 300, 36, 'Without your help, I couldn\'t have finished …', C.green, FILL.green, 11), lb(160, 66, '＝', 16, C.main, 'middle', true), bx(10, 80, 300, 44, 'If it had not been for your help,\nI couldn\'t have finished …', C.purple, FILL.purple, 11), lb(160, 144, '過去の話 → 仮定法過去完了', 13, C.red, 'middle', true)],
    'Without ＝ If it had not been for', G),
  S('今の話か過去の話かは、Without のあとの名詞では分かりません。なぜ？→ 名詞は時点を表さないので、時点を決めるのは主節の動詞の形（原形か have＋過去分詞か）だからです。',
    [Q('主節の形で判断するのは？'), bx(14, 54, 140, 50, 'would / couldn\'t\n＋ 原形\n→ 今の話', C.blue, FILL.blue, 12), bx(166, 54, 140, 50, 'would / couldn\'t\n＋ have ＋ 過去分詞\n→ 過去の話', C.red, FILL.red, 12), lb(160, 128, 'Without の名詞は時点を表さない', 13, C.main, 'middle', true)],
    '主節の動詞の形を見る', P),
  S('But for も同じ意味です。But for his advice, I would have failed.（彼の助言がなかったら、私は失敗していただろう）。Without とほぼ同じで、ややかたい書き言葉に多い表現です。',
    [bx(10, 18, 300, 40, 'But for his advice, I would have failed.', C.green, FILL.green, 13), lb(160, 84, '＝ Without his advice, …', 13, C.gray, 'middle'), lb(160, 112, 'かたい書き言葉に多い', 13, C.ink, 'middle'), lb(160, 138, '主節 would have failed → 過去の話', 12, C.red, 'middle', true)],
    'But for ＝ Without', G),
  S('逆に「〜があれば」は With を使います。With a little more time, I could finish the work.（もう少し時間があれば、仕事を終えられるのに）＝ If I had a little more time, … 過去なら With your support, we could have succeeded. です。',
    [bx(10, 14, 300, 36, 'With a little more time, I could finish the work.', C.green, FILL.green, 11), lb(160, 66, '＝', 16, C.main, 'middle', true), bx(10, 80, 300, 36, 'If I had a little more time, I could finish …', C.purple, FILL.purple, 11), lb(160, 140, 'With ＋ 名詞 ＝ 〜があれば', 14, C.green, 'middle', true)],
    'With ＋ 名詞 ＝ 〜があれば', G),
  S('注意です。Without や With のあとには名詞（または動名詞）が続き、〈主語＋動詞〉は続けられません。なぜ？→ Without は前置詞なので、あとには名詞のかたまりが来るきまりだからです。',
    [...W([['× Without', Gy], ['you help me,', R], ['…', M]], 28, 34, 13), ar(160, 70, 160, 88, C.main), ...W([['○ Without', Gy], ['your help,', G], ['…', M]], 92, 34, 13), lb(160, 150, '前置詞のあとは 名詞', 13, C.blue, 'middle', true)],
    'Without ＋ 名詞（〈主語＋動詞〉は不可）', R),
  S('まとめです。Without／But for ＝ 〜がなければ、With ＝ 〜があれば。どれも if 節を短くまとめた表現で、今か過去かは主節の動詞の形で決まります。',
    [bx(10, 14, 300, 40, 'Without / But for ＋ 名詞 ＝ 〜がなければ', C.green, FILL.green, 13), bx(10, 62, 300, 40, 'With ＋ 名詞 ＝ 〜があれば', C.blue, FILL.blue, 14), bx(10, 110, 300, 40, '今か過去かは 主節の形で判断', C.red, FILL.red, 13)],
    'if を使わない仮定表現', M),
], 'Without / But for / With');

// ── 話法①：直接話法と間接話法（j3_13・節2）──
figs['xf_new20_j3_eigo_13'] = show([
  S('直接話法は、発言をそのままの言葉で引用します。He said, "I am tired." 間接話法は、伝える人が自分の言葉で言い直します。He said that he was tired. 引用符は使いません。',
    [bx(10, 14, 300, 44, '直接話法\nHe said, "I am tired."', C.blue, FILL.blue, 14), ar(160, 62, 160, 80, C.main), bx(10, 84, 300, 44, '間接話法\nHe said that he was tired.', C.green, FILL.green, 14), lb(160, 150, '引用符を取って that でつなぐ', 12, C.gray, 'middle')],
    '直接話法 ⇔ 間接話法', M),
  S('たとえると、直接話法は「録音を再生する」こと、間接話法は「要約して報告する」ことです。録音はそのままですが、報告は報告する人の立場から言い直します。',
    [bx(14, 20, 140, 60, '直接話法\n録音を再生\n（そのまま）', C.blue, FILL.blue, 13), bx(166, 20, 140, 60, '間接話法\n要約して報告\n（言い直す）', C.green, FILL.green, 13), lb(160, 108, '立場が変わるので 言葉も変わる', 14, C.main, 'middle', true), lb(160, 136, 'I → he　　now → then', 13, C.ink, 'middle')],
    '再生と 報告', M),
  S('書きかえで見るのは4つです。①コンマと引用符を取って that でつなぐ ②代名詞を変える ③時制を合わせる ④時・場所の語を変える。1つずつ積み上げます。',
    [...F([['① that で\nつなぐ', B], ['② 代名詞', G], ['③ 時制', P], ['④ 時・場所\nの語', M]], 30, 64, 11, 6, 314, 12), lb(160, 118, '一度に全部やらず、順番に', 13, C.main, 'middle', true), lb(160, 144, '（この単元は ①、②〜④は次の単元から）', 11, C.gray, 'middle')],
    '4つのチェック', M),
  S('なぜ代名詞が変わるの？→ 発言の中の「I」は発言した本人のことですが、報告する人から見ると、その人は「he」や「she」だからです。立場が変わると呼び方も変わります。',
    [Q('代名詞が変わるのは？'), bx(14, 54, 130, 44, '本人の発言\n"I am tired."', C.blue, FILL.blue, 12), ar(148, 76, 172, 76, C.main), bx(176, 54, 130, 44, '報告する人から見ると\nhe was tired', C.green, FILL.green, 12), lb(160, 126, '立場が変わる → I が he に', 14, C.green, 'middle', true)],
    '報告する人の立場で言い直す', P),
  S('なぜ時制が過去にずれるの？→ 発言した時点が、報告する時点より前だからです。am（発言のとき）は、報告のときには「あのときの話」なので was になります。',
    [Q('時制が1つ過去にずれるのは？', true), ar(30, 96, 290, 96, C.gray), ln(80, 84, 80, 108, C.blue, false, 2), lb(80, 72, '発言した時', 12, C.blue, 'middle', true), ln(240, 84, 240, 108, C.green, false, 2), lb(240, 72, '報告する時', 12, C.green, 'middle', true), lb(80, 124, 'am', 14, C.blue, 'middle', true), lb(240, 124, 'was', 14, C.green, 'middle', true), lb(160, 150, '発言は 報告より前 → 過去へ', 12, C.ink, 'middle', true)],
    '発言のほうが前 ＝ 時制が後ろへ', P),
  S('時や場所の語も、立場に合わせて変わります。now → then、here → there、tomorrow → the next day、today → that day。「今日」は、あとで報告するときには「その日」になるからです。',
    [...T([['発言のとき', '報告のとき'], ['now', 'then'], ['here', 'there'], ['tomorrow', 'the next day'], ['today', 'that day']], 14, [140, 160], G, 26, 12, [G, Gy, Gy, Gy, Gy]), lb(160, 160, '話す場所・時間と 報告する場所・時間がずれる', 11, C.gray, 'middle')],
    '時と場所の語も 立場に合わせる', G),
  S('よくある誤りは、コンマと引用符の消し忘れです。× He said, that he was tired. ○ He said that he was tired. that は引用符の代わりに文をつなぐ接続詞なので、コンマは不要です。',
    [...W([['He said,', R], ['that', B], ['he was tired.', M]], 28, 34, 14), lb(160, 72, '× コンマが残っている', 13, C.red, 'middle', true), ar(160, 84, 160, 102, C.main), ...W([['He said', G], ['that', B], ['he was tired.', M]], 106, 34, 14)],
    'コンマと引用符を完全に消す', R),
  S('まとめです。間接話法は伝える人の立場からの報告なので、代名詞・時制・時と場所の語が立場に合わせて変わります。引用符とコンマを消して that でつなぎ、4つを順に積み上げます。',
    [bx(10, 14, 300, 40, '直接話法 ＝ 録音の再生', C.blue, FILL.blue, 14), bx(10, 62, 300, 40, '間接話法 ＝ 立場からの報告', C.green, FILL.green, 14), bx(10, 110, 300, 40, '変わるもの: 代名詞・時制・時と場所の語', C.main, FILL.warm, 12)],
    '立場が変わるから 言葉が変わる', M),
], '直接話法と間接話法');

// ── 話法②：代名詞の変化（j3_14・節0）──
figs['xf_new20_j3_eigo_14'] = show([
  S('発言者自身を指す I は、伝える人から見ると he や she になることが多いです。Ken said, "I am hungry." → Ken said that he was hungry.',
    [bx(10, 14, 300, 36, 'Ken said, "I am hungry."', C.blue, FILL.blue, 14), ar(160, 54, 160, 72, C.main), bx(10, 76, 300, 36, 'Ken said that he was hungry.', C.green, FILL.green, 14), lb(160, 138, 'I → he（発言者が Ken だから）', 13, C.green, 'middle', true)],
    '発言者の I ＝ he / she', G),
  S('なぜ I が he になるの？→ I は「いま話している人」を指す語です。報告する人から見ると、話した人は別の人（第三者）なので、he や she と呼ぶからです。',
    [Q('I が he になるのは？'), ci(60, 104, 24, '発言者\nKen', C.blue, FILL.blue, 10), ci(260, 104, 24, '報告者\n私', C.green, FILL.green, 10), ar(88, 104, 230, 104, C.main), lb(160, 66, '"I" ＝ Ken 本人から見た呼び方', 12, C.blue, 'middle', true), lb(160, 138, '私から見ると Ken は he', 14, C.green, 'middle', true)],
    '呼び方は 立場で決まる', P),
  S('所有格や目的格も同じです。my → his／her、me → him／her。He said, "This is my bag." → He said that that was his bag. 発言者の性別に合わせます。',
    [...T([['発言のなか', '報告のとき（男性）', '（女性）'], ['I', 'he', 'she'], ['my', 'his', 'her'], ['me', 'him', 'her']], 18, [90, 120, 90], G, 30, 12, [G, Gy, Gy, Gy]), bx(10, 140, 300, 28, 'This is my bag. → that was his bag.', C.blue, FILL.blue, 11)],
    '性別に合わせて変える', G),
  S('自分の発言を自分で伝え直すときは、I のままです。I said, "I am busy." → I said that I was busy. 発言者と報告者が同じ人なので、立場が変わらないからです。',
    [bx(10, 14, 300, 36, 'I said, "I am busy."', C.blue, FILL.blue, 14), ar(160, 54, 160, 72, C.main), bx(10, 76, 300, 36, 'I said that I was busy.', C.green, FILL.green, 14), lb(160, 138, '発言者 ＝ 報告者 → I のまま', 13, C.main, 'middle', true)],
    '立場が変わらなければ そのまま', M),
  S('you の変化です。He said to me, "You look tired." → He said that I looked tired. you は話しかけられた相手を指し、その相手が「私」なら I になります。',
    [Q('you が I になるのは？', true), bx(10, 52, 300, 34, 'He said to me, "You look tired."', C.blue, FILL.blue, 13), ar(160, 90, 160, 106, C.main), bx(10, 110, 300, 34, 'He said that I looked tired.', C.green, FILL.green, 13), lb(160, 158, 'you ＝ 話しかけられた相手 ＝ 私', 12, C.green, 'middle', true)],
    'you は 相手がだれかで決まる', P),
  S('相手が別の人なら変わり方もちがいます。He said to Tom, "You look tired." → He told Tom that he looked tired. you は Tom を指していたので he になります。',
    [bx(10, 14, 300, 34, 'He said to Tom, "You look tired."', C.blue, FILL.blue, 13), ar(160, 52, 160, 68, C.main), bx(10, 72, 300, 34, 'He told Tom that he looked tired.', C.green, FILL.green, 13), lb(160, 128, 'you ＝ Tom → he', 14, C.green, 'middle', true), lb(160, 152, '同じ you でも 相手が変わると行き先が変わる', 11, C.gray, 'middle')],
    '話しかけた相手は だれか', G),
  S('we は、伝える人自身が含まれていれば we のまま、含まれていなければ they になることが多いです。They said, "We are ready." → They said that they were ready.',
    [bx(10, 14, 300, 34, 'They said, "We are ready."', C.blue, FILL.blue, 13), ar(160, 52, 160, 68, C.main), bx(10, 72, 300, 34, 'They said that they were ready.', C.green, FILL.green, 13), lb(160, 128, '報告者が we に含まれない → they', 13, C.green, 'middle', true), lb(160, 152, '含まれるなら we のまま', 12, C.gray, 'middle')],
    '報告者が含まれるか', G),
  S('代名詞を決める手順です。表を丸暗記するのではなく、毎回「だれが、だれに向かって言ったか」を考えます。you をそのまま残すべき場面で、機械的に I や he に変えるミスに注意します。',
    [...F([['① 発言した人\nは？', B], ['② 話しかけた\n相手は？', G], ['③ 報告者から\n見ると？', P]], 40, 60, 11), lb(160, 126, 'この3つを毎回たしかめる', 14, C.main, 'middle', true)],
    '人間関係を図にして考える', M),
  S('まとめです。I・my・me は発言者に合わせて he／she・his／her・him／her に、you は話しかけた相手に、we は報告者が含まれるかで we か they に変えます。',
    [bx(10, 14, 300, 36, 'I / my / me → 発言者の he / she …', C.blue, FILL.blue, 13), bx(10, 56, 300, 36, 'you → 話しかけた相手（I / he …）', C.green, FILL.green, 13), bx(10, 98, 300, 36, 'we → 含まれれば we、なければ they', C.purple, FILL.purple, 13)],
    '立場を入れかえて考える', M),
], '話法の代名詞の変化');

// ── 話法③：時制の一致（j3_15・節0）──
figs['xf_new20_j3_eigo_15'] = show([
  S('伝達動詞（said／told）が過去形のとき、that節の中の動詞も、原則として1つ前の時制にずらします。これを時制の一致といいます。He said, "I am tired." → He said that he was tired.',
    [bx(10, 14, 300, 36, 'He said, "I am tired."', C.blue, FILL.blue, 14), ar(160, 54, 160, 72, C.main), bx(10, 76, 300, 36, 'He said that he was tired.', C.green, FILL.green, 14), lb(160, 138, 'am → was（現在形が過去形へ）', 13, C.green, 'middle', true)],
    '1つ前の時制へ', G),
  S('対応表です。現在形→過去形、現在進行形→過去進行形、過去形→過去完了形、will→would、can→could、may→might、must→must／had to。',
    [...T([['発言のとき', '間接話法'], ['現在形', '過去形'], ['現在進行形', '過去進行形'], ['過去形', '過去完了形'], ['will', 'would'], ['can', 'could'], ['may', 'might'], ['must', 'must / had to']], 4, [130, 150], P, 20, 11, [P, Gy, Gy, Gy, Gy, Gy, Gy, Gy])],
    '時制を1段さかのぼらせる', P),
  S('なぜ1つ前にずらすの？→ 発言した時点は、報告する時点より前だからです。報告するときから見ると、発言はすでに「過去の出来事」になっているので、そこで使われた現在形は過去形に、過去形は過去完了形になります。',
    [Q('1つ前にずらすのは？'), ar(30, 100, 290, 100, C.gray), ln(80, 88, 80, 112, C.blue, false, 2), lb(80, 76, '発言', 12, C.blue, 'middle', true), ln(240, 88, 240, 112, C.green, false, 2), lb(240, 76, '報告', 12, C.green, 'middle', true), bx(30, 120, 100, 30, 'am（現在形）', C.blue, FILL.blue, 12), bx(190, 120, 100, 30, 'was（過去形）', C.green, FILL.green, 12), ar(134, 135, 186, 135, C.main)],
    '発言は報告より前', P),
  S('助動詞の例です。She said, "I will call you." → She said that she would call me. They said, "We can help you." → They said that they could help me. will が would、can が could になります。',
    [bx(10, 14, 300, 52, 'She said, "I will call you."\n→ She said that she would call me.', C.blue, FILL.blue, 12), bx(10, 76, 300, 52, 'They said, "We can help you."\n→ They said that they could help me.', C.green, FILL.green, 12), lb(160, 150, 'will を would に変え忘れないこと', 12, C.red, 'middle', true)],
    'will → would　can → could', G),
  S('例外①です。The teacher said that the earth goes around the sun. 地球が太陽のまわりを回るという事実は、いつの時代でも成り立つので、伝達動詞が過去でも現在形のままにします。',
    [bx(10, 14, 300, 44, 'The teacher said that\nthe earth goes around the sun.', C.green, FILL.green, 13), lb(160, 84, 'goes は過去形にしない', 14, C.red, 'middle', true), bx(30, 104, 260, 44, '不変の真理・ことわざ\n→ 現在形のまま', C.blue, FILL.blue, 13)],
    '例外: 不変の真理', G),
  S('では、なぜ例外なの？→ 時制をずらすのは「発言が過去の出来事になったから」ですが、いつでも成り立つ事実は、発言の時点でも報告の時点でも同じように今も正しいので、ずらす必要がないからです。',
    [Q('不変の真理がずれないのは？', true), bx(14, 56, 130, 44, 'ふつうの発言\n過去の出来事', C.blue, FILL.blue, 12), bx(176, 56, 130, 44, '不変の真理\nいつでも正しい', C.green, FILL.green, 12), lb(80, 124, '→ ずらす', 13, C.blue, 'middle', true), lb(240, 124, '→ ずらさない', 13, C.green, 'middle', true), lb(160, 150, '意味から「ずらす必要があるか」を考える', 11, C.gray, 'middle')],
    '意味で判断する', P),
  S('すでに過去完了だったときは、それより前の時制がないので形は変わりません。She said, "I had already finished my homework." → She said that she had already finished her homework.',
    [bx(10, 14, 300, 44, 'She said, "I had already finished\nmy homework."', C.blue, FILL.blue, 12), ar(160, 62, 160, 80, C.main), bx(10, 84, 300, 44, 'She said that she had already finished\nher homework.', C.green, FILL.green, 11), lb(160, 150, 'had finished はそのまま', 13, C.main, 'middle', true)],
    '過去完了は そのまま', M),
  S('まとめです。伝達動詞が過去なら、that節の時制を1つ前へずらします（現在→過去、過去→過去完了、will→would、can→could）。ただし不変の真理や、すでに過去完了の文は例外です。',
    [bx(10, 14, 300, 40, '現在→過去　過去→過去完了　will→would', C.green, FILL.green, 13), bx(10, 62, 300, 40, '例外: 不変の真理は 現在形のまま', C.blue, FILL.blue, 13), bx(10, 110, 300, 40, '過去完了は そのまま', C.purple, FILL.purple, 14)],
    '時制の一致と 例外', M),
], '時制の一致');

// ── 話法④：時・場所を表す語（j3_16・節0）──
figs['xf_new20_j3_eigo_16'] = show([
  S('例です。She said, "I will meet you here tomorrow." → She said that she would meet me there the next day. here が there に、tomorrow が the next day に変わっています。',
    [bx(10, 12, 300, 44, 'She said, "I will meet you\nhere tomorrow."', C.blue, FILL.blue, 12), ar(160, 60, 160, 78, C.main), bx(10, 82, 300, 56, 'She said that she would meet me\nthere the next day.', C.green, FILL.green, 12), lb(160, 154, 'here → there　tomorrow → the next day', 12, C.main, 'middle', true)],
    '時・場所の語も 変わる', G),
  S('対応表①です。now→then、today→that day、tomorrow→the next day、yesterday→the day before、tonight→that night、here→there。',
    [...T([['発言のとき', '間接話法'], ['now', 'then'], ['today', 'that day'], ['tomorrow', 'the next day'], ['yesterday', 'the day before'], ['tonight', 'that night'], ['here', 'there']], 6, [130, 150], G, 23, 12, [G, Gy, Gy, Gy, Gy, Gy, Gy])],
    '時・場所の語 ①', G),
  S('対応表②です。this week→that week、next week→the following week、last week→the week before、ago→before、this→that、these→those。',
    [...T([['発言のとき', '間接話法'], ['this week', 'that week'], ['next week', 'the following week'], ['last week', 'the week before'], ['ago', 'before'], ['this', 'that'], ['these', 'those']], 6, [130, 150], G, 23, 12, [G, Gy, Gy, Gy, Gy, Gy, Gy])],
    '時・場所の語 ②', G),
  S('なぜ変わるの？→ 発言した時点と報告する時点がずれているからです。「明日」と言われても、報告するのは別の日なので、「その翌日」と言い直さないと、いつのことか分からなくなります。',
    [Q('時の語まで変わるのは？'), ar(30, 100, 290, 100, C.gray), ln(60, 88, 60, 112, C.blue, false, 2), lb(60, 76, '発言の日', 11, C.blue, 'middle', true), ln(120, 88, 120, 112, C.blue, false, 2), lb(120, 126, 'tomorrow', 11, C.blue, 'middle', true), ln(230, 88, 230, 112, C.green, false, 2), lb(230, 76, '報告の日', 11, C.green, 'middle', true), lb(160, 150, 'tomorrow は「発言の日の翌日」→ the next day', 11, C.ink, 'middle', true)],
    '発言の日と 報告の日がずれる', P),
  S('実際にずれていないときは、そのままでもよいことがあります。発言のすぐあと、同じ日のうちに伝えるなら today のままで自然です。He said, "I am busy today." → He said that he was busy today.',
    [bx(10, 14, 300, 36, 'He said, "I am busy today."', C.blue, FILL.blue, 13), ar(160, 54, 160, 72, C.main), bx(10, 76, 300, 36, 'He said that he was busy today.', C.green, FILL.green, 13), lb(160, 138, '同じ日のうちに伝えるなら today のまま', 12, C.main, 'middle', true)],
    'ずれがなければ そのまま', M),
  S('3つを同時にそろえる練習です。She said to me, "I saw you here yesterday." ①代名詞: I→she、you→I ②時制: saw→had seen ③時と場所: here→there、yesterday→the day before。',
    [bx(10, 8, 300, 32, 'She said to me, "I saw you here yesterday."', C.blue, FILL.blue, 11), ar(160, 44, 160, 56, C.main), bx(10, 60, 300, 36, 'She told me that she had seen me\nthere the day before.', C.green, FILL.green, 12), bx(10, 104, 300, 26, '① 代名詞  I → she　you → I', C.purple, FILL.purple, 11), bx(10, 134, 300, 26, '② 時制  saw → had seen', C.purple, FILL.purple, 11)],
    '代名詞・時制・時と場所の3つ', G),
  S('確認の順番は、①代名詞 ②時制 ③時・場所の語。3つセットで確認するくせをつけます。時・場所だけ変えて代名詞や時制を変え忘れる、またはその逆のミスが多いからです。',
    [...F([['① 代名詞', B], ['② 時制', P], ['③ 時・場所\nの語', G]], 40, 54, 12), lb(160, 118, '3つセットで確認する', 14, C.main, 'middle', true), lb(160, 144, '1つだけ直して満足しない', 12, C.red, 'middle')],
    '3つを順にチェック', M),
  S('まとめです。間接話法にするとき、now→then、today→that day、tomorrow→the next day、here→there などに変えます。発言の時点と報告の時点がずれるからで、ずれがなければそのままでもよい場合があります。',
    [bx(10, 14, 300, 40, '時: now→then　today→that day', C.blue, FILL.blue, 13), bx(10, 62, 300, 40, '日: tomorrow→the next day　yesterday→the day before', C.green, FILL.green, 11), bx(10, 110, 300, 40, '場所: here → there', C.purple, FILL.purple, 14)],
    '時・場所の語のまとめ', M),
], '時・場所を表す語の変化');

// ── 話法⑤：Yes/No疑問文（j3_17・節2）──
figs['xf_new20_j3_eigo_17'] = show([
  S('Yes／No 疑問文の話法転換です。He said to me, "Are you busy?" → He asked me if I was busy.（彼は私に忙しいかどうかたずねた）。伝達動詞は ask、つなぎ言葉は if です。',
    [bx(10, 12, 300, 36, 'He said to me, "Are you busy?"', C.blue, FILL.blue, 13), ar(160, 52, 160, 70, C.main), bx(10, 74, 300, 36, 'He asked me if I was busy.', C.green, FILL.green, 13), lb(160, 134, 'said to → asked　? を取る　if でつなぐ', 12, C.main, 'middle', true)],
    '疑問文 → ask ＋ if', G),
  S('なぜ if や whether でつなぐの？→ 疑問詞のある疑問文は what や where をそのまま使えますが、Yes／No 疑問文には疑問詞がありません。そこで「〜かどうか」を表す if／whether を借りてつなぐのです。',
    [Q('if／whether でつなぐのは？'), bx(14, 54, 130, 44, 'What / Where …\n疑問詞がある', C.blue, FILL.blue, 12), bx(176, 54, 130, 44, 'Are you busy?\n疑問詞がない', C.green, FILL.green, 12), lb(80, 118, '→ 疑問詞を使う', 12, C.blue, 'middle', true), lb(240, 118, '→ if / whether を借りる', 12, C.green, 'middle', true), lb(160, 146, 'if / whether ＝ 「〜かどうか」', 13, C.main, 'middle', true)],
    'Yes/No疑問文には疑問詞がない', P),
  S('では、なぜ if のあとは平叙文の語順になるの？→ if 以下は文の一部（名詞のかたまり）になった時点で、もう疑問文ではないからです。疑問文の語順は文全体が質問のときの形です。',
    [Q('語順が平叙文に戻るのは？', true), bx(14, 54, 292, 36, '疑問文の語順は「文全体が質問」のときの形', C.gray, FILL.gray, 12), bx(14, 98, 292, 44, 'He asked me [ if I was busy ].\n[ ] は名詞のかたまり ＝ 文の一部', C.green, FILL.green, 12), lb(160, 158, 'だから 主語 ＋ 動詞 の順', 12, C.green, 'middle', true)],
    '名詞のかたまり ＝ もう疑問文ではない', P),
  S('do／does／did は消えます。× He asked me did I like it. ○ He asked me if I liked it. Did you call her? は、She asked him if he had called her.（時制は1つ過去へ）になります。',
    [...W([['He asked me', M], ['did I like', R], ['it.', M]], 22, 34, 13), lb(160, 66, '× 疑問文の語順が残っている', 12, C.red, 'middle', true), ar(160, 78, 160, 94, C.main), ...W([['He asked me', M], ['if I liked', G], ['it.', M]], 98, 34, 13), bx(10, 140, 300, 24, 'Did you call her? → if he had called her', C.blue, FILL.blue, 11)],
    'do / does / did は消える', R),
  S('転換の手順は5つです。①伝達動詞を ask に ②？とコンマと引用符を取る ③if か whether でつなぐ ④平叙文の語順にする ⑤代名詞・時制・時と場所の語を変える。',
    [bx(10, 8, 300, 28, '① said to 人 → ask 人', C.blue, FILL.blue, 12), bx(10, 40, 300, 28, '② ? とコンマ・引用符を取る', C.green, FILL.green, 12), bx(10, 72, 300, 28, '③ if か whether でつなぐ', C.purple, FILL.purple, 12), bx(10, 104, 300, 28, '④ 平叙文の語順にする（do が消える）', C.main, FILL.warm, 12), bx(10, 136, 300, 28, '⑤ 代名詞・時制・時と場所を変える', C.red, FILL.red, 12)],
    '5ステップ', M),
  S('whether も同じ意味です。She said, "Will it rain tomorrow?" → She asked whether it would rain the next day. whether は or not を付けて使えます（whether or not ／ whether 〜 or not）が、if にはこの使い方がありません。',
    [bx(10, 12, 300, 36, 'She asked whether it would rain the next day.', C.green, FILL.green, 11), lb(160, 68, 'will → would　tomorrow → the next day', 12, C.main, 'middle', true), bx(10, 90, 300, 30, 'He asked whether or not I would come.', C.blue, FILL.blue, 12), bx(10, 124, 300, 30, 'He asked whether I would come or not.', C.blue, FILL.blue, 12)],
    'whether ＝ if ＋ or not も使える', G),
  S('疑問詞のある疑問文との区別です。Where do you live? のように疑問詞があれば、if や whether は使わず、疑問詞をそのまま使います。× asked me if where I lived。if／whether が必要なのは、Yes／No で答える疑問文だけです。',
    [bx(10, 12, 300, 36, 'Where do you live? → asked me where I lived.', C.blue, FILL.blue, 11), lb(160, 66, '疑問詞あり → if / whether は不要', 13, C.blue, 'middle', true), bx(10, 86, 300, 36, 'Are you busy? → asked me if I was busy.', C.green, FILL.green, 12), lb(160, 140, 'Yes / No で答える疑問文 → if / whether', 13, C.green, 'middle', true)],
    '疑問詞がなければ if / whether', B),
  S('まとめです。Yes／No 疑問文は ask＋if／whether で「〜かどうか」とつなぎ、名詞のかたまりになるので平叙文の語順に戻し、do／does／did は消します。代名詞・時制・時の語も変えます。',
    [bx(10, 14, 300, 40, 'ask ＋ if / whether（〜かどうか）', C.green, FILL.green, 14), bx(10, 62, 300, 40, '語順は平叙文、do / does / did は消える', C.blue, FILL.blue, 13), bx(10, 110, 300, 40, '代名詞・時制・時と場所も変える', C.purple, FILL.purple, 14)],
    'Yes/No疑問文の転換', M),
], 'Yes/No疑問文の話法転換');

// ── 話法⑥：疑問詞疑問文（j3_18・節0）──
figs['xf_new20_j3_eigo_18'] = show([
  S('疑問詞のある疑問文は、疑問詞をそのままつなぎ言葉に使います。He said to me, "Where do you live?" → He asked me where I lived.（彼は私にどこに住んでいるかたずねた）。',
    [bx(10, 12, 300, 36, 'He said to me, "Where do you live?"', C.blue, FILL.blue, 13), ar(160, 52, 160, 70, C.main), bx(10, 74, 300, 36, 'He asked me where I lived.', C.green, FILL.green, 14), lb(160, 134, '疑問詞 where が そのままつなぎ言葉', 13, C.green, 'middle', true)],
    '疑問詞 ＝ つなぎ言葉', G),
  S('なぜ if や whether はいらないの？→ 疑問詞（what・where・who・why・when）には、それ自体に「たずねる」意味があり、文をつなぐ働きもできるので、「〜かどうか」を足す必要がないからです。',
    [Q('if を付けないのは？'), bx(14, 54, 292, 40, 'where / what / who / when / why\n= たずねる意味 ＋ つなぐ働き', C.blue, FILL.blue, 12), lb(160, 116, '× asked me if where I lived', 13, C.red, 'middle', true), lb(160, 142, '○ asked me where I lived', 13, C.green, 'middle', true)],
    '疑問詞があれば if / whether は不要', P),
  S('疑問詞のあとは do／does／did を使わない語順（間接疑問文と同じ形）です。Where does he live? → she asked where he lived.（does が消えて live に s が戻り、時制は過去形へ）。',
    [bx(10, 14, 300, 34, 'Where does he live?', C.blue, FILL.blue, 14), ar(160, 52, 160, 68, C.main), bx(10, 72, 300, 34, 'she asked where he lived.', C.green, FILL.green, 14), lb(160, 128, 'does が消える → 主語 ＋ 動詞', 13, C.main, 'middle', true), lb(160, 150, '三単現の s や時制は 動詞のほうに残る', 11, C.gray, 'middle')],
    '疑問詞 ＋ 主語 ＋ 動詞', G),
  S('例です。She said to him, "What time did the train leave?" → She asked him what time the train had left.（電車が何時に出たかたずねた）。did leave が had left（過去完了）になります。',
    [bx(10, 12, 300, 44, 'She said to him,\n"What time did the train leave?"', C.blue, FILL.blue, 12), ar(160, 60, 160, 78, C.main), bx(10, 82, 300, 44, 'She asked him what time\nthe train had left.', C.green, FILL.green, 12), lb(160, 148, 'did leave → had left（1つ前の時制へ）', 12, C.main, 'middle', true)],
    '過去の疑問は 過去完了に', G),
  S('疑問詞が主語のときは、もとから〈疑問詞＋動詞〉の順なので、語順は変わりません。He said, "Who broke the window?" → He asked who had broken the window. Who はそのまま主語として動詞の前に残ります。',
    [bx(10, 12, 300, 34, 'He said, "Who broke the window?"', C.blue, FILL.blue, 13), ar(160, 50, 160, 66, C.main), bx(10, 70, 300, 34, 'He asked who had broken the window.', C.green, FILL.green, 13), lb(160, 126, 'Who ＝ 主語 → 語順そのまま', 13, C.green, 'middle', true), lb(160, 150, 'broke → had broken（時制だけ変わる）', 12, C.gray, 'middle')],
    '疑問詞が主語 ＝ 語順は変わらない', G),
  S('もう1つ。She said, "What happened?" → She asked what had happened.（何が起きたのかたずねた）。What が主語なので、do／did は元々ありません。',
    [bx(10, 18, 300, 34, 'She said, "What happened?"', C.blue, FILL.blue, 14), ar(160, 56, 160, 72, C.main), bx(10, 76, 300, 34, 'She asked what had happened.', C.green, FILL.green, 14), lb(160, 134, 'What が主語 → happened が had happened に', 12, C.main, 'middle', true)],
    '主語が疑問詞の例', G),
  S('総合演習です。When will you finish your homework? → He asked me when I would finish my homework.（you→I、will→would）。Why were you late yesterday? → She asked me why I had been late the day before.（you→I、were→had been、yesterday→the day before）。',
    [bx(10, 8, 300, 56, 'He asked me when I would finish\nmy homework.\n（you→I　will→would）', C.green, FILL.green, 11), bx(10, 72, 300, 66, 'She asked me why I had been late\nthe day before.\n（you→I　were→had been\nyesterday→the day before）', C.green, FILL.green, 11)],
    '代名詞・時制・時の語も 同時に', G),
  S('まとめです。①伝達動詞を ask に ②疑問詞を残す ③疑問詞のあとを平叙文の語順に ④代名詞・時制・時と場所の語を変える。この4段階を順に処理すれば、必ず正しく組み立てられます。',
    [...F([['① ask に\n変える', B], ['② 疑問詞を\n残す', G], ['③ 平叙文\nの語順', P], ['④ 代名詞\n時制など', M]], 40, 64, 11, 6, 314, 12), lb(160, 128, '疑問詞があれば if / whether は使わない', 13, C.red, 'middle', true)],
    '4段階を順番に', M),
], '疑問詞疑問文の話法転換');

// ── 話法⑦：命令文（j3_19・節0）──
figs['xf_new20_j3_eigo_19'] = show([
  S('命令文は、伝達動詞を tell や ask に変え、〈人＋to＋動詞の原形〉の形にします。She said to me, "Open the door." → She told me to open the door.（ドアを開けるように言った）。that節は使いません。',
    [bx(10, 12, 300, 36, 'She said to me, "Open the door."', C.blue, FILL.blue, 13), ar(160, 52, 160, 70, C.main), bx(10, 74, 300, 36, 'She told me to open the door.', C.green, FILL.green, 14), lb(160, 134, 'tell ＋ 人 ＋ to ＋ 原形', 14, C.green, 'middle', true)],
    '命令文 → tell／ask ＋ 人 ＋ to ＋ 原形', G),
  S('なぜ that節ではなく to なの？→ 命令文は、相手に動作をさせる文です。「だれに」「何をさせるか」を、〈人＋to＋原形〉で表すと、命令の内容がそのまま伝わるからです。命令文には、そもそも主語と時制のある文の形がありません。',
    [Q('that節ではなく to を使うのは？'), bx(14, 54, 292, 40, '命令文 ＝ 相手に動作をさせる\n→ だれに（人）＋ 何をさせる（to ＋ 原形）', C.blue, FILL.blue, 12), lb(160, 116, '× She told me that I open the door.', 12, C.red, 'middle', true), lb(160, 140, '○ She told me to open the door.', 12, C.green, 'middle', true)],
    '命令 ＝ 人 ＋ to ＋ 原形', P),
  S('tell は「強めに〜するように言う」、ask は「お願いして〜するよう頼む」です。Please が付いていれば依頼なので ask を選びます。He said to her, "Please help me with my homework." → He asked her to help him with his homework.',
    [bx(14, 14, 138, 48, 'tell\n強めの指示・命令', C.red, FILL.red, 12), bx(168, 14, 138, 48, 'ask\n依頼（Please など）', C.blue, FILL.blue, 12), bx(10, 74, 300, 36, 'He asked her to help him with his homework.', C.green, FILL.green, 11), lb(160, 134, 'Please があれば ask', 13, C.blue, 'middle', true)],
    'tell ＝ 命令　ask ＝ 依頼', B),
  S('否定の命令文（Don\'t〜）は、〈人＋not to＋原形〉にします。He said, "Don\'t be late." → He told me not to be late.（遅れないように言った）。',
    [bx(10, 12, 300, 36, 'He said, "Don\'t be late."', C.blue, FILL.blue, 14), ar(160, 52, 160, 70, C.main), bx(10, 74, 300, 36, 'He told me not to be late.', C.green, FILL.green, 14), lb(160, 134, 'Don\'t → not to ＋ 原形', 14, C.green, 'middle', true)],
    '否定は not to ＋ 原形', G),
  S('notの位置は to の直前です。× He told me to not be late. ○ He told me not to be late. なぜ？→ 否定したいのは「遅れる」という動作で、to ＋ 原形の全体を打ち消すので、to の直前に not を置くからです。',
    [Q('not を to の直前に置くのは？'), ...W([['He told me', M], ['to', Gy], ['not', R], ['be late.', M]], 52, 34, 14), lb(160, 98, '×', 16, C.red, 'middle', true), ...W([['He told me', M], ['not', G], ['to', Gy], ['be late.', M]], 112, 34, 14)],
    'not は to の直前', P),
  S('tell・ask 以外の伝達動詞もあります。advise（助言）：The doctor advised me to exercise more. order（命令）：The officer ordered him to stop. warn（警告）：She warned us not to go near the river.',
    [bx(10, 8, 300, 44, 'advise: The doctor advised me\nto exercise more.', C.green, FILL.green, 11), bx(10, 56, 300, 44, 'order: The officer ordered him\nto stop.', C.red, FILL.red, 11), bx(10, 104, 300, 44, 'warn: She warned us\nnot to go near the river.', C.blue, FILL.blue, 11), lb(160, 160, 'どれも 〈人 ＋ to ＋ 原形〉', 12, C.main, 'middle', true)],
    '日本語から伝達動詞を選ぶ', M),
  S('命令された相手が、tell／ask の直後の「人」です。命令文には主語 You が隠れているからです。Ken said to Mika, "Wait here." → Ken told Mika to wait there.（wait する人は Mika）。here は there に変わります。',
    [bx(10, 14, 300, 34, 'Ken said to Mika, "Wait here."', C.blue, FILL.blue, 13), ar(160, 52, 160, 68, C.main), ...W([['Ken told', M], ['Mika', G], ['to wait', B], ['there.', M]], 72, 34, 14), lb(160, 128, '命令された相手 ＝ 動作をする人', 13, C.green, 'middle', true), lb(160, 150, 'here → there', 12, C.gray, 'middle')],
    '命令された相手 ＝ 直後の人', G),
  S('まとめです。命令文の話法転換は tell／ask＋人＋to＋原形（否定は not to）。that節は使いません。Please があれば ask、内容によって advise・order・warn などを選びます。',
    [bx(10, 14, 300, 40, 'tell / ask ＋ 人 ＋ to ＋ 原形', C.green, FILL.green, 14), bx(10, 62, 300, 40, '否定 ＝ 人 ＋ not to ＋ 原形', C.red, FILL.red, 14), bx(10, 110, 300, 40, 'that節は使わない', C.purple, FILL.purple, 14)],
    '命令文の話法転換', M),
], '命令文の話法転換');

// ── 話法⑧：総合演習（j3_20・節1）──
figs['xf_new20_j3_eigo_20'] = show([
  S('話法の転換は、まず発言が平叙文・疑問文・命令文のどれかを判断して、骨組みを選びます。この表を見て、骨組みを先に決めてから、代名詞・時制・時と場所の語を当てはめます。',
    [...T([['発言', '骨組み'], ['平叙文', 'say / tell ＋ (that) ＋ 平叙文'], ['Yes/No疑問文', 'ask ＋ if / whether ＋ 平叙文語順'], ['疑問詞疑問文', 'ask ＋ 疑問詞 ＋ 平叙文語順'], ['命令文', 'tell / ask ＋ 人 ＋ (not) to 原形']], 14, [96, 204], P, 30, 11, [P, Gy, Gy, Gy, Gy])],
    '先に骨組みを決める', P),
  S('手順は5ステップです。①文の種類を判断 ②骨組みを選ぶ ③代名詞を伝える人の立場に ④時制の一致 ⑤時・場所を表す語を変える。',
    [bx(10, 8, 300, 28, '① 平叙文・疑問文・命令文のどれか', C.blue, FILL.blue, 12), bx(10, 40, 300, 28, '② 表から骨組みを選ぶ', C.green, FILL.green, 12), bx(10, 72, 300, 28, '③ 代名詞を 伝える人の立場に', C.purple, FILL.purple, 12), bx(10, 104, 300, 28, '④ 時制の一致（1つ前へ）', C.main, FILL.warm, 12), bx(10, 136, 300, 28, '⑤ 時・場所を表す語を変える', C.red, FILL.red, 12)],
    '5ステップ', M),
  S('問1です。Mika said to Ken, "I am going to visit Osaka next week." → Mika told Ken that she was going to visit Osaka the following week. I→she、am going to→was going to、next week→the following week。',
    [bx(10, 8, 300, 44, 'Mika said to Ken,\n"I am going to visit Osaka next week."', C.blue, FILL.blue, 11), ar(160, 56, 160, 70, C.main), bx(10, 74, 300, 44, 'Mika told Ken that she was going to\nvisit Osaka the following week.', C.green, FILL.green, 11), lb(160, 138, 'I → she　am → was　next week → the following week', 11, C.main, 'middle', true)],
    '平叙文: 3つを変える', G),
  S('問2です。He said to me, "Can you come to my house tomorrow?" → He asked me if I could come to his house the next day. Yes／No疑問文なので if、can→could、my→his、tomorrow→the next day です。',
    [bx(10, 8, 300, 44, 'He said to me,\n"Can you come to my house tomorrow?"', C.blue, FILL.blue, 11), ar(160, 56, 160, 70, C.main), bx(10, 74, 300, 44, 'He asked me if I could come to his house\nthe next day.', C.green, FILL.green, 11), lb(160, 138, 'Yes/No → if　can → could　my → his', 11, C.main, 'middle', true)],
    'Yes/No疑問文: if でつなぐ', G),
  S('問3です。The teacher said to the students, "Don\'t be late for class." → The teacher told the students not to be late for class. 否定の命令文なので tell＋人＋not to です。',
    [bx(10, 8, 300, 44, 'The teacher said to the students,\n"Don\'t be late for class."', C.blue, FILL.blue, 11), ar(160, 56, 160, 70, C.main), bx(10, 74, 300, 44, 'The teacher told the students\nnot to be late for class.', C.green, FILL.green, 12), lb(160, 138, '否定の命令文 → tell ＋ 人 ＋ not to', 12, C.main, 'middle', true)],
    '命令文: tell ＋ 人 ＋ not to', G),
  S('問4：She asked me (　) I had finished my homework. ① that ② if ③ to ④ what。asked のあとで「〜かどうか」を表すのは if です。答えは ② if。Yes／No疑問文の転換には if／whether を使います。',
    [bx(10, 10, 300, 36, 'She asked me (   ) I had finished my homework.', C.main, FILL.warm, 11), ...W([['① that', Gy], ['② if', G], ['③ to', Gy], ['④ what', Gy]], 60, 34, 14), lb(160, 116, 'asked ＋ 「〜かどうか」→ if', 14, C.green, 'middle', true), lb(160, 142, '（疑問詞がなければ if / whether）', 12, C.gray, 'middle')],
    '答え: ② if', G),
  S('問5の並べかえです。( me / he / told / to / the / window / close ). 命令文の転換は tell＋人＋to＋原形なので、He told me to close the window. が答えです。',
    [...W([['He', G], ['told', B], ['me', M], ['to close', P], ['the window.', M]], 36, 36, 13), lb(160, 88, 'tell ＋ 人 ＋ to ＋ 原形', 14, C.green, 'middle', true), lb(160, 116, '主語 ＋ 伝達動詞 ＋ 人 ＋ to ＋ 原形 ＋ 目的語', 12, C.gray, 'middle')],
    '答え: He told me to close the window.', G),
  S('解き終えたら、見直しの3チェックです。①代名詞は伝える人の立場に変わっているか ②時制は伝達動詞に合わせて一致しているか（例外に当たらないか）③時・場所を表す語はずれに合わせて変わっているか。',
    [bx(10, 12, 300, 40, '① 代名詞は 立場に合っているか', C.blue, FILL.blue, 13), bx(10, 58, 300, 40, '② 時制は 一致しているか（例外？）', C.green, FILL.green, 13), bx(10, 104, 300, 40, '③ 時・場所の語は 変わっているか', C.purple, FILL.purple, 13)],
    '見直しの3チェック', M),
  S('まとめです。話法の総合問題は、1つのミスが連鎖して複数の減点になりやすいです。まず骨組みを決め、①〜⑤の手順を順番どおりに踏むことが、結果的にいちばんの近道です。',
    [bx(10, 14, 300, 40, '骨組みを決める → 5ステップ', C.blue, FILL.blue, 14), bx(10, 62, 300, 40, '焦らず 順番どおりに', C.green, FILL.green, 14), bx(10, 110, 300, 40, '最後に 3チェックで見直す', C.main, FILL.warm, 14)],
    '話法の総合問題', M),
], '話法の総合演習');

export const XF_KEK_FIGURES: Record<string, DiagramFigure> = figs;

export const XF_KEK_SECTIONS: Record<string, string> = {
  'new20_j2_eigo_13#0': 'xf_new20_j2_eigo_13',
  'new20_j2_eigo_14#1': 'xf_new20_j2_eigo_14',
  'new20_j2_eigo_15#2': 'xf_new20_j2_eigo_15',
  'new20_j2_eigo_16#0': 'xf_new20_j2_eigo_16',
  'new20_j2_eigo_17#0': 'xf_new20_j2_eigo_17',
  'new20_j2_eigo_18#0': 'xf_new20_j2_eigo_18',
  'new20_j2_eigo_19#2': 'xf_new20_j2_eigo_19',
  'new20_j2_eigo_20#0': 'xf_new20_j2_eigo_20',
  'new20_j3_eigo_01#0': 'xf_new20_j3_eigo_01',
  'new20_j3_eigo_02#0': 'xf_new20_j3_eigo_02',
  'new20_j3_eigo_03#0': 'xf_new20_j3_eigo_03',
  'new20_j3_eigo_04#2': 'xf_new20_j3_eigo_04',
  'new20_j3_eigo_05#0': 'xf_new20_j3_eigo_05',
  'new20_j3_eigo_06#2': 'xf_new20_j3_eigo_06',
  'new20_j3_eigo_07#2': 'xf_new20_j3_eigo_07',
  'new20_j3_eigo_08#2': 'xf_new20_j3_eigo_08',
  'new20_j3_eigo_09#0': 'xf_new20_j3_eigo_09',
  'new20_j3_eigo_10#1': 'xf_new20_j3_eigo_10',
  'new20_j3_eigo_11#0': 'xf_new20_j3_eigo_11',
  'new20_j3_eigo_12#0': 'xf_new20_j3_eigo_12',
  'new20_j3_eigo_13#2': 'xf_new20_j3_eigo_13',
  'new20_j3_eigo_14#0': 'xf_new20_j3_eigo_14',
  'new20_j3_eigo_15#0': 'xf_new20_j3_eigo_15',
  'new20_j3_eigo_16#0': 'xf_new20_j3_eigo_16',
  'new20_j3_eigo_17#2': 'xf_new20_j3_eigo_17',
  'new20_j3_eigo_18#0': 'xf_new20_j3_eigo_18',
  'new20_j3_eigo_19#0': 'xf_new20_j3_eigo_19',
  'new20_j3_eigo_20#1': 'xf_new20_j3_eigo_20',
};
