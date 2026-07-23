import type { EikenQuestion } from './eiken_questions';

// 英検2級 追加問題バンク6（語彙40問・文法30問・長文読解30問 = 100問）

const p6_1 = `Online shopping has made home delivery a part of daily life, and some companies believe the next step is to hand the job to flying drones. In trials, small packages such as medicine and hot food have been dropped off within minutes of being ordered, and supporters say drones could be especially valuable for people living on islands or in mountain villages with few delivery drivers. Serious obstacles remain, however. Drones cannot yet carry heavy loads, bad weather grounds them easily, and residents worry about noise and privacy as cameras pass over their gardens. Aviation authorities also strictly limit flights over crowded areas for safety reasons. For the time being, most experts expect drones to serve remote regions and emergencies first, while vans and bicycles continue to handle ordinary city deliveries.`;

const p6_2 = `From Chicago to Singapore, city governments are encouraging builders to cover rooftops with plants. These "green roofs" absorb rainwater, which reduces the flooding that occurs when storms overwhelm drainage systems, and the layer of soil and vegetation insulates the building, cutting heating and cooling costs. On a larger scale, thousands of planted roofs can lower the temperature of an entire neighborhood, easing the "heat island" effect that makes summer in the city several degrees hotter than in the surrounding countryside. The main obstacles are cost and weight: a roof must be strong enough to support wet soil, and installation can be expensive. To overcome this, some cities now offer subsidies or require green roofs only on large new buildings, where the extra cost is a small share of the total budget.`;

const p6_3 = `Anyone who has jogged with headphones knows that the right song can make a hard run feel easier, and sports scientists have confirmed the effect in the laboratory. Music with a strong, steady beat helps athletes keep a regular rhythm, distracts them from feelings of tiredness, and can improve endurance by a small but measurable amount. The benefit is greatest in repetitive activities such as running, cycling, and rowing, where movements can be matched to the tempo. Interestingly, elite athletes appear to gain less than beginners, perhaps because they are trained to listen closely to their bodies rather than block signals out. Some competitions actually ban headphones — partly for safety on open roads, and partly because officials consider music a form of artificial assistance.`;

const p6_4 = `Fashion has never been cheaper or faster. Some chains design, produce, and deliver a new garment in as little as two weeks, encouraging shoppers to treat clothes as almost disposable. The environmental price is high: the fashion industry consumes enormous quantities of water, and mountains of barely worn clothing end up burned or buried in landfills every year. Growing criticism has pushed brands to announce recycling programs and clothing collection boxes, but investigators have found that only a small portion of collected garments is actually turned into new clothes; much is shipped overseas, where it can overwhelm local secondhand markets. Campaigners argue that the real solution lies with consumers themselves: buying fewer, better-made items, repairing them, and wearing them for years rather than months.`;

const p6_5 = `Before booking a hotel or trying a new restaurant, most consumers now read online reviews written by strangers — and businesses know it. A difference of half a star can measurably change a shop's income, which creates a strong temptation to cheat. Some companies pay people to post glowing reviews of their own products or harsh ones about competitors, and researchers estimate that a significant share of reviews on major platforms is fake. Websites fight back with software that spots suspicious patterns, such as bursts of five-star ratings within hours, or reviewers who praise dozens of unrelated businesses in the same week. Consumer groups advise readers to be skeptical of extreme opinions, to pay most attention to detailed reviews that mention both good and bad points, and to check whether a reviewer has a history of balanced comments.`;

const p6_6 = `Seaweed farming is one of the fastest-growing forms of aquaculture, and its supporters believe it could help feed the world while healing the oceans. Unlike land crops, seaweed needs no fresh water, no fertilizer, and no farmland; it simply grows on ropes hanging in the sea, absorbing carbon dioxide and excess nutrients that would otherwise cause harmful algae blooms. The harvest is used not only in food but also in cosmetics, animal feed, and even experimental packaging designed to replace plastic film. Scientists are testing whether adding a small amount of certain seaweeds to cattle feed can sharply cut the methane the animals produce. Challenges remain — warming seas stress some species, and processing facilities are scarce in many regions — but investment in the industry is rising rapidly.`;

const p6_7 = `A growing number of European cities have closed their historic centers to private cars, allowing only buses, bicycles, delivery vehicles, and pedestrians. Shop owners often protest at first, fearing that customers who cannot park nearby will go elsewhere. Studies in several cities, however, tell a different story: pedestrians and cyclists tend to visit more often and stay longer than drivers, and street-level businesses frequently see sales rise after cars are removed. Air quality improves, traffic accidents fall, and cafes spread tables across former parking spaces. The transition must be managed carefully — deliveries need time slots, and people with limited mobility require exceptions and good public transport — but few cities that have pedestrianized their centers have chosen to reverse the change.`;

const p6_8 = `Coffee is grown mainly in a narrow belt of tropical highlands, and the two species that dominate world trade are surprisingly delicate. Arabica, prized for its flavor, thrives only in cool mountain climates; as temperatures rise, suitable land is shifting higher up the slopes, and some studies warn that half of today's coffee-growing areas could become unsuitable by 2050. Farmers are responding by planting shade trees to cool their fields, breeding more heat-resistant varieties, and in some regions switching to robusta, a tougher species with a harsher taste. Scientists have also rediscovered forgotten wild species that tolerate heat far better than arabica, though bringing them into commercial production will take years. For coffee drinkers, the likely future is not the disappearance of their morning cup, but higher prices and changing flavors.`;

const p6_9 = `Armed with a laptop and a stable internet connection, a new class of workers has cut the link between job and location. These "digital nomads" write code, design websites, or teach languages online while moving from country to country, often staying a few months in each. Dozens of governments, from Portugal to Indonesia, now offer special visas to attract them, hoping the newcomers will spend their foreign salaries in local restaurants and apartments. The arrangement is not without friction. In some popular destinations, landlords have discovered they can earn far more renting to nomads than to residents, pushing up housing costs for local families. Some cities are therefore pairing nomad visas with rules on short-term rentals, trying to capture the economic benefits while protecting their own citizens.`;

const p6_10 = `On one Saturday each month, volunteers in hundreds of towns gather in community halls with screwdrivers, sewing machines, and soldering irons. At these "repair cafes," residents bring broken toasters, torn jackets, and silent radios, and fix them together with skilled helpers free of charge. The movement, which began in Amsterdam in 2009, aims to reduce waste, but organizers say the social effects matter just as much: elderly engineers pass on skills that schools no longer teach, and neighbors who had never spoken become friends over a shared repair. Manufacturers have taken notice, too. Campaigners linked to the movement have pushed several governments to adopt "right to repair" laws, which require companies to sell spare parts and publish repair manuals so that products are not thrown away simply because no one knows how to open them.`;

