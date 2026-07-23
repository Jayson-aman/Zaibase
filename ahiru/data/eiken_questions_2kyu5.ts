import type { EikenQuestion } from './eiken_questions';

// 英検2級 追加問題バンク5（語彙40問・文法30問・長文読解30問 = 100問）

const p5_1 = `More than half a century of space exploration has left Earth's orbit crowded with junk: dead satellites, abandoned rocket stages, and millions of tiny fragments created by past collisions. Traveling at speeds of about twenty-eight thousand kilometers per hour, even a piece of debris the size of a coin can seriously damage a working satellite or the International Space Station. Space agencies now track larger objects and move spacecraft out of their path, but small fragments are impossible to follow. Several companies are testing removal technologies, including robotic arms, nets, and harpoons, that would capture large pieces of junk and drag them down toward the atmosphere, where they would burn up. Experts agree, however, that the cheapest solution is prevention: designing new satellites so that they leave orbit by themselves at the end of their lives.`;

const p5_2 = `Supermarkets around the world now sell burgers, sausages, and nuggets made entirely from plants such as soybeans and peas. Food companies have invested heavily in making these products taste, smell, and even "bleed" like real meat, mainly to attract meat eaters who want to reduce their environmental impact rather than committed vegetarians. Producing plant-based meat generally requires far less land and water than raising cattle and creates a fraction of the greenhouse gases. Nutritionists, however, urge caution: some products contain high levels of salt and saturated fat, and being plant-based does not automatically make them healthy. Sales grew rapidly at first but have slowed recently, partly because of higher prices, and manufacturers are now working to close the cost gap with ordinary meat.`;

const p5_3 = `Cities such as Venice, Barcelona, and Kyoto attract so many visitors that tourism, long welcomed as a source of income, has begun to feel like a burden. Residents complain about crowded buses, rising rents, and souvenir shops replacing bakeries and grocery stores that once served daily needs. In response, local governments are experimenting with a variety of measures: entrance fees for day-trippers, limits on new hotels, and campaigns that guide visitors toward less famous neighborhoods or off-season travel. The tourism industry itself is divided. Some businesses fear that restrictions will reduce their profits, while others argue that protecting the city's atmosphere is the only way to keep tourists coming in the long run — for no one wants to visit a place that has lost the very character they came to see.`;

const p5_4 = `Teenagers are famous for staying up late, but biology, not laziness, is largely to blame. During adolescence the body's internal clock shifts, making it difficult for many teens to fall asleep before eleven at night. When school begins at eight, students simply cannot get the eight to ten hours of sleep doctors recommend. Districts in the United States that moved their high school start times to eight thirty or later have reported encouraging results: students slept longer, grades improved modestly, and car accidents involving young drivers decreased. Opponents point to practical problems such as rescheduling school buses and after-school sports, which affect budgets and family routines. Sleep researchers respond that these are solvable logistical issues, while chronic sleep loss among teenagers is a genuine public health concern.`;

const p5_5 = `Modern concrete structures often begin to crack within decades, yet Roman harbors and buildings such as the Pantheon have survived for two thousand years. For a long time nobody could fully explain this, but recent analyses have revealed part of the secret. The Romans mixed volcanic ash into their concrete, and they appear to have used a technique called hot mixing, which left tiny lumps of lime scattered through the material. When cracks form and water enters, these lumps dissolve and react, producing new crystals that seal the cracks — in effect, the concrete repairs itself. Engineers are now developing modern versions of self-healing concrete inspired by these discoveries. If such materials become common, roads and bridges could last far longer, saving enormous amounts of money and cutting the carbon emissions created by cement production.`;

const p5_6 = `Bicycle-sharing programs, which allow people to rent a bike from one station and return it at another, have spread to hundreds of cities worldwide. Supporters praise them for easing traffic congestion, cutting air pollution, and helping commuters cover the "last mile" between train stations and their offices. Yet running such a system is harder than it looks. Riders tend to travel downhill more often than uphill and into business districts each morning, so bicycles pile up in some stations while others stand empty. Operators must therefore move bikes around by truck, an expensive and polluting activity that undermines part of the environmental benefit. Some newer systems reward users with small discounts for returning bikes to underused stations, cleverly turning customers themselves into part of the redistribution workforce.`;

const p5_7 = `When plants or animals are carried — deliberately or by accident — to regions where they have no natural enemies, they can multiply explosively and crowd out native wildlife. Such "invasive species" cost the world economy billions of dollars a year. The brown tree snake, accidentally brought to Guam on cargo ships, has wiped out most of the island's native birds, while water hyacinth, introduced as an ornamental plant, now chokes lakes and rivers across Africa and Asia. Once an invader is fully established, removing it is often impossible, so authorities concentrate on prevention: inspecting ships and cargo, restricting the pet and garden trade, and asking travelers not to carry fruit or plants across borders. Biologists stress that early detection is critical, because a small population can sometimes be eliminated before it spreads beyond control.`;

const p5_8 = `Video calls with doctors, once a rarity, became routine almost overnight when the pandemic closed clinic doors. Telemedicine has obvious attractions: patients in remote villages can consult specialists hundreds of kilometers away, working parents save hours of travel and waiting, and people with infectious symptoms can be examined without sitting in a crowded waiting room. Still, doctors caution that a camera cannot replace every examination. Physicians cannot listen to a patient's lungs, feel a swollen joint, or run blood tests through a screen, and elderly patients sometimes struggle with the technology. Most experts therefore expect a mixed future in which routine follow-ups and minor illnesses are handled online, while first visits and serious conditions still bring patients into the clinic.`;

const p5_9 = `Chocolate begins its life on small farms in West Africa, where two countries, Ivory Coast and Ghana, grow about sixty percent of the world's cacao. Despite chocolate's popularity, many cacao farmers live in poverty, earning only a tiny share of the price of a chocolate bar. Low incomes push some families to rely on child labor and to clear protected forests for new fields. Chocolate companies, under pressure from consumers, have promised to pay premiums for sustainably grown beans and to trace exactly where their cacao comes from. Progress is real but slow: certification schemes cover a growing share of farms, yet investigators still find cocoa from deforested land entering global supply chains. Shoppers who want to help, campaigners say, should look for trusted certification labels and be willing to pay a little more.`;

const p5_10 = `As laptops replace notebooks in classrooms, researchers have begun asking whether the way students record information affects how well they learn it. In several experiments, students who took notes by hand performed better on tests of conceptual understanding than those who typed, even though the typists recorded far more words. The likely explanation is that handwriting is slow: unable to copy every sentence, writers must summarize and rephrase ideas in their own words, which forces deeper processing of the material. Typists, by contrast, often fall into transcribing lectures almost word for word without thinking about the content. The researchers do not conclude that computers should be banned; instead, they suggest teaching students to take selective notes, since it is the mental effort of summarizing, not the pen itself, that produces the benefit.`;

