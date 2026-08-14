import type { Figure } from './figures';

// 中学受験 英語「長文読解・会話文読解の技術」拡張ユニット（eigo_s386〜eigo_s425）の教科書用図解。
// キーは lessons-eigo-ext11.ts の figureId と対応（1対1）。
// 読解は「文字を追う」教科なので図解が飾りになりやすい。ここでは
//   ①語順・修飾の位置関係　②時間の流れ（時系列・気持ちの変化）　③図表つき読解の実データ
// という「図にしないと伝わらない」3種類だけに絞って付けてある（40課中17課）。
export const lessonFigsEigoExt11: Record<string, Figure> = {
  // s389：英語の語順は固定。数直線上の位置＝語順として示す
  lf_eigoext11_389: {
    kind: 'numberLine',
    min: 1,
    max: 4,
    step: 1,
    points: [
      { x: 1, label: 'S 主語（だれが）' },
      { x: 2, label: 'V 動詞（どうする）' },
      { x: 3, label: 'O 目的語（何を）' },
      { x: 4, label: 'M 修飾語（どこで・いつ）' },
    ],
    caption:
      '英語の語順は原則この順に固定されている。日本語は動詞が文の最後に来るが、英語は主語のすぐ後ろに動詞が来る。だから長文では「2番目のかたまり＝動詞」を探すと骨組みが一気に見える',
  },

  // s390：長い主語を①〜④のかたまりに切り、②（主語の説明部分）を外して骨組みを取り出す
  lf_eigoext11_390: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 10, y: 10 },
      { x: 0, y: 10 },
    ],
    sideLabels: [
      '④ every Sunday（修飾語）',
      '③ is my sister（V＋C ＝骨組みの後半）',
      '① The girl（主語の中心）',
      '② who plays the piano（①を説明する部分）',
    ],
    fill: false,
    caption:
      '長い主語をもつ文 The girl who plays the piano every Sunday is my sister. を4つのかたまりに切った図。②はあくまで①の説明なので、いったん外して「① The girl ＋ ③ is my sister」と読むと骨組みが見える',
  },

  // s392：名詞は前からも後ろからも修飾される。その位置関係
  lf_eigoext11_392: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 10, y: 10 },
      { x: 0, y: 10 },
    ],
    sideLabels: [
      '③ 後ろから修飾：2語以上のかたまり（standing by the door／written in English／to drink）',
      '',
      '① 前から修飾：1語（a／the／tall／new）',
      '② 中心の名詞（boy／book／something）',
    ],
    fill: false,
    caption:
      '名詞のまわりの修飾語の位置。1語の修飾語は名詞の前（a tall boy）、2語以上のかたまりは名詞の後ろ（a boy standing by the door）に置く。日本語はすべて前から修飾するので、後ろのかたまりは訳すときに前へ回す',
  },

  // s394：代名詞は原則として「直前に出た名詞」を指す
  lf_eigoext11_394: {
    kind: 'numberLine',
    min: 1,
    max: 5,
    step: 1,
    points: [
      { x: 1, label: '①a new bike' },
      { x: 2, label: '②his father' },
      { x: 3, label: '③ it ←' },
      { x: 4, label: '④ he' },
      { x: 5, label: '⑤ them' },
    ],
    caption:
      '文の番号を横軸にとって、代名詞と、それが指す名詞の位置を示した図。代名詞は「自分より前」にある名詞しか指さない。しかもふつうは直前の文の中にある。ただし数（単数・複数）と種類（人か物か）が合う名詞まで戻ること',
  },

  // s397：however の直後に筆者の主張が来る
  lf_eigoext11_397: {
    kind: 'numberLine',
    min: 1,
    max: 6,
    step: 1,
    points: [
      { x: 2, label: '一般に言われること' },
      { x: 3, label: 'However,' },
      { x: 4, label: '★筆者の主張' },
      { x: 6, label: 'まとめ' },
    ],
    caption:
      '説明文の典型的な流れ。「多くの人は〜と思っている」→ However（しかし）→「★でも本当は〜だ」と続く。設問で問われるのは★の部分なので、However・But・Yet を見つけたらその直後に線を引く',
  },

  // s401：段落の構造（主題文・支持文・まとめ文）
  lf_eigoext11_401: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 10, y: 10 },
      { x: 0, y: 10 },
    ],
    sideLabels: [
      '③ まとめ文（So／In this way …）※ないこともある',
      '',
      '① 主題文 topic sentence（この段落で言いたいこと）',
      '② 支持文（理由・具体例・数字・For example …）',
    ],
    fill: false,
    caption:
      '1つの段落の組み立て。上辺の①主題文がその段落の中心で、②支持文はすべて①を支えるための材料にすぎない。段落の要旨を答える問題では、②の具体例ではなく①を書く',
  },

  // s403：主題文が段落のどこにあるか（おおよその目安）
  lf_eigoext11_403: {
    kind: 'pieChart',
    slices: [
      { label: '段落の最初', value: 65, color: '#0EA5E9' },
      { label: '段落の最後', value: 25, color: '#0369A1' },
      { label: '段落の中ほど', value: 10, color: '#64748B' },
    ],
    caption:
      '中学入試レベルの英語の説明文で、主題文が段落のどこに置かれているかのおおよその目安。まず各段落の1文目を読み、そこが具体例だったら最後の1文を見る、という順で探すとむだがない',
  },

  // s407：物語の中の「気持ちの変化」を折れ線で
  lf_eigoext11_407: {
    kind: 'lineChart',
    xLabel: '場面の順序',
    yLabel: '気持ち（＋うれしい／−つらい）',
    xRange: [1, 5],
    yRange: [-3, 3],
    series: [
      {
        label: '「私」の気持ち',
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 1, y: 1 },
          { x: 2, y: -2 },
          { x: 3, y: -3 },
          { x: 4, y: 0 },
          { x: 5, y: 3 },
        ],
      },
    ],
    caption:
      '合唱コンクールの物語の気持ちの動き。①ピアノに選ばれてうれしい → ②うまく弾けず不安 → ③もうむりだと思う（いちばん低い所） → ④友だちと練習して持ち直す → ⑤最後まで弾けて最高にうれしい。設問は谷（③）と、そこから上がるきっかけ（④）を必ず問う',
  },

  // s406：物語の出来事を、書かれている順ではなく起こった順に並べ直す
  lf_eigoext11_406: {
    kind: 'numberLine',
    min: 1,
    max: 6,
    step: 1,
    points: [
      { x: 1, label: 'three years ago 引っこし' },
      { x: 2, label: 'last spring 入部' },
      { x: 3, label: 'in the summer 初ゴール' },
      { x: 4, label: 'last winter けが' },
      { x: 5, label: 'this spring 復帰' },
      { x: 6, label: 'now キャプテン' },
    ],
    caption:
      '出来事を起こった順に並べ直した時間軸。英文では now（現在）から書き始めて、そのあと three years ago まで一気にさかのぼることがある。時を表す語（ago／last／this／now）だけを拾って、この軸の上に並べ直すのがコツ',
  },

  // s409：説明文の中の比較データ（動物の1日の睡眠時間）
  lf_eigoext11_409: {
    kind: 'barChart',
    xLabel: '動物',
    yLabel: '1日の睡眠時間（時間）',
    yMax: 22,
    bars: [
      { label: 'koala', value: 20, color: '#0EA5E9' },
      { label: 'cat', value: 13, color: '#0EA5E9' },
      { label: 'human', value: 8, color: '#0369A1' },
      { label: 'elephant', value: 4, color: '#16A34A' },
      { label: 'giraffe', value: 2, color: '#16A34A' },
    ],
    caption:
      '本文で比べられている動物の1日の睡眠時間（およその値）。「長く眠る側」と「あまり眠らない側」の2グループに分かれ、その境目に On the other hand（一方で）が置かれている。対比の説明文はこのように2列に整理して読む',
  },

  // s412：図表つき読解①（好きなスポーツ・30人のクラス）
  lf_eigoext11_412: {
    kind: 'barChart',
    xLabel: 'sport',
    yLabel: 'students',
    yMax: 12,
    bars: [
      { label: 'soccer', value: 11, color: '#0EA5E9' },
      { label: 'baseball', value: 7, color: '#0369A1' },
      { label: 'basketball', value: 6, color: '#0369A1' },
      { label: 'swimming', value: 4, color: '#16A34A' },
      { label: 'tennis', value: 2, color: '#F59E0B' },
    ],
    caption:
      '「いちばん好きなスポーツ」を30人に聞いた結果。11＋7＋6＋4＋2＝30 で合計がクラスの人数と一致することを必ず確かめる。the most popular＝いちばん高い棒、came second＝2番目、only＝いちばん低い棒、と英語と棒を対応させて読む',
  },

  // s413：図表つき読解②（月ごとの図書館利用者数）
  lf_eigoext11_413: {
    kind: 'lineChart',
    xLabel: '月',
    yLabel: '利用した生徒の数',
    xRange: [4, 9],
    yRange: [0, 300],
    series: [
      {
        label: 'students',
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 4, y: 120 },
          { x: 5, y: 150 },
          { x: 6, y: 210 },
          { x: 7, y: 260 },
          { x: 8, y: 90 },
          { x: 9, y: 180 },
        ],
      },
    ],
    caption:
      '4月から9月までに学校の図書館を使った生徒の数。折れ線グラフの読解では「上がる（went up／rose）」「下がる（fell／went down）」「いちばん高い（the highest）」の3語と、山と谷の位置を結びつける。8月の谷には必ず理由が書かれている',
  },

  // s414：図表つき読解③（通学手段の割合）
  lf_eigoext11_414: {
    kind: 'pieChart',
    slices: [
      { label: 'walk 45%', value: 45, color: '#0EA5E9' },
      { label: 'bicycle 30%', value: 30, color: '#0369A1' },
      { label: 'bus 15%', value: 15, color: '#16A34A' },
      { label: 'train 10%', value: 10, color: '#F59E0B' },
    ],
    caption:
      '200人に聞いた通学手段の割合。円グラフの読解では「％ を人数に直せるか」が必ず問われる。全体200人なので、10％なら200×0.1＝20人。walk と bicycle を合わせると45＋30＝75％である',
  },

  // s415：図表つき読解④（電車の発車時刻と待ち合わせ時刻）
  lf_eigoext11_415: {
    kind: 'numberLine',
    min: 8,
    max: 12,
    step: 1,
    points: [
      { x: 8.5, label: '8:30 発' },
      { x: 9.5, label: '9:30 発' },
      { x: 10.5, label: '10:30 発' },
      { x: 11, label: '11:00 待ち合わせ' },
    ],
    caption:
      '電車の発車時刻（8:30／9:30／10:30）と、博物館前の待ち合わせ時刻（11:00）を1本の時間軸に並べた図。乗車40分＋徒歩10分＝50分かかるので、10:30発では11:20着で間に合わない。時刻表の問題は必ずこの軸を書いてから考える',
  },

  // s417：会話文②（店の値段表）
  lf_eigoext11_417: {
    kind: 'barChart',
    xLabel: 'item',
    yLabel: 'price（円）',
    yMax: 3000,
    bars: [
      { label: 'T-shirt', value: 1200, color: '#0EA5E9' },
      { label: 'cap', value: 800, color: '#0369A1' },
      { label: 'socks', value: 300, color: '#16A34A' },
      { label: 'bag', value: 2500, color: '#F59E0B' },
    ],
    caption:
      '買い物の会話に付いている値段表。会話文では「何を・いくつ買ったか」を先に丸で囲み、そのあとで合計を計算する。Tシャツ1枚＋くつ下2足なら 1200＋300×2＝1800円、2000円出せばおつりは200円',
  },

  // s418：会話文③（道案内の地図）
  lf_eigoext11_418: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'Station' },
      { x: 0, y: 6, label: 'bank（角）' },
      { x: 6, y: 6, label: 'post office' },
      { x: 6, y: 0, label: 'library' },
    ],
    sideLabels: [
      '① go straight for two blocks（まっすぐ2ブロック）',
      '② turn right and walk one block（角を右へ1ブロック）',
      '③ さらに進むと library（行きすぎ）',
      '駅前の通り',
    ],
    fill: false,
    caption:
      '道案内の会話を地図にしたもの。Station を出て①まっすぐ2ブロック進み、bank の角で②右に曲がって1ブロック行くと、左手に post office がある。③のように通り過ぎて進むと library に着いてしまう',
  },

  // s419：会話文④（レストランの営業時間）
  lf_eigoext11_419: {
    kind: 'numberLine',
    min: 10,
    max: 22,
    step: 2,
    segments: [
      { from: 11, to: 14 },
      { from: 17, to: 21 },
    ],
    points: [
      { x: 11, label: '11:00 ランチ開始' },
      { x: 14, label: '14:00 ランチ終了' },
      { x: 17, label: '17:00 ディナー開始' },
      { x: 21, label: '21:00 閉店' },
    ],
    caption:
      'レストランの営業時間。太い線の部分だけが開いている時間で、14:00〜17:00 は閉まっている。会話文の設問は、この「すきま」をねらって「3時に行ったらどうなるか」「何時なら夕食を食べられるか」と聞いてくる',
  },
};
