import type { EikenQuestion } from './eiken_questions';

// 英検2級 追加問題バンク4（語彙40問・文法30問・長文読解30問 = 100問）

const p4_1 = `When the pandemic forced millions of employees to work from home, many companies feared that productivity would collapse. Instead, several large surveys found that output remained stable or even rose slightly, while workers saved an average of nearly an hour a day by not commuting. Yet the picture is not entirely positive. Younger employees, in particular, report feeling isolated and worry that they miss chances to learn informally from senior colleagues. In response, a growing number of firms have adopted "hybrid" schedules, requiring staff to come to the office two or three days a week. Supporters say this arrangement combines the focus of home working with the creativity of face-to-face collaboration, though some researchers caution that its long-term effects remain unclear.`;

const p4_2 = `Beekeeping, once associated with the countryside, is now booming in cities such as Tokyo, Paris, and New York. Hotels and office buildings keep hives on their rooftops, and the honey is often served in their own restaurants or sold as souvenirs. Surprisingly, urban bees frequently produce more honey than their rural cousins because city parks and gardens offer a wide variety of flowers throughout the year, and farm pesticides are rarely used in urban areas. However, experts warn that enthusiasm has its limits. If too many hives are placed in one district, the bees may compete for nectar, and native wild insects could be pushed out. City governments are therefore beginning to require beekeepers to register their hives so that numbers can be managed.`;

const p4_3 = `For decades, students have been told that reviewing notes just before bed is a waste of time, but sleep scientists now disagree. During deep sleep, the brain replays and strengthens memories formed during the day, a process known as consolidation. In one experiment, participants who learned a list of word pairs and then slept for eight hours remembered significantly more than those who stayed awake for the same period. Researchers also found that losing even two hours of sleep reduced this benefit. The lesson for learners is clear: staying up all night to cram for an exam may allow you to recognize material the next morning, but much of it will fade quickly because the brain never had the chance to store it properly.`;

const p4_4 = `Roughly one third of all food produced worldwide is never eaten, and restaurants and bakeries throw away large quantities of unsold items every evening. To tackle this problem, several smartphone apps now connect shops with nearby customers shortly before closing time. Users pay a reduced price — often less than half — for a "surprise bag" of whatever remains, and collect it at the store. The shops recover part of their costs, customers enjoy cheap meals, and less food ends up in landfills, where it would produce methane, a powerful greenhouse gas. Critics point out, however, that such apps deal only with the final stage of the food chain; far more waste occurs earlier, on farms and during transportation, where fruit and vegetables are rejected simply for their appearance.`;

const p4_5 = `Electric vehicles are often described as "zero-emission," yet their environmental record depends heavily on their batteries. Mining lithium, cobalt, and nickel consumes enormous amounts of water and energy, sometimes in regions where water is already scarce. Once on the road, however, an electric car typically produces far less carbon dioxide over its lifetime than a gasoline car, especially in countries that generate electricity from renewable sources. The industry's next challenge is recycling. Today only a small percentage of used batteries are recycled, but new factories in Europe and Asia aim to recover more than ninety percent of the valuable metals inside. If they succeed, future batteries could be built largely from recycled materials, reducing the need for new mining.`;

const p4_6 = `Coral reefs cover less than one percent of the ocean floor, yet they support about a quarter of all marine species. Rising sea temperatures cause corals to expel the tiny algae that live inside them and give them both color and food — a process called bleaching, which can kill entire reefs if it lasts too long. Marine biologists are fighting back with "coral gardening": they grow fragments of heat-resistant corals in underwater nurseries and then transplant them onto damaged reefs. Early results in Australia and the Caribbean are encouraging, with transplanted corals surviving and even reproducing. Scientists stress, however, that gardening alone cannot save the reefs; unless the warming of the oceans is slowed, restored corals will eventually face the same fate as their predecessors.`;

const p4_7 = `Every year, thousands of travelers combine sightseeing with short-term volunteer work, teaching English or building houses in developing countries. Supporters argue that "voluntourism" brings money to poor communities and opens young people's eyes to global issues. Critics, however, question who really benefits. Unskilled volunteers who stay for only a week or two can take jobs away from local workers, and projects are sometimes designed more to satisfy visitors than to meet genuine local needs. Some orphanages have even been accused of keeping children in poor conditions to attract donations from sympathetic tourists. Experts advise would-be volunteers to choose programs run by organizations that employ local staff, operate long-term, and can explain exactly how the money they receive is spent.`;

const p4_8 = `Since electronic books first appeared, commentators have repeatedly predicted the death of print, yet paper books continue to sell strongly, especially among readers in their teens and twenties. Psychologists offer one explanation: studies suggest that people reading long or complicated texts on paper often remember the content slightly better, perhaps because the physical weight of the pages helps them sense where they are in the story. E-books have clear advantages of their own — instant delivery, adjustable print size, and the ability to carry a whole library on one device — which makes them popular with commuters and travelers. Rather than replacing each other, the two formats appear to be settling into different roles, with many readers choosing digital for convenience and paper for concentration.`;

const p4_9 = `As more information moves online, some politicians ask why cities should keep paying for public libraries. Librarians respond that lending books is now only a fraction of what they do. Modern libraries offer free internet access to those who cannot afford it, run language classes for immigrants, and provide quiet study space for students whose homes are crowded or noisy. During heat waves, they serve as cooling shelters for elderly residents. In many neighborhoods the library is the last indoor public space where no purchase is required, and researchers who study cities argue that such places strengthen communities by bringing together people of different ages and backgrounds. Closing them, supporters say, would save little money but cost a great deal in social connection.`;