export const eikenQuestions2kyu5: EikenQuestion[] = [
  // ===== VOCABULARY (001-040) =====
  {
    id: 'eiken_2kyu5_001', level: '2kyu', category: 'vocabulary',
    question: "It takes years of practice to ( ) the skills needed to become a professional interpreter.",
    choices: [
      { key: 'A', text: "abandon" },
      { key: 'B', text: "irritate" },
      { key: 'C', text: "acquire" },
      { key: 'D', text: "postpone" },
    ],
    correctKey: 'C',
    explanation: '「acquire（〜を習得する・獲得する）」が正解。プロの通訳者になるのに必要な技術を身につけるには長年の練習が必要だという文意です。abandonは「〜を捨てる」、irritateは「〜をいらだたせる」、postponeは「〜を延期する」。acquire knowledge/a language（知識・言語を習得する）の形で頻出します。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_002', level: '2kyu', category: 'vocabulary',
    question: "The shelter provides ( ) food and clothing for about two hundred people.",
    choices: [
      { key: 'A', text: "adequate" },
      { key: 'B', text: "guilty" },
      { key: 'C', text: "accidental" },
      { key: 'D', text: "absent" },
    ],
    correctKey: 'A',
    explanation: '「adequate（十分な・適切な）」が正解。避難所が約200人分の十分な食料と衣類を提供しているという文意です。guiltyは「有罪の」、accidentalは「偶然の」、absentは「欠席の」。sufficientとほぼ同義で、反意語はinadequate（不十分な）です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_003', level: '2kyu', category: 'vocabulary',
    question: "The city decided to ( ) a new recycling system starting next April.",
    choices: [
      { key: 'A', text: "blame" },
      { key: 'B', text: "melt" },
      { key: 'C', text: "forgive" },
      { key: 'D', text: "adopt" },
    ],
    correctKey: 'D',
    explanation: '「adopt（〜を採用する・導入する）」が正解。市が来年4月から新しいリサイクル制度を導入することを決めたという文意です。blameは「〜を責める」、meltは「〜を溶かす」、forgiveは「〜を許す」。adoptには「養子にする」の意味もあり、adapt（適応する）との混同に注意しましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_004', level: '2kyu', category: 'vocabulary',
    question: "Ken has an ( ) plan to open three restaurants before he turns thirty.",
    choices: [
      { key: 'A', text: "innocent" },
      { key: 'B', text: "ambitious" },
      { key: 'C', text: "awkward" },
      { key: 'D', text: "identical" },
    ],
    correctKey: 'B',
    explanation: '「ambitious（野心的な）」が正解。30歳になる前に3店舗を開くという大きな目標を表しています。innocentは「無実の・無邪気な」、awkwardは「ぎこちない・気まずい」、identicalは「同一の」。名詞形ambition（野心・大志）もあわせて覚えましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_005', level: '2kyu', category: 'vocabulary',
    question: "The company holds an ( ) meeting every December to review its performance.",
    choices: [
      { key: 'A', text: "instant" },
      { key: 'B', text: "annual" },
      { key: 'C', text: "artificial" },
      { key: 'D', text: "anxious" },
    ],
    correctKey: 'B',
    explanation: '「annual（年1回の・毎年の）」が正解。every December（毎年12月に）が手がかりで、業績を振り返る年次会議という文意です。instantは「即座の」、artificialは「人工の」、anxiousは「心配な」。annual income（年収）、annual event（年中行事）などの形でも頻出です。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu5_006', level: '2kyu', category: 'vocabulary',
    question: "It soon became ( ) that the two sides would not reach an agreement.",
    choices: [
      { key: 'A', text: "portable" },
      { key: 'B', text: "jealous" },
      { key: 'C', text: "loyal" },
      { key: 'D', text: "apparent" },
    ],
    correctKey: 'D',
    explanation: '「apparent（明らかな）」が正解。It became apparent that 〜（〜ということが明らかになった）の形で、両者が合意に達しないことがすぐ明白になったという文意です。portableは「持ち運びできる」、jealousは「嫉妬した」、loyalは「忠実な」。副詞apparently（見たところ〜らしい）も頻出です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_007', level: '2kyu', category: 'vocabulary',
    question: "Jeans and a T-shirt are not ( ) clothes for a job interview.",
    choices: [
      { key: 'A', text: "appropriate" },
      { key: 'B', text: "enormous" },
      { key: 'C', text: "previous" },
      { key: 'D', text: "curious" },
    ],
    correctKey: 'A',
    explanation: '「appropriate（適切な・ふさわしい）」が正解。ジーンズとTシャツは就職面接にふさわしい服装ではないという文意です。enormousは「巨大な」、previousは「以前の」、curiousは「好奇心の強い」。be appropriate for 〜（〜にふさわしい）、反意語inappropriate（不適切な）も覚えましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_008', level: '2kyu', category: 'vocabulary',
    question: "Many people ( ) that the product is safe simply because it is popular.",
    choices: [
      { key: 'A', text: "refuse" },
      { key: 'B', text: "bury" },
      { key: 'C', text: "assume" },
      { key: 'D', text: "obey" },
    ],
    correctKey: 'C',
    explanation: '「assume（〜と思い込む・当然と考える）」が正解。人気があるというだけで製品が安全だと思い込む人が多いという文意です。refuseは「〜を拒む」、buryは「〜を埋める」、obeyは「〜に従う」。assume that 〜の形で「（根拠なく）〜と想定する」を表し、名詞形assumption（思い込み・前提）も頻出です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_009', level: '2kyu', category: 'vocabulary',
    question: "The small cafe has a relaxed ( ) that makes customers want to stay for hours.",
    choices: [
      { key: 'A', text: "atmosphere" },
      { key: 'B', text: "refund" },
      { key: 'C', text: "appointment" },
      { key: 'D', text: "license" },
    ],
    correctKey: 'A',
    explanation: '「atmosphere（雰囲気）」が正解。何時間でもいたくなるくつろいだ雰囲気のカフェという文意です。refundは「払い戻し」、appointmentは「予約・約束」、licenseは「免許」。atmosphereには「大気」の意味もあり、環境問題の文章でも頻出です。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu5_010', level: '2kyu', category: 'vocabulary',
    question: "His first ( ) to climb the mountain failed because of bad weather.",
    choices: [
      { key: 'A', text: "comparison" },
      { key: 'B', text: "religion" },
      { key: 'C', text: "attempt" },
      { key: 'D', text: "quantity" },
    ],
    correctKey: 'C',
    explanation: '「attempt（試み）」が正解。attempt to do（〜しようとする試み）の形で、初めての登頂の試みは悪天候で失敗したという文意です。comparisonは「比較」、religionは「宗教」、quantityは「量」。make an attempt（試みる）、動詞attempt（〜を試みる）も覚えましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_011', level: '2kyu', category: 'vocabulary',
    question: "Only the school principal has the ( ) to cancel classes.",
    choices: [
      { key: 'A', text: "appetite" },
      { key: 'B', text: "authority" },
      { key: 'C', text: "harvest" },
      { key: 'D', text: "laundry" },
    ],
    correctKey: 'B',
    explanation: '「authority（権限）」が正解。have the authority to do（〜する権限がある）の形で、休講にする権限は校長だけにあるという文意です。appetiteは「食欲」、harvestは「収穫」、laundryは「洗濯物」。authoritiesと複数形にすると「当局」の意味になる点も重要です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_012', level: '2kyu', category: 'vocabulary',
    question: "Since moving to the suburbs, Mari has had to ( ) more than an hour each way to work.",
    choices: [
      { key: 'A', text: "translate" },
      { key: 'B', text: "decorate" },
      { key: 'C', text: "punish" },
      { key: 'D', text: "commute" },
    ],
    correctKey: 'D',
    explanation: '「commute（通勤する）」が正解。郊外に引っ越して以来、片道1時間以上通勤しなければならないという文意です。translateは「〜を翻訳する」、decorateは「〜を飾る」、punishは「〜を罰する」。名詞commuter（通勤者）、commuter train（通勤電車）も頻出です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_013', level: '2kyu', category: 'vocabulary',
    question: "The instructions for the tax form were so ( ) that I asked an accountant for help.",
    choices: [
      { key: 'A', text: "portable" },
      { key: 'B', text: "broad" },
      { key: 'C', text: "modest" },
      { key: 'D', text: "complicated" },
    ],
    correctKey: 'D',
    explanation: '「complicated（複雑な）」が正解。税務書類の説明が複雑すぎて会計士に助けを求めたという文意です。portableは「持ち運びできる」、broadは「幅広い」、modestは「控えめな」。類義語complex、反意語simple（単純な）もあわせて覚えましょう。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu5_014', level: '2kyu', category: 'vocabulary',
    question: "After examining all the data, the scientists ( ) that the medicine was effective.",
    choices: [
      { key: 'A', text: "dismissed" },
      { key: 'B', text: "concluded" },
      { key: 'C', text: "soaked" },
      { key: 'D', text: "scattered" },
    ],
    correctKey: 'B',
    explanation: '「conclude（〜と結論づける）」が正解。全データを検討した後、薬が有効だと結論づけたという文意です。dismissは「〜を退ける・解雇する」、soakは「〜を浸す」、scatterは「〜をまき散らす」。名詞形conclusion（結論）を使ったcome to/draw a conclusionも頻出です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_015', level: '2kyu', category: 'vocabulary',
    question: "Please call the restaurant to ( ) our reservation for Saturday evening.",
    choices: [
      { key: 'A', text: "bury" },
      { key: 'B', text: "harvest" },
      { key: 'C', text: "confirm" },
      { key: 'D', text: "scold" },
    ],
    correctKey: 'C',
    explanation: '「confirm（〜を確認する）」が正解。土曜夜の予約をレストランに電話で確認するという文意です。buryは「〜を埋める」、harvestは「〜を収穫する」、scoldは「〜を叱る」。confirm a reservation/bookingは旅行や予約の場面で頻出のコロケーションです。名詞形はconfirmation（確認）です。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu5_016', level: '2kyu', category: 'vocabulary',
    question: "Modern refrigerators ( ) far less electricity than models made twenty years ago.",
    choices: [
      { key: 'A', text: "consume" },
      { key: 'B', text: "obey" },
      { key: 'C', text: "rescue" },
      { key: 'D', text: "bother" },
    ],
    correctKey: 'A',
    explanation: '「consume（〜を消費する）」が正解。最新の冷蔵庫は20年前の製品よりはるかに少ない電力しか消費しないという文意です。obeyは「〜に従う」、rescueは「〜を救助する」、botherは「〜を悩ませる」。名詞形consumption（消費）、consumer（消費者）も頻出です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_017', level: '2kyu', category: 'vocabulary',
    question: "Regular exercise can ( ) to better sleep and lower stress levels.",
    choices: [
      { key: 'A', text: "object" },
      { key: 'B', text: "apologize" },
      { key: 'C', text: "contribute" },
      { key: 'D', text: "refer" },
    ],
    correctKey: 'C',
    explanation: '「contribute to 〜（〜に貢献する・〜の一因となる）」が正解。定期的な運動はより良い睡眠とストレス軽減につながるという文意です。object to 〜は「〜に反対する」、apologize to 〜は「〜に謝る」、refer to 〜は「〜に言及する」で、いずれも文意に合いません。名詞形contribution（貢献）も覚えましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_018', level: '2kyu', category: 'vocabulary',
    question: "The lawyer tried to ( ) the jury that her client was innocent.",
    choices: [
      { key: 'A', text: "apologize" },
      { key: 'B', text: "agree" },
      { key: 'C', text: "reply" },
      { key: 'D', text: "convince" },
    ],
    correctKey: 'D',
    explanation: '「convince 人 that 〜（人に〜だと確信させる・納得させる）」が正解。弁護士が陪審に依頼人の無実を納得させようとしたという文意です。apologize・agree・replyはいずれも「人 + that節」を直接目的語に取れません。convince 人 to do（人を説得して〜させる）、類義語persuadeもあわせて覚えましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_019', level: '2kyu', category: 'vocabulary',
    question: "The two countries agreed to ( ) with each other in fighting cybercrime.",
    choices: [
      { key: 'A', text: "cooperate" },
      { key: 'B', text: "graduate" },
      { key: 'C', text: "hesitate" },
      { key: 'D', text: "exaggerate" },
    ],
    correctKey: 'A',
    explanation: '「cooperate with 〜（〜と協力する）」が正解。両国がサイバー犯罪対策で協力することに合意したという文意です。graduateは「卒業する」、hesitateは「ためらう」、exaggerateは「〜を誇張する」。名詞形cooperation（協力）、形容詞cooperative（協力的な）も頻出です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_020', level: '2kyu', category: 'vocabulary',
    question: "The mayor was strongly ( ) for spending public money on an unnecessary monument.",
    choices: [
      { key: 'A', text: "reminded" },
      { key: 'B', text: "criticized" },
      { key: 'C', text: "employed" },
      { key: 'D', text: "measured" },
    ],
    correctKey: 'B',
    explanation: '「criticize 人 for 〜（〜のことで人を批判する）」の受動態が正解。不要な記念碑に公金を使ったことで市長が強く批判されたという文意です。remindは「〜に思い出させる」、employは「〜を雇う」、measureは「〜を測る」。名詞形criticism（批判）、critic（批評家）もあわせて覚えましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_021', level: '2kyu', category: 'vocabulary',
    question: "You can check the ( ) exchange rate on the bank's website.",
    choices: [
      { key: 'A', text: "guilty" },
      { key: 'B', text: "current" },
      { key: 'C', text: "distant" },
      { key: 'D', text: "brave" },
    ],
    correctKey: 'B',
    explanation: '「current（現在の）」が正解。現在の為替レートは銀行のウェブサイトで確認できるという文意です。guiltyは「有罪の」、distantは「遠い」、braveは「勇敢な」。currentは名詞で「流れ・電流」の意味もあり、副詞currently（現在は）も頻出です。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu5_022', level: '2kyu', category: 'vocabulary',
    question: "After working overtime all month, the staff ( ) a long vacation.",
    choices: [
      { key: 'A', text: "deserve" },
      { key: 'B', text: "bury" },
      { key: 'C', text: "interrupt" },
      { key: 'D', text: "measure" },
    ],
    correctKey: 'A',
    explanation: '「deserve（〜に値する・〜を受けるに足る）」が正解。1か月ずっと残業した後なので、スタッフは長い休暇をもらうに値するという文意です。buryは「〜を埋める」、interruptは「〜をさえぎる」、measureは「〜を測る」。deserve to do（〜するに値する）の形も頻出です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_023', level: '2kyu', category: 'vocabulary',
    question: "This small ( ) measures your heart rate while you sleep.",
    choices: [
      { key: 'A', text: "appetite" },
      { key: 'B', text: "tragedy" },
      { key: 'C', text: "religion" },
      { key: 'D', text: "device" },
    ],
    correctKey: 'D',
    explanation: '「device（装置・機器）」が正解。睡眠中の心拍数を測る小さな装置という文意です。appetiteは「食欲」、tragedyは「悲劇」、religionは「宗教」。electronic device（電子機器）などの形で頻出し、動詞devise（〜を考案する）との関係も覚えておきましょう。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu5_024', level: '2kyu', category: 'vocabulary',
    question: "The new engine is more ( ), using thirty percent less fuel than the old one.",
    choices: [
      { key: 'A', text: "nervous" },
      { key: 'B', text: "ancient" },
      { key: 'C', text: "efficient" },
      { key: 'D', text: "jealous" },
    ],
    correctKey: 'C',
    explanation: '「efficient（効率的な）」が正解。燃料消費が30%少ないという説明から、新しいエンジンはより効率的だという文意です。nervousは「緊張した」、ancientは「古代の」、jealousは「嫉妬した」。名詞形efficiency（効率）、fuel-efficient（燃費の良い）も頻出です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_025', level: '2kyu', category: 'vocabulary',
    question: "While hiking in the national park, we ( ) a group of wild monkeys.",
    choices: [
      { key: 'A', text: "exported" },
      { key: 'B', text: "measured" },
      { key: 'C', text: "celebrated" },
      { key: 'D', text: "encountered" },
    ],
    correctKey: 'D',
    explanation: '「encounter（〜に偶然出会う・遭遇する）」が正解。国立公園でハイキング中に野生の猿の群れに遭遇したという文意です。exportは「〜を輸出する」、measureは「〜を測る」、celebrateは「〜を祝う」。encounter difficulties（困難に直面する）のように問題との遭遇にも使います。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_026', level: '2kyu', category: 'vocabulary',
    question: "The university was ( ) in 1902 by a group of local business leaders.",
    choices: [
      { key: 'A', text: "buried" },
      { key: 'B', text: "interrupted" },
      { key: 'C', text: "established" },
      { key: 'D', text: "postponed" },
    ],
    correctKey: 'C',
    explanation: '「establish（〜を設立する）」の受動態が正解。その大学は1902年に地元の実業家たちによって設立されたという文意です。buryは「〜を埋める」、interruptは「〜をさえぎる」、postponeは「〜を延期する」。類義語found（〜を創設する）、名詞形establishment（設立）も覚えましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_027', level: '2kyu', category: 'vocabulary',
    question: "After running the full marathon, Takashi was completely ( ).",
    choices: [
      { key: 'A', text: "polished" },
      { key: 'B', text: "exhausted" },
      { key: 'C', text: "decorated" },
      { key: 'D', text: "awarded" },
    ],
    correctKey: 'B',
    explanation: '「exhausted（疲れ果てた）」が正解。フルマラソンを走り終えて完全に疲れ切ったという文意です。polishedは「磨かれた」、decoratedは「飾られた」、awardedは「授与された」。tiredよりも強い疲労を表し、類義語にworn out（くたくたの）があります。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu5_028', level: '2kyu', category: 'vocabulary',
    question: "Traveling by taxi every day is a big ( ) for a college student.",
    choices: [
      { key: 'A', text: "expense" },
      { key: 'B', text: "triangle" },
      { key: 'C', text: "throat" },
      { key: 'D', text: "costume" },
    ],
    correctKey: 'A',
    explanation: '「expense（出費・費用）」が正解。毎日タクシーで移動するのは大学生には大きな出費だという文意です。triangleは「三角形」、throatは「のど」、costumeは「衣装」。at the expense of 〜（〜を犠牲にして）、形容詞expensive（高価な）もあわせて覚えましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_029', level: '2kyu', category: 'vocabulary',
    question: "The tourists felt relieved when they heard a ( ) language spoken at the hotel.",
    choices: [
      { key: 'A', text: "familiar" },
      { key: 'B', text: "guilty" },
      { key: 'C', text: "absent" },
      { key: 'D', text: "vacant" },
    ],
    correctKey: 'A',
    explanation: '「familiar（聞き覚えのある・よく知っている）」が正解。ホテルで聞き慣れた言語が聞こえてきて観光客は安心したという文意です。guiltyは「有罪の」、absentは「欠席の」、vacantは「空いている」。be familiar with 〜（〜をよく知っている）、be familiar to 人（人によく知られている）の使い分けも重要です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_030', level: '2kyu', category: 'vocabulary',
    question: "Wind turbines ( ) electricity without producing carbon dioxide.",
    choices: [
      { key: 'A', text: "obey" },
      { key: 'B', text: "generate" },
      { key: 'C', text: "bury" },
      { key: 'D', text: "scold" },
    ],
    correctKey: 'B',
    explanation: '「generate（〜を発生させる・生み出す）」が正解。風力タービンは二酸化炭素を出さずに電気を作るという文意です。obeyは「〜に従う」、buryは「〜を埋める」、scoldは「〜を叱る」。generate electricity/power（発電する）は環境関連の文章で頻出のコロケーションです。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_031', level: '2kyu', category: 'vocabulary',
    question: "The driver ( ) the warning signs and entered the flooded road.",
    choices: [
      { key: 'A', text: "obeyed" },
      { key: 'B', text: "repaired" },
      { key: 'C', text: "ignored" },
      { key: 'D', text: "painted" },
    ],
    correctKey: 'C',
    explanation: '「ignore（〜を無視する）」が正解。警告標識を無視して冠水した道路に入ったという文意です。obeyは「〜に従う」で、従っていれば冠水した道路には入らないため文意と矛盾します。repairは「〜を修理する」、paintは「〜を塗る」。名詞形ignorance（無知）は意味が異なる点に注意しましょう。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu5_032', level: '2kyu', category: 'vocabulary',
    question: "She saves twenty percent of her monthly ( ) for her children's education.",
    choices: [
      { key: 'A', text: "luggage" },
      { key: 'B', text: "scenery" },
      { key: 'C', text: "traffic" },
      { key: 'D', text: "income" },
    ],
    correctKey: 'D',
    explanation: '「income（収入）」が正解。子どもの教育のために毎月の収入の20%を貯金しているという文意です。luggageは「手荷物」、sceneryは「風景」、trafficは「交通量」。monthly/annual income（月収・年収）、反意語expense（支出）もあわせて覚えましょう。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu5_033', level: '2kyu', category: 'vocabulary',
    question: "The survey results ( ) that most residents support the new park project.",
    choices: [
      { key: 'A', text: "bury" },
      { key: 'B', text: "indicate" },
      { key: 'C', text: "apologize" },
      { key: 'D', text: "graduate" },
    ],
    correctKey: 'B',
    explanation: '「indicate（〜を示す）」が正解。調査結果は住民の大半が新公園計画を支持していることを示しているという文意です。buryは「〜を埋める」、apologizeは「謝る」、graduateは「卒業する」で、いずれもthat節を目的語に取ってこの文意を表せません。類義語show、suggest、名詞形indication（兆候）も覚えましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_034', level: '2kyu', category: 'vocabulary',
    question: "The tourism ( ) provides thousands of jobs in this coastal town.",
    choices: [
      { key: 'A', text: "appetite" },
      { key: 'B', text: "religion" },
      { key: 'C', text: "industry" },
      { key: 'D', text: "laundry" },
    ],
    correctKey: 'C',
    explanation: '「industry（産業）」が正解。観光産業がこの海辺の町で何千もの雇用を生み出しているという文意です。appetiteは「食欲」、religionは「宗教」、laundryは「洗濯物」。the tourism/automobile industry（観光産業・自動車産業）のように分野名と組み合わせて使います。形容詞industrial（産業の）も頻出です。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu5_035', level: '2kyu', category: 'vocabulary',
    question: "Parents have a strong ( ) on their children's eating habits.",
    choices: [
      { key: 'A', text: "refund" },
      { key: 'B', text: "harvest" },
      { key: 'C', text: "throat" },
      { key: 'D', text: "influence" },
    ],
    correctKey: 'D',
    explanation: '「influence（影響）」が正解。have an influence on 〜（〜に影響を与える）の形で、親は子どもの食習慣に強い影響を持つという文意です。refundは「払い戻し」、harvestは「収穫」、throatは「のど」。動詞influence（〜に影響する）、類義語effect・impactもあわせて覚えましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_036', level: '2kyu', category: 'vocabulary',
    question: "Fortunately, his travel ( ) covered the cost of the lost baggage.",
    choices: [
      { key: 'A', text: "insurance" },
      { key: 'B', text: "ceremony" },
      { key: 'C', text: "geography" },
      { key: 'D', text: "sculpture" },
    ],
    correctKey: 'A',
    explanation: '「insurance（保険）」が正解。旅行保険が紛失した荷物の費用を補償してくれたという文意です。ceremonyは「式典」、geographyは「地理」、sculptureは「彫刻」。travel/health/life insurance（旅行・健康・生命保険）、動詞insure（〜に保険をかける）も頻出です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_037', level: '2kyu', category: 'vocabulary',
    question: "It costs a lot of money to ( ) an old wooden house in good condition.",
    choices: [
      { key: 'A', text: "scold" },
      { key: 'B', text: "melt" },
      { key: 'C', text: "dig" },
      { key: 'D', text: "maintain" },
    ],
    correctKey: 'D',
    explanation: '「maintain（〜を維持する・整備する）」が正解。古い木造家屋を良い状態に保つには多額の費用がかかるという文意です。scoldは「〜を叱る」、meltは「〜を溶かす」、digは「〜を掘る」。名詞形maintenance（維持・保守）、maintain that 〜（〜と主張する）の用法も覚えましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_038', level: '2kyu', category: 'vocabulary',
    question: "The doctor advised him to do ( ) exercise, such as walking, three times a week.",
    choices: [
      { key: 'A', text: "moderate" },
      { key: 'B', text: "guilty" },
      { key: 'C', text: "absent" },
      { key: 'D', text: "jealous" },
    ],
    correctKey: 'A',
    explanation: '「moderate（適度な）」が正解。ウォーキングのような適度な運動を週3回行うよう医師が勧めたという文意です。guiltyは「有罪の」、absentは「欠席の」、jealousは「嫉妬した」。moderate exercise（適度な運動）、moderate price（手頃な価格）などの形で頻出します。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_039', level: '2kyu', category: 'vocabulary',
    question: "Please write your name, address, and ( ) on the application form.",
    choices: [
      { key: 'A', text: "triangle" },
      { key: 'B', text: "occupation" },
      { key: 'C', text: "harvest" },
      { key: 'D', text: "appetite" },
    ],
    correctKey: 'B',
    explanation: '「occupation（職業）」が正解。申込書に氏名・住所・職業を記入するという文意です。triangleは「三角形」、harvestは「収穫」、appetiteは「食欲」。書類でよく使われるかたい語で、日常会話ではjobやworkが使われます。動詞occupy（〜を占める）との関係も覚えましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_040', level: '2kyu', category: 'vocabulary',
    question: "Studying abroad gave Yuki a great ( ) to improve her Spanish.",
    choices: [
      { key: 'A', text: "obstacle" },
      { key: 'B', text: "refund" },
      { key: 'C', text: "opportunity" },
      { key: 'D', text: "tragedy" },
    ],
    correctKey: 'C',
    explanation: '「opportunity（機会）」が正解。an opportunity to do（〜する機会）の形で、留学はスペイン語を上達させる絶好の機会を与えてくれたという文意です。obstacleは「障害」、refundは「払い戻し」、tragedyは「悲劇」。類義語chance、take advantage of an opportunity（機会を生かす）も頻出です。',
    difficulty: 'basic',
  },

  // ===== GRAMMAR (041-070) =====
  {
    id: 'eiken_2kyu5_041', level: '2kyu', category: 'grammar',
    question: "If I ( ) you, I would apologize to her before it is too late.",
    choices: [
      { key: 'A', text: "were" },
      { key: 'B', text: "am" },
      { key: 'C', text: "had been" },
      { key: 'D', text: "will be" },
    ],
    correctKey: 'A',
    explanation: '仮定法過去の基本形If I were you（もし私があなたなら）が正解。現在の事実に反する仮定なのでbe動詞はwereを使います。「私があなたなら手遅れになる前に彼女に謝る」の意味です。amは直説法で仮定法には使えず、had beenは過去の仮定（仮定法過去完了）、will beはif節内で未来を表す形として不適切です。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu5_042', level: '2kyu', category: 'grammar',
    question: "Please remember ( ) the lights before you leave the room.",
    choices: [
      { key: 'A', text: "turning off" },
      { key: 'B', text: "turned off" },
      { key: 'C', text: "to turning off" },
      { key: 'D', text: "to turn off" },
    ],
    correctKey: 'D',
    explanation: 'remember to do（これから〜することを覚えている・忘れずに〜する）が正解。「部屋を出る前に忘れずに電気を消してください」とこれからの行為を指すのでto turn offを使います。remember -ingは「（過去に）〜したことを覚えている」の意味で、依頼の文脈に合いません。forget to do / forget -ingの使い分けも同様のパターンです。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_043', level: '2kyu', category: 'grammar',
    question: "The doctor told him to stop ( ) for the sake of his health.",
    choices: [
      { key: 'A', text: "to smoke" },
      { key: 'B', text: "smoking" },
      { key: 'C', text: "smoke" },
      { key: 'D', text: "smoked" },
    ],
    correctKey: 'B',
    explanation: 'stop -ing（〜するのをやめる）が正解。「健康のためにたばこをやめるように医者に言われた」の意味です。stop to doは「〜するために立ち止まる」という別の意味になるため、ここでは不適切です。動名詞と不定詞で意味が変わる動詞（stop・remember・forget・tryなど）は頻出ポイントです。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu5_044', level: '2kyu', category: 'grammar',
    question: "The people ( ) I met at the conference were mostly engineers.",
    choices: [
      { key: 'A', text: "which" },
      { key: 'B', text: "whose" },
      { key: 'C', text: "whom" },
      { key: 'D', text: "what" },
    ],
    correctKey: 'C',
    explanation: '先行詞が人（The people）で、関係詞節の中でI met ( )の目的語になるので、目的格の関係代名詞whomが正解。「会議で会った人たちはほとんどがエンジニアだった」の意味です。whichは物に使い、whoseは所有格で後ろに名詞が必要、whatは先行詞を取れません。口語ではwhoやthatも使われますが、選択肢の中ではwhomが正しい形です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_045', level: '2kyu', category: 'grammar',
    question: "Emi spoke slowly ( ) the foreign guests could follow her explanation.",
    choices: [
      { key: 'A', text: "even if" },
      { key: 'B', text: "unless" },
      { key: 'C', text: "as far as" },
      { key: 'D', text: "so that" },
    ],
    correctKey: 'D',
    explanation: 'so that + 主語 + can/could（〜できるように）の目的を表す構文が正解。「外国人のお客さんが説明についてこられるように、エミはゆっくり話した」の意味です。even ifは「たとえ〜でも」、unlessは「〜しない限り」、as far asは「〜する限り（範囲）」で、目的の意味を表せません。in order that も同様の意味です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_046', level: '2kyu', category: 'grammar',
    question: "The child is old ( ) to walk to school by herself.",
    choices: [
      { key: 'A', text: "too" },
      { key: 'B', text: "enough" },
      { key: 'C', text: "so" },
      { key: 'D', text: "very" },
    ],
    correctKey: 'B',
    explanation: '形容詞 + enough to do（〜するのに十分…だ）が正解。「その子は一人で歩いて学校に行けるだけの年齢になっている」の意味です。enoughは形容詞の後ろに置く語順がポイント。tooはtoo ... to do（…すぎて〜できない）で意味が逆になり、soやveryはto不定詞と直接結びつきません。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu5_047', level: '2kyu', category: 'grammar',
    question: "You ( ) better take an umbrella; the sky is getting dark.",
    choices: [
      { key: 'A', text: "could" },
      { key: 'B', text: "should" },
      { key: 'C', text: "had" },
      { key: 'D', text: "must" },
    ],
    correctKey: 'C',
    explanation: 'had better + 原形（〜したほうがよい）の慣用表現が正解。「空が暗くなってきたから傘を持って行ったほうがいい」の意味です。had betterは忠告・軽い警告を表し、否定形はhad better notになります。could better、should better、must betterという形は存在しません。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu5_048', level: '2kyu', category: 'grammar',
    question: "Tom cannot speak French, and ( ).",
    choices: [
      { key: 'A', text: "neither can his sister" },
      { key: 'B', text: "his sister cannot too" },
      { key: 'C', text: "so can his sister" },
      { key: 'D', text: "neither his sister can" },
    ],
    correctKey: 'A',
    explanation: '否定文を受けて「〜もまた…ない」はneither + 助動詞 + 主語の倒置語順で表します。「トムはフランス語が話せないし、妹も話せない」の意味でneither can his sisterが正解。肯定文の場合はso + 助動詞 + 主語を使います。cannot tooという形は誤りで、neither his sister canは語順が誤りです。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_049', level: '2kyu', category: 'grammar',
    question: "The new city hall ( ) by the end of next year.",
    choices: [
      { key: 'A', text: "will complete" },
      { key: 'B', text: "will be completed" },
      { key: 'C', text: "has completed" },
      { key: 'D', text: "is completing" },
    ],
    correctKey: 'B',
    explanation: '市庁舎は「完成される」側なので、未来の受動態will be completedが正解。「新しい市庁舎は来年末までに完成する予定だ」の意味です。will completeは能動態で市庁舎が何かを完成させることになり不自然。has completedやis completingも同様に能動の形で、主語との関係が成り立ちません。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu5_050', level: '2kyu', category: 'grammar',
    question: "Nobody knows the reason ( ) the factory closed so suddenly.",
    choices: [
      { key: 'A', text: "which" },
      { key: 'B', text: "what" },
      { key: 'C', text: "why" },
      { key: 'D', text: "how" },
    ],
    correctKey: 'C',
    explanation: '先行詞the reasonに続く関係副詞whyが正解。「工場がなぜあれほど突然閉鎖されたのか、誰も理由を知らない」の意味です。空所の後ろが完全な文なので関係代名詞which・whatは使えません。howは先行詞the wayと共には使わず、the reason howという形もありません。the reason whyはセットで覚えましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_051', level: '2kyu', category: 'grammar',
    question: "( ) did the storm delay the flights, but it also damaged the terminal roof.",
    choices: [
      { key: 'A', text: "Not only" },
      { key: 'B', text: "No sooner" },
      { key: 'C', text: "Not until" },
      { key: 'D', text: "Only when" },
    ],
    correctKey: 'A',
    explanation: 'Not only A but also B（AだけでなくBも）の構文で、Not onlyが文頭に出ると倒置（did the storm delay）が起こります。「嵐は欠航を引き起こしただけでなく、ターミナルの屋根も壊した」の意味です。後半のbut alsoと呼応するのが決め手。No soonerはthanと、Not untilは時の表現と呼応するため文意に合いません。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu5_052', level: '2kyu', category: 'grammar',
    question: "Every student in the class ( ) required to submit the essay by Friday.",
    choices: [
      { key: 'A', text: "are" },
      { key: 'B', text: "were" },
      { key: 'C', text: "have been" },
      { key: 'D', text: "is" },
    ],
    correctKey: 'D',
    explanation: 'every + 単数名詞は単数扱いなので、単数形のisが正解。「クラスの全生徒が金曜までにエッセイを提出するよう求められている」の意味です。in the classという修飾語に惑わされず、主語の核がEvery studentであることを見抜くのがポイント。each・eitherなども同様に単数扱いです。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_053', level: '2kyu', category: 'grammar',
    question: "There ( ) be a small movie theater on this corner when I was a child.",
    choices: [
      { key: 'A', text: "was used to" },
      { key: 'B', text: "is used to" },
      { key: 'C', text: "used to" },
      { key: 'D', text: "has used to" },
    ],
    correctKey: 'C',
    explanation: 'used to + 原形（昔は〜だった・〜したものだ）が正解。「子どもの頃、この角には小さな映画館があった」と過去の状態を表します。There used to be 〜（昔は〜があった）は頻出パターンです。be used to -ing（〜に慣れている）との区別が重要で、was used to・is used toの後に原形beは続けられません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_054', level: '2kyu', category: 'grammar',
    question: "The comedian made the entire audience ( ) with just one joke.",
    choices: [
      { key: 'A', text: "laugh" },
      { key: 'B', text: "to laugh" },
      { key: 'C', text: "laughed" },
      { key: 'D', text: "to laughing" },
    ],
    correctKey: 'A',
    explanation: '使役動詞make + 目的語 + 原形不定詞（〜に…させる）が正解。「そのコメディアンはたった一つのジョークで観客全員を笑わせた」の意味です。makeの後にto不定詞は使えません。同じく原形を取る使役動詞にlet・haveがあり、受動態になるとbe made to laughとtoが復活する点も頻出です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_055', level: '2kyu', category: 'grammar',
    question: "( ) my stay in Canada, I visited Niagara Falls twice.",
    choices: [
      { key: 'A', text: "While" },
      { key: 'B', text: "When" },
      { key: 'C', text: "Since" },
      { key: 'D', text: "During" },
    ],
    correctKey: 'D',
    explanation: '空所の後ろが名詞句（my stay in Canada）なので、前置詞のDuring（〜の間に）が正解。「カナダ滞在中にナイアガラの滝を2回訪れた」の意味です。WhileとWhenは接続詞なので後ろに主語+動詞が必要です（While I was staying in Canadaなら正しい形）。Sinceは「〜以来」で文意に合いません。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu5_056', level: '2kyu', category: 'grammar',
    question: "Could you tell me where ( )? I need to withdraw some money.",
    choices: [
      { key: 'A', text: "is the nearest bank" },
      { key: 'B', text: "the nearest bank is" },
      { key: 'C', text: "does the nearest bank" },
      { key: 'D', text: "is located the nearest bank" },
    ],
    correctKey: 'B',
    explanation: '間接疑問文では疑問詞の後ろが平叙文の語順（主語 + 動詞）になります。「一番近い銀行がどこにあるか教えていただけますか」の意味でthe nearest bank isが正解。疑問文の語順is the nearest bankのままにしないのがポイントです。Do you know what time it is?なども同じパターンで頻出します。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu5_057', level: '2kyu', category: 'grammar',
    question: "This laptop is twice ( ) expensive as the one I bought three years ago.",
    choices: [
      { key: 'A', text: "as" },
      { key: 'B', text: "more" },
      { key: 'C', text: "so" },
      { key: 'D', text: "much" },
    ],
    correctKey: 'A',
    explanation: '倍数表現はtwice as + 形容詞 + as 〜（〜の2倍…だ）の形を取ります。「このノートパソコンは3年前に買ったものの2倍の値段だ」の意味でasが正解。three times as ... as（3倍）、half as ... as（半分）も同じ形です。moreを使う場合はtwice more expensiveとは言えない点に注意しましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_058', level: '2kyu', category: 'grammar',
    question: "We had ( ) snow this winter, so the ski resorts opened late.",
    choices: [
      { key: 'A', text: "few" },
      { key: 'B', text: "a few" },
      { key: 'C', text: "little" },
      { key: 'D', text: "many" },
    ],
    correctKey: 'C',
    explanation: 'snowは数えられない名詞なので、不可算名詞に使うlittle（ほとんど〜ない）が正解。「今年の冬はほとんど雪が降らなかったのでスキー場のオープンが遅れた」の意味です。few・a few・manyは数えられる名詞に使います。a little（少しはある）とlittle（ほとんどない）のニュアンスの違いも頻出ポイントです。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_059', level: '2kyu', category: 'grammar',
    question: "Mr. Brown ( ) in Osaka since he retired ten years ago.",
    choices: [
      { key: 'A', text: "lives" },
      { key: 'B', text: "has lived" },
      { key: 'C', text: "is living" },
      { key: 'D', text: "lived" },
    ],
    correctKey: 'B',
    explanation: 'since + 過去の時点（10年前に退職して以来）があるので、継続を表す現在完了形has livedが正解。「ブラウンさんは10年前に退職して以来ずっと大阪に住んでいる」の意味です。現在形lives・過去形lived・現在進行形is livingは、since節と組み合わせて「過去から現在までの継続」を表せません。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu5_060', level: '2kyu', category: 'grammar',
    question: "You have already sent the invitation cards, ( )?",
    choices: [
      { key: 'A', text: "don't you" },
      { key: 'B', text: "aren't you" },
      { key: 'C', text: "didn't you" },
      { key: 'D', text: "haven't you" },
    ],
    correctKey: 'D',
    explanation: '付加疑問文は主節の動詞に合わせます。主節がYou have already sent（現在完了の肯定文）なので、否定形のhaven\'t youが正解。「招待状はもう送りましたよね」の意味です。一般動詞の現在形ならdon\'t you、過去形ならdidn\'t you、be動詞ならaren\'t youを使いますが、ここでは助動詞haveに対応させます。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_061', level: '2kyu', category: 'grammar',
    question: "We are looking forward to ( ) from you soon.",
    choices: [
      { key: 'A', text: "hear" },
      { key: 'B', text: "heard" },
      { key: 'C', text: "be heard" },
      { key: 'D', text: "hearing" },
    ],
    correctKey: 'D',
    explanation: 'look forward to -ing（〜を楽しみに待つ）のtoは前置詞なので、動名詞hearingが正解。「お返事を楽しみにお待ちしております」という手紙・メールの定型表現です。hear from 〜は「〜から連絡をもらう」の意味。to + 原形と間違えやすい代表的な表現なので、be used to -ing、object to -ingとあわせて覚えましょう。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu5_062', level: '2kyu', category: 'grammar',
    question: "Everyone was surprised ( ) the news of the singer's sudden retirement.",
    choices: [
      { key: 'A', text: "on" },
      { key: 'B', text: "at" },
      { key: 'C', text: "for" },
      { key: 'D', text: "to" },
    ],
    correctKey: 'B',
    explanation: 'be surprised at 〜（〜に驚く）が正解。「その歌手の突然の引退の知らせにみんな驚いた」の意味です。感情の原因を表す前置詞はatを使うのが基本です（byも可）。on・for・toはこの表現では使いません。be surprised to do（〜して驚く）のto不定詞の形もあわせて覚えましょう。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu5_063', level: '2kyu', category: 'grammar',
    question: "It ( ) me about forty minutes to walk from here to the stadium.",
    choices: [
      { key: 'A', text: "takes" },
      { key: 'B', text: "costs" },
      { key: 'C', text: "spends" },
      { key: 'D', text: "needs" },
    ],
    correctKey: 'A',
    explanation: 'It takes 人 + 時間 + to do（人が〜するのに時間がかかる）の構文が正解。「ここからスタジアムまで歩くと40分ほどかかる」の意味です。costは「（お金が）かかる」で時間には使わず、spendは人を主語にして人 spend 時間 -ingの形を取り、needはこの構文では使えません。時間はtake、お金はcostと整理して覚えましょう。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu5_064', level: '2kyu', category: 'grammar',
    question: "The woman ( ) a red scarf over there is our new French teacher.",
    choices: [
      { key: 'A', text: "wears" },
      { key: 'B', text: "worn" },
      { key: 'C', text: "wearing" },
      { key: 'D', text: "is wearing" },
    ],
    correctKey: 'C',
    explanation: '現在分詞wearingが名詞The womanを後ろから修飾する形が正解。「あそこで赤いスカーフを身につけている女性が新しいフランス語の先生です」の意味です。文全体の動詞はisなので、空所に述語動詞wears・is wearingを入れると動詞が二つになってしまいます。過去分詞wornでは「着られている女性」となり不自然です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_065', level: '2kyu', category: 'grammar',
    question: "Judging from the clouds, it ( ) well rain this evening.",
    choices: [
      { key: 'A', text: "can" },
      { key: 'B', text: "should" },
      { key: 'C', text: "may" },
      { key: 'D', text: "need" },
    ],
    correctKey: 'C',
    explanation: 'may well + 原形（たぶん〜だろう・〜するのももっともだ）の慣用表現が正解。「雲行きから判断すると、今晩はおそらく雨が降るだろう」の意味です。can well、should well、need wellという定型表現はありません。may as well do（〜したほうがよい）、might as well doとの違いも頻出ポイントです。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu5_066', level: '2kyu', category: 'grammar',
    question: "Would you like something cold ( )? We have iced tea and lemonade.",
    choices: [
      { key: 'A', text: "drink" },
      { key: 'B', text: "drinking" },
      { key: 'C', text: "drank" },
      { key: 'D', text: "to drink" },
    ],
    correctKey: 'D',
    explanation: '不定詞の形容詞的用法something cold to drink（何か冷たい飲み物）が正解。somethingを形容詞coldとto不定詞が後ろから修飾する語順です。「何か冷たいお飲み物はいかがですか」の意味です。something to eat（食べ物）、nothing to do（することがない）なども同じパターンで頻出します。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu5_067', level: '2kyu', category: 'grammar',
    question: "He said he had finished the report, ( ) turned out to be untrue.",
    choices: [
      { key: 'A', text: "that" },
      { key: 'B', text: "which" },
      { key: 'C', text: "what" },
      { key: 'D', text: "who" },
    ],
    correctKey: 'B',
    explanation: '前の文の内容全体を先行詞とする非制限用法の関係代名詞whichが正解。「彼は報告書を終えたと言ったが、それは事実ではないと判明した」の意味で、whichは「報告書を終えたと言ったこと」を指します。thatはコンマの後（非制限用法）では使えません。whatは先行詞を含む関係代名詞、whoは人にしか使えません。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu5_068', level: '2kyu', category: 'grammar',
    question: "The heavy snow ( ) the trains from running on time.",
    choices: [
      { key: 'A', text: "prevented" },
      { key: 'B', text: "allowed" },
      { key: 'C', text: "made" },
      { key: 'D', text: "caused" },
    ],
    correctKey: 'A',
    explanation: 'prevent A from -ing（Aが〜するのを妨げる）の構文が正解。「大雪のため電車は定刻通りに運行できなかった」の意味です。allowはallow A to do、makeはmake A + 原形、causeはcause A to doの形を取り、いずれもfrom -ingとは結びつきません。同じ形を取るstop/keep A from -ingもあわせて覚えましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_069', level: '2kyu', category: 'grammar',
    question: "( ) your advice, I would have made a serious mistake in the contract.",
    choices: [
      { key: 'A', text: "Despite" },
      { key: 'B', text: "Without" },
      { key: 'C', text: "Unless" },
      { key: 'D', text: "Except" },
    ],
    correctKey: 'B',
    explanation: 'Without 〜（〜がなかったら）は仮定法の条件をif節の代わりに表します。主節がwould have madeと仮定法過去完了なので、「あなたの助言がなかったら契約で重大なミスをしていただろう」の意味になりWithoutが正解。But for 〜も同じ意味です。Despiteは「〜にもかかわらず」、Unlessは接続詞で名詞句を導けず、Exceptは「〜を除いて」です。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu5_070', level: '2kyu', category: 'grammar',
    question: "( ) had the game started than it began to rain heavily.",
    choices: [
      { key: 'A', text: "Hardly" },
      { key: 'B', text: "Scarcely" },
      { key: 'C', text: "As soon as" },
      { key: 'D', text: "No sooner" },
    ],
    correctKey: 'D',
    explanation: 'No sooner had A ... than B（Aするとすぐに Bした）の構文が正解。「試合が始まるとすぐに激しい雨が降り出した」の意味で、文末のthanと呼応するのはNo soonerだけです。Hardly・Scarcelyはwhen/beforeと呼応します。文頭に否定語が来ているため、had the game startedと倒置になっている点にも注目しましょう。',
    difficulty: 'advanced',
  },

  // ===== READING (071-100) =====
  {
    id: 'eiken_2kyu5_071', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p5_1}

According to the passage, why is even small space debris dangerous?`,
    choices: [
      { key: 'A', text: "It blocks sunlight from reaching Earth." },
      { key: 'B', text: "It interferes with radio broadcasts on the ground." },
      { key: 'C', text: "It is made of radioactive materials." },
      { key: 'D', text: "It travels so fast that even tiny pieces can cause serious damage." },
    ],
    correctKey: 'D',
    explanation: '本文に「時速約2万8千キロで移動しているため、硬貨ほどの大きさの破片でも稼働中の衛星や国際宇宙ステーションに深刻な損傷を与えうる」とあり、Dが正解。危険の理由は速度にあります。A・B・Cはいずれも本文に記述がありません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_072', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p5_1}

In the passage, the word "capture" most closely means:`,
    choices: [
      { key: 'A', text: "destroy completely" },
      { key: 'B', text: "catch and hold" },
      { key: 'C', text: "photograph from a distance" },
      { key: 'D', text: "repair in orbit" },
    ],
    correctKey: 'B',
    explanation: 'captureは「捕獲する・捕らえる」という意味で、Bが正解。ロボットアームや網、もりで大きなごみを捕まえて大気圏へ引きずり降ろす、という文脈です。destroyは「破壊する」、photographは「撮影する」、repairは「修理する」。captureには「（心を）とらえる」「（画像を）取り込む」の意味もあります。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_073', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p5_1}

