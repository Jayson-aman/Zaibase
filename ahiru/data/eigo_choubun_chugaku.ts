import type { Question } from './questions-meta';

// ============================================================
// 中学受験レベル 英語 長文読解問題（オリジナル本文）
// 小学生〜中学受験英語レベルの平易な語彙・文法
// 選択式(4択)中心＋一部記述 全15問
// ============================================================

export const eigoChoubunChugaku: Question[] = [
  // ------------------------------------------------------------
  // 1 内容一致（人物紹介）
  // ------------------------------------------------------------
  {
    id: 'eigo_cb_ch_01',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    passage: `My name is Kenta. I am eleven years old. I live in Osaka with my mother, my father, and my little sister, Yuki. Yuki is seven years old. She is in the first grade.

Every morning, I get up at six thirty. I eat breakfast with my family. I usually eat rice, fish, and miso soup. My sister likes bread better, so she eats toast.

I go to school by bike. My school is near the river. I like science the best because our teacher shows us many fun experiments. After school, I play soccer with my friends in the park.`,
    question: 'What does Kenta usually eat for breakfast?',
    choices: [
      'Bread and eggs.',
      'Rice, fish, and miso soup.',
      'Toast and milk.',
      'Only miso soup.',
    ],
    answer: 'Rice, fish, and miso soup.',
    hint: '本文の "I usually eat ..." の文を探しましょう。トーストを食べるのは妹のユキです。',
    explanation: `【出題意図】
本文から人物についての具体的な情報（詳細）を正しく読み取れるかを問う問題。

【解説】
本文に "I usually eat rice, fish, and miso soup." とあります。これはケンタ自身の朝食です。したがって正解は "Rice, fish, and miso soup." です。

【注意点】
"My sister likes bread better, so she eats toast."（妹はパンのほうが好きなのでトーストを食べる）とあり、トーストを食べるのはケンタではなく妹のユキです。主語をしっかり確認しましょう。`,
    pitfall: '妹の食べ物とケンタの食べ物を混同しやすい。"I" と "she" の主語の違いに注意する。',
    memoryTip: '英文読解では「だれが」「何を」するのかを主語ごとに整理すると混乱しない。',
  },

  // ------------------------------------------------------------
  // 2 内容一致（趣味）
  // ------------------------------------------------------------
  {
    id: 'eigo_cb_ch_02',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    passage: `Emma is a girl from Australia. She came to Japan last year. Now she studies Japanese at a junior high school in Tokyo.

Emma has many hobbies. She likes reading books about animals. She also likes taking pictures of flowers with her camera. On weekends, she often visits parks and temples to take beautiful photos.

Emma says, "Japan has four seasons, and each season is very different. In spring, I take pictures of cherry blossoms. In autumn, I take pictures of red and yellow leaves. I want to make a photo book about Japan someday."`,
    question: '本文の内容に合うものを選びなさい。',
    choices: [
      'Emma was born in Japan.',
      'Emma likes taking pictures of flowers and leaves.',
      'Emma does not like reading books.',
      'Emma wants to become a Japanese teacher.',
    ],
    answer: 'Emma likes taking pictures of flowers and leaves.',
    hint: 'エマの好きなことが書かれている部分を探しましょう。写真をとるのが好きだと何度も出てきます。',
    explanation: `【出題意図】
本文全体から人物の好きなこと・したいことを正しく読み取り、選択肢と照合できるかを問う問題。

【解説】
本文に "She also likes taking pictures of flowers" や "In autumn, I take pictures of red and yellow leaves." とあり、エマは花や葉の写真をとるのが好きだとわかります。正解は "Emma likes taking pictures of flowers and leaves." です。

【注意点】
エマはオーストラリア出身（"a girl from Australia"）なので「日本生まれ」は誤り。"She likes reading books about animals." とあるので「読書が好きではない」も誤り。将来は「写真集（photo book）を作りたい」であり「日本語の先生になりたい」とは書かれていません。`,
    pitfall: '書かれていないこと（先生になりたい等）を「もっともらしいから」と選ばないこと。本文に根拠があるものだけを選ぶ。',
    memoryTip: '内容一致問題は、選択肢一つ一つに対して本文のどの文が根拠になるかを確かめる習慣をつける。',
  },

  // ------------------------------------------------------------
  // 3 指示語（代名詞itの内容）
  // ------------------------------------------------------------
  {
    id: 'eigo_cb_ch_03',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    passage: `Tom got a new dog on his birthday. The dog was small and brown. Tom named it Coco.

At first, Coco was very shy. It hid under the table and did not eat any food. Tom was worried. He sat next to the table and talked to Coco in a soft voice every day.

After one week, Coco started to eat. After two weeks, it began to play with Tom. Now Coco runs to the door every day when Tom comes home from school. Tom loves it very much, and it loves Tom, too.`,
    question: '本文中の下線部 it（Now Coco runs to the door every day when Tom comes home）は何を指していますか。最も適切なものを選びなさい。',
    choices: [
      'the door',
      'the table',
      'Coco (the dog)',
      'Tom',
    ],
    answer: 'Coco (the dog)',
    hint: '"it" は「もの」や「動物」を指します。この文で「ドアに走っていく」のはだれでしょう。',
    explanation: `【出題意図】
指示語（代名詞 it）が本文中の何を指しているかを、文脈から正しくとらえられるかを問う問題。

【解説】
下線部をふくむ文は "Now Coco runs to the door every day when Tom comes home from school." です。走っていく主語は Coco なので、この段落全体で "it" は一貫して犬の Coco を指しています。正解は "Coco (the dog)" です。

【注意点】
"the door"（ドア）は Coco が走っていく先であり、走る主体ではありません。人物である Tom は "it" では受けません（人は he/she で受けます）。`,
    pitfall: '"it" の直前の名詞（door）を機械的に選ばないこと。だれ（何）が動作をしているかで判断する。',
    memoryTip: '代名詞は「人＝he/she」「もの・動物＝it」。it が出たら直前の「もの・動物」の名詞を候補にする。',
  },

  // ------------------------------------------------------------
  // 4 詳細読み取り（数）
  // ------------------------------------------------------------
  {
    id: 'eigo_cb_ch_04',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    passage: `Our class went to the zoo last Friday. There are thirty students in my class. We left school at nine in the morning and came back at three in the afternoon.

At the zoo, we saw many animals. My favorite animal was the elephant. It was very big and had a long nose. We also saw two lions, three tigers, and many monkeys.

We ate lunch under a big tree near the panda house. After lunch, we watched the panda eat bamboo. It was a wonderful day.`,
    question: 'How many tigers did the students see at the zoo?',
    choices: [
      'One tiger.',
      'Two tigers.',
      'Three tigers.',
      'Thirty tigers.',
    ],
    answer: 'Three tigers.',
    hint: '動物の数が書かれている文を探しましょう。ライオンは2頭、トラは何頭でしたか。',
    explanation: `【出題意図】
本文中の数字などの具体的な情報を正確に読み取れるかを問う問題。

【解説】
本文に "We also saw two lions, three tigers, and many monkeys." とあります。トラ（tigers）は "three"（3頭）なので、正解は "Three tigers." です。

【注意点】
"two lions"（ライオン2頭）や、クラスの生徒数 "thirty students"（30人）と数字が複数出てくるので、どの数字が何を指すかを取りちがえないようにしましょう。`,
    pitfall: '文中の複数の数字（30人、2頭のライオン、3頭のトラ）を混同しやすい。何の数かを必ず確かめる。',
    memoryTip: '数字を問う問題では、本文の数字に線を引き、それぞれ何の数かをメモすると間違えにくい。',
  },

  // ------------------------------------------------------------
  // 5 内容一致（否定の読み取り）
  // ------------------------------------------------------------
  {
    id: 'eigo_cb_ch_05',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    passage: `Mika wanted to make a cake for her mother's birthday. She had never made a cake before, so she was a little nervous.

She looked at a recipe book. She needed eggs, flour, sugar, and butter. She had eggs and flour at home, but she did not have any sugar or butter. So she went to the store and bought them.

Making the cake was not easy. The first cake was too hard. The second cake was too sweet. But the third cake was just right. When her mother ate it, she smiled and said, "This is the best cake in the world." Mika was very happy.`,
    question: 'What did Mika NOT have at home?',
    choices: [
      'Eggs and flour.',
      'Sugar and butter.',
      'A recipe book.',
      'A birthday cake.',
    ],
    answer: 'Sugar and butter.',
    hint: '"she did not have any ..." の文を探しましょう。家になくて買いに行ったものは何ですか。',
    explanation: `【出題意図】
否定文（did not have）を正確に読み取り、家にあったもの・なかったものを区別できるかを問う問題。

【解説】
本文に "She had eggs and flour at home, but she did not have any sugar or butter." とあります。ミカが家に持っていなかったのは砂糖（sugar）とバター（butter）です。だからお店に買いに行きました。正解は "Sugar and butter." です。

【注意点】
"She had eggs and flour at home"（卵と小麦粉は家にあった）と混同しないこと。設問は「なかったもの（NOT have）」を聞いています。`,
    pitfall: '設問の NOT を見落とすと、家にあったもの（卵・小麦粉）を選んでしまう。設問文の否定に注意。',
    memoryTip: '"but" の後には前と反対の内容がくることが多い。"had ... but did not have ..." の対比に注目する。',
  },

  // ------------------------------------------------------------
  // 6 主旨（教訓）
  // ------------------------------------------------------------
  {
    id: 'eigo_cb_ch_06',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    passage: `A long time ago, a slow turtle and a fast rabbit had a race. Everyone thought the rabbit would win because it could run very fast.

When the race began, the rabbit ran far ahead. Soon it could not see the turtle behind it. "The turtle is so slow," said the rabbit. "I have a lot of time. I will take a short rest." The rabbit lay down under a tree and fell asleep.

The turtle did not stop. It walked slowly, step by step, and finally passed the sleeping rabbit. When the rabbit woke up, the turtle was already at the goal. The slow turtle won the race.`,
    question: 'この物語が伝えようとしていること（教訓）として最も適切なものを選びなさい。',
    choices: [
      '足の速い者はいつも勝つ。',
      'あきらめずにこつこつ続けることが大切だ。',
      '早くゴールした者だけがえらい。',
      '休むことがいちばん大切だ。',
    ],
    answer: 'あきらめずにこつこつ続けることが大切だ。',
    hint: 'なぜ足のおそいカメが勝ったのかを考えましょう。カメは途中で何をしませんでしたか。',
    explanation: `【出題意図】
物語全体から主旨（作者が伝えたい教訓）を読み取れるかを問う問題。

【解説】
足の速いウサギは油断して昼寝をしてしまい、足のおそいカメは "did not stop"（止まらず）"step by step"（一歩一歩）進み続けて勝ちました。ここから「あきらめずにこつこつ続けることが大切だ」という教訓が読み取れます。正解は2です。

【注意点】
1は本文の結果（速いウサギが負けた）と反対です。3・4は物語の一部の場面にふれているだけで、全体の教訓ではありません。とくに4はウサギが負けた原因（休みすぎ）であり、伝えたいことと逆です。`,
    pitfall: '物語の一場面だけを見て教訓を選ばないこと。「なぜその結末になったのか」から全体の主旨を考える。',
    memoryTip: '教訓を問う物語は「勝った（成功した）側の行動」と「負けた側の失敗」を対比すると主旨が見えてくる。',
  },

  // ------------------------------------------------------------
  // 7 内容一致（曜日・予定）
  // ------------------------------------------------------------
  {
    id: 'eigo_cb_ch_07',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    passage: `Hi, I'm Sophie. Let me tell you about my week. I am very busy after school.

On Monday and Wednesday, I go to a piano lesson. I have played the piano for five years. On Tuesday, I practice swimming at the sports center. On Thursday, I study English with a teacher from Canada.

Friday is my favorite day. I don't have any lessons, so I watch movies at home with my family. On weekends, I often go shopping with my mother or play tennis with my father.`,
    question: 'On which day does Sophie study English?',
    choices: [
      'On Monday.',
      'On Tuesday.',
      'On Thursday.',
      'On Friday.',
    ],
    answer: 'On Thursday.',
    hint: '"On Thursday, I ..." の文を探しましょう。英語を勉強するのは何曜日ですか。',
    explanation: `【出題意図】
曜日ごとの予定という複数の情報の中から、必要な情報を正しく探し出せるかを問う問題。

【解説】
本文に "On Thursday, I study English with a teacher from Canada." とあります。ソフィーが英語を勉強するのは木曜日です。正解は "On Thursday." です。

【注意点】
月・水はピアノ、火曜は水泳、金曜は映画と、曜日ごとに予定がちがいます。曜日と活動の組み合わせを取りちがえないようにしましょう。`,
    pitfall: '曜日と活動の対応を混同しやすい。曜日ごとに「何をするか」を線でつないで整理するとよい。',
    memoryTip: '複数の予定が並ぶ英文は、曜日→活動の表を頭の中で作りながら読むと探しやすい。',
  },

  // ------------------------------------------------------------
  // 8 記述（英語で数を答える）
  // ------------------------------------------------------------
  {
    id: 'eigo_cb_ch_08',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    passage: `Daichi has a small garden behind his house. He grows vegetables there. This year, he is growing tomatoes, cucumbers, and carrots.

Every morning before school, Daichi gives water to his vegetables. He also pulls out the weeds. His grandfather taught him how to take care of a garden.

Last week, Daichi picked ten red tomatoes. He gave four tomatoes to his neighbor and kept the rest for his family. His mother made a fresh salad with them. "Homegrown vegetables taste the best," Daichi said with a big smile.`,
    question: '大地が近所の人にあげたトマトの数を、本文にもとづいて英語（数字ではなく英単語）で答えなさい。',
    answer: 'four',
    hint: '"He gave ... tomatoes to his neighbor" の文を探しましょう。数を英単語で書きます。',
    explanation: `【出題意図】
本文から必要な数の情報を読み取り、英語で正しく答えられるか（記述）を問う問題。

【解説】
本文に "He gave four tomatoes to his neighbor and kept the rest for his family." とあります。大地が近所の人にあげたトマトは4個なので、答えは英単語で "four" です。

【注意点】
"picked ten red tomatoes"（10個とった）の "ten" と混同しないこと。設問は「近所の人にあげた数」を聞いています。全体の数（ten）ではなく、あげた数（four）が答えです。`,
    pitfall: '「とった数（ten）」と「あげた数（four）」を混同しやすい。設問が聞いている行為（gave＝あげた）に対応する数を選ぶ。',
    memoryTip: '数を英語で書く問題では、one, two, three, four... のつづりを正しく書けるようにしておく。',
  },

  // ------------------------------------------------------------
  // 9 内容一致（理由）
  // ------------------------------------------------------------
  {
    id: 'eigo_cb_ch_09',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    passage: `Bees are small, but they are very important animals. They fly from flower to flower to get food. This food is called nectar, and bees make honey from it.

When a bee visits a flower, a yellow powder called pollen sticks to its body. When the bee flies to the next flower, some of this pollen falls onto that flower. This helps flowers make seeds and fruit. Without bees, many plants could not make fruit.

So the next time you eat an apple or a strawberry, remember the little bees. They work hard to help us, even though they are very small.`,
    question: 'Why are bees important for plants?',
    choices: [
      'Because they eat harmful insects on the flowers.',
      'Because they carry pollen from flower to flower, and this helps flowers make seeds and fruit.',
      'Because they give water to the flowers every day.',
      'Because they make the flowers a beautiful yellow color.',
    ],
    answer: 'Because they carry pollen from flower to flower, and this helps flowers make seeds and fruit.',
    hint: 'ミツバチが花から花へ運ぶ「黄色い粉」は何で、それが植物にどう役立つかを本文から探しましょう。',
    explanation: `【出題意図】
説明文から因果関係（なぜそう言えるのか、その理由）を正しく読み取れるかを問う問題。

【解説】
本文に、ミツバチの体に花粉（pollen）がつき、次の花に落ちることで "This helps flowers make seeds and fruit."（花が種や実を作るのを助ける）とあります。だから "Without bees, many plants could not make fruit." とも述べられています。したがって正解は、花粉を花から花へ運び、種や実を作る手助けをするからと説明した2です。

【注意点】
1（害虫を食べる）、3（水をやる）、4（花を黄色くする）はいずれも本文に書かれていません。「黄色い粉（pollen）」は出てきますが、花を黄色に「色づける」とは述べられていません。`,
    pitfall: '本文に出てくる語（yellow, pollen）を使った、もっともらしいだけの選択肢にだまされないこと。因果関係を本文で確認する。',
    memoryTip: '理由を問う問題は、本文の "This helps ..." や "so ..." など、原因と結果をつなぐ表現に注目する。',
  },

  // ------------------------------------------------------------
  // 10 内容一致（対話文）
  // ------------------------------------------------------------
  {
    id: 'eigo_cb_ch_10',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    passage: `Ken: Hi, Lisa. What are you going to do this weekend?
Lisa: Hi, Ken. I'm going to visit my grandmother in Kyoto. How about you?
Ken: I'm going to play baseball on Saturday. On Sunday, I want to read a new book.
Lisa: That sounds nice. Is the book interesting?
Ken: Yes, it's a story about a boy who travels around the world. I really like it.
Lisa: Maybe I can read it after you. Can you lend it to me next week?
Ken: Sure! I'll bring it to school on Monday.`,
    question: '対話の内容に合うものを選びなさい。',
    choices: [
      'Lisa is going to play baseball this weekend.',
      'Ken will lend his book to Lisa.',
      'Lisa will visit her grandmother in Osaka.',
      'Ken is going to read a book on Saturday.',
    ],
    answer: 'Ken will lend his book to Lisa.',
    hint: '最後のケンの発言 "Sure! I\'ll bring it ..." に注目しましょう。リサの「貸してくれる？」への返事です。',
    explanation: `【出題意図】
対話文の流れを追い、だれが何をするのかを正しく理解できるかを問う問題。

【解説】
リサが "Can you lend it to me next week?"（来週貸してくれる？）と頼み、ケンが "Sure! I'll bring it to school on Monday."（いいよ、月曜に持ってくる）と答えています。よってケンは本をリサに貸すとわかります。正解は "Ken will lend his book to Lisa." です。

【注意点】
野球をするのはケン（リサではない）。リサが訪ねる祖母は「京都（Kyoto）」で「大阪」ではありません。ケンが本を読むのは日曜（Sunday）で土曜（Saturday）ではありません。`,
    pitfall: '対話文では発言者を取りちがえやすい。「だれの発言か」を必ず確認する。',
    memoryTip: '対話文は、話し手ごとに「する予定のこと」を整理しながら読むと内容一致問題に強くなる。',
  },

  // ------------------------------------------------------------
  // 11 指示語（they の内容）
  // ------------------------------------------------------------
  {
    id: 'eigo_cb_ch_11',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    passage: `Penguins are birds, but they cannot fly. Instead, they are very good at swimming. They use their wings like paddles to move through the water fast.

Most penguins live in cold places far in the south. They have thick feathers and a layer of fat under their skin. These keep them warm even in icy water.

Penguins live together in large groups. When the weather is very cold, they stand close to each other to share warmth. In this way, they help one another survive the freezing winter.`,
    question: '下線部 These（These keep them warm even in icy water.）が指すものとして最も適切なものを選びなさい。',
    choices: [
      'thick feathers and a layer of fat',
      'cold places in the south',
      'their wings',
      'large groups',
    ],
    answer: 'thick feathers and a layer of fat',
    hint: '"These"（これら）は直前の文に出てくる複数のものを指します。何がペンギンをあたたかく保つのでしょう。',
    explanation: `【出題意図】
指示語（These）が指す内容を、直前の文脈から正しくとらえられるかを問う問題。

【解説】
下線部の直前に "They have thick feathers and a layer of fat under their skin." とあり、次の文で "These keep them warm even in icy water."（これらが冷たい水の中でも体をあたたかく保つ）と続きます。よって "These" は「厚い羽毛と皮下の脂肪の層」を指します。正解は "thick feathers and a layer of fat" です。

【注意点】
"These" は複数のものを指す語です。直前に出てくる「羽毛」と「脂肪の層」という二つのものがまとめて指されています。翼（wings）や大きな群れ（large groups）は、あたたかさを保つ理由としては本文で述べられていません。`,
    pitfall: 'These は複数を指す。単数の名詞（their wings など）ではなく、直前に並んだ複数のものを候補にする。',
    memoryTip: 'this/these は直前の文の内容を受けることが多い。「これらは何をあたたかく保つのか」を本文で確かめると特定しやすい。',
  },

  // ------------------------------------------------------------
  // 12 内容一致（時の順序）
  // ------------------------------------------------------------
  {
    id: 'eigo_cb_ch_12',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    passage: `Yesterday was a special day for Haruka. She had her first cooking class at school.

First, the teacher showed the students how to wash the rice. Then, they cut the vegetables carefully with a knife. After that, they cooked everything in a big pot. The kitchen smelled very good.

Finally, everyone sat down and ate the food together. Haruka was proud because she made the meal with her own hands. "I want to cook dinner for my family tonight," she thought happily.`,
    question: 'What did the students do RIGHT AFTER washing the rice?',
    choices: [
      'They ate the food together.',
      'They cut the vegetables.',
      'They cooked everything in a big pot.',
      'They went home.',
    ],
    answer: 'They cut the vegetables.',
    hint: '"First ... Then ... After that ... Finally ..." の順序を表す言葉に注目しましょう。米を洗った「次」は何をしましたか。',
    explanation: `【出題意図】
順序を表す語（First, Then, After that, Finally）を手がかりに、出来事の順番を正しく理解できるかを問う問題。

【解説】
本文では "First, the teacher showed ... how to wash the rice."（まず米を洗う）、"Then, they cut the vegetables"（次に野菜を切る）と続きます。よって米を洗ったすぐ後にしたのは「野菜を切ること」です。正解は "They cut the vegetables." です。

【注意点】
"cooked everything in a big pot"（大きななべで料理する）はその後、"ate the food together"（いっしょに食べる）はいちばん最後（Finally）の出来事です。順序を表す語を手がかりに、時間の流れを取りちがえないようにしましょう。`,
    pitfall: '本文に出てくる出来事をすべて選択肢に含めて迷わせる問題。順序語（Then, After that, Finally）で前後関係を確定させる。',
    memoryTip: 'First / Then / After that / Finally は出来事の順番を示す合図。これらに丸をつけながら読むと順序問題に強くなる。',
  },

  // ------------------------------------------------------------
  // 13 記述（英語1語で答える・気持ち）
  // ------------------------------------------------------------
  {
    id: 'eigo_cb_ch_13',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    passage: `It was the day of the school sports festival. Riku was going to run in the relay race. He was the last runner for his team.

When Riku got the baton, his team was in third place. He ran as fast as he could. Little by little, he passed the other runners. Just before the goal line, he passed the first runner and won the race!

His teammates ran to him and gave him a big hug. His face was red, but he was smiling. It was the happiest moment of his life.`,
    question: 'リクは最後にどんな気持ちになりましたか。本文の最後の文をもとに、気持ちを表す英語1語を本文中からぬき出して答えなさい。',
    answer: 'happiest',
    hint: '本文の最後の文 "It was the ... moment of his life." を見ましょう。気持ちを表す語をそのままぬき出します。',
    explanation: `【出題意図】
登場人物の気持ちを表す語を本文中から正しくぬき出せるか（記述）を問う問題。

【解説】
本文の最後に "It was the happiest moment of his life."（それは彼の人生でいちばん幸せな瞬間だった）とあります。気持ちを表す語をそのままぬき出すので、答えは "happiest" です（"happy" の最上級）。

【注意点】
設問は「本文中からぬき出す」よう求めているので、本文の形 "happiest" のまま答えます。"His face was red"（顔が赤かった）は走った後の様子であって、気持ちを表す語ではありません。`,
    pitfall: '「ぬき出し」問題では本文にある形のまま書く。自分で "happy" に直したりしないこと。',
    memoryTip: '気持ちを表す語（happy, sad, glad, proud, excited など）を覚えておくと、心情の読み取り問題で役立つ。',
  },

  // ------------------------------------------------------------
  // 14 内容一致（説明文・比較）
  // ------------------------------------------------------------
  {
    id: 'eigo_cb_ch_14',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    passage: `The sun is a very big star. It looks small to us because it is very, very far from the earth. The light from the sun takes about eight minutes to reach us.

The earth goes around the sun. It takes one year, or about 365 days, for the earth to travel all the way around. At the same time, the earth also turns around itself. This turning takes one day. When our side of the earth faces the sun, it is daytime. When it faces away from the sun, it is night.

The moon is much smaller than the sun. It does not make its own light. It only shines because the light of the sun hits it.`,
    question: '本文の内容に合うものを選びなさい。',
    choices: [
      'The sun is smaller than the moon.',
      'The moon makes its own light.',
      'It takes about one year for the earth to go around the sun.',
      'The light from the sun reaches the earth in one second.',
    ],
    answer: 'It takes about one year for the earth to go around the sun.',
    hint: '地球が太陽のまわりを一周するのにかかる時間を本文から探しましょう。"It takes ... for the earth to travel ..." の文です。',
    explanation: `【出題意図】
説明文中の複数の事実を正しく読み取り、比較（大小）や時間の情報を選択肢と照合できるかを問う問題。

【解説】
本文に "It takes one year, or about 365 days, for the earth to travel all the way around."（地球が太陽のまわりを一周するのに約1年かかる）とあります。したがって正解は "It takes about one year for the earth to go around the sun." です。

【注意点】
太陽は月より「much smaller」ではなく大きい（"The moon is much smaller than the sun."）ので1は誤り。月は自分で光を出さない（"It does not make its own light."）ので2も誤り。太陽の光が地球に届くのは「約8分（eight minutes）」であり「1秒」ではないので4も誤りです。`,
    pitfall: '大小関係（太陽と月）や時間（8分・1年・1日）が多く出てくるので、それぞれ何についての情報かを取りちがえないこと。',
    memoryTip: '説明文では「何が何より大きい／小さい」「何にどれだけ時間がかかる」を対応させてメモすると照合しやすい。',
  },

  // ------------------------------------------------------------
  // 15 主旨（説明文の要点）
  // ------------------------------------------------------------
  {
    id: 'eigo_cb_ch_15',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    passage: `Water is used again and again all over the world. This is called the water cycle.

When the sun shines on the sea, rivers, and lakes, some water becomes a gas called water vapor and rises into the sky. High in the sky, the air is cold, so the water vapor changes into tiny drops of water. Many of these drops come together and make clouds.

When the clouds become heavy, the water falls back to the ground as rain or snow. This water flows into rivers and returns to the sea. Then the sun warms it again, and the same thing happens over and over. In this way, the earth uses the same water many times.`,
    question: 'この文章がいちばん伝えようとしていること（要点）として最も適切なものを選びなさい。',
    choices: [
      '雨や雪は、空の高いところが冷たいから降ってくる。',
      '地球では、同じ水が形を変えながら何度もくり返し使われている。',
      '雲は、小さな水のつぶが集まってできている。',
      '太陽は、海や川や湖をあたためている。',
    ],
    answer: '地球では、同じ水が形を変えながら何度もくり返し使われている。',
    hint: '文章の最初と最後の文に注目しましょう。この文章全体は何のしくみ（cycle）を説明していますか。',
    explanation: `【出題意図】
説明文全体をつらぬく要点（主旨）を、部分的な事実と区別して読み取れるかを問う問題。

【解説】
文章の初めに "Water is used again and again ... This is called the water cycle."（水は何度も使われる。これを水の循環という）とあり、最後にも "the earth uses the same water many times."（地球は同じ水を何度も使う）とまとめられています。文章全体は「水の循環」というしくみを説明しているので、要点は2です。

【注意点】
1・3・4は、水が循環するとちゅうで起こる個々のできごと（部分的な説明）にすぎません。文章全体がいちばん伝えたいのは、それらをつなぐ「同じ水がくり返し使われる」という大きな流れ（循環）です。部分と全体を区別しましょう。`,
    pitfall: '本文の途中に出てくる正しい事実（雲のでき方など）も選択肢になる。「一部の説明」か「全体の要点」かを見分ける。',
    memoryTip: '要点は文章の最初と最後にまとめられていることが多い。冒頭と結びの文をつなげて主旨をつかむ。',
  },
];