const p4_10 = `Vertical farms grow vegetables indoors on tall stacks of shelves, using LED lights instead of sunshine and up to ninety-five percent less water than traditional fields. Because the environment is completely controlled, crops can be produced all year round, free from pesticides, right inside cities where the food is eaten — cutting transportation and its emissions dramatically. The technology, however, has an obvious weakness: electricity. Lighting and air conditioning consume so much power that many vertical farms struggle to make a profit, and if the electricity comes from fossil fuels, the environmental benefit largely disappears. For now, the business works best for fast-growing, high-value crops such as lettuce and herbs, while grains and fruit trees remain far cheaper to grow the traditional way.`;
export const eikenQuestions2kyu4: EikenQuestion[] = [
  // ===== VOCABULARY (001-040) =====
  {
    id: 'eiken_2kyu4_001', level: '2kyu', category: 'vocabulary',
    question: "The company had not ( ) such strong demand for its new product, and many stores sold out within days.",
    choices: [
      { key: 'A', text: "anticipated" },
      { key: 'B', text: "abandoned" },
      { key: 'C', text: "accompanied" },
      { key: 'D', text: "admired" },
    ],
    correctKey: 'A',
    explanation: '「anticipate（〜を予期する・見越す）」が正解。需要を予測していなかったため売り切れた、という文脈です。abandonは「〜を捨てる・断念する」、accompanyは「〜に同行する」、admireは「〜に感心する」でいずれも文意に合いません。関連語のexpectよりもanticipateは「予測して備える」ニュアンスが強い語です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_002', level: '2kyu', category: 'vocabulary',
    question: "At first, Mr. Tanaka was ( ) to accept the transfer to the overseas office, but he eventually agreed.",
    choices: [
      { key: 'A', text: "efficient" },
      { key: 'B', text: "previous" },
      { key: 'C', text: "grateful" },
      { key: 'D', text: "reluctant" },
    ],
    correctKey: 'D',
    explanation: '「be reluctant to do（〜するのに気が進まない）」が正解。「最初は気が進まなかったが最終的に同意した」という流れです。efficientは「効率的な」、previousは「以前の」、gratefulは「感謝している」。反対の意味はbe willing to do（快く〜する）です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_003', level: '2kyu', category: 'vocabulary',
    question: "Volunteers ( ) blankets and hot meals to the people who had lost their homes in the flood.",
    choices: [
      { key: 'A', text: "estimated" },
      { key: 'B', text: "distributed" },
      { key: 'C', text: "interrupted" },
      { key: 'D', text: "postponed" },
    ],
    correctKey: 'B',
    explanation: '「distribute（〜を配る・分配する）」が正解。被災者に毛布と温かい食事を配ったという文脈です。estimateは「〜を見積もる」、interruptは「〜をさえぎる」、postponeは「〜を延期する」。名詞形distribution（分配・流通）も頻出です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_004', level: '2kyu', category: 'vocabulary',
    question: "Because of the typhoon, the organizers decided to ( ) the outdoor concert until the following weekend.",
    choices: [
      { key: 'A', text: "attract" },
      { key: 'B', text: "divide" },
      { key: 'C', text: "postpone" },
      { key: 'D', text: "employ" },
    ],
    correctKey: 'C',
    explanation: '「postpone（〜を延期する）」が正解。until the following weekend（翌週末まで）が延期の手がかりです。attractは「〜を引きつける」、divideは「〜を分ける」、employは「〜を雇う」。put offもpostponeとほぼ同義の熟語です。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu4_005', level: '2kyu', category: 'vocabulary',
    question: "The research team could not draw a firm conclusion because they did not have ( ) data.",
    choices: [
      { key: 'A', text: "artificial" },
      { key: 'B', text: "temporary" },
      { key: 'C', text: "sufficient" },
      { key: 'D', text: "previous" },
    ],
    correctKey: 'C',
    explanation: '「sufficient（十分な）」が正解。データが十分でないため結論を出せなかった、という文脈です。artificialは「人工の」、temporaryは「一時的な」、previousは「以前の」。sufficientはenoughのややかたい同義語で、反意語はinsufficient（不十分な）です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_006', level: '2kyu', category: 'vocabulary',
    question: "The union will ( ) with the management over wages and working hours next month.",
    choices: [
      { key: 'A', text: "negotiate" },
      { key: 'B', text: "celebrate" },
      { key: 'C', text: "decorate" },
      { key: 'D', text: "imitate" },
    ],
    correctKey: 'A',
    explanation: '「negotiate with 〜 over ...（...について〜と交渉する）」が正解。労働組合が経営側と賃金について交渉する場面です。celebrateは「〜を祝う」、decorateは「〜を飾る」、imitateは「〜をまねる」。名詞形negotiation（交渉）もセットで覚えましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_007', level: '2kyu', category: 'vocabulary',
    question: "Lack of funding remains the biggest ( ) to completing the new stadium on schedule.",
    choices: [
      { key: 'A', text: "profit" },
      { key: 'B', text: "instrument" },
      { key: 'C', text: "laboratory" },
      { key: 'D', text: "obstacle" },
    ],
    correctKey: 'D',
    explanation: '「obstacle（障害・妨げ）」が正解。an obstacle to 〜（〜への障害）の形で使い、資金不足が完成の妨げになっているという文意です。profitは「利益」、instrumentは「楽器・器具」、laboratoryは「実験室」。類義語にbarrier、hindranceがあります。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_008', level: '2kyu', category: 'vocabulary',
    question: "After the operation, her health improved ( ), and she was able to walk again within two months.",
    choices: [
      { key: 'A', text: "scarcely" },
      { key: 'B', text: "gradually" },
      { key: 'C', text: "previously" },
      { key: 'D', text: "accidentally" },
    ],
    correctKey: 'B',
    explanation: '「gradually（徐々に・だんだんと）」が正解。手術後に健康が少しずつ回復したという文脈です。scarcelyは「ほとんど〜ない」、previouslyは「以前に」、accidentallyは「偶然に」。類義語はlittle by little、by degreesです。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu4_009', level: '2kyu', category: 'vocabulary',
    question: "The restaurant earned a ( ) for serving fresh seafood at reasonable prices.",
    choices: [
      { key: 'A', text: "departure" },
      { key: 'B', text: "reputation" },
      { key: 'C', text: "ceremony" },
      { key: 'D', text: "circumstance" },
    ],
    correctKey: 'B',
    explanation: '「reputation（評判・名声）」が正解。earn a reputation for 〜（〜で評判を得る）は頻出コロケーションです。departureは「出発」、ceremonyは「式典」、circumstanceは「状況」。have a good/bad reputationの形でもよく使われます。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_010', level: '2kyu', category: 'vocabulary',
    question: "The new security system is designed to ( ) the risk of unauthorized access to customer data.",
    choices: [
      { key: 'A', text: "translate" },
      { key: 'B', text: "congratulate" },
      { key: 'C', text: "eliminate" },
      { key: 'D', text: "exaggerate" },
    ],
    correctKey: 'C',
    explanation: '「eliminate（〜を取り除く・排除する）」が正解。不正アクセスの危険を取り除くためのシステムという文意です。translateは「〜を翻訳する」、congratulateは「〜を祝う」、exaggerateは「〜を誇張する」。eliminate the risk of 〜はビジネス文書でも頻出の表現です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_011', level: '2kyu', category: 'vocabulary',
    question: "Several people ( ) the accident and gave statements to the police.",
    choices: [
      { key: 'A', text: "witnessed" },
      { key: 'B', text: "purchased" },
      { key: 'C', text: "measured" },
      { key: 'D', text: "delivered" },
    ],
    correctKey: 'A',
    explanation: '「witness（〜を目撃する）」が正解。事故を目撃して警察に証言したという文脈です。purchaseは「〜を購入する」、measureは「〜を測る」、deliverは「〜を配達する」。witnessは名詞で「目撃者・証人」の意味もあり、こちらも頻出です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_012', level: '2kyu', category: 'vocabulary',
    question: "The doctor received an ( ) call from the hospital and had to leave the party early.",
    choices: [
      { key: 'A', text: "idle" },
      { key: 'B', text: "annual" },
      { key: 'C', text: "obvious" },
      { key: 'D', text: "urgent" },
    ],
    correctKey: 'D',
    explanation: '「urgent(緊急の)」が正解。緊急の呼び出しでパーティーを早退したという文意です。idleは「怠けた・使われていない」、annualは「年1回の」、obviousは「明らかな」。名詞形urgency（緊急性）、副詞urgently（緊急に）も覚えておきましょう。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu4_013', level: '2kyu', category: 'vocabulary',
    question: "The bookstore plans to ( ) its business by opening online shops in several countries.",
    choices: [
      { key: 'A', text: "refuse" },
      { key: 'B', text: "expand" },
      { key: 'C', text: "bury" },
      { key: 'D', text: "punish" },
    ],
    correctKey: 'B',
    explanation: '「expand（〜を拡大する）」が正解。オンライン店舗を開いて事業を拡大するという文脈です。refuseは「〜を拒む」、buryは「〜を埋める」、punishは「〜を罰する」。名詞形expansion（拡大）、類義語のextend（〜を延長する）との違いにも注意しましょう。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu4_014', level: '2kyu', category: 'vocabulary',
    question: "The famous actor decided to ( ) a large part of his income to children's hospitals.",
    choices: [
      { key: 'A', text: "waste" },
      { key: 'B', text: "borrow" },
      { key: 'C', text: "donate" },
      { key: 'D', text: "charge" },
    ],
    correctKey: 'C',
    explanation: '「donate（〜を寄付する）」が正解。donate A to B（AをBに寄付する）の形です。wasteは「〜を浪費する」、borrowは「〜を借りる」、chargeは「〜を請求する」。名詞形donation（寄付）、donor（寄付者・提供者）も頻出です。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu4_015', level: '2kyu', category: 'vocabulary',
    question: "The police found no ( ) that the man had been at the scene of the crime.",
    choices: [
      { key: 'A', text: "evidence" },
      { key: 'B', text: "appetite" },
      { key: 'C', text: "geography" },
      { key: 'D', text: "harvest" },
    ],
    correctKey: 'A',
    explanation: '「evidence（証拠）」が正解。男が犯行現場にいた証拠が見つからなかったという文意です。appetiteは「食欲」、geographyは「地理」、harvestは「収穫」。evidenceは不可算名詞なので、a piece of evidenceのように数える点にも注意しましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_016', level: '2kyu', category: 'vocabulary',
    question: "With the support of her family, she managed to ( ) her fear of speaking in public.",
    choices: [
      { key: 'A', text: "undergo" },
      { key: 'B', text: "obey" },
      { key: 'C', text: "decline" },
      { key: 'D', text: "overcome" },
    ],
    correctKey: 'D',
    explanation: '「overcome（〜を克服する）」が正解。人前で話す恐怖を克服したという文脈です。undergoは「（手術・変化など）を経験する」、obeyは「〜に従う」、declineは「〜を断る・減少する」。overcome difficulties（困難を乗り越える）などの形で頻出します。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_017', level: '2kyu', category: 'vocabulary',
    question: "The bridge repairs are only ( ); a full reconstruction will begin next spring.",
    choices: [
      { key: 'A', text: "permanent" },
      { key: 'B', text: "financial" },
      { key: 'C', text: "enormous" },
      { key: 'D', text: "temporary" },
    ],
    correctKey: 'D',
    explanation: '「temporary（一時的な）」が正解。来春に全面的な再建が始まるので、今の修理は一時的なものだという文意です。permanentは「永久的な」で正反対の意味、financialは「財政の」、enormousは「巨大な」。temporaryの副詞形はtemporarily（一時的に）です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_018', level: '2kyu', category: 'vocabulary',
    question: "There are five ( ) running for mayor in the election this fall.",
    choices: [
      { key: 'A', text: "refunds" },
      { key: 'B', text: "candidates" },
      { key: 'C', text: "souvenirs" },
      { key: 'D', text: "warehouses" },
    ],
    correctKey: 'B',
    explanation: '「candidate（候補者）」が正解。run for 〜（〜に立候補する）と合わせて、市長選に5人の候補者が立候補しているという文意です。refundは「払い戻し」、souvenirは「土産」、warehouseは「倉庫」。a candidate for 〜（〜の候補者）の形も覚えましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_019', level: '2kyu', category: 'vocabulary',
    question: "Please do not ( ) the speaker; there will be time for questions at the end.",
    choices: [
      { key: 'A', text: "obey" },
      { key: 'B', text: "admit" },
      { key: 'C', text: "interrupt" },
      { key: 'D', text: "export" },
    ],
    correctKey: 'C',
    explanation: '「interrupt（〜をさえぎる・邪魔する）」が正解。質問は最後に時間があるので、話し手の話を途中でさえぎらないでくださいという文意です。obeyは「〜に従う」、admitは「〜を認める」、exportは「〜を輸出する」。名詞形interruption（中断）も頻出です。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu4_020', level: '2kyu', category: 'vocabulary',
    question: "We had a new air conditioner ( ) in the meeting room last week.",
    choices: [
      { key: 'A', text: "inherited" },
      { key: 'B', text: "installed" },
      { key: 'C', text: "dismissed" },
      { key: 'D', text: "compared" },
    ],
    correctKey: 'B',
    explanation: '「install（〜を設置する・取り付ける）」が正解。have + 物 + 過去分詞（物を〜してもらう）の形で、エアコンを設置してもらったという文意です。inheritは「〜を相続する」、dismissは「〜を解雇する・退ける」、compareは「〜を比較する」。ソフトウェアを「インストールする」の意味でも使います。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_021', level: '2kyu', category: 'vocabulary',
    question: "Getting enough sleep the night before an exam is ( ) to performing well.",
    choices: [
      { key: 'A', text: "crucial" },
      { key: 'B', text: "guilty" },
      { key: 'C', text: "portable" },
      { key: 'D', text: "rude" },
    ],
    correctKey: 'A',
    explanation: '「crucial（極めて重要な）」が正解。be crucial to 〜（〜にとって極めて重要だ）の形で、十分な睡眠が良い成績に不可欠だという文意です。guiltyは「有罪の」、portableは「持ち運びできる」、rudeは「失礼な」。類義語はessential、vitalです。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_022', level: '2kyu', category: 'vocabulary',
    question: "Experts ( ) that the repairs to the old temple will cost more than fifty million yen.",
    choices: [
      { key: 'A', text: "estimate" },
      { key: 'B', text: "bury" },
      { key: 'C', text: "forbid" },
      { key: 'D', text: "worship" },
    ],
    correctKey: 'A',
    explanation: '「estimate（〜を見積もる・推定する）」が正解。修理費用が5000万円を超えると専門家が見積もっているという文意です。buryは「〜を埋める」、forbidは「〜を禁じる」、worshipは「〜を崇拝する」。名詞としてのestimate（見積もり）も頻出です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_023', level: '2kyu', category: 'vocabulary',
    question: "I always ask Keiko for help because she is the most ( ) person in our office.",
    choices: [
      { key: 'A', text: "fragile" },
      { key: 'B', text: "allergic" },
      { key: 'C', text: "extinct" },
      { key: 'D', text: "reliable" },
    ],
    correctKey: 'D',
    explanation: '「reliable（信頼できる）」が正解。いつも助けを求めるのは彼女が最も信頼できる人だからという文意です。fragileは「壊れやすい」、allergicは「アレルギーのある」、extinctは「絶滅した」。動詞rely on 〜（〜に頼る）、類義語dependable、trustworthyも覚えましょう。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu4_024', level: '2kyu', category: 'vocabulary',
    question: "The coach ( ) the importance of teamwork rather than individual skill.",
    choices: [
      { key: 'A', text: "dismissed" },
      { key: 'B', text: "soaked" },
      { key: 'C', text: "emphasized" },
      { key: 'D', text: "melted" },
    ],
    correctKey: 'C',
    explanation: '「emphasize（〜を強調する）」が正解。個人技よりチームワークの大切さを強調したという文意です。dismissは「〜を解雇する・退ける」、soakは「〜を浸す」、meltは「〜を溶かす」。名詞形emphasis（強調）を使ったput emphasis on 〜も頻出です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_025', level: '2kyu', category: 'vocabulary',
    question: "The bakery made a large ( ) last year by selling its bread to local hotels.",
    choices: [
      { key: 'A', text: "profit" },
      { key: 'B', text: "tragedy" },
      { key: 'C', text: "luggage" },
      { key: 'D', text: "sculpture" },
    ],
    correctKey: 'A',
    explanation: '「profit（利益）」が正解。make a profit（利益を上げる）は頻出コロケーションです。tragedyは「悲劇」、luggageは「手荷物」、sculptureは「彫刻」。形容詞profitable（利益になる）、反意語loss（損失）もあわせて覚えましょう。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu4_026', level: '2kyu', category: 'vocabulary',
    question: "After two years on a temporary contract, she was finally offered a ( ) position.",
    choices: [
      { key: 'A', text: "blank" },
      { key: 'B', text: "raw" },
      { key: 'C', text: "guilty" },
      { key: 'D', text: "permanent" },
    ],
    correctKey: 'D',
    explanation: '「permanent（常勤の・永続的な）」が正解。temporary contract（臨時契約）との対比で、正規の職を提示されたという文意です。blankは「空白の」、rawは「生の」、guiltyは「有罪の」。permanentとtemporaryは対で問われやすい形容詞です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_027', level: '2kyu', category: 'vocabulary',
    question: "In the past decade, smartphones have completely ( ) the way people communicate.",
    choices: [
      { key: 'A', text: "obeyed" },
      { key: 'B', text: "transformed" },
      { key: 'C', text: "buried" },
      { key: 'D', text: "harvested" },
    ],
    correctKey: 'B',
    explanation: '「transform（〜を一変させる・変容させる）」が正解。スマートフォンが人々のコミュニケーション方法をすっかり変えたという文意です。obeyは「〜に従う」、buryは「〜を埋める」、harvestは「〜を収穫する」。changeより大きく根本的な変化を表すのがtransformです。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_028', level: '2kyu', category: 'vocabulary',
    question: "After the long hike, everyone had a big ( ) and finished dinner quickly.",
    choices: [
      { key: 'A', text: "laundry" },
      { key: 'B', text: "costume" },
      { key: 'C', text: "appetite" },
      { key: 'D', text: "quarrel" },
    ],
    correctKey: 'C',
    explanation: '「appetite（食欲）」が正解。長いハイキングの後で食欲旺盛になり、夕食をすぐ平らげたという文意です。laundryは「洗濯物」、costumeは「衣装」、quarrelは「口論」。have a good/poor appetite（食欲がある/ない）の形で覚えましょう。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu4_029', level: '2kyu', category: 'vocabulary',
    question: "All participants must ( ) for the marathon by the end of June.",
    choices: [
      { key: 'A', text: "register" },
      { key: 'B', text: "retire" },
      { key: 'C', text: "rescue" },
      { key: 'D', text: "remind" },
    ],
    correctKey: 'A',
    explanation: '「register for 〜（〜に登録する・申し込む）」が正解。6月末までにマラソンへの参加登録をしなければならないという文意です。retireは「引退する」、rescueは「〜を救助する」、remindは「〜に思い出させる」。名詞形registration（登録）、類義表現sign up for 〜も頻出です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_030', level: '2kyu', category: 'vocabulary',
    question: "The population of the village has fallen by half over the past ( ).",
    choices: [
      { key: 'A', text: "length" },
      { key: 'B', text: "triangle" },
      { key: 'C', text: "decade" },
      { key: 'D', text: "address" },
    ],
    correctKey: 'C',
    explanation: '「decade（10年間）」が正解。over the past decade（過去10年間で）は頻出表現で、村の人口が半減したという文意です。lengthは「長さ」、triangleは「三角形」、addressは「住所」。century（100年）とあわせて期間を表す語として覚えましょう。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu4_031', level: '2kyu', category: 'vocabulary',
    question: "Naoko ( ) her parents to let her study abroad by showing them her detailed plan.",
    choices: [
      { key: 'A', text: "blamed" },
      { key: 'B', text: "persuaded" },
      { key: 'C', text: "scattered" },
      { key: 'D', text: "punished" },
    ],
    correctKey: 'B',
    explanation: '「persuade 人 to do（人を説得して〜させる）」が正解。詳しい計画を見せて両親を説得し、留学を許してもらったという文意です。blameは「〜を責める」、scatterは「〜をまき散らす」、punishは「〜を罰する」。反対に「説得して〜をやめさせる」はdiscourage 人 from -ingです。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_032', level: '2kyu', category: 'vocabulary',
    question: "The apartment on the third floor has been ( ) since the previous tenant moved out.",
    choices: [
      { key: 'A', text: "absent" },
      { key: 'B', text: "crowded" },
      { key: 'C', text: "guilty" },
      { key: 'D', text: "vacant" },
    ],
    correctKey: 'D',
    explanation: '「vacant（空いている・空室の）」が正解。前の入居者が退去して以来ずっと空室だという文意です。absentは「（人が）欠席して」の意味で部屋には使いません。crowdedは「混雑した」、guiltyは「有罪の」。名詞形vacancy（空室・欠員）もホテルの掲示などで頻出です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_033', level: '2kyu', category: 'vocabulary',
    question: "The software company will ( ) a new video-editing application next month.",
    choices: [
      { key: 'A', text: "launch" },
      { key: 'B', text: "witness" },
      { key: 'C', text: "interrupt" },
      { key: 'D', text: "educate" },
    ],
    correctKey: 'A',
    explanation: '「launch（〜を発売する・開始する）」が正解。新しい動画編集アプリを来月発売するという文意です。witnessは「〜を目撃する」、interruptは「〜をさえぎる」、educateは「〜を教育する」。launchは「ロケットを打ち上げる」「事業を立ち上げる」の意味でも頻出です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_034', level: '2kyu', category: 'vocabulary',
    question: "Be careful what you say to him — he is very ( ) about his weight.",
    choices: [
      { key: 'A', text: "artificial" },
      { key: 'B', text: "convenient" },
      { key: 'C', text: "distant" },
      { key: 'D', text: "sensitive" },
    ],
    correctKey: 'D',
    explanation: '「sensitive（敏感な・気にしやすい）」が正解。be sensitive about 〜（〜を気にしている）の形で、体重の話題に敏感だという文意です。artificialは「人工の」、convenientは「便利な」、distantは「遠い」。sensible（分別のある）との混同に注意しましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_035', level: '2kyu', category: 'vocabulary',
    question: "She moved to Tokyo to ( ) a career in fashion design.",
    choices: [
      { key: 'A', text: "escape" },
      { key: 'B', text: "pursue" },
      { key: 'C', text: "wander" },
      { key: 'D', text: "retire" },
    ],
    correctKey: 'B',
    explanation: '「pursue（〜を追求する）」が正解。pursue a career（キャリアを追い求める）は頻出コロケーションで、ファッションデザインの道に進むため上京したという文意です。escapeは「逃げる」、wanderは「歩き回る」、retireは「引退する」。名詞形pursuit（追求）も覚えましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_036', level: '2kyu', category: 'vocabulary',
    question: "The concert was canceled, so all ticket holders will receive a full ( ).",
    choices: [
      { key: 'A', text: "fare" },
      { key: 'B', text: "debt" },
      { key: 'C', text: "refund" },
      { key: 'D', text: "salary" },
    ],
    correctKey: 'C',
    explanation: '「refund（払い戻し・返金）」が正解。公演中止のため全額払い戻しを受けられるという文意です。fareは「（乗り物の）運賃」、debtは「借金」、salaryは「給料」。receive/get a refundやrefund（動詞：払い戻す）の形も頻出です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_037', level: '2kyu', category: 'vocabulary',
    question: "With both teams playing so defensively, a scoreless draw seemed ( ).",
    choices: [
      { key: 'A', text: "generous" },
      { key: 'B', text: "capable" },
      { key: 'C', text: "artificial" },
      { key: 'D', text: "inevitable" },
    ],
    correctKey: 'D',
    explanation: '「inevitable（避けられない・必然の）」が正解。両チームとも守備的なので、0対0の引き分けは避けられないように思われたという文意です。generousは「寛大な」、capableは「有能な」、artificialは「人工の」。動詞avoid（避ける）から派生したunavoidableも同義です。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu4_038', level: '2kyu', category: 'vocabulary',
    question: "Local volunteers are working hard to ( ) the town's traditional wooden houses.",
    choices: [
      { key: 'A', text: "witness" },
      { key: 'B', text: "preserve" },
      { key: 'C', text: "scold" },
      { key: 'D', text: "leak" },
    ],
    correctKey: 'B',
    explanation: '「preserve（〜を保存する・保護する）」が正解。伝統的な木造家屋を保存するために努力しているという文意です。witnessは「〜を目撃する」、scoldは「〜を叱る」、leakは「漏れる」。名詞形preservation（保存）、類義語conserve（保護する）も覚えましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_039', level: '2kyu', category: 'vocabulary',
    question: "The company changed its marketing ( ) to attract younger customers.",
    choices: [
      { key: 'A', text: "tragedy" },
      { key: 'B', text: "throat" },
      { key: 'C', text: "strategy" },
      { key: 'D', text: "ladder" },
    ],
    correctKey: 'C',
    explanation: '「strategy（戦略）」が正解。若い客層を引きつけるためにマーケティング戦略を変更したという文意です。tragedyは「悲劇」、throatは「のど」、ladderは「はしご」。形容詞strategic（戦略的な）、類義語tactics（戦術）もあわせて覚えましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_040', level: '2kyu', category: 'vocabulary',
    question: "( ) three hundred people attended the lecture, far more than the organizers expected.",
    choices: [
      { key: 'A', text: "Approximately" },
      { key: 'B', text: "Punctually" },
      { key: 'C', text: "Enormously" },
      { key: 'D', text: "Accidentally" },
    ],
    correctKey: 'A',
    explanation: '「approximately（およそ・約）」が正解。約300人が講演に参加したという文意で、数値の前に置いて概数を表します。punctuallyは「時間どおりに」、enormouslyは「非常に」、accidentallyは「偶然に」。aboutやroughlyのかたい同義語として覚えましょう。',
    difficulty: 'standard',
  },

  // ===== GRAMMAR (041-070) =====
  {
    id: 'eiken_2kyu4_041', level: '2kyu', category: 'grammar',
    question: "If I ( ) about the traffic jam, I would have taken the train instead.",
    choices: [
      { key: 'A', text: "knew" },
      { key: 'B', text: "had known" },
      { key: 'C', text: "have known" },
      { key: 'D', text: "know" },
    ],
    correctKey: 'B',
    explanation: '仮定法過去完了の文です。主節がwould have takenなので、if節は過去完了形had knownになります。「渋滞のことを知っていたら電車で行ったのに」と過去の事実と反対の仮定を表します。knewは仮定法過去（現在の仮定）、have known・knowは仮定法の形として不適切です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_042', level: '2kyu', category: 'grammar',
    question: "( ) from the top of the hill, the whole city looks like a miniature model.",
    choices: [
      { key: 'A', text: "Seen" },
      { key: 'B', text: "Seeing" },
      { key: 'C', text: "To seeing" },
      { key: 'D', text: "Saw" },
    ],
    correctKey: 'A',
    explanation: '分詞構文の問題です。主語the whole cityは「見られる」側なので、受動を表す過去分詞Seenが正解。「丘の上から見ると、街全体がミニチュア模型のように見える」の意味です。Seeingだと街が「見る」ことになり不自然。When it is seen from ...の省略形と考えると分かりやすいでしょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_043', level: '2kyu', category: 'grammar',
    question: "The scholarship gave her ( ) she needed most — time to focus on her research.",
    choices: [
      { key: 'A', text: "that" },
      { key: 'B', text: "which" },
      { key: 'C', text: "what" },
      { key: 'D', text: "whom" },
    ],
    correctKey: 'C',
    explanation: '関係代名詞whatは「〜するもの・こと」（= the thing which）の意味で、先行詞を含みます。ここでは空所の前に先行詞がないためwhatが正解。「奨学金は彼女が最も必要としていたもの、つまり研究に集中する時間を与えた」の意味です。that・which・whomは先行詞が必要なので使えません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_044', level: '2kyu', category: 'grammar',
    question: "Mr. Sato had his wallet ( ) while he was riding the crowded train.",
    choices: [
      { key: 'A', text: "steal" },
      { key: 'B', text: "stole" },
      { key: 'C', text: "stealing" },
      { key: 'D', text: "stolen" },
    ],
    correctKey: 'D',
    explanation: 'have + 目的語 + 過去分詞で「〜される（被害）」を表します。財布は「盗まれる」側なので過去分詞stolenが正解。「佐藤さんは混んだ電車で財布を盗まれた」という被害の表現です。have + 目的語 + 原形は「人に〜させる・してもらう」で、目的語が動作をする場合に使います。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_045', level: '2kyu', category: 'grammar',
    question: "I wish I ( ) more attention in my high school math classes.",
    choices: [
      { key: 'A', text: "pay" },
      { key: 'B', text: "have paid" },
      { key: 'C', text: "will pay" },
      { key: 'D', text: "had paid" },
    ],
    correctKey: 'D',
    explanation: 'I wish + 過去完了形で「〜していればよかったのに」と過去の事実と反対の願望を表します。「高校の数学の授業でもっと集中していればよかった」という後悔の意味なのでhad paidが正解。pay attention（注意を払う）はコロケーションとしても重要です。現在の願望ならI wish + 過去形を使います。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_046', level: '2kyu', category: 'grammar',
    question: "It's about time you ( ) thinking seriously about your future.",
    choices: [
      { key: 'A', text: "start" },
      { key: 'B', text: "started" },
      { key: 'C', text: "will start" },
      { key: 'D', text: "have started" },
    ],
    correctKey: 'B',
    explanation: 'It is (about) time + 主語 + 過去形で「もう〜してもよい頃だ」を表す仮定法の慣用表現です。形は過去形ですが現在のことを述べています。「そろそろ将来のことを真剣に考え始めてもいい頃だ」の意味でstartedが正解。原形や未来形は使えない点に注意しましょう。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu4_047', level: '2kyu', category: 'grammar',
    question: "( ) hard he tried, he could not remember where he had left his keys.",
    choices: [
      { key: 'A', text: "Whatever" },
      { key: 'B', text: "Whenever" },
      { key: 'C', text: "Whichever" },
      { key: 'D', text: "However" },
    ],
    correctKey: 'D',
    explanation: 'However + 形容詞/副詞 + 主語 + 動詞で「どんなに〜しても」を表します。「どんなに頑張っても、鍵をどこに置いたか思い出せなかった」の意味でHoweverが正解。直後に副詞hardが続くのがポイントです。Whateverは「何を〜しても」、Wheneverは「いつ〜しても」、Whicheverは「どちらを〜しても」で、hardと直接結びつきません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_048', level: '2kyu', category: 'grammar',
    question: "Having lived in London for ten years, she is used to ( ) on the left side of the road.",
    choices: [
      { key: 'A', text: "drive" },
      { key: 'B', text: "drove" },
      { key: 'C', text: "driving" },
      { key: 'D', text: "be driven" },
    ],
    correctKey: 'C',
    explanation: 'be used to -ing（〜することに慣れている）のtoは前置詞なので、後ろは動名詞drivingが正解。「ロンドンに10年住んでいたので左側通行の運転に慣れている」の意味です。used to + 原形（昔は〜したものだ）との区別が頻出ポイント。get used to -ing（〜に慣れる）もあわせて覚えましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_049', level: '2kyu', category: 'grammar',
    question: "The ground is wet everywhere. It ( ) rained heavily during the night.",
    choices: [
      { key: 'A', text: "must have" },
      { key: 'B', text: "should" },
      { key: 'C', text: "cannot" },
      { key: 'D', text: "may be" },
    ],
    correctKey: 'A',
    explanation: 'must have + 過去分詞で「〜したに違いない」と過去の出来事についての強い推量を表します。「地面が一面ぬれている。夜の間に激しく雨が降ったに違いない」の意味でmust haveが正解。shouldやcannotの後に直接rainedは続けられず、may beの後ろにも動詞の過去形は置けません。cannot have + 過去分詞（〜したはずがない）との対比も重要です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_050', level: '2kyu', category: 'grammar',
    question: "He is ( ) a scholar as a businessman who knows how to sell ideas.",
    choices: [
      { key: 'A', text: "not as much" },
      { key: 'B', text: "no more" },
      { key: 'C', text: "nothing but" },
      { key: 'D', text: "not so much" },
    ],
    correctKey: 'D',
    explanation: 'not so much A as B（AというよりむしろB）の構文です。「彼は学者というより、アイデアの売り込み方を知っているビジネスマンだ」の意味でnot so muchが正解。後ろのasと呼応する点がポイントです。nothing but（〜にすぎない）はasと呼応せず、no more、not as muchはこの形の定型表現ではありません。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu4_051', level: '2kyu', category: 'grammar',
    question: "You may borrow my camera ( ) you return it by Sunday.",
    choices: [
      { key: 'A', text: "unless" },
      { key: 'B', text: "in case" },
      { key: 'C', text: "provided that" },
      { key: 'D', text: "even if" },
    ],
    correctKey: 'C',
    explanation: 'provided that（〜という条件で・もし〜ならば）が正解。「日曜日までに返すという条件でカメラを貸してあげる」の意味です。unlessは「〜しない限り」で意味が逆になり、in caseは「〜する場合に備えて」、even ifは「たとえ〜でも」で文意に合いません。providing thatやon condition thatも同様の意味の表現です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_052', level: '2kyu', category: 'grammar',
    question: "By the time the firefighters arrived, the flames ( ) to the neighboring building.",
    choices: [
      { key: 'A', text: "have already spread" },
      { key: 'B', text: "had already spread" },
      { key: 'C', text: "are already spreading" },
      { key: 'D', text: "already spread" },
    ],
    correctKey: 'B',
    explanation: 'by the time + 過去形の節があるので、主節はそれより前に完了した動作を表す過去完了形had already spreadが正解。「消防士が到着した時までに、炎はすでに隣の建物に燃え広がっていた」の意味です。現在完了形や現在進行形は過去の基準時と合いません。過去完了は「過去のある時点より前」を表す時制です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_053', level: '2kyu', category: 'grammar',
    question: "It was not until she read the letter twice ( ) she understood its true meaning.",
    choices: [
      { key: 'A', text: "when" },
      { key: 'B', text: "which" },
      { key: 'C', text: "what" },
      { key: 'D', text: "that" },
    ],
    correctKey: 'D',
    explanation: 'It is not until A that B（Aして初めてBする）の強調構文です。「手紙を2度読んで初めて本当の意味が分かった」の意味でthatが正解。強調構文It is ... that 〜の一種で、not until以下が強調されています。when・which・whatはこの構文では使えません。倒置を使ったNot until she read the letter twice did she understand ...への書き換えも頻出です。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu4_054', level: '2kyu', category: 'grammar',
    question: "The author, ( ) novels have been translated into thirty languages, rarely appears in public.",
    choices: [
      { key: 'A', text: "who" },
      { key: 'B', text: "whose" },
      { key: 'C', text: "whom" },
      { key: 'D', text: "which" },
    ],
    correctKey: 'B',
    explanation: '空所の後ろに名詞novelsが続き、「その作家の小説」という所有関係を表すので、所有格の関係代名詞whoseが正解。「小説が30の言語に翻訳されているその作家は、めったに公の場に姿を見せない」という非制限用法の文です。whoは主格、whomは目的格、whichは物が先行詞の場合に使い、いずれも直後に無冠詞の名詞を従える形にはなりません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_055', level: '2kyu', category: 'grammar',
    question: "The thief seems ( ) the house through the kitchen window.",
    choices: [
      { key: 'A', text: "to have entered" },
      { key: 'B', text: "entering" },
      { key: 'C', text: "to be entered" },
      { key: 'D', text: "have entered" },
    ],
    correctKey: 'A',
    explanation: 'seem to have + 過去分詞で「〜したように見える」と、seemの時点より前の出来事を表します。「泥棒は台所の窓から侵入したようだ」の意味でto have enteredが正解。It seems that the thief entered ...と書き換えられます。to be enteredは受動態で意味が通らず、enteringやhave enteredはseemの後の形として文法的に誤りです。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu4_056', level: '2kyu', category: 'grammar',
    question: "The museum is well ( ) even if you have to wait in a long line.",
    choices: [
      { key: 'A', text: "visited" },
      { key: 'B', text: "to visit" },
      { key: 'C', text: "worthy visit" },
      { key: 'D', text: "worth visiting" },
    ],
    correctKey: 'D',
    explanation: 'be worth -ing（〜する価値がある）の慣用表現です。well worth -ingで「十分に〜する価値がある」となり、「長い列に並んででも訪れる価値が十分ある美術館だ」の意味でworth visitingが正解。worthの後ろは動名詞で、to不定詞は使えません。worthyofを使う場合はbe worthy of a visitの形になります。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_057', level: '2kyu', category: 'grammar',
    question: "Never ( ) such a beautiful sunset before moving to Okinawa.",
    choices: [
      { key: 'A', text: "I had seen" },
      { key: 'B', text: "had I seen" },
      { key: 'C', text: "I have seen" },
      { key: 'D', text: "have I saw" },
    ],
    correctKey: 'B',
    explanation: '否定の副詞Neverが文頭に出ると、後ろは疑問文と同じ語順（倒置）になります。before moving to Okinawa（沖縄に引っ越す前）という過去の基準があるので過去完了の倒置had I seenが正解。「沖縄に引っ越す前はそんなに美しい夕日を見たことがなかった」の意味です。have I sawは過去分詞でないsawを使っており文法的に誤りです。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu4_058', level: '2kyu', category: 'grammar',
    question: "Take an umbrella with you ( ) it rains on your way home.",
    choices: [
      { key: 'A', text: "so that" },
      { key: 'B', text: "as if" },
      { key: 'C', text: "now that" },
      { key: 'D', text: "in case" },
    ],
    correctKey: 'D',
    explanation: 'in case + 主語 + 動詞で「〜する場合に備えて」を表します。「帰り道に雨が降るといけないから傘を持って行きなさい」の意味でin caseが正解。so thatは「〜するように（目的）」、as ifは「まるで〜のように」、now thatは「今や〜なので」でいずれも文意に合いません。in case of + 名詞（〜の場合には）の形も頻出です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_059', level: '2kyu', category: 'grammar',
    question: "Whenever I see that video of the dancing cat, I cannot help ( ).",
    choices: [
      { key: 'A', text: "laugh" },
      { key: 'B', text: "to laugh" },
      { key: 'C', text: "laughing" },
      { key: 'D', text: "laughed" },
    ],
    correctKey: 'C',
    explanation: 'cannot help -ing（〜せずにはいられない）の慣用表現です。「その踊る猫の動画を見るたびに笑わずにはいられない」の意味でlaughingが正解。helpの後ろは動名詞を取ります。同じ意味のcannot but + 原形、cannot help but + 原形もあわせて覚えておくと書き換え問題に対応できます。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_060', level: '2kyu', category: 'grammar',
    question: "Kenji talks about Paris ( ) he had lived there for years, but he has never been abroad.",
    choices: [
      { key: 'A', text: "as if" },
      { key: 'B', text: "even though" },
      { key: 'C', text: "so that" },
      { key: 'D', text: "in order that" },
    ],
    correctKey: 'A',
    explanation: 'as if + 仮定法（まるで〜であるかのように）が正解。「ケンジはまるで何年も住んでいたかのようにパリについて語るが、海外に行ったことは一度もない」の意味です。had livedと仮定法過去完了になっているのは、実際には住んでいなかったからです。even thoughは「〜だけれども」、so that・in order thatは目的を表し、文意に合いません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_061', level: '2kyu', category: 'grammar',
    question: "The instructions were so ( ) that nobody could assemble the bookshelf.",
    choices: [
      { key: 'A', text: "confused" },
      { key: 'B', text: "confuse" },
      { key: 'C', text: "confusing" },
      { key: 'D', text: "confusion" },
    ],
    correctKey: 'C',
    explanation: '説明書は人を「混乱させる」側なので、現在分詞由来の形容詞confusing（分かりにくい・混乱させる）が正解。「説明書があまりに分かりにくくて誰も本棚を組み立てられなかった」というso ... that構文です。confusedは「（人が）混乱した」で人に使います。exciting/excited、boring/boredなど、-ing形と-ed形の使い分けは頻出ポイントです。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_062', level: '2kyu', category: 'grammar',
    question: "This is the hotel ( ) the peace conference was held in 1995.",
    choices: [
      { key: 'A', text: "which" },
      { key: 'B', text: "what" },
      { key: 'C', text: "whose" },
      { key: 'D', text: "where" },
    ],
    correctKey: 'D',
    explanation: '空所の後ろが完全な文（the peace conference was held）なので、関係副詞whereが正解。「これは1995年に平和会議が開かれたホテルです」の意味です。whichを使う場合はin whichのように前置詞が必要です。関係代名詞（which等）は後ろに不完全な文、関係副詞（where等）は後ろに完全な文が続くという見分け方を覚えましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_063', level: '2kyu', category: 'grammar',
    question: "The security guard spoke ( ) quickly for the tourists to understand.",
    choices: [
      { key: 'A', text: "so" },
      { key: 'B', text: "very" },
      { key: 'C', text: "too" },
      { key: 'D', text: "much" },
    ],
    correctKey: 'C',
    explanation: 'too ... for 人 to do（〜には...すぎて…できない）の構文です。「警備員の話し方は速すぎて観光客には理解できなかった」の意味でtooが正解。for the touristsはto understandの意味上の主語です。soを使う場合はso ... that構文（so quickly that the tourists could not understand）になります。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_064', level: '2kyu', category: 'grammar',
    question: "( ) the weather improves, the ferry service will remain suspended.",
    choices: [
      { key: 'A', text: "Unless" },
      { key: 'B', text: "Whether" },
      { key: 'C', text: "As if" },
      { key: 'D', text: "Now that" },
    ],
    correctKey: 'A',
    explanation: 'unless（〜しない限り）が正解。「天候が回復しない限り、フェリーの運航は見合わせが続く」の意味です。unlessはif ... notに相当する接続詞です。Whetherは「〜かどうか」でor notを伴うことが多く、As ifは「まるで〜のように」、Now thatは「今や〜なので」で、運休が続くという主節の内容とかみ合いません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_065', level: '2kyu', category: 'grammar',
    question: "You ( ) me you were coming — I would have prepared dinner.",
    choices: [
      { key: 'A', text: "must have told" },
      { key: 'B', text: "should have told" },
      { key: 'C', text: "cannot have told" },
      { key: 'D', text: "would tell" },
    ],
    correctKey: 'B',
    explanation: 'should have + 過去分詞で「〜すべきだったのに（しなかった）」という過去への非難・後悔を表します。「来るなら言ってくれればよかったのに。夕食を用意したのに」の意味でshould have toldが正解。must have + 過去分詞は「〜したに違いない」、cannot have + 過去分詞は「〜したはずがない」で、いずれも推量を表し文意に合いません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_066', level: '2kyu', category: 'grammar',
    question: "Would you mind ( ) the window? It's getting cold in here.",
    choices: [
      { key: 'A', text: "to close" },
      { key: 'B', text: "close" },
      { key: 'C', text: "closing" },
      { key: 'D', text: "closed" },
    ],
    correctKey: 'C',
    explanation: 'mindは動名詞を目的語に取る動詞なのでclosingが正解。Would you mind -ing?で「〜していただけませんか」という丁寧な依頼になります。「窓を閉めていただけませんか。ここは寒くなってきました」の意味です。mind・enjoy・finish・avoid・give upなどは動名詞のみを取る動詞としてまとめて覚えましょう。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu4_067', level: '2kyu', category: 'grammar',
    question: "( ) you practice, the more confident you will become on stage.",
    choices: [
      { key: 'A', text: "The more" },
      { key: 'B', text: "The most" },
      { key: 'C', text: "More" },
      { key: 'D', text: "The much" },
    ],
    correctKey: 'A',
    explanation: 'The + 比較級 ..., the + 比較級 ...（〜すればするほど、ますます…）の構文です。「練習すればするほど、舞台でますます自信が持てるようになる」の意味でThe moreが正解。後半のthe more confidentと呼応します。最上級のThe mostや、theのないMoreはこの構文では使えません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_068', level: '2kyu', category: 'grammar',
    question: "The suspect was seen ( ) the building shortly before the alarm went off.",
    choices: [
      { key: 'A', text: "leaving" },
      { key: 'B', text: "to leaving" },
      { key: 'C', text: "left" },
      { key: 'D', text: "leaves" },
    ],
    correctKey: 'A',
    explanation: '知覚動詞seeの受動態では、be seen -ing（〜しているところを見られる）またはbe seen to + 原形の形を取ります。ここでは現在分詞leavingが正解。「容疑者は警報が鳴る直前に建物を出るところを目撃された」の意味です。to leavingという形は存在せず、leftやleavesは受動態の後に直接続けられません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_069', level: '2kyu', category: 'grammar',
    question: "( ) his lack of experience, Daiki was chosen as the new team leader.",
    choices: [
      { key: 'A', text: "Although" },
      { key: 'B', text: "Despite" },
      { key: 'C', text: "However" },
      { key: 'D', text: "Because" },
    ],
    correctKey: 'B',
    explanation: '空所の後ろが名詞句（his lack of experience）なので、前置詞のDespite（〜にもかかわらず）が正解。「経験不足にもかかわらず、ダイキは新しいチームリーダーに選ばれた」の意味です。AlthoughとBecauseは接続詞なので後ろに主語+動詞が必要です。Howeverは副詞で名詞句を導けません。In spite ofもDespiteと同義です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_070', level: '2kyu', category: 'grammar',
    question: "( ) arrives first should turn on the heater and open the curtains.",
    choices: [
      { key: 'A', text: "Whoever" },
      { key: 'B', text: "Whatever" },
      { key: 'C', text: "However" },
      { key: 'D', text: "Whomever" },
    ],
    correctKey: 'A',
    explanation: '複合関係代名詞Whoever（〜する人は誰でも = anyone who）が正解。「最初に着いた人が誰であれ、ヒーターをつけてカーテンを開けるべきだ」の意味です。arrivesの主語になるので主格のWhoeverを使います。Whomeverは目的格なので主語になれません。Whateverは「〜するものは何でも」、Howeverは「どんなに〜でも」です。',
    difficulty: 'standard',
  },

  // ===== READING (071-100) =====
  {
    id: 'eiken_2kyu4_071', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_1}

According to the passage, what did surveys find about employees working from home?`,
    choices: [
      { key: 'A', text: "Their productivity fell sharply as companies had feared." },
      { key: 'B', text: "Their output stayed the same or increased slightly." },
      { key: 'C', text: "They spent more time commuting than before." },
      { key: 'D', text: "Most of them refused to return to the office." },
    ],
    correctKey: 'B',
    explanation: '本文第2文に"several large surveys found that output remained stable or even rose slightly"（複数の大規模調査で生産量は安定するかわずかに上昇したことが分かった）とあり、Bが正解。Aは企業が恐れていた内容で実際の結果とは逆、Cは通勤時間をむしろ節約したとあり、Dは本文に記述がありません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_072', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_1}

In the passage, the word "isolated" most closely means:`,
    choices: [
      { key: 'A', text: "promoted" },
      { key: 'B', text: "exhausted" },
      { key: 'C', text: "relaxed" },
      { key: 'D', text: "lonely and cut off from others" },
    ],
    correctKey: 'D',
    explanation: 'isolatedは「孤立した・切り離された」という意味です。若手社員が在宅勤務で孤独を感じ、先輩から学ぶ機会を失うことを心配しているという文脈からもDが正解。promotedは「昇進した」、exhaustedは「疲れ果てた」、relaxedは「くつろいだ」で文脈に合いません。名詞形isolation（孤立）も頻出です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_073', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_1}