What do experts consider the cheapest solution to the space debris problem?`,
    choices: [
      { key: 'A', text: "Building stronger space stations." },
      { key: 'B', text: "Tracking every tiny fragment from the ground." },
      { key: 'C', text: "Designing satellites that leave orbit by themselves when their lives end." },
      { key: 'D', text: "Sending more robotic arms into space." },
    ],
    correctKey: 'C',
    explanation: '本文最終文に"the cheapest solution is prevention: designing new satellites so that they leave orbit by themselves at the end of their lives"（最も安価な解決策は予防、つまり寿命が来たら自力で軌道を離れるように衛星を設計することだ）とあり、Cが正解。小さな破片の追跡は不可能とされているためBは誤り。A・Dは費用面の記述がありません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_074', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p5_2}

Who are the main target customers of plant-based meat products?`,
    choices: [
      { key: 'A', text: "Meat eaters who want to reduce their environmental impact." },
      { key: 'B', text: "People who have been vegetarians for many years." },
      { key: 'C', text: "Children who do not like vegetables." },
      { key: 'D', text: "Professional athletes on strict diets." },
    ],
    correctKey: 'A',
    explanation: '本文に"mainly to attract meat eaters who want to reduce their environmental impact rather than committed vegetarians"（熱心なベジタリアンではなく、環境負荷を減らしたい肉食者を引きつけるのが主な狙い）とあり、Aが正解。Bは「〜ではなく」と明確に否定されており、C・Dは本文にありません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_075', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p5_2}

