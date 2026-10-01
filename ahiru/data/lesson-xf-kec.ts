// 高校受験 英語「時制・不規則動詞・現在完了・受動態」30単元の動く図解スライド。
// 「❓なぜ？→答え」の連鎖で、根っこまでたどる。
import type { DiagramElement, DiagramFigure } from './figures';
import { show, bx, lb, ar, ln, ci, C, FILL, fresh } from './diagram-kit';

type K = 'b' | 'g' | 'r' | 'm' | 'p' | 'y' | 'w';
const P: Record<K, [string, string]> = {
  b: [C.blue, FILL.blue], g: [C.green, FILL.green], r: [C.red, FILL.red],
  m: [C.main, FILL.warm], p: [C.purple, FILL.purple], y: [C.main, FILL.yellow], w: [C.gray, FILL.gray],
};
const B = (x: number, y: number, w: number, h: number, t: string, k: K = 'm', size = 12): DiagramElement => bx(x, y, w, h, t, P[k][0], P[k][1], size);
const H = (t: string, color: string = C.ink): DiagramElement => lb(160, 16, t, 13, color, 'middle', true);
const F = (t: string, color: string = C.main): DiagramElement => lb(160, 228, t, 12, color, 'middle', true);
const T = (x: number, y: number, t: string, size = 11, color: string = C.ink, bold = false, anchor: 'start' | 'middle' | 'end' = 'middle'): DiagramElement => lb(x, y, t, size, color, anchor, bold);
/** 横に並べた箱。 */
const row = (texts: string[], x: number, y: number, w: number, h: number, k: K | K[] = 'm', size = 11, gap = 4): DiagramElement[] =>
  texts.map((t, i) => B(x + i * (w + gap), y, w, h, t, Array.isArray(k) ? k[i % k.length] : k, size));
/** 表。1行目は見出し。 */
const tbl = (rows: string[][], x: number, y: number, ws: number[], rh: number, size = 11, hk: K = 'm', bk: K = 'w'): DiagramElement[] =>
  rows.flatMap((r, ri) => {
    let cx = x;
    return r.map((t, ci2) => {
      const el = B(cx, y + ri * rh, ws[ci2] - 2, rh - 2, t, ri === 0 ? hk : bk, size);
      cx += ws[ci2];
      return el;
    });
  });
const S = (...els: (DiagramElement | DiagramElement[])[]): DiagramElement[] => fresh(...els.flat());

export const XF_KEC_FIGURES: Record<string, DiagramFigure> = {};
export const XF_KEC_SECTIONS: Record<string, string> = {};
const add = (id: string, sec: number, fig: DiagramFigure) => {
  XF_KEC_FIGURES['xf_' + id] = fig;
  XF_KEC_SECTIONS[id + '#' + sec] = 'xf_' + id;
};

// ───────── s070 まぎらわしい自動詞・他動詞のペア ─────────
add('koko_eigo_s070', 0, show([
  { note: '❓「太陽がのぼる」と「手をあげる」。日本語では別の言葉ですが、英語では rise と raise という一文字ちがいの2語になります。どう使い分けるのでしょう。',
    add: S(H('日本語では別の言葉でも…'), B(20, 40, 130, 40, '太陽がのぼる', 'b', 13), B(170, 40, 130, 40, '手をあげる', 'm', 13), ar(85, 84, 85, 112, C.blue), ar(235, 84, 235, 112, C.main), B(20, 116, 130, 44, 'rise', 'b', 18), B(170, 116, 130, 44, 'raise', 'm', 18), F('英語は一文字ちがいの2語')) },
  { note: '❓ちがいは何でしょう。→ うしろに「〜を」にあたる目的語があるかどうかです。The sun rises in the east. には「〜を」がなく、He raised his hand. には his hand（手を）があります。',
    add: S(H('❓ちがいは「〜を」があるか'), B(10, 34, 145, 26, 'rise（自動詞）', 'b'), B(165, 34, 145, 26, 'raise（他動詞）', 'm'), B(10, 70, 145, 44, 'The sun rises\nin the east.', 'b', 11), B(165, 70, 66, 44, 'He raised', 'm', 11), B(235, 70, 75, 44, 'his hand', 'r', 12), T(82, 130, '「〜を」なし', 12, C.blue, true), T(272, 130, '← 目的語（〜を）', 11, C.red, true), F('目的語があれば raise、なければ rise')) },
  { note: '❓では、なぜ目的語で分かれるのでしょう。→ rise は「主語が自分で上がる」動き、raise は「主語が何かを持ち上げる」動きだからです。持ち上げる相手が必要なので、うしろに〜をが要ります。',
    add: S(H('❓なぜ目的語が要るの？'), ci(60, 90, 22, 'sun', C.blue, FILL.blue, 11), ar(60, 64, 60, 36, C.blue), T(60, 130, 'rise：自分が上がる', 12, C.blue, true), ci(190, 100, 18, 'he', C.main, FILL.warm, 11), B(230, 96, 60, 24, 'hand', 'r', 11), ar(260, 94, 260, 56, C.main), ar(210, 100, 228, 106, C.main), T(230, 140, 'raise：何かを持ち上げる', 12, C.main, true), F('持ち上げる相手＝目的語が必要')) },
  { note: '同じように、3組のペアがあります。rise－rose－risen と raise－raised－raised（規則動詞）、lie－lay－lain と lay－laid－laid、sit－sat－sat と set－set－set。自動詞（目的語なし）と他動詞（目的語あり）の組です。',
    add: S(H('3組のペア（三つ一組で）'), tbl([['目的語なし', '変化', '目的語あり', '変化'], ['rise', 'rose-risen', 'raise', 'raised-raised'], ['lie', 'lay-lain', 'lay', 'laid-laid'], ['sit', 'sat-sat', 'set', 'set-set']], 8, 34, [66, 90, 66, 90], 30, 11), F('左は自動詞、右は他動詞')) },
  { note: '❓lie の過去形は？ → lay です。他動詞 lay の原形とまったく同じつづりになるのが最大のわなです。She lay on the sofa. は「横になっていた」（目的語なし＝lie の過去形）、She laid the baby on the bed. は「寝かせた」（the baby が目的語＝lay）です。',
    add: S(H('❓lay は2種類ある！', C.red), B(10, 34, 145, 26, 'lie の過去形', 'b'), B(165, 34, 145, 26, 'lay の原形', 'm'), B(10, 70, 145, 44, 'She lay\non the sofa.', 'b', 12), B(165, 70, 145, 44, 'She laid the baby\non the bed.', 'm', 11), T(82, 130, '目的語なし → 横になっていた', 11, C.blue, true), T(238, 130, 'the baby が目的語\n→ 寝かせた', 11, C.main, true), F('目的語があるかで見分ける', C.red)) },
  { note: '❓この区別は、文型とどうつながるのでしょう。→ 自動詞は目的語がとれないので第1・第2文型、他動詞は目的語をとるので第3・第4・第5文型になります。動詞の性質が文型を決めています。',
    add: S(H('❓動詞の性質と文型'), B(15, 36, 135, 36, '自動詞', 'b', 14), B(170, 36, 135, 36, '他動詞', 'm', 14), ar(82, 74, 82, 100, C.blue), ar(238, 74, 238, 100, C.main), B(15, 104, 135, 50, '第1・第2文型\n（O が入らない）', 'b', 12), B(170, 104, 135, 50, '第3・第4・第5文型\n（O が入る）', 'm', 12), F('目的語を取れるかが分かれ目')) },
  { note: '練習です。①M（前置詞のかたまりなど）を外す。②動詞のうしろに何があるか数える。The sun rises in the east. は in the east が M で、残りは The sun rises だけなので第1文型。He raised his hand. は his hand が O なので第3文型です。',
    add: S(H('練習：骨組みを取り出す'), T(160, 38, 'The sun rises in the east.', 13, C.ink, true), B(40, 54, 70, 26, 'The sun', 'b', 11), B(114, 54, 60, 26, 'rises', 'g', 11), B(178, 54, 100, 26, 'in the east = M', 'w', 10), T(160, 100, '→ 骨組みは The sun rises → 第1文型', 12, C.blue, true), T(160, 128, 'He raised his hand.', 13, C.ink, true), B(40, 142, 50, 26, 'He', 'b', 11), B(94, 142, 70, 26, 'raised', 'g', 11), B(168, 142, 80, 26, 'his hand = O', 'r', 11), T(160, 188, '→ O があるので 第3文型', 12, C.main, true), F('M を外す → 動詞のうしろを数える')) },
  { note: 'まとめです。①うしろに目的語があれば他動詞（raise・lay・set）。②なければ自動詞（rise・lie・sit）。③lie の過去形 lay は、lay の原形と同じつづり。④日本語の訳より、文の形で判断するほうが確実です。',
    add: S(H('まとめ'), B(15, 34, 290, 34, '① 目的語あり → raise / lay / set', 'm', 13), B(15, 76, 290, 34, '② 目的語なし → rise / lie / sit', 'b', 13), B(15, 118, 290, 34, '③ lie の過去形 lay = lay の原形', 'r', 13), B(15, 160, 290, 34, '④ 訳より文の形で判断する', 'g', 13), F('「〜を」があるか？ を最初に見る')) },
], 'rise と raise：目的語で見分ける'));

// ───────── s073 三単現の -s ─────────
add('koko_eigo_s073', 0, show([
  { note: '❓He play soccer. と書くと、なぜ1点消えるのでしょう。→ 動詞に -s が付く条件が3つあって、He の文はその3つがそろっているからです。主語が三人称、単数、時制が現在。この3つが同時にそろったときだけです。',
    add: S(H('❓-s が付く条件は？'), B(10, 36, 94, 50, '① 主語が\n三人称\n（I と you 以外）', 'b', 10), B(113, 36, 94, 50, '② 主語が\n単数', 'g', 11), B(216, 36, 94, 50, '③ 時制が\n現在', 'm', 11), ar(160, 90, 160, 116, C.red), B(60, 120, 200, 40, '動詞に -s / -es が付く', 'r', 14), F('3つ同時にそろったときだけ')) },
  { note: '具体的に見ましょう。I play / You play / They play は、三人称単数ではないので -s が付きません。He plays / My sister likes / That bird sings は、三つの条件がそろうので -s が付きます。',
    add: S(H('主語で見分ける'), B(10, 34, 145, 24, '-s が付かない', 'w', 12), B(165, 34, 145, 24, '-s が付く', 'r', 12), B(10, 64, 145, 28, 'I play', 'w'), B(10, 96, 145, 28, 'You play', 'w'), B(10, 128, 145, 28, 'They like music', 'w'), B(165, 64, 145, 28, 'He plays', 'r'), B(165, 96, 145, 28, 'My sister likes', 'r'), B(165, 128, 145, 28, 'That bird sings', 'r'), F('三人称単数 + 現在 だけ')) },
  { note: '❓-s のつづりはどう変わるのでしょう。原則はそのまま -s（play → plays）。o・s・x・sh・ch で終わる語は -es（go → goes、watch → watches）。子音字＋y は y を i にして -es（study → studies）。have は has です。',
    add: S(H('❓つづりのきまり'), tbl([['語の終わり', '付け方', '例'], ['ふつう', '+ s', 'play → plays'], ['o s x sh ch', '+ es', 'go → goes\nwatch → watches'], ['子音字 + y', 'y→i + es', 'study → studies'], ['特別', '', 'have → has']], 8, 32, [96, 70, 138], 34, 11), F('特別な形は have → has')) },
  { note: '❓なぜ study は studies で、play は plays なのでしょう。→ y の直前の文字が分かれ目です。stud-y は直前が d（子音字）なので y を i に変えて -es、pla-y は直前が a（母音字）なので、そのまま -s を付けます。',
    add: S(H('❓y の直前を見る'), T(80, 44, 'study', 16, C.ink, true), row(['s', 't', 'u', 'd', 'y'], 30, 56, 24, 26, ['w', 'w', 'w', 'r', 'm'], 12, 2), T(80, 108, 'd は子音字 → studies', 12, C.red, true), T(240, 44, 'play', 16, C.ink, true), row(['p', 'l', 'a', 'y'], 192, 56, 24, 26, ['w', 'w', 'g', 'm'], 12, 2), T(240, 108, 'a は母音字 → plays', 12, C.green, true), F('分かれ目は y の「直前の1字」だけ')) },
  { note: '❓では -es はなぜ必要なのでしょう。→ wash や watch は s や ch で終わるので、s だけ付けると言いにくいのです。間に e を入れて「ウォッシュ・イズ」と音をひとつ増やすと言いやすくなります。-s の発音にもつながります。',
    add: S(H('❓-es の e は何のため？'), B(20, 36, 120, 34, 'wash + s', 'w', 14), T(160, 54, '→', 16), B(180, 36, 120, 34, 'washes', 'r', 14), T(80, 86, '言いにくい', 12, C.red, true), T(240, 86, 'e をはさんで言いやすく', 12, C.green, true), tbl([['発音', '語のおわり', '例'], ['[s]', 'p t k f', 'stops likes'], ['[z]', '母音 b d g m n l', 'plays runs'], ['[iz]', 's z sh ch ge', 'washes watches']], 8, 106, [50, 130, 124], 28, 11), F('音がふえるとき [iz]', C.red)) },
  { note: '❓-s を付けてはいけない場面は？ → does や did のうしろ、does not や did not のうしろ、can や will のうしろです。これらのうしろの動詞は、いつも原形です。三単現の情報は、すでに does が持っているからです。',
    add: S(H('❓付けてはいけない場面'), B(10, 36, 300, 34, '× Does she plays the piano?', 'r', 12), B(10, 74, 300, 34, '○ Does she play the piano?', 'g', 12), B(10, 112, 300, 34, '× He can plays tennis.', 'r', 12), B(10, 150, 300, 34, '○ He can play tennis.', 'g', 12), F('does / did / 助動詞のうしろは原形')) },
  { note: 'まとめです。-s が付くのは、主語が三人称単数で現在のときだけ。つづりは子音字＋y と es に注意。Everyone や nobody は単数扱いで -s が必要。Tom and I は二人なので -s は付きません。',
    add: S(H('まとめ'), B(10, 34, 300, 32, '三人称 ＋ 単数 ＋ 現在 だけ -s', 'r', 13), B(10, 72, 300, 32, '子音字+y → ies／o s x sh ch → es', 'm', 12), B(10, 110, 300, 32, 'does / did / can のうしろは原形', 'b', 12), B(10, 148, 300, 32, 'Everyone likes … / Tom and I play …', 'g', 12), F('Everyone は単数、Tom and I は複数')) },
], '三単現の -s：3つの条件とつづり'));