export const eikenQuestions2kyu6: EikenQuestion[] = [
  // ===== VOCABULARY (001-040) =====
  {
    id: 'eiken_2kyu6_001', level: '2kyu', category: 'vocabulary',
    question: "You need to ( ) a permit before fishing in this river.",
    choices: [
      { key: 'A', text: "bury" },
      { key: 'B', text: "melt" },
      { key: 'C', text: "scold" },
      { key: 'D', text: "obtain" },
    ],
    correctKey: 'D',
    explanation: '「obtain（〜を取得する・入手する）」が正解。この川で釣りをする前に許可証を取得する必要があるという文意です。buryは「〜を埋める」、meltは「〜を溶かす」、scoldは「〜を叱る」。obtainはgetのかたい同義語で、obtain permission/a license（許可・免許を得る）の形で頻出します。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_002', level: '2kyu', category: 'vocabulary',
    question: "Students in the biology class ( ) the behavior of ants for a week.",
    choices: [
      { key: 'A', text: "postponed" },
      { key: 'B', text: "observed" },
      { key: 'C', text: "interrupted" },
      { key: 'D', text: "exported" },
    ],
    correctKey: 'B',
    explanation: '「observe（〜を観察する）」が正解。生物の授業でアリの行動を1週間観察したという文意です。postponeは「〜を延期する」、interruptは「〜をさえぎる」、exportは「〜を輸出する」。名詞形observation（観察）、observeには「（規則を）守る」の意味もある点も覚えましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_003', level: '2kyu', category: 'vocabulary',
    question: "Many residents ( ) the plan to build a factory near the elementary school.",
    choices: [
      { key: 'A', text: "oppose" },
      { key: 'B', text: "obey" },
      { key: 'C', text: "melt" },
      { key: 'D', text: "dig" },
    ],
    correctKey: 'A',
    explanation: '「oppose（〜に反対する）」が正解。小学校の近くに工場を建てる計画に多くの住民が反対しているという文意です。opposeは他動詞なので前置詞なしで目的語を取ります。obeyは「〜に従う」、meltは「〜を溶かす」、digは「〜を掘る」。be opposed to 〜、名詞形opposition（反対）も頻出です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_004', level: '2kyu', category: 'vocabulary',
    question: "More than fifty companies will ( ) in the job fair next month.",
    choices: [
      { key: 'A', text: "apologize" },
      { key: 'B', text: "graduate" },
      { key: 'C', text: "participate" },
      { key: 'D', text: "hesitate" },
    ],
    correctKey: 'C',
    explanation: '「participate in 〜（〜に参加する）」が正解。来月の就職フェアに50社以上が参加するという文意です。apologizeは「謝る」、graduateは「卒業する」、hesitateは「ためらう」。同義の熟語take part in 〜、名詞形participant（参加者）、participation（参加）もあわせて覚えましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_005', level: '2kyu', category: 'vocabulary',
    question: "The young pianist has the ( ) to become a world-class performer.",
    choices: [
      { key: 'A', text: "potential" },
      { key: 'B', text: "laundry" },
      { key: 'C', text: "refund" },
      { key: 'D', text: "throat" },
    ],
    correctKey: 'A',
    explanation: '「potential（潜在能力・可能性）」が正解。have the potential to do（〜する潜在能力がある）の形で、若いピアニストには世界的な演奏家になる素質があるという文意です。laundryは「洗濯物」、refundは「払い戻し」、throatは「のど」。形容詞として「潜在的な」（potential customers = 見込み客）の用法も頻出です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_006', level: '2kyu', category: 'vocabulary',
    question: "It is difficult to ( ) exactly when the volcano will erupt again.",
    choices: [
      { key: 'A', text: "decorate" },
      { key: 'B', text: "celebrate" },
      { key: 'C', text: "predict" },
      { key: 'D', text: "imitate" },
    ],
    correctKey: 'C',
    explanation: '「predict（〜を予測する）」が正解。火山が次にいつ噴火するかを正確に予測するのは難しいという文意です。decorateは「〜を飾る」、celebrateは「〜を祝う」、imitateは「〜をまねる」。pre-（前もって）+ dict（言う）という成り立ちで、名詞形prediction（予測）、類義語forecastも頻出です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_007', level: '2kyu', category: 'vocabulary',
    question: "Smoking is strictly ( ) anywhere inside the hospital building.",
    choices: [
      { key: 'A', text: "divided" },
      { key: 'B', text: "attracted" },
      { key: 'C', text: "employed" },
      { key: 'D', text: "prohibited" },
    ],
    correctKey: 'D',
    explanation: '「prohibit（〜を禁止する）」の受動態が正解。病院の建物内では喫煙が厳しく禁じられているという文意です。divideは「〜を分ける」、attractは「〜を引きつける」、employは「〜を雇う」。prohibit 人 from -ing（人が〜するのを禁じる）、類義語ban・forbidもあわせて覚えましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_008', level: '2kyu', category: 'vocabulary',
    question: "The city started a campaign to ( ) recycling among young people.",
    choices: [
      { key: 'A', text: "punish" },
      { key: 'B', text: "promote" },
      { key: 'C', text: "bury" },
      { key: 'D', text: "interrupt" },
    ],
    correctKey: 'B',
    explanation: '「promote（〜を促進する・奨励する）」が正解。若者の間でリサイクルを促進するキャンペーンを市が始めたという文意です。punishは「〜を罰する」、buryは「〜を埋める」、interruptは「〜をさえぎる」。promoteには「〜を昇進させる」の意味もあり、名詞形promotion（促進・昇進）も頻出です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_009', level: '2kyu', category: 'vocabulary',
    question: "Mr. Ito is always ( ), so it is strange that he has not arrived yet.",
    choices: [
      { key: 'A', text: "absent" },
      { key: 'B', text: "jealous" },
      { key: 'C', text: "punctual" },
      { key: 'D', text: "guilty" },
    ],
    correctKey: 'C',
    explanation: '「punctual（時間を守る）」が正解。いつも時間に正確な伊藤さんがまだ到着していないのは変だという文意です。absentは「欠席の」、jealousは「嫉妬した」、guiltyは「有罪の」。be punctual for 〜（〜に時間どおりに来る）、副詞punctually、名詞punctuality（時間厳守）も覚えましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_010', level: '2kyu', category: 'vocabulary',
    question: "Tickets ( ) online are ten percent cheaper than those bought at the door.",
    choices: [
      { key: 'A', text: "purchased" },
      { key: 'B', text: "scolded" },
      { key: 'C', text: "melted" },
      { key: 'D', text: "obeyed" },
    ],
    correctKey: 'A',
    explanation: '「purchase（〜を購入する）」の過去分詞が正解。Tickets purchased online（オンラインで購入されたチケット）と後ろから名詞を修飾する形で、窓口購入より10%安いという文意です。scoldは「〜を叱る」、meltは「〜を溶かす」、obeyは「〜に従う」。purchaseはbuyのかたい同義語で、名詞「購入」としても使います。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_011', level: '2kyu', category: 'vocabulary',
    question: "Winning this match will ( ) our team for the national tournament.",
    choices: [
      { key: 'A', text: "bury" },
      { key: 'B', text: "qualify" },
      { key: 'C', text: "scold" },
      { key: 'D', text: "soak" },
    ],
    correctKey: 'B',
    explanation: '「qualify A for B（AにBへの出場資格を与える）」が正解。この試合に勝てばチームは全国大会への出場資格を得るという文意です。buryは「〜を埋める」、scoldは「〜を叱る」、soakは「〜を浸す」。be qualified for 〜（〜の資格がある）、名詞形qualification（資格）も頻出です。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu6_012', level: '2kyu', category: 'vocabulary',
    question: "The recipe requires only a small ( ) of sugar.",
    choices: [
      { key: 'A', text: "appetite" },
      { key: 'B', text: "tragedy" },
      { key: 'C', text: "triangle" },
      { key: 'D', text: "quantity" },
    ],
    correctKey: 'D',
    explanation: '「quantity（量）」が正解。a small quantity of 〜（少量の〜）の形で、レシピには少量の砂糖しか必要ないという文意です。appetiteは「食欲」、tragedyは「悲劇」、triangleは「三角形」。a large quantity of 〜（大量の〜）、対になる語quality（質）とセットで覚えましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_013', level: '2kyu', category: 'vocabulary',
    question: "It took him several months to ( ) from the knee operation.",
    choices: [
      { key: 'A', text: "apologize" },
      { key: 'B', text: "recover" },
      { key: 'C', text: "graduate" },
      { key: 'D', text: "hesitate" },
    ],
    correctKey: 'B',
    explanation: '「recover from 〜（〜から回復する）」が正解。膝の手術から回復するのに数か月かかったという文意です。apologizeは「謝る」、graduateは「卒業する」、hesitateは「ためらう」。名詞形recovery（回復）、make a full recovery（完全に回復する）もあわせて覚えましょう。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_014', level: '2kyu', category: 'vocabulary',
    question: "The store ( ) its prices by twenty percent during the summer sale.",
    choices: [
      { key: 'A', text: "buried" },
      { key: 'B', text: "obeyed" },
      { key: 'C', text: "scolded" },
      { key: 'D', text: "reduced" },
    ],
    correctKey: 'D',
    explanation: '「reduce（〜を減らす・下げる）」が正解。夏のセール中に価格を20%下げたという文意です。by twenty percentのbyは差の程度を表します。buryは「〜を埋める」、obeyは「〜に従う」、scoldは「〜を叱る」。名詞形reduction（削減・値下げ）、類義語decrease・lowerも頻出です。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_015', level: '2kyu', category: 'vocabulary',
    question: "Hiroshi ( ) not studying harder when he was a university student.",
    choices: [
      { key: 'A', text: "decorates" },
      { key: 'B', text: "exports" },
      { key: 'C', text: "regrets" },
      { key: 'D', text: "melts" },
    ],
    correctKey: 'C',
    explanation: '「regret -ing（〜したことを後悔する）」が正解。大学生の時にもっと勉強しなかったことを後悔しているという文意です。decorateは「〜を飾る」、exportは「〜を輸出する」、meltは「〜を溶かす」。regret to say（残念ながら〜と言う）との意味の違い、名詞形regret（後悔）も覚えましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_016', level: '2kyu', category: 'vocabulary',
    question: "The patient made a ( ) recovery and left the hospital in just one week.",
    choices: [
      { key: 'A', text: "remarkable" },
      { key: 'B', text: "guilty" },
      { key: 'C', text: "jealous" },
      { key: 'D', text: "absent" },
    ],
    correctKey: 'A',
    explanation: '「remarkable（驚くべき・著しい）」が正解。わずか1週間で退院できるほどの目覚ましい回復という文意です。guiltyは「有罪の」、jealousは「嫉妬した」、absentは「欠席の」。動詞remark（述べる）+ -able（〜できる）で「注目に値する」が原義。副詞remarkably（著しく）も頻出です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_017', level: '2kyu', category: 'vocabulary',
    question: "This song always ( ) me of the summer I spent in Hokkaido.",
    choices: [
      { key: 'A', text: "repairs" },
      { key: 'B', text: "buries" },
      { key: 'C', text: "scolds" },
      { key: 'D', text: "reminds" },
    ],
    correctKey: 'D',
    explanation: '「remind A of B（AにBを思い出させる）」が正解。この歌を聞くといつも北海道で過ごした夏を思い出すという文意です。repairは「〜を修理する」、buryは「〜を埋める」、scoldは「〜を叱る」。remind 人 to do（人に〜することを思い出させる）の形もあわせて覚えましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_018', level: '2kyu', category: 'vocabulary',
    question: "We need to ( ) the batteries in the smoke alarm twice a year.",
    choices: [
      { key: 'A', text: "apologize" },
      { key: 'B', text: "graduate" },
      { key: 'C', text: "replace" },
      { key: 'D', text: "hesitate" },
    ],
    correctKey: 'C',
    explanation: '「replace（〜を交換する）」が正解。火災報知器の電池は年2回交換する必要があるという文意です。apologizeは「謝る」、graduateは「卒業する」、hesitateは「ためらう」。replace A with B（AをBと取り替える）、名詞形replacement（交換・後任）も頻出です。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_019', level: '2kyu', category: 'vocabulary',
    question: "The job ( ) at least three years of experience in sales.",
    choices: [
      { key: 'A', text: "melts" },
      { key: 'B', text: "requires" },
      { key: 'C', text: "buries" },
      { key: 'D', text: "obeys" },
    ],
    correctKey: 'B',
    explanation: '「require（〜を必要とする）」が正解。その仕事には少なくとも3年の営業経験が必要だという文意です。meltは「〜を溶かす」、buryは「〜を埋める」、obeyは「〜に従う」。require 人 to do（人に〜するよう要求する）、名詞形requirement（必要条件）もあわせて覚えましょう。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_020', level: '2kyu', category: 'vocabulary',
    question: "Naomi closely ( ) her grandmother when she smiles.",
    choices: [
      { key: 'A', text: "resembles" },
      { key: 'B', text: "scolds" },
      { key: 'C', text: "exports" },
      { key: 'D', text: "decorates" },
    ],
    correctKey: 'A',
    explanation: '「resemble（〜に似ている）」が正解。笑うとナオミは祖母によく似ているという文意です。resembleは他動詞なので前置詞なしで目的語を取り、進行形にしない点が重要です。scoldは「〜を叱る」、exportは「〜を輸出する」、decorateは「〜を飾る」。類義表現look like 〜、take after 〜も覚えましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_021', level: '2kyu', category: 'vocabulary',
    question: "I called the restaurant to ( ) a table for six people.",
    choices: [
      { key: 'A', text: "bury" },
      { key: 'B', text: "melt" },
      { key: 'C', text: "reserve" },
      { key: 'D', text: "scold" },
    ],
    correctKey: 'C',
    explanation: '「reserve（〜を予約する）」が正解。6人分の席を予約するためにレストランに電話したという文意です。buryは「〜を埋める」、meltは「〜を溶かす」、scoldは「〜を叱る」。名詞形reservation（予約）、make a reservation（予約する）、類義語book（〜を予約する）も頻出です。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_022', level: '2kyu', category: 'vocabulary',
    question: "The minister was forced to ( ) after the scandal became public.",
    choices: [
      { key: 'A', text: "decorate" },
      { key: 'B', text: "resign" },
      { key: 'C', text: "imitate" },
      { key: 'D', text: "celebrate" },
    ],
    correctKey: 'B',
    explanation: '「resign（辞任する）」が正解。スキャンダルが明るみに出た後、大臣は辞任に追い込まれたという文意です。decorateは「〜を飾る」、imitateは「〜をまねる」、celebrateは「〜を祝う」。resign from 〜（〜を辞める）、名詞形resignation（辞任・辞表）もあわせて覚えましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_023', level: '2kyu', category: 'vocabulary',
    question: "Water is a precious ( ) that should never be wasted.",
    choices: [
      { key: 'A', text: "resource" },
      { key: 'B', text: "refund" },
      { key: 'C', text: "costume" },
      { key: 'D', text: "triangle" },
    ],
    correctKey: 'A',
    explanation: '「resource（資源）」が正解。水は決して無駄にしてはならない貴重な資源だという文意です。refundは「払い戻し」、costumeは「衣装」、triangleは「三角形」。natural resources（天然資源）、human resources（人材・人事）などの形で頻出します。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_024', level: '2kyu', category: 'vocabulary',
    question: "The company failed to ( ) to customer complaints quickly enough.",
    choices: [
      { key: 'A', text: "bury" },
      { key: 'B', text: "melt" },
      { key: 'C', text: "scold" },
      { key: 'D', text: "respond" },
    ],
    correctKey: 'D',
    explanation: '「respond to 〜（〜に対応する・返答する）」が正解。会社は顧客の苦情に十分すばやく対応できなかったという文意です。buryは「〜を埋める」、meltは「〜を溶かす」、scoldは「〜を叱る」。名詞形response（返答・反応）、類義語reply to 〜もあわせて覚えましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_025', level: '2kyu', category: 'vocabulary',
    question: "Experts worked for years to ( ) the damaged painting to its original condition.",
    choices: [
      { key: 'A', text: "restore" },
      { key: 'B', text: "punish" },
      { key: 'C', text: "interrupt" },
      { key: 'D', text: "export" },
    ],
    correctKey: 'A',
    explanation: '「restore A to B（AをBの状態に戻す・修復する）」が正解。損傷した絵画を元の状態に修復するために専門家が何年も作業したという文意です。punishは「〜を罰する」、interruptは「〜をさえぎる」、exportは「〜を輸出する」。名詞形restoration（修復・復元）も美術・建築の文章で頻出です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_026', level: '2kyu', category: 'vocabulary',
    question: "The company gave her a special ( ) for her twenty years of service.",
    choices: [
      { key: 'A', text: "throat" },
      { key: 'B', text: "laundry" },
      { key: 'C', text: "tragedy" },
      { key: 'D', text: "reward" },
    ],
    correctKey: 'D',
    explanation: '「reward（報酬・ほうび）」が正解。20年間の勤続に対して特別な報酬を贈ったという文意です。throatは「のど」、laundryは「洗濯物」、tragedyは「悲劇」。a reward for 〜（〜に対する報酬）、動詞reward（〜に報いる）、award（賞）との違いにも注意しましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_027', level: '2kyu', category: 'vocabulary',
    question: "Doctors are badly needed in ( ) areas far from big cities.",
    choices: [
      { key: 'A', text: "guilty" },
      { key: 'B', text: "jealous" },
      { key: 'C', text: "rural" },
      { key: 'D', text: "absent" },
    ],
    correctKey: 'C',
    explanation: '「rural（田舎の・農村の）」が正解。大都市から遠く離れた農村部では医師が非常に不足しているという文意です。guiltyは「有罪の」、jealousは「嫉妬した」、absentは「欠席の」。反意語urban（都市の）とセットで覚えましょう。rural areas（農村部）は社会問題の文章で頻出です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_028', level: '2kyu', category: 'vocabulary',
    question: "The manager was not ( ) with the quality of the report.",
    choices: [
      { key: 'A', text: "buried" },
      { key: 'B', text: "satisfied" },
      { key: 'C', text: "melted" },
      { key: 'D', text: "employed" },
    ],
    correctKey: 'B',
    explanation: '「be satisfied with 〜（〜に満足している）」が正解。部長は報告書の出来に満足していなかったという文意です。buryは「〜を埋める」、meltは「〜を溶かす」、employは「〜を雇う」。名詞形satisfaction（満足）、形容詞satisfactory（満足のいく）、satisfying（満足感を与える）も頻出です。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_029', level: '2kyu', category: 'vocabulary',
    question: "The region suffered from a ( ) water shortage last summer.",
    choices: [
      { key: 'A', text: "punctual" },
      { key: 'B', text: "severe" },
      { key: 'C', text: "portable" },
      { key: 'D', text: "jealous" },
    ],
    correctKey: 'B',
    explanation: '「severe（深刻な・厳しい）」が正解。昨年の夏、その地域は深刻な水不足に苦しんだという文意です。punctualは「時間を守る」、portableは「持ち運びできる」、jealousは「嫉妬した」。severe weather（悪天候）、severe pain（激しい痛み）など、程度の激しさを表す形容詞として頻出します。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_030', level: '2kyu', category: 'vocabulary',
    question: "Many hospitals are facing a serious ( ) of nurses.",
    choices: [
      { key: 'A', text: "shortage" },
      { key: 'B', text: "ceremony" },
      { key: 'C', text: "souvenir" },
      { key: 'D', text: "triangle" },
    ],
    correctKey: 'A',
    explanation: '「shortage（不足）」が正解。多くの病院が深刻な看護師不足に直面しているという文意です。ceremonyは「式典」、souvenirは「土産」、triangleは「三角形」。a shortage of 〜（〜の不足）の形で使い、labor shortage（人手不足）は時事的な文章でも頻出です。形容詞short（不足した）から派生した語です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_031', level: '2kyu', category: 'vocabulary',
    question: "Scientists found a ( ) difference between the two groups in the experiment.",
    choices: [
      { key: 'A', text: "guilty" },
      { key: 'B', text: "absent" },
      { key: 'C', text: "jealous" },
      { key: 'D', text: "significant" },
    ],
    correctKey: 'D',
    explanation: '「significant（重要な・意味のある・かなりの）」が正解。実験で2つのグループの間に有意な差が見つかったという文意です。guiltyは「有罪の」、absentは「欠席の」、jealousは「嫉妬した」。a significant difference/increase（大きな差・増加）の形で科学的な文章に頻出します。副詞significantly（著しく）も重要です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_032', level: '2kyu', category: 'vocabulary',
    question: "This movie contains violent scenes and is not ( ) for small children.",
    choices: [
      { key: 'A', text: "previous" },
      { key: 'B', text: "absent" },
      { key: 'C', text: "suitable" },
      { key: 'D', text: "guilty" },
    ],
    correctKey: 'C',
    explanation: '「suitable（適した・ふさわしい）」が正解。be suitable for 〜（〜に適している）の形で、暴力的な場面を含むため小さな子どもには適さない映画だという文意です。previousは「以前の」、absentは「欠席の」、guiltyは「有罪の」。動詞suit（〜に合う）、類義語appropriate・properも覚えましょう。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_033', level: '2kyu', category: 'vocabulary',
    question: "The charity sent food and medical ( ) to the disaster area.",
    choices: [
      { key: 'A', text: "appetites" },
      { key: 'B', text: "refunds" },
      { key: 'C', text: "throats" },
      { key: 'D', text: "supplies" },
    ],
    correctKey: 'D',
    explanation: '「supplies（物資・必需品）」が正解。慈善団体が被災地に食料と医療物資を送ったという文意です。medical supplies（医療物資）、school supplies（学用品）のように複数形で「物資」を表します。appetiteは「食欲」、refundは「払い戻し」、throatは「のど」。動詞supply（〜を供給する）、supply and demand（需要と供給）も頻出です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_034', level: '2kyu', category: 'vocabulary',
    question: "The old castle is ( ) by a deep moat and high stone walls.",
    choices: [
      { key: 'A', text: "apologized" },
      { key: 'B', text: "graduated" },
      { key: 'C', text: "surrounded" },
      { key: 'D', text: "hesitated" },
    ],
    correctKey: 'C',
    explanation: '「be surrounded by 〜（〜に囲まれている）」が正解。古城は深い堀と高い石垣に囲まれているという文意です。apologizeは「謝る」、graduateは「卒業する」、hesitateは「ためらう」で、いずれも自動詞なのでこの受動態の形を取れません。名詞形surroundings（周囲の環境）も頻出です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_035', level: '2kyu', category: 'vocabulary',
    question: "The police ( ) that the fire was started deliberately.",
    choices: [
      { key: 'A', text: "decorate" },
      { key: 'B', text: "suspect" },
      { key: 'C', text: "melt" },
      { key: 'D', text: "bury" },
    ],
    correctKey: 'B',
    explanation: '「suspect that 〜（〜ではないかと疑う）」が正解。警察は火事が故意に起こされたのではないかとみているという文意です。decorateは「〜を飾る」、meltは「〜を溶かす」、buryは「〜を埋める」。名詞suspect（容疑者）、doubt（〜ではないと思う）との意味の違いは頻出ポイントです。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu6_036', level: '2kyu', category: 'vocabulary',
    question: "People ( ) to eat more than necessary at all-you-can-eat restaurants.",
    choices: [
      { key: 'A', text: "tend" },
      { key: 'B', text: "bury" },
      { key: 'C', text: "scold" },
      { key: 'D', text: "melt" },
    ],
    correctKey: 'A',
    explanation: '「tend to do（〜する傾向がある）」が正解。食べ放題の店では必要以上に食べてしまいがちだという文意です。buryは「〜を埋める」、scoldは「〜を叱る」、meltは「〜を溶かす」で、いずれもto不定詞を続けてこの意味を表せません。名詞形tendency（傾向）、have a tendency to doも覚えましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_037', level: '2kyu', category: 'vocabulary',
    question: "Heavy rain in June is ( ) of the climate in this part of Japan.",
    choices: [
      { key: 'A', text: "guilty" },
      { key: 'B', text: "typical" },
      { key: 'C', text: "absent" },
      { key: 'D', text: "jealous" },
    ],
    correctKey: 'B',
    explanation: '「be typical of 〜（〜に典型的である）」が正解。6月の大雨は日本のこの地方の気候に典型的なものだという文意です。guiltyは「有罪の」、absentは「欠席の」、jealousは「嫉妬した」。名詞type（型）から派生した語で、副詞typically（典型的に・普通は）も頻出です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_038', level: '2kyu', category: 'vocabulary',
    question: "The museum keeps its most ( ) paintings in a special room.",
    choices: [
      { key: 'A', text: "absent" },
      { key: 'B', text: "guilty" },
      { key: 'C', text: "jealous" },
      { key: 'D', text: "valuable" },
    ],
    correctKey: 'D',
    explanation: '「valuable（貴重な・価値の高い）」が正解。美術館は最も貴重な絵画を特別室に保管しているという文意です。absentは「欠席の」、guiltyは「有罪の」、jealousは「嫉妬した」。名詞value（価値）から派生し、priceless（値段がつけられないほど貴重な）、invaluable（極めて貴重な）もプラスの意味である点に注意しましょう。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_039', level: '2kyu', category: 'vocabulary',
    question: "Electric ( ) are becoming a common sight on Japanese roads.",
    choices: [
      { key: 'A', text: "vehicles" },
      { key: 'B', text: "throats" },
      { key: 'C', text: "triangles" },
      { key: 'D', text: "appetites" },
    ],
    correctKey: 'A',
    explanation: '「vehicle（車両・乗り物）」が正解。電気自動車（electric vehicles = EV）が日本の道路で当たり前の光景になりつつあるという文意です。throatは「のど」、triangleは「三角形」、appetiteは「食欲」。vehicleは車・バス・トラックなどを含む総称で、環境やテクノロジーの文章で頻出します。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_040', level: '2kyu', category: 'vocabulary',
    question: "The Red Cross provided shelter for the ( ) of the earthquake.",
    choices: [
      { key: 'A', text: "refunds" },
      { key: 'B', text: "souvenirs" },
      { key: 'C', text: "victims" },
      { key: 'D', text: "costumes" },
    ],
    correctKey: 'C',
    explanation: '「victim（被害者・犠牲者）」が正解。赤十字が地震の被災者に避難所を提供したという文意です。refundは「払い戻し」、souvenirは「土産」、costumeは「衣装」。the victims of 〜（〜の犠牲者）の形で災害・事故の文章に頻出します。fall victim to 〜（〜の犠牲になる）という表現もあります。',
    difficulty: 'standard',
  },

  // ===== GRAMMAR (041-070) =====
  {
    id: 'eiken_2kyu6_041', level: '2kyu', category: 'grammar',
    question: "My daughter has been interested ( ) astronomy since she was ten.",
    choices: [
      { key: 'A', text: "on" },
      { key: 'B', text: "at" },
      { key: 'C', text: "in" },
      { key: 'D', text: "for" },
    ],
    correctKey: 'C',
    explanation: 'be interested in 〜（〜に興味がある）が正解。「娘は10歳の時から天文学に興味を持っている」の意味です。interestedと結びつく前置詞はinで、on・at・forは使えません。名詞interest（興味）を使ったhave an interest in 〜も同じ前置詞を取ります。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_042', level: '2kyu', category: 'grammar',
    question: "( ) we go hiking tomorrow depends on the weather.",
    choices: [
      { key: 'A', text: "Whether" },
      { key: 'B', text: "If" },
      { key: 'C', text: "What" },
      { key: 'D', text: "Which" },
    ],
    correctKey: 'A',
    explanation: 'Whether 〜（〜かどうかということ）の名詞節が文の主語になる形が正解。「明日ハイキングに行くかどうかは天気次第だ」の意味です。ifも「〜かどうか」を表せますが、if節は文の主語としては使えないのがルールです。What・Whichでは節の中の要素が欠けていないため文法的に成り立ちません。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu6_043', level: '2kyu', category: 'grammar',
    question: "I ( ) a bath when the earthquake hit, so I didn't notice it at first.",
    choices: [
      { key: 'A', text: "take" },
      { key: 'B', text: "have taken" },
      { key: 'C', text: "am taking" },
      { key: 'D', text: "was taking" },
    ],
    correctKey: 'D',
    explanation: '過去のある時点（地震が起きた時）に進行中だった動作は過去進行形was takingで表します。「地震が起きたとき私は風呂に入っていたので、最初は気づかなかった」の意味です。when + 過去形の節と組み合わせるのが典型パターン。現在形take・現在進行形am taking・現在完了have takenは過去の場面に合いません。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_044', level: '2kyu', category: 'grammar',
    question: "You can choose ( ) the meat dish or the fish dish for the main course.",
    choices: [
      { key: 'A', text: "neither" },
      { key: 'B', text: "either" },
      { key: 'C', text: "both" },
      { key: 'D', text: "all" },
    ],
    correctKey: 'B',
    explanation: 'either A or B（AかBのどちらか）の構文が正解。「メインコースには肉料理か魚料理のどちらかを選べます」の意味で、後ろのorと呼応するのはeitherです。neitherはnorと、bothはandと呼応するため、orとは組み合わせられません。allは3つ以上のものに使います。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_045', level: '2kyu', category: 'grammar',
    question: "This is the most exciting game ( ) I have ever watched.",
    choices: [
      { key: 'A', text: "what" },
      { key: 'B', text: "that" },
      { key: 'C', text: "who" },
      { key: 'D', text: "whose" },
    ],
    correctKey: 'B',
    explanation: '先行詞に最上級（the most exciting game）がつく場合、関係代名詞はthatを使うのが好まれます。「これは今まで見た中で一番わくわくする試合だ」の意味です。whatは先行詞を取れず、whoは人に使い、whoseは所有格で後ろに名詞が必要です。先行詞にall・only・最上級がつくとthatが選ばれやすい点を覚えましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_046', level: '2kyu', category: 'grammar',
    question: "I'll call you as soon as I ( ) at the airport.",
    choices: [
      { key: 'A', text: "will arrive" },
      { key: 'B', text: "arrived" },
      { key: 'C', text: "will have arrived" },
      { key: 'D', text: "arrive" },
    ],
    correctKey: 'D',
    explanation: '時を表す副詞節（as soon as 〜）の中では、未来のことでも現在形で表すのがルールです。「空港に着いたらすぐに電話します」の意味で現在形arriveが正解。will arrive・will have arrivedのように willを使うのは誤りです。when・before・after・untilなどの節でも同じルールが適用されます。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_047', level: '2kyu', category: 'grammar',
    question: "My parents wouldn't ( ) me travel abroad alone when I was in high school.",
    choices: [
      { key: 'A', text: "let" },
      { key: 'B', text: "allow" },
      { key: 'C', text: "permit" },
      { key: 'D', text: "forbid" },
    ],
    correctKey: 'A',
    explanation: '使役動詞let + 目的語 + 原形不定詞（〜に…させてやる・許す）が正解。「高校生の頃、両親は私が一人で海外旅行することを許してくれなかった」の意味です。allowとpermitはallow/permit 人 to doとto不定詞が必要なため、直後に原形travelを続けられません。forbidは「禁じる」で、wouldn\'tと組み合わせると意味が通りません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_048', level: '2kyu', category: 'grammar',
    question: "Mt. Fuji is the highest mountain ( ) Japan.",
    choices: [
      { key: 'A', text: "of" },
      { key: 'B', text: "at" },
      { key: 'C', text: "in" },
      { key: 'D', text: "on" },
    ],
    correctKey: 'C',
    explanation: '最上級の範囲を表すには、場所・集団にはin、複数を表す語句にはofを使います。Japanは場所なのでin Japanが正解。「富士山は日本で一番高い山です」の意味です。of all the mountains（すべての山の中で）ならofを使います。in / of の使い分けは最上級の頻出ポイントです。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_049', level: '2kyu', category: 'grammar',
    question: "( ) is important to check the expiration date before buying milk.",
    choices: [
      { key: 'A', text: "It" },
      { key: 'B', text: "There" },
      { key: 'C', text: "That" },
      { key: 'D', text: "What" },
    ],
    correctKey: 'A',
    explanation: '形式主語のItが正解。It is ... to do（〜することは…だ）の構文で、真の主語はto check以下です。「牛乳を買う前に賞味期限を確認することが大切だ」の意味です。There is構文は存在を表す別の構文で、ThatやWhatをこの位置に置くとto不定詞とつながりません。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_050', level: '2kyu', category: 'grammar',
    question: "Both my brother and my sister ( ) working in Nagoya now.",
    choices: [
      { key: 'A', text: "is" },
      { key: 'B', text: "was" },
      { key: 'C', text: "are" },
      { key: 'D', text: "has been" },
    ],
    correctKey: 'C',
    explanation: 'both A and B（AもBも両方）は複数扱いなので、複数形の動詞areが正解。「兄も姉も今は名古屋で働いている」の意味です。is・was・has beenは単数形なので使えません。一方、either A or BやneitherA nor Bは原則としてBに動詞を一致させる点との違いも覚えておきましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_051', level: '2kyu', category: 'grammar',
    question: "( ) you pass me the salt, please?",
    choices: [
      { key: 'A', text: "May" },
      { key: 'B', text: "Could" },
      { key: 'C', text: "Must" },
      { key: 'D', text: "Need" },
    ],
    correctKey: 'B',
    explanation: '相手への丁寧な依頼はCould you 〜?（〜していただけますか）で表します。「塩を取っていただけますか」の意味です。May I 〜?は自分の行動の許可を求める表現で、主語youとは組み合わせません。Must you 〜?は「どうしても〜しなければならないのか」、Need you 〜?は古風な表現で、依頼には使いません。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_052', level: '2kyu', category: 'grammar',
    question: "( ) vegetables in your own garden saves money and tastes better.",
    choices: [
      { key: 'A', text: "Grow" },
      { key: 'B', text: "Grown" },
      { key: 'C', text: "To growing" },
      { key: 'D', text: "Growing" },
    ],
    correctKey: 'D',
    explanation: '動名詞Growingが文の主語になる形が正解。「自分の庭で野菜を育てることは節約になるし、味も良い」の意味で、動名詞句全体が単数扱いなのでsavesと呼応します。原形Growでは主語になれず、過去分詞Grownも不可。To growなら正しい形ですが、To growingという形は存在しません。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_053', level: '2kyu', category: 'grammar',
    question: "The train has not arrived ( ), so let's wait a little longer.",
    choices: [
      { key: 'A', text: "already" },
      { key: 'B', text: "still" },
      { key: 'C', text: "never" },
      { key: 'D', text: "yet" },
    ],
    correctKey: 'D',
    explanation: '現在完了の否定文で「まだ〜していない」はnot ... yetで表します。「電車はまだ到着していないので、もう少し待ちましょう」の意味で、文末のyetが正解。alreadyは肯定文で「すでに」、stillは否定文では動詞の前に置き、neverは「一度も〜ない」で文脈に合いません。疑問文のyet（もう〜したか）もあわせて覚えましょう。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_054', level: '2kyu', category: 'grammar',
    question: "Emma taught ( ) how to play the guitar by watching online videos.",
    choices: [
      { key: 'A', text: "her" },
      { key: 'B', text: "herself" },
      { key: 'C', text: "hers" },
      { key: 'D', text: "she" },
    ],
    correctKey: 'B',
    explanation: '主語Emmaと目的語が同一人物なので、再帰代名詞herselfが正解。teach oneself（独学する）の形で、「エマは動画を見てギターの弾き方を独学した」の意味です。herでは別の女性に教えたことになり、by watching online videosという独学の文脈に合いません。hersは所有代名詞、sheは主格で目的語になれません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_055', level: '2kyu', category: 'grammar',
    question: "The town is known ( ) its hot springs and delicious soba noodles.",
    choices: [
      { key: 'A', text: "to" },
      { key: 'B', text: "as" },
      { key: 'C', text: "for" },
      { key: 'D', text: "with" },
    ],
    correctKey: 'C',
    explanation: 'be known for 〜（〜で知られている・〜が有名の理由である）が正解。「その町は温泉とおいしいそばで知られている」の意味です。be known to 人は「人に知られている」、be known as 〜は「〜として知られている」（名称・肩書きが続く）で、それぞれ意味が異なります。この使い分けは頻出ポイントです。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_056', level: '2kyu', category: 'grammar',
    question: "( ) finished his homework, Taro went out to play soccer.",
    choices: [
      { key: 'A', text: "Having" },
      { key: 'B', text: "Had" },
      { key: 'C', text: "Have" },
      { key: 'D', text: "To have" },
    ],
    correctKey: 'A',
    explanation: '完了形の分詞構文Having + 過去分詞が正解。主節より前に完了した動作を表し、「宿題を終えてから、タロウはサッカーをしに出かけた」の意味です。After he had finished his homeworkの書き換えと考えられます。Had・Haveは分詞構文の形にならず、To haveは不定詞で「〜するために」の意味になり不自然です。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu6_057', level: '2kyu', category: 'grammar',
    question: "We were very glad ( ) that our team had won the championship.",
    choices: [
      { key: 'A', text: "hearing" },
      { key: 'B', text: "to hear" },
      { key: 'C', text: "heard" },
      { key: 'D', text: "hear" },
    ],
    correctKey: 'B',
    explanation: '感情の原因を表す不定詞の副詞的用法be glad to do（〜してうれしい）が正解。「チームが優勝したと聞いてとてもうれしかった」の意味です。glad・happy・sorry・surprisedなどの感情を表す形容詞の後には、原因を表すto不定詞を続けます。hearingやheardをこの位置に置く形は誤りです。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_058', level: '2kyu', category: 'grammar',
    question: "I have two cats; one is black, and ( ) is white.",
    choices: [
      { key: 'A', text: "the other" },
      { key: 'B', text: "another" },
      { key: 'C', text: "other" },
      { key: 'D', text: "others" },
    ],
    correctKey: 'A',
    explanation: '2つのうち「一方はone、残りのもう一方はthe other」で表します。「猫を2匹飼っていて、1匹は黒、もう1匹は白だ」の意味です。残りが1つに特定されるためtheがつきます。anotherは「（3つ以上の中の）別のもう1つ」、otherは単独では代名詞として使えず、othersは「他の複数のもの」を表すため2匹の場面には合いません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_059', level: '2kyu', category: 'grammar',
    question: "There isn't ( ) milk left in the refrigerator, so I'll buy some.",
    choices: [
      { key: 'A', text: "some" },
      { key: 'B', text: "no" },
      { key: 'C', text: "none" },
      { key: 'D', text: "any" },
    ],
    correctKey: 'D',
    explanation: '否定文ではnot ... any（少しも〜ない）を使います。「冷蔵庫に牛乳が残っていないので買ってきます」の意味でanyが正解。someは肯定文で使うのが原則です。noを使う場合はThere is no milkとnotなしの形になり、isn\'t noは二重否定で誤り。noneは代名詞なので直後に名詞milkを続けられません。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_060', level: '2kyu', category: 'grammar',
    question: "Hurry up, ( ) you will miss the last bus.",
    choices: [
      { key: 'A', text: "and" },
      { key: 'B', text: "so" },
      { key: 'C', text: "or" },
      { key: 'D', text: "but" },
    ],
    correctKey: 'C',
    explanation: '命令文 + or ...（〜しなさい、さもないと…）の構文が正解。「急ぎなさい、さもないと最終バスに乗り遅れますよ」の意味です。命令文 + and ...は「〜しなさい、そうすれば…」と良い結果が続く場合に使います。Hurry up, and you will catch the bus.との対比で覚えましょう。so・butはこの構文では使いません。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_061', level: '2kyu', category: 'grammar',
    question: "( ) beautiful the cherry blossoms along this river are!",
    choices: [
      { key: 'A', text: "How" },
      { key: 'B', text: "What" },
      { key: 'C', text: "So" },
      { key: 'D', text: "Very" },
    ],
    correctKey: 'A',
    explanation: '感嘆文はHow + 形容詞 + 主語 + 動詞!の語順を取ります。「この川沿いの桜はなんて美しいのだろう」の意味でHowが正解。Whatを使う場合はWhat beautiful cherry blossoms these are!のように後ろに名詞を伴います。直後に形容詞だけが続くか、名詞句が続くかでHowとWhatを使い分けるのがポイントです。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_062', level: '2kyu', category: 'grammar',
    question: "I ( ) rather stay home tonight than go to the party.",
    choices: [
      { key: 'A', text: "had" },
      { key: 'B', text: "should" },
      { key: 'C', text: "would" },
      { key: 'D', text: "could" },
    ],
    correctKey: 'C',
    explanation: 'would rather A than B（BするよりむしろAしたい）の慣用表現が正解。「今夜はパーティーに行くより家にいたい」の意味です。rather の後は動詞の原形が続きます。had rather は現代英語では使われず、should rather・could ratherという定型表現もありません。would rather not do（むしろ〜したくない）の否定形も覚えましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_063', level: '2kyu', category: 'grammar',
    question: "Please hand in your report ( ) Friday at the latest.",
    choices: [
      { key: 'A', text: "until" },
      { key: 'B', text: "by" },
      { key: 'C', text: "for" },
      { key: 'D', text: "during" },
    ],
    correctKey: 'B',
    explanation: '期限（〜までに完了）を表す前置詞はbyです。「遅くとも金曜日までにレポートを提出してください」の意味です。untilは「〜まで（ずっと）」と継続を表すため、提出のような一回の動作には使えません。stay until Friday（金曜までずっと滞在する）との違いで覚えましょう。for・duringは期間を表し文意に合いません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_064', level: '2kyu', category: 'grammar',
    question: "It was ( ) an interesting lecture that nobody fell asleep.",
    choices: [
      { key: 'A', text: "so" },
      { key: 'B', text: "very" },
      { key: 'C', text: "too" },
      { key: 'D', text: "such" },
    ],
    correctKey: 'D',
    explanation: 'such + a/an + 形容詞 + 名詞 + that ...（とても…な〜なので…）の構文が正解。「とても面白い講義だったので誰も居眠りしなかった」の意味です。soを使う場合はso interesting a lectureという語順になります。直後に冠詞anが来ているのでsuchを選ぶのがポイント。very・tooはthat節と呼応しません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_065', level: '2kyu', category: 'grammar',
    question: "The plane is ( ) to take off, so please fasten your seat belt.",
    choices: [
      { key: 'A', text: "soon" },
      { key: 'B', text: "near" },
      { key: 'C', text: "while" },
      { key: 'D', text: "about" },
    ],
    correctKey: 'D',
    explanation: 'be about to do（まさに〜しようとしている）の慣用表現が正解。「飛行機はまもなく離陸しますので、シートベルトをお締めください」の意味です。be going to doより差し迫った直前の未来を表します。soon・near・whileをbe ... to doの形に当てはめる定型表現はありません。on the point of -ingも同様の意味です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_066', level: '2kyu', category: 'grammar',
    question: "The language ( ) in Brazil is Portuguese, not Spanish.",
    choices: [
      { key: 'A', text: "speaking" },
      { key: 'B', text: "spoken" },
      { key: 'C', text: "speaks" },
      { key: 'D', text: "to speaking" },
    ],
    correctKey: 'B',
    explanation: '言語は「話される」側なので、受動の意味を持つ過去分詞spokenが名詞The languageを修飾します。「ブラジルで話されている言語はスペイン語ではなくポルトガル語だ」の意味です。speakingでは言語が「話す」ことになり不自然。文全体の動詞はisなので、speaksを入れると動詞が重複してしまいます。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_067', level: '2kyu', category: 'grammar',
    question: "Aki is not answering her phone. She ( ) have left it at home again.",
    choices: [
      { key: 'A', text: "should" },
      { key: 'B', text: "would" },
      { key: 'C', text: "may" },
      { key: 'D', text: "ought" },
    ],
    correctKey: 'C',
    explanation: 'may have + 過去分詞（〜したかもしれない）で過去の出来事への推量を表します。「アキが電話に出ない。また家に置いてきたのかもしれない」の意味でmayが正解。should have leftは「置いてくるべきだったのに」という非難になり文脈に合いません。wouldは条件がないと使えず、oughtはought toの形でtoが必要です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_068', level: '2kyu', category: 'grammar',
    question: "This camera is ( ) expensive than that one, but the quality is almost the same.",
    choices: [
      { key: 'A', text: "less" },
      { key: 'B', text: "little" },
      { key: 'C', text: "least" },
      { key: 'D', text: "fewer" },
    ],
    correctKey: 'A',
    explanation: 'less + 形容詞 + than 〜（〜より…でない）の劣等比較が正解。「このカメラはあちらより値段が安いが、品質はほぼ同じだ」の意味です。thanと呼応する比較級はlessです。littleは原級、leastは最上級でthanと呼応せず、fewerは数えられる名詞の数を比べる語なので形容詞expensiveは修飾できません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_069', level: '2kyu', category: 'grammar',
    question: "My grandfather enjoys ( ) vegetables in his garden every morning.",
    choices: [
      { key: 'A', text: "grow" },
      { key: 'B', text: "to grow" },
      { key: 'C', text: "growing" },
      { key: 'D', text: "grown" },
    ],
    correctKey: 'C',
    explanation: 'enjoyは動名詞のみを目的語に取る動詞なので、growingが正解。「祖父は毎朝、庭で野菜を育てるのを楽しんでいる」の意味です。enjoy to doという形は誤りです。同じく動名詞のみを取る動詞にfinish・mind・avoid・give up・practiceなどがあり、まとめて覚えると効率的です。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_070', level: '2kyu', category: 'grammar',
    question: "If I had more free time, I ( ) volunteer at the animal shelter.",
    choices: [
      { key: 'A', text: "will" },
      { key: 'B', text: "can" },
      { key: 'C', text: "must" },
      { key: 'D', text: "would" },
    ],
    correctKey: 'D',
    explanation: '仮定法過去の文です。if節が過去形（had）なので、主節はwould + 原形になります。「もっと自由な時間があれば、動物保護施設でボランティアをするのだが」と現在の事実に反する仮定を表します。will・can・mustは直説法の助動詞で、仮定法過去の帰結節には過去形の助動詞（would・could・mightなど）を使います。',
    difficulty: 'standard',
  },

  // ===== READING (071-100) =====
  {
    id: 'eiken_2kyu6_071', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_1}

According to the passage, for whom could delivery drones be especially valuable?`,
    choices: [
      { key: 'A', text: "People living in city apartments with many shops nearby." },
      { key: 'B', text: "People on islands or in mountain villages with few delivery drivers." },
      { key: 'C', text: "Customers who often order heavy furniture." },
      { key: 'D', text: "Staff working at large international airports." },
    ],
    correctKey: 'B',
    explanation: '本文に"drones could be especially valuable for people living on islands or in mountain villages with few delivery drivers"（配達員の少ない島や山間の村に住む人々にとって特に価値がある）とあり、Bが正解。Cはドローンがまだ重い荷物を運べないとあるため誤り。A・Dは本文に記述がありません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_072', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_1}

In the passage, the word "grounds" most closely means:`,
    choices: [
      { key: 'A', text: "crashes them into fields" },
      { key: 'B', text: "cleans them carefully" },
      { key: 'C', text: "charges their batteries" },
      { key: 'D', text: "prevents them from flying" },
    ],
    correctKey: 'D',
    explanation: 'groundは動詞で「（航空機などを）飛べなくする・地上にとどめる」という意味があり、Dが正解。「悪天候になるとドローンは簡単に飛行できなくなる」という文脈です。名詞の「地面」の意味から派生した用法で、飛行機の欠航のニュースなどでも使われます。A・B・Cはいずれも文脈に合いません。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu6_073', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_1}