In the passage, the word "fraction" most closely means:`,
    choices: [
      { key: 'A', text: "a large increase" },
      { key: 'B', text: "an exact copy" },
      { key: 'C', text: "a small part" },
      { key: 'D', text: "a new type" },
    ],
    correctKey: 'C',
    explanation: 'fractionは「ごく一部・わずかな量」という意味で、Cが正解。植物由来の肉の生産は畜産に比べて温室効果ガスの排出がごくわずかで済む、という文脈です。large increaseは「大幅な増加」、exact copyは「正確な複製」、new typeは「新しい種類」。a fraction of 〜（〜のほんの一部）の形で頻出します。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_076', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p5_2}

What do nutritionists warn about plant-based meat?`,
    choices: [
      { key: 'A', text: "It contains no protein at all." },
      { key: 'B', text: "Some products are high in salt and saturated fat." },
      { key: 'C', text: "It produces more greenhouse gases than beef." },
      { key: 'D', text: "It always costs less than ordinary meat." },
    ],
    correctKey: 'B',
    explanation: '本文に"some products contain high levels of salt and saturated fat, and being plant-based does not automatically make them healthy"（塩分や飽和脂肪酸が多い製品もあり、植物由来だからといって自動的に健康的とは限らない）とあり、Bが正解。Cは温室効果ガスがごくわずかとあり逆、Dは価格の高さが販売鈍化の一因とされており誤り。Aは本文にありません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_077', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p5_3}

