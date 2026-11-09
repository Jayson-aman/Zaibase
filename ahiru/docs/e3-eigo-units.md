# 小3・英語（外国語活動）単元一覧（120単元）

ID は `u120_e3_eigo_001`〜`120`（セル名 `e3-eigo`）。`examType: 'chugaku'`・`studyPeriod: '小3'`・教科 `eigo`・order は `160001`〜`160120`。1単元に1つのこと（1〜4個のことば、または1つの言い方）だけを教える。
漢字は小1〜小3の配当（440字）に収め、小3の漢字には初めて出るところで（読み）を添える。英語（日本語の中に出る英単語・例文）は、小学校の外国語活動の基本の表現だけ。**文法の用語は使わない**（名詞・動詞・複数形・疑問文・主語・過去形など）。
各単元に：導入・動く図解（7枚以上）・例題（なぜそうなるか・たしかめ）・「自分の言葉で言ってみよう」・ひっかけ。「聞く・言う」が中心。ことばの音のカタカナ表記は「およその目安」と断る。
範囲は学校の小3（中学受験の土台）。小4以降の内容（Can you ~?・What time is it?・月の名前・職業・道あんない・あしたの予定・文を書く練習・4本線の書き方・He/She の文・過去の話など）は入れない。

## 既存の英語単元との関係（重ならない工夫）
- 既存の小4の英語（`new20_e4_eigo_01〜20` の「数字①：1〜20の数え方」「色の名前と言い方」「あいさつの表現」「自己紹介の言い方」「好きなものを伝える」ほか、`eigo_s001〜` のアルファベット・be動詞・一般動詞ほか）とは、題が一つも同じではない（全タイトルを機械で照合済み）。
- 話題（数・色・あいさつ・天気など）は小4の単元と重なるが、この小3の単元は「ことばを1〜4個ずつ、聞いて・まねして・言う」に絞り、文の仕組みの説明（be動詞・語順・短縮形の決まり）はしない。小4の単元は文の形を整理する段階。
- 小3の単元は、小3用の一覧（教科書タブの「🌱 小3の 英語」）に出す。ふつうの単元の一覧には混ざらない。

## この単元づくりで先に決めておくこと
- **英語の題**：題に英語を使うときは、英語どうしの空白はそのまま、日本語との間に空白を入れない（例：「HelloとHi」「How are you?」「数1〜5」）。題の小3の漢字はひらがな（例：「たべもの」「かぞく」「どうぶつ」「ばしょ」「じこしょうかい」）。
- **「英」の字は小4の配当**なので「えい語」と書く。「表現」の現は小5、「質問」の質は小5、「季節」の季・節は小4、「果物」の果は小4、「野菜」の菜は小4、「紹介」は小5・6、「挨拶」は中学以上 → すべてひらがな。
- 単語は小学校の外国語活動の基本のことばだけ（`e3eigolib.py` の `VOCAB`）。足したいときは `VOCAB` に足して報告に書く。
- a / an は説明を最小限にする（「a は『ひとつの』の目じるし。あいうえおの音で始まることばの前では an」を一言。くわしい決まりは小4以降）。
- 事実は確実なものだけ：動物の鳴き声・あいさつの習慣・国の名前・曜日・季節は教科書で標準のものだけを書く。fall と autumn はどちらも秋、アメリカでは fall がよく使われる、という程度にとどめる。

## 1. えい語の とびら（1〜7）
1. えい語ってどんなことば？ … 日本語とえい語のちがい。えい語は世界のたくさんの国で使われている。まずは「聞く・言う」から。
2. まわりにあるえい語さがし … 町や家の中で見かけるえい語（看板・ロゴ・ふくろの文字）。カタカナのことばとえい語の音は少しちがう。
3. えい語の音を聞きとろう … 一つずつのことばをよく聞く。同じ音・ちがう音を聞きわける。
4. まねして声に出そう … 口の形・息・はっきり言う。先生や音声のまねをして言う。
5. リズムにのって言おう … 手をたたきながらことばをリズムで言う（チャンツの基本）。
6. ジェスチャーでつたえよう … 身ぶりと顔つきで気持ちを伝える。ことばがわからなくても伝わる工夫。
7. えい語のじゅぎょうの楽しみ方 … まちがえてもよい・友だちと言い合う・相手の目を見て話す・「もう一回」とたのむ。

