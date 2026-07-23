import { EikenQuestion } from './eiken_questions';

// === Reading passages (original reproduction material, no overlap with previous batches) ===

const p1 = `For much of the early 2000s, night trains seemed destined to disappear. Budget airlines offered cheaper and faster ways to cross Europe, and many railway companies closed their sleeper services because they were losing money. In the past few years, however, night trains have made a surprising comeback. Growing concern about the carbon emissions of flying has pushed travelers to look for greener options, and a train journey produces only a fraction of the pollution of a short flight. New routes now connect cities such as Vienna, Paris, and Berlin, allowing passengers to fall asleep in one country and wake up in another. Critics point out that tickets are still often more expensive than plane seats and that old carriages need costly repairs. Even so, several governments have begun funding new sleeper lines, betting that comfort and environmental awareness will keep the trend alive.`;

const p2 = `Laughter is one of the most familiar human behaviors, yet scientists still argue about why it exists. It appears long before speech: babies begin to laugh at around four months old, well before they can say a single word. Researchers have found that people are far more likely to laugh when they are with others than when they are alone, which suggests that laughter is mainly a social signal rather than a simple response to jokes. In fact, studies of everyday conversation show that most laughter follows ordinary comments, not clever punch lines. Some scientists believe that laughing together strengthens the bonds within a group, much as grooming does among other primates. Because it spreads so easily from person to person, laughter may have helped early humans build the large, cooperative communities on which their survival depended.`;

const p3 = `Few people in the year 2000 would have predicted that vinyl records would outsell CDs two decades later, yet that is exactly what has happened in several countries. When digital downloads and streaming arrived, physical music seemed old-fashioned and doomed. Vinyl, however, has attracted a new generation of listeners who value it for reasons that have little to do with sound quality alone. Holding a large record sleeve, reading the printed lyrics, and carefully placing the needle turn listening into an active ritual rather than background noise. Independent record shops, once nearly extinct, have reopened in many towns, and some artists now release albums on vinyl before making them available online. Skeptics note that most buyers still stream the same music for daily listening, and that a number of vinyl records are bought as decoration and never played. Still, the format's revival shows that convenience is not the only thing people want from music.`;

const p4 = `Tardigrades, often called "water bears," are among the toughest animals on Earth, even though they are smaller than a grain of sand. These eight-legged creatures normally live in water trapped among mosses and in the soil, but they can survive conditions that would kill almost any other living thing. When their environment dries out, tardigrades pull in their legs and enter a state in which nearly all activity in their bodies stops. In this form they have endured temperatures close to absolute zero, the vacuum of space, and doses of radiation hundreds of times stronger than a human could withstand. Once water returns, they can revive within hours and continue as if nothing had happened. Scientists are studying the chemicals that protect the animals' cells during drying, hoping the knowledge might one day help preserve human medicines, and even vaccines, without refrigeration.`;

const p5 = `Dogs have helped humans hunt and herd for thousands of years, but a newer role is winning them praise from scientists: protecting endangered species. Because a dog's sense of smell is tens of thousands of times more sensitive than a human's, trained detection dogs can locate things that researchers would struggle to find on their own. In forests and grasslands, they sniff out the droppings of rare animals, allowing biologists to track populations without ever trapping or disturbing the creatures themselves. At airports and shipping ports, other dogs detect smuggled ivory and live animals hidden inside luggage. Perhaps most surprisingly, some dogs are trained to find invasive plants and insects before they spread. Handlers say the work suits the animals well, since the dogs treat each search as a game and are rewarded with play. The main limitation is cost, as training a single dog takes many months and considerable money.`;

const p6 = `For centuries, leather has come almost entirely from animal skins, but a new material grown from fungi may change that. The root-like threads of mushrooms, known as mycelium, can be grown on farm waste in large flat sheets within a couple of weeks. Once treated, the result looks and feels remarkably like animal leather and can be used to make bags, shoes, and jackets. Supporters argue that the process uses far less land and water than raising cattle and produces no methane, the powerful greenhouse gas released by livestock. Several fashion brands have already released products made from the material, hoping to attract customers worried about the environment. Doubts remain, however, about whether mushroom leather can match the durability of the real thing, and producing it in large amounts at a low price is still difficult. Whether it becomes common or stays a luxury novelty will depend on solving these problems.`;

const p7 = `On a clear night far from any city, thousands of stars are visible, along with the pale band of the Milky Way. Yet most people today never see this sight. Artificial light from streetlamps, buildings, and advertising signs brightens the night sky over towns and cities, hiding all but the brightest stars—a problem astronomers call light pollution. Beyond disappointing stargazers, the constant glow disturbs wildlife: newly hatched sea turtles crawl toward bright hotels instead of the sea, and migrating birds become confused by lit-up towers. In response, a number of remote regions have been named "dark-sky reserves," where lighting is strictly limited to protect the view. These places have become popular with a new kind of traveler who journeys specifically to experience truly dark skies. Simple measures, such as pointing lamps downward and switching off unnecessary lights, can bring the stars back at little cost.`;

const p8 = `Reading has traditionally meant sitting quietly with a printed page, but for a growing number of people it now means listening. Audiobook sales have risen sharply in recent years, helped by smartphones and services that let users download thousands of titles at once. Fans praise the format because it lets them "read" while doing other things—commuting, exercising, or cooking—turning otherwise wasted time into a chance to enjoy a novel or learn something new. Some worry that listening is somehow inferior to reading with the eyes, but research suggests that the brain understands and remembers stories in similar ways whether they are heard or read. A skilled narrator can even add emotion that a silent reader might miss. Publishers, once cautious, now record audio versions of most major books, and a few authors write specifically with the listening experience in mind.`;

const p9 = `As summers grow hotter, city planners are rediscovering a simple and beautiful tool for cooling their streets: trees. On a sunny day, the air beneath a group of leafy trees can be several degrees cooler than the air above bare pavement nearby. Trees provide this relief in two ways. Their leaves block direct sunlight, creating shade, and they release water vapor into the air, which lowers the temperature much as sweat cools the human body. Cities with plenty of trees therefore spend less energy on air conditioning and record fewer illnesses during heat waves. Planting trees is far cheaper than many other cooling methods, yet it is often neglected, and poorer neighborhoods tend to have the fewest trees and the highest temperatures. Recognizing this, several cities have promised to plant millions of new trees, though the young plants will take decades to grow large enough to make a real difference.`;

const p10 = `Tea is the most widely consumed drink in the world after water, but its journey to global popularity was long and often dramatic. According to legend, tea was discovered in China thousands of years ago, and for centuries the plant was grown and processed there in secret. Chinese tea became so valuable in Europe that traders paid for it with enormous amounts of silver, creating a costly imbalance that eventually helped spark serious conflicts. To break China's monopoly, British companies smuggled tea plants and skilled workers out of the country and established vast plantations in India, which soon became a major producer in its own right. Along the way, tea shaped daily habits far beyond Asia: the British ritual of afternoon tea and the tea houses of the Middle East all grew from the same small leaf. Today tea is grown on several continents, yet each culture has made the drink entirely its own.`;

const p11 = `In the darkness of the deep ocean, where sunlight never reaches, many creatures create their own light. This ability, called bioluminescence, is produced by a chemical reaction inside the animals' bodies and appears in a startling range of species, from tiny plankton to fish and squid. The light serves many purposes. Some fish dangle a glowing lure to attract prey toward their mouths, while others flash suddenly to startle an attacker and escape. Certain squid release clouds of glowing liquid to confuse predators, in the same way a fleeing octopus releases ink. On land, bioluminescence is rarer but not unknown; fireflies famously flash to find mates on summer evenings. Scientists have learned to use the glowing chemicals as tools, tagging cells so that they light up and can be tracked under a microscope. What began as a survival trick in the dark has thus become useful in modern laboratories.`;

const p12 = `Every year, people gather at "memory championships" to perform astonishing feats, such as memorizing the order of a shuffled deck of cards in under a minute or recalling hundreds of random numbers. It might seem that these competitors are simply born with extraordinary brains, but studies tell a different story. When researchers scanned the brains of top memory athletes, they found nothing unusual about the structure. Instead, nearly all of the champions relied on the same ancient trick, known as the "memory palace." The method involves imagining a familiar place, such as one's home, and mentally placing each item to be remembered in a specific location along a route through it. To recall the list, the person simply walks through the imagined building in the mind. Because human memory is far better at remembering places and images than abstract facts, this technique lets ordinary people achieve results that look like magic—with practice, almost anyone can learn it.`;

const p13 = `When wolves were reintroduced to Yellowstone National Park in the mid-1990s, after being absent for about seventy years, few people expected the dramatic changes that followed. With no wolves to hunt them, the park's elk had multiplied and grazed heavily on young trees along rivers. Once the wolves returned, the elk began avoiding the open valleys where they were easily caught, and in those areas young willows and other trees grew tall again. The recovering trees provided food and homes for beavers and songbirds, and the beavers' dams created ponds for fish and other creatures. Some scientists even reported that the strengthened riverbanks changed slightly how the rivers flowed. This chain of effects, spreading from a single predator down through an entire ecosystem, is often used as a striking example of how closely living things are connected. Not all researchers agree on how large the wolves' role truly was, but the story has captured public imagination worldwide.`;