What can be inferred about hybrid schedules from the passage?`,
    choices: [
      { key: 'A', text: "Researchers are not yet certain how well they will work over time." },
      { key: 'B', text: "They have been proven to reduce creativity." },
      { key: 'C', text: "Most companies have already abandoned them." },
      { key: 'D', text: "They require employees to work from home every day." },
    ],
    correctKey: 'A',
    explanation: '本文最終文に"some researchers caution that its long-term effects remain unclear"（長期的な影響はまだ不明だと研究者は注意を促している）とあり、Aが正解。Bは支持者が創造性との組み合わせを主張しているので逆、Cは「採用する企業が増えている」とあり矛盾、Dはハイブリッド勤務が週2〜3日の出社を求めるものなので誤りです。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_074', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_2}

Why do urban bees often produce more honey than rural bees?`,
    choices: [
      { key: 'A', text: "Rooftop hives keep the bees warmer in winter." },
      { key: 'B', text: "City bees belong to a stronger species." },
      { key: 'C', text: "Cities offer varied flowers all year and few pesticides are used." },
      { key: 'D', text: "Rural beekeepers collect honey less frequently." },
    ],
    correctKey: 'C',
    explanation: '本文に"city parks and gardens offer a wide variety of flowers throughout the year, and farm pesticides are rarely used in urban areas"（都市の公園や庭は一年中多様な花を提供し、農薬もほとんど使われない）と理由が明記されており、Cが正解。A・B・Dはいずれも本文に記述がありません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_075', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_2}