// ───────── s074 一般動詞の否定文・疑問文 ─────────
add('koko_eigo_s074', 0, show([
  { note: '❓「あなたは野球が好きですか」を Are you like baseball? と書くと、なぜ誤りなのでしょう。→ 動詞の主役が2人いるからです。are も like も動詞で、1つの文に be動詞と一般動詞の原形を並べることはできません。',
    add: S(H('❓なぜ Are you like 〜? は誤り？', C.red), B(15, 44, 70, 40, 'Are', 'r', 16), B(90, 44, 70, 40, 'you', 'w', 16), B(165, 44, 70, 40, 'like', 'r', 16), T(50, 100, '動詞①', 12, C.red, true), T(200, 100, '動詞②', 12, C.red, true), B(15, 126, 290, 40, '1つの文に主役の動詞は1人だけ', 'm', 13), F('be動詞と一般動詞の原形は並べない')) },
  { note: '❓どう見分けるのでしょう。→ まず文の中心の動詞を探します。am・is・are なら be動詞の文、play・like・go などなら一般動詞の文です。そこから先の作り方が変わります。',
    add: S(H('❓まず「中心の動詞」を探す'), B(100, 32, 120, 30, '中心の動詞は？', 'm', 13), ar(130, 64, 70, 94, C.blue), ar(190, 64, 250, 94, C.green), B(10, 96, 140, 30, 'am / is / are', 'b', 13), B(170, 96, 140, 30, 'play / like / go …', 'g', 13), B(10, 134, 140, 44, 'be動詞の文\n前に出す／not', 'b', 11), B(170, 134, 140, 44, '一般動詞の文\nDo・Does ／ do not', 'g', 11), F('動詞のしゅるいで作り方が決まる')) },
  { note: '❓一般動詞の否定文は？ → 動詞の前に do not または does not を置いて、動詞は原形にもどします。I do not watch TV. He does not live in Tokyo. です。',
    add: S(H('❓否定文：do not ＋ 原形'), row(['I', 'do not', 'watch', 'TV'], 20, 40, 66, 36, ['w', 'r', 'g', 'w'], 12, 6), row(['He', 'does not', 'live', 'in Tokyo'], 12, 96, 70, 36, ['w', 'r', 'g', 'w'], 11, 6), F('not は do / does のうしろ')) },
  { note: '❓なぜ does のうしろは lives ではなく live なのでしょう。→ 三単現の -s の仕事を、does が引き受けているからです。-s が does（es）のほうへ移るので、動詞は元の形にもどります。',
    add: S(H('❓なぜ live（lives ではない）？'), B(20, 36, 280, 34, 'He lives in Tokyo.', 'w', 14), ar(160, 74, 160, 98, C.red), B(20, 102, 280, 34, 'He does not live in Tokyo.', 'g', 14), T(160, 156, '-s は does が引き受ける', 13, C.red, true), F('動詞はもとの形（原形）にもどる')) },
  { note: '❓疑問文は？ → Do または Does を文のはじめに出して、動詞は原形です。Do you play any sports? Does your sister study French? 答えも do 系でそろえて、Yes, I do. / No, he does not. と言います。',
    add: S(H('❓疑問文：Do / Does ＋ 原形'), row(['Do', 'you', 'play', 'sports?'], 20, 36, 66, 34, ['r', 'w', 'g', 'w'], 12, 6), row(['Does', 'she', 'study', 'French?'], 20, 84, 66, 34, ['r', 'w', 'g', 'w'], 12, 6), B(20, 132, 130, 34, 'Yes, I do.', 'b', 13), B(170, 132, 130, 34, 'No, he does not.', 'b', 13), F('答えも do / does でそろえる')) },
  { note: '練習です。He is a doctor. は be動詞の文なので Is he a doctor? He works at a hospital. は一般動詞の文なので Does he work at a hospital?　He is running now. は進行形なので中心は be動詞。Is he running now? です。',
    add: S(H('練習：どちらの文？'), tbl([['もとの文', '疑問文'], ['He is a doctor.', 'Is he a doctor?'], ['He works at a hospital.', 'Does he work at\na hospital?'], ['He is running now.', 'Is he running now?']], 8, 32, [140, 164], 40, 11, 'm', 'w'), F('進行形の中心は be動詞')) },
  { note: 'まとめです。①中心の動詞が be動詞か一般動詞かを見る。②一般動詞は do/does not と Do/Does、動詞は原形。③進行形に Do は使わない。Are you running?　④Who plays the piano? のように疑問詞が主語なら語順を変えず、三単現のまま。',
    add: S(H('まとめ'), B(10, 34, 300, 30, '① 中心の動詞を探す', 'm', 13), B(10, 68, 300, 30, '② 一般動詞：do / does ＋ 原形', 'g', 13), B(10, 102, 300, 30, '③ 進行形は be動詞：Are you running?', 'b', 12), B(10, 136, 300, 30, '④ Who plays 〜? は語順そのまま', 'p', 12), F('主役の動詞は1人だけ')) },
], '一般動詞の否定・疑問：be動詞と混ぜない'));

// ───────── s075 be動詞の現在形と There is / are ─────────
add('koko_eigo_s075', 1, show([
  { note: '❓「机の上に本が3冊あります」を There is three books... と書くと、なぜ誤りなのでしょう。→ There は文を始める合図にすぎず、本当の主語はうしろの books だからです。be動詞は、この books に合わせます。',
    add: S(H('❓There is three books … はなぜ誤り？', C.red), B(10, 44, 70, 38, 'There', 'w', 14), B(86, 44, 56, 38, 'is', 'r', 14), B(148, 44, 162, 38, 'three books', 'g', 14), T(45, 100, '合図だけ', 12, C.gray, true), T(229, 100, '本当の主語（複数）', 12, C.green, true), ar(229, 108, 229, 128, C.red), B(60, 132, 200, 34, 'books は複数 → are', 'r', 14), F('be動詞は「うしろの名詞」に合わせる')) },
  { note: '正しくは There are three books on the desk. です。単数なら There is a cat under the table.　あわせる相手は、いつも be動詞のうしろに来る名詞です。',
    add: S(H('合わせる相手はうしろの名詞'), B(10, 34, 300, 30, 'There is a cat under the table.', 'b', 13), T(160, 76, '単数 a cat → is', 12, C.blue, true), B(10, 98, 300, 30, 'There are three books on the desk.', 'g', 13), T(160, 140, '複数 three books → are', 12, C.green, true), F('There 自体は主語ではない')) },
  { note: '❓water や snow のような、数えられない名詞はどうでしょう。→ 数えられない名詞は a も付かず複数形にもならないので、単数扱いの There is を使います。There is a lot of water in the bottle. です。',
    add: S(H('❓数えられない名詞は？'), row(['water', 'money', 'time', 'snow'], 14, 36, 68, 30, 'b', 12, 6), T(160, 84, 'a も付かない・複数形にもならない', 12, C.ink, true), ar(160, 92, 160, 112, C.blue), B(20, 116, 280, 34, 'There is a lot of water in the bottle.', 'b', 12), T(160, 172, '単数扱い → is', 13, C.blue, true), F('a lot of だけでは複数と決められない')) },
  { note: '❓There is が使えない場合は？ → すでに話題に出ている特定のもの（the・my・this が付く名詞）です。There は「そこに、新しく出てくるものがある」と持ち出す形なので、特定のものには合いません。My bag is on the table. と言います。',
    add: S(H('❓なぜ There is my bag … は×？'), B(10, 36, 300, 32, '× There is my bag on the table.', 'r', 13), T(160, 86, 'my bag は、もうお互い知っているもの', 12, C.red, true), B(10, 106, 300, 32, '○ My bag is on the table.', 'g', 13), T(160, 156, 'There is / are は「新しく持ち出す」形', 12, C.green, true), F('the・my・this が付くものには使わない')) },
  { note: '長い主語では、be動詞を合わせる相手をまちがえやすくなります。One of my friends is from Canada. の主語の中心は One なので is。friends に引かれて are としないこと。of 〜 の前置詞句は主語の中心ではありません。',
    add: S(H('主語の中心語を見つける'), B(10, 44, 56, 34, 'One', 'g', 15), B(70, 44, 140, 34, 'of my friends', 'w', 13), B(214, 44, 40, 34, 'is', 'r', 14), B(258, 44, 52, 34, 'from…', 'w', 10), T(38, 94, '中心語', 12, C.green, true), T(140, 94, '前置詞句は外す', 12, C.gray, true), T(160, 140, '中心は One（単数）→ is', 13, C.red, true), F('friends に引かれて are としない')) },
  { note: '疑問文と答えは、there をくり返します。Is there a cat under the table? － Yes, there is. / No, there is not. Are there three books on the desk? － Yes, there are. 質問に使った語をそのまま返すのが原則です。',
    add: S(H('疑問文と答え方'), B(10, 36, 300, 30, 'Is there a cat under the table?', 'b', 13), B(40, 72, 110, 28, 'Yes, there is.', 'g', 12), B(170, 72, 110, 28, 'No, there is not.', 'w', 12), B(10, 116, 300, 30, 'Are there three books on the desk?', 'b', 13), B(40, 152, 110, 28, 'Yes, there are.', 'g', 12), B(170, 152, 110, 28, 'No, there are not.', 'w', 12), F('there をくり返して答える')) },
  { note: 'まとめです。①be動詞の本当の主語を探す。②There is / are は、うしろの名詞に合わせる。③数えられない名詞は There is。④the・my が付くものには使わない。⑤A of B の形では A が中心。',
    add: S(H('まとめ'), B(10, 32, 300, 28, '① 本当の主語はうしろの名詞', 'm', 13), B(10, 64, 300, 28, '② 単数 → is ／ 複数 → are', 'b', 13), B(10, 96, 300, 28, '③ water・money・time は単数扱い', 'g', 13), B(10, 128, 300, 28, '④ the・my が付くものには使わない', 'r', 13), B(10, 160, 300, 28, '⑤ A of B は A が中心', 'p', 13), F('There は合図、主語はうしろ')) },
], 'There is / There are：主語はうしろの名詞'));

// ───────── s077 規則動詞の -ed のつづり変化 ─────────
add('koko_eigo_s077', 0, show([
  { note: '❓stop の過去形は stoped ではなく stopped、study は studyed ではなく studied。同じ「-ed を付ける」のに、なぜつづりが変わるのでしょう。実は「読み方が変わらないように」という一つの理由で説明できます。',
    add: S(H('❓なぜつづりが変わる？'), B(10, 36, 145, 34, 'stop → stoped ×', 'r', 13), B(165, 36, 145, 34, 'stop → stopped ○', 'g', 13), B(10, 80, 145, 34, 'study → studyed ×', 'r', 13), B(165, 80, 145, 34, 'study → studied ○', 'g', 13), B(40, 130, 240, 40, 'どれも「読み方を守る」ための調整', 'm', 14), F('理由がわかれば暗記が減る')) },
  { note: 'まず基本です。原則はそのまま -ed（play → played、want → wanted）。e で終わる語は -d だけ（like → liked、use → used）。もともと語末に e があるので、-ed の e を重ねないのです。',
    add: S(H('①② 原則と e で終わる語'), B(10, 34, 300, 26, '原則：そのまま -ed', 'm', 12), row(['play → played', 'want → wanted', 'help → helped'], 8, 66, 98, 30, 'w', 10, 4), B(10, 112, 300, 26, 'e で終わる語：-d だけ', 'b', 12), row(['like → liked', 'use → used', 'live → lived'], 8, 144, 98, 30, 'w', 10, 4), F('e は重ねない')) },
  { note: '❓子音字＋y は？ → y を i に変えて -ed（study → studied、carry → carried）。ただし y の直前が母音字（a・i・u・e・o）なら、そのまま -ed です（play → played、enjoy → enjoyed）。stayied や plaied は誤りです。',
    add: S(H('③ y で終わる語'), B(10, 34, 145, 26, '子音字 + y', 'r', 12), B(165, 34, 145, 26, '母音字 + y', 'g', 12), B(10, 66, 145, 40, 'study → studied\ncarry → carried', 'r', 11), B(165, 66, 145, 40, 'play → played\nenjoy → enjoyed', 'g', 11), T(82, 124, 'y → i に変える', 12, C.red, true), T(238, 124, 'そのまま -ed', 12, C.green, true), B(10, 146, 300, 34, '× stayied  × plaied  の誤りが多い', 'w', 12), F('見るのは y の直前の1字だけ')) },
  { note: '❓stop の p はなぜ重ねるのでしょう。→ もし stoped と書くと、o を「オウ」と読ませる形になってしまうからです。hope → hoped と同じ形です。p を重ねて、短い「オ」の読み方を守ります。',
    add: S(H('❓なぜ p を重ねる？'), B(10, 36, 145, 30, 'hope → hoped', 'b', 13), T(82, 80, 'o は「オウ」と読む', 11, C.blue, true), B(165, 36, 145, 30, 'stoped と書くと…', 'r', 13), T(238, 80, 'hoped と同じ形に見える！', 11, C.red, true), ar(238, 92, 238, 112, C.red), B(165, 116, 145, 34, 'stopped', 'g', 15), T(238, 168, 'p を重ねて短い「オ」を守る', 11, C.green, true), F('重ねるのは読み方を守るため')) },
  { note: '❓どんなときに重ねるのでしょう。→ 条件は2つです。①語末が「母音字1つ＋子音字1つ」。②その部分にアクセントがある。stop は両方そろうので stopped。help は子音字が二つ並ぶので重ねません。rain は母音字が二つなので重ねません。',
    add: S(H('❓重ねる条件（2つとも必要）'), tbl([['語', '①母1+子1', '②アクセント', '結果'], ['stop', '○', '○', 'stopped'], ['help', '× (lp)', '―', 'helped'], ['rain', '× (ai)', '―', 'rained'], ['visit', '○', '× 前', 'visited'], ['prefer', '○', '○ 後ろ', 'preferred']], 8, 32, [62, 90, 84, 68], 28, 10), F('①と②の両方がそろえば重ねる')) },
  { note: '語末が w や x のときは、重ねる規則の対象外です。show → showed、snow → snowed、fix → fixed。また、visit・open・happen・listen はアクセントが前にあるので、visited・opened のように重ねません。',
    add: S(H('重ねない語に注意'), B(10, 34, 300, 26, 'w と x は重ねない', 'm', 12), row(['show → showed', 'snow → snowed', 'fix → fixed'], 8, 66, 98, 30, 'w', 10, 4), B(10, 112, 300, 26, 'アクセントが前の語は重ねない', 'b', 12), row(['visit → visited', 'open → opened', 'happen → happened'], 8, 144, 98, 30, 'w', 10, 4), F('× visitted  × openned')) },
  { note: 'まとめです。①原則 -ed、②e で終わる語は -d、③子音字＋y は i に変えて -ed（母音字＋y はそのまま）、④母音字1つ＋子音字1つでアクセントがあれば子音字を重ねる。read や put は不規則動詞なので -ed は付けません。',
    add: S(H('まとめ'), B(10, 32, 300, 28, '① そのまま -ed', 'm', 13), B(10, 64, 300, 28, '② e で終わる → -d だけ', 'b', 13), B(10, 96, 300, 28, '③ 子音字+y → ied（母音字+y はそのまま）', 'g', 12), B(10, 128, 300, 28, '④ 短母音+子音字1つ＋アクセント → 重ねる', 'r', 12), B(10, 160, 300, 28, '※ read・put は不規則（-ed なし）', 'w', 12), F('理由は「読み方を守る」こと')) },
], '規則動詞の -ed：つづりが変わる理由'));