const p14 = `As populations grow and dry regions become drier, more countries are turning to the sea to meet their need for fresh water. Desalination, the process of removing salt from seawater, now supplies drinking water to millions of people in places such as the Middle East, where rain is scarce but the ocean is close. Modern plants push seawater at high pressure through special membranes that trap the salt and let clean water pass. The technology is reliable, but it comes at a price. Desalination uses large amounts of energy, which makes the water expensive and, unless renewable power is used, adds to the pollution that worsens the climate in the first place. The plants also produce a very salty waste liquid that, if dumped carelessly back into the sea, can harm marine life near the outflow. Engineers are working to make the process cheaper and cleaner, but for now desalination remains a solution best suited to wealthy coastal nations.`;

const p15 = `Many people assume that sign language is simply a way of spelling out spoken words with the hands, but this is far from the truth. Sign languages are complete, natural languages with their own grammar, and they are not based on the spoken language of the surrounding country. American Sign Language, for example, is more closely related to French Sign Language than to British Sign Language, even though the United States and Britain share the same spoken tongue. Signers convey meaning not only through hand shapes but also through facial expressions and the space around the body, which can indicate who did what to whom. Children who grow up using sign language pass through the same stages of language development as hearing children, even "babbling" with their hands as infants. Linguists study these languages closely because they reveal that the human capacity for language does not depend on sound at all.`;

const p16 = `The history of the domestic cat is very different from that of the dog. Dogs were actively tamed by humans to help with hunting and guarding, but cats, most scientists believe, largely domesticated themselves. About ten thousand years ago, when people in the Middle East began storing grain, the food attracted mice and rats, which in turn attracted wild cats. The cats that were bold enough to live near humans found an easy supply of prey, and farmers were happy to have hunters that protected their harvest. Over generations, the friendliest cats thrived alongside people and gradually spread around the world, often traveling on ships to control rodents. Unlike many farm animals, cats changed very little in body and behavior during this process, which is one reason they remain more independent than dogs. Even today, a house cat can usually survive on its own, a reminder of its only partly tamed past.`;

const p17 = `Iceland sits on a boundary between two of the giant plates that make up the Earth's surface, a location that brings frequent volcanic activity and, with it, an extraordinary source of energy. Just beneath the ground, water is heated by hot rock into steam, which the country uses on a remarkable scale. Nearly all of Iceland's homes are warmed by this geothermal heat piped directly from underground, and much of its electricity comes from the same source. The warm water even feeds outdoor swimming pools that stay open through the freezing winter. Because the heat comes from the Earth itself rather than from burning fuel, it releases very little of the gas that causes climate change, and it does not run out from one year to the next. Not every country is lucky enough to sit on such active ground, but Iceland's example shows how a difficult and even dangerous location can be turned into a national advantage.`;

const p18 = `Every autumn, billions of birds leave their breeding grounds and travel thousands of kilometers to warmer regions, returning again in spring. How they find their way across oceans and deserts, often at night, has puzzled scientists for centuries. Research has shown that birds do not rely on a single method but combine several. During the day, many use the position of the sun, while at night some read the pattern of the stars, which young birds appear to learn before their first journey. Most remarkable of all, birds can sense the Earth's magnetic field and use it like an invisible compass, a skill that may involve special chemicals in their eyes. Landmarks such as coastlines and mountain ranges help guide them over familiar ground. What amazes researchers is that young birds of some species make the entire trip alone, without ever following an experienced adult, meaning the route must somehow be written in their genes.`;

const p19 = `The slow food movement began in Italy in the 1980s as a protest against the opening of a fast-food restaurant near a famous square in Rome. Its founders worried that the spread of quick, standardized meals was causing people to lose touch with where their food came from and with the traditional dishes of their own regions. Rather than simply attacking fast food, the movement encourages people to enjoy meals slowly, to buy from local farmers, and to protect old varieties of fruits, vegetables, and animals that large-scale agriculture has abandoned. Supporters argue that food produced nearby is fresher, supports local economies, and travels a shorter distance, reducing pollution. Critics respond that carefully grown local food is often more expensive and that not everyone has the time or money to cook in the way the movement recommends. Even so, the idea has spread to more than a hundred countries, influencing how many people think about eating.`;

const p20 = `For years, buying used clothes carried a certain stigma, seen as a last resort for those who could not afford new items. That attitude is rapidly changing. Online platforms and smartphone apps now make it easy to buy and sell second-hand clothing, and the market is growing far faster than sales of new clothes. Several forces lie behind the shift. Younger shoppers, worried about the waste created by cheap "fast fashion," see reusing garments as a way to reduce their impact on the planet. Others are drawn by the thrill of hunting for unique or high-quality items at low prices. Even luxury brands, once fearful that a resale market would damage their image, have started to embrace it, reasoning that clothes which hold their value are more attractive to buyers in the first place. Some experts caution that the trend could encourage people to buy even more, whether new or used, but for now the second-hand boom shows how quickly a shopping habit can lose its old shame.`;