In the passage, the word "enthusiasm" most closely means:`,
    choices: [
      { key: 'A', text: "criticism" },
      { key: 'B', text: "strong interest and excitement" },
      { key: 'C', text: "financial investment" },
      { key: 'D', text: "scientific research" },
    ],
    correctKey: 'B',
    explanation: 'enthusiasmは「熱意・熱中」という意味で、Bの「強い興味と興奮」が最も近い言い換えです。都市養蜂ブームへの熱意にも限度がある、という文脈です。criticismは「批判」、financial investmentは「金銭的投資」、scientific researchは「科学研究」。形容詞enthusiastic（熱心な）、be enthusiastic about 〜も頻出です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_076', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_2}

According to the passage, what are city governments beginning to do?`,
    choices: [
      { key: 'A', text: "Ban rooftop hives in business districts." },
      { key: 'B', text: "Sell honey produced in public parks." },
      { key: 'C', text: "Import wild insects to compete with bees." },
      { key: 'D', text: "Require beekeepers to register their hives." },
    ],
    correctKey: 'D',
    explanation: '本文最終文に"City governments are therefore beginning to require beekeepers to register their hives so that numbers can be managed"（巣箱の数を管理できるよう、養蜂家に登録を義務づけ始めている）とあり、Dが正解。禁止（A）ではなく登録による管理である点がポイントです。B・Cは本文に記述がありません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_077', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_3}