// ───────── s078 -ed の発音 ─────────
add('koko_eigo_s078', 0, show([
  { note: '❓washed、wanted、played。つづりはどれも -ed で終わるのに、読み方は「ト」「ティド」「ド」と三通りです。何で決まるのでしょう。→ -ed の直前の音だけで決まります。',
    add: S(H('❓同じ -ed なのに読みが3通り'), B(10, 40, 96, 40, 'washed', 'm', 14), B(112, 40, 96, 40, 'wanted', 'b', 14), B(214, 40, 96, 40, 'played', 'g', 14), T(58, 100, '[t]', 15, C.main, true), T(160, 100, '[id]', 15, C.blue, true), T(262, 100, '[d]', 15, C.green, true), B(30, 128, 260, 38, '決め手は「直前の音」', 'r', 14), F('つづりの文字ではなく、音で決まる')) },
  { note: '確かめ方は、のどに指を当てて、直前の音だけを出してみることです。ふるえなければ無声音で [t]、ふるえれば有声音で [d]。直前が t か d の音なら [id] です。この順で確認すれば必ず決まります。',
    add: S(H('のどに指を当てて確かめる'), B(95, 32, 130, 30, '直前の音は？', 'm', 13), ar(130, 64, 50, 90, C.main), ar(160, 64, 160, 90, C.blue), ar(190, 64, 270, 90, C.green), B(10, 92, 90, 44, 't / d の音\n（先に確認）', 'b', 11), B(115, 92, 90, 44, 'のどが\nふるえない', 'm', 11), B(220, 92, 90, 44, 'のどが\nふるえる', 'g', 11), B(10, 144, 90, 30, '[id]', 'b', 15), B(115, 144, 90, 30, '[t]', 'm', 15), B(220, 144, 90, 30, '[d]', 'g', 15), F('t/d の音かを先に見る')) },
  { note: '[t] になる例です。stopped・looked・helped・washed・watched・laughed・passed。直前が p・k・f・s・sh・ch などの無声音（のどをふるわせない音）なので、-ed も軽い [t] になります。',
    add: S(H('[t]：直前が無声音'), row(['stopped', 'looked', 'helped'], 8, 36, 98, 32, 'm', 12, 4), row(['washed', 'watched', 'laughed'], 8, 76, 98, 32, 'm', 12, 4), B(100, 116, 120, 32, 'passed', 'm', 12), T(160, 168, 'p・k・f・s・sh・ch の後', 12, C.main, true), F('のどをふるわせない音の後は [t]')) },
  { note: '[d] になる例です。played・called・opened・lived・used・enjoyed。直前が母音や b・g・v・z・m・n・l・r などの有声音（のどがふるえる音）なので、-ed も [d] になります。',
    add: S(H('[d]：直前が有声音'), row(['played', 'called', 'opened'], 8, 36, 98, 32, 'g', 12, 4), row(['lived', 'used', 'enjoyed'], 8, 76, 98, 32, 'g', 12, 4), T(160, 140, '母音・b g v z m n l r の後', 12, C.green, true), F('のどがふるえる音の後は [d]')) },
  { note: '❓では [id] はなぜ必要なのでしょう。→ want のように t で終わる語に t や d の音をそのまま足すと「tt」「dd」となって発音しにくいからです。間に母音を入れて、音節が一つ増えます。wanted・needed・visited・started です。',
    add: S(H('❓なぜ母音を入れる？'), B(10, 36, 135, 30, 'want + t …', 'w', 13), T(78, 80, 'tt が言いにくい', 12, C.red, true), ar(150, 50, 172, 50, C.red), B(175, 36, 135, 30, 'want + id', 'b', 13), T(242, 80, '母音をはさむ', 12, C.blue, true), row(['wanted', 'needed', 'visited'], 8, 104, 98, 30, 'b', 12, 4), row(['started', 'waited', 'ended'], 8, 142, 98, 30, 'b', 12, 4), F('音の数がひとつ増える')) },
  { note: 'つづりにだまされない例です。washed は語末が h ですが音は [ʃ]（無声）なので [t]。used は語末が e ですが音は [z]（有声）なので [d]。laughed は gh が [f]（無声）なので [t]。liked は e を読まず、直前が [k] なので [t] です。',
    add: S(H('つづりにだまされない'), tbl([['語', '直前の音', '読み'], ['washed', '[ʃ] 無声', '[t]'], ['used', '[z] 有声', '[d]'], ['laughed', 'gh = [f] 無声', '[t]'], ['liked', '[k] 無声', '[t]']], 8, 32, [90, 130, 84], 32, 12), F('つづりの最後の文字ではなく、音を見る')) },
  { note: '-s の発音も同じ原理です。無声音の後は [s]（books）、有声音の後は [z]（dogs）、s・z・sh・ch・ge の音の後は母音をはさんで [iz]（buses）。「無声なら無声、有声なら有声、同じ仲間の音が続くときは母音をはさむ」という考え方は -ed も -s も共通です。',
    add: S(H('-s の発音も同じ考え方'), tbl([['', '無声の後', '有声の後', '同じ仲間の音の後'], ['-ed', '[t]', '[d]', '[id]（t d の後）'], ['-s', '[s]', '[z]', '[iz]（s z sh ch ge の後）'], ['例', 'books\nstopped', 'dogs\nplayed', 'buses\nwanted']], 4, 32, [46, 72, 72, 122], 42, 10), F('同じ仲間の音が続くと母音をはさむ')) },
  { note: 'まとめです。直前が無声音なら [t]、有声音なら [d]、t か d の音なら [id]。used は [d]、visited は [id] のように、つづりではなく直前の音で決めます。発音問題では [id] をまぎれこませる出題が定番です。',
    add: S(H('まとめ'), B(10, 34, 300, 30, '無声音の後 → [t]  stopped / washed', 'm', 12), B(10, 68, 300, 30, '有声音の後 → [d]  played / used', 'g', 12), B(10, 102, 300, 30, 't・d の音の後 → [id]  wanted / needed', 'b', 12), B(10, 136, 300, 30, '「下線部が異なるもの」は [id] に注意', 'r', 12), F('音を見る → t/d かを先に確認')) },
], '-ed の発音：直前の音で決まる'));

// ───────── s079 did の否定文・疑問文 ─────────
add('koko_eigo_s079', 0, show([
  { note: '❓「あなたは彼を見ましたか」を Did you saw him? と書くと、なぜ誤りなのでしょう。→ 過去という情報は、すでに did が背負っているからです。動詞まで過去形にすると、過去を二重に表してしまいます。',
    add: S(H('❓なぜ Did you saw him? は×', C.red), B(10, 40, 70, 36, 'Did', 'r', 15), B(84, 40, 70, 36, 'you', 'w', 15), B(158, 40, 70, 36, 'saw', 'r', 15), B(232, 40, 78, 36, 'him?', 'w', 15), T(45, 94, '過去①', 12, C.red, true), T(193, 94, '過去②', 12, C.red, true), B(40, 120, 240, 34, 'did が過去を背負うので動詞は手ぶら', 'm', 12), B(60, 162, 200, 28, '○ Did you see him?', 'g', 14), F('過去は1か所だけに表す')) },
  { note: '否定文は、動詞の前に did not を置き、動詞は原形にもどします。She did not come to school yesterday.　came ではなく come です。短縮形は didn\'t です。',
    add: S(H('否定文：did not ＋ 原形'), row(['She', 'did not', 'come', 'to school'], 8, 40, 72, 36, ['w', 'r', 'g', 'w'], 12, 6), T(160, 98, 'came ではなく come（過去は did が担当）', 12, C.red, true), row(['I', 'did not', 'watch', 'TV'], 8, 120, 72, 36, ['w', 'r', 'g', 'w'], 12, 6), F('did not のうしろは原形')) },
  { note: '疑問文は、Did を文のはじめに出して動詞は原形です。Did you see him at the station?　答えは did でそろえて、Yes, I did. / No, I did not (didn\'t). です。',
    add: S(H('疑問文：Did ＋ 主語 ＋ 原形'), row(['Did', 'you', 'see', 'him?'], 8, 40, 72, 36, ['r', 'w', 'g', 'w'], 12, 6), B(20, 100, 130, 34, 'Yes, I did.', 'b', 14), B(170, 100, 130, 34, 'No, I did not.', 'b', 14), F('答えも did でそろえる')) },
  { note: '❓なぜ did のうしろは原形なのでしょう。→ 現在形の do / does と、しくみがまったく同じだからです。does のうしろが原形だったように、did のうしろも原形になります。',
    add: S(H('❓do / does と同じしくみ'), tbl([['時', '助けの語', 'うしろの動詞'], ['現在', 'do / does', '原形'], ['過去', 'did', '原形']], 20, 38, [90, 110, 90], 36, 13), B(20, 160, 280, 34, '時制の情報は do / does / did が持つ', 'm', 12), F('動詞自身は何も変えなくてよい')) },
  { note: '疑問詞のある疑問文は、〈疑問詞＋did＋主語＋原形〉です。What did you do last Sunday? Where did they go? Why did he leave so early? 疑問詞を先頭に置いて、そのうしろは疑問文の語順のままです。',
    add: S(H('疑問詞があるとき'), row(['What', 'did', 'you', 'do?'], 8, 38, 72, 34, ['p', 'r', 'w', 'g'], 12, 6), row(['Where', 'did', 'they', 'go?'], 8, 82, 72, 34, ['p', 'r', 'w', 'g'], 12, 6), row(['Why', 'did', 'he', 'leave?'], 8, 126, 72, 34, ['p', 'r', 'w', 'g'], 12, 6), F('疑問詞 ＋ did ＋ 主語 ＋ 原形')) },
  { note: '❓did を使わない場面は？ ①疑問詞が主語そのものをたずねるとき。Who broke this window? 見分け方は、疑問詞の直後に主語がもう一つあるか。Who broke it? はないので did 不要。What did you break? は you があるので did が必要です。',
    add: S(H('❓did を使わない①：疑問詞が主語'), B(10, 36, 300, 30, 'Who broke this window?', 'g', 13), T(160, 80, 'who のうしろに主語がない → who が主語 → did 不要', 11, C.green, true), B(10, 98, 300, 30, 'What did you break?', 'b', 13), T(160, 142, 'what のうしろに you がある → what は目的語 → did 必要', 11, C.blue, true), F('疑問詞のうしろに主語があるか')) },
  { note: '②be動詞の過去の文でも did は使いません。Were you busy yesterday? He was not at home. 過去進行形も be動詞の文なので、Were you watching TV? となります。',
    add: S(H('❓did を使わない②：be動詞の過去'), B(10, 36, 300, 30, '× Did you busy yesterday?', 'r', 13), B(10, 70, 300, 30, '○ Were you busy yesterday?', 'g', 13), B(10, 112, 300, 30, '× Did you watching TV?', 'r', 13), B(10, 146, 300, 30, '○ Were you watching TV?', 'g', 13), F('was / were を前に出す')) },
  { note: 'まとめです。①過去の否定は did not＋原形、疑問は Did＋主語＋原形。②did のうしろは必ず原形。③疑問詞が主語のときは did を使わず動詞を過去形に。④be動詞の過去の文には did を使わない。',
    add: S(H('まとめ'), B(10, 32, 300, 30, '① did not ＋ 原形 ／ Did ＋ 主語 ＋ 原形', 'm', 12), B(10, 66, 300, 30, '② did のうしろは必ず原形', 'r', 13), B(10, 100, 300, 30, '③ Who broke 〜? は did なしで過去形', 'b', 12), B(10, 134, 300, 30, '④ be動詞の過去には did を使わない', 'g', 12), F('過去は did か過去形、どちらか1か所')) },
], 'did の文：過去は did が背負う'));

// ───────── s081 不規則動詞① 四つの型 ─────────
add('koko_eigo_s081', 0, show([
  { note: '❓不規則動詞を何十個も「ゴー・ウェント・ゴーン」と丸暗記するのは、なぜ非効率なのでしょう。思い出すときも順番に唱えるしかないからです。実は変化のしかたは四つの型しかありません。型でまとめると手がかりが増えます。',
    add: S(H('❓丸暗記より「型」で覚える'), B(20, 34, 280, 30, '〈原形 － 過去形 － 過去分詞〉', 'm', 14), B(10, 76, 145, 40, 'A-A-A 型\nput put put', 'b', 12), B(165, 76, 145, 40, 'A-B-A 型\ncome came come', 'g', 12), B(10, 124, 145, 40, 'A-B-B 型\nmake made made', 'p', 12), B(165, 124, 145, 40, 'A-B-C 型\ngo went gone', 'r', 12), F('三つの形の一致のしかたで4つ')) },
  { note: 'A-A-A 型は、三つとも同じ形です。put・cut・set・let・hit・shut・cost・hurt・read。read はつづりが同じですが、過去形・過去分詞は発音が [red] になります。',
    add: S(H('A-A-A 型：三つとも同じ'), row(['put', 'cut', 'set'], 10, 34, 96, 28, 'b', 13, 6), row(['let', 'hit', 'shut'], 10, 68, 96, 28, 'b', 13, 6), row(['cost', 'hurt', 'read'], 10, 102, 96, 28, 'b', 13, 6), T(160, 152, 'read は発音が変わる：[riːd] → [red]', 12, C.red, true), F('つづりは1種類だけ')) },
  { note: 'A-B-A 型は、原形と過去分詞が同じ形です。come－came－come、become－became－become、run－ran－run。数が少ないので、この三つを覚えれば足ります。',
    add: S(H('A-B-A 型：最初と最後が同じ'), tbl([['原形', '過去形', '過去分詞'], ['come', 'came', 'come'], ['become', 'became', 'become'], ['run', 'ran', 'run']], 20, 38, [90, 100, 90], 34, 13, 'g', 'w'), F('三つだけ')) },
  { note: 'A-B-B 型は、過去形と過去分詞が同じ形で、不規則動詞でいちばん数が多い型です。make－made、buy－bought、teach－taught、think－thought、bring－brought、find－found、keep－kept、tell－told。',
    add: S(H('A-B-B 型：2番目と3番目が同じ'), tbl([['原形', '過去形・過去分詞'], ['make', 'made'], ['buy / bring', 'bought / brought'], ['teach / think', 'taught / thought'], ['keep / tell', 'kept / told']], 20, 34, [110, 170], 32, 12, 'p', 'w'), F('いちばん数が多い型')) },
  { note: 'A-B-C 型は、三つとも違う形です。go－went－gone、see－saw－seen、write－wrote－written、take－took－taken、eat－ate－eaten、give－gave－given、drink－drank－drunk。',
    add: S(H('A-B-C 型：三つとも違う'), tbl([['原形', '過去形', '過去分詞'], ['go', 'went', 'gone'], ['see', 'saw', 'seen'], ['write', 'wrote', 'written'], ['eat', 'ate', 'eaten'], ['drink', 'drank', 'drunk']], 20, 32, [90, 100, 90], 30, 12, 'r', 'w'), F('過去分詞を取りちがえない')) },
  { note: '❓入試で最も多い誤りは？ → 過去形と過去分詞の取りちがえです。見分け方は、過去形はそれだけで文の述語になれるが、過去分詞は have / has / had や be動詞といっしょでないと使えない、という点です。',
    add: S(H('❓過去形と過去分詞の見分け'), B(10, 34, 300, 28, '○ I went to Kyoto last year.（過去形は単独でOK）', 'g', 11), B(10, 68, 300, 28, '× I gone to Kyoto last year.', 'r', 12), B(10, 102, 300, 28, '○ I have gone to Kyoto.（have とセット）', 'b', 11), B(10, 136, 300, 28, '○ The letter was written by Tom.（be とセット）', 'b', 10), F('過去分詞は have / be といっしょ')) },
  { note: '❓なぜ三つ一組で声に出して覚えるのでしょう。→ 過去形だけを覚えても、現在完了や受け身を学んだときに使えない知識になってしまうからです。中3で同じ動詞を覚え直さずにすみます。',
    add: S(H('❓なぜ三つ一組？'), B(10, 36, 145, 44, '過去形だけ\nwent', 'w', 13), B(165, 36, 145, 44, '三つ一組\ngo-went-gone', 'g', 13), ar(82, 84, 82, 108, C.red), ar(238, 84, 238, 108, C.green), B(10, 112, 145, 44, '現在完了・受け身で\n使えない', 'r', 11), B(165, 112, 145, 44, '現在完了・受け身も\nそのまま使える', 'g', 11), F('覚え直しがいらない')) },
  { note: 'まとめです。不規則動詞は A-A-A・A-B-A・A-B-B・A-B-C の4つの型。-ed を付けて readed や buyed とするのは、規則動詞のきまりを広げすぎた誤りです。三つ一組で声に出して覚えましょう。',
    add: S(H('まとめ'), B(10, 32, 300, 28, 'A-A-A：put cut set let hit read', 'b', 12), B(10, 64, 300, 28, 'A-B-A：come become run', 'g', 12), B(10, 96, 300, 28, 'A-B-B：make buy teach find keep …', 'p', 12), B(10, 128, 300, 28, 'A-B-C：go see write take eat …', 'r', 12), B(10, 160, 300, 28, '× readed  × buyed  は作らない', 'w', 12), F('三つ一組で声に出す')) },
], '不規則動詞：四つの型'));