What do most experts expect for the near future of drone delivery?`,
    choices: [
      { key: 'A', text: "Drones will first serve remote regions and emergencies." },
      { key: 'B', text: "Drones will immediately replace all delivery vans." },
      { key: 'C', text: "Bicycle deliveries will be banned in cities." },
      { key: 'D', text: "Drones will mainly carry heavy furniture." },
    ],
    correctKey: 'A',
    explanation: '本文最終文に"most experts expect drones to serve remote regions and emergencies first, while vans and bicycles continue to handle ordinary city deliveries"（専門家の多くは、ドローンはまず遠隔地や緊急時に使われ、通常の市内配達はバンや自転車が担い続けると予想している）とあり、Aが正解。B・C・Dは本文の内容と矛盾します。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_074', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_2}

Which benefit of green roofs is mentioned in the passage?`,
    choices: [
      { key: 'A', text: "They produce vegetables for local supermarkets." },
      { key: 'B', text: "They raise building temperatures throughout the year." },
      { key: 'C', text: "They absorb rainwater and insulate buildings." },
      { key: 'D', text: "They make drainage systems unnecessary." },
    ],
    correctKey: 'C',
    explanation: '本文に「緑化屋根は雨水を吸収して洪水を減らし、土と植物の層が建物を断熱して冷暖房費を削減する」とあり、Cが正解。Dは排水システムが不要になるとまでは述べられておらず、A・Bは本文に記述がありません。多数の緑化屋根が地区全体の気温を下げるヒートアイランド緩和効果も挙げられています。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_075', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_2}