According to the passage, what happens during deep sleep?`,
    choices: [
      { key: 'A', text: "The brain replays and strengthens the day's memories." },
      { key: 'B', text: "The brain erases unnecessary word pairs." },
      { key: 'C', text: "Memories are transferred into written notes." },
      { key: 'D', text: "The brain almost completely stops working." },
    ],
    correctKey: 'A',
    explanation: '本文に"During deep sleep, the brain replays and strengthens memories formed during the day"（深い睡眠中、脳は日中に形成された記憶を再生して強化する）とあり、Aが正解。この過程はconsolidation（固定化）と呼ばれると説明されています。B・C・Dはいずれも本文の内容と一致しません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_078', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_3}

In the passage, the word "cram" most closely means:`,
    choices: [
      { key: 'A', text: "exercise lightly" },
      { key: 'B', text: "sleep deeply" },
      { key: 'C', text: "study intensively in a short time" },
      { key: 'D', text: "forget on purpose" },
    ],
    correctKey: 'C',
    explanation: 'cramは「詰め込み勉強をする」という意味で、Cの「短時間で集中的に勉強する」が正解。staying up all night to cram for an exam（試験のために徹夜で詰め込む）という文脈からも判断できます。日本語の「一夜漬け」に相当する表現です。もともとcramには「詰め込む」という意味があります。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_079', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_3}