According to the passage, what do residents of popular tourist cities complain about?`,
    choices: [
      { key: 'A', text: "Falling rents in the city center." },
      { key: 'B', text: "Too few souvenir shops for visitors." },
      { key: 'C', text: "Crowded buses, rising rents, and the loss of everyday shops." },
      { key: 'D', text: "A lack of tourists during the summer season." },
    ],
    correctKey: 'C',
    explanation: '本文に"Residents complain about crowded buses, rising rents, and souvenir shops replacing bakeries and grocery stores"（住民は混雑したバス、家賃の上昇、パン屋や食料品店が土産物店に取って代わられることに不満を抱いている）とあり、Cが正解。Aは家賃が上昇しているので逆、B・Dは本文と矛盾します。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_078', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p5_3}

In the passage, the word "measures" most closely means:`,
    choices: [
      { key: 'A', text: "sizes of buildings" },
      { key: 'B', text: "musical rhythms" },
      { key: 'C', text: "personal opinions" },
      { key: 'D', text: "official actions taken to deal with a problem" },
    ],
    correctKey: 'D',
    explanation: 'measureは複数形で「対策・措置」という意味になり、Dが正解。日帰り客への入場料、新規ホテルの制限、キャンペーンといった行政の対策が列挙されている文脈です。take measures（対策を講じる）は頻出コロケーション。動詞のmeasure（〜を測る）や名詞の「寸法」の意味と区別しましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_079', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p5_3}