## 2. あいさつ（8〜17）
8. HelloとHi … 会ったときのあいさつ。Hello.はだれにでも、Hi.は友だちに気軽に。
9. Good morning. … 朝のあいさつ。朝に会ったらGood morning.。
10. Good afternoon. … 昼すぎのあいさつ。
11. Good evening. … 夕方から夜のはじめのあいさつ。
12. Good night. … ねる前や夜わかれるときのあいさつ。「こんばんは」のGood evening.とのちがい。
13. Goodbye.とSee you. … わかれのあいさつ。Bye.も出てくる。
14. Thank you.とYou're welcome. … ありがとうと、その返事。
15. Sorry.とExcuse me. … ごめんなさいと、よびかけ・とおるときのすみません。
16. Nice to meet you. … はじめて会った人へのあいさつ。
17. あいさつをつなげよう … これまでのあいさつをつないで2人で会話をする。

## 3. 名前・自己しょうかい・気持ち（18〜31）
18. I'm ~. … 名前を言う。I'm Ken.のように。
19. My name is ~. … 名前のもう一つの言い方。
20. What's your name? … 名前をたずねる・答える。
21. YesとNoでこたえよう … 返事のYes. / No.。うなずき・首をふるジェスチャーも合わせる。
22. Are you ~?でたしかめよう … 「あなたは~ですか」とたしかめる。Yes, I am. / No, I'm not.。
23. How old are you? … 年れいをたずねる・答える。I'm eight.など。
24. This is my friend. … 友だちをしょうかいする。
25. じこしょうかいをしよう … 名前・年れい・あいさつをつないでみじかいじこしょうかいをつくる。
26. How are you? … 元気かどうかをたずねるあいさつ。
27. I'm fine.とI'm great. … 元気なときの答え。
28. I'm happy.とI'm sad. … うれしい・かなしいを言う。
29. I'm hungry.・I'm sleepy.・I'm tired. … おなかがすいた・ねむい・つかれた。
30. I'm hot.とI'm cold. … あつい・さむい。
31. And you?できき返そう … 答えたあと「あなたは？」と聞きかえす。気持ちの会話。

## 4. 数（32〜41）
32. 数1〜5 … one〜fiveの言い方と聞きとり。ゆびで数える。
33. 数6〜10 … six〜ten。
34. 数11〜15 … eleven〜fifteen。
35. 数16〜20 … sixteen〜twenty。
36. zeroと0の言い方 … zero（0）の言い方。日本語の「ゼロ」と少し音がちがうことに気づく。
37. 10ずつ数えよう … ten・twenty・thirty…hundred（100）まで。
38. 数を聞きとろう … 聞こえた数をえらぶ・書く。
39. How many? … 数をたずねる。
40. ものの数を言おう … Three apples.のように、ものと数を言う。
41. 数であそぼう … ビンゴやたし算（Two plus three is five.）。

## 5. アルファベット（42〜58）
42. アルファベットってなに？ … 26文字・大文字と小文字・文字の名前（音ではなく名前）。
43. 大文字A〜E … A B C D Eの名前と、はじまることば（appleなど）。
44. 大文字F〜J … F G H I J。
45. 大文字K〜O … K L M N O。
46. 大文字P〜T … P Q R S T。
47. 大文字U〜Z … U V W X Y Z。
48. ABCのうたでじゅんばんに言おう … 26文字を順に言う。うたとリズム。
49. にている大文字 … EとF、MとN、OとQ、PとRのちがい。
50. 町の大文字さがし … 町の大文字（TV・JR・ABCなど、見かけるもの）をさがして読む。
51. 小文字ってなに？ … 小文字のはたらき。大文字とのちがい。
52. 小文字a〜e … a b c d e。
53. 小文字f〜j … f g h i j。
54. 小文字k〜o … k l m n o。
55. 小文字p〜t … p q r s t。
56. 小文字u〜z … u v w x y z。
57. 大文字と小文字をペアにしよう … Aとaのように、同じ文字のペアを見つける。
58. にている小文字 … bとd、pとqのちがい。