What does the writer suggest about staying up all night before an exam?`,
    choices: [
      { key: 'A', text: "It is the best way to prepare for a morning exam." },
      { key: 'B', text: "Much of what is learned will soon be forgotten." },
      { key: 'C', text: "It improves deep sleep the following night." },
      { key: 'D', text: "It helps only with learning word pairs." },
    ],
    correctKey: 'B',
    explanation: '本文最終文に「徹夜で詰め込めば翌朝は内容を認識できるかもしれないが、脳が適切に記憶を保存する機会がなかったため、多くはすぐに消えてしまう」とあり、Bが正解。Aは本文の主張と正反対、C・Dは本文に記述がありません。睡眠が記憶の定着に不可欠だというのが本文全体の主旨です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_080', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_4}

How do the smartphone apps described in the passage work?`,
    choices: [
      { key: 'A', text: "They deliver fresh ingredients directly from farms." },
      { key: 'B', text: "They donate all unsold food to charities." },
      { key: 'C', text: "They predict how much food a shop will sell each day." },
      { key: 'D', text: "They let customers buy leftover food cheaply near closing time." },
    ],
    correctKey: 'D',
    explanation: '本文に「閉店時間の少し前に店と近くの客をつなぎ、利用者は割引価格で残り物の入ったサプライズバッグを買い、店で受け取る」と説明されており、Dが正解。Aの産地直送、Bの寄付、Cの販売予測はいずれもこのアプリの仕組みとして本文に書かれていません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_081', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_4}