In the passage, the word "overwhelm" most closely means:`,
    choices: [
      { key: 'A', text: "prove too much for" },
      { key: 'B', text: "clean thoroughly" },
      { key: 'C', text: "cool down" },
      { key: 'D', text: "repair quickly" },
    ],
    correctKey: 'A',
    explanation: 'overwhelmは「〜を圧倒する・（処理能力を）超える」という意味で、Aの「〜の手に負えなくなる」が正解。嵐が排水システムの処理能力を超えると洪水が起こる、という文脈です。cleanは「掃除する」、cool downは「冷やす」、repairは「修理する」。be overwhelmed with 〜（〜で圧倒される）の形でも頻出します。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_076', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_2}

How are some cities dealing with the cost and weight problems of green roofs?`,
    choices: [
      { key: 'A', text: "By banning green roofs on old buildings." },
      { key: 'B', text: "By passing laws to make soil lighter." },
      { key: 'C', text: "By removing drainage systems from streets." },
      { key: 'D', text: "By offering subsidies or requiring green roofs only on large new buildings." },
    ],
    correctKey: 'D',
    explanation: '本文最終文に"some cities now offer subsidies or require green roofs only on large new buildings, where the extra cost is a small share of the total budget"（補助金を出すか、追加費用が総予算のごく一部で済む大型新築建物にのみ緑化屋根を義務づける都市もある）とあり、Dが正解。A・B・Cは本文にありません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_077', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_3}

