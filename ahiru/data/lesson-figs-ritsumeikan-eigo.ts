import type { DiagramElement } from './figures';
import { show, C, FILL, bx, lb, ar, ci, ln, fresh } from './diagram-kit';

// 立命館高校・立命館宇治高校・立命館守山高校 対策（英語）単元12本の図解。
// キーは lessons-ritsumeikan-eigo.ts の figureId（lf_ritsumeikan_eigo_01〜12）。
// 画面は 320×240。文字幅は scripts/figlint.ts と同じ見積もり（全角＝文字サイズ、半角英数＝約0.52〜0.66倍）で配置した。

type Figure = ReturnType<typeof show>;
type Slide = { note: string; add?: DiagramElement[] };

const charW = (c: string, s: number) => (/[\x20-\x7e]/.test(c) ? (c === ' ' ? 0.3 : /[0-9]/.test(c) ? 0.58 : /[A-Z]/.test(c) ? 0.66 : 0.52) * s : s);
const tw = (t: string, s: number) => [...t].reduce((a, c) => a + charW(c, s), 0);

/** 1枚ぶんのスライド（前の絵を白でおおってから、タイトルと部品を描く）。 */
const S = (note: string, title: string, ...els: DiagramElement[]): Slide => ({
  note,
  add: fresh(lb(160, 22, title, 14, C.ink, 'middle', true), ...els),
});

type Chip = string | [string, string?, string?];

/** 語を横に並べた箱。返り値の xs は、箱ごとの左端・幅・中心。 */
function chips(words: Chip[], y: number, size = 13, h = 30): { els: DiagramElement[]; xs: { x: number; w: number; cx: number }[] } {
  const gap = 6;
  const items = words.map((w) => (typeof w === 'string' ? ([w] as [string, string?, string?]) : w));
  const ws = items.map((it) => tw(it[0], size) + 12);
  const total = ws.reduce((a, b) => a + b, 0) + gap * (items.length - 1);
  let x = 160 - total / 2;
  const els: DiagramElement[] = [];
  const xs: { x: number; w: number; cx: number }[] = [];
  items.forEach((it, i) => {
    els.push(bx(x, y, ws[i], h, it[0], it[1] ?? C.blue, it[2] ?? FILL.blue, size));
    xs.push({ x, w: ws[i], cx: x + ws[i] / 2 });
    x += ws[i] + gap;
  });
  return { els, xs };
}

const mid = (t: string, y: number, size = 13, color: string = C.ink) => lb(160, y, t, size, color, 'middle', true);
const ok = (cx: number, cy: number) => ci(cx, cy, 16, '○', C.green, FILL.green, 20);
const ng = (cx: number, cy: number) => ci(cx, cy, 16, '×', C.red, FILL.red, 20);

/** 本文の根拠 → 選択肢 → ○×の1枚。 */
function judge(note: string, title: string, evidence: string, choice: string, good: boolean, reason: string): Slide {
  return S(
    note,
    title,
    lb(16, 50, '本文の根拠', 12, C.gray, 'start', true),
    bx(10, 58, 300, 34, evidence, C.blue, FILL.blue, 11),
    ar(160, 94, 160, 114, C.gray),
    bx(10, 116, 300, 34, choice, good ? C.green : C.red, good ? FILL.green : FILL.red, 11),
    good ? ok(40, 190) : ng(40, 190),
    lb(68, 195, reason, 13, good ? C.green : C.red, 'start', true),
  );
}