// ───────── s082 A-A-A 型 ─────────
add('koko_eigo_s082', 0, show([
  { note: '❓He put his bag there. は「置く」でしょうか「置いた」でしょうか。put は原形も過去形も同じ形なので、単語だけでは決まりません。決め手は文の中にあります。',
    add: S(H('❓「置く」？ 「置いた」？'), B(30, 40, 260, 40, 'He put his bag there.', 'm', 16), T(160, 106, '単語だけでは決まらない', 13, C.red, true), B(20, 130, 130, 40, '決め手は\n文の中にある', 'b', 12), B(170, 130, 130, 40, '手がかりは\nいくつかある', 'g', 12), F('put put put は形が同じ')) },
  { note: 'A-A-A 型の代表語です。put（置く）・cut（切る）・set（置く・設定する）・let（〜させる）・hit（打つ）・shut（閉める）・cost（費用がかかる）・hurt（傷つける・痛む）・read（読む）・spread（広がる）・quit（やめる）。',
    add: S(H('A-A-A 型の代表語'), tbl([['put 置く', 'cut 切る', 'set 置く'], ['let 〜させる', 'hit 打つ', 'shut 閉める'], ['cost かかる', 'hurt 傷つける', 'read 読む'], ['spread 広がる', 'quit やめる', '']], 8, 34, [102, 102, 102], 34, 11, 'b', 'w'), F('三つとも同じ形')) },
  { note: '❓なぜ -ed を付けないのでしょう。→ これらは語尾が t や d で終わる短い語が多く、もともと -ed を付けても発音がほとんど変わらないため、変化しない形が残ったと考えられています。putted・cutted・hitted・costed という形は存在しません。',
    add: S(H('❓-ed を付けてはいけない'), row(['putted', 'cutted', 'hitted', 'costed'], 8, 40, 72, 34, 'r', 12, 6), T(160, 94, '× どれも存在しない形', 13, C.red, true), B(20, 120, 280, 40, '語尾が t / d の短い語が多い', 'b', 13), F('規則動詞のつづり規則を持ちこまない')) },
  { note: '❓では現在か過去かは、どう決めるのでしょう。手がかり①は三単現の -s です。主語が三人称単数のとき、現在形なら -s が付き、過去形なら付きません。He puts his bag there every day. は現在、He put his bag there yesterday. は過去です。',
    add: S(H('❓手がかり①：三単現の -s'), B(10, 34, 300, 30, 'He puts his bag there every day.', 'g', 12), T(160, 78, '-s がある → 現在形', 12, C.green, true), B(10, 100, 300, 30, 'He put his bag there yesterday.', 'b', 12), T(160, 144, '-s がない → 過去形', 12, C.blue, true), F('主語が I / you / 複数のときは使えない')) },
  { note: '手がかり②は時を表す語句です。every day・usually・always があれば現在形、yesterday・last week・then・〜 ago があれば過去形です。I read a book every night. は現在、I read a book last night. は過去です。',
    add: S(H('手がかり②：時を表す語句'), B(10, 34, 145, 28, '現在形', 'g', 13), B(165, 34, 145, 28, '過去形', 'b', 13), B(10, 66, 145, 70, 'every day\nusually\nalways', 'g', 12), B(165, 66, 145, 70, 'yesterday\nlast week\n〜 ago / then', 'b', 12), F('文の中の語句で時制を決める')) },
  { note: 'read だけは、つづりが同じでも発音が変わります。I read a book every night. は [riːd]、I read a book last night. は [red]。つづりが同じなので、every night と last night という時を表す語句だけが手がかりです。',
    add: S(H('read は発音で時制が分かる'), B(10, 36, 300, 30, 'I read a book every night.', 'g', 13), B(110, 72, 100, 30, '[riːd]', 'g', 15), B(10, 116, 300, 30, 'I read a book last night.', 'b', 13), B(110, 152, 100, 30, '[red]', 'b', 15), F('時を表す語句が決め手')) },
  { note: '手がかり③です。助動詞や do / does / did のうしろは、つねに原形です。He did not cut the paper. や Can you shut the window? の cut と shut は、原形としての形です。',
    add: S(H('手がかり③：原形が来る場所'), B(10, 36, 300, 30, 'He did not cut the paper.', 'w', 13), B(10, 70, 300, 30, 'Can you shut the window?', 'w', 13), T(160, 124, 'did not / can のうしろ → 原形', 13, C.red, true), F('cut も shut も原形')) },
  { note: 'まとめです。A-A-A 型は形が変わらないので、①三単現の -s、②時を表す語句、③did / 助動詞のうしろは原形、の3つで時制を決めます。長文でも put・read・cost が出たら必ず確認しましょう。',
    add: S(H('まとめ'), B(10, 34, 300, 30, '① -s があれば現在形', 'g', 13), B(10, 68, 300, 30, '② every day / yesterday で決める', 'b', 13), B(10, 102, 300, 30, '③ did・can のうしろは原形', 'p', 13), B(10, 136, 300, 30, '④ read は発音も変わる', 'r', 13), F('形が同じ動詞は文の中で読む')) },
], 'A-A-A 型：形が同じ動詞の時制の決め方'));

// ───────── s083 A-B-A 型 ─────────
add('koko_eigo_s083', 0, show([
  { note: '❓come－came－come。最初と最後が同じ形にもどるので、どっちが過去形だったかわからなくなりがちです。でもこの型は、実質三つの動詞だけです。',
    add: S(H('❓最初と最後が同じ形'), row(['come', 'came', 'come'], 20, 44, 88, 44, ['w', 'r', 'w'], 16, 6), T(160, 108, '過去形は真ん中', 13, C.red, true), ar(160, 96, 160, 78, C.red), B(40, 128, 240, 40, 'この型は三つだけ', 'm', 14), F('三つ確実にすれば失点しない')) },
  { note: 'A-B-A 型の三語です。come－came－come（来る）、become－became－become（〜になる）、run－ran－run（走る・経営する）。become は come に接頭辞が付いた語なので、変化のしかたも come とそろっています。',
    add: S(H('A-B-A 型の三語'), tbl([['原形', '過去形', '過去分詞', '意味'], ['come', 'came', 'come', '来る'], ['become', 'became', 'become', '〜になる'], ['run', 'ran', 'run', '走る・経営する']], 6, 34, [76, 76, 80, 76], 34, 12, 'g', 'w'), F('become は come の仲間')) },
  { note: '例文で確かめましょう。過去形は真ん中の形です。She came here yesterday. / He ran to the station this morning. 過去分詞は have / has といっしょに使います。She has just come home. / I have run in this park many times.',
    add: S(H('過去形と過去分詞の使い分け'), B(10, 34, 145, 24, '過去形（単独で述語）', 'b', 11), B(165, 34, 145, 24, '過去分詞（have とセット）', 'g', 10), B(10, 64, 145, 44, 'She came here\nyesterday.', 'b', 11), B(165, 64, 145, 44, 'She has just\ncome home.', 'g', 11), B(10, 116, 145, 44, 'He ran to the station\nthis morning.', 'b', 10), B(165, 116, 145, 44, 'I have run in this\npark many times.', 'g', 10), F('came / ran は単独、come / run は have とセット')) },
  { note: '❓comed・becomed・runned と書くのはなぜ誤りなのでしょう。→ 不規則動詞に -ed を付けない、という原則を守っていないからです。これらは存在しない形です。迷ったら原形と見比べて、つづりが明らかにちがう形を選びます。',
    add: S(H('❓存在しない形'), row(['comed', 'becomed', 'runned'], 8, 40, 98, 36, 'r', 13, 4), T(160, 96, '× どれも存在しない', 13, C.red, true), B(20, 120, 280, 44, '不規則動詞に -ed を付けない', 'm', 14), F('原形と見比べると、つづりがちがう')) },
  { note: 'become のうしろには、名詞か形容詞が来ます。He became a famous singer.（名詞）／ The room became warm.（形容詞）。変化の種類によって、get warm や turn red のように動詞を使い分けることもあります。',
    add: S(H('become の使い方'), B(10, 36, 300, 30, 'He became a famous singer.', 'b', 13), T(160, 78, '名詞が続く', 12, C.blue, true), B(10, 98, 300, 30, 'The room became warm.', 'g', 13), T(160, 140, '形容詞が続く', 12, C.green, true), F('「〜になる」')) },
  { note: 'run は「走る」以外の意味も入試に出ます。My father runs a small restaurant.（経営している）、The bus runs every ten minutes.（走っている）、The river runs through the town.（流れている）。過去形はどれも ran です。',
    add: S(H('run の多様な意味'), B(10, 34, 300, 26, 'My father runs a small restaurant.', 'm', 11), T(160, 70, '経営している', 11, C.main, true), B(10, 88, 300, 26, 'The bus runs every ten minutes.', 'b', 11), T(160, 124, '走っている', 11, C.blue, true), B(10, 142, 300, 26, 'The river runs through the town.', 'g', 11), T(160, 178, '流れている', 11, C.green, true), F('過去形はどれも ran')) },
  { note: '❓Dinner is ready. － OK, I am coming. を「私は来ています」と訳すと変なのはなぜでしょう。→ come は「話し相手のいる方へ近づく」動詞だからです。日本語の「今行くよ」が、英語では come になります。',
    add: S(H('❓なぜ I am coming. が「今行く」？'), ci(60, 100, 26, 'I', C.main, FILL.warm, 14), ci(250, 100, 26, 'you', C.blue, FILL.blue, 12), ar(90, 100, 218, 100, C.main), T(155, 80, 'come：相手の方へ', 12, C.main, true), B(20, 150, 280, 34, 'OK, I am coming. ＝ 今行くよ', 'm', 13), F('話し相手のいる方へ近づく')) },
  { note: 'まとめです。A-B-A 型は come・become・run の三つ。過去形は真ん中の形（came・became・ran）。comed や runned は存在しません。become のうしろは名詞か形容詞です。',
    add: S(H('まとめ'), B(10, 34, 300, 30, 'come - came - come', 'g', 14), B(10, 68, 300, 30, 'become - became - become', 'g', 14), B(10, 102, 300, 30, 'run - ran - run', 'g', 14), B(10, 138, 300, 30, '× comed  × becomed  × runned', 'r', 13), F('過去形は真ん中、-ed は付けない')) },
], 'A-B-A 型：come・become・run'));