According to the passage, how does music help athletes?`,
    choices: [
      { key: 'A', text: "It directly strengthens their muscles." },
      { key: 'B', text: "It keeps their rhythm, distracts from tiredness, and slightly improves endurance." },
      { key: 'C', text: "It cools their bodies during exercise." },
      { key: 'D', text: "It improves their eyesight on open roads." },
    ],
    correctKey: 'B',
    explanation: '本文に「力強く安定したビートの音楽は、規則的なリズムを保つのを助け、疲労感から注意をそらし、持久力を小幅ながら測定可能な程度に向上させる」とあり、Bが正解。効果が最も大きいのはランニングや自転車など動きをテンポに合わせられる反復運動だとも述べられています。A・C・Dは本文にありません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_078', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_3}

Who appears to benefit least from listening to music while exercising?`,
    choices: [
      { key: 'A', text: "Complete beginners." },
      { key: 'B', text: "Recreational cyclists." },
      { key: 'C', text: "Elite athletes." },
      { key: 'D', text: "Rowers of all levels." },
    ],
    correctKey: 'C',
    explanation: '本文に"elite athletes appear to gain less than beginners, perhaps because they are trained to listen closely to their bodies"（エリート選手は初心者より効果が小さいようで、体の信号を注意深く聞くよう訓練されているためかもしれない）とあり、Cが正解。初心者の方が効果が大きいとされているためAは逆です。B・Dの比較は本文にありません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_079', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_3}

