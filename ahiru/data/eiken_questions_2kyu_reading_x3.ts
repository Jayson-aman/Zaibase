import { EikenQuestion } from './eiken_questions';

// 英検2級 読解(reading) オリジナル再現問題 60問（説明文・論説文）
// 20パッセージ × 各3問。前バッチと重複しない題材。

const r1 = `Before the nineteenth century, blind people in Europe had almost no practical way to read. A few schools used letters shaped from wire or pressed into thick paper, but these were slow to make and hard to feel with the fingers. The breakthrough came from Louis Braille, who had lost his sight in a childhood accident. As a teenager, he learned about a military code of raised dots that soldiers used to read messages in the dark without a lamp. The code was too complicated for ordinary use, so Braille simplified it into a system of six dots that could be recognized with a single fingertip. At first, teachers at his school resisted the new method, fearing that it would separate blind people even further from the sighted world. Only after Braille's death was his system widely adopted, and today it is used in nearly every language.`;

const r2 = `Tardigrades, often called "water bears," are tiny animals less than a millimeter long that live almost everywhere on Earth, from mountaintops to the deep sea. What makes them famous is their extraordinary ability to survive conditions that would kill nearly any other creature. When their environment dries out, a tardigrade can pull in its legs, expel most of the water from its body, and enter a state called a "tun," in which its metabolism almost completely stops. In this form it has endured temperatures near absolute zero, the vacuum of outer space, and doses of radiation hundreds of times greater than a human could survive. Scientists are now studying the special proteins that protect the animal's cells during drying, hoping the discovery might one day help preserve medicines and vaccines without the need for refrigeration.`;

const r3 = `Each autumn, millions of monarch butterflies leave the northern United States and Canada and fly up to 4,000 kilometers to a small region of forest in central Mexico, where they spend the winter clustered on fir trees. What puzzles scientists is that no single butterfly ever makes the round trip. The insects that travel south in the fall are three or four generations removed from those that flew north the previous spring, yet somehow they find the very same forests their great-grandparents once used. Researchers believe the butterflies navigate using the position of the sun, corrected by an internal clock, and possibly the Earth's magnetic field. The migration is now under threat, however: the Mexican forests are being cut down, and the milkweed plants that the caterpillars depend on are disappearing from farmland in the north.`;

const r4 = `For thousands of years, people around the world have preserved food by fermentation, turning cabbage into sauerkraut or kimchi, milk into yogurt, and soybeans into miso. Until recently these foods were valued mainly for their long shelf life and strong flavors. Now scientists are interested in them for another reason: the living bacteria they contain. The human digestive system is home to trillions of microbes, collectively called the gut microbiome, which help break down food and train the immune system. Some studies suggest that regularly eating fermented foods can increase the variety of these microbes and reduce signs of inflammation in the body. However, researchers caution that the evidence is still limited, that results vary greatly from person to person, and that many commercial products are heated during processing, which kills the very bacteria that make them beneficial.`;

const r5 = `The barcode, now printed on almost every product for sale, began as a solution to a very ordinary problem: long lines at grocery checkouts in the 1940s. A store owner asked a local college to find a faster way to record prices, and two graduate students set to work. One of them, inspired by Morse code, imagined stretching the dots and dashes downward into thin and thick lines. Their first design was actually circular, like a target, so that it could be read from any direction, but printing such patterns accurately proved too difficult. It was not until the 1970s, when laser scanners and cheap computers became widely available, that a rectangular version was standardized and spread through shops worldwide. The first product ever scanned in a real store was a simple packet of chewing gum, in the American state of Ohio in 1974.`;

const r6 = `Deep inside a frozen mountain on a remote Norwegian island lies the Svalbard Global Seed Vault, sometimes called the "doomsday vault." Its purpose is to store duplicate samples of seeds kept in seed banks around the world, so that if a national collection is destroyed by war, disaster, or simple lack of funding, the crop varieties it held will not be lost forever. The location was chosen carefully: the surrounding rock stays naturally cold, keeping the seeds frozen even if the electricity fails, and the vault sits high enough above sea level to remain dry. The seeds belong to the countries that deposit them, and only the depositor may withdraw them. This has already happened once: after a civil war damaged a seed bank near the Syrian city of Aleppo, researchers requested copies of their samples from Svalbard so that they could restart their work elsewhere.`;

const r7 = `The ocean is far from the silent world it was once imagined to be. Beneath the surface, the rumble of ship engines, the blasts used to search for oil, and military sonar fill the water with human-made noise. Because sound travels much farther in water than in air, this noise can spread for hundreds of kilometers. For whales and dolphins, which rely on sound to find food, navigate, and communicate across great distances, the consequences are serious. Studies show that noise can drown out their calls, force them to move away from feeding grounds, and, in severe cases, cause them physical harm. Unlike chemical pollution, however, noise pollution disappears the instant its source is switched off. During the sudden slowdown of shipping in 2020, scientists recorded a clear drop in ocean noise and observed that some whales seemed noticeably less stressed.`;

const r8 = `Competitive video gaming, known as e-sports, has grown from small gatherings in the 1990s into a global industry watched by hundreds of millions of people. Top players now compete in stadiums for prize money worth millions of dollars, and successful teams are supported by coaches, analysts, and sponsors much like traditional sports clubs. Yet the career of a professional gamer is often surprisingly short. The reflexes and concentration required at the highest level tend to peak in a player's early twenties, and the long hours of daily practice can lead to hand injuries and burnout. Recognizing this, some organizations now employ sports psychologists and physical trainers, and encourage players to prepare for second careers as coaches or streamers. Universities in several countries have even begun offering scholarships for e-sports, treating skilled gamers much as they would talented athletes.`;

const r9 = `In many countries, schools are quietly dropping cursive handwriting from their lessons. Supporters of the change argue that children's time is better spent learning to type, a skill they will use far more often in modern workplaces. Others, however, worry about what is being lost. Some studies suggest that writing by hand, especially in a flowing cursive style, helps young children remember letters and ideas better than typing does, perhaps because forming each letter requires more thought and movement. There is also a practical concern: if cursive is no longer taught, future generations may be unable to read historical letters, diaries, and documents written in it. A few schools have responded by keeping a small amount of handwriting instruction while still teaching typing, arguing that the two skills need not be in competition and that students benefit from mastering both.`;

const r10 = `Along tropical coastlines grow mangroves, unusual trees that can live with their roots in salty water. For a long time they were dismissed as useless swamps and cleared to make room for farms, hotels, and shrimp ponds. Scientists now understand how valuable they really are. The dense, tangled roots of a mangrove forest slow down waves and storm surges, protecting the land behind them far more cheaply than concrete walls could. The same roots trap mud and provide sheltered nurseries where countless fish and shellfish begin their lives, supporting both wildlife and local fishing communities. Mangroves also store carbon in their waterlogged soil at rates several times higher than ordinary forests on land. Because of these benefits, a number of countries that once tore mangroves down are now spending money to plant them again, though newly planted trees take many years to grow back.`;

const r11 = `In the darkness of the deep sea, where sunlight never reaches, many animals make their own light through a chemical reaction inside their bodies, a phenomenon called bioluminescence. The glow serves a remarkable range of purposes. Some fish dangle a lighted lure to draw prey toward their jaws; others produce a sudden flash to startle an attacker and escape in the confusion. A few small creatures, when swallowed, light up inside the predator's stomach, making it visible to even larger hunters that may then eat the predator — a strategy sometimes described as a "burglar alarm." Because the light is produced without heat, scientists call it "cold light," and it is far more efficient than an ordinary electric bulb. Researchers have borrowed the chemicals responsible and now use them as glowing markers to track diseases and study living cells in the laboratory.`;

const r12 = `Almost everyone yawns, and not only humans — dogs, birds, and even fish do it. Yet scientists still cannot fully agree on why. For a long time, people believed that yawning increased the supply of oxygen to the blood, but experiments have failed to support this idea; volunteers given extra oxygen do not yawn any less than usual. A newer theory holds that yawning cools the brain: drawing in a deep breath of air and stretching the jaw may help lower the temperature of the brain by a small amount, keeping it working efficiently. This might explain why people yawn more when they are tired, since a tired brain tends to be warmer. Perhaps the greatest mystery is why yawning is contagious. Seeing, hearing, or even reading about a yawn can trigger one, and this seems to be linked to our ability to feel what others feel.`;

const r13 = `The Silk Road was never a single road, nor was silk the only thing carried along it. For centuries, merchants, monks, and messengers moved goods and ideas across the vast distance between China and the Mediterranean. Among the most important things to travel westward was not a product but a technology: the art of making paper. Invented in China, papermaking spread slowly along the trade routes, reaching the Islamic world after, according to tradition, some craftsmen were captured in a battle in the eighth century and taught their skill to their captors. From there it moved into Europe, where it eventually replaced the expensive animal skins that had long been used for writing. Cheaper paper made books far less costly to produce, and this in turn helped prepare the way for the printing press and the spread of learning many centuries later.`;