// ───────── s084 A-B-B 型 ─────────
add('koko_eigo_s084', 2, show([
  { note: '❓A-B-B 型は不規則動詞でいちばん数が多い型です。意味で一つずつ覚えると孤立してしまいます。では、どう覚えると速いのでしょう。→ 音の終わり方が似たものを、グループでまとめます。',
    add: S(H('❓数が多い型をどう覚える？'), B(20, 34, 280, 28, 'A-B-B 型は数がいちばん多い', 'm', 13), B(10, 72, 145, 40, '① -ought / -aught\nbought taught', 'b', 11), B(165, 72, 145, 40, '② 語尾が -t\nkept left', 'g', 11), B(10, 120, 145, 40, '③ 母音が変わる\nfound met', 'p', 11), B(165, 120, 145, 40, '④ -old / -aid\ntold said', 'r', 11), F('音の似たものを4グループに')) },
  { note: '①-ought / -aught のグループです。buy－bought、think－thought、bring－brought、fight－fought、teach－taught、catch－caught。つづりは二通りですが、発音はどれも同じ [ɔːt] です。teach と catch だけが aught です。',
    add: S(H('① ought / aught（音は [ɔːt]）'), row(['buy', 'think', 'bring'], 8, 34, 98, 30, 'b', 12, 4), row(['bought', 'thought', 'brought'], 8, 66, 98, 30, 'b', 12, 4), row(['fight', 'teach', 'catch'], 8, 104, 98, 30, 'p', 12, 4), row(['fought', 'taught', 'caught'], 8, 136, 98, 30, 'p', 12, 4), F('teach と catch だけ aught')) },
  { note: '②語尾が -t になるグループです。keep－kept、sleep－slept、leave－left、feel－felt、mean－meant、build－built、send－sent、spend－spent、lose－lost。',
    add: S(H('② 語尾が -t になる'), tbl([['keep → kept', 'sleep → slept', 'leave → left'], ['feel → felt', 'mean → meant', 'build → built'], ['send → sent', 'spend → spent', 'lose → lost']], 8, 38, [102, 102, 102], 40, 11, 'g', 'g'), F('d や ve が t にかわる')) },
  { note: '③母音が変わるグループと、④ -old / -aid のグループです。find－found、meet－met、win－won、hold－held、sit－sat、stand－stood、hear－heard、get－got。tell－told、sell－sold、say－said、pay－paid。said は [sed]、paid は [peɪd] と読みます。',
    add: S(H('③ 母音が変わる ／ ④ old・aid'), B(10, 34, 300, 22, '③ 母音が変わる', 'p', 11), tbl([['find → found', 'meet → met', 'win → won'], ['hold → held', 'sit → sat', 'stand → stood']], 8, 60, [102, 102, 102], 32, 10, 'p', 'p'), B(10, 134, 300, 22, '④ -old / -aid', 'r', 11), tbl([['tell → told', 'sell → sold'], ['say → said', 'pay → paid']], 8, 160, [152, 152], 30, 11, 'r', 'r'), F('said は [sed]')) },
  { note: '❓なぜ音のグループで覚えると速いのでしょう。→ 思い出すときの手がかりが「意味」と「音」の二本になるからです。buy－bought を一つ思い出せば、同じ音の think－thought や bring－brought が芋づる式に出てきます。',
    add: S(H('❓なぜ音で覚えると速い？'), B(10, 36, 145, 44, '意味だけ\n（手がかり1本）', 'w', 12), B(165, 36, 145, 44, '意味 ＋ 音\n（手がかり2本）', 'g', 12), ar(238, 84, 238, 104, C.green), B(60, 108, 200, 28, 'buy-bought を思い出す', 'b', 12), ar(160, 138, 160, 154, C.blue), B(20, 156, 280, 28, 'think-thought  bring-brought も出てくる', 'g', 11), F('芋づる式に思い出せる')) },
  { note: '次に say / tell / speak / talk の使い分けです。say は「言った内容」に重点があり、うしろに言葉や that 節が来ます。tell は「伝える相手」に重点があり、〈tell＋人＋内容〉の語順をとります。',
    add: S(H('say と tell：重点がちがう'), B(10, 34, 145, 26, 'say：内容に重点', 'b', 12), B(165, 34, 145, 26, 'tell：相手に重点', 'm', 12), B(10, 66, 145, 44, 'He said something\nto me.', 'b', 11), B(165, 66, 145, 44, 'He told me\nthe truth.', 'm', 11), T(82, 126, '人は to でつなぐ', 12, C.blue, true), T(238, 126, '人を直接続ける', 12, C.main, true), B(10, 146, 300, 28, '× He said me something.', 'r', 12), F('say の後ろに人は直接続かない')) },
  { note: '❓なぜ say は人を直接とれないのでしょう。→ say は「言った内容」に重点があり、相手を示すには to が要るからです。tell は相手に重点があるので、〈tell＋人＋内容〉の語順になります。speak は一方的に話す・言語を話す、talk は話し合う、と重点がちがいます。',
    add: S(H('❓なぜ say は人を直接とれない？'), tbl([['動詞', '重点', '例'], ['say', '言った内容', 'say something to me'], ['tell', '伝える相手', 'tell me the truth'], ['speak', '一方的・言語', 'speak English'], ['talk', '話し合う', 'talk about the plan']], 4, 32, [60, 90, 154], 34, 11, 'm', 'w'), F('人が直接続くなら tell、内容なら say')) },
  { note: '確かめのしかたです。①音のグループで三つ一組で言えるか。②-ed を付けていないか（× teached → taught）。③人が直接続くなら tell、内容が続くなら say。まとめると、音でまとめて覚え、say は内容・tell は相手です。',
    add: S(H('確かめとまとめ'), B(10, 34, 300, 28, '① 音のグループで三つ一組で言える', 'b', 12), B(10, 66, 300, 28, '② × teached → ○ taught', 'r', 13), B(10, 98, 300, 28, '③ 人が直接続く → tell ／ 内容 → say', 'm', 12), B(10, 130, 300, 28, '④ speak：言語 ／ talk：話し合う', 'g', 12), F('音でまとめる・say は内容・tell は相手')) },
], 'A-B-B 型：音のグループと say / tell'));

// ───────── s085 まぎらわしいペア ─────────
add('koko_eigo_s085', 0, show([
  { note: '❓「彼は手をあげた」を He rose his hand. と書くと不正解です。なぜでしょう。→ rise は目的語を取らない動詞で、「〜を上げる」と言いたいときは raise を使うからです。',
    add: S(H('❓なぜ He rose his hand. は×？', C.red), B(10, 40, 300, 34, '× He rose his hand.', 'r', 15), T(160, 92, 'rose = rise の過去形（目的語を取らない）', 12, C.red, true), B(10, 112, 300, 34, '○ He raised his hand.', 'g', 15), T(160, 164, 'raised = raise の過去形（目的語を取る）', 12, C.green, true), F('意味より「〜を」があるかで選ぶ')) },
  { note: '見分けは、うしろに目的語（〜を）が続くかどうかです。rise は目的語なし、raise は目的語あり。Prices rose sharply last year.（物価が上がった）と He raised his hand to ask a question.（手をあげた）で確かめます。',
    add: S(H('目的語の有無で切り分ける'), B(10, 34, 145, 26, 'rise（目的語なし）', 'b', 12), B(165, 34, 145, 26, 'raise（目的語あり）', 'm', 12), B(10, 66, 145, 56, 'Prices rose\nsharply last year.', 'b', 11), B(165, 66, 145, 56, 'He raised his hand\nto ask a question.', 'm', 11), T(82, 138, '自分が上がる', 12, C.blue, true), T(238, 138, '〜を上げる・育てる', 12, C.main, true), F('raise は規則動詞（raised-raised）')) },
  { note: 'lie と lay も同じ関係です。lie－lay－lain は「横になる・ある」で目的語なし。lay－laid－laid は「〜を置く・横たえる」で目的語あり。The town lies at the foot of the mountain. / He laid the baby on the bed. です。',
    add: S(H('lie と lay'), tbl([['', '変化', '意味', '目的語'], ['lie', 'lay - lain', '横になる・ある', 'なし'], ['lay', 'laid - laid', '置く・横たえる', 'あり']], 4, 36, [44, 90, 100, 70], 28, 11, 'b', 'w'), B(10, 130, 300, 30, 'The town lies at the foot of the mountain.', 'b', 10), B(10, 166, 300, 30, 'He laid the baby on the bed.', 'm', 11), F('変化がまったくちがう')) },
  { note: '❓最大のわなは何でしょう。→ lie の過去形が lay で、lay の原形とまったく同じつづりになることです。She lay on the sofa for an hour. の lay は「横になっていた」（lie の過去形）です。目的語の有無で判断します。',
    add: S(H('❓最大のわな：lay が2つ'), B(10, 36, 145, 34, 'lie の過去形 lay', 'b', 12), B(165, 36, 145, 34, 'lay の原形 lay', 'm', 12), B(10, 80, 145, 56, 'She lay on the sofa\nfor an hour.', 'b', 11), B(165, 80, 145, 56, 'I lay the baby\non the bed.（原形）', 'm', 10), T(82, 152, '目的語なし → 横になっていた', 10, C.blue, true), T(238, 152, 'the baby が目的語', 11, C.main, true), F('つづりは同じでも目的語で見分ける')) },
  { note: '別の語にも注意しましょう。lie には「うそをつく」という別の語があり、lie－lied－lied と規則的に変化します。find－found－found（見つける）と、found－founded－founded（設立する）も、つづりが同じ found で別の動詞です。',
    add: S(H('同じつづりの別の語'), B(10, 34, 300, 26, 'lie（うそをつく）', 'r', 12), B(10, 64, 300, 28, 'lie - lied - lied（規則動詞）', 'r', 13), B(10, 104, 300, 26, 'find（見つける） ／ found（設立する）', 'b', 11), B(10, 134, 145, 28, 'find-found-found', 'b', 12), B(165, 134, 145, 28, 'found-founded-founded', 'm', 10), F('文の意味で判断する')) },
  { note: 'さらに fall－fell－fallen（落ちる）、feel－felt－felt（感じる）、fill－filled－filled（満たす）は形が似ていますが、別の動詞です。sit－sat－sat（すわる・目的語なし）と set－set－set（置く・目的語あり）も同じ関係です。',
    add: S(H('似ている動詞を区別'), tbl([['fall', 'fell - fallen', '落ちる'], ['feel', 'felt - felt', '感じる'], ['fill', 'filled - filled', '満たす（規則）'], ['sit', 'sat - sat', 'すわる（目的語なし）'], ['set', 'set - set', '置く（目的語あり）']], 8, 32, [60, 108, 136], 32, 11, 'm', 'w'), F('三つ一組で覚える')) },
  { note: 'まとめです。まぎらわしいペアは意味ではなく、うしろに目的語があるかで切り分けます。rise と raise、lie と lay、sit と set。変化の三つ一組と、目的語の有無の2点をセットで覚えましょう。',
    add: S(H('まとめ'), B(10, 34, 300, 30, '目的語なし：rise / lie / sit', 'b', 13), B(10, 68, 300, 30, '目的語あり：raise / lay / set', 'm', 13), B(10, 102, 300, 30, 'lie の過去形 lay に注意', 'r', 13), B(10, 136, 300, 30, 'lied / found / fell / felt も別の語', 'g', 12), F('三つ一組 ＋ 目的語の有無')) },
], 'まぎらわしい動詞のペア'));

// ───────── s086 入試での問われ方 ─────────
add('koko_eigo_s086', 0, show([
  { note: '❓I read the book last night. この read を [riːd] と読むか [red] と読むかで、何がわかるのでしょう。→ 時制をつかめているかです。不規則動詞は、文全体の時間関係を読む力とつながっています。',
    add: S(H('❓read は何と読む？'), B(20, 40, 280, 38, 'I read the book last night.', 'm', 14), B(20, 96, 120, 40, '[riːd] ?', 'w', 16), B(180, 96, 120, 40, '[red] ?', 'w', 16), F('読み分けられれば時制が分かっている')) },
  { note: '答えは、時を表す語句で決まります。every night なら現在の習慣なので [riːd]、last night なら過去なので [red] です。つづりが同じなので、時を表す語句だけが手がかりです。',
    add: S(H('時を表す語句で決まる'), B(10, 36, 300, 30, 'I read the book every night.', 'g', 13), B(100, 72, 120, 28, '[riːd]：現在', 'g', 12), B(10, 116, 300, 30, 'I read the book last night.', 'b', 13), B(100, 152, 120, 28, '[red]：過去', 'b', 12), F('音読で読み分けられるか')) },
  { note: '母音が短くなる語もねらわれます。read [riːd] → read [red]、mean [miːn] → meant [ment]、keep [kiːp] → kept [kept]、feel [fiːl] → felt [felt]、say [seɪ] → said [sed]、hear → heard [hɜːrd]。',
    add: S(H('母音が短くなる'), tbl([['原形', '過去形'], ['read [riːd]', 'read [red]'], ['mean [miːn]', 'meant [ment]'], ['keep [kiːp]', 'kept [kept]'], ['feel [fiːl]', 'felt [felt]'], ['say [seɪ]', 'said [sed]']], 20, 30, [140, 140], 30, 12), F('語末に子音がふえると母音が短くなりやすい')) },
  { note: '❓つづりから予想しにくい音もあります。bought・thought・brought・taught・caught はすべて [ɔːt] で終わり、gh は発音しません。paid [peɪd]、lost [lɔːst]、won [wʌn]（one と同じ音）、done [dʌn]、come [kʌm] も要注意です。',
    add: S(H('❓つづりから予想しにくい音'), row(['bought', 'thought', 'brought'], 8, 34, 98, 28, 'b', 12, 4), row(['taught', 'caught'], 8, 66, 98, 28, 'b', 12, 4), T(160, 112, 'どれも [ɔːt]（gh は読まない）', 12, C.blue, true), row(['won [wʌn]', 'done [dʌn]', 'come [kʌm]'], 8, 130, 98, 28, 'r', 11, 4), T(160, 176, 'won は one と同じ音', 12, C.red, true), F('声に出して覚える')) },
  { note: '入試の問われ方①は語形変化です。手順は、①時を表す語句を探す。②主語が三人称単数かを見る。③did・can・will・to のうしろは原形。He （teach） us English last year. なら taught、every year なら teaches、did not のうしろなら teach です。',
    add: S(H('問われ方①：語形変化'), tbl([['文', '答え'], ['He (teach) us English last year.', 'taught'], ['He (teach) us English every year.', 'teaches'], ['He did not (teach) us English.', 'teach']], 4, 36, [220, 84], 40, 11, 'm', 'w'), F('時の語句 → 主語 → 原形かどうか')) },
  { note: '問われ方②は発音、③は誤文訂正です。誤文訂正では buyed・teached・readed・costed のような規則動詞化した誤りや、I gone there のような過去形と過去分詞の取りちがえが材料になります。',
    add: S(H('問われ方②③：発音と誤文訂正'), B(10, 34, 300, 26, '② 下線部の発音（[t][d][id]、read、said）', 'b', 11), B(10, 68, 300, 26, '③ 誤文訂正', 'm', 12), row(['buyed', 'teached', 'readed', 'costed'], 8, 104, 72, 28, 'r', 11, 6), T(160, 150, '× 規則動詞化した誤り', 12, C.red, true), B(40, 168, 240, 28, '× I gone there → ○ I went there', 'g', 11), F('三つ一組で覚えれば防げる')) },
  { note: 'まとめです。①read は現在 [riːd]、過去 [red]。②bought などは [ɔːt]、said は [sed]。③cost・put・hit に -ed は付けない。④過去形は単独、過去分詞は have や be とセット。⑤did・can・will のうしろは原形。',
    add: S(H('まとめ'), B(10, 32, 300, 28, '① read：現在 [riːd] ／ 過去 [red]', 'b', 12), B(10, 64, 300, 28, '② said [sed]・paid [peɪd]・bought [ɔːt]', 'p', 11), B(10, 96, 300, 28, '③ cost・put・hit に -ed は付けない', 'r', 12), B(10, 128, 300, 28, '④ 過去分詞は have / be とセット', 'g', 12), B(10, 160, 300, 28, '⑤ did・can・will のうしろは原形', 'm', 12), F('覚え直しは「覚えていない語」だけ')) },
], '不規則動詞：発音と問われ方'));