Why do some competitions ban headphones?`,
    choices: [
      { key: 'A', text: "Because loud music damages the hearing of spectators." },
      { key: 'B', text: "Because batteries make runners too heavy." },
      { key: 'C', text: "Because most songs are protected by copyright." },
      { key: 'D', text: "For safety reasons and because music is seen as artificial assistance." },
    ],
    correctKey: 'D',
    explanation: '本文最終文に"partly for safety on open roads, and partly because officials consider music a form of artificial assistance"（一般道での安全のためと、音楽を人工的な補助とみなす主催者がいるため）とあり、Dが正解。A・B・Cはいずれも本文に記述のない理由です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_080', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_4}

What have investigators found about clothing recycling programs?`,
    choices: [
      { key: 'A', text: "Only a small portion of collected garments becomes new clothes." },
      { key: 'B', text: "Collection boxes are usually empty." },
      { key: 'C', text: "Recycled clothes cost more than new ones." },
      { key: 'D', text: "Brands refuse to announce any recycling programs." },
    ],
    correctKey: 'A',
    explanation: '本文に"investigators have found that only a small portion of collected garments is actually turned into new clothes"（回収された衣類のうち実際に新しい服に生まれ変わるのはごく一部だと調査で判明した）とあり、Aが正解。多くは海外に送られ、現地の古着市場を圧迫しかねないとも述べられています。B・C・Dは本文にありません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_081', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_4}