Why do some tourism businesses support restrictions on visitors?`,
    choices: [
      { key: 'A', text: "They believe protecting the city's character will keep tourists coming in the long run." },
      { key: 'B', text: "They want to reduce their own profits." },
      { key: 'C', text: "They dislike day-trippers for personal reasons." },
      { key: 'D', text: "They are planning to move their shops to other cities." },
    ],
    correctKey: 'A',
    explanation: '本文に「都市の雰囲気を守ることこそが、長期的に観光客に来てもらい続ける唯一の方法だと主張する事業者もいる。誰も、見に来たはずの個性を失った場所を訪れたいとは思わないからだ」とあり、Aが正解。Bは規制が利益を減らすと恐れる側の懸念であり支持の理由ではなく、C・Dは本文にありません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_080', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p5_4}

According to the passage, why do many teenagers stay up late?`,
    choices: [
      { key: 'A', text: "They are naturally lazy compared with adults." },
      { key: 'B', text: "Their internal body clock shifts during adolescence." },
      { key: 'C', text: "They drink too much coffee in the evening." },
      { key: 'D', text: "Schools give them too much homework." },
    ],
    correctKey: 'B',
    explanation: '本文冒頭に"biology, not laziness, is largely to blame. During adolescence the body\'s internal clock shifts"（怠けではなく生物学的要因が主な原因で、思春期には体内時計がずれる）とあり、Bが正解。Aの怠惰は明確に否定されており、C・Dは本文に記述がありません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_081', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p5_4}