// ───────── s088 ing 形のつづり変化 ─────────
add('koko_eigo_s088', 0, show([
  { note: '❓swim に ing を付けると swiming ではなく swimming、make は makeing ではなく making になります。なぜでしょう。-ed と同じで、「読み方が変わってしまわないように」という一つの理由で説明がつきます。',
    add: S(H('❓なぜつづりが変わる？'), B(10, 36, 145, 30, 'swim → swiming ×', 'r', 12), B(165, 36, 145, 30, 'swim → swimming ○', 'g', 12), B(10, 76, 145, 30, 'make → makeing ×', 'r', 12), B(165, 76, 145, 30, 'make → making ○', 'g', 12), B(30, 126, 260, 40, '理由は「読み方を守る」こと', 'm', 14), F('理由から入れば覚える量が減る')) },
  { note: '原則は、そのまま -ing です。play → playing、watch → watching、read → reading。y で終わる語も、-ed と違って y をそのまま残します。study → studying、carry → carrying。studiing は誤りです。',
    add: S(H('① 原則：そのまま -ing'), row(['play → playing', 'watch → watching', 'read → reading'], 6, 34, 102, 30, 'w', 10, 4), B(10, 80, 300, 28, 'y で終わる語も y のまま', 'b', 12), row(['study → studying', 'carry → carrying', 'enjoy → enjoying'], 6, 114, 102, 30, 'b', 10, 4), T(160, 170, '× studiing', 13, C.red, true), F('-ed では y → i、-ing では y のまま')) },
  { note: '❓発音しない e で終わる語は？ → e を取って -ing です。make → making、come → coming、write → writing、use → using。語末の e はもともと読まない字なので、-ing を付けるときに落とします。',
    add: S(H('② 発音しない e は取る'), row(['make', 'come', 'write', 'use'], 8, 36, 72, 28, 'w', 12, 6), T(160, 76, '↓ e を取って -ing', 12, C.main, true), row(['making', 'coming', 'writing', 'using'], 8, 90, 72, 28, 'g', 12, 6), T(160, 142, '× makeing  × comeing  × writeing', 12, C.red, true), F('語末の e は読まない字')) },
  { note: '❓ただし、e を取らない語もあります。see → seeing、agree → agreeing、be → being。これらの e は発音に関わっているので落としません。seing や beeing と書くのはどちらも誤りです。',
    add: S(H('❓e を残す語'), row(['see', 'agree', 'be'], 20, 40, 88, 32, 'b', 14, 8), T(160, 90, '↓ e は発音に関わる', 12, C.blue, true), row(['seeing', 'agreeing', 'being'], 20, 104, 88, 32, 'b', 14, 8), T(160, 156, '× seing  × beeing', 13, C.red, true), F('e を残すのは see / agree / be')) },
  { note: '短母音＋子音字1つで、その音節にアクセントがあれば子音字を重ねます。run → running、swim → swimming、sit → sitting、stop → stopping、begin → beginning。-ed のときと同じ条件です。visit → visiting、open → opening、listen → listening はアクセントが前なので重ねません。',
    add: S(H('③ 子音字を重ねる'), B(10, 34, 300, 26, '短母音 ＋ 子音字1つ ＋ アクセントあり', 'm', 12), row(['run → running', 'swim → swimming', 'begin → beginning'], 6, 68, 102, 30, 'r', 10, 4), B(10, 112, 300, 26, 'アクセントが前 → 重ねない', 'b', 12), row(['visit → visiting', 'open → opening', 'listen → listening'], 6, 146, 102, 30, 'b', 10, 4), F('-ed のときと同じ条件')) },
  { note: '❓ie で終わる語は？ → ie を y に変えて -ing です。die → dying、lie → lying、tie → tying。なぜなら、そのまま -ing を付けると dieing や diing のように、読みにくい形になってしまうからです。',
    add: S(H('④ ie で終わる語'), row(['die', 'lie', 'tie'], 20, 40, 88, 32, 'p', 14, 8), T(160, 90, '↓ ie を y に変えて -ing', 12, C.purple, true), row(['dying', 'lying', 'tying'], 20, 104, 88, 32, 'p', 14, 8), T(160, 156, '× dieing  × lieing  × diing', 12, C.red, true), F('i が二つ続く形をさける')) },
  { note: '❓-ed と -ing で、y の扱いがちがうのはなぜでしょう。→ -ing では、y を i に変えると i が二つ続いて studiing のようになってしまいます。それを避けるため y のまま残します。-ed は i が重ならないので y → i に変えられます。',
    add: S(H('❓y の扱いが -ed と -ing でちがう'), tbl([['原形', '-ed', '-ing'], ['play', 'played', 'playing'], ['study', 'studied\n(y → i)', 'studying\n(y のまま)'], ['carry', 'carried', 'carrying'], ['like', 'liked', 'liking']], 8, 32, [80, 112, 112], 34, 11), F('i が重なる形をさける')) },
  { note: 'まとめです。①原則そのまま -ing（y もそのまま）。②発音しない e は取る（see・agree・be は残す）。③短母音＋子音字1つでアクセントがあれば重ねる。④ie は y に変える。アクセントの位置は、begin（後ろ）と listen（前）で確かめます。',
    add: S(H('まとめ'), B(10, 32, 300, 28, '① そのまま -ing（y も そのまま）', 'm', 12), B(10, 64, 300, 28, '② e を取る（see / agree / be は残す）', 'g', 12), B(10, 96, 300, 28, '③ 重ねる（run → running）', 'r', 13), B(10, 128, 300, 28, '④ ie → y（die → dying）', 'p', 13), B(10, 160, 300, 28, 'begin は後ろ ／ listen は前にアクセント', 'w', 11), F('理由は「読み方を守る」こと')) },
], 'ing 形のつづり：4つのきまり'));

// ───────── s089 現在進行形の否定・疑問 ─────────
add('koko_eigo_s089', 0, show([
  { note: '❓進行形の否定文・疑問文は、どう作るのでしょう。→ 進行形は〈be動詞＋ing形〉の文なので、be動詞の文として扱います。be動詞を動かせばよく、do や does は使いません。',
    add: S(H('❓進行形の否定・疑問'), row(['主語', 'be動詞', 'ing形'], 20, 40, 88, 34, ['w', 'r', 'g'], 13, 8), T(160, 94, 'be動詞が中心の文', 13, C.red, true), B(20, 116, 130, 40, '否定：not を\nうしろに置く', 'b', 11), B(170, 116, 130, 40, '疑問：be動詞を\n前に出す', 'b', 11), F('Do / Does は使わない')) },
  { note: '否定文は、be動詞のうしろに not を置きます。I am not watching TV. / He is not (isn\'t) studying now. / They are not (aren\'t) playing outside.',
    add: S(H('否定文：be動詞 ＋ not ＋ ing'), row(['I', 'am', 'not', 'watching TV'], 8, 36, 72, 34, ['w', 'r', 'm', 'g'], 11, 6), row(['He', 'is', 'not', 'studying'], 8, 82, 72, 34, ['w', 'r', 'm', 'g'], 11, 6), row(['They', 'are', 'not', 'playing'], 8, 128, 72, 34, ['w', 'r', 'm', 'g'], 11, 6), F('not は be動詞のうしろ')) },
  { note: '疑問文は、be動詞を主語の前に出します。Are you listening to me? / Is she waiting for us? / Are they having lunch? 動詞のしくみは、ふつうの be動詞の文と同じです。',
    add: S(H('疑問文：be動詞を前に出す'), B(10, 34, 300, 28, 'You are listening to me.', 'w', 12), ar(160, 64, 160, 80, C.red), row(['Are', 'you', 'listening', 'to me?'], 8, 84, 72, 34, ['r', 'w', 'g', 'w'], 11, 6), row(['Is', 'she', 'waiting', 'for us?'], 8, 130, 72, 34, ['r', 'w', 'g', 'w'], 11, 6), F('be動詞が先頭へ')) },
  { note: '❓答え方は？ → be動詞でそろえます。Yes, I am. / No, I am not. / Yes, she is. / No, she isn\'t. ただし肯定の答えでは短縮形にできません。× Yes, I\'m. × Yes, she\'s. は誤りです。否定の答えなら No, she isn\'t. のように短縮できます。',
    add: S(H('❓答え方：be動詞でそろえる'), B(10, 34, 300, 28, 'Are you listening to me?', 'b', 12), B(20, 68, 130, 28, 'Yes, I am.', 'g', 13), B(170, 68, 130, 28, 'No, I am not.', 'w', 13), B(20, 112, 130, 28, '× Yes, I\'m.', 'r', 13), B(170, 112, 130, 28, '○ No, she isn\'t.', 'g', 13), F('肯定の答えは短縮できない')) },
  { note: '疑問詞があるときは、〈疑問詞＋be動詞＋主語＋ing形〉です。What are you doing? / Where is he going? / Why are they running? ただし疑問詞が主語そのものをたずねるときは、語順を変えません。Who is playing the piano?',
    add: S(H('疑問詞があるとき'), row(['What', 'are', 'you', 'doing?'], 8, 34, 72, 32, ['p', 'r', 'w', 'g'], 11, 6), row(['Where', 'is', 'he', 'going?'], 8, 74, 72, 32, ['p', 'r', 'w', 'g'], 11, 6), B(10, 124, 300, 28, 'Who is playing the piano?', 'p', 12), T(160, 166, 'Who が主語 → 語順そのまま', 12, C.purple, true), F('疑問詞 ＋ 疑問文の語順')) },
  { note: '❓What are you doing? と聞かれて I do my homework. と答えると、なぜずれるのでしょう。→ do my homework は「ふだんする」という習慣の意味になってしまうからです。質問が進行形なら、答えも進行形の I am doing my homework. にそろえます。',
    add: S(H('❓聞かれた形にそろえて答える'), B(10, 34, 300, 28, 'What are you doing?', 'b', 13), B(10, 72, 300, 30, '× I do my homework.（習慣になる）', 'r', 12), B(10, 110, 300, 30, '○ I am doing my homework.', 'g', 13), T(160, 160, '質問が進行形 → 答えも進行形', 12, C.green, true), F('今していることを答える')) },
  { note: 'What are you doing? は「今何をしているところですか」、What do you do? は「ふだん何をしていますか／職業は何ですか」です。形が一字ちがうだけで意味が大きく変わるので、会話文の空所補充でねらわれます。',
    add: S(H('形が似ていて意味がちがう'), B(10, 34, 145, 40, 'What are you\ndoing?', 'b', 12), B(165, 34, 145, 40, 'What do you\ndo?', 'm', 12), ar(82, 78, 82, 100, C.blue), ar(238, 78, 238, 100, C.main), B(10, 104, 145, 40, '今、何を\nしているところ？', 'b', 11), B(165, 104, 145, 40, 'ふだん何を？\n職業は？', 'm', 11), F('be動詞があれば「今」')) },
  { note: 'まとめです。①否定は be動詞の後ろに not。②疑問は be動詞を前に出す。③答えも be動詞でそろえ、Yes の答えは短縮しない。④進行形の質問には進行形で答える。進行形の疑問文に Yes, I do. と答えるのは誤りです。',
    add: S(H('まとめ'), B(10, 32, 300, 28, '① 否定：be動詞 ＋ not ＋ ing', 'm', 13), B(10, 64, 300, 28, '② 疑問：Be動詞 ＋ 主語 ＋ ing', 'b', 13), B(10, 96, 300, 28, '③ 答え：Yes, I am.（短縮しない）', 'g', 13), B(10, 128, 300, 28, '④ 質問が進行形 → 答えも進行形', 'r', 12), B(10, 160, 300, 28, '× Yes, I do. は誤り', 'w', 13), F('be動詞を確認してから答える')) },
], '進行形の否定・疑問と答え方'));

// ───────── s095 過去進行形 入試の出方 ─────────
add('koko_eigo_s095', 0, show([
  { note: '❓並べかえ問題で was と ing 形が配られたら、何の合図でしょう。→ 過去進行形を作らせる合図です。語順をひとつまちがえると0点になるので、手順を決めておきます。',
    add: S(H('❓配られた語を見る'), row(['what', 'was', 'he', 'doing', 'then'], 8, 40, 56, 34, ['p', 'r', 'w', 'g', 'w'], 12, 6), T(160, 94, 'was / were と ing 形がある', 13, C.red, true), B(20, 116, 280, 40, '→ 過去進行形の文だ！', 'm', 14), F('まず、合図の語を見つける')) },
  { note: '手順は4つです。①was / were と ing 形があるか確認する。②〈主語＋was / were＋ing形〉のかたまりを先に作る。③疑問詞があれば先頭に置き、be動詞と主語をひっくり返す。④残りの語を、目的語、場所、時の順に並べます。',
    add: S(H('並べかえの4手順'), B(15, 32, 290, 28, '① was / were と ing 形を探す', 'm', 12), ar(160, 60, 160, 66, C.gray), B(15, 68, 290, 28, '② 〈主語＋was/were＋ing〉を作る', 'b', 12), ar(160, 96, 160, 102, C.gray), B(15, 104, 290, 28, '③ 疑問詞を先頭に・be動詞と主語を入れかえ', 'g', 11), ar(160, 132, 160, 138, C.gray), B(15, 140, 290, 28, '④ 目的語 → 場所 → 時の順', 'p', 12), F('述語のかたまりを先に作る')) },
  { note: '例題1です。（what / was / he / doing / then）。②かたまりは he was doing。③疑問詞 What を先頭に置いて was と he を入れかえ、What was he doing。④残りの then を最後に置いて、What was he doing then? です。',
    add: S(H('例題1：疑問詞のある文'), row(['what', 'was', 'he', 'doing', 'then'], 8, 34, 56, 30, ['p', 'r', 'w', 'g', 'w'], 11, 6), T(160, 84, '↓ 疑問詞を先頭に、was と he を入れかえる', 11, C.ink, true), row(['What', 'was', 'he', 'doing', 'then?'], 8, 98, 56, 30, ['p', 'r', 'w', 'g', 'w'], 11, 6), T(160, 148, 'was なので主語は I か三人称単数（he で正しい）', 11, C.red, true), F('were が配られたら主語は you か複数')) },
  { note: '例題2です。（were / when / came / they / I / home / playing / soccer）。続いていた動作は過去進行形、割りこんだ出来事は過去形です。They were playing soccer when I came home. when 節を前に置くときはコンマが必要です。',
    add: S(H('例題2：続いた動作と割りこんだ出来事'), B(10, 34, 140, 40, 'They were\nplaying soccer', 'b', 11), B(170, 34, 140, 40, 'when I\ncame home.', 'r', 11), T(80, 90, '続いていた動作', 11, C.blue, true), T(240, 90, '割りこんだ出来事', 11, C.red, true), T(80, 106, '過去進行形', 12, C.blue, true), T(240, 106, '過去形', 12, C.red, true), B(10, 134, 300, 30, 'When I came home, they were playing soccer.', 'w', 10), F('when 節を前に置くときはコンマ')) },
  { note: '例題3です。（not / she / was / listening / to / me）。not は be動詞のうしろに置くので、She was not listening to me. になります。過去進行形の否定に did not は使いません。',
    add: S(H('例題3：否定文'), row(['She', 'was', 'not', 'listening', 'to me'], 4, 40, 60, 34, ['w', 'r', 'm', 'g', 'w'], 10, 4), T(160, 94, 'not は be動詞のうしろ', 13, C.main, true), B(40, 118, 240, 30, '× She did not was listening …', 'r', 12), F('did not は使わない')) },
  { note: '書き終えたら、三点を確認します。①be動詞と主語が合っているか（I・he・she・it・単数は was、you・we・they・複数は were）。②ing 形のつづり。③時を示す語句と時制が合っているか。',
    add: S(H('書いたあとの三点チェック'), B(10, 34, 300, 36, '① be動詞と主語\nI/he/she/it → was ／ you/we/they → were', 'b', 10), B(10, 76, 300, 36, '② ing 形のつづり\nmaking・running・dying・studying', 'g', 10), B(10, 118, 300, 36, '③ 時の語句と時制\nthen・at that time → 過去進行形', 'm', 10), F('つづりのミスは減点される')) },
  { note: '❓主語が長いとき、was と were はどう決めるのでしょう。→ 前置詞句を外して中心語だけを見ます。The students in my class were talking loudly. は、中心語が students（複数）なので were です。',
    add: S(H('❓主語が長いときの be動詞'), row(['The students', 'in my class', 'were', 'talking'], 6, 40, 74, 34, ['g', 'w', 'r', 'w'], 10, 6), T(52, 92, '中心語', 11, C.green, true), T(150, 92, '外して考える', 11, C.gray, true), B(30, 112, 260, 34, 'students は複数 → were', 'r', 13), F('前置詞句は主語の中心ではない')) },
  { note: 'まとめです。①並べかえはまず was / were と ing 形のかたまり。②続いた動作は過去進行形、割りこんだ出来事は過去形。③not は be動詞のうしろ。④書いたあとの三点（be動詞と主語・ing のつづり・時制）を確認します。',
    add: S(H('まとめ'), B(10, 34, 300, 30, '① かたまり〈was/were＋ing〉を先に', 'm', 12), B(10, 68, 300, 30, '② 続いた動作＝進行形／割りこみ＝過去形', 'b', 11), B(10, 102, 300, 30, '③ not は be動詞のうしろ', 'g', 13), B(10, 136, 300, 30, '④ 三点チェックで見直す', 'p', 13), F('述語のかたまりが決まれば残りは自然に並ぶ')) },
], '過去進行形：並べかえと三点チェック'));