## 6. 色と 形（59〜68）
59. red・blue・yellow … 色の名前①。
60. green・orange・pink … 色の名前②。
61. purple・black・white … 色の名前③。
62. brown・gray … 色の名前④。
63. What color? … 色をたずねる・答える（It's red.）。
64. I like blue. … 好きな色を言う。
65. circle・triangle・square … 形の名前①。
66. rectangle・star・heart … 形の名前②。
67. 形をさがそう … 身のまわりのものの形をえい語で言う。
68. 色と形を合わせよう … a red circleのように、色と形をつなげる。

## 7. 学校の もの・教室の ことば（69〜82）
69. pencil・eraser・ruler … 文ぼうぐ①。
70. notebook・book・bag … 文ぼうぐ②。
71. scissors・glue・pencil case … 文ぼうぐ③。
72. desk・chair・blackboard … 教室のもの①。
73. clock・door・window … 教室のもの②。
74. What's this? … ものをたずねる・It's a pen.と答える。
75. ヒントクイズ … ヒントを聞いて何かを当てる。
76. Is this a ~? … 「これは~ですか」。Yes, it is. / No, it isn't.。
77. 学校のばしょ … classroom・library・gym・playground・music room。
78. 教科の名前 … Japanese・math・science・music・P.E.・art・English。
79. Stand up.とSit down. … 先生の指示①。体を動かして聞く。
80. Look.・Listen.・Repeat. … 先生の指示②。
81. Open your book.とClose your book. … 先生の指示③。
82. Please.とPardon? … おねがいする・聞きかえす。

## 8. 体と かぞく（83〜90）
83. head・shoulders・knees・toes … 体のぶぶん①。
84. eyes・ears・nose・mouth … 体のぶぶん②（顔）。
85. hand・arm・leg・foot … 体のぶぶん③。
86. Touch your nose. … 体を使った指示。
87. Simon saysゲーム … 指示を聞いて動くゲーム。
88. かぞくの言い方① … mother・father・brother・sister。
89. かぞくの言い方② … grandmother・grandfather・baby。
90. かぞくのしゃしんをしょうかいしよう … This is my mother.など。

## 9. たべものと のみもの（91〜100）
91. くだもの① … apple・banana・orange。
92. くだもの② … grapes・peach・melon・lemon。
93. やさい① … carrot・tomato・onion・potato。
94. やさい② … cucumber・pumpkin・green pepper・corn。
95. たべもの① … rice・bread・egg・pizza。
96. たべもの② … hamburger・sandwich・spaghetti・ice cream・cake。
97. のみもの … water・tea・juice・milk。
98. I like apples. … 好きなものを言う。
99. Do you like ~? … 好きかをたずねる。Yes, I do. / No, I don't.。
100. I want ~. … ほしいものを言う。おみせやさんごっこ（Here you are. / Thank you.）。

## 10. どうぶつ（101〜108）
101. ペット① … dog・cat・bird・fish。
102. ペット② … rabbit・mouse・hamster・turtle。
103. どうぶつえん① … lion・elephant・giraffe・monkey。
104. どうぶつえん② … tiger・bear・zebra・panda。
105. のうじょうのどうぶつ … cow・pig・horse・sheep・chicken。
106. どうぶつのなき声 … えい語と日本語で鳴き声の聞こえ方がちがう。
107. どうぶつヒントクイズ … big・small・longなどのヒントで当てる。
108. I like dogs.とDo you like cats? … 動物の好き・たずねる。

## 11. 天気・きせつ・曜日（109〜115）
109. It's sunny.とIt's rainy. … 天気①。
110. It's cloudy.・It's snowy.・It's windy. … 天気②。
111. How's the weather? … 天気をたずねる・答える。
112. きせつ … spring・summer・fall・winter。
113. I like summer. … 好きなきせつを言う。
114. 曜日 … Monday〜Sunday。聞きとり。
115. What day is it? … 今日は何曜日かをたずねる・答える。

## 12. スポーツ・世界と日本・まとめ（116〜120）
116. スポーツの名前 … soccer・baseball・tennis・basketball・swimming。
117. What sport do you like? … 好きなスポーツをたずねる・答える。
118. 世界のあいさつと国の名前 … Japan・America・China・Korea・Australia・Brazilなど。
119. 日本のものをえい語で … sushi・tempura・karate・judo・origami。
120. えい語でミニ発表 … あいさつ・名前・好きなものをつなげた自己しょうかい（まとめ）。
