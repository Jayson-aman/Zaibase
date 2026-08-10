import type { Figure } from './figures';

// 中学受験 英語「疑問詞・疑問文・否定文の作り方」拡張ユニット（eigo_s191〜eigo_s225）の教科書用図解。
// キーは lessons-eigo-ext06.ts の figureId と対応。
// 英語は「語順」がすべてなので、四角の枠の各辺に①→②→③→④の順で語を置いた polygon を
// 語順ボックスとして使っている。そのほか、頻度・範囲・分類など数量で示せる箇所だけに図を付けた（35課中16課）。
export const lessonFigsEigoExt06: Record<string, Figure> = {
  // s191：be動詞のYes/No疑問文の語順ボックス
  lf_eigoext06_191: {
    kind: 'polygon',
    points: [
      { x: 0, y: 10 },
      { x: 12, y: 10 },
      { x: 12, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['① be動詞 Is', '② 主語 this', '③ 残りの語 your book', '④ ?'],
    fill: true,
    caption:
      '四角の辺を左上から時計回りに①→②→③→④と読む。be動詞の文は「be動詞を主語の前に出す」だけで疑問文になる（This is your book. → Is this your book?）。do や does は使わない',
  },

  // s192：一般動詞のYes/No疑問文の語順ボックス
  lf_eigoext06_192: {
    kind: 'polygon',
    points: [
      { x: 0, y: 10 },
      { x: 12, y: 10 },
      { x: 12, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['① Do / Does', '② 主語 you / he', '③ 動詞は原形 play', '④ 残りの語 + ?'],
    fill: true,
    caption:
      '一般動詞の文は Do / Does を先頭に置いてつくる。主語が三人称単数（he・she・Ken など）のときだけ Does を使い、そのぶん動詞から s を取って原形に戻す（He plays tennis. → Does he play tennis?）',
  },

  // s194：助動詞を使った依頼・お願いの「ていねいさ」の度合い
  lf_eigoext06_194: {
    kind: 'barChart',
    yLabel: 'ていねいさ',
    yMax: 100,
    bars: [
      { label: 'Can you', value: 40, color: '#0EA5E9' },
      { label: 'Will you', value: 45, color: '#0EA5E9' },
      { label: 'Could you', value: 75, color: '#0369A1' },
      { label: 'Would you', value: 85, color: '#0369A1' },
      { label: 'May I', value: 80, color: '#16A34A' },
    ],
    caption:
      '助動詞で始まる疑問文のていねいさのイメージ。過去形の could / would を使うと遠回しになり、ていねいな言い方になる。May I 〜? は「〜してもよろしいですか」と許可を求める言い方',
  },

  // s196：疑問詞つき疑問文の語順ボックス
  lf_eigoext06_196: {
    kind: 'polygon',
    points: [
      { x: 0, y: 10 },
      { x: 12, y: 10 },
      { x: 12, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['① 疑問詞 What', '② do / does / be動詞', '③ 主語 you', '④ 動詞 want + ?'],
    fill: true,
    caption:
      '疑問詞つき疑問文は「疑問詞を先頭に置き、そのあとは Yes/No 疑問文とまったく同じ語順」でつくる。②の do を落として What you want? としてしまうのがいちばん多い誤り',
  },

  // s199：What と Which の「選ぶ範囲」のちがい
  lf_eigoext06_199: {
    kind: 'pieChart',
    slices: [
      { label: 'coffee', value: 34, color: '#0EA5E9' },
      { label: 'tea', value: 33, color: '#0369A1' },
      { label: 'juice', value: 33, color: '#16A34A' },
    ],
    caption:
      '円の中の三つが「目の前に示された選択肢」。この決まった範囲から選ばせるときは Which を使う（Which do you want, coffee, tea or juice?）。範囲を決めずに自由に答えさせるときは What（What do you want to drink?）',
  },

  // s201：Whose + 名詞 の語順ボックス
  lf_eigoext06_201: {
    kind: 'polygon',
    points: [
      { x: 0, y: 10 },
      { x: 12, y: 10 },
      { x: 12, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['① Whose', '② 名詞 bag', '③ be動詞 is', '④ 主語 this + ?'],
    fill: true,
    caption:
      'Whose は「だれの」なので、すぐうしろに名詞をくっつけて Whose bag のひとかたまりを作り、それを文の先頭に置く。名詞をはさまない Whose is this bag? という形も正しい',
  },

  // s202：前置詞が文の最後に残る疑問文の語順ボックス
  lf_eigoext06_202: {
    kind: 'polygon',
    points: [
      { x: 0, y: 10 },
      { x: 12, y: 10 },
      { x: 12, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['① Who', '② do you', '③ go to school', '④ with ?'],
    fill: true,
    caption:
      'もとの文 I go to school with Ken. の Ken をたずねる形。Ken は with のうしろにあった語なので、Who を先頭に出しても with は文の最後に取り残される。この with を書き落とす誤りが非常に多い',
  },

  // s206：時をあらわす at / on / in の「はば」のちがい
  lf_eigoext06_206: {
    kind: 'barChart',
    yLabel: '時のはばの大きさ（イメージ）',
    yMax: 12,
    bars: [
      { label: 'at 七時', value: 1, color: '#0EA5E9' },
      { label: 'on 月曜日', value: 3, color: '#0369A1' },
      { label: 'in 四月', value: 8, color: '#16A34A' },
      { label: 'in 2026年', value: 11, color: '#16A34A' },
    ],
    caption:
      '時をあらわす前置詞は「はばの大きさ」で決まる。点のようにせまい時刻には at、一日分の広さの曜日・日付には on、月・季節・年のように広いものには in を使う',
  },

  // s211：How many と How much の使い分け（数えられる名詞・数えられない名詞）
  lf_eigoext06_211: {
    kind: 'pieChart',
    slices: [
      { label: '数えられる名詞（How many）', value: 70, color: '#0EA5E9' },
      { label: '数えられない名詞（How much）', value: 30, color: '#F59E0B' },
    ],
    caption:
      '名詞は大きく二つに分かれる。book・apple・student のように一つ二つと数えられる名詞には How many＋複数形、water・money・time・milk のように形が決まっていない名詞には How much を使う',
  },

  // s212：How long は「はじめから終わりまでのはば」をたずねる
  lf_eigoext06_212: {
    kind: 'numberLine',
    min: 0,
    max: 60,
    step: 10,
    points: [
      { x: 10, label: '家を出る' },
      { x: 40, label: '学校に着く' },
    ],
    segments: [{ from: 10, to: 40 }],
    caption:
      '目もりは分。How long 〜? は矢印の「はば」（10分から40分までの30分）をたずねる言い方で、答えは It takes thirty minutes. となる。一方 What time 〜? は目もりの上の「一点」をたずねる',
  },

  // s213：頻度をあらわす副詞の度合い
  lf_eigoext06_213: {
    kind: 'barChart',
    yLabel: 'どれくらいの割合か（％）',
    yMax: 100,
    bars: [
      { label: 'always', value: 100, color: '#0369A1' },
      { label: 'usually', value: 80, color: '#0EA5E9' },
      { label: 'often', value: 60, color: '#0EA5E9' },
      { label: 'sometimes', value: 40, color: '#16A34A' },
      { label: 'seldom', value: 10, color: '#F59E0B' },
      { label: 'never', value: 0, color: '#EF4444' },
    ],
    caption:
      'How often 〜? に答えるときの頻度の副詞の目安。always（いつも）から never（一度もない）まで段階がある。これらの副詞は一般動詞の前、be動詞のうしろに置く',
  },

  // s215：How + 形容詞・副詞 が何をたずねるかの分類
  lf_eigoext06_215: {
    kind: 'pieChart',
    slices: [
      { label: '数 How many', value: 18, color: '#0EA5E9' },
      { label: '量・値段 How much', value: 18, color: '#0369A1' },
      { label: '長さ・期間 How long', value: 16, color: '#16A34A' },
      { label: '距離 How far', value: 16, color: '#F59E0B' },
      { label: '頻度 How often', value: 16, color: '#A855F7' },
      { label: '年齢・高さ How old / tall', value: 16, color: '#EF4444' },
    ],
    caption:
      'How のうしろに形容詞・副詞を置くと「どれくらい〜か」をたずねる形になる。何をたずねているかは、うしろに置いた語で決まる。まとめて覚えると、聞かれたことと答え方がずれなくなる',
  },

  // s216：疑問詞が主語のときは語順が変わらない（三つの箱）
  lf_eigoext06_216: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 12, y: 0 },
      { x: 6, y: 9 },
    ],
    sideLabels: ['① Who（主語）', '② broke（動詞）', '③ this window ?'],
    fill: true,
    caption:
      '疑問詞そのものが主語のときは箱が三つしかない。do / does / did を入れる場所がなく、語順は Ken broke this window. と同じまま Who broke this window? となる',
  },

  // s219：間接疑問では語順が平叙文（主語→動詞）に戻る
  lf_eigoext06_219: {
    kind: 'polygon',
    points: [
      { x: 0, y: 10 },
      { x: 12, y: 10 },
      { x: 12, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['① I know', '② 疑問詞 where', '③ 主語 he', '④ 動詞 lives .'],
    fill: true,
    caption:
      'Where does he live? が文の中に入ると、does が消えて③主語→④動詞の平叙文の語順に戻り、動詞は主語に合わせて lives になる。文全体は疑問文ではないので最後はピリオド',
  },

  // s223：一般動詞の否定文の語順ボックス
  lf_eigoext06_223: {
    kind: 'polygon',
    points: [
      { x: 0, y: 10 },
      { x: 12, y: 10 },
      { x: 12, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['① 主語 He', '② does not（doesn’t）', '③ 動詞は原形 like', '④ 残りの語 natto .'],
    fill: true,
    caption:
      '一般動詞の否定文は主語のうしろに do not / does not / did not を入れる。②で三単現や過去のしるしを引き受けるので、③の動詞は必ず原形に戻る（He likes natto. → He does not like natto.）',
  },

  // s225：全体否定と部分否定のちがい
  lf_eigoext06_225: {
    kind: 'pieChart',
    slices: [
      { label: '来た生徒', value: 60, color: '#0EA5E9' },
      { label: '来なかった生徒', value: 40, color: '#94A3B8' },
    ],
    caption:
      'Not all the students came. は「全員が来たわけではない」という部分否定で、来た生徒もいる（図の青い部分）。全員が来なかった＝全体否定は None of the students came. と表す',
  },
};