// ───────── s097 進行形になると意味が変わる動詞 ─────────
add('koko_eigo_s097', 0, show([
  { note: '❓I am having lunch. は正しい英語です。have は状態動詞のはずなのに、なぜ進行形にできるのでしょう。実は have には「持っている」という状態の顔と、「食べる」という動作の顔があります。',
    add: S(H('❓have は進行形にできるの？'), B(10, 36, 145, 40, 'I have two\nbrothers.', 'b', 12), B(165, 36, 145, 40, 'I am having\nlunch.', 'g', 12), T(82, 92, '持っている＝状態', 12, C.blue, true), T(238, 92, '食べる＝動作', 12, C.green, true), B(10, 112, 145, 34, '進行形にしない', 'r', 12), B(165, 112, 145, 34, '進行形にできる', 'g', 12), F('同じ have でも二つの顔')) },
  { note: '❓どうやって見分けるのでしょう。→ 「その動作を今まさに続けているところだ」と言えるかどうかで判断します。食べることは続けられますが、持っていることは「続けている動作」とは言えません。',
    add: S(H('❓見分ける問い'), B(30, 34, 260, 34, '今まさに続けている動作と言える？', 'm', 13), ar(100, 70, 80, 96, C.green), ar(220, 70, 240, 96, C.red), B(10, 100, 145, 40, '言える\n（食べる・過ごす）', 'g', 11), B(165, 100, 145, 40, '言えない\n（持っている）', 'r', 11), B(10, 150, 145, 30, '進行形OK', 'g', 12), B(165, 150, 145, 30, '現在形', 'r', 12), F('意味で判断する')) },
  { note: 'see も二つの顔を持ちます。「見える」は状態なので進行形にしません（I see a bird in the tree.）。「会う・診てもらう」は動作なので進行形にできます（I am seeing my dentist this afternoon.）。',
    add: S(H('see の二つの顔'), B(10, 34, 145, 26, '見える＝状態', 'b', 12), B(165, 34, 145, 26, '会う＝動作', 'g', 12), B(10, 66, 145, 44, 'I see a bird\nin the tree.', 'b', 11), B(165, 66, 145, 44, 'I am seeing my dentist\nthis afternoon.', 'g', 10), B(10, 122, 145, 28, '進行形にしない', 'r', 12), B(165, 122, 145, 28, '進行形にできる', 'g', 12), F('見える と 会う')) },
  { note: 'think も同じです。「〜だと思う」（意見）は状態で進行形にしません（I think he is right.）。「考えている」は動作で進行形にできます（I am thinking about my future.）。think about や think of は動作になりやすい形です。',
    add: S(H('think の二つの顔'), B(10, 34, 145, 26, '〜だと思う＝状態', 'b', 12), B(165, 34, 145, 26, '考えている＝動作', 'g', 12), B(10, 66, 145, 44, 'I think he\nis right.', 'b', 11), B(165, 66, 145, 44, 'I am thinking about\nmy future.', 'g', 10), B(10, 122, 145, 28, '進行形にしない', 'r', 12), B(165, 122, 145, 28, '進行形にできる', 'g', 12), F('think about は動作になりやすい')) },
  { note: 'taste と smell も同じです。「〜の味・においがする」は状態（This soup tastes salty.）、「味見する・においをかぐ」は動作で進行形にできます（The cook is tasting the soup.）。',
    add: S(H('taste / smell'), B(10, 34, 145, 26, '〜の味がする＝状態', 'b', 11), B(165, 34, 145, 26, '味見する＝動作', 'g', 12), B(10, 66, 145, 44, 'This soup\ntastes salty.', 'b', 11), B(165, 66, 145, 44, 'The cook is tasting\nthe soup.', 'g', 10), B(10, 122, 145, 28, '進行形にしない', 'r', 12), B(165, 122, 145, 28, '進行形にできる', 'g', 12), F('味がする と 味見する')) },
  { note: '❓be動詞も進行形にできるのでしょうか。→ できます。He is kind. は「親切な人だ」という性質ですが、He is being kind today. は「今日は親切にふるまっている」という一時的な態度です。kind・careful・rude・silly・quiet など、ふるまいを表す形容詞と使います。',
    add: S(H('❓be動詞の進行形'), B(10, 34, 300, 30, 'He is kind.（性質）', 'b', 13), B(10, 70, 300, 30, 'He is being kind today.（一時的なふるまい）', 'g', 11), T(160, 120, 'kind / careful / rude / silly / quiet', 12, C.green, true), B(10, 140, 300, 30, '× He is being tall.（変えられない性質）', 'r', 12), F('態度を表す形容詞と使う')) },
  { note: 'まとめです。進行形にできるかは「動詞ごと」ではなく「その文での意味ごと」に決まります。have は持つ（状態）／食べる（動作）、see は見える／会う、think は思う／考えている、taste は味がする／味見する。',
    add: S(H('まとめ'), tbl([['動詞', '状態（現在形）', '動作（進行形OK）'], ['have', '持っている', '食べる・過ごす'], ['see', '見える', '会う'], ['think', '〜と思う', '考えている'], ['taste', '味がする', '味見する']], 6, 32, [60, 120, 124], 32, 11), F('その文での意味で決める')) },
], '進行形になると意味が変わる動詞'));

// ───────── s098 日本語の「〜している」とのずれ ─────────
add('koko_eigo_s098', 0, show([
  { note: '❓「彼女は赤いコートを着ています」を She is putting on a red coat. と書くと、どんな意味になるでしょう。→ 「今まさに着ようとしている最中」になってしまいます。着る動作と、着ている状態は別の表現です。',
    add: S(H('❓「着ている」はどう言う？'), B(10, 36, 300, 32, 'She is putting on a red coat.', 'r', 13), T(160, 86, '＝ 今まさに着ようとしている最中', 12, C.red, true), B(10, 108, 300, 32, '着ている状態は？', 'm', 13), F('日本語は同じ「着ている」でも英語は別')) },
  { note: '答えは wear と put on の使い分けです。wear は身につけている状態、put on は身につける動作です。She wears glasses.（ふだんから眼鏡をかけている）。He put on his shoes and went out.（靴をはいて出かけた）。',
    add: S(H('wear と put on'), B(10, 34, 145, 26, 'wear＝状態', 'b', 13), B(165, 34, 145, 26, 'put on＝動作', 'g', 13), B(10, 66, 145, 44, 'She wears\nglasses.', 'b', 12), B(165, 66, 145, 44, 'He put on his shoes\nand went out.', 'g', 10), T(82, 126, '身につけている', 12, C.blue, true), T(238, 126, '身につける（着る）', 12, C.green, true), F('状態か、動作か')) },
  { note: '❓wear も進行形になるのはなぜでしょう。→ 「今日だけ着ている」という一時的な状態を表すためです。She is wearing a red coat today. は「今日は赤いコートを着ている」。進行形 is putting on 〜 は「着る最中」という別の意味になります。',
    add: S(H('❓wear の進行形'), B(10, 34, 300, 30, 'She wears glasses.（いつも）', 'b', 12), B(10, 70, 300, 30, 'She is wearing a red coat today.（今日だけ）', 'g', 10), B(10, 106, 300, 30, 'She is putting on a red coat.（着る最中）', 'm', 10), F('一時的な状態は進行形でも表せる')) },
  { note: 'live も同じ考え方です。原則は現在形です（I live in Osaka. 大阪に住んでいる）。一時的な居住なら進行形も使えます（I am living in Tokyo this year. 今年は東京に住んでいる）。',
    add: S(H('live：住んでいる'), B(10, 36, 300, 32, 'I live in Osaka.', 'b', 14), T(160, 82, 'ずっと住んでいる → 現在形', 12, C.blue, true), B(10, 102, 300, 32, 'I am living in Tokyo this year.', 'g', 12), T(160, 148, '一時的に住んでいる → 進行形も可', 12, C.green, true), F('期間が限られていれば進行形')) },
  { note: '結婚は三つの形を使い分けます。be married は「結婚している」（状態）、get married は「結婚する」（動作）、marry は「〜と結婚する」（動作・目的語を取る）。marry with 〜 とは言いません。',
    add: S(H('結婚の三つの形'), tbl([['形', '意味', '例'], ['be married', '結婚している\n（状態）', 'My sister is married.'], ['get married', '結婚する\n（動作）', 'They got married\nlast year.'], ['marry', '〜と結婚する', 'He married her.']], 4, 32, [76, 94, 134], 44, 10), F('× marry with 〜')) },
  { note: '❓なぜこんなにずれるのでしょう。→ 日本語の「〜している」が、状態と進行の両方を表せるからです。英語では状態と進行が別の語・別の形になることが多いので、日本語の「〜ている」から機械的に be＋ing を作ってはいけません。',
    add: S(H('❓なぜずれる？'), B(90, 32, 140, 32, '日本語「〜している」', 'm', 12), ar(120, 66, 70, 92, C.blue), ar(200, 66, 250, 92, C.green), B(10, 96, 130, 40, '状態\n着ている・住んでいる', 'b', 10), B(180, 96, 130, 40, '進行\n今まさに〜している', 'g', 10), ar(75, 138, 75, 156, C.blue), ar(245, 138, 245, 156, C.green), B(10, 158, 130, 30, 'wear / live / be married', 'b', 9), B(180, 158, 130, 30, 'put on / be + ing', 'g', 10), F('英語は状態と進行を分ける')) },
  { note: 'そのほかのずれやすい表現です。「似ている」は look like / resemble で、進行形にしません。「持っている」は have、「属している」は belong で、どちらも現在形です。「立っている」「すわっている」は姿勢を保つ動作なので He is standing by the window. のように進行形にできます。',
    add: S(H('そのほかのずれやすい表現'), tbl([['日本語', '英語', '進行形'], ['似ている', 'look like / resemble', '×'], ['持っている', 'have', '×'], ['属している', 'belong', '×'], ['立っている', 'is standing', '○']], 6, 32, [90, 150, 64], 32, 11), F('動詞ごとに正しい形をセットで覚える')) },
  { note: 'まとめです。①着ている状態は wear、着る動作は put on。②住んでいるは live、一時的なら進行形も可。③結婚は be married / get married / marry。④日本語の「〜ている」から機械的に be＋ing を作らず、場面で状態か動作かを判断します。',
    add: S(H('まとめ'), B(10, 32, 300, 28, '① wear（状態）／ put on（動作）', 'b', 12), B(10, 64, 300, 28, '② live：ふだん現在形・一時的なら進行形', 'g', 11), B(10, 96, 300, 28, '③ be married ／ get married ／ marry', 'm', 12), B(10, 128, 300, 28, '④ 「〜ている」から be+ing を作らない', 'r', 12), F('場面をイメージして選ぶ')) },
], '日本語の「〜している」とのずれ'));