export const lessonFigsRitsumeikan_eigo: Record<string, Figure> = {
  // 1. つなぎ語と指示語
  lf_ritsumeikan_eigo_01: show([
    S('ミカは合唱部に入りたかった。でも人前で歌うのがこわい。2つの文のあいだの(A)に入る語を考える。', '状況：(A)に入る語は？',
      bx(10, 50, 300, 36, 'Mika wanted to join the choir.', C.blue, FILL.blue, 12),
      bx(10, 112, 300, 36, '(A) she was afraid of singing.', C.blue, FILL.blue, 12),
      mid('前の文と後の文は、どんな関係？', 190, 13, C.gray)),
    S('手がかり。前の文は「入りたい」でプラス。後の文は「こわい」でマイナス。', '手がかり：前後の向きを見る',
      bx(10, 50, 300, 36, 'Mika wanted to join the choir.', C.green, FILL.green, 12),
      lb(160, 106, '前の文：入りたい → プラス', 13, C.green, 'middle', true),
      bx(10, 122, 300, 36, '(A) she was afraid of singing.', C.red, FILL.red, 12),
      lb(160, 178, '後の文：こわい → マイナス', 13, C.red, 'middle', true)),
    S('理由。プラスからマイナスへ、向きが反対になっている。向きが反対のときは逆接のつなぎ語を使う。', '理由：向きが反対なら逆接',
      ci(70, 100, 30, 'プラス', C.green, FILL.green, 13),
      ar(104, 100, 214, 100, C.gray),
      ci(250, 100, 30, 'マイナス', C.red, FILL.red, 12),
      mid('反対の向き ＝ 逆接（しかし）', 170, 14, C.ink)),
    S('選択肢を当てはめる。However だけが、反対の向きをつなぐ。', '選択肢をしらべる',
      bx(10, 46, 146, 52, 'However\n反対の向き', C.green, FILL.green, 12),
      bx(164, 46, 146, 52, 'Because\n理由にならない', C.red, FILL.red, 12),
      bx(10, 110, 146, 52, 'So\n結果にならない', C.red, FILL.red, 12),
      bx(164, 110, 146, 52, 'For example\n例にならない', C.red, FILL.red, 12)),
    S('答えは However。「入りたかった。しかし、人前で歌うのがこわかった。」と読める。', '答え：However',
      mid('However', 100, 34, C.green),
      mid('入りたかった。しかし、こわかった。', 150, 14, C.ink)),
    S('次は指示語。「She went to the first practice.」のあと、(B)に入る文頭の語を考える。', '指示語：(B)に入る語は？',
      bx(10, 50, 300, 36, 'She went to the first practice.', C.blue, FILL.blue, 12),
      bx(10, 112, 300, 36, '(B) was easier than she had expected.', C.blue, FILL.blue, 12),
      mid('It／They／He／She のどれ？', 190, 13, C.gray)),
    S('手がかり。was があるので主語は単数。そして「簡単だった」と言えるのは人ではなく、練習のほう。', '手がかり：単数か複数か・人か物か',
      lb(160, 62, 'was ＝ 単数', 15, C.blue, 'middle', true),
      lb(160, 100, '「簡単だった」のは…', 14, C.ink, 'middle', true),
      bx(40, 118, 100, 40, '人（ミカ）', C.red, FILL.red, 13),
      bx(180, 118, 100, 40, '練習', C.green, FILL.green, 13),
      ng(90, 186), ok(230, 186)),
    S('practice は単数の物だから it で受ける。It が the first practice を指す。', '答え：It ＝ the first practice',
      bx(10, 52, 300, 34, 'She went to the first practice.', C.green, FILL.green, 12),
      bx(10, 128, 300, 34, 'It was easier than she had expected.', C.blue, FILL.blue, 12),
      ar(160, 126, 160, 88, C.red)),
    S('確かめ。It を the first practice に入れかえて読む。「最初の練習は、思っていたより簡単だった」で意味が通る。', '確かめ：入れかえて読む',
      mid('The first practice was easier', 90, 15, C.ink),
      mid('than she had expected.', 118, 15, C.ink),
      mid('意味が通る → 正解', 170, 14, C.green)),
  ], '動かして、1つずつ たしかめよう'),

  // 2. 内容一致
  lf_ritsumeikan_eigo_02: show([
    S('図書館の紹介文。時刻・曜日・冊数と週数・イベントの時期が、あとで選択肢に入れかえられる。', '本文を読む：数と時に印',
      lb(16, 56, 'It opens at nine and closes at five,', 12, C.ink, 'start'),
      lb(16, 78, 'except on Mondays.', 12, C.red, 'start', true),
      lb(16, 100, 'Students can borrow up to five books', 12, C.ink, 'start'),
      lb(16, 122, 'for two weeks.', 12, C.red, 'start', true),
      lb(16, 144, 'Last year, the library started a new event.', 12, C.red, 'start', true),
      lb(16, 166, 'Volunteers read picture books to children', 12, C.ink, 'start'),
      lb(16, 188, 'every Saturday afternoon.', 12, C.ink, 'start')),
    judge('アを調べる。本文は「except on Mondays（月曜日を除く）」。月曜日は開いていないので、アは×。', 'ア：月曜日', 'except on Mondays', 'ア The library is open on Mondays.', false, '月曜日は開いていない'),
    judge('イを調べる。本文は「up to five books for two weeks」。5冊まで2週間。5週間は入れかえた数なので、イは×。', 'イ：期間', 'five books for two weeks', 'イ Borrow books for five weeks.', false, 'five は冊数。週数は two'),
    judge('ウを調べる。本文は「read picture books to children every Saturday afternoon」。そのまま合っているので、ウは○。', 'ウ：土曜の午後', 'read picture books every Saturday afternoon', 'ウ Volunteers read to children on Saturday afternoons.', true, '本文の1文と一致'),
    judge('エを調べる。本文は「Last year」で去年。10年前ではないので、エは×。', 'エ：いつ始めたか', 'Last year, the library started a new event', 'エ The library started the event ten years ago.', false, '去年であって10年前ではない'),
    S('答えはウ。根拠の1文を本文に見つけられるのはウだけ。ほかの3つは、数や時がくいちがう。', '答え：ウ',
      mid('ウ', 78, 40, C.green),
      lb(20, 130, '数の目：five 冊と two 週間を区別', 13, C.ink, 'start'),
      lb(20, 156, '限定の目：except on Mondays', 13, C.ink, 'start'),
      lb(20, 182, '時の目：Last year と ten years ago', 13, C.ink, 'start')),
    judge('例題2。only は「ただ1人」という強い限定。本文は「Sota and other volunteers」なので、ほかにもいる。×。', 'only の文', 'Sota and other volunteers read picture books', 'Sota is the only person who reads picture books.', false, 'ほかのボランティアもいる'),
    S('確かめ。選ぶ前に、根拠にした本文の1文に線を引く。根拠が見つからない選択肢は選ばない。', '確かめ：根拠の1文',
      bx(20, 56, 280, 40, '本文の1文に線を引く', C.blue, FILL.blue, 15),
      ar(160, 98, 160, 120, C.gray),
      bx(20, 122, 280, 40, '根拠がなければ選ばない', C.red, FILL.red, 15)),
  ], '動かして、1つずつ たしかめよう'),

  // 3. 不定詞
  lf_ritsumeikan_eigo_03: show([
    S('不定詞（to＋動詞のもと）には3つの用法がある。どれかは to ～ が文のどこにはまっているかで決まる。', '3つの用法',
      bx(10, 70, 96, 70, '名詞的\n〜すること', C.blue, FILL.blue, 13),
      bx(112, 70, 96, 70, '形容詞的\n〜するための', C.green, FILL.green, 13),
      bx(214, 70, 96, 70, '副詞的\n〜するために', C.purple, FILL.purple, 13),
      mid('to の前を見ると見分けられる', 185, 13, C.gray)),
    (() => {
      const r = chips(['I', 'want', ['to be a doctor', C.red, FILL.red]], 80, 14);
      return S('名詞的用法。want は「何を」が必要な動詞。to be a doctor がその「何を」にあたる。「〜すること」。', '名詞的：want の目的語', ...r.els, mid('want は「何を？」を求める', 140, 14, C.ink), mid('→ to be a doctor ＝ 医者になること', 168, 14, C.red));
    })(),
    (() => {
      const r = chips(['I have homework', ['to do', C.red, FILL.red]], 80, 14);
      return S('形容詞的用法。to do は homework のすぐ後ろにあって、homework を説明している。「するための宿題」。', '形容詞的：名詞を後ろから説明', ...r.els, ar(r.xs[1].cx, 112, r.xs[0].x + r.xs[0].w - 30, 112, C.red), mid('homework を後ろから説明', 140, 14, C.ink), mid('→ するための宿題', 168, 14, C.red));
    })(),
    (() => {
      const r = chips(['She went to the library', ['to study', C.red, FILL.red]], 80, 14);
      return S('副詞的用法（目的）。She went to the library でもう文は完成している。to study は「なぜ行ったか」を足している。', '副詞的：完成した文に足す', ...r.els, mid('左側だけで文は完成している', 140, 14, C.ink), mid('→ 勉強するために（目的）', 168, 14, C.red));
    })(),
    (() => {
      const r = chips(['I was glad', ['to see you', C.red, FILL.red]], 80, 14);
      return S('副詞的用法（感情の原因）。glad（うれしい）の原因を to see you が説明している。「会えてうれしい」。', '副詞的：感情の原因', ...r.els, mid('glad ＝ 感情を表す語', 140, 14, C.ink), mid('→ あなたに会えて（原因）', 168, 14, C.red));
    })(),
    (() => {
      const r = chips([['It', C.gray, FILL.gray], 'is important', 'for us', ['to exercise', C.red, FILL.red]], 80, 12);
      return S('It is … to ～ の文。It は形式的な主語で、本当の主語は to exercise。for us は、運動する人を表す。', 'It is … to ～', ...r.els, ar(r.xs[0].cx, 114, r.xs[3].cx, 114, C.red, true), mid('It は形式的。本当の主語は to ～', 150, 13, C.ink), mid('私たちにとって運動することは大切', 178, 13, C.red));
    })(),
    S('見分け方。to の前に名詞があれば形容詞的、文がすでに完成していれば副詞的、want などが「何を」を求めていれば名詞的。', '見分け方',
      bx(20, 46, 280, 40, 'to の前が名詞 → 形容詞的', C.green, FILL.green, 14),
      bx(20, 100, 280, 40, '文がもう完成 → 副詞的', C.purple, FILL.purple, 14),
      bx(20, 154, 280, 40, 'want など「何を」 → 名詞的', C.blue, FILL.blue, 14)),
    (() => {
      const r = chips(['I have no', ['time', C.green, FILL.green], ['to watch TV', C.red, FILL.red]], 70, 14);
      return S('確かめ。I have no time to watch TV. は、time の後ろの to watch TV が time を説明している。形容詞的で「テレビを見るための時間」。', '確かめ：ひっかけ', ...r.els, ar(r.xs[2].cx, 106, r.xs[1].cx, 106, C.red), mid('「テレビを見るために、時間がない」は不自然', 140, 13, C.red), mid('→ 形容詞的（見るための時間）', 170, 14, C.green));
    })(),
  ], '動かして、1つずつ たしかめよう'),

  // 4. 動名詞と不定詞
  lf_ritsumeikan_eigo_04: show([
    S('to は「向かう」矢印、～ing は「いまの動作」。動詞ごとに、どちらのイメージが合うかが決まる。', 'to ～ と ～ing のイメージ',
      bx(10, 60, 146, 70, 'to ～\nこれから向かう', C.blue, FILL.blue, 14),
      bx(164, 60, 146, 70, '～ing\nいま・すでに', C.green, FILL.green, 14),
      mid('動詞のイメージで選ぶ', 175, 14, C.gray)),
    (() => {
      const r = chips(['I', ['want', C.blue, FILL.blue], ['to go', C.red, FILL.red]], 80, 14);
      return S('want は「これからしたいこと」。まだ起きていない未来なので、to ～ をとる。', 'want ＋ to ～', ...r.els, ar(r.xs[2].x - 30, 124, r.xs[2].cx + 30, 124, C.red), mid('これからのこと → to ～', 160, 14, C.red));
    })(),
    (() => {
      const r = chips(['She', ['enjoyed', C.green, FILL.green], ['playing tennis', C.red, FILL.red]], 80, 14);
      return S('enjoy は、いま楽しんでいる動作を見つめる。実際にしている動作なので、～ing をとる。', 'enjoy ＋ ～ing', ...r.els, mid('実際にしている動作 → ～ing', 150, 14, C.red));
    })(),
    S('グループ分け。～ing だけ：enjoy／finish／stop／mind／practice。to ～ だけ：want／hope／decide／plan／need。', 'ふり分け',
      bx(10, 50, 146, 24, '～ing だけ', C.green, FILL.green, 13),
      lb(20, 98, 'enjoy', 13, C.ink, 'start'), lb(20, 122, 'finish', 13, C.ink, 'start'), lb(20, 146, 'stop', 13, C.ink, 'start'), lb(20, 170, 'practice', 13, C.ink, 'start'),
      bx(164, 50, 146, 24, 'to ～ だけ', C.blue, FILL.blue, 13),
      lb(174, 98, 'want', 13, C.ink, 'start'), lb(174, 122, 'hope', 13, C.ink, 'start'), lb(174, 146, 'decide', 13, C.ink, 'start'), lb(174, 170, 'plan', 13, C.ink, 'start')),
    S('remember は意味が変わる。remember seeing は「見たことを覚えている」（過去）。remember to bring は「忘れずに持ってくる」（これから）。', 'remember',
      bx(10, 50, 300, 50, 'remember ～ing\n〜したことを覚えている（過去 last year）', C.green, FILL.green, 13),
      bx(10, 116, 300, 50, 'remember to ～\n忘れずに〜する（これから tomorrow）', C.blue, FILL.blue, 13),
      mid('時を表す語が手がかり', 200, 13, C.gray)),
    S('stop も意味が変わる。stop talking は「話すのをやめる」。stop to talk は「話すために立ち止まる」。', 'stop',
      bx(10, 50, 300, 50, 'stop ～ing\n〜するのをやめる', C.green, FILL.green, 14),
      bx(10, 116, 300, 50, 'stop to ～\n〜するために立ち止まる', C.blue, FILL.blue, 14)),
    (() => {
      const r = chips(['Thank you', ['for', C.red, FILL.red], ['helping me', C.green, FILL.green]], 80, 14);
      return S('前置詞のあとには名詞の働きが必要。動詞は ～ing（動名詞）の形にする。', '前置詞のあとは ～ing', ...r.els, mid('for のあとは helping（～ing）', 150, 14, C.ink));
    })(),
    (() => {
      const r = chips(['He', ['stopped', C.green, FILL.green], ['talking to her', C.red, FILL.red]], 80, 14);
      return S('確かめ。「彼女と話すのをやめた」は He stopped talking to her. 「話すために立ち止まった」なら stopped to talk。', '確かめ：stop ～ing', ...r.els, mid('話すのをやめた ＝ stop ～ing', 150, 14, C.red));
    })(),
  ], '動かして、1つずつ たしかめよう'),

  // 5. 関係代名詞
  lf_ritsumeikan_eigo_05: show([
    S('2つの文がある。「私には友達がいる」「彼はカナダに住んでいる」。この2つを1文にまとめたい。', '2つの文',
      bx(20, 56, 280, 40, 'I have a friend.', C.blue, FILL.blue, 15),
      bx(20, 116, 280, 40, 'He lives in Canada.', C.blue, FILL.blue, 15)),
    S('He は、1文目の a friend と同じ人を指している。同じものを指す語を、つなぎの語に変える。', 'He ＝ a friend',
      bx(20, 56, 280, 40, 'I have a friend.', C.green, FILL.green, 15),
      bx(20, 130, 280, 40, 'He lives in Canada.', C.red, FILL.red, 15),
      ar(160, 128, 160, 98, C.red)),
    (() => {
      const r = chips(['I have a friend', ['who', C.red, FILL.red], 'lives in Canada.'], 80, 14);
      return S('He を who に変えて、a friend のすぐ後ろにつなぐ。who は He の代わりであり、2文をつなぐ接着剤でもある。', 'who でつなぐ', ...r.els, mid('who ＝ 代名詞（He）＋ 接着剤', 140, 14, C.red));
    })(),
    S('選び方①。説明される名詞（先行詞）が人なら who、物なら which。that はどちらにも使える。', '人か物か',
      bx(20, 56, 130, 56, '人 → who\nthe girl who', C.blue, FILL.blue, 13),
      bx(170, 56, 130, 56, '物 → which\nthe book which', C.green, FILL.green, 13),
      mid('that はどちらにも使える', 160, 14, C.gray)),
    S('選び方②。すぐ後ろに動詞が来れば主格（省略できない）。「主語＋動詞」が来れば目的格（省略できる）。', 'すぐ後ろを見る',
      bx(10, 50, 300, 50, 'the girl who plays …\nwho のあとが動詞 → 主格', C.blue, FILL.blue, 13),
      bx(10, 116, 300, 50, 'the book which I bought …\nwhich のあとが 主語＋動詞 → 目的格', C.green, FILL.green, 13)),
    (() => {
      const r = chips(['the book', ['(which)', C.gray, FILL.gray], ['I bought', C.red, FILL.red]], 80, 14);
      return S('目的格は省略できる。book のあとに「I bought」という主語＋動詞が続くので、説明の文が始まったと分かる。', '目的格は省略できる', ...r.els, mid('主語＋動詞が続けば、つなぎ目が見える', 150, 13, C.ink));
    })(),
    S('目的格の文では、it を書き足さない。which が bought の目的語の代わりをしている。it を足すと目的語が二重になる。', 'it は書かない',
      bx(10, 56, 300, 36, 'The movie which we saw it last week', C.red, FILL.red, 12),
      ng(36, 124),
      lb(62, 129, 'it が二重になっている', 13, C.red, 'start', true),
      bx(10, 150, 300, 36, 'The movie which we saw last week', C.green, FILL.green, 12),
      ok(36, 218),
      lb(62, 223, 'which が目的語の役を引き受ける', 12, C.green, 'start', true)),
    (() => {
      const r = chips(['This is the bag', ['which', C.red, FILL.red], 'I bought', 'in Osaka.'], 80, 12);
      return S('確かめ。「これは私が大阪で買ったかばんです」は This is the bag which I bought in Osaka. bought のあとに it は書かない。', '確かめ', ...r.els, mid('bought のあとに it は不要', 150, 14, C.green));
    })(),
  ], '動かして、1つずつ たしかめよう'),

  // 6. 受け身
  lf_ritsumeikan_eigo_06: show([
    (() => {
      const r = chips([['Tom', C.blue, FILL.blue], ['broke', C.green, FILL.green], ['the window', C.red, FILL.red]], 80, 14);
      return S('能動態。Tom が主語（する人）、the window が目的語（される物）。窓を主役にして言いかえたい。', '能動態の文', ...r.els, lb(r.xs[0].cx, 130, '主語', 12, C.blue, 'middle', true), lb(r.xs[2].cx, 130, '目的語', 12, C.red, 'middle', true));
    })(),
    S('ステップ1。目的語 the window を、新しい主語にして文の先頭に出す。', '①目的語 → 主語',
      bx(90, 60, 140, 36, 'The window', C.red, FILL.red, 15),
      mid('「される側」を主役にする', 140, 14, C.ink)),
    S('ステップ2。動詞を be動詞＋過去分詞にする。break－broke－broken。主語は単数、時制は過去なので was broken。', '②動詞 → be＋過去分詞',
      bx(20, 56, 100, 36, 'broke', C.gray, FILL.gray, 15),
      ar(124, 74, 190, 74, C.green),
      bx(194, 56, 110, 36, 'was broken', C.green, FILL.green, 15),
      mid('過去形 broke ではなく過去分詞 broken', 140, 13, C.red),
      mid('break － broke － broken', 172, 13, C.gray)),
    (() => {
      const r = chips([['The window', C.red, FILL.red], ['was broken', C.green, FILL.green], ['by Tom', C.blue, FILL.blue]], 80, 14);
      return S('ステップ3。元の主語 Tom を、by Tom にして後ろに回す。', '③主語 → by ～', ...r.els, mid('元の主語は by ～ へ', 140, 14, C.ink));
    })(),
    S('完成。The window was broken by Tom.「窓はトムによって割られた」。元の文と同じ出来事を、窓の側から言っている。', '完成',
      mid('The window was broken by Tom.', 100, 17, C.green),
      mid('窓はトムに割られた', 140, 15, C.ink)),
    S('by を省くとき。行為者が言うまでもないとき、English is spoken in Canada. のように by ～ をつけない。', 'by を省く場合',
      mid('English is spoken in Canada.', 90, 16, C.blue),
      mid('だれが話すかは言うまでもない', 130, 14, C.ink),
      mid('→ by people は書かない', 160, 14, C.red)),
    (() => {
      const r = chips(['A new library', ['will be built', C.red, FILL.red], 'next year.'], 80, 13);
      return S('助動詞つきの受け身。will のあとは原形の be。will be ＋ 過去分詞で「建てられる」。', '助動詞 ＋ be ＋ 過去分詞', ...r.els, mid('will is や will built は誤り', 150, 14, C.red));
    })(),
    S('確かめ。過去の受け身でも、過去形ではなく過去分詞。was broke ではなく was broken。', '確かめ',
      bx(10, 56, 300, 36, 'The window was broke by Tom.', C.red, FILL.red, 13),
      ng(36, 124),
      lb(62, 129, '過去形 broke は使えない', 13, C.red, 'start', true),
      bx(10, 150, 300, 36, 'The window was broken by Tom.', C.green, FILL.green, 13),
      ok(36, 218),
      lb(62, 223, '過去分詞 broken', 13, C.green, 'start', true)),
  ], '動かして、1つずつ たしかめよう'),


  // 7. 現在完了
  lf_ritsumeikan_eigo_07: show([
    S('「I have lived in Kyoto for ten years.」。10年前に住みはじめて、いまも住んでいる。過去といまがつながっている。', '過去と今のつながり',
      ln(30, 110, 290, 110, C.gray, false, 3),
      ci(50, 110, 6, '', C.blue, FILL.blue, 10),
      ci(270, 110, 8, '', C.red, FILL.red, 10),
      lb(50, 140, '10年前', 13, C.blue, 'middle', true),
      lb(270, 140, 'いま', 13, C.red, 'middle', true),
      ar(56, 90, 262, 90, C.green),
      mid('ずっと住んでいる', 70, 14, C.green)),
    S('形は have（持っている）＋過去分詞（〜した状態）。「〜した状態を、いま持っている」が、もとの意味。', 'have ＋ 過去分詞',
      bx(20, 70, 110, 44, 'have／has', C.blue, FILL.blue, 15),
      lb(142, 98, '＋', 22, C.ink, 'middle', true),
      bx(160, 70, 140, 44, '過去分詞', C.green, FILL.green, 15),
      mid('三人称単数なら has', 160, 14, C.gray)),
    S('継続。for は期間（ten years）、since は起点（2015年）をつける。', '①継続：for と since',
      bx(10, 56, 146, 50, 'for\n＋期間 ten years', C.blue, FILL.blue, 13),
      bx(164, 56, 146, 50, 'since\n＋起点 2015', C.green, FILL.green, 13),
      mid('How long ～? でたずねる', 150, 14, C.ink)),
    S('経験。ever／never／before／once／twice が手がかり。「〜したことがある」。', '②経験：ever・never',
      mid('Have you ever eaten sushi?', 90, 15, C.blue),
      mid('これまでに食べたことがある？', 128, 14, C.ink),
      mid('ever／never／once／twice', 168, 14, C.gray)),
    S('完了・結果。just／already／yet が手がかり。「〜したところだ」「〜してしまった」。', '③完了：just・already・yet',
      mid('I have just finished my homework.', 90, 14, C.blue),
      mid('ちょうど宿題を終えたところ', 128, 14, C.ink),
      mid('just／already／yet', 168, 14, C.gray)),
    S('yesterday は、過去のある一点だけを指す語。いまとのつながりを切ってしまうので、現在完了とは使えない。', 'yesterday は使えない',
      ln(30, 120, 290, 120, C.gray, false, 3),
      ci(110, 120, 6, '', C.red, FILL.red, 10),
      ci(270, 120, 8, '', C.blue, FILL.blue, 10),
      lb(110, 98, 'yesterday', 13, C.red, 'middle', true),
      lb(270, 98, 'いま', 13, C.blue, 'middle', true),
      ng(190, 120),
      mid('つながりが切れる', 170, 14, C.red)),
    S('だから過去を表す語がある文は過去形。I have seen him yesterday. ではなく I saw him yesterday.', '過去形に直す',
      bx(10, 56, 300, 36, 'I have seen him yesterday.', C.red, FILL.red, 13),
      ar(160, 94, 160, 116, C.gray),
      bx(10, 118, 300, 36, 'I saw him yesterday.', C.green, FILL.green, 13)),
    S('確かめ。ten years は「期間」なので for。since のあとには起点（いつから）が来る。', '確かめ：for か since か',
      mid('I have lived in this town', 80, 14, C.ink),
      mid('for three years.', 110, 16, C.green),
      mid('since three years は誤り', 160, 14, C.red),
      mid('since のあとは「いつから」', 188, 13, C.gray)),
  ], '動かして、1つずつ たしかめよう'),

  // 8. 比較
  lf_ritsumeikan_eigo_08: show([
    S('ユキは12さい、ミカは14さい。同じ事実を、ちがう言い方で表せる。', '状況：2人の年れい',
      bx(70, 130, 60, 60, 'ユキ\n12', C.blue, FILL.blue, 13),
      bx(190, 110, 60, 80, 'ミカ\n14', C.green, FILL.green, 13),
      mid('ユキのほうが若い', 60, 14, C.ink)),
    S('比較級で言う。Yuki is younger than Mika.「ユキはミカより若い」。', '①比較級',
      mid('Yuki is younger than Mika.', 100, 16, C.blue),
      mid('ユキはミカより若い', 140, 14, C.ink)),
    S('主語を入れかえて、as ～ as の否定で言う。Mika is not as young as Yuki.「ミカはユキほど若くない」。', '②not as ～ as',
      mid('Mika is not as young as Yuki.', 100, 16, C.green),
      mid('ミカはユキほど若くない', 140, 14, C.ink),
      mid('as と as のあいだは原級 young', 180, 13, C.gray)),
    S('同じ事実を、別の角度から言っているだけ。だから書きかえられる。', '同じ事実',
      bx(20, 50, 280, 34, 'Yuki is younger than Mika.', C.blue, FILL.blue, 13),
      bx(20, 100, 280, 34, 'Mika is not as young as Yuki.', C.green, FILL.green, 13),
      bx(20, 150, 280, 34, 'Mika is older than Yuki.', C.purple, FILL.purple, 13)),
    S('最上級。富士山は3776m、北岳は3193m、奥穂高岳は3190m。日本でいちばん高い山は富士山。', '最上級：いちばん高い',
      bx(40, 40, 60, 140, '富士山\n3776m', C.red, FILL.red, 11),
      bx(130, 74, 60, 106, '北岳\n3193m', C.blue, FILL.blue, 11),
      bx(220, 75, 60, 105, '奥穂高岳\n3190m', C.blue, FILL.blue, 10),
      mid('富士山 ＞ ほかのすべて', 205, 14, C.red)),
    S('「いちばん高い」は「ほかのどの山より高い」と同じ。Mt. Fuji is higher than any other mountain in Japan.', '最上級 ＝ 比較級 than any other',
      mid('the highest mountain', 80, 16, C.red),
      mid('＝', 112, 18, C.ink),
      mid('higher than any other mountain', 146, 15, C.green),
      mid('any other のあとは単数形', 184, 14, C.ink)),
    S('なぜ単数形か。ほかの山を1つずつ比べるから。mountains と複数にすると、別の考え方になってしまう。', 'any other ＋ 単数',
      bx(10, 56, 300, 36, 'any other mountain in Japan', C.green, FILL.green, 13),
      ok(36, 116),
      lb(62, 121, '1つずつ比べる（単数）', 13, C.green, 'start', true),
      bx(10, 142, 300, 36, 'any other mountains in Japan', C.red, FILL.red, 13),
      ng(36, 206),
      lb(62, 211, '複数形は誤り', 13, C.red, 'start', true)),
    S('確かめ。in は範囲・場所（in Japan）、of は複数の数（of the four）。長い語は more／most をつける。', 'in と of・more と most',
      bx(10, 52, 146, 50, 'in\nin Japan\nin my class', C.blue, FILL.blue, 12),
      bx(164, 52, 146, 50, 'of\nof the four\nof all', C.green, FILL.green, 12),
      mid('more interesting／most important', 150, 14, C.ink),
      mid('長い語は more／most', 180, 13, C.gray)),
  ], '動かして、1つずつ たしかめよう'),

  // 9. 間接疑問文
  lf_ritsumeikan_eigo_09: show([
    (() => {
      const r = chips([['Where', C.red, FILL.red], 'does', 'he', 'live', '?'], 80, 14);
      return S('これだけで1つの質問。do／does を主語の前に出す形は、「質問です」という合図になっている。', '疑問文：Where does he live?', ...r.els, mid('does が前に出る ＝ 質問の合図', 140, 14, C.ink));
    })(),
    S('これを「I know 〜」の中に入れる。すると文全体は「私は知っている」という普通の文になる。', '文の中に入れる',
      bx(20, 56, 280, 40, 'I know  ＿＿＿＿＿＿', C.blue, FILL.blue, 16),
      mid('入れた疑問は、もう質問ではない', 140, 14, C.ink),
      mid('→ 質問の合図はいらない', 168, 14, C.red)),
    (() => {
      const r = chips([['Where', C.red, FILL.red], ['does', C.gray, FILL.gray], 'he', 'live'], 80, 14);
      return S('does は、疑問文を作るためだけに使っていた。役目が終わったので消える。', 'does が消える', ...r.els, lb(r.xs[1].cx, 130, '消える', 13, C.red, 'middle', true), ln(r.xs[1].x, 80, r.xs[1].x + r.xs[1].w, 110, C.red, false, 2));
    })(),
    (() => {
      const r = chips(['where', 'he', ['live → lives', C.red, FILL.red]], 80, 14);
      return S('消えた does の分は、動詞が引き受ける。主語が he なので、live に三単現の s がついて lives になる。', '動詞が引き受ける', ...r.els, mid('時制と s は動詞が受け持つ', 140, 14, C.ink));
    })(),
    S('完成。I know where he lives.「私は彼がどこに住んでいるか知っている」。語順は 疑問詞＋主語＋動詞。', '完成',
      mid('I know where he lives.', 100, 18, C.green),
      mid('疑問詞 ＋ 主語 ＋ 動詞', 150, 15, C.ink)),
    S('did の場合も同じ。What did he buy? → what he bought。did が消えて、buy が過去形 bought になる。', 'did の場合',
      bx(10, 56, 300, 36, 'What did he buy?', C.blue, FILL.blue, 14),
      ar(160, 94, 160, 116, C.gray),
      bx(10, 118, 300, 36, 'Do you know what he bought?', C.green, FILL.green, 14)),
    S('be動詞なら、主語のあとに回す。Where is he? → where he is。', 'be動詞の場合',
      bx(10, 56, 300, 36, 'Where is he?', C.blue, FILL.blue, 14),
      ar(160, 94, 160, 116, C.gray),
      bx(10, 118, 300, 36, 'I don\'t know where he is.', C.green, FILL.green, 14)),
    S('疑問詞＋to不定詞。how to get to（行き方）。Please tell me how to get to the station.', 'how to ～',
      mid('Please tell me', 80, 16, C.ink),
      mid('how to get to the station.', 110, 16, C.red),
      mid('how to ～ ＝ 〜のしかた', 160, 14, C.ink)),
    S('確かめ。where does he live は誤り。where he lives が正しい。', '確かめ',
      bx(10, 56, 300, 36, 'Do you know where does he live?', C.red, FILL.red, 12),
      ng(36, 124),
      lb(62, 129, '疑問文の語順は誤り', 13, C.red, 'start', true),
      bx(10, 150, 300, 36, 'Do you know where he lives?', C.green, FILL.green, 12),
      ok(36, 218),
      lb(62, 223, '平叙文の語順', 13, C.green, 'start', true)),
  ], '動かして、1つずつ たしかめよう'),

  // 10. 分詞の後置修飾
  lf_ritsumeikan_eigo_10: show([
    S('関係代名詞の文。The boy who is playing soccer is Ken.「サッカーをしている少年はケンだ」。', '関係代名詞の文',
      mid('The boy who is playing soccer', 90, 14, C.blue),
      mid('is Ken.', 120, 14, C.blue)),
    (() => {
      const r = chips(['The boy', ['who is', C.gray, FILL.gray], ['playing soccer', C.red, FILL.red]], 80, 14);
      return S('who is を省くと、分詞のかたまりが名詞を後ろから説明する形になる。', 'who is を省く', ...r.els, ln(r.xs[1].x, 80, r.xs[1].x + r.xs[1].w, 110, C.red, false, 2), mid('who is は省ける', 140, 14, C.ink));
    })(),
    S('完成。The boy playing soccer is Ken. かたまりを前に置くと名詞までが遠くなるので、後ろに置く。', 'かたまりは名詞の後ろ',
      mid('The boy playing soccer is Ken.', 100, 16, C.green),
      mid('1語なら前（a sleeping baby）', 150, 13, C.ink),
      mid('かたまりなら後ろ', 176, 13, C.ink)),
    S('選び方。名詞が動作をするなら ～ing、動作を受けるなら過去分詞。', '～ing か過去分詞か',
      bx(10, 52, 146, 70, '～ing\nする（能動）\nthe boy playing', C.green, FILL.green, 12),
      bx(164, 52, 146, 70, '過去分詞\nされる（受動）\nthe car made', C.blue, FILL.blue, 12),
      mid('日本語で「〜が…する／される」と言う', 170, 13, C.gray)),
    S('受動の例。言語は「話される」側。the language spoken in Canada。', '過去分詞の例',
      mid('the language spoken in Canada', 90, 16, C.blue),
      mid('言語は話される側 → spoken', 130, 14, C.ink),
      mid('who is を補うと：which is spoken', 168, 13, C.gray)),
    S('能動の例。少女は立っている。The girl standing under the tree is my sister.', '～ing の例',
      mid('The girl standing under the tree', 90, 14, C.green),
      mid('is my sister.', 116, 14, C.green),
      mid('少女が立っている → standing', 160, 14, C.ink)),
    S('呼び名。「ケンと呼ばれている少年」は、少年が呼ばれる側なので過去分詞 called。', 'called',
      mid('the boy called Ken', 90, 17, C.blue),
      mid('少年は呼ばれる（受動）→ called', 130, 14, C.ink),
      mid('calling Ken は「ケンを呼んでいる」', 170, 14, C.red)),
    S('確かめ。名詞が動作を受けるなら、過去分詞。', '確かめ',
      bx(10, 56, 300, 36, 'The boy calling Ken is my friend.', C.red, FILL.red, 12),
      ng(36, 124),
      lb(62, 129, '「ケンを呼んでいる」の意味', 13, C.red, 'start', true),
      bx(10, 150, 300, 36, 'The boy called Ken is my friend.', C.green, FILL.green, 12),
      ok(36, 218),
      lb(62, 223, '「ケンと呼ばれている」', 13, C.green, 'start', true)),
  ], '動かして、1つずつ たしかめよう'),

  // 11. 整序英作文
  lf_ritsumeikan_eigo_11: show([
    S('例題1。「これは私の父が作ったケーキです。」語群は5つ。', '語群を見る',
      ...chips(['the cake', 'this', 'my father', 'is', 'made'], 80, 13).els,
      mid('語を動かして探さない', 170, 14, C.gray)),
    S('手順1。骨組み（主語＋動詞）を決める。「これは〜です」＝ This is。', '①骨組み',
      ...chips([['This', C.red, FILL.red], ['is', C.red, FILL.red], '＿＿＿＿＿'], 80, 15).els,
      mid('主語 This、動詞 is', 140, 14, C.red)),
    S('手順2。かたまりを作る。「私の父が作った」は「主語＋動詞」の my father made。', '②かたまり',
      ...chips([['the cake', C.green, FILL.green], ['my father made', C.green, FILL.green]], 80, 14).els,
      mid('cake を後ろから説明する', 140, 14, C.ink),
      mid('（関係代名詞は省略された形）', 166, 13, C.gray)),
    S('手順3。骨組みの後ろに、かたまりを並べる。This is the cake my father made.', '③並べる',
      mid('This is the cake my father made.', 100, 16, C.green),
      mid('主語＋動詞の順を守る', 150, 14, C.ink)),
    S('手順4。確かめる。語群の5つを全部使った。日本語の意味とも合う。文頭は大文字、文末はピリオド。', '④確かめる',
      mid('語群 5つ ＝ 使った 5つ', 90, 15, C.ink),
      mid('「私の父が作ったケーキ」と合う', 130, 14, C.ink),
      mid('文頭は大文字・文末は .', 170, 14, C.gray)),
    S('例題2。「ピアノを弾いている少女は私の妹です。」語群は5つ。主語が長いのが特徴。', '例題2：語群',
      ...chips(['is', 'the girl', 'playing', 'my sister', 'the piano'], 80, 12).els,
      mid('主語は長い「少女」のかたまり', 150, 14, C.gray)),
    (() => {
      const r = chips([['the girl', C.green, FILL.green], ['playing the piano', C.green, FILL.green]], 80, 14);
      return S('かたまりを作る。the girl のあとに playing the piano を続けて、主語を完成させる。', 'かたまり：主語を完成', ...r.els, mid('動詞 is を置くのは、そのあと', 140, 14, C.red));
    })(),
    S('答え。The girl playing the piano is my sister. 先に is を置いて「is playing」にしてしまうと、my sister が余って文が成立しない。', '答えと確かめ',
      mid('The girl playing the piano', 90, 15, C.green),
      mid('is my sister.', 116, 15, C.green),
      mid('5語すべてを使った', 170, 14, C.ink)),
  ], '動かして、1つずつ たしかめよう'),

  // 12. 和文英訳・自由英作文
  lf_ritsumeikan_eigo_12: show([
    S('日本語：「私の姉は毎朝6時に起きて、犬と散歩します。」まず主語と動詞を決める。', '和文英訳：日本語を読む',
      mid('私の姉は毎朝6時に起きて、', 90, 14, C.ink),
      mid('犬と散歩します。', 116, 14, C.ink),
      mid('主語はだれ？ 動詞は？', 170, 14, C.gray)),
    S('主語は My sister（三人称単数）。現在の習慣なので現在形。だから動詞に s がつく。', '主語と動詞',
      ...chips([['My sister', C.blue, FILL.blue], ['gets up', C.green, FILL.green]], 80, 14).els,
      mid('主語が三人称単数 → 動詞に s', 140, 14, C.red)),
    S('「犬と散歩する」は難しいので、言いかえる。take a walk with her dog（犬と散歩をする）。', 'やさしく言いかえる',
      bx(20, 56, 280, 36, '犬と散歩する', C.gray, FILL.gray, 14),
      ar(160, 94, 160, 116, C.gray),
      bx(20, 118, 280, 36, 'takes a walk with her dog', C.green, FILL.green, 13),
      mid('2つ目の動詞にも s', 190, 13, C.red)),
    S('組み立て。My sister gets up at six every morning and takes a walk with her dog.', '英文を組み立てる',
      lb(14, 80, 'My sister gets up at six', 14, C.green, 'start', true),
      lb(14, 110, 'every morning and takes a walk', 14, C.green, 'start', true),
      lb(14, 140, 'with her dog.', 14, C.green, 'start', true)),
    S('見直し。動詞は gets と takes のどちらにも s がついている。時制は現在形。', '見直し',
      bx(20, 56, 280, 36, '①動詞 gets・takes に s ○', C.green, FILL.green, 14),
      bx(20, 106, 280, 36, '②時制：現在の習慣 ○', C.green, FILL.green, 14),
      bx(20, 156, 280, 36, '③名詞・つづり ○', C.green, FILL.green, 14)),
    S('自由英作文の型。意見 → 理由1 → 理由2 → まとめ。理由が2つあると説得力が増す。', '自由英作文の型',
      bx(20, 46, 280, 30, '意見：I like ～ because ～', C.blue, FILL.blue, 13),
      bx(20, 86, 280, 30, '理由1：First,', C.green, FILL.green, 13),
      bx(20, 126, 280, 30, '理由2：Second,', C.green, FILL.green, 13),
      bx(20, 166, 280, 30, 'まとめ', C.purple, FILL.purple, 13)),
    S('例。夏と冬のどちらが好きか。3文で、意見・理由1・理由2がそろっている。', '例：3文で書く',
      lb(14, 70, 'I like summer better than winter.', 13, C.blue, 'start', true),
      lb(14, 110, 'First, I can swim in the sea.', 13, C.green, 'start', true),
      lb(14, 150, 'Second, I can enjoy fireworks', 13, C.green, 'start', true),
      lb(14, 172, 'with my family.', 13, C.green, 'start', true)),
    S('確かめ。主語が My sister のとき、get up ではなく gets up。日本語に区別がなくても、英語では主語の数に動詞を合わせる。', '確かめ：三単現の s',
      bx(10, 56, 300, 36, 'My sister get up at six.', C.red, FILL.red, 13),
      ng(36, 124),
      lb(62, 129, 's がない', 13, C.red, 'start', true),
      bx(10, 150, 300, 36, 'My sister gets up at six.', C.green, FILL.green, 13),
      ok(36, 218),
      lb(62, 223, '主語に合わせて s', 13, C.green, 'start', true)),
  ], '動かして、1つずつ たしかめよう'),
};