const r14 = `When a smartphone or washing machine breaks today, many people simply throw it away and buy a new one, partly because repairs are expensive and partly because manufacturers often make their products difficult to open. A growing movement is pushing back against this throwaway culture. At "repair cafés," volunteers with tools and experience help members of the public fix broken appliances, clothing, and electronics for free, sharing their skills as well as saving objects from the rubbish. At the same time, campaigners are demanding a legal "right to repair," which would force companies to sell spare parts and publish repair instructions rather than sealing their devices shut. Supporters argue that this would cut the growing mountains of electronic waste and save consumers money. Some manufacturers resist, claiming that untrained repairs could be unsafe, but several governments have begun passing right-to-repair laws anyway.`;

const r15 = `Unlike dogs, which humans deliberately bred from wolves to help with hunting and guarding, cats seem to have largely domesticated themselves. The story likely began around ten thousand years ago in the Middle East, when people first started storing grain from their farms. The stored grain attracted mice and rats, and the rodents in turn attracted wild cats. Farmers were happy to have the pests controlled, and the boldest cats, those willing to live close to humans, found an easy and reliable source of food. Over many generations these cats grew tamer, though they never became as dependent on people as dogs did. This history may explain why even pet cats today keep much of their independence and hunting instinct. Genetically, the domestic cat still differs only slightly from its wild ancestor — far less than dogs differ from wolves.`;

const r16 = `Artificial light at night, once celebrated as a sign of progress, is increasingly seen as a form of pollution. Its effects reach far beyond simply making the stars hard to see. Many birds migrate at night and navigate partly by the moon and stars; bright city lights can confuse them, drawing them off course and causing them to crash into illuminated buildings, sometimes in large numbers. Newly hatched sea turtles, which instinctively head toward the brightest horizon — naturally the open sea reflecting the sky — may crawl the wrong way toward streetlights and never reach the water. Insects, too, gather helplessly around lamps instead of pollinating plants. The encouraging news is that light pollution is one of the easiest environmental problems to reduce. Simply pointing lights downward, using warmer colors, and switching them off when they are not needed can bring immediate relief to wildlife.`;

const r17 = `When the last wolves in Yellowstone National Park were killed in the 1920s, few people mourned them. Without their main predator, however, the park's elk multiplied and grazed freely, stripping young willow and aspen trees from the riverbanks. In 1995, wolves were brought back, and the changes that followed astonished scientists. The elk, now hunted again, avoided open valleys where they could be easily caught, and the young trees there began to recover. The returning trees provided food and homes for beavers and songbirds, and beaver dams created ponds for fish and amphibians. Some researchers even argue that the strengthened riverbanks changed the very course of the rivers. This chain of effects, in which a single predator reshapes an entire ecosystem, is known as a "trophic cascade," though a few scientists caution that other factors were also at work.`;

const r18 = `For most of its history, chocolate was a drink, not a bar, and it was often bitter rather than sweet. The ancient peoples of Central America, including the Maya and the Aztecs, ground cacao beans into a frothy beverage flavored with chili and spices, and valued the beans so highly that they used them as money. When the drink reached Europe in the sixteenth century, Europeans added sugar and served it hot, but for two hundred years it remained a luxury enjoyed mainly by the wealthy. Everything changed in the nineteenth century, when new machines could press cacao and mix it with sugar and extra cocoa butter to produce a smooth solid that melted in the mouth. This "eating chocolate" could be made cheaply in large quantities, and what had once been a rare treat for the rich soon became an everyday pleasure for almost everyone.`;

const r19 = `A common misunderstanding is that sign language is a simple set of gestures, or merely a signed version of a spoken language such as English. In fact, sign languages are full, natural languages with their own grammar, developed by deaf communities over many generations. There is no single universal sign language; American Sign Language and British Sign Language, for example, are completely different and not understandable to each other, even though both countries speak English. Sign languages use not only hand shapes and movements but also facial expressions and body position to carry meaning, and they can express anything a spoken language can, from jokes to abstract ideas. Linguists have found that deaf children exposed to sign language from birth learn it in the same natural stages, and at the same speed, as hearing children learn to speak — strong evidence that the human brain is built for language in any form.`;

const r20 = `In medical experiments, some patients are given a "placebo" — a pill or treatment with no active ingredient — so that doctors can tell whether a real drug works better than no drug at all. Strangely, patients taking the placebo often improve anyway, a puzzling phenomenon known as the placebo effect. Simply believing that one is being treated seems to trigger real changes in the body, easing pain and other symptoms. The effect is strongest for conditions influenced by the brain, such as pain, and weakest for diseases like infections that follow their own course regardless of what the patient believes. Even stranger, recent studies suggest that placebos can sometimes help patients who are openly told that they are receiving a fake pill. Rather than dismissing the effect as mere imagination, doctors now study it seriously, hoping to understand how expectation alone can influence health.`;

