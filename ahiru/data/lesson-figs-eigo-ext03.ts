import type { Figure } from './figures';

// 中学受験 英語「名詞・冠詞・代名詞と単数複数」拡張ユニット（eigo_s081〜eigo_s115）の教科書用図解。
// キーは lessons-eigo-ext03.ts の figureId と対応する。
// 英語は「文字そのもの」を図にしても意味がないので、
// ①分類の割合（可算/不可算・複数形の作り方・-sの発音）
// ②2軸で整理できるもの（a/an の判断、冠詞の選び分け、人称代名詞の格変化、this/that/these/those、it と one）
// ③語順・順番（主格と目的格の位置、one → another → the other）
// にしぼって付けてある（35課中14課）。
export const lessonFigsEigoExt03: Record<string, Figure> = {
  // s081：名詞全体を「可算だけ・不可算だけ・両方」に分ける
  lf_eigoext03_081: {
    kind: 'pieChart',
    slices: [
      { label: '可算のみ', value: 70, color: '#0EA5E9' },
      { label: '不可算のみ', value: 15, color: '#0369A1' },
      { label: '両方ある', value: 15, color: '#16A34A' },
    ],
    caption:
      '中学入試レベルの英単語（およそ1000語）の名詞を分けたときのおおよその割合。大多数は数えられる名詞だが、water や homework のように必ず数えられない語、glass（ガラス／コップ）のように両方の使い方をもつ語がある',
  },

  // s085：many / much / few / little を「可算⇔不可算」×「多い⇔少ない」の2軸で整理
  lf_eigoext03_085: {
    kind: 'coordinate',
    xRange: [0, 10],
    yRange: [0, 10],
    points: [
      { x: 2, y: 8, label: 'many（数が多い）' },
      { x: 8, y: 8, label: 'much（量が多い）' },
      { x: 2, y: 2, label: 'a few（数が少しある）' },
      { x: 8, y: 2, label: 'a little（量が少しある）' },
      { x: 5, y: 5, label: 'a lot of（どちらでも可）' },
    ],
    caption:
      '横軸は右へ行くほど数えられない名詞向き、縦軸は上へ行くほど「多い」を表す。左上 many／右上 much／左下 a few／右下 a little。a lot of は可算・不可算のどちらにも使えるので真ん中に置いてある',
  },

  // s089：複数形の作り方の割合（不規則変化はごく少数）
  lf_eigoext03_089: {
    kind: 'pieChart',
    slices: [
      { label: '-s をつける', value: 80, color: '#0EA5E9' },
      { label: '-es をつける', value: 10, color: '#0369A1' },
      { label: 'y→ies', value: 6, color: '#16A34A' },
      { label: '不規則', value: 4, color: '#F59E0B' },
    ],
    caption:
      '名詞の複数形の作り方のおおよその割合。ほとんどは -s を付けるだけで済む。不規則変化は man / child / foot / tooth / mouse など十数語しかないので、そこだけ丸暗記すれば足りる',
  },

  // s090：複数形の -s の発音3分類
  lf_eigoext03_090: {
    kind: 'pieChart',
    slices: [
      { label: '[z] dogs 型', value: 60, color: '#0EA5E9' },
      { label: '[s] cats 型', value: 25, color: '#0369A1' },
      { label: '[iz] buses 型', value: 15, color: '#16A34A' },
    ],
    caption:
      '複数形の -s の発音のおおよその割合。のどがふるえる音（有声音）のあとは [z]、ふるえない音（無声音）のあとは [s]、s・z・sh・ch・x のあとは [iz] と読み、音のかたまりが一つふえる',
  },

  // s094：数がふえても複数になるのは「単位のことば」のほう
  lf_eigoext03_094: {
    kind: 'barChart',
    yLabel: 'コップの数',
    yMax: 4,
    bars: [
      { label: 'a glass of milk', value: 1, color: '#0EA5E9' },
      { label: 'two glasses of milk', value: 2, color: '#0369A1' },
      { label: 'three glasses of milk', value: 3, color: '#16A34A' },
    ],
    caption:
      '棒の高さはコップの数。数がふえても milk は milks にならず、数えるための単位のことば glass のほうが glasses に変わる。ここが「単位＋of＋不可算名詞」の一番の急所',
  },

  // s096：a か an かは「つづり」ではなく「音」で決まる
  lf_eigoext03_096: {
    kind: 'coordinate',
    xRange: [0, 10],
    yRange: [0, 10],
    points: [
      { x: 8, y: 9, label: 'an apple' },
      { x: 9, y: 6.5, label: 'an egg' },
      { x: 2, y: 8, label: 'an hour' },
      { x: 3, y: 1.5, label: 'a cat' },
      { x: 1, y: 3.5, label: 'a book' },
      { x: 8.5, y: 2, label: 'a university' },
    ],
    caption:
      '横軸は「つづりが母音字（a・i・u・e・o）で始まるか（右ほどはい）」、縦軸は「発音が母音の音で始まるか（上ほどはい）」。an になるかどうかを決めているのは縦軸＝音だけ。university はつづりが u でも「ユ」という子音の音で始まるので a、hour は h を発音しないので an になる',
  },

  // s098：a ＝「〜につき」（回数の表し方）
  lf_eigoext03_098: {
    kind: 'barChart',
    yLabel: '1週間あたりの回数',
    yMax: 8,
    bars: [
      { label: 'once a week', value: 1, color: '#0EA5E9' },
      { label: 'twice a week', value: 2, color: '#0369A1' },
      { label: 'three times a week', value: 3, color: '#16A34A' },
      { label: 'every day', value: 7, color: '#F59E0B' },
    ],
    caption:
      'once a week などの a は「一つの」ではなく「〜につき」の意味。回数は once（1回）→ twice（2回）→ three times（3回）と数え、3回以上は「数字＋times」で表す',
  },

  // s099：初めて出すときは a、2回目からは the
  lf_eigoext03_099: {
    kind: 'numberLine',
    min: 0,
    max: 3,
    step: 1,
    points: [
      { x: 1, label: 'a dog（初めて話に出す）' },
      { x: 2, label: 'the dog（さっきのあの犬）' },
    ],
    caption:
      '話の進む順に並べた図。I saw a dog. The dog was very big. のように、初めて出すときは a、いちど出て「あの犬」と相手にも特定できるようになったら the を使う',
  },

  // s103：a / the / 無冠詞の選び分けを2軸で整理
  lf_eigoext03_103: {
    kind: 'coordinate',
    xRange: [0, 10],
    yRange: [0, 10],
    points: [
      { x: 2, y: 2, label: 'a dog' },
      { x: 8, y: 2, label: 'the dog' },
      { x: 2, y: 8, label: 'dogs（冠詞なし）' },
      { x: 8, y: 8, label: 'the dogs' },
      { x: 2, y: 5, label: 'water（冠詞なし）' },
      { x: 8, y: 5, label: 'the water' },
    ],
    caption:
      '横軸は「どれのことか相手にわかるか（右ほど特定できる）」、縦軸は下が単数・真ん中が不可算・上が複数。右側はすべて the が付く。左側は、単数なら a、複数や不可算なら冠詞を付けない',
  },

  // s105：文の中の位置で主格・目的格が決まる
  lf_eigoext03_105: {
    kind: 'numberLine',
    min: 0,
    max: 4,
    step: 1,
    points: [
      { x: 1, label: 'She（主格）' },
      { x: 2, label: 'likes' },
      { x: 3, label: 'him（目的格）' },
    ],
    caption:
      'She likes him. の語順。英語は位置で役割が決まるので、動詞の前（主語の位置）なら主格 She、動詞のうしろ（目的語の位置）なら目的格 him になる。日本語の「彼女は／彼を」にあたる区別を、英語は語の形そのもので示す',
  },

  // s108：人称代名詞の格変化を「人称×格」の表として配置
  lf_eigoext03_108: {
    kind: 'coordinate',
    xRange: [0, 5],
    yRange: [0, 5],
    points: [
      { x: 1, y: 4, label: 'I' },
      { x: 2, y: 4, label: 'my' },
      { x: 3, y: 4, label: 'me' },
      { x: 4, y: 4, label: 'mine' },
      { x: 1, y: 3, label: 'you' },
      { x: 2, y: 3, label: 'your' },
      { x: 3, y: 3, label: 'you' },
      { x: 4, y: 3, label: 'yours' },
      { x: 1, y: 2, label: 'he' },
      { x: 2, y: 2, label: 'his' },
      { x: 3, y: 2, label: 'him' },
      { x: 4, y: 2, label: 'his' },
      { x: 1, y: 1, label: 'they' },
      { x: 2, y: 1, label: 'their' },
      { x: 3, y: 1, label: 'them' },
      { x: 4, y: 1, label: 'theirs' },
    ],
    caption:
      '縦に人称（上から I / you / he / they）、横に格（左から 主格「〜は」→ 所有格「〜の」→ 目的格「〜を・に」→ 所有代名詞「〜のもの」）を並べた表。you は主格と目的格が同じ形、he は所有格も所有代名詞も his になる点に注意する',
  },

  // s110：this / that / these / those を「距離×数」で整理
  lf_eigoext03_110: {
    kind: 'coordinate',
    xRange: [0, 10],
    yRange: [0, 10],
    points: [
      { x: 2, y: 2, label: 'this これ' },
      { x: 8, y: 2, label: 'that あれ' },
      { x: 2, y: 8, label: 'these これら' },
      { x: 8, y: 8, label: 'those あれら' },
    ],
    caption:
      '横軸は話し手からの距離（左が近い・右が遠い）、縦軸は数（下が単数・上が複数）。近い＋単数 this、遠い＋単数 that、近い＋複数 these、遠い＋複数 those。複数形はどちらも -se で終わる',
  },

  // s111：it と one の使い分けを「同じ物か・別の物か」×「単数か複数か」で整理
  lf_eigoext03_111: {
    kind: 'coordinate',
    xRange: [0, 10],
    yRange: [0, 10],
    points: [
      { x: 2, y: 2, label: 'it' },
      { x: 2, y: 8, label: 'them' },
      { x: 8, y: 2, label: 'one' },
      { x: 8, y: 8, label: 'ones' },
    ],
    caption:
      '横軸は「まったく同じ物を指す（左）／同じ種類の別の物を指す（右）」、縦軸は単数・複数。I lost my pen, so I bought one.（別の新しいペン）と I found it.（なくしたそのペン）のちがいを表している',
  },

  // s112：3つのものを1つずつ取り上げるときの言い方の順番
  lf_eigoext03_112: {
    kind: 'numberLine',
    min: 0,
    max: 4,
    step: 1,
    points: [
      { x: 1, label: 'one（1つ目）' },
      { x: 2, label: 'another（残りのうちもう1つ）' },
      { x: 3, label: 'the other（最後の1つ）' },
    ],
    caption:
      '3つのものを順に取り上げるときの図。残りがまだ複数あるうちは another（an + other なので冠詞は付けない）、最後の1つに決まったら the other。2つしかない場合は one と the other だけになる',
  },
};
