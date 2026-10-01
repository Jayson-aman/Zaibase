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
    add: S(H('❓lay は2種類ある！', C.red), B(10, 34, 145, 26, 'lie の過去形', 'b'), B(165, 34, 145, 26, 'lay の原形', 'm'), B(10, 70, 145, 44, 'She lay\non the sofa.', 'b', 12), B(165, 70, 145, 44, 'She laid the baby\non the bed.', 'm', 11), T(82, 130, '目的語なし → 横になっていた', 11, C.blue, true), T(238, 130, 'the baby が目的語 → 寝かせた', 10, C.main, true), F('目的語があるかで見分ける', C.red)) },
  { note: '❓この区別は、文型とどうつながるのでしょう。→ 自動詞は目的語がとれないので第1・第2文型、他動詞は目的語をとるので第3・第4・第5文型になります。動詞の性質が文型を決めています。',
    add: S(H('❓動詞の性質と文型'), B(15, 36, 135, 36, '自動詞', 'b', 14), B(170, 36, 135, 36, '他動詞', 'm', 14), ar(82, 74, 82, 100, C.blue), ar(238, 74, 238, 100, C.main), B(15, 104, 135, 50, '第1・第2文型\n（O が入らない）', 'b', 12), B(170, 104, 135, 50, '第3・第4・第5文型\n（O が入る）', 'm', 12), F('目的語を取れるかが分かれ目')) },
  { note: '練習です。①M（前置詞のかたまりなど）を外す。②動詞のうしろに何があるか数える。The sun rises in the east. は in the east が M で、残りは The sun rises だけなので第1文型。He raised his hand. は his hand が O なので第3文型です。',
    add: S(H('練習：骨組みを取り出す'), T(160, 38, 'The sun rises in the east.', 13, C.ink, true), B(40, 54, 70, 26, 'The sun', 'b', 11), B(114, 54, 60, 26, 'rises', 'g', 11), B(178, 54, 100, 26, 'in the east = M', 'w', 10), T(160, 100, '→ 骨組みは The sun rises → 第1文型', 12, C.blue, true), T(160, 128, 'He raised his hand.', 13, C.ink, true), B(40, 142, 50, 26, 'He', 'b', 11), B(94, 142, 70, 26, 'raised', 'g', 11), B(168, 142, 80, 26, 'his hand = O', 'r', 11), T(160, 188, '→ O があるので 第3文型', 12, C.main, true), F('M を外す → 動詞のうしろを数える')) },
  { note: 'まとめです。①うしろに目的語があれば他動詞（raise・lay・set）、なければ自動詞（rise・lie・sit）。②lie の過去形 lay は、lay の原形と同じつづり。③日本語の訳より、文の形で判断するほうが確実です。',
    add: S(H('まとめ'), B(15, 34, 290, 34, '① 目的語あり → raise / lay / set', 'm', 13), B(15, 76, 290, 34, '① 目的語なし → rise / lie / sit', 'b', 13), B(15, 118, 290, 34, '② lie の過去形 lay = lay の原形', 'r', 13), B(15, 160, 290, 34, '③ 訳より文の形で判断する', 'g', 13), F('「〜を」があるか？ を最初に見る')) },
], 'rise と raise：目的語で見分ける'));

// ───────── s073 三単現の -s ─────────
add('koko_eigo_s073', 0, show([
  { note: '❓He play soccer. と書くと、なぜ1点消えるのでしょう。→ 動詞に -s が付く条件が3つあって、He の文はその3つがそろっているからです。主語が三人称、単数、時制が現在。この3つが同時にそろったときだけです。',
    add: S(H('❓-s が付く条件は？'), B(10, 36, 94, 50, '① 主語が\n三人称\n（I と you 以外）', 'b', 10), B(113, 36, 94, 50, '② 主語が\n単数', 'g', 11), B(216, 36, 94, 50, '③ 時制が\n現在', 'm', 11), ar(160, 90, 160, 116, C.red), B(60, 120, 200, 40, '動詞に -s / -es が付く', 'r', 14), F('3つ同時にそろったときだけ')) },
  { note: '具体的に見ましょう。I play / You play / They play は、三人称単数ではないので -s が付きません。He plays / My sister likes / That bird sings は、三つの条件がそろうので -s が付きます。',
    add: S(H('主語で見分ける'), B(10, 34, 145, 24, '-s が付かない', 'w', 12), B(165, 34, 145, 24, '-s が付く', 'r', 12), B(10, 64, 145, 28, 'I play', 'w'), B(10, 96, 145, 28, 'You play', 'w'), B(10, 128, 145, 28, 'They like music', 'w'), B(165, 64, 145, 28, 'He plays', 'r'), B(165, 96, 145, 28, 'My sister likes', 'r'), B(165, 128, 145, 28, 'That bird sings', 'r'), F('三人称単数 + 現在 だけ')) },
  { note: '❓-s のつづりはどう変わるのでしょう。原則はそのまま -s（play → plays）。o・s・x・sh・ch で終わる語は -es（go → goes、watch → watches）。子音字＋y は y を i にして -es（study → studies）。have は has です。',
    add: S(H('❓つづりのきまり'), tbl([['語の終わり', '付け方', '例'], ['ふつう', '+ s', 'play → plays'], ['o s x sh ch', '+ es', 'go → goes\nwatch → watches'], ['子音字 + y', 'y→i + es', 'study → studies'], ['特別', '', 'have → has']], 8, 32, [96, 70, 138], 34, 11), F('例外は4つだけ')) },
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