export const eikenQuestions2kyuReadingX3: EikenQuestion[] = [
  // ── Passage 1: Braille (001-003) ─────────────────────────────
  {
    id: 'eiken_2kyu_rea3_001',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r1}\n\nQuestion: Where did Louis Braille get the idea for his reading system?`,
    choices: [
      { key: 'A', text: 'From letters shaped out of wire at his school.' },
      { key: 'B', text: 'From a military code of raised dots used by soldiers.' },
      { key: 'C', text: 'From a writing system invented in another country.' },
      { key: 'D', text: 'From an accident that happened during his childhood.' },
    ],
    correctKey: 'B',
    explanation: '本文に「he learned about a military code of raised dots that soldiers used to read messages in the dark」とあり、兵士が暗闇で使った点字の軍事コードがヒントになりました。wireの文字はそれ以前の方法、childhood accidentは失明の原因で発想源ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: a military code of raised dots that soldiers used\n○正解の根拠: 発想の源＝兵士が使った突起した点のコード\n×ひっかけ: childhood accidentは失明の原因で、発想源ではない\n→結論: 答えはB',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea3_002',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r1}\n\nQuestion: Why did teachers at Braille's school resist his new method at first?`,
    choices: [
      { key: 'A', text: 'They thought the six dots were too difficult to feel.' },
      { key: 'B', text: 'They preferred the older method of pressing letters into paper.' },
      { key: 'C', text: 'They feared it would separate blind people from the sighted world.' },
      { key: 'D', text: 'They believed soldiers should be the only ones to use the code.' },
    ],
    correctKey: 'C',
    explanation: '本文に「teachers ... resisted the new method, fearing that it would separate blind people even further from the sighted world」とあり、目の見える世界からさらに切り離されることを恐れたのが理由です。点が感じにくい・古い方法を好んだとは書かれていません。\n【図解】読み取りのポイント\n★本文の該当箇所: fearing that it would separate blind people ... from the sighted world\n○正解の根拠: 反対の理由＝視覚のある世界から切り離される恐れ\n×ひっかけ: 点が難しすぎるとは書かれていない\n→結論: 答えはC',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea3_003',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r1}\n\nQuestion: What was one problem with the reading methods used before Braille's system?`,
    choices: [
      { key: 'A', text: 'They were slow to make and hard to feel with the fingers.' },
      { key: 'B', text: 'They could only be read in complete darkness.' },
      { key: 'C', text: 'They were used in every language but English.' },
      { key: 'D', text: 'They required an expensive lamp to read.' },
    ],
    correctKey: 'A',
    explanation: '本文に「these were slow to make and hard to feel with the fingers」とあり、以前の方法は作るのが遅く指で感じにくいという問題がありました。ランプが必要だったのは軍事コードではなく、それを不要にした点が特徴です。\n【図解】読み取りのポイント\n★本文の該当箇所: these were slow to make and hard to feel with the fingers\n○正解の根拠: 以前の方法の問題＝製作が遅く触って分かりにくい\n×ひっかけ: ランプが必要というのは別の話（軍事コードの利点の説明）\n→結論: 答えはA',
    difficulty: 'advanced',
  },

  // ── Passage 2: Tardigrades (004-006) ─────────────────────────
  {
    id: 'eiken_2kyu_rea3_004',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r2}\n\nQuestion: What makes tardigrades famous?`,
    choices: [
      { key: 'A', text: 'They are the smallest animals ever discovered on Earth.' },
      { key: 'B', text: 'They can only be found in the deep sea.' },
      { key: 'C', text: 'They live longer than almost any other animal.' },
      { key: 'D', text: 'They can survive conditions that would kill almost any other creature.' },
    ],
    correctKey: 'D',
    explanation: '本文に「What makes them famous is their extraordinary ability to survive conditions that would kill nearly any other creature」とあり、他の生物なら死ぬような環境を生き延びる能力が有名です。深海だけに住むのではなく山頂から深海まで広く分布します。\n【図解】読み取りのポイント\n★本文の該当箇所: their extraordinary ability to survive conditions that would kill nearly any other creature\n○正解の根拠: 有名な理由＝過酷な環境を生き延びる能力\n×ひっかけ: 深海だけに住むわけではない（山頂〜深海に分布）\n→結論: 答えはD',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea3_005',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r2}\n\nQuestion: What happens to a tardigrade when it enters a "tun" state?`,
    choices: [
      { key: 'A', text: 'It grows extra legs to move more quickly.' },
      { key: 'B', text: 'Its metabolism almost completely stops.' },
      { key: 'C', text: 'It absorbs as much water as possible.' },
      { key: 'D', text: 'It produces radiation to protect itself.' },
    ],
    correctKey: 'B',
    explanation: '本文に「enter a state called a "tun," in which its metabolism almost completely stops」とあり、tun状態では代謝がほぼ完全に止まります。水を吸収するのではなく逆に体外へ排出します。\n【図解】読み取りのポイント\n★本文の該当箇所: a state called a "tun," in which its metabolism almost completely stops\n○正解の根拠: tun状態＝代謝がほぼ停止\n×ひっかけ: 水を吸収するのではなく排出する（expel most of the water）\n→結論: 答えはB',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea3_006',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r2}\n\nQuestion: Why are scientists studying the tardigrade's special proteins?`,
    choices: [
      { key: 'A', text: 'They hope to preserve medicines and vaccines without refrigeration.' },
      { key: 'B', text: 'They want to make tardigrades grow much larger.' },
      { key: 'C', text: 'They plan to send tardigrades into outer space.' },
      { key: 'D', text: 'They are trying to increase radiation for medical use.' },
    ],
    correctKey: 'A',
    explanation: '本文に「hoping the discovery might one day help preserve medicines and vaccines without the need for refrigeration」とあり、冷蔵なしで薬やワクチンを保存できることを期待しています。宇宙へ送るや大きくするためではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: help preserve medicines and vaccines without the need for refrigeration\n○正解の根拠: 研究目的＝冷蔵不要で薬・ワクチンを保存\n×ひっかけ: 宇宙へ送る・大型化は目的として書かれていない\n→結論: 答えはA',
    difficulty: 'advanced',
  },

  // ── Passage 3: Monarch migration (007-009) ───────────────────
  {
    id: 'eiken_2kyu_rea3_007',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r3}\n\nQuestion: What puzzles scientists about the monarch butterflies' migration?`,
    choices: [
      { key: 'A', text: 'The butterflies fly farther than any other insect.' },
      { key: 'B', text: 'The butterflies travel only during the daytime.' },
      { key: 'C', text: 'Later generations find the same forests without any butterfly making the round trip.' },
      { key: 'D', text: 'The butterflies change color when they reach Mexico.' },
    ],
    correctKey: 'C',
    explanation: '本文に「no single butterfly ever makes the round trip」「yet somehow they find the very same forests their great-grandparents once used」とあり、往復する個体はいないのに数世代後が同じ森にたどり着く点が謎です。色が変わるとは書かれていません。\n【図解】読み取りのポイント\n★本文の該当箇所: no single butterfly ever makes the round trip ... they find the very same forests\n○正解の根拠: 謎＝往復個体はいないのに子孫が同じ森を見つける\n×ひっかけ: 色が変わるという記述はない\n→結論: 答えはC',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea3_008',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r3}\n\nQuestion: How do researchers think the butterflies find their way?`,
    choices: [
      { key: 'A', text: 'By following older butterflies that have made the trip before.' },
      { key: 'B', text: 'By using the position of the sun together with an internal clock.' },
      { key: 'C', text: 'By remembering the exact route from the previous year.' },
      { key: 'D', text: 'By following rivers south toward Mexico.' },
    ],
    correctKey: 'B',
    explanation: '本文に「navigate using the position of the sun, corrected by an internal clock, and possibly the Earth\'s magnetic field」とあり、太陽の位置と体内時計（さらに磁場）を使うと考えられています。年長の蝶についていくのではなく、そもそも経験者はいません。\n【図解】読み取りのポイント\n★本文の該当箇所: using the position of the sun, corrected by an internal clock\n○正解の根拠: 方向探知＝太陽の位置＋体内時計\n×ひっかけ: 経験のある蝶を追うのではない（往復した個体はいない）\n→結論: 答えはB',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea3_009',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r3}\n\nQuestion: What threatens the monarch butterflies' migration?`,
    choices: [
      { key: 'A', text: 'Rising temperatures in the fir forests.' },
      { key: 'B', text: 'New predators that have moved into Mexico.' },
      { key: 'C', text: 'A shortage of fir trees in Canada.' },
      { key: 'D', text: 'The cutting of Mexican forests and the loss of milkweed.' },
    ],
    correctKey: 'D',
    explanation: '本文に「the Mexican forests are being cut down, and the milkweed plants ... are disappearing」とあり、メキシコの森林伐採と（幼虫が頼る）トウワタの消失が脅威です。気温上昇や新たな捕食者は述べられていません。\n【図解】読み取りのポイント\n★本文の該当箇所: the Mexican forests are being cut down ... milkweed plants ... are disappearing\n○正解の根拠: 脅威＝森林伐採とトウワタの消失\n×ひっかけ: 気温上昇や新たな捕食者は本文にない\n→結論: 答えはD',
    difficulty: 'advanced',
  },

  // ── Passage 4: Fermented foods (010-012) ─────────────────────
  {
    id: 'eiken_2kyu_rea3_010',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r4}\n\nQuestion: Why are scientists now interested in fermented foods?`,
    choices: [
      { key: 'A', text: 'Because of the living bacteria that these foods contain.' },
      { key: 'B', text: 'Because they have a very long shelf life.' },
      { key: 'C', text: 'Because they are cheaper than other foods.' },
      { key: 'D', text: 'Because their strong flavors are becoming popular.' },
    ],
    correctKey: 'A',
    explanation: '本文に「Now scientists are interested in them for another reason: the living bacteria they contain」とあり、含まれる生きた菌が新たな関心の理由です。長い保存期間や強い風味は「これまで」評価されてきた点で、科学者の新しい関心ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: for another reason: the living bacteria they contain\n○正解の根拠: 新たな関心の理由＝生きた菌\n×ひっかけ: 保存期間・風味は従来の評価点で新しい理由ではない\n→結論: 答えはA',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea3_011',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r4}\n\nQuestion: What does the gut microbiome do for the human body?`,
    choices: [
      { key: 'A', text: 'It produces sugar for energy.' },
      { key: 'B', text: 'It stores food for later use.' },
      { key: 'C', text: 'It helps break down food and train the immune system.' },
      { key: 'D', text: 'It removes all bacteria from the stomach.' },
    ],
    correctKey: 'C',
    explanation: '本文に「microbes ... which help break down food and train the immune system」とあり、腸内細菌叢は食物の分解を助け免疫を鍛えます。菌を除去するのではなく、それ自体が微生物の集まりです。\n【図解】読み取りのポイント\n★本文の該当箇所: help break down food and train the immune system\n○正解の根拠: 腸内細菌叢の働き＝消化を助け免疫を鍛える\n×ひっかけ: 菌を除去するのではなく、微生物そのもの\n→結論: 答えはC',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea3_012',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r4}\n\nQuestion: What is one caution that researchers give about fermented foods?`,
    choices: [
      { key: 'A', text: 'They can make the immune system too strong.' },
      { key: 'B', text: 'Many commercial products are heated, which kills the helpful bacteria.' },
      { key: 'C', text: 'They increase inflammation in everyone who eats them.' },
      { key: 'D', text: 'They spoil more quickly than fresh vegetables.' },
    ],
    correctKey: 'B',
    explanation: '本文に「many commercial products are heated during processing, which kills the very bacteria that make them beneficial」とあり、市販品は加工中に加熱され有益な菌が死ぬことがあると注意しています。炎症を全員で増やすとは逆で、減らす可能性が述べられています。\n【図解】読み取りのポイント\n★本文の該当箇所: heated during processing, which kills the very bacteria\n○正解の根拠: 注意点＝加熱で有益な菌が死ぬ市販品がある\n×ひっかけ: 炎症を増やすのではなく減らす可能性がある\n→結論: 答えはB',
    difficulty: 'advanced',
  },

  // ── Passage 5: Barcode (013-015) ─────────────────────────────
  {
    id: 'eiken_2kyu_rea3_013',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r5}\n\nQuestion: What problem was the barcode originally created to solve?`,
    choices: [
      { key: 'A', text: 'Long lines at grocery store checkouts.' },
      { key: 'B', text: 'The high cost of chewing gum.' },
      { key: 'C', text: 'The difficulty of sending messages in Morse code.' },
      { key: 'D', text: 'A shortage of workers at colleges.' },
    ],
    correctKey: 'A',
    explanation: '本文に「began as a solution to a very ordinary problem: long lines at grocery checkouts in the 1940s」とあり、食料品店のレジの長い列を解決するために生まれました。モールス信号は着想のヒントで、解決すべき問題ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: long lines at grocery checkouts in the 1940s\n○正解の根拠: 元々の問題＝レジの長い行列\n×ひっかけ: モールス信号は着想のヒントで問題ではない\n→結論: 答えはA',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea3_014',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r5}\n\nQuestion: What was true of the students' first barcode design?`,
    choices: [
      { key: 'A', text: 'It was based directly on Morse code sounds.' },
      { key: 'B', text: 'It was rectangular and easy to print.' },
      { key: 'C', text: 'It was first used on a packet of chewing gum in 1940.' },
      { key: 'D', text: 'It was circular so that it could be read from any direction.' },
    ],
    correctKey: 'D',
    explanation: '本文に「Their first design was actually circular, like a target, so that it could be read from any direction」とあり、最初の設計はどの向きからでも読める円形でした。長方形版は1970年代に標準化されたもので最初ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: Their first design was actually circular ... read from any direction\n○正解の根拠: 最初の設計＝どの向きでも読める円形\n×ひっかけ: 長方形版は1970年代の標準化で最初ではない\n→結論: 答えはD',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea3_015',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r5}\n\nQuestion: What finally allowed the barcode to spread through shops in the 1970s?`,
    choices: [
      { key: 'A', text: 'A new law requiring prices on every product.' },
      { key: 'B', text: 'The availability of laser scanners and cheap computers.' },
      { key: 'C', text: 'The invention of Morse code.' },
      { key: 'D', text: 'The opening of the first store in Ohio.' },
    ],
    correctKey: 'B',
    explanation: '本文に「when laser scanners and cheap computers became widely available, that a rectangular version was standardized and spread」とあり、レーザースキャナーと安価なコンピューターの普及が広まりを可能にしました。オハイオでの最初のスキャンは結果の一例です。\n【図解】読み取りのポイント\n★本文の該当箇所: laser scanners and cheap computers became widely available\n○正解の根拠: 普及の要因＝レーザースキャナーと安価なコンピューター\n×ひっかけ: オハイオでのスキャンは普及の原因ではなく結果の一例\n→結論: 答えはB',
    difficulty: 'advanced',
  },

  // ── Passage 6: Seed Vault (016-018) ──────────────────────────
  {
    id: 'eiken_2kyu_rea3_016',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r6}\n\nQuestion: What is the main purpose of the Svalbard Global Seed Vault?`,
    choices: [
      { key: 'A', text: 'To grow new kinds of crops inside a mountain.' },
      { key: 'B', text: 'To store duplicate seeds in case other seed banks are destroyed.' },
      { key: 'C', text: 'To sell rare seeds to farmers around the world.' },
      { key: 'D', text: 'To study how seeds survive in outer space.' },
    ],
    correctKey: 'B',
    explanation: '本文に「to store duplicate samples of seeds ... so that if a national collection is destroyed ... the crop varieties ... will not be lost forever」とあり、他の種子バンクが失われた場合に備えた複製の保管が目的です。新品種を育てたり販売するためではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: to store duplicate samples of seeds ... will not be lost forever\n○正解の根拠: 目的＝他バンク消失に備えた種子の複製保管\n×ひっかけ: 新品種の栽培や販売のためではない\n→結論: 答えはB',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea3_017',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r6}\n\nQuestion: Why was this particular location chosen for the vault?`,
    choices: [
      { key: 'A', text: 'The surrounding rock stays naturally cold, keeping seeds frozen even without electricity.' },
      { key: 'B', text: 'It is close to the world\'s largest farms.' },
      { key: 'C', text: 'It is easy for many countries to reach quickly.' },
      { key: 'D', text: 'The island has warm weather all year round.' },
    ],
    correctKey: 'A',
    explanation: '本文に「the surrounding rock stays naturally cold, keeping the seeds frozen even if the electricity fails」とあり、周囲の岩が自然に冷たく停電しても種子が凍ったままである点が選定理由です。温暖な気候や大農場への近さではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: the surrounding rock stays naturally cold ... even if the electricity fails\n○正解の根拠: 選定理由＝自然に冷たい岩で停電しても凍結維持\n×ひっかけ: 温暖な気候ではなく寒冷地\n→結論: 答えはA',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea3_018',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r6}\n\nQuestion: What happened after a seed bank near Aleppo was damaged?`,
    choices: [
      { key: 'A', text: 'The vault was moved to a safer country.' },
      { key: 'B', text: 'Norway paid to rebuild the Syrian seed bank.' },
      { key: 'C', text: 'The seeds in Svalbard were all destroyed.' },
      { key: 'D', text: 'Researchers requested copies of their samples from Svalbard.' },
    ],
    correctKey: 'D',
    explanation: '本文に「researchers requested copies of their samples from Svalbard so that they could restart their work elsewhere」とあり、シリアの研究者がスバールバルから自分たちの試料のコピーを求めました。金庫が移されたり種子が破壊されたわけではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: researchers requested copies of their samples from Svalbard\n○正解の根拠: アレッポ被害後＝研究者がコピーを引き出した\n×ひっかけ: 金庫の移転や種子の破壊は起きていない\n→結論: 答えはD',
    difficulty: 'advanced',
  },

  // ── Passage 7: Ocean noise (019-021) ─────────────────────────
  {
    id: 'eiken_2kyu_rea3_019',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r7}\n\nQuestion: What is the main problem described in the passage?`,
    choices: [
      { key: 'A', text: 'Oil is disappearing from beneath the ocean.' },
      { key: 'B', text: 'Ships can no longer travel safely across the sea.' },
      { key: 'C', text: 'Human-made noise in the ocean is harming whales and dolphins.' },
      { key: 'D', text: 'The ocean has become too quiet for sea animals.' },
    ],
    correctKey: 'C',
    explanation: '本文全体が、船のエンジン音などの人為的な騒音がクジラやイルカに深刻な影響を与えることを述べています（noise can drown out their calls ... cause them physical harm）。海が静かすぎるのではなく、むしろ騒がしくなったのが問題です。\n【図解】読み取りのポイント\n★本文の該当箇所: noise can drown out their calls ... cause them physical harm\n○正解の根拠: 主題＝人為的騒音がクジラ・イルカに害を与える\n×ひっかけ: 海が静かすぎるのではなく騒がしすぎる\n→結論: 答えはC',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea3_020',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r7}\n\nQuestion: Why can ocean noise spread for hundreds of kilometers?`,
    choices: [
      { key: 'A', text: 'Because sound travels much farther in water than in air.' },
      { key: 'B', text: 'Because whales carry the sound as they swim.' },
      { key: 'C', text: 'Because the ocean floor reflects all sound upward.' },
      { key: 'D', text: 'Because ships are becoming larger every year.' },
    ],
    correctKey: 'A',
    explanation: '本文に「Because sound travels much farther in water than in air, this noise can spread for hundreds of kilometers」とあり、水中では空気中よりずっと遠くまで音が伝わるためです。クジラが運ぶわけでも海底が反射するためでもありません。\n【図解】読み取りのポイント\n★本文の該当箇所: sound travels much farther in water than in air\n○正解の根拠: 遠くまで届く理由＝水中では音がより遠くへ伝わる\n×ひっかけ: クジラが運ぶ・海底が反射するとは書かれていない\n→結論: 答えはA',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea3_021',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r7}\n\nQuestion: How is noise pollution different from chemical pollution?`,
    choices: [
      { key: 'A', text: 'It affects only large animals like whales.' },
      { key: 'B', text: 'It disappears the instant its source is switched off.' },
      { key: 'C', text: 'It cannot be measured by scientists.' },
      { key: 'D', text: 'It only occurs near the surface of the ocean.' },
    ],
    correctKey: 'B',
    explanation: '本文に「Unlike chemical pollution, however, noise pollution disappears the instant its source is switched off」とあり、音源を止めた瞬間に消える点が化学汚染との違いです。2020年の例（船が減り騒音が下がった）もこれを裏付けます。\n【図解】読み取りのポイント\n★本文の該当箇所: noise pollution disappears the instant its source is switched off\n○正解の根拠: 化学汚染との違い＝音源を止めれば即消える\n×ひっかけ: 測定できない・表層だけ、とは書かれていない\n→結論: 答えはB',
    difficulty: 'advanced',
  },

  // ── Passage 8: E-sports (022-024) ────────────────────────────
  {
    id: 'eiken_2kyu_rea3_022',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r8}\n\nQuestion: How has e-sports changed since the 1990s?`,
    choices: [
      { key: 'A', text: 'It has become less popular than traditional sports.' },
      { key: 'B', text: 'It is now played only inside universities.' },
      { key: 'C', text: 'It has become an activity for older people.' },
      { key: 'D', text: 'It has grown from small gatherings into a global industry.' },
    ],
    correctKey: 'D',
    explanation: '本文に「has grown from small gatherings in the 1990s into a global industry watched by hundreds of millions of people」とあり、小さな集まりから世界規模の産業へ成長しました。人気が下がったのでも大学内だけでもありません。\n【図解】読み取りのポイント\n★本文の該当箇所: grown from small gatherings ... into a global industry\n○正解の根拠: 変化＝小さな集まり→世界規模の産業\n×ひっかけ: 人気が下がった・大学内だけ、は誤り\n→結論: 答えはD',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea3_023',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r8}\n\nQuestion: Why is a professional gamer's career often short?`,
    choices: [
      { key: 'A', text: 'Reflexes peak in the early twenties, and long practice causes injuries and burnout.' },
      { key: 'B', text: 'Prize money for gaming has almost disappeared.' },
      { key: 'C', text: 'Sponsors are no longer interested in teams.' },
      { key: 'D', text: 'Universities have stopped offering scholarships.' },
    ],
    correctKey: 'A',
    explanation: '本文に「reflexes and concentration ... peak in a player\'s early twenties, and the long hours of daily practice can lead to hand injuries and burnout」とあり、反射神経が20代前半でピークを迎え、練習が怪我や燃え尽きを招くためです。賞金や奨学金は増えている方向です。\n【図解】読み取りのポイント\n★本文の該当箇所: peak in a player\'s early twenties ... hand injuries and burnout\n○正解の根拠: 短命の理由＝反射神経のピークと怪我・燃え尽き\n×ひっかけ: 賞金や奨学金は減っていない（むしろ充実）\n→結論: 答えはA',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea3_024',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r8}\n\nQuestion: What do some e-sports organizations now do to help their players?`,
    choices: [
      { key: 'A', text: 'They limit players to one hour of practice a day.' },
      { key: 'B', text: 'They pay players to retire before the age of twenty.' },
      { key: 'C', text: 'They employ psychologists and trainers and prepare players for second careers.' },
      { key: 'D', text: 'They forbid players from becoming coaches or streamers.' },
    ],
    correctKey: 'C',
    explanation: '本文に「some organizations now employ sports psychologists and physical trainers, and encourage players to prepare for second careers as coaches or streamers」とあり、心理士やトレーナーを雇い、第二のキャリアへの準備を促します。コーチ・配信者になることを禁じてはいません。\n【図解】読み取りのポイント\n★本文の該当箇所: employ sports psychologists and physical trainers ... prepare for second careers\n○正解の根拠: 支援＝心理士・トレーナー雇用と第二キャリア準備\n×ひっかけ: コーチや配信者への転身を禁じるのではなく勧める\n→結論: 答えはC',
    difficulty: 'advanced',
  },

  // ── Passage 9: Cursive handwriting (025-027) ─────────────────
  {
    id: 'eiken_2kyu_rea3_025',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r9}\n\nQuestion: Why do supporters want schools to drop cursive handwriting?`,
    choices: [
      { key: 'A', text: 'Because cursive is too easy for modern children.' },
      { key: 'B', text: 'Because typing is a skill children will use far more often.' },
      { key: 'C', text: 'Because handwriting damages children\'s memory.' },
      { key: 'D', text: 'Because historical documents are no longer important.' },
    ],
    correctKey: 'B',
    explanation: '本文に「children\'s time is better spent learning to type, a skill they will use far more often in modern workplaces」とあり、より頻繁に使うタイピングに時間を割く方がよいという主張です。手書きが記憶を損なうのは逆で、助けるとされています。\n【図解】読み取りのポイント\n★本文の該当箇所: better spent learning to type ... use far more often\n○正解の根拠: 賛成派の理由＝タイピングの方がよく使う技能\n×ひっかけ: 手書きは記憶を損なうのではなく助ける\n→結論: 答えはB',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea3_026',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r9}\n\nQuestion: What is one concern of those who oppose dropping cursive?`,
    choices: [
      { key: 'A', text: 'Typing is more expensive to teach than handwriting.' },
      { key: 'B', text: 'Children will spend too much time on computers.' },
      { key: 'C', text: 'Cursive writing takes longer than printing.' },
      { key: 'D', text: 'Future generations may be unable to read historical documents.' },
    ],
    correctKey: 'D',
    explanation: '本文に「if cursive is no longer taught, future generations may be unable to read historical letters, diaries, and documents written in it」とあり、将来の世代が筆記体で書かれた歴史的文書を読めなくなる懸念があります。費用の高さは述べられていません。\n【図解】読み取りのポイント\n★本文の該当箇所: future generations may be unable to read historical ... documents\n○正解の根拠: 反対派の懸念＝歴史的文書が読めなくなる\n×ひっかけ: タイピングの費用の高さは本文にない\n→結論: 答えはD',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea3_027',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r9}\n\nQuestion: How have a few schools responded to the debate?`,
    choices: [
      { key: 'A', text: 'By keeping some handwriting instruction while still teaching typing.' },
      { key: 'B', text: 'By removing typing lessons completely.' },
      { key: 'C', text: 'By teaching cursive only to older students.' },
      { key: 'D', text: 'By letting students choose whether to attend school.' },
    ],
    correctKey: 'A',
    explanation: '本文に「keeping a small amount of handwriting instruction while still teaching typing ... the two skills need not be in competition」とあり、手書きを少し残しつつタイピングも教える折衷策を取っています。タイピングを完全に廃止したのではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: keeping a small amount of handwriting instruction while still teaching typing\n○正解の根拠: 対応＝手書きを少し残しつつタイピングも教える\n×ひっかけ: タイピングを完全廃止したのではない\n→結論: 答えはA',
    difficulty: 'advanced',
  },

  // ── Passage 10: Mangroves (028-030) ──────────────────────────
  {
    id: 'eiken_2kyu_rea3_028',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r10}\n\nQuestion: How were mangroves treated in the past?`,
    choices: [
      { key: 'A', text: 'They were protected as valuable forests.' },
      { key: 'B', text: 'They were planted to store carbon.' },
      { key: 'C', text: 'They were dismissed as useless swamps and cleared.' },
      { key: 'D', text: 'They were used to build concrete walls.' },
    ],
    correctKey: 'C',
    explanation: '本文に「For a long time they were dismissed as useless swamps and cleared to make room for farms, hotels, and shrimp ponds」とあり、かつては役に立たない沼地として切り開かれていました。保護されていたわけでも植えられていたわけでもありません。\n【図解】読み取りのポイント\n★本文の該当箇所: dismissed as useless swamps and cleared\n○正解の根拠: 過去の扱い＝無用な沼地として伐採\n×ひっかけ: 保護・植林は現在の動きで過去ではない\n→結論: 答えはC',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea3_029',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r10}\n\nQuestion: What is one benefit of mangrove forests mentioned in the passage?`,
    choices: [
      { key: 'A', text: 'They provide wood for building hotels.' },
      { key: 'B', text: 'Their roots slow down waves and shelter young fish.' },
      { key: 'C', text: 'They keep the ocean water cool in summer.' },
      { key: 'D', text: 'They grow faster than any other tree.' },
    ],
    correctKey: 'B',
    explanation: '本文に「roots ... slow down waves and storm surges」「provide sheltered nurseries where countless fish and shellfish begin their lives」とあり、波を弱め幼魚の隠れ場所になります。海水を冷やすや最も速く育つとは書かれていません。\n【図解】読み取りのポイント\n★本文の該当箇所: slow down waves ... nurseries where ... fish and shellfish begin their lives\n○正解の根拠: 利点＝波を弱め幼魚の育つ場所になる\n×ひっかけ: 海水を冷やす・最速で育つ、は本文にない\n→結論: 答えはB',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea3_030',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r10}\n\nQuestion: What are some countries doing now?`,
    choices: [
      { key: 'A', text: 'Spending money to plant mangroves again.' },
      { key: 'B', text: 'Replacing mangroves with concrete walls.' },
      { key: 'C', text: 'Building more shrimp ponds along the coast.' },
      { key: 'D', text: 'Moving mangroves to colder regions.' },
    ],
    correctKey: 'A',
    explanation: '本文に「a number of countries ... are now spending money to plant them again」とあり、かつて伐採した国々が再び植える費用をかけています。ただし成長には長い年月がかかると付記されています。\n【図解】読み取りのポイント\n★本文の該当箇所: now spending money to plant them again\n○正解の根拠: 現在の動き＝マングローブを再び植える\n×ひっかけ: コンクリート壁への置き換えではない\n→結論: 答えはA',
    difficulty: 'advanced',
  },

  // ── Passage 11: Bioluminescence (031-033) ────────────────────
  {
    id: 'eiken_2kyu_rea3_031',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r11}\n\nQuestion: What is bioluminescence?`,
    choices: [
      { key: 'A', text: 'A way for fish to see in shallow water.' },
      { key: 'B', text: 'A kind of sunlight that reaches the deep sea.' },
      { key: 'C', text: 'The heat that deep-sea animals give off.' },
      { key: 'D', text: 'Light that animals make through a chemical reaction in their bodies.' },
    ],
    correctKey: 'D',
    explanation: '本文に「many animals make their own light through a chemical reaction inside their bodies, a phenomenon called bioluminescence」とあり、体内の化学反応で自ら光を作ることです。太陽光でも熱でもなく、むしろ熱なしの「冷たい光」です。\n【図解】読み取りのポイント\n★本文の該当箇所: make their own light through a chemical reaction inside their bodies\n○正解の根拠: 生物発光＝体内の化学反応で光を作ること\n×ひっかけ: 太陽光や熱ではない（熱を出さない冷たい光）\n→結論: 答えはD',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea3_032',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r11}\n\nQuestion: How does the "burglar alarm" strategy work?`,
    choices: [
      { key: 'A', text: 'A fish dangles a light to attract prey toward its jaws.' },
      { key: 'B', text: 'A creature glows inside a predator, attracting a larger hunter that may eat the predator.' },
      { key: 'C', text: 'An animal flashes light to warn other members of its group.' },
      { key: 'D', text: 'A fish produces heat to frighten away attackers.' },
    ],
    correctKey: 'B',
    explanation: '本文に「when swallowed, light up inside the predator\'s stomach, making it visible to even larger hunters that may then eat the predator」とあり、飲み込まれた後に光り、より大きな捕食者を引き寄せて捕食者を食べさせる戦略です。餌をおびき寄せるのは別のルアーの例です。\n【図解】読み取りのポイント\n★本文の該当箇所: light up inside the predator\'s stomach ... larger hunters ... eat the predator\n○正解の根拠: 泥棒警報＝捕食者の中で光り、さらに大きな敵を呼ぶ\n×ひっかけ: 餌をおびき寄せるルアーは別の用途\n→結論: 答えはB',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea3_033',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r11}\n\nQuestion: How do researchers use the chemicals responsible for bioluminescence?`,
    choices: [
      { key: 'A', text: 'As glowing markers to track diseases and study living cells.' },
      { key: 'B', text: 'As a source of heat for laboratories.' },
      { key: 'C', text: 'As food for deep-sea fish.' },
      { key: 'D', text: 'As a replacement for ordinary electric bulbs in homes.' },
    ],
    correctKey: 'A',
    explanation: '本文に「use them as glowing markers to track diseases and study living cells in the laboratory」とあり、病気の追跡や細胞研究の光る目印として使います。家庭用電球の代わりや熱源としてではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: glowing markers to track diseases and study living cells\n○正解の根拠: 利用法＝病気追跡・細胞研究の光る目印\n×ひっかけ: 家庭用電球の代替や熱源ではない\n→結論: 答えはA',
    difficulty: 'advanced',
  },

  // ── Passage 12: Yawning (034-036) ────────────────────────────
  {
    id: 'eiken_2kyu_rea3_034',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r12}\n\nQuestion: What happened to the old theory that yawning increases oxygen in the blood?`,
    choices: [
      { key: 'A', text: 'It was proved correct by recent experiments.' },
      { key: 'B', text: 'It was accepted only for animals, not humans.' },
      { key: 'C', text: 'Experiments failed to support it.' },
      { key: 'D', text: 'It explained why yawning is contagious.' },
    ],
    correctKey: 'C',
    explanation: '本文に「experiments have failed to support this idea; volunteers given extra oxygen do not yawn any less」とあり、酸素説は実験で支持されませんでした。正しいと証明されたのでも、伝染性を説明するものでもありません。\n【図解】読み取りのポイント\n★本文の該当箇所: experiments have failed to support this idea\n○正解の根拠: 酸素説＝実験で支持されなかった\n×ひっかけ: 正しいと証明された、は逆\n→結論: 答えはC',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea3_035',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r12}\n\nQuestion: What does the newer theory suggest about yawning?`,
    choices: [
      { key: 'A', text: 'It warms up the brain when we are tired.' },
      { key: 'B', text: 'It helps cool the brain and keep it working efficiently.' },
      { key: 'C', text: 'It sends extra oxygen to the muscles.' },
      { key: 'D', text: 'It only happens in humans and dogs.' },
    ],
    correctKey: 'B',
    explanation: '本文に「yawning cools the brain: drawing in a deep breath ... may help lower the temperature of the brain」とあり、新しい説は脳を冷やし効率的に働かせると考えます。脳を温めるのではなく冷やす点に注意します。\n【図解】読み取りのポイント\n★本文の該当箇所: yawning cools the brain ... lower the temperature of the brain\n○正解の根拠: 新説＝脳を冷やして効率よく働かせる\n×ひっかけ: 脳を温めるのではなく冷やす\n→結論: 答えはB',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea3_036',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r12}\n\nQuestion: What is contagious yawning linked to, according to the passage?`,
    choices: [
      { key: 'A', text: 'The amount of oxygen in a room.' },
      { key: 'B', text: 'How tired a person\'s muscles are.' },
      { key: 'C', text: 'The temperature of the air outside.' },
      { key: 'D', text: 'Our ability to feel what others feel.' },
    ],
    correctKey: 'D',
    explanation: '本文に「this seems to be linked to our ability to feel what others feel」とあり、あくびが伝染する現象は他者の気持ちを感じ取る力（共感）と関係があるとされます。酸素量や気温とは結び付けられていません。\n【図解】読み取りのポイント\n★本文の該当箇所: linked to our ability to feel what others feel\n○正解の根拠: 伝染するあくび＝他者の感情を感じ取る力と関連\n×ひっかけ: 酸素量や気温との関連は述べられていない\n→結論: 答えはD',
    difficulty: 'advanced',
  },

  // ── Passage 13: Silk Road & paper (037-039) ──────────────────
  {
    id: 'eiken_2kyu_rea3_037',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r13}\n\nQuestion: What point does the passage make about the Silk Road?`,
    choices: [
      { key: 'A', text: 'It carried not only goods but also ideas and technology, such as papermaking.' },
      { key: 'B', text: 'It was a single road built to carry silk only.' },
      { key: 'C', text: 'It was used mainly by soldiers going to war.' },
      { key: 'D', text: 'It connected only two cities in China.' },
    ],
    correctKey: 'A',
    explanation: '本文に「nor was silk the only thing carried along it」「Among the most important things to travel westward was not a product but a technology: the art of making paper」とあり、物だけでなく製紙技術などの知識も運ばれた点が要旨です。単一の道でも絹だけでもありません。\n【図解】読み取りのポイント\n★本文の該当箇所: not a product but a technology: the art of making paper\n○正解の根拠: 要旨＝物だけでなく製紙技術などの知識も伝えた\n×ひっかけ: 単一の道・絹だけ、は冒頭で否定されている\n→結論: 答えはA',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea3_038',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r13}\n\nQuestion: According to tradition, how did papermaking reach the Islamic world?`,
    choices: [
      { key: 'A', text: 'European traders sold the technology to it.' },
      { key: 'B', text: 'Monks wrote instructions and sent them west.' },
      { key: 'C', text: 'Craftsmen captured in a battle taught the skill to their captors.' },
      { key: 'D', text: 'Chinese emperors gave it away as a gift.' },
    ],
    correctKey: 'C',
    explanation: '本文に「reaching the Islamic world after ... some craftsmen were captured in a battle in the eighth century and taught their skill to their captors」とあり、戦いで捕らえられた職人が技術を伝えたとされます。ヨーロッパの商人や贈り物ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: craftsmen were captured in a battle ... taught their skill to their captors\n○正解の根拠: 伝来＝戦で捕らえられた職人が捕獲者に教えた\n×ひっかけ: ヨーロッパ商人や皇帝の贈り物ではない\n→結論: 答えはC',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea3_039',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r13}\n\nQuestion: What was one effect of cheaper paper in Europe?`,
    choices: [
      { key: 'A', text: 'Animal skins became more valuable than before.' },
      { key: 'B', text: 'Books became less costly, helping prepare the way for the printing press.' },
      { key: 'C', text: 'Fewer people learned to read and write.' },
      { key: 'D', text: 'Silk became the main material for writing.' },
    ],
    correctKey: 'B',
    explanation: '本文に「Cheaper paper made books far less costly to produce, and this in turn helped prepare the way for the printing press and the spread of learning」とあり、安い紙で本が安くなり印刷機と学問の普及への道を開きました。動物の皮は取って代わられ価値が下がりました。\n【図解】読み取りのポイント\n★本文の該当箇所: made books far less costly ... prepare the way for the printing press\n○正解の根拠: 効果＝本が安くなり印刷機・学問普及への道を開いた\n×ひっかけ: 動物の皮の価値は上がらず取って代わられた\n→結論: 答えはB',
    difficulty: 'advanced',
  },

  // ── Passage 14: Right to repair (040-042) ────────────────────
  {
    id: 'eiken_2kyu_rea3_040',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r14}\n\nQuestion: Why do many people throw away broken devices today?`,
    choices: [
      { key: 'A', text: 'Because repair cafés refuse to fix them.' },
      { key: 'B', text: 'Because the law forbids repairing them.' },
      { key: 'C', text: 'Because new devices are always cheaper than old ones.' },
      { key: 'D', text: 'Because repairs are expensive and products are hard to open.' },
    ],
    correctKey: 'D',
    explanation: '本文に「partly because repairs are expensive and partly because manufacturers often make their products difficult to open」とあり、修理が高く製品が開けにくいために捨てられます。修理カフェが断るわけでも法律が禁じているわけでもありません。\n【図解】読み取りのポイント\n★本文の該当箇所: repairs are expensive and ... products difficult to open\n○正解の根拠: 廃棄の理由＝修理が高く開けにくい\n×ひっかけ: 法律が修理を禁じているのではない\n→結論: 答えはD',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea3_041',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r14}\n\nQuestion: What happens at a "repair café"?`,
    choices: [
      { key: 'A', text: 'Volunteers help people fix broken items for free and share their skills.' },
      { key: 'B', text: 'Companies sell brand-new appliances at low prices.' },
      { key: 'C', text: 'People pay experts to throw away old electronics.' },
      { key: 'D', text: 'Governments collect spare parts from manufacturers.' },
    ],
    correctKey: 'A',
    explanation: '本文に「volunteers with tools and experience help members of the public fix broken appliances, clothing, and electronics for free, sharing their skills」とあり、ボランティアが無料で修理を手伝い技術を共有します。新品販売や廃棄の代行ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: volunteers ... help ... fix broken appliances ... for free, sharing their skills\n○正解の根拠: 修理カフェ＝無料で修理を手伝い技術を共有\n×ひっかけ: 新品販売や廃棄代行ではない\n→結論: 答えはA',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea3_042',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r14}\n\nQuestion: What do some manufacturers say about the "right to repair"?`,
    choices: [
      { key: 'A', text: 'It would make their products too cheap to sell.' },
      { key: 'B', text: 'Untrained repairs could be unsafe.' },
      { key: 'C', text: 'It would create too much electronic waste.' },
      { key: 'D', text: 'It would force customers to keep old devices forever.' },
    ],
    correctKey: 'B',
    explanation: '本文に「Some manufacturers resist, claiming that untrained repairs could be unsafe」とあり、訓練を受けていない修理は安全でない恐れがあると主張します。電子廃棄物を増やすというのは支持派の逆の論点です。\n【図解】読み取りのポイント\n★本文の該当箇所: claiming that untrained repairs could be unsafe\n○正解の根拠: メーカーの主張＝素人修理は危険かもしれない\n×ひっかけ: 電子廃棄物を増やすは支持派が減らすと言う点の逆\n→結論: 答えはB',
    difficulty: 'advanced',
  },

  // ── Passage 15: Cat domestication (043-045) ──────────────────
  {
    id: 'eiken_2kyu_rea3_043',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r15}\n\nQuestion: What is the main idea of the passage?`,
    choices: [
      { key: 'A', text: 'Humans bred cats from wolves for hunting.' },
      { key: 'B', text: 'Cats seem to have largely domesticated themselves.' },
      { key: 'C', text: 'Cats are more useful to farmers than dogs.' },
      { key: 'D', text: 'Cats and dogs are genetically almost identical.' },
    ],
    correctKey: 'B',
    explanation: '本文に「cats seem to have largely domesticated themselves」とあり、猫はほぼ自ら家畜化したというのが主旨です。狼から育てられたのは犬で、猫と犬が遺伝的にほぼ同じという話でもありません。\n【図解】読み取りのポイント\n★本文の該当箇所: cats seem to have largely domesticated themselves\n○正解の根拠: 主旨＝猫はほぼ自ら家畜化した\n×ひっかけ: 狼から育てられたのは犬\n→結論: 答えはB',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea3_044',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r15}\n\nQuestion: How did the relationship between cats and humans likely begin?`,
    choices: [
      { key: 'A', text: 'Stored grain attracted rodents, which in turn attracted wild cats.' },
      { key: 'B', text: 'Humans caught wild cats to guard their farms.' },
      { key: 'C', text: 'Cats were given to farmers as gifts.' },
      { key: 'D', text: 'Farmers trained cats to hunt with dogs.' },
    ],
    correctKey: 'A',
    explanation: '本文に「The stored grain attracted mice and rats, and the rodents in turn attracted wild cats」とあり、蓄えた穀物が齧歯類を呼び、それが野生の猫を引き寄せたのが始まりです。人が捕らえたり贈られたのではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: stored grain attracted mice and rats ... attracted wild cats\n○正解の根拠: 始まり＝穀物→齧歯類→野生の猫\n×ひっかけ: 人が捕らえた・贈られた、ではない\n→結論: 答えはA',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea3_045',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r15}\n\nQuestion: Why might pet cats today still be so independent?`,
    choices: [
      { key: 'A', text: 'Because they were recently taken from the wild.' },
      { key: 'B', text: 'Because they were bred to guard homes.' },
      { key: 'C', text: 'Because they never became as dependent on people as dogs did.' },
      { key: 'D', text: 'Because they can no longer hunt at all.' },
    ],
    correctKey: 'C',
    explanation: '本文に「they never became as dependent on people as dogs did」「keep much of their independence and hunting instinct」とあり、犬ほど人に依存しなかったため独立心が残っています。狩りができないのではなく本能を保っています。\n【図解】読み取りのポイント\n★本文の該当箇所: never became as dependent on people as dogs did\n○正解の根拠: 独立心の理由＝犬ほど人に依存しなかった\n×ひっかけ: 狩りができないのではなく本能を保つ\n→結論: 答えはC',
    difficulty: 'advanced',
  },

  // ── Passage 16: Light pollution (046-048) ────────────────────
  {
    id: 'eiken_2kyu_rea3_046',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r16}\n\nQuestion: What is the main idea of the passage?`,
    choices: [
      { key: 'A', text: 'City lights make streets safer at night.' },
      { key: 'B', text: 'Artificial light at night is a form of pollution that harms wildlife.' },
      { key: 'C', text: 'Stars are becoming brighter every year.' },
      { key: 'D', text: 'Insects are the only animals affected by light.' },
    ],
    correctKey: 'B',
    explanation: '本文は夜間の人工光を「a form of pollution」と位置づけ、鳥やウミガメ、昆虫など野生生物への害を述べています。星が明るくなるのではなく見えにくくなり、昆虫だけが影響を受けるわけでもありません。\n【図解】読み取りのポイント\n★本文の該当箇所: Artificial light at night ... is increasingly seen as a form of pollution\n○正解の根拠: 主旨＝夜間人工光は野生生物を害する汚染\n×ひっかけ: 昆虫だけが影響を受けるのではない\n→結論: 答えはB',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea3_047',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r16}\n\nQuestion: How does artificial light affect sea turtles?`,
    choices: [
      { key: 'A', text: 'It keeps their eggs warm on the beach.' },
      { key: 'B', text: 'It may lead them to crawl toward streetlights instead of the sea.' },
      { key: 'C', text: 'It helps them find food more easily.' },
      { key: 'D', text: 'It stops them from hatching at all.' },
    ],
    correctKey: 'B',
    explanation: '本文に「may crawl the wrong way toward streetlights and never reach the water」とあり、生まれたてのウミガメが海ではなく街灯の方へ間違って進むことがあります。卵を温める・餌探しを助けるといった記述はありません。\n【図解】読み取りのポイント\n★本文の該当箇所: crawl the wrong way toward streetlights and never reach the water\n○正解の根拠: ウミガメへの影響＝海ではなく街灯へ進む\n×ひっかけ: 卵を温める・餌探しを助ける、は本文にない\n→結論: 答えはB',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea3_048',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r16}\n\nQuestion: Why is the passage hopeful about light pollution?`,
    choices: [
      { key: 'A', text: 'It is one of the easiest environmental problems to reduce.' },
      { key: 'B', text: 'Animals are learning to ignore artificial light.' },
      { key: 'C', text: 'Cities are turning off all their lights permanently.' },
      { key: 'D', text: 'Light pollution disappears on its own over time.' },
    ],
    correctKey: 'A',
    explanation: '本文に「light pollution is one of the easiest environmental problems to reduce」とあり、光を下向きにする・暖色にする・不要時に消すなどで簡単に減らせるため希望があります。全ての明かりを永久に消すわけではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: one of the easiest environmental problems to reduce\n○正解の根拠: 希望の理由＝簡単な工夫で減らせる\n×ひっかけ: 全消灯を永久に行うのではない\n→結論: 答えはA',
    difficulty: 'advanced',
  },

  // ── Passage 17: Yellowstone wolves (049-051) ─────────────────
  {
    id: 'eiken_2kyu_rea3_049',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r17}\n\nQuestion: What happened in Yellowstone after the wolves were killed?`,
    choices: [
      { key: 'A', text: 'The rivers dried up completely.' },
      { key: 'B', text: 'Beavers built many new dams.' },
      { key: 'C', text: 'Songbirds moved into the park in large numbers.' },
      { key: 'D', text: 'The elk multiplied and stripped young trees from the riverbanks.' },
    ],
    correctKey: 'D',
    explanation: '本文に「the park\'s elk multiplied and grazed freely, stripping young willow and aspen trees from the riverbanks」とあり、狼がいなくなるとエルクが増え川岸の若木を食い荒らしました。ビーバーのダムや鳴鳥の増加は狼が戻った後の話です。\n【図解】読み取りのポイント\n★本文の該当箇所: the park\'s elk multiplied ... stripping young ... trees from the riverbanks\n○正解の根拠: 狼消失後＝エルクが増え若木を食い荒らす\n×ひっかけ: ビーバーや鳴鳥の増加は狼が戻った後\n→結論: 答えはD',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea3_050',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r17}\n\nQuestion: What did scientists observe after wolves were brought back in 1995?`,
    choices: [
      { key: 'A', text: 'The elk disappeared from the park entirely.' },
      { key: 'B', text: 'Young trees recovered, and beavers and songbirds returned.' },
      { key: 'C', text: 'The rivers stopped flowing.' },
      { key: 'D', text: 'The wolves quickly died out again.' },
    ],
    correctKey: 'B',
    explanation: '本文に「the young trees there began to recover」「provided food and homes for beavers and songbirds」とあり、狼の復帰後に若木が回復しビーバーや鳴鳥が戻りました。エルクは消滅せず、開けた谷を避けるようになったのです。\n【図解】読み取りのポイント\n★本文の該当箇所: the young trees ... began to recover ... homes for beavers and songbirds\n○正解の根拠: 狼復帰後＝若木回復、ビーバー・鳴鳥が戻る\n×ひっかけ: エルクは全滅せず谷を避けただけ\n→結論: 答えはB',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea3_051',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r17}\n\nQuestion: What is a "trophic cascade," and what caution do some scientists give?`,
    choices: [
      { key: 'A', text: 'A sudden flood; scientists say wolves caused it.' },
      { key: 'B', text: 'One predator reshaping an ecosystem; some say other factors were also involved.' },
      { key: 'C', text: 'A disease among elk; scientists blame the beavers.' },
      { key: 'D', text: 'A method of planting trees; scientists say it never works.' },
    ],
    correctKey: 'B',
    explanation: '本文に「a single predator reshapes an entire ecosystem, is known as a "trophic cascade," though a few scientists caution that other factors were also at work」とあり、一種の捕食者が生態系全体を作り変える現象で、他の要因も関与したとの慎重論があります。洪水や病気の話ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: a single predator reshapes an entire ecosystem ... other factors were also at work\n○正解の根拠: 栄養段階の連鎖＝捕食者が生態系を作り変える／他要因の指摘あり\n×ひっかけ: 洪水や病気の名称ではない\n→結論: 答えはB',
    difficulty: 'advanced',
  },

  // ── Passage 18: Chocolate (052-054) ──────────────────────────
  {
    id: 'eiken_2kyu_rea3_052',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r18}\n\nQuestion: What was chocolate like for most of its history?`,
    choices: [
      { key: 'A', text: 'It was a bitter drink rather than a sweet bar.' },
      { key: 'B', text: 'It was a sweet solid eaten by everyone.' },
      { key: 'C', text: 'It was mixed with milk and served cold.' },
      { key: 'D', text: 'It was made only in Europe.' },
    ],
    correctKey: 'A',
    explanation: '本文に「chocolate was a drink, not a bar, and it was often bitter rather than sweet」とあり、歴史の大半でチョコレートは甘い固形ではなく苦い飲み物でした。甘い固形になったのは19世紀以降です。\n【図解】読み取りのポイント\n★本文の該当箇所: chocolate was a drink, not a bar ... often bitter rather than sweet\n○正解の根拠: 歴史の大半＝苦い飲み物\n×ひっかけ: 甘い固形になったのは19世紀以降\n→結論: 答えはA',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea3_053',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r18}\n\nQuestion: How did the Maya and the Aztecs value cacao beans?`,
    choices: [
      { key: 'A', text: 'They used them only as decoration.' },
      { key: 'B', text: 'They threw them away after making the drink.' },
      { key: 'C', text: 'They gave them to Europeans as gifts.' },
      { key: 'D', text: 'They valued them so highly that they used them as money.' },
    ],
    correctKey: 'D',
    explanation: '本文に「valued the beans so highly that they used them as money」とあり、マヤやアステカはカカオ豆を非常に重んじ通貨として使いました。装飾用や廃棄していたのではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: valued the beans so highly that they used them as money\n○正解の根拠: カカオ豆の価値＝お金として使った\n×ひっかけ: 装飾用・廃棄ではない\n→結論: 答えはD',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea3_054',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r18}\n\nQuestion: What changed chocolate in the nineteenth century?`,
    choices: [
      { key: 'A', text: 'Europeans stopped adding sugar to it.' },
      { key: 'B', text: 'New machines made a smooth solid chocolate that could be produced cheaply.' },
      { key: 'C', text: 'It became a luxury only the wealthy could enjoy.' },
      { key: 'D', text: 'People began drinking it cold instead of hot.' },
    ],
    correctKey: 'C',
    explanation: '誤り。正しくは新しい機械が滑らかな固形チョコを安く大量に作れるようにし、金持ちの珍味から万人の楽しみになりました。本文「new machines could press cacao ... to produce a smooth solid ... could be made cheaply in large quantities」。\n【図解】読み取りのポイント\n★本文の該当箇所: new machines ... produce a smooth solid ... made cheaply in large quantities\n○正解の根拠: 19世紀の変化＝機械で安価な固形チョコが誕生\n×ひっかけ: 金持ちだけの珍味になったのではなく、逆に万人のものになった\n→結論: 答えはB',
    difficulty: 'advanced',
  },

  // ── Passage 19: Sign language (055-057) ──────────────────────
  {
    id: 'eiken_2kyu_rea3_055',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r19}\n\nQuestion: What common misunderstanding does the passage correct?`,
    choices: [
      { key: 'A', text: 'That sign language is spoken only in English-speaking countries.' },
      { key: 'B', text: 'That sign language is just simple gestures or a signed version of a spoken language.' },
      { key: 'C', text: 'That there is only one sign language in the world.' },
      { key: 'D', text: 'That deaf children cannot learn language at all.' },
    ],
    correctKey: 'B',
    explanation: '本文に「A common misunderstanding is that sign language is a simple set of gestures, or merely a signed version of a spoken language」とあり、実際には独自の文法を持つ完全な自然言語だと正します。世界に一つしかないという誤解は別の段で触れる例です。\n【図解】読み取りのポイント\n★本文の該当箇所: a simple set of gestures, or merely a signed version of a spoken language\n○正解の根拠: 正す誤解＝単なるジェスチャーや音声言語の手話版という考え\n×ひっかけ: 「世界に一つ」の誤解は別途の説明例\n→結論: 答えはB',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea3_056',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r19}\n\nQuestion: What does the example of ASL and BSL show?`,
    choices: [
      { key: 'A', text: 'Two sign languages can be completely different even where the same spoken language is used.' },
      { key: 'B', text: 'All sign languages are basically the same.' },
      { key: 'C', text: 'Sign language cannot express abstract ideas.' },
      { key: 'D', text: 'British people cannot learn American Sign Language.' },
    ],
    correctKey: 'A',
    explanation: '本文に「American Sign Language and British Sign Language ... are completely different and not understandable to each other, even though both countries speak English」とあり、同じ英語圏でも手話は全く異なることを示します。全ての手話が同じというのは逆です。\n【図解】読み取りのポイント\n★本文の該当箇所: ASL and BSL ... completely different ... even though both countries speak English\n○正解の根拠: 例が示すこと＝同じ英語圏でも手話は全く別\n×ひっかけ: すべての手話が同じ、は逆\n→結論: 答えはA',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea3_057',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r19}\n\nQuestion: What did linguists find is strong evidence that the brain is built for language?`,
    choices: [
      { key: 'A', text: 'Sign languages use facial expressions as well as hands.' },
      { key: 'B', text: 'Sign languages can express jokes and abstract ideas.' },
      { key: 'C', text: 'Every country has invented its own sign language.' },
      { key: 'D', text: 'Deaf children learn sign in the same stages and speed as hearing children learn to speak.' },
    ],
    correctKey: 'D',
    explanation: '本文に「deaf children exposed to sign language from birth learn it in the same natural stages, and at the same speed, as hearing children learn to speak — strong evidence that the human brain is built for language」とあり、これが脳が言語に適応している証拠です。表情の使用や冗談の表現は別の特徴です。\n【図解】読み取りのポイント\n★本文の該当箇所: deaf children ... learn it in the same natural stages, and at the same speed\n○正解の根拠: 証拠＝ろうの子が聴児と同じ段階・速度で手話を習得\n×ひっかけ: 表情の使用・冗談の表現は別の特徴\n→結論: 答えはD',
    difficulty: 'advanced',
  },

  // ── Passage 20: Placebo effect (058-060) ─────────────────────
  {
    id: 'eiken_2kyu_rea3_058',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r20}\n\nQuestion: What is a placebo?`,
    choices: [
      { key: 'A', text: 'A powerful new drug for treating infections.' },
      { key: 'B', text: 'A machine used to measure pain.' },
      { key: 'C', text: 'A treatment with no active ingredient, used for comparison.' },
      { key: 'D', text: 'A doctor who treats patients for free.' },
    ],
    correctKey: 'C',
    explanation: '本文に「a "placebo" — a pill or treatment with no active ingredient — so that doctors can tell whether a real drug works better」とあり、有効成分のない、比較のための治療です。強力な新薬でも測定機器でもありません。\n【図解】読み取りのポイント\n★本文の該当箇所: a treatment with no active ingredient ... whether a real drug works better\n○正解の根拠: プラセボ＝有効成分のない比較用の治療\n×ひっかけ: 新薬や測定機器ではない\n→結論: 答えはC',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea3_059',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r20}\n\nQuestion: For which conditions is the placebo effect strongest?`,
    choices: [
      { key: 'A', text: 'For conditions influenced by the brain, such as pain.' },
      { key: 'B', text: 'For infections that follow their own course.' },
      { key: 'C', text: 'For broken bones and other injuries.' },
      { key: 'D', text: 'For diseases that cannot be treated at all.' },
    ],
    correctKey: 'A',
    explanation: '本文に「The effect is strongest for conditions influenced by the brain, such as pain, and weakest for diseases like infections」とあり、痛みなど脳の影響を受ける症状で最も強く、感染症では弱いです。感染症は最も弱い方の例です。\n【図解】読み取りのポイント\n★本文の該当箇所: strongest for conditions influenced by the brain, such as pain\n○正解の根拠: 最も強い＝痛みなど脳の影響を受ける症状\n×ひっかけ: 感染症は効果が最も弱い側の例\n→結論: 答えはA',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea3_060',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question.\n\n${r20}\n\nQuestion: What surprising finding do recent studies suggest?`,
    choices: [
      { key: 'A', text: 'Placebos cure infections faster than real drugs.' },
      { key: 'B', text: 'Placebos can help even patients who are openly told the pill is fake.' },
      { key: 'C', text: 'Placebos work only when patients do not know they are ill.' },
      { key: 'D', text: 'Doctors have stopped studying the placebo effect.' },
    ],
    correctKey: 'B',
    explanation: '本文に「placebos can sometimes help patients who are openly told that they are receiving a fake pill」とあり、偽薬だと知らされていても効くことがあるという驚きの発見です。医師はこれを軽視せず真剣に研究しています。\n【図解】読み取りのポイント\n★本文の該当箇所: placebos can sometimes help patients who are openly told ... a fake pill\n○正解の根拠: 驚きの発見＝偽薬と知らされても効くことがある\n×ひっかけ: 医師は研究をやめておらず真剣に取り組む\n→結論: 答えはB',
    difficulty: 'advanced',
  },
];