According to critics, what is a weakness of these apps?`,
    choices: [
      { key: 'A', text: "They address only the last stage of the food chain." },
      { key: 'B', text: "They raise prices for regular customers." },
      { key: 'C', text: "They increase methane emissions from landfills." },
      { key: 'D', text: "They encourage farms to grow too many vegetables." },
    ],
    correctKey: 'A',
    explanation: '本文最終文に"such apps deal only with the final stage of the food chain; far more waste occurs earlier"（こうしたアプリはフードチェーンの最終段階しか扱っておらず、廃棄の大半はもっと早い段階で起きている）とあり、Aが正解。Bの値上げ、Dの過剰生産の助長は本文になく、Cは埋立地のメタンをむしろ減らすとあるので逆です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_082', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_4}

In the passage, the word "rejected" most closely means:`,
    choices: [
      { key: 'A', text: "harvested" },
      { key: 'B', text: "transported" },
      { key: 'C', text: "refused or thrown out" },
      { key: 'D', text: "repackaged" },
    ],
    correctKey: 'C',
    explanation: 'rejectedは「拒否された・はねられた」という意味で、Cが正解。果物や野菜が見た目だけを理由に出荷からはねられ廃棄される、という文脈です。harvestedは「収穫された」、transportedは「輸送された」、repackagedは「再包装された」。動詞reject（〜を拒む）は、acceptの反意語として覚えましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_083', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_5}

According to the passage, mining metals for batteries:`,
    choices: [
      { key: 'A', text: "produces no carbon dioxide at all." },
      { key: 'B', text: "uses large amounts of water and energy." },
      { key: 'C', text: "takes place only in European countries." },
      { key: 'D', text: "is no longer necessary because of recycling." },
    ],
    correctKey: 'B',
    explanation: '本文に"Mining lithium, cobalt, and nickel consumes enormous amounts of water and energy"（リチウム・コバルト・ニッケルの採掘は莫大な水とエネルギーを消費する）とあり、Bが正解。Cの採掘地域の限定は本文になく、Dはリサイクルがまだ一部にとどまると書かれているため誤り。Aも本文からは読み取れません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_084', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_5}

In the passage, the word "scarce" most closely means:`,
    choices: [
      { key: 'A', text: "polluted" },
      { key: 'B', text: "expensive" },
      { key: 'C', text: "frozen" },
      { key: 'D', text: "in short supply" },
    ],
    correctKey: 'D',
    explanation: 'scarceは「乏しい・不足している」という意味で、Dの「供給が不足している」が正解。「水がすでに乏しい地域で採掘が行われることもある」という文脈です。pollutedは「汚染された」、expensiveは「高価な」、frozenは「凍った」。名詞形scarcity（不足）、類義語のshort・insufficientもあわせて覚えましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_085', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_5}

What is hoped about future batteries, according to the passage?`,
    choices: [
      { key: 'A', text: "They will be smaller than gasoline engines." },
      { key: 'B', text: "They will contain more cobalt than today's batteries." },
      { key: 'C', text: "They could be made largely from recycled materials." },
      { key: 'D', text: "They will never need to be replaced." },
    ],
    correctKey: 'C',
    explanation: '本文最終文に"future batteries could be built largely from recycled materials, reducing the need for new mining"（将来の電池は大部分をリサイクル材料から作れるようになり、新規採掘の必要性を減らせる）とあり、Cが正解。新工場は金属の90%以上の回収を目指しているという記述が根拠です。A・B・Dは本文にありません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_086', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_6}

According to the passage, what is coral bleaching?`,
    choices: [
      { key: 'A', text: "Corals expel the algae that give them color and food." },
      { key: 'B', text: "Divers remove seaweed from damaged reefs." },
      { key: 'C', text: "Nurseries grow white corals for aquariums." },
      { key: 'D', text: "Algae eat fragments of transplanted coral." },
    ],
    correctKey: 'A',
    explanation: '本文に「海水温の上昇によりサンゴは体内に住み、色と栄養を与えてくれる小さな藻類を追い出してしまう。これが白化（bleaching）と呼ばれる過程だ」とあり、Aが正解。expelは「追い出す」の意味です。B・C・Dはいずれも本文の白化の説明と一致しません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_087', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_6}

In the passage, the word "transplant" most closely means:`,
    choices: [
      { key: 'A', text: "photograph carefully" },
      { key: 'B', text: "move and attach to a new place" },
      { key: 'C', text: "freeze for long-term storage" },
      { key: 'D', text: "sell to overseas buyers" },
    ],
    correctKey: 'B',
    explanation: 'transplantは「移植する」という意味で、Bの「移動させて新しい場所に定着させる」が正解。海中の苗床で育てたサンゴの断片を傷んだ礁に移植する、という文脈です。trans-（別の場所へ）+ plant（植える）という語の成り立ちから推測できます。臓器移植（organ transplant）の意味でも頻出の語です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_088', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_6}

What do scientists say about coral gardening?`,
    choices: [
      { key: 'A', text: "It has failed everywhere it has been tried." },
      { key: 'B', text: "It is a complete solution to reef damage." },
      { key: 'C', text: "It works only in the Caribbean." },
      { key: 'D', text: "It cannot succeed in the long run unless ocean warming slows." },
    ],
    correctKey: 'D',
    explanation: '本文最終文に「ガーデニングだけでは礁を救えない。海洋の温暖化が減速しない限り、再生されたサンゴもいずれ同じ運命をたどる」とあり、Dが正解。Aはオーストラリアとカリブ海で良好な初期結果が出ているため誤り、Bは「それだけでは救えない」と明言されており誤り、Cは2地域で成果があるため誤りです。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_089', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_7}

