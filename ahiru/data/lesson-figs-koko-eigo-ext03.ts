import type { Figure } from './figures';

// 高校受験 英語「時制（現在・過去・未来・進行形）」拡張ユニット（koko_eigo_s071〜koko_eigo_s110）の図解。
// キーは lessons-koko-eigo-ext03.ts の figureId と対応（40課中18課）。
// 時制は「時間軸のどこを指すか」がすべてなので、numberLine を時間軸に見立てて統一してある。
// どの図でも 0 が「今（発話時）」、左が過去、右が未来。点（points）は一瞬の出来事、
// 帯（segments）は幅のある動作・状態を表す、という約束で描いてある。
export const lessonFigsKokoEigoExt03: Record<string, Figure> = {
  // s071：現在形は「今の一点」ではなく、過去から未来にまたがる広い範囲を指す
  lf_kokoeigoext03_071: {
    kind: 'numberLine',
    min: -3,
    max: 3,
    step: 1,
    points: [{ x: 0, label: '今（発話時）' }],
    segments: [{ from: -3, to: 3 }],
    caption:
      '目盛りは時間で、0が「今」。現在形（I play tennis.）が受け持つのは0の一点ではなく、過去から未来までまたがる広い帯である。だから今ラケットを持っていなくても I play tennis. と言える。今この瞬間だけの動作は現在進行形（I am playing tennis.）で表す',
  },

  // s072：習慣を表す現在形は「くり返し起こる点」の集まり
  lf_kokoeigoext03_072: {
    kind: 'numberLine',
    min: -3,
    max: 3,
    step: 1,
    points: [
      { x: -2, label: '先週の日曜も' },
      { x: 0, label: '今' },
      { x: 2, label: '来週の日曜も' },
    ],
    caption:
      'I play tennis every Sunday. の表す時間。日曜ごとにくり返し起こる点が時間軸に等間隔で並ぶイメージで、0（今）その動作をしているかどうかは問題にしていない。always・usually・often・sometimes・never は、この点の密度を表す語である',
  },

  // s076：過去形は今から切りはなされた過去の一点
  lf_kokoeigoext03_076: {
    kind: 'numberLine',
    min: -4,
    max: 2,
    step: 1,
    points: [
      { x: -3, label: 'yesterday（過去の一点）' },
      { x: 0, label: '今' },
    ],
    caption:
      '過去形が指すのは、0（今）から切りはなされた過去の一点。yesterday・last week・three days ago・then・in 2020 はすべてこの一点を指定する語句である。今とのつながりを表したいときは現在完了を使うので、これらの語句と現在完了はいっしょに使えない',
  },

  // s080：be動詞の過去形は過去のある期間ずっと続いた状態
  lf_kokoeigoext03_080: {
    kind: 'numberLine',
    min: -4,
    max: 2,
    step: 1,
    points: [{ x: 0, label: '今' }],
    segments: [{ from: -3.5, to: -1.5 }],
    caption:
      'He was busy yesterday.（彼は昨日忙しかった）が表す時間。be動詞の過去形は、過去のある期間ずっと続いていた状態を表すので、点ではなく幅のある帯になる。0（今）忙しいかどうかについては何も述べていない',
  },

  // s087：現在進行形は「今」をまたぐ短い幅
  lf_kokoeigoext03_087: {
    kind: 'numberLine',
    min: -3,
    max: 3,
    step: 1,
    points: [{ x: 0, label: '今' }],
    segments: [{ from: -1, to: 1 }],
    caption:
      'I am reading a book.（本を読んでいる）が表す時間。現在進行形は0（今）をまたぐ短い帯で、動作はもう始まっていて、まだ終わっていない。帯の左端が読み始めた時点、右端が読み終わる時点にあたる。この「途中である」という感覚が進行形の中身である',
  },

  // s090：現在進行形が表す近い未来（決定はすでに終わっている）
  lf_kokoeigoext03_090: {
    kind: 'numberLine',
    min: -2,
    max: 4,
    step: 1,
    points: [
      { x: -1, label: 'すでに手配ずみ' },
      { x: 0, label: '今' },
      { x: 2, label: '明日 出発' },
    ],
    caption:
      'I am leaving Tokyo tomorrow.（明日、東京を発ちます）が表す時間。現在進行形が未来を表せるのは、切符を取るなど手配が0（今）より前に終わっている予定のとき。実行は右の点にある。まだ手配していない単なる意志には使えず、その場合は will や be going to を用いる',
  },

  // s091：現在形の広い範囲と、現在進行形の短い帯
  lf_kokoeigoext03_091: {
    kind: 'numberLine',
    min: -3,
    max: 3,
    step: 1,
    points: [{ x: 0, label: '今' }],
    segments: [{ from: -0.7, to: 0.7 }],
    caption:
      '同じ「〜している」でも守備範囲が違う。My father works at a bank.（職業）は目盛り全体にわたる広い範囲＝現在形、Look! A dog is running.（今だけの動き）は0をはさむ図中の短い帯＝現在進行形。何年も続くことか、数分で終わることかで選び分ける',
  },

  // s092：過去進行形は過去のある時点をまたぐ幅
  lf_kokoeigoext03_092: {
    kind: 'numberLine',
    min: -4,
    max: 2,
    step: 1,
    points: [
      { x: -3, label: 'at eight（その時点）' },
      { x: 0, label: '今' },
    ],
    segments: [{ from: -3.8, to: -2 }],
    caption:
      'I was watching TV at eight last night. が表す時間。過去進行形は、指定された時点（8時）をまたぐ帯で、その時刻には動作の途中だったことを表す。I watched TV at eight last night. なら動作全体が終わったことを表し、意味が変わる',
  },

  // s093：when は点（短い出来事）、while は帯（続いていた動作）
  lf_kokoeigoext03_093: {
    kind: 'numberLine',
    min: -4,
    max: 1,
    step: 1,
    points: [
      { x: -2.5, label: 'I came home（点）' },
      { x: 0, label: '今' },
    ],
    segments: [{ from: -3.5, to: -1.5 }],
    caption:
      'When I came home, my mother was cooking. が表す時間。続いていた動作（料理）が帯、割りこんだ短い出来事（帰宅）が点。点のほうに when ＋ 過去形、帯のほうに while ＋ 過去進行形を使う。While my mother was cooking, I came home. と書いても同じ内容になる',
  },

  // s094：割りこみ型（帯＋点）の典型
  lf_kokoeigoext03_094: {
    kind: 'numberLine',
    min: -4,
    max: 1,
    step: 1,
    points: [
      { x: -2, label: 'the phone rang' },
      { x: 0, label: '今' },
    ],
    segments: [{ from: -3.5, to: -1 }],
    caption:
      'I was reading a book when the phone rang. が表す時間。読書の帯は電話が鳴る前から続き、鳴ったあとも続きうる。電話は一瞬で終わる点である。英作文では、どちらを帯にしてどちらを点にするかを先に決めてから、過去進行形と過去形を割りあてる',
  },

  // s096：状態動詞はそれ自体がすでに「ずっと続いている線」
  lf_kokoeigoext03_096: {
    kind: 'numberLine',
    min: -3,
    max: 3,
    step: 1,
    points: [{ x: 0, label: '今' }],
    segments: [{ from: -3, to: 3 }],
    caption:
      'I know him.（彼を知っている）が表す時間。know・like・want・have（所有）などの状態動詞は、それ自体がすでに長く続く帯を表している。進行形は「続いている最中」を示す形なので意味が重なってしまい、I am knowing him. とは言わず現在形のまま使う',
  },

  // s100：will は「今この瞬間に決めた／今そう思った」
  lf_kokoeigoext03_100: {
    kind: 'numberLine',
    min: -2,
    max: 4,
    step: 1,
    points: [
      { x: 0, label: '今 決めた＝will' },
      { x: 2, label: '実行' },
    ],
    caption:
      'will の表す時間。電話が鳴って I will get it.（私が出るよ）と言う場面のように、決定が0（今この瞬間）にあり、実行が右の未来にある。単純な予測 It will be sunny tomorrow. も、0の時点での見通しを述べているという点で出発点は同じである',
  },

  // s102：be going to は決定が発話より前にすんでいる
  lf_kokoeigoext03_102: {
    kind: 'numberLine',
    min: -3,
    max: 4,
    step: 1,
    points: [
      { x: -2, label: '前に決めた＝be going to' },
      { x: 0, label: '今' },
      { x: 2, label: '実行' },
    ],
    caption:
      'be going to の表す時間。I am going to visit my aunt next Sunday. は、決定が0（今）より前にすでに終わっていることを示す。目の前の状況から判断する予測 It is going to rain. も、根拠（黒い雲）が0より前から存在している点で同じ形になる',
  },

  // s103：will と be going to の違いは「決定の位置」だけ
  lf_kokoeigoext03_103: {
    kind: 'numberLine',
    min: -3,
    max: 4,
    step: 1,
    points: [
      { x: -2, label: 'be going to はここで決定' },
      { x: 0, label: 'will はここで決定' },
      { x: 2, label: '実行はどちらも未来' },
    ],
    caption:
      '二つの未来表現の違いは「いつ決めたか」だけである。決定が0（今）より前なら be going to、0のその場なら will。実行の時点は右の点でどちらも同じなので、選ぶときは実行時期ではなく決定の位置だけを見る',
  },

  // s104：現在進行形・現在形で未来を表すときは、決定がすでに終わっている
  lf_kokoeigoext03_104: {
    kind: 'numberLine',
    min: -2,
    max: 4,
    step: 1,
    points: [
      { x: 0, label: '今' },
      { x: 2, label: '予定の時刻' },
    ],
    segments: [{ from: -1.5, to: 0 }],
    caption:
      '未来を表す形は四つ。①現在形（時刻表・時間割：The train leaves at ten.）②現在進行形（手配ずみの予定：I am meeting him at five.）③be going to（前から決めた予定）④will（今決めた意志・推量）。①〜③は図の左の帯のように決定がすでに終わっており、右の点で実行される',
  },

  // s106：時・条件の副詞節の中だけ現在形にする
  lf_kokoeigoext03_106: {
    kind: 'numberLine',
    min: -2,
    max: 4,
    step: 1,
    points: [
      { x: 0, label: '今' },
      { x: 1.5, label: '彼が来る＝comes' },
      { x: 3, label: '私が伝える＝will tell' },
    ],
    caption:
      'When he comes, I will tell him. が表す時間。二つの出来事はどちらも0（今）より右＝未来にあるが、時・条件を表す副詞節（when 〜）の中だけは will を使わず現在形 comes で書く。主節は will tell のままにする。三単現の -s を落とさないこと',
  },

  // s108：until は帯（続く）、by は点（期限）
  lf_kokoeigoext03_108: {
    kind: 'numberLine',
    min: -1,
    max: 5,
    step: 1,
    points: [
      { x: 0, label: '今' },
      { x: 3, label: '5時（期限）' },
    ],
    segments: [{ from: 0, to: 3 }],
    caption:
      '日本語ではどちらも「5時まで」だが、英語では別語になる。until five は0から3まで動作が続く帯（I will wait until five. ＝待ち続ける）、by five は3の一点までに動作を一回終えればよい期限（I will finish it by five.）。動作が続くか一回で終わるかで選ぶ',
  },

  // s110：時制の見取り図（過去・現在・未来と、それぞれの進行形）
  lf_kokoeigoext03_110: {
    kind: 'numberLine',
    min: -3,
    max: 3,
    step: 1,
    points: [
      { x: -2, label: '過去形 played / went' },
      { x: 0, label: '現在形 play / plays' },
      { x: 2, label: '未来 will play' },
    ],
    segments: [
      { from: -2.6, to: -1.4 },
      { from: -0.6, to: 0.6 },
    ],
    caption:
      '時制の見取り図。左が過去、中央が現在、右が未来で、それぞれに幅をもたせたのが進行形にあたる。左の帯が過去進行形（was playing）、中央の帯が現在進行形（am playing）。問題を解くときは、まず時を示す語句を探して、この図のどこの話かを決めてから動詞の形を選ぶ',
  },
};
