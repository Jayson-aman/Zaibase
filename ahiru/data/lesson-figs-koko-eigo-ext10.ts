import type { Figure } from './figures';

// 高校受験 英語「長文読解」拡張ユニット（koko_eigo_s336〜koko_eigo_s375）の図解。
// キーは lessons-koko-eigo-ext10.ts の figureId と対応（全40課中18課に付与）。
// この単元の図は、すべて本文の英文パッセージに書かれている数値をそのまま図にしたもので、
// 図の数値と英文の記述・解説の計算はすべて一致させてある（合計・差・割合も検算済み）。
// キャプションには、その図がどの英文のどの記述に対応するかを日本語で明記した。
export const lessonFigsKokoEigoExt10: Record<string, Figure> = {
  // s339：1年生120人の部活動選択（英文の第2段落の人数と一致。合計40+30+25+15+10=120）
  lf_kokoeigoext10_339: {
    kind: 'barChart',
    xLabel: '部活動',
    yLabel: '人数（人）',
    yMax: 50,
    bars: [
      { label: 'サッカー', value: 40 },
      { label: '吹奏楽', value: 30 },
      { label: 'テニス', value: 25 },
      { label: '美術', value: 15 },
      { label: '科学', value: 10 },
    ],
    caption:
      '1年生120人が選んだ部活動（英文 "Forty students chose it."〜"the last ten students joined the science club." に対応）。40＋30＋25＋15＋10＝120で、本文の There are 120 first-year students this year. と一致する。科学部は現在10人で最少だが、10年前は50人を超えて最大だった（第3段落）',
    steps: [
      "よこじくは「部活動」、たてじくは「人数（人）」を表している。まず何と何を比べた図かをつかむ。",
      "いちばん大きいのは「サッカー」で40（人数（人））。",
      "いちばん小さいのは「科学」で10。差は30。",
      "大きい順にならべると サッカー → 吹奏楽 → テニス → 美術 → 科学。棒の高さを見比べて確かめる。",
      "1年生120人が選んだ部活動（英文 \"Forty students chose it.\"〜\"the last ten students joined the science club.\" に対応）。40＋30＋25＋15＋10＝120で、本文の There are 120 first-year students this year. と一致する。科学部は現在10人で最少だが、10年前は50人を超えて最大だった（第3段落）",
    ],
    buildSteps: 4,
  },

  // s342：理科部が測定した校庭の正午の気温（英文第2段落の5か月分）
  lf_kokoeigoext10_342: {
    kind: 'lineChart',
    xLabel: '月',
    yLabel: '気温（℃）',
    xRange: [4, 12],
    yRange: [0, 35],
    series: [
      {
        label: '正午の気温',
        markers: true,
        points: [
          { x: 4, y: 15 },
          { x: 6, y: 22 },
          { x: 8, y: 33 },
          { x: 10, y: 20 },
          { x: 12, y: 8 },
        ],
      },
    ],
    caption:
      '校庭で毎月15日の正午に測った気温（英文 "In April, the temperature at noon was 15 degrees."〜"in December it was only 8 degrees." に対応）。8月の33℃が最高。木かげの地面は8月の最も暑い日に開けた場所より5℃低かったので、33－5＝28℃と計算できる',
    steps: [
      "よこじくは「月」、たてじくは「気温（℃）」。点をつないだ線が、どう変わっていくかを表している。",
      "はじめは（4, 15）、終わりは（12, 8）。",
      "全体として7だけ減っている。右下がりは減少を表す。",
      "かたむきが急なところほど、変わり方が大きい。",
      "校庭で毎月15日の正午に測った気温（英文 \"In April, the temperature at noon was 15 degrees.\"〜\"in December it was only 8 degrees.\" に対応）。8月の33℃が最高。木かげの地面は8月の最も暑い日に開けた場所より5℃低かったので、33－5＝28℃と計算できる",
    ],
    buildSteps: 4,
  },

  // s344：全校200人の通学手段（合計90+60+40+10=200）
  lf_kokoeigoext10_344: {
    kind: 'barChart',
    xLabel: '通学手段',
    yLabel: '人数（人）',
    yMax: 100,
    bars: [
      { label: '徒歩', value: 90 },
      { label: '自転車', value: 60 },
      { label: 'バス', value: 40 },
      { label: '電車', value: 10 },
    ],
    caption:
      '全校生徒200人の通学手段（英文 "There were 90 of them."〜"Only ten students come by train" に対応）。90＋60＋40＋10＝200で、第1段落の There are 200 students in our school と一致する。バス通学の40人は、大雪でバスが止まった日に登校できなかった生徒である',
    steps: [
      "よこじくは「通学手段」、たてじくは「人数（人）」を表している。まず何と何を比べた図かをつかむ。",
      "いちばん大きいのは「徒歩」で90（人数（人））。",
      "いちばん小さいのは「電車」で10。差は80。",
      "大きい順にならべると 徒歩 → 自転車 → バス → 電車。棒の高さを見比べて確かめる。",
      "全校生徒200人の通学手段（英文 \"There were 90 of them.\"〜\"Only ten students come by train\" に対応）。90＋60＋40＋10＝200で、第1段落の There are 200 students in our school と一致する。バス通学の40人は、大雪でバスが止まった日に登校できなかった生徒である",
    ],
    buildSteps: 4,
  },

  // s347：40人学級のペット調査（合計16+10+6+2+6=40）
  lf_kokoeigoext10_347: {
    kind: 'pieChart',
    slices: [
      { label: '犬 16人', value: 16 },
      { label: '猫 10人', value: 10 },
      { label: '魚 6人', value: 6 },
      { label: '飼っていない 6人', value: 6 },
      { label: '鳥 2人', value: 2 },
    ],
    caption:
      '40人の学級で飼っているペット（英文 "Sixteen students answered that they keep a dog."〜"the other six students keep no pet at all." に対応）。16＋10＋6＋2＋6＝40。割合は犬40％・猫25％・魚15％・飼っていない15％・鳥5％。複数飼っている生徒は最も長く飼っている動物を選んだため、猫の実際の数は10より多い（最終段落）',
    steps: [
      "円全体を100%として、それぞれが全体のどれくらいかを表した円グラフ。",
      "いちばん大きいのは「犬 16人」で、全体のおよそ40%。",
      "内わけは 犬 16人 40%、猫 10人 25%、魚 6人 15%、飼っていない 6人 15% …。",
      "割合は「部分 ÷ 全体 × 100」で求める。全部たすと100%になることを確かめる。",
      "40人の学級で飼っているペット（英文 \"Sixteen students answered that they keep a dog.\"〜\"the other six students keep no pet at all.\" に対応）。16＋10＋6＋2＋6＝40。割合は犬40％・猫25％・魚15％・飼っていない15％・鳥5％。複数飼っている生徒は最も長く飼っている動物を選んだため、猫の実際の数は10より多い（最終段落）",
    ],
    buildSteps: 4,
  },

  // s350：市の食品廃棄量（合計40+25+18+12+5=100トン）
  lf_kokoeigoext10_350: {
    kind: 'barChart',
    xLabel: '場所の種類',
    yLabel: '食品廃棄量（トン）',
    yMax: 50,
    bars: [
      { label: '家庭', value: 40 },
      { label: '飲食店', value: 25 },
      { label: 'スーパー', value: 18 },
      { label: '学校', value: 12 },
      { label: 'ホテル', value: 5 },
    ],
    caption:
      '市内5種類の場所から出た食品廃棄量（英文 "Homes produced 40 tons, restaurants 25 tons, supermarkets 18 tons, schools 12 tons, and hotels 5 tons." に対応）。合計100トンで本文の The total was 100 tons. と一致。家庭の40トンは飲食店25＋学校12＝37トンより多く、本文の in fact, homes waste more than restaurants and schools together を裏づける',
    steps: [
      "よこじくは「場所の種類」、たてじくは「食品廃棄量（トン）」を表している。まず何と何を比べた図かをつかむ。",
      "いちばん大きいのは「家庭」で40（食品廃棄量（トン））。",
      "いちばん小さいのは「ホテル」で5。差は35。",
      "大きい順にならべると 家庭 → 飲食店 → スーパー → 学校 → ホテル。棒の高さを見比べて確かめる。",
      "市内5種類の場所から出た食品廃棄量（英文 \"Homes produced 40 tons, restaurants 25 tons, supermarkets 18 tons, schools 12 tons, and hotels 5 tons.\" に対応）。合計100トンで本文の The total was 100 tons. と一致。家庭の40トンは飲食店25＋学校12＝37トンより多く、本文の in fact, homes waste more than restaurants and schools together を裏づける",
    ],
    buildSteps: 4,
  },

  // s353：15歳の生徒の平日の平均睡眠時間（4か国）
  lf_kokoeigoext10_353: {
    kind: 'barChart',
    xLabel: '国',
    yLabel: '平均睡眠時間（時間）',
    yMax: 10,
    bars: [
      { label: '日本', value: 7.0 },
      { label: 'アメリカ', value: 7.6 },
      { label: 'フランス', value: 8.1 },
      { label: 'フィンランド', value: 8.4 },
    ],
    caption:
      '15歳の生徒の学校がある日の平均睡眠時間（英文 "Japan 7.0 hours, the United States 7.6 hours, France 8.1 hours, and Finland 8.4 hours." に対応）。日本が最も短い。フィンランドとの差は8.4－7.0＝1.4時間＝84分',
    steps: [
      "よこじくは「国」、たてじくは「平均睡眠時間（時間）」を表している。まず何と何を比べた図かをつかむ。",
      "いちばん大きいのは「フィンランド」で8.4（平均睡眠時間（時間））。",
      "いちばん小さいのは「日本」で7。差は1.4。",
      "大きい順にならべると フィンランド → フランス → アメリカ → 日本。棒の高さを見比べて確かめる。",
      "15歳の生徒の学校がある日の平均睡眠時間（英文 \"Japan 7.0 hours, the United States 7.6 hours, France 8.1 hours, and Finland 8.4 hours.\" に対応）。日本が最も短い。フィンランドとの差は8.4－7.0＝1.4時間＝84分",
    ],
    buildSteps: 4,
  },

  // s356：学校の平日のスマートフォン平均使用時間（2020〜2024）
  lf_kokoeigoext10_356: {
    kind: 'lineChart',
    xLabel: '年',
    yLabel: '平均使用時間（分）',
    xRange: [2020, 2024],
    yRange: [0, 200],
    series: [
      {
        label: '平日の平均使用時間',
        markers: true,
        points: [
          { x: 2020, y: 80 },
          { x: 2021, y: 110 },
          { x: 2022, y: 140 },
          { x: 2023, y: 170 },
          { x: 2024, y: 190 },
        ],
      },
    ],
    caption:
      '同じ学校で毎年たずねた平日のスマートフォン平均使用時間（英文 "In 2020 it was 80 minutes."〜"in 2024 it reached 190 minutes." に対応）。5年で190－80＝110分の増加。増え方は＋30・＋30・＋30・＋20で、最後の1年だけゆるやか。3時間＝180分なので、2024年の平均は3時間を超えている',
    steps: [
      "よこじくは「年」、たてじくは「平均使用時間（分）」。点をつないだ線が、どう変わっていくかを表している。",
      "はじめは（2020, 80）、終わりは（2024, 190）。",
      "全体として110だけ増えている。右上がりなら増加、右下がりなら減少と読む。",
      "かたむきが急なところほど、変わり方が大きい。",
      "同じ学校で毎年たずねた平日のスマートフォン平均使用時間（英文 \"In 2020 it was 80 minutes.\"〜\"in 2024 it reached 190 minutes.\" に対応）。5年で190－80＝110分の増加。増え方は＋30・＋30・＋30・＋20で、最後の1年だけゆるやか。3時間＝180分なので、2024年の平均は3時間を超えている",
    ],
    buildSteps: 4,
  },

  // s360：リョウの50m自由形のタイム（4月〜8月）
  lf_kokoeigoext10_360: {
    kind: 'lineChart',
    xLabel: '月',
    yLabel: '50mのタイム（秒）',
    xRange: [4, 8],
    yRange: [30, 50],
    series: [
      {
        label: 'リョウのタイム',
        markers: true,
        points: [
          { x: 4, y: 45 },
          { x: 5, y: 43 },
          { x: 6, y: 40 },
          { x: 7, y: 38 },
          { x: 8, y: 36 },
        ],
      },
    ],
    caption:
      'リョウの50mのタイムの変化（英文 "he swam 50 meters in 45 seconds."〜"In August, Ryo swam 50 meters in 36 seconds." に対応）。縦軸はタイムなので、線が下がるほど速くなったことを表す。4月45秒から8月36秒へ9秒短縮。姉の最初のタイム48秒はリョウの45秒より遅い',
    steps: [
      "よこじくは「月」、たてじくは「50mのタイム（秒）」。点をつないだ線が、どう変わっていくかを表している。",
      "はじめは（4, 45）、終わりは（8, 36）。",
      "全体として9だけ減っている。右下がりは減少を表す。",
      "かたむきが急なところほど、変わり方が大きい。",
      "リョウの50mのタイムの変化（英文 \"he swam 50 meters in 45 seconds.\"〜\"In August, Ryo swam 50 meters in 36 seconds.\" に対応）。縦軸はタイムなので、線が下がるほど速くなったことを表す。4月45秒から8月36秒へ9秒短縮。姉の最初のタイム48秒はリョウの45秒より遅い",
    ],
    buildSteps: 4,
  },

  // s364：1人が1km移動するときの二酸化炭素排出量
  lf_kokoeigoext10_364: {
    kind: 'barChart',
    xLabel: '移動手段',
    yLabel: '二酸化炭素（g／1人1km）',
    yMax: 140,
    bars: [
      { label: '飛行機', value: 130 },
      { label: '自動車（1人）', value: 120 },
      { label: 'バス', value: 60 },
      { label: '鉄道', value: 20 },
    ],
    caption:
      '1人が1km移動するときの二酸化炭素排出量（英文 "A plane produced 130 grams, a car with one person produced 120 grams, a bus produced 60 grams, and a train produced 20 grams." に対応）。自動車の120gは1人乗車のときの値で、4人で乗れば120÷4＝30gとなり、バスの60gを下回る',
    steps: [
      "よこじくは「移動手段」、たてじくは「二酸化炭素（g／1人1km）」を表している。まず何と何を比べた図かをつかむ。",
      "いちばん大きいのは「飛行機」で130（二酸化炭素（g／1人1km））。",
      "いちばん小さいのは「鉄道」で20。差は110。",
      "大きい順にならべると 飛行機 → 自動車（1人） → バス → 鉄道。棒の高さを見比べて確かめる。",
      "1人が1km移動するときの二酸化炭素排出量（英文 \"A plane produced 130 grams, a car with one person produced 120 grams, a bus produced 60 grams, and a train produced 20 grams.\" に対応）。自動車の120gは1人乗車のときの値で、4人で乗れば120÷4＝30gとなり、バスの60gを下回る",
    ],
    buildSteps: 4,
  },

  // s366：この1週間にレジ袋を断ったと答えた人の割合
  lf_kokoeigoext10_366: {
    kind: 'barChart',
    xLabel: '調査時期',
    yLabel: 'レジ袋を断った人の割合（％）',
    yMax: 100,
    bars: [
      { label: '2020年3月', value: 30 },
      { label: '2020年11月', value: 72 },
      { label: '2021年', value: 75 },
      { label: '2022年', value: 77 },
    ],
    caption:
      '「この1週間にレジ袋を断ったか」に「はい」と答えた人の割合（英文 "In March 2020, before the rule, 30 percent of people said yes."〜"in 2022 it was 77 percent." に対応）。2020年7月の有料化をはさんで30％→72％に上昇。2020年3月と2022年の差は77－30＝47ポイント。ただしレジ袋は日本のプラスチックごみの約2％にすぎない',
    steps: [
      "よこじくは「調査時期」、たてじくは「レジ袋を断った人の割合（％）」を表している。まず何と何を比べた図かをつかむ。",
      "いちばん大きいのは「2022年」で77（レジ袋を断った人の割合（％））。",
      "いちばん小さいのは「2020年3月」で30。差は47。",
      "大きい順にならべると 2022年 → 2021年 → 2020年11月 → 2020年3月。棒の高さを見比べて確かめる。",
      "「この1週間にレジ袋を断ったか」に「はい」と答えた人の割合（英文 \"In March 2020, before the rule, 30 percent of people said yes.\"〜\"in 2022 it was 77 percent.\" に対応）。2020年7月の有料化をはさんで30％→72％に上昇。2020年3月と2022年の差は77－30＝47ポイント。ただしレジ袋は日本のプラスチックごみの約2％にすぎない",
    ],
    buildSteps: 4,
  },

  // s367：中学生の不読率（1か月に本を1冊も読まない生徒の割合）
  lf_kokoeigoext10_367: {
    kind: 'lineChart',
    xLabel: '年',
    yLabel: '不読率（％）',
    xRange: [2000, 2023],
    yRange: [0, 50],
    series: [
      {
        label: '中学生の不読率',
        markers: true,
        points: [
          { x: 2000, y: 43 },
          { x: 2010, y: 13 },
          { x: 2015, y: 15 },
          { x: 2020, y: 12 },
          { x: 2023, y: 20 },
        ],
      },
    ],
    caption:
      '1か月に本を1冊も読まない中学生の割合（英文 "In 2000 it was 43 percent."〜"in 2023 it was 20 percent." に対応）。最も低いのは2020年の12％。2000年と比べれば大きく改善したが、2020年以降は12％→20％と再び上昇しており、筆者はこれを worrying（心配だ）と述べている',
    steps: [
      "よこじくは「年」、たてじくは「不読率（％）」。点をつないだ線が、どう変わっていくかを表している。",
      "はじめは（2000, 43）、終わりは（2023, 20）。",
      "全体として23だけ減っている。右下がりは減少を表す。",
      "かたむきが急なところほど、変わり方が大きい。",
      "1か月に本を1冊も読まない中学生の割合（英文 \"In 2000 it was 43 percent.\"〜\"in 2023 it was 20 percent.\" に対応）。最も低いのは2020年の12％。2000年と比べれば大きく改善したが、2020年以降は12％→20％と再び上昇しており、筆者はこれを worrying（心配だ）と述べている",
    ],
    buildSteps: 4,
  },

  // s368：全校250人が最も行きたい国（合計70+60+45+40+35=250）
  lf_kokoeigoext10_368: {
    kind: 'barChart',
    xLabel: '国',
    yLabel: '人数（人）',
    yMax: 80,
    bars: [
      { label: 'オーストラリア', value: 70 },
      { label: 'アメリカ', value: 60 },
      { label: 'イタリア', value: 45 },
      { label: '韓国', value: 40 },
      { label: 'エジプト', value: 35 },
    ],
    caption:
      '全校250人が「最も訪れたい国」として選んだ国（英文 "Australia was chosen by 70 students, the United States by 60, Italy by 45, Korea by 40, and Egypt by 35." に対応）。70＋60＋45＋40＋35＝250で全校生徒数と一致。オーストラリア70人はエジプト35人のちょうど2倍。先生たちはアメリカが1位になると予想していたが、実際は違った',
    steps: [
      "よこじくは「国」、たてじくは「人数（人）」を表している。まず何と何を比べた図かをつかむ。",
      "いちばん大きいのは「オーストラリア」で70（人数（人））。",
      "いちばん小さいのは「エジプト」で35。差は35。",
      "大きい順にならべると オーストラリア → アメリカ → イタリア → 韓国 → エジプト。棒の高さを見比べて確かめる。",
      "全校250人が「最も訪れたい国」として選んだ国（英文 \"Australia was chosen by 70 students, the United States by 60, Italy by 45, Korea by 40, and Egypt by 35.\" に対応）。70＋60＋45＋40＋35＝250で全校生徒数と一致。オーストラリア70人はエジプト35人のちょうど2倍。先生たちはアメリカが1位になると予想していたが、実際は違った",
    ],
    buildSteps: 4,
  },

  // s369：南町の人口の推移（1975〜2015）
  lf_kokoeigoext10_369: {
    kind: 'lineChart',
    xLabel: '年',
    yLabel: '人口（人）',
    xRange: [1975, 2015],
    yRange: [0, 16000],
    series: [
      {
        label: '南町の人口',
        markers: true,
        points: [
          { x: 1975, y: 12000 },
          { x: 1985, y: 14000 },
          { x: 1995, y: 11000 },
          { x: 2005, y: 8000 },
          { x: 2015, y: 6000 },
        ],
      },
    ],
    caption:
      '南町の人口の推移（英文 "In 1975 it was 12,000."〜"6,000 in 2015." に対応）。頂点は1985年の14,000人で、本文の the highest number in the town\'s history と一致する。1978年に開いた工場が約900人の働き口を生み、1990年の閉鎖後は減少が続いた',
    steps: [
      "よこじくは「年」、たてじくは「人口（人）」。点をつないだ線が、どう変わっていくかを表している。",
      "はじめは（1975, 12000）、終わりは（2015, 6000）。",
      "全体として6000だけ減っている。右下がりは減少を表す。",
      "かたむきが急なところほど、変わり方が大きい。",
      "南町の人口の推移（英文 \"In 1975 it was 12,000.\"〜\"6,000 in 2015.\" に対応）。頂点は1985年の14,000人で、本文の the highest number in the town's history と一致する。1978年に開いた工場が約900人の働き口を生み、1990年の閉鎖後は減少が続いた",
    ],
    buildSteps: 4,
  },

  // s370：学校のごみ1週間分の内訳（合計90+50+40+20=200kg）
  lf_kokoeigoext10_370: {
    kind: 'pieChart',
    slices: [
      { label: '紙 90kg', value: 90 },
      { label: '食べ物 50kg', value: 50 },
      { label: 'プラスチック 40kg', value: 40 },
      { label: 'その他 20kg', value: 20 },
    ],
    caption:
      '理科部が調べた学校のごみ1週間分の内訳（英文 "The total weight was 200 kilograms. Paper was the largest part, 90 kilograms."〜"other things 20 kilograms." に対応）。90＋50＋40＋20＝200kg。割合は紙45％・食べ物25％・プラスチック20％・その他10％で、紙は半分には達していない',
    steps: [
      "円全体を100%として、それぞれが全体のどれくらいかを表した円グラフ。",
      "いちばん大きいのは「紙 90kg」で、全体のおよそ45%。",
      "内わけは 紙 90kg 45%、食べ物 50kg 25%、プラスチック 40kg 20%、その他 20kg 10%。",
      "割合は「部分 ÷ 全体 × 100」で求める。全部たすと100%になることを確かめる。",
      "理科部が調べた学校のごみ1週間分の内訳（英文 \"The total weight was 200 kilograms. Paper was the largest part, 90 kilograms.\"〜\"other things 20 kilograms.\" に対応）。90＋50＋40＋20＝200kg。割合は紙45％・食べ物25％・プラスチック20％・その他10％で、紙は半分には達していない",
    ],
    buildSteps: 4,
  },

  // s371：クラス30人の平日の放課後の平均時間配分
  lf_kokoeigoext10_371: {
    kind: 'barChart',
    xLabel: '活動',
    yLabel: '平均時間（分）',
    yMax: 120,
    bars: [
      { label: 'スマホ', value: 100 },
      { label: '部活動', value: 90 },
      { label: '家庭学習', value: 70 },
      { label: '家の手伝い', value: 15 },
      { label: '読書', value: 10 },
    ],
    caption:
      'クラス30人の平日の放課後の平均時間（英文 "Study at home: 70 minutes. Club activities: 90 minutes. Smartphone: 100 minutes. Helping at home: 15 minutes. Reading: 10 minutes." に対応）。最も長いのはスマホの100分。手伝い15分＋読書10分＝25分はスマホの4分の1で、スマホを25分減らせば25＋25＝50分となり2倍にできる',
    steps: [
      "よこじくは「活動」、たてじくは「平均時間（分）」を表している。まず何と何を比べた図かをつかむ。",
      "いちばん大きいのは「スマホ」で100（平均時間（分））。",
      "いちばん小さいのは「読書」で10。差は90。",
      "大きい順にならべると スマホ → 部活動 → 家庭学習 → 家の手伝い → 読書。棒の高さを見比べて確かめる。",
      "クラス30人の平日の放課後の平均時間（英文 \"Study at home: 70 minutes. Club activities: 90 minutes. Smartphone: 100 minutes. Helping at home: 15 minutes. Reading: 10 minutes.\" に対応）。最も長いのはスマホの100分。手伝い15分＋読書10分＝25分はスマホの4分の1で、スマホを25分減らせば25＋25＝50分となり2倍にできる",
    ],
    buildSteps: 4,
  },

  // s372：市の博物館と動物園の来場者数（2019〜2023・単位は千人）
  lf_kokoeigoext10_372: {
    kind: 'lineChart',
    xLabel: '年',
    yLabel: '来場者数（千人）',
    xRange: [2019, 2023],
    yRange: [0, 100],
    series: [
      {
        label: '博物館',
        markers: true,
        points: [
          { x: 2019, y: 40 },
          { x: 2020, y: 15 },
          { x: 2021, y: 25 },
          { x: 2022, y: 35 },
          { x: 2023, y: 45 },
        ],
      },
      {
        label: '動物園',
        markers: true,
        dashed: true,
        points: [
          { x: 2019, y: 90 },
          { x: 2020, y: 30 },
          { x: 2021, y: 55 },
          { x: 2022, y: 75 },
          { x: 2023, y: 85 },
        ],
      },
    ],
    caption:
      '市の博物館（実線）と動物園（点線）の来場者数。単位は千人（英文 "the museum had 40 thousand visitors and the zoo had 90 thousand."〜"in 2023 they were 45 thousand and 85 thousand." に対応）。2023年、博物館は45>40で2019年を上回ったが、動物園は85<90でまだ戻っていない。両者の差は2019年50千人、2020年15千人、2023年40千人',
    steps: [
      "よこじくは「年」、たてじくは「来場者数（千人）」。点をつないだ線が、どう変わっていくかを表している。",
      "はじめは（2019, 40）、終わりは（2023, 45）。",
      "全体として5だけ増えている。右上がりなら増加、右下がりなら減少と読む。",
      "線が2本あるので、同じよこじくの値どうしで上下を見比べる。",
      "市の博物館（実線）と動物園（点線）の来場者数。単位は千人（英文 \"the museum had 40 thousand visitors and the zoo had 90 thousand.\"〜\"in 2023 they were 45 thousand and 85 thousand.\" に対応）。2023年、博物館は45>40で2019年を上回ったが、動物園は85<90でまだ戻っていない。両者の差は2019年50千人、2020年15千人、2023年40千人",
    ],
    buildSteps: 4,
  },

  // s373：学年別の年間貸出冊数（合計1200+900+500=2600冊）
  lf_kokoeigoext10_373: {
    kind: 'barChart',
    xLabel: '学年',
    yLabel: '貸出冊数（冊）',
    yMax: 1400,
    bars: [
      { label: '1年生', value: 1200 },
      { label: '2年生', value: 900 },
      { label: '3年生', value: 500 },
    ],
    caption:
      '昨年度の学年別の貸出冊数（英文 "first-year students borrowed 1,200 books, second-year students 900, and third-year students 500." に対応）。1,200＋900＋500＝2,600で本文の The total was 2,600 books. と一致する。1年生は3年生の1,200÷500＝2.4倍で、差は700冊',
    steps: [
      "よこじくは「学年」、たてじくは「貸出冊数（冊）」を表している。まず何と何を比べた図かをつかむ。",
      "いちばん大きいのは「1年生」で1200（貸出冊数（冊））。",
      "いちばん小さいのは「3年生」で500。差は700。",
      "大きい順にならべると 1年生 → 2年生 → 3年生。棒の高さを見比べて確かめる。",
      "昨年度の学年別の貸出冊数（英文 \"first-year students borrowed 1,200 books, second-year students 900, and third-year students 500.\" に対応）。1,200＋900＋500＝2,600で本文の The total was 2,600 books. と一致する。1年生は3年生の1,200÷500＝2.4倍で、差は700冊",
    ],
    buildSteps: 4,
  },

  // s375：村で米を作る農家の数（2005〜2025）
  lf_kokoeigoext10_375: {
    kind: 'lineChart',
    xLabel: '年',
    yLabel: '米を作る農家（戸）',
    xRange: [2005, 2025],
    yRange: [0, 70],
    series: [
      {
        label: '米を作る農家の数',
        markers: true,
        points: [
          { x: 2005, y: 60 },
          { x: 2010, y: 45 },
          { x: 2015, y: 30 },
          { x: 2020, y: 20 },
          { x: 2025, y: 12 },
        ],
      },
    ],
    caption:
      '村で米を作る農家の数（英文 "60 in 2005, 45 in 2010, 30 in 2015, 20 in 2020, and 12 in 2025." に対応）。2025年の12戸は本文の Today only twelve families grow rice. と一致する。20年で60戸から12戸へ5分の1に減少。減少幅は15・15・10・8と小さくなっている。2016年に始めた取り組みには200人以上が参加している',
    steps: [
      "よこじくは「年」、たてじくは「米を作る農家（戸）」。点をつないだ線が、どう変わっていくかを表している。",
      "はじめは（2005, 60）、終わりは（2025, 12）。",
      "全体として48だけ減っている。右下がりは減少を表す。",
      "かたむきが急なところほど、変わり方が大きい。",
      "村で米を作る農家の数（英文 \"60 in 2005, 45 in 2010, 30 in 2015, 20 in 2020, and 12 in 2025.\" に対応）。2025年の12戸は本文の Today only twelve families grow rice. と一致する。20年で60戸から12戸へ5分の1に減少。減少幅は15・15・10・8と小さくなっている。2016年に始めた取り組みには200人以上が参加している",
    ],
    buildSteps: 4,
  },
};
