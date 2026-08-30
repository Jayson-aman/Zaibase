import type { Question } from './questions-meta';

// 小学4年生・社会（標準カリキュラム）。
// 単元：都道府県（名称・位置・特徴）／地図の見方（方位・縮尺・地図記号）／
// 県内の地形・産業（農業・工業の特色）／昔から今へ続く暮らし（伝統文化・年中行事）／
// ごみ・水・電気などのくらしを支える仕組み／自然災害と防災（地域の取り組み）
export const gradeE4ShakaiQuestions: Question[] = [
  // ===== 都道府県（名称・位置・特徴） =====
  {
    id: 'grade_e4_shakai_01',
    subject: 'shakai',
    question:
      '日本には都道府県がいくつありますか。「1都・1道・2府・43県」という内わけをもとに数字で答えましょう。',
    answer: '47',
    hint: '1＋1＋2＋43を計算しよう。',
    explanation:
      '日本は東京都（1都）、北海道（1道）、大阪府・京都府（2府）、それ以外の43の県からなる。1＋1＋2＋43＝47なので、都道府県の数は全部で47。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_02',
    subject: 'shakai',
    question: '日本の都道府県の中で、面積がいちばん広いのはどこですか。',
    answer: '北海道',
    hint: '日本の地図でいちばん大きく見える都道府県。',
    explanation:
      '北海道は日本全体の面積のおよそ5分の1をしめる、47都道府県の中でもっとも面積が広い都道府県。2番目に面積が広いのは岩手県。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_03',
    subject: 'shakai',
    question: '日本の都道府県の中で、面積がいちばん小さいのはどこですか。',
    answer: '香川県',
    hint: '四国地方にある、うどんで有名な県。',
    explanation:
      '香川県は瀬戸内海に面した四国地方の県で、面積は47都道府県の中でもっとも小さい。うどんの生産・消費量が多いことから「うどん県」とも呼ばれている。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_04',
    subject: 'shakai',
    question: '次の4つの県のうち、海に面していない「内陸県」はどれですか。',
    answer: '長野県',
    choices: ['静岡県', '長野県', '愛知県', '福岡県'],
    hint: '日本には海に面していない内陸県が8つある。',
    explanation:
      '日本には海に面していない内陸県が8つある（栃木県・群馬県・埼玉県・山梨県・長野県・岐阜県・滋賀県・奈良県）。長野県はそのうちの1つで、周りをたくさんの県に囲まれている。静岡県・愛知県・福岡県はすべて海に面している。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_05',
    subject: 'shakai',
    question:
      '日本の都道府県の中で、いちばん多くの数の県ととなり合っている県はどこですか。（8つの県ととなり合っています）',
    answer: '長野県',
    hint: '中部地方の中央にあり、内陸県でもある。',
    explanation:
      '長野県は新潟県・群馬県・埼玉県・山梨県・静岡県・愛知県・岐阜県・富山県の8つの県ととなり合っており、これは日本の都道府県の中でもっとも多い数。',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: 'e4',
    memoryTip: '長野県は「内陸県」であると同時に「日本一多くの県ととなり合う県」でもある、とセットで覚えよう。',
  },
  {
    id: 'grade_e4_shakai_06',
    subject: 'shakai',
    question: '北海道の道庁（道の政治の中心となる役所）が置かれている都市はどこですか。',
    answer: '札幌市',
    hint: '北海道でいちばん人口が多い都市。',
    explanation:
      '北海道の道庁所在地は札幌市。北海道のように、都道府県名とその都道府県庁が置かれている都市の名前がちがう例は、全国に18ある。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_07',
    subject: 'shakai',
    question: '宮城県の県庁所在地はどこですか。',
    answer: '仙台市',
    hint: '「杜（もり）の都」とも呼ばれる、東北地方でいちばん人口が多い都市。',
    explanation:
      '宮城県の県庁所在地は仙台市。東北地方でもっとも人口が多い都市で、街路樹が多いことから「杜の都」とも呼ばれている。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_08',
    subject: 'shakai',
    question: '兵庫県の県庁所在地はどこですか。',
    answer: '神戸市',
    hint: '県名と県庁所在地名がちがう県の1つ。',
    explanation:
      '兵庫県の県庁所在地は神戸市。県名と県庁所在地名が異なる県の1つで、神戸港は古くから貿易の窓口として栄えてきた。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_09',
    subject: 'shakai',
    question:
      '東北地方に含まれる県はいくつありますか。（青森県・岩手県・宮城県・秋田県・山形県・福島県）',
    answer: '6',
    hint: 'かっこの中にあげられた県の数を数えよう。',
    explanation:
      '東北地方は青森県・岩手県・宮城県・秋田県・山形県・福島県の6つの県からなる。北海道地方のすぐ南に位置する地方。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_10',
    subject: 'shakai',
    question: '次のうち、近畿地方に含まれない県はどれですか。',
    answer: '岡山県',
    choices: ['三重県', '奈良県', '岡山県', '和歌山県'],
    hint: '近畿地方は「2府5県」からなる。',
    explanation:
      '近畿地方は三重県・滋賀県・京都府・大阪府・兵庫県・奈良県・和歌山県の2府5県からなる。岡山県は近畿地方ではなく、中国地方に含まれる県。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_11',
    subject: 'shakai',
    question: '四国地方に含まれる4つの県をすべて答えましょう。',
    answer: '徳島県、香川県、愛媛県、高知県',
    hint: '瀬戸内海と太平洋にはさまれた地方。',
    explanation:
      '四国地方は瀬戸内海と太平洋にはさまれた4つの県、徳島県・香川県・愛媛県・高知県からなる。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_12',
    subject: 'shakai',
    question: '九州地方の中で、日本のいちばん南に位置する都道府県はどこですか。',
    answer: '沖縄県',
    hint: '多くの島じまからなり、温暖な気候で知られる。',
    explanation:
      '沖縄県は九州地方に属し、多くの島じまからなる日本最南端・最西端の都道府県。1年を通して温暖な気候が特徴。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_13',
    subject: 'shakai',
    question: '次のうち、中部地方の県で海に面していない「内陸県」はどれですか。',
    answer: '山梨県',
    choices: ['新潟県', '静岡県', '山梨県', '愛知県'],
    hint: '中部地方9県のうち、内陸県は3つある。',
    explanation:
      '中部地方には新潟県・富山県・石川県・福井県・山梨県・長野県・岐阜県・静岡県・愛知県の9県があり、このうち山梨県・長野県・岐阜県の3県は海に面していない内陸県。新潟県は日本海、静岡県と愛知県は太平洋に面している。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_14',
    subject: 'shakai',
    question: '東京都の中心部にある「特別区」は、合わせていくつありますか。',
    answer: '23',
    hint: '「23区」という呼び方でよく聞く数。',
    explanation:
      '東京都の中心部には「特別区」と呼ばれる区（千代田区・中央区・新宿区など）があり、まとめて「23区」と呼ばれる。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },

  // ===== 地図の見方（方位・縮尺・地図記号） =====
  {
    id: 'grade_e4_shakai_15',
    subject: 'shakai',
    question:
      '地図に方位記号（北を矢印で示すマーク）がかかれていないとき、地図の上の方向はふつう何方位を表しますか。',
    answer: '北',
    hint: '地図の決まりごとを思い出そう。',
    explanation:
      '地図では、とくに方位記号がない場合、地図の上を北、下を南、右を東、左を西として表すという決まりがある。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_16',
    subject: 'shakai',
    question: '「北」と「東」のちょうど真ん中の方位を何といいますか。',
    answer: '北東',
    hint: '東西南北の4方位の間の方位を8方位という。',
    explanation:
      '4方位（東・西・南・北）の間の方位を表したものを8方位という。北と東の間は「北東」、北と西の間は「北西」、南と東の間は「南東」、南と西の間は「南西」という。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_17',
    subject: 'shakai',
    question:
      '縮尺2万5千分の1の地図上で、2つの地点の間の長さを測ったら4cmでした。実際の距離は何mですか。',
    answer: '1000m（1km）',
    hint: '4cm×25000を計算し、cmをmに直そう。',
    explanation:
      '縮尺2万5千分の1は、地図上の1cmが実際の25000cmを表す。4cm×25000＝100000cm。100000cmをmに直すと100000÷100＝1000mなので、実際の距離は1000m（1km）。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_18',
    subject: 'shakai',
    question: '実際の距離が3kmある道を、縮尺5万分の1の地図の上に表すと、何cmになりますか。',
    answer: '6cm',
    hint: '3kmをまずcmに直してから、50000でわろう。',
    explanation:
      '3kmをcmに直すと、3km＝3000m＝300000cm。縮尺5万分の1なので、地図上の長さは実際の距離を50000でわれば求められる。300000÷50000＝6なので、地図上では6cmで表される。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_19',
    subject: 'shakai',
    question:
      '縮尺10万分の1の地図で、たて2cm・横3cmの長方形の土地があります。この土地の実際の面積は何平方キロメートルですか。',
    answer: '6平方キロメートル',
    hint: 'たて・横それぞれの実際の長さをまず求めてから、面積を計算しよう。',
    explanation:
      '縮尺10万分の1なので、地図上の1cmは実際の100000cm＝1kmを表す。たて2cmは実際2km、横3cmは実際3km。よって実際の面積は2km×3km＝6平方キロメートル。',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: 'e4',
    pitfall: '長さが2倍・3倍になっても、面積は2×3＝6倍になる。長さと面積の縮尺のちがいに注意しよう。',
  },
  {
    id: 'grade_e4_shakai_20',
    subject: 'shakai',
    question:
      '「稲をかり取ったあとの切り株の形」をもとにした地図記号は、何を表していますか。',
    answer: '田（水田）',
    hint: '米づくりをする土地の記号。',
    explanation:
      '田（水田）の地図記号は、稲をかり取ったあとに残る切り株を横から見た形をもとにしている。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_21',
    subject: 'shakai',
    question: '「植物の双葉（芽ばえ）の形」をもとにした地図記号は、何を表していますか。',
    answer: '畑',
    hint: '田んぼの記号とセットで出題されやすい。',
    explanation:
      '畑の地図記号は、植物が芽を出したときの双葉の形をもとにしている。田んぼの記号（切り株の形）とあわせて覚えておこう。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_22',
    subject: 'shakai',
    question: '神社を表す地図記号は、何の形をもとにしていますか。',
    answer: '鳥居',
    hint: '神社の入り口に立っているもの。',
    explanation:
      '神社の地図記号は、神社の入り口に立つ鳥居の形をそのまま図案化したもの。ちなみにお寺の地図記号は「卍（まんじ）」の文字がもとになっている。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_23',
    subject: 'shakai',
    question: '「〒」の形をもとにした地図記号は、何を表していますか。',
    answer: '郵便局',
    hint: '手紙やはがきをあつかう建物。',
    explanation:
      '郵便局の地図記号「〒」は、昔、郵便や電信をあつかっていた「逓信省（ていしんしょう）」という役所の頭文字「テ」をもとにしたマーク。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_24',
    subject: 'shakai',
    question: '歯車（はぐるま）の形をもとにした地図記号は、何を表していますか。',
    answer: '工場',
    hint: '機械を動かすときに使われる部品の形。',
    explanation:
      '工場の地図記号は、機械を動かすときに使われる歯車の形をもとにしている。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
  },

  // ===== 県内の地形・産業（農業・工業の特色） =====
  {
    id: 'grade_e4_shakai_25',
    subject: 'shakai',
    question:
      '乳牛を飼い、牛乳やバター・チーズなどをつくる農業を「酪農」といいます。日本でこの酪農がもっともさかんな都道府県はどこですか。',
    answer: '北海道',
    hint: '広い牧草地が広がる都道府県。',
    explanation:
      '北海道は広い牧草地を生かして酪農がさかんで、生乳（牛からしぼったままの乳）の生産量は都道府県別で日本一。じゃがいもやたまねぎ、小麦の生産量も日本一。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_26',
    subject: 'shakai',
    question: '日本でりんごの生産量がいちばん多い県はどこですか。',
    answer: '青森県',
    hint: '本州のいちばん北にある県。',
    explanation:
      '青森県は涼しい気候を生かしてりんご作りがさかんで、生産量は都道府県別で日本一。全国のりんごのおよそ半分が青森県で作られている。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_27',
    subject: 'shakai',
    question: '日本でさくらんぼの生産量がいちばん多い県はどこですか。',
    answer: '山形県',
    hint: '東北地方にある、盆地が多い県。',
    explanation:
      '山形県は盆地特有の夏の暑さと昼夜の寒暖差を生かしてさくらんぼ作りがさかんで、生産量は都道府県別で日本一。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_28',
    subject: 'shakai',
    question:
      '高知県や宮崎県では、ビニールハウスを使って、なすやピーマンなどの野菜をほかの産地より早い時期に育てて出荷しています。このような栽培方法を何といいますか。',
    answer: '促成栽培',
    hint: '「成長を促（うなが）す」と書く。',
    explanation:
      '高知県や宮崎県は冬でも比較的あたたかい気候を生かし、ビニールハウスで野菜を早く育てて、他の産地からの出荷が少ない時期（冬から春）に出荷する「促成栽培」を行っている。早く出荷できると、価格が高いうちに売ることができるという利点がある。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_29',
    subject: 'shakai',
    question:
      '群馬県の嬬恋村や長野県の野辺山原では、夏でも涼しい高原の気候を生かして、キャベツやレタスの出荷時期をほかの産地よりおくらせる栽培方法が行われています。この栽培方法を何といいますか。',
    answer: '抑制栽培',
    hint: '出荷の時期を「抑（おさ）える」栽培方法。',
    explanation:
      '高原の涼しい気候を利用して野菜を育て、平地の産地の出荷が少なくなる夏に出荷する栽培方法を抑制栽培という。促成栽培とは逆に、出荷の時期をおそくする工夫。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
    pitfall: '促成栽培（出荷を早める）と抑制栽培（出荷をおそくする）を逆に覚えないように注意しよう。',
  },
  {
    id: 'grade_e4_shakai_30',
    subject: 'shakai',
    question:
      '自動車工業がさかんで、日本を代表する自動車会社の本社や工場が多く集まる都市がある県はどこですか。',
    answer: '愛知県',
    hint: '「中京工業地帯」の中心となる県。',
    explanation:
      '愛知県豊田市を中心に自動車工業がさかんで、愛知県をふくむ地域は「中京工業地帯」と呼ばれ、工業生産額が日本でもっとも多い工業地帯となっている。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_31',
    subject: 'shakai',
    question: '大阪府や兵庫県を中心に広がる工業地帯を何といいますか。',
    answer: '阪神工業地帯',
    hint: '大阪と神戸の頭文字が名前に入っている。',
    explanation:
      '大阪府・兵庫県を中心に広がる工業地帯を阪神工業地帯という。金属工業や化学工業がさかんなことが特徴の1つ。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_32',
    subject: 'shakai',
    question:
      '岡山県・広島県・山口県・香川県・愛媛県など、瀬戸内海沿岸に広がる工業地域を何といいますか。',
    answer: '瀬戸内工業地域',
    hint: '海の名前がそのまま入っている。',
    explanation:
      '瀬戸内海沿岸には岡山県・広島県・山口県・香川県・愛媛県などにまたがる瀬戸内工業地域が広がっており、造船業や石油化学工業がさかん。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_33',
    subject: 'shakai',
    question:
      '石川県で受けつがれてきた、うるしをぬり重ねてつくる伝統的な工芸品を何といいますか。',
    answer: '輪島塗',
    hint: '石川県のある市の名前が入っている。',
    explanation:
      '石川県輪島市では、うるしを何度もぬり重ねてつくる漆器「輪島塗」が古くから作られており、国の伝統的工芸品に指定されている。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_34',
    subject: 'shakai',
    question:
      '富士山のふもと付近が有名な産地で、日本でも生産量が多い、湯をそそいで飲む飲み物の原料となる農作物は何ですか。',
    answer: '茶',
    choices: ['米', '茶', '小麦', '大豆'],
    hint: '静岡県の牧之原台地などで多く作られている。',
    explanation:
      '静岡県は水はけのよい台地や丘陵地が広がり、茶（お茶）の生産がさかん。県内の牧之原台地などは茶畑が広がることで知られている。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },

  // ===== 昔から今へ続く暮らし（伝統文化・年中行事） =====
  {
    id: 'grade_e4_shakai_35',
    subject: 'shakai',
    question:
      '「鬼は外、福は内」と言いながら豆をまき、悪いものを追いはらう年中行事を何といいますか。',
    answer: '節分',
    hint: '2月3日ごろに行われる、季節の変わり目の行事。',
    explanation:
      '節分は季節の変わり目（立春の前日、2月3日ごろ）に行われる行事で、豆をまいて災いを追いはらい、1年の健康を願う。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_36',
    subject: 'shakai',
    question:
      '3月3日に、女の子の健やかな成長を願って、ひな人形をかざる行事を何といいますか。',
    answer: 'ひな祭り',
    hint: '「桃の節句」とも呼ばれる。',
    explanation:
      '3月3日は「桃の節句」とも呼ばれ、ひな人形をかざって女の子の健やかな成長を願う行事「ひな祭り」が行われる。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_37',
    subject: 'shakai',
    question:
      '5月5日は「こどもの日」で、こいのぼりを立てたり、かぶとをかざったりします。この日はもともと何という節句と呼ばれていましたか。',
    answer: '端午の節句',
    hint: '五月人形やこいのぼりに関係が深い節句。',
    explanation:
      '5月5日は端午の節句と呼ばれ、もともとは男の子の成長を願う行事だった。現在は「こどもの日」として、すべての子どもの健やかな成長を願う国民の祝日になっている。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_38',
    subject: 'shakai',
    question: '7月7日、笹の葉に願いごとを書いた短冊をかざる行事を何といいますか。',
    answer: '七夕',
    hint: 'おりひめとひこ星の伝説にちなんだ行事。',
    explanation:
      '7月7日の七夕は、笹の葉に願いごとを書いた短冊をむすびつけて星にいのる行事。おりひめとひこ星の伝説にちなんでいる。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_39',
    subject: 'shakai',
    question:
      '子どもが3歳・5歳・7歳になった年に、成長を祝って神社にお参りする行事を何といいますか。',
    answer: '七五三',
    hint: '11月15日ごろに行われることが多い。',
    explanation:
      '七五三は、3歳・5歳・7歳になった子どもの成長を祝い、神社にお参りする行事で、11月15日ごろに行われることが多い。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_40',
    subject: 'shakai',
    question:
      '佐賀県で江戸時代から作られてきた、白地に青色などのもようをつけた焼き物を何といいますか。',
    answer: '有田焼',
    hint: '佐賀県のある町の名前が入っている。',
    explanation:
      '佐賀県有田町では江戸時代から焼き物づくりがさかんで、「有田焼」は日本を代表する陶磁器の1つとして知られている。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_41',
    subject: 'shakai',
    question:
      '京都府で毎年7月に行われ、日本三大祭りの1つにも数えられる、大きな山車（だし）「山鉾（やまぼこ）」が街を練り歩く祭りを何といいますか。',
    answer: '祇園祭',
    hint: '八坂神社のお祭り。',
    explanation:
      '京都府の祇園祭は八坂神社の祭礼で、毎年7月に開催される。豪華な山鉾が京都の街を練り歩く「山鉾巡行」が有名で、日本三大祭りの1つに数えられることが多い。',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_42',
    subject: 'shakai',
    question:
      '青森県で毎年夏に行われる、武者などの絵をえがいた大きな灯籠（とうろう）を引いて練り歩く祭りを何といいますか。',
    answer: 'ねぶた祭',
    hint: '東北三大祭りの1つに数えられることが多い。',
    explanation:
      '青森ねぶた祭は毎年8月上旬に行われる東北地方を代表する夏祭りで、勇壮な武者絵などがえがかれた大きな灯籠を引いて街を練り歩く。東北三大祭りの1つに数えられることが多い。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
  },

  // ===== くらしを支える仕組み（ごみ・水・電気） =====
  {
    id: 'grade_e4_shakai_43',
    subject: 'shakai',
    question:
      '燃やすことができる「もえるごみ」と、びん・かん・ペットボトルなどの「しげんごみ」のように、種類ごとにごみを分けて出すことを何といいますか。',
    answer: 'ごみの分別',
    hint: 'ごみをリサイクルしやすくするための工夫。',
    explanation:
      'ごみを種類ごとに分けて出すことを「ごみの分別」という。分別することで、資源ごみをリサイクル（再利用）しやすくなり、ごみの量を減らすことにもつながる。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_44',
    subject: 'shakai',
    question: '川やダムから取り入れた水を、飲めるようにきれいにする施設を何といいますか。',
    answer: '浄水場',
    hint: '「水を浄（きよ）める」と書く。',
    explanation:
      '浄水場では、川やダムなどから取り入れた水にふくまれるごみやにごりを取りのぞき、消毒して、安全に飲める水道水にする。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_45',
    subject: 'shakai',
    question:
      '家庭や工場で使われて汚れた水を、川や海に流す前にきれいにする施設を何といいますか。',
    answer: '下水処理場',
    hint: '「下水」をきれいにする施設。',
    explanation:
      '使われて汚れた水（下水）は、下水処理場に集められ、微生物のはたらきなどを利用してきれいにされてから、川や海に流される。これによって水のよごれを防いでいる。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_46',
    subject: 'shakai',
    question:
      '川の上流などに作られるダムには、水を発電や飲み水などに利用するほかに、大雨のときに水の量を調節して、下流の洪水を防ぐ役割もあります。この洪水を防ぐ役割を何といいますか。',
    answer: '治水',
    hint: '「水を治める」と書く。',
    explanation:
      'ダムには水をたくわえて発電や生活用水・農業用水に利用する役割のほかに、大雨のときに水をせき止めて下流に一度に流れ出ないようにし、洪水を防ぐ「治水」の役割もある。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
  },

  // ===== 自然災害と防災（地域の取り組み） =====
  {
    id: 'grade_e4_shakai_47',
    subject: 'shakai',
    question:
      '地震や洪水などの自然災害が起きたときに、被害が予想される地域や避難場所などを示した地図を何といいますか。',
    answer: 'ハザードマップ',
    hint: '「危険（ハザード）」を示す地図。',
    explanation:
      'ハザードマップは、自然災害が起きたときにどこでどのような被害が予想されるか、また避難場所や避難経路はどこかを示した地図で、多くの市区町村が作成し、住民に配っている。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_48',
    subject: 'shakai',
    question:
      '地震が発生したときに、大きなゆれが来る前に、テレビやスマートフォンなどを通じて知らせるしくみを何といいますか。',
    answer: '緊急地震速報',
    hint: '大きなゆれの前に伝わる小さなゆれを感知してすばやく知らせる。',
    explanation:
      '緊急地震速報は、地震が発生した直後に伝わる小さなゆれ（P波）を感知し、後から来る大きなゆれ（S波）が来る前に知らせるしくみ。少しでも早く身を守る行動をとれるようにするためのもの。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_49',
    subject: 'shakai',
    question:
      '海沿いの地域で、津波が来たときにすぐ高い場所へ避難できるように作られた建物を何といいますか。',
    answer: '津波避難タワー',
    hint: '近くに高い建物や高台がない地域に建てられる。',
    explanation:
      '津波避難タワーは、近くに高い建物や高台がない海沿いの地域に建てられた、津波から身を守るための避難施設。地震が起きたらすぐに階段などで上の階に避難できるようになっている。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_shakai_50',
    subject: 'shakai',
    question:
      '災害が起きたとき、自分の身は自分で守る「自助」、近所の人どうしで助け合う「○○」、市区町村や消防・警察などが行う「公助」の3つの助け合いが大切とされています。○○に入る言葉を答えましょう。',
    answer: '共助',
    hint: '「共に助け合う」と書く。',
    explanation:
      '災害への備えでは、自分の身を自分で守る「自助」、近所や地域の人どうしで助け合う「共助」、国や市区町村・消防・警察・自衛隊などが行う「公助」の3つが組み合わさることが大切とされている。特に大きな災害の直後は公助がすぐに届かないことも多く、自助・共助が重要になる。',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: 'e4',
  },
];