What results were reported by districts that moved start times later?`,
    choices: [
      { key: 'A', text: "Students' grades fell because classes became shorter." },
      { key: 'B', text: "Car accidents involving young drivers increased." },
      { key: 'C', text: "Students slept less than before the change." },
      { key: 'D', text: "Longer sleep, modestly better grades, and fewer accidents among young drivers." },
    ],
    correctKey: 'D',
    explanation: '本文に"students slept longer, grades improved modestly, and car accidents involving young drivers decreased"（生徒の睡眠時間は延び、成績はやや向上し、若年ドライバーの事故は減少した）とあり、Dが正解。A・B・Cはいずれも報告された結果と正反対の内容です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_082', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p5_4}

In the passage, the word "chronic" most closely means:`,
    choices: [
      { key: 'A', text: "continuing for a long time" },
      { key: 'B', text: "sudden and brief" },
      { key: 'C', text: "imaginary" },
      { key: 'D', text: "easily cured" },
    ],
    correctKey: 'A',
    explanation: 'chronicは「慢性的な・長く続く」という意味で、Aが正解。10代の慢性的な睡眠不足は本物の公衆衛生上の問題だ、という文脈です。sudden and briefは「突然で短い」で正反対のacute（急性の）に近い意味です。chronic disease（慢性疾患）の形で医療関連の文章に頻出します。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_083', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p5_5}

According to the passage, why can Roman concrete repair itself?`,
    choices: [
      { key: 'A', text: "Volcanic eruptions regularly cover the cracks with new ash." },
      { key: 'B', text: "The material never comes into contact with water." },
      { key: 'C', text: "Lumps of lime react with water and form crystals that seal cracks." },
      { key: 'D', text: "Modern engineers restore the structures every year." },
    ],
    correctKey: 'C',
    explanation: '本文に「ひびが入って水が入ると、石灰の塊が溶けて反応し、ひびをふさぐ新しい結晶を作る。事実上、コンクリートが自らを修復する」とあり、Cが正解。むしろ水との接触が修復のきっかけなのでBは誤り。A・Dは本文に記述がありません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_084', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p5_5}

In the passage, the word "revealed" most closely means:`,
    choices: [
      { key: 'A', text: "made known" },
      { key: 'B', text: "kept hidden" },
      { key: 'C', text: "doubted" },
      { key: 'D', text: "forgotten" },
    ],
    correctKey: 'A',
    explanation: 'revealは「〜を明らかにする」という意味で、Aが正解。最近の分析がローマンコンクリートの秘密の一部を明らかにした、という文脈です。kept hiddenは「隠しておいた」で正反対、doubtedは「疑った」、forgottenは「忘れられた」。類義語disclose、反意語conceal（隠す）もあわせて覚えましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_085', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p5_5}

What benefit could modern self-healing concrete bring, according to the passage?`,
    choices: [
      { key: 'A', text: "Buildings could be made much taller than today." },
      { key: 'B', text: "Volcanic ash would become cheaper to buy." },
      { key: 'C', text: "Bridges would become more beautiful in design." },
      { key: 'D', text: "Roads and bridges could last longer, saving money and cutting emissions." },
    ],
    correctKey: 'D',
    explanation: '本文最終文に"roads and bridges could last far longer, saving enormous amounts of money and cutting the carbon emissions created by cement production"（道路や橋がはるかに長持ちし、莫大な費用を節約し、セメント生産による炭素排出を削減できる）とあり、Dが正解。A・B・Cは本文にありません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_086', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p5_6}

What operational problem do bicycle-sharing systems face?`,
    choices: [
      { key: 'A', text: "Most of the bicycles are stolen within a year." },
      { key: 'B', text: "Bikes pile up at some stations while others stand empty." },
      { key: 'C', text: "Trains refuse to carry people who use shared bikes." },
      { key: 'D', text: "Business districts have banned bicycles completely." },
    ],
    correctKey: 'B',
    explanation: '本文に「利用者は下り坂や朝の業務地区へ移動しがちなので、自転車は一部のステーションにたまり、他のステーションは空になる」とあり、Bが正解。そのためトラックで自転車を再配置する必要が生じます。A・C・Dはいずれも本文に記述がありません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_087', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p5_6}

In the passage, the word "undermines" most closely means:`,
    choices: [
      { key: 'A', text: "strengthens" },
      { key: 'B', text: "measures" },
      { key: 'C', text: "replaces" },
      { key: 'D', text: "weakens" },
    ],
    correctKey: 'D',
    explanation: 'undermineは「〜を弱める・損なう」という意味で、Dが正解。トラックによる自転車の移動は高コストで汚染も生むため、環境面の利点の一部を損なう、という文脈です。strengthenは「強める」で正反対、measureは「測る」、replaceは「取り替える」。under（下から）+ mine（掘る）が語源で、「土台を掘り崩す」イメージです。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_088', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p5_6}

How do some newer bike-sharing systems deal with the redistribution problem?`,
    choices: [
      { key: 'A', text: "By hiring many more truck drivers." },
      { key: 'B', text: "By closing stations that are not used much." },
      { key: 'C', text: "By giving discounts to users who return bikes to underused stations." },
      { key: 'D', text: "By limiting rides to downhill routes only." },
    ],
    correctKey: 'C',
    explanation: '本文最終文に"Some newer systems reward users with small discounts for returning bikes to underused stations"（新しいシステムの中には、利用の少ないステーションに自転車を返した利用者に小さな割引を与えるものがある）とあり、Cが正解。客自身を再配置の担い手に変える工夫です。A・B・Dは本文にありません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_089', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p5_7}

