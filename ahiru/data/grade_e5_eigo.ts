import type { Question } from './questions-meta';
import type { GradeKey } from './grades';

const GRADE: GradeKey = 'e5';

// 小学5年生 英語（学年タグ e5）。中学受験の英語ではなく、通常の小5外国語活動〜
// 教科としての英語の基礎に沿った内容：曜日、月、教科の言い方、
// like / don't like（好き・きらい）、can / can't（〜できる・できない）、
// 時刻の表現、What/Where/When/Who を使った基本の疑問文、
// 簡単な現在形の文と短い英文の読み取り。
export const gradeE5EigoQuestions: Question[] = [
  // ============================================================
  // 曜日（days of the week） 6問 (01-06)
  // ============================================================
  {
    id: 'grade_e5_eigo_03',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question: 'Sunday は日本語で何曜日ですか。',
    answer: '日曜日',
    hint: '週末の2日目。「サン」は「太陽」の意味。',
    explanation:
      '【答え】日曜日\n\n【Sunday の意味】Sun は「太陽」という意味である。つまり Sunday は「太陽の日」で、日本語の「日曜日」とぴったり同じ意味になる。\n\n【曜日の名前は星から来ている】ここがおもしろいところである。日本語も英語も、もとは同じ考え方でできている。\n・Sunday … 太陽（Sun）→ 日曜日\n・Monday … 月（Moon）→ 月曜日\n・Tuesday … 北欧の神ティール（火星にあたる）→ 火曜日\n・Wednesday … 北欧の神オーディン（水星にあたる）→ 水曜日\n・Thursday … 雷の神トール（木星にあたる）→ 木曜日\n・Friday … 女神フリッグ（金星にあたる）→ 金曜日\n・Saturday … 土星（Saturn）→ 土曜日\n日・月・火・水・木・金・土は、太陽・月と5つの惑星の名前である。英語も同じ順番でできているので、意味がそろっている。\n\n【つづりと大文字】\n・曜日の名前は、文のとちゅうでも必ず大文字で始める（Sunday、Monday …）\n・月の名前・国の名前・人の名前も同じ決まりである\n\n【曜日でよく使う言い方】\n・On Sunday（日曜日に）… 曜日には on をつける\n・What day is it today?（今日は何曜日ですか）\n・It is Sunday.（日曜日です）\n・weekend（週末）… Saturday と Sunday\n・weekday（平日）… Monday から Friday',
  },
  {
    id: 'grade_e5_eigo_04',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question: 'Monday の次の日（曜日）は英語で何ですか。',
    answer: 'Tuesday',
    choices: ['Tuesday', 'Wednesday', 'Sunday', 'Saturday'],
    hint: '曜日の順番：Sunday → Monday → Tuesday → ...',
    explanation:
      '【何を聞かれているか】\nMondayの次の曜日を答える問題。\n\n【なぜ曜日の順番を覚えるのか】\n英語の曜日には決まった順番があり、その順番を覚えていれば、ある曜日の次や前の曜日をすぐに答えられる。\n\n【ポイント1】曜日の順番を確認する\nSunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturdayの順。\n\n【ポイント2】Mondayの位置を確認する\nMondayは2番目。\n\n【ポイント3】次の曜日を確認する\nMondayの次はTuesday（火曜日）。\n\n【答え】\nTuesday\n\n【確かめ】\n選んだ答えが、Mondayの1つ後ろの曜日（Tuesday）になっているか確認する。\n\n【よくあるまちがい】\nSunday（日曜日）をMondayの前後で混同してしまうミス。\n\n【ここが絶対】\n曜日はSunday〜Saturdayの順番をひとつながりで暗唱できるようにしておく。',
  },
  {
    id: 'grade_e5_eigo_05',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: GRADE,
    question: '「木曜日」を表す英語の正しいつづり（スペル）はどれですか。',
    answer: 'Thursday',
    choices: ['Thursday', 'Thusday', 'Turesday', 'Thersday'],
    hint: 'th のあとに ur が続く。',
    explanation:
      '【答え】Thursday\n\n【つづり】T-h-u-r-s-d-a-y の8文字。\n・th のあとに ur が続く\n・「サーズデイ」と読むので、u を書き忘れやすい\n\n【ほかの選択肢がなぜちがうか】1つずつ確かめる。\n・Thusday … r が抜けている\n・Turesday … h が抜けていて、r の位置もちがう\n・Thersday … u ではなく e になっている\n「th ＋ ur」の並びを声に出して覚えると、まちがえにくい。\n\n【名前の由来】Thursday は、北欧神話の雷の神トール（Thor）の日という意味である。トールは木星（Jupiter）にあたる神なので、日本語の「木曜日」と対応している。\n\n【曜日のつづりでまちがえやすいもの】\n・Wednesday … 「ウェンズデイ」と読むのに、d が入る。書き忘れが最も多い\n・Tuesday … 「チューズデイ」。u のあとに e\n・Thursday … th ＋ ur\n・Saturday … Satur ＋ day。「サタデイ」\n読み方とつづりがずれている曜日は、この4つである。\n\n【覚え方】Wednesday は「ウェド・ネス・デイ」と、つづりのとおりに声に出して覚える。読み方ではなく、つづりのとおりに読んで覚えるのが、英語のつづりを覚えるこつである。\n\n【大文字で書く】曜日は文のとちゅうでも必ず大文字で始める。',
    pitfall: 'Thursday は Tuesday（火曜日）とつづりが似ているので混同しないように注意。',
  },
  {
    id: 'grade_e5_eigo_06',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '次の文の（　）に入る単語はどれですか。\nMy favorite day is (　). （わたしのいちばん好きな曜日は土曜日です。）',
    answer: 'Saturday',
    choices: ['Saturday', 'Sunday', 'Monday', 'Friday'],
    hint: '「土曜日」を表す英単語。',
    explanation:
      '【何を聞かれているか】\n"My favorite day is (　)."（わたしのいちばん好きな曜日は土曜日です。）の空欄に入る単語を選ぶ問題。\n\n【なぜSaturdayを選ぶのか】\n日本語の「土曜日」に対応する英単語がSaturdayなので、日本語の意味と英単語を正しく結びつける必要がある。\n\n【ポイント1】「土曜日」に対応する英単語を確認する\n「土曜日」はSaturday。\n\n【ポイント2】文の意味を確認する\n"My favorite day is Saturday."＝「わたしのいちばん好きな曜日は土曜日です」。\n\n【ポイント3】他の選択肢を消去する\nSunday（日曜日）、Monday（月曜日）、Friday（金曜日）はいずれも「土曜日」ではない。\n\n【答え】\nSaturday\n\n【確かめ】\n選んだ答えが「土曜日」を表すSaturdayになっているか確認する。\n\n【よくあるまちがい】\nSaturdayとSundayのつづり（両方Sで始まる）を混同してしまうミス。\n\n【ここが絶対】\n曜日の英単語は、日本語の意味とセットで正確に覚える。',
  },

  // ============================================================
  // 月（months） 6問 (07-12)
  // ============================================================
  {
    id: 'grade_e5_eigo_07',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '「1月」を英語で言うと？',
    answer: 'January',
    choices: ['January', 'June', 'July', 'April'],
    hint: '1年の最初の月。',
    explanation:
      '【答え】January\n\n【つづりと読み】J-a-n-u-a-r-y。「ジャニュアリー」と読む。\n\n【名前の由来】ローマ神話の神ヤヌス（Janus）から来ている。ヤヌスは前と後ろの両方に顔がある神で、「入り口・始まり」を守る神だった。\n・過去の年と新しい年の両方を見る月、という意味がこめられている\n1年の始まりにぴったりの名前である。\n\n【ほかの選択肢】\n・June … 6月\n・July … 7月\n・April … 4月\nJune と July は、どちらも J で始まり形も似ているので、取りちがえやすい。June と July の3文字目で見分ける。\n\n【12か月の名前】\n・January（1月）・February（2月）・March（3月）・April（4月）\n・May（5月）・June（6月）・July（7月）・August（8月）\n・September（9月）・October（10月）・November（11月）・December（12月）\n\n【大文字で書く】月の名前も曜日と同じで、文のとちゅうでも必ず大文字で始める。\n\n【月とセットで使う言葉】\n・in January（1月に）… 月には in をつける\n・in 2026（2026年に）… 年にも in\n・on January 1（1月1日に）… 日付が入ると on になる\n月だけなら in、日にちまで言うなら on。ここは必ず問われる。',
  },
  {
    id: 'grade_e5_eigo_08',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '「12月」を英語で言うと？',
    answer: 'December',
    choices: ['December', 'October', 'November', 'September'],
    hint: '1年の最後の月。クリスマスがある月。',
    explanation:
      '【答え】December\n\n【つづりと読み】D-e-c-e-m-b-e-r。「ディセンバー」と読む。e が3つ入っている。\n\n【名前の由来がおもしろい】decem はラテン語で「10」という意味である。つまり December は「10番目の月」という意味になる。\n・12月なのに「10番目」とは、どういうことか\n\n【昔のこよみは3月始まりだった】ローマの古いこよみでは、1年が3月から始まっていた。\n・3月を1番目と数えると、12月はちょうど10番目になる\n・あとから1月と2月が前に足されたため、名前と実際の番号が2つずれた\n\n【同じずれをもつ月】\n・September（9月）… septem ＝ 7\n・October（10月）… octo ＝ 8（たこ octopus は足が8本）\n・November（11月）… novem ＝ 9\n・December（12月）… decem ＝ 10\n4つとも、名前の数より2つあとの月になっている。理由を知ると、この4つがまとめて覚えられる。\n\n【ほかの選択肢】October（10月）・November（11月）・September（9月）。\n\n【12月に関わる言葉】\n・Christmas（クリスマス）… 12月25日\n・New Year\'s Eve（大みそか）… 12月31日\n・winter（冬）\n\n【使い方】My birthday is in December.（誕生日は12月です）',
  },
  {
    id: 'grade_e5_eigo_09',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question: 'July は日本語で何月ですか。',
    answer: '7月',
    hint: '夏休みが始まる少し前の月。',
    explanation:
      '【答え】7月\n\n【つづりと読み】J-u-l-y。「ジュライ」と読む。4文字と短い。\n\n【名前の由来】ローマの将軍ユリウス・カエサル（Julius Caesar）から取られた名前である。カエサルは7月生まれで、こよみを作り直した人でもあったため、その名が月の名前になった。\n\n【8月も人の名前】\n・August（8月）… ローマ皇帝アウグストゥス（Augustus）から\n7月と8月だけが、実在した人の名前からできている。ほかの月は神の名前や数からできているので、この2つは特別である。\n\n【June と July の見分け】どちらも Ju で始まるので取りちがえやすい。\n・June … 6月。n が入る\n・July … 7月。l が入る\n3文字目を見るのが確実である。\n・June は女神ユノ（Juno）から。ユノは結婚を守る神なので、6月の花嫁（ジューン・ブライド）という言い方がある\n\n【7月に関わる言葉】\n・summer（夏）\n・summer vacation（夏休み）\n・Independence Day（アメリカの独立記念日、7月4日）\n・七夕は英語で the Star Festival という\n\n【使い方】\n・My birthday is in July.（誕生日は7月です）\n・I go to the sea in July.（7月に海に行きます）',
  },
  {
    id: 'grade_e5_eigo_10',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question: '次の文の（　）に入る単語はどれですか。\nMy birthday is in (　). （わたしの誕生日は4月です。）',
    answer: 'April',
    choices: ['April', 'August', 'June', 'March'],
    hint: '「4月」を表す英単語。',
    explanation:
      '【答え】April\n\n【つづりと読み】A-p-r-i-l。「エイプリル」と読む。\n\n【文のしくみ】\n・My birthday is in April.（わたしの誕生日は4月です）\n・My birthday（わたしの誕生日）＝ 主語\n・is（〜です）＝ be動詞\n・in April（4月に）＝ いつかを表す部分\n\n【なぜ in を使うのか】ここが大事である。時を表す言葉には、広さによって使う前置詞が決まっている。\n・in … 広い時間。月・季節・年（in April、in summer、in 2026）\n・on … 1日の中の特定の日。日付・曜日（on April 1、on Sunday）\n・at … ひとつの時こく。時間（at seven o\'clock、at noon）\n広い順に in → on → at と覚える。\n\n【使い分けの練習】\n・in the morning（午前中に）… 幅のある時間なので in\n・on Monday morning（月曜の朝に）… 曜日がつくと on\n・at night（夜に）… 決まった言い方\n\n【4月の由来】ラテン語の「開く（aperire）」から来ているという説がある。花のつぼみが開く月という意味である。日本でも4月は桜の季節なので、感じ方が似ている。\n\n【誕生日をたずねる言い方】\n・When is your birthday?（誕生日はいつですか）\n・My birthday is April 10.（4月10日です）\n・日付まで言うときは in をつけない',
  },
  {
    id: 'grade_e5_eigo_11',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question: '9月を表す英単語はどれですか。',
    answer: 'September',
    choices: ['September', 'October', 'August', 'November'],
    hint: '夏休みが終わって新学期が始まる月。',
    explanation:
      '【答え】September\n\n【つづりと読み】S-e-p-t-e-m-b-e-r。「セプテンバー」と読む。9文字あり、月の中でいちばん長い。\n\n【名前の由来】septem はラテン語で「7」という意味である。もとのこよみは3月始まりだったので、Septemberは7番目の月だった。あとから1月と2月が加わって、2つうしろにずれた。\n\n【ほかの選択肢との見分け】どれも似た形なので、まとめて覚える。\n・September（9月）… septem ＝ 7\n・October（10月）… octo ＝ 8。たこ octopus の足が8本\n・November（11月）… novem ＝ 9\n・December（12月）… decem ＝ 10。十進法 decimal も同じ語から\nどれも -ber で終わるので、頭の部分の数で見分ける。\n\n【覚え方】\n・オクトパス（たこ）＝8本足 → October は8を表す語だが10月\n・この「2つずれる」を1回覚えれば、4つまとめて思い出せる\n\n【9月に関わる言葉】\n・autumn / fall（秋）… autumn はイギリス、fall はアメリカでよく使う\n・new school term（新学期）… 日本の学校は4月始まりだが、アメリカやイギリスは9月始まりである\n\n【使い方】\n・School starts in September.（学校は9月に始まります）\n・My birthday is in September.',
  },
  {
    id: 'grade_e5_eigo_12',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question: '次の文の（　）に入る単語はどれですか。\nMy birthday is in (　). （わたしの誕生日は5月です。）',
    answer: 'May',
    choices: ['May', 'March', 'June', 'July'],
    hint: '「5月」を表す英単語。',
    explanation:
      '【答え】May\n\n【つづりと読み】M-a-y。「メイ」と読む。3文字で、月の名前の中でいちばん短い。\n\n【名前の由来】ローマ神話の女神マイア（Maia）から来ている。マイアは春と成長を司る女神で、草木がぐんぐん育つ月という意味がこめられている。\n\n【もう1つの意味】May には「〜してもよい」という助動詞の意味もある。\n・May I use your pen?（ペンを使ってもいいですか）\n・この May は月の May とは別の言葉だが、どちらも大文字か小文字かで見分けられる\n　・月の May … いつでも大文字\n　・助動詞の may … 文のはじめ以外は小文字\n\n【文のしくみ】\n・My birthday is in May.\n・「〜月に」なので in を使う\n\n【5月に関わる言葉】\n・spring（春）\n・Golden Week（ゴールデンウィーク。日本だけの言い方）\n・Children\'s Day（こどもの日、5月5日）\n・Mother\'s Day（母の日、5月の第2日曜日）\n\n【月の名前でまちがえやすい組】\n・March（3月）と May（5月） … どちらも M で始まる\n・June（6月）と July（7月） … どちらも Ju で始まる\n・August（8月） … 「オーガスト」。つづりの gu を書き忘れやすい\n\n【使い方】We have a sports day in May.（5月に運動会があります）',
  },

  // ============================================================
  // 教科の言い方（school subjects） 6問 (13-18)
  // ============================================================
  {
    id: 'grade_e5_eigo_13',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '「算数」を英語で言うと？',
    answer: 'math',
    choices: ['math', 'English', 'music', 'art'],
    hint: '数を使う教科。',
    explanation:
      '【答え】math\n\n【もとの言葉】math は mathematics（マセマティクス＝数学）を短くした言い方である。\n・アメリカでは math\n・イギリスでは maths（s がつく）\n同じ英語でも国によってちがう例である。\n\n【つづりと読み】m-a-t-h。th の音は、上下の歯の間に舌先を少し出して出す。日本語にない音である。\n\n【教科の名前】まとめて覚える。\n・math（算数・数学）\n・Japanese（国語）… 大文字で始める\n・English（英語）… 大文字で始める\n・science（理科）\n・social studies（社会）… 2語で1つの教科名\n・music（音楽）\n・art（図工・美術）\n・P.E.（体育）… Physical Education の略\n・home economics（家庭科）\n・calligraphy（書写・習字）\n\n【大文字で始める教科】ここが大事である。\n・Japanese・English … 国や言語の名前がもとなので、いつも大文字\n・math・science・music・art … ふつうの名詞なので、文のとちゅうでは小文字\n国や言語の名前は必ず大文字という決まりから来ている。\n\n【使い方】\n・I like math.（算数が好きです）\n・What subject do you like?（何の教科が好きですか）\n・My favorite subject is math.（いちばん好きな教科は算数です）',
  },
  {
    id: 'grade_e5_eigo_14',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '「音楽」を英語で言うと？',
    answer: 'music',
    choices: ['music', 'art', 'P.E.', 'science'],
    hint: '歌を歌ったり楽器をひいたりする教科。',
    explanation:
      '【答え】music\n\n【つづりと読み】m-u-s-i-c。「ミュージック」と読む。最後の c は「ク」の音になる。\n\n【名前の由来】ギリシャ神話のミューズ（Muse）という女神たちから来ている。ミューズは詩や音楽、学問をつかさどる女神だった。\n・museum（博物館）も同じ語から。「ミューズにささげる場所」という意味である\nmusic と museum は親せきの言葉だと知ると、両方まとめて覚えられる。\n\n【音楽に関わる言葉】\n・sing（歌う）・song（歌）・singer（歌手）\n・play the piano（ピアノをひく）… 楽器には the をつける\n・musician（音楽家）\n・concert（コンサート）\n・instrument（楽器）\n\n【楽器とスポーツのちがい】必ず問われる。\n・play the piano／the guitar／the violin … 楽器には the\n・play soccer／tennis／baseball … スポーツには何もつけない\nセットで覚える。\n\n【ほかの選択肢】\n・art（図工・美術）\n・P.E.（体育）\n・science（理科）\n\n【使い方】\n・I like music.（音楽が好きです）\n・I have music on Monday.（月曜に音楽があります）\n・Music class is fun.（音楽の授業は楽しい）',
  },
  {
    id: 'grade_e5_eigo_15',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: GRADE,
    question: 'P.E. は日本語で何の教科ですか。',
    answer: '体育',
    hint: 'Physical Education（フィジカル・エデュケーション）を短くした言い方。',
    explanation:
      '【答え】体育\n\n【何を短くした言葉か】P.E. は Physical Education（フィジカル・エデュケーション）の頭文字である。\n・physical … 体の、身体の\n・education … 教育\n・合わせて「体の教育」＝ 体育\n\n【点（ピリオド）がつく理由】P.E. のように頭文字を取った言葉には、点をつけることがある。\n・P.E.（体育）・U.S.A.（アメリカ）・a.m.（午前）・p.m.（午後）\n・最近は点をつけない書き方（PE、USA）も増えている\n\n【頭文字を取った言葉】英語にはとても多い。\n・TV … television（テレビ）\n・PC … personal computer（パソコン）\n・UN … United Nations（国際連合）\n・DVD・ATM・AI\nもとの言葉を知っていると、意味が想像できる。\n\n【体育に関わる言葉】\n・run（走る）・jump（とぶ）・swim（泳ぐ）・throw（投げる）・catch（とる）\n・gym（体育館）… gymnasium を短くした言い方\n・sports day（運動会）\n・team（チーム）\n\n【使い方】\n・I have P.E. today.（今日は体育があります）\n・I like P.E. the best.（体育がいちばん好きです）\n\n【a.m. と p.m. の意味】\n・a.m. … ラテン語の ante meridiem（正午より前）\n・p.m. … post meridiem（正午より後）\nmeridiem が「正午」、ante が「前」、post が「後」である。',
  },
  {
    id: 'grade_e5_eigo_16',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '「理科」を英語で言うと？',
    answer: 'science',
    choices: ['science', 'social studies', 'Japanese', 'English'],
    hint: '実験をしたり自然を調べたりする教科。',
    explanation:
      '【答え】science\n\n【つづりと読み】s-c-i-e-n-c-e。「サイエンス」と読む。\n・sc で始まり、最初の c は音を出さない\n・sc のなかま … science、scene（場面）、scissors（はさみ）\nsc の c を読まないのは、この3つがよく出る。\n\n【名前の由来】ラテン語の「知ること」を意味する言葉から来ている。知識を集めて確かめる学問という意味である。\n\n【理科に関わる言葉】\n・experiment（実験）・observe（観察する）\n・plant（植物）・animal（動物）・insect（昆虫）\n・water（水）・air（空気）・light（光）・sound（音）\n・earth（地球）・moon（月）・sun（太陽）・star（星）\n・scientist（科学者）… science ＋ ist\n\n【〜ist で「〜する人」】\n・science → scientist（科学者）\n・art → artist（芸術家）\n・piano → pianist（ピアニスト）\n-er と同じように「〜する人」を表す作り方である。\n\n【ほかの選択肢】\n・social studies（社会）… 2語で1つの教科名\n・Japanese（国語）… 大文字で始める\n・English（英語）… 大文字で始める\n\n【使い方】\n・I like science.（理科が好きです）\n・We have science on Tuesday.（火曜に理科があります）\n・Science is interesting.（理科はおもしろい）',
  },
  {
    id: 'grade_e5_eigo_17',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: GRADE,
    question: '次の文の（　）に入る単語はどれですか。\nI like (　). （わたしは国語が好きです。）',
    answer: 'Japanese',
    choices: ['Japanese', 'English', 'math', 'music'],
    hint: '英語では「国語」という教科名は無く、日本語という意味の単語を使う。',
    explanation:
      '【解説】\n英語には「国語」という教科名がないので、教科としての国語は Japanese（日本語）と言う。\nI like Japanese. で「わたしは国語が好きです」という文になる。\n答え：Japanese',
    pitfall: 'Japanese には「日本語（の教科）」と「日本人・日本の」という2つの意味があることに注意。',
  },
  {
    id: 'grade_e5_eigo_18',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question: '「社会」を英語で言うと？',
    answer: 'social studies',
    choices: ['social studies', 'science', 'art', 'math'],
    hint: '2つの単語を組み合わせた言い方。',
    explanation:
      '【何を聞かれているか】\n「社会」を英語で何と言うかを答える問題。\n\n【なぜ2つの単語を組み合わせるのか】\n「社会（科）」は、social（社会の）とstudies（学習）という2つの単語を組み合わせたsocial studiesという言い方をする。\n\n【ポイント1】social studiesの成り立ちを確認する\nsocial（社会の）＋studies（学習）＝social studies（社会科）。\n\n【ポイント2】他の選択肢を消去する\nscience（理科）、art（図工・美術）、math（算数・数学）はいずれも別の教科を表す。\n\n【ポイント3】教科名をセットで確認する\n教科名の英単語は、それぞれの教科と正しく結びつけて覚える。\n\n【答え】\nsocial studies\n\n【確かめ】\n選んだ答えが「社会（科）」を表すsocial studiesになっているか確認する。\n\n【よくあるまちがい】\nscience（理科）とsocial studies（社会）を混同してしまうミス。\n\n【ここが絶対】\n教科名は、social studies（社会）・science（理科）・art（図工）・math（算数）とセットで覚える。',
  },

  // ============================================================
  // like / don't like（好き・きらい） 8問 (19-26)
  // ============================================================
  {
    id: 'grade_e5_eigo_19',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '「私はサッカーが好きです。」を英語にすると？',
    answer: 'I like soccer.',
    choices: ['I like soccer.', 'I likes soccer.', 'I like a soccer.', 'I liking soccer.'],
    hint: '主語が I（わたし）のときの like の形は変わらない。',
    explanation:
      '【何を聞かれているか】\n「私はサッカーが好きです。」を英語にする問題。\n\n【なぜIike にsをつけないのか】\n主語がI（わたし）のときは、動詞likeにsをつけず、そのままの形で使うという決まりがある。\n\n【ポイント1】基本の形を確認する\n「〜が好きです」はI like 〜.で表す。\n\n【ポイント2】主語Iとlikeの形を確認する\n主語がIのときはlikeのまま（sはつけない）。\n\n【ポイント3】スポーツ名の前のaを確認する\nsoccerのようなスポーツ名にはaをつけない。\n\n【答え】\nI like soccer.\n\n【確かめ】\nlikeにsがついていない（likesになっていない）か、soccerの前にaがついていないか確認する。\n\n【よくあるまちがい】\n主語がIなのにlikesとsをつけてしまうミス。\n\n【ここが絶対】\n主語がIのときの一般動詞は、そのままの形（原形）を使うと覚える。',
  },
  {
    id: 'grade_e5_eigo_20',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question: '「私はにんじんが好きではありません。」を英語にすると？',
    answer: "I don't like carrots.",
    choices: [
      "I don't like carrots.",
      'I not like carrots.',
      "I don't likes carrots.",
      "I isn't like carrots.",
    ],
    hint: '「好きではない」は don\'t like で表す。',
    explanation:
      '【何を聞かれているか】\n「私はにんじんが好きではありません。」を英語にする問題。\n\n【なぜdon\'t likeで表すのか】\n「〜が好きではない」という一般動詞の否定文は、主語がIのときdon\'t（do not）を使い、その後の動詞は原形のまま続けるという決まりがある。\n\n【ポイント1】基本の形を確認する\n「〜が好きではない」はI don\'t like 〜.で表す。\n\n【ポイント2】don\'tの後の動詞の形を確認する\ndon\'tのあとの動詞likeは元の形のまま使う（likesにしない）。\n\n【ポイント3】他の選択肢を消去する\n"I not like"（notの位置が誤り）、"isn\'t like"（be動詞を使うのは誤り）はいずれも不適切。\n\n【答え】\nI don\'t like carrots.\n\n【確かめ】\ndon\'tの後のlikeが原形のままになっているか確認する。\n\n【よくあるまちがい】\n"I don\'t likes carrots."のように、don\'tの後の動詞にsをつけてしまうミス。\n\n【ここが絶対】\n一般動詞の否定文＝主語+don\'t/doesn\'t+動詞の原形、という型でセットで覚える。',
  },
  {
    id: 'grade_e5_eigo_21',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '次の文の（　）に入る単語はどれですか。\nI (　) dogs. （わたしは犬が好きです。）',
    answer: 'like',
    hint: '「好き」を表す動詞。',
    explanation:
      '【答え】like\n\n【意味】like は「〜が好きだ」という意味の動詞である。\n\n【文のしくみ】\n・I（わたしは）＝ 主語\n・like（好きだ）＝ 動詞\n・dogs（犬を）＝ 目的語\n日本語では「犬が好き」だが、英語では「犬を好む」という組み立てになる。「が」につられて別の形にしないこと。\n\n【なぜ dogs と複数形なのか】ここがまちがえやすい。\n・種類全体をいうときは複数形にするのが英語の習慣である\n・I like dogs.（犬というものが好き）\n・I like a dog. とは言わない\n・ただし数えられない名詞は複数形にしない … I like music.（○）\n\n【like のあとに続く形】3通りある。\n・名詞 … I like dogs.\n・動名詞（〜ing） … I like reading books.（読むことが好き）\n・不定詞（to ＋ 動詞） … I like to read books.\nlike は動名詞と不定詞のどちらも使える動詞である。\n\n【主語が変わると形も変わる】\n・I like ／ You like ／ We like ／ They like\n・He likes ／ She likes ／ It likes（三人称単数には s）\n\n【疑問文と否定文】\n・Do you like dogs?（犬は好きですか）\n・I do not like dogs.（犬は好きではありません）\n一般動詞の文なので do を使う。be動詞（am・is・are）は使わない。',
  },
  {
    id: 'grade_e5_eigo_22',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question: 'Do you like apples? に対して「はい、好きです」と答える正しい文はどれですか。',
    answer: 'Yes, I do.',
    choices: ['Yes, I do.', 'Yes, I am.', 'Yes, I like.', 'Yes, I does.'],
    hint: 'Do you 〜? には do を使って答える。',
    explanation:
      '【答え】Yes, I do.\n\n【答え方の決まり】たずねられた言葉で答えるのが英語の決まりである。\n・Do you like apples? → Yes, I do. / No, I do not（don\'t）.\n・Are you a student? → Yes, I am. / No, I am not.\n・Can you swim? → Yes, I can. / No, I cannot（can\'t）.\n文のはじめに来た語を、そのまま答えに使う。これさえ守れば、どの疑問文にも答えられる。\n\n【ほかの選択肢がなぜちがうか】\n・Yes, I am. … am は be動詞。Do で聞かれたのに be動詞で答えている\n・Yes, I like. … like は目的語（何を好きか）が必要なので、これだけでは文が終わらない\n・Yes, I does. … does は he・she・it のときに使う形。I には do を使う\n\n【you で聞かれたら I で答える】\n・Do you like apples? → Yes, I do.\n「あなたは」と聞かれたら「わたしは」と答える。you をそのまま使わない。\n\n【短縮形】\n・do not → don\'t\n・does not → doesn\'t\n・cannot → can\'t\n・is not → isn\'t\n\n【主語が he・she のとき】\n・Does he like apples? → Yes, he does. / No, he doesn\'t.\ndoes で聞かれたら does で答える。\n\n【疑問詞のある疑問文は Yes/No で答えない】\n・What do you like? → I like apples.（○）／ Yes, I do.（×）',
  },
  {
    id: 'grade_e5_eigo_23',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: GRADE,
    question: '「あなたは魚が好きですか。」を英語にすると？',
    answer: 'Do you like fish?',
    hint: '「〜が好きですか」とたずねる文は Do you で始める。',
    explanation:
      '【何を聞かれているか】\n「あなたは魚が好きですか。」を英語にする問題。\n\n【なぜDo youで文を始めるのか】\n一般動詞を使った「〜が好きですか」とたずねる疑問文は、主語youの前にDoを置いて文を始めるという決まりがある。\n\n【ポイント1】疑問文の基本の形を確認する\nDo you like 〜?の形にする。\n\n【ポイント2】文末の記号を確認する\n最後にクエスチョンマーク（？）を忘れずにつける。\n\n【ポイント3】答え方を確認する\nDo you〜?への返答は、Yes, I do. / No, I don\'t.のように、doを使って答える。\n\n【答え】\nDo you like fish?\n\n【確かめ】\n文がDo youで始まり、文末に？がついているか確認する。\n\n【よくあるまちがい】\nDoを忘れて"You like fish?"のような文にしてしまうミス。\n\n【ここが絶対】\n一般動詞の疑問文＝Do/Does+主語+動詞の原形〜?、という型でセットで覚える。',
  },
  {
    id: 'grade_e5_eigo_24',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: GRADE,
    question: '次の文の（　）に入る単語はどれですか。\nShe (　) like spiders. （彼女はクモが好きではありません。）',
    answer: "doesn't",
    choices: ["doesn't", "don't", "isn't", 'not'],
    hint: '主語が she（彼女）のときの「〜ではない」の言い方。',
    explanation:
      '【何を聞かれているか】\n"She (　) like spiders."（彼女はクモが好きではありません。）の空欄に入る単語を選ぶ問題。\n\n【なぜdoesn\'tを使うのか】\n主語がheやshe（3人称単数）のときの一般動詞の否定文は、doesn\'t（does not）を使うという決まりがある。\n\n【ポイント1】主語の種類を確認する\n主語Sheは3人称単数。\n\n【ポイント2】否定文の形を確認する\n"She doesn\'t like spiders."＝doesn\'t＋動詞の原形like。\n\n【ポイント3】他の選択肢を消去する\ndon\'t（Iやyou用）、isn\'t（be動詞用）、not（単独では使えない）はいずれも不適切。\n\n【答え】\ndoesn\'t\n\n【確かめ】\n主語Sheに対応するdoesn\'tが選ばれ、don\'tと混同していないか確認する。\n\n【よくあるまちがい】\n主語がIやyouのときのdon\'tを、he・sheのときにも使ってしまうミス。\n\n【ここが絶対】\n主語がIやyouのときはdon\'t、he・she・itのときはdoesn\'tを使うと覚える。',
    pitfall: '主語が I や you のときは don\'t、he・she・it のときは doesn\'t を使うのでまちがえないこと。',
  },
  {
    id: 'grade_e5_eigo_25',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question:
      '次の英文を読んで、質問に答えなさい。\nTom likes basketball. He doesn\'t like tennis.\n質問：What sport does Tom like?',
    answer: 'basketball（バスケットボール）',
    hint: '最初の文に注目する。',
    explanation:
      '【解説】\n最初の文 Tom likes basketball.（トムはバスケットボールが好きです）から、トムが好きなスポーツは basketball だとわかる。\n2つ目の文 He doesn\'t like tennis. は「テニスは好きではない」という意味。\n答え：basketball（バスケットボール）',
  },
  {
    id: 'grade_e5_eigo_26',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '「好き」を意味する英単語はどれですか。',
    answer: 'like',
    choices: ['like', 'likes', 'liking', 'liked'],
    hint: '主語が I や you のときに使う形。',
    explanation:
      '【答え】like\n\n【動詞の基本の形】like が、この動詞のもとの形（原形）である。主語が I・you・we・they のときは、この形をそのまま使う。\n\n【ほかの選択肢は何か】どれも like から作られた別の形である。\n・likes … 主語が he・she・it のときの形（三単現の s）\n・liking … 「〜している」を表すときの形（現在進行形などで使う）\n・liked … 過去形・過去分詞。「好きだった」\nもとは同じ動詞でも、いつ・だれの話かで形が変わる。\n\n【主語によって形が変わる】現在の文では、\n・I / You / We / They → like\n・He / She / It → likes\nhe・she・it のときだけ s がつく。これを三人称単数現在の s という。\n\n【なぜ he・she・it だけなのか】英語には昔、主語によって動詞の形を変える仕組みがあり、いまはこの1か所だけに残っている。だから忘れやすく、試験で最もよく問われる。\n\n【s のつけ方】\n・ふつうは s … likes、plays、runs\n・s・x・ch・sh・o で終わる語は es … watches、washes、goes\n・子音＋y は y を i にして es … study → studies\n・have だけ特別 … have → has\n\n【疑問文・否定文では s が消える】\n・He likes apples.\n・Does he like apples?（does に s が移るので動詞は原形）\n・He does not like apples.\ndoes を使ったら、動詞はもとの形に戻す。',
  },

  // ============================================================
  // can / can't（〜できる・〜できない） 8問 (27-34)
  // ============================================================
  {
    id: 'grade_e5_eigo_27',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '「私は泳ぐことができます。」を英語にすると？',
    answer: 'I can swim.',
    choices: ['I can swim.', 'I can swims.', 'I can to swim.', 'I swim can.'],
    hint: 'can のあとの動詞はいつも元の形。',
    explanation:
      '【答え】I can swim.\n\n【can の使い方】can は「〜することができる」という意味を、動詞にそえる言葉（助動詞）である。\n・can のあとの動詞は、いつも もとの形（原形）にする\n・I can swim.（○）\n\n【ほかの選択肢がなぜちがうか】\n・I can swims. … can のあとに s をつけてはいけない。助動詞のあとは必ず原形\n・I can to swim. … can のあとに to はつけない\n・I swim can. … 語順がちがう。can は動詞の前に置く\n\n【can のあとに s をつけない理由】主語が he・she でも同じである。\n・He can swim.（○）／ He can swims.（×）\n三単現の s は、助動詞があるときはつけない。can がすでに形を受け持っているからである。\n\n【疑問文と否定文】\n・疑問文 … can を前に出す。Can you swim?\n・否定文 … can のあとに not。I cannot（can\'t）swim.\ndo や does は使わない。ここが一般動詞の文とのちがいである。\n\n【can のもう1つの意味】\n・能力 … I can swim.（泳げます）\n・許可 … Can I use your pen?（ペンを使ってもいいですか）\n「〜してもいい」という意味でも使える。\n\n【使い方の例】\n・I can play the piano.（ピアノがひけます）\n・I cannot ride a bike.（自転車に乗れません）\n・Can you speak English?（英語を話せますか）',
  },
  {
    id: 'grade_e5_eigo_28',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question: '「彼は自転車に乗ることができません。」を英語にすると？',
    answer: "He can't ride a bike.",
    choices: [
      "He can't ride a bike.",
      "He not can ride a bike.",
      "He can't rides a bike.",
      "He isn't can ride a bike.",
    ],
    hint: '「〜できない」は can\'t のあとに動詞の元の形。',
    explanation:
      '【何を聞かれているか】\n「彼は自転車に乗ることができません。」を英語にする問題。\n\n【なぜcan\'tの後は動詞の原形なのか】\n「〜することができない」という否定文は、can\'t（cannot）の後に動詞の元の形（原形）を続けるという決まりがある。\n\n【ポイント1】can\'tの形を確認する\ncan\'t（cannot）＝canの否定形。\n\n【ポイント2】can\'tの後の動詞の形を確認する\ncan\'tの後はride（原形）のまま使う（ridesにしない）。\n\n【ポイント3】他の選択肢を消去する\n"He not can ride"（語順が誤り）、"can\'t rides"（原形になっていない）、"isn\'t can ride"（be動詞と助動詞canを混同）はいずれも不適切。\n\n【答え】\nHe can\'t ride a bike.\n\n【確かめ】\ncan\'tの後の動詞rideが原形のままになっているか確認する。\n\n【よくあるまちがい】\n主語がHe（3人称単数）だからと、can\'tの後の動詞にsをつけてしまうミス。\n\n【ここが絶対】\ncanやcan\'tの後の動詞は、主語が何であっても常に原形にすると覚える。',
  },
  {
    id: 'grade_e5_eigo_29',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question:
      '次の文の（　）に入る単語はどれですか。\n(　) you play the piano? （あなたはピアノをひくことができますか。）',
    answer: 'Can',
    hint: '「〜できますか」とたずねる文の最初の単語。',
    explanation:
      '【何を聞かれているか】\n"(　) you play the piano?"（あなたはピアノをひくことができますか。）の空欄に入る単語を答える問題。\n\n【なぜCanを文頭に置くのか】\n「〜することができますか」とたずねる疑問文は、文の最初にCanを置いて主語youの前に出すという決まりがある。\n\n【ポイント1】疑問文の基本の形を確認する\nCan you play the piano?の形にする。\n\n【ポイント2】Canの位置を確認する\nCanは文の最初、主語youの前に置く。\n\n【ポイント3】答え方を確認する\nCan you〜?への返答は、Yes, I can. / No, I can\'t.のように、canを使って答える。\n\n【答え】\nCan\n\n【確かめ】\n文がCanで始まり、その後にyou play the pianoが続いているか確認する。\n\n【よくあるまちがい】\nCanを主語youの後に置いてしまうミス。\n\n【ここが絶対】\ncanの疑問文＝Can+主語+動詞の原形〜?、という型でセットで覚える。',
  },
  {
    id: 'grade_e5_eigo_30',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question: 'Can you cook? に対して「いいえ、できません」と答える正しい文はどれですか。',
    answer: "No, I can't.",
    choices: ["No, I can't.", 'No, I not.', "No, I isn't.", "No, I don't."],
    hint: 'Can you 〜? には can を使って答える。',
    explanation:
      '【答え】No, I can\'t.\n\n【答え方の決まり】たずねられた言葉で答える。\n・Can you cook? → Yes, I can. / No, I can\'t.\n・Do you cook? → Yes, I do. / No, I don\'t.\n・Are you a cook? → Yes, I am. / No, I am not.\n文のはじめに来た語を、そのまま答えに使う。\n\n【ほかの選択肢がなぜちがうか】\n・No, I not. … not だけでは文にならない。前に can や am が必要\n・No, I isn\'t. … is は he・she・it に使う形。I には am を使う\n・No, I don\'t. … Do で聞かれたときの答え方。Can には can で答える\n\n【短縮形】\n・cannot → can\'t（アポストロフィを忘れない）\n・cannot は1語で書く。can not と2語に分けて書くのは、ふつうはしない\n・is not → isn\'t、are not → aren\'t、do not → don\'t\n\n【you で聞かれたら I で答える】\n・Can you cook? → No, I can\'t.\n\n【できないことを言うときの言い方】ただ「できません」で終わらせず、一言そえると会話が続く。\n・No, I can\'t. But I want to learn.（でも習いたいです）\n・No, I can\'t cook well.（じょうずには作れません）\n\n【使い方の例】\n・Can you play the guitar? — Yes, I can.\n・Can you swim? — No, I can\'t.\n・Can he run fast? — Yes, he can.（主語が he でも can はそのまま）',
  },
  {
    id: 'grade_e5_eigo_31',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '「走る」を意味する英単語はどれですか。',
    answer: 'run',
    choices: ['run', 'walk', 'jump', 'swim'],
    hint: '速く足を動かす動作。',
    explanation:
      '【答え】run\n\n【意味】run は「走る」という意味の動詞である。\n\n【ほかの選択肢】どれも体の動きを表す動詞である。まとめて覚える。\n・walk … 歩く\n・jump … とぶ・はねる\n・swim … 泳ぐ\n・run … 走る\n\n【動きを表す動詞】\n・fly（飛ぶ）・climb（登る）・throw（投げる）・catch（とる）\n・kick（ける）・hit（打つ）・dance（おどる）・skate（スケートをする）\n\n【run のもう1つの意味】run には「経営する・動かす」という意味もある。\n・run a shop（店を経営する）\n・The machine is running.（機械が動いている）\n「走る」から「動き続ける」へ意味が広がったと考えると分かりやすい。\n\n【つづりの注意】run に ing をつけるときは、n を重ねて running にする。\n・run → running\n・swim → swimming\n・sit → sitting\n短い母音1つ＋子音1つで終わる語は、最後の字を重ねてから ing をつける。\n・walk → walking（母音が短くないので重ねない）\n\n【不規則な過去形】\n・run → ran（過去形）→ run（過去分詞）\n・swim → swam → swum\nrun は過去分詞がもとの形と同じというめずらしい動詞である。\n\n【使い方】I can run fast.（速く走れます）',
  },
  {
    id: 'grade_e5_eigo_32',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question:
      '次の英文を読んで、質問に答えなさい。\nI can sing well. I can\'t dance well.\n質問：What can the writer do well?',
    answer: 'sing（歌うこと）',
    hint: '最初の文に注目する。',
    explanation:
      '【解説】\n最初の文 I can sing well.（わたしはじょうずに歌うことができます）から、じょうずにできることは sing（歌うこと）だとわかる。\n2つ目の文 I can\'t dance well. は「じょうずにおどることはできない」という意味。\n答え：sing（歌うこと）',
  },
  {
    id: 'grade_e5_eigo_33',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: GRADE,
    question:
      '次の文の（　）に入る単語はどれですか。\nMy brother can (　) well. （わたしの兄はじょうずにスケートができます。）',
    answer: 'skate',
    choices: ['skate', 'skates', 'skating', 'skated'],
    hint: 'can のあとの動詞は元の形にする。',
    explanation:
      '【何を聞かれているか】\n"My brother can (　) well."（わたしの兄はじょうずにスケートができます。）の空欄に入る単語を選ぶ問題。\n\n【なぜskateが原形のままなのか】\ncanの後の動詞はいつも元の形（原形）にするという決まりがあり、主語が3人称単数（My brother）であっても、canの後の動詞にsはつけない。\n\n【ポイント1】canの後の動詞の形を確認する\ncanの後は動詞の原形（s、ing、edをつけない形）にする。\n\n【ポイント2】主語との関係を確認する\n主語がMy brother（3人称単数）でも、canの後の動詞に3単現のsはつけない。\n\n【ポイント3】他の選択肢を消去する\nskates（3単現）、skating（ing形）、skated（過去形）はいずれもcanの後には使えない。\n\n【答え】\nskate\n\n【確かめ】\n選んだ答えがskate（原形）であり、skates・skating・skatedになっていないか確認する。\n\n【よくあるまちがい】\nbe動詞の文と混同し、canの後の動詞にも3単現のsをつけてしまうミス。\n\n【ここが絶対】\ncanの後の動詞は、主語が何であっても常に原形にすると覚える。',
    pitfall: 'be動詞の文とちがい、can のあとの動詞には3人称単数の s をつけないことに注意。',
  },
  {
    id: 'grade_e5_eigo_34',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '「〜することができる」を表す英語の単語はどれですか。',
    answer: 'can',
    choices: ['can', 'is', 'do', 'like'],
    hint: '動詞の前に置いて能力を表す単語。',
    explanation:
      '【答え】can\n\n【can とは】動詞の前に置いて、「〜することができる」という意味を加える言葉である。このような言葉を助動詞という。\n\n【ほかの選択肢】\n・is … be動詞。「〜です」「〜にいる」を表す\n・do … 疑問文・否定文を作るのに使う語。「する」という動詞にもなる\n・like … 「好きだ」という動詞\nどれも動詞のなかまだが、「できる」という意味は持たない。\n\n【助動詞のきまり】ここが大事である。\n・助動詞のあとの動詞は、いつも もとの形（原形）\n・He can swim.（swims にしない）\n・疑問文は助動詞を前に出す … Can he swim?\n・否定文は助動詞のあとに not … He cannot swim.\ndo や does は使わない。\n\n【ほかの助動詞】中学で習うものもあわせて知っておくとよい。\n・can … 〜できる／〜してもよい\n・will … 〜するだろう（未来）\n・must … 〜しなければならない\n・may … 〜してもよい\n・should … 〜したほうがよい\nどれも、あとの動詞は原形という決まりは同じである。\n\n【can と be able to】can は「be able to」で言いかえられる。\n・I can swim. ＝ I am able to swim.\n\n【使い方】\n・I can play soccer.（サッカーができます）\n・Can you help me?（手伝ってくれますか）',
  },

  // ============================================================
  // 時刻の表現（time expressions） 6問 (35-40)
  // ============================================================
  {
    id: 'grade_e5_eigo_35',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '「7時」を英語で言うと？',
    answer: "seven o'clock",
    choices: ["seven o'clock", 'seven hour', 'seven time', 'seven clock'],
    hint: '「ちょうど〜時」というときに数字のあとにつける言葉。',
    explanation:
      '【答え】seven o\'clock\n\n【o\'clock とは】「ちょうど〜時」を表す言葉である。数字のあとにつける。\n\n【もとの形がおもしろい】o\'clock は「of the clock（時計の）」を短くしたものである。\n・of the clock → o\' clock → o\'clock\n・アポストロフィ（\'）は、省いた文字のしるしである\ndo not → don\'t、it is → it\'s と同じ仕組みである。\n\n【昔は時計が少なかった】町に時計が1つしかなかったころ、「時計でいうと7時」と言い分ける必要があった。そのなごりが o\'clock である。\n\n【ほかの選択肢がなぜちがうか】\n・seven hour … hour は「1時間」という長さ。時こくではない\n・seven time … time は「時間」全体を指す言葉で、時こくには使わない\n・seven clock … アポストロフィと o が抜けている\n\n【o\'clock を使わない場合】\n・ちょうどの時こくのときだけ使う\n・7時30分 … seven thirty（o\'clock はつけない）\n・7時15分 … seven fifteen ／ a quarter past seven\n「ちょうど」でなければ o\'clock は使わない。\n\n【時こくの言い方】\n・数字をそのまま並べる … five forty（5時40分）\n・past（過ぎ）／ to（前）を使う … ten past six（6時10分）、ten to six（5時50分）\n\n【at をつける】「〜時に」というときは at を使う。\n・I get up at seven o\'clock.（7時に起きます）',
  },
  {
    id: 'grade_e5_eigo_36',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question: 'What time is it? への答え方として正しい文はどれですか。（3時のとき）',
    answer: "It's three o'clock.",
    choices: [
      "It's three o'clock.",
      'It is three o\'clock is.',
      'Time is three.',
      "Three o'clock is it.",
    ],
    hint: '時刻を答えるときは It\'s で始める。',
    explanation:
      '【答え】It\'s three o\'clock.\n\n【時こくの答え方】時こくをたずねられたら、It is（It\'s）＋ 時こく の形で答える。\n・What time is it? — It\'s three o\'clock.\n\n【なぜ It を使うのか】ここがおもしろいところである。この It は「それ」という意味ではなく、時間・天気・明暗・きょりを表すときに置く主語である。言うべき主語がないときの「置きもの」の役目をしている。\n・時間 … It is three o\'clock.\n・天気 … It is sunny.（晴れです）\n・日付 … It is Monday.（月曜です）\n・明暗 … It is dark.（暗い）\n・きょり … It is 2 kilometers to the station.\n日本語に訳すときは「それ」と訳さない。\n\n【ほかの選択肢がなぜちがうか】\n・It is three o\'clock is. … is が2つある\n・Time is three. … 英語ではこの言い方をしない\n・Three o\'clock is it. … 語順が逆\n\n【短縮形】\n・It is → It\'s（アポストロフィが is の i を省いたしるし）\n・It\'s と Its を取りちがえない。Its は「それの」という意味で、アポストロフィがつかない\n\n【時こみのたずね方】\n・What time is it?（今何時ですか）\n・What time is it now?\n・Do you have the time?（時間が分かりますか。ていねいな言い方）\n\n【使い方】\n・It\'s seven thirty.（7時30分です）\n・It\'s noon.（正午です）',
  },
  {
    id: 'grade_e5_eigo_37',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '「朝」を英語で言うと？',
    answer: 'morning',
    choices: ['morning', 'afternoon', 'evening', 'night'],
    hint: '1日のいちばん最初の時間帯。',
    explanation:
      '【答え】morning\n\n【意味】morning は「朝・午前」を表す言葉である。夜明けから正午までを指す。\n\n【1日の時間帯】まとめて覚える。\n・morning … 朝・午前（夜明け〜正午）\n・noon … 正午（12時ちょうど）\n・afternoon … 午後（正午〜夕方）。after ＋ noon\n・evening … 夕方・晩（日がしずむころ〜寝るまで）\n・night … 夜\n・midnight … 真夜中（午前0時）\nnoon（正午）を真ん中にして、前が morning、後ろが afternoon と考えると並びが分かる。\n\n【あいさつ】時間帯ごとに決まった言い方がある。\n・Good morning.（おはよう）… 朝から正午まで\n・Good afternoon.（こんにちは）… 正午から夕方まで\n・Good evening.（こんばんは）… 夕方から\n・Good night.（おやすみなさい）… 別れるとき・寝る前\nGood night は「こんばんは」ではない。ここは必ず取りちがえる。夜のあいさつは Good evening である。\n\n【前置詞の使い分け】\n・in the morning（午前中に）\n・in the afternoon（午後に）\n・in the evening（夕方に）\n・at night（夜に）… night だけ at\n3つは in、night だけ at と覚える。\n\n【使い方】I get up at six in the morning.（朝6時に起きます）',
  },
  {
    id: 'grade_e5_eigo_38',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question:
      '次の文の（　）に入る言葉はどれですか。\nI get up at (　) every morning. （わたしは毎朝6時に起きます。）',
    answer: "six o'clock",
    choices: ["six o'clock", "six hour", "sixth o'clock", "six o'clocks"],
    hint: '「6時に」を表す言い方。',
    explanation:
      '【答え】six o\'clock\n\n【文のしくみ】\n・I get up at six o\'clock every morning.\n・I（わたしは）＝ 主語\n・get up（起きる）＝ 動詞のまとまり\n・at six o\'clock（6時に）＝ いつか\n・every morning（毎朝）＝ どれくらいの頻度か\n\n【ほかの選択肢がなぜちがうか】\n・six hour … hour は「1時間」という長さ。時こくには使わない\n・sixth o\'clock … sixth は「6番目の」という順番を表す語。時こくには使わない\n・six o\'clocks … o\'clock に s はつけない\n\n【at を使う理由】時を表す前置詞は、広さで決まる。\n・at … ひとつの時こく（at six o\'clock、at noon、at night）\n・on … 日付・曜日（on Monday、on May 5）\n・in … 月・季節・年・午前中（in May、in summer、in the morning）\nせまい順に at → on → in と覚える。\n\n【get up と wake up のちがい】\n・wake up … 目がさめる\n・get up … 起きあがる・ベッドから出る\n目がさめてから、起きあがるまでに時間があることもある。英語はこの2つを分けて言う。\n\n【every をつかった言い方】\n・every morning（毎朝）・every day（毎日）・every Sunday（毎週日曜）\n・every day は2語、everyday は1語で「毎日の」という形容詞。意味がちがうので書き分ける\n\n【使い方】I go to bed at nine o\'clock.（9時に寝ます）',
  },
  {
    id: 'grade_e5_eigo_39',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question: '「午後」を英語で言うと？',
    answer: 'afternoon',
    choices: ['afternoon', 'morning', 'noon', 'night'],
    hint: 'お昼（noon）のあとの時間帯。',
    explanation:
      '【答え】afternoon\n\n【言葉のつくり】afternoon は after（〜のあとに）＋ noon（正午）を合わせた言葉である。つまり「正午のあと」という意味で、そのまま「午後」を表す。\n\n【2つの語を合わせた言葉】英語にはとても多い。分けて考えると意味が分かる。\n・afternoon ＝ after ＋ noon（午後）\n・birthday ＝ birth ＋ day（誕生日）\n・classroom ＝ class ＋ room（教室）\n・rainbow ＝ rain ＋ bow（にじ）\n・notebook ＝ note ＋ book（ノート）\n・basketball ＝ basket ＋ ball\n知らない単語でも、分けてみると意味が想像できる。\n\n【noon の意味】noon は「正午・真昼」で、12時ちょうどを指す。\n・at noon（正午に）\n・midnight（真夜中）… mid（真ん中）＋ night\n\n【ほかの選択肢】\n・morning … 朝・午前\n・noon … 正午\n・night … 夜\n\n【a.m. と p.m.】\n・a.m. … 午前（ラテン語で「正午より前」）\n・p.m. … 午後（「正午より後」）\n・3 p.m. ＝ 午後3時\nmeridiem が「正午」、ante が「前」、post が「後」という意味である。\n\n【使い方】\n・Good afternoon.（こんにちは）\n・I play soccer in the afternoon.（午後にサッカーをします）\n・See you this afternoon.（今日の午後に会いましょう）',
  },
  {
    id: 'grade_e5_eigo_40',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question:
      '次の英文を読んで、質問に答えなさい。\nSchool starts at eight o\'clock.\n質問：学校は何時に始まりますか。',
    answer: '8時（eight o\'clock）',
    hint: 'at のあとの数字に注目する。',
    explanation:
      '【解説】\nat eight o\'clock は「8時に」という意味。\nSchool starts at eight o\'clock. は「学校は8時に始まります」という文。\n答え：8時（eight o\'clock）',
  },

  // ============================================================
  // What / Where / When / Who を使った疑問文 6問 (41-46)
  // ============================================================
  {
    id: 'grade_e5_eigo_41',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '「これは何ですか。」を英語にすると？',
    answer: 'What is this?',
    choices: ['What is this?', 'What this is?', 'This is what?', 'What is it this?'],
    hint: '「何」をたずねる疑問詞を文の最初に置く。',
    explanation:
      '【答え】What is this?\n\n【疑問詞の文の作り方】手順どおりにたどると、まちがえない。\n①ふつうの文 … This is a pen.\n②be動詞を主語の前に出す … Is this a pen?\n③たずねたい部分を疑問詞にかえて、文のいちばん前に置く … What is this?\n疑問詞は必ず文の先頭に来る。これが基本の形である。\n\n【ほかの選択肢がなぜちがうか】\n・What this is? … be動詞を主語の前に出していない\n・This is what? … 疑問詞が文の最後にある\n・What is it this? … it と this が重なっている\n\n【疑問詞の一覧】\n・what（何）・who（だれ）・when（いつ）・where（どこ）\n・why（なぜ）・which（どちら）・whose（だれの）・how（どのように）\n5つの W と1つの H でまとめて覚える。\n\n【答え方】疑問詞のある疑問文には、Yes / No で答えない。\n・What is this? — It is a pen.（○）\n・What is this? — Yes, it is.（×）\n聞かれていることを答える。\n\n【this・that・it の使い分け】\n・this … 近くのもの（これ）\n・that … 遠くのもの（あれ）\n・it … すでに話に出たものを指す。答えるときは it を使う\n・What is this? — It is a pen.\n\n【How を使った言い方】\n・how old（何歳）・how many（いくつ）・how much（いくら）・how long（どのくらい長い）',
  },
  {
    id: 'grade_e5_eigo_42',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: GRADE,
    question: '「あなたはどこに住んでいますか。」を英語にすると？',
    answer: 'Where do you live?',
    hint: '「どこ」をたずねる疑問詞のあとに do you を続ける。',
    explanation:
      '【解説】\n「どこに〜しますか」とたずねるときは Where のあとに do you を続けて、Where do you live? の形にする。\nlive は「住む」という意味の動詞。\n答え：Where do you live?',
  },
  {
    id: 'grade_e5_eigo_43',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '次の文の（　）に入る単語はどれですか。\n(　) is your birthday? （あなたの誕生日はいつですか。）',
    answer: 'When',
    hint: '「いつ」をたずねる疑問詞。',
    explanation:
      '【答え】When\n\n【意味】When は「いつ」と、時をたずねる疑問詞である。\n\n【文のしくみ】\n・もとの文 … Your birthday is in April.\n・be動詞を前に … Is your birthday in April?\n・時をたずねる When を先頭に … When is your birthday?\n\n【答え方】Yes / No では答えず、時を答える。\n・When is your birthday? — It is April 10. / My birthday is April 10.\n・日付まで言うときは in をつけない\n・月だけなら in をつける … It is in April.\n\n【疑問詞の使い分け】何をたずねたいかで選ぶ。\n・When … いつ（時）\n・Where … どこ（場所）\n・Who … だれ（人）\n・What … 何（もの・ことがら）\n・Why … なぜ（理由）→ 答えは Because 〜\n・How … どのように（方法・ようす）\nたずねたいものが何かを先に決めてから、疑問詞を選ぶ。\n\n【よく使うたずね方】\n・When is your birthday?（誕生日はいつですか）\n・Where do you live?（どこに住んでいますか）\n・Who is that boy?（あの男の子はだれですか）\n・Why do you like it?（なぜそれが好きなのですか）— Because it is cute.\n\n【一般動詞の文では do がいる】\n・When do you get up?（いつ起きますか）\n・be動詞の文 … When is your birthday?\n動詞が be動詞か一般動詞かで、do がいるかどうかが変わる。',
  },
  {
    id: 'grade_e5_eigo_44',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: GRADE,
    question: '「これは誰のペンですか。」を英語にすると？',
    answer: 'Whose pen is this?',
    choices: [
      'Whose pen is this?',
      'Who pen is this?',
      'Whose is this pen?',
      "Who's this pen?",
    ],
    hint: '「誰の」をたずねる疑問詞のすぐあとに名詞を続ける。',
    explanation:
      '【何を聞かれているか】\n「これは誰のペンですか。」を英語にする問題。\n\n【なぜWhoseのすぐ後に名詞を置くのか】\n「誰の〜ですか」とたずねるときは、疑問詞Whoseのすぐ後に名詞（pen）を続けるという決まりがある。\n\n【ポイント1】疑問文の基本の形を確認する\nWhose pen is this?の形にする。\n\n【ポイント2】WhoとWhoseの違いを確認する\nWho（誰が）とWhose（誰の）は意味が異なるので混同しない。\n\n【ポイント3】他の選択肢を消去する\n"Who pen is this?"（Whoseの代わりにWhoを使う誤り）、"Whose is this pen?"（語順が誤り）、"Who\'s this pen?"（Who\'sはWho isの短縮形で意味が異なる）はいずれも不適切。\n\n【答え】\nWhose pen is this?\n\n【確かめ】\nWhoseのすぐ後に名詞penが続いているか確認する。\n\n【よくあるまちがい】\nWhoとWhoseを混同してしまうミス。\n\n【ここが絶対】\nWho＝「誰が」、Whose＝「誰の」という意味の違いをしっかり区別する。',
    pitfall: 'Who は「誰が」、Whose は「誰の」という意味のちがいをしっかり区別する。',
  },
  {
    id: 'grade_e5_eigo_45',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '次の文の（　）に入る単語はどれですか。\n(　) is that girl? （あの女の子は誰ですか。）',
    answer: 'Who',
    hint: '「誰」をたずねる疑問詞。',
    explanation:
      '【答え】Who\n\n【意味】Who は「だれ」と、人をたずねる疑問詞である。\n\n【文のしくみ】\n・もとの文 … That girl is Mika.\n・be動詞を前に … Is that girl Mika?\n・人をたずねる Who を先頭に … Who is that girl?\n\n【答え方】Yes / No では答えず、人を答える。\n・Who is that girl? — She is Mika. / She is my sister.\n・答えるときは he・she に置きかえる。that girl とくり返さない\n・男の子なら He is 〜\n\n【who のなかま】人に関わる疑問詞は3つある。\n・who（だれが・だれは）… Who is that girl?\n・whose（だれの）… Whose bag is this?（これはだれのかばんですか）\n・whom（だれを）… 今はあまり使わず、who で代用することが多い\nwhose は「持ち主」をたずねるので、答えは It is Ken\'s.（ケンのです）のようになる。\n\n【who と whose の見分け】\n・Who is this?（この人はだれですか）— 人そのものをたずねる\n・Whose is this?（これはだれのものですか）— 持ち主をたずねる\n\n【まぎらわしいつづり】\n・who\'s … who is の短縮形\n・whose … だれの\n音は同じだが、意味がまったくちがう。it\'s と its の関係と同じである。\n\n【使い方】\n・Who is your teacher? — Mr. Tanaka is.\n・Who can swim? — I can.',
  },
  {
    id: 'grade_e5_eigo_46',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question:
      '次の英文を読んで、質問に答えなさい。\nWhere is my bag? It\'s on the desk.\n質問：バッグはどこにありますか。',
    answer: '机の上（on the desk）',
    hint: 'on the desk の意味を考える。',
    explanation:
      '【解説】\non the desk は「机の上に」という意味。\nIt\'s on the desk. は「それ（バッグ）は机の上にあります」という文。\n答え：机の上（on the desk）',
  },

  // ============================================================
  // 現在形の文・短い英文の読み取り 4問 (47-50)
  // ============================================================
  {
    id: 'grade_e5_eigo_47',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question: '「私は毎日学校に行きます。」を英語にすると？',
    answer: 'I go to school every day.',
    choices: [
      'I go to school every day.',
      'I goes to school every day.',
      'I going to school every day.',
      'I am go to school every day.',
    ],
    hint: '主語が I のときの go の形は変わらない。',
    explanation:
      '【解説】\n「毎日〜します」という習慣を表す文は現在形で表す。\n主語が I のときは go のまま（s はつけない）。\nevery day は「毎日」という意味。\n答え：I go to school every day.',
  },
  {
    id: 'grade_e5_eigo_48',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: GRADE,
    question: '「彼女は毎朝牛乳を飲みます。」を英語にすると？',
    answer: 'She drinks milk every morning.',
    choices: [
      'She drinks milk every morning.',
      'She drink milk every morning.',
      'She drinking milk every morning.',
      'She is drink milk every morning.',
    ],
    hint: '主語が she（3人称単数）のときは動詞に s をつける。',
    explanation:
      '【何を聞かれているか】\n「彼女は毎朝牛乳を飲みます。」を英語にする問題。\n\n【なぜdrinkにsをつけるのか】\n主語がhe・she・it（3人称単数）のときは、現在形の動詞の最後にsをつけるという決まりがある。\n\n【ポイント1】3単現のsの決まりを確認する\n主語がhe・she・it（3人称単数）のときは、動詞にsをつける。\n\n【ポイント2】drinkの変化を確認する\ndrink→drinksとなる。\n\n【ポイント3】完成した文を確認する\n"She drinks milk every morning."＝「彼女は毎朝牛乳を飲みます」。\n\n【答え】\nShe drinks milk every morning.\n\n【確かめ】\ndrinkにsがついてdrinksになっているか確認する。\n\n【よくあるまちがい】\n主語がsheなのにsをつけ忘れ、drinkのままにしてしまうミス。\n\n【ここが絶対】\n主語がIやyouのときはsをつけないが、he・she・itのときだけsをつけると覚える。',
    pitfall: '主語が I や you のときは s をつけないが、he・she・it のときだけ s をつけることに注意。',
  },
  {
    id: 'grade_e5_eigo_49',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question:
      '次の英文を読んで、質問に答えなさい。\nMy name is Ken. I am ten years old. I live in Tokyo.\n質問：Kenは何歳ですか。',
    answer: '10歳（ten years old）',
    hint: 'I am 〜 years old. の部分に注目する。',
    explanation:
      '【何を聞かれているか】\n"My name is Ken. I am ten years old. I live in Tokyo."という英文を読み、Kenの年齢を答える問題。\n\n【なぜbe動詞を使って年齢を表すのか】\n英語では年齢を表すとき、日本語の「10歳です」に対応する形として、be動詞（am/is/are）を使ってI am ten years old.のように表すという決まりがある。\n\n【ポイント1】該当の文を確認する\n本文の2つ目の文"I am ten years old."（わたしは10歳です）に年齢が書かれている。\n\n【ポイント2】years oldの意味を確認する\nten＝10、years old＝歳、という組み合わせで年齢を表す。\n\n【ポイント3】3つの文それぞれの情報を確認する\n"My name is Ken."（名前）、"I am ten years old."（年れい）、"I live in Tokyo."（住んでいる所）と、1文ずつ別の情報が書かれている。\n\n【答え】\n10歳（ten years old）\n\n【確かめ】\n答えが年齢を問う質問に対応する2つ目の文の内容になっているか確認する。\n\n【よくあるまちがい】\n1つ目の文（名前）や3つ目の文（住んでいる場所）の情報と混同してしまうミス。\n\n【ここが絶対】\n自己紹介の英文は、My name is〜（名前）・I am〜years old（年れい）・I live in〜（住んでいる所）と、1文ずつ何の情報かを確かめながら読む。',
  },
  {
    id: 'grade_e5_eigo_50',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question:
      '次の英文を読んで、質問に答えなさい。\nThis is my dog. Its name is Pochi. Pochi is very cute.\n質問：犬の名前は何ですか。',
    answer: 'Pochi',
    hint: 'Its name is 〜. の部分に注目する。',
    explanation:
      '【答え】Pochi\n\n【どこから分かるか】本文の2つ目の文に書かれている。\n・Its name is Pochi.（その名前はポチです）\n\n【Its の意味】Its は「それの」という意味で、ここでは犬（it）を指している。\n・This is my dog.（これはわたしの犬です）\n・Its name is Pochi.（その犬の名前はポチです）\n\n【Its と It\'s のちがい】ここが最もまちがえやすい。\n・Its … 「それの」。アポストロフィがつかない\n・It\'s … it is の短縮形。アポストロフィがつく\nアポストロフィがあれば it is の短縮と覚える。\n・Its name is Pochi.（その名前はポチです）\n・It\'s a dog.（それは犬です）\n\n【「〜の」を表す言葉】人称代名詞の所有格である。\n・I → my（わたしの）\n・you → your（あなたの）\n・he → his（彼の）\n・she → her（彼女の）\n・it → its（それの）\n・we → our（わたしたちの）\n・they → their（彼らの）\nhis だけは「彼の」と「彼のもの」の両方に使う。\n\n【動物を it で受ける】英語では、名前や性別が分からない動物は it で受けるのがふつうである。かわいがっている自分のペットは he や she で受けることもある。\n\n【この英文の読み取り】\n・This is my dog.（何かをしょうかいする）\n・Its name is Pochi.（名前）\n・Pochi is very cute.（ようす）\nしょうかい → 名前 → ようす、という順で書かれている。',
  },
];
