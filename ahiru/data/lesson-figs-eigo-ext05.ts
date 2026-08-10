import type { Figure } from './figures';

// 中学受験 英語「助動詞・命令文・感嘆文・付加疑問」拡張ユニット（eigo_s156〜eigo_s190）の教科書用図解。
// キーは lessons-eigo-ext05.ts の figureId と対応。
// 英語は図にしにくい教科なので、
//   ①語順そのものが得点を左右する箇所（数直線の目盛りを「語順の位置」に見立てる）
//   ②「確信の強さ」「義務の強さ」「ていねいさ」のように目盛りで比べると理解が進む箇所
// にだけ図を付けてある（35課中15課）。
export const lessonFigsEigoExt05: Record<string, Figure> = {
  // s156：助動詞を使った肯定文の語順（助動詞のうしろは必ず原形）
  lf_eigoext05_156: {
    kind: 'numberLine',
    min: 0,
    max: 5,
    step: 1,
    points: [
      { x: 1, label: '主語' },
      { x: 2, label: '助動詞' },
      { x: 3, label: '原形' },
      { x: 4, label: 'その他' },
    ],
    caption: '目盛りは語順の位置を表す。助動詞の文は「主語＋助動詞＋動詞の原形＋そのほか」。例）She(①) can(②) play(③) the piano(④). 主語が三人称単数でも can に s は付かず、play にも s は付かない',
  },

  // s157：can の疑問文の語順（Do / Does は使わない）
  lf_eigoext05_157: {
    kind: 'numberLine',
    min: 0,
    max: 5,
    step: 1,
    points: [
      { x: 1, label: '助動詞' },
      { x: 2, label: '主語' },
      { x: 3, label: '原形' },
      { x: 4, label: 'その他' },
    ],
    caption: '助動詞の疑問文は、助動詞を主語の前に出すだけ。例）Can(①) you(②) play(③) the guitar(④)? Do / Does は使わない。答えも Yes, I can. / No, I can\'t. と can で受ける',
  },

  // s158：can の時制（過去 could ／ 現在 can ／ 未来 will be able to）
  lf_eigoext05_158: {
    kind: 'numberLine',
    min: 0,
    max: 4,
    step: 1,
    points: [
      { x: 1, label: 'could' },
      { x: 2, label: 'can' },
      { x: 3, label: 'will be able to' },
    ],
    caption: '「〜できる」の時間軸。左が過去、右が未来。can に未来形はないので、未来は will be able to で表す（× will can）。過去に一回だけやりとげたことは was / were able to を使う',
  },

  // s161：推量を表す助動詞の「確信の強さ」
  lf_eigoext05_161: {
    kind: 'barChart',
    yLabel: '確信(%)',
    yMax: 100,
    bars: [
      { label: 'must', value: 95, color: '#0369A1' },
      { label: 'will', value: 90, color: '#0284C7' },
      { label: 'may', value: 50, color: '#0EA5E9' },
      { label: 'might', value: 30, color: '#38BDF8' },
      { label: "can't", value: 5, color: '#64748B' },
    ],
    caption: '棒の高さは「そうである可能性がどれくらいと話し手が思っているか」の目安。must（〜にちがいない）が最も強く、might（ひょっとすると）は弱い。can\'t は「〜のはずがない」で、ほぼないと打ち消している',
  },

  // s164：have to の疑問文の語順（一般動詞なので do が必要）
  lf_eigoext05_164: {
    kind: 'numberLine',
    min: 0,
    max: 6,
    step: 1,
    points: [
      { x: 1, label: 'Do' },
      { x: 2, label: '主語' },
      { x: 3, label: 'have to' },
      { x: 4, label: '原形' },
      { x: 5, label: 'その他' },
    ],
    caption: 'have to の have は一般動詞なので、疑問文には Do / Does が必要。例）Do(①) you(②) have to(③) go(④) now(⑤)? 助動詞 must なら Must you go now? となり do は使わない',
  },

  // s166：must not と don't have to は正反対（義務の数直線）
  lf_eigoext05_166: {
    kind: 'numberLine',
    min: -120,
    max: 120,
    step: 60,
    points: [
      { x: -100, label: 'must not' },
      { x: 0, label: "don't have to" },
      { x: 100, label: 'must' },
    ],
    caption: '右へ行くほど「しなければならない」、左へ行くほど「してはいけない」。don\'t have to はまん中の0で「してもしなくてもよい」。must not は左端の禁止なので、don\'t have to とは正反対の意味になる',
  },

  // s167：助動詞を「推量の強さ」×「義務の強さ」の二軸で整理する
  lf_eigoext05_167: {
    kind: 'coordinate',
    xRange: [0, 10],
    yRange: [0, 10],
    points: [
      { x: 9, y: 9, label: 'must' },
      { x: 6, y: 6, label: 'should' },
      { x: 5, y: 3, label: 'may' },
      { x: 3, y: 1, label: 'might' },
      { x: 2, y: 4, label: 'can' },
    ],
    caption: '横軸＝推量の強さ（〜だろう）、縦軸＝義務・強制の強さ（〜しなければならない）。must は右上で「にちがいない」も「しなければならない」も最も強い。might は左下で、義務の意味はほとんど持たない',
  },

  // s169：助言・義務を表す表現の強さくらべ
  lf_eigoext05_169: {
    kind: 'barChart',
    yLabel: '強さ',
    yMax: 100,
    bars: [
      { label: 'must', value: 100, color: '#0369A1' },
      { label: 'have to', value: 85, color: '#0284C7' },
      { label: 'had better', value: 70, color: '#0EA5E9' },
      { label: 'should', value: 50, color: '#38BDF8' },
      { label: 'could', value: 25, color: '#64748B' },
    ],
    caption: '「〜したほうがよい／しなければならない」の強さの目安。had better は should より強く、「そうしないと困ったことになる」という警告のひびきがあるので、目上の人には使わない',
  },

  // s173：依頼表現のていねいさくらべ
  lf_eigoext05_173: {
    kind: 'barChart',
    yLabel: 'ていねいさ',
    yMax: 100,
    bars: [
      { label: '命令文', value: 10, color: '#64748B' },
      { label: 'Will you', value: 40, color: '#38BDF8' },
      { label: 'Can you', value: 45, color: '#0EA5E9' },
      { label: 'Would you', value: 80, color: '#0284C7' },
      { label: 'Could you', value: 85, color: '#0369A1' },
    ],
    caption: '人にものを頼むときのていねいさの目安。友達には Will you / Can you、目上の人や初対面の人には Would you / Could you を使う。文末に please を付けると、さらにていねいになる',
  },

  // s179：依頼（相手がする）と許可（自分がする）を二軸で整理する
  lf_eigoext05_179: {
    kind: 'coordinate',
    xRange: [0, 10],
    yRange: [0, 10],
    points: [
      { x: 3, y: 2, label: 'Can I' },
      { x: 6, y: 2, label: 'May I' },
      { x: 9, y: 2, label: 'Could I' },
      { x: 3, y: 8, label: 'Can you' },
      { x: 5, y: 8, label: 'Will you' },
      { x: 9, y: 8, label: 'Could you' },
    ],
    caption: '横軸＝ていねいさ、縦軸＝だれが動作をするか（下＝自分がする「許可」、上＝相手がする「依頼」）。I で始まれば許可を求める文、you で始まれば依頼の文。右へ行くほどていねいになる',
  },

  // s181：命令文の語順（主語を書かず、動詞の原形で始める）
  lf_eigoext05_181: {
    kind: 'numberLine',
    min: 0,
    max: 4,
    step: 1,
    points: [
      { x: 1, label: '動詞の原形' },
      { x: 2, label: '目的語' },
      { x: 3, label: 'その他' },
    ],
    caption: '命令文は主語 You を書かず、動詞の原形から始める。例）Open(①) the window(②). be動詞の文は原形の Be を使い、You are quiet. → Be quiet. となる',
  },

  // s183：please の位置は文頭か文末の二か所だけ
  lf_eigoext05_183: {
    kind: 'numberLine',
    min: 0,
    max: 5,
    step: 1,
    points: [
      { x: 1, label: 'Please' },
      { x: 2, label: '原形' },
      { x: 3, label: '目的語' },
      { x: 4, label: ', please' },
    ],
    caption: 'please を置けるのは文頭（①）か文末（④）だけ。文末に置くときは直前にコンマを入れる。例）Please open the door. ＝ Open the door, please. 文の途中には入れられない',
  },

  // s185：What で始まる感嘆文の語順
  lf_eigoext05_185: {
    kind: 'numberLine',
    min: 0,
    max: 6,
    step: 1,
    points: [
      { x: 1, label: 'What' },
      { x: 2, label: 'a(an)' },
      { x: 3, label: '形容詞' },
      { x: 4, label: '名詞' },
      { x: 5, label: '主語+動詞' },
    ],
    caption: 'What の感嘆文の語順。例）What a beautiful flower this is! 数えられる名詞の単数には a / an が必要で、複数形や数えられない名詞には付けない。文末の「主語＋動詞」は省略できる',
  },

  // s186：How で始まる感嘆文の語順
  lf_eigoext05_186: {
    kind: 'numberLine',
    min: 0,
    max: 4,
    step: 1,
    points: [
      { x: 1, label: 'How' },
      { x: 2, label: '形容詞・副詞' },
      { x: 3, label: '主語+動詞' },
    ],
    caption: 'How の感嘆文の語順。例）How fast he runs! ／ How kind she is! How のうしろは形容詞か副詞ひとつだけで、名詞も a / an も入らない。主語と動詞は疑問文の語順にしない',
  },

  // s188：付加疑問文の作り方
  lf_eigoext05_188: {
    kind: 'numberLine',
    min: 0,
    max: 5,
    step: 1,
    points: [
      { x: 1, label: '本文' },
      { x: 2, label: 'コンマ' },
      { x: 3, label: '反対の形' },
      { x: 4, label: '代名詞?' },
    ],
    caption: '付加疑問文の作り方。本文が肯定なら否定の短縮形、否定なら肯定の形をコンマのあとに置き、主語を代名詞にかえて ? で終える。例）You are tired, aren\'t you? ／ Tom can\'t swim, can he?',
  },
};