Why can invasive species multiply explosively in new regions?`,
    choices: [
      { key: 'A', text: "They often have no natural enemies there." },
      { key: 'B', text: "They are physically stronger than all native animals." },
      { key: 'C', text: "Local people usually feed and protect them." },
      { key: 'D', text: "New regions always have warmer climates." },
    ],
    correctKey: 'A',
    explanation: '本文冒頭に"to regions where they have no natural enemies, they can multiply explosively"（天敵のいない地域に運ばれると爆発的に増殖しうる）とあり、Aが正解。増殖の理由は天敵の不在です。B・C・Dはいずれも本文に記述がありません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_090', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p5_7}

What does the passage say about the brown tree snake?`,
    choices: [
      { key: 'A', text: "It chokes lakes and rivers across Africa." },
      { key: 'B', text: "It has wiped out most of Guam's native birds." },
      { key: 'C', text: "It was introduced as an ornamental pet." },
      { key: 'D', text: "It has been completely removed from the island." },
    ],
    correctKey: 'B',
    explanation: '本文に"The brown tree snake, accidentally brought to Guam on cargo ships, has wiped out most of the island\'s native birds"（貨物船で偶然グアムに持ち込まれたミナミオオガシラは、島の在来の鳥の大半を絶滅させた）とあり、Bが正解。Aはホテイアオイの説明、Cは観賞用植物として持ち込まれたのはホテイアオイであり、Dは本文にありません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_091', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p5_7}

Why do biologists say early detection is critical?`,
    choices: [
      { key: 'A', text: "Because ships can never be inspected at ports." },
      { key: 'B', text: "Because tourists enjoy watching invasive animals." },
      { key: 'C', text: "Because fully established invaders are cheap to remove." },
      { key: 'D', text: "Because a small population can sometimes be eliminated before it spreads." },
    ],
    correctKey: 'D',
    explanation: '本文最終文に"early detection is critical, because a small population can sometimes be eliminated before it spreads beyond control"（早期発見が重要なのは、小さな個体群なら手に負えなくなる前に排除できることがあるからだ）とあり、Dが正解。定着した侵入種の除去はしばしば不可能とされているためCは逆です。A・Bは本文にありません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_092', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p5_8}

Which benefit of telemedicine is mentioned in the passage?`,
    choices: [
      { key: 'A', text: "Cameras can now run blood tests automatically." },
      { key: 'B', text: "Elderly patients find the technology easiest to use." },
      { key: 'C', text: "Patients in remote areas can consult distant specialists." },
      { key: 'D', text: "All clinics can close their buildings permanently." },
    ],
    correctKey: 'C',
    explanation: '本文に"patients in remote villages can consult specialists hundreds of kilometers away"（遠隔地の村の患者が数百キロ離れた専門医に相談できる）とあり、Cが正解。Aは画面越しに血液検査はできないと明記されており誤り、Bは高齢の患者は技術に苦労することがあるとあり誤り、Dは本文にありません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_093', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p5_8}

In the passage, the word "routine" most closely means:`,
    choices: [
      { key: 'A', text: "ordinary and regular" },
      { key: 'B', text: "dangerous" },
      { key: 'C', text: "expensive" },
      { key: 'D', text: "forbidden" },
    ],
    correctKey: 'A',
    explanation: 'routineは「日常的な・ありふれた」という意味で、Aが正解。かつては珍しかった医師とのビデオ通話が、ほぼ一夜にして当たり前になった、という文脈です。dangerousは「危険な」、expensiveは「高価な」、forbiddenは「禁じられた」。名詞のroutine（決まりきった手順・日課）としてもよく使われます。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_094', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p5_8}

What future do most experts expect for telemedicine?`,
    choices: [
      { key: 'A', text: "All medical visits will eventually take place online." },
      { key: 'B', text: "A mix of online care for minor matters and in-person care for serious ones." },
      { key: 'C', text: "Telemedicine will disappear once the pandemic ends." },
      { key: 'D', text: "Most specialists will move to remote villages." },
    ],
    correctKey: 'B',
    explanation: '本文最終文に"a mixed future in which routine follow-ups and minor illnesses are handled online, while first visits and serious conditions still bring patients into the clinic"（定期的な経過観察や軽い病気はオンラインで、初診や重い症状は来院という混合型の未来）とあり、Bが正解。A・C・Dは本文の予想と一致しません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_095', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p5_9}

According to the passage, what problem do many cacao farmers face?`,
    choices: [
      { key: 'A', text: "Overproduction is lowering the quality of chocolate." },
      { key: 'B', text: "Their farms have grown too large to manage." },
      { key: 'C', text: "They must import cacao beans from other countries." },
      { key: 'D', text: "They live in poverty, receiving only a small share of chocolate prices." },
    ],
    correctKey: 'D',
    explanation: '本文に"many cacao farmers live in poverty, earning only a tiny share of the price of a chocolate bar"（多くのカカオ農家は貧困の中で暮らし、チョコレートバーの価格のごく一部しか得ていない）とあり、Dが正解。低収入が児童労働や保護林の伐採につながるとも述べられています。A・B・Cは本文にありません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_096', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p5_9}

In the passage, the word "trace" most closely means:`,
    choices: [
      { key: 'A', text: "taste carefully" },
      { key: 'B', text: "follow the origin or path of" },
      { key: 'C', text: "advertise widely" },
      { key: 'D', text: "mix with other ingredients" },
    ],
    correctKey: 'B',
    explanation: 'traceは「〜の出所や経路をたどる・追跡する」という意味で、Bが正解。チョコレート企業がカカオの産地を正確に追跡すると約束した、という文脈です。tasteは「味わう」、advertiseは「宣伝する」、mixは「混ぜる」。食品の流通経路を追跡できることをtraceability（トレーサビリティ）と呼びます。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_097', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p5_9}

What do campaigners advise shoppers who want to help cacao farmers?`,
    choices: [
      { key: 'A', text: "Choose chocolate with trusted certification labels and accept slightly higher prices." },
      { key: 'B', text: "Stop eating chocolate completely." },
      { key: 'C', text: "Always buy the cheapest chocolate bars available." },
      { key: 'D', text: "Try to grow cacao trees in their own gardens." },
    ],
    correctKey: 'A',
    explanation: '本文最終文に"should look for trusted certification labels and be willing to pay a little more"（信頼できる認証ラベルを探し、少し多めに支払うことをいとわないべきだ）とあり、Aが正解。Bのチョコレート断ちは勧められておらず、Cの最安値志向は農家の低収入問題を悪化させる方向で本文の趣旨に反します。Dは本文にありません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_098', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p5_10}

Why might taking notes by hand lead to better understanding?`,
    choices: [
      { key: 'A', text: "Pens are more comfortable to hold than keyboards." },
      { key: 'B', text: "Handwritten notes contain many more words." },
      { key: 'C', text: "Writers must summarize ideas in their own words, which forces deeper processing." },
      { key: 'D', text: "Typing has been shown to damage memory permanently." },
    ],
    correctKey: 'C',
    explanation: '本文に「手書きは遅いため、すべての文を書き写せず、書き手は考えを自分の言葉で要約し言い換えなければならない。それが内容のより深い処理を促す」とあり、Cが正解。Bはタイプした学生の方が多くの語を記録したとあり逆です。A・Dは本文に記述がありません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_099', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p5_10}

In the passage, the word "transcribing" most closely means:`,
    choices: [
      { key: 'A', text: "ignoring" },
      { key: 'B', text: "translating into another language" },
      { key: 'C', text: "deleting" },
      { key: 'D', text: "writing down exactly what is said" },
    ],
    correctKey: 'D',
    explanation: 'transcribeは「（話された言葉を）そのまま書き起こす」という意味で、Dが正解。タイプする学生は内容を考えずに講義をほぼ一言一句書き写してしまいがちだ、という文脈です。ignoreは「無視する」、translateは「翻訳する」、deleteは「削除する」。trans-（移す）+ scribe（書く）という語の成り立ちも覚えておきましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu5_100', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p5_10}

What do the researchers suggest at the end of the passage?`,
    choices: [
      { key: 'A', text: "Teaching students to take selective notes." },
      { key: 'B', text: "Banning computers from all classrooms." },
      { key: 'C', text: "Recording as many words as possible in lectures." },
      { key: 'D', text: "Replacing lectures with video materials." },
    ],
    correctKey: 'A',
    explanation: '本文最終文に「コンピュータを禁止すべきだとは結論づけず、代わりに選択的にノートを取ることを教えるよう提案している。利益を生むのはペンそのものではなく、要約するという頭の働きだからだ」とあり、Aが正解。Bは明確に否定されており、Cは一言一句の書き写しがむしろ問題とされているため誤り。Dは本文にありません。',
    difficulty: 'standard',
  },
];
