import type { Figure } from './figures';

// 高校受験 英語「現在完了形と受動態」拡張ユニット（koko_eigo_s111〜koko_eigo_s145）の教科書用図解。
// キーは lessons-koko-eigo-ext04.ts の figureId と対応。
// 英語は図にしにくい教科だが、現在完了は「時間の幅・点・今との接続」がすべてなので、
// numberLine（時間軸）で表すと理解が一気に進む。
// 継続＝矢印の幅／完了・結果＝今のすぐ手前の1点／経験＝過去に散らばる点の数／
// 過去形＝今と切れた点、という対比を1本の線の上で見せることをねらっている（全35課中17課）。
// 「今」は2026年として年号を計算してある。
export const lessonFigsKokoEigoExt04: Record<string, Figure> = {
  // s111：継続用法＝「幅」。2016年から今（2026年）までの10年間が途切れず続いている
  lf_kokoeigoext04_111: {
    kind: 'numberLine',
    min: 2016,
    max: 2026,
    step: 2,
    segments: [{ from: 2016, to: 2026 }],
    points: [
      { x: 2016, label: '2016年 住み始めた' },
      { x: 2026, label: '今' },
    ],
    caption:
      'He has lived in Osaka since 2016.（＝for ten years）現在完了の継続用法は、始まった時点から今までの「幅」を表す。2016年から2026年の今まで10年間、途切れずに続いている。過去形 He lived in Osaka. なら、この矢印は今に届かず途中で切れる',
  },

  // s112：for（矢印の長さ）と since（左端の点）の役割分担
  lf_kokoeigoext04_112: {
    kind: 'numberLine',
    min: 2020,
    max: 2026,
    step: 1,
    segments: [{ from: 2020, to: 2026 }],
    points: [
      { x: 2020, label: 'since 2020（起点の点）' },
      { x: 2026, label: '今' },
    ],
    caption:
      'since は左端の「点（いつから）」、for は矢印全体の「長さ（どれだけの間）」を指す。2020年から今（2026年）までなので since 2020 ＝ for six years。同じ幅を、点で言うか長さで言うかのちがいにすぎない',
  },

  // s115：「〜して…年になる」の4通りの言いかえ（2021年に亡くなって今2026年＝5年）
  lf_kokoeigoext04_115: {
    kind: 'numberLine',
    min: 2020,
    max: 2026,
    step: 1,
    segments: [{ from: 2021, to: 2026 }],
    points: [
      { x: 2021, label: '2021年 彼が亡くなった' },
      { x: 2026, label: '今' },
    ],
    caption:
      'He died five years ago.（点・過去形）＝ He has been dead for five years.（幅・現在完了）＝ It has been five years since he died. ＝ Five years have passed since he died. 2021年から今（2026年）までの5年間を、点で言うか長さで言うかのちがい。die は一瞬の動作なので has died for 〜 とは言えず、状態を表す dead を使う',
  },

  // s116：完了用法＝今のすぐ手前で終わった1点（横軸は時間の流れ・右が現在）
  lf_kokoeigoext04_116: {
    kind: 'numberLine',
    min: 0,
    max: 10,
    step: 1,
    segments: [{ from: 9, to: 10 }],
    points: [
      { x: 9, label: '食べ終わった' },
      { x: 10, label: '今' },
    ],
    caption:
      '横軸は時間の流れ（右が現在）。I have just finished lunch.（ちょうど昼食を食べ終えたところだ）。完了用法は、動作が終わった時点が今のすぐ手前にあり、右端が必ず「今」で止まる。だから ago や yesterday のように今から離れた一点を示す語とは同じ文に置けない',
  },

  // s117：already（すでに点がある）と yet（まだ点が打てていない）
  lf_kokoeigoext04_117: {
    kind: 'numberLine',
    min: 0,
    max: 10,
    step: 1,
    segments: [{ from: 7, to: 10 }],
    points: [
      { x: 7, label: 'already：もう済んだ' },
      { x: 10, label: '今' },
    ],
    caption:
      'I have already finished my homework.（もう終わった＝今より前に完了の点が打ててある）。一方 I have not finished it yet.（まだ終わっていない）は、今の時点までにこの点が打てていない状態を指す。位置は already が have と過去分詞の間、yet は文末',
  },

  // s119：have been to（行って帰ってきた）と have gone to（行ったきり）
  lf_kokoeigoext04_119: {
    kind: 'numberLine',
    min: 0,
    max: 10,
    step: 1,
    points: [
      { x: 4, label: '出発した' },
      { x: 7, label: '帰ってきた' },
      { x: 10, label: '今ここにいる' },
    ],
    caption:
      'He has been to Canada.（行ったことがある）は、出発と帰国の両方の点があり、今は話し手と同じ場所にいる。これに対し He has gone to Canada.（行ってしまった）は帰ってきた点がなく、今ここにいない。been か gone かで「今どこにいるか」が変わる',
  },

  // s120：結果用法＝過去の出来事の結果が今も残っている
  lf_kokoeigoext04_120: {
    kind: 'numberLine',
    min: 0,
    max: 10,
    step: 1,
    segments: [{ from: 5, to: 10 }],
    points: [
      { x: 5, label: 'かぎをなくした' },
      { x: 10, label: '今も見つかっていない' },
    ],
    caption:
      'I have lost my key.（かぎをなくして、今も手元にない）。結果用法は「過去に起きたことの結果が今も続いている」ことを表すので、矢印が今まで伸びる。I lost my key yesterday. なら点だけで矢印がなく、今見つかったかどうかには触れていない',
  },

  // s121：経験用法＝過去に散らばる「点の数」を数える
  lf_kokoeigoext04_121: {
    kind: 'numberLine',
    min: 0,
    max: 10,
    step: 1,
    points: [
      { x: 2, label: '1回目' },
      { x: 5, label: '2回目' },
      { x: 10, label: '今' },
    ],
    caption:
      'I have visited Kyoto twice.（京都を2回訪れたことがある）。経験用法は「今までに何回その点があったか」を数える用法で、点がいつ打たれたかは問題にしない。だから last year のような日付の語とはいっしょに使えない。継続の「幅」、完了の「今の直前の1点」との形のちがいに注目する',
  },

  // s122：never＝点が0個、ever＝点が1つでもあるか
  lf_kokoeigoext04_122: {
    kind: 'numberLine',
    min: 0,
    max: 10,
    step: 1,
    points: [{ x: 10, label: '今（点は0個）' }],
    caption:
      'I have never been abroad.（一度も海外へ行ったことがない）。never は「経験の点が0個」の状態を表すので、not を重ねる必要はない。Have you ever been abroad? は「今までのどこかに点が1つでもあるか」をたずねている。never も ever も have と過去分詞の間に置く',
  },

  // s123：回数の言い方（once／twice／three times）
  lf_kokoeigoext04_123: {
    kind: 'numberLine',
    min: 0,
    max: 10,
    step: 1,
    points: [
      { x: 1, label: '1回目' },
      { x: 4, label: '2回目' },
      { x: 7, label: '3回目' },
      { x: 10, label: '今' },
    ],
    caption:
      'I have seen this movie three times.（この映画を3回見たことがある）。点が3つあるので three times。1回は once、2回は twice という専用の語を使い、3回以上から 〜 times を使う。回数をたずねるときは How many times have you 〜? と聞く',
  },

  // s126：現在完了進行形＝右端が今に届き、そこで切れずに続いている
  lf_kokoeigoext04_126: {
    kind: 'numberLine',
    min: 0,
    max: 10,
    step: 1,
    segments: [{ from: 3, to: 10 }],
    points: [
      { x: 3, label: '今朝 降り始めた' },
      { x: 10, label: '今も降っている' },
    ],
    caption:
      'It has been raining since this morning.（今朝からずっと雨が降っている）。現在完了進行形 have/has been ＋ -ing は、動作が今もなお続いている最中であることを強調する。矢印の右端が今に届き、そこで終わらずさらに先へ続いていくのが特徴',
  },

  // s128：過去形（今と切れた点）と現在完了（今までつながる矢印）の対比
  lf_kokoeigoext04_128: {
    kind: 'numberLine',
    min: 0,
    max: 10,
    step: 1,
    segments: [{ from: 3, to: 10 }],
    points: [
      { x: 3, label: '2020年 カナダへ行った' },
      { x: 10, label: '今' },
    ],
    caption:
      '同じ出来事でも、過去形 I went to Canada in 2020. は左の点だけを見ていて今とは切れている。現在完了 I have been to Canada. は点から今まで矢印がつながり、「その経験を今もっている」ことを表す。だから in 2020 のような過去の一点を示す語は現在完了と並べられない',
  },

  // s129：現在完了と共存できない語（ago・yesterday）は今から切り離された点
  lf_kokoeigoext04_129: {
    kind: 'numberLine',
    min: 0,
    max: 10,
    step: 1,
    points: [
      { x: 2, label: 'two days ago（過去形のみ）' },
      { x: 6, label: 'yesterday（過去形のみ）' },
      { x: 10, label: '今' },
    ],
    caption:
      '現在完了は右端が必ず「今」に届く表現である。ago・yesterday・last week・in 2020・When 〜? は、今から切り離された過去の一点だけを指定する語なので、現在完了とは同じ文に置けない。× I have finished it two days ago. → ○ I finished it two days ago.',
  },

  // s130：ago（過去形・点）と since / for（現在完了・幅）の書きかえ
  lf_kokoeigoext04_130: {
    kind: 'numberLine',
    min: 2019,
    max: 2026,
    step: 1,
    segments: [{ from: 2020, to: 2026 }],
    points: [
      { x: 2020, label: '2020年＝six years ago' },
      { x: 2026, label: '今' },
    ],
    caption:
      'He came to Japan six years ago.（過去形・点）＝ He has been in Japan for six years.（現在完了・幅）＝ He has been in Japan since 2020.（起点）。ago は「今から何年前か」を表すので過去形と、for / since は幅と起点を表すので現在完了と組む。2026年の6年前は2020年。come（来る）を be in（いる）に変えるのが書きかえの要点',
  },

  // s131：3用法を1本の時間軸で整理する（幅・点の数・今の直前の1点）
  lf_kokoeigoext04_131: {
    kind: 'numberLine',
    min: 0,
    max: 10,
    step: 1,
    segments: [{ from: 1, to: 10 }],
    points: [
      { x: 1, label: '継続：ここから今まで' },
      { x: 5, label: '経験：点の数' },
      { x: 9, label: '完了：今の直前' },
      { x: 10, label: '今' },
    ],
    caption:
      '現在完了の3用法を1本の時間軸で整理する。継続＝左端から今までの「幅」（for / since / How long）、経験＝途中に打たれた「点の数」（ever / never / 〜 times / before）、完了・結果＝今のすぐ手前で終わった「1点」（just / already / yet）。どの用法でも右端は必ず「今」に届いているので、ago や yesterday とは使えない',
  },

  // s137：受動態の時制は be動詞で決まる（過去・現在・未来）
  lf_kokoeigoext04_137: {
    kind: 'numberLine',
    min: 0,
    max: 12,
    step: 2,
    points: [
      { x: 2, label: 'was built（過去）' },
      { x: 6, label: 'is used（今）' },
      { x: 10, label: 'will be built（未来）' },
    ],
    caption:
      '受動態の時制を決めるのは be動詞だけで、過去分詞は形を変えない。過去＝was/were＋過去分詞（This school was built in 1950.）、現在＝am/is/are＋過去分詞（This room is used every day.）、未来＝will be＋過去分詞（A new library will be built next year.）。will の後ろは原形 be になる',
  },

  // s138：現在完了の受動態（1976年発表→2026年の今まで50年間ずっと愛されている）
  lf_kokoeigoext04_138: {
    kind: 'numberLine',
    min: 1976,
    max: 2026,
    step: 10,
    segments: [{ from: 1976, to: 2026 }],
    points: [
      { x: 1976, label: '1976年 発表された' },
      { x: 2026, label: '今' },
    ],
    caption:
      'This song has been loved by young people for fifty years.（この歌は50年間、若い人たちに愛され続けている）。現在完了の受動態は have/has been ＋ 過去分詞。have/has が「今までつながっている」ことを、been ＋ 過去分詞が「される側」であることを担当する。1976年から2026年までで50年',
  },
};