In the passage, the word "disposable" most closely means:`,
    choices: [
      { key: 'A', text: "extremely valuable" },
      { key: 'B', text: "highly fashionable" },
      { key: 'C', text: "made to be thrown away after brief use" },
      { key: 'D', text: "resistant to water" },
    ],
    correctKey: 'C',
    explanation: 'disposableは「使い捨ての」という意味で、Cが正解。ファストファッションが買い物客に服をほとんど使い捨てのように扱わせている、という文脈です。動詞dispose of 〜（〜を処分する）から派生した形容詞で、disposable chopsticks（割り箸）などにも使われます。A・B・Dは文脈に合いません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_082', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_4}

According to campaigners, what is the real solution to fast fashion's problems?`,
    choices: [
      { key: 'A', text: "Burning old clothes at home instead of in landfills." },
      { key: 'B', text: "Buying fewer, better-made items and wearing them for years." },
      { key: 'C', text: "Shipping more used clothing overseas." },
      { key: 'D', text: "Producing new garments in one week instead of two." },
    ],
    correctKey: 'B',
    explanation: '本文最終文に"the real solution lies with consumers themselves: buying fewer, better-made items, repairing them, and wearing them for years"（本当の解決策は消費者自身にあり、より少なく質の良い服を買い、修理し、何年も着ることだ）とあり、Bが正解。Cは古着の海外輸送がむしろ問題とされており、A・Dは本文の趣旨に反します。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_083', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_5}

Why are businesses tempted to post fake reviews?`,
    choices: [
      { key: 'A', text: "Because writing honest reviews takes too much time." },
      { key: 'B', text: "Because platforms pay companies for every review." },
      { key: 'C', text: "Because software deletes all real reviews." },
      { key: 'D', text: "Because a small difference in ratings can measurably change income." },
    ],
    correctKey: 'D',
    explanation: '本文に"A difference of half a star can measurably change a shop\'s income, which creates a strong temptation to cheat"（星半分の差が店の収入を目に見えて変えるため、不正への強い誘惑が生まれる）とあり、Dが正解。A・B・Cはいずれも本文に記述がありません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_084', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_5}

In the passage, the word "glowing" most closely means:`,
    choices: [
      { key: 'A', text: "shining with electric light" },
      { key: 'B', text: "highly enthusiastic and full of praise" },
      { key: 'C', text: "angry and critical" },
      { key: 'D', text: "written anonymously" },
    ],
    correctKey: 'B',
    explanation: 'glowingは「絶賛の・べたぼめの」という意味で、Bが正解。自社製品への絶賛レビューを書かせ、競合には辛辣なレビューを書かせる業者がいる、という文脈です。直後のharsh ones（辛辣なレビュー）との対比からも判断できます。「光り輝く」という文字どおりの意味から比喩的に発展した用法です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_085', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_5}

What do consumer groups advise readers of online reviews to do?`,
    choices: [
      { key: 'A', text: "Pay most attention to detailed reviews that mention both good and bad points." },
      { key: 'B', text: "Trust only reviews with five-star ratings." },
      { key: 'C', text: "Ignore every review on major platforms." },
      { key: 'D', text: "Post fake reviews to balance out the others." },
    ],
    correctKey: 'A',
    explanation: '本文最終文に「極端な意見には懐疑的になり、良い点と悪い点の両方に触れた詳細なレビューに最も注意を払い、レビュアーにバランスの取れたコメントの履歴があるか確認するよう助言している」とあり、Aが正解。Bの五つ星だけを信じる行動はむしろ危険とされ、C・Dは本文にありません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_086', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_6}

Why is seaweed farming considered environmentally attractive?`,
    choices: [
      { key: 'A', text: "It requires large amounts of chemical fertilizer." },
      { key: 'B', text: "It can be done on abandoned farmland." },
      { key: 'C', text: "It needs no fresh water, fertilizer, or farmland, and absorbs carbon dioxide." },
      { key: 'D', text: "It raises the temperature of the surrounding sea." },
    ],
    correctKey: 'C',
    explanation: '本文に"seaweed needs no fresh water, no fertilizer, and no farmland; it simply grows on ropes hanging in the sea, absorbing carbon dioxide and excess nutrients"（海藻は真水も肥料も農地も必要とせず、海中のロープで育ち、二酸化炭素や過剰な栄養分を吸収する）とあり、Cが正解。A・B・Dは本文と矛盾します。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_087', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_6}