According to critics, what is one problem with voluntourism?`,
    choices: [
      { key: 'A', text: "Volunteers usually stay in one place for too many years." },
      { key: 'B', text: "It brings no money at all to local communities." },
      { key: 'C', text: "Short-term unskilled volunteers may take work away from local people." },
      { key: 'D', text: "Teaching English abroad is prohibited in most countries." },
    ],
    correctKey: 'C',
    explanation: '本文に"Unskilled volunteers who stay for only a week or two can take jobs away from local workers"（1〜2週間しか滞在しない未熟練のボランティアは地元労働者から仕事を奪いかねない）とあり、Cが正解。Aは滞在が短いことが問題なので逆、Bは支持者が地域にお金をもたらすと主張しており本文と矛盾、Dは本文にありません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_090', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_7}

In the passage, the word "genuine" most closely means:`,
    choices: [
      { key: 'A', text: "real" },
      { key: 'B', text: "temporary" },
      { key: 'C', text: "foreign" },
      { key: 'D', text: "expensive" },
    ],
    correctKey: 'A',
    explanation: 'genuineは「本物の・真の」という意味で、Aのrealが最も近い言い換えです。「プロジェクトが地元の真のニーズを満たすためというより、訪問者を満足させるために設計されることがある」という文脈です。temporaryは「一時的な」、foreignは「外国の」、expensiveは「高価な」。類義語にauthentic（本物の）があります。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_091', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_7}

What do experts advise people who want to volunteer abroad?`,
    choices: [
      { key: 'A', text: "Avoid all volunteer programs in developing countries." },
      { key: 'B', text: "Choose organizations with local staff, long-term operations, and clear spending." },
      { key: 'C', text: "Donate money directly to orphanages instead of visiting." },
      { key: 'D', text: "Volunteer only in their own home countries." },
    ],
    correctKey: 'B',
    explanation: '本文最終文に「地元スタッフを雇い、長期的に活動し、受け取ったお金の使い道を正確に説明できる団体のプログラムを選ぶよう専門家は助言している」とあり、Bが正解。Aの全面回避やDの国内限定は助言されておらず、Cは孤児院が寄付集めのために子どもを劣悪な環境に置く例が批判されているため不適切です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_092', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_8}

According to the passage, what do studies suggest about reading on paper?`,
    choices: [
      { key: 'A', text: "Young readers strongly dislike paper books." },
      { key: 'B', text: "E-books help people remember stories better." },
      { key: 'C', text: "Print books will disappear within a decade." },
      { key: 'D', text: "Readers of long texts on paper may remember the content slightly better." },
    ],
    correctKey: 'D',
    explanation: '本文に"people reading long or complicated texts on paper often remember the content slightly better"（長い文章や複雑な文章を紙で読む人は内容をやや良く記憶していることが多い）とあり、Dが正解。ページの物理的な重みが物語のどこにいるかを感じる助けになる、という理由も述べられています。A・B・Cは本文と矛盾します。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_093', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_8}

In the passage, the word "formats" most closely means:`,
    choices: [
      { key: 'A', text: "bookstores" },
      { key: 'B', text: "authors" },
      { key: 'C', text: "forms in which something is produced" },
      { key: 'D', text: "reading speeds" },
    ],
    correctKey: 'C',
    explanation: 'formatは「形式・形態」という意味で、Cの「何かが作られる形」が正解。ここでのthe two formatsは電子書籍と紙の書籍という2つの形態を指しています。bookstoreは「書店」、authorは「著者」、reading speedは「読む速さ」で、いずれも文脈に合いません。データの「フォーマット」としても使われる語です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_094', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_8}

What is the main idea of the passage?`,
    choices: [
      { key: 'A', text: "E-books and paper books are coming to serve different purposes." },
      { key: 'B', text: "E-books have no advantages over paper books." },
      { key: 'C', text: "Paper books are now bought only by elderly readers." },
      { key: 'D', text: "Commuters have stopped reading books entirely." },
    ],
    correctKey: 'A',
    explanation: '本文最終文に"Rather than replacing each other, the two formats appear to be settling into different roles"（互いに取って代わるのではなく、2つの形態は異なる役割に落ち着きつつある）とあり、これが本文全体の主旨です。Aが正解。Bは電子書籍の利点（即時配信・文字サイズ調整など）が挙げられており誤り、Cは紙の本は10代20代にもよく売れているとあり誤り、Dは本文にありません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_095', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_9}

According to the passage, what do modern libraries do besides lending books?`,
    choices: [
      { key: 'A', text: "They sell coffee to raise money for new buildings." },
      { key: 'B', text: "They offer free internet access, language classes, and study space." },
      { key: 'C', text: "They charge entrance fees during heat waves." },
      { key: 'D', text: "They publish local newspapers for elderly residents." },
    ],
    correctKey: 'B',
    explanation: '本文に「現代の図書館は、インターネットを利用できない人への無料アクセス、移民向けの語学教室、家が狭かったり騒がしかったりする学生のための静かな学習スペースを提供している」とあり、Bが正解。猛暑の際には高齢者の避暑シェルターにもなるが、入場料を取るとは書かれていないためCは誤り。A・Dも本文にありません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_096', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_9}

In the passage, the word "fraction" most closely means:`,
    choices: [
      { key: 'A', text: "an official duty" },
      { key: 'B', text: "a serious problem" },
      { key: 'C', text: "a small part" },
      { key: 'D', text: "a written rule" },
    ],
    correctKey: 'C',
    explanation: 'fractionは「ごく一部・断片」という意味で、Cが正解。「本の貸し出しは今や図書館の仕事のほんの一部にすぎない」という文脈です。数学では「分数」の意味でも使われます。official dutyは「公式の義務」、serious problemは「深刻な問題」、written ruleは「成文の規則」で、いずれも文脈に合いません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_097', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_9}

Why do researchers who study cities value public libraries?`,
    choices: [
      { key: 'A', text: "They raise the value of nearby properties." },
      { key: 'B', text: "They train young people to become librarians." },
      { key: 'C', text: "They reduce the amount cities spend on schools." },
      { key: 'D', text: "They strengthen communities by bringing different people together." },
    ],
    correctKey: 'D',
    explanation: '本文に"researchers who study cities argue that such places strengthen communities by bringing together people of different ages and backgrounds"（都市を研究する学者は、そうした場所は年齢や背景の異なる人々を結びつけることで地域社会を強くすると主張している）とあり、Dが正解。A・B・Cはいずれも本文に記述がありません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_098', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_10}

Which advantage of vertical farms is mentioned in the passage?`,
    choices: [
      { key: 'A', text: "They use far less water than traditional farming." },
      { key: 'B', text: "They operate without any electricity." },
      { key: 'C', text: "They can grow grains more cheaply than fields." },
      { key: 'D', text: "They depend entirely on natural sunlight." },
    ],
    correctKey: 'A',
    explanation: '本文冒頭に"using LED lights instead of sunshine and up to ninety-five percent less water than traditional fields"（太陽光の代わりにLED照明を使い、従来の畑より最大95%少ない水で栽培する）とあり、Aが正解。Bは電力消費の大きさが弱点とされており逆、Cは穀物は従来農法の方がはるかに安いとあり誤り、Dは太陽光ではなくLEDを使うため誤りです。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_099', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_10}

In the passage, the word "obvious" most closely means:`,
    choices: [
      { key: 'A', text: "hidden" },
      { key: 'B', text: "temporary" },
      { key: 'C', text: "acceptable" },
      { key: 'D', text: "easy to see or understand" },
    ],
    correctKey: 'D',
    explanation: 'obviousは「明らかな・誰の目にも明白な」という意味で、Dが正解。「この技術には明白な弱点、すなわち電力の問題がある」という文脈です。hiddenは「隠れた」で正反対、temporaryは「一時的な」、acceptableは「許容できる」。副詞obviously（明らかに）、類義語clear・evidentもあわせて覚えましょう。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu4_100', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_10}

According to the passage, which crops are best suited to vertical farms at present?`,
    choices: [
      { key: 'A', text: "Fruit trees such as apples and oranges." },
      { key: 'B', text: "Grains such as rice and wheat." },
      { key: 'C', text: "Fast-growing, high-value crops such as lettuce and herbs." },
      { key: 'D', text: "Root vegetables such as potatoes." },
    ],
    correctKey: 'C',
    explanation: '本文最終文に"the business works best for fast-growing, high-value crops such as lettuce and herbs"（この事業はレタスやハーブのような成長が早く付加価値の高い作物に最も適している）とあり、Cが正解。穀物や果樹は従来の方法で育てる方がはるかに安いと述べられているため、A・Bは誤り。Dのイモ類は本文にありません。',
    difficulty: 'standard',
  },
];