export const eikenQuestions2kyuReadingX4: EikenQuestion[] = [
  // === PASSAGE 1: The revival of night trains in Europe (001-003) ===
  {
    id: 'eiken_2kyu_rea4_001',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${p1}\n\nWhy did many railway companies close their sleeper services in the early 2000s?`,
    choices: [
      { key: 'A', text: 'The old carriages had become too dangerous for passengers.' },
      { key: 'B', text: 'They were losing money because budget airlines were cheaper and faster.' },
      { key: 'C', text: 'Governments refused to give them any financial support.' },
      { key: 'D', text: 'Travelers preferred to drive their own cars across Europe.' },
    ],
    correctKey: 'B',
    explanation: '本文に "many railway companies closed their sleeper services because they were losing money" とあり、格安航空がより安く速い移動手段を提供したことが背景です。Bが正解。老朽車両やGの財政支援は「復活」の文脈で語られており、廃止理由ではありません。\n\n【図解】読み取りのポイント\n★because they were losing money / Budget airlines offered cheaper and faster ways\n○赤字経営が廃止の直接理由。格安航空との競争が原因\n×carriages need costly repairs は現在の復活の障害であって廃止理由ではない\n→答えはB',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea4_002',
    level: '2kyu',
    category: 'reading',
    question: `Read the same passage about night trains and answer the question.\n\n${p1}\n\nThe phrase "a fraction of" is closest in meaning to:`,
    choices: [
      { key: 'A', text: 'a small part of' },
      { key: 'B', text: 'a large amount of' },
      { key: 'C', text: 'exactly the same as' },
      { key: 'D', text: 'more than twice' },
    ],
    correctKey: 'A',
    explanation: '"a fraction of the pollution of a short flight" は「短距離飛行の汚染のごく一部」の意味で、列車が飛行機よりはるかに少ない汚染しか出さないという文脈です。Aが正解。fraction は「わずかな部分」を表します。\n\n【図解】読み取りのポイント\n★produces only a fraction of the pollution of a short flight\n○列車の汚染は飛行機より「ごくわずか」→ a small part of\n×large amount や same as では環境に優しいという文意と矛盾\n→答えはA',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea4_003',
    level: '2kyu',
    category: 'reading',
    question: `Read the same passage about night trains and answer the question.\n\n${p1}\n\nWhat concern do critics raise about night trains?`,
    choices: [
      { key: 'A', text: 'They release more carbon than airplanes do.' },
      { key: 'B', text: 'They no longer connect major European cities.' },
      { key: 'C', text: 'Tickets are often more expensive and old carriages need costly repairs.' },
      { key: 'D', text: 'Governments have refused to fund any new sleeper lines.' },
    ],
    correctKey: 'C',
    explanation: '本文に "tickets are still often more expensive than plane seats and that old carriages need costly repairs" とあり、批判者が挙げる懸念はチケットの高さと車両修理の費用です。Cが正解。政府はむしろ新路線に資金を出し始めています。\n\n【図解】読み取りのポイント\n★tickets are still often more expensive / old carriages need costly repairs\n○批判点=高い運賃と修理費\n×governments have begun funding は肯定的動きで、Dの「拒否」と逆\n→答えはC',
    difficulty: 'advanced',
  },

  // === PASSAGE 2: Why humans laugh (004-006) ===
  {
    id: 'eiken_2kyu_rea4_004',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${p2}\n\nWhat does the fact that babies laugh at around four months old suggest?`,
    choices: [
      { key: 'A', text: 'Laughter appears before children can speak.' },
      { key: 'B', text: 'Babies understand jokes from a very early age.' },
      { key: 'C', text: 'Children learn to laugh by copying adults\' words.' },
      { key: 'D', text: 'Laughter develops only after language is mastered.' },
    ],
    correctKey: 'A',
    explanation: '本文に "babies begin to laugh at around four months old, well before they can say a single word" とあり、笑いが言葉より先に現れることを示します。Aが正解。言語習得後という選択肢Dは本文と逆です。\n\n【図解】読み取りのポイント\n★babies begin to laugh ... well before they can say a single word\n○笑いは発話より先に出現する\n×D「言語習得後」は本文と正反対のひっかけ\n→答えはA',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea4_005',
    level: '2kyu',
    category: 'reading',
    question: `Read the same passage about laughter and answer the question.\n\n${p2}\n\nAccording to studies of everyday conversation, most laughter:`,
    choices: [
      { key: 'A', text: 'happens when people are completely alone.' },
      { key: 'B', text: 'follows ordinary comments rather than clever jokes.' },
      { key: 'C', text: 'occurs only when someone tells a very funny story.' },
      { key: 'D', text: 'disappears as people grow older.' },
    ],
    correctKey: 'B',
    explanation: '本文に "most laughter follows ordinary comments, not clever punch lines" とあり、笑いは巧みなジョークではなく普通の発言の後に起こることが多いとされます。Bが正解。笑いは一人よりも他者といるときに多いとあり、Aは誤りです。\n\n【図解】読み取りのポイント\n★most laughter follows ordinary comments, not clever punch lines\n○ジョークより日常会話の後に笑いが起こる\n×A「一人のとき」は more likely to laugh when with others と矛盾\n→答えはB',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea4_006',
    level: '2kyu',
    category: 'reading',
    question: `Read the same passage about laughter and answer the question.\n\n${p2}\n\nWhat can be inferred about the role of laughter in early human societies?`,
    choices: [
      { key: 'A', text: 'It mainly served to warn others of physical danger.' },
      { key: 'B', text: 'It replaced spoken language entirely for a long time.' },
      { key: 'C', text: 'It helped people form and maintain cooperative groups.' },
      { key: 'D', text: 'It was discouraged because it wasted valuable energy.' },
    ],
    correctKey: 'C',
    explanation: '本文は "laughing together strengthens the bonds within a group" と "laughter may have helped early humans build the large, cooperative communities on which their survival depended" と述べ、笑いが協力的な集団を築くのに役立ったと推論できます。Cが正解。\n\n【図解】読み取りのポイント\n★strengthens the bonds within a group / build the large, cooperative communities\n○笑いは集団の結束と協力を支えた\n×A「危険の警告」やD「奨励されなかった」は本文に根拠なし\n→答えはC',
    difficulty: 'advanced',
  },

  // === PASSAGE 3: The comeback of vinyl records (007-009) ===
  {
    id: 'eiken_2kyu_rea4_007',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${p3}\n\nWhy do new listeners value vinyl records, according to the passage?`,
    choices: [
      { key: 'A', text: 'They are far cheaper than digital downloads.' },
      { key: 'B', text: 'They turn listening into an active ritual, not just background noise.' },
      { key: 'C', text: 'They always offer better sound quality than streaming.' },
      { key: 'D', text: 'They can be played anywhere without electricity.' },
    ],
    correctKey: 'B',
    explanation: '本文に "turn listening into an active ritual rather than background noise" とあり、大きなジャケットを手に取り、歌詞を読み、針を置くといった能動的な体験が評価されています。Bが正解。本文は「音質だけではない理由」と明言しており、Cは誤りです。\n\n【図解】読み取りのポイント\n★turn listening into an active ritual rather than background noise\n○能動的な「儀式」としての体験が魅力\n×C「常に音質が良い」は have little to do with sound quality alone と矛盾\n→答えはB',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea4_008',
    level: '2kyu',
    category: 'reading',
    question: `Read the same passage about vinyl records and answer the question.\n\n${p3}\n\nWhat point do skeptics make about the vinyl boom?`,
    choices: [
      { key: 'A', text: 'Vinyl records will soon disappear completely.' },
      { key: 'B', text: 'Record shops are closing again across the country.' },
      { key: 'C', text: 'Many records are bought as decoration and never played.' },
      { key: 'D', text: 'Streaming services have stopped offering popular albums.' },
    ],
    correctKey: 'C',
    explanation: '本文に "a number of vinyl records are bought as decoration and never played" とあり、懐疑派はレコードが飾りとして買われ再生されないことを指摘します。Cが正解。レコード店はむしろ再開しており、Bは誤りです。\n\n【図解】読み取りのポイント\n★bought as decoration and never played\n○飾りとして買われ再生されない点を懐疑派が指摘\n×B「店が再び閉店」は have reopened と矛盾\n→答えはC',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea4_009',
    level: '2kyu',
    category: 'reading',
    question: `Read the same passage about vinyl records and answer the question.\n\n${p3}\n\nWhat main idea does the vinyl revival illustrate?`,
    choices: [
      { key: 'A', text: 'Convenience is not the only thing people want from music.' },
      { key: 'B', text: 'Digital music will soon vanish from the market.' },
      { key: 'C', text: 'Sound quality is the single most important factor for listeners.' },
      { key: 'D', text: 'Older technologies are always superior to newer ones.' },
    ],
    correctKey: 'A',
    explanation: '本文最終文 "convenience is not the only thing people want from music" が主題です。Aが正解。デジタルが消えるとは述べられておらず、B・Dは言い過ぎです。\n\n【図解】読み取りのポイント\n★convenience is not the only thing people want from music\n○利便性以外の価値を人は音楽に求める\n×B・D「デジタルが消える/古い技術が常に優れる」は極端で本文に根拠なし\n→答えはA',
    difficulty: 'advanced',
  },

  // === PASSAGE 4: Tardigrades and extreme survival (010-012) ===
  {
    id: 'eiken_2kyu_rea4_010',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${p4}\n\nWhat happens to tardigrades when their environment dries out?`,
    choices: [
      { key: 'A', text: 'They quickly move to find new sources of water.' },
      { key: 'B', text: 'They pull in their legs and nearly all activity in their bodies stops.' },
      { key: 'C', text: 'They lay eggs that survive until the rain returns.' },
      { key: 'D', text: 'They grow a hard shell to protect their eight legs.' },
    ],
    correctKey: 'B',
    explanation: '本文に "tardigrades pull in their legs and enter a state in which nearly all activity in their bodies stops" とあり、乾燥すると脚を引っ込め体内活動をほぼ停止します。Bが正解。\n\n【図解】読み取りのポイント\n★pull in their legs and enter a state in which nearly all activity ... stops\n○乾燥時は活動をほぼ停止する仮死状態に入る\n×A「水を探して移動」やC「卵を産む」は本文に記述なし\n→答えはB',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea4_011',
    level: '2kyu',
    category: 'reading',
    question: `Read the same passage about tardigrades and answer the question.\n\n${p4}\n\nThe word "withstand" is closest in meaning to:`,
    choices: [
      { key: 'A', text: 'measure accurately' },
      { key: 'B', text: 'produce naturally' },
      { key: 'C', text: 'survive or endure' },
      { key: 'D', text: 'avoid completely' },
    ],
    correctKey: 'C',
    explanation: '"radiation ... stronger than a human could withstand" は「人間が耐えられる以上の放射線」の意味で、withstand は「耐える・持ちこたえる」です。Cが正解。\n\n【図解】読み取りのポイント\n★radiation hundreds of times stronger than a human could withstand\n○withstand = 耐える・持ちこたえる → survive or endure\n×A「正確に測る」やD「完全に避ける」は文脈に合わない\n→答えはC',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea4_012',
    level: '2kyu',
    category: 'reading',
    question: `Read the same passage about tardigrades and answer the question.\n\n${p4}\n\nWhy are scientists studying the chemicals that protect tardigrades?`,
    choices: [
      { key: 'A', text: 'To create new kinds of space rockets.' },
      { key: 'B', text: 'To help preserve human medicines without refrigeration.' },
      { key: 'C', text: 'To make tardigrades grow much larger.' },
      { key: 'D', text: 'To remove radiation from polluted water.' },
    ],
    correctKey: 'B',
    explanation: '本文に "hoping the knowledge might one day help preserve human medicines, and even vaccines, without refrigeration" とあり、冷蔵なしで薬やワクチンを保存する応用が目的です。Bが正解。\n\n【図解】読み取りのポイント\n★help preserve human medicines, and even vaccines, without refrigeration\n○細胞を守る化学物質の研究目的=薬の常温保存\n×A・C・D はいずれも本文に述べられていない応用\n→答えはB',
    difficulty: 'advanced',
  },

  // === PASSAGE 5: Conservation detection dogs (013-015) ===
  {
    id: 'eiken_2kyu_rea4_013',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${p5}\n\nHow do detection dogs help biologists track rare animals?`,
    choices: [
      { key: 'A', text: 'By gently catching the animals and bringing them to researchers.' },
      { key: 'B', text: 'By sniffing out the animals\' droppings without disturbing them.' },
      { key: 'C', text: 'By chasing the animals into fenced areas.' },
      { key: 'D', text: 'By taking photographs of the animals with cameras.' },
    ],
    correctKey: 'B',
    explanation: '本文に "they sniff out the droppings of rare animals, allowing biologists to track populations without ever trapping or disturbing the creatures" とあり、糞のにおいを嗅ぎ分け、動物を捕らえずに個体数を追跡できます。Bが正解。Aの「捕まえる」は without trapping と矛盾します。\n\n【図解】読み取りのポイント\n★sniff out the droppings ... without ever trapping or disturbing the creatures\n○糞のにおいで追跡し、動物を捕らえも乱しもしない\n×A「捕まえる」は without trapping と矛盾\n→答えはB',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea4_014',
    level: '2kyu',
    category: 'reading',
    question: `Read the same passage about detection dogs and answer the question.\n\n${p5}\n\nWhat is the main limitation of using detection dogs?`,
    choices: [
      { key: 'A', text: 'The dogs are unable to smell most animals.' },
      { key: 'B', text: 'The dogs quickly become bored with their work.' },
      { key: 'C', text: 'Training a dog takes many months and considerable money.' },
      { key: 'D', text: 'The dogs frighten the endangered animals away.' },
    ],
    correctKey: 'C',
    explanation: '本文最終文に "The main limitation is cost, as training a single dog takes many months and considerable money" とあり、主な限界は訓練にかかる時間と費用です。Cが正解。犬は仕事を遊びとして楽しむとあり、Bは誤りです。\n\n【図解】読み取りのポイント\n★The main limitation is cost ... takes many months and considerable money\n○主な限界=訓練の時間と費用\n×B「退屈する」は treat each search as a game と矛盾\n→答えはC',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea4_015',
    level: '2kyu',
    category: 'reading',
    question: `Read the same passage about detection dogs and answer the question.\n\n${p5}\n\nWhy do handlers say the work suits the dogs well?`,
    choices: [
      { key: 'A', text: 'The dogs treat each search as a game and are rewarded with play.' },
      { key: 'B', text: 'The dogs prefer working alone without any humans.' },
      { key: 'C', text: 'The dogs are naturally afraid of wild animals.' },
      { key: 'D', text: 'The dogs receive large amounts of food after each search.' },
    ],
    correctKey: 'A',
    explanation: '本文に "the dogs treat each search as a game and are rewarded with play" とあり、犬が捜索を遊びとして楽しみ、遊びで報われるため仕事が合っているとされます。Aが正解。報酬は食べ物ではなく遊びなのでDは誤りです。\n\n【図解】読み取りのポイント\n★treat each search as a game and are rewarded with play\n○捜索を遊びと捉え、遊びで報われる\n×D「大量の食べ物」は rewarded with play と食い違う\n→答えはA',
    difficulty: 'advanced',
  },

  // === PASSAGE 6: Mushroom (mycelium) leather (016-018) ===
  {
    id: 'eiken_2kyu_rea4_016',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${p6}\n\nAccording to supporters, what is an advantage of mushroom leather over traditional leather?`,
    choices: [
      { key: 'A', text: 'It lasts far longer than any animal leather.' },
      { key: 'B', text: 'It uses less land and water and produces no methane.' },
      { key: 'C', text: 'It can be produced instantly at almost no cost.' },
      { key: 'D', text: 'It is completely free from any kind of treatment.' },
    ],
    correctKey: 'B',
    explanation: '本文に "the process uses far less land and water than raising cattle and produces no methane" とあり、支持者は土地・水の使用が少なくメタンを出さない点を利点とします。Bが正解。耐久性はむしろ疑問視されており、Aは誤りです。\n\n【図解】読み取りのポイント\n★uses far less land and water ... and produces no methane\n○環境負荷の低さ（土地・水・メタン）が利点\n×A「はるかに長持ち」は durability に疑問ありと矛盾\n→答えはB',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea4_017',
    level: '2kyu',
    category: 'reading',
    question: `Read the same passage about mushroom leather and answer the question.\n\n${p6}\n\nWhat doubts remain about mushroom leather?`,
    choices: [
      { key: 'A', text: 'Whether customers care about the environment.' },
      { key: 'B', text: 'Whether it can be grown from farm waste.' },
      { key: 'C', text: 'Whether it can match the durability of real leather and be made cheaply in large amounts.' },
      { key: 'D', text: 'Whether fashion brands are willing to use it.' },
    ],
    correctKey: 'C',
    explanation: '本文に "Doubts remain ... about whether mushroom leather can match the durability of the real thing, and producing it in large amounts at a low price is still difficult" とあり、耐久性と大量・低価格生産が課題です。Cが正解。ブランドは既に採用しており、Dは誤りです。\n\n【図解】読み取りのポイント\n★match the durability of the real thing / producing it in large amounts at a low price is still difficult\n○疑問点=耐久性と安価な大量生産\n×D「ブランドが使うか」は already released products と矛盾\n→答えはC',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea4_018',
    level: '2kyu',
    category: 'reading',
    question: `Read the same passage about mushroom leather and answer the question.\n\n${p6}\n\nThe word "novelty" is closest in meaning to:`,
    choices: [
      { key: 'A', text: 'a strict rule' },
      { key: 'B', text: 'a new and unusual thing' },
      { key: 'C', text: 'a cheap copy' },
      { key: 'D', text: 'a common product' },
    ],
    correctKey: 'B',
    explanation: '"stays a luxury novelty" は「高級な目新しい品にとどまる」の意味で、novelty は「新しく珍しいもの」です。Bが正解。common(ありふれた)とは反対の語です。\n\n【図解】読み取りのポイント\n★becomes common or stays a luxury novelty\n○novelty = 目新しく珍しいもの → a new and unusual thing\n×D「ありふれた製品」は common と対比されており逆\n→答えはB',
    difficulty: 'advanced',
  },

  // === PASSAGE 7: Light pollution and dark-sky tourism (019-021) ===
  {
    id: 'eiken_2kyu_rea4_019',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${p7}\n\nWhat is "light pollution" as described in the passage?`,
    choices: [
      { key: 'A', text: 'Harmful chemicals released by streetlamps.' },
      { key: 'B', text: 'Artificial light that brightens the night sky and hides the stars.' },
      { key: 'C', text: 'The heat produced by advertising signs in cities.' },
      { key: 'D', text: 'The loss of electricity during the night.' },
    ],
    correctKey: 'B',
    explanation: '本文に "Artificial light ... brightens the night sky over towns and cities, hiding all but the brightest stars—a problem astronomers call light pollution" とあります。人工光が夜空を明るくし星を隠す問題です。Bが正解。\n\n【図解】読み取りのポイント\n★Artificial light ... brightens the night sky ... hiding all but the brightest stars\n○人工光が夜空を明るくし星を見えなくする\n×A「有害な化学物質」やC「熱」は light pollution の定義ではない\n→答えはB',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea4_020',
    level: '2kyu',
    category: 'reading',
    question: `Read the same passage about light pollution and answer the question.\n\n${p7}\n\nWhich example of harm to wildlife is mentioned?`,
    choices: [
      { key: 'A', text: 'Fish stop swimming toward the surface of the sea.' },
      { key: 'B', text: 'Newly hatched sea turtles crawl toward bright hotels instead of the sea.' },
      { key: 'C', text: 'Insects avoid flowers that grow near cities.' },
      { key: 'D', text: 'Deer come into towns looking for food at night.' },
    ],
    correctKey: 'B',
    explanation: '本文に "newly hatched sea turtles crawl toward bright hotels instead of the sea, and migrating birds become confused by lit-up towers" とあり、ウミガメが海ではなくホテルの明かりへ向かう例が挙がっています。Bが正解。\n\n【図解】読み取りのポイント\n★newly hatched sea turtles crawl toward bright hotels instead of the sea\n○孵化直後のウミガメがホテルの光へ向かう\n×A・C・D はいずれも本文にない野生動物への影響\n→答えはB',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea4_021',
    level: '2kyu',
    category: 'reading',
    question: `Read the same passage about light pollution and answer the question.\n\n${p7}\n\nWhat can be inferred about the problem of light pollution?`,
    choices: [
      { key: 'A', text: 'It can be reduced with simple, low-cost measures.' },
      { key: 'B', text: 'It can only be solved by turning off all city lights.' },
      { key: 'C', text: 'It has no real effect on ordinary travelers.' },
      { key: 'D', text: 'It is impossible to reduce once a city has been built.' },
    ],
    correctKey: 'A',
    explanation: '本文に "Simple measures, such as pointing lamps downward and switching off unnecessary lights, can bring the stars back at little cost" とあり、簡単で低コストの対策で改善できると推論できます。Aが正解。すべての明かりを消す必要があるとは述べられていません。\n\n【図解】読み取りのポイント\n★Simple measures ... can bring the stars back at little cost\n○簡単で安価な対策で改善可能\n×B「すべての街灯を消す」は unnecessary lights のみで足りると矛盾\n→答えはA',
    difficulty: 'advanced',
  },

  // === PASSAGE 8: The rise of audiobooks (022-024) ===
  {
    id: 'eiken_2kyu_rea4_022',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${p8}\n\nWhy do fans praise audiobooks?`,
    choices: [
      { key: 'A', text: 'They are always cheaper than printed books.' },
      { key: 'B', text: 'They let people "read" while doing other things.' },
      { key: 'C', text: 'They contain more information than printed books.' },
      { key: 'D', text: 'They can be enjoyed only in complete silence.' },
    ],
    correctKey: 'B',
    explanation: '本文に "it lets them \'read\' while doing other things—commuting, exercising, or cooking" とあり、他の作業をしながら読める点が評価されています。Bが正解。価格や情報量については述べられていません。\n\n【図解】読み取りのポイント\n★lets them "read" while doing other things—commuting, exercising, or cooking\n○ながら聴きで無駄な時間を活用できる点が魅力\n×A「常に安い」やC「情報量が多い」は本文に根拠なし\n→答えはB',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea4_023',
    level: '2kyu',
    category: 'reading',
    question: `Read the same passage about audiobooks and answer the question.\n\n${p8}\n\nWhat does research suggest about listening compared with reading?`,
    choices: [
      { key: 'A', text: 'The brain understands and remembers stories in similar ways.' },
      { key: 'B', text: 'Listening is clearly worse for understanding stories.' },
      { key: 'C', text: 'Reading with the eyes always produces stronger memories.' },
      { key: 'D', text: 'Listeners forget most of what they hear within a day.' },
    ],
    correctKey: 'A',
    explanation: '本文に "research suggests that the brain understands and remembers stories in similar ways whether they are heard or read" とあり、聴くことと読むことで理解や記憶は似ているとされます。Aが正解。劣るとするB・Cは本文と逆です。\n\n【図解】読み取りのポイント\n★the brain understands and remembers stories in similar ways whether they are heard or read\n○聴く・読むで理解と記憶は同程度\n×B・C「聴く方が劣る/読む方が優れる」は research と矛盾\n→答えはA',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea4_024',
    level: '2kyu',
    category: 'reading',
    question: `Read the same passage about audiobooks and answer the question.\n\n${p8}\n\nWhat does the behavior of publishers suggest?`,
    choices: [
      { key: 'A', text: 'They believe audiobooks will soon disappear.' },
      { key: 'B', text: 'They now treat audiobooks as an important, mainstream format.' },
      { key: 'C', text: 'They have stopped printing paper books entirely.' },
      { key: 'D', text: 'They refuse to record popular novels as audio.' },
    ],
    correctKey: 'B',
    explanation: '本文に "Publishers, once cautious, now record audio versions of most major books, and a few authors write specifically with the listening experience in mind" とあり、出版社がオーディオブックを主流の形式として重視していると推論できます。Bが正解。\n\n【図解】読み取りのポイント\n★now record audio versions of most major books / authors write ... with the listening experience in mind\n○出版社はオーディオを主流形式として扱うようになった\n×A「消える」やD「録音を拒む」は本文の動きと逆\n→答えはB',
    difficulty: 'advanced',
  },

  // === PASSAGE 9: Urban trees cooling cities (025-027) ===
  {
    id: 'eiken_2kyu_rea4_025',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${p9}\n\nIn what two ways do trees help cool city streets?`,
    choices: [
      { key: 'A', text: 'By storing rainwater and blocking strong winds.' },
      { key: 'B', text: 'By creating shade and releasing water vapor into the air.' },
      { key: 'C', text: 'By reflecting sunlight and absorbing traffic noise.' },
      { key: 'D', text: 'By producing oxygen and lowering air pressure.' },
    ],
    correctKey: 'B',
    explanation: '本文に "Their leaves block direct sunlight, creating shade, and they release water vapor into the air, which lowers the temperature" とあり、日陰をつくることと水蒸気を放出することの2つです。Bが正解。\n\n【図解】読み取りのポイント\n★block direct sunlight, creating shade ... release water vapor into the air\n○冷却の2手段=日陰づくりと水蒸気の放出\n×A・C・D は本文にない仕組みを混ぜたひっかけ\n→答えはB',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea4_026',
    level: '2kyu',
    category: 'reading',
    question: `Read the same passage about urban trees and answer the question.\n\n${p9}\n\nWhat does the passage say about poorer neighborhoods?`,
    choices: [
      { key: 'A', text: 'They tend to have the fewest trees and the highest temperatures.' },
      { key: 'B', text: 'They usually have more trees than wealthy areas.' },
      { key: 'C', text: 'They spend the most money on air conditioning.' },
      { key: 'D', text: 'They have already planted millions of new trees.' },
    ],
    correctKey: 'A',
    explanation: '本文に "poorer neighborhoods tend to have the fewest trees and the highest temperatures" とあり、貧しい地区は木が最も少なく気温が最も高い傾向にあります。Aが正解。\n\n【図解】読み取りのポイント\n★poorer neighborhoods tend to have the fewest trees and the highest temperatures\n○貧困地区ほど木が少なく暑い\n×B「木が多い」は本文と正反対\n→答えはA',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea4_027',
    level: '2kyu',
    category: 'reading',
    question: `Read the same passage about urban trees and answer the question.\n\n${p9}\n\nWhy will new tree-planting programs not solve the problem immediately?`,
    choices: [
      { key: 'A', text: 'The trees are too expensive for cities to buy.' },
      { key: 'B', text: 'The young plants will take decades to grow large enough to help.' },
      { key: 'C', text: 'Most residents do not want trees on their streets.' },
      { key: 'D', text: 'The trees release harmful gases while they are young.' },
    ],
    correctKey: 'B',
    explanation: '本文最終文に "the young plants will take decades to grow large enough to make a real difference" とあり、若木が十分に育つには数十年かかるため効果はすぐには出ません。Bが正解。植樹は他の方法より安いとあり、Aは誤りです。\n\n【図解】読み取りのポイント\n★the young plants will take decades to grow large enough to make a real difference\n○効果が出るまで若木の成長に数十年かかる\n×A「高価すぎる」は cheaper than many other methods と矛盾\n→答えはB',
    difficulty: 'advanced',
  },

  // === PASSAGE 10: The global history of tea (028-030) ===
  {
    id: 'eiken_2kyu_rea4_028',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${p10}\n\nWhy did British companies establish tea plantations in India?`,
    choices: [
      { key: 'A', text: 'Because tea grew better in India than anywhere else.' },
      { key: 'B', text: 'To break China\'s monopoly on tea.' },
      { key: 'C', text: 'Because Indian workers refused to grow other crops.' },
      { key: 'D', text: 'To sell silver more cheaply to European traders.' },
    ],
    correctKey: 'B',
    explanation: '本文に "To break China\'s monopoly, British companies smuggled tea plants and skilled workers out of the country and established vast plantations in India" とあり、中国の独占を崩すためです。Bが正解。\n\n【図解】読み取りのポイント\n★To break China\'s monopoly ... established vast plantations in India\n○インドで栽培した目的=中国の独占を打破するため\n×A・C・D は本文に根拠のない理由\n→答えはB',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea4_029',
    level: '2kyu',
    category: 'reading',
    question: `Read the same passage about tea and answer the question.\n\n${p10}\n\nThe word "monopoly" is closest in meaning to:`,
    choices: [
      { key: 'A', text: 'complete control over the supply of something' },
      { key: 'B', text: 'a small share of a market' },
      { key: 'C', text: 'a friendly trade agreement' },
      { key: 'D', text: 'a sudden fall in prices' },
    ],
    correctKey: 'A',
    explanation: '"break China\'s monopoly" は「中国の独占を崩す」の意味で、monopoly は供給を完全に支配することです。Aが正解。中国が茶を秘密裏に独占していた文脈に合います。\n\n【図解】読み取りのポイント\n★To break China\'s monopoly / grown and processed there in secret\n○monopoly = 供給の完全な支配 → complete control over the supply\n×B「小さな市場占有」は独占の反対\n→答えはA',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea4_030',
    level: '2kyu',
    category: 'reading',
    question: `Read the same passage about tea and answer the question.\n\n${p10}\n\nWhat does the passage suggest about tea's cultural role?`,
    choices: [
      { key: 'A', text: 'Every culture drinks tea in exactly the same way.' },
      { key: 'B', text: 'Tea is now only popular in Asia.' },
      { key: 'C', text: 'Different cultures have adapted tea in their own distinctive ways.' },
      { key: 'D', text: 'Tea has lost its importance in daily life everywhere.' },
    ],
    correctKey: 'C',
    explanation: '本文に "each culture has made the drink entirely its own" とあり、英国のアフタヌーンティーや中東の茶館など、各文化が独自に茶を取り入れたことが示されています。Cが正解。\n\n【図解】読み取りのポイント\n★each culture has made the drink entirely its own\n○各文化が茶を独自の形に取り入れた\n×A「全く同じ」やB「アジアだけ」は本文と矛盾\n→答えはC',
    difficulty: 'advanced',
  },

  // === PASSAGE 11: Bioluminescence (031-033) ===
  {
    id: 'eiken_2kyu_rea4_031',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${p11}\n\nWhat is bioluminescence?`,
    choices: [
      { key: 'A', text: 'The reflection of sunlight deep under the sea.' },
      { key: 'B', text: 'Light that creatures create through a chemical reaction in their bodies.' },
      { key: 'C', text: 'A kind of electricity produced by certain fish.' },
      { key: 'D', text: 'The glow of the ocean caused by warm currents.' },
    ],
    correctKey: 'B',
    explanation: '本文に "bioluminescence, is produced by a chemical reaction inside the animals\' bodies" とあり、体内の化学反応でつくられる光です。Bが正解。深海には日光が届かないため反射ではありません。\n\n【図解】読み取りのポイント\n★produced by a chemical reaction inside the animals\' bodies\n○生物発光=体内の化学反応で作る光\n×A「日光の反射」は where sunlight never reaches と矛盾\n→答えはB',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea4_032',
    level: '2kyu',
    category: 'reading',
    question: `Read the same passage about bioluminescence and answer the question.\n\n${p11}\n\nWhich purpose of bioluminescence is mentioned in the passage?`,
    choices: [
      { key: 'A', text: 'Warming the water around the animal.' },
      { key: 'B', text: 'Helping the animal see in complete darkness.' },
      { key: 'C', text: 'Attracting prey or startling an attacker to escape.' },
      { key: 'D', text: 'Communicating messages over very long distances.' },
    ],
    correctKey: 'C',
    explanation: '本文に "Some fish dangle a glowing lure to attract prey ... while others flash suddenly to startle an attacker and escape" とあり、獲物をおびき寄せたり捕食者を驚かせて逃げたりする目的が挙げられています。Cが正解。\n\n【図解】読み取りのポイント\n★attract prey toward their mouths / flash suddenly to startle an attacker and escape\n○発光の用途=獲物誘引や捕食者への威嚇\n×A「水を温める」やB「暗闇で見る」は本文にない\n→答えはC',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea4_033',
    level: '2kyu',
    category: 'reading',
    question: `Read the same passage about bioluminescence and answer the question.\n\n${p11}\n\nHow have scientists made use of the glowing chemicals?`,
    choices: [
      { key: 'A', text: 'By lighting up dark ocean laboratories.' },
      { key: 'B', text: 'By tagging cells so they can be tracked under a microscope.' },
      { key: 'C', text: 'By creating new kinds of firefly.' },
      { key: 'D', text: 'By producing electricity for coastal towns.' },
    ],
    correctKey: 'B',
    explanation: '本文に "tagging cells so that they light up and can be tracked under a microscope" とあり、細胞に印をつけて顕微鏡で追跡できるようにしています。Bが正解。\n\n【図解】読み取りのポイント\n★tagging cells so that they light up and can be tracked under a microscope\n○発光化学物質で細胞に標識をつけ追跡する\n×A・C・D は本文にない応用\n→答えはB',
    difficulty: 'advanced',
  },

  // === PASSAGE 12: Memory athletes and the memory palace (034-036) ===
  {
    id: 'eiken_2kyu_rea4_034',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${p12}\n\nWhat did researchers find when they scanned the brains of top memory athletes?`,
    choices: [
      { key: 'A', text: 'Their brains were much larger than average.' },
      { key: 'B', text: 'There was nothing unusual about the structure of their brains.' },
      { key: 'C', text: 'A special part of their brains had disappeared.' },
      { key: 'D', text: 'Their brains changed shape during each competition.' },
    ],
    correctKey: 'B',
    explanation: '本文に "they found nothing unusual about the structure" とあり、記憶競技者の脳の構造に特別な点はありませんでした。Bが正解。生まれつき特別な脳という考えを否定しています。\n\n【図解】読み取りのポイント\n★they found nothing unusual about the structure\n○脳の構造に特別な点はなかった\n×A「脳が大きい」は born with extraordinary brains を否定する内容と矛盾\n→答えはB',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea4_035',
    level: '2kyu',
    category: 'reading',
    question: `Read the same passage about memory athletes and answer the question.\n\n${p12}\n\nHow does the "memory palace" technique work?`,
    choices: [
      { key: 'A', text: 'By repeating each item aloud hundreds of times.' },
      { key: 'B', text: 'By writing the items down on paper very quickly.' },
      { key: 'C', text: 'By placing each item in a location along a route through a familiar place.' },
      { key: 'D', text: 'By turning each item into a number and adding them together.' },
    ],
    correctKey: 'C',
    explanation: '本文に "mentally placing each item to be remembered in a specific location along a route through it" とあり、覚えたい物を身近な場所の道筋に沿って配置します。Cが正解。\n\n【図解】読み取りのポイント\n★placing each item ... in a specific location along a route through it\n○記憶の宮殿=身近な場所の道筋に物を配置する\n×A「声に出して繰り返す」やD「数字にして足す」は本文にない\n→答えはC',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea4_036',
    level: '2kyu',
    category: 'reading',
    question: `Read the same passage about memory athletes and answer the question.\n\n${p12}\n\nWhat can be inferred about extraordinary memory?`,
    choices: [
      { key: 'A', text: 'It is a skill that can be learned with practice.' },
      { key: 'B', text: 'It belongs only to people born with special brains.' },
      { key: 'C', text: 'It cannot be improved no matter how hard one tries.' },
      { key: 'D', text: 'It works best for remembering abstract facts.' },
    ],
    correctKey: 'A',
    explanation: '本文に "with practice, almost anyone can learn it" とあり、驚異的な記憶力は練習で身につく技術だと推論できます。Aが正解。生まれつきの脳に限るとするBは本文と逆です。\n\n【図解】読み取りのポイント\n★with practice, almost anyone can learn it\n○優れた記憶力は練習で習得できる技術\n×B「特別な脳の人だけ」は studies tell a different story と矛盾\n→答えはA',
    difficulty: 'advanced',
  },

  // === PASSAGE 13: Rewilding — wolves in Yellowstone (037-039) ===
  {
    id: 'eiken_2kyu_rea4_037',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${p13}\n\nWhy did young trees along the rivers grow tall again after the wolves returned?`,
    choices: [
      { key: 'A', text: 'The wolves watered the trees during dry seasons.' },
      { key: 'B', text: 'The elk avoided the open valleys and grazed there less.' },
      { key: 'C', text: 'Park workers planted thousands of new trees.' },
      { key: 'D', text: 'The rivers began to flow more slowly.' },
    ],
    correctKey: 'B',
    explanation: '本文に "the elk began avoiding the open valleys where they were easily caught, and in those areas young willows and other trees grew tall again" とあり、エルクが谷を避けて草食が減ったためです。Bが正解。\n\n【図解】読み取りのポイント\n★the elk began avoiding the open valleys ... young willows and other trees grew tall again\n○オオカミを恐れたエルクが谷を避け、草食が減り樹木が回復\n×C「職員が植えた」は本文にない\n→答えはB',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea4_038',
    level: '2kyu',
    category: 'reading',
    question: `Read the same passage about Yellowstone wolves and answer the question.\n\n${p13}\n\nWhat did the beavers' dams create?`,
    choices: [
      { key: 'A', text: 'New paths for the elk to travel along.' },
      { key: 'B', text: 'Ponds for fish and other creatures.' },
      { key: 'C', text: 'Shelters that protected the wolves in winter.' },
      { key: 'D', text: 'Barriers that stopped the rivers completely.' },
    ],
    correctKey: 'B',
    explanation: '本文に "the beavers\' dams created ponds for fish and other creatures" とあり、ビーバーのダムが魚などのための池をつくりました。Bが正解。\n\n【図解】読み取りのポイント\n★the beavers\' dams created ponds for fish and other creatures\n○ダムが魚などの生き物のための池を生んだ\n×A・C・D は本文にないダムの働き\n→答えはB',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea4_039',
    level: '2kyu',
    category: 'reading',
    question: `Read the same passage about Yellowstone wolves and answer the question.\n\n${p13}\n\nWhat is the wolf story often used to show?`,
    choices: [
      { key: 'A', text: 'That predators should be removed from national parks.' },
      { key: 'B', text: 'That living things in an ecosystem are closely connected.' },
      { key: 'C', text: 'That elk are the most important animals in the park.' },
      { key: 'D', text: 'That rivers cannot change once they are formed.' },
    ],
    correctKey: 'B',
    explanation: '本文に "often used as a striking example of how closely living things are connected" とあり、生態系の生き物が密接につながっていることを示す例として使われます。Bが正解。研究者全員が影響の大きさに同意しているわけではない点も示されています。\n\n【図解】読み取りのポイント\n★a striking example of how closely living things are connected\n○この連鎖は生き物のつながりの深さを示す例\n×A「捕食者を除くべき」は本文の趣旨と逆\n→答えはB',
    difficulty: 'advanced',
  },

  // === PASSAGE 14: Desalination and water scarcity (040-042) ===
  {
    id: 'eiken_2kyu_rea4_040',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${p14}\n\nHow do modern desalination plants remove salt from seawater?`,
    choices: [
      { key: 'A', text: 'By boiling the water until the salt burns away.' },
      { key: 'B', text: 'By freezing the water and removing the ice.' },
      { key: 'C', text: 'By pushing seawater at high pressure through special membranes.' },
      { key: 'D', text: 'By adding chemicals that dissolve the salt.' },
    ],
    correctKey: 'C',
    explanation: '本文に "Modern plants push seawater at high pressure through special membranes that trap the salt and let clean water pass" とあり、高圧で特殊な膜に海水を通して塩を取り除きます。Cが正解。\n\n【図解】読み取りのポイント\n★push seawater at high pressure through special membranes that trap the salt\n○高圧で膜に通し塩を捕らえる方式\n×A「煮沸」やB「凍結」は本文にない方法\n→答えはC',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea4_041',
    level: '2kyu',
    category: 'reading',
    question: `Read the same passage about desalination and answer the question.\n\n${p14}\n\nWhat environmental drawbacks of desalination are mentioned?`,
    choices: [
      { key: 'A', text: 'It uses large amounts of energy and produces salty waste that can harm marine life.' },
      { key: 'B', text: 'It removes too much water from rivers and lakes.' },
      { key: 'C', text: 'It releases fresh water that floods nearby farms.' },
      { key: 'D', text: 'It makes the seawater around plants far too cold.' },
    ],
    correctKey: 'A',
    explanation: '本文に "Desalination uses large amounts of energy ... The plants also produce a very salty waste liquid that ... can harm marine life" とあり、多大なエネルギー使用と塩分の高い廃液による海洋生物への害が欠点です。Aが正解。\n\n【図解】読み取りのポイント\n★uses large amounts of energy / a very salty waste liquid ... can harm marine life\n○欠点=高エネルギー消費と塩分廃液による海洋への害\n×B・C・D は本文にない環境影響\n→答えはA',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea4_042',
    level: '2kyu',
    category: 'reading',
    question: `Read the same passage about desalination and answer the question.\n\n${p14}\n\nWhy is desalination described as best suited to wealthy coastal nations?`,
    choices: [
      { key: 'A', text: 'Because only rich countries have any seawater.' },
      { key: 'B', text: 'Because it is expensive, energy-hungry, and needs access to the sea.' },
      { key: 'C', text: 'Because poor countries never suffer from water shortages.' },
      { key: 'D', text: 'Because the process works only in cold climates.' },
    ],
    correctKey: 'B',
    explanation: '本文に "Desalination uses large amounts of energy, which makes the water expensive" とあり、海の近くで多額の費用がかかるため、豊かな沿岸国に向くとされます。Bが正解。\n\n【図解】読み取りのポイント\n★uses large amounts of energy ... makes the water expensive / turning to the sea\n○高コスト・高エネルギー・海への近接が必要→富裕な沿岸国向き\n×C「貧困国は水不足がない」は本文と無関係で誤り\n→答えはB',
    difficulty: 'advanced',
  },

  // === PASSAGE 15: Sign languages as true languages (043-045) ===
  {
    id: 'eiken_2kyu_rea4_043',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${p15}\n\nWhat shows that American Sign Language is not based on English?`,
    choices: [
      { key: 'A', text: 'It uses no facial expressions at all.' },
      { key: 'B', text: 'It is more closely related to French Sign Language than to British Sign Language.' },
      { key: 'C', text: 'It has no grammar of its own.' },
      { key: 'D', text: 'It can only be understood by hearing people.' },
    ],
    correctKey: 'B',
    explanation: '本文に "American Sign Language ... is more closely related to French Sign Language than to British Sign Language, even though the United States and Britain share the same spoken tongue" とあり、英語を話す国どうしでも手話は別系統である点が根拠です。Bが正解。\n\n【図解】読み取りのポイント\n★more closely related to French Sign Language than to British Sign Language\n○同じ英語圏でも手話が異なる=話し言葉に基づかない証拠\n×C「独自の文法がない」は complete, natural languages with their own grammar と矛盾\n→答えはB',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea4_044',
    level: '2kyu',
    category: 'reading',
    question: `Read the same passage about sign languages and answer the question.\n\n${p15}\n\nBesides hand shapes, how do signers convey meaning?`,
    choices: [
      { key: 'A', text: 'Through facial expressions and the space around the body.' },
      { key: 'B', text: 'By speaking words at the same time.' },
      { key: 'C', text: 'By writing letters in the air one by one.' },
      { key: 'D', text: 'By tapping out a rhythm with their feet.' },
    ],
    correctKey: 'A',
    explanation: '本文に "Signers convey meaning not only through hand shapes but also through facial expressions and the space around the body" とあり、表情と体の周りの空間を用います。Aが正解。\n\n【図解】読み取りのポイント\n★facial expressions and the space around the body\n○手の形に加え、表情と身体周辺の空間で意味を伝える\n×B・C・D は本文にない手段\n→答えはA',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea4_045',
    level: '2kyu',
    category: 'reading',
    question: `Read the same passage about sign languages and answer the question.\n\n${p15}\n\nWhy do linguists study sign languages closely?`,
    choices: [
      { key: 'A', text: 'Because they are easier to learn than spoken languages.' },
      { key: 'B', text: 'Because they reveal that language does not depend on sound.' },
      { key: 'C', text: 'Because they are spoken in only one country.' },
      { key: 'D', text: 'Because they have no connection to child development.' },
    ],
    correctKey: 'B',
    explanation: '本文に "they reveal that the human capacity for language does not depend on sound at all" とあり、言語能力が音に依存しないことを示すため研究されます。Bが正解。\n\n【図解】読み取りのポイント\n★the human capacity for language does not depend on sound at all\n○手話研究の意義=言語能力が音に依存しないことを示す\n×D「子どもの発達と無関係」は same stages of language development と矛盾\n→答えはB',
    difficulty: 'advanced',
  },

  // === PASSAGE 16: The domestication of cats (046-048) ===
  {
    id: 'eiken_2kyu_rea4_046',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${p16}\n\nAccording to the passage, why did wild cats first come near humans?`,
    choices: [
      { key: 'A', text: 'Humans trained them to guard their homes.' },
      { key: 'B', text: 'Stored grain attracted mice and rats, which the cats hunted.' },
      { key: 'C', text: 'Farmers gave them milk and meat every day.' },
      { key: 'D', text: 'They were carried to farms on ships.' },
    ],
    correctKey: 'B',
    explanation: '本文に "the food attracted mice and rats, which in turn attracted wild cats" とあり、蓄えた穀物に集まるネズミを狙って野生の猫が人間の近くに来ました。Bが正解。\n\n【図解】読み取りのポイント\n★the food attracted mice and rats, which in turn attracted wild cats\n○穀物→ネズミ→それを狙う猫、という順で人に近づいた\n×A「番犬のように訓練」やC「毎日餌を与えた」は本文にない\n→答えはB',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea4_047',
    level: '2kyu',
    category: 'reading',
    question: `Read the same passage about cats and answer the question.\n\n${p16}\n\nWhy do cats remain more independent than dogs?`,
    choices: [
      { key: 'A', text: 'They changed very little in body and behavior during domestication.' },
      { key: 'B', text: 'They were tamed much more recently than dogs.' },
      { key: 'C', text: 'They were never useful to farmers.' },
      { key: 'D', text: 'They cannot survive without human care.' },
    ],
    correctKey: 'A',
    explanation: '本文に "cats changed very little in body and behavior during this process, which is one reason they remain more independent than dogs" とあり、家畜化の過程でほとんど変化しなかったためです。Aが正解。今でも自力で生きられるとあり、Dは誤りです。\n\n【図解】読み取りのポイント\n★cats changed very little in body and behavior ... remain more independent than dogs\n○ほとんど変化しなかったため独立性が高い\n×D「人の世話なしでは生きられない」は can usually survive on its own と矛盾\n→答えはA',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea4_048',
    level: '2kyu',
    category: 'reading',
    question: `Read the same passage about cats and answer the question.\n\n${p16}\n\nWhat does the phrase "its only partly tamed past" suggest about house cats?`,
    choices: [
      { key: 'A', text: 'They were never useful to humans in any way.' },
      { key: 'B', text: 'They are not fully domesticated even today.' },
      { key: 'C', text: 'They have completely forgotten how to hunt.' },
      { key: 'D', text: 'They cannot live near humans anymore.' },
    ],
    correctKey: 'B',
    explanation: '"a reminder of its only partly tamed past" は「部分的にしか飼い慣らされていない過去の名残」を意味し、家猫が今でも完全には家畜化されていないことを示します。Bが正解。自力で生きられるという直前の記述とも一致します。\n\n【図解】読み取りのポイント\n★a house cat can usually survive on its own, a reminder of its only partly tamed past\n○家猫は今も完全には家畜化されていない\n×C「狩りを忘れた」は survive on its own と矛盾\n→答えはB',
    difficulty: 'advanced',
  },

  // === PASSAGE 17: Geothermal energy in Iceland (049-051) ===
  {
    id: 'eiken_2kyu_rea4_049',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${p17}\n\nHow are nearly all of Iceland's homes heated?`,
    choices: [
      { key: 'A', text: 'By burning imported oil and gas.' },
      { key: 'B', text: 'By geothermal heat piped directly from underground.' },
      { key: 'C', text: 'By electricity produced from wind turbines.' },
      { key: 'D', text: 'By solar panels placed on every roof.' },
    ],
    correctKey: 'B',
    explanation: '本文に "Nearly all of Iceland\'s homes are warmed by this geothermal heat piped directly from underground" とあり、地熱を地下から直接送って暖房しています。Bが正解。\n\n【図解】読み取りのポイント\n★warmed by this geothermal heat piped directly from underground\n○ほぼすべての家庭が地熱で暖房される\n×A「石油・ガスを燃やす」は rather than from burning fuel と矛盾\n→答えはB',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea4_050',
    level: '2kyu',
    category: 'reading',
    question: `Read the same passage about Iceland and answer the question.\n\n${p17}\n\nWhy is geothermal heat good for the climate?`,
    choices: [
      { key: 'A', text: 'It releases very little climate-changing gas and does not run out.' },
      { key: 'B', text: 'It removes carbon dioxide from the atmosphere.' },
      { key: 'C', text: 'It cools the country during hot summers.' },
      { key: 'D', text: 'It produces large amounts of clean drinking water.' },
    ],
    correctKey: 'A',
    explanation: '本文に "it releases very little of the gas that causes climate change, and it does not run out from one year to the next" とあり、温暖化ガスをほとんど出さず枯渇しない点が利点です。Aが正解。\n\n【図解】読み取りのポイント\n★releases very little of the gas that causes climate change ... does not run out\n○地熱は温暖化ガスが少なく枯渇しない\n×B「CO2を除去」やD「飲料水を作る」は本文にない効果\n→答えはA',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea4_051',
    level: '2kyu',
    category: 'reading',
    question: `Read the same passage about Iceland and answer the question.\n\n${p17}\n\nWhat main idea does Iceland's example illustrate?`,
    choices: [
      { key: 'A', text: 'Volcanic activity should always be feared and avoided.' },
      { key: 'B', text: 'A difficult and dangerous location can be turned into an advantage.' },
      { key: 'C', text: 'Every country can easily copy Iceland\'s energy system.' },
      { key: 'D', text: 'Geothermal energy is more expensive than burning fuel.' },
    ],
    correctKey: 'B',
    explanation: '本文最終文に "Iceland\'s example shows how a difficult and even dangerous location can be turned into a national advantage" とあり、困難で危険な立地を国の強みに変えられることを示しています。Bが正解。すべての国が真似できるとは述べておらず、Cは誤りです。\n\n【図解】読み取りのポイント\n★a difficult and even dangerous location can be turned into a national advantage\n○危険な立地を国の利点に変えた好例\n×C「どの国も簡単に真似できる」は Not every country is lucky enough と矛盾\n→答えはB',
    difficulty: 'advanced',
  },

  // === PASSAGE 18: How migratory birds navigate (052-054) ===
  {
    id: 'eiken_2kyu_rea4_052',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${p18}\n\nWhich method do birds use to find their way, according to the passage?`,
    choices: [
      { key: 'A', text: 'They follow the smell of the ocean.' },
      { key: 'B', text: 'They sense the Earth\'s magnetic field like an invisible compass.' },
      { key: 'C', text: 'They listen for sounds made by other flocks.' },
      { key: 'D', text: 'They rely only on warm winds from the south.' },
    ],
    correctKey: 'B',
    explanation: '本文に "birds can sense the Earth\'s magnetic field and use it like an invisible compass" とあり、地球の磁場を見えないコンパスのように使います。Bが正解。太陽や星、目印も併用します。\n\n【図解】読み取りのポイント\n★sense the Earth\'s magnetic field and use it like an invisible compass\n○磁場を見えないコンパスとして利用する\n×A「においを追う」やC「他の群れの音」は本文にない方法\n→答えはB',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea4_053',
    level: '2kyu',
    category: 'reading',
    question: `Read the same passage about migratory birds and answer the question.\n\n${p18}\n\nWhat amazes researchers about young birds of some species?`,
    choices: [
      { key: 'A', text: 'They make the entire journey alone, without following an experienced adult.' },
      { key: 'B', text: 'They always travel in the company of older birds.' },
      { key: 'C', text: 'They refuse to migrate until they are several years old.' },
      { key: 'D', text: 'They fly only during the daytime.' },
    ],
    correctKey: 'A',
    explanation: '本文に "young birds of some species make the entire trip alone, without ever following an experienced adult, meaning the route must somehow be written in their genes" とあり、若い鳥が経験ある成鳥に従わず単独で旅をする点が研究者を驚かせます。Aが正解。\n\n【図解】読み取りのポイント\n★young birds ... make the entire trip alone, without ever following an experienced adult\n○経験ある成鳥なしに単独で全行程を飛ぶ点が驚き→経路は遺伝に\n×B「常に年上と一緒」は本文と正反対\n→答えはA',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea4_054',
    level: '2kyu',
    category: 'reading',
    question: `Read the same passage about migratory birds and answer the question.\n\n${p18}\n\nThe word "puzzled" is closest in meaning to:`,
    choices: [
      { key: 'A', text: 'confused or mystified' },
      { key: 'B', text: 'completely satisfied' },
      { key: 'C', text: 'strongly annoyed' },
      { key: 'D', text: 'clearly explained' },
    ],
    correctKey: 'A',
    explanation: '"has puzzled scientists for centuries" は「何世紀も科学者を悩ませてきた」の意味で、puzzle は「困惑させる・当惑させる」です。Aが正解。\n\n【図解】読み取りのポイント\n★How they find their way ... has puzzled scientists for centuries\n○puzzled = 困惑させる → confused or mystified\n×D「はっきり説明された」は謎であるという文意と逆\n→答えはA',
    difficulty: 'advanced',
  },

  // === PASSAGE 19: The slow food movement (055-057) ===
  {
    id: 'eiken_2kyu_rea4_055',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${p19}\n\nWhy did the slow food movement begin?`,
    choices: [
      { key: 'A', text: 'As a protest against a fast-food restaurant opening in Rome.' },
      { key: 'B', text: 'To help fast-food chains spread more quickly.' },
      { key: 'C', text: 'Because traditional dishes had become too expensive.' },
      { key: 'D', text: 'To encourage people to cook more quickly.' },
    ],
    correctKey: 'A',
    explanation: '本文に "began in Italy in the 1980s as a protest against the opening of a fast-food restaurant near a famous square in Rome" とあり、ローマのファストフード店開店への抗議として始まりました。Aが正解。\n\n【図解】読み取りのポイント\n★as a protest against the opening of a fast-food restaurant near a famous square in Rome\n○起源=ローマでのファストフード店開店への抗議\n×B「拡大を助ける」やD「速く料理する」は運動の趣旨と逆\n→答えはA',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea4_056',
    level: '2kyu',
    category: 'reading',
    question: `Read the same passage about the slow food movement and answer the question.\n\n${p19}\n\nWhat do critics say about the movement?`,
    choices: [
      { key: 'A', text: 'Local food is too fresh to enjoy.' },
      { key: 'B', text: 'Local food is often more expensive and not everyone has the time or money.' },
      { key: 'C', text: 'The movement has spread to too few countries.' },
      { key: 'D', text: 'Traditional dishes are bad for the local economy.' },
    ],
    correctKey: 'B',
    explanation: '本文に "carefully grown local food is often more expensive and that not everyone has the time or money to cook in the way the movement recommends" とあり、批判者は費用や時間の問題を指摘します。Bが正解。\n\n【図解】読み取りのポイント\n★local food is often more expensive / not everyone has the time or money\n○批判=地元産は割高で時間や金銭の余裕が要る\n×C「広まった国が少ない」は more than a hundred countries と矛盾\n→答えはB',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea4_057',
    level: '2kyu',
    category: 'reading',
    question: `Read the same passage about the slow food movement and answer the question.\n\n${p19}\n\nWhat is the movement's main goal?`,
    choices: [
      { key: 'A', text: 'To make all restaurants serve food more slowly.' },
      { key: 'B', text: 'To reconnect people with local food and traditional dishes.' },
      { key: 'C', text: 'To ban large-scale agriculture completely.' },
      { key: 'D', text: 'To lower the price of imported food.' },
    ],
    correctKey: 'B',
    explanation: '本文は、人々が食べ物の産地や地域の伝統料理とのつながりを失うことへの懸念から、地元の農家から買い、古い品種を守ることを勧めています。運動の目的は人々と地元の食との再結合です。Bが正解。\n\n【図解】読み取りのポイント\n★lose touch with where their food came from / buy from local farmers, protect old varieties\n○目的=人々を地元の食と伝統料理に再び結びつける\n×C「大規模農業を禁止」は言い過ぎで本文にない\n→答えはB',
    difficulty: 'advanced',
  },

  // === PASSAGE 20: The second-hand clothing market (058-060) ===
  {
    id: 'eiken_2kyu_rea4_058',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${p20}\n\nHow has the attitude toward buying used clothes changed?`,
    choices: [
      { key: 'A', text: 'It still carries the same stigma as in the past.' },
      { key: 'B', text: 'It is no longer seen mainly as a last resort, and the market is growing fast.' },
      { key: 'C', text: 'People now buy used clothes only when new ones are unavailable.' },
      { key: 'D', text: 'Buying used clothes has become illegal in many places.' },
    ],
    correctKey: 'B',
    explanation: '本文に "That attitude is rapidly changing" とあり、中古衣料は「最後の手段」という見方から脱し、市場は新品より速く成長しています。Bが正解。\n\n【図解】読み取りのポイント\n★That attitude is rapidly changing / growing far faster than sales of new clothes\n○中古への偏見が薄れ市場は急成長\n×A「同じ偏見が残る」は rapidly changing と矛盾\n→答えはB',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea4_059',
    level: '2kyu',
    category: 'reading',
    question: `Read the same passage about second-hand clothing and answer the question.\n\n${p20}\n\nWhy do many younger shoppers buy second-hand clothes?`,
    choices: [
      { key: 'A', text: 'Because used clothes are always of higher quality.' },
      { key: 'B', text: 'To reduce the waste created by cheap "fast fashion."' },
      { key: 'C', text: 'Because they are unable to find any new clothes.' },
      { key: 'D', text: 'To collect rare items that they never wear.' },
    ],
    correctKey: 'B',
    explanation: '本文に "Younger shoppers, worried about the waste created by cheap \'fast fashion,\' see reusing garments as a way to reduce their impact on the planet" とあり、ファストファッションの廃棄を減らすためです。Bが正解。\n\n【図解】読み取りのポイント\n★worried about the waste created by cheap "fast fashion" ... reduce their impact on the planet\n○若い買い手の動機=ファストファッションの廃棄削減\n×A「常に高品質」やD「着ない収集」は本文にない\n→答えはB',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea4_060',
    level: '2kyu',
    category: 'reading',
    question: `Read the same passage about second-hand clothing and answer the question.\n\n${p20}\n\nWhy have luxury brands started to embrace the resale market?`,
    choices: [
      { key: 'A', text: 'Because they can no longer sell any new products.' },
      { key: 'B', text: 'Because clothes that hold their value are more attractive to buyers.' },
      { key: 'C', text: 'Because governments have ordered them to do so.' },
      { key: 'D', text: 'Because resale completely replaced their new collections.' },
    ],
    correctKey: 'B',
    explanation: '本文に "reasoning that clothes which hold their value are more attractive to buyers in the first place" とあり、価値を保つ服の方が魅力的だからです。Bが正解。以前ブランドは転売市場を恐れていましたが、考えを変えました。\n\n【図解】読み取りのポイント\n★clothes which hold their value are more attractive to buyers in the first place\n○高級ブランドが転売を歓迎する理由=価値を保つ服は購入時に魅力的\n×C「政府の命令」は本文にない\n→答えはB',
    difficulty: 'advanced',
  },
];
