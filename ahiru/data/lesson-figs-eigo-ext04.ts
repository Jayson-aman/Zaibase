import type { Figure } from './figures';

// 中学受験 英語「時制（現在・過去・未来・進行形・現在完了）」拡張ユニット
// （eigo_s116〜eigo_s155）の教科書用図解。
// キーは lessons-eigo-ext04.ts の figureId と対応。
// 時制は「時間のどこを指しているか」「点なのか幅なのか」が理解の中心なので、
// 数直線（numberLine）を時間軸に見立てた図を主役にしてある（40課中17課）。
export const lessonFigsEigoExt04: Record<string, Figure> = {
  // s116：現在形（習慣）は「今この瞬間」ではなく、くり返し起こることを指す
  lf_eigoext04_116: {
    kind: 'numberLine',
    min: -4,
    max: 4,
    step: 1,
    points: [
      { x: -3, label: '先週も' },
      { x: -1, label: '昨日も' },
      { x: 0, label: '今' },
      { x: 1, label: '明日も' },
      { x: 3, label: '来週も' },
    ],
    caption:
      '現在形「I play soccer every Sunday.」が指している時間。今この瞬間の動作ではなく、過去にもくり返してきて、これからもくり返す「いつものこと」を表す。今まさにしている動作は現在進行形で表す',
  },

  // s120：過去形は過去の一点で始まって終わり、今とはつながらない
  lf_eigoext04_120: {
    kind: 'numberLine',
    min: -6,
    max: 2,
    step: 1,
    points: [
      { x: -4, label: 'yesterday（ここで完結）' },
      { x: 0, label: '今' },
    ],
    caption:
      '過去形が指している時間。過去のある一点で起こって、そこで終わっている。今とは線がつながっていないので、yesterday・last week・three days ago のような「過去の時を表す語」といっしょに使える',
  },

  // s124：規則動詞と不規則動詞の数の割合（不規則は少数だが超頻出）
  lf_eigoext04_124: {
    kind: 'pieChart',
    slices: [
      { label: '規則動詞', value: 95, color: '#0EA5E9' },
      { label: '不規則動詞', value: 5, color: '#F59E0B' },
    ],
    caption:
      '英語の動詞全体に占める割合のイメージ。不規則動詞は200語ほどしかなく、数の上ではごくわずか。ところが be・have・go・come・take・see のように毎日使う動詞ほど不規則なので、入試に出る英文に限ると不規則動詞に出会う回数は非常に多い',
  },

  // s128：不規則動詞を3変化の型で分けたときの内訳
  lf_eigoext04_128: {
    kind: 'barChart',
    xLabel: '変化の型',
    yLabel: '語数（およそ）',
    yMax: 60,
    bars: [
      { label: 'A-B-B', value: 50, color: '#0EA5E9' },
      { label: 'A-B-C', value: 30, color: '#0369A1' },
      { label: 'A-A-A', value: 12, color: '#16A34A' },
      { label: 'A-B-A', value: 8, color: '#F59E0B' },
    ],
    caption:
      '中学入試レベルで覚えたい不規則動詞およそ100語を、原形-過去形-過去分詞の変化の型で分けたときのおおよその内訳。A-B-B型（teach-taught-taught）が半分を占めるので、まずこの型からまとめて覚えると効率がよい。A-B-C型（go-went-gone）は数は少ないが、どれも最頻出の動詞ばかり',
  },

  // s129：現在進行形は「今」を含む短い幅
  lf_eigoext04_129: {
    kind: 'numberLine',
    min: -3,
    max: 3,
    step: 1,
    segments: [{ from: -1, to: 1 }],
    points: [{ x: 0, label: '今（話している瞬間）' }],
    caption:
      '現在進行形 be＋~ing が指している時間。少し前に始まって、今まさに続いていて、もうすぐ終わる短い「幅」。この幅の真ん中に「今」がある。だから now・right now・Look!・Listen! と相性がよい',
  },

  // s130：現在形（くり返す点）と現在進行形（今の幅）の対比
  lf_eigoext04_130: {
    kind: 'numberLine',
    min: -4,
    max: 4,
    step: 1,
    segments: [{ from: -1, to: 1 }],
    points: [
      { x: -3, label: '毎日' },
      { x: -2, label: '毎日' },
      { x: 2, label: '毎日' },
      { x: 3, label: '毎日' },
    ],
    caption:
      '同じ「〜しています」でも指している時間が違う。点＝現在形（I study English every day. くり返し起こること）、真ん中の帯＝現在進行形（I am studying English now. 今この瞬間の幅）。日本語の「〜ている」に引きずられず、どちらを指しているかで選ぶ',
  },

  // s133：過去進行形（続いていた幅）の途中に、過去形（一回の動作）が割りこむ
  lf_eigoext04_133: {
    kind: 'numberLine',
    min: -8,
    max: 2,
    step: 2,
    segments: [{ from: -6, to: -2 }],
    points: [
      { x: -4, label: 'I came home.' },
      { x: 0, label: '今' },
    ],
    caption:
      'When I came home, my mother was cooking dinner. の時間関係。帯＝過去進行形（ずっと続いていた動作の幅）、点＝過去形（その途中で起きた一回きりの動作）。長く続いていたほうを進行形にするのが見分け方',
  },

  // s135：状態動詞はもともと長い幅を持っているので進行形にしない
  lf_eigoext04_135: {
    kind: 'numberLine',
    min: -6,
    max: 6,
    step: 2,
    segments: [{ from: -6, to: 6 }],
    points: [{ x: 0, label: '今' }],
    caption:
      'know・like・want・have などの状態動詞が指している時間。動作ではなく「ずっと続いている状態」そのものなので、はじめから長い幅を持っている。わざわざ進行形にして幅をつくる必要がなく、I am knowing は誤りになる',
  },

  // s137：will は「今その場で決めた／今予測した」ことを未来に向ける
  lf_eigoext04_137: {
    kind: 'numberLine',
    min: -4,
    max: 6,
    step: 2,
    points: [
      { x: 0, label: '今ここで決めた' },
      { x: 4, label: "I'll help you.（実行）" },
    ],
    caption:
      'will が指している時間。決めたのは「今この瞬間」で、実行するのはこれから。その場の思いつき・申し出・今の予測に使う。決めた時点が今にあるのが will の特徴',
  },

  // s139：be going to は「前から決めていた」ことを未来に向ける
  lf_eigoext04_139: {
    kind: 'numberLine',
    min: -6,
    max: 6,
    step: 2,
    points: [
      { x: -4, label: '前に決めた' },
      { x: 0, label: '今（準備が進行中）' },
      { x: 4, label: '実行' },
    ],
    caption:
      'be going to が指している時間。決めた時点が今よりも前にあり、今はもうその予定に向かって進んでいる。だから切符を買った・約束したなど、準備ずみの予定に使う。will（今決めた）との違いは「決めた時点がどこか」',
  },

  // s141：未来を表す四つの言い方を「いつ決まったか×どれくらい確定か」で配置
  lf_eigoext04_141: {
    kind: 'coordinate',
    xRange: [-6, 2],
    yRange: [0, 10],
    points: [
      { x: -5, y: 9, label: '現在形（時刻表）' },
      { x: -4, y: 8, label: '現在進行形（約束ずみ）' },
      { x: -3, y: 6, label: 'be going to' },
      { x: 0, y: 3, label: 'will' },
    ],
    caption:
      '未来を表す四つの言い方の位置関係。横軸は「いつ決まったか」（左へ行くほど前に決まっている）、縦軸は「どれくらい確定しているか」。左上ほど動かしにくい予定、右下ほどその場の判断や単なる予測になる',
  },

  // s142：現在完了は「過去のある時点から今まで」の幅
  lf_eigoext04_142: {
    kind: 'numberLine',
    min: -6,
    max: 2,
    step: 1,
    segments: [{ from: -5, to: 0 }],
    points: [{ x: 0, label: '今' }],
    caption:
      '現在完了 have/has＋過去分詞の基本イメージ。過去のある時点から今までがひとつながりの帯になっている。過去形が「点」なのに対して、現在完了は必ず今まで届く「幅」を持つ。この一本の線が三つの用法すべてに共通する',
  },

  // s144：since は起点の点、for は幅の長さ
  lf_eigoext04_144: {
    kind: 'numberLine',
    min: -6,
    max: 2,
    step: 1,
    segments: [{ from: -5, to: 0 }],
    points: [
      { x: -5, label: 'since 2021（起点）' },
      { x: 0, label: '今' },
    ],
    caption:
      'for と since の違い。since は「いつから」＝帯の左はしの一点を指し、for は左はしから今までの「長さ」全体を指す。今が2026年なら、for five years と since 2021 は同じ帯を別の角度から言っているだけ。「〜前から」は for 〜 か since 〜 ago になる',
  },

  // s146：完了・結果は「動作は終わったが、結果が今に残っている」
  lf_eigoext04_146: {
    kind: 'numberLine',
    min: -6,
    max: 2,
    step: 1,
    segments: [{ from: -1, to: 0 }],
    points: [
      { x: -1, label: '動作はここで終わった' },
      { x: 0, label: '今（その結果が残る）' },
    ],
    caption:
      '完了・結果の現在完了。I have just finished my homework. は、終えたのは少し前でも、「今は宿題が残っていない」という結果が今につながっている。帯が短く、右はしが今にぴったりくっついているのが完了・結果のイメージ',
  },

  // s150：経験は「生まれてから今まで」の幅の中に点がいくつあるか
  lf_eigoext04_150: {
    kind: 'numberLine',
    min: -10,
    max: 2,
    step: 2,
    segments: [{ from: -9, to: 0 }],
    points: [
      { x: -8, label: '1回目' },
      { x: -5, label: '2回目' },
      { x: -2, label: '3回目' },
      { x: 0, label: '今' },
    ],
    caption:
      '経験の現在完了。I have visited Kyoto three times. は、生まれてから今までという長い帯の中に、その経験が何回あるかを数えている。いつ行ったかは問題にしないので、three years ago のような「いつ」を表す語とはいっしょに使えない',
  },

  // s153：同じ出来事でも、過去形は今と切れ、現在完了は今につながる
  lf_eigoext04_153: {
    kind: 'numberLine',
    min: -8,
    max: 2,
    step: 2,
    segments: [{ from: -5, to: 0 }],
    points: [
      { x: -5, label: 'なくした（過去形はここで終わり）' },
      { x: 0, label: '今（現在完了はここまで届く）' },
    ],
    caption:
      '同じ出来事でも、指す範囲が違う。I lost my key yesterday.＝点だけを言うので、今見つかっているかどうかには触れない。I have lost my key.＝帯が今まで届くので、「今も見つかっていない」まで表す',
  },

  // s155：時制の全体像を一本の時間軸にまとめる
  lf_eigoext04_155: {
    kind: 'numberLine',
    min: -8,
    max: 6,
    step: 2,
    segments: [{ from: -4, to: 0 }],
    points: [
      { x: -6, label: '過去形（点）' },
      { x: 0, label: '現在形・今' },
      { x: 4, label: 'will（未来の点）' },
    ],
    caption:
      '時制の全体像。過去形＝過去の一点、現在完了＝過去から今まで届く帯、現在形＝今を中心にくり返す、will／be going to＝これからのこと。迷ったら「点か、幅か」「今とつながっているか」の二つだけを確かめる',
  },
};