// ───────── s099 進行形にできるかの判定手順 ─────────
add('koko_eigo_s099', 0, show([
  { note: '❓選択肢に 〜ing が並んでいると、つい選びたくなります。でも出題者は、状態動詞の進行形をわざと選択肢に入れて待っています。迷ったときに三十秒で決められる判定手順を作りましょう。',
    add: S(H('❓〜ing が並んだら？'), B(20, 38, 280, 34, 'I (know / am knowing) the answer.', 'm', 12), B(20, 84, 280, 34, '出題者は「状態動詞の進行形」を待っている', 'r', 11), B(20, 130, 280, 34, '三段階の手順で決める', 'g', 14), F('①状態動詞か → ②意味は → ③時の語句')) },
  { note: '手順①は、その動詞が状態動詞かを確かめることです。心理（know・believe・understand・remember・think）、感情（like・love・want・need・hope）、所有・関係（have・own・belong・contain・resemble・cost）、知覚（see・hear・smell・taste・sound・seem・look）のどれかに入っていれば、進行形にできない可能性が高いです。',
    add: S(H('手順①：状態動詞か？'), tbl([['心理', 'know believe understand'], ['感情', 'like love want need'], ['所有・関係', 'have own belong cost'], ['知覚', 'see hear smell taste']], 8, 34, [70, 226], 36, 11, 'b', 'w'), F('入っていれば進行形にしない可能性が高い')) },
  { note: '手順②は、この文ではどちらの意味かを見ることです。状態動詞でも、動作の意味なら進行形にできます。have は食べる・過ごす、see は会う、think は考えている、taste・smell は味見する・においをかぐ、be は一時的にふるまう、なら可です。',
    add: S(H('手順②：この文の意味は？'), tbl([['動詞', '動作の意味なら進行形OK'], ['have', '食べる・過ごす'], ['see', '会う'], ['think', '考えている'], ['taste/smell', '味見する・においをかぐ'], ['be', '一時的にふるまう']], 8, 32, [90, 206], 30, 11, 'g', 'w'), F('①だけで止まらず、②まで見る')) },
  { note: '手順③は、時を示す語句を確認することです。now・at this moment なら動作動詞は進行形、every day・usually なら現在形、for 〜・since 〜 なら現在完了、then・at that time なら過去形か過去進行形です。',
    add: S(H('手順③：時を示す語句'), tbl([['語句', '使う形'], ['now / at this moment', '動作動詞→進行形'], ['every day / usually', '現在形'], ['for 〜 / since 〜', '現在完了'], ['then / at that time', '過去形・過去進行形']], 8, 34, [130, 166], 34, 11, 'm', 'w'), F('語句と動詞の種類を合わせる')) },
  { note: '練習(1)(2)です。(1) I (know / am knowing) the answer. know は状態動詞で、意味も「知っている」という状態なので know。(2) I (have / am having) breakfast now. have は食べるという動作の意味で、now もあるので am having です。',
    add: S(H('判定の練習 1・2'), B(10, 34, 300, 26, '(1) I (know / am knowing) the answer.', 'w', 11), T(160, 72, '状態動詞・状態の意味 → know', 12, C.blue, true), B(10, 96, 300, 26, '(2) I (have / am having) breakfast now.', 'w', 11), T(160, 134, '動作の意味（食べる）+ now → am having', 12, C.green, true), F('手順①②③の順に')) },
  { note: '練習(3)(4)です。(3) This bag (belongs / is belonging) to me. belong は状態動詞なので belongs。(4) He (thinks / is thinking) about his future. about があるので動作の意味で is thinking です。',
    add: S(H('判定の練習 3・4'), B(10, 34, 300, 26, '(3) This bag (belongs / is belonging) to me.', 'w', 10), T(160, 72, '状態動詞 → belongs', 12, C.blue, true), B(10, 96, 300, 26, '(4) He (thinks / is thinking) about his future.', 'w', 10), T(160, 134, 'about があるので動作 → is thinking', 12, C.green, true), F('think about は動作になりやすい')) },
  { note: '❓now があるのに、なぜ I want to go home now. は want が正解なのでしょう。→ want は状態動詞で、「帰りたい」という内容も状態だからです。now があっても、状態動詞は現在形のままでよいのです。',
    add: S(H('❓now があっても…'), B(10, 36, 300, 30, 'I (want / am wanting) to go home now.', 'm', 11), T(160, 80, 'now を見て進行形を選びたくなる', 12, C.red, true), ar(160, 90, 160, 108, C.red), B(20, 112, 280, 34, '○ want（状態動詞は現在形）', 'g', 13), F('hear（聞こえる）も状態、listen to は動作')) },
  { note: 'まとめです。①状態動詞か確認、②この文での意味を確認、③時を示す語句を確認の3段階。now があっても状態動詞は現在形のまま。継続の期間（for・since）があれば現在完了を考えます。',
    add: S(H('まとめ'), B(10, 34, 300, 30, '① 状態動詞か？（心理・感情・所有・知覚）', 'b', 11), B(10, 68, 300, 30, '② この文では状態？ 動作？', 'g', 13), B(10, 102, 300, 30, '③ now / every day / since …', 'm', 13), B(10, 136, 300, 30, 'now があっても状態動詞は現在形', 'r', 12), F('①で止まらず②まで確認する')) },
], '進行形にできるかの判定手順'));

// ───────── s101 will の否定文・疑問文 ─────────
add('koko_eigo_s101', 0, show([
  { note: '❓Will it rain tomorrow? に Yes, it does. と答えると、なぜおかしいのでしょう。→ 質問は will で聞いているのに、答えが do 系で、かみ合わないからです。答えは、質問に使われた語をそのまま返すのが原則です。',
    add: S(H('❓なぜ Yes, it does. はおかしい？'), B(10, 36, 300, 30, 'Will it rain tomorrow?', 'b', 14), B(20, 78, 130, 30, '× Yes, it does.', 'r', 13), B(170, 78, 130, 30, '○ Yes, it will.', 'g', 13), T(160, 130, '質問で使った語を返す', 13, C.main, true), F('will で聞かれたら will で答える')) },
  { note: '否定文は、will のうしろに not を置き、動詞は原形のままです。I will not (won\'t) tell anyone. 短縮形は won\'t で、つづりが大きく変わるので注意します（× willn\'t）。',
    add: S(H('否定文：will not ＋ 原形'), row(['I', 'will not', 'tell', 'anyone.'], 8, 38, 72, 34, ['w', 'r', 'g', 'w'], 11, 6), T(160, 94, 'will not → won\'t', 14, C.red, true), B(40, 114, 110, 28, '○ won\'t', 'g', 13), B(170, 114, 110, 28, '× willn\'t', 'r', 13), F('動詞は原形のまま')) },
  { note: '疑問文は、Will を文のはじめに出します。Will you be at home tomorrow? Will the game start at two? do / does / did は使いません。× Do you will go? ○ Will you go?',
    add: S(H('疑問文：Will ＋ 主語 ＋ 原形'), row(['Will', 'you', 'be', 'at home?'], 8, 38, 72, 34, ['r', 'w', 'g', 'w'], 11, 6), B(20, 96, 280, 30, '× Do you will go?', 'r', 13), B(20, 134, 280, 30, '○ Will you go?', 'g', 13), F('do / does / did は使わない')) },
  { note: '❓なぜ do を使わないのでしょう。→ will は can や must と同じ助動詞で、自分自身を前に出して疑問文を作れるからです。do の助けは不要で、will と do が同時に並ぶことはありません。',
    add: S(H('❓will は助動詞'), B(10, 36, 300, 28, 'will・can・must・may', 'm', 13), T(160, 80, '助動詞は自分で前に出る', 12, C.main, true), ar(160, 90, 160, 108, C.main), row(['Will you …?', 'Can you …?', 'Must you …?'], 8, 112, 98, 30, 'b', 11, 4), T(160, 166, 'だから Do は入らない', 12, C.red, true), F('助動詞を前に出すだけ')) },
  { note: '答え方は、質問に使った語を返す鏡のような形です。Are you 〜? には Yes, I am.、Do you 〜? には Yes, I do.、Will you 〜? には Yes, I will. と対応させます。Will it rain? には Yes, it will. です。',
    add: S(H('答えは質問を映す鏡'), tbl([['質問', '答え'], ['Are you 〜?', 'Yes, I am.'], ['Do you 〜?', 'Yes, I do.'], ['Will you 〜?', 'Yes, I will.'], ['Will it 〜?', 'Yes, it will.']], 20, 34, [140, 140], 32, 13), F('Yes, it does. はまちがい')) },
  { note: '疑問詞のある疑問文は、〈疑問詞＋will＋主語＋原形〉です。When will you come back? What will you do this weekend? ただし Who will help us? は who が主語なので、語順を変えません。',
    add: S(H('疑問詞があるとき'), row(['When', 'will', 'you', 'come back?'], 4, 36, 74, 32, ['p', 'r', 'w', 'g'], 10, 4), row(['What', 'will', 'you', 'do?'], 4, 76, 74, 32, ['p', 'r', 'w', 'g'], 11, 4), B(10, 124, 300, 28, 'Who will help us?', 'p', 12), T(160, 168, 'Who が主語 → 語順そのまま', 12, C.purple, true), F('疑問詞 ＋ will ＋ 主語 ＋ 原形')) },
  { note: 'won\'t には、単純な否定のほかに「どうしても〜しようとしない」という強い拒否の意味もあります。The door won\'t open.（ドアがどうしても開かない）。He won\'t listen to me.（彼はどうしても私の言うことを聞こうとしない）。',
    add: S(H('won\'t の強い拒否'), B(10, 34, 300, 30, 'It won\'t rain.（降らないでしょう）', 'b', 12), B(10, 72, 300, 30, 'The door won\'t open.（どうしても開かない）', 'm', 11), B(10, 110, 300, 30, 'He won\'t listen to me.（聞こうとしない）', 'm', 11), T(160, 160, '物が主語のときは「どうしても動かない」', 11, C.main, true), F('will の「意志」が否定された形')) },
  { note: 'まとめです。①否定は will not＋原形（won\'t）。②疑問は Will＋主語＋原形で、do は使わない。③答えは will でそろえる。④won\'t は強い拒否も表す。答えの形は質問の形を映す鏡です。',
    add: S(H('まとめ'), B(10, 34, 300, 30, '① will not（won\'t）＋ 原形', 'm', 13), B(10, 68, 300, 30, '② Will ＋ 主語 ＋ 原形（do は使わない）', 'b', 11), B(10, 102, 300, 30, '③ 答えも will でそろえる', 'g', 13), B(10, 136, 300, 30, '④ won\'t＝強い拒否もある', 'p', 13), F('答えは質問を映す鏡')) },
], 'will の否定・疑問：答えは質問の鏡'));

// ───────── s105 Will you / Shall I / Shall we ─────────
add('koko_eigo_s105', 0, show([
  { note: '❓「窓を開けましょうか」と申し出るとき、Will I open the window? とは言いません。なぜでしょう。→ 相手のために自分が動くと申し出る形は、Shall I 〜? と決まっているからです。同じ未来の助動詞でも、だれが何をするかで形が変わります。',
    add: S(H('❓「窓を開けましょうか」'), B(10, 36, 300, 30, '× Will I open the window?', 'r', 13), B(10, 76, 300, 30, '○ Shall I open the window?', 'g', 13), T(160, 126, '自分が動くと申し出る → Shall I', 13, C.green, true), F('だれが動くかで形が決まる')) },
  { note: 'だれが動作をするかで、3つの形に分かれます。Will you 〜?（相手がする＝依頼）、Shall I 〜?（私がする＝申し出）、Shall we 〜?（いっしょにする＝勧誘）です。主語が動作をする人を示しています。',
    add: S(H('だれが動くか？'), B(10, 36, 94, 34, 'Will you 〜?', 'b', 12), B(113, 36, 94, 34, 'Shall I 〜?', 'g', 12), B(216, 36, 94, 34, 'Shall we 〜?', 'm', 12), ci(57, 108, 18, 'you', C.blue, FILL.blue, 11), ci(160, 108, 18, 'I', C.green, FILL.green, 12), ci(250, 108, 14, 'I', C.main, FILL.warm, 10), ci(278, 108, 14, 'you', C.main, FILL.warm, 9), T(57, 146, '相手が動く', 12, C.blue, true), T(160, 146, '私が動く', 12, C.green, true), T(264, 146, 'いっしょに', 12, C.main, true), B(10, 160, 94, 28, '依頼', 'b', 12), B(113, 160, 94, 28, '申し出', 'g', 12), B(216, 160, 94, 28, '勧誘', 'm', 12), F('主語が動く人を表す')) },
  { note: '依頼は Will you 〜? か Can you 〜?（〜してくれませんか）です。より丁寧に言うなら Would you 〜? / Could you 〜? を使います。答え方は Sure. / All right. / Of course.。断るなら I am sorry, but I am busy now. です。',
    add: S(H('依頼：Will you 〜? / Can you 〜?'), B(10, 34, 300, 28, 'Will you open the window?', 'b', 13), B(10, 66, 300, 28, 'Could you tell me the way to the station?', 'b', 10), T(160, 108, '↑ より丁寧', 11, C.blue, true), B(20, 124, 130, 28, 'Sure. / All right.', 'g', 11), B(170, 124, 130, 28, 'I am sorry, but …', 'w', 11), F('Could / Would を使うと丁寧')) },
  { note: '申し出は Shall I 〜?（〜しましょうか）です。Shall I carry your bag? 答え方は Yes, please.（お願いします）または No, thank you.（けっこうです）。',
    add: S(H('申し出：Shall I 〜?'), B(10, 34, 300, 30, 'Shall I carry your bag?', 'g', 14), B(20, 82, 130, 32, 'Yes, please.', 'g', 13), B(170, 82, 130, 32, 'No, thank you.', 'w', 13), T(160, 136, '（お願いします）　　（けっこうです）', 11, C.gray, true), F('私が〜しましょうか')) },
  { note: '勧誘は Shall we 〜?（いっしょに〜しませんか）です。Shall we go to the museum this Sunday? 答え方は Yes, let\'s.（そうしましょう）または No, let\'s not.（やめておきましょう）。',
    add: S(H('勧誘：Shall we 〜?'), B(10, 34, 300, 30, 'Shall we go to the museum?', 'm', 13), B(20, 82, 130, 32, 'Yes, let\'s.', 'g', 13), B(170, 82, 130, 32, 'No, let\'s not.', 'w', 13), T(160, 136, '（そうしましょう）　（やめておきましょう）', 11, C.gray, true), F('私たちが〜しませんか')) },
  { note: '❓Shall I 〜? に Yes, you shall. と答えないのはなぜでしょう。→ これは決まった応答の型ではないからです。Shall I 〜? には Yes, please. / No, thank you. と答えます。質問の種類ごとに答えが決まっているので、セットで覚えます。',
    add: S(H('❓答え方は型で決まっている'), tbl([['質問', '答え'], ['Shall I 〜?', 'Yes, please. / No, thank you.'], ['Shall we 〜?', 'Yes, let\'s. / No, let\'s not.'], ['Will you 〜?', 'Sure. / All right.'], ['Would you like 〜?', 'Yes, please. / No, thank you.']], 4, 32, [100, 204], 36, 11), B(40, 182, 240, 24, '× Yes, you shall.', 'r', 12), F('質問と答えをセットで')) },
  { note: 'すすめる表現もあります。Would you like some tea?（お茶はいかがですか）。Would you like to come with us?（いっしょに来ませんか）には Yes, I would love to.（ぜひ）。How about going to the movies? は ing 形、Why don\'t we go to the movies? は原形が続きます。',
    add: S(H('すすめる・誘う表現'), B(10, 34, 300, 28, 'Would you like some tea?', 'b', 13), B(10, 66, 300, 28, 'Would you like to come with us?', 'b', 12), B(10, 106, 300, 28, 'How about going to the movies?（ing形）', 'g', 10), B(10, 138, 300, 28, 'Why don\'t we go to the movies?（原形）', 'm', 10), F('How about のあとは ing')) },
  { note: 'まとめです。Will you 〜? は依頼、Shall I 〜? は申し出、Shall we 〜? は勧誘、Would you like 〜? はすすめる表現。答え方もセットで覚えます。未来の予定をたずねる Will you be at home tomorrow? には Yes, I will. と答えます。',
    add: S(H('まとめ'), tbl([['表現', '意味', '答え'], ['Will you', '依頼', 'Sure.'], ['Shall I', '申し出', 'Yes, please.'], ['Shall we', '勧誘', 'Yes, let\'s.'], ['Would you like', 'すすめ', 'Yes, please.']], 8, 32, [100, 80, 116], 32, 12), B(30, 196, 260, 24, '予定をたずねる Will you 〜? は Yes, I will.', 'w', 10), F('だれが動くかを見る')) },
], 'Will you / Shall I / Shall we'));