What are scientists testing about cattle feed?`,
    choices: [
      { key: 'A', text: "Whether adding certain seaweeds can sharply cut the methane cattle produce." },
      { key: 'B', text: "Whether cows can live in shallow ocean water." },
      { key: 'C', text: "Whether seaweed makes milk taste sweeter." },
      { key: 'D', text: "Whether cattle can digest plastic packaging." },
    ],
    correctKey: 'A',
    explanation: '本文に"Scientists are testing whether adding a small amount of certain seaweeds to cattle feed can sharply cut the methane the animals produce"（特定の海藻を少量、牛の飼料に加えることで牛が出すメタンを大幅に減らせるか科学者が検証している）とあり、Aが正解。B・C・Dは本文にありません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_088', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_6}

In the passage, the word "scarce" most closely means:`,
    choices: [
      { key: 'A', text: "dangerous to operate" },
      { key: 'B', text: "enormous in size" },
      { key: 'C', text: "extremely modern" },
      { key: 'D', text: "not available in sufficient numbers" },
    ],
    correctKey: 'D',
    explanation: 'scarceは「乏しい・不足している」という意味で、Dが正解。多くの地域では加工施設が不足している、という文脈です。dangerousは「危険な」、enormousは「巨大な」、modernは「現代的な」。名詞形scarcity（不足）、類義語insufficient・limitedもあわせて覚えましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_089', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_7}

How do shop owners usually react when car-free plans are first announced?`,
    choices: [
      { key: 'A', text: "They immediately support the change." },
      { key: 'B', text: "They often protest, fearing customers will go elsewhere." },
      { key: 'C', text: "They move their shops to the suburbs at once." },
      { key: 'D', text: "They start buying delivery vehicles." },
    ],
    correctKey: 'B',
    explanation: '本文に"Shop owners often protest at first, fearing that customers who cannot park nearby will go elsewhere"（店主たちは当初、近くに駐車できない客が他へ行ってしまうことを恐れてしばしば抗議する）とあり、Bが正解。しかし研究では歩行者や自転車利用者の方が来店頻度が高く、売上はむしろ増えることが多いと続きます。A・C・Dは本文にありません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_090', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_7}

What did studies in several cities find about car-free centers?`,
    choices: [
      { key: 'A', text: "Sales usually fall permanently after cars are banned." },
      { key: 'B', text: "Drivers visit shops more often than cyclists." },
      { key: 'C', text: "Air quality becomes worse in the city center." },
      { key: 'D', text: "Pedestrians and cyclists visit more often, and sales often rise." },
    ],
    correctKey: 'D',
    explanation: '本文に"pedestrians and cyclists tend to visit more often and stay longer than drivers, and street-level businesses frequently see sales rise after cars are removed"（歩行者と自転車利用者は車の運転者より頻繁に訪れて長く滞在し、路面店の売上は車の排除後にしばしば増加する）とあり、Dが正解。A・B・Cは調査結果と正反対です。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_091', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_7}

In the passage, the word "reverse" most closely means:`,
    choices: [
      { key: 'A', text: "repeat many times" },
      { key: 'B', text: "announce officially" },
      { key: 'C', text: "change back to the previous state" },
      { key: 'D', text: "expand to other areas" },
    ],
    correctKey: 'C',
    explanation: 'reverseは「〜を元に戻す・逆転させる」という意味で、Cが正解。中心部を歩行者空間にした都市のうち、その変更を撤回した都市はほとんどない、という文脈です。repeatは「繰り返す」、announceは「発表する」、expandは「拡大する」。名詞・形容詞としての用法（the reverse = 逆）も覚えておきましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_092', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_8}

What warning do some studies give about coffee growing?`,
    choices: [
      { key: 'A', text: "Half of today's coffee-growing areas could become unsuitable by 2050." },
      { key: 'B', text: "All coffee will disappear from shops by 2030." },
      { key: 'C', text: "Robusta will become extinct within a decade." },
      { key: 'D', text: "Shade trees are killing most coffee plants." },
    ],
    correctKey: 'A',
    explanation: '本文に"some studies warn that half of today\'s coffee-growing areas could become unsuitable by 2050"（現在のコーヒー栽培地の半分が2050年までに栽培に適さなくなる可能性があると警告する研究もある）とあり、Aが正解。Bはコーヒーが消えるのではなく価格と味が変わる未来だと述べられており誤り。C・Dは本文にありません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_093', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_8}

In the passage, the word "tolerate" most closely means:`,
    choices: [
      { key: 'A', text: "strongly dislike" },
      { key: 'B', text: "endure without being harmed" },
      { key: 'C', text: "produce in large amounts" },
      { key: 'D', text: "hide from view" },
    ],
    correctKey: 'B',
    explanation: 'tolerateは「〜に耐える・〜を許容する」という意味で、Bが正解。忘れられていた野生種はアラビカよりはるかに暑さに耐えられる、という文脈です。dislikeは「嫌う」、produceは「生産する」、hideは「隠す」。名詞形tolerance（耐性・寛容）、形容詞tolerant（寛容な）もあわせて覚えましょう。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_094', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_8}

According to the passage, what future is likely for coffee drinkers?`,
    choices: [
      { key: 'A', text: "Coffee will become free in most cafes." },
      { key: 'B', text: "Nothing about coffee will change at all." },
      { key: 'C', text: "Morning coffee will completely disappear." },
      { key: 'D', text: "Higher prices and changing flavors." },
    ],
    correctKey: 'D',
    explanation: '本文最終文に"the likely future is not the disappearance of their morning cup, but higher prices and changing flavors"（朝の一杯がなくなるのではなく、価格の上昇と味の変化が起こりそうだ）とあり、Dが正解。Cの「完全に消える」は明確に否定されています。A・Bは本文にありません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_095', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_9}

Why do dozens of governments offer special visas to digital nomads?`,
    choices: [
      { key: 'A', text: "To increase the number of flights at their airports." },
      { key: 'B', text: "To train local people as computer programmers." },
      { key: 'C', text: "Because they hope nomads will spend their foreign salaries locally." },
      { key: 'D', text: "To reduce the number of ordinary tourists." },
    ],
    correctKey: 'C',
    explanation: '本文に"now offer special visas to attract them, hoping the newcomers will spend their foreign salaries in local restaurants and apartments"（外国で得た給料を地元のレストランや住居で使ってくれることを期待して特別ビザを提供している）とあり、Cが正解。A・B・Dは本文に記述がありません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_096', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_9}

What friction has appeared in some popular destinations?`,
    choices: [
      { key: 'A', text: "Nomads refuse to eat at local restaurants." },
      { key: 'B', text: "Internet connections have slowed down for residents." },
      { key: 'C', text: "Nomad visas expire after only a few days." },
      { key: 'D', text: "Housing costs rise for local families as landlords prefer renting to nomads." },
    ],
    correctKey: 'D',
    explanation: '本文に"landlords have discovered they can earn far more renting to nomads than to residents, pushing up housing costs for local families"（家主はノマドに貸す方がはるかに稼げると気づき、地元家族の住居費を押し上げている）とあり、Dが正解。そのため短期賃貸への規制とビザを組み合わせる都市も出ています。A・B・Cは本文にありません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_097', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_9}

In the passage, the word "capture" most closely means:`,
    choices: [
      { key: 'A', text: "arrest and question" },
      { key: 'B', text: "obtain and keep" },
      { key: 'C', text: "photograph in detail" },
      { key: 'D', text: "imprison for a long time" },
    ],
    correctKey: 'B',
    explanation: 'captureはここでは「（利益などを）獲得する・取り込む」という意味で、Bが正解。経済的な利益を取り込みつつ自国民を守ろうとしている、という文脈です。「逮捕する」「撮影する」「捕虜にする」もcaptureの意味ですが、capture the economic benefitsという抽象的な目的語との組み合わせではBの意味になります。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_098', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_10}

What happens at repair cafes?`,
    choices: [
      { key: 'A', text: "Residents fix broken items together with skilled volunteers free of charge." },
      { key: 'B', text: "Companies sell new products at discount prices." },
      { key: 'C', text: "Schools hold science classes for children." },
      { key: 'D', text: "Broken items are collected and burned as fuel." },
    ],
    correctKey: 'A',
    explanation: '本文に"residents bring broken toasters, torn jackets, and silent radios, and fix them together with skilled helpers free of charge"（住民が壊れたトースターや破れた上着、鳴らないラジオを持ち込み、熟練した助っ人と一緒に無料で修理する）とあり、Aが正解。B・C・Dはいずれも本文に記述がありません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_099', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_10}

Besides reducing waste, what do organizers say the movement achieves?`,
    choices: [
      { key: 'A', text: "Large profits from repair fees." },
      { key: 'B', text: "Free advertising for manufacturers." },
      { key: 'C', text: "Social effects such as passing on skills and making neighbors friends." },
      { key: 'D', text: "A reduction in the number of volunteers needed." },
    ],
    correctKey: 'C',
    explanation: '本文に"organizers say the social effects matter just as much: elderly engineers pass on skills that schools no longer teach, and neighbors who had never spoken become friends"（社会的効果も同じくらい重要で、年配の技術者が学校ではもう教えない技能を伝え、話したことのなかった隣人同士が友人になる）とあり、Cが正解。修理は無料なのでAは誤り。B・Dは本文にありません。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_100', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_10}

What do "right to repair" laws require companies to do?`,
    choices: [
      { key: 'A', text: "Repair every product themselves for free." },
      { key: 'B', text: "Sell spare parts and publish repair manuals." },
      { key: 'C', text: "Pay fees to repair cafes every month." },
      { key: 'D', text: "Throw away products after ten years of use." },
    ],
    correctKey: 'B',
    explanation: '本文最終文に"require companies to sell spare parts and publish repair manuals so that products are not thrown away simply because no one knows how to open them"（部品の販売と修理マニュアルの公開を企業に義務づけ、開け方が分からないという理由だけで製品が捨てられないようにする）とあり、Bが正解。A・C・Dは本文にありません。',
    difficulty: 'standard',
  },
];
